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
a[c]=function(){a[c]=function(){H.kg(b)}
var t
var s=d
try{if(a[b]===u){t=a[b]=s
t=a[b]=d()}else t=a[b]}finally{if(t===s)a[b]=null
a[c]=function(){return this[b]}}return t}}function makeConstList(a){a.immutable$list=Array
a.fixed$length=Array
return a}function convertToFastObject(a){function t(){}t.prototype=a
new t()
return a}function convertAllToFastObject(a){for(var u=0;u<a.length;++u)convertToFastObject(a[u])}var y=0
function tearOffGetter(a,b,c,d,e){return e?new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+d+y+++"(receiver) {"+"if (c === null) c = "+"H.hx"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, true, name);"+"return new c(this, funcs[0], receiver, name);"+"}")(a,b,c,d,H,null):new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+d+y+++"() {"+"if (c === null) c = "+"H.hx"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, false, name);"+"return new c(this, funcs[0], null, name);"+"}")(a,b,c,d,H,null)}function tearOff(a,b,c,d,e,f){var u=null
return d?function(){if(u===null)u=H.hx(this,a,b,c,true,false,e).prototype
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
if(w[u][a])return w[u][a]}}var C={},H={hj:function hj(a){this.a=a},
hO:function(){return new P.eD("No element")},
P:function P(a){this.a=a},
dH:function dH(){},
cC:function cC(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=null
_.$ti=d},
e7:function e7(a,b,c){this.a=a
this.b=b
this.$ti=c},
e8:function e8(a,b,c){var _=this
_.a=null
_.b=a
_.c=b
_.$ti=c},
fm:function fm(a,b,c){this.a=a
this.b=b
this.$ti=c},
fn:function fn(a,b,c){this.a=a
this.b=b
this.$ti=c},
b8:function b8(){},
d9:function d9(){},
d8:function d8(){},
bn:function(a){var u,t
u=H.M(v.mangledGlobalNames[a])
if(typeof u==="string")return u
t="minified:"+a
return t},
k_:function(a){return v.types[H.Y(a)]},
k4:function(a,b){var u
if(b!=null){u=b.x
if(u!=null)return u}return!!J.K(a).$iay},
f:function(a){var u
if(typeof a==="string")return a
if(typeof a==="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
u=J.aa(a)
if(typeof u!=="string")throw H.i(H.bi(a))
return u},
jr:function(a){var u,t,s
u=a.$reflectionInfo
if(u==null)return
u=J.dU(u)
t=u[0]
s=u[1]
return new H.eo(a,u,(t&2)===2,t>>2,s>>1,(s&1)===1,u[2])},
bI:function(a){var u=a.$identityHash
if(u==null){u=Math.random()*0x3fffffff|0
a.$identityHash=u}return u},
bc:function(a){return H.jh(a)+H.hv(H.b_(a),0,null)},
jh:function(a){var u,t,s,r,q,p,o,n,m
u=J.K(a)
t=u.constructor
if(typeof t=="function"){s=t.name
r=typeof s==="string"?s:null}else r=null
q=r==null
if(q||u===C.D||!!u.$id7){p=C.u(a)
if(q)r=p
if(p==="Object"){o=a.constructor
if(typeof o=="function"){n=String(o).match(/^\s*function\s*([\w$]*)\s*\(/)
m=n==null?null:n[1]
if(typeof m==="string"&&/^\w+$/.test(m))r=m}}return r}r=r
return H.bn(r.length>1&&C.j.aM(r,0)===36?C.j.c0(r,1):r)},
i_:function(a){var u,t,s,r,q
u=a.length
if(u<=500)return String.fromCharCode.apply(null,a)
for(t="",s=0;s<u;s=r){r=s+500
q=r<u?r:u
t+=String.fromCharCode.apply(null,a.slice(s,q))}return t},
jq:function(a){var u,t,s,r
u=H.b([],[P.u])
for(t=a.length,s=0;s<a.length;a.length===t||(0,H.v)(a),++s){r=a[s]
if(typeof r!=="number"||Math.floor(r)!==r)throw H.i(H.bi(r))
if(r<=65535)C.a.h(u,r)
else if(r<=1114111){C.a.h(u,55296+(C.h.aQ(r-65536,10)&1023))
C.a.h(u,56320+(r&1023))}else throw H.i(H.bi(r))}return H.i_(u)},
i0:function(a){var u,t,s
for(u=a.length,t=0;t<u;++t){s=a[t]
if(typeof s!=="number"||Math.floor(s)!==s)throw H.i(H.bi(s))
if(s<0)throw H.i(H.bi(s))
if(s>65535)return H.jq(a)}return H.i_(a)},
jp:function(a){var u
if(a<=65535)return String.fromCharCode(a)
if(a<=1114111){u=a-65536
return String.fromCharCode((55296|C.h.aQ(u,10))>>>0,56320|u&1023)}throw H.i(P.ai(a,0,1114111,null,null))},
bb:function(a){if(a.date===void 0)a.date=new Date(a.a)
return a.date},
jo:function(a){var u=H.bb(a).getFullYear()+0
return u},
jm:function(a){var u=H.bb(a).getMonth()+1
return u},
ji:function(a){var u=H.bb(a).getDate()+0
return u},
jj:function(a){var u=H.bb(a).getHours()+0
return u},
jl:function(a){var u=H.bb(a).getMinutes()+0
return u},
jn:function(a){var u=H.bb(a).getSeconds()+0
return u},
jk:function(a){var u=H.bb(a).getMilliseconds()+0
return u},
b0:function(a){throw H.i(H.bi(a))},
d:function(a,b){if(a==null)J.ce(a)
throw H.i(H.c8(a,b))},
c8:function(a,b){var u,t
if(typeof b!=="number"||Math.floor(b)!==b)return new P.am(!0,b,"index",null)
u=H.Y(J.ce(a))
if(!(b<0)){if(typeof u!=="number")return H.b0(u)
t=b>=u}else t=!0
if(t)return P.bz(b,a,"index",null,u)
return P.cR(b,"index",null)},
jX:function(a,b,c){if(a>c)return new P.bd(0,c,!0,a,"start","Invalid value")
if(b!=null)if(b<a||b>c)return new P.bd(a,c,!0,b,"end","Invalid value")
return new P.am(!0,b,"end",null)},
bi:function(a){return new P.am(!0,a,null,null)},
jT:function(a){if(typeof a!=="number")throw H.i(H.bi(a))
return a},
i:function(a){var u
if(a==null)a=new P.cL()
u=new Error()
u.dartException=a
if("defineProperty" in Object){Object.defineProperty(u,"message",{get:H.iH})
u.name=""}else u.toString=H.iH
return u},
iH:function(){return J.aa(this.dartException)},
n:function(a){throw H.i(a)},
v:function(a){throw H.i(P.bt(a))},
au:function(a){var u,t,s,r,q,p
a=a.replace(String({}),'$receiver$').replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
u=a.match(/\\\$[a-zA-Z]+\\\$/g)
if(u==null)u=H.b([],[P.t])
t=u.indexOf("\\$arguments\\$")
s=u.indexOf("\\$argumentsExpr\\$")
r=u.indexOf("\\$expr\\$")
q=u.indexOf("\\$method\\$")
p=u.indexOf("\\$receiver\\$")
return new H.eS(a.replace(new RegExp('\\\\\\$arguments\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$argumentsExpr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$expr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$method\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$receiver\\\\\\$','g'),'((?:x|[^x])*)'),t,s,r,q,p)},
eT:function(a){return function($expr$){var $argumentsExpr$='$arguments$'
try{$expr$.$method$($argumentsExpr$)}catch(u){return u.message}}(a)},
ia:function(a){return function($expr$){try{$expr$.$method$}catch(u){return u.message}}(a)},
hV:function(a,b){return new H.el(a,b==null?null:b.method)},
hk:function(a,b){var u,t
u=b==null
t=u?null:b.method
return new H.dX(a,t,u?null:b.receiver)},
b1:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g
u=new H.ha(a)
if(a==null)return
if(typeof a!=="object")return a
if("dartException" in a)return u.$1(a.dartException)
else if(!("message" in a))return a
t=a.message
if("number" in a&&typeof a.number=="number"){s=a.number
r=s&65535
if((C.h.aQ(s,16)&8191)===10)switch(r){case 438:return u.$1(H.hk(H.f(t)+" (Error "+r+")",null))
case 445:case 5007:return u.$1(H.hV(H.f(t)+" (Error "+r+")",null))}}if(a instanceof TypeError){q=$.iK()
p=$.iL()
o=$.iM()
n=$.iN()
m=$.iQ()
l=$.iR()
k=$.iP()
$.iO()
j=$.iT()
i=$.iS()
h=q.Z(t)
if(h!=null)return u.$1(H.hk(H.M(t),h))
else{h=p.Z(t)
if(h!=null){h.method="call"
return u.$1(H.hk(H.M(t),h))}else{h=o.Z(t)
if(h==null){h=n.Z(t)
if(h==null){h=m.Z(t)
if(h==null){h=l.Z(t)
if(h==null){h=k.Z(t)
if(h==null){h=n.Z(t)
if(h==null){h=j.Z(t)
if(h==null){h=i.Z(t)
g=h!=null}else g=!0}else g=!0}else g=!0}else g=!0}else g=!0}else g=!0}else g=!0
if(g)return u.$1(H.hV(H.M(t),h))}}return u.$1(new H.f4(typeof t==="string"?t:""))}if(a instanceof RangeError){if(typeof t==="string"&&t.indexOf("call stack")!==-1)return new P.cY()
t=function(b){try{return String(b)}catch(f){}return null}(a)
return u.$1(new P.am(!1,null,null,typeof t==="string"?t.replace(/^RangeError:\s*/,""):t))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof t==="string"&&t==="too much recursion")return new P.cY()
return a},
bl:function(a){var u
if(a==null)return new H.dl(a)
u=a.$cachedTrace
if(u!=null)return u
return a.$cachedTrace=new H.dl(a)},
jZ:function(a,b){var u,t,s,r
u=a.length
for(t=0;t<u;t=r){s=t+1
r=s+1
b.T(0,a[t],a[s])}return b},
k3:function(a,b,c,d,e,f){H.l(a,"$ihg")
switch(H.Y(b)){case 0:return a.$0()
case 1:return a.$1(c)
case 2:return a.$2(c,d)
case 3:return a.$3(c,d,e)
case 4:return a.$4(c,d,e,f)}throw H.i(P.o("Unsupported number of arguments for wrapped closure"))},
bj:function(a,b){var u
H.Y(b)
if(a==null)return
u=a.$identity
if(!!u)return u
u=function(c,d,e){return function(f,g,h,i){return e(c,d,f,g,h,i)}}(a,b,H.k3)
a.$identity=u
return u},
j4:function(a,b,c,d,e,f,g){var u,t,s,r,q,p,o,n,m,l,k,j,i
u=b[0]
t=u.$callName
if(!!J.K(d).$ia){u.$reflectionInfo=d
s=H.jr(u).r}else s=d
r=e?Object.create(new H.eE().constructor.prototype):Object.create(new H.bp(null,null,null,null).constructor.prototype)
r.$initialize=r.constructor
if(e)q=function static_tear_off(){this.$initialize()}
else{p=$.an
if(typeof p!=="number")return p.H()
$.an=p+1
p=new Function("a,b,c,d"+p,"this.$initialize(a,b,c,d"+p+")")
q=p}r.constructor=q
q.prototype=r
if(!e){o=H.hM(a,u,f)
o.$reflectionInfo=d}else{r.$static_name=g
o=u}if(typeof s=="number")n=function(h,a0){return function(){return h(a0)}}(H.k_,s)
else if(typeof s=="function")if(e)n=s
else{m=f?H.hK:H.hc
n=function(h,a0){return function(){return h.apply({$receiver:a0(this)},arguments)}}(s,m)}else throw H.i("Error in reflectionInfo.")
r.$S=n
r[t]=o
for(l=o,k=1;k<b.length;++k){j=b[k]
i=j.$callName
if(i!=null){j=e?j:H.hM(a,j,f)
r[i]=j}if(k===c){j.$reflectionInfo=d
l=j}}r.$C=l
r.$R=u.$R
r.$D=u.$D
return q},
j1:function(a,b,c,d){var u=H.hc
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,u)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,u)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,u)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,u)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,u)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,u)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,u)}},
hM:function(a,b,c){var u,t,s,r,q,p,o
if(c)return H.j3(a,b)
u=b.$stubName
t=b.length
s=a[u]
r=b==null?s==null:b===s
q=!r||t>=27
if(q)return H.j1(t,!r,u,b)
if(t===0){r=$.an
if(typeof r!=="number")return r.H()
$.an=r+1
p="self"+r
r="return function(){var "+p+" = this."
q=$.bq
if(q==null){q=H.dy("self")
$.bq=q}return new Function(r+H.f(q)+";return "+p+"."+H.f(u)+"();}")()}o="abcdefghijklmnopqrstuvwxyz".split("").splice(0,t).join(",")
r=$.an
if(typeof r!=="number")return r.H()
$.an=r+1
o+=r
r="return function("+o+"){return this."
q=$.bq
if(q==null){q=H.dy("self")
$.bq=q}return new Function(r+H.f(q)+"."+H.f(u)+"("+o+");}")()},
j2:function(a,b,c,d){var u,t
u=H.hc
t=H.hK
switch(b?-1:a){case 0:throw H.i(H.jv("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,u,t)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,u,t)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,u,t)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,u,t)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,u,t)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,u,t)
default:return function(e,f,g,h){return function(){h=[g(this)]
Array.prototype.push.apply(h,arguments)
return e.apply(f(this),h)}}(d,u,t)}},
j3:function(a,b){var u,t,s,r,q,p,o,n
u=$.bq
if(u==null){u=H.dy("self")
$.bq=u}t=$.hJ
if(t==null){t=H.dy("receiver")
$.hJ=t}s=b.$stubName
r=b.length
q=a[s]
p=b==null?q==null:b===q
o=!p||r>=28
if(o)return H.j2(r,!p,s,b)
if(r===1){u="return function(){return this."+H.f(u)+"."+H.f(s)+"(this."+H.f(t)+");"
t=$.an
if(typeof t!=="number")return t.H()
$.an=t+1
return new Function(u+t+"}")()}n="abcdefghijklmnopqrstuvwxyz".split("").splice(0,r-1).join(",")
u="return function("+n+"){return this."+H.f(u)+"."+H.f(s)+"(this."+H.f(t)+", "+n+");"
t=$.an
if(typeof t!=="number")return t.H()
$.an=t+1
return new Function(u+t+"}")()},
hx:function(a,b,c,d,e,f,g){return H.j4(a,b,H.Y(c),d,!!e,!!f,g)},
hc:function(a){return a.a},
hK:function(a){return a.c},
dy:function(a){var u,t,s,r,q
u=new H.bp("self","target","receiver","name")
t=J.dU(Object.getOwnPropertyNames(u))
for(s=t.length,r=0;r<s;++r){q=t[r]
if(u[q]===a)return q}},
M:function(a){if(a==null)return a
if(typeof a==="string")return a
throw H.i(H.ak(a,"String"))},
kU:function(a){if(a==null)return a
if(typeof a==="number")return a
throw H.i(H.ak(a,"double"))},
k9:function(a){if(a==null)return a
if(typeof a==="number")return a
throw H.i(H.ak(a,"num"))},
iw:function(a){if(a==null)return a
if(typeof a==="boolean")return a
throw H.i(H.ak(a,"bool"))},
Y:function(a){if(a==null)return a
if(typeof a==="number"&&Math.floor(a)===a)return a
throw H.i(H.ak(a,"int"))},
iE:function(a,b){throw H.i(H.ak(a,H.bn(H.M(b).substring(2))))},
kb:function(a,b){throw H.i(H.j0(a,H.bn(H.M(b).substring(2))))},
l:function(a,b){if(a==null)return a
if((typeof a==="object"||typeof a==="function")&&J.K(a)[b])return a
H.iE(a,b)},
c:function(a,b){var u
if(a!=null)u=(typeof a==="object"||typeof a==="function")&&J.K(a)[b]
else u=!0
if(u)return a
H.kb(a,b)},
h5:function(a){if(a==null)return a
if(!!J.K(a).$ia)return a
throw H.i(H.ak(a,"List<dynamic>"))},
k5:function(a,b){var u
if(a==null)return a
u=J.K(a)
if(!!u.$ia)return a
if(u[b])return a
H.iE(a,b)},
ix:function(a){var u
if("$S" in a){u=a.$S
if(typeof u=="number")return v.types[H.Y(u)]
else return a.$S()}return},
ds:function(a,b){var u
if(a==null)return!1
if(typeof a=="function")return!0
u=H.ix(J.K(a))
if(u==null)return!1
return H.im(u,null,b,null)},
j:function(a,b){var u,t
if(a==null)return a
if($.hs)return a
$.hs=!0
try{if(H.ds(a,b))return a
u=H.h8(b)
t=H.ak(a,u)
throw H.i(t)}finally{$.hs=!1}},
hy:function(a,b){if(a!=null&&!H.hw(a,b))H.n(H.ak(a,H.h8(b)))
return a},
ak:function(a,b){return new H.eU("TypeError: "+P.dK(a)+": type '"+H.ir(a)+"' is not a subtype of type '"+b+"'")},
j0:function(a,b){return new H.dz("CastError: "+P.dK(a)+": type '"+H.ir(a)+"' is not a subtype of type '"+b+"'")},
ir:function(a){var u,t
u=J.K(a)
if(!!u.$ibr){t=H.ix(u)
if(t!=null)return H.h8(t)
return"Closure"}return H.bc(a)},
kg:function(a){throw H.i(new P.dD(H.M(a)))},
jv:function(a){return new H.et(a)},
iz:function(a){return v.getIsolateTag(a)},
b:function(a,b){a.$ti=b
return a},
b_:function(a){if(a==null)return
return a.$ti},
kV:function(a,b,c){return H.bm(a["$a"+H.f(c)],H.b_(b))},
h0:function(a,b,c,d){var u
H.M(c)
H.Y(d)
u=H.bm(a["$a"+H.f(c)],H.b_(b))
return u==null?null:u[d]},
al:function(a,b,c){var u
H.M(b)
H.Y(c)
u=H.bm(a["$a"+H.f(b)],H.b_(a))
return u==null?null:u[c]},
r:function(a,b){var u
H.Y(b)
u=H.b_(a)
return u==null?null:u[b]},
h8:function(a){return H.aZ(a,null)},
aZ:function(a,b){var u,t
H.h(b,"$ia",[P.t],"$aa")
if(a==null)return"dynamic"
if(a===-1)return"void"
if(typeof a==="object"&&a!==null&&a.constructor===Array)return H.bn(a[0].name)+H.hv(a,1,b)
if(typeof a=="function")return H.bn(a.name)
if(a===-2)return"dynamic"
if(typeof a==="number"){H.Y(a)
if(b==null||a<0||a>=b.length)return"unexpected-generic-index:"+a
u=b.length
t=u-a-1
if(t<0||t>=u)return H.d(b,t)
return H.f(b[t])}if('func' in a)return H.jJ(a,b)
if('futureOr' in a)return"FutureOr<"+H.aZ("type" in a?a.type:null,b)+">"
return"unknown-reified-type"},
jJ:function(a,b){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c
u=[P.t]
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
o=C.j.H(o,b[m])
l=t[p]
if(l!=null&&l!==P.E)o+=" extends "+H.aZ(l,b)}o+=">"}else{o=""
s=null}k=!!a.v?"void":H.aZ(a.ret,b)
if("args" in a){j=a.args
for(u=j.length,i="",h="",g=0;g<u;++g,h=", "){f=j[g]
i=i+h+H.aZ(f,b)}}else{i=""
h=""}if("opt" in a){e=a.opt
i+=h+"["
for(u=e.length,h="",g=0;g<u;++g,h=", "){f=e[g]
i=i+h+H.aZ(f,b)}i+="]"}if("named" in a){d=a.named
i+=h+"{"
for(u=H.jY(d),m=u.length,h="",g=0;g<m;++g,h=", "){c=H.M(u[g])
i=i+h+H.aZ(d[c],b)+(" "+H.f(c))}i+="}"}if(s!=null)b.length=s
return o+"("+i+") => "+k},
hv:function(a,b,c){var u,t,s,r,q,p
H.h(c,"$ia",[P.t],"$aa")
if(a==null)return""
u=new P.aW("")
for(t=b,s="",r=!0,q="";t<a.length;++t,s=", "){u.a=q+s
p=a[t]
if(p!=null)r=!1
q=u.a+=H.aZ(p,c)}return"<"+u.i(0)+">"},
bm:function(a,b){if(a==null)return b
a=a.apply(null,b)
if(a==null)return
if(typeof a==="object"&&a!==null&&a.constructor===Array)return a
if(typeof a=="function")return a.apply(null,b)
return b},
dr:function(a,b,c,d){var u,t
H.M(b)
H.h5(c)
H.M(d)
if(a==null)return!1
u=H.b_(a)
t=J.K(a)
if(t[b]==null)return!1
return H.iu(H.bm(t[d],u),null,c,null)},
h:function(a,b,c,d){H.M(b)
H.h5(c)
H.M(d)
if(a==null)return a
if(H.dr(a,b,c,d))return a
throw H.i(H.ak(a,function(e,f){return e.replace(/[^<,> ]+/g,function(g){return f[g]||g})}(H.bn(b.substring(2))+H.hv(c,0,null),v.mangledGlobalNames)))},
iu:function(a,b,c,d){var u,t
if(c==null)return!0
if(a==null){u=c.length
for(t=0;t<u;++t)if(!H.ae(null,null,c[t],d))return!1
return!0}u=a.length
for(t=0;t<u;++t)if(!H.ae(a[t],b,c[t],d))return!1
return!0},
kS:function(a,b,c){return a.apply(b,H.bm(J.K(b)["$a"+H.f(c)],H.b_(b)))},
iB:function(a){var u
if(typeof a==="number")return!1
if('futureOr' in a){u="type" in a?a.type:null
return a==null||a.name==="E"||a.name==="z"||a===-1||a===-2||H.iB(u)}return!1},
hw:function(a,b){var u,t
if(a==null)return b==null||b.name==="E"||b.name==="z"||b===-1||b===-2||H.iB(b)
if(b==null||b===-1||b.name==="E"||b===-2)return!0
if(typeof b=="object"){if('futureOr' in b)if(H.hw(a,"type" in b?b.type:null))return!0
if('func' in b)return H.ds(a,b)}u=J.K(a).constructor
t=H.b_(a)
if(t!=null){t=t.slice()
t.splice(0,0,u)
u=t}return H.ae(u,null,b,null)},
w:function(a,b){if(a!=null&&!H.hw(a,b))throw H.i(H.ak(a,H.h8(b)))
return a},
ae:function(a,b,c,d){var u,t,s,r,q,p,o,n,m
if(a===c)return!0
if(c==null||c===-1||c.name==="E"||c===-2)return!0
if(a===-2)return!0
if(a==null||a===-1||a.name==="E"||a===-2){if(typeof c==="number")return!1
if('futureOr' in c)return H.ae(a,b,"type" in c?c.type:null,d)
return!1}if(typeof a==="number")return!1
if(typeof c==="number")return!1
if(a.name==="z")return!0
if('func' in c)return H.im(a,b,c,d)
if('func' in a)return c.name==="hg"
u=typeof a==="object"&&a!==null&&a.constructor===Array
t=u?a[0]:a
if('futureOr' in c){s="type" in c?c.type:null
if('futureOr' in a)return H.ae("type" in a?a.type:null,b,s,d)
else if(H.ae(a,b,s,d))return!0
else{if(!('$i'+"bx" in t.prototype))return!1
r=t.prototype["$a"+"bx"]
q=H.bm(r,u?a.slice(1):null)
return H.ae(typeof q==="object"&&q!==null&&q.constructor===Array?q[0]:null,b,s,d)}}p=typeof c==="object"&&c!==null&&c.constructor===Array
o=p?c[0]:c
if(o!==t){n=o.name
if(!('$i'+n in t.prototype))return!1
m=t.prototype["$a"+n]}else m=null
if(!p)return!0
u=u?a.slice(1):null
p=c.slice(1)
return H.iu(H.bm(m,u),b,p,d)},
im:function(a,b,c,d){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g
if(!('func' in a))return!1
if("bounds" in a){if(!("bounds" in c))return!1
u=a.bounds
t=c.bounds
if(u.length!==t.length)return!1}else if("bounds" in c)return!1
if(!H.ae(a.ret,b,c.ret,d))return!1
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
for(k=0;k<o;++k)if(!H.ae(r[k],d,s[k],b))return!1
for(j=k,i=0;j<n;++i,++j)if(!H.ae(r[j],d,q[i],b))return!1
for(j=0;j<l;++i,++j)if(!H.ae(p[j],d,q[i],b))return!1
h=a.named
g=c.named
if(g==null)return!0
if(h==null)return!1
return H.k8(h,b,g,d)},
k8:function(a,b,c,d){var u,t,s,r
u=Object.getOwnPropertyNames(c)
for(t=u.length,s=0;s<t;++s){r=u[s]
if(!Object.hasOwnProperty.call(a,r))return!1
if(!H.ae(c[r],d,a[r],b))return!1}return!0},
kT:function(a,b,c){Object.defineProperty(a,H.M(b),{value:c,enumerable:false,writable:true,configurable:true})},
k6:function(a){var u,t,s,r,q,p
u=H.M($.iA.$1(a))
t=$.fY[u]
if(t!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:t,enumerable:false,writable:true,configurable:true})
return t.i}s=$.h4[u]
if(s!=null)return s
r=v.interceptorsByTag[u]
if(r==null){u=H.M($.it.$2(a,u))
if(u!=null){t=$.fY[u]
if(t!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:t,enumerable:false,writable:true,configurable:true})
return t.i}s=$.h4[u]
if(s!=null)return s
r=v.interceptorsByTag[u]}}if(r==null)return
s=r.prototype
q=u[0]
if(q==="!"){t=H.h7(s)
$.fY[u]=t
Object.defineProperty(a,v.dispatchPropertyName,{value:t,enumerable:false,writable:true,configurable:true})
return t.i}if(q==="~"){$.h4[u]=s
return s}if(q==="-"){p=H.h7(s)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}if(q==="+")return H.iD(a,s)
if(q==="*")throw H.i(P.ib(u))
if(v.leafTags[u]===true){p=H.h7(s)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}else return H.iD(a,s)},
iD:function(a,b){var u=Object.getPrototypeOf(a)
Object.defineProperty(u,v.dispatchPropertyName,{value:J.hB(b,u,null,null),enumerable:false,writable:true,configurable:true})
return b},
h7:function(a){return J.hB(a,!1,null,!!a.$iay)},
k7:function(a,b,c){var u=b.prototype
if(v.leafTags[a]===true)return H.h7(u)
else return J.hB(u,c,null,null)},
k1:function(){if(!0===$.hA)return
$.hA=!0
H.k2()},
k2:function(){var u,t,s,r,q,p,o,n
$.fY=Object.create(null)
$.h4=Object.create(null)
H.k0()
u=v.interceptorsByTag
t=Object.getOwnPropertyNames(u)
if(typeof window!="undefined"){window
s=function(){}
for(r=0;r<t.length;++r){q=t[r]
p=$.iF.$1(q)
if(p!=null){o=H.k7(q,u[q],p)
if(o!=null){Object.defineProperty(p,v.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
s.prototype=p}}}}for(r=0;r<t.length;++r){q=t[r]
if(/^[A-Za-z_]/.test(q)){n=u[q]
u["!"+q]=n
u["~"+q]=n
u["-"+q]=n
u["+"+q]=n
u["*"+q]=n}}},
k0:function(){var u,t,s,r,q,p,o
u=C.I()
u=H.bh(C.F,H.bh(C.K,H.bh(C.t,H.bh(C.t,H.bh(C.J,H.bh(C.G,H.bh(C.H(C.u),u)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){t=dartNativeDispatchHooksTransformer
if(typeof t=="function")t=[t]
if(t.constructor==Array)for(s=0;s<t.length;++s){r=t[s]
if(typeof r=="function")u=r(u)||u}}q=u.getTag
p=u.getUnknownTag
o=u.prototypeForTag
$.iA=new H.h1(q)
$.it=new H.h2(p)
$.iF=new H.h3(o)},
bh:function(a,b){return a(b)||b},
jc:function(a,b,c,d){var u,t,s,r
u=b?"m":""
t=c?"":"i"
s=d?"g":""
r=function(e,f){try{return new RegExp(e,f)}catch(q){return q}}(a,u+t+s)
if(r instanceof RegExp)return r
throw H.i(new P.dR("Illegal RegExp pattern ("+String(r)+")",a,null))},
ke:function(a,b,c){var u=a.indexOf(b,c)
return u>=0},
iG:function(a,b,c){var u,t,s
if(b==="")if(a==="")return c
else{u=a.length
for(t=c,s=0;s<u;++s)t=t+a[s]+c
return t.charCodeAt(0)==0?t:t}else return a.replace(new RegExp(b.replace(/[[\]{}()*+?.\\^$|]/g,"\\$&"),'g'),c.replace(/\$/g,"$$$$"))},
eo:function eo(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.x=null},
eS:function eS(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
el:function el(a,b){this.a=a
this.b=b},
dX:function dX(a,b,c){this.a=a
this.b=b
this.c=c},
f4:function f4(a){this.a=a},
ha:function ha(a){this.a=a},
dl:function dl(a){this.a=a
this.b=null},
br:function br(){},
eJ:function eJ(){},
eE:function eE(){},
bp:function bp(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
eU:function eU(a){this.a=a},
dz:function dz(a){this.a=a},
et:function et(a){this.a=a},
az:function az(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
e_:function e_(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
e0:function e0(a,b){this.a=a
this.$ti=b},
e1:function e1(a,b,c){var _=this
_.a=a
_.b=b
_.d=_.c=null
_.$ti=c},
h1:function h1(a){this.a=a},
h2:function h2(a){this.a=a},
h3:function h3(a){this.a=a},
dW:function dW(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
c5:function(a){return a},
c4:function(a,b,c){if(a>>>0!==a||a>=c)throw H.i(H.c8(b,a))},
jI:function(a,b,c){var u
if(!(a>>>0!==a))u=b>>>0!==b||a>b||b>c
else u=!0
if(u)throw H.i(H.jX(a,b,c))
return b},
cJ:function cJ(){},
cG:function cG(){},
cH:function cH(){},
cI:function cI(){},
eg:function eg(){},
eh:function eh(){},
ei:function ei(){},
cK:function cK(){},
ej:function ej(){},
c_:function c_(){},
c0:function c0(){},
c1:function c1(){},
c2:function c2(){},
jY:function(a){return J.hP(a?Object.keys(a):[],null)},
ka:function(a){if(typeof dartPrint=="function"){dartPrint(a)
return}if(typeof console=="object"&&typeof console.log!="undefined"){console.log(a)
return}if(typeof window=="object")return
if(typeof print=="function"){print(a)
return}throw"Unable to print message: "+String(a)}},J={
hB:function(a,b,c,d){return{i:a,p:b,e:c,x:d}},
h_:function(a){var u,t,s,r,q
u=a[v.dispatchPropertyName]
if(u==null)if($.hA==null){H.k1()
u=a[v.dispatchPropertyName]}if(u!=null){t=u.p
if(!1===t)return u.i
if(!0===t)return a
s=Object.getPrototypeOf(a)
if(t===s)return u.i
if(u.e===s)throw H.i(P.ib("Return interceptor for "+H.f(t(a,u))))}r=a.constructor
q=r==null?null:r[$.hF()]
if(q!=null)return q
q=H.k6(a)
if(q!=null)return q
if(typeof a=="function")return C.L
t=Object.getPrototypeOf(a)
if(t==null)return C.v
if(t===Object.prototype)return C.v
if(typeof r=="function"){Object.defineProperty(r,$.hF(),{value:C.p,enumerable:false,writable:true,configurable:true})
return C.p}return C.p},
jb:function(a,b){if(typeof a!=="number"||Math.floor(a)!==a)throw H.i(P.hb(a,"length","is not an integer"))
if(a<0||a>4294967295)throw H.i(P.ai(a,0,4294967295,"length",null))
return J.hP(new Array(a),b)},
hP:function(a,b){return J.dU(H.b(a,[b]))},
dU:function(a){H.h5(a)
a.fixed$length=Array
return a},
K:function(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.cw.prototype
return J.cv.prototype}if(typeof a=="string")return J.bC.prototype
if(a==null)return J.cx.prototype
if(typeof a=="boolean")return J.dV.prototype
if(a.constructor==Array)return J.ap.prototype
if(typeof a!="object"){if(typeof a=="function")return J.aU.prototype
return a}if(a instanceof P.E)return a
return J.h_(a)},
hz:function(a){if(typeof a=="string")return J.bC.prototype
if(a==null)return a
if(a.constructor==Array)return J.ap.prototype
if(typeof a!="object"){if(typeof a=="function")return J.aU.prototype
return a}if(a instanceof P.E)return a
return J.h_(a)},
iy:function(a){if(a==null)return a
if(a.constructor==Array)return J.ap.prototype
if(typeof a!="object"){if(typeof a=="function")return J.aU.prototype
return a}if(a instanceof P.E)return a
return J.h_(a)},
fZ:function(a){if(a==null)return a
if(typeof a!="object"){if(typeof a=="function")return J.aU.prototype
return a}if(a instanceof P.E)return a
return J.h_(a)},
L:function(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.K(a).p(a,b)},
iY:function(a,b){if(typeof b==="number")if(a.constructor==Array||typeof a=="string"||H.k4(a,a[v.dispatchPropertyName]))if(b>>>0===b&&b<a.length)return a[b]
return J.hz(a).j(a,b)},
iZ:function(a,b,c,d){return J.fZ(a).eh(a,b,c,d)},
hH:function(a,b){return J.fZ(a).P(a,b)},
hI:function(a,b){return J.iy(a).X(a,b)},
cc:function(a){return J.K(a).gE(a)},
cd:function(a){return J.iy(a).gL(a)},
ce:function(a){return J.hz(a).gl(a)},
aa:function(a){return J.K(a).i(a)},
U:function U(){},
dV:function dV(){},
cx:function cx(){},
cz:function cz(){},
en:function en(){},
d7:function d7(){},
aU:function aU(){},
ap:function ap(a){this.$ti=a},
hi:function hi(a){this.$ti=a},
ab:function ab(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=null
_.$ti=d},
cy:function cy(){},
cw:function cw(){},
cv:function cv(){},
bC:function bC(){}},P={
jA:function(){var u,t,s
u={}
if(self.scheduleImmediate!=null)return P.jQ()
if(self.MutationObserver!=null&&self.document!=null){t=self.document.createElement("div")
s=self.document.createElement("span")
u.a=null
new self.MutationObserver(H.bj(new P.fp(u),1)).observe(t,{childList:true})
return new P.fo(u,t,s)}else if(self.setImmediate!=null)return P.jR()
return P.jS()},
jB:function(a){self.scheduleImmediate(H.bj(new P.fq(H.j(a,{func:1,ret:-1})),0))},
jC:function(a){self.setImmediate(H.bj(new P.fr(H.j(a,{func:1,ret:-1})),0))},
jD:function(a){P.hn(C.n,H.j(a,{func:1,ret:-1}))},
hn:function(a,b){var u
H.j(b,{func:1,ret:-1})
u=C.h.S(a.a,1000)
return P.jF(u<0?0:u,b)},
i9:function(a,b){var u
H.j(b,{func:1,ret:-1,args:[P.a6]})
u=C.h.S(a.a,1000)
return P.jG(u<0?0:u,b)},
jF:function(a,b){var u=new P.dm(!0)
u.ed(a,b)
return u},
jG:function(a,b){var u=new P.dm(!1)
u.ee(a,b)
return u},
jE:function(a,b){var u,t,s
b.a=1
try{a.dv(new P.fy(b),new P.fz(b),null)}catch(s){u=H.b1(s)
t=H.bl(s)
P.kc(new P.fA(b,u,t))}},
ii:function(a,b){var u,t
for(;u=a.a,u===2;)a=H.l(a.c,"$iad")
if(u>=4){t=b.bn()
b.a=a.a
b.c=a.c
P.bY(b,t)}else{t=H.l(b.c,"$iax")
b.a=2
b.c=a
a.cv(t)}},
bY:function(a,b){var u,t,s,r,q,p,o,n,m,l,k,j,i,h
u={}
u.a=a
for(t=a;!0;){s={}
r=t.a===8
if(b==null){if(r){q=H.l(t.c,"$iZ")
t=t.b
p=q.a
o=q.b
t.toString
P.fU(null,null,t,p,o)}return}for(;n=b.a,n!=null;b=n){b.a=null
P.bY(u.a,b)}t=u.a
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
if(k){H.l(m,"$iZ")
t=t.b
p=m.a
o=m.b
t.toString
P.fU(null,null,t,p,o)
return}j=$.H
if(j!=l)$.H=l
else j=null
t=b.c
if(t===8)new P.fE(u,s,b,r).$0()
else if(p){if((t&1)!==0)new P.fD(s,b,m).$0()}else if((t&2)!==0)new P.fC(u,s,b).$0()
if(j!=null)$.H=j
t=s.b
if(!!J.K(t).$ibx){if(t.a>=4){i=H.l(o.c,"$iax")
o.c=null
b=o.aP(i)
o.a=t.a
o.c=t.c
u.a=t
continue}else P.ii(t,o)
return}}h=b.b
i=H.l(h.c,"$iax")
h.c=null
b=h.aP(i)
t=s.a
p=s.b
if(!t){H.w(p,H.r(h,0))
h.a=4
h.c=p}else{H.l(p,"$iZ")
h.a=8
h.c=p}u.a=h
t=h}},
jM:function(a,b){if(H.ds(a,{func:1,args:[P.E,P.a3]}))return H.j(a,{func:1,ret:null,args:[P.E,P.a3]})
if(H.ds(a,{func:1,args:[P.E]}))return H.j(a,{func:1,ret:null,args:[P.E]})
throw H.i(P.hb(a,"onError","Error handler must accept one Object or one Object and a StackTrace as arguments, and return a a valid result"))},
jL:function(){var u,t
for(;u=$.bg,u!=null;){$.c7=null
t=u.b
$.bg=t
if(t==null)$.c6=null
u.a.$0()}},
jP:function(){$.ht=!0
try{P.jL()}finally{$.c7=null
$.ht=!1
if($.bg!=null)$.hG().$1(P.iv())}},
iq:function(a){var u=new P.dc(H.j(a,{func:1,ret:-1}))
if($.bg==null){$.c6=u
$.bg=u
if(!$.ht)$.hG().$1(P.iv())}else{$.c6.b=u
$.c6=u}},
jO:function(a){var u,t,s
H.j(a,{func:1,ret:-1})
u=$.bg
if(u==null){P.iq(a)
$.c7=$.c6
return}t=new P.dc(a)
s=$.c7
if(s==null){t.b=u
$.c7=t
$.bg=t}else{t.b=s.b
s.b=t
$.c7=t
if(t.b==null)$.c6=t}},
kc:function(a){var u,t
u={func:1,ret:-1}
H.j(a,u)
t=$.H
if(C.k===t){P.fW(null,null,C.k,a)
return}t.toString
P.fW(null,null,t,H.j(t.bv(a),u))},
i7:function(a,b){var u,t
u={func:1,ret:-1}
H.j(b,u)
t=$.H
if(t===C.k){t.toString
return P.hn(a,b)}return P.hn(a,H.j(t.bv(b),u))},
i8:function(a,b){var u,t,s
u={func:1,ret:-1,args:[P.a6]}
H.j(b,u)
t=$.H
if(t===C.k){t.toString
return P.i9(a,b)}s=t.cH(b,P.a6)
$.H.toString
return P.i9(a,H.j(s,u))},
fU:function(a,b,c,d,e){var u={}
u.a=d
P.jO(new P.fV(u,e))},
io:function(a,b,c,d,e){var u,t
H.j(d,{func:1,ret:e})
t=$.H
if(t===c)return d.$0()
$.H=c
u=t
try{t=d.$0()
return t}finally{$.H=u}},
ip:function(a,b,c,d,e,f,g){var u,t
H.j(d,{func:1,ret:f,args:[g]})
H.w(e,g)
t=$.H
if(t===c)return d.$1(e)
$.H=c
u=t
try{t=d.$1(e)
return t}finally{$.H=u}},
jN:function(a,b,c,d,e,f,g,h,i){var u,t
H.j(d,{func:1,ret:g,args:[h,i]})
H.w(e,h)
H.w(f,i)
t=$.H
if(t===c)return d.$2(e,f)
$.H=c
u=t
try{t=d.$2(e,f)
return t}finally{$.H=u}},
fW:function(a,b,c,d){var u
H.j(d,{func:1,ret:-1})
u=C.k!==c
if(u)d=!(!u||!1)?c.bv(d):c.hy(d,-1)
P.iq(d)},
fp:function fp(a){this.a=a},
fo:function fo(a,b,c){this.a=a
this.b=b
this.c=c},
fq:function fq(a){this.a=a},
fr:function fr(a){this.a=a},
dm:function dm(a){this.a=a
this.b=null
this.c=0},
fP:function fP(a,b){this.a=a
this.b=b},
fO:function fO(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
ax:function ax(a,b,c,d,e){var _=this
_.a=null
_.b=a
_.c=b
_.d=c
_.e=d
_.$ti=e},
ad:function ad(a,b,c){var _=this
_.a=a
_.b=b
_.c=null
_.$ti=c},
fx:function fx(a,b){this.a=a
this.b=b},
fB:function fB(a,b){this.a=a
this.b=b},
fy:function fy(a){this.a=a},
fz:function fz(a){this.a=a},
fA:function fA(a,b,c){this.a=a
this.b=b
this.c=c},
fE:function fE(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
fF:function fF(a){this.a=a},
fD:function fD(a,b,c){this.a=a
this.b=b
this.c=c},
fC:function fC(a,b,c){this.a=a
this.b=b
this.c=c},
dc:function dc(a){this.a=a
this.b=null},
eF:function eF(){},
eH:function eH(a,b){this.a=a
this.b=b},
eI:function eI(a,b){this.a=a
this.b=b},
bL:function bL(){},
eG:function eG(){},
a6:function a6(){},
Z:function Z(a,b){this.a=a
this.b=b},
fR:function fR(){},
fV:function fV(a,b){this.a=a
this.b=b},
fJ:function fJ(){},
fL:function fL(a,b,c){this.a=a
this.b=b
this.c=c},
fK:function fK(a,b){this.a=a
this.b=b},
fM:function fM(a,b,c){this.a=a
this.b=b
this.c=c},
jd:function(a,b,c){H.h5(a)
return H.h(H.jZ(a,new H.az([b,c])),"$ihQ",[b,c],"$ahQ")},
je:function(a,b,c,d){return new P.fH([d])},
il:function(){var u=Object.create(null)
u["<non-identifier-key>"]=u
delete u["<non-identifier-key>"]
return u},
ik:function(a,b,c){var u=new P.fI(a,b,[c])
u.c=a.e
return u},
ja:function(a,b,c){var u,t
if(P.hu(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}u=H.b([],[P.t])
t=$.cb()
C.a.h(t,a)
try{P.jK(a,u)}finally{if(0>=t.length)return H.d(t,-1)
t.pop()}t=P.i5(b,H.k5(u,"$ip"),", ")+c
return t.charCodeAt(0)==0?t:t},
hh:function(a,b,c){var u,t,s
if(P.hu(a))return b+"..."+c
u=new P.aW(b)
t=$.cb()
C.a.h(t,a)
try{s=u
s.a=P.i5(s.a,a,", ")}finally{if(0>=t.length)return H.d(t,-1)
t.pop()}u.a+=c
t=u.a
return t.charCodeAt(0)==0?t:t},
hu:function(a){var u,t
for(u=0;t=$.cb(),u<t.length;++u)if(a===t[u])return!0
return!1},
jK:function(a,b){var u,t,s,r,q,p,o,n,m,l
H.h(b,"$ia",[P.t],"$aa")
u=a.gL(a)
t=0
s=0
while(!0){if(!(t<80||s<3))break
if(!u.v())return
r=H.f(u.gG())
C.a.h(b,r)
t+=r.length+2;++s}if(!u.v()){if(s<=5)return
if(0>=b.length)return H.d(b,-1)
q=b.pop()
if(0>=b.length)return H.d(b,-1)
p=b.pop()}else{o=u.gG();++s
if(!u.v()){if(s<=4){C.a.h(b,H.f(o))
return}q=H.f(o)
if(0>=b.length)return H.d(b,-1)
p=b.pop()
t+=q.length+2}else{n=u.gG();++s
for(;u.v();o=n,n=m){m=u.gG();++s
if(s>100){while(!0){if(!(t>75&&s>3))break
if(0>=b.length)return H.d(b,-1)
t-=b.pop().length+2;--s}C.a.h(b,"...")
return}}p=H.f(o)
q=H.f(n)
t+=q.length+p.length+4}}if(s>b.length+2){t+=5
l="..."}else l=null
while(!0){if(!(t>80&&b.length>3))break
if(0>=b.length)return H.d(b,-1)
t-=b.pop().length+2
if(l==null){t+=5
l="..."}}if(l!=null)C.a.h(b,l)
C.a.h(b,p)
C.a.h(b,q)},
hS:function(a){var u,t
u={}
if(P.hu(a))return"{...}"
t=new P.aW("")
try{C.a.h($.cb(),a)
t.a+="{"
u.a=!0
a.Y(0,new P.e5(u,t))
t.a+="}"}finally{u=$.cb()
if(0>=u.length)return H.d(u,-1)
u.pop()}u=t.a
return u.charCodeAt(0)==0?u:u},
fH:function fH(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
bZ:function bZ(a){this.a=a
this.c=this.b=null},
fI:function fI(a,b,c){var _=this
_.a=a
_.b=b
_.d=_.c=null
_.$ti=c},
e2:function e2(){},
J:function J(){},
e4:function e4(){},
e5:function e5(a,b){this.a=a
this.b=b},
e6:function e6(){},
fN:function fN(){},
di:function di(){},
bs:function bs(){},
cn:function cn(){},
dI:function dI(){},
f6:function f6(a){this.a=a},
f7:function f7(){},
fQ:function fQ(a){this.b=this.a=0
this.c=a},
j8:function(a){if(a instanceof H.br)return a.i(0)
return"Instance of '"+H.bc(a)+"'"},
jf:function(a,b,c,d){var u,t
H.w(b,d)
u=J.jb(a,d)
if(a!==0&&!0)for(t=0;t<u.length;++t)C.a.T(u,t,b)
return H.h(u,"$ia",[d],"$aa")},
hR:function(a,b,c){var u,t,s
u=[c]
t=H.b([],u)
for(s=J.cd(a);s.v();)C.a.h(t,H.w(s.gG(),c))
if(b)return t
return H.h(J.dU(t),"$ia",u,"$aa")},
hm:function(a,b,c){var u,t
u=P.u
H.h(a,"$ip",[u],"$ap")
if(a.constructor===Array){H.h(a,"$iap",[u],"$aap")
t=a.length
c=P.i1(b,c,t,null,null,null)
return H.i0(b>0||c<t?C.a.dT(a,b,c):a)}return P.jx(a,b,c)},
jx:function(a,b,c){var u,t,s
H.h(a,"$ip",[P.u],"$ap")
u=J.cd(a)
for(t=0;t<b;++t)if(!u.v())throw H.i(P.ai(b,0,t,null,null))
s=[]
for(;u.v();)s.push(u.gG())
return H.i0(s)},
js:function(a,b,c){return new H.dW(a,H.jc(a,!1,!0,!1))},
i5:function(a,b,c){var u=J.cd(b)
if(!u.v())return a
if(c.length===0){do a+=H.f(u.gG())
while(u.v())}else{a+=H.f(u.gG())
for(;u.v();)a=a+c+H.f(u.gG())}return a},
jH:function(a,b,c,d){var u,t,s,r,q,p
H.h(a,"$ia",[P.u],"$aa")
if(c===C.w){u=$.iX().b
u=u.test(b)}else u=!1
if(u)return b
t=C.A.hI(H.w(b,H.al(c,"bs",0)))
for(u=t.length,s=0,r="";s<u;++s){q=t[s]
if(q<128){p=q>>>4
if(p>=8)return H.d(a,p)
p=(a[p]&1<<(q&15))!==0}else p=!1
if(p)r+=H.jp(q)
else r=r+"%"+"0123456789ABCDEF"[q>>>4&15]+"0123456789ABCDEF"[q&15]}return r.charCodeAt(0)==0?r:r},
j5:function(a){var u,t
u=Math.abs(a)
t=a<0?"-":""
if(u>=1000)return""+a
if(u>=100)return t+"0"+u
if(u>=10)return t+"00"+u
return t+"000"+u},
j6:function(a){if(a>=100)return""+a
if(a>=10)return"0"+a
return"00"+a},
co:function(a){if(a>=10)return""+a
return"0"+a},
hf:function(a,b,c,d,e,f){return new P.aQ(864e8*a+36e8*b+6e7*e+1e6*f+1000*d+c)},
dK:function(a){if(typeof a==="number"||typeof a==="boolean"||null==a)return J.aa(a)
if(typeof a==="string")return JSON.stringify(a)
return P.j8(a)},
j_:function(a){return new P.am(!1,null,null,a)},
hb:function(a,b,c){return new P.am(!0,a,b,c)},
cR:function(a,b,c){return new P.bd(null,null,!0,a,b,"Value not in range")},
ai:function(a,b,c,d,e){return new P.bd(b,c,!0,a,d,"Invalid value")},
i1:function(a,b,c,d,e,f){if(0>a||a>c)throw H.i(P.ai(a,0,c,"start",f))
if(b!=null){if(a>b||b>c)throw H.i(P.ai(b,a,c,"end",f))
return b}return c},
bz:function(a,b,c,d,e){var u=H.Y(e==null?J.ce(b):e)
return new P.dT(b,u,!0,a,c,"Index out of range")},
a8:function(a){return new P.f5(a)},
ib:function(a){return new P.f3(a)},
bt:function(a){return new P.dB(a)},
o:function(a){return new P.df(a)},
hD:function(a){H.ka(a)},
X:function X(){},
aO:function aO(a,b){this.a=a
this.b=b},
q:function q(){},
aQ:function aQ(a){this.a=a},
dF:function dF(){},
dG:function dG(){},
aR:function aR(){},
cL:function cL(){},
am:function am(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
bd:function bd(a,b,c,d,e,f){var _=this
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
f5:function f5(a){this.a=a},
f3:function f3(a){this.a=a},
eD:function eD(a){this.a=a},
dB:function dB(a){this.a=a},
em:function em(){},
cY:function cY(){},
dD:function dD(a){this.a=a},
df:function df(a){this.a=a},
dR:function dR(a,b,c){this.a=a
this.b=b
this.c=c},
u:function u(){},
p:function p(){},
ao:function ao(){},
a:function a(){},
z:function z(){},
a4:function a4(){},
E:function E(){},
a3:function a3(){},
t:function t(){},
aW:function aW(a){this.a=a},
jW:function(a){var u,t
u=J.K(a)
if(!!u.$iaS){t=u.gcL(a)
if(t.constructor===Array)if(typeof CanvasPixelArray!=="undefined"){t.constructor=CanvasPixelArray
t.BYTES_PER_ELEMENT=1}return a}return new P.dq(a.data,a.height,a.width)},
jV:function(a){if(a instanceof P.dq)return{data:a.a,height:a.b,width:a.c}
return a},
jU:function(a,b){var u={}
a.Y(0,new P.fX(u))
return u},
dq:function dq(a,b,c){this.a=a
this.b=b
this.c=c},
fX:function fX(a){this.a=a},
dN:function dN(a,b){this.a=a
this.b=b},
dO:function dO(){},
dP:function dP(){},
k:function k(){},
ch:function ch(){},
ct:function ct(){},
cQ:function cQ(){},
be:function be(){},
cV:function cV(){},
d_:function d_(){},
d6:function d6(){}},W={
hd:function(a,b){var u=document.createElement("canvas")
return u},
j7:function(a){H.l(a,"$ib7")
return"wheel"},
fG:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
ij:function(a,b,c,d){var u,t
u=W.fG(W.fG(W.fG(W.fG(0,a),b),c),d)
t=536870911&u+((67108863&u)<<3)
t^=t>>>11
return 536870911&t+((16383&t)<<15)},
T:function(a,b,c,d,e){var u,t
u=W.is(new W.fw(c),W.e)
t=u!=null
if(t&&!0){H.j(u,{func:1,args:[W.e]})
if(t)J.iZ(a,b,u,!1)}return new W.fv(a,b,u,!1,[e])},
is:function(a,b){var u
H.j(a,{func:1,ret:-1,args:[b]})
u=$.H
if(u===C.k)return a
return u.cH(a,b)},
m:function m(){},
du:function du(){},
dv:function dv(){},
cg:function cg(){},
b2:function b2(){},
b3:function b3(){},
aN:function aN(){},
bu:function bu(){},
dC:function dC(){},
bv:function bv(){},
bw:function bw(){},
dE:function dE(){},
cp:function cp(){},
ft:function ft(a,b){this.a=a
this.b=b},
Q:function Q(){},
e:function e(){},
b7:function b7(){},
dQ:function dQ(){},
b9:function b9(){},
cu:function cu(){},
aS:function aS(){},
by:function by(){},
aq:function aq(){},
bF:function bF(){},
V:function V(){},
fs:function fs(a){this.a=a},
D:function D(){},
bG:function bG(){},
eu:function eu(){},
at:function at(){},
aj:function aj(){},
eR:function eR(){},
aY:function aY(){},
fk:function fk(){},
aw:function aw(){},
bX:function bX(){},
de:function de(){},
fu:function fu(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
hr:function hr(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
fv:function fv(a,b,c,d,e){var _=this
_.a=0
_.b=a
_.c=b
_.d=c
_.e=d
_.$ti=e},
fw:function fw(a){this.a=a},
ag:function ag(){},
cs:function cs(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=null
_.$ti=d},
dd:function dd(){},
dg:function dg(){},
dh:function dh(){},
dj:function dj(){},
dk:function dk(){},
dn:function dn(){},
dp:function dp(){}},O={
he:function(a){var u=new O.N([a])
u.c5(a)
return u},
N:function N(a){var _=this
_.d=_.c=_.b=_.a=null
_.$ti=a},
bE:function bE(){this.b=this.a=null},
cE:function cE(){var _=this
_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
ea:function ea(a,b){var _=this
_.f=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
bD:function bD(){},
eb:function eb(a,b){var _=this
_.a=a
_.b=b
_.e=_.d=_.c=null},
as:function as(a,b){var _=this
_.f=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
ed:function ed(a,b){var _=this
_.f=_.ch=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
ee:function ee(a,b){var _=this
_.f=_.ch=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
bf:function bf(){}},E={
ju:function(a,b){var u=new E.ep(a,b)
u.dZ(a,b)
return u},
jy:function(a,b,c,d,e){var u,t,s,r
u=J.K(a)
if(!!u.$ib2)return E.i6(a,!0,!0,!0,!1)
t=W.hd(null,null)
s=t.style
s.width="100%"
s.height="100%"
u.gcJ(a).h(0,t)
r=E.i6(t,!0,!0,!0,!1)
r.a=a
return r},
i6:function(a,b,c,d,e){var u,t,s,r,q,p,o,n,m,l,k,j
u=new E.d3()
t=P.jd(["alpha",!0,"depth",!0,"stencil",!1,"antialias",!0,"premultipliedAlpha",!0,"preserveDrawingBuffer",!1],P.t,null)
s=C.m.b8(a,"webgl",t)
s=H.l(s==null?C.m.b8(a,"experimental-webgl",t):s,"$ibe")
if(s==null)H.n(P.o("Failed to get the rendering context for WebGL."))
u.b=a
u.a=a
u.c=s
u.e=E.ju(s,a)
r=new T.eM(s)
r.b=H.Y((s&&C.b).bX(s,3379))
r.c=H.Y(C.b.bX(s,34076))
r.d=0
r.e=0
u.f=r
r=new X.da(a)
q=new X.dY()
q.c=new X.aD(!1,!1,!1)
q.sfB(P.je(null,null,null,P.u))
r.b=q
q=new X.ef(r)
q.f=0
q.r=V.cO()
q.x=V.cO()
q.Q=1
q.ch=1
r.c=q
q=new X.e3(r)
q.r=0
q.x=V.cO()
q.Q=1
q.ch=1
q.cx=1
q.cy=1
r.d=q
q=new X.eQ(r)
q.e=0
q.f=V.cO()
q.r=V.cO()
r.e=q
r.f=!1
r.r=!1
r.x=!1
r.y=null
r.sex(H.b([],[[P.bL,P.E]]))
q=r.z
p=document
o=W.V
n={func:1,ret:-1,args:[o]};(q&&C.a).h(q,W.T(p,"contextmenu",H.j(r.geZ(),n),!1,o))
q=r.z
m=W.e
l={func:1,ret:-1,args:[m]};(q&&C.a).h(q,W.T(a,"focus",H.j(r.gf4(),l),!1,m))
q=r.z;(q&&C.a).h(q,W.T(a,"blur",H.j(r.geT(),l),!1,m))
q=r.z
k=W.aq
j={func:1,ret:-1,args:[k]};(q&&C.a).h(q,W.T(p,"keyup",H.j(r.gf8(),j),!1,k))
q=r.z;(q&&C.a).h(q,W.T(p,"keydown",H.j(r.gf6(),j),!1,k))
k=r.z;(k&&C.a).h(k,W.T(a,"mousedown",H.j(r.gfc(),n),!1,o))
k=r.z;(k&&C.a).h(k,W.T(a,"mouseup",H.j(r.gfg(),n),!1,o))
k=r.z;(k&&C.a).h(k,W.T(a,"mousemove",H.j(r.gfe(),n),!1,o))
k=r.z
j=W.aw;(k&&C.a).h(k,W.T(a,H.M(W.j7(a)),H.j(r.gfi(),{func:1,ret:-1,args:[j]}),!1,j))
j=r.z;(j&&C.a).h(j,W.T(p,"mousemove",H.j(r.gf0(),n),!1,o))
j=r.z;(j&&C.a).h(j,W.T(p,"mouseup",H.j(r.gf2(),n),!1,o))
o=r.z;(o&&C.a).h(o,W.T(p,"pointerlockchange",H.j(r.gfk(),l),!1,m))
m=r.z
l=W.aj
p={func:1,ret:-1,args:[l]};(m&&C.a).h(m,W.T(a,"touchstart",H.j(r.gfw(),p),!1,l))
m=r.z;(m&&C.a).h(m,W.T(a,"touchend",H.j(r.gfs(),p),!1,l))
m=r.z;(m&&C.a).h(m,W.T(a,"touchmove",H.j(r.gfu(),p),!1,l))
u.r=r
u.Q=!0
u.ch=!1
u.cx=new P.aO(Date.now(),!1)
u.cy=0
u.cz()
return u},
dx:function dx(){},
a2:function a2(){var _=this
_.fx=_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
ep:function ep(a,b){var _=this
_.a=a
_.b=b
_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=null},
eq:function eq(a){this.a=a},
er:function er(a){this.a=a},
es:function es(a){this.a=a},
d3:function d3(){var _=this
_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
eO:function eO(a){this.a=a}},Z={
hq:function(a,b,c){var u
H.h(c,"$ia",[P.u],"$aa")
u=a.createBuffer()
C.b.a9(a,b,u)
C.b.cI(a,b,new Int16Array(H.c5(c)),35044)
C.b.a9(a,b,null)
return new Z.db(b,u)},
ac:function(a){return new Z.av(a)},
db:function db(a,b){this.a=a
this.b=b},
ci:function ci(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
fl:function fl(a){this.a=a},
cj:function cj(a,b,c){var _=this
_.a=a
_.b=null
_.c=b
_.d=c},
aT:function aT(a,b,c){this.a=a
this.b=b
this.c=c},
av:function av(a){this.a=a}},D={
af:function(){var u=new D.b6()
u.sa7(null)
u.saO(null)
u.c=null
u.d=0
return u},
dA:function dA(){},
b6:function b6(){var _=this
_.d=_.c=_.b=_.a=null},
dL:function dL(a){this.a=a},
y:function y(a){this.a=a
this.b=null},
bA:function bA(a,b,c,d){var _=this
_.c=a
_.d=b
_.a=c
_.b=null
_.$ti=d},
bB:function bB(a,b,c,d){var _=this
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
aP:function aP(){var _=this
_.d=_.c=_.b=_.a=null},
O:function O(){},
cB:function cB(){var _=this
_.d=_.c=_.b=_.a=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=null},
cN:function cN(){},
cX:function cX(){},
d0:function d0(){},
d1:function d1(){},
d2:function d2(){}},X={ck:function ck(a,b){this.a=a
this.b=b},cA:function cA(a,b){this.a=a
this.b=b},dY:function dY(){var _=this
_.d=_.c=_.b=_.a=null},e3:function e3(a){var _=this
_.a=a
_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},aD:function aD(a,b,c){this.a=a
this.b=b
this.c=c},ef:function ef(a){var _=this
_.a=a
_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},eQ:function eQ(a){var _=this
_.a=a
_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},da:function da(a){var _=this
_.a=a
_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},
j9:function(a,b,c,d,e,f,g){var u,t
u=new X.dS()
t=new V.b4(0,0,0,1)
u.a=t
u.b=!0
u.c=e
u.d=!0
u.e=g
u.f=!1
t=$.i2
if(t==null){t=V.jt(0,0,1,1)
$.i2=t}u.r=t
return u},
cl:function cl(){},
dS:function dS(){var _=this
_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
cM:function cM(){var _=this
_.f=_.e=_.d=_.c=_.b=_.a=null},
cZ:function cZ(){}},V={
hE:function(a,b,c){var u
if(c<=b)return b
u=c-b
a=C.i.dP(a-b,u)
return(a<0?a+u:a)+b},
B:function(a,b,c){if(a==null)return C.j.a_("null",c)
return C.j.a_(C.i.dw(Math.abs(a-0)<$.C().a?0:a,b),c+b+1)},
bk:function(a,b,c){var u,t,s,r,q,p
H.h(a,"$ia",[P.q],"$aa")
u=H.b([],[P.t])
for(t=a.length,s=0,r=0;r<a.length;a.length===t||(0,H.v)(a),++r){q=V.B(a[r],b,c)
s=Math.max(s,q.length)
C.a.h(u,q)}for(p=u.length-1;p>=0;--p){if(p>=u.length)return H.d(u,p)
C.a.T(u,p,C.j.a_(u[p],s))}return u},
hC:function(a,b){return C.i.iH(Math.pow(b,C.E.bJ(Math.log(H.jT(a))/Math.log(b))))},
hl:function(){var u=$.hU
if(u==null){u=V.aC(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1)
$.hU=u}return u},
aC:function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){return new V.a_(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p)},
hT:function(a,b,c){var u,t,s,r,q,p,o,n
u=c.C(0,Math.sqrt(c.I(c)))
t=b.az(u)
s=t.C(0,Math.sqrt(t.I(t)))
r=u.az(s)
q=new V.F(a.a,a.b,a.c)
p=s.aw(0).I(q)
o=r.aw(0).I(q)
n=u.aw(0).I(q)
return V.aC(s.a,r.a,u.a,p,s.b,r.b,u.b,o,s.c,r.c,u.c,n,0,0,0,1)},
cO:function(){var u=$.hY
if(u==null){u=new V.a5(0,0)
$.hY=u}return u},
hZ:function(){var u=$.bH
if(u==null){u=new V.ah(0,0,0)
$.bH=u}return u},
jt:function(a,b,c,d){if(c<0){a+=c
c=-c}if(d<0){b+=d
d=-d}return new V.cT(a,b,c,d)},
bW:function(){var u=$.ig
if(u==null){u=new V.F(0,0,0)
$.ig=u}return u},
ih:function(){var u=$.ie
if(u==null){u=new V.F(0,1,0)
$.ie=u}return u},
jz:function(){var u=$.f8
if(u==null){u=new V.F(0,0,1)
$.f8=u}return u},
R:function R(a,b,c){this.a=a
this.b=b
this.c=c},
b4:function b4(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
dJ:function dJ(a){this.a=a},
cF:function cF(a,b,c,d,e,f,g,h,i){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.x=h
_.y=i},
a_:function a_(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){var _=this
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
a5:function a5(a,b){this.a=a
this.b=b},
ah:function ah(a,b,c){this.a=a
this.b=b
this.c=c},
cP:function cP(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
cT:function cT(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
aG:function aG(a,b){this.a=a
this.b=b},
F:function F(a,b,c){this.a=a
this.b=b
this.c=c},
W:function(a){var u=new V.ev()
u.e_(a)
return u},
dt:function dt(){},
aB:function aB(){},
cD:function cD(){},
aF:function aF(){this.a=null},
ev:function ev(){this.a=null},
bK:function bK(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
d4:function d4(a,b,c){this.a=a
this.b=b
this.c=c},
bN:function bN(a,b){this.a=a
this.b=b
this.c=null},
eP:function eP(){this.c=this.b=this.a=null},
bO:function bO(a){this.b=a
this.a=this.c=null},
kd:function(a){P.i8(C.B,new V.h9(a))},
jw:function(a,b){var u=new V.ez()
u.e1(a,!0)
return u},
h9:function h9(a){this.a=a},
ez:function ez(){this.b=this.a=null},
eB:function eB(a){this.a=a},
eA:function eA(a){this.a=a}},U={
hN:function(a){var u=new U.cm()
u.a=a
return u},
cm:function cm(){this.b=this.a=null},
ba:function ba(){},
cU:function cU(){var _=this
_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null}},M={cq:function cq(){var _=this
_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null}},A={
jg:function(a,b){var u,t
u=a.a2
t=new A.e9(b,u)
t.e0(b,u)
t.dY(a,b)
return t},
ho:function(a,b,c,d,e){var u=new A.eW(a,b,c,e)
u.f=d
u.sh8(P.jf(d,0,!1,P.u))
return u},
cf:function cf(a,b,c){this.a=a
this.b=b
this.c=c},
dw:function dw(a){this.a=a},
e9:function e9(a,b){var _=this
_.aT=_.cP=_.aS=_.a2=_.aa=_.y2=_.y1=_.x2=_.x1=_.ry=_.rx=_.r2=_.r1=_.k4=_.k3=_.k2=_.k1=_.id=_.go=_.fy=_.fx=_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=null
_.d4=_.bD=_.d3=_.b5=_.d2=_.d1=_.b4=_.b3=_.d0=_.d_=_.b2=_.b1=_.b0=_.cZ=_.cY=_.b_=_.cX=_.cW=_.aZ=_.cV=_.cU=_.aY=_.aX=_.cT=_.cS=_.aW=_.aV=_.cR=_.cQ=_.aU=null
_.bI=_.d8=_.bH=_.d7=_.bG=_.d6=_.bF=_.d5=_.bE=null
_.a=a
_.b=b
_.y=_.x=_.r=_.f=_.e=_.d=_.c=null},
ec:function ec(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5){var _=this
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
_.aa=b3
_.a2=b4
_.aS=b5},
bP:function bP(a,b,c){this.a=a
this.b=b
this.c=c},
bT:function bT(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.x=h},
bR:function bR(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},
bU:function bU(a,b,c,d,e,f,g,h,i,j){var _=this
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
bS:function bS(a,b,c,d,e,f,g,h,i,j){var _=this
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
bV:function bV(a,b,c,d,e,f,g,h,i,j,k,l,m,n){var _=this
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
bJ:function bJ(){},
b5:function b5(a,b){this.a=a
this.b=b},
d5:function d5(){},
f1:function f1(a){this.a=a},
A:function A(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
eY:function eY(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
eZ:function eZ(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
f0:function f0(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
eW:function eW(a,b,c,d){var _=this
_.f=_.e=null
_.a=a
_.b=b
_.c=c
_.d=d},
I:function I(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
eX:function eX(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
x:function x(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
f_:function f_(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
f2:function f2(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
bQ:function bQ(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
a7:function a7(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
a0:function a0(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
a1:function a1(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d}},F={
fT:function(a){var u=a.a>0?1:0
if(a.b>0)u+=2
return(a.c>0?u+4:u)*2},
c3:function(a,b,c,d,a0,a1,a2,a3,a4){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e
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
u.d=t}g=F.fT(t)
f=F.fT(u.b)
e=F.kf(d,a0,new F.fS(u,F.fT(u.c),F.fT(u.d),f,g,c),b)
if(e!=null)a.bP(e)},
kf:function(a,b,c,d){var u,t,s,r,q,p,o,n,m,l,k,j,i,h
H.j(c,{func:1,ret:-1,args:[F.a9,P.q,P.q]})
if(a<1)return
if(b<1)return
u=F.i4()
t=H.b([],[F.a9])
for(s=0;s<=b;++s){r=s/b
q=u.a
if(r<0)p=0
else p=r>1?1:r
q.toString
o=F.hp(null,null,new V.b4(p,0,0,1),null,null,new V.a5(r,1),null,null,0)
q.h(0,o)
c.$3(o,r,0)
C.a.h(t,o.bA(d))}for(s=1;s<=a;++s){n=s/a
for(q=n>1,p=n<0,m=1-n,l=0;l<=b;++l){r=l/b
k=u.a
if(r<0)j=0
else j=r>1?1:r
if(p)i=0
else i=q?1:n
if(p)h=0
else h=q?1:n
k.toString
o=F.hp(null,null,new V.b4(j,i,h,1),null,null,new V.a5(r,m),null,null,0)
k.h(0,o)
c.$3(o,r,n)
C.a.h(t,o.bA(d))}}u.d.hw(a+1,b+1,t)
return u},
cr:function(a,b,c){var u,t
u=new F.S()
t=a.a
if(t==null)H.n(P.o("May not create a face with a first vertex which is not attached to a shape."))
if(t!=b.a||t!=c.a)H.n(P.o("May not create a face with vertices attached to different shapes."))
u.fQ(a)
u.fR(b)
u.fS(c)
C.a.h(u.a.a.d.b,u)
u.a.a.R()
return u},
i4:function(){var u,t
u=new F.cW()
t=new F.f9(u)
t.b=!1
t.sh9(H.b([],[F.a9]))
u.a=t
t=new F.ey(u)
t.sbl(H.b([],[F.aV]))
u.b=t
t=new F.ex(u)
t.seI(H.b([],[F.aA]))
u.c=t
t=new F.ew(u)
t.sey(H.b([],[F.S]))
u.d=t
u.e=null
return u},
hp:function(a,b,c,d,e,f,g,h,i){var u,t,s
u=new F.a9()
t=new F.fh(u)
t.sbl(H.b([],[F.aV]))
u.b=t
t=new F.fd(u)
s=[F.aA]
t.seJ(H.b([],s))
t.seK(H.b([],s))
u.c=t
t=new F.fa(u)
s=[F.S]
t.sez(H.b([],s))
t.seA(H.b([],s))
t.seB(H.b([],s))
u.d=t
h=$.iU()
u.e=0
t=$.aK()
s=h.a
u.f=(s&t.a)!==0?d:null
u.r=(s&$.aJ().a)!==0?e:null
u.x=(s&$.aI().a)!==0?b:null
u.y=(s&$.aL().a)!==0?f:null
u.z=(s&$.aM().a)!==0?g:null
u.Q=(s&$.iV().a)!==0?c:null
u.ch=(s&$.bo().a)!==0?i:0
u.cx=(s&$.aH().a)!==0?a:null
return u},
fS:function fS(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
S:function S(){var _=this
_.e=_.d=_.c=_.b=_.a=null},
dM:function dM(){},
eC:function eC(){},
aA:function aA(){this.b=this.a=null},
dZ:function dZ(){},
eV:function eV(){},
aV:function aV(){this.a=null},
cW:function cW(){var _=this
_.e=_.d=_.c=_.b=_.a=null},
ew:function ew(a){this.a=a
this.b=null},
ex:function ex(a){this.a=a
this.b=null},
ey:function ey(a){this.a=a
this.b=null},
a9:function a9(){var _=this
_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
fj:function fj(a){this.a=a},
fi:function fi(a){this.a=a},
f9:function f9(a){this.a=a
this.c=this.b=null},
fa:function fa(a){var _=this
_.a=a
_.d=_.c=_.b=null},
fb:function fb(a,b){this.a=a
this.b=b},
fc:function fc(a,b){this.a=a
this.b=b},
fd:function fd(a){this.a=a
this.c=this.b=null},
ff:function ff(){},
fe:function fe(){},
fg:function fg(){},
ek:function ek(){},
fh:function fh(a){this.a=a
this.b=null}},T={bM:function bM(){},aX:function aX(){},eK:function eK(){var _=this
_.f=_.e=_.d=_.c=_.b=_.a=null},eL:function eL(){var _=this
_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},eM:function eM(a){var _=this
_.a=a
_.e=_.d=_.c=_.b=null},eN:function eN(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g}},N={
iC:function(){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f
u=V.jw("Test 039",!0)
t=W.hd(null,null)
t.className="pageLargeCanvas"
t.id="testCanvas"
C.l.P(u.a,t)
s=[P.t]
u.cF(H.b(["Test of an animated texture on a square."],s))
u.cF(H.b(["\xab[Back to Tests|../]"],s))
r=C.C.dK(document,"testCanvas")
if(r==null)H.n(P.o("Failed to find an element with the identifier, testCanvas."))
q=E.jy(r,!0,!0,!0,!1)
p=new E.a2()
p.a=""
p.b=!0
u=E.a2
p.seo(0,O.he(u))
p.y.ba(p.gi9(),p.gic())
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
p.sbZ(0,null)
p.saD(null)
o=F.i4()
F.c3(o,null,null,1,1,1,0,0,1)
F.c3(o,null,null,1,1,0,1,0,3)
F.c3(o,null,null,1,1,0,0,1,2)
F.c3(o,null,null,1,1,-1,0,0,0)
F.c3(o,null,null,1,1,0,-1,0,0)
F.c3(o,null,null,1,1,0,0,-1,3)
o.aq()
o.i8(new F.fe(),new F.ek())
p.sbZ(0,o)
s=new U.cU()
s.a=0
s.b=0
s.c=0
s.d=0
s.e=0
s.f=0
s.r=0
s.sdD(0)
s.sdk(0)
s.sdr(0)
n=s.d
if(!(Math.abs(n-0.1)<$.C().a)){s.d=0.1
n=new D.G("deltaYaw",n,0.1,s,[P.q])
n.b=!0
s.an(n)}n=s.e
if(!(Math.abs(n-0.21)<$.C().a)){s.e=0.21
n=new D.G("deltaPitch",n,0.21,s,[P.q])
n.b=!0
s.an(n)}n=s.f
if(!(Math.abs(n-0.32)<$.C().a)){s.f=0.32
n=new D.G("deltaRoll",n,0.32,s,[P.q])
n.b=!0
s.an(n)}p.saD(s)
s=T.aX
n=P.hR([q.f.at("../resources/diceColor/posx.png"),q.f.at("../resources/diceColor/posz.png"),q.f.at("../resources/diceColor/negx.png"),q.f.at("../resources/diceColor/negy.png"),q.f.at("../resources/diceColor/posy.png"),q.f.at("../resources/diceColor/negz.png")],!0,s)
m=new T.eK()
m.a=0
m.b=0
m.sh2(H.h(n,"$ia",[s],"$aa"))
m.f=null
P.i8(P.hf(0,0,0,500,0,0),new N.h6(m))
l=new O.cE()
l.sel(O.he(V.a_))
l.e.ba(l.geP(),l.geR())
s=new O.as(l,"emission")
s.c=C.c
s.f=new V.R(0,0,0)
l.f=s
s=new O.as(l,"ambient")
s.c=C.c
s.f=new V.R(0,0,0)
l.r=s
s=new O.as(l,"diffuse")
s.c=C.c
s.f=new V.R(0,0,0)
l.x=s
s=new O.as(l,"invDiffuse")
s.c=C.c
s.f=new V.R(0,0,0)
l.y=s
s=new O.ee(l,"specular")
s.c=C.c
s.f=new V.R(0,0,0)
s.ch=100
l.z=s
s=new O.eb(l,"bump")
s.c=C.c
l.Q=s
l.ch=null
s=new O.as(l,"reflect")
s.c=C.c
s.f=new V.R(0,0,0)
l.cx=s
s=new O.ed(l,"refract")
s.c=C.c
s.f=new V.R(0,0,0)
s.ch=1
l.cy=s
s=new O.ea(l,"alpha")
s.c=C.c
s.f=1
l.db=s
s=new D.cB()
s.c5(D.O)
s.sev(H.b([],[D.aP]))
s.sfA(H.b([],[D.cN]))
s.sfY(H.b([],[D.cX]))
s.sh5(H.b([],[D.d0]))
s.sh6(H.b([],[D.d1]))
s.sh7(H.b([],[D.d2]))
s.Q=null
s.ch=null
s.bY(s.geN(),s.gfn(),s.gfp())
l.dx=s
n=s.Q
if(n==null){n=D.af()
s.Q=n
s=n}else s=n
s.h(0,l.gfH())
s=l.dx
n=s.ch
if(n==null){n=D.af()
s.ch=n
s=n}else s=n
s.h(0,l.gaL())
l.dy=null
s=l.dx
k=V.ih()
n=U.hN(V.hT(V.hZ(),k,new V.F(1,-1,-3)))
j=new V.R(1,1,1)
i=new D.aP()
i.c=new V.R(1,1,1)
i.a=V.jz()
h=i.b
i.b=n
n.gu().h(0,i.ge3())
n=new D.G("mover",h,i.b,i,[U.ba])
n.b=!0
i.ac(n)
if(!i.c.p(0,j)){h=i.c
i.c=j
n=new D.G("color",h,j,i,[V.R])
n.b=!0
i.ac(n)}s.h(0,i)
s=l.r
s.saj(0,new V.R(0.2,0.2,0.2))
s=l.x
s.saj(0,new V.R(0.8,0.8,0.8))
l.r.sdu(m)
l.x.sdu(m)
s=new M.cq()
s.se5(0,O.he(u))
s.d.ba(s.geV(),s.geX())
s.e=null
s.f=null
s.r=null
s.x=null
g=X.j9(!0,!0,!1,null,2000,null,0)
f=new X.cM()
f.c=1.0471975511965976
f.d=0.1
f.e=2000
f.saD(null)
u=f.c
if(!(Math.abs(u-1.0471975511965976)<$.C().a)){f.c=1.0471975511965976
u=new D.G("fov",u,1.0471975511965976,f,[P.q])
u.b=!0
f.al(u)}u=f.d
if(!(Math.abs(u-0.1)<$.C().a)){f.d=0.1
u=new D.G("near",u,0.1,f,[P.q])
u.b=!0
f.al(u)}u=f.e
if(!(Math.abs(u-2000)<$.C().a)){f.e=2000
u=new D.G("far",u,2000,f,[P.q])
u.b=!0
f.al(u)}u=s.a
if(u!==f){if(u!=null)u.gu().w(0,s.ga6())
h=s.a
s.a=f
f.gu().h(0,s.ga6())
u=new D.G("camera",h,s.a,s,[X.cl])
u.b=!0
s.ad(u)}u=s.b
if(u!==g){if(u!=null)u.gu().w(0,s.ga6())
h=s.b
s.b=g
g.gu().h(0,s.ga6())
u=new D.G("target",h,s.b,s,[X.cZ])
u.b=!0
s.ad(u)}s.sdt(null)
s.sdt(l)
s.d.h(0,p)
s.a.saD(U.hN(V.aC(1,0,0,0,0,1,0,0,0,0,1,5,0,0,0,1)))
u=q.d
if(u!==s){if(u!=null)u.gu().w(0,q.gc6())
q.d=s
s.gu().h(0,q.gc6())
q.c7()}V.kd(q)},
h6:function h6(a){this.a=a}}
var w=[C,H,J,P,W,O,E,Z,D,X,V,U,M,A,F,T,N]
hunkHelpers.setFunctionNamesIfNecessary(w)
var $={}
H.hj.prototype={}
J.U.prototype={
p:function(a,b){return a===b},
gE:function(a){return H.bI(a)},
i:function(a){return"Instance of '"+H.bc(a)+"'"}}
J.dV.prototype={
i:function(a){return String(a)},
gE:function(a){return a?519018:218159},
$iX:1}
J.cx.prototype={
p:function(a,b){return null==b},
i:function(a){return"null"},
gE:function(a){return 0},
$iz:1}
J.cz.prototype={
gE:function(a){return 0},
i:function(a){return String(a)}}
J.en.prototype={}
J.d7.prototype={}
J.aU.prototype={
i:function(a){var u=a[$.iJ()]
if(u==null)return this.dV(a)
return"JavaScript function for "+H.f(J.aa(u))},
$S:function(){return{func:1,opt:[,,,,,,,,,,,,,,,,]}},
$ihg:1}
J.ap.prototype={
h:function(a,b){H.w(b,H.r(a,0))
if(!!a.fixed$length)H.n(P.a8("add"))
a.push(b)},
it:function(a,b){var u
if(!!a.fixed$length)H.n(P.a8("removeAt"))
u=a.length
if(b>=u)throw H.i(P.cR(b,null,null))
return a.splice(b,1)[0]},
w:function(a,b){var u
if(!!a.fixed$length)H.n(P.a8("remove"))
for(u=0;u<a.length;++u)if(J.L(a[u],b)){a.splice(u,1)
return!0}return!1},
Y:function(a,b){var u,t
H.j(b,{func:1,ret:-1,args:[H.r(a,0)]})
u=a.length
for(t=0;t<u;++t){b.$1(a[t])
if(a.length!==u)throw H.i(P.bt(a))}},
t:function(a,b){var u,t
u=new Array(a.length)
u.fixed$length=Array
for(t=0;t<a.length;++t)this.T(u,t,H.f(a[t]))
return u.join(b)},
i3:function(a){return this.t(a,"")},
X:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
dT:function(a,b,c){var u=a.length
if(b>u)throw H.i(P.ai(b,0,a.length,"start",null))
if(c<b||c>a.length)throw H.i(P.ai(c,b,a.length,"end",null))
if(b===c)return H.b([],[H.r(a,0)])
return H.b(a.slice(b,c),[H.r(a,0)])},
ghY:function(a){if(a.length>0)return a[0]
throw H.i(H.hO())},
gbM:function(a){var u=a.length
if(u>0)return a[u-1]
throw H.i(H.hO())},
ar:function(a,b){var u
for(u=0;u<a.length;++u)if(J.L(a[u],b))return!0
return!1},
i:function(a){return P.hh(a,"[","]")},
gL:function(a){return new J.ab(a,a.length,0,[H.r(a,0)])},
gE:function(a){return H.bI(a)},
gl:function(a){return a.length},
sl:function(a,b){if(!!a.fixed$length)H.n(P.a8("set length"))
if(b<0)throw H.i(P.ai(b,0,null,"newLength",null))
a.length=b},
T:function(a,b,c){H.w(c,H.r(a,0))
if(!!a.immutable$list)H.n(P.a8("indexed set"))
if(b>=a.length||b<0)throw H.i(H.c8(a,b))
a[b]=c},
$ip:1,
$ia:1}
J.hi.prototype={}
J.ab.prototype={
gG:function(){return this.d},
v:function(){var u,t,s
u=this.a
t=u.length
if(this.b!==t)throw H.i(H.v(u))
s=this.c
if(s>=t){this.sca(null)
return!1}this.sca(u[s]);++this.c
return!0},
sca:function(a){this.d=H.w(a,H.r(this,0))},
$iao:1}
J.cy.prototype={
iH:function(a){var u
if(a>=-2147483648&&a<=2147483647)return a|0
if(isFinite(a)){u=a<0?Math.ceil(a):Math.floor(a)
return u+0}throw H.i(P.a8(""+a+".toInt()"))},
bJ:function(a){var u,t
if(a>=0){if(a<=2147483647)return a|0}else if(a>=-2147483648){u=a|0
return a===u?u:u-1}t=Math.floor(a)
if(isFinite(t))return t
throw H.i(P.a8(""+a+".floor()"))},
a4:function(a){if(a>0){if(a!==1/0)return Math.round(a)}else if(a>-1/0)return 0-Math.round(0-a)
throw H.i(P.a8(""+a+".round()"))},
dw:function(a,b){var u,t
if(b>20)throw H.i(P.ai(b,0,20,"fractionDigits",null))
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
dP:function(a,b){var u=a%b
if(u===0)return 0
if(u>0)return u
if(b<0)return u-b
else return u+b},
dX:function(a,b){if((a|0)===a)if(b>=1||b<-1)return a/b|0
return this.cB(a,b)},
S:function(a,b){return(a|0)===a?a/b|0:this.cB(a,b)},
cB:function(a,b){var u=a/b
if(u>=-2147483648&&u<=2147483647)return u|0
if(u>0){if(u!==1/0)return Math.floor(u)}else if(u>-1/0)return Math.ceil(u)
throw H.i(P.a8("Result of truncating division is "+H.f(u)+": "+H.f(a)+" ~/ "+b))},
aQ:function(a,b){var u
if(a>0)u=this.fX(a,b)
else{u=b>31?31:b
u=a>>u>>>0}return u},
fX:function(a,b){return b>31?0:a>>>b},
$iq:1,
$ia4:1}
J.cw.prototype={$iu:1}
J.cv.prototype={}
J.bC.prototype={
bz:function(a,b){if(b<0)throw H.i(H.c8(a,b))
if(b>=a.length)H.n(H.c8(a,b))
return a.charCodeAt(b)},
aM:function(a,b){if(b>=a.length)throw H.i(H.c8(a,b))
return a.charCodeAt(b)},
H:function(a,b){if(typeof b!=="string")throw H.i(P.hb(b,null,null))
return a+b},
c1:function(a,b,c){if(c==null)c=a.length
if(b<0)throw H.i(P.cR(b,null,null))
if(b>c)throw H.i(P.cR(b,null,null))
if(c>a.length)throw H.i(P.cR(c,null,null))
return a.substring(b,c)},
c0:function(a,b){return this.c1(a,b,null)},
O:function(a,b){var u,t
if(0>=b)return""
if(b===1||a.length===0)return a
if(b!==b>>>0)throw H.i(C.z)
for(u=a,t="";!0;){if((b&1)===1)t=u+t
b=b>>>1
if(b===0)break
u+=u}return t},
ii:function(a,b,c){var u=b-a.length
if(u<=0)return a
return this.O(c,u)+a},
a_:function(a,b){return this.ii(a,b," ")},
i:function(a){return a},
gE:function(a){var u,t,s
for(u=a.length,t=0,s=0;s<u;++s){t=536870911&t+a.charCodeAt(s)
t=536870911&t+((524287&t)<<10)
t^=t>>6}t=536870911&t+((67108863&t)<<3)
t^=t>>11
return 536870911&t+((16383&t)<<15)},
gl:function(a){return a.length},
$ihW:1,
$it:1}
H.P.prototype={
gl:function(a){return this.a.length},
j:function(a,b){return C.j.bz(this.a,b)},
$ad9:function(){return[P.u]},
$aJ:function(){return[P.u]},
$ap:function(){return[P.u]},
$aa:function(){return[P.u]}}
H.dH.prototype={}
H.cC.prototype={
gG:function(){return this.d},
v:function(){var u,t,s,r
u=this.a
t=J.hz(u)
s=t.gl(u)
if(this.b!==s)throw H.i(P.bt(u))
r=this.c
if(r>=s){this.sax(null)
return!1}this.sax(t.X(u,r));++this.c
return!0},
sax:function(a){this.d=H.w(a,H.r(this,0))},
$iao:1}
H.e7.prototype={
gL:function(a){return new H.e8(J.cd(this.a),this.b,this.$ti)},
gl:function(a){return J.ce(this.a)},
X:function(a,b){return this.b.$1(J.hI(this.a,b))},
$ap:function(a,b){return[b]}}
H.e8.prototype={
v:function(){var u=this.b
if(u.v()){this.sax(this.c.$1(u.gG()))
return!0}this.sax(null)
return!1},
gG:function(){return this.a},
sax:function(a){this.a=H.w(a,H.r(this,1))},
$aao:function(a,b){return[b]}}
H.fm.prototype={
gL:function(a){return new H.fn(J.cd(this.a),this.b,this.$ti)}}
H.fn.prototype={
v:function(){var u,t
for(u=this.a,t=this.b;u.v();)if(t.$1(u.gG()))return!0
return!1},
gG:function(){return this.a.gG()}}
H.b8.prototype={}
H.d9.prototype={}
H.d8.prototype={}
H.eo.prototype={}
H.eS.prototype={
Z:function(a){var u,t,s
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
if(u==null)return"NoSuchMethodError: "+H.f(this.a)
return"NoSuchMethodError: method not found: '"+u+"' on null"}}
H.dX.prototype={
i:function(a){var u,t
u=this.b
if(u==null)return"NoSuchMethodError: "+H.f(this.a)
t=this.c
if(t==null)return"NoSuchMethodError: method not found: '"+u+"' ("+H.f(this.a)+")"
return"NoSuchMethodError: method not found: '"+u+"' on '"+t+"' ("+H.f(this.a)+")"}}
H.f4.prototype={
i:function(a){var u=this.a
return u.length===0?"Error":"Error: "+u}}
H.ha.prototype={
$1:function(a){if(!!J.K(a).$iaR)if(a.$thrownJsError==null)a.$thrownJsError=this.a
return a},
$S:15}
H.dl.prototype={
i:function(a){var u,t
u=this.b
if(u!=null)return u
u=this.a
t=u!==null&&typeof u==="object"?u.stack:null
u=t==null?"":t
this.b=u
return u},
$ia3:1}
H.br.prototype={
i:function(a){return"Closure '"+H.bc(this).trim()+"'"},
$ihg:1,
giO:function(){return this},
$C:"$1",
$R:1,
$D:null}
H.eJ.prototype={}
H.eE.prototype={
i:function(a){var u=this.$static_name
if(u==null)return"Closure of unknown static method"
return"Closure '"+H.bn(u)+"'"}}
H.bp.prototype={
p:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof H.bp))return!1
return this.a===b.a&&this.b===b.b&&this.c===b.c},
gE:function(a){var u,t
u=this.c
if(u==null)t=H.bI(this.a)
else t=typeof u!=="object"?J.cc(u):H.bI(u)
return(t^H.bI(this.b))>>>0},
i:function(a){var u=this.c
if(u==null)u=this.a
return"Closure '"+H.f(this.d)+"' of "+("Instance of '"+H.bc(u)+"'")}}
H.eU.prototype={
i:function(a){return this.a}}
H.dz.prototype={
i:function(a){return this.a}}
H.et.prototype={
i:function(a){return"RuntimeError: "+H.f(this.a)}}
H.az.prototype={
gl:function(a){return this.a},
cK:function(a){var u,t
if(typeof a==="string"){u=this.b
if(u==null)return!1
return this.ck(u,a)}else if(typeof a==="number"&&(a&0x3ffffff)===a){t=this.c
if(t==null)return!1
return this.ck(t,a)}else return this.i1(a)},
i1:function(a){var u=this.d
if(u==null)return!1
return this.bL(this.bf(u,J.cc(a)&0x3ffffff),a)>=0},
j:function(a,b){var u,t,s,r
if(typeof b==="string"){u=this.b
if(u==null)return
t=this.aN(u,b)
s=t==null?null:t.b
return s}else if(typeof b==="number"&&(b&0x3ffffff)===b){r=this.c
if(r==null)return
t=this.aN(r,b)
s=t==null?null:t.b
return s}else return this.i2(b)},
i2:function(a){var u,t,s
u=this.d
if(u==null)return
t=this.bf(u,J.cc(a)&0x3ffffff)
s=this.bL(t,a)
if(s<0)return
return t[s].b},
T:function(a,b,c){var u,t,s,r,q,p
H.w(b,H.r(this,0))
H.w(c,H.r(this,1))
if(typeof b==="string"){u=this.b
if(u==null){u=this.bj()
this.b=u}this.cc(u,b,c)}else if(typeof b==="number"&&(b&0x3ffffff)===b){t=this.c
if(t==null){t=this.bj()
this.c=t}this.cc(t,b,c)}else{s=this.d
if(s==null){s=this.bj()
this.d=s}r=J.cc(b)&0x3ffffff
q=this.bf(s,r)
if(q==null)this.bq(s,r,[this.bk(b,c)])
else{p=this.bL(q,b)
if(p>=0)q[p].b=c
else q.push(this.bk(b,c))}}},
Y:function(a,b){var u,t
H.j(b,{func:1,ret:-1,args:[H.r(this,0),H.r(this,1)]})
u=this.e
t=this.r
for(;u!=null;){b.$2(u.a,u.b)
if(t!==this.r)throw H.i(P.bt(this))
u=u.c}},
cc:function(a,b,c){var u
H.w(b,H.r(this,0))
H.w(c,H.r(this,1))
u=this.aN(a,b)
if(u==null)this.bq(a,b,this.bk(b,c))
else u.b=c},
bk:function(a,b){var u,t
u=new H.e_(H.w(a,H.r(this,0)),H.w(b,H.r(this,1)))
if(this.e==null){this.f=u
this.e=u}else{t=this.f
u.d=t
t.c=u
this.f=u}++this.a
this.r=this.r+1&67108863
return u},
bL:function(a,b){var u,t
if(a==null)return-1
u=a.length
for(t=0;t<u;++t)if(J.L(a[t].a,b))return t
return-1},
i:function(a){return P.hS(this)},
aN:function(a,b){return a[b]},
bf:function(a,b){return a[b]},
bq:function(a,b,c){a[b]=c},
eu:function(a,b){delete a[b]},
ck:function(a,b){return this.aN(a,b)!=null},
bj:function(){var u=Object.create(null)
this.bq(u,"<non-identifier-key>",u)
this.eu(u,"<non-identifier-key>")
return u},
$ihQ:1}
H.e_.prototype={}
H.e0.prototype={
gl:function(a){return this.a.a},
gL:function(a){var u,t
u=this.a
t=new H.e1(u,u.r,this.$ti)
t.c=u.e
return t}}
H.e1.prototype={
gG:function(){return this.d},
v:function(){var u=this.a
if(this.b!==u.r)throw H.i(P.bt(u))
else{u=this.c
if(u==null){this.scb(null)
return!1}else{this.scb(u.a)
this.c=this.c.c
return!0}}},
scb:function(a){this.d=H.w(a,H.r(this,0))},
$iao:1}
H.h1.prototype={
$1:function(a){return this.a(a)},
$S:15}
H.h2.prototype={
$2:function(a,b){return this.a(a,b)},
$S:30}
H.h3.prototype={
$1:function(a){return this.a(H.M(a))},
$S:29}
H.dW.prototype={
i:function(a){return"RegExp/"+this.a+"/"},
$ihW:1}
H.cJ.prototype={$ikA:1}
H.cG.prototype={
gl:function(a){return a.length},
$iay:1,
$aay:function(){}}
H.cH.prototype={
j:function(a,b){H.c4(b,a,a.length)
return a[b]},
$ab8:function(){return[P.q]},
$aJ:function(){return[P.q]},
$ip:1,
$ap:function(){return[P.q]},
$ia:1,
$aa:function(){return[P.q]}}
H.cI.prototype={
$ab8:function(){return[P.u]},
$aJ:function(){return[P.u]},
$ip:1,
$ap:function(){return[P.u]},
$ia:1,
$aa:function(){return[P.u]}}
H.eg.prototype={
j:function(a,b){H.c4(b,a,a.length)
return a[b]}}
H.eh.prototype={
j:function(a,b){H.c4(b,a,a.length)
return a[b]}}
H.ei.prototype={
j:function(a,b){H.c4(b,a,a.length)
return a[b]}}
H.cK.prototype={
gl:function(a){return a.length},
j:function(a,b){H.c4(b,a,a.length)
return a[b]},
$ikB:1}
H.ej.prototype={
gl:function(a){return a.length},
j:function(a,b){H.c4(b,a,a.length)
return a[b]}}
H.c_.prototype={}
H.c0.prototype={}
H.c1.prototype={}
H.c2.prototype={}
P.fp.prototype={
$1:function(a){var u,t
u=this.a
t=u.a
u.a=null
t.$0()},
$S:16}
P.fo.prototype={
$1:function(a){var u,t
this.a.a=H.j(a,{func:1,ret:-1})
u=this.b
t=this.c
u.firstChild?u.removeChild(t):u.appendChild(t)},
$S:26}
P.fq.prototype={
$0:function(){this.a.$0()},
$S:1}
P.fr.prototype={
$0:function(){this.a.$0()},
$S:1}
P.dm.prototype={
ed:function(a,b){if(self.setTimeout!=null)this.b=self.setTimeout(H.bj(new P.fP(this,b),0),a)
else throw H.i(P.a8("`setTimeout()` not found."))},
ee:function(a,b){if(self.setTimeout!=null)this.b=self.setInterval(H.bj(new P.fO(this,a,Date.now(),b),0),a)
else throw H.i(P.a8("Periodic timer."))},
$ia6:1}
P.fP.prototype={
$0:function(){var u=this.a
u.b=null
u.c=1
this.b.$0()},
$S:2}
P.fO.prototype={
$0:function(){var u,t,s,r
u=this.a
t=u.c+1
s=this.b
if(s>0){r=Date.now()-this.c
if(r>(t+1)*s)t=C.h.dX(r,s)}u.c=t
this.d.$1(u)},
$S:1}
P.ax.prototype={
i7:function(a){if(this.c!==6)return!0
return this.b.b.bU(H.j(this.d,{func:1,ret:P.X,args:[P.E]}),a.a,P.X,P.E)},
i0:function(a){var u,t,s,r
u=this.e
t=P.E
s={futureOr:1,type:H.r(this,1)}
r=this.b.b
if(H.ds(u,{func:1,args:[P.E,P.a3]}))return H.hy(r.iA(u,a.a,a.b,null,t,P.a3),s)
else return H.hy(r.bU(H.j(u,{func:1,args:[P.E]}),a.a,null,t),s)}}
P.ad.prototype={
dv:function(a,b,c){var u,t,s,r
u=H.r(this,0)
H.j(a,{func:1,ret:{futureOr:1,type:c},args:[u]})
t=$.H
if(t!==C.k){t.toString
H.j(a,{func:1,ret:{futureOr:1,type:c},args:[u]})
if(b!=null)b=P.jM(b,t)}H.j(a,{func:1,ret:{futureOr:1,type:c},args:[u]})
s=new P.ad(0,$.H,[c])
r=b==null?1:3
this.cd(new P.ax(s,r,a,b,[u,c]))
return s},
iG:function(a,b){return this.dv(a,null,b)},
cd:function(a){var u,t
u=this.a
if(u<=1){a.a=H.l(this.c,"$iax")
this.c=a}else{if(u===2){t=H.l(this.c,"$iad")
u=t.a
if(u<4){t.cd(a)
return}this.a=u
this.c=t.c}u=this.b
u.toString
P.fW(null,null,u,H.j(new P.fx(this,a),{func:1,ret:-1}))}},
cv:function(a){var u,t,s,r,q,p
u={}
u.a=a
if(a==null)return
t=this.a
if(t<=1){s=H.l(this.c,"$iax")
this.c=a
if(s!=null){for(r=a;q=r.a,q!=null;r=q);r.a=s}}else{if(t===2){p=H.l(this.c,"$iad")
t=p.a
if(t<4){p.cv(a)
return}this.a=t
this.c=p.c}u.a=this.aP(a)
t=this.b
t.toString
P.fW(null,null,t,H.j(new P.fB(u,this),{func:1,ret:-1}))}},
bn:function(){var u=H.l(this.c,"$iax")
this.c=null
return this.aP(u)},
aP:function(a){var u,t,s
for(u=a,t=null;u!=null;t=u,u=s){s=u.a
u.a=t}return t},
cf:function(a){var u,t,s
u=H.r(this,0)
H.hy(a,{futureOr:1,type:u})
t=this.$ti
if(H.dr(a,"$ibx",t,"$abx"))if(H.dr(a,"$iad",t,null))P.ii(a,this)
else P.jE(a,this)
else{s=this.bn()
H.w(a,u)
this.a=4
this.c=a
P.bY(this,s)}},
cg:function(a,b){var u
H.l(b,"$ia3")
u=this.bn()
this.a=8
this.c=new P.Z(a,b)
P.bY(this,u)},
$ibx:1}
P.fx.prototype={
$0:function(){P.bY(this.a,this.b)},
$S:1}
P.fB.prototype={
$0:function(){P.bY(this.b,this.a.a)},
$S:1}
P.fy.prototype={
$1:function(a){var u=this.a
u.a=0
u.cf(a)},
$S:16}
P.fz.prototype={
$2:function(a,b){H.l(b,"$ia3")
this.a.cg(a,b)},
$1:function(a){return this.$2(a,null)},
$S:25}
P.fA.prototype={
$0:function(){this.a.cg(this.b,this.c)},
$S:1}
P.fE.prototype={
$0:function(){var u,t,s,r,q,p,o
u=null
try{r=this.c
u=r.b.b.ds(H.j(r.d,{func:1}),null)}catch(q){t=H.b1(q)
s=H.bl(q)
if(this.d){r=H.l(this.a.a.c,"$iZ").a
p=t
p=r==null?p==null:r===p
r=p}else r=!1
p=this.b
if(r)p.b=H.l(this.a.a.c,"$iZ")
else p.b=new P.Z(t,s)
p.a=!0
return}if(!!J.K(u).$ibx){if(u instanceof P.ad&&u.a>=4){if(u.a===8){r=this.b
r.b=H.l(u.c,"$iZ")
r.a=!0}return}o=this.a.a
r=this.b
r.b=u.iG(new P.fF(o),null)
r.a=!1}},
$S:2}
P.fF.prototype={
$1:function(a){return this.a},
$S:23}
P.fD.prototype={
$0:function(){var u,t,s,r,q,p,o
try{s=this.b
r=H.r(s,0)
q=H.w(this.c,r)
p=H.r(s,1)
this.a.b=s.b.b.bU(H.j(s.d,{func:1,ret:{futureOr:1,type:p},args:[r]}),q,{futureOr:1,type:p},r)}catch(o){u=H.b1(o)
t=H.bl(o)
s=this.a
s.b=new P.Z(u,t)
s.a=!0}},
$S:2}
P.fC.prototype={
$0:function(){var u,t,s,r,q,p,o,n
try{u=H.l(this.a.a.c,"$iZ")
r=this.c
if(r.i7(u)&&r.e!=null){q=this.b
q.b=r.i0(u)
q.a=!1}}catch(p){t=H.b1(p)
s=H.bl(p)
r=H.l(this.a.a.c,"$iZ")
q=r.a
o=t
n=this.b
if(q==null?o==null:q===o)n.b=r
else n.b=new P.Z(t,s)
n.a=!0}},
$S:2}
P.dc.prototype={}
P.eF.prototype={
gl:function(a){var u,t,s,r
u={}
t=new P.ad(0,$.H,[P.u])
u.a=0
s=H.r(this,0)
r=H.j(new P.eH(u,this),{func:1,ret:-1,args:[s]})
H.j(new P.eI(u,t),{func:1,ret:-1})
W.T(this.a,this.b,r,!1,s)
return t}}
P.eH.prototype={
$1:function(a){H.w(a,H.r(this.b,0));++this.a.a},
$S:function(){return{func:1,ret:P.z,args:[H.r(this.b,0)]}}}
P.eI.prototype={
$0:function(){this.b.cf(this.a.a)},
$S:1}
P.bL.prototype={}
P.eG.prototype={}
P.a6.prototype={}
P.Z.prototype={
i:function(a){return H.f(this.a)},
$iaR:1}
P.fR.prototype={$ikO:1}
P.fV.prototype={
$0:function(){var u,t,s
u=this.a
t=u.a
if(t==null){s=new P.cL()
u.a=s
u=s}else u=t
t=this.b
if(t==null)throw H.i(u)
s=H.i(u)
s.stack=t.i(0)
throw s},
$S:1}
P.fJ.prototype={
iB:function(a){var u,t,s
H.j(a,{func:1,ret:-1})
try{if(C.k===$.H){a.$0()
return}P.io(null,null,this,a,-1)}catch(s){u=H.b1(s)
t=H.bl(s)
P.fU(null,null,this,u,H.l(t,"$ia3"))}},
iC:function(a,b,c){var u,t,s
H.j(a,{func:1,ret:-1,args:[c]})
H.w(b,c)
try{if(C.k===$.H){a.$1(b)
return}P.ip(null,null,this,a,b,-1,c)}catch(s){u=H.b1(s)
t=H.bl(s)
P.fU(null,null,this,u,H.l(t,"$ia3"))}},
hy:function(a,b){return new P.fL(this,H.j(a,{func:1,ret:b}),b)},
bv:function(a){return new P.fK(this,H.j(a,{func:1,ret:-1}))},
cH:function(a,b){return new P.fM(this,H.j(a,{func:1,ret:-1,args:[b]}),b)},
ds:function(a,b){H.j(a,{func:1,ret:b})
if($.H===C.k)return a.$0()
return P.io(null,null,this,a,b)},
bU:function(a,b,c,d){H.j(a,{func:1,ret:c,args:[d]})
H.w(b,d)
if($.H===C.k)return a.$1(b)
return P.ip(null,null,this,a,b,c,d)},
iA:function(a,b,c,d,e,f){H.j(a,{func:1,ret:d,args:[e,f]})
H.w(b,e)
H.w(c,f)
if($.H===C.k)return a.$2(b,c)
return P.jN(null,null,this,a,b,c,d,e,f)}}
P.fL.prototype={
$0:function(){return this.a.ds(this.b,this.c)},
$S:function(){return{func:1,ret:this.c}}}
P.fK.prototype={
$0:function(){return this.a.iB(this.b)},
$S:2}
P.fM.prototype={
$1:function(a){var u=this.c
return this.a.iC(this.b,H.w(a,u),u)},
$S:function(){return{func:1,ret:-1,args:[this.c]}}}
P.fH.prototype={
gL:function(a){return P.ik(this,this.r,H.r(this,0))},
gl:function(a){return this.a},
h:function(a,b){var u
H.w(b,H.r(this,0))
if(typeof b==="number"&&(b&1073741823)===b){u=this.c
if(u==null){u=P.il()
this.c=u}return this.ep(u,b)}else return this.eg(b)},
eg:function(a){var u,t,s
H.w(a,H.r(this,0))
u=this.d
if(u==null){u=P.il()
this.d=u}t=this.ci(a)
s=u[t]
if(s==null)u[t]=[this.bc(a)]
else{if(this.co(s,a)>=0)return!1
s.push(this.bc(a))}return!0},
w:function(a,b){if(typeof b==="number"&&(b&1073741823)===b)return this.fD(this.c,b)
else return this.fC(b)},
fC:function(a){var u,t,s
u=this.d
if(u==null)return!1
t=this.eD(u,a)
s=this.co(t,a)
if(s<0)return!1
this.cC(t.splice(s,1)[0])
return!0},
ep:function(a,b){H.w(b,H.r(this,0))
if(H.l(a[b],"$ibZ")!=null)return!1
a[b]=this.bc(b)
return!0},
fD:function(a,b){var u
if(a==null)return!1
u=H.l(a[b],"$ibZ")
if(u==null)return!1
this.cC(u)
delete a[b]
return!0},
cp:function(){this.r=1073741823&this.r+1},
bc:function(a){var u,t
u=new P.bZ(H.w(a,H.r(this,0)))
if(this.e==null){this.f=u
this.e=u}else{t=this.f
u.c=t
t.b=u
this.f=u}++this.a
this.cp()
return u},
cC:function(a){var u,t
u=a.c
t=a.b
if(u==null)this.e=t
else u.b=t
if(t==null)this.f=u
else t.c=u;--this.a
this.cp()},
ci:function(a){return J.cc(a)&1073741823},
eD:function(a,b){return a[this.ci(b)]},
co:function(a,b){var u,t
if(a==null)return-1
u=a.length
for(t=0;t<u;++t)if(a[t].a==b)return t
return-1}}
P.bZ.prototype={}
P.fI.prototype={
gG:function(){return this.d},
v:function(){var u=this.a
if(this.b!==u.r)throw H.i(P.bt(u))
else{u=this.c
if(u==null){this.sce(null)
return!1}else{this.sce(H.w(u.a,H.r(this,0)))
this.c=this.c.b
return!0}}},
sce:function(a){this.d=H.w(a,H.r(this,0))},
$iao:1}
P.e2.prototype={$ip:1,$ia:1}
P.J.prototype={
gL:function(a){return new H.cC(a,this.gl(a),0,[H.h0(this,a,"J",0)])},
X:function(a,b){return this.j(a,b)},
iJ:function(a,b){var u,t
u=H.b([],[H.h0(this,a,"J",0)])
C.a.sl(u,this.gl(a))
for(t=0;t<this.gl(a);++t)C.a.T(u,t,this.j(a,t))
return u},
iI:function(a){return this.iJ(a,!0)},
i:function(a){return P.hh(a,"[","]")}}
P.e4.prototype={}
P.e5.prototype={
$2:function(a,b){var u,t
u=this.a
if(!u.a)this.b.a+=", "
u.a=!1
u=this.b
t=u.a+=H.f(a)
u.a=t+": "
u.a+=H.f(b)},
$S:13}
P.e6.prototype={
gl:function(a){return this.a},
i:function(a){return P.hS(this)},
$iar:1}
P.fN.prototype={
i:function(a){return P.hh(this,"{","}")},
X:function(a,b){var u,t,s
if(b<0)H.n(P.ai(b,0,null,"index",null))
for(u=P.ik(this,this.r,H.r(this,0)),t=0;u.v();){s=u.d
if(b===t)return s;++t}throw H.i(P.bz(b,this,"index",null,t))},
$ip:1,
$ii3:1}
P.di.prototype={}
P.bs.prototype={}
P.cn.prototype={}
P.dI.prototype={
$abs:function(){return[P.t,[P.a,P.u]]}}
P.f6.prototype={}
P.f7.prototype={
hJ:function(a,b,c){var u,t,s
c=P.i1(b,c,a.length,null,null,null)
u=c-b
if(u===0)return new Uint8Array(0)
t=new Uint8Array(u*3)
s=new P.fQ(t)
if(s.eC(a,b,c)!==c)s.cD(C.j.bz(a,c-1),0)
return new Uint8Array(t.subarray(0,H.jI(0,s.b,t.length)))},
hI:function(a){return this.hJ(a,0,null)},
$acn:function(){return[P.t,[P.a,P.u]]}}
P.fQ.prototype={
cD:function(a,b){var u,t,s,r,q
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
eC:function(a,b,c){var u,t,s,r,q,p,o
if(b!==c&&(C.j.bz(a,c-1)&64512)===55296)--c
for(u=this.c,t=u.length,s=b;s<c;++s){r=C.j.aM(a,s)
if(r<=127){q=this.b
if(q>=t)break
this.b=q+1
u[q]=r}else if((r&64512)===55296){if(this.b+3>=t)break
p=s+1
if(this.cD(r,C.j.aM(a,p)))s=p}else if(r<=2047){q=this.b
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
P.X.prototype={}
P.aO.prototype={
p:function(a,b){if(b==null)return!1
return b instanceof P.aO&&this.a===b.a&&!0},
gE:function(a){var u=this.a
return(u^C.h.aQ(u,30))&1073741823},
i:function(a){var u,t,s,r,q,p,o,n
u=P.j5(H.jo(this))
t=P.co(H.jm(this))
s=P.co(H.ji(this))
r=P.co(H.jj(this))
q=P.co(H.jl(this))
p=P.co(H.jn(this))
o=P.j6(H.jk(this))
n=u+"-"+t+"-"+s+" "+r+":"+q+":"+p+"."+o
return n}}
P.q.prototype={}
P.aQ.prototype={
p:function(a,b){if(b==null)return!1
return b instanceof P.aQ&&this.a===b.a},
gE:function(a){return C.h.gE(this.a)},
i:function(a){var u,t,s,r,q
u=new P.dG()
t=this.a
if(t<0)return"-"+new P.aQ(0-t).i(0)
s=u.$1(C.h.S(t,6e7)%60)
r=u.$1(C.h.S(t,1e6)%60)
q=new P.dF().$1(t%1e6)
return""+C.h.S(t,36e8)+":"+H.f(s)+":"+H.f(r)+"."+H.f(q)}}
P.dF.prototype={
$1:function(a){if(a>=1e5)return""+a
if(a>=1e4)return"0"+a
if(a>=1000)return"00"+a
if(a>=100)return"000"+a
if(a>=10)return"0000"+a
return"00000"+a},
$S:14}
P.dG.prototype={
$1:function(a){if(a>=10)return""+a
return"0"+a},
$S:14}
P.aR.prototype={}
P.cL.prototype={
i:function(a){return"Throw of null."}}
P.am.prototype={
gbe:function(){return"Invalid argument"+(!this.a?"(s)":"")},
gbd:function(){return""},
i:function(a){var u,t,s,r,q,p
u=this.c
t=u!=null?" ("+u+")":""
u=this.d
s=u==null?"":": "+u
r=this.gbe()+t+s
if(!this.a)return r
q=this.gbd()
p=P.dK(this.b)
return r+q+": "+p}}
P.bd.prototype={
gbe:function(){return"RangeError"},
gbd:function(){var u,t,s
u=this.e
if(u==null){u=this.f
t=u!=null?": Not less than or equal to "+H.f(u):""}else{s=this.f
if(s==null)t=": Not greater than or equal to "+H.f(u)
else if(s>u)t=": Not in range "+H.f(u)+".."+H.f(s)+", inclusive"
else t=s<u?": Valid value range is empty":": Only valid value is "+H.f(u)}return t}}
P.dT.prototype={
gbe:function(){return"RangeError"},
gbd:function(){var u,t
u=H.Y(this.b)
if(typeof u!=="number")return u.iP()
if(u<0)return": index must not be negative"
t=this.f
if(t===0)return": no indices are valid"
return": index should be less than "+H.f(t)},
gl:function(a){return this.f}}
P.f5.prototype={
i:function(a){return"Unsupported operation: "+this.a}}
P.f3.prototype={
i:function(a){var u=this.a
return u!=null?"UnimplementedError: "+u:"UnimplementedError"}}
P.eD.prototype={
i:function(a){return"Bad state: "+this.a}}
P.dB.prototype={
i:function(a){var u=this.a
if(u==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+P.dK(u)+"."}}
P.em.prototype={
i:function(a){return"Out of Memory"},
$iaR:1}
P.cY.prototype={
i:function(a){return"Stack Overflow"},
$iaR:1}
P.dD.prototype={
i:function(a){var u=this.a
return u==null?"Reading static variable during its initialization":"Reading static variable '"+u+"' during its initialization"}}
P.df.prototype={
i:function(a){return"Exception: "+this.a}}
P.dR.prototype={
i:function(a){var u,t,s,r
u=this.a
t=""!==u?"FormatException: "+u:"FormatException"
s=this.b
r=s.length>78?C.j.c1(s,0,75)+"...":s
return t+"\n"+r}}
P.u.prototype={}
P.p.prototype={
gl:function(a){var u,t
u=this.gL(this)
for(t=0;u.v();)++t
return t},
X:function(a,b){var u,t,s
if(b<0)H.n(P.ai(b,0,null,"index",null))
for(u=this.gL(this),t=0;u.v();){s=u.gG()
if(b===t)return s;++t}throw H.i(P.bz(b,this,"index",null,t))},
i:function(a){return P.ja(this,"(",")")}}
P.ao.prototype={}
P.a.prototype={$ip:1}
P.z.prototype={
gE:function(a){return P.E.prototype.gE.call(this,this)},
i:function(a){return"null"}}
P.a4.prototype={}
P.E.prototype={constructor:P.E,$iE:1,
p:function(a,b){return this===b},
gE:function(a){return H.bI(this)},
i:function(a){return"Instance of '"+H.bc(this)+"'"},
toString:function(){return this.i(this)}}
P.a3.prototype={}
P.t.prototype={$ihW:1}
P.aW.prototype={
gl:function(a){return this.a.length},
i:function(a){var u=this.a
return u.charCodeAt(0)==0?u:u}}
W.m.prototype={}
W.du.prototype={
i:function(a){return String(a)}}
W.dv.prototype={
i:function(a){return String(a)}}
W.cg.prototype={}
W.b2.prototype={
b8:function(a,b,c){if(c!=null)return this.eE(a,b,P.jU(c,null))
return this.eF(a,b)},
dJ:function(a,b){return this.b8(a,b,null)},
eE:function(a,b,c){return a.getContext(b,c)},
eF:function(a,b){return a.getContext(b)},
$ib2:1,
$ihL:1}
W.b3.prototype={
eG:function(a,b,c,d,e){return a.getImageData(b,c,d,e)},
hV:function(a,b,c,d,e,f){return a.drawImage(b,c,d,e,f)},
$ib3:1}
W.aN.prototype={
gl:function(a){return a.length}}
W.bu.prototype={
gl:function(a){return a.length}}
W.dC.prototype={}
W.bv.prototype={$ibv:1}
W.bw.prototype={
dK:function(a,b){return a.getElementById(b)}}
W.dE.prototype={
i:function(a){return String(a)}}
W.cp.prototype={
i:function(a){return"Rectangle ("+H.f(a.left)+", "+H.f(a.top)+") "+H.f(a.width)+" x "+H.f(a.height)},
p:function(a,b){var u
if(b==null)return!1
if(!H.dr(b,"$icS",[P.a4],"$acS"))return!1
u=J.fZ(b)
return a.left===u.gdd(b)&&a.top===u.gdz(b)&&a.width===u.gbW(b)&&a.height===u.gbK(b)},
gE:function(a){return W.ij(C.i.gE(a.left),C.i.gE(a.top),C.i.gE(a.width),C.i.gE(a.height))},
gbK:function(a){return a.height},
gdd:function(a){return a.left},
gdz:function(a){return a.top},
gbW:function(a){return a.width},
$icS:1,
$acS:function(){return[P.a4]}}
W.ft.prototype={
gl:function(a){return this.b.length},
j:function(a,b){var u=this.b
if(b<0||b>=u.length)return H.d(u,b)
return H.l(u[b],"$iQ")},
h:function(a,b){J.hH(this.a,b)
return b},
gL:function(a){var u=this.iI(this)
return new J.ab(u,u.length,0,[H.r(u,0)])},
$aJ:function(){return[W.Q]},
$ap:function(){return[W.Q]},
$aa:function(){return[W.Q]}}
W.Q.prototype={
gcJ:function(a){return new W.ft(a,a.children)},
i:function(a){return a.localName},
$iQ:1}
W.e.prototype={$ie:1}
W.b7.prototype={
eh:function(a,b,c,d){return a.addEventListener(b,H.bj(H.j(c,{func:1,args:[W.e]}),1),!1)},
$ib7:1}
W.dQ.prototype={
gl:function(a){return a.length}}
W.b9.prototype={
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.i(P.bz(b,a,null,null,null))
return a[b]},
X:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$iay:1,
$aay:function(){return[W.D]},
$aJ:function(){return[W.D]},
$ip:1,
$ap:function(){return[W.D]},
$ia:1,
$aa:function(){return[W.D]},
$ib9:1,
$aag:function(){return[W.D]}}
W.cu.prototype={}
W.aS.prototype={$iaS:1,
gcL:function(a){return a.data}}
W.by.prototype={$iby:1,$ihL:1}
W.aq.prototype={$iaq:1}
W.bF.prototype={}
W.V.prototype={$iV:1}
W.fs.prototype={
gL:function(a){var u=this.a.childNodes
return new W.cs(u,u.length,-1,[H.h0(C.N,u,"ag",0)])},
gl:function(a){return this.a.childNodes.length},
j:function(a,b){var u=this.a.childNodes
if(b<0||b>=u.length)return H.d(u,b)
return u[b]},
$aJ:function(){return[W.D]},
$ap:function(){return[W.D]},
$aa:function(){return[W.D]}}
W.D.prototype={
i:function(a){var u=a.nodeValue
return u==null?this.dU(a):u},
P:function(a,b){return a.appendChild(b)},
$iD:1}
W.bG.prototype={
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.i(P.bz(b,a,null,null,null))
return a[b]},
X:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$iay:1,
$aay:function(){return[W.D]},
$aJ:function(){return[W.D]},
$ip:1,
$ap:function(){return[W.D]},
$ia:1,
$aa:function(){return[W.D]},
$aag:function(){return[W.D]}}
W.eu.prototype={
gl:function(a){return a.length}}
W.at.prototype={$iat:1}
W.aj.prototype={$iaj:1}
W.eR.prototype={
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.i(P.bz(b,a,null,null,null))
return a[b]},
X:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$iay:1,
$aay:function(){return[W.at]},
$aJ:function(){return[W.at]},
$ip:1,
$ap:function(){return[W.at]},
$ia:1,
$aa:function(){return[W.at]},
$aag:function(){return[W.at]}}
W.aY.prototype={}
W.fk.prototype={$ihL:1}
W.aw.prototype={
ghQ:function(a){if(a.deltaY!==undefined)return a.deltaY
throw H.i(P.a8("deltaY is not supported"))},
ghP:function(a){if(a.deltaX!==undefined)return a.deltaX
throw H.i(P.a8("deltaX is not supported"))},
$iaw:1}
W.bX.prototype={
fG:function(a,b){return a.requestAnimationFrame(H.bj(H.j(b,{func:1,ret:-1,args:[P.a4]}),1))},
ew:function(a){if(!!(a.requestAnimationFrame&&a.cancelAnimationFrame))return;(function(b){var u=['ms','moz','webkit','o']
for(var t=0;t<u.length&&!b.requestAnimationFrame;++t){b.requestAnimationFrame=b[u[t]+'RequestAnimationFrame']
b.cancelAnimationFrame=b[u[t]+'CancelAnimationFrame']||b[u[t]+'CancelRequestAnimationFrame']}if(b.requestAnimationFrame&&b.cancelAnimationFrame)return
b.requestAnimationFrame=function(c){return window.setTimeout(function(){c(Date.now())},16)}
b.cancelAnimationFrame=function(c){clearTimeout(c)}})(a)}}
W.de.prototype={
i:function(a){return"Rectangle ("+H.f(a.left)+", "+H.f(a.top)+") "+H.f(a.width)+" x "+H.f(a.height)},
p:function(a,b){var u
if(b==null)return!1
if(!H.dr(b,"$icS",[P.a4],"$acS"))return!1
u=J.fZ(b)
return a.left===u.gdd(b)&&a.top===u.gdz(b)&&a.width===u.gbW(b)&&a.height===u.gbK(b)},
gE:function(a){return W.ij(C.i.gE(a.left),C.i.gE(a.top),C.i.gE(a.width),C.i.gE(a.height))},
gbK:function(a){return a.height},
gbW:function(a){return a.width}}
W.fu.prototype={}
W.hr.prototype={}
W.fv.prototype={}
W.fw.prototype={
$1:function(a){return this.a.$1(H.l(a,"$ie"))},
$S:28}
W.ag.prototype={
gL:function(a){return new W.cs(a,this.gl(a),-1,[H.h0(this,a,"ag",0)])}}
W.cs.prototype={
v:function(){var u,t
u=this.c+1
t=this.b
if(u<t){this.scn(J.iY(this.a,u))
this.c=u
return!0}this.scn(null)
this.c=t
return!1},
gG:function(){return this.d},
scn:function(a){this.d=H.w(a,H.r(this,0))},
$iao:1}
W.dd.prototype={}
W.dg.prototype={}
W.dh.prototype={}
W.dj.prototype={}
W.dk.prototype={}
W.dn.prototype={}
W.dp.prototype={}
P.dq.prototype={$iaS:1,
gcL:function(a){return this.a}}
P.fX.prototype={
$2:function(a,b){this.a[a]=b},
$S:13}
P.dN.prototype={
gbg:function(){var u,t,s
u=this.b
t=H.al(u,"J",0)
s=W.Q
return new H.e7(new H.fm(u,H.j(new P.dO(),{func:1,ret:P.X,args:[t]}),[t]),H.j(new P.dP(),{func:1,ret:s,args:[t]}),[t,s])},
h:function(a,b){J.hH(this.b.a,b)},
gl:function(a){return J.ce(this.gbg().a)},
j:function(a,b){var u=this.gbg()
return u.b.$1(J.hI(u.a,b))},
gL:function(a){var u=P.hR(this.gbg(),!1,W.Q)
return new J.ab(u,u.length,0,[H.r(u,0)])},
$aJ:function(){return[W.Q]},
$ap:function(){return[W.Q]},
$aa:function(){return[W.Q]}}
P.dO.prototype={
$1:function(a){return!!J.K(H.l(a,"$iD")).$iQ},
$S:21}
P.dP.prototype={
$1:function(a){return H.c(H.l(a,"$iD"),"$iQ")},
$S:20}
P.k.prototype={
gcJ:function(a){return new P.dN(a,new W.fs(a))}}
P.ch.prototype={$ich:1}
P.ct.prototype={$ict:1}
P.cQ.prototype={$icQ:1}
P.be.prototype={
cE:function(a,b){return a.activeTexture(b)},
cG:function(a,b,c){return a.attachShader(b,c)},
a9:function(a,b,c){return a.bindBuffer(b,c)},
hz:function(a,b,c){return a.bindFramebuffer(b,c)},
ap:function(a,b,c){return a.bindTexture(b,c)},
hA:function(a,b,c){return a.blendFunc(b,c)},
cI:function(a,b,c,d){return a.bufferData(b,c,d)},
hD:function(a,b){return a.clear(b)},
hE:function(a,b,c,d,e){return a.clearColor(b,c,d,e)},
hF:function(a,b){return a.clearDepth(b)},
hH:function(a,b){return a.compileShader(b)},
hL:function(a,b){return a.createShader(b)},
hN:function(a,b){return a.deleteProgram(b)},
hO:function(a,b){return a.deleteShader(b)},
hR:function(a,b){return a.depthFunc(b)},
hS:function(a,b){return a.disable(b)},
cM:function(a,b){return a.disableVertexAttribArray(b)},
hU:function(a,b,c,d,e){return a.drawElements(b,c,d,e)},
bC:function(a,b){return a.enable(b)},
cO:function(a,b){return a.enableVertexAttribArray(b)},
dF:function(a,b){return a.generateMipmap(b)},
dG:function(a,b,c){return a.getActiveAttrib(b,c)},
dH:function(a,b,c){return a.getActiveUniform(b,c)},
dI:function(a,b,c){return a.getAttribLocation(b,c)},
bX:function(a,b){return a.getParameter(b)},
dL:function(a,b){return a.getProgramInfoLog(b)},
b9:function(a,b,c){return a.getProgramParameter(b,c)},
dM:function(a,b){return a.getShaderInfoLog(b)},
dN:function(a,b,c){return a.getShaderParameter(b,c)},
dO:function(a,b,c){return a.getUniformLocation(b,c)},
i4:function(a,b){return a.linkProgram(b)},
ir:function(a,b,c){return a.pixelStorei(b,c)},
dS:function(a,b,c){return a.shaderSource(b,c)},
iE:function(a,b,c,d,e,f,g,h,i,j){var u,t
u=J.K(g)
if(!!u.$iaS)t=!0
else t=!1
if(t){this.h0(a,b,c,d,e,f,P.jV(g))
return}if(!!u.$iby)u=!0
else u=!1
if(u){this.h1(a,b,c,d,e,f,g)
return}throw H.i(P.j_("Incorrect number or type of arguments"))},
iD:function(a,b,c,d,e,f,g){return this.iE(a,b,c,d,e,f,g,null,null,null)},
h0:function(a,b,c,d,e,f,g){return a.texImage2D(b,c,d,e,f,g)},
h1:function(a,b,c,d,e,f,g){return a.texImage2D(b,c,d,e,f,g)},
b6:function(a,b,c,d){return a.texParameteri(b,c,d)},
B:function(a,b,c){return a.uniform1f(b,c)},
F:function(a,b,c){return a.uniform1i(b,c)},
m:function(a,b,c,d,e){return a.uniform3f(b,c,d,e)},
dA:function(a,b,c,d){return a.uniformMatrix3fv(b,!1,d)},
dB:function(a,b,c,d){return a.uniformMatrix4fv(b,!1,d)},
dC:function(a,b){return a.useProgram(b)},
iM:function(a,b,c,d,e,f,g){return a.vertexAttribPointer(b,c,d,!1,f,g)},
iN:function(a,b,c,d,e){return a.viewport(b,c,d,e)},
$ibe:1}
P.cV.prototype={$icV:1}
P.d_.prototype={$id_:1}
P.d6.prototype={$id6:1}
O.N.prototype={
c5:function(a){this.seL(H.b([],[a]))
this.sct(null)
this.scq(null)
this.scu(null)},
bY:function(a,b,c){var u=H.al(this,"N",0)
H.j(b,{func:1,ret:P.X,args:[[P.p,u]]})
u={func:1,ret:-1,args:[P.u,[P.p,u]]}
H.j(a,u)
H.j(c,u)
this.sct(b)
this.scq(a)
this.scu(c)},
ba:function(a,b){return this.bY(a,null,b)},
fm:function(a){var u
H.h(a,"$ip",[H.al(this,"N",0)],"$ap")
u=this.b
if(u!=null)return u.$1(a)
return!0},
eM:function(a,b){var u
H.h(b,"$ip",[H.al(this,"N",0)],"$ap")
u=this.c
if(u!=null)u.$2(a,b)},
gl:function(a){return this.a.length},
gL:function(a){var u=this.a
return new J.ab(u,u.length,0,[H.r(u,0)])},
X:function(a,b){var u=this.a
if(b<0||b>=u.length)return H.d(u,b)
return u[b]},
h:function(a,b){var u,t,s
u=H.al(this,"N",0)
H.w(b,u)
u=[u]
if(this.fm(H.b([b],u))){t=this.a
s=t.length
C.a.h(t,b)
this.eM(s,H.b([b],u))}},
seL:function(a){this.a=H.h(a,"$ia",[H.al(this,"N",0)],"$aa")},
sct:function(a){this.b=H.j(a,{func:1,ret:P.X,args:[[P.p,H.al(this,"N",0)]]})},
scq:function(a){this.c=H.j(a,{func:1,ret:-1,args:[P.u,[P.p,H.al(this,"N",0)]]})},
scu:function(a){this.d=H.j(a,{func:1,ret:-1,args:[P.u,[P.p,H.al(this,"N",0)]]})},
$ip:1}
O.bE.prototype={
gl:function(a){return this.a.length},
gu:function(){var u=this.b
if(u==null){u=D.af()
this.b=u}return u},
e2:function(a){var u=this.b
if(u!=null)u.K(a)},
ak:function(){return this.e2(null)},
gM:function(){var u=this.a
if(u.length>0)return C.a.gbM(u)
else return V.hl()},
dm:function(a){var u=this.a
if(a==null)C.a.h(u,V.hl())
else C.a.h(u,a)
this.ak()},
bR:function(){var u=this.a
if(u.length>0){u.pop()
this.ak()}},
sbh:function(a){this.a=H.h(a,"$ia",[V.a_],"$aa")}}
E.dx.prototype={}
E.a2.prototype={
sbZ:function(a,b){var u,t,s
u=this.c
if(u!=b){this.c=b
this.d=b
this.e=null
if(u!=null)u.gu().w(0,this.gdi())
t=this.c
if(t!=null)t.gu().h(0,this.gdi())
s=new D.G("shape",u,this.c,this,[F.cW])
s.b=!0
this.a3(s)}},
saD:function(a){var u,t
if(!J.L(this.r,a)){u=this.r
if(u!=null)u.gu().w(0,this.gdg())
if(a!=null)a.gu().h(0,this.gdg())
this.r=a
t=new D.G("mover",u,a,this,[U.ba])
t.b=!0
this.a3(t)}},
b7:function(a){var u,t,s,r,q,p,o,n
u=this.r
if(u!=null){t=u.r
s=a.e
if(t<s){u.r=s
t=u.y
if(t!=null)++t.d
u.sdD(u.a+u.d*a.y)
u.sdk(u.b+u.e*a.y)
u.sdr(u.c+u.f*a.y)
t=u.c
r=Math.cos(t)
q=Math.sin(t)
t=V.aC(r,-q,0,0,q,r,0,0,0,0,1,0,0,0,0,1)
s=u.b
r=Math.cos(s)
q=Math.sin(s)
t=t.O(0,V.aC(r,0,-q,0,0,1,0,0,q,0,r,0,0,0,0,1))
s=u.a
r=Math.cos(s)
q=Math.sin(s)
u.x=t.O(0,V.aC(1,0,0,0,0,r,-q,0,0,q,r,0,0,0,0,1))
t=u.y
if(t!=null)t.ab()}p=u.x}else p=null
if(!J.L(p,this.x)){o=this.x
this.x=p
n=new D.G("matrix",o,p,this,[V.a_])
n.b=!0
this.a3(n)}for(u=this.y.a,u=new J.ab(u,u.length,0,[H.r(u,0)]);u.v();)u.d.b7(a)},
av:function(a){var u,t,s
u=a.dx
t=this.x
u.toString
if(t==null)C.a.h(u.a,u.gM())
else C.a.h(u.a,t.O(0,u.gM()))
u.ak()
a.dn(this.f)
u=a.dy
s=(u&&C.a).gbM(u)
if(s!=null&&this.d!=null)s.iw(a,this)
for(u=this.y.a,u=new J.ab(u,u.length,0,[H.r(u,0)]);u.v();)u.d.av(a)
a.dl()
a.dx.bR()},
a3:function(a){var u=this.z
if(u!=null)u.K(a)},
R:function(){return this.a3(null)},
dj:function(a){H.l(a,"$iy")
this.e=null
this.a3(a)},
ih:function(){return this.dj(null)},
dh:function(a){this.a3(H.l(a,"$iy"))},
ig:function(){return this.dh(null)},
df:function(a){this.a3(H.l(a,"$iy"))},
ib:function(){return this.df(null)},
ia:function(a,b){var u,t,s,r,q,p,o
H.h(b,"$ip",[E.a2],"$ap")
for(u=b.length,t=this.gde(),s={func:1,ret:-1,args:[D.y]},r=[s],q=0;q<b.length;b.length===u||(0,H.v)(b),++q){p=b[q]
if(p!=null){o=p.z
if(o==null){o=new D.b6()
o.sa7(null)
o.saO(null)
o.c=null
o.d=0
p.z=o}H.j(t,s)
if(o.a==null)o.sa7(H.b([],r))
o=o.a;(o&&C.a).h(o,t)}}this.R()},
ie:function(a,b){var u,t
H.h(b,"$ip",[E.a2],"$ap")
for(u=b.gL(b),t=this.gde();u.v();)u.gG().gu().w(0,t)
this.R()},
i:function(a){var u,t
u=this.a
t=u.length
if(t<=0)return"Unnamed entity"
return u},
seo:function(a,b){this.y=H.h(b,"$iN",[E.a2],"$aN")},
$iaE:1}
E.ep.prototype={
dZ:function(a,b){var u,t
this.c=512
this.d=512
this.e=0
u=new P.aO(Date.now(),!1)
this.f=u
this.r=u
this.x=u
this.y=0
this.z=null
this.Q=null
this.ch=null
this.cx=null
u=new O.bE()
t=[V.a_]
u.sbh(H.b([],t))
u.b=null
u.gu().h(0,new E.eq(this))
this.cy=u
u=new O.bE()
u.sbh(H.b([],t))
u.b=null
u.gu().h(0,new E.er(this))
this.db=u
u=new O.bE()
u.sbh(H.b([],t))
u.b=null
u.gu().h(0,new E.es(this))
this.dx=u
this.sh_(H.b([],[O.bf]))
u=this.dy;(u&&C.a).h(u,null)
this.sfW(new H.az([P.t,A.bJ]))},
gis:function(){var u=this.z
if(u==null){u=this.cy.gM().O(0,this.db.gM())
this.z=u}return u},
dn:function(a){var u,t
u=this.dy
t=a==null?(u&&C.a).gbM(u):a;(u&&C.a).h(u,t)},
dl:function(){var u=this.dy
if(u.length>1)u.pop()},
sh_:function(a){this.dy=H.h(a,"$ia",[O.bf],"$aa")},
sfW:function(a){this.fr=H.h(a,"$iar",[P.t,A.bJ],"$aar")}}
E.eq.prototype={
$1:function(a){var u
H.l(a,"$iy")
u=this.a
u.z=null
u.ch=null},
$S:8}
E.er.prototype={
$1:function(a){var u
H.l(a,"$iy")
u=this.a
u.z=null
u.Q=null
u.ch=null
u.cx=null},
$S:8}
E.es.prototype={
$1:function(a){var u
H.l(a,"$iy")
u=this.a
u.ch=null
u.cx=null},
$S:8}
E.d3.prototype={
c8:function(a){H.l(a,"$iy")
this.dq()},
c7:function(){return this.c8(null)},
gi_:function(){var u,t,s
u=Date.now()
t=C.h.S(P.hf(0,0,0,u-this.cx.a,0,0).a,1000)/1000
if(t<=0)return 0
s=this.cy
this.cy=0
this.cx=new P.aO(u,!1)
return s/t},
cz:function(){var u,t,s,r
u=window.devicePixelRatio
t=this.b.clientWidth
if(typeof t!=="number")return t.O()
if(typeof u!=="number")return H.b0(u)
s=C.i.bJ(t*u)
t=this.b.clientHeight
if(typeof t!=="number")return t.O()
r=C.i.bJ(t*u)
t=this.b
if(t.width!==s||t.height!==r){t.width=s
t.height=r
P.i7(C.n,this.gix())}},
dq:function(){var u,t
if(!this.ch){this.ch=!0
u=window
t=H.j(new E.eO(this),{func:1,ret:-1,args:[P.a4]})
C.y.ew(u)
C.y.fG(u,W.is(t,P.a4))}},
iv:function(){var u,t,s,r,q
try{++this.cy
this.ch=!1
this.cz()
if(this.d!=null){s=this.e;++s.e
s.r=s.x
r=Date.now()
s.x=new P.aO(r,!1)
s.y=P.hf(0,0,0,r-s.r.a,0,0).a*0.000001
r=s.cy
C.a.sl(r.a,0)
r.ak()
r=s.db
C.a.sl(r.a,0)
r.ak()
r=s.dx
C.a.sl(r.a,0)
r.ak()
r=s.dy;(r&&C.a).sl(r,0)
s=s.dy;(s&&C.a).h(s,null)
this.d.av(this.e)}}catch(q){u=H.b1(q)
t=H.bl(q)
P.hD("Error: "+H.f(u))
P.hD("Stack: "+H.f(t))
throw H.i(u)}}}
E.eO.prototype={
$1:function(a){var u
H.k9(a)
u=this.a
if(u.ch){u.ch=!1
u.iv()}},
$S:19}
Z.db.prototype={$ikh:1}
Z.ci.prototype={
ai:function(a){var u,t,s
try{t=a.a
C.b.cO(t,this.e)
C.b.iM(t,this.e,this.b,5126,!1,this.d,this.c)}catch(s){u=H.b1(s)
t=P.o('Failed to bind buffer attribute "'+this.a.i(0)+'": '+H.f(u))
throw H.i(t)}},
i:function(a){return"["+this.a.i(0)+", Size: "+this.b+", Offset: "+this.c+", Stride: "+this.d+", Attr: "+H.f(this.e)+"]"}}
Z.fl.prototype={$iki:1}
Z.cj.prototype={
as:function(a){var u,t,s,r
for(u=this.c,t=u.length,s=0;s<t;++s){r=u[s]
if((r.a.a&a.a)!==0)return r}return},
ai:function(a){var u,t
u=this.a
C.b.a9(a.a,u.a,u.b)
for(u=this.c,t=u.length-1;t>=0;--t)u[t].ai(a)},
aK:function(a){var u,t,s
for(u=this.c,t=u.length-1,s=a.a;t>=0;--t)C.b.cM(s,u[t].e)
C.b.a9(s,this.a.a,null)},
av:function(a){var u,t,s,r,q,p
u=this.b.length
for(t=a.a,s=0;s<u;++s){r=this.b
if(s>=r.length)return H.d(r,s)
q=r[s]
r=q.c
p=r.a
C.b.a9(t,p,r.b)
C.b.hU(t,q.a,q.b,5123,0)
C.b.a9(t,p,null)}},
i:function(a){var u,t,s,r,q,p
u=[P.t]
t=H.b([],u)
for(s=this.b,r=s.length,q=0;q<s.length;s.length===r||(0,H.v)(s),++q)C.a.h(t,s[q].i(0))
p=H.b([],u)
for(u=this.c,s=u.length,q=0;q<s;++q)C.a.h(p,J.aa(u[q]))
return"Buffer:  ["+this.a.i(0)+"]\nIndices: "+C.a.t(t,", ")+"\nAttrs:   "+C.a.t(p,", ")},
seH:function(a){this.b=H.h(a,"$ia",[Z.aT],"$aa")},
$ikp:1}
Z.aT.prototype={
i:function(a){return"Type: "+this.a+", Count: "+this.b+", ["+("Instance of '"+H.bc(this.c)+"'")+"]"}}
Z.av.prototype={
gc_:function(a){var u,t
u=this.a
t=(u&$.aK().a)!==0?3:0
if((u&$.aJ().a)!==0)t+=3
if((u&$.aI().a)!==0)t+=3
if((u&$.aL().a)!==0)t+=2
if((u&$.aM().a)!==0)t+=3
if((u&$.c9().a)!==0)t+=3
if((u&$.ca().a)!==0)t+=4
if((u&$.bo().a)!==0)++t
return(u&$.aH().a)!==0?t+4:t},
hx:function(a){var u,t,s
u=$.aK()
t=this.a
if((t&u.a)!==0){if(0===a)return u
s=1}else s=0
u=$.aJ()
if((t&u.a)!==0){if(s===a)return u;++s}u=$.aI()
if((t&u.a)!==0){if(s===a)return u;++s}u=$.aL()
if((t&u.a)!==0){if(s===a)return u;++s}u=$.aM()
if((t&u.a)!==0){if(s===a)return u;++s}u=$.c9()
if((t&u.a)!==0){if(s===a)return u;++s}u=$.ca()
if((t&u.a)!==0){if(s===a)return u;++s}u=$.bo()
if((t&u.a)!==0){if(s===a)return u;++s}u=$.aH()
if((t&u.a)!==0)if(s===a)return u
return $.iW()},
p:function(a,b){if(b==null)return!1
if(!(b instanceof Z.av))return!1
return this.a===b.a},
i:function(a){var u,t
u=H.b([],[P.t])
t=this.a
if((t&$.aK().a)!==0)C.a.h(u,"Pos")
if((t&$.aJ().a)!==0)C.a.h(u,"Norm")
if((t&$.aI().a)!==0)C.a.h(u,"Binm")
if((t&$.aL().a)!==0)C.a.h(u,"Txt2D")
if((t&$.aM().a)!==0)C.a.h(u,"TxtCube")
if((t&$.c9().a)!==0)C.a.h(u,"Clr3")
if((t&$.ca().a)!==0)C.a.h(u,"Clr4")
if((t&$.bo().a)!==0)C.a.h(u,"Weight")
if((t&$.aH().a)!==0)C.a.h(u,"Bending")
if(u.length<=0)return"None"
return C.a.t(u,"|")}}
D.dA.prototype={}
D.b6.prototype={
h:function(a,b){var u={func:1,ret:-1,args:[D.y]}
H.j(b,u)
if(this.a==null)this.sa7(H.b([],[u]))
u=this.a;(u&&C.a).h(u,b)},
w:function(a,b){var u,t
H.j(b,{func:1,ret:-1,args:[D.y]})
u=this.a
u=u==null?null:C.a.ar(u,b)
if(u===!0){u=this.a
t=(u&&C.a).w(u,b)||!1}else t=!1
return t},
K:function(a){var u,t,s,r
u={}
u.a=a
t=this.a
s=t==null
r=s?null:t.length===0
if(r!==!1)r=!0
else r=!1
if(r)return!1
if(a==null){a=new D.y(null)
a.b=!0
u.a=a
r=a}else r=a
if(this.d>0){if(this.c==null)this.c=r
return!0}if(!s)C.a.Y(t,new D.dL(u))
return!0},
cN:function(){return this.K(null)},
iy:function(a,b){var u,t
u=this.d
if(u>0){--u
this.d=u
if(u<=0)u=this.c!=null
else u=!1
if(u){t=this.c
this.c=null
this.K(t)}}},
ab:function(){return this.iy(!0,!1)},
sa7:function(a){this.a=H.h(a,"$ia",[{func:1,ret:-1,args:[D.y]}],"$aa")},
saO:function(a){this.b=H.h(a,"$ia",[{func:1,ret:-1,args:[D.y]}],"$aa")}}
D.dL.prototype={
$1:function(a){var u
H.j(a,{func:1,ret:-1,args:[D.y]})
u=this.a.a
u.b
a.$1(u)},
$S:33}
D.y.prototype={}
D.bA.prototype={}
D.bB.prototype={}
D.G.prototype={
i:function(a){return"ValueChanged: "+this.c+", "+H.f(this.d)+" => "+H.f(this.e)}}
X.ck.prototype={
p:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.ck))return!1
if(this.a!=b.a)return!1
if(!this.b.p(0,b.b))return!1
return!0},
i:function(a){return this.b.i(0)+H.f(this.a)}}
X.cA.prototype={
p:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.cA))return!1
if(this.a!=b.a)return!1
if(!this.b.p(0,b.b))return!1
return!0},
i:function(a){return this.b.i(0)+H.f(this.a)}}
X.dY.prototype={
io:function(a){this.c=a.b
this.d.h(0,a.a)
return!1},
ij:function(a){this.c=a.b
this.d.w(0,a.a)
return!1},
sfB:function(a){this.d=H.h(a,"$ii3",[P.u],"$ai3")}}
X.e3.prototype={
bQ:function(a,b){this.r=a.a
return!1},
aF:function(a,b){var u,t
u=this.r
t=a.a
if(typeof t!=="number")return t.dQ()
if(typeof u!=="number")return u.dE()
this.r=(u&~t)>>>0
return!1},
aE:function(a,b){return!1},
ip:function(a){return!1},
fb:function(a,b,c){return}}
X.aD.prototype={
p:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.aD))return!1
if(this.a!==b.a)return!1
if(this.b!=b.b)return!1
if(this.c!=b.c)return!1
return!0},
i:function(a){var u=this.a?"Ctrl+":""
u+=this.b?"Alt+":""
return u+(this.c?"Shift+":"")}}
X.ef.prototype={
bQ:function(a,b){this.f=a.a
return!1},
aF:function(a,b){var u,t
u=this.f
t=a.a
if(typeof t!=="number")return t.dQ()
if(typeof u!=="number")return u.dE()
this.f=(u&~t)>>>0
return!1},
aE:function(a,b){return!1},
iq:function(a,b){return!1}}
X.eQ.prototype={
im:function(a){H.h(a,"$ia",[V.a5],"$aa")
return!1},
ik:function(a){H.h(a,"$ia",[V.a5],"$aa")
return!1},
il:function(a){H.h(a,"$ia",[V.a5],"$aa")
return!1}}
X.da.prototype={
cl:function(a){var u,t
u=a.keyCode
t=a.ctrlKey||a.metaKey
return new X.cA(u,new X.aD(t,a.altKey,a.shiftKey))},
ao:function(a){var u,t
u=this.b
t=a.ctrlKey||a.metaKey
u.c=new X.aD(t,a.altKey,a.shiftKey)},
br:function(a){var u,t
u=this.b
t=a.ctrlKey||a.metaKey
u.c=new X.aD(t,a.altKey,a.shiftKey)},
ah:function(a){var u,t,s,r,q
u=this.a.getBoundingClientRect()
t=a.pageX
s=a.pageY
r=u.left
if(typeof t!=="number")return t.U()
q=u.top
if(typeof s!=="number")return s.U()
return new V.a5(t-r,s-q)},
ay:function(a){return new V.aG(a.movementX,a.movementY)},
bm:function(a){var u,t,s,r,q,p,o,n
u=this.a.getBoundingClientRect()
t=H.b([],[V.a5])
for(s=a.touches,r=s.length,q=0;q<s.length;s.length===r||(0,H.v)(s),++q){p=s[q]
o=C.i.a4(p.pageX)
C.i.a4(p.pageY)
n=u.left
C.i.a4(p.pageX)
C.a.h(t,new V.a5(o-n,C.i.a4(p.pageY)-u.top))}return t},
ae:function(a){var u,t
u=a.buttons
t=a.ctrlKey||a.metaKey
return new X.ck(u,new X.aD(t,a.altKey,a.shiftKey))},
bi:function(a){var u,t,s,r,q,p
u=this.a.getBoundingClientRect()
t=a.pageX
s=a.pageY
r=u.left
if(typeof t!=="number")return t.U()
q=t-r
if(q<0)return!1
t=u.top
if(typeof s!=="number")return s.U()
p=s-t
if(p<0)return!1
return q<u.width&&p<u.height},
f5:function(a){this.f=!0},
eU:function(a){this.f=!1},
f_:function(a){H.l(a,"$iV")
if(this.f&&this.bi(a))a.preventDefault()},
f9:function(a){var u
H.l(a,"$iaq")
if(!this.f)return
u=this.cl(a)
this.b.io(u)},
f7:function(a){var u
H.l(a,"$iaq")
if(!this.f)return
u=this.cl(a)
this.b.ij(u)},
fd:function(a){var u,t,s,r
H.l(a,"$iV")
u=this.a
u.focus()
this.f=!0
this.ao(a)
if(this.x){t=this.ae(a)
s=this.ay(a)
if(this.d.bQ(t,s))a.preventDefault()
return}if(this.r){this.y=a
u.requestPointerLock()
return}t=this.ae(a)
r=this.ah(a)
if(this.c.bQ(t,r))a.preventDefault()},
fh:function(a){var u,t,s
H.l(a,"$iV")
this.ao(a)
u=this.ae(a)
if(this.x){t=this.ay(a)
if(this.d.aF(u,t))a.preventDefault()
return}if(this.r)return
s=this.ah(a)
if(this.c.aF(u,s))a.preventDefault()},
f3:function(a){var u,t,s
H.l(a,"$iV")
if(!this.bi(a)){this.ao(a)
u=this.ae(a)
if(this.x){t=this.ay(a)
if(this.d.aF(u,t))a.preventDefault()
return}if(this.r)return
s=this.ah(a)
if(this.c.aF(u,s))a.preventDefault()}},
ff:function(a){var u,t,s
H.l(a,"$iV")
this.ao(a)
u=this.ae(a)
if(this.x){t=this.ay(a)
if(this.d.aE(u,t))a.preventDefault()
return}if(this.r)return
s=this.ah(a)
if(this.c.aE(u,s))a.preventDefault()},
f1:function(a){var u,t,s
H.l(a,"$iV")
if(!this.bi(a)){this.ao(a)
u=this.ae(a)
if(this.x){t=this.ay(a)
if(this.d.aE(u,t))a.preventDefault()
return}if(this.r)return
s=this.ah(a)
if(this.c.aE(u,s))a.preventDefault()}},
fj:function(a){var u,t
H.l(a,"$iaw")
this.ao(a)
u=new V.aG((a&&C.x).ghP(a),C.x.ghQ(a)).C(0,180)
if(this.x){if(this.d.ip(u))a.preventDefault()
return}if(this.r)return
t=this.ah(a)
if(this.c.iq(u,t))a.preventDefault()},
fl:function(a){var u,t,s
u=document.pointerLockElement===this.a
if(u!==this.x){this.x=u
t=this.ae(this.y)
s=this.ah(this.y)
this.d.fb(t,s,u)}},
fz:function(a){var u
H.l(a,"$iaj")
this.a.focus()
this.f=!0
this.br(a)
u=this.bm(a)
if(this.e.im(u))a.preventDefault()},
ft:function(a){var u
H.l(a,"$iaj")
this.br(a)
u=this.bm(a)
if(this.e.ik(u))a.preventDefault()},
fv:function(a){var u
H.l(a,"$iaj")
this.br(a)
u=this.bm(a)
if(this.e.il(u))a.preventDefault()},
sex:function(a){this.z=H.h(a,"$ia",[[P.bL,P.E]],"$aa")}}
D.aP.prototype={
ac:function(a){var u
H.l(a,"$iy")
u=this.d
if(u!=null)u.K(a)},
e4:function(){return this.ac(null)},
$iO:1,
$iaE:1}
D.O.prototype={$iaE:1}
D.cB.prototype={
ac:function(a){var u=this.Q
if(u!=null)u.K(a)},
cs:function(a){var u
H.l(a,"$iy")
u=this.ch
if(u!=null)u.K(a)},
fa:function(){return this.cs(null)},
fo:function(a){var u,t,s
H.h(a,"$ip",[D.O],"$ap")
for(u=a.length,t=0;t<a.length;a.length===u||(0,H.v)(a),++t){s=a[t]
if(s==null||this.eq(s))return!1}return!0},
eO:function(a,b){var u,t,s,r,q,p,o,n
u=D.O
H.h(b,"$ip",[u],"$ap")
for(t=b.length,s=this.gcr(),r={func:1,ret:-1,args:[D.y]},q=[r],p=0;p<b.length;b.length===t||(0,H.v)(b),++p){o=H.l(b[p],"$iO")
if(o instanceof D.aP)C.a.h(this.e,o)
n=o.d
if(n==null){n=new D.b6()
n.sa7(null)
n.saO(null)
n.c=null
n.d=0
o.d=n}H.j(s,r)
if(n.a==null)n.sa7(H.b([],q))
n=n.a;(n&&C.a).h(n,s)}u=new D.bA(a,b,this,[u])
u.b=!0
this.ac(u)},
fq:function(a,b){var u,t,s,r
u=D.O
H.h(b,"$ip",[u],"$ap")
for(t=b.gL(b),s=this.gcr();t.v();){r=t.gG()
C.a.w(this.e,r)
r.gu().w(0,s)}u=new D.bB(a,b,this,[u])
u.b=!0
this.ac(u)},
eq:function(a){var u=C.a.ar(this.e,a)
return u},
sev:function(a){this.e=H.h(a,"$ia",[D.aP],"$aa")},
sfA:function(a){this.f=H.h(a,"$ia",[D.cN],"$aa")},
sfY:function(a){this.r=H.h(a,"$ia",[D.cX],"$aa")},
sh5:function(a){this.x=H.h(a,"$ia",[D.d0],"$aa")},
sh6:function(a){this.y=H.h(a,"$ia",[D.d1],"$aa")},
sh7:function(a){this.z=H.h(a,"$ia",[D.d2],"$aa")},
$ap:function(){return[D.O]},
$aN:function(){return[D.O]}}
D.cN.prototype={$iO:1,$iaE:1}
D.cX.prototype={$iO:1,$iaE:1}
D.d0.prototype={$iO:1,$iaE:1}
D.d1.prototype={$iO:1,$iaE:1}
D.d2.prototype={$iO:1,$iaE:1}
V.R.prototype={
p:function(a,b){var u,t
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.R))return!1
u=b.a
t=$.C().a
if(!(Math.abs(u-this.a)<t))return!1
if(!(Math.abs(b.b-this.b)<t))return!1
if(!(Math.abs(b.c-this.c)<t))return!1
return!0},
i:function(a){return"["+V.B(this.a,3,0)+", "+V.B(this.b,3,0)+", "+V.B(this.c,3,0)+"]"}}
V.b4.prototype={
p:function(a,b){var u,t
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.b4))return!1
u=b.a
t=$.C().a
if(!(Math.abs(u-this.a)<t))return!1
if(!(Math.abs(b.b-this.b)<t))return!1
if(!(Math.abs(b.c-this.c)<t))return!1
if(!(Math.abs(b.d-this.d)<t))return!1
return!0},
i:function(a){return"["+V.B(this.a,3,0)+", "+V.B(this.b,3,0)+", "+V.B(this.c,3,0)+", "+V.B(this.d,3,0)+"]"}}
V.dJ.prototype={}
V.cF.prototype={
a0:function(a,b){var u=H.b([this.a,this.d,this.r,this.b,this.e,this.x,this.c,this.f,this.y],[P.q])
return u},
p:function(a,b){var u,t
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.cF))return!1
u=b.a
t=$.C().a
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
u=[P.q]
t=V.bk(H.b([this.a,this.d,this.r],u),3,0)
s=V.bk(H.b([this.b,this.e,this.x],u),3,0)
r=V.bk(H.b([this.c,this.f,this.y],u),3,0)
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
V.a_.prototype={
a0:function(a,b){var u=H.b([this.a,this.e,this.y,this.cx,this.b,this.f,this.z,this.cy,this.c,this.r,this.Q,this.db,this.d,this.x,this.ch,this.dx],[P.q])
return u},
da:function(){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0
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
if(Math.abs(a7-0)<$.C().a)return V.hl()
a8=1/a7
a9=-r
b0=-d
return V.aC((t*a6-p*a5+m*a4)*a8,(-s*a6+o*a5-l*a4)*a8,(f*h-b*i+a1*j)*a8,(-e*h+a*i-a2*j)*a8,(a9*a6+p*a3-m*a0)*a8,(u*a6-o*a3+l*a0)*a8,(b0*h+b*k-a1*n)*a8,(g*h-a*k+a2*n)*a8,(r*a5-t*a3+m*c)*a8,(-u*a5+s*a3-l*c)*a8,(d*i-f*k+a1*q)*a8,(-g*i+e*k-a2*q)*a8,(a9*a4+t*a0-p*c)*a8,(u*a4-s*a0+o*c)*a8,(b0*j+f*n-b*q)*a8,(g*j-e*n+a*q)*a8)},
O:function(b1,b2){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0
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
return V.aC(u*t+s*r+q*p+o*n,u*m+s*l+q*k+o*j,u*i+s*h+q*g+o*f,u*e+s*d+q*c+o*b,a*t+a0*r+a1*p+a2*n,a*m+a0*l+a1*k+a2*j,a*i+a0*h+a1*g+a2*f,a*e+a0*d+a1*c+a2*b,a3*t+a4*r+a5*p+a6*n,a3*m+a4*l+a5*k+a6*j,a3*i+a4*h+a5*g+a6*f,a3*e+a4*d+a5*c+a6*b,a7*t+a8*r+a9*p+b0*n,a7*m+a8*l+a9*k+b0*j,a7*i+a8*h+a9*g+b0*f,a7*e+a8*d+a9*c+b0*b)},
bV:function(a){var u,t,s
u=a.a
t=a.b
s=a.c
return new V.F(this.a*u+this.b*t+this.c*s,this.e*u+this.f*t+this.r*s,this.y*u+this.z*t+this.Q*s)},
aJ:function(a){var u,t,s
u=a.a
t=a.b
s=a.c
return new V.ah(this.a*u+this.b*t+this.c*s+this.d,this.e*u+this.f*t+this.r*s+this.x,this.y*u+this.z*t+this.Q*s+this.ch)},
p:function(a,b){var u,t
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.a_))return!1
u=b.a
t=$.C().a
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
i:function(a){return this.A()},
d9:function(a,b,c){var u,t,s,r,q,p,o,n,m,l
u=[P.q]
t=V.bk(H.b([this.a,this.e,this.y,this.cx],u),b,c)
s=V.bk(H.b([this.b,this.f,this.z,this.cy],u),b,c)
r=V.bk(H.b([this.c,this.r,this.Q,this.db],u),b,c)
q=V.bk(H.b([this.d,this.x,this.ch,this.dx],u),b,c)
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
A:function(){return this.d9("",3,0)},
q:function(a){return this.d9(a,3,0)}}
V.a5.prototype={
p:function(a,b){var u,t
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.a5))return!1
u=b.a
t=$.C().a
if(!(Math.abs(u-this.a)<t))return!1
if(!(Math.abs(b.b-this.b)<t))return!1
return!0},
i:function(a){return"["+V.B(this.a,3,0)+", "+V.B(this.b,3,0)+"]"}}
V.ah.prototype={
U:function(a,b){return new V.ah(this.a-b.a,this.b-b.b,this.c-b.c)},
p:function(a,b){var u,t
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.ah))return!1
u=b.a
t=$.C().a
if(!(Math.abs(u-this.a)<t))return!1
if(!(Math.abs(b.b-this.b)<t))return!1
if(!(Math.abs(b.c-this.c)<t))return!1
return!0},
i:function(a){return"["+V.B(this.a,3,0)+", "+V.B(this.b,3,0)+", "+V.B(this.c,3,0)+"]"}}
V.cP.prototype={
p:function(a,b){var u,t
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.cP))return!1
u=b.a
t=$.C().a
if(!(Math.abs(u-this.a)<t))return!1
if(!(Math.abs(b.b-this.b)<t))return!1
if(!(Math.abs(b.c-this.c)<t))return!1
if(!(Math.abs(b.d-this.d)<t))return!1
return!0},
i:function(a){return"["+V.B(this.a,3,0)+", "+V.B(this.b,3,0)+", "+V.B(this.c,3,0)+", "+V.B(this.d,3,0)+"]"}}
V.cT.prototype={
p:function(a,b){var u,t
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.cT))return!1
u=b.a
t=$.C().a
if(!(Math.abs(u-this.a)<t))return!1
if(!(Math.abs(b.b-this.b)<t))return!1
if(!(Math.abs(b.c-this.c)<t))return!1
if(!(Math.abs(b.d-this.d)<t))return!1
return!0},
i:function(a){return"["+V.B(this.a,3,0)+", "+V.B(this.b,3,0)+", "+V.B(this.c,3,0)+", "+V.B(this.d,3,0)+"]"}}
V.aG.prototype={
bN:function(a){var u,t
u=this.a
if(typeof u!=="number")return u.O()
t=this.b
if(typeof t!=="number")return t.O()
return Math.sqrt(u*u+t*t)},
C:function(a,b){var u,t
if(Math.abs(b-0)<$.C().a){u=$.ic
if(u==null){u=new V.aG(0,0)
$.ic=u}return u}u=this.a
if(typeof u!=="number")return u.C()
t=this.b
if(typeof t!=="number")return t.C()
return new V.aG(u/b,t/b)},
p:function(a,b){var u,t,s
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.aG))return!1
u=b.a
t=this.a
s=$.C()
s.toString
if(typeof u!=="number")return u.U()
if(typeof t!=="number")return H.b0(t)
s=s.a
if(!(Math.abs(u-t)<s))return!1
u=b.b
t=this.b
if(typeof u!=="number")return u.U()
if(typeof t!=="number")return H.b0(t)
if(!(Math.abs(u-t)<s))return!1
return!0},
i:function(a){return"["+V.B(this.a,3,0)+", "+V.B(this.b,3,0)+"]"}}
V.F.prototype={
bN:function(a){return Math.sqrt(this.I(this))},
I:function(a){return this.a*a.a+this.b*a.b+this.c*a.c},
bO:function(a,b){var u,t,s
u=this.a
t=this.b
s=this.c
return new V.F(u+b*(a.a-u),t+b*(a.b-t),s+b*(a.c-s))},
az:function(a){var u,t,s,r,q,p
u=this.b
t=a.c
s=this.c
r=a.b
q=a.a
p=this.a
return new V.F(u*t-s*r,s*q-p*t,p*r-u*q)},
H:function(a,b){return new V.F(this.a+b.a,this.b+b.b,this.c+b.c)},
aw:function(a){return new V.F(-this.a,-this.b,-this.c)},
C:function(a,b){if(Math.abs(b-0)<$.C().a)return V.bW()
return new V.F(this.a/b,this.b/b,this.c/b)},
dc:function(){var u=$.C().a
if(!(Math.abs(0-this.a)<u))return!1
if(!(Math.abs(0-this.b)<u))return!1
if(!(Math.abs(0-this.c)<u))return!1
return!0},
p:function(a,b){var u,t
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.F))return!1
u=b.a
t=$.C().a
if(!(Math.abs(u-this.a)<t))return!1
if(!(Math.abs(b.b-this.b)<t))return!1
if(!(Math.abs(b.c-this.c)<t))return!1
return!0},
i:function(a){return"["+V.B(this.a,3,0)+", "+V.B(this.b,3,0)+", "+V.B(this.c,3,0)+"]"}}
U.cm.prototype={
gu:function(){var u=this.b
if(u==null){u=D.af()
this.b=u}return u},
p:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.cm))return!1
return J.L(this.a,b.a)},
i:function(a){return"Constant: "+this.a.q("          ")}}
U.ba.prototype={}
U.cU.prototype={
gu:function(){var u=this.y
if(u==null){u=D.af()
this.y=u}return u},
an:function(a){var u=this.y
if(u!=null)u.K(a)},
sdD:function(a){var u
a=V.hE(a,0,6.283185307179586)
u=this.a
if(!(Math.abs(u-a)<$.C().a)){this.a=a
u=new D.G("yaw",u,a,this,[P.q])
u.b=!0
this.an(u)}},
sdk:function(a){var u
a=V.hE(a,0,6.283185307179586)
u=this.b
if(!(Math.abs(u-a)<$.C().a)){this.b=a
u=new D.G("pitch",u,a,this,[P.q])
u.b=!0
this.an(u)}},
sdr:function(a){var u
a=V.hE(a,0,6.283185307179586)
u=this.c
if(!(Math.abs(u-a)<$.C().a)){this.c=a
u=new D.G("roll",u,a,this,[P.q])
u.b=!0
this.an(u)}},
p:function(a,b){var u,t,s
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.cU))return!1
u=this.a
t=b.a
s=$.C().a
if(!(Math.abs(u-t)<s))return!1
if(!(Math.abs(this.b-b.b)<s))return!1
if(!(Math.abs(this.c-b.c)<s))return!1
if(!(Math.abs(this.d-b.d)<s))return!1
if(!(Math.abs(this.e-b.e)<s))return!1
if(!(Math.abs(this.f-b.f)<s))return!1
return!0},
i:function(a){return"Rotater: ["+V.B(this.a,3,0)+", "+V.B(this.b,3,0)+", "+V.B(this.c,3,0)+"], ["+V.B(this.d,3,0)+", "+V.B(this.e,3,0)+", "+V.B(this.f,3,0)+"]"}}
M.cq.prototype={
ad:function(a){var u
H.l(a,"$iy")
u=this.x
if(u!=null)u.K(a)},
e6:function(){return this.ad(null)},
eW:function(a,b){var u,t,s,r,q,p,o,n
u=E.a2
H.h(b,"$ip",[u],"$ap")
for(t=b.length,s=this.ga6(),r={func:1,ret:-1,args:[D.y]},q=[r],p=0;p<b.length;b.length===t||(0,H.v)(b),++p){o=b[p]
if(o!=null){n=o.z
if(n==null){n=new D.b6()
n.sa7(null)
n.saO(null)
n.c=null
n.d=0
o.z=n}H.j(s,r)
if(n.a==null)n.sa7(H.b([],q))
n=n.a;(n&&C.a).h(n,s)}}u=new D.bA(a,b,this,[u])
u.b=!0
this.ad(u)},
eY:function(a,b){var u,t,s
u=E.a2
H.h(b,"$ip",[u],"$ap")
for(t=b.gL(b),s=this.ga6();t.v();)t.gG().gu().w(0,s)
u=new D.bB(a,b,this,[u])
u.b=!0
this.ad(u)},
sdt:function(a){var u,t
u=this.c
if(u!=a){if(u!=null)u.gu().w(0,this.ga6())
t=this.c
this.c=a
if(a!=null)a.gu().h(0,this.ga6())
u=new D.G("technique",t,this.c,this,[O.bf])
u.b=!0
this.ad(u)}},
gu:function(){var u=this.x
if(u==null){u=D.af()
this.x=u}return u},
av:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g
a.dn(this.c)
u=this.b
u.toString
t=a.a
C.b.hz(t,36160,null)
C.b.bC(t,2884)
C.b.bC(t,2929)
C.b.hR(t,513)
s=t.drawingBufferWidth
r=t.drawingBufferHeight
q=u.r
p=q.a
if(typeof s!=="number")return H.b0(s)
o=C.i.a4(p*s)
p=q.b
if(typeof r!=="number")return H.b0(r)
n=C.i.a4(p*r)
p=C.i.a4(q.c*s)
a.c=p
q=C.i.a4(q.d*r)
a.d=q
C.b.iN(t,o,n,p,q)
C.b.hF(t,u.c)
u=u.a
C.b.hE(t,u.a,u.b,u.c,u.d)
C.b.hD(t,16640)
u=this.a
t=a.c
q=a.d
p=u.c
m=u.d
l=u.e
k=l-m
j=1/Math.tan(p*0.5)
i=V.aC(-j/(t/q),0,0,0,0,j,0,0,0,0,l/k,-l*m/k,0,0,1,0)
u.a
a.cy.dm(i)
t=$.hX
if(t==null){t=V.hZ()
q=V.ih()
p=$.id
if(p==null){p=new V.F(0,0,-1)
$.id=p}p=V.hT(t,q,p)
$.hX=p
h=p}else h=t
u=u.b
if(u!=null){g=u.a
if(g!=null)h=g.O(0,h)}a.db.dm(h)
u=this.c
if(u!=null)u.b7(a)
for(u=this.d.a,u=new J.ab(u,u.length,0,[H.r(u,0)]);u.v();)u.d.b7(a)
for(u=this.d.a,u=new J.ab(u,u.length,0,[H.r(u,0)]);u.v();)u.d.av(a)
this.a.toString
a.cy.bR()
a.db.bR()
this.b.toString
a.dl()},
se5:function(a,b){this.d=H.h(b,"$iN",[E.a2],"$aN")},
$ikn:1}
A.cf.prototype={}
A.dw.prototype={
j:function(a,b){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<t;++s){r=u[s]
if(r.b===b)return r}return},
hW:function(){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<u.length;u.length===t||(0,H.v)(u),++s){r=u[s]
C.b.cO(r.a,r.c)}},
hT:function(){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<u.length;u.length===t||(0,H.v)(u),++s){r=u[s]
C.b.cM(r.a,r.c)}}}
A.e9.prototype={
dY:function(a7,a8){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6
this.z=a7
u=new P.aW("")
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
a7.hb(u)
a7.hi(u)
a7.hc(u)
a7.hq(u)
a7.hr(u)
a7.hk(u)
a7.hv(u)
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
u=new P.aW("")
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
s.hf(u)
s.ha(u)
s.hd(u)
s.hg(u)
s.ho(u)
p=s.dy
if(p){m=u.a+="// === Enviromental ===\n"
m+="\n"
u.a=m
m+="uniform samplerCube envSampler;\n"
u.a=m
m+="uniform int nullEnvTxt;\n"
u.a=m
u.a=m+"\n"
s.hm(u)
s.hn(u)}s.hj(u)
m=u.a+="// === Alpha ===\n"
m+="\n"
u.a=m
l=s.y
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
k=H.b([],[P.t])
if(s.b!==C.c)C.a.h(k,"ambient()")
if(s.c!==C.c)C.a.h(k,"diffuse(norm, litVec)")
if(s.d!==C.c)C.a.h(k,"invDiffuse(norm, litVec)")
if(s.e!==C.c)C.a.h(k,"specular(norm, litVec)")
m=u.a+="   return litClr*("+C.a.t(k," + ")+");\n"
m+="}\n"
u.a=m
u.a=m+"\n"
s.he(u)
s.hl(u)
s.hp(u)
s.hs(u)
s.ht(u)
s.hu(u)
s.hh(u)}m=u.a+="// === Main ===\n"
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
j=H.b([],[P.t])
if(l){u.a+="   vec3 lightAccum = vec3(0.0, 0.0, 0.0);\n"
C.a.h(j,"lightAccum")
if(s.c!==C.c)u.a+="   setDiffuseColor();\n"
if(s.d!==C.c)u.a+="   setInvDiffuseColor();\n"
if(s.e!==C.c)u.a+="   setSpecularColor();\n"
if(s.z>0)u.a+="   lightAccum += allDirLightValues(norm);\n"
if(s.Q>0)u.a+="   lightAccum += allPointLightValues(norm);\n"
if(s.ch>0)u.a+="   lightAccum += allSpotLightValues(norm);\n"
if(s.cx>0)u.a+="   lightAccum += allTxtDirLightValues(norm);\n"
if(s.cy>0)u.a+="   lightAccum += allTxtPointLightValues(norm);\n"
if(s.db>0)u.a+="   lightAccum += allTxtSpotLightValues(norm);\n"
if(s.dx<=0)u.a+="   lightAccum += nonLightValues(norm);\n"}if(s.a!==C.c)C.a.h(j,"emission()")
if(s.r!==C.c)C.a.h(j,"reflect(refl)")
if(s.x!==C.c)C.a.h(j,"refract(refl)")
if(j.length<=0)C.a.h(j,"vec3(0.0, 0.0, 0.0)")
i="vec4("+C.a.t(j," + ")+", alpha);"
s=u.a
if(o){s+="   gl_FragColor = colorMat*"+i+"\n"
u.a=s}else{s+="   gl_FragColor = "+i+"\n"
u.a=s}s+="}\n"
u.a=s
this.c=n
this.d=s.charCodeAt(0)==0?s:s
this.e=this.cm(n,35633)
this.f=this.cm(this.d,35632)
s=this.a
q=s.createProgram()
this.r=q
C.b.cG(s,q,this.e)
C.b.cG(s,this.r,this.f)
C.b.i4(s,this.r)
if(!H.iw(C.b.b9(s,this.r,35714))){h=C.b.dL(s,this.r)
C.b.hN(s,this.r)
H.n(P.o("Failed to link shader: "+H.f(h)))}this.fT()
this.fV()
this.Q=this.x.j(0,"posAttr")
this.cx=this.x.j(0,"normAttr")
this.ch=this.x.j(0,"binmAttr")
this.cy=this.x.j(0,"txt2DAttr")
this.db=this.x.j(0,"txtCubeAttr")
this.dx=this.x.j(0,"bendAttr")
if(a7.fr)this.id=H.c(this.y.k(0,"invViewMat"),"$ia7")
if(t)this.dy=H.c(this.y.k(0,"objMat"),"$ia7")
if(r)this.fr=H.c(this.y.k(0,"viewObjMat"),"$ia7")
this.fy=H.c(this.y.k(0,"projViewObjMat"),"$ia7")
if(a7.x2)this.k1=H.c(this.y.k(0,"txt2DMat"),"$ibQ")
if(a7.y1)this.k2=H.c(this.y.k(0,"txtCubeMat"),"$ia7")
if(a7.y2)this.k3=H.c(this.y.k(0,"colorMat"),"$ia7")
this.sek(H.b([],[A.a7]))
t=a7.aa
if(t>0){this.k4=H.l(this.y.k(0,"bendMatCount"),"$iA")
for(g=0;g<t;++g){s=this.r1
r=this.y
q="bendValues["+g+"].mat"
f=r.j(0,q)
if(f==null)H.n(P.o("Required uniform value, "+q+", was not defined or used in shader."));(s&&C.a).h(s,H.c(f,"$ia7"))}}t=a7.a
if(t!==C.c){this.r2=H.c(this.y.k(0,"emissionClr"),"$ix")
switch(t){case C.c:break
case C.f:break
case C.d:this.rx=H.c(this.y.k(0,"emissionTxt"),"$ia0")
this.x1=H.c(this.y.k(0,"nullEmissionTxt"),"$iA")
break
case C.e:this.ry=H.c(this.y.k(0,"emissionTxt"),"$ia1")
this.x1=H.c(this.y.k(0,"nullEmissionTxt"),"$iA")
break}}t=a7.b
if(t!==C.c){this.x2=H.c(this.y.k(0,"ambientClr"),"$ix")
switch(t){case C.c:break
case C.f:break
case C.d:this.y1=H.c(this.y.k(0,"ambientTxt"),"$ia0")
this.aa=H.c(this.y.k(0,"nullAmbientTxt"),"$iA")
break
case C.e:this.y2=H.c(this.y.k(0,"ambientTxt"),"$ia1")
this.aa=H.c(this.y.k(0,"nullAmbientTxt"),"$iA")
break}}t=a7.c
if(t!==C.c){this.a2=H.c(this.y.k(0,"diffuseClr"),"$ix")
switch(t){case C.c:break
case C.f:break
case C.d:this.aS=H.c(this.y.k(0,"diffuseTxt"),"$ia0")
this.aT=H.c(this.y.k(0,"nullDiffuseTxt"),"$iA")
break
case C.e:this.cP=H.c(this.y.k(0,"diffuseTxt"),"$ia1")
this.aT=H.c(this.y.k(0,"nullDiffuseTxt"),"$iA")
break}}t=a7.d
if(t!==C.c){this.aU=H.c(this.y.k(0,"invDiffuseClr"),"$ix")
switch(t){case C.c:break
case C.f:break
case C.d:this.cQ=H.c(this.y.k(0,"invDiffuseTxt"),"$ia0")
this.aV=H.c(this.y.k(0,"nullInvDiffuseTxt"),"$iA")
break
case C.e:this.cR=H.c(this.y.k(0,"invDiffuseTxt"),"$ia1")
this.aV=H.c(this.y.k(0,"nullInvDiffuseTxt"),"$iA")
break}}t=a7.e
if(t!==C.c){this.aY=H.c(this.y.k(0,"shininess"),"$iI")
this.aW=H.c(this.y.k(0,"specularClr"),"$ix")
switch(t){case C.c:break
case C.f:break
case C.d:this.cS=H.c(this.y.k(0,"specularTxt"),"$ia0")
this.aX=H.c(this.y.k(0,"nullSpecularTxt"),"$iA")
break
case C.e:this.cT=H.c(this.y.k(0,"specularTxt"),"$ia1")
this.aX=H.c(this.y.k(0,"nullSpecularTxt"),"$iA")
break}}switch(a7.f){case C.c:break
case C.f:break
case C.d:this.cU=H.c(this.y.k(0,"bumpTxt"),"$ia0")
this.aZ=H.c(this.y.k(0,"nullBumpTxt"),"$iA")
break
case C.e:this.cV=H.c(this.y.k(0,"bumpTxt"),"$ia1")
this.aZ=H.c(this.y.k(0,"nullBumpTxt"),"$iA")
break}if(a7.dy){this.cW=H.c(this.y.k(0,"envSampler"),"$ia1")
this.cX=H.c(this.y.k(0,"nullEnvTxt"),"$iA")
t=a7.r
if(t!==C.c){this.b_=H.c(this.y.k(0,"reflectClr"),"$ix")
switch(t){case C.c:break
case C.f:break
case C.d:this.cY=H.c(this.y.k(0,"reflectTxt"),"$ia0")
this.b0=H.c(this.y.k(0,"nullReflectTxt"),"$iA")
break
case C.e:this.cZ=H.c(this.y.k(0,"reflectTxt"),"$ia1")
this.b0=H.c(this.y.k(0,"nullReflectTxt"),"$iA")
break}}t=a7.x
if(t!==C.c){this.b1=H.c(this.y.k(0,"refraction"),"$iI")
this.b2=H.c(this.y.k(0,"refractClr"),"$ix")
switch(t){case C.c:break
case C.f:break
case C.d:this.d_=H.c(this.y.k(0,"refractTxt"),"$ia0")
this.b3=H.c(this.y.k(0,"nullRefractTxt"),"$iA")
break
case C.e:this.d0=H.c(this.y.k(0,"refractTxt"),"$ia1")
this.b3=H.c(this.y.k(0,"nullRefractTxt"),"$iA")
break}}}t=a7.y
if(t!==C.c){this.b4=H.c(this.y.k(0,"alpha"),"$iI")
switch(t){case C.c:break
case C.f:break
case C.d:this.d1=H.c(this.y.k(0,"alphaTxt"),"$ia0")
this.b5=H.c(this.y.k(0,"nullAlphaTxt"),"$iA")
break
case C.e:this.d2=H.c(this.y.k(0,"alphaTxt"),"$ia1")
this.b5=H.c(this.y.k(0,"nullAlphaTxt"),"$iA")
break}}this.se7(H.b([],[A.bP]))
this.se8(H.b([],[A.bR]))
this.se9(H.b([],[A.bS]))
this.sea(H.b([],[A.bT]))
this.seb(H.b([],[A.bU]))
this.sec(H.b([],[A.bV]))
if(a7.k2){t=a7.z
if(t>0){this.d3=H.l(this.y.k(0,"dirLightCount"),"$iA")
for(g=0;g<t;++g){s=this.y
r="dirLights["+g+"].viewDir"
f=s.j(0,r)
if(f==null)H.n(P.o("Required uniform value, "+r+", was not defined or used in shader."))
H.c(f,"$ix")
s=this.y
r="dirLights["+g+"].color"
e=s.j(0,r)
if(e==null)H.n(P.o("Required uniform value, "+r+", was not defined or used in shader."))
H.c(e,"$ix")
s=this.bD;(s&&C.a).h(s,new A.bP(g,f,e))}}t=a7.Q
if(t>0){this.d4=H.l(this.y.k(0,"pntLightCount"),"$iA")
for(g=0;g<t;++g){s=this.y
r="pntLights["+g+"].point"
f=s.j(0,r)
if(f==null)H.n(P.o("Required uniform value, "+r+", was not defined or used in shader."))
H.c(f,"$ix")
s=this.y
r="pntLights["+g+"].viewPnt"
e=s.j(0,r)
if(e==null)H.n(P.o("Required uniform value, "+r+", was not defined or used in shader."))
H.c(e,"$ix")
s=this.y
r="pntLights["+g+"].color"
d=s.j(0,r)
if(d==null)H.n(P.o("Required uniform value, "+r+", was not defined or used in shader."))
H.c(d,"$ix")
s=this.y
r="pntLights["+g+"].att0"
c=s.j(0,r)
if(c==null)H.n(P.o("Required uniform value, "+r+", was not defined or used in shader."))
H.c(c,"$iI")
s=this.y
r="pntLights["+g+"].att1"
b=s.j(0,r)
if(b==null)H.n(P.o("Required uniform value, "+r+", was not defined or used in shader."))
H.c(b,"$iI")
s=this.y
r="pntLights["+g+"].att2"
a=s.j(0,r)
if(a==null)H.n(P.o("Required uniform value, "+r+", was not defined or used in shader."))
H.c(a,"$iI")
s=this.bE;(s&&C.a).h(s,new A.bR(g,f,e,d,c,b,a))}}t=a7.ch
if(t>0){this.d5=H.l(this.y.k(0,"spotLightCount"),"$iA")
for(g=0;g<t;++g){s=this.y
r="spotLights["+g+"].objPnt"
f=s.j(0,r)
if(f==null)H.n(P.o("Required uniform value, "+r+", was not defined or used in shader."))
H.c(f,"$ix")
s=this.y
r="spotLights["+g+"].objDir"
e=s.j(0,r)
if(e==null)H.n(P.o("Required uniform value, "+r+", was not defined or used in shader."))
H.c(e,"$ix")
s=this.y
r="spotLights["+g+"].viewPnt"
d=s.j(0,r)
if(d==null)H.n(P.o("Required uniform value, "+r+", was not defined or used in shader."))
H.c(d,"$ix")
s=this.y
r="spotLights["+g+"].color"
c=s.j(0,r)
if(c==null)H.n(P.o("Required uniform value, "+r+", was not defined or used in shader."))
H.c(c,"$ix")
s=this.y
r="spotLights["+g+"].cutoff"
b=s.j(0,r)
if(b==null)H.n(P.o("Required uniform value, "+r+", was not defined or used in shader."))
H.c(b,"$iI")
s=this.y
r="spotLights["+g+"].coneAngle"
a=s.j(0,r)
if(a==null)H.n(P.o("Required uniform value, "+r+", was not defined or used in shader."))
H.c(a,"$iI")
s=this.y
r="spotLights["+g+"].att0"
a0=s.j(0,r)
if(a0==null)H.n(P.o("Required uniform value, "+r+", was not defined or used in shader."))
H.c(a0,"$iI")
s=this.y
r="spotLights["+g+"].att1"
a1=s.j(0,r)
if(a1==null)H.n(P.o("Required uniform value, "+r+", was not defined or used in shader."))
H.c(a1,"$iI")
s=this.y
r="spotLights["+g+"].att2"
a2=s.j(0,r)
if(a2==null)H.n(P.o("Required uniform value, "+r+", was not defined or used in shader."))
H.c(a2,"$iI")
s=this.bF;(s&&C.a).h(s,new A.bS(g,f,e,d,c,b,a,a0,a1,a2))}}t=a7.cx
if(t>0){this.d6=H.l(this.y.k(0,"txtDirLightCount"),"$iA")
for(g=0;g<t;++g){s=this.y
r="txtDirLights["+g+"].objUp"
f=s.j(0,r)
if(f==null)H.n(P.o("Required uniform value, "+r+", was not defined or used in shader."))
H.c(f,"$ix")
s=this.y
r="txtDirLights["+g+"].objRight"
e=s.j(0,r)
if(e==null)H.n(P.o("Required uniform value, "+r+", was not defined or used in shader."))
H.c(e,"$ix")
s=this.y
r="txtDirLights["+g+"].objDir"
d=s.j(0,r)
if(d==null)H.n(P.o("Required uniform value, "+r+", was not defined or used in shader."))
H.c(d,"$ix")
s=this.y
r="txtDirLights["+g+"].viewDir"
c=s.j(0,r)
if(c==null)H.n(P.o("Required uniform value, "+r+", was not defined or used in shader."))
H.c(c,"$ix")
s=this.y
r="txtDirLights["+g+"].color"
b=s.j(0,r)
if(b==null)H.n(P.o("Required uniform value, "+r+", was not defined or used in shader."))
H.c(b,"$ix")
s=this.y
r="txtDirLights["+g+"].nullTxt"
a=s.j(0,r)
if(a==null)H.n(P.o("Required uniform value, "+r+", was not defined or used in shader."))
H.c(a,"$iA")
s=this.y
r="txtDirLightsTxt2D"+g
a0=s.j(0,r)
if(a0==null)H.n(P.o("Required uniform value, "+r+", was not defined or used in shader."))
H.c(a0,"$ia0")
s=this.bG;(s&&C.a).h(s,new A.bT(g,f,e,d,c,b,a0,a))}}t=a7.cy
if(t>0){this.d7=H.l(this.y.k(0,"txtPntLightCount"),"$iA")
for(g=0;g<t;++g){s=this.y
r="txtPntLights["+g+"].point"
f=s.j(0,r)
if(f==null)H.n(P.o("Required uniform value, "+r+", was not defined or used in shader."))
H.c(f,"$ix")
s=this.y
r="txtPntLights["+g+"].viewPnt"
e=s.j(0,r)
if(e==null)H.n(P.o("Required uniform value, "+r+", was not defined or used in shader."))
H.c(e,"$ix")
s=this.y
r="txtPntLights["+g+"].invViewRotMat"
d=s.j(0,r)
if(d==null)H.n(P.o("Required uniform value, "+r+", was not defined or used in shader."))
H.c(d,"$ibQ")
s=this.y
r="txtPntLights["+g+"].color"
c=s.j(0,r)
if(c==null)H.n(P.o("Required uniform value, "+r+", was not defined or used in shader."))
H.c(c,"$ix")
s=this.y
r="txtPntLights["+g+"].nullTxt"
b=s.j(0,r)
if(b==null)H.n(P.o("Required uniform value, "+r+", was not defined or used in shader."))
H.c(b,"$iA")
s=this.y
r="txtPntLights["+g+"].att0"
a=s.j(0,r)
if(a==null)H.n(P.o("Required uniform value, "+r+", was not defined or used in shader."))
H.c(a,"$iI")
s=this.y
r="txtPntLights["+g+"].att1"
a0=s.j(0,r)
if(a0==null)H.n(P.o("Required uniform value, "+r+", was not defined or used in shader."))
H.c(a0,"$iI")
s=this.y
r="txtPntLights["+g+"].att2"
a1=s.j(0,r)
if(a1==null)H.n(P.o("Required uniform value, "+r+", was not defined or used in shader."))
H.c(a1,"$iI")
s=this.y
r="txtPntLightsTxtCube"+g
a2=s.j(0,r)
if(a2==null)H.n(P.o("Required uniform value, "+r+", was not defined or used in shader."))
H.c(a2,"$ia1")
s=this.bH;(s&&C.a).h(s,new A.bU(g,f,e,d,c,a2,b,a,a0,a1))}}t=a7.db
if(t>0){this.d8=H.l(this.y.k(0,"txtSpotLightCount"),"$iA")
for(g=0;g<t;++g){s=this.y
r="txtSpotLights["+g+"].objPnt"
f=s.j(0,r)
if(f==null)H.n(P.o("Required uniform value, "+r+", was not defined or used in shader."))
H.c(f,"$ix")
s=this.y
r="txtSpotLights["+g+"].objDir"
e=s.j(0,r)
if(e==null)H.n(P.o("Required uniform value, "+r+", was not defined or used in shader."))
H.c(e,"$ix")
s=this.y
r="txtSpotLights["+g+"].objUp"
d=s.j(0,r)
if(d==null)H.n(P.o("Required uniform value, "+r+", was not defined or used in shader."))
H.c(d,"$ix")
s=this.y
r="txtSpotLights["+g+"].objRight"
c=s.j(0,r)
if(c==null)H.n(P.o("Required uniform value, "+r+", was not defined or used in shader."))
H.c(c,"$ix")
s=this.y
r="txtSpotLights["+g+"].viewPnt"
b=s.j(0,r)
if(b==null)H.n(P.o("Required uniform value, "+r+", was not defined or used in shader."))
H.c(b,"$ix")
s=this.y
r="txtSpotLights["+g+"].nullTxt"
a=s.j(0,r)
if(a==null)H.n(P.o("Required uniform value, "+r+", was not defined or used in shader."))
H.c(a,"$iA")
s=this.y
r="txtSpotLights["+g+"].color"
a0=s.j(0,r)
if(a0==null)H.n(P.o("Required uniform value, "+r+", was not defined or used in shader."))
H.c(a0,"$ix")
s=this.y
r="txtSpotLights["+g+"].tuScalar"
a1=s.j(0,r)
if(a1==null)H.n(P.o("Required uniform value, "+r+", was not defined or used in shader."))
H.c(a1,"$iI")
s=this.y
r="txtSpotLights["+g+"].tvScalar"
a2=s.j(0,r)
if(a2==null)H.n(P.o("Required uniform value, "+r+", was not defined or used in shader."))
H.c(a2,"$iI")
s=this.y
r="txtSpotLights["+g+"].att0"
a3=s.j(0,r)
if(a3==null)H.n(P.o("Required uniform value, "+r+", was not defined or used in shader."))
H.c(a3,"$iI")
s=this.y
r="txtSpotLights["+g+"].att1"
a4=s.j(0,r)
if(a4==null)H.n(P.o("Required uniform value, "+r+", was not defined or used in shader."))
H.c(a4,"$iI")
s=this.y
r="txtSpotLights["+g+"].att2"
a5=s.j(0,r)
if(a5==null)H.n(P.o("Required uniform value, "+r+", was not defined or used in shader."))
H.c(a5,"$iI")
s=this.y
r="txtSpotLightsTxt2D"+g
a6=s.j(0,r)
if(a6==null)H.n(P.o("Required uniform value, "+r+", was not defined or used in shader."))
H.c(a6,"$ia0")
s=this.bI;(s&&C.a).h(s,new A.bV(g,f,e,d,c,b,a6,a,a0,a1,a2,a3,a4,a5))}}}},
a1:function(a,b,c){if(c==null||!c.gV(c))C.b.F(b.a,b.d,1)
else{a.dR(c)
C.b.F(b.a,b.d,0)}},
W:function(a,b,c){C.b.F(b.a,b.d,1)},
sek:function(a){this.r1=H.h(a,"$ia",[A.a7],"$aa")},
se7:function(a){this.bD=H.h(a,"$ia",[A.bP],"$aa")},
se8:function(a){this.bE=H.h(a,"$ia",[A.bR],"$aa")},
se9:function(a){this.bF=H.h(a,"$ia",[A.bS],"$aa")},
sea:function(a){this.bG=H.h(a,"$ia",[A.bT],"$aa")},
seb:function(a){this.bH=H.h(a,"$ia",[A.bU],"$aa")},
sec:function(a){this.bI=H.h(a,"$ia",[A.bV],"$aa")}}
A.ec.prototype={
hb:function(a){var u,t,s
if(!this.x1)return
u=a.a+="struct BendingValue\n"
u+="{\n"
a.a=u
u+="   mat4 mat;\n"
a.a=u
u+="};\n"
a.a=u
a.a=u+"uniform int bendMatCount;\n"
u=a.a+="uniform BendingValue bendValues["+this.aa+"];\n"
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
hi:function(a){var u
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
hc:function(a){var u
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
hq:function(a){var u,t
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
hr:function(a){var u,t
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
hk:function(a){var u
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
hv:function(a){var u
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
af:function(a,b,c){var u
if(b===C.c)return
u=a.a+="uniform vec3 "+c+"Clr;\n"
if(b===C.f)return
if(0>=c.length)return H.d(c,0)
u+="uniform int null"+(c[0].toUpperCase()+C.j.c0(c,1))+"Txt;\n"
a.a=u
if(b===C.d)a.a=u+("uniform sampler2D "+c+"Txt;\n")
else if(b===C.e)a.a=u+("uniform samplerCube "+c+"Txt;\n")},
hf:function(a){var u,t
u=this.a
if(u===C.c)return
t=a.a+="// === Emission ===\n"
a.a=t+"\n"
this.af(a,u,"emission")
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
ha:function(a){var u,t
u=this.b
if(u===C.c)return
t=a.a+="// === Ambient ===\n"
a.a=t+"\n"
this.af(a,u,"ambient")
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
hd:function(a){var u,t
u=this.c
if(u===C.c)return
t=a.a+="// === Diffuse ===\n"
a.a=t+"\n"
this.af(a,u,"diffuse")
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
hg:function(a){var u,t
u=this.d
if(u===C.c)return
t=a.a+="// === Inverse Diffuse ===\n"
a.a=t+"\n"
this.af(a,u,"invDiffuse")
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
ho:function(a){var u,t
u=this.e
if(u===C.c)return
t=a.a+="// === Specular ===\n"
a.a=t+"\n"
this.af(a,u,"specular")
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
hj:function(a){var u,t
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
hm:function(a){var u,t
u=this.r
if(u===C.c)return
t=a.a+="// === Reflection ===\n"
a.a=t+"\n"
this.af(a,u,"reflect")
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
hn:function(a){var u,t
u=this.x
if(u===C.c)return
t=a.a+="// === Refraction ===\n"
a.a=t+"\n"
this.af(a,u,"refract")
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
he:function(a){var u,t
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
hl:function(a){var u,t
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
hp:function(a){var u,t
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
hs:function(a){var u,t,s
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
ht:function(a){var u,t,s
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
hu:function(a){var u,t,s
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
hh:function(a){var u
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
i:function(a){return this.a2}}
A.bP.prototype={}
A.bT.prototype={}
A.bR.prototype={}
A.bU.prototype={}
A.bS.prototype={}
A.bV.prototype={}
A.bJ.prototype={
e0:function(a,b){this.c=null
this.d=null
this.e=null
this.f=null
this.r=null
this.x=null
this.y=null},
cm:function(a,b){var u,t,s
u=this.a
t=C.b.hL(u,b)
C.b.dS(u,t,a)
C.b.hH(u,t)
if(!H.iw(C.b.dN(u,t,35713))){s=C.b.dM(u,t)
C.b.hO(u,t)
throw H.i(P.o("Error compiling shader '"+H.f(t)+"': "+H.f(s)))}return t},
fT:function(){var u,t,s,r,q,p
u=H.b([],[A.cf])
t=this.a
s=H.Y(C.b.b9(t,this.r,35721))
if(typeof s!=="number")return H.b0(s)
r=0
for(;r<s;++r){q=C.b.dG(t,this.r,r)
p=C.b.dI(t,this.r,q.name)
C.a.h(u,new A.cf(t,q.name,p))}this.x=new A.dw(u)},
fV:function(){var u,t,s,r,q,p
u=H.b([],[A.d5])
t=this.a
s=H.Y(C.b.b9(t,this.r,35718))
if(typeof s!=="number")return H.b0(s)
r=0
for(;r<s;++r){q=C.b.dH(t,this.r,r)
p=C.b.dO(t,this.r,q.name)
C.a.h(u,this.hM(q.type,q.size,q.name,p))}this.y=new A.f1(u)},
am:function(a,b,c){var u,t
u=this.a
t=this.r
if(a===1)return new A.A(u,t,b,c)
else return A.ho(u,t,b,a,c)},
er:function(a,b,c){var u,t
u=this.a
t=this.r
if(a===1)return new A.a0(u,t,b,c)
else return A.ho(u,t,b,a,c)},
es:function(a,b,c){var u,t
u=this.a
t=this.r
if(a===1)return new A.a1(u,t,b,c)
else return A.ho(u,t,b,a,c)},
aR:function(a,b){return new P.df(a+" uniform variables are unsupported by all browsers.\n"+("Please change the type of "+H.f(b)+"."))},
hM:function(a,b,c,d){switch(a){case 5120:return this.am(b,c,d)
case 5121:return this.am(b,c,d)
case 5122:return this.am(b,c,d)
case 5123:return this.am(b,c,d)
case 5124:return this.am(b,c,d)
case 5125:return this.am(b,c,d)
case 5126:return new A.I(this.a,this.r,c,d)
case 35664:return new A.eX(this.a,this.r,c,d)
case 35665:return new A.x(this.a,this.r,c,d)
case 35666:return new A.f_(this.a,this.r,c,d)
case 35667:return new A.eY(this.a,this.r,c,d)
case 35668:return new A.eZ(this.a,this.r,c,d)
case 35669:return new A.f0(this.a,this.r,c,d)
case 35674:return new A.f2(this.a,this.r,c,d)
case 35675:return new A.bQ(this.a,this.r,c,d)
case 35676:return new A.a7(this.a,this.r,c,d)
case 35678:return this.er(b,c,d)
case 35680:return this.es(b,c,d)
case 35670:throw H.i(this.aR("BOOL",c))
case 35671:throw H.i(this.aR("BOOL_VEC2",c))
case 35672:throw H.i(this.aR("BOOL_VEC3",c))
case 35673:throw H.i(this.aR("BOOL_VEC4",c))
default:throw H.i(P.o("Unknown uniform variable type "+H.f(a)+" for "+H.f(c)+"."))}}}
A.b5.prototype={
i:function(a){return this.b}}
A.d5.prototype={}
A.f1.prototype={
j:function(a,b){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<t;++s){r=u[s]
if(r.c===b)return r}return},
k:function(a,b){var u=this.j(0,b)
if(u==null)throw H.i(P.o("Required uniform value, "+b+", was not defined or used in shader."))
return u},
i:function(a){return this.A()},
hZ:function(a){var u,t,s,r
for(u=this.a,t=u.length,s="",r=0;r<u.length;u.length===t||(0,H.v)(u),++r)s+=u[r].i(0)+a
return s},
A:function(){return this.hZ("\n")}}
A.A.prototype={
i:function(a){return"Uniform1i: "+H.f(this.c)}}
A.eY.prototype={
i:function(a){return"Uniform2i: "+H.f(this.c)}}
A.eZ.prototype={
i:function(a){return"Uniform3i: "+H.f(this.c)}}
A.f0.prototype={
i:function(a){return"Uniform4i: "+H.f(this.c)}}
A.eW.prototype={
i:function(a){return"Uniform1iv: "+H.f(this.c)},
sh8:function(a){this.e=H.h(a,"$ia",[P.u],"$aa")}}
A.I.prototype={
i:function(a){return"Uniform1f: "+H.f(this.c)}}
A.eX.prototype={
i:function(a){return"Uniform2f: "+H.f(this.c)}}
A.x.prototype={
i:function(a){return"Uniform3f: "+H.f(this.c)}}
A.f_.prototype={
i:function(a){return"Uniform4f: "+H.f(this.c)}}
A.f2.prototype={
i:function(a){return"Uniform1Mat2 "+H.f(this.c)}}
A.bQ.prototype={
a5:function(a){var u=new Float32Array(H.c5(H.h(a,"$ia",[P.q],"$aa")))
C.b.dA(this.a,this.d,!1,u)},
i:function(a){return"UniformMat3: "+H.f(this.c)}}
A.a7.prototype={
a5:function(a){var u=new Float32Array(H.c5(H.h(a,"$ia",[P.q],"$aa")))
C.b.dB(this.a,this.d,!1,u)},
i:function(a){return"UniformMat4: "+H.f(this.c)}}
A.a0.prototype={
dR:function(a){var u,t,s
u=a.gV(a)
t=this.a
s=this.d
if(!u)C.b.F(t,s,0)
else C.b.F(t,s,a.a)},
i:function(a){return"UniformSampler2D: "+H.f(this.c)}}
A.a1.prototype={
i:function(a){return"UniformSamplerCube: "+H.f(this.c)}}
F.fS.prototype={
$3:function(a,b,c){var u,t,s
u=this.a
t=u.a.bO(u.b,b).bO(u.d.bO(u.c,b),c)
u=new V.ah(t.a,t.b,t.c)
if(!J.L(a.f,u)){a.f=u
u=a.a
if(u!=null)u.R()}a.siF(t.C(0,Math.sqrt(t.I(t))))
u=1-b
s=1-c
s=new V.cP(this.b+b*c,this.c+u*c,this.d+b*s,this.e+u*s)
if(!J.L(a.cx,s)){a.cx=s
u=a.a
if(u!=null)u.R()}},
$S:27}
F.S.prototype={
aA:function(){if(!this.gaB()){C.a.w(this.a.a.d.b,this)
this.a.a.R()}this.bo()
this.bp()
this.fE()},
fQ:function(a){this.a=a
C.a.h(a.d.b,this)},
fR:function(a){this.b=a
C.a.h(a.d.c,this)},
fS:function(a){this.c=a
C.a.h(a.d.d,this)},
bo:function(){var u=this.a
if(u!=null){C.a.w(u.d.b,this)
this.a=null}},
bp:function(){var u=this.b
if(u!=null){C.a.w(u.d.c,this)
this.b=null}},
fE:function(){var u=this.c
if(u!=null){C.a.w(u.d.d,this)
this.c=null}},
gaB:function(){return this.a==null||this.b==null||this.c==null},
ej:function(){var u,t,s,r,q
u=this.a
t=u==null?null:u.r
u=this.b
s=u==null?null:u.r
u=this.c
r=u==null?null:u.r
q=V.bW()
if(t!=null)q=q.H(0,t)
if(s!=null)q=q.H(0,s)
if(r!=null)q=q.H(0,r)
if(q.dc())return
return q.C(0,Math.sqrt(q.I(q)))},
en:function(){var u,t,s,r,q
u=this.a
t=u==null?null:u.f
u=this.b
s=u==null?null:u.f
u=this.c
r=u==null?null:u.f
if(t==null||s==null||r==null)return
u=s.U(0,t)
u=new V.F(u.a,u.b,u.c)
q=u.C(0,Math.sqrt(u.I(u)))
u=r.U(0,t)
u=new V.F(u.a,u.b,u.c)
u=q.az(u.C(0,Math.sqrt(u.I(u))))
return u.C(0,Math.sqrt(u.I(u)))},
by:function(){if(this.d!=null)return!0
var u=this.ej()
if(u==null){u=this.en()
if(u==null)return!1}this.d=u
this.a.a.R()
return!0},
ei:function(){var u,t,s,r,q
u=this.a
t=u==null?null:u.x
u=this.b
s=u==null?null:u.x
u=this.c
r=u==null?null:u.x
q=V.bW()
if(t!=null)q=q.H(0,t)
if(s!=null)q=q.H(0,s)
if(r!=null)q=q.H(0,r)
if(q.dc())return
return q.C(0,Math.sqrt(q.I(q)))},
em:function(){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f
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
if(Math.abs(i-0)<$.C().a){u=m.U(0,p)
u=new V.F(u.a,u.b,u.c)
h=u.C(0,Math.sqrt(u.I(u)))
if(j.a-k.a<0)h=h.aw(0)}else{g=(u-l.b)/i
u=m.U(0,p)
u=new V.ah(u.a*g+p.a,u.b*g+p.b,u.c*g+p.c).U(0,s)
u=new V.F(u.a,u.b,u.c)
h=u.C(0,Math.sqrt(u.I(u)))
j=j.a
k=k.a
if((j-k)*g+k-l.a<0)h=h.aw(0)}u=this.d
if(u!=null){f=u.C(0,Math.sqrt(u.I(u)))
u=f.az(h)
u=u.C(0,Math.sqrt(u.I(u))).az(f)
h=u.C(0,Math.sqrt(u.I(u)))}return h},
bw:function(){if(this.e!=null)return!0
var u=this.ei()
if(u==null){u=this.em()
if(u==null)return!1}this.e=u
this.a.a.R()
return!0},
ghG:function(){if(J.L(this.a,this.b))return!0
if(J.L(this.b,this.c))return!0
if(J.L(this.c,this.a))return!0
return!1},
p:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.A()},
q:function(a){var u,t
if(this.gaB())return a+"disposed"
u=a+C.j.a_(J.aa(this.a.e),0)+", "+C.j.a_(J.aa(this.b.e),0)+", "+C.j.a_(J.aa(this.c.e),0)+" {"
t=this.d
u=t!=null?u+(t.i(0)+", "):u+"-, "
t=this.e
return t!=null?u+(t.i(0)+"}"):u+"-}"},
A:function(){return this.q("")}}
F.dM.prototype={}
F.eC.prototype={
aC:function(a,b,c){var u,t
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
F.aA.prototype={
aA:function(){if(!this.gaB()){C.a.w(this.a.a.c.b,this)
this.a.a.R()}this.bo()
this.bp()},
bo:function(){var u=this.a
if(u!=null){C.a.w(u.c.b,this)
this.a=null}},
bp:function(){var u=this.b
if(u!=null){C.a.w(u.c.c,this)
this.b=null}},
gaB:function(){return this.a==null||this.b==null},
p:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.A()},
q:function(a){if(this.gaB())return a+"disposed"
return a+C.j.a_(J.aa(this.a.e),0)+", "+C.j.a_(J.aa(this.b.e),0)},
A:function(){return this.q("")}}
F.dZ.prototype={}
F.eV.prototype={
aC:function(a,b,c){var u,t
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
F.aV.prototype={
p:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.A()},
q:function(a){var u=this.a
if(u==null)return a+"disposed"
return a+C.j.a_(J.aa(u.e),0)},
A:function(){return this.q("")}}
F.cW.prototype={
gu:function(){var u=this.e
if(u==null){u=D.af()
this.e=u}return u},
bP:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i,h
u=this.e
if(u!=null)++u.d
a.a.n()
t=this.a.c.length
for(u=a.a.c,s=u.length,r=0;r<u.length;u.length===s||(0,H.v)(u),++r){q=u[r]
this.a.h(0,q.hK())}this.a.n()
for(u=a.b.b,s=u.length,r=0;r<u.length;u.length===s||(0,H.v)(u),++r){p=u[r]
o=this.a
n=p.a
n.a.a.n()
n=n.e
if(typeof n!=="number")return n.H()
n+=t
o=o.c
if(n>=o.length)return H.d(o,n)
m=o[n]
this.b.a.a.h(0,m)
n=new F.aV()
if(m.a==null)H.n(P.o("May not create a point with a vertex which is not attached to a shape."))
n.a=m
C.a.h(m.b.b,n)
C.a.h(n.a.a.b.b,n)
o=n.a.a.e
if(o!=null)o.K(null)}for(u=a.c.b,s=u.length,r=0;r<u.length;u.length===s||(0,H.v)(u),++r){l=u[r]
o=this.a
n=l.a
n.a.a.n()
n=n.e
if(typeof n!=="number")return n.H()
n+=t
o=o.c
if(n>=o.length)return H.d(o,n)
k=o[n]
n=this.a
o=l.b
o.a.a.n()
o=o.e
if(typeof o!=="number")return o.H()
o+=t
n=n.c
if(o>=n.length)return H.d(n,o)
j=n[o]
o=this.c.a
o.a.h(0,k)
o.a.h(0,j)
o=new F.aA()
n=k.a
if(n==null)H.n(P.o("May not create a line with a start vertex which is not attached to a shape."))
if(n!=j.a)H.n(P.o("May not create a line with vertices attached to different shapes."))
o.a=k
C.a.h(k.c.b,o)
o.b=j
C.a.h(j.c.c,o)
C.a.h(o.a.a.c.b,o)
o=o.a.a.e
if(o!=null)o.K(null)}for(u=a.d.b,s=u.length,r=0;r<u.length;u.length===s||(0,H.v)(u),++r){i=u[r]
o=this.a
n=i.a
n.a.a.n()
n=n.e
if(typeof n!=="number")return n.H()
n+=t
o=o.c
if(n>=o.length)return H.d(o,n)
k=o[n]
n=this.a
o=i.b
o.a.a.n()
o=o.e
if(typeof o!=="number")return o.H()
o+=t
n=n.c
if(o>=n.length)return H.d(n,o)
j=n[o]
o=this.a
n=i.c
n.a.a.n()
n=n.e
if(typeof n!=="number")return n.H()
n+=t
o=o.c
if(n>=o.length)return H.d(o,n)
h=o[n]
n=this.d.a
n.a.h(0,k)
n.a.h(0,j)
n.a.h(0,h)
F.cr(k,j,h)}u=this.e
if(u!=null)u.ab()},
aq:function(){var u,t
u=this.e
if(u!=null)++u.d
t=this.d.aq()||!1
if(!this.a.aq())t=!1
u=this.e
if(u!=null)u.ab()
return t},
i8:function(a,b){var u,t,s,r,q,p,o
u=this.e
if(u!=null)++u.d
u=this.a.c
t=H.b(u.slice(0),[H.r(u,0)])
for(u=[F.a9];t.length!==0;){s=C.a.ghY(t)
C.a.it(t,0)
if(s!=null){r=H.b([],u)
C.a.h(r,s)
for(q=t.length,p=0;p<t.length;t.length===q||(0,H.v)(t),++p){o=t[p]
if(o!=null&&a.aC(0,s,o)){C.a.h(r,o)
C.a.w(t,o)}}if(r.length>1)b.bP(r)}}this.a.n()
this.c.bS()
this.d.bS()
this.b.iu()
this.c.bT(new F.eV())
this.d.bT(new F.eC())
u=this.e
if(u!=null)u.ab()},
hB:function(a0,a1){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a
u=this.a.c.length
a1.toString
t=$.aK()
s=a1.a
r=(s&t.a)!==0?1:0
if((s&$.aJ().a)!==0)++r
if((s&$.aI().a)!==0)++r
if((s&$.aL().a)!==0)++r
if((s&$.aM().a)!==0)++r
if((s&$.c9().a)!==0)++r
if((s&$.ca().a)!==0)++r
if((s&$.bo().a)!==0)++r
if((s&$.aH().a)!==0)++r
q=a1.gc_(a1)
p=q*4
t=new Array(u*q)
t.fixed$length=Array
s=P.q
o=H.b(t,[s])
t=new Array(r)
t.fixed$length=Array
n=H.b(t,[Z.ci])
for(m=0,l=0;l<r;++l){k=a1.hx(l)
j=k.gc_(k)
C.a.T(n,l,new Z.ci(k,j,m*4,p,0))
for(i=0;i<u;++i){t=this.a.c
if(i>=t.length)return H.d(t,i)
h=t[i].i5(k)
g=m+i*q
for(f=0;f<h.length;++f){C.a.T(o,g,h[f]);++g}}m+=j}H.h(o,"$ia",[s],"$aa")
t=a0.a
e=t.createBuffer()
C.b.a9(t,34962,e)
C.b.cI(t,34962,new Float32Array(H.c5(o)),35044)
C.b.a9(t,34962,null)
d=new Z.cj(new Z.db(34962,e),n,a1)
d.seH(H.b([],[Z.aT]))
if(this.b.b.length!==0){s=P.u
c=H.b([],[s])
for(l=0;b=this.b.b,l<b.length;++l){b=b[l].a
b.a.a.n()
C.a.h(c,b.e)}a=Z.hq(t,34963,H.h(c,"$ia",[s],"$aa"))
C.a.h(d.b,new Z.aT(0,c.length,a))}if(this.c.b.length!==0){s=P.u
c=H.b([],[s])
for(l=0;b=this.c.b,l<b.length;++l){b=b[l].a
b.a.a.n()
C.a.h(c,b.e)
b=this.c.b
if(l>=b.length)return H.d(b,l)
b=b[l].b
b.a.a.n()
C.a.h(c,b.e)}a=Z.hq(t,34963,H.h(c,"$ia",[s],"$aa"))
C.a.h(d.b,new Z.aT(1,c.length,a))}if(this.d.b.length!==0){s=P.u
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
C.a.h(c,b.e)}a=Z.hq(t,34963,H.h(c,"$ia",[s],"$aa"))
C.a.h(d.b,new Z.aT(4,c.length,a))}return d},
i:function(a){var u=H.b([],[P.t])
if(this.a.c.length!==0){C.a.h(u,"Vertices:")
C.a.h(u,this.a.q("   "))}if(this.b.b.length!==0){C.a.h(u,"Points:")
C.a.h(u,this.b.q("   "))}if(this.c.b.length!==0){C.a.h(u,"Lines:")
C.a.h(u,this.c.q("   "))}if(this.d.b.length!==0){C.a.h(u,"Faces:")
C.a.h(u,this.d.q("   "))}return C.a.t(u,"\n")},
a3:function(a){var u=this.e
if(u!=null)u.K(a)},
R:function(){return this.a3(null)},
$iko:1}
F.ew.prototype={
hw:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k,j,i,h
H.h(c,"$ia",[F.a9],"$aa")
u=H.b([],[F.S])
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
C.a.h(u,F.cr(l,k,i))
t.a.h(0,l)
t.a.h(0,i)
t.a.h(0,h)
C.a.h(u,F.cr(l,i,h))}else{m.h(0,k)
t.a.h(0,i)
t.a.h(0,h)
C.a.h(u,F.cr(k,i,h))
t.a.h(0,k)
t.a.h(0,h)
t.a.h(0,l)
C.a.h(u,F.cr(k,h,l))}o=!o}q=!q}return u},
gl:function(a){return this.b.length},
bT:function(a){var u,t,s,r,q,p,o,n
for(u=this.a,t=u.a.c.length-1;t>=0;--t){s=u.a.c
if(t>=s.length)return H.d(s,t)
r=s[t]
for(s=r.d,q=s.b.length+s.c.length+s.d.length-1;q>=0;--q){p=r.d.j(0,q)
for(o=q-1;o>=0;--o){n=r.d.j(0,o)
if(a.aC(0,p,n)){p.aA()
break}}}}},
bS:function(){var u,t,s
for(u=this.b.length-1;u>=0;--u){t=this.b
if(u>=t.length)return H.d(t,u)
s=t[u]
t=s.ghG()
if(t)s.aA()}},
aq:function(){var u,t,s,r
for(u=this.b,t=u.length,s=!0,r=0;r<u.length;u.length===t||(0,H.v)(u),++r)if(!u[r].by())s=!1
return s},
bx:function(){var u,t,s,r
for(u=this.b,t=u.length,s=!0,r=0;r<u.length;u.length===t||(0,H.v)(u),++r)if(!u[r].bw())s=!1
return s},
i:function(a){return this.A()},
q:function(a){var u,t,s,r
u=H.b([],[P.t])
for(t=this.b,s=t.length,r=0;r<t.length;t.length===s||(0,H.v)(t),++r)C.a.h(u,t[r].q(a))
return C.a.t(u,"\n")},
A:function(){return this.q("")},
sey:function(a){this.b=H.h(a,"$ia",[F.S],"$aa")}}
F.ex.prototype={
gl:function(a){return this.b.length},
bT:function(a){var u,t,s,r,q,p,o,n
for(u=this.a,t=u.a.c.length-1;t>=0;--t){s=u.a.c
if(t>=s.length)return H.d(s,t)
r=s[t]
for(s=r.c,q=s.b.length+s.c.length-1;q>=0;--q){p=r.c.j(0,q)
for(o=q-1;o>=0;--o){n=r.c.j(0,o)
if(a.aC(0,p,n)){p.aA()
break}}}}},
bS:function(){var u,t,s
for(u=this.b.length-1;u>=0;--u){t=this.b
if(u>=t.length)return H.d(t,u)
s=t[u]
t=J.L(s.a,s.b)
if(t)s.aA()}},
i:function(a){return this.A()},
q:function(a){var u,t,s,r
u=H.b([],[P.t])
t=this.b.length
for(s=0;s<t;++s){r=this.b
if(s>=r.length)return H.d(r,s)
C.a.h(u,r[s].q(a+(""+s+". ")))}return C.a.t(u,"\n")},
A:function(){return this.q("")},
seI:function(a){this.b=H.h(a,"$ia",[F.aA],"$aa")}}
F.ey.prototype={
gl:function(a){return this.b.length},
iu:function(){var u,t,s
for(u=this.b.length-1;u>=0;--u){t=this.b
if(u>=t.length)return H.d(t,u)
t=t[u]
s=t.a
if(s.b.b.length>1){if(s!=null){C.a.w(s.a.b.b,t)
s=t.a.a.e
if(s!=null)s.K(null)}s=t.a
if(s!=null){C.a.w(s.b.b,t)
t.a=null}}}},
i:function(a){return this.A()},
q:function(a){var u,t,s,r
u=H.b([],[P.t])
for(t=this.b,s=t.length,r=0;r<t.length;t.length===s||(0,H.v)(t),++r)C.a.h(u,t[r].q(a))
return C.a.t(u,"\n")},
A:function(){return this.q("")},
sbl:function(a){this.b=H.h(a,"$ia",[F.aV],"$aa")}}
F.a9.prototype={
bA:function(a){var u,t,s,r,q,p,o
u=this.f
t=this.r
s=this.x
r=this.y
q=this.z
p=this.Q
o=this.ch
return F.hp(this.cx,s,p,u,t,r,q,a,o)},
hK:function(){return this.bA(null)},
siF:function(a){var u
if(!J.L(this.z,a)){this.z=a
u=this.a
if(u!=null)u.R()}},
i5:function(a){var u,t
if(a.p(0,$.aK())){u=this.f
t=[P.q]
if(u==null)return H.b([0,0,0],t)
else return H.b([u.a,u.b,u.c],t)}else if(a.p(0,$.aJ())){u=this.r
t=[P.q]
if(u==null)return H.b([0,1,0],t)
else return H.b([u.a,u.b,u.c],t)}else if(a.p(0,$.aI())){u=this.x
t=[P.q]
if(u==null)return H.b([0,0,1],t)
else return H.b([u.a,u.b,u.c],t)}else if(a.p(0,$.aL())){u=this.y
t=[P.q]
if(u==null)return H.b([0,0],t)
else return H.b([u.a,u.b],t)}else if(a.p(0,$.aM())){u=this.z
t=[P.q]
if(u==null)return H.b([0,0,0],t)
else return H.b([u.a,u.b,u.c],t)}else if(a.p(0,$.c9())){u=this.Q
t=[P.q]
if(u==null)return H.b([1,1,1],t)
else return H.b([u.a,u.b,u.c],t)}else if(a.p(0,$.ca())){u=this.Q
t=[P.q]
if(u==null)return H.b([1,1,1,1],t)
else return H.b([u.a,u.b,u.c,u.d],t)}else if(a.p(0,$.bo()))return H.b([this.ch],[P.q])
else if(a.p(0,$.aH())){u=this.cx
t=[P.q]
if(u==null)return H.b([-1,-1,-1,-1],t)
else return H.b([u.a,u.b,u.c,u.d],t)}else return H.b([],[P.q])},
by:function(){var u,t
u={}
if(this.r!=null)return!0
t=this.a
if(t!=null){t=t.e
if(t!=null)++t.d}u.a=V.bW()
this.d.Y(0,new F.fj(u))
u=u.a
this.r=u.C(0,Math.sqrt(u.I(u)))
u=this.a
if(u!=null){u.R()
u=this.a.e
if(u!=null)u.ab()}return!0},
bw:function(){var u,t
u={}
if(this.x!=null)return!0
t=this.a
if(t!=null){t=t.e
if(t!=null)++t.d}u.a=V.bW()
this.d.Y(0,new F.fi(u))
u=u.a
this.x=u.C(0,Math.sqrt(u.I(u)))
u=this.a
if(u!=null){u.R()
u=this.a.e
if(u!=null)u.ab()}return!0},
p:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.A()},
q:function(a){var u,t,s
u=H.b([],[P.t])
C.a.h(u,C.j.a_(J.aa(this.e),0))
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
C.a.h(u,V.B(this.ch,3,0))
t=this.cx
if(t!=null)C.a.h(u,t.i(0))
else C.a.h(u,"-")
s=C.a.t(u,", ")
return a+"{"+s+"}"},
A:function(){return this.q("")}}
F.fj.prototype={
$1:function(a){var u,t
H.l(a,"$iS")
u=a==null?null:a.d
if(u!=null){t=this.a
t.a=t.a.H(0,u)}},
$S:4}
F.fi.prototype={
$1:function(a){var u,t
H.l(a,"$iS")
u=a==null?null:a.e
if(u!=null){t=this.a
t.a=t.a.H(0,u)}},
$S:4}
F.f9.prototype={
n:function(){var u,t,s,r
if(this.b){u=this.c
t=u.length
for(s=0,r=0;r<t;++r){if(r>=u.length)return H.d(u,r)
u[r].e=s;++s}this.b=!1}},
h:function(a,b){var u,t
u=b.a
if(u!=null){if(u===this.a)return!1
throw H.i(P.o("May not add a vertex already attached to another shape to this shape."))}u=this.c
b.e=u.length
t=this.a
b.a=t
C.a.h(u,b)
t.R()
return!0},
gl:function(a){return this.c.length},
aq:function(){var u,t,s
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.v)(u),++s)u[s].by()
return!0},
bx:function(){var u,t,s
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.v)(u),++s)u[s].bw()
return!0},
hC:function(){var u,t,s,r,q,p,o,n
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.v)(u),++s){r=u[s]
if(r.z==null){q=r.r
p=q.a
o=q.b
n=q.c
n=q.C(0,Math.sqrt(p*p+o*o+n*n))
if(!J.L(r.z,n)){r.z=n
q=r.a
if(q!=null){q=q.e
if(q!=null)q.K(null)}}}}return!0},
i:function(a){return this.A()},
q:function(a){var u,t,s,r
this.n()
u=H.b([],[P.t])
for(t=this.c,s=t.length,r=0;r<t.length;t.length===s||(0,H.v)(t),++r)C.a.h(u,t[r].q(a))
return C.a.t(u,"\n")},
A:function(){return this.q("")},
sh9:function(a){this.c=H.h(a,"$ia",[F.a9],"$aa")}}
F.fa.prototype={
gl:function(a){return this.b.length+this.c.length+this.d.length},
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
Y:function(a,b){H.j(b,{func:1,ret:-1,args:[F.S]})
C.a.Y(this.b,b)
C.a.Y(this.c,new F.fb(this,b))
C.a.Y(this.d,new F.fc(this,b))},
i:function(a){return this.A()},
q:function(a){var u,t,s,r
u=H.b([],[P.t])
for(t=this.b,s=t.length,r=0;r<t.length;t.length===s||(0,H.v)(t),++r)C.a.h(u,t[r].q(a))
for(t=this.c,s=t.length,r=0;r<t.length;t.length===s||(0,H.v)(t),++r)C.a.h(u,t[r].q(a))
for(t=this.d,s=t.length,r=0;r<t.length;t.length===s||(0,H.v)(t),++r)C.a.h(u,t[r].q(a))
return C.a.t(u,"\n")},
A:function(){return this.q("")},
sez:function(a){this.b=H.h(a,"$ia",[F.S],"$aa")},
seA:function(a){this.c=H.h(a,"$ia",[F.S],"$aa")},
seB:function(a){this.d=H.h(a,"$ia",[F.S],"$aa")}}
F.fb.prototype={
$1:function(a){H.l(a,"$iS")
if(!J.L(a.a,this.a))this.b.$1(a)},
$S:4}
F.fc.prototype={
$1:function(a){var u
H.l(a,"$iS")
u=this.a
if(!J.L(a.a,u)&&!J.L(a.b,u))this.b.$1(a)},
$S:4}
F.fd.prototype={
gl:function(a){return this.b.length+this.c.length},
j:function(a,b){var u,t,s
u=this.b
t=u.length
if(b>=t){u=this.c
s=b-t
if(s<0||s>=u.length)return H.d(u,s)
return u[s]}else{if(b<0)return H.d(u,b)
return u[b]}},
i:function(a){return this.A()},
q:function(a){var u,t,s,r
u=H.b([],[P.t])
for(t=this.b,s=t.length,r=0;r<t.length;t.length===s||(0,H.v)(t),++r)C.a.h(u,t[r].q(a))
for(t=this.c,s=t.length,r=0;r<t.length;t.length===s||(0,H.v)(t),++r)C.a.h(u,t[r].q(a))
return C.a.t(u,"\n")},
A:function(){return this.q("")},
seJ:function(a){this.b=H.h(a,"$ia",[F.aA],"$aa")},
seK:function(a){this.c=H.h(a,"$ia",[F.aA],"$aa")}}
F.ff.prototype={}
F.fe.prototype={
aC:function(a,b,c){return J.L(b.f,c.f)}}
F.fg.prototype={}
F.ek.prototype={
bP:function(a){var u,t,s,r,q,p,o,n,m
H.h(a,"$ia",[F.a9],"$aa")
u=V.bW()
for(t=a.length,s=0;s<t;++s){r=a[s].r
if(r!=null)u=new V.F(u.a+r.a,u.b+r.b,u.c+r.c)}u=u.C(0,Math.sqrt(u.I(u)))
for(t=a.length,r=u==null,s=0;s<a.length;a.length===t||(0,H.v)(a),++s){q=a[s]
if(r)p=null
else{o=u.a
n=u.b
m=u.c
p=u.C(0,Math.sqrt(o*o+n*n+m*m))}if(!J.L(q.r,p)){q.r=p
o=q.a
if(o!=null){o=o.e
if(o!=null)o.K(null)}}}return}}
F.fh.prototype={
gl:function(a){return this.b.length},
i:function(a){return this.A()},
q:function(a){var u,t,s,r
u=H.b([],[P.t])
for(t=this.b,s=t.length,r=0;r<t.length;t.length===s||(0,H.v)(t),++r)C.a.h(u,t[r].q(a))
return C.a.t(u,"\n")},
A:function(){return this.q("")},
sbl:function(a){this.b=H.h(a,"$ia",[F.aV],"$aa")}}
O.cE.prototype={
gu:function(){var u=this.dy
if(u==null){u=D.af()
this.dy=u}return u},
N:function(a){var u
H.l(a,"$iy")
u=this.dy
if(u!=null)u.K(a)},
bb:function(){return this.N(null)},
cw:function(a){H.l(a,"$iy")
this.a=null
this.N(a)},
fI:function(){return this.cw(null)},
eQ:function(a,b){var u=V.a_
u=new D.bA(a,H.h(b,"$ip",[u],"$ap"),this,[u])
u.b=!0
this.N(u)},
eS:function(a,b){var u=V.a_
u=new D.bB(a,H.h(b,"$ip",[u],"$ap"),this,[u])
u.b=!0
this.N(u)},
cj:function(){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7
u=this.dx
t=C.h.S(u.e.length+3,4)*4
s=C.h.S(u.f.length+3,4)*4
r=C.h.S(u.r.length+3,4)*4
q=C.h.S(u.x.length+3,4)*4
p=C.h.S(u.y.length+3,4)*4
o=C.h.S(u.z.length+3,4)*4
n=C.h.S(this.e.a.length+3,4)*4
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
a7=$.aK()
if(a0){b=$.aJ()
a7=new Z.av(a7.a|b.a)}if(a1){b=$.aI()
a7=new Z.av(a7.a|b.a)}if(a2){b=$.aL()
a7=new Z.av(a7.a|b.a)}if(a3){b=$.aM()
a7=new Z.av(a7.a|b.a)}if(a5){b=$.aH()
a7=new Z.av(a7.a|b.a)}return new A.ec(u,m,l,k,j,i,h,g,f,t,s,r,q,p,o,t+s+r+q+p+o,d,d,a4,a6,!0,!1,!1,c,a4,a,a0,a1,a2,a3,a5,!1,!1,!1,n,e.charCodeAt(0)==0?e:e,a7)},
J:function(a,b){H.h(a,"$ia",[T.bM],"$aa")
if(b!=null)if(!C.a.ar(a,b)){b.a=a.length
C.a.h(a,b)}},
b7:function(a){var u,t,s,r,q
for(u=this.dx.a,u=new J.ab(u,u.length,0,[H.r(u,0)]);u.v();){t=u.d
t.toString
s=$.f8
if(s==null){s=new V.F(0,0,1)
$.f8=s}t.a=s
r=t.b
if(r!=null){q=r.a
if(q!=null)t.a=q.bV(s)}}},
iw:function(a4,a5){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3
u=this.a
if(u==null){u=this.cj()
t=a4.fr.j(0,u.a2)
if(t==null){t=A.jg(u,a4.a)
s=t.b
if(s.length===0)H.n(P.o("May not cache a shader with no name."))
if(a4.fr.cK(s))H.n(P.o('Shader cache already contains a shader by the name "'+s+'".'))
a4.fr.T(0,s,t)}this.a=t
a5.e=null
u=t}r=u.z
q=r.aS
u=a5.e
if(!(u instanceof Z.cj)){a5.e=null
u=null}if(u==null||!u.d.p(0,q)){u=r.r1
if(u)a5.d.aq()
p=r.r2
if(p){o=a5.d
n=o.e
if(n!=null)++n.d
o.d.bx()
o.a.bx()
o=o.e
if(o!=null)o.ab()}o=r.ry
if(o){n=a5.d
m=n.e
if(m!=null)++m.d
n.a.hC()
n=n.e
if(n!=null)n.ab()}l=a5.d.hB(new Z.fl(a4.a),q)
l.as($.aK()).e=this.a.Q.c
if(u)l.as($.aJ()).e=this.a.cx.c
if(p)l.as($.aI()).e=this.a.ch.c
if(r.rx)l.as($.aL()).e=this.a.cy.c
if(o)l.as($.aM()).e=this.a.db.c
if(r.x1)l.as($.aH()).e=this.a.dx.c
a5.e=l}u=T.bM
k=H.b([],[u])
p=this.a
o=a4.a
C.b.dC(o,p.r)
p.x.hW()
if(r.fx){p=this.a
n=a4.dx.gM()
p=p.dy
p.toString
p.a5(n.a0(0,!0))}if(r.fy){p=this.a
n=a4.cx
if(n==null){n=a4.db.gM().O(0,a4.dx.gM())
a4.cx=n}p=p.fr
p.toString
p.a5(n.a0(0,!0))}p=this.a
n=a4.ch
if(n==null){n=a4.gis().O(0,a4.dx.gM())
a4.ch=n}p=p.fy
p.toString
p.a5(n.a0(0,!0))
if(r.x2){p=this.a
n=this.b
p=p.k1
p.toString
p.a5(C.o.a0(n,!0))}if(r.y1){p=this.a
n=this.c
p=p.k2
p.toString
p.a5(C.o.a0(n,!0))}if(r.y2){p=this.a
n=this.d
p=p.k3
p.toString
p.a5(C.o.a0(n,!0))}if(r.aa>0){j=this.e.a.length
p=this.a.k4
C.b.F(p.a,p.d,j)
for(p=[P.q],i=0;i<j;++i){n=this.a
m=this.e.a
if(i>=m.length)return H.d(m,i)
m=m[i]
n.toString
H.l(m,"$ia_")
n=n.r1
if(i>=n.length)return H.d(n,i)
n=n[i]
h=new Float32Array(H.c5(H.h(m.a0(0,!0),"$ia",p,"$aa")))
C.b.dB(n.a,n.d,!1,h)}}switch(r.a){case C.c:break
case C.f:p=this.a
n=this.f.f
p=p.r2
p.toString
m=n.a
g=n.b
n=n.c
C.b.m(p.a,p.d,m,g,n)
break
case C.d:this.J(k,this.f.d)
p=this.a
n=this.f.d
p.a1(p.rx,p.x1,n)
n=this.a
p=this.f.f
n=n.r2
n.toString
m=p.a
g=p.b
p=p.c
C.b.m(n.a,n.d,m,g,p)
break
case C.e:this.J(k,this.f.e)
p=this.a
n=this.f.e
p.W(p.ry,p.x1,n)
n=this.a
p=this.f.f
n=n.r2
n.toString
m=p.a
g=p.b
p=p.c
C.b.m(n.a,n.d,m,g,p)
break}if(r.k2){switch(r.b){case C.c:break
case C.f:p=this.a
n=this.r.f
p=p.x2
p.toString
m=n.a
g=n.b
n=n.c
C.b.m(p.a,p.d,m,g,n)
break
case C.d:this.J(k,this.r.d)
p=this.a
n=this.r.d
p.a1(p.y1,p.aa,n)
n=this.a
p=this.r.f
n=n.x2
n.toString
m=p.a
g=p.b
p=p.c
C.b.m(n.a,n.d,m,g,p)
break
case C.e:this.J(k,this.r.e)
p=this.a
n=this.r.e
p.W(p.y2,p.aa,n)
n=this.a
p=this.r.f
n=n.x2
n.toString
m=p.a
g=p.b
p=p.c
C.b.m(n.a,n.d,m,g,p)
break}switch(r.c){case C.c:break
case C.f:p=this.a
n=this.x.f
p=p.a2
p.toString
m=n.a
g=n.b
n=n.c
C.b.m(p.a,p.d,m,g,n)
break
case C.d:this.J(k,this.x.d)
p=this.a
n=this.x.d
p.a1(p.aS,p.aT,n)
n=this.a
p=this.x.f
n=n.a2
n.toString
m=p.a
g=p.b
p=p.c
C.b.m(n.a,n.d,m,g,p)
break
case C.e:this.J(k,this.x.e)
p=this.a
n=this.x.e
p.W(p.cP,p.aT,n)
n=this.a
p=this.x.f
n=n.a2
n.toString
m=p.a
g=p.b
p=p.c
C.b.m(n.a,n.d,m,g,p)
break}switch(r.d){case C.c:break
case C.f:p=this.a
n=this.y.f
p=p.aU
p.toString
m=n.a
g=n.b
n=n.c
C.b.m(p.a,p.d,m,g,n)
break
case C.d:this.J(k,this.y.d)
p=this.a
n=this.y.d
p.a1(p.cQ,p.aV,n)
n=this.a
p=this.y.f
n=n.aU
n.toString
m=p.a
g=p.b
p=p.c
C.b.m(n.a,n.d,m,g,p)
break
case C.e:this.J(k,this.y.e)
p=this.a
n=this.y.e
p.W(p.cR,p.aV,n)
n=this.a
p=this.y.f
n=n.aU
n.toString
m=p.a
g=p.b
p=p.c
C.b.m(n.a,n.d,m,g,p)
break}switch(r.e){case C.c:break
case C.f:p=this.a
n=this.z.f
p=p.aW
p.toString
m=n.a
g=n.b
n=n.c
C.b.m(p.a,p.d,m,g,n)
n=this.a
g=this.z.ch
n=n.aY
C.b.B(n.a,n.d,g)
break
case C.d:this.J(k,this.z.d)
p=this.a
n=this.z.d
p.a1(p.cS,p.aX,n)
n=this.a
p=this.z.f
n=n.aW
n.toString
m=p.a
g=p.b
p=p.c
C.b.m(n.a,n.d,m,g,p)
p=this.a
g=this.z.ch
p=p.aY
C.b.B(p.a,p.d,g)
break
case C.e:this.J(k,this.z.e)
p=this.a
n=this.z.e
p.W(p.cT,p.aX,n)
n=this.a
p=this.z.f
n=n.aW
n.toString
m=p.a
g=p.b
p=p.c
C.b.m(n.a,n.d,m,g,p)
p=this.a
g=this.z.ch
p=p.aY
C.b.B(p.a,p.d,g)
break}if(r.z>0){j=this.dx.e.length
p=this.a.d3
C.b.F(p.a,p.d,j)
f=a4.db.gM()
for(p=this.dx.e,n=p.length,e=0,d=0;d<p.length;p.length===n||(0,H.v)(p),++d){c=p[d]
m=this.a.bD
if(e>=m.length)return H.d(m,e)
b=m[e]
m=f.bV(c.a)
g=m.a
a=m.b
a0=m.c
a0=m.C(0,Math.sqrt(g*g+a*a+a0*a0))
a=b.b
g=a0.a
m=a0.b
a0=a0.c
C.b.m(a.a,a.d,g,m,a0)
a0=c.c
m=b.c
C.b.m(m.a,m.d,a0.a,a0.b,a0.c);++e}}if(r.Q>0){j=this.dx.f.length
p=this.a.d4
C.b.F(p.a,p.d,j)
f=a4.db.gM()
for(p=this.dx.f,n=p.length,e=0,d=0;d<p.length;p.length===n||(0,H.v)(p),++d){c=p[d]
m=this.a.bE
if(e>=m.length)return H.d(m,e)
b=m[e]
m=c.gaG(c)
g=b.b
C.b.m(g.a,g.d,m.a,m.b,m.c)
m=f.aJ(c.gaG(c))
g=b.c
C.b.m(g.a,g.d,m.a,m.b,m.c)
m=c.gaj(c)
g=b.d
C.b.m(g.a,g.d,m.a,m.b,m.c)
m=c.gbs()
g=b.e
C.b.B(g.a,g.d,m)
m=c.gbt()
g=b.f
C.b.B(g.a,g.d,m)
m=c.gbu()
g=b.r
C.b.B(g.a,g.d,m);++e}}if(r.ch>0){j=this.dx.r.length
p=this.a.d5
C.b.F(p.a,p.d,j)
f=a4.db.gM()
for(p=this.dx.r,n=p.length,e=0,d=0;d<p.length;p.length===n||(0,H.v)(p),++d){c=p[d]
m=this.a.bF
if(e>=m.length)return H.d(m,e)
b=m[e]
m=c.gaG(c)
g=b.b
C.b.m(g.a,g.d,m.a,m.b,m.c)
m=c.gbB(c).iT()
g=b.c
C.b.m(g.a,g.d,m.a,m.b,m.c)
m=f.aJ(c.gaG(c))
g=b.d
C.b.m(g.a,g.d,m.a,m.b,m.c)
m=c.gaj(c)
g=b.e
C.b.m(g.a,g.d,m.a,m.b,m.c)
m=c.giR()
g=b.f
C.b.B(g.a,g.d,m)
m=c.giQ()
g=b.r
C.b.B(g.a,g.d,m)
m=c.gbs()
g=b.x
C.b.B(g.a,g.d,m)
m=c.gbt()
g=b.y
C.b.B(g.a,g.d,m)
m=c.gbu()
g=b.z
C.b.B(g.a,g.d,m);++e}}if(r.cx>0){j=this.dx.x.length
p=this.a.d6
C.b.F(p.a,p.d,j)
f=a4.db.gM()
for(p=this.dx.x,n=p.length,m=[u],e=0,d=0;d<p.length;p.length===n||(0,H.v)(p),++d){c=p[d]
g=this.a.bG
if(e>=g.length)return H.d(g,e)
b=g[e]
g=c.gaH()
H.h(k,"$ia",m,"$aa")
if(!C.a.ar(k,g)){g.a=k.length
C.a.h(k,g)}g=c.gbB(c)
a=b.d
C.b.m(a.a,a.d,g.a,g.b,g.c)
g=c.giL()
a=b.b
C.b.m(a.a,a.d,g.a,g.b,g.c)
g=c.giz(c)
a=b.c
C.b.m(a.a,a.d,g.a,g.b,g.c)
g=f.bV(c.gbB(c))
a=g.a
a0=g.b
a1=g.c
a1=g.C(0,Math.sqrt(a*a+a0*a0+a1*a1))
a0=b.e
a=a1.a
g=a1.b
a1=a1.c
C.b.m(a0.a,a0.d,a,g,a1)
a1=c.gaj(c)
g=b.f
C.b.m(g.a,g.d,a1.a,a1.b,a1.c)
a1=c.gaH()
g=a1.gV(a1)
if(!g){g=b.x
C.b.F(g.a,g.d,1)}else{g=b.r
a=a1.gV(a1)
a0=g.a
g=g.d
if(!a)C.b.F(a0,g,0)
else C.b.F(a0,g,a1.a)
g=b.x
C.b.F(g.a,g.d,0)}++e}}if(r.cy>0){j=this.dx.y.length
p=this.a.d7
C.b.F(p.a,p.d,j)
f=a4.db.gM()
for(p=this.dx.y,n=p.length,m=[P.q],g=[u],e=0,d=0;d<p.length;p.length===n||(0,H.v)(p),++d){c=p[d]
a=this.a.bH
if(e>=a.length)return H.d(a,e)
b=a[e]
a=c.gaH()
H.h(k,"$ia",g,"$aa")
if(!C.a.ar(k,a)){a.a=k.length
C.a.h(k,a)}a2=f.O(0,c.gM())
a=c.gM()
a0=$.bH
if(a0==null){a0=new V.ah(0,0,0)
$.bH=a0}a0=a.aJ(a0)
a=b.b
C.b.m(a.a,a.d,a0.a,a0.b,a0.c)
a=$.bH
if(a==null){a=new V.ah(0,0,0)
$.bH=a}a=a2.aJ(a)
a0=b.c
C.b.m(a0.a,a0.d,a.a,a.b,a.c)
a=a2.da()
a0=b.d
h=new Float32Array(H.c5(H.h(new V.cF(a.a,a.b,a.c,a.e,a.f,a.r,a.y,a.z,a.Q).a0(0,!0),"$ia",m,"$aa")))
C.b.dA(a0.a,a0.d,!1,h)
a0=c.gaj(c)
a=b.e
C.b.m(a.a,a.d,a0.a,a0.b,a0.c)
a0=c.gaH()
a=a0.gV(a0)
if(!a){a=b.r
C.b.F(a.a,a.d,1)}else{a=b.f
a1=a0.gV(a0)
a3=a.a
a=a.d
if(!a1)C.b.F(a3,a,0)
else C.b.F(a3,a,a0.giS(a0))
a=b.r
C.b.F(a.a,a.d,0)}a=c.gbs()
a0=b.x
C.b.B(a0.a,a0.d,a)
a=c.gbt()
a0=b.y
C.b.B(a0.a,a0.d,a)
a=c.gbu()
a0=b.z
C.b.B(a0.a,a0.d,a);++e}}if(r.db>0){j=this.dx.z.length
p=this.a.d8
C.b.F(p.a,p.d,j)
f=a4.db.gM()
for(p=this.dx.z,n=p.length,u=[u],e=0,d=0;d<p.length;p.length===n||(0,H.v)(p),++d){c=p[d]
m=this.a.bI
if(e>=m.length)return H.d(m,e)
b=m[e]
m=c.gaH()
H.h(k,"$ia",u,"$aa")
if(!C.a.ar(k,m)){m.a=k.length
C.a.h(k,m)}m=c.gaG(c)
g=b.b
C.b.m(g.a,g.d,m.a,m.b,m.c)
m=c.gbB(c)
g=b.c
C.b.m(g.a,g.d,m.a,m.b,m.c)
m=c.giL()
g=b.d
C.b.m(g.a,g.d,m.a,m.b,m.c)
m=c.giz(c)
g=b.e
C.b.m(g.a,g.d,m.a,m.b,m.c)
m=f.aJ(c.gaG(c))
g=b.f
C.b.m(g.a,g.d,m.a,m.b,m.c)
m=c.gaH()
g=m.gV(m)
if(!g){m=b.x
C.b.F(m.a,m.d,1)}else{g=b.r
a=m.gV(m)
a0=g.a
g=g.d
if(!a)C.b.F(a0,g,0)
else C.b.F(a0,g,m.a)
m=b.x
C.b.F(m.a,m.d,0)}m=c.gaj(c)
g=b.y
C.b.m(g.a,g.d,m.a,m.b,m.c)
m=c.giU()
g=b.z
C.b.B(g.a,g.d,m)
m=c.giV()
g=b.Q
C.b.B(g.a,g.d,m)
m=c.gbs()
g=b.ch
C.b.B(g.a,g.d,m)
m=c.gbt()
g=b.cx
C.b.B(g.a,g.d,m)
m=c.gbu()
g=b.cy
C.b.B(g.a,g.d,m);++e}}}switch(r.f){case C.c:break
case C.f:break
case C.d:this.J(k,this.Q.d)
u=this.a
p=this.Q.d
u.a1(u.cU,u.aZ,p)
break
case C.e:this.J(k,this.Q.e)
u=this.a
p=this.Q.e
u.W(u.cV,u.aZ,p)
break}if(r.fr){u=this.a
p=a4.Q
if(p==null){p=a4.db.gM().da()
a4.Q=p}u=u.id
u.toString
u.a5(p.a0(0,!0))}if(r.dy){this.J(k,this.ch)
u=this.a
p=this.ch
u.W(u.cW,u.cX,p)
switch(r.r){case C.c:break
case C.f:u=this.a
p=this.cx.f
u=u.b_
u.toString
n=p.a
m=p.b
p=p.c
C.b.m(u.a,u.d,n,m,p)
break
case C.d:this.J(k,this.cx.d)
u=this.a
p=this.cx.d
u.a1(u.cY,u.b0,p)
p=this.a
u=this.cx.f
p=p.b_
p.toString
n=u.a
m=u.b
u=u.c
C.b.m(p.a,p.d,n,m,u)
break
case C.e:this.J(k,this.cx.e)
u=this.a
p=this.cx.e
u.W(u.cZ,u.b0,p)
p=this.a
u=this.cx.f
p=p.b_
p.toString
n=u.a
m=u.b
u=u.c
C.b.m(p.a,p.d,n,m,u)
break}switch(r.x){case C.c:break
case C.f:u=this.a
p=this.cy.f
u=u.b2
u.toString
n=p.a
m=p.b
p=p.c
C.b.m(u.a,u.d,n,m,p)
p=this.a
m=this.cy.ch
p=p.b1
C.b.B(p.a,p.d,m)
break
case C.d:this.J(k,this.cy.d)
u=this.a
p=this.cy.d
u.a1(u.d_,u.b3,p)
p=this.a
u=this.cy.f
p=p.b2
p.toString
n=u.a
m=u.b
u=u.c
C.b.m(p.a,p.d,n,m,u)
u=this.a
m=this.cy.ch
u=u.b1
C.b.B(u.a,u.d,m)
break
case C.e:this.J(k,this.cy.e)
u=this.a
p=this.cy.e
u.W(u.d0,u.b3,p)
p=this.a
u=this.cy.f
p=p.b2
p.toString
n=u.a
m=u.b
u=u.c
C.b.m(p.a,p.d,n,m,u)
u=this.a
m=this.cy.ch
u=u.b1
C.b.B(u.a,u.d,m)
break}}u=r.y
p=u!==C.c
if(p){switch(u){case C.c:break
case C.f:u=this.a
n=this.db.f
u=u.b4
C.b.B(u.a,u.d,n)
break
case C.d:this.J(k,this.db.d)
u=this.a
n=this.db.d
u.a1(u.d1,u.b5,n)
n=this.a
u=this.db.f
n=n.b4
C.b.B(n.a,n.d,u)
break
case C.e:this.J(k,this.db.e)
u=this.a
n=this.db.e
u.W(u.d2,u.b5,n)
n=this.a
u=this.db.f
n=n.b4
C.b.B(n.a,n.d,u)
break}C.b.bC(o,3042)
C.b.hA(o,770,771)}for(i=0;i<k.length;++i){u=k[i]
if(u.d==null){n=u.c
u.d=n
if(n!=null)n.ai(a4)}}u=a5.e
u.ai(a4)
u.av(a4)
u.aK(a4)
if(p)C.b.hS(o,3042)
for(i=0;i<k.length;++i){u=k[i]
p=u.d
if(p!=null){p.aK(a4)
u.d=null}}u=this.a
u.toString
C.b.dC(o,null)
u.x.hT()},
i:function(a){var u=this.a
if(u!=null)return u.b
else return this.cj().a2},
sel:function(a){this.e=H.h(a,"$iN",[V.a_],"$aN")}}
O.ea.prototype={
fL:function(a){var u=this.f
if(!(Math.abs(u-a)<$.C().a)){this.f=a
u=new D.G(this.b,u,a,this,[P.q])
u.b=!0
this.a.N(u)}},
a8:function(){this.c3()
this.fL(1)}}
O.bD.prototype={
N:function(a){this.a.N(H.l(a,"$iy"))},
bb:function(){return this.N(null)},
a8:function(){},
fO:function(a){var u,t
u=this.d
if(u!=a){if(u!=null)u.gu().w(0,this.gaL())
t=this.d
this.d=a
if(a!=null)a.gu().h(0,this.gaL())
u=new D.G(this.b+".texture2D",t,this.d,this,[T.aX])
u.b=!0
this.a.N(u)}},
fP:function(a){},
sdu:function(a){var u=this.c
if(u!==C.d){if(u===C.c)this.a8()
this.c=C.d
this.fP(null)
u=this.a
u.a=null
u.N(null)}this.fO(a)}}
O.eb.prototype={}
O.as.prototype={
cA:function(a){var u,t
if(!J.L(this.f,a)){u=this.f
this.f=a
t=new D.G(this.b+".color",u,a,this,[V.R])
t.b=!0
this.a.N(t)}},
a8:function(){this.c3()
this.cA(new V.R(1,1,1))},
saj:function(a,b){var u
if(this.c===C.c){this.c=C.f
this.a8()
u=this.a
u.a=null
u.N(null)}this.cA(b)}}
O.ed.prototype={
fM:function(a){var u=this.ch
if(!(Math.abs(u-a)<$.C().a)){this.ch=a
u=new D.G(this.b+".refraction",u,a,this,[P.q])
u.b=!0
this.a.N(u)}},
a8:function(){this.c4()
this.fM(1)}}
O.ee.prototype={
fN:function(a){var u=this.ch
if(!(Math.abs(u-a)<$.C().a)){this.ch=a
u=new D.G(this.b+".shininess",u,a,this,[P.q])
u.b=!0
this.a.N(u)}},
a8:function(){this.c4()
this.fN(100)}}
O.bf.prototype={}
T.bM.prototype={}
T.aX.prototype={}
T.eK.prototype={
gV:function(a){var u=this.d
u=u==null?null:u.gV(u)
if(u==null){u=this.c
u=u==null?null:u.gV(u)}return u===!0},
gu:function(){var u=this.f
if(u==null){u=D.af()
this.f=u}return u},
ai:function(a){var u
if(this.d==null){u=this.c
this.d=u
if(u!=null)u.ai(a)}},
aK:function(a){var u=this.d
if(u!=null){u.aK(a)
this.d=null}},
sh2:function(a){this.e=H.h(a,"$ia",[T.aX],"$aa")}}
T.eL.prototype={
gV:function(a){return this.d},
ai:function(a){var u
if(!this.c&&this.d){this.c=!0
u=a.a
C.b.cE(u,33984+this.a)
C.b.ap(u,3553,this.b)}},
aK:function(a){var u
if(this.c){this.c=!1
u=a.a
C.b.cE(u,33984+this.a)
C.b.ap(u,3553,null)}}}
T.eM.prototype={
i6:function(a,b,c,d,e){var u,t,s,r
u=this.a
t=u.createTexture()
C.b.ap(u,3553,t)
C.b.b6(u,3553,10242,33071)
C.b.b6(u,3553,10243,33071)
C.b.b6(u,3553,10241,9729)
C.b.b6(u,3553,10240,9729)
C.b.ap(u,3553,null);++this.d
s=document.createElement("img")
s.src=a
r=new T.eL()
r.a=0
r.b=t
r.c=!1
r.d=!1
r.e=0
r.f=0
r.r=0
r.x=0
u=W.e
W.T(s,"load",H.j(new T.eN(this,r,s,!1,t,!1,!1),{func:1,ret:-1,args:[u]}),!1,u)
return r},
at:function(a){return this.i6(a,!1,!1,!1,!1)},
fJ:function(a,b,c){var u,t,s,r
b=V.hC(b,2)
u=V.hC(a.width,2)
t=V.hC(a.height,2)
u=Math.min(u,b)
t=Math.min(t,b)
if(a.width===u&&a.height===t)return a
else{s=W.hd(null,null)
s.width=u
s.height=t
r=H.l(C.m.dJ(s,"2d"),"$ib3")
r.imageSmoothingEnabled=!1;(r&&C.r).hV(r,a,0,0,s.width,s.height)
return P.jW(C.r.eG(r,0,0,s.width,s.height))}}}
T.eN.prototype={
$1:function(a){var u,t,s,r
u=this.b
t=this.c
u.e=t.width
u.f=t.height
s=this.a
r=s.fJ(t,s.b,this.d)
u.r=t.width
u.x=t.height
t=s.a
C.b.ap(t,3553,this.e)
C.b.ir(t,37440,this.f?1:0)
C.b.iD(t,3553,0,6408,6408,5121,r)
if(this.r)C.b.dF(t,3553)
C.b.ap(t,3553,null)
if(!u.d){u.d=!0
u=u.y
if(u!=null)u.cN()}++s.e},
$S:10}
V.dt.prototype={
au:function(a){return!0},
i:function(a){return"all"},
$iaB:1}
V.aB.prototype={}
V.cD.prototype={
au:function(a){var u,t,s
for(u=this.a,t=u.length,s=0;s<u.length;u.length===t||(0,H.v)(u),++s)if(u[s].au(a))return!0
return!1},
i:function(a){var u,t,s,r,q
for(u=this.a,t=u.length,s="",r=0;r<u.length;u.length===t||(0,H.v)(u),++r){q=u[r]
if(s.length!==0)s+=", "
s+=q.i(0)}return s},
sag:function(a){this.a=H.h(a,"$ia",[V.aB],"$aa")},
$iaB:1}
V.aF.prototype={
au:function(a){return!this.dW(a)},
i:function(a){return"!["+this.c2(0)+"]"}}
V.ev.prototype={
e_:function(a){var u,t
if(a.a.length<=0)throw H.i(P.o("May not create a SetMatcher with zero characters."))
u=new H.az([P.u,P.X])
for(t=new H.cC(a,a.gl(a),0,[H.al(a,"J",0)]);t.v();)u.T(0,t.d,!0)
this.sfK(u)},
au:function(a){return this.a.cK(a)},
i:function(a){var u=this.a
return P.hm(new H.e0(u,[H.r(u,0)]),0,null)},
sfK:function(a){this.a=H.h(a,"$iar",[P.u,P.X],"$aar")},
$iaB:1}
V.bK.prototype={
t:function(a,b){var u,t,s,r
for(u=this.c,t=u.length,s=0;s<t;++s){r=u[s]
if(r.b.b===b)return r}r=new V.bO(this.a.D(0,b))
r.sag(H.b([],[V.aB]))
r.c=!1
C.a.h(this.c,r)
return r},
hX:function(a){var u,t,s,r
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.v)(u),++s){r=u[s]
if(r.au(a))return r}return},
i:function(a){return this.b},
sh4:function(a){this.c=H.h(a,"$ia",[V.bO],"$aa")}}
V.d4.prototype={
i:function(a){var u,t
u=H.iG(this.b,"\n","\\n")
t=H.iG(u,"\t","\\t")
return this.a+":"+this.c+':"'+t+'"'}}
V.bN.prototype={
i:function(a){return this.b},
sfF:function(a){var u=P.t
this.c=H.h(a,"$iar",[u,u],"$aar")}}
V.eP.prototype={
D:function(a,b){var u=this.a.j(0,b)
if(u==null){u=new V.bK(this,b)
u.sh4(H.b([],[V.bO]))
u.d=null
this.a.T(0,b,u)}return u},
aI:function(a){var u,t
u=this.b.j(0,a)
if(u==null){u=new V.bN(this,a)
t=P.t
u.sfF(new H.az([t,t]))
this.b.T(0,a,u)}return u},
iK:function(a){var u,t,s,r,q,p,o,n,m,l,k,j
u=H.b([],[V.d4])
t=this.c
s=[P.u]
r=H.b([],s)
for(q=a.length,p=null,o=0;!0;){if(o>=q){if(p!=null)C.a.h(u,p)
return u}n=C.j.aM(a,o)
m=t.hX(n)
if(m==null){if(p==null){C.a.h(r,n)
l=P.hm(r,0,null)
throw H.i(P.o("Untokenizable string [state: "+t.b+", index "+o+']: "'+l+'"'))}C.a.h(u,p)
o=p.c+1
r=H.b([],s)
t=this.c
p=null}else{if(!m.c)C.a.h(r,n)
t=m.b
if(t.d!=null){l=P.hm(r,0,null)
k=t.d
j=k.c.j(0,l)
p=new V.d4(j==null?k.b:j,l,o)}++o}}},
sfZ:function(a){this.a=H.h(a,"$iar",[P.t,V.bK],"$aar")},
sh3:function(a){this.b=H.h(a,"$iar",[P.t,V.bN],"$aar")}}
V.bO.prototype={
i:function(a){return this.b.b+": "+this.c2(0)}}
X.cl.prototype={$iaE:1}
X.dS.prototype={
gu:function(){var u=this.x
if(u==null){u=D.af()
this.x=u}return u}}
X.cM.prototype={
gu:function(){var u=this.f
if(u==null){u=D.af()
this.f=u}return u},
al:function(a){var u
H.l(a,"$iy")
u=this.f
if(u!=null)u.K(a)},
ef:function(){return this.al(null)},
saD:function(a){var u,t
if(!J.L(this.b,a)){u=this.b
if(u!=null)u.gu().w(0,this.gc9())
t=this.b
this.b=a
if(a!=null)a.gu().h(0,this.gc9())
u=new D.G("mover",t,this.b,this,[U.ba])
u.b=!0
this.al(u)}},
$iaE:1,
$icl:1}
X.cZ.prototype={}
V.h9.prototype={
$1:function(a){H.l(a,"$ia6")
P.hD(C.i.dw(this.a.gi_(),2)+" fps")},
$S:31}
V.ez.prototype={
e1:function(a,b){var u,t,s,r,q,p,o
u=document
t=u.body
s=u.createElement("div")
s.className="scrollTop";(t&&C.q).P(t,s)
r=u.createElement("div")
r.className="scrollPage"
C.q.P(t,r)
q=u.createElement("div")
q.className="pageCenter"
C.l.P(r,q)
if(a.length!==0){u.title=a
p=u.createElement("div")
p.className="pageTitle"
p.textContent=a
C.l.P(q,p)}o=u.createElement("div")
this.a=o
C.l.P(q,o)
this.b=null
o=W.e
W.T(u,"scroll",H.j(new V.eB(s),{func:1,ret:-1,args:[o]}),!1,o)},
cF:function(a){var u,t,s,r,q,p,o,n,m,l,k
H.h(a,"$ia",[P.t],"$aa")
this.fU()
u=document
t=u.createElement("div")
t.className="textPar"
for(s=this.b.iK(C.a.i3(a)),r=s.length,q=0;q<s.length;s.length===r||(0,H.v)(s),++q){p=s[q]
switch(p.a){case"Bold":o=u.createElement("div")
o.className="boldPar"
o.textContent=p.b
C.l.P(t,o)
break
case"Italic":o=u.createElement("div")
o.className="italicPar"
o.textContent=p.b
C.l.P(t,o)
break
case"Code":o=u.createElement("div")
o.className="codePar"
o.textContent=p.b
C.l.P(t,o)
break
case"Link":n=p.b
if(H.ke(n,"|",0)){m=n.split("|")
l=u.createElement("a")
l.className="linkPar"
if(1>=m.length)return H.d(m,1)
l.href=H.M(m[1])
l.textContent=H.M(m[0])
C.l.P(t,l)}else{k=P.jH(C.M,n,C.w,!1)
l=u.createElement("a")
l.className="linkPar"
l.href="#"+k
l.textContent=n
C.l.P(t,l)}break
case"Other":o=u.createElement("div")
o.className="normalPar"
o.textContent=p.b
C.l.P(t,o)
break}}C.l.P(this.a,t)},
fU:function(){var u,t,s,r
if(this.b!=null)return
u=new V.eP()
t=P.t
u.sfZ(new H.az([t,V.bK]))
u.sh3(new H.az([t,V.bN]))
u.c=null
u.c=u.D(0,"Start")
t=u.D(0,"Start").t(0,"Bold")
s=V.W(new H.P("*"))
C.a.h(t.a,s)
t.c=!0
t=u.D(0,"Bold").t(0,"Bold")
s=new V.aF()
r=[V.aB]
s.sag(H.b([],r))
C.a.h(t.a,s)
t=V.W(new H.P("*"))
C.a.h(s.a,t)
t=u.D(0,"Bold").t(0,"BoldEnd")
s=V.W(new H.P("*"))
C.a.h(t.a,s)
t.c=!0
t=u.D(0,"Start").t(0,"Italic")
s=V.W(new H.P("_"))
C.a.h(t.a,s)
t.c=!0
t=u.D(0,"Italic").t(0,"Italic")
s=new V.aF()
s.sag(H.b([],r))
C.a.h(t.a,s)
t=V.W(new H.P("_"))
C.a.h(s.a,t)
t=u.D(0,"Italic").t(0,"ItalicEnd")
s=V.W(new H.P("_"))
C.a.h(t.a,s)
t.c=!0
t=u.D(0,"Start").t(0,"Code")
s=V.W(new H.P("`"))
C.a.h(t.a,s)
t.c=!0
t=u.D(0,"Code").t(0,"Code")
s=new V.aF()
s.sag(H.b([],r))
C.a.h(t.a,s)
t=V.W(new H.P("`"))
C.a.h(s.a,t)
t=u.D(0,"Code").t(0,"CodeEnd")
s=V.W(new H.P("`"))
C.a.h(t.a,s)
t.c=!0
t=u.D(0,"Start").t(0,"LinkHead")
s=V.W(new H.P("["))
C.a.h(t.a,s)
t.c=!0
t=u.D(0,"LinkHead").t(0,"LinkTail")
s=V.W(new H.P("|"))
C.a.h(t.a,s)
s=u.D(0,"LinkHead").t(0,"LinkEnd")
t=V.W(new H.P("]"))
C.a.h(s.a,t)
s.c=!0
s=u.D(0,"LinkHead").t(0,"LinkHead")
t=new V.aF()
t.sag(H.b([],r))
C.a.h(s.a,t)
s=V.W(new H.P("|]"))
C.a.h(t.a,s)
s=u.D(0,"LinkTail").t(0,"LinkEnd")
t=V.W(new H.P("]"))
C.a.h(s.a,t)
s.c=!0
s=u.D(0,"LinkTail").t(0,"LinkTail")
t=new V.aF()
t.sag(H.b([],r))
C.a.h(s.a,t)
s=V.W(new H.P("|]"))
C.a.h(t.a,s)
C.a.h(u.D(0,"Start").t(0,"Other").a,new V.dt())
s=u.D(0,"Other").t(0,"Other")
t=new V.aF()
t.sag(H.b([],r))
C.a.h(s.a,t)
s=V.W(new H.P("*_`["))
C.a.h(t.a,s)
s=u.D(0,"BoldEnd")
s.d=s.a.aI("Bold")
s=u.D(0,"ItalicEnd")
s.d=s.a.aI("Italic")
s=u.D(0,"CodeEnd")
s.d=s.a.aI("Code")
s=u.D(0,"LinkEnd")
s.d=s.a.aI("Link")
s=u.D(0,"Other")
s.d=s.a.aI("Other")
this.b=u}}
V.eB.prototype={
$1:function(a){P.i7(C.n,new V.eA(this.a))},
$S:10}
V.eA.prototype={
$0:function(){var u,t,s
u=C.i.a4(document.documentElement.scrollTop)
t=this.a.style
s=H.f(-0.01*u)+"px"
t.top=s},
$S:1}
N.h6.prototype={
$1:function(a){var u,t,s,r
H.l(a,"$ia6")
u=this.a
t=u.b
s=u.e
r=s.length
t=(t+1)%r
if(t<r){u.b=t
u.c=H.l(s[t],"$iaX")
u=u.f
if(u!=null)u.cN()}return},
$S:32};(function aliases(){var u=J.U.prototype
u.dU=u.i
u=J.cz.prototype
u.dV=u.i
u=O.bD.prototype
u.c3=u.a8
u=O.as.prototype
u.c4=u.a8
u=V.cD.prototype
u.dW=u.au
u.c2=u.i})();(function installTearOffs(){var u=hunkHelpers._static_1,t=hunkHelpers._static_0,s=hunkHelpers.installInstanceTearOff,r=hunkHelpers._instance_2u,q=hunkHelpers._instance_0u,p=hunkHelpers._instance_1u,o=hunkHelpers._instance_0i
u(P,"jQ","jB",7)
u(P,"jR","jC",7)
u(P,"jS","jD",7)
t(P,"iv","jP",2)
var n
s(n=E.a2.prototype,"gdi",0,0,null,["$1","$0"],["dj","ih"],0,0)
s(n,"gdg",0,0,null,["$1","$0"],["dh","ig"],0,0)
s(n,"gde",0,0,null,["$1","$0"],["df","ib"],0,0)
r(n,"gi9","ia",5)
r(n,"gic","ie",5)
s(n=E.d3.prototype,"gc6",0,0,null,["$1","$0"],["c8","c7"],0,0)
q(n,"gix","dq",2)
p(n=X.da.prototype,"gf4","f5",9)
p(n,"geT","eU",9)
p(n,"geZ","f_",3)
p(n,"gf8","f9",18)
p(n,"gf6","f7",18)
p(n,"gfc","fd",3)
p(n,"gfg","fh",3)
p(n,"gf2","f3",3)
p(n,"gfe","ff",3)
p(n,"gf0","f1",3)
p(n,"gfi","fj",22)
p(n,"gfk","fl",9)
p(n,"gfw","fz",6)
p(n,"gfs","ft",6)
p(n,"gfu","fv",6)
s(D.aP.prototype,"ge3",0,0,null,["$1","$0"],["ac","e4"],0,0)
s(n=D.cB.prototype,"gcr",0,0,null,["$1","$0"],["cs","fa"],0,0)
p(n,"gfn","fo",24)
r(n,"geN","eO",12)
r(n,"gfp","fq",12)
o(V.aG.prototype,"gl","bN",17)
o(V.F.prototype,"gl","bN",17)
s(n=M.cq.prototype,"ga6",0,0,null,["$1","$0"],["ad","e6"],0,0)
r(n,"geV","eW",5)
r(n,"geX","eY",5)
s(n=O.cE.prototype,"gaL",0,0,null,["$1","$0"],["N","bb"],0,0)
s(n,"gfH",0,0,null,["$1","$0"],["cw","fI"],0,0)
r(n,"geP","eQ",11)
r(n,"geR","eS",11)
s(O.bD.prototype,"gaL",0,0,null,["$1","$0"],["N","bb"],0,0)
s(X.cM.prototype,"gc9",0,0,null,["$1","$0"],["al","ef"],0,0)})();(function inheritance(){var u=hunkHelpers.mixin,t=hunkHelpers.inherit,s=hunkHelpers.inheritMany
t(P.E,null)
s(P.E,[H.hj,J.U,J.ab,P.di,P.p,H.cC,P.ao,H.b8,H.d9,H.eo,H.eS,P.aR,H.br,H.dl,P.e6,H.e_,H.e1,H.dW,P.dm,P.ax,P.ad,P.dc,P.eF,P.bL,P.eG,P.a6,P.Z,P.fR,P.fN,P.bZ,P.fI,P.J,P.bs,P.fQ,P.X,P.aO,P.a4,P.aQ,P.em,P.cY,P.df,P.dR,P.a,P.z,P.a3,P.t,P.aW,W.dC,W.ag,W.cs,P.dq,O.N,O.bE,E.dx,E.a2,E.ep,E.d3,Z.db,Z.fl,Z.cj,Z.aT,Z.av,D.dA,D.b6,D.y,X.ck,X.cA,X.dY,X.e3,X.aD,X.ef,X.eQ,X.da,D.aP,D.O,D.cN,D.cX,D.d0,D.d1,D.d2,V.R,V.b4,V.dJ,V.cF,V.a_,V.a5,V.ah,V.cP,V.cT,V.aG,V.F,M.cq,A.cf,A.dw,A.ec,A.bP,A.bT,A.bR,A.bU,A.bS,A.bV,A.b5,A.d5,A.f1,F.S,F.dM,F.aA,F.dZ,F.aV,F.cW,F.ew,F.ex,F.ey,F.a9,F.f9,F.fa,F.fd,F.ff,F.fg,F.fh,O.bf,O.bD,T.eM,V.dt,V.aB,V.cD,V.ev,V.bK,V.d4,V.bN,V.eP,X.cl,X.cZ,X.cM,V.ez])
s(J.U,[J.dV,J.cx,J.cz,J.ap,J.cy,J.bC,H.cJ,W.b7,W.b3,W.dd,W.dE,W.cp,W.e,W.dg,W.aS,W.dj,W.at,W.dn,P.ch,P.ct,P.cQ,P.be,P.cV,P.d_,P.d6])
s(J.cz,[J.en,J.d7,J.aU])
t(J.hi,J.ap)
s(J.cy,[J.cw,J.cv])
t(P.e2,P.di)
s(P.e2,[H.d8,W.ft,W.fs,P.dN])
t(H.P,H.d8)
s(P.p,[H.dH,H.e7,H.fm])
s(P.ao,[H.e8,H.fn])
s(P.aR,[H.el,H.dX,H.f4,H.eU,H.dz,H.et,P.cL,P.am,P.f5,P.f3,P.eD,P.dB,P.dD])
s(H.br,[H.ha,H.eJ,H.h1,H.h2,H.h3,P.fp,P.fo,P.fq,P.fr,P.fP,P.fO,P.fx,P.fB,P.fy,P.fz,P.fA,P.fE,P.fF,P.fD,P.fC,P.eH,P.eI,P.fV,P.fL,P.fK,P.fM,P.e5,P.dF,P.dG,W.fw,P.fX,P.dO,P.dP,E.eq,E.er,E.es,E.eO,D.dL,F.fS,F.fj,F.fi,F.fb,F.fc,T.eN,V.h9,V.eB,V.eA,N.h6])
s(H.eJ,[H.eE,H.bp])
t(P.e4,P.e6)
t(H.az,P.e4)
t(H.e0,H.dH)
t(H.cG,H.cJ)
s(H.cG,[H.c_,H.c1])
t(H.c0,H.c_)
t(H.cH,H.c0)
t(H.c2,H.c1)
t(H.cI,H.c2)
s(H.cI,[H.eg,H.eh,H.ei,H.cK,H.ej])
t(P.fJ,P.fR)
t(P.fH,P.fN)
t(P.cn,P.eG)
t(P.dI,P.bs)
t(P.f6,P.dI)
t(P.f7,P.cn)
s(P.a4,[P.q,P.u])
s(P.am,[P.bd,P.dT])
s(W.b7,[W.D,W.bX])
s(W.D,[W.Q,W.aN,W.bw])
s(W.Q,[W.m,P.k])
s(W.m,[W.du,W.dv,W.cg,W.b2,W.bv,W.dQ,W.by,W.bF,W.eu])
t(W.bu,W.dd)
t(W.dh,W.dg)
t(W.b9,W.dh)
t(W.cu,W.bw)
t(W.aY,W.e)
s(W.aY,[W.aq,W.V,W.aj])
t(W.dk,W.dj)
t(W.bG,W.dk)
t(W.dp,W.dn)
t(W.eR,W.dp)
t(W.fk,W.bF)
t(W.aw,W.V)
t(W.de,W.cp)
t(W.fu,P.eF)
t(W.hr,W.fu)
t(W.fv,P.bL)
s(E.dx,[Z.ci,A.bJ,T.bM])
s(D.y,[D.bA,D.bB,D.G])
t(D.cB,O.N)
t(U.ba,D.dA)
s(U.ba,[U.cm,U.cU])
t(A.e9,A.bJ)
s(A.d5,[A.A,A.eY,A.eZ,A.f0,A.eW,A.I,A.eX,A.x,A.f_,A.f2,A.bQ,A.a7,A.a0,A.a1])
t(F.eC,F.dM)
t(F.eV,F.dZ)
t(F.fe,F.ff)
t(F.ek,F.fg)
t(O.cE,O.bf)
s(O.bD,[O.ea,O.eb,O.as])
s(O.as,[O.ed,O.ee])
t(T.aX,T.bM)
s(T.aX,[T.eK,T.eL])
s(V.cD,[V.aF,V.bO])
t(X.dS,X.cZ)
u(H.d8,H.d9)
u(H.c_,P.J)
u(H.c0,H.b8)
u(H.c1,P.J)
u(H.c2,H.b8)
u(P.di,P.J)
u(W.dd,W.dC)
u(W.dg,P.J)
u(W.dh,W.ag)
u(W.dj,P.J)
u(W.dk,W.ag)
u(W.dn,P.J)
u(W.dp,W.ag)})();(function constants(){var u=hunkHelpers.makeConstList
C.q=W.cg.prototype
C.m=W.b2.prototype
C.r=W.b3.prototype
C.l=W.bv.prototype
C.C=W.cu.prototype
C.D=J.U.prototype
C.a=J.ap.prototype
C.E=J.cv.prototype
C.h=J.cw.prototype
C.o=J.cx.prototype
C.i=J.cy.prototype
C.j=J.bC.prototype
C.L=J.aU.prototype
C.N=W.bG.prototype
C.v=J.en.prototype
C.b=P.be.prototype
C.p=J.d7.prototype
C.x=W.aw.prototype
C.y=W.bX.prototype
C.z=new P.em()
C.A=new P.f7()
C.k=new P.fJ()
C.c=new A.b5(0,"ColorSourceType.None")
C.f=new A.b5(1,"ColorSourceType.Solid")
C.d=new A.b5(2,"ColorSourceType.Texture2D")
C.e=new A.b5(3,"ColorSourceType.TextureCube")
C.n=new P.aQ(0)
C.B=new P.aQ(5e6)
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
C.M=H.b(u([0,0,65498,45055,65535,34815,65534,18431]),[P.u])
C.w=new P.f6(!1)})();(function staticFields(){$.an=0
$.bq=null
$.hJ=null
$.hs=!1
$.iA=null
$.it=null
$.iF=null
$.fY=null
$.h4=null
$.hA=null
$.bg=null
$.c6=null
$.c7=null
$.ht=!1
$.H=C.k
$.hU=null
$.hY=null
$.bH=null
$.i2=null
$.ic=null
$.ig=null
$.ie=null
$.f8=null
$.id=null
$.hX=null})();(function lazyInitializers(){var u=hunkHelpers.lazy
u($,"kl","iJ",function(){return H.iz("_$dart_dartClosure")})
u($,"km","hF",function(){return H.iz("_$dart_js")})
u($,"kq","iK",function(){return H.au(H.eT({
toString:function(){return"$receiver$"}}))})
u($,"kr","iL",function(){return H.au(H.eT({$method$:null,
toString:function(){return"$receiver$"}}))})
u($,"ks","iM",function(){return H.au(H.eT(null))})
u($,"kt","iN",function(){return H.au(function(){var $argumentsExpr$='$arguments$'
try{null.$method$($argumentsExpr$)}catch(t){return t.message}}())})
u($,"kw","iQ",function(){return H.au(H.eT(void 0))})
u($,"kx","iR",function(){return H.au(function(){var $argumentsExpr$='$arguments$'
try{(void 0).$method$($argumentsExpr$)}catch(t){return t.message}}())})
u($,"kv","iP",function(){return H.au(H.ia(null))})
u($,"ku","iO",function(){return H.au(function(){try{null.$method$}catch(t){return t.message}}())})
u($,"kz","iT",function(){return H.au(H.ia(void 0))})
u($,"ky","iS",function(){return H.au(function(){try{(void 0).$method$}catch(t){return t.message}}())})
u($,"kP","hG",function(){return P.jA()})
u($,"kR","cb",function(){return[]})
u($,"kQ","iX",function(){return P.js("^[\\-\\.0-9A-Z_a-z~]*$",!0,!1)})
u($,"kI","iW",function(){return Z.ac(0)})
u($,"kC","iU",function(){return Z.ac(511)})
u($,"kK","aK",function(){return Z.ac(1)})
u($,"kJ","aJ",function(){return Z.ac(2)})
u($,"kE","aI",function(){return Z.ac(4)})
u($,"kL","aL",function(){return Z.ac(8)})
u($,"kM","aM",function(){return Z.ac(16)})
u($,"kF","c9",function(){return Z.ac(32)})
u($,"kG","ca",function(){return Z.ac(64)})
u($,"kH","iV",function(){return Z.ac(96)})
u($,"kN","bo",function(){return Z.ac(128)})
u($,"kD","aH",function(){return Z.ac(256)})
u($,"kk","iI",function(){return new V.dJ(1e-9)})
u($,"kj","C",function(){return $.iI()})})()
var v={mangledGlobalNames:{u:"int",q:"double",a4:"num",t:"String",X:"bool",z:"Null",a:"List"},mangledNames:{},getTypeFromName:getGlobalFromName,metadata:[],types:[{func:1,ret:-1,opt:[D.y]},{func:1,ret:P.z},{func:1,ret:-1},{func:1,ret:-1,args:[W.V]},{func:1,ret:P.z,args:[F.S]},{func:1,ret:-1,args:[P.u,[P.p,E.a2]]},{func:1,ret:-1,args:[W.aj]},{func:1,ret:-1,args:[{func:1,ret:-1}]},{func:1,ret:P.z,args:[D.y]},{func:1,ret:-1,args:[W.e]},{func:1,ret:P.z,args:[W.e]},{func:1,ret:-1,args:[P.u,[P.p,V.a_]]},{func:1,ret:-1,args:[P.u,[P.p,D.O]]},{func:1,ret:P.z,args:[,,]},{func:1,ret:P.t,args:[P.u]},{func:1,args:[,]},{func:1,ret:P.z,args:[,]},{func:1,ret:P.q},{func:1,ret:-1,args:[W.aq]},{func:1,ret:P.z,args:[P.a4]},{func:1,ret:W.Q,args:[W.D]},{func:1,ret:P.X,args:[W.D]},{func:1,ret:-1,args:[W.aw]},{func:1,ret:[P.ad,,],args:[,]},{func:1,ret:P.X,args:[[P.p,D.O]]},{func:1,ret:P.z,args:[,],opt:[P.a3]},{func:1,ret:P.z,args:[{func:1,ret:-1}]},{func:1,ret:P.z,args:[F.a9,P.q,P.q]},{func:1,args:[W.e]},{func:1,args:[P.t]},{func:1,args:[,P.t]},{func:1,ret:P.z,args:[P.a6]},{func:1,ret:-1,args:[P.a6]},{func:1,ret:P.z,args:[{func:1,ret:-1,args:[D.y]}]}],interceptorsByTag:null,leafTags:null};(function nativeSupport(){!function(){var u=function(a){var o={}
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
hunkHelpers.setOrUpdateInterceptorsByTag({DOMError:J.U,MediaError:J.U,Navigator:J.U,NavigatorConcurrentHardware:J.U,NavigatorUserMediaError:J.U,OverconstrainedError:J.U,PositionError:J.U,WebGLActiveInfo:J.U,WebGLRenderbuffer:J.U,WebGL2RenderingContext:J.U,SQLError:J.U,ArrayBufferView:H.cJ,Float32Array:H.cH,Int16Array:H.eg,Int32Array:H.eh,Uint32Array:H.ei,Uint8ClampedArray:H.cK,CanvasPixelArray:H.cK,Uint8Array:H.ej,HTMLBRElement:W.m,HTMLBaseElement:W.m,HTMLButtonElement:W.m,HTMLContentElement:W.m,HTMLDListElement:W.m,HTMLDataElement:W.m,HTMLDataListElement:W.m,HTMLDetailsElement:W.m,HTMLDialogElement:W.m,HTMLEmbedElement:W.m,HTMLFieldSetElement:W.m,HTMLHRElement:W.m,HTMLHeadElement:W.m,HTMLHeadingElement:W.m,HTMLHtmlElement:W.m,HTMLIFrameElement:W.m,HTMLInputElement:W.m,HTMLLIElement:W.m,HTMLLabelElement:W.m,HTMLLegendElement:W.m,HTMLLinkElement:W.m,HTMLMapElement:W.m,HTMLMenuElement:W.m,HTMLMetaElement:W.m,HTMLMeterElement:W.m,HTMLModElement:W.m,HTMLOListElement:W.m,HTMLObjectElement:W.m,HTMLOptGroupElement:W.m,HTMLOptionElement:W.m,HTMLOutputElement:W.m,HTMLParagraphElement:W.m,HTMLParamElement:W.m,HTMLPictureElement:W.m,HTMLPreElement:W.m,HTMLProgressElement:W.m,HTMLQuoteElement:W.m,HTMLScriptElement:W.m,HTMLShadowElement:W.m,HTMLSlotElement:W.m,HTMLSourceElement:W.m,HTMLSpanElement:W.m,HTMLStyleElement:W.m,HTMLTableCaptionElement:W.m,HTMLTableCellElement:W.m,HTMLTableDataCellElement:W.m,HTMLTableHeaderCellElement:W.m,HTMLTableColElement:W.m,HTMLTableElement:W.m,HTMLTableRowElement:W.m,HTMLTableSectionElement:W.m,HTMLTemplateElement:W.m,HTMLTextAreaElement:W.m,HTMLTimeElement:W.m,HTMLTitleElement:W.m,HTMLTrackElement:W.m,HTMLUListElement:W.m,HTMLUnknownElement:W.m,HTMLDirectoryElement:W.m,HTMLFontElement:W.m,HTMLFrameElement:W.m,HTMLFrameSetElement:W.m,HTMLMarqueeElement:W.m,HTMLElement:W.m,HTMLAnchorElement:W.du,HTMLAreaElement:W.dv,HTMLBodyElement:W.cg,HTMLCanvasElement:W.b2,CanvasRenderingContext2D:W.b3,CDATASection:W.aN,CharacterData:W.aN,Comment:W.aN,ProcessingInstruction:W.aN,Text:W.aN,CSSStyleDeclaration:W.bu,MSStyleCSSProperties:W.bu,CSS2Properties:W.bu,HTMLDivElement:W.bv,XMLDocument:W.bw,Document:W.bw,DOMException:W.dE,DOMRectReadOnly:W.cp,Element:W.Q,AbortPaymentEvent:W.e,AnimationEvent:W.e,AnimationPlaybackEvent:W.e,ApplicationCacheErrorEvent:W.e,BackgroundFetchClickEvent:W.e,BackgroundFetchEvent:W.e,BackgroundFetchFailEvent:W.e,BackgroundFetchedEvent:W.e,BeforeInstallPromptEvent:W.e,BeforeUnloadEvent:W.e,BlobEvent:W.e,CanMakePaymentEvent:W.e,ClipboardEvent:W.e,CloseEvent:W.e,CustomEvent:W.e,DeviceMotionEvent:W.e,DeviceOrientationEvent:W.e,ErrorEvent:W.e,ExtendableEvent:W.e,ExtendableMessageEvent:W.e,FetchEvent:W.e,FontFaceSetLoadEvent:W.e,ForeignFetchEvent:W.e,GamepadEvent:W.e,HashChangeEvent:W.e,InstallEvent:W.e,MediaEncryptedEvent:W.e,MediaKeyMessageEvent:W.e,MediaQueryListEvent:W.e,MediaStreamEvent:W.e,MediaStreamTrackEvent:W.e,MessageEvent:W.e,MIDIConnectionEvent:W.e,MIDIMessageEvent:W.e,MutationEvent:W.e,NotificationEvent:W.e,PageTransitionEvent:W.e,PaymentRequestEvent:W.e,PaymentRequestUpdateEvent:W.e,PopStateEvent:W.e,PresentationConnectionAvailableEvent:W.e,PresentationConnectionCloseEvent:W.e,ProgressEvent:W.e,PromiseRejectionEvent:W.e,PushEvent:W.e,RTCDataChannelEvent:W.e,RTCDTMFToneChangeEvent:W.e,RTCPeerConnectionIceEvent:W.e,RTCTrackEvent:W.e,SecurityPolicyViolationEvent:W.e,SensorErrorEvent:W.e,SpeechRecognitionError:W.e,SpeechRecognitionEvent:W.e,SpeechSynthesisEvent:W.e,StorageEvent:W.e,SyncEvent:W.e,TrackEvent:W.e,TransitionEvent:W.e,WebKitTransitionEvent:W.e,VRDeviceEvent:W.e,VRDisplayEvent:W.e,VRSessionEvent:W.e,MojoInterfaceRequestEvent:W.e,ResourceProgressEvent:W.e,USBConnectionEvent:W.e,IDBVersionChangeEvent:W.e,AudioProcessingEvent:W.e,OfflineAudioCompletionEvent:W.e,WebGLContextEvent:W.e,Event:W.e,InputEvent:W.e,EventTarget:W.b7,HTMLFormElement:W.dQ,HTMLCollection:W.b9,HTMLFormControlsCollection:W.b9,HTMLOptionsCollection:W.b9,HTMLDocument:W.cu,ImageData:W.aS,HTMLImageElement:W.by,KeyboardEvent:W.aq,HTMLAudioElement:W.bF,HTMLMediaElement:W.bF,PointerEvent:W.V,MouseEvent:W.V,DragEvent:W.V,DocumentFragment:W.D,ShadowRoot:W.D,Attr:W.D,DocumentType:W.D,Node:W.D,NodeList:W.bG,RadioNodeList:W.bG,HTMLSelectElement:W.eu,Touch:W.at,TouchEvent:W.aj,TouchList:W.eR,CompositionEvent:W.aY,FocusEvent:W.aY,TextEvent:W.aY,UIEvent:W.aY,HTMLVideoElement:W.fk,WheelEvent:W.aw,Window:W.bX,DOMWindow:W.bX,ClientRect:W.de,DOMRect:W.de,SVGAElement:P.k,SVGAnimateElement:P.k,SVGAnimateMotionElement:P.k,SVGAnimateTransformElement:P.k,SVGAnimationElement:P.k,SVGCircleElement:P.k,SVGClipPathElement:P.k,SVGDefsElement:P.k,SVGDescElement:P.k,SVGDiscardElement:P.k,SVGEllipseElement:P.k,SVGFEBlendElement:P.k,SVGFEColorMatrixElement:P.k,SVGFEComponentTransferElement:P.k,SVGFECompositeElement:P.k,SVGFEConvolveMatrixElement:P.k,SVGFEDiffuseLightingElement:P.k,SVGFEDisplacementMapElement:P.k,SVGFEDistantLightElement:P.k,SVGFEFloodElement:P.k,SVGFEFuncAElement:P.k,SVGFEFuncBElement:P.k,SVGFEFuncGElement:P.k,SVGFEFuncRElement:P.k,SVGFEGaussianBlurElement:P.k,SVGFEImageElement:P.k,SVGFEMergeElement:P.k,SVGFEMergeNodeElement:P.k,SVGFEMorphologyElement:P.k,SVGFEOffsetElement:P.k,SVGFEPointLightElement:P.k,SVGFESpecularLightingElement:P.k,SVGFESpotLightElement:P.k,SVGFETileElement:P.k,SVGFETurbulenceElement:P.k,SVGFilterElement:P.k,SVGForeignObjectElement:P.k,SVGGElement:P.k,SVGGeometryElement:P.k,SVGGraphicsElement:P.k,SVGImageElement:P.k,SVGLineElement:P.k,SVGLinearGradientElement:P.k,SVGMarkerElement:P.k,SVGMaskElement:P.k,SVGMetadataElement:P.k,SVGPathElement:P.k,SVGPatternElement:P.k,SVGPolygonElement:P.k,SVGPolylineElement:P.k,SVGRadialGradientElement:P.k,SVGRectElement:P.k,SVGScriptElement:P.k,SVGSetElement:P.k,SVGStopElement:P.k,SVGStyleElement:P.k,SVGElement:P.k,SVGSVGElement:P.k,SVGSwitchElement:P.k,SVGSymbolElement:P.k,SVGTSpanElement:P.k,SVGTextContentElement:P.k,SVGTextElement:P.k,SVGTextPathElement:P.k,SVGTextPositioningElement:P.k,SVGTitleElement:P.k,SVGUseElement:P.k,SVGViewElement:P.k,SVGGradientElement:P.k,SVGComponentTransferFunctionElement:P.k,SVGFEDropShadowElement:P.k,SVGMPathElement:P.k,WebGLBuffer:P.ch,WebGLFramebuffer:P.ct,WebGLProgram:P.cQ,WebGLRenderingContext:P.be,WebGLShader:P.cV,WebGLTexture:P.d_,WebGLUniformLocation:P.d6})
hunkHelpers.setOrUpdateLeafTags({DOMError:true,MediaError:true,Navigator:true,NavigatorConcurrentHardware:true,NavigatorUserMediaError:true,OverconstrainedError:true,PositionError:true,WebGLActiveInfo:true,WebGLRenderbuffer:true,WebGL2RenderingContext:true,SQLError:true,ArrayBufferView:false,Float32Array:true,Int16Array:true,Int32Array:true,Uint32Array:true,Uint8ClampedArray:true,CanvasPixelArray:true,Uint8Array:false,HTMLBRElement:true,HTMLBaseElement:true,HTMLButtonElement:true,HTMLContentElement:true,HTMLDListElement:true,HTMLDataElement:true,HTMLDataListElement:true,HTMLDetailsElement:true,HTMLDialogElement:true,HTMLEmbedElement:true,HTMLFieldSetElement:true,HTMLHRElement:true,HTMLHeadElement:true,HTMLHeadingElement:true,HTMLHtmlElement:true,HTMLIFrameElement:true,HTMLInputElement:true,HTMLLIElement:true,HTMLLabelElement:true,HTMLLegendElement:true,HTMLLinkElement:true,HTMLMapElement:true,HTMLMenuElement:true,HTMLMetaElement:true,HTMLMeterElement:true,HTMLModElement:true,HTMLOListElement:true,HTMLObjectElement:true,HTMLOptGroupElement:true,HTMLOptionElement:true,HTMLOutputElement:true,HTMLParagraphElement:true,HTMLParamElement:true,HTMLPictureElement:true,HTMLPreElement:true,HTMLProgressElement:true,HTMLQuoteElement:true,HTMLScriptElement:true,HTMLShadowElement:true,HTMLSlotElement:true,HTMLSourceElement:true,HTMLSpanElement:true,HTMLStyleElement:true,HTMLTableCaptionElement:true,HTMLTableCellElement:true,HTMLTableDataCellElement:true,HTMLTableHeaderCellElement:true,HTMLTableColElement:true,HTMLTableElement:true,HTMLTableRowElement:true,HTMLTableSectionElement:true,HTMLTemplateElement:true,HTMLTextAreaElement:true,HTMLTimeElement:true,HTMLTitleElement:true,HTMLTrackElement:true,HTMLUListElement:true,HTMLUnknownElement:true,HTMLDirectoryElement:true,HTMLFontElement:true,HTMLFrameElement:true,HTMLFrameSetElement:true,HTMLMarqueeElement:true,HTMLElement:false,HTMLAnchorElement:true,HTMLAreaElement:true,HTMLBodyElement:true,HTMLCanvasElement:true,CanvasRenderingContext2D:true,CDATASection:true,CharacterData:true,Comment:true,ProcessingInstruction:true,Text:true,CSSStyleDeclaration:true,MSStyleCSSProperties:true,CSS2Properties:true,HTMLDivElement:true,XMLDocument:true,Document:false,DOMException:true,DOMRectReadOnly:false,Element:false,AbortPaymentEvent:true,AnimationEvent:true,AnimationPlaybackEvent:true,ApplicationCacheErrorEvent:true,BackgroundFetchClickEvent:true,BackgroundFetchEvent:true,BackgroundFetchFailEvent:true,BackgroundFetchedEvent:true,BeforeInstallPromptEvent:true,BeforeUnloadEvent:true,BlobEvent:true,CanMakePaymentEvent:true,ClipboardEvent:true,CloseEvent:true,CustomEvent:true,DeviceMotionEvent:true,DeviceOrientationEvent:true,ErrorEvent:true,ExtendableEvent:true,ExtendableMessageEvent:true,FetchEvent:true,FontFaceSetLoadEvent:true,ForeignFetchEvent:true,GamepadEvent:true,HashChangeEvent:true,InstallEvent:true,MediaEncryptedEvent:true,MediaKeyMessageEvent:true,MediaQueryListEvent:true,MediaStreamEvent:true,MediaStreamTrackEvent:true,MessageEvent:true,MIDIConnectionEvent:true,MIDIMessageEvent:true,MutationEvent:true,NotificationEvent:true,PageTransitionEvent:true,PaymentRequestEvent:true,PaymentRequestUpdateEvent:true,PopStateEvent:true,PresentationConnectionAvailableEvent:true,PresentationConnectionCloseEvent:true,ProgressEvent:true,PromiseRejectionEvent:true,PushEvent:true,RTCDataChannelEvent:true,RTCDTMFToneChangeEvent:true,RTCPeerConnectionIceEvent:true,RTCTrackEvent:true,SecurityPolicyViolationEvent:true,SensorErrorEvent:true,SpeechRecognitionError:true,SpeechRecognitionEvent:true,SpeechSynthesisEvent:true,StorageEvent:true,SyncEvent:true,TrackEvent:true,TransitionEvent:true,WebKitTransitionEvent:true,VRDeviceEvent:true,VRDisplayEvent:true,VRSessionEvent:true,MojoInterfaceRequestEvent:true,ResourceProgressEvent:true,USBConnectionEvent:true,IDBVersionChangeEvent:true,AudioProcessingEvent:true,OfflineAudioCompletionEvent:true,WebGLContextEvent:true,Event:false,InputEvent:false,EventTarget:false,HTMLFormElement:true,HTMLCollection:true,HTMLFormControlsCollection:true,HTMLOptionsCollection:true,HTMLDocument:true,ImageData:true,HTMLImageElement:true,KeyboardEvent:true,HTMLAudioElement:true,HTMLMediaElement:false,PointerEvent:true,MouseEvent:false,DragEvent:false,DocumentFragment:true,ShadowRoot:true,Attr:true,DocumentType:true,Node:false,NodeList:true,RadioNodeList:true,HTMLSelectElement:true,Touch:true,TouchEvent:true,TouchList:true,CompositionEvent:true,FocusEvent:true,TextEvent:true,UIEvent:false,HTMLVideoElement:true,WheelEvent:true,Window:true,DOMWindow:true,ClientRect:true,DOMRect:true,SVGAElement:true,SVGAnimateElement:true,SVGAnimateMotionElement:true,SVGAnimateTransformElement:true,SVGAnimationElement:true,SVGCircleElement:true,SVGClipPathElement:true,SVGDefsElement:true,SVGDescElement:true,SVGDiscardElement:true,SVGEllipseElement:true,SVGFEBlendElement:true,SVGFEColorMatrixElement:true,SVGFEComponentTransferElement:true,SVGFECompositeElement:true,SVGFEConvolveMatrixElement:true,SVGFEDiffuseLightingElement:true,SVGFEDisplacementMapElement:true,SVGFEDistantLightElement:true,SVGFEFloodElement:true,SVGFEFuncAElement:true,SVGFEFuncBElement:true,SVGFEFuncGElement:true,SVGFEFuncRElement:true,SVGFEGaussianBlurElement:true,SVGFEImageElement:true,SVGFEMergeElement:true,SVGFEMergeNodeElement:true,SVGFEMorphologyElement:true,SVGFEOffsetElement:true,SVGFEPointLightElement:true,SVGFESpecularLightingElement:true,SVGFESpotLightElement:true,SVGFETileElement:true,SVGFETurbulenceElement:true,SVGFilterElement:true,SVGForeignObjectElement:true,SVGGElement:true,SVGGeometryElement:true,SVGGraphicsElement:true,SVGImageElement:true,SVGLineElement:true,SVGLinearGradientElement:true,SVGMarkerElement:true,SVGMaskElement:true,SVGMetadataElement:true,SVGPathElement:true,SVGPatternElement:true,SVGPolygonElement:true,SVGPolylineElement:true,SVGRadialGradientElement:true,SVGRectElement:true,SVGScriptElement:true,SVGSetElement:true,SVGStopElement:true,SVGStyleElement:true,SVGElement:true,SVGSVGElement:true,SVGSwitchElement:true,SVGSymbolElement:true,SVGTSpanElement:true,SVGTextContentElement:true,SVGTextElement:true,SVGTextPathElement:true,SVGTextPositioningElement:true,SVGTitleElement:true,SVGUseElement:true,SVGViewElement:true,SVGGradientElement:true,SVGComponentTransferFunctionElement:true,SVGFEDropShadowElement:true,SVGMPathElement:true,WebGLBuffer:true,WebGLFramebuffer:true,WebGLProgram:true,WebGLRenderingContext:true,WebGLShader:true,WebGLTexture:true,WebGLUniformLocation:true})
H.cG.$nativeSuperclassTag="ArrayBufferView"
H.c_.$nativeSuperclassTag="ArrayBufferView"
H.c0.$nativeSuperclassTag="ArrayBufferView"
H.cH.$nativeSuperclassTag="ArrayBufferView"
H.c1.$nativeSuperclassTag="ArrayBufferView"
H.c2.$nativeSuperclassTag="ArrayBufferView"
H.cI.$nativeSuperclassTag="ArrayBufferView"})()
convertAllToFastObject(w)
convertToFastObject($);(function(a){if(typeof document==="undefined"){a(null)
return}if(typeof document.currentScript!='undefined'){a(document.currentScript)
return}var u=document.scripts
function onLoad(b){for(var s=0;s<u.length;++s)u[s].removeEventListener("load",onLoad,false)
a(b.target)}for(var t=0;t<u.length;++t)u[t].addEventListener("load",onLoad,false)})(function(a){v.currentScript=a
if(typeof dartMainRunner==="function")dartMainRunner(N.iC,[])
else N.iC([])})})()
//# sourceMappingURL=test.dart.js.map
