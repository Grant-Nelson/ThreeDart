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
a[c]=function(){a[c]=function(){H.nA(b)}
var t
var s=d
try{if(a[b]===u){t=a[b]=s
t=a[b]=d()}else t=a[b]}finally{if(t===s)a[b]=null
a[c]=function(){return this[b]}}return t}}function makeConstList(a){a.immutable$list=Array
a.fixed$length=Array
return a}function convertToFastObject(a){function t(){}t.prototype=a
new t()
return a}function convertAllToFastObject(a){for(var u=0;u<a.length;++u)convertToFastObject(a[u])}var y=0
function tearOffGetter(a,b,c,d,e){return e?new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+d+y+++"(receiver) {"+"if (c === null) c = "+"H.ks"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, true, name);"+"return new c(this, funcs[0], receiver, name);"+"}")(a,b,c,d,H,null):new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+d+y+++"() {"+"if (c === null) c = "+"H.ks"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, false, name);"+"return new c(this, funcs[0], null, name);"+"}")(a,b,c,d,H,null)}function tearOff(a,b,c,d,e,f){var u=null
return d?function(){if(u===null)u=H.ks(this,a,b,c,true,false,e).prototype
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
if(w[u][a])return w[u][a]}}var C={},H={kd:function kd(a){this.a=a},
h3:function(){return new P.c3("No element")},
mm:function(){return new P.c3("Too many elements")},
ml:function(){return new P.c3("Too few elements")},
q:function q(a){this.a=a},
fH:function fH(){},
bX:function bX(){},
cu:function cu(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=null
_.$ti=d},
hh:function hh(a,b,c){this.a=a
this.b=b
this.$ti=c},
hi:function hi(a,b,c){var _=this
_.a=null
_.b=a
_.c=b
_.$ti=c},
hj:function hj(a,b,c){this.a=a
this.b=b
this.$ti=c},
cU:function cU(a,b,c){this.a=a
this.b=b
this.$ti=c},
j3:function j3(a,b,c){this.a=a
this.b=b
this.$ti=c},
bU:function bU(){},
ee:function ee(){},
ed:function ed(){},
ce:function(a){var u,t
u=H.H(v.mangledGlobalNames[a])
if(typeof u==="string")return u
t="minified:"+a
return t},
nh:function(a){return v.types[H.a9(a)]},
no:function(a,b){var u
if(b!=null){u=b.x
if(u!=null)return u}return!!J.a_(a).$iF},
m:function(a){var u
if(typeof a==="string")return a
if(typeof a==="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
u=J.aM(a)
if(typeof u!=="string")throw H.f(H.bb(a))
return u},
mB:function(a){var u,t,s
u=a.$reflectionInfo
if(u==null)return
u=J.h4(u)
t=u[0]
s=u[1]
return new H.hP(a,u,(t&2)===2,t>>2,s>>1,(s&1)===1,u[2])},
cC:function(a){var u=a.$identityHash
if(u==null){u=Math.random()*0x3fffffff|0
a.$identityHash=u}return u},
c0:function(a){return H.ms(a)+H.kp(H.bK(a),0,null)},
ms:function(a){var u,t,s,r,q,p,o,n,m
u=J.a_(a)
t=u.constructor
if(typeof t=="function"){s=t.name
r=typeof s==="string"?s:null}else r=null
q=r==null
if(q||u===C.N||!!u.$ibG){p=C.B(a)
if(q)r=p
if(p==="Object"){o=a.constructor
if(typeof o=="function"){n=String(o).match(/^\s*function\s*([\w$]*)\s*\(/)
m=n==null?null:n[1]
if(typeof m==="string"&&/^\w+$/.test(m))r=m}}return r}r=r
return H.ce(r.length>1&&C.j.aJ(r,0)===36?C.j.bf(r,1):r)},
l2:function(a){var u,t,s,r,q
u=a.length
if(u<=500)return String.fromCharCode.apply(null,a)
for(t="",s=0;s<u;s=r){r=s+500
q=r<u?r:u
t+=String.fromCharCode.apply(null,a.slice(s,q))}return t},
mA:function(a){var u,t,s,r
u=H.c([],[P.B])
for(t=a.length,s=0;s<a.length;a.length===t||(0,H.C)(a),++s){r=a[s]
if(typeof r!=="number"||Math.floor(r)!==r)throw H.f(H.bb(r))
if(r<=65535)C.a.h(u,r)
else if(r<=1114111){C.a.h(u,55296+(C.d.bl(r-65536,10)&1023))
C.a.h(u,56320+(r&1023))}else throw H.f(H.bb(r))}return H.l2(u)},
l3:function(a){var u,t,s
for(u=a.length,t=0;t<u;++t){s=a[t]
if(typeof s!=="number"||Math.floor(s)!==s)throw H.f(H.bb(s))
if(s<0)throw H.f(H.bb(s))
if(s>65535)return H.mA(a)}return H.l2(a)},
kf:function(a){var u
if(a<=65535)return String.fromCharCode(a)
if(a<=1114111){u=a-65536
return String.fromCharCode((55296|C.d.bl(u,10))>>>0,56320|u&1023)}throw H.f(P.aB(a,0,1114111,null,null))},
c_:function(a){if(a.date===void 0)a.date=new Date(a.a)
return a.date},
mz:function(a){var u=H.c_(a).getFullYear()+0
return u},
mx:function(a){var u=H.c_(a).getMonth()+1
return u},
mt:function(a){var u=H.c_(a).getDate()+0
return u},
mu:function(a){var u=H.c_(a).getHours()+0
return u},
mw:function(a){var u=H.c_(a).getMinutes()+0
return u},
my:function(a){var u=H.c_(a).getSeconds()+0
return u},
mv:function(a){var u=H.c_(a).getMilliseconds()+0
return u},
G:function(a){throw H.f(H.bb(a))},
j:function(a,b){if(a==null)J.bN(a)
throw H.f(H.c9(a,b))},
c9:function(a,b){var u,t
if(typeof b!=="number"||Math.floor(b)!==b)return new P.aF(!0,b,"index",null)
u=H.a9(J.bN(a))
if(!(b<0)){if(typeof u!=="number")return H.G(u)
t=b>=u}else t=!0
if(t)return P.W(b,a,"index",null,u)
return P.dU(b,"index",null)},
nb:function(a,b,c){if(a>c)return new P.c1(0,c,!0,a,"start","Invalid value")
if(b!=null)if(b<a||b>c)return new P.c1(a,c,!0,b,"end","Invalid value")
return new P.aF(!0,b,"end",null)},
bb:function(a){return new P.aF(!0,a,null,null)},
n6:function(a){if(typeof a!=="number")throw H.f(H.bb(a))
return a},
f:function(a){var u
if(a==null)a=new P.dP()
u=new Error()
u.dartException=a
if("defineProperty" in Object){Object.defineProperty(u,"message",{get:H.lJ})
u.name=""}else u.toString=H.lJ
return u},
lJ:function(){return J.aM(this.dartException)},
u:function(a){throw H.f(a)},
C:function(a){throw H.f(P.bv(a))},
b7:function(a){var u,t,s,r,q,p
a=a.replace(String({}),'$receiver$').replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
u=a.match(/\\\$[a-zA-Z]+\\\$/g)
if(u==null)u=H.c([],[P.h])
t=u.indexOf("\\$arguments\\$")
s=u.indexOf("\\$argumentsExpr\\$")
r=u.indexOf("\\$expr\\$")
q=u.indexOf("\\$method\\$")
p=u.indexOf("\\$receiver\\$")
return new H.ix(a.replace(new RegExp('\\\\\\$arguments\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$argumentsExpr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$expr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$method\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$receiver\\\\\\$','g'),'((?:x|[^x])*)'),t,s,r,q,p)},
iy:function(a){return function($expr$){var $argumentsExpr$='$arguments$'
try{$expr$.$method$($argumentsExpr$)}catch(u){return u.message}}(a)},
ld:function(a){return function($expr$){try{$expr$.$method$}catch(u){return u.message}}(a)},
kX:function(a,b){return new H.hF(a,b==null?null:b.method)},
ke:function(a,b){var u,t
u=b==null
t=u?null:b.method
return new H.h7(a,t,u?null:b.receiver)},
az:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g
u=new H.k1(a)
if(a==null)return
if(typeof a!=="object")return a
if("dartException" in a)return u.$1(a.dartException)
else if(!("message" in a))return a
t=a.message
if("number" in a&&typeof a.number=="number"){s=a.number
r=s&65535
if((C.d.bl(s,16)&8191)===10)switch(r){case 438:return u.$1(H.ke(H.m(t)+" (Error "+r+")",null))
case 445:case 5007:return u.$1(H.kX(H.m(t)+" (Error "+r+")",null))}}if(a instanceof TypeError){q=$.lM()
p=$.lN()
o=$.lO()
n=$.lP()
m=$.lS()
l=$.lT()
k=$.lR()
$.lQ()
j=$.lV()
i=$.lU()
h=q.ag(t)
if(h!=null)return u.$1(H.ke(H.H(t),h))
else{h=p.ag(t)
if(h!=null){h.method="call"
return u.$1(H.ke(H.H(t),h))}else{h=o.ag(t)
if(h==null){h=n.ag(t)
if(h==null){h=m.ag(t)
if(h==null){h=l.ag(t)
if(h==null){h=k.ag(t)
if(h==null){h=n.ag(t)
if(h==null){h=j.ag(t)
if(h==null){h=i.ag(t)
g=h!=null}else g=!0}else g=!0}else g=!0}else g=!0}else g=!0}else g=!0}else g=!0
if(g)return u.$1(H.kX(H.H(t),h))}}return u.$1(new H.iK(typeof t==="string"?t:""))}if(a instanceof RangeError){if(typeof t==="string"&&t.indexOf("call stack")!==-1)return new P.e0()
t=function(b){try{return String(b)}catch(f){}return null}(a)
return u.$1(new P.aF(!1,null,null,typeof t==="string"?t.replace(/^RangeError:\s*/,""):t))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof t==="string"&&t==="too much recursion")return new P.e0()
return a},
cc:function(a){var u
if(a==null)return new H.eT(a)
u=a.$cachedTrace
if(u!=null)return u
return a.$cachedTrace=new H.eT(a)},
nd:function(a,b){var u,t,s,r
u=a.length
for(t=0;t<u;t=r){s=t+1
r=s+1
b.Y(0,a[t],a[s])}return b},
nn:function(a,b,c,d,e,f){H.k(a,"$iby")
switch(H.a9(b)){case 0:return a.$0()
case 1:return a.$1(c)
case 2:return a.$2(c,d)
case 3:return a.$3(c,d,e)
case 4:return a.$4(c,d,e,f)}throw H.f(P.r("Unsupported number of arguments for wrapped closure"))},
c8:function(a,b){var u
H.a9(b)
if(a==null)return
u=a.$identity
if(!!u)return u
u=function(c,d,e){return function(f,g,h,i){return e(c,d,f,g,h,i)}}(a,b,H.nn)
a.$identity=u
return u},
me:function(a,b,c,d,e,f,g){var u,t,s,r,q,p,o,n,m,l,k,j,i
u=b[0]
t=u.$callName
if(!!J.a_(d).$ib){u.$reflectionInfo=d
s=H.mB(u).r}else s=d
r=e?Object.create(new H.i9().constructor.prototype):Object.create(new H.ch(null,null,null,null).constructor.prototype)
r.$initialize=r.constructor
if(e)q=function static_tear_off(){this.$initialize()}
else{p=$.aN
if(typeof p!=="number")return p.p()
$.aN=p+1
p=new Function("a,b,c,d"+p,"this.$initialize(a,b,c,d"+p+")")
q=p}r.constructor=q
q.prototype=r
if(!e){o=H.kK(a,u,f)
o.$reflectionInfo=d}else{r.$static_name=g
o=u}if(typeof s=="number")n=function(h,a0){return function(){return h(a0)}}(H.nh,s)
else if(typeof s=="function")if(e)n=s
else{m=f?H.kI:H.k5
n=function(h,a0){return function(){return h.apply({$receiver:a0(this)},arguments)}}(s,m)}else throw H.f("Error in reflectionInfo.")
r.$S=n
r[t]=o
for(l=o,k=1;k<b.length;++k){j=b[k]
i=j.$callName
if(i!=null){j=e?j:H.kK(a,j,f)
r[i]=j}if(k===c){j.$reflectionInfo=d
l=j}}r.$C=l
r.$R=u.$R
r.$D=u.$D
return q},
mb:function(a,b,c,d){var u=H.k5
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,u)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,u)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,u)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,u)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,u)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,u)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,u)}},
kK:function(a,b,c){var u,t,s,r,q,p,o
if(c)return H.md(a,b)
u=b.$stubName
t=b.length
s=a[u]
r=b==null?s==null:b===s
q=!r||t>=27
if(q)return H.mb(t,!r,u,b)
if(t===0){r=$.aN
if(typeof r!=="number")return r.p()
$.aN=r+1
p="self"+r
r="return function(){var "+p+" = this."
q=$.ci
if(q==null){q=H.fq("self")
$.ci=q}return new Function(r+H.m(q)+";return "+p+"."+H.m(u)+"();}")()}o="abcdefghijklmnopqrstuvwxyz".split("").splice(0,t).join(",")
r=$.aN
if(typeof r!=="number")return r.p()
$.aN=r+1
o+=r
r="return function("+o+"){return this."
q=$.ci
if(q==null){q=H.fq("self")
$.ci=q}return new Function(r+H.m(q)+"."+H.m(u)+"("+o+");}")()},
mc:function(a,b,c,d){var u,t
u=H.k5
t=H.kI
switch(b?-1:a){case 0:throw H.f(H.mE("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,u,t)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,u,t)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,u,t)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,u,t)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,u,t)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,u,t)
default:return function(e,f,g,h){return function(){h=[g(this)]
Array.prototype.push.apply(h,arguments)
return e.apply(f(this),h)}}(d,u,t)}},
md:function(a,b){var u,t,s,r,q,p,o,n
u=$.ci
if(u==null){u=H.fq("self")
$.ci=u}t=$.kH
if(t==null){t=H.fq("receiver")
$.kH=t}s=b.$stubName
r=b.length
q=a[s]
p=b==null?q==null:b===q
o=!p||r>=28
if(o)return H.mc(r,!p,s,b)
if(r===1){u="return function(){return this."+H.m(u)+"."+H.m(s)+"(this."+H.m(t)+");"
t=$.aN
if(typeof t!=="number")return t.p()
$.aN=t+1
return new Function(u+t+"}")()}n="abcdefghijklmnopqrstuvwxyz".split("").splice(0,r-1).join(",")
u="return function("+n+"){return this."+H.m(u)+"."+H.m(s)+"(this."+H.m(t)+", "+n+");"
t=$.aN
if(typeof t!=="number")return t.p()
$.aN=t+1
return new Function(u+t+"}")()},
ks:function(a,b,c,d,e,f,g){return H.me(a,b,H.a9(c),d,!!e,!!f,g)},
k5:function(a){return a.a},
kI:function(a){return a.c},
fq:function(a){var u,t,s,r,q
u=new H.ch("self","target","receiver","name")
t=J.h4(Object.getOwnPropertyNames(u))
for(s=t.length,r=0;r<s;++r){q=t[r]
if(u[q]===a)return q}},
H:function(a){if(a==null)return a
if(typeof a==="string")return a
throw H.f(H.aK(a,"String"))},
oi:function(a){if(a==null)return a
if(typeof a==="number")return a
throw H.f(H.aK(a,"double"))},
nt:function(a){if(a==null)return a
if(typeof a==="number")return a
throw H.f(H.aK(a,"num"))},
kq:function(a){if(a==null)return a
if(typeof a==="boolean")return a
throw H.f(H.aK(a,"bool"))},
a9:function(a){if(a==null)return a
if(typeof a==="number"&&Math.floor(a)===a)return a
throw H.f(H.aK(a,"int"))},
lH:function(a,b){throw H.f(H.aK(a,H.ce(H.H(b).substring(2))))},
nv:function(a,b){throw H.f(H.ma(a,H.ce(H.H(b).substring(2))))},
k:function(a,b){if(a==null)return a
if((typeof a==="object"||typeof a==="function")&&J.a_(a)[b])return a
H.lH(a,b)},
i:function(a,b){var u
if(a!=null)u=(typeof a==="object"||typeof a==="function")&&J.a_(a)[b]
else u=!0
if(u)return a
H.nv(a,b)},
kw:function(a){if(a==null)return a
if(!!J.a_(a).$ib)return a
throw H.f(H.aK(a,"List<dynamic>"))},
np:function(a,b){var u
if(a==null)return a
u=J.a_(a)
if(!!u.$ib)return a
if(u[b])return a
H.lH(a,b)},
lB:function(a){var u
if("$S" in a){u=a.$S
if(typeof u=="number")return v.types[H.a9(u)]
else return a.$S()}return},
ff:function(a,b){var u
if(a==null)return!1
if(typeof a=="function")return!0
u=H.lB(J.a_(a))
if(u==null)return!1
return H.ls(u,null,b,null)},
n:function(a,b){var u,t
if(a==null)return a
if($.km)return a
$.km=!0
try{if(H.ff(a,b))return a
u=H.jZ(b)
t=H.aK(a,u)
throw H.f(t)}finally{$.km=!1}},
kt:function(a,b){if(a!=null&&!H.kr(a,b))H.u(H.aK(a,H.jZ(b)))
return a},
aK:function(a,b){return new H.iz("TypeError: "+P.fL(a)+": type '"+H.lw(a)+"' is not a subtype of type '"+b+"'")},
ma:function(a,b){return new H.fr("CastError: "+P.fL(a)+": type '"+H.lw(a)+"' is not a subtype of type '"+b+"'")},
lw:function(a){var u,t
u=J.a_(a)
if(!!u.$ick){t=H.lB(u)
if(t!=null)return H.jZ(t)
return"Closure"}return H.c0(a)},
nA:function(a){throw H.f(new P.fz(H.H(a)))},
mE:function(a){return new H.hW(a)},
lC:function(a){return v.getIsolateTag(a)},
c:function(a,b){a.$ti=b
return a},
bK:function(a){if(a==null)return
return a.$ti},
oj:function(a,b,c){return H.cd(a["$a"+H.m(c)],H.bK(b))},
cb:function(a,b,c,d){var u
H.H(c)
H.a9(d)
u=H.cd(a["$a"+H.m(c)],H.bK(b))
return u==null?null:u[d]},
al:function(a,b,c){var u
H.H(b)
H.a9(c)
u=H.cd(a["$a"+H.m(b)],H.bK(a))
return u==null?null:u[c]},
x:function(a,b){var u
H.a9(b)
u=H.bK(a)
return u==null?null:u[b]},
jZ:function(a){return H.bJ(a,null)},
bJ:function(a,b){var u,t
H.l(b,"$ib",[P.h],"$ab")
if(a==null)return"dynamic"
if(a===-1)return"void"
if(typeof a==="object"&&a!==null&&a.constructor===Array)return H.ce(a[0].name)+H.kp(a,1,b)
if(typeof a=="function")return H.ce(a.name)
if(a===-2)return"dynamic"
if(typeof a==="number"){H.a9(a)
if(b==null||a<0||a>=b.length)return"unexpected-generic-index:"+a
u=b.length
t=u-a-1
if(t<0||t>=u)return H.j(b,t)
return H.m(b[t])}if('func' in a)return H.mX(a,b)
if('futureOr' in a)return"FutureOr<"+H.bJ("type" in a?a.type:null,b)+">"
return"unknown-reified-type"},
mX:function(a,b){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c
u=[P.h]
H.l(b,"$ib",u,"$ab")
if("bounds" in a){t=a.bounds
if(b==null){b=H.c([],u)
s=null}else s=b.length
r=b.length
for(q=t.length,p=q;p>0;--p)C.a.h(b,"T"+(r+p))
for(o="<",n="",p=0;p<q;++p,n=", "){o+=n
u=b.length
m=u-p-1
if(m<0)return H.j(b,m)
o=C.j.p(o,b[m])
l=t[p]
if(l!=null&&l!==P.N)o+=" extends "+H.bJ(l,b)}o+=">"}else{o=""
s=null}k=!!a.v?"void":H.bJ(a.ret,b)
if("args" in a){j=a.args
for(u=j.length,i="",h="",g=0;g<u;++g,h=", "){f=j[g]
i=i+h+H.bJ(f,b)}}else{i=""
h=""}if("opt" in a){e=a.opt
i+=h+"["
for(u=e.length,h="",g=0;g<u;++g,h=", "){f=e[g]
i=i+h+H.bJ(f,b)}i+="]"}if("named" in a){d=a.named
i+=h+"{"
for(u=H.nc(d),m=u.length,h="",g=0;g<m;++g,h=", "){c=H.H(u[g])
i=i+h+H.bJ(d[c],b)+(" "+H.m(c))}i+="}"}if(s!=null)b.length=s
return o+"("+i+") => "+k},
kp:function(a,b,c){var u,t,s,r,q,p
H.l(c,"$ib",[P.h],"$ab")
if(a==null)return""
u=new P.bk("")
for(t=b,s="",r=!0,q="";t<a.length;++t,s=", "){u.a=q+s
p=a[t]
if(p!=null)r=!1
q=u.a+=H.bJ(p,c)}return"<"+u.i(0)+">"},
cd:function(a,b){if(a==null)return b
a=a.apply(null,b)
if(a==null)return
if(typeof a==="object"&&a!==null&&a.constructor===Array)return a
if(typeof a=="function")return a.apply(null,b)
return b},
d8:function(a,b,c,d){var u,t
H.H(b)
H.kw(c)
H.H(d)
if(a==null)return!1
u=H.bK(a)
t=J.a_(a)
if(t[b]==null)return!1
return H.lz(H.cd(t[d],u),null,c,null)},
l:function(a,b,c,d){H.H(b)
H.kw(c)
H.H(d)
if(a==null)return a
if(H.d8(a,b,c,d))return a
throw H.f(H.aK(a,function(e,f){return e.replace(/[^<,> ]+/g,function(g){return f[g]||g})}(H.ce(b.substring(2))+H.kp(c,0,null),v.mangledGlobalNames)))},
lz:function(a,b,c,d){var u,t
if(c==null)return!0
if(a==null){u=c.length
for(t=0;t<u;++t)if(!H.aE(null,null,c[t],d))return!1
return!0}u=a.length
for(t=0;t<u;++t)if(!H.aE(a[t],b,c[t],d))return!1
return!0},
og:function(a,b,c){return a.apply(b,H.cd(J.a_(b)["$a"+H.m(c)],H.bK(b)))},
lE:function(a){var u
if(typeof a==="number")return!1
if('futureOr' in a){u="type" in a?a.type:null
return a==null||a.name==="N"||a.name==="K"||a===-1||a===-2||H.lE(u)}return!1},
kr:function(a,b){var u,t
if(a==null)return b==null||b.name==="N"||b.name==="K"||b===-1||b===-2||H.lE(b)
if(b==null||b===-1||b.name==="N"||b===-2)return!0
if(typeof b=="object"){if('futureOr' in b)if(H.kr(a,"type" in b?b.type:null))return!0
if('func' in b)return H.ff(a,b)}u=J.a_(a).constructor
t=H.bK(a)
if(t!=null){t=t.slice()
t.splice(0,0,u)
u=t}return H.aE(u,null,b,null)},
E:function(a,b){if(a!=null&&!H.kr(a,b))throw H.f(H.aK(a,H.jZ(b)))
return a},
aE:function(a,b,c,d){var u,t,s,r,q,p,o,n,m
if(a===c)return!0
if(c==null||c===-1||c.name==="N"||c===-2)return!0
if(a===-2)return!0
if(a==null||a===-1||a.name==="N"||a===-2){if(typeof c==="number")return!1
if('futureOr' in c)return H.aE(a,b,"type" in c?c.type:null,d)
return!1}if(typeof a==="number")return!1
if(typeof c==="number")return!1
if(a.name==="K")return!0
if('func' in c)return H.ls(a,b,c,d)
if('func' in a)return c.name==="by"
u=typeof a==="object"&&a!==null&&a.constructor===Array
t=u?a[0]:a
if('futureOr' in c){s="type" in c?c.type:null
if('futureOr' in a)return H.aE("type" in a?a.type:null,b,s,d)
else if(H.aE(a,b,s,d))return!0
else{if(!('$i'+"cr" in t.prototype))return!1
r=t.prototype["$a"+"cr"]
q=H.cd(r,u?a.slice(1):null)
return H.aE(typeof q==="object"&&q!==null&&q.constructor===Array?q[0]:null,b,s,d)}}p=typeof c==="object"&&c!==null&&c.constructor===Array
o=p?c[0]:c
if(o!==t){n=o.name
if(!('$i'+n in t.prototype))return!1
m=t.prototype["$a"+n]}else m=null
if(!p)return!0
u=u?a.slice(1):null
p=c.slice(1)
return H.lz(H.cd(m,u),b,p,d)},
ls:function(a,b,c,d){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g
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
return H.ns(h,b,g,d)},
ns:function(a,b,c,d){var u,t,s,r
u=Object.getOwnPropertyNames(c)
for(t=u.length,s=0;s<t;++s){r=u[s]
if(!Object.hasOwnProperty.call(a,r))return!1
if(!H.aE(c[r],d,a[r],b))return!1}return!0},
oh:function(a,b,c){Object.defineProperty(a,H.H(b),{value:c,enumerable:false,writable:true,configurable:true})},
nq:function(a){var u,t,s,r,q,p
u=H.H($.lD.$1(a))
t=$.jQ[u]
if(t!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:t,enumerable:false,writable:true,configurable:true})
return t.i}s=$.jW[u]
if(s!=null)return s
r=v.interceptorsByTag[u]
if(r==null){u=H.H($.ly.$2(a,u))
if(u!=null){t=$.jQ[u]
if(t!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:t,enumerable:false,writable:true,configurable:true})
return t.i}s=$.jW[u]
if(s!=null)return s
r=v.interceptorsByTag[u]}}if(r==null)return
s=r.prototype
q=u[0]
if(q==="!"){t=H.jY(s)
$.jQ[u]=t
Object.defineProperty(a,v.dispatchPropertyName,{value:t,enumerable:false,writable:true,configurable:true})
return t.i}if(q==="~"){$.jW[u]=s
return s}if(q==="-"){p=H.jY(s)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}if(q==="+")return H.lG(a,s)
if(q==="*")throw H.f(P.le(u))
if(v.leafTags[u]===true){p=H.jY(s)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}else return H.lG(a,s)},
lG:function(a,b){var u=Object.getPrototypeOf(a)
Object.defineProperty(u,v.dispatchPropertyName,{value:J.kx(b,u,null,null),enumerable:false,writable:true,configurable:true})
return b},
jY:function(a){return J.kx(a,!1,null,!!a.$iF)},
nr:function(a,b,c){var u=b.prototype
if(v.leafTags[a]===true)return H.jY(u)
else return J.kx(u,c,null,null)},
nl:function(){if(!0===$.kv)return
$.kv=!0
H.nm()},
nm:function(){var u,t,s,r,q,p,o,n
$.jQ=Object.create(null)
$.jW=Object.create(null)
H.nk()
u=v.interceptorsByTag
t=Object.getOwnPropertyNames(u)
if(typeof window!="undefined"){window
s=function(){}
for(r=0;r<t.length;++r){q=t[r]
p=$.lI.$1(q)
if(p!=null){o=H.nr(q,u[q],p)
if(o!=null){Object.defineProperty(p,v.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
s.prototype=p}}}}for(r=0;r<t.length;++r){q=t[r]
if(/^[A-Za-z_]/.test(q)){n=u[q]
u["!"+q]=n
u["~"+q]=n
u["-"+q]=n
u["+"+q]=n
u["*"+q]=n}}},
nk:function(){var u,t,s,r,q,p,o
u=C.S()
u=H.c7(C.P,H.c7(C.U,H.c7(C.A,H.c7(C.A,H.c7(C.T,H.c7(C.Q,H.c7(C.R(C.B),u)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){t=dartNativeDispatchHooksTransformer
if(typeof t=="function")t=[t]
if(t.constructor==Array)for(s=0;s<t.length;++s){r=t[s]
if(typeof r=="function")u=r(u)||u}}q=u.getTag
p=u.getUnknownTag
o=u.prototypeForTag
$.lD=new H.jT(q)
$.ly=new H.jU(p)
$.lI=new H.jV(o)},
c7:function(a,b){return a(b)||b},
mo:function(a,b,c,d){var u,t,s,r
u=b?"m":""
t=c?"":"i"
s=d?"g":""
r=function(e,f){try{return new RegExp(e,f)}catch(q){return q}}(a,u+t+s)
if(r instanceof RegExp)return r
throw H.f(new P.fV("Illegal RegExp pattern ("+String(r)+")",a,null))},
ny:function(a,b,c){var u=a.indexOf(b,c)
return u>=0},
kz:function(a,b,c){var u,t,s
if(b==="")if(a==="")return c
else{u=a.length
for(t=c,s=0;s<u;++s)t=t+a[s]+c
return t.charCodeAt(0)==0?t:t}else return a.replace(new RegExp(b.replace(/[[\]{}()*+?.\\^$|]/g,"\\$&"),'g'),c.replace(/\$/g,"$$$$"))},
hP:function hP(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.x=null},
ix:function ix(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
hF:function hF(a,b){this.a=a
this.b=b},
h7:function h7(a,b,c){this.a=a
this.b=b
this.c=c},
iK:function iK(a){this.a=a},
k1:function k1(a){this.a=a},
eT:function eT(a){this.a=a
this.b=null},
ck:function ck(){},
ij:function ij(){},
i9:function i9(){},
ch:function ch(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
iz:function iz(a){this.a=a},
fr:function fr(a){this.a=a},
hW:function hW(a){this.a=a},
aU:function aU(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
hb:function hb(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
dC:function dC(a,b){this.a=a
this.$ti=b},
hc:function hc(a,b,c){var _=this
_.a=a
_.b=b
_.d=_.c=null
_.$ti=c},
jT:function jT(a){this.a=a},
jU:function jU(a){this.a=a},
jV:function jV(a){this.a=a},
h6:function h6(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
d5:function(a){return a},
bI:function(a,b,c){if(a>>>0!==a||a>=c)throw H.f(H.c9(b,a))},
mW:function(a,b,c){var u
if(!(a>>>0!==a))u=b>>>0!==b||a>b||b>c
else u=!0
if(u)throw H.f(H.nb(a,b,c))
return b},
cz:function cz(){},
dL:function dL(){},
cy:function cy(){},
dM:function dM(){},
hw:function hw(){},
hx:function hx(){},
hy:function hy(){},
hz:function hz(){},
hA:function hA(){},
dN:function dN(){},
hB:function hB(){},
cY:function cY(){},
cZ:function cZ(){},
d_:function d_(){},
d0:function d0(){},
nc:function(a){return J.kQ(a?Object.keys(a):[],null)},
nu:function(a){if(typeof dartPrint=="function"){dartPrint(a)
return}if(typeof console=="object"&&typeof console.log!="undefined"){console.log(a)
return}if(typeof window=="object")return
if(typeof print=="function"){print(a)
return}throw"Unable to print message: "+String(a)}},J={
kx:function(a,b,c,d){return{i:a,p:b,e:c,x:d}},
fg:function(a){var u,t,s,r,q
u=a[v.dispatchPropertyName]
if(u==null)if($.kv==null){H.nl()
u=a[v.dispatchPropertyName]}if(u!=null){t=u.p
if(!1===t)return u.i
if(!0===t)return a
s=Object.getPrototypeOf(a)
if(t===s)return u.i
if(u.e===s)throw H.f(P.le("Return interceptor for "+H.m(t(a,u))))}r=a.constructor
q=r==null?null:r[$.kA()]
if(q!=null)return q
q=H.nq(a)
if(q!=null)return q
if(typeof a=="function")return C.V
t=Object.getPrototypeOf(a)
if(t==null)return C.D
if(t===Object.prototype)return C.D
if(typeof r=="function"){Object.defineProperty(r,$.kA(),{value:C.w,enumerable:false,writable:true,configurable:true})
return C.w}return C.w},
mn:function(a,b){if(typeof a!=="number"||Math.floor(a)!==a)throw H.f(P.k4(a,"length","is not an integer"))
if(a<0||a>4294967295)throw H.f(P.aB(a,0,4294967295,"length",null))
return J.kQ(new Array(a),b)},
kQ:function(a,b){return J.h4(H.c(a,[b]))},
h4:function(a){H.kw(a)
a.fixed$length=Array
return a},
a_:function(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.dx.prototype
return J.dw.prototype}if(typeof a=="string")return J.be.prototype
if(a==null)return J.dy.prototype
if(typeof a=="boolean")return J.h5.prototype
if(a.constructor==Array)return J.aG.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bf.prototype
return a}if(a instanceof P.N)return a
return J.fg(a)},
ne:function(a){if(typeof a=="number")return J.bC.prototype
if(typeof a=="string")return J.be.prototype
if(a==null)return a
if(a.constructor==Array)return J.aG.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bf.prototype
return a}if(a instanceof P.N)return a
return J.fg(a)},
jR:function(a){if(typeof a=="string")return J.be.prototype
if(a==null)return a
if(a.constructor==Array)return J.aG.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bf.prototype
return a}if(a instanceof P.N)return a
return J.fg(a)},
jS:function(a){if(a==null)return a
if(a.constructor==Array)return J.aG.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bf.prototype
return a}if(a instanceof P.N)return a
return J.fg(a)},
nf:function(a){if(typeof a=="number")return J.bC.prototype
if(a==null)return a
if(!(a instanceof P.N))return J.bG.prototype
return a},
ng:function(a){if(typeof a=="number")return J.bC.prototype
if(typeof a=="string")return J.be.prototype
if(a==null)return a
if(!(a instanceof P.N))return J.bG.prototype
return a},
ku:function(a){if(typeof a=="string")return J.be.prototype
if(a==null)return a
if(!(a instanceof P.N))return J.bG.prototype
return a},
as:function(a){if(a==null)return a
if(typeof a!="object"){if(typeof a=="function")return J.bf.prototype
return a}if(a instanceof P.N)return a
return J.fg(a)},
m0:function(a,b){if(typeof a=="number"&&typeof b=="number")return a+b
return J.ne(a).p(a,b)},
a0:function(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.a_(a).A(a,b)},
kD:function(a,b){if(typeof a=="number"&&typeof b=="number")return a*b
return J.ng(a).v(a,b)},
m1:function(a,b){if(typeof a=="number"&&typeof b=="number")return a-b
return J.nf(a).t(a,b)},
m2:function(a,b){if(typeof b==="number")if(a.constructor==Array||typeof a=="string"||H.no(a,a[v.dispatchPropertyName]))if(b>>>0===b&&b<a.length)return a[b]
return J.jR(a).j(a,b)},
fh:function(a,b){return J.as(a).i_(a,b)},
m3:function(a,b,c,d){return J.as(a).j1(a,b,c,d)},
kE:function(a,b){return J.as(a).C(a,b)},
k2:function(a,b){return J.jS(a).H(a,b)},
m4:function(a,b){return J.jS(a).P(a,b)},
m5:function(a){return J.as(a).gj9(a)},
bL:function(a){return J.a_(a).gJ(a)},
bM:function(a){return J.jS(a).gT(a)},
bN:function(a){return J.jR(a).gl(a)},
m6:function(a){return J.as(a).gkj(a)},
k3:function(a,b){return J.as(a).aW(a,b)},
kF:function(a){return J.jS(a).ka(a)},
m7:function(a,b,c){return J.ku(a).bg(a,b,c)},
m8:function(a){return J.ku(a).kq(a)},
aM:function(a){return J.a_(a).i(a)},
a:function a(){},
h5:function h5(){},
dy:function dy(){},
dz:function dz(){},
hJ:function hJ(){},
bG:function bG(){},
bf:function bf(){},
aG:function aG(a){this.$ti=a},
kc:function kc(a){this.$ti=a},
am:function am(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=null
_.$ti=d},
bC:function bC(){},
dx:function dx(){},
dw:function dw(){},
be:function be(){}},P={
mL:function(){var u,t,s
u={}
if(self.scheduleImmediate!=null)return P.n3()
if(self.MutationObserver!=null&&self.document!=null){t=self.document.createElement("div")
s=self.document.createElement("span")
u.a=null
new self.MutationObserver(H.c8(new P.j5(u),1)).observe(t,{childList:true})
return new P.j4(u,t,s)}else if(self.setImmediate!=null)return P.n4()
return P.n5()},
mM:function(a){self.scheduleImmediate(H.c8(new P.j6(H.n(a,{func:1,ret:-1})),0))},
mN:function(a){self.setImmediate(H.c8(new P.j7(H.n(a,{func:1,ret:-1})),0))},
mO:function(a){P.ki(C.q,H.n(a,{func:1,ret:-1}))},
ki:function(a,b){var u
H.n(b,{func:1,ret:-1})
u=C.d.a3(a.a,1000)
return P.mU(u<0?0:u,b)},
lc:function(a,b){var u
H.n(b,{func:1,ret:-1,args:[P.b5]})
u=C.d.a3(a.a,1000)
return P.mV(u<0?0:u,b)},
mU:function(a,b){var u=new P.eZ(!0)
u.fk(a,b)
return u},
mV:function(a,b){var u=new P.eZ(!1)
u.fl(a,b)
return u},
mP:function(a,b){var u,t,s
b.a=1
try{a.ex(new P.jg(b),new P.jh(b),null)}catch(s){u=H.az(s)
t=H.cc(s)
P.nw(new P.ji(b,u,t))}},
ln:function(a,b){var u,t
for(;u=a.a,u===2;)a=H.k(a.c,"$iaD")
if(u>=4){t=b.ci()
b.a=a.a
b.c=a.c
P.cX(b,t)}else{t=H.k(b.c,"$iba")
b.a=2
b.c=a
a.dz(t)}},
cX:function(a,b){var u,t,s,r,q,p,o,n,m,l,k,j,i,h
u={}
u.a=a
for(t=a;!0;){s={}
r=t.a===8
if(b==null){if(r){q=H.k(t.c,"$iaf")
t=t.b
p=q.a
o=q.b
t.toString
P.jL(null,null,t,p,o)}return}for(;n=b.a,n!=null;b=n){b.a=null
P.cX(u.a,b)}t=u.a
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
if(k){H.k(m,"$iaf")
t=t.b
p=m.a
o=m.b
t.toString
P.jL(null,null,t,p,o)
return}j=$.Z
if(j!=l)$.Z=l
else j=null
t=b.c
if(t===8)new P.jm(u,s,b,r).$0()
else if(p){if((t&1)!==0)new P.jl(s,b,m).$0()}else if((t&2)!==0)new P.jk(u,s,b).$0()
if(j!=null)$.Z=j
t=s.b
if(!!J.a_(t).$icr){if(t.a>=4){i=H.k(o.c,"$iba")
o.c=null
b=o.bk(i)
o.a=t.a
o.c=t.c
u.a=t
continue}else P.ln(t,o)
return}}h=b.b
i=H.k(h.c,"$iba")
h.c=null
b=h.bk(i)
t=s.a
p=s.b
if(!t){H.E(p,H.x(h,0))
h.a=4
h.c=p}else{H.k(p,"$iaf")
h.a=8
h.c=p}u.a=h
t=h}},
n_:function(a,b){if(H.ff(a,{func:1,args:[P.N,P.aq]}))return H.n(a,{func:1,ret:null,args:[P.N,P.aq]})
if(H.ff(a,{func:1,args:[P.N]}))return H.n(a,{func:1,ret:null,args:[P.N]})
throw H.f(P.k4(a,"onError","Error handler must accept one Object or one Object and a StackTrace as arguments, and return a a valid result"))},
mZ:function(){var u,t
for(;u=$.c6,u!=null;){$.d7=null
t=u.b
$.c6=t
if(t==null)$.d6=null
u.a.$0()}},
n2:function(){$.kn=!0
try{P.mZ()}finally{$.d7=null
$.kn=!1
if($.c6!=null)$.kB().$1(P.lA())}},
lv:function(a){var u=new P.el(H.n(a,{func:1,ret:-1}))
if($.c6==null){$.d6=u
$.c6=u
if(!$.kn)$.kB().$1(P.lA())}else{$.d6.b=u
$.d6=u}},
n1:function(a){var u,t,s
H.n(a,{func:1,ret:-1})
u=$.c6
if(u==null){P.lv(a)
$.d7=$.d6
return}t=new P.el(a)
s=$.d7
if(s==null){t.b=u
$.d7=t
$.c6=t}else{t.b=s.b
s.b=t
$.d7=t
if(t.b==null)$.d6=t}},
nw:function(a){var u,t
u={func:1,ret:-1}
H.n(a,u)
t=$.Z
if(C.l===t){P.jN(null,null,C.l,a)
return}t.toString
P.jN(null,null,t,H.n(t.cp(a),u))},
lb:function(a,b){var u,t
u={func:1,ret:-1}
H.n(b,u)
t=$.Z
if(t===C.l){t.toString
return P.ki(a,b)}return P.ki(a,H.n(t.cp(b),u))},
mK:function(a,b){var u,t,s
u={func:1,ret:-1,args:[P.b5]}
H.n(b,u)
t=$.Z
if(t===C.l){t.toString
return P.lc(a,b)}s=t.dM(b,P.b5)
$.Z.toString
return P.lc(a,H.n(s,u))},
jL:function(a,b,c,d,e){var u={}
u.a=d
P.n1(new P.jM(u,e))},
lt:function(a,b,c,d,e){var u,t
H.n(d,{func:1,ret:e})
t=$.Z
if(t===c)return d.$0()
$.Z=c
u=t
try{t=d.$0()
return t}finally{$.Z=u}},
lu:function(a,b,c,d,e,f,g){var u,t
H.n(d,{func:1,ret:f,args:[g]})
H.E(e,g)
t=$.Z
if(t===c)return d.$1(e)
$.Z=c
u=t
try{t=d.$1(e)
return t}finally{$.Z=u}},
n0:function(a,b,c,d,e,f,g,h,i){var u,t
H.n(d,{func:1,ret:g,args:[h,i]})
H.E(e,h)
H.E(f,i)
t=$.Z
if(t===c)return d.$2(e,f)
$.Z=c
u=t
try{t=d.$2(e,f)
return t}finally{$.Z=u}},
jN:function(a,b,c,d){var u
H.n(d,{func:1,ret:-1})
u=C.l!==c
if(u)d=!(!u||!1)?c.cp(d):c.ja(d,-1)
P.lv(d)},
j5:function j5(a){this.a=a},
j4:function j4(a,b,c){this.a=a
this.b=b
this.c=c},
j6:function j6(a){this.a=a},
j7:function j7(a){this.a=a},
eZ:function eZ(a){this.a=a
this.b=null
this.c=0},
jH:function jH(a,b){this.a=a
this.b=b},
jG:function jG(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
ba:function ba(a,b,c,d,e){var _=this
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
jf:function jf(a,b){this.a=a
this.b=b},
jj:function jj(a,b){this.a=a
this.b=b},
jg:function jg(a){this.a=a},
jh:function jh(a){this.a=a},
ji:function ji(a,b,c){this.a=a
this.b=b
this.c=c},
jm:function jm(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
jn:function jn(a){this.a=a},
jl:function jl(a,b,c){this.a=a
this.b=b
this.c=c},
jk:function jk(a,b,c){this.a=a
this.b=b
this.c=c},
el:function el(a){this.a=a
this.b=null},
ic:function ic(){},
ie:function ie(a,b){this.a=a
this.b=b},
ig:function ig(a,b){this.a=a
this.b=b},
cG:function cG(){},
id:function id(){},
b5:function b5(){},
af:function af(a,b){this.a=a
this.b=b},
jK:function jK(){},
jM:function jM(a,b){this.a=a
this.b=b},
jt:function jt(){},
jv:function jv(a,b,c){this.a=a
this.b=b
this.c=c},
ju:function ju(a,b){this.a=a
this.b=b},
jw:function jw(a,b,c){this.a=a
this.b=b
this.c=c},
kR:function(a,b){return new H.aU([a,b])},
mp:function(a){return H.nd(a,new H.aU([null,null]))},
dD:function(a,b,c,d){return new P.jr([d])},
kl:function(){var u=Object.create(null)
u["<non-identifier-key>"]=u
delete u["<non-identifier-key>"]
return u},
mT:function(a,b,c){var u=new P.eA(a,b,[c])
u.c=a.e
return u},
mk:function(a,b,c){var u,t
if(P.ko(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}u=H.c([],[P.h])
t=$.db()
C.a.h(t,a)
try{P.mY(a,u)}finally{if(0>=t.length)return H.j(t,-1)
t.pop()}t=P.l9(b,H.np(u,"$id"),", ")+c
return t.charCodeAt(0)==0?t:t},
kb:function(a,b,c){var u,t,s
if(P.ko(a))return b+"..."+c
u=new P.bk(b)
t=$.db()
C.a.h(t,a)
try{s=u
s.a=P.l9(s.a,a,", ")}finally{if(0>=t.length)return H.j(t,-1)
t.pop()}u.a+=c
t=u.a
return t.charCodeAt(0)==0?t:t},
ko:function(a){var u,t
for(u=0;t=$.db(),u<t.length;++u)if(a===t[u])return!0
return!1},
mY:function(a,b){var u,t,s,r,q,p,o,n,m,l
H.l(b,"$ib",[P.h],"$ab")
u=a.gT(a)
t=0
s=0
while(!0){if(!(t<80||s<3))break
if(!u.B())return
r=H.m(u.gI(u))
C.a.h(b,r)
t+=r.length+2;++s}if(!u.B()){if(s<=5)return
if(0>=b.length)return H.j(b,-1)
q=b.pop()
if(0>=b.length)return H.j(b,-1)
p=b.pop()}else{o=u.gI(u);++s
if(!u.B()){if(s<=4){C.a.h(b,H.m(o))
return}q=H.m(o)
if(0>=b.length)return H.j(b,-1)
p=b.pop()
t+=q.length+2}else{n=u.gI(u);++s
for(;u.B();o=n,n=m){m=u.gI(u);++s
if(s>100){while(!0){if(!(t>75&&s>3))break
if(0>=b.length)return H.j(b,-1)
t-=b.pop().length+2;--s}C.a.h(b,"...")
return}}p=H.m(o)
q=H.m(n)
t+=q.length+p.length+4}}if(s>b.length+2){t+=5
l="..."}else l=null
while(!0){if(!(t>80&&b.length>3))break
if(0>=b.length)return H.j(b,-1)
t-=b.pop().length+2
if(l==null){t+=5
l="..."}}if(l!=null)C.a.h(b,l)
C.a.h(b,p)
C.a.h(b,q)},
kS:function(a,b){var u,t,s
u=P.dD(null,null,null,b)
for(t=a.length,s=0;s<a.length;a.length===t||(0,H.C)(a),++s)u.h(0,H.E(a[s],b))
return u},
kU:function(a){var u,t
u={}
if(P.ko(a))return"{...}"
t=new P.bk("")
try{C.a.h($.db(),a)
t.a+="{"
u.a=!0
J.m4(a,new P.hg(u,t))
t.a+="}"}finally{u=$.db()
if(0>=u.length)return H.j(u,-1)
u.pop()}u=t.a
return u.charCodeAt(0)==0?u:u},
jr:function jr(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
c5:function c5(a){this.a=a
this.c=this.b=null},
eA:function eA(a,b,c){var _=this
_.a=a
_.b=b
_.d=_.c=null
_.$ti=c},
hd:function hd(){},
v:function v(){},
hf:function hf(){},
hg:function hg(a,b){this.a=a
this.b=b},
aa:function aa(){},
jy:function jy(){},
eB:function eB(){},
cl:function cl(){},
cm:function cm(){},
fJ:function fJ(){},
h0:function h0(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
h_:function h_(a){this.a=a},
iN:function iN(a){this.a=a},
iO:function iO(){},
jI:function jI(a){this.b=this.a=0
this.c=a},
mj:function(a){if(a instanceof H.ck)return a.i(0)
return"Instance of '"+H.c0(a)+"'"},
mq:function(a,b,c,d){var u,t
H.E(b,d)
u=J.mn(a,d)
if(a!==0&&!0)for(t=0;t<u.length;++t)C.a.Y(u,t,b)
return H.l(u,"$ib",[d],"$ab")},
kT:function(a,b,c){var u,t,s
u=[c]
t=H.c([],u)
for(s=J.bM(a);s.B();)C.a.h(t,H.E(s.gI(s),c))
if(b)return t
return H.l(J.h4(t),"$ib",u,"$ab")},
kh:function(a,b,c){var u,t
u=P.B
H.l(a,"$id",[u],"$ad")
if(a.constructor===Array){H.l(a,"$iaG",[u],"$aaG")
t=a.length
c=P.kg(b,c,t,null,null,null)
return H.l3(b>0||c<t?C.a.eW(a,b,c):a)}return P.mI(a,b,c)},
mI:function(a,b,c){var u,t,s
H.l(a,"$id",[P.B],"$ad")
u=J.bM(a)
for(t=0;t<b;++t)if(!u.B())throw H.f(P.aB(b,0,t,null,null))
s=[]
for(;u.B();)s.push(u.gI(u))
return H.l3(s)},
mC:function(a,b,c){return new H.h6(a,H.mo(a,!1,!0,!1))},
l9:function(a,b,c){var u=J.bM(b)
if(!u.B())return a
if(c.length===0){do a+=H.m(u.gI(u))
while(u.B())}else{a+=H.m(u.gI(u))
for(;u.B();)a=a+c+H.m(u.gI(u))}return a},
lr:function(a,b,c,d){var u,t,s,r,q,p
H.l(a,"$ib",[P.B],"$ab")
if(c===C.x){u=$.m_().b
u=u.test(b)}else u=!1
if(u)return b
t=C.I.jj(H.E(b,H.al(c,"cl",0)))
for(u=t.length,s=0,r="";s<u;++s){q=t[s]
if(q<128){p=q>>>4
if(p>=8)return H.j(a,p)
p=(a[p]&1<<(q&15))!==0}else p=!1
if(p)r+=H.kf(q)
else r=r+"%"+"0123456789ABCDEF"[q>>>4&15]+"0123456789ABCDEF"[q&15]}return r.charCodeAt(0)==0?r:r},
mf:function(a){var u,t
u=Math.abs(a)
t=a<0?"-":""
if(u>=1000)return""+a
if(u>=100)return t+"0"+u
if(u>=10)return t+"00"+u
return t+"000"+u},
mg:function(a){if(a>=100)return""+a
if(a>=10)return"0"+a
return"00"+a},
dl:function(a){if(a>=10)return""+a
return"0"+a},
kM:function(a,b,c,d,e,f){return new P.aQ(864e8*a+36e8*b+6e7*e+1e6*f+1000*d+c)},
fL:function(a){if(typeof a==="number"||typeof a==="boolean"||null==a)return J.aM(a)
if(typeof a==="string")return JSON.stringify(a)
return P.mj(a)},
m9:function(a){return new P.aF(!1,null,null,a)},
k4:function(a,b,c){return new P.aF(!0,a,b,c)},
dU:function(a,b,c){return new P.c1(null,null,!0,a,b,"Value not in range")},
aB:function(a,b,c,d,e){return new P.c1(b,c,!0,a,d,"Invalid value")},
kg:function(a,b,c,d,e,f){if(0>a||a>c)throw H.f(P.aB(a,0,c,"start",f))
if(b!=null){if(a>b||b>c)throw H.f(P.aB(b,a,c,"end",f))
return b}return c},
W:function(a,b,c,d,e){var u=H.a9(e==null?J.bN(b):e)
return new P.h2(b,u,!0,a,c,"Index out of range")},
ai:function(a){return new P.iL(a)},
le:function(a){return new P.iJ(a)},
l8:function(a){return new P.c3(a)},
bv:function(a){return new P.fu(a)},
r:function(a){return new P.et(a)},
at:function(a){H.nu(a)},
O:function O(){},
an:function an(a,b){this.a=a
this.b=b},
z:function z(){},
aQ:function aQ(a){this.a=a},
fF:function fF(){},
fG:function fG(){},
bx:function bx(){},
dP:function dP(){},
aF:function aF(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
c1:function c1(a,b,c,d,e,f){var _=this
_.e=a
_.f=b
_.a=c
_.b=d
_.c=e
_.d=f},
h2:function h2(a,b,c,d,e,f){var _=this
_.e=a
_.f=b
_.a=c
_.b=d
_.c=e
_.d=f},
iL:function iL(a){this.a=a},
iJ:function iJ(a){this.a=a},
c3:function c3(a){this.a=a},
fu:function fu(a){this.a=a},
hI:function hI(){},
e0:function e0(){},
fz:function fz(a){this.a=a},
et:function et(a){this.a=a},
fV:function fV(a,b,c){this.a=a
this.b=b
this.c=c},
by:function by(){},
B:function B(){},
d:function d(){},
aT:function aT(){},
b:function b(){},
P:function P(){},
K:function K(){},
a4:function a4(){},
N:function N(){},
aq:function aq(){},
h:function h(){},
bk:function bk(a){this.a=a},
n9:function(a){var u,t
u=J.a_(a)
if(!!u.$ibz){t=u.gdU(a)
if(t.constructor===Array)if(typeof CanvasPixelArray!=="undefined"){t.constructor=CanvasPixelArray
t.BYTES_PER_ELEMENT=1}return a}return new P.f3(a.data,a.height,a.width)},
n8:function(a){if(a instanceof P.f3)return{data:a.a,height:a.b,width:a.c}
return a},
bm:function(a){var u,t,s,r,q
if(a==null)return
u=P.kR(P.h,null)
t=Object.getOwnPropertyNames(a)
for(s=t.length,r=0;r<t.length;t.length===s||(0,H.C)(t),++r){q=H.H(t[r])
u.Y(0,q,a[q])}return u},
n7:function(a,b){var u={}
a.P(0,new P.jO(u))
return u},
f3:function f3(a,b,c){this.a=a
this.b=b
this.c=c},
jO:function jO(a){this.a=a},
fR:function fR(a,b){this.a=a
this.b=b},
fS:function fS(){},
fT:function fT(){},
jq:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
mS:function(a){a=536870911&a+((67108863&a)<<3)
a^=a>>>11
return 536870911&a+((16383&a)<<15)},
js:function js(){},
ac:function ac(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=e},
bg:function bg(){},
h9:function h9(){},
bi:function bi(){},
hG:function hG(){},
hN:function hN(){},
cD:function cD(){},
ih:function ih(){},
p:function p(){},
bl:function bl(){},
iw:function iw(){},
ey:function ey(){},
ez:function ez(){},
eJ:function eJ(){},
eK:function eK(){},
eV:function eV(){},
eW:function eW(){},
f1:function f1(){},
f2:function f2(){},
fl:function fl(){},
fm:function fm(){},
fn:function fn(a){this.a=a},
fo:function fo(){},
bO:function bO(){},
hH:function hH(){},
em:function em(){},
df:function df(){},
dt:function dt(){},
dS:function dS(){},
c2:function c2(){},
dW:function dW(){},
e3:function e3(){},
ec:function ec(){},
i8:function i8(){},
eR:function eR(){},
eS:function eS(){}},W={
kG:function(a){var u=document.createElement("a")
return u},
k6:function(a,b){var u=document.createElement("canvas")
return u},
mh:function(a,b,c){var u,t
u=document.body
t=(u&&C.n).af(u,a,b,c)
t.toString
u=W.D
u=new H.cU(new W.ak(t),H.n(new W.fI(),{func:1,ret:P.O,args:[u]}),[u])
return H.k(u.gaH(u),"$iU")},
mi:function(a){H.k(a,"$ie")
return"wheel"},
cq:function(a){var u,t,s
u="element tag unavailable"
try{t=J.m6(a)
if(typeof t==="string")u=a.tagName}catch(s){H.az(s)}return u},
jp:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
lp:function(a,b,c,d){var u,t
u=W.jp(W.jp(W.jp(W.jp(0,a),b),c),d)
t=536870911&u+((67108863&u)<<3)
t^=t>>>11
return 536870911&t+((16383&t)<<15)},
a8:function(a,b,c,d,e){var u=W.lx(new W.je(c),W.o)
if(u!=null&&!0)J.m3(a,b,u,!1)
return new W.jd(a,b,u,!1,[e])},
lo:function(a){var u,t
u=W.kG(null)
t=window.location
u=new W.bH(new W.jx(u,t))
u.f9(a)
return u},
mQ:function(a,b,c,d){H.k(a,"$iU")
H.H(b)
H.H(c)
H.k(d,"$ibH")
return!0},
mR:function(a,b,c,d){var u,t,s
H.k(a,"$iU")
H.H(b)
H.H(c)
u=H.k(d,"$ibH").a
t=u.a
t.href=c
s=t.hostname
u=u.b
if(!(s==u.hostname&&t.port==u.port&&t.protocol==u.protocol))if(s==="")if(t.port===""){u=t.protocol
u=u===":"||u===""}else u=!1
else u=!1
else u=!0
return u},
lq:function(){var u,t,s,r,q
u=P.h
t=P.kS(C.t,u)
s=H.x(C.t,0)
r=H.n(new W.jF(),{func:1,ret:u,args:[s]})
q=H.c(["TEMPLATE"],[u])
t=new W.jE(t,P.dD(null,null,null,u),P.dD(null,null,null,u),P.dD(null,null,null,u),null)
t.fj(null,new H.hj(C.t,r,[s,u]),q,null)
return t},
lx:function(a,b){var u
H.n(a,{func:1,ret:-1,args:[b]})
u=$.Z
if(u===C.l)return a
return u.dM(a,b)},
w:function w(){},
fi:function fi(){},
dc:function dc(){},
fj:function fj(){},
cg:function cg(){},
de:function de(){},
bs:function bs(){},
bQ:function bQ(){},
bR:function bR(){},
bt:function bt(){},
cn:function cn(){},
fv:function fv(){},
T:function T(){},
co:function co(){},
fw:function fw(){},
aO:function aO(){},
aP:function aP(){},
fx:function fx(){},
fy:function fy(){},
fB:function fB(){},
aA:function aA(){},
cp:function cp(){},
fC:function fC(){},
dm:function dm(){},
dn:function dn(){},
dp:function dp(){},
fD:function fD(){},
fE:function fE(){},
j9:function j9(a,b){this.a=a
this.b=b},
U:function U(){},
fI:function fI(){},
o:function o(){},
e:function e(){},
aR:function aR(){},
fP:function fP(){},
fQ:function fQ(){},
fU:function fU(){},
aS:function aS(){},
du:function du(){},
fZ:function fZ(){},
bV:function bV(){},
dv:function dv(){},
bz:function bz(){},
ct:function ct(){},
aV:function aV(){},
dE:function dE(){},
cw:function cw(){},
hp:function hp(){},
hq:function hq(){},
hr:function hr(a){this.a=a},
hs:function hs(){},
ht:function ht(a){this.a=a},
aY:function aY(){},
hu:function hu(){},
ab:function ab(){},
ak:function ak(a){this.a=a},
D:function D(){},
cA:function cA(){},
b_:function b_(){},
hL:function hL(){},
dT:function dT(){},
hU:function hU(){},
hV:function hV(a){this.a=a},
hX:function hX(){},
b1:function b1(){},
i6:function i6(){},
b2:function b2(){},
i7:function i7(){},
b3:function b3(){},
ia:function ia(){},
ib:function ib(a){this.a=a},
aH:function aH(){},
c4:function c4(){},
e1:function e1(){},
e2:function e2(){},
ii:function ii(){},
cI:function cI(){},
b4:function b4(){},
aI:function aI(){},
ik:function ik(){},
il:function il(){},
iq:function iq(){},
b6:function b6(){},
aJ:function aJ(){},
iu:function iu(){},
iv:function iv(){},
bF:function bF(){},
iM:function iM(){},
j1:function j1(){},
j2:function j2(){},
b9:function b9(){},
cV:function cV(){},
cW:function cW(){},
ja:function ja(){},
eo:function eo(){},
jo:function jo(){},
eG:function eG(){},
jB:function jB(){},
jC:function jC(){},
j8:function j8(){},
jb:function jb(a){this.a=a},
jc:function jc(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
kk:function kk(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
jd:function jd(a,b,c,d,e){var _=this
_.a=0
_.b=a
_.c=b
_.d=c
_.e=d
_.$ti=e},
je:function je(a){this.a=a},
bH:function bH(a){this.a=a},
A:function A(){},
dO:function dO(a){this.a=a},
hD:function hD(a){this.a=a},
hC:function hC(a,b,c){this.a=a
this.b=b
this.c=c},
eO:function eO(){},
jz:function jz(){},
jA:function jA(){},
jE:function jE(a,b,c,d,e){var _=this
_.e=a
_.a=b
_.b=c
_.c=d
_.d=e},
jF:function jF(){},
jD:function jD(){},
ds:function ds(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=null
_.$ti=d},
ax:function ax(){},
jx:function jx(a,b){this.a=a
this.b=b},
f4:function f4(a){this.a=a},
jJ:function jJ(a){this.a=a},
en:function en(){},
ep:function ep(){},
eq:function eq(){},
er:function er(){},
es:function es(){},
eu:function eu(){},
ev:function ev(){},
ew:function ew(){},
ex:function ex(){},
eC:function eC(){},
eD:function eD(){},
eE:function eE(){},
eF:function eF(){},
eH:function eH(){},
eI:function eI(){},
eL:function eL(){},
eM:function eM(){},
eN:function eN(){},
d1:function d1(){},
d2:function d2(){},
eP:function eP(){},
eQ:function eQ(){},
eU:function eU(){},
eX:function eX(){},
eY:function eY(){},
d3:function d3(){},
d4:function d4(){},
f_:function f_(){},
f0:function f0(){},
f5:function f5(){},
f6:function f6(){},
f7:function f7(){},
f8:function f8(){},
f9:function f9(){},
fa:function fa(){},
fb:function fb(){},
fc:function fc(){},
fd:function fd(){},
fe:function fe(){}},O={
k7:function(a){var u=new O.a1([a])
u.bi(a)
return u},
a1:function a1(a){var _=this
_.d=_.c=_.b=_.a=null
_.$ti=a},
cv:function cv(){this.b=this.a=null},
dH:function dH(){var _=this
_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
hk:function hk(a,b){var _=this
_.f=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
dJ:function dJ(){},
hl:function hl(a,b){var _=this
_.a=a
_.b=b
_.e=_.d=_.c=null},
aW:function aW(a,b){var _=this
_.f=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
hn:function hn(a,b){var _=this
_.f=_.ch=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
ho:function ho(a,b){var _=this
_.f=_.ch=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
dY:function dY(){var _=this
_.e=_.d=_.c=_.b=_.a=null},
bE:function bE(){}},E={
kP:function(a,b,c,d,e,f){var u=new E.ag()
u.a=d
u.b=!0
u.sf8(0,O.k7(E.ag))
u.y.aY(u.gjR(),u.gjU())
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
u.sbR(0,e)
return u},
mD:function(a,b){var u=new E.hQ(a,b)
u.f4(a,b)
return u},
mJ:function(a,b,c,d,e){var u,t,s,r
u=J.a_(a)
if(!!u.$ibQ)return E.la(a,!0,!0,!0,!1)
t=W.k6(null,null)
s=t.style
s.width="100%"
s.height="100%"
u.gdQ(a).h(0,t)
r=E.la(t,!0,!0,!0,!1)
r.a=a
return r},
la:function(a,b,c,d,e){var u,t,s,r,q,p,o,n,m,l,k
u=new E.e8()
t=H.k(C.p.cX(a,"webgl2",P.mp(["alpha",!0,"depth",!0,"stencil",!1,"antialias",!0])),"$ic2")
if(t==null)H.u(P.r("Failed to get the rendering context for WebGL."))
u.b=a
u.a=a
u.c=t
u.e=E.mD(t,a)
s=new T.im(t)
s.b=H.a9((t&&C.b).cY(t,3379))
s.c=H.a9(C.b.cY(t,34076))
s.d=0
s.e=0
u.f=s
s=new X.ef(a)
r=new X.h8()
r.c=new X.aw(!1,!1,!1)
r.shX(P.dD(null,null,null,P.B))
s.b=r
r=new X.hv(s)
r.f=0
r.r=V.bj()
r.x=V.bj()
r.Q=1
r.ch=1
s.c=r
r=new X.he(s)
r.r=0
r.x=V.bj()
r.Q=1
r.ch=1
r.cx=1
r.cy=1
s.d=r
r=new X.it(s)
r.e=0
r.f=V.bj()
r.r=V.bj()
s.e=r
s.f=!1
s.r=!1
s.x=!1
s.y=null
s.sfI(H.c([],[[P.cG,P.N]]))
r=s.z
q=document
p=W.ab
o={func:1,ret:-1,args:[p]};(r&&C.a).h(r,W.a8(q,"contextmenu",H.n(s.ghi(),o),!1,p))
r=s.z
n=W.o
m={func:1,ret:-1,args:[n]};(r&&C.a).h(r,W.a8(a,"focus",H.n(s.gho(),m),!1,n))
r=s.z;(r&&C.a).h(r,W.a8(a,"blur",H.n(s.ghc(),m),!1,n))
r=s.z
l=W.aV
k={func:1,ret:-1,args:[l]};(r&&C.a).h(r,W.a8(q,"keyup",H.n(s.ghs(),k),!1,l))
r=s.z;(r&&C.a).h(r,W.a8(q,"keydown",H.n(s.ghq(),k),!1,l))
l=s.z;(l&&C.a).h(l,W.a8(a,"mousedown",H.n(s.ghw(),o),!1,p))
l=s.z;(l&&C.a).h(l,W.a8(a,"mouseup",H.n(s.ghA(),o),!1,p))
l=s.z;(l&&C.a).h(l,W.a8(a,"mousemove",H.n(s.ghy(),o),!1,p))
l=s.z
k=W.b9;(l&&C.a).h(l,W.a8(a,H.H(W.mi(a)),H.n(s.ghC(),{func:1,ret:-1,args:[k]}),!1,k))
k=s.z;(k&&C.a).h(k,W.a8(q,"mousemove",H.n(s.ghk(),o),!1,p))
k=s.z;(k&&C.a).h(k,W.a8(q,"mouseup",H.n(s.ghm(),o),!1,p))
p=s.z;(p&&C.a).h(p,W.a8(q,"pointerlockchange",H.n(s.ghE(),m),!1,n))
n=s.z
m=W.aJ
q={func:1,ret:-1,args:[m]};(n&&C.a).h(n,W.a8(a,"touchstart",H.n(s.ghU(),q),!1,m))
n=s.z;(n&&C.a).h(n,W.a8(a,"touchend",H.n(s.ghQ(),q),!1,m))
n=s.z;(n&&C.a).h(n,W.a8(a,"touchmove",H.n(s.ghS(),q),!1,m))
u.r=s
u.Q=!0
u.ch=!1
u.cx=new P.an(Date.now(),!1)
u.cy=0
u.dB()
return u},
fp:function fp(){},
ag:function ag(){var _=this
_.fx=_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
hQ:function hQ(a,b){var _=this
_.a=a
_.b=b
_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=null},
hR:function hR(a){this.a=a},
hS:function hS(a){this.a=a},
hT:function hT(a){this.a=a},
e8:function e8(){var _=this
_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
ip:function ip(a){this.a=a}},Z={
lm:function(a,b,c){var u
H.l(c,"$ib",[P.B],"$ab")
u=a.createBuffer()
C.b.ap(a,b,u)
C.b.dO(a,b,new Int16Array(H.d5(c)),35044)
C.b.ap(a,b,null)
return new Z.ej(b,u)},
aC:function(a){return new Z.b8(a)},
ej:function ej(a,b){this.a=a
this.b=b},
dg:function dg(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
ek:function ek(a){this.a=a},
cj:function cj(a,b,c){var _=this
_.a=a
_.b=null
_.c=b
_.d=c},
bW:function bW(a,b,c){this.a=a
this.b=b
this.c=c},
b8:function b8(a){this.a=a}},D={
J:function(){var u=new D.bT()
u.sad(null)
u.saO(null)
u.c=null
u.d=0
return u},
fs:function fs(){},
bT:function bT(){var _=this
_.d=_.c=_.b=_.a=null},
fM:function fM(a){this.a=a},
fN:function fN(a){this.a=a},
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
M:function M(a,b,c,d,e){var _=this
_.c=a
_.d=b
_.e=c
_.a=d
_.b=null
_.$ti=e},
bw:function bw(){var _=this
_.d=_.c=_.b=_.a=null},
a5:function a5(){},
dB:function dB(){var _=this
_.d=_.c=_.b=_.a=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=null},
dR:function dR(){},
e_:function e_(){},
e5:function e5(){},
e6:function e6(){},
e7:function e7(){}},X={dh:function dh(a,b){this.a=a
this.b=b},dA:function dA(a,b){this.a=a
this.b=b},h8:function h8(){var _=this
_.d=_.c=_.b=_.a=null},dF:function dF(a,b,c,d,e,f){var _=this
_.x=a
_.y=b
_.c=c
_.d=d
_.e=e
_.a=f
_.b=null},he:function he(a){var _=this
_.a=a
_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},aw:function aw(a,b,c){this.a=a
this.b=b
this.c=c},bh:function bh(a,b,c,d,e,f,g,h,i){var _=this
_.x=a
_.y=b
_.z=c
_.Q=d
_.ch=e
_.c=f
_.d=g
_.e=h
_.a=i
_.b=null},hv:function hv(a){var _=this
_.a=a
_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},cx:function cx(a,b,c,d,e){var _=this
_.x=a
_.c=b
_.d=c
_.e=d
_.a=e
_.b=null},hM:function hM(){},ea:function ea(a,b,c,d,e,f,g,h,i){var _=this
_.x=a
_.y=b
_.z=c
_.Q=d
_.ch=e
_.c=f
_.d=g
_.e=h
_.a=i
_.b=null},it:function it(a){var _=this
_.a=a
_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},ef:function ef(a){var _=this
_.a=a
_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},
ka:function(a,b,c,d,e,f,g){var u,t
u=new X.fW()
t=new V.au(0,0,0,1)
u.a=t
u.b=!0
u.c=e
u.d=!0
u.e=g
u.f=!1
t=$.l5
if(t==null){t=V.l4(0,0,1,1)
$.l5=t}u.r=t
return u},
kZ:function(a,b,c,d,e){var u,t,s
u=new X.dQ()
u.c=1.0471975511965976
u.d=0.1
u.e=2000
if(null!=c){t=u.b
u.b=c
if(c!=null)c.gq().h(0,u.gfm())
s=new D.M("mover",t,u.b,u,[U.ad])
s.b=!0
u.am(s)}s=u.c
if(!(Math.abs(s-b)<$.R().a)){u.c=b
s=new D.M("fov",s,b,u,[P.z])
s.b=!0
u.am(s)}s=u.d
if(!(Math.abs(s-d)<$.R().a)){u.d=d
s=new D.M("near",s,d,u,[P.z])
s.b=!0
u.am(s)}s=u.e
if(!(Math.abs(s-a)<$.R().a)){u.e=a
s=new D.M("far",s,a,u,[P.z])
s.b=!0
u.am(s)}return u},
bP:function bP(){},
fW:function fW(){var _=this
_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
h1:function h1(){this.b=this.a=null},
dQ:function dQ(){var _=this
_.f=_.e=_.d=_.c=_.b=_.a=null},
cH:function cH(){}},V={
nC:function(a,b,c){var u
if(c<=b)return b
u=c-b
a=C.e.eN(a-b,u)
return(a<0?a+u:a)+b},
V:function(a,b,c){if(a==null)return C.j.aC("null",c)
return C.j.aC(C.e.ey(Math.abs(a-0)<$.R().a?0:a,b),c+b+1)},
ca:function(a,b,c){var u,t,s,r,q,p
H.l(a,"$ib",[P.z],"$ab")
u=H.c([],[P.h])
for(t=a.length,s=0,r=0;r<a.length;a.length===t||(0,H.C)(a),++r){q=V.V(a[r],b,c)
s=Math.max(s,q.length)
C.a.h(u,q)}for(p=u.length-1;p>=0;--p){if(p>=u.length)return H.j(u,p)
C.a.Y(u,p,C.j.aC(u[p],s))}return u},
ky:function(a,b){return C.e.kn(Math.pow(b,C.O.cG(Math.log(H.n6(a))/Math.log(b))))},
bY:function(){var u=$.kW
if(u==null){u=V.aX(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1)
$.kW=u}return u},
aX:function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){return new V.ao(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p)},
kV:function(a,b,c){var u,t,s,r,q,p,o,n
u=c.w(0,Math.sqrt(c.D(c)))
t=b.ay(u)
s=t.w(0,Math.sqrt(t.D(t)))
r=u.ay(s)
q=new V.Q(a.a,a.b,a.c)
p=s.S(0).D(q)
o=r.S(0).D(q)
n=u.S(0).D(q)
return V.aX(s.a,r.a,u.a,p,s.b,r.b,u.b,o,s.c,r.c,u.c,n,0,0,0,1)},
bj:function(){var u=$.l0
if(u==null){u=new V.a6(0,0)
$.l0=u}return u},
l1:function(){var u=$.cB
if(u==null){u=new V.a3(0,0,0)
$.cB=u}return u},
l4:function(a,b,c,d){if(c<0){a+=c
c=-c}if(d<0){b+=d
d=-d}return new V.dV(a,b,c,d)},
cT:function(){var u=$.lj
if(u==null){u=new V.Q(0,0,0)
$.lj=u}return u},
lk:function(){var u=$.li
if(u==null){u=new V.Q(0,1,0)
$.li=u}return u},
ll:function(){var u=$.iP
if(u==null){u=new V.Q(0,0,1)
$.iP=u}return u},
a2:function a2(a,b,c){this.a=a
this.b=b
this.c=c},
au:function au(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
fK:function fK(a){this.a=a},
dK:function dK(a,b,c,d,e,f,g,h,i){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.x=h
_.y=i},
ao:function ao(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){var _=this
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
a6:function a6(a,b){this.a=a
this.b=b},
a3:function a3(a,b,c){this.a=a
this.b=b
this.c=c},
b0:function b0(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
dV:function dV(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
S:function S(a,b){this.a=a
this.b=b},
Q:function Q(a,b,c){this.a=a
this.b=b
this.c=c},
X:function(a,b){var u,t,s,r
if(a.length!==1||b.length!==1)throw H.f(P.r("The given low and high character strings for a RangeMatcher must have one and only one characters."))
u=C.j.aJ(a,0)
t=C.j.aJ(b,0)
s=new V.hO()
if(u>t){r=t
t=u
u=r}s.a=u
s.b=t
return s},
t:function(a){var u=new V.hY()
u.f5(a)
return u},
is:function(){var u,t
u=new V.ir()
t=P.h
u.sip(new H.aU([t,V.cF]))
u.sit(new H.aU([t,V.cK]))
u.c=null
return u},
bc:function bc(){},
av:function av(){},
dG:function dG(){},
ap:function ap(){this.a=null},
hO:function hO(){this.b=this.a=null},
hY:function hY(){this.a=null},
cF:function cF(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
e9:function e9(a,b,c){this.a=a
this.b=b
this.c=c},
cK:function cK(a,b){this.a=a
this.b=b
this.c=null},
ir:function ir(){this.c=this.b=this.a=null},
cL:function cL(a){this.b=a
this.a=this.c=null},
nx:function(a){P.mK(C.K,new V.k_(a))},
mF:function(a,b){var u=new V.i1()
u.f6(a,!0)
return u},
bu:function bu(){},
k_:function k_(a){this.a=a},
fA:function fA(a){var _=this
_.a=a
_.d=_.c=_.b=null},
fX:function fX(a){var _=this
_.a=a
_.d=_.c=_.b=null},
fY:function fY(a){var _=this
_.a=a
_.d=_.c=_.b=null},
hK:function hK(a){var _=this
_.a=a
_.d=_.c=_.b=null},
i1:function i1(){this.b=this.a=null},
i3:function i3(a){this.a=a},
i2:function i2(a){this.a=a},
i4:function i4(a){this.a=a}},U={
k8:function(){var u=new U.ft()
u.a=!0
u.b=1e12
u.c=-1e12
u.d=0
u.e=100
u.f=0
u.x=0
u.r=0
return u},
kL:function(a){var u=new U.dj()
u.a=a
return u},
ft:function ft(){var _=this
_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
dj:function dj(){this.b=this.a=null},
cs:function cs(){var _=this
_.d=_.c=_.b=_.a=_.r=_.f=_.e=null},
ad:function ad(){},
eg:function eg(){var _=this
_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
eh:function eh(){var _=this
_.fx=_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
ei:function ei(){var _=this
_.r=_.f=_.e=_.d=_.c=_.b=_.a=null}},M={di:function di(){var _=this
_.d=_.c=_.b=_.a=_.f=_.e=null},dk:function dk(){var _=this
_.f=_.e=_.d=_.c=_.b=_.a=null},dq:function dq(){var _=this
_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},ay:function ay(){}},A={
mr:function(a,b){var u,t
u=a.aj
t=new A.dI(b,u)
t.d2(b,u)
t.f3(a,b)
return t},
kj:function(a,b,c,d,e){var u=new A.iB(a,b,c,e)
u.f=d
u.siE(P.mq(d,0,!1,P.B))
return u},
dd:function dd(a,b,c){this.a=a
this.b=b
this.c=c},
fk:function fk(a){this.a=a},
dI:function dI(a,b){var _=this
_.bq=_.e_=_.bp=_.aj=_.ar=_.y2=_.y1=_.x2=_.x1=_.ry=_.rx=_.r2=_.r1=_.k4=_.k3=_.k2=_.k1=_.id=_.go=_.fy=_.fx=_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=null
_.ef=_.cA=_.ee=_.bD=_.ed=_.ec=_.bC=_.bB=_.eb=_.ea=_.bA=_.bz=_.by=_.e9=_.e8=_.bx=_.e7=_.e6=_.bw=_.e5=_.e4=_.bv=_.bu=_.e3=_.e2=_.bt=_.bs=_.e1=_.e0=_.br=null
_.cF=_.ej=_.cE=_.ei=_.cD=_.eh=_.cC=_.eg=_.cB=null
_.a=a
_.b=b
_.y=_.x=_.r=_.f=_.e=_.d=_.c=null},
hm:function hm(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5){var _=this
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
_.ar=b3
_.aj=b4
_.bp=b5},
cM:function cM(a,b,c){this.a=a
this.b=b
this.c=c},
cQ:function cQ(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.x=h},
cO:function cO(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},
cR:function cR(a,b,c,d,e,f,g,h,i,j){var _=this
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
cP:function cP(a,b,c,d,e,f,g,h,i,j){var _=this
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
cS:function cS(a,b,c,d,e,f,g,h,i,j,k,l,m,n){var _=this
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
cE:function cE(){},
bS:function bS(a,b){this.a=a
this.b=b},
dZ:function dZ(a,b){var _=this
_.db=_.cy=_.cx=_.ch=_.Q=_.z=null
_.a=a
_.b=b
_.y=_.x=_.r=_.f=_.e=_.d=_.c=null},
eb:function eb(){},
iH:function iH(a){this.a=a},
L:function L(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
iD:function iD(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
iE:function iE(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
iG:function iG(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
iB:function iB(a,b,c,d){var _=this
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
iC:function iC(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
I:function I(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
iF:function iF(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
iI:function iI(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
cN:function cN(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
ar:function ar(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
ah:function ah(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
ae:function ae(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d}},F={
nB:function(a,b,c,d){return F.na(c,a,d,b,new F.k0())},
na:function(a,b,c,d,e){var u=F.nz(a,b,new F.jP(H.n(e,{func:1,ret:V.a3,args:[P.z]}),d,b,c),null)
if(u==null)return
u.ax()
u.jQ(new F.iW(),new F.hE())
return u},
nz:function(a,b,c,d){var u,t,s,r,q,p,o,n,m,l,k,j,i,h
H.n(c,{func:1,ret:-1,args:[F.aj,P.z,P.z]})
if(a<1)return
if(b<1)return
u=F.l7()
t=H.c([],[F.aj])
for(s=0;s<=b;++s){r=s/b
q=u.a
if(r<0)p=0
else p=r>1?1:r
q.toString
o=F.iQ(null,null,new V.au(p,0,0,1),null,null,new V.a6(r,1),null,null,0)
q.h(0,o)
c.$3(o,r,0)
C.a.h(t,o.dT(d))}for(s=1;s<=a;++s){n=s/a
for(q=n>1,p=n<0,m=1-n,l=0;l<=b;++l){r=l/b
k=u.a
if(r<0)j=0
else j=r>1?1:r
if(p)i=0
else i=q?1:n
if(p)h=0
else h=q?1:n
k.toString
o=F.iQ(null,null,new V.au(j,i,h,1),null,null,new V.a6(r,m),null,null,0)
k.h(0,o)
c.$3(o,r,n)
C.a.h(t,o.dT(d))}}u.d.j3(a+1,b+1,t)
return u},
dr:function(a,b,c){var u,t
u=new F.a7()
t=a.a
if(t==null)H.u(P.r("May not create a face with a first vertex which is not attached to a shape."))
if(t!=b.a||t!=c.a)H.u(P.r("May not create a face with vertices attached to different shapes."))
u.ie(a)
u.ig(b)
u.ih(c)
C.a.h(u.a.a.d.b,u)
u.a.a.aa()
return u},
l7:function(){var u,t
u=new F.dX()
t=new F.iR(u)
t.b=!1
t.siF(H.c([],[F.aj]))
u.a=t
t=new F.i0(u)
t.scf(H.c([],[F.bZ]))
u.b=t
t=new F.i_(u)
t.sfU(H.c([],[F.bD]))
u.c=t
t=new F.hZ(u)
t.sfJ(H.c([],[F.a7]))
u.d=t
u.e=null
return u},
iQ:function(a,b,c,d,e,f,g,h,i){var u,t,s
u=new F.aj()
t=new F.iZ(u)
t.scf(H.c([],[F.bZ]))
u.b=t
t=new F.iV(u)
s=[F.bD]
t.sfV(H.c([],s))
t.sfW(H.c([],s))
u.c=t
t=new F.iS(u)
s=[F.a7]
t.sfK(H.c([],s))
t.sfL(H.c([],s))
t.sfM(H.c([],s))
u.d=t
h=$.lW()
u.e=0
t=$.aL()
s=h.a
u.f=(s&t.a)!==0?d:null
u.r=(s&$.bp().a)!==0?e:null
u.x=(s&$.bo().a)!==0?b:null
u.y=(s&$.bq().a)!==0?f:null
u.z=(s&$.br().a)!==0?g:null
u.Q=(s&$.lX().a)!==0?c:null
u.ch=(s&$.cf().a)!==0?i:0
u.cx=(s&$.bn().a)!==0?a:null
return u},
k0:function k0(){},
jP:function jP(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
a7:function a7(){var _=this
_.e=_.d=_.c=_.b=_.a=null},
fO:function fO(){},
i5:function i5(){},
bD:function bD(){},
ha:function ha(){},
iA:function iA(){},
bZ:function bZ(){},
dX:function dX(){var _=this
_.e=_.d=_.c=_.b=_.a=null},
hZ:function hZ(a){this.a=a
this.b=null},
i_:function i_(a){this.a=a
this.b=null},
i0:function i0(a){this.a=a
this.b=null},
aj:function aj(){var _=this
_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
j0:function j0(a){this.a=a},
j_:function j_(a){this.a=a},
iR:function iR(a){this.a=a
this.c=this.b=null},
iS:function iS(a){var _=this
_.a=a
_.d=_.c=_.b=null},
iT:function iT(a,b){this.a=a
this.b=b},
iU:function iU(a,b){this.a=a
this.b=b},
iV:function iV(a){this.a=a
this.c=this.b=null},
iX:function iX(){},
iW:function iW(){},
iY:function iY(){},
hE:function hE(){},
iZ:function iZ(a){this.a=a
this.b=null}},T={cJ:function cJ(){},e4:function e4(){var _=this
_.e=_.d=_.c=_.b=_.a=null},im:function im(a){var _=this
_.a=a
_.e=_.d=_.c=_.b=null},io:function io(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g}},B={
lF:function(){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6
u=V.mF("Test 013",!0)
t=W.k6(null,null)
t.className="pageLargeCanvas"
t.id="testCanvas"
C.k.C(u.a,t)
s=[P.h]
u.dI(H.c(["Test of sky box and cover pass."],s))
u.dI(H.c(["\xab[Back to Tests|../]"],s))
r=C.z.eI(document,"testCanvas")
if(r==null)H.u(P.r("Failed to find an element with the identifier, testCanvas."))
q=E.mJ(r,!0,!0,!0,!1)
p=new U.cs()
s=U.ad
p.bi(s)
p.aY(p.gh4(),p.ghI())
p.e=null
p.f=V.bY()
p.r=0
o=q.r
n=new U.eh()
m=U.k8()
m.scW(0,!0)
m.scK(6.283185307179586)
m.scM(0)
m.sa8(0,0)
m.scL(100)
m.sV(0)
m.scv(0.5)
n.b=m
l=n.gaM()
m.gq().h(0,l)
m=U.k8()
m.scW(0,!0)
m.scK(6.283185307179586)
m.scM(0)
m.sa8(0,0)
m.scL(100)
m.sV(0)
m.scv(0.5)
n.c=m
m.gq().h(0,l)
n.d=null
n.e=!1
n.f=!1
n.r=!1
n.x=2.5
n.y=2.5
n.z=2
n.Q=4
n.cx=!1
n.ch=!1
n.cy=0
n.db=0
n.dx=null
n.dy=0
n.fr=null
n.fx=null
k=new X.aw(!1,!1,!1)
j=n.d
n.d=k
m=[X.aw]
l=new D.M("modifiers",j,k,n,m)
l.b=!0
n.N(l)
l=n.f
if(l!==!1){n.f=!1
l=new D.M("invertX",l,!1,n,[P.O])
l.b=!0
n.N(l)}l=n.r
if(l!==!1){n.r=!1
l=new D.M("invertY",l,!1,n,[P.O])
l.b=!0
n.N(l)}n.b3(o)
p.h(0,n)
o=q.r
n=new U.eg()
l=U.k8()
l.scW(0,!0)
l.scK(6.283185307179586)
l.scM(0)
l.sa8(0,0)
l.scL(100)
l.sV(0)
l.scv(0.2)
n.b=l
l.gq().h(0,n.gaM())
n.c=null
n.d=!1
n.e=2.5
n.f=2
n.r=4
n.y=!1
n.x=!1
n.z=0
n.Q=null
n.ch=0
n.cx=null
n.cy=null
k=new X.aw(!0,!1,!1)
j=n.c
n.c=k
l=new D.M("modifiers",j,k,n,m)
l.b=!0
n.N(l)
n.b3(o)
p.h(0,n)
o=q.r
n=new U.ei()
n.c=0.01
n.d=0
n.e=0
k=new X.aw(!1,!1,!1)
n.b=k
m=new D.M("modifiers",null,k,n,m)
m.b=!0
n.N(m)
n.b3(o)
p.h(0,n)
p.h(0,U.kL(V.aX(1,0,0,0,0,1,0,0,0,0,1,5,0,0,0,1)))
i=X.kZ(2000,1.0471975511965976,p,0.1,null)
h=X.ka(!0,!0,!1,null,2000,null,0)
if(h.b){h.b=!1
o=new D.M("clearColor",!0,!1,h,[P.O])
o.b=!0
h.am(o)}g=E.kP(null,!0,null,"",null,null)
g.sbR(0,F.nB(30,1,15,0.5))
f=new O.dH()
f.sfu(O.k7(V.ao))
f.e.aY(f.gh8(),f.gha())
o=new O.aW(f,"emission")
o.c=C.c
o.f=new V.a2(0,0,0)
f.f=o
o=new O.aW(f,"ambient")
o.c=C.c
o.f=new V.a2(0,0,0)
f.r=o
o=new O.aW(f,"diffuse")
o.c=C.c
o.f=new V.a2(0,0,0)
f.x=o
o=new O.aW(f,"invDiffuse")
o.c=C.c
o.f=new V.a2(0,0,0)
f.y=o
o=new O.ho(f,"specular")
o.c=C.c
o.f=new V.a2(0,0,0)
o.ch=100
f.z=o
o=new O.hl(f,"bump")
o.c=C.c
f.Q=o
f.ch=null
o=new O.aW(f,"reflect")
o.c=C.c
o.f=new V.a2(0,0,0)
f.cx=o
o=new O.hn(f,"refract")
o.c=C.c
o.f=new V.a2(0,0,0)
o.ch=1
f.cy=o
o=new O.hk(f,"alpha")
o.c=C.c
o.f=1
f.db=o
o=new D.dB()
o.bi(D.a5)
o.sfF(H.c([],[D.bw]))
o.shW(H.c([],[D.dR]))
o.sio(H.c([],[D.e_]))
o.siB(H.c([],[D.e5]))
o.siC(H.c([],[D.e6]))
o.siD(H.c([],[D.e7]))
o.Q=null
o.ch=null
o.d_(o.gh6(),o.ghG(),o.ghK())
f.dx=o
n=o.Q
if(n==null){n=D.J()
o.Q=n
o=n}else o=n
o.h(0,f.gi6())
o=f.dx
n=o.ch
if(n==null){n=D.J()
o.ch=n
o=n}else o=n
o.h(0,f.gbV())
f.dy=null
o=f.dx
e=V.lk()
n=U.kL(V.kV(V.l1(),e,new V.Q(0,-1,-1)))
d=new V.a2(1,1,1)
m=new D.bw()
m.c=new V.a2(1,1,1)
m.a=V.ll()
j=m.b
m.b=n
n.gq().h(0,m.gfb())
s=new D.M("mover",j,m.b,m,[s])
s.b=!0
m.at(s)
if(!m.c.A(0,d)){j=m.c
m.c=d
s=new D.M("color",j,d,m,[V.a2])
s.b=!0
m.at(s)}o.h(0,m)
s=f.r
s.saq(0,new V.a2(0,0,1))
s=f.x
s.saq(0,new V.a2(0,1,0))
s=f.z
s.saq(0,new V.a2(1,0,0))
s=f.z
if(s.c===C.c){s.c=C.i
s.bU()
s.cj(100)
o=s.a
o.a=null
o.a2(null)}s.cj(10)
s=q.f
o=s.a
c=o.createTexture()
C.b.aR(o,34067,c)
C.b.bL(o,34067,10242,10497)
C.b.bL(o,34067,10243,10497)
C.b.bL(o,34067,10241,9729)
C.b.bL(o,34067,10240,9729)
C.b.aR(o,34067,null)
b=new T.e4()
b.a=0
b.b=c
b.c=!1
b.d=0
s.aL(b,c,"../resources/maskonaive/posx.jpg",34069,!1,!1)
s.aL(b,c,"../resources/maskonaive/negx.jpg",34070,!1,!1)
s.aL(b,c,"../resources/maskonaive/posy.jpg",34071,!1,!1)
s.aL(b,c,"../resources/maskonaive/negy.jpg",34072,!1,!1)
s.aL(b,c,"../resources/maskonaive/posz.jpg",34073,!1,!1)
s.aL(b,c,"../resources/maskonaive/negz.jpg",34074,!1,!1)
a=new M.dk()
a.sb4(null)
a.sba(0,null)
a.sbb(null)
s=E.kP(null,!0,null,"",null,null)
a0=F.l7()
o=a0.a
n=new V.Q(-1,-1,1)
n=n.w(0,Math.sqrt(n.D(n)))
a1=o.bn(new V.b0(1,2,4,6),new V.au(1,0,0,1),new V.a3(-1,-1,0),new V.a6(0,1),n,null)
o=a0.a
n=new V.Q(1,-1,1)
n=n.w(0,Math.sqrt(n.D(n)))
a2=o.bn(new V.b0(0,3,4,6),new V.au(0,0,1,1),new V.a3(1,-1,0),new V.a6(1,1),n,null)
o=a0.a
n=new V.Q(1,1,1)
n=n.w(0,Math.sqrt(n.D(n)))
a3=o.bn(new V.b0(0,2,5,6),new V.au(0,1,0,1),new V.a3(1,1,0),new V.a6(1,0),n,null)
o=a0.a
n=V.bj()
m=new V.Q(-1,1,1)
m=m.w(0,Math.sqrt(m.D(m)))
a4=o.bn(new V.b0(0,2,4,7),new V.au(1,1,0,1),new V.a3(-1,1,0),n,m,null)
a0.d.j2(H.c([a1,a2,a3,a4],[F.aj]))
a0.ax()
s.sbR(0,a0)
a.d=s
a.e=null
s=new O.dY()
s.b=1.0471975511965976
s.d=new V.a2(1,1,1)
j=s.c
s.c=b
b.gq().h(0,s.gbV())
o=new D.M("boxTexture",j,s.c,s,[T.e4])
o.b=!0
s.a2(o)
a.sbb(s)
a.sba(0,h)
a.sb4(i)
a5=new M.dq()
a5.sfz(0,O.k7(E.ag))
a5.d.aY(a5.ghe(),a5.ghg())
a5.e=null
a5.f=null
a5.r=null
a5.x=null
a6=X.ka(!0,!0,!1,null,2000,null,0)
a5.sb4(null)
a5.sba(0,a6)
a5.sbb(null)
a5.sb4(i)
a5.sbb(f)
a5.sba(0,h)
a5.d.h(0,g)
s=M.ay
o=H.c([a,a5],[s])
n=new M.di()
n.bi(s)
n.e=!1
n.f=null
n.aY(n.ghM(),n.ghO())
n.a6(0,o)
s=q.d
if(s!==n){if(s!=null)s.gq().O(0,q.gd4())
q.d=n
n.gq().h(0,q.gd4())
q.d5()}s=q.z
if(s==null){s=D.J()
q.z=s}o={func:1,ret:-1,args:[D.y]}
n=H.n(new B.jX(a,u),o)
if(s.b==null)s.saO(H.c([],[o]))
s=s.b;(s&&C.a).h(s,n)
V.nx(q)},
jX:function jX(a,b){this.a=a
this.b=b}}
var w=[C,H,J,P,W,O,E,Z,D,X,V,U,M,A,F,T,B]
hunkHelpers.setFunctionNamesIfNecessary(w)
var $={}
H.kd.prototype={}
J.a.prototype={
A:function(a,b){return a===b},
gJ:function(a){return H.cC(a)},
i:function(a){return"Instance of '"+H.c0(a)+"'"}}
J.h5.prototype={
i:function(a){return String(a)},
gJ:function(a){return a?519018:218159},
$iO:1}
J.dy.prototype={
A:function(a,b){return null==b},
i:function(a){return"null"},
gJ:function(a){return 0},
$iK:1}
J.dz.prototype={
gJ:function(a){return 0},
i:function(a){return String(a)}}
J.hJ.prototype={}
J.bG.prototype={}
J.bf.prototype={
i:function(a){var u=a[$.lL()]
if(u==null)return this.eZ(a)
return"JavaScript function for "+H.m(J.aM(u))},
$S:function(){return{func:1,opt:[,,,,,,,,,,,,,,,,]}},
$iby:1}
J.aG.prototype={
h:function(a,b){H.E(b,H.x(a,0))
if(!!a.fixed$length)H.u(P.ai("add"))
a.push(b)},
kb:function(a,b){var u
if(!!a.fixed$length)H.u(P.ai("removeAt"))
u=a.length
if(b>=u)throw H.f(P.dU(b,null,null))
return a.splice(b,1)[0]},
O:function(a,b){var u
if(!!a.fixed$length)H.u(P.ai("remove"))
for(u=0;u<a.length;++u)if(J.a0(a[u],b)){a.splice(u,1)
return!0}return!1},
a6:function(a,b){var u,t
H.l(b,"$id",[H.x(a,0)],"$ad")
if(!!a.fixed$length)H.u(P.ai("addAll"))
for(u=b.length,t=0;t<b.length;b.length===u||(0,H.C)(b),++t)a.push(b[t])},
P:function(a,b){var u,t
H.n(b,{func:1,ret:-1,args:[H.x(a,0)]})
u=a.length
for(t=0;t<u;++t){b.$1(a[t])
if(a.length!==u)throw H.f(P.bv(a))}},
m:function(a,b){var u,t
u=new Array(a.length)
u.fixed$length=Array
for(t=0;t<a.length;++t)this.Y(u,t,H.m(a[t]))
return u.join(b)},
jL:function(a){return this.m(a,"")},
jF:function(a,b,c){var u,t,s
H.n(b,{func:1,ret:P.O,args:[H.x(a,0)]})
u=a.length
for(t=0;t<u;++t){s=a[t]
if(b.$1(s))return s
if(a.length!==u)throw H.f(P.bv(a))}throw H.f(H.h3())},
jE:function(a,b){return this.jF(a,b,null)},
H:function(a,b){if(b<0||b>=a.length)return H.j(a,b)
return a[b]},
eW:function(a,b,c){var u=a.length
if(b>u)throw H.f(P.aB(b,0,a.length,"start",null))
if(c<b||c>a.length)throw H.f(P.aB(c,b,a.length,"end",null))
if(b===c)return H.c([],[H.x(a,0)])
return H.c(a.slice(b,c),[H.x(a,0)])},
gjD:function(a){if(a.length>0)return a[0]
throw H.f(H.h3())},
gbF:function(a){var u=a.length
if(u>0)return a[u-1]
throw H.f(H.h3())},
eS:function(a,b,c,d,e){var u,t,s
u=H.x(a,0)
H.l(d,"$id",[u],"$ad")
if(!!a.immutable$list)H.u(P.ai("setRange"))
P.kg(b,c,a.length,null,null,null)
t=c-b
if(t===0)return
H.l(d,"$ib",[u],"$ab")
u=J.jR(d)
if(e+t>u.gl(d))throw H.f(H.ml())
if(e<b)for(s=t-1;s>=0;--s)a[b+s]=u.j(d,e+s)
else for(s=0;s<t;++s)a[b+s]=u.j(d,e+s)},
be:function(a,b,c,d){return this.eS(a,b,c,d,0)},
dK:function(a,b){var u,t
H.n(b,{func:1,ret:P.O,args:[H.x(a,0)]})
u=a.length
for(t=0;t<u;++t){if(b.$1(a[t]))return!0
if(a.length!==u)throw H.f(P.bv(a))}return!1},
X:function(a,b){var u
for(u=0;u<a.length;++u)if(J.a0(a[u],b))return!0
return!1},
i:function(a){return P.kb(a,"[","]")},
gT:function(a){return new J.am(a,a.length,0,[H.x(a,0)])},
gJ:function(a){return H.cC(a)},
gl:function(a){return a.length},
sl:function(a,b){if(!!a.fixed$length)H.u(P.ai("set length"))
if(b<0)throw H.f(P.aB(b,0,null,"newLength",null))
a.length=b},
j:function(a,b){if(b>=a.length||b<0)throw H.f(H.c9(a,b))
return a[b]},
Y:function(a,b,c){H.E(c,H.x(a,0))
if(!!a.immutable$list)H.u(P.ai("indexed set"))
if(b>=a.length||b<0)throw H.f(H.c9(a,b))
a[b]=c},
p:function(a,b){var u,t
u=[H.x(a,0)]
H.l(b,"$ib",u,"$ab")
t=C.d.p(a.length,b.gl(b))
u=H.c([],u)
this.sl(u,t)
this.be(u,0,a.length,a)
this.be(u,a.length,t,b)
return u},
$id:1,
$ib:1}
J.kc.prototype={}
J.am.prototype={
gI:function(a){return this.d},
B:function(){var u,t,s
u=this.a
t=u.length
if(this.b!==t)throw H.f(H.C(u))
s=this.c
if(s>=t){this.sdl(null)
return!1}this.sdl(u[s]);++this.c
return!0},
sdl:function(a){this.d=H.E(a,H.x(this,0))},
$iaT:1}
J.bC.prototype={
kn:function(a){var u
if(a>=-2147483648&&a<=2147483647)return a|0
if(isFinite(a)){u=a<0?Math.ceil(a):Math.floor(a)
return u+0}throw H.f(P.ai(""+a+".toInt()"))},
cG:function(a){var u,t
if(a>=0){if(a<=2147483647)return a|0}else if(a>=-2147483648){u=a|0
return a===u?u:u-1}t=Math.floor(a)
if(isFinite(t))return t
throw H.f(P.ai(""+a+".floor()"))},
ak:function(a){if(a>0){if(a!==1/0)return Math.round(a)}else if(a>-1/0)return 0-Math.round(0-a)
throw H.f(P.ai(""+a+".round()"))},
ey:function(a,b){var u,t
if(b>20)throw H.f(P.aB(b,0,20,"fractionDigits",null))
u=a.toFixed(b)
if(a===0)t=1/a<0
else t=!1
if(t)return"-"+u
return u},
i:function(a){if(a===0&&1/a<0)return"-0.0"
else return""+a},
gJ:function(a){var u,t,s,r,q
u=a|0
if(a===u)return 536870911&u
t=Math.abs(a)
s=Math.log(t)/0.6931471805599453|0
r=Math.pow(2,s)
q=t<1?t/r:r/t
return 536870911&((q*9007199254740992|0)+(q*3542243181176521|0))*599197+s*1259},
p:function(a,b){if(typeof b!=="number")throw H.f(H.bb(b))
return a+b},
t:function(a,b){if(typeof b!=="number")throw H.f(H.bb(b))
return a-b},
v:function(a,b){if(typeof b!=="number")throw H.f(H.bb(b))
return a*b},
eN:function(a,b){var u=a%b
if(u===0)return 0
if(u>0)return u
if(b<0)return u-b
else return u+b},
f2:function(a,b){if((a|0)===a)if(b>=1||b<-1)return a/b|0
return this.dD(a,b)},
a3:function(a,b){return(a|0)===a?a/b|0:this.dD(a,b)},
dD:function(a,b){var u=a/b
if(u>=-2147483648&&u<=2147483647)return u|0
if(u>0){if(u!==1/0)return Math.floor(u)}else if(u>-1/0)return Math.ceil(u)
throw H.f(P.ai("Result of truncating division is "+H.m(u)+": "+H.m(a)+" ~/ "+b))},
bl:function(a,b){var u
if(a>0)u=this.im(a,b)
else{u=b>31?31:b
u=a>>u>>>0}return u},
im:function(a,b){return b>31?0:a>>>b},
$iz:1,
$ia4:1}
J.dx.prototype={$iB:1}
J.dw.prototype={}
J.be.prototype={
cu:function(a,b){if(b<0)throw H.f(H.c9(a,b))
if(b>=a.length)H.u(H.c9(a,b))
return a.charCodeAt(b)},
aJ:function(a,b){if(b>=a.length)throw H.f(H.c9(a,b))
return a.charCodeAt(b)},
p:function(a,b){if(typeof b!=="string")throw H.f(P.k4(b,null,null))
return a+b},
eV:function(a,b,c){var u
if(c>a.length)throw H.f(P.aB(c,0,a.length,null,null))
u=c+b.length
if(u>a.length)return!1
return b===a.substring(c,u)},
bS:function(a,b){return this.eV(a,b,0)},
bg:function(a,b,c){if(c==null)c=a.length
if(b<0)throw H.f(P.dU(b,null,null))
if(b>c)throw H.f(P.dU(b,null,null))
if(c>a.length)throw H.f(P.dU(c,null,null))
return a.substring(b,c)},
bf:function(a,b){return this.bg(a,b,null)},
kq:function(a){return a.toLowerCase()},
v:function(a,b){var u,t
if(0>=b)return""
if(b===1||a.length===0)return a
if(b!==b>>>0)throw H.f(C.H)
for(u=a,t="";!0;){if((b&1)===1)t=u+t
b=b>>>1
if(b===0)break
u+=u}return t},
jX:function(a,b,c){var u=b-a.length
if(u<=0)return a
return this.v(c,u)+a},
aC:function(a,b){return this.jX(a,b," ")},
i:function(a){return a},
gJ:function(a){var u,t,s
for(u=a.length,t=0,s=0;s<u;++s){t=536870911&t+a.charCodeAt(s)
t=536870911&t+((524287&t)<<10)
t^=t>>6}t=536870911&t+((67108863&t)<<3)
t^=t>>11
return 536870911&t+((16383&t)<<15)},
gl:function(a){return a.length},
$ikY:1,
$ih:1}
H.q.prototype={
gl:function(a){return this.a.length},
j:function(a,b){return C.j.cu(this.a,b)},
$aee:function(){return[P.B]},
$av:function(){return[P.B]},
$ad:function(){return[P.B]},
$ab:function(){return[P.B]}}
H.fH.prototype={}
H.bX.prototype={
gT:function(a){return new H.cu(this,this.gl(this),0,[H.al(this,"bX",0)])},
bO:function(a,b){return this.eY(0,H.n(b,{func:1,ret:P.O,args:[H.al(this,"bX",0)]}))}}
H.cu.prototype={
gI:function(a){return this.d},
B:function(){var u,t,s,r
u=this.a
t=J.jR(u)
s=t.gl(u)
if(this.b!==s)throw H.f(P.bv(u))
r=this.c
if(r>=s){this.sb_(null)
return!1}this.sb_(t.H(u,r));++this.c
return!0},
sb_:function(a){this.d=H.E(a,H.x(this,0))},
$iaT:1}
H.hh.prototype={
gT:function(a){return new H.hi(J.bM(this.a),this.b,this.$ti)},
gl:function(a){return J.bN(this.a)},
H:function(a,b){return this.b.$1(J.k2(this.a,b))},
$ad:function(a,b){return[b]}}
H.hi.prototype={
B:function(){var u=this.b
if(u.B()){this.sb_(this.c.$1(u.gI(u)))
return!0}this.sb_(null)
return!1},
gI:function(a){return this.a},
sb_:function(a){this.a=H.E(a,H.x(this,1))},
$aaT:function(a,b){return[b]}}
H.hj.prototype={
gl:function(a){return J.bN(this.a)},
H:function(a,b){return this.b.$1(J.k2(this.a,b))},
$abX:function(a,b){return[b]},
$ad:function(a,b){return[b]}}
H.cU.prototype={
gT:function(a){return new H.j3(J.bM(this.a),this.b,this.$ti)}}
H.j3.prototype={
B:function(){var u,t
for(u=this.a,t=this.b;u.B();)if(t.$1(u.gI(u)))return!0
return!1},
gI:function(a){var u=this.a
return u.gI(u)}}
H.bU.prototype={}
H.ee.prototype={}
H.ed.prototype={}
H.hP.prototype={}
H.ix.prototype={
ag:function(a){var u,t,s
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
H.hF.prototype={
i:function(a){var u=this.b
if(u==null)return"NoSuchMethodError: "+H.m(this.a)
return"NoSuchMethodError: method not found: '"+u+"' on null"}}
H.h7.prototype={
i:function(a){var u,t
u=this.b
if(u==null)return"NoSuchMethodError: "+H.m(this.a)
t=this.c
if(t==null)return"NoSuchMethodError: method not found: '"+u+"' ("+H.m(this.a)+")"
return"NoSuchMethodError: method not found: '"+u+"' on '"+t+"' ("+H.m(this.a)+")"}}
H.iK.prototype={
i:function(a){var u=this.a
return u.length===0?"Error":"Error: "+u}}
H.k1.prototype={
$1:function(a){if(!!J.a_(a).$ibx)if(a.$thrownJsError==null)a.$thrownJsError=this.a
return a},
$S:15}
H.eT.prototype={
i:function(a){var u,t
u=this.b
if(u!=null)return u
u=this.a
t=u!==null&&typeof u==="object"?u.stack:null
u=t==null?"":t
this.b=u
return u},
$iaq:1}
H.ck.prototype={
i:function(a){return"Closure '"+H.c0(this).trim()+"'"},
$iby:1,
gkx:function(){return this},
$C:"$1",
$R:1,
$D:null}
H.ij.prototype={}
H.i9.prototype={
i:function(a){var u=this.$static_name
if(u==null)return"Closure of unknown static method"
return"Closure '"+H.ce(u)+"'"}}
H.ch.prototype={
A:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof H.ch))return!1
return this.a===b.a&&this.b===b.b&&this.c===b.c},
gJ:function(a){var u,t
u=this.c
if(u==null)t=H.cC(this.a)
else t=typeof u!=="object"?J.bL(u):H.cC(u)
return(t^H.cC(this.b))>>>0},
i:function(a){var u=this.c
if(u==null)u=this.a
return"Closure '"+H.m(this.d)+"' of "+("Instance of '"+H.c0(u)+"'")}}
H.iz.prototype={
i:function(a){return this.a}}
H.fr.prototype={
i:function(a){return this.a}}
H.hW.prototype={
i:function(a){return"RuntimeError: "+H.m(this.a)}}
H.aU.prototype={
gl:function(a){return this.a},
ga7:function(a){return new H.dC(this,[H.x(this,0)])},
dS:function(a,b){var u,t
if(typeof b==="string"){u=this.b
if(u==null)return!1
return this.di(u,b)}else if(typeof b==="number"&&(b&0x3ffffff)===b){t=this.c
if(t==null)return!1
return this.di(t,b)}else return this.jJ(b)},
jJ:function(a){var u=this.d
if(u==null)return!1
return this.cH(this.c2(u,J.bL(a)&0x3ffffff),a)>=0},
j:function(a,b){var u,t,s,r
if(typeof b==="string"){u=this.b
if(u==null)return
t=this.bj(u,b)
s=t==null?null:t.b
return s}else if(typeof b==="number"&&(b&0x3ffffff)===b){r=this.c
if(r==null)return
t=this.bj(r,b)
s=t==null?null:t.b
return s}else return this.jK(b)},
jK:function(a){var u,t,s
u=this.d
if(u==null)return
t=this.c2(u,J.bL(a)&0x3ffffff)
s=this.cH(t,a)
if(s<0)return
return t[s].b},
Y:function(a,b,c){var u,t,s,r,q,p
H.E(b,H.x(this,0))
H.E(c,H.x(this,1))
if(typeof b==="string"){u=this.b
if(u==null){u=this.cd()
this.b=u}this.d8(u,b,c)}else if(typeof b==="number"&&(b&0x3ffffff)===b){t=this.c
if(t==null){t=this.cd()
this.c=t}this.d8(t,b,c)}else{s=this.d
if(s==null){s=this.cd()
this.d=s}r=J.bL(b)&0x3ffffff
q=this.c2(s,r)
if(q==null)this.ck(s,r,[this.ce(b,c)])
else{p=this.cH(q,b)
if(p>=0)q[p].b=c
else q.push(this.ce(b,c))}}},
P:function(a,b){var u,t
H.n(b,{func:1,ret:-1,args:[H.x(this,0),H.x(this,1)]})
u=this.e
t=this.r
for(;u!=null;){b.$2(u.a,u.b)
if(t!==this.r)throw H.f(P.bv(this))
u=u.c}},
d8:function(a,b,c){var u
H.E(b,H.x(this,0))
H.E(c,H.x(this,1))
u=this.bj(a,b)
if(u==null)this.ck(a,b,this.ce(b,c))
else u.b=c},
h1:function(){this.r=this.r+1&67108863},
ce:function(a,b){var u,t
u=new H.hb(H.E(a,H.x(this,0)),H.E(b,H.x(this,1)))
if(this.e==null){this.f=u
this.e=u}else{t=this.f
u.d=t
t.c=u
this.f=u}++this.a
this.h1()
return u},
cH:function(a,b){var u,t
if(a==null)return-1
u=a.length
for(t=0;t<u;++t)if(J.a0(a[t].a,b))return t
return-1},
i:function(a){return P.kU(this)},
bj:function(a,b){return a[b]},
c2:function(a,b){return a[b]},
ck:function(a,b,c){a[b]=c},
fE:function(a,b){delete a[b]},
di:function(a,b){return this.bj(a,b)!=null},
cd:function(){var u=Object.create(null)
this.ck(u,"<non-identifier-key>",u)
this.fE(u,"<non-identifier-key>")
return u}}
H.hb.prototype={}
H.dC.prototype={
gl:function(a){return this.a.a},
gT:function(a){var u,t
u=this.a
t=new H.hc(u,u.r,this.$ti)
t.c=u.e
return t}}
H.hc.prototype={
gI:function(a){return this.d},
B:function(){var u=this.a
if(this.b!==u.r)throw H.f(P.bv(u))
else{u=this.c
if(u==null){this.sd7(null)
return!1}else{this.sd7(u.a)
this.c=this.c.c
return!0}}},
sd7:function(a){this.d=H.E(a,H.x(this,0))},
$iaT:1}
H.jT.prototype={
$1:function(a){return this.a(a)},
$S:15}
H.jU.prototype={
$2:function(a,b){return this.a(a,b)},
$S:29}
H.jV.prototype={
$1:function(a){return this.a(H.H(a))},
$S:38}
H.h6.prototype={
i:function(a){return"RegExp/"+this.a+"/"},
$ikY:1}
H.cz.prototype={$inW:1}
H.dL.prototype={
gl:function(a){return a.length},
$iF:1,
$aF:function(){}}
H.cy.prototype={
j:function(a,b){H.bI(b,a,a.length)
return a[b]},
$abU:function(){return[P.z]},
$av:function(){return[P.z]},
$id:1,
$ad:function(){return[P.z]},
$ib:1,
$ab:function(){return[P.z]}}
H.dM.prototype={
$abU:function(){return[P.B]},
$av:function(){return[P.B]},
$id:1,
$ad:function(){return[P.B]},
$ib:1,
$ab:function(){return[P.B]}}
H.hw.prototype={
j:function(a,b){H.bI(b,a,a.length)
return a[b]}}
H.hx.prototype={
j:function(a,b){H.bI(b,a,a.length)
return a[b]}}
H.hy.prototype={
j:function(a,b){H.bI(b,a,a.length)
return a[b]}}
H.hz.prototype={
j:function(a,b){H.bI(b,a,a.length)
return a[b]}}
H.hA.prototype={
j:function(a,b){H.bI(b,a,a.length)
return a[b]}}
H.dN.prototype={
gl:function(a){return a.length},
j:function(a,b){H.bI(b,a,a.length)
return a[b]},
$inX:1}
H.hB.prototype={
gl:function(a){return a.length},
j:function(a,b){H.bI(b,a,a.length)
return a[b]}}
H.cY.prototype={}
H.cZ.prototype={}
H.d_.prototype={}
H.d0.prototype={}
P.j5.prototype={
$1:function(a){var u,t
u=this.a
t=u.a
u.a=null
t.$0()},
$S:12}
P.j4.prototype={
$1:function(a){var u,t
this.a.a=H.n(a,{func:1,ret:-1})
u=this.b
t=this.c
u.firstChild?u.removeChild(t):u.appendChild(t)},
$S:40}
P.j6.prototype={
$0:function(){this.a.$0()},
$S:2}
P.j7.prototype={
$0:function(){this.a.$0()},
$S:2}
P.eZ.prototype={
fk:function(a,b){if(self.setTimeout!=null)this.b=self.setTimeout(H.c8(new P.jH(this,b),0),a)
else throw H.f(P.ai("`setTimeout()` not found."))},
fl:function(a,b){if(self.setTimeout!=null)this.b=self.setInterval(H.c8(new P.jG(this,a,Date.now(),b),0),a)
else throw H.f(P.ai("Periodic timer."))},
$ib5:1}
P.jH.prototype={
$0:function(){var u=this.a
u.b=null
u.c=1
this.b.$0()},
$S:3}
P.jG.prototype={
$0:function(){var u,t,s,r
u=this.a
t=u.c+1
s=this.b
if(s>0){r=Date.now()-this.c
if(r>(t+1)*s)t=C.d.f2(r,s)}u.c=t
this.d.$1(u)},
$S:2}
P.ba.prototype={
jO:function(a){if(this.c!==6)return!0
return this.b.b.cT(H.n(this.d,{func:1,ret:P.O,args:[P.N]}),a.a,P.O,P.N)},
jI:function(a){var u,t,s,r
u=this.e
t=P.N
s={futureOr:1,type:H.x(this,1)}
r=this.b.b
if(H.ff(u,{func:1,args:[P.N,P.aq]}))return H.kt(r.kg(u,a.a,a.b,null,t,P.aq),s)
else return H.kt(r.cT(H.n(u,{func:1,args:[P.N]}),a.a,null,t),s)}}
P.aD.prototype={
ex:function(a,b,c){var u,t,s,r
u=H.x(this,0)
H.n(a,{func:1,ret:{futureOr:1,type:c},args:[u]})
t=$.Z
if(t!==C.l){t.toString
H.n(a,{func:1,ret:{futureOr:1,type:c},args:[u]})
if(b!=null)b=P.n_(b,t)}H.n(a,{func:1,ret:{futureOr:1,type:c},args:[u]})
s=new P.aD(0,$.Z,[c])
r=b==null?1:3
this.d9(new P.ba(s,r,a,b,[u,c]))
return s},
km:function(a,b){return this.ex(a,null,b)},
d9:function(a){var u,t
u=this.a
if(u<=1){a.a=H.k(this.c,"$iba")
this.c=a}else{if(u===2){t=H.k(this.c,"$iaD")
u=t.a
if(u<4){t.d9(a)
return}this.a=u
this.c=t.c}u=this.b
u.toString
P.jN(null,null,u,H.n(new P.jf(this,a),{func:1,ret:-1}))}},
dz:function(a){var u,t,s,r,q,p
u={}
u.a=a
if(a==null)return
t=this.a
if(t<=1){s=H.k(this.c,"$iba")
this.c=a
if(s!=null){for(r=a;q=r.a,q!=null;r=q);r.a=s}}else{if(t===2){p=H.k(this.c,"$iaD")
t=p.a
if(t<4){p.dz(a)
return}this.a=t
this.c=p.c}u.a=this.bk(a)
t=this.b
t.toString
P.jN(null,null,t,H.n(new P.jj(u,this),{func:1,ret:-1}))}},
ci:function(){var u=H.k(this.c,"$iba")
this.c=null
return this.bk(u)},
bk:function(a){var u,t,s
for(u=a,t=null;u!=null;t=u,u=s){s=u.a
u.a=t}return t},
de:function(a){var u,t,s
u=H.x(this,0)
H.kt(a,{futureOr:1,type:u})
t=this.$ti
if(H.d8(a,"$icr",t,"$acr"))if(H.d8(a,"$iaD",t,null))P.ln(a,this)
else P.mP(a,this)
else{s=this.ci()
H.E(a,u)
this.a=4
this.c=a
P.cX(this,s)}},
df:function(a,b){var u
H.k(b,"$iaq")
u=this.ci()
this.a=8
this.c=new P.af(a,b)
P.cX(this,u)},
$icr:1}
P.jf.prototype={
$0:function(){P.cX(this.a,this.b)},
$S:2}
P.jj.prototype={
$0:function(){P.cX(this.b,this.a.a)},
$S:2}
P.jg.prototype={
$1:function(a){var u=this.a
u.a=0
u.de(a)},
$S:12}
P.jh.prototype={
$2:function(a,b){H.k(b,"$iaq")
this.a.df(a,b)},
$1:function(a){return this.$2(a,null)},
$S:44}
P.ji.prototype={
$0:function(){this.a.df(this.b,this.c)},
$S:2}
P.jm.prototype={
$0:function(){var u,t,s,r,q,p,o
u=null
try{r=this.c
u=r.b.b.ew(H.n(r.d,{func:1}),null)}catch(q){t=H.az(q)
s=H.cc(q)
if(this.d){r=H.k(this.a.a.c,"$iaf").a
p=t
p=r==null?p==null:r===p
r=p}else r=!1
p=this.b
if(r)p.b=H.k(this.a.a.c,"$iaf")
else p.b=new P.af(t,s)
p.a=!0
return}if(!!J.a_(u).$icr){if(u instanceof P.aD&&u.a>=4){if(u.a===8){r=this.b
r.b=H.k(u.c,"$iaf")
r.a=!0}return}o=this.a.a
r=this.b
r.b=u.km(new P.jn(o),null)
r.a=!1}},
$S:3}
P.jn.prototype={
$1:function(a){return this.a},
$S:34}
P.jl.prototype={
$0:function(){var u,t,s,r,q,p,o
try{s=this.b
r=H.x(s,0)
q=H.E(this.c,r)
p=H.x(s,1)
this.a.b=s.b.b.cT(H.n(s.d,{func:1,ret:{futureOr:1,type:p},args:[r]}),q,{futureOr:1,type:p},r)}catch(o){u=H.az(o)
t=H.cc(o)
s=this.a
s.b=new P.af(u,t)
s.a=!0}},
$S:3}
P.jk.prototype={
$0:function(){var u,t,s,r,q,p,o,n
try{u=H.k(this.a.a.c,"$iaf")
r=this.c
if(r.jO(u)&&r.e!=null){q=this.b
q.b=r.jI(u)
q.a=!1}}catch(p){t=H.az(p)
s=H.cc(p)
r=H.k(this.a.a.c,"$iaf")
q=r.a
o=t
n=this.b
if(q==null?o==null:q===o)n.b=r
else n.b=new P.af(t,s)
n.a=!0}},
$S:3}
P.el.prototype={}
P.ic.prototype={
gl:function(a){var u,t,s,r
u={}
t=new P.aD(0,$.Z,[P.B])
u.a=0
s=H.x(this,0)
r=H.n(new P.ie(u,this),{func:1,ret:-1,args:[s]})
H.n(new P.ig(u,t),{func:1,ret:-1})
W.a8(this.a,this.b,r,!1,s)
return t}}
P.ie.prototype={
$1:function(a){H.E(a,H.x(this.b,0));++this.a.a},
$S:function(){return{func:1,ret:P.K,args:[H.x(this.b,0)]}}}
P.ig.prototype={
$0:function(){this.b.de(this.a.a)},
$S:2}
P.cG.prototype={}
P.id.prototype={}
P.b5.prototype={}
P.af.prototype={
i:function(a){return H.m(this.a)},
$ibx:1}
P.jK.prototype={$ioa:1}
P.jM.prototype={
$0:function(){var u,t,s
u=this.a
t=u.a
if(t==null){s=new P.dP()
u.a=s
u=s}else u=t
t=this.b
if(t==null)throw H.f(u)
s=H.f(u)
s.stack=t.i(0)
throw s},
$S:2}
P.jt.prototype={
kh:function(a){var u,t,s
H.n(a,{func:1,ret:-1})
try{if(C.l===$.Z){a.$0()
return}P.lt(null,null,this,a,-1)}catch(s){u=H.az(s)
t=H.cc(s)
P.jL(null,null,this,u,H.k(t,"$iaq"))}},
ki:function(a,b,c){var u,t,s
H.n(a,{func:1,ret:-1,args:[c]})
H.E(b,c)
try{if(C.l===$.Z){a.$1(b)
return}P.lu(null,null,this,a,b,-1,c)}catch(s){u=H.az(s)
t=H.cc(s)
P.jL(null,null,this,u,H.k(t,"$iaq"))}},
ja:function(a,b){return new P.jv(this,H.n(a,{func:1,ret:b}),b)},
cp:function(a){return new P.ju(this,H.n(a,{func:1,ret:-1}))},
dM:function(a,b){return new P.jw(this,H.n(a,{func:1,ret:-1,args:[b]}),b)},
ew:function(a,b){H.n(a,{func:1,ret:b})
if($.Z===C.l)return a.$0()
return P.lt(null,null,this,a,b)},
cT:function(a,b,c,d){H.n(a,{func:1,ret:c,args:[d]})
H.E(b,d)
if($.Z===C.l)return a.$1(b)
return P.lu(null,null,this,a,b,c,d)},
kg:function(a,b,c,d,e,f){H.n(a,{func:1,ret:d,args:[e,f]})
H.E(b,e)
H.E(c,f)
if($.Z===C.l)return a.$2(b,c)
return P.n0(null,null,this,a,b,c,d,e,f)}}
P.jv.prototype={
$0:function(){return this.a.ew(this.b,this.c)},
$S:function(){return{func:1,ret:this.c}}}
P.ju.prototype={
$0:function(){return this.a.kh(this.b)},
$S:3}
P.jw.prototype={
$1:function(a){var u=this.c
return this.a.ki(this.b,H.E(a,u),u)},
$S:function(){return{func:1,ret:-1,args:[this.c]}}}
P.jr.prototype={
gT:function(a){var u=new P.eA(this,this.r,this.$ti)
u.c=this.e
return u},
gl:function(a){return this.a},
X:function(a,b){var u,t
if(typeof b==="string"&&b!=="__proto__"){u=this.b
if(u==null)return!1
return H.k(u[b],"$ic5")!=null}else{t=this.fA(b)
return t}},
fA:function(a){var u=this.d
if(u==null)return!1
return this.c0(this.dm(u,a),a)>=0},
h:function(a,b){var u,t
H.E(b,H.x(this,0))
if(typeof b==="string"&&b!=="__proto__"){u=this.b
if(u==null){u=P.kl()
this.b=u}return this.da(u,b)}else if(typeof b==="number"&&(b&1073741823)===b){t=this.c
if(t==null){t=P.kl()
this.c=t}return this.da(t,b)}else return this.fo(0,b)},
fo:function(a,b){var u,t,s
H.E(b,H.x(this,0))
u=this.d
if(u==null){u=P.kl()
this.d=u}t=this.dg(b)
s=u[t]
if(s==null)u[t]=[this.bY(b)]
else{if(this.c0(s,b)>=0)return!1
s.push(this.bY(b))}return!0},
O:function(a,b){if(typeof b==="number"&&(b&1073741823)===b)return this.i0(this.c,b)
else return this.hY(0,b)},
hY:function(a,b){var u,t,s
u=this.d
if(u==null)return!1
t=this.dm(u,b)
s=this.c0(t,b)
if(s<0)return!1
this.dE(t.splice(s,1)[0])
return!0},
da:function(a,b){H.E(b,H.x(this,0))
if(H.k(a[b],"$ic5")!=null)return!1
a[b]=this.bY(b)
return!0},
i0:function(a,b){var u
if(a==null)return!1
u=H.k(a[b],"$ic5")
if(u==null)return!1
this.dE(u)
delete a[b]
return!0},
dd:function(){this.r=1073741823&this.r+1},
bY:function(a){var u,t
u=new P.c5(H.E(a,H.x(this,0)))
if(this.e==null){this.f=u
this.e=u}else{t=this.f
u.c=t
t.b=u
this.f=u}++this.a
this.dd()
return u},
dE:function(a){var u,t
u=a.c
t=a.b
if(u==null)this.e=t
else u.b=t
if(t==null)this.f=u
else t.c=u;--this.a
this.dd()},
dg:function(a){return J.bL(a)&1073741823},
dm:function(a,b){return a[this.dg(b)]},
c0:function(a,b){var u,t
if(a==null)return-1
u=a.length
for(t=0;t<u;++t)if(J.a0(a[t].a,b))return t
return-1}}
P.c5.prototype={}
P.eA.prototype={
gI:function(a){return this.d},
B:function(){var u=this.a
if(this.b!==u.r)throw H.f(P.bv(u))
else{u=this.c
if(u==null){this.sdc(null)
return!1}else{this.sdc(H.E(u.a,H.x(this,0)))
this.c=this.c.b
return!0}}},
sdc:function(a){this.d=H.E(a,H.x(this,0))},
$iaT:1}
P.hd.prototype={$id:1,$ib:1}
P.v.prototype={
gT:function(a){return new H.cu(a,this.gl(a),0,[H.cb(this,a,"v",0)])},
H:function(a,b){return this.j(a,b)},
kp:function(a,b){var u,t
u=H.c([],[H.cb(this,a,"v",0)])
C.a.sl(u,this.gl(a))
for(t=0;t<this.gl(a);++t)C.a.Y(u,t,this.j(a,t))
return u},
ko:function(a){return this.kp(a,!0)},
p:function(a,b){var u,t
u=[H.cb(this,a,"v",0)]
H.l(b,"$ib",u,"$ab")
t=H.c([],u)
C.a.sl(t,C.d.p(this.gl(a),b.gl(b)))
C.a.be(t,0,this.gl(a),a)
C.a.be(t,this.gl(a),t.length,b)
return t},
i:function(a){return P.kb(a,"[","]")}}
P.hf.prototype={}
P.hg.prototype={
$2:function(a,b){var u,t
u=this.a
if(!u.a)this.b.a+=", "
u.a=!1
u=this.b
t=u.a+=H.m(a)
u.a=t+": "
u.a+=H.m(b)},
$S:27}
P.aa.prototype={
P:function(a,b){var u,t
H.n(b,{func:1,ret:-1,args:[H.cb(this,a,"aa",0),H.cb(this,a,"aa",1)]})
for(u=J.bM(this.ga7(a));u.B();){t=u.gI(u)
b.$2(t,this.j(a,t))}},
gl:function(a){return J.bN(this.ga7(a))},
i:function(a){return P.kU(a)},
$iP:1}
P.jy.prototype={
a6:function(a,b){var u
for(u=J.bM(H.l(b,"$id",this.$ti,"$ad"));u.B();)this.h(0,u.gI(u))},
i:function(a){return P.kb(this,"{","}")},
H:function(a,b){var u,t,s
if(b<0)H.u(P.aB(b,0,null,"index",null))
for(u=P.mT(this,this.r,H.x(this,0)),t=0;u.B();){s=u.d
if(b===t)return s;++t}throw H.f(P.W(b,this,"index",null,t))},
$id:1,
$il6:1}
P.eB.prototype={}
P.cl.prototype={}
P.cm.prototype={}
P.fJ.prototype={
$acl:function(){return[P.h,[P.b,P.B]]}}
P.h0.prototype={
i:function(a){return this.a}}
P.h_.prototype={
fB:function(a,b,c){var u,t,s,r,q,p
for(u=this.a,t=u.e,s=u.d,u=u.c,r=b,q=null;r<c;++r){if(r>=a.length)return H.j(a,r)
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
default:p=null}if(p!=null){if(q==null)q=new P.bk("")
if(r>b)q.a+=C.j.bg(a,b,r)
q.a+=p
b=r+1}}if(q==null)return
if(c>b)q.a+=J.m7(a,b,c)
u=q.a
return u.charCodeAt(0)==0?u:u},
$acm:function(){return[P.h,P.h]}}
P.iN.prototype={}
P.iO.prototype={
jk:function(a,b,c){var u,t,s
c=P.kg(b,c,a.length,null,null,null)
u=c-b
if(u===0)return new Uint8Array(0)
t=new Uint8Array(u*3)
s=new P.jI(t)
if(s.fN(a,b,c)!==c)s.dF(C.j.cu(a,c-1),0)
return new Uint8Array(t.subarray(0,H.mW(0,s.b,t.length)))},
jj:function(a){return this.jk(a,0,null)},
$acm:function(){return[P.h,[P.b,P.B]]}}
P.jI.prototype={
dF:function(a,b){var u,t,s,r,q
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
fN:function(a,b,c){var u,t,s,r,q,p,o
if(b!==c&&(C.j.cu(a,c-1)&64512)===55296)--c
for(u=this.c,t=u.length,s=b;s<c;++s){r=C.j.aJ(a,s)
if(r<=127){q=this.b
if(q>=t)break
this.b=q+1
u[q]=r}else if((r&64512)===55296){if(this.b+3>=t)break
p=s+1
if(this.dF(r,C.j.aJ(a,p)))s=p}else if(r<=2047){q=this.b
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
P.O.prototype={}
P.an.prototype={
A:function(a,b){if(b==null)return!1
return b instanceof P.an&&this.a===b.a&&!0},
gJ:function(a){var u=this.a
return(u^C.d.bl(u,30))&1073741823},
i:function(a){var u,t,s,r,q,p,o,n
u=P.mf(H.mz(this))
t=P.dl(H.mx(this))
s=P.dl(H.mt(this))
r=P.dl(H.mu(this))
q=P.dl(H.mw(this))
p=P.dl(H.my(this))
o=P.mg(H.mv(this))
n=u+"-"+t+"-"+s+" "+r+":"+q+":"+p+"."+o
return n}}
P.z.prototype={}
P.aQ.prototype={
p:function(a,b){return new P.aQ(C.d.p(this.a,b.gfG()))},
t:function(a,b){return new P.aQ(C.d.t(this.a,b.gfG()))},
A:function(a,b){if(b==null)return!1
return b instanceof P.aQ&&this.a===b.a},
gJ:function(a){return C.d.gJ(this.a)},
i:function(a){var u,t,s,r,q
u=new P.fG()
t=this.a
if(t<0)return"-"+new P.aQ(0-t).i(0)
s=u.$1(C.d.a3(t,6e7)%60)
r=u.$1(C.d.a3(t,1e6)%60)
q=new P.fF().$1(t%1e6)
return""+C.d.a3(t,36e8)+":"+H.m(s)+":"+H.m(r)+"."+H.m(q)}}
P.fF.prototype={
$1:function(a){if(a>=1e5)return""+a
if(a>=1e4)return"0"+a
if(a>=1000)return"00"+a
if(a>=100)return"000"+a
if(a>=10)return"0000"+a
return"00000"+a},
$S:21}
P.fG.prototype={
$1:function(a){if(a>=10)return""+a
return"0"+a},
$S:21}
P.bx.prototype={}
P.dP.prototype={
i:function(a){return"Throw of null."}}
P.aF.prototype={
gc_:function(){return"Invalid argument"+(!this.a?"(s)":"")},
gbZ:function(){return""},
i:function(a){var u,t,s,r,q,p
u=this.c
t=u!=null?" ("+u+")":""
u=this.d
s=u==null?"":": "+u
r=this.gc_()+t+s
if(!this.a)return r
q=this.gbZ()
p=P.fL(this.b)
return r+q+": "+p}}
P.c1.prototype={
gc_:function(){return"RangeError"},
gbZ:function(){var u,t,s
u=this.e
if(u==null){u=this.f
t=u!=null?": Not less than or equal to "+H.m(u):""}else{s=this.f
if(s==null)t=": Not greater than or equal to "+H.m(u)
else if(s>u)t=": Not in range "+H.m(u)+".."+H.m(s)+", inclusive"
else t=s<u?": Valid value range is empty":": Only valid value is "+H.m(u)}return t}}
P.h2.prototype={
gc_:function(){return"RangeError"},
gbZ:function(){var u,t
u=H.a9(this.b)
if(typeof u!=="number")return u.aX()
if(u<0)return": index must not be negative"
t=this.f
if(t===0)return": no indices are valid"
return": index should be less than "+H.m(t)},
gl:function(a){return this.f}}
P.iL.prototype={
i:function(a){return"Unsupported operation: "+this.a}}
P.iJ.prototype={
i:function(a){var u=this.a
return u!=null?"UnimplementedError: "+u:"UnimplementedError"}}
P.c3.prototype={
i:function(a){return"Bad state: "+this.a}}
P.fu.prototype={
i:function(a){var u=this.a
if(u==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+P.fL(u)+"."}}
P.hI.prototype={
i:function(a){return"Out of Memory"},
$ibx:1}
P.e0.prototype={
i:function(a){return"Stack Overflow"},
$ibx:1}
P.fz.prototype={
i:function(a){var u=this.a
return u==null?"Reading static variable during its initialization":"Reading static variable '"+u+"' during its initialization"}}
P.et.prototype={
i:function(a){return"Exception: "+this.a}}
P.fV.prototype={
i:function(a){var u,t,s,r
u=this.a
t=""!==u?"FormatException: "+u:"FormatException"
s=this.b
r=s.length>78?C.j.bg(s,0,75)+"...":s
return t+"\n"+r}}
P.by.prototype={}
P.B.prototype={}
P.d.prototype={
bO:function(a,b){var u=H.al(this,"d",0)
return new H.cU(this,H.n(b,{func:1,ret:P.O,args:[u]}),[u])},
gl:function(a){var u,t
u=this.gT(this)
for(t=0;u.B();)++t
return t},
gaH:function(a){var u,t
u=this.gT(this)
if(!u.B())throw H.f(H.h3())
t=u.gI(u)
if(u.B())throw H.f(H.mm())
return t},
H:function(a,b){var u,t,s
if(b<0)H.u(P.aB(b,0,null,"index",null))
for(u=this.gT(this),t=0;u.B();){s=u.gI(u)
if(b===t)return s;++t}throw H.f(P.W(b,this,"index",null,t))},
i:function(a){return P.mk(this,"(",")")}}
P.aT.prototype={}
P.b.prototype={$id:1}
P.P.prototype={}
P.K.prototype={
gJ:function(a){return P.N.prototype.gJ.call(this,this)},
i:function(a){return"null"}}
P.a4.prototype={}
P.N.prototype={constructor:P.N,$iN:1,
A:function(a,b){return this===b},
gJ:function(a){return H.cC(this)},
i:function(a){return"Instance of '"+H.c0(this)+"'"},
toString:function(){return this.i(this)}}
P.aq.prototype={}
P.h.prototype={$ikY:1}
P.bk.prototype={
gl:function(a){return this.a.length},
i:function(a){var u=this.a
return u.charCodeAt(0)==0?u:u}}
W.w.prototype={}
W.fi.prototype={
gl:function(a){return a.length}}
W.dc.prototype={
i:function(a){return String(a)},
$idc:1}
W.fj.prototype={
i:function(a){return String(a)}}
W.cg.prototype={$icg:1}
W.de.prototype={}
W.bs.prototype={$ibs:1}
W.bQ.prototype={
cX:function(a,b,c){if(c!=null)return this.fO(a,b,P.n7(c,null))
return this.fP(a,b)},
eH:function(a,b){return this.cX(a,b,null)},
fO:function(a,b,c){return a.getContext(b,c)},
fP:function(a,b){return a.getContext(b)},
$ibQ:1,
$ikJ:1}
W.bR.prototype={
fQ:function(a,b,c,d,e){return a.getImageData(b,c,d,e)},
jx:function(a,b,c,d,e,f){return a.drawImage(b,c,d,e,f)},
$ibR:1}
W.bt.prototype={
gl:function(a){return a.length}}
W.cn.prototype={$icn:1}
W.fv.prototype={
gl:function(a){return a.length}}
W.T.prototype={$iT:1}
W.co.prototype={
gl:function(a){return a.length}}
W.fw.prototype={}
W.aO.prototype={}
W.aP.prototype={}
W.fx.prototype={
gl:function(a){return a.length}}
W.fy.prototype={
gl:function(a){return a.length}}
W.fB.prototype={
gl:function(a){return a.length}}
W.aA.prototype={$iaA:1}
W.cp.prototype={
j5:function(a,b){return a.adoptNode(b)},
eI:function(a,b){return a.getElementById(b)}}
W.fC.prototype={
i:function(a){return String(a)}}
W.dm.prototype={
jn:function(a,b){return a.createHTMLDocument(b)}}
W.dn.prototype={
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.W(b,a,null,null,null))
return a[b]},
H:function(a,b){if(b<0||b>=a.length)return H.j(a,b)
return a[b]},
$iF:1,
$aF:function(){return[[P.ac,P.a4]]},
$av:function(){return[[P.ac,P.a4]]},
$id:1,
$ad:function(){return[[P.ac,P.a4]]},
$ib:1,
$ab:function(){return[[P.ac,P.a4]]},
$aA:function(){return[[P.ac,P.a4]]}}
W.dp.prototype={
i:function(a){return"Rectangle ("+H.m(a.left)+", "+H.m(a.top)+") "+H.m(this.gaG(a))+" x "+H.m(this.gaA(a))},
A:function(a,b){var u
if(b==null)return!1
if(!H.d8(b,"$iac",[P.a4],"$aac"))return!1
u=J.as(b)
return a.left===u.gbG(b)&&a.top===u.gbM(b)&&this.gaG(a)===u.gaG(b)&&this.gaA(a)===u.gaA(b)},
gJ:function(a){return W.lp(C.e.gJ(a.left),C.e.gJ(a.top),C.e.gJ(this.gaG(a)),C.e.gJ(this.gaA(a)))},
gdN:function(a){return a.bottom},
gaA:function(a){return a.height},
gbG:function(a){return a.left},
gbK:function(a){return a.right},
gbM:function(a){return a.top},
gaG:function(a){return a.width},
$iac:1,
$aac:function(){return[P.a4]}}
W.fD.prototype={
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.W(b,a,null,null,null))
return a[b]},
H:function(a,b){if(b<0||b>=a.length)return H.j(a,b)
return a[b]},
$iF:1,
$aF:function(){return[P.h]},
$av:function(){return[P.h]},
$id:1,
$ad:function(){return[P.h]},
$ib:1,
$ab:function(){return[P.h]},
$aA:function(){return[P.h]}}
W.fE.prototype={
gl:function(a){return a.length}}
W.j9.prototype={
gl:function(a){return this.b.length},
j:function(a,b){var u=this.b
if(b<0||b>=u.length)return H.j(u,b)
return H.k(u[b],"$iU")},
h:function(a,b){J.kE(this.a,b)
return b},
gT:function(a){var u=this.ko(this)
return new J.am(u,u.length,0,[H.x(u,0)])},
$av:function(){return[W.U]},
$ad:function(){return[W.U]},
$ab:function(){return[W.U]}}
W.U.prototype={
gj9:function(a){return new W.jb(a)},
gdQ:function(a){return new W.j9(a,a.children)},
gdR:function(a){var u,t,s,r
u=a.clientLeft
t=a.clientTop
s=a.clientWidth
r=a.clientHeight
if(typeof s!=="number")return s.aX()
if(s<0)s=-s*0
if(typeof r!=="number")return r.aX()
if(r<0)r=-r*0
return new P.ac(u,t,s,r,[P.a4])},
i:function(a){return a.localName},
af:function(a,b,c,d){var u,t,s,r
if(c==null){u=$.kO
if(u==null){u=H.c([],[W.ax])
t=new W.dO(u)
C.a.h(u,W.lo(null))
C.a.h(u,W.lq())
$.kO=t
d=t}else d=u
u=$.kN
if(u==null){u=new W.f4(d)
$.kN=u
c=u}else{u.a=d
c=u}}if($.bd==null){u=document
t=u.implementation
t=(t&&C.J).jn(t,"")
$.bd=t
$.k9=t.createRange()
t=$.bd
t.toString
t=t.createElement("base")
H.k(t,"$icg")
t.href=u.baseURI
u=$.bd.head;(u&&C.L).C(u,t)}u=$.bd
if(u.body==null){u.toString
t=u.createElement("body")
u.body=H.k(t,"$ibs")}u=$.bd
if(!!this.$ibs)s=u.body
else{t=a.tagName
u.toString
s=u.createElement(t)
u=$.bd.body;(u&&C.n).C(u,s)}if("createContextualFragment" in window.Range.prototype&&!C.a.X(C.X,a.tagName)){u=$.k9;(u&&C.E).eP(u,s)
u=$.k9
r=(u&&C.E).jl(u,b)}else{s.innerHTML=b
r=$.bd.createDocumentFragment()
for(u=J.as(r);t=s.firstChild,t!=null;)u.C(r,t)}u=$.bd.body
if(s==null?u!=null:s!==u)J.kF(s)
c.cZ(r)
C.z.j5(document,r)
return r},
jm:function(a,b,c){return this.af(a,b,c,null)},
eR:function(a,b,c,d){a.textContent=null
this.C(a,this.af(a,b,c,d))},
eQ:function(a,b){return this.eR(a,b,null,null)},
aW:function(a,b){return a.getAttribute(b)},
hZ:function(a,b){return a.removeAttribute(b)},
$iU:1,
gkj:function(a){return a.tagName}}
W.fI.prototype={
$1:function(a){return!!J.a_(H.k(a,"$iD")).$iU},
$S:19}
W.o.prototype={$io:1}
W.e.prototype={
j1:function(a,b,c,d){H.n(c,{func:1,args:[W.o]})
if(c!=null)this.fp(a,b,c,!1)},
fp:function(a,b,c,d){return a.addEventListener(b,H.c8(H.n(c,{func:1,args:[W.o]}),1),!1)},
$ie:1}
W.aR.prototype={$iaR:1}
W.fP.prototype={
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.W(b,a,null,null,null))
return a[b]},
H:function(a,b){if(b<0||b>=a.length)return H.j(a,b)
return a[b]},
$iF:1,
$aF:function(){return[W.aR]},
$av:function(){return[W.aR]},
$id:1,
$ad:function(){return[W.aR]},
$ib:1,
$ab:function(){return[W.aR]},
$aA:function(){return[W.aR]}}
W.fQ.prototype={
gl:function(a){return a.length}}
W.fU.prototype={
gl:function(a){return a.length}}
W.aS.prototype={$iaS:1}
W.du.prototype={}
W.fZ.prototype={
gl:function(a){return a.length}}
W.bV.prototype={
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.W(b,a,null,null,null))
return a[b]},
H:function(a,b){if(b<0||b>=a.length)return H.j(a,b)
return a[b]},
$iF:1,
$aF:function(){return[W.D]},
$av:function(){return[W.D]},
$id:1,
$ad:function(){return[W.D]},
$ib:1,
$ab:function(){return[W.D]},
$ibV:1,
$aA:function(){return[W.D]}}
W.dv.prototype={}
W.bz.prototype={$ibz:1,
gdU:function(a){return a.data}}
W.ct.prototype={$ict:1,$ikJ:1}
W.aV.prototype={$iaV:1}
W.dE.prototype={
i:function(a){return String(a)},
$idE:1}
W.cw.prototype={}
W.hp.prototype={
gl:function(a){return a.length}}
W.hq.prototype={
j:function(a,b){return P.bm(a.get(H.H(b)))},
P:function(a,b){var u,t
H.n(b,{func:1,ret:-1,args:[P.h,,]})
u=a.entries()
for(;!0;){t=u.next()
if(t.done)return
b.$2(t.value[0],P.bm(t.value[1]))}},
ga7:function(a){var u=H.c([],[P.h])
this.P(a,new W.hr(u))
return u},
gl:function(a){return a.size},
$aaa:function(){return[P.h,null]},
$iP:1,
$aP:function(){return[P.h,null]}}
W.hr.prototype={
$2:function(a,b){return C.a.h(this.a,a)},
$S:7}
W.hs.prototype={
j:function(a,b){return P.bm(a.get(H.H(b)))},
P:function(a,b){var u,t
H.n(b,{func:1,ret:-1,args:[P.h,,]})
u=a.entries()
for(;!0;){t=u.next()
if(t.done)return
b.$2(t.value[0],P.bm(t.value[1]))}},
ga7:function(a){var u=H.c([],[P.h])
this.P(a,new W.ht(u))
return u},
gl:function(a){return a.size},
$aaa:function(){return[P.h,null]},
$iP:1,
$aP:function(){return[P.h,null]}}
W.ht.prototype={
$2:function(a,b){return C.a.h(this.a,a)},
$S:7}
W.aY.prototype={$iaY:1}
W.hu.prototype={
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.W(b,a,null,null,null))
return a[b]},
H:function(a,b){if(b<0||b>=a.length)return H.j(a,b)
return a[b]},
$iF:1,
$aF:function(){return[W.aY]},
$av:function(){return[W.aY]},
$id:1,
$ad:function(){return[W.aY]},
$ib:1,
$ab:function(){return[W.aY]},
$aA:function(){return[W.aY]}}
W.ab.prototype={$iab:1}
W.ak.prototype={
gaH:function(a){var u,t
u=this.a
t=u.childNodes.length
if(t===0)throw H.f(P.l8("No elements"))
if(t>1)throw H.f(P.l8("More than one element"))
return u.firstChild},
a6:function(a,b){var u,t,s,r,q
H.l(b,"$id",[W.D],"$ad")
u=b.a
t=this.a
if(u!==t)for(s=u.childNodes.length,r=J.as(t),q=0;q<s;++q)r.C(t,u.firstChild)
return},
gT:function(a){var u=this.a.childNodes
return new W.ds(u,u.length,-1,[H.cb(C.Z,u,"A",0)])},
gl:function(a){return this.a.childNodes.length},
j:function(a,b){var u=this.a.childNodes
if(b<0||b>=u.length)return H.j(u,b)
return u[b]},
$av:function(){return[W.D]},
$ad:function(){return[W.D]},
$ab:function(){return[W.D]}}
W.D.prototype={
ka:function(a){var u=a.parentNode
if(u!=null)J.fh(u,a)},
i:function(a){var u=a.nodeValue
return u==null?this.eX(a):u},
C:function(a,b){return a.appendChild(b)},
i_:function(a,b){return a.removeChild(b)},
$iD:1}
W.cA.prototype={
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.W(b,a,null,null,null))
return a[b]},
H:function(a,b){if(b<0||b>=a.length)return H.j(a,b)
return a[b]},
$iF:1,
$aF:function(){return[W.D]},
$av:function(){return[W.D]},
$id:1,
$ad:function(){return[W.D]},
$ib:1,
$ab:function(){return[W.D]},
$aA:function(){return[W.D]}}
W.b_.prototype={$ib_:1,
gl:function(a){return a.length}}
W.hL.prototype={
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.W(b,a,null,null,null))
return a[b]},
H:function(a,b){if(b<0||b>=a.length)return H.j(a,b)
return a[b]},
$iF:1,
$aF:function(){return[W.b_]},
$av:function(){return[W.b_]},
$id:1,
$ad:function(){return[W.b_]},
$ib:1,
$ab:function(){return[W.b_]},
$aA:function(){return[W.b_]}}
W.dT.prototype={
jl:function(a,b){return a.createContextualFragment(b)},
eP:function(a,b){return a.selectNodeContents(b)}}
W.hU.prototype={
j:function(a,b){return P.bm(a.get(H.H(b)))},
P:function(a,b){var u,t
H.n(b,{func:1,ret:-1,args:[P.h,,]})
u=a.entries()
for(;!0;){t=u.next()
if(t.done)return
b.$2(t.value[0],P.bm(t.value[1]))}},
ga7:function(a){var u=H.c([],[P.h])
this.P(a,new W.hV(u))
return u},
gl:function(a){return a.size},
$aaa:function(){return[P.h,null]},
$iP:1,
$aP:function(){return[P.h,null]}}
W.hV.prototype={
$2:function(a,b){return C.a.h(this.a,a)},
$S:7}
W.hX.prototype={
gl:function(a){return a.length}}
W.b1.prototype={$ib1:1}
W.i6.prototype={
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.W(b,a,null,null,null))
return a[b]},
H:function(a,b){if(b<0||b>=a.length)return H.j(a,b)
return a[b]},
$iF:1,
$aF:function(){return[W.b1]},
$av:function(){return[W.b1]},
$id:1,
$ad:function(){return[W.b1]},
$ib:1,
$ab:function(){return[W.b1]},
$aA:function(){return[W.b1]}}
W.b2.prototype={$ib2:1}
W.i7.prototype={
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.W(b,a,null,null,null))
return a[b]},
H:function(a,b){if(b<0||b>=a.length)return H.j(a,b)
return a[b]},
$iF:1,
$aF:function(){return[W.b2]},
$av:function(){return[W.b2]},
$id:1,
$ad:function(){return[W.b2]},
$ib:1,
$ab:function(){return[W.b2]},
$aA:function(){return[W.b2]}}
W.b3.prototype={$ib3:1,
gl:function(a){return a.length}}
W.ia.prototype={
j:function(a,b){return this.dn(a,H.H(b))},
P:function(a,b){var u,t
H.n(b,{func:1,ret:-1,args:[P.h,P.h]})
for(u=0;!0;++u){t=this.fT(a,u)
if(t==null)return
b.$2(t,this.dn(a,t))}},
ga7:function(a){var u=H.c([],[P.h])
this.P(a,new W.ib(u))
return u},
gl:function(a){return a.length},
dn:function(a,b){return a.getItem(b)},
fT:function(a,b){return a.key(b)},
$aaa:function(){return[P.h,P.h]},
$iP:1,
$aP:function(){return[P.h,P.h]}}
W.ib.prototype={
$2:function(a,b){return C.a.h(this.a,a)},
$S:39}
W.aH.prototype={$iaH:1}
W.c4.prototype={}
W.e1.prototype={
af:function(a,b,c,d){var u,t
if("createContextualFragment" in window.Range.prototype)return this.bT(a,b,c,d)
u=W.mh("<table>"+b+"</table>",c,d)
t=document.createDocumentFragment()
t.toString
u.toString
new W.ak(t).a6(0,new W.ak(u))
return t}}
W.e2.prototype={
af:function(a,b,c,d){var u,t,s,r
if("createContextualFragment" in window.Range.prototype)return this.bT(a,b,c,d)
u=document
t=u.createDocumentFragment()
u=C.o.af(u.createElement("table"),b,c,d)
u.toString
u=new W.ak(u)
s=u.gaH(u)
s.toString
u=new W.ak(s)
r=u.gaH(u)
t.toString
r.toString
new W.ak(t).a6(0,new W.ak(r))
return t}}
W.ii.prototype={
af:function(a,b,c,d){var u,t,s
if("createContextualFragment" in window.Range.prototype)return this.bT(a,b,c,d)
u=document
t=u.createDocumentFragment()
u=C.o.af(u.createElement("table"),b,c,d)
u.toString
u=new W.ak(u)
s=u.gaH(u)
t.toString
s.toString
new W.ak(t).a6(0,new W.ak(s))
return t}}
W.cI.prototype={$icI:1}
W.b4.prototype={$ib4:1}
W.aI.prototype={$iaI:1}
W.ik.prototype={
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.W(b,a,null,null,null))
return a[b]},
H:function(a,b){if(b<0||b>=a.length)return H.j(a,b)
return a[b]},
$iF:1,
$aF:function(){return[W.aI]},
$av:function(){return[W.aI]},
$id:1,
$ad:function(){return[W.aI]},
$ib:1,
$ab:function(){return[W.aI]},
$aA:function(){return[W.aI]}}
W.il.prototype={
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.W(b,a,null,null,null))
return a[b]},
H:function(a,b){if(b<0||b>=a.length)return H.j(a,b)
return a[b]},
$iF:1,
$aF:function(){return[W.b4]},
$av:function(){return[W.b4]},
$id:1,
$ad:function(){return[W.b4]},
$ib:1,
$ab:function(){return[W.b4]},
$aA:function(){return[W.b4]}}
W.iq.prototype={
gl:function(a){return a.length}}
W.b6.prototype={$ib6:1}
W.aJ.prototype={$iaJ:1}
W.iu.prototype={
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.W(b,a,null,null,null))
return a[b]},
H:function(a,b){if(b<0||b>=a.length)return H.j(a,b)
return a[b]},
$iF:1,
$aF:function(){return[W.b6]},
$av:function(){return[W.b6]},
$id:1,
$ad:function(){return[W.b6]},
$ib:1,
$ab:function(){return[W.b6]},
$aA:function(){return[W.b6]}}
W.iv.prototype={
gl:function(a){return a.length}}
W.bF.prototype={}
W.iM.prototype={
i:function(a){return String(a)}}
W.j1.prototype={$ikJ:1}
W.j2.prototype={
gl:function(a){return a.length}}
W.b9.prototype={
gjt:function(a){if(a.deltaY!==undefined)return a.deltaY
throw H.f(P.ai("deltaY is not supported"))},
gjs:function(a){if(a.deltaX!==undefined)return a.deltaX
throw H.f(P.ai("deltaX is not supported"))},
$ib9:1}
W.cV.prototype={
i5:function(a,b){return a.requestAnimationFrame(H.c8(H.n(b,{func:1,ret:-1,args:[P.a4]}),1))},
fH:function(a){if(!!(a.requestAnimationFrame&&a.cancelAnimationFrame))return;(function(b){var u=['ms','moz','webkit','o']
for(var t=0;t<u.length&&!b.requestAnimationFrame;++t){b.requestAnimationFrame=b[u[t]+'RequestAnimationFrame']
b.cancelAnimationFrame=b[u[t]+'CancelAnimationFrame']||b[u[t]+'CancelRequestAnimationFrame']}if(b.requestAnimationFrame&&b.cancelAnimationFrame)return
b.requestAnimationFrame=function(c){return window.setTimeout(function(){c(Date.now())},16)}
b.cancelAnimationFrame=function(c){clearTimeout(c)}})(a)}}
W.cW.prototype={$icW:1}
W.ja.prototype={
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.W(b,a,null,null,null))
return a[b]},
H:function(a,b){if(b<0||b>=a.length)return H.j(a,b)
return a[b]},
$iF:1,
$aF:function(){return[W.T]},
$av:function(){return[W.T]},
$id:1,
$ad:function(){return[W.T]},
$ib:1,
$ab:function(){return[W.T]},
$aA:function(){return[W.T]}}
W.eo.prototype={
i:function(a){return"Rectangle ("+H.m(a.left)+", "+H.m(a.top)+") "+H.m(a.width)+" x "+H.m(a.height)},
A:function(a,b){var u
if(b==null)return!1
if(!H.d8(b,"$iac",[P.a4],"$aac"))return!1
u=J.as(b)
return a.left===u.gbG(b)&&a.top===u.gbM(b)&&a.width===u.gaG(b)&&a.height===u.gaA(b)},
gJ:function(a){return W.lp(C.e.gJ(a.left),C.e.gJ(a.top),C.e.gJ(a.width),C.e.gJ(a.height))},
gaA:function(a){return a.height},
gaG:function(a){return a.width}}
W.jo.prototype={
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.W(b,a,null,null,null))
return a[b]},
H:function(a,b){if(b<0||b>=a.length)return H.j(a,b)
return a[b]},
$iF:1,
$aF:function(){return[W.aS]},
$av:function(){return[W.aS]},
$id:1,
$ad:function(){return[W.aS]},
$ib:1,
$ab:function(){return[W.aS]},
$aA:function(){return[W.aS]}}
W.eG.prototype={
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.W(b,a,null,null,null))
return a[b]},
H:function(a,b){if(b<0||b>=a.length)return H.j(a,b)
return a[b]},
$iF:1,
$aF:function(){return[W.D]},
$av:function(){return[W.D]},
$id:1,
$ad:function(){return[W.D]},
$ib:1,
$ab:function(){return[W.D]},
$aA:function(){return[W.D]}}
W.jB.prototype={
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.W(b,a,null,null,null))
return a[b]},
H:function(a,b){if(b<0||b>=a.length)return H.j(a,b)
return a[b]},
$iF:1,
$aF:function(){return[W.b3]},
$av:function(){return[W.b3]},
$id:1,
$ad:function(){return[W.b3]},
$ib:1,
$ab:function(){return[W.b3]},
$aA:function(){return[W.b3]}}
W.jC.prototype={
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.W(b,a,null,null,null))
return a[b]},
H:function(a,b){if(b<0||b>=a.length)return H.j(a,b)
return a[b]},
$iF:1,
$aF:function(){return[W.aH]},
$av:function(){return[W.aH]},
$id:1,
$ad:function(){return[W.aH]},
$ib:1,
$ab:function(){return[W.aH]},
$aA:function(){return[W.aH]}}
W.j8.prototype={
P:function(a,b){var u,t,s,r,q,p
H.n(b,{func:1,ret:-1,args:[P.h,P.h]})
for(u=this.ga7(this),t=u.length,s=this.a,r=J.as(s),q=0;q<u.length;u.length===t||(0,H.C)(u),++q){p=u[q]
b.$2(p,r.aW(s,p))}},
ga7:function(a){var u,t,s,r,q
u=this.a.attributes
t=H.c([],[P.h])
for(s=u.length,r=0;r<s;++r){if(r>=u.length)return H.j(u,r)
q=H.k(u[r],"$icW")
if(q.namespaceURI==null)C.a.h(t,q.name)}return t},
$aaa:function(){return[P.h,P.h]},
$aP:function(){return[P.h,P.h]}}
W.jb.prototype={
j:function(a,b){return J.k3(this.a,H.H(b))},
gl:function(a){return this.ga7(this).length}}
W.jc.prototype={}
W.kk.prototype={}
W.jd.prototype={}
W.je.prototype={
$1:function(a){return this.a.$1(H.k(a,"$io"))},
$S:35}
W.bH.prototype={
f9:function(a){var u,t
u=$.kC()
if(u.a===0){for(t=0;t<262;++t)u.Y(0,C.W[t],W.ni())
for(t=0;t<12;++t)u.Y(0,C.u[t],W.nj())}},
aQ:function(a){return $.lZ().X(0,W.cq(a))},
ao:function(a,b,c){var u,t,s
u=W.cq(a)
t=$.kC()
s=t.j(0,H.m(u)+"::"+b)
if(s==null)s=t.j(0,"*::"+b)
if(s==null)return!1
return H.kq(s.$4(a,b,c,this))},
$iax:1}
W.A.prototype={
gT:function(a){return new W.ds(a,this.gl(a),-1,[H.cb(this,a,"A",0)])}}
W.dO.prototype={
aQ:function(a){return C.a.dK(this.a,new W.hD(a))},
ao:function(a,b,c){return C.a.dK(this.a,new W.hC(a,b,c))},
$iax:1}
W.hD.prototype={
$1:function(a){return H.k(a,"$iax").aQ(this.a)},
$S:22}
W.hC.prototype={
$1:function(a){return H.k(a,"$iax").ao(this.a,this.b,this.c)},
$S:22}
W.eO.prototype={
fj:function(a,b,c,d){var u,t,s
this.a.a6(0,c)
u=b.bO(0,new W.jz())
t=b.bO(0,new W.jA())
this.b.a6(0,u)
s=this.c
s.a6(0,C.Y)
s.a6(0,t)},
aQ:function(a){return this.a.X(0,W.cq(a))},
ao:function(a,b,c){var u,t
u=W.cq(a)
t=this.c
if(t.X(0,H.m(u)+"::"+b))return this.d.j6(c)
else if(t.X(0,"*::"+b))return this.d.j6(c)
else{t=this.b
if(t.X(0,H.m(u)+"::"+b))return!0
else if(t.X(0,"*::"+b))return!0
else if(t.X(0,H.m(u)+"::*"))return!0
else if(t.X(0,"*::*"))return!0}return!1},
$iax:1}
W.jz.prototype={
$1:function(a){return!C.a.X(C.u,H.H(a))},
$S:16}
W.jA.prototype={
$1:function(a){return C.a.X(C.u,H.H(a))},
$S:16}
W.jE.prototype={
ao:function(a,b,c){if(this.f1(a,b,c))return!0
if(b==="template"&&c==="")return!0
if(J.k3(a,"template")==="")return this.e.X(0,b)
return!1}}
W.jF.prototype={
$1:function(a){return"TEMPLATE::"+H.m(H.H(a))},
$S:33}
W.jD.prototype={
aQ:function(a){var u=J.a_(a)
if(!!u.$icD)return!1
u=!!u.$ip
if(u&&W.cq(a)==="foreignObject")return!1
if(u)return!0
return!1},
ao:function(a,b,c){if(b==="is"||C.j.bS(b,"on"))return!1
return this.aQ(a)},
$iax:1}
W.ds.prototype={
B:function(){var u,t
u=this.c+1
t=this.b
if(u<t){this.sdq(J.m2(this.a,u))
this.c=u
return!0}this.sdq(null)
this.c=t
return!1},
gI:function(a){return this.d},
sdq:function(a){this.d=H.E(a,H.x(this,0))},
$iaT:1}
W.ax.prototype={}
W.jx.prototype={$inY:1}
W.f4.prototype={
cZ:function(a){new W.jJ(this).$2(a,null)},
b2:function(a,b){if(b==null)J.kF(a)
else J.fh(b,a)},
ia:function(a,b){var u,t,s,r,q,p,o,n
u=!0
t=null
s=null
try{t=J.m5(a)
s=J.k3(t.a,"is")
r=function(c){if(!(c.attributes instanceof NamedNodeMap))return true
var m=c.childNodes
if(c.lastChild&&c.lastChild!==m[m.length-1])return true
if(c.children)if(!(c.children instanceof HTMLCollection||c.children instanceof NodeList))return true
var l=0
if(c.children)l=c.children.length
for(var k=0;k<l;k++){var j=c.children[k]
if(j.id=='attributes'||j.name=='attributes'||j.id=='lastChild'||j.name=='lastChild'||j.id=='children'||j.name=='children')return true}return false}(a)
u=r?!0:!(a.attributes instanceof NamedNodeMap)}catch(o){H.az(o)}q="element unprintable"
try{q=J.aM(a)}catch(o){H.az(o)}try{p=W.cq(a)
this.i9(H.k(a,"$iU"),b,u,q,p,H.k(t,"$iP"),H.H(s))}catch(o){if(H.az(o) instanceof P.aF)throw o
else{this.b2(a,b)
window
n="Removing corrupted element "+H.m(q)
if(typeof console!="undefined")window.console.warn(n)}}},
i9:function(a,b,c,d,e,f,g){var u,t,s,r,q,p
if(c){this.b2(a,b)
window
u="Removing element due to corrupted attributes on <"+d+">"
if(typeof console!="undefined")window.console.warn(u)
return}if(!this.a.aQ(a)){this.b2(a,b)
window
u="Removing disallowed element <"+H.m(e)+"> from "+H.m(b)
if(typeof console!="undefined")window.console.warn(u)
return}if(g!=null)if(!this.a.ao(a,"is",g)){this.b2(a,b)
window
u="Removing disallowed type extension <"+H.m(e)+' is="'+g+'">'
if(typeof console!="undefined")window.console.warn(u)
return}u=f.ga7(f)
t=H.c(u.slice(0),[H.x(u,0)])
for(s=f.ga7(f).length-1,u=f.a,r=J.as(u);s>=0;--s){if(s>=t.length)return H.j(t,s)
q=t[s]
if(!this.a.ao(a,J.m8(q),r.aW(u,q))){window
p="Removing disallowed attribute <"+H.m(e)+" "+q+'="'+H.m(r.aW(u,q))+'">'
if(typeof console!="undefined")window.console.warn(p)
r.aW(u,q)
r.hZ(u,q)}}if(!!J.a_(a).$icI)this.cZ(a.content)},
$inJ:1}
W.jJ.prototype={
$2:function(a,b){var u,t,s,r,q,p
s=this.a
switch(a.nodeType){case 1:s.ia(a,b)
break
case 8:case 11:case 3:case 4:break
default:s.b2(a,b)}u=a.lastChild
for(s=a==null;null!=u;){t=null
try{t=u.previousSibling}catch(r){H.az(r)
q=H.k(u,"$iD")
if(s){p=q.parentNode
if(p!=null)J.fh(p,q)}else J.fh(a,q)
u=null
t=a.lastChild}if(u!=null)this.$2(u,a)
u=H.k(t,"$iD")}},
$S:32}
W.en.prototype={}
W.ep.prototype={}
W.eq.prototype={}
W.er.prototype={}
W.es.prototype={}
W.eu.prototype={}
W.ev.prototype={}
W.ew.prototype={}
W.ex.prototype={}
W.eC.prototype={}
W.eD.prototype={}
W.eE.prototype={}
W.eF.prototype={}
W.eH.prototype={}
W.eI.prototype={}
W.eL.prototype={}
W.eM.prototype={}
W.eN.prototype={}
W.d1.prototype={}
W.d2.prototype={}
W.eP.prototype={}
W.eQ.prototype={}
W.eU.prototype={}
W.eX.prototype={}
W.eY.prototype={}
W.d3.prototype={}
W.d4.prototype={}
W.f_.prototype={}
W.f0.prototype={}
W.f5.prototype={}
W.f6.prototype={}
W.f7.prototype={}
W.f8.prototype={}
W.f9.prototype={}
W.fa.prototype={}
W.fb.prototype={}
W.fc.prototype={}
W.fd.prototype={}
W.fe.prototype={}
P.f3.prototype={$ibz:1,
gdU:function(a){return this.a}}
P.jO.prototype={
$2:function(a,b){this.a[a]=b},
$S:27}
P.fR.prototype={
gc3:function(){var u,t,s
u=this.b
t=H.al(u,"v",0)
s=W.U
return new H.hh(new H.cU(u,H.n(new P.fS(),{func:1,ret:P.O,args:[t]}),[t]),H.n(new P.fT(),{func:1,ret:s,args:[t]}),[t,s])},
h:function(a,b){J.kE(this.b.a,b)},
gl:function(a){return J.bN(this.gc3().a)},
j:function(a,b){var u=this.gc3()
return u.b.$1(J.k2(u.a,b))},
gT:function(a){var u=P.kT(this.gc3(),!1,W.U)
return new J.am(u,u.length,0,[H.x(u,0)])},
$av:function(){return[W.U]},
$ad:function(){return[W.U]},
$ab:function(){return[W.U]}}
P.fS.prototype={
$1:function(a){return!!J.a_(H.k(a,"$iD")).$iU},
$S:19}
P.fT.prototype={
$1:function(a){return H.i(H.k(a,"$iD"),"$iU")},
$S:31}
P.js.prototype={
gbK:function(a){var u=this.a
if(typeof u!=="number")return u.p()
return H.E(u+this.c,H.x(this,0))},
gdN:function(a){var u=this.b
if(typeof u!=="number")return u.p()
return H.E(u+this.d,H.x(this,0))},
i:function(a){return"Rectangle ("+H.m(this.a)+", "+H.m(this.b)+") "+this.c+" x "+this.d},
A:function(a,b){var u,t,s,r
if(b==null)return!1
if(H.d8(b,"$iac",[P.a4],"$aac")){u=this.a
t=J.as(b)
if(u==t.gbG(b)){s=this.b
if(s==t.gbM(b)){if(typeof u!=="number")return u.p()
r=H.x(this,0)
if(H.E(u+this.c,r)===t.gbK(b)){if(typeof s!=="number")return s.p()
u=H.E(s+this.d,r)===t.gdN(b)}else u=!1}else u=!1}else u=!1}else u=!1
return u},
gJ:function(a){var u,t,s,r,q
u=this.a
t=J.bL(u)
s=this.b
r=J.bL(s)
if(typeof u!=="number")return u.p()
q=H.x(this,0)
u=C.d.gJ(H.E(u+this.c,q))
if(typeof s!=="number")return s.p()
q=C.d.gJ(H.E(s+this.d,q))
return P.mS(P.jq(P.jq(P.jq(P.jq(0,t),r),u),q))}}
P.ac.prototype={
gbG:function(a){return this.a},
gbM:function(a){return this.b},
gaG:function(a){return this.c},
gaA:function(a){return this.d}}
P.bg.prototype={$ibg:1}
P.h9.prototype={
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.W(b,a,null,null,null))
return this.as(a,b)},
H:function(a,b){return this.j(a,b)},
as:function(a,b){return a.getItem(b)},
$av:function(){return[P.bg]},
$id:1,
$ad:function(){return[P.bg]},
$ib:1,
$ab:function(){return[P.bg]},
$aA:function(){return[P.bg]}}
P.bi.prototype={$ibi:1}
P.hG.prototype={
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.W(b,a,null,null,null))
return this.as(a,b)},
H:function(a,b){return this.j(a,b)},
as:function(a,b){return a.getItem(b)},
$av:function(){return[P.bi]},
$id:1,
$ad:function(){return[P.bi]},
$ib:1,
$ab:function(){return[P.bi]},
$aA:function(){return[P.bi]}}
P.hN.prototype={
gl:function(a){return a.length}}
P.cD.prototype={$icD:1}
P.ih.prototype={
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.W(b,a,null,null,null))
return this.as(a,b)},
H:function(a,b){return this.j(a,b)},
as:function(a,b){return a.getItem(b)},
$av:function(){return[P.h]},
$id:1,
$ad:function(){return[P.h]},
$ib:1,
$ab:function(){return[P.h]},
$aA:function(){return[P.h]}}
P.p.prototype={
gdQ:function(a){return new P.fR(a,new W.ak(a))},
af:function(a,b,c,d){var u,t,s,r,q,p
u=H.c([],[W.ax])
C.a.h(u,W.lo(null))
C.a.h(u,W.lq())
C.a.h(u,new W.jD())
c=new W.f4(new W.dO(u))
t='<svg version="1.1">'+b+"</svg>"
u=document
s=u.body
r=(s&&C.n).jm(s,t,c)
q=u.createDocumentFragment()
r.toString
u=new W.ak(r)
p=u.gaH(u)
for(u=J.as(q);s=p.firstChild,s!=null;)u.C(q,s)
return q},
$ip:1}
P.bl.prototype={$ibl:1}
P.iw.prototype={
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.W(b,a,null,null,null))
return this.as(a,b)},
H:function(a,b){return this.j(a,b)},
as:function(a,b){return a.getItem(b)},
$av:function(){return[P.bl]},
$id:1,
$ad:function(){return[P.bl]},
$ib:1,
$ab:function(){return[P.bl]},
$aA:function(){return[P.bl]}}
P.ey.prototype={}
P.ez.prototype={}
P.eJ.prototype={}
P.eK.prototype={}
P.eV.prototype={}
P.eW.prototype={}
P.f1.prototype={}
P.f2.prototype={}
P.fl.prototype={
gl:function(a){return a.length}}
P.fm.prototype={
j:function(a,b){return P.bm(a.get(H.H(b)))},
P:function(a,b){var u,t
H.n(b,{func:1,ret:-1,args:[P.h,,]})
u=a.entries()
for(;!0;){t=u.next()
if(t.done)return
b.$2(t.value[0],P.bm(t.value[1]))}},
ga7:function(a){var u=H.c([],[P.h])
this.P(a,new P.fn(u))
return u},
gl:function(a){return a.size},
$aaa:function(){return[P.h,null]},
$iP:1,
$aP:function(){return[P.h,null]}}
P.fn.prototype={
$2:function(a,b){return C.a.h(this.a,a)},
$S:7}
P.fo.prototype={
gl:function(a){return a.length}}
P.bO.prototype={}
P.hH.prototype={
gl:function(a){return a.length}}
P.em.prototype={}
P.df.prototype={$idf:1}
P.dt.prototype={$idt:1}
P.dS.prototype={$idS:1}
P.c2.prototype={
dG:function(a,b){return a.activeTexture(b)},
dL:function(a,b,c){return a.attachShader(b,c)},
ap:function(a,b,c){return a.bindBuffer(b,c)},
jb:function(a,b,c){return a.bindFramebuffer(b,c)},
aR:function(a,b,c){return a.bindTexture(b,c)},
jc:function(a,b,c){return a.blendFunc(b,c)},
dO:function(a,b,c,d){return a.bufferData(b,c,d)},
je:function(a,b){return a.clear(b)},
jf:function(a,b,c,d,e){return a.clearColor(b,c,d,e)},
jg:function(a,b){return a.clearDepth(b)},
ji:function(a,b){return a.compileShader(b)},
jo:function(a,b){return a.createShader(b)},
jq:function(a,b){return a.deleteProgram(b)},
jr:function(a,b){return a.deleteShader(b)},
ju:function(a,b){return a.depthFunc(b)},
jv:function(a,b){return a.disable(b)},
dW:function(a,b){return a.disableVertexAttribArray(b)},
jw:function(a,b,c,d,e){return a.drawElements(b,c,H.a9(d),H.a9(e))},
cz:function(a,b){return a.enable(b)},
dZ:function(a,b){return a.enableVertexAttribArray(b)},
eD:function(a,b,c){return a.getActiveAttrib(b,c)},
eE:function(a,b,c){return a.getActiveUniform(b,c)},
eF:function(a,b,c){return a.getAttribLocation(b,c)},
cY:function(a,b){return a.getParameter(b)},
eJ:function(a,b){return a.getProgramInfoLog(b)},
bP:function(a,b,c){return a.getProgramParameter(b,c)},
eK:function(a,b){return a.getShaderInfoLog(b)},
eL:function(a,b,c){return a.getShaderParameter(b,c)},
eM:function(a,b,c){return a.getUniformLocation(b,c)},
jM:function(a,b){return a.linkProgram(b)},
k8:function(a,b,c){return a.pixelStorei(b,c)},
eU:function(a,b,c){return a.shaderSource(b,c)},
kl:function(a,b,c,d,e,f,g,h,i,j){var u,t
u=J.a_(g)
if(!!u.$ibz)t=!0
else t=!1
if(t){this.ir(a,b,c,d,e,f,P.n8(g))
return}if(!!u.$ict)u=!0
else u=!1
if(u){this.is(a,b,c,d,e,f,g)
return}throw H.f(P.m9("Incorrect number or type of arguments"))},
kk:function(a,b,c,d,e,f,g){return this.kl(a,b,c,d,e,f,g,null,null,null)},
ir:function(a,b,c,d,e,f,g){return a.texImage2D(b,c,d,e,f,g)},
is:function(a,b,c,d,e,f,g){return a.texImage2D(b,c,d,e,f,g)},
bL:function(a,b,c,d){return a.texParameteri(b,c,d)},
K:function(a,b,c){return a.uniform1f(b,c)},
R:function(a,b,c){return a.uniform1i(b,c)},
u:function(a,b,c,d,e){return a.uniform3f(b,c,d,e)},
eA:function(a,b,c,d){return a.uniformMatrix3fv(b,!1,d)},
eB:function(a,b,c,d){return a.uniformMatrix4fv(b,!1,d)},
cV:function(a,b){return a.useProgram(b)},
kr:function(a,b,c,d,e,f,g){return a.vertexAttribPointer(b,c,d,!1,f,g)},
ks:function(a,b,c,d,e){return a.viewport(b,c,d,e)},
$ic2:1}
P.dW.prototype={$idW:1}
P.e3.prototype={$ie3:1}
P.ec.prototype={$iec:1}
P.i8.prototype={
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.W(b,a,null,null,null))
return P.bm(this.fS(a,b))},
H:function(a,b){return this.j(a,b)},
fS:function(a,b){return a.item(b)},
$av:function(){return[[P.P,,,]]},
$id:1,
$ad:function(){return[[P.P,,,]]},
$ib:1,
$ab:function(){return[[P.P,,,]]},
$aA:function(){return[[P.P,,,]]}}
P.eR.prototype={}
P.eS.prototype={}
O.a1.prototype={
bi:function(a){this.sfX(H.c([],[a]))
this.sdv(null)
this.sdr(null)
this.sdw(null)},
d_:function(a,b,c){var u=H.al(this,"a1",0)
H.n(b,{func:1,ret:P.O,args:[[P.d,u]]})
u={func:1,ret:-1,args:[P.B,[P.d,u]]}
H.n(a,u)
H.n(c,u)
this.sdv(b)
this.sdr(a)
this.sdw(c)},
aY:function(a,b){return this.d_(a,null,b)},
du:function(a){var u
H.l(a,"$id",[H.al(this,"a1",0)],"$ad")
u=this.b
if(u!=null)return u.$1(a)
return!0},
d3:function(a,b){var u
H.l(b,"$id",[H.al(this,"a1",0)],"$ad")
u=this.c
if(u!=null)u.$2(a,b)},
gl:function(a){return this.a.length},
gT:function(a){var u=this.a
return new J.am(u,u.length,0,[H.x(u,0)])},
H:function(a,b){var u=this.a
if(b<0||b>=u.length)return H.j(u,b)
return u[b]},
h:function(a,b){var u,t,s
u=H.al(this,"a1",0)
H.E(b,u)
u=[u]
if(this.du(H.c([b],u))){t=this.a
s=t.length
C.a.h(t,b)
this.d3(s,H.c([b],u))}},
a6:function(a,b){var u,t
H.l(b,"$id",[H.al(this,"a1",0)],"$ad")
if(this.du(b)){u=this.a
t=u.length
C.a.a6(u,b)
this.d3(t,b)}},
sfX:function(a){this.a=H.l(a,"$ib",[H.al(this,"a1",0)],"$ab")},
sdv:function(a){this.b=H.n(a,{func:1,ret:P.O,args:[[P.d,H.al(this,"a1",0)]]})},
sdr:function(a){this.c=H.n(a,{func:1,ret:-1,args:[P.B,[P.d,H.al(this,"a1",0)]]})},
sdw:function(a){this.d=H.n(a,{func:1,ret:-1,args:[P.B,[P.d,H.al(this,"a1",0)]]})},
$id:1}
O.cv.prototype={
gl:function(a){return this.a.length},
gq:function(){var u=this.b
if(u==null){u=D.J()
this.b=u}return u},
f7:function(a){var u=this.b
if(u!=null)u.F(a)},
aI:function(){return this.f7(null)},
ga0:function(a){var u=this.a
if(u.length>0)return C.a.gbF(u)
else return V.bY()},
bJ:function(a){var u=this.a
if(a==null)C.a.h(u,V.bY())
else C.a.h(u,a)
this.aI()},
aD:function(){var u=this.a
if(u.length>0){u.pop()
this.aI()}},
sc5:function(a){this.a=H.l(a,"$ib",[V.ao],"$ab")}}
E.fp.prototype={}
E.ag.prototype={
sbR:function(a,b){var u,t,s
u=this.c
if(u!=b){this.c=b
this.d=b
this.e=null
if(u!=null)u.gq().O(0,this.geq())
t=this.c
if(t!=null)t.gq().h(0,this.geq())
s=new D.M("shape",u,this.c,this,[F.dX])
s.b=!0
this.aT(s)}},
al:function(a,b){var u
for(u=this.y.a,u=new J.am(u,u.length,0,[H.x(u,0)]);u.B();)u.d.al(0,b)},
ab:function(a){var u,t
u=a.dx
C.a.h(u.a,u.ga0(u))
u.aI()
a.cP(this.f)
u=a.dy
t=(u&&C.a).gbF(u)
if(t!=null&&this.d!=null)t.eu(a,this)
for(u=this.y.a,u=new J.am(u,u.length,0,[H.x(u,0)]);u.B();)u.d.ab(a)
a.cO()
a.dx.aD()},
gq:function(){var u=this.z
if(u==null){u=D.J()
this.z=u}return u},
aT:function(a){var u=this.z
if(u!=null)u.F(a)},
aa:function(){return this.aT(null)},
er:function(a){H.k(a,"$iy")
this.e=null
this.aT(a)},
jW:function(){return this.er(null)},
ep:function(a){this.aT(H.k(a,"$iy"))},
jT:function(){return this.ep(null)},
jS:function(a,b){var u,t,s,r,q,p,o
H.l(b,"$id",[E.ag],"$ad")
for(u=b.length,t=this.geo(),s={func:1,ret:-1,args:[D.y]},r=[s],q=0;q<b.length;b.length===u||(0,H.C)(b),++q){p=b[q]
if(p!=null){o=p.z
if(o==null){o=new D.bT()
o.sad(null)
o.saO(null)
o.c=null
o.d=0
p.z=o}H.n(t,s)
if(o.a==null)o.sad(H.c([],r))
o=o.a;(o&&C.a).h(o,t)}}this.aa()},
jV:function(a,b){var u,t
H.l(b,"$id",[E.ag],"$ad")
for(u=b.gT(b),t=this.geo();u.B();)u.gI(u).gq().O(0,t)
this.aa()},
i:function(a){var u,t
u=this.a
t=u.length
if(t<=0)return"Unnamed entity"
return u},
sf8:function(a,b){this.y=H.l(b,"$ia1",[E.ag],"$aa1")},
$iaZ:1}
E.hQ.prototype={
f4:function(a,b){var u,t
this.c=512
this.d=512
this.e=0
u=new P.an(Date.now(),!1)
this.f=u
this.r=u
this.x=u
this.y=0
this.z=null
this.Q=null
this.ch=null
this.cx=null
u=new O.cv()
t=[V.ao]
u.sc5(H.c([],t))
u.b=null
u.gq().h(0,new E.hR(this))
this.cy=u
u=new O.cv()
u.sc5(H.c([],t))
u.b=null
u.gq().h(0,new E.hS(this))
this.db=u
u=new O.cv()
u.sc5(H.c([],t))
u.b=null
u.gq().h(0,new E.hT(this))
this.dx=u
this.siq(H.c([],[O.bE]))
u=this.dy;(u&&C.a).h(u,null)
this.sil(new H.aU([P.h,A.cE]))},
gk9:function(){var u,t
u=this.z
if(u==null){u=this.cy
u=u.ga0(u)
t=this.db
t=u.v(0,t.ga0(t))
this.z=t
u=t}return u},
cP:function(a){var u,t
u=this.dy
t=a==null?(u&&C.a).gbF(u):a;(u&&C.a).h(u,t)},
cO:function(){var u=this.dy
if(u.length>1)u.pop()},
dJ:function(a){var u=a.b
if(u.length===0)throw H.f(P.r("May not cache a shader with no name."))
if(this.fr.dS(0,u))throw H.f(P.r('Shader cache already contains a shader by the name "'+u+'".'))
this.fr.Y(0,u,a)},
siq:function(a){this.dy=H.l(a,"$ib",[O.bE],"$ab")},
sil:function(a){this.fr=H.l(a,"$iP",[P.h,A.cE],"$aP")}}
E.hR.prototype={
$1:function(a){var u
H.k(a,"$iy")
u=this.a
u.z=null
u.ch=null},
$S:6}
E.hS.prototype={
$1:function(a){var u
H.k(a,"$iy")
u=this.a
u.z=null
u.Q=null
u.ch=null
u.cx=null},
$S:6}
E.hT.prototype={
$1:function(a){var u
H.k(a,"$iy")
u=this.a
u.ch=null
u.cx=null},
$S:6}
E.e8.prototype={
d6:function(a){H.k(a,"$iy")
this.ev()},
d5:function(){return this.d6(null)},
gjH:function(){var u,t,s
u=Date.now()
t=C.d.a3(P.kM(0,0,0,u-this.cx.a,0,0).a,1000)/1000
if(t<=0)return 0
s=this.cy
this.cy=0
this.cx=new P.an(u,!1)
return s/t},
dB:function(){var u,t,s,r
u=window.devicePixelRatio
t=this.b.clientWidth
if(typeof t!=="number")return t.v()
if(typeof u!=="number")return H.G(u)
s=C.e.cG(t*u)
t=this.b.clientHeight
if(typeof t!=="number")return t.v()
r=C.e.cG(t*u)
t=this.b
if(t.width!==s||t.height!==r){t.width=s
t.height=r
P.lb(C.q,this.gke())}},
ev:function(){var u,t
if(!this.ch){this.ch=!0
u=window
t=H.n(new E.ip(this),{func:1,ret:-1,args:[P.a4]})
C.G.fH(u)
C.G.i5(u,W.lx(t,P.a4))}},
kd:function(){var u,t,s,r,q
try{++this.cy
this.ch=!1
this.dB()
if(this.d!=null){s=this.e;++s.e
s.r=s.x
r=Date.now()
s.x=new P.an(r,!1)
s.y=P.kM(0,0,0,r-s.r.a,0,0).a*0.000001
r=s.cy
C.a.sl(r.a,0)
r.aI()
r=s.db
C.a.sl(r.a,0)
r.aI()
r=s.dx
C.a.sl(r.a,0)
r.aI()
r=s.dy;(r&&C.a).sl(r,0)
s=s.dy;(s&&C.a).h(s,null)
this.d.ab(this.e)}s=this.z
if(s!=null)s.F(null)}catch(q){u=H.az(q)
t=H.cc(q)
P.at("Error: "+H.m(u))
P.at("Stack: "+H.m(t))
throw H.f(u)}}}
E.ip.prototype={
$1:function(a){var u
H.nt(a)
u=this.a
if(u.ch){u.ch=!1
u.kd()}},
$S:43}
Z.ej.prototype={$inD:1}
Z.dg.prototype={
a1:function(a){var u,t,s
try{t=a.a
C.b.dZ(t,this.e)
C.b.kr(t,this.e,this.b,5126,!1,this.d,this.c)}catch(s){u=H.az(s)
t=P.r('Failed to bind buffer attribute "'+this.a.i(0)+'": '+H.m(u))
throw H.f(t)}},
i:function(a){return"["+this.a.i(0)+", Size: "+this.b+", Offset: "+this.c+", Stride: "+this.d+", Attr: "+H.m(this.e)+"]"}}
Z.ek.prototype={$inE:1}
Z.cj.prototype={
az:function(a){var u,t,s,r
for(u=this.c,t=u.length,s=0;s<t;++s){r=u[s]
if((r.a.a&a.a)!==0)return r}return},
a1:function(a){var u,t
u=this.a
C.b.ap(a.a,u.a,u.b)
for(u=this.c,t=u.length-1;t>=0;--t)u[t].a1(a)},
aU:function(a){var u,t,s
for(u=this.c,t=u.length-1,s=a.a;t>=0;--t)C.b.dW(s,u[t].e)
C.b.ap(s,this.a.a,null)},
ab:function(a){var u,t,s,r,q,p
u=this.b.length
for(t=a.a,s=0;s<u;++s){r=this.b
if(s>=r.length)return H.j(r,s)
q=r[s]
r=q.c
p=r.a
C.b.ap(t,p,r.b)
C.b.jw(t,q.a,q.b,5123,0)
C.b.ap(t,p,null)}},
i:function(a){var u,t,s,r,q,p
u=[P.h]
t=H.c([],u)
for(s=this.b,r=s.length,q=0;q<s.length;s.length===r||(0,H.C)(s),++q)C.a.h(t,s[q].i(0))
p=H.c([],u)
for(u=this.c,s=u.length,q=0;q<s;++q)C.a.h(p,J.aM(u[q]))
return"Buffer:  ["+this.a.i(0)+"]\nIndices: "+C.a.m(t,", ")+"\nAttrs:   "+C.a.m(p,", ")},
sfR:function(a){this.b=H.l(a,"$ib",[Z.bW],"$ab")},
$inL:1}
Z.bW.prototype={
i:function(a){return"Type: "+this.a+", Count: "+this.b+", ["+("Instance of '"+H.c0(this.c)+"'")+"]"}}
Z.b8.prototype={
gd0:function(a){var u,t
u=this.a
t=(u&$.aL().a)!==0?3:0
if((u&$.bp().a)!==0)t+=3
if((u&$.bo().a)!==0)t+=3
if((u&$.bq().a)!==0)t+=2
if((u&$.br().a)!==0)t+=3
if((u&$.d9().a)!==0)t+=3
if((u&$.da().a)!==0)t+=4
if((u&$.cf().a)!==0)++t
return(u&$.bn().a)!==0?t+4:t},
j8:function(a){var u,t,s
u=$.aL()
t=this.a
if((t&u.a)!==0){if(0===a)return u
s=1}else s=0
u=$.bp()
if((t&u.a)!==0){if(s===a)return u;++s}u=$.bo()
if((t&u.a)!==0){if(s===a)return u;++s}u=$.bq()
if((t&u.a)!==0){if(s===a)return u;++s}u=$.br()
if((t&u.a)!==0){if(s===a)return u;++s}u=$.d9()
if((t&u.a)!==0){if(s===a)return u;++s}u=$.da()
if((t&u.a)!==0){if(s===a)return u;++s}u=$.cf()
if((t&u.a)!==0){if(s===a)return u;++s}u=$.bn()
if((t&u.a)!==0)if(s===a)return u
return $.lY()},
A:function(a,b){if(b==null)return!1
if(!(b instanceof Z.b8))return!1
return this.a===b.a},
i:function(a){var u,t
u=H.c([],[P.h])
t=this.a
if((t&$.aL().a)!==0)C.a.h(u,"Pos")
if((t&$.bp().a)!==0)C.a.h(u,"Norm")
if((t&$.bo().a)!==0)C.a.h(u,"Binm")
if((t&$.bq().a)!==0)C.a.h(u,"Txt2D")
if((t&$.br().a)!==0)C.a.h(u,"TxtCube")
if((t&$.d9().a)!==0)C.a.h(u,"Clr3")
if((t&$.da().a)!==0)C.a.h(u,"Clr4")
if((t&$.cf().a)!==0)C.a.h(u,"Weight")
if((t&$.bn().a)!==0)C.a.h(u,"Bending")
if(u.length<=0)return"None"
return C.a.m(u,"|")}}
D.fs.prototype={}
D.bT.prototype={
h:function(a,b){var u={func:1,ret:-1,args:[D.y]}
H.n(b,u)
if(this.a==null)this.sad(H.c([],[u]))
u=this.a;(u&&C.a).h(u,b)},
O:function(a,b){var u,t
H.n(b,{func:1,ret:-1,args:[D.y]})
u=this.a
u=u==null?null:C.a.X(u,b)
if(u===!0){u=this.a
t=(u&&C.a).O(u,b)||!1}else t=!1
u=this.b
u=u==null?null:C.a.X(u,b)
if(u===!0){u=this.b
t=(u&&C.a).O(u,b)||t}return t},
F:function(a){var u,t,s,r
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
return!0}if(!s)C.a.P(P.kT(t,!0,{func:1,ret:-1,args:[D.y]}),new D.fM(u))
t=this.b
if(t!=null){this.saO(H.c([],[{func:1,ret:-1,args:[D.y]}]))
C.a.P(t,new D.fN(u))}return!0},
jA:function(){return this.F(null)},
kf:function(a,b,c){var u,t
u=this.d
if(u>0){--u
this.d=u
if(u<=0)u=this.c!=null
else u=!1
if(u){t=this.c
this.c=null
this.F(t)}}},
aF:function(a){return this.kf(a,!0,!1)},
sad:function(a){this.a=H.l(a,"$ib",[{func:1,ret:-1,args:[D.y]}],"$ab")},
saO:function(a){this.b=H.l(a,"$ib",[{func:1,ret:-1,args:[D.y]}],"$ab")}}
D.fM.prototype={
$1:function(a){var u
H.n(a,{func:1,ret:-1,args:[D.y]})
u=this.a.a
u.b
a.$1(u)},
$S:24}
D.fN.prototype={
$1:function(a){var u
H.n(a,{func:1,ret:-1,args:[D.y]})
u=this.a.a
u.b
a.$1(u)},
$S:24}
D.y.prototype={}
D.bA.prototype={}
D.bB.prototype={}
D.M.prototype={
i:function(a){return"ValueChanged: "+this.c+", "+H.m(this.d)+" => "+H.m(this.e)}}
X.dh.prototype={
A:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.dh))return!1
if(this.a!=b.a)return!1
if(!this.b.A(0,b.b))return!1
return!0},
i:function(a){return this.b.i(0)+H.m(this.a)}}
X.dA.prototype={
A:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.dA))return!1
if(this.a!=b.a)return!1
if(!this.b.A(0,b.b))return!1
return!0},
i:function(a){return this.b.i(0)+H.m(this.a)}}
X.h8.prototype={
k5:function(a){this.c=a.b
this.d.h(0,a.a)
return!1},
jY:function(a){this.c=a.b
this.d.O(0,a.a)
return!1},
shX:function(a){this.d=H.l(a,"$il6",[P.B],"$al6")}}
X.dF.prototype={}
X.he.prototype={
b0:function(a,b){var u,t,s,r,q,p,o,n
u=new P.an(Date.now(),!1)
t=this.x
s=b.a
r=this.Q
if(typeof s!=="number")return s.v()
q=b.b
p=this.ch
if(typeof q!=="number")return q.v()
o=new V.a6(t.a+s*r,t.b+q*p)
p=this.a.gaS()
n=new X.bh(a,V.bj(),this.x,this.y,this.z,p,o,u,this)
n.b=!0
this.z=u
this.x=o
return n},
cN:function(a,b){this.r=a.a
return!1},
b8:function(a,b){var u,t
u=this.r
t=a.a
if(typeof t!=="number")return t.eO()
if(typeof u!=="number")return u.eC()
this.r=(u&~t)>>>0
return!1},
b7:function(a,b){var u=this.d
if(u==null)return!1
u.F(this.b0(a,b))
return!0},
k6:function(a){var u,t,s,r,q,p,o,n
u=this.e
if(u==null)return!1
t=this.a.gaS()
s=this.x
r=Date.now()
q=a.a
p=this.cx
if(typeof q!=="number")return q.v()
o=a.b
n=this.cy
if(typeof o!=="number")return o.v()
r=new X.cx(new V.S(q*p,o*n),t,s,new P.an(r,!1),this)
r.b=!0
u.F(r)
return!0},
hv:function(a,b,c){var u,t,s
if(this.f==null)return
u=new P.an(Date.now(),!1)
t=this.f
s=new X.dF(c,a,this.a.gaS(),b,u,this)
s.b=!0
t.F(s)
this.y=u
this.x=V.bj()}}
X.aw.prototype={
A:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.aw))return!1
if(this.a!==b.a)return!1
if(this.b!=b.b)return!1
if(this.c!=b.c)return!1
return!0},
i:function(a){var u=this.a?"Ctrl+":""
u+=this.b?"Alt+":""
return u+(this.c?"Shift+":"")}}
X.bh.prototype={}
X.hv.prototype={
c1:function(a,b,c){var u,t,s
u=new P.an(Date.now(),!1)
t=this.a.gaS()
s=new X.bh(a,this.r,this.x,this.y,this.z,t,b,u,this)
s.b=!0
if(c){this.y=u
this.r=b}this.z=u
this.x=b
return s},
cN:function(a,b){var u
this.f=a.a
u=this.b
if(u==null)return!1
u.F(this.c1(a,b,!0))
return!0},
b8:function(a,b){var u,t
u=this.f
t=a.a
if(typeof t!=="number")return t.eO()
if(typeof u!=="number")return u.eC()
this.f=(u&~t)>>>0
u=this.c
if(u==null)return!1
u.F(this.c1(a,b,!0))
return!0},
b7:function(a,b){var u=this.d
if(u==null)return!1
u.F(this.c1(a,b,!1))
return!0},
k7:function(a,b){var u,t,s,r,q,p,o
u=this.e
if(u==null)return!1
t=this.a.gaS()
s=Date.now()
r=a.a
q=this.Q
if(typeof r!=="number")return r.v()
p=a.b
o=this.ch
if(typeof p!=="number")return p.v()
s=new X.cx(new V.S(r*q,p*o),t,b,new P.an(s,!1),this)
s.b=!0
u.F(s)
return!0},
gdY:function(){var u=this.b
if(u==null){u=D.J()
this.b=u}return u},
gbN:function(){var u=this.c
if(u==null){u=D.J()
this.c=u}return u},
gen:function(){var u=this.d
if(u==null){u=D.J()
this.d=u}return u}}
X.cx.prototype={}
X.hM.prototype={}
X.ea.prototype={}
X.it.prototype={
b0:function(a,b){var u,t,s,r
H.l(a,"$ib",[V.a6],"$ab")
u=new P.an(Date.now(),!1)
t=a.length>0?a[0]:V.bj()
s=this.a.gaS()
r=new X.ea(a,this.f,this.r,this.x,this.y,s,t,u,this)
r.b=!0
if(b){this.x=u
this.f=t}this.y=u
this.r=t
return r},
k0:function(a){var u
H.l(a,"$ib",[V.a6],"$ab")
u=this.b
if(u==null)return!1
u.F(this.b0(a,!0))
return!0},
jZ:function(a){var u
H.l(a,"$ib",[V.a6],"$ab")
u=this.c
if(u==null)return!1
u.F(this.b0(a,!0))
return!0},
k_:function(a){var u
H.l(a,"$ib",[V.a6],"$ab")
u=this.d
if(u==null)return!1
u.F(this.b0(a,!1))
return!0}}
X.ef.prototype={
gaS:function(){var u=this.a
return V.l4(0,0,C.p.gdR(u).c,C.p.gdR(u).d)},
dj:function(a){var u,t
u=a.keyCode
t=a.ctrlKey||a.metaKey
return new X.dA(u,new X.aw(t,a.altKey,a.shiftKey))},
aP:function(a){var u,t
u=this.b
t=a.ctrlKey||a.metaKey
u.c=new X.aw(t,a.altKey,a.shiftKey)},
cl:function(a){var u,t
u=this.b
t=a.ctrlKey||a.metaKey
u.c=new X.aw(t,a.altKey,a.shiftKey)},
aw:function(a){var u,t,s,r,q
u=this.a.getBoundingClientRect()
t=a.pageX
s=a.pageY
r=u.left
if(typeof t!=="number")return t.t()
q=u.top
if(typeof s!=="number")return s.t()
return new V.a6(t-r,s-q)},
b1:function(a){return new V.S(a.movementX,a.movementY)},
cg:function(a){var u,t,s,r,q,p,o,n
u=this.a.getBoundingClientRect()
t=H.c([],[V.a6])
for(s=a.touches,r=s.length,q=0;q<s.length;s.length===r||(0,H.C)(s),++q){p=s[q]
o=C.e.ak(p.pageX)
C.e.ak(p.pageY)
n=u.left
C.e.ak(p.pageX)
C.a.h(t,new V.a6(o-n,C.e.ak(p.pageY)-u.top))}return t},
au:function(a){var u,t
u=a.buttons
t=a.ctrlKey||a.metaKey
return new X.dh(u,new X.aw(t,a.altKey,a.shiftKey))},
c6:function(a){var u,t,s,r,q,p
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
hp:function(a){this.f=!0},
hd:function(a){this.f=!1},
hj:function(a){H.k(a,"$iab")
if(this.f&&this.c6(a))a.preventDefault()},
ht:function(a){var u
H.k(a,"$iaV")
if(!this.f)return
u=this.dj(a)
this.b.k5(u)},
hr:function(a){var u
H.k(a,"$iaV")
if(!this.f)return
u=this.dj(a)
this.b.jY(u)},
hx:function(a){var u,t,s,r
H.k(a,"$iab")
u=this.a
u.focus()
this.f=!0
this.aP(a)
if(this.x){t=this.au(a)
s=this.b1(a)
if(this.d.cN(t,s))a.preventDefault()
return}if(this.r){this.y=a
u.requestPointerLock()
return}t=this.au(a)
r=this.aw(a)
if(this.c.cN(t,r))a.preventDefault()},
hB:function(a){var u,t,s
H.k(a,"$iab")
this.aP(a)
u=this.au(a)
if(this.x){t=this.b1(a)
if(this.d.b8(u,t))a.preventDefault()
return}if(this.r)return
s=this.aw(a)
if(this.c.b8(u,s))a.preventDefault()},
hn:function(a){var u,t,s
H.k(a,"$iab")
if(!this.c6(a)){this.aP(a)
u=this.au(a)
if(this.x){t=this.b1(a)
if(this.d.b8(u,t))a.preventDefault()
return}if(this.r)return
s=this.aw(a)
if(this.c.b8(u,s))a.preventDefault()}},
hz:function(a){var u,t,s
H.k(a,"$iab")
this.aP(a)
u=this.au(a)
if(this.x){t=this.b1(a)
if(this.d.b7(u,t))a.preventDefault()
return}if(this.r)return
s=this.aw(a)
if(this.c.b7(u,s))a.preventDefault()},
hl:function(a){var u,t,s
H.k(a,"$iab")
if(!this.c6(a)){this.aP(a)
u=this.au(a)
if(this.x){t=this.b1(a)
if(this.d.b7(u,t))a.preventDefault()
return}if(this.r)return
s=this.aw(a)
if(this.c.b7(u,s))a.preventDefault()}},
hD:function(a){var u,t
H.k(a,"$ib9")
this.aP(a)
u=new V.S((a&&C.F).gjs(a),C.F.gjt(a)).w(0,180)
if(this.x){if(this.d.k6(u))a.preventDefault()
return}if(this.r)return
t=this.aw(a)
if(this.c.k7(u,t))a.preventDefault()},
hF:function(a){var u,t,s
u=document.pointerLockElement===this.a
if(u!==this.x){this.x=u
t=this.au(this.y)
s=this.aw(this.y)
this.d.hv(t,s,u)}},
hV:function(a){var u
H.k(a,"$iaJ")
this.a.focus()
this.f=!0
this.cl(a)
u=this.cg(a)
if(this.e.k0(u))a.preventDefault()},
hR:function(a){var u
H.k(a,"$iaJ")
this.cl(a)
u=this.cg(a)
if(this.e.jZ(u))a.preventDefault()},
hT:function(a){var u
H.k(a,"$iaJ")
this.cl(a)
u=this.cg(a)
if(this.e.k_(u))a.preventDefault()},
sfI:function(a){this.z=H.l(a,"$ib",[[P.cG,P.N]],"$ab")}}
D.bw.prototype={
gq:function(){var u=this.d
if(u==null){u=D.J()
this.d=u}return u},
at:function(a){var u
H.k(a,"$iy")
u=this.d
if(u!=null)u.F(a)},
fc:function(){return this.at(null)},
$ia5:1,
$iaZ:1}
D.a5.prototype={$iaZ:1}
D.dB.prototype={
gq:function(){var u=this.Q
if(u==null){u=D.J()
this.Q=u}return u},
at:function(a){var u=this.Q
if(u!=null)u.F(a)},
dt:function(a){var u
H.k(a,"$iy")
u=this.ch
if(u!=null)u.F(a)},
hu:function(){return this.dt(null)},
hH:function(a){var u,t,s
H.l(a,"$id",[D.a5],"$ad")
for(u=a.length,t=0;t<a.length;a.length===u||(0,H.C)(a),++t){s=a[t]
if(s==null||this.fa(s))return!1}return!0},
h7:function(a,b){var u,t,s,r,q,p,o,n
u=D.a5
H.l(b,"$id",[u],"$ad")
for(t=b.length,s=this.gds(),r={func:1,ret:-1,args:[D.y]},q=[r],p=0;p<b.length;b.length===t||(0,H.C)(b),++p){o=H.k(b[p],"$ia5")
if(o instanceof D.bw)C.a.h(this.e,o)
n=o.d
if(n==null){n=new D.bT()
n.sad(null)
n.saO(null)
n.c=null
n.d=0
o.d=n}H.n(s,r)
if(n.a==null)n.sad(H.c([],q))
n=n.a;(n&&C.a).h(n,s)}u=new D.bA(a,b,this,[u])
u.b=!0
this.at(u)},
hL:function(a,b){var u,t,s,r
u=D.a5
H.l(b,"$id",[u],"$ad")
for(t=b.gT(b),s=this.gds();t.B();){r=t.gI(t)
C.a.O(this.e,r)
r.gq().O(0,s)}u=new D.bB(a,b,this,[u])
u.b=!0
this.at(u)},
fa:function(a){var u=C.a.X(this.e,a)
return u},
sfF:function(a){this.e=H.l(a,"$ib",[D.bw],"$ab")},
shW:function(a){this.f=H.l(a,"$ib",[D.dR],"$ab")},
sio:function(a){this.r=H.l(a,"$ib",[D.e_],"$ab")},
siB:function(a){this.x=H.l(a,"$ib",[D.e5],"$ab")},
siC:function(a){this.y=H.l(a,"$ib",[D.e6],"$ab")},
siD:function(a){this.z=H.l(a,"$ib",[D.e7],"$ab")},
$ad:function(){return[D.a5]},
$aa1:function(){return[D.a5]}}
D.dR.prototype={$ia5:1,$iaZ:1}
D.e_.prototype={$ia5:1,$iaZ:1}
D.e5.prototype={$ia5:1,$iaZ:1}
D.e6.prototype={$ia5:1,$iaZ:1}
D.e7.prototype={$ia5:1,$iaZ:1}
V.a2.prototype={
p:function(a,b){var u,t,s
u=C.e.p(this.a,b.gcQ())
t=C.e.p(this.b,b.gbQ())
s=C.e.p(this.c,b.gcq())
if(u<0)u=0
else if(u>1)u=1
if(t<0)t=0
else if(t>1)t=1
if(s<0)s=0
else if(s>1)s=1
return new V.a2(u,t,s)},
t:function(a,b){var u,t,s
u=C.e.t(this.a,b.gcQ())
t=C.e.t(this.b,b.gbQ())
s=C.e.t(this.c,b.gcq())
if(u<0)u=0
else if(u>1)u=1
if(t<0)t=0
else if(t>1)t=1
if(s<0)s=0
else if(s>1)s=1
return new V.a2(u,t,s)},
A:function(a,b){var u,t
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.a2))return!1
u=b.a
t=$.R().a
if(!(Math.abs(u-this.a)<t))return!1
if(!(Math.abs(b.b-this.b)<t))return!1
if(!(Math.abs(b.c-this.c)<t))return!1
return!0},
i:function(a){return"["+V.V(this.a,3,0)+", "+V.V(this.b,3,0)+", "+V.V(this.c,3,0)+"]"}}
V.au.prototype={
p:function(a,b){var u,t,s,r
u=C.e.p(this.a,b.gcQ())
t=C.e.p(this.b,b.gbQ())
s=C.e.p(this.c,b.gcq())
r=C.e.p(this.d,b.gj7(b))
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
u=C.e.t(this.a,b.gcQ())
t=C.e.t(this.b,b.gbQ())
s=C.e.t(this.c,b.gcq())
r=C.e.t(this.d,b.gj7(b))
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
t=$.R().a
if(!(Math.abs(u-this.a)<t))return!1
if(!(Math.abs(b.b-this.b)<t))return!1
if(!(Math.abs(b.c-this.c)<t))return!1
if(!(Math.abs(b.d-this.d)<t))return!1
return!0},
i:function(a){return"["+V.V(this.a,3,0)+", "+V.V(this.b,3,0)+", "+V.V(this.c,3,0)+", "+V.V(this.d,3,0)+"]"}}
V.fK.prototype={}
V.dK.prototype={
ac:function(a,b){var u=H.c([this.a,this.d,this.r,this.b,this.e,this.x,this.c,this.f,this.y],[P.z])
return u},
A:function(a,b){var u,t
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.dK))return!1
u=b.a
t=$.R().a
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
u=[P.z]
t=V.ca(H.c([this.a,this.d,this.r],u),3,0)
s=V.ca(H.c([this.b,this.e,this.x],u),3,0)
r=V.ca(H.c([this.c,this.f,this.y],u),3,0)
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
V.ao.prototype={
ac:function(a,b){var u=H.c([this.a,this.e,this.y,this.cx,this.b,this.f,this.z,this.cy,this.c,this.r,this.Q,this.db,this.d,this.x,this.ch,this.dx],[P.z])
return u},
cI:function(b1){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0
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
if(Math.abs(a7-0)<$.R().a)return V.bY()
a8=1/a7
a9=-r
b0=-d
return V.aX((t*a6-p*a5+m*a4)*a8,(-s*a6+o*a5-l*a4)*a8,(f*h-b*i+a1*j)*a8,(-e*h+a*i-a2*j)*a8,(a9*a6+p*a3-m*a0)*a8,(u*a6-o*a3+l*a0)*a8,(b0*h+b*k-a1*n)*a8,(g*h-a*k+a2*n)*a8,(r*a5-t*a3+m*c)*a8,(-u*a5+s*a3-l*c)*a8,(d*i-f*k+a1*q)*a8,(-g*i+e*k-a2*q)*a8,(a9*a4+t*a0-p*c)*a8,(u*a4-s*a0+o*c)*a8,(b0*j+f*n-b*q)*a8,(g*j-e*n+a*q)*a8)},
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
return V.aX(u*t+s*r+q*p+o*n,u*m+s*l+q*k+o*j,u*i+s*h+q*g+o*f,u*e+s*d+q*c+o*b,a*t+a0*r+a1*p+a2*n,a*m+a0*l+a1*k+a2*j,a*i+a0*h+a1*g+a2*f,a*e+a0*d+a1*c+a2*b,a3*t+a4*r+a5*p+a6*n,a3*m+a4*l+a5*k+a6*j,a3*i+a4*h+a5*g+a6*f,a3*e+a4*d+a5*c+a6*b,a7*t+a8*r+a9*p+b0*n,a7*m+a8*l+a9*k+b0*j,a7*i+a8*h+a9*g+b0*f,a7*e+a8*d+a9*c+b0*b)},
cU:function(a){var u,t,s
u=a.a
t=a.b
s=a.c
return new V.Q(this.a*u+this.b*t+this.c*s,this.e*u+this.f*t+this.r*s,this.y*u+this.z*t+this.Q*s)},
bd:function(a){var u,t,s
u=a.a
t=a.b
s=a.c
return new V.a3(this.a*u+this.b*t+this.c*s+this.d,this.e*u+this.f*t+this.r*s+this.x,this.y*u+this.z*t+this.Q*s+this.ch)},
A:function(a,b){var u,t
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.ao))return!1
u=b.a
t=$.R().a
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
i:function(a){return this.U()},
ek:function(a,b,c){var u,t,s,r,q,p,o,n,m,l
u=[P.z]
t=V.ca(H.c([this.a,this.e,this.y,this.cx],u),b,c)
s=V.ca(H.c([this.b,this.f,this.z,this.cy],u),b,c)
r=V.ca(H.c([this.c,this.r,this.Q,this.db],u),b,c)
q=V.ca(H.c([this.d,this.x,this.ch,this.dx],u),b,c)
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
U:function(){return this.ek("",3,0)},
G:function(a){return this.ek(a,3,0)}}
V.a6.prototype={
p:function(a,b){return new V.a6(this.a+b.a,this.b+b.b)},
t:function(a,b){return new V.a6(this.a-b.a,this.b-b.b)},
A:function(a,b){var u,t
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.a6))return!1
u=b.a
t=$.R().a
if(!(Math.abs(u-this.a)<t))return!1
if(!(Math.abs(b.b-this.b)<t))return!1
return!0},
i:function(a){return"["+V.V(this.a,3,0)+", "+V.V(this.b,3,0)+"]"}}
V.a3.prototype={
p:function(a,b){return new V.a3(this.a+b.a,this.b+b.b,this.c+b.c)},
t:function(a,b){return new V.a3(this.a-b.a,this.b-b.b,this.c-b.c)},
v:function(a,b){return new V.a3(this.a*b,this.b*b,this.c*b)},
A:function(a,b){var u,t
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.a3))return!1
u=b.a
t=$.R().a
if(!(Math.abs(u-this.a)<t))return!1
if(!(Math.abs(b.b-this.b)<t))return!1
if(!(Math.abs(b.c-this.c)<t))return!1
return!0},
i:function(a){return"["+V.V(this.a,3,0)+", "+V.V(this.b,3,0)+", "+V.V(this.c,3,0)+"]"}}
V.b0.prototype={
p:function(a,b){return new V.b0(C.d.p(this.a,b.gku(b)),C.d.p(this.b,b.gkv(b)),C.d.p(this.c,b.gkw(b)),C.d.p(this.d,b.gkt(b)))},
t:function(a,b){return new V.b0(C.d.t(this.a,b.gku(b)),C.d.t(this.b,b.gkv(b)),C.d.t(this.c,b.gkw(b)),C.d.t(this.d,b.gkt(b)))},
A:function(a,b){var u,t
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.b0))return!1
u=b.a
t=$.R().a
if(!(Math.abs(u-this.a)<t))return!1
if(!(Math.abs(b.b-this.b)<t))return!1
if(!(Math.abs(b.c-this.c)<t))return!1
if(!(Math.abs(b.d-this.d)<t))return!1
return!0},
i:function(a){return"["+V.V(this.a,3,0)+", "+V.V(this.b,3,0)+", "+V.V(this.c,3,0)+", "+V.V(this.d,3,0)+"]"}}
V.dV.prototype={
ga9:function(){var u,t
u=this.c
t=this.d
if(u>t)return t
else return u},
A:function(a,b){var u,t
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.dV))return!1
u=b.a
t=$.R().a
if(!(Math.abs(u-this.a)<t))return!1
if(!(Math.abs(b.b-this.b)<t))return!1
if(!(Math.abs(b.c-this.c)<t))return!1
if(!(Math.abs(b.d-this.d)<t))return!1
return!0},
i:function(a){return"["+V.V(this.a,3,0)+", "+V.V(this.b,3,0)+", "+V.V(this.c,3,0)+", "+V.V(this.d,3,0)+"]"}}
V.S.prototype={
cJ:function(a){return Math.sqrt(this.D(this))},
D:function(a){var u,t,s,r
u=this.a
t=a.a
if(typeof u!=="number")return u.v()
if(typeof t!=="number")return H.G(t)
s=this.b
r=a.b
if(typeof s!=="number")return s.v()
if(typeof r!=="number")return H.G(r)
return u*t+s*r},
p:function(a,b){var u,t,s
u=this.a
t=b.gjy(b)
if(typeof u!=="number")return u.p()
t=C.e.p(u,t)
u=this.b
s=b.gjz(b)
if(typeof u!=="number")return u.p()
return new V.S(t,C.e.p(u,s))},
t:function(a,b){var u,t,s
u=this.a
t=b.gjy(b)
if(typeof u!=="number")return u.t()
t=C.e.t(u,t)
u=this.b
s=b.gjz(b)
if(typeof u!=="number")return u.t()
return new V.S(t,C.e.t(u,s))},
v:function(a,b){var u,t
u=this.a
if(typeof u!=="number")return u.v()
t=this.b
if(typeof t!=="number")return t.v()
return new V.S(u*b,t*b)},
w:function(a,b){var u,t
if(Math.abs(b-0)<$.R().a){u=$.lf
if(u==null){u=new V.S(0,0)
$.lf=u}return u}u=this.a
if(typeof u!=="number")return u.w()
t=this.b
if(typeof t!=="number")return t.w()
return new V.S(u/b,t/b)},
A:function(a,b){var u,t,s
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.S))return!1
u=b.a
t=this.a
s=$.R()
s.toString
if(typeof u!=="number")return u.t()
if(typeof t!=="number")return H.G(t)
s=s.a
if(!(Math.abs(u-t)<s))return!1
u=b.b
t=this.b
if(typeof u!=="number")return u.t()
if(typeof t!=="number")return H.G(t)
if(!(Math.abs(u-t)<s))return!1
return!0},
i:function(a){return"["+V.V(this.a,3,0)+", "+V.V(this.b,3,0)+"]"}}
V.Q.prototype={
cJ:function(a){return Math.sqrt(this.D(this))},
D:function(a){return this.a*a.a+this.b*a.b+this.c*a.c},
ay:function(a){var u,t,s,r,q,p
u=this.b
t=a.c
s=this.c
r=a.b
q=a.a
p=this.a
return new V.Q(u*t-s*r,s*q-p*t,p*r-u*q)},
p:function(a,b){return new V.Q(this.a+b.a,this.b+b.b,this.c+b.c)},
t:function(a,b){return new V.Q(this.a-b.a,this.b-b.b,this.c-b.c)},
S:function(a){return new V.Q(-this.a,-this.b,-this.c)},
v:function(a,b){return new V.Q(this.a*b,this.b*b,this.c*b)},
w:function(a,b){if(Math.abs(b-0)<$.R().a)return V.cT()
return new V.Q(this.a/b,this.b/b,this.c/b)},
em:function(){var u=$.R().a
if(!(Math.abs(0-this.a)<u))return!1
if(!(Math.abs(0-this.b)<u))return!1
if(!(Math.abs(0-this.c)<u))return!1
return!0},
A:function(a,b){var u,t
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.Q))return!1
u=b.a
t=$.R().a
if(!(Math.abs(u-this.a)<t))return!1
if(!(Math.abs(b.b-this.b)<t))return!1
if(!(Math.abs(b.c-this.c)<t))return!1
return!0},
i:function(a){return"["+V.V(this.a,3,0)+", "+V.V(this.b,3,0)+", "+V.V(this.c,3,0)+"]"}}
U.ft.prototype={
bX:function(a){var u=V.nC(a,this.c,this.b)
return u},
gq:function(){var u=this.y
if(u==null){u=D.J()
this.y=u}return u},
N:function(a){var u=this.y
if(u!=null)u.F(a)},
scW:function(a,b){},
scK:function(a){var u,t
u=this.b
if(!(Math.abs(u-a)<$.R().a)){this.b=a
if(a<this.c){this.c=a
this.d=a}else{t=this.d
if(a<t)this.d=this.bX(t)}u=new D.M("maximumLocation",u,this.b,this,[P.z])
u.b=!0
this.N(u)}},
scM:function(a){var u,t
u=this.c
if(!(Math.abs(u-a)<$.R().a)){this.c=a
if(this.b<a){this.b=a
this.d=a}else{t=this.d
if(a>t)this.d=this.bX(t)}u=new D.M("minimumLocation",u,this.c,this,[P.z])
u.b=!0
this.N(u)}},
sa8:function(a,b){var u
b=this.bX(b)
u=this.d
if(!(Math.abs(u-b)<$.R().a)){this.d=b
u=new D.M("location",u,b,this,[P.z])
u.b=!0
this.N(u)}},
scL:function(a){var u,t,s
u=this.e
if(!(Math.abs(u-a)<$.R().a)){this.e=a
t=this.f
s=-a
if(t<s)t=s
else if(t>a)t=a
this.f=t
u=new D.M("maximumVelocity",u,a,this,[P.z])
u.b=!0
this.N(u)}},
sV:function(a){var u,t
u=this.e
t=-u
if(a<t)a=t
else if(a>u)a=u
u=this.f
if(!(Math.abs(u-a)<$.R().a)){this.f=a
u=new D.M("velocity",u,a,this,[P.z])
u.b=!0
this.N(u)}},
scv:function(a){var u
if(a<0)a=0
else if(a>1)a=1
u=this.x
if(!(Math.abs(u-a)<$.R().a)){this.x=a
u=new D.M("dampening",u,a,this,[P.z])
u.b=!0
this.N(u)}},
al:function(a,b){var u,t,s,r,q
u=this.f
t=$.R().a
if(!(Math.abs(u-0)<t)||!(Math.abs(this.r-0)<t)){s=u+this.r*b
u=this.e
r=-u
if(s<r)s=r
else if(s>u)s=u
this.sa8(0,this.d+s*b)
u=this.x
if(!(Math.abs(u-0)<$.R().a)){q=s*Math.pow(1-u,b)
if(s<0){if(q<s)q=s
else if(q>0)q=0}else if(q<0)q=0
else if(q>s)q=s
s=q}this.sV(s)}}}
U.dj.prototype={
gq:function(){var u=this.b
if(u==null){u=D.J()
this.b=u}return u},
aV:function(a,b,c){return this.a},
A:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.dj))return!1
return J.a0(this.a,b.a)},
i:function(a){return"Constant: "+this.a.G("          ")}}
U.cs.prototype={
gq:function(){var u=this.e
if(u==null){u=D.J()
this.e=u}return u},
N:function(a){var u
H.k(a,"$iy")
u=this.e
if(u!=null)u.F(a)},
a5:function(){return this.N(null)},
h5:function(a,b){var u,t,s,r,q,p,o,n
u=U.ad
H.l(b,"$id",[u],"$ad")
for(t=b.length,s=this.gaM(),r={func:1,ret:-1,args:[D.y]},q=[r],p=0;p<b.length;b.length===t||(0,H.C)(b),++p){o=b[p]
if(o!=null){n=o.gq()
n.toString
H.n(s,r)
if(n.a==null)n.sad(H.c([],q))
n=n.a;(n&&C.a).h(n,s)}}u=new D.bA(a,b,this,[u])
u.b=!0
this.N(u)},
hJ:function(a,b){var u,t,s
u=U.ad
H.l(b,"$id",[u],"$ad")
for(t=b.gT(b),s=this.gaM();t.B();)t.gI(t).gq().O(0,s)
u=new D.bB(a,b,this,[u])
u.b=!0
this.N(u)},
aV:function(a,b,c){var u,t,s,r
u=this.r
t=b.e
if(typeof u!=="number")return u.aX()
if(u<t){this.r=t
u=this.e
if(u!=null)++u.d
for(u=this.a,u=new J.am(u,u.length,0,[H.x(u,0)]),s=null;u.B();){t=u.d
if(t!=null){r=t.aV(0,b,c)
if(r!=null)s=s==null?r:r.v(0,s)}}this.f=s==null?V.bY():s
u=this.e
if(u!=null)u.aF(0)}return this.f},
A:function(a,b){var u,t,s,r
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.cs))return!1
u=this.a.length
for(t=0;t<u;++t){s=this.a
if(t>=s.length)return H.j(s,t)
s=s[t]
r=b.a
if(t>=r.length)return H.j(r,t)
if(!J.a0(s,r[t]))return!1}return!0},
i:function(a){return"Group"},
$ad:function(){return[U.ad]},
$aa1:function(){return[U.ad]},
$iad:1}
U.ad.prototype={}
U.eg.prototype={
gq:function(){var u=this.cy
if(u==null){u=D.J()
this.cy=u}return u},
N:function(a){var u
H.k(a,"$iy")
u=this.cy
if(u!=null)u.F(a)},
a5:function(){return this.N(null)},
b3:function(a){if(this.a!=null)return!1
this.a=a
a.c.gdY().h(0,this.gc7())
this.a.c.gen().h(0,this.gc9())
this.a.c.gbN().h(0,this.gcb())
return!0},
c8:function(a){H.k(a,"$iy")
if(!J.a0(this.c,this.a.b.c))return
this.y=!0
this.x=!0
this.z=this.b.d},
ca:function(a){var u,t,s,r,q,p,o
a=H.i(H.k(a,"$iy"),"$ibh")
if(!this.y)return
if(this.x){u=a.d.t(0,a.y)
u=new V.S(u.a,u.b)
u=u.D(u)
t=this.r
if(typeof t!=="number")return H.G(t)
if(u<t)return
this.x=!1}if(this.d){u=a.c
t=a.d.t(0,a.y)
u=new V.S(t.a,t.b).v(0,2).w(0,u.ga9())
this.Q=u
t=this.b
u=u.a
if(typeof u!=="number")return u.v()
s=this.e
if(typeof s!=="number")return H.G(s)
t.sV(u*10*s)}else{u=a.c
t=a.d
s=t.t(0,a.y)
r=new V.S(s.a,s.b).v(0,2).w(0,u.ga9())
s=this.b
q=r.a
if(typeof q!=="number")return q.S()
p=this.e
if(typeof p!=="number")return H.G(p)
o=this.z
if(typeof o!=="number")return H.G(o)
s.sa8(0,-q*p+o)
this.b.sV(0)
t=t.t(0,a.z)
this.Q=new V.S(t.a,t.b).v(0,2).w(0,u.ga9())}this.a5()},
cc:function(a){var u,t,s
H.k(a,"$iy")
if(!this.y)return
this.y=!1
if(this.x)return
u=this.Q
if(u.D(u)>0.0001){u=this.b
t=this.Q.a
if(typeof t!=="number")return t.v()
s=this.e
if(typeof s!=="number")return H.G(s)
u.sV(t*10*s)
this.a5()}},
aV:function(a,b,c){var u,t,s,r,q
u=this.ch
t=b.e
if(typeof u!=="number")return u.aX()
if(u<t){this.ch=t
s=b.y
this.b.al(0,s)
u=this.b.d
r=Math.cos(u)
q=Math.sin(u)
this.cx=V.aX(r,-q,0,0,q,r,0,0,0,0,1,0,0,0,0,1)}return this.cx},
$iad:1}
U.eh.prototype={
gq:function(){var u=this.fx
if(u==null){u=D.J()
this.fx=u}return u},
N:function(a){var u
H.k(a,"$iy")
u=this.fx
if(u!=null)u.F(a)},
a5:function(){return this.N(null)},
b3:function(a){var u,t
if(this.a!=null)return!1
this.a=a
a.c.gdY().h(0,this.gc7())
this.a.c.gen().h(0,this.gc9())
this.a.c.gbN().h(0,this.gcb())
u=this.a.d
t=u.f
if(t==null){t=D.J()
u.f=t
u=t}else u=t
u.h(0,this.gfY())
u=this.a.d
t=u.d
if(t==null){t=D.J()
u.d=t
u=t}else u=t
u.h(0,this.gh_())
u=this.a.e
t=u.b
if(t==null){t=D.J()
u.b=t
u=t}else u=t
u.h(0,this.giy())
u=this.a.e
t=u.d
if(t==null){t=D.J()
u.d=t
u=t}else u=t
u.h(0,this.giw())
u=this.a.e
t=u.c
if(t==null){t=D.J()
u.c=t
u=t}else u=t
u.h(0,this.giu())
return!0},
an:function(a){var u,t
u=a.a
t=a.b
if(this.f){if(typeof u!=="number")return u.S()
u=-u}if(this.r){if(typeof t!=="number")return t.S()
t=-t}return new V.S(u,t)},
c8:function(a){a=H.i(H.k(a,"$iy"),"$ibh")
if(!J.a0(this.d,a.x.b))return
this.cx=!0
this.ch=!0
this.cy=this.c.d
this.db=this.b.d},
ca:function(a){var u,t,s,r,q,p,o
a=H.i(H.k(a,"$iy"),"$ibh")
if(!this.cx)return
if(this.ch){u=a.d.t(0,a.y)
u=new V.S(u.a,u.b)
u=u.D(u)
t=this.Q
if(typeof t!=="number")return H.G(t)
if(u<t)return
this.ch=!1}if(this.e){u=a.c
t=a.d.t(0,a.y)
u=this.an(new V.S(t.a,t.b).v(0,2).w(0,u.ga9()))
this.dx=u
t=this.c
u=u.a
if(typeof u!=="number")return u.S()
s=this.y
if(typeof s!=="number")return H.G(s)
t.sV(-u*10*s)
s=this.b
u=this.dx.b
if(typeof u!=="number")return u.S()
t=this.x
if(typeof t!=="number")return H.G(t)
s.sV(-u*10*t)}else{u=a.c
t=a.d
s=t.t(0,a.y)
r=this.an(new V.S(s.a,s.b).v(0,2).w(0,u.ga9()))
s=this.c
q=r.a
if(typeof q!=="number")return q.S()
p=this.y
if(typeof p!=="number")return H.G(p)
o=this.cy
if(typeof o!=="number")return H.G(o)
s.sa8(0,-q*p+o)
o=this.b
p=r.b
if(typeof p!=="number")return p.S()
q=this.x
if(typeof q!=="number")return H.G(q)
s=this.db
if(typeof s!=="number")return H.G(s)
o.sa8(0,-p*q+s)
this.b.sV(0)
this.c.sV(0)
t=t.t(0,a.z)
this.dx=this.an(new V.S(t.a,t.b).v(0,2).w(0,u.ga9()))}this.a5()},
cc:function(a){var u,t,s
H.k(a,"$iy")
if(!this.cx)return
this.cx=!1
if(this.ch)return
u=this.dx
if(u.D(u)>0.0001){u=this.c
t=this.dx.a
if(typeof t!=="number")return t.S()
s=this.y
if(typeof s!=="number")return H.G(s)
u.sV(-t*10*s)
s=this.b
t=this.dx.b
if(typeof t!=="number")return t.S()
u=this.x
if(typeof u!=="number")return H.G(u)
s.sV(-t*10*u)
this.a5()}},
fZ:function(a){if(H.i(H.k(a,"$iy"),"$idF").x){this.ch=!0
this.cy=this.c.d
this.db=this.b.d}},
h0:function(a){var u,t,s,r,q,p,o
a=H.i(H.k(a,"$iy"),"$ibh")
if(!J.a0(this.d,a.x.b))return
u=a.c
t=a.d
s=t.t(0,a.y)
r=this.an(new V.S(s.a,s.b).v(0,2).w(0,u.ga9()))
s=this.c
q=r.a
if(typeof q!=="number")return q.S()
p=this.y
if(typeof p!=="number")return H.G(p)
o=this.cy
if(typeof o!=="number")return H.G(o)
s.sa8(0,-q*p+o)
o=this.b
p=r.b
if(typeof p!=="number")return p.S()
q=this.x
if(typeof q!=="number")return H.G(q)
s=this.db
if(typeof s!=="number")return H.G(s)
o.sa8(0,-p*q+s)
this.b.sV(0)
this.c.sV(0)
t=t.t(0,a.z)
this.dx=this.an(new V.S(t.a,t.b).v(0,2).w(0,u.ga9()))
this.a5()},
iz:function(a){H.k(a,"$iy")
this.cx=!0
this.ch=!0
this.cy=this.c.d
this.db=this.b.d},
ix:function(a){var u,t,s,r,q,p,o
a=H.i(H.k(a,"$iy"),"$iea")
if(!this.cx)return
if(this.ch){u=a.d.t(0,a.y)
u=new V.S(u.a,u.b)
u=u.D(u)
t=this.Q
if(typeof t!=="number")return H.G(t)
if(u<t)return
this.ch=!1}if(this.e){u=a.c
t=a.d.t(0,a.y)
u=this.an(new V.S(t.a,t.b).v(0,2).w(0,u.ga9()))
this.dx=u
t=this.c
u=u.a
if(typeof u!=="number")return u.S()
s=this.y
if(typeof s!=="number")return H.G(s)
t.sV(-u*10*s)
s=this.b
u=this.dx.b
if(typeof u!=="number")return u.S()
t=this.x
if(typeof t!=="number")return H.G(t)
s.sV(-u*10*t)}else{u=a.c
t=a.d
s=t.t(0,a.y)
r=this.an(new V.S(s.a,s.b).v(0,2).w(0,u.ga9()))
s=this.c
q=r.a
if(typeof q!=="number")return q.S()
p=this.y
if(typeof p!=="number")return H.G(p)
o=this.cy
if(typeof o!=="number")return H.G(o)
s.sa8(0,-q*p+o)
o=this.b
p=r.b
if(typeof p!=="number")return p.S()
q=this.x
if(typeof q!=="number")return H.G(q)
s=this.db
if(typeof s!=="number")return H.G(s)
o.sa8(0,-p*q+s)
this.b.sV(0)
this.c.sV(0)
t=t.t(0,a.z)
this.dx=this.an(new V.S(t.a,t.b).v(0,2).w(0,u.ga9()))}this.a5()},
iv:function(a){var u,t,s
H.k(a,"$iy")
if(!this.cx)return
this.cx=!1
if(this.ch)return
u=this.dx
if(u.D(u)>0.0001){u=this.c
t=this.dx.a
if(typeof t!=="number")return t.S()
s=this.y
if(typeof s!=="number")return H.G(s)
u.sV(-t*10*s)
s=this.b
t=this.dx.b
if(typeof t!=="number")return t.S()
u=this.x
if(typeof u!=="number")return H.G(u)
s.sV(-t*10*u)
this.a5()}},
aV:function(a,b,c){var u,t,s,r,q
u=this.dy
t=b.e
if(typeof u!=="number")return u.aX()
if(u<t){this.dy=t
s=b.y
this.c.al(0,s)
this.b.al(0,s)
u=this.b.d
r=Math.cos(u)
q=Math.sin(u)
u=V.aX(1,0,0,0,0,r,-q,0,0,q,r,0,0,0,0,1)
t=this.c.d
r=Math.cos(t)
q=Math.sin(t)
this.fr=u.v(0,V.aX(r,0,-q,0,0,1,0,0,q,0,r,0,0,0,0,1))}return this.fr},
$iad:1}
U.ei.prototype={
gq:function(){var u=this.r
if(u==null){u=D.J()
this.r=u}return u},
N:function(a){var u=this.r
if(u!=null)u.F(a)},
b3:function(a){var u,t,s
if(this.a!=null)return!1
this.a=a
u=a.c
t=u.e
if(t==null){t=D.J()
u.e=t
u=t}else u=t
t=this.gh2()
u.h(0,t)
u=this.a.d
s=u.e
if(s==null){s=D.J()
u.e=s
u=s}else u=s
u.h(0,t)
return!0},
h3:function(a){var u,t,s,r
H.k(a,"$iy")
if(!J.a0(this.b,this.a.b.c))return
H.i(a,"$icx")
u=this.d
t=a.x.b
s=this.c
if(typeof t!=="number")return t.v()
r=u+t*s
if(u!==r){this.d=r
u=new D.M("zoom",u,r,this,[P.z])
u.b=!0
this.N(u)}},
aV:function(a,b,c){var u,t,s
u=this.e
t=b.e
if(u<t){this.e=t
s=Math.pow(10,this.d)
this.f=V.aX(s,0,0,0,0,s,0,0,0,0,s,0,0,0,0,1)}return this.f},
$iad:1}
M.di.prototype={
gq:function(){var u=this.f
if(u==null){u=D.J()
this.f=u}return u},
a_:function(a){var u
H.k(a,"$iy")
u=this.f
if(u!=null)u.F(a)},
aZ:function(){return this.a_(null)},
hN:function(a,b){var u,t,s,r,q,p,o,n
u=M.ay
H.l(b,"$id",[u],"$ad")
for(t=b.length,s=this.gZ(),r={func:1,ret:-1,args:[D.y]},q=[r],p=0;p<b.length;b.length===t||(0,H.C)(b),++p){o=b[p]
if(o!=null){n=o.gq()
n.toString
H.n(s,r)
if(n.a==null)n.sad(H.c([],q))
n=n.a;(n&&C.a).h(n,s)}}u=new D.bA(a,b,this,[u])
u.b=!0
this.a_(u)},
hP:function(a,b){var u,t,s
u=M.ay
H.l(b,"$id",[u],"$ad")
for(t=b.gT(b),s=this.gZ();t.B();)t.gI(t).gq().O(0,s)
u=new D.bB(a,b,this,[u])
u.b=!0
this.a_(u)},
ab:function(a){var u,t
if(this.e)return
this.e=!0
for(u=this.a,u=new J.am(u,u.length,0,[H.x(u,0)]);u.B();){t=u.d
if(t!=null)t.ab(a)}this.e=!1},
$ad:function(){return[M.ay]},
$aa1:function(){return[M.ay]},
$iay:1}
M.dk.prototype={
gq:function(){var u=this.f
if(u==null){u=D.J()
this.f=u}return u},
a_:function(a){var u
H.k(a,"$iy")
u=this.f
if(u!=null)u.F(a)},
aZ:function(){return this.a_(null)},
sb4:function(a){var u,t
if(a==null)a=new X.h1()
u=this.a
if(u!==a){if(u!=null)u.gq().O(0,this.gZ())
t=this.a
this.a=a
a.gq().h(0,this.gZ())
u=new D.M("camera",t,this.a,this,[X.bP])
u.b=!0
this.a_(u)}},
sba:function(a,b){var u,t
if(b==null)b=X.ka(!0,!0,!1,null,2000,null,0)
u=this.b
if(u!==b){if(u!=null)u.gq().O(0,this.gZ())
t=this.b
this.b=b
b.gq().h(0,this.gZ())
u=new D.M("target",t,this.b,this,[X.cH])
u.b=!0
this.a_(u)}},
sbb:function(a){var u,t
u=this.c
if(u!=a){if(u!=null)u.gq().O(0,this.gZ())
t=this.c
this.c=a
if(a!=null)a.gq().h(0,this.gZ())
u=new D.M("technique",t,this.c,this,[O.bE])
u.b=!0
this.a_(u)}},
ab:function(a){a.cP(this.c)
this.b.a1(a)
this.a.a1(a)
this.d.al(0,a)
this.d.ab(a)
this.a.aU(a)
this.b.toString
a.cO()},
$iay:1}
M.dq.prototype={
a_:function(a){var u
H.k(a,"$iy")
u=this.x
if(u!=null)u.F(a)},
aZ:function(){return this.a_(null)},
hf:function(a,b){var u,t,s,r,q,p,o,n
u=E.ag
H.l(b,"$id",[u],"$ad")
for(t=b.length,s=this.gZ(),r={func:1,ret:-1,args:[D.y]},q=[r],p=0;p<b.length;b.length===t||(0,H.C)(b),++p){o=b[p]
if(o!=null){n=o.z
if(n==null){n=new D.bT()
n.sad(null)
n.saO(null)
n.c=null
n.d=0
o.z=n}H.n(s,r)
if(n.a==null)n.sad(H.c([],q))
n=n.a;(n&&C.a).h(n,s)}}u=new D.bA(a,b,this,[u])
u.b=!0
this.a_(u)},
hh:function(a,b){var u,t,s
u=E.ag
H.l(b,"$id",[u],"$ad")
for(t=b.gT(b),s=this.gZ();t.B();)t.gI(t).gq().O(0,s)
u=new D.bB(a,b,this,[u])
u.b=!0
this.a_(u)},
sb4:function(a){var u,t
if(a==null)a=X.kZ(2000,1.0471975511965976,null,0.1,null)
u=this.a
if(u!==a){if(u!=null)u.gq().O(0,this.gZ())
t=this.a
this.a=a
a.gq().h(0,this.gZ())
u=new D.M("camera",t,this.a,this,[X.bP])
u.b=!0
this.a_(u)}},
sba:function(a,b){var u,t
u=this.b
if(u!==b){if(u!=null)u.gq().O(0,this.gZ())
t=this.b
this.b=b
b.gq().h(0,this.gZ())
u=new D.M("target",t,this.b,this,[X.cH])
u.b=!0
this.a_(u)}},
sbb:function(a){var u,t
u=this.c
if(u!=a){if(u!=null)u.gq().O(0,this.gZ())
t=this.c
this.c=a
if(a!=null)a.gq().h(0,this.gZ())
u=new D.M("technique",t,this.c,this,[O.bE])
u.b=!0
this.a_(u)}},
gq:function(){var u=this.x
if(u==null){u=D.J()
this.x=u}return u},
ab:function(a){var u
a.cP(this.c)
this.b.a1(a)
this.a.a1(a)
u=this.c
if(u!=null)u.al(0,a)
for(u=this.d.a,u=new J.am(u,u.length,0,[H.x(u,0)]);u.B();)u.d.al(0,a)
for(u=this.d.a,u=new J.am(u,u.length,0,[H.x(u,0)]);u.B();)u.d.ab(a)
this.a.toString
a.cy.aD()
a.db.aD()
this.b.toString
a.cO()},
sfz:function(a,b){this.d=H.l(b,"$ia1",[E.ag],"$aa1")},
$iay:1}
M.ay.prototype={}
A.dd.prototype={}
A.fk.prototype={
j:function(a,b){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<t;++s){r=u[s]
if(r.b===b)return r}return},
jB:function(){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<u.length;u.length===t||(0,H.C)(u),++s){r=u[s]
C.b.dZ(r.a,r.c)}},
dV:function(){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<u.length;u.length===t||(0,H.C)(u),++s){r=u[s]
C.b.dW(r.a,r.c)}}}
A.dI.prototype={
f3:function(a6,a7){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5
this.z=a6
u=new P.bk("")
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
u=new P.bk("")
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
k=H.c([],[P.h])
if(q.b!==C.c)C.a.h(k,"ambient()")
if(q.c!==C.c)C.a.h(k,"diffuse(norm, litVec)")
if(q.d!==C.c)C.a.h(k,"invDiffuse(norm, litVec)")
if(q.e!==C.c)C.a.h(k,"specular(norm, litVec)")
m=u.a+="   return litClr*("+C.a.m(k," + ")+");\n"
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
j=H.c([],[P.h])
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
i="vec4("+C.a.m(j," + ")+", alpha);"
q=u.a
if(n){q+="   gl_FragColor = colorMat*"+i+"\n"
u.a=q}else{q+="   gl_FragColor = "+i+"\n"
u.a=q}q+="}\n"
u.a=q
this.el(0,s.charCodeAt(0)==0?s:s,q.charCodeAt(0)==0?q:q)
this.Q=this.x.j(0,"posAttr")
this.cx=this.x.j(0,"normAttr")
this.ch=this.x.j(0,"binmAttr")
this.cy=this.x.j(0,"txt2DAttr")
this.db=this.x.j(0,"txtCubeAttr")
this.dx=this.x.j(0,"bendAttr")
if(a6.fr)this.id=H.i(this.y.n(0,"invViewMat"),"$iar")
if(t)this.dy=H.i(this.y.n(0,"objMat"),"$iar")
if(r)this.fr=H.i(this.y.n(0,"viewObjMat"),"$iar")
this.fy=H.i(this.y.n(0,"projViewObjMat"),"$iar")
if(a6.x2)this.k1=H.i(this.y.n(0,"txt2DMat"),"$icN")
if(a6.y1)this.k2=H.i(this.y.n(0,"txtCubeMat"),"$iar")
if(a6.y2)this.k3=H.i(this.y.n(0,"colorMat"),"$iar")
this.sft(H.c([],[A.ar]))
t=a6.ar
if(t>0){this.k4=H.k(this.y.n(0,"bendMatCount"),"$iL")
for(h=0;h<t;++h){s=this.r1
r=this.y
q="bendValues["+h+"].mat"
g=r.j(0,q)
if(g==null)H.u(P.r("Required uniform value, "+q+", was not defined or used in shader."));(s&&C.a).h(s,H.i(g,"$iar"))}}t=a6.a
if(t!==C.c){this.r2=H.i(this.y.n(0,"emissionClr"),"$iI")
switch(t){case C.c:break
case C.i:break
case C.f:this.rx=H.i(this.y.n(0,"emissionTxt"),"$iah")
this.x1=H.i(this.y.n(0,"nullEmissionTxt"),"$iL")
break
case C.h:this.ry=H.i(this.y.n(0,"emissionTxt"),"$iae")
this.x1=H.i(this.y.n(0,"nullEmissionTxt"),"$iL")
break}}t=a6.b
if(t!==C.c){this.x2=H.i(this.y.n(0,"ambientClr"),"$iI")
switch(t){case C.c:break
case C.i:break
case C.f:this.y1=H.i(this.y.n(0,"ambientTxt"),"$iah")
this.ar=H.i(this.y.n(0,"nullAmbientTxt"),"$iL")
break
case C.h:this.y2=H.i(this.y.n(0,"ambientTxt"),"$iae")
this.ar=H.i(this.y.n(0,"nullAmbientTxt"),"$iL")
break}}t=a6.c
if(t!==C.c){this.aj=H.i(this.y.n(0,"diffuseClr"),"$iI")
switch(t){case C.c:break
case C.i:break
case C.f:this.bp=H.i(this.y.n(0,"diffuseTxt"),"$iah")
this.bq=H.i(this.y.n(0,"nullDiffuseTxt"),"$iL")
break
case C.h:this.e_=H.i(this.y.n(0,"diffuseTxt"),"$iae")
this.bq=H.i(this.y.n(0,"nullDiffuseTxt"),"$iL")
break}}t=a6.d
if(t!==C.c){this.br=H.i(this.y.n(0,"invDiffuseClr"),"$iI")
switch(t){case C.c:break
case C.i:break
case C.f:this.e0=H.i(this.y.n(0,"invDiffuseTxt"),"$iah")
this.bs=H.i(this.y.n(0,"nullInvDiffuseTxt"),"$iL")
break
case C.h:this.e1=H.i(this.y.n(0,"invDiffuseTxt"),"$iae")
this.bs=H.i(this.y.n(0,"nullInvDiffuseTxt"),"$iL")
break}}t=a6.e
if(t!==C.c){this.bv=H.i(this.y.n(0,"shininess"),"$iY")
this.bt=H.i(this.y.n(0,"specularClr"),"$iI")
switch(t){case C.c:break
case C.i:break
case C.f:this.e2=H.i(this.y.n(0,"specularTxt"),"$iah")
this.bu=H.i(this.y.n(0,"nullSpecularTxt"),"$iL")
break
case C.h:this.e3=H.i(this.y.n(0,"specularTxt"),"$iae")
this.bu=H.i(this.y.n(0,"nullSpecularTxt"),"$iL")
break}}switch(a6.f){case C.c:break
case C.i:break
case C.f:this.e4=H.i(this.y.n(0,"bumpTxt"),"$iah")
this.bw=H.i(this.y.n(0,"nullBumpTxt"),"$iL")
break
case C.h:this.e5=H.i(this.y.n(0,"bumpTxt"),"$iae")
this.bw=H.i(this.y.n(0,"nullBumpTxt"),"$iL")
break}if(a6.dy){this.e6=H.i(this.y.n(0,"envSampler"),"$iae")
this.e7=H.i(this.y.n(0,"nullEnvTxt"),"$iL")
t=a6.r
if(t!==C.c){this.bx=H.i(this.y.n(0,"reflectClr"),"$iI")
switch(t){case C.c:break
case C.i:break
case C.f:this.e8=H.i(this.y.n(0,"reflectTxt"),"$iah")
this.by=H.i(this.y.n(0,"nullReflectTxt"),"$iL")
break
case C.h:this.e9=H.i(this.y.n(0,"reflectTxt"),"$iae")
this.by=H.i(this.y.n(0,"nullReflectTxt"),"$iL")
break}}t=a6.x
if(t!==C.c){this.bz=H.i(this.y.n(0,"refraction"),"$iY")
this.bA=H.i(this.y.n(0,"refractClr"),"$iI")
switch(t){case C.c:break
case C.i:break
case C.f:this.ea=H.i(this.y.n(0,"refractTxt"),"$iah")
this.bB=H.i(this.y.n(0,"nullRefractTxt"),"$iL")
break
case C.h:this.eb=H.i(this.y.n(0,"refractTxt"),"$iae")
this.bB=H.i(this.y.n(0,"nullRefractTxt"),"$iL")
break}}}t=a6.y
if(t!==C.c){this.bC=H.i(this.y.n(0,"alpha"),"$iY")
switch(t){case C.c:break
case C.i:break
case C.f:this.ec=H.i(this.y.n(0,"alphaTxt"),"$iah")
this.bD=H.i(this.y.n(0,"nullAlphaTxt"),"$iL")
break
case C.h:this.ed=H.i(this.y.n(0,"alphaTxt"),"$iae")
this.bD=H.i(this.y.n(0,"nullAlphaTxt"),"$iL")
break}}this.sfd(H.c([],[A.cM]))
this.sfe(H.c([],[A.cO]))
this.sff(H.c([],[A.cP]))
this.sfg(H.c([],[A.cQ]))
this.sfh(H.c([],[A.cR]))
this.sfi(H.c([],[A.cS]))
if(a6.k2){t=a6.z
if(t>0){this.ee=H.k(this.y.n(0,"dirLightCount"),"$iL")
for(h=0;h<t;++h){s=this.y
r="dirLights["+h+"].viewDir"
g=s.j(0,r)
if(g==null)H.u(P.r("Required uniform value, "+r+", was not defined or used in shader."))
H.i(g,"$iI")
s=this.y
r="dirLights["+h+"].color"
f=s.j(0,r)
if(f==null)H.u(P.r("Required uniform value, "+r+", was not defined or used in shader."))
H.i(f,"$iI")
s=this.cA;(s&&C.a).h(s,new A.cM(h,g,f))}}t=a6.Q
if(t>0){this.ef=H.k(this.y.n(0,"pntLightCount"),"$iL")
for(h=0;h<t;++h){s=this.y
r="pntLights["+h+"].point"
g=s.j(0,r)
if(g==null)H.u(P.r("Required uniform value, "+r+", was not defined or used in shader."))
H.i(g,"$iI")
s=this.y
r="pntLights["+h+"].viewPnt"
f=s.j(0,r)
if(f==null)H.u(P.r("Required uniform value, "+r+", was not defined or used in shader."))
H.i(f,"$iI")
s=this.y
r="pntLights["+h+"].color"
e=s.j(0,r)
if(e==null)H.u(P.r("Required uniform value, "+r+", was not defined or used in shader."))
H.i(e,"$iI")
s=this.y
r="pntLights["+h+"].att0"
d=s.j(0,r)
if(d==null)H.u(P.r("Required uniform value, "+r+", was not defined or used in shader."))
H.i(d,"$iY")
s=this.y
r="pntLights["+h+"].att1"
c=s.j(0,r)
if(c==null)H.u(P.r("Required uniform value, "+r+", was not defined or used in shader."))
H.i(c,"$iY")
s=this.y
r="pntLights["+h+"].att2"
b=s.j(0,r)
if(b==null)H.u(P.r("Required uniform value, "+r+", was not defined or used in shader."))
H.i(b,"$iY")
s=this.cB;(s&&C.a).h(s,new A.cO(h,g,f,e,d,c,b))}}t=a6.ch
if(t>0){this.eg=H.k(this.y.n(0,"spotLightCount"),"$iL")
for(h=0;h<t;++h){s=this.y
r="spotLights["+h+"].objPnt"
g=s.j(0,r)
if(g==null)H.u(P.r("Required uniform value, "+r+", was not defined or used in shader."))
H.i(g,"$iI")
s=this.y
r="spotLights["+h+"].objDir"
f=s.j(0,r)
if(f==null)H.u(P.r("Required uniform value, "+r+", was not defined or used in shader."))
H.i(f,"$iI")
s=this.y
r="spotLights["+h+"].viewPnt"
e=s.j(0,r)
if(e==null)H.u(P.r("Required uniform value, "+r+", was not defined or used in shader."))
H.i(e,"$iI")
s=this.y
r="spotLights["+h+"].color"
d=s.j(0,r)
if(d==null)H.u(P.r("Required uniform value, "+r+", was not defined or used in shader."))
H.i(d,"$iI")
s=this.y
r="spotLights["+h+"].cutoff"
c=s.j(0,r)
if(c==null)H.u(P.r("Required uniform value, "+r+", was not defined or used in shader."))
H.i(c,"$iY")
s=this.y
r="spotLights["+h+"].coneAngle"
b=s.j(0,r)
if(b==null)H.u(P.r("Required uniform value, "+r+", was not defined or used in shader."))
H.i(b,"$iY")
s=this.y
r="spotLights["+h+"].att0"
a=s.j(0,r)
if(a==null)H.u(P.r("Required uniform value, "+r+", was not defined or used in shader."))
H.i(a,"$iY")
s=this.y
r="spotLights["+h+"].att1"
a0=s.j(0,r)
if(a0==null)H.u(P.r("Required uniform value, "+r+", was not defined or used in shader."))
H.i(a0,"$iY")
s=this.y
r="spotLights["+h+"].att2"
a1=s.j(0,r)
if(a1==null)H.u(P.r("Required uniform value, "+r+", was not defined or used in shader."))
H.i(a1,"$iY")
s=this.cC;(s&&C.a).h(s,new A.cP(h,g,f,e,d,c,b,a,a0,a1))}}t=a6.cx
if(t>0){this.eh=H.k(this.y.n(0,"txtDirLightCount"),"$iL")
for(h=0;h<t;++h){s=this.y
r="txtDirLights["+h+"].objUp"
g=s.j(0,r)
if(g==null)H.u(P.r("Required uniform value, "+r+", was not defined or used in shader."))
H.i(g,"$iI")
s=this.y
r="txtDirLights["+h+"].objRight"
f=s.j(0,r)
if(f==null)H.u(P.r("Required uniform value, "+r+", was not defined or used in shader."))
H.i(f,"$iI")
s=this.y
r="txtDirLights["+h+"].objDir"
e=s.j(0,r)
if(e==null)H.u(P.r("Required uniform value, "+r+", was not defined or used in shader."))
H.i(e,"$iI")
s=this.y
r="txtDirLights["+h+"].viewDir"
d=s.j(0,r)
if(d==null)H.u(P.r("Required uniform value, "+r+", was not defined or used in shader."))
H.i(d,"$iI")
s=this.y
r="txtDirLights["+h+"].color"
c=s.j(0,r)
if(c==null)H.u(P.r("Required uniform value, "+r+", was not defined or used in shader."))
H.i(c,"$iI")
s=this.y
r="txtDirLights["+h+"].nullTxt"
b=s.j(0,r)
if(b==null)H.u(P.r("Required uniform value, "+r+", was not defined or used in shader."))
H.i(b,"$iL")
s=this.y
r="txtDirLightsTxt2D"+h
a=s.j(0,r)
if(a==null)H.u(P.r("Required uniform value, "+r+", was not defined or used in shader."))
H.i(a,"$iah")
s=this.cD;(s&&C.a).h(s,new A.cQ(h,g,f,e,d,c,a,b))}}t=a6.cy
if(t>0){this.ei=H.k(this.y.n(0,"txtPntLightCount"),"$iL")
for(h=0;h<t;++h){s=this.y
r="txtPntLights["+h+"].point"
g=s.j(0,r)
if(g==null)H.u(P.r("Required uniform value, "+r+", was not defined or used in shader."))
H.i(g,"$iI")
s=this.y
r="txtPntLights["+h+"].viewPnt"
f=s.j(0,r)
if(f==null)H.u(P.r("Required uniform value, "+r+", was not defined or used in shader."))
H.i(f,"$iI")
s=this.y
r="txtPntLights["+h+"].invViewRotMat"
e=s.j(0,r)
if(e==null)H.u(P.r("Required uniform value, "+r+", was not defined or used in shader."))
H.i(e,"$icN")
s=this.y
r="txtPntLights["+h+"].color"
d=s.j(0,r)
if(d==null)H.u(P.r("Required uniform value, "+r+", was not defined or used in shader."))
H.i(d,"$iI")
s=this.y
r="txtPntLights["+h+"].nullTxt"
c=s.j(0,r)
if(c==null)H.u(P.r("Required uniform value, "+r+", was not defined or used in shader."))
H.i(c,"$iL")
s=this.y
r="txtPntLights["+h+"].att0"
b=s.j(0,r)
if(b==null)H.u(P.r("Required uniform value, "+r+", was not defined or used in shader."))
H.i(b,"$iY")
s=this.y
r="txtPntLights["+h+"].att1"
a=s.j(0,r)
if(a==null)H.u(P.r("Required uniform value, "+r+", was not defined or used in shader."))
H.i(a,"$iY")
s=this.y
r="txtPntLights["+h+"].att2"
a0=s.j(0,r)
if(a0==null)H.u(P.r("Required uniform value, "+r+", was not defined or used in shader."))
H.i(a0,"$iY")
s=this.y
r="txtPntLightsTxtCube"+h
a1=s.j(0,r)
if(a1==null)H.u(P.r("Required uniform value, "+r+", was not defined or used in shader."))
H.i(a1,"$iae")
s=this.cE;(s&&C.a).h(s,new A.cR(h,g,f,e,d,a1,c,b,a,a0))}}t=a6.db
if(t>0){this.ej=H.k(this.y.n(0,"txtSpotLightCount"),"$iL")
for(h=0;h<t;++h){s=this.y
r="txtSpotLights["+h+"].objPnt"
g=s.j(0,r)
if(g==null)H.u(P.r("Required uniform value, "+r+", was not defined or used in shader."))
H.i(g,"$iI")
s=this.y
r="txtSpotLights["+h+"].objDir"
f=s.j(0,r)
if(f==null)H.u(P.r("Required uniform value, "+r+", was not defined or used in shader."))
H.i(f,"$iI")
s=this.y
r="txtSpotLights["+h+"].objUp"
e=s.j(0,r)
if(e==null)H.u(P.r("Required uniform value, "+r+", was not defined or used in shader."))
H.i(e,"$iI")
s=this.y
r="txtSpotLights["+h+"].objRight"
d=s.j(0,r)
if(d==null)H.u(P.r("Required uniform value, "+r+", was not defined or used in shader."))
H.i(d,"$iI")
s=this.y
r="txtSpotLights["+h+"].viewPnt"
c=s.j(0,r)
if(c==null)H.u(P.r("Required uniform value, "+r+", was not defined or used in shader."))
H.i(c,"$iI")
s=this.y
r="txtSpotLights["+h+"].nullTxt"
b=s.j(0,r)
if(b==null)H.u(P.r("Required uniform value, "+r+", was not defined or used in shader."))
H.i(b,"$iL")
s=this.y
r="txtSpotLights["+h+"].color"
a=s.j(0,r)
if(a==null)H.u(P.r("Required uniform value, "+r+", was not defined or used in shader."))
H.i(a,"$iI")
s=this.y
r="txtSpotLights["+h+"].tuScalar"
a0=s.j(0,r)
if(a0==null)H.u(P.r("Required uniform value, "+r+", was not defined or used in shader."))
H.i(a0,"$iY")
s=this.y
r="txtSpotLights["+h+"].tvScalar"
a1=s.j(0,r)
if(a1==null)H.u(P.r("Required uniform value, "+r+", was not defined or used in shader."))
H.i(a1,"$iY")
s=this.y
r="txtSpotLights["+h+"].att0"
a2=s.j(0,r)
if(a2==null)H.u(P.r("Required uniform value, "+r+", was not defined or used in shader."))
H.i(a2,"$iY")
s=this.y
r="txtSpotLights["+h+"].att1"
a3=s.j(0,r)
if(a3==null)H.u(P.r("Required uniform value, "+r+", was not defined or used in shader."))
H.i(a3,"$iY")
s=this.y
r="txtSpotLights["+h+"].att2"
a4=s.j(0,r)
if(a4==null)H.u(P.r("Required uniform value, "+r+", was not defined or used in shader."))
H.i(a4,"$iY")
s=this.y
r="txtSpotLightsTxt2D"+h
a5=s.j(0,r)
if(a5==null)H.u(P.r("Required uniform value, "+r+", was not defined or used in shader."))
H.i(a5,"$iah")
s=this.cF;(s&&C.a).h(s,new A.cS(h,g,f,e,d,c,a5,b,a,a0,a1,a2,a3,a4))}}}},
ai:function(a,b,c){C.b.R(b.a,b.d,1)},
ae:function(a,b,c){C.b.R(b.a,b.d,1)},
sft:function(a){this.r1=H.l(a,"$ib",[A.ar],"$ab")},
sfd:function(a){this.cA=H.l(a,"$ib",[A.cM],"$ab")},
sfe:function(a){this.cB=H.l(a,"$ib",[A.cO],"$ab")},
sff:function(a){this.cC=H.l(a,"$ib",[A.cP],"$ab")},
sfg:function(a){this.cD=H.l(a,"$ib",[A.cQ],"$ab")},
sfh:function(a){this.cE=H.l(a,"$ib",[A.cR],"$ab")},
sfi:function(a){this.cF=H.l(a,"$ib",[A.cS],"$ab")}}
A.hm.prototype={
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
u=a.a+="uniform BendingValue bendValues["+this.ar+"];\n"
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
av:function(a,b,c){var u
if(b===C.c)return
u=a.a+="uniform vec3 "+c+"Clr;\n"
if(b===C.i)return
if(0>=c.length)return H.j(c,0)
u+="uniform int null"+(c[0].toUpperCase()+C.j.bf(c,1))+"Txt;\n"
a.a=u
if(b===C.f)a.a=u+("uniform sampler2D "+c+"Txt;\n")
else if(b===C.h)a.a=u+("uniform samplerCube "+c+"Txt;\n")},
iL:function(a){var u,t
u=this.a
if(u===C.c)return
t=a.a+="// === Emission ===\n"
a.a=t+"\n"
this.av(a,u,"emission")
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
iG:function(a){var u,t
u=this.b
if(u===C.c)return
t=a.a+="// === Ambient ===\n"
a.a=t+"\n"
this.av(a,u,"ambient")
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
iJ:function(a){var u,t
u=this.c
if(u===C.c)return
t=a.a+="// === Diffuse ===\n"
a.a=t+"\n"
this.av(a,u,"diffuse")
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
iM:function(a){var u,t
u=this.d
if(u===C.c)return
t=a.a+="// === Inverse Diffuse ===\n"
a.a=t+"\n"
this.av(a,u,"invDiffuse")
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
iU:function(a){var u,t
u=this.e
if(u===C.c)return
t=a.a+="// === Specular ===\n"
a.a=t+"\n"
this.av(a,u,"specular")
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
iS:function(a){var u,t
u=this.r
if(u===C.c)return
t=a.a+="// === Reflection ===\n"
a.a=t+"\n"
this.av(a,u,"reflect")
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
iT:function(a){var u,t
u=this.x
if(u===C.c)return
t=a.a+="// === Refraction ===\n"
a.a=t+"\n"
this.av(a,u,"refract")
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
i:function(a){return this.aj}}
A.cM.prototype={}
A.cQ.prototype={}
A.cO.prototype={}
A.cR.prototype={}
A.cP.prototype={}
A.cS.prototype={}
A.cE.prototype={
d2:function(a,b){this.c=null
this.d=null
this.e=null
this.f=null
this.r=null
this.x=null
this.y=null},
el:function(a,b,c){var u,t,s
this.c=b
this.d=c
this.e=this.dk(b,35633)
this.f=this.dk(this.d,35632)
u=this.a
t=u.createProgram()
this.r=t
C.b.dL(u,t,this.e)
C.b.dL(u,this.r,this.f)
C.b.jM(u,this.r)
if(!H.kq(C.b.bP(u,this.r,35714))){s=C.b.eJ(u,this.r)
C.b.jq(u,this.r)
H.u(P.r("Failed to link shader: "+H.m(s)))}this.ii()
this.ik()},
a1:function(a){C.b.cV(a.a,this.r)
this.x.jB()},
dk:function(a,b){var u,t,s
u=this.a
t=C.b.jo(u,b)
C.b.eU(u,t,a)
C.b.ji(u,t)
if(!H.kq(C.b.eL(u,t,35713))){s=C.b.eK(u,t)
C.b.jr(u,t)
throw H.f(P.r("Error compiling shader '"+H.m(t)+"': "+H.m(s)))}return t},
ii:function(){var u,t,s,r,q,p
u=H.c([],[A.dd])
t=this.a
s=H.a9(C.b.bP(t,this.r,35721))
if(typeof s!=="number")return H.G(s)
r=0
for(;r<s;++r){q=C.b.eD(t,this.r,r)
p=C.b.eF(t,this.r,q.name)
C.a.h(u,new A.dd(t,q.name,p))}this.x=new A.fk(u)},
ik:function(){var u,t,s,r,q,p
u=H.c([],[A.eb])
t=this.a
s=H.a9(C.b.bP(t,this.r,35718))
if(typeof s!=="number")return H.G(s)
r=0
for(;r<s;++r){q=C.b.eE(t,this.r,r)
p=C.b.eM(t,this.r,q.name)
C.a.h(u,this.jp(q.type,q.size,q.name,p))}this.y=new A.iH(u)},
aK:function(a,b,c){var u,t
u=this.a
t=this.r
if(a===1)return new A.L(u,t,b,c)
else return A.kj(u,t,b,a,c)},
fC:function(a,b,c){var u,t
u=this.a
t=this.r
if(a===1)return new A.ah(u,t,b,c)
else return A.kj(u,t,b,a,c)},
fD:function(a,b,c){var u,t
u=this.a
t=this.r
if(a===1)return new A.ae(u,t,b,c)
else return A.kj(u,t,b,a,c)},
bm:function(a,b){return new P.et(a+" uniform variables are unsupported by all browsers.\n"+("Please change the type of "+H.m(b)+"."))},
jp:function(a,b,c,d){switch(a){case 5120:return this.aK(b,c,d)
case 5121:return this.aK(b,c,d)
case 5122:return this.aK(b,c,d)
case 5123:return this.aK(b,c,d)
case 5124:return this.aK(b,c,d)
case 5125:return this.aK(b,c,d)
case 5126:return new A.Y(this.a,this.r,c,d)
case 35664:return new A.iC(this.a,this.r,c,d)
case 35665:return new A.I(this.a,this.r,c,d)
case 35666:return new A.iF(this.a,this.r,c,d)
case 35667:return new A.iD(this.a,this.r,c,d)
case 35668:return new A.iE(this.a,this.r,c,d)
case 35669:return new A.iG(this.a,this.r,c,d)
case 35674:return new A.iI(this.a,this.r,c,d)
case 35675:return new A.cN(this.a,this.r,c,d)
case 35676:return new A.ar(this.a,this.r,c,d)
case 35678:return this.fC(b,c,d)
case 35680:return this.fD(b,c,d)
case 35670:throw H.f(this.bm("BOOL",c))
case 35671:throw H.f(this.bm("BOOL_VEC2",c))
case 35672:throw H.f(this.bm("BOOL_VEC3",c))
case 35673:throw H.f(this.bm("BOOL_VEC4",c))
default:throw H.f(P.r("Unknown uniform variable type "+H.m(a)+" for "+H.m(c)+"."))}}}
A.bS.prototype={
i:function(a){return this.b}}
A.dZ.prototype={}
A.eb.prototype={}
A.iH.prototype={
j:function(a,b){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<t;++s){r=u[s]
if(r.c===b)return r}return},
n:function(a,b){var u=this.j(0,b)
if(u==null)throw H.f(P.r("Required uniform value, "+b+", was not defined or used in shader."))
return u},
i:function(a){return this.U()},
jG:function(a){var u,t,s,r
for(u=this.a,t=u.length,s="",r=0;r<u.length;u.length===t||(0,H.C)(u),++r)s+=u[r].i(0)+a
return s},
U:function(){return this.jG("\n")}}
A.L.prototype={
i:function(a){return"Uniform1i: "+H.m(this.c)}}
A.iD.prototype={
i:function(a){return"Uniform2i: "+H.m(this.c)}}
A.iE.prototype={
i:function(a){return"Uniform3i: "+H.m(this.c)}}
A.iG.prototype={
i:function(a){return"Uniform4i: "+H.m(this.c)}}
A.iB.prototype={
i:function(a){return"Uniform1iv: "+H.m(this.c)},
siE:function(a){this.e=H.l(a,"$ib",[P.B],"$ab")}}
A.Y.prototype={
i:function(a){return"Uniform1f: "+H.m(this.c)}}
A.iC.prototype={
i:function(a){return"Uniform2f: "+H.m(this.c)}}
A.I.prototype={
i:function(a){return"Uniform3f: "+H.m(this.c)}}
A.iF.prototype={
i:function(a){return"Uniform4f: "+H.m(this.c)}}
A.iI.prototype={
i:function(a){return"Uniform1Mat2 "+H.m(this.c)}}
A.cN.prototype={
ah:function(a){var u=new Float32Array(H.d5(H.l(a,"$ib",[P.z],"$ab")))
C.b.eA(this.a,this.d,!1,u)},
i:function(a){return"UniformMat3: "+H.m(this.c)}}
A.ar.prototype={
ah:function(a){var u=new Float32Array(H.d5(H.l(a,"$ib",[P.z],"$ab")))
C.b.eB(this.a,this.d,!1,u)},
i:function(a){return"UniformMat4: "+H.m(this.c)}}
A.ah.prototype={
i:function(a){return"UniformSampler2D: "+H.m(this.c)}}
A.ae.prototype={
eT:function(a){var u,t,s
u=a==null||a.d<6
t=this.a
s=this.d
if(u)C.b.R(t,s,0)
else C.b.R(t,s,a.a)},
i:function(a){return"UniformSamplerCube: "+H.m(this.c)}}
F.k0.prototype={
$1:function(a){return new V.a3(Math.cos(a),Math.sin(a),0)},
$S:36}
F.jP.prototype={
$3:function(a,b,c){var u,t,s,r,q,p,o,n,m
u=b*6.283185307179586
t=this.a
s=this.b
r=J.kD(t.$1(u),s)
s=J.m1(J.kD(t.$1(u+3.141592653589793/this.c),s),r)
s=new V.Q(s.a,s.b,s.c)
q=s.w(0,Math.sqrt(s.D(s)))
t=$.lh
if(t==null){t=new V.Q(1,0,0)
$.lh=t
p=t}else p=t
t=q.ay(!J.a0(q,p)?V.ll():p)
o=t.w(0,Math.sqrt(t.D(t)))
t=o.ay(q)
p=t.w(0,Math.sqrt(t.D(t)))
n=c*6.283185307179586
t=Math.cos(n)
s=this.d
m=Math.sin(n)
t=p.v(0,t*s)
s=o.v(0,m*s)
s=J.m0(r,new V.a3(t.a-s.a,t.b-s.b,t.c-s.c))
if(!J.a0(a.f,s)){a.f=H.k(s,"$ia3")
t=a.a
if(t!=null)t.aa()}},
$S:37}
F.a7.prototype={
b5:function(){if(!this.gdX()){C.a.O(this.a.a.d.b,this)
this.a.a.aa()}this.i1()
this.i2()
this.i3()},
ie:function(a){this.a=a
C.a.h(a.d.b,this)},
ig:function(a){this.b=a
C.a.h(a.d.c,this)},
ih:function(a){this.c=a
C.a.h(a.d.d,this)},
i1:function(){var u=this.a
if(u!=null){C.a.O(u.d.b,this)
this.a=null}},
i2:function(){var u=this.b
if(u!=null){C.a.O(u.d.c,this)
this.b=null}},
i3:function(){var u=this.c
if(u!=null){C.a.O(u.d.d,this)
this.c=null}},
gdX:function(){return this.a==null||this.b==null||this.c==null},
fs:function(){var u,t,s,r,q
u=this.a
t=u==null?null:u.r
u=this.b
s=u==null?null:u.r
u=this.c
r=u==null?null:u.r
q=V.cT()
if(t!=null)q=q.p(0,t)
if(s!=null)q=q.p(0,s)
if(r!=null)q=q.p(0,r)
if(q.em())return
return q.w(0,Math.sqrt(q.D(q)))},
fw:function(){var u,t,s,r,q
u=this.a
t=u==null?null:u.f
u=this.b
s=u==null?null:u.f
u=this.c
r=u==null?null:u.f
if(t==null||s==null||r==null)return
u=s.t(0,t)
u=new V.Q(u.a,u.b,u.c)
q=u.w(0,Math.sqrt(u.D(u)))
u=r.t(0,t)
u=new V.Q(u.a,u.b,u.c)
u=q.ay(u.w(0,Math.sqrt(u.D(u))))
return u.w(0,Math.sqrt(u.D(u)))},
ct:function(){if(this.d!=null)return!0
var u=this.fs()
if(u==null){u=this.fw()
if(u==null)return!1}this.d=u
this.a.a.aa()
return!0},
fq:function(){var u,t,s,r,q
u=this.a
t=u==null?null:u.x
u=this.b
s=u==null?null:u.x
u=this.c
r=u==null?null:u.x
q=V.cT()
if(t!=null)q=q.p(0,t)
if(s!=null)q=q.p(0,s)
if(r!=null)q=q.p(0,r)
if(q.em())return
return q.w(0,Math.sqrt(q.D(q)))},
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
if(Math.abs(i-0)<$.R().a){u=m.t(0,p)
u=new V.Q(u.a,u.b,u.c)
h=u.w(0,Math.sqrt(u.D(u)))
if(j.a-k.a<0)h=h.S(0)}else{g=(u-l.b)/i
u=m.t(0,p).v(0,g).p(0,p).t(0,s)
u=new V.Q(u.a,u.b,u.c)
h=u.w(0,Math.sqrt(u.D(u)))
j=j.a
k=k.a
if((j-k)*g+k-l.a<0)h=h.S(0)}u=this.d
if(u!=null){f=u.w(0,Math.sqrt(u.D(u)))
u=f.ay(h)
u=u.w(0,Math.sqrt(u.D(u))).ay(f)
h=u.w(0,Math.sqrt(u.D(u)))}return h},
cr:function(){if(this.e!=null)return!0
var u=this.fq()
if(u==null){u=this.fv()
if(u==null)return!1}this.e=u
this.a.a.aa()
return!0},
gjh:function(a){if(J.a0(this.a,this.b))return!0
if(J.a0(this.b,this.c))return!0
if(J.a0(this.c,this.a))return!0
return!1},
A:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.U()},
G:function(a){var u,t
if(this.gdX())return a+"disposed"
u=a+C.j.aC(J.aM(this.a.e),0)+", "+C.j.aC(J.aM(this.b.e),0)+", "+C.j.aC(J.aM(this.c.e),0)+" {"
t=this.d
u=t!=null?u+(t.i(0)+", "):u+"-, "
t=this.e
return t!=null?u+(t.i(0)+"}"):u+"-}"},
U:function(){return this.G("")}}
F.fO.prototype={}
F.i5.prototype={
b6:function(a,b,c){var u,t
u=b.a
u.a.a.E()
u=u.e
t=c.a
t.a.a.E()
if(u==t.e){u=b.b
u.a.a.E()
u=u.e
t=c.b
t.a.a.E()
if(u==t.e){u=b.c
u.a.a.E()
u=u.e
t=c.c
t.a.a.E()
t=u==t.e
u=t}else u=!1
return u}else{u=b.a
u.a.a.E()
u=u.e
t=c.b
t.a.a.E()
if(u==t.e){u=b.b
u.a.a.E()
u=u.e
t=c.c
t.a.a.E()
if(u==t.e){u=b.c
u.a.a.E()
u=u.e
t=c.a
t.a.a.E()
t=u==t.e
u=t}else u=!1
return u}else{u=b.a
u.a.a.E()
u=u.e
t=c.c
t.a.a.E()
if(u==t.e){u=b.b
u.a.a.E()
u=u.e
t=c.a
t.a.a.E()
if(u==t.e){u=b.c
u.a.a.E()
u=u.e
t=c.b
t.a.a.E()
t=u==t.e
u=t}else u=!1
return u}else return!1}}}}
F.bD.prototype={}
F.ha.prototype={}
F.iA.prototype={
b6:function(a,b,c){var u,t
u=b.a
u.a.a.E()
u=u.e
t=c.a
t.a.a.E()
if(u==t.e){u=b.b
u.a.a.E()
u=u.e
t=c.b
t.a.a.E()
return u==t.e}else{u=b.a
u.a.a.E()
u=u.e
t=c.b
t.a.a.E()
if(u==t.e){u=b.b
u.a.a.E()
u=u.e
t=c.a
t.a.a.E()
return u==t.e}else return!1}}}
F.bZ.prototype={}
F.dX.prototype={
gq:function(){var u=this.e
if(u==null){u=D.J()
this.e=u}return u},
ax:function(){var u,t
u=this.e
if(u!=null)++u.d
t=this.d.ax()||!1
if(!this.a.ax())t=!1
u=this.e
if(u!=null)u.aF(0)
return t},
jQ:function(a,b){var u,t,s,r,q,p
P.at("FLAG 1\n")
u=this.e
if(u!=null)++u.d
P.at("FLAG 2\n")
u=this.a.c
t=H.c(u.slice(0),[H.x(u,0)])
P.at("FLAG 3\n")
for(u=[F.aj];t.length!==0;){s=C.a.gjD(t)
C.a.kb(t,0)
if(s!=null){r=H.c([],u)
C.a.h(r,s)
for(q=t.length-1;q>=0;--q){if(q>=t.length)return H.j(t,q)
p=t[q]
if(p!=null&&a.b6(0,s,p)){C.a.h(r,p)
C.a.O(t,p)}}if(r.length>1)b.jP(r)}}P.at("FLAG 4\n")
this.a.E()
P.at("FLAG 5\n")
this.c.cR()
P.at("FLAG 6\n")
this.d.cR()
P.at("FLAG 7\n")
this.b.kc()
P.at("FLAG 8\n")
this.c.cS(new F.iA())
P.at("FLAG 9\n")
this.d.cS(new F.i5())
P.at("FLAG 10\n")
u=this.e
if(u!=null)u.aF(0)
P.at("FLAG 11\n")},
dP:function(a0,a1){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a
u=this.a.c.length
a1.toString
t=$.aL()
s=a1.a
r=(s&t.a)!==0?1:0
if((s&$.bp().a)!==0)++r
if((s&$.bo().a)!==0)++r
if((s&$.bq().a)!==0)++r
if((s&$.br().a)!==0)++r
if((s&$.d9().a)!==0)++r
if((s&$.da().a)!==0)++r
if((s&$.cf().a)!==0)++r
if((s&$.bn().a)!==0)++r
q=a1.gd0(a1)
p=q*4
t=new Array(u*q)
t.fixed$length=Array
s=P.z
o=H.c(t,[s])
t=new Array(r)
t.fixed$length=Array
n=H.c(t,[Z.dg])
for(m=0,l=0;l<r;++l){k=a1.j8(l)
j=k.gd0(k)
C.a.Y(n,l,new Z.dg(k,j,m*4,p,0))
for(i=0;i<u;++i){t=this.a.c
if(i>=t.length)return H.j(t,i)
h=t[i].jN(k)
g=m+i*q
for(f=0;f<h.length;++f){C.a.Y(o,g,h[f]);++g}}m+=j}H.l(o,"$ib",[s],"$ab")
t=a0.a
e=t.createBuffer()
C.b.ap(t,34962,e)
C.b.dO(t,34962,new Float32Array(H.d5(o)),35044)
C.b.ap(t,34962,null)
d=new Z.cj(new Z.ej(34962,e),n,a1)
d.sfR(H.c([],[Z.bW]))
this.b.b
if(this.c.b.length!==0){s=P.B
c=H.c([],[s])
for(l=0;b=this.c.b,l<b.length;++l){b=b[l].a
b.a.a.E()
C.a.h(c,b.e)
b=this.c.b
if(l>=b.length)return H.j(b,l)
b=b[l].b
b.a.a.E()
C.a.h(c,b.e)}a=Z.lm(t,34963,H.l(c,"$ib",[s],"$ab"))
C.a.h(d.b,new Z.bW(1,c.length,a))}if(this.d.b.length!==0){s=P.B
c=H.c([],[s])
for(l=0;b=this.d.b,l<b.length;++l){b=b[l].a
b.a.a.E()
C.a.h(c,b.e)
b=this.d.b
if(l>=b.length)return H.j(b,l)
b=b[l].b
b.a.a.E()
C.a.h(c,b.e)
b=this.d.b
if(l>=b.length)return H.j(b,l)
b=b[l].c
b.a.a.E()
C.a.h(c,b.e)}a=Z.lm(t,34963,H.l(c,"$ib",[s],"$ab"))
C.a.h(d.b,new Z.bW(4,c.length,a))}return d},
i:function(a){var u=H.c([],[P.h])
if(this.a.c.length!==0){C.a.h(u,"Vertices:")
C.a.h(u,this.a.G("   "))}this.b.b
if(this.c.b.length!==0){C.a.h(u,"Lines:")
C.a.h(u,this.c.G("   "))}if(this.d.b.length!==0){C.a.h(u,"Faces:")
C.a.h(u,this.d.G("   "))}return C.a.m(u,"\n")},
aT:function(a){var u=this.e
if(u!=null)u.F(a)},
aa:function(){return this.aT(null)},
$inK:1}
F.hZ.prototype={
j2:function(a){var u,t,s,r,q,p
H.l(a,"$ib",[F.aj],"$ab")
u=H.c([],[F.a7])
t=a[0]
for(s=this.a,r=2;r<4;++r){q=a[r-1]
p=a[r]
s.a.h(0,t)
s.a.h(0,q)
s.a.h(0,p)
C.a.h(u,F.dr(t,q,p))}return u},
j3:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k,j,i,h
H.l(c,"$ib",[F.aj],"$ab")
u=H.c([],[F.a7])
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
C.a.h(u,F.dr(l,k,i))
t.a.h(0,l)
t.a.h(0,i)
t.a.h(0,h)
C.a.h(u,F.dr(l,i,h))}else{m.h(0,k)
t.a.h(0,i)
t.a.h(0,h)
C.a.h(u,F.dr(k,i,h))
t.a.h(0,k)
t.a.h(0,h)
t.a.h(0,l)
C.a.h(u,F.dr(k,h,l))}o=!o}q=!q}return u},
gl:function(a){return this.b.length},
cS:function(a){var u,t,s,r,q,p,o,n
for(u=this.a,t=u.a.c.length-1;t>=0;--t){s=u.a.c
if(t>=s.length)return H.j(s,t)
r=s[t]
for(s=r.d,q=s.b.length+s.c.length+s.d.length-1;q>=0;--q){p=r.d.j(0,q)
for(o=q-1;o>=0;--o){n=r.d.j(0,o)
if(a.b6(0,p,n)){p.b5()
break}}}}},
cR:function(){var u,t,s
for(u=this.b.length-1;u>=0;--u){t=this.b
if(u>=t.length)return H.j(t,u)
s=t[u]
t=s.gjh(s)
if(t)s.b5()}},
ax:function(){var u,t,s,r
for(u=this.b,t=u.length,s=!0,r=0;r<u.length;u.length===t||(0,H.C)(u),++r)if(!u[r].ct())s=!1
return s},
cs:function(){var u,t,s,r
for(u=this.b,t=u.length,s=!0,r=0;r<u.length;u.length===t||(0,H.C)(u),++r)if(!u[r].cr())s=!1
return s},
i:function(a){return this.U()},
G:function(a){var u,t,s,r
u=H.c([],[P.h])
for(t=this.b,s=t.length,r=0;r<t.length;t.length===s||(0,H.C)(t),++r)C.a.h(u,t[r].G(a))
return C.a.m(u,"\n")},
U:function(){return this.G("")},
sfJ:function(a){this.b=H.l(a,"$ib",[F.a7],"$ab")}}
F.i_.prototype={
gl:function(a){return this.b.length},
cS:function(a){var u,t,s,r,q,p,o,n
for(u=this.a,t=u.a.c.length-1;t>=0;--t){s=u.a.c
if(t>=s.length)return H.j(s,t)
r=s[t]
for(s=r.c,q=s.b.length+s.c.length-1;q>=0;--q){p=r.c.j(0,q)
for(o=q-1;o>=0;--o){n=r.c.j(0,o)
if(a.b6(0,p,n)){p.b5()
break}}}}},
cR:function(){var u,t,s
for(u=this.b.length-1;u>=0;--u){t=this.b
if(u>=t.length)return H.j(t,u)
s=t[u]
t=J.a0(s.a,s.b)
if(t)s.b5()}},
i:function(a){return this.U()},
G:function(a){var u,t,s,r
u=H.c([],[P.h])
t=this.b.length
for(s=0;s<t;++s){r=this.b
if(s>=r.length)return H.j(r,s)
C.a.h(u,r[s].G(a+(""+s+". ")))}return C.a.m(u,"\n")},
U:function(){return this.G("")},
sfU:function(a){this.b=H.l(a,"$ib",[F.bD],"$ab")}}
F.i0.prototype={
gl:function(a){return 0},
kc:function(){var u,t
for(u=-1;!1;--u){t=this.b
return H.j(t,u)
t=t[u].gkF()
t=t.gkC(t)
if(t.gl(t).ky(0,1)){t=this.b
return H.j(t,u)
t[u].b5()}}},
i:function(a){return this.U()},
G:function(a){var u,t,s
u=H.c([],[P.h])
for(t=this.b,s=0;!1;++s){if(s>=0)return H.j(t,s)
C.a.h(u,t[s].G(a))}return C.a.m(u,"\n")},
U:function(){return this.G("")},
scf:function(a){this.b=H.l(a,"$ib",[F.bZ],"$ab")}}
F.aj.prototype={
dT:function(a){var u,t,s,r,q,p,o
u=this.f
t=this.r
s=this.x
r=this.y
q=this.z
p=this.Q
o=this.ch
return F.iQ(this.cx,s,p,u,t,r,q,a,o)},
jN:function(a){var u,t
if(a.A(0,$.aL())){u=this.f
t=[P.z]
if(u==null)return H.c([0,0,0],t)
else return H.c([u.a,u.b,u.c],t)}else if(a.A(0,$.bp())){u=this.r
t=[P.z]
if(u==null)return H.c([0,1,0],t)
else return H.c([u.a,u.b,u.c],t)}else if(a.A(0,$.bo())){u=this.x
t=[P.z]
if(u==null)return H.c([0,0,1],t)
else return H.c([u.a,u.b,u.c],t)}else if(a.A(0,$.bq())){u=this.y
t=[P.z]
if(u==null)return H.c([0,0],t)
else return H.c([u.a,u.b],t)}else if(a.A(0,$.br())){u=this.z
t=[P.z]
if(u==null)return H.c([0,0,0],t)
else return H.c([u.a,u.b,u.c],t)}else if(a.A(0,$.d9())){u=this.Q
t=[P.z]
if(u==null)return H.c([1,1,1],t)
else return H.c([u.a,u.b,u.c],t)}else if(a.A(0,$.da())){u=this.Q
t=[P.z]
if(u==null)return H.c([1,1,1,1],t)
else return H.c([u.a,u.b,u.c,u.d],t)}else if(a.A(0,$.cf()))return H.c([this.ch],[P.z])
else if(a.A(0,$.bn())){u=this.cx
t=[P.z]
if(u==null)return H.c([-1,-1,-1,-1],t)
else return H.c([u.a,u.b,u.c,u.d],t)}else return H.c([],[P.z])},
ct:function(){var u,t
u={}
if(this.r!=null)return!0
t=this.a
if(t!=null){t=t.e
if(t!=null)++t.d}u.a=V.cT()
this.d.P(0,new F.j0(u))
u=u.a
this.r=u.w(0,Math.sqrt(u.D(u)))
u=this.a
if(u!=null){u.aa()
u=this.a.e
if(u!=null)u.aF(0)}return!0},
cr:function(){var u,t
u={}
if(this.x!=null)return!0
t=this.a
if(t!=null){t=t.e
if(t!=null)++t.d}u.a=V.cT()
this.d.P(0,new F.j_(u))
u=u.a
this.x=u.w(0,Math.sqrt(u.D(u)))
u=this.a
if(u!=null){u.aa()
u=this.a.e
if(u!=null)u.aF(0)}return!0},
A:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.U()},
G:function(a){var u,t,s
u=H.c([],[P.h])
C.a.h(u,C.j.aC(J.aM(this.e),0))
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
C.a.h(u,V.V(this.ch,3,0))
t=this.cx
if(t!=null)C.a.h(u,t.i(0))
else C.a.h(u,"-")
s=C.a.m(u,", ")
return a+"{"+s+"}"},
U:function(){return this.G("")}}
F.j0.prototype={
$1:function(a){var u,t
H.k(a,"$ia7")
u=a==null?null:a.d
if(u!=null){t=this.a
t.a=t.a.p(0,u)}},
$S:5}
F.j_.prototype={
$1:function(a){var u,t
H.k(a,"$ia7")
u=a==null?null:a.e
if(u!=null){t=this.a
t.a=t.a.p(0,u)}},
$S:5}
F.iR.prototype={
E:function(){var u,t,s,r
if(this.b){u=this.c
t=u.length
for(s=0,r=0;r<t;++r){if(r>=u.length)return H.j(u,r)
u[r].e=s;++s}this.b=!1}},
h:function(a,b){var u,t
u=b.a
if(u!=null){if(u===this.a)return!1
throw H.f(P.r("May not add a vertex already attached to another shape to this shape."))}u=this.c
b.e=u.length
t=this.a
b.a=t
C.a.h(u,b)
t.aa()
return!0},
j4:function(a,b,c,d,e,f,g,h,i){var u=F.iQ(a,b,c,d,e,f,g,h,i)
this.h(0,u)
return u},
bn:function(a,b,c,d,e,f){return this.j4(a,null,b,c,null,d,e,f,0)},
gl:function(a){return this.c.length},
ax:function(){var u,t,s
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.C)(u),++s)u[s].ct()
return!0},
cs:function(){var u,t,s
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.C)(u),++s)u[s].cr()
return!0},
jd:function(){var u,t,s,r,q,p,o,n
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.C)(u),++s){r=u[s]
if(r.z==null){q=r.r
p=q.a
o=q.b
n=q.c
n=q.w(0,Math.sqrt(p*p+o*o+n*n))
if(!J.a0(r.z,n)){r.z=n
q=r.a
if(q!=null){q=q.e
if(q!=null)q.F(null)}}}}return!0},
i:function(a){return this.U()},
G:function(a){var u,t,s,r
this.E()
u=H.c([],[P.h])
for(t=this.c,s=t.length,r=0;r<t.length;t.length===s||(0,H.C)(t),++r)C.a.h(u,t[r].G(a))
return C.a.m(u,"\n")},
U:function(){return this.G("")},
siF:function(a){this.c=H.l(a,"$ib",[F.aj],"$ab")}}
F.iS.prototype={
gl:function(a){return this.b.length+this.c.length+this.d.length},
j:function(a,b){var u,t,s
u=this.b
t=u.length
if(b<t){if(b<0)return H.j(u,b)
return u[b]}b-=t
u=this.c
s=u.length
if(b<s){if(b<0)return H.j(u,b)
return u[b]}b-=s
u=this.d
if(b<0||b>=u.length)return H.j(u,b)
return u[b]},
P:function(a,b){H.n(b,{func:1,ret:-1,args:[F.a7]})
C.a.P(this.b,b)
C.a.P(this.c,new F.iT(this,b))
C.a.P(this.d,new F.iU(this,b))},
i:function(a){return this.U()},
G:function(a){var u,t,s,r
u=H.c([],[P.h])
for(t=this.b,s=t.length,r=0;r<t.length;t.length===s||(0,H.C)(t),++r)C.a.h(u,t[r].G(a))
for(t=this.c,s=t.length,r=0;r<t.length;t.length===s||(0,H.C)(t),++r)C.a.h(u,t[r].G(a))
for(t=this.d,s=t.length,r=0;r<t.length;t.length===s||(0,H.C)(t),++r)C.a.h(u,t[r].G(a))
return C.a.m(u,"\n")},
U:function(){return this.G("")},
sfK:function(a){this.b=H.l(a,"$ib",[F.a7],"$ab")},
sfL:function(a){this.c=H.l(a,"$ib",[F.a7],"$ab")},
sfM:function(a){this.d=H.l(a,"$ib",[F.a7],"$ab")}}
F.iT.prototype={
$1:function(a){H.k(a,"$ia7")
if(!J.a0(a.a,this.a))this.b.$1(a)},
$S:5}
F.iU.prototype={
$1:function(a){var u
H.k(a,"$ia7")
u=this.a
if(!J.a0(a.a,u)&&!J.a0(a.b,u))this.b.$1(a)},
$S:5}
F.iV.prototype={
gl:function(a){return this.b.length+this.c.length},
j:function(a,b){var u,t,s
u=this.b
t=u.length
if(b>=t){u=this.c
s=b-t
if(s<0||s>=u.length)return H.j(u,s)
return u[s]}else{if(b<0)return H.j(u,b)
return u[b]}},
i:function(a){return this.U()},
G:function(a){var u,t,s,r
u=H.c([],[P.h])
for(t=this.b,s=t.length,r=0;r<t.length;t.length===s||(0,H.C)(t),++r)C.a.h(u,t[r].G(a))
for(t=this.c,s=t.length,r=0;r<t.length;t.length===s||(0,H.C)(t),++r)C.a.h(u,t[r].G(a))
return C.a.m(u,"\n")},
U:function(){return this.G("")},
sfV:function(a){this.b=H.l(a,"$ib",[F.bD],"$ab")},
sfW:function(a){this.c=H.l(a,"$ib",[F.bD],"$ab")}}
F.iX.prototype={}
F.iW.prototype={
b6:function(a,b,c){return J.a0(b.f,c.f)}}
F.iY.prototype={}
F.hE.prototype={
jP:function(a){var u,t,s,r,q,p,o,n,m
H.l(a,"$ib",[F.aj],"$ab")
u=V.cT()
for(t=a.length,s=0;s<t;++s){r=a[s].r
if(r!=null)u=new V.Q(u.a+r.a,u.b+r.b,u.c+r.c)}u=u.w(0,Math.sqrt(u.D(u)))
for(t=a.length,r=u==null,s=0;s<a.length;a.length===t||(0,H.C)(a),++s){q=a[s]
if(r)p=null
else{o=u.a
n=u.b
m=u.c
p=u.w(0,Math.sqrt(o*o+n*n+m*m))}if(!J.a0(q.r,p)){q.r=p
o=q.a
if(o!=null){o=o.e
if(o!=null)o.F(null)}}}return}}
F.iZ.prototype={
gl:function(a){return 0},
i:function(a){return this.U()},
G:function(a){var u,t,s
u=H.c([],[P.h])
for(t=this.b,s=0;!1;++s){if(s>=0)return H.j(t,s)
C.a.h(u,t[s].G(a))}return C.a.m(u,"\n")},
U:function(){return this.G("")},
scf:function(a){this.b=H.l(a,"$ib",[F.bZ],"$ab")}}
O.dH.prototype={
gq:function(){var u=this.dy
if(u==null){u=D.J()
this.dy=u}return u},
a2:function(a){var u
H.k(a,"$iy")
u=this.dy
if(u!=null)u.F(a)},
bW:function(){return this.a2(null)},
dA:function(a){H.k(a,"$iy")
this.a=null
this.a2(a)},
i7:function(){return this.dA(null)},
h9:function(a,b){var u=V.ao
u=new D.bA(a,H.l(b,"$id",[u],"$ad"),this,[u])
u.b=!0
this.a2(u)},
hb:function(a,b){var u=V.ao
u=new D.bB(a,H.l(b,"$id",[u],"$ad"),this,[u])
u.b=!0
this.a2(u)},
dh:function(){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7
u=this.dx
t=C.d.a3(u.e.length+3,4)*4
s=C.d.a3(u.f.length+3,4)*4
r=C.d.a3(u.r.length+3,4)*4
q=C.d.a3(u.x.length+3,4)*4
p=C.d.a3(u.y.length+3,4)*4
o=C.d.a3(u.z.length+3,4)*4
n=C.d.a3(this.e.a.length+3,4)*4
u=this.f.c
m=this.r.c
l=this.x.c
k=this.y.c
j=this.z.c
i=this.Q.c
h=this.cx.c
g=this.cy.c
f=this.db.c
e="MaterialLight_"+C.d.i(u.a)+C.d.i(m.a)+C.d.i(l.a)+C.d.i(k.a)+C.d.i(j.a)+C.d.i(i.a)+C.d.i(h.a)+C.d.i(g.a)+C.d.i(f.a)
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
a7=$.aL()
if(a0){b=$.bp()
a7=new Z.b8(a7.a|b.a)}if(a1){b=$.bo()
a7=new Z.b8(a7.a|b.a)}if(a2){b=$.bq()
a7=new Z.b8(a7.a|b.a)}if(a3){b=$.br()
a7=new Z.b8(a7.a|b.a)}if(a5){b=$.bn()
a7=new Z.b8(a7.a|b.a)}return new A.hm(u,m,l,k,j,i,h,g,f,t,s,r,q,p,o,t+s+r+q+p+o,d,d,a4,a6,!0,!1,!1,c,a4,a,a0,a1,a2,a3,a5,!1,!1,!1,n,e.charCodeAt(0)==0?e:e,a7)},
W:function(a,b){H.l(a,"$ib",[T.cJ],"$ab")},
al:function(a,b){var u,t,s,r,q
for(u=this.dx.a,u=new J.am(u,u.length,0,[H.x(u,0)]);u.B();){t=u.d
t.toString
s=$.iP
if(s==null){s=new V.Q(0,0,1)
$.iP=s}t.a=s
r=t.b
if(r!=null){q=r.a
if(q!=null)t.a=q.cU(s)}}},
eu:function(a2,a3){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1
u=this.a
if(u==null){u=this.dh()
t=H.k(a2.fr.j(0,u.aj),"$idI")
if(t==null){t=A.mr(u,a2.a)
a2.dJ(t)}this.a=t
a3.e=null
u=t}s=u.z
r=s.bp
u=a3.e
if(!(u instanceof Z.cj)){a3.e=null
u=null}if(u==null||!u.d.A(0,r)){u=s.r1
if(u)a3.d.ax()
q=s.r2
if(q){p=a3.d
o=p.e
if(o!=null)++o.d
p.d.cs()
p.a.cs()
p=p.e
if(p!=null)p.aF(0)}p=s.ry
if(p){o=a3.d
n=o.e
if(n!=null)++n.d
o.a.jd()
o=o.e
if(o!=null)o.aF(0)}m=a3.d.dP(new Z.ek(a2.a),r)
m.az($.aL()).e=this.a.Q.c
if(u)m.az($.bp()).e=this.a.cx.c
if(q)m.az($.bo()).e=this.a.ch.c
if(s.rx)m.az($.bq()).e=this.a.cy.c
if(p)m.az($.br()).e=this.a.db.c
if(s.x1)m.az($.bn()).e=this.a.dx.c
a3.e=m}u=T.cJ
l=H.c([],[u])
this.a.a1(a2)
if(s.fx){q=this.a
p=a2.dx
p=p.ga0(p)
q=q.dy
q.toString
q.ah(p.ac(0,!0))}if(s.fy){q=this.a
p=a2.cx
if(p==null){p=a2.db
p=p.ga0(p)
o=a2.dx
o=p.v(0,o.ga0(o))
a2.cx=o
p=o}q=q.fr
q.toString
q.ah(p.ac(0,!0))}q=this.a
p=a2.ch
if(p==null){p=a2.gk9()
o=a2.dx
o=p.v(0,o.ga0(o))
a2.ch=o
p=o}q=q.fy
q.toString
q.ah(p.ac(0,!0))
if(s.x2){q=this.a
p=this.b
q=q.k1
q.toString
q.ah(C.r.ac(p,!0))}if(s.y1){q=this.a
p=this.c
q=q.k2
q.toString
q.ah(C.r.ac(p,!0))}if(s.y2){q=this.a
p=this.d
q=q.k3
q.toString
q.ah(C.r.ac(p,!0))}if(s.ar>0){k=this.e.a.length
q=this.a.k4
C.b.R(q.a,q.d,k)
for(q=[P.z],j=0;j<k;++j){p=this.a
o=this.e.a
if(j>=o.length)return H.j(o,j)
o=o[j]
p.toString
H.k(o,"$iao")
p=p.r1
if(j>=p.length)return H.j(p,j)
p=p[j]
i=new Float32Array(H.d5(H.l(o.ac(0,!0),"$ib",q,"$ab")))
C.b.eB(p.a,p.d,!1,i)}}switch(s.a){case C.c:break
case C.i:q=this.a
p=this.f.f
q=q.r2
q.toString
o=p.a
n=p.b
p=p.c
C.b.u(q.a,q.d,o,n,p)
break
case C.f:this.W(l,this.f.d)
q=this.a
p=this.f.d
q.ai(q.rx,q.x1,p)
p=this.a
q=this.f.f
p=p.r2
p.toString
o=q.a
n=q.b
q=q.c
C.b.u(p.a,p.d,o,n,q)
break
case C.h:this.W(l,this.f.e)
q=this.a
p=this.f.e
q.ae(q.ry,q.x1,p)
p=this.a
q=this.f.f
p=p.r2
p.toString
o=q.a
n=q.b
q=q.c
C.b.u(p.a,p.d,o,n,q)
break}if(s.k2){switch(s.b){case C.c:break
case C.i:q=this.a
p=this.r.f
q=q.x2
q.toString
o=p.a
n=p.b
p=p.c
C.b.u(q.a,q.d,o,n,p)
break
case C.f:this.W(l,this.r.d)
q=this.a
p=this.r.d
q.ai(q.y1,q.ar,p)
p=this.a
q=this.r.f
p=p.x2
p.toString
o=q.a
n=q.b
q=q.c
C.b.u(p.a,p.d,o,n,q)
break
case C.h:this.W(l,this.r.e)
q=this.a
p=this.r.e
q.ae(q.y2,q.ar,p)
p=this.a
q=this.r.f
p=p.x2
p.toString
o=q.a
n=q.b
q=q.c
C.b.u(p.a,p.d,o,n,q)
break}switch(s.c){case C.c:break
case C.i:q=this.a
p=this.x.f
q=q.aj
q.toString
o=p.a
n=p.b
p=p.c
C.b.u(q.a,q.d,o,n,p)
break
case C.f:this.W(l,this.x.d)
q=this.a
p=this.x.d
q.ai(q.bp,q.bq,p)
p=this.a
q=this.x.f
p=p.aj
p.toString
o=q.a
n=q.b
q=q.c
C.b.u(p.a,p.d,o,n,q)
break
case C.h:this.W(l,this.x.e)
q=this.a
p=this.x.e
q.ae(q.e_,q.bq,p)
p=this.a
q=this.x.f
p=p.aj
p.toString
o=q.a
n=q.b
q=q.c
C.b.u(p.a,p.d,o,n,q)
break}switch(s.d){case C.c:break
case C.i:q=this.a
p=this.y.f
q=q.br
q.toString
o=p.a
n=p.b
p=p.c
C.b.u(q.a,q.d,o,n,p)
break
case C.f:this.W(l,this.y.d)
q=this.a
p=this.y.d
q.ai(q.e0,q.bs,p)
p=this.a
q=this.y.f
p=p.br
p.toString
o=q.a
n=q.b
q=q.c
C.b.u(p.a,p.d,o,n,q)
break
case C.h:this.W(l,this.y.e)
q=this.a
p=this.y.e
q.ae(q.e1,q.bs,p)
p=this.a
q=this.y.f
p=p.br
p.toString
o=q.a
n=q.b
q=q.c
C.b.u(p.a,p.d,o,n,q)
break}switch(s.e){case C.c:break
case C.i:q=this.a
p=this.z.f
q=q.bt
q.toString
o=p.a
n=p.b
p=p.c
C.b.u(q.a,q.d,o,n,p)
p=this.a
n=this.z.ch
p=p.bv
C.b.K(p.a,p.d,n)
break
case C.f:this.W(l,this.z.d)
q=this.a
p=this.z.d
q.ai(q.e2,q.bu,p)
p=this.a
q=this.z.f
p=p.bt
p.toString
o=q.a
n=q.b
q=q.c
C.b.u(p.a,p.d,o,n,q)
q=this.a
n=this.z.ch
q=q.bv
C.b.K(q.a,q.d,n)
break
case C.h:this.W(l,this.z.e)
q=this.a
p=this.z.e
q.ae(q.e3,q.bu,p)
p=this.a
q=this.z.f
p=p.bt
p.toString
o=q.a
n=q.b
q=q.c
C.b.u(p.a,p.d,o,n,q)
q=this.a
n=this.z.ch
q=q.bv
C.b.K(q.a,q.d,n)
break}if(s.z>0){k=this.dx.e.length
q=this.a.ee
C.b.R(q.a,q.d,k)
q=a2.db
h=q.ga0(q)
for(q=this.dx.e,p=q.length,g=0,f=0;f<q.length;q.length===p||(0,H.C)(q),++f){e=q[f]
o=this.a.cA
if(g>=o.length)return H.j(o,g)
d=o[g]
o=h.cU(e.a)
n=o.a
c=o.b
b=o.c
b=o.w(0,Math.sqrt(n*n+c*c+b*b))
c=d.b
n=b.a
o=b.b
b=b.c
C.b.u(c.a,c.d,n,o,b)
b=e.c
o=d.c
C.b.u(o.a,o.d,b.a,b.b,b.c);++g}}if(s.Q>0){k=this.dx.f.length
q=this.a.ef
C.b.R(q.a,q.d,k)
q=a2.db
h=q.ga0(q)
for(q=this.dx.f,p=q.length,g=0,f=0;f<q.length;q.length===p||(0,H.C)(q),++f){e=q[f]
o=this.a.cB
if(g>=o.length)return H.j(o,g)
d=o[g]
o=e.gb9(e)
n=d.b
C.b.u(n.a,n.d,o.a,o.b,o.c)
o=h.bd(e.gb9(e))
n=d.c
C.b.u(n.a,n.d,o.a,o.b,o.c)
o=e.gaq(e)
n=d.d
C.b.u(n.a,n.d,o.a,o.b,o.c)
o=e.gcm()
n=d.e
C.b.K(n.a,n.d,o)
o=e.gcn()
n=d.f
C.b.K(n.a,n.d,o)
o=e.gco()
n=d.r
C.b.K(n.a,n.d,o);++g}}if(s.ch>0){k=this.dx.r.length
q=this.a.eg
C.b.R(q.a,q.d,k)
q=a2.db
h=q.ga0(q)
for(q=this.dx.r,p=q.length,g=0,f=0;f<q.length;q.length===p||(0,H.C)(q),++f){e=q[f]
o=this.a.cC
if(g>=o.length)return H.j(o,g)
d=o[g]
o=e.gb9(e)
n=d.b
C.b.u(n.a,n.d,o.a,o.b,o.c)
o=e.gcw(e).kB()
n=d.c
C.b.u(n.a,n.d,o.a,o.b,o.c)
o=h.bd(e.gb9(e))
n=d.d
C.b.u(n.a,n.d,o.a,o.b,o.c)
o=e.gaq(e)
n=d.e
C.b.u(n.a,n.d,o.a,o.b,o.c)
o=e.gkA()
n=d.f
C.b.K(n.a,n.d,o)
o=e.gkz()
n=d.r
C.b.K(n.a,n.d,o)
o=e.gcm()
n=d.x
C.b.K(n.a,n.d,o)
o=e.gcn()
n=d.y
C.b.K(n.a,n.d,o)
o=e.gco()
n=d.z
C.b.K(n.a,n.d,o);++g}}if(s.cx>0){k=this.dx.x.length
q=this.a.eh
C.b.R(q.a,q.d,k)
q=a2.db
h=q.ga0(q)
for(q=this.dx.x,p=q.length,o=[u],g=0,f=0;f<q.length;q.length===p||(0,H.C)(q),++f){e=q[f]
n=this.a.cD
if(g>=n.length)return H.j(n,g)
d=n[g]
n=e.gbc()
H.l(l,"$ib",o,"$ab")
if(!C.a.X(l,n)){n.sbE(0,l.length)
C.a.h(l,n)}n=e.gcw(e)
c=d.d
C.b.u(c.a,c.d,n.a,n.b,n.c)
n=e.gbN()
c=d.b
C.b.u(c.a,c.d,n.a,n.b,n.c)
n=e.gbK(e)
c=d.c
C.b.u(c.a,c.d,n.a,n.b,n.c)
n=h.cU(e.gcw(e))
c=n.a
b=n.b
a=n.c
a=n.w(0,Math.sqrt(c*c+b*b+a*a))
b=d.e
c=a.a
n=a.b
a=a.c
C.b.u(b.a,b.d,c,n,a)
a=e.gaq(e)
n=d.f
C.b.u(n.a,n.d,a.a,a.b,a.c)
a=e.gbc()
n=a.gbH(a)
if(!n){n=d.x
C.b.R(n.a,n.d,1)}else{n=d.r
c=a.gbH(a)
b=n.a
n=n.d
if(!c)C.b.R(b,n,0)
else C.b.R(b,n,a.gbE(a))
n=d.x
C.b.R(n.a,n.d,0)}++g}}if(s.cy>0){k=this.dx.y.length
q=this.a.ei
C.b.R(q.a,q.d,k)
q=a2.db
h=q.ga0(q)
for(q=this.dx.y,p=q.length,o=[P.z],n=[u],g=0,f=0;f<q.length;q.length===p||(0,H.C)(q),++f){e=q[f]
c=this.a.cE
if(g>=c.length)return H.j(c,g)
d=c[g]
c=e.gbc()
H.l(l,"$ib",n,"$ab")
if(!C.a.X(l,c)){c.sbE(0,l.length)
C.a.h(l,c)}a0=h.v(0,e.ga0(e))
c=e.ga0(e)
b=$.cB
if(b==null){b=new V.a3(0,0,0)
$.cB=b}b=c.bd(b)
c=d.b
C.b.u(c.a,c.d,b.a,b.b,b.c)
c=$.cB
if(c==null){c=new V.a3(0,0,0)
$.cB=c}c=a0.bd(c)
b=d.c
C.b.u(b.a,b.d,c.a,c.b,c.c)
c=a0.cI(0)
b=d.d
i=new Float32Array(H.d5(H.l(new V.dK(c.a,c.b,c.c,c.e,c.f,c.r,c.y,c.z,c.Q).ac(0,!0),"$ib",o,"$ab")))
C.b.eA(b.a,b.d,!1,i)
b=e.gaq(e)
c=d.e
C.b.u(c.a,c.d,b.a,b.b,b.c)
b=e.gbc()
c=b.gbH(b)
if(!c){c=d.r
C.b.R(c.a,c.d,1)}else{c=d.f
a=b.d
a1=c.a
c=c.d
if(a<6)C.b.R(a1,c,0)
else C.b.R(a1,c,b.a)
c=d.r
C.b.R(c.a,c.d,0)}c=e.gcm()
b=d.x
C.b.K(b.a,b.d,c)
c=e.gcn()
b=d.y
C.b.K(b.a,b.d,c)
c=e.gco()
b=d.z
C.b.K(b.a,b.d,c);++g}}if(s.db>0){k=this.dx.z.length
q=this.a.ej
C.b.R(q.a,q.d,k)
q=a2.db
h=q.ga0(q)
for(q=this.dx.z,p=q.length,u=[u],g=0,f=0;f<q.length;q.length===p||(0,H.C)(q),++f){e=q[f]
o=this.a.cF
if(g>=o.length)return H.j(o,g)
d=o[g]
o=e.gbc()
H.l(l,"$ib",u,"$ab")
if(!C.a.X(l,o)){o.sbE(0,l.length)
C.a.h(l,o)}o=e.gb9(e)
n=d.b
C.b.u(n.a,n.d,o.a,o.b,o.c)
o=e.gcw(e)
n=d.c
C.b.u(n.a,n.d,o.a,o.b,o.c)
o=e.gbN()
n=d.d
C.b.u(n.a,n.d,o.a,o.b,o.c)
o=e.gbK(e)
n=d.e
C.b.u(n.a,n.d,o.a,o.b,o.c)
o=h.bd(e.gb9(e))
n=d.f
C.b.u(n.a,n.d,o.a,o.b,o.c)
o=e.gbc()
n=o.gbH(o)
if(!n){o=d.x
C.b.R(o.a,o.d,1)}else{n=d.r
c=o.gbH(o)
b=n.a
n=n.d
if(!c)C.b.R(b,n,0)
else C.b.R(b,n,o.gbE(o))
o=d.x
C.b.R(o.a,o.d,0)}o=e.gaq(e)
n=d.y
C.b.u(n.a,n.d,o.a,o.b,o.c)
o=e.gkD()
n=d.z
C.b.K(n.a,n.d,o)
o=e.gkE()
n=d.Q
C.b.K(n.a,n.d,o)
o=e.gcm()
n=d.ch
C.b.K(n.a,n.d,o)
o=e.gcn()
n=d.cx
C.b.K(n.a,n.d,o)
o=e.gco()
n=d.cy
C.b.K(n.a,n.d,o);++g}}}switch(s.f){case C.c:break
case C.i:break
case C.f:this.W(l,this.Q.d)
u=this.a
q=this.Q.d
u.ai(u.e4,u.bw,q)
break
case C.h:this.W(l,this.Q.e)
u=this.a
q=this.Q.e
u.ae(u.e5,u.bw,q)
break}if(s.fr){u=this.a
q=a2.Q
if(q==null){q=a2.db
q=q.ga0(q).cI(0)
a2.Q=q}u=u.id
u.toString
u.ah(q.ac(0,!0))}if(s.dy){this.W(l,this.ch)
u=this.a
q=this.ch
u.ae(u.e6,u.e7,q)
switch(s.r){case C.c:break
case C.i:u=this.a
q=this.cx.f
u=u.bx
u.toString
p=q.a
o=q.b
q=q.c
C.b.u(u.a,u.d,p,o,q)
break
case C.f:this.W(l,this.cx.d)
u=this.a
q=this.cx.d
u.ai(u.e8,u.by,q)
q=this.a
u=this.cx.f
q=q.bx
q.toString
p=u.a
o=u.b
u=u.c
C.b.u(q.a,q.d,p,o,u)
break
case C.h:this.W(l,this.cx.e)
u=this.a
q=this.cx.e
u.ae(u.e9,u.by,q)
q=this.a
u=this.cx.f
q=q.bx
q.toString
p=u.a
o=u.b
u=u.c
C.b.u(q.a,q.d,p,o,u)
break}switch(s.x){case C.c:break
case C.i:u=this.a
q=this.cy.f
u=u.bA
u.toString
p=q.a
o=q.b
q=q.c
C.b.u(u.a,u.d,p,o,q)
q=this.a
o=this.cy.ch
q=q.bz
C.b.K(q.a,q.d,o)
break
case C.f:this.W(l,this.cy.d)
u=this.a
q=this.cy.d
u.ai(u.ea,u.bB,q)
q=this.a
u=this.cy.f
q=q.bA
q.toString
p=u.a
o=u.b
u=u.c
C.b.u(q.a,q.d,p,o,u)
u=this.a
o=this.cy.ch
u=u.bz
C.b.K(u.a,u.d,o)
break
case C.h:this.W(l,this.cy.e)
u=this.a
q=this.cy.e
u.ae(u.eb,u.bB,q)
q=this.a
u=this.cy.f
q=q.bA
q.toString
p=u.a
o=u.b
u=u.c
C.b.u(q.a,q.d,p,o,u)
u=this.a
o=this.cy.ch
u=u.bz
C.b.K(u.a,u.d,o)
break}}u=s.y
q=u!==C.c
if(q){switch(u){case C.c:break
case C.i:u=this.a
p=this.db.f
u=u.bC
C.b.K(u.a,u.d,p)
break
case C.f:this.W(l,this.db.d)
u=this.a
p=this.db.d
u.ai(u.ec,u.bD,p)
p=this.a
u=this.db.f
p=p.bC
C.b.K(p.a,p.d,u)
break
case C.h:this.W(l,this.db.e)
u=this.a
p=this.db.e
u.ae(u.ed,u.bD,p)
p=this.a
u=this.db.f
p=p.bC
C.b.K(p.a,p.d,u)
break}u=a2.a
C.b.cz(u,3042)
C.b.jc(u,770,771)}for(j=0;j<l.length;++j)l[j].a1(a2)
u=a3.e
u.a1(a2)
u.ab(a2)
u.aU(a2)
if(q)C.b.jv(a2.a,3042)
for(j=0;j<l.length;++j)l[j].aU(a2)
u=this.a
u.toString
C.b.cV(a2.a,null)
u.x.dV()},
i:function(a){var u=this.a
if(u!=null)return u.b
else return this.dh().aj},
sfu:function(a){this.e=H.l(a,"$ia1",[V.ao],"$aa1")}}
O.hk.prototype={}
O.dJ.prototype={
aN:function(){}}
O.hl.prototype={}
O.aW.prototype={
dC:function(a){var u,t
if(!J.a0(this.f,a)){u=this.f
this.f=a
t=new D.M(this.b+".color",u,a,this,[V.a2])
t.b=!0
this.a.a2(t)}},
aN:function(){this.f0()
this.dC(new V.a2(1,1,1))},
saq:function(a,b){var u
if(this.c===C.c){this.c=C.i
this.aN()
u=this.a
u.a=null
u.a2(null)}this.dC(b)}}
O.hn.prototype={
ic:function(a){var u=this.ch
if(!(Math.abs(u-a)<$.R().a)){this.ch=a
u=new D.M(this.b+".refraction",u,a,this,[P.z])
u.b=!0
this.a.a2(u)}},
aN:function(){this.bU()
this.ic(1)}}
O.ho.prototype={
cj:function(a){var u=this.ch
if(!(Math.abs(u-a)<$.R().a)){this.ch=a
u=new D.M(this.b+".shininess",u,a,this,[P.z])
u.b=!0
this.a.a2(u)}},
aN:function(){this.bU()
this.cj(100)}}
O.dY.prototype={
gq:function(){var u=this.e
if(u==null){u=D.J()
this.e=u}return u},
a2:function(a){var u
H.k(a,"$iy")
u=this.e
if(u!=null)u.F(a)},
bW:function(){return this.a2(null)},
eu:function(a,b){var u,t,s,r,q,p
if(this.a==null){u=H.k(a.fr.j(0,"Skybox"),"$idZ")
if(u==null){t=a.a
u=new A.dZ(t,"Skybox")
u.d2(t,"Skybox")
u.el(0,$.mH,$.mG)
u.z=u.x.j(0,"posAttr")
u.Q=H.i(u.y.j(0,"fov"),"$iY")
u.ch=H.i(u.y.j(0,"ratio"),"$iY")
u.cx=H.i(u.y.j(0,"boxClr"),"$iI")
u.cy=H.i(u.y.j(0,"boxTxt"),"$iae")
u.db=H.i(u.y.j(0,"viewMat"),"$iar")
a.dJ(u)}this.a=u}if(b.e==null){t=b.d.dP(new Z.ek(a.a),$.aL())
t.az($.aL()).e=this.a.z.c
b.e=t}t=this.c
if(t!=null){t.a=1
if(!t.c&&t.d>=6){t.c=!0
s=a.a
C.b.dG(s,33985)
C.b.aR(s,34067,t.b)}}t=a.d
s=a.c
r=this.a
r.a1(a)
q=this.b
p=r.Q
C.b.K(p.a,p.d,q)
q=r.ch
C.b.K(q.a,q.d,t/s)
s=this.c
r.cy.eT(s)
s=this.d
t=r.cx
C.b.u(t.a,t.d,s.a,s.b,s.c)
s=a.db
s=s.ga0(s).cI(0)
r=r.db
r.toString
r.ah(s.ac(0,!0))
t=b.e
if(t instanceof Z.cj){t.a1(a)
t.ab(a)
t.aU(a)}else b.e=null
t=this.a
t.toString
s=a.a
C.b.cV(s,null)
t.x.dV()
t=this.c
if(t!=null)if(t.c){t.c=!1
C.b.dG(s,33984+t.a)
C.b.aR(s,34067,null)}}}
O.bE.prototype={}
T.cJ.prototype={}
T.e4.prototype={
gq:function(){var u=this.e
if(u==null){u=D.J()
this.e=u}return u}}
T.im.prototype={
aL:function(a,b,c,d,e,f){var u,t
u=document.createElement("img")
u.src=c;++this.d
t=W.o
W.a8(u,"load",H.n(new T.io(this,u,!1,b,!1,d,a),{func:1,ret:-1,args:[t]}),!1,t)},
i8:function(a,b,c){var u,t,s,r
b=V.ky(b,2)
u=V.ky(a.width,2)
t=V.ky(a.height,2)
u=Math.min(u,b)
t=Math.min(t,b)
if(a.width===u&&a.height===t)return a
else{s=W.k6(null,null)
s.width=u
s.height=t
r=H.k(C.p.eH(s,"2d"),"$ibR")
r.imageSmoothingEnabled=!1;(r&&C.y).jx(r,a,0,0,s.width,s.height)
return P.n9(C.y.fQ(r,0,0,s.width,s.height))}}}
T.io.prototype={
$1:function(a){var u,t,s
u=this.a
t=u.i8(this.b,u.c,this.c)
s=u.a
C.b.aR(s,34067,this.d)
C.b.k8(s,37440,this.e?1:0)
C.b.kk(s,this.f,0,6408,6408,5121,t)
C.b.aR(s,34067,null)
s=this.r
if(++s.d>=6){s=s.e
if(s!=null)s.jA()}++u.e},
$S:25}
V.bc.prototype={
aB:function(a,b){return!0},
i:function(a){return"all"},
$iav:1}
V.av.prototype={}
V.dG.prototype={
aB:function(a,b){var u,t,s
for(u=this.a,t=u.length,s=0;s<u.length;u.length===t||(0,H.C)(u),++s)if(u[s].aB(0,b))return!0
return!1},
i:function(a){var u,t,s,r,q
for(u=this.a,t=u.length,s="",r=0;r<u.length;u.length===t||(0,H.C)(u),++r){q=u[r]
if(s.length!==0)s+=", "
s+=q.i(0)}return s},
sa4:function(a){this.a=H.l(a,"$ib",[V.av],"$ab")},
$iav:1}
V.ap.prototype={
aB:function(a,b){return!this.f_(0,b)},
i:function(a){return"!["+this.d1(0)+"]"}}
V.hO.prototype={
aB:function(a,b){return this.a<=b&&this.b>=b},
i:function(a){var u,t
u=H.kf(this.a)
t=H.kf(this.b)
return u+".."+t},
$iav:1}
V.hY.prototype={
f5:function(a){var u,t
if(a.a.length<=0)throw H.f(P.r("May not create a SetMatcher with zero characters."))
u=new H.aU([P.B,P.O])
for(t=new H.cu(a,a.gl(a),0,[H.al(a,"v",0)]);t.B();)u.Y(0,t.d,!0)
this.sib(u)},
aB:function(a,b){return this.a.dS(0,b)},
i:function(a){var u=this.a
return P.kh(new H.dC(u,[H.x(u,0)]),0,null)},
sib:function(a){this.a=H.l(a,"$iP",[P.B,P.O],"$aP")},
$iav:1}
V.cF.prototype={
m:function(a,b){var u,t,s,r
for(u=this.c,t=u.length,s=0;s<t;++s){r=u[s]
if(r.b.b===b)return r}r=new V.cL(this.a.k(0,b))
r.sa4(H.c([],[V.av]))
r.c=!1
C.a.h(this.c,r)
return r},
jC:function(a){var u,t,s,r
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.C)(u),++s){r=u[s]
if(r.aB(0,a))return r}return},
i:function(a){return this.b},
siA:function(a){this.c=H.l(a,"$ib",[V.cL],"$ab")}}
V.e9.prototype={
i:function(a){var u,t
u=H.kz(this.b,"\n","\\n")
t=H.kz(u,"\t","\\t")
return this.a+":"+this.c+':"'+t+'"'}}
V.cK.prototype={
aE:function(a,b,c){var u,t,s
H.l(c,"$ib",[P.h],"$ab")
for(u=c.length,t=0;t<c.length;c.length===u||(0,H.C)(c),++t){s=c[t]
this.c.Y(0,s,b)}},
i:function(a){return this.b},
si4:function(a){var u=P.h
this.c=H.l(a,"$iP",[u,u],"$aP")}}
V.ir.prototype={
k:function(a,b){var u=this.a.j(0,b)
if(u==null){u=new V.cF(this,b)
u.siA(H.c([],[V.cL]))
u.d=null
this.a.Y(0,b,u)}return u},
M:function(a){var u,t
u=this.b.j(0,a)
if(u==null){u=new V.cK(this,a)
t=P.h
u.si4(new H.aU([t,t]))
this.b.Y(0,a,u)}return u},
ez:function(a){var u,t,s,r,q,p,o,n,m,l,k,j
u=H.c([],[V.e9])
t=this.c
s=[P.B]
r=H.c([],s)
for(q=a.length,p=null,o=0;!0;){if(o>=q){if(p!=null)C.a.h(u,p)
return u}n=C.j.aJ(a,o)
m=t.jC(n)
if(m==null){if(p==null){C.a.h(r,n)
l=P.kh(r,0,null)
throw H.f(P.r("Untokenizable string [state: "+t.b+", index "+o+']: "'+l+'"'))}C.a.h(u,p)
o=p.c+1
r=H.c([],s)
t=this.c
p=null}else{if(!m.c)C.a.h(r,n)
t=m.b
if(t.d!=null){l=P.kh(r,0,null)
k=t.d
j=k.c.j(0,l)
p=new V.e9(j==null?k.b:j,l,o)}++o}}},
sip:function(a){this.a=H.l(a,"$iP",[P.h,V.cF],"$aP")},
sit:function(a){this.b=H.l(a,"$iP",[P.h,V.cK],"$aP")}}
V.cL.prototype={
i:function(a){return this.b.b+": "+this.d1(0)}}
X.bP.prototype={$iaZ:1}
X.fW.prototype={
gq:function(){var u=this.x
if(u==null){u=D.J()
this.x=u}return u},
am:function(a){var u=this.x
if(u!=null)u.F(a)},
a1:function(a){var u,t,s,r,q,p,o,n
u=a.a
C.b.jb(u,36160,null)
C.b.cz(u,2884)
C.b.cz(u,2929)
C.b.ju(u,513)
t=u.drawingBufferWidth
s=u.drawingBufferHeight
r=this.r
q=r.a
if(typeof t!=="number")return H.G(t)
p=C.e.ak(q*t)
q=r.b
if(typeof s!=="number")return H.G(s)
o=C.e.ak(q*s)
q=C.e.ak(r.c*t)
a.c=q
r=C.e.ak(r.d*s)
a.d=r
C.b.ks(u,p,o,q,r)
C.b.jg(u,this.c)
if(this.b){r=this.a
C.b.jf(u,r.a,r.b,r.c,r.d)
n=16640}else n=256
C.b.je(u,n)}}
X.h1.prototype={
gq:function(){var u=this.b
if(u==null){u=D.J()
this.b=u}return u},
a1:function(a){var u
a.cy.bJ(V.bY())
u=V.bY()
a.db.bJ(u)},
aU:function(a){a.cy.aD()
a.db.aD()},
$iaZ:1,
$ibP:1}
X.dQ.prototype={
gq:function(){var u=this.f
if(u==null){u=D.J()
this.f=u}return u},
am:function(a){var u
H.k(a,"$iy")
u=this.f
if(u!=null)u.F(a)},
fn:function(){return this.am(null)},
a1:function(a){var u,t,s,r,q,p,o,n,m,l
u=a.c
t=a.d
s=this.c
r=this.d
q=this.e
p=q-r
o=1/Math.tan(s*0.5)
n=V.aX(-o/(u/t),0,0,0,0,o,0,0,0,0,q/p,-q*r/p,0,0,1,0)
a.cy.bJ(n)
u=$.l_
if(u==null){u=V.l1()
t=V.lk()
s=$.lg
if(s==null){s=new V.Q(0,0,-1)
$.lg=s}s=V.kV(u,t,s)
$.l_=s
m=s}else m=u
u=this.b
if(u!=null){l=u.aV(0,a,this)
if(l!=null)m=l.v(0,m)}a.db.bJ(m)},
aU:function(a){a.cy.aD()
a.db.aD()},
$iaZ:1,
$ibP:1}
X.cH.prototype={}
V.bu.prototype={
bh:function(a){this.b=new P.h_(C.M)
this.c=null
this.sc4(H.c([],[[P.b,W.aA]]))},
L:function(a,b){var u,t,s,r,q,p,o,n,m
u=this.d
if(u.length===0)C.a.h(u,H.c([],[W.aA]))
t=a.split("\n")
for(u=t.length,s=[W.aA],r=!0,q=0;q<u;++q){p=t[q]
if(r)r=!1
else C.a.h(this.d,H.c([],s))
o=document.createElement("div")
o.className="codePart"
H.H(p)
n=this.b.fB(p,0,p.length)
m=n==null?p:n
C.k.eQ(o,H.kz(m," ","&nbsp;"))
m=o.style
m.color=b
C.a.h(C.a.gbF(this.d),o)}},
es:function(a,b){var u,t,s,r
H.l(b,"$ib",[P.h],"$ab")
this.sc4(H.c([],[[P.b,W.aA]]))
u=C.a.m(b,"\n")
t=this.c
if(t==null){t=this.bo()
this.c=t}for(t=t.ez(u),s=t.length,r=0;r<t.length;t.length===s||(0,H.C)(t),++r)this.bI(t[r])},
sc4:function(a){this.d=H.l(a,"$ib",[[P.b,W.aA]],"$ab")}}
V.k_.prototype={
$1:function(a){H.k(a,"$ib5")
P.at(C.e.ey(this.a.gjH(),2)+" fps")},
$S:41}
V.fA.prototype={
bI:function(a){switch(a.a){case"Class":this.L(a.b,"#551")
break
case"Comment":this.L(a.b,"#777")
break
case"Id":this.L(a.b,"#111")
break
case"Num":this.L(a.b,"#191")
break
case"Reserved":this.L(a.b,"#119")
break
case"String":this.L(a.b,"#171")
break
case"Symbol":this.L(a.b,"#616")
break
case"Type":this.L(a.b,"#B11")
break
case"Whitespace":this.L(a.b,"#111")
break}},
bo:function(){var u,t,s,r
u=V.is()
u.c=u.k(0,"Start")
t=u.k(0,"Start").m(0,"Id")
s=V.t(new H.q("_"))
C.a.h(t.a,s)
s=V.X("a","z")
C.a.h(t.a,s)
s=V.X("A","Z")
C.a.h(t.a,s)
s=u.k(0,"Id").m(0,"Id")
t=V.t(new H.q("_"))
C.a.h(s.a,t)
t=V.X("0","9")
C.a.h(s.a,t)
t=V.X("a","z")
C.a.h(s.a,t)
t=V.X("A","Z")
C.a.h(s.a,t)
t=u.k(0,"Start").m(0,"Int")
s=V.X("0","9")
C.a.h(t.a,s)
s=u.k(0,"Int").m(0,"Int")
t=V.X("0","9")
C.a.h(s.a,t)
t=u.k(0,"Int").m(0,"FloatDot")
s=V.t(new H.q("."))
C.a.h(t.a,s)
s=u.k(0,"FloatDot").m(0,"Float")
t=V.X("0","9")
C.a.h(s.a,t)
t=u.k(0,"Float").m(0,"Float")
s=V.X("0","9")
C.a.h(t.a,s)
s=u.k(0,"Start").m(0,"Sym")
t=V.t(new H.q("<>{}()\\-+*%!&|=.,?:;"))
C.a.h(s.a,t)
t=u.k(0,"Sym").m(0,"Sym")
s=V.t(new H.q("<>{}()\\-+*%!&|=.,?:;"))
C.a.h(t.a,s)
s=u.k(0,"Start").m(0,"OpenDoubleStr")
t=V.t(new H.q('"'))
C.a.h(s.a,t)
t=u.k(0,"OpenDoubleStr").m(0,"CloseDoubleStr")
s=V.t(new H.q('"'))
C.a.h(t.a,s)
s=u.k(0,"OpenDoubleStr").m(0,"EscDoubleStr")
t=V.t(new H.q("\\"))
C.a.h(s.a,t)
t=u.k(0,"EscDoubleStr").m(0,"OpenDoubleStr")
s=V.t(new H.q('"'))
C.a.h(t.a,s)
C.a.h(u.k(0,"OpenDoubleStr").m(0,"OpenDoubleStr").a,new V.bc())
s=u.k(0,"Start").m(0,"OpenSingleStr")
t=V.t(new H.q("'"))
C.a.h(s.a,t)
t=u.k(0,"OpenSingleStr").m(0,"CloseSingleStr")
s=V.t(new H.q("'"))
C.a.h(t.a,s)
s=u.k(0,"OpenSingleStr").m(0,"EscSingleStr")
t=V.t(new H.q("\\"))
C.a.h(s.a,t)
t=u.k(0,"EscSingleStr").m(0,"OpenSingleStr")
s=V.t(new H.q("'"))
C.a.h(t.a,s)
C.a.h(u.k(0,"OpenSingleStr").m(0,"OpenSingleStr").a,new V.bc())
s=u.k(0,"Start").m(0,"Slash")
t=V.t(new H.q("/"))
C.a.h(s.a,t)
t=u.k(0,"Slash").m(0,"Comment")
s=V.t(new H.q("/"))
C.a.h(t.a,s)
s=u.k(0,"Comment").m(0,"EndComment")
t=V.t(new H.q("\n"))
C.a.h(s.a,t)
t=u.k(0,"Comment").m(0,"Comment")
s=new V.ap()
r=[V.av]
s.sa4(H.c([],r))
C.a.h(t.a,s)
t=V.t(new H.q("\n"))
C.a.h(s.a,t)
t=u.k(0,"Slash").m(0,"MLComment")
s=V.t(new H.q("*"))
C.a.h(t.a,s)
s=u.k(0,"MLComment").m(0,"MLCStar")
t=V.t(new H.q("*"))
C.a.h(s.a,t)
t=u.k(0,"MLCStar").m(0,"MLComment")
s=new V.ap()
s.sa4(H.c([],r))
C.a.h(t.a,s)
t=V.t(new H.q("*"))
C.a.h(s.a,t)
t=u.k(0,"MLCStar").m(0,"EndComment")
s=V.t(new H.q("/"))
C.a.h(t.a,s)
s=u.k(0,"Start").m(0,"Whitespace")
t=V.t(new H.q(" \n\t"))
C.a.h(s.a,t)
t=u.k(0,"Whitespace").m(0,"Whitespace")
s=V.t(new H.q(" \n\t"))
C.a.h(t.a,s)
s=u.k(0,"Int")
s.d=s.a.M("Num")
s=u.k(0,"Float")
s.d=s.a.M("Num")
s=u.k(0,"Sym")
s.d=s.a.M("Symbol")
s=u.k(0,"CloseDoubleStr")
s.d=s.a.M("String")
s=u.k(0,"CloseSingleStr")
s.d=s.a.M("String")
s=u.k(0,"EndComment")
s.d=s.a.M("Comment")
s=u.k(0,"Whitespace")
s.d=s.a.M("Whitespace")
s=u.k(0,"Id")
t=s.a.M("Id")
s.d=t
s=[P.h]
t.aE(0,"Class",H.c(["Constant","Depth","Entity","EntityPass","Math","Matrix4","Movers","Rotater","Scenes","Shapes","Techniques","ThreeDart"],s))
t.aE(0,"Type",H.c(["bool","double","dynamic","false","int","List","Map","null","num","Object","String","this","true","var","void"],s))
t.aE(0,"Reserved",H.c(["abstract","as","assert","async","await","break","case","catch","class","continue","const","default","deferred","do","else","enum","export","extends","external","factory","final","finally","for","get","if","implements","import","in","is","library","new","operator","part","rethrow","return","set","static","super","switch","sync","throw","try","typedef","with","while","yield"],s))
return u}}
V.fX.prototype={
bI:function(a){switch(a.a){case"Builtin":this.L(a.b,"#411")
break
case"Comment":this.L(a.b,"#777")
break
case"Id":this.L(a.b,"#111")
break
case"Num":this.L(a.b,"#191")
break
case"Preprocess":this.L(a.b,"#737")
break
case"Reserved":this.L(a.b,"#119")
break
case"Symbol":this.L(a.b,"#611")
break
case"Type":this.L(a.b,"#171")
break
case"Whitespace":this.L(a.b,"#111")
break}},
bo:function(){var u,t,s,r
u=V.is()
u.c=u.k(0,"Start")
t=u.k(0,"Start").m(0,"Id")
s=V.t(new H.q("_"))
C.a.h(t.a,s)
s=V.X("a","z")
C.a.h(t.a,s)
s=V.X("A","Z")
C.a.h(t.a,s)
s=u.k(0,"Id").m(0,"Id")
t=V.t(new H.q("_"))
C.a.h(s.a,t)
t=V.X("0","9")
C.a.h(s.a,t)
t=V.X("a","z")
C.a.h(s.a,t)
t=V.X("A","Z")
C.a.h(s.a,t)
t=u.k(0,"Start").m(0,"Int")
s=V.X("0","9")
C.a.h(t.a,s)
s=u.k(0,"Int").m(0,"Int")
t=V.X("0","9")
C.a.h(s.a,t)
t=u.k(0,"Int").m(0,"FloatDot")
s=V.t(new H.q("."))
C.a.h(t.a,s)
s=u.k(0,"FloatDot").m(0,"Float")
t=V.X("0","9")
C.a.h(s.a,t)
t=u.k(0,"Float").m(0,"Float")
s=V.X("0","9")
C.a.h(t.a,s)
s=u.k(0,"Start").m(0,"Sym")
t=V.t(new H.q("<>{}()[]\\-+*%!&|=.,?:;"))
C.a.h(s.a,t)
t=u.k(0,"Sym").m(0,"Sym")
s=V.t(new H.q("<>{}()[]\\-+*%!&|=.,?:;"))
C.a.h(t.a,s)
s=u.k(0,"Start").m(0,"Slash")
t=V.t(new H.q("/"))
C.a.h(s.a,t)
t=u.k(0,"Slash").m(0,"Comment")
s=V.t(new H.q("/"))
C.a.h(t.a,s)
C.a.h(u.k(0,"Slash").m(0,"Sym").a,new V.bc())
s=u.k(0,"Comment").m(0,"EndComment")
t=V.t(new H.q("\n"))
C.a.h(s.a,t)
t=u.k(0,"Comment").m(0,"Comment")
s=new V.ap()
r=[V.av]
s.sa4(H.c([],r))
C.a.h(t.a,s)
t=V.t(new H.q("\n"))
C.a.h(s.a,t)
t=u.k(0,"Start").m(0,"Preprocess")
s=V.t(new H.q("#"))
C.a.h(t.a,s)
s=u.k(0,"Preprocess").m(0,"Preprocess")
t=new V.ap()
t.sa4(H.c([],r))
C.a.h(s.a,t)
s=V.t(new H.q("\n"))
C.a.h(t.a,s)
s=u.k(0,"Preprocess").m(0,"EndPreprocess")
t=V.t(new H.q("\n"))
C.a.h(s.a,t)
t=u.k(0,"Start").m(0,"Whitespace")
s=V.t(new H.q(" \n\t"))
C.a.h(t.a,s)
s=u.k(0,"Whitespace").m(0,"Whitespace")
t=V.t(new H.q(" \n\t"))
C.a.h(s.a,t)
t=u.k(0,"Int")
t.d=t.a.M("Num")
t=u.k(0,"Float")
t.d=t.a.M("Num")
t=u.k(0,"Sym")
t.d=t.a.M("Symbol")
t=u.k(0,"EndComment")
t.d=t.a.M("Comment")
t=u.k(0,"EndPreprocess")
t.d=t.a.M("Preprocess")
t=u.k(0,"Whitespace")
t.d=t.a.M("Whitespace")
t=u.k(0,"Id")
s=t.a.M("Id")
t.d=s
t=[P.h]
s.aE(0,"Type",H.c(["float","double","int","void","bool","true","false","mat2","mat3","mat4","dmat2","dmat3","dmat4","mat2x2","mat2x3","mat2x4","dmat2x2","dmat2x3","dmat2x4","mat3x2","mat3x3","mat3x4","dmat3x2","dmat3x3","dmat3x4","mat4x2","mat4x3","mat4x4","dmat4x2","dmat4x3","dmat4x4","vec2","vec3","vec4","ivec2","ivec3","ivec4","bvec2","bvec3","bvec4","dvec2","dvec3","dvec4","uint","uvec2","uvec3","uvec4","sampler1D","sampler2D","sampler3D","samplerCube","sampler1DShadow","sampler2DShadow","samplerCubeShadow","sampler1DArray","sampler2DArray","sampler1DArrayShadow","sampler2DArrayShadow","isampler1D","isampler2D","isampler3D","isamplerCube","isampler1DArray","isampler2DArray","usampler1D","usampler2D","usampler3D","usamplerCube","usampler1DArray","usampler2DArray","sampler2DRect","sampler2DRectShadow","isampler2DRect","usampler2DRect","samplerBuffer","isamplerBuffer","usamplerBuffer","sampler2DMS","isampler2DMS","usampler2DMS","sampler2DMSArray","isampler2DMSArray","usampler2DMSArray","samplerCubeArray","samplerCubeArrayShadow","isamplerCubeArray","usamplerCubeArray"],t))
s.aE(0,"Reserved",H.c(["attribute","break","case","centroid","const","continue","default","discard","do","else","flat","for","highp","if","in","inout","invariant","layout","lowp","mediump","noperspective","out","patch","precision","return","sample","smooth","struct","subroutine","switch","uniform","varying","while"],t))
s.aE(0,"Builtin",H.c(["gl_FragColor","gl_Position"],t))
return u}}
V.fY.prototype={
bI:function(a){switch(a.a){case"Attr":this.L(a.b,"#911")
this.L("=","#111")
break
case"Id":this.L(a.b,"#111")
break
case"Other":this.L(a.b,"#111")
break
case"Reserved":this.L(a.b,"#119")
break
case"String":this.L(a.b,"#171")
break
case"Symbol":this.L(a.b,"#616")
break}},
bo:function(){var u,t,s
u=V.is()
u.c=u.k(0,"Start")
t=u.k(0,"Start").m(0,"Id")
s=V.t(new H.q("_"))
C.a.h(t.a,s)
s=V.X("a","z")
C.a.h(t.a,s)
s=V.X("A","Z")
C.a.h(t.a,s)
s=u.k(0,"Id").m(0,"Id")
t=V.t(new H.q("_"))
C.a.h(s.a,t)
t=V.X("0","9")
C.a.h(s.a,t)
t=V.X("a","z")
C.a.h(s.a,t)
t=V.X("A","Z")
C.a.h(s.a,t)
t=u.k(0,"Id").m(0,"Attr")
s=V.t(new H.q("="))
C.a.h(t.a,s)
t.c=!0
t=u.k(0,"Start").m(0,"Sym")
s=V.t(new H.q("</\\-!>="))
C.a.h(t.a,s)
s=u.k(0,"Sym").m(0,"Sym")
t=V.t(new H.q("</\\-!>="))
C.a.h(s.a,t)
t=u.k(0,"Start").m(0,"OpenStr")
s=V.t(new H.q('"'))
C.a.h(t.a,s)
s=u.k(0,"OpenStr").m(0,"CloseStr")
t=V.t(new H.q('"'))
C.a.h(s.a,t)
t=u.k(0,"OpenStr").m(0,"EscStr")
s=V.t(new H.q("\\"))
C.a.h(t.a,s)
s=u.k(0,"EscStr").m(0,"OpenStr")
t=V.t(new H.q('"'))
C.a.h(s.a,t)
C.a.h(u.k(0,"OpenStr").m(0,"OpenStr").a,new V.bc())
C.a.h(u.k(0,"Start").m(0,"Other").a,new V.bc())
t=u.k(0,"Other").m(0,"Other")
s=new V.ap()
s.sa4(H.c([],[V.av]))
C.a.h(t.a,s)
t=V.t(new H.q('</\\-!>=_"'))
C.a.h(s.a,t)
t=V.X("a","z")
C.a.h(s.a,t)
t=V.X("A","Z")
C.a.h(s.a,t)
t=u.k(0,"Sym")
t.d=t.a.M("Symbol")
t=u.k(0,"CloseStr")
t.d=t.a.M("String")
t=u.k(0,"Id")
s=t.a.M("Id")
t.d=s
s.aE(0,"Reserved",H.c(["DOCTYPE","html","head","meta","link","title","body","script"],[P.h]))
s=u.k(0,"Attr")
s.d=s.a.M("Attr")
s=u.k(0,"Other")
s.d=s.a.M("Other")
return u}}
V.hK.prototype={
es:function(a,b){H.l(b,"$ib",[P.h],"$ab")
this.sc4(H.c([],[[P.b,W.aA]]))
this.L(C.a.m(b,"\n"),"#111")},
bI:function(a){},
bo:function(){return}}
V.i1.prototype={
f6:function(a,b){var u,t,s,r,q,p,o
u=document
t=u.body
s=u.createElement("div")
s.className="scrollTop";(t&&C.n).C(t,s)
r=u.createElement("div")
r.className="scrollPage"
C.n.C(t,r)
q=u.createElement("div")
q.className="pageCenter"
C.k.C(r,q)
if(a.length!==0){u.title=a
p=u.createElement("div")
p.className="pageTitle"
p.textContent=a
C.k.C(q,p)}o=u.createElement("div")
this.a=o
C.k.C(q,o)
this.b=null
o=W.o
W.a8(u,"scroll",H.n(new V.i3(s),{func:1,ret:-1,args:[o]}),!1,o)},
dI:function(a){var u,t,s,r,q,p,o,n,m,l,k
H.l(a,"$ib",[P.h],"$ab")
this.ij()
u=document
t=u.createElement("div")
t.className="textPar"
for(s=this.b.ez(C.a.jL(a)),r=s.length,q=0;q<s.length;s.length===r||(0,H.C)(s),++q){p=s[q]
switch(p.a){case"Bold":o=u.createElement("div")
o.className="boldPar"
o.textContent=p.b
C.k.C(t,o)
break
case"Italic":o=u.createElement("div")
o.className="italicPar"
o.textContent=p.b
C.k.C(t,o)
break
case"Code":o=u.createElement("div")
o.className="codePar"
o.textContent=p.b
C.k.C(t,o)
break
case"Link":n=p.b
if(H.ny(n,"|",0)){m=n.split("|")
l=u.createElement("a")
l.className="linkPar"
if(1>=m.length)return H.j(m,1)
l.href=H.H(m[1])
l.textContent=H.H(m[0])
C.k.C(t,l)}else{k=P.lr(C.C,n,C.x,!1)
l=u.createElement("a")
l.className="linkPar"
l.href="#"+k
l.textContent=n
C.k.C(t,l)}break
case"Other":o=u.createElement("div")
o.className="normalPar"
o.textContent=p.b
C.k.C(t,o)
break}}C.k.C(this.a,t)},
eG:function(a){var u,t,s,r
u=new V.fA("dart")
u.bh("dart")
t=new V.fX("glsl")
t.bh("glsl")
s=new V.fY("html")
s.bh("html")
r=C.a.jE(H.c([u,t,s],[V.bu]),new V.i4(a))
if(r!=null)return r
u=new V.hK("plain")
u.bh("plain")
return u},
dH:function(a4,a5,a6,a7){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3
H.l(a7,"$ib",[P.h],"$ab")
u=H.c([],[P.B])
for(t=!1,s=0;s<a7.length;++s){r=a7[s]
if(J.ku(r).bS(r,"+")){C.a.Y(a7,s,C.j.bf(r,1))
C.a.h(u,1)
t=!0}else if(C.j.bS(r,"-")){C.a.Y(a7,s,C.j.bf(r,1))
C.a.h(u,-1)
t=!0}else C.a.h(u,0)}q=this.eG(a5)
q.es(0,a7)
p=document
o=p.createElement("div")
o.className="codeTableScroll"
n=p.createElement("table")
n.className="codeTable"
C.k.C(o,n)
C.k.C(this.a,o)
m=P.lr(C.C,a4,C.x,!1)
l=p.createElement("tr")
l.className="headerRow"
k=p.createElement("td")
k.className="headerCell"
k.colSpan=t?3:2
j=p.createElement("div")
j.className="tableHeader"
j.id=m
i=W.kG(null)
i.href="#"+m
i.textContent=a4
C.k.C(j,i)
C.v.C(k,j)
C.m.C(l,k)
C.o.C(n,l)
if(t)for(h=a6,g=h,s=0;f=q.d,s<f.length;++s){r=f[s]
e=p.createElement("tr")
e.className="codeTableRow"
d=p.createElement("td")
d.className="codeLineNums codeLineLight"
c=p.createElement("td")
c.className="codeLineNums"
if(s>=u.length)return H.j(u,s)
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
for(f=r.length,a0=0;a0<r.length;r.length===f||(0,H.C)(r),++a0)C.v.C(a,r[a0])
C.m.C(e,d)
C.m.C(e,c)
C.m.C(e,a)
C.o.C(n,e)}else for(f=q.d,a1=f.length,a2=a6,a0=0;a0<f.length;f.length===a1||(0,H.C)(f),++a0){r=f[a0]
e=p.createElement("tr")
e.className="codeTableRow"
d=p.createElement("td")
d.className="codeLineNums";++a2
d.textContent=""+a2
c=p.createElement("td")
c.className="codeLineText"
for(a3=C.a.gT(r);a3.B();)C.v.C(c,a3.gI(a3))
C.m.C(e,d)
C.m.C(e,c)
C.o.C(n,e)}},
ij:function(){var u,t,s,r
if(this.b!=null)return
u=V.is()
u.c=u.k(0,"Start")
t=u.k(0,"Start").m(0,"Bold")
s=V.t(new H.q("*"))
C.a.h(t.a,s)
t.c=!0
t=u.k(0,"Bold").m(0,"Bold")
s=new V.ap()
r=[V.av]
s.sa4(H.c([],r))
C.a.h(t.a,s)
t=V.t(new H.q("*"))
C.a.h(s.a,t)
t=u.k(0,"Bold").m(0,"BoldEnd")
s=V.t(new H.q("*"))
C.a.h(t.a,s)
t.c=!0
t=u.k(0,"Start").m(0,"Italic")
s=V.t(new H.q("_"))
C.a.h(t.a,s)
t.c=!0
t=u.k(0,"Italic").m(0,"Italic")
s=new V.ap()
s.sa4(H.c([],r))
C.a.h(t.a,s)
t=V.t(new H.q("_"))
C.a.h(s.a,t)
t=u.k(0,"Italic").m(0,"ItalicEnd")
s=V.t(new H.q("_"))
C.a.h(t.a,s)
t.c=!0
t=u.k(0,"Start").m(0,"Code")
s=V.t(new H.q("`"))
C.a.h(t.a,s)
t.c=!0
t=u.k(0,"Code").m(0,"Code")
s=new V.ap()
s.sa4(H.c([],r))
C.a.h(t.a,s)
t=V.t(new H.q("`"))
C.a.h(s.a,t)
t=u.k(0,"Code").m(0,"CodeEnd")
s=V.t(new H.q("`"))
C.a.h(t.a,s)
t.c=!0
t=u.k(0,"Start").m(0,"LinkHead")
s=V.t(new H.q("["))
C.a.h(t.a,s)
t.c=!0
t=u.k(0,"LinkHead").m(0,"LinkTail")
s=V.t(new H.q("|"))
C.a.h(t.a,s)
s=u.k(0,"LinkHead").m(0,"LinkEnd")
t=V.t(new H.q("]"))
C.a.h(s.a,t)
s.c=!0
s=u.k(0,"LinkHead").m(0,"LinkHead")
t=new V.ap()
t.sa4(H.c([],r))
C.a.h(s.a,t)
s=V.t(new H.q("|]"))
C.a.h(t.a,s)
s=u.k(0,"LinkTail").m(0,"LinkEnd")
t=V.t(new H.q("]"))
C.a.h(s.a,t)
s.c=!0
s=u.k(0,"LinkTail").m(0,"LinkTail")
t=new V.ap()
t.sa4(H.c([],r))
C.a.h(s.a,t)
s=V.t(new H.q("|]"))
C.a.h(t.a,s)
C.a.h(u.k(0,"Start").m(0,"Other").a,new V.bc())
s=u.k(0,"Other").m(0,"Other")
t=new V.ap()
t.sa4(H.c([],r))
C.a.h(s.a,t)
s=V.t(new H.q("*_`["))
C.a.h(t.a,s)
s=u.k(0,"BoldEnd")
s.d=s.a.M("Bold")
s=u.k(0,"ItalicEnd")
s.d=s.a.M("Italic")
s=u.k(0,"CodeEnd")
s.d=s.a.M("Code")
s=u.k(0,"LinkEnd")
s.d=s.a.M("Link")
s=u.k(0,"Other")
s.d=s.a.M("Other")
this.b=u}}
V.i3.prototype={
$1:function(a){P.lb(C.q,new V.i2(this.a))},
$S:25}
V.i2.prototype={
$0:function(){var u,t,s
u=C.e.ak(document.documentElement.scrollTop)
t=this.a.style
s=H.m(-0.01*u)+"px"
t.top=s},
$S:2}
V.i4.prototype={
$1:function(a){return H.k(a,"$ibu").a===this.a},
$S:42}
B.jX.prototype={
$1:function(a){var u,t,s,r
H.k(a,"$iy")
u=this.a.c
t=this.b
s=u.a
r=[P.h]
t.dH("Vertex Shader for Skybox","glsl",0,H.c((s==null?null:s.c).split("\n"),r))
s=u.a
t.dH("Fragment Shader for Skybox","glsl",0,H.c((s==null?null:s.d).split("\n"),r))},
$S:6};(function aliases(){var u=J.a.prototype
u.eX=u.i
u=J.dz.prototype
u.eZ=u.i
u=P.d.prototype
u.eY=u.bO
u=W.U.prototype
u.bT=u.af
u=W.eO.prototype
u.f1=u.ao
u=O.dJ.prototype
u.f0=u.aN
u=O.aW.prototype
u.bU=u.aN
u=V.dG.prototype
u.f_=u.aB
u.d1=u.i})();(function installTearOffs(){var u=hunkHelpers._static_1,t=hunkHelpers._static_0,s=hunkHelpers.installStaticTearOff,r=hunkHelpers.installInstanceTearOff,q=hunkHelpers._instance_2u,p=hunkHelpers._instance_0u,o=hunkHelpers._instance_1u,n=hunkHelpers._instance_0i
u(P,"n3","mM",11)
u(P,"n4","mN",11)
u(P,"n5","mO",11)
t(P,"lA","n2",3)
s(W,"ni",4,null,["$4"],["mQ"],20,0)
s(W,"nj",4,null,["$4"],["mR"],20,0)
var m
r(m=E.ag.prototype,"geq",0,0,null,["$1","$0"],["er","jW"],0,0)
r(m,"geo",0,0,null,["$1","$0"],["ep","jT"],0,0)
q(m,"gjR","jS",8)
q(m,"gjU","jV",8)
r(m=E.e8.prototype,"gd4",0,0,null,["$1","$0"],["d6","d5"],0,0)
p(m,"gke","ev",3)
o(m=X.ef.prototype,"gho","hp",10)
o(m,"ghc","hd",10)
o(m,"ghi","hj",4)
o(m,"ghs","ht",23)
o(m,"ghq","hr",23)
o(m,"ghw","hx",4)
o(m,"ghA","hB",4)
o(m,"ghm","hn",4)
o(m,"ghy","hz",4)
o(m,"ghk","hl",4)
o(m,"ghC","hD",28)
o(m,"ghE","hF",10)
o(m,"ghU","hV",9)
o(m,"ghQ","hR",9)
o(m,"ghS","hT",9)
r(D.bw.prototype,"gfb",0,0,null,["$1","$0"],["at","fc"],0,0)
r(m=D.dB.prototype,"gds",0,0,null,["$1","$0"],["dt","hu"],0,0)
o(m,"ghG","hH",30)
q(m,"gh6","h7",26)
q(m,"ghK","hL",26)
n(V.S.prototype,"gl","cJ",18)
n(V.Q.prototype,"gl","cJ",18)
r(m=U.cs.prototype,"gaM",0,0,null,["$1","$0"],["N","a5"],0,0)
q(m,"gh4","h5",17)
q(m,"ghI","hJ",17)
r(m=U.eg.prototype,"gaM",0,0,null,["$1","$0"],["N","a5"],0,0)
o(m,"gc7","c8",1)
o(m,"gc9","ca",1)
o(m,"gcb","cc",1)
r(m=U.eh.prototype,"gaM",0,0,null,["$1","$0"],["N","a5"],0,0)
o(m,"gc7","c8",1)
o(m,"gc9","ca",1)
o(m,"gcb","cc",1)
o(m,"gfY","fZ",1)
o(m,"gh_","h0",1)
o(m,"giy","iz",1)
o(m,"giw","ix",1)
o(m,"giu","iv",1)
o(U.ei.prototype,"gh2","h3",1)
r(m=M.di.prototype,"gZ",0,0,null,["$1","$0"],["a_","aZ"],0,0)
q(m,"ghM","hN",14)
q(m,"ghO","hP",14)
r(M.dk.prototype,"gZ",0,0,null,["$1","$0"],["a_","aZ"],0,0)
r(m=M.dq.prototype,"gZ",0,0,null,["$1","$0"],["a_","aZ"],0,0)
q(m,"ghe","hf",8)
q(m,"ghg","hh",8)
r(m=O.dH.prototype,"gbV",0,0,null,["$1","$0"],["a2","bW"],0,0)
r(m,"gi6",0,0,null,["$1","$0"],["dA","i7"],0,0)
q(m,"gh8","h9",13)
q(m,"gha","hb",13)
r(O.dY.prototype,"gbV",0,0,null,["$1","$0"],["a2","bW"],0,0)
r(X.dQ.prototype,"gfm",0,0,null,["$1","$0"],["am","fn"],0,0)})();(function inheritance(){var u=hunkHelpers.mixin,t=hunkHelpers.inherit,s=hunkHelpers.inheritMany
t(P.N,null)
s(P.N,[H.kd,J.a,J.am,P.eB,P.d,H.cu,P.aT,H.bU,H.ee,H.hP,H.ix,P.bx,H.ck,H.eT,P.aa,H.hb,H.hc,H.h6,P.eZ,P.ba,P.aD,P.el,P.ic,P.cG,P.id,P.b5,P.af,P.jK,P.jy,P.c5,P.eA,P.v,P.cl,P.h0,P.jI,P.O,P.an,P.a4,P.aQ,P.hI,P.e0,P.et,P.fV,P.by,P.b,P.P,P.K,P.aq,P.h,P.bk,W.fw,W.bH,W.A,W.dO,W.eO,W.jD,W.ds,W.ax,W.jx,W.f4,P.f3,P.js,O.a1,O.cv,E.fp,E.ag,E.hQ,E.e8,Z.ej,Z.ek,Z.cj,Z.bW,Z.b8,D.fs,D.bT,D.y,X.dh,X.dA,X.h8,X.he,X.aw,X.hv,X.it,X.ef,D.bw,D.a5,D.dR,D.e_,D.e5,D.e6,D.e7,V.a2,V.au,V.fK,V.dK,V.ao,V.a6,V.a3,V.b0,V.dV,V.S,V.Q,U.eg,U.eh,U.ei,M.dk,M.dq,M.ay,A.dd,A.fk,A.hm,A.cM,A.cQ,A.cO,A.cR,A.cP,A.cS,A.bS,A.eb,A.iH,F.a7,F.fO,F.bD,F.ha,F.bZ,F.dX,F.hZ,F.i_,F.i0,F.aj,F.iR,F.iS,F.iV,F.iX,F.iY,F.iZ,O.bE,O.dJ,T.im,V.bc,V.av,V.dG,V.hO,V.hY,V.cF,V.e9,V.cK,V.ir,X.bP,X.cH,X.h1,X.dQ,V.bu,V.i1])
s(J.a,[J.h5,J.dy,J.dz,J.aG,J.bC,J.be,H.cz,W.e,W.fi,W.de,W.bR,W.aO,W.aP,W.T,W.en,W.fB,W.fC,W.dm,W.ep,W.dp,W.er,W.fE,W.o,W.eu,W.aS,W.fZ,W.ew,W.bz,W.dE,W.hp,W.eC,W.eD,W.aY,W.eE,W.eH,W.b_,W.eL,W.dT,W.eN,W.b2,W.eP,W.b3,W.eU,W.aH,W.eX,W.iq,W.b6,W.f_,W.iv,W.iM,W.f5,W.f7,W.f9,W.fb,W.fd,P.bg,P.ey,P.bi,P.eJ,P.hN,P.eV,P.bl,P.f1,P.fl,P.em,P.df,P.dt,P.dS,P.c2,P.dW,P.e3,P.ec,P.eR])
s(J.dz,[J.hJ,J.bG,J.bf])
t(J.kc,J.aG)
s(J.bC,[J.dx,J.dw])
t(P.hd,P.eB)
s(P.hd,[H.ed,W.j9,W.ak,P.fR])
t(H.q,H.ed)
s(P.d,[H.fH,H.hh,H.cU])
s(H.fH,[H.bX,H.dC])
s(P.aT,[H.hi,H.j3])
t(H.hj,H.bX)
s(P.bx,[H.hF,H.h7,H.iK,H.iz,H.fr,H.hW,P.dP,P.aF,P.iL,P.iJ,P.c3,P.fu,P.fz])
s(H.ck,[H.k1,H.ij,H.jT,H.jU,H.jV,P.j5,P.j4,P.j6,P.j7,P.jH,P.jG,P.jf,P.jj,P.jg,P.jh,P.ji,P.jm,P.jn,P.jl,P.jk,P.ie,P.ig,P.jM,P.jv,P.ju,P.jw,P.hg,P.fF,P.fG,W.fI,W.hr,W.ht,W.hV,W.ib,W.je,W.hD,W.hC,W.jz,W.jA,W.jF,W.jJ,P.jO,P.fS,P.fT,P.fn,E.hR,E.hS,E.hT,E.ip,D.fM,D.fN,F.k0,F.jP,F.j0,F.j_,F.iT,F.iU,T.io,V.k_,V.i3,V.i2,V.i4,B.jX])
s(H.ij,[H.i9,H.ch])
t(P.hf,P.aa)
s(P.hf,[H.aU,W.j8])
t(H.dL,H.cz)
s(H.dL,[H.cY,H.d_])
t(H.cZ,H.cY)
t(H.cy,H.cZ)
t(H.d0,H.d_)
t(H.dM,H.d0)
s(H.dM,[H.hw,H.hx,H.hy,H.hz,H.hA,H.dN,H.hB])
t(P.jt,P.jK)
t(P.jr,P.jy)
t(P.cm,P.id)
t(P.fJ,P.cl)
s(P.cm,[P.h_,P.iO])
t(P.iN,P.fJ)
s(P.a4,[P.z,P.B])
s(P.aF,[P.c1,P.h2])
s(W.e,[W.D,W.fQ,W.b1,W.d1,W.b4,W.aI,W.d3,W.j2,W.cV,P.fo,P.bO])
s(W.D,[W.U,W.bt,W.cp,W.cW])
s(W.U,[W.w,P.p])
s(W.w,[W.dc,W.fj,W.cg,W.bs,W.bQ,W.aA,W.fU,W.du,W.ct,W.cw,W.hX,W.c4,W.e1,W.e2,W.ii,W.cI])
s(W.aO,[W.cn,W.fx,W.fy])
t(W.fv,W.aP)
t(W.co,W.en)
t(W.eq,W.ep)
t(W.dn,W.eq)
t(W.es,W.er)
t(W.fD,W.es)
t(W.aR,W.de)
t(W.ev,W.eu)
t(W.fP,W.ev)
t(W.ex,W.ew)
t(W.bV,W.ex)
t(W.dv,W.cp)
t(W.bF,W.o)
s(W.bF,[W.aV,W.ab,W.aJ])
t(W.hq,W.eC)
t(W.hs,W.eD)
t(W.eF,W.eE)
t(W.hu,W.eF)
t(W.eI,W.eH)
t(W.cA,W.eI)
t(W.eM,W.eL)
t(W.hL,W.eM)
t(W.hU,W.eN)
t(W.d2,W.d1)
t(W.i6,W.d2)
t(W.eQ,W.eP)
t(W.i7,W.eQ)
t(W.ia,W.eU)
t(W.eY,W.eX)
t(W.ik,W.eY)
t(W.d4,W.d3)
t(W.il,W.d4)
t(W.f0,W.f_)
t(W.iu,W.f0)
t(W.j1,W.cw)
t(W.b9,W.ab)
t(W.f6,W.f5)
t(W.ja,W.f6)
t(W.eo,W.dp)
t(W.f8,W.f7)
t(W.jo,W.f8)
t(W.fa,W.f9)
t(W.eG,W.fa)
t(W.fc,W.fb)
t(W.jB,W.fc)
t(W.fe,W.fd)
t(W.jC,W.fe)
t(W.jb,W.j8)
t(W.jc,P.ic)
t(W.kk,W.jc)
t(W.jd,P.cG)
t(W.jE,W.eO)
t(P.ac,P.js)
t(P.ez,P.ey)
t(P.h9,P.ez)
t(P.eK,P.eJ)
t(P.hG,P.eK)
t(P.cD,P.p)
t(P.eW,P.eV)
t(P.ih,P.eW)
t(P.f2,P.f1)
t(P.iw,P.f2)
t(P.fm,P.em)
t(P.hH,P.bO)
t(P.eS,P.eR)
t(P.i8,P.eS)
s(E.fp,[Z.dg,A.cE,T.cJ])
s(D.y,[D.bA,D.bB,D.M,X.hM])
s(X.hM,[X.dF,X.bh,X.cx,X.ea])
s(O.a1,[D.dB,U.cs,M.di])
s(D.fs,[U.ft,U.ad])
t(U.dj,U.ad)
s(A.cE,[A.dI,A.dZ])
s(A.eb,[A.L,A.iD,A.iE,A.iG,A.iB,A.Y,A.iC,A.I,A.iF,A.iI,A.cN,A.ar,A.ah,A.ae])
t(F.i5,F.fO)
t(F.iA,F.ha)
t(F.iW,F.iX)
t(F.hE,F.iY)
s(O.bE,[O.dH,O.dY])
s(O.dJ,[O.hk,O.hl,O.aW])
s(O.aW,[O.hn,O.ho])
t(T.e4,T.cJ)
s(V.dG,[V.ap,V.cL])
t(X.fW,X.cH)
s(V.bu,[V.fA,V.fX,V.fY,V.hK])
u(H.ed,H.ee)
u(H.cY,P.v)
u(H.cZ,H.bU)
u(H.d_,P.v)
u(H.d0,H.bU)
u(P.eB,P.v)
u(W.en,W.fw)
u(W.ep,P.v)
u(W.eq,W.A)
u(W.er,P.v)
u(W.es,W.A)
u(W.eu,P.v)
u(W.ev,W.A)
u(W.ew,P.v)
u(W.ex,W.A)
u(W.eC,P.aa)
u(W.eD,P.aa)
u(W.eE,P.v)
u(W.eF,W.A)
u(W.eH,P.v)
u(W.eI,W.A)
u(W.eL,P.v)
u(W.eM,W.A)
u(W.eN,P.aa)
u(W.d1,P.v)
u(W.d2,W.A)
u(W.eP,P.v)
u(W.eQ,W.A)
u(W.eU,P.aa)
u(W.eX,P.v)
u(W.eY,W.A)
u(W.d3,P.v)
u(W.d4,W.A)
u(W.f_,P.v)
u(W.f0,W.A)
u(W.f5,P.v)
u(W.f6,W.A)
u(W.f7,P.v)
u(W.f8,W.A)
u(W.f9,P.v)
u(W.fa,W.A)
u(W.fb,P.v)
u(W.fc,W.A)
u(W.fd,P.v)
u(W.fe,W.A)
u(P.ey,P.v)
u(P.ez,W.A)
u(P.eJ,P.v)
u(P.eK,W.A)
u(P.eV,P.v)
u(P.eW,W.A)
u(P.f1,P.v)
u(P.f2,W.A)
u(P.em,P.aa)
u(P.eR,P.v)
u(P.eS,W.A)})();(function constants(){var u=hunkHelpers.makeConstList
C.n=W.bs.prototype
C.p=W.bQ.prototype
C.y=W.bR.prototype
C.k=W.aA.prototype
C.J=W.dm.prototype
C.L=W.du.prototype
C.z=W.dv.prototype
C.N=J.a.prototype
C.a=J.aG.prototype
C.O=J.dw.prototype
C.d=J.dx.prototype
C.r=J.dy.prototype
C.e=J.bC.prototype
C.j=J.be.prototype
C.V=J.bf.prototype
C.Z=W.cA.prototype
C.D=J.hJ.prototype
C.E=W.dT.prototype
C.b=P.c2.prototype
C.v=W.c4.prototype
C.o=W.e1.prototype
C.m=W.e2.prototype
C.w=J.bG.prototype
C.F=W.b9.prototype
C.G=W.cV.prototype
C.H=new P.hI()
C.I=new P.iO()
C.l=new P.jt()
C.c=new A.bS(0,"ColorSourceType.None")
C.i=new A.bS(1,"ColorSourceType.Solid")
C.f=new A.bS(2,"ColorSourceType.Texture2D")
C.h=new A.bS(3,"ColorSourceType.TextureCube")
C.q=new P.aQ(0)
C.K=new P.aQ(5e6)
C.M=new P.h0("element",!0,!1,!1,!1)
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
C.A=function(hooks) { return hooks; }

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
C.B=function getTagFallback(o) {
  var s = Object.prototype.toString.call(o);
  return s.substring(8, s.length - 1);
}
C.W=H.c(u(["*::class","*::dir","*::draggable","*::hidden","*::id","*::inert","*::itemprop","*::itemref","*::itemscope","*::lang","*::spellcheck","*::title","*::translate","A::accesskey","A::coords","A::hreflang","A::name","A::shape","A::tabindex","A::target","A::type","AREA::accesskey","AREA::alt","AREA::coords","AREA::nohref","AREA::shape","AREA::tabindex","AREA::target","AUDIO::controls","AUDIO::loop","AUDIO::mediagroup","AUDIO::muted","AUDIO::preload","BDO::dir","BODY::alink","BODY::bgcolor","BODY::link","BODY::text","BODY::vlink","BR::clear","BUTTON::accesskey","BUTTON::disabled","BUTTON::name","BUTTON::tabindex","BUTTON::type","BUTTON::value","CANVAS::height","CANVAS::width","CAPTION::align","COL::align","COL::char","COL::charoff","COL::span","COL::valign","COL::width","COLGROUP::align","COLGROUP::char","COLGROUP::charoff","COLGROUP::span","COLGROUP::valign","COLGROUP::width","COMMAND::checked","COMMAND::command","COMMAND::disabled","COMMAND::label","COMMAND::radiogroup","COMMAND::type","DATA::value","DEL::datetime","DETAILS::open","DIR::compact","DIV::align","DL::compact","FIELDSET::disabled","FONT::color","FONT::face","FONT::size","FORM::accept","FORM::autocomplete","FORM::enctype","FORM::method","FORM::name","FORM::novalidate","FORM::target","FRAME::name","H1::align","H2::align","H3::align","H4::align","H5::align","H6::align","HR::align","HR::noshade","HR::size","HR::width","HTML::version","IFRAME::align","IFRAME::frameborder","IFRAME::height","IFRAME::marginheight","IFRAME::marginwidth","IFRAME::width","IMG::align","IMG::alt","IMG::border","IMG::height","IMG::hspace","IMG::ismap","IMG::name","IMG::usemap","IMG::vspace","IMG::width","INPUT::accept","INPUT::accesskey","INPUT::align","INPUT::alt","INPUT::autocomplete","INPUT::autofocus","INPUT::checked","INPUT::disabled","INPUT::inputmode","INPUT::ismap","INPUT::list","INPUT::max","INPUT::maxlength","INPUT::min","INPUT::multiple","INPUT::name","INPUT::placeholder","INPUT::readonly","INPUT::required","INPUT::size","INPUT::step","INPUT::tabindex","INPUT::type","INPUT::usemap","INPUT::value","INS::datetime","KEYGEN::disabled","KEYGEN::keytype","KEYGEN::name","LABEL::accesskey","LABEL::for","LEGEND::accesskey","LEGEND::align","LI::type","LI::value","LINK::sizes","MAP::name","MENU::compact","MENU::label","MENU::type","METER::high","METER::low","METER::max","METER::min","METER::value","OBJECT::typemustmatch","OL::compact","OL::reversed","OL::start","OL::type","OPTGROUP::disabled","OPTGROUP::label","OPTION::disabled","OPTION::label","OPTION::selected","OPTION::value","OUTPUT::for","OUTPUT::name","P::align","PRE::width","PROGRESS::max","PROGRESS::min","PROGRESS::value","SELECT::autocomplete","SELECT::disabled","SELECT::multiple","SELECT::name","SELECT::required","SELECT::size","SELECT::tabindex","SOURCE::type","TABLE::align","TABLE::bgcolor","TABLE::border","TABLE::cellpadding","TABLE::cellspacing","TABLE::frame","TABLE::rules","TABLE::summary","TABLE::width","TBODY::align","TBODY::char","TBODY::charoff","TBODY::valign","TD::abbr","TD::align","TD::axis","TD::bgcolor","TD::char","TD::charoff","TD::colspan","TD::headers","TD::height","TD::nowrap","TD::rowspan","TD::scope","TD::valign","TD::width","TEXTAREA::accesskey","TEXTAREA::autocomplete","TEXTAREA::cols","TEXTAREA::disabled","TEXTAREA::inputmode","TEXTAREA::name","TEXTAREA::placeholder","TEXTAREA::readonly","TEXTAREA::required","TEXTAREA::rows","TEXTAREA::tabindex","TEXTAREA::wrap","TFOOT::align","TFOOT::char","TFOOT::charoff","TFOOT::valign","TH::abbr","TH::align","TH::axis","TH::bgcolor","TH::char","TH::charoff","TH::colspan","TH::headers","TH::height","TH::nowrap","TH::rowspan","TH::scope","TH::valign","TH::width","THEAD::align","THEAD::char","THEAD::charoff","THEAD::valign","TR::align","TR::bgcolor","TR::char","TR::charoff","TR::valign","TRACK::default","TRACK::kind","TRACK::label","TRACK::srclang","UL::compact","UL::type","VIDEO::controls","VIDEO::height","VIDEO::loop","VIDEO::mediagroup","VIDEO::muted","VIDEO::preload","VIDEO::width"]),[P.h])
C.X=H.c(u(["HEAD","AREA","BASE","BASEFONT","BR","COL","COLGROUP","EMBED","FRAME","FRAMESET","HR","IMAGE","IMG","INPUT","ISINDEX","LINK","META","PARAM","SOURCE","STYLE","TITLE","WBR"]),[P.h])
C.Y=H.c(u([]),[P.h])
C.C=H.c(u([0,0,65498,45055,65535,34815,65534,18431]),[P.B])
C.t=H.c(u(["bind","if","ref","repeat","syntax"]),[P.h])
C.u=H.c(u(["A::href","AREA::href","BLOCKQUOTE::cite","BODY::background","COMMAND::icon","DEL::cite","FORM::action","IMG::src","INPUT::src","INS::cite","Q::cite","VIDEO::poster"]),[P.h])
C.x=new P.iN(!1)})();(function staticFields(){$.aN=0
$.ci=null
$.kH=null
$.km=!1
$.lD=null
$.ly=null
$.lI=null
$.jQ=null
$.jW=null
$.kv=null
$.c6=null
$.d6=null
$.d7=null
$.kn=!1
$.Z=C.l
$.bd=null
$.k9=null
$.kO=null
$.kN=null
$.kW=null
$.l0=null
$.cB=null
$.l5=null
$.lf=null
$.lj=null
$.lh=null
$.li=null
$.iP=null
$.lg=null
$.mH="uniform mat4 viewMat;                             \nuniform float fov;                                \nuniform float ratio;                              \n                                                  \nattribute vec3 posAttr;                           \n                                                  \nvarying vec3 cubeTxt;                             \n                                                  \nvoid main()                                       \n{                                                 \n  float t = 1.0 / (tan(fov * 0.5)*3.0);           \n  float x = -t * posAttr.x / ratio;               \n  float y = t * posAttr.y;                        \n  cubeTxt = (viewMat * vec4(x, y, 1.0, 0.0)).xyz; \n  gl_Position = vec4(posAttr, 1.0);               \n}                                                 \n"
$.mG="precision mediump float;                                              \n                                                                      \nuniform samplerCube boxTxt;                                           \nuniform vec3 boxClr;                                                  \n                                                                      \nvarying vec3 cubeTxt;                                                 \n                                                                      \nvoid main()                                                           \n{                                                                     \n   vec3 txtCube = normalize(cubeTxt);                                 \n   gl_FragColor = vec4(boxClr*textureCube(boxTxt, txtCube).xyz, 1.0); \n}                                                                     \n"
$.l_=null})();(function lazyInitializers(){var u=hunkHelpers.lazy
u($,"nH","lL",function(){return H.lC("_$dart_dartClosure")})
u($,"nI","kA",function(){return H.lC("_$dart_js")})
u($,"nM","lM",function(){return H.b7(H.iy({
toString:function(){return"$receiver$"}}))})
u($,"nN","lN",function(){return H.b7(H.iy({$method$:null,
toString:function(){return"$receiver$"}}))})
u($,"nO","lO",function(){return H.b7(H.iy(null))})
u($,"nP","lP",function(){return H.b7(function(){var $argumentsExpr$='$arguments$'
try{null.$method$($argumentsExpr$)}catch(t){return t.message}}())})
u($,"nS","lS",function(){return H.b7(H.iy(void 0))})
u($,"nT","lT",function(){return H.b7(function(){var $argumentsExpr$='$arguments$'
try{(void 0).$method$($argumentsExpr$)}catch(t){return t.message}}())})
u($,"nR","lR",function(){return H.b7(H.ld(null))})
u($,"nQ","lQ",function(){return H.b7(function(){try{null.$method$}catch(t){return t.message}}())})
u($,"nV","lV",function(){return H.b7(H.ld(void 0))})
u($,"nU","lU",function(){return H.b7(function(){try{(void 0).$method$}catch(t){return t.message}}())})
u($,"ob","kB",function(){return P.mL()})
u($,"of","db",function(){return[]})
u($,"oe","m_",function(){return P.mC("^[\\-\\.0-9A-Z_a-z~]*$",!0,!1)})
u($,"oc","lZ",function(){return P.kS(["A","ABBR","ACRONYM","ADDRESS","AREA","ARTICLE","ASIDE","AUDIO","B","BDI","BDO","BIG","BLOCKQUOTE","BR","BUTTON","CANVAS","CAPTION","CENTER","CITE","CODE","COL","COLGROUP","COMMAND","DATA","DATALIST","DD","DEL","DETAILS","DFN","DIR","DIV","DL","DT","EM","FIELDSET","FIGCAPTION","FIGURE","FONT","FOOTER","FORM","H1","H2","H3","H4","H5","H6","HEADER","HGROUP","HR","I","IFRAME","IMG","INPUT","INS","KBD","LABEL","LEGEND","LI","MAP","MARK","MENU","METER","NAV","NOBR","OL","OPTGROUP","OPTION","OUTPUT","P","PRE","PROGRESS","Q","S","SAMP","SECTION","SELECT","SMALL","SOURCE","SPAN","STRIKE","STRONG","SUB","SUMMARY","SUP","TABLE","TBODY","TD","TEXTAREA","TFOOT","TH","THEAD","TIME","TR","TRACK","TT","U","UL","VAR","VIDEO","WBR"],P.h)})
u($,"od","kC",function(){return P.kR(P.h,P.by)})
u($,"o4","lY",function(){return Z.aC(0)})
u($,"nZ","lW",function(){return Z.aC(511)})
u($,"o6","aL",function(){return Z.aC(1)})
u($,"o5","bp",function(){return Z.aC(2)})
u($,"o0","bo",function(){return Z.aC(4)})
u($,"o7","bq",function(){return Z.aC(8)})
u($,"o8","br",function(){return Z.aC(16)})
u($,"o1","d9",function(){return Z.aC(32)})
u($,"o2","da",function(){return Z.aC(64)})
u($,"o3","lX",function(){return Z.aC(96)})
u($,"o9","cf",function(){return Z.aC(128)})
u($,"o_","bn",function(){return Z.aC(256)})
u($,"nG","lK",function(){return new V.fK(1e-9)})
u($,"nF","R",function(){return $.lK()})})()
var v={mangledGlobalNames:{B:"int",z:"double",a4:"num",h:"String",O:"bool",K:"Null",b:"List"},mangledNames:{},getTypeFromName:getGlobalFromName,metadata:[],types:[{func:1,ret:-1,opt:[D.y]},{func:1,ret:-1,args:[D.y]},{func:1,ret:P.K},{func:1,ret:-1},{func:1,ret:-1,args:[W.ab]},{func:1,ret:P.K,args:[F.a7]},{func:1,ret:P.K,args:[D.y]},{func:1,ret:-1,args:[P.h,,]},{func:1,ret:-1,args:[P.B,[P.d,E.ag]]},{func:1,ret:-1,args:[W.aJ]},{func:1,ret:-1,args:[W.o]},{func:1,ret:-1,args:[{func:1,ret:-1}]},{func:1,ret:P.K,args:[,]},{func:1,ret:-1,args:[P.B,[P.d,V.ao]]},{func:1,ret:-1,args:[P.B,[P.d,M.ay]]},{func:1,args:[,]},{func:1,ret:P.O,args:[P.h]},{func:1,ret:-1,args:[P.B,[P.d,U.ad]]},{func:1,ret:P.z},{func:1,ret:P.O,args:[W.D]},{func:1,ret:P.O,args:[W.U,P.h,P.h,W.bH]},{func:1,ret:P.h,args:[P.B]},{func:1,ret:P.O,args:[W.ax]},{func:1,ret:-1,args:[W.aV]},{func:1,ret:P.K,args:[{func:1,ret:-1,args:[D.y]}]},{func:1,ret:P.K,args:[W.o]},{func:1,ret:-1,args:[P.B,[P.d,D.a5]]},{func:1,ret:P.K,args:[,,]},{func:1,ret:-1,args:[W.b9]},{func:1,args:[,P.h]},{func:1,ret:P.O,args:[[P.d,D.a5]]},{func:1,ret:W.U,args:[W.D]},{func:1,ret:-1,args:[W.D,W.D]},{func:1,ret:P.h,args:[P.h]},{func:1,ret:[P.aD,,],args:[,]},{func:1,args:[W.o]},{func:1,ret:V.a3,args:[P.z]},{func:1,ret:P.K,args:[F.aj,P.z,P.z]},{func:1,args:[P.h]},{func:1,ret:-1,args:[P.h,P.h]},{func:1,ret:P.K,args:[{func:1,ret:-1}]},{func:1,ret:P.K,args:[P.b5]},{func:1,ret:P.O,args:[V.bu]},{func:1,ret:P.K,args:[P.a4]},{func:1,ret:P.K,args:[,],opt:[P.aq]}],interceptorsByTag:null,leafTags:null};(function nativeSupport(){!function(){var u=function(a){var o={}
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
hunkHelpers.setOrUpdateInterceptorsByTag({ArrayBuffer:J.a,AnimationEffectReadOnly:J.a,AnimationEffectTiming:J.a,AnimationEffectTimingReadOnly:J.a,AnimationTimeline:J.a,AnimationWorkletGlobalScope:J.a,AuthenticatorAssertionResponse:J.a,AuthenticatorAttestationResponse:J.a,AuthenticatorResponse:J.a,BackgroundFetchFetch:J.a,BackgroundFetchManager:J.a,BackgroundFetchSettledFetch:J.a,BarProp:J.a,BarcodeDetector:J.a,BluetoothRemoteGATTDescriptor:J.a,Body:J.a,BudgetState:J.a,CacheStorage:J.a,CanvasGradient:J.a,CanvasPattern:J.a,Client:J.a,Clients:J.a,CookieStore:J.a,Coordinates:J.a,Credential:J.a,CredentialUserData:J.a,CredentialsContainer:J.a,Crypto:J.a,CryptoKey:J.a,CSS:J.a,CSSVariableReferenceValue:J.a,CustomElementRegistry:J.a,DataTransfer:J.a,DataTransferItem:J.a,DeprecatedStorageInfo:J.a,DeprecatedStorageQuota:J.a,DeprecationReport:J.a,DetectedBarcode:J.a,DetectedFace:J.a,DetectedText:J.a,DeviceAcceleration:J.a,DeviceRotationRate:J.a,DirectoryEntry:J.a,DirectoryReader:J.a,DocumentOrShadowRoot:J.a,DocumentTimeline:J.a,DOMError:J.a,Iterator:J.a,DOMMatrix:J.a,DOMMatrixReadOnly:J.a,DOMParser:J.a,DOMPoint:J.a,DOMPointReadOnly:J.a,DOMQuad:J.a,DOMStringMap:J.a,Entry:J.a,External:J.a,FaceDetector:J.a,FederatedCredential:J.a,FileEntry:J.a,DOMFileSystem:J.a,FontFace:J.a,FontFaceSource:J.a,FormData:J.a,GamepadButton:J.a,GamepadPose:J.a,Geolocation:J.a,Position:J.a,Headers:J.a,HTMLHyperlinkElementUtils:J.a,IdleDeadline:J.a,ImageBitmap:J.a,ImageBitmapRenderingContext:J.a,ImageCapture:J.a,InputDeviceCapabilities:J.a,IntersectionObserver:J.a,IntersectionObserverEntry:J.a,InterventionReport:J.a,KeyframeEffect:J.a,KeyframeEffectReadOnly:J.a,MediaCapabilities:J.a,MediaCapabilitiesInfo:J.a,MediaDeviceInfo:J.a,MediaError:J.a,MediaKeyStatusMap:J.a,MediaKeySystemAccess:J.a,MediaKeys:J.a,MediaKeysPolicy:J.a,MediaMetadata:J.a,MediaSession:J.a,MediaSettingsRange:J.a,MemoryInfo:J.a,MessageChannel:J.a,Metadata:J.a,MutationObserver:J.a,WebKitMutationObserver:J.a,MutationRecord:J.a,NavigationPreloadManager:J.a,Navigator:J.a,NavigatorAutomationInformation:J.a,NavigatorConcurrentHardware:J.a,NavigatorCookies:J.a,NavigatorUserMediaError:J.a,NodeFilter:J.a,NodeIterator:J.a,NonDocumentTypeChildNode:J.a,NonElementParentNode:J.a,NoncedElement:J.a,OffscreenCanvasRenderingContext2D:J.a,OverconstrainedError:J.a,PaintRenderingContext2D:J.a,PaintSize:J.a,PaintWorkletGlobalScope:J.a,PasswordCredential:J.a,Path2D:J.a,PaymentAddress:J.a,PaymentInstruments:J.a,PaymentManager:J.a,PaymentResponse:J.a,PerformanceEntry:J.a,PerformanceLongTaskTiming:J.a,PerformanceMark:J.a,PerformanceMeasure:J.a,PerformanceNavigation:J.a,PerformanceNavigationTiming:J.a,PerformanceObserver:J.a,PerformanceObserverEntryList:J.a,PerformancePaintTiming:J.a,PerformanceResourceTiming:J.a,PerformanceServerTiming:J.a,PerformanceTiming:J.a,Permissions:J.a,PhotoCapabilities:J.a,PositionError:J.a,Presentation:J.a,PresentationReceiver:J.a,PublicKeyCredential:J.a,PushManager:J.a,PushMessageData:J.a,PushSubscription:J.a,PushSubscriptionOptions:J.a,RelatedApplication:J.a,ReportBody:J.a,ReportingObserver:J.a,ResizeObserver:J.a,ResizeObserverEntry:J.a,RTCCertificate:J.a,RTCIceCandidate:J.a,mozRTCIceCandidate:J.a,RTCLegacyStatsReport:J.a,RTCRtpContributingSource:J.a,RTCRtpReceiver:J.a,RTCRtpSender:J.a,RTCSessionDescription:J.a,mozRTCSessionDescription:J.a,RTCStatsResponse:J.a,Screen:J.a,ScrollState:J.a,ScrollTimeline:J.a,Selection:J.a,SharedArrayBuffer:J.a,SpeechRecognitionAlternative:J.a,SpeechSynthesisVoice:J.a,StaticRange:J.a,StorageManager:J.a,StyleMedia:J.a,StylePropertyMap:J.a,StylePropertyMapReadonly:J.a,SyncManager:J.a,TaskAttributionTiming:J.a,TextDetector:J.a,TextMetrics:J.a,TrackDefault:J.a,TreeWalker:J.a,TrustedHTML:J.a,TrustedScriptURL:J.a,TrustedURL:J.a,UnderlyingSourceBase:J.a,URLSearchParams:J.a,VRCoordinateSystem:J.a,VRDisplayCapabilities:J.a,VREyeParameters:J.a,VRFrameData:J.a,VRFrameOfReference:J.a,VRPose:J.a,VRStageBounds:J.a,VRStageBoundsPoint:J.a,VRStageParameters:J.a,ValidityState:J.a,VideoPlaybackQuality:J.a,VideoTrack:J.a,VTTRegion:J.a,WindowClient:J.a,WorkletAnimation:J.a,WorkletGlobalScope:J.a,XPathEvaluator:J.a,XPathExpression:J.a,XPathNSResolver:J.a,XPathResult:J.a,XMLSerializer:J.a,XSLTProcessor:J.a,Bluetooth:J.a,BluetoothCharacteristicProperties:J.a,BluetoothRemoteGATTServer:J.a,BluetoothRemoteGATTService:J.a,BluetoothUUID:J.a,BudgetService:J.a,Cache:J.a,DOMFileSystemSync:J.a,DirectoryEntrySync:J.a,DirectoryReaderSync:J.a,EntrySync:J.a,FileEntrySync:J.a,FileReaderSync:J.a,FileWriterSync:J.a,HTMLAllCollection:J.a,Mojo:J.a,MojoHandle:J.a,MojoWatcher:J.a,NFC:J.a,PagePopupController:J.a,Report:J.a,Request:J.a,Response:J.a,SubtleCrypto:J.a,USBAlternateInterface:J.a,USBConfiguration:J.a,USBDevice:J.a,USBEndpoint:J.a,USBInTransferResult:J.a,USBInterface:J.a,USBIsochronousInTransferPacket:J.a,USBIsochronousInTransferResult:J.a,USBIsochronousOutTransferPacket:J.a,USBIsochronousOutTransferResult:J.a,USBOutTransferResult:J.a,WorkerLocation:J.a,WorkerNavigator:J.a,Worklet:J.a,IDBCursor:J.a,IDBCursorWithValue:J.a,IDBFactory:J.a,IDBIndex:J.a,IDBKeyRange:J.a,IDBObjectStore:J.a,IDBObservation:J.a,IDBObserver:J.a,IDBObserverChanges:J.a,SVGAngle:J.a,SVGAnimatedAngle:J.a,SVGAnimatedBoolean:J.a,SVGAnimatedEnumeration:J.a,SVGAnimatedInteger:J.a,SVGAnimatedLength:J.a,SVGAnimatedLengthList:J.a,SVGAnimatedNumber:J.a,SVGAnimatedNumberList:J.a,SVGAnimatedPreserveAspectRatio:J.a,SVGAnimatedRect:J.a,SVGAnimatedString:J.a,SVGAnimatedTransformList:J.a,SVGMatrix:J.a,SVGPoint:J.a,SVGPreserveAspectRatio:J.a,SVGRect:J.a,SVGUnitTypes:J.a,AudioListener:J.a,AudioParam:J.a,AudioTrack:J.a,AudioWorkletGlobalScope:J.a,AudioWorkletProcessor:J.a,PeriodicWave:J.a,WebGLActiveInfo:J.a,ANGLEInstancedArrays:J.a,ANGLE_instanced_arrays:J.a,WebGLCanvas:J.a,WebGLColorBufferFloat:J.a,WebGLCompressedTextureASTC:J.a,WebGLCompressedTextureATC:J.a,WEBGL_compressed_texture_atc:J.a,WebGLCompressedTextureETC1:J.a,WEBGL_compressed_texture_etc1:J.a,WebGLCompressedTextureETC:J.a,WebGLCompressedTexturePVRTC:J.a,WEBGL_compressed_texture_pvrtc:J.a,WebGLCompressedTextureS3TC:J.a,WEBGL_compressed_texture_s3tc:J.a,WebGLCompressedTextureS3TCsRGB:J.a,WebGLDebugRendererInfo:J.a,WEBGL_debug_renderer_info:J.a,WebGLDebugShaders:J.a,WEBGL_debug_shaders:J.a,WebGLDepthTexture:J.a,WEBGL_depth_texture:J.a,WebGLDrawBuffers:J.a,WEBGL_draw_buffers:J.a,EXTsRGB:J.a,EXT_sRGB:J.a,EXTBlendMinMax:J.a,EXT_blend_minmax:J.a,EXTColorBufferFloat:J.a,EXTColorBufferHalfFloat:J.a,EXTDisjointTimerQuery:J.a,EXTDisjointTimerQueryWebGL2:J.a,EXTFragDepth:J.a,EXT_frag_depth:J.a,EXTShaderTextureLOD:J.a,EXT_shader_texture_lod:J.a,EXTTextureFilterAnisotropic:J.a,EXT_texture_filter_anisotropic:J.a,WebGLGetBufferSubDataAsync:J.a,WebGLLoseContext:J.a,WebGLExtensionLoseContext:J.a,WEBGL_lose_context:J.a,OESElementIndexUint:J.a,OES_element_index_uint:J.a,OESStandardDerivatives:J.a,OES_standard_derivatives:J.a,OESTextureFloat:J.a,OES_texture_float:J.a,OESTextureFloatLinear:J.a,OES_texture_float_linear:J.a,OESTextureHalfFloat:J.a,OES_texture_half_float:J.a,OESTextureHalfFloatLinear:J.a,OES_texture_half_float_linear:J.a,OESVertexArrayObject:J.a,OES_vertex_array_object:J.a,WebGLQuery:J.a,WebGLRenderbuffer:J.a,WebGLRenderingContext:J.a,WebGLSampler:J.a,WebGLShaderPrecisionFormat:J.a,WebGLSync:J.a,WebGLTimerQueryEXT:J.a,WebGLTransformFeedback:J.a,WebGLVertexArrayObject:J.a,WebGLVertexArrayObjectOES:J.a,WebGL:J.a,WebGL2RenderingContextBase:J.a,Database:J.a,SQLError:J.a,SQLResultSet:J.a,SQLTransaction:J.a,DataView:H.cz,ArrayBufferView:H.cz,Float32Array:H.cy,Float64Array:H.cy,Int16Array:H.hw,Int32Array:H.hx,Int8Array:H.hy,Uint16Array:H.hz,Uint32Array:H.hA,Uint8ClampedArray:H.dN,CanvasPixelArray:H.dN,Uint8Array:H.hB,HTMLBRElement:W.w,HTMLButtonElement:W.w,HTMLContentElement:W.w,HTMLDListElement:W.w,HTMLDataElement:W.w,HTMLDataListElement:W.w,HTMLDetailsElement:W.w,HTMLDialogElement:W.w,HTMLEmbedElement:W.w,HTMLFieldSetElement:W.w,HTMLHRElement:W.w,HTMLHeadingElement:W.w,HTMLHtmlElement:W.w,HTMLIFrameElement:W.w,HTMLInputElement:W.w,HTMLLIElement:W.w,HTMLLabelElement:W.w,HTMLLegendElement:W.w,HTMLLinkElement:W.w,HTMLMapElement:W.w,HTMLMenuElement:W.w,HTMLMetaElement:W.w,HTMLMeterElement:W.w,HTMLModElement:W.w,HTMLOListElement:W.w,HTMLObjectElement:W.w,HTMLOptGroupElement:W.w,HTMLOptionElement:W.w,HTMLOutputElement:W.w,HTMLParagraphElement:W.w,HTMLParamElement:W.w,HTMLPictureElement:W.w,HTMLPreElement:W.w,HTMLProgressElement:W.w,HTMLQuoteElement:W.w,HTMLScriptElement:W.w,HTMLShadowElement:W.w,HTMLSlotElement:W.w,HTMLSourceElement:W.w,HTMLSpanElement:W.w,HTMLStyleElement:W.w,HTMLTableCaptionElement:W.w,HTMLTableColElement:W.w,HTMLTextAreaElement:W.w,HTMLTimeElement:W.w,HTMLTitleElement:W.w,HTMLTrackElement:W.w,HTMLUListElement:W.w,HTMLUnknownElement:W.w,HTMLDirectoryElement:W.w,HTMLFontElement:W.w,HTMLFrameElement:W.w,HTMLFrameSetElement:W.w,HTMLMarqueeElement:W.w,HTMLElement:W.w,AccessibleNodeList:W.fi,HTMLAnchorElement:W.dc,HTMLAreaElement:W.fj,HTMLBaseElement:W.cg,Blob:W.de,HTMLBodyElement:W.bs,HTMLCanvasElement:W.bQ,CanvasRenderingContext2D:W.bR,CDATASection:W.bt,CharacterData:W.bt,Comment:W.bt,ProcessingInstruction:W.bt,Text:W.bt,CSSNumericValue:W.cn,CSSUnitValue:W.cn,CSSPerspective:W.fv,CSSCharsetRule:W.T,CSSConditionRule:W.T,CSSFontFaceRule:W.T,CSSGroupingRule:W.T,CSSImportRule:W.T,CSSKeyframeRule:W.T,MozCSSKeyframeRule:W.T,WebKitCSSKeyframeRule:W.T,CSSKeyframesRule:W.T,MozCSSKeyframesRule:W.T,WebKitCSSKeyframesRule:W.T,CSSMediaRule:W.T,CSSNamespaceRule:W.T,CSSPageRule:W.T,CSSRule:W.T,CSSStyleRule:W.T,CSSSupportsRule:W.T,CSSViewportRule:W.T,CSSStyleDeclaration:W.co,MSStyleCSSProperties:W.co,CSS2Properties:W.co,CSSImageValue:W.aO,CSSKeywordValue:W.aO,CSSPositionValue:W.aO,CSSResourceValue:W.aO,CSSURLImageValue:W.aO,CSSStyleValue:W.aO,CSSMatrixComponent:W.aP,CSSRotation:W.aP,CSSScale:W.aP,CSSSkew:W.aP,CSSTranslation:W.aP,CSSTransformComponent:W.aP,CSSTransformValue:W.fx,CSSUnparsedValue:W.fy,DataTransferItemList:W.fB,HTMLDivElement:W.aA,XMLDocument:W.cp,Document:W.cp,DOMException:W.fC,DOMImplementation:W.dm,ClientRectList:W.dn,DOMRectList:W.dn,DOMRectReadOnly:W.dp,DOMStringList:W.fD,DOMTokenList:W.fE,Element:W.U,AbortPaymentEvent:W.o,AnimationEvent:W.o,AnimationPlaybackEvent:W.o,ApplicationCacheErrorEvent:W.o,BackgroundFetchClickEvent:W.o,BackgroundFetchEvent:W.o,BackgroundFetchFailEvent:W.o,BackgroundFetchedEvent:W.o,BeforeInstallPromptEvent:W.o,BeforeUnloadEvent:W.o,BlobEvent:W.o,CanMakePaymentEvent:W.o,ClipboardEvent:W.o,CloseEvent:W.o,CustomEvent:W.o,DeviceMotionEvent:W.o,DeviceOrientationEvent:W.o,ErrorEvent:W.o,ExtendableEvent:W.o,ExtendableMessageEvent:W.o,FetchEvent:W.o,FontFaceSetLoadEvent:W.o,ForeignFetchEvent:W.o,GamepadEvent:W.o,HashChangeEvent:W.o,InstallEvent:W.o,MediaEncryptedEvent:W.o,MediaKeyMessageEvent:W.o,MediaQueryListEvent:W.o,MediaStreamEvent:W.o,MediaStreamTrackEvent:W.o,MessageEvent:W.o,MIDIConnectionEvent:W.o,MIDIMessageEvent:W.o,MutationEvent:W.o,NotificationEvent:W.o,PageTransitionEvent:W.o,PaymentRequestEvent:W.o,PaymentRequestUpdateEvent:W.o,PopStateEvent:W.o,PresentationConnectionAvailableEvent:W.o,PresentationConnectionCloseEvent:W.o,ProgressEvent:W.o,PromiseRejectionEvent:W.o,PushEvent:W.o,RTCDataChannelEvent:W.o,RTCDTMFToneChangeEvent:W.o,RTCPeerConnectionIceEvent:W.o,RTCTrackEvent:W.o,SecurityPolicyViolationEvent:W.o,SensorErrorEvent:W.o,SpeechRecognitionError:W.o,SpeechRecognitionEvent:W.o,SpeechSynthesisEvent:W.o,StorageEvent:W.o,SyncEvent:W.o,TrackEvent:W.o,TransitionEvent:W.o,WebKitTransitionEvent:W.o,VRDeviceEvent:W.o,VRDisplayEvent:W.o,VRSessionEvent:W.o,MojoInterfaceRequestEvent:W.o,ResourceProgressEvent:W.o,USBConnectionEvent:W.o,IDBVersionChangeEvent:W.o,AudioProcessingEvent:W.o,OfflineAudioCompletionEvent:W.o,WebGLContextEvent:W.o,Event:W.o,InputEvent:W.o,AbsoluteOrientationSensor:W.e,Accelerometer:W.e,AccessibleNode:W.e,AmbientLightSensor:W.e,Animation:W.e,ApplicationCache:W.e,DOMApplicationCache:W.e,OfflineResourceList:W.e,BackgroundFetchRegistration:W.e,BatteryManager:W.e,BroadcastChannel:W.e,CanvasCaptureMediaStreamTrack:W.e,DedicatedWorkerGlobalScope:W.e,EventSource:W.e,FileReader:W.e,FontFaceSet:W.e,Gyroscope:W.e,XMLHttpRequest:W.e,XMLHttpRequestEventTarget:W.e,XMLHttpRequestUpload:W.e,LinearAccelerationSensor:W.e,Magnetometer:W.e,MediaDevices:W.e,MediaKeySession:W.e,MediaQueryList:W.e,MediaRecorder:W.e,MediaSource:W.e,MediaStream:W.e,MediaStreamTrack:W.e,MessagePort:W.e,MIDIAccess:W.e,MIDIInput:W.e,MIDIOutput:W.e,MIDIPort:W.e,NetworkInformation:W.e,Notification:W.e,OffscreenCanvas:W.e,OrientationSensor:W.e,PaymentRequest:W.e,Performance:W.e,PermissionStatus:W.e,PresentationAvailability:W.e,PresentationConnection:W.e,PresentationConnectionList:W.e,PresentationRequest:W.e,RelativeOrientationSensor:W.e,RemotePlayback:W.e,RTCDataChannel:W.e,DataChannel:W.e,RTCDTMFSender:W.e,RTCPeerConnection:W.e,webkitRTCPeerConnection:W.e,mozRTCPeerConnection:W.e,ScreenOrientation:W.e,Sensor:W.e,ServiceWorker:W.e,ServiceWorkerContainer:W.e,ServiceWorkerGlobalScope:W.e,ServiceWorkerRegistration:W.e,SharedWorker:W.e,SharedWorkerGlobalScope:W.e,SpeechRecognition:W.e,SpeechSynthesis:W.e,SpeechSynthesisUtterance:W.e,VR:W.e,VRDevice:W.e,VRDisplay:W.e,VRSession:W.e,VisualViewport:W.e,WebSocket:W.e,Worker:W.e,WorkerGlobalScope:W.e,WorkerPerformance:W.e,BluetoothDevice:W.e,BluetoothRemoteGATTCharacteristic:W.e,Clipboard:W.e,MojoInterfaceInterceptor:W.e,USB:W.e,IDBDatabase:W.e,IDBOpenDBRequest:W.e,IDBVersionChangeRequest:W.e,IDBRequest:W.e,IDBTransaction:W.e,AnalyserNode:W.e,RealtimeAnalyserNode:W.e,AudioBufferSourceNode:W.e,AudioDestinationNode:W.e,AudioNode:W.e,AudioScheduledSourceNode:W.e,AudioWorkletNode:W.e,BiquadFilterNode:W.e,ChannelMergerNode:W.e,AudioChannelMerger:W.e,ChannelSplitterNode:W.e,AudioChannelSplitter:W.e,ConstantSourceNode:W.e,ConvolverNode:W.e,DelayNode:W.e,DynamicsCompressorNode:W.e,GainNode:W.e,AudioGainNode:W.e,IIRFilterNode:W.e,MediaElementAudioSourceNode:W.e,MediaStreamAudioDestinationNode:W.e,MediaStreamAudioSourceNode:W.e,OscillatorNode:W.e,Oscillator:W.e,PannerNode:W.e,AudioPannerNode:W.e,webkitAudioPannerNode:W.e,ScriptProcessorNode:W.e,JavaScriptAudioNode:W.e,StereoPannerNode:W.e,WaveShaperNode:W.e,EventTarget:W.e,File:W.aR,FileList:W.fP,FileWriter:W.fQ,HTMLFormElement:W.fU,Gamepad:W.aS,HTMLHeadElement:W.du,History:W.fZ,HTMLCollection:W.bV,HTMLFormControlsCollection:W.bV,HTMLOptionsCollection:W.bV,HTMLDocument:W.dv,ImageData:W.bz,HTMLImageElement:W.ct,KeyboardEvent:W.aV,Location:W.dE,HTMLAudioElement:W.cw,HTMLMediaElement:W.cw,MediaList:W.hp,MIDIInputMap:W.hq,MIDIOutputMap:W.hs,MimeType:W.aY,MimeTypeArray:W.hu,PointerEvent:W.ab,MouseEvent:W.ab,DragEvent:W.ab,DocumentFragment:W.D,ShadowRoot:W.D,DocumentType:W.D,Node:W.D,NodeList:W.cA,RadioNodeList:W.cA,Plugin:W.b_,PluginArray:W.hL,Range:W.dT,RTCStatsReport:W.hU,HTMLSelectElement:W.hX,SourceBuffer:W.b1,SourceBufferList:W.i6,SpeechGrammar:W.b2,SpeechGrammarList:W.i7,SpeechRecognitionResult:W.b3,Storage:W.ia,CSSStyleSheet:W.aH,StyleSheet:W.aH,HTMLTableCellElement:W.c4,HTMLTableDataCellElement:W.c4,HTMLTableHeaderCellElement:W.c4,HTMLTableElement:W.e1,HTMLTableRowElement:W.e2,HTMLTableSectionElement:W.ii,HTMLTemplateElement:W.cI,TextTrack:W.b4,TextTrackCue:W.aI,VTTCue:W.aI,TextTrackCueList:W.ik,TextTrackList:W.il,TimeRanges:W.iq,Touch:W.b6,TouchEvent:W.aJ,TouchList:W.iu,TrackDefaultList:W.iv,CompositionEvent:W.bF,FocusEvent:W.bF,TextEvent:W.bF,UIEvent:W.bF,URL:W.iM,HTMLVideoElement:W.j1,VideoTrackList:W.j2,WheelEvent:W.b9,Window:W.cV,DOMWindow:W.cV,Attr:W.cW,CSSRuleList:W.ja,ClientRect:W.eo,DOMRect:W.eo,GamepadList:W.jo,NamedNodeMap:W.eG,MozNamedAttrMap:W.eG,SpeechRecognitionResultList:W.jB,StyleSheetList:W.jC,SVGLength:P.bg,SVGLengthList:P.h9,SVGNumber:P.bi,SVGNumberList:P.hG,SVGPointList:P.hN,SVGScriptElement:P.cD,SVGStringList:P.ih,SVGAElement:P.p,SVGAnimateElement:P.p,SVGAnimateMotionElement:P.p,SVGAnimateTransformElement:P.p,SVGAnimationElement:P.p,SVGCircleElement:P.p,SVGClipPathElement:P.p,SVGDefsElement:P.p,SVGDescElement:P.p,SVGDiscardElement:P.p,SVGEllipseElement:P.p,SVGFEBlendElement:P.p,SVGFEColorMatrixElement:P.p,SVGFEComponentTransferElement:P.p,SVGFECompositeElement:P.p,SVGFEConvolveMatrixElement:P.p,SVGFEDiffuseLightingElement:P.p,SVGFEDisplacementMapElement:P.p,SVGFEDistantLightElement:P.p,SVGFEFloodElement:P.p,SVGFEFuncAElement:P.p,SVGFEFuncBElement:P.p,SVGFEFuncGElement:P.p,SVGFEFuncRElement:P.p,SVGFEGaussianBlurElement:P.p,SVGFEImageElement:P.p,SVGFEMergeElement:P.p,SVGFEMergeNodeElement:P.p,SVGFEMorphologyElement:P.p,SVGFEOffsetElement:P.p,SVGFEPointLightElement:P.p,SVGFESpecularLightingElement:P.p,SVGFESpotLightElement:P.p,SVGFETileElement:P.p,SVGFETurbulenceElement:P.p,SVGFilterElement:P.p,SVGForeignObjectElement:P.p,SVGGElement:P.p,SVGGeometryElement:P.p,SVGGraphicsElement:P.p,SVGImageElement:P.p,SVGLineElement:P.p,SVGLinearGradientElement:P.p,SVGMarkerElement:P.p,SVGMaskElement:P.p,SVGMetadataElement:P.p,SVGPathElement:P.p,SVGPatternElement:P.p,SVGPolygonElement:P.p,SVGPolylineElement:P.p,SVGRadialGradientElement:P.p,SVGRectElement:P.p,SVGSetElement:P.p,SVGStopElement:P.p,SVGStyleElement:P.p,SVGSVGElement:P.p,SVGSwitchElement:P.p,SVGSymbolElement:P.p,SVGTSpanElement:P.p,SVGTextContentElement:P.p,SVGTextElement:P.p,SVGTextPathElement:P.p,SVGTextPositioningElement:P.p,SVGTitleElement:P.p,SVGUseElement:P.p,SVGViewElement:P.p,SVGGradientElement:P.p,SVGComponentTransferFunctionElement:P.p,SVGFEDropShadowElement:P.p,SVGMPathElement:P.p,SVGElement:P.p,SVGTransform:P.bl,SVGTransformList:P.iw,AudioBuffer:P.fl,AudioParamMap:P.fm,AudioTrackList:P.fo,AudioContext:P.bO,webkitAudioContext:P.bO,BaseAudioContext:P.bO,OfflineAudioContext:P.hH,WebGLBuffer:P.df,WebGLFramebuffer:P.dt,WebGLProgram:P.dS,WebGL2RenderingContext:P.c2,WebGLShader:P.dW,WebGLTexture:P.e3,WebGLUniformLocation:P.ec,SQLResultSetRowList:P.i8})
hunkHelpers.setOrUpdateLeafTags({ArrayBuffer:true,AnimationEffectReadOnly:true,AnimationEffectTiming:true,AnimationEffectTimingReadOnly:true,AnimationTimeline:true,AnimationWorkletGlobalScope:true,AuthenticatorAssertionResponse:true,AuthenticatorAttestationResponse:true,AuthenticatorResponse:true,BackgroundFetchFetch:true,BackgroundFetchManager:true,BackgroundFetchSettledFetch:true,BarProp:true,BarcodeDetector:true,BluetoothRemoteGATTDescriptor:true,Body:true,BudgetState:true,CacheStorage:true,CanvasGradient:true,CanvasPattern:true,Client:true,Clients:true,CookieStore:true,Coordinates:true,Credential:true,CredentialUserData:true,CredentialsContainer:true,Crypto:true,CryptoKey:true,CSS:true,CSSVariableReferenceValue:true,CustomElementRegistry:true,DataTransfer:true,DataTransferItem:true,DeprecatedStorageInfo:true,DeprecatedStorageQuota:true,DeprecationReport:true,DetectedBarcode:true,DetectedFace:true,DetectedText:true,DeviceAcceleration:true,DeviceRotationRate:true,DirectoryEntry:true,DirectoryReader:true,DocumentOrShadowRoot:true,DocumentTimeline:true,DOMError:true,Iterator:true,DOMMatrix:true,DOMMatrixReadOnly:true,DOMParser:true,DOMPoint:true,DOMPointReadOnly:true,DOMQuad:true,DOMStringMap:true,Entry:true,External:true,FaceDetector:true,FederatedCredential:true,FileEntry:true,DOMFileSystem:true,FontFace:true,FontFaceSource:true,FormData:true,GamepadButton:true,GamepadPose:true,Geolocation:true,Position:true,Headers:true,HTMLHyperlinkElementUtils:true,IdleDeadline:true,ImageBitmap:true,ImageBitmapRenderingContext:true,ImageCapture:true,InputDeviceCapabilities:true,IntersectionObserver:true,IntersectionObserverEntry:true,InterventionReport:true,KeyframeEffect:true,KeyframeEffectReadOnly:true,MediaCapabilities:true,MediaCapabilitiesInfo:true,MediaDeviceInfo:true,MediaError:true,MediaKeyStatusMap:true,MediaKeySystemAccess:true,MediaKeys:true,MediaKeysPolicy:true,MediaMetadata:true,MediaSession:true,MediaSettingsRange:true,MemoryInfo:true,MessageChannel:true,Metadata:true,MutationObserver:true,WebKitMutationObserver:true,MutationRecord:true,NavigationPreloadManager:true,Navigator:true,NavigatorAutomationInformation:true,NavigatorConcurrentHardware:true,NavigatorCookies:true,NavigatorUserMediaError:true,NodeFilter:true,NodeIterator:true,NonDocumentTypeChildNode:true,NonElementParentNode:true,NoncedElement:true,OffscreenCanvasRenderingContext2D:true,OverconstrainedError:true,PaintRenderingContext2D:true,PaintSize:true,PaintWorkletGlobalScope:true,PasswordCredential:true,Path2D:true,PaymentAddress:true,PaymentInstruments:true,PaymentManager:true,PaymentResponse:true,PerformanceEntry:true,PerformanceLongTaskTiming:true,PerformanceMark:true,PerformanceMeasure:true,PerformanceNavigation:true,PerformanceNavigationTiming:true,PerformanceObserver:true,PerformanceObserverEntryList:true,PerformancePaintTiming:true,PerformanceResourceTiming:true,PerformanceServerTiming:true,PerformanceTiming:true,Permissions:true,PhotoCapabilities:true,PositionError:true,Presentation:true,PresentationReceiver:true,PublicKeyCredential:true,PushManager:true,PushMessageData:true,PushSubscription:true,PushSubscriptionOptions:true,RelatedApplication:true,ReportBody:true,ReportingObserver:true,ResizeObserver:true,ResizeObserverEntry:true,RTCCertificate:true,RTCIceCandidate:true,mozRTCIceCandidate:true,RTCLegacyStatsReport:true,RTCRtpContributingSource:true,RTCRtpReceiver:true,RTCRtpSender:true,RTCSessionDescription:true,mozRTCSessionDescription:true,RTCStatsResponse:true,Screen:true,ScrollState:true,ScrollTimeline:true,Selection:true,SharedArrayBuffer:true,SpeechRecognitionAlternative:true,SpeechSynthesisVoice:true,StaticRange:true,StorageManager:true,StyleMedia:true,StylePropertyMap:true,StylePropertyMapReadonly:true,SyncManager:true,TaskAttributionTiming:true,TextDetector:true,TextMetrics:true,TrackDefault:true,TreeWalker:true,TrustedHTML:true,TrustedScriptURL:true,TrustedURL:true,UnderlyingSourceBase:true,URLSearchParams:true,VRCoordinateSystem:true,VRDisplayCapabilities:true,VREyeParameters:true,VRFrameData:true,VRFrameOfReference:true,VRPose:true,VRStageBounds:true,VRStageBoundsPoint:true,VRStageParameters:true,ValidityState:true,VideoPlaybackQuality:true,VideoTrack:true,VTTRegion:true,WindowClient:true,WorkletAnimation:true,WorkletGlobalScope:true,XPathEvaluator:true,XPathExpression:true,XPathNSResolver:true,XPathResult:true,XMLSerializer:true,XSLTProcessor:true,Bluetooth:true,BluetoothCharacteristicProperties:true,BluetoothRemoteGATTServer:true,BluetoothRemoteGATTService:true,BluetoothUUID:true,BudgetService:true,Cache:true,DOMFileSystemSync:true,DirectoryEntrySync:true,DirectoryReaderSync:true,EntrySync:true,FileEntrySync:true,FileReaderSync:true,FileWriterSync:true,HTMLAllCollection:true,Mojo:true,MojoHandle:true,MojoWatcher:true,NFC:true,PagePopupController:true,Report:true,Request:true,Response:true,SubtleCrypto:true,USBAlternateInterface:true,USBConfiguration:true,USBDevice:true,USBEndpoint:true,USBInTransferResult:true,USBInterface:true,USBIsochronousInTransferPacket:true,USBIsochronousInTransferResult:true,USBIsochronousOutTransferPacket:true,USBIsochronousOutTransferResult:true,USBOutTransferResult:true,WorkerLocation:true,WorkerNavigator:true,Worklet:true,IDBCursor:true,IDBCursorWithValue:true,IDBFactory:true,IDBIndex:true,IDBKeyRange:true,IDBObjectStore:true,IDBObservation:true,IDBObserver:true,IDBObserverChanges:true,SVGAngle:true,SVGAnimatedAngle:true,SVGAnimatedBoolean:true,SVGAnimatedEnumeration:true,SVGAnimatedInteger:true,SVGAnimatedLength:true,SVGAnimatedLengthList:true,SVGAnimatedNumber:true,SVGAnimatedNumberList:true,SVGAnimatedPreserveAspectRatio:true,SVGAnimatedRect:true,SVGAnimatedString:true,SVGAnimatedTransformList:true,SVGMatrix:true,SVGPoint:true,SVGPreserveAspectRatio:true,SVGRect:true,SVGUnitTypes:true,AudioListener:true,AudioParam:true,AudioTrack:true,AudioWorkletGlobalScope:true,AudioWorkletProcessor:true,PeriodicWave:true,WebGLActiveInfo:true,ANGLEInstancedArrays:true,ANGLE_instanced_arrays:true,WebGLCanvas:true,WebGLColorBufferFloat:true,WebGLCompressedTextureASTC:true,WebGLCompressedTextureATC:true,WEBGL_compressed_texture_atc:true,WebGLCompressedTextureETC1:true,WEBGL_compressed_texture_etc1:true,WebGLCompressedTextureETC:true,WebGLCompressedTexturePVRTC:true,WEBGL_compressed_texture_pvrtc:true,WebGLCompressedTextureS3TC:true,WEBGL_compressed_texture_s3tc:true,WebGLCompressedTextureS3TCsRGB:true,WebGLDebugRendererInfo:true,WEBGL_debug_renderer_info:true,WebGLDebugShaders:true,WEBGL_debug_shaders:true,WebGLDepthTexture:true,WEBGL_depth_texture:true,WebGLDrawBuffers:true,WEBGL_draw_buffers:true,EXTsRGB:true,EXT_sRGB:true,EXTBlendMinMax:true,EXT_blend_minmax:true,EXTColorBufferFloat:true,EXTColorBufferHalfFloat:true,EXTDisjointTimerQuery:true,EXTDisjointTimerQueryWebGL2:true,EXTFragDepth:true,EXT_frag_depth:true,EXTShaderTextureLOD:true,EXT_shader_texture_lod:true,EXTTextureFilterAnisotropic:true,EXT_texture_filter_anisotropic:true,WebGLGetBufferSubDataAsync:true,WebGLLoseContext:true,WebGLExtensionLoseContext:true,WEBGL_lose_context:true,OESElementIndexUint:true,OES_element_index_uint:true,OESStandardDerivatives:true,OES_standard_derivatives:true,OESTextureFloat:true,OES_texture_float:true,OESTextureFloatLinear:true,OES_texture_float_linear:true,OESTextureHalfFloat:true,OES_texture_half_float:true,OESTextureHalfFloatLinear:true,OES_texture_half_float_linear:true,OESVertexArrayObject:true,OES_vertex_array_object:true,WebGLQuery:true,WebGLRenderbuffer:true,WebGLRenderingContext:true,WebGLSampler:true,WebGLShaderPrecisionFormat:true,WebGLSync:true,WebGLTimerQueryEXT:true,WebGLTransformFeedback:true,WebGLVertexArrayObject:true,WebGLVertexArrayObjectOES:true,WebGL:true,WebGL2RenderingContextBase:true,Database:true,SQLError:true,SQLResultSet:true,SQLTransaction:true,DataView:true,ArrayBufferView:false,Float32Array:true,Float64Array:true,Int16Array:true,Int32Array:true,Int8Array:true,Uint16Array:true,Uint32Array:true,Uint8ClampedArray:true,CanvasPixelArray:true,Uint8Array:false,HTMLBRElement:true,HTMLButtonElement:true,HTMLContentElement:true,HTMLDListElement:true,HTMLDataElement:true,HTMLDataListElement:true,HTMLDetailsElement:true,HTMLDialogElement:true,HTMLEmbedElement:true,HTMLFieldSetElement:true,HTMLHRElement:true,HTMLHeadingElement:true,HTMLHtmlElement:true,HTMLIFrameElement:true,HTMLInputElement:true,HTMLLIElement:true,HTMLLabelElement:true,HTMLLegendElement:true,HTMLLinkElement:true,HTMLMapElement:true,HTMLMenuElement:true,HTMLMetaElement:true,HTMLMeterElement:true,HTMLModElement:true,HTMLOListElement:true,HTMLObjectElement:true,HTMLOptGroupElement:true,HTMLOptionElement:true,HTMLOutputElement:true,HTMLParagraphElement:true,HTMLParamElement:true,HTMLPictureElement:true,HTMLPreElement:true,HTMLProgressElement:true,HTMLQuoteElement:true,HTMLScriptElement:true,HTMLShadowElement:true,HTMLSlotElement:true,HTMLSourceElement:true,HTMLSpanElement:true,HTMLStyleElement:true,HTMLTableCaptionElement:true,HTMLTableColElement:true,HTMLTextAreaElement:true,HTMLTimeElement:true,HTMLTitleElement:true,HTMLTrackElement:true,HTMLUListElement:true,HTMLUnknownElement:true,HTMLDirectoryElement:true,HTMLFontElement:true,HTMLFrameElement:true,HTMLFrameSetElement:true,HTMLMarqueeElement:true,HTMLElement:false,AccessibleNodeList:true,HTMLAnchorElement:true,HTMLAreaElement:true,HTMLBaseElement:true,Blob:false,HTMLBodyElement:true,HTMLCanvasElement:true,CanvasRenderingContext2D:true,CDATASection:true,CharacterData:true,Comment:true,ProcessingInstruction:true,Text:true,CSSNumericValue:true,CSSUnitValue:true,CSSPerspective:true,CSSCharsetRule:true,CSSConditionRule:true,CSSFontFaceRule:true,CSSGroupingRule:true,CSSImportRule:true,CSSKeyframeRule:true,MozCSSKeyframeRule:true,WebKitCSSKeyframeRule:true,CSSKeyframesRule:true,MozCSSKeyframesRule:true,WebKitCSSKeyframesRule:true,CSSMediaRule:true,CSSNamespaceRule:true,CSSPageRule:true,CSSRule:true,CSSStyleRule:true,CSSSupportsRule:true,CSSViewportRule:true,CSSStyleDeclaration:true,MSStyleCSSProperties:true,CSS2Properties:true,CSSImageValue:true,CSSKeywordValue:true,CSSPositionValue:true,CSSResourceValue:true,CSSURLImageValue:true,CSSStyleValue:false,CSSMatrixComponent:true,CSSRotation:true,CSSScale:true,CSSSkew:true,CSSTranslation:true,CSSTransformComponent:false,CSSTransformValue:true,CSSUnparsedValue:true,DataTransferItemList:true,HTMLDivElement:true,XMLDocument:true,Document:false,DOMException:true,DOMImplementation:true,ClientRectList:true,DOMRectList:true,DOMRectReadOnly:false,DOMStringList:true,DOMTokenList:true,Element:false,AbortPaymentEvent:true,AnimationEvent:true,AnimationPlaybackEvent:true,ApplicationCacheErrorEvent:true,BackgroundFetchClickEvent:true,BackgroundFetchEvent:true,BackgroundFetchFailEvent:true,BackgroundFetchedEvent:true,BeforeInstallPromptEvent:true,BeforeUnloadEvent:true,BlobEvent:true,CanMakePaymentEvent:true,ClipboardEvent:true,CloseEvent:true,CustomEvent:true,DeviceMotionEvent:true,DeviceOrientationEvent:true,ErrorEvent:true,ExtendableEvent:true,ExtendableMessageEvent:true,FetchEvent:true,FontFaceSetLoadEvent:true,ForeignFetchEvent:true,GamepadEvent:true,HashChangeEvent:true,InstallEvent:true,MediaEncryptedEvent:true,MediaKeyMessageEvent:true,MediaQueryListEvent:true,MediaStreamEvent:true,MediaStreamTrackEvent:true,MessageEvent:true,MIDIConnectionEvent:true,MIDIMessageEvent:true,MutationEvent:true,NotificationEvent:true,PageTransitionEvent:true,PaymentRequestEvent:true,PaymentRequestUpdateEvent:true,PopStateEvent:true,PresentationConnectionAvailableEvent:true,PresentationConnectionCloseEvent:true,ProgressEvent:true,PromiseRejectionEvent:true,PushEvent:true,RTCDataChannelEvent:true,RTCDTMFToneChangeEvent:true,RTCPeerConnectionIceEvent:true,RTCTrackEvent:true,SecurityPolicyViolationEvent:true,SensorErrorEvent:true,SpeechRecognitionError:true,SpeechRecognitionEvent:true,SpeechSynthesisEvent:true,StorageEvent:true,SyncEvent:true,TrackEvent:true,TransitionEvent:true,WebKitTransitionEvent:true,VRDeviceEvent:true,VRDisplayEvent:true,VRSessionEvent:true,MojoInterfaceRequestEvent:true,ResourceProgressEvent:true,USBConnectionEvent:true,IDBVersionChangeEvent:true,AudioProcessingEvent:true,OfflineAudioCompletionEvent:true,WebGLContextEvent:true,Event:false,InputEvent:false,AbsoluteOrientationSensor:true,Accelerometer:true,AccessibleNode:true,AmbientLightSensor:true,Animation:true,ApplicationCache:true,DOMApplicationCache:true,OfflineResourceList:true,BackgroundFetchRegistration:true,BatteryManager:true,BroadcastChannel:true,CanvasCaptureMediaStreamTrack:true,DedicatedWorkerGlobalScope:true,EventSource:true,FileReader:true,FontFaceSet:true,Gyroscope:true,XMLHttpRequest:true,XMLHttpRequestEventTarget:true,XMLHttpRequestUpload:true,LinearAccelerationSensor:true,Magnetometer:true,MediaDevices:true,MediaKeySession:true,MediaQueryList:true,MediaRecorder:true,MediaSource:true,MediaStream:true,MediaStreamTrack:true,MessagePort:true,MIDIAccess:true,MIDIInput:true,MIDIOutput:true,MIDIPort:true,NetworkInformation:true,Notification:true,OffscreenCanvas:true,OrientationSensor:true,PaymentRequest:true,Performance:true,PermissionStatus:true,PresentationAvailability:true,PresentationConnection:true,PresentationConnectionList:true,PresentationRequest:true,RelativeOrientationSensor:true,RemotePlayback:true,RTCDataChannel:true,DataChannel:true,RTCDTMFSender:true,RTCPeerConnection:true,webkitRTCPeerConnection:true,mozRTCPeerConnection:true,ScreenOrientation:true,Sensor:true,ServiceWorker:true,ServiceWorkerContainer:true,ServiceWorkerGlobalScope:true,ServiceWorkerRegistration:true,SharedWorker:true,SharedWorkerGlobalScope:true,SpeechRecognition:true,SpeechSynthesis:true,SpeechSynthesisUtterance:true,VR:true,VRDevice:true,VRDisplay:true,VRSession:true,VisualViewport:true,WebSocket:true,Worker:true,WorkerGlobalScope:true,WorkerPerformance:true,BluetoothDevice:true,BluetoothRemoteGATTCharacteristic:true,Clipboard:true,MojoInterfaceInterceptor:true,USB:true,IDBDatabase:true,IDBOpenDBRequest:true,IDBVersionChangeRequest:true,IDBRequest:true,IDBTransaction:true,AnalyserNode:true,RealtimeAnalyserNode:true,AudioBufferSourceNode:true,AudioDestinationNode:true,AudioNode:true,AudioScheduledSourceNode:true,AudioWorkletNode:true,BiquadFilterNode:true,ChannelMergerNode:true,AudioChannelMerger:true,ChannelSplitterNode:true,AudioChannelSplitter:true,ConstantSourceNode:true,ConvolverNode:true,DelayNode:true,DynamicsCompressorNode:true,GainNode:true,AudioGainNode:true,IIRFilterNode:true,MediaElementAudioSourceNode:true,MediaStreamAudioDestinationNode:true,MediaStreamAudioSourceNode:true,OscillatorNode:true,Oscillator:true,PannerNode:true,AudioPannerNode:true,webkitAudioPannerNode:true,ScriptProcessorNode:true,JavaScriptAudioNode:true,StereoPannerNode:true,WaveShaperNode:true,EventTarget:false,File:true,FileList:true,FileWriter:true,HTMLFormElement:true,Gamepad:true,HTMLHeadElement:true,History:true,HTMLCollection:true,HTMLFormControlsCollection:true,HTMLOptionsCollection:true,HTMLDocument:true,ImageData:true,HTMLImageElement:true,KeyboardEvent:true,Location:true,HTMLAudioElement:true,HTMLMediaElement:false,MediaList:true,MIDIInputMap:true,MIDIOutputMap:true,MimeType:true,MimeTypeArray:true,PointerEvent:true,MouseEvent:false,DragEvent:false,DocumentFragment:true,ShadowRoot:true,DocumentType:true,Node:false,NodeList:true,RadioNodeList:true,Plugin:true,PluginArray:true,Range:true,RTCStatsReport:true,HTMLSelectElement:true,SourceBuffer:true,SourceBufferList:true,SpeechGrammar:true,SpeechGrammarList:true,SpeechRecognitionResult:true,Storage:true,CSSStyleSheet:true,StyleSheet:true,HTMLTableCellElement:true,HTMLTableDataCellElement:true,HTMLTableHeaderCellElement:true,HTMLTableElement:true,HTMLTableRowElement:true,HTMLTableSectionElement:true,HTMLTemplateElement:true,TextTrack:true,TextTrackCue:true,VTTCue:true,TextTrackCueList:true,TextTrackList:true,TimeRanges:true,Touch:true,TouchEvent:true,TouchList:true,TrackDefaultList:true,CompositionEvent:true,FocusEvent:true,TextEvent:true,UIEvent:false,URL:true,HTMLVideoElement:true,VideoTrackList:true,WheelEvent:true,Window:true,DOMWindow:true,Attr:true,CSSRuleList:true,ClientRect:true,DOMRect:true,GamepadList:true,NamedNodeMap:true,MozNamedAttrMap:true,SpeechRecognitionResultList:true,StyleSheetList:true,SVGLength:true,SVGLengthList:true,SVGNumber:true,SVGNumberList:true,SVGPointList:true,SVGScriptElement:true,SVGStringList:true,SVGAElement:true,SVGAnimateElement:true,SVGAnimateMotionElement:true,SVGAnimateTransformElement:true,SVGAnimationElement:true,SVGCircleElement:true,SVGClipPathElement:true,SVGDefsElement:true,SVGDescElement:true,SVGDiscardElement:true,SVGEllipseElement:true,SVGFEBlendElement:true,SVGFEColorMatrixElement:true,SVGFEComponentTransferElement:true,SVGFECompositeElement:true,SVGFEConvolveMatrixElement:true,SVGFEDiffuseLightingElement:true,SVGFEDisplacementMapElement:true,SVGFEDistantLightElement:true,SVGFEFloodElement:true,SVGFEFuncAElement:true,SVGFEFuncBElement:true,SVGFEFuncGElement:true,SVGFEFuncRElement:true,SVGFEGaussianBlurElement:true,SVGFEImageElement:true,SVGFEMergeElement:true,SVGFEMergeNodeElement:true,SVGFEMorphologyElement:true,SVGFEOffsetElement:true,SVGFEPointLightElement:true,SVGFESpecularLightingElement:true,SVGFESpotLightElement:true,SVGFETileElement:true,SVGFETurbulenceElement:true,SVGFilterElement:true,SVGForeignObjectElement:true,SVGGElement:true,SVGGeometryElement:true,SVGGraphicsElement:true,SVGImageElement:true,SVGLineElement:true,SVGLinearGradientElement:true,SVGMarkerElement:true,SVGMaskElement:true,SVGMetadataElement:true,SVGPathElement:true,SVGPatternElement:true,SVGPolygonElement:true,SVGPolylineElement:true,SVGRadialGradientElement:true,SVGRectElement:true,SVGSetElement:true,SVGStopElement:true,SVGStyleElement:true,SVGSVGElement:true,SVGSwitchElement:true,SVGSymbolElement:true,SVGTSpanElement:true,SVGTextContentElement:true,SVGTextElement:true,SVGTextPathElement:true,SVGTextPositioningElement:true,SVGTitleElement:true,SVGUseElement:true,SVGViewElement:true,SVGGradientElement:true,SVGComponentTransferFunctionElement:true,SVGFEDropShadowElement:true,SVGMPathElement:true,SVGElement:false,SVGTransform:true,SVGTransformList:true,AudioBuffer:true,AudioParamMap:true,AudioTrackList:true,AudioContext:true,webkitAudioContext:true,BaseAudioContext:false,OfflineAudioContext:true,WebGLBuffer:true,WebGLFramebuffer:true,WebGLProgram:true,WebGL2RenderingContext:true,WebGLShader:true,WebGLTexture:true,WebGLUniformLocation:true,SQLResultSetRowList:true})
H.dL.$nativeSuperclassTag="ArrayBufferView"
H.cY.$nativeSuperclassTag="ArrayBufferView"
H.cZ.$nativeSuperclassTag="ArrayBufferView"
H.cy.$nativeSuperclassTag="ArrayBufferView"
H.d_.$nativeSuperclassTag="ArrayBufferView"
H.d0.$nativeSuperclassTag="ArrayBufferView"
H.dM.$nativeSuperclassTag="ArrayBufferView"
W.d1.$nativeSuperclassTag="EventTarget"
W.d2.$nativeSuperclassTag="EventTarget"
W.d3.$nativeSuperclassTag="EventTarget"
W.d4.$nativeSuperclassTag="EventTarget"})()
convertAllToFastObject(w)
convertToFastObject($);(function(a){if(typeof document==="undefined"){a(null)
return}if(typeof document.currentScript!='undefined'){a(document.currentScript)
return}var u=document.scripts
function onLoad(b){for(var s=0;s<u.length;++s)u[s].removeEventListener("load",onLoad,false)
a(b.target)}for(var t=0;t<u.length;++t)u[t].addEventListener("load",onLoad,false)})(function(a){v.currentScript=a
if(typeof dartMainRunner==="function")dartMainRunner(B.lF,[])
else B.lF([])})})()
//# sourceMappingURL=test.dart.js.map
