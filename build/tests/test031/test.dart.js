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
a[c]=function(){a[c]=function(){H.n1(b)}
var t
var s=d
try{if(a[b]===u){t=a[b]=s
t=a[b]=d()}else t=a[b]}finally{if(t===s)a[b]=null
a[c]=function(){return this[b]}}return t}}function makeConstList(a){a.immutable$list=Array
a.fixed$length=Array
return a}function convertToFastObject(a){function t(){}t.prototype=a
new t()
return a}function convertAllToFastObject(a){for(var u=0;u<a.length;++u)convertToFastObject(a[u])}var y=0
function tearOffGetter(a,b,c,d,e){return e?new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+d+y+++"(receiver) {"+"if (c === null) c = "+"H.jZ"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, true, name);"+"return new c(this, funcs[0], receiver, name);"+"}")(a,b,c,d,H,null):new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+d+y+++"() {"+"if (c === null) c = "+"H.jZ"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, false, name);"+"return new c(this, funcs[0], null, name);"+"}")(a,b,c,d,H,null)}function tearOff(a,b,c,d,e,f){var u=null
return d?function(){if(u===null)u=H.jZ(this,a,b,c,true,false,e).prototype
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
if(w[u][a])return w[u][a]}}var C={},H={jJ:function jJ(a){this.a=a},
ki:function(){return new P.dP("No element")},
lN:function(){return new P.dP("Too few elements")},
a5:function a5(a){this.a=a},
fv:function fv(){},
ds:function ds(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=null
_.$ti=d},
h0:function h0(a,b,c){this.a=a
this.b=b
this.$ti=c},
h1:function h1(a,b,c){var _=this
_.a=null
_.b=a
_.c=b
_.$ti=c},
iG:function iG(a,b,c){this.a=a
this.b=b
this.$ti=c},
iH:function iH(a,b,c){this.a=a
this.b=b
this.$ti=c},
bO:function bO(){},
e3:function e3(){},
e2:function e2(){},
c4:function(a){var u,t
u=H.R(v.mangledGlobalNames[a])
if(typeof u==="string")return u
t="minified:"+a
return t},
mM:function(a){return v.types[H.af(a)]},
mR:function(a,b){var u
if(b!=null){u=b.x
if(u!=null)return u}return!!J.Z(a).$iF},
n:function(a){var u
if(typeof a==="string")return a
if(typeof a==="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
u=J.aw(a)
if(typeof u!=="string")throw H.i(H.ba(a))
return u},
m5:function(a){var u,t,s
u=a.$reflectionInfo
if(u==null)return
u=J.fN(u)
t=u[0]
s=u[1]
return new H.hv(a,u,(t&2)===2,t>>2,s>>1,(s&1)===1,u[2])},
ct:function(a){var u=a.$identityHash
if(u==null){u=Math.random()*0x3fffffff|0
a.$identityHash=u}return u},
bR:function(a){return H.lW(a)+H.jX(H.bG(a),0,null)},
lW:function(a){var u,t,s,r,q,p,o,n,m
u=J.Z(a)
t=u.constructor
if(typeof t=="function"){s=t.name
r=typeof s==="string"?s:null}else r=null
q=r==null
if(q||u===C.D||!!u.$ibV){p=C.u(a)
if(q)r=p
if(p==="Object"){o=a.constructor
if(typeof o=="function"){n=String(o).match(/^\s*function\s*([\w$]*)\s*\(/)
m=n==null?null:n[1]
if(typeof m==="string"&&/^\w+$/.test(m))r=m}}return r}r=r
return H.c4(r.length>1&&C.j.bm(r,0)===36?C.j.cS(r,1):r)},
kx:function(a){var u,t,s,r,q
u=a.length
if(u<=500)return String.fromCharCode.apply(null,a)
for(t="",s=0;s<u;s=r){r=s+500
q=r<u?r:u
t+=String.fromCharCode.apply(null,a.slice(s,q))}return t},
m4:function(a){var u,t,s,r
u=H.d([],[P.y])
for(t=a.length,s=0;s<a.length;a.length===t||(0,H.A)(a),++s){r=a[s]
if(typeof r!=="number"||Math.floor(r)!==r)throw H.i(H.ba(r))
if(r<=65535)C.a.h(u,r)
else if(r<=1114111){C.a.h(u,55296+(C.h.bp(r-65536,10)&1023))
C.a.h(u,56320+(r&1023))}else throw H.i(H.ba(r))}return H.kx(u)},
ky:function(a){var u,t,s
for(u=a.length,t=0;t<u;++t){s=a[t]
if(typeof s!=="number"||Math.floor(s)!==s)throw H.i(H.ba(s))
if(s<0)throw H.i(H.ba(s))
if(s>65535)return H.m4(a)}return H.kx(a)},
m3:function(a){var u
if(a<=65535)return String.fromCharCode(a)
if(a<=1114111){u=a-65536
return String.fromCharCode((55296|C.h.bp(u,10))>>>0,56320|u&1023)}throw H.i(P.aD(a,0,1114111,null,null))},
bQ:function(a){if(a.date===void 0)a.date=new Date(a.a)
return a.date},
m2:function(a){var u=H.bQ(a).getFullYear()+0
return u},
m0:function(a){var u=H.bQ(a).getMonth()+1
return u},
lX:function(a){var u=H.bQ(a).getDate()+0
return u},
lY:function(a){var u=H.bQ(a).getHours()+0
return u},
m_:function(a){var u=H.bQ(a).getMinutes()+0
return u},
m1:function(a){var u=H.bQ(a).getSeconds()+0
return u},
lZ:function(a){var u=H.bQ(a).getMilliseconds()+0
return u},
L:function(a){throw H.i(H.ba(a))},
h:function(a,b){if(a==null)J.c7(a)
throw H.i(H.c_(a,b))},
c_:function(a,b){var u,t
if(typeof b!=="number"||Math.floor(b)!==b)return new P.aN(!0,b,"index",null)
u=H.af(J.c7(a))
if(!(b<0)){if(typeof u!=="number")return H.L(u)
t=b>=u}else t=!0
if(t)return P.T(b,a,"index",null,u)
return P.dH(b,"index",null)},
mG:function(a,b,c){if(a>c)return new P.bS(0,c,!0,a,"start","Invalid value")
if(b!=null)if(b<a||b>c)return new P.bS(a,c,!0,b,"end","Invalid value")
return new P.aN(!0,b,"end",null)},
ba:function(a){return new P.aN(!0,a,null,null)},
mB:function(a){if(typeof a!=="number")throw H.i(H.ba(a))
return a},
i:function(a){var u
if(a==null)a=new P.dD()
u=new Error()
u.dartException=a
if("defineProperty" in Object){Object.defineProperty(u,"message",{get:H.le})
u.name=""}else u.toString=H.le
return u},
le:function(){return J.aw(this.dartException)},
q:function(a){throw H.i(a)},
A:function(a){throw H.i(P.cc(a))},
b7:function(a){var u,t,s,r,q,p
a=a.replace(String({}),'$receiver$').replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
u=a.match(/\\\$[a-zA-Z]+\\\$/g)
if(u==null)u=H.d([],[P.o])
t=u.indexOf("\\$arguments\\$")
s=u.indexOf("\\$argumentsExpr\\$")
r=u.indexOf("\\$expr\\$")
q=u.indexOf("\\$method\\$")
p=u.indexOf("\\$receiver\\$")
return new H.i9(a.replace(new RegExp('\\\\\\$arguments\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$argumentsExpr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$expr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$method\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$receiver\\\\\\$','g'),'((?:x|[^x])*)'),t,s,r,q,p)},
ia:function(a){return function($expr$){var $argumentsExpr$='$arguments$'
try{$expr$.$method$($argumentsExpr$)}catch(u){return u.message}}(a)},
kG:function(a){return function($expr$){try{$expr$.$method$}catch(u){return u.message}}(a)},
kr:function(a,b){return new H.hn(a,b==null?null:b.method)},
jK:function(a,b){var u,t
u=b==null
t=u?null:b.method
return new H.fQ(a,t,u?null:b.receiver)},
bH:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g
u=new H.jy(a)
if(a==null)return
if(typeof a!=="object")return a
if("dartException" in a)return u.$1(a.dartException)
else if(!("message" in a))return a
t=a.message
if("number" in a&&typeof a.number=="number"){s=a.number
r=s&65535
if((C.h.bp(s,16)&8191)===10)switch(r){case 438:return u.$1(H.jK(H.n(t)+" (Error "+r+")",null))
case 445:case 5007:return u.$1(H.kr(H.n(t)+" (Error "+r+")",null))}}if(a instanceof TypeError){q=$.lh()
p=$.li()
o=$.lj()
n=$.lk()
m=$.ln()
l=$.lo()
k=$.lm()
$.ll()
j=$.lq()
i=$.lp()
h=q.ai(t)
if(h!=null)return u.$1(H.jK(H.R(t),h))
else{h=p.ai(t)
if(h!=null){h.method="call"
return u.$1(H.jK(H.R(t),h))}else{h=o.ai(t)
if(h==null){h=n.ai(t)
if(h==null){h=m.ai(t)
if(h==null){h=l.ai(t)
if(h==null){h=k.ai(t)
if(h==null){h=n.ai(t)
if(h==null){h=j.ai(t)
if(h==null){h=i.ai(t)
g=h!=null}else g=!0}else g=!0}else g=!0}else g=!0}else g=!0}else g=!0}else g=!0
if(g)return u.$1(H.kr(H.R(t),h))}}return u.$1(new H.il(typeof t==="string"?t:""))}if(a instanceof RangeError){if(typeof t==="string"&&t.indexOf("call stack")!==-1)return new P.dO()
t=function(b){try{return String(b)}catch(f){}return null}(a)
return u.$1(new P.aN(!1,null,null,typeof t==="string"?t.replace(/^RangeError:\s*/,""):t))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof t==="string"&&t==="too much recursion")return new P.dO()
return a},
c2:function(a){var u
if(a==null)return new H.eE(a)
u=a.$cachedTrace
if(u!=null)return u
return a.$cachedTrace=new H.eE(a)},
mI:function(a,b){var u,t,s,r
u=a.length
for(t=0;t<u;t=r){s=t+1
r=s+1
b.a9(0,a[t],a[s])}return b},
mQ:function(a,b,c,d,e,f){H.k(a,"$ijG")
switch(H.af(b)){case 0:return a.$0()
case 1:return a.$1(c)
case 2:return a.$2(c,d)
case 3:return a.$3(c,d,e)
case 4:return a.$4(c,d,e,f)}throw H.i(P.r("Unsupported number of arguments for wrapped closure"))},
bZ:function(a,b){var u
H.af(b)
if(a==null)return
u=a.$identity
if(!!u)return u
u=function(c,d,e){return function(f,g,h,i){return e(c,d,f,g,h,i)}}(a,b,H.mQ)
a.$identity=u
return u},
lF:function(a,b,c,d,e,f,g){var u,t,s,r,q,p,o,n,m,l,k,j,i
u=b[0]
t=u.$callName
if(!!J.Z(d).$ib){u.$reflectionInfo=d
s=H.m5(u).r}else s=d
r=e?Object.create(new H.hP().constructor.prototype):Object.create(new H.c8(null,null,null,null).constructor.prototype)
r.$initialize=r.constructor
if(e)q=function static_tear_off(){this.$initialize()}
else{p=$.aO
if(typeof p!=="number")return p.n()
$.aO=p+1
p=new Function("a,b,c,d"+p,"this.$initialize(a,b,c,d"+p+")")
q=p}r.constructor=q
q.prototype=r
if(!e){o=H.kd(a,u,f)
o.$reflectionInfo=d}else{r.$static_name=g
o=u}if(typeof s=="number")n=function(h,a0){return function(){return h(a0)}}(H.mM,s)
else if(typeof s=="function")if(e)n=s
else{m=f?H.kb:H.jA
n=function(h,a0){return function(){return h.apply({$receiver:a0(this)},arguments)}}(s,m)}else throw H.i("Error in reflectionInfo.")
r.$S=n
r[t]=o
for(l=o,k=1;k<b.length;++k){j=b[k]
i=j.$callName
if(i!=null){j=e?j:H.kd(a,j,f)
r[i]=j}if(k===c){j.$reflectionInfo=d
l=j}}r.$C=l
r.$R=u.$R
r.$D=u.$D
return q},
lC:function(a,b,c,d){var u=H.jA
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,u)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,u)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,u)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,u)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,u)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,u)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,u)}},
kd:function(a,b,c){var u,t,s,r,q,p,o
if(c)return H.lE(a,b)
u=b.$stubName
t=b.length
s=a[u]
r=b==null?s==null:b===s
q=!r||t>=27
if(q)return H.lC(t,!r,u,b)
if(t===0){r=$.aO
if(typeof r!=="number")return r.n()
$.aO=r+1
p="self"+r
r="return function(){var "+p+" = this."
q=$.c9
if(q==null){q=H.fd("self")
$.c9=q}return new Function(r+H.n(q)+";return "+p+"."+H.n(u)+"();}")()}o="abcdefghijklmnopqrstuvwxyz".split("").splice(0,t).join(",")
r=$.aO
if(typeof r!=="number")return r.n()
$.aO=r+1
o+=r
r="return function("+o+"){return this."
q=$.c9
if(q==null){q=H.fd("self")
$.c9=q}return new Function(r+H.n(q)+"."+H.n(u)+"("+o+");}")()},
lD:function(a,b,c,d){var u,t
u=H.jA
t=H.kb
switch(b?-1:a){case 0:throw H.i(H.m8("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,u,t)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,u,t)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,u,t)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,u,t)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,u,t)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,u,t)
default:return function(e,f,g,h){return function(){h=[g(this)]
Array.prototype.push.apply(h,arguments)
return e.apply(f(this),h)}}(d,u,t)}},
lE:function(a,b){var u,t,s,r,q,p,o,n
u=$.c9
if(u==null){u=H.fd("self")
$.c9=u}t=$.ka
if(t==null){t=H.fd("receiver")
$.ka=t}s=b.$stubName
r=b.length
q=a[s]
p=b==null?q==null:b===q
o=!p||r>=28
if(o)return H.lD(r,!p,s,b)
if(r===1){u="return function(){return this."+H.n(u)+"."+H.n(s)+"(this."+H.n(t)+");"
t=$.aO
if(typeof t!=="number")return t.n()
$.aO=t+1
return new Function(u+t+"}")()}n="abcdefghijklmnopqrstuvwxyz".split("").splice(0,r-1).join(",")
u="return function("+n+"){return this."+H.n(u)+"."+H.n(s)+"(this."+H.n(t)+", "+n+");"
t=$.aO
if(typeof t!=="number")return t.n()
$.aO=t+1
return new Function(u+t+"}")()},
jZ:function(a,b,c,d,e,f,g){return H.lF(a,b,H.af(c),d,!!e,!!f,g)},
jA:function(a){return a.a},
kb:function(a){return a.c},
fd:function(a){var u,t,s,r,q
u=new H.c8("self","target","receiver","name")
t=J.fN(Object.getOwnPropertyNames(u))
for(s=t.length,r=0;r<s;++r){q=t[r]
if(u[q]===a)return q}},
R:function(a){if(a==null)return a
if(typeof a==="string")return a
throw H.i(H.aJ(a,"String"))},
nG:function(a){if(a==null)return a
if(typeof a==="number")return a
throw H.i(H.aJ(a,"double"))},
mW:function(a){if(a==null)return a
if(typeof a==="number")return a
throw H.i(H.aJ(a,"num"))},
l3:function(a){if(a==null)return a
if(typeof a==="boolean")return a
throw H.i(H.aJ(a,"bool"))},
af:function(a){if(a==null)return a
if(typeof a==="number"&&Math.floor(a)===a)return a
throw H.i(H.aJ(a,"int"))},
la:function(a,b){throw H.i(H.aJ(a,H.c4(H.R(b).substring(2))))},
mY:function(a,b){throw H.i(H.lB(a,H.c4(H.R(b).substring(2))))},
k:function(a,b){if(a==null)return a
if((typeof a==="object"||typeof a==="function")&&J.Z(a)[b])return a
H.la(a,b)},
c:function(a,b){var u
if(a!=null)u=(typeof a==="object"||typeof a==="function")&&J.Z(a)[b]
else u=!0
if(u)return a
H.mY(a,b)},
k2:function(a){if(a==null)return a
if(!!J.Z(a).$ib)return a
throw H.i(H.aJ(a,"List<dynamic>"))},
mS:function(a,b){var u
if(a==null)return a
u=J.Z(a)
if(!!u.$ib)return a
if(u[b])return a
H.la(a,b)},
l4:function(a){var u
if("$S" in a){u=a.$S
if(typeof u=="number")return v.types[H.af(u)]
else return a.$S()}return},
f_:function(a,b){var u
if(a==null)return!1
if(typeof a=="function")return!0
u=H.l4(J.Z(a))
if(u==null)return!1
return H.kV(u,null,b,null)},
l:function(a,b){var u,t
if(a==null)return a
if($.jU)return a
$.jU=!0
try{if(H.f_(a,b))return a
u=H.jv(b)
t=H.aJ(a,u)
throw H.i(t)}finally{$.jU=!1}},
k_:function(a,b){if(a!=null&&!H.jY(a,b))H.q(H.aJ(a,H.jv(b)))
return a},
aJ:function(a,b){return new H.ib("TypeError: "+P.fy(a)+": type '"+H.kZ(a)+"' is not a subtype of type '"+b+"'")},
lB:function(a,b){return new H.fe("CastError: "+P.fy(a)+": type '"+H.kZ(a)+"' is not a subtype of type '"+b+"'")},
kZ:function(a){var u,t
u=J.Z(a)
if(!!u.$ica){t=H.l4(u)
if(t!=null)return H.jv(t)
return"Closure"}return H.bR(a)},
n1:function(a){throw H.i(new P.fn(H.R(a)))},
m8:function(a){return new H.hC(a)},
l5:function(a){return v.getIsolateTag(a)},
d:function(a,b){a.$ti=b
return a},
bG:function(a){if(a==null)return
return a.$ti},
nH:function(a,b,c){return H.c3(a["$a"+H.n(c)],H.bG(b))},
c1:function(a,b,c,d){var u
H.R(c)
H.af(d)
u=H.c3(a["$a"+H.n(c)],H.bG(b))
return u==null?null:u[d]},
aA:function(a,b,c){var u
H.R(b)
H.af(c)
u=H.c3(a["$a"+H.n(b)],H.bG(a))
return u==null?null:u[c]},
w:function(a,b){var u
H.af(b)
u=H.bG(a)
return u==null?null:u[b]},
jv:function(a){return H.bF(a,null)},
bF:function(a,b){var u,t
H.j(b,"$ib",[P.o],"$ab")
if(a==null)return"dynamic"
if(a===-1)return"void"
if(typeof a==="object"&&a!==null&&a.constructor===Array)return H.c4(a[0].name)+H.jX(a,1,b)
if(typeof a=="function")return H.c4(a.name)
if(a===-2)return"dynamic"
if(typeof a==="number"){H.af(a)
if(b==null||a<0||a>=b.length)return"unexpected-generic-index:"+a
u=b.length
t=u-a-1
if(t<0||t>=u)return H.h(b,t)
return H.n(b[t])}if('func' in a)return H.mr(a,b)
if('futureOr' in a)return"FutureOr<"+H.bF("type" in a?a.type:null,b)+">"
return"unknown-reified-type"},
mr:function(a,b){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c
u=[P.o]
H.j(b,"$ib",u,"$ab")
if("bounds" in a){t=a.bounds
if(b==null){b=H.d([],u)
s=null}else s=b.length
r=b.length
for(q=t.length,p=q;p>0;--p)C.a.h(b,"T"+(r+p))
for(o="<",n="",p=0;p<q;++p,n=", "){o+=n
u=b.length
m=u-p-1
if(m<0)return H.h(b,m)
o=C.j.n(o,b[m])
l=t[p]
if(l!=null&&l!==P.M)o+=" extends "+H.bF(l,b)}o+=">"}else{o=""
s=null}k=!!a.v?"void":H.bF(a.ret,b)
if("args" in a){j=a.args
for(u=j.length,i="",h="",g=0;g<u;++g,h=", "){f=j[g]
i=i+h+H.bF(f,b)}}else{i=""
h=""}if("opt" in a){e=a.opt
i+=h+"["
for(u=e.length,h="",g=0;g<u;++g,h=", "){f=e[g]
i=i+h+H.bF(f,b)}i+="]"}if("named" in a){d=a.named
i+=h+"{"
for(u=H.mH(d),m=u.length,h="",g=0;g<m;++g,h=", "){c=H.R(u[g])
i=i+h+H.bF(d[c],b)+(" "+H.n(c))}i+="}"}if(s!=null)b.length=s
return o+"("+i+") => "+k},
jX:function(a,b,c){var u,t,s,r,q,p
H.j(c,"$ib",[P.o],"$ab")
if(a==null)return""
u=new P.bA("")
for(t=b,s="",r=!0,q="";t<a.length;++t,s=", "){u.a=q+s
p=a[t]
if(p!=null)r=!1
q=u.a+=H.bF(p,c)}return"<"+u.i(0)+">"},
c3:function(a,b){if(a==null)return b
a=a.apply(null,b)
if(a==null)return
if(typeof a==="object"&&a!==null&&a.constructor===Array)return a
if(typeof a=="function")return a.apply(null,b)
return b},
cY:function(a,b,c,d){var u,t
H.R(b)
H.k2(c)
H.R(d)
if(a==null)return!1
u=H.bG(a)
t=J.Z(a)
if(t[b]==null)return!1
return H.l1(H.c3(t[d],u),null,c,null)},
j:function(a,b,c,d){H.R(b)
H.k2(c)
H.R(d)
if(a==null)return a
if(H.cY(a,b,c,d))return a
throw H.i(H.aJ(a,function(e,f){return e.replace(/[^<,> ]+/g,function(g){return f[g]||g})}(H.c4(b.substring(2))+H.jX(c,0,null),v.mangledGlobalNames)))},
l1:function(a,b,c,d){var u,t
if(c==null)return!0
if(a==null){u=c.length
for(t=0;t<u;++t)if(!H.az(null,null,c[t],d))return!1
return!0}u=a.length
for(t=0;t<u;++t)if(!H.az(a[t],b,c[t],d))return!1
return!0},
nE:function(a,b,c){return a.apply(b,H.c3(J.Z(b)["$a"+H.n(c)],H.bG(b)))},
l7:function(a){var u
if(typeof a==="number")return!1
if('futureOr' in a){u="type" in a?a.type:null
return a==null||a.name==="M"||a.name==="J"||a===-1||a===-2||H.l7(u)}return!1},
jY:function(a,b){var u,t
if(a==null)return b==null||b.name==="M"||b.name==="J"||b===-1||b===-2||H.l7(b)
if(b==null||b===-1||b.name==="M"||b===-2)return!0
if(typeof b=="object"){if('futureOr' in b)if(H.jY(a,"type" in b?b.type:null))return!0
if('func' in b)return H.f_(a,b)}u=J.Z(a).constructor
t=H.bG(a)
if(t!=null){t=t.slice()
t.splice(0,0,u)
u=t}return H.az(u,null,b,null)},
D:function(a,b){if(a!=null&&!H.jY(a,b))throw H.i(H.aJ(a,H.jv(b)))
return a},
az:function(a,b,c,d){var u,t,s,r,q,p,o,n,m
if(a===c)return!0
if(c==null||c===-1||c.name==="M"||c===-2)return!0
if(a===-2)return!0
if(a==null||a===-1||a.name==="M"||a===-2){if(typeof c==="number")return!1
if('futureOr' in c)return H.az(a,b,"type" in c?c.type:null,d)
return!1}if(typeof a==="number")return!1
if(typeof c==="number")return!1
if(a.name==="J")return!0
if('func' in c)return H.kV(a,b,c,d)
if('func' in a)return c.name==="jG"
u=typeof a==="object"&&a!==null&&a.constructor===Array
t=u?a[0]:a
if('futureOr' in c){s="type" in c?c.type:null
if('futureOr' in a)return H.az("type" in a?a.type:null,b,s,d)
else if(H.az(a,b,s,d))return!0
else{if(!('$i'+"ci" in t.prototype))return!1
r=t.prototype["$a"+"ci"]
q=H.c3(r,u?a.slice(1):null)
return H.az(typeof q==="object"&&q!==null&&q.constructor===Array?q[0]:null,b,s,d)}}p=typeof c==="object"&&c!==null&&c.constructor===Array
o=p?c[0]:c
if(o!==t){n=o.name
if(!('$i'+n in t.prototype))return!1
m=t.prototype["$a"+n]}else m=null
if(!p)return!0
u=u?a.slice(1):null
p=c.slice(1)
return H.l1(H.c3(m,u),b,p,d)},
kV:function(a,b,c,d){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g
if(!('func' in a))return!1
if("bounds" in a){if(!("bounds" in c))return!1
u=a.bounds
t=c.bounds
if(u.length!==t.length)return!1}else if("bounds" in c)return!1
if(!H.az(a.ret,b,c.ret,d))return!1
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
for(k=0;k<o;++k)if(!H.az(r[k],d,s[k],b))return!1
for(j=k,i=0;j<n;++i,++j)if(!H.az(r[j],d,q[i],b))return!1
for(j=0;j<l;++i,++j)if(!H.az(p[j],d,q[i],b))return!1
h=a.named
g=c.named
if(g==null)return!0
if(h==null)return!1
return H.mV(h,b,g,d)},
mV:function(a,b,c,d){var u,t,s,r
u=Object.getOwnPropertyNames(c)
for(t=u.length,s=0;s<t;++s){r=u[s]
if(!Object.hasOwnProperty.call(a,r))return!1
if(!H.az(c[r],d,a[r],b))return!1}return!0},
nF:function(a,b,c){Object.defineProperty(a,H.R(b),{value:c,enumerable:false,writable:true,configurable:true})},
mT:function(a){var u,t,s,r,q,p
u=H.R($.l6.$1(a))
t=$.jo[u]
if(t!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:t,enumerable:false,writable:true,configurable:true})
return t.i}s=$.jt[u]
if(s!=null)return s
r=v.interceptorsByTag[u]
if(r==null){u=H.R($.l0.$2(a,u))
if(u!=null){t=$.jo[u]
if(t!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:t,enumerable:false,writable:true,configurable:true})
return t.i}s=$.jt[u]
if(s!=null)return s
r=v.interceptorsByTag[u]}}if(r==null)return
s=r.prototype
q=u[0]
if(q==="!"){t=H.ju(s)
$.jo[u]=t
Object.defineProperty(a,v.dispatchPropertyName,{value:t,enumerable:false,writable:true,configurable:true})
return t.i}if(q==="~"){$.jt[u]=s
return s}if(q==="-"){p=H.ju(s)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}if(q==="+")return H.l9(a,s)
if(q==="*")throw H.i(P.kH(u))
if(v.leafTags[u]===true){p=H.ju(s)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}else return H.l9(a,s)},
l9:function(a,b){var u=Object.getPrototypeOf(a)
Object.defineProperty(u,v.dispatchPropertyName,{value:J.k3(b,u,null,null),enumerable:false,writable:true,configurable:true})
return b},
ju:function(a){return J.k3(a,!1,null,!!a.$iF)},
mU:function(a,b,c){var u=b.prototype
if(v.leafTags[a]===true)return H.ju(u)
else return J.k3(u,c,null,null)},
mO:function(){if(!0===$.k1)return
$.k1=!0
H.mP()},
mP:function(){var u,t,s,r,q,p,o,n
$.jo=Object.create(null)
$.jt=Object.create(null)
H.mN()
u=v.interceptorsByTag
t=Object.getOwnPropertyNames(u)
if(typeof window!="undefined"){window
s=function(){}
for(r=0;r<t.length;++r){q=t[r]
p=$.lb.$1(q)
if(p!=null){o=H.mU(q,u[q],p)
if(o!=null){Object.defineProperty(p,v.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
s.prototype=p}}}}for(r=0;r<t.length;++r){q=t[r]
if(/^[A-Za-z_]/.test(q)){n=u[q]
u["!"+q]=n
u["~"+q]=n
u["-"+q]=n
u["+"+q]=n
u["*"+q]=n}}},
mN:function(){var u,t,s,r,q,p,o
u=C.I()
u=H.bY(C.F,H.bY(C.K,H.bY(C.t,H.bY(C.t,H.bY(C.J,H.bY(C.G,H.bY(C.H(C.u),u)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){t=dartNativeDispatchHooksTransformer
if(typeof t=="function")t=[t]
if(t.constructor==Array)for(s=0;s<t.length;++s){r=t[s]
if(typeof r=="function")u=r(u)||u}}q=u.getTag
p=u.getUnknownTag
o=u.prototypeForTag
$.l6=new H.jq(q)
$.l0=new H.jr(p)
$.lb=new H.js(o)},
bY:function(a,b){return a(b)||b},
lP:function(a,b,c,d){var u,t,s,r
u=b?"m":""
t=c?"":"i"
s=d?"g":""
r=function(e,f){try{return new RegExp(e,f)}catch(q){return q}}(a,u+t+s)
if(r instanceof RegExp)return r
throw H.i(new P.fI("Illegal RegExp pattern ("+String(r)+")",a,null))},
n0:function(a,b,c){var u=a.indexOf(b,c)
return u>=0},
lc:function(a,b,c){var u,t,s
if(b==="")if(a==="")return c
else{u=a.length
for(t=c,s=0;s<u;++s)t=t+a[s]+c
return t.charCodeAt(0)==0?t:t}else return a.replace(new RegExp(b.replace(/[[\]{}()*+?.\\^$|]/g,"\\$&"),'g'),c.replace(/\$/g,"$$$$"))},
hv:function hv(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.x=null},
i9:function i9(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
hn:function hn(a,b){this.a=a
this.b=b},
fQ:function fQ(a,b,c){this.a=a
this.b=b
this.c=c},
il:function il(a){this.a=a},
jy:function jy(a){this.a=a},
eE:function eE(a){this.a=a
this.b=null},
ca:function ca(){},
hX:function hX(){},
hP:function hP(){},
c8:function c8(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
ib:function ib(a){this.a=a},
fe:function fe(a){this.a=a},
hC:function hC(a){this.a=a},
aV:function aV(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
fU:function fU(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
dr:function dr(a,b){this.a=a
this.$ti=b},
fV:function fV(a,b,c){var _=this
_.a=a
_.b=b
_.d=_.c=null
_.$ti=c},
jq:function jq(a){this.a=a},
jr:function jr(a){this.a=a},
js:function js(a){this.a=a},
fP:function fP(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
bW:function(a){return a},
bE:function(a,b,c){if(a>>>0!==a||a>=c)throw H.i(H.c_(b,a))},
mq:function(a,b,c){var u
if(!(a>>>0!==a))u=b>>>0!==b||a>b||b>c
else u=!0
if(u)throw H.i(H.mG(a,b,c))
return b},
cq:function cq(){},
dy:function dy(){},
cp:function cp(){},
dz:function dz(){},
hf:function hf(){},
hg:function hg(){},
hh:function hh(){},
hi:function hi(){},
hj:function hj(){},
dA:function dA(){},
hk:function hk(){},
cN:function cN(){},
cO:function cO(){},
cP:function cP(){},
cQ:function cQ(){},
mH:function(a){return J.kj(a?Object.keys(a):[],null)},
mX:function(a){if(typeof dartPrint=="function"){dartPrint(a)
return}if(typeof console=="object"&&typeof console.log!="undefined"){console.log(a)
return}if(typeof window=="object")return
if(typeof print=="function"){print(a)
return}throw"Unable to print message: "+String(a)}},J={
k3:function(a,b,c,d){return{i:a,p:b,e:c,x:d}},
f1:function(a){var u,t,s,r,q
u=a[v.dispatchPropertyName]
if(u==null)if($.k1==null){H.mO()
u=a[v.dispatchPropertyName]}if(u!=null){t=u.p
if(!1===t)return u.i
if(!0===t)return a
s=Object.getPrototypeOf(a)
if(t===s)return u.i
if(u.e===s)throw H.i(P.kH("Return interceptor for "+H.n(t(a,u))))}r=a.constructor
q=r==null?null:r[$.k4()]
if(q!=null)return q
q=H.mT(a)
if(q!=null)return q
if(typeof a=="function")return C.L
t=Object.getPrototypeOf(a)
if(t==null)return C.v
if(t===Object.prototype)return C.v
if(typeof r=="function"){Object.defineProperty(r,$.k4(),{value:C.p,enumerable:false,writable:true,configurable:true})
return C.p}return C.p},
lO:function(a,b){if(typeof a!=="number"||Math.floor(a)!==a)throw H.i(P.jz(a,"length","is not an integer"))
if(a<0||a>4294967295)throw H.i(P.aD(a,0,4294967295,"length",null))
return J.kj(new Array(a),b)},
kj:function(a,b){return J.fN(H.d(a,[b]))},
fN:function(a){H.k2(a)
a.fixed$length=Array
return a},
Z:function(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.dl.prototype
return J.dk.prototype}if(typeof a=="string")return J.bx.prototype
if(a==null)return J.dm.prototype
if(typeof a=="boolean")return J.fO.prototype
if(a.constructor==Array)return J.aB.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bc.prototype
return a}if(a instanceof P.M)return a
return J.f1(a)},
mJ:function(a){if(typeof a=="number")return J.bw.prototype
if(typeof a=="string")return J.bx.prototype
if(a==null)return a
if(a.constructor==Array)return J.aB.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bc.prototype
return a}if(a instanceof P.M)return a
return J.f1(a)},
jp:function(a){if(typeof a=="string")return J.bx.prototype
if(a==null)return a
if(a.constructor==Array)return J.aB.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bc.prototype
return a}if(a instanceof P.M)return a
return J.f1(a)},
k0:function(a){if(a==null)return a
if(a.constructor==Array)return J.aB.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bc.prototype
return a}if(a instanceof P.M)return a
return J.f1(a)},
mK:function(a){if(typeof a=="number")return J.bw.prototype
if(a==null)return a
if(!(a instanceof P.M))return J.bV.prototype
return a},
mL:function(a){if(typeof a=="number")return J.bw.prototype
if(typeof a=="string")return J.bx.prototype
if(a==null)return a
if(!(a instanceof P.M))return J.bV.prototype
return a},
f0:function(a){if(a==null)return a
if(typeof a!="object"){if(typeof a=="function")return J.bc.prototype
return a}if(a instanceof P.M)return a
return J.f1(a)},
lv:function(a,b){if(typeof a=="number"&&typeof b=="number")return a+b
return J.mJ(a).n(a,b)},
K:function(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.Z(a).t(a,b)},
k6:function(a,b){if(typeof a=="number"&&typeof b=="number")return a*b
return J.mL(a).v(a,b)},
lw:function(a,b){if(typeof a=="number"&&typeof b=="number")return a-b
return J.mK(a).p(a,b)},
lx:function(a,b){if(typeof b==="number")if(a.constructor==Array||typeof a=="string"||H.mR(a,a[v.dispatchPropertyName]))if(b>>>0===b&&b<a.length)return a[b]
return J.jp(a).j(a,b)},
ly:function(a,b,c,d){return J.f0(a).j1(a,b,c,d)},
k7:function(a,b){return J.f0(a).a6(a,b)},
k8:function(a,b){return J.k0(a).I(a,b)},
lz:function(a,b){return J.k0(a).R(a,b)},
bI:function(a){return J.Z(a).gK(a)},
c6:function(a){return J.k0(a).gU(a)},
c7:function(a){return J.jp(a).gk(a)},
aw:function(a){return J.Z(a).i(a)},
a:function a(){},
fO:function fO(){},
dm:function dm(){},
dn:function dn(){},
hr:function hr(){},
bV:function bV(){},
bc:function bc(){},
aB:function aB(a){this.$ti=a},
jI:function jI(a){this.$ti=a},
ao:function ao(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=null
_.$ti=d},
bw:function bw(){},
dl:function dl(){},
dk:function dk(){},
bx:function bx(){}},P={
mh:function(){var u,t,s
u={}
if(self.scheduleImmediate!=null)return P.my()
if(self.MutationObserver!=null&&self.document!=null){t=self.document.createElement("div")
s=self.document.createElement("span")
u.a=null
new self.MutationObserver(H.bZ(new P.iJ(u),1)).observe(t,{childList:true})
return new P.iI(u,t,s)}else if(self.setImmediate!=null)return P.mz()
return P.mA()},
mi:function(a){self.scheduleImmediate(H.bZ(new P.iK(H.l(a,{func:1,ret:-1})),0))},
mj:function(a){self.setImmediate(H.bZ(new P.iL(H.l(a,{func:1,ret:-1})),0))},
mk:function(a){P.jQ(C.n,H.l(a,{func:1,ret:-1}))},
jQ:function(a,b){var u
H.l(b,{func:1,ret:-1})
u=C.h.a5(a.a,1000)
return P.mn(u<0?0:u,b)},
kF:function(a,b){var u
H.l(b,{func:1,ret:-1,args:[P.b5]})
u=C.h.a5(a.a,1000)
return P.mo(u<0?0:u,b)},
mn:function(a,b){var u=new P.eK(!0)
u.fc(a,b)
return u},
mo:function(a,b){var u=new P.eK(!1)
u.fd(a,b)
return u},
ml:function(a,b){var u,t,s
b.a=1
try{a.ev(new P.iT(b),new P.iU(b),null)}catch(s){u=H.bH(s)
t=H.c2(s)
P.mZ(new P.iV(b,u,t))}},
kR:function(a,b){var u,t
for(;u=a.a,u===2;)a=H.k(a.c,"$iay")
if(u>=4){t=b.c3()
b.a=a.a
b.c=a.c
P.cL(b,t)}else{t=H.k(b.c,"$ib9")
b.a=2
b.c=a
a.dm(t)}},
cL:function(a,b){var u,t,s,r,q,p,o,n,m,l,k,j,i,h
u={}
u.a=a
for(t=a;!0;){s={}
r=t.a===8
if(b==null){if(r){q=H.k(t.c,"$iaj")
t=t.b
p=q.a
o=q.b
t.toString
P.jj(null,null,t,p,o)}return}for(;n=b.a,n!=null;b=n){b.a=null
P.cL(u.a,b)}t=u.a
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
if(k){H.k(m,"$iaj")
t=t.b
p=m.a
o=m.b
t.toString
P.jj(null,null,t,p,o)
return}j=$.W
if(j!=l)$.W=l
else j=null
t=b.c
if(t===8)new P.iZ(u,s,b,r).$0()
else if(p){if((t&1)!==0)new P.iY(s,b,m).$0()}else if((t&2)!==0)new P.iX(u,s,b).$0()
if(j!=null)$.W=j
t=s.b
if(!!J.Z(t).$ici){if(t.a>=4){i=H.k(o.c,"$ib9")
o.c=null
b=o.bo(i)
o.a=t.a
o.c=t.c
u.a=t
continue}else P.kR(t,o)
return}}h=b.b
i=H.k(h.c,"$ib9")
h.c=null
b=h.bo(i)
t=s.a
p=s.b
if(!t){H.D(p,H.w(h,0))
h.a=4
h.c=p}else{H.k(p,"$iaj")
h.a=8
h.c=p}u.a=h
t=h}},
mu:function(a,b){if(H.f_(a,{func:1,args:[P.M,P.aq]}))return H.l(a,{func:1,ret:null,args:[P.M,P.aq]})
if(H.f_(a,{func:1,args:[P.M]}))return H.l(a,{func:1,ret:null,args:[P.M]})
throw H.i(P.jz(a,"onError","Error handler must accept one Object or one Object and a StackTrace as arguments, and return a a valid result"))},
mt:function(){var u,t
for(;u=$.bX,u!=null;){$.cX=null
t=u.b
$.bX=t
if(t==null)$.cW=null
u.a.$0()}},
mx:function(){$.jV=!0
try{P.mt()}finally{$.cX=null
$.jV=!1
if($.bX!=null)$.k5().$1(P.l2())}},
kY:function(a){var u=new P.e8(H.l(a,{func:1,ret:-1}))
if($.bX==null){$.cW=u
$.bX=u
if(!$.jV)$.k5().$1(P.l2())}else{$.cW.b=u
$.cW=u}},
mw:function(a){var u,t,s
H.l(a,{func:1,ret:-1})
u=$.bX
if(u==null){P.kY(a)
$.cX=$.cW
return}t=new P.e8(a)
s=$.cX
if(s==null){t.b=u
$.cX=t
$.bX=t}else{t.b=s.b
s.b=t
$.cX=t
if(t.b==null)$.cW=t}},
mZ:function(a){var u,t
u={func:1,ret:-1}
H.l(a,u)
t=$.W
if(C.k===t){P.jl(null,null,C.k,a)
return}t.toString
P.jl(null,null,t,H.l(t.cg(a),u))},
kE:function(a,b){var u,t
u={func:1,ret:-1}
H.l(b,u)
t=$.W
if(t===C.k){t.toString
return P.jQ(a,b)}return P.jQ(a,H.l(t.cg(b),u))},
mg:function(a,b){var u,t,s
u={func:1,ret:-1,args:[P.b5]}
H.l(b,u)
t=$.W
if(t===C.k){t.toString
return P.kF(a,b)}s=t.dC(b,P.b5)
$.W.toString
return P.kF(a,H.l(s,u))},
jj:function(a,b,c,d,e){var u={}
u.a=d
P.mw(new P.jk(u,e))},
kW:function(a,b,c,d,e){var u,t
H.l(d,{func:1,ret:e})
t=$.W
if(t===c)return d.$0()
$.W=c
u=t
try{t=d.$0()
return t}finally{$.W=u}},
kX:function(a,b,c,d,e,f,g){var u,t
H.l(d,{func:1,ret:f,args:[g]})
H.D(e,g)
t=$.W
if(t===c)return d.$1(e)
$.W=c
u=t
try{t=d.$1(e)
return t}finally{$.W=u}},
mv:function(a,b,c,d,e,f,g,h,i){var u,t
H.l(d,{func:1,ret:g,args:[h,i]})
H.D(e,h)
H.D(f,i)
t=$.W
if(t===c)return d.$2(e,f)
$.W=c
u=t
try{t=d.$2(e,f)
return t}finally{$.W=u}},
jl:function(a,b,c,d){var u
H.l(d,{func:1,ret:-1})
u=C.k!==c
if(u)d=!(!u||!1)?c.cg(d):c.j7(d,-1)
P.kY(d)},
iJ:function iJ(a){this.a=a},
iI:function iI(a,b,c){this.a=a
this.b=b
this.c=c},
iK:function iK(a){this.a=a},
iL:function iL(a){this.a=a},
eK:function eK(a){this.a=a
this.b=null
this.c=0},
je:function je(a,b){this.a=a
this.b=b},
jd:function jd(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
b9:function b9(a,b,c,d,e){var _=this
_.a=null
_.b=a
_.c=b
_.d=c
_.e=d
_.$ti=e},
ay:function ay(a,b,c){var _=this
_.a=a
_.b=b
_.c=null
_.$ti=c},
iS:function iS(a,b){this.a=a
this.b=b},
iW:function iW(a,b){this.a=a
this.b=b},
iT:function iT(a){this.a=a},
iU:function iU(a){this.a=a},
iV:function iV(a,b,c){this.a=a
this.b=b
this.c=c},
iZ:function iZ(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
j_:function j_(a){this.a=a},
iY:function iY(a,b,c){this.a=a
this.b=b
this.c=c},
iX:function iX(a,b,c){this.a=a
this.b=b
this.c=c},
e8:function e8(a){this.a=a
this.b=null},
hS:function hS(){},
hU:function hU(a,b){this.a=a
this.b=b},
hV:function hV(a,b){this.a=a
this.b=b},
cy:function cy(){},
hT:function hT(){},
b5:function b5(){},
aj:function aj(a,b){this.a=a
this.b=b},
jg:function jg(){},
jk:function jk(a,b){this.a=a
this.b=b},
j6:function j6(){},
j8:function j8(a,b,c){this.a=a
this.b=b
this.c=c},
j7:function j7(a,b){this.a=a
this.b=b},
j9:function j9(a,b,c){this.a=a
this.b=b
this.c=c},
lR:function(a,b){return new H.aV([a,b])},
lS:function(a){return H.mI(a,new H.aV([null,null]))},
lT:function(a,b,c,d){return new P.j3([d])},
kU:function(){var u=Object.create(null)
u["<non-identifier-key>"]=u
delete u["<non-identifier-key>"]
return u},
kT:function(a,b,c){var u=new P.j4(a,b,[c])
u.c=a.e
return u},
lM:function(a,b,c){var u,t
if(P.jW(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}u=H.d([],[P.o])
t=$.d1()
C.a.h(t,a)
try{P.ms(a,u)}finally{if(0>=t.length)return H.h(t,-1)
t.pop()}t=P.kA(b,H.mS(u,"$ie"),", ")+c
return t.charCodeAt(0)==0?t:t},
jH:function(a,b,c){var u,t,s
if(P.jW(a))return b+"..."+c
u=new P.bA(b)
t=$.d1()
C.a.h(t,a)
try{s=u
s.a=P.kA(s.a,a,", ")}finally{if(0>=t.length)return H.h(t,-1)
t.pop()}u.a+=c
t=u.a
return t.charCodeAt(0)==0?t:t},
jW:function(a){var u,t
for(u=0;t=$.d1(),u<t.length;++u)if(a===t[u])return!0
return!1},
ms:function(a,b){var u,t,s,r,q,p,o,n,m,l
H.j(b,"$ib",[P.o],"$ab")
u=a.gU(a)
t=0
s=0
while(!0){if(!(t<80||s<3))break
if(!u.C())return
r=H.n(u.gM(u))
C.a.h(b,r)
t+=r.length+2;++s}if(!u.C()){if(s<=5)return
if(0>=b.length)return H.h(b,-1)
q=b.pop()
if(0>=b.length)return H.h(b,-1)
p=b.pop()}else{o=u.gM(u);++s
if(!u.C()){if(s<=4){C.a.h(b,H.n(o))
return}q=H.n(o)
if(0>=b.length)return H.h(b,-1)
p=b.pop()
t+=q.length+2}else{n=u.gM(u);++s
for(;u.C();o=n,n=m){m=u.gM(u);++s
if(s>100){while(!0){if(!(t>75&&s>3))break
if(0>=b.length)return H.h(b,-1)
t-=b.pop().length+2;--s}C.a.h(b,"...")
return}}p=H.n(o)
q=H.n(n)
t+=q.length+p.length+4}}if(s>b.length+2){t+=5
l="..."}else l=null
while(!0){if(!(t>80&&b.length>3))break
if(0>=b.length)return H.h(b,-1)
t-=b.pop().length+2
if(l==null){t+=5
l="..."}}if(l!=null)C.a.h(b,l)
C.a.h(b,p)
C.a.h(b,q)},
kl:function(a){var u,t
u={}
if(P.jW(a))return"{...}"
t=new P.bA("")
try{C.a.h($.d1(),a)
t.a+="{"
u.a=!0
J.lz(a,new P.h_(u,t))
t.a+="}"}finally{u=$.d1()
if(0>=u.length)return H.h(u,-1)
u.pop()}u=t.a
return u.charCodeAt(0)==0?u:u},
j3:function j3(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
cM:function cM(a){this.a=a
this.c=this.b=null},
j4:function j4(a,b,c){var _=this
_.a=a
_.b=b
_.d=_.c=null
_.$ti=c},
fW:function fW(){},
u:function u(){},
fZ:function fZ(){},
h_:function h_(a,b){this.a=a
this.b=b},
ah:function ah(){},
ja:function ja(){},
en:function en(){},
cb:function cb(){},
da:function da(){},
fw:function fw(){},
ip:function ip(a){this.a=a},
iq:function iq(){},
jf:function jf(a){this.b=this.a=0
this.c=a},
lL:function(a){if(a instanceof H.ca)return a.i(0)
return"Instance of '"+H.bR(a)+"'"},
lU:function(a,b,c,d){var u,t
H.D(b,d)
u=J.lO(a,d)
if(a!==0&&!0)for(t=0;t<u.length;++t)C.a.a9(u,t,b)
return H.j(u,"$ib",[d],"$ab")},
kk:function(a,b,c){var u,t,s
u=[c]
t=H.d([],u)
for(s=J.c6(a);s.C();)C.a.h(t,H.D(s.gM(s),c))
if(b)return t
return H.j(J.fN(t),"$ib",u,"$ab")},
jP:function(a,b,c){var u,t
u=P.y
H.j(a,"$ie",[u],"$ae")
if(a.constructor===Array){H.j(a,"$iaB",[u],"$aaB")
t=a.length
c=P.jM(b,c,t,null,null,null)
return H.ky(b>0||c<t?C.a.eQ(a,b,c):a)}return P.mc(a,b,c)},
mc:function(a,b,c){var u,t,s
H.j(a,"$ie",[P.y],"$ae")
u=J.c6(a)
for(t=0;t<b;++t)if(!u.C())throw H.i(P.aD(b,0,t,null,null))
s=[]
for(;u.C();)s.push(u.gM(u))
return H.ky(s)},
m6:function(a,b,c){return new H.fP(a,H.lP(a,!1,!0,!1))},
kA:function(a,b,c){var u=J.c6(b)
if(!u.C())return a
if(c.length===0){do a+=H.n(u.gM(u))
while(u.C())}else{a+=H.n(u.gM(u))
for(;u.C();)a=a+c+H.n(u.gM(u))}return a},
mp:function(a,b,c,d){var u,t,s,r,q,p
H.j(a,"$ib",[P.y],"$ab")
if(c===C.w){u=$.lu().b
u=u.test(b)}else u=!1
if(u)return b
t=C.A.jb(H.D(b,H.aA(c,"cb",0)))
for(u=t.length,s=0,r="";s<u;++s){q=t[s]
if(q<128){p=q>>>4
if(p>=8)return H.h(a,p)
p=(a[p]&1<<(q&15))!==0}else p=!1
if(p)r+=H.m3(q)
else r=r+"%"+"0123456789ABCDEF"[q>>>4&15]+"0123456789ABCDEF"[q&15]}return r.charCodeAt(0)==0?r:r},
lG:function(a){var u,t
u=Math.abs(a)
t=a<0?"-":""
if(u>=1000)return""+a
if(u>=100)return t+"0"+u
if(u>=10)return t+"00"+u
return t+"000"+u},
lH:function(a){if(a>=100)return""+a
if(a>=10)return"0"+a
return"00"+a},
dc:function(a){if(a>=10)return""+a
return"0"+a},
kf:function(a,b,c,d,e,f){return new P.aR(864e8*a+36e8*b+6e7*e+1e6*f+1000*d+c)},
fy:function(a){if(typeof a==="number"||typeof a==="boolean"||null==a)return J.aw(a)
if(typeof a==="string")return JSON.stringify(a)
return P.lL(a)},
lA:function(a){return new P.aN(!1,null,null,a)},
jz:function(a,b,c){return new P.aN(!0,a,b,c)},
dH:function(a,b,c){return new P.bS(null,null,!0,a,b,"Value not in range")},
aD:function(a,b,c,d,e){return new P.bS(b,c,!0,a,d,"Invalid value")},
jM:function(a,b,c,d,e,f){if(0>a||a>c)throw H.i(P.aD(a,0,c,"start",f))
if(b!=null){if(a>b||b>c)throw H.i(P.aD(b,a,c,"end",f))
return b}return c},
T:function(a,b,c,d,e){var u=H.af(e==null?J.c7(b):e)
return new P.fM(b,u,!0,a,c,"Index out of range")},
al:function(a){return new P.im(a)},
kH:function(a){return new P.ik(a)},
cc:function(a){return new P.fi(a)},
r:function(a){return new P.eg(a)},
ar:function(a){H.mX(a)},
a4:function a4(){},
ap:function ap(a,b){this.a=a
this.b=b},
x:function x(){},
aR:function aR(a){this.a=a},
ft:function ft(){},
fu:function fu(){},
bq:function bq(){},
dD:function dD(){},
aN:function aN(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
bS:function bS(a,b,c,d,e,f){var _=this
_.e=a
_.f=b
_.a=c
_.b=d
_.c=e
_.d=f},
fM:function fM(a,b,c,d,e,f){var _=this
_.e=a
_.f=b
_.a=c
_.b=d
_.c=e
_.d=f},
im:function im(a){this.a=a},
ik:function ik(a){this.a=a},
dP:function dP(a){this.a=a},
fi:function fi(a){this.a=a},
hq:function hq(){},
dO:function dO(){},
fn:function fn(a){this.a=a},
eg:function eg(a){this.a=a},
fI:function fI(a,b,c){this.a=a
this.b=b
this.c=c},
y:function y(){},
e:function e(){},
aU:function aU(){},
b:function b(){},
O:function O(){},
J:function J(){},
a1:function a1(){},
M:function M(){},
aq:function aq(){},
o:function o(){},
bA:function bA(a){this.a=a},
mE:function(a){var u,t
u=J.Z(a)
if(!!u.$ibs){t=u.gdP(a)
if(t.constructor===Array)if(typeof CanvasPixelArray!=="undefined"){t.constructor=CanvasPixelArray
t.BYTES_PER_ELEMENT=1}return a}return new P.eP(a.data,a.height,a.width)},
mD:function(a){if(a instanceof P.eP)return{data:a.a,height:a.b,width:a.c}
return a},
bm:function(a){var u,t,s,r,q
if(a==null)return
u=P.lR(P.o,null)
t=Object.getOwnPropertyNames(a)
for(s=t.length,r=0;r<t.length;t.length===s||(0,H.A)(t),++r){q=H.R(t[r])
u.a9(0,q,a[q])}return u},
mC:function(a,b){var u={}
a.R(0,new P.jm(u))
return u},
eP:function eP(a,b,c){this.a=a
this.b=b
this.c=c},
jm:function jm(a){this.a=a},
fE:function fE(a,b){this.a=a
this.b=b},
fF:function fF(){},
fG:function fG(){},
j2:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
mm:function(a){a=536870911&a+((67108863&a)<<3)
a^=a>>>11
return 536870911&a+((16383&a)<<15)},
j5:function j5(){},
ad:function ad(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=e},
bd:function bd(){},
fS:function fS(){},
bi:function bi(){},
ho:function ho(){},
hu:function hu(){},
hW:function hW(){},
p:function p(){},
bk:function bk(){},
i8:function i8(){},
el:function el(){},
em:function em(){},
ev:function ev(){},
ew:function ew(){},
eG:function eG(){},
eH:function eH(){},
eN:function eN(){},
eO:function eO(){},
f7:function f7(){},
f8:function f8(){},
f9:function f9(a){this.a=a},
fa:function fa(){},
bJ:function bJ(){},
hp:function hp(){},
e9:function e9(){},
d5:function d5(){},
di:function di(){},
dG:function dG(){},
dI:function dI(){},
bU:function bU(){},
dJ:function dJ(){},
dQ:function dQ(){},
e1:function e1(){},
hO:function hO(){},
eC:function eC(){},
eD:function eD(){}},W={
jB:function(a,b){var u=document.createElement("canvas")
return u},
lK:function(a){H.k(a,"$if")
return"wheel"},
j1:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
kS:function(a,b,c,d){var u,t
u=W.j1(W.j1(W.j1(W.j1(0,a),b),c),d)
t=536870911&u+((67108863&u)<<3)
t^=t>>>11
return 536870911&t+((16383&t)<<15)},
a9:function(a,b,c,d,e){var u=W.l_(new W.iR(c),W.m)
if(u!=null&&!0)J.ly(a,b,u,!1)
return new W.iQ(a,b,u,!1,[e])},
l_:function(a,b){var u
H.l(a,{func:1,ret:-1,args:[b]})
u=$.W
if(u===C.k)return a
return u.dC(a,b)},
t:function t(){},
f2:function f2(){},
f4:function f4(){},
f5:function f5(){},
d3:function d3(){},
d4:function d4(){},
bL:function bL(){},
bM:function bM(){},
bo:function bo(){},
cd:function cd(){},
fj:function fj(){},
P:function P(){},
ce:function ce(){},
fk:function fk(){},
aP:function aP(){},
aQ:function aQ(){},
fl:function fl(){},
fm:function fm(){},
fo:function fo(){},
cf:function cf(){},
cg:function cg(){},
fq:function fq(){},
de:function de(){},
df:function df(){},
fr:function fr(){},
fs:function fs(){},
iN:function iN(a,b){this.a=a
this.b=b},
a6:function a6(){},
m:function m(){},
f:function f(){},
aS:function aS(){},
fC:function fC(){},
fD:function fD(){},
fH:function fH(){},
aT:function aT(){},
fK:function fK(){},
bP:function bP(){},
dj:function dj(){},
bs:function bs(){},
ck:function ck(){},
aW:function aW(){},
fX:function fX(){},
cn:function cn(){},
h8:function h8(){},
h9:function h9(){},
ha:function ha(a){this.a=a},
hb:function hb(){},
hc:function hc(a){this.a=a},
aZ:function aZ(){},
hd:function hd(){},
ab:function ab(){},
iM:function iM(a){this.a=a},
I:function I(){},
cr:function cr(){},
b0:function b0(){},
hs:function hs(){},
hA:function hA(){},
hB:function hB(a){this.a=a},
hD:function hD(){},
b1:function b1(){},
hM:function hM(){},
b2:function b2(){},
hN:function hN(){},
b3:function b3(){},
hQ:function hQ(){},
hR:function hR(a){this.a=a},
aE:function aE(){},
b4:function b4(){},
aF:function aF(){},
hY:function hY(){},
hZ:function hZ(){},
i3:function i3(){},
b6:function b6(){},
aI:function aI(){},
i6:function i6(){},
i7:function i7(){},
bC:function bC(){},
io:function io(){},
iE:function iE(){},
iF:function iF(){},
b8:function b8(){},
cK:function cK(){},
iO:function iO(){},
eb:function eb(){},
j0:function j0(){},
es:function es(){},
jb:function jb(){},
jc:function jc(){},
iP:function iP(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
jT:function jT(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
iQ:function iQ(a,b,c,d,e){var _=this
_.a=0
_.b=a
_.c=b
_.d=c
_.e=d
_.$ti=e},
iR:function iR(a){this.a=a},
z:function z(){},
dh:function dh(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=null
_.$ti=d},
ea:function ea(){},
ec:function ec(){},
ed:function ed(){},
ee:function ee(){},
ef:function ef(){},
eh:function eh(){},
ei:function ei(){},
ej:function ej(){},
ek:function ek(){},
eo:function eo(){},
ep:function ep(){},
eq:function eq(){},
er:function er(){},
et:function et(){},
eu:function eu(){},
ex:function ex(){},
ey:function ey(){},
ez:function ez(){},
cR:function cR(){},
cS:function cS(){},
eA:function eA(){},
eB:function eB(){},
eF:function eF(){},
eI:function eI(){},
eJ:function eJ(){},
cT:function cT(){},
cU:function cU(){},
eL:function eL(){},
eM:function eM(){},
eQ:function eQ(){},
eR:function eR(){},
eS:function eS(){},
eT:function eT(){},
eU:function eU(){},
eV:function eV(){},
eW:function eW(){},
eX:function eX(){},
eY:function eY(){},
eZ:function eZ(){}},O={
fg:function(a){var u=new O.S([a])
u.bk(a)
return u},
S:function S(a){var _=this
_.d=_.c=_.b=_.a=null
_.$ti=a},
cm:function cm(){this.b=this.a=null},
kC:function(a,b,c,d,e){var u,t,s,r,q
u=new O.aH()
t=u.a
u.a=e
e.gm().h(0,u.gaf())
s=new D.B("texture",t,u.a,u,[T.dR])
s.b=!0
u.H(s)
r=V.aY()
if(!J.K(u.b,r)){t=u.b
u.b=r
s=new D.B("colorMatrix",t,r,u,[V.aa])
s.b=!0
u.H(s)}q=V.jN()
if(!J.K(u.c,q)){t=u.c
u.c=q
s=new D.B("source",t,q,u,[V.bT])
s.b=!0
u.H(s)}if(!J.K(u.d,b)){t=u.d
u.d=b
s=new D.B("destination",t,b,u,[V.bT])
s.b=!0
u.H(s)}if(u.e!==c){u.e=c
s=new D.B("flip",!c,c,u,[P.a4])
s.b=!0
u.H(s)}u.f=null
return u},
fp:function fp(){var _=this
_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
dv:function dv(){var _=this
_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
h2:function h2(a,b){var _=this
_.f=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
dx:function dx(){},
h3:function h3(a,b){var _=this
_.a=a
_.b=b
_.e=_.d=_.c=null},
aX:function aX(a,b){var _=this
_.f=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
h5:function h5(a,b){var _=this
_.f=_.ch=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
h6:function h6(a,b){var _=this
_.f=_.ch=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
dB:function dB(){var _=this
_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
dL:function dL(){var _=this
_.e=_.d=_.c=_.b=_.a=null},
bB:function bB(){},
dS:function dS(){var _=this
_.e=_.d=_.c=_.b=_.a=null},
aH:function aH(){var _=this
_.f=_.e=_.d=_.c=_.b=_.a=null}},E={
jE:function(a,b,c,d,e,f){var u=new E.ak()
u.a=d
u.b=!0
u.sf1(0,O.fg(E.ak))
u.y.aI(u.gjG(),u.gjJ())
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
u.sbj(0,e)
u.sb9(c)
return u},
m7:function(a,b){var u=new E.hw(a,b)
u.eX(a,b)
return u},
mf:function(a,b,c,d,e){var u,t,s,r
u=J.Z(a)
if(!!u.$ibL)return E.kD(a,!0,!0,!0,!1)
t=W.jB(null,null)
s=t.style
s.width="100%"
s.height="100%"
u.gdH(a).h(0,t)
r=E.kD(t,!0,!0,!0,!1)
r.a=a
return r},
kD:function(a,b,c,d,e){var u,t,s,r,q,p,o,n,m,l,k
u=new E.dX()
t=H.k(C.m.cO(a,"webgl2",P.lS(["alpha",!0,"depth",!0,"stencil",!1,"antialias",!0])),"$ibU")
if(t==null)H.q(P.r("Failed to get the rendering context for WebGL."))
u.b=a
u.a=a
u.c=t
u.e=E.m7(t,a)
s=new T.i0(t)
s.b=H.af((t&&C.b).bN(t,3379))
s.c=H.af(C.b.bN(t,34076))
s.d=0
s.e=0
u.f=s
s=new X.e4(a)
r=new X.fR()
r.c=new X.as(!1,!1,!1)
r.si0(P.lT(null,null,null,P.y))
s.b=r
r=new X.he(s)
r.f=0
r.r=V.bj()
r.x=V.bj()
r.Q=1
r.ch=1
s.c=r
r=new X.fY(s)
r.r=0
r.x=V.bj()
r.Q=1
r.ch=1
r.cx=1
r.cy=1
s.d=r
r=new X.i5(s)
r.e=0
r.f=V.bj()
r.r=V.bj()
s.e=r
s.f=!1
s.r=!1
s.x=!1
s.y=null
s.sfD(H.d([],[[P.cy,P.M]]))
r=s.z
q=document
p=W.ab
o={func:1,ret:-1,args:[p]};(r&&C.a).h(r,W.a9(q,"contextmenu",H.l(s.ghi(),o),!1,p))
r=s.z
n=W.m
m={func:1,ret:-1,args:[n]};(r&&C.a).h(r,W.a9(a,"focus",H.l(s.ghs(),m),!1,n))
r=s.z;(r&&C.a).h(r,W.a9(a,"blur",H.l(s.ghc(),m),!1,n))
r=s.z
l=W.aW
k={func:1,ret:-1,args:[l]};(r&&C.a).h(r,W.a9(q,"keyup",H.l(s.ghw(),k),!1,l))
r=s.z;(r&&C.a).h(r,W.a9(q,"keydown",H.l(s.ghu(),k),!1,l))
l=s.z;(l&&C.a).h(l,W.a9(a,"mousedown",H.l(s.ghA(),o),!1,p))
l=s.z;(l&&C.a).h(l,W.a9(a,"mouseup",H.l(s.ghE(),o),!1,p))
l=s.z;(l&&C.a).h(l,W.a9(a,"mousemove",H.l(s.ghC(),o),!1,p))
l=s.z
k=W.b8;(l&&C.a).h(l,W.a9(a,H.R(W.lK(a)),H.l(s.ghG(),{func:1,ret:-1,args:[k]}),!1,k))
k=s.z;(k&&C.a).h(k,W.a9(q,"mousemove",H.l(s.ghk(),o),!1,p))
k=s.z;(k&&C.a).h(k,W.a9(q,"mouseup",H.l(s.ghm(),o),!1,p))
p=s.z;(p&&C.a).h(p,W.a9(q,"pointerlockchange",H.l(s.ghI(),m),!1,n))
n=s.z
m=W.aI
q={func:1,ret:-1,args:[m]};(n&&C.a).h(n,W.a9(a,"touchstart",H.l(s.ghY(),q),!1,m))
n=s.z;(n&&C.a).h(n,W.a9(a,"touchend",H.l(s.ghU(),q),!1,m))
n=s.z;(n&&C.a).h(n,W.a9(a,"touchmove",H.l(s.ghW(),q),!1,m))
u.r=s
u.Q=!0
u.ch=!1
u.cx=new P.ap(Date.now(),!1)
u.cy=0
u.dq()
return u},
fc:function fc(){},
ak:function ak(){var _=this
_.fx=_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
hw:function hw(a,b){var _=this
_.a=a
_.b=b
_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=null},
hx:function hx(a){this.a=a},
hy:function hy(a){this.a=a},
hz:function hz(a){this.a=a},
dX:function dX(){var _=this
_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
i2:function i2(a){this.a=a}},Z={
jS:function(a,b,c){var u
H.j(c,"$ib",[P.y],"$ab")
u=a.createBuffer()
C.b.ar(a,b,u)
C.b.dE(a,b,new Int16Array(H.bW(c)),35044)
C.b.ar(a,b,null)
return new Z.e7(b,u)},
ax:function(a){return new Z.an(a)},
e7:function e7(a,b){this.a=a
this.b=b},
d6:function d6(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
bD:function bD(a){this.a=a},
bb:function bb(a,b,c){var _=this
_.a=a
_.b=null
_.c=b
_.d=c},
bt:function bt(a,b,c){this.a=a
this.b=b
this.c=c},
an:function an(a){this.a=a}},D={
E:function(){var u=new D.br()
u.sab(null)
u.saN(null)
u.c=null
u.d=0
return u},
ff:function ff(){},
br:function br(){var _=this
_.d=_.c=_.b=_.a=null},
fz:function fz(a){this.a=a},
fA:function fA(a){this.a=a},
v:function v(a){this.a=a
this.b=null},
bu:function bu(a,b,c,d){var _=this
_.c=a
_.d=b
_.a=c
_.b=null
_.$ti=d},
bv:function bv(a,b,c,d){var _=this
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
bp:function bp(){var _=this
_.d=_.c=_.b=_.a=null},
a2:function a2(){},
dq:function dq(){var _=this
_.d=_.c=_.b=_.a=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=null},
dF:function dF(){},
dN:function dN(){},
dU:function dU(){},
dV:function dV(){},
dW:function dW(){}},X={d7:function d7(a,b){this.a=a
this.b=b},dp:function dp(a,b){this.a=a
this.b=b},fR:function fR(){var _=this
_.d=_.c=_.b=_.a=null},dt:function dt(a,b,c,d,e,f){var _=this
_.x=a
_.y=b
_.c=c
_.d=d
_.e=e
_.a=f
_.b=null},fY:function fY(a){var _=this
_.a=a
_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},as:function as(a,b,c){this.a=a
this.b=b
this.c=c},by:function by(a,b,c,d,e,f,g,h,i){var _=this
_.x=a
_.y=b
_.z=c
_.Q=d
_.ch=e
_.c=f
_.d=g
_.e=h
_.a=i
_.b=null},he:function he(a){var _=this
_.a=a
_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},co:function co(a,b,c,d,e){var _=this
_.x=a
_.c=b
_.d=c
_.e=d
_.a=e
_.b=null},ht:function ht(){},dZ:function dZ(a,b,c,d,e,f,g,h,i){var _=this
_.x=a
_.y=b
_.z=c
_.Q=d
_.ch=e
_.c=f
_.d=g
_.e=h
_.a=i
_.b=null},i5:function i5(a){var _=this
_.a=a
_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},e4:function e4(a){var _=this
_.a=a
_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},
k9:function(a,b,c,d,e,f){var u=new X.fb()
u.a=512
u.b=512
u.c=512
u.d=512
u.e=!0
u.f=!0
u.r=d
u.x=e
u.ch=T.kB(0,null)
u.cx=new V.a8(0,0,0,1)
u.cy=!0
u.db=2000
u.dx=!0
u.dy=V.jN()
u.sak(0,a)
u.sah(0,b)
return u},
jF:function(a,b,c,d,e,f,g){var u,t
u=new X.fJ()
t=new V.a8(0,0,0,1)
u.a=t
u.b=a
u.c=e
u.d=!0
u.e=g
u.f=!1
t=V.jN()
u.r=t
return u},
kt:function(a,b,c,d,e){var u,t
u=new X.dE()
u.c=1.0471975511965976
u.d=0.1
u.e=2000
u.sb9(c)
t=u.c
if(!(Math.abs(t-b)<$.N().a)){u.c=b
t=new D.B("fov",t,b,u,[P.x])
t.b=!0
u.ae(t)}t=u.d
if(!(Math.abs(t-d)<$.N().a)){u.d=d
t=new D.B("near",t,d,u,[P.x])
t.b=!0
u.ae(t)}t=u.e
if(!(Math.abs(t-a)<$.N().a)){u.e=a
t=new D.B("far",t,a,u,[P.x])
t.b=!0
u.ae(t)}return u},
fb:function fb(){var _=this
_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
bK:function bK(){},
fJ:function fJ(){var _=this
_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
fL:function fL(){this.b=this.a=null},
dE:function dE(){var _=this
_.f=_.e=_.d=_.c=_.b=_.a=null},
cz:function cz(){}},V={
n3:function(a,b,c){var u
if(c<=b)return b
u=c-b
a=C.d.eL(a-b,u)
return(a<0?a+u:a)+b},
Q:function(a,b,c){if(a==null)return C.j.aj("null",c)
return C.j.aj(C.d.ew(Math.abs(a-0)<$.N().a?0:a,b),c+b+1)},
c0:function(a,b,c){var u,t,s,r,q,p
H.j(a,"$ib",[P.x],"$ab")
u=H.d([],[P.o])
for(t=a.length,s=0,r=0;r<a.length;a.length===t||(0,H.A)(a),++r){q=V.Q(a[r],b,c)
s=Math.max(s,q.length)
C.a.h(u,q)}for(p=u.length-1;p>=0;--p){if(p>=u.length)return H.h(u,p)
C.a.a9(u,p,C.j.aj(u[p],s))}return u},
cZ:function(a,b){return C.d.kc(Math.pow(b,C.E.cv(Math.log(H.mB(a))/Math.log(b))))},
jL:function(){var u=$.km
if(u==null){u=new V.cl(1,0,0,0,1,0,0,0,1)
$.km=u}return u},
aY:function(){var u=$.h7
if(u==null){u=V.bg(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1)
$.h7=u}return u},
bg:function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){return new V.aa(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p)},
kp:function(a,b,c){return V.bg(1,0,0,a,0,1,0,b,0,0,1,c,0,0,0,1)},
ko:function(a,b,c,d){return V.bg(a,0,0,0,0,b,0,0,0,0,c,0,0,0,0,d)},
kn:function(a,b,c){var u,t,s,r,q,p,o,n
u=c.w(0,Math.sqrt(c.E(c)))
t=b.aE(u)
s=t.w(0,Math.sqrt(t.E(t)))
r=u.aE(s)
q=new V.H(a.a,a.b,a.c)
p=s.S(0).E(q)
o=r.S(0).E(q)
n=u.S(0).E(q)
return V.bg(s.a,r.a,u.a,p,s.b,r.b,u.b,o,s.c,r.c,u.c,n,0,0,0,1)},
bj:function(){var u=$.kv
if(u==null){u=new V.a3(0,0)
$.kv=u}return u},
kw:function(){var u=$.cs
if(u==null){u=new V.a_(0,0,0)
$.cs=u}return u},
jN:function(){var u=$.cv
if(u==null){u=V.cu(0,0,1,1)
$.cv=u}return u},
cu:function(a,b,c,d){if(c<0){a+=c
c=-c}if(d<0){b+=d
d=-d}return new V.bT(a,b,c,d)},
cJ:function(){var u=$.kO
if(u==null){u=new V.H(0,0,0)
$.kO=u}return u},
kP:function(){var u=$.kN
if(u==null){u=new V.H(0,1,0)
$.kN=u}return u},
kQ:function(){var u=$.ir
if(u==null){u=new V.H(0,0,1)
$.ir=u}return u},
X:function X(a,b,c){this.a=a
this.b=b
this.c=c},
a8:function a8(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
fx:function fx(a){this.a=a},
cl:function cl(a,b,c,d,e,f,g,h,i){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.x=h
_.y=i},
aa:function aa(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){var _=this
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
a_:function a_(a,b,c){this.a=a
this.b=b
this.c=c},
aC:function aC(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
bT:function bT(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
V:function V(a,b){this.a=a
this.b=b},
H:function H(a,b,c){this.a=a
this.b=b
this.c=c},
ai:function(a){var u=new V.hE()
u.eY(a)
return u},
f3:function f3(){},
bf:function bf(){},
du:function du(){},
bh:function bh(){this.a=null},
hE:function hE(){this.a=null},
cx:function cx(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
dY:function dY(a,b,c){this.a=a
this.b=b
this.c=c},
cB:function cB(a,b){this.a=a
this.b=b
this.c=null},
i4:function i4(){this.c=this.b=this.a=null},
cC:function cC(a){this.b=a
this.a=this.c=null},
n_:function(a){P.mg(C.B,new V.jw(a))},
m9:function(a,b){var u=new V.hI()
u.eZ(a,!0)
return u},
jw:function jw(a){this.a=a},
hI:function hI(){this.b=this.a=null},
hK:function hK(a){this.a=a},
hJ:function hJ(a){this.a=a}},U={
ke:function(){var u=new U.fh()
u.a=!0
u.b=1e12
u.c=-1e12
u.d=0
u.e=100
u.f=0
u.x=0
u.r=0
return u},
jC:function(a){var u=new U.d9()
u.a=a
return u},
kh:function(a){var u=new U.cj()
u.bk(U.ac)
u.aI(u.gf4(),u.ghM())
u.e=null
u.f=V.aY()
u.r=0
return u},
kI:function(a,b,c,d,e,f,g,h){var u,t,s,r,q
u=new U.e5()
t=U.ke()
t.seA(0,!0)
t.sei(6.283185307179586)
t.sek(0)
t.sad(0,0)
t.sej(100)
t.sa1(0)
t.sdO(0.5)
u.b=t
s=u.gbl()
t.gm().h(0,s)
t=U.ke()
t.seA(0,!0)
t.sei(6.283185307179586)
t.sek(0)
t.sad(0,0)
t.sej(100)
t.sa1(0)
t.sdO(0.5)
u.c=t
t.gm().h(0,s)
u.d=null
u.e=!1
u.f=!1
u.r=!1
u.x=2.5
u.y=2.5
u.z=2
u.Q=4
u.cx=!1
u.ch=!1
u.cy=0
u.db=0
u.dx=null
u.dy=0
u.fr=null
u.fx=null
r=new X.as(b,!1,!1)
q=u.d
u.d=r
t=new D.B("modifiers",q,r,u,[X.as])
t.b=!0
u.T(t)
t=u.f
if(t!==!1){u.f=!1
t=new D.B("invertX",t,!1,u,[P.a4])
t.b=!0
u.T(t)}t=u.r
if(t!==!1){u.r=!1
t=new D.B("invertY",t,!1,u,[P.a4])
t.b=!0
u.T(t)}u.cc(c)
return u},
kJ:function(a,b,c,d,e){var u,t,s
u=new U.e6()
u.c=0.01
u.d=0
u.e=0
t=new X.as(b,!1,!1)
u.b=t
s=new D.B("modifiers",null,t,u,[X.as])
s.b=!0
u.T(s)
u.cc(c)
return u},
fh:function fh(){var _=this
_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
d9:function d9(){this.b=this.a=null},
cj:function cj(){var _=this
_.d=_.c=_.b=_.a=_.r=_.f=_.e=null},
ac:function ac(){},
e5:function e5(){var _=this
_.fx=_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
e6:function e6(){var _=this
_.r=_.f=_.e=_.d=_.c=_.b=_.a=null}},M={
jD:function(a,b,c){var u,t,s,r,q,p,o,n,m,l
u=new M.db()
u.sb2(a)
u.saH(0,b)
u.saw(c)
t=E.jE(null,!0,null,"",null,null)
s=F.jO()
r=s.a
q=new V.H(-1,-1,1)
q=q.w(0,Math.sqrt(q.E(q)))
p=r.br(new V.aC(1,2,4,6),new V.a8(1,0,0,1),new V.a_(-1,-1,0),new V.a3(0,1),q,null)
r=s.a
q=new V.H(1,-1,1)
q=q.w(0,Math.sqrt(q.E(q)))
o=r.br(new V.aC(0,3,4,6),new V.a8(0,0,1,1),new V.a_(1,-1,0),new V.a3(1,1),q,null)
r=s.a
q=new V.H(1,1,1)
q=q.w(0,Math.sqrt(q.E(q)))
n=r.br(new V.aC(0,2,5,6),new V.a8(0,1,0,1),new V.a_(1,1,0),new V.a3(1,0),q,null)
r=s.a
q=V.bj()
m=new V.H(-1,1,1)
m=m.w(0,Math.sqrt(m.E(m)))
l=r.br(new V.aC(0,2,4,7),new V.a8(1,1,0,1),new V.a_(-1,1,0),q,m,null)
s.d.j2(H.d([p,o,n,l],[F.am]))
s.al()
t.sbj(0,s)
u.d=t
u.e=null
return u},
kg:function(a,b,c,d,e){var u=new M.dg()
u.sfn(0,O.fg(E.ak))
u.d.aI(u.ghe(),u.ghg())
u.e=null
u.f=null
u.r=null
u.x=null
d=X.jF(!0,!0,!1,c,2000,null,0)
u.sb2(a)
u.saH(0,d)
u.saw(e)
return u},
d8:function d8(){var _=this
_.d=_.c=_.b=_.a=_.f=_.e=null},
db:function db(){var _=this
_.f=_.e=_.d=_.c=_.b=_.a=null},
dg:function dg(){var _=this
_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
at:function at(){}},A={
lV:function(a,b){var u,t
u=a.an
t=new A.dw(b,u)
t.aV(b,u)
t.eW(a,b)
return t},
kq:function(a){var u,t,s,r,q,p,o
u=a!==C.c
t=a===C.f
s=a===C.e
r="Normal_"+C.h.i(a.a)
q=$.ag()
p=$.aL()
p=q.a|p.a
o=new Z.an(p)
if(u)o=new Z.an(p|$.aK().a)
if(t)o=new Z.an(o.a|$.av().a)
return new A.hm(a,u,t,s,r,s?new Z.an(o.a|$.aM().a):o)},
me:function(a){var u,t
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
md:function(a,b){var u,t
u="TextureLayout_"+a
t=new A.dT(b,u)
t.aV(b,u)
t.f_(a,b)
return t},
jR:function(a,b,c,d,e){var u=new A.id(a,b,c,e)
u.f=d
u.siE(P.lU(d,0,!1,P.y))
return u},
d2:function d2(a,b,c){this.a=a
this.b=b
this.c=c},
f6:function f6(a){this.a=a},
dd:function dd(a,b){var _=this
_.fx=_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=null
_.a=a
_.b=b
_.y=_.x=_.r=_.f=_.e=_.d=_.c=null},
dw:function dw(a,b){var _=this
_.bu=_.dT=_.bt=_.an=_.at=_.y2=_.y1=_.x2=_.x1=_.ry=_.rx=_.r2=_.r1=_.k4=_.k3=_.k2=_.k1=_.id=_.go=_.fy=_.fx=_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=null
_.e8=_.cp=_.e7=_.bH=_.e6=_.e5=_.bG=_.bF=_.e4=_.e3=_.bE=_.bD=_.bC=_.e2=_.e1=_.bB=_.e0=_.e_=_.bA=_.dZ=_.dY=_.bz=_.by=_.dX=_.dW=_.bx=_.bw=_.dV=_.dU=_.bv=null
_.cu=_.ec=_.ct=_.eb=_.cs=_.ea=_.cr=_.e9=_.cq=null
_.a=a
_.b=b
_.y=_.x=_.r=_.f=_.e=_.d=_.c=null},
h4:function h4(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5){var _=this
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
_.at=b3
_.an=b4
_.bt=b5},
cD:function cD(a,b,c){this.a=a
this.b=b
this.c=c},
cG:function cG(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.x=h},
cE:function cE(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},
cH:function cH(a,b,c,d,e,f,g,h,i,j){var _=this
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
cF:function cF(a,b,c,d,e,f,g,h,i,j){var _=this
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
cI:function cI(a,b,c,d,e,f,g,h,i,j,k,l,m,n){var _=this
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
dC:function dC(a,b){var _=this
_.id=_.go=_.fy=_.fx=_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=null
_.a=a
_.b=b
_.y=_.x=_.r=_.f=_.e=_.d=_.c=null},
hm:function hm(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
cw:function cw(){},
bN:function bN(a,b){this.a=a
this.b=b},
dM:function dM(a,b){var _=this
_.db=_.cy=_.cx=_.ch=_.Q=_.z=null
_.a=a
_.b=b
_.y=_.x=_.r=_.f=_.e=_.d=_.c=null},
dT:function dT(a,b){var _=this
_.fx=_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=null
_.a=a
_.b=b
_.y=_.x=_.r=_.f=_.e=_.d=_.c=null},
e_:function e_(){},
ii:function ii(a){this.a=a},
C:function C(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
ie:function ie(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
ig:function ig(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
ih:function ih(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
id:function id(a,b,c,d){var _=this
_.f=_.e=null
_.a=a
_.b=b
_.c=c
_.d=d},
U:function U(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
au:function au(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
G:function G(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
e0:function e0(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
ij:function ij(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
bl:function bl(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
Y:function Y(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
a0:function a0(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
ae:function ae(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d}},F={
ji:function(a){var u=a.a>0?1:0
if(a.b>0)u+=2
return(a.c>0?u+4:u)*2},
cV:function(a,b,c,d,a0,a1,a2,a3,a4){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e
u={}
t=a1+a2
s=t+a3
r=a2+a3
q=a3+a1
p=new V.H(s,r+a1,q+a2)
u.a=p
o=a1-a2
n=a2-a3
m=a3-a1
l=new V.H(o+a3,n+a1,m+a2)
u.b=l
k=new V.H(o-a3,n-a1,m-a2)
u.c=k
j=new V.H(t-a3,r-a1,q-a2)
u.d=j
if(s>0){u.d=l
u.b=j
s=l
t=j}else{s=j
t=l}for(q=s,s=t,t=p,r=k,i=0;i<a4;++i,h=q,q=t,t=s,s=r,r=h){u.a=s
u.b=r
u.c=q
u.d=t}g=F.ji(t)
f=F.ji(u.b)
e=F.ld(d,a0,new F.jh(u,F.ji(u.c),F.ji(u.d),f,g,c),b)
if(e!=null)a.cD(e)},
n2:function(a,b,c,d){return F.mF(c,a,d,b,new F.jx())},
mF:function(a,b,c,d,e){var u=F.ld(a,b,new F.jn(H.l(e,{func:1,ret:V.a_,args:[P.x]}),d,b,c),null)
if(u==null)return
u.al()
u.jF(new F.iy(),new F.hl())
return u},
ld:function(a,b,c,d){var u,t,s,r,q,p,o,n,m,l,k,j,i,h
H.l(c,{func:1,ret:-1,args:[F.am,P.x,P.x]})
if(a<1)return
if(b<1)return
u=F.jO()
t=H.d([],[F.am])
for(s=0;s<=b;++s){r=s/b
q=u.a
if(r<0)p=0
else p=r>1?1:r
q.toString
o=F.is(null,null,new V.a8(p,0,0,1),null,null,new V.a3(r,1),null,null,0)
q.h(0,o)
c.$3(o,r,0)
C.a.h(t,o.cm(d))}for(s=1;s<=a;++s){n=s/a
for(q=n>1,p=n<0,m=1-n,l=0;l<=b;++l){r=l/b
k=u.a
if(r<0)j=0
else j=r>1?1:r
if(p)i=0
else i=q?1:n
if(p)h=0
else h=q?1:n
k.toString
o=F.is(null,null,new V.a8(j,i,h,1),null,null,new V.a3(r,m),null,null,0)
k.h(0,o)
c.$3(o,r,n)
C.a.h(t,o.cm(d))}}u.d.j3(a+1,b+1,t)
return u},
ch:function(a,b,c){var u,t
u=new F.a7()
t=a.a
if(t==null)H.q(P.r("May not create a face with a first vertex which is not attached to a shape."))
if(t!=b.a||t!=c.a)H.q(P.r("May not create a face with vertices attached to different shapes."))
u.c9(a)
u.ca(b)
u.ib(c)
C.a.h(u.a.a.d.b,u)
u.a.a.a3()
return u},
lQ:function(a,b){var u,t
u=new F.be()
t=a.a
if(t==null)H.q(P.r("May not create a line with a start vertex which is not attached to a shape."))
if(t!=b.a)H.q(P.r("May not create a line with vertices attached to different shapes."))
u.c9(a)
u.ca(b)
C.a.h(u.a.a.c.b,u)
u.a.a.a3()
return u},
jO:function(){var u,t
u=new F.dK()
t=new F.it(u)
t.b=!1
t.siF(H.d([],[F.am]))
u.a=t
t=new F.hH(u)
t.sc1(H.d([],[F.bz]))
u.b=t
t=new F.hG(u)
t.sfR(H.d([],[F.be]))
u.c=t
t=new F.hF(u)
t.sfE(H.d([],[F.a7]))
u.d=t
u.e=null
return u},
is:function(a,b,c,d,e,f,g,h,i){var u,t,s
u=new F.am()
t=new F.iB(u)
t.sc1(H.d([],[F.bz]))
u.b=t
t=new F.ix(u)
s=[F.be]
t.sfS(H.d([],s))
t.sfT(H.d([],s))
u.c=t
t=new F.iu(u)
s=[F.a7]
t.sfF(H.d([],s))
t.sfG(H.d([],s))
t.sfH(H.d([],s))
u.d=t
h=$.lr()
u.e=0
t=$.ag()
s=h.a
u.f=(s&t.a)!==0?d:null
u.r=(s&$.aL().a)!==0?e:null
u.x=(s&$.aK().a)!==0?b:null
u.y=(s&$.av().a)!==0?f:null
u.z=(s&$.aM().a)!==0?g:null
u.Q=(s&$.ls().a)!==0?c:null
u.ch=(s&$.c5().a)!==0?i:0
u.cx=(s&$.bn().a)!==0?a:null
return u},
jh:function jh(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
jx:function jx(){},
jn:function jn(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
a7:function a7(){var _=this
_.e=_.d=_.c=_.b=_.a=null},
fB:function fB(){},
hL:function hL(){},
be:function be(){this.b=this.a=null},
fT:function fT(){},
ic:function ic(){},
bz:function bz(){this.a=null},
dK:function dK(){var _=this
_.e=_.d=_.c=_.b=_.a=null},
hF:function hF(a){this.a=a
this.b=null},
hG:function hG(a){this.a=a
this.b=null},
hH:function hH(a){this.a=a
this.b=null},
am:function am(){var _=this
_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
iD:function iD(a){this.a=a},
iC:function iC(a){this.a=a},
it:function it(a){this.a=a
this.c=this.b=null},
iu:function iu(a){var _=this
_.a=a
_.d=_.c=_.b=null},
iv:function iv(a,b){this.a=a
this.b=b},
iw:function iw(a,b){this.a=a
this.b=b},
ix:function ix(a){this.a=a
this.c=this.b=null},
iz:function iz(){},
iy:function iy(){},
iA:function iA(){},
hl:function hl(){},
iB:function iB(a){this.a=a
this.b=null}},T={
kB:function(a,b){var u=new T.i_()
u.a=a
u.b=b
u.c=!1
u.d=!1
u.e=0
u.f=0
u.r=0
u.x=0
return u},
aG:function aG(){},
dR:function dR(){},
i_:function i_(){var _=this
_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
cA:function cA(){var _=this
_.e=_.d=_.c=_.b=_.a=null},
i0:function i0(a){var _=this
_.a=a
_.e=_.d=_.c=_.b=null},
i1:function i1(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g}},S={
l8:function(){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5
u=V.m9("Test 031",!0)
t=W.jB(null,null)
t.className="pageLargeCanvas"
t.id="testCanvas"
C.l.a6(u.a,t)
s=[P.o]
u.dz(H.d(["A test of the Distortion cover with a dynamic normal map. ","The distortion map is generated into one back buffer. ","The scene is generated into another back buffer. ","The two parts are combined with a Distortion cover. ","Use mouse to rotate cube in normal map and Ctrl plus mouse ","to rotate scene."],s))
u.dz(H.d(["\xab[Back to Tests|../]"],s))
r=C.C.eG(document,"testCanvas")
if(r==null)H.q(P.r("Failed to find an element with the identifier, testCanvas."))
q=E.mf(r,!0,!0,!0,!1)
p=E.jE(null,!0,null,"",null,null)
o=F.jO()
F.cV(o,null,null,1,1,1,0,0,1)
F.cV(o,null,null,1,1,0,1,0,3)
F.cV(o,null,null,1,1,0,0,1,2)
F.cV(o,null,null,1,1,-1,0,0,0)
F.cV(o,null,null,1,1,0,-1,0,0)
F.cV(o,null,null,1,1,0,0,-1,3)
o.al()
p.sbj(0,o)
u=U.kh(null)
u.h(0,U.kI(!1,!1,q.r,!1,!1,!1,null,!1))
u.h(0,U.kJ(!1,!1,q.r,null,!1))
p.sb9(u)
n=new O.dB()
n.b=V.jL()
n.c=V.aY()
n.d=C.c
n.dr(null)
n.ds(null)
n.Y()
n.r=null
u=q.f.jC("../resources/diceBumpMap")
if(n.d!==C.e){n.d=C.e
n.dr(null)
n.a=null}n.ds(u)
m=X.k9(800,600,!0,1,1,!0)
l=new V.a8(0.5,0.5,1,1)
if(!m.cx.t(0,l)){k=m.cx
m.cx=l
u=new D.B("color",k,l,m,[V.a8])
u.b=!0
m.ae(u)}j=M.kg(null,null,null,null,null)
j.saw(n)
j.saH(0,m)
j.d.h(0,p)
j.a.sb9(U.jC(V.kp(0,0,5)))
i=U.kh(null)
i.h(0,U.kI(!1,!0,q.r,!1,!1,!1,null,!1))
i.h(0,U.kJ(!1,!0,q.r,null,!1))
i.h(0,U.jC(V.kp(0,0,5)))
h=X.kt(2000,1.0471975511965976,i,0.1,null)
g=X.k9(800,600,!0,1,1,!0)
if(g.cy){g.cy=!1
u=new D.B("clearColor",!0,!1,g,[P.a4])
u.b=!0
g.ae(u)}f=E.jE(null,!0,null,"",null,null)
f.sbj(0,F.n2(30,1,15,0.5))
e=new O.dv()
e.sfk(O.fg(V.aa))
e.e.aI(e.gh8(),e.gha())
u=new O.aX(e,"emission")
u.c=C.c
u.f=new V.X(0,0,0)
e.f=u
u=new O.aX(e,"ambient")
u.c=C.c
u.f=new V.X(0,0,0)
e.r=u
u=new O.aX(e,"diffuse")
u.c=C.c
u.f=new V.X(0,0,0)
e.x=u
u=new O.aX(e,"invDiffuse")
u.c=C.c
u.f=new V.X(0,0,0)
e.y=u
u=new O.h6(e,"specular")
u.c=C.c
u.f=new V.X(0,0,0)
u.ch=100
e.z=u
u=new O.h3(e,"bump")
u.c=C.c
e.Q=u
e.ch=null
u=new O.aX(e,"reflect")
u.c=C.c
u.f=new V.X(0,0,0)
e.cx=u
u=new O.h5(e,"refract")
u.c=C.c
u.f=new V.X(0,0,0)
u.ch=1
e.cy=u
u=new O.h2(e,"alpha")
u.c=C.c
u.f=1
e.db=u
u=new D.dq()
u.bk(D.a2)
u.sfz(H.d([],[D.bp]))
u.si_(H.d([],[D.dF]))
u.sij(H.d([],[D.dN]))
u.siA(H.d([],[D.dU]))
u.siB(H.d([],[D.dV]))
u.siC(H.d([],[D.dW]))
u.Q=null
u.ch=null
u.cP(u.gh6(),u.ghK(),u.ghO())
e.dx=u
s=u.Q
if(s==null){s=D.E()
u.Q=s
u=s}else u=s
u.h(0,e.gi6())
u=e.dx
s=u.ch
if(s==null){s=D.E()
u.ch=s
u=s}else u=s
u.h(0,e.gaf())
e.dy=null
u=e.dx
d=V.kP()
s=U.jC(V.kn(V.kw(),d,new V.H(0,-1,-1)))
l=new V.X(1,1,1)
c=new D.bp()
c.c=new V.X(1,1,1)
c.a=V.kQ()
k=c.b
c.b=s
s.gm().h(0,c.gf2())
s=new D.B("mover",k,c.b,c,[U.ac])
s.b=!0
c.az(s)
if(!c.c.t(0,l)){k=c.c
c.c=l
s=new D.B("color",k,l,c,[V.X])
s.b=!0
c.az(s)}u.h(0,c)
u=e.r
u.sas(0,new V.X(0,0,1))
u=e.x
u.sas(0,new V.X(0,1,0))
u=e.z
u.sas(0,new V.X(1,0,0))
u=e.z
if(u.c===C.c){u.c=C.i
u.bQ()
u.c6(100)
s=u.a
s.a=null
s.H(null)}u.c6(10)
u=q.f.jD("../resources/maskonaive",".jpg")
b=M.jD(null,null,null)
s=new O.dL()
s.b=1.0471975511965976
s.d=new V.X(1,1,1)
k=s.c
s.c=u
u.gm().h(0,s.gaf())
u=new D.B("boxTexture",k,s.c,s,[T.cA])
u.b=!0
s.H(u)
b.saw(s)
b.saH(0,g)
b.sb2(h)
a=M.kg(null,null,null,null,null)
a.sb2(h)
a.saw(e)
a.saH(0,g)
a.d.h(0,f)
a0=new O.fp()
a0.sdM(null)
a0.sdG(null)
a1=V.jL()
if(!J.K(a0.d,a1)){a0.d=a1
a0.Y()}a1=V.jL()
if(!J.K(a0.e,a1)){a0.e=a1
a0.Y()}a0.sdF(null)
a0.sdM(g.ch)
a0.sdG(m.ch)
a0.sdF(V.ko(0.05,0.05,0.05,1))
a2=M.jD(null,null,null)
a2.saw(a0)
a3=new O.dS()
a4=new V.a8(0,0,0,0)
a3.a=a4
u=new D.B("backColor",null,a4,a3,[V.a8])
u.b=!0
a3.H(u)
a3.b=null
a3.sfC(O.fg(O.aH))
a3.c.aI(a3.gho(),a3.ghq())
a3.d=0
a3.e=null
u=a3.c
s=m.ch
u.h(0,O.kC(null,V.cu(0,0.8,0.2,0.2),!0,null,s))
s=a3.c
u=g.ch
s.h(0,O.kC(null,V.cu(0,0.6,0.2,0.2),!1,null,u))
a5=M.jD(null,null,null)
a5.saH(0,X.jF(!1,!0,!1,null,2000,null,0))
a5.saw(a3)
u=M.at
s=H.d([b,a,j,a2,a5],[u])
c=new M.d8()
c.bk(u)
c.e=!1
c.f=null
c.aI(c.ghQ(),c.ghS())
c.cb(0,s)
u=q.d
if(u!==c){if(u!=null)u.gm().G(0,q.gcV())
q.d=c
c.gm().h(0,q.gcV())
q.cW()}V.n_(q)}}
var w=[C,H,J,P,W,O,E,Z,D,X,V,U,M,A,F,T,S]
hunkHelpers.setFunctionNamesIfNecessary(w)
var $={}
H.jJ.prototype={}
J.a.prototype={
t:function(a,b){return a===b},
gK:function(a){return H.ct(a)},
i:function(a){return"Instance of '"+H.bR(a)+"'"}}
J.fO.prototype={
i:function(a){return String(a)},
gK:function(a){return a?519018:218159},
$ia4:1}
J.dm.prototype={
t:function(a,b){return null==b},
i:function(a){return"null"},
gK:function(a){return 0},
$iJ:1}
J.dn.prototype={
gK:function(a){return 0},
i:function(a){return String(a)}}
J.hr.prototype={}
J.bV.prototype={}
J.bc.prototype={
i:function(a){var u=a[$.lg()]
if(u==null)return this.eS(a)
return"JavaScript function for "+H.n(J.aw(u))},
$S:function(){return{func:1,opt:[,,,,,,,,,,,,,,,,]}},
$ijG:1}
J.aB.prototype={
h:function(a,b){H.D(b,H.w(a,0))
if(!!a.fixed$length)H.q(P.al("add"))
a.push(b)},
jX:function(a,b){var u
if(!!a.fixed$length)H.q(P.al("removeAt"))
u=a.length
if(b>=u)throw H.i(P.dH(b,null,null))
return a.splice(b,1)[0]},
G:function(a,b){var u
if(!!a.fixed$length)H.q(P.al("remove"))
for(u=0;u<a.length;++u)if(J.K(a[u],b)){a.splice(u,1)
return!0}return!1},
cb:function(a,b){var u,t
H.j(b,"$ie",[H.w(a,0)],"$ae")
if(!!a.fixed$length)H.q(P.al("addAll"))
for(u=b.length,t=0;t<b.length;b.length===u||(0,H.A)(b),++t)a.push(b[t])},
R:function(a,b){var u,t
H.l(b,{func:1,ret:-1,args:[H.w(a,0)]})
u=a.length
for(t=0;t<u;++t){b.$1(a[t])
if(a.length!==u)throw H.i(P.cc(a))}},
F:function(a,b){var u,t
u=new Array(a.length)
u.fixed$length=Array
for(t=0;t<a.length;++t)this.a9(u,t,H.n(a[t]))
return u.join(b)},
jz:function(a){return this.F(a,"")},
I:function(a,b){if(b<0||b>=a.length)return H.h(a,b)
return a[b]},
eQ:function(a,b,c){var u=a.length
if(b>u)throw H.i(P.aD(b,0,a.length,"start",null))
if(c<b||c>a.length)throw H.i(P.aD(c,b,a.length,"end",null))
if(b===c)return H.d([],[H.w(a,0)])
return H.d(a.slice(b,c),[H.w(a,0)])},
gjr:function(a){if(a.length>0)return a[0]
throw H.i(H.ki())},
gcA:function(a){var u=a.length
if(u>0)return a[u-1]
throw H.i(H.ki())},
eN:function(a,b,c,d,e){var u,t,s
u=H.w(a,0)
H.j(d,"$ie",[u],"$ae")
if(!!a.immutable$list)H.q(P.al("setRange"))
P.jM(b,c,a.length,null,null,null)
t=c-b
if(t===0)return
H.j(d,"$ib",[u],"$ab")
u=J.jp(d)
if(e+t>u.gk(d))throw H.i(H.lN())
if(e<b)for(s=t-1;s>=0;--s)a[b+s]=u.j(d,e+s)
else for(s=0;s<t;++s)a[b+s]=u.j(d,e+s)},
bi:function(a,b,c,d){return this.eN(a,b,c,d,0)},
am:function(a,b){var u
for(u=0;u<a.length;++u)if(J.K(a[u],b))return!0
return!1},
i:function(a){return P.jH(a,"[","]")},
gU:function(a){return new J.ao(a,a.length,0,[H.w(a,0)])},
gK:function(a){return H.ct(a)},
gk:function(a){return a.length},
sk:function(a,b){if(!!a.fixed$length)H.q(P.al("set length"))
if(b<0)throw H.i(P.aD(b,0,null,"newLength",null))
a.length=b},
j:function(a,b){if(b>=a.length||b<0)throw H.i(H.c_(a,b))
return a[b]},
a9:function(a,b,c){H.D(c,H.w(a,0))
if(!!a.immutable$list)H.q(P.al("indexed set"))
if(b>=a.length||b<0)throw H.i(H.c_(a,b))
a[b]=c},
n:function(a,b){var u,t
u=[H.w(a,0)]
H.j(b,"$ib",u,"$ab")
t=C.h.n(a.length,b.gk(b))
u=H.d([],u)
this.sk(u,t)
this.bi(u,0,a.length,a)
this.bi(u,a.length,t,b)
return u},
$ie:1,
$ib:1}
J.jI.prototype={}
J.ao.prototype={
gM:function(a){return this.d},
C:function(){var u,t,s
u=this.a
t=u.length
if(this.b!==t)throw H.i(H.A(u))
s=this.c
if(s>=t){this.sd9(null)
return!1}this.sd9(u[s]);++this.c
return!0},
sd9:function(a){this.d=H.D(a,H.w(this,0))},
$iaU:1}
J.bw.prototype={
kc:function(a){var u
if(a>=-2147483648&&a<=2147483647)return a|0
if(isFinite(a)){u=a<0?Math.ceil(a):Math.floor(a)
return u+0}throw H.i(P.al(""+a+".toInt()"))},
cv:function(a){var u,t
if(a>=0){if(a<=2147483647)return a|0}else if(a>=-2147483648){u=a|0
return a===u?u:u-1}t=Math.floor(a)
if(isFinite(t))return t
throw H.i(P.al(""+a+".floor()"))},
a0:function(a){if(a>0){if(a!==1/0)return Math.round(a)}else if(a>-1/0)return 0-Math.round(0-a)
throw H.i(P.al(""+a+".round()"))},
ew:function(a,b){var u,t
if(b>20)throw H.i(P.aD(b,0,20,"fractionDigits",null))
u=a.toFixed(b)
if(a===0)t=1/a<0
else t=!1
if(t)return"-"+u
return u},
i:function(a){if(a===0&&1/a<0)return"-0.0"
else return""+a},
gK:function(a){var u,t,s,r,q
u=a|0
if(a===u)return 536870911&u
t=Math.abs(a)
s=Math.log(t)/0.6931471805599453|0
r=Math.pow(2,s)
q=t<1?t/r:r/t
return 536870911&((q*9007199254740992|0)+(q*3542243181176521|0))*599197+s*1259},
n:function(a,b){if(typeof b!=="number")throw H.i(H.ba(b))
return a+b},
p:function(a,b){if(typeof b!=="number")throw H.i(H.ba(b))
return a-b},
v:function(a,b){if(typeof b!=="number")throw H.i(H.ba(b))
return a*b},
eL:function(a,b){var u=a%b
if(u===0)return 0
if(u>0)return u
if(b<0)return u-b
else return u+b},
eV:function(a,b){if((a|0)===a)if(b>=1||b<-1)return a/b|0
return this.du(a,b)},
a5:function(a,b){return(a|0)===a?a/b|0:this.du(a,b)},
du:function(a,b){var u=a/b
if(u>=-2147483648&&u<=2147483647)return u|0
if(u>0){if(u!==1/0)return Math.floor(u)}else if(u>-1/0)return Math.ceil(u)
throw H.i(P.al("Result of truncating division is "+H.n(u)+": "+H.n(a)+" ~/ "+b))},
bp:function(a,b){var u
if(a>0)u=this.ii(a,b)
else{u=b>31?31:b
u=a>>u>>>0}return u},
ii:function(a,b){return b>31?0:a>>>b},
$ix:1,
$ia1:1}
J.dl.prototype={$iy:1}
J.dk.prototype={}
J.bx.prototype={
cl:function(a,b){if(b<0)throw H.i(H.c_(a,b))
if(b>=a.length)H.q(H.c_(a,b))
return a.charCodeAt(b)},
bm:function(a,b){if(b>=a.length)throw H.i(H.c_(a,b))
return a.charCodeAt(b)},
n:function(a,b){if(typeof b!=="string")throw H.i(P.jz(b,null,null))
return a+b},
cT:function(a,b,c){if(c==null)c=a.length
if(b<0)throw H.i(P.dH(b,null,null))
if(b>c)throw H.i(P.dH(b,null,null))
if(c>a.length)throw H.i(P.dH(c,null,null))
return a.substring(b,c)},
cS:function(a,b){return this.cT(a,b,null)},
v:function(a,b){var u,t
if(0>=b)return""
if(b===1||a.length===0)return a
if(b!==b>>>0)throw H.i(C.z)
for(u=a,t="";!0;){if((b&1)===1)t=u+t
b=b>>>1
if(b===0)break
u+=u}return t},
jN:function(a,b,c){var u=b-a.length
if(u<=0)return a
return this.v(c,u)+a},
aj:function(a,b){return this.jN(a,b," ")},
i:function(a){return a},
gK:function(a){var u,t,s
for(u=a.length,t=0,s=0;s<u;++s){t=536870911&t+a.charCodeAt(s)
t=536870911&t+((524287&t)<<10)
t^=t>>6}t=536870911&t+((67108863&t)<<3)
t^=t>>11
return 536870911&t+((16383&t)<<15)},
gk:function(a){return a.length},
$iks:1,
$io:1}
H.a5.prototype={
gk:function(a){return this.a.length},
j:function(a,b){return C.j.cl(this.a,b)},
$ae3:function(){return[P.y]},
$au:function(){return[P.y]},
$ae:function(){return[P.y]},
$ab:function(){return[P.y]}}
H.fv.prototype={}
H.ds.prototype={
gM:function(a){return this.d},
C:function(){var u,t,s,r
u=this.a
t=J.jp(u)
s=t.gk(u)
if(this.b!==s)throw H.i(P.cc(u))
r=this.c
if(r>=s){this.saX(null)
return!1}this.saX(t.I(u,r));++this.c
return!0},
saX:function(a){this.d=H.D(a,H.w(this,0))},
$iaU:1}
H.h0.prototype={
gU:function(a){return new H.h1(J.c6(this.a),this.b,this.$ti)},
gk:function(a){return J.c7(this.a)},
I:function(a,b){return this.b.$1(J.k8(this.a,b))},
$ae:function(a,b){return[b]}}
H.h1.prototype={
C:function(){var u=this.b
if(u.C()){this.saX(this.c.$1(u.gM(u)))
return!0}this.saX(null)
return!1},
gM:function(a){return this.a},
saX:function(a){this.a=H.D(a,H.w(this,1))},
$aaU:function(a,b){return[b]}}
H.iG.prototype={
gU:function(a){return new H.iH(J.c6(this.a),this.b,this.$ti)}}
H.iH.prototype={
C:function(){var u,t
for(u=this.a,t=this.b;u.C();)if(t.$1(u.gM(u)))return!0
return!1},
gM:function(a){var u=this.a
return u.gM(u)}}
H.bO.prototype={}
H.e3.prototype={}
H.e2.prototype={}
H.hv.prototype={}
H.i9.prototype={
ai:function(a){var u,t,s
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
H.hn.prototype={
i:function(a){var u=this.b
if(u==null)return"NoSuchMethodError: "+H.n(this.a)
return"NoSuchMethodError: method not found: '"+u+"' on null"}}
H.fQ.prototype={
i:function(a){var u,t
u=this.b
if(u==null)return"NoSuchMethodError: "+H.n(this.a)
t=this.c
if(t==null)return"NoSuchMethodError: method not found: '"+u+"' ("+H.n(this.a)+")"
return"NoSuchMethodError: method not found: '"+u+"' on '"+t+"' ("+H.n(this.a)+")"}}
H.il.prototype={
i:function(a){var u=this.a
return u.length===0?"Error":"Error: "+u}}
H.jy.prototype={
$1:function(a){if(!!J.Z(a).$ibq)if(a.$thrownJsError==null)a.$thrownJsError=this.a
return a},
$S:15}
H.eE.prototype={
i:function(a){var u,t
u=this.b
if(u!=null)return u
u=this.a
t=u!==null&&typeof u==="object"?u.stack:null
u=t==null?"":t
this.b=u
return u},
$iaq:1}
H.ca.prototype={
i:function(a){return"Closure '"+H.bR(this).trim()+"'"},
$ijG:1,
gkn:function(){return this},
$C:"$1",
$R:1,
$D:null}
H.hX.prototype={}
H.hP.prototype={
i:function(a){var u=this.$static_name
if(u==null)return"Closure of unknown static method"
return"Closure '"+H.c4(u)+"'"}}
H.c8.prototype={
t:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof H.c8))return!1
return this.a===b.a&&this.b===b.b&&this.c===b.c},
gK:function(a){var u,t
u=this.c
if(u==null)t=H.ct(this.a)
else t=typeof u!=="object"?J.bI(u):H.ct(u)
return(t^H.ct(this.b))>>>0},
i:function(a){var u=this.c
if(u==null)u=this.a
return"Closure '"+H.n(this.d)+"' of "+("Instance of '"+H.bR(u)+"'")}}
H.ib.prototype={
i:function(a){return this.a}}
H.fe.prototype={
i:function(a){return this.a}}
H.hC.prototype={
i:function(a){return"RuntimeError: "+H.n(this.a)}}
H.aV.prototype={
gk:function(a){return this.a},
gaF:function(a){return new H.dr(this,[H.w(this,0)])},
dN:function(a,b){var u,t
if(typeof b==="string"){u=this.b
if(u==null)return!1
return this.d6(u,b)}else if(typeof b==="number"&&(b&0x3ffffff)===b){t=this.c
if(t==null)return!1
return this.d6(t,b)}else return this.jx(b)},
jx:function(a){var u=this.d
if(u==null)return!1
return this.cw(this.bW(u,J.bI(a)&0x3ffffff),a)>=0},
j:function(a,b){var u,t,s,r
if(typeof b==="string"){u=this.b
if(u==null)return
t=this.bn(u,b)
s=t==null?null:t.b
return s}else if(typeof b==="number"&&(b&0x3ffffff)===b){r=this.c
if(r==null)return
t=this.bn(r,b)
s=t==null?null:t.b
return s}else return this.jy(b)},
jy:function(a){var u,t,s
u=this.d
if(u==null)return
t=this.bW(u,J.bI(a)&0x3ffffff)
s=this.cw(t,a)
if(s<0)return
return t[s].b},
a9:function(a,b,c){var u,t,s,r,q,p
H.D(b,H.w(this,0))
H.D(c,H.w(this,1))
if(typeof b==="string"){u=this.b
if(u==null){u=this.c_()
this.b=u}this.d_(u,b,c)}else if(typeof b==="number"&&(b&0x3ffffff)===b){t=this.c
if(t==null){t=this.c_()
this.c=t}this.d_(t,b,c)}else{s=this.d
if(s==null){s=this.c_()
this.d=s}r=J.bI(b)&0x3ffffff
q=this.bW(s,r)
if(q==null)this.c7(s,r,[this.c0(b,c)])
else{p=this.cw(q,b)
if(p>=0)q[p].b=c
else q.push(this.c0(b,c))}}},
R:function(a,b){var u,t
H.l(b,{func:1,ret:-1,args:[H.w(this,0),H.w(this,1)]})
u=this.e
t=this.r
for(;u!=null;){b.$2(u.a,u.b)
if(t!==this.r)throw H.i(P.cc(this))
u=u.c}},
d_:function(a,b,c){var u
H.D(b,H.w(this,0))
H.D(c,H.w(this,1))
u=this.bn(a,b)
if(u==null)this.c7(a,b,this.c0(b,c))
else u.b=c},
c0:function(a,b){var u,t
u=new H.fU(H.D(a,H.w(this,0)),H.D(b,H.w(this,1)))
if(this.e==null){this.f=u
this.e=u}else{t=this.f
u.d=t
t.c=u
this.f=u}++this.a
this.r=this.r+1&67108863
return u},
cw:function(a,b){var u,t
if(a==null)return-1
u=a.length
for(t=0;t<u;++t)if(J.K(a[t].a,b))return t
return-1},
i:function(a){return P.kl(this)},
bn:function(a,b){return a[b]},
bW:function(a,b){return a[b]},
c7:function(a,b,c){a[b]=c},
fu:function(a,b){delete a[b]},
d6:function(a,b){return this.bn(a,b)!=null},
c_:function(){var u=Object.create(null)
this.c7(u,"<non-identifier-key>",u)
this.fu(u,"<non-identifier-key>")
return u}}
H.fU.prototype={}
H.dr.prototype={
gk:function(a){return this.a.a},
gU:function(a){var u,t
u=this.a
t=new H.fV(u,u.r,this.$ti)
t.c=u.e
return t}}
H.fV.prototype={
gM:function(a){return this.d},
C:function(){var u=this.a
if(this.b!==u.r)throw H.i(P.cc(u))
else{u=this.c
if(u==null){this.scZ(null)
return!1}else{this.scZ(u.a)
this.c=this.c.c
return!0}}},
scZ:function(a){this.d=H.D(a,H.w(this,0))},
$iaU:1}
H.jq.prototype={
$1:function(a){return this.a(a)},
$S:15}
H.jr.prototype={
$2:function(a,b){return this.a(a,b)},
$S:30}
H.js.prototype={
$1:function(a){return this.a(H.R(a))},
$S:32}
H.fP.prototype={
i:function(a){return"RegExp/"+this.a+"/"},
$iks:1}
H.cq.prototype={$inm:1}
H.dy.prototype={
gk:function(a){return a.length},
$iF:1,
$aF:function(){}}
H.cp.prototype={
j:function(a,b){H.bE(b,a,a.length)
return a[b]},
$abO:function(){return[P.x]},
$au:function(){return[P.x]},
$ie:1,
$ae:function(){return[P.x]},
$ib:1,
$ab:function(){return[P.x]}}
H.dz.prototype={
$abO:function(){return[P.y]},
$au:function(){return[P.y]},
$ie:1,
$ae:function(){return[P.y]},
$ib:1,
$ab:function(){return[P.y]}}
H.hf.prototype={
j:function(a,b){H.bE(b,a,a.length)
return a[b]}}
H.hg.prototype={
j:function(a,b){H.bE(b,a,a.length)
return a[b]}}
H.hh.prototype={
j:function(a,b){H.bE(b,a,a.length)
return a[b]}}
H.hi.prototype={
j:function(a,b){H.bE(b,a,a.length)
return a[b]}}
H.hj.prototype={
j:function(a,b){H.bE(b,a,a.length)
return a[b]}}
H.dA.prototype={
gk:function(a){return a.length},
j:function(a,b){H.bE(b,a,a.length)
return a[b]},
$inn:1}
H.hk.prototype={
gk:function(a){return a.length},
j:function(a,b){H.bE(b,a,a.length)
return a[b]}}
H.cN.prototype={}
H.cO.prototype={}
H.cP.prototype={}
H.cQ.prototype={}
P.iJ.prototype={
$1:function(a){var u,t
u=this.a
t=u.a
u.a=null
t.$0()},
$S:14}
P.iI.prototype={
$1:function(a){var u,t
this.a.a=H.l(a,{func:1,ret:-1})
u=this.b
t=this.c
u.firstChild?u.removeChild(t):u.appendChild(t)},
$S:29}
P.iK.prototype={
$0:function(){this.a.$0()},
$S:1}
P.iL.prototype={
$0:function(){this.a.$0()},
$S:1}
P.eK.prototype={
fc:function(a,b){if(self.setTimeout!=null)this.b=self.setTimeout(H.bZ(new P.je(this,b),0),a)
else throw H.i(P.al("`setTimeout()` not found."))},
fd:function(a,b){if(self.setTimeout!=null)this.b=self.setInterval(H.bZ(new P.jd(this,a,Date.now(),b),0),a)
else throw H.i(P.al("Periodic timer."))},
$ib5:1}
P.je.prototype={
$0:function(){var u=this.a
u.b=null
u.c=1
this.b.$0()},
$S:3}
P.jd.prototype={
$0:function(){var u,t,s,r
u=this.a
t=u.c+1
s=this.b
if(s>0){r=Date.now()-this.c
if(r>(t+1)*s)t=C.h.eV(r,s)}u.c=t
this.d.$1(u)},
$S:1}
P.b9.prototype={
jE:function(a){if(this.c!==6)return!0
return this.b.b.cL(H.l(this.d,{func:1,ret:P.a4,args:[P.M]}),a.a,P.a4,P.M)},
jw:function(a){var u,t,s,r
u=this.e
t=P.M
s={futureOr:1,type:H.w(this,1)}
r=this.b.b
if(H.f_(u,{func:1,args:[P.M,P.aq]}))return H.k_(r.k6(u,a.a,a.b,null,t,P.aq),s)
else return H.k_(r.cL(H.l(u,{func:1,args:[P.M]}),a.a,null,t),s)}}
P.ay.prototype={
ev:function(a,b,c){var u,t,s,r
u=H.w(this,0)
H.l(a,{func:1,ret:{futureOr:1,type:c},args:[u]})
t=$.W
if(t!==C.k){t.toString
H.l(a,{func:1,ret:{futureOr:1,type:c},args:[u]})
if(b!=null)b=P.mu(b,t)}H.l(a,{func:1,ret:{futureOr:1,type:c},args:[u]})
s=new P.ay(0,$.W,[c])
r=b==null?1:3
this.d0(new P.b9(s,r,a,b,[u,c]))
return s},
kb:function(a,b){return this.ev(a,null,b)},
d0:function(a){var u,t
u=this.a
if(u<=1){a.a=H.k(this.c,"$ib9")
this.c=a}else{if(u===2){t=H.k(this.c,"$iay")
u=t.a
if(u<4){t.d0(a)
return}this.a=u
this.c=t.c}u=this.b
u.toString
P.jl(null,null,u,H.l(new P.iS(this,a),{func:1,ret:-1}))}},
dm:function(a){var u,t,s,r,q,p
u={}
u.a=a
if(a==null)return
t=this.a
if(t<=1){s=H.k(this.c,"$ib9")
this.c=a
if(s!=null){for(r=a;q=r.a,q!=null;r=q);r.a=s}}else{if(t===2){p=H.k(this.c,"$iay")
t=p.a
if(t<4){p.dm(a)
return}this.a=t
this.c=p.c}u.a=this.bo(a)
t=this.b
t.toString
P.jl(null,null,t,H.l(new P.iW(u,this),{func:1,ret:-1}))}},
c3:function(){var u=H.k(this.c,"$ib9")
this.c=null
return this.bo(u)},
bo:function(a){var u,t,s
for(u=a,t=null;u!=null;t=u,u=s){s=u.a
u.a=t}return t},
d2:function(a){var u,t,s
u=H.w(this,0)
H.k_(a,{futureOr:1,type:u})
t=this.$ti
if(H.cY(a,"$ici",t,"$aci"))if(H.cY(a,"$iay",t,null))P.kR(a,this)
else P.ml(a,this)
else{s=this.c3()
H.D(a,u)
this.a=4
this.c=a
P.cL(this,s)}},
d3:function(a,b){var u
H.k(b,"$iaq")
u=this.c3()
this.a=8
this.c=new P.aj(a,b)
P.cL(this,u)},
$ici:1}
P.iS.prototype={
$0:function(){P.cL(this.a,this.b)},
$S:1}
P.iW.prototype={
$0:function(){P.cL(this.b,this.a.a)},
$S:1}
P.iT.prototype={
$1:function(a){var u=this.a
u.a=0
u.d2(a)},
$S:14}
P.iU.prototype={
$2:function(a,b){H.k(b,"$iaq")
this.a.d3(a,b)},
$1:function(a){return this.$2(a,null)},
$S:35}
P.iV.prototype={
$0:function(){this.a.d3(this.b,this.c)},
$S:1}
P.iZ.prototype={
$0:function(){var u,t,s,r,q,p,o
u=null
try{r=this.c
u=r.b.b.es(H.l(r.d,{func:1}),null)}catch(q){t=H.bH(q)
s=H.c2(q)
if(this.d){r=H.k(this.a.a.c,"$iaj").a
p=t
p=r==null?p==null:r===p
r=p}else r=!1
p=this.b
if(r)p.b=H.k(this.a.a.c,"$iaj")
else p.b=new P.aj(t,s)
p.a=!0
return}if(!!J.Z(u).$ici){if(u instanceof P.ay&&u.a>=4){if(u.a===8){r=this.b
r.b=H.k(u.c,"$iaj")
r.a=!0}return}o=this.a.a
r=this.b
r.b=u.kb(new P.j_(o),null)
r.a=!1}},
$S:3}
P.j_.prototype={
$1:function(a){return this.a},
$S:37}
P.iY.prototype={
$0:function(){var u,t,s,r,q,p,o
try{s=this.b
r=H.w(s,0)
q=H.D(this.c,r)
p=H.w(s,1)
this.a.b=s.b.b.cL(H.l(s.d,{func:1,ret:{futureOr:1,type:p},args:[r]}),q,{futureOr:1,type:p},r)}catch(o){u=H.bH(o)
t=H.c2(o)
s=this.a
s.b=new P.aj(u,t)
s.a=!0}},
$S:3}
P.iX.prototype={
$0:function(){var u,t,s,r,q,p,o,n
try{u=H.k(this.a.a.c,"$iaj")
r=this.c
if(r.jE(u)&&r.e!=null){q=this.b
q.b=r.jw(u)
q.a=!1}}catch(p){t=H.bH(p)
s=H.c2(p)
r=H.k(this.a.a.c,"$iaj")
q=r.a
o=t
n=this.b
if(q==null?o==null:q===o)n.b=r
else n.b=new P.aj(t,s)
n.a=!0}},
$S:3}
P.e8.prototype={}
P.hS.prototype={
gk:function(a){var u,t,s,r
u={}
t=new P.ay(0,$.W,[P.y])
u.a=0
s=H.w(this,0)
r=H.l(new P.hU(u,this),{func:1,ret:-1,args:[s]})
H.l(new P.hV(u,t),{func:1,ret:-1})
W.a9(this.a,this.b,r,!1,s)
return t}}
P.hU.prototype={
$1:function(a){H.D(a,H.w(this.b,0));++this.a.a},
$S:function(){return{func:1,ret:P.J,args:[H.w(this.b,0)]}}}
P.hV.prototype={
$0:function(){this.b.d2(this.a.a)},
$S:1}
P.cy.prototype={}
P.hT.prototype={}
P.b5.prototype={}
P.aj.prototype={
i:function(a){return H.n(this.a)},
$ibq:1}
P.jg.prototype={$inA:1}
P.jk.prototype={
$0:function(){var u,t,s
u=this.a
t=u.a
if(t==null){s=new P.dD()
u.a=s
u=s}else u=t
t=this.b
if(t==null)throw H.i(u)
s=H.i(u)
s.stack=t.i(0)
throw s},
$S:1}
P.j6.prototype={
k7:function(a){var u,t,s
H.l(a,{func:1,ret:-1})
try{if(C.k===$.W){a.$0()
return}P.kW(null,null,this,a,-1)}catch(s){u=H.bH(s)
t=H.c2(s)
P.jj(null,null,this,u,H.k(t,"$iaq"))}},
k8:function(a,b,c){var u,t,s
H.l(a,{func:1,ret:-1,args:[c]})
H.D(b,c)
try{if(C.k===$.W){a.$1(b)
return}P.kX(null,null,this,a,b,-1,c)}catch(s){u=H.bH(s)
t=H.c2(s)
P.jj(null,null,this,u,H.k(t,"$iaq"))}},
j7:function(a,b){return new P.j8(this,H.l(a,{func:1,ret:b}),b)},
cg:function(a){return new P.j7(this,H.l(a,{func:1,ret:-1}))},
dC:function(a,b){return new P.j9(this,H.l(a,{func:1,ret:-1,args:[b]}),b)},
es:function(a,b){H.l(a,{func:1,ret:b})
if($.W===C.k)return a.$0()
return P.kW(null,null,this,a,b)},
cL:function(a,b,c,d){H.l(a,{func:1,ret:c,args:[d]})
H.D(b,d)
if($.W===C.k)return a.$1(b)
return P.kX(null,null,this,a,b,c,d)},
k6:function(a,b,c,d,e,f){H.l(a,{func:1,ret:d,args:[e,f]})
H.D(b,e)
H.D(c,f)
if($.W===C.k)return a.$2(b,c)
return P.mv(null,null,this,a,b,c,d,e,f)}}
P.j8.prototype={
$0:function(){return this.a.es(this.b,this.c)},
$S:function(){return{func:1,ret:this.c}}}
P.j7.prototype={
$0:function(){return this.a.k7(this.b)},
$S:3}
P.j9.prototype={
$1:function(a){var u=this.c
return this.a.k8(this.b,H.D(a,u),u)},
$S:function(){return{func:1,ret:-1,args:[this.c]}}}
P.j3.prototype={
gU:function(a){return P.kT(this,this.r,H.w(this,0))},
gk:function(a){return this.a},
h:function(a,b){var u
H.D(b,H.w(this,0))
if(typeof b==="number"&&(b&1073741823)===b){u=this.c
if(u==null){u=P.kU()
this.c=u}return this.fp(u,b)}else return this.ff(0,b)},
ff:function(a,b){var u,t,s
H.D(b,H.w(this,0))
u=this.d
if(u==null){u=P.kU()
this.d=u}t=this.d4(b)
s=u[t]
if(s==null)u[t]=[this.bS(b)]
else{if(this.da(s,b)>=0)return!1
s.push(this.bS(b))}return!0},
G:function(a,b){if(typeof b==="number"&&(b&1073741823)===b)return this.i2(this.c,b)
else return this.i1(0,b)},
i1:function(a,b){var u,t,s
u=this.d
if(u==null)return!1
t=this.fK(u,b)
s=this.da(t,b)
if(s<0)return!1
this.dv(t.splice(s,1)[0])
return!0},
fp:function(a,b){H.D(b,H.w(this,0))
if(H.k(a[b],"$icM")!=null)return!1
a[b]=this.bS(b)
return!0},
i2:function(a,b){var u
if(a==null)return!1
u=H.k(a[b],"$icM")
if(u==null)return!1
this.dv(u)
delete a[b]
return!0},
de:function(){this.r=1073741823&this.r+1},
bS:function(a){var u,t
u=new P.cM(H.D(a,H.w(this,0)))
if(this.e==null){this.f=u
this.e=u}else{t=this.f
u.c=t
t.b=u
this.f=u}++this.a
this.de()
return u},
dv:function(a){var u,t
u=a.c
t=a.b
if(u==null)this.e=t
else u.b=t
if(t==null)this.f=u
else t.c=u;--this.a
this.de()},
d4:function(a){return J.bI(a)&1073741823},
fK:function(a,b){return a[this.d4(b)]},
da:function(a,b){var u,t
if(a==null)return-1
u=a.length
for(t=0;t<u;++t)if(a[t].a==b)return t
return-1}}
P.cM.prototype={}
P.j4.prototype={
gM:function(a){return this.d},
C:function(){var u=this.a
if(this.b!==u.r)throw H.i(P.cc(u))
else{u=this.c
if(u==null){this.sd1(null)
return!1}else{this.sd1(H.D(u.a,H.w(this,0)))
this.c=this.c.b
return!0}}},
sd1:function(a){this.d=H.D(a,H.w(this,0))},
$iaU:1}
P.fW.prototype={$ie:1,$ib:1}
P.u.prototype={
gU:function(a){return new H.ds(a,this.gk(a),0,[H.c1(this,a,"u",0)])},
I:function(a,b){return this.j(a,b)},
ke:function(a,b){var u,t
u=H.d([],[H.c1(this,a,"u",0)])
C.a.sk(u,this.gk(a))
for(t=0;t<this.gk(a);++t)C.a.a9(u,t,this.j(a,t))
return u},
kd:function(a){return this.ke(a,!0)},
n:function(a,b){var u,t
u=[H.c1(this,a,"u",0)]
H.j(b,"$ib",u,"$ab")
t=H.d([],u)
C.a.sk(t,C.h.n(this.gk(a),b.gk(b)))
C.a.bi(t,0,this.gk(a),a)
C.a.bi(t,this.gk(a),t.length,b)
return t},
i:function(a){return P.jH(a,"[","]")}}
P.fZ.prototype={}
P.h_.prototype={
$2:function(a,b){var u,t
u=this.a
if(!u.a)this.b.a+=", "
u.a=!1
u=this.b
t=u.a+=H.n(a)
u.a=t+": "
u.a+=H.n(b)},
$S:12}
P.ah.prototype={
R:function(a,b){var u,t
H.l(b,{func:1,ret:-1,args:[H.c1(this,a,"ah",0),H.c1(this,a,"ah",1)]})
for(u=J.c6(this.gaF(a));u.C();){t=u.gM(u)
b.$2(t,this.j(a,t))}},
gk:function(a){return J.c7(this.gaF(a))},
i:function(a){return P.kl(a)},
$iO:1}
P.ja.prototype={
i:function(a){return P.jH(this,"{","}")},
I:function(a,b){var u,t,s
if(b<0)H.q(P.aD(b,0,null,"index",null))
for(u=P.kT(this,this.r,H.w(this,0)),t=0;u.C();){s=u.d
if(b===t)return s;++t}throw H.i(P.T(b,this,"index",null,t))},
$ie:1,
$ikz:1}
P.en.prototype={}
P.cb.prototype={}
P.da.prototype={}
P.fw.prototype={
$acb:function(){return[P.o,[P.b,P.y]]}}
P.ip.prototype={}
P.iq.prototype={
jc:function(a,b,c){var u,t,s
c=P.jM(b,c,a.length,null,null,null)
u=c-b
if(u===0)return new Uint8Array(0)
t=new Uint8Array(u*3)
s=new P.jf(t)
if(s.fI(a,b,c)!==c)s.dw(C.j.cl(a,c-1),0)
return new Uint8Array(t.subarray(0,H.mq(0,s.b,t.length)))},
jb:function(a){return this.jc(a,0,null)},
$ada:function(){return[P.o,[P.b,P.y]]}}
P.jf.prototype={
dw:function(a,b){var u,t,s,r,q
u=this.c
t=this.b
s=t+1
r=u.length
if((b&64512)===56320){q=65536+((a&1023)<<10)|b&1023
this.b=s
if(t>=r)return H.h(u,t)
u[t]=240|q>>>18
t=s+1
this.b=t
if(s>=r)return H.h(u,s)
u[s]=128|q>>>12&63
s=t+1
this.b=s
if(t>=r)return H.h(u,t)
u[t]=128|q>>>6&63
this.b=s+1
if(s>=r)return H.h(u,s)
u[s]=128|q&63
return!0}else{this.b=s
if(t>=r)return H.h(u,t)
u[t]=224|a>>>12
t=s+1
this.b=t
if(s>=r)return H.h(u,s)
u[s]=128|a>>>6&63
this.b=t+1
if(t>=r)return H.h(u,t)
u[t]=128|a&63
return!1}},
fI:function(a,b,c){var u,t,s,r,q,p,o
if(b!==c&&(C.j.cl(a,c-1)&64512)===55296)--c
for(u=this.c,t=u.length,s=b;s<c;++s){r=C.j.bm(a,s)
if(r<=127){q=this.b
if(q>=t)break
this.b=q+1
u[q]=r}else if((r&64512)===55296){if(this.b+3>=t)break
p=s+1
if(this.dw(r,C.j.bm(a,p)))s=p}else if(r<=2047){q=this.b
o=q+1
if(o>=t)break
this.b=o
if(q>=t)return H.h(u,q)
u[q]=192|r>>>6
this.b=o+1
u[o]=128|r&63}else{q=this.b
if(q+2>=t)break
o=q+1
this.b=o
if(q>=t)return H.h(u,q)
u[q]=224|r>>>12
q=o+1
this.b=q
if(o>=t)return H.h(u,o)
u[o]=128|r>>>6&63
this.b=q+1
if(q>=t)return H.h(u,q)
u[q]=128|r&63}}return s}}
P.a4.prototype={}
P.ap.prototype={
t:function(a,b){if(b==null)return!1
return b instanceof P.ap&&this.a===b.a&&!0},
gK:function(a){var u=this.a
return(u^C.h.bp(u,30))&1073741823},
i:function(a){var u,t,s,r,q,p,o,n
u=P.lG(H.m2(this))
t=P.dc(H.m0(this))
s=P.dc(H.lX(this))
r=P.dc(H.lY(this))
q=P.dc(H.m_(this))
p=P.dc(H.m1(this))
o=P.lH(H.lZ(this))
n=u+"-"+t+"-"+s+" "+r+":"+q+":"+p+"."+o
return n}}
P.x.prototype={}
P.aR.prototype={
n:function(a,b){return new P.aR(C.h.n(this.a,b.gfA()))},
p:function(a,b){return new P.aR(C.h.p(this.a,b.gfA()))},
t:function(a,b){if(b==null)return!1
return b instanceof P.aR&&this.a===b.a},
gK:function(a){return C.h.gK(this.a)},
i:function(a){var u,t,s,r,q
u=new P.fu()
t=this.a
if(t<0)return"-"+new P.aR(0-t).i(0)
s=u.$1(C.h.a5(t,6e7)%60)
r=u.$1(C.h.a5(t,1e6)%60)
q=new P.ft().$1(t%1e6)
return""+C.h.a5(t,36e8)+":"+H.n(s)+":"+H.n(r)+"."+H.n(q)}}
P.ft.prototype={
$1:function(a){if(a>=1e5)return""+a
if(a>=1e4)return"0"+a
if(a>=1000)return"00"+a
if(a>=100)return"000"+a
if(a>=10)return"0000"+a
return"00000"+a},
$S:13}
P.fu.prototype={
$1:function(a){if(a>=10)return""+a
return"0"+a},
$S:13}
P.bq.prototype={}
P.dD.prototype={
i:function(a){return"Throw of null."}}
P.aN.prototype={
gbU:function(){return"Invalid argument"+(!this.a?"(s)":"")},
gbT:function(){return""},
i:function(a){var u,t,s,r,q,p
u=this.c
t=u!=null?" ("+u+")":""
u=this.d
s=u==null?"":": "+u
r=this.gbU()+t+s
if(!this.a)return r
q=this.gbT()
p=P.fy(this.b)
return r+q+": "+p}}
P.bS.prototype={
gbU:function(){return"RangeError"},
gbT:function(){var u,t,s
u=this.e
if(u==null){u=this.f
t=u!=null?": Not less than or equal to "+H.n(u):""}else{s=this.f
if(s==null)t=": Not greater than or equal to "+H.n(u)
else if(s>u)t=": Not in range "+H.n(u)+".."+H.n(s)+", inclusive"
else t=s<u?": Valid value range is empty":": Only valid value is "+H.n(u)}return t}}
P.fM.prototype={
gbU:function(){return"RangeError"},
gbT:function(){var u,t
u=H.af(this.b)
if(typeof u!=="number")return u.bh()
if(u<0)return": index must not be negative"
t=this.f
if(t===0)return": no indices are valid"
return": index should be less than "+H.n(t)},
gk:function(a){return this.f}}
P.im.prototype={
i:function(a){return"Unsupported operation: "+this.a}}
P.ik.prototype={
i:function(a){var u=this.a
return u!=null?"UnimplementedError: "+u:"UnimplementedError"}}
P.dP.prototype={
i:function(a){return"Bad state: "+this.a}}
P.fi.prototype={
i:function(a){var u=this.a
if(u==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+P.fy(u)+"."}}
P.hq.prototype={
i:function(a){return"Out of Memory"},
$ibq:1}
P.dO.prototype={
i:function(a){return"Stack Overflow"},
$ibq:1}
P.fn.prototype={
i:function(a){var u=this.a
return u==null?"Reading static variable during its initialization":"Reading static variable '"+u+"' during its initialization"}}
P.eg.prototype={
i:function(a){return"Exception: "+this.a}}
P.fI.prototype={
i:function(a){var u,t,s,r
u=this.a
t=""!==u?"FormatException: "+u:"FormatException"
s=this.b
r=s.length>78?C.j.cT(s,0,75)+"...":s
return t+"\n"+r}}
P.y.prototype={}
P.e.prototype={
gk:function(a){var u,t
u=this.gU(this)
for(t=0;u.C();)++t
return t},
I:function(a,b){var u,t,s
if(b<0)H.q(P.aD(b,0,null,"index",null))
for(u=this.gU(this),t=0;u.C();){s=u.gM(u)
if(b===t)return s;++t}throw H.i(P.T(b,this,"index",null,t))},
i:function(a){return P.lM(this,"(",")")}}
P.aU.prototype={}
P.b.prototype={$ie:1}
P.O.prototype={}
P.J.prototype={
gK:function(a){return P.M.prototype.gK.call(this,this)},
i:function(a){return"null"}}
P.a1.prototype={}
P.M.prototype={constructor:P.M,$iM:1,
t:function(a,b){return this===b},
gK:function(a){return H.ct(this)},
i:function(a){return"Instance of '"+H.bR(this)+"'"},
toString:function(){return this.i(this)}}
P.aq.prototype={}
P.o.prototype={$iks:1}
P.bA.prototype={
gk:function(a){return this.a.length},
i:function(a){var u=this.a
return u.charCodeAt(0)==0?u:u}}
W.t.prototype={}
W.f2.prototype={
gk:function(a){return a.length}}
W.f4.prototype={
i:function(a){return String(a)}}
W.f5.prototype={
i:function(a){return String(a)}}
W.d3.prototype={}
W.d4.prototype={}
W.bL.prototype={
cO:function(a,b,c){if(c!=null)return this.fL(a,b,P.mC(c,null))
return this.fM(a,b)},
eF:function(a,b){return this.cO(a,b,null)},
fL:function(a,b,c){return a.getContext(b,c)},
fM:function(a,b){return a.getContext(b)},
$ibL:1,
$ikc:1}
W.bM.prototype={
fN:function(a,b,c,d,e){return a.getImageData(b,c,d,e)},
jm:function(a,b,c,d,e,f){return a.drawImage(b,c,d,e,f)},
$ibM:1}
W.bo.prototype={
gk:function(a){return a.length}}
W.cd.prototype={$icd:1}
W.fj.prototype={
gk:function(a){return a.length}}
W.P.prototype={$iP:1}
W.ce.prototype={
gk:function(a){return a.length}}
W.fk.prototype={}
W.aP.prototype={}
W.aQ.prototype={}
W.fl.prototype={
gk:function(a){return a.length}}
W.fm.prototype={
gk:function(a){return a.length}}
W.fo.prototype={
gk:function(a){return a.length}}
W.cf.prototype={$icf:1}
W.cg.prototype={
eG:function(a,b){return a.getElementById(b)}}
W.fq.prototype={
i:function(a){return String(a)}}
W.de.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.i(P.T(b,a,null,null,null))
return a[b]},
I:function(a,b){if(b<0||b>=a.length)return H.h(a,b)
return a[b]},
$iF:1,
$aF:function(){return[[P.ad,P.a1]]},
$au:function(){return[[P.ad,P.a1]]},
$ie:1,
$ae:function(){return[[P.ad,P.a1]]},
$ib:1,
$ab:function(){return[[P.ad,P.a1]]},
$az:function(){return[[P.ad,P.a1]]}}
W.df.prototype={
i:function(a){return"Rectangle ("+H.n(a.left)+", "+H.n(a.top)+") "+H.n(this.gak(a))+" x "+H.n(this.gah(a))},
t:function(a,b){var u
if(b==null)return!1
if(!H.cY(b,"$iad",[P.a1],"$aad"))return!1
u=J.f0(b)
return a.left===u.gbI(b)&&a.top===u.gbL(b)&&this.gak(a)===u.gak(b)&&this.gah(a)===u.gah(b)},
gK:function(a){return W.kS(C.d.gK(a.left),C.d.gK(a.top),C.d.gK(this.gak(a)),C.d.gK(this.gah(a)))},
gdD:function(a){return a.bottom},
gah:function(a){return a.height},
gbI:function(a){return a.left},
gbK:function(a){return a.right},
gbL:function(a){return a.top},
gak:function(a){return a.width},
$iad:1,
$aad:function(){return[P.a1]}}
W.fr.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.i(P.T(b,a,null,null,null))
return a[b]},
I:function(a,b){if(b<0||b>=a.length)return H.h(a,b)
return a[b]},
$iF:1,
$aF:function(){return[P.o]},
$au:function(){return[P.o]},
$ie:1,
$ae:function(){return[P.o]},
$ib:1,
$ab:function(){return[P.o]},
$az:function(){return[P.o]}}
W.fs.prototype={
gk:function(a){return a.length}}
W.iN.prototype={
gk:function(a){return this.b.length},
j:function(a,b){var u=this.b
if(b<0||b>=u.length)return H.h(u,b)
return H.k(u[b],"$ia6")},
h:function(a,b){J.k7(this.a,b)
return b},
gU:function(a){var u=this.kd(this)
return new J.ao(u,u.length,0,[H.w(u,0)])},
$au:function(){return[W.a6]},
$ae:function(){return[W.a6]},
$ab:function(){return[W.a6]}}
W.a6.prototype={
gdH:function(a){return new W.iN(a,a.children)},
gdL:function(a){var u,t,s,r
u=a.clientLeft
t=a.clientTop
s=a.clientWidth
r=a.clientHeight
if(typeof s!=="number")return s.bh()
if(s<0)s=-s*0
if(typeof r!=="number")return r.bh()
if(r<0)r=-r*0
return new P.ad(u,t,s,r,[P.a1])},
i:function(a){return a.localName},
$ia6:1}
W.m.prototype={$im:1}
W.f.prototype={
j1:function(a,b,c,d){H.l(c,{func:1,args:[W.m]})
if(c!=null)this.fg(a,b,c,!1)},
fg:function(a,b,c,d){return a.addEventListener(b,H.bZ(H.l(c,{func:1,args:[W.m]}),1),!1)},
$if:1}
W.aS.prototype={$iaS:1}
W.fC.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.i(P.T(b,a,null,null,null))
return a[b]},
I:function(a,b){if(b<0||b>=a.length)return H.h(a,b)
return a[b]},
$iF:1,
$aF:function(){return[W.aS]},
$au:function(){return[W.aS]},
$ie:1,
$ae:function(){return[W.aS]},
$ib:1,
$ab:function(){return[W.aS]},
$az:function(){return[W.aS]}}
W.fD.prototype={
gk:function(a){return a.length}}
W.fH.prototype={
gk:function(a){return a.length}}
W.aT.prototype={$iaT:1}
W.fK.prototype={
gk:function(a){return a.length}}
W.bP.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.i(P.T(b,a,null,null,null))
return a[b]},
I:function(a,b){if(b<0||b>=a.length)return H.h(a,b)
return a[b]},
$iF:1,
$aF:function(){return[W.I]},
$au:function(){return[W.I]},
$ie:1,
$ae:function(){return[W.I]},
$ib:1,
$ab:function(){return[W.I]},
$ibP:1,
$az:function(){return[W.I]}}
W.dj.prototype={}
W.bs.prototype={$ibs:1,
gdP:function(a){return a.data}}
W.ck.prototype={$ick:1,$ikc:1}
W.aW.prototype={$iaW:1}
W.fX.prototype={
i:function(a){return String(a)}}
W.cn.prototype={}
W.h8.prototype={
gk:function(a){return a.length}}
W.h9.prototype={
j:function(a,b){return P.bm(a.get(H.R(b)))},
R:function(a,b){var u,t
H.l(b,{func:1,ret:-1,args:[P.o,,]})
u=a.entries()
for(;!0;){t=u.next()
if(t.done)return
b.$2(t.value[0],P.bm(t.value[1]))}},
gaF:function(a){var u=H.d([],[P.o])
this.R(a,new W.ha(u))
return u},
gk:function(a){return a.size},
$aah:function(){return[P.o,null]},
$iO:1,
$aO:function(){return[P.o,null]}}
W.ha.prototype={
$2:function(a,b){return C.a.h(this.a,a)},
$S:6}
W.hb.prototype={
j:function(a,b){return P.bm(a.get(H.R(b)))},
R:function(a,b){var u,t
H.l(b,{func:1,ret:-1,args:[P.o,,]})
u=a.entries()
for(;!0;){t=u.next()
if(t.done)return
b.$2(t.value[0],P.bm(t.value[1]))}},
gaF:function(a){var u=H.d([],[P.o])
this.R(a,new W.hc(u))
return u},
gk:function(a){return a.size},
$aah:function(){return[P.o,null]},
$iO:1,
$aO:function(){return[P.o,null]}}
W.hc.prototype={
$2:function(a,b){return C.a.h(this.a,a)},
$S:6}
W.aZ.prototype={$iaZ:1}
W.hd.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.i(P.T(b,a,null,null,null))
return a[b]},
I:function(a,b){if(b<0||b>=a.length)return H.h(a,b)
return a[b]},
$iF:1,
$aF:function(){return[W.aZ]},
$au:function(){return[W.aZ]},
$ie:1,
$ae:function(){return[W.aZ]},
$ib:1,
$ab:function(){return[W.aZ]},
$az:function(){return[W.aZ]}}
W.ab.prototype={$iab:1}
W.iM.prototype={
gU:function(a){var u=this.a.childNodes
return new W.dh(u,u.length,-1,[H.c1(C.N,u,"z",0)])},
gk:function(a){return this.a.childNodes.length},
j:function(a,b){var u=this.a.childNodes
if(b<0||b>=u.length)return H.h(u,b)
return u[b]},
$au:function(){return[W.I]},
$ae:function(){return[W.I]},
$ab:function(){return[W.I]}}
W.I.prototype={
i:function(a){var u=a.nodeValue
return u==null?this.eR(a):u},
a6:function(a,b){return a.appendChild(b)},
$iI:1}
W.cr.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.i(P.T(b,a,null,null,null))
return a[b]},
I:function(a,b){if(b<0||b>=a.length)return H.h(a,b)
return a[b]},
$iF:1,
$aF:function(){return[W.I]},
$au:function(){return[W.I]},
$ie:1,
$ae:function(){return[W.I]},
$ib:1,
$ab:function(){return[W.I]},
$az:function(){return[W.I]}}
W.b0.prototype={$ib0:1,
gk:function(a){return a.length}}
W.hs.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.i(P.T(b,a,null,null,null))
return a[b]},
I:function(a,b){if(b<0||b>=a.length)return H.h(a,b)
return a[b]},
$iF:1,
$aF:function(){return[W.b0]},
$au:function(){return[W.b0]},
$ie:1,
$ae:function(){return[W.b0]},
$ib:1,
$ab:function(){return[W.b0]},
$az:function(){return[W.b0]}}
W.hA.prototype={
j:function(a,b){return P.bm(a.get(H.R(b)))},
R:function(a,b){var u,t
H.l(b,{func:1,ret:-1,args:[P.o,,]})
u=a.entries()
for(;!0;){t=u.next()
if(t.done)return
b.$2(t.value[0],P.bm(t.value[1]))}},
gaF:function(a){var u=H.d([],[P.o])
this.R(a,new W.hB(u))
return u},
gk:function(a){return a.size},
$aah:function(){return[P.o,null]},
$iO:1,
$aO:function(){return[P.o,null]}}
W.hB.prototype={
$2:function(a,b){return C.a.h(this.a,a)},
$S:6}
W.hD.prototype={
gk:function(a){return a.length}}
W.b1.prototype={$ib1:1}
W.hM.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.i(P.T(b,a,null,null,null))
return a[b]},
I:function(a,b){if(b<0||b>=a.length)return H.h(a,b)
return a[b]},
$iF:1,
$aF:function(){return[W.b1]},
$au:function(){return[W.b1]},
$ie:1,
$ae:function(){return[W.b1]},
$ib:1,
$ab:function(){return[W.b1]},
$az:function(){return[W.b1]}}
W.b2.prototype={$ib2:1}
W.hN.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.i(P.T(b,a,null,null,null))
return a[b]},
I:function(a,b){if(b<0||b>=a.length)return H.h(a,b)
return a[b]},
$iF:1,
$aF:function(){return[W.b2]},
$au:function(){return[W.b2]},
$ie:1,
$ae:function(){return[W.b2]},
$ib:1,
$ab:function(){return[W.b2]},
$az:function(){return[W.b2]}}
W.b3.prototype={$ib3:1,
gk:function(a){return a.length}}
W.hQ.prototype={
j:function(a,b){return this.dc(a,H.R(b))},
R:function(a,b){var u,t
H.l(b,{func:1,ret:-1,args:[P.o,P.o]})
for(u=0;!0;++u){t=this.fQ(a,u)
if(t==null)return
b.$2(t,this.dc(a,t))}},
gaF:function(a){var u=H.d([],[P.o])
this.R(a,new W.hR(u))
return u},
gk:function(a){return a.length},
dc:function(a,b){return a.getItem(b)},
fQ:function(a,b){return a.key(b)},
$aah:function(){return[P.o,P.o]},
$iO:1,
$aO:function(){return[P.o,P.o]}}
W.hR.prototype={
$2:function(a,b){return C.a.h(this.a,a)},
$S:26}
W.aE.prototype={$iaE:1}
W.b4.prototype={$ib4:1}
W.aF.prototype={$iaF:1}
W.hY.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.i(P.T(b,a,null,null,null))
return a[b]},
I:function(a,b){if(b<0||b>=a.length)return H.h(a,b)
return a[b]},
$iF:1,
$aF:function(){return[W.aF]},
$au:function(){return[W.aF]},
$ie:1,
$ae:function(){return[W.aF]},
$ib:1,
$ab:function(){return[W.aF]},
$az:function(){return[W.aF]}}
W.hZ.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.i(P.T(b,a,null,null,null))
return a[b]},
I:function(a,b){if(b<0||b>=a.length)return H.h(a,b)
return a[b]},
$iF:1,
$aF:function(){return[W.b4]},
$au:function(){return[W.b4]},
$ie:1,
$ae:function(){return[W.b4]},
$ib:1,
$ab:function(){return[W.b4]},
$az:function(){return[W.b4]}}
W.i3.prototype={
gk:function(a){return a.length}}
W.b6.prototype={$ib6:1}
W.aI.prototype={$iaI:1}
W.i6.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.i(P.T(b,a,null,null,null))
return a[b]},
I:function(a,b){if(b<0||b>=a.length)return H.h(a,b)
return a[b]},
$iF:1,
$aF:function(){return[W.b6]},
$au:function(){return[W.b6]},
$ie:1,
$ae:function(){return[W.b6]},
$ib:1,
$ab:function(){return[W.b6]},
$az:function(){return[W.b6]}}
W.i7.prototype={
gk:function(a){return a.length}}
W.bC.prototype={}
W.io.prototype={
i:function(a){return String(a)}}
W.iE.prototype={$ikc:1}
W.iF.prototype={
gk:function(a){return a.length}}
W.b8.prototype={
gjj:function(a){if(a.deltaY!==undefined)return a.deltaY
throw H.i(P.al("deltaY is not supported"))},
gji:function(a){if(a.deltaX!==undefined)return a.deltaX
throw H.i(P.al("deltaX is not supported"))},
$ib8:1}
W.cK.prototype={
i5:function(a,b){return a.requestAnimationFrame(H.bZ(H.l(b,{func:1,ret:-1,args:[P.a1]}),1))},
fB:function(a){if(!!(a.requestAnimationFrame&&a.cancelAnimationFrame))return;(function(b){var u=['ms','moz','webkit','o']
for(var t=0;t<u.length&&!b.requestAnimationFrame;++t){b.requestAnimationFrame=b[u[t]+'RequestAnimationFrame']
b.cancelAnimationFrame=b[u[t]+'CancelAnimationFrame']||b[u[t]+'CancelRequestAnimationFrame']}if(b.requestAnimationFrame&&b.cancelAnimationFrame)return
b.requestAnimationFrame=function(c){return window.setTimeout(function(){c(Date.now())},16)}
b.cancelAnimationFrame=function(c){clearTimeout(c)}})(a)}}
W.iO.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.i(P.T(b,a,null,null,null))
return a[b]},
I:function(a,b){if(b<0||b>=a.length)return H.h(a,b)
return a[b]},
$iF:1,
$aF:function(){return[W.P]},
$au:function(){return[W.P]},
$ie:1,
$ae:function(){return[W.P]},
$ib:1,
$ab:function(){return[W.P]},
$az:function(){return[W.P]}}
W.eb.prototype={
i:function(a){return"Rectangle ("+H.n(a.left)+", "+H.n(a.top)+") "+H.n(a.width)+" x "+H.n(a.height)},
t:function(a,b){var u
if(b==null)return!1
if(!H.cY(b,"$iad",[P.a1],"$aad"))return!1
u=J.f0(b)
return a.left===u.gbI(b)&&a.top===u.gbL(b)&&a.width===u.gak(b)&&a.height===u.gah(b)},
gK:function(a){return W.kS(C.d.gK(a.left),C.d.gK(a.top),C.d.gK(a.width),C.d.gK(a.height))},
gah:function(a){return a.height},
gak:function(a){return a.width}}
W.j0.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.i(P.T(b,a,null,null,null))
return a[b]},
I:function(a,b){if(b<0||b>=a.length)return H.h(a,b)
return a[b]},
$iF:1,
$aF:function(){return[W.aT]},
$au:function(){return[W.aT]},
$ie:1,
$ae:function(){return[W.aT]},
$ib:1,
$ab:function(){return[W.aT]},
$az:function(){return[W.aT]}}
W.es.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.i(P.T(b,a,null,null,null))
return a[b]},
I:function(a,b){if(b<0||b>=a.length)return H.h(a,b)
return a[b]},
$iF:1,
$aF:function(){return[W.I]},
$au:function(){return[W.I]},
$ie:1,
$ae:function(){return[W.I]},
$ib:1,
$ab:function(){return[W.I]},
$az:function(){return[W.I]}}
W.jb.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.i(P.T(b,a,null,null,null))
return a[b]},
I:function(a,b){if(b<0||b>=a.length)return H.h(a,b)
return a[b]},
$iF:1,
$aF:function(){return[W.b3]},
$au:function(){return[W.b3]},
$ie:1,
$ae:function(){return[W.b3]},
$ib:1,
$ab:function(){return[W.b3]},
$az:function(){return[W.b3]}}
W.jc.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.i(P.T(b,a,null,null,null))
return a[b]},
I:function(a,b){if(b<0||b>=a.length)return H.h(a,b)
return a[b]},
$iF:1,
$aF:function(){return[W.aE]},
$au:function(){return[W.aE]},
$ie:1,
$ae:function(){return[W.aE]},
$ib:1,
$ab:function(){return[W.aE]},
$az:function(){return[W.aE]}}
W.iP.prototype={}
W.jT.prototype={}
W.iQ.prototype={}
W.iR.prototype={
$1:function(a){return this.a.$1(H.k(a,"$im"))},
$S:31}
W.z.prototype={
gU:function(a){return new W.dh(a,this.gk(a),-1,[H.c1(this,a,"z",0)])}}
W.dh.prototype={
C:function(){var u,t
u=this.c+1
t=this.b
if(u<t){this.sdd(J.lx(this.a,u))
this.c=u
return!0}this.sdd(null)
this.c=t
return!1},
gM:function(a){return this.d},
sdd:function(a){this.d=H.D(a,H.w(this,0))},
$iaU:1}
W.ea.prototype={}
W.ec.prototype={}
W.ed.prototype={}
W.ee.prototype={}
W.ef.prototype={}
W.eh.prototype={}
W.ei.prototype={}
W.ej.prototype={}
W.ek.prototype={}
W.eo.prototype={}
W.ep.prototype={}
W.eq.prototype={}
W.er.prototype={}
W.et.prototype={}
W.eu.prototype={}
W.ex.prototype={}
W.ey.prototype={}
W.ez.prototype={}
W.cR.prototype={}
W.cS.prototype={}
W.eA.prototype={}
W.eB.prototype={}
W.eF.prototype={}
W.eI.prototype={}
W.eJ.prototype={}
W.cT.prototype={}
W.cU.prototype={}
W.eL.prototype={}
W.eM.prototype={}
W.eQ.prototype={}
W.eR.prototype={}
W.eS.prototype={}
W.eT.prototype={}
W.eU.prototype={}
W.eV.prototype={}
W.eW.prototype={}
W.eX.prototype={}
W.eY.prototype={}
W.eZ.prototype={}
P.eP.prototype={$ibs:1,
gdP:function(a){return this.a}}
P.jm.prototype={
$2:function(a,b){this.a[a]=b},
$S:12}
P.fE.prototype={
gbX:function(){var u,t,s
u=this.b
t=H.aA(u,"u",0)
s=W.a6
return new H.h0(new H.iG(u,H.l(new P.fF(),{func:1,ret:P.a4,args:[t]}),[t]),H.l(new P.fG(),{func:1,ret:s,args:[t]}),[t,s])},
h:function(a,b){J.k7(this.b.a,b)},
gk:function(a){return J.c7(this.gbX().a)},
j:function(a,b){var u=this.gbX()
return u.b.$1(J.k8(u.a,b))},
gU:function(a){var u=P.kk(this.gbX(),!1,W.a6)
return new J.ao(u,u.length,0,[H.w(u,0)])},
$au:function(){return[W.a6]},
$ae:function(){return[W.a6]},
$ab:function(){return[W.a6]}}
P.fF.prototype={
$1:function(a){return!!J.Z(H.k(a,"$iI")).$ia6},
$S:27}
P.fG.prototype={
$1:function(a){return H.c(H.k(a,"$iI"),"$ia6")},
$S:28}
P.j5.prototype={
gbK:function(a){var u=this.a
if(typeof u!=="number")return u.n()
return H.D(u+this.c,H.w(this,0))},
gdD:function(a){var u=this.b
if(typeof u!=="number")return u.n()
return H.D(u+this.d,H.w(this,0))},
i:function(a){return"Rectangle ("+H.n(this.a)+", "+H.n(this.b)+") "+this.c+" x "+this.d},
t:function(a,b){var u,t,s,r
if(b==null)return!1
if(H.cY(b,"$iad",[P.a1],"$aad")){u=this.a
t=J.f0(b)
if(u==t.gbI(b)){s=this.b
if(s==t.gbL(b)){if(typeof u!=="number")return u.n()
r=H.w(this,0)
if(H.D(u+this.c,r)===t.gbK(b)){if(typeof s!=="number")return s.n()
u=H.D(s+this.d,r)===t.gdD(b)}else u=!1}else u=!1}else u=!1}else u=!1
return u},
gK:function(a){var u,t,s,r,q
u=this.a
t=J.bI(u)
s=this.b
r=J.bI(s)
if(typeof u!=="number")return u.n()
q=H.w(this,0)
u=C.h.gK(H.D(u+this.c,q))
if(typeof s!=="number")return s.n()
q=C.h.gK(H.D(s+this.d,q))
return P.mm(P.j2(P.j2(P.j2(P.j2(0,t),r),u),q))}}
P.ad.prototype={
gbI:function(a){return this.a},
gbL:function(a){return this.b},
gak:function(a){return this.c},
gah:function(a){return this.d}}
P.bd.prototype={$ibd:1}
P.fS.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.i(P.T(b,a,null,null,null))
return this.ay(a,b)},
I:function(a,b){return this.j(a,b)},
ay:function(a,b){return a.getItem(b)},
$au:function(){return[P.bd]},
$ie:1,
$ae:function(){return[P.bd]},
$ib:1,
$ab:function(){return[P.bd]},
$az:function(){return[P.bd]}}
P.bi.prototype={$ibi:1}
P.ho.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.i(P.T(b,a,null,null,null))
return this.ay(a,b)},
I:function(a,b){return this.j(a,b)},
ay:function(a,b){return a.getItem(b)},
$au:function(){return[P.bi]},
$ie:1,
$ae:function(){return[P.bi]},
$ib:1,
$ab:function(){return[P.bi]},
$az:function(){return[P.bi]}}
P.hu.prototype={
gk:function(a){return a.length}}
P.hW.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.i(P.T(b,a,null,null,null))
return this.ay(a,b)},
I:function(a,b){return this.j(a,b)},
ay:function(a,b){return a.getItem(b)},
$au:function(){return[P.o]},
$ie:1,
$ae:function(){return[P.o]},
$ib:1,
$ab:function(){return[P.o]},
$az:function(){return[P.o]}}
P.p.prototype={
gdH:function(a){return new P.fE(a,new W.iM(a))}}
P.bk.prototype={$ibk:1}
P.i8.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.i(P.T(b,a,null,null,null))
return this.ay(a,b)},
I:function(a,b){return this.j(a,b)},
ay:function(a,b){return a.getItem(b)},
$au:function(){return[P.bk]},
$ie:1,
$ae:function(){return[P.bk]},
$ib:1,
$ab:function(){return[P.bk]},
$az:function(){return[P.bk]}}
P.el.prototype={}
P.em.prototype={}
P.ev.prototype={}
P.ew.prototype={}
P.eG.prototype={}
P.eH.prototype={}
P.eN.prototype={}
P.eO.prototype={}
P.f7.prototype={
gk:function(a){return a.length}}
P.f8.prototype={
j:function(a,b){return P.bm(a.get(H.R(b)))},
R:function(a,b){var u,t
H.l(b,{func:1,ret:-1,args:[P.o,,]})
u=a.entries()
for(;!0;){t=u.next()
if(t.done)return
b.$2(t.value[0],P.bm(t.value[1]))}},
gaF:function(a){var u=H.d([],[P.o])
this.R(a,new P.f9(u))
return u},
gk:function(a){return a.size},
$aah:function(){return[P.o,null]},
$iO:1,
$aO:function(){return[P.o,null]}}
P.f9.prototype={
$2:function(a,b){return C.a.h(this.a,a)},
$S:6}
P.fa.prototype={
gk:function(a){return a.length}}
P.bJ.prototype={}
P.hp.prototype={
gk:function(a){return a.length}}
P.e9.prototype={}
P.d5.prototype={$id5:1}
P.di.prototype={$idi:1}
P.dG.prototype={$idG:1}
P.dI.prototype={$idI:1}
P.bU.prototype={
aP:function(a,b){return a.activeTexture(b)},
dA:function(a,b,c){return a.attachShader(b,c)},
ar:function(a,b,c){return a.bindBuffer(b,c)},
b0:function(a,b,c){return a.bindFramebuffer(b,c)},
dB:function(a,b,c){return a.bindRenderbuffer(b,c)},
a7:function(a,b,c){return a.bindTexture(b,c)},
j8:function(a,b,c){return a.blendFunc(b,c)},
dE:function(a,b,c,d){return a.bufferData(b,c,d)},
dI:function(a,b){return a.clear(b)},
dJ:function(a,b,c,d,e){return a.clearColor(b,c,d,e)},
dK:function(a,b){return a.clearDepth(b)},
ja:function(a,b){return a.compileShader(b)},
je:function(a,b){return a.createShader(b)},
jg:function(a,b){return a.deleteProgram(b)},
jh:function(a,b){return a.deleteShader(b)},
dQ:function(a,b){return a.depthFunc(b)},
jk:function(a,b){return a.disable(b)},
dR:function(a,b){return a.disableVertexAttribArray(b)},
jl:function(a,b,c,d,e){return a.drawElements(b,c,d,e)},
b6:function(a,b){return a.enable(b)},
dS:function(a,b){return a.enableVertexAttribArray(b)},
ju:function(a,b,c,d,e){return a.framebufferRenderbuffer(b,c,d,e)},
jv:function(a,b,c,d,e,f){return a.framebufferTexture2D(b,c,d,e,f)},
eC:function(a,b,c){return a.getActiveAttrib(b,c)},
eD:function(a,b,c){return a.getActiveUniform(b,c)},
eE:function(a,b,c){return a.getAttribLocation(b,c)},
bN:function(a,b){return a.getParameter(b)},
eH:function(a,b){return a.getProgramInfoLog(b)},
bO:function(a,b,c){return a.getProgramParameter(b,c)},
eI:function(a,b){return a.getShaderInfoLog(b)},
eJ:function(a,b,c){return a.getShaderParameter(b,c)},
eK:function(a,b,c){return a.getUniformLocation(b,c)},
jA:function(a,b){return a.linkProgram(b)},
jV:function(a,b,c){return a.pixelStorei(b,c)},
k_:function(a,b,c,d,e){return a.renderbufferStorage(b,c,d,e)},
eP:function(a,b,c){return a.shaderSource(b,c)},
eu:function(a,b,c,d,e,f,g,h,i,j){var u,t
u=i==null
if(!u&&h!=null&&typeof g==="number"&&Math.floor(g)===g){this.ip(a,b,c,d,e,f,g,h,i,j)
return}t=J.Z(g)
if(!!t.$ibs&&h==null&&u&&!0){this.iq(a,b,c,d,e,f,P.mD(g))
return}if(!!t.$ick&&h==null&&u&&!0){this.ir(a,b,c,d,e,f,g)
return}throw H.i(P.lA("Incorrect number or type of arguments"))},
k9:function(a,b,c,d,e,f,g){return this.eu(a,b,c,d,e,f,g,null,null,null)},
ip:function(a,b,c,d,e,f,g,h,i,j){return a.texImage2D(b,c,d,e,f,g,h,i,j)},
iq:function(a,b,c,d,e,f,g){return a.texImage2D(b,c,d,e,f,g)},
ir:function(a,b,c,d,e,f,g){return a.texImage2D(b,c,d,e,f,g)},
ax:function(a,b,c,d){return a.texParameteri(b,c,d)},
L:function(a,b,c){return a.uniform1f(b,c)},
D:function(a,b,c){return a.uniform1i(b,c)},
bM:function(a,b,c,d){return a.uniform2f(b,c,d)},
q:function(a,b,c,d,e){return a.uniform3f(b,c,d,e)},
kg:function(a,b,c,d,e,f){return a.uniform4f(b,c,d,e,f)},
ex:function(a,b,c,d){return a.uniformMatrix3fv(b,!1,d)},
cN:function(a,b,c,d){return a.uniformMatrix4fv(b,!1,d)},
aU:function(a,b){return a.useProgram(b)},
ki:function(a,b,c,d,e,f,g){return a.vertexAttribPointer(b,c,d,!1,f,g)},
ez:function(a,b,c,d,e){return a.viewport(b,c,d,e)},
$ibU:1}
P.dJ.prototype={$idJ:1}
P.dQ.prototype={$idQ:1}
P.e1.prototype={$ie1:1}
P.hO.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.i(P.T(b,a,null,null,null))
return P.bm(this.fP(a,b))},
I:function(a,b){return this.j(a,b)},
fP:function(a,b){return a.item(b)},
$au:function(){return[[P.O,,,]]},
$ie:1,
$ae:function(){return[[P.O,,,]]},
$ib:1,
$ab:function(){return[[P.O,,,]]},
$az:function(){return[[P.O,,,]]}}
P.eC.prototype={}
P.eD.prototype={}
O.S.prototype={
bk:function(a){this.sfU(H.d([],[a]))
this.sdk(null)
this.sdg(null)
this.sdl(null)},
cP:function(a,b,c){var u=H.aA(this,"S",0)
H.l(b,{func:1,ret:P.a4,args:[[P.e,u]]})
u={func:1,ret:-1,args:[P.y,[P.e,u]]}
H.l(a,u)
H.l(c,u)
this.sdk(b)
this.sdg(a)
this.sdl(c)},
aI:function(a,b){return this.cP(a,null,b)},
dj:function(a){var u
H.j(a,"$ie",[H.aA(this,"S",0)],"$ae")
u=this.b
if(u!=null)return u.$1(a)
return!0},
df:function(a,b){var u
H.j(b,"$ie",[H.aA(this,"S",0)],"$ae")
u=this.c
if(u!=null)u.$2(a,b)},
gk:function(a){return this.a.length},
gU:function(a){var u=this.a
return new J.ao(u,u.length,0,[H.w(u,0)])},
I:function(a,b){var u=this.a
if(b<0||b>=u.length)return H.h(u,b)
return u[b]},
h:function(a,b){var u,t,s
u=H.aA(this,"S",0)
H.D(b,u)
u=[u]
if(this.dj(H.d([b],u))){t=this.a
s=t.length
C.a.h(t,b)
this.df(s,H.d([b],u))}},
cb:function(a,b){var u,t
H.j(b,"$ie",[H.aA(this,"S",0)],"$ae")
if(this.dj(b)){u=this.a
t=u.length
C.a.cb(u,b)
this.df(t,b)}},
sfU:function(a){this.a=H.j(a,"$ib",[H.aA(this,"S",0)],"$ab")},
sdk:function(a){this.b=H.l(a,{func:1,ret:P.a4,args:[[P.e,H.aA(this,"S",0)]]})},
sdg:function(a){this.c=H.l(a,{func:1,ret:-1,args:[P.y,[P.e,H.aA(this,"S",0)]]})},
sdl:function(a){this.d=H.l(a,{func:1,ret:-1,args:[P.y,[P.e,H.aA(this,"S",0)]]})},
$ie:1}
O.cm.prototype={
gk:function(a){return this.a.length},
gm:function(){var u=this.b
if(u==null){u=D.E()
this.b=u}return u},
f0:function(a){var u=this.b
if(u!=null)u.A(a)},
aJ:function(){return this.f0(null)},
gZ:function(a){var u=this.a
if(u.length>0)return C.a.gcA(u)
else return V.aY()},
bJ:function(a){var u=this.a
if(a==null)C.a.h(u,V.aY())
else C.a.h(u,a)
this.aJ()},
aG:function(){var u=this.a
if(u.length>0){u.pop()
this.aJ()}},
sbY:function(a){this.a=H.j(a,"$ib",[V.aa],"$ab")}}
E.fc.prototype={}
E.ak.prototype={
sbj:function(a,b){var u,t,s
u=this.c
if(u!=b){this.c=b
this.d=b
this.e=null
if(u!=null)u.gm().G(0,this.gep())
t=this.c
if(t!=null)t.gm().h(0,this.gep())
s=new D.B("shape",u,this.c,this,[F.dK])
s.b=!0
this.ao(s)}},
sb9:function(a){var u,t
if(!J.K(this.r,a)){u=this.r
if(u!=null)u.gm().G(0,this.gen())
if(a!=null)a.gm().h(0,this.gen())
this.r=a
t=new D.B("mover",u,a,this,[U.ac])
t.b=!0
this.ao(t)}},
aa:function(a,b){var u,t,s,r
u=this.r
t=u!=null?u.aT(0,b,this):null
if(!J.K(t,this.x)){s=this.x
this.x=t
r=new D.B("matrix",s,t,this,[V.aa])
r.b=!0
this.ao(r)}for(u=this.y.a,u=new J.ao(u,u.length,0,[H.w(u,0)]);u.C();)u.d.aa(0,b)},
a8:function(a){var u,t,s
u=a.dx
t=this.x
u.toString
if(t==null)C.a.h(u.a,u.gZ(u))
else C.a.h(u.a,t.v(0,u.gZ(u)))
u.aJ()
a.cH(this.f)
u=a.dy
s=(u&&C.a).gcA(u)
if(s!=null&&this.d!=null)s.bd(a,this)
for(u=this.y.a,u=new J.ao(u,u.length,0,[H.w(u,0)]);u.C();)u.d.a8(a)
a.cF()
a.dx.aG()},
gm:function(){var u=this.z
if(u==null){u=D.E()
this.z=u}return u},
ao:function(a){var u=this.z
if(u!=null)u.A(a)},
a3:function(){return this.ao(null)},
eq:function(a){H.k(a,"$iv")
this.e=null
this.ao(a)},
jM:function(){return this.eq(null)},
eo:function(a){this.ao(H.k(a,"$iv"))},
jL:function(){return this.eo(null)},
em:function(a){this.ao(H.k(a,"$iv"))},
jI:function(){return this.em(null)},
jH:function(a,b){var u,t,s,r,q,p,o
H.j(b,"$ie",[E.ak],"$ae")
for(u=b.length,t=this.gel(),s={func:1,ret:-1,args:[D.v]},r=[s],q=0;q<b.length;b.length===u||(0,H.A)(b),++q){p=b[q]
if(p!=null){o=p.z
if(o==null){o=new D.br()
o.sab(null)
o.saN(null)
o.c=null
o.d=0
p.z=o}H.l(t,s)
if(o.a==null)o.sab(H.d([],r))
o=o.a;(o&&C.a).h(o,t)}}this.a3()},
jK:function(a,b){var u,t
H.j(b,"$ie",[E.ak],"$ae")
for(u=b.gU(b),t=this.gel();u.C();)u.gM(u).gm().G(0,t)
this.a3()},
i:function(a){var u,t
u=this.a
t=u.length
if(t<=0)return"Unnamed entity"
return u},
sf1:function(a,b){this.y=H.j(b,"$iS",[E.ak],"$aS")},
$ib_:1}
E.hw.prototype={
eX:function(a,b){var u,t
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
u=new O.cm()
t=[V.aa]
u.sbY(H.d([],t))
u.b=null
u.gm().h(0,new E.hx(this))
this.cy=u
u=new O.cm()
u.sbY(H.d([],t))
u.b=null
u.gm().h(0,new E.hy(this))
this.db=u
u=new O.cm()
u.sbY(H.d([],t))
u.b=null
u.gm().h(0,new E.hz(this))
this.dx=u
this.sio(H.d([],[O.bB]))
u=this.dy;(u&&C.a).h(u,null)
this.sih(new H.aV([P.o,A.cw]))},
gjW:function(){var u,t
u=this.z
if(u==null){u=this.cy
u=u.gZ(u)
t=this.db
t=u.v(0,t.gZ(t))
this.z=t
u=t}return u},
gcG:function(){var u,t
u=this.ch
if(u==null){u=this.gjW()
t=this.dx
t=u.v(0,t.gZ(t))
this.ch=t
u=t}return u},
gey:function(){var u,t
u=this.cx
if(u==null){u=this.db
u=u.gZ(u)
t=this.dx
t=u.v(0,t.gZ(t))
this.cx=t
u=t}return u},
cH:function(a){var u,t
u=this.dy
t=a==null?(u&&C.a).gcA(u):a;(u&&C.a).h(u,t)},
cF:function(){var u=this.dy
if(u.length>1)u.pop()},
b_:function(a){var u=a.b
if(u.length===0)throw H.i(P.r("May not cache a shader with no name."))
if(this.fr.dN(0,u))throw H.i(P.r('Shader cache already contains a shader by the name "'+u+'".'))
this.fr.a9(0,u,a)},
sio:function(a){this.dy=H.j(a,"$ib",[O.bB],"$ab")},
sih:function(a){this.fr=H.j(a,"$iO",[P.o,A.cw],"$aO")}}
E.hx.prototype={
$1:function(a){var u
H.k(a,"$iv")
u=this.a
u.z=null
u.ch=null},
$S:9}
E.hy.prototype={
$1:function(a){var u
H.k(a,"$iv")
u=this.a
u.z=null
u.Q=null
u.ch=null
u.cx=null},
$S:9}
E.hz.prototype={
$1:function(a){var u
H.k(a,"$iv")
u=this.a
u.ch=null
u.cx=null},
$S:9}
E.dX.prototype={
cX:function(a){H.k(a,"$iv")
this.er()},
cW:function(){return this.cX(null)},
gjt:function(){var u,t,s
u=Date.now()
t=C.h.a5(P.kf(0,0,0,u-this.cx.a,0,0).a,1000)/1000
if(t<=0)return 0
s=this.cy
this.cy=0
this.cx=new P.ap(u,!1)
return s/t},
dq:function(){var u,t,s,r
u=window.devicePixelRatio
t=this.b.clientWidth
if(typeof t!=="number")return t.v()
if(typeof u!=="number")return H.L(u)
s=C.d.cv(t*u)
t=this.b.clientHeight
if(typeof t!=="number")return t.v()
r=C.d.cv(t*u)
t=this.b
if(t.width!==s||t.height!==r){t.width=s
t.height=r
P.kE(C.n,this.gk0())}},
er:function(){var u,t
if(!this.ch){this.ch=!0
u=window
t=H.l(new E.i2(this),{func:1,ret:-1,args:[P.a1]})
C.y.fB(u)
C.y.i5(u,W.l_(t,P.a1))}},
jZ:function(){var u,t,s,r,q
try{++this.cy
this.ch=!1
this.dq()
if(this.d!=null){s=this.e;++s.e
s.r=s.x
r=Date.now()
s.x=new P.ap(r,!1)
s.y=P.kf(0,0,0,r-s.r.a,0,0).a*0.000001
r=s.cy
C.a.sk(r.a,0)
r.aJ()
r=s.db
C.a.sk(r.a,0)
r.aJ()
r=s.dx
C.a.sk(r.a,0)
r.aJ()
r=s.dy;(r&&C.a).sk(r,0)
s=s.dy;(s&&C.a).h(s,null)
this.d.a8(this.e)}}catch(q){u=H.bH(q)
t=H.c2(q)
P.ar("Error: "+H.n(u))
P.ar("Stack: "+H.n(t))
throw H.i(u)}}}
E.i2.prototype={
$1:function(a){var u
H.mW(a)
u=this.a
if(u.ch){u.ch=!1
u.jZ()}},
$S:39}
Z.e7.prototype={$in4:1}
Z.d6.prototype={
J:function(a){var u,t,s
try{t=a.a
C.b.dS(t,this.e)
C.b.ki(t,this.e,this.b,5126,!1,this.d,this.c)}catch(s){u=H.bH(s)
t=P.r('Failed to bind buffer attribute "'+this.a.i(0)+'": '+H.n(u))
throw H.i(t)}},
i:function(a){return"["+this.a.i(0)+", Size: "+this.b+", Offset: "+this.c+", Stride: "+this.d+", Attr: "+H.n(this.e)+"]"}}
Z.bD.prototype={$in5:1}
Z.bb.prototype={
a2:function(a){var u,t,s,r
for(u=this.c,t=u.length,s=0;s<t;++s){r=u[s]
if((r.a.a&a.a)!==0)return r}return},
J:function(a){var u,t
u=this.a
C.b.ar(a.a,u.a,u.b)
for(u=this.c,t=u.length-1;t>=0;--t)u[t].J(a)},
a4:function(a){var u,t,s
for(u=this.c,t=u.length-1,s=a.a;t>=0;--t)C.b.dR(s,u[t].e)
C.b.ar(s,this.a.a,null)},
a8:function(a){var u,t,s,r,q,p
u=this.b.length
for(t=a.a,s=0;s<u;++s){r=this.b
if(s>=r.length)return H.h(r,s)
q=r[s]
r=q.c
p=r.a
C.b.ar(t,p,r.b)
C.b.jl(t,q.a,q.b,5123,0)
C.b.ar(t,p,null)}},
i:function(a){var u,t,s,r,q,p
u=[P.o]
t=H.d([],u)
for(s=this.b,r=s.length,q=0;q<s.length;s.length===r||(0,H.A)(s),++q)C.a.h(t,s[q].i(0))
p=H.d([],u)
for(u=this.c,s=u.length,q=0;q<s;++q)C.a.h(p,J.aw(u[q]))
return"Buffer:  ["+this.a.i(0)+"]\nIndices: "+C.a.F(t,", ")+"\nAttrs:   "+C.a.F(p,", ")},
sfO:function(a){this.b=H.j(a,"$ib",[Z.bt],"$ab")},
$inb:1}
Z.bt.prototype={
i:function(a){return"Type: "+this.a+", Count: "+this.b+", ["+("Instance of '"+H.bR(this.c)+"'")+"]"}}
Z.an.prototype={
gcR:function(a){var u,t
u=this.a
t=(u&$.ag().a)!==0?3:0
if((u&$.aL().a)!==0)t+=3
if((u&$.aK().a)!==0)t+=3
if((u&$.av().a)!==0)t+=2
if((u&$.aM().a)!==0)t+=3
if((u&$.d_().a)!==0)t+=3
if((u&$.d0().a)!==0)t+=4
if((u&$.c5().a)!==0)++t
return(u&$.bn().a)!==0?t+4:t},
j6:function(a){var u,t,s
u=$.ag()
t=this.a
if((t&u.a)!==0){if(0===a)return u
s=1}else s=0
u=$.aL()
if((t&u.a)!==0){if(s===a)return u;++s}u=$.aK()
if((t&u.a)!==0){if(s===a)return u;++s}u=$.av()
if((t&u.a)!==0){if(s===a)return u;++s}u=$.aM()
if((t&u.a)!==0){if(s===a)return u;++s}u=$.d_()
if((t&u.a)!==0){if(s===a)return u;++s}u=$.d0()
if((t&u.a)!==0){if(s===a)return u;++s}u=$.c5()
if((t&u.a)!==0){if(s===a)return u;++s}u=$.bn()
if((t&u.a)!==0)if(s===a)return u
return $.lt()},
t:function(a,b){if(b==null)return!1
if(!(b instanceof Z.an))return!1
return this.a===b.a},
i:function(a){var u,t
u=H.d([],[P.o])
t=this.a
if((t&$.ag().a)!==0)C.a.h(u,"Pos")
if((t&$.aL().a)!==0)C.a.h(u,"Norm")
if((t&$.aK().a)!==0)C.a.h(u,"Binm")
if((t&$.av().a)!==0)C.a.h(u,"Txt2D")
if((t&$.aM().a)!==0)C.a.h(u,"TxtCube")
if((t&$.d_().a)!==0)C.a.h(u,"Clr3")
if((t&$.d0().a)!==0)C.a.h(u,"Clr4")
if((t&$.c5().a)!==0)C.a.h(u,"Weight")
if((t&$.bn().a)!==0)C.a.h(u,"Bending")
if(u.length<=0)return"None"
return C.a.F(u,"|")}}
D.ff.prototype={}
D.br.prototype={
h:function(a,b){var u={func:1,ret:-1,args:[D.v]}
H.l(b,u)
if(this.a==null)this.sab(H.d([],[u]))
u=this.a;(u&&C.a).h(u,b)},
G:function(a,b){var u,t
H.l(b,{func:1,ret:-1,args:[D.v]})
u=this.a
u=u==null?null:C.a.am(u,b)
if(u===!0){u=this.a
t=(u&&C.a).G(u,b)||!1}else t=!1
u=this.b
u=u==null?null:C.a.am(u,b)
if(u===!0){u=this.b
t=(u&&C.a).G(u,b)||t}return t},
A:function(a){var u,t,s,r
u={}
u.a=a
t=this.a
s=t==null
r=s?null:t.length===0
if(r!==!1){r=this.b
r=r==null?null:r.length===0
r=r!==!1}else r=!1
if(r)return!1
if(a==null){a=new D.v(null)
a.b=!0
u.a=a
r=a}else r=a
if(this.d>0){if(this.c==null)this.c=r
return!0}if(!s)C.a.R(P.kk(t,!0,{func:1,ret:-1,args:[D.v]}),new D.fz(u))
t=this.b
if(t!=null){this.saN(H.d([],[{func:1,ret:-1,args:[D.v]}]))
C.a.R(t,new D.fA(u))}return!0},
co:function(){return this.A(null)},
k5:function(a,b,c){var u,t
u=this.d
if(u>0){--u
this.d=u
if(u<=0)u=this.c!=null
else u=!1
if(u){t=this.c
this.c=null
this.A(t)}}},
av:function(a){return this.k5(a,!0,!1)},
sab:function(a){this.a=H.j(a,"$ib",[{func:1,ret:-1,args:[D.v]}],"$ab")},
saN:function(a){this.b=H.j(a,"$ib",[{func:1,ret:-1,args:[D.v]}],"$ab")}}
D.fz.prototype={
$1:function(a){var u
H.l(a,{func:1,ret:-1,args:[D.v]})
u=this.a.a
u.b
a.$1(u)},
$S:16}
D.fA.prototype={
$1:function(a){var u
H.l(a,{func:1,ret:-1,args:[D.v]})
u=this.a.a
u.b
a.$1(u)},
$S:16}
D.v.prototype={}
D.bu.prototype={}
D.bv.prototype={}
D.B.prototype={
i:function(a){return"ValueChanged: "+this.c+", "+H.n(this.d)+" => "+H.n(this.e)}}
X.d7.prototype={
t:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.d7))return!1
if(this.a!=b.a)return!1
if(!this.b.t(0,b.b))return!1
return!0},
i:function(a){return this.b.i(0)+H.n(this.a)}}
X.dp.prototype={
t:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.dp))return!1
if(this.a!=b.a)return!1
if(!this.b.t(0,b.b))return!1
return!0},
i:function(a){return this.b.i(0)+H.n(this.a)}}
X.fR.prototype={
jS:function(a){this.c=a.b
this.d.h(0,a.a)
return!1},
jO:function(a){this.c=a.b
this.d.G(0,a.a)
return!1},
si0:function(a){this.d=H.j(a,"$ikz",[P.y],"$akz")}}
X.dt.prototype={}
X.fY.prototype={
aY:function(a,b){var u,t,s,r,q,p,o,n
u=new P.ap(Date.now(),!1)
t=this.x
s=b.a
r=this.Q
if(typeof s!=="number")return s.v()
q=b.b
p=this.ch
if(typeof q!=="number")return q.v()
o=new V.a3(t.a+s*r,t.b+q*p)
p=this.a.gaR()
n=new X.by(a,V.bj(),this.x,this.y,this.z,p,o,u,this)
n.b=!0
this.z=u
this.x=o
return n},
cE:function(a,b){this.r=a.a
return!1},
bb:function(a,b){var u,t
u=this.r
t=a.a
if(typeof t!=="number")return t.eM()
if(typeof u!=="number")return u.eB()
this.r=(u&~t)>>>0
return!1},
ba:function(a,b){var u=this.d
if(u==null)return!1
u.A(this.aY(a,b))
return!0},
jT:function(a){var u,t,s,r,q,p,o,n
u=this.e
if(u==null)return!1
t=this.a.gaR()
s=this.x
r=Date.now()
q=a.a
p=this.cx
if(typeof q!=="number")return q.v()
o=a.b
n=this.cy
if(typeof o!=="number")return o.v()
r=new X.co(new V.V(q*p,o*n),t,s,new P.ap(r,!1),this)
r.b=!0
u.A(r)
return!0},
hz:function(a,b,c){var u,t,s
if(this.f==null)return
u=new P.ap(Date.now(),!1)
t=this.f
s=new X.dt(c,a,this.a.gaR(),b,u,this)
s.b=!0
t.A(s)
this.y=u
this.x=V.bj()}}
X.as.prototype={
t:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.as))return!1
if(this.a!==b.a)return!1
if(this.b!=b.b)return!1
if(this.c!=b.c)return!1
return!0},
i:function(a){var u=this.a?"Ctrl+":""
u+=this.b?"Alt+":""
return u+(this.c?"Shift+":"")}}
X.by.prototype={}
X.he.prototype={
bV:function(a,b,c){var u,t,s
u=new P.ap(Date.now(),!1)
t=this.a.gaR()
s=new X.by(a,this.r,this.x,this.y,this.z,t,b,u,this)
s.b=!0
if(c){this.y=u
this.r=b}this.z=u
this.x=b
return s},
cE:function(a,b){var u
this.f=a.a
u=this.b
if(u==null)return!1
u.A(this.bV(a,b,!0))
return!0},
bb:function(a,b){var u,t
u=this.f
t=a.a
if(typeof t!=="number")return t.eM()
if(typeof u!=="number")return u.eB()
this.f=(u&~t)>>>0
u=this.c
if(u==null)return!1
u.A(this.bV(a,b,!0))
return!0},
ba:function(a,b){var u=this.d
if(u==null)return!1
u.A(this.bV(a,b,!1))
return!0},
jU:function(a,b){var u,t,s,r,q,p,o
u=this.e
if(u==null)return!1
t=this.a.gaR()
s=Date.now()
r=a.a
q=this.Q
if(typeof r!=="number")return r.v()
p=a.b
o=this.ch
if(typeof p!=="number")return p.v()
s=new X.co(new V.V(r*q,p*o),t,b,new P.ap(s,!1),this)
s.b=!0
u.A(s)
return!0}}
X.co.prototype={}
X.ht.prototype={}
X.dZ.prototype={}
X.i5.prototype={
aY:function(a,b){var u,t,s,r
H.j(a,"$ib",[V.a3],"$ab")
u=new P.ap(Date.now(),!1)
t=a.length>0?a[0]:V.bj()
s=this.a.gaR()
r=new X.dZ(a,this.f,this.r,this.x,this.y,s,t,u,this)
r.b=!0
if(b){this.x=u
this.f=t}this.y=u
this.r=t
return r},
jR:function(a){var u
H.j(a,"$ib",[V.a3],"$ab")
u=this.b
if(u==null)return!1
u.A(this.aY(a,!0))
return!0},
jP:function(a){var u
H.j(a,"$ib",[V.a3],"$ab")
u=this.c
if(u==null)return!1
u.A(this.aY(a,!0))
return!0},
jQ:function(a){var u
H.j(a,"$ib",[V.a3],"$ab")
u=this.d
if(u==null)return!1
u.A(this.aY(a,!1))
return!0}}
X.e4.prototype={
gaR:function(){var u=this.a
return V.cu(0,0,C.m.gdL(u).c,C.m.gdL(u).d)},
d7:function(a){var u,t
u=a.keyCode
t=a.ctrlKey||a.metaKey
return new X.dp(u,new X.as(t,a.altKey,a.shiftKey))},
aO:function(a){var u,t
u=this.b
t=a.ctrlKey||a.metaKey
u.c=new X.as(t,a.altKey,a.shiftKey)},
c8:function(a){var u,t
u=this.b
t=a.ctrlKey||a.metaKey
u.c=new X.as(t,a.altKey,a.shiftKey)},
aD:function(a){var u,t,s,r,q
u=this.a.getBoundingClientRect()
t=a.pageX
s=a.pageY
r=u.left
if(typeof t!=="number")return t.p()
q=u.top
if(typeof s!=="number")return s.p()
return new V.a3(t-r,s-q)},
aZ:function(a){return new V.V(a.movementX,a.movementY)},
c2:function(a){var u,t,s,r,q,p,o,n
u=this.a.getBoundingClientRect()
t=H.d([],[V.a3])
for(s=a.touches,r=s.length,q=0;q<s.length;s.length===r||(0,H.A)(s),++q){p=s[q]
o=C.d.a0(p.pageX)
C.d.a0(p.pageY)
n=u.left
C.d.a0(p.pageX)
C.a.h(t,new V.a3(o-n,C.d.a0(p.pageY)-u.top))}return t},
aA:function(a){var u,t
u=a.buttons
t=a.ctrlKey||a.metaKey
return new X.d7(u,new X.as(t,a.altKey,a.shiftKey))},
bZ:function(a){var u,t,s,r,q,p
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
ht:function(a){this.f=!0},
hd:function(a){this.f=!1},
hj:function(a){H.k(a,"$iab")
if(this.f&&this.bZ(a))a.preventDefault()},
hx:function(a){var u
H.k(a,"$iaW")
if(!this.f)return
u=this.d7(a)
this.b.jS(u)},
hv:function(a){var u
H.k(a,"$iaW")
if(!this.f)return
u=this.d7(a)
this.b.jO(u)},
hB:function(a){var u,t,s,r
H.k(a,"$iab")
u=this.a
u.focus()
this.f=!0
this.aO(a)
if(this.x){t=this.aA(a)
s=this.aZ(a)
if(this.d.cE(t,s))a.preventDefault()
return}if(this.r){this.y=a
u.requestPointerLock()
return}t=this.aA(a)
r=this.aD(a)
if(this.c.cE(t,r))a.preventDefault()},
hF:function(a){var u,t,s
H.k(a,"$iab")
this.aO(a)
u=this.aA(a)
if(this.x){t=this.aZ(a)
if(this.d.bb(u,t))a.preventDefault()
return}if(this.r)return
s=this.aD(a)
if(this.c.bb(u,s))a.preventDefault()},
hn:function(a){var u,t,s
H.k(a,"$iab")
if(!this.bZ(a)){this.aO(a)
u=this.aA(a)
if(this.x){t=this.aZ(a)
if(this.d.bb(u,t))a.preventDefault()
return}if(this.r)return
s=this.aD(a)
if(this.c.bb(u,s))a.preventDefault()}},
hD:function(a){var u,t,s
H.k(a,"$iab")
this.aO(a)
u=this.aA(a)
if(this.x){t=this.aZ(a)
if(this.d.ba(u,t))a.preventDefault()
return}if(this.r)return
s=this.aD(a)
if(this.c.ba(u,s))a.preventDefault()},
hl:function(a){var u,t,s
H.k(a,"$iab")
if(!this.bZ(a)){this.aO(a)
u=this.aA(a)
if(this.x){t=this.aZ(a)
if(this.d.ba(u,t))a.preventDefault()
return}if(this.r)return
s=this.aD(a)
if(this.c.ba(u,s))a.preventDefault()}},
hH:function(a){var u,t
H.k(a,"$ib8")
this.aO(a)
u=new V.V((a&&C.x).gji(a),C.x.gjj(a)).w(0,180)
if(this.x){if(this.d.jT(u))a.preventDefault()
return}if(this.r)return
t=this.aD(a)
if(this.c.jU(u,t))a.preventDefault()},
hJ:function(a){var u,t,s
u=document.pointerLockElement===this.a
if(u!==this.x){this.x=u
t=this.aA(this.y)
s=this.aD(this.y)
this.d.hz(t,s,u)}},
hZ:function(a){var u
H.k(a,"$iaI")
this.a.focus()
this.f=!0
this.c8(a)
u=this.c2(a)
if(this.e.jR(u))a.preventDefault()},
hV:function(a){var u
H.k(a,"$iaI")
this.c8(a)
u=this.c2(a)
if(this.e.jP(u))a.preventDefault()},
hX:function(a){var u
H.k(a,"$iaI")
this.c8(a)
u=this.c2(a)
if(this.e.jQ(u))a.preventDefault()},
sfD:function(a){this.z=H.j(a,"$ib",[[P.cy,P.M]],"$ab")}}
D.bp.prototype={
gm:function(){var u=this.d
if(u==null){u=D.E()
this.d=u}return u},
az:function(a){var u
H.k(a,"$iv")
u=this.d
if(u!=null)u.A(a)},
f3:function(){return this.az(null)},
$ia2:1,
$ib_:1}
D.a2.prototype={$ib_:1}
D.dq.prototype={
gm:function(){var u=this.Q
if(u==null){u=D.E()
this.Q=u}return u},
az:function(a){var u=this.Q
if(u!=null)u.A(a)},
di:function(a){var u
H.k(a,"$iv")
u=this.ch
if(u!=null)u.A(a)},
hy:function(){return this.di(null)},
hL:function(a){var u,t,s
H.j(a,"$ie",[D.a2],"$ae")
for(u=a.length,t=0;t<a.length;a.length===u||(0,H.A)(a),++t){s=a[t]
if(s==null||this.fq(s))return!1}return!0},
h7:function(a,b){var u,t,s,r,q,p,o,n
u=D.a2
H.j(b,"$ie",[u],"$ae")
for(t=b.length,s=this.gdh(),r={func:1,ret:-1,args:[D.v]},q=[r],p=0;p<b.length;b.length===t||(0,H.A)(b),++p){o=H.k(b[p],"$ia2")
if(o instanceof D.bp)C.a.h(this.e,o)
n=o.d
if(n==null){n=new D.br()
n.sab(null)
n.saN(null)
n.c=null
n.d=0
o.d=n}H.l(s,r)
if(n.a==null)n.sab(H.d([],q))
n=n.a;(n&&C.a).h(n,s)}u=new D.bu(a,b,this,[u])
u.b=!0
this.az(u)},
hP:function(a,b){var u,t,s,r
u=D.a2
H.j(b,"$ie",[u],"$ae")
for(t=b.gU(b),s=this.gdh();t.C();){r=t.gM(t)
C.a.G(this.e,r)
r.gm().G(0,s)}u=new D.bv(a,b,this,[u])
u.b=!0
this.az(u)},
fq:function(a){var u=C.a.am(this.e,a)
return u},
sfz:function(a){this.e=H.j(a,"$ib",[D.bp],"$ab")},
si_:function(a){this.f=H.j(a,"$ib",[D.dF],"$ab")},
sij:function(a){this.r=H.j(a,"$ib",[D.dN],"$ab")},
siA:function(a){this.x=H.j(a,"$ib",[D.dU],"$ab")},
siB:function(a){this.y=H.j(a,"$ib",[D.dV],"$ab")},
siC:function(a){this.z=H.j(a,"$ib",[D.dW],"$ab")},
$ae:function(){return[D.a2]},
$aS:function(){return[D.a2]}}
D.dF.prototype={$ia2:1,$ib_:1}
D.dN.prototype={$ia2:1,$ib_:1}
D.dU.prototype={$ia2:1,$ib_:1}
D.dV.prototype={$ia2:1,$ib_:1}
D.dW.prototype={$ia2:1,$ib_:1}
V.X.prototype={
n:function(a,b){var u,t,s
u=C.d.n(this.a,b.gcI())
t=C.d.n(this.b,b.gbP())
s=C.d.n(this.c,b.gci())
if(u<0)u=0
else if(u>1)u=1
if(t<0)t=0
else if(t>1)t=1
if(s<0)s=0
else if(s>1)s=1
return new V.X(u,t,s)},
p:function(a,b){var u,t,s
u=C.d.p(this.a,b.gcI())
t=C.d.p(this.b,b.gbP())
s=C.d.p(this.c,b.gci())
if(u<0)u=0
else if(u>1)u=1
if(t<0)t=0
else if(t>1)t=1
if(s<0)s=0
else if(s>1)s=1
return new V.X(u,t,s)},
t:function(a,b){var u,t
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.X))return!1
u=b.a
t=$.N().a
if(!(Math.abs(u-this.a)<t))return!1
if(!(Math.abs(b.b-this.b)<t))return!1
if(!(Math.abs(b.c-this.c)<t))return!1
return!0},
i:function(a){return"["+V.Q(this.a,3,0)+", "+V.Q(this.b,3,0)+", "+V.Q(this.c,3,0)+"]"}}
V.a8.prototype={
n:function(a,b){var u,t,s,r
u=C.d.n(this.a,b.gcI())
t=C.d.n(this.b,b.gbP())
s=C.d.n(this.c,b.gci())
r=C.d.n(this.d,b.gj5(b))
if(u<0)u=0
else if(u>1)u=1
if(t<0)t=0
else if(t>1)t=1
if(s<0)s=0
else if(s>1)s=1
if(r<0)r=0
else if(r>1)r=1
return new V.a8(u,t,s,r)},
p:function(a,b){var u,t,s,r
u=C.d.p(this.a,b.gcI())
t=C.d.p(this.b,b.gbP())
s=C.d.p(this.c,b.gci())
r=C.d.p(this.d,b.gj5(b))
if(u<0)u=0
else if(u>1)u=1
if(t<0)t=0
else if(t>1)t=1
if(s<0)s=0
else if(s>1)s=1
if(r<0)r=0
else if(r>1)r=1
return new V.a8(u,t,s,r)},
t:function(a,b){var u,t
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.a8))return!1
u=b.a
t=$.N().a
if(!(Math.abs(u-this.a)<t))return!1
if(!(Math.abs(b.b-this.b)<t))return!1
if(!(Math.abs(b.c-this.c)<t))return!1
if(!(Math.abs(b.d-this.d)<t))return!1
return!0},
i:function(a){return"["+V.Q(this.a,3,0)+", "+V.Q(this.b,3,0)+", "+V.Q(this.c,3,0)+", "+V.Q(this.d,3,0)+"]"}}
V.fx.prototype={}
V.cl.prototype={
V:function(a,b){var u=H.d([this.a,this.d,this.r,this.b,this.e,this.x,this.c,this.f,this.y],[P.x])
return u},
t:function(a,b){var u,t
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.cl))return!1
u=b.a
t=$.N().a
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
u=[P.x]
t=V.c0(H.d([this.a,this.d,this.r],u),3,0)
s=V.c0(H.d([this.b,this.e,this.x],u),3,0)
r=V.c0(H.d([this.c,this.f,this.y],u),3,0)
u=t.length
if(0>=u)return H.h(t,0)
q="["+t[0]+", "
p=s.length
if(0>=p)return H.h(s,0)
q=q+s[0]+", "
o=r.length
if(0>=o)return H.h(r,0)
q=q+r[0]+",\n"
if(1>=u)return H.h(t,1)
n=" "+t[1]+", "
if(1>=p)return H.h(s,1)
n=n+s[1]+", "
if(1>=o)return H.h(r,1)
n=q+(n+r[1]+",\n")
if(2>=u)return H.h(t,2)
u=" "+t[2]+", "
if(2>=p)return H.h(s,2)
u=u+s[2]+", "
if(2>=o)return H.h(r,2)
return n+(u+r[2]+"]")}}
V.aa.prototype={
V:function(a,b){var u=H.d([this.a,this.e,this.y,this.cx,this.b,this.f,this.z,this.cy,this.c,this.r,this.Q,this.db,this.d,this.x,this.ch,this.dx],[P.x])
return u},
cz:function(b1){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0
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
if(Math.abs(a7-0)<$.N().a)return V.aY()
a8=1/a7
a9=-r
b0=-d
return V.bg((t*a6-p*a5+m*a4)*a8,(-s*a6+o*a5-l*a4)*a8,(f*h-b*i+a1*j)*a8,(-e*h+a*i-a2*j)*a8,(a9*a6+p*a3-m*a0)*a8,(u*a6-o*a3+l*a0)*a8,(b0*h+b*k-a1*n)*a8,(g*h-a*k+a2*n)*a8,(r*a5-t*a3+m*c)*a8,(-u*a5+s*a3-l*c)*a8,(d*i-f*k+a1*q)*a8,(-g*i+e*k-a2*q)*a8,(a9*a4+t*a0-p*c)*a8,(u*a4-s*a0+o*c)*a8,(b0*j+f*n-b*q)*a8,(g*j-e*n+a*q)*a8)},
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
return V.bg(u*t+s*r+q*p+o*n,u*m+s*l+q*k+o*j,u*i+s*h+q*g+o*f,u*e+s*d+q*c+o*b,a*t+a0*r+a1*p+a2*n,a*m+a0*l+a1*k+a2*j,a*i+a0*h+a1*g+a2*f,a*e+a0*d+a1*c+a2*b,a3*t+a4*r+a5*p+a6*n,a3*m+a4*l+a5*k+a6*j,a3*i+a4*h+a5*g+a6*f,a3*e+a4*d+a5*c+a6*b,a7*t+a8*r+a9*p+b0*n,a7*m+a8*l+a9*k+b0*j,a7*i+a8*h+a9*g+b0*f,a7*e+a8*d+a9*c+b0*b)},
cM:function(a){var u,t,s
u=a.a
t=a.b
s=a.c
return new V.H(this.a*u+this.b*t+this.c*s,this.e*u+this.f*t+this.r*s,this.y*u+this.z*t+this.Q*s)},
bg:function(a){var u,t,s
u=a.a
t=a.b
s=a.c
return new V.a_(this.a*u+this.b*t+this.c*s+this.d,this.e*u+this.f*t+this.r*s+this.x,this.y*u+this.z*t+this.Q*s+this.ch)},
t:function(a,b){var u,t
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.aa))return!1
u=b.a
t=$.N().a
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
ed:function(a,b,c){var u,t,s,r,q,p,o,n,m,l
u=[P.x]
t=V.c0(H.d([this.a,this.e,this.y,this.cx],u),b,c)
s=V.c0(H.d([this.b,this.f,this.z,this.cy],u),b,c)
r=V.c0(H.d([this.c,this.r,this.Q,this.db],u),b,c)
q=V.c0(H.d([this.d,this.x,this.ch,this.dx],u),b,c)
u=t.length
if(0>=u)return H.h(t,0)
p="["+t[0]+", "
o=s.length
if(0>=o)return H.h(s,0)
p=p+s[0]+", "
n=r.length
if(0>=n)return H.h(r,0)
p=p+r[0]+", "
m=q.length
if(0>=m)return H.h(q,0)
p=p+q[0]+",\n"
l=a+" "
if(1>=u)return H.h(t,1)
l=l+t[1]+", "
if(1>=o)return H.h(s,1)
l=l+s[1]+", "
if(1>=n)return H.h(r,1)
l=l+r[1]+", "
if(1>=m)return H.h(q,1)
l=p+(l+q[1]+",\n")
p=a+" "
if(2>=u)return H.h(t,2)
p=p+t[2]+", "
if(2>=o)return H.h(s,2)
p=p+s[2]+", "
if(2>=n)return H.h(r,2)
p=p+r[2]+", "
if(2>=m)return H.h(q,2)
p=l+(p+q[2]+",\n")
l=a+" "
if(3>=u)return H.h(t,3)
l=l+t[3]+", "
if(3>=o)return H.h(s,3)
l=l+s[3]+", "
if(3>=n)return H.h(r,3)
l=l+r[3]+", "
if(3>=m)return H.h(q,3)
return p+(l+q[3]+"]")},
O:function(){return this.ed("",3,0)},
B:function(a){return this.ed(a,3,0)}}
V.a3.prototype={
n:function(a,b){return new V.a3(this.a+b.a,this.b+b.b)},
p:function(a,b){return new V.a3(this.a-b.a,this.b-b.b)},
t:function(a,b){var u,t
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.a3))return!1
u=b.a
t=$.N().a
if(!(Math.abs(u-this.a)<t))return!1
if(!(Math.abs(b.b-this.b)<t))return!1
return!0},
i:function(a){return"["+V.Q(this.a,3,0)+", "+V.Q(this.b,3,0)+"]"}}
V.a_.prototype={
n:function(a,b){return new V.a_(this.a+b.a,this.b+b.b,this.c+b.c)},
p:function(a,b){return new V.a_(this.a-b.a,this.b-b.b,this.c-b.c)},
v:function(a,b){return new V.a_(this.a*b,this.b*b,this.c*b)},
t:function(a,b){var u,t
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.a_))return!1
u=b.a
t=$.N().a
if(!(Math.abs(u-this.a)<t))return!1
if(!(Math.abs(b.b-this.b)<t))return!1
if(!(Math.abs(b.c-this.c)<t))return!1
return!0},
i:function(a){return"["+V.Q(this.a,3,0)+", "+V.Q(this.b,3,0)+", "+V.Q(this.c,3,0)+"]"}}
V.aC.prototype={
n:function(a,b){return new V.aC(C.d.n(this.a,b.gkk(b)),C.d.n(this.b,b.gkl(b)),C.d.n(this.c,b.gkm(b)),C.d.n(this.d,b.gkj(b)))},
p:function(a,b){return new V.aC(C.d.p(this.a,b.gkk(b)),C.d.p(this.b,b.gkl(b)),C.d.p(this.c,b.gkm(b)),C.d.p(this.d,b.gkj(b)))},
t:function(a,b){var u,t
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.aC))return!1
u=b.a
t=$.N().a
if(!(Math.abs(u-this.a)<t))return!1
if(!(Math.abs(b.b-this.b)<t))return!1
if(!(Math.abs(b.c-this.c)<t))return!1
if(!(Math.abs(b.d-this.d)<t))return!1
return!0},
i:function(a){return"["+V.Q(this.a,3,0)+", "+V.Q(this.b,3,0)+", "+V.Q(this.c,3,0)+", "+V.Q(this.d,3,0)+"]"}}
V.bT.prototype={
gau:function(){var u,t
u=this.c
t=this.d
if(u>t)return t
else return u},
t:function(a,b){var u,t
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.bT))return!1
u=b.a
t=$.N().a
if(!(Math.abs(u-this.a)<t))return!1
if(!(Math.abs(b.b-this.b)<t))return!1
if(!(Math.abs(b.c-this.c)<t))return!1
if(!(Math.abs(b.d-this.d)<t))return!1
return!0},
i:function(a){return"["+V.Q(this.a,3,0)+", "+V.Q(this.b,3,0)+", "+V.Q(this.c,3,0)+", "+V.Q(this.d,3,0)+"]"}}
V.V.prototype={
cB:function(a){return Math.sqrt(this.E(this))},
E:function(a){var u,t,s,r
u=this.a
t=a.a
if(typeof u!=="number")return u.v()
if(typeof t!=="number")return H.L(t)
s=this.b
r=a.b
if(typeof s!=="number")return s.v()
if(typeof r!=="number")return H.L(r)
return u*t+s*r},
n:function(a,b){var u,t,s
u=this.a
t=b.gjn(b)
if(typeof u!=="number")return u.n()
t=C.d.n(u,t)
u=this.b
s=b.gjo(b)
if(typeof u!=="number")return u.n()
return new V.V(t,C.d.n(u,s))},
p:function(a,b){var u,t,s
u=this.a
t=b.gjn(b)
if(typeof u!=="number")return u.p()
t=C.d.p(u,t)
u=this.b
s=b.gjo(b)
if(typeof u!=="number")return u.p()
return new V.V(t,C.d.p(u,s))},
v:function(a,b){var u,t
u=this.a
if(typeof u!=="number")return u.v()
t=this.b
if(typeof t!=="number")return t.v()
return new V.V(u*b,t*b)},
w:function(a,b){var u,t
if(Math.abs(b-0)<$.N().a){u=$.kK
if(u==null){u=new V.V(0,0)
$.kK=u}return u}u=this.a
if(typeof u!=="number")return u.w()
t=this.b
if(typeof t!=="number")return t.w()
return new V.V(u/b,t/b)},
t:function(a,b){var u,t,s
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.V))return!1
u=b.a
t=this.a
s=$.N()
s.toString
if(typeof u!=="number")return u.p()
if(typeof t!=="number")return H.L(t)
s=s.a
if(!(Math.abs(u-t)<s))return!1
u=b.b
t=this.b
if(typeof u!=="number")return u.p()
if(typeof t!=="number")return H.L(t)
if(!(Math.abs(u-t)<s))return!1
return!0},
i:function(a){return"["+V.Q(this.a,3,0)+", "+V.Q(this.b,3,0)+"]"}}
V.H.prototype={
cB:function(a){return Math.sqrt(this.E(this))},
E:function(a){return this.a*a.a+this.b*a.b+this.c*a.c},
cC:function(a,b){var u,t,s
u=this.a
t=this.b
s=this.c
return new V.H(u+b*(a.a-u),t+b*(a.b-t),s+b*(a.c-s))},
aE:function(a){var u,t,s,r,q,p
u=this.b
t=a.c
s=this.c
r=a.b
q=a.a
p=this.a
return new V.H(u*t-s*r,s*q-p*t,p*r-u*q)},
n:function(a,b){return new V.H(this.a+b.a,this.b+b.b,this.c+b.c)},
p:function(a,b){return new V.H(this.a-b.a,this.b-b.b,this.c-b.c)},
S:function(a){return new V.H(-this.a,-this.b,-this.c)},
v:function(a,b){return new V.H(this.a*b,this.b*b,this.c*b)},
w:function(a,b){if(Math.abs(b-0)<$.N().a)return V.cJ()
return new V.H(this.a/b,this.b/b,this.c/b)},
ef:function(){var u=$.N().a
if(!(Math.abs(0-this.a)<u))return!1
if(!(Math.abs(0-this.b)<u))return!1
if(!(Math.abs(0-this.c)<u))return!1
return!0},
t:function(a,b){var u,t
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.H))return!1
u=b.a
t=$.N().a
if(!(Math.abs(u-this.a)<t))return!1
if(!(Math.abs(b.b-this.b)<t))return!1
if(!(Math.abs(b.c-this.c)<t))return!1
return!0},
i:function(a){return"["+V.Q(this.a,3,0)+", "+V.Q(this.b,3,0)+", "+V.Q(this.c,3,0)+"]"}}
U.fh.prototype={
bR:function(a){var u=V.n3(a,this.c,this.b)
return u},
gm:function(){var u=this.y
if(u==null){u=D.E()
this.y=u}return u},
T:function(a){var u=this.y
if(u!=null)u.A(a)},
seA:function(a,b){},
sei:function(a){var u,t
u=this.b
if(!(Math.abs(u-a)<$.N().a)){this.b=a
if(a<this.c){this.c=a
this.d=a}else{t=this.d
if(a<t)this.d=this.bR(t)}u=new D.B("maximumLocation",u,this.b,this,[P.x])
u.b=!0
this.T(u)}},
sek:function(a){var u,t
u=this.c
if(!(Math.abs(u-a)<$.N().a)){this.c=a
if(this.b<a){this.b=a
this.d=a}else{t=this.d
if(a>t)this.d=this.bR(t)}u=new D.B("minimumLocation",u,this.c,this,[P.x])
u.b=!0
this.T(u)}},
sad:function(a,b){var u
b=this.bR(b)
u=this.d
if(!(Math.abs(u-b)<$.N().a)){this.d=b
u=new D.B("location",u,b,this,[P.x])
u.b=!0
this.T(u)}},
sej:function(a){var u,t,s
u=this.e
if(!(Math.abs(u-a)<$.N().a)){this.e=a
t=this.f
s=-a
if(t<s)t=s
else if(t>a)t=a
this.f=t
u=new D.B("maximumVelocity",u,a,this,[P.x])
u.b=!0
this.T(u)}},
sa1:function(a){var u,t
u=this.e
t=-u
if(a<t)a=t
else if(a>u)a=u
u=this.f
if(!(Math.abs(u-a)<$.N().a)){this.f=a
u=new D.B("velocity",u,a,this,[P.x])
u.b=!0
this.T(u)}},
sdO:function(a){var u
if(a<0)a=0
else if(a>1)a=1
u=this.x
if(!(Math.abs(u-a)<$.N().a)){this.x=a
u=new D.B("dampening",u,a,this,[P.x])
u.b=!0
this.T(u)}},
aa:function(a,b){var u,t,s,r,q
u=this.f
t=$.N().a
if(!(Math.abs(u-0)<t)||!(Math.abs(this.r-0)<t)){s=u+this.r*b
u=this.e
r=-u
if(s<r)s=r
else if(s>u)s=u
this.sad(0,this.d+s*b)
u=this.x
if(!(Math.abs(u-0)<$.N().a)){q=s*Math.pow(1-u,b)
if(s<0){if(q<s)q=s
else if(q>0)q=0}else if(q<0)q=0
else if(q>s)q=s
s=q}this.sa1(s)}}}
U.d9.prototype={
gm:function(){var u=this.b
if(u==null){u=D.E()
this.b=u}return u},
aT:function(a,b,c){return this.a},
t:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.d9))return!1
return J.K(this.a,b.a)},
i:function(a){return"Constant: "+this.a.B("          ")}}
U.cj.prototype={
gm:function(){var u=this.e
if(u==null){u=D.E()
this.e=u}return u},
T:function(a){var u
H.k(a,"$iv")
u=this.e
if(u!=null)u.A(a)},
ap:function(){return this.T(null)},
f5:function(a,b){var u,t,s,r,q,p,o,n
u=U.ac
H.j(b,"$ie",[u],"$ae")
for(t=b.length,s=this.gbl(),r={func:1,ret:-1,args:[D.v]},q=[r],p=0;p<b.length;b.length===t||(0,H.A)(b),++p){o=b[p]
if(o!=null){n=o.gm()
n.toString
H.l(s,r)
if(n.a==null)n.sab(H.d([],q))
n=n.a;(n&&C.a).h(n,s)}}u=new D.bu(a,b,this,[u])
u.b=!0
this.T(u)},
hN:function(a,b){var u,t,s
u=U.ac
H.j(b,"$ie",[u],"$ae")
for(t=b.gU(b),s=this.gbl();t.C();)t.gM(t).gm().G(0,s)
u=new D.bv(a,b,this,[u])
u.b=!0
this.T(u)},
aT:function(a,b,c){var u,t,s,r
u=this.r
t=b.e
if(typeof u!=="number")return u.bh()
if(u<t){this.r=t
u=this.e
if(u!=null)++u.d
for(u=this.a,u=new J.ao(u,u.length,0,[H.w(u,0)]),s=null;u.C();){t=u.d
if(t!=null){r=t.aT(0,b,c)
if(r!=null)s=s==null?r:r.v(0,s)}}this.f=s==null?V.aY():s
u=this.e
if(u!=null)u.av(0)}return this.f},
t:function(a,b){var u,t,s,r
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.cj))return!1
u=this.a.length
for(t=0;t<u;++t){s=this.a
if(t>=s.length)return H.h(s,t)
s=s[t]
r=b.a
if(t>=r.length)return H.h(r,t)
if(!J.K(s,r[t]))return!1}return!0},
i:function(a){return"Group"},
$ae:function(){return[U.ac]},
$aS:function(){return[U.ac]},
$iac:1}
U.ac.prototype={}
U.e5.prototype={
gm:function(){var u=this.fx
if(u==null){u=D.E()
this.fx=u}return u},
T:function(a){var u
H.k(a,"$iv")
u=this.fx
if(u!=null)u.A(a)},
ap:function(){return this.T(null)},
cc:function(a){var u,t
if(this.a!=null)return!1
this.a=a
u=a.c
t=u.b
if(t==null){t=D.E()
u.b=t
u=t}else u=t
u.h(0,this.gfZ())
u=this.a.c
t=u.d
if(t==null){t=D.E()
u.d=t
u=t}else u=t
u.h(0,this.gh0())
u=this.a.c
t=u.c
if(t==null){t=D.E()
u.c=t
u=t}else u=t
u.h(0,this.gh2())
u=this.a.d
t=u.f
if(t==null){t=D.E()
u.f=t
u=t}else u=t
u.h(0,this.gfV())
u=this.a.d
t=u.d
if(t==null){t=D.E()
u.d=t
u=t}else u=t
u.h(0,this.gfX())
u=this.a.e
t=u.b
if(t==null){t=D.E()
u.b=t
u=t}else u=t
u.h(0,this.gix())
u=this.a.e
t=u.d
if(t==null){t=D.E()
u.d=t
u=t}else u=t
u.h(0,this.giv())
u=this.a.e
t=u.c
if(t==null){t=D.E()
u.c=t
u=t}else u=t
u.h(0,this.git())
return!0},
aq:function(a){var u,t
u=a.a
t=a.b
if(this.f){if(typeof u!=="number")return u.S()
u=-u}if(this.r){if(typeof t!=="number")return t.S()
t=-t}return new V.V(u,t)},
h_:function(a){a=H.c(H.k(a,"$iv"),"$iby")
if(!J.K(this.d,a.x.b))return
this.cx=!0
this.ch=!0
this.cy=this.c.d
this.db=this.b.d},
h1:function(a){var u,t,s,r,q,p,o
a=H.c(H.k(a,"$iv"),"$iby")
if(!this.cx)return
if(this.ch){u=a.d.p(0,a.y)
u=new V.V(u.a,u.b)
u=u.E(u)
t=this.Q
if(typeof t!=="number")return H.L(t)
if(u<t)return
this.ch=!1}if(this.e){u=a.c
t=a.d.p(0,a.y)
u=this.aq(new V.V(t.a,t.b).v(0,2).w(0,u.gau()))
this.dx=u
t=this.c
u=u.a
if(typeof u!=="number")return u.S()
s=this.y
if(typeof s!=="number")return H.L(s)
t.sa1(-u*10*s)
s=this.b
u=this.dx.b
if(typeof u!=="number")return u.S()
t=this.x
if(typeof t!=="number")return H.L(t)
s.sa1(-u*10*t)}else{u=a.c
t=a.d
s=t.p(0,a.y)
r=this.aq(new V.V(s.a,s.b).v(0,2).w(0,u.gau()))
s=this.c
q=r.a
if(typeof q!=="number")return q.S()
p=this.y
if(typeof p!=="number")return H.L(p)
o=this.cy
if(typeof o!=="number")return H.L(o)
s.sad(0,-q*p+o)
o=this.b
p=r.b
if(typeof p!=="number")return p.S()
q=this.x
if(typeof q!=="number")return H.L(q)
s=this.db
if(typeof s!=="number")return H.L(s)
o.sad(0,-p*q+s)
this.b.sa1(0)
this.c.sa1(0)
t=t.p(0,a.z)
this.dx=this.aq(new V.V(t.a,t.b).v(0,2).w(0,u.gau()))}this.ap()},
h3:function(a){var u,t,s
H.k(a,"$iv")
if(!this.cx)return
this.cx=!1
if(this.ch)return
u=this.dx
if(u.E(u)>0.0001){u=this.c
t=this.dx.a
if(typeof t!=="number")return t.S()
s=this.y
if(typeof s!=="number")return H.L(s)
u.sa1(-t*10*s)
s=this.b
t=this.dx.b
if(typeof t!=="number")return t.S()
u=this.x
if(typeof u!=="number")return H.L(u)
s.sa1(-t*10*u)
this.ap()}},
fW:function(a){if(H.c(H.k(a,"$iv"),"$idt").x){this.ch=!0
this.cy=this.c.d
this.db=this.b.d}},
fY:function(a){var u,t,s,r,q,p,o
a=H.c(H.k(a,"$iv"),"$iby")
if(!J.K(this.d,a.x.b))return
u=a.c
t=a.d
s=t.p(0,a.y)
r=this.aq(new V.V(s.a,s.b).v(0,2).w(0,u.gau()))
s=this.c
q=r.a
if(typeof q!=="number")return q.S()
p=this.y
if(typeof p!=="number")return H.L(p)
o=this.cy
if(typeof o!=="number")return H.L(o)
s.sad(0,-q*p+o)
o=this.b
p=r.b
if(typeof p!=="number")return p.S()
q=this.x
if(typeof q!=="number")return H.L(q)
s=this.db
if(typeof s!=="number")return H.L(s)
o.sad(0,-p*q+s)
this.b.sa1(0)
this.c.sa1(0)
t=t.p(0,a.z)
this.dx=this.aq(new V.V(t.a,t.b).v(0,2).w(0,u.gau()))
this.ap()},
iy:function(a){H.k(a,"$iv")
this.cx=!0
this.ch=!0
this.cy=this.c.d
this.db=this.b.d},
iw:function(a){var u,t,s,r,q,p,o
a=H.c(H.k(a,"$iv"),"$idZ")
if(!this.cx)return
if(this.ch){u=a.d.p(0,a.y)
u=new V.V(u.a,u.b)
u=u.E(u)
t=this.Q
if(typeof t!=="number")return H.L(t)
if(u<t)return
this.ch=!1}if(this.e){u=a.c
t=a.d.p(0,a.y)
u=this.aq(new V.V(t.a,t.b).v(0,2).w(0,u.gau()))
this.dx=u
t=this.c
u=u.a
if(typeof u!=="number")return u.S()
s=this.y
if(typeof s!=="number")return H.L(s)
t.sa1(-u*10*s)
s=this.b
u=this.dx.b
if(typeof u!=="number")return u.S()
t=this.x
if(typeof t!=="number")return H.L(t)
s.sa1(-u*10*t)}else{u=a.c
t=a.d
s=t.p(0,a.y)
r=this.aq(new V.V(s.a,s.b).v(0,2).w(0,u.gau()))
s=this.c
q=r.a
if(typeof q!=="number")return q.S()
p=this.y
if(typeof p!=="number")return H.L(p)
o=this.cy
if(typeof o!=="number")return H.L(o)
s.sad(0,-q*p+o)
o=this.b
p=r.b
if(typeof p!=="number")return p.S()
q=this.x
if(typeof q!=="number")return H.L(q)
s=this.db
if(typeof s!=="number")return H.L(s)
o.sad(0,-p*q+s)
this.b.sa1(0)
this.c.sa1(0)
t=t.p(0,a.z)
this.dx=this.aq(new V.V(t.a,t.b).v(0,2).w(0,u.gau()))}this.ap()},
iu:function(a){var u,t,s
H.k(a,"$iv")
if(!this.cx)return
this.cx=!1
if(this.ch)return
u=this.dx
if(u.E(u)>0.0001){u=this.c
t=this.dx.a
if(typeof t!=="number")return t.S()
s=this.y
if(typeof s!=="number")return H.L(s)
u.sa1(-t*10*s)
s=this.b
t=this.dx.b
if(typeof t!=="number")return t.S()
u=this.x
if(typeof u!=="number")return H.L(u)
s.sa1(-t*10*u)
this.ap()}},
aT:function(a,b,c){var u,t,s,r,q
u=this.dy
t=b.e
if(typeof u!=="number")return u.bh()
if(u<t){this.dy=t
s=b.y
this.c.aa(0,s)
this.b.aa(0,s)
u=this.b.d
r=Math.cos(u)
q=Math.sin(u)
u=V.bg(1,0,0,0,0,r,-q,0,0,q,r,0,0,0,0,1)
t=this.c.d
r=Math.cos(t)
q=Math.sin(t)
this.fr=u.v(0,V.bg(r,0,-q,0,0,1,0,0,q,0,r,0,0,0,0,1))}return this.fr},
$iac:1}
U.e6.prototype={
gm:function(){var u=this.r
if(u==null){u=D.E()
this.r=u}return u},
T:function(a){var u=this.r
if(u!=null)u.A(a)},
cc:function(a){var u,t,s
if(this.a!=null)return!1
this.a=a
u=a.c
t=u.e
if(t==null){t=D.E()
u.e=t
u=t}else u=t
t=this.gh4()
u.h(0,t)
u=this.a.d
s=u.e
if(s==null){s=D.E()
u.e=s
u=s}else u=s
u.h(0,t)
return!0},
h5:function(a){var u,t,s,r
H.k(a,"$iv")
if(!J.K(this.b,this.a.b.c))return
H.c(a,"$ico")
u=this.d
t=a.x.b
s=this.c
if(typeof t!=="number")return t.v()
r=u+t*s
if(u!==r){this.d=r
u=new D.B("zoom",u,r,this,[P.x])
u.b=!0
this.T(u)}},
aT:function(a,b,c){var u,t,s
u=this.e
t=b.e
if(u<t){this.e=t
s=Math.pow(10,this.d)
this.f=V.ko(s,s,s,1)}return this.f},
$iac:1}
M.d8.prototype={
gm:function(){var u=this.f
if(u==null){u=D.E()
this.f=u}return u},
X:function(a){var u
H.k(a,"$iv")
u=this.f
if(u!=null)u.A(a)},
aW:function(){return this.X(null)},
hR:function(a,b){var u,t,s,r,q,p,o,n
u=M.at
H.j(b,"$ie",[u],"$ae")
for(t=b.length,s=this.gW(),r={func:1,ret:-1,args:[D.v]},q=[r],p=0;p<b.length;b.length===t||(0,H.A)(b),++p){o=b[p]
if(o!=null){n=o.gm()
n.toString
H.l(s,r)
if(n.a==null)n.sab(H.d([],q))
n=n.a;(n&&C.a).h(n,s)}}u=new D.bu(a,b,this,[u])
u.b=!0
this.X(u)},
hT:function(a,b){var u,t,s
u=M.at
H.j(b,"$ie",[u],"$ae")
for(t=b.gU(b),s=this.gW();t.C();)t.gM(t).gm().G(0,s)
u=new D.bv(a,b,this,[u])
u.b=!0
this.X(u)},
a8:function(a){var u,t
if(this.e)return
this.e=!0
for(u=this.a,u=new J.ao(u,u.length,0,[H.w(u,0)]);u.C();){t=u.d
if(t!=null)t.a8(a)}this.e=!1},
$ae:function(){return[M.at]},
$aS:function(){return[M.at]},
$iat:1}
M.db.prototype={
gm:function(){var u=this.f
if(u==null){u=D.E()
this.f=u}return u},
X:function(a){var u
H.k(a,"$iv")
u=this.f
if(u!=null)u.A(a)},
aW:function(){return this.X(null)},
sb2:function(a){var u,t
if(a==null)a=new X.fL()
u=this.a
if(u!==a){if(u!=null)u.gm().G(0,this.gW())
t=this.a
this.a=a
a.gm().h(0,this.gW())
u=new D.B("camera",t,this.a,this,[X.bK])
u.b=!0
this.X(u)}},
saH:function(a,b){var u,t
if(b==null)b=X.jF(!0,!0,!1,null,2000,null,0)
u=this.b
if(u!==b){if(u!=null)u.gm().G(0,this.gW())
t=this.b
this.b=b
b.gm().h(0,this.gW())
u=new D.B("target",t,this.b,this,[X.cz])
u.b=!0
this.X(u)}},
saw:function(a){var u,t
u=this.c
if(u!=a){if(u!=null)u.gm().G(0,this.gW())
t=this.c
this.c=a
if(a!=null)a.gm().h(0,this.gW())
u=new D.B("technique",t,this.c,this,[O.bB])
u.b=!0
this.X(u)}},
a8:function(a){var u
a.cH(this.c)
this.b.J(a)
this.a.J(a)
u=this.c
if(u!=null)u.aa(0,a)
this.d.aa(0,a)
this.d.a8(a)
this.a.a4(a)
this.b.a4(a)
a.cF()},
$iat:1}
M.dg.prototype={
X:function(a){var u
H.k(a,"$iv")
u=this.x
if(u!=null)u.A(a)},
aW:function(){return this.X(null)},
hf:function(a,b){var u,t,s,r,q,p,o,n
u=E.ak
H.j(b,"$ie",[u],"$ae")
for(t=b.length,s=this.gW(),r={func:1,ret:-1,args:[D.v]},q=[r],p=0;p<b.length;b.length===t||(0,H.A)(b),++p){o=b[p]
if(o!=null){n=o.z
if(n==null){n=new D.br()
n.sab(null)
n.saN(null)
n.c=null
n.d=0
o.z=n}H.l(s,r)
if(n.a==null)n.sab(H.d([],q))
n=n.a;(n&&C.a).h(n,s)}}u=new D.bu(a,b,this,[u])
u.b=!0
this.X(u)},
hh:function(a,b){var u,t,s
u=E.ak
H.j(b,"$ie",[u],"$ae")
for(t=b.gU(b),s=this.gW();t.C();)t.gM(t).gm().G(0,s)
u=new D.bv(a,b,this,[u])
u.b=!0
this.X(u)},
sb2:function(a){var u,t
if(a==null)a=X.kt(2000,1.0471975511965976,null,0.1,null)
u=this.a
if(u!==a){if(u!=null)u.gm().G(0,this.gW())
t=this.a
this.a=a
a.gm().h(0,this.gW())
u=new D.B("camera",t,this.a,this,[X.bK])
u.b=!0
this.X(u)}},
saH:function(a,b){var u,t
u=this.b
if(u!==b){if(u!=null)u.gm().G(0,this.gW())
t=this.b
this.b=b
b.gm().h(0,this.gW())
u=new D.B("target",t,this.b,this,[X.cz])
u.b=!0
this.X(u)}},
saw:function(a){var u,t
u=this.c
if(u!=a){if(u!=null)u.gm().G(0,this.gW())
t=this.c
this.c=a
if(a!=null)a.gm().h(0,this.gW())
u=new D.B("technique",t,this.c,this,[O.bB])
u.b=!0
this.X(u)}},
gm:function(){var u=this.x
if(u==null){u=D.E()
this.x=u}return u},
a8:function(a){var u
a.cH(this.c)
this.b.J(a)
this.a.J(a)
u=this.c
if(u!=null)u.aa(0,a)
for(u=this.d.a,u=new J.ao(u,u.length,0,[H.w(u,0)]);u.C();)u.d.aa(0,a)
for(u=this.d.a,u=new J.ao(u,u.length,0,[H.w(u,0)]);u.C();)u.d.a8(a)
this.a.toString
a.cy.aG()
a.db.aG()
this.b.a4(a)
a.cF()},
sfn:function(a,b){this.d=H.j(b,"$iS",[E.ak],"$aS")},
$iat:1}
M.at.prototype={}
A.d2.prototype={}
A.f6.prototype={
j:function(a,b){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<t;++s){r=u[s]
if(r.b===b)return r}return},
jp:function(){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<u.length;u.length===t||(0,H.A)(u),++s){r=u[s]
C.b.dS(r.a,r.c)}},
b3:function(){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<u.length;u.length===t||(0,H.A)(u),++s){r=u[s]
C.b.dR(r.a,r.c)}}}
A.dd.prototype={
ac:function(a,b,c){if(c==null||!c.d)C.b.D(b.a,b.d,1)
else{a.eO(c)
C.b.D(b.a,b.d,0)}}}
A.dw.prototype={
eW:function(a6,a7){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5
this.z=a6
u=new P.bA("")
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
a6.iH(u)
a6.iO(u)
a6.iI(u)
a6.iW(u)
a6.iX(u)
a6.iQ(u)
a6.j0(u)
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
u=new P.bA("")
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
q.iL(u)
q.iG(u)
q.iJ(u)
q.iM(u)
q.iU(u)
o=q.dy
if(o){m=u.a+="// === Enviromental ===\n"
m+="\n"
u.a=m
m+="uniform samplerCube envSampler;\n"
u.a=m
m+="uniform int nullEnvTxt;\n"
u.a=m
u.a=m+"\n"
q.iS(u)
q.iT(u)}q.iP(u)
m=u.a+="// === Alpha ===\n"
m+="\n"
u.a=m
l=q.y
if(l!==C.c){m+="uniform float alpha;\n"
u.a=m
if(l!==C.i){m+="uniform int nullAlphaTxt;\n"
u.a=m
if(l===C.f){m+="uniform sampler2D alphaTxt;\n"
u.a=m}else if(l===C.e){m+="uniform samplerCube alphaTxt;\n"
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
k=H.d([],[P.o])
if(q.b!==C.c)C.a.h(k,"ambient()")
if(q.c!==C.c)C.a.h(k,"diffuse(norm, litVec)")
if(q.d!==C.c)C.a.h(k,"invDiffuse(norm, litVec)")
if(q.e!==C.c)C.a.h(k,"specular(norm, litVec)")
m=u.a+="   return litClr*("+C.a.F(k," + ")+");\n"
m+="}\n"
u.a=m
u.a=m+"\n"
q.iK(u)
q.iR(u)
q.iV(u)
q.iY(u)
q.iZ(u)
q.j_(u)
q.iN(u)}m=u.a+="// === Main ===\n"
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
j=H.d([],[P.o])
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
i="vec4("+C.a.F(j," + ")+", alpha);"
q=u.a
if(n){q+="   gl_FragColor = colorMat*"+i+"\n"
u.a=q}else{q+="   gl_FragColor = "+i+"\n"
u.a=q}q+="}\n"
u.a=q
this.b7(0,s.charCodeAt(0)==0?s:s,q.charCodeAt(0)==0?q:q)
this.Q=this.x.j(0,"posAttr")
this.cx=this.x.j(0,"normAttr")
this.ch=this.x.j(0,"binmAttr")
this.cy=this.x.j(0,"txt2DAttr")
this.db=this.x.j(0,"txtCubeAttr")
this.dx=this.x.j(0,"bendAttr")
if(a6.fr)this.id=H.c(this.y.l(0,"invViewMat"),"$iY")
if(t)this.dy=H.c(this.y.l(0,"objMat"),"$iY")
if(r)this.fr=H.c(this.y.l(0,"viewObjMat"),"$iY")
this.fy=H.c(this.y.l(0,"projViewObjMat"),"$iY")
if(a6.x2)this.k1=H.c(this.y.l(0,"txt2DMat"),"$ibl")
if(a6.y1)this.k2=H.c(this.y.l(0,"txtCubeMat"),"$iY")
if(a6.y2)this.k3=H.c(this.y.l(0,"colorMat"),"$iY")
this.sfj(H.d([],[A.Y]))
t=a6.at
if(t>0){this.k4=H.k(this.y.l(0,"bendMatCount"),"$iC")
for(h=0;h<t;++h){s=this.r1
r=this.y
q="bendValues["+h+"].mat"
g=r.j(0,q)
if(g==null)H.q(P.r("Required uniform value, "+q+", was not defined or used in shader."));(s&&C.a).h(s,H.c(g,"$iY"))}}t=a6.a
if(t!==C.c){this.r2=H.c(this.y.l(0,"emissionClr"),"$iG")
switch(t){case C.c:break
case C.i:break
case C.f:this.rx=H.c(this.y.l(0,"emissionTxt"),"$ia0")
this.x1=H.c(this.y.l(0,"nullEmissionTxt"),"$iC")
break
case C.e:this.ry=H.c(this.y.l(0,"emissionTxt"),"$iae")
this.x1=H.c(this.y.l(0,"nullEmissionTxt"),"$iC")
break}}t=a6.b
if(t!==C.c){this.x2=H.c(this.y.l(0,"ambientClr"),"$iG")
switch(t){case C.c:break
case C.i:break
case C.f:this.y1=H.c(this.y.l(0,"ambientTxt"),"$ia0")
this.at=H.c(this.y.l(0,"nullAmbientTxt"),"$iC")
break
case C.e:this.y2=H.c(this.y.l(0,"ambientTxt"),"$iae")
this.at=H.c(this.y.l(0,"nullAmbientTxt"),"$iC")
break}}t=a6.c
if(t!==C.c){this.an=H.c(this.y.l(0,"diffuseClr"),"$iG")
switch(t){case C.c:break
case C.i:break
case C.f:this.bt=H.c(this.y.l(0,"diffuseTxt"),"$ia0")
this.bu=H.c(this.y.l(0,"nullDiffuseTxt"),"$iC")
break
case C.e:this.dT=H.c(this.y.l(0,"diffuseTxt"),"$iae")
this.bu=H.c(this.y.l(0,"nullDiffuseTxt"),"$iC")
break}}t=a6.d
if(t!==C.c){this.bv=H.c(this.y.l(0,"invDiffuseClr"),"$iG")
switch(t){case C.c:break
case C.i:break
case C.f:this.dU=H.c(this.y.l(0,"invDiffuseTxt"),"$ia0")
this.bw=H.c(this.y.l(0,"nullInvDiffuseTxt"),"$iC")
break
case C.e:this.dV=H.c(this.y.l(0,"invDiffuseTxt"),"$iae")
this.bw=H.c(this.y.l(0,"nullInvDiffuseTxt"),"$iC")
break}}t=a6.e
if(t!==C.c){this.bz=H.c(this.y.l(0,"shininess"),"$iU")
this.bx=H.c(this.y.l(0,"specularClr"),"$iG")
switch(t){case C.c:break
case C.i:break
case C.f:this.dW=H.c(this.y.l(0,"specularTxt"),"$ia0")
this.by=H.c(this.y.l(0,"nullSpecularTxt"),"$iC")
break
case C.e:this.dX=H.c(this.y.l(0,"specularTxt"),"$iae")
this.by=H.c(this.y.l(0,"nullSpecularTxt"),"$iC")
break}}switch(a6.f){case C.c:break
case C.i:break
case C.f:this.dY=H.c(this.y.l(0,"bumpTxt"),"$ia0")
this.bA=H.c(this.y.l(0,"nullBumpTxt"),"$iC")
break
case C.e:this.dZ=H.c(this.y.l(0,"bumpTxt"),"$iae")
this.bA=H.c(this.y.l(0,"nullBumpTxt"),"$iC")
break}if(a6.dy){this.e_=H.c(this.y.l(0,"envSampler"),"$iae")
this.e0=H.c(this.y.l(0,"nullEnvTxt"),"$iC")
t=a6.r
if(t!==C.c){this.bB=H.c(this.y.l(0,"reflectClr"),"$iG")
switch(t){case C.c:break
case C.i:break
case C.f:this.e1=H.c(this.y.l(0,"reflectTxt"),"$ia0")
this.bC=H.c(this.y.l(0,"nullReflectTxt"),"$iC")
break
case C.e:this.e2=H.c(this.y.l(0,"reflectTxt"),"$iae")
this.bC=H.c(this.y.l(0,"nullReflectTxt"),"$iC")
break}}t=a6.x
if(t!==C.c){this.bD=H.c(this.y.l(0,"refraction"),"$iU")
this.bE=H.c(this.y.l(0,"refractClr"),"$iG")
switch(t){case C.c:break
case C.i:break
case C.f:this.e3=H.c(this.y.l(0,"refractTxt"),"$ia0")
this.bF=H.c(this.y.l(0,"nullRefractTxt"),"$iC")
break
case C.e:this.e4=H.c(this.y.l(0,"refractTxt"),"$iae")
this.bF=H.c(this.y.l(0,"nullRefractTxt"),"$iC")
break}}}t=a6.y
if(t!==C.c){this.bG=H.c(this.y.l(0,"alpha"),"$iU")
switch(t){case C.c:break
case C.i:break
case C.f:this.e5=H.c(this.y.l(0,"alphaTxt"),"$ia0")
this.bH=H.c(this.y.l(0,"nullAlphaTxt"),"$iC")
break
case C.e:this.e6=H.c(this.y.l(0,"alphaTxt"),"$iae")
this.bH=H.c(this.y.l(0,"nullAlphaTxt"),"$iC")
break}}this.sf6(H.d([],[A.cD]))
this.sf7(H.d([],[A.cE]))
this.sf8(H.d([],[A.cF]))
this.sf9(H.d([],[A.cG]))
this.sfa(H.d([],[A.cH]))
this.sfb(H.d([],[A.cI]))
if(a6.k2){t=a6.z
if(t>0){this.e7=H.k(this.y.l(0,"dirLightCount"),"$iC")
for(h=0;h<t;++h){s=this.y
r="dirLights["+h+"].viewDir"
g=s.j(0,r)
if(g==null)H.q(P.r("Required uniform value, "+r+", was not defined or used in shader."))
H.c(g,"$iG")
s=this.y
r="dirLights["+h+"].color"
f=s.j(0,r)
if(f==null)H.q(P.r("Required uniform value, "+r+", was not defined or used in shader."))
H.c(f,"$iG")
s=this.cp;(s&&C.a).h(s,new A.cD(h,g,f))}}t=a6.Q
if(t>0){this.e8=H.k(this.y.l(0,"pntLightCount"),"$iC")
for(h=0;h<t;++h){s=this.y
r="pntLights["+h+"].point"
g=s.j(0,r)
if(g==null)H.q(P.r("Required uniform value, "+r+", was not defined or used in shader."))
H.c(g,"$iG")
s=this.y
r="pntLights["+h+"].viewPnt"
f=s.j(0,r)
if(f==null)H.q(P.r("Required uniform value, "+r+", was not defined or used in shader."))
H.c(f,"$iG")
s=this.y
r="pntLights["+h+"].color"
e=s.j(0,r)
if(e==null)H.q(P.r("Required uniform value, "+r+", was not defined or used in shader."))
H.c(e,"$iG")
s=this.y
r="pntLights["+h+"].att0"
d=s.j(0,r)
if(d==null)H.q(P.r("Required uniform value, "+r+", was not defined or used in shader."))
H.c(d,"$iU")
s=this.y
r="pntLights["+h+"].att1"
c=s.j(0,r)
if(c==null)H.q(P.r("Required uniform value, "+r+", was not defined or used in shader."))
H.c(c,"$iU")
s=this.y
r="pntLights["+h+"].att2"
b=s.j(0,r)
if(b==null)H.q(P.r("Required uniform value, "+r+", was not defined or used in shader."))
H.c(b,"$iU")
s=this.cq;(s&&C.a).h(s,new A.cE(h,g,f,e,d,c,b))}}t=a6.ch
if(t>0){this.e9=H.k(this.y.l(0,"spotLightCount"),"$iC")
for(h=0;h<t;++h){s=this.y
r="spotLights["+h+"].objPnt"
g=s.j(0,r)
if(g==null)H.q(P.r("Required uniform value, "+r+", was not defined or used in shader."))
H.c(g,"$iG")
s=this.y
r="spotLights["+h+"].objDir"
f=s.j(0,r)
if(f==null)H.q(P.r("Required uniform value, "+r+", was not defined or used in shader."))
H.c(f,"$iG")
s=this.y
r="spotLights["+h+"].viewPnt"
e=s.j(0,r)
if(e==null)H.q(P.r("Required uniform value, "+r+", was not defined or used in shader."))
H.c(e,"$iG")
s=this.y
r="spotLights["+h+"].color"
d=s.j(0,r)
if(d==null)H.q(P.r("Required uniform value, "+r+", was not defined or used in shader."))
H.c(d,"$iG")
s=this.y
r="spotLights["+h+"].cutoff"
c=s.j(0,r)
if(c==null)H.q(P.r("Required uniform value, "+r+", was not defined or used in shader."))
H.c(c,"$iU")
s=this.y
r="spotLights["+h+"].coneAngle"
b=s.j(0,r)
if(b==null)H.q(P.r("Required uniform value, "+r+", was not defined or used in shader."))
H.c(b,"$iU")
s=this.y
r="spotLights["+h+"].att0"
a=s.j(0,r)
if(a==null)H.q(P.r("Required uniform value, "+r+", was not defined or used in shader."))
H.c(a,"$iU")
s=this.y
r="spotLights["+h+"].att1"
a0=s.j(0,r)
if(a0==null)H.q(P.r("Required uniform value, "+r+", was not defined or used in shader."))
H.c(a0,"$iU")
s=this.y
r="spotLights["+h+"].att2"
a1=s.j(0,r)
if(a1==null)H.q(P.r("Required uniform value, "+r+", was not defined or used in shader."))
H.c(a1,"$iU")
s=this.cr;(s&&C.a).h(s,new A.cF(h,g,f,e,d,c,b,a,a0,a1))}}t=a6.cx
if(t>0){this.ea=H.k(this.y.l(0,"txtDirLightCount"),"$iC")
for(h=0;h<t;++h){s=this.y
r="txtDirLights["+h+"].objUp"
g=s.j(0,r)
if(g==null)H.q(P.r("Required uniform value, "+r+", was not defined or used in shader."))
H.c(g,"$iG")
s=this.y
r="txtDirLights["+h+"].objRight"
f=s.j(0,r)
if(f==null)H.q(P.r("Required uniform value, "+r+", was not defined or used in shader."))
H.c(f,"$iG")
s=this.y
r="txtDirLights["+h+"].objDir"
e=s.j(0,r)
if(e==null)H.q(P.r("Required uniform value, "+r+", was not defined or used in shader."))
H.c(e,"$iG")
s=this.y
r="txtDirLights["+h+"].viewDir"
d=s.j(0,r)
if(d==null)H.q(P.r("Required uniform value, "+r+", was not defined or used in shader."))
H.c(d,"$iG")
s=this.y
r="txtDirLights["+h+"].color"
c=s.j(0,r)
if(c==null)H.q(P.r("Required uniform value, "+r+", was not defined or used in shader."))
H.c(c,"$iG")
s=this.y
r="txtDirLights["+h+"].nullTxt"
b=s.j(0,r)
if(b==null)H.q(P.r("Required uniform value, "+r+", was not defined or used in shader."))
H.c(b,"$iC")
s=this.y
r="txtDirLightsTxt2D"+h
a=s.j(0,r)
if(a==null)H.q(P.r("Required uniform value, "+r+", was not defined or used in shader."))
H.c(a,"$ia0")
s=this.cs;(s&&C.a).h(s,new A.cG(h,g,f,e,d,c,a,b))}}t=a6.cy
if(t>0){this.eb=H.k(this.y.l(0,"txtPntLightCount"),"$iC")
for(h=0;h<t;++h){s=this.y
r="txtPntLights["+h+"].point"
g=s.j(0,r)
if(g==null)H.q(P.r("Required uniform value, "+r+", was not defined or used in shader."))
H.c(g,"$iG")
s=this.y
r="txtPntLights["+h+"].viewPnt"
f=s.j(0,r)
if(f==null)H.q(P.r("Required uniform value, "+r+", was not defined or used in shader."))
H.c(f,"$iG")
s=this.y
r="txtPntLights["+h+"].invViewRotMat"
e=s.j(0,r)
if(e==null)H.q(P.r("Required uniform value, "+r+", was not defined or used in shader."))
H.c(e,"$ibl")
s=this.y
r="txtPntLights["+h+"].color"
d=s.j(0,r)
if(d==null)H.q(P.r("Required uniform value, "+r+", was not defined or used in shader."))
H.c(d,"$iG")
s=this.y
r="txtPntLights["+h+"].nullTxt"
c=s.j(0,r)
if(c==null)H.q(P.r("Required uniform value, "+r+", was not defined or used in shader."))
H.c(c,"$iC")
s=this.y
r="txtPntLights["+h+"].att0"
b=s.j(0,r)
if(b==null)H.q(P.r("Required uniform value, "+r+", was not defined or used in shader."))
H.c(b,"$iU")
s=this.y
r="txtPntLights["+h+"].att1"
a=s.j(0,r)
if(a==null)H.q(P.r("Required uniform value, "+r+", was not defined or used in shader."))
H.c(a,"$iU")
s=this.y
r="txtPntLights["+h+"].att2"
a0=s.j(0,r)
if(a0==null)H.q(P.r("Required uniform value, "+r+", was not defined or used in shader."))
H.c(a0,"$iU")
s=this.y
r="txtPntLightsTxtCube"+h
a1=s.j(0,r)
if(a1==null)H.q(P.r("Required uniform value, "+r+", was not defined or used in shader."))
H.c(a1,"$iae")
s=this.ct;(s&&C.a).h(s,new A.cH(h,g,f,e,d,a1,c,b,a,a0))}}t=a6.db
if(t>0){this.ec=H.k(this.y.l(0,"txtSpotLightCount"),"$iC")
for(h=0;h<t;++h){s=this.y
r="txtSpotLights["+h+"].objPnt"
g=s.j(0,r)
if(g==null)H.q(P.r("Required uniform value, "+r+", was not defined or used in shader."))
H.c(g,"$iG")
s=this.y
r="txtSpotLights["+h+"].objDir"
f=s.j(0,r)
if(f==null)H.q(P.r("Required uniform value, "+r+", was not defined or used in shader."))
H.c(f,"$iG")
s=this.y
r="txtSpotLights["+h+"].objUp"
e=s.j(0,r)
if(e==null)H.q(P.r("Required uniform value, "+r+", was not defined or used in shader."))
H.c(e,"$iG")
s=this.y
r="txtSpotLights["+h+"].objRight"
d=s.j(0,r)
if(d==null)H.q(P.r("Required uniform value, "+r+", was not defined or used in shader."))
H.c(d,"$iG")
s=this.y
r="txtSpotLights["+h+"].viewPnt"
c=s.j(0,r)
if(c==null)H.q(P.r("Required uniform value, "+r+", was not defined or used in shader."))
H.c(c,"$iG")
s=this.y
r="txtSpotLights["+h+"].nullTxt"
b=s.j(0,r)
if(b==null)H.q(P.r("Required uniform value, "+r+", was not defined or used in shader."))
H.c(b,"$iC")
s=this.y
r="txtSpotLights["+h+"].color"
a=s.j(0,r)
if(a==null)H.q(P.r("Required uniform value, "+r+", was not defined or used in shader."))
H.c(a,"$iG")
s=this.y
r="txtSpotLights["+h+"].tuScalar"
a0=s.j(0,r)
if(a0==null)H.q(P.r("Required uniform value, "+r+", was not defined or used in shader."))
H.c(a0,"$iU")
s=this.y
r="txtSpotLights["+h+"].tvScalar"
a1=s.j(0,r)
if(a1==null)H.q(P.r("Required uniform value, "+r+", was not defined or used in shader."))
H.c(a1,"$iU")
s=this.y
r="txtSpotLights["+h+"].att0"
a2=s.j(0,r)
if(a2==null)H.q(P.r("Required uniform value, "+r+", was not defined or used in shader."))
H.c(a2,"$iU")
s=this.y
r="txtSpotLights["+h+"].att1"
a3=s.j(0,r)
if(a3==null)H.q(P.r("Required uniform value, "+r+", was not defined or used in shader."))
H.c(a3,"$iU")
s=this.y
r="txtSpotLights["+h+"].att2"
a4=s.j(0,r)
if(a4==null)H.q(P.r("Required uniform value, "+r+", was not defined or used in shader."))
H.c(a4,"$iU")
s=this.y
r="txtSpotLightsTxt2D"+h
a5=s.j(0,r)
if(a5==null)H.q(P.r("Required uniform value, "+r+", was not defined or used in shader."))
H.c(a5,"$ia0")
s=this.cu;(s&&C.a).h(s,new A.cI(h,g,f,e,d,c,a5,b,a,a0,a1,a2,a3,a4))}}}},
ac:function(a,b,c){C.b.D(b.a,b.d,1)},
ag:function(a,b,c){C.b.D(b.a,b.d,1)},
sfj:function(a){this.r1=H.j(a,"$ib",[A.Y],"$ab")},
sf6:function(a){this.cp=H.j(a,"$ib",[A.cD],"$ab")},
sf7:function(a){this.cq=H.j(a,"$ib",[A.cE],"$ab")},
sf8:function(a){this.cr=H.j(a,"$ib",[A.cF],"$ab")},
sf9:function(a){this.cs=H.j(a,"$ib",[A.cG],"$ab")},
sfa:function(a){this.ct=H.j(a,"$ib",[A.cH],"$ab")},
sfb:function(a){this.cu=H.j(a,"$ib",[A.cI],"$ab")}}
A.h4.prototype={
iH:function(a){var u,t,s
if(!this.x1)return
u=a.a+="struct BendingValue\n"
u+="{\n"
a.a=u
u+="   mat4 mat;\n"
a.a=u
u+="};\n"
a.a=u
a.a=u+"uniform int bendMatCount;\n"
u=a.a+="uniform BendingValue bendValues["+this.at+"];\n"
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
iO:function(a){var u
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
iI:function(a){var u
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
iW:function(a){var u,t
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
iX:function(a){var u,t
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
iQ:function(a){var u
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
j0:function(a){var u
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
aB:function(a,b,c){var u
if(b===C.c)return
u=a.a+="uniform vec3 "+c+"Clr;\n"
if(b===C.i)return
if(0>=c.length)return H.h(c,0)
u+="uniform int null"+(c[0].toUpperCase()+C.j.cS(c,1))+"Txt;\n"
a.a=u
if(b===C.f)a.a=u+("uniform sampler2D "+c+"Txt;\n")
else if(b===C.e)a.a=u+("uniform samplerCube "+c+"Txt;\n")},
iL:function(a){var u,t
u=this.a
if(u===C.c)return
t=a.a+="// === Emission ===\n"
a.a=t+"\n"
this.aB(a,u,"emission")
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
case C.e:u=t+"   if(nullEmissionTxt > 0) return emissionClr;\n"
a.a=u
u+="   return emissionClr*textureCube(emissionTxt, txtCube).rgb;\n"
a.a=u
break
default:u=t}u+="}\n"
a.a=u
a.a=u+"\n"},
iG:function(a){var u,t
u=this.b
if(u===C.c)return
t=a.a+="// === Ambient ===\n"
a.a=t+"\n"
this.aB(a,u,"ambient")
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
case C.e:u=t+"   if(nullAmbientTxt > 0) return ambientClr;\n"
a.a=u
u+="   return ambientClr*textureCube(ambientTxt, txtCube).rgb;\n"
a.a=u
break
default:u=t}u+="}\n"
a.a=u
a.a=u+"\n"},
iJ:function(a){var u,t
u=this.c
if(u===C.c)return
t=a.a+="// === Diffuse ===\n"
a.a=t+"\n"
this.aB(a,u,"diffuse")
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
iM:function(a){var u,t
u=this.d
if(u===C.c)return
t=a.a+="// === Inverse Diffuse ===\n"
a.a=t+"\n"
this.aB(a,u,"invDiffuse")
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
iU:function(a){var u,t
u=this.e
if(u===C.c)return
t=a.a+="// === Specular ===\n"
a.a=t+"\n"
this.aB(a,u,"specular")
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
iP:function(a){var u,t
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
iS:function(a){var u,t
u=this.r
if(u===C.c)return
t=a.a+="// === Reflection ===\n"
a.a=t+"\n"
this.aB(a,u,"reflect")
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
iT:function(a){var u,t
u=this.x
if(u===C.c)return
t=a.a+="// === Refraction ===\n"
a.a=t+"\n"
this.aB(a,u,"refract")
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
iK:function(a){var u,t
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
iR:function(a){var u,t
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
iV:function(a){var u,t
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
iY:function(a){var u,t,s
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
iZ:function(a){var u,t,s
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
j_:function(a){var u,t,s
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
iN:function(a){var u
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
A.cD.prototype={}
A.cG.prototype={}
A.cE.prototype={}
A.cH.prototype={}
A.cF.prototype={}
A.cI.prototype={}
A.dC.prototype={}
A.hm.prototype={
i:function(a){return this.e}}
A.cw.prototype={
aV:function(a,b){this.c=null
this.d=null
this.e=null
this.f=null
this.r=null
this.x=null
this.y=null},
b7:function(a,b,c){var u,t,s
this.c=b
this.d=c
this.e=this.d8(b,35633)
this.f=this.d8(this.d,35632)
u=this.a
t=u.createProgram()
this.r=t
C.b.dA(u,t,this.e)
C.b.dA(u,this.r,this.f)
C.b.jA(u,this.r)
if(!H.l3(C.b.bO(u,this.r,35714))){s=C.b.eH(u,this.r)
C.b.jg(u,this.r)
H.q(P.r("Failed to link shader: "+H.n(s)))}this.ic()
this.ig()},
J:function(a){C.b.aU(a.a,this.r)
this.x.jp()},
d8:function(a,b){var u,t,s
u=this.a
t=C.b.je(u,b)
C.b.eP(u,t,a)
C.b.ja(u,t)
if(!H.l3(C.b.eJ(u,t,35713))){s=C.b.eI(u,t)
C.b.jh(u,t)
throw H.i(P.r("Error compiling shader '"+H.n(t)+"': "+H.n(s)))}return t},
ic:function(){var u,t,s,r,q,p
u=H.d([],[A.d2])
t=this.a
s=H.af(C.b.bO(t,this.r,35721))
if(typeof s!=="number")return H.L(s)
r=0
for(;r<s;++r){q=C.b.eC(t,this.r,r)
p=C.b.eE(t,this.r,q.name)
C.a.h(u,new A.d2(t,q.name,p))}this.x=new A.f6(u)},
ig:function(){var u,t,s,r,q,p
u=H.d([],[A.e_])
t=this.a
s=H.af(C.b.bO(t,this.r,35718))
if(typeof s!=="number")return H.L(s)
r=0
for(;r<s;++r){q=C.b.eD(t,this.r,r)
p=C.b.eK(t,this.r,q.name)
C.a.h(u,this.jf(q.type,q.size,q.name,p))}this.y=new A.ii(u)},
aK:function(a,b,c){var u,t
u=this.a
t=this.r
if(a===1)return new A.C(u,t,b,c)
else return A.jR(u,t,b,a,c)},
fs:function(a,b,c){var u,t
u=this.a
t=this.r
if(a===1)return new A.a0(u,t,b,c)
else return A.jR(u,t,b,a,c)},
ft:function(a,b,c){var u,t
u=this.a
t=this.r
if(a===1)return new A.ae(u,t,b,c)
else return A.jR(u,t,b,a,c)},
bq:function(a,b){return new P.eg(a+" uniform variables are unsupported by all browsers.\n"+("Please change the type of "+H.n(b)+"."))},
jf:function(a,b,c,d){switch(a){case 5120:return this.aK(b,c,d)
case 5121:return this.aK(b,c,d)
case 5122:return this.aK(b,c,d)
case 5123:return this.aK(b,c,d)
case 5124:return this.aK(b,c,d)
case 5125:return this.aK(b,c,d)
case 5126:return new A.U(this.a,this.r,c,d)
case 35664:return new A.au(this.a,this.r,c,d)
case 35665:return new A.G(this.a,this.r,c,d)
case 35666:return new A.e0(this.a,this.r,c,d)
case 35667:return new A.ie(this.a,this.r,c,d)
case 35668:return new A.ig(this.a,this.r,c,d)
case 35669:return new A.ih(this.a,this.r,c,d)
case 35674:return new A.ij(this.a,this.r,c,d)
case 35675:return new A.bl(this.a,this.r,c,d)
case 35676:return new A.Y(this.a,this.r,c,d)
case 35678:return this.fs(b,c,d)
case 35680:return this.ft(b,c,d)
case 35670:throw H.i(this.bq("BOOL",c))
case 35671:throw H.i(this.bq("BOOL_VEC2",c))
case 35672:throw H.i(this.bq("BOOL_VEC3",c))
case 35673:throw H.i(this.bq("BOOL_VEC4",c))
default:throw H.i(P.r("Unknown uniform variable type "+H.n(a)+" for "+H.n(c)+"."))}}}
A.bN.prototype={
i:function(a){return this.b}}
A.dM.prototype={}
A.dT.prototype={
f_:function(a,b){var u,t,s,r,q
this.b7(0,"attribute vec3 posAttr;\n\nvarying vec2 pos;\n\nvoid main()\n{\n  pos = posAttr.xy*0.5 + 0.5;\n  gl_Position = vec4(posAttr, 1.0);\n}\n".charCodeAt(0)==0?"attribute vec3 posAttr;\n\nvarying vec2 pos;\n\nvoid main()\n{\n  pos = posAttr.xy*0.5 + 0.5;\n  gl_Position = vec4(posAttr, 1.0);\n}\n":"attribute vec3 posAttr;\n\nvarying vec2 pos;\n\nvoid main()\n{\n  pos = posAttr.xy*0.5 + 0.5;\n  gl_Position = vec4(posAttr, 1.0);\n}\n",A.me(a))
this.z=this.x.j(0,"posAttr")
this.Q=H.c(this.y.l(0,"txtCount"),"$iC")
this.ch=H.c(this.y.l(0,"backClr"),"$ie0")
this.siD(H.d([],[A.a0]))
this.sfo(H.d([],[A.Y]))
u=[A.au]
this.sik(H.d([],u))
this.sil(H.d([],u))
this.sfv(H.d([],u))
this.sfw(H.d([],u))
this.sfJ(H.d([],[A.C]))
for(t=0;t<a;++t){u=this.cx
s=this.y
r="txt"+t
q=s.j(0,r)
if(q==null)H.q(P.r("Required uniform value, "+r+", was not defined or used in shader."));(u&&C.a).h(u,H.c(q,"$ia0"))
u=this.cy
s=this.y
r="clrMat"+t
q=s.j(0,r)
if(q==null)H.q(P.r("Required uniform value, "+r+", was not defined or used in shader."));(u&&C.a).h(u,H.c(q,"$iY"))
u=this.db
s=this.y
r="srcLoc"+t
q=s.j(0,r)
if(q==null)H.q(P.r("Required uniform value, "+r+", was not defined or used in shader."));(u&&C.a).h(u,H.c(q,"$iau"))
u=this.dx
s=this.y
r="srcSize"+t
q=s.j(0,r)
if(q==null)H.q(P.r("Required uniform value, "+r+", was not defined or used in shader."));(u&&C.a).h(u,H.c(q,"$iau"))
u=this.dy
s=this.y
r="destLoc"+t
q=s.j(0,r)
if(q==null)H.q(P.r("Required uniform value, "+r+", was not defined or used in shader."));(u&&C.a).h(u,H.c(q,"$iau"))
u=this.fr
s=this.y
r="destSize"+t
q=s.j(0,r)
if(q==null)H.q(P.r("Required uniform value, "+r+", was not defined or used in shader."));(u&&C.a).h(u,H.c(q,"$iau"))
u=this.fx
s=this.y
r="flip"+t
q=s.j(0,r)
if(q==null)H.q(P.r("Required uniform value, "+r+", was not defined or used in shader."));(u&&C.a).h(u,H.c(q,"$iC"))}},
siD:function(a){this.cx=H.j(a,"$ib",[A.a0],"$ab")},
sfo:function(a){this.cy=H.j(a,"$ib",[A.Y],"$ab")},
sik:function(a){this.db=H.j(a,"$ib",[A.au],"$ab")},
sil:function(a){this.dx=H.j(a,"$ib",[A.au],"$ab")},
sfv:function(a){this.dy=H.j(a,"$ib",[A.au],"$ab")},
sfw:function(a){this.fr=H.j(a,"$ib",[A.au],"$ab")},
sfJ:function(a){this.fx=H.j(a,"$ib",[A.C],"$ab")}}
A.e_.prototype={}
A.ii.prototype={
j:function(a,b){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<t;++s){r=u[s]
if(r.c===b)return r}return},
l:function(a,b){var u=this.j(0,b)
if(u==null)throw H.i(P.r("Required uniform value, "+b+", was not defined or used in shader."))
return u},
i:function(a){return this.O()},
js:function(a){var u,t,s,r
for(u=this.a,t=u.length,s="",r=0;r<u.length;u.length===t||(0,H.A)(u),++r)s+=u[r].i(0)+a
return s},
O:function(){return this.js("\n")}}
A.C.prototype={
i:function(a){return"Uniform1i: "+H.n(this.c)}}
A.ie.prototype={
i:function(a){return"Uniform2i: "+H.n(this.c)}}
A.ig.prototype={
i:function(a){return"Uniform3i: "+H.n(this.c)}}
A.ih.prototype={
i:function(a){return"Uniform4i: "+H.n(this.c)}}
A.id.prototype={
i:function(a){return"Uniform1iv: "+H.n(this.c)},
siE:function(a){this.e=H.j(a,"$ib",[P.y],"$ab")}}
A.U.prototype={
i:function(a){return"Uniform1f: "+H.n(this.c)}}
A.au.prototype={
i:function(a){return"Uniform2f: "+H.n(this.c)}}
A.G.prototype={
i:function(a){return"Uniform3f: "+H.n(this.c)}}
A.e0.prototype={
i:function(a){return"Uniform4f: "+H.n(this.c)}}
A.ij.prototype={
i:function(a){return"Uniform1Mat2 "+H.n(this.c)}}
A.bl.prototype={
a_:function(a){var u=new Float32Array(H.bW(H.j(a,"$ib",[P.x],"$ab")))
C.b.ex(this.a,this.d,!1,u)},
i:function(a){return"UniformMat3: "+H.n(this.c)}}
A.Y.prototype={
a_:function(a){var u=new Float32Array(H.bW(H.j(a,"$ib",[P.x],"$ab")))
C.b.cN(this.a,this.d,!1,u)},
i:function(a){return"UniformMat4: "+H.n(this.c)}}
A.a0.prototype={
eO:function(a){var u,t,s
u=a==null||!a.d
t=this.a
s=this.d
if(u)C.b.D(t,s,0)
else C.b.D(t,s,a.a)},
i:function(a){return"UniformSampler2D: "+H.n(this.c)}}
A.ae.prototype={
cQ:function(a){var u,t,s
u=a==null||a.d<6
t=this.a
s=this.d
if(u)C.b.D(t,s,0)
else C.b.D(t,s,a.a)},
i:function(a){return"UniformSamplerCube: "+H.n(this.c)}}
F.jh.prototype={
$3:function(a,b,c){var u,t,s
u=this.a
t=u.a.cC(u.b,b).cC(u.d.cC(u.c,b),c)
a.sad(0,new V.a_(t.a,t.b,t.c))
a.ska(t.w(0,Math.sqrt(t.E(t))))
u=1-b
s=1-c
s=new V.aC(this.b+b*c,this.c+u*c,this.d+b*s,this.e+u*s)
if(!J.K(a.cx,s)){a.cx=s
u=a.a
if(u!=null)u.a3()}},
$S:22}
F.jx.prototype={
$1:function(a){return new V.a_(Math.cos(a),Math.sin(a),0)},
$S:36}
F.jn.prototype={
$3:function(a,b,c){var u,t,s,r,q,p,o,n,m
u=b*6.283185307179586
t=this.a
s=this.b
r=J.k6(t.$1(u),s)
s=J.lw(J.k6(t.$1(u+3.141592653589793/this.c),s),r)
s=new V.H(s.a,s.b,s.c)
q=s.w(0,Math.sqrt(s.E(s)))
t=$.kM
if(t==null){t=new V.H(1,0,0)
$.kM=t
p=t}else p=t
t=q.aE(!J.K(q,p)?V.kQ():p)
o=t.w(0,Math.sqrt(t.E(t)))
t=o.aE(q)
p=t.w(0,Math.sqrt(t.E(t)))
n=c*6.283185307179586
t=Math.cos(n)
s=this.d
m=Math.sin(n)
t=p.v(0,t*s)
s=o.v(0,m*s)
a.sad(0,J.lv(r,new V.a_(t.a-s.a,t.b-s.b,t.c-s.c)))},
$S:22}
F.a7.prototype={
b4:function(){if(!this.gb5()){C.a.G(this.a.a.d.b,this)
this.a.a.a3()}this.c4()
this.c5()
this.i3()},
c9:function(a){this.a=a
C.a.h(a.d.b,this)},
ca:function(a){this.b=a
C.a.h(a.d.c,this)},
ib:function(a){this.c=a
C.a.h(a.d.d,this)},
c4:function(){var u=this.a
if(u!=null){C.a.G(u.d.b,this)
this.a=null}},
c5:function(){var u=this.b
if(u!=null){C.a.G(u.d.c,this)
this.b=null}},
i3:function(){var u=this.c
if(u!=null){C.a.G(u.d.d,this)
this.c=null}},
gb5:function(){return this.a==null||this.b==null||this.c==null},
fi:function(){var u,t,s,r,q
u=this.a
t=u==null?null:u.r
u=this.b
s=u==null?null:u.r
u=this.c
r=u==null?null:u.r
q=V.cJ()
if(t!=null)q=q.n(0,t)
if(s!=null)q=q.n(0,s)
if(r!=null)q=q.n(0,r)
if(q.ef())return
return q.w(0,Math.sqrt(q.E(q)))},
fm:function(){var u,t,s,r,q
u=this.a
t=u==null?null:u.f
u=this.b
s=u==null?null:u.f
u=this.c
r=u==null?null:u.f
if(t==null||s==null||r==null)return
u=s.p(0,t)
u=new V.H(u.a,u.b,u.c)
q=u.w(0,Math.sqrt(u.E(u)))
u=r.p(0,t)
u=new V.H(u.a,u.b,u.c)
u=q.aE(u.w(0,Math.sqrt(u.E(u))))
return u.w(0,Math.sqrt(u.E(u)))},
ck:function(){if(this.d!=null)return!0
var u=this.fi()
if(u==null){u=this.fm()
if(u==null)return!1}this.d=u
this.a.a.a3()
return!0},
fh:function(){var u,t,s,r,q
u=this.a
t=u==null?null:u.x
u=this.b
s=u==null?null:u.x
u=this.c
r=u==null?null:u.x
q=V.cJ()
if(t!=null)q=q.n(0,t)
if(s!=null)q=q.n(0,s)
if(r!=null)q=q.n(0,r)
if(q.ef())return
return q.w(0,Math.sqrt(q.E(q)))},
fl:function(){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f
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
if(Math.abs(i-0)<$.N().a){u=m.p(0,p)
u=new V.H(u.a,u.b,u.c)
h=u.w(0,Math.sqrt(u.E(u)))
if(j.a-k.a<0)h=h.S(0)}else{g=(u-l.b)/i
u=m.p(0,p).v(0,g).n(0,p).p(0,s)
u=new V.H(u.a,u.b,u.c)
h=u.w(0,Math.sqrt(u.E(u)))
j=j.a
k=k.a
if((j-k)*g+k-l.a<0)h=h.S(0)}u=this.d
if(u!=null){f=u.w(0,Math.sqrt(u.E(u)))
u=f.aE(h)
u=u.w(0,Math.sqrt(u.E(u))).aE(f)
h=u.w(0,Math.sqrt(u.E(u)))}return h},
cj:function(){if(this.e!=null)return!0
var u=this.fh()
if(u==null){u=this.fl()
if(u==null)return!1}this.e=u
this.a.a.a3()
return!0},
gj9:function(a){if(J.K(this.a,this.b))return!0
if(J.K(this.b,this.c))return!0
if(J.K(this.c,this.a))return!0
return!1},
t:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.O()},
B:function(a){var u,t
if(this.gb5())return a+"disposed"
u=a+C.j.aj(J.aw(this.a.e),0)+", "+C.j.aj(J.aw(this.b.e),0)+", "+C.j.aj(J.aw(this.c.e),0)+" {"
t=this.d
u=t!=null?u+(t.i(0)+", "):u+"-, "
t=this.e
return t!=null?u+(t.i(0)+"}"):u+"-}"},
O:function(){return this.B("")}}
F.fB.prototype={}
F.hL.prototype={
b8:function(a,b,c){var u,t
u=b.a
u.a.a.u()
u=u.e
t=c.a
t.a.a.u()
if(u==t.e){u=b.b
u.a.a.u()
u=u.e
t=c.b
t.a.a.u()
if(u==t.e){u=b.c
u.a.a.u()
u=u.e
t=c.c
t.a.a.u()
t=u==t.e
u=t}else u=!1
return u}else{u=b.a
u.a.a.u()
u=u.e
t=c.b
t.a.a.u()
if(u==t.e){u=b.b
u.a.a.u()
u=u.e
t=c.c
t.a.a.u()
if(u==t.e){u=b.c
u.a.a.u()
u=u.e
t=c.a
t.a.a.u()
t=u==t.e
u=t}else u=!1
return u}else{u=b.a
u.a.a.u()
u=u.e
t=c.c
t.a.a.u()
if(u==t.e){u=b.b
u.a.a.u()
u=u.e
t=c.a
t.a.a.u()
if(u==t.e){u=b.c
u.a.a.u()
u=u.e
t=c.b
t.a.a.u()
t=u==t.e
u=t}else u=!1
return u}else return!1}}}}
F.be.prototype={
b4:function(){if(!this.gb5()){C.a.G(this.a.a.c.b,this)
this.a.a.a3()}this.c4()
this.c5()},
c9:function(a){this.a=a
C.a.h(a.c.b,this)},
ca:function(a){this.b=a
C.a.h(a.c.c,this)},
c4:function(){var u=this.a
if(u!=null){C.a.G(u.c.b,this)
this.a=null}},
c5:function(){var u=this.b
if(u!=null){C.a.G(u.c.c,this)
this.b=null}},
gb5:function(){return this.a==null||this.b==null},
t:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.O()},
B:function(a){if(this.gb5())return a+"disposed"
return a+C.j.aj(J.aw(this.a.e),0)+", "+C.j.aj(J.aw(this.b.e),0)},
O:function(){return this.B("")}}
F.fT.prototype={}
F.ic.prototype={
b8:function(a,b,c){var u,t
u=b.a
u.a.a.u()
u=u.e
t=c.a
t.a.a.u()
if(u==t.e){u=b.b
u.a.a.u()
u=u.e
t=c.b
t.a.a.u()
return u==t.e}else{u=b.a
u.a.a.u()
u=u.e
t=c.b
t.a.a.u()
if(u==t.e){u=b.b
u.a.a.u()
u=u.e
t=c.a
t.a.a.u()
return u==t.e}else return!1}}}
F.bz.prototype={
t:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.O()},
B:function(a){var u=this.a
if(u==null)return a+"disposed"
return a+C.j.aj(J.aw(u.e),0)},
O:function(){return this.B("")}}
F.dK.prototype={
gm:function(){var u=this.e
if(u==null){u=D.E()
this.e=u}return u},
cD:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i,h
u=this.e
if(u!=null)++u.d
a.a.u()
t=this.a.c.length
for(u=a.a.c,s=u.length,r=0;r<u.length;u.length===s||(0,H.A)(u),++r){q=u[r]
this.a.h(0,q.jd())}this.a.u()
for(u=a.b.b,s=u.length,r=0;r<u.length;u.length===s||(0,H.A)(u),++r){p=u[r]
o=this.a
n=p.a
n.a.a.u()
n=n.e
if(typeof n!=="number")return n.n()
n+=t
o=o.c
if(n>=o.length)return H.h(o,n)
m=o[n]
this.b.a.a.h(0,m)
n=new F.bz()
if(m.a==null)H.q(P.r("May not create a point with a vertex which is not attached to a shape."))
n.a=m
C.a.h(m.b.b,n)
C.a.h(n.a.a.b.b,n)
o=n.a.a.e
if(o!=null)o.A(null)}for(u=a.c.b,s=u.length,r=0;r<u.length;u.length===s||(0,H.A)(u),++r){l=u[r]
o=this.a
n=l.a
n.a.a.u()
n=n.e
if(typeof n!=="number")return n.n()
n+=t
o=o.c
if(n>=o.length)return H.h(o,n)
k=o[n]
n=this.a
o=l.b
o.a.a.u()
o=o.e
if(typeof o!=="number")return o.n()
o+=t
n=n.c
if(o>=n.length)return H.h(n,o)
j=n[o]
o=this.c.a
o.a.h(0,k)
o.a.h(0,j)
F.lQ(k,j)}for(u=a.d.b,s=u.length,r=0;r<u.length;u.length===s||(0,H.A)(u),++r){i=u[r]
o=this.a
n=i.a
n.a.a.u()
n=n.e
if(typeof n!=="number")return n.n()
n+=t
o=o.c
if(n>=o.length)return H.h(o,n)
k=o[n]
n=this.a
o=i.b
o.a.a.u()
o=o.e
if(typeof o!=="number")return o.n()
o+=t
n=n.c
if(o>=n.length)return H.h(n,o)
j=n[o]
o=this.a
n=i.c
n.a.a.u()
n=n.e
if(typeof n!=="number")return n.n()
n+=t
o=o.c
if(n>=o.length)return H.h(o,n)
h=o[n]
n=this.d.a
n.a.h(0,k)
n.a.h(0,j)
n.a.h(0,h)
F.ch(k,j,h)}u=this.e
if(u!=null)u.av(0)},
al:function(){var u,t
u=this.e
if(u!=null)++u.d
t=this.d.al()||!1
if(!this.a.al())t=!1
u=this.e
if(u!=null)u.av(0)
return t},
aQ:function(){var u,t
u=this.e
if(u!=null)++u.d
t=this.d.aQ()||!1
if(!this.a.aQ())t=!1
u=this.e
if(u!=null)u.av(0)
return t},
bs:function(){var u=this.e
if(u!=null)++u.d
this.a.bs()
u=this.e
if(u!=null)u.av(0)
return!0},
jF:function(a,b){var u,t,s,r,q,p,o
P.ar("FLAG 1\n")
u=this.e
if(u!=null)++u.d
P.ar("FLAG 2\n")
u=this.a.c
t=H.d(u.slice(0),[H.w(u,0)])
P.ar("FLAG 3\n")
for(u=[F.am];t.length!==0;){s=C.a.gjr(t)
C.a.jX(t,0)
if(s!=null){r=H.d([],u)
C.a.h(r,s)
for(q=t.length,p=0;p<t.length;t.length===q||(0,H.A)(t),++p){o=t[p]
if(o!=null&&a.b8(0,s,o)){C.a.h(r,o)
C.a.G(t,o)}}if(r.length>1)b.cD(r)}}P.ar("FLAG 4\n")
this.a.u()
P.ar("FLAG 5\n")
this.c.cJ()
P.ar("FLAG 6\n")
this.d.cJ()
P.ar("FLAG 7\n")
this.b.jY()
P.ar("FLAG 8\n")
this.c.cK(new F.ic())
P.ar("FLAG 9\n")
this.d.cK(new F.hL())
P.ar("FLAG 10\n")
u=this.e
if(u!=null)u.av(0)
P.ar("FLAG 11\n")},
b1:function(a0,a1){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a
u=this.a.c.length
a1.toString
t=$.ag()
s=a1.a
r=(s&t.a)!==0?1:0
if((s&$.aL().a)!==0)++r
if((s&$.aK().a)!==0)++r
if((s&$.av().a)!==0)++r
if((s&$.aM().a)!==0)++r
if((s&$.d_().a)!==0)++r
if((s&$.d0().a)!==0)++r
if((s&$.c5().a)!==0)++r
if((s&$.bn().a)!==0)++r
q=a1.gcR(a1)
p=q*4
t=new Array(u*q)
t.fixed$length=Array
s=P.x
o=H.d(t,[s])
t=new Array(r)
t.fixed$length=Array
n=H.d(t,[Z.d6])
for(m=0,l=0;l<r;++l){k=a1.j6(l)
j=k.gcR(k)
C.a.a9(n,l,new Z.d6(k,j,m*4,p,0))
for(i=0;i<u;++i){t=this.a.c
if(i>=t.length)return H.h(t,i)
h=t[i].jB(k)
g=m+i*q
for(f=0;f<h.length;++f){C.a.a9(o,g,h[f]);++g}}m+=j}H.j(o,"$ib",[s],"$ab")
t=a0.a
e=t.createBuffer()
C.b.ar(t,34962,e)
C.b.dE(t,34962,new Float32Array(H.bW(o)),35044)
C.b.ar(t,34962,null)
d=new Z.bb(new Z.e7(34962,e),n,a1)
d.sfO(H.d([],[Z.bt]))
if(this.b.b.length!==0){s=P.y
c=H.d([],[s])
for(l=0;b=this.b.b,l<b.length;++l){b=b[l].a
b.a.a.u()
C.a.h(c,b.e)}a=Z.jS(t,34963,H.j(c,"$ib",[s],"$ab"))
C.a.h(d.b,new Z.bt(0,c.length,a))}if(this.c.b.length!==0){s=P.y
c=H.d([],[s])
for(l=0;b=this.c.b,l<b.length;++l){b=b[l].a
b.a.a.u()
C.a.h(c,b.e)
b=this.c.b
if(l>=b.length)return H.h(b,l)
b=b[l].b
b.a.a.u()
C.a.h(c,b.e)}a=Z.jS(t,34963,H.j(c,"$ib",[s],"$ab"))
C.a.h(d.b,new Z.bt(1,c.length,a))}if(this.d.b.length!==0){s=P.y
c=H.d([],[s])
for(l=0;b=this.d.b,l<b.length;++l){b=b[l].a
b.a.a.u()
C.a.h(c,b.e)
b=this.d.b
if(l>=b.length)return H.h(b,l)
b=b[l].b
b.a.a.u()
C.a.h(c,b.e)
b=this.d.b
if(l>=b.length)return H.h(b,l)
b=b[l].c
b.a.a.u()
C.a.h(c,b.e)}a=Z.jS(t,34963,H.j(c,"$ib",[s],"$ab"))
C.a.h(d.b,new Z.bt(4,c.length,a))}return d},
i:function(a){var u=H.d([],[P.o])
if(this.a.c.length!==0){C.a.h(u,"Vertices:")
C.a.h(u,this.a.B("   "))}if(this.b.b.length!==0){C.a.h(u,"Points:")
C.a.h(u,this.b.B("   "))}if(this.c.b.length!==0){C.a.h(u,"Lines:")
C.a.h(u,this.c.B("   "))}if(this.d.b.length!==0){C.a.h(u,"Faces:")
C.a.h(u,this.d.B("   "))}return C.a.F(u,"\n")},
ao:function(a){var u=this.e
if(u!=null)u.A(a)},
a3:function(){return this.ao(null)},
$ina:1}
F.hF.prototype={
j2:function(a){var u,t,s,r,q,p
H.j(a,"$ib",[F.am],"$ab")
u=H.d([],[F.a7])
t=a[0]
for(s=this.a,r=2;r<4;++r){q=a[r-1]
p=a[r]
s.a.h(0,t)
s.a.h(0,q)
s.a.h(0,p)
C.a.h(u,F.ch(t,q,p))}return u},
j3:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k,j,i,h
H.j(c,"$ib",[F.am],"$ab")
u=H.d([],[F.a7])
for(t=this.a,s=b,r=0,q=!1,p=1;p<a;++p,++r,++s){for(o=q,n=1;n<b;++n,s=j){m=c.length
if(r<0||r>=m)return H.h(c,r)
l=c[r];++r
if(r>=m)return H.h(c,r)
k=c[r]
j=s+1
if(j<0||j>=m)return H.h(c,j)
i=c[j]
if(s<0||s>=m)return H.h(c,s)
h=c[s]
m=t.a
if(o){m.h(0,l)
t.a.h(0,k)
t.a.h(0,i)
C.a.h(u,F.ch(l,k,i))
t.a.h(0,l)
t.a.h(0,i)
t.a.h(0,h)
C.a.h(u,F.ch(l,i,h))}else{m.h(0,k)
t.a.h(0,i)
t.a.h(0,h)
C.a.h(u,F.ch(k,i,h))
t.a.h(0,k)
t.a.h(0,h)
t.a.h(0,l)
C.a.h(u,F.ch(k,h,l))}o=!o}q=!q}return u},
gk:function(a){return this.b.length},
cK:function(a){var u,t,s,r,q,p,o,n
for(u=this.a,t=u.a.c.length-1;t>=0;--t){s=u.a.c
if(t>=s.length)return H.h(s,t)
r=s[t]
for(s=r.d,q=s.b.length+s.c.length+s.d.length-1;q>=0;--q){p=r.d.j(0,q)
for(o=q-1;o>=0;--o){n=r.d.j(0,o)
if(a.b8(0,p,n)){p.b4()
break}}}}},
cJ:function(){var u,t,s
for(u=this.b.length-1;u>=0;--u){t=this.b
if(u>=t.length)return H.h(t,u)
s=t[u]
t=s.gj9(s)
if(t)s.b4()}},
al:function(){var u,t,s,r
for(u=this.b,t=u.length,s=!0,r=0;r<u.length;u.length===t||(0,H.A)(u),++r)if(!u[r].ck())s=!1
return s},
aQ:function(){var u,t,s,r
for(u=this.b,t=u.length,s=!0,r=0;r<u.length;u.length===t||(0,H.A)(u),++r)if(!u[r].cj())s=!1
return s},
i:function(a){return this.O()},
B:function(a){var u,t,s,r
u=H.d([],[P.o])
for(t=this.b,s=t.length,r=0;r<t.length;t.length===s||(0,H.A)(t),++r)C.a.h(u,t[r].B(a))
return C.a.F(u,"\n")},
O:function(){return this.B("")},
sfE:function(a){this.b=H.j(a,"$ib",[F.a7],"$ab")}}
F.hG.prototype={
gk:function(a){return this.b.length},
cK:function(a){var u,t,s,r,q,p,o,n
for(u=this.a,t=u.a.c.length-1;t>=0;--t){s=u.a.c
if(t>=s.length)return H.h(s,t)
r=s[t]
for(s=r.c,q=s.b.length+s.c.length-1;q>=0;--q){p=r.c.j(0,q)
for(o=q-1;o>=0;--o){n=r.c.j(0,o)
if(a.b8(0,p,n)){p.b4()
break}}}}},
cJ:function(){var u,t,s
for(u=this.b.length-1;u>=0;--u){t=this.b
if(u>=t.length)return H.h(t,u)
s=t[u]
t=J.K(s.a,s.b)
if(t)s.b4()}},
i:function(a){return this.O()},
B:function(a){var u,t,s,r
u=H.d([],[P.o])
t=this.b.length
for(s=0;s<t;++s){r=this.b
if(s>=r.length)return H.h(r,s)
C.a.h(u,r[s].B(a+(""+s+". ")))}return C.a.F(u,"\n")},
O:function(){return this.B("")},
sfR:function(a){this.b=H.j(a,"$ib",[F.be],"$ab")}}
F.hH.prototype={
gk:function(a){return this.b.length},
jY:function(){var u,t,s
for(u=this.b.length-1;u>=0;--u){t=this.b
if(u>=t.length)return H.h(t,u)
t=t[u]
s=t.a
if(s.b.b.length>1){if(s!=null){C.a.G(s.a.b.b,t)
s=t.a.a.e
if(s!=null)s.A(null)}s=t.a
if(s!=null){C.a.G(s.b.b,t)
t.a=null}}}},
i:function(a){return this.O()},
B:function(a){var u,t,s,r
u=H.d([],[P.o])
for(t=this.b,s=t.length,r=0;r<t.length;t.length===s||(0,H.A)(t),++r)C.a.h(u,t[r].B(a))
return C.a.F(u,"\n")},
O:function(){return this.B("")},
sc1:function(a){this.b=H.j(a,"$ib",[F.bz],"$ab")}}
F.am.prototype={
cm:function(a){var u,t,s,r,q,p,o
u=this.f
t=this.r
s=this.x
r=this.y
q=this.z
p=this.Q
o=this.ch
return F.is(this.cx,s,p,u,t,r,q,a,o)},
jd:function(){return this.cm(null)},
sad:function(a,b){var u
if(!J.K(this.f,b)){this.f=b
u=this.a
if(u!=null)u.a3()}},
ska:function(a){var u
if(!J.K(this.z,a)){this.z=a
u=this.a
if(u!=null)u.a3()}},
jB:function(a){var u,t
if(a.t(0,$.ag())){u=this.f
t=[P.x]
if(u==null)return H.d([0,0,0],t)
else return H.d([u.a,u.b,u.c],t)}else if(a.t(0,$.aL())){u=this.r
t=[P.x]
if(u==null)return H.d([0,1,0],t)
else return H.d([u.a,u.b,u.c],t)}else if(a.t(0,$.aK())){u=this.x
t=[P.x]
if(u==null)return H.d([0,0,1],t)
else return H.d([u.a,u.b,u.c],t)}else if(a.t(0,$.av())){u=this.y
t=[P.x]
if(u==null)return H.d([0,0],t)
else return H.d([u.a,u.b],t)}else if(a.t(0,$.aM())){u=this.z
t=[P.x]
if(u==null)return H.d([0,0,0],t)
else return H.d([u.a,u.b,u.c],t)}else if(a.t(0,$.d_())){u=this.Q
t=[P.x]
if(u==null)return H.d([1,1,1],t)
else return H.d([u.a,u.b,u.c],t)}else if(a.t(0,$.d0())){u=this.Q
t=[P.x]
if(u==null)return H.d([1,1,1,1],t)
else return H.d([u.a,u.b,u.c,u.d],t)}else if(a.t(0,$.c5()))return H.d([this.ch],[P.x])
else if(a.t(0,$.bn())){u=this.cx
t=[P.x]
if(u==null)return H.d([-1,-1,-1,-1],t)
else return H.d([u.a,u.b,u.c,u.d],t)}else return H.d([],[P.x])},
ck:function(){var u,t
u={}
if(this.r!=null)return!0
t=this.a
if(t!=null){t=t.e
if(t!=null)++t.d}u.a=V.cJ()
this.d.R(0,new F.iD(u))
u=u.a
this.r=u.w(0,Math.sqrt(u.E(u)))
u=this.a
if(u!=null){u.a3()
u=this.a.e
if(u!=null)u.av(0)}return!0},
cj:function(){var u,t
u={}
if(this.x!=null)return!0
t=this.a
if(t!=null){t=t.e
if(t!=null)++t.d}u.a=V.cJ()
this.d.R(0,new F.iC(u))
u=u.a
this.x=u.w(0,Math.sqrt(u.E(u)))
u=this.a
if(u!=null){u.a3()
u=this.a.e
if(u!=null)u.av(0)}return!0},
t:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.O()},
B:function(a){var u,t,s
u=H.d([],[P.o])
C.a.h(u,C.j.aj(J.aw(this.e),0))
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
C.a.h(u,V.Q(this.ch,3,0))
t=this.cx
if(t!=null)C.a.h(u,t.i(0))
else C.a.h(u,"-")
s=C.a.F(u,", ")
return a+"{"+s+"}"},
O:function(){return this.B("")}}
F.iD.prototype={
$1:function(a){var u,t
H.k(a,"$ia7")
u=a==null?null:a.d
if(u!=null){t=this.a
t.a=t.a.n(0,u)}},
$S:5}
F.iC.prototype={
$1:function(a){var u,t
H.k(a,"$ia7")
u=a==null?null:a.e
if(u!=null){t=this.a
t.a=t.a.n(0,u)}},
$S:5}
F.it.prototype={
u:function(){var u,t,s,r
if(this.b){u=this.c
t=u.length
for(s=0,r=0;r<t;++r){if(r>=u.length)return H.h(u,r)
u[r].e=s;++s}this.b=!1}},
h:function(a,b){var u,t
u=b.a
if(u!=null){if(u===this.a)return!1
throw H.i(P.r("May not add a vertex already attached to another shape to this shape."))}u=this.c
b.e=u.length
t=this.a
b.a=t
C.a.h(u,b)
t.a3()
return!0},
j4:function(a,b,c,d,e,f,g,h,i){var u=F.is(a,b,c,d,e,f,g,h,i)
this.h(0,u)
return u},
br:function(a,b,c,d,e,f){return this.j4(a,null,b,c,null,d,e,f,0)},
gk:function(a){return this.c.length},
al:function(){var u,t,s
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.A)(u),++s)u[s].ck()
return!0},
aQ:function(){var u,t,s
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.A)(u),++s)u[s].cj()
return!0},
bs:function(){var u,t,s,r,q,p,o,n
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.A)(u),++s){r=u[s]
if(r.z==null){q=r.r
p=q.a
o=q.b
n=q.c
n=q.w(0,Math.sqrt(p*p+o*o+n*n))
if(!J.K(r.z,n)){r.z=n
q=r.a
if(q!=null){q=q.e
if(q!=null)q.A(null)}}}}return!0},
i:function(a){return this.O()},
B:function(a){var u,t,s,r
this.u()
u=H.d([],[P.o])
for(t=this.c,s=t.length,r=0;r<t.length;t.length===s||(0,H.A)(t),++r)C.a.h(u,t[r].B(a))
return C.a.F(u,"\n")},
O:function(){return this.B("")},
siF:function(a){this.c=H.j(a,"$ib",[F.am],"$ab")}}
F.iu.prototype={
gk:function(a){return this.b.length+this.c.length+this.d.length},
j:function(a,b){var u,t,s
u=this.b
t=u.length
if(b<t){if(b<0)return H.h(u,b)
return u[b]}b-=t
u=this.c
s=u.length
if(b<s){if(b<0)return H.h(u,b)
return u[b]}b-=s
u=this.d
if(b<0||b>=u.length)return H.h(u,b)
return u[b]},
R:function(a,b){H.l(b,{func:1,ret:-1,args:[F.a7]})
C.a.R(this.b,b)
C.a.R(this.c,new F.iv(this,b))
C.a.R(this.d,new F.iw(this,b))},
i:function(a){return this.O()},
B:function(a){var u,t,s,r
u=H.d([],[P.o])
for(t=this.b,s=t.length,r=0;r<t.length;t.length===s||(0,H.A)(t),++r)C.a.h(u,t[r].B(a))
for(t=this.c,s=t.length,r=0;r<t.length;t.length===s||(0,H.A)(t),++r)C.a.h(u,t[r].B(a))
for(t=this.d,s=t.length,r=0;r<t.length;t.length===s||(0,H.A)(t),++r)C.a.h(u,t[r].B(a))
return C.a.F(u,"\n")},
O:function(){return this.B("")},
sfF:function(a){this.b=H.j(a,"$ib",[F.a7],"$ab")},
sfG:function(a){this.c=H.j(a,"$ib",[F.a7],"$ab")},
sfH:function(a){this.d=H.j(a,"$ib",[F.a7],"$ab")}}
F.iv.prototype={
$1:function(a){H.k(a,"$ia7")
if(!J.K(a.a,this.a))this.b.$1(a)},
$S:5}
F.iw.prototype={
$1:function(a){var u
H.k(a,"$ia7")
u=this.a
if(!J.K(a.a,u)&&!J.K(a.b,u))this.b.$1(a)},
$S:5}
F.ix.prototype={
gk:function(a){return this.b.length+this.c.length},
j:function(a,b){var u,t,s
u=this.b
t=u.length
if(b>=t){u=this.c
s=b-t
if(s<0||s>=u.length)return H.h(u,s)
return u[s]}else{if(b<0)return H.h(u,b)
return u[b]}},
i:function(a){return this.O()},
B:function(a){var u,t,s,r
u=H.d([],[P.o])
for(t=this.b,s=t.length,r=0;r<t.length;t.length===s||(0,H.A)(t),++r)C.a.h(u,t[r].B(a))
for(t=this.c,s=t.length,r=0;r<t.length;t.length===s||(0,H.A)(t),++r)C.a.h(u,t[r].B(a))
return C.a.F(u,"\n")},
O:function(){return this.B("")},
sfS:function(a){this.b=H.j(a,"$ib",[F.be],"$ab")},
sfT:function(a){this.c=H.j(a,"$ib",[F.be],"$ab")}}
F.iz.prototype={}
F.iy.prototype={
b8:function(a,b,c){return J.K(b.f,c.f)}}
F.iA.prototype={}
F.hl.prototype={
cD:function(a){var u,t,s,r,q,p,o,n,m
H.j(a,"$ib",[F.am],"$ab")
u=V.cJ()
for(t=a.length,s=0;s<t;++s){r=a[s].r
if(r!=null)u=new V.H(u.a+r.a,u.b+r.b,u.c+r.c)}u=u.w(0,Math.sqrt(u.E(u)))
for(t=a.length,r=u==null,s=0;s<a.length;a.length===t||(0,H.A)(a),++s){q=a[s]
if(r)p=null
else{o=u.a
n=u.b
m=u.c
p=u.w(0,Math.sqrt(o*o+n*n+m*m))}if(!J.K(q.r,p)){q.r=p
o=q.a
if(o!=null){o=o.e
if(o!=null)o.A(null)}}}return}}
F.iB.prototype={
gk:function(a){return this.b.length},
i:function(a){return this.O()},
B:function(a){var u,t,s,r
u=H.d([],[P.o])
for(t=this.b,s=t.length,r=0;r<t.length;t.length===s||(0,H.A)(t),++r)C.a.h(u,t[r].B(a))
return C.a.F(u,"\n")},
O:function(){return this.B("")},
sc1:function(a){this.b=H.j(a,"$ib",[F.bz],"$ab")}}
O.fp.prototype={
gm:function(){var u=this.r
if(u==null){u=D.E()
this.r=u}return u},
H:function(a){var u=this.r
if(u!=null)u.A(a)},
Y:function(){return this.H(null)},
sdM:function(a){if(this.b!=a){this.b=a
this.Y()}},
sdG:function(a){if(this.c!=a){this.c=a
this.Y()}},
sdF:function(a){var u=a==null?V.aY():a
this.f=u
if(!J.K(u,a)){this.f=a
this.Y()}},
aa:function(a,b){},
N:function(a,b){H.j(a,"$ib",[T.aG],"$ab")
if(b!=null)if(!C.a.am(a,b)){b.a=a.length
C.a.h(a,b)}},
bd:function(a,b){var u,t,s,r,q,p
if(this.a==null){u=H.k(a.fr.j(0,"Distort"),"$idd")
if(u==null){t=a.a
u=new A.dd(t,"Distort")
u.aV(t,"Distort")
u.b7(0,$.lJ,$.lI)
u.z=u.x.j(0,"posAttr")
u.Q=u.x.j(0,"txt2DAttr")
u.ch=H.c(u.y.l(0,"projViewObjMat"),"$iY")
u.cx=H.c(u.y.l(0,"colorTxt2DMat"),"$ibl")
u.cy=H.c(u.y.l(0,"bumpTxt2DMat"),"$ibl")
u.db=H.c(u.y.l(0,"colorTxt"),"$ia0")
u.dx=H.c(u.y.l(0,"bumpTxt"),"$ia0")
u.dy=H.c(u.y.l(0,"nullColorTxt"),"$iC")
u.fr=H.c(u.y.l(0,"nullBumpTxt"),"$iC")
u.fx=H.c(u.y.l(0,"bumpMat"),"$iY")
a.b_(u)}this.a=u}if(b.e==null){t=b.d
s=$.ag()
r=$.av()
r=t.b1(new Z.bD(a.a),new Z.an(s.a|r.a))
r.a2($.ag()).e=this.a.z.c
r.a2($.av()).e=this.a.Q.c
b.e=r}q=H.d([],[T.aG])
this.N(q,this.b)
this.N(q,this.c)
for(p=0;p<q.length;++p)q[p].J(a)
t=this.a
t.J(a)
s=this.b
t.ac(t.db,t.dy,s)
s=this.c
t.ac(t.dx,t.fr,s)
s=a.gcG()
r=t.ch
r.toString
r.a_(s.V(0,!0))
s=this.d
r=t.cx
r.toString
r.a_(s.V(0,!0))
s=this.e
r=t.cy
r.toString
r.a_(s.V(0,!0))
s=this.f
t=t.fx
t.toString
t.a_(s.V(0,!0))
t=b.e
if(t instanceof Z.bb){t.J(a)
t.a8(a)
t.a4(a)}else b.e=null
t=this.a
t.toString
s=a.a
C.b.aU(s,null)
t.x.b3()
for(p=0;p<q.length;++p){t=q[p]
if(t.c){t.c=!1
C.b.aP(s,33984+t.a)
C.b.a7(s,3553,null)}}}}
O.dv.prototype={
gm:function(){var u=this.dy
if(u==null){u=D.E()
this.dy=u}return u},
H:function(a){var u
H.k(a,"$iv")
u=this.dy
if(u!=null)u.A(a)},
Y:function(){return this.H(null)},
dn:function(a){H.k(a,"$iv")
this.a=null
this.H(a)},
i7:function(){return this.dn(null)},
h9:function(a,b){var u=V.aa
u=new D.bu(a,H.j(b,"$ie",[u],"$ae"),this,[u])
u.b=!0
this.H(u)},
hb:function(a,b){var u=V.aa
u=new D.bv(a,H.j(b,"$ie",[u],"$ae"),this,[u])
u.b=!0
this.H(u)},
d5:function(){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7
u=this.dx
t=C.h.a5(u.e.length+3,4)*4
s=C.h.a5(u.f.length+3,4)*4
r=C.h.a5(u.r.length+3,4)*4
q=C.h.a5(u.x.length+3,4)*4
p=C.h.a5(u.y.length+3,4)*4
o=C.h.a5(u.z.length+3,4)*4
n=C.h.a5(this.e.a.length+3,4)*4
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
a2=u===C.f||m===C.f||l===C.f||k===C.f||j===C.f||i===C.f||h===C.f||g===C.f||f===C.f
a3=u===C.e||m===C.e||l===C.e||k===C.e||j===C.e||i===C.e||h===C.e||g===C.e||f===C.e
a4=s+p+q+r+o>0
a5=n>0
a6=a0||!b||a
a7=$.ag()
if(a0){b=$.aL()
a7=new Z.an(a7.a|b.a)}if(a1){b=$.aK()
a7=new Z.an(a7.a|b.a)}if(a2){b=$.av()
a7=new Z.an(a7.a|b.a)}if(a3){b=$.aM()
a7=new Z.an(a7.a|b.a)}if(a5){b=$.bn()
a7=new Z.an(a7.a|b.a)}return new A.h4(u,m,l,k,j,i,h,g,f,t,s,r,q,p,o,t+s+r+q+p+o,d,d,a4,a6,!0,!1,!1,c,a4,a,a0,a1,a2,a3,a5,!1,!1,!1,n,e.charCodeAt(0)==0?e:e,a7)},
N:function(a,b){H.j(a,"$ib",[T.aG],"$ab")},
aa:function(a,b){var u,t,s,r,q
for(u=this.dx.a,u=new J.ao(u,u.length,0,[H.w(u,0)]);u.C();){t=u.d
t.toString
s=$.ir
if(s==null){s=new V.H(0,0,1)
$.ir=s}t.a=s
r=t.b
if(r!=null){q=r.a
if(q!=null)t.a=q.cM(s)}}},
bd:function(a2,a3){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1
u=this.a
if(u==null){u=this.d5()
t=H.k(a2.fr.j(0,u.an),"$idw")
if(t==null){t=A.lV(u,a2.a)
a2.b_(t)}this.a=t
a3.e=null
u=t}s=u.z
r=s.bt
u=a3.e
if(!(u instanceof Z.bb)){a3.e=null
u=null}if(u==null||!u.d.t(0,r)){u=s.r1
if(u)a3.d.al()
q=s.r2
if(q)a3.d.aQ()
p=s.ry
if(p)a3.d.bs()
o=a3.d.b1(new Z.bD(a2.a),r)
o.a2($.ag()).e=this.a.Q.c
if(u)o.a2($.aL()).e=this.a.cx.c
if(q)o.a2($.aK()).e=this.a.ch.c
if(s.rx)o.a2($.av()).e=this.a.cy.c
if(p)o.a2($.aM()).e=this.a.db.c
if(s.x1)o.a2($.bn()).e=this.a.dx.c
a3.e=o}u=T.aG
n=H.d([],[u])
this.a.J(a2)
if(s.fx){q=this.a
p=a2.dx
p=p.gZ(p)
q=q.dy
q.toString
q.a_(p.V(0,!0))}if(s.fy){q=this.a
p=a2.gey()
q=q.fr
q.toString
q.a_(p.V(0,!0))}q=this.a
p=a2.gcG()
q=q.fy
q.toString
q.a_(p.V(0,!0))
if(s.x2){q=this.a
p=this.b
q=q.k1
q.toString
q.a_(C.o.V(p,!0))}if(s.y1){q=this.a
p=this.c
q=q.k2
q.toString
q.a_(C.o.V(p,!0))}if(s.y2){q=this.a
p=this.d
q=q.k3
q.toString
q.a_(C.o.V(p,!0))}if(s.at>0){m=this.e.a.length
q=this.a.k4
C.b.D(q.a,q.d,m)
for(q=[P.x],l=0;l<m;++l){p=this.a
k=this.e.a
if(l>=k.length)return H.h(k,l)
k=k[l]
p.toString
H.k(k,"$iaa")
p=p.r1
if(l>=p.length)return H.h(p,l)
p=p[l]
j=new Float32Array(H.bW(H.j(k.V(0,!0),"$ib",q,"$ab")))
C.b.cN(p.a,p.d,!1,j)}}switch(s.a){case C.c:break
case C.i:q=this.a
p=this.f.f
q=q.r2
q.toString
k=p.a
i=p.b
p=p.c
C.b.q(q.a,q.d,k,i,p)
break
case C.f:this.N(n,this.f.d)
q=this.a
p=this.f.d
q.ac(q.rx,q.x1,p)
p=this.a
q=this.f.f
p=p.r2
p.toString
k=q.a
i=q.b
q=q.c
C.b.q(p.a,p.d,k,i,q)
break
case C.e:this.N(n,this.f.e)
q=this.a
p=this.f.e
q.ag(q.ry,q.x1,p)
p=this.a
q=this.f.f
p=p.r2
p.toString
k=q.a
i=q.b
q=q.c
C.b.q(p.a,p.d,k,i,q)
break}if(s.k2){switch(s.b){case C.c:break
case C.i:q=this.a
p=this.r.f
q=q.x2
q.toString
k=p.a
i=p.b
p=p.c
C.b.q(q.a,q.d,k,i,p)
break
case C.f:this.N(n,this.r.d)
q=this.a
p=this.r.d
q.ac(q.y1,q.at,p)
p=this.a
q=this.r.f
p=p.x2
p.toString
k=q.a
i=q.b
q=q.c
C.b.q(p.a,p.d,k,i,q)
break
case C.e:this.N(n,this.r.e)
q=this.a
p=this.r.e
q.ag(q.y2,q.at,p)
p=this.a
q=this.r.f
p=p.x2
p.toString
k=q.a
i=q.b
q=q.c
C.b.q(p.a,p.d,k,i,q)
break}switch(s.c){case C.c:break
case C.i:q=this.a
p=this.x.f
q=q.an
q.toString
k=p.a
i=p.b
p=p.c
C.b.q(q.a,q.d,k,i,p)
break
case C.f:this.N(n,this.x.d)
q=this.a
p=this.x.d
q.ac(q.bt,q.bu,p)
p=this.a
q=this.x.f
p=p.an
p.toString
k=q.a
i=q.b
q=q.c
C.b.q(p.a,p.d,k,i,q)
break
case C.e:this.N(n,this.x.e)
q=this.a
p=this.x.e
q.ag(q.dT,q.bu,p)
p=this.a
q=this.x.f
p=p.an
p.toString
k=q.a
i=q.b
q=q.c
C.b.q(p.a,p.d,k,i,q)
break}switch(s.d){case C.c:break
case C.i:q=this.a
p=this.y.f
q=q.bv
q.toString
k=p.a
i=p.b
p=p.c
C.b.q(q.a,q.d,k,i,p)
break
case C.f:this.N(n,this.y.d)
q=this.a
p=this.y.d
q.ac(q.dU,q.bw,p)
p=this.a
q=this.y.f
p=p.bv
p.toString
k=q.a
i=q.b
q=q.c
C.b.q(p.a,p.d,k,i,q)
break
case C.e:this.N(n,this.y.e)
q=this.a
p=this.y.e
q.ag(q.dV,q.bw,p)
p=this.a
q=this.y.f
p=p.bv
p.toString
k=q.a
i=q.b
q=q.c
C.b.q(p.a,p.d,k,i,q)
break}switch(s.e){case C.c:break
case C.i:q=this.a
p=this.z.f
q=q.bx
q.toString
k=p.a
i=p.b
p=p.c
C.b.q(q.a,q.d,k,i,p)
p=this.a
i=this.z.ch
p=p.bz
C.b.L(p.a,p.d,i)
break
case C.f:this.N(n,this.z.d)
q=this.a
p=this.z.d
q.ac(q.dW,q.by,p)
p=this.a
q=this.z.f
p=p.bx
p.toString
k=q.a
i=q.b
q=q.c
C.b.q(p.a,p.d,k,i,q)
q=this.a
i=this.z.ch
q=q.bz
C.b.L(q.a,q.d,i)
break
case C.e:this.N(n,this.z.e)
q=this.a
p=this.z.e
q.ag(q.dX,q.by,p)
p=this.a
q=this.z.f
p=p.bx
p.toString
k=q.a
i=q.b
q=q.c
C.b.q(p.a,p.d,k,i,q)
q=this.a
i=this.z.ch
q=q.bz
C.b.L(q.a,q.d,i)
break}if(s.z>0){m=this.dx.e.length
q=this.a.e7
C.b.D(q.a,q.d,m)
q=a2.db
h=q.gZ(q)
for(q=this.dx.e,p=q.length,g=0,f=0;f<q.length;q.length===p||(0,H.A)(q),++f){e=q[f]
k=this.a.cp
if(g>=k.length)return H.h(k,g)
d=k[g]
k=h.cM(e.a)
i=k.a
c=k.b
b=k.c
b=k.w(0,Math.sqrt(i*i+c*c+b*b))
c=d.b
i=b.a
k=b.b
b=b.c
C.b.q(c.a,c.d,i,k,b)
b=e.c
k=d.c
C.b.q(k.a,k.d,b.a,b.b,b.c);++g}}if(s.Q>0){m=this.dx.f.length
q=this.a.e8
C.b.D(q.a,q.d,m)
q=a2.db
h=q.gZ(q)
for(q=this.dx.f,p=q.length,g=0,f=0;f<q.length;q.length===p||(0,H.A)(q),++f){e=q[f]
k=this.a.cq
if(g>=k.length)return H.h(k,g)
d=k[g]
k=e.gbc(e)
i=d.b
C.b.q(i.a,i.d,k.a,k.b,k.c)
k=h.bg(e.gbc(e))
i=d.c
C.b.q(i.a,i.d,k.a,k.b,k.c)
k=e.gas(e)
i=d.d
C.b.q(i.a,i.d,k.a,k.b,k.c)
k=e.gcd()
i=d.e
C.b.L(i.a,i.d,k)
k=e.gce()
i=d.f
C.b.L(i.a,i.d,k)
k=e.gcf()
i=d.r
C.b.L(i.a,i.d,k);++g}}if(s.ch>0){m=this.dx.r.length
q=this.a.e9
C.b.D(q.a,q.d,m)
q=a2.db
h=q.gZ(q)
for(q=this.dx.r,p=q.length,g=0,f=0;f<q.length;q.length===p||(0,H.A)(q),++f){e=q[f]
k=this.a.cr
if(g>=k.length)return H.h(k,g)
d=k[g]
k=e.gbc(e)
i=d.b
C.b.q(i.a,i.d,k.a,k.b,k.c)
k=e.gcn(e).kq()
i=d.c
C.b.q(i.a,i.d,k.a,k.b,k.c)
k=h.bg(e.gbc(e))
i=d.d
C.b.q(i.a,i.d,k.a,k.b,k.c)
k=e.gas(e)
i=d.e
C.b.q(i.a,i.d,k.a,k.b,k.c)
k=e.gkp()
i=d.f
C.b.L(i.a,i.d,k)
k=e.gko()
i=d.r
C.b.L(i.a,i.d,k)
k=e.gcd()
i=d.x
C.b.L(i.a,i.d,k)
k=e.gce()
i=d.y
C.b.L(i.a,i.d,k)
k=e.gcf()
i=d.z
C.b.L(i.a,i.d,k);++g}}if(s.cx>0){m=this.dx.x.length
q=this.a.ea
C.b.D(q.a,q.d,m)
q=a2.db
h=q.gZ(q)
for(q=this.dx.x,p=q.length,k=[u],g=0,f=0;f<q.length;q.length===p||(0,H.A)(q),++f){e=q[f]
i=this.a.cs
if(g>=i.length)return H.h(i,g)
d=i[g]
i=e.gbe()
H.j(n,"$ib",k,"$ab")
if(!C.a.am(n,i)){i.see(0,n.length)
C.a.h(n,i)}i=e.gcn(e)
c=d.d
C.b.q(c.a,c.d,i.a,i.b,i.c)
i=e.gkh()
c=d.b
C.b.q(c.a,c.d,i.a,i.b,i.c)
i=e.gbK(e)
c=d.c
C.b.q(c.a,c.d,i.a,i.b,i.c)
i=h.cM(e.gcn(e))
c=i.a
b=i.b
a=i.c
a=i.w(0,Math.sqrt(c*c+b*b+a*a))
b=d.e
c=a.a
i=a.b
a=a.c
C.b.q(b.a,b.d,c,i,a)
a=e.gas(e)
i=d.f
C.b.q(i.a,i.d,a.a,a.b,a.c)
a=e.gbe()
i=a.geh(a)
if(!i){i=d.x
C.b.D(i.a,i.d,1)}else{i=d.r
c=a.d
b=i.a
i=i.d
if(!c)C.b.D(b,i,0)
else C.b.D(b,i,a.a)
i=d.x
C.b.D(i.a,i.d,0)}++g}}if(s.cy>0){m=this.dx.y.length
q=this.a.eb
C.b.D(q.a,q.d,m)
q=a2.db
h=q.gZ(q)
for(q=this.dx.y,p=q.length,k=[P.x],i=[u],g=0,f=0;f<q.length;q.length===p||(0,H.A)(q),++f){e=q[f]
c=this.a.ct
if(g>=c.length)return H.h(c,g)
d=c[g]
c=e.gbe()
H.j(n,"$ib",i,"$ab")
if(!C.a.am(n,c)){c.see(0,n.length)
C.a.h(n,c)}a0=h.v(0,e.gZ(e))
c=e.gZ(e)
b=$.cs
if(b==null){b=new V.a_(0,0,0)
$.cs=b}b=c.bg(b)
c=d.b
C.b.q(c.a,c.d,b.a,b.b,b.c)
c=$.cs
if(c==null){c=new V.a_(0,0,0)
$.cs=c}c=a0.bg(c)
b=d.c
C.b.q(b.a,b.d,c.a,c.b,c.c)
c=a0.cz(0)
b=d.d
j=new Float32Array(H.bW(H.j(new V.cl(c.a,c.b,c.c,c.e,c.f,c.r,c.y,c.z,c.Q).V(0,!0),"$ib",k,"$ab")))
C.b.ex(b.a,b.d,!1,j)
b=e.gas(e)
c=d.e
C.b.q(c.a,c.d,b.a,b.b,b.c)
b=e.gbe()
c=b.geh(b)
if(!c){c=d.r
C.b.D(c.a,c.d,1)}else{c=d.f
a=b.d
a1=c.a
c=c.d
if(a<6)C.b.D(a1,c,0)
else C.b.D(a1,c,b.a)
c=d.r
C.b.D(c.a,c.d,0)}c=e.gcd()
b=d.x
C.b.L(b.a,b.d,c)
c=e.gce()
b=d.y
C.b.L(b.a,b.d,c)
c=e.gcf()
b=d.z
C.b.L(b.a,b.d,c);++g}}if(s.db>0){m=this.dx.z.length
q=this.a.ec
C.b.D(q.a,q.d,m)
q=a2.db
h=q.gZ(q)
for(q=this.dx.z,p=q.length,u=[u],g=0,f=0;f<q.length;q.length===p||(0,H.A)(q),++f){e=q[f]
k=this.a.cu
if(g>=k.length)return H.h(k,g)
d=k[g]
k=e.gbe()
H.j(n,"$ib",u,"$ab")
if(!C.a.am(n,k)){k.see(0,n.length)
C.a.h(n,k)}k=e.gbc(e)
i=d.b
C.b.q(i.a,i.d,k.a,k.b,k.c)
k=e.gcn(e)
i=d.c
C.b.q(i.a,i.d,k.a,k.b,k.c)
k=e.gkh()
i=d.d
C.b.q(i.a,i.d,k.a,k.b,k.c)
k=e.gbK(e)
i=d.e
C.b.q(i.a,i.d,k.a,k.b,k.c)
k=h.bg(e.gbc(e))
i=d.f
C.b.q(i.a,i.d,k.a,k.b,k.c)
k=e.gbe()
i=k.geh(k)
if(!i){k=d.x
C.b.D(k.a,k.d,1)}else{i=d.r
c=k.d
b=i.a
i=i.d
if(!c)C.b.D(b,i,0)
else C.b.D(b,i,k.a)
k=d.x
C.b.D(k.a,k.d,0)}k=e.gas(e)
i=d.y
C.b.q(i.a,i.d,k.a,k.b,k.c)
k=e.gkr()
i=d.z
C.b.L(i.a,i.d,k)
k=e.gks()
i=d.Q
C.b.L(i.a,i.d,k)
k=e.gcd()
i=d.ch
C.b.L(i.a,i.d,k)
k=e.gce()
i=d.cx
C.b.L(i.a,i.d,k)
k=e.gcf()
i=d.cy
C.b.L(i.a,i.d,k);++g}}}switch(s.f){case C.c:break
case C.i:break
case C.f:this.N(n,this.Q.d)
u=this.a
q=this.Q.d
u.ac(u.dY,u.bA,q)
break
case C.e:this.N(n,this.Q.e)
u=this.a
q=this.Q.e
u.ag(u.dZ,u.bA,q)
break}if(s.fr){u=this.a
q=a2.Q
if(q==null){q=a2.db
q=q.gZ(q).cz(0)
a2.Q=q}u=u.id
u.toString
u.a_(q.V(0,!0))}if(s.dy){this.N(n,this.ch)
u=this.a
q=this.ch
u.ag(u.e_,u.e0,q)
switch(s.r){case C.c:break
case C.i:u=this.a
q=this.cx.f
u=u.bB
u.toString
p=q.a
k=q.b
q=q.c
C.b.q(u.a,u.d,p,k,q)
break
case C.f:this.N(n,this.cx.d)
u=this.a
q=this.cx.d
u.ac(u.e1,u.bC,q)
q=this.a
u=this.cx.f
q=q.bB
q.toString
p=u.a
k=u.b
u=u.c
C.b.q(q.a,q.d,p,k,u)
break
case C.e:this.N(n,this.cx.e)
u=this.a
q=this.cx.e
u.ag(u.e2,u.bC,q)
q=this.a
u=this.cx.f
q=q.bB
q.toString
p=u.a
k=u.b
u=u.c
C.b.q(q.a,q.d,p,k,u)
break}switch(s.x){case C.c:break
case C.i:u=this.a
q=this.cy.f
u=u.bE
u.toString
p=q.a
k=q.b
q=q.c
C.b.q(u.a,u.d,p,k,q)
q=this.a
k=this.cy.ch
q=q.bD
C.b.L(q.a,q.d,k)
break
case C.f:this.N(n,this.cy.d)
u=this.a
q=this.cy.d
u.ac(u.e3,u.bF,q)
q=this.a
u=this.cy.f
q=q.bE
q.toString
p=u.a
k=u.b
u=u.c
C.b.q(q.a,q.d,p,k,u)
u=this.a
k=this.cy.ch
u=u.bD
C.b.L(u.a,u.d,k)
break
case C.e:this.N(n,this.cy.e)
u=this.a
q=this.cy.e
u.ag(u.e4,u.bF,q)
q=this.a
u=this.cy.f
q=q.bE
q.toString
p=u.a
k=u.b
u=u.c
C.b.q(q.a,q.d,p,k,u)
u=this.a
k=this.cy.ch
u=u.bD
C.b.L(u.a,u.d,k)
break}}u=s.y
q=u!==C.c
if(q){switch(u){case C.c:break
case C.i:u=this.a
p=this.db.f
u=u.bG
C.b.L(u.a,u.d,p)
break
case C.f:this.N(n,this.db.d)
u=this.a
p=this.db.d
u.ac(u.e5,u.bH,p)
p=this.a
u=this.db.f
p=p.bG
C.b.L(p.a,p.d,u)
break
case C.e:this.N(n,this.db.e)
u=this.a
p=this.db.e
u.ag(u.e6,u.bH,p)
p=this.a
u=this.db.f
p=p.bG
C.b.L(p.a,p.d,u)
break}u=a2.a
C.b.b6(u,3042)
C.b.j8(u,770,771)}for(l=0;l<n.length;++l)n[l].J(a2)
u=a3.e
u.J(a2)
u.a8(a2)
u.a4(a2)
if(q)C.b.jk(a2.a,3042)
for(l=0;l<n.length;++l)n[l].a4(a2)
u=this.a
u.toString
C.b.aU(a2.a,null)
u.x.b3()},
i:function(a){var u=this.a
if(u!=null)return u.b
else return this.d5().an},
sfk:function(a){this.e=H.j(a,"$iS",[V.aa],"$aS")}}
O.h2.prototype={}
O.dx.prototype={
aM:function(){}}
O.h3.prototype={}
O.aX.prototype={
dt:function(a){var u,t
if(!J.K(this.f,a)){u=this.f
this.f=a
t=new D.B(this.b+".color",u,a,this,[V.X])
t.b=!0
this.a.H(t)}},
aM:function(){this.eU()
this.dt(new V.X(1,1,1))},
sas:function(a,b){var u
if(this.c===C.c){this.c=C.i
this.aM()
u=this.a
u.a=null
u.H(null)}this.dt(b)}}
O.h5.prototype={
ia:function(a){var u=this.ch
if(!(Math.abs(u-a)<$.N().a)){this.ch=a
u=new D.B(this.b+".refraction",u,a,this,[P.x])
u.b=!0
this.a.H(u)}},
aM:function(){this.bQ()
this.ia(1)}}
O.h6.prototype={
c6:function(a){var u=this.ch
if(!(Math.abs(u-a)<$.N().a)){this.ch=a
u=new D.B(this.b+".shininess",u,a,this,[P.x])
u.b=!0
this.a.H(u)}},
aM:function(){this.bQ()
this.c6(100)}}
O.dB.prototype={
gm:function(){var u=this.r
if(u==null){u=D.E()
this.r=u}return u},
H:function(a){var u
H.k(a,"$iv")
u=this.r
if(u!=null)u.A(a)},
Y:function(){return this.H(null)},
dr:function(a){},
ds:function(a){var u,t
u=this.f
if(u!=a){if(u!=null)u.gm().G(0,this.gaf())
t=this.f
this.f=a
if(a!=null)a.gm().h(0,this.gaf())
u=new D.B("bumpyTextureCube",t,this.f,this,[T.cA])
u.b=!0
this.H(u)}},
N:function(a,b){H.j(a,"$ib",[T.aG],"$ab")
if(b!=null)if(!C.a.am(a,b)){b.a=a.length
C.a.h(a,b)}},
aa:function(a,b){},
bd:function(a,b){var u,t,s,r,q,p,o,n,m,l,k,j
u=this.a
if(u==null){t=A.kq(this.d)
u=t.e
s=H.k(a.fr.j(0,u),"$idC")
if(s==null){r=a.a
s=new A.dC(r,u)
s.aV(r,u)
s.z=t
u=t.c
q=u?"uniform mat4 viewObjMat;\nuniform mat4 projViewObjMat;\nuniform mat3 txt2DMat;\n":"uniform mat4 viewObjMat;\nuniform mat4 projViewObjMat;\n"
p=t.d
q=(p?q+"uniform mat4 txtCubeMat;\n":q)+"\nattribute vec3 posAttr;\nattribute vec3 normAttr;\n"
o=t.b
if(o)q+="attribute vec3 binmAttr;\n"
if(u)q+="attribute vec2 txt2DAttr;\n"
q=(p?q+"attribute vec3 txtCubeAttr;\n":q)+"\nvarying vec3 normalVec;\n"
if(o)q+="varying vec3 binormalVec;\n"
if(u)q+="varying vec2 txt2D;\n"
q=(p?q+"varying vec3 txtCube;\n":q)+"\nvoid main()\n{\n   normalVec = normalize(viewObjMat*vec4(normAttr, 0.0)).xyz;\n"
if(o)q+="   binormalVec = normalize(viewObjMat*vec4(binmAttr, 0.0)).xyz;\n"
if(u)q+="   txt2D = (txt2DMat*vec3(txt2DAttr, 1.0)).xy;\n"
q=(p?q+"   txtCube = (txtCubeMat*vec4(txtCubeAttr, 1.0)).xyz;\n":q)+"   gl_Position = projViewObjMat*vec4(posAttr, 1.0);\n}\n"
o=o?"precision mediump float;\n\nvarying vec3 normalVec;\nvarying vec3 binormalVec;\n":"precision mediump float;\n\nvarying vec3 normalVec;\n"
if(u)o+="varying vec2 txt2D;\n"
o=(p?o+"varying vec3 txtCube;\n":o)+"\n"
n=t.a
switch(n){case C.c:break
case C.i:break
case C.f:o+="uniform sampler2D bumpTxt;\nuniform int nullBumpTxt;\n"
break
case C.e:o+="uniform samplerCube bumpTxt;\nuniform int nullBumpTxt;\n"
break}o+="\nvec3 normal()\n{\n"
if(n===C.c||n===C.i)o+="   return normalize(normalVec);\n"
else{o+="   if(nullBumpTxt > 0) return normalVec;\n"
o=(n===C.f?o+"   vec3 color = texture2D(bumpTxt, txt2D).rgb;\n":o+"   vec3 color = textureCube(bumpTxt, txtCube).rgb;\n")+"   vec3 n = normalize(normalVec);\n   vec3 b = normalize(binormalVec);\n   vec3 c = normalize(cross(b, n));\n   b = cross(n, c);\n   mat3 mat = mat3( b.x,  b.y,  b.z,\n                   -c.x, -c.y, -c.z,\n                    n.x,  n.y,  n.z);\n   return mat * normalize(2.0*color - 1.0);\n"}o+="}\n\nvoid main()\n{\n   vec3 norm = normal();\n   norm = -norm*0.5 + 0.5;\n   gl_FragColor = vec4(norm.x, 1.0-norm.y, norm.z, 1.0);\n}\n"
s.b7(0,q.charCodeAt(0)==0?q:q,o.charCodeAt(0)==0?o:o)
s.Q=s.x.j(0,"posAttr")
s.cx=s.x.j(0,"normAttr")
s.ch=s.x.j(0,"binmAttr")
s.cy=s.x.j(0,"txt2DAttr")
s.db=s.x.j(0,"txtCubeAttr")
s.dx=H.c(s.y.l(0,"viewObjMat"),"$iY")
s.dy=H.c(s.y.l(0,"projViewObjMat"),"$iY")
if(u)s.fr=H.c(s.y.l(0,"txt2DMat"),"$ibl")
if(p)s.fx=H.c(s.y.l(0,"txtCubeMat"),"$iY")
switch(n){case C.c:break
case C.i:break
case C.f:s.fy=H.c(s.y.l(0,"bumpTxt"),"$ia0")
s.id=H.c(s.y.l(0,"nullBumpTxt"),"$iC")
break
case C.e:s.go=H.c(s.y.l(0,"bumpTxt"),"$iae")
s.id=H.c(s.y.l(0,"nullBumpTxt"),"$iC")
break}a.b_(s)}this.a=s
b.e=null
u=s}t=u.z
m=t.f
u=b.e
if(!(u instanceof Z.bb)){b.e=null
u=null}if(u==null||!u.d.t(0,m)){b.d.al()
u=t.b
if(u)b.d.aQ()
q=t.d
if(q)b.d.bs()
l=b.d.b1(new Z.bD(a.a),m)
l.a2($.ag()).e=this.a.Q.c
l.a2($.aL()).e=this.a.cx.c
if(u)l.a2($.aK()).e=this.a.ch.c
if(t.c)l.a2($.av()).e=this.a.cy.c
if(q)l.a2($.aM()).e=this.a.db.c
b.e=l}k=H.d([],[T.aG])
this.a.J(a)
u=this.a
q=a.gey()
u=u.dx
u.toString
u.a_(q.V(0,!0))
q=this.a
u=a.gcG()
q=q.dy
q.toString
q.a_(u.V(0,!0))
if(t.c){u=this.a
q=this.b
u=u.fr
u.toString
u.a_(q.V(0,!0))}if(t.d){u=this.a
q=this.c
u=u.fx
u.toString
u.a_(q.V(0,!0))}switch(t.a){case C.c:break
case C.i:break
case C.f:this.N(k,this.e)
u=this.a.id
C.b.D(u.a,u.d,1)
break
case C.e:this.N(k,this.f)
u=this.a
q=this.f
p=u.go
u=u.id
if(q==null||q.d<6)C.b.D(u.a,u.d,1)
else{p.cQ(q)
C.b.D(u.a,u.d,0)}break}for(j=0;j<k.length;++j)k[j].J(a)
u=b.e
u.J(a)
u.a8(a)
u.a4(a)
for(u=a.a,j=0;j<k.length;++j){q=k[j]
if(q.c){q.c=!1
C.b.aP(u,33984+q.a)
C.b.a7(u,34067,null)}}q=this.a
q.toString
C.b.aU(u,null)
q.x.b3()},
i:function(a){var u=this.a
if(u!=null)return u.b
else return A.kq(this.d).e}}
O.dL.prototype={
gm:function(){var u=this.e
if(u==null){u=D.E()
this.e=u}return u},
H:function(a){var u
H.k(a,"$iv")
u=this.e
if(u!=null)u.A(a)},
Y:function(){return this.H(null)},
aa:function(a,b){},
bd:function(a,b){var u,t,s,r,q,p
if(this.a==null){u=H.k(a.fr.j(0,"Skybox"),"$idM")
if(u==null){t=a.a
u=new A.dM(t,"Skybox")
u.aV(t,"Skybox")
u.b7(0,$.mb,$.ma)
u.z=u.x.j(0,"posAttr")
u.Q=H.c(u.y.j(0,"fov"),"$iU")
u.ch=H.c(u.y.j(0,"ratio"),"$iU")
u.cx=H.c(u.y.j(0,"boxClr"),"$iG")
u.cy=H.c(u.y.j(0,"boxTxt"),"$iae")
u.db=H.c(u.y.j(0,"viewMat"),"$iY")
a.b_(u)}this.a=u}if(b.e==null){t=b.d.b1(new Z.bD(a.a),$.ag())
t.a2($.ag()).e=this.a.z.c
b.e=t}t=this.c
if(t!=null){t.a=1
t.J(a)}t=a.d
s=a.c
r=this.a
r.J(a)
q=this.b
p=r.Q
C.b.L(p.a,p.d,q)
q=r.ch
C.b.L(q.a,q.d,t/s)
s=this.c
r.cy.cQ(s)
s=this.d
t=r.cx
C.b.q(t.a,t.d,s.a,s.b,s.c)
s=a.db
s=s.gZ(s).cz(0)
r=r.db
r.toString
r.a_(s.V(0,!0))
t=b.e
if(t instanceof Z.bb){t.J(a)
t.a8(a)
t.a4(a)}else b.e=null
t=this.a
t.toString
C.b.aU(a.a,null)
t.x.b3()
t=this.c
if(t!=null)t.a4(a)}}
O.bB.prototype={}
O.dS.prototype={
gm:function(){var u=this.e
if(u==null){u=D.E()
this.e=u}return u},
H:function(a){var u
H.k(a,"$iv")
u=this.e
if(u!=null)u.A(a)},
Y:function(){return this.H(null)},
hp:function(a,b){var u,t,s,r,q,p,o
H.j(b,"$ie",[O.aH],"$ae")
for(u=b.length,t=this.gaf(),s={func:1,ret:-1,args:[D.v]},r=[s],q=0;q<b.length;b.length===u||(0,H.A)(b),++q){p=b[q]
if(p!=null){o=p.f
if(o==null){o=new D.br()
o.sab(null)
o.saN(null)
o.c=null
o.d=0
p.f=o}H.l(t,s)
if(o.a==null)o.sab(H.d([],r))
o=o.a;(o&&C.a).h(o,t)}}this.Y()},
hr:function(a,b){var u,t
H.j(b,"$ie",[O.aH],"$ae")
for(u=b.gU(b),t=this.gaf();u.C();)u.gM(u).gm().G(0,t)
this.Y()},
aa:function(a,b){},
bd:function(a,b){var u,t,s,r,q,p,o,n,m,l,k,j,i,h
u=C.h.a5(this.c.a.length+3,4)*4
if(u!==this.d){this.d=u
this.b=null}t=this.b
if(t==null){t="TextureLayout_"+u
s=H.k(a.fr.j(0,t),"$idT")
if(s==null){s=A.md(u,a.a)
a.b_(s)}this.b=s
t=s}if(b.e==null){t=b.d.b1(new Z.bD(a.a),$.ag())
r=t.a2($.ag())
q=this.b
r.e=q.z.c
b.e=t
t=q}t.J(a)
t=T.aG
p=H.d([],[t])
for(r=[P.x],t=[t],o=0,n=0;q=this.c.a,n<q.length;++n){m=q[n]
if(m!=null&&m.a!=null){q=m.a
H.j(p,"$ib",t,"$ab")
if(q!=null)if(!C.a.am(p,q)){q.a=p.length
C.a.h(p,q)}q=this.b
l=m.a
q=q.cx
if(o>=q.length)return H.h(q,o)
q=q[o]
k=l==null||!l.d
j=q.a
q=q.d
if(k)C.b.D(j,q,0)
else C.b.D(j,q,l.a)
q=this.b
l=m.b
q=q.cy
if(o>=q.length)return H.h(q,o)
q=q[o]
if(l==null){l=$.h7
if(l==null){l=new V.aa(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1)
$.h7=l}}i=new Float32Array(H.bW(H.j(l.V(0,!0),"$ib",r,"$ab")))
C.b.cN(q.a,q.d,!1,i)
q=this.b
h=m.c
q.toString
if(h==null){l=$.cv
if(l==null){l=V.cu(0,0,1,1)
$.cv=l
h=l}else h=l}l=q.db
if(o>=l.length)return H.h(l,o)
l=l[o]
C.b.bM(l.a,l.d,h.a,h.b)
q=q.dx
if(o>=q.length)return H.h(q,o)
q=q[o]
C.b.bM(q.a,q.d,h.c,h.d)
q=this.b
h=m.d
q.toString
if(h==null){l=$.cv
if(l==null){l=V.cu(0,0,1,1)
$.cv=l
h=l}else h=l}l=q.dy
if(o>=l.length)return H.h(l,o)
l=l[o]
C.b.bM(l.a,l.d,h.a,h.b)
q=q.fr
if(o>=q.length)return H.h(q,o)
q=q[o]
C.b.bM(q.a,q.d,h.c,h.d)
q=this.b
l=m.e
q=q.fx
if(o>=q.length)return H.h(q,o)
q=q[o]
l=l?1:0
C.b.D(q.a,q.d,l);++o}}t=this.b.Q
C.b.D(t.a,t.d,o)
t=this.b
r=this.a
t=t.ch
t.toString
q=r.a
l=r.b
k=r.c
r=r.d
C.b.kg(t.a,t.d,q,l,k,r)
for(n=0;n<p.length;++n)p[n].J(a)
t=b.e
if(t instanceof Z.bb){t.J(a)
t.a8(a)
t.a4(a)}else b.e=null
t=this.b
t.toString
r=a.a
C.b.aU(r,null)
t.x.b3()
for(n=0;n<p.length;++n){t=p[n]
if(t.c){t.c=!1
C.b.aP(r,33984+t.a)
C.b.a7(r,3553,null)}}},
sfC:function(a){this.c=H.j(a,"$iS",[O.aH],"$aS")}}
O.aH.prototype={
gm:function(){var u=this.f
if(u==null){u=D.E()
this.f=u}return u},
H:function(a){var u
H.k(a,"$iv")
u=this.f
if(u!=null)u.A(a)},
Y:function(){return this.H(null)}}
T.aG.prototype={}
T.dR.prototype={}
T.i_.prototype={
gm:function(){var u=this.y
if(u==null){u=D.E()
this.y=u}return u},
J:function(a){var u
if(!this.c&&this.d){this.c=!0
u=a.a
C.b.aP(u,33984+this.a)
C.b.a7(u,3553,this.b)}}}
T.cA.prototype={
gm:function(){var u=this.e
if(u==null){u=D.E()
this.e=u}return u},
J:function(a){var u
if(!this.c&&this.d>=6){this.c=!0
u=a.a
C.b.aP(u,33984+this.a)
C.b.a7(u,34067,this.b)}},
a4:function(a){var u
if(this.c){this.c=!1
u=a.a
C.b.aP(u,33984+this.a)
C.b.a7(u,34067,null)}}}
T.i0.prototype={
eg:function(a,b,c,d){var u,t,s,r,q,p,o,n,m
u=a+"/"+d+"posx"+b
t=a+"/"+d+"posy"+b
s=a+"/"+d+"posz"+b
r=a+"/"+d+"negx"+b
q=a+"/"+d+"negy"+b
p=a+"/"+d+"negz"+b
o=this.a
n=o.createTexture()
C.b.a7(o,34067,n)
C.b.ax(o,34067,10242,10497)
C.b.ax(o,34067,10243,10497)
C.b.ax(o,34067,10241,9729)
C.b.ax(o,34067,10240,9729)
C.b.a7(o,34067,null)
m=new T.cA()
m.a=0
m.b=n
m.c=!1
m.d=0
this.aL(m,n,u,34069,!1,!1)
this.aL(m,n,r,34070,!1,!1)
this.aL(m,n,t,34071,!1,!1)
this.aL(m,n,q,34072,!1,!1)
this.aL(m,n,s,34073,!1,!1)
this.aL(m,n,p,34074,!1,!1)
return m},
jC:function(a){return this.eg(a,".png",!1,"")},
jD:function(a,b){return this.eg(a,b,!1,"")},
aL:function(a,b,c,d,e,f){var u,t
u=document.createElement("img")
u.src=c;++this.d
t=W.m
W.a9(u,"load",H.l(new T.i1(this,u,!1,b,!1,d,a),{func:1,ret:-1,args:[t]}),!1,t)},
i8:function(a,b,c){var u,t,s,r
b=V.cZ(b,2)
u=V.cZ(a.width,2)
t=V.cZ(a.height,2)
u=Math.min(u,b)
t=Math.min(t,b)
if(a.width===u&&a.height===t)return a
else{s=W.jB(null,null)
s.width=u
s.height=t
r=H.k(C.m.eF(s,"2d"),"$ibM")
r.imageSmoothingEnabled=!1;(r&&C.r).jm(r,a,0,0,s.width,s.height)
return P.mE(C.r.fN(r,0,0,s.width,s.height))}}}
T.i1.prototype={
$1:function(a){var u,t,s
u=this.a
t=u.i8(this.b,u.c,this.c)
s=u.a
C.b.a7(s,34067,this.d)
C.b.jV(s,37440,this.e?1:0)
C.b.k9(s,this.f,0,6408,6408,5121,t)
C.b.a7(s,34067,null)
s=this.r
if(++s.d>=6){s=s.e
if(s!=null)s.co()}++u.e},
$S:25}
V.f3.prototype={
aS:function(a,b){return!0},
i:function(a){return"all"},
$ibf:1}
V.bf.prototype={}
V.du.prototype={
aS:function(a,b){var u,t,s
for(u=this.a,t=u.length,s=0;s<u.length;u.length===t||(0,H.A)(u),++s)if(u[s].aS(0,b))return!0
return!1},
i:function(a){var u,t,s,r,q
for(u=this.a,t=u.length,s="",r=0;r<u.length;u.length===t||(0,H.A)(u),++r){q=u[r]
if(s.length!==0)s+=", "
s+=q.i(0)}return s},
saC:function(a){this.a=H.j(a,"$ib",[V.bf],"$ab")},
$ibf:1}
V.bh.prototype={
aS:function(a,b){return!this.eT(0,b)},
i:function(a){return"!["+this.cU(0)+"]"}}
V.hE.prototype={
eY:function(a){var u,t
if(a.a.length<=0)throw H.i(P.r("May not create a SetMatcher with zero characters."))
u=new H.aV([P.y,P.a4])
for(t=new H.ds(a,a.gk(a),0,[H.aA(a,"u",0)]);t.C();)u.a9(0,t.d,!0)
this.si9(u)},
aS:function(a,b){return this.a.dN(0,b)},
i:function(a){var u=this.a
return P.jP(new H.dr(u,[H.w(u,0)]),0,null)},
si9:function(a){this.a=H.j(a,"$iO",[P.y,P.a4],"$aO")},
$ibf:1}
V.cx.prototype={
F:function(a,b){var u,t,s,r
for(u=this.c,t=u.length,s=0;s<t;++s){r=u[s]
if(r.b.b===b)return r}r=new V.cC(this.a.P(0,b))
r.saC(H.d([],[V.bf]))
r.c=!1
C.a.h(this.c,r)
return r},
jq:function(a){var u,t,s,r
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.A)(u),++s){r=u[s]
if(r.aS(0,a))return r}return},
i:function(a){return this.b},
siz:function(a){this.c=H.j(a,"$ib",[V.cC],"$ab")}}
V.dY.prototype={
i:function(a){var u,t
u=H.lc(this.b,"\n","\\n")
t=H.lc(u,"\t","\\t")
return this.a+":"+this.c+':"'+t+'"'}}
V.cB.prototype={
i:function(a){return this.b},
si4:function(a){var u=P.o
this.c=H.j(a,"$iO",[u,u],"$aO")}}
V.i4.prototype={
P:function(a,b){var u=this.a.j(0,b)
if(u==null){u=new V.cx(this,b)
u.siz(H.d([],[V.cC]))
u.d=null
this.a.a9(0,b,u)}return u},
bf:function(a){var u,t
u=this.b.j(0,a)
if(u==null){u=new V.cB(this,a)
t=P.o
u.si4(new H.aV([t,t]))
this.b.a9(0,a,u)}return u},
kf:function(a){var u,t,s,r,q,p,o,n,m,l,k,j
u=H.d([],[V.dY])
t=this.c
s=[P.y]
r=H.d([],s)
for(q=a.length,p=null,o=0;!0;){if(o>=q){if(p!=null)C.a.h(u,p)
return u}n=C.j.bm(a,o)
m=t.jq(n)
if(m==null){if(p==null){C.a.h(r,n)
l=P.jP(r,0,null)
throw H.i(P.r("Untokenizable string [state: "+t.b+", index "+o+']: "'+l+'"'))}C.a.h(u,p)
o=p.c+1
r=H.d([],s)
t=this.c
p=null}else{if(!m.c)C.a.h(r,n)
t=m.b
if(t.d!=null){l=P.jP(r,0,null)
k=t.d
j=k.c.j(0,l)
p=new V.dY(j==null?k.b:j,l,o)}++o}}},
sim:function(a){this.a=H.j(a,"$iO",[P.o,V.cx],"$aO")},
sis:function(a){this.b=H.j(a,"$iO",[P.o,V.cB],"$aO")}}
V.cC.prototype={
i:function(a){return this.b.b+": "+this.cU(0)}}
X.fb.prototype={
gm:function(){var u=this.fr
if(u==null){u=D.E()
this.fr=u}return u},
ae:function(a){var u=this.fr
if(u!=null)u.A(a)},
sak:function(a,b){var u
if(b<1)b=1
u=this.a
if(u!==b){this.y=null
this.a=b
this.c=b
u=new D.B("width",u,b,this,[P.y])
u.b=!0
this.ae(u)}},
sah:function(a,b){var u
if(b<1)b=1
u=this.b
if(u!==b){this.y=null
this.b=b
this.d=b
u=new D.B("height",u,b,this,[P.y])
u.b=!0
this.ae(u)}},
J:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i
if(this.f){u=a.a
t=u.drawingBufferWidth
s=this.r
if(typeof t!=="number")return t.v()
this.sak(0,C.h.a0(t*s))
u=u.drawingBufferHeight
s=this.x
if(typeof u!=="number")return u.v()
this.sah(0,C.h.a0(u*s))}if(this.y==null){u=a.a
t=this.ch
s=this.a
r=this.b
q=H.af(C.b.bN(u,3379))
p=V.cZ(s,2)
o=V.cZ(r,2)
q=V.cZ(q,2)
p=Math.min(p,q)
o=Math.min(o,q)
n=u.createTexture()
C.b.a7(u,3553,n)
C.b.ax(u,3553,10242,33071)
C.b.ax(u,3553,10243,33071)
C.b.ax(u,3553,10241,9729)
C.b.ax(u,3553,10240,9729)
C.b.eu(u,3553,0,6408,p,o,0,6408,5121,null)
C.b.a7(u,3553,null)
m=T.kB(0,n)
m.e=s
m.f=r
m.r=p
m.x=o
if(!m.d){m.d=!0
s=m.y
if(s!=null)s.co()}t.b=m.b
t.c=m.c
t.d=m.d
t.e=m.e
t.f=m.f
t.r=m.r
t.x=m.x
t=t.y
if(t!=null)t.co()
t=this.ch
s=t.b
this.z=s
this.c=t.r
this.d=t.x
C.b.a7(u,3553,s)
t=u.createRenderbuffer()
this.Q=t
C.b.dB(u,36161,t)
C.b.k_(u,36161,33189,this.c,this.d)
t=u.createFramebuffer()
this.y=t
C.b.b0(u,36160,t)
C.b.jv(u,36160,36064,3553,this.z,0)
C.b.ju(u,36160,36096,36161,this.Q)
C.b.a7(u,3553,null)
C.b.dB(u,36161,null)
C.b.b0(u,36160,null)}u=a.a
C.b.b0(u,36160,this.y)
C.b.b6(u,2884)
C.b.b6(u,2929)
C.b.dQ(u,513)
t=this.dy
s=t.c
a.c=C.d.a0(s*this.a)
r=t.d
a.d=C.d.a0(r*this.b)
l=t.a
k=this.c
j=C.d.a0(l*k)
t=t.b
l=this.d
C.b.ez(u,j,C.d.a0(t*l),C.d.a0(s*k),C.d.a0(r*l))
C.b.dK(u,this.db)
if(this.cy){t=this.cx
C.b.dJ(u,t.a,t.b,t.c,t.d)
i=16640}else i=256
if(i>0)C.b.dI(u,i)},
a4:function(a){C.b.b0(a.a,36160,null)}}
X.bK.prototype={$ib_:1}
X.fJ.prototype={
gm:function(){var u=this.x
if(u==null){u=D.E()
this.x=u}return u},
J:function(a){var u,t,s,r,q,p,o,n
u=a.a
C.b.b0(u,36160,null)
C.b.b6(u,2884)
C.b.b6(u,2929)
C.b.dQ(u,513)
t=u.drawingBufferWidth
s=u.drawingBufferHeight
r=this.r
q=r.a
if(typeof t!=="number")return H.L(t)
p=C.d.a0(q*t)
q=r.b
if(typeof s!=="number")return H.L(s)
o=C.d.a0(q*s)
q=C.d.a0(r.c*t)
a.c=q
r=C.d.a0(r.d*s)
a.d=r
C.b.ez(u,p,o,q,r)
C.b.dK(u,this.c)
if(this.b){r=this.a
C.b.dJ(u,r.a,r.b,r.c,r.d)
n=16640}else n=256
C.b.dI(u,n)},
a4:function(a){}}
X.fL.prototype={
gm:function(){var u=this.b
if(u==null){u=D.E()
this.b=u}return u},
J:function(a){var u
a.cy.bJ(V.aY())
u=V.aY()
a.db.bJ(u)},
a4:function(a){a.cy.aG()
a.db.aG()},
$ib_:1,
$ibK:1}
X.dE.prototype={
gm:function(){var u=this.f
if(u==null){u=D.E()
this.f=u}return u},
ae:function(a){var u
H.k(a,"$iv")
u=this.f
if(u!=null)u.A(a)},
fe:function(){return this.ae(null)},
sb9:function(a){var u,t
if(!J.K(this.b,a)){u=this.b
if(u!=null)u.gm().G(0,this.gcY())
t=this.b
this.b=a
if(a!=null)a.gm().h(0,this.gcY())
u=new D.B("mover",t,this.b,this,[U.ac])
u.b=!0
this.ae(u)}},
J:function(a){var u,t,s,r,q,p,o,n,m,l
u=a.c
t=a.d
s=this.c
r=this.d
q=this.e
p=q-r
o=1/Math.tan(s*0.5)
n=V.bg(-o/(u/t),0,0,0,0,o,0,0,0,0,q/p,-q*r/p,0,0,1,0)
a.cy.bJ(n)
u=$.ku
if(u==null){u=V.kw()
t=V.kP()
s=$.kL
if(s==null){s=new V.H(0,0,-1)
$.kL=s}s=V.kn(u,t,s)
$.ku=s
m=s}else m=u
u=this.b
if(u!=null){l=u.aT(0,a,this)
if(l!=null)m=l.v(0,m)}a.db.bJ(m)},
a4:function(a){a.cy.aG()
a.db.aG()},
$ib_:1,
$ibK:1}
X.cz.prototype={}
V.jw.prototype={
$1:function(a){H.k(a,"$ib5")
P.ar(C.d.ew(this.a.gjt(),2)+" fps")},
$S:38}
V.hI.prototype={
eZ:function(a,b){var u,t,s,r,q,p,o
u=document
t=u.body
s=u.createElement("div")
s.className="scrollTop";(t&&C.q).a6(t,s)
r=u.createElement("div")
r.className="scrollPage"
C.q.a6(t,r)
q=u.createElement("div")
q.className="pageCenter"
C.l.a6(r,q)
if(a.length!==0){u.title=a
p=u.createElement("div")
p.className="pageTitle"
p.textContent=a
C.l.a6(q,p)}o=u.createElement("div")
this.a=o
C.l.a6(q,o)
this.b=null
o=W.m
W.a9(u,"scroll",H.l(new V.hK(s),{func:1,ret:-1,args:[o]}),!1,o)},
dz:function(a){var u,t,s,r,q,p,o,n,m,l,k
H.j(a,"$ib",[P.o],"$ab")
this.ie()
u=document
t=u.createElement("div")
t.className="textPar"
for(s=this.b.kf(C.a.jz(a)),r=s.length,q=0;q<s.length;s.length===r||(0,H.A)(s),++q){p=s[q]
switch(p.a){case"Bold":o=u.createElement("div")
o.className="boldPar"
o.textContent=p.b
C.l.a6(t,o)
break
case"Italic":o=u.createElement("div")
o.className="italicPar"
o.textContent=p.b
C.l.a6(t,o)
break
case"Code":o=u.createElement("div")
o.className="codePar"
o.textContent=p.b
C.l.a6(t,o)
break
case"Link":n=p.b
if(H.n0(n,"|",0)){m=n.split("|")
l=u.createElement("a")
l.className="linkPar"
if(1>=m.length)return H.h(m,1)
l.href=H.R(m[1])
l.textContent=H.R(m[0])
C.l.a6(t,l)}else{k=P.mp(C.M,n,C.w,!1)
l=u.createElement("a")
l.className="linkPar"
l.href="#"+k
l.textContent=n
C.l.a6(t,l)}break
case"Other":o=u.createElement("div")
o.className="normalPar"
o.textContent=p.b
C.l.a6(t,o)
break}}C.l.a6(this.a,t)},
ie:function(){var u,t,s,r
if(this.b!=null)return
u=new V.i4()
t=P.o
u.sim(new H.aV([t,V.cx]))
u.sis(new H.aV([t,V.cB]))
u.c=null
u.c=u.P(0,"Start")
t=u.P(0,"Start").F(0,"Bold")
s=V.ai(new H.a5("*"))
C.a.h(t.a,s)
t.c=!0
t=u.P(0,"Bold").F(0,"Bold")
s=new V.bh()
r=[V.bf]
s.saC(H.d([],r))
C.a.h(t.a,s)
t=V.ai(new H.a5("*"))
C.a.h(s.a,t)
t=u.P(0,"Bold").F(0,"BoldEnd")
s=V.ai(new H.a5("*"))
C.a.h(t.a,s)
t.c=!0
t=u.P(0,"Start").F(0,"Italic")
s=V.ai(new H.a5("_"))
C.a.h(t.a,s)
t.c=!0
t=u.P(0,"Italic").F(0,"Italic")
s=new V.bh()
s.saC(H.d([],r))
C.a.h(t.a,s)
t=V.ai(new H.a5("_"))
C.a.h(s.a,t)
t=u.P(0,"Italic").F(0,"ItalicEnd")
s=V.ai(new H.a5("_"))
C.a.h(t.a,s)
t.c=!0
t=u.P(0,"Start").F(0,"Code")
s=V.ai(new H.a5("`"))
C.a.h(t.a,s)
t.c=!0
t=u.P(0,"Code").F(0,"Code")
s=new V.bh()
s.saC(H.d([],r))
C.a.h(t.a,s)
t=V.ai(new H.a5("`"))
C.a.h(s.a,t)
t=u.P(0,"Code").F(0,"CodeEnd")
s=V.ai(new H.a5("`"))
C.a.h(t.a,s)
t.c=!0
t=u.P(0,"Start").F(0,"LinkHead")
s=V.ai(new H.a5("["))
C.a.h(t.a,s)
t.c=!0
t=u.P(0,"LinkHead").F(0,"LinkTail")
s=V.ai(new H.a5("|"))
C.a.h(t.a,s)
s=u.P(0,"LinkHead").F(0,"LinkEnd")
t=V.ai(new H.a5("]"))
C.a.h(s.a,t)
s.c=!0
s=u.P(0,"LinkHead").F(0,"LinkHead")
t=new V.bh()
t.saC(H.d([],r))
C.a.h(s.a,t)
s=V.ai(new H.a5("|]"))
C.a.h(t.a,s)
s=u.P(0,"LinkTail").F(0,"LinkEnd")
t=V.ai(new H.a5("]"))
C.a.h(s.a,t)
s.c=!0
s=u.P(0,"LinkTail").F(0,"LinkTail")
t=new V.bh()
t.saC(H.d([],r))
C.a.h(s.a,t)
s=V.ai(new H.a5("|]"))
C.a.h(t.a,s)
C.a.h(u.P(0,"Start").F(0,"Other").a,new V.f3())
s=u.P(0,"Other").F(0,"Other")
t=new V.bh()
t.saC(H.d([],r))
C.a.h(s.a,t)
s=V.ai(new H.a5("*_`["))
C.a.h(t.a,s)
s=u.P(0,"BoldEnd")
s.d=s.a.bf("Bold")
s=u.P(0,"ItalicEnd")
s.d=s.a.bf("Italic")
s=u.P(0,"CodeEnd")
s.d=s.a.bf("Code")
s=u.P(0,"LinkEnd")
s.d=s.a.bf("Link")
s=u.P(0,"Other")
s.d=s.a.bf("Other")
this.b=u}}
V.hK.prototype={
$1:function(a){P.kE(C.n,new V.hJ(this.a))},
$S:25}
V.hJ.prototype={
$0:function(){var u,t,s
u=C.d.a0(document.documentElement.scrollTop)
t=this.a.style
s=H.n(-0.01*u)+"px"
t.top=s},
$S:1};(function aliases(){var u=J.a.prototype
u.eR=u.i
u=J.dn.prototype
u.eS=u.i
u=O.dx.prototype
u.eU=u.aM
u=O.aX.prototype
u.bQ=u.aM
u=V.du.prototype
u.eT=u.aS
u.cU=u.i})();(function installTearOffs(){var u=hunkHelpers._static_1,t=hunkHelpers._static_0,s=hunkHelpers.installInstanceTearOff,r=hunkHelpers._instance_2u,q=hunkHelpers._instance_0u,p=hunkHelpers._instance_1u,o=hunkHelpers._instance_0i
u(P,"my","mi",11)
u(P,"mz","mj",11)
u(P,"mA","mk",11)
t(P,"l2","mx",3)
var n
s(n=E.ak.prototype,"gep",0,0,null,["$1","$0"],["eq","jM"],0,0)
s(n,"gen",0,0,null,["$1","$0"],["eo","jL"],0,0)
s(n,"gel",0,0,null,["$1","$0"],["em","jI"],0,0)
r(n,"gjG","jH",7)
r(n,"gjJ","jK",7)
s(n=E.dX.prototype,"gcV",0,0,null,["$1","$0"],["cX","cW"],0,0)
q(n,"gk0","er",3)
p(n=X.e4.prototype,"ghs","ht",10)
p(n,"ghc","hd",10)
p(n,"ghi","hj",4)
p(n,"ghw","hx",17)
p(n,"ghu","hv",17)
p(n,"ghA","hB",4)
p(n,"ghE","hF",4)
p(n,"ghm","hn",4)
p(n,"ghC","hD",4)
p(n,"ghk","hl",4)
p(n,"ghG","hH",33)
p(n,"ghI","hJ",10)
p(n,"ghY","hZ",8)
p(n,"ghU","hV",8)
p(n,"ghW","hX",8)
s(D.bp.prototype,"gf2",0,0,null,["$1","$0"],["az","f3"],0,0)
s(n=D.dq.prototype,"gdh",0,0,null,["$1","$0"],["di","hy"],0,0)
p(n,"ghK","hL",34)
r(n,"gh6","h7",18)
r(n,"ghO","hP",18)
o(V.V.prototype,"gk","cB",19)
o(V.H.prototype,"gk","cB",19)
s(n=U.cj.prototype,"gbl",0,0,null,["$1","$0"],["T","ap"],0,0)
r(n,"gf4","f5",20)
r(n,"ghM","hN",20)
s(n=U.e5.prototype,"gbl",0,0,null,["$1","$0"],["T","ap"],0,0)
p(n,"gfZ","h_",2)
p(n,"gh0","h1",2)
p(n,"gh2","h3",2)
p(n,"gfV","fW",2)
p(n,"gfX","fY",2)
p(n,"gix","iy",2)
p(n,"giv","iw",2)
p(n,"git","iu",2)
p(U.e6.prototype,"gh4","h5",2)
s(n=M.d8.prototype,"gW",0,0,null,["$1","$0"],["X","aW"],0,0)
r(n,"ghQ","hR",21)
r(n,"ghS","hT",21)
s(M.db.prototype,"gW",0,0,null,["$1","$0"],["X","aW"],0,0)
s(n=M.dg.prototype,"gW",0,0,null,["$1","$0"],["X","aW"],0,0)
r(n,"ghe","hf",7)
r(n,"ghg","hh",7)
s(n=O.dv.prototype,"gaf",0,0,null,["$1","$0"],["H","Y"],0,0)
s(n,"gi6",0,0,null,["$1","$0"],["dn","i7"],0,0)
r(n,"gh8","h9",23)
r(n,"gha","hb",23)
s(O.dB.prototype,"gaf",0,0,null,["$1","$0"],["H","Y"],0,0)
s(O.dL.prototype,"gaf",0,0,null,["$1","$0"],["H","Y"],0,0)
s(n=O.dS.prototype,"gaf",0,0,null,["$1","$0"],["H","Y"],0,0)
r(n,"gho","hp",24)
r(n,"ghq","hr",24)
s(O.aH.prototype,"gaf",0,0,null,["$1","$0"],["H","Y"],0,0)
s(X.dE.prototype,"gcY",0,0,null,["$1","$0"],["ae","fe"],0,0)})();(function inheritance(){var u=hunkHelpers.mixin,t=hunkHelpers.inherit,s=hunkHelpers.inheritMany
t(P.M,null)
s(P.M,[H.jJ,J.a,J.ao,P.en,P.e,H.ds,P.aU,H.bO,H.e3,H.hv,H.i9,P.bq,H.ca,H.eE,P.ah,H.fU,H.fV,H.fP,P.eK,P.b9,P.ay,P.e8,P.hS,P.cy,P.hT,P.b5,P.aj,P.jg,P.ja,P.cM,P.j4,P.u,P.cb,P.jf,P.a4,P.ap,P.a1,P.aR,P.hq,P.dO,P.eg,P.fI,P.b,P.O,P.J,P.aq,P.o,P.bA,W.fk,W.z,W.dh,P.eP,P.j5,O.S,O.cm,E.fc,E.ak,E.hw,E.dX,Z.e7,Z.bD,Z.bb,Z.bt,Z.an,D.ff,D.br,D.v,X.d7,X.dp,X.fR,X.fY,X.as,X.he,X.i5,X.e4,D.bp,D.a2,D.dF,D.dN,D.dU,D.dV,D.dW,V.X,V.a8,V.fx,V.cl,V.aa,V.a3,V.a_,V.aC,V.bT,V.V,V.H,U.e5,U.e6,M.db,M.dg,M.at,A.d2,A.f6,A.h4,A.cD,A.cG,A.cE,A.cH,A.cF,A.cI,A.hm,A.bN,A.e_,A.ii,F.a7,F.fB,F.be,F.fT,F.bz,F.dK,F.hF,F.hG,F.hH,F.am,F.it,F.iu,F.ix,F.iz,F.iA,F.iB,O.bB,O.dx,O.aH,T.i0,V.f3,V.bf,V.du,V.hE,V.cx,V.dY,V.cB,V.i4,X.cz,X.bK,X.fL,X.dE,V.hI])
s(J.a,[J.fO,J.dm,J.dn,J.aB,J.bw,J.bx,H.cq,W.f,W.f2,W.d3,W.bM,W.aP,W.aQ,W.P,W.ea,W.fo,W.fq,W.ec,W.df,W.ee,W.fs,W.m,W.eh,W.aT,W.fK,W.ej,W.bs,W.fX,W.h8,W.eo,W.ep,W.aZ,W.eq,W.et,W.b0,W.ex,W.ez,W.b2,W.eA,W.b3,W.eF,W.aE,W.eI,W.i3,W.b6,W.eL,W.i7,W.io,W.eQ,W.eS,W.eU,W.eW,W.eY,P.bd,P.el,P.bi,P.ev,P.hu,P.eG,P.bk,P.eN,P.f7,P.e9,P.d5,P.di,P.dG,P.dI,P.bU,P.dJ,P.dQ,P.e1,P.eC])
s(J.dn,[J.hr,J.bV,J.bc])
t(J.jI,J.aB)
s(J.bw,[J.dl,J.dk])
t(P.fW,P.en)
s(P.fW,[H.e2,W.iN,W.iM,P.fE])
t(H.a5,H.e2)
s(P.e,[H.fv,H.h0,H.iG])
s(P.aU,[H.h1,H.iH])
s(P.bq,[H.hn,H.fQ,H.il,H.ib,H.fe,H.hC,P.dD,P.aN,P.im,P.ik,P.dP,P.fi,P.fn])
s(H.ca,[H.jy,H.hX,H.jq,H.jr,H.js,P.iJ,P.iI,P.iK,P.iL,P.je,P.jd,P.iS,P.iW,P.iT,P.iU,P.iV,P.iZ,P.j_,P.iY,P.iX,P.hU,P.hV,P.jk,P.j8,P.j7,P.j9,P.h_,P.ft,P.fu,W.ha,W.hc,W.hB,W.hR,W.iR,P.jm,P.fF,P.fG,P.f9,E.hx,E.hy,E.hz,E.i2,D.fz,D.fA,F.jh,F.jx,F.jn,F.iD,F.iC,F.iv,F.iw,T.i1,V.jw,V.hK,V.hJ])
s(H.hX,[H.hP,H.c8])
t(P.fZ,P.ah)
t(H.aV,P.fZ)
t(H.dr,H.fv)
t(H.dy,H.cq)
s(H.dy,[H.cN,H.cP])
t(H.cO,H.cN)
t(H.cp,H.cO)
t(H.cQ,H.cP)
t(H.dz,H.cQ)
s(H.dz,[H.hf,H.hg,H.hh,H.hi,H.hj,H.dA,H.hk])
t(P.j6,P.jg)
t(P.j3,P.ja)
t(P.da,P.hT)
t(P.fw,P.cb)
t(P.ip,P.fw)
t(P.iq,P.da)
s(P.a1,[P.x,P.y])
s(P.aN,[P.bS,P.fM])
s(W.f,[W.I,W.fD,W.b1,W.cR,W.b4,W.aF,W.cT,W.iF,W.cK,P.fa,P.bJ])
s(W.I,[W.a6,W.bo,W.cg])
s(W.a6,[W.t,P.p])
s(W.t,[W.f4,W.f5,W.d4,W.bL,W.cf,W.fH,W.ck,W.cn,W.hD])
s(W.aP,[W.cd,W.fl,W.fm])
t(W.fj,W.aQ)
t(W.ce,W.ea)
t(W.ed,W.ec)
t(W.de,W.ed)
t(W.ef,W.ee)
t(W.fr,W.ef)
t(W.aS,W.d3)
t(W.ei,W.eh)
t(W.fC,W.ei)
t(W.ek,W.ej)
t(W.bP,W.ek)
t(W.dj,W.cg)
t(W.bC,W.m)
s(W.bC,[W.aW,W.ab,W.aI])
t(W.h9,W.eo)
t(W.hb,W.ep)
t(W.er,W.eq)
t(W.hd,W.er)
t(W.eu,W.et)
t(W.cr,W.eu)
t(W.ey,W.ex)
t(W.hs,W.ey)
t(W.hA,W.ez)
t(W.cS,W.cR)
t(W.hM,W.cS)
t(W.eB,W.eA)
t(W.hN,W.eB)
t(W.hQ,W.eF)
t(W.eJ,W.eI)
t(W.hY,W.eJ)
t(W.cU,W.cT)
t(W.hZ,W.cU)
t(W.eM,W.eL)
t(W.i6,W.eM)
t(W.iE,W.cn)
t(W.b8,W.ab)
t(W.eR,W.eQ)
t(W.iO,W.eR)
t(W.eb,W.df)
t(W.eT,W.eS)
t(W.j0,W.eT)
t(W.eV,W.eU)
t(W.es,W.eV)
t(W.eX,W.eW)
t(W.jb,W.eX)
t(W.eZ,W.eY)
t(W.jc,W.eZ)
t(W.iP,P.hS)
t(W.jT,W.iP)
t(W.iQ,P.cy)
t(P.ad,P.j5)
t(P.em,P.el)
t(P.fS,P.em)
t(P.ew,P.ev)
t(P.ho,P.ew)
t(P.eH,P.eG)
t(P.hW,P.eH)
t(P.eO,P.eN)
t(P.i8,P.eO)
t(P.f8,P.e9)
t(P.hp,P.bJ)
t(P.eD,P.eC)
t(P.hO,P.eD)
s(E.fc,[Z.d6,A.cw,T.aG])
s(D.v,[D.bu,D.bv,D.B,X.ht])
s(X.ht,[X.dt,X.by,X.co,X.dZ])
s(O.S,[D.dq,U.cj,M.d8])
s(D.ff,[U.fh,U.ac])
t(U.d9,U.ac)
s(A.cw,[A.dd,A.dw,A.dC,A.dM,A.dT])
s(A.e_,[A.C,A.ie,A.ig,A.ih,A.id,A.U,A.au,A.G,A.e0,A.ij,A.bl,A.Y,A.a0,A.ae])
t(F.hL,F.fB)
t(F.ic,F.fT)
t(F.iy,F.iz)
t(F.hl,F.iA)
s(O.bB,[O.fp,O.dv,O.dB,O.dL,O.dS])
s(O.dx,[O.h2,O.h3,O.aX])
s(O.aX,[O.h5,O.h6])
s(T.aG,[T.dR,T.cA])
t(T.i_,T.dR)
s(V.du,[V.bh,V.cC])
s(X.cz,[X.fb,X.fJ])
u(H.e2,H.e3)
u(H.cN,P.u)
u(H.cO,H.bO)
u(H.cP,P.u)
u(H.cQ,H.bO)
u(P.en,P.u)
u(W.ea,W.fk)
u(W.ec,P.u)
u(W.ed,W.z)
u(W.ee,P.u)
u(W.ef,W.z)
u(W.eh,P.u)
u(W.ei,W.z)
u(W.ej,P.u)
u(W.ek,W.z)
u(W.eo,P.ah)
u(W.ep,P.ah)
u(W.eq,P.u)
u(W.er,W.z)
u(W.et,P.u)
u(W.eu,W.z)
u(W.ex,P.u)
u(W.ey,W.z)
u(W.ez,P.ah)
u(W.cR,P.u)
u(W.cS,W.z)
u(W.eA,P.u)
u(W.eB,W.z)
u(W.eF,P.ah)
u(W.eI,P.u)
u(W.eJ,W.z)
u(W.cT,P.u)
u(W.cU,W.z)
u(W.eL,P.u)
u(W.eM,W.z)
u(W.eQ,P.u)
u(W.eR,W.z)
u(W.eS,P.u)
u(W.eT,W.z)
u(W.eU,P.u)
u(W.eV,W.z)
u(W.eW,P.u)
u(W.eX,W.z)
u(W.eY,P.u)
u(W.eZ,W.z)
u(P.el,P.u)
u(P.em,W.z)
u(P.ev,P.u)
u(P.ew,W.z)
u(P.eG,P.u)
u(P.eH,W.z)
u(P.eN,P.u)
u(P.eO,W.z)
u(P.e9,P.ah)
u(P.eC,P.u)
u(P.eD,W.z)})();(function constants(){var u=hunkHelpers.makeConstList
C.q=W.d4.prototype
C.m=W.bL.prototype
C.r=W.bM.prototype
C.l=W.cf.prototype
C.C=W.dj.prototype
C.D=J.a.prototype
C.a=J.aB.prototype
C.E=J.dk.prototype
C.h=J.dl.prototype
C.o=J.dm.prototype
C.d=J.bw.prototype
C.j=J.bx.prototype
C.L=J.bc.prototype
C.N=W.cr.prototype
C.v=J.hr.prototype
C.b=P.bU.prototype
C.p=J.bV.prototype
C.x=W.b8.prototype
C.y=W.cK.prototype
C.z=new P.hq()
C.A=new P.iq()
C.k=new P.j6()
C.c=new A.bN(0,"ColorSourceType.None")
C.i=new A.bN(1,"ColorSourceType.Solid")
C.f=new A.bN(2,"ColorSourceType.Texture2D")
C.e=new A.bN(3,"ColorSourceType.TextureCube")
C.n=new P.aR(0)
C.B=new P.aR(5e6)
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
C.M=H.d(u([0,0,65498,45055,65535,34815,65534,18431]),[P.y])
C.w=new P.ip(!1)})();(function staticFields(){$.aO=0
$.c9=null
$.ka=null
$.jU=!1
$.l6=null
$.l0=null
$.lb=null
$.jo=null
$.jt=null
$.k1=null
$.bX=null
$.cW=null
$.cX=null
$.jV=!1
$.W=C.k
$.km=null
$.h7=null
$.kv=null
$.cs=null
$.cv=null
$.kK=null
$.kO=null
$.kM=null
$.kN=null
$.ir=null
$.kL=null
$.lJ="uniform mat4 projViewObjMat;                             \nuniform mat3 colorTxt2DMat;                              \nuniform mat3 bumpTxt2DMat;                               \n                                                         \nattribute vec3 posAttr;                                  \nattribute vec2 txt2DAttr;                                \n                                                         \nvarying vec2 colorTxt2D;                                 \nvarying vec2 bumpTxt2D;                                  \n                                                         \nvoid main()                                              \n{                                                        \n   vec3 txt2D = vec3(txt2DAttr.x, 1.0-txt2DAttr.y, 1.0); \n   colorTxt2D = (colorTxt2DMat * txt2D).xy;              \n   bumpTxt2D = (bumpTxt2DMat * vec3(txt2DAttr, 1.0)).xy; \n   gl_Position = projViewObjMat * vec4(posAttr, 1.0);    \n}                                                        \n"
$.lI="precision mediump float;                                 \n                                                         \nuniform sampler2D colorTxt;                              \nuniform sampler2D bumpTxt;                               \nuniform int nullColorTxt;                                \nuniform int nullBumpTxt;                                 \nuniform mat4 bumpMat;                                    \n                                                         \nvarying vec2 colorTxt2D;                                 \nvarying vec2 bumpTxt2D;                                  \n                                                         \nvec2 offset()                                            \n{                                                        \n   if(nullBumpTxt > 0) return vec2(0.0, 0.0);            \n   vec3 txt2D = texture2D(bumpTxt, bumpTxt2D).rgb;       \n   txt2D = normalize(txt2D*2.0 - 1.0);                   \n   return (bumpMat * vec4(txt2D, 1.0)).xy;               \n}                                                        \n                                                         \nvoid main()                                              \n{                                                        \n   if(nullColorTxt > 0) gl_FragColor = vec4(1.0);        \n   else                                                  \n   {                                                     \n      vec2 txt2D = colorTxt2D + offset();                \n      gl_FragColor = texture2D(colorTxt, txt2D);         \n   }                                                     \n}                                                        \n"
$.mb="uniform mat4 viewMat;                             \nuniform float fov;                                \nuniform float ratio;                              \n                                                  \nattribute vec3 posAttr;                           \n                                                  \nvarying vec3 cubeTxt;                             \n                                                  \nvoid main()                                       \n{                                                 \n  float t = 1.0 / (tan(fov * 0.5)*3.0);           \n  float x = -t * posAttr.x / ratio;               \n  float y = t * posAttr.y;                        \n  cubeTxt = (viewMat * vec4(x, y, 1.0, 0.0)).xyz; \n  gl_Position = vec4(posAttr, 1.0);               \n}                                                 \n"
$.ma="precision mediump float;                                              \n                                                                      \nuniform samplerCube boxTxt;                                           \nuniform vec3 boxClr;                                                  \n                                                                      \nvarying vec3 cubeTxt;                                                 \n                                                                      \nvoid main()                                                           \n{                                                                     \n   vec3 txtCube = normalize(cubeTxt);                                 \n   gl_FragColor = vec4(boxClr*textureCube(boxTxt, txtCube).xyz, 1.0); \n}                                                                     \n"
$.ku=null})();(function lazyInitializers(){var u=hunkHelpers.lazy
u($,"n8","lg",function(){return H.l5("_$dart_dartClosure")})
u($,"n9","k4",function(){return H.l5("_$dart_js")})
u($,"nc","lh",function(){return H.b7(H.ia({
toString:function(){return"$receiver$"}}))})
u($,"nd","li",function(){return H.b7(H.ia({$method$:null,
toString:function(){return"$receiver$"}}))})
u($,"ne","lj",function(){return H.b7(H.ia(null))})
u($,"nf","lk",function(){return H.b7(function(){var $argumentsExpr$='$arguments$'
try{null.$method$($argumentsExpr$)}catch(t){return t.message}}())})
u($,"ni","ln",function(){return H.b7(H.ia(void 0))})
u($,"nj","lo",function(){return H.b7(function(){var $argumentsExpr$='$arguments$'
try{(void 0).$method$($argumentsExpr$)}catch(t){return t.message}}())})
u($,"nh","lm",function(){return H.b7(H.kG(null))})
u($,"ng","ll",function(){return H.b7(function(){try{null.$method$}catch(t){return t.message}}())})
u($,"nl","lq",function(){return H.b7(H.kG(void 0))})
u($,"nk","lp",function(){return H.b7(function(){try{(void 0).$method$}catch(t){return t.message}}())})
u($,"nB","k5",function(){return P.mh()})
u($,"nD","d1",function(){return[]})
u($,"nC","lu",function(){return P.m6("^[\\-\\.0-9A-Z_a-z~]*$",!0,!1)})
u($,"nu","lt",function(){return Z.ax(0)})
u($,"no","lr",function(){return Z.ax(511)})
u($,"nw","ag",function(){return Z.ax(1)})
u($,"nv","aL",function(){return Z.ax(2)})
u($,"nq","aK",function(){return Z.ax(4)})
u($,"nx","av",function(){return Z.ax(8)})
u($,"ny","aM",function(){return Z.ax(16)})
u($,"nr","d_",function(){return Z.ax(32)})
u($,"ns","d0",function(){return Z.ax(64)})
u($,"nt","ls",function(){return Z.ax(96)})
u($,"nz","c5",function(){return Z.ax(128)})
u($,"np","bn",function(){return Z.ax(256)})
u($,"n7","lf",function(){return new V.fx(1e-9)})
u($,"n6","N",function(){return $.lf()})})()
var v={mangledGlobalNames:{y:"int",x:"double",a1:"num",o:"String",a4:"bool",J:"Null",b:"List"},mangledNames:{},getTypeFromName:getGlobalFromName,metadata:[],types:[{func:1,ret:-1,opt:[D.v]},{func:1,ret:P.J},{func:1,ret:-1,args:[D.v]},{func:1,ret:-1},{func:1,ret:-1,args:[W.ab]},{func:1,ret:P.J,args:[F.a7]},{func:1,ret:-1,args:[P.o,,]},{func:1,ret:-1,args:[P.y,[P.e,E.ak]]},{func:1,ret:-1,args:[W.aI]},{func:1,ret:P.J,args:[D.v]},{func:1,ret:-1,args:[W.m]},{func:1,ret:-1,args:[{func:1,ret:-1}]},{func:1,ret:P.J,args:[,,]},{func:1,ret:P.o,args:[P.y]},{func:1,ret:P.J,args:[,]},{func:1,args:[,]},{func:1,ret:P.J,args:[{func:1,ret:-1,args:[D.v]}]},{func:1,ret:-1,args:[W.aW]},{func:1,ret:-1,args:[P.y,[P.e,D.a2]]},{func:1,ret:P.x},{func:1,ret:-1,args:[P.y,[P.e,U.ac]]},{func:1,ret:-1,args:[P.y,[P.e,M.at]]},{func:1,ret:P.J,args:[F.am,P.x,P.x]},{func:1,ret:-1,args:[P.y,[P.e,V.aa]]},{func:1,ret:-1,args:[P.y,[P.e,O.aH]]},{func:1,ret:P.J,args:[W.m]},{func:1,ret:-1,args:[P.o,P.o]},{func:1,ret:P.a4,args:[W.I]},{func:1,ret:W.a6,args:[W.I]},{func:1,ret:P.J,args:[{func:1,ret:-1}]},{func:1,args:[,P.o]},{func:1,args:[W.m]},{func:1,args:[P.o]},{func:1,ret:-1,args:[W.b8]},{func:1,ret:P.a4,args:[[P.e,D.a2]]},{func:1,ret:P.J,args:[,],opt:[P.aq]},{func:1,ret:V.a_,args:[P.x]},{func:1,ret:[P.ay,,],args:[,]},{func:1,ret:P.J,args:[P.b5]},{func:1,ret:P.J,args:[P.a1]}],interceptorsByTag:null,leafTags:null};(function nativeSupport(){!function(){var u=function(a){var o={}
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
hunkHelpers.setOrUpdateInterceptorsByTag({ArrayBuffer:J.a,AnimationEffectReadOnly:J.a,AnimationEffectTiming:J.a,AnimationEffectTimingReadOnly:J.a,AnimationTimeline:J.a,AnimationWorkletGlobalScope:J.a,AuthenticatorAssertionResponse:J.a,AuthenticatorAttestationResponse:J.a,AuthenticatorResponse:J.a,BackgroundFetchFetch:J.a,BackgroundFetchManager:J.a,BackgroundFetchSettledFetch:J.a,BarProp:J.a,BarcodeDetector:J.a,BluetoothRemoteGATTDescriptor:J.a,Body:J.a,BudgetState:J.a,CacheStorage:J.a,CanvasGradient:J.a,CanvasPattern:J.a,Client:J.a,Clients:J.a,CookieStore:J.a,Coordinates:J.a,Credential:J.a,CredentialUserData:J.a,CredentialsContainer:J.a,Crypto:J.a,CryptoKey:J.a,CSS:J.a,CSSVariableReferenceValue:J.a,CustomElementRegistry:J.a,DataTransfer:J.a,DataTransferItem:J.a,DeprecatedStorageInfo:J.a,DeprecatedStorageQuota:J.a,DeprecationReport:J.a,DetectedBarcode:J.a,DetectedFace:J.a,DetectedText:J.a,DeviceAcceleration:J.a,DeviceRotationRate:J.a,DirectoryEntry:J.a,DirectoryReader:J.a,DocumentOrShadowRoot:J.a,DocumentTimeline:J.a,DOMError:J.a,DOMImplementation:J.a,Iterator:J.a,DOMMatrix:J.a,DOMMatrixReadOnly:J.a,DOMParser:J.a,DOMPoint:J.a,DOMPointReadOnly:J.a,DOMQuad:J.a,DOMStringMap:J.a,Entry:J.a,External:J.a,FaceDetector:J.a,FederatedCredential:J.a,FileEntry:J.a,DOMFileSystem:J.a,FontFace:J.a,FontFaceSource:J.a,FormData:J.a,GamepadButton:J.a,GamepadPose:J.a,Geolocation:J.a,Position:J.a,Headers:J.a,HTMLHyperlinkElementUtils:J.a,IdleDeadline:J.a,ImageBitmap:J.a,ImageBitmapRenderingContext:J.a,ImageCapture:J.a,InputDeviceCapabilities:J.a,IntersectionObserver:J.a,IntersectionObserverEntry:J.a,InterventionReport:J.a,KeyframeEffect:J.a,KeyframeEffectReadOnly:J.a,MediaCapabilities:J.a,MediaCapabilitiesInfo:J.a,MediaDeviceInfo:J.a,MediaError:J.a,MediaKeyStatusMap:J.a,MediaKeySystemAccess:J.a,MediaKeys:J.a,MediaKeysPolicy:J.a,MediaMetadata:J.a,MediaSession:J.a,MediaSettingsRange:J.a,MemoryInfo:J.a,MessageChannel:J.a,Metadata:J.a,MutationObserver:J.a,WebKitMutationObserver:J.a,MutationRecord:J.a,NavigationPreloadManager:J.a,Navigator:J.a,NavigatorAutomationInformation:J.a,NavigatorConcurrentHardware:J.a,NavigatorCookies:J.a,NavigatorUserMediaError:J.a,NodeFilter:J.a,NodeIterator:J.a,NonDocumentTypeChildNode:J.a,NonElementParentNode:J.a,NoncedElement:J.a,OffscreenCanvasRenderingContext2D:J.a,OverconstrainedError:J.a,PaintRenderingContext2D:J.a,PaintSize:J.a,PaintWorkletGlobalScope:J.a,PasswordCredential:J.a,Path2D:J.a,PaymentAddress:J.a,PaymentInstruments:J.a,PaymentManager:J.a,PaymentResponse:J.a,PerformanceEntry:J.a,PerformanceLongTaskTiming:J.a,PerformanceMark:J.a,PerformanceMeasure:J.a,PerformanceNavigation:J.a,PerformanceNavigationTiming:J.a,PerformanceObserver:J.a,PerformanceObserverEntryList:J.a,PerformancePaintTiming:J.a,PerformanceResourceTiming:J.a,PerformanceServerTiming:J.a,PerformanceTiming:J.a,Permissions:J.a,PhotoCapabilities:J.a,PositionError:J.a,Presentation:J.a,PresentationReceiver:J.a,PublicKeyCredential:J.a,PushManager:J.a,PushMessageData:J.a,PushSubscription:J.a,PushSubscriptionOptions:J.a,Range:J.a,RelatedApplication:J.a,ReportBody:J.a,ReportingObserver:J.a,ResizeObserver:J.a,ResizeObserverEntry:J.a,RTCCertificate:J.a,RTCIceCandidate:J.a,mozRTCIceCandidate:J.a,RTCLegacyStatsReport:J.a,RTCRtpContributingSource:J.a,RTCRtpReceiver:J.a,RTCRtpSender:J.a,RTCSessionDescription:J.a,mozRTCSessionDescription:J.a,RTCStatsResponse:J.a,Screen:J.a,ScrollState:J.a,ScrollTimeline:J.a,Selection:J.a,SharedArrayBuffer:J.a,SpeechRecognitionAlternative:J.a,SpeechSynthesisVoice:J.a,StaticRange:J.a,StorageManager:J.a,StyleMedia:J.a,StylePropertyMap:J.a,StylePropertyMapReadonly:J.a,SyncManager:J.a,TaskAttributionTiming:J.a,TextDetector:J.a,TextMetrics:J.a,TrackDefault:J.a,TreeWalker:J.a,TrustedHTML:J.a,TrustedScriptURL:J.a,TrustedURL:J.a,UnderlyingSourceBase:J.a,URLSearchParams:J.a,VRCoordinateSystem:J.a,VRDisplayCapabilities:J.a,VREyeParameters:J.a,VRFrameData:J.a,VRFrameOfReference:J.a,VRPose:J.a,VRStageBounds:J.a,VRStageBoundsPoint:J.a,VRStageParameters:J.a,ValidityState:J.a,VideoPlaybackQuality:J.a,VideoTrack:J.a,VTTRegion:J.a,WindowClient:J.a,WorkletAnimation:J.a,WorkletGlobalScope:J.a,XPathEvaluator:J.a,XPathExpression:J.a,XPathNSResolver:J.a,XPathResult:J.a,XMLSerializer:J.a,XSLTProcessor:J.a,Bluetooth:J.a,BluetoothCharacteristicProperties:J.a,BluetoothRemoteGATTServer:J.a,BluetoothRemoteGATTService:J.a,BluetoothUUID:J.a,BudgetService:J.a,Cache:J.a,DOMFileSystemSync:J.a,DirectoryEntrySync:J.a,DirectoryReaderSync:J.a,EntrySync:J.a,FileEntrySync:J.a,FileReaderSync:J.a,FileWriterSync:J.a,HTMLAllCollection:J.a,Mojo:J.a,MojoHandle:J.a,MojoWatcher:J.a,NFC:J.a,PagePopupController:J.a,Report:J.a,Request:J.a,Response:J.a,SubtleCrypto:J.a,USBAlternateInterface:J.a,USBConfiguration:J.a,USBDevice:J.a,USBEndpoint:J.a,USBInTransferResult:J.a,USBInterface:J.a,USBIsochronousInTransferPacket:J.a,USBIsochronousInTransferResult:J.a,USBIsochronousOutTransferPacket:J.a,USBIsochronousOutTransferResult:J.a,USBOutTransferResult:J.a,WorkerLocation:J.a,WorkerNavigator:J.a,Worklet:J.a,IDBCursor:J.a,IDBCursorWithValue:J.a,IDBFactory:J.a,IDBIndex:J.a,IDBKeyRange:J.a,IDBObjectStore:J.a,IDBObservation:J.a,IDBObserver:J.a,IDBObserverChanges:J.a,SVGAngle:J.a,SVGAnimatedAngle:J.a,SVGAnimatedBoolean:J.a,SVGAnimatedEnumeration:J.a,SVGAnimatedInteger:J.a,SVGAnimatedLength:J.a,SVGAnimatedLengthList:J.a,SVGAnimatedNumber:J.a,SVGAnimatedNumberList:J.a,SVGAnimatedPreserveAspectRatio:J.a,SVGAnimatedRect:J.a,SVGAnimatedString:J.a,SVGAnimatedTransformList:J.a,SVGMatrix:J.a,SVGPoint:J.a,SVGPreserveAspectRatio:J.a,SVGRect:J.a,SVGUnitTypes:J.a,AudioListener:J.a,AudioParam:J.a,AudioTrack:J.a,AudioWorkletGlobalScope:J.a,AudioWorkletProcessor:J.a,PeriodicWave:J.a,WebGLActiveInfo:J.a,ANGLEInstancedArrays:J.a,ANGLE_instanced_arrays:J.a,WebGLCanvas:J.a,WebGLColorBufferFloat:J.a,WebGLCompressedTextureASTC:J.a,WebGLCompressedTextureATC:J.a,WEBGL_compressed_texture_atc:J.a,WebGLCompressedTextureETC1:J.a,WEBGL_compressed_texture_etc1:J.a,WebGLCompressedTextureETC:J.a,WebGLCompressedTexturePVRTC:J.a,WEBGL_compressed_texture_pvrtc:J.a,WebGLCompressedTextureS3TC:J.a,WEBGL_compressed_texture_s3tc:J.a,WebGLCompressedTextureS3TCsRGB:J.a,WebGLDebugRendererInfo:J.a,WEBGL_debug_renderer_info:J.a,WebGLDebugShaders:J.a,WEBGL_debug_shaders:J.a,WebGLDepthTexture:J.a,WEBGL_depth_texture:J.a,WebGLDrawBuffers:J.a,WEBGL_draw_buffers:J.a,EXTsRGB:J.a,EXT_sRGB:J.a,EXTBlendMinMax:J.a,EXT_blend_minmax:J.a,EXTColorBufferFloat:J.a,EXTColorBufferHalfFloat:J.a,EXTDisjointTimerQuery:J.a,EXTDisjointTimerQueryWebGL2:J.a,EXTFragDepth:J.a,EXT_frag_depth:J.a,EXTShaderTextureLOD:J.a,EXT_shader_texture_lod:J.a,EXTTextureFilterAnisotropic:J.a,EXT_texture_filter_anisotropic:J.a,WebGLGetBufferSubDataAsync:J.a,WebGLLoseContext:J.a,WebGLExtensionLoseContext:J.a,WEBGL_lose_context:J.a,OESElementIndexUint:J.a,OES_element_index_uint:J.a,OESStandardDerivatives:J.a,OES_standard_derivatives:J.a,OESTextureFloat:J.a,OES_texture_float:J.a,OESTextureFloatLinear:J.a,OES_texture_float_linear:J.a,OESTextureHalfFloat:J.a,OES_texture_half_float:J.a,OESTextureHalfFloatLinear:J.a,OES_texture_half_float_linear:J.a,OESVertexArrayObject:J.a,OES_vertex_array_object:J.a,WebGLQuery:J.a,WebGLRenderingContext:J.a,WebGLSampler:J.a,WebGLShaderPrecisionFormat:J.a,WebGLSync:J.a,WebGLTimerQueryEXT:J.a,WebGLTransformFeedback:J.a,WebGLVertexArrayObject:J.a,WebGLVertexArrayObjectOES:J.a,WebGL:J.a,WebGL2RenderingContextBase:J.a,Database:J.a,SQLError:J.a,SQLResultSet:J.a,SQLTransaction:J.a,DataView:H.cq,ArrayBufferView:H.cq,Float32Array:H.cp,Float64Array:H.cp,Int16Array:H.hf,Int32Array:H.hg,Int8Array:H.hh,Uint16Array:H.hi,Uint32Array:H.hj,Uint8ClampedArray:H.dA,CanvasPixelArray:H.dA,Uint8Array:H.hk,HTMLBRElement:W.t,HTMLBaseElement:W.t,HTMLButtonElement:W.t,HTMLContentElement:W.t,HTMLDListElement:W.t,HTMLDataElement:W.t,HTMLDataListElement:W.t,HTMLDetailsElement:W.t,HTMLDialogElement:W.t,HTMLEmbedElement:W.t,HTMLFieldSetElement:W.t,HTMLHRElement:W.t,HTMLHeadElement:W.t,HTMLHeadingElement:W.t,HTMLHtmlElement:W.t,HTMLIFrameElement:W.t,HTMLInputElement:W.t,HTMLLIElement:W.t,HTMLLabelElement:W.t,HTMLLegendElement:W.t,HTMLLinkElement:W.t,HTMLMapElement:W.t,HTMLMenuElement:W.t,HTMLMetaElement:W.t,HTMLMeterElement:W.t,HTMLModElement:W.t,HTMLOListElement:W.t,HTMLObjectElement:W.t,HTMLOptGroupElement:W.t,HTMLOptionElement:W.t,HTMLOutputElement:W.t,HTMLParagraphElement:W.t,HTMLParamElement:W.t,HTMLPictureElement:W.t,HTMLPreElement:W.t,HTMLProgressElement:W.t,HTMLQuoteElement:W.t,HTMLScriptElement:W.t,HTMLShadowElement:W.t,HTMLSlotElement:W.t,HTMLSourceElement:W.t,HTMLSpanElement:W.t,HTMLStyleElement:W.t,HTMLTableCaptionElement:W.t,HTMLTableCellElement:W.t,HTMLTableDataCellElement:W.t,HTMLTableHeaderCellElement:W.t,HTMLTableColElement:W.t,HTMLTableElement:W.t,HTMLTableRowElement:W.t,HTMLTableSectionElement:W.t,HTMLTemplateElement:W.t,HTMLTextAreaElement:W.t,HTMLTimeElement:W.t,HTMLTitleElement:W.t,HTMLTrackElement:W.t,HTMLUListElement:W.t,HTMLUnknownElement:W.t,HTMLDirectoryElement:W.t,HTMLFontElement:W.t,HTMLFrameElement:W.t,HTMLFrameSetElement:W.t,HTMLMarqueeElement:W.t,HTMLElement:W.t,AccessibleNodeList:W.f2,HTMLAnchorElement:W.f4,HTMLAreaElement:W.f5,Blob:W.d3,HTMLBodyElement:W.d4,HTMLCanvasElement:W.bL,CanvasRenderingContext2D:W.bM,CDATASection:W.bo,CharacterData:W.bo,Comment:W.bo,ProcessingInstruction:W.bo,Text:W.bo,CSSNumericValue:W.cd,CSSUnitValue:W.cd,CSSPerspective:W.fj,CSSCharsetRule:W.P,CSSConditionRule:W.P,CSSFontFaceRule:W.P,CSSGroupingRule:W.P,CSSImportRule:W.P,CSSKeyframeRule:W.P,MozCSSKeyframeRule:W.P,WebKitCSSKeyframeRule:W.P,CSSKeyframesRule:W.P,MozCSSKeyframesRule:W.P,WebKitCSSKeyframesRule:W.P,CSSMediaRule:W.P,CSSNamespaceRule:W.P,CSSPageRule:W.P,CSSRule:W.P,CSSStyleRule:W.P,CSSSupportsRule:W.P,CSSViewportRule:W.P,CSSStyleDeclaration:W.ce,MSStyleCSSProperties:W.ce,CSS2Properties:W.ce,CSSImageValue:W.aP,CSSKeywordValue:W.aP,CSSPositionValue:W.aP,CSSResourceValue:W.aP,CSSURLImageValue:W.aP,CSSStyleValue:W.aP,CSSMatrixComponent:W.aQ,CSSRotation:W.aQ,CSSScale:W.aQ,CSSSkew:W.aQ,CSSTranslation:W.aQ,CSSTransformComponent:W.aQ,CSSTransformValue:W.fl,CSSUnparsedValue:W.fm,DataTransferItemList:W.fo,HTMLDivElement:W.cf,XMLDocument:W.cg,Document:W.cg,DOMException:W.fq,ClientRectList:W.de,DOMRectList:W.de,DOMRectReadOnly:W.df,DOMStringList:W.fr,DOMTokenList:W.fs,Element:W.a6,AbortPaymentEvent:W.m,AnimationEvent:W.m,AnimationPlaybackEvent:W.m,ApplicationCacheErrorEvent:W.m,BackgroundFetchClickEvent:W.m,BackgroundFetchEvent:W.m,BackgroundFetchFailEvent:W.m,BackgroundFetchedEvent:W.m,BeforeInstallPromptEvent:W.m,BeforeUnloadEvent:W.m,BlobEvent:W.m,CanMakePaymentEvent:W.m,ClipboardEvent:W.m,CloseEvent:W.m,CustomEvent:W.m,DeviceMotionEvent:W.m,DeviceOrientationEvent:W.m,ErrorEvent:W.m,ExtendableEvent:W.m,ExtendableMessageEvent:W.m,FetchEvent:W.m,FontFaceSetLoadEvent:W.m,ForeignFetchEvent:W.m,GamepadEvent:W.m,HashChangeEvent:W.m,InstallEvent:W.m,MediaEncryptedEvent:W.m,MediaKeyMessageEvent:W.m,MediaQueryListEvent:W.m,MediaStreamEvent:W.m,MediaStreamTrackEvent:W.m,MessageEvent:W.m,MIDIConnectionEvent:W.m,MIDIMessageEvent:W.m,MutationEvent:W.m,NotificationEvent:W.m,PageTransitionEvent:W.m,PaymentRequestEvent:W.m,PaymentRequestUpdateEvent:W.m,PopStateEvent:W.m,PresentationConnectionAvailableEvent:W.m,PresentationConnectionCloseEvent:W.m,ProgressEvent:W.m,PromiseRejectionEvent:W.m,PushEvent:W.m,RTCDataChannelEvent:W.m,RTCDTMFToneChangeEvent:W.m,RTCPeerConnectionIceEvent:W.m,RTCTrackEvent:W.m,SecurityPolicyViolationEvent:W.m,SensorErrorEvent:W.m,SpeechRecognitionError:W.m,SpeechRecognitionEvent:W.m,SpeechSynthesisEvent:W.m,StorageEvent:W.m,SyncEvent:W.m,TrackEvent:W.m,TransitionEvent:W.m,WebKitTransitionEvent:W.m,VRDeviceEvent:W.m,VRDisplayEvent:W.m,VRSessionEvent:W.m,MojoInterfaceRequestEvent:W.m,ResourceProgressEvent:W.m,USBConnectionEvent:W.m,IDBVersionChangeEvent:W.m,AudioProcessingEvent:W.m,OfflineAudioCompletionEvent:W.m,WebGLContextEvent:W.m,Event:W.m,InputEvent:W.m,AbsoluteOrientationSensor:W.f,Accelerometer:W.f,AccessibleNode:W.f,AmbientLightSensor:W.f,Animation:W.f,ApplicationCache:W.f,DOMApplicationCache:W.f,OfflineResourceList:W.f,BackgroundFetchRegistration:W.f,BatteryManager:W.f,BroadcastChannel:W.f,CanvasCaptureMediaStreamTrack:W.f,DedicatedWorkerGlobalScope:W.f,EventSource:W.f,FileReader:W.f,FontFaceSet:W.f,Gyroscope:W.f,XMLHttpRequest:W.f,XMLHttpRequestEventTarget:W.f,XMLHttpRequestUpload:W.f,LinearAccelerationSensor:W.f,Magnetometer:W.f,MediaDevices:W.f,MediaKeySession:W.f,MediaQueryList:W.f,MediaRecorder:W.f,MediaSource:W.f,MediaStream:W.f,MediaStreamTrack:W.f,MessagePort:W.f,MIDIAccess:W.f,MIDIInput:W.f,MIDIOutput:W.f,MIDIPort:W.f,NetworkInformation:W.f,Notification:W.f,OffscreenCanvas:W.f,OrientationSensor:W.f,PaymentRequest:W.f,Performance:W.f,PermissionStatus:W.f,PresentationAvailability:W.f,PresentationConnection:W.f,PresentationConnectionList:W.f,PresentationRequest:W.f,RelativeOrientationSensor:W.f,RemotePlayback:W.f,RTCDataChannel:W.f,DataChannel:W.f,RTCDTMFSender:W.f,RTCPeerConnection:W.f,webkitRTCPeerConnection:W.f,mozRTCPeerConnection:W.f,ScreenOrientation:W.f,Sensor:W.f,ServiceWorker:W.f,ServiceWorkerContainer:W.f,ServiceWorkerGlobalScope:W.f,ServiceWorkerRegistration:W.f,SharedWorker:W.f,SharedWorkerGlobalScope:W.f,SpeechRecognition:W.f,SpeechSynthesis:W.f,SpeechSynthesisUtterance:W.f,VR:W.f,VRDevice:W.f,VRDisplay:W.f,VRSession:W.f,VisualViewport:W.f,WebSocket:W.f,Worker:W.f,WorkerGlobalScope:W.f,WorkerPerformance:W.f,BluetoothDevice:W.f,BluetoothRemoteGATTCharacteristic:W.f,Clipboard:W.f,MojoInterfaceInterceptor:W.f,USB:W.f,IDBDatabase:W.f,IDBOpenDBRequest:W.f,IDBVersionChangeRequest:W.f,IDBRequest:W.f,IDBTransaction:W.f,AnalyserNode:W.f,RealtimeAnalyserNode:W.f,AudioBufferSourceNode:W.f,AudioDestinationNode:W.f,AudioNode:W.f,AudioScheduledSourceNode:W.f,AudioWorkletNode:W.f,BiquadFilterNode:W.f,ChannelMergerNode:W.f,AudioChannelMerger:W.f,ChannelSplitterNode:W.f,AudioChannelSplitter:W.f,ConstantSourceNode:W.f,ConvolverNode:W.f,DelayNode:W.f,DynamicsCompressorNode:W.f,GainNode:W.f,AudioGainNode:W.f,IIRFilterNode:W.f,MediaElementAudioSourceNode:W.f,MediaStreamAudioDestinationNode:W.f,MediaStreamAudioSourceNode:W.f,OscillatorNode:W.f,Oscillator:W.f,PannerNode:W.f,AudioPannerNode:W.f,webkitAudioPannerNode:W.f,ScriptProcessorNode:W.f,JavaScriptAudioNode:W.f,StereoPannerNode:W.f,WaveShaperNode:W.f,EventTarget:W.f,File:W.aS,FileList:W.fC,FileWriter:W.fD,HTMLFormElement:W.fH,Gamepad:W.aT,History:W.fK,HTMLCollection:W.bP,HTMLFormControlsCollection:W.bP,HTMLOptionsCollection:W.bP,HTMLDocument:W.dj,ImageData:W.bs,HTMLImageElement:W.ck,KeyboardEvent:W.aW,Location:W.fX,HTMLAudioElement:W.cn,HTMLMediaElement:W.cn,MediaList:W.h8,MIDIInputMap:W.h9,MIDIOutputMap:W.hb,MimeType:W.aZ,MimeTypeArray:W.hd,PointerEvent:W.ab,MouseEvent:W.ab,DragEvent:W.ab,DocumentFragment:W.I,ShadowRoot:W.I,Attr:W.I,DocumentType:W.I,Node:W.I,NodeList:W.cr,RadioNodeList:W.cr,Plugin:W.b0,PluginArray:W.hs,RTCStatsReport:W.hA,HTMLSelectElement:W.hD,SourceBuffer:W.b1,SourceBufferList:W.hM,SpeechGrammar:W.b2,SpeechGrammarList:W.hN,SpeechRecognitionResult:W.b3,Storage:W.hQ,CSSStyleSheet:W.aE,StyleSheet:W.aE,TextTrack:W.b4,TextTrackCue:W.aF,VTTCue:W.aF,TextTrackCueList:W.hY,TextTrackList:W.hZ,TimeRanges:W.i3,Touch:W.b6,TouchEvent:W.aI,TouchList:W.i6,TrackDefaultList:W.i7,CompositionEvent:W.bC,FocusEvent:W.bC,TextEvent:W.bC,UIEvent:W.bC,URL:W.io,HTMLVideoElement:W.iE,VideoTrackList:W.iF,WheelEvent:W.b8,Window:W.cK,DOMWindow:W.cK,CSSRuleList:W.iO,ClientRect:W.eb,DOMRect:W.eb,GamepadList:W.j0,NamedNodeMap:W.es,MozNamedAttrMap:W.es,SpeechRecognitionResultList:W.jb,StyleSheetList:W.jc,SVGLength:P.bd,SVGLengthList:P.fS,SVGNumber:P.bi,SVGNumberList:P.ho,SVGPointList:P.hu,SVGStringList:P.hW,SVGAElement:P.p,SVGAnimateElement:P.p,SVGAnimateMotionElement:P.p,SVGAnimateTransformElement:P.p,SVGAnimationElement:P.p,SVGCircleElement:P.p,SVGClipPathElement:P.p,SVGDefsElement:P.p,SVGDescElement:P.p,SVGDiscardElement:P.p,SVGEllipseElement:P.p,SVGFEBlendElement:P.p,SVGFEColorMatrixElement:P.p,SVGFEComponentTransferElement:P.p,SVGFECompositeElement:P.p,SVGFEConvolveMatrixElement:P.p,SVGFEDiffuseLightingElement:P.p,SVGFEDisplacementMapElement:P.p,SVGFEDistantLightElement:P.p,SVGFEFloodElement:P.p,SVGFEFuncAElement:P.p,SVGFEFuncBElement:P.p,SVGFEFuncGElement:P.p,SVGFEFuncRElement:P.p,SVGFEGaussianBlurElement:P.p,SVGFEImageElement:P.p,SVGFEMergeElement:P.p,SVGFEMergeNodeElement:P.p,SVGFEMorphologyElement:P.p,SVGFEOffsetElement:P.p,SVGFEPointLightElement:P.p,SVGFESpecularLightingElement:P.p,SVGFESpotLightElement:P.p,SVGFETileElement:P.p,SVGFETurbulenceElement:P.p,SVGFilterElement:P.p,SVGForeignObjectElement:P.p,SVGGElement:P.p,SVGGeometryElement:P.p,SVGGraphicsElement:P.p,SVGImageElement:P.p,SVGLineElement:P.p,SVGLinearGradientElement:P.p,SVGMarkerElement:P.p,SVGMaskElement:P.p,SVGMetadataElement:P.p,SVGPathElement:P.p,SVGPatternElement:P.p,SVGPolygonElement:P.p,SVGPolylineElement:P.p,SVGRadialGradientElement:P.p,SVGRectElement:P.p,SVGScriptElement:P.p,SVGSetElement:P.p,SVGStopElement:P.p,SVGStyleElement:P.p,SVGElement:P.p,SVGSVGElement:P.p,SVGSwitchElement:P.p,SVGSymbolElement:P.p,SVGTSpanElement:P.p,SVGTextContentElement:P.p,SVGTextElement:P.p,SVGTextPathElement:P.p,SVGTextPositioningElement:P.p,SVGTitleElement:P.p,SVGUseElement:P.p,SVGViewElement:P.p,SVGGradientElement:P.p,SVGComponentTransferFunctionElement:P.p,SVGFEDropShadowElement:P.p,SVGMPathElement:P.p,SVGTransform:P.bk,SVGTransformList:P.i8,AudioBuffer:P.f7,AudioParamMap:P.f8,AudioTrackList:P.fa,AudioContext:P.bJ,webkitAudioContext:P.bJ,BaseAudioContext:P.bJ,OfflineAudioContext:P.hp,WebGLBuffer:P.d5,WebGLFramebuffer:P.di,WebGLProgram:P.dG,WebGLRenderbuffer:P.dI,WebGL2RenderingContext:P.bU,WebGLShader:P.dJ,WebGLTexture:P.dQ,WebGLUniformLocation:P.e1,SQLResultSetRowList:P.hO})
hunkHelpers.setOrUpdateLeafTags({ArrayBuffer:true,AnimationEffectReadOnly:true,AnimationEffectTiming:true,AnimationEffectTimingReadOnly:true,AnimationTimeline:true,AnimationWorkletGlobalScope:true,AuthenticatorAssertionResponse:true,AuthenticatorAttestationResponse:true,AuthenticatorResponse:true,BackgroundFetchFetch:true,BackgroundFetchManager:true,BackgroundFetchSettledFetch:true,BarProp:true,BarcodeDetector:true,BluetoothRemoteGATTDescriptor:true,Body:true,BudgetState:true,CacheStorage:true,CanvasGradient:true,CanvasPattern:true,Client:true,Clients:true,CookieStore:true,Coordinates:true,Credential:true,CredentialUserData:true,CredentialsContainer:true,Crypto:true,CryptoKey:true,CSS:true,CSSVariableReferenceValue:true,CustomElementRegistry:true,DataTransfer:true,DataTransferItem:true,DeprecatedStorageInfo:true,DeprecatedStorageQuota:true,DeprecationReport:true,DetectedBarcode:true,DetectedFace:true,DetectedText:true,DeviceAcceleration:true,DeviceRotationRate:true,DirectoryEntry:true,DirectoryReader:true,DocumentOrShadowRoot:true,DocumentTimeline:true,DOMError:true,DOMImplementation:true,Iterator:true,DOMMatrix:true,DOMMatrixReadOnly:true,DOMParser:true,DOMPoint:true,DOMPointReadOnly:true,DOMQuad:true,DOMStringMap:true,Entry:true,External:true,FaceDetector:true,FederatedCredential:true,FileEntry:true,DOMFileSystem:true,FontFace:true,FontFaceSource:true,FormData:true,GamepadButton:true,GamepadPose:true,Geolocation:true,Position:true,Headers:true,HTMLHyperlinkElementUtils:true,IdleDeadline:true,ImageBitmap:true,ImageBitmapRenderingContext:true,ImageCapture:true,InputDeviceCapabilities:true,IntersectionObserver:true,IntersectionObserverEntry:true,InterventionReport:true,KeyframeEffect:true,KeyframeEffectReadOnly:true,MediaCapabilities:true,MediaCapabilitiesInfo:true,MediaDeviceInfo:true,MediaError:true,MediaKeyStatusMap:true,MediaKeySystemAccess:true,MediaKeys:true,MediaKeysPolicy:true,MediaMetadata:true,MediaSession:true,MediaSettingsRange:true,MemoryInfo:true,MessageChannel:true,Metadata:true,MutationObserver:true,WebKitMutationObserver:true,MutationRecord:true,NavigationPreloadManager:true,Navigator:true,NavigatorAutomationInformation:true,NavigatorConcurrentHardware:true,NavigatorCookies:true,NavigatorUserMediaError:true,NodeFilter:true,NodeIterator:true,NonDocumentTypeChildNode:true,NonElementParentNode:true,NoncedElement:true,OffscreenCanvasRenderingContext2D:true,OverconstrainedError:true,PaintRenderingContext2D:true,PaintSize:true,PaintWorkletGlobalScope:true,PasswordCredential:true,Path2D:true,PaymentAddress:true,PaymentInstruments:true,PaymentManager:true,PaymentResponse:true,PerformanceEntry:true,PerformanceLongTaskTiming:true,PerformanceMark:true,PerformanceMeasure:true,PerformanceNavigation:true,PerformanceNavigationTiming:true,PerformanceObserver:true,PerformanceObserverEntryList:true,PerformancePaintTiming:true,PerformanceResourceTiming:true,PerformanceServerTiming:true,PerformanceTiming:true,Permissions:true,PhotoCapabilities:true,PositionError:true,Presentation:true,PresentationReceiver:true,PublicKeyCredential:true,PushManager:true,PushMessageData:true,PushSubscription:true,PushSubscriptionOptions:true,Range:true,RelatedApplication:true,ReportBody:true,ReportingObserver:true,ResizeObserver:true,ResizeObserverEntry:true,RTCCertificate:true,RTCIceCandidate:true,mozRTCIceCandidate:true,RTCLegacyStatsReport:true,RTCRtpContributingSource:true,RTCRtpReceiver:true,RTCRtpSender:true,RTCSessionDescription:true,mozRTCSessionDescription:true,RTCStatsResponse:true,Screen:true,ScrollState:true,ScrollTimeline:true,Selection:true,SharedArrayBuffer:true,SpeechRecognitionAlternative:true,SpeechSynthesisVoice:true,StaticRange:true,StorageManager:true,StyleMedia:true,StylePropertyMap:true,StylePropertyMapReadonly:true,SyncManager:true,TaskAttributionTiming:true,TextDetector:true,TextMetrics:true,TrackDefault:true,TreeWalker:true,TrustedHTML:true,TrustedScriptURL:true,TrustedURL:true,UnderlyingSourceBase:true,URLSearchParams:true,VRCoordinateSystem:true,VRDisplayCapabilities:true,VREyeParameters:true,VRFrameData:true,VRFrameOfReference:true,VRPose:true,VRStageBounds:true,VRStageBoundsPoint:true,VRStageParameters:true,ValidityState:true,VideoPlaybackQuality:true,VideoTrack:true,VTTRegion:true,WindowClient:true,WorkletAnimation:true,WorkletGlobalScope:true,XPathEvaluator:true,XPathExpression:true,XPathNSResolver:true,XPathResult:true,XMLSerializer:true,XSLTProcessor:true,Bluetooth:true,BluetoothCharacteristicProperties:true,BluetoothRemoteGATTServer:true,BluetoothRemoteGATTService:true,BluetoothUUID:true,BudgetService:true,Cache:true,DOMFileSystemSync:true,DirectoryEntrySync:true,DirectoryReaderSync:true,EntrySync:true,FileEntrySync:true,FileReaderSync:true,FileWriterSync:true,HTMLAllCollection:true,Mojo:true,MojoHandle:true,MojoWatcher:true,NFC:true,PagePopupController:true,Report:true,Request:true,Response:true,SubtleCrypto:true,USBAlternateInterface:true,USBConfiguration:true,USBDevice:true,USBEndpoint:true,USBInTransferResult:true,USBInterface:true,USBIsochronousInTransferPacket:true,USBIsochronousInTransferResult:true,USBIsochronousOutTransferPacket:true,USBIsochronousOutTransferResult:true,USBOutTransferResult:true,WorkerLocation:true,WorkerNavigator:true,Worklet:true,IDBCursor:true,IDBCursorWithValue:true,IDBFactory:true,IDBIndex:true,IDBKeyRange:true,IDBObjectStore:true,IDBObservation:true,IDBObserver:true,IDBObserverChanges:true,SVGAngle:true,SVGAnimatedAngle:true,SVGAnimatedBoolean:true,SVGAnimatedEnumeration:true,SVGAnimatedInteger:true,SVGAnimatedLength:true,SVGAnimatedLengthList:true,SVGAnimatedNumber:true,SVGAnimatedNumberList:true,SVGAnimatedPreserveAspectRatio:true,SVGAnimatedRect:true,SVGAnimatedString:true,SVGAnimatedTransformList:true,SVGMatrix:true,SVGPoint:true,SVGPreserveAspectRatio:true,SVGRect:true,SVGUnitTypes:true,AudioListener:true,AudioParam:true,AudioTrack:true,AudioWorkletGlobalScope:true,AudioWorkletProcessor:true,PeriodicWave:true,WebGLActiveInfo:true,ANGLEInstancedArrays:true,ANGLE_instanced_arrays:true,WebGLCanvas:true,WebGLColorBufferFloat:true,WebGLCompressedTextureASTC:true,WebGLCompressedTextureATC:true,WEBGL_compressed_texture_atc:true,WebGLCompressedTextureETC1:true,WEBGL_compressed_texture_etc1:true,WebGLCompressedTextureETC:true,WebGLCompressedTexturePVRTC:true,WEBGL_compressed_texture_pvrtc:true,WebGLCompressedTextureS3TC:true,WEBGL_compressed_texture_s3tc:true,WebGLCompressedTextureS3TCsRGB:true,WebGLDebugRendererInfo:true,WEBGL_debug_renderer_info:true,WebGLDebugShaders:true,WEBGL_debug_shaders:true,WebGLDepthTexture:true,WEBGL_depth_texture:true,WebGLDrawBuffers:true,WEBGL_draw_buffers:true,EXTsRGB:true,EXT_sRGB:true,EXTBlendMinMax:true,EXT_blend_minmax:true,EXTColorBufferFloat:true,EXTColorBufferHalfFloat:true,EXTDisjointTimerQuery:true,EXTDisjointTimerQueryWebGL2:true,EXTFragDepth:true,EXT_frag_depth:true,EXTShaderTextureLOD:true,EXT_shader_texture_lod:true,EXTTextureFilterAnisotropic:true,EXT_texture_filter_anisotropic:true,WebGLGetBufferSubDataAsync:true,WebGLLoseContext:true,WebGLExtensionLoseContext:true,WEBGL_lose_context:true,OESElementIndexUint:true,OES_element_index_uint:true,OESStandardDerivatives:true,OES_standard_derivatives:true,OESTextureFloat:true,OES_texture_float:true,OESTextureFloatLinear:true,OES_texture_float_linear:true,OESTextureHalfFloat:true,OES_texture_half_float:true,OESTextureHalfFloatLinear:true,OES_texture_half_float_linear:true,OESVertexArrayObject:true,OES_vertex_array_object:true,WebGLQuery:true,WebGLRenderingContext:true,WebGLSampler:true,WebGLShaderPrecisionFormat:true,WebGLSync:true,WebGLTimerQueryEXT:true,WebGLTransformFeedback:true,WebGLVertexArrayObject:true,WebGLVertexArrayObjectOES:true,WebGL:true,WebGL2RenderingContextBase:true,Database:true,SQLError:true,SQLResultSet:true,SQLTransaction:true,DataView:true,ArrayBufferView:false,Float32Array:true,Float64Array:true,Int16Array:true,Int32Array:true,Int8Array:true,Uint16Array:true,Uint32Array:true,Uint8ClampedArray:true,CanvasPixelArray:true,Uint8Array:false,HTMLBRElement:true,HTMLBaseElement:true,HTMLButtonElement:true,HTMLContentElement:true,HTMLDListElement:true,HTMLDataElement:true,HTMLDataListElement:true,HTMLDetailsElement:true,HTMLDialogElement:true,HTMLEmbedElement:true,HTMLFieldSetElement:true,HTMLHRElement:true,HTMLHeadElement:true,HTMLHeadingElement:true,HTMLHtmlElement:true,HTMLIFrameElement:true,HTMLInputElement:true,HTMLLIElement:true,HTMLLabelElement:true,HTMLLegendElement:true,HTMLLinkElement:true,HTMLMapElement:true,HTMLMenuElement:true,HTMLMetaElement:true,HTMLMeterElement:true,HTMLModElement:true,HTMLOListElement:true,HTMLObjectElement:true,HTMLOptGroupElement:true,HTMLOptionElement:true,HTMLOutputElement:true,HTMLParagraphElement:true,HTMLParamElement:true,HTMLPictureElement:true,HTMLPreElement:true,HTMLProgressElement:true,HTMLQuoteElement:true,HTMLScriptElement:true,HTMLShadowElement:true,HTMLSlotElement:true,HTMLSourceElement:true,HTMLSpanElement:true,HTMLStyleElement:true,HTMLTableCaptionElement:true,HTMLTableCellElement:true,HTMLTableDataCellElement:true,HTMLTableHeaderCellElement:true,HTMLTableColElement:true,HTMLTableElement:true,HTMLTableRowElement:true,HTMLTableSectionElement:true,HTMLTemplateElement:true,HTMLTextAreaElement:true,HTMLTimeElement:true,HTMLTitleElement:true,HTMLTrackElement:true,HTMLUListElement:true,HTMLUnknownElement:true,HTMLDirectoryElement:true,HTMLFontElement:true,HTMLFrameElement:true,HTMLFrameSetElement:true,HTMLMarqueeElement:true,HTMLElement:false,AccessibleNodeList:true,HTMLAnchorElement:true,HTMLAreaElement:true,Blob:false,HTMLBodyElement:true,HTMLCanvasElement:true,CanvasRenderingContext2D:true,CDATASection:true,CharacterData:true,Comment:true,ProcessingInstruction:true,Text:true,CSSNumericValue:true,CSSUnitValue:true,CSSPerspective:true,CSSCharsetRule:true,CSSConditionRule:true,CSSFontFaceRule:true,CSSGroupingRule:true,CSSImportRule:true,CSSKeyframeRule:true,MozCSSKeyframeRule:true,WebKitCSSKeyframeRule:true,CSSKeyframesRule:true,MozCSSKeyframesRule:true,WebKitCSSKeyframesRule:true,CSSMediaRule:true,CSSNamespaceRule:true,CSSPageRule:true,CSSRule:true,CSSStyleRule:true,CSSSupportsRule:true,CSSViewportRule:true,CSSStyleDeclaration:true,MSStyleCSSProperties:true,CSS2Properties:true,CSSImageValue:true,CSSKeywordValue:true,CSSPositionValue:true,CSSResourceValue:true,CSSURLImageValue:true,CSSStyleValue:false,CSSMatrixComponent:true,CSSRotation:true,CSSScale:true,CSSSkew:true,CSSTranslation:true,CSSTransformComponent:false,CSSTransformValue:true,CSSUnparsedValue:true,DataTransferItemList:true,HTMLDivElement:true,XMLDocument:true,Document:false,DOMException:true,ClientRectList:true,DOMRectList:true,DOMRectReadOnly:false,DOMStringList:true,DOMTokenList:true,Element:false,AbortPaymentEvent:true,AnimationEvent:true,AnimationPlaybackEvent:true,ApplicationCacheErrorEvent:true,BackgroundFetchClickEvent:true,BackgroundFetchEvent:true,BackgroundFetchFailEvent:true,BackgroundFetchedEvent:true,BeforeInstallPromptEvent:true,BeforeUnloadEvent:true,BlobEvent:true,CanMakePaymentEvent:true,ClipboardEvent:true,CloseEvent:true,CustomEvent:true,DeviceMotionEvent:true,DeviceOrientationEvent:true,ErrorEvent:true,ExtendableEvent:true,ExtendableMessageEvent:true,FetchEvent:true,FontFaceSetLoadEvent:true,ForeignFetchEvent:true,GamepadEvent:true,HashChangeEvent:true,InstallEvent:true,MediaEncryptedEvent:true,MediaKeyMessageEvent:true,MediaQueryListEvent:true,MediaStreamEvent:true,MediaStreamTrackEvent:true,MessageEvent:true,MIDIConnectionEvent:true,MIDIMessageEvent:true,MutationEvent:true,NotificationEvent:true,PageTransitionEvent:true,PaymentRequestEvent:true,PaymentRequestUpdateEvent:true,PopStateEvent:true,PresentationConnectionAvailableEvent:true,PresentationConnectionCloseEvent:true,ProgressEvent:true,PromiseRejectionEvent:true,PushEvent:true,RTCDataChannelEvent:true,RTCDTMFToneChangeEvent:true,RTCPeerConnectionIceEvent:true,RTCTrackEvent:true,SecurityPolicyViolationEvent:true,SensorErrorEvent:true,SpeechRecognitionError:true,SpeechRecognitionEvent:true,SpeechSynthesisEvent:true,StorageEvent:true,SyncEvent:true,TrackEvent:true,TransitionEvent:true,WebKitTransitionEvent:true,VRDeviceEvent:true,VRDisplayEvent:true,VRSessionEvent:true,MojoInterfaceRequestEvent:true,ResourceProgressEvent:true,USBConnectionEvent:true,IDBVersionChangeEvent:true,AudioProcessingEvent:true,OfflineAudioCompletionEvent:true,WebGLContextEvent:true,Event:false,InputEvent:false,AbsoluteOrientationSensor:true,Accelerometer:true,AccessibleNode:true,AmbientLightSensor:true,Animation:true,ApplicationCache:true,DOMApplicationCache:true,OfflineResourceList:true,BackgroundFetchRegistration:true,BatteryManager:true,BroadcastChannel:true,CanvasCaptureMediaStreamTrack:true,DedicatedWorkerGlobalScope:true,EventSource:true,FileReader:true,FontFaceSet:true,Gyroscope:true,XMLHttpRequest:true,XMLHttpRequestEventTarget:true,XMLHttpRequestUpload:true,LinearAccelerationSensor:true,Magnetometer:true,MediaDevices:true,MediaKeySession:true,MediaQueryList:true,MediaRecorder:true,MediaSource:true,MediaStream:true,MediaStreamTrack:true,MessagePort:true,MIDIAccess:true,MIDIInput:true,MIDIOutput:true,MIDIPort:true,NetworkInformation:true,Notification:true,OffscreenCanvas:true,OrientationSensor:true,PaymentRequest:true,Performance:true,PermissionStatus:true,PresentationAvailability:true,PresentationConnection:true,PresentationConnectionList:true,PresentationRequest:true,RelativeOrientationSensor:true,RemotePlayback:true,RTCDataChannel:true,DataChannel:true,RTCDTMFSender:true,RTCPeerConnection:true,webkitRTCPeerConnection:true,mozRTCPeerConnection:true,ScreenOrientation:true,Sensor:true,ServiceWorker:true,ServiceWorkerContainer:true,ServiceWorkerGlobalScope:true,ServiceWorkerRegistration:true,SharedWorker:true,SharedWorkerGlobalScope:true,SpeechRecognition:true,SpeechSynthesis:true,SpeechSynthesisUtterance:true,VR:true,VRDevice:true,VRDisplay:true,VRSession:true,VisualViewport:true,WebSocket:true,Worker:true,WorkerGlobalScope:true,WorkerPerformance:true,BluetoothDevice:true,BluetoothRemoteGATTCharacteristic:true,Clipboard:true,MojoInterfaceInterceptor:true,USB:true,IDBDatabase:true,IDBOpenDBRequest:true,IDBVersionChangeRequest:true,IDBRequest:true,IDBTransaction:true,AnalyserNode:true,RealtimeAnalyserNode:true,AudioBufferSourceNode:true,AudioDestinationNode:true,AudioNode:true,AudioScheduledSourceNode:true,AudioWorkletNode:true,BiquadFilterNode:true,ChannelMergerNode:true,AudioChannelMerger:true,ChannelSplitterNode:true,AudioChannelSplitter:true,ConstantSourceNode:true,ConvolverNode:true,DelayNode:true,DynamicsCompressorNode:true,GainNode:true,AudioGainNode:true,IIRFilterNode:true,MediaElementAudioSourceNode:true,MediaStreamAudioDestinationNode:true,MediaStreamAudioSourceNode:true,OscillatorNode:true,Oscillator:true,PannerNode:true,AudioPannerNode:true,webkitAudioPannerNode:true,ScriptProcessorNode:true,JavaScriptAudioNode:true,StereoPannerNode:true,WaveShaperNode:true,EventTarget:false,File:true,FileList:true,FileWriter:true,HTMLFormElement:true,Gamepad:true,History:true,HTMLCollection:true,HTMLFormControlsCollection:true,HTMLOptionsCollection:true,HTMLDocument:true,ImageData:true,HTMLImageElement:true,KeyboardEvent:true,Location:true,HTMLAudioElement:true,HTMLMediaElement:false,MediaList:true,MIDIInputMap:true,MIDIOutputMap:true,MimeType:true,MimeTypeArray:true,PointerEvent:true,MouseEvent:false,DragEvent:false,DocumentFragment:true,ShadowRoot:true,Attr:true,DocumentType:true,Node:false,NodeList:true,RadioNodeList:true,Plugin:true,PluginArray:true,RTCStatsReport:true,HTMLSelectElement:true,SourceBuffer:true,SourceBufferList:true,SpeechGrammar:true,SpeechGrammarList:true,SpeechRecognitionResult:true,Storage:true,CSSStyleSheet:true,StyleSheet:true,TextTrack:true,TextTrackCue:true,VTTCue:true,TextTrackCueList:true,TextTrackList:true,TimeRanges:true,Touch:true,TouchEvent:true,TouchList:true,TrackDefaultList:true,CompositionEvent:true,FocusEvent:true,TextEvent:true,UIEvent:false,URL:true,HTMLVideoElement:true,VideoTrackList:true,WheelEvent:true,Window:true,DOMWindow:true,CSSRuleList:true,ClientRect:true,DOMRect:true,GamepadList:true,NamedNodeMap:true,MozNamedAttrMap:true,SpeechRecognitionResultList:true,StyleSheetList:true,SVGLength:true,SVGLengthList:true,SVGNumber:true,SVGNumberList:true,SVGPointList:true,SVGStringList:true,SVGAElement:true,SVGAnimateElement:true,SVGAnimateMotionElement:true,SVGAnimateTransformElement:true,SVGAnimationElement:true,SVGCircleElement:true,SVGClipPathElement:true,SVGDefsElement:true,SVGDescElement:true,SVGDiscardElement:true,SVGEllipseElement:true,SVGFEBlendElement:true,SVGFEColorMatrixElement:true,SVGFEComponentTransferElement:true,SVGFECompositeElement:true,SVGFEConvolveMatrixElement:true,SVGFEDiffuseLightingElement:true,SVGFEDisplacementMapElement:true,SVGFEDistantLightElement:true,SVGFEFloodElement:true,SVGFEFuncAElement:true,SVGFEFuncBElement:true,SVGFEFuncGElement:true,SVGFEFuncRElement:true,SVGFEGaussianBlurElement:true,SVGFEImageElement:true,SVGFEMergeElement:true,SVGFEMergeNodeElement:true,SVGFEMorphologyElement:true,SVGFEOffsetElement:true,SVGFEPointLightElement:true,SVGFESpecularLightingElement:true,SVGFESpotLightElement:true,SVGFETileElement:true,SVGFETurbulenceElement:true,SVGFilterElement:true,SVGForeignObjectElement:true,SVGGElement:true,SVGGeometryElement:true,SVGGraphicsElement:true,SVGImageElement:true,SVGLineElement:true,SVGLinearGradientElement:true,SVGMarkerElement:true,SVGMaskElement:true,SVGMetadataElement:true,SVGPathElement:true,SVGPatternElement:true,SVGPolygonElement:true,SVGPolylineElement:true,SVGRadialGradientElement:true,SVGRectElement:true,SVGScriptElement:true,SVGSetElement:true,SVGStopElement:true,SVGStyleElement:true,SVGElement:true,SVGSVGElement:true,SVGSwitchElement:true,SVGSymbolElement:true,SVGTSpanElement:true,SVGTextContentElement:true,SVGTextElement:true,SVGTextPathElement:true,SVGTextPositioningElement:true,SVGTitleElement:true,SVGUseElement:true,SVGViewElement:true,SVGGradientElement:true,SVGComponentTransferFunctionElement:true,SVGFEDropShadowElement:true,SVGMPathElement:true,SVGTransform:true,SVGTransformList:true,AudioBuffer:true,AudioParamMap:true,AudioTrackList:true,AudioContext:true,webkitAudioContext:true,BaseAudioContext:false,OfflineAudioContext:true,WebGLBuffer:true,WebGLFramebuffer:true,WebGLProgram:true,WebGLRenderbuffer:true,WebGL2RenderingContext:true,WebGLShader:true,WebGLTexture:true,WebGLUniformLocation:true,SQLResultSetRowList:true})
H.dy.$nativeSuperclassTag="ArrayBufferView"
H.cN.$nativeSuperclassTag="ArrayBufferView"
H.cO.$nativeSuperclassTag="ArrayBufferView"
H.cp.$nativeSuperclassTag="ArrayBufferView"
H.cP.$nativeSuperclassTag="ArrayBufferView"
H.cQ.$nativeSuperclassTag="ArrayBufferView"
H.dz.$nativeSuperclassTag="ArrayBufferView"
W.cR.$nativeSuperclassTag="EventTarget"
W.cS.$nativeSuperclassTag="EventTarget"
W.cT.$nativeSuperclassTag="EventTarget"
W.cU.$nativeSuperclassTag="EventTarget"})()
convertAllToFastObject(w)
convertToFastObject($);(function(a){if(typeof document==="undefined"){a(null)
return}if(typeof document.currentScript!='undefined'){a(document.currentScript)
return}var u=document.scripts
function onLoad(b){for(var s=0;s<u.length;++s)u[s].removeEventListener("load",onLoad,false)
a(b.target)}for(var t=0;t<u.length;++t)u[t].addEventListener("load",onLoad,false)})(function(a){v.currentScript=a
if(typeof dartMainRunner==="function")dartMainRunner(S.l8,[])
else S.l8([])})})()
//# sourceMappingURL=test.dart.js.map
