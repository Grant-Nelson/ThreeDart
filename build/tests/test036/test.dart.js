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
a[c]=function(){a[c]=function(){H.kC(b)}
var t
var s=d
try{if(a[b]===u){t=a[b]=s
t=a[b]=d()}else t=a[b]}finally{if(t===s)a[b]=null
a[c]=function(){return this[b]}}return t}}function makeConstList(a){a.immutable$list=Array
a.fixed$length=Array
return a}function convertToFastObject(a){function t(){}t.prototype=a
new t()
return a}function convertAllToFastObject(a){for(var u=0;u<a.length;++u)convertToFastObject(a[u])}var y=0
function tearOffGetter(a,b,c,d,e){return e?new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+d+y+++"(receiver) {"+"if (c === null) c = "+"H.hL"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, true, name);"+"return new c(this, funcs[0], receiver, name);"+"}")(a,b,c,d,H,null):new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+d+y+++"() {"+"if (c === null) c = "+"H.hL"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, false, name);"+"return new c(this, funcs[0], null, name);"+"}")(a,b,c,d,H,null)}function tearOff(a,b,c,d,e,f){var u=null
return d?function(){if(u===null)u=H.hL(this,a,b,c,true,false,e).prototype
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
if(w[u][a])return w[u][a]}}var C={},H={hz:function hz(a){this.a=a},
i2:function(){return new P.d5("No element")},
jq:function(){return new P.d5("Too few elements")},
V:function V(a){this.a=a},
e1:function e1(){},
cK:function cK(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=null
_.$ti=d},
et:function et(a,b,c){this.a=a
this.b=b
this.$ti=c},
eu:function eu(a,b,c){var _=this
_.a=null
_.b=a
_.c=b
_.$ti=c},
fE:function fE(a,b,c){this.a=a
this.b=b
this.$ti=c},
fF:function fF(a,b,c){this.a=a
this.b=b
this.$ti=c},
bk:function bk(){},
dk:function dk(){},
dj:function dj(){},
bD:function(a){var u,t
u=H.R(v.mangledGlobalNames[a])
if(typeof u==="string")return u
t="minified:"+a
return t},
kl:function(a){return v.types[H.a3(a)]},
kq:function(a,b){var u
if(b!=null){u=b.x
if(u!=null)return u}return!!J.U(a).$iaP},
k:function(a){var u
if(typeof a==="string")return a
if(typeof a==="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
u=J.aM(a)
if(typeof u!=="string")throw H.h(H.aL(a))
return u},
jI:function(a){var u,t,s
u=a.$reflectionInfo
if(u==null)return
u=J.ef(u)
t=u[0]
s=u[1]
return new H.eL(a,u,(t&2)===2,t>>2,s>>1,(s&1)===1,u[2])},
bV:function(a){var u=a.$identityHash
if(u==null){u=Math.random()*0x3fffffff|0
a.$identityHash=u}return u},
bp:function(a){return H.jy(a)+H.hJ(H.bd(a),0,null)},
jy:function(a){var u,t,s,r,q,p,o,n,m
u=J.U(a)
t=u.constructor
if(typeof t=="function"){s=t.name
r=typeof s==="string"?s:null}else r=null
q=r==null
if(q||u===C.C||!!u.$ibu){p=C.t(a)
if(q)r=p
if(p==="Object"){o=a.constructor
if(typeof o=="function"){n=String(o).match(/^\s*function\s*([\w$]*)\s*\(/)
m=n==null?null:n[1]
if(typeof m==="string"&&/^\w+$/.test(m))r=m}}return r}r=r
return H.bD(r.length>1&&C.j.b6(r,0)===36?C.j.cJ(r,1):r)},
id:function(a){var u,t,s,r,q
u=a.length
if(u<=500)return String.fromCharCode.apply(null,a)
for(t="",s=0;s<u;s=r){r=s+500
q=r<u?r:u
t+=String.fromCharCode.apply(null,a.slice(s,q))}return t},
jH:function(a){var u,t,s,r
u=H.b([],[P.u])
for(t=a.length,s=0;s<a.length;a.length===t||(0,H.y)(a),++s){r=a[s]
if(typeof r!=="number"||Math.floor(r)!==r)throw H.h(H.aL(r))
if(r<=65535)C.a.h(u,r)
else if(r<=1114111){C.a.h(u,55296+(C.e.b9(r-65536,10)&1023))
C.a.h(u,56320+(r&1023))}else throw H.h(H.aL(r))}return H.id(u)},
ie:function(a){var u,t,s
for(u=a.length,t=0;t<u;++t){s=a[t]
if(typeof s!=="number"||Math.floor(s)!==s)throw H.h(H.aL(s))
if(s<0)throw H.h(H.aL(s))
if(s>65535)return H.jH(a)}return H.id(a)},
jG:function(a){var u
if(a<=65535)return String.fromCharCode(a)
if(a<=1114111){u=a-65536
return String.fromCharCode((55296|C.e.b9(u,10))>>>0,56320|u&1023)}throw H.h(P.as(a,0,1114111,null,null))},
bo:function(a){if(a.date===void 0)a.date=new Date(a.a)
return a.date},
jF:function(a){var u=H.bo(a).getFullYear()+0
return u},
jD:function(a){var u=H.bo(a).getMonth()+1
return u},
jz:function(a){var u=H.bo(a).getDate()+0
return u},
jA:function(a){var u=H.bo(a).getHours()+0
return u},
jC:function(a){var u=H.bo(a).getMinutes()+0
return u},
jE:function(a){var u=H.bo(a).getSeconds()+0
return u},
jB:function(a){var u=H.bo(a).getMilliseconds()+0
return u},
A:function(a){throw H.h(H.aL(a))},
e:function(a,b){if(a==null)J.cn(a)
throw H.h(H.bz(a,b))},
bz:function(a,b){var u,t
if(typeof b!=="number"||Math.floor(b)!==b)return new P.aN(!0,b,"index",null)
u=H.a3(J.cn(a))
if(!(b<0)){if(typeof u!=="number")return H.A(u)
t=b>=u}else t=!0
if(t)return P.bQ(b,a,"index",null,u)
return P.cZ(b,"index",null)},
kf:function(a,b,c){if(a>c)return new P.bq(0,c,!0,a,"start","Invalid value")
if(b!=null)if(b<a||b>c)return new P.bq(a,c,!0,b,"end","Invalid value")
return new P.aN(!0,b,"end",null)},
aL:function(a){return new P.aN(!0,a,null,null)},
kc:function(a){if(typeof a!=="number")throw H.h(H.aL(a))
return a},
h:function(a){var u
if(a==null)a=new P.cV()
u=new Error()
u.dartException=a
if("defineProperty" in Object){Object.defineProperty(u,"message",{get:H.iW})
u.name=""}else u.toString=H.iW
return u},
iW:function(){return J.aM(this.dartException)},
o:function(a){throw H.h(a)},
y:function(a){throw H.h(P.bK(a))},
aH:function(a){var u,t,s,r,q,p
a=a.replace(String({}),'$receiver$').replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
u=a.match(/\\\$[a-zA-Z]+\\\$/g)
if(u==null)u=H.b([],[P.v])
t=u.indexOf("\\$arguments\\$")
s=u.indexOf("\\$argumentsExpr\\$")
r=u.indexOf("\\$expr\\$")
q=u.indexOf("\\$method\\$")
p=u.indexOf("\\$receiver\\$")
return new H.fc(a.replace(new RegExp('\\\\\\$arguments\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$argumentsExpr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$expr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$method\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$receiver\\\\\\$','g'),'((?:x|[^x])*)'),t,s,r,q,p)},
fd:function(a){return function($expr$){var $argumentsExpr$='$arguments$'
try{$expr$.$method$($argumentsExpr$)}catch(u){return u.message}}(a)},
io:function(a){return function($expr$){try{$expr$.$method$}catch(u){return u.message}}(a)},
i7:function(a,b){return new H.eH(a,b==null?null:b.method)},
hA:function(a,b){var u,t
u=b==null
t=u?null:b.method
return new H.ei(a,t,u?null:b.receiver)},
be:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g
u=new H.hr(a)
if(a==null)return
if(typeof a!=="object")return a
if("dartException" in a)return u.$1(a.dartException)
else if(!("message" in a))return a
t=a.message
if("number" in a&&typeof a.number=="number"){s=a.number
r=s&65535
if((C.e.b9(s,16)&8191)===10)switch(r){case 438:return u.$1(H.hA(H.k(t)+" (Error "+r+")",null))
case 445:case 5007:return u.$1(H.i7(H.k(t)+" (Error "+r+")",null))}}if(a instanceof TypeError){q=$.iZ()
p=$.j_()
o=$.j0()
n=$.j1()
m=$.j4()
l=$.j5()
k=$.j3()
$.j2()
j=$.j7()
i=$.j6()
h=q.ab(t)
if(h!=null)return u.$1(H.hA(H.R(t),h))
else{h=p.ab(t)
if(h!=null){h.method="call"
return u.$1(H.hA(H.R(t),h))}else{h=o.ab(t)
if(h==null){h=n.ab(t)
if(h==null){h=m.ab(t)
if(h==null){h=l.ab(t)
if(h==null){h=k.ab(t)
if(h==null){h=n.ab(t)
if(h==null){h=j.ab(t)
if(h==null){h=i.ab(t)
g=h!=null}else g=!0}else g=!0}else g=!0}else g=!0}else g=!0}else g=!0}else g=!0
if(g)return u.$1(H.i7(H.R(t),h))}}return u.$1(new H.fn(typeof t==="string"?t:""))}if(a instanceof RangeError){if(typeof t==="string"&&t.indexOf("call stack")!==-1)return new P.d4()
t=function(b){try{return String(b)}catch(f){}return null}(a)
return u.$1(new P.aN(!1,null,null,typeof t==="string"?t.replace(/^RangeError:\s*/,""):t))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof t==="string"&&t==="too much recursion")return new P.d4()
return a},
bB:function(a){var u
if(a==null)return new H.dB(a)
u=a.$cachedTrace
if(u!=null)return u
return a.$cachedTrace=new H.dB(a)},
kh:function(a,b){var u,t,s,r
u=a.length
for(t=0;t<u;t=r){s=t+1
r=s+1
b.Z(0,a[t],a[s])}return b},
kp:function(a,b,c,d,e,f){H.i(a,"$ihw")
switch(H.a3(b)){case 0:return a.$0()
case 1:return a.$1(c)
case 2:return a.$2(c,d)
case 3:return a.$3(c,d,e)
case 4:return a.$4(c,d,e,f)}throw H.h(P.p("Unsupported number of arguments for wrapped closure"))},
by:function(a,b){var u
H.a3(b)
if(a==null)return
u=a.$identity
if(!!u)return u
u=function(c,d,e){return function(f,g,h,i){return e(c,d,f,g,h,i)}}(a,b,H.kp)
a.$identity=u
return u},
jk:function(a,b,c,d,e,f,g){var u,t,s,r,q,p,o,n,m,l,k,j,i
u=b[0]
t=u.$callName
if(!!J.U(d).$ia){u.$reflectionInfo=d
s=H.jI(u).r}else s=d
r=e?Object.create(new H.f0().constructor.prototype):Object.create(new H.bF(null,null,null,null).constructor.prototype)
r.$initialize=r.constructor
if(e)q=function static_tear_off(){this.$initialize()}
else{p=$.aw
if(typeof p!=="number")return p.n()
$.aw=p+1
p=new Function("a,b,c,d"+p,"this.$initialize(a,b,c,d"+p+")")
q=p}r.constructor=q
q.prototype=r
if(!e){o=H.hZ(a,u,f)
o.$reflectionInfo=d}else{r.$static_name=g
o=u}if(typeof s=="number")n=function(h,a0){return function(){return h(a0)}}(H.kl,s)
else if(typeof s=="function")if(e)n=s
else{m=f?H.hX:H.ht
n=function(h,a0){return function(){return h.apply({$receiver:a0(this)},arguments)}}(s,m)}else throw H.h("Error in reflectionInfo.")
r.$S=n
r[t]=o
for(l=o,k=1;k<b.length;++k){j=b[k]
i=j.$callName
if(i!=null){j=e?j:H.hZ(a,j,f)
r[i]=j}if(k===c){j.$reflectionInfo=d
l=j}}r.$C=l
r.$R=u.$R
r.$D=u.$D
return q},
jh:function(a,b,c,d){var u=H.ht
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,u)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,u)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,u)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,u)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,u)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,u)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,u)}},
hZ:function(a,b,c){var u,t,s,r,q,p,o
if(c)return H.jj(a,b)
u=b.$stubName
t=b.length
s=a[u]
r=b==null?s==null:b===s
q=!r||t>=27
if(q)return H.jh(t,!r,u,b)
if(t===0){r=$.aw
if(typeof r!=="number")return r.n()
$.aw=r+1
p="self"+r
r="return function(){var "+p+" = this."
q=$.bG
if(q==null){q=H.dR("self")
$.bG=q}return new Function(r+H.k(q)+";return "+p+"."+H.k(u)+"();}")()}o="abcdefghijklmnopqrstuvwxyz".split("").splice(0,t).join(",")
r=$.aw
if(typeof r!=="number")return r.n()
$.aw=r+1
o+=r
r="return function("+o+"){return this."
q=$.bG
if(q==null){q=H.dR("self")
$.bG=q}return new Function(r+H.k(q)+"."+H.k(u)+"("+o+");}")()},
ji:function(a,b,c,d){var u,t
u=H.ht
t=H.hX
switch(b?-1:a){case 0:throw H.h(H.jL("Intercepted function with no arguments."))
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
u=$.bG
if(u==null){u=H.dR("self")
$.bG=u}t=$.hW
if(t==null){t=H.dR("receiver")
$.hW=t}s=b.$stubName
r=b.length
q=a[s]
p=b==null?q==null:b===q
o=!p||r>=28
if(o)return H.ji(r,!p,s,b)
if(r===1){u="return function(){return this."+H.k(u)+"."+H.k(s)+"(this."+H.k(t)+");"
t=$.aw
if(typeof t!=="number")return t.n()
$.aw=t+1
return new Function(u+t+"}")()}n="abcdefghijklmnopqrstuvwxyz".split("").splice(0,r-1).join(",")
u="return function("+n+"){return this."+H.k(u)+"."+H.k(s)+"(this."+H.k(t)+", "+n+");"
t=$.aw
if(typeof t!=="number")return t.n()
$.aw=t+1
return new Function(u+t+"}")()},
hL:function(a,b,c,d,e,f,g){return H.jk(a,b,H.a3(c),d,!!e,!!f,g)},
ht:function(a){return a.a},
hX:function(a){return a.c},
dR:function(a){var u,t,s,r,q
u=new H.bF("self","target","receiver","name")
t=J.ef(Object.getOwnPropertyNames(u))
for(s=t.length,r=0;r<s;++r){q=t[r]
if(u[q]===a)return q}},
R:function(a){if(a==null)return a
if(typeof a==="string")return a
throw H.h(H.au(a,"String"))},
lf:function(a){if(a==null)return a
if(typeof a==="number")return a
throw H.h(H.au(a,"double"))},
kv:function(a){if(a==null)return a
if(typeof a==="number")return a
throw H.h(H.au(a,"num"))},
iL:function(a){if(a==null)return a
if(typeof a==="boolean")return a
throw H.h(H.au(a,"bool"))},
a3:function(a){if(a==null)return a
if(typeof a==="number"&&Math.floor(a)===a)return a
throw H.h(H.au(a,"int"))},
iT:function(a,b){throw H.h(H.au(a,H.bD(H.R(b).substring(2))))},
kx:function(a,b){throw H.h(H.jg(a,H.bD(H.R(b).substring(2))))},
i:function(a,b){if(a==null)return a
if((typeof a==="object"||typeof a==="function")&&J.U(a)[b])return a
H.iT(a,b)},
c:function(a,b){var u
if(a!=null)u=(typeof a==="object"||typeof a==="function")&&J.U(a)[b]
else u=!0
if(u)return a
H.kx(a,b)},
hm:function(a){if(a==null)return a
if(!!J.U(a).$ia)return a
throw H.h(H.au(a,"List<dynamic>"))},
kr:function(a,b){var u
if(a==null)return a
u=J.U(a)
if(!!u.$ia)return a
if(u[b])return a
H.iT(a,b)},
iM:function(a){var u
if("$S" in a){u=a.$S
if(typeof u=="number")return v.types[H.a3(u)]
else return a.$S()}return},
dG:function(a,b){var u
if(a==null)return!1
if(typeof a=="function")return!0
u=H.iM(J.U(a))
if(u==null)return!1
return H.iC(u,null,b,null)},
l:function(a,b){var u,t
if(a==null)return a
if($.hG)return a
$.hG=!0
try{if(H.dG(a,b))return a
u=H.ho(b)
t=H.au(a,u)
throw H.h(t)}finally{$.hG=!1}},
hM:function(a,b){if(a!=null&&!H.hK(a,b))H.o(H.au(a,H.ho(b)))
return a},
au:function(a,b){return new H.fe("TypeError: "+P.e4(a)+": type '"+H.iG(a)+"' is not a subtype of type '"+b+"'")},
jg:function(a,b){return new H.dS("CastError: "+P.e4(a)+": type '"+H.iG(a)+"' is not a subtype of type '"+b+"'")},
iG:function(a){var u,t
u=J.U(a)
if(!!u.$ibI){t=H.iM(u)
if(t!=null)return H.ho(t)
return"Closure"}return H.bp(a)},
kC:function(a){throw H.h(new P.dY(H.R(a)))},
jL:function(a){return new H.eR(a)},
iO:function(a){return v.getIsolateTag(a)},
b:function(a,b){a.$ti=b
return a},
bd:function(a){if(a==null)return
return a.$ti},
lg:function(a,b,c){return H.bC(a["$a"+H.k(c)],H.bd(b))},
dJ:function(a,b,c,d){var u
H.R(c)
H.a3(d)
u=H.bC(a["$a"+H.k(c)],H.bd(b))
return u==null?null:u[d]},
ak:function(a,b,c){var u
H.R(b)
H.a3(c)
u=H.bC(a["$a"+H.k(b)],H.bd(a))
return u==null?null:u[c]},
r:function(a,b){var u
H.a3(b)
u=H.bd(a)
return u==null?null:u[b]},
ho:function(a){return H.bc(a,null)},
bc:function(a,b){var u,t
H.d(b,"$ia",[P.v],"$aa")
if(a==null)return"dynamic"
if(a===-1)return"void"
if(typeof a==="object"&&a!==null&&a.constructor===Array)return H.bD(a[0].name)+H.hJ(a,1,b)
if(typeof a=="function")return H.bD(a.name)
if(a===-2)return"dynamic"
if(typeof a==="number"){H.a3(a)
if(b==null||a<0||a>=b.length)return"unexpected-generic-index:"+a
u=b.length
t=u-a-1
if(t<0||t>=u)return H.e(b,t)
return H.k(b[t])}if('func' in a)return H.k2(a,b)
if('futureOr' in a)return"FutureOr<"+H.bc("type" in a?a.type:null,b)+">"
return"unknown-reified-type"},
k2:function(a,b){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c
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
if(m<0)return H.e(b,m)
o=C.j.n(o,b[m])
l=t[p]
if(l!=null&&l!==P.E)o+=" extends "+H.bc(l,b)}o+=">"}else{o=""
s=null}k=!!a.v?"void":H.bc(a.ret,b)
if("args" in a){j=a.args
for(u=j.length,i="",h="",g=0;g<u;++g,h=", "){f=j[g]
i=i+h+H.bc(f,b)}}else{i=""
h=""}if("opt" in a){e=a.opt
i+=h+"["
for(u=e.length,h="",g=0;g<u;++g,h=", "){f=e[g]
i=i+h+H.bc(f,b)}i+="]"}if("named" in a){d=a.named
i+=h+"{"
for(u=H.kg(d),m=u.length,h="",g=0;g<m;++g,h=", "){c=H.R(u[g])
i=i+h+H.bc(d[c],b)+(" "+H.k(c))}i+="}"}if(s!=null)b.length=s
return o+"("+i+") => "+k},
hJ:function(a,b,c){var u,t,s,r,q,p
H.d(c,"$ia",[P.v],"$aa")
if(a==null)return""
u=new P.b9("")
for(t=b,s="",r=!0,q="";t<a.length;++t,s=", "){u.a=q+s
p=a[t]
if(p!=null)r=!1
q=u.a+=H.bc(p,c)}return"<"+u.i(0)+">"},
bC:function(a,b){if(a==null)return b
a=a.apply(null,b)
if(a==null)return
if(typeof a==="object"&&a!==null&&a.constructor===Array)return a
if(typeof a=="function")return a.apply(null,b)
return b},
cj:function(a,b,c,d){var u,t
H.R(b)
H.hm(c)
H.R(d)
if(a==null)return!1
u=H.bd(a)
t=J.U(a)
if(t[b]==null)return!1
return H.iJ(H.bC(t[d],u),null,c,null)},
d:function(a,b,c,d){H.R(b)
H.hm(c)
H.R(d)
if(a==null)return a
if(H.cj(a,b,c,d))return a
throw H.h(H.au(a,function(e,f){return e.replace(/[^<,> ]+/g,function(g){return f[g]||g})}(H.bD(b.substring(2))+H.hJ(c,0,null),v.mangledGlobalNames)))},
iJ:function(a,b,c,d){var u,t
if(c==null)return!0
if(a==null){u=c.length
for(t=0;t<u;++t)if(!H.ap(null,null,c[t],d))return!1
return!0}u=a.length
for(t=0;t<u;++t)if(!H.ap(a[t],b,c[t],d))return!1
return!0},
ld:function(a,b,c){return a.apply(b,H.bC(J.U(b)["$a"+H.k(c)],H.bd(b)))},
iQ:function(a){var u
if(typeof a==="number")return!1
if('futureOr' in a){u="type" in a?a.type:null
return a==null||a.name==="E"||a.name==="D"||a===-1||a===-2||H.iQ(u)}return!1},
hK:function(a,b){var u,t
if(a==null)return b==null||b.name==="E"||b.name==="D"||b===-1||b===-2||H.iQ(b)
if(b==null||b===-1||b.name==="E"||b===-2)return!0
if(typeof b=="object"){if('futureOr' in b)if(H.hK(a,"type" in b?b.type:null))return!0
if('func' in b)return H.dG(a,b)}u=J.U(a).constructor
t=H.bd(a)
if(t!=null){t=t.slice()
t.splice(0,0,u)
u=t}return H.ap(u,null,b,null)},
w:function(a,b){if(a!=null&&!H.hK(a,b))throw H.h(H.au(a,H.ho(b)))
return a},
ap:function(a,b,c,d){var u,t,s,r,q,p,o,n,m
if(a===c)return!0
if(c==null||c===-1||c.name==="E"||c===-2)return!0
if(a===-2)return!0
if(a==null||a===-1||a.name==="E"||a===-2){if(typeof c==="number")return!1
if('futureOr' in c)return H.ap(a,b,"type" in c?c.type:null,d)
return!1}if(typeof a==="number")return!1
if(typeof c==="number")return!1
if(a.name==="D")return!0
if('func' in c)return H.iC(a,b,c,d)
if('func' in a)return c.name==="hw"
u=typeof a==="object"&&a!==null&&a.constructor===Array
t=u?a[0]:a
if('futureOr' in c){s="type" in c?c.type:null
if('futureOr' in a)return H.ap("type" in a?a.type:null,b,s,d)
else if(H.ap(a,b,s,d))return!0
else{if(!('$i'+"bO" in t.prototype))return!1
r=t.prototype["$a"+"bO"]
q=H.bC(r,u?a.slice(1):null)
return H.ap(typeof q==="object"&&q!==null&&q.constructor===Array?q[0]:null,b,s,d)}}p=typeof c==="object"&&c!==null&&c.constructor===Array
o=p?c[0]:c
if(o!==t){n=o.name
if(!('$i'+n in t.prototype))return!1
m=t.prototype["$a"+n]}else m=null
if(!p)return!0
u=u?a.slice(1):null
p=c.slice(1)
return H.iJ(H.bC(m,u),b,p,d)},
iC:function(a,b,c,d){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g
if(!('func' in a))return!1
if("bounds" in a){if(!("bounds" in c))return!1
u=a.bounds
t=c.bounds
if(u.length!==t.length)return!1}else if("bounds" in c)return!1
if(!H.ap(a.ret,b,c.ret,d))return!1
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
for(k=0;k<o;++k)if(!H.ap(r[k],d,s[k],b))return!1
for(j=k,i=0;j<n;++i,++j)if(!H.ap(r[j],d,q[i],b))return!1
for(j=0;j<l;++i,++j)if(!H.ap(p[j],d,q[i],b))return!1
h=a.named
g=c.named
if(g==null)return!0
if(h==null)return!1
return H.ku(h,b,g,d)},
ku:function(a,b,c,d){var u,t,s,r
u=Object.getOwnPropertyNames(c)
for(t=u.length,s=0;s<t;++s){r=u[s]
if(!Object.hasOwnProperty.call(a,r))return!1
if(!H.ap(c[r],d,a[r],b))return!1}return!0},
le:function(a,b,c){Object.defineProperty(a,H.R(b),{value:c,enumerable:false,writable:true,configurable:true})},
ks:function(a){var u,t,s,r,q,p
u=H.R($.iP.$1(a))
t=$.hg[u]
if(t!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:t,enumerable:false,writable:true,configurable:true})
return t.i}s=$.hl[u]
if(s!=null)return s
r=v.interceptorsByTag[u]
if(r==null){u=H.R($.iI.$2(a,u))
if(u!=null){t=$.hg[u]
if(t!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:t,enumerable:false,writable:true,configurable:true})
return t.i}s=$.hl[u]
if(s!=null)return s
r=v.interceptorsByTag[u]}}if(r==null)return
s=r.prototype
q=u[0]
if(q==="!"){t=H.hn(s)
$.hg[u]=t
Object.defineProperty(a,v.dispatchPropertyName,{value:t,enumerable:false,writable:true,configurable:true})
return t.i}if(q==="~"){$.hl[u]=s
return s}if(q==="-"){p=H.hn(s)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}if(q==="+")return H.iS(a,s)
if(q==="*")throw H.h(P.ip(u))
if(v.leafTags[u]===true){p=H.hn(s)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}else return H.iS(a,s)},
iS:function(a,b){var u=Object.getPrototypeOf(a)
Object.defineProperty(u,v.dispatchPropertyName,{value:J.hO(b,u,null,null),enumerable:false,writable:true,configurable:true})
return b},
hn:function(a){return J.hO(a,!1,null,!!a.$iaP)},
kt:function(a,b,c){var u=b.prototype
if(v.leafTags[a]===true)return H.hn(u)
else return J.hO(u,c,null,null)},
kn:function(){if(!0===$.hN)return
$.hN=!0
H.ko()},
ko:function(){var u,t,s,r,q,p,o,n
$.hg=Object.create(null)
$.hl=Object.create(null)
H.km()
u=v.interceptorsByTag
t=Object.getOwnPropertyNames(u)
if(typeof window!="undefined"){window
s=function(){}
for(r=0;r<t.length;++r){q=t[r]
p=$.iU.$1(q)
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
u=C.H()
u=H.bx(C.E,H.bx(C.J,H.bx(C.r,H.bx(C.r,H.bx(C.I,H.bx(C.F,H.bx(C.G(C.t),u)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){t=dartNativeDispatchHooksTransformer
if(typeof t=="function")t=[t]
if(t.constructor==Array)for(s=0;s<t.length;++s){r=t[s]
if(typeof r=="function")u=r(u)||u}}q=u.getTag
p=u.getUnknownTag
o=u.prototypeForTag
$.iP=new H.hi(q)
$.iI=new H.hj(p)
$.iU=new H.hk(o)},
bx:function(a,b){return a(b)||b},
js:function(a,b,c,d){var u,t,s,r
u=b?"m":""
t=c?"":"i"
s=d?"g":""
r=function(e,f){try{return new RegExp(e,f)}catch(q){return q}}(a,u+t+s)
if(r instanceof RegExp)return r
throw H.h(new P.eb("Illegal RegExp pattern ("+String(r)+")",a,null))},
kA:function(a,b,c){var u=a.indexOf(b,c)
return u>=0},
iV:function(a,b,c){var u,t,s
if(b==="")if(a==="")return c
else{u=a.length
for(t=c,s=0;s<u;++s)t=t+a[s]+c
return t.charCodeAt(0)==0?t:t}else return a.replace(new RegExp(b.replace(/[[\]{}()*+?.\\^$|]/g,"\\$&"),'g'),c.replace(/\$/g,"$$$$"))},
eL:function eL(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.x=null},
fc:function fc(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
eH:function eH(a,b){this.a=a
this.b=b},
ei:function ei(a,b,c){this.a=a
this.b=b
this.c=c},
fn:function fn(a){this.a=a},
hr:function hr(a){this.a=a},
dB:function dB(a){this.a=a
this.b=null},
bI:function bI(){},
f5:function f5(){},
f0:function f0(){},
bF:function bF(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
fe:function fe(a){this.a=a},
dS:function dS(a){this.a=a},
eR:function eR(a){this.a=a},
aQ:function aQ(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
el:function el(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
em:function em(a,b){this.a=a
this.$ti=b},
en:function en(a,b,c){var _=this
_.a=a
_.b=b
_.d=_.c=null
_.$ti=c},
hi:function hi(a){this.a=a},
hj:function hj(a){this.a=a},
hk:function hk(a){this.a=a},
eh:function eh(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
bv:function(a){return a},
dF:function(a,b,c){if(a>>>0!==a||a>=c)throw H.h(H.bz(b,a))},
k1:function(a,b,c){var u
if(!(a>>>0!==a))u=b>>>0!==b||a>b||b>c
else u=!0
if(u)throw H.h(H.kf(a,b,c))
return b},
cU:function cU(){},
cR:function cR(){},
cS:function cS(){},
cT:function cT(){},
eC:function eC(){},
eD:function eD(){},
eE:function eE(){},
eF:function eF(){},
cd:function cd(){},
ce:function ce(){},
cf:function cf(){},
cg:function cg(){},
kg:function(a){return J.i3(a?Object.keys(a):[],null)},
kw:function(a){if(typeof dartPrint=="function"){dartPrint(a)
return}if(typeof console=="object"&&typeof console.log!="undefined"){console.log(a)
return}if(typeof window=="object")return
if(typeof print=="function"){print(a)
return}throw"Unable to print message: "+String(a)}},J={
hO:function(a,b,c,d){return{i:a,p:b,e:c,x:d}},
dI:function(a){var u,t,s,r,q
u=a[v.dispatchPropertyName]
if(u==null)if($.hN==null){H.kn()
u=a[v.dispatchPropertyName]}if(u!=null){t=u.p
if(!1===t)return u.i
if(!0===t)return a
s=Object.getPrototypeOf(a)
if(t===s)return u.i
if(u.e===s)throw H.h(P.ip("Return interceptor for "+H.k(t(a,u))))}r=a.constructor
q=r==null?null:r[$.hR()]
if(q!=null)return q
q=H.ks(a)
if(q!=null)return q
if(typeof a=="function")return C.K
t=Object.getPrototypeOf(a)
if(t==null)return C.u
if(t===Object.prototype)return C.u
if(typeof r=="function"){Object.defineProperty(r,$.hR(),{value:C.p,enumerable:false,writable:true,configurable:true})
return C.p}return C.p},
jr:function(a,b){if(typeof a!=="number"||Math.floor(a)!==a)throw H.h(P.hs(a,"length","is not an integer"))
if(a<0||a>4294967295)throw H.h(P.as(a,0,4294967295,"length",null))
return J.i3(new Array(a),b)},
i3:function(a,b){return J.ef(H.b(a,[b]))},
ef:function(a){H.hm(a)
a.fixed$length=Array
return a},
U:function(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.cF.prototype
return J.cE.prototype}if(typeof a=="string")return J.b6.prototype
if(a==null)return J.cG.prototype
if(typeof a=="boolean")return J.eg.prototype
if(a.constructor==Array)return J.ar.prototype
if(typeof a!="object"){if(typeof a=="function")return J.aO.prototype
return a}if(a instanceof P.E)return a
return J.dI(a)},
ki:function(a){if(typeof a=="number")return J.b5.prototype
if(typeof a=="string")return J.b6.prototype
if(a==null)return a
if(a.constructor==Array)return J.ar.prototype
if(typeof a!="object"){if(typeof a=="function")return J.aO.prototype
return a}if(a instanceof P.E)return a
return J.dI(a)},
hh:function(a){if(typeof a=="string")return J.b6.prototype
if(a==null)return a
if(a.constructor==Array)return J.ar.prototype
if(typeof a!="object"){if(typeof a=="function")return J.aO.prototype
return a}if(a instanceof P.E)return a
return J.dI(a)},
iN:function(a){if(a==null)return a
if(a.constructor==Array)return J.ar.prototype
if(typeof a!="object"){if(typeof a=="function")return J.aO.prototype
return a}if(a instanceof P.E)return a
return J.dI(a)},
kj:function(a){if(typeof a=="number")return J.b5.prototype
if(a==null)return a
if(!(a instanceof P.E))return J.bu.prototype
return a},
kk:function(a){if(typeof a=="number")return J.b5.prototype
if(typeof a=="string")return J.b6.prototype
if(a==null)return a
if(!(a instanceof P.E))return J.bu.prototype
return a},
dH:function(a){if(a==null)return a
if(typeof a!="object"){if(typeof a=="function")return J.aO.prototype
return a}if(a instanceof P.E)return a
return J.dI(a)},
jc:function(a,b){if(typeof a=="number"&&typeof b=="number")return a+b
return J.ki(a).n(a,b)},
L:function(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.U(a).v(a,b)},
hT:function(a,b){if(typeof a=="number"&&typeof b=="number")return a*b
return J.kk(a).q(a,b)},
jd:function(a,b){if(typeof a=="number"&&typeof b=="number")return a-b
return J.kj(a).p(a,b)},
je:function(a,b){if(typeof b==="number")if(a.constructor==Array||typeof a=="string"||H.kq(a,a[v.dispatchPropertyName]))if(b>>>0===b&&b<a.length)return a[b]
return J.hh(a).j(a,b)},
jf:function(a,b,c,d){return J.dH(a).f0(a,b,c,d)},
hU:function(a,b){return J.dH(a).Y(a,b)},
hV:function(a,b){return J.iN(a).a9(a,b)},
bf:function(a){return J.U(a).gF(a)},
dK:function(a){return J.iN(a).gP(a)},
cn:function(a){return J.hh(a).gl(a)},
aM:function(a){return J.U(a).i(a)},
a0:function a0(){},
eg:function eg(){},
cG:function cG(){},
cH:function cH(){},
eJ:function eJ(){},
bu:function bu(){},
aO:function aO(){},
ar:function ar(a){this.$ti=a},
hy:function hy(a){this.$ti=a},
ae:function ae(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=null
_.$ti=d},
b5:function b5(){},
cF:function cF(){},
cE:function cE(){},
b6:function b6(){}},P={
jT:function(){var u,t,s
u={}
if(self.scheduleImmediate!=null)return P.k9()
if(self.MutationObserver!=null&&self.document!=null){t=self.document.createElement("div")
s=self.document.createElement("span")
u.a=null
new self.MutationObserver(H.by(new P.fH(u),1)).observe(t,{childList:true})
return new P.fG(u,t,s)}else if(self.setImmediate!=null)return P.ka()
return P.kb()},
jU:function(a){self.scheduleImmediate(H.by(new P.fI(H.l(a,{func:1,ret:-1})),0))},
jV:function(a){self.setImmediate(H.by(new P.fJ(H.l(a,{func:1,ret:-1})),0))},
jW:function(a){P.hD(C.n,H.l(a,{func:1,ret:-1}))},
hD:function(a,b){var u
H.l(b,{func:1,ret:-1})
u=C.e.X(a.a,1000)
return P.jZ(u<0?0:u,b)},
im:function(a,b){var u
H.l(b,{func:1,ret:-1,args:[P.aF]})
u=C.e.X(a.a,1000)
return P.k_(u<0?0:u,b)},
jZ:function(a,b){var u=new P.dC(!0)
u.eW(a,b)
return u},
k_:function(a,b){var u=new P.dC(!1)
u.eX(a,b)
return u},
jX:function(a,b){var u,t,s
b.a=1
try{a.ej(new P.fQ(b),new P.fR(b),null)}catch(s){u=H.be(s)
t=H.bB(s)
P.ky(new P.fS(b,u,t))}},
iy:function(a,b){var u,t
for(;u=a.a,u===2;)a=H.i(a.c,"$iao")
if(u>=4){t=b.bX()
b.a=a.a
b.c=a.c
P.cb(b,t)}else{t=H.i(b.c,"$iaK")
b.a=2
b.c=a
a.da(t)}},
cb:function(a,b){var u,t,s,r,q,p,o,n,m,l,k,j,i,h
u={}
u.a=a
for(t=a;!0;){s={}
r=t.a===8
if(b==null){if(r){q=H.i(t.c,"$ia9")
t=t.b
p=q.a
o=q.b
t.toString
P.hb(null,null,t,p,o)}return}for(;n=b.a,n!=null;b=n){b.a=null
P.cb(u.a,b)}t=u.a
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
if(k){H.i(m,"$ia9")
t=t.b
p=m.a
o=m.b
t.toString
P.hb(null,null,t,p,o)
return}j=$.M
if(j!=l)$.M=l
else j=null
t=b.c
if(t===8)new P.fW(u,s,b,r).$0()
else if(p){if((t&1)!==0)new P.fV(s,b,m).$0()}else if((t&2)!==0)new P.fU(u,s,b).$0()
if(j!=null)$.M=j
t=s.b
if(!!J.U(t).$ibO){if(t.a>=4){i=H.i(o.c,"$iaK")
o.c=null
b=o.b8(i)
o.a=t.a
o.c=t.c
u.a=t
continue}else P.iy(t,o)
return}}h=b.b
i=H.i(h.c,"$iaK")
h.c=null
b=h.b8(i)
t=s.a
p=s.b
if(!t){H.w(p,H.r(h,0))
h.a=4
h.c=p}else{H.i(p,"$ia9")
h.a=8
h.c=p}u.a=h
t=h}},
k5:function(a,b){if(H.dG(a,{func:1,args:[P.E,P.ag]}))return H.l(a,{func:1,ret:null,args:[P.E,P.ag]})
if(H.dG(a,{func:1,args:[P.E]}))return H.l(a,{func:1,ret:null,args:[P.E]})
throw H.h(P.hs(a,"onError","Error handler must accept one Object or one Object and a StackTrace as arguments, and return a a valid result"))},
k4:function(){var u,t
for(;u=$.bw,u!=null;){$.ci=null
t=u.b
$.bw=t
if(t==null)$.ch=null
u.a.$0()}},
k8:function(){$.hH=!0
try{P.k4()}finally{$.ci=null
$.hH=!1
if($.bw!=null)$.hS().$1(P.iK())}},
iF:function(a){var u=new P.ds(H.l(a,{func:1,ret:-1}))
if($.bw==null){$.ch=u
$.bw=u
if(!$.hH)$.hS().$1(P.iK())}else{$.ch.b=u
$.ch=u}},
k7:function(a){var u,t,s
H.l(a,{func:1,ret:-1})
u=$.bw
if(u==null){P.iF(a)
$.ci=$.ch
return}t=new P.ds(a)
s=$.ci
if(s==null){t.b=u
$.ci=t
$.bw=t}else{t.b=s.b
s.b=t
$.ci=t
if(t.b==null)$.ch=t}},
ky:function(a){var u,t
u={func:1,ret:-1}
H.l(a,u)
t=$.M
if(C.k===t){P.hd(null,null,C.k,a)
return}t.toString
P.hd(null,null,t,H.l(t.c4(a),u))},
il:function(a,b){var u,t
u={func:1,ret:-1}
H.l(b,u)
t=$.M
if(t===C.k){t.toString
return P.hD(a,b)}return P.hD(a,H.l(t.c4(b),u))},
jS:function(a,b){var u,t,s
u={func:1,ret:-1,args:[P.aF]}
H.l(b,u)
t=$.M
if(t===C.k){t.toString
return P.im(a,b)}s=t.dn(b,P.aF)
$.M.toString
return P.im(a,H.l(s,u))},
hb:function(a,b,c,d,e){var u={}
u.a=d
P.k7(new P.hc(u,e))},
iD:function(a,b,c,d,e){var u,t
H.l(d,{func:1,ret:e})
t=$.M
if(t===c)return d.$0()
$.M=c
u=t
try{t=d.$0()
return t}finally{$.M=u}},
iE:function(a,b,c,d,e,f,g){var u,t
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
hd:function(a,b,c,d){var u
H.l(d,{func:1,ret:-1})
u=C.k!==c
if(u)d=!(!u||!1)?c.c4(d):c.iK(d,-1)
P.iF(d)},
fH:function fH(a){this.a=a},
fG:function fG(a,b,c){this.a=a
this.b=b
this.c=c},
fI:function fI(a){this.a=a},
fJ:function fJ(a){this.a=a},
dC:function dC(a){this.a=a
this.b=null
this.c=0},
h8:function h8(a,b){this.a=a
this.b=b},
h7:function h7(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
aK:function aK(a,b,c,d,e){var _=this
_.a=null
_.b=a
_.c=b
_.d=c
_.e=d
_.$ti=e},
ao:function ao(a,b,c){var _=this
_.a=a
_.b=b
_.c=null
_.$ti=c},
fP:function fP(a,b){this.a=a
this.b=b},
fT:function fT(a,b){this.a=a
this.b=b},
fQ:function fQ(a){this.a=a},
fR:function fR(a){this.a=a},
fS:function fS(a,b,c){this.a=a
this.b=b
this.c=c},
fW:function fW(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
fX:function fX(a){this.a=a},
fV:function fV(a,b,c){this.a=a
this.b=b
this.c=c},
fU:function fU(a,b,c){this.a=a
this.b=b
this.c=c},
ds:function ds(a){this.a=a
this.b=null},
f1:function f1(){},
f3:function f3(a,b){this.a=a
this.b=b},
f4:function f4(a,b){this.a=a
this.b=b},
bZ:function bZ(){},
f2:function f2(){},
aF:function aF(){},
a9:function a9(a,b){this.a=a
this.b=b},
ha:function ha(){},
hc:function hc(a,b){this.a=a
this.b=b},
h2:function h2(){},
h4:function h4(a,b,c){this.a=a
this.b=b
this.c=c},
h3:function h3(a,b){this.a=a
this.b=b},
h5:function h5(a,b,c){this.a=a
this.b=b
this.c=c},
jt:function(a,b,c){H.hm(a)
return H.d(H.kh(a,new H.aQ([b,c])),"$ii4",[b,c],"$ai4")},
ju:function(a,b,c,d){return new P.h_([d])},
iB:function(){var u=Object.create(null)
u["<non-identifier-key>"]=u
delete u["<non-identifier-key>"]
return u},
iA:function(a,b,c){var u=new P.h0(a,b,[c])
u.c=a.e
return u},
jp:function(a,b,c){var u,t
if(P.hI(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}u=H.b([],[P.v])
t=$.cm()
C.a.h(t,a)
try{P.k3(a,u)}finally{if(0>=t.length)return H.e(t,-1)
t.pop()}t=P.ii(b,H.kr(u,"$if"),", ")+c
return t.charCodeAt(0)==0?t:t},
hx:function(a,b,c){var u,t,s
if(P.hI(a))return b+"..."+c
u=new P.b9(b)
t=$.cm()
C.a.h(t,a)
try{s=u
s.a=P.ii(s.a,a,", ")}finally{if(0>=t.length)return H.e(t,-1)
t.pop()}u.a+=c
t=u.a
return t.charCodeAt(0)==0?t:t},
hI:function(a){var u,t
for(u=0;t=$.cm(),u<t.length;++u)if(a===t[u])return!0
return!1},
k3:function(a,b){var u,t,s,r,q,p,o,n,m,l
H.d(b,"$ia",[P.v],"$aa")
u=a.gP(a)
t=0
s=0
while(!0){if(!(t<80||s<3))break
if(!u.w())return
r=H.k(u.gG())
C.a.h(b,r)
t+=r.length+2;++s}if(!u.w()){if(s<=5)return
if(0>=b.length)return H.e(b,-1)
q=b.pop()
if(0>=b.length)return H.e(b,-1)
p=b.pop()}else{o=u.gG();++s
if(!u.w()){if(s<=4){C.a.h(b,H.k(o))
return}q=H.k(o)
if(0>=b.length)return H.e(b,-1)
p=b.pop()
t+=q.length+2}else{n=u.gG();++s
for(;u.w();o=n,n=m){m=u.gG();++s
if(s>100){while(!0){if(!(t>75&&s>3))break
if(0>=b.length)return H.e(b,-1)
t-=b.pop().length+2;--s}C.a.h(b,"...")
return}}p=H.k(o)
q=H.k(n)
t+=q.length+p.length+4}}if(s>b.length+2){t+=5
l="..."}else l=null
while(!0){if(!(t>80&&b.length>3))break
if(0>=b.length)return H.e(b,-1)
t-=b.pop().length+2
if(l==null){t+=5
l="..."}}if(l!=null)C.a.h(b,l)
C.a.h(b,p)
C.a.h(b,q)},
i5:function(a){var u,t
u={}
if(P.hI(a))return"{...}"
t=new P.b9("")
try{C.a.h($.cm(),a)
t.a+="{"
u.a=!0
a.aa(0,new P.er(u,t))
t.a+="}"}finally{u=$.cm()
if(0>=u.length)return H.e(u,-1)
u.pop()}u=t.a
return u.charCodeAt(0)==0?u:u},
h_:function h_(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
cc:function cc(a){this.a=a
this.c=this.b=null},
h0:function h0(a,b,c){var _=this
_.a=a
_.b=b
_.d=_.c=null
_.$ti=c},
eo:function eo(){},
N:function N(){},
eq:function eq(){},
er:function er(a,b){this.a=a
this.b=b},
es:function es(){},
h6:function h6(){},
dy:function dy(){},
bJ:function bJ(){},
cv:function cv(){},
e2:function e2(){},
fp:function fp(a){this.a=a},
fq:function fq(){},
h9:function h9(a){this.b=this.a=0
this.c=a},
jo:function(a){if(a instanceof H.bI)return a.i(0)
return"Instance of '"+H.bp(a)+"'"},
jv:function(a,b,c,d){var u,t
H.w(b,d)
u=J.jr(a,d)
if(a!==0&&!0)for(t=0;t<u.length;++t)C.a.Z(u,t,b)
return H.d(u,"$ia",[d],"$aa")},
jw:function(a,b,c){var u,t,s
u=[c]
t=H.b([],u)
for(s=a.gP(a);s.w();)C.a.h(t,H.w(s.gG(),c))
if(b)return t
return H.d(J.ef(t),"$ia",u,"$aa")},
hC:function(a,b,c){var u,t
u=P.u
H.d(a,"$if",[u],"$af")
if(a.constructor===Array){H.d(a,"$iar",[u],"$aar")
t=a.length
c=P.hB(b,c,t,null,null,null)
return H.ie(b>0||c<t?C.a.eB(a,b,c):a)}return P.jN(a,b,c)},
jN:function(a,b,c){var u,t,s
H.d(a,"$if",[P.u],"$af")
u=J.dK(a)
for(t=0;t<b;++t)if(!u.w())throw H.h(P.as(b,0,t,null,null))
s=[]
for(;u.w();)s.push(u.gG())
return H.ie(s)},
jJ:function(a,b,c){return new H.eh(a,H.js(a,!1,!0,!1))},
ii:function(a,b,c){var u=J.dK(b)
if(!u.w())return a
if(c.length===0){do a+=H.k(u.gG())
while(u.w())}else{a+=H.k(u.gG())
for(;u.w();)a=a+c+H.k(u.gG())}return a},
k0:function(a,b,c,d){var u,t,s,r,q,p
H.d(a,"$ia",[P.u],"$aa")
if(c===C.v){u=$.jb().b
u=u.test(b)}else u=!1
if(u)return b
t=C.z.iP(H.w(b,H.ak(c,"bJ",0)))
for(u=t.length,s=0,r="";s<u;++s){q=t[s]
if(q<128){p=q>>>4
if(p>=8)return H.e(a,p)
p=(a[p]&1<<(q&15))!==0}else p=!1
if(p)r+=H.jG(q)
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
cx:function(a){if(a>=10)return""+a
return"0"+a},
i0:function(a,b,c,d,e,f){return new P.ax(864e8*a+36e8*b+6e7*e+1e6*f+1000*d+c)},
e4:function(a){if(typeof a==="number"||typeof a==="boolean"||null==a)return J.aM(a)
if(typeof a==="string")return JSON.stringify(a)
return P.jo(a)},
hs:function(a,b,c){return new P.aN(!0,a,b,c)},
cZ:function(a,b,c){return new P.bq(null,null,!0,a,b,"Value not in range")},
as:function(a,b,c,d,e){return new P.bq(b,c,!0,a,d,"Invalid value")},
hB:function(a,b,c,d,e,f){if(0>a||a>c)throw H.h(P.as(a,0,c,"start",f))
if(b!=null){if(a>b||b>c)throw H.h(P.as(b,a,c,"end",f))
return b}return c},
bQ:function(a,b,c,d,e){var u=H.a3(e==null?J.cn(b):e)
return new P.ee(b,u,!0,a,c,"Index out of range")},
ac:function(a){return new P.fo(a)},
ip:function(a){return new P.fm(a)},
bK:function(a){return new P.dW(a)},
p:function(a){return new P.dv(a)},
hQ:function(a){H.kw(a)},
Z:function Z(){},
af:function af(a,b){this.a=a
this.b=b},
t:function t(){},
ax:function ax(a){this.a=a},
e_:function e_(){},
e0:function e0(){},
b1:function b1(){},
cV:function cV(){},
aN:function aN(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
bq:function bq(a,b,c,d,e,f){var _=this
_.e=a
_.f=b
_.a=c
_.b=d
_.c=e
_.d=f},
ee:function ee(a,b,c,d,e,f){var _=this
_.e=a
_.f=b
_.a=c
_.b=d
_.c=e
_.d=f},
fo:function fo(a){this.a=a},
fm:function fm(a){this.a=a},
d5:function d5(a){this.a=a},
dW:function dW(a){this.a=a},
eI:function eI(){},
d4:function d4(){},
dY:function dY(a){this.a=a},
dv:function dv(a){this.a=a},
eb:function eb(a,b,c){this.a=a
this.b=b
this.c=c},
u:function u(){},
f:function f(){},
ay:function ay(){},
a:function a(){},
D:function D(){},
a8:function a8(){},
E:function E(){},
ag:function ag(){},
v:function v(){},
b9:function b9(a){this.a=a},
kd:function(a,b){var u={}
a.aa(0,new P.he(u))
return u},
he:function he(a){this.a=a},
e7:function e7(a,b){this.a=a
this.b=b},
e8:function e8(){},
e9:function e9(){},
fZ:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
jY:function(a){a=536870911&a+((67108863&a)<<3)
a^=a>>>11
return 536870911&a+((16383&a)<<15)},
h1:function h1(){},
al:function al(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=e},
m:function m(){},
cq:function cq(){},
cC:function cC(){},
cY:function cY(){},
d0:function d0(){},
bs:function bs(){},
d1:function d1(){},
d6:function d6(){},
di:function di(){}},W={
hY:function(a,b){var u=document.createElement("canvas")
return u},
jn:function(a){H.i(a,"$ibj")
return"wheel"},
fY:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
iz:function(a,b,c,d){var u,t
u=W.fY(W.fY(W.fY(W.fY(0,a),b),c),d)
t=536870911&u+((67108863&u)<<3)
t^=t>>>11
return 536870911&t+((16383&t)<<15)},
a2:function(a,b,c,d,e){var u,t
u=W.iH(new W.fO(c),W.j)
t=u!=null
if(t&&!0){H.l(u,{func:1,args:[W.j]})
if(t)J.jf(a,b,u,!1)}return new W.fN(a,b,u,!1,[e])},
iH:function(a,b){var u
H.l(a,{func:1,ret:-1,args:[b]})
u=$.M
if(u===C.k)return a
return u.dn(a,b)},
n:function n(){},
dM:function dM(){},
dN:function dN(){},
cp:function cp(){},
bh:function bh(){},
b_:function b_(){},
bL:function bL(){},
dX:function dX(){},
bM:function bM(){},
bN:function bN(){},
dZ:function dZ(){},
cy:function cy(){},
fL:function fL(a,b){this.a=a
this.b=b},
X:function X(){},
j:function j(){},
bj:function bj(){},
ea:function ea(){},
bl:function bl(){},
cD:function cD(){},
az:function az(){},
a1:function a1(){},
fK:function fK(a){this.a=a},
H:function H(){},
bT:function bT(){},
eS:function eS(){},
aG:function aG(){},
at:function at(){},
fb:function fb(){},
bb:function bb(){},
aJ:function aJ(){},
ca:function ca(){},
du:function du(){},
fM:function fM(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
hF:function hF(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
fN:function fN(a,b,c,d,e){var _=this
_.a=0
_.b=a
_.c=b
_.d=c
_.e=d
_.$ti=e},
fO:function fO(a){this.a=a},
aq:function aq(){},
cB:function cB(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=null
_.$ti=d},
dt:function dt(){},
dw:function dw(){},
dx:function dx(){},
dz:function dz(){},
dA:function dA(){},
dD:function dD(){},
dE:function dE(){}},O={
dU:function(a){var u=new O.K([a])
u.b5(a)
return u},
K:function K(a){var _=this
_.d=_.c=_.b=_.a=null
_.$ti=a},
bR:function bR(){this.b=this.a=null},
jP:function(a,b,c,d,e){var u=new O.am()
u.sae(e)
u.sdB(a)
u.scI(0,d)
u.sdF(b)
u.se6(!1)
u.f=null
return u},
cN:function cN(){var _=this
_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
ev:function ev(a,b){var _=this
_.f=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
cP:function cP(){},
ew:function ew(a,b){var _=this
_.a=a
_.b=b
_.e=_.d=_.c=null},
aB:function aB(a,b){var _=this
_.f=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
ey:function ey(a,b){var _=this
_.f=_.ch=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
ez:function ez(a,b){var _=this
_.f=_.ch=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
ba:function ba(){},
d8:function d8(){var _=this
_.e=_.d=_.c=_.b=_.a=null},
am:function am(){var _=this
_.f=_.e=_.d=_.c=_.b=_.a=null}},E={
i1:function(a,b,c,d,e,f){var u=new E.aa()
u.a=d
u.b=!0
u.seN(0,O.dU(E.aa))
u.y.az(u.gjg(),u.gjj())
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
u.sbB(0,e)
return u},
jK:function(a,b){var u=new E.eN(a,b)
u.eI(a,b)
return u},
jR:function(a,b,c,d,e){var u,t,s,r
u=J.U(a)
if(!!u.$ibh)return E.ik(a,!0,!0,!0,!1)
t=W.hY(null,null)
s=t.style
s.width="100%"
s.height="100%"
u.gdu(a).h(0,t)
r=E.ik(t,!0,!0,!0,!1)
r.a=a
return r},
ik:function(a,b,c,d,e){var u,t,s,r,q,p,o,n,m,l,k,j
u=new E.dd()
t=P.jt(["alpha",!0,"depth",!0,"stencil",!1,"antialias",!0,"premultipliedAlpha",!0,"preserveDrawingBuffer",!1],P.v,null)
s=C.m.cF(a,"webgl",t)
s=H.i(s==null?C.m.cF(a,"experimental-webgl",t):s,"$ibs")
if(s==null)H.o(P.p("Failed to get the rendering context for WebGL."))
u.b=a
u.a=a
u.c=s
u.e=E.jK(s,a)
r=new T.f7(s)
r.b=H.a3((s&&C.b).by(s,3379))
r.c=H.a3(C.b.by(s,34076))
r.d=0
r.e=0
u.f=r
r=new X.dl(a)
q=new X.ej()
q.c=new X.ah(!1,!1,!1)
q.shD(P.ju(null,null,null,P.u))
r.b=q
q=new X.eB(r)
q.f=0
q.r=V.aU()
q.x=V.aU()
q.Q=1
q.ch=1
r.c=q
q=new X.ep(r)
q.r=0
q.x=V.aU()
q.Q=1
q.ch=1
q.cx=1
q.cy=1
r.d=q
q=new X.fa(r)
q.e=0
q.f=V.aU()
q.r=V.aU()
r.e=q
r.f=!1
r.r=!1
r.x=!1
r.y=null
r.sfk(H.b([],[[P.bZ,P.E]]))
q=r.z
p=document
o=W.a1
n={func:1,ret:-1,args:[o]};(q&&C.a).h(q,W.a2(p,"contextmenu",H.l(r.gfV(),n),!1,o))
q=r.z
m=W.j
l={func:1,ret:-1,args:[m]};(q&&C.a).h(q,W.a2(a,"focus",H.l(r.gh4(),l),!1,m))
q=r.z;(q&&C.a).h(q,W.a2(a,"blur",H.l(r.gfP(),l),!1,m))
q=r.z
k=W.az
j={func:1,ret:-1,args:[k]};(q&&C.a).h(q,W.a2(p,"keyup",H.l(r.gh8(),j),!1,k))
q=r.z;(q&&C.a).h(q,W.a2(p,"keydown",H.l(r.gh6(),j),!1,k))
k=r.z;(k&&C.a).h(k,W.a2(a,"mousedown",H.l(r.ghc(),n),!1,o))
k=r.z;(k&&C.a).h(k,W.a2(a,"mouseup",H.l(r.ghg(),n),!1,o))
k=r.z;(k&&C.a).h(k,W.a2(a,"mousemove",H.l(r.ghe(),n),!1,o))
k=r.z
j=W.aJ;(k&&C.a).h(k,W.a2(a,H.R(W.jn(a)),H.l(r.ghi(),{func:1,ret:-1,args:[j]}),!1,j))
j=r.z;(j&&C.a).h(j,W.a2(p,"mousemove",H.l(r.gfX(),n),!1,o))
j=r.z;(j&&C.a).h(j,W.a2(p,"mouseup",H.l(r.gfZ(),n),!1,o))
o=r.z;(o&&C.a).h(o,W.a2(p,"pointerlockchange",H.l(r.ghk(),l),!1,m))
m=r.z
l=W.at
p={func:1,ret:-1,args:[l]};(m&&C.a).h(m,W.a2(a,"touchstart",H.l(r.ghA(),p),!1,l))
m=r.z;(m&&C.a).h(m,W.a2(a,"touchend",H.l(r.ghw(),p),!1,l))
m=r.z;(m&&C.a).h(m,W.a2(a,"touchmove",H.l(r.ghy(),p),!1,l))
u.r=r
u.Q=!0
u.ch=!1
u.cx=new P.af(Date.now(),!1)
u.cy=0
u.dd()
return u},
dQ:function dQ(){},
aa:function aa(){var _=this
_.fx=_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
eN:function eN(a,b){var _=this
_.a=a
_.b=b
_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=null},
eO:function eO(a){this.a=a},
eP:function eP(a){this.a=a},
eQ:function eQ(a){this.a=a},
dd:function dd(){var _=this
_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
f8:function f8(a){this.a=a}},Z={
ix:function(a,b,c){var u
H.d(c,"$ia",[P.u],"$aa")
u=a.createBuffer()
C.b.ai(a,b,u)
C.b.dr(a,b,new Int16Array(H.bv(c)),35044)
C.b.ai(a,b,null)
return new Z.dq(b,u)},
an:function(a){return new Z.aI(a)},
dq:function dq(a,b){this.a=a
this.b=b},
cr:function cr(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
dr:function dr(a){this.a=a},
bH:function bH(a,b,c){var _=this
_.a=a
_.b=null
_.c=b
_.d=c},
bm:function bm(a,b,c){this.a=a
this.b=b
this.c=c},
aI:function aI(a){this.a=a}},D={
B:function(){var u=new D.b2()
u.sa_(null)
u.saQ(null)
u.c=null
u.d=0
return u},
dT:function dT(){},
b2:function b2(){var _=this
_.d=_.c=_.b=_.a=null},
e5:function e5(a){this.a=a},
q:function q(a){this.a=a
this.b=null},
b3:function b3(a,b,c,d){var _=this
_.c=a
_.d=b
_.a=c
_.b=null
_.$ti=d},
b4:function b4(a,b,c,d){var _=this
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
b0:function b0(){var _=this
_.d=_.c=_.b=_.a=null},
S:function S(){},
cJ:function cJ(){var _=this
_.d=_.c=_.b=_.a=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=null},
cX:function cX(){},
d3:function d3(){},
da:function da(){},
db:function db(){},
dc:function dc(){}},X={cs:function cs(a,b){this.a=a
this.b=b},cI:function cI(a,b){this.a=a
this.b=b},ej:function ej(){var _=this
_.d=_.c=_.b=_.a=null},cL:function cL(a,b,c,d,e,f){var _=this
_.x=a
_.y=b
_.c=c
_.d=d
_.e=e
_.a=f
_.b=null},ep:function ep(a){var _=this
_.a=a
_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},ah:function ah(a,b,c){this.a=a
this.b=b
this.c=c},aS:function aS(a,b,c,d,e,f,g,h,i){var _=this
_.x=a
_.y=b
_.z=c
_.Q=d
_.ch=e
_.c=f
_.d=g
_.e=h
_.a=i
_.b=null},eB:function eB(a){var _=this
_.a=a
_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},bS:function bS(a,b,c,d,e){var _=this
_.x=a
_.c=b
_.d=c
_.e=d
_.a=e
_.b=null},eK:function eK(){},df:function df(a,b,c,d,e,f,g,h,i){var _=this
_.x=a
_.y=b
_.z=c
_.Q=d
_.ch=e
_.c=f
_.d=g
_.e=h
_.a=i
_.b=null},fa:function fa(a){var _=this
_.a=a
_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},dl:function dl(a){var _=this
_.a=a
_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},
hv:function(a,b,c,d,e,f,g){var u,t
u=new X.ec()
if(d==null)t=new V.W(0,0,0,1)
else t=d
u.a=t
u.b=!0
u.c=e
u.d=!0
u.e=g
u.f=!1
t=V.eM()
u.r=t
return u},
i9:function(a,b,c,d,e){var u,t,s
u=new X.cW()
u.c=1.0471975511965976
u.d=0.1
u.e=2000
if(null!=c){t=u.b
u.b=c
if(c!=null)c.gm().h(0,u.geY())
s=new D.x("mover",t,u.b,u,[U.a5])
s.b=!0
u.a7(s)}s=u.c
if(!(Math.abs(s-b)<$.G().a)){u.c=b
s=new D.x("fov",s,b,u,[P.t])
s.b=!0
u.a7(s)}s=u.d
if(!(Math.abs(s-d)<$.G().a)){u.d=d
s=new D.x("near",s,d,u,[P.t])
s.b=!0
u.a7(s)}s=u.e
if(!(Math.abs(s-a)<$.G().a)){u.e=a
s=new D.x("far",s,a,u,[P.t])
s.b=!0
u.a7(s)}return u},
dP:function dP(){var _=this
_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
bg:function bg(){},
ec:function ec(){var _=this
_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
ed:function ed(){this.b=this.a=null},
cW:function cW(){var _=this
_.f=_.e=_.d=_.c=_.b=_.a=null},
c_:function c_(){}},V={
kE:function(a,b,c){var u
if(c<=b)return b
u=c-b
a=C.d.ex(a-b,u)
return(a<0?a+u:a)+b},
J:function(a,b,c){if(a==null)return C.j.aw("null",c)
return C.j.aw(C.d.ek(Math.abs(a-0)<$.G().a?0:a,b),c+b+1)},
bA:function(a,b,c){var u,t,s,r,q,p
H.d(a,"$ia",[P.t],"$aa")
u=H.b([],[P.v])
for(t=a.length,s=0,r=0;r<a.length;a.length===t||(0,H.y)(a),++r){q=V.J(a[r],b,c)
s=Math.max(s,q.length)
C.a.h(u,q)}for(p=u.length-1;p>=0;--p){if(p>=u.length)return H.e(u,p)
C.a.Z(u,p,C.j.aw(u[p],s))}return u},
hP:function(a,b){return C.d.jG(Math.pow(b,C.D.cj(Math.log(H.kc(a))/Math.log(b))))},
b8:function(){var u=$.eA
if(u==null){u=V.aC(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1)
$.eA=u}return u},
aC:function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){return new V.a4(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p)},
i6:function(a,b,c){var u,t,s,r,q,p,o,n
u=c.u(0,Math.sqrt(c.A(c)))
t=b.at(u)
s=t.u(0,Math.sqrt(t.A(t)))
r=u.at(s)
q=new V.F(a.a,a.b,a.c)
p=s.M(0).A(q)
o=r.M(0).A(q)
n=u.M(0).A(q)
return V.aC(s.a,r.a,u.a,p,s.b,r.b,u.b,o,s.c,r.c,u.c,n,0,0,0,1)},
aU:function(){var u=$.ib
if(u==null){u=new V.T(0,0)
$.ib=u}return u},
ic:function(){var u=$.bU
if(u==null){u=new V.Q(0,0,0)
$.bU=u}return u},
eM:function(){var u=$.bW
if(u==null){u=V.d_(0,0,1,1)
$.bW=u}return u},
d_:function(a,b,c,d){if(c<0){a+=c
c=-c}if(d<0){b+=d
d=-d}return new V.br(a,b,c,d)},
c9:function(){var u=$.iu
if(u==null){u=new V.F(0,0,0)
$.iu=u}return u},
iv:function(){var u=$.it
if(u==null){u=new V.F(0,1,0)
$.it=u}return u},
iw:function(){var u=$.fr
if(u==null){u=new V.F(0,0,1)
$.fr=u}return u},
P:function P(a,b,c){this.a=a
this.b=b
this.c=c},
W:function W(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
e3:function e3(a){this.a=a},
cQ:function cQ(a,b,c,d,e,f,g,h,i){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.x=h
_.y=i},
a4:function a4(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){var _=this
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
T:function T(a,b){this.a=a
this.b=b},
Q:function Q(a,b,c){this.a=a
this.b=b
this.c=c},
aE:function aE(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
br:function br(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
I:function I(a,b){this.a=a
this.b=b},
F:function F(a,b,c){this.a=a
this.b=b
this.c=c},
a6:function(a){var u=new V.eT()
u.eJ(a)
return u},
dL:function dL(){},
aR:function aR(){},
cM:function cM(){},
aT:function aT(){this.a=null},
eT:function eT(){this.a=null},
bY:function bY(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
de:function de(a,b,c){this.a=a
this.b=b
this.c=c},
c0:function c0(a,b){this.a=a
this.b=b
this.c=null},
f9:function f9(){this.c=this.b=this.a=null},
c1:function c1(a){this.b=a
this.a=this.c=null},
kz:function(a){P.jS(C.A,new V.hp(a))},
jM:function(a,b){var u=new V.eX()
u.eK(a,!0)
return u},
hp:function hp(a){this.a=a},
eX:function eX(){this.b=this.a=null},
eZ:function eZ(a){this.a=a},
eY:function eY(a){this.a=a}},U={
hu:function(){var u=new U.dV()
u.a=!0
u.b=1e12
u.c=-1e12
u.d=0
u.e=100
u.f=0
u.x=0
u.r=0
return u},
i_:function(a){var u=new U.cu()
u.a=a
return u},
dV:function dV(){var _=this
_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
cu:function cu(){this.b=this.a=null},
bP:function bP(){var _=this
_.d=_.c=_.b=_.a=_.r=_.f=_.e=null},
a5:function a5(){},
dm:function dm(){var _=this
_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
dn:function dn(){var _=this
_.fx=_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
dp:function dp(){var _=this
_.r=_.f=_.e=_.d=_.c=_.b=_.a=null}},M={ct:function ct(){var _=this
_.d=_.c=_.b=_.a=_.f=_.e=null},cw:function cw(){var _=this
_.f=_.e=_.d=_.c=_.b=_.a=null},cz:function cz(){var _=this
_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},ai:function ai(){}},A={
jx:function(a,b){var u,t
u=a.ad
t=new A.cO(b,u)
t.cM(b,u)
t.eH(a,b)
return t},
jQ:function(a){var u,t
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
jO:function(a,b){var u,t
u="TextureLayout_"+a
t=new A.d9(b,u)
t.cM(b,u)
t.eL(a,b)
return t},
hE:function(a,b,c,d,e){var u=new A.fg(a,b,c,e)
u.f=d
u.sig(P.jv(d,0,!1,P.u))
return u},
co:function co(a,b,c){this.a=a
this.b=b
this.c=c},
dO:function dO(a){this.a=a},
cO:function cO(a,b){var _=this
_.bd=_.dM=_.bc=_.ad=_.ak=_.y2=_.y1=_.x2=_.x1=_.ry=_.rx=_.r2=_.r1=_.k4=_.k3=_.k2=_.k1=_.id=_.go=_.fy=_.fx=_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=null
_.e1=_.cc=_.e0=_.bq=_.e_=_.dZ=_.bp=_.bo=_.dY=_.dX=_.bn=_.bm=_.bl=_.dW=_.dV=_.bk=_.dU=_.dT=_.bj=_.dS=_.dR=_.bi=_.bh=_.dQ=_.dP=_.bg=_.bf=_.dO=_.dN=_.be=null
_.ci=_.e5=_.cg=_.e4=_.cf=_.e3=_.ce=_.e2=_.cd=null
_.a=a
_.b=b
_.y=_.x=_.r=_.f=_.e=_.d=_.c=null},
ex:function ex(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5){var _=this
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
_.ak=b3
_.ad=b4
_.bc=b5},
c2:function c2(a,b,c){this.a=a
this.b=b
this.c=c},
c6:function c6(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.x=h},
c4:function c4(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},
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
c8:function c8(a,b,c,d,e,f,g,h,i,j,k,l,m,n){var _=this
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
bX:function bX(){},
bi:function bi(a,b){this.a=a
this.b=b},
d9:function d9(a,b){var _=this
_.fx=_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=null
_.a=a
_.b=b
_.y=_.x=_.r=_.f=_.e=_.d=_.c=null},
dg:function dg(){},
fk:function fk(a){this.a=a},
z:function z(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
fh:function fh(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
fi:function fi(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
fj:function fj(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
fg:function fg(a,b,c,d){var _=this
_.f=_.e=null
_.a=a
_.b=b
_.c=c
_.d=d},
O:function O(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
aj:function aj(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
C:function C(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
dh:function dh(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
fl:function fl(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
c3:function c3(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
a7:function a7(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
a_:function a_(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
ab:function ab(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d}},F={
kD:function(a,b,c,d){return F.ke(c,a,d,b,new F.hq())},
ke:function(a,b,c,d,e){var u=F.kB(a,b,new F.hf(H.l(e,{func:1,ret:V.Q,args:[P.t]}),d,b,c),null)
if(u==null)return
u.as()
u.jf(new F.fy(),new F.eG())
return u},
kB:function(a,b,c,d){var u,t,s,r,q,p,o,n,m,l,k,j,i,h
H.l(c,{func:1,ret:-1,args:[F.ad,P.t,P.t]})
if(a<1)return
if(b<1)return
u=F.ih()
t=H.b([],[F.ad])
for(s=0;s<=b;++s){r=s/b
q=u.a
if(r<0)p=0
else p=r>1?1:r
q.toString
o=F.fs(null,null,new V.W(p,0,0,1),null,null,new V.T(r,1),null,null,0)
q.h(0,o)
c.$3(o,r,0)
C.a.h(t,o.dD(d))}for(s=1;s<=a;++s){n=s/a
for(q=n>1,p=n<0,m=1-n,l=0;l<=b;++l){r=l/b
k=u.a
if(r<0)j=0
else j=r>1?1:r
if(p)i=0
else i=q?1:n
if(p)h=0
else h=q?1:n
k.toString
o=F.fs(null,null,new V.W(j,i,h,1),null,null,new V.T(r,m),null,null,0)
k.h(0,o)
c.$3(o,r,n)
C.a.h(t,o.dD(d))}}u.d.iG(a+1,b+1,t)
return u},
cA:function(a,b,c){var u,t
u=new F.Y()
t=a.a
if(t==null)H.o(P.p("May not create a face with a first vertex which is not attached to a shape."))
if(t!=b.a||t!=c.a)H.o(P.p("May not create a face with vertices attached to different shapes."))
u.hP(a)
u.hQ(b)
u.hR(c)
C.a.h(u.a.a.d.b,u)
u.a.a.a4()
return u},
ih:function(){var u,t
u=new F.d2()
t=new F.ft(u)
t.b=!1
t.sih(H.b([],[F.ad]))
u.a=t
t=new F.eW(u)
t.sbV(H.b([],[F.bn]))
u.b=t
t=new F.eV(u)
t.sfv(H.b([],[F.b7]))
u.c=t
t=new F.eU(u)
t.sfl(H.b([],[F.Y]))
u.d=t
u.e=null
return u},
fs:function(a,b,c,d,e,f,g,h,i){var u,t,s
u=new F.ad()
t=new F.fB(u)
t.sbV(H.b([],[F.bn]))
u.b=t
t=new F.fx(u)
s=[F.b7]
t.sfw(H.b([],s))
t.sfz(H.b([],s))
u.c=t
t=new F.fu(u)
s=[F.Y]
t.sfm(H.b([],s))
t.sfn(H.b([],s))
t.sfo(H.b([],s))
u.d=t
h=$.j8()
u.e=0
t=$.av()
s=h.a
u.f=(s&t.a)!==0?d:null
u.r=(s&$.aX().a)!==0?e:null
u.x=(s&$.aW().a)!==0?b:null
u.y=(s&$.aY().a)!==0?f:null
u.z=(s&$.aZ().a)!==0?g:null
u.Q=(s&$.j9().a)!==0?c:null
u.ch=(s&$.bE().a)!==0?i:0
u.cx=(s&$.aV().a)!==0?a:null
return u},
hq:function hq(){},
hf:function hf(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
Y:function Y(){var _=this
_.e=_.d=_.c=_.b=_.a=null},
e6:function e6(){},
f_:function f_(){},
b7:function b7(){},
ek:function ek(){},
ff:function ff(){},
bn:function bn(){},
d2:function d2(){var _=this
_.e=_.d=_.c=_.b=_.a=null},
eU:function eU(a){this.a=a
this.b=null},
eV:function eV(a){this.a=a
this.b=null},
eW:function eW(a){this.a=a
this.b=null},
ad:function ad(){var _=this
_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
fD:function fD(a){this.a=a},
fC:function fC(a){this.a=a},
ft:function ft(a){this.a=a
this.c=this.b=null},
fu:function fu(a){var _=this
_.a=a
_.d=_.c=_.b=null},
fv:function fv(a,b){this.a=a
this.b=b},
fw:function fw(a,b){this.a=a
this.b=b},
fx:function fx(a){this.a=a
this.c=this.b=null},
fz:function fz(){},
fy:function fy(){},
fA:function fA(){},
eG:function eG(){},
fB:function fB(a){this.a=a
this.b=null}},T={
ij:function(a,b){var u=new T.f6()
u.a=a
u.b=b
u.c=!1
u.d=!1
u.e=0
u.f=0
u.r=0
u.x=0
return u},
bt:function bt(){},
d7:function d7(){},
f6:function f6(){var _=this
_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
f7:function f7(a){var _=this
_.a=a
_.e=_.d=_.c=_.b=null}},S={
iR:function(){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1
u=V.jM("Test 036",!0)
t=W.hY(null,null)
t.className="pageLargeCanvas"
t.id="testCanvas"
C.l.Y(u.a,t)
s=[P.v]
u.dj(H.b(["Test of the texture layout cover technique."],s))
u.dj(H.b(["\xab[Back to Tests|../]"],s))
r=C.B.er(document,"testCanvas")
if(r==null)H.o(P.p("Failed to find an element with the identifier, testCanvas."))
q=E.jR(r,!0,!0,!0,!1)
p=new U.bP()
u=U.a5
p.b5(u)
p.az(p.gfH(),p.gho())
p.e=null
p.f=V.b8()
p.r=0
s=q.r
o=new U.dn()
n=U.hu()
n.scE(0,!0)
n.scp(6.283185307179586)
n.scr(0)
n.sa2(0,0)
n.scq(100)
n.sR(0)
n.sca(0.5)
o.b=n
m=o.gaC()
n.gm().h(0,m)
n=U.hu()
n.scE(0,!0)
n.scp(6.283185307179586)
n.scr(0)
n.sa2(0,0)
n.scq(100)
n.sR(0)
n.sca(0.5)
o.c=n
n.gm().h(0,m)
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
l=new X.ah(!1,!1,!1)
k=o.d
o.d=l
n=[X.ah]
m=new D.x("modifiers",k,l,o,n)
m.b=!0
o.K(m)
m=o.f
if(m!==!1){o.f=!1
m=new D.x("invertX",m,!1,o,[P.Z])
m.b=!0
o.K(m)}m=o.r
if(m!==!1){o.r=!1
m=new D.x("invertY",m,!1,o,[P.Z])
m.b=!0
o.K(m)}o.aS(s)
p.h(0,o)
s=q.r
o=new U.dm()
m=U.hu()
m.scE(0,!0)
m.scp(6.283185307179586)
m.scr(0)
m.sa2(0,0)
m.scq(100)
m.sR(0)
m.sca(0.2)
o.b=m
m.gm().h(0,o.gaC())
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
l=new X.ah(!0,!1,!1)
k=o.c
o.c=l
m=new D.x("modifiers",k,l,o,n)
m.b=!0
o.K(m)
o.aS(s)
p.h(0,o)
s=q.r
o=new U.dp()
o.c=0.01
o.d=0
o.e=0
l=new X.ah(!1,!1,!1)
o.b=l
n=new D.x("modifiers",null,l,o,n)
n.b=!0
o.K(n)
o.aS(s)
p.h(0,o)
p.h(0,U.i_(V.aC(1,0,0,0,0,1,0,0,0,0,1,5,0,0,0,1)))
j=X.i9(2000,1.0471975511965976,p,0.1,null)
i=new X.dP()
i.a=512
i.b=512
i.c=512
i.d=512
i.e=!0
i.f=!0
i.r=1
i.x=1
i.ch=T.ij(0,null)
i.cx=new V.W(0,0,0,1)
i.cy=!0
i.db=2000
i.dx=!0
i.dy=V.eM()
i.say(0,800)
i.sav(0,600)
h=new V.W(0,0,0,0)
if(!i.cx.v(0,h)){k=i.cx
i.cx=h
s=new D.x("color",k,h,i,[V.W])
s.b=!0
i.a7(s)}g=E.i1(null,!0,null,"",null,null)
g.sbB(0,F.kD(30,1,15,0.5))
f=new O.cN()
f.sf4(O.dU(V.a4))
f.e.az(f.gfL(),f.gfN())
s=new O.aB(f,"emission")
s.c=C.c
s.f=new V.P(0,0,0)
f.f=s
s=new O.aB(f,"ambient")
s.c=C.c
s.f=new V.P(0,0,0)
f.r=s
s=new O.aB(f,"diffuse")
s.c=C.c
s.f=new V.P(0,0,0)
f.x=s
s=new O.aB(f,"invDiffuse")
s.c=C.c
s.f=new V.P(0,0,0)
f.y=s
s=new O.ez(f,"specular")
s.c=C.c
s.f=new V.P(0,0,0)
s.ch=100
f.z=s
s=new O.ew(f,"bump")
s.c=C.c
f.Q=s
f.ch=null
s=new O.aB(f,"reflect")
s.c=C.c
s.f=new V.P(0,0,0)
f.cx=s
s=new O.ey(f,"refract")
s.c=C.c
s.f=new V.P(0,0,0)
s.ch=1
f.cy=s
s=new O.ev(f,"alpha")
s.c=C.c
s.f=1
f.db=s
s=new D.cJ()
s.b5(D.S)
s.sfg(H.b([],[D.b0]))
s.shC(H.b([],[D.cX]))
s.shX(H.b([],[D.d3]))
s.sia(H.b([],[D.da]))
s.sib(H.b([],[D.db]))
s.sic(H.b([],[D.dc]))
s.Q=null
s.ch=null
s.cG(s.gfJ(),s.ghm(),s.ghq())
f.dx=s
o=s.Q
if(o==null){o=D.B()
s.Q=o
s=o}else s=o
s.h(0,f.ghL())
s=f.dx
o=s.ch
if(o==null){o=D.B()
s.ch=o
s=o}else s=o
s.h(0,f.gam())
f.dy=null
s=f.dx
e=V.iv()
o=U.i_(V.i6(V.ic(),e,new V.F(0,-1,-1)))
h=new V.P(1,1,1)
n=new D.b0()
n.c=new V.P(1,1,1)
n.a=V.iw()
k=n.b
n.b=o
o.gm().h(0,n.geO())
u=new D.x("mover",k,n.b,n,[u])
u.b=!0
n.al(u)
if(!n.c.v(0,h)){k=n.c
n.c=h
u=new D.x("color",k,h,n,[V.P])
u.b=!0
n.al(u)}s.h(0,n)
u=f.r
u.saj(0,new V.P(0,0,1))
u=f.x
u.saj(0,new V.P(0,1,0))
u=f.z
u.saj(0,new V.P(1,0,0))
u=f.z
if(u.c===C.c){u.c=C.i
u.bC()
u.bY(100)
s=u.a
s.a=null
s.N(null)}u.bY(10)
d=new M.cz()
d.sf7(0,O.dU(E.aa))
d.d.az(d.gfR(),d.gfT())
d.e=null
d.f=null
d.r=null
d.x=null
c=X.hv(!0,!0,!1,null,2000,null,0)
d.sdt(null)
d.sb0(0,c)
d.sb1(null)
d.sdt(j)
d.sb1(f)
d.sb0(0,i)
d.d.h(0,g)
b=new V.W(0,0,0,1)
a=new O.d8()
a.a=b
u=new D.x("backColor",null,b,a,[V.W])
u.b=!0
a.N(u)
a.b=null
a.sfj(O.dU(O.am))
a.c.az(a.gh0(),a.gh2())
a.d=0
a.e=null
for(a0=0;a0<3;++a0){a1=a0*0.3333333333333333
for(a2=0;a2<3;++a2){u=a.c
s=i.ch
o=V.d_(a1,a2*0.3333333333333333,0.3333333333333333,0.3333333333333333)
n=new O.am()
n.sae(s)
n.sdB(null)
n.scI(0,null)
n.sdF(o)
n.se6(!1)
n.f=null
u.toString
o=H.ak(u,"K",0)
H.w(n,o)
s=[o]
if(u.bU(H.b([n],s))){m=u.a
a3=m.length
C.a.h(m,n)
o=H.d(H.b([n],s),"$if",[o],"$af")
u=u.c
if(u!=null)u.$2(a3,o)}}}u=a.c
s=O.jP(null,null,!1,null,null)
s.sae(i.ch)
u.h(0,s)
a4=X.hv(!0,!0,!1,new V.W(0,0,0,1),2000,null,0)
a5=new M.cw()
a6=new X.ed()
k=a5.a
a5.a=a6
a6.gm().h(0,a5.gU())
u=new D.x("camera",k,a5.a,a5,[X.bg])
u.b=!0
a5.T(u)
a5.sb0(0,null)
a5.sb1(null)
u=E.i1(null,!0,null,"",null,null)
a7=F.ih()
s=a7.a
o=new V.F(-1,-1,1)
o=o.u(0,Math.sqrt(o.A(o)))
a8=s.bb(new V.aE(1,2,4,6),new V.W(1,0,0,1),new V.Q(-1,-1,0),new V.T(0,1),o,null)
s=a7.a
o=new V.F(1,-1,1)
o=o.u(0,Math.sqrt(o.A(o)))
a9=s.bb(new V.aE(0,3,4,6),new V.W(0,0,1,1),new V.Q(1,-1,0),new V.T(1,1),o,null)
s=a7.a
o=new V.F(1,1,1)
o=o.u(0,Math.sqrt(o.A(o)))
b0=s.bb(new V.aE(0,2,5,6),new V.W(0,1,0,1),new V.Q(1,1,0),new V.T(1,0),o,null)
s=a7.a
o=V.aU()
n=new V.F(-1,1,1)
n=n.u(0,Math.sqrt(n.A(n)))
b1=s.bb(new V.aE(0,2,4,7),new V.W(1,1,0,1),new V.Q(-1,1,0),o,n,null)
a7.d.iF(H.b([a8,a9,b0,b1],[F.ad]))
a7.as()
u.sbB(0,a7)
a5.d=u
a5.e=null
a5.sb1(a)
a5.sb0(0,a4)
u=M.ai
s=H.b([d,a5],[u])
o=new M.ct()
o.b5(u)
o.e=!1
o.f=null
o.az(o.ghs(),o.ghu())
o.c0(0,s)
u=q.d
if(u!==o){if(u!=null)u.gm().L(0,q.gcO())
q.d=o
o.gm().h(0,q.gcO())
q.cP()}V.kz(q)}}
var w=[C,H,J,P,W,O,E,Z,D,X,V,U,M,A,F,T,S]
hunkHelpers.setFunctionNamesIfNecessary(w)
var $={}
H.hz.prototype={}
J.a0.prototype={
v:function(a,b){return a===b},
gF:function(a){return H.bV(a)},
i:function(a){return"Instance of '"+H.bp(a)+"'"}}
J.eg.prototype={
i:function(a){return String(a)},
gF:function(a){return a?519018:218159},
$iZ:1}
J.cG.prototype={
v:function(a,b){return null==b},
i:function(a){return"null"},
gF:function(a){return 0},
$iD:1}
J.cH.prototype={
gF:function(a){return 0},
i:function(a){return String(a)}}
J.eJ.prototype={}
J.bu.prototype={}
J.aO.prototype={
i:function(a){var u=a[$.iY()]
if(u==null)return this.eD(a)
return"JavaScript function for "+H.k(J.aM(u))},
$S:function(){return{func:1,opt:[,,,,,,,,,,,,,,,,]}},
$ihw:1}
J.ar.prototype={
h:function(a,b){H.w(b,H.r(a,0))
if(!!a.fixed$length)H.o(P.ac("add"))
a.push(b)},
jv:function(a,b){var u
if(!!a.fixed$length)H.o(P.ac("removeAt"))
u=a.length
if(b>=u)throw H.h(P.cZ(b,null,null))
return a.splice(b,1)[0]},
L:function(a,b){var u
if(!!a.fixed$length)H.o(P.ac("remove"))
for(u=0;u<a.length;++u)if(J.L(a[u],b)){a.splice(u,1)
return!0}return!1},
c0:function(a,b){var u,t
H.d(b,"$if",[H.r(a,0)],"$af")
if(!!a.fixed$length)H.o(P.ac("addAll"))
for(u=b.length,t=0;t<b.length;b.length===u||(0,H.y)(b),++t)a.push(b[t])},
aa:function(a,b){var u,t
H.l(b,{func:1,ret:-1,args:[H.r(a,0)]})
u=a.length
for(t=0;t<u;++t){b.$1(a[t])
if(a.length!==u)throw H.h(P.bK(a))}},
D:function(a,b){var u,t
u=new Array(a.length)
u.fixed$length=Array
for(t=0;t<a.length;++t)this.Z(u,t,H.k(a[t]))
return u.join(b)},
ja:function(a){return this.D(a,"")},
a9:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
eB:function(a,b,c){var u=a.length
if(b>u)throw H.h(P.as(b,0,a.length,"start",null))
if(c<b||c>a.length)throw H.h(P.as(c,b,a.length,"end",null))
if(b===c)return H.b([],[H.r(a,0)])
return H.b(a.slice(b,c),[H.r(a,0)])},
gj2:function(a){if(a.length>0)return a[0]
throw H.h(H.i2())},
gcm:function(a){var u=a.length
if(u>0)return a[u-1]
throw H.h(H.i2())},
ez:function(a,b,c,d,e){var u,t,s
u=H.r(a,0)
H.d(d,"$if",[u],"$af")
if(!!a.immutable$list)H.o(P.ac("setRange"))
P.hB(b,c,a.length,null,null,null)
t=c-b
if(t===0)return
H.d(d,"$ia",[u],"$aa")
u=J.hh(d)
if(e+t>u.gl(d))throw H.h(H.jq())
if(e<b)for(s=t-1;s>=0;--s)a[b+s]=u.j(d,e+s)
else for(s=0;s<t;++s)a[b+s]=u.j(d,e+s)},
b4:function(a,b,c,d){return this.ez(a,b,c,d,0)},
aH:function(a,b){var u
for(u=0;u<a.length;++u)if(J.L(a[u],b))return!0
return!1},
i:function(a){return P.hx(a,"[","]")},
gP:function(a){return new J.ae(a,a.length,0,[H.r(a,0)])},
gF:function(a){return H.bV(a)},
gl:function(a){return a.length},
sl:function(a,b){if(!!a.fixed$length)H.o(P.ac("set length"))
if(b<0)throw H.h(P.as(b,0,null,"newLength",null))
a.length=b},
j:function(a,b){if(b>=a.length||b<0)throw H.h(H.bz(a,b))
return a[b]},
Z:function(a,b,c){H.w(c,H.r(a,0))
if(!!a.immutable$list)H.o(P.ac("indexed set"))
if(b>=a.length||b<0)throw H.h(H.bz(a,b))
a[b]=c},
n:function(a,b){var u,t
u=[H.r(a,0)]
H.d(b,"$ia",u,"$aa")
t=C.e.n(a.length,b.gl(b))
u=H.b([],u)
this.sl(u,t)
this.b4(u,0,a.length,a)
this.b4(u,a.length,t,b)
return u},
$if:1,
$ia:1}
J.hy.prototype={}
J.ae.prototype={
gG:function(){return this.d},
w:function(){var u,t,s
u=this.a
t=u.length
if(this.b!==t)throw H.h(H.y(u))
s=this.c
if(s>=t){this.scR(null)
return!1}this.scR(u[s]);++this.c
return!0},
scR:function(a){this.d=H.w(a,H.r(this,0))},
$iay:1}
J.b5.prototype={
jG:function(a){var u
if(a>=-2147483648&&a<=2147483647)return a|0
if(isFinite(a)){u=a<0?Math.ceil(a):Math.floor(a)
return u+0}throw H.h(P.ac(""+a+".toInt()"))},
cj:function(a){var u,t
if(a>=0){if(a<=2147483647)return a|0}else if(a>=-2147483648){u=a|0
return a===u?u:u-1}t=Math.floor(a)
if(isFinite(t))return t
throw H.h(P.ac(""+a+".floor()"))},
V:function(a){if(a>0){if(a!==1/0)return Math.round(a)}else if(a>-1/0)return 0-Math.round(0-a)
throw H.h(P.ac(""+a+".round()"))},
ek:function(a,b){var u,t
if(b>20)throw H.h(P.as(b,0,20,"fractionDigits",null))
u=a.toFixed(b)
if(a===0)t=1/a<0
else t=!1
if(t)return"-"+u
return u},
i:function(a){if(a===0&&1/a<0)return"-0.0"
else return""+a},
gF:function(a){var u,t,s,r,q
u=a|0
if(a===u)return 536870911&u
t=Math.abs(a)
s=Math.log(t)/0.6931471805599453|0
r=Math.pow(2,s)
q=t<1?t/r:r/t
return 536870911&((q*9007199254740992|0)+(q*3542243181176521|0))*599197+s*1259},
n:function(a,b){if(typeof b!=="number")throw H.h(H.aL(b))
return a+b},
p:function(a,b){if(typeof b!=="number")throw H.h(H.aL(b))
return a-b},
q:function(a,b){if(typeof b!=="number")throw H.h(H.aL(b))
return a*b},
ex:function(a,b){var u=a%b
if(u===0)return 0
if(u>0)return u
if(b<0)return u-b
else return u+b},
eG:function(a,b){if((a|0)===a)if(b>=1||b<-1)return a/b|0
return this.df(a,b)},
X:function(a,b){return(a|0)===a?a/b|0:this.df(a,b)},
df:function(a,b){var u=a/b
if(u>=-2147483648&&u<=2147483647)return u|0
if(u>0){if(u!==1/0)return Math.floor(u)}else if(u>-1/0)return Math.ceil(u)
throw H.h(P.ac("Result of truncating division is "+H.k(u)+": "+H.k(a)+" ~/ "+b))},
b9:function(a,b){var u
if(a>0)u=this.hW(a,b)
else{u=b>31?31:b
u=a>>u>>>0}return u},
hW:function(a,b){return b>31?0:a>>>b},
$it:1,
$ia8:1}
J.cF.prototype={$iu:1}
J.cE.prototype={}
J.b6.prototype={
c9:function(a,b){if(b<0)throw H.h(H.bz(a,b))
if(b>=a.length)H.o(H.bz(a,b))
return a.charCodeAt(b)},
b6:function(a,b){if(b>=a.length)throw H.h(H.bz(a,b))
return a.charCodeAt(b)},
n:function(a,b){if(typeof b!=="string")throw H.h(P.hs(b,null,null))
return a+b},
cK:function(a,b,c){if(c==null)c=a.length
if(b<0)throw H.h(P.cZ(b,null,null))
if(b>c)throw H.h(P.cZ(b,null,null))
if(c>a.length)throw H.h(P.cZ(c,null,null))
return a.substring(b,c)},
cJ:function(a,b){return this.cK(a,b,null)},
q:function(a,b){var u,t
if(0>=b)return""
if(b===1||a.length===0)return a
if(b!==b>>>0)throw H.h(C.y)
for(u=a,t="";!0;){if((b&1)===1)t=u+t
b=b>>>1
if(b===0)break
u+=u}return t},
jm:function(a,b,c){var u=b-a.length
if(u<=0)return a
return this.q(c,u)+a},
aw:function(a,b){return this.jm(a,b," ")},
i:function(a){return a},
gF:function(a){var u,t,s
for(u=a.length,t=0,s=0;s<u;++s){t=536870911&t+a.charCodeAt(s)
t=536870911&t+((524287&t)<<10)
t^=t>>6}t=536870911&t+((67108863&t)<<3)
t^=t>>11
return 536870911&t+((16383&t)<<15)},
gl:function(a){return a.length},
$ii8:1,
$iv:1}
H.V.prototype={
gl:function(a){return this.a.length},
j:function(a,b){return C.j.c9(this.a,b)},
$adk:function(){return[P.u]},
$aN:function(){return[P.u]},
$af:function(){return[P.u]},
$aa:function(){return[P.u]}}
H.e1.prototype={}
H.cK.prototype={
gG:function(){return this.d},
w:function(){var u,t,s,r
u=this.a
t=J.hh(u)
s=t.gl(u)
if(this.b!==s)throw H.h(P.bK(u))
r=this.c
if(r>=s){this.saO(null)
return!1}this.saO(t.a9(u,r));++this.c
return!0},
saO:function(a){this.d=H.w(a,H.r(this,0))},
$iay:1}
H.et.prototype={
gP:function(a){return new H.eu(J.dK(this.a),this.b,this.$ti)},
gl:function(a){return J.cn(this.a)},
a9:function(a,b){return this.b.$1(J.hV(this.a,b))},
$af:function(a,b){return[b]}}
H.eu.prototype={
w:function(){var u=this.b
if(u.w()){this.saO(this.c.$1(u.gG()))
return!0}this.saO(null)
return!1},
gG:function(){return this.a},
saO:function(a){this.a=H.w(a,H.r(this,1))},
$aay:function(a,b){return[b]}}
H.fE.prototype={
gP:function(a){return new H.fF(J.dK(this.a),this.b,this.$ti)}}
H.fF.prototype={
w:function(){var u,t
for(u=this.a,t=this.b;u.w();)if(t.$1(u.gG()))return!0
return!1},
gG:function(){return this.a.gG()}}
H.bk.prototype={}
H.dk.prototype={}
H.dj.prototype={}
H.eL.prototype={}
H.fc.prototype={
ab:function(a){var u,t,s
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
H.eH.prototype={
i:function(a){var u=this.b
if(u==null)return"NoSuchMethodError: "+H.k(this.a)
return"NoSuchMethodError: method not found: '"+u+"' on null"}}
H.ei.prototype={
i:function(a){var u,t
u=this.b
if(u==null)return"NoSuchMethodError: "+H.k(this.a)
t=this.c
if(t==null)return"NoSuchMethodError: method not found: '"+u+"' ("+H.k(this.a)+")"
return"NoSuchMethodError: method not found: '"+u+"' on '"+t+"' ("+H.k(this.a)+")"}}
H.fn.prototype={
i:function(a){var u=this.a
return u.length===0?"Error":"Error: "+u}}
H.hr.prototype={
$1:function(a){if(!!J.U(a).$ib1)if(a.$thrownJsError==null)a.$thrownJsError=this.a
return a},
$S:15}
H.dB.prototype={
i:function(a){var u,t
u=this.b
if(u!=null)return u
u=this.a
t=u!==null&&typeof u==="object"?u.stack:null
u=t==null?"":t
this.b=u
return u},
$iag:1}
H.bI.prototype={
i:function(a){return"Closure '"+H.bp(this).trim()+"'"},
$ihw:1,
gjQ:function(){return this},
$C:"$1",
$R:1,
$D:null}
H.f5.prototype={}
H.f0.prototype={
i:function(a){var u=this.$static_name
if(u==null)return"Closure of unknown static method"
return"Closure '"+H.bD(u)+"'"}}
H.bF.prototype={
v:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof H.bF))return!1
return this.a===b.a&&this.b===b.b&&this.c===b.c},
gF:function(a){var u,t
u=this.c
if(u==null)t=H.bV(this.a)
else t=typeof u!=="object"?J.bf(u):H.bV(u)
return(t^H.bV(this.b))>>>0},
i:function(a){var u=this.c
if(u==null)u=this.a
return"Closure '"+H.k(this.d)+"' of "+("Instance of '"+H.bp(u)+"'")}}
H.fe.prototype={
i:function(a){return this.a}}
H.dS.prototype={
i:function(a){return this.a}}
H.eR.prototype={
i:function(a){return"RuntimeError: "+H.k(this.a)}}
H.aQ.prototype={
gl:function(a){return this.a},
dC:function(a){var u,t
if(typeof a==="string"){u=this.b
if(u==null)return!1
return this.d_(u,a)}else if(typeof a==="number"&&(a&0x3ffffff)===a){t=this.c
if(t==null)return!1
return this.d_(t,a)}else return this.j8(a)},
j8:function(a){var u=this.d
if(u==null)return!1
return this.cl(this.bI(u,J.bf(a)&0x3ffffff),a)>=0},
j:function(a,b){var u,t,s,r
if(typeof b==="string"){u=this.b
if(u==null)return
t=this.b7(u,b)
s=t==null?null:t.b
return s}else if(typeof b==="number"&&(b&0x3ffffff)===b){r=this.c
if(r==null)return
t=this.b7(r,b)
s=t==null?null:t.b
return s}else return this.j9(b)},
j9:function(a){var u,t,s
u=this.d
if(u==null)return
t=this.bI(u,J.bf(a)&0x3ffffff)
s=this.cl(t,a)
if(s<0)return
return t[s].b},
Z:function(a,b,c){var u,t,s,r,q,p
H.w(b,H.r(this,0))
H.w(c,H.r(this,1))
if(typeof b==="string"){u=this.b
if(u==null){u=this.bS()
this.b=u}this.cT(u,b,c)}else if(typeof b==="number"&&(b&0x3ffffff)===b){t=this.c
if(t==null){t=this.bS()
this.c=t}this.cT(t,b,c)}else{s=this.d
if(s==null){s=this.bS()
this.d=s}r=J.bf(b)&0x3ffffff
q=this.bI(s,r)
if(q==null)this.bZ(s,r,[this.bT(b,c)])
else{p=this.cl(q,b)
if(p>=0)q[p].b=c
else q.push(this.bT(b,c))}}},
aa:function(a,b){var u,t
H.l(b,{func:1,ret:-1,args:[H.r(this,0),H.r(this,1)]})
u=this.e
t=this.r
for(;u!=null;){b.$2(u.a,u.b)
if(t!==this.r)throw H.h(P.bK(this))
u=u.c}},
cT:function(a,b,c){var u
H.w(b,H.r(this,0))
H.w(c,H.r(this,1))
u=this.b7(a,b)
if(u==null)this.bZ(a,b,this.bT(b,c))
else u.b=c},
bT:function(a,b){var u,t
u=new H.el(H.w(a,H.r(this,0)),H.w(b,H.r(this,1)))
if(this.e==null){this.f=u
this.e=u}else{t=this.f
u.d=t
t.c=u
this.f=u}++this.a
this.r=this.r+1&67108863
return u},
cl:function(a,b){var u,t
if(a==null)return-1
u=a.length
for(t=0;t<u;++t)if(J.L(a[t].a,b))return t
return-1},
i:function(a){return P.i5(this)},
b7:function(a,b){return a[b]},
bI:function(a,b){return a[b]},
bZ:function(a,b,c){a[b]=c},
fd:function(a,b){delete a[b]},
d_:function(a,b){return this.b7(a,b)!=null},
bS:function(){var u=Object.create(null)
this.bZ(u,"<non-identifier-key>",u)
this.fd(u,"<non-identifier-key>")
return u},
$ii4:1}
H.el.prototype={}
H.em.prototype={
gl:function(a){return this.a.a},
gP:function(a){var u,t
u=this.a
t=new H.en(u,u.r,this.$ti)
t.c=u.e
return t}}
H.en.prototype={
gG:function(){return this.d},
w:function(){var u=this.a
if(this.b!==u.r)throw H.h(P.bK(u))
else{u=this.c
if(u==null){this.scS(null)
return!1}else{this.scS(u.a)
this.c=this.c.c
return!0}}},
scS:function(a){this.d=H.w(a,H.r(this,0))},
$iay:1}
H.hi.prototype={
$1:function(a){return this.a(a)},
$S:15}
H.hj.prototype={
$2:function(a,b){return this.a(a,b)},
$S:33}
H.hk.prototype={
$1:function(a){return this.a(H.R(a))},
$S:29}
H.eh.prototype={
i:function(a){return"RegExp/"+this.a+"/"},
$ii8:1}
H.cU.prototype={$ikX:1}
H.cR.prototype={
gl:function(a){return a.length},
$iaP:1,
$aaP:function(){}}
H.cS.prototype={
j:function(a,b){H.dF(b,a,a.length)
return a[b]},
$abk:function(){return[P.t]},
$aN:function(){return[P.t]},
$if:1,
$af:function(){return[P.t]},
$ia:1,
$aa:function(){return[P.t]}}
H.cT.prototype={
$abk:function(){return[P.u]},
$aN:function(){return[P.u]},
$if:1,
$af:function(){return[P.u]},
$ia:1,
$aa:function(){return[P.u]}}
H.eC.prototype={
j:function(a,b){H.dF(b,a,a.length)
return a[b]}}
H.eD.prototype={
j:function(a,b){H.dF(b,a,a.length)
return a[b]}}
H.eE.prototype={
j:function(a,b){H.dF(b,a,a.length)
return a[b]}}
H.eF.prototype={
gl:function(a){return a.length},
j:function(a,b){H.dF(b,a,a.length)
return a[b]}}
H.cd.prototype={}
H.ce.prototype={}
H.cf.prototype={}
H.cg.prototype={}
P.fH.prototype={
$1:function(a){var u,t
u=this.a
t=u.a
u.a=null
t.$0()},
$S:12}
P.fG.prototype={
$1:function(a){var u,t
this.a.a=H.l(a,{func:1,ret:-1})
u=this.b
t=this.c
u.firstChild?u.removeChild(t):u.appendChild(t)},
$S:26}
P.fI.prototype={
$0:function(){this.a.$0()},
$S:2}
P.fJ.prototype={
$0:function(){this.a.$0()},
$S:2}
P.dC.prototype={
eW:function(a,b){if(self.setTimeout!=null)this.b=self.setTimeout(H.by(new P.h8(this,b),0),a)
else throw H.h(P.ac("`setTimeout()` not found."))},
eX:function(a,b){if(self.setTimeout!=null)this.b=self.setInterval(H.by(new P.h7(this,a,Date.now(),b),0),a)
else throw H.h(P.ac("Periodic timer."))},
$iaF:1}
P.h8.prototype={
$0:function(){var u=this.a
u.b=null
u.c=1
this.b.$0()},
$S:3}
P.h7.prototype={
$0:function(){var u,t,s,r
u=this.a
t=u.c+1
s=this.b
if(s>0){r=Date.now()-this.c
if(r>(t+1)*s)t=C.e.eG(r,s)}u.c=t
this.d.$1(u)},
$S:2}
P.aK.prototype={
jd:function(a){if(this.c!==6)return!0
return this.b.b.cA(H.l(this.d,{func:1,ret:P.Z,args:[P.E]}),a.a,P.Z,P.E)},
j7:function(a){var u,t,s,r
u=this.e
t=P.E
s={futureOr:1,type:H.r(this,1)}
r=this.b.b
if(H.dG(u,{func:1,args:[P.E,P.ag]}))return H.hM(r.jB(u,a.a,a.b,null,t,P.ag),s)
else return H.hM(r.cA(H.l(u,{func:1,args:[P.E]}),a.a,null,t),s)}}
P.ao.prototype={
ej:function(a,b,c){var u,t,s,r
u=H.r(this,0)
H.l(a,{func:1,ret:{futureOr:1,type:c},args:[u]})
t=$.M
if(t!==C.k){t.toString
H.l(a,{func:1,ret:{futureOr:1,type:c},args:[u]})
if(b!=null)b=P.k5(b,t)}H.l(a,{func:1,ret:{futureOr:1,type:c},args:[u]})
s=new P.ao(0,$.M,[c])
r=b==null?1:3
this.cU(new P.aK(s,r,a,b,[u,c]))
return s},
jF:function(a,b){return this.ej(a,null,b)},
cU:function(a){var u,t
u=this.a
if(u<=1){a.a=H.i(this.c,"$iaK")
this.c=a}else{if(u===2){t=H.i(this.c,"$iao")
u=t.a
if(u<4){t.cU(a)
return}this.a=u
this.c=t.c}u=this.b
u.toString
P.hd(null,null,u,H.l(new P.fP(this,a),{func:1,ret:-1}))}},
da:function(a){var u,t,s,r,q,p
u={}
u.a=a
if(a==null)return
t=this.a
if(t<=1){s=H.i(this.c,"$iaK")
this.c=a
if(s!=null){for(r=a;q=r.a,q!=null;r=q);r.a=s}}else{if(t===2){p=H.i(this.c,"$iao")
t=p.a
if(t<4){p.da(a)
return}this.a=t
this.c=p.c}u.a=this.b8(a)
t=this.b
t.toString
P.hd(null,null,t,H.l(new P.fT(u,this),{func:1,ret:-1}))}},
bX:function(){var u=H.i(this.c,"$iaK")
this.c=null
return this.b8(u)},
b8:function(a){var u,t,s
for(u=a,t=null;u!=null;t=u,u=s){s=u.a
u.a=t}return t},
cW:function(a){var u,t,s
u=H.r(this,0)
H.hM(a,{futureOr:1,type:u})
t=this.$ti
if(H.cj(a,"$ibO",t,"$abO"))if(H.cj(a,"$iao",t,null))P.iy(a,this)
else P.jX(a,this)
else{s=this.bX()
H.w(a,u)
this.a=4
this.c=a
P.cb(this,s)}},
cX:function(a,b){var u
H.i(b,"$iag")
u=this.bX()
this.a=8
this.c=new P.a9(a,b)
P.cb(this,u)},
$ibO:1}
P.fP.prototype={
$0:function(){P.cb(this.a,this.b)},
$S:2}
P.fT.prototype={
$0:function(){P.cb(this.b,this.a.a)},
$S:2}
P.fQ.prototype={
$1:function(a){var u=this.a
u.a=0
u.cW(a)},
$S:12}
P.fR.prototype={
$2:function(a,b){H.i(b,"$iag")
this.a.cX(a,b)},
$1:function(a){return this.$2(a,null)},
$S:24}
P.fS.prototype={
$0:function(){this.a.cX(this.b,this.c)},
$S:2}
P.fW.prototype={
$0:function(){var u,t,s,r,q,p,o
u=null
try{r=this.c
u=r.b.b.ei(H.l(r.d,{func:1}),null)}catch(q){t=H.be(q)
s=H.bB(q)
if(this.d){r=H.i(this.a.a.c,"$ia9").a
p=t
p=r==null?p==null:r===p
r=p}else r=!1
p=this.b
if(r)p.b=H.i(this.a.a.c,"$ia9")
else p.b=new P.a9(t,s)
p.a=!0
return}if(!!J.U(u).$ibO){if(u instanceof P.ao&&u.a>=4){if(u.a===8){r=this.b
r.b=H.i(u.c,"$ia9")
r.a=!0}return}o=this.a.a
r=this.b
r.b=u.jF(new P.fX(o),null)
r.a=!1}},
$S:3}
P.fX.prototype={
$1:function(a){return this.a},
$S:25}
P.fV.prototype={
$0:function(){var u,t,s,r,q,p,o
try{s=this.b
r=H.r(s,0)
q=H.w(this.c,r)
p=H.r(s,1)
this.a.b=s.b.b.cA(H.l(s.d,{func:1,ret:{futureOr:1,type:p},args:[r]}),q,{futureOr:1,type:p},r)}catch(o){u=H.be(o)
t=H.bB(o)
s=this.a
s.b=new P.a9(u,t)
s.a=!0}},
$S:3}
P.fU.prototype={
$0:function(){var u,t,s,r,q,p,o,n
try{u=H.i(this.a.a.c,"$ia9")
r=this.c
if(r.jd(u)&&r.e!=null){q=this.b
q.b=r.j7(u)
q.a=!1}}catch(p){t=H.be(p)
s=H.bB(p)
r=H.i(this.a.a.c,"$ia9")
q=r.a
o=t
n=this.b
if(q==null?o==null:q===o)n.b=r
else n.b=new P.a9(t,s)
n.a=!0}},
$S:3}
P.ds.prototype={}
P.f1.prototype={
gl:function(a){var u,t,s,r
u={}
t=new P.ao(0,$.M,[P.u])
u.a=0
s=H.r(this,0)
r=H.l(new P.f3(u,this),{func:1,ret:-1,args:[s]})
H.l(new P.f4(u,t),{func:1,ret:-1})
W.a2(this.a,this.b,r,!1,s)
return t}}
P.f3.prototype={
$1:function(a){H.w(a,H.r(this.b,0));++this.a.a},
$S:function(){return{func:1,ret:P.D,args:[H.r(this.b,0)]}}}
P.f4.prototype={
$0:function(){this.b.cW(this.a.a)},
$S:2}
P.bZ.prototype={}
P.f2.prototype={}
P.aF.prototype={}
P.a9.prototype={
i:function(a){return H.k(this.a)},
$ib1:1}
P.ha.prototype={$il9:1}
P.hc.prototype={
$0:function(){var u,t,s
u=this.a
t=u.a
if(t==null){s=new P.cV()
u.a=s
u=s}else u=t
t=this.b
if(t==null)throw H.h(u)
s=H.h(u)
s.stack=t.i(0)
throw s},
$S:2}
P.h2.prototype={
jC:function(a){var u,t,s
H.l(a,{func:1,ret:-1})
try{if(C.k===$.M){a.$0()
return}P.iD(null,null,this,a,-1)}catch(s){u=H.be(s)
t=H.bB(s)
P.hb(null,null,this,u,H.i(t,"$iag"))}},
jD:function(a,b,c){var u,t,s
H.l(a,{func:1,ret:-1,args:[c]})
H.w(b,c)
try{if(C.k===$.M){a.$1(b)
return}P.iE(null,null,this,a,b,-1,c)}catch(s){u=H.be(s)
t=H.bB(s)
P.hb(null,null,this,u,H.i(t,"$iag"))}},
iK:function(a,b){return new P.h4(this,H.l(a,{func:1,ret:b}),b)},
c4:function(a){return new P.h3(this,H.l(a,{func:1,ret:-1}))},
dn:function(a,b){return new P.h5(this,H.l(a,{func:1,ret:-1,args:[b]}),b)},
ei:function(a,b){H.l(a,{func:1,ret:b})
if($.M===C.k)return a.$0()
return P.iD(null,null,this,a,b)},
cA:function(a,b,c,d){H.l(a,{func:1,ret:c,args:[d]})
H.w(b,d)
if($.M===C.k)return a.$1(b)
return P.iE(null,null,this,a,b,c,d)},
jB:function(a,b,c,d,e,f){H.l(a,{func:1,ret:d,args:[e,f]})
H.w(b,e)
H.w(c,f)
if($.M===C.k)return a.$2(b,c)
return P.k6(null,null,this,a,b,c,d,e,f)}}
P.h4.prototype={
$0:function(){return this.a.ei(this.b,this.c)},
$S:function(){return{func:1,ret:this.c}}}
P.h3.prototype={
$0:function(){return this.a.jC(this.b)},
$S:3}
P.h5.prototype={
$1:function(a){var u=this.c
return this.a.jD(this.b,H.w(a,u),u)},
$S:function(){return{func:1,ret:-1,args:[this.c]}}}
P.h_.prototype={
gP:function(a){return P.iA(this,this.r,H.r(this,0))},
gl:function(a){return this.a},
h:function(a,b){var u
H.w(b,H.r(this,0))
if(typeof b==="number"&&(b&1073741823)===b){u=this.c
if(u==null){u=P.iB()
this.c=u}return this.f9(u,b)}else return this.f_(b)},
f_:function(a){var u,t,s
H.w(a,H.r(this,0))
u=this.d
if(u==null){u=P.iB()
this.d=u}t=this.cY(a)
s=u[t]
if(s==null)u[t]=[this.bE(a)]
else{if(this.d3(s,a)>=0)return!1
s.push(this.bE(a))}return!0},
L:function(a,b){if(typeof b==="number"&&(b&1073741823)===b)return this.hF(this.c,b)
else return this.hE(b)},
hE:function(a){var u,t,s
u=this.d
if(u==null)return!1
t=this.fs(u,a)
s=this.d3(t,a)
if(s<0)return!1
this.dg(t.splice(s,1)[0])
return!0},
f9:function(a,b){H.w(b,H.r(this,0))
if(H.i(a[b],"$icc")!=null)return!1
a[b]=this.bE(b)
return!0},
hF:function(a,b){var u
if(a==null)return!1
u=H.i(a[b],"$icc")
if(u==null)return!1
this.dg(u)
delete a[b]
return!0},
d4:function(){this.r=1073741823&this.r+1},
bE:function(a){var u,t
u=new P.cc(H.w(a,H.r(this,0)))
if(this.e==null){this.f=u
this.e=u}else{t=this.f
u.c=t
t.b=u
this.f=u}++this.a
this.d4()
return u},
dg:function(a){var u,t
u=a.c
t=a.b
if(u==null)this.e=t
else u.b=t
if(t==null)this.f=u
else t.c=u;--this.a
this.d4()},
cY:function(a){return J.bf(a)&1073741823},
fs:function(a,b){return a[this.cY(b)]},
d3:function(a,b){var u,t
if(a==null)return-1
u=a.length
for(t=0;t<u;++t)if(a[t].a==b)return t
return-1}}
P.cc.prototype={}
P.h0.prototype={
gG:function(){return this.d},
w:function(){var u=this.a
if(this.b!==u.r)throw H.h(P.bK(u))
else{u=this.c
if(u==null){this.scV(null)
return!1}else{this.scV(H.w(u.a,H.r(this,0)))
this.c=this.c.b
return!0}}},
scV:function(a){this.d=H.w(a,H.r(this,0))},
$iay:1}
P.eo.prototype={$if:1,$ia:1}
P.N.prototype={
gP:function(a){return new H.cK(a,this.gl(a),0,[H.dJ(this,a,"N",0)])},
a9:function(a,b){return this.j(a,b)},
jI:function(a,b){var u,t
u=H.b([],[H.dJ(this,a,"N",0)])
C.a.sl(u,this.gl(a))
for(t=0;t<this.gl(a);++t)C.a.Z(u,t,this.j(a,t))
return u},
jH:function(a){return this.jI(a,!0)},
n:function(a,b){var u,t
u=[H.dJ(this,a,"N",0)]
H.d(b,"$ia",u,"$aa")
t=H.b([],u)
C.a.sl(t,C.e.n(this.gl(a),b.gl(b)))
C.a.b4(t,0,this.gl(a),a)
C.a.b4(t,this.gl(a),t.length,b)
return t},
i:function(a){return P.hx(a,"[","]")}}
P.eq.prototype={}
P.er.prototype={
$2:function(a,b){var u,t
u=this.a
if(!u.a)this.b.a+=", "
u.a=!1
u=this.b
t=u.a+=H.k(a)
u.a=t+": "
u.a+=H.k(b)},
$S:13}
P.es.prototype={
gl:function(a){return this.a},
i:function(a){return P.i5(this)},
$iaA:1}
P.h6.prototype={
i:function(a){return P.hx(this,"{","}")},
a9:function(a,b){var u,t,s
if(b<0)H.o(P.as(b,0,null,"index",null))
for(u=P.iA(this,this.r,H.r(this,0)),t=0;u.w();){s=u.d
if(b===t)return s;++t}throw H.h(P.bQ(b,this,"index",null,t))},
$if:1,
$iig:1}
P.dy.prototype={}
P.bJ.prototype={}
P.cv.prototype={}
P.e2.prototype={
$abJ:function(){return[P.v,[P.a,P.u]]}}
P.fp.prototype={}
P.fq.prototype={
iQ:function(a,b,c){var u,t,s
c=P.hB(b,c,a.length,null,null,null)
u=c-b
if(u===0)return new Uint8Array(0)
t=new Uint8Array(u*3)
s=new P.h9(t)
if(s.fp(a,b,c)!==c)s.dh(C.j.c9(a,c-1),0)
return new Uint8Array(t.subarray(0,H.k1(0,s.b,t.length)))},
iP:function(a){return this.iQ(a,0,null)},
$acv:function(){return[P.v,[P.a,P.u]]}}
P.h9.prototype={
dh:function(a,b){var u,t,s,r,q
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
fp:function(a,b,c){var u,t,s,r,q,p,o
if(b!==c&&(C.j.c9(a,c-1)&64512)===55296)--c
for(u=this.c,t=u.length,s=b;s<c;++s){r=C.j.b6(a,s)
if(r<=127){q=this.b
if(q>=t)break
this.b=q+1
u[q]=r}else if((r&64512)===55296){if(this.b+3>=t)break
p=s+1
if(this.dh(r,C.j.b6(a,p)))s=p}else if(r<=2047){q=this.b
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
P.Z.prototype={}
P.af.prototype={
v:function(a,b){if(b==null)return!1
return b instanceof P.af&&this.a===b.a&&!0},
gF:function(a){var u=this.a
return(u^C.e.b9(u,30))&1073741823},
i:function(a){var u,t,s,r,q,p,o,n
u=P.jl(H.jF(this))
t=P.cx(H.jD(this))
s=P.cx(H.jz(this))
r=P.cx(H.jA(this))
q=P.cx(H.jC(this))
p=P.cx(H.jE(this))
o=P.jm(H.jB(this))
n=u+"-"+t+"-"+s+" "+r+":"+q+":"+p+"."+o
return n}}
P.t.prototype={}
P.ax.prototype={
n:function(a,b){return new P.ax(C.e.n(this.a,b.gfh()))},
p:function(a,b){return new P.ax(C.e.p(this.a,b.gfh()))},
v:function(a,b){if(b==null)return!1
return b instanceof P.ax&&this.a===b.a},
gF:function(a){return C.e.gF(this.a)},
i:function(a){var u,t,s,r,q
u=new P.e0()
t=this.a
if(t<0)return"-"+new P.ax(0-t).i(0)
s=u.$1(C.e.X(t,6e7)%60)
r=u.$1(C.e.X(t,1e6)%60)
q=new P.e_().$1(t%1e6)
return""+C.e.X(t,36e8)+":"+H.k(s)+":"+H.k(r)+"."+H.k(q)}}
P.e_.prototype={
$1:function(a){if(a>=1e5)return""+a
if(a>=1e4)return"0"+a
if(a>=1000)return"00"+a
if(a>=100)return"000"+a
if(a>=10)return"0000"+a
return"00000"+a},
$S:14}
P.e0.prototype={
$1:function(a){if(a>=10)return""+a
return"0"+a},
$S:14}
P.b1.prototype={}
P.cV.prototype={
i:function(a){return"Throw of null."}}
P.aN.prototype={
gbG:function(){return"Invalid argument"+(!this.a?"(s)":"")},
gbF:function(){return""},
i:function(a){var u,t,s,r,q,p
u=this.c
t=u!=null?" ("+u+")":""
u=this.d
s=u==null?"":": "+u
r=this.gbG()+t+s
if(!this.a)return r
q=this.gbF()
p=P.e4(this.b)
return r+q+": "+p}}
P.bq.prototype={
gbG:function(){return"RangeError"},
gbF:function(){var u,t,s
u=this.e
if(u==null){u=this.f
t=u!=null?": Not less than or equal to "+H.k(u):""}else{s=this.f
if(s==null)t=": Not greater than or equal to "+H.k(u)
else if(s>u)t=": Not in range "+H.k(u)+".."+H.k(s)+", inclusive"
else t=s<u?": Valid value range is empty":": Only valid value is "+H.k(u)}return t}}
P.ee.prototype={
gbG:function(){return"RangeError"},
gbF:function(){var u,t
u=H.a3(this.b)
if(typeof u!=="number")return u.aM()
if(u<0)return": index must not be negative"
t=this.f
if(t===0)return": no indices are valid"
return": index should be less than "+H.k(t)},
gl:function(a){return this.f}}
P.fo.prototype={
i:function(a){return"Unsupported operation: "+this.a}}
P.fm.prototype={
i:function(a){var u=this.a
return u!=null?"UnimplementedError: "+u:"UnimplementedError"}}
P.d5.prototype={
i:function(a){return"Bad state: "+this.a}}
P.dW.prototype={
i:function(a){var u=this.a
if(u==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+P.e4(u)+"."}}
P.eI.prototype={
i:function(a){return"Out of Memory"},
$ib1:1}
P.d4.prototype={
i:function(a){return"Stack Overflow"},
$ib1:1}
P.dY.prototype={
i:function(a){var u=this.a
return u==null?"Reading static variable during its initialization":"Reading static variable '"+u+"' during its initialization"}}
P.dv.prototype={
i:function(a){return"Exception: "+this.a}}
P.eb.prototype={
i:function(a){var u,t,s,r
u=this.a
t=""!==u?"FormatException: "+u:"FormatException"
s=this.b
r=s.length>78?C.j.cK(s,0,75)+"...":s
return t+"\n"+r}}
P.u.prototype={}
P.f.prototype={
gl:function(a){var u,t
u=this.gP(this)
for(t=0;u.w();)++t
return t},
a9:function(a,b){var u,t,s
if(b<0)H.o(P.as(b,0,null,"index",null))
for(u=this.gP(this),t=0;u.w();){s=u.gG()
if(b===t)return s;++t}throw H.h(P.bQ(b,this,"index",null,t))},
i:function(a){return P.jp(this,"(",")")}}
P.ay.prototype={}
P.a.prototype={$if:1}
P.D.prototype={
gF:function(a){return P.E.prototype.gF.call(this,this)},
i:function(a){return"null"}}
P.a8.prototype={}
P.E.prototype={constructor:P.E,$iE:1,
v:function(a,b){return this===b},
gF:function(a){return H.bV(this)},
i:function(a){return"Instance of '"+H.bp(this)+"'"},
toString:function(){return this.i(this)}}
P.ag.prototype={}
P.v.prototype={$ii8:1}
P.b9.prototype={
gl:function(a){return this.a.length},
i:function(a){var u=this.a
return u.charCodeAt(0)==0?u:u}}
W.n.prototype={}
W.dM.prototype={
i:function(a){return String(a)}}
W.dN.prototype={
i:function(a){return String(a)}}
W.cp.prototype={}
W.bh.prototype={
cF:function(a,b,c){var u=this.ft(a,b,P.kd(c,null))
return u},
ft:function(a,b,c){return a.getContext(b,c)},
$ibh:1}
W.b_.prototype={
gl:function(a){return a.length}}
W.bL.prototype={
gl:function(a){return a.length}}
W.dX.prototype={}
W.bM.prototype={$ibM:1}
W.bN.prototype={
er:function(a,b){return a.getElementById(b)}}
W.dZ.prototype={
i:function(a){return String(a)}}
W.cy.prototype={
i:function(a){return"Rectangle ("+H.k(a.left)+", "+H.k(a.top)+") "+H.k(a.width)+" x "+H.k(a.height)},
v:function(a,b){var u
if(b==null)return!1
if(!H.cj(b,"$ial",[P.a8],"$aal"))return!1
u=J.dH(b)
return a.left===u.gbr(b)&&a.top===u.gbv(b)&&a.width===u.gay(b)&&a.height===u.gav(b)},
gF:function(a){return W.iz(C.d.gF(a.left),C.d.gF(a.top),C.d.gF(a.width),C.d.gF(a.height))},
gdq:function(a){return a.bottom},
gav:function(a){return a.height},
gbr:function(a){return a.left},
gbt:function(a){return a.right},
gbv:function(a){return a.top},
gay:function(a){return a.width},
$ial:1,
$aal:function(){return[P.a8]}}
W.fL.prototype={
gl:function(a){return this.b.length},
j:function(a,b){var u=this.b
if(b<0||b>=u.length)return H.e(u,b)
return H.i(u[b],"$iX")},
h:function(a,b){J.hU(this.a,b)
return b},
gP:function(a){var u=this.jH(this)
return new J.ae(u,u.length,0,[H.r(u,0)])},
$aN:function(){return[W.X]},
$af:function(){return[W.X]},
$aa:function(){return[W.X]}}
W.X.prototype={
gdu:function(a){return new W.fL(a,a.children)},
gdA:function(a){var u,t,s,r
u=a.clientLeft
t=a.clientTop
s=a.clientWidth
r=a.clientHeight
if(typeof s!=="number")return s.aM()
if(s<0)s=-s*0
if(typeof r!=="number")return r.aM()
if(r<0)r=-r*0
return new P.al(u,t,s,r,[P.a8])},
i:function(a){return a.localName},
$iX:1}
W.j.prototype={$ij:1}
W.bj.prototype={
f0:function(a,b,c,d){return a.addEventListener(b,H.by(H.l(c,{func:1,args:[W.j]}),1),!1)},
$ibj:1}
W.ea.prototype={
gl:function(a){return a.length}}
W.bl.prototype={
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.h(P.bQ(b,a,null,null,null))
return a[b]},
a9:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$iaP:1,
$aaP:function(){return[W.H]},
$aN:function(){return[W.H]},
$if:1,
$af:function(){return[W.H]},
$ia:1,
$aa:function(){return[W.H]},
$ibl:1,
$aaq:function(){return[W.H]}}
W.cD.prototype={}
W.az.prototype={$iaz:1}
W.a1.prototype={$ia1:1}
W.fK.prototype={
gP:function(a){var u=this.a.childNodes
return new W.cB(u,u.length,-1,[H.dJ(C.M,u,"aq",0)])},
gl:function(a){return this.a.childNodes.length},
j:function(a,b){var u=this.a.childNodes
if(b<0||b>=u.length)return H.e(u,b)
return u[b]},
$aN:function(){return[W.H]},
$af:function(){return[W.H]},
$aa:function(){return[W.H]}}
W.H.prototype={
i:function(a){var u=a.nodeValue
return u==null?this.eC(a):u},
Y:function(a,b){return a.appendChild(b)},
$iH:1}
W.bT.prototype={
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.h(P.bQ(b,a,null,null,null))
return a[b]},
a9:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$iaP:1,
$aaP:function(){return[W.H]},
$aN:function(){return[W.H]},
$if:1,
$af:function(){return[W.H]},
$ia:1,
$aa:function(){return[W.H]},
$aaq:function(){return[W.H]}}
W.eS.prototype={
gl:function(a){return a.length}}
W.aG.prototype={$iaG:1}
W.at.prototype={$iat:1}
W.fb.prototype={
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.h(P.bQ(b,a,null,null,null))
return a[b]},
a9:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$iaP:1,
$aaP:function(){return[W.aG]},
$aN:function(){return[W.aG]},
$if:1,
$af:function(){return[W.aG]},
$ia:1,
$aa:function(){return[W.aG]},
$aaq:function(){return[W.aG]}}
W.bb.prototype={}
W.aJ.prototype={
giW:function(a){if(a.deltaY!==undefined)return a.deltaY
throw H.h(P.ac("deltaY is not supported"))},
giV:function(a){if(a.deltaX!==undefined)return a.deltaX
throw H.h(P.ac("deltaX is not supported"))},
$iaJ:1}
W.ca.prototype={
hK:function(a,b){return a.requestAnimationFrame(H.by(H.l(b,{func:1,ret:-1,args:[P.a8]}),1))},
fi:function(a){if(!!(a.requestAnimationFrame&&a.cancelAnimationFrame))return;(function(b){var u=['ms','moz','webkit','o']
for(var t=0;t<u.length&&!b.requestAnimationFrame;++t){b.requestAnimationFrame=b[u[t]+'RequestAnimationFrame']
b.cancelAnimationFrame=b[u[t]+'CancelAnimationFrame']||b[u[t]+'CancelRequestAnimationFrame']}if(b.requestAnimationFrame&&b.cancelAnimationFrame)return
b.requestAnimationFrame=function(c){return window.setTimeout(function(){c(Date.now())},16)}
b.cancelAnimationFrame=function(c){clearTimeout(c)}})(a)}}
W.du.prototype={
i:function(a){return"Rectangle ("+H.k(a.left)+", "+H.k(a.top)+") "+H.k(a.width)+" x "+H.k(a.height)},
v:function(a,b){var u
if(b==null)return!1
if(!H.cj(b,"$ial",[P.a8],"$aal"))return!1
u=J.dH(b)
return a.left===u.gbr(b)&&a.top===u.gbv(b)&&a.width===u.gay(b)&&a.height===u.gav(b)},
gF:function(a){return W.iz(C.d.gF(a.left),C.d.gF(a.top),C.d.gF(a.width),C.d.gF(a.height))},
gav:function(a){return a.height},
gay:function(a){return a.width}}
W.fM.prototype={}
W.hF.prototype={}
W.fN.prototype={}
W.fO.prototype={
$1:function(a){return this.a.$1(H.i(a,"$ij"))},
$S:32}
W.aq.prototype={
gP:function(a){return new W.cB(a,this.gl(a),-1,[H.dJ(this,a,"aq",0)])}}
W.cB.prototype={
w:function(){var u,t
u=this.c+1
t=this.b
if(u<t){this.sd2(J.je(this.a,u))
this.c=u
return!0}this.sd2(null)
this.c=t
return!1},
gG:function(){return this.d},
sd2:function(a){this.d=H.w(a,H.r(this,0))},
$iay:1}
W.dt.prototype={}
W.dw.prototype={}
W.dx.prototype={}
W.dz.prototype={}
W.dA.prototype={}
W.dD.prototype={}
W.dE.prototype={}
P.he.prototype={
$2:function(a,b){this.a[a]=b},
$S:13}
P.e7.prototype={
gbJ:function(){var u,t,s
u=this.b
t=H.ak(u,"N",0)
s=W.X
return new H.et(new H.fE(u,H.l(new P.e8(),{func:1,ret:P.Z,args:[t]}),[t]),H.l(new P.e9(),{func:1,ret:s,args:[t]}),[t,s])},
h:function(a,b){J.hU(this.b.a,b)},
gl:function(a){return J.cn(this.gbJ().a)},
j:function(a,b){var u=this.gbJ()
return u.b.$1(J.hV(u.a,b))},
gP:function(a){var u=P.jw(this.gbJ(),!1,W.X)
return new J.ae(u,u.length,0,[H.r(u,0)])},
$aN:function(){return[W.X]},
$af:function(){return[W.X]},
$aa:function(){return[W.X]}}
P.e8.prototype={
$1:function(a){return!!J.U(H.i(a,"$iH")).$iX},
$S:22}
P.e9.prototype={
$1:function(a){return H.c(H.i(a,"$iH"),"$iX")},
$S:23}
P.h1.prototype={
gbt:function(a){var u=this.a
if(typeof u!=="number")return u.n()
return H.w(u+this.c,H.r(this,0))},
gdq:function(a){var u=this.b
if(typeof u!=="number")return u.n()
return H.w(u+this.d,H.r(this,0))},
i:function(a){return"Rectangle ("+H.k(this.a)+", "+H.k(this.b)+") "+this.c+" x "+this.d},
v:function(a,b){var u,t,s,r
if(b==null)return!1
if(H.cj(b,"$ial",[P.a8],"$aal")){u=this.a
t=J.dH(b)
if(u==t.gbr(b)){s=this.b
if(s==t.gbv(b)){if(typeof u!=="number")return u.n()
r=H.r(this,0)
if(H.w(u+this.c,r)===t.gbt(b)){if(typeof s!=="number")return s.n()
u=H.w(s+this.d,r)===t.gdq(b)}else u=!1}else u=!1}else u=!1}else u=!1
return u},
gF:function(a){var u,t,s,r,q
u=this.a
t=J.bf(u)
s=this.b
r=J.bf(s)
if(typeof u!=="number")return u.n()
q=H.r(this,0)
u=C.e.gF(H.w(u+this.c,q))
if(typeof s!=="number")return s.n()
q=C.e.gF(H.w(s+this.d,q))
return P.jY(P.fZ(P.fZ(P.fZ(P.fZ(0,t),r),u),q))}}
P.al.prototype={
gbr:function(a){return this.a},
gbv:function(a){return this.b},
gay:function(a){return this.c},
gav:function(a){return this.d}}
P.m.prototype={
gdu:function(a){return new P.e7(a,new W.fK(a))}}
P.cq.prototype={$icq:1}
P.cC.prototype={$icC:1}
P.cY.prototype={$icY:1}
P.d0.prototype={$id0:1}
P.bs.prototype={
di:function(a,b){return a.activeTexture(b)},
dl:function(a,b,c){return a.attachShader(b,c)},
ai:function(a,b,c){return a.bindBuffer(b,c)},
aT:function(a,b,c){return a.bindFramebuffer(b,c)},
dm:function(a,b,c){return a.bindRenderbuffer(b,c)},
aF:function(a,b,c){return a.bindTexture(b,c)},
iL:function(a,b,c){return a.blendFunc(b,c)},
dr:function(a,b,c,d){return a.bufferData(b,c,d)},
dv:function(a,b){return a.clear(b)},
dw:function(a,b,c,d,e){return a.clearColor(b,c,d,e)},
dz:function(a,b){return a.clearDepth(b)},
iO:function(a,b){return a.compileShader(b)},
iR:function(a,b){return a.createShader(b)},
iT:function(a,b){return a.deleteProgram(b)},
iU:function(a,b){return a.deleteShader(b)},
dE:function(a,b){return a.depthFunc(b)},
iX:function(a,b){return a.disable(b)},
dH:function(a,b){return a.disableVertexAttribArray(b)},
iY:function(a,b,c,d,e){return a.drawElements(b,c,d,e)},
aV:function(a,b){return a.enable(b)},
dL:function(a,b){return a.enableVertexAttribArray(b)},
j5:function(a,b,c,d,e){return a.framebufferRenderbuffer(b,c,d,e)},
j6:function(a,b,c,d,e,f){return a.framebufferTexture2D(b,c,d,e,f)},
eo:function(a,b,c){return a.getActiveAttrib(b,c)},
ep:function(a,b,c){return a.getActiveUniform(b,c)},
eq:function(a,b,c){return a.getAttribLocation(b,c)},
by:function(a,b){return a.getParameter(b)},
es:function(a,b){return a.getProgramInfoLog(b)},
bz:function(a,b,c){return a.getProgramParameter(b,c)},
eu:function(a,b){return a.getShaderInfoLog(b)},
ev:function(a,b,c){return a.getShaderParameter(b,c)},
ew:function(a,b,c){return a.getUniformLocation(b,c)},
jb:function(a,b){return a.linkProgram(b)},
jy:function(a,b,c,d,e){return a.renderbufferStorage(b,c,d,e)},
eA:function(a,b,c){return a.shaderSource(b,c)},
jE:function(a,b,c,d,e,f,g,h,i,j){this.i1(a,b,c,d,e,f,g,h,i,j)
return},
i1:function(a,b,c,d,e,f,g,h,i,j){return a.texImage2D(b,c,d,e,f,g,h,i,j)},
bu:function(a,b,c,d){return a.texParameteri(b,c,d)},
H:function(a,b,c){return a.uniform1f(b,c)},
I:function(a,b,c){return a.uniform1i(b,c)},
bw:function(a,b,c,d){return a.uniform2f(b,c,d)},
t:function(a,b,c,d,e){return a.uniform3f(b,c,d,e)},
jK:function(a,b,c,d,e,f){return a.uniform4f(b,c,d,e,f)},
el:function(a,b,c,d){return a.uniformMatrix3fv(b,!1,d)},
cC:function(a,b,c,d){return a.uniformMatrix4fv(b,!1,d)},
cD:function(a,b){return a.useProgram(b)},
jL:function(a,b,c,d,e,f,g){return a.vertexAttribPointer(b,c,d,!1,f,g)},
em:function(a,b,c,d,e){return a.viewport(b,c,d,e)},
$ibs:1}
P.d1.prototype={$id1:1}
P.d6.prototype={$id6:1}
P.di.prototype={$idi:1}
O.K.prototype={
b5:function(a){this.sfA(H.b([],[a]))
this.sd8(null)
this.sd5(null)
this.sd9(null)},
cG:function(a,b,c){var u=H.ak(this,"K",0)
H.l(b,{func:1,ret:P.Z,args:[[P.f,u]]})
u={func:1,ret:-1,args:[P.u,[P.f,u]]}
H.l(a,u)
H.l(c,u)
this.sd8(b)
this.sd5(a)
this.sd9(c)},
az:function(a,b){return this.cG(a,null,b)},
bU:function(a){var u
H.d(a,"$if",[H.ak(this,"K",0)],"$af")
u=this.b
if(u!=null)return u.$1(a)
return!0},
cN:function(a,b){var u
H.d(b,"$if",[H.ak(this,"K",0)],"$af")
u=this.c
if(u!=null)u.$2(a,b)},
gl:function(a){return this.a.length},
gP:function(a){var u=this.a
return new J.ae(u,u.length,0,[H.r(u,0)])},
a9:function(a,b){var u=this.a
if(b<0||b>=u.length)return H.e(u,b)
return u[b]},
h:function(a,b){var u,t,s
u=H.ak(this,"K",0)
H.w(b,u)
u=[u]
if(this.bU(H.b([b],u))){t=this.a
s=t.length
C.a.h(t,b)
this.cN(s,H.b([b],u))}},
c0:function(a,b){var u,t
H.d(b,"$if",[H.ak(this,"K",0)],"$af")
if(this.bU(b)){u=this.a
t=u.length
C.a.c0(u,b)
this.cN(t,b)}},
sfA:function(a){this.a=H.d(a,"$ia",[H.ak(this,"K",0)],"$aa")},
sd8:function(a){this.b=H.l(a,{func:1,ret:P.Z,args:[[P.f,H.ak(this,"K",0)]]})},
sd5:function(a){this.c=H.l(a,{func:1,ret:-1,args:[P.u,[P.f,H.ak(this,"K",0)]]})},
sd9:function(a){this.d=H.l(a,{func:1,ret:-1,args:[P.u,[P.f,H.ak(this,"K",0)]]})},
$if:1}
O.bR.prototype={
gl:function(a){return this.a.length},
gm:function(){var u=this.b
if(u==null){u=D.B()
this.b=u}return u},
eM:function(a){var u=this.b
if(u!=null)u.C(a)},
aA:function(){return this.eM(null)},
gW:function(){var u=this.a
if(u.length>0)return C.a.gcm(u)
else return V.b8()},
bs:function(a){var u=this.a
if(a==null)C.a.h(u,V.b8())
else C.a.h(u,a)
this.aA()},
aZ:function(){var u=this.a
if(u.length>0){u.pop()
this.aA()}},
sbK:function(a){this.a=H.d(a,"$ia",[V.a4],"$aa")}}
E.dQ.prototype={}
E.aa.prototype={
sbB:function(a,b){var u,t,s
u=this.c
if(u!=b){this.c=b
this.d=b
this.e=null
if(u!=null)u.gm().L(0,this.gee())
t=this.c
if(t!=null)t.gm().h(0,this.gee())
s=new D.x("shape",u,this.c,this,[F.d2])
s.b=!0
this.aJ(s)}},
af:function(a){var u
for(u=this.y.a,u=new J.ae(u,u.length,0,[H.r(u,0)]);u.w();)u.d.af(a)},
a5:function(a){var u,t
u=a.dx
C.a.h(u.a,u.gW())
u.aA()
a.cu(this.f)
u=a.dy
t=(u&&C.a).gcm(u)
if(t!=null&&this.d!=null)t.eg(a,this)
for(u=this.y.a,u=new J.ae(u,u.length,0,[H.r(u,0)]);u.w();)u.d.a5(a)
a.ct()
a.dx.aZ()},
gm:function(){var u=this.z
if(u==null){u=D.B()
this.z=u}return u},
aJ:function(a){var u=this.z
if(u!=null)u.C(a)},
a4:function(){return this.aJ(null)},
ef:function(a){H.i(a,"$iq")
this.e=null
this.aJ(a)},
jl:function(){return this.ef(null)},
ed:function(a){this.aJ(H.i(a,"$iq"))},
ji:function(){return this.ed(null)},
jh:function(a,b){var u,t,s,r,q,p,o
H.d(b,"$if",[E.aa],"$af")
for(u=b.length,t=this.gec(),s={func:1,ret:-1,args:[D.q]},r=[s],q=0;q<b.length;b.length===u||(0,H.y)(b),++q){p=b[q]
if(p!=null){o=p.z
if(o==null){o=new D.b2()
o.sa_(null)
o.saQ(null)
o.c=null
o.d=0
p.z=o}H.l(t,s)
if(o.a==null)o.sa_(H.b([],r))
o=o.a;(o&&C.a).h(o,t)}}this.a4()},
jk:function(a,b){var u,t
H.d(b,"$if",[E.aa],"$af")
for(u=b.gP(b),t=this.gec();u.w();)u.gG().gm().L(0,t)
this.a4()},
i:function(a){var u,t
u=this.a
t=u.length
if(t<=0)return"Unnamed entity"
return u},
seN:function(a,b){this.y=H.d(b,"$iK",[E.aa],"$aK")},
$iaD:1}
E.eN.prototype={
eI:function(a,b){var u,t
this.c=512
this.d=512
this.e=0
u=new P.af(Date.now(),!1)
this.f=u
this.r=u
this.x=u
this.y=0
this.z=null
this.Q=null
this.ch=null
this.cx=null
u=new O.bR()
t=[V.a4]
u.sbK(H.b([],t))
u.b=null
u.gm().h(0,new E.eO(this))
this.cy=u
u=new O.bR()
u.sbK(H.b([],t))
u.b=null
u.gm().h(0,new E.eP(this))
this.db=u
u=new O.bR()
u.sbK(H.b([],t))
u.b=null
u.gm().h(0,new E.eQ(this))
this.dx=u
this.si0(H.b([],[O.ba]))
u=this.dy;(u&&C.a).h(u,null)
this.shV(new H.aQ([P.v,A.bX]))},
gju:function(){var u=this.z
if(u==null){u=this.cy.gW().q(0,this.db.gW())
this.z=u}return u},
cu:function(a){var u,t
u=this.dy
t=a==null?(u&&C.a).gcm(u):a;(u&&C.a).h(u,t)},
ct:function(){var u=this.dy
if(u.length>1)u.pop()},
dk:function(a){var u=a.b
if(u.length===0)throw H.h(P.p("May not cache a shader with no name."))
if(this.fr.dC(u))throw H.h(P.p('Shader cache already contains a shader by the name "'+u+'".'))
this.fr.Z(0,u,a)},
si0:function(a){this.dy=H.d(a,"$ia",[O.ba],"$aa")},
shV:function(a){this.fr=H.d(a,"$iaA",[P.v,A.bX],"$aaA")}}
E.eO.prototype={
$1:function(a){var u
H.i(a,"$iq")
u=this.a
u.z=null
u.ch=null},
$S:7}
E.eP.prototype={
$1:function(a){var u
H.i(a,"$iq")
u=this.a
u.z=null
u.Q=null
u.ch=null
u.cx=null},
$S:7}
E.eQ.prototype={
$1:function(a){var u
H.i(a,"$iq")
u=this.a
u.ch=null
u.cx=null},
$S:7}
E.dd.prototype={
cQ:function(a){H.i(a,"$iq")
this.eh()},
cP:function(){return this.cQ(null)},
gj4:function(){var u,t,s
u=Date.now()
t=C.e.X(P.i0(0,0,0,u-this.cx.a,0,0).a,1000)/1000
if(t<=0)return 0
s=this.cy
this.cy=0
this.cx=new P.af(u,!1)
return s/t},
dd:function(){var u,t,s,r
u=window.devicePixelRatio
t=this.b.clientWidth
if(typeof t!=="number")return t.q()
if(typeof u!=="number")return H.A(u)
s=C.d.cj(t*u)
t=this.b.clientHeight
if(typeof t!=="number")return t.q()
r=C.d.cj(t*u)
t=this.b
if(t.width!==s||t.height!==r){t.width=s
t.height=r
P.il(C.n,this.gjz())}},
eh:function(){var u,t
if(!this.ch){this.ch=!0
u=window
t=H.l(new E.f8(this),{func:1,ret:-1,args:[P.a8]})
C.x.fi(u)
C.x.hK(u,W.iH(t,P.a8))}},
jx:function(){var u,t,s,r,q
try{++this.cy
this.ch=!1
this.dd()
if(this.d!=null){s=this.e;++s.e
s.r=s.x
r=Date.now()
s.x=new P.af(r,!1)
s.y=P.i0(0,0,0,r-s.r.a,0,0).a*0.000001
r=s.cy
C.a.sl(r.a,0)
r.aA()
r=s.db
C.a.sl(r.a,0)
r.aA()
r=s.dx
C.a.sl(r.a,0)
r.aA()
r=s.dy;(r&&C.a).sl(r,0)
s=s.dy;(s&&C.a).h(s,null)
this.d.a5(this.e)}}catch(q){u=H.be(q)
t=H.bB(q)
P.hQ("Error: "+H.k(u))
P.hQ("Stack: "+H.k(t))
throw H.h(u)}}}
E.f8.prototype={
$1:function(a){var u
H.kv(a)
u=this.a
if(u.ch){u.ch=!1
u.jx()}},
$S:27}
Z.dq.prototype={$ikF:1}
Z.cr.prototype={
a1:function(a){var u,t,s
try{t=a.a
C.b.dL(t,this.e)
C.b.jL(t,this.e,this.b,5126,!1,this.d,this.c)}catch(s){u=H.be(s)
t=P.p('Failed to bind buffer attribute "'+this.a.i(0)+'": '+H.k(u))
throw H.h(t)}},
i:function(a){return"["+this.a.i(0)+", Size: "+this.b+", Offset: "+this.c+", Stride: "+this.d+", Attr: "+H.k(this.e)+"]"}}
Z.dr.prototype={$ikG:1}
Z.bH.prototype={
au:function(a){var u,t,s,r
for(u=this.c,t=u.length,s=0;s<t;++s){r=u[s]
if((r.a.a&a.a)!==0)return r}return},
a1:function(a){var u,t
u=this.a
C.b.ai(a.a,u.a,u.b)
for(u=this.c,t=u.length-1;t>=0;--t)u[t].a1(a)},
aK:function(a){var u,t,s
for(u=this.c,t=u.length-1,s=a.a;t>=0;--t)C.b.dH(s,u[t].e)
C.b.ai(s,this.a.a,null)},
a5:function(a){var u,t,s,r,q,p
u=this.b.length
for(t=a.a,s=0;s<u;++s){r=this.b
if(s>=r.length)return H.e(r,s)
q=r[s]
r=q.c
p=r.a
C.b.ai(t,p,r.b)
C.b.iY(t,q.a,q.b,5123,0)
C.b.ai(t,p,null)}},
i:function(a){var u,t,s,r,q,p
u=[P.v]
t=H.b([],u)
for(s=this.b,r=s.length,q=0;q<s.length;s.length===r||(0,H.y)(s),++q)C.a.h(t,s[q].i(0))
p=H.b([],u)
for(u=this.c,s=u.length,q=0;q<s;++q)C.a.h(p,J.aM(u[q]))
return"Buffer:  ["+this.a.i(0)+"]\nIndices: "+C.a.D(t,", ")+"\nAttrs:   "+C.a.D(p,", ")},
sfu:function(a){this.b=H.d(a,"$ia",[Z.bm],"$aa")},
$ikM:1}
Z.bm.prototype={
i:function(a){return"Type: "+this.a+", Count: "+this.b+", ["+("Instance of '"+H.bp(this.c)+"'")+"]"}}
Z.aI.prototype={
gcH:function(a){var u,t
u=this.a
t=(u&$.av().a)!==0?3:0
if((u&$.aX().a)!==0)t+=3
if((u&$.aW().a)!==0)t+=3
if((u&$.aY().a)!==0)t+=2
if((u&$.aZ().a)!==0)t+=3
if((u&$.ck().a)!==0)t+=3
if((u&$.cl().a)!==0)t+=4
if((u&$.bE().a)!==0)++t
return(u&$.aV().a)!==0?t+4:t},
iJ:function(a){var u,t,s
u=$.av()
t=this.a
if((t&u.a)!==0){if(0===a)return u
s=1}else s=0
u=$.aX()
if((t&u.a)!==0){if(s===a)return u;++s}u=$.aW()
if((t&u.a)!==0){if(s===a)return u;++s}u=$.aY()
if((t&u.a)!==0){if(s===a)return u;++s}u=$.aZ()
if((t&u.a)!==0){if(s===a)return u;++s}u=$.ck()
if((t&u.a)!==0){if(s===a)return u;++s}u=$.cl()
if((t&u.a)!==0){if(s===a)return u;++s}u=$.bE()
if((t&u.a)!==0){if(s===a)return u;++s}u=$.aV()
if((t&u.a)!==0)if(s===a)return u
return $.ja()},
v:function(a,b){if(b==null)return!1
if(!(b instanceof Z.aI))return!1
return this.a===b.a},
i:function(a){var u,t
u=H.b([],[P.v])
t=this.a
if((t&$.av().a)!==0)C.a.h(u,"Pos")
if((t&$.aX().a)!==0)C.a.h(u,"Norm")
if((t&$.aW().a)!==0)C.a.h(u,"Binm")
if((t&$.aY().a)!==0)C.a.h(u,"Txt2D")
if((t&$.aZ().a)!==0)C.a.h(u,"TxtCube")
if((t&$.ck().a)!==0)C.a.h(u,"Clr3")
if((t&$.cl().a)!==0)C.a.h(u,"Clr4")
if((t&$.bE().a)!==0)C.a.h(u,"Weight")
if((t&$.aV().a)!==0)C.a.h(u,"Bending")
if(u.length<=0)return"None"
return C.a.D(u,"|")}}
D.dT.prototype={}
D.b2.prototype={
h:function(a,b){var u={func:1,ret:-1,args:[D.q]}
H.l(b,u)
if(this.a==null)this.sa_(H.b([],[u]))
u=this.a;(u&&C.a).h(u,b)},
L:function(a,b){var u,t
H.l(b,{func:1,ret:-1,args:[D.q]})
u=this.a
u=u==null?null:C.a.aH(u,b)
if(u===!0){u=this.a
t=(u&&C.a).L(u,b)||!1}else t=!1
return t},
C:function(a){var u,t,s,r
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
return!0}if(!s)C.a.aa(t,new D.e5(u))
return!0},
dK:function(){return this.C(null)},
jA:function(a,b){var u,t
u=this.d
if(u>0){--u
this.d=u
if(u<=0)u=this.c!=null
else u=!1
if(u){t=this.c
this.c=null
this.C(t)}}},
ax:function(){return this.jA(!0,!1)},
sa_:function(a){this.a=H.d(a,"$ia",[{func:1,ret:-1,args:[D.q]}],"$aa")},
saQ:function(a){this.b=H.d(a,"$ia",[{func:1,ret:-1,args:[D.q]}],"$aa")}}
D.e5.prototype={
$1:function(a){var u
H.l(a,{func:1,ret:-1,args:[D.q]})
u=this.a.a
u.b
a.$1(u)},
$S:28}
D.q.prototype={}
D.b3.prototype={}
D.b4.prototype={}
D.x.prototype={
i:function(a){return"ValueChanged: "+this.c+", "+H.k(this.d)+" => "+H.k(this.e)}}
X.cs.prototype={
v:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.cs))return!1
if(this.a!=b.a)return!1
if(!this.b.v(0,b.b))return!1
return!0},
i:function(a){return this.b.i(0)+H.k(this.a)}}
X.cI.prototype={
v:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.cI))return!1
if(this.a!=b.a)return!1
if(!this.b.v(0,b.b))return!1
return!0},
i:function(a){return this.b.i(0)+H.k(this.a)}}
X.ej.prototype={
jr:function(a){this.c=a.b
this.d.h(0,a.a)
return!1},
jn:function(a){this.c=a.b
this.d.L(0,a.a)
return!1},
shD:function(a){this.d=H.d(a,"$iig",[P.u],"$aig")}}
X.cL.prototype={}
X.ep.prototype={
aP:function(a,b){var u,t,s,r,q,p,o,n
u=new P.af(Date.now(),!1)
t=this.x
s=b.a
r=this.Q
if(typeof s!=="number")return s.q()
q=b.b
p=this.ch
if(typeof q!=="number")return q.q()
o=new V.T(t.a+s*r,t.b+q*p)
p=this.a.gaG()
n=new X.aS(a,V.aU(),this.x,this.y,this.z,p,o,u,this)
n.b=!0
this.z=u
this.x=o
return n},
cs:function(a,b){this.r=a.a
return!1},
aY:function(a,b){var u,t
u=this.r
t=a.a
if(typeof t!=="number")return t.ey()
if(typeof u!=="number")return u.en()
this.r=(u&~t)>>>0
return!1},
aX:function(a,b){var u=this.d
if(u==null)return!1
u.C(this.aP(a,b))
return!0},
js:function(a){var u,t,s,r,q,p,o,n
u=this.e
if(u==null)return!1
t=this.a.gaG()
s=this.x
r=Date.now()
q=a.a
p=this.cx
if(typeof q!=="number")return q.q()
o=a.b
n=this.cy
if(typeof o!=="number")return o.q()
r=new X.bS(new V.I(q*p,o*n),t,s,new P.af(r,!1),this)
r.b=!0
u.C(r)
return!0},
hb:function(a,b,c){var u,t,s
if(this.f==null)return
u=new P.af(Date.now(),!1)
t=this.f
s=new X.cL(c,a,this.a.gaG(),b,u,this)
s.b=!0
t.C(s)
this.y=u
this.x=V.aU()}}
X.ah.prototype={
v:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.ah))return!1
if(this.a!==b.a)return!1
if(this.b!=b.b)return!1
if(this.c!=b.c)return!1
return!0},
i:function(a){var u=this.a?"Ctrl+":""
u+=this.b?"Alt+":""
return u+(this.c?"Shift+":"")}}
X.aS.prototype={}
X.eB.prototype={
bH:function(a,b,c){var u,t,s
u=new P.af(Date.now(),!1)
t=this.a.gaG()
s=new X.aS(a,this.r,this.x,this.y,this.z,t,b,u,this)
s.b=!0
if(c){this.y=u
this.r=b}this.z=u
this.x=b
return s},
cs:function(a,b){var u
this.f=a.a
u=this.b
if(u==null)return!1
u.C(this.bH(a,b,!0))
return!0},
aY:function(a,b){var u,t
u=this.f
t=a.a
if(typeof t!=="number")return t.ey()
if(typeof u!=="number")return u.en()
this.f=(u&~t)>>>0
u=this.c
if(u==null)return!1
u.C(this.bH(a,b,!0))
return!0},
aX:function(a,b){var u=this.d
if(u==null)return!1
u.C(this.bH(a,b,!1))
return!0},
jt:function(a,b){var u,t,s,r,q,p,o
u=this.e
if(u==null)return!1
t=this.a.gaG()
s=Date.now()
r=a.a
q=this.Q
if(typeof r!=="number")return r.q()
p=a.b
o=this.ch
if(typeof p!=="number")return p.q()
s=new X.bS(new V.I(r*q,p*o),t,b,new P.af(s,!1),this)
s.b=!0
u.C(s)
return!0},
gdJ:function(){var u=this.b
if(u==null){u=D.B()
this.b=u}return u},
gbx:function(){var u=this.c
if(u==null){u=D.B()
this.c=u}return u},
geb:function(){var u=this.d
if(u==null){u=D.B()
this.d=u}return u}}
X.bS.prototype={}
X.eK.prototype={}
X.df.prototype={}
X.fa.prototype={
aP:function(a,b){var u,t,s,r
H.d(a,"$ia",[V.T],"$aa")
u=new P.af(Date.now(),!1)
t=a.length>0?a[0]:V.aU()
s=this.a.gaG()
r=new X.df(a,this.f,this.r,this.x,this.y,s,t,u,this)
r.b=!0
if(b){this.x=u
this.f=t}this.y=u
this.r=t
return r},
jq:function(a){var u
H.d(a,"$ia",[V.T],"$aa")
u=this.b
if(u==null)return!1
u.C(this.aP(a,!0))
return!0},
jo:function(a){var u
H.d(a,"$ia",[V.T],"$aa")
u=this.c
if(u==null)return!1
u.C(this.aP(a,!0))
return!0},
jp:function(a){var u
H.d(a,"$ia",[V.T],"$aa")
u=this.d
if(u==null)return!1
u.C(this.aP(a,!1))
return!0}}
X.dl.prototype={
gaG:function(){var u=this.a
return V.d_(0,0,C.m.gdA(u).c,C.m.gdA(u).d)},
d0:function(a){var u,t
u=a.keyCode
t=a.ctrlKey||a.metaKey
return new X.cI(u,new X.ah(t,a.altKey,a.shiftKey))},
aE:function(a){var u,t
u=this.b
t=a.ctrlKey||a.metaKey
u.c=new X.ah(t,a.altKey,a.shiftKey)},
c_:function(a){var u,t
u=this.b
t=a.ctrlKey||a.metaKey
u.c=new X.ah(t,a.altKey,a.shiftKey)},
ar:function(a){var u,t,s,r,q
u=this.a.getBoundingClientRect()
t=a.pageX
s=a.pageY
r=u.left
if(typeof t!=="number")return t.p()
q=u.top
if(typeof s!=="number")return s.p()
return new V.T(t-r,s-q)},
aR:function(a){return new V.I(a.movementX,a.movementY)},
bW:function(a){var u,t,s,r,q,p,o,n
u=this.a.getBoundingClientRect()
t=H.b([],[V.T])
for(s=a.touches,r=s.length,q=0;q<s.length;s.length===r||(0,H.y)(s),++q){p=s[q]
o=C.d.V(p.pageX)
C.d.V(p.pageY)
n=u.left
C.d.V(p.pageX)
C.a.h(t,new V.T(o-n,C.d.V(p.pageY)-u.top))}return t},
ao:function(a){var u,t
u=a.buttons
t=a.ctrlKey||a.metaKey
return new X.cs(u,new X.ah(t,a.altKey,a.shiftKey))},
bL:function(a){var u,t,s,r,q,p
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
h5:function(a){this.f=!0},
fQ:function(a){this.f=!1},
fW:function(a){H.i(a,"$ia1")
if(this.f&&this.bL(a))a.preventDefault()},
h9:function(a){var u
H.i(a,"$iaz")
if(!this.f)return
u=this.d0(a)
this.b.jr(u)},
h7:function(a){var u
H.i(a,"$iaz")
if(!this.f)return
u=this.d0(a)
this.b.jn(u)},
hd:function(a){var u,t,s,r
H.i(a,"$ia1")
u=this.a
u.focus()
this.f=!0
this.aE(a)
if(this.x){t=this.ao(a)
s=this.aR(a)
if(this.d.cs(t,s))a.preventDefault()
return}if(this.r){this.y=a
u.requestPointerLock()
return}t=this.ao(a)
r=this.ar(a)
if(this.c.cs(t,r))a.preventDefault()},
hh:function(a){var u,t,s
H.i(a,"$ia1")
this.aE(a)
u=this.ao(a)
if(this.x){t=this.aR(a)
if(this.d.aY(u,t))a.preventDefault()
return}if(this.r)return
s=this.ar(a)
if(this.c.aY(u,s))a.preventDefault()},
h_:function(a){var u,t,s
H.i(a,"$ia1")
if(!this.bL(a)){this.aE(a)
u=this.ao(a)
if(this.x){t=this.aR(a)
if(this.d.aY(u,t))a.preventDefault()
return}if(this.r)return
s=this.ar(a)
if(this.c.aY(u,s))a.preventDefault()}},
hf:function(a){var u,t,s
H.i(a,"$ia1")
this.aE(a)
u=this.ao(a)
if(this.x){t=this.aR(a)
if(this.d.aX(u,t))a.preventDefault()
return}if(this.r)return
s=this.ar(a)
if(this.c.aX(u,s))a.preventDefault()},
fY:function(a){var u,t,s
H.i(a,"$ia1")
if(!this.bL(a)){this.aE(a)
u=this.ao(a)
if(this.x){t=this.aR(a)
if(this.d.aX(u,t))a.preventDefault()
return}if(this.r)return
s=this.ar(a)
if(this.c.aX(u,s))a.preventDefault()}},
hj:function(a){var u,t
H.i(a,"$iaJ")
this.aE(a)
u=new V.I((a&&C.w).giV(a),C.w.giW(a)).u(0,180)
if(this.x){if(this.d.js(u))a.preventDefault()
return}if(this.r)return
t=this.ar(a)
if(this.c.jt(u,t))a.preventDefault()},
hl:function(a){var u,t,s
u=document.pointerLockElement===this.a
if(u!==this.x){this.x=u
t=this.ao(this.y)
s=this.ar(this.y)
this.d.hb(t,s,u)}},
hB:function(a){var u
H.i(a,"$iat")
this.a.focus()
this.f=!0
this.c_(a)
u=this.bW(a)
if(this.e.jq(u))a.preventDefault()},
hx:function(a){var u
H.i(a,"$iat")
this.c_(a)
u=this.bW(a)
if(this.e.jo(u))a.preventDefault()},
hz:function(a){var u
H.i(a,"$iat")
this.c_(a)
u=this.bW(a)
if(this.e.jp(u))a.preventDefault()},
sfk:function(a){this.z=H.d(a,"$ia",[[P.bZ,P.E]],"$aa")}}
D.b0.prototype={
gm:function(){var u=this.d
if(u==null){u=D.B()
this.d=u}return u},
al:function(a){var u
H.i(a,"$iq")
u=this.d
if(u!=null)u.C(a)},
eP:function(){return this.al(null)},
$iS:1,
$iaD:1}
D.S.prototype={$iaD:1}
D.cJ.prototype={
gm:function(){var u=this.Q
if(u==null){u=D.B()
this.Q=u}return u},
al:function(a){var u=this.Q
if(u!=null)u.C(a)},
d7:function(a){var u
H.i(a,"$iq")
u=this.ch
if(u!=null)u.C(a)},
ha:function(){return this.d7(null)},
hn:function(a){var u,t,s
H.d(a,"$if",[D.S],"$af")
for(u=a.length,t=0;t<a.length;a.length===u||(0,H.y)(a),++t){s=a[t]
if(s==null||this.fa(s))return!1}return!0},
fK:function(a,b){var u,t,s,r,q,p,o,n
u=D.S
H.d(b,"$if",[u],"$af")
for(t=b.length,s=this.gd6(),r={func:1,ret:-1,args:[D.q]},q=[r],p=0;p<b.length;b.length===t||(0,H.y)(b),++p){o=H.i(b[p],"$iS")
if(o instanceof D.b0)C.a.h(this.e,o)
n=o.d
if(n==null){n=new D.b2()
n.sa_(null)
n.saQ(null)
n.c=null
n.d=0
o.d=n}H.l(s,r)
if(n.a==null)n.sa_(H.b([],q))
n=n.a;(n&&C.a).h(n,s)}u=new D.b3(a,b,this,[u])
u.b=!0
this.al(u)},
hr:function(a,b){var u,t,s,r
u=D.S
H.d(b,"$if",[u],"$af")
for(t=b.gP(b),s=this.gd6();t.w();){r=t.gG()
C.a.L(this.e,r)
r.gm().L(0,s)}u=new D.b4(a,b,this,[u])
u.b=!0
this.al(u)},
fa:function(a){var u=C.a.aH(this.e,a)
return u},
sfg:function(a){this.e=H.d(a,"$ia",[D.b0],"$aa")},
shC:function(a){this.f=H.d(a,"$ia",[D.cX],"$aa")},
shX:function(a){this.r=H.d(a,"$ia",[D.d3],"$aa")},
sia:function(a){this.x=H.d(a,"$ia",[D.da],"$aa")},
sib:function(a){this.y=H.d(a,"$ia",[D.db],"$aa")},
sic:function(a){this.z=H.d(a,"$ia",[D.dc],"$aa")},
$af:function(){return[D.S]},
$aK:function(){return[D.S]}}
D.cX.prototype={$iS:1,$iaD:1}
D.d3.prototype={$iS:1,$iaD:1}
D.da.prototype={$iS:1,$iaD:1}
D.db.prototype={$iS:1,$iaD:1}
D.dc.prototype={$iS:1,$iaD:1}
V.P.prototype={
n:function(a,b){var u,t,s
u=C.d.n(this.a,b.gcv())
t=C.d.n(this.b,b.gbA())
s=C.d.n(this.c,b.gc5())
if(u<0)u=0
else if(u>1)u=1
if(t<0)t=0
else if(t>1)t=1
if(s<0)s=0
else if(s>1)s=1
return new V.P(u,t,s)},
p:function(a,b){var u,t,s
u=C.d.p(this.a,b.gcv())
t=C.d.p(this.b,b.gbA())
s=C.d.p(this.c,b.gc5())
if(u<0)u=0
else if(u>1)u=1
if(t<0)t=0
else if(t>1)t=1
if(s<0)s=0
else if(s>1)s=1
return new V.P(u,t,s)},
v:function(a,b){var u,t
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.P))return!1
u=b.a
t=$.G().a
if(!(Math.abs(u-this.a)<t))return!1
if(!(Math.abs(b.b-this.b)<t))return!1
if(!(Math.abs(b.c-this.c)<t))return!1
return!0},
i:function(a){return"["+V.J(this.a,3,0)+", "+V.J(this.b,3,0)+", "+V.J(this.c,3,0)+"]"}}
V.W.prototype={
n:function(a,b){var u,t,s,r
u=C.d.n(this.a,b.gcv())
t=C.d.n(this.b,b.gbA())
s=C.d.n(this.c,b.gc5())
r=C.d.n(this.d,b.giI(b))
if(u<0)u=0
else if(u>1)u=1
if(t<0)t=0
else if(t>1)t=1
if(s<0)s=0
else if(s>1)s=1
if(r<0)r=0
else if(r>1)r=1
return new V.W(u,t,s,r)},
p:function(a,b){var u,t,s,r
u=C.d.p(this.a,b.gcv())
t=C.d.p(this.b,b.gbA())
s=C.d.p(this.c,b.gc5())
r=C.d.p(this.d,b.giI(b))
if(u<0)u=0
else if(u>1)u=1
if(t<0)t=0
else if(t>1)t=1
if(s<0)s=0
else if(s>1)s=1
if(r<0)r=0
else if(r>1)r=1
return new V.W(u,t,s,r)},
v:function(a,b){var u,t
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.W))return!1
u=b.a
t=$.G().a
if(!(Math.abs(u-this.a)<t))return!1
if(!(Math.abs(b.b-this.b)<t))return!1
if(!(Math.abs(b.c-this.c)<t))return!1
if(!(Math.abs(b.d-this.d)<t))return!1
return!0},
i:function(a){return"["+V.J(this.a,3,0)+", "+V.J(this.b,3,0)+", "+V.J(this.c,3,0)+", "+V.J(this.d,3,0)+"]"}}
V.e3.prototype={}
V.cQ.prototype={
a6:function(a,b){var u=H.b([this.a,this.d,this.r,this.b,this.e,this.x,this.c,this.f,this.y],[P.t])
return u},
v:function(a,b){var u,t
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.cQ))return!1
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
u=[P.t]
t=V.bA(H.b([this.a,this.d,this.r],u),3,0)
s=V.bA(H.b([this.b,this.e,this.x],u),3,0)
r=V.bA(H.b([this.c,this.f,this.y],u),3,0)
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
V.a4.prototype={
a6:function(a,b){var u=H.b([this.a,this.e,this.y,this.cx,this.b,this.f,this.z,this.cy,this.c,this.r,this.Q,this.db,this.d,this.x,this.ch,this.dx],[P.t])
return u},
e9:function(){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0
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
if(Math.abs(a7-0)<$.G().a)return V.b8()
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
cB:function(a){var u,t,s
u=a.a
t=a.b
s=a.c
return new V.F(this.a*u+this.b*t+this.c*s,this.e*u+this.f*t+this.r*s,this.y*u+this.z*t+this.Q*s)},
b3:function(a){var u,t,s
u=a.a
t=a.b
s=a.c
return new V.Q(this.a*u+this.b*t+this.c*s+this.d,this.e*u+this.f*t+this.r*s+this.x,this.y*u+this.z*t+this.Q*s+this.ch)},
v:function(a,b){var u,t
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.a4))return!1
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
e7:function(a,b,c){var u,t,s,r,q,p,o,n,m,l
u=[P.t]
t=V.bA(H.b([this.a,this.e,this.y,this.cx],u),b,c)
s=V.bA(H.b([this.b,this.f,this.z,this.cy],u),b,c)
r=V.bA(H.b([this.c,this.r,this.Q,this.db],u),b,c)
q=V.bA(H.b([this.d,this.x,this.ch,this.dx],u),b,c)
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
O:function(){return this.e7("",3,0)},
E:function(a){return this.e7(a,3,0)}}
V.T.prototype={
n:function(a,b){return new V.T(this.a+b.a,this.b+b.b)},
p:function(a,b){return new V.T(this.a-b.a,this.b-b.b)},
v:function(a,b){var u,t
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.T))return!1
u=b.a
t=$.G().a
if(!(Math.abs(u-this.a)<t))return!1
if(!(Math.abs(b.b-this.b)<t))return!1
return!0},
i:function(a){return"["+V.J(this.a,3,0)+", "+V.J(this.b,3,0)+"]"}}
V.Q.prototype={
n:function(a,b){return new V.Q(this.a+b.a,this.b+b.b,this.c+b.c)},
p:function(a,b){return new V.Q(this.a-b.a,this.b-b.b,this.c-b.c)},
q:function(a,b){return new V.Q(this.a*b,this.b*b,this.c*b)},
v:function(a,b){var u,t
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.Q))return!1
u=b.a
t=$.G().a
if(!(Math.abs(u-this.a)<t))return!1
if(!(Math.abs(b.b-this.b)<t))return!1
if(!(Math.abs(b.c-this.c)<t))return!1
return!0},
i:function(a){return"["+V.J(this.a,3,0)+", "+V.J(this.b,3,0)+", "+V.J(this.c,3,0)+"]"}}
V.aE.prototype={
n:function(a,b){return new V.aE(C.e.n(this.a,b.gjN(b)),C.e.n(this.b,b.gjO(b)),C.e.n(this.c,b.gjP(b)),C.e.n(this.d,b.gjM()))},
p:function(a,b){return new V.aE(C.e.p(this.a,b.gjN(b)),C.e.p(this.b,b.gjO(b)),C.e.p(this.c,b.gjP(b)),C.e.p(this.d,b.gjM()))},
v:function(a,b){var u,t
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.aE))return!1
u=b.a
t=$.G().a
if(!(Math.abs(u-this.a)<t))return!1
if(!(Math.abs(b.b-this.b)<t))return!1
if(!(Math.abs(b.c-this.c)<t))return!1
if(!(Math.abs(b.d-this.d)<t))return!1
return!0},
i:function(a){return"["+V.J(this.a,3,0)+", "+V.J(this.b,3,0)+", "+V.J(this.c,3,0)+", "+V.J(this.d,3,0)+"]"}}
V.br.prototype={
ga3:function(){var u,t
u=this.c
t=this.d
if(u>t)return t
else return u},
v:function(a,b){var u,t
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.br))return!1
u=b.a
t=$.G().a
if(!(Math.abs(u-this.a)<t))return!1
if(!(Math.abs(b.b-this.b)<t))return!1
if(!(Math.abs(b.c-this.c)<t))return!1
if(!(Math.abs(b.d-this.d)<t))return!1
return!0},
i:function(a){return"["+V.J(this.a,3,0)+", "+V.J(this.b,3,0)+", "+V.J(this.c,3,0)+", "+V.J(this.d,3,0)+"]"}}
V.I.prototype={
cn:function(a){return Math.sqrt(this.A(this))},
A:function(a){var u,t,s,r
u=this.a
t=a.a
if(typeof u!=="number")return u.q()
if(typeof t!=="number")return H.A(t)
s=this.b
r=a.b
if(typeof s!=="number")return s.q()
if(typeof r!=="number")return H.A(r)
return u*t+s*r},
n:function(a,b){var u,t,s
u=this.a
t=b.giZ(b)
if(typeof u!=="number")return u.n()
t=C.d.n(u,t)
u=this.b
s=b.gj_(b)
if(typeof u!=="number")return u.n()
return new V.I(t,C.d.n(u,s))},
p:function(a,b){var u,t,s
u=this.a
t=b.giZ(b)
if(typeof u!=="number")return u.p()
t=C.d.p(u,t)
u=this.b
s=b.gj_(b)
if(typeof u!=="number")return u.p()
return new V.I(t,C.d.p(u,s))},
q:function(a,b){var u,t
u=this.a
if(typeof u!=="number")return u.q()
t=this.b
if(typeof t!=="number")return t.q()
return new V.I(u*b,t*b)},
u:function(a,b){var u,t
if(Math.abs(b-0)<$.G().a){u=$.iq
if(u==null){u=new V.I(0,0)
$.iq=u}return u}u=this.a
if(typeof u!=="number")return u.u()
t=this.b
if(typeof t!=="number")return t.u()
return new V.I(u/b,t/b)},
v:function(a,b){var u,t,s
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.I))return!1
u=b.a
t=this.a
s=$.G()
s.toString
if(typeof u!=="number")return u.p()
if(typeof t!=="number")return H.A(t)
s=s.a
if(!(Math.abs(u-t)<s))return!1
u=b.b
t=this.b
if(typeof u!=="number")return u.p()
if(typeof t!=="number")return H.A(t)
if(!(Math.abs(u-t)<s))return!1
return!0},
i:function(a){return"["+V.J(this.a,3,0)+", "+V.J(this.b,3,0)+"]"}}
V.F.prototype={
cn:function(a){return Math.sqrt(this.A(this))},
A:function(a){return this.a*a.a+this.b*a.b+this.c*a.c},
at:function(a){var u,t,s,r,q,p
u=this.b
t=a.c
s=this.c
r=a.b
q=a.a
p=this.a
return new V.F(u*t-s*r,s*q-p*t,p*r-u*q)},
n:function(a,b){return new V.F(this.a+b.a,this.b+b.b,this.c+b.c)},
p:function(a,b){return new V.F(this.a-b.a,this.b-b.b,this.c-b.c)},
M:function(a){return new V.F(-this.a,-this.b,-this.c)},
q:function(a,b){return new V.F(this.a*b,this.b*b,this.c*b)},
u:function(a,b){if(Math.abs(b-0)<$.G().a)return V.c9()
return new V.F(this.a/b,this.b/b,this.c/b)},
ea:function(){var u=$.G().a
if(!(Math.abs(0-this.a)<u))return!1
if(!(Math.abs(0-this.b)<u))return!1
if(!(Math.abs(0-this.c)<u))return!1
return!0},
v:function(a,b){var u,t
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.F))return!1
u=b.a
t=$.G().a
if(!(Math.abs(u-this.a)<t))return!1
if(!(Math.abs(b.b-this.b)<t))return!1
if(!(Math.abs(b.c-this.c)<t))return!1
return!0},
i:function(a){return"["+V.J(this.a,3,0)+", "+V.J(this.b,3,0)+", "+V.J(this.c,3,0)+"]"}}
U.dV.prototype={
bD:function(a){var u=V.kE(a,this.c,this.b)
return u},
gm:function(){var u=this.y
if(u==null){u=D.B()
this.y=u}return u},
K:function(a){var u=this.y
if(u!=null)u.C(a)},
scE:function(a,b){},
scp:function(a){var u,t
u=this.b
if(!(Math.abs(u-a)<$.G().a)){this.b=a
if(a<this.c){this.c=a
this.d=a}else{t=this.d
if(a<t)this.d=this.bD(t)}u=new D.x("maximumLocation",u,this.b,this,[P.t])
u.b=!0
this.K(u)}},
scr:function(a){var u,t
u=this.c
if(!(Math.abs(u-a)<$.G().a)){this.c=a
if(this.b<a){this.b=a
this.d=a}else{t=this.d
if(a>t)this.d=this.bD(t)}u=new D.x("minimumLocation",u,this.c,this,[P.t])
u.b=!0
this.K(u)}},
sa2:function(a,b){var u
b=this.bD(b)
u=this.d
if(!(Math.abs(u-b)<$.G().a)){this.d=b
u=new D.x("location",u,b,this,[P.t])
u.b=!0
this.K(u)}},
scq:function(a){var u,t,s
u=this.e
if(!(Math.abs(u-a)<$.G().a)){this.e=a
t=this.f
s=-a
if(t<s)t=s
else if(t>a)t=a
this.f=t
u=new D.x("maximumVelocity",u,a,this,[P.t])
u.b=!0
this.K(u)}},
sR:function(a){var u,t
u=this.e
t=-u
if(a<t)a=t
else if(a>u)a=u
u=this.f
if(!(Math.abs(u-a)<$.G().a)){this.f=a
u=new D.x("velocity",u,a,this,[P.t])
u.b=!0
this.K(u)}},
sca:function(a){var u
if(a<0)a=0
else if(a>1)a=1
u=this.x
if(!(Math.abs(u-a)<$.G().a)){this.x=a
u=new D.x("dampening",u,a,this,[P.t])
u.b=!0
this.K(u)}},
af:function(a){var u,t,s,r,q
u=this.f
t=$.G().a
if(!(Math.abs(u-0)<t)||!(Math.abs(this.r-0)<t)){s=u+this.r*a
u=this.e
r=-u
if(s<r)s=r
else if(s>u)s=u
this.sa2(0,this.d+s*a)
u=this.x
if(!(Math.abs(u-0)<$.G().a)){q=s*Math.pow(1-u,a)
if(s<0){if(q<s)q=s
else if(q>0)q=0}else if(q<0)q=0
else if(q>s)q=s
s=q}this.sR(s)}}}
U.cu.prototype={
gm:function(){var u=this.b
if(u==null){u=D.B()
this.b=u}return u},
aL:function(a,b){return this.a},
v:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.cu))return!1
return J.L(this.a,b.a)},
i:function(a){return"Constant: "+this.a.E("          ")}}
U.bP.prototype={
gm:function(){var u=this.e
if(u==null){u=D.B()
this.e=u}return u},
K:function(a){var u
H.i(a,"$iq")
u=this.e
if(u!=null)u.C(a)},
a0:function(){return this.K(null)},
fI:function(a,b){var u,t,s,r,q,p,o,n
u=U.a5
H.d(b,"$if",[u],"$af")
for(t=b.length,s=this.gaC(),r={func:1,ret:-1,args:[D.q]},q=[r],p=0;p<b.length;b.length===t||(0,H.y)(b),++p){o=b[p]
if(o!=null){n=o.gm()
n.toString
H.l(s,r)
if(n.a==null)n.sa_(H.b([],q))
n=n.a;(n&&C.a).h(n,s)}}u=new D.b3(a,b,this,[u])
u.b=!0
this.K(u)},
hp:function(a,b){var u,t,s
u=U.a5
H.d(b,"$if",[u],"$af")
for(t=b.gP(b),s=this.gaC();t.w();)t.gG().gm().L(0,s)
u=new D.b4(a,b,this,[u])
u.b=!0
this.K(u)},
aL:function(a,b){var u,t,s,r
u=this.r
t=a.e
if(typeof u!=="number")return u.aM()
if(u<t){this.r=t
u=this.e
if(u!=null)++u.d
for(u=this.a,u=new J.ae(u,u.length,0,[H.r(u,0)]),s=null;u.w();){t=u.d
if(t!=null){r=t.aL(a,b)
if(r!=null)s=s==null?r:r.q(0,s)}}this.f=s==null?V.b8():s
u=this.e
if(u!=null)u.ax()}return this.f},
v:function(a,b){var u,t,s,r
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.bP))return!1
u=this.a.length
for(t=0;t<u;++t){s=this.a
if(t>=s.length)return H.e(s,t)
s=s[t]
r=b.a
if(t>=r.length)return H.e(r,t)
if(!J.L(s,r[t]))return!1}return!0},
i:function(a){return"Group"},
$af:function(){return[U.a5]},
$aK:function(){return[U.a5]},
$ia5:1}
U.a5.prototype={}
U.dm.prototype={
gm:function(){var u=this.cy
if(u==null){u=D.B()
this.cy=u}return u},
K:function(a){var u
H.i(a,"$iq")
u=this.cy
if(u!=null)u.C(a)},
a0:function(){return this.K(null)},
aS:function(a){if(this.a!=null)return!1
this.a=a
a.c.gdJ().h(0,this.gbM())
this.a.c.geb().h(0,this.gbO())
this.a.c.gbx().h(0,this.gbQ())
return!0},
bN:function(a){H.i(a,"$iq")
if(!J.L(this.c,this.a.b.c))return
this.y=!0
this.x=!0
this.z=this.b.d},
bP:function(a){var u,t,s,r,q,p,o
a=H.c(H.i(a,"$iq"),"$iaS")
if(!this.y)return
if(this.x){u=a.d.p(0,a.y)
u=new V.I(u.a,u.b)
u=u.A(u)
t=this.r
if(typeof t!=="number")return H.A(t)
if(u<t)return
this.x=!1}if(this.d){u=a.c
t=a.d.p(0,a.y)
u=new V.I(t.a,t.b).q(0,2).u(0,u.ga3())
this.Q=u
t=this.b
u=u.a
if(typeof u!=="number")return u.q()
s=this.e
if(typeof s!=="number")return H.A(s)
t.sR(u*10*s)}else{u=a.c
t=a.d
s=t.p(0,a.y)
r=new V.I(s.a,s.b).q(0,2).u(0,u.ga3())
s=this.b
q=r.a
if(typeof q!=="number")return q.M()
p=this.e
if(typeof p!=="number")return H.A(p)
o=this.z
if(typeof o!=="number")return H.A(o)
s.sa2(0,-q*p+o)
this.b.sR(0)
t=t.p(0,a.z)
this.Q=new V.I(t.a,t.b).q(0,2).u(0,u.ga3())}this.a0()},
bR:function(a){var u,t,s
H.i(a,"$iq")
if(!this.y)return
this.y=!1
if(this.x)return
u=this.Q
if(u.A(u)>0.0001){u=this.b
t=this.Q.a
if(typeof t!=="number")return t.q()
s=this.e
if(typeof s!=="number")return H.A(s)
u.sR(t*10*s)
this.a0()}},
aL:function(a,b){var u,t,s,r,q
u=this.ch
t=a.e
if(typeof u!=="number")return u.aM()
if(u<t){this.ch=t
s=a.y
this.b.af(s)
u=this.b.d
r=Math.cos(u)
q=Math.sin(u)
this.cx=V.aC(r,-q,0,0,q,r,0,0,0,0,1,0,0,0,0,1)}return this.cx},
$ia5:1}
U.dn.prototype={
gm:function(){var u=this.fx
if(u==null){u=D.B()
this.fx=u}return u},
K:function(a){var u
H.i(a,"$iq")
u=this.fx
if(u!=null)u.C(a)},
a0:function(){return this.K(null)},
aS:function(a){var u,t
if(this.a!=null)return!1
this.a=a
a.c.gdJ().h(0,this.gbM())
this.a.c.geb().h(0,this.gbO())
this.a.c.gbx().h(0,this.gbQ())
u=this.a.d
t=u.f
if(t==null){t=D.B()
u.f=t
u=t}else u=t
u.h(0,this.gfB())
u=this.a.d
t=u.d
if(t==null){t=D.B()
u.d=t
u=t}else u=t
u.h(0,this.gfD())
u=this.a.e
t=u.b
if(t==null){t=D.B()
u.b=t
u=t}else u=t
u.h(0,this.gi7())
u=this.a.e
t=u.d
if(t==null){t=D.B()
u.d=t
u=t}else u=t
u.h(0,this.gi5())
u=this.a.e
t=u.c
if(t==null){t=D.B()
u.c=t
u=t}else u=t
u.h(0,this.gi3())
return!0},
ah:function(a){var u,t
u=a.a
t=a.b
if(this.f){if(typeof u!=="number")return u.M()
u=-u}if(this.r){if(typeof t!=="number")return t.M()
t=-t}return new V.I(u,t)},
bN:function(a){a=H.c(H.i(a,"$iq"),"$iaS")
if(!J.L(this.d,a.x.b))return
this.cx=!0
this.ch=!0
this.cy=this.c.d
this.db=this.b.d},
bP:function(a){var u,t,s,r,q,p,o
a=H.c(H.i(a,"$iq"),"$iaS")
if(!this.cx)return
if(this.ch){u=a.d.p(0,a.y)
u=new V.I(u.a,u.b)
u=u.A(u)
t=this.Q
if(typeof t!=="number")return H.A(t)
if(u<t)return
this.ch=!1}if(this.e){u=a.c
t=a.d.p(0,a.y)
u=this.ah(new V.I(t.a,t.b).q(0,2).u(0,u.ga3()))
this.dx=u
t=this.c
u=u.a
if(typeof u!=="number")return u.M()
s=this.y
if(typeof s!=="number")return H.A(s)
t.sR(-u*10*s)
s=this.b
u=this.dx.b
if(typeof u!=="number")return u.M()
t=this.x
if(typeof t!=="number")return H.A(t)
s.sR(-u*10*t)}else{u=a.c
t=a.d
s=t.p(0,a.y)
r=this.ah(new V.I(s.a,s.b).q(0,2).u(0,u.ga3()))
s=this.c
q=r.a
if(typeof q!=="number")return q.M()
p=this.y
if(typeof p!=="number")return H.A(p)
o=this.cy
if(typeof o!=="number")return H.A(o)
s.sa2(0,-q*p+o)
o=this.b
p=r.b
if(typeof p!=="number")return p.M()
q=this.x
if(typeof q!=="number")return H.A(q)
s=this.db
if(typeof s!=="number")return H.A(s)
o.sa2(0,-p*q+s)
this.b.sR(0)
this.c.sR(0)
t=t.p(0,a.z)
this.dx=this.ah(new V.I(t.a,t.b).q(0,2).u(0,u.ga3()))}this.a0()},
bR:function(a){var u,t,s
H.i(a,"$iq")
if(!this.cx)return
this.cx=!1
if(this.ch)return
u=this.dx
if(u.A(u)>0.0001){u=this.c
t=this.dx.a
if(typeof t!=="number")return t.M()
s=this.y
if(typeof s!=="number")return H.A(s)
u.sR(-t*10*s)
s=this.b
t=this.dx.b
if(typeof t!=="number")return t.M()
u=this.x
if(typeof u!=="number")return H.A(u)
s.sR(-t*10*u)
this.a0()}},
fC:function(a){if(H.c(H.i(a,"$iq"),"$icL").x){this.ch=!0
this.cy=this.c.d
this.db=this.b.d}},
fE:function(a){var u,t,s,r,q,p,o
a=H.c(H.i(a,"$iq"),"$iaS")
if(!J.L(this.d,a.x.b))return
u=a.c
t=a.d
s=t.p(0,a.y)
r=this.ah(new V.I(s.a,s.b).q(0,2).u(0,u.ga3()))
s=this.c
q=r.a
if(typeof q!=="number")return q.M()
p=this.y
if(typeof p!=="number")return H.A(p)
o=this.cy
if(typeof o!=="number")return H.A(o)
s.sa2(0,-q*p+o)
o=this.b
p=r.b
if(typeof p!=="number")return p.M()
q=this.x
if(typeof q!=="number")return H.A(q)
s=this.db
if(typeof s!=="number")return H.A(s)
o.sa2(0,-p*q+s)
this.b.sR(0)
this.c.sR(0)
t=t.p(0,a.z)
this.dx=this.ah(new V.I(t.a,t.b).q(0,2).u(0,u.ga3()))
this.a0()},
i8:function(a){H.i(a,"$iq")
this.cx=!0
this.ch=!0
this.cy=this.c.d
this.db=this.b.d},
i6:function(a){var u,t,s,r,q,p,o
a=H.c(H.i(a,"$iq"),"$idf")
if(!this.cx)return
if(this.ch){u=a.d.p(0,a.y)
u=new V.I(u.a,u.b)
u=u.A(u)
t=this.Q
if(typeof t!=="number")return H.A(t)
if(u<t)return
this.ch=!1}if(this.e){u=a.c
t=a.d.p(0,a.y)
u=this.ah(new V.I(t.a,t.b).q(0,2).u(0,u.ga3()))
this.dx=u
t=this.c
u=u.a
if(typeof u!=="number")return u.M()
s=this.y
if(typeof s!=="number")return H.A(s)
t.sR(-u*10*s)
s=this.b
u=this.dx.b
if(typeof u!=="number")return u.M()
t=this.x
if(typeof t!=="number")return H.A(t)
s.sR(-u*10*t)}else{u=a.c
t=a.d
s=t.p(0,a.y)
r=this.ah(new V.I(s.a,s.b).q(0,2).u(0,u.ga3()))
s=this.c
q=r.a
if(typeof q!=="number")return q.M()
p=this.y
if(typeof p!=="number")return H.A(p)
o=this.cy
if(typeof o!=="number")return H.A(o)
s.sa2(0,-q*p+o)
o=this.b
p=r.b
if(typeof p!=="number")return p.M()
q=this.x
if(typeof q!=="number")return H.A(q)
s=this.db
if(typeof s!=="number")return H.A(s)
o.sa2(0,-p*q+s)
this.b.sR(0)
this.c.sR(0)
t=t.p(0,a.z)
this.dx=this.ah(new V.I(t.a,t.b).q(0,2).u(0,u.ga3()))}this.a0()},
i4:function(a){var u,t,s
H.i(a,"$iq")
if(!this.cx)return
this.cx=!1
if(this.ch)return
u=this.dx
if(u.A(u)>0.0001){u=this.c
t=this.dx.a
if(typeof t!=="number")return t.M()
s=this.y
if(typeof s!=="number")return H.A(s)
u.sR(-t*10*s)
s=this.b
t=this.dx.b
if(typeof t!=="number")return t.M()
u=this.x
if(typeof u!=="number")return H.A(u)
s.sR(-t*10*u)
this.a0()}},
aL:function(a,b){var u,t,s,r,q
u=this.dy
t=a.e
if(typeof u!=="number")return u.aM()
if(u<t){this.dy=t
s=a.y
this.c.af(s)
this.b.af(s)
u=this.b.d
r=Math.cos(u)
q=Math.sin(u)
u=V.aC(1,0,0,0,0,r,-q,0,0,q,r,0,0,0,0,1)
t=this.c.d
r=Math.cos(t)
q=Math.sin(t)
this.fr=u.q(0,V.aC(r,0,-q,0,0,1,0,0,q,0,r,0,0,0,0,1))}return this.fr},
$ia5:1}
U.dp.prototype={
gm:function(){var u=this.r
if(u==null){u=D.B()
this.r=u}return u},
K:function(a){var u=this.r
if(u!=null)u.C(a)},
aS:function(a){var u,t,s
if(this.a!=null)return!1
this.a=a
u=a.c
t=u.e
if(t==null){t=D.B()
u.e=t
u=t}else u=t
t=this.gfF()
u.h(0,t)
u=this.a.d
s=u.e
if(s==null){s=D.B()
u.e=s
u=s}else u=s
u.h(0,t)
return!0},
fG:function(a){var u,t,s,r
H.i(a,"$iq")
if(!J.L(this.b,this.a.b.c))return
H.c(a,"$ibS")
u=this.d
t=a.x.b
s=this.c
if(typeof t!=="number")return t.q()
r=u+t*s
if(u!==r){this.d=r
u=new D.x("zoom",u,r,this,[P.t])
u.b=!0
this.K(u)}},
aL:function(a,b){var u,t,s
u=this.e
t=a.e
if(u<t){this.e=t
s=Math.pow(10,this.d)
this.f=V.aC(s,0,0,0,0,s,0,0,0,0,s,0,0,0,0,1)}return this.f},
$ia5:1}
M.ct.prototype={
gm:function(){var u=this.f
if(u==null){u=D.B()
this.f=u}return u},
T:function(a){var u
H.i(a,"$iq")
u=this.f
if(u!=null)u.C(a)},
aN:function(){return this.T(null)},
ht:function(a,b){var u,t,s,r,q,p,o,n
u=M.ai
H.d(b,"$if",[u],"$af")
for(t=b.length,s=this.gU(),r={func:1,ret:-1,args:[D.q]},q=[r],p=0;p<b.length;b.length===t||(0,H.y)(b),++p){o=b[p]
if(o!=null){n=o.gm()
n.toString
H.l(s,r)
if(n.a==null)n.sa_(H.b([],q))
n=n.a;(n&&C.a).h(n,s)}}u=new D.b3(a,b,this,[u])
u.b=!0
this.T(u)},
hv:function(a,b){var u,t,s
u=M.ai
H.d(b,"$if",[u],"$af")
for(t=b.gP(b),s=this.gU();t.w();)t.gG().gm().L(0,s)
u=new D.b4(a,b,this,[u])
u.b=!0
this.T(u)},
a5:function(a){var u,t
if(this.e)return
this.e=!0
for(u=this.a,u=new J.ae(u,u.length,0,[H.r(u,0)]);u.w();){t=u.d
if(t!=null)t.a5(a)}this.e=!1},
$af:function(){return[M.ai]},
$aK:function(){return[M.ai]},
$iai:1}
M.cw.prototype={
gm:function(){var u=this.f
if(u==null){u=D.B()
this.f=u}return u},
T:function(a){var u
H.i(a,"$iq")
u=this.f
if(u!=null)u.C(a)},
aN:function(){return this.T(null)},
sb0:function(a,b){var u,t
if(b==null)b=X.hv(!0,!0,!1,null,2000,null,0)
u=this.b
if(u!==b){if(u!=null)u.gm().L(0,this.gU())
t=this.b
this.b=b
b.gm().h(0,this.gU())
u=new D.x("target",t,this.b,this,[X.c_])
u.b=!0
this.T(u)}},
sb1:function(a){var u,t
u=this.c
if(u!=a){if(u!=null)u.gm().L(0,this.gU())
t=this.c
this.c=a
if(a!=null)a.gm().h(0,this.gU())
u=new D.x("technique",t,this.c,this,[O.ba])
u.b=!0
this.T(u)}},
a5:function(a){var u,t
a.cu(this.c)
this.b.a1(a)
u=this.a
u.toString
a.cy.bs(V.b8())
t=V.b8()
u.a
a.db.bs(t)
this.d.af(a)
this.d.a5(a)
this.a.toString
a.cy.aZ()
a.db.aZ()
this.b.toString
a.ct()},
$iai:1}
M.cz.prototype={
T:function(a){var u
H.i(a,"$iq")
u=this.x
if(u!=null)u.C(a)},
aN:function(){return this.T(null)},
fS:function(a,b){var u,t,s,r,q,p,o,n
u=E.aa
H.d(b,"$if",[u],"$af")
for(t=b.length,s=this.gU(),r={func:1,ret:-1,args:[D.q]},q=[r],p=0;p<b.length;b.length===t||(0,H.y)(b),++p){o=b[p]
if(o!=null){n=o.z
if(n==null){n=new D.b2()
n.sa_(null)
n.saQ(null)
n.c=null
n.d=0
o.z=n}H.l(s,r)
if(n.a==null)n.sa_(H.b([],q))
n=n.a;(n&&C.a).h(n,s)}}u=new D.b3(a,b,this,[u])
u.b=!0
this.T(u)},
fU:function(a,b){var u,t,s
u=E.aa
H.d(b,"$if",[u],"$af")
for(t=b.gP(b),s=this.gU();t.w();)t.gG().gm().L(0,s)
u=new D.b4(a,b,this,[u])
u.b=!0
this.T(u)},
sdt:function(a){var u,t
if(a==null)a=X.i9(2000,1.0471975511965976,null,0.1,null)
u=this.a
if(u!==a){if(u!=null)u.gm().L(0,this.gU())
t=this.a
this.a=a
a.gm().h(0,this.gU())
u=new D.x("camera",t,this.a,this,[X.bg])
u.b=!0
this.T(u)}},
sb0:function(a,b){var u,t
u=this.b
if(u!==b){if(u!=null)u.gm().L(0,this.gU())
t=this.b
this.b=b
b.gm().h(0,this.gU())
u=new D.x("target",t,this.b,this,[X.c_])
u.b=!0
this.T(u)}},
sb1:function(a){var u,t
u=this.c
if(u!=a){if(u!=null)u.gm().L(0,this.gU())
t=this.c
this.c=a
if(a!=null)a.gm().h(0,this.gU())
u=new D.x("technique",t,this.c,this,[O.ba])
u.b=!0
this.T(u)}},
gm:function(){var u=this.x
if(u==null){u=D.B()
this.x=u}return u},
a5:function(a){var u,t,s,r,q,p,o,n,m,l,k
a.cu(this.c)
this.b.a1(a)
u=this.a
t=a.c
s=a.d
r=u.c
q=u.d
p=u.e
o=p-q
n=1/Math.tan(r*0.5)
m=V.aC(-n/(t/s),0,0,0,0,n,0,0,0,0,p/o,-p*q/o,0,0,1,0)
u.a
a.cy.bs(m)
t=$.ia
if(t==null){t=V.ic()
s=V.iv()
r=$.ir
if(r==null){r=new V.F(0,0,-1)
$.ir=r}r=V.i6(t,s,r)
$.ia=r
l=r}else l=t
t=u.b
if(t!=null){k=t.aL(a,u)
if(k!=null)l=k.q(0,l)}a.db.bs(l)
u=this.c
if(u!=null)u.af(a)
for(u=this.d.a,u=new J.ae(u,u.length,0,[H.r(u,0)]);u.w();)u.d.af(a)
for(u=this.d.a,u=new J.ae(u,u.length,0,[H.r(u,0)]);u.w();)u.d.a5(a)
this.a.toString
a.cy.aZ()
a.db.aZ()
this.b.aK(a)
a.ct()},
sf7:function(a,b){this.d=H.d(b,"$iK",[E.aa],"$aK")},
$iai:1}
M.ai.prototype={}
A.co.prototype={}
A.dO.prototype={
j:function(a,b){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<t;++s){r=u[s]
if(r.b===b)return r}return},
j0:function(){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<u.length;u.length===t||(0,H.y)(u),++s){r=u[s]
C.b.dL(r.a,r.c)}},
dG:function(){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<u.length;u.length===t||(0,H.y)(u),++s){r=u[s]
C.b.dH(r.a,r.c)}}}
A.cO.prototype={
eH:function(a6,a7){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5
this.z=a6
u=new P.b9("")
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
a6.ij(u)
a6.ir(u)
a6.ik(u)
a6.iz(u)
a6.iA(u)
a6.it(u)
a6.iE(u)
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
u=new P.b9("")
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
q.io(u)
q.ii(u)
q.il(u)
q.ip(u)
q.ix(u)
o=q.dy
if(o){m=u.a+="// === Enviromental ===\n"
m+="\n"
u.a=m
m+="uniform samplerCube envSampler;\n"
u.a=m
m+="uniform int nullEnvTxt;\n"
u.a=m
u.a=m+"\n"
q.iv(u)
q.iw(u)}q.is(u)
m=u.a+="// === Alpha ===\n"
m+="\n"
u.a=m
l=q.y
if(l!==C.c){m+="uniform float alpha;\n"
u.a=m
if(l!==C.i){m+="uniform int nullAlphaTxt;\n"
u.a=m
if(l===C.f){m+="uniform sampler2D alphaTxt;\n"
u.a=m}else if(l===C.h){m+="uniform samplerCube alphaTxt;\n"
u.a=m}}m+="\n"
u.a=m}m+="float alphaValue()\n"
u.a=m
m+="{\n"
u.a=m
switch(l){case C.c:m+="   return 1.0;\n"
u.a=m
break
case C.i:m+="   return alpha;\n"
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
m=u.a+="   return litClr*("+C.a.D(k," + ")+");\n"
m+="}\n"
u.a=m
u.a=m+"\n"
q.im(u)
q.iu(u)
q.iy(u)
q.iB(u)
q.iC(u)
q.iD(u)
q.iq(u)}m=u.a+="// === Main ===\n"
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
i="vec4("+C.a.D(j," + ")+", alpha);"
q=u.a
if(n){q+="   gl_FragColor = colorMat*"+i+"\n"
u.a=q}else{q+="   gl_FragColor = "+i+"\n"
u.a=q}q+="}\n"
u.a=q
this.e8(s.charCodeAt(0)==0?s:s,q.charCodeAt(0)==0?q:q)
this.Q=this.x.j(0,"posAttr")
this.cx=this.x.j(0,"normAttr")
this.ch=this.x.j(0,"binmAttr")
this.cy=this.x.j(0,"txt2DAttr")
this.db=this.x.j(0,"txtCubeAttr")
this.dx=this.x.j(0,"bendAttr")
if(a6.fr)this.id=H.c(this.y.k(0,"invViewMat"),"$ia7")
if(t)this.dy=H.c(this.y.k(0,"objMat"),"$ia7")
if(r)this.fr=H.c(this.y.k(0,"viewObjMat"),"$ia7")
this.fy=H.c(this.y.k(0,"projViewObjMat"),"$ia7")
if(a6.x2)this.k1=H.c(this.y.k(0,"txt2DMat"),"$ic3")
if(a6.y1)this.k2=H.c(this.y.k(0,"txtCubeMat"),"$ia7")
if(a6.y2)this.k3=H.c(this.y.k(0,"colorMat"),"$ia7")
this.sf3(H.b([],[A.a7]))
t=a6.ak
if(t>0){this.k4=H.i(this.y.k(0,"bendMatCount"),"$iz")
for(h=0;h<t;++h){s=this.r1
r=this.y
q="bendValues["+h+"].mat"
g=r.j(0,q)
if(g==null)H.o(P.p("Required uniform value, "+q+", was not defined or used in shader."));(s&&C.a).h(s,H.c(g,"$ia7"))}}t=a6.a
if(t!==C.c){this.r2=H.c(this.y.k(0,"emissionClr"),"$iC")
switch(t){case C.c:break
case C.i:break
case C.f:this.rx=H.c(this.y.k(0,"emissionTxt"),"$ia_")
this.x1=H.c(this.y.k(0,"nullEmissionTxt"),"$iz")
break
case C.h:this.ry=H.c(this.y.k(0,"emissionTxt"),"$iab")
this.x1=H.c(this.y.k(0,"nullEmissionTxt"),"$iz")
break}}t=a6.b
if(t!==C.c){this.x2=H.c(this.y.k(0,"ambientClr"),"$iC")
switch(t){case C.c:break
case C.i:break
case C.f:this.y1=H.c(this.y.k(0,"ambientTxt"),"$ia_")
this.ak=H.c(this.y.k(0,"nullAmbientTxt"),"$iz")
break
case C.h:this.y2=H.c(this.y.k(0,"ambientTxt"),"$iab")
this.ak=H.c(this.y.k(0,"nullAmbientTxt"),"$iz")
break}}t=a6.c
if(t!==C.c){this.ad=H.c(this.y.k(0,"diffuseClr"),"$iC")
switch(t){case C.c:break
case C.i:break
case C.f:this.bc=H.c(this.y.k(0,"diffuseTxt"),"$ia_")
this.bd=H.c(this.y.k(0,"nullDiffuseTxt"),"$iz")
break
case C.h:this.dM=H.c(this.y.k(0,"diffuseTxt"),"$iab")
this.bd=H.c(this.y.k(0,"nullDiffuseTxt"),"$iz")
break}}t=a6.d
if(t!==C.c){this.be=H.c(this.y.k(0,"invDiffuseClr"),"$iC")
switch(t){case C.c:break
case C.i:break
case C.f:this.dN=H.c(this.y.k(0,"invDiffuseTxt"),"$ia_")
this.bf=H.c(this.y.k(0,"nullInvDiffuseTxt"),"$iz")
break
case C.h:this.dO=H.c(this.y.k(0,"invDiffuseTxt"),"$iab")
this.bf=H.c(this.y.k(0,"nullInvDiffuseTxt"),"$iz")
break}}t=a6.e
if(t!==C.c){this.bi=H.c(this.y.k(0,"shininess"),"$iO")
this.bg=H.c(this.y.k(0,"specularClr"),"$iC")
switch(t){case C.c:break
case C.i:break
case C.f:this.dP=H.c(this.y.k(0,"specularTxt"),"$ia_")
this.bh=H.c(this.y.k(0,"nullSpecularTxt"),"$iz")
break
case C.h:this.dQ=H.c(this.y.k(0,"specularTxt"),"$iab")
this.bh=H.c(this.y.k(0,"nullSpecularTxt"),"$iz")
break}}switch(a6.f){case C.c:break
case C.i:break
case C.f:this.dR=H.c(this.y.k(0,"bumpTxt"),"$ia_")
this.bj=H.c(this.y.k(0,"nullBumpTxt"),"$iz")
break
case C.h:this.dS=H.c(this.y.k(0,"bumpTxt"),"$iab")
this.bj=H.c(this.y.k(0,"nullBumpTxt"),"$iz")
break}if(a6.dy){this.dT=H.c(this.y.k(0,"envSampler"),"$iab")
this.dU=H.c(this.y.k(0,"nullEnvTxt"),"$iz")
t=a6.r
if(t!==C.c){this.bk=H.c(this.y.k(0,"reflectClr"),"$iC")
switch(t){case C.c:break
case C.i:break
case C.f:this.dV=H.c(this.y.k(0,"reflectTxt"),"$ia_")
this.bl=H.c(this.y.k(0,"nullReflectTxt"),"$iz")
break
case C.h:this.dW=H.c(this.y.k(0,"reflectTxt"),"$iab")
this.bl=H.c(this.y.k(0,"nullReflectTxt"),"$iz")
break}}t=a6.x
if(t!==C.c){this.bm=H.c(this.y.k(0,"refraction"),"$iO")
this.bn=H.c(this.y.k(0,"refractClr"),"$iC")
switch(t){case C.c:break
case C.i:break
case C.f:this.dX=H.c(this.y.k(0,"refractTxt"),"$ia_")
this.bo=H.c(this.y.k(0,"nullRefractTxt"),"$iz")
break
case C.h:this.dY=H.c(this.y.k(0,"refractTxt"),"$iab")
this.bo=H.c(this.y.k(0,"nullRefractTxt"),"$iz")
break}}}t=a6.y
if(t!==C.c){this.bp=H.c(this.y.k(0,"alpha"),"$iO")
switch(t){case C.c:break
case C.i:break
case C.f:this.dZ=H.c(this.y.k(0,"alphaTxt"),"$ia_")
this.bq=H.c(this.y.k(0,"nullAlphaTxt"),"$iz")
break
case C.h:this.e_=H.c(this.y.k(0,"alphaTxt"),"$iab")
this.bq=H.c(this.y.k(0,"nullAlphaTxt"),"$iz")
break}}this.seQ(H.b([],[A.c2]))
this.seR(H.b([],[A.c4]))
this.seS(H.b([],[A.c5]))
this.seT(H.b([],[A.c6]))
this.seU(H.b([],[A.c7]))
this.seV(H.b([],[A.c8]))
if(a6.k2){t=a6.z
if(t>0){this.e0=H.i(this.y.k(0,"dirLightCount"),"$iz")
for(h=0;h<t;++h){s=this.y
r="dirLights["+h+"].viewDir"
g=s.j(0,r)
if(g==null)H.o(P.p("Required uniform value, "+r+", was not defined or used in shader."))
H.c(g,"$iC")
s=this.y
r="dirLights["+h+"].color"
f=s.j(0,r)
if(f==null)H.o(P.p("Required uniform value, "+r+", was not defined or used in shader."))
H.c(f,"$iC")
s=this.cc;(s&&C.a).h(s,new A.c2(h,g,f))}}t=a6.Q
if(t>0){this.e1=H.i(this.y.k(0,"pntLightCount"),"$iz")
for(h=0;h<t;++h){s=this.y
r="pntLights["+h+"].point"
g=s.j(0,r)
if(g==null)H.o(P.p("Required uniform value, "+r+", was not defined or used in shader."))
H.c(g,"$iC")
s=this.y
r="pntLights["+h+"].viewPnt"
f=s.j(0,r)
if(f==null)H.o(P.p("Required uniform value, "+r+", was not defined or used in shader."))
H.c(f,"$iC")
s=this.y
r="pntLights["+h+"].color"
e=s.j(0,r)
if(e==null)H.o(P.p("Required uniform value, "+r+", was not defined or used in shader."))
H.c(e,"$iC")
s=this.y
r="pntLights["+h+"].att0"
d=s.j(0,r)
if(d==null)H.o(P.p("Required uniform value, "+r+", was not defined or used in shader."))
H.c(d,"$iO")
s=this.y
r="pntLights["+h+"].att1"
c=s.j(0,r)
if(c==null)H.o(P.p("Required uniform value, "+r+", was not defined or used in shader."))
H.c(c,"$iO")
s=this.y
r="pntLights["+h+"].att2"
b=s.j(0,r)
if(b==null)H.o(P.p("Required uniform value, "+r+", was not defined or used in shader."))
H.c(b,"$iO")
s=this.cd;(s&&C.a).h(s,new A.c4(h,g,f,e,d,c,b))}}t=a6.ch
if(t>0){this.e2=H.i(this.y.k(0,"spotLightCount"),"$iz")
for(h=0;h<t;++h){s=this.y
r="spotLights["+h+"].objPnt"
g=s.j(0,r)
if(g==null)H.o(P.p("Required uniform value, "+r+", was not defined or used in shader."))
H.c(g,"$iC")
s=this.y
r="spotLights["+h+"].objDir"
f=s.j(0,r)
if(f==null)H.o(P.p("Required uniform value, "+r+", was not defined or used in shader."))
H.c(f,"$iC")
s=this.y
r="spotLights["+h+"].viewPnt"
e=s.j(0,r)
if(e==null)H.o(P.p("Required uniform value, "+r+", was not defined or used in shader."))
H.c(e,"$iC")
s=this.y
r="spotLights["+h+"].color"
d=s.j(0,r)
if(d==null)H.o(P.p("Required uniform value, "+r+", was not defined or used in shader."))
H.c(d,"$iC")
s=this.y
r="spotLights["+h+"].cutoff"
c=s.j(0,r)
if(c==null)H.o(P.p("Required uniform value, "+r+", was not defined or used in shader."))
H.c(c,"$iO")
s=this.y
r="spotLights["+h+"].coneAngle"
b=s.j(0,r)
if(b==null)H.o(P.p("Required uniform value, "+r+", was not defined or used in shader."))
H.c(b,"$iO")
s=this.y
r="spotLights["+h+"].att0"
a=s.j(0,r)
if(a==null)H.o(P.p("Required uniform value, "+r+", was not defined or used in shader."))
H.c(a,"$iO")
s=this.y
r="spotLights["+h+"].att1"
a0=s.j(0,r)
if(a0==null)H.o(P.p("Required uniform value, "+r+", was not defined or used in shader."))
H.c(a0,"$iO")
s=this.y
r="spotLights["+h+"].att2"
a1=s.j(0,r)
if(a1==null)H.o(P.p("Required uniform value, "+r+", was not defined or used in shader."))
H.c(a1,"$iO")
s=this.ce;(s&&C.a).h(s,new A.c5(h,g,f,e,d,c,b,a,a0,a1))}}t=a6.cx
if(t>0){this.e3=H.i(this.y.k(0,"txtDirLightCount"),"$iz")
for(h=0;h<t;++h){s=this.y
r="txtDirLights["+h+"].objUp"
g=s.j(0,r)
if(g==null)H.o(P.p("Required uniform value, "+r+", was not defined or used in shader."))
H.c(g,"$iC")
s=this.y
r="txtDirLights["+h+"].objRight"
f=s.j(0,r)
if(f==null)H.o(P.p("Required uniform value, "+r+", was not defined or used in shader."))
H.c(f,"$iC")
s=this.y
r="txtDirLights["+h+"].objDir"
e=s.j(0,r)
if(e==null)H.o(P.p("Required uniform value, "+r+", was not defined or used in shader."))
H.c(e,"$iC")
s=this.y
r="txtDirLights["+h+"].viewDir"
d=s.j(0,r)
if(d==null)H.o(P.p("Required uniform value, "+r+", was not defined or used in shader."))
H.c(d,"$iC")
s=this.y
r="txtDirLights["+h+"].color"
c=s.j(0,r)
if(c==null)H.o(P.p("Required uniform value, "+r+", was not defined or used in shader."))
H.c(c,"$iC")
s=this.y
r="txtDirLights["+h+"].nullTxt"
b=s.j(0,r)
if(b==null)H.o(P.p("Required uniform value, "+r+", was not defined or used in shader."))
H.c(b,"$iz")
s=this.y
r="txtDirLightsTxt2D"+h
a=s.j(0,r)
if(a==null)H.o(P.p("Required uniform value, "+r+", was not defined or used in shader."))
H.c(a,"$ia_")
s=this.cf;(s&&C.a).h(s,new A.c6(h,g,f,e,d,c,a,b))}}t=a6.cy
if(t>0){this.e4=H.i(this.y.k(0,"txtPntLightCount"),"$iz")
for(h=0;h<t;++h){s=this.y
r="txtPntLights["+h+"].point"
g=s.j(0,r)
if(g==null)H.o(P.p("Required uniform value, "+r+", was not defined or used in shader."))
H.c(g,"$iC")
s=this.y
r="txtPntLights["+h+"].viewPnt"
f=s.j(0,r)
if(f==null)H.o(P.p("Required uniform value, "+r+", was not defined or used in shader."))
H.c(f,"$iC")
s=this.y
r="txtPntLights["+h+"].invViewRotMat"
e=s.j(0,r)
if(e==null)H.o(P.p("Required uniform value, "+r+", was not defined or used in shader."))
H.c(e,"$ic3")
s=this.y
r="txtPntLights["+h+"].color"
d=s.j(0,r)
if(d==null)H.o(P.p("Required uniform value, "+r+", was not defined or used in shader."))
H.c(d,"$iC")
s=this.y
r="txtPntLights["+h+"].nullTxt"
c=s.j(0,r)
if(c==null)H.o(P.p("Required uniform value, "+r+", was not defined or used in shader."))
H.c(c,"$iz")
s=this.y
r="txtPntLights["+h+"].att0"
b=s.j(0,r)
if(b==null)H.o(P.p("Required uniform value, "+r+", was not defined or used in shader."))
H.c(b,"$iO")
s=this.y
r="txtPntLights["+h+"].att1"
a=s.j(0,r)
if(a==null)H.o(P.p("Required uniform value, "+r+", was not defined or used in shader."))
H.c(a,"$iO")
s=this.y
r="txtPntLights["+h+"].att2"
a0=s.j(0,r)
if(a0==null)H.o(P.p("Required uniform value, "+r+", was not defined or used in shader."))
H.c(a0,"$iO")
s=this.y
r="txtPntLightsTxtCube"+h
a1=s.j(0,r)
if(a1==null)H.o(P.p("Required uniform value, "+r+", was not defined or used in shader."))
H.c(a1,"$iab")
s=this.cg;(s&&C.a).h(s,new A.c7(h,g,f,e,d,a1,c,b,a,a0))}}t=a6.db
if(t>0){this.e5=H.i(this.y.k(0,"txtSpotLightCount"),"$iz")
for(h=0;h<t;++h){s=this.y
r="txtSpotLights["+h+"].objPnt"
g=s.j(0,r)
if(g==null)H.o(P.p("Required uniform value, "+r+", was not defined or used in shader."))
H.c(g,"$iC")
s=this.y
r="txtSpotLights["+h+"].objDir"
f=s.j(0,r)
if(f==null)H.o(P.p("Required uniform value, "+r+", was not defined or used in shader."))
H.c(f,"$iC")
s=this.y
r="txtSpotLights["+h+"].objUp"
e=s.j(0,r)
if(e==null)H.o(P.p("Required uniform value, "+r+", was not defined or used in shader."))
H.c(e,"$iC")
s=this.y
r="txtSpotLights["+h+"].objRight"
d=s.j(0,r)
if(d==null)H.o(P.p("Required uniform value, "+r+", was not defined or used in shader."))
H.c(d,"$iC")
s=this.y
r="txtSpotLights["+h+"].viewPnt"
c=s.j(0,r)
if(c==null)H.o(P.p("Required uniform value, "+r+", was not defined or used in shader."))
H.c(c,"$iC")
s=this.y
r="txtSpotLights["+h+"].nullTxt"
b=s.j(0,r)
if(b==null)H.o(P.p("Required uniform value, "+r+", was not defined or used in shader."))
H.c(b,"$iz")
s=this.y
r="txtSpotLights["+h+"].color"
a=s.j(0,r)
if(a==null)H.o(P.p("Required uniform value, "+r+", was not defined or used in shader."))
H.c(a,"$iC")
s=this.y
r="txtSpotLights["+h+"].tuScalar"
a0=s.j(0,r)
if(a0==null)H.o(P.p("Required uniform value, "+r+", was not defined or used in shader."))
H.c(a0,"$iO")
s=this.y
r="txtSpotLights["+h+"].tvScalar"
a1=s.j(0,r)
if(a1==null)H.o(P.p("Required uniform value, "+r+", was not defined or used in shader."))
H.c(a1,"$iO")
s=this.y
r="txtSpotLights["+h+"].att0"
a2=s.j(0,r)
if(a2==null)H.o(P.p("Required uniform value, "+r+", was not defined or used in shader."))
H.c(a2,"$iO")
s=this.y
r="txtSpotLights["+h+"].att1"
a3=s.j(0,r)
if(a3==null)H.o(P.p("Required uniform value, "+r+", was not defined or used in shader."))
H.c(a3,"$iO")
s=this.y
r="txtSpotLights["+h+"].att2"
a4=s.j(0,r)
if(a4==null)H.o(P.p("Required uniform value, "+r+", was not defined or used in shader."))
H.c(a4,"$iO")
s=this.y
r="txtSpotLightsTxt2D"+h
a5=s.j(0,r)
if(a5==null)H.o(P.p("Required uniform value, "+r+", was not defined or used in shader."))
H.c(a5,"$ia_")
s=this.ci;(s&&C.a).h(s,new A.c8(h,g,f,e,d,c,a5,b,a,a0,a1,a2,a3,a4))}}}},
ac:function(a,b,c){C.b.I(b.a,b.d,1)},
a8:function(a,b,c){C.b.I(b.a,b.d,1)},
sf3:function(a){this.r1=H.d(a,"$ia",[A.a7],"$aa")},
seQ:function(a){this.cc=H.d(a,"$ia",[A.c2],"$aa")},
seR:function(a){this.cd=H.d(a,"$ia",[A.c4],"$aa")},
seS:function(a){this.ce=H.d(a,"$ia",[A.c5],"$aa")},
seT:function(a){this.cf=H.d(a,"$ia",[A.c6],"$aa")},
seU:function(a){this.cg=H.d(a,"$ia",[A.c7],"$aa")},
seV:function(a){this.ci=H.d(a,"$ia",[A.c8],"$aa")}}
A.ex.prototype={
ij:function(a){var u,t,s
if(!this.x1)return
u=a.a+="struct BendingValue\n"
u+="{\n"
a.a=u
u+="   mat4 mat;\n"
a.a=u
u+="};\n"
a.a=u
a.a=u+"uniform int bendMatCount;\n"
u=a.a+="uniform BendingValue bendValues["+this.ak+"];\n"
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
ir:function(a){var u
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
ik:function(a){var u
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
iz:function(a){var u,t
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
iA:function(a){var u,t
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
it:function(a){var u
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
iE:function(a){var u
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
if(b===C.i)return
if(0>=c.length)return H.e(c,0)
u+="uniform int null"+(c[0].toUpperCase()+C.j.cJ(c,1))+"Txt;\n"
a.a=u
if(b===C.f)a.a=u+("uniform sampler2D "+c+"Txt;\n")
else if(b===C.h)a.a=u+("uniform samplerCube "+c+"Txt;\n")},
io:function(a){var u,t
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
case C.i:u=t+"   return emissionClr;\n"
a.a=u
break
case C.f:u=t+"   if(nullEmissionTxt > 0) return emissionClr;\n"
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
ii:function(a){var u,t
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
case C.i:u=t+"   return ambientClr;\n"
a.a=u
break
case C.f:u=t+"   if(nullAmbientTxt > 0) return ambientClr;\n"
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
il:function(a){var u,t
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
case C.i:u=t+"   diffuseColor = diffuseClr;\n"
a.a=u
break
case C.f:u=t+"   if(nullDiffuseTxt > 0) diffuseColor = diffuseClr;\n"
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
ip:function(a){var u,t
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
case C.i:u=t+"   invDiffuseColor = invDiffuseClr;\n"
a.a=u
break
case C.f:u=t+"   if(nullInvDiffuseTxt > 0) invDiffuseColor = invDiffuseClr;\n"
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
ix:function(a){var u,t
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
case C.i:u=t+"   specularColor = specularClr;\n"
a.a=u
break
case C.f:u=t+"   if(nullSpecularTxt > 0) specularColor = specularClr;\n"
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
is:function(a){var u,t
if(!this.r1)return
u=a.a+="// === Normal ===\n"
u+="\n"
a.a=u
t=this.f
switch(t){case C.c:break
case C.i:break
case C.f:u+="uniform sampler2D bumpTxt;\n"
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
switch(t){case C.c:u+="   return normalize(normalVec);\n"
a.a=u
break
case C.i:u+="   return normalize(normalVec);\n"
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
iv:function(a){var u,t
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
case C.i:u=t+"   vec3 scalar = reflectClr;\n"
a.a=u
break
case C.f:u=t+"   if(nullReflectTxt > 0) return vec3(0.0, 0.0, 0.0);\n"
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
iw:function(a){var u,t
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
case C.i:u=t+"   vec3 scalar = refractClr;\n"
a.a=u
break
case C.f:u=t+"   if(nullRefractTxt > 0) return vec3(0.0, 0.0, 0.0);\n"
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
im:function(a){var u,t
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
iu:function(a){var u,t
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
iy:function(a){var u,t
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
iB:function(a){var u,t,s
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
iC:function(a){var u,t,s
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
iD:function(a){var u,t,s
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
iq:function(a){var u
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
i:function(a){return this.ad}}
A.c2.prototype={}
A.c6.prototype={}
A.c4.prototype={}
A.c7.prototype={}
A.c5.prototype={}
A.c8.prototype={}
A.bX.prototype={
cM:function(a,b){this.c=null
this.d=null
this.e=null
this.f=null
this.r=null
this.x=null
this.y=null},
e8:function(a,b){var u,t,s
this.c=a
this.d=b
this.e=this.d1(a,35633)
this.f=this.d1(this.d,35632)
u=this.a
t=u.createProgram()
this.r=t
C.b.dl(u,t,this.e)
C.b.dl(u,this.r,this.f)
C.b.jb(u,this.r)
if(!H.iL(C.b.bz(u,this.r,35714))){s=C.b.es(u,this.r)
C.b.iT(u,this.r)
H.o(P.p("Failed to link shader: "+H.k(s)))}this.hS()
this.hU()},
a1:function(a){C.b.cD(a.a,this.r)
this.x.j0()},
d1:function(a,b){var u,t,s
u=this.a
t=C.b.iR(u,b)
C.b.eA(u,t,a)
C.b.iO(u,t)
if(!H.iL(C.b.ev(u,t,35713))){s=C.b.eu(u,t)
C.b.iU(u,t)
throw H.h(P.p("Error compiling shader '"+H.k(t)+"': "+H.k(s)))}return t},
hS:function(){var u,t,s,r,q,p
u=H.b([],[A.co])
t=this.a
s=H.a3(C.b.bz(t,this.r,35721))
if(typeof s!=="number")return H.A(s)
r=0
for(;r<s;++r){q=C.b.eo(t,this.r,r)
p=C.b.eq(t,this.r,q.name)
C.a.h(u,new A.co(t,q.name,p))}this.x=new A.dO(u)},
hU:function(){var u,t,s,r,q,p
u=H.b([],[A.dg])
t=this.a
s=H.a3(C.b.bz(t,this.r,35718))
if(typeof s!=="number")return H.A(s)
r=0
for(;r<s;++r){q=C.b.ep(t,this.r,r)
p=C.b.ew(t,this.r,q.name)
C.a.h(u,this.iS(q.type,q.size,q.name,p))}this.y=new A.fk(u)},
aB:function(a,b,c){var u,t
u=this.a
t=this.r
if(a===1)return new A.z(u,t,b,c)
else return A.hE(u,t,b,a,c)},
fb:function(a,b,c){var u,t
u=this.a
t=this.r
if(a===1)return new A.a_(u,t,b,c)
else return A.hE(u,t,b,a,c)},
fc:function(a,b,c){var u,t
u=this.a
t=this.r
if(a===1)return new A.ab(u,t,b,c)
else return A.hE(u,t,b,a,c)},
ba:function(a,b){return new P.dv(a+" uniform variables are unsupported by all browsers.\n"+("Please change the type of "+H.k(b)+"."))},
iS:function(a,b,c,d){switch(a){case 5120:return this.aB(b,c,d)
case 5121:return this.aB(b,c,d)
case 5122:return this.aB(b,c,d)
case 5123:return this.aB(b,c,d)
case 5124:return this.aB(b,c,d)
case 5125:return this.aB(b,c,d)
case 5126:return new A.O(this.a,this.r,c,d)
case 35664:return new A.aj(this.a,this.r,c,d)
case 35665:return new A.C(this.a,this.r,c,d)
case 35666:return new A.dh(this.a,this.r,c,d)
case 35667:return new A.fh(this.a,this.r,c,d)
case 35668:return new A.fi(this.a,this.r,c,d)
case 35669:return new A.fj(this.a,this.r,c,d)
case 35674:return new A.fl(this.a,this.r,c,d)
case 35675:return new A.c3(this.a,this.r,c,d)
case 35676:return new A.a7(this.a,this.r,c,d)
case 35678:return this.fb(b,c,d)
case 35680:return this.fc(b,c,d)
case 35670:throw H.h(this.ba("BOOL",c))
case 35671:throw H.h(this.ba("BOOL_VEC2",c))
case 35672:throw H.h(this.ba("BOOL_VEC3",c))
case 35673:throw H.h(this.ba("BOOL_VEC4",c))
default:throw H.h(P.p("Unknown uniform variable type "+H.k(a)+" for "+H.k(c)+"."))}}}
A.bi.prototype={
i:function(a){return this.b}}
A.d9.prototype={
eL:function(a,b){var u,t,s,r,q
this.e8("attribute vec3 posAttr;\n\nvarying vec2 pos;\n\nvoid main()\n{\n  pos = posAttr.xy*0.5 + 0.5;\n  gl_Position = vec4(posAttr, 1.0);\n}\n".charCodeAt(0)==0?"attribute vec3 posAttr;\n\nvarying vec2 pos;\n\nvoid main()\n{\n  pos = posAttr.xy*0.5 + 0.5;\n  gl_Position = vec4(posAttr, 1.0);\n}\n":"attribute vec3 posAttr;\n\nvarying vec2 pos;\n\nvoid main()\n{\n  pos = posAttr.xy*0.5 + 0.5;\n  gl_Position = vec4(posAttr, 1.0);\n}\n",A.jQ(a))
this.z=this.x.j(0,"posAttr")
this.Q=H.c(this.y.k(0,"txtCount"),"$iz")
this.ch=H.c(this.y.k(0,"backClr"),"$idh")
this.sie(H.b([],[A.a_]))
this.sf8(H.b([],[A.a7]))
u=[A.aj]
this.shY(H.b([],u))
this.shZ(H.b([],u))
this.sfe(H.b([],u))
this.sff(H.b([],u))
this.sfq(H.b([],[A.z]))
for(t=0;t<a;++t){u=this.cx
s=this.y
r="txt"+t
q=s.j(0,r)
if(q==null)H.o(P.p("Required uniform value, "+r+", was not defined or used in shader."));(u&&C.a).h(u,H.c(q,"$ia_"))
u=this.cy
s=this.y
r="clrMat"+t
q=s.j(0,r)
if(q==null)H.o(P.p("Required uniform value, "+r+", was not defined or used in shader."));(u&&C.a).h(u,H.c(q,"$ia7"))
u=this.db
s=this.y
r="srcLoc"+t
q=s.j(0,r)
if(q==null)H.o(P.p("Required uniform value, "+r+", was not defined or used in shader."));(u&&C.a).h(u,H.c(q,"$iaj"))
u=this.dx
s=this.y
r="srcSize"+t
q=s.j(0,r)
if(q==null)H.o(P.p("Required uniform value, "+r+", was not defined or used in shader."));(u&&C.a).h(u,H.c(q,"$iaj"))
u=this.dy
s=this.y
r="destLoc"+t
q=s.j(0,r)
if(q==null)H.o(P.p("Required uniform value, "+r+", was not defined or used in shader."));(u&&C.a).h(u,H.c(q,"$iaj"))
u=this.fr
s=this.y
r="destSize"+t
q=s.j(0,r)
if(q==null)H.o(P.p("Required uniform value, "+r+", was not defined or used in shader."));(u&&C.a).h(u,H.c(q,"$iaj"))
u=this.fx
s=this.y
r="flip"+t
q=s.j(0,r)
if(q==null)H.o(P.p("Required uniform value, "+r+", was not defined or used in shader."));(u&&C.a).h(u,H.c(q,"$iz"))}},
sie:function(a){this.cx=H.d(a,"$ia",[A.a_],"$aa")},
sf8:function(a){this.cy=H.d(a,"$ia",[A.a7],"$aa")},
shY:function(a){this.db=H.d(a,"$ia",[A.aj],"$aa")},
shZ:function(a){this.dx=H.d(a,"$ia",[A.aj],"$aa")},
sfe:function(a){this.dy=H.d(a,"$ia",[A.aj],"$aa")},
sff:function(a){this.fr=H.d(a,"$ia",[A.aj],"$aa")},
sfq:function(a){this.fx=H.d(a,"$ia",[A.z],"$aa")}}
A.dg.prototype={}
A.fk.prototype={
j:function(a,b){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<t;++s){r=u[s]
if(r.c===b)return r}return},
k:function(a,b){var u=this.j(0,b)
if(u==null)throw H.h(P.p("Required uniform value, "+b+", was not defined or used in shader."))
return u},
i:function(a){return this.O()},
j3:function(a){var u,t,s,r
for(u=this.a,t=u.length,s="",r=0;r<u.length;u.length===t||(0,H.y)(u),++r)s+=u[r].i(0)+a
return s},
O:function(){return this.j3("\n")}}
A.z.prototype={
i:function(a){return"Uniform1i: "+H.k(this.c)}}
A.fh.prototype={
i:function(a){return"Uniform2i: "+H.k(this.c)}}
A.fi.prototype={
i:function(a){return"Uniform3i: "+H.k(this.c)}}
A.fj.prototype={
i:function(a){return"Uniform4i: "+H.k(this.c)}}
A.fg.prototype={
i:function(a){return"Uniform1iv: "+H.k(this.c)},
sig:function(a){this.e=H.d(a,"$ia",[P.u],"$aa")}}
A.O.prototype={
i:function(a){return"Uniform1f: "+H.k(this.c)}}
A.aj.prototype={
i:function(a){return"Uniform2f: "+H.k(this.c)}}
A.C.prototype={
i:function(a){return"Uniform3f: "+H.k(this.c)}}
A.dh.prototype={
i:function(a){return"Uniform4f: "+H.k(this.c)}}
A.fl.prototype={
i:function(a){return"Uniform1Mat2 "+H.k(this.c)}}
A.c3.prototype={
ag:function(a){var u=new Float32Array(H.bv(H.d(a,"$ia",[P.t],"$aa")))
C.b.el(this.a,this.d,!1,u)},
i:function(a){return"UniformMat3: "+H.k(this.c)}}
A.a7.prototype={
ag:function(a){var u=new Float32Array(H.bv(H.d(a,"$ia",[P.t],"$aa")))
C.b.cC(this.a,this.d,!1,u)},
i:function(a){return"UniformMat4: "+H.k(this.c)}}
A.a_.prototype={
i:function(a){return"UniformSampler2D: "+H.k(this.c)}}
A.ab.prototype={
i:function(a){return"UniformSamplerCube: "+H.k(this.c)}}
F.hq.prototype={
$1:function(a){return new V.Q(Math.cos(a),Math.sin(a),0)},
$S:30}
F.hf.prototype={
$3:function(a,b,c){var u,t,s,r,q,p,o,n,m
u=b*6.283185307179586
t=this.a
s=this.b
r=J.hT(t.$1(u),s)
s=J.jd(J.hT(t.$1(u+3.141592653589793/this.c),s),r)
s=new V.F(s.a,s.b,s.c)
q=s.u(0,Math.sqrt(s.A(s)))
t=$.is
if(t==null){t=new V.F(1,0,0)
$.is=t
p=t}else p=t
t=q.at(!J.L(q,p)?V.iw():p)
o=t.u(0,Math.sqrt(t.A(t)))
t=o.at(q)
p=t.u(0,Math.sqrt(t.A(t)))
n=c*6.283185307179586
t=Math.cos(n)
s=this.d
m=Math.sin(n)
t=p.q(0,t*s)
s=o.q(0,m*s)
s=J.jc(r,new V.Q(t.a-s.a,t.b-s.b,t.c-s.c))
if(!J.L(a.f,s)){a.f=H.i(s,"$iQ")
t=a.a
if(t!=null)t.a4()}},
$S:31}
F.Y.prototype={
aU:function(){if(!this.gdI()){C.a.L(this.a.a.d.b,this)
this.a.a.a4()}this.hG()
this.hH()
this.hI()},
hP:function(a){this.a=a
C.a.h(a.d.b,this)},
hQ:function(a){this.b=a
C.a.h(a.d.c,this)},
hR:function(a){this.c=a
C.a.h(a.d.d,this)},
hG:function(){var u=this.a
if(u!=null){C.a.L(u.d.b,this)
this.a=null}},
hH:function(){var u=this.b
if(u!=null){C.a.L(u.d.c,this)
this.b=null}},
hI:function(){var u=this.c
if(u!=null){C.a.L(u.d.d,this)
this.c=null}},
gdI:function(){return this.a==null||this.b==null||this.c==null},
f2:function(){var u,t,s,r,q
u=this.a
t=u==null?null:u.r
u=this.b
s=u==null?null:u.r
u=this.c
r=u==null?null:u.r
q=V.c9()
if(t!=null)q=q.n(0,t)
if(s!=null)q=q.n(0,s)
if(r!=null)q=q.n(0,r)
if(q.ea())return
return q.u(0,Math.sqrt(q.A(q)))},
f6:function(){var u,t,s,r,q
u=this.a
t=u==null?null:u.f
u=this.b
s=u==null?null:u.f
u=this.c
r=u==null?null:u.f
if(t==null||s==null||r==null)return
u=s.p(0,t)
u=new V.F(u.a,u.b,u.c)
q=u.u(0,Math.sqrt(u.A(u)))
u=r.p(0,t)
u=new V.F(u.a,u.b,u.c)
u=q.at(u.u(0,Math.sqrt(u.A(u))))
return u.u(0,Math.sqrt(u.A(u)))},
c8:function(){if(this.d!=null)return!0
var u=this.f2()
if(u==null){u=this.f6()
if(u==null)return!1}this.d=u
this.a.a.a4()
return!0},
f1:function(){var u,t,s,r,q
u=this.a
t=u==null?null:u.x
u=this.b
s=u==null?null:u.x
u=this.c
r=u==null?null:u.x
q=V.c9()
if(t!=null)q=q.n(0,t)
if(s!=null)q=q.n(0,s)
if(r!=null)q=q.n(0,r)
if(q.ea())return
return q.u(0,Math.sqrt(q.A(q)))},
f5:function(){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f
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
if(Math.abs(i-0)<$.G().a){u=m.p(0,p)
u=new V.F(u.a,u.b,u.c)
h=u.u(0,Math.sqrt(u.A(u)))
if(j.a-k.a<0)h=h.M(0)}else{g=(u-l.b)/i
u=m.p(0,p).q(0,g).n(0,p).p(0,s)
u=new V.F(u.a,u.b,u.c)
h=u.u(0,Math.sqrt(u.A(u)))
j=j.a
k=k.a
if((j-k)*g+k-l.a<0)h=h.M(0)}u=this.d
if(u!=null){f=u.u(0,Math.sqrt(u.A(u)))
u=f.at(h)
u=u.u(0,Math.sqrt(u.A(u))).at(f)
h=u.u(0,Math.sqrt(u.A(u)))}return h},
c6:function(){if(this.e!=null)return!0
var u=this.f1()
if(u==null){u=this.f5()
if(u==null)return!1}this.e=u
this.a.a.a4()
return!0},
giN:function(){if(J.L(this.a,this.b))return!0
if(J.L(this.b,this.c))return!0
if(J.L(this.c,this.a))return!0
return!1},
v:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.O()},
E:function(a){var u,t
if(this.gdI())return a+"disposed"
u=a+C.j.aw(J.aM(this.a.e),0)+", "+C.j.aw(J.aM(this.b.e),0)+", "+C.j.aw(J.aM(this.c.e),0)+" {"
t=this.d
u=t!=null?u+(t.i(0)+", "):u+"-, "
t=this.e
return t!=null?u+(t.i(0)+"}"):u+"-}"},
O:function(){return this.E("")}}
F.e6.prototype={}
F.f_.prototype={
aW:function(a,b,c){var u,t
u=b.a
u.a.a.B()
u=u.e
t=c.a
t.a.a.B()
if(u==t.e){u=b.b
u.a.a.B()
u=u.e
t=c.b
t.a.a.B()
if(u==t.e){u=b.c
u.a.a.B()
u=u.e
t=c.c
t.a.a.B()
t=u==t.e
u=t}else u=!1
return u}else{u=b.a
u.a.a.B()
u=u.e
t=c.b
t.a.a.B()
if(u==t.e){u=b.b
u.a.a.B()
u=u.e
t=c.c
t.a.a.B()
if(u==t.e){u=b.c
u.a.a.B()
u=u.e
t=c.a
t.a.a.B()
t=u==t.e
u=t}else u=!1
return u}else{u=b.a
u.a.a.B()
u=u.e
t=c.c
t.a.a.B()
if(u==t.e){u=b.b
u.a.a.B()
u=u.e
t=c.a
t.a.a.B()
if(u==t.e){u=b.c
u.a.a.B()
u=u.e
t=c.b
t.a.a.B()
t=u==t.e
u=t}else u=!1
return u}else return!1}}}}
F.b7.prototype={}
F.ek.prototype={}
F.ff.prototype={
aW:function(a,b,c){var u,t
u=b.a
u.a.a.B()
u=u.e
t=c.a
t.a.a.B()
if(u==t.e){u=b.b
u.a.a.B()
u=u.e
t=c.b
t.a.a.B()
return u==t.e}else{u=b.a
u.a.a.B()
u=u.e
t=c.b
t.a.a.B()
if(u==t.e){u=b.b
u.a.a.B()
u=u.e
t=c.a
t.a.a.B()
return u==t.e}else return!1}}}
F.bn.prototype={}
F.d2.prototype={
gm:function(){var u=this.e
if(u==null){u=D.B()
this.e=u}return u},
as:function(){var u,t
u=this.e
if(u!=null)++u.d
t=this.d.as()||!1
if(!this.a.as())t=!1
u=this.e
if(u!=null)u.ax()
return t},
jf:function(a,b){var u,t,s,r,q,p,o
u=this.e
if(u!=null)++u.d
u=this.a.c
t=H.b(u.slice(0),[H.r(u,0)])
for(u=[F.ad];t.length!==0;){s=C.a.gj2(t)
C.a.jv(t,0)
if(s!=null){r=H.b([],u)
C.a.h(r,s)
for(q=t.length,p=0;p<t.length;t.length===q||(0,H.y)(t),++p){o=t[p]
if(o!=null&&a.aW(0,s,o)){C.a.h(r,o)
C.a.L(t,o)}}if(r.length>1)b.je(r)}}this.a.B()
this.c.cw()
this.d.cw()
this.b.jw()
this.c.cz(new F.ff())
this.d.cz(new F.f_())
u=this.e
if(u!=null)u.ax()},
ds:function(a0,a1){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a
u=this.a.c.length
a1.toString
t=$.av()
s=a1.a
r=(s&t.a)!==0?1:0
if((s&$.aX().a)!==0)++r
if((s&$.aW().a)!==0)++r
if((s&$.aY().a)!==0)++r
if((s&$.aZ().a)!==0)++r
if((s&$.ck().a)!==0)++r
if((s&$.cl().a)!==0)++r
if((s&$.bE().a)!==0)++r
if((s&$.aV().a)!==0)++r
q=a1.gcH(a1)
p=q*4
t=new Array(u*q)
t.fixed$length=Array
s=P.t
o=H.b(t,[s])
t=new Array(r)
t.fixed$length=Array
n=H.b(t,[Z.cr])
for(m=0,l=0;l<r;++l){k=a1.iJ(l)
j=k.gcH(k)
C.a.Z(n,l,new Z.cr(k,j,m*4,p,0))
for(i=0;i<u;++i){t=this.a.c
if(i>=t.length)return H.e(t,i)
h=t[i].jc(k)
g=m+i*q
for(f=0;f<h.length;++f){C.a.Z(o,g,h[f]);++g}}m+=j}H.d(o,"$ia",[s],"$aa")
t=a0.a
e=t.createBuffer()
C.b.ai(t,34962,e)
C.b.dr(t,34962,new Float32Array(H.bv(o)),35044)
C.b.ai(t,34962,null)
d=new Z.bH(new Z.dq(34962,e),n,a1)
d.sfu(H.b([],[Z.bm]))
this.b.b
if(this.c.b.length!==0){s=P.u
c=H.b([],[s])
for(l=0;b=this.c.b,l<b.length;++l){b=b[l].a
b.a.a.B()
C.a.h(c,b.e)
b=this.c.b
if(l>=b.length)return H.e(b,l)
b=b[l].b
b.a.a.B()
C.a.h(c,b.e)}a=Z.ix(t,34963,H.d(c,"$ia",[s],"$aa"))
C.a.h(d.b,new Z.bm(1,c.length,a))}if(this.d.b.length!==0){s=P.u
c=H.b([],[s])
for(l=0;b=this.d.b,l<b.length;++l){b=b[l].a
b.a.a.B()
C.a.h(c,b.e)
b=this.d.b
if(l>=b.length)return H.e(b,l)
b=b[l].b
b.a.a.B()
C.a.h(c,b.e)
b=this.d.b
if(l>=b.length)return H.e(b,l)
b=b[l].c
b.a.a.B()
C.a.h(c,b.e)}a=Z.ix(t,34963,H.d(c,"$ia",[s],"$aa"))
C.a.h(d.b,new Z.bm(4,c.length,a))}return d},
i:function(a){var u=H.b([],[P.v])
if(this.a.c.length!==0){C.a.h(u,"Vertices:")
C.a.h(u,this.a.E("   "))}this.b.b
if(this.c.b.length!==0){C.a.h(u,"Lines:")
C.a.h(u,this.c.E("   "))}if(this.d.b.length!==0){C.a.h(u,"Faces:")
C.a.h(u,this.d.E("   "))}return C.a.D(u,"\n")},
aJ:function(a){var u=this.e
if(u!=null)u.C(a)},
a4:function(){return this.aJ(null)},
$ikL:1}
F.eU.prototype={
iF:function(a){var u,t,s,r,q,p
H.d(a,"$ia",[F.ad],"$aa")
u=H.b([],[F.Y])
t=a[0]
for(s=this.a,r=2;r<4;++r){q=a[r-1]
p=a[r]
s.a.h(0,t)
s.a.h(0,q)
s.a.h(0,p)
C.a.h(u,F.cA(t,q,p))}return u},
iG:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k,j,i,h
H.d(c,"$ia",[F.ad],"$aa")
u=H.b([],[F.Y])
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
C.a.h(u,F.cA(l,k,i))
t.a.h(0,l)
t.a.h(0,i)
t.a.h(0,h)
C.a.h(u,F.cA(l,i,h))}else{m.h(0,k)
t.a.h(0,i)
t.a.h(0,h)
C.a.h(u,F.cA(k,i,h))
t.a.h(0,k)
t.a.h(0,h)
t.a.h(0,l)
C.a.h(u,F.cA(k,h,l))}o=!o}q=!q}return u},
gl:function(a){return this.b.length},
cz:function(a){var u,t,s,r,q,p,o,n
for(u=this.a,t=u.a.c.length-1;t>=0;--t){s=u.a.c
if(t>=s.length)return H.e(s,t)
r=s[t]
for(s=r.d,q=s.b.length+s.c.length+s.d.length-1;q>=0;--q){p=r.d.j(0,q)
for(o=q-1;o>=0;--o){n=r.d.j(0,o)
if(a.aW(0,p,n)){p.aU()
break}}}}},
cw:function(){var u,t,s
for(u=this.b.length-1;u>=0;--u){t=this.b
if(u>=t.length)return H.e(t,u)
s=t[u]
t=s.giN()
if(t)s.aU()}},
as:function(){var u,t,s,r
for(u=this.b,t=u.length,s=!0,r=0;r<u.length;u.length===t||(0,H.y)(u),++r)if(!u[r].c8())s=!1
return s},
c7:function(){var u,t,s,r
for(u=this.b,t=u.length,s=!0,r=0;r<u.length;u.length===t||(0,H.y)(u),++r)if(!u[r].c6())s=!1
return s},
i:function(a){return this.O()},
E:function(a){var u,t,s,r
u=H.b([],[P.v])
for(t=this.b,s=t.length,r=0;r<t.length;t.length===s||(0,H.y)(t),++r)C.a.h(u,t[r].E(a))
return C.a.D(u,"\n")},
O:function(){return this.E("")},
sfl:function(a){this.b=H.d(a,"$ia",[F.Y],"$aa")}}
F.eV.prototype={
gl:function(a){return this.b.length},
cz:function(a){var u,t,s,r,q,p,o,n
for(u=this.a,t=u.a.c.length-1;t>=0;--t){s=u.a.c
if(t>=s.length)return H.e(s,t)
r=s[t]
for(s=r.c,q=s.b.length+s.c.length-1;q>=0;--q){p=r.c.j(0,q)
for(o=q-1;o>=0;--o){n=r.c.j(0,o)
if(a.aW(0,p,n)){p.aU()
break}}}}},
cw:function(){var u,t,s
for(u=this.b.length-1;u>=0;--u){t=this.b
if(u>=t.length)return H.e(t,u)
s=t[u]
t=J.L(s.a,s.b)
if(t)s.aU()}},
i:function(a){return this.O()},
E:function(a){var u,t,s,r
u=H.b([],[P.v])
t=this.b.length
for(s=0;s<t;++s){r=this.b
if(s>=r.length)return H.e(r,s)
C.a.h(u,r[s].E(a+(""+s+". ")))}return C.a.D(u,"\n")},
O:function(){return this.E("")},
sfv:function(a){this.b=H.d(a,"$ia",[F.b7],"$aa")}}
F.eW.prototype={
gl:function(a){return 0},
jw:function(){var u,t
for(u=-1;!1;--u){t=this.b
return H.e(t,u)
t=t[u].gjY()
t=t.gjV(t)
if(t.gl(t).jR(0,1)){t=this.b
return H.e(t,u)
t[u].aU()}}},
i:function(a){return this.O()},
E:function(a){var u,t,s
u=H.b([],[P.v])
for(t=this.b,s=0;!1;++s){if(s>=0)return H.e(t,s)
C.a.h(u,t[s].E(a))}return C.a.D(u,"\n")},
O:function(){return this.E("")},
sbV:function(a){this.b=H.d(a,"$ia",[F.bn],"$aa")}}
F.ad.prototype={
dD:function(a){var u,t,s,r,q,p,o
u=this.f
t=this.r
s=this.x
r=this.y
q=this.z
p=this.Q
o=this.ch
return F.fs(this.cx,s,p,u,t,r,q,a,o)},
jc:function(a){var u,t
if(a.v(0,$.av())){u=this.f
t=[P.t]
if(u==null)return H.b([0,0,0],t)
else return H.b([u.a,u.b,u.c],t)}else if(a.v(0,$.aX())){u=this.r
t=[P.t]
if(u==null)return H.b([0,1,0],t)
else return H.b([u.a,u.b,u.c],t)}else if(a.v(0,$.aW())){u=this.x
t=[P.t]
if(u==null)return H.b([0,0,1],t)
else return H.b([u.a,u.b,u.c],t)}else if(a.v(0,$.aY())){u=this.y
t=[P.t]
if(u==null)return H.b([0,0],t)
else return H.b([u.a,u.b],t)}else if(a.v(0,$.aZ())){u=this.z
t=[P.t]
if(u==null)return H.b([0,0,0],t)
else return H.b([u.a,u.b,u.c],t)}else if(a.v(0,$.ck())){u=this.Q
t=[P.t]
if(u==null)return H.b([1,1,1],t)
else return H.b([u.a,u.b,u.c],t)}else if(a.v(0,$.cl())){u=this.Q
t=[P.t]
if(u==null)return H.b([1,1,1,1],t)
else return H.b([u.a,u.b,u.c,u.d],t)}else if(a.v(0,$.bE()))return H.b([this.ch],[P.t])
else if(a.v(0,$.aV())){u=this.cx
t=[P.t]
if(u==null)return H.b([-1,-1,-1,-1],t)
else return H.b([u.a,u.b,u.c,u.d],t)}else return H.b([],[P.t])},
c8:function(){var u,t
u={}
if(this.r!=null)return!0
t=this.a
if(t!=null){t=t.e
if(t!=null)++t.d}u.a=V.c9()
this.d.aa(0,new F.fD(u))
u=u.a
this.r=u.u(0,Math.sqrt(u.A(u)))
u=this.a
if(u!=null){u.a4()
u=this.a.e
if(u!=null)u.ax()}return!0},
c6:function(){var u,t
u={}
if(this.x!=null)return!0
t=this.a
if(t!=null){t=t.e
if(t!=null)++t.d}u.a=V.c9()
this.d.aa(0,new F.fC(u))
u=u.a
this.x=u.u(0,Math.sqrt(u.A(u)))
u=this.a
if(u!=null){u.a4()
u=this.a.e
if(u!=null)u.ax()}return!0},
v:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.O()},
E:function(a){var u,t,s
u=H.b([],[P.v])
C.a.h(u,C.j.aw(J.aM(this.e),0))
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
s=C.a.D(u,", ")
return a+"{"+s+"}"},
O:function(){return this.E("")}}
F.fD.prototype={
$1:function(a){var u,t
H.i(a,"$iY")
u=a==null?null:a.d
if(u!=null){t=this.a
t.a=t.a.n(0,u)}},
$S:6}
F.fC.prototype={
$1:function(a){var u,t
H.i(a,"$iY")
u=a==null?null:a.e
if(u!=null){t=this.a
t.a=t.a.n(0,u)}},
$S:6}
F.ft.prototype={
B:function(){var u,t,s,r
if(this.b){u=this.c
t=u.length
for(s=0,r=0;r<t;++r){if(r>=u.length)return H.e(u,r)
u[r].e=s;++s}this.b=!1}},
h:function(a,b){var u,t
u=b.a
if(u!=null){if(u===this.a)return!1
throw H.h(P.p("May not add a vertex already attached to another shape to this shape."))}u=this.c
b.e=u.length
t=this.a
b.a=t
C.a.h(u,b)
t.a4()
return!0},
iH:function(a,b,c,d,e,f,g,h,i){var u=F.fs(a,b,c,d,e,f,g,h,i)
this.h(0,u)
return u},
bb:function(a,b,c,d,e,f){return this.iH(a,null,b,c,null,d,e,f,0)},
gl:function(a){return this.c.length},
as:function(){var u,t,s
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.y)(u),++s)u[s].c8()
return!0},
c7:function(){var u,t,s
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.y)(u),++s)u[s].c6()
return!0},
iM:function(){var u,t,s,r,q,p,o,n
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.y)(u),++s){r=u[s]
if(r.z==null){q=r.r
p=q.a
o=q.b
n=q.c
n=q.u(0,Math.sqrt(p*p+o*o+n*n))
if(!J.L(r.z,n)){r.z=n
q=r.a
if(q!=null){q=q.e
if(q!=null)q.C(null)}}}}return!0},
i:function(a){return this.O()},
E:function(a){var u,t,s,r
this.B()
u=H.b([],[P.v])
for(t=this.c,s=t.length,r=0;r<t.length;t.length===s||(0,H.y)(t),++r)C.a.h(u,t[r].E(a))
return C.a.D(u,"\n")},
O:function(){return this.E("")},
sih:function(a){this.c=H.d(a,"$ia",[F.ad],"$aa")}}
F.fu.prototype={
gl:function(a){return this.b.length+this.c.length+this.d.length},
j:function(a,b){var u,t,s
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
aa:function(a,b){H.l(b,{func:1,ret:-1,args:[F.Y]})
C.a.aa(this.b,b)
C.a.aa(this.c,new F.fv(this,b))
C.a.aa(this.d,new F.fw(this,b))},
i:function(a){return this.O()},
E:function(a){var u,t,s,r
u=H.b([],[P.v])
for(t=this.b,s=t.length,r=0;r<t.length;t.length===s||(0,H.y)(t),++r)C.a.h(u,t[r].E(a))
for(t=this.c,s=t.length,r=0;r<t.length;t.length===s||(0,H.y)(t),++r)C.a.h(u,t[r].E(a))
for(t=this.d,s=t.length,r=0;r<t.length;t.length===s||(0,H.y)(t),++r)C.a.h(u,t[r].E(a))
return C.a.D(u,"\n")},
O:function(){return this.E("")},
sfm:function(a){this.b=H.d(a,"$ia",[F.Y],"$aa")},
sfn:function(a){this.c=H.d(a,"$ia",[F.Y],"$aa")},
sfo:function(a){this.d=H.d(a,"$ia",[F.Y],"$aa")}}
F.fv.prototype={
$1:function(a){H.i(a,"$iY")
if(!J.L(a.a,this.a))this.b.$1(a)},
$S:6}
F.fw.prototype={
$1:function(a){var u
H.i(a,"$iY")
u=this.a
if(!J.L(a.a,u)&&!J.L(a.b,u))this.b.$1(a)},
$S:6}
F.fx.prototype={
gl:function(a){return this.b.length+this.c.length},
j:function(a,b){var u,t,s
u=this.b
t=u.length
if(b>=t){u=this.c
s=b-t
if(s<0||s>=u.length)return H.e(u,s)
return u[s]}else{if(b<0)return H.e(u,b)
return u[b]}},
i:function(a){return this.O()},
E:function(a){var u,t,s,r
u=H.b([],[P.v])
for(t=this.b,s=t.length,r=0;r<t.length;t.length===s||(0,H.y)(t),++r)C.a.h(u,t[r].E(a))
for(t=this.c,s=t.length,r=0;r<t.length;t.length===s||(0,H.y)(t),++r)C.a.h(u,t[r].E(a))
return C.a.D(u,"\n")},
O:function(){return this.E("")},
sfw:function(a){this.b=H.d(a,"$ia",[F.b7],"$aa")},
sfz:function(a){this.c=H.d(a,"$ia",[F.b7],"$aa")}}
F.fz.prototype={}
F.fy.prototype={
aW:function(a,b,c){return J.L(b.f,c.f)}}
F.fA.prototype={}
F.eG.prototype={
je:function(a){var u,t,s,r,q,p,o,n,m
H.d(a,"$ia",[F.ad],"$aa")
u=V.c9()
for(t=a.length,s=0;s<t;++s){r=a[s].r
if(r!=null)u=new V.F(u.a+r.a,u.b+r.b,u.c+r.c)}u=u.u(0,Math.sqrt(u.A(u)))
for(t=a.length,r=u==null,s=0;s<a.length;a.length===t||(0,H.y)(a),++s){q=a[s]
if(r)p=null
else{o=u.a
n=u.b
m=u.c
p=u.u(0,Math.sqrt(o*o+n*n+m*m))}if(!J.L(q.r,p)){q.r=p
o=q.a
if(o!=null){o=o.e
if(o!=null)o.C(null)}}}return}}
F.fB.prototype={
gl:function(a){return 0},
i:function(a){return this.O()},
E:function(a){var u,t,s
u=H.b([],[P.v])
for(t=this.b,s=0;!1;++s){if(s>=0)return H.e(t,s)
C.a.h(u,t[s].E(a))}return C.a.D(u,"\n")},
O:function(){return this.E("")},
sbV:function(a){this.b=H.d(a,"$ia",[F.bn],"$aa")}}
O.cN.prototype={
gm:function(){var u=this.dy
if(u==null){u=D.B()
this.dy=u}return u},
N:function(a){var u
H.i(a,"$iq")
u=this.dy
if(u!=null)u.C(a)},
an:function(){return this.N(null)},
dc:function(a){H.i(a,"$iq")
this.a=null
this.N(a)},
hM:function(){return this.dc(null)},
fM:function(a,b){var u=V.a4
u=new D.b3(a,H.d(b,"$if",[u],"$af"),this,[u])
u.b=!0
this.N(u)},
fO:function(a,b){var u=V.a4
u=new D.b4(a,H.d(b,"$if",[u],"$af"),this,[u])
u.b=!0
this.N(u)},
cZ:function(){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7
u=this.dx
t=C.e.X(u.e.length+3,4)*4
s=C.e.X(u.f.length+3,4)*4
r=C.e.X(u.r.length+3,4)*4
q=C.e.X(u.x.length+3,4)*4
p=C.e.X(u.y.length+3,4)*4
o=C.e.X(u.z.length+3,4)*4
n=C.e.X(this.e.a.length+3,4)*4
u=this.f.c
m=this.r.c
l=this.x.c
k=this.y.c
j=this.z.c
i=this.Q.c
h=this.cx.c
g=this.cy.c
f=this.db.c
e="MaterialLight_"+C.e.i(u.a)+C.e.i(m.a)+C.e.i(l.a)+C.e.i(k.a)+C.e.i(j.a)+C.e.i(i.a)+C.e.i(h.a)+C.e.i(g.a)+C.e.i(f.a)
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
a2=u===C.f||m===C.f||l===C.f||k===C.f||j===C.f||i===C.f||h===C.f||g===C.f||f===C.f
a3=u===C.h||m===C.h||l===C.h||k===C.h||j===C.h||i===C.h||h===C.h||g===C.h||f===C.h
a4=s+p+q+r+o>0
a5=n>0
a6=a0||!b||a
a7=$.av()
if(a0){b=$.aX()
a7=new Z.aI(a7.a|b.a)}if(a1){b=$.aW()
a7=new Z.aI(a7.a|b.a)}if(a2){b=$.aY()
a7=new Z.aI(a7.a|b.a)}if(a3){b=$.aZ()
a7=new Z.aI(a7.a|b.a)}if(a5){b=$.aV()
a7=new Z.aI(a7.a|b.a)}return new A.ex(u,m,l,k,j,i,h,g,f,t,s,r,q,p,o,t+s+r+q+p+o,d,d,a4,a6,!0,!1,!1,c,a4,a,a0,a1,a2,a3,a5,!1,!1,!1,n,e.charCodeAt(0)==0?e:e,a7)},
S:function(a,b){H.d(a,"$ia",[T.bt],"$aa")},
af:function(a){var u,t,s,r,q
for(u=this.dx.a,u=new J.ae(u,u.length,0,[H.r(u,0)]);u.w();){t=u.d
t.toString
s=$.fr
if(s==null){s=new V.F(0,0,1)
$.fr=s}t.a=s
r=t.b
if(r!=null){q=r.a
if(q!=null)t.a=q.cB(s)}}},
eg:function(a2,a3){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1
u=this.a
if(u==null){u=this.cZ()
t=H.i(a2.fr.j(0,u.ad),"$icO")
if(t==null){t=A.jx(u,a2.a)
a2.dk(t)}this.a=t
a3.e=null
u=t}s=u.z
r=s.bc
u=a3.e
if(!(u instanceof Z.bH)){a3.e=null
u=null}if(u==null||!u.d.v(0,r)){u=s.r1
if(u)a3.d.as()
q=s.r2
if(q){p=a3.d
o=p.e
if(o!=null)++o.d
p.d.c7()
p.a.c7()
p=p.e
if(p!=null)p.ax()}p=s.ry
if(p){o=a3.d
n=o.e
if(n!=null)++n.d
o.a.iM()
o=o.e
if(o!=null)o.ax()}m=a3.d.ds(new Z.dr(a2.a),r)
m.au($.av()).e=this.a.Q.c
if(u)m.au($.aX()).e=this.a.cx.c
if(q)m.au($.aW()).e=this.a.ch.c
if(s.rx)m.au($.aY()).e=this.a.cy.c
if(p)m.au($.aZ()).e=this.a.db.c
if(s.x1)m.au($.aV()).e=this.a.dx.c
a3.e=m}u=T.bt
l=H.b([],[u])
this.a.a1(a2)
if(s.fx){q=this.a
p=a2.dx.gW()
q=q.dy
q.toString
q.ag(p.a6(0,!0))}if(s.fy){q=this.a
p=a2.cx
if(p==null){p=a2.db.gW().q(0,a2.dx.gW())
a2.cx=p}q=q.fr
q.toString
q.ag(p.a6(0,!0))}q=this.a
p=a2.ch
if(p==null){p=a2.gju().q(0,a2.dx.gW())
a2.ch=p}q=q.fy
q.toString
q.ag(p.a6(0,!0))
if(s.x2){q=this.a
p=this.b
q=q.k1
q.toString
q.ag(C.o.a6(p,!0))}if(s.y1){q=this.a
p=this.c
q=q.k2
q.toString
q.ag(C.o.a6(p,!0))}if(s.y2){q=this.a
p=this.d
q=q.k3
q.toString
q.ag(C.o.a6(p,!0))}if(s.ak>0){k=this.e.a.length
q=this.a.k4
C.b.I(q.a,q.d,k)
for(q=[P.t],j=0;j<k;++j){p=this.a
o=this.e.a
if(j>=o.length)return H.e(o,j)
o=o[j]
p.toString
H.i(o,"$ia4")
p=p.r1
if(j>=p.length)return H.e(p,j)
p=p[j]
i=new Float32Array(H.bv(H.d(o.a6(0,!0),"$ia",q,"$aa")))
C.b.cC(p.a,p.d,!1,i)}}switch(s.a){case C.c:break
case C.i:q=this.a
p=this.f.f
q=q.r2
q.toString
o=p.a
n=p.b
p=p.c
C.b.t(q.a,q.d,o,n,p)
break
case C.f:this.S(l,this.f.d)
q=this.a
p=this.f.d
q.ac(q.rx,q.x1,p)
p=this.a
q=this.f.f
p=p.r2
p.toString
o=q.a
n=q.b
q=q.c
C.b.t(p.a,p.d,o,n,q)
break
case C.h:this.S(l,this.f.e)
q=this.a
p=this.f.e
q.a8(q.ry,q.x1,p)
p=this.a
q=this.f.f
p=p.r2
p.toString
o=q.a
n=q.b
q=q.c
C.b.t(p.a,p.d,o,n,q)
break}if(s.k2){switch(s.b){case C.c:break
case C.i:q=this.a
p=this.r.f
q=q.x2
q.toString
o=p.a
n=p.b
p=p.c
C.b.t(q.a,q.d,o,n,p)
break
case C.f:this.S(l,this.r.d)
q=this.a
p=this.r.d
q.ac(q.y1,q.ak,p)
p=this.a
q=this.r.f
p=p.x2
p.toString
o=q.a
n=q.b
q=q.c
C.b.t(p.a,p.d,o,n,q)
break
case C.h:this.S(l,this.r.e)
q=this.a
p=this.r.e
q.a8(q.y2,q.ak,p)
p=this.a
q=this.r.f
p=p.x2
p.toString
o=q.a
n=q.b
q=q.c
C.b.t(p.a,p.d,o,n,q)
break}switch(s.c){case C.c:break
case C.i:q=this.a
p=this.x.f
q=q.ad
q.toString
o=p.a
n=p.b
p=p.c
C.b.t(q.a,q.d,o,n,p)
break
case C.f:this.S(l,this.x.d)
q=this.a
p=this.x.d
q.ac(q.bc,q.bd,p)
p=this.a
q=this.x.f
p=p.ad
p.toString
o=q.a
n=q.b
q=q.c
C.b.t(p.a,p.d,o,n,q)
break
case C.h:this.S(l,this.x.e)
q=this.a
p=this.x.e
q.a8(q.dM,q.bd,p)
p=this.a
q=this.x.f
p=p.ad
p.toString
o=q.a
n=q.b
q=q.c
C.b.t(p.a,p.d,o,n,q)
break}switch(s.d){case C.c:break
case C.i:q=this.a
p=this.y.f
q=q.be
q.toString
o=p.a
n=p.b
p=p.c
C.b.t(q.a,q.d,o,n,p)
break
case C.f:this.S(l,this.y.d)
q=this.a
p=this.y.d
q.ac(q.dN,q.bf,p)
p=this.a
q=this.y.f
p=p.be
p.toString
o=q.a
n=q.b
q=q.c
C.b.t(p.a,p.d,o,n,q)
break
case C.h:this.S(l,this.y.e)
q=this.a
p=this.y.e
q.a8(q.dO,q.bf,p)
p=this.a
q=this.y.f
p=p.be
p.toString
o=q.a
n=q.b
q=q.c
C.b.t(p.a,p.d,o,n,q)
break}switch(s.e){case C.c:break
case C.i:q=this.a
p=this.z.f
q=q.bg
q.toString
o=p.a
n=p.b
p=p.c
C.b.t(q.a,q.d,o,n,p)
p=this.a
n=this.z.ch
p=p.bi
C.b.H(p.a,p.d,n)
break
case C.f:this.S(l,this.z.d)
q=this.a
p=this.z.d
q.ac(q.dP,q.bh,p)
p=this.a
q=this.z.f
p=p.bg
p.toString
o=q.a
n=q.b
q=q.c
C.b.t(p.a,p.d,o,n,q)
q=this.a
n=this.z.ch
q=q.bi
C.b.H(q.a,q.d,n)
break
case C.h:this.S(l,this.z.e)
q=this.a
p=this.z.e
q.a8(q.dQ,q.bh,p)
p=this.a
q=this.z.f
p=p.bg
p.toString
o=q.a
n=q.b
q=q.c
C.b.t(p.a,p.d,o,n,q)
q=this.a
n=this.z.ch
q=q.bi
C.b.H(q.a,q.d,n)
break}if(s.z>0){k=this.dx.e.length
q=this.a.e0
C.b.I(q.a,q.d,k)
h=a2.db.gW()
for(q=this.dx.e,p=q.length,g=0,f=0;f<q.length;q.length===p||(0,H.y)(q),++f){e=q[f]
o=this.a.cc
if(g>=o.length)return H.e(o,g)
d=o[g]
o=h.cB(e.a)
n=o.a
c=o.b
b=o.c
b=o.u(0,Math.sqrt(n*n+c*c+b*b))
c=d.b
n=b.a
o=b.b
b=b.c
C.b.t(c.a,c.d,n,o,b)
b=e.c
o=d.c
C.b.t(o.a,o.d,b.a,b.b,b.c);++g}}if(s.Q>0){k=this.dx.f.length
q=this.a.e1
C.b.I(q.a,q.d,k)
h=a2.db.gW()
for(q=this.dx.f,p=q.length,g=0,f=0;f<q.length;q.length===p||(0,H.y)(q),++f){e=q[f]
o=this.a.cd
if(g>=o.length)return H.e(o,g)
d=o[g]
o=e.gb_(e)
n=d.b
C.b.t(n.a,n.d,o.a,o.b,o.c)
o=h.b3(e.gb_(e))
n=d.c
C.b.t(n.a,n.d,o.a,o.b,o.c)
o=e.gaj(e)
n=d.d
C.b.t(n.a,n.d,o.a,o.b,o.c)
o=e.gc1()
n=d.e
C.b.H(n.a,n.d,o)
o=e.gc2()
n=d.f
C.b.H(n.a,n.d,o)
o=e.gc3()
n=d.r
C.b.H(n.a,n.d,o);++g}}if(s.ch>0){k=this.dx.r.length
q=this.a.e2
C.b.I(q.a,q.d,k)
h=a2.db.gW()
for(q=this.dx.r,p=q.length,g=0,f=0;f<q.length;q.length===p||(0,H.y)(q),++f){e=q[f]
o=this.a.ce
if(g>=o.length)return H.e(o,g)
d=o[g]
o=e.gb_(e)
n=d.b
C.b.t(n.a,n.d,o.a,o.b,o.c)
o=e.gcb(e).jU()
n=d.c
C.b.t(n.a,n.d,o.a,o.b,o.c)
o=h.b3(e.gb_(e))
n=d.d
C.b.t(n.a,n.d,o.a,o.b,o.c)
o=e.gaj(e)
n=d.e
C.b.t(n.a,n.d,o.a,o.b,o.c)
o=e.gjT()
n=d.f
C.b.H(n.a,n.d,o)
o=e.gjS()
n=d.r
C.b.H(n.a,n.d,o)
o=e.gc1()
n=d.x
C.b.H(n.a,n.d,o)
o=e.gc2()
n=d.y
C.b.H(n.a,n.d,o)
o=e.gc3()
n=d.z
C.b.H(n.a,n.d,o);++g}}if(s.cx>0){k=this.dx.x.length
q=this.a.e3
C.b.I(q.a,q.d,k)
h=a2.db.gW()
for(q=this.dx.x,p=q.length,o=[u],g=0,f=0;f<q.length;q.length===p||(0,H.y)(q),++f){e=q[f]
n=this.a.cf
if(g>=n.length)return H.e(n,g)
d=n[g]
n=e.gae()
H.d(l,"$ia",o,"$aa")
if(!C.a.aH(l,n)){n.sck(0,l.length)
C.a.h(l,n)}n=e.gcb(e)
c=d.d
C.b.t(c.a,c.d,n.a,n.b,n.c)
n=e.gbx()
c=d.b
C.b.t(c.a,c.d,n.a,n.b,n.c)
n=e.gbt(e)
c=d.c
C.b.t(c.a,c.d,n.a,n.b,n.c)
n=h.cB(e.gcb(e))
c=n.a
b=n.b
a=n.c
a=n.u(0,Math.sqrt(c*c+b*b+a*a))
b=d.e
c=a.a
n=a.b
a=a.c
C.b.t(b.a,b.d,c,n,a)
a=e.gaj(e)
n=d.f
C.b.t(n.a,n.d,a.a,a.b,a.c)
a=e.gae()
n=a.gco(a)
if(!n){n=d.x
C.b.I(n.a,n.d,1)}else{n=d.r
c=a.d
b=n.a
n=n.d
if(!c)C.b.I(b,n,0)
else C.b.I(b,n,a.a)
n=d.x
C.b.I(n.a,n.d,0)}++g}}if(s.cy>0){k=this.dx.y.length
q=this.a.e4
C.b.I(q.a,q.d,k)
h=a2.db.gW()
for(q=this.dx.y,p=q.length,o=[P.t],n=[u],g=0,f=0;f<q.length;q.length===p||(0,H.y)(q),++f){e=q[f]
c=this.a.cg
if(g>=c.length)return H.e(c,g)
d=c[g]
c=e.gae()
H.d(l,"$ia",n,"$aa")
if(!C.a.aH(l,c)){c.sck(0,l.length)
C.a.h(l,c)}a0=h.q(0,e.gW())
c=e.gW()
b=$.bU
if(b==null){b=new V.Q(0,0,0)
$.bU=b}b=c.b3(b)
c=d.b
C.b.t(c.a,c.d,b.a,b.b,b.c)
c=$.bU
if(c==null){c=new V.Q(0,0,0)
$.bU=c}c=a0.b3(c)
b=d.c
C.b.t(b.a,b.d,c.a,c.b,c.c)
c=a0.e9()
b=d.d
i=new Float32Array(H.bv(H.d(new V.cQ(c.a,c.b,c.c,c.e,c.f,c.r,c.y,c.z,c.Q).a6(0,!0),"$ia",o,"$aa")))
C.b.el(b.a,b.d,!1,i)
b=e.gaj(e)
c=d.e
C.b.t(c.a,c.d,b.a,b.b,b.c)
b=e.gae()
c=b.gco(b)
if(!c){c=d.r
C.b.I(c.a,c.d,1)}else{c=d.f
a=b.gco(b)
a1=c.a
c=c.d
if(!a)C.b.I(a1,c,0)
else C.b.I(a1,c,b.gck(b))
c=d.r
C.b.I(c.a,c.d,0)}c=e.gc1()
b=d.x
C.b.H(b.a,b.d,c)
c=e.gc2()
b=d.y
C.b.H(b.a,b.d,c)
c=e.gc3()
b=d.z
C.b.H(b.a,b.d,c);++g}}if(s.db>0){k=this.dx.z.length
q=this.a.e5
C.b.I(q.a,q.d,k)
h=a2.db.gW()
for(q=this.dx.z,p=q.length,u=[u],g=0,f=0;f<q.length;q.length===p||(0,H.y)(q),++f){e=q[f]
o=this.a.ci
if(g>=o.length)return H.e(o,g)
d=o[g]
o=e.gae()
H.d(l,"$ia",u,"$aa")
if(!C.a.aH(l,o)){o.sck(0,l.length)
C.a.h(l,o)}o=e.gb_(e)
n=d.b
C.b.t(n.a,n.d,o.a,o.b,o.c)
o=e.gcb(e)
n=d.c
C.b.t(n.a,n.d,o.a,o.b,o.c)
o=e.gbx()
n=d.d
C.b.t(n.a,n.d,o.a,o.b,o.c)
o=e.gbt(e)
n=d.e
C.b.t(n.a,n.d,o.a,o.b,o.c)
o=h.b3(e.gb_(e))
n=d.f
C.b.t(n.a,n.d,o.a,o.b,o.c)
o=e.gae()
n=o.gco(o)
if(!n){o=d.x
C.b.I(o.a,o.d,1)}else{n=d.r
c=o.d
b=n.a
n=n.d
if(!c)C.b.I(b,n,0)
else C.b.I(b,n,o.a)
o=d.x
C.b.I(o.a,o.d,0)}o=e.gaj(e)
n=d.y
C.b.t(n.a,n.d,o.a,o.b,o.c)
o=e.gjW()
n=d.z
C.b.H(n.a,n.d,o)
o=e.gjX()
n=d.Q
C.b.H(n.a,n.d,o)
o=e.gc1()
n=d.ch
C.b.H(n.a,n.d,o)
o=e.gc2()
n=d.cx
C.b.H(n.a,n.d,o)
o=e.gc3()
n=d.cy
C.b.H(n.a,n.d,o);++g}}}switch(s.f){case C.c:break
case C.i:break
case C.f:this.S(l,this.Q.d)
u=this.a
q=this.Q.d
u.ac(u.dR,u.bj,q)
break
case C.h:this.S(l,this.Q.e)
u=this.a
q=this.Q.e
u.a8(u.dS,u.bj,q)
break}if(s.fr){u=this.a
q=a2.Q
if(q==null){q=a2.db.gW().e9()
a2.Q=q}u=u.id
u.toString
u.ag(q.a6(0,!0))}if(s.dy){this.S(l,this.ch)
u=this.a
q=this.ch
u.a8(u.dT,u.dU,q)
switch(s.r){case C.c:break
case C.i:u=this.a
q=this.cx.f
u=u.bk
u.toString
p=q.a
o=q.b
q=q.c
C.b.t(u.a,u.d,p,o,q)
break
case C.f:this.S(l,this.cx.d)
u=this.a
q=this.cx.d
u.ac(u.dV,u.bl,q)
q=this.a
u=this.cx.f
q=q.bk
q.toString
p=u.a
o=u.b
u=u.c
C.b.t(q.a,q.d,p,o,u)
break
case C.h:this.S(l,this.cx.e)
u=this.a
q=this.cx.e
u.a8(u.dW,u.bl,q)
q=this.a
u=this.cx.f
q=q.bk
q.toString
p=u.a
o=u.b
u=u.c
C.b.t(q.a,q.d,p,o,u)
break}switch(s.x){case C.c:break
case C.i:u=this.a
q=this.cy.f
u=u.bn
u.toString
p=q.a
o=q.b
q=q.c
C.b.t(u.a,u.d,p,o,q)
q=this.a
o=this.cy.ch
q=q.bm
C.b.H(q.a,q.d,o)
break
case C.f:this.S(l,this.cy.d)
u=this.a
q=this.cy.d
u.ac(u.dX,u.bo,q)
q=this.a
u=this.cy.f
q=q.bn
q.toString
p=u.a
o=u.b
u=u.c
C.b.t(q.a,q.d,p,o,u)
u=this.a
o=this.cy.ch
u=u.bm
C.b.H(u.a,u.d,o)
break
case C.h:this.S(l,this.cy.e)
u=this.a
q=this.cy.e
u.a8(u.dY,u.bo,q)
q=this.a
u=this.cy.f
q=q.bn
q.toString
p=u.a
o=u.b
u=u.c
C.b.t(q.a,q.d,p,o,u)
u=this.a
o=this.cy.ch
u=u.bm
C.b.H(u.a,u.d,o)
break}}u=s.y
q=u!==C.c
if(q){switch(u){case C.c:break
case C.i:u=this.a
p=this.db.f
u=u.bp
C.b.H(u.a,u.d,p)
break
case C.f:this.S(l,this.db.d)
u=this.a
p=this.db.d
u.ac(u.dZ,u.bq,p)
p=this.a
u=this.db.f
p=p.bp
C.b.H(p.a,p.d,u)
break
case C.h:this.S(l,this.db.e)
u=this.a
p=this.db.e
u.a8(u.e_,u.bq,p)
p=this.a
u=this.db.f
p=p.bp
C.b.H(p.a,p.d,u)
break}u=a2.a
C.b.aV(u,3042)
C.b.iL(u,770,771)}for(j=0;j<l.length;++j)l[j].a1(a2)
u=a3.e
u.a1(a2)
u.a5(a2)
u.aK(a2)
if(q)C.b.iX(a2.a,3042)
for(j=0;j<l.length;++j)l[j].aK(a2)
u=this.a
u.toString
C.b.cD(a2.a,null)
u.x.dG()},
i:function(a){var u=this.a
if(u!=null)return u.b
else return this.cZ().ad},
sf4:function(a){this.e=H.d(a,"$iK",[V.a4],"$aK")}}
O.ev.prototype={}
O.cP.prototype={
aD:function(){}}
O.ew.prototype={}
O.aB.prototype={
de:function(a){var u,t
if(!J.L(this.f,a)){u=this.f
this.f=a
t=new D.x(this.b+".color",u,a,this,[V.P])
t.b=!0
this.a.N(t)}},
aD:function(){this.eF()
this.de(new V.P(1,1,1))},
saj:function(a,b){var u
if(this.c===C.c){this.c=C.i
this.aD()
u=this.a
u.a=null
u.N(null)}this.de(b)}}
O.ey.prototype={
hO:function(a){var u=this.ch
if(!(Math.abs(u-a)<$.G().a)){this.ch=a
u=new D.x(this.b+".refraction",u,a,this,[P.t])
u.b=!0
this.a.N(u)}},
aD:function(){this.bC()
this.hO(1)}}
O.ez.prototype={
bY:function(a){var u=this.ch
if(!(Math.abs(u-a)<$.G().a)){this.ch=a
u=new D.x(this.b+".shininess",u,a,this,[P.t])
u.b=!0
this.a.N(u)}},
aD:function(){this.bC()
this.bY(100)}}
O.ba.prototype={}
O.d8.prototype={
gm:function(){var u=this.e
if(u==null){u=D.B()
this.e=u}return u},
N:function(a){var u
H.i(a,"$iq")
u=this.e
if(u!=null)u.C(a)},
an:function(){return this.N(null)},
h1:function(a,b){var u,t,s,r,q,p,o
H.d(b,"$if",[O.am],"$af")
for(u=b.length,t=this.gam(),s={func:1,ret:-1,args:[D.q]},r=[s],q=0;q<b.length;b.length===u||(0,H.y)(b),++q){p=b[q]
if(p!=null){o=p.f
if(o==null){o=new D.b2()
o.sa_(null)
o.saQ(null)
o.c=null
o.d=0
p.f=o}H.l(t,s)
if(o.a==null)o.sa_(H.b([],r))
o=o.a;(o&&C.a).h(o,t)}}this.an()},
h3:function(a,b){var u,t
H.d(b,"$if",[O.am],"$af")
for(u=b.gP(b),t=this.gam();u.w();)u.gG().gm().L(0,t)
this.an()},
eg:function(a,b){var u,t,s,r,q,p,o,n,m,l,k,j,i,h
u=C.e.X(this.c.a.length+3,4)*4
if(u!==this.d){this.d=u
this.b=null}t=this.b
if(t==null){t="TextureLayout_"+u
s=H.i(a.fr.j(0,t),"$id9")
if(s==null){s=A.jO(u,a.a)
a.dk(s)}this.b=s
t=s}if(b.e==null){t=b.d.ds(new Z.dr(a.a),$.av())
r=t.au($.av())
q=this.b
r.e=q.z.c
b.e=t
t=q}t.a1(a)
t=T.bt
p=H.b([],[t])
for(r=[P.t],t=[t],o=0,n=0;q=this.c.a,n<q.length;++n){m=q[n]
if(m!=null&&m.a!=null){q=m.a
H.d(p,"$ia",t,"$aa")
if(q!=null)if(!C.a.aH(p,q)){q.a=p.length
C.a.h(p,q)}q=this.b
l=m.a
q=q.cx
if(o>=q.length)return H.e(q,o)
q=q[o]
k=l==null||!l.d
j=q.a
q=q.d
if(k)C.b.I(j,q,0)
else C.b.I(j,q,l.a)
q=this.b
l=m.b
q=q.cy
if(o>=q.length)return H.e(q,o)
q=q[o]
if(l==null){l=$.eA
if(l==null){l=new V.a4(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1)
$.eA=l}}i=new Float32Array(H.bv(H.d(l.a6(0,!0),"$ia",r,"$aa")))
C.b.cC(q.a,q.d,!1,i)
q=this.b
h=m.c
q.toString
if(h==null){l=$.bW
if(l==null){l=V.d_(0,0,1,1)
$.bW=l
h=l}else h=l}l=q.db
if(o>=l.length)return H.e(l,o)
l=l[o]
C.b.bw(l.a,l.d,h.a,h.b)
q=q.dx
if(o>=q.length)return H.e(q,o)
q=q[o]
C.b.bw(q.a,q.d,h.c,h.d)
q=this.b
h=m.d
q.toString
if(h==null){l=$.bW
if(l==null){l=V.d_(0,0,1,1)
$.bW=l
h=l}else h=l}l=q.dy
if(o>=l.length)return H.e(l,o)
l=l[o]
C.b.bw(l.a,l.d,h.a,h.b)
q=q.fr
if(o>=q.length)return H.e(q,o)
q=q[o]
C.b.bw(q.a,q.d,h.c,h.d)
q=this.b
l=m.e
q=q.fx
if(o>=q.length)return H.e(q,o)
q=q[o]
l=l?1:0
C.b.I(q.a,q.d,l);++o}}t=this.b.Q
C.b.I(t.a,t.d,o)
t=this.b
r=this.a
t=t.ch
t.toString
q=r.a
l=r.b
k=r.c
r=r.d
C.b.jK(t.a,t.d,q,l,k,r)
for(t=a.a,n=0;n<p.length;++n){r=p[n]
if(!r.c&&r.d){r.c=!0
C.b.di(t,33984+r.a)
C.b.aF(t,3553,r.b)}}r=b.e
if(r instanceof Z.bH){r.a1(a)
r.a5(a)
r.aK(a)}else b.e=null
r=this.b
r.toString
C.b.cD(t,null)
r.x.dG()
for(n=0;n<p.length;++n){r=p[n]
if(r.c){r.c=!1
C.b.di(t,33984+r.a)
C.b.aF(t,3553,null)}}},
sfj:function(a){this.c=H.d(a,"$iK",[O.am],"$aK")}}
O.am.prototype={
gm:function(){var u=this.f
if(u==null){u=D.B()
this.f=u}return u},
N:function(a){var u
H.i(a,"$iq")
u=this.f
if(u!=null)u.C(a)},
an:function(){return this.N(null)},
sae:function(a){var u,t
u=this.a
if(u!=a){if(u!=null)u.gm().L(0,this.gam())
t=this.a
this.a=a
if(a!=null)a.gm().h(0,this.gam())
u=new D.x("texture",t,this.a,this,[T.d7])
u.b=!0
this.N(u)}},
sdB:function(a){var u,t
a=V.b8()
if(!J.L(this.b,a)){u=this.b
this.b=a
t=new D.x("colorMatrix",u,a,this,[V.a4])
t.b=!0
this.N(t)}},
scI:function(a,b){var u,t
b=V.eM()
if(!J.L(this.c,b)){u=this.c
this.c=b
t=new D.x("source",u,b,this,[V.br])
t.b=!0
this.N(t)}},
sdF:function(a){var u,t
if(a==null)a=V.eM()
if(!J.L(this.d,a)){u=this.d
this.d=a
t=new D.x("destination",u,a,this,[V.br])
t.b=!0
this.N(t)}},
se6:function(a){var u
if(this.e!==!1){this.e=!1
u=new D.x("flip",!0,!1,this,[P.Z])
u.b=!0
this.N(u)}}}
T.bt.prototype={}
T.d7.prototype={}
T.f6.prototype={
gm:function(){var u=this.y
if(u==null){u=D.B()
this.y=u}return u}}
T.f7.prototype={}
V.dL.prototype={
aI:function(a){return!0},
i:function(a){return"all"},
$iaR:1}
V.aR.prototype={}
V.cM.prototype={
aI:function(a){var u,t,s
for(u=this.a,t=u.length,s=0;s<u.length;u.length===t||(0,H.y)(u),++s)if(u[s].aI(a))return!0
return!1},
i:function(a){var u,t,s,r,q
for(u=this.a,t=u.length,s="",r=0;r<u.length;u.length===t||(0,H.y)(u),++r){q=u[r]
if(s.length!==0)s+=", "
s+=q.i(0)}return s},
saq:function(a){this.a=H.d(a,"$ia",[V.aR],"$aa")},
$iaR:1}
V.aT.prototype={
aI:function(a){return!this.eE(a)},
i:function(a){return"!["+this.cL(0)+"]"}}
V.eT.prototype={
eJ:function(a){var u,t
if(a.a.length<=0)throw H.h(P.p("May not create a SetMatcher with zero characters."))
u=new H.aQ([P.u,P.Z])
for(t=new H.cK(a,a.gl(a),0,[H.ak(a,"N",0)]);t.w();)u.Z(0,t.d,!0)
this.shN(u)},
aI:function(a){return this.a.dC(a)},
i:function(a){var u=this.a
return P.hC(new H.em(u,[H.r(u,0)]),0,null)},
shN:function(a){this.a=H.d(a,"$iaA",[P.u,P.Z],"$aaA")},
$iaR:1}
V.bY.prototype={
D:function(a,b){var u,t,s,r
for(u=this.c,t=u.length,s=0;s<t;++s){r=u[s]
if(r.b.b===b)return r}r=new V.c1(this.a.J(0,b))
r.saq(H.b([],[V.aR]))
r.c=!1
C.a.h(this.c,r)
return r},
j1:function(a){var u,t,s,r
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.y)(u),++s){r=u[s]
if(r.aI(a))return r}return},
i:function(a){return this.b},
si9:function(a){this.c=H.d(a,"$ia",[V.c1],"$aa")}}
V.de.prototype={
i:function(a){var u,t
u=H.iV(this.b,"\n","\\n")
t=H.iV(u,"\t","\\t")
return this.a+":"+this.c+':"'+t+'"'}}
V.c0.prototype={
i:function(a){return this.b},
shJ:function(a){var u=P.v
this.c=H.d(a,"$iaA",[u,u],"$aaA")}}
V.f9.prototype={
J:function(a,b){var u=this.a.j(0,b)
if(u==null){u=new V.bY(this,b)
u.si9(H.b([],[V.c1]))
u.d=null
this.a.Z(0,b,u)}return u},
b2:function(a){var u,t
u=this.b.j(0,a)
if(u==null){u=new V.c0(this,a)
t=P.v
u.shJ(new H.aQ([t,t]))
this.b.Z(0,a,u)}return u},
jJ:function(a){var u,t,s,r,q,p,o,n,m,l,k,j
u=H.b([],[V.de])
t=this.c
s=[P.u]
r=H.b([],s)
for(q=a.length,p=null,o=0;!0;){if(o>=q){if(p!=null)C.a.h(u,p)
return u}n=C.j.b6(a,o)
m=t.j1(n)
if(m==null){if(p==null){C.a.h(r,n)
l=P.hC(r,0,null)
throw H.h(P.p("Untokenizable string [state: "+t.b+", index "+o+']: "'+l+'"'))}C.a.h(u,p)
o=p.c+1
r=H.b([],s)
t=this.c
p=null}else{if(!m.c)C.a.h(r,n)
t=m.b
if(t.d!=null){l=P.hC(r,0,null)
k=t.d
j=k.c.j(0,l)
p=new V.de(j==null?k.b:j,l,o)}++o}}},
si_:function(a){this.a=H.d(a,"$iaA",[P.v,V.bY],"$aaA")},
si2:function(a){this.b=H.d(a,"$iaA",[P.v,V.c0],"$aaA")}}
V.c1.prototype={
i:function(a){return this.b.b+": "+this.cL(0)}}
X.dP.prototype={
gm:function(){var u=this.fr
if(u==null){u=D.B()
this.fr=u}return u},
a7:function(a){var u=this.fr
if(u!=null)u.C(a)},
say:function(a,b){var u
if(b<1)b=1
u=this.a
if(u!==b){this.y=null
this.a=b
this.c=b
u=new D.x("width",u,b,this,[P.u])
u.b=!0
this.a7(u)}},
sav:function(a,b){var u
if(b<1)b=1
u=this.b
if(u!==b){this.y=null
this.b=b
this.d=b
u=new D.x("height",u,b,this,[P.u])
u.b=!0
this.a7(u)}},
a1:function(a){var u,t,s,r,q,p,o,n,m,l,k,j
if(this.f){u=a.a
t=u.drawingBufferWidth
s=this.r
if(typeof t!=="number")return t.q()
this.say(0,C.e.V(t*s))
u=u.drawingBufferHeight
s=this.x
if(typeof u!=="number")return u.q()
this.sav(0,C.e.V(u*s))}if(this.y==null){u=a.a
t=this.ch
s=this.a
r=this.b
q=H.a3(C.b.by(u,3379))
p=V.hP(s,2)
o=V.hP(r,2)
q=V.hP(q,2)
p=Math.min(p,q)
o=Math.min(o,q)
n=u.createTexture()
C.b.aF(u,3553,n)
C.b.bu(u,3553,10242,33071)
C.b.bu(u,3553,10243,33071)
C.b.bu(u,3553,10241,9729)
C.b.bu(u,3553,10240,9729)
C.b.jE(u,3553,0,6408,p,o,0,6408,5121,null)
C.b.aF(u,3553,null)
m=T.ij(0,n)
m.e=s
m.f=r
m.r=p
m.x=o
if(!m.d){m.d=!0
s=m.y
if(s!=null)s.dK()}t.b=m.b
t.c=m.c
t.d=m.d
t.e=m.e
t.f=m.f
t.r=m.r
t.x=m.x
t=t.y
if(t!=null)t.dK()
t=this.ch
s=t.b
this.z=s
this.c=t.r
this.d=t.x
C.b.aF(u,3553,s)
t=u.createRenderbuffer()
this.Q=t
C.b.dm(u,36161,t)
C.b.jy(u,36161,33189,this.c,this.d)
t=u.createFramebuffer()
this.y=t
C.b.aT(u,36160,t)
C.b.j6(u,36160,36064,3553,this.z,0)
C.b.j5(u,36160,36096,36161,this.Q)
C.b.aF(u,3553,null)
C.b.dm(u,36161,null)
C.b.aT(u,36160,null)}u=a.a
C.b.aT(u,36160,this.y)
C.b.aV(u,2884)
C.b.aV(u,2929)
C.b.dE(u,513)
t=this.dy
s=t.c
a.c=C.d.V(s*this.a)
r=t.d
a.d=C.d.V(r*this.b)
l=t.a
k=this.c
j=C.d.V(l*k)
t=t.b
l=this.d
C.b.em(u,j,C.d.V(t*l),C.d.V(s*k),C.d.V(r*l))
C.b.dz(u,this.db)
t=this.cx
C.b.dw(u,t.a,t.b,t.c,t.d)
C.b.dv(u,16640)},
aK:function(a){C.b.aT(a.a,36160,null)}}
X.bg.prototype={$iaD:1}
X.ec.prototype={
gm:function(){var u=this.x
if(u==null){u=D.B()
this.x=u}return u},
a1:function(a){var u,t,s,r,q,p,o
u=a.a
C.b.aT(u,36160,null)
C.b.aV(u,2884)
C.b.aV(u,2929)
C.b.dE(u,513)
t=u.drawingBufferWidth
s=u.drawingBufferHeight
r=this.r
q=r.a
if(typeof t!=="number")return H.A(t)
p=C.d.V(q*t)
q=r.b
if(typeof s!=="number")return H.A(s)
o=C.d.V(q*s)
q=C.d.V(r.c*t)
a.c=q
r=C.d.V(r.d*s)
a.d=r
C.b.em(u,p,o,q,r)
C.b.dz(u,this.c)
r=this.a
C.b.dw(u,r.a,r.b,r.c,r.d)
C.b.dv(u,16640)},
aK:function(a){}}
X.ed.prototype={
gm:function(){var u=this.b
if(u==null){u=D.B()
this.b=u}return u},
$iaD:1,
$ibg:1}
X.cW.prototype={
gm:function(){var u=this.f
if(u==null){u=D.B()
this.f=u}return u},
a7:function(a){var u
H.i(a,"$iq")
u=this.f
if(u!=null)u.C(a)},
eZ:function(){return this.a7(null)},
$iaD:1,
$ibg:1}
X.c_.prototype={}
V.hp.prototype={
$1:function(a){H.i(a,"$iaF")
P.hQ(C.d.ek(this.a.gj4(),2)+" fps")},
$S:35}
V.eX.prototype={
eK:function(a,b){var u,t,s,r,q,p,o
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
o=W.j
W.a2(u,"scroll",H.l(new V.eZ(s),{func:1,ret:-1,args:[o]}),!1,o)},
dj:function(a){var u,t,s,r,q,p,o,n,m,l,k
H.d(a,"$ia",[P.v],"$aa")
this.hT()
u=document
t=u.createElement("div")
t.className="textPar"
for(s=this.b.jJ(C.a.ja(a)),r=s.length,q=0;q<s.length;s.length===r||(0,H.y)(s),++q){p=s[q]
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
if(H.kA(n,"|",0)){m=n.split("|")
l=u.createElement("a")
l.className="linkPar"
if(1>=m.length)return H.e(m,1)
l.href=H.R(m[1])
l.textContent=H.R(m[0])
C.l.Y(t,l)}else{k=P.k0(C.L,n,C.v,!1)
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
hT:function(){var u,t,s,r
if(this.b!=null)return
u=new V.f9()
t=P.v
u.si_(new H.aQ([t,V.bY]))
u.si2(new H.aQ([t,V.c0]))
u.c=null
u.c=u.J(0,"Start")
t=u.J(0,"Start").D(0,"Bold")
s=V.a6(new H.V("*"))
C.a.h(t.a,s)
t.c=!0
t=u.J(0,"Bold").D(0,"Bold")
s=new V.aT()
r=[V.aR]
s.saq(H.b([],r))
C.a.h(t.a,s)
t=V.a6(new H.V("*"))
C.a.h(s.a,t)
t=u.J(0,"Bold").D(0,"BoldEnd")
s=V.a6(new H.V("*"))
C.a.h(t.a,s)
t.c=!0
t=u.J(0,"Start").D(0,"Italic")
s=V.a6(new H.V("_"))
C.a.h(t.a,s)
t.c=!0
t=u.J(0,"Italic").D(0,"Italic")
s=new V.aT()
s.saq(H.b([],r))
C.a.h(t.a,s)
t=V.a6(new H.V("_"))
C.a.h(s.a,t)
t=u.J(0,"Italic").D(0,"ItalicEnd")
s=V.a6(new H.V("_"))
C.a.h(t.a,s)
t.c=!0
t=u.J(0,"Start").D(0,"Code")
s=V.a6(new H.V("`"))
C.a.h(t.a,s)
t.c=!0
t=u.J(0,"Code").D(0,"Code")
s=new V.aT()
s.saq(H.b([],r))
C.a.h(t.a,s)
t=V.a6(new H.V("`"))
C.a.h(s.a,t)
t=u.J(0,"Code").D(0,"CodeEnd")
s=V.a6(new H.V("`"))
C.a.h(t.a,s)
t.c=!0
t=u.J(0,"Start").D(0,"LinkHead")
s=V.a6(new H.V("["))
C.a.h(t.a,s)
t.c=!0
t=u.J(0,"LinkHead").D(0,"LinkTail")
s=V.a6(new H.V("|"))
C.a.h(t.a,s)
s=u.J(0,"LinkHead").D(0,"LinkEnd")
t=V.a6(new H.V("]"))
C.a.h(s.a,t)
s.c=!0
s=u.J(0,"LinkHead").D(0,"LinkHead")
t=new V.aT()
t.saq(H.b([],r))
C.a.h(s.a,t)
s=V.a6(new H.V("|]"))
C.a.h(t.a,s)
s=u.J(0,"LinkTail").D(0,"LinkEnd")
t=V.a6(new H.V("]"))
C.a.h(s.a,t)
s.c=!0
s=u.J(0,"LinkTail").D(0,"LinkTail")
t=new V.aT()
t.saq(H.b([],r))
C.a.h(s.a,t)
s=V.a6(new H.V("|]"))
C.a.h(t.a,s)
C.a.h(u.J(0,"Start").D(0,"Other").a,new V.dL())
s=u.J(0,"Other").D(0,"Other")
t=new V.aT()
t.saq(H.b([],r))
C.a.h(s.a,t)
s=V.a6(new H.V("*_`["))
C.a.h(t.a,s)
s=u.J(0,"BoldEnd")
s.d=s.a.b2("Bold")
s=u.J(0,"ItalicEnd")
s.d=s.a.b2("Italic")
s=u.J(0,"CodeEnd")
s.d=s.a.b2("Code")
s=u.J(0,"LinkEnd")
s.d=s.a.b2("Link")
s=u.J(0,"Other")
s.d=s.a.b2("Other")
this.b=u}}
V.eZ.prototype={
$1:function(a){P.il(C.n,new V.eY(this.a))},
$S:36}
V.eY.prototype={
$0:function(){var u,t,s
u=C.d.V(document.documentElement.scrollTop)
t=this.a.style
s=H.k(-0.01*u)+"px"
t.top=s},
$S:2};(function aliases(){var u=J.a0.prototype
u.eC=u.i
u=J.cH.prototype
u.eD=u.i
u=O.cP.prototype
u.eF=u.aD
u=O.aB.prototype
u.bC=u.aD
u=V.cM.prototype
u.eE=u.aI
u.cL=u.i})();(function installTearOffs(){var u=hunkHelpers._static_1,t=hunkHelpers._static_0,s=hunkHelpers.installInstanceTearOff,r=hunkHelpers._instance_2u,q=hunkHelpers._instance_0u,p=hunkHelpers._instance_1u,o=hunkHelpers._instance_0i
u(P,"k9","jU",10)
u(P,"ka","jV",10)
u(P,"kb","jW",10)
t(P,"iK","k8",3)
var n
s(n=E.aa.prototype,"gee",0,0,null,["$1","$0"],["ef","jl"],0,0)
s(n,"gec",0,0,null,["$1","$0"],["ed","ji"],0,0)
r(n,"gjg","jh",5)
r(n,"gjj","jk",5)
s(n=E.dd.prototype,"gcO",0,0,null,["$1","$0"],["cQ","cP"],0,0)
q(n,"gjz","eh",3)
p(n=X.dl.prototype,"gh4","h5",8)
p(n,"gfP","fQ",8)
p(n,"gfV","fW",4)
p(n,"gh8","h9",16)
p(n,"gh6","h7",16)
p(n,"ghc","hd",4)
p(n,"ghg","hh",4)
p(n,"gfZ","h_",4)
p(n,"ghe","hf",4)
p(n,"gfX","fY",4)
p(n,"ghi","hj",34)
p(n,"ghk","hl",8)
p(n,"ghA","hB",9)
p(n,"ghw","hx",9)
p(n,"ghy","hz",9)
s(D.b0.prototype,"geO",0,0,null,["$1","$0"],["al","eP"],0,0)
s(n=D.cJ.prototype,"gd6",0,0,null,["$1","$0"],["d7","ha"],0,0)
p(n,"ghm","hn",37)
r(n,"gfJ","fK",17)
r(n,"ghq","hr",17)
o(V.I.prototype,"gl","cn",18)
o(V.F.prototype,"gl","cn",18)
s(n=U.bP.prototype,"gaC",0,0,null,["$1","$0"],["K","a0"],0,0)
r(n,"gfH","fI",19)
r(n,"gho","hp",19)
s(n=U.dm.prototype,"gaC",0,0,null,["$1","$0"],["K","a0"],0,0)
p(n,"gbM","bN",1)
p(n,"gbO","bP",1)
p(n,"gbQ","bR",1)
s(n=U.dn.prototype,"gaC",0,0,null,["$1","$0"],["K","a0"],0,0)
p(n,"gbM","bN",1)
p(n,"gbO","bP",1)
p(n,"gbQ","bR",1)
p(n,"gfB","fC",1)
p(n,"gfD","fE",1)
p(n,"gi7","i8",1)
p(n,"gi5","i6",1)
p(n,"gi3","i4",1)
p(U.dp.prototype,"gfF","fG",1)
s(n=M.ct.prototype,"gU",0,0,null,["$1","$0"],["T","aN"],0,0)
r(n,"ghs","ht",20)
r(n,"ghu","hv",20)
s(M.cw.prototype,"gU",0,0,null,["$1","$0"],["T","aN"],0,0)
s(n=M.cz.prototype,"gU",0,0,null,["$1","$0"],["T","aN"],0,0)
r(n,"gfR","fS",5)
r(n,"gfT","fU",5)
s(n=O.cN.prototype,"gam",0,0,null,["$1","$0"],["N","an"],0,0)
s(n,"ghL",0,0,null,["$1","$0"],["dc","hM"],0,0)
r(n,"gfL","fM",21)
r(n,"gfN","fO",21)
s(n=O.d8.prototype,"gam",0,0,null,["$1","$0"],["N","an"],0,0)
r(n,"gh0","h1",11)
r(n,"gh2","h3",11)
s(O.am.prototype,"gam",0,0,null,["$1","$0"],["N","an"],0,0)
s(X.cW.prototype,"geY",0,0,null,["$1","$0"],["a7","eZ"],0,0)})();(function inheritance(){var u=hunkHelpers.mixin,t=hunkHelpers.inherit,s=hunkHelpers.inheritMany
t(P.E,null)
s(P.E,[H.hz,J.a0,J.ae,P.dy,P.f,H.cK,P.ay,H.bk,H.dk,H.eL,H.fc,P.b1,H.bI,H.dB,P.es,H.el,H.en,H.eh,P.dC,P.aK,P.ao,P.ds,P.f1,P.bZ,P.f2,P.aF,P.a9,P.ha,P.h6,P.cc,P.h0,P.N,P.bJ,P.h9,P.Z,P.af,P.a8,P.ax,P.eI,P.d4,P.dv,P.eb,P.a,P.D,P.ag,P.v,P.b9,W.dX,W.aq,W.cB,P.h1,O.K,O.bR,E.dQ,E.aa,E.eN,E.dd,Z.dq,Z.dr,Z.bH,Z.bm,Z.aI,D.dT,D.b2,D.q,X.cs,X.cI,X.ej,X.ep,X.ah,X.eB,X.fa,X.dl,D.b0,D.S,D.cX,D.d3,D.da,D.db,D.dc,V.P,V.W,V.e3,V.cQ,V.a4,V.T,V.Q,V.aE,V.br,V.I,V.F,U.dm,U.dn,U.dp,M.cw,M.cz,M.ai,A.co,A.dO,A.ex,A.c2,A.c6,A.c4,A.c7,A.c5,A.c8,A.bi,A.dg,A.fk,F.Y,F.e6,F.b7,F.ek,F.bn,F.d2,F.eU,F.eV,F.eW,F.ad,F.ft,F.fu,F.fx,F.fz,F.fA,F.fB,O.ba,O.cP,O.am,T.f7,V.dL,V.aR,V.cM,V.eT,V.bY,V.de,V.c0,V.f9,X.c_,X.bg,X.ed,X.cW,V.eX])
s(J.a0,[J.eg,J.cG,J.cH,J.ar,J.b5,J.b6,H.cU,W.bj,W.dt,W.dZ,W.cy,W.j,W.dw,W.dz,W.aG,W.dD,P.cq,P.cC,P.cY,P.d0,P.bs,P.d1,P.d6,P.di])
s(J.cH,[J.eJ,J.bu,J.aO])
t(J.hy,J.ar)
s(J.b5,[J.cF,J.cE])
t(P.eo,P.dy)
s(P.eo,[H.dj,W.fL,W.fK,P.e7])
t(H.V,H.dj)
s(P.f,[H.e1,H.et,H.fE])
s(P.ay,[H.eu,H.fF])
s(P.b1,[H.eH,H.ei,H.fn,H.fe,H.dS,H.eR,P.cV,P.aN,P.fo,P.fm,P.d5,P.dW,P.dY])
s(H.bI,[H.hr,H.f5,H.hi,H.hj,H.hk,P.fH,P.fG,P.fI,P.fJ,P.h8,P.h7,P.fP,P.fT,P.fQ,P.fR,P.fS,P.fW,P.fX,P.fV,P.fU,P.f3,P.f4,P.hc,P.h4,P.h3,P.h5,P.er,P.e_,P.e0,W.fO,P.he,P.e8,P.e9,E.eO,E.eP,E.eQ,E.f8,D.e5,F.hq,F.hf,F.fD,F.fC,F.fv,F.fw,V.hp,V.eZ,V.eY])
s(H.f5,[H.f0,H.bF])
t(P.eq,P.es)
t(H.aQ,P.eq)
t(H.em,H.e1)
t(H.cR,H.cU)
s(H.cR,[H.cd,H.cf])
t(H.ce,H.cd)
t(H.cS,H.ce)
t(H.cg,H.cf)
t(H.cT,H.cg)
s(H.cT,[H.eC,H.eD,H.eE,H.eF])
t(P.h2,P.ha)
t(P.h_,P.h6)
t(P.cv,P.f2)
t(P.e2,P.bJ)
t(P.fp,P.e2)
t(P.fq,P.cv)
s(P.a8,[P.t,P.u])
s(P.aN,[P.bq,P.ee])
s(W.bj,[W.H,W.ca])
s(W.H,[W.X,W.b_,W.bN])
s(W.X,[W.n,P.m])
s(W.n,[W.dM,W.dN,W.cp,W.bh,W.bM,W.ea,W.eS])
t(W.bL,W.dt)
t(W.dx,W.dw)
t(W.bl,W.dx)
t(W.cD,W.bN)
t(W.bb,W.j)
s(W.bb,[W.az,W.a1,W.at])
t(W.dA,W.dz)
t(W.bT,W.dA)
t(W.dE,W.dD)
t(W.fb,W.dE)
t(W.aJ,W.a1)
t(W.du,W.cy)
t(W.fM,P.f1)
t(W.hF,W.fM)
t(W.fN,P.bZ)
t(P.al,P.h1)
s(E.dQ,[Z.cr,A.bX,T.bt])
s(D.q,[D.b3,D.b4,D.x,X.eK])
s(X.eK,[X.cL,X.aS,X.bS,X.df])
s(O.K,[D.cJ,U.bP,M.ct])
s(D.dT,[U.dV,U.a5])
t(U.cu,U.a5)
s(A.bX,[A.cO,A.d9])
s(A.dg,[A.z,A.fh,A.fi,A.fj,A.fg,A.O,A.aj,A.C,A.dh,A.fl,A.c3,A.a7,A.a_,A.ab])
t(F.f_,F.e6)
t(F.ff,F.ek)
t(F.fy,F.fz)
t(F.eG,F.fA)
s(O.ba,[O.cN,O.d8])
s(O.cP,[O.ev,O.ew,O.aB])
s(O.aB,[O.ey,O.ez])
t(T.d7,T.bt)
t(T.f6,T.d7)
s(V.cM,[V.aT,V.c1])
s(X.c_,[X.dP,X.ec])
u(H.dj,H.dk)
u(H.cd,P.N)
u(H.ce,H.bk)
u(H.cf,P.N)
u(H.cg,H.bk)
u(P.dy,P.N)
u(W.dt,W.dX)
u(W.dw,P.N)
u(W.dx,W.aq)
u(W.dz,P.N)
u(W.dA,W.aq)
u(W.dD,P.N)
u(W.dE,W.aq)})();(function constants(){var u=hunkHelpers.makeConstList
C.q=W.cp.prototype
C.m=W.bh.prototype
C.l=W.bM.prototype
C.B=W.cD.prototype
C.C=J.a0.prototype
C.a=J.ar.prototype
C.D=J.cE.prototype
C.e=J.cF.prototype
C.o=J.cG.prototype
C.d=J.b5.prototype
C.j=J.b6.prototype
C.K=J.aO.prototype
C.M=W.bT.prototype
C.u=J.eJ.prototype
C.b=P.bs.prototype
C.p=J.bu.prototype
C.w=W.aJ.prototype
C.x=W.ca.prototype
C.y=new P.eI()
C.z=new P.fq()
C.k=new P.h2()
C.c=new A.bi(0,"ColorSourceType.None")
C.i=new A.bi(1,"ColorSourceType.Solid")
C.f=new A.bi(2,"ColorSourceType.Texture2D")
C.h=new A.bi(3,"ColorSourceType.TextureCube")
C.n=new P.ax(0)
C.A=new P.ax(5e6)
C.E=function(hooks) {
  if (typeof dartExperimentalFixupGetTag != "function") return hooks;
  hooks.getTag = dartExperimentalFixupGetTag(hooks.getTag);
}
C.F=function(hooks) {
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
C.r=function(hooks) { return hooks; }

C.G=function(getTagFallback) {
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
C.H=function() {
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
C.I=function(hooks) {
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
C.J=function(hooks) {
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
C.t=function getTagFallback(o) {
  var s = Object.prototype.toString.call(o);
  return s.substring(8, s.length - 1);
}
C.L=H.b(u([0,0,65498,45055,65535,34815,65534,18431]),[P.u])
C.v=new P.fp(!1)})();(function staticFields(){$.aw=0
$.bG=null
$.hW=null
$.hG=!1
$.iP=null
$.iI=null
$.iU=null
$.hg=null
$.hl=null
$.hN=null
$.bw=null
$.ch=null
$.ci=null
$.hH=!1
$.M=C.k
$.eA=null
$.ib=null
$.bU=null
$.bW=null
$.iq=null
$.iu=null
$.is=null
$.it=null
$.fr=null
$.ir=null
$.ia=null})();(function lazyInitializers(){var u=hunkHelpers.lazy
u($,"kJ","iY",function(){return H.iO("_$dart_dartClosure")})
u($,"kK","hR",function(){return H.iO("_$dart_js")})
u($,"kN","iZ",function(){return H.aH(H.fd({
toString:function(){return"$receiver$"}}))})
u($,"kO","j_",function(){return H.aH(H.fd({$method$:null,
toString:function(){return"$receiver$"}}))})
u($,"kP","j0",function(){return H.aH(H.fd(null))})
u($,"kQ","j1",function(){return H.aH(function(){var $argumentsExpr$='$arguments$'
try{null.$method$($argumentsExpr$)}catch(t){return t.message}}())})
u($,"kT","j4",function(){return H.aH(H.fd(void 0))})
u($,"kU","j5",function(){return H.aH(function(){var $argumentsExpr$='$arguments$'
try{(void 0).$method$($argumentsExpr$)}catch(t){return t.message}}())})
u($,"kS","j3",function(){return H.aH(H.io(null))})
u($,"kR","j2",function(){return H.aH(function(){try{null.$method$}catch(t){return t.message}}())})
u($,"kW","j7",function(){return H.aH(H.io(void 0))})
u($,"kV","j6",function(){return H.aH(function(){try{(void 0).$method$}catch(t){return t.message}}())})
u($,"la","hS",function(){return P.jT()})
u($,"lc","cm",function(){return[]})
u($,"lb","jb",function(){return P.jJ("^[\\-\\.0-9A-Z_a-z~]*$",!0,!1)})
u($,"l3","ja",function(){return Z.an(0)})
u($,"kY","j8",function(){return Z.an(511)})
u($,"l5","av",function(){return Z.an(1)})
u($,"l4","aX",function(){return Z.an(2)})
u($,"l_","aW",function(){return Z.an(4)})
u($,"l6","aY",function(){return Z.an(8)})
u($,"l7","aZ",function(){return Z.an(16)})
u($,"l0","ck",function(){return Z.an(32)})
u($,"l1","cl",function(){return Z.an(64)})
u($,"l2","j9",function(){return Z.an(96)})
u($,"l8","bE",function(){return Z.an(128)})
u($,"kZ","aV",function(){return Z.an(256)})
u($,"kI","iX",function(){return new V.e3(1e-9)})
u($,"kH","G",function(){return $.iX()})})()
var v={mangledGlobalNames:{u:"int",t:"double",a8:"num",v:"String",Z:"bool",D:"Null",a:"List"},mangledNames:{},getTypeFromName:getGlobalFromName,metadata:[],types:[{func:1,ret:-1,opt:[D.q]},{func:1,ret:-1,args:[D.q]},{func:1,ret:P.D},{func:1,ret:-1},{func:1,ret:-1,args:[W.a1]},{func:1,ret:-1,args:[P.u,[P.f,E.aa]]},{func:1,ret:P.D,args:[F.Y]},{func:1,ret:P.D,args:[D.q]},{func:1,ret:-1,args:[W.j]},{func:1,ret:-1,args:[W.at]},{func:1,ret:-1,args:[{func:1,ret:-1}]},{func:1,ret:-1,args:[P.u,[P.f,O.am]]},{func:1,ret:P.D,args:[,]},{func:1,ret:P.D,args:[,,]},{func:1,ret:P.v,args:[P.u]},{func:1,args:[,]},{func:1,ret:-1,args:[W.az]},{func:1,ret:-1,args:[P.u,[P.f,D.S]]},{func:1,ret:P.t},{func:1,ret:-1,args:[P.u,[P.f,U.a5]]},{func:1,ret:-1,args:[P.u,[P.f,M.ai]]},{func:1,ret:-1,args:[P.u,[P.f,V.a4]]},{func:1,ret:P.Z,args:[W.H]},{func:1,ret:W.X,args:[W.H]},{func:1,ret:P.D,args:[,],opt:[P.ag]},{func:1,ret:[P.ao,,],args:[,]},{func:1,ret:P.D,args:[{func:1,ret:-1}]},{func:1,ret:P.D,args:[P.a8]},{func:1,ret:P.D,args:[{func:1,ret:-1,args:[D.q]}]},{func:1,args:[P.v]},{func:1,ret:V.Q,args:[P.t]},{func:1,ret:P.D,args:[F.ad,P.t,P.t]},{func:1,args:[W.j]},{func:1,args:[,P.v]},{func:1,ret:-1,args:[W.aJ]},{func:1,ret:P.D,args:[P.aF]},{func:1,ret:P.D,args:[W.j]},{func:1,ret:P.Z,args:[[P.f,D.S]]}],interceptorsByTag:null,leafTags:null};(function nativeSupport(){!function(){var u=function(a){var o={}
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
hunkHelpers.setOrUpdateInterceptorsByTag({CanvasRenderingContext2D:J.a0,DOMError:J.a0,MediaError:J.a0,Navigator:J.a0,NavigatorConcurrentHardware:J.a0,NavigatorUserMediaError:J.a0,OverconstrainedError:J.a0,PositionError:J.a0,WebGLActiveInfo:J.a0,WebGL2RenderingContext:J.a0,SQLError:J.a0,ArrayBufferView:H.cU,Float32Array:H.cS,Int16Array:H.eC,Int32Array:H.eD,Uint32Array:H.eE,Uint8Array:H.eF,HTMLAudioElement:W.n,HTMLBRElement:W.n,HTMLBaseElement:W.n,HTMLButtonElement:W.n,HTMLContentElement:W.n,HTMLDListElement:W.n,HTMLDataElement:W.n,HTMLDataListElement:W.n,HTMLDetailsElement:W.n,HTMLDialogElement:W.n,HTMLEmbedElement:W.n,HTMLFieldSetElement:W.n,HTMLHRElement:W.n,HTMLHeadElement:W.n,HTMLHeadingElement:W.n,HTMLHtmlElement:W.n,HTMLIFrameElement:W.n,HTMLImageElement:W.n,HTMLInputElement:W.n,HTMLLIElement:W.n,HTMLLabelElement:W.n,HTMLLegendElement:W.n,HTMLLinkElement:W.n,HTMLMapElement:W.n,HTMLMediaElement:W.n,HTMLMenuElement:W.n,HTMLMetaElement:W.n,HTMLMeterElement:W.n,HTMLModElement:W.n,HTMLOListElement:W.n,HTMLObjectElement:W.n,HTMLOptGroupElement:W.n,HTMLOptionElement:W.n,HTMLOutputElement:W.n,HTMLParagraphElement:W.n,HTMLParamElement:W.n,HTMLPictureElement:W.n,HTMLPreElement:W.n,HTMLProgressElement:W.n,HTMLQuoteElement:W.n,HTMLScriptElement:W.n,HTMLShadowElement:W.n,HTMLSlotElement:W.n,HTMLSourceElement:W.n,HTMLSpanElement:W.n,HTMLStyleElement:W.n,HTMLTableCaptionElement:W.n,HTMLTableCellElement:W.n,HTMLTableDataCellElement:W.n,HTMLTableHeaderCellElement:W.n,HTMLTableColElement:W.n,HTMLTableElement:W.n,HTMLTableRowElement:W.n,HTMLTableSectionElement:W.n,HTMLTemplateElement:W.n,HTMLTextAreaElement:W.n,HTMLTimeElement:W.n,HTMLTitleElement:W.n,HTMLTrackElement:W.n,HTMLUListElement:W.n,HTMLUnknownElement:W.n,HTMLVideoElement:W.n,HTMLDirectoryElement:W.n,HTMLFontElement:W.n,HTMLFrameElement:W.n,HTMLFrameSetElement:W.n,HTMLMarqueeElement:W.n,HTMLElement:W.n,HTMLAnchorElement:W.dM,HTMLAreaElement:W.dN,HTMLBodyElement:W.cp,HTMLCanvasElement:W.bh,CDATASection:W.b_,CharacterData:W.b_,Comment:W.b_,ProcessingInstruction:W.b_,Text:W.b_,CSSStyleDeclaration:W.bL,MSStyleCSSProperties:W.bL,CSS2Properties:W.bL,HTMLDivElement:W.bM,XMLDocument:W.bN,Document:W.bN,DOMException:W.dZ,DOMRectReadOnly:W.cy,Element:W.X,AbortPaymentEvent:W.j,AnimationEvent:W.j,AnimationPlaybackEvent:W.j,ApplicationCacheErrorEvent:W.j,BackgroundFetchClickEvent:W.j,BackgroundFetchEvent:W.j,BackgroundFetchFailEvent:W.j,BackgroundFetchedEvent:W.j,BeforeInstallPromptEvent:W.j,BeforeUnloadEvent:W.j,BlobEvent:W.j,CanMakePaymentEvent:W.j,ClipboardEvent:W.j,CloseEvent:W.j,CustomEvent:W.j,DeviceMotionEvent:W.j,DeviceOrientationEvent:W.j,ErrorEvent:W.j,ExtendableEvent:W.j,ExtendableMessageEvent:W.j,FetchEvent:W.j,FontFaceSetLoadEvent:W.j,ForeignFetchEvent:W.j,GamepadEvent:W.j,HashChangeEvent:W.j,InstallEvent:W.j,MediaEncryptedEvent:W.j,MediaKeyMessageEvent:W.j,MediaQueryListEvent:W.j,MediaStreamEvent:W.j,MediaStreamTrackEvent:W.j,MessageEvent:W.j,MIDIConnectionEvent:W.j,MIDIMessageEvent:W.j,MutationEvent:W.j,NotificationEvent:W.j,PageTransitionEvent:W.j,PaymentRequestEvent:W.j,PaymentRequestUpdateEvent:W.j,PopStateEvent:W.j,PresentationConnectionAvailableEvent:W.j,PresentationConnectionCloseEvent:W.j,ProgressEvent:W.j,PromiseRejectionEvent:W.j,PushEvent:W.j,RTCDataChannelEvent:W.j,RTCDTMFToneChangeEvent:W.j,RTCPeerConnectionIceEvent:W.j,RTCTrackEvent:W.j,SecurityPolicyViolationEvent:W.j,SensorErrorEvent:W.j,SpeechRecognitionError:W.j,SpeechRecognitionEvent:W.j,SpeechSynthesisEvent:W.j,StorageEvent:W.j,SyncEvent:W.j,TrackEvent:W.j,TransitionEvent:W.j,WebKitTransitionEvent:W.j,VRDeviceEvent:W.j,VRDisplayEvent:W.j,VRSessionEvent:W.j,MojoInterfaceRequestEvent:W.j,ResourceProgressEvent:W.j,USBConnectionEvent:W.j,IDBVersionChangeEvent:W.j,AudioProcessingEvent:W.j,OfflineAudioCompletionEvent:W.j,WebGLContextEvent:W.j,Event:W.j,InputEvent:W.j,EventTarget:W.bj,HTMLFormElement:W.ea,HTMLCollection:W.bl,HTMLFormControlsCollection:W.bl,HTMLOptionsCollection:W.bl,HTMLDocument:W.cD,KeyboardEvent:W.az,PointerEvent:W.a1,MouseEvent:W.a1,DragEvent:W.a1,DocumentFragment:W.H,ShadowRoot:W.H,Attr:W.H,DocumentType:W.H,Node:W.H,NodeList:W.bT,RadioNodeList:W.bT,HTMLSelectElement:W.eS,Touch:W.aG,TouchEvent:W.at,TouchList:W.fb,CompositionEvent:W.bb,FocusEvent:W.bb,TextEvent:W.bb,UIEvent:W.bb,WheelEvent:W.aJ,Window:W.ca,DOMWindow:W.ca,ClientRect:W.du,DOMRect:W.du,SVGAElement:P.m,SVGAnimateElement:P.m,SVGAnimateMotionElement:P.m,SVGAnimateTransformElement:P.m,SVGAnimationElement:P.m,SVGCircleElement:P.m,SVGClipPathElement:P.m,SVGDefsElement:P.m,SVGDescElement:P.m,SVGDiscardElement:P.m,SVGEllipseElement:P.m,SVGFEBlendElement:P.m,SVGFEColorMatrixElement:P.m,SVGFEComponentTransferElement:P.m,SVGFECompositeElement:P.m,SVGFEConvolveMatrixElement:P.m,SVGFEDiffuseLightingElement:P.m,SVGFEDisplacementMapElement:P.m,SVGFEDistantLightElement:P.m,SVGFEFloodElement:P.m,SVGFEFuncAElement:P.m,SVGFEFuncBElement:P.m,SVGFEFuncGElement:P.m,SVGFEFuncRElement:P.m,SVGFEGaussianBlurElement:P.m,SVGFEImageElement:P.m,SVGFEMergeElement:P.m,SVGFEMergeNodeElement:P.m,SVGFEMorphologyElement:P.m,SVGFEOffsetElement:P.m,SVGFEPointLightElement:P.m,SVGFESpecularLightingElement:P.m,SVGFESpotLightElement:P.m,SVGFETileElement:P.m,SVGFETurbulenceElement:P.m,SVGFilterElement:P.m,SVGForeignObjectElement:P.m,SVGGElement:P.m,SVGGeometryElement:P.m,SVGGraphicsElement:P.m,SVGImageElement:P.m,SVGLineElement:P.m,SVGLinearGradientElement:P.m,SVGMarkerElement:P.m,SVGMaskElement:P.m,SVGMetadataElement:P.m,SVGPathElement:P.m,SVGPatternElement:P.m,SVGPolygonElement:P.m,SVGPolylineElement:P.m,SVGRadialGradientElement:P.m,SVGRectElement:P.m,SVGScriptElement:P.m,SVGSetElement:P.m,SVGStopElement:P.m,SVGStyleElement:P.m,SVGElement:P.m,SVGSVGElement:P.m,SVGSwitchElement:P.m,SVGSymbolElement:P.m,SVGTSpanElement:P.m,SVGTextContentElement:P.m,SVGTextElement:P.m,SVGTextPathElement:P.m,SVGTextPositioningElement:P.m,SVGTitleElement:P.m,SVGUseElement:P.m,SVGViewElement:P.m,SVGGradientElement:P.m,SVGComponentTransferFunctionElement:P.m,SVGFEDropShadowElement:P.m,SVGMPathElement:P.m,WebGLBuffer:P.cq,WebGLFramebuffer:P.cC,WebGLProgram:P.cY,WebGLRenderbuffer:P.d0,WebGLRenderingContext:P.bs,WebGLShader:P.d1,WebGLTexture:P.d6,WebGLUniformLocation:P.di})
hunkHelpers.setOrUpdateLeafTags({CanvasRenderingContext2D:true,DOMError:true,MediaError:true,Navigator:true,NavigatorConcurrentHardware:true,NavigatorUserMediaError:true,OverconstrainedError:true,PositionError:true,WebGLActiveInfo:true,WebGL2RenderingContext:true,SQLError:true,ArrayBufferView:false,Float32Array:true,Int16Array:true,Int32Array:true,Uint32Array:true,Uint8Array:false,HTMLAudioElement:true,HTMLBRElement:true,HTMLBaseElement:true,HTMLButtonElement:true,HTMLContentElement:true,HTMLDListElement:true,HTMLDataElement:true,HTMLDataListElement:true,HTMLDetailsElement:true,HTMLDialogElement:true,HTMLEmbedElement:true,HTMLFieldSetElement:true,HTMLHRElement:true,HTMLHeadElement:true,HTMLHeadingElement:true,HTMLHtmlElement:true,HTMLIFrameElement:true,HTMLImageElement:true,HTMLInputElement:true,HTMLLIElement:true,HTMLLabelElement:true,HTMLLegendElement:true,HTMLLinkElement:true,HTMLMapElement:true,HTMLMediaElement:true,HTMLMenuElement:true,HTMLMetaElement:true,HTMLMeterElement:true,HTMLModElement:true,HTMLOListElement:true,HTMLObjectElement:true,HTMLOptGroupElement:true,HTMLOptionElement:true,HTMLOutputElement:true,HTMLParagraphElement:true,HTMLParamElement:true,HTMLPictureElement:true,HTMLPreElement:true,HTMLProgressElement:true,HTMLQuoteElement:true,HTMLScriptElement:true,HTMLShadowElement:true,HTMLSlotElement:true,HTMLSourceElement:true,HTMLSpanElement:true,HTMLStyleElement:true,HTMLTableCaptionElement:true,HTMLTableCellElement:true,HTMLTableDataCellElement:true,HTMLTableHeaderCellElement:true,HTMLTableColElement:true,HTMLTableElement:true,HTMLTableRowElement:true,HTMLTableSectionElement:true,HTMLTemplateElement:true,HTMLTextAreaElement:true,HTMLTimeElement:true,HTMLTitleElement:true,HTMLTrackElement:true,HTMLUListElement:true,HTMLUnknownElement:true,HTMLVideoElement:true,HTMLDirectoryElement:true,HTMLFontElement:true,HTMLFrameElement:true,HTMLFrameSetElement:true,HTMLMarqueeElement:true,HTMLElement:false,HTMLAnchorElement:true,HTMLAreaElement:true,HTMLBodyElement:true,HTMLCanvasElement:true,CDATASection:true,CharacterData:true,Comment:true,ProcessingInstruction:true,Text:true,CSSStyleDeclaration:true,MSStyleCSSProperties:true,CSS2Properties:true,HTMLDivElement:true,XMLDocument:true,Document:false,DOMException:true,DOMRectReadOnly:false,Element:false,AbortPaymentEvent:true,AnimationEvent:true,AnimationPlaybackEvent:true,ApplicationCacheErrorEvent:true,BackgroundFetchClickEvent:true,BackgroundFetchEvent:true,BackgroundFetchFailEvent:true,BackgroundFetchedEvent:true,BeforeInstallPromptEvent:true,BeforeUnloadEvent:true,BlobEvent:true,CanMakePaymentEvent:true,ClipboardEvent:true,CloseEvent:true,CustomEvent:true,DeviceMotionEvent:true,DeviceOrientationEvent:true,ErrorEvent:true,ExtendableEvent:true,ExtendableMessageEvent:true,FetchEvent:true,FontFaceSetLoadEvent:true,ForeignFetchEvent:true,GamepadEvent:true,HashChangeEvent:true,InstallEvent:true,MediaEncryptedEvent:true,MediaKeyMessageEvent:true,MediaQueryListEvent:true,MediaStreamEvent:true,MediaStreamTrackEvent:true,MessageEvent:true,MIDIConnectionEvent:true,MIDIMessageEvent:true,MutationEvent:true,NotificationEvent:true,PageTransitionEvent:true,PaymentRequestEvent:true,PaymentRequestUpdateEvent:true,PopStateEvent:true,PresentationConnectionAvailableEvent:true,PresentationConnectionCloseEvent:true,ProgressEvent:true,PromiseRejectionEvent:true,PushEvent:true,RTCDataChannelEvent:true,RTCDTMFToneChangeEvent:true,RTCPeerConnectionIceEvent:true,RTCTrackEvent:true,SecurityPolicyViolationEvent:true,SensorErrorEvent:true,SpeechRecognitionError:true,SpeechRecognitionEvent:true,SpeechSynthesisEvent:true,StorageEvent:true,SyncEvent:true,TrackEvent:true,TransitionEvent:true,WebKitTransitionEvent:true,VRDeviceEvent:true,VRDisplayEvent:true,VRSessionEvent:true,MojoInterfaceRequestEvent:true,ResourceProgressEvent:true,USBConnectionEvent:true,IDBVersionChangeEvent:true,AudioProcessingEvent:true,OfflineAudioCompletionEvent:true,WebGLContextEvent:true,Event:false,InputEvent:false,EventTarget:false,HTMLFormElement:true,HTMLCollection:true,HTMLFormControlsCollection:true,HTMLOptionsCollection:true,HTMLDocument:true,KeyboardEvent:true,PointerEvent:true,MouseEvent:false,DragEvent:false,DocumentFragment:true,ShadowRoot:true,Attr:true,DocumentType:true,Node:false,NodeList:true,RadioNodeList:true,HTMLSelectElement:true,Touch:true,TouchEvent:true,TouchList:true,CompositionEvent:true,FocusEvent:true,TextEvent:true,UIEvent:false,WheelEvent:true,Window:true,DOMWindow:true,ClientRect:true,DOMRect:true,SVGAElement:true,SVGAnimateElement:true,SVGAnimateMotionElement:true,SVGAnimateTransformElement:true,SVGAnimationElement:true,SVGCircleElement:true,SVGClipPathElement:true,SVGDefsElement:true,SVGDescElement:true,SVGDiscardElement:true,SVGEllipseElement:true,SVGFEBlendElement:true,SVGFEColorMatrixElement:true,SVGFEComponentTransferElement:true,SVGFECompositeElement:true,SVGFEConvolveMatrixElement:true,SVGFEDiffuseLightingElement:true,SVGFEDisplacementMapElement:true,SVGFEDistantLightElement:true,SVGFEFloodElement:true,SVGFEFuncAElement:true,SVGFEFuncBElement:true,SVGFEFuncGElement:true,SVGFEFuncRElement:true,SVGFEGaussianBlurElement:true,SVGFEImageElement:true,SVGFEMergeElement:true,SVGFEMergeNodeElement:true,SVGFEMorphologyElement:true,SVGFEOffsetElement:true,SVGFEPointLightElement:true,SVGFESpecularLightingElement:true,SVGFESpotLightElement:true,SVGFETileElement:true,SVGFETurbulenceElement:true,SVGFilterElement:true,SVGForeignObjectElement:true,SVGGElement:true,SVGGeometryElement:true,SVGGraphicsElement:true,SVGImageElement:true,SVGLineElement:true,SVGLinearGradientElement:true,SVGMarkerElement:true,SVGMaskElement:true,SVGMetadataElement:true,SVGPathElement:true,SVGPatternElement:true,SVGPolygonElement:true,SVGPolylineElement:true,SVGRadialGradientElement:true,SVGRectElement:true,SVGScriptElement:true,SVGSetElement:true,SVGStopElement:true,SVGStyleElement:true,SVGElement:true,SVGSVGElement:true,SVGSwitchElement:true,SVGSymbolElement:true,SVGTSpanElement:true,SVGTextContentElement:true,SVGTextElement:true,SVGTextPathElement:true,SVGTextPositioningElement:true,SVGTitleElement:true,SVGUseElement:true,SVGViewElement:true,SVGGradientElement:true,SVGComponentTransferFunctionElement:true,SVGFEDropShadowElement:true,SVGMPathElement:true,WebGLBuffer:true,WebGLFramebuffer:true,WebGLProgram:true,WebGLRenderbuffer:true,WebGLRenderingContext:true,WebGLShader:true,WebGLTexture:true,WebGLUniformLocation:true})
H.cR.$nativeSuperclassTag="ArrayBufferView"
H.cd.$nativeSuperclassTag="ArrayBufferView"
H.ce.$nativeSuperclassTag="ArrayBufferView"
H.cS.$nativeSuperclassTag="ArrayBufferView"
H.cf.$nativeSuperclassTag="ArrayBufferView"
H.cg.$nativeSuperclassTag="ArrayBufferView"
H.cT.$nativeSuperclassTag="ArrayBufferView"})()
convertAllToFastObject(w)
convertToFastObject($);(function(a){if(typeof document==="undefined"){a(null)
return}if(typeof document.currentScript!='undefined'){a(document.currentScript)
return}var u=document.scripts
function onLoad(b){for(var s=0;s<u.length;++s)u[s].removeEventListener("load",onLoad,false)
a(b.target)}for(var t=0;t<u.length;++t)u[t].addEventListener("load",onLoad,false)})(function(a){v.currentScript=a
if(typeof dartMainRunner==="function")dartMainRunner(S.iR,[])
else S.iR([])})})()
//# sourceMappingURL=test.dart.js.map
