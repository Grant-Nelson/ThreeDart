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
a[c]=function(){a[c]=function(){H.np(b)}
var t
var s=d
try{if(a[b]===u){t=a[b]=s
t=a[b]=d()}else t=a[b]}finally{if(t===s)a[b]=null
a[c]=function(){return this[b]}}return t}}function makeConstList(a){a.immutable$list=Array
a.fixed$length=Array
return a}function convertToFastObject(a){function t(){}t.prototype=a
new t()
return a}function convertAllToFastObject(a){for(var u=0;u<a.length;++u)convertToFastObject(a[u])}var y=0
function tearOffGetter(a,b,c,d,e){return e?new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+d+y+++"(receiver) {"+"if (c === null) c = "+"H.ko"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, true, name);"+"return new c(this, funcs[0], receiver, name);"+"}")(a,b,c,d,H,null):new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+d+y+++"() {"+"if (c === null) c = "+"H.ko"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, false, name);"+"return new c(this, funcs[0], null, name);"+"}")(a,b,c,d,H,null)}function tearOff(a,b,c,d,e,f){var u=null
return d?function(){if(u===null)u=H.ko(this,a,b,c,true,false,e).prototype
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
if(w[u][a])return w[u][a]}}var C={},H={k8:function k8(a){this.a=a},
k6:function(){return new P.cD("No element")},
md:function(){return new P.cD("Too many elements")},
q:function q(a){this.a=a},
fH:function fH(){},
bU:function bU(){},
cq:function cq(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=null
_.$ti=d},
he:function he(a,b,c){this.a=a
this.b=b
this.$ti=c},
hf:function hf(a,b,c){var _=this
_.a=null
_.b=a
_.c=b
_.$ti=c},
hg:function hg(a,b,c){this.a=a
this.b=b
this.$ti=c},
cS:function cS(a,b,c){this.a=a
this.b=b
this.$ti=c},
iY:function iY(a,b,c){this.a=a
this.b=b
this.$ti=c},
bR:function bR(){},
ee:function ee(){},
ed:function ed(){},
c9:function(a){var u,t
u=H.H(v.mangledGlobalNames[a])
if(typeof u==="string")return u
t="minified:"+a
return t},
n6:function(a){return v.types[H.a8(a)]},
nd:function(a,b){var u
if(b!=null){u=b.x
if(u!=null)return u}return!!J.a_(a).$iF},
l:function(a){var u
if(typeof a==="string")return a
if(typeof a==="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
u=J.ar(a)
if(typeof u!=="string")throw H.i(H.c3(a))
return u},
mt:function(a){var u,t,s
u=a.$reflectionInfo
if(u==null)return
u=J.h2(u)
t=u[0]
s=u[1]
return new H.hM(a,u,(t&2)===2,t>>2,s>>1,(s&1)===1,u[2])},
cz:function(a){var u=a.$identityHash
if(u==null){u=Math.random()*0x3fffffff|0
a.$identityHash=u}return u},
bX:function(a){return H.mk(a)+H.kl(H.bH(a),0,null)},
mk:function(a){var u,t,s,r,q,p,o,n,m
u=J.a_(a)
t=u.constructor
if(typeof t=="function"){s=t.name
r=typeof s==="string"?s:null}else r=null
q=r==null
if(q||u===C.N||!!u.$icR){p=C.B(a)
if(q)r=p
if(p==="Object"){o=a.constructor
if(typeof o=="function"){n=String(o).match(/^\s*function\s*([\w$]*)\s*\(/)
m=n==null?null:n[1]
if(typeof m==="string"&&/^\w+$/.test(m))r=m}}return r}r=r
return H.c9(r.length>1&&C.i.aN(r,0)===36?C.i.bf(r,1):r)},
l_:function(a){var u,t,s,r,q
u=a.length
if(u<=500)return String.fromCharCode.apply(null,a)
for(t="",s=0;s<u;s=r){r=s+500
q=r<u?r:u
t+=String.fromCharCode.apply(null,a.slice(s,q))}return t},
ms:function(a){var u,t,s,r
u=H.c([],[P.C])
for(t=a.length,s=0;s<a.length;a.length===t||(0,H.A)(a),++s){r=a[s]
if(typeof r!=="number"||Math.floor(r)!==r)throw H.i(H.c3(r))
if(r<=65535)C.a.h(u,r)
else if(r<=1114111){C.a.h(u,55296+(C.h.bl(r-65536,10)&1023))
C.a.h(u,56320+(r&1023))}else throw H.i(H.c3(r))}return H.l_(u)},
l0:function(a){var u,t,s
for(u=a.length,t=0;t<u;++t){s=a[t]
if(typeof s!=="number"||Math.floor(s)!==s)throw H.i(H.c3(s))
if(s<0)throw H.i(H.c3(s))
if(s>65535)return H.ms(a)}return H.l_(a)},
ka:function(a){var u
if(a<=65535)return String.fromCharCode(a)
if(a<=1114111){u=a-65536
return String.fromCharCode((55296|C.h.bl(u,10))>>>0,56320|u&1023)}throw H.i(P.aA(a,0,1114111,null,null))},
bW:function(a){if(a.date===void 0)a.date=new Date(a.a)
return a.date},
mr:function(a){var u=H.bW(a).getFullYear()+0
return u},
mp:function(a){var u=H.bW(a).getMonth()+1
return u},
ml:function(a){var u=H.bW(a).getDate()+0
return u},
mm:function(a){var u=H.bW(a).getHours()+0
return u},
mo:function(a){var u=H.bW(a).getMinutes()+0
return u},
mq:function(a){var u=H.bW(a).getSeconds()+0
return u},
mn:function(a){var u=H.bW(a).getMilliseconds()+0
return u},
G:function(a){throw H.i(H.c3(a))},
k:function(a,b){if(a==null)J.bK(a)
throw H.i(H.d8(a,b))},
d8:function(a,b){var u,t
if(typeof b!=="number"||Math.floor(b)!==b)return new P.aE(!0,b,"index",null)
u=H.a8(J.bK(a))
if(!(b<0)){if(typeof u!=="number")return H.G(u)
t=b>=u}else t=!0
if(t)return P.W(b,a,"index",null,u)
return P.hK(b,"index",null)},
n3:function(a,b,c){if(a>c)return new P.bY(0,c,!0,a,"start","Invalid value")
if(b!=null)if(b<a||b>c)return new P.bY(a,c,!0,b,"end","Invalid value")
return new P.aE(!0,b,"end",null)},
c3:function(a){return new P.aE(!0,a,null,null)},
n_:function(a){if(typeof a!=="number")throw H.i(H.c3(a))
return a},
i:function(a){var u
if(a==null)a=new P.dP()
u=new Error()
u.dartException=a
if("defineProperty" in Object){Object.defineProperty(u,"message",{get:H.lD})
u.name=""}else u.toString=H.lD
return u},
lD:function(){return J.ar(this.dartException)},
t:function(a){throw H.i(a)},
A:function(a){throw H.i(P.br(a))},
b4:function(a){var u,t,s,r,q,p
a=a.replace(String({}),'$receiver$').replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
u=a.match(/\\\$[a-zA-Z]+\\\$/g)
if(u==null)u=H.c([],[P.f])
t=u.indexOf("\\$arguments\\$")
s=u.indexOf("\\$argumentsExpr\\$")
r=u.indexOf("\\$expr\\$")
q=u.indexOf("\\$method\\$")
p=u.indexOf("\\$receiver\\$")
return new H.iv(a.replace(new RegExp('\\\\\\$arguments\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$argumentsExpr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$expr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$method\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$receiver\\\\\\$','g'),'((?:x|[^x])*)'),t,s,r,q,p)},
iw:function(a){return function($expr$){var $argumentsExpr$='$arguments$'
try{$expr$.$method$($argumentsExpr$)}catch(u){return u.message}}(a)},
la:function(a){return function($expr$){try{$expr$.$method$}catch(u){return u.message}}(a)},
kU:function(a,b){return new H.hB(a,b==null?null:b.method)},
k9:function(a,b){var u,t
u=b==null
t=u?null:b.method
return new H.h5(a,t,u?null:b.receiver)},
ay:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g
u=new H.jW(a)
if(a==null)return
if(typeof a!=="object")return a
if("dartException" in a)return u.$1(a.dartException)
else if(!("message" in a))return a
t=a.message
if("number" in a&&typeof a.number=="number"){s=a.number
r=s&65535
if((C.h.bl(s,16)&8191)===10)switch(r){case 438:return u.$1(H.k9(H.l(t)+" (Error "+r+")",null))
case 445:case 5007:return u.$1(H.kU(H.l(t)+" (Error "+r+")",null))}}if(a instanceof TypeError){q=$.lG()
p=$.lH()
o=$.lI()
n=$.lJ()
m=$.lM()
l=$.lN()
k=$.lL()
$.lK()
j=$.lP()
i=$.lO()
h=q.ah(t)
if(h!=null)return u.$1(H.k9(H.H(t),h))
else{h=p.ah(t)
if(h!=null){h.method="call"
return u.$1(H.k9(H.H(t),h))}else{h=o.ah(t)
if(h==null){h=n.ah(t)
if(h==null){h=m.ah(t)
if(h==null){h=l.ah(t)
if(h==null){h=k.ah(t)
if(h==null){h=n.ah(t)
if(h==null){h=j.ah(t)
if(h==null){h=i.ah(t)
g=h!=null}else g=!0}else g=!0}else g=!0}else g=!0}else g=!0}else g=!0}else g=!0
if(g)return u.$1(H.kU(H.H(t),h))}}return u.$1(new H.iH(typeof t==="string"?t:""))}if(a instanceof RangeError){if(typeof t==="string"&&t.indexOf("call stack")!==-1)return new P.e_()
t=function(b){try{return String(b)}catch(f){}return null}(a)
return u.$1(new P.aE(!1,null,null,typeof t==="string"?t.replace(/^RangeError:\s*/,""):t))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof t==="string"&&t==="too much recursion")return new P.e_()
return a},
c6:function(a){var u
if(a==null)return new H.eU(a)
u=a.$cachedTrace
if(u!=null)return u
return a.$cachedTrace=new H.eU(a)},
n5:function(a,b){var u,t,s,r
u=a.length
for(t=0;t<u;t=r){s=t+1
r=s+1
b.Y(0,a[t],a[s])}return b},
nc:function(a,b,c,d,e,f){H.j(a,"$ibv")
switch(H.a8(b)){case 0:return a.$0()
case 1:return a.$1(c)
case 2:return a.$2(c,d)
case 3:return a.$3(c,d,e)
case 4:return a.$4(c,d,e,f)}throw H.i(P.r("Unsupported number of arguments for wrapped closure"))},
c4:function(a,b){var u
H.a8(b)
if(a==null)return
u=a.$identity
if(!!u)return u
u=function(c,d,e){return function(f,g,h,i){return e(c,d,f,g,h,i)}}(a,b,H.nc)
a.$identity=u
return u},
m6:function(a,b,c,d,e,f,g){var u,t,s,r,q,p,o,n,m,l,k,j,i
u=b[0]
t=u.$callName
if(!!J.a_(d).$ib){u.$reflectionInfo=d
s=H.mt(u).r}else s=d
r=e?Object.create(new H.i5().constructor.prototype):Object.create(new H.cc(null,null,null,null).constructor.prototype)
r.$initialize=r.constructor
if(e)q=function static_tear_off(){this.$initialize()}
else{p=$.aL
if(typeof p!=="number")return p.G()
$.aL=p+1
p=new Function("a,b,c,d"+p,"this.$initialize(a,b,c,d"+p+")")
q=p}r.constructor=q
q.prototype=r
if(!e){o=H.kG(a,u,f)
o.$reflectionInfo=d}else{r.$static_name=g
o=u}if(typeof s=="number")n=function(h,a0){return function(){return h(a0)}}(H.n6,s)
else if(typeof s=="function")if(e)n=s
else{m=f?H.kE:H.k_
n=function(h,a0){return function(){return h.apply({$receiver:a0(this)},arguments)}}(s,m)}else throw H.i("Error in reflectionInfo.")
r.$S=n
r[t]=o
for(l=o,k=1;k<b.length;++k){j=b[k]
i=j.$callName
if(i!=null){j=e?j:H.kG(a,j,f)
r[i]=j}if(k===c){j.$reflectionInfo=d
l=j}}r.$C=l
r.$R=u.$R
r.$D=u.$D
return q},
m3:function(a,b,c,d){var u=H.k_
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,u)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,u)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,u)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,u)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,u)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,u)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,u)}},
kG:function(a,b,c){var u,t,s,r,q,p,o
if(c)return H.m5(a,b)
u=b.$stubName
t=b.length
s=a[u]
r=b==null?s==null:b===s
q=!r||t>=27
if(q)return H.m3(t,!r,u,b)
if(t===0){r=$.aL
if(typeof r!=="number")return r.G()
$.aL=r+1
p="self"+r
r="return function(){var "+p+" = this."
q=$.cd
if(q==null){q=H.fq("self")
$.cd=q}return new Function(r+H.l(q)+";return "+p+"."+H.l(u)+"();}")()}o="abcdefghijklmnopqrstuvwxyz".split("").splice(0,t).join(",")
r=$.aL
if(typeof r!=="number")return r.G()
$.aL=r+1
o+=r
r="return function("+o+"){return this."
q=$.cd
if(q==null){q=H.fq("self")
$.cd=q}return new Function(r+H.l(q)+"."+H.l(u)+"("+o+");}")()},
m4:function(a,b,c,d){var u,t
u=H.k_
t=H.kE
switch(b?-1:a){case 0:throw H.i(H.mw("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,u,t)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,u,t)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,u,t)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,u,t)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,u,t)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,u,t)
default:return function(e,f,g,h){return function(){h=[g(this)]
Array.prototype.push.apply(h,arguments)
return e.apply(f(this),h)}}(d,u,t)}},
m5:function(a,b){var u,t,s,r,q,p,o,n
u=$.cd
if(u==null){u=H.fq("self")
$.cd=u}t=$.kD
if(t==null){t=H.fq("receiver")
$.kD=t}s=b.$stubName
r=b.length
q=a[s]
p=b==null?q==null:b===q
o=!p||r>=28
if(o)return H.m4(r,!p,s,b)
if(r===1){u="return function(){return this."+H.l(u)+"."+H.l(s)+"(this."+H.l(t)+");"
t=$.aL
if(typeof t!=="number")return t.G()
$.aL=t+1
return new Function(u+t+"}")()}n="abcdefghijklmnopqrstuvwxyz".split("").splice(0,r-1).join(",")
u="return function("+n+"){return this."+H.l(u)+"."+H.l(s)+"(this."+H.l(t)+", "+n+");"
t=$.aL
if(typeof t!=="number")return t.G()
$.aL=t+1
return new Function(u+t+"}")()},
ko:function(a,b,c,d,e,f,g){return H.m6(a,b,H.a8(c),d,!!e,!!f,g)},
k_:function(a){return a.a},
kE:function(a){return a.c},
fq:function(a){var u,t,s,r,q
u=new H.cc("self","target","receiver","name")
t=J.h2(Object.getOwnPropertyNames(u))
for(s=t.length,r=0;r<s;++r){q=t[r]
if(u[q]===a)return q}},
H:function(a){if(a==null)return a
if(typeof a==="string")return a
throw H.i(H.aJ(a,"String"))},
o6:function(a){if(a==null)return a
if(typeof a==="number")return a
throw H.i(H.aJ(a,"double"))},
ni:function(a){if(a==null)return a
if(typeof a==="number")return a
throw H.i(H.aJ(a,"num"))},
km:function(a){if(a==null)return a
if(typeof a==="boolean")return a
throw H.i(H.aJ(a,"bool"))},
a8:function(a){if(a==null)return a
if(typeof a==="number"&&Math.floor(a)===a)return a
throw H.i(H.aJ(a,"int"))},
lB:function(a,b){throw H.i(H.aJ(a,H.c9(H.H(b).substring(2))))},
nk:function(a,b){throw H.i(H.m2(a,H.c9(H.H(b).substring(2))))},
j:function(a,b){if(a==null)return a
if((typeof a==="object"||typeof a==="function")&&J.a_(a)[b])return a
H.lB(a,b)},
h:function(a,b){var u
if(a!=null)u=(typeof a==="object"||typeof a==="function")&&J.a_(a)[b]
else u=!0
if(u)return a
H.nk(a,b)},
kt:function(a){if(a==null)return a
if(!!J.a_(a).$ib)return a
throw H.i(H.aJ(a,"List<dynamic>"))},
ne:function(a,b){var u
if(a==null)return a
u=J.a_(a)
if(!!u.$ib)return a
if(u[b])return a
H.lB(a,b)},
lv:function(a){var u
if("$S" in a){u=a.$S
if(typeof u=="number")return v.types[H.a8(u)]
else return a.$S()}return},
fg:function(a,b){var u
if(a==null)return!1
if(typeof a=="function")return!0
u=H.lv(J.a_(a))
if(u==null)return!1
return H.lm(u,null,b,null)},
n:function(a,b){var u,t
if(a==null)return a
if($.ki)return a
$.ki=!0
try{if(H.fg(a,b))return a
u=H.jU(b)
t=H.aJ(a,u)
throw H.i(t)}finally{$.ki=!1}},
kp:function(a,b){if(a!=null&&!H.kn(a,b))H.t(H.aJ(a,H.jU(b)))
return a},
aJ:function(a,b){return new H.ix("TypeError: "+P.fL(a)+": type '"+H.lq(a)+"' is not a subtype of type '"+b+"'")},
m2:function(a,b){return new H.fr("CastError: "+P.fL(a)+": type '"+H.lq(a)+"' is not a subtype of type '"+b+"'")},
lq:function(a){var u,t
u=J.a_(a)
if(!!u.$icf){t=H.lv(u)
if(t!=null)return H.jU(t)
return"Closure"}return H.bX(a)},
np:function(a){throw H.i(new P.fz(H.H(a)))},
mw:function(a){return new H.hT(a)},
lw:function(a){return v.getIsolateTag(a)},
c:function(a,b){a.$ti=b
return a},
bH:function(a){if(a==null)return
return a.$ti},
o7:function(a,b,c){return H.c8(a["$a"+H.l(c)],H.bH(b))},
d9:function(a,b,c,d){var u
H.H(c)
H.a8(d)
u=H.c8(a["$a"+H.l(c)],H.bH(b))
return u==null?null:u[d]},
aj:function(a,b,c){var u
H.H(b)
H.a8(c)
u=H.c8(a["$a"+H.l(b)],H.bH(a))
return u==null?null:u[c]},
y:function(a,b){var u
H.a8(b)
u=H.bH(a)
return u==null?null:u[b]},
jU:function(a){return H.bG(a,null)},
bG:function(a,b){var u,t
H.m(b,"$ib",[P.f],"$ab")
if(a==null)return"dynamic"
if(a===-1)return"void"
if(typeof a==="object"&&a!==null&&a.constructor===Array)return H.c9(a[0].name)+H.kl(a,1,b)
if(typeof a=="function")return H.c9(a.name)
if(a===-2)return"dynamic"
if(typeof a==="number"){H.a8(a)
if(b==null||a<0||a>=b.length)return"unexpected-generic-index:"+a
u=b.length
t=u-a-1
if(t<0||t>=u)return H.k(b,t)
return H.l(b[t])}if('func' in a)return H.mQ(a,b)
if('futureOr' in a)return"FutureOr<"+H.bG("type" in a?a.type:null,b)+">"
return"unknown-reified-type"},
mQ:function(a,b){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c
u=[P.f]
H.m(b,"$ib",u,"$ab")
if("bounds" in a){t=a.bounds
if(b==null){b=H.c([],u)
s=null}else s=b.length
r=b.length
for(q=t.length,p=q;p>0;--p)C.a.h(b,"T"+(r+p))
for(o="<",n="",p=0;p<q;++p,n=", "){o+=n
u=b.length
m=u-p-1
if(m<0)return H.k(b,m)
o=C.i.G(o,b[m])
l=t[p]
if(l!=null&&l!==P.R)o+=" extends "+H.bG(l,b)}o+=">"}else{o=""
s=null}k=!!a.v?"void":H.bG(a.ret,b)
if("args" in a){j=a.args
for(u=j.length,i="",h="",g=0;g<u;++g,h=", "){f=j[g]
i=i+h+H.bG(f,b)}}else{i=""
h=""}if("opt" in a){e=a.opt
i+=h+"["
for(u=e.length,h="",g=0;g<u;++g,h=", "){f=e[g]
i=i+h+H.bG(f,b)}i+="]"}if("named" in a){d=a.named
i+=h+"{"
for(u=H.n4(d),m=u.length,h="",g=0;g<m;++g,h=", "){c=H.H(u[g])
i=i+h+H.bG(d[c],b)+(" "+H.l(c))}i+="}"}if(s!=null)b.length=s
return o+"("+i+") => "+k},
kl:function(a,b,c){var u,t,s,r,q,p
H.m(c,"$ib",[P.f],"$ab")
if(a==null)return""
u=new P.bg("")
for(t=b,s="",r=!0,q="";t<a.length;++t,s=", "){u.a=q+s
p=a[t]
if(p!=null)r=!1
q=u.a+=H.bG(p,c)}return"<"+u.i(0)+">"},
c8:function(a,b){if(a==null)return b
a=a.apply(null,b)
if(a==null)return
if(typeof a==="object"&&a!==null&&a.constructor===Array)return a
if(typeof a=="function")return a.apply(null,b)
return b},
d7:function(a,b,c,d){var u,t
H.H(b)
H.kt(c)
H.H(d)
if(a==null)return!1
u=H.bH(a)
t=J.a_(a)
if(t[b]==null)return!1
return H.lt(H.c8(t[d],u),null,c,null)},
m:function(a,b,c,d){H.H(b)
H.kt(c)
H.H(d)
if(a==null)return a
if(H.d7(a,b,c,d))return a
throw H.i(H.aJ(a,function(e,f){return e.replace(/[^<,> ]+/g,function(g){return f[g]||g})}(H.c9(b.substring(2))+H.kl(c,0,null),v.mangledGlobalNames)))},
lt:function(a,b,c,d){var u,t
if(c==null)return!0
if(a==null){u=c.length
for(t=0;t<u;++t)if(!H.aD(null,null,c[t],d))return!1
return!0}u=a.length
for(t=0;t<u;++t)if(!H.aD(a[t],b,c[t],d))return!1
return!0},
o4:function(a,b,c){return a.apply(b,H.c8(J.a_(b)["$a"+H.l(c)],H.bH(b)))},
ly:function(a){var u
if(typeof a==="number")return!1
if('futureOr' in a){u="type" in a?a.type:null
return a==null||a.name==="R"||a.name==="L"||a===-1||a===-2||H.ly(u)}return!1},
kn:function(a,b){var u,t
if(a==null)return b==null||b.name==="R"||b.name==="L"||b===-1||b===-2||H.ly(b)
if(b==null||b===-1||b.name==="R"||b===-2)return!0
if(typeof b=="object"){if('futureOr' in b)if(H.kn(a,"type" in b?b.type:null))return!0
if('func' in b)return H.fg(a,b)}u=J.a_(a).constructor
t=H.bH(a)
if(t!=null){t=t.slice()
t.splice(0,0,u)
u=t}return H.aD(u,null,b,null)},
E:function(a,b){if(a!=null&&!H.kn(a,b))throw H.i(H.aJ(a,H.jU(b)))
return a},
aD:function(a,b,c,d){var u,t,s,r,q,p,o,n,m
if(a===c)return!0
if(c==null||c===-1||c.name==="R"||c===-2)return!0
if(a===-2)return!0
if(a==null||a===-1||a.name==="R"||a===-2){if(typeof c==="number")return!1
if('futureOr' in c)return H.aD(a,b,"type" in c?c.type:null,d)
return!1}if(typeof a==="number")return!1
if(typeof c==="number")return!1
if(a.name==="L")return!0
if('func' in c)return H.lm(a,b,c,d)
if('func' in a)return c.name==="bv"
u=typeof a==="object"&&a!==null&&a.constructor===Array
t=u?a[0]:a
if('futureOr' in c){s="type" in c?c.type:null
if('futureOr' in a)return H.aD("type" in a?a.type:null,b,s,d)
else if(H.aD(a,b,s,d))return!0
else{if(!('$i'+"cn" in t.prototype))return!1
r=t.prototype["$a"+"cn"]
q=H.c8(r,u?a.slice(1):null)
return H.aD(typeof q==="object"&&q!==null&&q.constructor===Array?q[0]:null,b,s,d)}}p=typeof c==="object"&&c!==null&&c.constructor===Array
o=p?c[0]:c
if(o!==t){n=o.name
if(!('$i'+n in t.prototype))return!1
m=t.prototype["$a"+n]}else m=null
if(!p)return!0
u=u?a.slice(1):null
p=c.slice(1)
return H.lt(H.c8(m,u),b,p,d)},
lm:function(a,b,c,d){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g
if(!('func' in a))return!1
if("bounds" in a){if(!("bounds" in c))return!1
u=a.bounds
t=c.bounds
if(u.length!==t.length)return!1}else if("bounds" in c)return!1
if(!H.aD(a.ret,b,c.ret,d))return!1
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
for(k=0;k<o;++k)if(!H.aD(r[k],d,s[k],b))return!1
for(j=k,i=0;j<n;++i,++j)if(!H.aD(r[j],d,q[i],b))return!1
for(j=0;j<l;++i,++j)if(!H.aD(p[j],d,q[i],b))return!1
h=a.named
g=c.named
if(g==null)return!0
if(h==null)return!1
return H.nh(h,b,g,d)},
nh:function(a,b,c,d){var u,t,s,r
u=Object.getOwnPropertyNames(c)
for(t=u.length,s=0;s<t;++s){r=u[s]
if(!Object.hasOwnProperty.call(a,r))return!1
if(!H.aD(c[r],d,a[r],b))return!1}return!0},
o5:function(a,b,c){Object.defineProperty(a,H.H(b),{value:c,enumerable:false,writable:true,configurable:true})},
nf:function(a){var u,t,s,r,q,p
u=H.H($.lx.$1(a))
t=$.jL[u]
if(t!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:t,enumerable:false,writable:true,configurable:true})
return t.i}s=$.jR[u]
if(s!=null)return s
r=v.interceptorsByTag[u]
if(r==null){u=H.H($.ls.$2(a,u))
if(u!=null){t=$.jL[u]
if(t!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:t,enumerable:false,writable:true,configurable:true})
return t.i}s=$.jR[u]
if(s!=null)return s
r=v.interceptorsByTag[u]}}if(r==null)return
s=r.prototype
q=u[0]
if(q==="!"){t=H.jT(s)
$.jL[u]=t
Object.defineProperty(a,v.dispatchPropertyName,{value:t,enumerable:false,writable:true,configurable:true})
return t.i}if(q==="~"){$.jR[u]=s
return s}if(q==="-"){p=H.jT(s)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}if(q==="+")return H.lA(a,s)
if(q==="*")throw H.i(P.lb(u))
if(v.leafTags[u]===true){p=H.jT(s)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}else return H.lA(a,s)},
lA:function(a,b){var u=Object.getPrototypeOf(a)
Object.defineProperty(u,v.dispatchPropertyName,{value:J.ku(b,u,null,null),enumerable:false,writable:true,configurable:true})
return b},
jT:function(a){return J.ku(a,!1,null,!!a.$iF)},
ng:function(a,b,c){var u=b.prototype
if(v.leafTags[a]===true)return H.jT(u)
else return J.ku(u,c,null,null)},
na:function(){if(!0===$.ks)return
$.ks=!0
H.nb()},
nb:function(){var u,t,s,r,q,p,o,n
$.jL=Object.create(null)
$.jR=Object.create(null)
H.n9()
u=v.interceptorsByTag
t=Object.getOwnPropertyNames(u)
if(typeof window!="undefined"){window
s=function(){}
for(r=0;r<t.length;++r){q=t[r]
p=$.lC.$1(q)
if(p!=null){o=H.ng(q,u[q],p)
if(o!=null){Object.defineProperty(p,v.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
s.prototype=p}}}}for(r=0;r<t.length;++r){q=t[r]
if(/^[A-Za-z_]/.test(q)){n=u[q]
u["!"+q]=n
u["~"+q]=n
u["-"+q]=n
u["+"+q]=n
u["*"+q]=n}}},
n9:function(){var u,t,s,r,q,p,o
u=C.S()
u=H.c2(C.P,H.c2(C.U,H.c2(C.A,H.c2(C.A,H.c2(C.T,H.c2(C.Q,H.c2(C.R(C.B),u)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){t=dartNativeDispatchHooksTransformer
if(typeof t=="function")t=[t]
if(t.constructor==Array)for(s=0;s<t.length;++s){r=t[s]
if(typeof r=="function")u=r(u)||u}}q=u.getTag
p=u.getUnknownTag
o=u.prototypeForTag
$.lx=new H.jO(q)
$.ls=new H.jP(p)
$.lC=new H.jQ(o)},
c2:function(a,b){return a(b)||b},
mf:function(a,b,c,d){var u,t,s,r
u=b?"m":""
t=c?"":"i"
s=d?"g":""
r=function(e,f){try{return new RegExp(e,f)}catch(q){return q}}(a,u+t+s)
if(r instanceof RegExp)return r
throw H.i(new P.fU("Illegal RegExp pattern ("+String(r)+")",a,null))},
nn:function(a,b,c){var u=a.indexOf(b,c)
return u>=0},
kw:function(a,b,c){var u,t,s
if(b==="")if(a==="")return c
else{u=a.length
for(t=c,s=0;s<u;++s)t=t+a[s]+c
return t.charCodeAt(0)==0?t:t}else return a.replace(new RegExp(b.replace(/[[\]{}()*+?.\\^$|]/g,"\\$&"),'g'),c.replace(/\$/g,"$$$$"))},
hM:function hM(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.x=null},
iv:function iv(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
hB:function hB(a,b){this.a=a
this.b=b},
h5:function h5(a,b,c){this.a=a
this.b=b
this.c=c},
iH:function iH(a){this.a=a},
jW:function jW(a){this.a=a},
eU:function eU(a){this.a=a
this.b=null},
cf:function cf(){},
ie:function ie(){},
i5:function i5(){},
cc:function cc(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
ix:function ix(a){this.a=a},
fr:function fr(a){this.a=a},
hT:function hT(a){this.a=a},
aS:function aS(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
h8:function h8(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
dD:function dD(a,b){this.a=a
this.$ti=b},
h9:function h9(a,b,c){var _=this
_.a=a
_.b=b
_.d=_.c=null
_.$ti=c},
jO:function jO(a){this.a=a},
jP:function jP(a){this.a=a},
jQ:function jQ(a){this.a=a},
h4:function h4(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
d4:function(a){return a},
bF:function(a,b,c){if(a>>>0!==a||a>=c)throw H.i(H.d8(b,a))},
mP:function(a,b,c){var u
if(!(a>>>0!==a))u=b>>>0!==b||a>b||b>c
else u=!0
if(u)throw H.i(H.n3(a,b,c))
return b},
cw:function cw(){},
dL:function dL(){},
cv:function cv(){},
dM:function dM(){},
ht:function ht(){},
hu:function hu(){},
hv:function hv(){},
hw:function hw(){},
hx:function hx(){},
dN:function dN(){},
hy:function hy(){},
cW:function cW(){},
cX:function cX(){},
cY:function cY(){},
cZ:function cZ(){},
n4:function(a){return J.kN(a?Object.keys(a):[],null)},
nj:function(a){if(typeof dartPrint=="function"){dartPrint(a)
return}if(typeof console=="object"&&typeof console.log!="undefined"){console.log(a)
return}if(typeof window=="object")return
if(typeof print=="function"){print(a)
return}throw"Unable to print message: "+String(a)}},J={
ku:function(a,b,c,d){return{i:a,p:b,e:c,x:d}},
jN:function(a){var u,t,s,r,q
u=a[v.dispatchPropertyName]
if(u==null)if($.ks==null){H.na()
u=a[v.dispatchPropertyName]}if(u!=null){t=u.p
if(!1===t)return u.i
if(!0===t)return a
s=Object.getPrototypeOf(a)
if(t===s)return u.i
if(u.e===s)throw H.i(P.lb("Return interceptor for "+H.l(t(a,u))))}r=a.constructor
q=r==null?null:r[$.kx()]
if(q!=null)return q
q=H.nf(a)
if(q!=null)return q
if(typeof a=="function")return C.V
t=Object.getPrototypeOf(a)
if(t==null)return C.D
if(t===Object.prototype)return C.D
if(typeof r=="function"){Object.defineProperty(r,$.kx(),{value:C.w,enumerable:false,writable:true,configurable:true})
return C.w}return C.w},
me:function(a,b){if(typeof a!=="number"||Math.floor(a)!==a)throw H.i(P.jZ(a,"length","is not an integer"))
if(a<0||a>4294967295)throw H.i(P.aA(a,0,4294967295,"length",null))
return J.kN(new Array(a),b)},
kN:function(a,b){return J.h2(H.c(a,[b]))},
h2:function(a){H.kt(a)
a.fixed$length=Array
return a},
a_:function(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.dx.prototype
return J.dw.prototype}if(typeof a=="string")return J.bT.prototype
if(a==null)return J.dy.prototype
if(typeof a=="boolean")return J.h3.prototype
if(a.constructor==Array)return J.aR.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bA.prototype
return a}if(a instanceof P.R)return a
return J.jN(a)},
kq:function(a){if(typeof a=="string")return J.bT.prototype
if(a==null)return a
if(a.constructor==Array)return J.aR.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bA.prototype
return a}if(a instanceof P.R)return a
return J.jN(a)},
jM:function(a){if(a==null)return a
if(a.constructor==Array)return J.aR.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bA.prototype
return a}if(a instanceof P.R)return a
return J.jN(a)},
kr:function(a){if(typeof a=="string")return J.bT.prototype
if(a==null)return a
if(!(a instanceof P.R))return J.cR.prototype
return a},
aq:function(a){if(a==null)return a
if(typeof a!="object"){if(typeof a=="function")return J.bA.prototype
return a}if(a instanceof P.R)return a
return J.jN(a)},
a7:function(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.a_(a).t(a,b)},
lV:function(a,b){if(typeof b==="number")if(a.constructor==Array||typeof a=="string"||H.nd(a,a[v.dispatchPropertyName]))if(b>>>0===b&&b<a.length)return a[b]
return J.kq(a).j(a,b)},
fh:function(a,b){return J.aq(a).hV(a,b)},
lW:function(a,b,c,d){return J.aq(a).iU(a,b,c,d)},
kA:function(a,b){return J.aq(a).B(a,b)},
jX:function(a,b){return J.jM(a).E(a,b)},
lX:function(a,b){return J.jM(a).P(a,b)},
lY:function(a){return J.aq(a).gj0(a)},
bI:function(a){return J.a_(a).gH(a)},
bJ:function(a){return J.jM(a).gS(a)},
bK:function(a){return J.kq(a).gm(a)},
lZ:function(a){return J.aq(a).gk0(a)},
jY:function(a,b){return J.aq(a).aW(a,b)},
kB:function(a){return J.jM(a).jU(a)},
m_:function(a,b,c){return J.kr(a).bg(a,b,c)},
m0:function(a){return J.kr(a).kb(a)},
ar:function(a){return J.a_(a).i(a)},
a:function a(){},
h3:function h3(){},
dy:function dy(){},
dA:function dA(){},
hF:function hF(){},
cR:function cR(){},
bA:function bA(){},
aR:function aR(a){this.$ti=a},
k7:function k7(a){this.$ti=a},
ak:function ak(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=null
_.$ti=d},
dz:function dz(){},
dx:function dx(){},
dw:function dw(){},
bT:function bT(){}},P={
mE:function(){var u,t,s
u={}
if(self.scheduleImmediate!=null)return P.mX()
if(self.MutationObserver!=null&&self.document!=null){t=self.document.createElement("div")
s=self.document.createElement("span")
u.a=null
new self.MutationObserver(H.c4(new P.j_(u),1)).observe(t,{childList:true})
return new P.iZ(u,t,s)}else if(self.setImmediate!=null)return P.mY()
return P.mZ()},
mF:function(a){self.scheduleImmediate(H.c4(new P.j0(H.n(a,{func:1,ret:-1})),0))},
mG:function(a){self.setImmediate(H.c4(new P.j1(H.n(a,{func:1,ret:-1})),0))},
mH:function(a){P.kd(C.q,H.n(a,{func:1,ret:-1}))},
kd:function(a,b){var u
H.n(b,{func:1,ret:-1})
u=C.h.a3(a.a,1000)
return P.mN(u<0?0:u,b)},
l9:function(a,b){var u
H.n(b,{func:1,ret:-1,args:[P.b2]})
u=C.h.a3(a.a,1000)
return P.mO(u<0?0:u,b)},
mN:function(a,b){var u=new P.f_(!0)
u.fg(a,b)
return u},
mO:function(a,b){var u=new P.f_(!1)
u.fh(a,b)
return u},
mI:function(a,b){var u,t,s
b.a=1
try{a.es(new P.ja(b),new P.jb(b),null)}catch(s){u=H.ay(s)
t=H.c6(s)
P.nl(new P.jc(b,u,t))}},
lh:function(a,b){var u,t
for(;u=a.a,u===2;)a=H.j(a.c,"$iaC")
if(u>=4){t=b.cb()
b.a=a.a
b.c=a.c
P.cV(b,t)}else{t=H.j(b.c,"$ib7")
b.a=2
b.c=a
a.dr(t)}},
cV:function(a,b){var u,t,s,r,q,p,o,n,m,l,k,j,i,h
u={}
u.a=a
for(t=a;!0;){s={}
r=t.a===8
if(b==null){if(r){q=H.j(t.c,"$iae")
t=t.b
p=q.a
o=q.b
t.toString
P.jH(null,null,t,p,o)}return}for(;n=b.a,n!=null;b=n){b.a=null
P.cV(u.a,b)}t=u.a
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
if(k){H.j(m,"$iae")
t=t.b
p=m.a
o=m.b
t.toString
P.jH(null,null,t,p,o)
return}j=$.Z
if(j!=l)$.Z=l
else j=null
t=b.c
if(t===8)new P.jg(u,s,b,r).$0()
else if(p){if((t&1)!==0)new P.jf(s,b,m).$0()}else if((t&2)!==0)new P.je(u,s,b).$0()
if(j!=null)$.Z=j
t=s.b
if(!!J.a_(t).$icn){if(t.a>=4){i=H.j(o.c,"$ib7")
o.c=null
b=o.bk(i)
o.a=t.a
o.c=t.c
u.a=t
continue}else P.lh(t,o)
return}}h=b.b
i=H.j(h.c,"$ib7")
h.c=null
b=h.bk(i)
t=s.a
p=s.b
if(!t){H.E(p,H.y(h,0))
h.a=4
h.c=p}else{H.j(p,"$iae")
h.a=8
h.c=p}u.a=h
t=h}},
mT:function(a,b){if(H.fg(a,{func:1,args:[P.R,P.ao]}))return H.n(a,{func:1,ret:null,args:[P.R,P.ao]})
if(H.fg(a,{func:1,args:[P.R]}))return H.n(a,{func:1,ret:null,args:[P.R]})
throw H.i(P.jZ(a,"onError","Error handler must accept one Object or one Object and a StackTrace as arguments, and return a a valid result"))},
mS:function(){var u,t
for(;u=$.c1,u!=null;){$.d6=null
t=u.b
$.c1=t
if(t==null)$.d5=null
u.a.$0()}},
mW:function(){$.kj=!0
try{P.mS()}finally{$.d6=null
$.kj=!1
if($.c1!=null)$.ky().$1(P.lu())}},
lp:function(a){var u=new P.em(H.n(a,{func:1,ret:-1}))
if($.c1==null){$.d5=u
$.c1=u
if(!$.kj)$.ky().$1(P.lu())}else{$.d5.b=u
$.d5=u}},
mV:function(a){var u,t,s
H.n(a,{func:1,ret:-1})
u=$.c1
if(u==null){P.lp(a)
$.d6=$.d5
return}t=new P.em(a)
s=$.d6
if(s==null){t.b=u
$.d6=t
$.c1=t}else{t.b=s.b
s.b=t
$.d6=t
if(t.b==null)$.d5=t}},
nl:function(a){var u,t
u={func:1,ret:-1}
H.n(a,u)
t=$.Z
if(C.l===t){P.jJ(null,null,C.l,a)
return}t.toString
P.jJ(null,null,t,H.n(t.ci(a),u))},
l8:function(a,b){var u,t
u={func:1,ret:-1}
H.n(b,u)
t=$.Z
if(t===C.l){t.toString
return P.kd(a,b)}return P.kd(a,H.n(t.ci(b),u))},
mC:function(a,b){var u,t,s
u={func:1,ret:-1,args:[P.b2]}
H.n(b,u)
t=$.Z
if(t===C.l){t.toString
return P.l9(a,b)}s=t.dG(b,P.b2)
$.Z.toString
return P.l9(a,H.n(s,u))},
jH:function(a,b,c,d,e){var u={}
u.a=d
P.mV(new P.jI(u,e))},
ln:function(a,b,c,d,e){var u,t
H.n(d,{func:1,ret:e})
t=$.Z
if(t===c)return d.$0()
$.Z=c
u=t
try{t=d.$0()
return t}finally{$.Z=u}},
lo:function(a,b,c,d,e,f,g){var u,t
H.n(d,{func:1,ret:f,args:[g]})
H.E(e,g)
t=$.Z
if(t===c)return d.$1(e)
$.Z=c
u=t
try{t=d.$1(e)
return t}finally{$.Z=u}},
mU:function(a,b,c,d,e,f,g,h,i){var u,t
H.n(d,{func:1,ret:g,args:[h,i]})
H.E(e,h)
H.E(f,i)
t=$.Z
if(t===c)return d.$2(e,f)
$.Z=c
u=t
try{t=d.$2(e,f)
return t}finally{$.Z=u}},
jJ:function(a,b,c,d){var u
H.n(d,{func:1,ret:-1})
u=C.l!==c
if(u)d=!(!u||!1)?c.ci(d):c.j1(d,-1)
P.lp(d)},
j_:function j_(a){this.a=a},
iZ:function iZ(a,b,c){this.a=a
this.b=b
this.c=c},
j0:function j0(a){this.a=a},
j1:function j1(a){this.a=a},
f_:function f_(a){this.a=a
this.b=null
this.c=0},
jB:function jB(a,b){this.a=a
this.b=b},
jA:function jA(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
b7:function b7(a,b,c,d,e){var _=this
_.a=null
_.b=a
_.c=b
_.d=c
_.e=d
_.$ti=e},
aC:function aC(a,b,c){var _=this
_.a=a
_.b=b
_.c=null
_.$ti=c},
j9:function j9(a,b){this.a=a
this.b=b},
jd:function jd(a,b){this.a=a
this.b=b},
ja:function ja(a){this.a=a},
jb:function jb(a){this.a=a},
jc:function jc(a,b,c){this.a=a
this.b=b
this.c=c},
jg:function jg(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
jh:function jh(a){this.a=a},
jf:function jf(a,b,c){this.a=a
this.b=b
this.c=c},
je:function je(a,b,c){this.a=a
this.b=b
this.c=c},
em:function em(a){this.a=a
this.b=null},
i8:function i8(){},
ia:function ia(a,b){this.a=a
this.b=b},
ib:function ib(a,b){this.a=a
this.b=b},
cE:function cE(){},
i9:function i9(){},
b2:function b2(){},
ae:function ae(a,b){this.a=a
this.b=b},
jE:function jE(){},
jI:function jI(a,b){this.a=a
this.b=b},
jn:function jn(){},
jp:function jp(a,b,c){this.a=a
this.b=b
this.c=c},
jo:function jo(a,b){this.a=a
this.b=b},
jq:function jq(a,b,c){this.a=a
this.b=b
this.c=c},
kO:function(a,b){return new H.aS([a,b])},
mh:function(a){return H.n5(a,new H.aS([null,null]))},
dE:function(a,b,c,d){return new P.jl([d])},
kh:function(){var u=Object.create(null)
u["<non-identifier-key>"]=u
delete u["<non-identifier-key>"]
return u},
mM:function(a,b,c){var u=new P.eB(a,b,[c])
u.c=a.e
return u},
mc:function(a,b,c){var u,t
if(P.kk(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}u=H.c([],[P.f])
t=$.dc()
C.a.h(t,a)
try{P.mR(a,u)}finally{if(0>=t.length)return H.k(t,-1)
t.pop()}t=P.l6(b,H.ne(u,"$id"),", ")+c
return t.charCodeAt(0)==0?t:t},
k5:function(a,b,c){var u,t,s
if(P.kk(a))return b+"..."+c
u=new P.bg(b)
t=$.dc()
C.a.h(t,a)
try{s=u
s.a=P.l6(s.a,a,", ")}finally{if(0>=t.length)return H.k(t,-1)
t.pop()}u.a+=c
t=u.a
return t.charCodeAt(0)==0?t:t},
kk:function(a){var u,t
for(u=0;t=$.dc(),u<t.length;++u)if(a===t[u])return!0
return!1},
mR:function(a,b){var u,t,s,r,q,p,o,n,m,l
H.m(b,"$ib",[P.f],"$ab")
u=a.gS(a)
t=0
s=0
while(!0){if(!(t<80||s<3))break
if(!u.u())return
r=H.l(u.gF(u))
C.a.h(b,r)
t+=r.length+2;++s}if(!u.u()){if(s<=5)return
if(0>=b.length)return H.k(b,-1)
q=b.pop()
if(0>=b.length)return H.k(b,-1)
p=b.pop()}else{o=u.gF(u);++s
if(!u.u()){if(s<=4){C.a.h(b,H.l(o))
return}q=H.l(o)
if(0>=b.length)return H.k(b,-1)
p=b.pop()
t+=q.length+2}else{n=u.gF(u);++s
for(;u.u();o=n,n=m){m=u.gF(u);++s
if(s>100){while(!0){if(!(t>75&&s>3))break
if(0>=b.length)return H.k(b,-1)
t-=b.pop().length+2;--s}C.a.h(b,"...")
return}}p=H.l(o)
q=H.l(n)
t+=q.length+p.length+4}}if(s>b.length+2){t+=5
l="..."}else l=null
while(!0){if(!(t>80&&b.length>3))break
if(0>=b.length)return H.k(b,-1)
t-=b.pop().length+2
if(l==null){t+=5
l="..."}}if(l!=null)C.a.h(b,l)
C.a.h(b,p)
C.a.h(b,q)},
kP:function(a,b){var u,t,s
u=P.dE(null,null,null,b)
for(t=a.length,s=0;s<a.length;a.length===t||(0,H.A)(a),++s)u.h(0,H.E(a[s],b))
return u},
kR:function(a){var u,t
u={}
if(P.kk(a))return"{...}"
t=new P.bg("")
try{C.a.h($.dc(),a)
t.a+="{"
u.a=!0
J.lX(a,new P.hd(u,t))
t.a+="}"}finally{u=$.dc()
if(0>=u.length)return H.k(u,-1)
u.pop()}u=t.a
return u.charCodeAt(0)==0?u:u},
jl:function jl(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
c0:function c0(a){this.a=a
this.c=this.b=null},
eB:function eB(a,b,c){var _=this
_.a=a
_.b=b
_.d=_.c=null
_.$ti=c},
ha:function ha(){},
v:function v(){},
hc:function hc(){},
hd:function hd(a,b){this.a=a
this.b=b},
a9:function a9(){},
js:function js(){},
eC:function eC(){},
cg:function cg(){},
ch:function ch(){},
fJ:function fJ(){},
h_:function h_(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
fZ:function fZ(a){this.a=a},
iK:function iK(a){this.a=a},
iL:function iL(){},
jC:function jC(a){this.b=this.a=0
this.c=a},
mb:function(a){if(a instanceof H.cf)return a.i(0)
return"Instance of '"+H.bX(a)+"'"},
mi:function(a,b,c,d){var u,t
H.E(b,d)
u=J.me(a,d)
if(a!==0&&!0)for(t=0;t<u.length;++t)C.a.Y(u,t,b)
return H.m(u,"$ib",[d],"$ab")},
kQ:function(a,b,c){var u,t,s
u=[c]
t=H.c([],u)
for(s=J.bJ(a);s.u();)C.a.h(t,H.E(s.gF(s),c))
if(b)return t
return H.m(J.h2(t),"$ib",u,"$ab")},
kc:function(a,b,c){var u,t
u=P.C
H.m(a,"$id",[u],"$ad")
if(a.constructor===Array){H.m(a,"$iaR",[u],"$aaR")
t=a.length
c=P.l1(b,c,t,null,null,null)
return H.l0(b>0||c<t?C.a.eT(a,b,c):a)}return P.mA(a,b,c)},
mA:function(a,b,c){var u,t,s
H.m(a,"$id",[P.C],"$ad")
u=J.bJ(a)
for(t=0;t<b;++t)if(!u.u())throw H.i(P.aA(b,0,t,null,null))
s=[]
for(;u.u();)s.push(u.gF(u))
return H.l0(s)},
mu:function(a,b,c){return new H.h4(a,H.mf(a,!1,!0,!1))},
l6:function(a,b,c){var u=J.bJ(b)
if(!u.u())return a
if(c.length===0){do a+=H.l(u.gF(u))
while(u.u())}else{a+=H.l(u.gF(u))
for(;u.u();)a=a+c+H.l(u.gF(u))}return a},
ll:function(a,b,c,d){var u,t,s,r,q,p
H.m(a,"$ib",[P.C],"$ab")
if(c===C.x){u=$.lU().b
u=u.test(b)}else u=!1
if(u)return b
t=C.I.j9(H.E(b,H.aj(c,"cg",0)))
for(u=t.length,s=0,r="";s<u;++s){q=t[s]
if(q<128){p=q>>>4
if(p>=8)return H.k(a,p)
p=(a[p]&1<<(q&15))!==0}else p=!1
if(p)r+=H.ka(q)
else r=r+"%"+"0123456789ABCDEF"[q>>>4&15]+"0123456789ABCDEF"[q&15]}return r.charCodeAt(0)==0?r:r},
m7:function(a){var u,t
u=Math.abs(a)
t=a<0?"-":""
if(u>=1000)return""+a
if(u>=100)return t+"0"+u
if(u>=10)return t+"00"+u
return t+"000"+u},
m8:function(a){if(a>=100)return""+a
if(a>=10)return"0"+a
return"00"+a},
dm:function(a){if(a>=10)return""+a
return"0"+a},
kI:function(a,b,c,d,e,f){return new P.bt(864e8*a+36e8*b+6e7*e+1e6*f+1000*d+c)},
fL:function(a){if(typeof a==="number"||typeof a==="boolean"||null==a)return J.ar(a)
if(typeof a==="string")return JSON.stringify(a)
return P.mb(a)},
m1:function(a){return new P.aE(!1,null,null,a)},
jZ:function(a,b,c){return new P.aE(!0,a,b,c)},
hK:function(a,b,c){return new P.bY(null,null,!0,a,b,"Value not in range")},
aA:function(a,b,c,d,e){return new P.bY(b,c,!0,a,d,"Invalid value")},
l1:function(a,b,c,d,e,f){if(0>a||a>c)throw H.i(P.aA(a,0,c,"start",f))
if(b!=null){if(a>b||b>c)throw H.i(P.aA(b,a,c,"end",f))
return b}return c},
W:function(a,b,c,d,e){var u=H.a8(e==null?J.bK(b):e)
return new P.h1(b,u,!0,a,c,"Index out of range")},
aw:function(a){return new P.iI(a)},
lb:function(a){return new P.iG(a)},
l5:function(a){return new P.cD(a)},
br:function(a){return new P.fu(a)},
r:function(a){return new P.eu(a)},
c7:function(a){H.nj(a)},
N:function N(){},
al:function al(a,b){this.a=a
this.b=b},
z:function z(){},
bt:function bt(a){this.a=a},
fF:function fF(){},
fG:function fG(){},
bu:function bu(){},
dP:function dP(){},
aE:function aE(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
bY:function bY(a,b,c,d,e,f){var _=this
_.e=a
_.f=b
_.a=c
_.b=d
_.c=e
_.d=f},
h1:function h1(a,b,c,d,e,f){var _=this
_.e=a
_.f=b
_.a=c
_.b=d
_.c=e
_.d=f},
iI:function iI(a){this.a=a},
iG:function iG(a){this.a=a},
cD:function cD(a){this.a=a},
fu:function fu(a){this.a=a},
hE:function hE(){},
e_:function e_(){},
fz:function fz(a){this.a=a},
eu:function eu(a){this.a=a},
fU:function fU(a,b,c){this.a=a
this.b=b
this.c=c},
bv:function bv(){},
C:function C(){},
d:function d(){},
aQ:function aQ(){},
b:function b(){},
P:function P(){},
L:function L(){},
a1:function a1(){},
R:function R(){},
ao:function ao(){},
f:function f(){},
bg:function bg(a){this.a=a},
n2:function(a){var u,t
u=J.a_(a)
if(!!u.$ibw){t=u.gdN(a)
if(t.constructor===Array)if(typeof CanvasPixelArray!=="undefined"){t.constructor=CanvasPixelArray
t.BYTES_PER_ELEMENT=1}return a}return new P.f4(a.data,a.height,a.width)},
n1:function(a){if(a instanceof P.f4)return{data:a.a,height:a.b,width:a.c}
return a},
bi:function(a){var u,t,s,r,q
if(a==null)return
u=P.kO(P.f,null)
t=Object.getOwnPropertyNames(a)
for(s=t.length,r=0;r<t.length;t.length===s||(0,H.A)(t),++r){q=H.H(t[r])
u.Y(0,q,a[q])}return u},
n0:function(a,b){var u={}
a.P(0,new P.jK(u))
return u},
f4:function f4(a,b,c){this.a=a
this.b=b
this.c=c},
jK:function jK(a){this.a=a},
fQ:function fQ(a,b){this.a=a
this.b=b},
fR:function fR(){},
fS:function fS(){},
jk:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
mL:function(a){a=536870911&a+((67108863&a)<<3)
a^=a>>>11
return 536870911&a+((16383&a)<<15)},
jm:function jm(){},
ac:function ac(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=e},
ba:function ba(){},
h7:function h7(){},
bd:function bd(){},
hC:function hC(){},
hJ:function hJ(){},
cA:function cA(){},
ic:function ic(){},
p:function p(){},
bh:function bh(){},
iu:function iu(){},
ez:function ez(){},
eA:function eA(){},
eK:function eK(){},
eL:function eL(){},
eW:function eW(){},
eX:function eX(){},
f2:function f2(){},
f3:function f3(){},
fl:function fl(){},
fm:function fm(){},
fn:function fn(a){this.a=a},
fo:function fo(){},
bL:function bL(){},
hD:function hD(){},
en:function en(){},
dg:function dg(){},
dt:function dt(){},
dS:function dS(){},
bZ:function bZ(){},
dV:function dV(){},
e2:function e2(){},
ec:function ec(){},
i4:function i4(){},
eS:function eS(){},
eT:function eT(){}},W={
kC:function(a){var u=document.createElement("a")
return u},
k0:function(a,b){var u=document.createElement("canvas")
return u},
m9:function(a,b,c){var u,t
u=document.body
t=(u&&C.n).ag(u,a,b,c)
t.toString
u=W.D
u=new H.cS(new W.ai(t),H.n(new W.fI(),{func:1,ret:P.N,args:[u]}),[u])
return H.j(u.gaJ(u),"$iT")},
ma:function(a){H.j(a,"$ie")
return"wheel"},
cl:function(a){var u,t,s
u="element tag unavailable"
try{t=J.lZ(a)
if(typeof t==="string")u=a.tagName}catch(s){H.ay(s)}return u},
kM:function(a,b,c){var u=document.createElement("img")
u.src=b
return u},
jj:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
lj:function(a,b,c,d){var u,t
u=W.jj(W.jj(W.jj(W.jj(0,a),b),c),d)
t=536870911&u+((67108863&u)<<3)
t^=t>>>11
return 536870911&t+((16383&t)<<15)},
a6:function(a,b,c,d,e){var u=W.lr(new W.j8(c),W.o)
if(u!=null&&!0)J.lW(a,b,u,!1)
return new W.j7(a,b,u,!1,[e])},
li:function(a){var u,t
u=W.kC(null)
t=window.location
u=new W.bE(new W.jr(u,t))
u.f5(a)
return u},
mJ:function(a,b,c,d){H.j(a,"$iT")
H.H(b)
H.H(c)
H.j(d,"$ibE")
return!0},
mK:function(a,b,c,d){var u,t,s
H.j(a,"$iT")
H.H(b)
H.H(c)
u=H.j(d,"$ibE").a
t=u.a
t.href=c
s=t.hostname
u=u.b
if(!(s==u.hostname&&t.port==u.port&&t.protocol==u.protocol))if(s==="")if(t.port===""){u=t.protocol
u=u===":"||u===""}else u=!1
else u=!1
else u=!0
return u},
lk:function(){var u,t,s,r,q
u=P.f
t=P.kP(C.t,u)
s=H.y(C.t,0)
r=H.n(new W.jz(),{func:1,ret:u,args:[s]})
q=H.c(["TEMPLATE"],[u])
t=new W.jy(t,P.dE(null,null,null,u),P.dE(null,null,null,u),P.dE(null,null,null,u),null)
t.ff(null,new H.hg(C.t,r,[s,u]),q,null)
return t},
lr:function(a,b){var u
H.n(a,{func:1,ret:-1,args:[b]})
u=$.Z
if(u===C.l)return a
return u.dG(a,b)},
x:function x(){},
fi:function fi(){},
dd:function dd(){},
fj:function fj(){},
cb:function cb(){},
df:function df(){},
bo:function bo(){},
bN:function bN(){},
bO:function bO(){},
bp:function bp(){},
ci:function ci(){},
fv:function fv(){},
S:function S(){},
cj:function cj(){},
fw:function fw(){},
aM:function aM(){},
aN:function aN(){},
fx:function fx(){},
fy:function fy(){},
fB:function fB(){},
az:function az(){},
ck:function ck(){},
fC:function fC(){},
dn:function dn(){},
dp:function dp(){},
dq:function dq(){},
fD:function fD(){},
fE:function fE(){},
j3:function j3(a,b){this.a=a
this.b=b},
T:function T(){},
fI:function fI(){},
o:function o(){},
e:function e(){},
aO:function aO(){},
fO:function fO(){},
fP:function fP(){},
fT:function fT(){},
aP:function aP(){},
du:function du(){},
fY:function fY(){},
bS:function bS(){},
dv:function dv(){},
bw:function bw(){},
cp:function cp(){},
aT:function aT(){},
dF:function dF(){},
ct:function ct(){},
hm:function hm(){},
hn:function hn(){},
ho:function ho(a){this.a=a},
hp:function hp(){},
hq:function hq(a){this.a=a},
aW:function aW(){},
hr:function hr(){},
aa:function aa(){},
ai:function ai(a){this.a=a},
D:function D(){},
cx:function cx(){},
aY:function aY(){},
hH:function hH(){},
dT:function dT(){},
hR:function hR(){},
hS:function hS(a){this.a=a},
hU:function hU(){},
aZ:function aZ(){},
i2:function i2(){},
b_:function b_(){},
i3:function i3(){},
b0:function b0(){},
i6:function i6(){},
i7:function i7(a){this.a=a},
aG:function aG(){},
c_:function c_(){},
e0:function e0(){},
e1:function e1(){},
id:function id(){},
cG:function cG(){},
b1:function b1(){},
aH:function aH(){},
ig:function ig(){},
ih:function ih(){},
io:function io(){},
b3:function b3(){},
aI:function aI(){},
is:function is(){},
it:function it(){},
bD:function bD(){},
iJ:function iJ(){},
iW:function iW(){},
iX:function iX(){},
b6:function b6(){},
cT:function cT(){},
cU:function cU(){},
j4:function j4(){},
ep:function ep(){},
ji:function ji(){},
eH:function eH(){},
jv:function jv(){},
jw:function jw(){},
j2:function j2(){},
j5:function j5(a){this.a=a},
j6:function j6(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
kg:function kg(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
j7:function j7(a,b,c,d,e){var _=this
_.a=0
_.b=a
_.c=b
_.d=c
_.e=d
_.$ti=e},
j8:function j8(a){this.a=a},
bE:function bE(a){this.a=a},
B:function B(){},
dO:function dO(a){this.a=a},
hA:function hA(a){this.a=a},
hz:function hz(a,b,c){this.a=a
this.b=b
this.c=c},
eP:function eP(){},
jt:function jt(){},
ju:function ju(){},
jy:function jy(a,b,c,d,e){var _=this
_.e=a
_.a=b
_.b=c
_.c=d
_.d=e},
jz:function jz(){},
jx:function jx(){},
ds:function ds(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=null
_.$ti=d},
au:function au(){},
jr:function jr(a,b){this.a=a
this.b=b},
f5:function f5(a){this.a=a},
jD:function jD(a){this.a=a},
eo:function eo(){},
eq:function eq(){},
er:function er(){},
es:function es(){},
et:function et(){},
ev:function ev(){},
ew:function ew(){},
ex:function ex(){},
ey:function ey(){},
eD:function eD(){},
eE:function eE(){},
eF:function eF(){},
eG:function eG(){},
eI:function eI(){},
eJ:function eJ(){},
eM:function eM(){},
eN:function eN(){},
eO:function eO(){},
d_:function d_(){},
d0:function d0(){},
eQ:function eQ(){},
eR:function eR(){},
eV:function eV(){},
eY:function eY(){},
eZ:function eZ(){},
d1:function d1(){},
d2:function d2(){},
f0:function f0(){},
f1:function f1(){},
f6:function f6(){},
f7:function f7(){},
f8:function f8(){},
f9:function f9(){},
fa:function fa(){},
fb:function fb(){},
fc:function fc(){},
fd:function fd(){},
fe:function fe(){},
ff:function ff(){}},O={
k1:function(a){var u=new O.a0([a])
u.bi(a)
return u},
a0:function a0(a){var _=this
_.d=_.c=_.b=_.a=null
_.$ti=a},
cs:function cs(){this.b=this.a=null},
dI:function dI(){var _=this
_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
hh:function hh(a,b){var _=this
_.f=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
cr:function cr(){},
hi:function hi(a,b){var _=this
_.a=a
_.b=b
_.e=_.d=_.c=null},
aU:function aU(a,b){var _=this
_.f=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
hk:function hk(a,b){var _=this
_.f=_.ch=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
hl:function hl(a,b){var _=this
_.f=_.ch=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
dX:function dX(){var _=this
_.e=_.d=_.c=_.b=_.a=null},
bC:function bC(){}},E={
kL:function(a,b,c,d,e,f){var u=new E.af()
u.a=d
u.b=!0
u.sf4(0,O.k1(E.af))
u.y.aY(u.gjF(),u.gjI())
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
u.sbO(0,e)
return u},
mv:function(a,b){var u=new E.hN(a,b)
u.f0(a,b)
return u},
mB:function(a,b,c,d,e){var u,t,s,r
u=J.a_(a)
if(!!u.$ibN)return E.l7(a,!0,!0,!0,!1)
t=W.k0(null,null)
s=t.style
s.width="100%"
s.height="100%"
u.gdK(a).h(0,t)
r=E.l7(t,!0,!0,!0,!1)
r.a=a
return r},
l7:function(a,b,c,d,e){var u,t,s,r,q,p,o,n,m,l,k
u=new E.e8()
t=H.j(C.p.cP(a,"webgl2",P.mh(["alpha",!0,"depth",!0,"stencil",!1,"antialias",!0])),"$ibZ")
if(t==null)H.t(P.r("Failed to get the rendering context for WebGL."))
u.b=a
u.a=a
u.c=t
u.e=E.mv(t,a)
s=new T.ij(t)
s.b=H.a8((t&&C.b).cQ(t,3379))
s.c=H.a8(C.b.cQ(t,34076))
s.d=0
s.e=0
u.f=s
s=new X.ef(a)
r=new X.h6()
r.c=new X.at(!1,!1,!1)
r.shS(P.dE(null,null,null,P.C))
s.b=r
r=new X.hs(s)
r.f=0
r.r=V.be()
r.x=V.be()
r.Q=1
r.ch=1
s.c=r
r=new X.hb(s)
r.r=0
r.x=V.be()
r.Q=1
r.ch=1
r.cx=1
r.cy=1
s.d=r
r=new X.ir(s)
r.e=0
r.f=V.be()
r.r=V.be()
s.e=r
s.f=!1
s.r=!1
s.x=!1
s.y=null
s.sfB(H.c([],[[P.cE,P.R]]))
r=s.z
q=document
p=W.aa
o={func:1,ret:-1,args:[p]};(r&&C.a).h(r,W.a6(q,"contextmenu",H.n(s.ghd(),o),!1,p))
r=s.z
n=W.o
m={func:1,ret:-1,args:[n]};(r&&C.a).h(r,W.a6(a,"focus",H.n(s.ghj(),m),!1,n))
r=s.z;(r&&C.a).h(r,W.a6(a,"blur",H.n(s.gh5(),m),!1,n))
r=s.z
l=W.aT
k={func:1,ret:-1,args:[l]};(r&&C.a).h(r,W.a6(q,"keyup",H.n(s.ghn(),k),!1,l))
r=s.z;(r&&C.a).h(r,W.a6(q,"keydown",H.n(s.ghl(),k),!1,l))
l=s.z;(l&&C.a).h(l,W.a6(a,"mousedown",H.n(s.ghr(),o),!1,p))
l=s.z;(l&&C.a).h(l,W.a6(a,"mouseup",H.n(s.ghv(),o),!1,p))
l=s.z;(l&&C.a).h(l,W.a6(a,"mousemove",H.n(s.ght(),o),!1,p))
l=s.z
k=W.b6;(l&&C.a).h(l,W.a6(a,H.H(W.ma(a)),H.n(s.ghx(),{func:1,ret:-1,args:[k]}),!1,k))
k=s.z;(k&&C.a).h(k,W.a6(q,"mousemove",H.n(s.ghf(),o),!1,p))
k=s.z;(k&&C.a).h(k,W.a6(q,"mouseup",H.n(s.ghh(),o),!1,p))
p=s.z;(p&&C.a).h(p,W.a6(q,"pointerlockchange",H.n(s.ghz(),m),!1,n))
n=s.z
m=W.aI
q={func:1,ret:-1,args:[m]};(n&&C.a).h(n,W.a6(a,"touchstart",H.n(s.ghP(),q),!1,m))
n=s.z;(n&&C.a).h(n,W.a6(a,"touchend",H.n(s.ghL(),q),!1,m))
n=s.z;(n&&C.a).h(n,W.a6(a,"touchmove",H.n(s.ghN(),q),!1,m))
u.r=s
u.Q=!0
u.ch=!1
u.cx=new P.al(Date.now(),!1)
u.cy=0
u.dt()
return u},
fp:function fp(){},
af:function af(){var _=this
_.fx=_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
hN:function hN(a,b){var _=this
_.a=a
_.b=b
_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=null},
hO:function hO(a){this.a=a},
hP:function hP(a){this.a=a},
hQ:function hQ(a){this.a=a},
e8:function e8(){var _=this
_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
im:function im(a){this.a=a}},Z={
kf:function(a,b,c){var u
H.m(c,"$ib",[P.C],"$ab")
u=a.createBuffer()
C.b.as(a,b,u)
C.b.dI(a,b,new Int16Array(H.d4(c)),35044)
C.b.as(a,b,null)
return new Z.ek(b,u)},
aB:function(a){return new Z.b5(a)},
ek:function ek(a,b){this.a=a
this.b=b},
dh:function dh(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
el:function el(a){this.a=a},
ce:function ce(a,b,c){var _=this
_.a=a
_.b=null
_.c=b
_.d=c},
bx:function bx(a,b,c){this.a=a
this.b=b
this.c=c},
b5:function b5(a){this.a=a}},D={
K:function(){var u=new D.bQ()
u.sae(null)
u.saQ(null)
u.c=null
u.d=0
return u},
fs:function fs(){},
bQ:function bQ(){var _=this
_.d=_.c=_.b=_.a=null},
fM:function fM(a){this.a=a},
fN:function fN(a){this.a=a},
w:function w(a){this.a=a
this.b=null},
by:function by(a,b,c,d){var _=this
_.c=a
_.d=b
_.a=c
_.b=null
_.$ti=d},
bz:function bz(a,b,c,d){var _=this
_.c=a
_.d=b
_.a=c
_.b=null
_.$ti=d},
J:function J(a,b,c,d,e){var _=this
_.c=a
_.d=b
_.e=c
_.a=d
_.b=null
_.$ti=e},
bs:function bs(){var _=this
_.d=_.c=_.b=_.a=null},
a2:function a2(){},
dC:function dC(){var _=this
_.d=_.c=_.b=_.a=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=null},
dR:function dR(){},
dZ:function dZ(){},
e5:function e5(){},
e6:function e6(){},
e7:function e7(){}},X={di:function di(a,b){this.a=a
this.b=b},dB:function dB(a,b){this.a=a
this.b=b},h6:function h6(){var _=this
_.d=_.c=_.b=_.a=null},dG:function dG(a,b,c,d,e,f){var _=this
_.x=a
_.y=b
_.c=c
_.d=d
_.e=e
_.a=f
_.b=null},hb:function hb(a){var _=this
_.a=a
_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},at:function at(a,b,c){this.a=a
this.b=b
this.c=c},bc:function bc(a,b,c,d,e,f,g,h,i){var _=this
_.x=a
_.y=b
_.z=c
_.Q=d
_.ch=e
_.c=f
_.d=g
_.e=h
_.a=i
_.b=null},hs:function hs(a){var _=this
_.a=a
_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},cu:function cu(a,b,c,d,e){var _=this
_.x=a
_.c=b
_.d=c
_.e=d
_.a=e
_.b=null},hI:function hI(){},ea:function ea(a,b,c,d,e,f,g,h,i){var _=this
_.x=a
_.y=b
_.z=c
_.Q=d
_.ch=e
_.c=f
_.d=g
_.e=h
_.a=i
_.b=null},ir:function ir(a){var _=this
_.a=a
_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},ef:function ef(a){var _=this
_.a=a
_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},
k4:function(a,b,c,d,e,f,g){var u,t
u=new X.fV()
t=new V.aF(0,0,0,1)
u.a=t
u.b=!0
u.c=e
u.d=!0
u.e=g
u.f=!1
t=$.l3
if(t==null){t=V.l2(0,0,1,1)
$.l3=t}u.r=t
return u},
kW:function(a,b,c,d,e){var u,t,s
u=new X.dQ()
u.c=1.0471975511965976
u.d=0.1
u.e=2000
if(null!=c){t=u.b
u.b=c
if(c!=null)c.gp().h(0,u.gh7())
s=new D.J("mover",t,u.b,u,[U.ab])
s.b=!0
u.ap(s)}s=u.c
if(!(Math.abs(s-b)<$.O().a)){u.c=b
s=new D.J("fov",s,b,u,[P.z])
s.b=!0
u.ap(s)}s=u.d
if(!(Math.abs(s-d)<$.O().a)){u.d=d
s=new D.J("near",s,d,u,[P.z])
s.b=!0
u.ap(s)}s=u.e
if(!(Math.abs(s-a)<$.O().a)){u.e=a
s=new D.J("far",s,a,u,[P.z])
s.b=!0
u.ap(s)}return u},
bM:function bM(){},
fV:function fV(){var _=this
_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
h0:function h0(){this.b=this.a=null},
dQ:function dQ(){var _=this
_.f=_.e=_.d=_.c=_.b=_.a=null},
cF:function cF(){}},V={
nq:function(a,b,c){var u
if(c<=b)return b
u=c-b
a=C.j.eK(a-b,u)
return(a<0?a+u:a)+b},
V:function(a,b,c){if(a==null)return C.i.ai("null",c)
return C.i.ai(C.j.eu(Math.abs(a-0)<$.O().a?0:a,b),c+b+1)},
c5:function(a,b,c){var u,t,s,r,q,p
H.m(a,"$ib",[P.z],"$ab")
u=H.c([],[P.f])
for(t=a.length,s=0,r=0;r<a.length;a.length===t||(0,H.A)(a),++r){q=V.V(a[r],b,c)
s=Math.max(s,q.length)
C.a.h(u,q)}for(p=u.length-1;p>=0;--p){if(p>=u.length)return H.k(u,p)
C.a.Y(u,p,C.i.ai(u[p],s))}return u},
kv:function(a,b){return C.j.k8(Math.pow(b,C.O.cz(Math.log(H.n_(a))/Math.log(b))))},
bV:function(){var u=$.kT
if(u==null){u=V.aV(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1)
$.kT=u}return u},
aV:function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){return new V.am(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p)},
kS:function(a,b,c){var u,t,s,r,q,p,o,n
u=c.v(0,Math.sqrt(c.D(c)))
t=b.b6(u)
s=t.v(0,Math.sqrt(t.D(t)))
r=u.b6(s)
q=new V.Q(a.a,a.b,a.c)
p=s.R(0).D(q)
o=r.R(0).D(q)
n=u.R(0).D(q)
return V.aV(s.a,r.a,u.a,p,s.b,r.b,u.b,o,s.c,r.c,u.c,n,0,0,0,1)},
be:function(){var u=$.kY
if(u==null){u=new V.a5(0,0)
$.kY=u}return u},
kZ:function(){var u=$.cy
if(u==null){u=new V.ag(0,0,0)
$.cy=u}return u},
l2:function(a,b,c,d){if(c<0){a+=c
c=-c}if(d<0){b+=d
d=-d}return new V.dU(a,b,c,d)},
ej:function(){var u=$.lf
if(u==null){u=new V.Q(0,0,0)
$.lf=u}return u},
lg:function(){var u=$.le
if(u==null){u=new V.Q(0,1,0)
$.le=u}return u},
mD:function(){var u=$.iM
if(u==null){u=new V.Q(0,0,1)
$.iM=u}return u},
a3:function a3(a,b,c){this.a=a
this.b=b
this.c=c},
aF:function aF(a,b,c,d){var _=this
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
am:function am(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){var _=this
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
ag:function ag(a,b,c){this.a=a
this.b=b
this.c=c},
bf:function bf(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
dU:function dU(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
U:function U(a,b){this.a=a
this.b=b},
Q:function Q(a,b,c){this.a=a
this.b=b
this.c=c},
X:function(a,b){var u,t,s,r
if(a.length!==1||b.length!==1)throw H.i(P.r("The given low and high character strings for a RangeMatcher must have one and only one characters."))
u=C.i.aN(a,0)
t=C.i.aN(b,0)
s=new V.hL()
if(u>t){r=t
t=u
u=r}s.a=u
s.b=t
return s},
u:function(a){var u=new V.hV()
u.f1(a)
return u},
iq:function(){var u,t
u=new V.ip()
t=P.f
u.sig(new H.aS([t,V.cC]))
u.sik(new H.aS([t,V.cI]))
u.c=null
return u},
b8:function b8(){},
as:function as(){},
dH:function dH(){},
an:function an(){this.a=null},
hL:function hL(){this.b=this.a=null},
hV:function hV(){this.a=null},
cC:function cC(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
e9:function e9(a,b,c){this.a=a
this.b=b
this.c=c},
cI:function cI(a,b){this.a=a
this.b=b
this.c=null},
ip:function ip(){this.c=this.b=this.a=null},
cJ:function cJ(a){this.b=a
this.a=this.c=null},
nm:function(a){P.mC(C.K,new V.jV(a))},
mx:function(a,b){var u=new V.hZ()
u.f2(a,!0)
return u},
bq:function bq(){},
jV:function jV(a){this.a=a},
fA:function fA(a){var _=this
_.a=a
_.d=_.c=_.b=null},
fW:function fW(a){var _=this
_.a=a
_.d=_.c=_.b=null},
fX:function fX(a){var _=this
_.a=a
_.d=_.c=_.b=null},
hG:function hG(a){var _=this
_.a=a
_.d=_.c=_.b=null},
hZ:function hZ(){this.b=this.a=null},
i0:function i0(a){this.a=a},
i_:function i_(a){this.a=a},
i1:function i1(a){this.a=a}},U={
k2:function(){var u=new U.ft()
u.a=!0
u.b=1e12
u.c=-1e12
u.d=0
u.e=100
u.f=0
u.x=0
u.r=0
return u},
kH:function(a){var u=new U.dk()
u.a=a
return u},
ft:function ft(){var _=this
_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
dk:function dk(){this.b=this.a=null},
co:function co(){var _=this
_.d=_.c=_.b=_.a=_.r=_.f=_.e=null},
ab:function ab(){},
eg:function eg(){var _=this
_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
eh:function eh(){var _=this
_.fx=_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
ei:function ei(){var _=this
_.r=_.f=_.e=_.d=_.c=_.b=_.a=null}},M={dj:function dj(){var _=this
_.d=_.c=_.b=_.a=_.f=_.e=null},dl:function dl(){var _=this
_.f=_.e=_.d=_.c=_.b=_.a=null},dr:function dr(){var _=this
_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},av:function av(){}},A={
mj:function(a,b){var u,t
u=a.al
t=new A.dJ(b,u)
t.cX(b,u)
t.f_(a,b)
return t},
ke:function(a,b,c,d,e){var u=new A.iy(a,b,c,e)
u.f=d
u.siw(P.mi(d,0,!1,P.C))
return u},
de:function de(a,b,c){this.a=a
this.b=b
this.c=c},
fk:function fk(a){this.a=a},
dJ:function dJ(a,b){var _=this
_.br=_.dT=_.bq=_.al=_.at=_.y2=_.y1=_.x2=_.x1=_.ry=_.rx=_.r2=_.r1=_.k4=_.k3=_.k2=_.k1=_.id=_.go=_.fy=_.fx=_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=null
_.e8=_.cr=_.e7=_.bE=_.e6=_.e5=_.bD=_.bC=_.e4=_.e3=_.bB=_.bA=_.bz=_.e2=_.e1=_.by=_.e0=_.e_=_.bx=_.dZ=_.dY=_.bw=_.bv=_.dX=_.dW=_.bu=_.bt=_.dV=_.dU=_.bs=null
_.cw=_.ec=_.cv=_.eb=_.cu=_.ea=_.ct=_.e9=_.cs=null
_.a=a
_.b=b
_.y=_.x=_.r=_.f=_.e=_.d=_.c=null},
hj:function hj(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5){var _=this
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
_.al=b4
_.bq=b5},
cK:function cK(a,b,c){this.a=a
this.b=b
this.c=c},
cO:function cO(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.x=h},
cM:function cM(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},
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
cN:function cN(a,b,c,d,e,f,g,h,i,j){var _=this
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
cQ:function cQ(a,b,c,d,e,f,g,h,i,j,k,l,m,n){var _=this
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
cB:function cB(){},
bP:function bP(a,b){this.a=a
this.b=b},
dY:function dY(a,b){var _=this
_.db=_.cy=_.cx=_.ch=_.Q=_.z=null
_.a=a
_.b=b
_.y=_.x=_.r=_.f=_.e=_.d=_.c=null},
eb:function eb(){},
iE:function iE(a){this.a=a},
M:function M(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
iA:function iA(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
iB:function iB(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
iD:function iD(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
iy:function iy(a,b,c,d){var _=this
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
iz:function iz(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
I:function I(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
iC:function iC(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
iF:function iF(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
cL:function cL(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
ap:function ap(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
ah:function ah(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
ad:function ad(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d}},F={
jG:function(a){var u=a.a>0?1:0
if(a.b>0)u+=2
return(a.c>0?u+4:u)*2},
d3:function(a,b,c,d,a0,a1,a2,a3,a4){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e
u={}
t=a1+a2
s=t+a3
r=a2+a3
q=a3+a1
p=new V.Q(s,r+a1,q+a2)
u.a=p
o=a1-a2
n=a2-a3
m=a3-a1
l=new V.Q(o+a3,n+a1,m+a2)
u.b=l
k=new V.Q(o-a3,n-a1,m-a2)
u.c=k
j=new V.Q(t-a3,r-a1,q-a2)
u.d=j
if(s>0){u.d=l
u.b=j
s=l
t=j}else{s=j
t=l}for(q=s,s=t,t=p,r=k,i=0;i<a4;++i,h=q,q=t,t=s,s=r,r=h){u.a=s
u.b=r
u.c=q
u.d=t}g=F.jG(t)
f=F.jG(u.b)
e=F.no(d,a0,new F.jF(u,F.jG(u.c),F.jG(u.d),f,g,c),b)
if(e!=null)a.jE(e)},
no:function(a,b,c,d){var u,t,s,r,q,p,o,n,m,l,k,j,i,h
H.n(c,{func:1,ret:-1,args:[F.ax,P.z,P.z]})
if(a<1)return
if(b<1)return
u=F.kb()
t=H.c([],[F.ax])
P.c7("FLAG A\n")
for(s=0;s<=b;++s){r=s/b
q=u.a
if(r<0)p=0
else p=r>1?1:r
q.toString
o=F.iN(null,null,new V.aF(p,0,0,1),null,null,new V.a5(r,1),null,null,0)
q.h(0,o)
c.$3(o,r,0)
C.a.h(t,o.cn(d))}P.c7("FLAG B\n")
for(s=1;s<=a;++s){n=s/a
for(q=n>1,p=n<0,m=1-n,l=0;l<=b;++l){r=l/b
k=u.a
if(r<0)j=0
else j=r>1?1:r
if(p)i=0
else i=q?1:n
if(p)h=0
else h=q?1:n
k.toString
o=F.iN(null,null,new V.aF(j,i,h,1),null,null,new V.a5(r,m),null,null,0)
k.h(0,o)
c.$3(o,r,n)
C.a.h(t,o.cn(d))}}P.c7("FLAG C\n")
u.d.iW(a+1,b+1,t)
P.c7("FLAG D\n")
return u},
cm:function(a,b,c){var u,t
u=new F.a4()
t=a.a
if(t==null)H.t(P.r("May not create a face with a first vertex which is not attached to a shape."))
if(t!=b.a||t!=c.a)H.t(P.r("May not create a face with vertices attached to different shapes."))
u.a=a
C.a.h(a.d.b,u)
u.b=b
C.a.h(b.d.c,u)
u.c=c
C.a.h(c.d.d,u)
C.a.h(u.a.a.d.b,u)
u.a.a.a4()
return u},
mg:function(a,b){var u,t
u=new F.bb()
t=a.a
if(t==null)H.t(P.r("May not create a line with a start vertex which is not attached to a shape."))
if(t!=b.a)H.t(P.r("May not create a line with vertices attached to different shapes."))
u.a=a
C.a.h(a.c.b,u)
u.b=b
C.a.h(b.c.c,u)
C.a.h(u.a.a.c.b,u)
u.a.a.a4()
return u},
kb:function(){var u,t
u=new F.dW()
t=new F.iO(u)
t.b=!1
t.six(H.c([],[F.ax]))
u.a=t
t=new F.hY(u)
t.sc9(H.c([],[F.bB]))
u.b=t
t=new F.hX(u)
t.sfN(H.c([],[F.bb]))
u.c=t
t=new F.hW(u)
t.sfC(H.c([],[F.a4]))
u.d=t
u.e=null
return u},
iN:function(a,b,c,d,e,f,g,h,i){var u,t,s
u=new F.ax()
t=new F.iT(u)
t.sc9(H.c([],[F.bB]))
u.b=t
t=new F.iS(u)
s=[F.bb]
t.sfO(H.c([],s))
t.sfP(H.c([],s))
u.c=t
t=new F.iP(u)
s=[F.a4]
t.sfD(H.c([],s))
t.sfE(H.c([],s))
t.sfF(H.c([],s))
u.d=t
h=$.lQ()
u.e=0
t=$.aK()
s=h.a
u.f=(s&t.a)!==0?d:null
u.r=(s&$.bl().a)!==0?e:null
u.x=(s&$.bk().a)!==0?b:null
u.y=(s&$.bm().a)!==0?f:null
u.z=(s&$.bn().a)!==0?g:null
u.Q=(s&$.lR().a)!==0?c:null
u.ch=(s&$.ca().a)!==0?i:0
u.cx=(s&$.bj().a)!==0?a:null
return u},
jF:function jF(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
a4:function a4(){var _=this
_.e=_.d=_.c=_.b=_.a=null},
bb:function bb(){this.b=this.a=null},
bB:function bB(){this.a=null},
dW:function dW(){var _=this
_.e=_.d=_.c=_.b=_.a=null},
hW:function hW(a){this.a=a
this.b=null},
hX:function hX(a){this.a=a
this.b=null},
hY:function hY(a){this.a=a
this.b=null},
ax:function ax(){var _=this
_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
iV:function iV(a){this.a=a},
iU:function iU(a){this.a=a},
iO:function iO(a){this.a=a
this.c=this.b=null},
iP:function iP(a){var _=this
_.a=a
_.d=_.c=_.b=null},
iQ:function iQ(a,b){this.a=a
this.b=b},
iR:function iR(a,b){this.a=a
this.b=b},
iS:function iS(a){this.a=a
this.c=this.b=null},
iT:function iT(a){this.a=a
this.b=null}},T={cH:function cH(){},e3:function e3(){},ii:function ii(){var _=this
_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},e4:function e4(){var _=this
_.e=_.d=_.c=_.b=_.a=null},ij:function ij(a){var _=this
_.a=a
_.e=_.d=_.c=_.b=null},il:function il(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},ik:function ik(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g}},Q={
lz:function(){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6
u=V.mx("Test 019",!0)
t=W.k0(null,null)
t.className="pageLargeCanvas"
t.id="testCanvas"
C.k.B(u.a,t)
s=[P.f]
u.dC(H.c(["A test of the Material Lighting shader with an alpha texture. ","There are no mapped reflections, this is actually transparent."],s))
u.dC(H.c(["\xab[Back to Tests|../]"],s))
r=C.z.eF(document,"testCanvas")
if(r==null)H.t(P.r("Failed to find an element with the identifier, testCanvas."))
q=E.mB(r,!0,!0,!0,!1)
p=E.kL(null,!0,null,"",null,null)
o=F.kb()
F.d3(o,null,null,1,1,1,0,0,1)
F.d3(o,null,null,1,1,0,1,0,3)
F.d3(o,null,null,1,1,0,0,1,2)
F.d3(o,null,null,1,1,-1,0,0,0)
F.d3(o,null,null,1,1,0,-1,0,0)
F.d3(o,null,null,1,1,0,0,-1,3)
o.aA()
p.sbO(0,o)
n=X.k4(!0,!0,!1,null,2000,null,0)
if(n.b){n.b=!1
s=new D.J("clearColor",!0,!1,n,[P.N])
s.b=!0
n.ap(s)}s=q.f
m=s.a
l=m.createTexture()
C.b.a8(m,34067,l)
C.b.au(m,34067,10242,10497)
C.b.au(m,34067,10243,10497)
C.b.au(m,34067,10241,9729)
C.b.au(m,34067,10240,9729)
C.b.a8(m,34067,null)
k=new T.e4()
k.a=0
k.b=l
k.c=!1
k.d=0
s.aP(k,l,"../resources/maskonaive/posx.jpg",34069,!1,!1)
s.aP(k,l,"../resources/maskonaive/negx.jpg",34070,!1,!1)
s.aP(k,l,"../resources/maskonaive/posy.jpg",34071,!1,!1)
s.aP(k,l,"../resources/maskonaive/negy.jpg",34072,!1,!1)
s.aP(k,l,"../resources/maskonaive/posz.jpg",34073,!1,!1)
s.aP(k,l,"../resources/maskonaive/negz.jpg",34074,!1,!1)
j=q.f.jB("../resources/AlphaWeave.png")
i=new O.dI()
i.sfn(O.k1(V.am))
i.e.aY(i.gh1(),i.gh3())
s=new O.aU(i,"emission")
s.c=C.c
s.f=new V.a3(0,0,0)
i.f=s
s=new O.aU(i,"ambient")
s.c=C.c
s.f=new V.a3(0,0,0)
i.r=s
s=new O.aU(i,"diffuse")
s.c=C.c
s.f=new V.a3(0,0,0)
i.x=s
s=new O.aU(i,"invDiffuse")
s.c=C.c
s.f=new V.a3(0,0,0)
i.y=s
s=new O.hl(i,"specular")
s.c=C.c
s.f=new V.a3(0,0,0)
s.ch=100
i.z=s
s=new O.hi(i,"bump")
s.c=C.c
i.Q=s
i.ch=null
s=new O.aU(i,"reflect")
s.c=C.c
s.f=new V.a3(0,0,0)
i.cx=s
s=new O.hk(i,"refract")
s.c=C.c
s.f=new V.a3(0,0,0)
s.ch=1
i.cy=s
s=new O.hh(i,"alpha")
s.c=C.c
s.f=1
i.db=s
s=new D.dC()
s.bi(D.a2)
s.sfz(H.c([],[D.bs]))
s.shR(H.c([],[D.dR]))
s.sie(H.c([],[D.dZ]))
s.sit(H.c([],[D.e5]))
s.siu(H.c([],[D.e6]))
s.siv(H.c([],[D.e7]))
s.Q=null
s.ch=null
s.cS(s.gh_(),s.ghB(),s.ghF())
i.dx=s
m=s.Q
if(m==null){m=D.K()
s.Q=m
s=m}else s=m
s.h(0,i.ghZ())
s=i.dx
m=s.ch
if(m==null){m=D.K()
s.ch=m
s=m}else s=m
s.h(0,i.gaM())
i.dy=null
s=i.dx
h=V.lg()
m=U.kH(V.kS(V.kZ(),h,new V.Q(1,-2,-3)))
g=new V.a3(1,1,1)
f=new D.bs()
f.c=new V.a3(1,1,1)
f.a=V.mD()
e=f.b
f.b=m
m.gp().h(0,f.gf7())
m=new D.J("mover",e,f.b,f,[U.ab])
m.b=!0
f.aw(m)
if(!f.c.t(0,g)){e=f.c
f.c=g
m=new D.J("color",e,g,f,[V.a3])
m.b=!0
f.aw(m)}s.h(0,f)
s=i.r
s.saB(0,new V.a3(0.5,0.5,0.5))
s=i.x
s.saB(0,new V.a3(0.6,0.6,0.6))
i.r.scL(j)
i.x.scL(j)
i.db.scL(j)
d=new U.co()
d.bi(U.ab)
d.aY(d.gfY(),d.ghD())
d.e=null
d.f=V.bV()
d.r=0
s=q.r
m=new U.eh()
f=U.k2()
f.scO(0,!0)
f.scE(6.283185307179586)
f.scG(0)
f.saa(0,0)
f.scF(100)
f.sT(0)
f.sco(0.5)
m.b=f
c=m.gaL()
f.gp().h(0,c)
f=U.k2()
f.scO(0,!0)
f.scE(6.283185307179586)
f.scG(0)
f.saa(0,0)
f.scF(100)
f.sT(0)
f.sco(0.5)
m.c=f
f.gp().h(0,c)
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
b=new X.at(!1,!1,!1)
e=m.d
m.d=b
f=[X.at]
c=new D.J("modifiers",e,b,m,f)
c.b=!0
m.O(c)
c=m.f
if(c!==!1){m.f=!1
c=new D.J("invertX",c,!1,m,[P.N])
c.b=!0
m.O(c)}c=m.r
if(c!==!1){m.r=!1
c=new D.J("invertY",c,!1,m,[P.N])
c.b=!0
m.O(c)}m.b4(s)
d.h(0,m)
s=q.r
m=new U.eg()
c=U.k2()
c.scO(0,!0)
c.scE(6.283185307179586)
c.scG(0)
c.saa(0,0)
c.scF(100)
c.sT(0)
c.sco(0.2)
m.b=c
c.gp().h(0,m.gaL())
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
b=new X.at(!0,!1,!1)
e=m.c
m.c=b
c=new D.J("modifiers",e,b,m,f)
c.b=!0
m.O(c)
m.b4(s)
d.h(0,m)
s=q.r
m=new U.ei()
m.c=0.01
m.d=0
m.e=0
b=new X.at(!1,!1,!1)
m.b=b
f=new D.J("modifiers",null,b,m,f)
f.b=!0
m.O(f)
m.b4(s)
d.h(0,m)
d.h(0,U.kH(V.aV(1,0,0,0,0,1,0,0,0,0,1,5,0,0,0,1)))
a=X.kW(2000,1.0471975511965976,d,0.1,null)
a0=new M.dl()
a0.sb5(null)
a0.sba(0,null)
a0.sbb(null)
s=E.kL(null,!0,null,"",null,null)
o=F.kb()
m=o.a
f=new V.Q(-1,-1,1)
f=f.v(0,Math.sqrt(f.D(f)))
a1=m.bo(new V.bf(1,2,4,6),new V.aF(1,0,0,1),new V.ag(-1,-1,0),new V.a5(0,1),f,null)
m=o.a
f=new V.Q(1,-1,1)
f=f.v(0,Math.sqrt(f.D(f)))
a2=m.bo(new V.bf(0,3,4,6),new V.aF(0,0,1,1),new V.ag(1,-1,0),new V.a5(1,1),f,null)
m=o.a
f=new V.Q(1,1,1)
f=f.v(0,Math.sqrt(f.D(f)))
a3=m.bo(new V.bf(0,2,5,6),new V.aF(0,1,0,1),new V.ag(1,1,0),new V.a5(1,0),f,null)
m=o.a
f=V.be()
c=new V.Q(-1,1,1)
c=c.v(0,Math.sqrt(c.D(c)))
a4=m.bo(new V.bf(0,2,4,7),new V.aF(1,1,0,1),new V.ag(-1,1,0),f,c,null)
o.d.iV(H.c([a1,a2,a3,a4],[F.ax]))
o.aA()
s.sbO(0,o)
a0.d=s
a0.e=null
s=new O.dX()
s.b=1.0471975511965976
s.d=new V.a3(1,1,1)
e=s.c
s.c=k
k.gp().h(0,s.gaM())
m=new D.J("boxTexture",e,s.c,s,[T.e4])
m.b=!0
s.U(m)
a0.sbb(s)
a0.sba(0,n)
a0.sb5(a)
a5=new M.dr()
a5.sfq(0,O.k1(E.af))
a5.d.aY(a5.gh9(),a5.ghb())
a5.e=null
a5.f=null
a5.r=null
a5.x=null
a6=X.k4(!0,!0,!1,null,2000,null,0)
a5.sb5(null)
a5.sba(0,a6)
a5.sbb(null)
a5.sb5(a)
a5.sbb(i)
a5.sba(0,n)
a5.d.h(0,p)
s=M.av
m=H.c([a0,a5],[s])
f=new M.dj()
f.bi(s)
f.e=!1
f.f=null
f.aY(f.ghH(),f.ghJ())
f.a7(0,m)
s=q.d
if(s!==f){if(s!=null)s.gp().W(0,q.gcZ())
q.d=f
f.gp().h(0,q.gcZ())
q.d_()}s=q.z
if(s==null){s=D.K()
q.z=s}m={func:1,ret:-1,args:[D.w]}
f=H.n(new Q.jS(u,i),m)
if(s.b==null)s.saQ(H.c([],[m]))
s=s.b;(s&&C.a).h(s,f)
V.nm(q)},
jS:function jS(a,b){this.a=a
this.b=b}}
var w=[C,H,J,P,W,O,E,Z,D,X,V,U,M,A,F,T,Q]
hunkHelpers.setFunctionNamesIfNecessary(w)
var $={}
H.k8.prototype={}
J.a.prototype={
t:function(a,b){return a===b},
gH:function(a){return H.cz(a)},
i:function(a){return"Instance of '"+H.bX(a)+"'"}}
J.h3.prototype={
i:function(a){return String(a)},
gH:function(a){return a?519018:218159},
$iN:1}
J.dy.prototype={
t:function(a,b){return null==b},
i:function(a){return"null"},
gH:function(a){return 0},
$iL:1}
J.dA.prototype={
gH:function(a){return 0},
i:function(a){return String(a)}}
J.hF.prototype={}
J.cR.prototype={}
J.bA.prototype={
i:function(a){var u=a[$.lF()]
if(u==null)return this.eW(a)
return"JavaScript function for "+H.l(J.ar(u))},
$S:function(){return{func:1,opt:[,,,,,,,,,,,,,,,,]}},
$ibv:1}
J.aR.prototype={
h:function(a,b){H.E(b,H.y(a,0))
if(!!a.fixed$length)H.t(P.aw("add"))
a.push(b)},
W:function(a,b){var u
if(!!a.fixed$length)H.t(P.aw("remove"))
for(u=0;u<a.length;++u)if(J.a7(a[u],b)){a.splice(u,1)
return!0}return!1},
a7:function(a,b){var u,t
H.m(b,"$id",[H.y(a,0)],"$ad")
if(!!a.fixed$length)H.t(P.aw("addAll"))
for(u=b.length,t=0;t<b.length;b.length===u||(0,H.A)(b),++t)a.push(b[t])},
P:function(a,b){var u,t
H.n(b,{func:1,ret:-1,args:[H.y(a,0)]})
u=a.length
for(t=0;t<u;++t){b.$1(a[t])
if(a.length!==u)throw H.i(P.br(a))}},
l:function(a,b){var u,t
u=new Array(a.length)
u.fixed$length=Array
for(t=0;t<a.length;++t)this.Y(u,t,H.l(a[t]))
return u.join(b)},
jy:function(a){return this.l(a,"")},
js:function(a,b,c){var u,t,s
H.n(b,{func:1,ret:P.N,args:[H.y(a,0)]})
u=a.length
for(t=0;t<u;++t){s=a[t]
if(b.$1(s))return s
if(a.length!==u)throw H.i(P.br(a))}throw H.i(H.k6())},
jr:function(a,b){return this.js(a,b,null)},
E:function(a,b){if(b<0||b>=a.length)return H.k(a,b)
return a[b]},
eT:function(a,b,c){var u=a.length
if(b>u)throw H.i(P.aA(b,0,a.length,"start",null))
if(c<b||c>a.length)throw H.i(P.aA(c,b,a.length,"end",null))
if(b===c)return H.c([],[H.y(a,0)])
return H.c(a.slice(b,c),[H.y(a,0)])},
gbF:function(a){var u=a.length
if(u>0)return a[u-1]
throw H.i(H.k6())},
dE:function(a,b){var u,t
H.n(b,{func:1,ret:P.N,args:[H.y(a,0)]})
u=a.length
for(t=0;t<u;++t){if(b.$1(a[t]))return!0
if(a.length!==u)throw H.i(P.br(a))}return!1},
V:function(a,b){var u
for(u=0;u<a.length;++u)if(J.a7(a[u],b))return!0
return!1},
i:function(a){return P.k5(a,"[","]")},
gS:function(a){return new J.ak(a,a.length,0,[H.y(a,0)])},
gH:function(a){return H.cz(a)},
gm:function(a){return a.length},
sm:function(a,b){if(!!a.fixed$length)H.t(P.aw("set length"))
if(b<0)throw H.i(P.aA(b,0,null,"newLength",null))
a.length=b},
Y:function(a,b,c){H.E(c,H.y(a,0))
if(!!a.immutable$list)H.t(P.aw("indexed set"))
if(b>=a.length||b<0)throw H.i(H.d8(a,b))
a[b]=c},
$id:1,
$ib:1}
J.k7.prototype={}
J.ak.prototype={
gF:function(a){return this.d},
u:function(){var u,t,s
u=this.a
t=u.length
if(this.b!==t)throw H.i(H.A(u))
s=this.c
if(s>=t){this.sdf(null)
return!1}this.sdf(u[s]);++this.c
return!0},
sdf:function(a){this.d=H.E(a,H.y(this,0))},
$iaQ:1}
J.dz.prototype={
k8:function(a){var u
if(a>=-2147483648&&a<=2147483647)return a|0
if(isFinite(a)){u=a<0?Math.ceil(a):Math.floor(a)
return u+0}throw H.i(P.aw(""+a+".toInt()"))},
cz:function(a){var u,t
if(a>=0){if(a<=2147483647)return a|0}else if(a>=-2147483648){u=a|0
return a===u?u:u-1}t=Math.floor(a)
if(isFinite(t))return t
throw H.i(P.aw(""+a+".floor()"))},
am:function(a){if(a>0){if(a!==1/0)return Math.round(a)}else if(a>-1/0)return 0-Math.round(0-a)
throw H.i(P.aw(""+a+".round()"))},
eu:function(a,b){var u,t
if(b>20)throw H.i(P.aA(b,0,20,"fractionDigits",null))
u=a.toFixed(b)
if(a===0)t=1/a<0
else t=!1
if(t)return"-"+u
return u},
i:function(a){if(a===0&&1/a<0)return"-0.0"
else return""+a},
gH:function(a){var u,t,s,r,q
u=a|0
if(a===u)return 536870911&u
t=Math.abs(a)
s=Math.log(t)/0.6931471805599453|0
r=Math.pow(2,s)
q=t<1?t/r:r/t
return 536870911&((q*9007199254740992|0)+(q*3542243181176521|0))*599197+s*1259},
eK:function(a,b){var u=a%b
if(u===0)return 0
if(u>0)return u
if(b<0)return u-b
else return u+b},
eZ:function(a,b){if((a|0)===a)if(b>=1||b<-1)return a/b|0
return this.dw(a,b)},
a3:function(a,b){return(a|0)===a?a/b|0:this.dw(a,b)},
dw:function(a,b){var u=a/b
if(u>=-2147483648&&u<=2147483647)return u|0
if(u>0){if(u!==1/0)return Math.floor(u)}else if(u>-1/0)return Math.ceil(u)
throw H.i(P.aw("Result of truncating division is "+H.l(u)+": "+H.l(a)+" ~/ "+b))},
bl:function(a,b){var u
if(a>0)u=this.ic(a,b)
else{u=b>31?31:b
u=a>>u>>>0}return u},
ic:function(a,b){return b>31?0:a>>>b},
$iz:1,
$ia1:1}
J.dx.prototype={$iC:1}
J.dw.prototype={}
J.bT.prototype={
cm:function(a,b){if(b<0)throw H.i(H.d8(a,b))
if(b>=a.length)H.t(H.d8(a,b))
return a.charCodeAt(b)},
aN:function(a,b){if(b>=a.length)throw H.i(H.d8(a,b))
return a.charCodeAt(b)},
G:function(a,b){if(typeof b!=="string")throw H.i(P.jZ(b,null,null))
return a+b},
eS:function(a,b,c){var u
if(c>a.length)throw H.i(P.aA(c,0,a.length,null,null))
u=c+b.length
if(u>a.length)return!1
return b===a.substring(c,u)},
bP:function(a,b){return this.eS(a,b,0)},
bg:function(a,b,c){if(c==null)c=a.length
if(b<0)throw H.i(P.hK(b,null,null))
if(b>c)throw H.i(P.hK(b,null,null))
if(c>a.length)throw H.i(P.hK(c,null,null))
return a.substring(b,c)},
bf:function(a,b){return this.bg(a,b,null)},
kb:function(a){return a.toLowerCase()},
A:function(a,b){var u,t
if(0>=b)return""
if(b===1||a.length===0)return a
if(b!==b>>>0)throw H.i(C.H)
for(u=a,t="";!0;){if((b&1)===1)t=u+t
b=b>>>1
if(b===0)break
u+=u}return t},
jL:function(a,b,c){var u=b-a.length
if(u<=0)return a
return this.A(c,u)+a},
ai:function(a,b){return this.jL(a,b," ")},
i:function(a){return a},
gH:function(a){var u,t,s
for(u=a.length,t=0,s=0;s<u;++s){t=536870911&t+a.charCodeAt(s)
t=536870911&t+((524287&t)<<10)
t^=t>>6}t=536870911&t+((67108863&t)<<3)
t^=t>>11
return 536870911&t+((16383&t)<<15)},
gm:function(a){return a.length},
$ikV:1,
$if:1}
H.q.prototype={
gm:function(a){return this.a.length},
j:function(a,b){return C.i.cm(this.a,b)},
$aee:function(){return[P.C]},
$av:function(){return[P.C]},
$ad:function(){return[P.C]},
$ab:function(){return[P.C]}}
H.fH.prototype={}
H.bU.prototype={
gS:function(a){return new H.cq(this,this.gm(this),0,[H.aj(this,"bU",0)])},
bM:function(a,b){return this.eV(0,H.n(b,{func:1,ret:P.N,args:[H.aj(this,"bU",0)]}))}}
H.cq.prototype={
gF:function(a){return this.d},
u:function(){var u,t,s,r
u=this.a
t=J.kq(u)
s=t.gm(u)
if(this.b!==s)throw H.i(P.br(u))
r=this.c
if(r>=s){this.sb0(null)
return!1}this.sb0(t.E(u,r));++this.c
return!0},
sb0:function(a){this.d=H.E(a,H.y(this,0))},
$iaQ:1}
H.he.prototype={
gS:function(a){return new H.hf(J.bJ(this.a),this.b,this.$ti)},
gm:function(a){return J.bK(this.a)},
E:function(a,b){return this.b.$1(J.jX(this.a,b))},
$ad:function(a,b){return[b]}}
H.hf.prototype={
u:function(){var u=this.b
if(u.u()){this.sb0(this.c.$1(u.gF(u)))
return!0}this.sb0(null)
return!1},
gF:function(a){return this.a},
sb0:function(a){this.a=H.E(a,H.y(this,1))},
$aaQ:function(a,b){return[b]}}
H.hg.prototype={
gm:function(a){return J.bK(this.a)},
E:function(a,b){return this.b.$1(J.jX(this.a,b))},
$abU:function(a,b){return[b]},
$ad:function(a,b){return[b]}}
H.cS.prototype={
gS:function(a){return new H.iY(J.bJ(this.a),this.b,this.$ti)}}
H.iY.prototype={
u:function(){var u,t
for(u=this.a,t=this.b;u.u();)if(t.$1(u.gF(u)))return!0
return!1},
gF:function(a){var u=this.a
return u.gF(u)}}
H.bR.prototype={}
H.ee.prototype={}
H.ed.prototype={}
H.hM.prototype={}
H.iv.prototype={
ah:function(a){var u,t,s
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
H.hB.prototype={
i:function(a){var u=this.b
if(u==null)return"NoSuchMethodError: "+H.l(this.a)
return"NoSuchMethodError: method not found: '"+u+"' on null"}}
H.h5.prototype={
i:function(a){var u,t
u=this.b
if(u==null)return"NoSuchMethodError: "+H.l(this.a)
t=this.c
if(t==null)return"NoSuchMethodError: method not found: '"+u+"' ("+H.l(this.a)+")"
return"NoSuchMethodError: method not found: '"+u+"' on '"+t+"' ("+H.l(this.a)+")"}}
H.iH.prototype={
i:function(a){var u=this.a
return u.length===0?"Error":"Error: "+u}}
H.jW.prototype={
$1:function(a){if(!!J.a_(a).$ibu)if(a.$thrownJsError==null)a.$thrownJsError=this.a
return a},
$S:17}
H.eU.prototype={
i:function(a){var u,t
u=this.b
if(u!=null)return u
u=this.a
t=u!==null&&typeof u==="object"?u.stack:null
u=t==null?"":t
this.b=u
return u},
$iao:1}
H.cf.prototype={
i:function(a){return"Closure '"+H.bX(this).trim()+"'"},
$ibv:1,
gke:function(){return this},
$C:"$1",
$R:1,
$D:null}
H.ie.prototype={}
H.i5.prototype={
i:function(a){var u=this.$static_name
if(u==null)return"Closure of unknown static method"
return"Closure '"+H.c9(u)+"'"}}
H.cc.prototype={
t:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof H.cc))return!1
return this.a===b.a&&this.b===b.b&&this.c===b.c},
gH:function(a){var u,t
u=this.c
if(u==null)t=H.cz(this.a)
else t=typeof u!=="object"?J.bI(u):H.cz(u)
return(t^H.cz(this.b))>>>0},
i:function(a){var u=this.c
if(u==null)u=this.a
return"Closure '"+H.l(this.d)+"' of "+("Instance of '"+H.bX(u)+"'")}}
H.ix.prototype={
i:function(a){return this.a}}
H.fr.prototype={
i:function(a){return this.a}}
H.hT.prototype={
i:function(a){return"RuntimeError: "+H.l(this.a)}}
H.aS.prototype={
gm:function(a){return this.a},
ga9:function(a){return new H.dD(this,[H.y(this,0)])},
dM:function(a,b){var u,t
if(typeof b==="string"){u=this.b
if(u==null)return!1
return this.dc(u,b)}else if(typeof b==="number"&&(b&0x3ffffff)===b){t=this.c
if(t==null)return!1
return this.dc(t,b)}else return this.jw(b)},
jw:function(a){var u=this.d
if(u==null)return!1
return this.cA(this.bX(u,J.bI(a)&0x3ffffff),a)>=0},
j:function(a,b){var u,t,s,r
if(typeof b==="string"){u=this.b
if(u==null)return
t=this.bj(u,b)
s=t==null?null:t.b
return s}else if(typeof b==="number"&&(b&0x3ffffff)===b){r=this.c
if(r==null)return
t=this.bj(r,b)
s=t==null?null:t.b
return s}else return this.jx(b)},
jx:function(a){var u,t,s
u=this.d
if(u==null)return
t=this.bX(u,J.bI(a)&0x3ffffff)
s=this.cA(t,a)
if(s<0)return
return t[s].b},
Y:function(a,b,c){var u,t,s,r,q,p
H.E(b,H.y(this,0))
H.E(c,H.y(this,1))
if(typeof b==="string"){u=this.b
if(u==null){u=this.c7()
this.b=u}this.d2(u,b,c)}else if(typeof b==="number"&&(b&0x3ffffff)===b){t=this.c
if(t==null){t=this.c7()
this.c=t}this.d2(t,b,c)}else{s=this.d
if(s==null){s=this.c7()
this.d=s}r=J.bI(b)&0x3ffffff
q=this.bX(s,r)
if(q==null)this.cc(s,r,[this.c8(b,c)])
else{p=this.cA(q,b)
if(p>=0)q[p].b=c
else q.push(this.c8(b,c))}}},
P:function(a,b){var u,t
H.n(b,{func:1,ret:-1,args:[H.y(this,0),H.y(this,1)]})
u=this.e
t=this.r
for(;u!=null;){b.$2(u.a,u.b)
if(t!==this.r)throw H.i(P.br(this))
u=u.c}},
d2:function(a,b,c){var u
H.E(b,H.y(this,0))
H.E(c,H.y(this,1))
u=this.bj(a,b)
if(u==null)this.cc(a,b,this.c8(b,c))
else u.b=c},
fV:function(){this.r=this.r+1&67108863},
c8:function(a,b){var u,t
u=new H.h8(H.E(a,H.y(this,0)),H.E(b,H.y(this,1)))
if(this.e==null){this.f=u
this.e=u}else{t=this.f
u.d=t
t.c=u
this.f=u}++this.a
this.fV()
return u},
cA:function(a,b){var u,t
if(a==null)return-1
u=a.length
for(t=0;t<u;++t)if(J.a7(a[t].a,b))return t
return-1},
i:function(a){return P.kR(this)},
bj:function(a,b){return a[b]},
bX:function(a,b){return a[b]},
cc:function(a,b,c){a[b]=c},
fw:function(a,b){delete a[b]},
dc:function(a,b){return this.bj(a,b)!=null},
c7:function(){var u=Object.create(null)
this.cc(u,"<non-identifier-key>",u)
this.fw(u,"<non-identifier-key>")
return u}}
H.h8.prototype={}
H.dD.prototype={
gm:function(a){return this.a.a},
gS:function(a){var u,t
u=this.a
t=new H.h9(u,u.r,this.$ti)
t.c=u.e
return t}}
H.h9.prototype={
gF:function(a){return this.d},
u:function(){var u=this.a
if(this.b!==u.r)throw H.i(P.br(u))
else{u=this.c
if(u==null){this.sd1(null)
return!1}else{this.sd1(u.a)
this.c=this.c.c
return!0}}},
sd1:function(a){this.d=H.E(a,H.y(this,0))},
$iaQ:1}
H.jO.prototype={
$1:function(a){return this.a(a)},
$S:17}
H.jP.prototype={
$2:function(a,b){return this.a(a,b)},
$S:37}
H.jQ.prototype={
$1:function(a){return this.a(H.H(a))},
$S:35}
H.h4.prototype={
i:function(a){return"RegExp/"+this.a+"/"},
$ikV:1}
H.cw.prototype={$inK:1}
H.dL.prototype={
gm:function(a){return a.length},
$iF:1,
$aF:function(){}}
H.cv.prototype={
j:function(a,b){H.bF(b,a,a.length)
return a[b]},
$abR:function(){return[P.z]},
$av:function(){return[P.z]},
$id:1,
$ad:function(){return[P.z]},
$ib:1,
$ab:function(){return[P.z]}}
H.dM.prototype={
$abR:function(){return[P.C]},
$av:function(){return[P.C]},
$id:1,
$ad:function(){return[P.C]},
$ib:1,
$ab:function(){return[P.C]}}
H.ht.prototype={
j:function(a,b){H.bF(b,a,a.length)
return a[b]}}
H.hu.prototype={
j:function(a,b){H.bF(b,a,a.length)
return a[b]}}
H.hv.prototype={
j:function(a,b){H.bF(b,a,a.length)
return a[b]}}
H.hw.prototype={
j:function(a,b){H.bF(b,a,a.length)
return a[b]}}
H.hx.prototype={
j:function(a,b){H.bF(b,a,a.length)
return a[b]}}
H.dN.prototype={
gm:function(a){return a.length},
j:function(a,b){H.bF(b,a,a.length)
return a[b]},
$inL:1}
H.hy.prototype={
gm:function(a){return a.length},
j:function(a,b){H.bF(b,a,a.length)
return a[b]}}
H.cW.prototype={}
H.cX.prototype={}
H.cY.prototype={}
H.cZ.prototype={}
P.j_.prototype={
$1:function(a){var u,t
u=this.a
t=u.a
u.a=null
t.$0()},
$S:13}
P.iZ.prototype={
$1:function(a){var u,t
this.a.a=H.n(a,{func:1,ret:-1})
u=this.b
t=this.c
u.firstChild?u.removeChild(t):u.appendChild(t)},
$S:38}
P.j0.prototype={
$0:function(){this.a.$0()},
$S:2}
P.j1.prototype={
$0:function(){this.a.$0()},
$S:2}
P.f_.prototype={
fg:function(a,b){if(self.setTimeout!=null)this.b=self.setTimeout(H.c4(new P.jB(this,b),0),a)
else throw H.i(P.aw("`setTimeout()` not found."))},
fh:function(a,b){if(self.setTimeout!=null)this.b=self.setInterval(H.c4(new P.jA(this,a,Date.now(),b),0),a)
else throw H.i(P.aw("Periodic timer."))},
$ib2:1}
P.jB.prototype={
$0:function(){var u=this.a
u.b=null
u.c=1
this.b.$0()},
$S:3}
P.jA.prototype={
$0:function(){var u,t,s,r
u=this.a
t=u.c+1
s=this.b
if(s>0){r=Date.now()-this.c
if(r>(t+1)*s)t=C.h.eZ(r,s)}u.c=t
this.d.$1(u)},
$S:2}
P.b7.prototype={
jD:function(a){if(this.c!==6)return!0
return this.b.b.cK(H.n(this.d,{func:1,ret:P.N,args:[P.R]}),a.a,P.N,P.R)},
jv:function(a){var u,t,s,r
u=this.e
t=P.R
s={futureOr:1,type:H.y(this,1)}
r=this.b.b
if(H.fg(u,{func:1,args:[P.R,P.ao]}))return H.kp(r.jY(u,a.a,a.b,null,t,P.ao),s)
else return H.kp(r.cK(H.n(u,{func:1,args:[P.R]}),a.a,null,t),s)}}
P.aC.prototype={
es:function(a,b,c){var u,t,s,r
u=H.y(this,0)
H.n(a,{func:1,ret:{futureOr:1,type:c},args:[u]})
t=$.Z
if(t!==C.l){t.toString
H.n(a,{func:1,ret:{futureOr:1,type:c},args:[u]})
if(b!=null)b=P.mT(b,t)}H.n(a,{func:1,ret:{futureOr:1,type:c},args:[u]})
s=new P.aC(0,$.Z,[c])
r=b==null?1:3
this.d3(new P.b7(s,r,a,b,[u,c]))
return s},
k7:function(a,b){return this.es(a,null,b)},
d3:function(a){var u,t
u=this.a
if(u<=1){a.a=H.j(this.c,"$ib7")
this.c=a}else{if(u===2){t=H.j(this.c,"$iaC")
u=t.a
if(u<4){t.d3(a)
return}this.a=u
this.c=t.c}u=this.b
u.toString
P.jJ(null,null,u,H.n(new P.j9(this,a),{func:1,ret:-1}))}},
dr:function(a){var u,t,s,r,q,p
u={}
u.a=a
if(a==null)return
t=this.a
if(t<=1){s=H.j(this.c,"$ib7")
this.c=a
if(s!=null){for(r=a;q=r.a,q!=null;r=q);r.a=s}}else{if(t===2){p=H.j(this.c,"$iaC")
t=p.a
if(t<4){p.dr(a)
return}this.a=t
this.c=p.c}u.a=this.bk(a)
t=this.b
t.toString
P.jJ(null,null,t,H.n(new P.jd(u,this),{func:1,ret:-1}))}},
cb:function(){var u=H.j(this.c,"$ib7")
this.c=null
return this.bk(u)},
bk:function(a){var u,t,s
for(u=a,t=null;u!=null;t=u,u=s){s=u.a
u.a=t}return t},
d7:function(a){var u,t,s
u=H.y(this,0)
H.kp(a,{futureOr:1,type:u})
t=this.$ti
if(H.d7(a,"$icn",t,"$acn"))if(H.d7(a,"$iaC",t,null))P.lh(a,this)
else P.mI(a,this)
else{s=this.cb()
H.E(a,u)
this.a=4
this.c=a
P.cV(this,s)}},
d8:function(a,b){var u
H.j(b,"$iao")
u=this.cb()
this.a=8
this.c=new P.ae(a,b)
P.cV(this,u)},
$icn:1}
P.j9.prototype={
$0:function(){P.cV(this.a,this.b)},
$S:2}
P.jd.prototype={
$0:function(){P.cV(this.b,this.a.a)},
$S:2}
P.ja.prototype={
$1:function(a){var u=this.a
u.a=0
u.d7(a)},
$S:13}
P.jb.prototype={
$2:function(a,b){H.j(b,"$iao")
this.a.d8(a,b)},
$1:function(a){return this.$2(a,null)},
$S:32}
P.jc.prototype={
$0:function(){this.a.d8(this.b,this.c)},
$S:2}
P.jg.prototype={
$0:function(){var u,t,s,r,q,p,o
u=null
try{r=this.c
u=r.b.b.eq(H.n(r.d,{func:1}),null)}catch(q){t=H.ay(q)
s=H.c6(q)
if(this.d){r=H.j(this.a.a.c,"$iae").a
p=t
p=r==null?p==null:r===p
r=p}else r=!1
p=this.b
if(r)p.b=H.j(this.a.a.c,"$iae")
else p.b=new P.ae(t,s)
p.a=!0
return}if(!!J.a_(u).$icn){if(u instanceof P.aC&&u.a>=4){if(u.a===8){r=this.b
r.b=H.j(u.c,"$iae")
r.a=!0}return}o=this.a.a
r=this.b
r.b=u.k7(new P.jh(o),null)
r.a=!1}},
$S:3}
P.jh.prototype={
$1:function(a){return this.a},
$S:31}
P.jf.prototype={
$0:function(){var u,t,s,r,q,p,o
try{s=this.b
r=H.y(s,0)
q=H.E(this.c,r)
p=H.y(s,1)
this.a.b=s.b.b.cK(H.n(s.d,{func:1,ret:{futureOr:1,type:p},args:[r]}),q,{futureOr:1,type:p},r)}catch(o){u=H.ay(o)
t=H.c6(o)
s=this.a
s.b=new P.ae(u,t)
s.a=!0}},
$S:3}
P.je.prototype={
$0:function(){var u,t,s,r,q,p,o,n
try{u=H.j(this.a.a.c,"$iae")
r=this.c
if(r.jD(u)&&r.e!=null){q=this.b
q.b=r.jv(u)
q.a=!1}}catch(p){t=H.ay(p)
s=H.c6(p)
r=H.j(this.a.a.c,"$iae")
q=r.a
o=t
n=this.b
if(q==null?o==null:q===o)n.b=r
else n.b=new P.ae(t,s)
n.a=!0}},
$S:3}
P.em.prototype={}
P.i8.prototype={
gm:function(a){var u,t,s,r
u={}
t=new P.aC(0,$.Z,[P.C])
u.a=0
s=H.y(this,0)
r=H.n(new P.ia(u,this),{func:1,ret:-1,args:[s]})
H.n(new P.ib(u,t),{func:1,ret:-1})
W.a6(this.a,this.b,r,!1,s)
return t}}
P.ia.prototype={
$1:function(a){H.E(a,H.y(this.b,0));++this.a.a},
$S:function(){return{func:1,ret:P.L,args:[H.y(this.b,0)]}}}
P.ib.prototype={
$0:function(){this.b.d7(this.a.a)},
$S:2}
P.cE.prototype={}
P.i9.prototype={}
P.b2.prototype={}
P.ae.prototype={
i:function(a){return H.l(this.a)},
$ibu:1}
P.jE.prototype={$inZ:1}
P.jI.prototype={
$0:function(){var u,t,s
u=this.a
t=u.a
if(t==null){s=new P.dP()
u.a=s
u=s}else u=t
t=this.b
if(t==null)throw H.i(u)
s=H.i(u)
s.stack=t.i(0)
throw s},
$S:2}
P.jn.prototype={
jZ:function(a){var u,t,s
H.n(a,{func:1,ret:-1})
try{if(C.l===$.Z){a.$0()
return}P.ln(null,null,this,a,-1)}catch(s){u=H.ay(s)
t=H.c6(s)
P.jH(null,null,this,u,H.j(t,"$iao"))}},
k_:function(a,b,c){var u,t,s
H.n(a,{func:1,ret:-1,args:[c]})
H.E(b,c)
try{if(C.l===$.Z){a.$1(b)
return}P.lo(null,null,this,a,b,-1,c)}catch(s){u=H.ay(s)
t=H.c6(s)
P.jH(null,null,this,u,H.j(t,"$iao"))}},
j1:function(a,b){return new P.jp(this,H.n(a,{func:1,ret:b}),b)},
ci:function(a){return new P.jo(this,H.n(a,{func:1,ret:-1}))},
dG:function(a,b){return new P.jq(this,H.n(a,{func:1,ret:-1,args:[b]}),b)},
eq:function(a,b){H.n(a,{func:1,ret:b})
if($.Z===C.l)return a.$0()
return P.ln(null,null,this,a,b)},
cK:function(a,b,c,d){H.n(a,{func:1,ret:c,args:[d]})
H.E(b,d)
if($.Z===C.l)return a.$1(b)
return P.lo(null,null,this,a,b,c,d)},
jY:function(a,b,c,d,e,f){H.n(a,{func:1,ret:d,args:[e,f]})
H.E(b,e)
H.E(c,f)
if($.Z===C.l)return a.$2(b,c)
return P.mU(null,null,this,a,b,c,d,e,f)}}
P.jp.prototype={
$0:function(){return this.a.eq(this.b,this.c)},
$S:function(){return{func:1,ret:this.c}}}
P.jo.prototype={
$0:function(){return this.a.jZ(this.b)},
$S:3}
P.jq.prototype={
$1:function(a){var u=this.c
return this.a.k_(this.b,H.E(a,u),u)},
$S:function(){return{func:1,ret:-1,args:[this.c]}}}
P.jl.prototype={
gS:function(a){var u=new P.eB(this,this.r,this.$ti)
u.c=this.e
return u},
gm:function(a){return this.a},
V:function(a,b){var u,t
if(typeof b==="string"&&b!=="__proto__"){u=this.b
if(u==null)return!1
return H.j(u[b],"$ic0")!=null}else{t=this.fs(b)
return t}},
fs:function(a){var u=this.d
if(u==null)return!1
return this.bV(this.dg(u,a),a)>=0},
h:function(a,b){var u,t
H.E(b,H.y(this,0))
if(typeof b==="string"&&b!=="__proto__"){u=this.b
if(u==null){u=P.kh()
this.b=u}return this.d4(u,b)}else if(typeof b==="number"&&(b&1073741823)===b){t=this.c
if(t==null){t=P.kh()
this.c=t}return this.d4(t,b)}else return this.fi(0,b)},
fi:function(a,b){var u,t,s
H.E(b,H.y(this,0))
u=this.d
if(u==null){u=P.kh()
this.d=u}t=this.d9(b)
s=u[t]
if(s==null)u[t]=[this.bS(b)]
else{if(this.bV(s,b)>=0)return!1
s.push(this.bS(b))}return!0},
W:function(a,b){if(typeof b==="number"&&(b&1073741823)===b)return this.hW(this.c,b)
else return this.hT(0,b)},
hT:function(a,b){var u,t,s
u=this.d
if(u==null)return!1
t=this.dg(u,b)
s=this.bV(t,b)
if(s<0)return!1
this.dz(t.splice(s,1)[0])
return!0},
d4:function(a,b){H.E(b,H.y(this,0))
if(H.j(a[b],"$ic0")!=null)return!1
a[b]=this.bS(b)
return!0},
hW:function(a,b){var u
if(a==null)return!1
u=H.j(a[b],"$ic0")
if(u==null)return!1
this.dz(u)
delete a[b]
return!0},
d6:function(){this.r=1073741823&this.r+1},
bS:function(a){var u,t
u=new P.c0(H.E(a,H.y(this,0)))
if(this.e==null){this.f=u
this.e=u}else{t=this.f
u.c=t
t.b=u
this.f=u}++this.a
this.d6()
return u},
dz:function(a){var u,t
u=a.c
t=a.b
if(u==null)this.e=t
else u.b=t
if(t==null)this.f=u
else t.c=u;--this.a
this.d6()},
d9:function(a){return J.bI(a)&1073741823},
dg:function(a,b){return a[this.d9(b)]},
bV:function(a,b){var u,t
if(a==null)return-1
u=a.length
for(t=0;t<u;++t)if(J.a7(a[t].a,b))return t
return-1}}
P.c0.prototype={}
P.eB.prototype={
gF:function(a){return this.d},
u:function(){var u=this.a
if(this.b!==u.r)throw H.i(P.br(u))
else{u=this.c
if(u==null){this.sd5(null)
return!1}else{this.sd5(H.E(u.a,H.y(this,0)))
this.c=this.c.b
return!0}}},
sd5:function(a){this.d=H.E(a,H.y(this,0))},
$iaQ:1}
P.ha.prototype={$id:1,$ib:1}
P.v.prototype={
gS:function(a){return new H.cq(a,this.gm(a),0,[H.d9(this,a,"v",0)])},
E:function(a,b){return this.j(a,b)},
ka:function(a,b){var u,t
u=H.c([],[H.d9(this,a,"v",0)])
C.a.sm(u,this.gm(a))
for(t=0;t<this.gm(a);++t)C.a.Y(u,t,this.j(a,t))
return u},
k9:function(a){return this.ka(a,!0)},
i:function(a){return P.k5(a,"[","]")}}
P.hc.prototype={}
P.hd.prototype={
$2:function(a,b){var u,t
u=this.a
if(!u.a)this.b.a+=", "
u.a=!1
u=this.b
t=u.a+=H.l(a)
u.a=t+": "
u.a+=H.l(b)},
$S:14}
P.a9.prototype={
P:function(a,b){var u,t
H.n(b,{func:1,ret:-1,args:[H.d9(this,a,"a9",0),H.d9(this,a,"a9",1)]})
for(u=J.bJ(this.ga9(a));u.u();){t=u.gF(u)
b.$2(t,this.j(a,t))}},
gm:function(a){return J.bK(this.ga9(a))},
i:function(a){return P.kR(a)},
$iP:1}
P.js.prototype={
a7:function(a,b){var u
for(u=J.bJ(H.m(b,"$id",this.$ti,"$ad"));u.u();)this.h(0,u.gF(u))},
i:function(a){return P.k5(this,"{","}")},
E:function(a,b){var u,t,s
if(b<0)H.t(P.aA(b,0,null,"index",null))
for(u=P.mM(this,this.r,H.y(this,0)),t=0;u.u();){s=u.d
if(b===t)return s;++t}throw H.i(P.W(b,this,"index",null,t))},
$id:1,
$il4:1}
P.eC.prototype={}
P.cg.prototype={}
P.ch.prototype={}
P.fJ.prototype={
$acg:function(){return[P.f,[P.b,P.C]]}}
P.h_.prototype={
i:function(a){return this.a}}
P.fZ.prototype={
ft:function(a,b,c){var u,t,s,r,q,p
for(u=this.a,t=u.e,s=u.d,u=u.c,r=b,q=null;r<c;++r){if(r>=a.length)return H.k(a,r)
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
default:p=null}if(p!=null){if(q==null)q=new P.bg("")
if(r>b)q.a+=C.i.bg(a,b,r)
q.a+=p
b=r+1}}if(q==null)return
if(c>b)q.a+=J.m_(a,b,c)
u=q.a
return u.charCodeAt(0)==0?u:u},
$ach:function(){return[P.f,P.f]}}
P.iK.prototype={}
P.iL.prototype={
ja:function(a,b,c){var u,t,s
c=P.l1(b,c,a.length,null,null,null)
u=c-b
if(u===0)return new Uint8Array(0)
t=new Uint8Array(u*3)
s=new P.jC(t)
if(s.fG(a,b,c)!==c)s.dA(C.i.cm(a,c-1),0)
return new Uint8Array(t.subarray(0,H.mP(0,s.b,t.length)))},
j9:function(a){return this.ja(a,0,null)},
$ach:function(){return[P.f,[P.b,P.C]]}}
P.jC.prototype={
dA:function(a,b){var u,t,s,r,q
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
fG:function(a,b,c){var u,t,s,r,q,p,o
if(b!==c&&(C.i.cm(a,c-1)&64512)===55296)--c
for(u=this.c,t=u.length,s=b;s<c;++s){r=C.i.aN(a,s)
if(r<=127){q=this.b
if(q>=t)break
this.b=q+1
u[q]=r}else if((r&64512)===55296){if(this.b+3>=t)break
p=s+1
if(this.dA(r,C.i.aN(a,p)))s=p}else if(r<=2047){q=this.b
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
P.N.prototype={}
P.al.prototype={
t:function(a,b){if(b==null)return!1
return b instanceof P.al&&this.a===b.a&&!0},
gH:function(a){var u=this.a
return(u^C.h.bl(u,30))&1073741823},
i:function(a){var u,t,s,r,q,p,o,n
u=P.m7(H.mr(this))
t=P.dm(H.mp(this))
s=P.dm(H.ml(this))
r=P.dm(H.mm(this))
q=P.dm(H.mo(this))
p=P.dm(H.mq(this))
o=P.m8(H.mn(this))
n=u+"-"+t+"-"+s+" "+r+":"+q+":"+p+"."+o
return n}}
P.z.prototype={}
P.bt.prototype={
t:function(a,b){if(b==null)return!1
return b instanceof P.bt&&this.a===b.a},
gH:function(a){return C.h.gH(this.a)},
i:function(a){var u,t,s,r,q
u=new P.fG()
t=this.a
if(t<0)return"-"+new P.bt(0-t).i(0)
s=u.$1(C.h.a3(t,6e7)%60)
r=u.$1(C.h.a3(t,1e6)%60)
q=new P.fF().$1(t%1e6)
return""+C.h.a3(t,36e8)+":"+H.l(s)+":"+H.l(r)+"."+H.l(q)}}
P.fF.prototype={
$1:function(a){if(a>=1e5)return""+a
if(a>=1e4)return"0"+a
if(a>=1000)return"00"+a
if(a>=100)return"000"+a
if(a>=10)return"0000"+a
return"00000"+a},
$S:15}
P.fG.prototype={
$1:function(a){if(a>=10)return""+a
return"0"+a},
$S:15}
P.bu.prototype={}
P.dP.prototype={
i:function(a){return"Throw of null."}}
P.aE.prototype={
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
p=P.fL(this.b)
return r+q+": "+p}}
P.bY.prototype={
gbU:function(){return"RangeError"},
gbT:function(){var u,t,s
u=this.e
if(u==null){u=this.f
t=u!=null?": Not less than or equal to "+H.l(u):""}else{s=this.f
if(s==null)t=": Not greater than or equal to "+H.l(u)
else if(s>u)t=": Not in range "+H.l(u)+".."+H.l(s)+", inclusive"
else t=s<u?": Valid value range is empty":": Only valid value is "+H.l(u)}return t}}
P.h1.prototype={
gbU:function(){return"RangeError"},
gbT:function(){var u,t
u=H.a8(this.b)
if(typeof u!=="number")return u.aX()
if(u<0)return": index must not be negative"
t=this.f
if(t===0)return": no indices are valid"
return": index should be less than "+H.l(t)},
gm:function(a){return this.f}}
P.iI.prototype={
i:function(a){return"Unsupported operation: "+this.a}}
P.iG.prototype={
i:function(a){var u=this.a
return u!=null?"UnimplementedError: "+u:"UnimplementedError"}}
P.cD.prototype={
i:function(a){return"Bad state: "+this.a}}
P.fu.prototype={
i:function(a){var u=this.a
if(u==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+P.fL(u)+"."}}
P.hE.prototype={
i:function(a){return"Out of Memory"},
$ibu:1}
P.e_.prototype={
i:function(a){return"Stack Overflow"},
$ibu:1}
P.fz.prototype={
i:function(a){var u=this.a
return u==null?"Reading static variable during its initialization":"Reading static variable '"+u+"' during its initialization"}}
P.eu.prototype={
i:function(a){return"Exception: "+this.a}}
P.fU.prototype={
i:function(a){var u,t,s,r
u=this.a
t=""!==u?"FormatException: "+u:"FormatException"
s=this.b
r=s.length>78?C.i.bg(s,0,75)+"...":s
return t+"\n"+r}}
P.bv.prototype={}
P.C.prototype={}
P.d.prototype={
bM:function(a,b){var u=H.aj(this,"d",0)
return new H.cS(this,H.n(b,{func:1,ret:P.N,args:[u]}),[u])},
gm:function(a){var u,t
u=this.gS(this)
for(t=0;u.u();)++t
return t},
gaJ:function(a){var u,t
u=this.gS(this)
if(!u.u())throw H.i(H.k6())
t=u.gF(u)
if(u.u())throw H.i(H.md())
return t},
E:function(a,b){var u,t,s
if(b<0)H.t(P.aA(b,0,null,"index",null))
for(u=this.gS(this),t=0;u.u();){s=u.gF(u)
if(b===t)return s;++t}throw H.i(P.W(b,this,"index",null,t))},
i:function(a){return P.mc(this,"(",")")}}
P.aQ.prototype={}
P.b.prototype={$id:1}
P.P.prototype={}
P.L.prototype={
gH:function(a){return P.R.prototype.gH.call(this,this)},
i:function(a){return"null"}}
P.a1.prototype={}
P.R.prototype={constructor:P.R,$iR:1,
t:function(a,b){return this===b},
gH:function(a){return H.cz(this)},
i:function(a){return"Instance of '"+H.bX(this)+"'"},
toString:function(){return this.i(this)}}
P.ao.prototype={}
P.f.prototype={$ikV:1}
P.bg.prototype={
gm:function(a){return this.a.length},
i:function(a){var u=this.a
return u.charCodeAt(0)==0?u:u}}
W.x.prototype={}
W.fi.prototype={
gm:function(a){return a.length}}
W.dd.prototype={
i:function(a){return String(a)},
$idd:1}
W.fj.prototype={
i:function(a){return String(a)}}
W.cb.prototype={$icb:1}
W.df.prototype={}
W.bo.prototype={$ibo:1}
W.bN.prototype={
cP:function(a,b,c){if(c!=null)return this.fH(a,b,P.n0(c,null))
return this.fI(a,b)},
eE:function(a,b){return this.cP(a,b,null)},
fH:function(a,b,c){return a.getContext(b,c)},
fI:function(a,b){return a.getContext(b)},
$ibN:1,
$ikF:1}
W.bO.prototype={
fJ:function(a,b,c,d,e){return a.getImageData(b,c,d,e)},
jo:function(a,b,c,d,e,f){return a.drawImage(b,c,d,e,f)},
$ibO:1}
W.bp.prototype={
gm:function(a){return a.length}}
W.ci.prototype={$ici:1}
W.fv.prototype={
gm:function(a){return a.length}}
W.S.prototype={$iS:1}
W.cj.prototype={
gm:function(a){return a.length}}
W.fw.prototype={}
W.aM.prototype={}
W.aN.prototype={}
W.fx.prototype={
gm:function(a){return a.length}}
W.fy.prototype={
gm:function(a){return a.length}}
W.fB.prototype={
gm:function(a){return a.length}}
W.az.prototype={$iaz:1}
W.ck.prototype={
iY:function(a,b){return a.adoptNode(b)},
eF:function(a,b){return a.getElementById(b)}}
W.fC.prototype={
i:function(a){return String(a)}}
W.dn.prototype={
je:function(a,b){return a.createHTMLDocument(b)}}
W.dp.prototype={
gm:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.i(P.W(b,a,null,null,null))
return a[b]},
E:function(a,b){if(b<0||b>=a.length)return H.k(a,b)
return a[b]},
$iF:1,
$aF:function(){return[[P.ac,P.a1]]},
$av:function(){return[[P.ac,P.a1]]},
$id:1,
$ad:function(){return[[P.ac,P.a1]]},
$ib:1,
$ab:function(){return[[P.ac,P.a1]]},
$aB:function(){return[[P.ac,P.a1]]}}
W.dq.prototype={
i:function(a){return"Rectangle ("+H.l(a.left)+", "+H.l(a.top)+") "+H.l(this.gaI(a))+" x "+H.l(this.gaD(a))},
t:function(a,b){var u
if(b==null)return!1
if(!H.d7(b,"$iac",[P.a1],"$aac"))return!1
u=J.aq(b)
return a.left===u.gbG(b)&&a.top===u.gbK(b)&&this.gaI(a)===u.gaI(b)&&this.gaD(a)===u.gaD(b)},
gH:function(a){return W.lj(C.j.gH(a.left),C.j.gH(a.top),C.j.gH(this.gaI(a)),C.j.gH(this.gaD(a)))},
gdH:function(a){return a.bottom},
gaD:function(a){return a.height},
gbG:function(a){return a.left},
gbJ:function(a){return a.right},
gbK:function(a){return a.top},
gaI:function(a){return a.width},
$iac:1,
$aac:function(){return[P.a1]}}
W.fD.prototype={
gm:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.i(P.W(b,a,null,null,null))
return a[b]},
E:function(a,b){if(b<0||b>=a.length)return H.k(a,b)
return a[b]},
$iF:1,
$aF:function(){return[P.f]},
$av:function(){return[P.f]},
$id:1,
$ad:function(){return[P.f]},
$ib:1,
$ab:function(){return[P.f]},
$aB:function(){return[P.f]}}
W.fE.prototype={
gm:function(a){return a.length}}
W.j3.prototype={
gm:function(a){return this.b.length},
j:function(a,b){var u=this.b
if(b<0||b>=u.length)return H.k(u,b)
return H.j(u[b],"$iT")},
h:function(a,b){J.kA(this.a,b)
return b},
gS:function(a){var u=this.k9(this)
return new J.ak(u,u.length,0,[H.y(u,0)])},
$av:function(){return[W.T]},
$ad:function(){return[W.T]},
$ab:function(){return[W.T]}}
W.T.prototype={
gj0:function(a){return new W.j5(a)},
gdK:function(a){return new W.j3(a,a.children)},
gdL:function(a){var u,t,s,r
u=a.clientLeft
t=a.clientTop
s=a.clientWidth
r=a.clientHeight
if(typeof s!=="number")return s.aX()
if(s<0)s=-s*0
if(typeof r!=="number")return r.aX()
if(r<0)r=-r*0
return new P.ac(u,t,s,r,[P.a1])},
i:function(a){return a.localName},
ag:function(a,b,c,d){var u,t,s,r
if(c==null){u=$.kK
if(u==null){u=H.c([],[W.au])
t=new W.dO(u)
C.a.h(u,W.li(null))
C.a.h(u,W.lk())
$.kK=t
d=t}else d=u
u=$.kJ
if(u==null){u=new W.f5(d)
$.kJ=u
c=u}else{u.a=d
c=u}}if($.b9==null){u=document
t=u.implementation
t=(t&&C.J).je(t,"")
$.b9=t
$.k3=t.createRange()
t=$.b9
t.toString
t=t.createElement("base")
H.j(t,"$icb")
t.href=u.baseURI
u=$.b9.head;(u&&C.L).B(u,t)}u=$.b9
if(u.body==null){u.toString
t=u.createElement("body")
u.body=H.j(t,"$ibo")}u=$.b9
if(!!this.$ibo)s=u.body
else{t=a.tagName
u.toString
s=u.createElement(t)
u=$.b9.body;(u&&C.n).B(u,s)}if("createContextualFragment" in window.Range.prototype&&!C.a.V(C.X,a.tagName)){u=$.k3;(u&&C.E).eM(u,s)
u=$.k3
r=(u&&C.E).jc(u,b)}else{s.innerHTML=b
r=$.b9.createDocumentFragment()
for(u=J.aq(r);t=s.firstChild,t!=null;)u.B(r,t)}u=$.b9.body
if(s==null?u!=null:s!==u)J.kB(s)
c.cR(r)
C.z.iY(document,r)
return r},
jd:function(a,b,c){return this.ag(a,b,c,null)},
eO:function(a,b,c,d){a.textContent=null
this.B(a,this.ag(a,b,c,d))},
eN:function(a,b){return this.eO(a,b,null,null)},
aW:function(a,b){return a.getAttribute(b)},
hU:function(a,b){return a.removeAttribute(b)},
$iT:1,
gk0:function(a){return a.tagName}}
W.fI.prototype={
$1:function(a){return!!J.a_(H.j(a,"$iD")).$iT},
$S:16}
W.o.prototype={$io:1}
W.e.prototype={
iU:function(a,b,c,d){H.n(c,{func:1,args:[W.o]})
if(c!=null)this.fj(a,b,c,!1)},
fj:function(a,b,c,d){return a.addEventListener(b,H.c4(H.n(c,{func:1,args:[W.o]}),1),!1)},
$ie:1}
W.aO.prototype={$iaO:1}
W.fO.prototype={
gm:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.i(P.W(b,a,null,null,null))
return a[b]},
E:function(a,b){if(b<0||b>=a.length)return H.k(a,b)
return a[b]},
$iF:1,
$aF:function(){return[W.aO]},
$av:function(){return[W.aO]},
$id:1,
$ad:function(){return[W.aO]},
$ib:1,
$ab:function(){return[W.aO]},
$aB:function(){return[W.aO]}}
W.fP.prototype={
gm:function(a){return a.length}}
W.fT.prototype={
gm:function(a){return a.length}}
W.aP.prototype={$iaP:1}
W.du.prototype={}
W.fY.prototype={
gm:function(a){return a.length}}
W.bS.prototype={
gm:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.i(P.W(b,a,null,null,null))
return a[b]},
E:function(a,b){if(b<0||b>=a.length)return H.k(a,b)
return a[b]},
$iF:1,
$aF:function(){return[W.D]},
$av:function(){return[W.D]},
$id:1,
$ad:function(){return[W.D]},
$ib:1,
$ab:function(){return[W.D]},
$ibS:1,
$aB:function(){return[W.D]}}
W.dv.prototype={}
W.bw.prototype={$ibw:1,
gdN:function(a){return a.data}}
W.cp.prototype={$icp:1,$ikF:1}
W.aT.prototype={$iaT:1}
W.dF.prototype={
i:function(a){return String(a)},
$idF:1}
W.ct.prototype={}
W.hm.prototype={
gm:function(a){return a.length}}
W.hn.prototype={
j:function(a,b){return P.bi(a.get(H.H(b)))},
P:function(a,b){var u,t
H.n(b,{func:1,ret:-1,args:[P.f,,]})
u=a.entries()
for(;!0;){t=u.next()
if(t.done)return
b.$2(t.value[0],P.bi(t.value[1]))}},
ga9:function(a){var u=H.c([],[P.f])
this.P(a,new W.ho(u))
return u},
gm:function(a){return a.size},
$aa9:function(){return[P.f,null]},
$iP:1,
$aP:function(){return[P.f,null]}}
W.ho.prototype={
$2:function(a,b){return C.a.h(this.a,a)},
$S:6}
W.hp.prototype={
j:function(a,b){return P.bi(a.get(H.H(b)))},
P:function(a,b){var u,t
H.n(b,{func:1,ret:-1,args:[P.f,,]})
u=a.entries()
for(;!0;){t=u.next()
if(t.done)return
b.$2(t.value[0],P.bi(t.value[1]))}},
ga9:function(a){var u=H.c([],[P.f])
this.P(a,new W.hq(u))
return u},
gm:function(a){return a.size},
$aa9:function(){return[P.f,null]},
$iP:1,
$aP:function(){return[P.f,null]}}
W.hq.prototype={
$2:function(a,b){return C.a.h(this.a,a)},
$S:6}
W.aW.prototype={$iaW:1}
W.hr.prototype={
gm:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.i(P.W(b,a,null,null,null))
return a[b]},
E:function(a,b){if(b<0||b>=a.length)return H.k(a,b)
return a[b]},
$iF:1,
$aF:function(){return[W.aW]},
$av:function(){return[W.aW]},
$id:1,
$ad:function(){return[W.aW]},
$ib:1,
$ab:function(){return[W.aW]},
$aB:function(){return[W.aW]}}
W.aa.prototype={$iaa:1}
W.ai.prototype={
gaJ:function(a){var u,t
u=this.a
t=u.childNodes.length
if(t===0)throw H.i(P.l5("No elements"))
if(t>1)throw H.i(P.l5("More than one element"))
return u.firstChild},
a7:function(a,b){var u,t,s,r,q
H.m(b,"$id",[W.D],"$ad")
u=b.a
t=this.a
if(u!==t)for(s=u.childNodes.length,r=J.aq(t),q=0;q<s;++q)r.B(t,u.firstChild)
return},
gS:function(a){var u=this.a.childNodes
return new W.ds(u,u.length,-1,[H.d9(C.Z,u,"B",0)])},
gm:function(a){return this.a.childNodes.length},
j:function(a,b){var u=this.a.childNodes
if(b<0||b>=u.length)return H.k(u,b)
return u[b]},
$av:function(){return[W.D]},
$ad:function(){return[W.D]},
$ab:function(){return[W.D]}}
W.D.prototype={
jU:function(a){var u=a.parentNode
if(u!=null)J.fh(u,a)},
i:function(a){var u=a.nodeValue
return u==null?this.eU(a):u},
B:function(a,b){return a.appendChild(b)},
hV:function(a,b){return a.removeChild(b)},
$iD:1}
W.cx.prototype={
gm:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.i(P.W(b,a,null,null,null))
return a[b]},
E:function(a,b){if(b<0||b>=a.length)return H.k(a,b)
return a[b]},
$iF:1,
$aF:function(){return[W.D]},
$av:function(){return[W.D]},
$id:1,
$ad:function(){return[W.D]},
$ib:1,
$ab:function(){return[W.D]},
$aB:function(){return[W.D]}}
W.aY.prototype={$iaY:1,
gm:function(a){return a.length}}
W.hH.prototype={
gm:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.i(P.W(b,a,null,null,null))
return a[b]},
E:function(a,b){if(b<0||b>=a.length)return H.k(a,b)
return a[b]},
$iF:1,
$aF:function(){return[W.aY]},
$av:function(){return[W.aY]},
$id:1,
$ad:function(){return[W.aY]},
$ib:1,
$ab:function(){return[W.aY]},
$aB:function(){return[W.aY]}}
W.dT.prototype={
jc:function(a,b){return a.createContextualFragment(b)},
eM:function(a,b){return a.selectNodeContents(b)}}
W.hR.prototype={
j:function(a,b){return P.bi(a.get(H.H(b)))},
P:function(a,b){var u,t
H.n(b,{func:1,ret:-1,args:[P.f,,]})
u=a.entries()
for(;!0;){t=u.next()
if(t.done)return
b.$2(t.value[0],P.bi(t.value[1]))}},
ga9:function(a){var u=H.c([],[P.f])
this.P(a,new W.hS(u))
return u},
gm:function(a){return a.size},
$aa9:function(){return[P.f,null]},
$iP:1,
$aP:function(){return[P.f,null]}}
W.hS.prototype={
$2:function(a,b){return C.a.h(this.a,a)},
$S:6}
W.hU.prototype={
gm:function(a){return a.length}}
W.aZ.prototype={$iaZ:1}
W.i2.prototype={
gm:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.i(P.W(b,a,null,null,null))
return a[b]},
E:function(a,b){if(b<0||b>=a.length)return H.k(a,b)
return a[b]},
$iF:1,
$aF:function(){return[W.aZ]},
$av:function(){return[W.aZ]},
$id:1,
$ad:function(){return[W.aZ]},
$ib:1,
$ab:function(){return[W.aZ]},
$aB:function(){return[W.aZ]}}
W.b_.prototype={$ib_:1}
W.i3.prototype={
gm:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.i(P.W(b,a,null,null,null))
return a[b]},
E:function(a,b){if(b<0||b>=a.length)return H.k(a,b)
return a[b]},
$iF:1,
$aF:function(){return[W.b_]},
$av:function(){return[W.b_]},
$id:1,
$ad:function(){return[W.b_]},
$ib:1,
$ab:function(){return[W.b_]},
$aB:function(){return[W.b_]}}
W.b0.prototype={$ib0:1,
gm:function(a){return a.length}}
W.i6.prototype={
j:function(a,b){return this.dh(a,H.H(b))},
P:function(a,b){var u,t
H.n(b,{func:1,ret:-1,args:[P.f,P.f]})
for(u=0;!0;++u){t=this.fM(a,u)
if(t==null)return
b.$2(t,this.dh(a,t))}},
ga9:function(a){var u=H.c([],[P.f])
this.P(a,new W.i7(u))
return u},
gm:function(a){return a.length},
dh:function(a,b){return a.getItem(b)},
fM:function(a,b){return a.key(b)},
$aa9:function(){return[P.f,P.f]},
$iP:1,
$aP:function(){return[P.f,P.f]}}
W.i7.prototype={
$2:function(a,b){return C.a.h(this.a,a)},
$S:33}
W.aG.prototype={$iaG:1}
W.c_.prototype={}
W.e0.prototype={
ag:function(a,b,c,d){var u,t
if("createContextualFragment" in window.Range.prototype)return this.bQ(a,b,c,d)
u=W.m9("<table>"+b+"</table>",c,d)
t=document.createDocumentFragment()
t.toString
u.toString
new W.ai(t).a7(0,new W.ai(u))
return t}}
W.e1.prototype={
ag:function(a,b,c,d){var u,t,s,r
if("createContextualFragment" in window.Range.prototype)return this.bQ(a,b,c,d)
u=document
t=u.createDocumentFragment()
u=C.o.ag(u.createElement("table"),b,c,d)
u.toString
u=new W.ai(u)
s=u.gaJ(u)
s.toString
u=new W.ai(s)
r=u.gaJ(u)
t.toString
r.toString
new W.ai(t).a7(0,new W.ai(r))
return t}}
W.id.prototype={
ag:function(a,b,c,d){var u,t,s
if("createContextualFragment" in window.Range.prototype)return this.bQ(a,b,c,d)
u=document
t=u.createDocumentFragment()
u=C.o.ag(u.createElement("table"),b,c,d)
u.toString
u=new W.ai(u)
s=u.gaJ(u)
t.toString
s.toString
new W.ai(t).a7(0,new W.ai(s))
return t}}
W.cG.prototype={$icG:1}
W.b1.prototype={$ib1:1}
W.aH.prototype={$iaH:1}
W.ig.prototype={
gm:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.i(P.W(b,a,null,null,null))
return a[b]},
E:function(a,b){if(b<0||b>=a.length)return H.k(a,b)
return a[b]},
$iF:1,
$aF:function(){return[W.aH]},
$av:function(){return[W.aH]},
$id:1,
$ad:function(){return[W.aH]},
$ib:1,
$ab:function(){return[W.aH]},
$aB:function(){return[W.aH]}}
W.ih.prototype={
gm:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.i(P.W(b,a,null,null,null))
return a[b]},
E:function(a,b){if(b<0||b>=a.length)return H.k(a,b)
return a[b]},
$iF:1,
$aF:function(){return[W.b1]},
$av:function(){return[W.b1]},
$id:1,
$ad:function(){return[W.b1]},
$ib:1,
$ab:function(){return[W.b1]},
$aB:function(){return[W.b1]}}
W.io.prototype={
gm:function(a){return a.length}}
W.b3.prototype={$ib3:1}
W.aI.prototype={$iaI:1}
W.is.prototype={
gm:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.i(P.W(b,a,null,null,null))
return a[b]},
E:function(a,b){if(b<0||b>=a.length)return H.k(a,b)
return a[b]},
$iF:1,
$aF:function(){return[W.b3]},
$av:function(){return[W.b3]},
$id:1,
$ad:function(){return[W.b3]},
$ib:1,
$ab:function(){return[W.b3]},
$aB:function(){return[W.b3]}}
W.it.prototype={
gm:function(a){return a.length}}
W.bD.prototype={}
W.iJ.prototype={
i:function(a){return String(a)}}
W.iW.prototype={$ikF:1}
W.iX.prototype={
gm:function(a){return a.length}}
W.b6.prototype={
gjk:function(a){if(a.deltaY!==undefined)return a.deltaY
throw H.i(P.aw("deltaY is not supported"))},
gjj:function(a){if(a.deltaX!==undefined)return a.deltaX
throw H.i(P.aw("deltaX is not supported"))},
$ib6:1}
W.cT.prototype={
hY:function(a,b){return a.requestAnimationFrame(H.c4(H.n(b,{func:1,ret:-1,args:[P.a1]}),1))},
fA:function(a){if(!!(a.requestAnimationFrame&&a.cancelAnimationFrame))return;(function(b){var u=['ms','moz','webkit','o']
for(var t=0;t<u.length&&!b.requestAnimationFrame;++t){b.requestAnimationFrame=b[u[t]+'RequestAnimationFrame']
b.cancelAnimationFrame=b[u[t]+'CancelAnimationFrame']||b[u[t]+'CancelRequestAnimationFrame']}if(b.requestAnimationFrame&&b.cancelAnimationFrame)return
b.requestAnimationFrame=function(c){return window.setTimeout(function(){c(Date.now())},16)}
b.cancelAnimationFrame=function(c){clearTimeout(c)}})(a)}}
W.cU.prototype={$icU:1}
W.j4.prototype={
gm:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.i(P.W(b,a,null,null,null))
return a[b]},
E:function(a,b){if(b<0||b>=a.length)return H.k(a,b)
return a[b]},
$iF:1,
$aF:function(){return[W.S]},
$av:function(){return[W.S]},
$id:1,
$ad:function(){return[W.S]},
$ib:1,
$ab:function(){return[W.S]},
$aB:function(){return[W.S]}}
W.ep.prototype={
i:function(a){return"Rectangle ("+H.l(a.left)+", "+H.l(a.top)+") "+H.l(a.width)+" x "+H.l(a.height)},
t:function(a,b){var u
if(b==null)return!1
if(!H.d7(b,"$iac",[P.a1],"$aac"))return!1
u=J.aq(b)
return a.left===u.gbG(b)&&a.top===u.gbK(b)&&a.width===u.gaI(b)&&a.height===u.gaD(b)},
gH:function(a){return W.lj(C.j.gH(a.left),C.j.gH(a.top),C.j.gH(a.width),C.j.gH(a.height))},
gaD:function(a){return a.height},
gaI:function(a){return a.width}}
W.ji.prototype={
gm:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.i(P.W(b,a,null,null,null))
return a[b]},
E:function(a,b){if(b<0||b>=a.length)return H.k(a,b)
return a[b]},
$iF:1,
$aF:function(){return[W.aP]},
$av:function(){return[W.aP]},
$id:1,
$ad:function(){return[W.aP]},
$ib:1,
$ab:function(){return[W.aP]},
$aB:function(){return[W.aP]}}
W.eH.prototype={
gm:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.i(P.W(b,a,null,null,null))
return a[b]},
E:function(a,b){if(b<0||b>=a.length)return H.k(a,b)
return a[b]},
$iF:1,
$aF:function(){return[W.D]},
$av:function(){return[W.D]},
$id:1,
$ad:function(){return[W.D]},
$ib:1,
$ab:function(){return[W.D]},
$aB:function(){return[W.D]}}
W.jv.prototype={
gm:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.i(P.W(b,a,null,null,null))
return a[b]},
E:function(a,b){if(b<0||b>=a.length)return H.k(a,b)
return a[b]},
$iF:1,
$aF:function(){return[W.b0]},
$av:function(){return[W.b0]},
$id:1,
$ad:function(){return[W.b0]},
$ib:1,
$ab:function(){return[W.b0]},
$aB:function(){return[W.b0]}}
W.jw.prototype={
gm:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.i(P.W(b,a,null,null,null))
return a[b]},
E:function(a,b){if(b<0||b>=a.length)return H.k(a,b)
return a[b]},
$iF:1,
$aF:function(){return[W.aG]},
$av:function(){return[W.aG]},
$id:1,
$ad:function(){return[W.aG]},
$ib:1,
$ab:function(){return[W.aG]},
$aB:function(){return[W.aG]}}
W.j2.prototype={
P:function(a,b){var u,t,s,r,q,p
H.n(b,{func:1,ret:-1,args:[P.f,P.f]})
for(u=this.ga9(this),t=u.length,s=this.a,r=J.aq(s),q=0;q<u.length;u.length===t||(0,H.A)(u),++q){p=u[q]
b.$2(p,r.aW(s,p))}},
ga9:function(a){var u,t,s,r,q
u=this.a.attributes
t=H.c([],[P.f])
for(s=u.length,r=0;r<s;++r){if(r>=u.length)return H.k(u,r)
q=H.j(u[r],"$icU")
if(q.namespaceURI==null)C.a.h(t,q.name)}return t},
$aa9:function(){return[P.f,P.f]},
$aP:function(){return[P.f,P.f]}}
W.j5.prototype={
j:function(a,b){return J.jY(this.a,H.H(b))},
gm:function(a){return this.ga9(this).length}}
W.j6.prototype={}
W.kg.prototype={}
W.j7.prototype={}
W.j8.prototype={
$1:function(a){return this.a.$1(H.j(a,"$io"))},
$S:28}
W.bE.prototype={
f5:function(a){var u,t
u=$.kz()
if(u.a===0){for(t=0;t<262;++t)u.Y(0,C.W[t],W.n7())
for(t=0;t<12;++t)u.Y(0,C.u[t],W.n8())}},
aS:function(a){return $.lT().V(0,W.cl(a))},
ar:function(a,b,c){var u,t,s
u=W.cl(a)
t=$.kz()
s=t.j(0,H.l(u)+"::"+b)
if(s==null)s=t.j(0,"*::"+b)
if(s==null)return!1
return H.km(s.$4(a,b,c,this))},
$iau:1}
W.B.prototype={
gS:function(a){return new W.ds(a,this.gm(a),-1,[H.d9(this,a,"B",0)])}}
W.dO.prototype={
aS:function(a){return C.a.dE(this.a,new W.hA(a))},
ar:function(a,b,c){return C.a.dE(this.a,new W.hz(a,b,c))},
$iau:1}
W.hA.prototype={
$1:function(a){return H.j(a,"$iau").aS(this.a)},
$S:18}
W.hz.prototype={
$1:function(a){return H.j(a,"$iau").ar(this.a,this.b,this.c)},
$S:18}
W.eP.prototype={
ff:function(a,b,c,d){var u,t,s
this.a.a7(0,c)
u=b.bM(0,new W.jt())
t=b.bM(0,new W.ju())
this.b.a7(0,u)
s=this.c
s.a7(0,C.Y)
s.a7(0,t)},
aS:function(a){return this.a.V(0,W.cl(a))},
ar:function(a,b,c){var u,t
u=W.cl(a)
t=this.c
if(t.V(0,H.l(u)+"::"+b))return this.d.iZ(c)
else if(t.V(0,"*::"+b))return this.d.iZ(c)
else{t=this.b
if(t.V(0,H.l(u)+"::"+b))return!0
else if(t.V(0,"*::"+b))return!0
else if(t.V(0,H.l(u)+"::*"))return!0
else if(t.V(0,"*::*"))return!0}return!1},
$iau:1}
W.jt.prototype={
$1:function(a){return!C.a.V(C.u,H.H(a))},
$S:19}
W.ju.prototype={
$1:function(a){return C.a.V(C.u,H.H(a))},
$S:19}
W.jy.prototype={
ar:function(a,b,c){if(this.eY(a,b,c))return!0
if(b==="template"&&c==="")return!0
if(J.jY(a,"template")==="")return this.e.V(0,b)
return!1}}
W.jz.prototype={
$1:function(a){return"TEMPLATE::"+H.l(H.H(a))},
$S:39}
W.jx.prototype={
aS:function(a){var u=J.a_(a)
if(!!u.$icA)return!1
u=!!u.$ip
if(u&&W.cl(a)==="foreignObject")return!1
if(u)return!0
return!1},
ar:function(a,b,c){if(b==="is"||C.i.bP(b,"on"))return!1
return this.aS(a)},
$iau:1}
W.ds.prototype={
u:function(){var u,t
u=this.c+1
t=this.b
if(u<t){this.sdi(J.lV(this.a,u))
this.c=u
return!0}this.sdi(null)
this.c=t
return!1},
gF:function(a){return this.d},
sdi:function(a){this.d=H.E(a,H.y(this,0))},
$iaQ:1}
W.au.prototype={}
W.jr.prototype={$inM:1}
W.f5.prototype={
cR:function(a){new W.jD(this).$2(a,null)},
b3:function(a,b){if(b==null)J.kB(a)
else J.fh(b,a)},
i1:function(a,b){var u,t,s,r,q,p,o,n
u=!0
t=null
s=null
try{t=J.lY(a)
s=J.jY(t.a,"is")
r=function(c){if(!(c.attributes instanceof NamedNodeMap))return true
var m=c.childNodes
if(c.lastChild&&c.lastChild!==m[m.length-1])return true
if(c.children)if(!(c.children instanceof HTMLCollection||c.children instanceof NodeList))return true
var l=0
if(c.children)l=c.children.length
for(var k=0;k<l;k++){var j=c.children[k]
if(j.id=='attributes'||j.name=='attributes'||j.id=='lastChild'||j.name=='lastChild'||j.id=='children'||j.name=='children')return true}return false}(a)
u=r?!0:!(a.attributes instanceof NamedNodeMap)}catch(o){H.ay(o)}q="element unprintable"
try{q=J.ar(a)}catch(o){H.ay(o)}try{p=W.cl(a)
this.i0(H.j(a,"$iT"),b,u,q,p,H.j(t,"$iP"),H.H(s))}catch(o){if(H.ay(o) instanceof P.aE)throw o
else{this.b3(a,b)
window
n="Removing corrupted element "+H.l(q)
if(typeof console!="undefined")window.console.warn(n)}}},
i0:function(a,b,c,d,e,f,g){var u,t,s,r,q,p
if(c){this.b3(a,b)
window
u="Removing element due to corrupted attributes on <"+d+">"
if(typeof console!="undefined")window.console.warn(u)
return}if(!this.a.aS(a)){this.b3(a,b)
window
u="Removing disallowed element <"+H.l(e)+"> from "+H.l(b)
if(typeof console!="undefined")window.console.warn(u)
return}if(g!=null)if(!this.a.ar(a,"is",g)){this.b3(a,b)
window
u="Removing disallowed type extension <"+H.l(e)+' is="'+g+'">'
if(typeof console!="undefined")window.console.warn(u)
return}u=f.ga9(f)
t=H.c(u.slice(0),[H.y(u,0)])
for(s=f.ga9(f).length-1,u=f.a,r=J.aq(u);s>=0;--s){if(s>=t.length)return H.k(t,s)
q=t[s]
if(!this.a.ar(a,J.m0(q),r.aW(u,q))){window
p="Removing disallowed attribute <"+H.l(e)+" "+q+'="'+H.l(r.aW(u,q))+'">'
if(typeof console!="undefined")window.console.warn(p)
r.aW(u,q)
r.hU(u,q)}}if(!!J.a_(a).$icG)this.cR(a.content)},
$inx:1}
W.jD.prototype={
$2:function(a,b){var u,t,s,r,q,p
s=this.a
switch(a.nodeType){case 1:s.i1(a,b)
break
case 8:case 11:case 3:case 4:break
default:s.b3(a,b)}u=a.lastChild
for(s=a==null;null!=u;){t=null
try{t=u.previousSibling}catch(r){H.ay(r)
q=H.j(u,"$iD")
if(s){p=q.parentNode
if(p!=null)J.fh(p,q)}else J.fh(a,q)
u=null
t=a.lastChild}if(u!=null)this.$2(u,a)
u=H.j(t,"$iD")}},
$S:42}
W.eo.prototype={}
W.eq.prototype={}
W.er.prototype={}
W.es.prototype={}
W.et.prototype={}
W.ev.prototype={}
W.ew.prototype={}
W.ex.prototype={}
W.ey.prototype={}
W.eD.prototype={}
W.eE.prototype={}
W.eF.prototype={}
W.eG.prototype={}
W.eI.prototype={}
W.eJ.prototype={}
W.eM.prototype={}
W.eN.prototype={}
W.eO.prototype={}
W.d_.prototype={}
W.d0.prototype={}
W.eQ.prototype={}
W.eR.prototype={}
W.eV.prototype={}
W.eY.prototype={}
W.eZ.prototype={}
W.d1.prototype={}
W.d2.prototype={}
W.f0.prototype={}
W.f1.prototype={}
W.f6.prototype={}
W.f7.prototype={}
W.f8.prototype={}
W.f9.prototype={}
W.fa.prototype={}
W.fb.prototype={}
W.fc.prototype={}
W.fd.prototype={}
W.fe.prototype={}
W.ff.prototype={}
P.f4.prototype={$ibw:1,
gdN:function(a){return this.a}}
P.jK.prototype={
$2:function(a,b){this.a[a]=b},
$S:14}
P.fQ.prototype={
gbY:function(){var u,t,s
u=this.b
t=H.aj(u,"v",0)
s=W.T
return new H.he(new H.cS(u,H.n(new P.fR(),{func:1,ret:P.N,args:[t]}),[t]),H.n(new P.fS(),{func:1,ret:s,args:[t]}),[t,s])},
h:function(a,b){J.kA(this.b.a,b)},
gm:function(a){return J.bK(this.gbY().a)},
j:function(a,b){var u=this.gbY()
return u.b.$1(J.jX(u.a,b))},
gS:function(a){var u=P.kQ(this.gbY(),!1,W.T)
return new J.ak(u,u.length,0,[H.y(u,0)])},
$av:function(){return[W.T]},
$ad:function(){return[W.T]},
$ab:function(){return[W.T]}}
P.fR.prototype={
$1:function(a){return!!J.a_(H.j(a,"$iD")).$iT},
$S:16}
P.fS.prototype={
$1:function(a){return H.h(H.j(a,"$iD"),"$iT")},
$S:29}
P.jm.prototype={
gbJ:function(a){var u=this.a
if(typeof u!=="number")return u.G()
return H.E(u+this.c,H.y(this,0))},
gdH:function(a){var u=this.b
if(typeof u!=="number")return u.G()
return H.E(u+this.d,H.y(this,0))},
i:function(a){return"Rectangle ("+H.l(this.a)+", "+H.l(this.b)+") "+this.c+" x "+this.d},
t:function(a,b){var u,t,s,r
if(b==null)return!1
if(H.d7(b,"$iac",[P.a1],"$aac")){u=this.a
t=J.aq(b)
if(u==t.gbG(b)){s=this.b
if(s==t.gbK(b)){if(typeof u!=="number")return u.G()
r=H.y(this,0)
if(H.E(u+this.c,r)===t.gbJ(b)){if(typeof s!=="number")return s.G()
u=H.E(s+this.d,r)===t.gdH(b)}else u=!1}else u=!1}else u=!1}else u=!1
return u},
gH:function(a){var u,t,s,r,q
u=this.a
t=J.bI(u)
s=this.b
r=J.bI(s)
if(typeof u!=="number")return u.G()
q=H.y(this,0)
u=C.h.gH(H.E(u+this.c,q))
if(typeof s!=="number")return s.G()
q=C.h.gH(H.E(s+this.d,q))
return P.mL(P.jk(P.jk(P.jk(P.jk(0,t),r),u),q))}}
P.ac.prototype={
gbG:function(a){return this.a},
gbK:function(a){return this.b},
gaI:function(a){return this.c},
gaD:function(a){return this.d}}
P.ba.prototype={$iba:1}
P.h7.prototype={
gm:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.i(P.W(b,a,null,null,null))
return this.av(a,b)},
E:function(a,b){return this.j(a,b)},
av:function(a,b){return a.getItem(b)},
$av:function(){return[P.ba]},
$id:1,
$ad:function(){return[P.ba]},
$ib:1,
$ab:function(){return[P.ba]},
$aB:function(){return[P.ba]}}
P.bd.prototype={$ibd:1}
P.hC.prototype={
gm:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.i(P.W(b,a,null,null,null))
return this.av(a,b)},
E:function(a,b){return this.j(a,b)},
av:function(a,b){return a.getItem(b)},
$av:function(){return[P.bd]},
$id:1,
$ad:function(){return[P.bd]},
$ib:1,
$ab:function(){return[P.bd]},
$aB:function(){return[P.bd]}}
P.hJ.prototype={
gm:function(a){return a.length}}
P.cA.prototype={$icA:1}
P.ic.prototype={
gm:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.i(P.W(b,a,null,null,null))
return this.av(a,b)},
E:function(a,b){return this.j(a,b)},
av:function(a,b){return a.getItem(b)},
$av:function(){return[P.f]},
$id:1,
$ad:function(){return[P.f]},
$ib:1,
$ab:function(){return[P.f]},
$aB:function(){return[P.f]}}
P.p.prototype={
gdK:function(a){return new P.fQ(a,new W.ai(a))},
ag:function(a,b,c,d){var u,t,s,r,q,p
u=H.c([],[W.au])
C.a.h(u,W.li(null))
C.a.h(u,W.lk())
C.a.h(u,new W.jx())
c=new W.f5(new W.dO(u))
t='<svg version="1.1">'+b+"</svg>"
u=document
s=u.body
r=(s&&C.n).jd(s,t,c)
q=u.createDocumentFragment()
r.toString
u=new W.ai(r)
p=u.gaJ(u)
for(u=J.aq(q);s=p.firstChild,s!=null;)u.B(q,s)
return q},
$ip:1}
P.bh.prototype={$ibh:1}
P.iu.prototype={
gm:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.i(P.W(b,a,null,null,null))
return this.av(a,b)},
E:function(a,b){return this.j(a,b)},
av:function(a,b){return a.getItem(b)},
$av:function(){return[P.bh]},
$id:1,
$ad:function(){return[P.bh]},
$ib:1,
$ab:function(){return[P.bh]},
$aB:function(){return[P.bh]}}
P.ez.prototype={}
P.eA.prototype={}
P.eK.prototype={}
P.eL.prototype={}
P.eW.prototype={}
P.eX.prototype={}
P.f2.prototype={}
P.f3.prototype={}
P.fl.prototype={
gm:function(a){return a.length}}
P.fm.prototype={
j:function(a,b){return P.bi(a.get(H.H(b)))},
P:function(a,b){var u,t
H.n(b,{func:1,ret:-1,args:[P.f,,]})
u=a.entries()
for(;!0;){t=u.next()
if(t.done)return
b.$2(t.value[0],P.bi(t.value[1]))}},
ga9:function(a){var u=H.c([],[P.f])
this.P(a,new P.fn(u))
return u},
gm:function(a){return a.size},
$aa9:function(){return[P.f,null]},
$iP:1,
$aP:function(){return[P.f,null]}}
P.fn.prototype={
$2:function(a,b){return C.a.h(this.a,a)},
$S:6}
P.fo.prototype={
gm:function(a){return a.length}}
P.bL.prototype={}
P.hD.prototype={
gm:function(a){return a.length}}
P.en.prototype={}
P.dg.prototype={$idg:1}
P.dt.prototype={$idt:1}
P.dS.prototype={$idS:1}
P.bZ.prototype={
bn:function(a,b){return a.activeTexture(b)},
dF:function(a,b,c){return a.attachShader(b,c)},
as:function(a,b,c){return a.bindBuffer(b,c)},
j2:function(a,b,c){return a.bindFramebuffer(b,c)},
a8:function(a,b,c){return a.bindTexture(b,c)},
j3:function(a,b,c){return a.blendFunc(b,c)},
dI:function(a,b,c,d){return a.bufferData(b,c,d)},
j5:function(a,b){return a.clear(b)},
j6:function(a,b,c,d,e){return a.clearColor(b,c,d,e)},
j7:function(a,b){return a.clearDepth(b)},
j8:function(a,b){return a.compileShader(b)},
jf:function(a,b){return a.createShader(b)},
jh:function(a,b){return a.deleteProgram(b)},
ji:function(a,b){return a.deleteShader(b)},
jl:function(a,b){return a.depthFunc(b)},
jm:function(a,b){return a.disable(b)},
dP:function(a,b){return a.disableVertexAttribArray(b)},
jn:function(a,b,c,d,e){return a.drawElements(b,c,H.a8(d),H.a8(e))},
cq:function(a,b){return a.enable(b)},
dS:function(a,b){return a.enableVertexAttribArray(b)},
ez:function(a,b){return a.generateMipmap(b)},
eA:function(a,b,c){return a.getActiveAttrib(b,c)},
eB:function(a,b,c){return a.getActiveUniform(b,c)},
eC:function(a,b,c){return a.getAttribLocation(b,c)},
cQ:function(a,b){return a.getParameter(b)},
eG:function(a,b){return a.getProgramInfoLog(b)},
bN:function(a,b,c){return a.getProgramParameter(b,c)},
eH:function(a,b){return a.getShaderInfoLog(b)},
eI:function(a,b,c){return a.getShaderParameter(b,c)},
eJ:function(a,b,c){return a.getUniformLocation(b,c)},
jz:function(a,b){return a.linkProgram(b)},
en:function(a,b,c){return a.pixelStorei(b,c)},
eR:function(a,b,c){return a.shaderSource(b,c)},
k5:function(a,b,c,d,e,f,g,h,i,j){var u,t
u=J.a_(g)
if(!!u.$ibw)t=!0
else t=!1
if(t){this.ii(a,b,c,d,e,f,P.n1(g))
return}if(!!u.$icp)u=!0
else u=!1
if(u){this.ij(a,b,c,d,e,f,g)
return}throw H.i(P.m1("Incorrect number or type of arguments"))},
er:function(a,b,c,d,e,f,g){return this.k5(a,b,c,d,e,f,g,null,null,null)},
ii:function(a,b,c,d,e,f,g){return a.texImage2D(b,c,d,e,f,g)},
ij:function(a,b,c,d,e,f,g){return a.texImage2D(b,c,d,e,f,g)},
au:function(a,b,c,d){return a.texParameteri(b,c,d)},
I:function(a,b,c){return a.uniform1f(b,c)},
L:function(a,b,c){return a.uniform1i(b,c)},
q:function(a,b,c,d,e){return a.uniform3f(b,c,d,e)},
ew:function(a,b,c,d){return a.uniformMatrix3fv(b,!1,d)},
ex:function(a,b,c,d){return a.uniformMatrix4fv(b,!1,d)},
cN:function(a,b){return a.useProgram(b)},
kc:function(a,b,c,d,e,f,g){return a.vertexAttribPointer(b,c,d,!1,f,g)},
kd:function(a,b,c,d,e){return a.viewport(b,c,d,e)},
$ibZ:1}
P.dV.prototype={$idV:1}
P.e2.prototype={$ie2:1}
P.ec.prototype={$iec:1}
P.i4.prototype={
gm:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.i(P.W(b,a,null,null,null))
return P.bi(this.fL(a,b))},
E:function(a,b){return this.j(a,b)},
fL:function(a,b){return a.item(b)},
$av:function(){return[[P.P,,,]]},
$id:1,
$ad:function(){return[[P.P,,,]]},
$ib:1,
$ab:function(){return[[P.P,,,]]},
$aB:function(){return[[P.P,,,]]}}
P.eS.prototype={}
P.eT.prototype={}
O.a0.prototype={
bi:function(a){this.sfQ(H.c([],[a]))
this.sdn(null)
this.sdj(null)
this.sdq(null)},
cS:function(a,b,c){var u=H.aj(this,"a0",0)
H.n(b,{func:1,ret:P.N,args:[[P.d,u]]})
u={func:1,ret:-1,args:[P.C,[P.d,u]]}
H.n(a,u)
H.n(c,u)
this.sdn(b)
this.sdj(a)
this.sdq(c)},
aY:function(a,b){return this.cS(a,null,b)},
dm:function(a){var u
H.m(a,"$id",[H.aj(this,"a0",0)],"$ad")
u=this.b
if(u!=null)return u.$1(a)
return!0},
cY:function(a,b){var u
H.m(b,"$id",[H.aj(this,"a0",0)],"$ad")
u=this.c
if(u!=null)u.$2(a,b)},
gm:function(a){return this.a.length},
gS:function(a){var u=this.a
return new J.ak(u,u.length,0,[H.y(u,0)])},
E:function(a,b){var u=this.a
if(b<0||b>=u.length)return H.k(u,b)
return u[b]},
h:function(a,b){var u,t,s
u=H.aj(this,"a0",0)
H.E(b,u)
u=[u]
if(this.dm(H.c([b],u))){t=this.a
s=t.length
C.a.h(t,b)
this.cY(s,H.c([b],u))}},
a7:function(a,b){var u,t
H.m(b,"$id",[H.aj(this,"a0",0)],"$ad")
if(this.dm(b)){u=this.a
t=u.length
C.a.a7(u,b)
this.cY(t,b)}},
sfQ:function(a){this.a=H.m(a,"$ib",[H.aj(this,"a0",0)],"$ab")},
sdn:function(a){this.b=H.n(a,{func:1,ret:P.N,args:[[P.d,H.aj(this,"a0",0)]]})},
sdj:function(a){this.c=H.n(a,{func:1,ret:-1,args:[P.C,[P.d,H.aj(this,"a0",0)]]})},
sdq:function(a){this.d=H.n(a,{func:1,ret:-1,args:[P.C,[P.d,H.aj(this,"a0",0)]]})},
$id:1}
O.cs.prototype={
gm:function(a){return this.a.length},
gp:function(){var u=this.b
if(u==null){u=D.K()
this.b=u}return u},
f3:function(a){var u=this.b
if(u!=null)u.C(a)},
aK:function(){return this.f3(null)},
ga0:function(a){var u=this.a
if(u.length>0)return C.a.gbF(u)
else return V.bV()},
bI:function(a){var u=this.a
if(a==null)C.a.h(u,V.bV())
else C.a.h(u,a)
this.aK()},
aF:function(){var u=this.a
if(u.length>0){u.pop()
this.aK()}},
sc_:function(a){this.a=H.m(a,"$ib",[V.am],"$ab")}}
E.fp.prototype={}
E.af.prototype={
sbO:function(a,b){var u,t,s
u=this.c
if(u!=b){this.c=b
this.d=b
this.e=null
if(u!=null)u.gp().W(0,this.gek())
t=this.c
if(t!=null)t.gp().h(0,this.gek())
s=new D.J("shape",u,this.c,this,[F.dW])
s.b=!0
this.aU(s)}},
an:function(a,b){var u
for(u=this.y.a,u=new J.ak(u,u.length,0,[H.y(u,0)]);u.u();)u.d.an(0,b)},
ac:function(a){var u,t
u=a.dx
C.a.h(u.a,u.ga0(u))
u.aK()
a.cJ(this.f)
u=a.dy
t=(u&&C.a).gbF(u)
if(t!=null&&this.d!=null)t.eo(a,this)
for(u=this.y.a,u=new J.ak(u,u.length,0,[H.y(u,0)]);u.u();)u.d.ac(a)
a.cI()
a.dx.aF()},
gp:function(){var u=this.z
if(u==null){u=D.K()
this.z=u}return u},
aU:function(a){var u=this.z
if(u!=null)u.C(a)},
a4:function(){return this.aU(null)},
el:function(a){H.j(a,"$iw")
this.e=null
this.aU(a)},
jK:function(){return this.el(null)},
ej:function(a){this.aU(H.j(a,"$iw"))},
jH:function(){return this.ej(null)},
jG:function(a,b){var u,t,s,r,q,p,o
H.m(b,"$id",[E.af],"$ad")
for(u=b.length,t=this.gei(),s={func:1,ret:-1,args:[D.w]},r=[s],q=0;q<b.length;b.length===u||(0,H.A)(b),++q){p=b[q]
if(p!=null){o=p.z
if(o==null){o=new D.bQ()
o.sae(null)
o.saQ(null)
o.c=null
o.d=0
p.z=o}H.n(t,s)
if(o.a==null)o.sae(H.c([],r))
o=o.a;(o&&C.a).h(o,t)}}this.a4()},
jJ:function(a,b){var u,t
H.m(b,"$id",[E.af],"$ad")
for(u=b.gS(b),t=this.gei();u.u();)u.gF(u).gp().W(0,t)
this.a4()},
i:function(a){var u,t
u=this.a
t=u.length
if(t<=0)return"Unnamed entity"
return u},
sf4:function(a,b){this.y=H.m(b,"$ia0",[E.af],"$aa0")},
$iaX:1}
E.hN.prototype={
f0:function(a,b){var u,t
this.c=512
this.d=512
this.e=0
u=new P.al(Date.now(),!1)
this.f=u
this.r=u
this.x=u
this.y=0
this.z=null
this.Q=null
this.ch=null
this.cx=null
u=new O.cs()
t=[V.am]
u.sc_(H.c([],t))
u.b=null
u.gp().h(0,new E.hO(this))
this.cy=u
u=new O.cs()
u.sc_(H.c([],t))
u.b=null
u.gp().h(0,new E.hP(this))
this.db=u
u=new O.cs()
u.sc_(H.c([],t))
u.b=null
u.gp().h(0,new E.hQ(this))
this.dx=u
this.sih(H.c([],[O.bC]))
u=this.dy;(u&&C.a).h(u,null)
this.sib(new H.aS([P.f,A.cB]))},
gjT:function(){var u,t
u=this.z
if(u==null){u=this.cy
u=u.ga0(u)
t=this.db
t=u.A(0,t.ga0(t))
this.z=t
u=t}return u},
cJ:function(a){var u,t
u=this.dy
t=a==null?(u&&C.a).gbF(u):a;(u&&C.a).h(u,t)},
cI:function(){var u=this.dy
if(u.length>1)u.pop()},
dD:function(a){var u=a.b
if(u.length===0)throw H.i(P.r("May not cache a shader with no name."))
if(this.fr.dM(0,u))throw H.i(P.r('Shader cache already contains a shader by the name "'+u+'".'))
this.fr.Y(0,u,a)},
sih:function(a){this.dy=H.m(a,"$ib",[O.bC],"$ab")},
sib:function(a){this.fr=H.m(a,"$iP",[P.f,A.cB],"$aP")}}
E.hO.prototype={
$1:function(a){var u
H.j(a,"$iw")
u=this.a
u.z=null
u.ch=null},
$S:7}
E.hP.prototype={
$1:function(a){var u
H.j(a,"$iw")
u=this.a
u.z=null
u.Q=null
u.ch=null
u.cx=null},
$S:7}
E.hQ.prototype={
$1:function(a){var u
H.j(a,"$iw")
u=this.a
u.ch=null
u.cx=null},
$S:7}
E.e8.prototype={
d0:function(a){H.j(a,"$iw")
this.ep()},
d_:function(){return this.d0(null)},
gju:function(){var u,t,s
u=Date.now()
t=C.h.a3(P.kI(0,0,0,u-this.cx.a,0,0).a,1000)/1000
if(t<=0)return 0
s=this.cy
this.cy=0
this.cx=new P.al(u,!1)
return s/t},
dt:function(){var u,t,s,r
u=window.devicePixelRatio
t=this.b.clientWidth
if(typeof t!=="number")return t.A()
if(typeof u!=="number")return H.G(u)
s=C.j.cz(t*u)
t=this.b.clientHeight
if(typeof t!=="number")return t.A()
r=C.j.cz(t*u)
t=this.b
if(t.width!==s||t.height!==r){t.width=s
t.height=r
P.l8(C.q,this.gjW())}},
ep:function(){var u,t
if(!this.ch){this.ch=!0
u=window
t=H.n(new E.im(this),{func:1,ret:-1,args:[P.a1]})
C.G.fA(u)
C.G.hY(u,W.lr(t,P.a1))}},
jV:function(){var u,t,s,r,q
try{++this.cy
this.ch=!1
this.dt()
if(this.d!=null){s=this.e;++s.e
s.r=s.x
r=Date.now()
s.x=new P.al(r,!1)
s.y=P.kI(0,0,0,r-s.r.a,0,0).a*0.000001
r=s.cy
C.a.sm(r.a,0)
r.aK()
r=s.db
C.a.sm(r.a,0)
r.aK()
r=s.dx
C.a.sm(r.a,0)
r.aK()
r=s.dy;(r&&C.a).sm(r,0)
s=s.dy;(s&&C.a).h(s,null)
this.d.ac(this.e)}s=this.z
if(s!=null)s.C(null)}catch(q){u=H.ay(q)
t=H.c6(q)
P.c7("Error: "+H.l(u))
P.c7("Stack: "+H.l(t))
throw H.i(u)}}}
E.im.prototype={
$1:function(a){var u
H.ni(a)
u=this.a
if(u.ch){u.ch=!1
u.jV()}},
$S:34}
Z.ek.prototype={$inr:1}
Z.dh.prototype={
a2:function(a){var u,t,s
try{t=a.a
C.b.dS(t,this.e)
C.b.kc(t,this.e,this.b,5126,!1,this.d,this.c)}catch(s){u=H.ay(s)
t=P.r('Failed to bind buffer attribute "'+this.a.i(0)+'": '+H.l(u))
throw H.i(t)}},
i:function(a){return"["+this.a.i(0)+", Size: "+this.b+", Offset: "+this.c+", Stride: "+this.d+", Attr: "+H.l(this.e)+"]"}}
Z.el.prototype={$ins:1}
Z.ce.prototype={
aC:function(a){var u,t,s,r
for(u=this.c,t=u.length,s=0;s<t;++s){r=u[s]
if((r.a.a&a.a)!==0)return r}return},
a2:function(a){var u,t
u=this.a
C.b.as(a.a,u.a,u.b)
for(u=this.c,t=u.length-1;t>=0;--t)u[t].a2(a)},
be:function(a){var u,t,s
for(u=this.c,t=u.length-1,s=a.a;t>=0;--t)C.b.dP(s,u[t].e)
C.b.as(s,this.a.a,null)},
ac:function(a){var u,t,s,r,q,p
u=this.b.length
for(t=a.a,s=0;s<u;++s){r=this.b
if(s>=r.length)return H.k(r,s)
q=r[s]
r=q.c
p=r.a
C.b.as(t,p,r.b)
C.b.jn(t,q.a,q.b,5123,0)
C.b.as(t,p,null)}},
i:function(a){var u,t,s,r,q,p
u=[P.f]
t=H.c([],u)
for(s=this.b,r=s.length,q=0;q<s.length;s.length===r||(0,H.A)(s),++q)C.a.h(t,s[q].i(0))
p=H.c([],u)
for(u=this.c,s=u.length,q=0;q<s;++q)C.a.h(p,J.ar(u[q]))
return"Buffer:  ["+this.a.i(0)+"]\nIndices: "+C.a.l(t,", ")+"\nAttrs:   "+C.a.l(p,", ")},
sfK:function(a){this.b=H.m(a,"$ib",[Z.bx],"$ab")},
$inz:1}
Z.bx.prototype={
i:function(a){return"Type: "+this.a+", Count: "+this.b+", ["+("Instance of '"+H.bX(this.c)+"'")+"]"}}
Z.b5.prototype={
gcT:function(a){var u,t
u=this.a
t=(u&$.aK().a)!==0?3:0
if((u&$.bl().a)!==0)t+=3
if((u&$.bk().a)!==0)t+=3
if((u&$.bm().a)!==0)t+=2
if((u&$.bn().a)!==0)t+=3
if((u&$.da().a)!==0)t+=3
if((u&$.db().a)!==0)t+=4
if((u&$.ca().a)!==0)++t
return(u&$.bj().a)!==0?t+4:t},
j_:function(a){var u,t,s
u=$.aK()
t=this.a
if((t&u.a)!==0){if(0===a)return u
s=1}else s=0
u=$.bl()
if((t&u.a)!==0){if(s===a)return u;++s}u=$.bk()
if((t&u.a)!==0){if(s===a)return u;++s}u=$.bm()
if((t&u.a)!==0){if(s===a)return u;++s}u=$.bn()
if((t&u.a)!==0){if(s===a)return u;++s}u=$.da()
if((t&u.a)!==0){if(s===a)return u;++s}u=$.db()
if((t&u.a)!==0){if(s===a)return u;++s}u=$.ca()
if((t&u.a)!==0){if(s===a)return u;++s}u=$.bj()
if((t&u.a)!==0)if(s===a)return u
return $.lS()},
t:function(a,b){if(b==null)return!1
if(!(b instanceof Z.b5))return!1
return this.a===b.a},
i:function(a){var u,t
u=H.c([],[P.f])
t=this.a
if((t&$.aK().a)!==0)C.a.h(u,"Pos")
if((t&$.bl().a)!==0)C.a.h(u,"Norm")
if((t&$.bk().a)!==0)C.a.h(u,"Binm")
if((t&$.bm().a)!==0)C.a.h(u,"Txt2D")
if((t&$.bn().a)!==0)C.a.h(u,"TxtCube")
if((t&$.da().a)!==0)C.a.h(u,"Clr3")
if((t&$.db().a)!==0)C.a.h(u,"Clr4")
if((t&$.ca().a)!==0)C.a.h(u,"Weight")
if((t&$.bj().a)!==0)C.a.h(u,"Bending")
if(u.length<=0)return"None"
return C.a.l(u,"|")}}
D.fs.prototype={}
D.bQ.prototype={
h:function(a,b){var u={func:1,ret:-1,args:[D.w]}
H.n(b,u)
if(this.a==null)this.sae(H.c([],[u]))
u=this.a;(u&&C.a).h(u,b)},
W:function(a,b){var u,t
H.n(b,{func:1,ret:-1,args:[D.w]})
u=this.a
u=u==null?null:C.a.V(u,b)
if(u===!0){u=this.a
t=(u&&C.a).W(u,b)||!1}else t=!1
u=this.b
u=u==null?null:C.a.V(u,b)
if(u===!0){u=this.b
t=(u&&C.a).W(u,b)||t}return t},
C:function(a){var u,t,s,r
u={}
u.a=a
t=this.a
s=t==null
r=s?null:t.length===0
if(r!==!1){r=this.b
r=r==null?null:r.length===0
r=r!==!1}else r=!1
if(r)return!1
if(a==null){a=new D.w(null)
a.b=!0
u.a=a
r=a}else r=a
if(this.d>0){if(this.c==null)this.c=r
return!0}if(!s)C.a.P(P.kQ(t,!0,{func:1,ret:-1,args:[D.w]}),new D.fM(u))
t=this.b
if(t!=null){this.saQ(H.c([],[{func:1,ret:-1,args:[D.w]}]))
C.a.P(t,new D.fN(u))}return!0},
dR:function(){return this.C(null)},
jX:function(a,b,c){var u,t
u=this.d
if(u>0){--u
this.d=u
if(u<=0)u=this.c!=null
else u=!1
if(u){t=this.c
this.c=null
this.C(t)}}},
aH:function(a){return this.jX(a,!0,!1)},
sae:function(a){this.a=H.m(a,"$ib",[{func:1,ret:-1,args:[D.w]}],"$ab")},
saQ:function(a){this.b=H.m(a,"$ib",[{func:1,ret:-1,args:[D.w]}],"$ab")}}
D.fM.prototype={
$1:function(a){var u
H.n(a,{func:1,ret:-1,args:[D.w]})
u=this.a.a
u.b
a.$1(u)},
$S:20}
D.fN.prototype={
$1:function(a){var u
H.n(a,{func:1,ret:-1,args:[D.w]})
u=this.a.a
u.b
a.$1(u)},
$S:20}
D.w.prototype={}
D.by.prototype={}
D.bz.prototype={}
D.J.prototype={
i:function(a){return"ValueChanged: "+this.c+", "+H.l(this.d)+" => "+H.l(this.e)}}
X.di.prototype={
t:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.di))return!1
if(this.a!=b.a)return!1
if(!this.b.t(0,b.b))return!1
return!0},
i:function(a){return this.b.i(0)+H.l(this.a)}}
X.dB.prototype={
t:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.dB))return!1
if(this.a!=b.a)return!1
if(!this.b.t(0,b.b))return!1
return!0},
i:function(a){return this.b.i(0)+H.l(this.a)}}
X.h6.prototype={
jQ:function(a){this.c=a.b
this.d.h(0,a.a)
return!1},
jM:function(a){this.c=a.b
this.d.W(0,a.a)
return!1},
shS:function(a){this.d=H.m(a,"$il4",[P.C],"$al4")}}
X.dG.prototype={}
X.hb.prototype={
b1:function(a,b){var u,t,s,r,q,p,o,n
u=new P.al(Date.now(),!1)
t=this.x
s=b.a
r=this.Q
if(typeof s!=="number")return s.A()
q=b.b
p=this.ch
if(typeof q!=="number")return q.A()
o=new V.a5(t.a+s*r,t.b+q*p)
p=this.a.gaT()
n=new X.bc(a,V.be(),this.x,this.y,this.z,p,o,u,this)
n.b=!0
this.z=u
this.x=o
return n},
cH:function(a,b){this.r=a.a
return!1},
b8:function(a,b){var u,t
u=this.r
t=a.a
if(typeof t!=="number")return t.eL()
if(typeof u!=="number")return u.ey()
this.r=(u&~t)>>>0
return!1},
b7:function(a,b){var u=this.d
if(u==null)return!1
u.C(this.b1(a,b))
return!0},
jR:function(a){var u,t,s,r,q,p,o,n
u=this.e
if(u==null)return!1
t=this.a.gaT()
s=this.x
r=Date.now()
q=a.a
p=this.cx
if(typeof q!=="number")return q.A()
o=a.b
n=this.cy
if(typeof o!=="number")return o.A()
r=new X.cu(new V.U(q*p,o*n),t,s,new P.al(r,!1),this)
r.b=!0
u.C(r)
return!0},
hq:function(a,b,c){var u,t,s
if(this.f==null)return
u=new P.al(Date.now(),!1)
t=this.f
s=new X.dG(c,a,this.a.gaT(),b,u,this)
s.b=!0
t.C(s)
this.y=u
this.x=V.be()}}
X.at.prototype={
t:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.at))return!1
if(this.a!==b.a)return!1
if(this.b!=b.b)return!1
if(this.c!=b.c)return!1
return!0},
i:function(a){var u=this.a?"Ctrl+":""
u+=this.b?"Alt+":""
return u+(this.c?"Shift+":"")}}
X.bc.prototype={}
X.hs.prototype={
bW:function(a,b,c){var u,t,s
u=new P.al(Date.now(),!1)
t=this.a.gaT()
s=new X.bc(a,this.r,this.x,this.y,this.z,t,b,u,this)
s.b=!0
if(c){this.y=u
this.r=b}this.z=u
this.x=b
return s},
cH:function(a,b){var u
this.f=a.a
u=this.b
if(u==null)return!1
u.C(this.bW(a,b,!0))
return!0},
b8:function(a,b){var u,t
u=this.f
t=a.a
if(typeof t!=="number")return t.eL()
if(typeof u!=="number")return u.ey()
this.f=(u&~t)>>>0
u=this.c
if(u==null)return!1
u.C(this.bW(a,b,!0))
return!0},
b7:function(a,b){var u=this.d
if(u==null)return!1
u.C(this.bW(a,b,!1))
return!0},
jS:function(a,b){var u,t,s,r,q,p,o
u=this.e
if(u==null)return!1
t=this.a.gaT()
s=Date.now()
r=a.a
q=this.Q
if(typeof r!=="number")return r.A()
p=a.b
o=this.ch
if(typeof p!=="number")return p.A()
s=new X.cu(new V.U(r*q,p*o),t,b,new P.al(s,!1),this)
s.b=!0
u.C(s)
return!0},
gdQ:function(){var u=this.b
if(u==null){u=D.K()
this.b=u}return u},
gbL:function(){var u=this.c
if(u==null){u=D.K()
this.c=u}return u},
geh:function(){var u=this.d
if(u==null){u=D.K()
this.d=u}return u}}
X.cu.prototype={}
X.hI.prototype={}
X.ea.prototype={}
X.ir.prototype={
b1:function(a,b){var u,t,s,r
H.m(a,"$ib",[V.a5],"$ab")
u=new P.al(Date.now(),!1)
t=a.length>0?a[0]:V.be()
s=this.a.gaT()
r=new X.ea(a,this.f,this.r,this.x,this.y,s,t,u,this)
r.b=!0
if(b){this.x=u
this.f=t}this.y=u
this.r=t
return r},
jP:function(a){var u
H.m(a,"$ib",[V.a5],"$ab")
u=this.b
if(u==null)return!1
u.C(this.b1(a,!0))
return!0},
jN:function(a){var u
H.m(a,"$ib",[V.a5],"$ab")
u=this.c
if(u==null)return!1
u.C(this.b1(a,!0))
return!0},
jO:function(a){var u
H.m(a,"$ib",[V.a5],"$ab")
u=this.d
if(u==null)return!1
u.C(this.b1(a,!1))
return!0}}
X.ef.prototype={
gaT:function(){var u=this.a
return V.l2(0,0,C.p.gdL(u).c,C.p.gdL(u).d)},
dd:function(a){var u,t
u=a.keyCode
t=a.ctrlKey||a.metaKey
return new X.dB(u,new X.at(t,a.altKey,a.shiftKey))},
aR:function(a){var u,t
u=this.b
t=a.ctrlKey||a.metaKey
u.c=new X.at(t,a.altKey,a.shiftKey)},
cd:function(a){var u,t
u=this.b
t=a.ctrlKey||a.metaKey
u.c=new X.at(t,a.altKey,a.shiftKey)},
az:function(a){var u,t,s,r,q
u=this.a.getBoundingClientRect()
t=a.pageX
s=a.pageY
r=u.left
if(typeof t!=="number")return t.J()
q=u.top
if(typeof s!=="number")return s.J()
return new V.a5(t-r,s-q)},
b2:function(a){return new V.U(a.movementX,a.movementY)},
ca:function(a){var u,t,s,r,q,p,o,n
u=this.a.getBoundingClientRect()
t=H.c([],[V.a5])
for(s=a.touches,r=s.length,q=0;q<s.length;s.length===r||(0,H.A)(s),++q){p=s[q]
o=C.j.am(p.pageX)
C.j.am(p.pageY)
n=u.left
C.j.am(p.pageX)
C.a.h(t,new V.a5(o-n,C.j.am(p.pageY)-u.top))}return t},
ax:function(a){var u,t
u=a.buttons
t=a.ctrlKey||a.metaKey
return new X.di(u,new X.at(t,a.altKey,a.shiftKey))},
c0:function(a){var u,t,s,r,q,p
u=this.a.getBoundingClientRect()
t=a.pageX
s=a.pageY
r=u.left
if(typeof t!=="number")return t.J()
q=t-r
if(q<0)return!1
t=u.top
if(typeof s!=="number")return s.J()
p=s-t
if(p<0)return!1
return q<u.width&&p<u.height},
hk:function(a){this.f=!0},
h6:function(a){this.f=!1},
he:function(a){H.j(a,"$iaa")
if(this.f&&this.c0(a))a.preventDefault()},
ho:function(a){var u
H.j(a,"$iaT")
if(!this.f)return
u=this.dd(a)
this.b.jQ(u)},
hm:function(a){var u
H.j(a,"$iaT")
if(!this.f)return
u=this.dd(a)
this.b.jM(u)},
hs:function(a){var u,t,s,r
H.j(a,"$iaa")
u=this.a
u.focus()
this.f=!0
this.aR(a)
if(this.x){t=this.ax(a)
s=this.b2(a)
if(this.d.cH(t,s))a.preventDefault()
return}if(this.r){this.y=a
u.requestPointerLock()
return}t=this.ax(a)
r=this.az(a)
if(this.c.cH(t,r))a.preventDefault()},
hw:function(a){var u,t,s
H.j(a,"$iaa")
this.aR(a)
u=this.ax(a)
if(this.x){t=this.b2(a)
if(this.d.b8(u,t))a.preventDefault()
return}if(this.r)return
s=this.az(a)
if(this.c.b8(u,s))a.preventDefault()},
hi:function(a){var u,t,s
H.j(a,"$iaa")
if(!this.c0(a)){this.aR(a)
u=this.ax(a)
if(this.x){t=this.b2(a)
if(this.d.b8(u,t))a.preventDefault()
return}if(this.r)return
s=this.az(a)
if(this.c.b8(u,s))a.preventDefault()}},
hu:function(a){var u,t,s
H.j(a,"$iaa")
this.aR(a)
u=this.ax(a)
if(this.x){t=this.b2(a)
if(this.d.b7(u,t))a.preventDefault()
return}if(this.r)return
s=this.az(a)
if(this.c.b7(u,s))a.preventDefault()},
hg:function(a){var u,t,s
H.j(a,"$iaa")
if(!this.c0(a)){this.aR(a)
u=this.ax(a)
if(this.x){t=this.b2(a)
if(this.d.b7(u,t))a.preventDefault()
return}if(this.r)return
s=this.az(a)
if(this.c.b7(u,s))a.preventDefault()}},
hy:function(a){var u,t
H.j(a,"$ib6")
this.aR(a)
u=new V.U((a&&C.F).gjj(a),C.F.gjk(a)).v(0,180)
if(this.x){if(this.d.jR(u))a.preventDefault()
return}if(this.r)return
t=this.az(a)
if(this.c.jS(u,t))a.preventDefault()},
hA:function(a){var u,t,s
u=document.pointerLockElement===this.a
if(u!==this.x){this.x=u
t=this.ax(this.y)
s=this.az(this.y)
this.d.hq(t,s,u)}},
hQ:function(a){var u
H.j(a,"$iaI")
this.a.focus()
this.f=!0
this.cd(a)
u=this.ca(a)
if(this.e.jP(u))a.preventDefault()},
hM:function(a){var u
H.j(a,"$iaI")
this.cd(a)
u=this.ca(a)
if(this.e.jN(u))a.preventDefault()},
hO:function(a){var u
H.j(a,"$iaI")
this.cd(a)
u=this.ca(a)
if(this.e.jO(u))a.preventDefault()},
sfB:function(a){this.z=H.m(a,"$ib",[[P.cE,P.R]],"$ab")}}
D.bs.prototype={
gp:function(){var u=this.d
if(u==null){u=D.K()
this.d=u}return u},
aw:function(a){var u
H.j(a,"$iw")
u=this.d
if(u!=null)u.C(a)},
f8:function(){return this.aw(null)},
$ia2:1,
$iaX:1}
D.a2.prototype={$iaX:1}
D.dC.prototype={
gp:function(){var u=this.Q
if(u==null){u=D.K()
this.Q=u}return u},
aw:function(a){var u=this.Q
if(u!=null)u.C(a)},
dl:function(a){var u
H.j(a,"$iw")
u=this.ch
if(u!=null)u.C(a)},
hp:function(){return this.dl(null)},
hC:function(a){var u,t,s
H.m(a,"$id",[D.a2],"$ad")
for(u=a.length,t=0;t<a.length;a.length===u||(0,H.A)(a),++t){s=a[t]
if(s==null||this.f6(s))return!1}return!0},
h0:function(a,b){var u,t,s,r,q,p,o,n
u=D.a2
H.m(b,"$id",[u],"$ad")
for(t=b.length,s=this.gdk(),r={func:1,ret:-1,args:[D.w]},q=[r],p=0;p<b.length;b.length===t||(0,H.A)(b),++p){o=H.j(b[p],"$ia2")
if(o instanceof D.bs)C.a.h(this.e,o)
n=o.d
if(n==null){n=new D.bQ()
n.sae(null)
n.saQ(null)
n.c=null
n.d=0
o.d=n}H.n(s,r)
if(n.a==null)n.sae(H.c([],q))
n=n.a;(n&&C.a).h(n,s)}u=new D.by(a,b,this,[u])
u.b=!0
this.aw(u)},
hG:function(a,b){var u,t,s,r
u=D.a2
H.m(b,"$id",[u],"$ad")
for(t=b.gS(b),s=this.gdk();t.u();){r=t.gF(t)
C.a.W(this.e,r)
r.gp().W(0,s)}u=new D.bz(a,b,this,[u])
u.b=!0
this.aw(u)},
f6:function(a){var u=C.a.V(this.e,a)
return u},
sfz:function(a){this.e=H.m(a,"$ib",[D.bs],"$ab")},
shR:function(a){this.f=H.m(a,"$ib",[D.dR],"$ab")},
sie:function(a){this.r=H.m(a,"$ib",[D.dZ],"$ab")},
sit:function(a){this.x=H.m(a,"$ib",[D.e5],"$ab")},
siu:function(a){this.y=H.m(a,"$ib",[D.e6],"$ab")},
siv:function(a){this.z=H.m(a,"$ib",[D.e7],"$ab")},
$ad:function(){return[D.a2]},
$aa0:function(){return[D.a2]}}
D.dR.prototype={$ia2:1,$iaX:1}
D.dZ.prototype={$ia2:1,$iaX:1}
D.e5.prototype={$ia2:1,$iaX:1}
D.e6.prototype={$ia2:1,$iaX:1}
D.e7.prototype={$ia2:1,$iaX:1}
V.a3.prototype={
t:function(a,b){var u,t
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.a3))return!1
u=b.a
t=$.O().a
if(!(Math.abs(u-this.a)<t))return!1
if(!(Math.abs(b.b-this.b)<t))return!1
if(!(Math.abs(b.c-this.c)<t))return!1
return!0},
i:function(a){return"["+V.V(this.a,3,0)+", "+V.V(this.b,3,0)+", "+V.V(this.c,3,0)+"]"}}
V.aF.prototype={
t:function(a,b){var u,t
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.aF))return!1
u=b.a
t=$.O().a
if(!(Math.abs(u-this.a)<t))return!1
if(!(Math.abs(b.b-this.b)<t))return!1
if(!(Math.abs(b.c-this.c)<t))return!1
if(!(Math.abs(b.d-this.d)<t))return!1
return!0},
i:function(a){return"["+V.V(this.a,3,0)+", "+V.V(this.b,3,0)+", "+V.V(this.c,3,0)+", "+V.V(this.d,3,0)+"]"}}
V.fK.prototype={}
V.dK.prototype={
ad:function(a,b){var u=H.c([this.a,this.d,this.r,this.b,this.e,this.x,this.c,this.f,this.y],[P.z])
return u},
t:function(a,b){var u,t
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.dK))return!1
u=b.a
t=$.O().a
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
t=V.c5(H.c([this.a,this.d,this.r],u),3,0)
s=V.c5(H.c([this.b,this.e,this.x],u),3,0)
r=V.c5(H.c([this.c,this.f,this.y],u),3,0)
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
V.am.prototype={
ad:function(a,b){var u=H.c([this.a,this.e,this.y,this.cx,this.b,this.f,this.z,this.cy,this.c,this.r,this.Q,this.db,this.d,this.x,this.ch,this.dx],[P.z])
return u},
cB:function(b1){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0
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
if(Math.abs(a7-0)<$.O().a)return V.bV()
a8=1/a7
a9=-r
b0=-d
return V.aV((t*a6-p*a5+m*a4)*a8,(-s*a6+o*a5-l*a4)*a8,(f*h-b*i+a1*j)*a8,(-e*h+a*i-a2*j)*a8,(a9*a6+p*a3-m*a0)*a8,(u*a6-o*a3+l*a0)*a8,(b0*h+b*k-a1*n)*a8,(g*h-a*k+a2*n)*a8,(r*a5-t*a3+m*c)*a8,(-u*a5+s*a3-l*c)*a8,(d*i-f*k+a1*q)*a8,(-g*i+e*k-a2*q)*a8,(a9*a4+t*a0-p*c)*a8,(u*a4-s*a0+o*c)*a8,(b0*j+f*n-b*q)*a8,(g*j-e*n+a*q)*a8)},
A:function(b1,b2){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0
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
return V.aV(u*t+s*r+q*p+o*n,u*m+s*l+q*k+o*j,u*i+s*h+q*g+o*f,u*e+s*d+q*c+o*b,a*t+a0*r+a1*p+a2*n,a*m+a0*l+a1*k+a2*j,a*i+a0*h+a1*g+a2*f,a*e+a0*d+a1*c+a2*b,a3*t+a4*r+a5*p+a6*n,a3*m+a4*l+a5*k+a6*j,a3*i+a4*h+a5*g+a6*f,a3*e+a4*d+a5*c+a6*b,a7*t+a8*r+a9*p+b0*n,a7*m+a8*l+a9*k+b0*j,a7*i+a8*h+a9*g+b0*f,a7*e+a8*d+a9*c+b0*b)},
cM:function(a){var u,t,s
u=a.a
t=a.b
s=a.c
return new V.Q(this.a*u+this.b*t+this.c*s,this.e*u+this.f*t+this.r*s,this.y*u+this.z*t+this.Q*s)},
bd:function(a){var u,t,s
u=a.a
t=a.b
s=a.c
return new V.ag(this.a*u+this.b*t+this.c*s+this.d,this.e*u+this.f*t+this.r*s+this.x,this.y*u+this.z*t+this.Q*s+this.ch)},
t:function(a,b){var u,t
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.am))return!1
u=b.a
t=$.O().a
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
i:function(a){return this.M()},
ed:function(a,b,c){var u,t,s,r,q,p,o,n,m,l
u=[P.z]
t=V.c5(H.c([this.a,this.e,this.y,this.cx],u),b,c)
s=V.c5(H.c([this.b,this.f,this.z,this.cy],u),b,c)
r=V.c5(H.c([this.c,this.r,this.Q,this.db],u),b,c)
q=V.c5(H.c([this.d,this.x,this.ch,this.dx],u),b,c)
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
M:function(){return this.ed("",3,0)},
w:function(a){return this.ed(a,3,0)}}
V.a5.prototype={
J:function(a,b){return new V.a5(this.a-b.a,this.b-b.b)},
t:function(a,b){var u,t
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.a5))return!1
u=b.a
t=$.O().a
if(!(Math.abs(u-this.a)<t))return!1
if(!(Math.abs(b.b-this.b)<t))return!1
return!0},
i:function(a){return"["+V.V(this.a,3,0)+", "+V.V(this.b,3,0)+"]"}}
V.ag.prototype={
J:function(a,b){return new V.ag(this.a-b.a,this.b-b.b,this.c-b.c)},
t:function(a,b){var u,t
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.ag))return!1
u=b.a
t=$.O().a
if(!(Math.abs(u-this.a)<t))return!1
if(!(Math.abs(b.b-this.b)<t))return!1
if(!(Math.abs(b.c-this.c)<t))return!1
return!0},
i:function(a){return"["+V.V(this.a,3,0)+", "+V.V(this.b,3,0)+", "+V.V(this.c,3,0)+"]"}}
V.bf.prototype={
t:function(a,b){var u,t
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.bf))return!1
u=b.a
t=$.O().a
if(!(Math.abs(u-this.a)<t))return!1
if(!(Math.abs(b.b-this.b)<t))return!1
if(!(Math.abs(b.c-this.c)<t))return!1
if(!(Math.abs(b.d-this.d)<t))return!1
return!0},
i:function(a){return"["+V.V(this.a,3,0)+", "+V.V(this.b,3,0)+", "+V.V(this.c,3,0)+", "+V.V(this.d,3,0)+"]"}}
V.dU.prototype={
gab:function(){var u,t
u=this.c
t=this.d
if(u>t)return t
else return u},
t:function(a,b){var u,t
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.dU))return!1
u=b.a
t=$.O().a
if(!(Math.abs(u-this.a)<t))return!1
if(!(Math.abs(b.b-this.b)<t))return!1
if(!(Math.abs(b.c-this.c)<t))return!1
if(!(Math.abs(b.d-this.d)<t))return!1
return!0},
i:function(a){return"["+V.V(this.a,3,0)+", "+V.V(this.b,3,0)+", "+V.V(this.c,3,0)+", "+V.V(this.d,3,0)+"]"}}
V.U.prototype={
cC:function(a){return Math.sqrt(this.D(this))},
D:function(a){var u,t,s,r
u=this.a
t=a.a
if(typeof u!=="number")return u.A()
if(typeof t!=="number")return H.G(t)
s=this.b
r=a.b
if(typeof s!=="number")return s.A()
if(typeof r!=="number")return H.G(r)
return u*t+s*r},
A:function(a,b){var u,t
u=this.a
if(typeof u!=="number")return u.A()
t=this.b
if(typeof t!=="number")return t.A()
return new V.U(u*b,t*b)},
v:function(a,b){var u,t
if(Math.abs(b-0)<$.O().a){u=$.lc
if(u==null){u=new V.U(0,0)
$.lc=u}return u}u=this.a
if(typeof u!=="number")return u.v()
t=this.b
if(typeof t!=="number")return t.v()
return new V.U(u/b,t/b)},
t:function(a,b){var u,t,s
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.U))return!1
u=b.a
t=this.a
s=$.O()
s.toString
if(typeof u!=="number")return u.J()
if(typeof t!=="number")return H.G(t)
s=s.a
if(!(Math.abs(u-t)<s))return!1
u=b.b
t=this.b
if(typeof u!=="number")return u.J()
if(typeof t!=="number")return H.G(t)
if(!(Math.abs(u-t)<s))return!1
return!0},
i:function(a){return"["+V.V(this.a,3,0)+", "+V.V(this.b,3,0)+"]"}}
V.Q.prototype={
cC:function(a){return Math.sqrt(this.D(this))},
D:function(a){return this.a*a.a+this.b*a.b+this.c*a.c},
cD:function(a,b){var u,t,s
u=this.a
t=this.b
s=this.c
return new V.Q(u+b*(a.a-u),t+b*(a.b-t),s+b*(a.c-s))},
b6:function(a){var u,t,s,r,q,p
u=this.b
t=a.c
s=this.c
r=a.b
q=a.a
p=this.a
return new V.Q(u*t-s*r,s*q-p*t,p*r-u*q)},
G:function(a,b){return new V.Q(this.a+b.a,this.b+b.b,this.c+b.c)},
R:function(a){return new V.Q(-this.a,-this.b,-this.c)},
v:function(a,b){if(Math.abs(b-0)<$.O().a)return V.ej()
return new V.Q(this.a/b,this.b/b,this.c/b)},
ef:function(){var u=$.O().a
if(!(Math.abs(0-this.a)<u))return!1
if(!(Math.abs(0-this.b)<u))return!1
if(!(Math.abs(0-this.c)<u))return!1
return!0},
t:function(a,b){var u,t
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.Q))return!1
u=b.a
t=$.O().a
if(!(Math.abs(u-this.a)<t))return!1
if(!(Math.abs(b.b-this.b)<t))return!1
if(!(Math.abs(b.c-this.c)<t))return!1
return!0},
i:function(a){return"["+V.V(this.a,3,0)+", "+V.V(this.b,3,0)+", "+V.V(this.c,3,0)+"]"}}
U.ft.prototype={
bR:function(a){var u=V.nq(a,this.c,this.b)
return u},
gp:function(){var u=this.y
if(u==null){u=D.K()
this.y=u}return u},
O:function(a){var u=this.y
if(u!=null)u.C(a)},
scO:function(a,b){},
scE:function(a){var u,t
u=this.b
if(!(Math.abs(u-a)<$.O().a)){this.b=a
if(a<this.c){this.c=a
this.d=a}else{t=this.d
if(a<t)this.d=this.bR(t)}u=new D.J("maximumLocation",u,this.b,this,[P.z])
u.b=!0
this.O(u)}},
scG:function(a){var u,t
u=this.c
if(!(Math.abs(u-a)<$.O().a)){this.c=a
if(this.b<a){this.b=a
this.d=a}else{t=this.d
if(a>t)this.d=this.bR(t)}u=new D.J("minimumLocation",u,this.c,this,[P.z])
u.b=!0
this.O(u)}},
saa:function(a,b){var u
b=this.bR(b)
u=this.d
if(!(Math.abs(u-b)<$.O().a)){this.d=b
u=new D.J("location",u,b,this,[P.z])
u.b=!0
this.O(u)}},
scF:function(a){var u,t,s
u=this.e
if(!(Math.abs(u-a)<$.O().a)){this.e=a
t=this.f
s=-a
if(t<s)t=s
else if(t>a)t=a
this.f=t
u=new D.J("maximumVelocity",u,a,this,[P.z])
u.b=!0
this.O(u)}},
sT:function(a){var u,t
u=this.e
t=-u
if(a<t)a=t
else if(a>u)a=u
u=this.f
if(!(Math.abs(u-a)<$.O().a)){this.f=a
u=new D.J("velocity",u,a,this,[P.z])
u.b=!0
this.O(u)}},
sco:function(a){var u
if(a<0)a=0
else if(a>1)a=1
u=this.x
if(!(Math.abs(u-a)<$.O().a)){this.x=a
u=new D.J("dampening",u,a,this,[P.z])
u.b=!0
this.O(u)}},
an:function(a,b){var u,t,s,r,q
u=this.f
t=$.O().a
if(!(Math.abs(u-0)<t)||!(Math.abs(this.r-0)<t)){s=u+this.r*b
u=this.e
r=-u
if(s<r)s=r
else if(s>u)s=u
this.saa(0,this.d+s*b)
u=this.x
if(!(Math.abs(u-0)<$.O().a)){q=s*Math.pow(1-u,b)
if(s<0){if(q<s)q=s
else if(q>0)q=0}else if(q<0)q=0
else if(q>s)q=s
s=q}this.sT(s)}}}
U.dk.prototype={
gp:function(){var u=this.b
if(u==null){u=D.K()
this.b=u}return u},
aV:function(a,b,c){return this.a},
t:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.dk))return!1
return J.a7(this.a,b.a)},
i:function(a){return"Constant: "+this.a.w("          ")}}
U.co.prototype={
gp:function(){var u=this.e
if(u==null){u=D.K()
this.e=u}return u},
O:function(a){var u
H.j(a,"$iw")
u=this.e
if(u!=null)u.C(a)},
a5:function(){return this.O(null)},
fZ:function(a,b){var u,t,s,r,q,p,o,n
u=U.ab
H.m(b,"$id",[u],"$ad")
for(t=b.length,s=this.gaL(),r={func:1,ret:-1,args:[D.w]},q=[r],p=0;p<b.length;b.length===t||(0,H.A)(b),++p){o=b[p]
if(o!=null){n=o.gp()
n.toString
H.n(s,r)
if(n.a==null)n.sae(H.c([],q))
n=n.a;(n&&C.a).h(n,s)}}u=new D.by(a,b,this,[u])
u.b=!0
this.O(u)},
hE:function(a,b){var u,t,s
u=U.ab
H.m(b,"$id",[u],"$ad")
for(t=b.gS(b),s=this.gaL();t.u();)t.gF(t).gp().W(0,s)
u=new D.bz(a,b,this,[u])
u.b=!0
this.O(u)},
aV:function(a,b,c){var u,t,s,r
u=this.r
t=b.e
if(typeof u!=="number")return u.aX()
if(u<t){this.r=t
u=this.e
if(u!=null)++u.d
for(u=this.a,u=new J.ak(u,u.length,0,[H.y(u,0)]),s=null;u.u();){t=u.d
if(t!=null){r=t.aV(0,b,c)
if(r!=null)s=s==null?r:r.A(0,s)}}this.f=s==null?V.bV():s
u=this.e
if(u!=null)u.aH(0)}return this.f},
t:function(a,b){var u,t,s,r
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.co))return!1
u=this.a.length
for(t=0;t<u;++t){s=this.a
if(t>=s.length)return H.k(s,t)
s=s[t]
r=b.a
if(t>=r.length)return H.k(r,t)
if(!J.a7(s,r[t]))return!1}return!0},
i:function(a){return"Group"},
$ad:function(){return[U.ab]},
$aa0:function(){return[U.ab]},
$iab:1}
U.ab.prototype={}
U.eg.prototype={
gp:function(){var u=this.cy
if(u==null){u=D.K()
this.cy=u}return u},
O:function(a){var u
H.j(a,"$iw")
u=this.cy
if(u!=null)u.C(a)},
a5:function(){return this.O(null)},
b4:function(a){if(this.a!=null)return!1
this.a=a
a.c.gdQ().h(0,this.gc1())
this.a.c.geh().h(0,this.gc3())
this.a.c.gbL().h(0,this.gc5())
return!0},
c2:function(a){H.j(a,"$iw")
if(!J.a7(this.c,this.a.b.c))return
this.y=!0
this.x=!0
this.z=this.b.d},
c4:function(a){var u,t,s,r,q,p,o
a=H.h(H.j(a,"$iw"),"$ibc")
if(!this.y)return
if(this.x){u=a.d.J(0,a.y)
u=new V.U(u.a,u.b)
u=u.D(u)
t=this.r
if(typeof t!=="number")return H.G(t)
if(u<t)return
this.x=!1}if(this.d){u=a.c
t=a.d.J(0,a.y)
u=new V.U(t.a,t.b).A(0,2).v(0,u.gab())
this.Q=u
t=this.b
u=u.a
if(typeof u!=="number")return u.A()
s=this.e
if(typeof s!=="number")return H.G(s)
t.sT(u*10*s)}else{u=a.c
t=a.d
s=t.J(0,a.y)
r=new V.U(s.a,s.b).A(0,2).v(0,u.gab())
s=this.b
q=r.a
if(typeof q!=="number")return q.R()
p=this.e
if(typeof p!=="number")return H.G(p)
o=this.z
if(typeof o!=="number")return H.G(o)
s.saa(0,-q*p+o)
this.b.sT(0)
t=t.J(0,a.z)
this.Q=new V.U(t.a,t.b).A(0,2).v(0,u.gab())}this.a5()},
c6:function(a){var u,t,s
H.j(a,"$iw")
if(!this.y)return
this.y=!1
if(this.x)return
u=this.Q
if(u.D(u)>0.0001){u=this.b
t=this.Q.a
if(typeof t!=="number")return t.A()
s=this.e
if(typeof s!=="number")return H.G(s)
u.sT(t*10*s)
this.a5()}},
aV:function(a,b,c){var u,t,s,r,q
u=this.ch
t=b.e
if(typeof u!=="number")return u.aX()
if(u<t){this.ch=t
s=b.y
this.b.an(0,s)
u=this.b.d
r=Math.cos(u)
q=Math.sin(u)
this.cx=V.aV(r,-q,0,0,q,r,0,0,0,0,1,0,0,0,0,1)}return this.cx},
$iab:1}
U.eh.prototype={
gp:function(){var u=this.fx
if(u==null){u=D.K()
this.fx=u}return u},
O:function(a){var u
H.j(a,"$iw")
u=this.fx
if(u!=null)u.C(a)},
a5:function(){return this.O(null)},
b4:function(a){var u,t
if(this.a!=null)return!1
this.a=a
a.c.gdQ().h(0,this.gc1())
this.a.c.geh().h(0,this.gc3())
this.a.c.gbL().h(0,this.gc5())
u=this.a.d
t=u.f
if(t==null){t=D.K()
u.f=t
u=t}else u=t
u.h(0,this.gfR())
u=this.a.d
t=u.d
if(t==null){t=D.K()
u.d=t
u=t}else u=t
u.h(0,this.gfT())
u=this.a.e
t=u.b
if(t==null){t=D.K()
u.b=t
u=t}else u=t
u.h(0,this.giq())
u=this.a.e
t=u.d
if(t==null){t=D.K()
u.d=t
u=t}else u=t
u.h(0,this.gio())
u=this.a.e
t=u.c
if(t==null){t=D.K()
u.c=t
u=t}else u=t
u.h(0,this.gil())
return!0},
ao:function(a){var u,t
u=a.a
t=a.b
if(this.f){if(typeof u!=="number")return u.R()
u=-u}if(this.r){if(typeof t!=="number")return t.R()
t=-t}return new V.U(u,t)},
c2:function(a){a=H.h(H.j(a,"$iw"),"$ibc")
if(!J.a7(this.d,a.x.b))return
this.cx=!0
this.ch=!0
this.cy=this.c.d
this.db=this.b.d},
c4:function(a){var u,t,s,r,q,p,o
a=H.h(H.j(a,"$iw"),"$ibc")
if(!this.cx)return
if(this.ch){u=a.d.J(0,a.y)
u=new V.U(u.a,u.b)
u=u.D(u)
t=this.Q
if(typeof t!=="number")return H.G(t)
if(u<t)return
this.ch=!1}if(this.e){u=a.c
t=a.d.J(0,a.y)
u=this.ao(new V.U(t.a,t.b).A(0,2).v(0,u.gab()))
this.dx=u
t=this.c
u=u.a
if(typeof u!=="number")return u.R()
s=this.y
if(typeof s!=="number")return H.G(s)
t.sT(-u*10*s)
s=this.b
u=this.dx.b
if(typeof u!=="number")return u.R()
t=this.x
if(typeof t!=="number")return H.G(t)
s.sT(-u*10*t)}else{u=a.c
t=a.d
s=t.J(0,a.y)
r=this.ao(new V.U(s.a,s.b).A(0,2).v(0,u.gab()))
s=this.c
q=r.a
if(typeof q!=="number")return q.R()
p=this.y
if(typeof p!=="number")return H.G(p)
o=this.cy
if(typeof o!=="number")return H.G(o)
s.saa(0,-q*p+o)
o=this.b
p=r.b
if(typeof p!=="number")return p.R()
q=this.x
if(typeof q!=="number")return H.G(q)
s=this.db
if(typeof s!=="number")return H.G(s)
o.saa(0,-p*q+s)
this.b.sT(0)
this.c.sT(0)
t=t.J(0,a.z)
this.dx=this.ao(new V.U(t.a,t.b).A(0,2).v(0,u.gab()))}this.a5()},
c6:function(a){var u,t,s
H.j(a,"$iw")
if(!this.cx)return
this.cx=!1
if(this.ch)return
u=this.dx
if(u.D(u)>0.0001){u=this.c
t=this.dx.a
if(typeof t!=="number")return t.R()
s=this.y
if(typeof s!=="number")return H.G(s)
u.sT(-t*10*s)
s=this.b
t=this.dx.b
if(typeof t!=="number")return t.R()
u=this.x
if(typeof u!=="number")return H.G(u)
s.sT(-t*10*u)
this.a5()}},
fS:function(a){if(H.h(H.j(a,"$iw"),"$idG").x){this.ch=!0
this.cy=this.c.d
this.db=this.b.d}},
fU:function(a){var u,t,s,r,q,p,o
a=H.h(H.j(a,"$iw"),"$ibc")
if(!J.a7(this.d,a.x.b))return
u=a.c
t=a.d
s=t.J(0,a.y)
r=this.ao(new V.U(s.a,s.b).A(0,2).v(0,u.gab()))
s=this.c
q=r.a
if(typeof q!=="number")return q.R()
p=this.y
if(typeof p!=="number")return H.G(p)
o=this.cy
if(typeof o!=="number")return H.G(o)
s.saa(0,-q*p+o)
o=this.b
p=r.b
if(typeof p!=="number")return p.R()
q=this.x
if(typeof q!=="number")return H.G(q)
s=this.db
if(typeof s!=="number")return H.G(s)
o.saa(0,-p*q+s)
this.b.sT(0)
this.c.sT(0)
t=t.J(0,a.z)
this.dx=this.ao(new V.U(t.a,t.b).A(0,2).v(0,u.gab()))
this.a5()},
ir:function(a){H.j(a,"$iw")
this.cx=!0
this.ch=!0
this.cy=this.c.d
this.db=this.b.d},
ip:function(a){var u,t,s,r,q,p,o
a=H.h(H.j(a,"$iw"),"$iea")
if(!this.cx)return
if(this.ch){u=a.d.J(0,a.y)
u=new V.U(u.a,u.b)
u=u.D(u)
t=this.Q
if(typeof t!=="number")return H.G(t)
if(u<t)return
this.ch=!1}if(this.e){u=a.c
t=a.d.J(0,a.y)
u=this.ao(new V.U(t.a,t.b).A(0,2).v(0,u.gab()))
this.dx=u
t=this.c
u=u.a
if(typeof u!=="number")return u.R()
s=this.y
if(typeof s!=="number")return H.G(s)
t.sT(-u*10*s)
s=this.b
u=this.dx.b
if(typeof u!=="number")return u.R()
t=this.x
if(typeof t!=="number")return H.G(t)
s.sT(-u*10*t)}else{u=a.c
t=a.d
s=t.J(0,a.y)
r=this.ao(new V.U(s.a,s.b).A(0,2).v(0,u.gab()))
s=this.c
q=r.a
if(typeof q!=="number")return q.R()
p=this.y
if(typeof p!=="number")return H.G(p)
o=this.cy
if(typeof o!=="number")return H.G(o)
s.saa(0,-q*p+o)
o=this.b
p=r.b
if(typeof p!=="number")return p.R()
q=this.x
if(typeof q!=="number")return H.G(q)
s=this.db
if(typeof s!=="number")return H.G(s)
o.saa(0,-p*q+s)
this.b.sT(0)
this.c.sT(0)
t=t.J(0,a.z)
this.dx=this.ao(new V.U(t.a,t.b).A(0,2).v(0,u.gab()))}this.a5()},
im:function(a){var u,t,s
H.j(a,"$iw")
if(!this.cx)return
this.cx=!1
if(this.ch)return
u=this.dx
if(u.D(u)>0.0001){u=this.c
t=this.dx.a
if(typeof t!=="number")return t.R()
s=this.y
if(typeof s!=="number")return H.G(s)
u.sT(-t*10*s)
s=this.b
t=this.dx.b
if(typeof t!=="number")return t.R()
u=this.x
if(typeof u!=="number")return H.G(u)
s.sT(-t*10*u)
this.a5()}},
aV:function(a,b,c){var u,t,s,r,q
u=this.dy
t=b.e
if(typeof u!=="number")return u.aX()
if(u<t){this.dy=t
s=b.y
this.c.an(0,s)
this.b.an(0,s)
u=this.b.d
r=Math.cos(u)
q=Math.sin(u)
u=V.aV(1,0,0,0,0,r,-q,0,0,q,r,0,0,0,0,1)
t=this.c.d
r=Math.cos(t)
q=Math.sin(t)
this.fr=u.A(0,V.aV(r,0,-q,0,0,1,0,0,q,0,r,0,0,0,0,1))}return this.fr},
$iab:1}
U.ei.prototype={
gp:function(){var u=this.r
if(u==null){u=D.K()
this.r=u}return u},
O:function(a){var u=this.r
if(u!=null)u.C(a)},
b4:function(a){var u,t,s
if(this.a!=null)return!1
this.a=a
u=a.c
t=u.e
if(t==null){t=D.K()
u.e=t
u=t}else u=t
t=this.gfW()
u.h(0,t)
u=this.a.d
s=u.e
if(s==null){s=D.K()
u.e=s
u=s}else u=s
u.h(0,t)
return!0},
fX:function(a){var u,t,s,r
H.j(a,"$iw")
if(!J.a7(this.b,this.a.b.c))return
H.h(a,"$icu")
u=this.d
t=a.x.b
s=this.c
if(typeof t!=="number")return t.A()
r=u+t*s
if(u!==r){this.d=r
u=new D.J("zoom",u,r,this,[P.z])
u.b=!0
this.O(u)}},
aV:function(a,b,c){var u,t,s
u=this.e
t=b.e
if(u<t){this.e=t
s=Math.pow(10,this.d)
this.f=V.aV(s,0,0,0,0,s,0,0,0,0,s,0,0,0,0,1)}return this.f},
$iab:1}
M.dj.prototype={
gp:function(){var u=this.f
if(u==null){u=D.K()
this.f=u}return u},
a_:function(a){var u
H.j(a,"$iw")
u=this.f
if(u!=null)u.C(a)},
aZ:function(){return this.a_(null)},
hI:function(a,b){var u,t,s,r,q,p,o,n
u=M.av
H.m(b,"$id",[u],"$ad")
for(t=b.length,s=this.gZ(),r={func:1,ret:-1,args:[D.w]},q=[r],p=0;p<b.length;b.length===t||(0,H.A)(b),++p){o=b[p]
if(o!=null){n=o.gp()
n.toString
H.n(s,r)
if(n.a==null)n.sae(H.c([],q))
n=n.a;(n&&C.a).h(n,s)}}u=new D.by(a,b,this,[u])
u.b=!0
this.a_(u)},
hK:function(a,b){var u,t,s
u=M.av
H.m(b,"$id",[u],"$ad")
for(t=b.gS(b),s=this.gZ();t.u();)t.gF(t).gp().W(0,s)
u=new D.bz(a,b,this,[u])
u.b=!0
this.a_(u)},
ac:function(a){var u,t
if(this.e)return
this.e=!0
for(u=this.a,u=new J.ak(u,u.length,0,[H.y(u,0)]);u.u();){t=u.d
if(t!=null)t.ac(a)}this.e=!1},
$ad:function(){return[M.av]},
$aa0:function(){return[M.av]},
$iav:1}
M.dl.prototype={
gp:function(){var u=this.f
if(u==null){u=D.K()
this.f=u}return u},
a_:function(a){var u
H.j(a,"$iw")
u=this.f
if(u!=null)u.C(a)},
aZ:function(){return this.a_(null)},
sb5:function(a){var u,t
if(a==null)a=new X.h0()
u=this.a
if(u!==a){if(u!=null)u.gp().W(0,this.gZ())
t=this.a
this.a=a
a.gp().h(0,this.gZ())
u=new D.J("camera",t,this.a,this,[X.bM])
u.b=!0
this.a_(u)}},
sba:function(a,b){var u,t
if(b==null)b=X.k4(!0,!0,!1,null,2000,null,0)
u=this.b
if(u!==b){if(u!=null)u.gp().W(0,this.gZ())
t=this.b
this.b=b
b.gp().h(0,this.gZ())
u=new D.J("target",t,this.b,this,[X.cF])
u.b=!0
this.a_(u)}},
sbb:function(a){var u,t
u=this.c
if(u!=a){if(u!=null)u.gp().W(0,this.gZ())
t=this.c
this.c=a
if(a!=null)a.gp().h(0,this.gZ())
u=new D.J("technique",t,this.c,this,[O.bC])
u.b=!0
this.a_(u)}},
ac:function(a){a.cJ(this.c)
this.b.a2(a)
this.a.a2(a)
this.d.an(0,a)
this.d.ac(a)
this.a.be(a)
this.b.toString
a.cI()},
$iav:1}
M.dr.prototype={
a_:function(a){var u
H.j(a,"$iw")
u=this.x
if(u!=null)u.C(a)},
aZ:function(){return this.a_(null)},
ha:function(a,b){var u,t,s,r,q,p,o,n
u=E.af
H.m(b,"$id",[u],"$ad")
for(t=b.length,s=this.gZ(),r={func:1,ret:-1,args:[D.w]},q=[r],p=0;p<b.length;b.length===t||(0,H.A)(b),++p){o=b[p]
if(o!=null){n=o.z
if(n==null){n=new D.bQ()
n.sae(null)
n.saQ(null)
n.c=null
n.d=0
o.z=n}H.n(s,r)
if(n.a==null)n.sae(H.c([],q))
n=n.a;(n&&C.a).h(n,s)}}u=new D.by(a,b,this,[u])
u.b=!0
this.a_(u)},
hc:function(a,b){var u,t,s
u=E.af
H.m(b,"$id",[u],"$ad")
for(t=b.gS(b),s=this.gZ();t.u();)t.gF(t).gp().W(0,s)
u=new D.bz(a,b,this,[u])
u.b=!0
this.a_(u)},
sb5:function(a){var u,t
if(a==null)a=X.kW(2000,1.0471975511965976,null,0.1,null)
u=this.a
if(u!==a){if(u!=null)u.gp().W(0,this.gZ())
t=this.a
this.a=a
a.gp().h(0,this.gZ())
u=new D.J("camera",t,this.a,this,[X.bM])
u.b=!0
this.a_(u)}},
sba:function(a,b){var u,t
u=this.b
if(u!==b){if(u!=null)u.gp().W(0,this.gZ())
t=this.b
this.b=b
b.gp().h(0,this.gZ())
u=new D.J("target",t,this.b,this,[X.cF])
u.b=!0
this.a_(u)}},
sbb:function(a){var u,t
u=this.c
if(u!=a){if(u!=null)u.gp().W(0,this.gZ())
t=this.c
this.c=a
if(a!=null)a.gp().h(0,this.gZ())
u=new D.J("technique",t,this.c,this,[O.bC])
u.b=!0
this.a_(u)}},
gp:function(){var u=this.x
if(u==null){u=D.K()
this.x=u}return u},
ac:function(a){var u
a.cJ(this.c)
this.b.a2(a)
this.a.a2(a)
u=this.c
if(u!=null)u.an(0,a)
for(u=this.d.a,u=new J.ak(u,u.length,0,[H.y(u,0)]);u.u();)u.d.an(0,a)
for(u=this.d.a,u=new J.ak(u,u.length,0,[H.y(u,0)]);u.u();)u.d.ac(a)
this.a.toString
a.cy.aF()
a.db.aF()
this.b.toString
a.cI()},
sfq:function(a,b){this.d=H.m(b,"$ia0",[E.af],"$aa0")},
$iav:1}
M.av.prototype={}
A.de.prototype={}
A.fk.prototype={
j:function(a,b){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<t;++s){r=u[s]
if(r.b===b)return r}return},
jp:function(){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<u.length;u.length===t||(0,H.A)(u),++s){r=u[s]
C.b.dS(r.a,r.c)}},
dO:function(){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<u.length;u.length===t||(0,H.A)(u),++s){r=u[s]
C.b.dP(r.a,r.c)}}}
A.dJ.prototype={
f_:function(a6,a7){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5
this.z=a6
u=new P.bg("")
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
a6.iz(u)
a6.iG(u)
a6.iA(u)
a6.iO(u)
a6.iP(u)
a6.iI(u)
a6.iT(u)
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
u=new P.bg("")
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
q.iD(u)
q.iy(u)
q.iB(u)
q.iE(u)
q.iM(u)
o=q.dy
if(o){m=u.a+="// === Enviromental ===\n"
m+="\n"
u.a=m
m+="uniform samplerCube envSampler;\n"
u.a=m
m+="uniform int nullEnvTxt;\n"
u.a=m
u.a=m+"\n"
q.iK(u)
q.iL(u)}q.iH(u)
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
k=H.c([],[P.f])
if(q.b!==C.c)C.a.h(k,"ambient()")
if(q.c!==C.c)C.a.h(k,"diffuse(norm, litVec)")
if(q.d!==C.c)C.a.h(k,"invDiffuse(norm, litVec)")
if(q.e!==C.c)C.a.h(k,"specular(norm, litVec)")
m=u.a+="   return litClr*("+C.a.l(k," + ")+");\n"
m+="}\n"
u.a=m
u.a=m+"\n"
q.iC(u)
q.iJ(u)
q.iN(u)
q.iQ(u)
q.iR(u)
q.iS(u)
q.iF(u)}m=u.a+="// === Main ===\n"
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
j=H.c([],[P.f])
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
i="vec4("+C.a.l(j," + ")+", alpha);"
q=u.a
if(n){q+="   gl_FragColor = colorMat*"+i+"\n"
u.a=q}else{q+="   gl_FragColor = "+i+"\n"
u.a=q}q+="}\n"
u.a=q
this.ee(0,s.charCodeAt(0)==0?s:s,q.charCodeAt(0)==0?q:q)
this.Q=this.x.j(0,"posAttr")
this.cx=this.x.j(0,"normAttr")
this.ch=this.x.j(0,"binmAttr")
this.cy=this.x.j(0,"txt2DAttr")
this.db=this.x.j(0,"txtCubeAttr")
this.dx=this.x.j(0,"bendAttr")
if(a6.fr)this.id=H.h(this.y.n(0,"invViewMat"),"$iap")
if(t)this.dy=H.h(this.y.n(0,"objMat"),"$iap")
if(r)this.fr=H.h(this.y.n(0,"viewObjMat"),"$iap")
this.fy=H.h(this.y.n(0,"projViewObjMat"),"$iap")
if(a6.x2)this.k1=H.h(this.y.n(0,"txt2DMat"),"$icL")
if(a6.y1)this.k2=H.h(this.y.n(0,"txtCubeMat"),"$iap")
if(a6.y2)this.k3=H.h(this.y.n(0,"colorMat"),"$iap")
this.sfm(H.c([],[A.ap]))
t=a6.at
if(t>0){this.k4=H.j(this.y.n(0,"bendMatCount"),"$iM")
for(h=0;h<t;++h){s=this.r1
r=this.y
q="bendValues["+h+"].mat"
g=r.j(0,q)
if(g==null)H.t(P.r("Required uniform value, "+q+", was not defined or used in shader."));(s&&C.a).h(s,H.h(g,"$iap"))}}t=a6.a
if(t!==C.c){this.r2=H.h(this.y.n(0,"emissionClr"),"$iI")
switch(t){case C.c:break
case C.f:break
case C.d:this.rx=H.h(this.y.n(0,"emissionTxt"),"$iah")
this.x1=H.h(this.y.n(0,"nullEmissionTxt"),"$iM")
break
case C.e:this.ry=H.h(this.y.n(0,"emissionTxt"),"$iad")
this.x1=H.h(this.y.n(0,"nullEmissionTxt"),"$iM")
break}}t=a6.b
if(t!==C.c){this.x2=H.h(this.y.n(0,"ambientClr"),"$iI")
switch(t){case C.c:break
case C.f:break
case C.d:this.y1=H.h(this.y.n(0,"ambientTxt"),"$iah")
this.at=H.h(this.y.n(0,"nullAmbientTxt"),"$iM")
break
case C.e:this.y2=H.h(this.y.n(0,"ambientTxt"),"$iad")
this.at=H.h(this.y.n(0,"nullAmbientTxt"),"$iM")
break}}t=a6.c
if(t!==C.c){this.al=H.h(this.y.n(0,"diffuseClr"),"$iI")
switch(t){case C.c:break
case C.f:break
case C.d:this.bq=H.h(this.y.n(0,"diffuseTxt"),"$iah")
this.br=H.h(this.y.n(0,"nullDiffuseTxt"),"$iM")
break
case C.e:this.dT=H.h(this.y.n(0,"diffuseTxt"),"$iad")
this.br=H.h(this.y.n(0,"nullDiffuseTxt"),"$iM")
break}}t=a6.d
if(t!==C.c){this.bs=H.h(this.y.n(0,"invDiffuseClr"),"$iI")
switch(t){case C.c:break
case C.f:break
case C.d:this.dU=H.h(this.y.n(0,"invDiffuseTxt"),"$iah")
this.bt=H.h(this.y.n(0,"nullInvDiffuseTxt"),"$iM")
break
case C.e:this.dV=H.h(this.y.n(0,"invDiffuseTxt"),"$iad")
this.bt=H.h(this.y.n(0,"nullInvDiffuseTxt"),"$iM")
break}}t=a6.e
if(t!==C.c){this.bw=H.h(this.y.n(0,"shininess"),"$iY")
this.bu=H.h(this.y.n(0,"specularClr"),"$iI")
switch(t){case C.c:break
case C.f:break
case C.d:this.dW=H.h(this.y.n(0,"specularTxt"),"$iah")
this.bv=H.h(this.y.n(0,"nullSpecularTxt"),"$iM")
break
case C.e:this.dX=H.h(this.y.n(0,"specularTxt"),"$iad")
this.bv=H.h(this.y.n(0,"nullSpecularTxt"),"$iM")
break}}switch(a6.f){case C.c:break
case C.f:break
case C.d:this.dY=H.h(this.y.n(0,"bumpTxt"),"$iah")
this.bx=H.h(this.y.n(0,"nullBumpTxt"),"$iM")
break
case C.e:this.dZ=H.h(this.y.n(0,"bumpTxt"),"$iad")
this.bx=H.h(this.y.n(0,"nullBumpTxt"),"$iM")
break}if(a6.dy){this.e_=H.h(this.y.n(0,"envSampler"),"$iad")
this.e0=H.h(this.y.n(0,"nullEnvTxt"),"$iM")
t=a6.r
if(t!==C.c){this.by=H.h(this.y.n(0,"reflectClr"),"$iI")
switch(t){case C.c:break
case C.f:break
case C.d:this.e1=H.h(this.y.n(0,"reflectTxt"),"$iah")
this.bz=H.h(this.y.n(0,"nullReflectTxt"),"$iM")
break
case C.e:this.e2=H.h(this.y.n(0,"reflectTxt"),"$iad")
this.bz=H.h(this.y.n(0,"nullReflectTxt"),"$iM")
break}}t=a6.x
if(t!==C.c){this.bA=H.h(this.y.n(0,"refraction"),"$iY")
this.bB=H.h(this.y.n(0,"refractClr"),"$iI")
switch(t){case C.c:break
case C.f:break
case C.d:this.e3=H.h(this.y.n(0,"refractTxt"),"$iah")
this.bC=H.h(this.y.n(0,"nullRefractTxt"),"$iM")
break
case C.e:this.e4=H.h(this.y.n(0,"refractTxt"),"$iad")
this.bC=H.h(this.y.n(0,"nullRefractTxt"),"$iM")
break}}}t=a6.y
if(t!==C.c){this.bD=H.h(this.y.n(0,"alpha"),"$iY")
switch(t){case C.c:break
case C.f:break
case C.d:this.e5=H.h(this.y.n(0,"alphaTxt"),"$iah")
this.bE=H.h(this.y.n(0,"nullAlphaTxt"),"$iM")
break
case C.e:this.e6=H.h(this.y.n(0,"alphaTxt"),"$iad")
this.bE=H.h(this.y.n(0,"nullAlphaTxt"),"$iM")
break}}this.sf9(H.c([],[A.cK]))
this.sfa(H.c([],[A.cM]))
this.sfb(H.c([],[A.cN]))
this.sfc(H.c([],[A.cO]))
this.sfd(H.c([],[A.cP]))
this.sfe(H.c([],[A.cQ]))
if(a6.k2){t=a6.z
if(t>0){this.e7=H.j(this.y.n(0,"dirLightCount"),"$iM")
for(h=0;h<t;++h){s=this.y
r="dirLights["+h+"].viewDir"
g=s.j(0,r)
if(g==null)H.t(P.r("Required uniform value, "+r+", was not defined or used in shader."))
H.h(g,"$iI")
s=this.y
r="dirLights["+h+"].color"
f=s.j(0,r)
if(f==null)H.t(P.r("Required uniform value, "+r+", was not defined or used in shader."))
H.h(f,"$iI")
s=this.cr;(s&&C.a).h(s,new A.cK(h,g,f))}}t=a6.Q
if(t>0){this.e8=H.j(this.y.n(0,"pntLightCount"),"$iM")
for(h=0;h<t;++h){s=this.y
r="pntLights["+h+"].point"
g=s.j(0,r)
if(g==null)H.t(P.r("Required uniform value, "+r+", was not defined or used in shader."))
H.h(g,"$iI")
s=this.y
r="pntLights["+h+"].viewPnt"
f=s.j(0,r)
if(f==null)H.t(P.r("Required uniform value, "+r+", was not defined or used in shader."))
H.h(f,"$iI")
s=this.y
r="pntLights["+h+"].color"
e=s.j(0,r)
if(e==null)H.t(P.r("Required uniform value, "+r+", was not defined or used in shader."))
H.h(e,"$iI")
s=this.y
r="pntLights["+h+"].att0"
d=s.j(0,r)
if(d==null)H.t(P.r("Required uniform value, "+r+", was not defined or used in shader."))
H.h(d,"$iY")
s=this.y
r="pntLights["+h+"].att1"
c=s.j(0,r)
if(c==null)H.t(P.r("Required uniform value, "+r+", was not defined or used in shader."))
H.h(c,"$iY")
s=this.y
r="pntLights["+h+"].att2"
b=s.j(0,r)
if(b==null)H.t(P.r("Required uniform value, "+r+", was not defined or used in shader."))
H.h(b,"$iY")
s=this.cs;(s&&C.a).h(s,new A.cM(h,g,f,e,d,c,b))}}t=a6.ch
if(t>0){this.e9=H.j(this.y.n(0,"spotLightCount"),"$iM")
for(h=0;h<t;++h){s=this.y
r="spotLights["+h+"].objPnt"
g=s.j(0,r)
if(g==null)H.t(P.r("Required uniform value, "+r+", was not defined or used in shader."))
H.h(g,"$iI")
s=this.y
r="spotLights["+h+"].objDir"
f=s.j(0,r)
if(f==null)H.t(P.r("Required uniform value, "+r+", was not defined or used in shader."))
H.h(f,"$iI")
s=this.y
r="spotLights["+h+"].viewPnt"
e=s.j(0,r)
if(e==null)H.t(P.r("Required uniform value, "+r+", was not defined or used in shader."))
H.h(e,"$iI")
s=this.y
r="spotLights["+h+"].color"
d=s.j(0,r)
if(d==null)H.t(P.r("Required uniform value, "+r+", was not defined or used in shader."))
H.h(d,"$iI")
s=this.y
r="spotLights["+h+"].cutoff"
c=s.j(0,r)
if(c==null)H.t(P.r("Required uniform value, "+r+", was not defined or used in shader."))
H.h(c,"$iY")
s=this.y
r="spotLights["+h+"].coneAngle"
b=s.j(0,r)
if(b==null)H.t(P.r("Required uniform value, "+r+", was not defined or used in shader."))
H.h(b,"$iY")
s=this.y
r="spotLights["+h+"].att0"
a=s.j(0,r)
if(a==null)H.t(P.r("Required uniform value, "+r+", was not defined or used in shader."))
H.h(a,"$iY")
s=this.y
r="spotLights["+h+"].att1"
a0=s.j(0,r)
if(a0==null)H.t(P.r("Required uniform value, "+r+", was not defined or used in shader."))
H.h(a0,"$iY")
s=this.y
r="spotLights["+h+"].att2"
a1=s.j(0,r)
if(a1==null)H.t(P.r("Required uniform value, "+r+", was not defined or used in shader."))
H.h(a1,"$iY")
s=this.ct;(s&&C.a).h(s,new A.cN(h,g,f,e,d,c,b,a,a0,a1))}}t=a6.cx
if(t>0){this.ea=H.j(this.y.n(0,"txtDirLightCount"),"$iM")
for(h=0;h<t;++h){s=this.y
r="txtDirLights["+h+"].objUp"
g=s.j(0,r)
if(g==null)H.t(P.r("Required uniform value, "+r+", was not defined or used in shader."))
H.h(g,"$iI")
s=this.y
r="txtDirLights["+h+"].objRight"
f=s.j(0,r)
if(f==null)H.t(P.r("Required uniform value, "+r+", was not defined or used in shader."))
H.h(f,"$iI")
s=this.y
r="txtDirLights["+h+"].objDir"
e=s.j(0,r)
if(e==null)H.t(P.r("Required uniform value, "+r+", was not defined or used in shader."))
H.h(e,"$iI")
s=this.y
r="txtDirLights["+h+"].viewDir"
d=s.j(0,r)
if(d==null)H.t(P.r("Required uniform value, "+r+", was not defined or used in shader."))
H.h(d,"$iI")
s=this.y
r="txtDirLights["+h+"].color"
c=s.j(0,r)
if(c==null)H.t(P.r("Required uniform value, "+r+", was not defined or used in shader."))
H.h(c,"$iI")
s=this.y
r="txtDirLights["+h+"].nullTxt"
b=s.j(0,r)
if(b==null)H.t(P.r("Required uniform value, "+r+", was not defined or used in shader."))
H.h(b,"$iM")
s=this.y
r="txtDirLightsTxt2D"+h
a=s.j(0,r)
if(a==null)H.t(P.r("Required uniform value, "+r+", was not defined or used in shader."))
H.h(a,"$iah")
s=this.cu;(s&&C.a).h(s,new A.cO(h,g,f,e,d,c,a,b))}}t=a6.cy
if(t>0){this.eb=H.j(this.y.n(0,"txtPntLightCount"),"$iM")
for(h=0;h<t;++h){s=this.y
r="txtPntLights["+h+"].point"
g=s.j(0,r)
if(g==null)H.t(P.r("Required uniform value, "+r+", was not defined or used in shader."))
H.h(g,"$iI")
s=this.y
r="txtPntLights["+h+"].viewPnt"
f=s.j(0,r)
if(f==null)H.t(P.r("Required uniform value, "+r+", was not defined or used in shader."))
H.h(f,"$iI")
s=this.y
r="txtPntLights["+h+"].invViewRotMat"
e=s.j(0,r)
if(e==null)H.t(P.r("Required uniform value, "+r+", was not defined or used in shader."))
H.h(e,"$icL")
s=this.y
r="txtPntLights["+h+"].color"
d=s.j(0,r)
if(d==null)H.t(P.r("Required uniform value, "+r+", was not defined or used in shader."))
H.h(d,"$iI")
s=this.y
r="txtPntLights["+h+"].nullTxt"
c=s.j(0,r)
if(c==null)H.t(P.r("Required uniform value, "+r+", was not defined or used in shader."))
H.h(c,"$iM")
s=this.y
r="txtPntLights["+h+"].att0"
b=s.j(0,r)
if(b==null)H.t(P.r("Required uniform value, "+r+", was not defined or used in shader."))
H.h(b,"$iY")
s=this.y
r="txtPntLights["+h+"].att1"
a=s.j(0,r)
if(a==null)H.t(P.r("Required uniform value, "+r+", was not defined or used in shader."))
H.h(a,"$iY")
s=this.y
r="txtPntLights["+h+"].att2"
a0=s.j(0,r)
if(a0==null)H.t(P.r("Required uniform value, "+r+", was not defined or used in shader."))
H.h(a0,"$iY")
s=this.y
r="txtPntLightsTxtCube"+h
a1=s.j(0,r)
if(a1==null)H.t(P.r("Required uniform value, "+r+", was not defined or used in shader."))
H.h(a1,"$iad")
s=this.cv;(s&&C.a).h(s,new A.cP(h,g,f,e,d,a1,c,b,a,a0))}}t=a6.db
if(t>0){this.ec=H.j(this.y.n(0,"txtSpotLightCount"),"$iM")
for(h=0;h<t;++h){s=this.y
r="txtSpotLights["+h+"].objPnt"
g=s.j(0,r)
if(g==null)H.t(P.r("Required uniform value, "+r+", was not defined or used in shader."))
H.h(g,"$iI")
s=this.y
r="txtSpotLights["+h+"].objDir"
f=s.j(0,r)
if(f==null)H.t(P.r("Required uniform value, "+r+", was not defined or used in shader."))
H.h(f,"$iI")
s=this.y
r="txtSpotLights["+h+"].objUp"
e=s.j(0,r)
if(e==null)H.t(P.r("Required uniform value, "+r+", was not defined or used in shader."))
H.h(e,"$iI")
s=this.y
r="txtSpotLights["+h+"].objRight"
d=s.j(0,r)
if(d==null)H.t(P.r("Required uniform value, "+r+", was not defined or used in shader."))
H.h(d,"$iI")
s=this.y
r="txtSpotLights["+h+"].viewPnt"
c=s.j(0,r)
if(c==null)H.t(P.r("Required uniform value, "+r+", was not defined or used in shader."))
H.h(c,"$iI")
s=this.y
r="txtSpotLights["+h+"].nullTxt"
b=s.j(0,r)
if(b==null)H.t(P.r("Required uniform value, "+r+", was not defined or used in shader."))
H.h(b,"$iM")
s=this.y
r="txtSpotLights["+h+"].color"
a=s.j(0,r)
if(a==null)H.t(P.r("Required uniform value, "+r+", was not defined or used in shader."))
H.h(a,"$iI")
s=this.y
r="txtSpotLights["+h+"].tuScalar"
a0=s.j(0,r)
if(a0==null)H.t(P.r("Required uniform value, "+r+", was not defined or used in shader."))
H.h(a0,"$iY")
s=this.y
r="txtSpotLights["+h+"].tvScalar"
a1=s.j(0,r)
if(a1==null)H.t(P.r("Required uniform value, "+r+", was not defined or used in shader."))
H.h(a1,"$iY")
s=this.y
r="txtSpotLights["+h+"].att0"
a2=s.j(0,r)
if(a2==null)H.t(P.r("Required uniform value, "+r+", was not defined or used in shader."))
H.h(a2,"$iY")
s=this.y
r="txtSpotLights["+h+"].att1"
a3=s.j(0,r)
if(a3==null)H.t(P.r("Required uniform value, "+r+", was not defined or used in shader."))
H.h(a3,"$iY")
s=this.y
r="txtSpotLights["+h+"].att2"
a4=s.j(0,r)
if(a4==null)H.t(P.r("Required uniform value, "+r+", was not defined or used in shader."))
H.h(a4,"$iY")
s=this.y
r="txtSpotLightsTxt2D"+h
a5=s.j(0,r)
if(a5==null)H.t(P.r("Required uniform value, "+r+", was not defined or used in shader."))
H.h(a5,"$iah")
s=this.cw;(s&&C.a).h(s,new A.cQ(h,g,f,e,d,c,a5,b,a,a0,a1,a2,a3,a4))}}}},
ak:function(a,b,c){if(c==null||!c.d)C.b.L(b.a,b.d,1)
else{a.eP(c)
C.b.L(b.a,b.d,0)}},
af:function(a,b,c){C.b.L(b.a,b.d,1)},
sfm:function(a){this.r1=H.m(a,"$ib",[A.ap],"$ab")},
sf9:function(a){this.cr=H.m(a,"$ib",[A.cK],"$ab")},
sfa:function(a){this.cs=H.m(a,"$ib",[A.cM],"$ab")},
sfb:function(a){this.ct=H.m(a,"$ib",[A.cN],"$ab")},
sfc:function(a){this.cu=H.m(a,"$ib",[A.cO],"$ab")},
sfd:function(a){this.cv=H.m(a,"$ib",[A.cP],"$ab")},
sfe:function(a){this.cw=H.m(a,"$ib",[A.cQ],"$ab")}}
A.hj.prototype={
iz:function(a){var u,t,s
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
iG:function(a){var u
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
iA:function(a){var u
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
iO:function(a){var u,t
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
iP:function(a){var u,t
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
iI:function(a){var u
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
iT:function(a){var u
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
ay:function(a,b,c){var u
if(b===C.c)return
u=a.a+="uniform vec3 "+c+"Clr;\n"
if(b===C.f)return
if(0>=c.length)return H.k(c,0)
u+="uniform int null"+(c[0].toUpperCase()+C.i.bf(c,1))+"Txt;\n"
a.a=u
if(b===C.d)a.a=u+("uniform sampler2D "+c+"Txt;\n")
else if(b===C.e)a.a=u+("uniform samplerCube "+c+"Txt;\n")},
iD:function(a){var u,t
u=this.a
if(u===C.c)return
t=a.a+="// === Emission ===\n"
a.a=t+"\n"
this.ay(a,u,"emission")
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
iy:function(a){var u,t
u=this.b
if(u===C.c)return
t=a.a+="// === Ambient ===\n"
a.a=t+"\n"
this.ay(a,u,"ambient")
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
iB:function(a){var u,t
u=this.c
if(u===C.c)return
t=a.a+="// === Diffuse ===\n"
a.a=t+"\n"
this.ay(a,u,"diffuse")
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
iE:function(a){var u,t
u=this.d
if(u===C.c)return
t=a.a+="// === Inverse Diffuse ===\n"
a.a=t+"\n"
this.ay(a,u,"invDiffuse")
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
iM:function(a){var u,t
u=this.e
if(u===C.c)return
t=a.a+="// === Specular ===\n"
a.a=t+"\n"
this.ay(a,u,"specular")
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
iH:function(a){var u,t
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
iK:function(a){var u,t
u=this.r
if(u===C.c)return
t=a.a+="// === Reflection ===\n"
a.a=t+"\n"
this.ay(a,u,"reflect")
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
iL:function(a){var u,t
u=this.x
if(u===C.c)return
t=a.a+="// === Refraction ===\n"
a.a=t+"\n"
this.ay(a,u,"refract")
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
iC:function(a){var u,t
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
iJ:function(a){var u,t
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
iN:function(a){var u,t
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
iQ:function(a){var u,t,s
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
iR:function(a){var u,t,s
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
iS:function(a){var u,t,s
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
iF:function(a){var u
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
i:function(a){return this.al}}
A.cK.prototype={}
A.cO.prototype={}
A.cM.prototype={}
A.cP.prototype={}
A.cN.prototype={}
A.cQ.prototype={}
A.cB.prototype={
cX:function(a,b){this.c=null
this.d=null
this.e=null
this.f=null
this.r=null
this.x=null
this.y=null},
ee:function(a,b,c){var u,t,s
this.c=b
this.d=c
this.e=this.de(b,35633)
this.f=this.de(this.d,35632)
u=this.a
t=u.createProgram()
this.r=t
C.b.dF(u,t,this.e)
C.b.dF(u,this.r,this.f)
C.b.jz(u,this.r)
if(!H.km(C.b.bN(u,this.r,35714))){s=C.b.eG(u,this.r)
C.b.jh(u,this.r)
H.t(P.r("Failed to link shader: "+H.l(s)))}this.i8()
this.ia()},
a2:function(a){C.b.cN(a.a,this.r)
this.x.jp()},
de:function(a,b){var u,t,s
u=this.a
t=C.b.jf(u,b)
C.b.eR(u,t,a)
C.b.j8(u,t)
if(!H.km(C.b.eI(u,t,35713))){s=C.b.eH(u,t)
C.b.ji(u,t)
throw H.i(P.r("Error compiling shader '"+H.l(t)+"': "+H.l(s)))}return t},
i8:function(){var u,t,s,r,q,p
u=H.c([],[A.de])
t=this.a
s=H.a8(C.b.bN(t,this.r,35721))
if(typeof s!=="number")return H.G(s)
r=0
for(;r<s;++r){q=C.b.eA(t,this.r,r)
p=C.b.eC(t,this.r,q.name)
C.a.h(u,new A.de(t,q.name,p))}this.x=new A.fk(u)},
ia:function(){var u,t,s,r,q,p
u=H.c([],[A.eb])
t=this.a
s=H.a8(C.b.bN(t,this.r,35718))
if(typeof s!=="number")return H.G(s)
r=0
for(;r<s;++r){q=C.b.eB(t,this.r,r)
p=C.b.eJ(t,this.r,q.name)
C.a.h(u,this.jg(q.type,q.size,q.name,p))}this.y=new A.iE(u)},
aO:function(a,b,c){var u,t
u=this.a
t=this.r
if(a===1)return new A.M(u,t,b,c)
else return A.ke(u,t,b,a,c)},
fu:function(a,b,c){var u,t
u=this.a
t=this.r
if(a===1)return new A.ah(u,t,b,c)
else return A.ke(u,t,b,a,c)},
fv:function(a,b,c){var u,t
u=this.a
t=this.r
if(a===1)return new A.ad(u,t,b,c)
else return A.ke(u,t,b,a,c)},
bm:function(a,b){return new P.eu(a+" uniform variables are unsupported by all browsers.\n"+("Please change the type of "+H.l(b)+"."))},
jg:function(a,b,c,d){switch(a){case 5120:return this.aO(b,c,d)
case 5121:return this.aO(b,c,d)
case 5122:return this.aO(b,c,d)
case 5123:return this.aO(b,c,d)
case 5124:return this.aO(b,c,d)
case 5125:return this.aO(b,c,d)
case 5126:return new A.Y(this.a,this.r,c,d)
case 35664:return new A.iz(this.a,this.r,c,d)
case 35665:return new A.I(this.a,this.r,c,d)
case 35666:return new A.iC(this.a,this.r,c,d)
case 35667:return new A.iA(this.a,this.r,c,d)
case 35668:return new A.iB(this.a,this.r,c,d)
case 35669:return new A.iD(this.a,this.r,c,d)
case 35674:return new A.iF(this.a,this.r,c,d)
case 35675:return new A.cL(this.a,this.r,c,d)
case 35676:return new A.ap(this.a,this.r,c,d)
case 35678:return this.fu(b,c,d)
case 35680:return this.fv(b,c,d)
case 35670:throw H.i(this.bm("BOOL",c))
case 35671:throw H.i(this.bm("BOOL_VEC2",c))
case 35672:throw H.i(this.bm("BOOL_VEC3",c))
case 35673:throw H.i(this.bm("BOOL_VEC4",c))
default:throw H.i(P.r("Unknown uniform variable type "+H.l(a)+" for "+H.l(c)+"."))}}}
A.bP.prototype={
i:function(a){return this.b}}
A.dY.prototype={}
A.eb.prototype={}
A.iE.prototype={
j:function(a,b){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<t;++s){r=u[s]
if(r.c===b)return r}return},
n:function(a,b){var u=this.j(0,b)
if(u==null)throw H.i(P.r("Required uniform value, "+b+", was not defined or used in shader."))
return u},
i:function(a){return this.M()},
jt:function(a){var u,t,s,r
for(u=this.a,t=u.length,s="",r=0;r<u.length;u.length===t||(0,H.A)(u),++r)s+=u[r].i(0)+a
return s},
M:function(){return this.jt("\n")}}
A.M.prototype={
i:function(a){return"Uniform1i: "+H.l(this.c)}}
A.iA.prototype={
i:function(a){return"Uniform2i: "+H.l(this.c)}}
A.iB.prototype={
i:function(a){return"Uniform3i: "+H.l(this.c)}}
A.iD.prototype={
i:function(a){return"Uniform4i: "+H.l(this.c)}}
A.iy.prototype={
i:function(a){return"Uniform1iv: "+H.l(this.c)},
siw:function(a){this.e=H.m(a,"$ib",[P.C],"$ab")}}
A.Y.prototype={
i:function(a){return"Uniform1f: "+H.l(this.c)}}
A.iz.prototype={
i:function(a){return"Uniform2f: "+H.l(this.c)}}
A.I.prototype={
i:function(a){return"Uniform3f: "+H.l(this.c)}}
A.iC.prototype={
i:function(a){return"Uniform4f: "+H.l(this.c)}}
A.iF.prototype={
i:function(a){return"Uniform1Mat2 "+H.l(this.c)}}
A.cL.prototype={
aj:function(a){var u=new Float32Array(H.d4(H.m(a,"$ib",[P.z],"$ab")))
C.b.ew(this.a,this.d,!1,u)},
i:function(a){return"UniformMat3: "+H.l(this.c)}}
A.ap.prototype={
aj:function(a){var u=new Float32Array(H.d4(H.m(a,"$ib",[P.z],"$ab")))
C.b.ex(this.a,this.d,!1,u)},
i:function(a){return"UniformMat4: "+H.l(this.c)}}
A.ah.prototype={
eP:function(a){var u,t,s
u=a.d
t=this.a
s=this.d
if(!u)C.b.L(t,s,0)
else C.b.L(t,s,a.a)},
i:function(a){return"UniformSampler2D: "+H.l(this.c)}}
A.ad.prototype={
eQ:function(a){var u,t,s
u=a==null||a.d<6
t=this.a
s=this.d
if(u)C.b.L(t,s,0)
else C.b.L(t,s,a.a)},
i:function(a){return"UniformSamplerCube: "+H.l(this.c)}}
F.jF.prototype={
$3:function(a,b,c){var u,t,s
u=this.a
t=u.a.cD(u.b,b).cD(u.d.cD(u.c,b),c)
u=new V.ag(t.a,t.b,t.c)
if(!J.a7(a.f,u)){a.f=u
u=a.a
if(u!=null)u.a4()}a.sk6(t.v(0,Math.sqrt(t.D(t))))
u=1-b
s=1-c
s=new V.bf(this.b+b*c,this.c+u*c,this.d+b*s,this.e+u*s)
if(!J.a7(a.cx,s)){a.cx=s
u=a.a
if(u!=null)u.a4()}},
$S:36}
F.a4.prototype={
fl:function(){var u,t,s,r,q
u=this.a
t=u==null?null:u.r
u=this.b
s=u==null?null:u.r
u=this.c
r=u==null?null:u.r
q=V.ej()
if(t!=null)q=q.G(0,t)
if(s!=null)q=q.G(0,s)
if(r!=null)q=q.G(0,r)
if(q.ef())return
return q.v(0,Math.sqrt(q.D(q)))},
fp:function(){var u,t,s,r,q
u=this.a
t=u==null?null:u.f
u=this.b
s=u==null?null:u.f
u=this.c
r=u==null?null:u.f
if(t==null||s==null||r==null)return
u=s.J(0,t)
u=new V.Q(u.a,u.b,u.c)
q=u.v(0,Math.sqrt(u.D(u)))
u=r.J(0,t)
u=new V.Q(u.a,u.b,u.c)
u=q.b6(u.v(0,Math.sqrt(u.D(u))))
return u.v(0,Math.sqrt(u.D(u)))},
cl:function(){if(this.d!=null)return!0
var u=this.fl()
if(u==null){u=this.fp()
if(u==null)return!1}this.d=u
this.a.a.a4()
return!0},
fk:function(){var u,t,s,r,q
u=this.a
t=u==null?null:u.x
u=this.b
s=u==null?null:u.x
u=this.c
r=u==null?null:u.x
q=V.ej()
if(t!=null)q=q.G(0,t)
if(s!=null)q=q.G(0,s)
if(r!=null)q=q.G(0,r)
if(q.ef())return
return q.v(0,Math.sqrt(q.D(q)))},
fo:function(){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f
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
if(Math.abs(i-0)<$.O().a){u=m.J(0,p)
u=new V.Q(u.a,u.b,u.c)
h=u.v(0,Math.sqrt(u.D(u)))
if(j.a-k.a<0)h=h.R(0)}else{g=(u-l.b)/i
u=m.J(0,p)
u=new V.ag(u.a*g+p.a,u.b*g+p.b,u.c*g+p.c).J(0,s)
u=new V.Q(u.a,u.b,u.c)
h=u.v(0,Math.sqrt(u.D(u)))
j=j.a
k=k.a
if((j-k)*g+k-l.a<0)h=h.R(0)}u=this.d
if(u!=null){f=u.v(0,Math.sqrt(u.D(u)))
u=f.b6(h)
u=u.v(0,Math.sqrt(u.D(u))).b6(f)
h=u.v(0,Math.sqrt(u.D(u)))}return h},
cj:function(){if(this.e!=null)return!0
var u=this.fk()
if(u==null){u=this.fo()
if(u==null)return!1}this.e=u
this.a.a.a4()
return!0},
t:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.M()},
w:function(a){var u,t
u=this.a
if(u==null||this.b==null||this.c==null)return a+"disposed"
t=a+C.i.ai(J.ar(u.e),0)+", "+C.i.ai(J.ar(this.b.e),0)+", "+C.i.ai(J.ar(this.c.e),0)+" {"
u=this.d
t=u!=null?t+(u.i(0)+", "):t+"-, "
u=this.e
return u!=null?t+(u.i(0)+"}"):t+"-}"},
M:function(){return this.w("")}}
F.bb.prototype={
t:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.M()},
w:function(a){var u=this.a
if(u==null||this.b==null)return a+"disposed"
return a+C.i.ai(J.ar(u.e),0)+", "+C.i.ai(J.ar(this.b.e),0)},
M:function(){return this.w("")}}
F.bB.prototype={
t:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.M()},
w:function(a){var u=this.a
if(u==null)return a+"disposed"
return a+C.i.ai(J.ar(u.e),0)},
M:function(){return this.w("")}}
F.dW.prototype={
gp:function(){var u=this.e
if(u==null){u=D.K()
this.e=u}return u},
jE:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i,h
u=this.e
if(u!=null)++u.d
a.a.a1()
t=this.a.c.length
for(u=a.a.c,s=u.length,r=0;r<u.length;u.length===s||(0,H.A)(u),++r){q=u[r]
this.a.h(0,q.jb())}this.a.a1()
for(u=a.b.b,s=u.length,r=0;r<u.length;u.length===s||(0,H.A)(u),++r){p=u[r]
o=this.a
n=p.a
n.a.a.a1()
n=n.e
if(typeof n!=="number")return n.G()
n+=t
o=o.c
if(n>=o.length)return H.k(o,n)
m=o[n]
this.b.a.a.h(0,m)
n=new F.bB()
if(m.a==null)H.t(P.r("May not create a point with a vertex which is not attached to a shape."))
n.a=m
C.a.h(m.b.b,n)
C.a.h(n.a.a.b.b,n)
o=n.a.a.e
if(o!=null)o.C(null)}for(u=a.c.b,s=u.length,r=0;r<u.length;u.length===s||(0,H.A)(u),++r){l=u[r]
o=this.a
n=l.a
n.a.a.a1()
n=n.e
if(typeof n!=="number")return n.G()
n+=t
o=o.c
if(n>=o.length)return H.k(o,n)
k=o[n]
n=this.a
o=l.b
o.a.a.a1()
o=o.e
if(typeof o!=="number")return o.G()
o+=t
n=n.c
if(o>=n.length)return H.k(n,o)
j=n[o]
o=this.c.a
o.a.h(0,k)
o.a.h(0,j)
F.mg(k,j)}for(u=a.d.b,s=u.length,r=0;r<u.length;u.length===s||(0,H.A)(u),++r){i=u[r]
o=this.a
n=i.a
n.a.a.a1()
n=n.e
if(typeof n!=="number")return n.G()
n+=t
o=o.c
if(n>=o.length)return H.k(o,n)
k=o[n]
n=this.a
o=i.b
o.a.a.a1()
o=o.e
if(typeof o!=="number")return o.G()
o+=t
n=n.c
if(o>=n.length)return H.k(n,o)
j=n[o]
o=this.a
n=i.c
n.a.a.a1()
n=n.e
if(typeof n!=="number")return n.G()
n+=t
o=o.c
if(n>=o.length)return H.k(o,n)
h=o[n]
n=this.d.a
n.a.h(0,k)
n.a.h(0,j)
n.a.h(0,h)
F.cm(k,j,h)}u=this.e
if(u!=null)u.aH(0)},
aA:function(){var u,t
u=this.e
if(u!=null)++u.d
t=this.d.aA()||!1
if(!this.a.aA())t=!1
u=this.e
if(u!=null)u.aH(0)
return t},
dJ:function(a0,a1){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a
u=this.a.c.length
a1.toString
t=$.aK()
s=a1.a
r=(s&t.a)!==0?1:0
if((s&$.bl().a)!==0)++r
if((s&$.bk().a)!==0)++r
if((s&$.bm().a)!==0)++r
if((s&$.bn().a)!==0)++r
if((s&$.da().a)!==0)++r
if((s&$.db().a)!==0)++r
if((s&$.ca().a)!==0)++r
if((s&$.bj().a)!==0)++r
q=a1.gcT(a1)
p=q*4
t=new Array(u*q)
t.fixed$length=Array
s=P.z
o=H.c(t,[s])
t=new Array(r)
t.fixed$length=Array
n=H.c(t,[Z.dh])
for(m=0,l=0;l<r;++l){k=a1.j_(l)
j=k.gcT(k)
C.a.Y(n,l,new Z.dh(k,j,m*4,p,0))
for(i=0;i<u;++i){t=this.a.c
if(i>=t.length)return H.k(t,i)
h=t[i].jA(k)
g=m+i*q
for(f=0;f<h.length;++f){C.a.Y(o,g,h[f]);++g}}m+=j}H.m(o,"$ib",[s],"$ab")
t=a0.a
e=t.createBuffer()
C.b.as(t,34962,e)
C.b.dI(t,34962,new Float32Array(H.d4(o)),35044)
C.b.as(t,34962,null)
d=new Z.ce(new Z.ek(34962,e),n,a1)
d.sfK(H.c([],[Z.bx]))
if(this.b.b.length!==0){s=P.C
c=H.c([],[s])
for(l=0;b=this.b.b,l<b.length;++l){b=b[l].a
b.a.a.a1()
C.a.h(c,b.e)}a=Z.kf(t,34963,H.m(c,"$ib",[s],"$ab"))
C.a.h(d.b,new Z.bx(0,c.length,a))}if(this.c.b.length!==0){s=P.C
c=H.c([],[s])
for(l=0;b=this.c.b,l<b.length;++l){b=b[l].a
b.a.a.a1()
C.a.h(c,b.e)
b=this.c.b
if(l>=b.length)return H.k(b,l)
b=b[l].b
b.a.a.a1()
C.a.h(c,b.e)}a=Z.kf(t,34963,H.m(c,"$ib",[s],"$ab"))
C.a.h(d.b,new Z.bx(1,c.length,a))}if(this.d.b.length!==0){s=P.C
c=H.c([],[s])
for(l=0;b=this.d.b,l<b.length;++l){b=b[l].a
b.a.a.a1()
C.a.h(c,b.e)
b=this.d.b
if(l>=b.length)return H.k(b,l)
b=b[l].b
b.a.a.a1()
C.a.h(c,b.e)
b=this.d.b
if(l>=b.length)return H.k(b,l)
b=b[l].c
b.a.a.a1()
C.a.h(c,b.e)}a=Z.kf(t,34963,H.m(c,"$ib",[s],"$ab"))
C.a.h(d.b,new Z.bx(4,c.length,a))}return d},
i:function(a){var u=H.c([],[P.f])
if(this.a.c.length!==0){C.a.h(u,"Vertices:")
C.a.h(u,this.a.w("   "))}if(this.b.b.length!==0){C.a.h(u,"Points:")
C.a.h(u,this.b.w("   "))}if(this.c.b.length!==0){C.a.h(u,"Lines:")
C.a.h(u,this.c.w("   "))}if(this.d.b.length!==0){C.a.h(u,"Faces:")
C.a.h(u,this.d.w("   "))}return C.a.l(u,"\n")},
aU:function(a){var u=this.e
if(u!=null)u.C(a)},
a4:function(){return this.aU(null)},
$iny:1}
F.hW.prototype={
iV:function(a){var u,t,s,r,q,p
H.m(a,"$ib",[F.ax],"$ab")
u=H.c([],[F.a4])
t=a[0]
for(s=this.a,r=2;r<4;++r){q=a[r-1]
p=a[r]
s.a.h(0,t)
s.a.h(0,q)
s.a.h(0,p)
C.a.h(u,F.cm(t,q,p))}return u},
iW:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k,j,i,h
H.m(c,"$ib",[F.ax],"$ab")
u=H.c([],[F.a4])
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
C.a.h(u,F.cm(l,k,i))
t.a.h(0,l)
t.a.h(0,i)
t.a.h(0,h)
C.a.h(u,F.cm(l,i,h))}else{m.h(0,k)
t.a.h(0,i)
t.a.h(0,h)
C.a.h(u,F.cm(k,i,h))
t.a.h(0,k)
t.a.h(0,h)
t.a.h(0,l)
C.a.h(u,F.cm(k,h,l))}o=!o}q=!q}return u},
gm:function(a){return this.b.length},
aA:function(){var u,t,s,r
for(u=this.b,t=u.length,s=!0,r=0;r<u.length;u.length===t||(0,H.A)(u),++r)if(!u[r].cl())s=!1
return s},
ck:function(){var u,t,s,r
for(u=this.b,t=u.length,s=!0,r=0;r<u.length;u.length===t||(0,H.A)(u),++r)if(!u[r].cj())s=!1
return s},
i:function(a){return this.M()},
w:function(a){var u,t,s,r
u=H.c([],[P.f])
for(t=this.b,s=t.length,r=0;r<t.length;t.length===s||(0,H.A)(t),++r)C.a.h(u,t[r].w(a))
return C.a.l(u,"\n")},
M:function(){return this.w("")},
sfC:function(a){this.b=H.m(a,"$ib",[F.a4],"$ab")}}
F.hX.prototype={
gm:function(a){return this.b.length},
i:function(a){return this.M()},
w:function(a){var u,t,s,r
u=H.c([],[P.f])
t=this.b.length
for(s=0;s<t;++s){r=this.b
if(s>=r.length)return H.k(r,s)
C.a.h(u,r[s].w(a+(""+s+". ")))}return C.a.l(u,"\n")},
M:function(){return this.w("")},
sfN:function(a){this.b=H.m(a,"$ib",[F.bb],"$ab")}}
F.hY.prototype={
gm:function(a){return this.b.length},
i:function(a){return this.M()},
w:function(a){var u,t,s,r
u=H.c([],[P.f])
for(t=this.b,s=t.length,r=0;r<t.length;t.length===s||(0,H.A)(t),++r)C.a.h(u,t[r].w(a))
return C.a.l(u,"\n")},
M:function(){return this.w("")},
sc9:function(a){this.b=H.m(a,"$ib",[F.bB],"$ab")}}
F.ax.prototype={
cn:function(a){var u,t,s,r,q,p,o
u=this.f
t=this.r
s=this.x
r=this.y
q=this.z
p=this.Q
o=this.ch
return F.iN(this.cx,s,p,u,t,r,q,a,o)},
jb:function(){return this.cn(null)},
sk6:function(a){var u
if(!J.a7(this.z,a)){this.z=a
u=this.a
if(u!=null)u.a4()}},
jA:function(a){var u,t
if(a.t(0,$.aK())){u=this.f
t=[P.z]
if(u==null)return H.c([0,0,0],t)
else return H.c([u.a,u.b,u.c],t)}else if(a.t(0,$.bl())){u=this.r
t=[P.z]
if(u==null)return H.c([0,1,0],t)
else return H.c([u.a,u.b,u.c],t)}else if(a.t(0,$.bk())){u=this.x
t=[P.z]
if(u==null)return H.c([0,0,1],t)
else return H.c([u.a,u.b,u.c],t)}else if(a.t(0,$.bm())){u=this.y
t=[P.z]
if(u==null)return H.c([0,0],t)
else return H.c([u.a,u.b],t)}else if(a.t(0,$.bn())){u=this.z
t=[P.z]
if(u==null)return H.c([0,0,0],t)
else return H.c([u.a,u.b,u.c],t)}else if(a.t(0,$.da())){u=this.Q
t=[P.z]
if(u==null)return H.c([1,1,1],t)
else return H.c([u.a,u.b,u.c],t)}else if(a.t(0,$.db())){u=this.Q
t=[P.z]
if(u==null)return H.c([1,1,1,1],t)
else return H.c([u.a,u.b,u.c,u.d],t)}else if(a.t(0,$.ca()))return H.c([this.ch],[P.z])
else if(a.t(0,$.bj())){u=this.cx
t=[P.z]
if(u==null)return H.c([-1,-1,-1,-1],t)
else return H.c([u.a,u.b,u.c,u.d],t)}else return H.c([],[P.z])},
cl:function(){var u,t
u={}
if(this.r!=null)return!0
t=this.a
if(t!=null){t=t.e
if(t!=null)++t.d}u.a=V.ej()
this.d.P(0,new F.iV(u))
u=u.a
this.r=u.v(0,Math.sqrt(u.D(u)))
u=this.a
if(u!=null){u.a4()
u=this.a.e
if(u!=null)u.aH(0)}return!0},
cj:function(){var u,t
u={}
if(this.x!=null)return!0
t=this.a
if(t!=null){t=t.e
if(t!=null)++t.d}u.a=V.ej()
this.d.P(0,new F.iU(u))
u=u.a
this.x=u.v(0,Math.sqrt(u.D(u)))
u=this.a
if(u!=null){u.a4()
u=this.a.e
if(u!=null)u.aH(0)}return!0},
t:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.M()},
w:function(a){var u,t,s
u=H.c([],[P.f])
C.a.h(u,C.i.ai(J.ar(this.e),0))
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
s=C.a.l(u,", ")
return a+"{"+s+"}"},
M:function(){return this.w("")}}
F.iV.prototype={
$1:function(a){var u,t
H.j(a,"$ia4")
u=a==null?null:a.d
if(u!=null){t=this.a
t.a=t.a.G(0,u)}},
$S:8}
F.iU.prototype={
$1:function(a){var u,t
H.j(a,"$ia4")
u=a==null?null:a.e
if(u!=null){t=this.a
t.a=t.a.G(0,u)}},
$S:8}
F.iO.prototype={
a1:function(){},
h:function(a,b){var u,t
u=b.a
if(u!=null){if(u===this.a)return!1
throw H.i(P.r("May not add a vertex already attached to another shape to this shape."))}u=this.c
b.e=u.length
t=this.a
b.a=t
C.a.h(u,b)
t.a4()
return!0},
iX:function(a,b,c,d,e,f,g,h,i){var u=F.iN(a,b,c,d,e,f,g,h,i)
this.h(0,u)
return u},
bo:function(a,b,c,d,e,f){return this.iX(a,null,b,c,null,d,e,f,0)},
gm:function(a){return this.c.length},
aA:function(){var u,t,s
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.A)(u),++s)u[s].cl()
return!0},
ck:function(){var u,t,s
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.A)(u),++s)u[s].cj()
return!0},
j4:function(){var u,t,s,r,q,p,o,n
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.A)(u),++s){r=u[s]
if(r.z==null){q=r.r
p=q.a
o=q.b
n=q.c
n=q.v(0,Math.sqrt(p*p+o*o+n*n))
if(!J.a7(r.z,n)){r.z=n
q=r.a
if(q!=null){q=q.e
if(q!=null)q.C(null)}}}}return!0},
i:function(a){return this.M()},
w:function(a){var u,t,s,r
this.a1()
u=H.c([],[P.f])
for(t=this.c,s=t.length,r=0;r<t.length;t.length===s||(0,H.A)(t),++r)C.a.h(u,t[r].w(a))
return C.a.l(u,"\n")},
M:function(){return this.w("")},
six:function(a){this.c=H.m(a,"$ib",[F.ax],"$ab")}}
F.iP.prototype={
gm:function(a){return this.b.length+this.c.length+this.d.length},
P:function(a,b){H.n(b,{func:1,ret:-1,args:[F.a4]})
C.a.P(this.b,b)
C.a.P(this.c,new F.iQ(this,b))
C.a.P(this.d,new F.iR(this,b))},
i:function(a){return this.M()},
w:function(a){var u,t,s,r
u=H.c([],[P.f])
for(t=this.b,s=t.length,r=0;r<t.length;t.length===s||(0,H.A)(t),++r)C.a.h(u,t[r].w(a))
for(t=this.c,s=t.length,r=0;r<t.length;t.length===s||(0,H.A)(t),++r)C.a.h(u,t[r].w(a))
for(t=this.d,s=t.length,r=0;r<t.length;t.length===s||(0,H.A)(t),++r)C.a.h(u,t[r].w(a))
return C.a.l(u,"\n")},
M:function(){return this.w("")},
sfD:function(a){this.b=H.m(a,"$ib",[F.a4],"$ab")},
sfE:function(a){this.c=H.m(a,"$ib",[F.a4],"$ab")},
sfF:function(a){this.d=H.m(a,"$ib",[F.a4],"$ab")}}
F.iQ.prototype={
$1:function(a){H.j(a,"$ia4")
if(!J.a7(a.a,this.a))this.b.$1(a)},
$S:8}
F.iR.prototype={
$1:function(a){var u
H.j(a,"$ia4")
u=this.a
if(!J.a7(a.a,u)&&!J.a7(a.b,u))this.b.$1(a)},
$S:8}
F.iS.prototype={
gm:function(a){return this.b.length+this.c.length},
i:function(a){return this.M()},
w:function(a){var u,t,s,r
u=H.c([],[P.f])
for(t=this.b,s=t.length,r=0;r<t.length;t.length===s||(0,H.A)(t),++r)C.a.h(u,t[r].w(a))
for(t=this.c,s=t.length,r=0;r<t.length;t.length===s||(0,H.A)(t),++r)C.a.h(u,t[r].w(a))
return C.a.l(u,"\n")},
M:function(){return this.w("")},
sfO:function(a){this.b=H.m(a,"$ib",[F.bb],"$ab")},
sfP:function(a){this.c=H.m(a,"$ib",[F.bb],"$ab")}}
F.iT.prototype={
gm:function(a){return this.b.length},
i:function(a){return this.M()},
w:function(a){var u,t,s,r
u=H.c([],[P.f])
for(t=this.b,s=t.length,r=0;r<t.length;t.length===s||(0,H.A)(t),++r)C.a.h(u,t[r].w(a))
return C.a.l(u,"\n")},
M:function(){return this.w("")},
sc9:function(a){this.b=H.m(a,"$ib",[F.bB],"$ab")}}
O.dI.prototype={
gp:function(){var u=this.dy
if(u==null){u=D.K()
this.dy=u}return u},
U:function(a){var u
H.j(a,"$iw")
u=this.dy
if(u!=null)u.C(a)},
b_:function(){return this.U(null)},
ds:function(a){H.j(a,"$iw")
this.a=null
this.U(a)},
i_:function(){return this.ds(null)},
h2:function(a,b){var u=V.am
u=new D.by(a,H.m(b,"$id",[u],"$ad"),this,[u])
u.b=!0
this.U(u)},
h4:function(a,b){var u=V.am
u=new D.bz(a,H.m(b,"$id",[u],"$ad"),this,[u])
u.b=!0
this.U(u)},
da:function(){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7
u=this.dx
t=C.h.a3(u.e.length+3,4)*4
s=C.h.a3(u.f.length+3,4)*4
r=C.h.a3(u.r.length+3,4)*4
q=C.h.a3(u.x.length+3,4)*4
p=C.h.a3(u.y.length+3,4)*4
o=C.h.a3(u.z.length+3,4)*4
n=C.h.a3(this.e.a.length+3,4)*4
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
if(a0){b=$.bl()
a7=new Z.b5(a7.a|b.a)}if(a1){b=$.bk()
a7=new Z.b5(a7.a|b.a)}if(a2){b=$.bm()
a7=new Z.b5(a7.a|b.a)}if(a3){b=$.bn()
a7=new Z.b5(a7.a|b.a)}if(a5){b=$.bj()
a7=new Z.b5(a7.a|b.a)}return new A.hj(u,m,l,k,j,i,h,g,f,t,s,r,q,p,o,t+s+r+q+p+o,d,d,a4,a6,!0,!1,!1,c,a4,a,a0,a1,a2,a3,a5,!1,!1,!1,n,e.charCodeAt(0)==0?e:e,a7)},
X:function(a,b){H.m(a,"$ib",[T.cH],"$ab")
if(b!=null)if(!C.a.V(a,b)){b.a=a.length
C.a.h(a,b)}},
an:function(a,b){var u,t,s,r,q
for(u=this.dx.a,u=new J.ak(u,u.length,0,[H.y(u,0)]);u.u();){t=u.d
t.toString
s=$.iM
if(s==null){s=new V.Q(0,0,1)
$.iM=s}t.a=s
r=t.b
if(r!=null){q=r.a
if(q!=null)t.a=q.cM(s)}}},
eo:function(a2,a3){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1
u=this.a
if(u==null){u=this.da()
t=H.j(a2.fr.j(0,u.al),"$idJ")
if(t==null){t=A.mj(u,a2.a)
a2.dD(t)}this.a=t
a3.e=null
u=t}s=u.z
r=s.bq
u=a3.e
if(!(u instanceof Z.ce)){a3.e=null
u=null}if(u==null||!u.d.t(0,r)){u=s.r1
if(u)a3.d.aA()
q=s.r2
if(q){p=a3.d
o=p.e
if(o!=null)++o.d
p.d.ck()
p.a.ck()
p=p.e
if(p!=null)p.aH(0)}p=s.ry
if(p){o=a3.d
n=o.e
if(n!=null)++n.d
o.a.j4()
o=o.e
if(o!=null)o.aH(0)}m=a3.d.dJ(new Z.el(a2.a),r)
m.aC($.aK()).e=this.a.Q.c
if(u)m.aC($.bl()).e=this.a.cx.c
if(q)m.aC($.bk()).e=this.a.ch.c
if(s.rx)m.aC($.bm()).e=this.a.cy.c
if(p)m.aC($.bn()).e=this.a.db.c
if(s.x1)m.aC($.bj()).e=this.a.dx.c
a3.e=m}u=T.cH
l=H.c([],[u])
this.a.a2(a2)
if(s.fx){q=this.a
p=a2.dx
p=p.ga0(p)
q=q.dy
q.toString
q.aj(p.ad(0,!0))}if(s.fy){q=this.a
p=a2.cx
if(p==null){p=a2.db
p=p.ga0(p)
o=a2.dx
o=p.A(0,o.ga0(o))
a2.cx=o
p=o}q=q.fr
q.toString
q.aj(p.ad(0,!0))}q=this.a
p=a2.ch
if(p==null){p=a2.gjT()
o=a2.dx
o=p.A(0,o.ga0(o))
a2.ch=o
p=o}q=q.fy
q.toString
q.aj(p.ad(0,!0))
if(s.x2){q=this.a
p=this.b
q=q.k1
q.toString
q.aj(C.r.ad(p,!0))}if(s.y1){q=this.a
p=this.c
q=q.k2
q.toString
q.aj(C.r.ad(p,!0))}if(s.y2){q=this.a
p=this.d
q=q.k3
q.toString
q.aj(C.r.ad(p,!0))}if(s.at>0){k=this.e.a.length
q=this.a.k4
C.b.L(q.a,q.d,k)
for(q=[P.z],j=0;j<k;++j){p=this.a
o=this.e.a
if(j>=o.length)return H.k(o,j)
o=o[j]
p.toString
H.j(o,"$iam")
p=p.r1
if(j>=p.length)return H.k(p,j)
p=p[j]
i=new Float32Array(H.d4(H.m(o.ad(0,!0),"$ib",q,"$ab")))
C.b.ex(p.a,p.d,!1,i)}}switch(s.a){case C.c:break
case C.f:q=this.a
p=this.f.f
q=q.r2
q.toString
o=p.a
n=p.b
p=p.c
C.b.q(q.a,q.d,o,n,p)
break
case C.d:this.X(l,this.f.d)
q=this.a
p=this.f.d
q.ak(q.rx,q.x1,p)
p=this.a
q=this.f.f
p=p.r2
p.toString
o=q.a
n=q.b
q=q.c
C.b.q(p.a,p.d,o,n,q)
break
case C.e:this.X(l,this.f.e)
q=this.a
p=this.f.e
q.af(q.ry,q.x1,p)
p=this.a
q=this.f.f
p=p.r2
p.toString
o=q.a
n=q.b
q=q.c
C.b.q(p.a,p.d,o,n,q)
break}if(s.k2){switch(s.b){case C.c:break
case C.f:q=this.a
p=this.r.f
q=q.x2
q.toString
o=p.a
n=p.b
p=p.c
C.b.q(q.a,q.d,o,n,p)
break
case C.d:this.X(l,this.r.d)
q=this.a
p=this.r.d
q.ak(q.y1,q.at,p)
p=this.a
q=this.r.f
p=p.x2
p.toString
o=q.a
n=q.b
q=q.c
C.b.q(p.a,p.d,o,n,q)
break
case C.e:this.X(l,this.r.e)
q=this.a
p=this.r.e
q.af(q.y2,q.at,p)
p=this.a
q=this.r.f
p=p.x2
p.toString
o=q.a
n=q.b
q=q.c
C.b.q(p.a,p.d,o,n,q)
break}switch(s.c){case C.c:break
case C.f:q=this.a
p=this.x.f
q=q.al
q.toString
o=p.a
n=p.b
p=p.c
C.b.q(q.a,q.d,o,n,p)
break
case C.d:this.X(l,this.x.d)
q=this.a
p=this.x.d
q.ak(q.bq,q.br,p)
p=this.a
q=this.x.f
p=p.al
p.toString
o=q.a
n=q.b
q=q.c
C.b.q(p.a,p.d,o,n,q)
break
case C.e:this.X(l,this.x.e)
q=this.a
p=this.x.e
q.af(q.dT,q.br,p)
p=this.a
q=this.x.f
p=p.al
p.toString
o=q.a
n=q.b
q=q.c
C.b.q(p.a,p.d,o,n,q)
break}switch(s.d){case C.c:break
case C.f:q=this.a
p=this.y.f
q=q.bs
q.toString
o=p.a
n=p.b
p=p.c
C.b.q(q.a,q.d,o,n,p)
break
case C.d:this.X(l,this.y.d)
q=this.a
p=this.y.d
q.ak(q.dU,q.bt,p)
p=this.a
q=this.y.f
p=p.bs
p.toString
o=q.a
n=q.b
q=q.c
C.b.q(p.a,p.d,o,n,q)
break
case C.e:this.X(l,this.y.e)
q=this.a
p=this.y.e
q.af(q.dV,q.bt,p)
p=this.a
q=this.y.f
p=p.bs
p.toString
o=q.a
n=q.b
q=q.c
C.b.q(p.a,p.d,o,n,q)
break}switch(s.e){case C.c:break
case C.f:q=this.a
p=this.z.f
q=q.bu
q.toString
o=p.a
n=p.b
p=p.c
C.b.q(q.a,q.d,o,n,p)
p=this.a
n=this.z.ch
p=p.bw
C.b.I(p.a,p.d,n)
break
case C.d:this.X(l,this.z.d)
q=this.a
p=this.z.d
q.ak(q.dW,q.bv,p)
p=this.a
q=this.z.f
p=p.bu
p.toString
o=q.a
n=q.b
q=q.c
C.b.q(p.a,p.d,o,n,q)
q=this.a
n=this.z.ch
q=q.bw
C.b.I(q.a,q.d,n)
break
case C.e:this.X(l,this.z.e)
q=this.a
p=this.z.e
q.af(q.dX,q.bv,p)
p=this.a
q=this.z.f
p=p.bu
p.toString
o=q.a
n=q.b
q=q.c
C.b.q(p.a,p.d,o,n,q)
q=this.a
n=this.z.ch
q=q.bw
C.b.I(q.a,q.d,n)
break}if(s.z>0){k=this.dx.e.length
q=this.a.e7
C.b.L(q.a,q.d,k)
q=a2.db
h=q.ga0(q)
for(q=this.dx.e,p=q.length,g=0,f=0;f<q.length;q.length===p||(0,H.A)(q),++f){e=q[f]
o=this.a.cr
if(g>=o.length)return H.k(o,g)
d=o[g]
o=h.cM(e.a)
n=o.a
c=o.b
b=o.c
b=o.v(0,Math.sqrt(n*n+c*c+b*b))
c=d.b
n=b.a
o=b.b
b=b.c
C.b.q(c.a,c.d,n,o,b)
b=e.c
o=d.c
C.b.q(o.a,o.d,b.a,b.b,b.c);++g}}if(s.Q>0){k=this.dx.f.length
q=this.a.e8
C.b.L(q.a,q.d,k)
q=a2.db
h=q.ga0(q)
for(q=this.dx.f,p=q.length,g=0,f=0;f<q.length;q.length===p||(0,H.A)(q),++f){e=q[f]
o=this.a.cs
if(g>=o.length)return H.k(o,g)
d=o[g]
o=e.gb9(e)
n=d.b
C.b.q(n.a,n.d,o.a,o.b,o.c)
o=h.bd(e.gb9(e))
n=d.c
C.b.q(n.a,n.d,o.a,o.b,o.c)
o=e.gaB(e)
n=d.d
C.b.q(n.a,n.d,o.a,o.b,o.c)
o=e.gce()
n=d.e
C.b.I(n.a,n.d,o)
o=e.gcf()
n=d.f
C.b.I(n.a,n.d,o)
o=e.gcg()
n=d.r
C.b.I(n.a,n.d,o);++g}}if(s.ch>0){k=this.dx.r.length
q=this.a.e9
C.b.L(q.a,q.d,k)
q=a2.db
h=q.ga0(q)
for(q=this.dx.r,p=q.length,g=0,f=0;f<q.length;q.length===p||(0,H.A)(q),++f){e=q[f]
o=this.a.ct
if(g>=o.length)return H.k(o,g)
d=o[g]
o=e.gb9(e)
n=d.b
C.b.q(n.a,n.d,o.a,o.b,o.c)
o=e.gcp(e).kh()
n=d.c
C.b.q(n.a,n.d,o.a,o.b,o.c)
o=h.bd(e.gb9(e))
n=d.d
C.b.q(n.a,n.d,o.a,o.b,o.c)
o=e.gaB(e)
n=d.e
C.b.q(n.a,n.d,o.a,o.b,o.c)
o=e.gkg()
n=d.f
C.b.I(n.a,n.d,o)
o=e.gkf()
n=d.r
C.b.I(n.a,n.d,o)
o=e.gce()
n=d.x
C.b.I(n.a,n.d,o)
o=e.gcf()
n=d.y
C.b.I(n.a,n.d,o)
o=e.gcg()
n=d.z
C.b.I(n.a,n.d,o);++g}}if(s.cx>0){k=this.dx.x.length
q=this.a.ea
C.b.L(q.a,q.d,k)
q=a2.db
h=q.ga0(q)
for(q=this.dx.x,p=q.length,o=[u],g=0,f=0;f<q.length;q.length===p||(0,H.A)(q),++f){e=q[f]
n=this.a.cu
if(g>=n.length)return H.k(n,g)
d=n[g]
n=e.gbc()
H.m(l,"$ib",o,"$ab")
if(!C.a.V(l,n)){n.a=l.length
C.a.h(l,n)}n=e.gcp(e)
c=d.d
C.b.q(c.a,c.d,n.a,n.b,n.c)
n=e.gbL()
c=d.b
C.b.q(c.a,c.d,n.a,n.b,n.c)
n=e.gbJ(e)
c=d.c
C.b.q(c.a,c.d,n.a,n.b,n.c)
n=h.cM(e.gcp(e))
c=n.a
b=n.b
a=n.c
a=n.v(0,Math.sqrt(c*c+b*b+a*a))
b=d.e
c=a.a
n=a.b
a=a.c
C.b.q(b.a,b.d,c,n,a)
a=e.gaB(e)
n=d.f
C.b.q(n.a,n.d,a.a,a.b,a.c)
a=e.gbc()
n=a.geg(a)
if(!n){n=d.x
C.b.L(n.a,n.d,1)}else{n=d.r
c=a.d
b=n.a
n=n.d
if(!c)C.b.L(b,n,0)
else C.b.L(b,n,a.a)
n=d.x
C.b.L(n.a,n.d,0)}++g}}if(s.cy>0){k=this.dx.y.length
q=this.a.eb
C.b.L(q.a,q.d,k)
q=a2.db
h=q.ga0(q)
for(q=this.dx.y,p=q.length,o=[P.z],n=[u],g=0,f=0;f<q.length;q.length===p||(0,H.A)(q),++f){e=q[f]
c=this.a.cv
if(g>=c.length)return H.k(c,g)
d=c[g]
c=e.gbc()
H.m(l,"$ib",n,"$ab")
if(!C.a.V(l,c)){c.a=l.length
C.a.h(l,c)}a0=h.A(0,e.ga0(e))
c=e.ga0(e)
b=$.cy
if(b==null){b=new V.ag(0,0,0)
$.cy=b}b=c.bd(b)
c=d.b
C.b.q(c.a,c.d,b.a,b.b,b.c)
c=$.cy
if(c==null){c=new V.ag(0,0,0)
$.cy=c}c=a0.bd(c)
b=d.c
C.b.q(b.a,b.d,c.a,c.b,c.c)
c=a0.cB(0)
b=d.d
i=new Float32Array(H.d4(H.m(new V.dK(c.a,c.b,c.c,c.e,c.f,c.r,c.y,c.z,c.Q).ad(0,!0),"$ib",o,"$ab")))
C.b.ew(b.a,b.d,!1,i)
b=e.gaB(e)
c=d.e
C.b.q(c.a,c.d,b.a,b.b,b.c)
b=e.gbc()
c=b.geg(b)
if(!c){c=d.r
C.b.L(c.a,c.d,1)}else{c=d.f
a=b.d
a1=c.a
c=c.d
if(a<6)C.b.L(a1,c,0)
else C.b.L(a1,c,b.a)
c=d.r
C.b.L(c.a,c.d,0)}c=e.gce()
b=d.x
C.b.I(b.a,b.d,c)
c=e.gcf()
b=d.y
C.b.I(b.a,b.d,c)
c=e.gcg()
b=d.z
C.b.I(b.a,b.d,c);++g}}if(s.db>0){k=this.dx.z.length
q=this.a.ec
C.b.L(q.a,q.d,k)
q=a2.db
h=q.ga0(q)
for(q=this.dx.z,p=q.length,u=[u],g=0,f=0;f<q.length;q.length===p||(0,H.A)(q),++f){e=q[f]
o=this.a.cw
if(g>=o.length)return H.k(o,g)
d=o[g]
o=e.gbc()
H.m(l,"$ib",u,"$ab")
if(!C.a.V(l,o)){o.a=l.length
C.a.h(l,o)}o=e.gb9(e)
n=d.b
C.b.q(n.a,n.d,o.a,o.b,o.c)
o=e.gcp(e)
n=d.c
C.b.q(n.a,n.d,o.a,o.b,o.c)
o=e.gbL()
n=d.d
C.b.q(n.a,n.d,o.a,o.b,o.c)
o=e.gbJ(e)
n=d.e
C.b.q(n.a,n.d,o.a,o.b,o.c)
o=h.bd(e.gb9(e))
n=d.f
C.b.q(n.a,n.d,o.a,o.b,o.c)
o=e.gbc()
n=o.geg(o)
if(!n){o=d.x
C.b.L(o.a,o.d,1)}else{n=d.r
c=o.d
b=n.a
n=n.d
if(!c)C.b.L(b,n,0)
else C.b.L(b,n,o.a)
o=d.x
C.b.L(o.a,o.d,0)}o=e.gaB(e)
n=d.y
C.b.q(n.a,n.d,o.a,o.b,o.c)
o=e.gki()
n=d.z
C.b.I(n.a,n.d,o)
o=e.gkj()
n=d.Q
C.b.I(n.a,n.d,o)
o=e.gce()
n=d.ch
C.b.I(n.a,n.d,o)
o=e.gcf()
n=d.cx
C.b.I(n.a,n.d,o)
o=e.gcg()
n=d.cy
C.b.I(n.a,n.d,o);++g}}}switch(s.f){case C.c:break
case C.f:break
case C.d:this.X(l,this.Q.d)
u=this.a
q=this.Q.d
u.ak(u.dY,u.bx,q)
break
case C.e:this.X(l,this.Q.e)
u=this.a
q=this.Q.e
u.af(u.dZ,u.bx,q)
break}if(s.fr){u=this.a
q=a2.Q
if(q==null){q=a2.db
q=q.ga0(q).cB(0)
a2.Q=q}u=u.id
u.toString
u.aj(q.ad(0,!0))}if(s.dy){this.X(l,this.ch)
u=this.a
q=this.ch
u.af(u.e_,u.e0,q)
switch(s.r){case C.c:break
case C.f:u=this.a
q=this.cx.f
u=u.by
u.toString
p=q.a
o=q.b
q=q.c
C.b.q(u.a,u.d,p,o,q)
break
case C.d:this.X(l,this.cx.d)
u=this.a
q=this.cx.d
u.ak(u.e1,u.bz,q)
q=this.a
u=this.cx.f
q=q.by
q.toString
p=u.a
o=u.b
u=u.c
C.b.q(q.a,q.d,p,o,u)
break
case C.e:this.X(l,this.cx.e)
u=this.a
q=this.cx.e
u.af(u.e2,u.bz,q)
q=this.a
u=this.cx.f
q=q.by
q.toString
p=u.a
o=u.b
u=u.c
C.b.q(q.a,q.d,p,o,u)
break}switch(s.x){case C.c:break
case C.f:u=this.a
q=this.cy.f
u=u.bB
u.toString
p=q.a
o=q.b
q=q.c
C.b.q(u.a,u.d,p,o,q)
q=this.a
o=this.cy.ch
q=q.bA
C.b.I(q.a,q.d,o)
break
case C.d:this.X(l,this.cy.d)
u=this.a
q=this.cy.d
u.ak(u.e3,u.bC,q)
q=this.a
u=this.cy.f
q=q.bB
q.toString
p=u.a
o=u.b
u=u.c
C.b.q(q.a,q.d,p,o,u)
u=this.a
o=this.cy.ch
u=u.bA
C.b.I(u.a,u.d,o)
break
case C.e:this.X(l,this.cy.e)
u=this.a
q=this.cy.e
u.af(u.e4,u.bC,q)
q=this.a
u=this.cy.f
q=q.bB
q.toString
p=u.a
o=u.b
u=u.c
C.b.q(q.a,q.d,p,o,u)
u=this.a
o=this.cy.ch
u=u.bA
C.b.I(u.a,u.d,o)
break}}u=s.y
q=u!==C.c
if(q){switch(u){case C.c:break
case C.f:u=this.a
p=this.db.f
u=u.bD
C.b.I(u.a,u.d,p)
break
case C.d:this.X(l,this.db.d)
u=this.a
p=this.db.d
u.ak(u.e5,u.bE,p)
p=this.a
u=this.db.f
p=p.bD
C.b.I(p.a,p.d,u)
break
case C.e:this.X(l,this.db.e)
u=this.a
p=this.db.e
u.af(u.e6,u.bE,p)
p=this.a
u=this.db.f
p=p.bD
C.b.I(p.a,p.d,u)
break}u=a2.a
C.b.cq(u,3042)
C.b.j3(u,770,771)}for(u=a2.a,j=0;j<l.length;++j){p=l[j]
if(!p.c&&p.d){p.c=!0
C.b.bn(u,33984+p.a)
C.b.a8(u,3553,p.b)}}p=a3.e
p.a2(a2)
p.ac(a2)
p.be(a2)
if(q)C.b.jm(u,3042)
for(j=0;j<l.length;++j){q=l[j]
if(q.c){q.c=!1
C.b.bn(u,33984+q.a)
C.b.a8(u,3553,null)}}q=this.a
q.toString
C.b.cN(u,null)
q.x.dO()},
i:function(a){var u=this.a
if(u!=null)return u.b
else return this.da().al},
sfn:function(a){this.e=H.m(a,"$ia0",[V.am],"$aa0")}}
O.hh.prototype={
i3:function(a){var u=this.f
if(!(Math.abs(u-a)<$.O().a)){this.f=a
u=new D.J(this.b,u,a,this,[P.z])
u.b=!0
this.a.U(u)}},
aq:function(){this.cV()
this.i3(1)}}
O.cr.prototype={
U:function(a){this.a.U(H.j(a,"$iw"))},
b_:function(){return this.U(null)},
aq:function(){},
i6:function(a){var u,t
u=this.d
if(u!=a){if(u!=null)u.gp().W(0,this.gaM())
t=this.d
this.d=a
if(a!=null)a.gp().h(0,this.gaM())
u=new D.J(this.b+".texture2D",t,this.d,this,[T.e3])
u.b=!0
this.a.U(u)}},
i7:function(a){},
scL:function(a){var u=this.c
if(u!==C.d){if(u===C.c)this.aq()
this.c=C.d
this.i7(null)
u=this.a
u.a=null
u.U(null)}this.i6(a)}}
O.hi.prototype={}
O.aU.prototype={
dv:function(a){var u,t
if(!J.a7(this.f,a)){u=this.f
this.f=a
t=new D.J(this.b+".color",u,a,this,[V.a3])
t.b=!0
this.a.U(t)}},
aq:function(){this.cV()
this.dv(new V.a3(1,1,1))},
saB:function(a,b){var u
if(this.c===C.c){this.c=C.f
this.aq()
u=this.a
u.a=null
u.U(null)}this.dv(b)}}
O.hk.prototype={
i4:function(a){var u=this.ch
if(!(Math.abs(u-a)<$.O().a)){this.ch=a
u=new D.J(this.b+".refraction",u,a,this,[P.z])
u.b=!0
this.a.U(u)}},
aq:function(){this.cW()
this.i4(1)}}
O.hl.prototype={
i5:function(a){var u=this.ch
if(!(Math.abs(u-a)<$.O().a)){this.ch=a
u=new D.J(this.b+".shininess",u,a,this,[P.z])
u.b=!0
this.a.U(u)}},
aq:function(){this.cW()
this.i5(100)}}
O.dX.prototype={
gp:function(){var u=this.e
if(u==null){u=D.K()
this.e=u}return u},
U:function(a){var u
H.j(a,"$iw")
u=this.e
if(u!=null)u.C(a)},
b_:function(){return this.U(null)},
eo:function(a,b){var u,t,s,r,q,p
if(this.a==null){u=H.j(a.fr.j(0,"Skybox"),"$idY")
if(u==null){t=a.a
u=new A.dY(t,"Skybox")
u.cX(t,"Skybox")
u.ee(0,$.mz,$.my)
u.z=u.x.j(0,"posAttr")
u.Q=H.h(u.y.j(0,"fov"),"$iY")
u.ch=H.h(u.y.j(0,"ratio"),"$iY")
u.cx=H.h(u.y.j(0,"boxClr"),"$iI")
u.cy=H.h(u.y.j(0,"boxTxt"),"$iad")
u.db=H.h(u.y.j(0,"viewMat"),"$iap")
a.dD(u)}this.a=u}if(b.e==null){t=b.d.dJ(new Z.el(a.a),$.aK())
t.aC($.aK()).e=this.a.z.c
b.e=t}t=this.c
if(t!=null){t.a=1
if(!t.c&&t.d>=6){t.c=!0
s=a.a
C.b.bn(s,33985)
C.b.a8(s,34067,t.b)}}t=a.d
s=a.c
r=this.a
r.a2(a)
q=this.b
p=r.Q
C.b.I(p.a,p.d,q)
q=r.ch
C.b.I(q.a,q.d,t/s)
s=this.c
r.cy.eQ(s)
s=this.d
t=r.cx
C.b.q(t.a,t.d,s.a,s.b,s.c)
s=a.db
s=s.ga0(s).cB(0)
r=r.db
r.toString
r.aj(s.ad(0,!0))
t=b.e
if(t instanceof Z.ce){t.a2(a)
t.ac(a)
t.be(a)}else b.e=null
t=this.a
t.toString
s=a.a
C.b.cN(s,null)
t.x.dO()
t=this.c
if(t!=null)if(t.c){t.c=!1
C.b.bn(s,33984+t.a)
C.b.a8(s,34067,null)}}}
O.bC.prototype={}
T.cH.prototype={}
T.e3.prototype={}
T.ii.prototype={
gp:function(){var u=this.y
if(u==null){u=D.K()
this.y=u}return u}}
T.e4.prototype={
gp:function(){var u=this.e
if(u==null){u=D.K()
this.e=u}return u}}
T.ij.prototype={
jC:function(a,b,c,d,e){var u,t,s,r
u=this.a
t=u.createTexture()
C.b.a8(u,3553,t)
C.b.au(u,3553,10242,33071)
C.b.au(u,3553,10243,33071)
C.b.au(u,3553,10241,9729)
C.b.au(u,3553,10240,9729)
C.b.a8(u,3553,null);++this.d
s=W.kM(null,a,null)
r=new T.ii()
r.a=0
r.b=t
r.c=!1
r.d=!1
r.e=0
r.f=0
r.r=0
r.x=0
u=W.o
W.a6(s,"load",H.n(new T.il(this,r,s,!1,t,!1,!1),{func:1,ret:-1,args:[u]}),!1,u)
return r},
jB:function(a){return this.jC(a,!1,!1,!1,!1)},
aP:function(a,b,c,d,e,f){var u,t
u=W.kM(null,c,null);++this.d
t=W.o
W.a6(u,"load",H.n(new T.ik(this,u,!1,b,!1,d,a),{func:1,ret:-1,args:[t]}),!1,t)},
du:function(a,b,c){var u,t,s,r
b=V.kv(b,2)
u=V.kv(a.width,2)
t=V.kv(a.height,2)
u=Math.min(u,b)
t=Math.min(t,b)
if(a.width===u&&a.height===t)return a
else{s=W.k0(null,null)
s.width=u
s.height=t
r=H.j(C.p.eE(s,"2d"),"$ibO")
r.imageSmoothingEnabled=!1;(r&&C.y).jo(r,a,0,0,s.width,s.height)
return P.n2(C.y.fJ(r,0,0,s.width,s.height))}}}
T.il.prototype={
$1:function(a){var u,t,s,r
u=this.b
t=this.c
u.e=t.width
u.f=t.height
s=this.a
r=s.du(t,s.b,this.d)
u.r=t.width
u.x=t.height
t=s.a
C.b.a8(t,3553,this.e)
C.b.en(t,37440,this.f?1:0)
C.b.er(t,3553,0,6408,6408,5121,r)
if(this.r)C.b.ez(t,3553)
C.b.a8(t,3553,null)
if(!u.d){u.d=!0
u=u.y
if(u!=null)u.dR()}++s.e},
$S:12}
T.ik.prototype={
$1:function(a){var u,t,s
u=this.a
t=u.du(this.b,u.c,this.c)
s=u.a
C.b.a8(s,34067,this.d)
C.b.en(s,37440,this.e?1:0)
C.b.er(s,this.f,0,6408,6408,5121,t)
C.b.a8(s,34067,null)
s=this.r
if(++s.d>=6){s=s.e
if(s!=null)s.dR()}++u.e},
$S:12}
V.b8.prototype={
aE:function(a,b){return!0},
i:function(a){return"all"},
$ias:1}
V.as.prototype={}
V.dH.prototype={
aE:function(a,b){var u,t,s
for(u=this.a,t=u.length,s=0;s<u.length;u.length===t||(0,H.A)(u),++s)if(u[s].aE(0,b))return!0
return!1},
i:function(a){var u,t,s,r,q
for(u=this.a,t=u.length,s="",r=0;r<u.length;u.length===t||(0,H.A)(u),++r){q=u[r]
if(s.length!==0)s+=", "
s+=q.i(0)}return s},
sa6:function(a){this.a=H.m(a,"$ib",[V.as],"$ab")},
$ias:1}
V.an.prototype={
aE:function(a,b){return!this.eX(0,b)},
i:function(a){return"!["+this.cU(0)+"]"}}
V.hL.prototype={
aE:function(a,b){return this.a<=b&&this.b>=b},
i:function(a){var u,t
u=H.ka(this.a)
t=H.ka(this.b)
return u+".."+t},
$ias:1}
V.hV.prototype={
f1:function(a){var u,t
if(a.a.length<=0)throw H.i(P.r("May not create a SetMatcher with zero characters."))
u=new H.aS([P.C,P.N])
for(t=new H.cq(a,a.gm(a),0,[H.aj(a,"v",0)]);t.u();)u.Y(0,t.d,!0)
this.si2(u)},
aE:function(a,b){return this.a.dM(0,b)},
i:function(a){var u=this.a
return P.kc(new H.dD(u,[H.y(u,0)]),0,null)},
si2:function(a){this.a=H.m(a,"$iP",[P.C,P.N],"$aP")},
$ias:1}
V.cC.prototype={
l:function(a,b){var u,t,s,r
for(u=this.c,t=u.length,s=0;s<t;++s){r=u[s]
if(r.b.b===b)return r}r=new V.cJ(this.a.k(0,b))
r.sa6(H.c([],[V.as]))
r.c=!1
C.a.h(this.c,r)
return r},
jq:function(a){var u,t,s,r
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.A)(u),++s){r=u[s]
if(r.aE(0,a))return r}return},
i:function(a){return this.b},
sis:function(a){this.c=H.m(a,"$ib",[V.cJ],"$ab")}}
V.e9.prototype={
i:function(a){var u,t
u=H.kw(this.b,"\n","\\n")
t=H.kw(u,"\t","\\t")
return this.a+":"+this.c+':"'+t+'"'}}
V.cI.prototype={
aG:function(a,b,c){var u,t,s
H.m(c,"$ib",[P.f],"$ab")
for(u=c.length,t=0;t<c.length;c.length===u||(0,H.A)(c),++t){s=c[t]
this.c.Y(0,s,b)}},
i:function(a){return this.b},
shX:function(a){var u=P.f
this.c=H.m(a,"$iP",[u,u],"$aP")}}
V.ip.prototype={
k:function(a,b){var u=this.a.j(0,b)
if(u==null){u=new V.cC(this,b)
u.sis(H.c([],[V.cJ]))
u.d=null
this.a.Y(0,b,u)}return u},
N:function(a){var u,t
u=this.b.j(0,a)
if(u==null){u=new V.cI(this,a)
t=P.f
u.shX(new H.aS([t,t]))
this.b.Y(0,a,u)}return u},
ev:function(a){var u,t,s,r,q,p,o,n,m,l,k,j
u=H.c([],[V.e9])
t=this.c
s=[P.C]
r=H.c([],s)
for(q=a.length,p=null,o=0;!0;){if(o>=q){if(p!=null)C.a.h(u,p)
return u}n=C.i.aN(a,o)
m=t.jq(n)
if(m==null){if(p==null){C.a.h(r,n)
l=P.kc(r,0,null)
throw H.i(P.r("Untokenizable string [state: "+t.b+", index "+o+']: "'+l+'"'))}C.a.h(u,p)
o=p.c+1
r=H.c([],s)
t=this.c
p=null}else{if(!m.c)C.a.h(r,n)
t=m.b
if(t.d!=null){l=P.kc(r,0,null)
k=t.d
j=k.c.j(0,l)
p=new V.e9(j==null?k.b:j,l,o)}++o}}},
sig:function(a){this.a=H.m(a,"$iP",[P.f,V.cC],"$aP")},
sik:function(a){this.b=H.m(a,"$iP",[P.f,V.cI],"$aP")}}
V.cJ.prototype={
i:function(a){return this.b.b+": "+this.cU(0)}}
X.bM.prototype={$iaX:1}
X.fV.prototype={
gp:function(){var u=this.x
if(u==null){u=D.K()
this.x=u}return u},
ap:function(a){var u=this.x
if(u!=null)u.C(a)},
a2:function(a){var u,t,s,r,q,p,o,n
u=a.a
C.b.j2(u,36160,null)
C.b.cq(u,2884)
C.b.cq(u,2929)
C.b.jl(u,513)
t=u.drawingBufferWidth
s=u.drawingBufferHeight
r=this.r
q=r.a
if(typeof t!=="number")return H.G(t)
p=C.j.am(q*t)
q=r.b
if(typeof s!=="number")return H.G(s)
o=C.j.am(q*s)
q=C.j.am(r.c*t)
a.c=q
r=C.j.am(r.d*s)
a.d=r
C.b.kd(u,p,o,q,r)
C.b.j7(u,this.c)
if(this.b){r=this.a
C.b.j6(u,r.a,r.b,r.c,r.d)
n=16640}else n=256
C.b.j5(u,n)}}
X.h0.prototype={
gp:function(){var u=this.b
if(u==null){u=D.K()
this.b=u}return u},
a2:function(a){var u
a.cy.bI(V.bV())
u=V.bV()
a.db.bI(u)},
be:function(a){a.cy.aF()
a.db.aF()},
$iaX:1,
$ibM:1}
X.dQ.prototype={
gp:function(){var u=this.f
if(u==null){u=D.K()
this.f=u}return u},
ap:function(a){var u
H.j(a,"$iw")
u=this.f
if(u!=null)u.C(a)},
h8:function(){return this.ap(null)},
a2:function(a){var u,t,s,r,q,p,o,n,m,l
u=a.c
t=a.d
s=this.c
r=this.d
q=this.e
p=q-r
o=1/Math.tan(s*0.5)
n=V.aV(-o/(u/t),0,0,0,0,o,0,0,0,0,q/p,-q*r/p,0,0,1,0)
a.cy.bI(n)
u=$.kX
if(u==null){u=V.kZ()
t=V.lg()
s=$.ld
if(s==null){s=new V.Q(0,0,-1)
$.ld=s}s=V.kS(u,t,s)
$.kX=s
m=s}else m=u
u=this.b
if(u!=null){l=u.aV(0,a,this)
if(l!=null)m=l.A(0,m)}a.db.bI(m)},
be:function(a){a.cy.aF()
a.db.aF()},
$iaX:1,
$ibM:1}
X.cF.prototype={}
V.bq.prototype={
bh:function(a){this.b=new P.fZ(C.M)
this.c=null
this.sbZ(H.c([],[[P.b,W.az]]))},
K:function(a,b){var u,t,s,r,q,p,o,n,m
u=this.d
if(u.length===0)C.a.h(u,H.c([],[W.az]))
t=a.split("\n")
for(u=t.length,s=[W.az],r=!0,q=0;q<u;++q){p=t[q]
if(r)r=!1
else C.a.h(this.d,H.c([],s))
o=document.createElement("div")
o.className="codePart"
H.H(p)
n=this.b.ft(p,0,p.length)
m=n==null?p:n
C.k.eN(o,H.kw(m," ","&nbsp;"))
m=o.style
m.color=b
C.a.h(C.a.gbF(this.d),o)}},
em:function(a,b){var u,t,s,r
H.m(b,"$ib",[P.f],"$ab")
this.sbZ(H.c([],[[P.b,W.az]]))
u=C.a.l(b,"\n")
t=this.c
if(t==null){t=this.bp()
this.c=t}for(t=t.ev(u),s=t.length,r=0;r<t.length;t.length===s||(0,H.A)(t),++r)this.bH(t[r])},
sbZ:function(a){this.d=H.m(a,"$ib",[[P.b,W.az]],"$ab")}}
V.jV.prototype={
$1:function(a){H.j(a,"$ib2")
P.c7(C.j.eu(this.a.gju(),2)+" fps")},
$S:40}
V.fA.prototype={
bH:function(a){switch(a.a){case"Class":this.K(a.b,"#551")
break
case"Comment":this.K(a.b,"#777")
break
case"Id":this.K(a.b,"#111")
break
case"Num":this.K(a.b,"#191")
break
case"Reserved":this.K(a.b,"#119")
break
case"String":this.K(a.b,"#171")
break
case"Symbol":this.K(a.b,"#616")
break
case"Type":this.K(a.b,"#B11")
break
case"Whitespace":this.K(a.b,"#111")
break}},
bp:function(){var u,t,s,r
u=V.iq()
u.c=u.k(0,"Start")
t=u.k(0,"Start").l(0,"Id")
s=V.u(new H.q("_"))
C.a.h(t.a,s)
s=V.X("a","z")
C.a.h(t.a,s)
s=V.X("A","Z")
C.a.h(t.a,s)
s=u.k(0,"Id").l(0,"Id")
t=V.u(new H.q("_"))
C.a.h(s.a,t)
t=V.X("0","9")
C.a.h(s.a,t)
t=V.X("a","z")
C.a.h(s.a,t)
t=V.X("A","Z")
C.a.h(s.a,t)
t=u.k(0,"Start").l(0,"Int")
s=V.X("0","9")
C.a.h(t.a,s)
s=u.k(0,"Int").l(0,"Int")
t=V.X("0","9")
C.a.h(s.a,t)
t=u.k(0,"Int").l(0,"FloatDot")
s=V.u(new H.q("."))
C.a.h(t.a,s)
s=u.k(0,"FloatDot").l(0,"Float")
t=V.X("0","9")
C.a.h(s.a,t)
t=u.k(0,"Float").l(0,"Float")
s=V.X("0","9")
C.a.h(t.a,s)
s=u.k(0,"Start").l(0,"Sym")
t=V.u(new H.q("<>{}()\\-+*%!&|=.,?:;"))
C.a.h(s.a,t)
t=u.k(0,"Sym").l(0,"Sym")
s=V.u(new H.q("<>{}()\\-+*%!&|=.,?:;"))
C.a.h(t.a,s)
s=u.k(0,"Start").l(0,"OpenDoubleStr")
t=V.u(new H.q('"'))
C.a.h(s.a,t)
t=u.k(0,"OpenDoubleStr").l(0,"CloseDoubleStr")
s=V.u(new H.q('"'))
C.a.h(t.a,s)
s=u.k(0,"OpenDoubleStr").l(0,"EscDoubleStr")
t=V.u(new H.q("\\"))
C.a.h(s.a,t)
t=u.k(0,"EscDoubleStr").l(0,"OpenDoubleStr")
s=V.u(new H.q('"'))
C.a.h(t.a,s)
C.a.h(u.k(0,"OpenDoubleStr").l(0,"OpenDoubleStr").a,new V.b8())
s=u.k(0,"Start").l(0,"OpenSingleStr")
t=V.u(new H.q("'"))
C.a.h(s.a,t)
t=u.k(0,"OpenSingleStr").l(0,"CloseSingleStr")
s=V.u(new H.q("'"))
C.a.h(t.a,s)
s=u.k(0,"OpenSingleStr").l(0,"EscSingleStr")
t=V.u(new H.q("\\"))
C.a.h(s.a,t)
t=u.k(0,"EscSingleStr").l(0,"OpenSingleStr")
s=V.u(new H.q("'"))
C.a.h(t.a,s)
C.a.h(u.k(0,"OpenSingleStr").l(0,"OpenSingleStr").a,new V.b8())
s=u.k(0,"Start").l(0,"Slash")
t=V.u(new H.q("/"))
C.a.h(s.a,t)
t=u.k(0,"Slash").l(0,"Comment")
s=V.u(new H.q("/"))
C.a.h(t.a,s)
s=u.k(0,"Comment").l(0,"EndComment")
t=V.u(new H.q("\n"))
C.a.h(s.a,t)
t=u.k(0,"Comment").l(0,"Comment")
s=new V.an()
r=[V.as]
s.sa6(H.c([],r))
C.a.h(t.a,s)
t=V.u(new H.q("\n"))
C.a.h(s.a,t)
t=u.k(0,"Slash").l(0,"MLComment")
s=V.u(new H.q("*"))
C.a.h(t.a,s)
s=u.k(0,"MLComment").l(0,"MLCStar")
t=V.u(new H.q("*"))
C.a.h(s.a,t)
t=u.k(0,"MLCStar").l(0,"MLComment")
s=new V.an()
s.sa6(H.c([],r))
C.a.h(t.a,s)
t=V.u(new H.q("*"))
C.a.h(s.a,t)
t=u.k(0,"MLCStar").l(0,"EndComment")
s=V.u(new H.q("/"))
C.a.h(t.a,s)
s=u.k(0,"Start").l(0,"Whitespace")
t=V.u(new H.q(" \n\t"))
C.a.h(s.a,t)
t=u.k(0,"Whitespace").l(0,"Whitespace")
s=V.u(new H.q(" \n\t"))
C.a.h(t.a,s)
s=u.k(0,"Int")
s.d=s.a.N("Num")
s=u.k(0,"Float")
s.d=s.a.N("Num")
s=u.k(0,"Sym")
s.d=s.a.N("Symbol")
s=u.k(0,"CloseDoubleStr")
s.d=s.a.N("String")
s=u.k(0,"CloseSingleStr")
s.d=s.a.N("String")
s=u.k(0,"EndComment")
s.d=s.a.N("Comment")
s=u.k(0,"Whitespace")
s.d=s.a.N("Whitespace")
s=u.k(0,"Id")
t=s.a.N("Id")
s.d=t
s=[P.f]
t.aG(0,"Class",H.c(["Constant","Depth","Entity","EntityPass","Math","Matrix4","Movers","Rotater","Scenes","Shapes","Techniques","ThreeDart"],s))
t.aG(0,"Type",H.c(["bool","double","dynamic","false","int","List","Map","null","num","Object","String","this","true","var","void"],s))
t.aG(0,"Reserved",H.c(["abstract","as","assert","async","await","break","case","catch","class","continue","const","default","deferred","do","else","enum","export","extends","external","factory","final","finally","for","get","if","implements","import","in","is","library","new","operator","part","rethrow","return","set","static","super","switch","sync","throw","try","typedef","with","while","yield"],s))
return u}}
V.fW.prototype={
bH:function(a){switch(a.a){case"Builtin":this.K(a.b,"#411")
break
case"Comment":this.K(a.b,"#777")
break
case"Id":this.K(a.b,"#111")
break
case"Num":this.K(a.b,"#191")
break
case"Preprocess":this.K(a.b,"#737")
break
case"Reserved":this.K(a.b,"#119")
break
case"Symbol":this.K(a.b,"#611")
break
case"Type":this.K(a.b,"#171")
break
case"Whitespace":this.K(a.b,"#111")
break}},
bp:function(){var u,t,s,r
u=V.iq()
u.c=u.k(0,"Start")
t=u.k(0,"Start").l(0,"Id")
s=V.u(new H.q("_"))
C.a.h(t.a,s)
s=V.X("a","z")
C.a.h(t.a,s)
s=V.X("A","Z")
C.a.h(t.a,s)
s=u.k(0,"Id").l(0,"Id")
t=V.u(new H.q("_"))
C.a.h(s.a,t)
t=V.X("0","9")
C.a.h(s.a,t)
t=V.X("a","z")
C.a.h(s.a,t)
t=V.X("A","Z")
C.a.h(s.a,t)
t=u.k(0,"Start").l(0,"Int")
s=V.X("0","9")
C.a.h(t.a,s)
s=u.k(0,"Int").l(0,"Int")
t=V.X("0","9")
C.a.h(s.a,t)
t=u.k(0,"Int").l(0,"FloatDot")
s=V.u(new H.q("."))
C.a.h(t.a,s)
s=u.k(0,"FloatDot").l(0,"Float")
t=V.X("0","9")
C.a.h(s.a,t)
t=u.k(0,"Float").l(0,"Float")
s=V.X("0","9")
C.a.h(t.a,s)
s=u.k(0,"Start").l(0,"Sym")
t=V.u(new H.q("<>{}()[]\\-+*%!&|=.,?:;"))
C.a.h(s.a,t)
t=u.k(0,"Sym").l(0,"Sym")
s=V.u(new H.q("<>{}()[]\\-+*%!&|=.,?:;"))
C.a.h(t.a,s)
s=u.k(0,"Start").l(0,"Slash")
t=V.u(new H.q("/"))
C.a.h(s.a,t)
t=u.k(0,"Slash").l(0,"Comment")
s=V.u(new H.q("/"))
C.a.h(t.a,s)
C.a.h(u.k(0,"Slash").l(0,"Sym").a,new V.b8())
s=u.k(0,"Comment").l(0,"EndComment")
t=V.u(new H.q("\n"))
C.a.h(s.a,t)
t=u.k(0,"Comment").l(0,"Comment")
s=new V.an()
r=[V.as]
s.sa6(H.c([],r))
C.a.h(t.a,s)
t=V.u(new H.q("\n"))
C.a.h(s.a,t)
t=u.k(0,"Start").l(0,"Preprocess")
s=V.u(new H.q("#"))
C.a.h(t.a,s)
s=u.k(0,"Preprocess").l(0,"Preprocess")
t=new V.an()
t.sa6(H.c([],r))
C.a.h(s.a,t)
s=V.u(new H.q("\n"))
C.a.h(t.a,s)
s=u.k(0,"Preprocess").l(0,"EndPreprocess")
t=V.u(new H.q("\n"))
C.a.h(s.a,t)
t=u.k(0,"Start").l(0,"Whitespace")
s=V.u(new H.q(" \n\t"))
C.a.h(t.a,s)
s=u.k(0,"Whitespace").l(0,"Whitespace")
t=V.u(new H.q(" \n\t"))
C.a.h(s.a,t)
t=u.k(0,"Int")
t.d=t.a.N("Num")
t=u.k(0,"Float")
t.d=t.a.N("Num")
t=u.k(0,"Sym")
t.d=t.a.N("Symbol")
t=u.k(0,"EndComment")
t.d=t.a.N("Comment")
t=u.k(0,"EndPreprocess")
t.d=t.a.N("Preprocess")
t=u.k(0,"Whitespace")
t.d=t.a.N("Whitespace")
t=u.k(0,"Id")
s=t.a.N("Id")
t.d=s
t=[P.f]
s.aG(0,"Type",H.c(["float","double","int","void","bool","true","false","mat2","mat3","mat4","dmat2","dmat3","dmat4","mat2x2","mat2x3","mat2x4","dmat2x2","dmat2x3","dmat2x4","mat3x2","mat3x3","mat3x4","dmat3x2","dmat3x3","dmat3x4","mat4x2","mat4x3","mat4x4","dmat4x2","dmat4x3","dmat4x4","vec2","vec3","vec4","ivec2","ivec3","ivec4","bvec2","bvec3","bvec4","dvec2","dvec3","dvec4","uint","uvec2","uvec3","uvec4","sampler1D","sampler2D","sampler3D","samplerCube","sampler1DShadow","sampler2DShadow","samplerCubeShadow","sampler1DArray","sampler2DArray","sampler1DArrayShadow","sampler2DArrayShadow","isampler1D","isampler2D","isampler3D","isamplerCube","isampler1DArray","isampler2DArray","usampler1D","usampler2D","usampler3D","usamplerCube","usampler1DArray","usampler2DArray","sampler2DRect","sampler2DRectShadow","isampler2DRect","usampler2DRect","samplerBuffer","isamplerBuffer","usamplerBuffer","sampler2DMS","isampler2DMS","usampler2DMS","sampler2DMSArray","isampler2DMSArray","usampler2DMSArray","samplerCubeArray","samplerCubeArrayShadow","isamplerCubeArray","usamplerCubeArray"],t))
s.aG(0,"Reserved",H.c(["attribute","break","case","centroid","const","continue","default","discard","do","else","flat","for","highp","if","in","inout","invariant","layout","lowp","mediump","noperspective","out","patch","precision","return","sample","smooth","struct","subroutine","switch","uniform","varying","while"],t))
s.aG(0,"Builtin",H.c(["gl_FragColor","gl_Position"],t))
return u}}
V.fX.prototype={
bH:function(a){switch(a.a){case"Attr":this.K(a.b,"#911")
this.K("=","#111")
break
case"Id":this.K(a.b,"#111")
break
case"Other":this.K(a.b,"#111")
break
case"Reserved":this.K(a.b,"#119")
break
case"String":this.K(a.b,"#171")
break
case"Symbol":this.K(a.b,"#616")
break}},
bp:function(){var u,t,s
u=V.iq()
u.c=u.k(0,"Start")
t=u.k(0,"Start").l(0,"Id")
s=V.u(new H.q("_"))
C.a.h(t.a,s)
s=V.X("a","z")
C.a.h(t.a,s)
s=V.X("A","Z")
C.a.h(t.a,s)
s=u.k(0,"Id").l(0,"Id")
t=V.u(new H.q("_"))
C.a.h(s.a,t)
t=V.X("0","9")
C.a.h(s.a,t)
t=V.X("a","z")
C.a.h(s.a,t)
t=V.X("A","Z")
C.a.h(s.a,t)
t=u.k(0,"Id").l(0,"Attr")
s=V.u(new H.q("="))
C.a.h(t.a,s)
t.c=!0
t=u.k(0,"Start").l(0,"Sym")
s=V.u(new H.q("</\\-!>="))
C.a.h(t.a,s)
s=u.k(0,"Sym").l(0,"Sym")
t=V.u(new H.q("</\\-!>="))
C.a.h(s.a,t)
t=u.k(0,"Start").l(0,"OpenStr")
s=V.u(new H.q('"'))
C.a.h(t.a,s)
s=u.k(0,"OpenStr").l(0,"CloseStr")
t=V.u(new H.q('"'))
C.a.h(s.a,t)
t=u.k(0,"OpenStr").l(0,"EscStr")
s=V.u(new H.q("\\"))
C.a.h(t.a,s)
s=u.k(0,"EscStr").l(0,"OpenStr")
t=V.u(new H.q('"'))
C.a.h(s.a,t)
C.a.h(u.k(0,"OpenStr").l(0,"OpenStr").a,new V.b8())
C.a.h(u.k(0,"Start").l(0,"Other").a,new V.b8())
t=u.k(0,"Other").l(0,"Other")
s=new V.an()
s.sa6(H.c([],[V.as]))
C.a.h(t.a,s)
t=V.u(new H.q('</\\-!>=_"'))
C.a.h(s.a,t)
t=V.X("a","z")
C.a.h(s.a,t)
t=V.X("A","Z")
C.a.h(s.a,t)
t=u.k(0,"Sym")
t.d=t.a.N("Symbol")
t=u.k(0,"CloseStr")
t.d=t.a.N("String")
t=u.k(0,"Id")
s=t.a.N("Id")
t.d=s
s.aG(0,"Reserved",H.c(["DOCTYPE","html","head","meta","link","title","body","script"],[P.f]))
s=u.k(0,"Attr")
s.d=s.a.N("Attr")
s=u.k(0,"Other")
s.d=s.a.N("Other")
return u}}
V.hG.prototype={
em:function(a,b){H.m(b,"$ib",[P.f],"$ab")
this.sbZ(H.c([],[[P.b,W.az]]))
this.K(C.a.l(b,"\n"),"#111")},
bH:function(a){},
bp:function(){return}}
V.hZ.prototype={
f2:function(a,b){var u,t,s,r,q,p,o
u=document
t=u.body
s=u.createElement("div")
s.className="scrollTop";(t&&C.n).B(t,s)
r=u.createElement("div")
r.className="scrollPage"
C.n.B(t,r)
q=u.createElement("div")
q.className="pageCenter"
C.k.B(r,q)
if(a.length!==0){u.title=a
p=u.createElement("div")
p.className="pageTitle"
p.textContent=a
C.k.B(q,p)}o=u.createElement("div")
this.a=o
C.k.B(q,o)
this.b=null
o=W.o
W.a6(u,"scroll",H.n(new V.i0(s),{func:1,ret:-1,args:[o]}),!1,o)},
dC:function(a){var u,t,s,r,q,p,o,n,m,l,k
H.m(a,"$ib",[P.f],"$ab")
this.i9()
u=document
t=u.createElement("div")
t.className="textPar"
for(s=this.b.ev(C.a.jy(a)),r=s.length,q=0;q<s.length;s.length===r||(0,H.A)(s),++q){p=s[q]
switch(p.a){case"Bold":o=u.createElement("div")
o.className="boldPar"
o.textContent=p.b
C.k.B(t,o)
break
case"Italic":o=u.createElement("div")
o.className="italicPar"
o.textContent=p.b
C.k.B(t,o)
break
case"Code":o=u.createElement("div")
o.className="codePar"
o.textContent=p.b
C.k.B(t,o)
break
case"Link":n=p.b
if(H.nn(n,"|",0)){m=n.split("|")
l=u.createElement("a")
l.className="linkPar"
if(1>=m.length)return H.k(m,1)
l.href=H.H(m[1])
l.textContent=H.H(m[0])
C.k.B(t,l)}else{k=P.ll(C.C,n,C.x,!1)
l=u.createElement("a")
l.className="linkPar"
l.href="#"+k
l.textContent=n
C.k.B(t,l)}break
case"Other":o=u.createElement("div")
o.className="normalPar"
o.textContent=p.b
C.k.B(t,o)
break}}C.k.B(this.a,t)},
eD:function(a){var u,t,s,r
u=new V.fA("dart")
u.bh("dart")
t=new V.fW("glsl")
t.bh("glsl")
s=new V.fX("html")
s.bh("html")
r=C.a.jr(H.c([u,t,s],[V.bq]),new V.i1(a))
if(r!=null)return r
u=new V.hG("plain")
u.bh("plain")
return u},
dB:function(a4,a5,a6,a7){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3
H.m(a7,"$ib",[P.f],"$ab")
u=H.c([],[P.C])
for(t=!1,s=0;s<a7.length;++s){r=a7[s]
if(J.kr(r).bP(r,"+")){C.a.Y(a7,s,C.i.bf(r,1))
C.a.h(u,1)
t=!0}else if(C.i.bP(r,"-")){C.a.Y(a7,s,C.i.bf(r,1))
C.a.h(u,-1)
t=!0}else C.a.h(u,0)}q=this.eD(a5)
q.em(0,a7)
p=document
o=p.createElement("div")
o.className="codeTableScroll"
n=p.createElement("table")
n.className="codeTable"
C.k.B(o,n)
C.k.B(this.a,o)
m=P.ll(C.C,a4,C.x,!1)
l=p.createElement("tr")
l.className="headerRow"
k=p.createElement("td")
k.className="headerCell"
k.colSpan=t?3:2
j=p.createElement("div")
j.className="tableHeader"
j.id=m
i=W.kC(null)
i.href="#"+m
i.textContent=a4
C.k.B(j,i)
C.v.B(k,j)
C.m.B(l,k)
C.o.B(n,l)
if(t)for(h=a6,g=h,s=0;f=q.d,s<f.length;++s){r=f[s]
e=p.createElement("tr")
e.className="codeTableRow"
d=p.createElement("td")
d.className="codeLineNums codeLineLight"
c=p.createElement("td")
c.className="codeLineNums"
if(s>=u.length)return H.k(u,s)
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
for(f=r.length,a0=0;a0<r.length;r.length===f||(0,H.A)(r),++a0)C.v.B(a,r[a0])
C.m.B(e,d)
C.m.B(e,c)
C.m.B(e,a)
C.o.B(n,e)}else for(f=q.d,a1=f.length,a2=a6,a0=0;a0<f.length;f.length===a1||(0,H.A)(f),++a0){r=f[a0]
e=p.createElement("tr")
e.className="codeTableRow"
d=p.createElement("td")
d.className="codeLineNums";++a2
d.textContent=""+a2
c=p.createElement("td")
c.className="codeLineText"
for(a3=C.a.gS(r);a3.u();)C.v.B(c,a3.gF(a3))
C.m.B(e,d)
C.m.B(e,c)
C.o.B(n,e)}},
i9:function(){var u,t,s,r
if(this.b!=null)return
u=V.iq()
u.c=u.k(0,"Start")
t=u.k(0,"Start").l(0,"Bold")
s=V.u(new H.q("*"))
C.a.h(t.a,s)
t.c=!0
t=u.k(0,"Bold").l(0,"Bold")
s=new V.an()
r=[V.as]
s.sa6(H.c([],r))
C.a.h(t.a,s)
t=V.u(new H.q("*"))
C.a.h(s.a,t)
t=u.k(0,"Bold").l(0,"BoldEnd")
s=V.u(new H.q("*"))
C.a.h(t.a,s)
t.c=!0
t=u.k(0,"Start").l(0,"Italic")
s=V.u(new H.q("_"))
C.a.h(t.a,s)
t.c=!0
t=u.k(0,"Italic").l(0,"Italic")
s=new V.an()
s.sa6(H.c([],r))
C.a.h(t.a,s)
t=V.u(new H.q("_"))
C.a.h(s.a,t)
t=u.k(0,"Italic").l(0,"ItalicEnd")
s=V.u(new H.q("_"))
C.a.h(t.a,s)
t.c=!0
t=u.k(0,"Start").l(0,"Code")
s=V.u(new H.q("`"))
C.a.h(t.a,s)
t.c=!0
t=u.k(0,"Code").l(0,"Code")
s=new V.an()
s.sa6(H.c([],r))
C.a.h(t.a,s)
t=V.u(new H.q("`"))
C.a.h(s.a,t)
t=u.k(0,"Code").l(0,"CodeEnd")
s=V.u(new H.q("`"))
C.a.h(t.a,s)
t.c=!0
t=u.k(0,"Start").l(0,"LinkHead")
s=V.u(new H.q("["))
C.a.h(t.a,s)
t.c=!0
t=u.k(0,"LinkHead").l(0,"LinkTail")
s=V.u(new H.q("|"))
C.a.h(t.a,s)
s=u.k(0,"LinkHead").l(0,"LinkEnd")
t=V.u(new H.q("]"))
C.a.h(s.a,t)
s.c=!0
s=u.k(0,"LinkHead").l(0,"LinkHead")
t=new V.an()
t.sa6(H.c([],r))
C.a.h(s.a,t)
s=V.u(new H.q("|]"))
C.a.h(t.a,s)
s=u.k(0,"LinkTail").l(0,"LinkEnd")
t=V.u(new H.q("]"))
C.a.h(s.a,t)
s.c=!0
s=u.k(0,"LinkTail").l(0,"LinkTail")
t=new V.an()
t.sa6(H.c([],r))
C.a.h(s.a,t)
s=V.u(new H.q("|]"))
C.a.h(t.a,s)
C.a.h(u.k(0,"Start").l(0,"Other").a,new V.b8())
s=u.k(0,"Other").l(0,"Other")
t=new V.an()
t.sa6(H.c([],r))
C.a.h(s.a,t)
s=V.u(new H.q("*_`["))
C.a.h(t.a,s)
s=u.k(0,"BoldEnd")
s.d=s.a.N("Bold")
s=u.k(0,"ItalicEnd")
s.d=s.a.N("Italic")
s=u.k(0,"CodeEnd")
s.d=s.a.N("Code")
s=u.k(0,"LinkEnd")
s.d=s.a.N("Link")
s=u.k(0,"Other")
s.d=s.a.N("Other")
this.b=u}}
V.i0.prototype={
$1:function(a){P.l8(C.q,new V.i_(this.a))},
$S:12}
V.i_.prototype={
$0:function(){var u,t,s
u=C.j.am(document.documentElement.scrollTop)
t=this.a.style
s=H.l(-0.01*u)+"px"
t.top=s},
$S:2}
V.i1.prototype={
$1:function(a){return H.j(a,"$ibq").a===this.a},
$S:41}
Q.jS.prototype={
$1:function(a){var u,t,s,r
H.j(a,"$iw")
u=this.a
t=this.b
s=t.a
r=[P.f]
u.dB("Vertex Shader","glsl",0,H.c((s==null?null:s.c).split("\n"),r))
t=t.a
u.dB("Fragment Shader","glsl",0,H.c((t==null?null:t.d).split("\n"),r))},
$S:7};(function aliases(){var u=J.a.prototype
u.eU=u.i
u=J.dA.prototype
u.eW=u.i
u=P.d.prototype
u.eV=u.bM
u=W.T.prototype
u.bQ=u.ag
u=W.eP.prototype
u.eY=u.ar
u=O.cr.prototype
u.cV=u.aq
u=O.aU.prototype
u.cW=u.aq
u=V.dH.prototype
u.eX=u.aE
u.cU=u.i})();(function installTearOffs(){var u=hunkHelpers._static_1,t=hunkHelpers._static_0,s=hunkHelpers.installStaticTearOff,r=hunkHelpers.installInstanceTearOff,q=hunkHelpers._instance_2u,p=hunkHelpers._instance_0u,o=hunkHelpers._instance_1u,n=hunkHelpers._instance_0i
u(P,"mX","mF",9)
u(P,"mY","mG",9)
u(P,"mZ","mH",9)
t(P,"lu","mW",3)
s(W,"n7",4,null,["$4"],["mJ"],22,0)
s(W,"n8",4,null,["$4"],["mK"],22,0)
var m
r(m=E.af.prototype,"gek",0,0,null,["$1","$0"],["el","jK"],0,0)
r(m,"gei",0,0,null,["$1","$0"],["ej","jH"],0,0)
q(m,"gjF","jG",5)
q(m,"gjI","jJ",5)
r(m=E.e8.prototype,"gcZ",0,0,null,["$1","$0"],["d0","d_"],0,0)
p(m,"gjW","ep",3)
o(m=X.ef.prototype,"ghj","hk",10)
o(m,"gh5","h6",10)
o(m,"ghd","he",4)
o(m,"ghn","ho",21)
o(m,"ghl","hm",21)
o(m,"ghr","hs",4)
o(m,"ghv","hw",4)
o(m,"ghh","hi",4)
o(m,"ght","hu",4)
o(m,"ghf","hg",4)
o(m,"ghx","hy",43)
o(m,"ghz","hA",10)
o(m,"ghP","hQ",11)
o(m,"ghL","hM",11)
o(m,"ghN","hO",11)
r(D.bs.prototype,"gf7",0,0,null,["$1","$0"],["aw","f8"],0,0)
r(m=D.dC.prototype,"gdk",0,0,null,["$1","$0"],["dl","hp"],0,0)
o(m,"ghB","hC",30)
q(m,"gh_","h0",23)
q(m,"ghF","hG",23)
n(V.U.prototype,"gm","cC",24)
n(V.Q.prototype,"gm","cC",24)
r(m=U.co.prototype,"gaL",0,0,null,["$1","$0"],["O","a5"],0,0)
q(m,"gfY","fZ",25)
q(m,"ghD","hE",25)
r(m=U.eg.prototype,"gaL",0,0,null,["$1","$0"],["O","a5"],0,0)
o(m,"gc1","c2",1)
o(m,"gc3","c4",1)
o(m,"gc5","c6",1)
r(m=U.eh.prototype,"gaL",0,0,null,["$1","$0"],["O","a5"],0,0)
o(m,"gc1","c2",1)
o(m,"gc3","c4",1)
o(m,"gc5","c6",1)
o(m,"gfR","fS",1)
o(m,"gfT","fU",1)
o(m,"giq","ir",1)
o(m,"gio","ip",1)
o(m,"gil","im",1)
o(U.ei.prototype,"gfW","fX",1)
r(m=M.dj.prototype,"gZ",0,0,null,["$1","$0"],["a_","aZ"],0,0)
q(m,"ghH","hI",26)
q(m,"ghJ","hK",26)
r(M.dl.prototype,"gZ",0,0,null,["$1","$0"],["a_","aZ"],0,0)
r(m=M.dr.prototype,"gZ",0,0,null,["$1","$0"],["a_","aZ"],0,0)
q(m,"gh9","ha",5)
q(m,"ghb","hc",5)
r(m=O.dI.prototype,"gaM",0,0,null,["$1","$0"],["U","b_"],0,0)
r(m,"ghZ",0,0,null,["$1","$0"],["ds","i_"],0,0)
q(m,"gh1","h2",27)
q(m,"gh3","h4",27)
r(O.cr.prototype,"gaM",0,0,null,["$1","$0"],["U","b_"],0,0)
r(O.dX.prototype,"gaM",0,0,null,["$1","$0"],["U","b_"],0,0)
r(X.dQ.prototype,"gh7",0,0,null,["$1","$0"],["ap","h8"],0,0)})();(function inheritance(){var u=hunkHelpers.mixin,t=hunkHelpers.inherit,s=hunkHelpers.inheritMany
t(P.R,null)
s(P.R,[H.k8,J.a,J.ak,P.eC,P.d,H.cq,P.aQ,H.bR,H.ee,H.hM,H.iv,P.bu,H.cf,H.eU,P.a9,H.h8,H.h9,H.h4,P.f_,P.b7,P.aC,P.em,P.i8,P.cE,P.i9,P.b2,P.ae,P.jE,P.js,P.c0,P.eB,P.v,P.cg,P.h_,P.jC,P.N,P.al,P.a1,P.bt,P.hE,P.e_,P.eu,P.fU,P.bv,P.b,P.P,P.L,P.ao,P.f,P.bg,W.fw,W.bE,W.B,W.dO,W.eP,W.jx,W.ds,W.au,W.jr,W.f5,P.f4,P.jm,O.a0,O.cs,E.fp,E.af,E.hN,E.e8,Z.ek,Z.el,Z.ce,Z.bx,Z.b5,D.fs,D.bQ,D.w,X.di,X.dB,X.h6,X.hb,X.at,X.hs,X.ir,X.ef,D.bs,D.a2,D.dR,D.dZ,D.e5,D.e6,D.e7,V.a3,V.aF,V.fK,V.dK,V.am,V.a5,V.ag,V.bf,V.dU,V.U,V.Q,U.eg,U.eh,U.ei,M.dl,M.dr,M.av,A.de,A.fk,A.hj,A.cK,A.cO,A.cM,A.cP,A.cN,A.cQ,A.bP,A.eb,A.iE,F.a4,F.bb,F.bB,F.dW,F.hW,F.hX,F.hY,F.ax,F.iO,F.iP,F.iS,F.iT,O.bC,O.cr,T.ij,V.b8,V.as,V.dH,V.hL,V.hV,V.cC,V.e9,V.cI,V.ip,X.bM,X.cF,X.h0,X.dQ,V.bq,V.hZ])
s(J.a,[J.h3,J.dy,J.dA,J.aR,J.dz,J.bT,H.cw,W.e,W.fi,W.df,W.bO,W.aM,W.aN,W.S,W.eo,W.fB,W.fC,W.dn,W.eq,W.dq,W.es,W.fE,W.o,W.ev,W.aP,W.fY,W.ex,W.bw,W.dF,W.hm,W.eD,W.eE,W.aW,W.eF,W.eI,W.aY,W.eM,W.dT,W.eO,W.b_,W.eQ,W.b0,W.eV,W.aG,W.eY,W.io,W.b3,W.f0,W.it,W.iJ,W.f6,W.f8,W.fa,W.fc,W.fe,P.ba,P.ez,P.bd,P.eK,P.hJ,P.eW,P.bh,P.f2,P.fl,P.en,P.dg,P.dt,P.dS,P.bZ,P.dV,P.e2,P.ec,P.eS])
s(J.dA,[J.hF,J.cR,J.bA])
t(J.k7,J.aR)
s(J.dz,[J.dx,J.dw])
t(P.ha,P.eC)
s(P.ha,[H.ed,W.j3,W.ai,P.fQ])
t(H.q,H.ed)
s(P.d,[H.fH,H.he,H.cS])
s(H.fH,[H.bU,H.dD])
s(P.aQ,[H.hf,H.iY])
t(H.hg,H.bU)
s(P.bu,[H.hB,H.h5,H.iH,H.ix,H.fr,H.hT,P.dP,P.aE,P.iI,P.iG,P.cD,P.fu,P.fz])
s(H.cf,[H.jW,H.ie,H.jO,H.jP,H.jQ,P.j_,P.iZ,P.j0,P.j1,P.jB,P.jA,P.j9,P.jd,P.ja,P.jb,P.jc,P.jg,P.jh,P.jf,P.je,P.ia,P.ib,P.jI,P.jp,P.jo,P.jq,P.hd,P.fF,P.fG,W.fI,W.ho,W.hq,W.hS,W.i7,W.j8,W.hA,W.hz,W.jt,W.ju,W.jz,W.jD,P.jK,P.fR,P.fS,P.fn,E.hO,E.hP,E.hQ,E.im,D.fM,D.fN,F.jF,F.iV,F.iU,F.iQ,F.iR,T.il,T.ik,V.jV,V.i0,V.i_,V.i1,Q.jS])
s(H.ie,[H.i5,H.cc])
t(P.hc,P.a9)
s(P.hc,[H.aS,W.j2])
t(H.dL,H.cw)
s(H.dL,[H.cW,H.cY])
t(H.cX,H.cW)
t(H.cv,H.cX)
t(H.cZ,H.cY)
t(H.dM,H.cZ)
s(H.dM,[H.ht,H.hu,H.hv,H.hw,H.hx,H.dN,H.hy])
t(P.jn,P.jE)
t(P.jl,P.js)
t(P.ch,P.i9)
t(P.fJ,P.cg)
s(P.ch,[P.fZ,P.iL])
t(P.iK,P.fJ)
s(P.a1,[P.z,P.C])
s(P.aE,[P.bY,P.h1])
s(W.e,[W.D,W.fP,W.aZ,W.d_,W.b1,W.aH,W.d1,W.iX,W.cT,P.fo,P.bL])
s(W.D,[W.T,W.bp,W.ck,W.cU])
s(W.T,[W.x,P.p])
s(W.x,[W.dd,W.fj,W.cb,W.bo,W.bN,W.az,W.fT,W.du,W.cp,W.ct,W.hU,W.c_,W.e0,W.e1,W.id,W.cG])
s(W.aM,[W.ci,W.fx,W.fy])
t(W.fv,W.aN)
t(W.cj,W.eo)
t(W.er,W.eq)
t(W.dp,W.er)
t(W.et,W.es)
t(W.fD,W.et)
t(W.aO,W.df)
t(W.ew,W.ev)
t(W.fO,W.ew)
t(W.ey,W.ex)
t(W.bS,W.ey)
t(W.dv,W.ck)
t(W.bD,W.o)
s(W.bD,[W.aT,W.aa,W.aI])
t(W.hn,W.eD)
t(W.hp,W.eE)
t(W.eG,W.eF)
t(W.hr,W.eG)
t(W.eJ,W.eI)
t(W.cx,W.eJ)
t(W.eN,W.eM)
t(W.hH,W.eN)
t(W.hR,W.eO)
t(W.d0,W.d_)
t(W.i2,W.d0)
t(W.eR,W.eQ)
t(W.i3,W.eR)
t(W.i6,W.eV)
t(W.eZ,W.eY)
t(W.ig,W.eZ)
t(W.d2,W.d1)
t(W.ih,W.d2)
t(W.f1,W.f0)
t(W.is,W.f1)
t(W.iW,W.ct)
t(W.b6,W.aa)
t(W.f7,W.f6)
t(W.j4,W.f7)
t(W.ep,W.dq)
t(W.f9,W.f8)
t(W.ji,W.f9)
t(W.fb,W.fa)
t(W.eH,W.fb)
t(W.fd,W.fc)
t(W.jv,W.fd)
t(W.ff,W.fe)
t(W.jw,W.ff)
t(W.j5,W.j2)
t(W.j6,P.i8)
t(W.kg,W.j6)
t(W.j7,P.cE)
t(W.jy,W.eP)
t(P.ac,P.jm)
t(P.eA,P.ez)
t(P.h7,P.eA)
t(P.eL,P.eK)
t(P.hC,P.eL)
t(P.cA,P.p)
t(P.eX,P.eW)
t(P.ic,P.eX)
t(P.f3,P.f2)
t(P.iu,P.f3)
t(P.fm,P.en)
t(P.hD,P.bL)
t(P.eT,P.eS)
t(P.i4,P.eT)
s(E.fp,[Z.dh,A.cB,T.cH])
s(D.w,[D.by,D.bz,D.J,X.hI])
s(X.hI,[X.dG,X.bc,X.cu,X.ea])
s(O.a0,[D.dC,U.co,M.dj])
s(D.fs,[U.ft,U.ab])
t(U.dk,U.ab)
s(A.cB,[A.dJ,A.dY])
s(A.eb,[A.M,A.iA,A.iB,A.iD,A.iy,A.Y,A.iz,A.I,A.iC,A.iF,A.cL,A.ap,A.ah,A.ad])
s(O.bC,[O.dI,O.dX])
s(O.cr,[O.hh,O.hi,O.aU])
s(O.aU,[O.hk,O.hl])
s(T.cH,[T.e3,T.e4])
t(T.ii,T.e3)
s(V.dH,[V.an,V.cJ])
t(X.fV,X.cF)
s(V.bq,[V.fA,V.fW,V.fX,V.hG])
u(H.ed,H.ee)
u(H.cW,P.v)
u(H.cX,H.bR)
u(H.cY,P.v)
u(H.cZ,H.bR)
u(P.eC,P.v)
u(W.eo,W.fw)
u(W.eq,P.v)
u(W.er,W.B)
u(W.es,P.v)
u(W.et,W.B)
u(W.ev,P.v)
u(W.ew,W.B)
u(W.ex,P.v)
u(W.ey,W.B)
u(W.eD,P.a9)
u(W.eE,P.a9)
u(W.eF,P.v)
u(W.eG,W.B)
u(W.eI,P.v)
u(W.eJ,W.B)
u(W.eM,P.v)
u(W.eN,W.B)
u(W.eO,P.a9)
u(W.d_,P.v)
u(W.d0,W.B)
u(W.eQ,P.v)
u(W.eR,W.B)
u(W.eV,P.a9)
u(W.eY,P.v)
u(W.eZ,W.B)
u(W.d1,P.v)
u(W.d2,W.B)
u(W.f0,P.v)
u(W.f1,W.B)
u(W.f6,P.v)
u(W.f7,W.B)
u(W.f8,P.v)
u(W.f9,W.B)
u(W.fa,P.v)
u(W.fb,W.B)
u(W.fc,P.v)
u(W.fd,W.B)
u(W.fe,P.v)
u(W.ff,W.B)
u(P.ez,P.v)
u(P.eA,W.B)
u(P.eK,P.v)
u(P.eL,W.B)
u(P.eW,P.v)
u(P.eX,W.B)
u(P.f2,P.v)
u(P.f3,W.B)
u(P.en,P.a9)
u(P.eS,P.v)
u(P.eT,W.B)})();(function constants(){var u=hunkHelpers.makeConstList
C.n=W.bo.prototype
C.p=W.bN.prototype
C.y=W.bO.prototype
C.k=W.az.prototype
C.J=W.dn.prototype
C.L=W.du.prototype
C.z=W.dv.prototype
C.N=J.a.prototype
C.a=J.aR.prototype
C.O=J.dw.prototype
C.h=J.dx.prototype
C.r=J.dy.prototype
C.j=J.dz.prototype
C.i=J.bT.prototype
C.V=J.bA.prototype
C.Z=W.cx.prototype
C.D=J.hF.prototype
C.E=W.dT.prototype
C.b=P.bZ.prototype
C.v=W.c_.prototype
C.o=W.e0.prototype
C.m=W.e1.prototype
C.w=J.cR.prototype
C.F=W.b6.prototype
C.G=W.cT.prototype
C.H=new P.hE()
C.I=new P.iL()
C.l=new P.jn()
C.c=new A.bP(0,"ColorSourceType.None")
C.f=new A.bP(1,"ColorSourceType.Solid")
C.d=new A.bP(2,"ColorSourceType.Texture2D")
C.e=new A.bP(3,"ColorSourceType.TextureCube")
C.q=new P.bt(0)
C.K=new P.bt(5e6)
C.M=new P.h_("element",!0,!1,!1,!1)
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
C.W=H.c(u(["*::class","*::dir","*::draggable","*::hidden","*::id","*::inert","*::itemprop","*::itemref","*::itemscope","*::lang","*::spellcheck","*::title","*::translate","A::accesskey","A::coords","A::hreflang","A::name","A::shape","A::tabindex","A::target","A::type","AREA::accesskey","AREA::alt","AREA::coords","AREA::nohref","AREA::shape","AREA::tabindex","AREA::target","AUDIO::controls","AUDIO::loop","AUDIO::mediagroup","AUDIO::muted","AUDIO::preload","BDO::dir","BODY::alink","BODY::bgcolor","BODY::link","BODY::text","BODY::vlink","BR::clear","BUTTON::accesskey","BUTTON::disabled","BUTTON::name","BUTTON::tabindex","BUTTON::type","BUTTON::value","CANVAS::height","CANVAS::width","CAPTION::align","COL::align","COL::char","COL::charoff","COL::span","COL::valign","COL::width","COLGROUP::align","COLGROUP::char","COLGROUP::charoff","COLGROUP::span","COLGROUP::valign","COLGROUP::width","COMMAND::checked","COMMAND::command","COMMAND::disabled","COMMAND::label","COMMAND::radiogroup","COMMAND::type","DATA::value","DEL::datetime","DETAILS::open","DIR::compact","DIV::align","DL::compact","FIELDSET::disabled","FONT::color","FONT::face","FONT::size","FORM::accept","FORM::autocomplete","FORM::enctype","FORM::method","FORM::name","FORM::novalidate","FORM::target","FRAME::name","H1::align","H2::align","H3::align","H4::align","H5::align","H6::align","HR::align","HR::noshade","HR::size","HR::width","HTML::version","IFRAME::align","IFRAME::frameborder","IFRAME::height","IFRAME::marginheight","IFRAME::marginwidth","IFRAME::width","IMG::align","IMG::alt","IMG::border","IMG::height","IMG::hspace","IMG::ismap","IMG::name","IMG::usemap","IMG::vspace","IMG::width","INPUT::accept","INPUT::accesskey","INPUT::align","INPUT::alt","INPUT::autocomplete","INPUT::autofocus","INPUT::checked","INPUT::disabled","INPUT::inputmode","INPUT::ismap","INPUT::list","INPUT::max","INPUT::maxlength","INPUT::min","INPUT::multiple","INPUT::name","INPUT::placeholder","INPUT::readonly","INPUT::required","INPUT::size","INPUT::step","INPUT::tabindex","INPUT::type","INPUT::usemap","INPUT::value","INS::datetime","KEYGEN::disabled","KEYGEN::keytype","KEYGEN::name","LABEL::accesskey","LABEL::for","LEGEND::accesskey","LEGEND::align","LI::type","LI::value","LINK::sizes","MAP::name","MENU::compact","MENU::label","MENU::type","METER::high","METER::low","METER::max","METER::min","METER::value","OBJECT::typemustmatch","OL::compact","OL::reversed","OL::start","OL::type","OPTGROUP::disabled","OPTGROUP::label","OPTION::disabled","OPTION::label","OPTION::selected","OPTION::value","OUTPUT::for","OUTPUT::name","P::align","PRE::width","PROGRESS::max","PROGRESS::min","PROGRESS::value","SELECT::autocomplete","SELECT::disabled","SELECT::multiple","SELECT::name","SELECT::required","SELECT::size","SELECT::tabindex","SOURCE::type","TABLE::align","TABLE::bgcolor","TABLE::border","TABLE::cellpadding","TABLE::cellspacing","TABLE::frame","TABLE::rules","TABLE::summary","TABLE::width","TBODY::align","TBODY::char","TBODY::charoff","TBODY::valign","TD::abbr","TD::align","TD::axis","TD::bgcolor","TD::char","TD::charoff","TD::colspan","TD::headers","TD::height","TD::nowrap","TD::rowspan","TD::scope","TD::valign","TD::width","TEXTAREA::accesskey","TEXTAREA::autocomplete","TEXTAREA::cols","TEXTAREA::disabled","TEXTAREA::inputmode","TEXTAREA::name","TEXTAREA::placeholder","TEXTAREA::readonly","TEXTAREA::required","TEXTAREA::rows","TEXTAREA::tabindex","TEXTAREA::wrap","TFOOT::align","TFOOT::char","TFOOT::charoff","TFOOT::valign","TH::abbr","TH::align","TH::axis","TH::bgcolor","TH::char","TH::charoff","TH::colspan","TH::headers","TH::height","TH::nowrap","TH::rowspan","TH::scope","TH::valign","TH::width","THEAD::align","THEAD::char","THEAD::charoff","THEAD::valign","TR::align","TR::bgcolor","TR::char","TR::charoff","TR::valign","TRACK::default","TRACK::kind","TRACK::label","TRACK::srclang","UL::compact","UL::type","VIDEO::controls","VIDEO::height","VIDEO::loop","VIDEO::mediagroup","VIDEO::muted","VIDEO::preload","VIDEO::width"]),[P.f])
C.X=H.c(u(["HEAD","AREA","BASE","BASEFONT","BR","COL","COLGROUP","EMBED","FRAME","FRAMESET","HR","IMAGE","IMG","INPUT","ISINDEX","LINK","META","PARAM","SOURCE","STYLE","TITLE","WBR"]),[P.f])
C.Y=H.c(u([]),[P.f])
C.C=H.c(u([0,0,65498,45055,65535,34815,65534,18431]),[P.C])
C.t=H.c(u(["bind","if","ref","repeat","syntax"]),[P.f])
C.u=H.c(u(["A::href","AREA::href","BLOCKQUOTE::cite","BODY::background","COMMAND::icon","DEL::cite","FORM::action","IMG::src","INPUT::src","INS::cite","Q::cite","VIDEO::poster"]),[P.f])
C.x=new P.iK(!1)})();(function staticFields(){$.aL=0
$.cd=null
$.kD=null
$.ki=!1
$.lx=null
$.ls=null
$.lC=null
$.jL=null
$.jR=null
$.ks=null
$.c1=null
$.d5=null
$.d6=null
$.kj=!1
$.Z=C.l
$.b9=null
$.k3=null
$.kK=null
$.kJ=null
$.kT=null
$.kY=null
$.cy=null
$.l3=null
$.lc=null
$.lf=null
$.le=null
$.iM=null
$.ld=null
$.mz="uniform mat4 viewMat;                             \nuniform float fov;                                \nuniform float ratio;                              \n                                                  \nattribute vec3 posAttr;                           \n                                                  \nvarying vec3 cubeTxt;                             \n                                                  \nvoid main()                                       \n{                                                 \n  float t = 1.0 / (tan(fov * 0.5)*3.0);           \n  float x = -t * posAttr.x / ratio;               \n  float y = t * posAttr.y;                        \n  cubeTxt = (viewMat * vec4(x, y, 1.0, 0.0)).xyz; \n  gl_Position = vec4(posAttr, 1.0);               \n}                                                 \n"
$.my="precision mediump float;                                              \n                                                                      \nuniform samplerCube boxTxt;                                           \nuniform vec3 boxClr;                                                  \n                                                                      \nvarying vec3 cubeTxt;                                                 \n                                                                      \nvoid main()                                                           \n{                                                                     \n   vec3 txtCube = normalize(cubeTxt);                                 \n   gl_FragColor = vec4(boxClr*textureCube(boxTxt, txtCube).xyz, 1.0); \n}                                                                     \n"
$.kX=null})();(function lazyInitializers(){var u=hunkHelpers.lazy
u($,"nv","lF",function(){return H.lw("_$dart_dartClosure")})
u($,"nw","kx",function(){return H.lw("_$dart_js")})
u($,"nA","lG",function(){return H.b4(H.iw({
toString:function(){return"$receiver$"}}))})
u($,"nB","lH",function(){return H.b4(H.iw({$method$:null,
toString:function(){return"$receiver$"}}))})
u($,"nC","lI",function(){return H.b4(H.iw(null))})
u($,"nD","lJ",function(){return H.b4(function(){var $argumentsExpr$='$arguments$'
try{null.$method$($argumentsExpr$)}catch(t){return t.message}}())})
u($,"nG","lM",function(){return H.b4(H.iw(void 0))})
u($,"nH","lN",function(){return H.b4(function(){var $argumentsExpr$='$arguments$'
try{(void 0).$method$($argumentsExpr$)}catch(t){return t.message}}())})
u($,"nF","lL",function(){return H.b4(H.la(null))})
u($,"nE","lK",function(){return H.b4(function(){try{null.$method$}catch(t){return t.message}}())})
u($,"nJ","lP",function(){return H.b4(H.la(void 0))})
u($,"nI","lO",function(){return H.b4(function(){try{(void 0).$method$}catch(t){return t.message}}())})
u($,"o_","ky",function(){return P.mE()})
u($,"o3","dc",function(){return[]})
u($,"o2","lU",function(){return P.mu("^[\\-\\.0-9A-Z_a-z~]*$",!0,!1)})
u($,"o0","lT",function(){return P.kP(["A","ABBR","ACRONYM","ADDRESS","AREA","ARTICLE","ASIDE","AUDIO","B","BDI","BDO","BIG","BLOCKQUOTE","BR","BUTTON","CANVAS","CAPTION","CENTER","CITE","CODE","COL","COLGROUP","COMMAND","DATA","DATALIST","DD","DEL","DETAILS","DFN","DIR","DIV","DL","DT","EM","FIELDSET","FIGCAPTION","FIGURE","FONT","FOOTER","FORM","H1","H2","H3","H4","H5","H6","HEADER","HGROUP","HR","I","IFRAME","IMG","INPUT","INS","KBD","LABEL","LEGEND","LI","MAP","MARK","MENU","METER","NAV","NOBR","OL","OPTGROUP","OPTION","OUTPUT","P","PRE","PROGRESS","Q","S","SAMP","SECTION","SELECT","SMALL","SOURCE","SPAN","STRIKE","STRONG","SUB","SUMMARY","SUP","TABLE","TBODY","TD","TEXTAREA","TFOOT","TH","THEAD","TIME","TR","TRACK","TT","U","UL","VAR","VIDEO","WBR"],P.f)})
u($,"o1","kz",function(){return P.kO(P.f,P.bv)})
u($,"nT","lS",function(){return Z.aB(0)})
u($,"nN","lQ",function(){return Z.aB(511)})
u($,"nV","aK",function(){return Z.aB(1)})
u($,"nU","bl",function(){return Z.aB(2)})
u($,"nP","bk",function(){return Z.aB(4)})
u($,"nW","bm",function(){return Z.aB(8)})
u($,"nX","bn",function(){return Z.aB(16)})
u($,"nQ","da",function(){return Z.aB(32)})
u($,"nR","db",function(){return Z.aB(64)})
u($,"nS","lR",function(){return Z.aB(96)})
u($,"nY","ca",function(){return Z.aB(128)})
u($,"nO","bj",function(){return Z.aB(256)})
u($,"nu","lE",function(){return new V.fK(1e-9)})
u($,"nt","O",function(){return $.lE()})})()
var v={mangledGlobalNames:{C:"int",z:"double",a1:"num",f:"String",N:"bool",L:"Null",b:"List"},mangledNames:{},getTypeFromName:getGlobalFromName,metadata:[],types:[{func:1,ret:-1,opt:[D.w]},{func:1,ret:-1,args:[D.w]},{func:1,ret:P.L},{func:1,ret:-1},{func:1,ret:-1,args:[W.aa]},{func:1,ret:-1,args:[P.C,[P.d,E.af]]},{func:1,ret:-1,args:[P.f,,]},{func:1,ret:P.L,args:[D.w]},{func:1,ret:P.L,args:[F.a4]},{func:1,ret:-1,args:[{func:1,ret:-1}]},{func:1,ret:-1,args:[W.o]},{func:1,ret:-1,args:[W.aI]},{func:1,ret:P.L,args:[W.o]},{func:1,ret:P.L,args:[,]},{func:1,ret:P.L,args:[,,]},{func:1,ret:P.f,args:[P.C]},{func:1,ret:P.N,args:[W.D]},{func:1,args:[,]},{func:1,ret:P.N,args:[W.au]},{func:1,ret:P.N,args:[P.f]},{func:1,ret:P.L,args:[{func:1,ret:-1,args:[D.w]}]},{func:1,ret:-1,args:[W.aT]},{func:1,ret:P.N,args:[W.T,P.f,P.f,W.bE]},{func:1,ret:-1,args:[P.C,[P.d,D.a2]]},{func:1,ret:P.z},{func:1,ret:-1,args:[P.C,[P.d,U.ab]]},{func:1,ret:-1,args:[P.C,[P.d,M.av]]},{func:1,ret:-1,args:[P.C,[P.d,V.am]]},{func:1,args:[W.o]},{func:1,ret:W.T,args:[W.D]},{func:1,ret:P.N,args:[[P.d,D.a2]]},{func:1,ret:[P.aC,,],args:[,]},{func:1,ret:P.L,args:[,],opt:[P.ao]},{func:1,ret:-1,args:[P.f,P.f]},{func:1,ret:P.L,args:[P.a1]},{func:1,args:[P.f]},{func:1,ret:P.L,args:[F.ax,P.z,P.z]},{func:1,args:[,P.f]},{func:1,ret:P.L,args:[{func:1,ret:-1}]},{func:1,ret:P.f,args:[P.f]},{func:1,ret:P.L,args:[P.b2]},{func:1,ret:P.N,args:[V.bq]},{func:1,ret:-1,args:[W.D,W.D]},{func:1,ret:-1,args:[W.b6]}],interceptorsByTag:null,leafTags:null};(function nativeSupport(){!function(){var u=function(a){var o={}
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
hunkHelpers.setOrUpdateInterceptorsByTag({ArrayBuffer:J.a,AnimationEffectReadOnly:J.a,AnimationEffectTiming:J.a,AnimationEffectTimingReadOnly:J.a,AnimationTimeline:J.a,AnimationWorkletGlobalScope:J.a,AuthenticatorAssertionResponse:J.a,AuthenticatorAttestationResponse:J.a,AuthenticatorResponse:J.a,BackgroundFetchFetch:J.a,BackgroundFetchManager:J.a,BackgroundFetchSettledFetch:J.a,BarProp:J.a,BarcodeDetector:J.a,BluetoothRemoteGATTDescriptor:J.a,Body:J.a,BudgetState:J.a,CacheStorage:J.a,CanvasGradient:J.a,CanvasPattern:J.a,Client:J.a,Clients:J.a,CookieStore:J.a,Coordinates:J.a,Credential:J.a,CredentialUserData:J.a,CredentialsContainer:J.a,Crypto:J.a,CryptoKey:J.a,CSS:J.a,CSSVariableReferenceValue:J.a,CustomElementRegistry:J.a,DataTransfer:J.a,DataTransferItem:J.a,DeprecatedStorageInfo:J.a,DeprecatedStorageQuota:J.a,DeprecationReport:J.a,DetectedBarcode:J.a,DetectedFace:J.a,DetectedText:J.a,DeviceAcceleration:J.a,DeviceRotationRate:J.a,DirectoryEntry:J.a,DirectoryReader:J.a,DocumentOrShadowRoot:J.a,DocumentTimeline:J.a,DOMError:J.a,Iterator:J.a,DOMMatrix:J.a,DOMMatrixReadOnly:J.a,DOMParser:J.a,DOMPoint:J.a,DOMPointReadOnly:J.a,DOMQuad:J.a,DOMStringMap:J.a,Entry:J.a,External:J.a,FaceDetector:J.a,FederatedCredential:J.a,FileEntry:J.a,DOMFileSystem:J.a,FontFace:J.a,FontFaceSource:J.a,FormData:J.a,GamepadButton:J.a,GamepadPose:J.a,Geolocation:J.a,Position:J.a,Headers:J.a,HTMLHyperlinkElementUtils:J.a,IdleDeadline:J.a,ImageBitmap:J.a,ImageBitmapRenderingContext:J.a,ImageCapture:J.a,InputDeviceCapabilities:J.a,IntersectionObserver:J.a,IntersectionObserverEntry:J.a,InterventionReport:J.a,KeyframeEffect:J.a,KeyframeEffectReadOnly:J.a,MediaCapabilities:J.a,MediaCapabilitiesInfo:J.a,MediaDeviceInfo:J.a,MediaError:J.a,MediaKeyStatusMap:J.a,MediaKeySystemAccess:J.a,MediaKeys:J.a,MediaKeysPolicy:J.a,MediaMetadata:J.a,MediaSession:J.a,MediaSettingsRange:J.a,MemoryInfo:J.a,MessageChannel:J.a,Metadata:J.a,MutationObserver:J.a,WebKitMutationObserver:J.a,MutationRecord:J.a,NavigationPreloadManager:J.a,Navigator:J.a,NavigatorAutomationInformation:J.a,NavigatorConcurrentHardware:J.a,NavigatorCookies:J.a,NavigatorUserMediaError:J.a,NodeFilter:J.a,NodeIterator:J.a,NonDocumentTypeChildNode:J.a,NonElementParentNode:J.a,NoncedElement:J.a,OffscreenCanvasRenderingContext2D:J.a,OverconstrainedError:J.a,PaintRenderingContext2D:J.a,PaintSize:J.a,PaintWorkletGlobalScope:J.a,PasswordCredential:J.a,Path2D:J.a,PaymentAddress:J.a,PaymentInstruments:J.a,PaymentManager:J.a,PaymentResponse:J.a,PerformanceEntry:J.a,PerformanceLongTaskTiming:J.a,PerformanceMark:J.a,PerformanceMeasure:J.a,PerformanceNavigation:J.a,PerformanceNavigationTiming:J.a,PerformanceObserver:J.a,PerformanceObserverEntryList:J.a,PerformancePaintTiming:J.a,PerformanceResourceTiming:J.a,PerformanceServerTiming:J.a,PerformanceTiming:J.a,Permissions:J.a,PhotoCapabilities:J.a,PositionError:J.a,Presentation:J.a,PresentationReceiver:J.a,PublicKeyCredential:J.a,PushManager:J.a,PushMessageData:J.a,PushSubscription:J.a,PushSubscriptionOptions:J.a,RelatedApplication:J.a,ReportBody:J.a,ReportingObserver:J.a,ResizeObserver:J.a,ResizeObserverEntry:J.a,RTCCertificate:J.a,RTCIceCandidate:J.a,mozRTCIceCandidate:J.a,RTCLegacyStatsReport:J.a,RTCRtpContributingSource:J.a,RTCRtpReceiver:J.a,RTCRtpSender:J.a,RTCSessionDescription:J.a,mozRTCSessionDescription:J.a,RTCStatsResponse:J.a,Screen:J.a,ScrollState:J.a,ScrollTimeline:J.a,Selection:J.a,SharedArrayBuffer:J.a,SpeechRecognitionAlternative:J.a,SpeechSynthesisVoice:J.a,StaticRange:J.a,StorageManager:J.a,StyleMedia:J.a,StylePropertyMap:J.a,StylePropertyMapReadonly:J.a,SyncManager:J.a,TaskAttributionTiming:J.a,TextDetector:J.a,TextMetrics:J.a,TrackDefault:J.a,TreeWalker:J.a,TrustedHTML:J.a,TrustedScriptURL:J.a,TrustedURL:J.a,UnderlyingSourceBase:J.a,URLSearchParams:J.a,VRCoordinateSystem:J.a,VRDisplayCapabilities:J.a,VREyeParameters:J.a,VRFrameData:J.a,VRFrameOfReference:J.a,VRPose:J.a,VRStageBounds:J.a,VRStageBoundsPoint:J.a,VRStageParameters:J.a,ValidityState:J.a,VideoPlaybackQuality:J.a,VideoTrack:J.a,VTTRegion:J.a,WindowClient:J.a,WorkletAnimation:J.a,WorkletGlobalScope:J.a,XPathEvaluator:J.a,XPathExpression:J.a,XPathNSResolver:J.a,XPathResult:J.a,XMLSerializer:J.a,XSLTProcessor:J.a,Bluetooth:J.a,BluetoothCharacteristicProperties:J.a,BluetoothRemoteGATTServer:J.a,BluetoothRemoteGATTService:J.a,BluetoothUUID:J.a,BudgetService:J.a,Cache:J.a,DOMFileSystemSync:J.a,DirectoryEntrySync:J.a,DirectoryReaderSync:J.a,EntrySync:J.a,FileEntrySync:J.a,FileReaderSync:J.a,FileWriterSync:J.a,HTMLAllCollection:J.a,Mojo:J.a,MojoHandle:J.a,MojoWatcher:J.a,NFC:J.a,PagePopupController:J.a,Report:J.a,Request:J.a,Response:J.a,SubtleCrypto:J.a,USBAlternateInterface:J.a,USBConfiguration:J.a,USBDevice:J.a,USBEndpoint:J.a,USBInTransferResult:J.a,USBInterface:J.a,USBIsochronousInTransferPacket:J.a,USBIsochronousInTransferResult:J.a,USBIsochronousOutTransferPacket:J.a,USBIsochronousOutTransferResult:J.a,USBOutTransferResult:J.a,WorkerLocation:J.a,WorkerNavigator:J.a,Worklet:J.a,IDBCursor:J.a,IDBCursorWithValue:J.a,IDBFactory:J.a,IDBIndex:J.a,IDBKeyRange:J.a,IDBObjectStore:J.a,IDBObservation:J.a,IDBObserver:J.a,IDBObserverChanges:J.a,SVGAngle:J.a,SVGAnimatedAngle:J.a,SVGAnimatedBoolean:J.a,SVGAnimatedEnumeration:J.a,SVGAnimatedInteger:J.a,SVGAnimatedLength:J.a,SVGAnimatedLengthList:J.a,SVGAnimatedNumber:J.a,SVGAnimatedNumberList:J.a,SVGAnimatedPreserveAspectRatio:J.a,SVGAnimatedRect:J.a,SVGAnimatedString:J.a,SVGAnimatedTransformList:J.a,SVGMatrix:J.a,SVGPoint:J.a,SVGPreserveAspectRatio:J.a,SVGRect:J.a,SVGUnitTypes:J.a,AudioListener:J.a,AudioParam:J.a,AudioTrack:J.a,AudioWorkletGlobalScope:J.a,AudioWorkletProcessor:J.a,PeriodicWave:J.a,WebGLActiveInfo:J.a,ANGLEInstancedArrays:J.a,ANGLE_instanced_arrays:J.a,WebGLCanvas:J.a,WebGLColorBufferFloat:J.a,WebGLCompressedTextureASTC:J.a,WebGLCompressedTextureATC:J.a,WEBGL_compressed_texture_atc:J.a,WebGLCompressedTextureETC1:J.a,WEBGL_compressed_texture_etc1:J.a,WebGLCompressedTextureETC:J.a,WebGLCompressedTexturePVRTC:J.a,WEBGL_compressed_texture_pvrtc:J.a,WebGLCompressedTextureS3TC:J.a,WEBGL_compressed_texture_s3tc:J.a,WebGLCompressedTextureS3TCsRGB:J.a,WebGLDebugRendererInfo:J.a,WEBGL_debug_renderer_info:J.a,WebGLDebugShaders:J.a,WEBGL_debug_shaders:J.a,WebGLDepthTexture:J.a,WEBGL_depth_texture:J.a,WebGLDrawBuffers:J.a,WEBGL_draw_buffers:J.a,EXTsRGB:J.a,EXT_sRGB:J.a,EXTBlendMinMax:J.a,EXT_blend_minmax:J.a,EXTColorBufferFloat:J.a,EXTColorBufferHalfFloat:J.a,EXTDisjointTimerQuery:J.a,EXTDisjointTimerQueryWebGL2:J.a,EXTFragDepth:J.a,EXT_frag_depth:J.a,EXTShaderTextureLOD:J.a,EXT_shader_texture_lod:J.a,EXTTextureFilterAnisotropic:J.a,EXT_texture_filter_anisotropic:J.a,WebGLGetBufferSubDataAsync:J.a,WebGLLoseContext:J.a,WebGLExtensionLoseContext:J.a,WEBGL_lose_context:J.a,OESElementIndexUint:J.a,OES_element_index_uint:J.a,OESStandardDerivatives:J.a,OES_standard_derivatives:J.a,OESTextureFloat:J.a,OES_texture_float:J.a,OESTextureFloatLinear:J.a,OES_texture_float_linear:J.a,OESTextureHalfFloat:J.a,OES_texture_half_float:J.a,OESTextureHalfFloatLinear:J.a,OES_texture_half_float_linear:J.a,OESVertexArrayObject:J.a,OES_vertex_array_object:J.a,WebGLQuery:J.a,WebGLRenderbuffer:J.a,WebGLRenderingContext:J.a,WebGLSampler:J.a,WebGLShaderPrecisionFormat:J.a,WebGLSync:J.a,WebGLTimerQueryEXT:J.a,WebGLTransformFeedback:J.a,WebGLVertexArrayObject:J.a,WebGLVertexArrayObjectOES:J.a,WebGL:J.a,WebGL2RenderingContextBase:J.a,Database:J.a,SQLError:J.a,SQLResultSet:J.a,SQLTransaction:J.a,DataView:H.cw,ArrayBufferView:H.cw,Float32Array:H.cv,Float64Array:H.cv,Int16Array:H.ht,Int32Array:H.hu,Int8Array:H.hv,Uint16Array:H.hw,Uint32Array:H.hx,Uint8ClampedArray:H.dN,CanvasPixelArray:H.dN,Uint8Array:H.hy,HTMLBRElement:W.x,HTMLButtonElement:W.x,HTMLContentElement:W.x,HTMLDListElement:W.x,HTMLDataElement:W.x,HTMLDataListElement:W.x,HTMLDetailsElement:W.x,HTMLDialogElement:W.x,HTMLEmbedElement:W.x,HTMLFieldSetElement:W.x,HTMLHRElement:W.x,HTMLHeadingElement:W.x,HTMLHtmlElement:W.x,HTMLIFrameElement:W.x,HTMLInputElement:W.x,HTMLLIElement:W.x,HTMLLabelElement:W.x,HTMLLegendElement:W.x,HTMLLinkElement:W.x,HTMLMapElement:W.x,HTMLMenuElement:W.x,HTMLMetaElement:W.x,HTMLMeterElement:W.x,HTMLModElement:W.x,HTMLOListElement:W.x,HTMLObjectElement:W.x,HTMLOptGroupElement:W.x,HTMLOptionElement:W.x,HTMLOutputElement:W.x,HTMLParagraphElement:W.x,HTMLParamElement:W.x,HTMLPictureElement:W.x,HTMLPreElement:W.x,HTMLProgressElement:W.x,HTMLQuoteElement:W.x,HTMLScriptElement:W.x,HTMLShadowElement:W.x,HTMLSlotElement:W.x,HTMLSourceElement:W.x,HTMLSpanElement:W.x,HTMLStyleElement:W.x,HTMLTableCaptionElement:W.x,HTMLTableColElement:W.x,HTMLTextAreaElement:W.x,HTMLTimeElement:W.x,HTMLTitleElement:W.x,HTMLTrackElement:W.x,HTMLUListElement:W.x,HTMLUnknownElement:W.x,HTMLDirectoryElement:W.x,HTMLFontElement:W.x,HTMLFrameElement:W.x,HTMLFrameSetElement:W.x,HTMLMarqueeElement:W.x,HTMLElement:W.x,AccessibleNodeList:W.fi,HTMLAnchorElement:W.dd,HTMLAreaElement:W.fj,HTMLBaseElement:W.cb,Blob:W.df,HTMLBodyElement:W.bo,HTMLCanvasElement:W.bN,CanvasRenderingContext2D:W.bO,CDATASection:W.bp,CharacterData:W.bp,Comment:W.bp,ProcessingInstruction:W.bp,Text:W.bp,CSSNumericValue:W.ci,CSSUnitValue:W.ci,CSSPerspective:W.fv,CSSCharsetRule:W.S,CSSConditionRule:W.S,CSSFontFaceRule:W.S,CSSGroupingRule:W.S,CSSImportRule:W.S,CSSKeyframeRule:W.S,MozCSSKeyframeRule:W.S,WebKitCSSKeyframeRule:W.S,CSSKeyframesRule:W.S,MozCSSKeyframesRule:W.S,WebKitCSSKeyframesRule:W.S,CSSMediaRule:W.S,CSSNamespaceRule:W.S,CSSPageRule:W.S,CSSRule:W.S,CSSStyleRule:W.S,CSSSupportsRule:W.S,CSSViewportRule:W.S,CSSStyleDeclaration:W.cj,MSStyleCSSProperties:W.cj,CSS2Properties:W.cj,CSSImageValue:W.aM,CSSKeywordValue:W.aM,CSSPositionValue:W.aM,CSSResourceValue:W.aM,CSSURLImageValue:W.aM,CSSStyleValue:W.aM,CSSMatrixComponent:W.aN,CSSRotation:W.aN,CSSScale:W.aN,CSSSkew:W.aN,CSSTranslation:W.aN,CSSTransformComponent:W.aN,CSSTransformValue:W.fx,CSSUnparsedValue:W.fy,DataTransferItemList:W.fB,HTMLDivElement:W.az,XMLDocument:W.ck,Document:W.ck,DOMException:W.fC,DOMImplementation:W.dn,ClientRectList:W.dp,DOMRectList:W.dp,DOMRectReadOnly:W.dq,DOMStringList:W.fD,DOMTokenList:W.fE,Element:W.T,AbortPaymentEvent:W.o,AnimationEvent:W.o,AnimationPlaybackEvent:W.o,ApplicationCacheErrorEvent:W.o,BackgroundFetchClickEvent:W.o,BackgroundFetchEvent:W.o,BackgroundFetchFailEvent:W.o,BackgroundFetchedEvent:W.o,BeforeInstallPromptEvent:W.o,BeforeUnloadEvent:W.o,BlobEvent:W.o,CanMakePaymentEvent:W.o,ClipboardEvent:W.o,CloseEvent:W.o,CustomEvent:W.o,DeviceMotionEvent:W.o,DeviceOrientationEvent:W.o,ErrorEvent:W.o,ExtendableEvent:W.o,ExtendableMessageEvent:W.o,FetchEvent:W.o,FontFaceSetLoadEvent:W.o,ForeignFetchEvent:W.o,GamepadEvent:W.o,HashChangeEvent:W.o,InstallEvent:W.o,MediaEncryptedEvent:W.o,MediaKeyMessageEvent:W.o,MediaQueryListEvent:W.o,MediaStreamEvent:W.o,MediaStreamTrackEvent:W.o,MessageEvent:W.o,MIDIConnectionEvent:W.o,MIDIMessageEvent:W.o,MutationEvent:W.o,NotificationEvent:W.o,PageTransitionEvent:W.o,PaymentRequestEvent:W.o,PaymentRequestUpdateEvent:W.o,PopStateEvent:W.o,PresentationConnectionAvailableEvent:W.o,PresentationConnectionCloseEvent:W.o,ProgressEvent:W.o,PromiseRejectionEvent:W.o,PushEvent:W.o,RTCDataChannelEvent:W.o,RTCDTMFToneChangeEvent:W.o,RTCPeerConnectionIceEvent:W.o,RTCTrackEvent:W.o,SecurityPolicyViolationEvent:W.o,SensorErrorEvent:W.o,SpeechRecognitionError:W.o,SpeechRecognitionEvent:W.o,SpeechSynthesisEvent:W.o,StorageEvent:W.o,SyncEvent:W.o,TrackEvent:W.o,TransitionEvent:W.o,WebKitTransitionEvent:W.o,VRDeviceEvent:W.o,VRDisplayEvent:W.o,VRSessionEvent:W.o,MojoInterfaceRequestEvent:W.o,ResourceProgressEvent:W.o,USBConnectionEvent:W.o,IDBVersionChangeEvent:W.o,AudioProcessingEvent:W.o,OfflineAudioCompletionEvent:W.o,WebGLContextEvent:W.o,Event:W.o,InputEvent:W.o,AbsoluteOrientationSensor:W.e,Accelerometer:W.e,AccessibleNode:W.e,AmbientLightSensor:W.e,Animation:W.e,ApplicationCache:W.e,DOMApplicationCache:W.e,OfflineResourceList:W.e,BackgroundFetchRegistration:W.e,BatteryManager:W.e,BroadcastChannel:W.e,CanvasCaptureMediaStreamTrack:W.e,DedicatedWorkerGlobalScope:W.e,EventSource:W.e,FileReader:W.e,FontFaceSet:W.e,Gyroscope:W.e,XMLHttpRequest:W.e,XMLHttpRequestEventTarget:W.e,XMLHttpRequestUpload:W.e,LinearAccelerationSensor:W.e,Magnetometer:W.e,MediaDevices:W.e,MediaKeySession:W.e,MediaQueryList:W.e,MediaRecorder:W.e,MediaSource:W.e,MediaStream:W.e,MediaStreamTrack:W.e,MessagePort:W.e,MIDIAccess:W.e,MIDIInput:W.e,MIDIOutput:W.e,MIDIPort:W.e,NetworkInformation:W.e,Notification:W.e,OffscreenCanvas:W.e,OrientationSensor:W.e,PaymentRequest:W.e,Performance:W.e,PermissionStatus:W.e,PresentationAvailability:W.e,PresentationConnection:W.e,PresentationConnectionList:W.e,PresentationRequest:W.e,RelativeOrientationSensor:W.e,RemotePlayback:W.e,RTCDataChannel:W.e,DataChannel:W.e,RTCDTMFSender:W.e,RTCPeerConnection:W.e,webkitRTCPeerConnection:W.e,mozRTCPeerConnection:W.e,ScreenOrientation:W.e,Sensor:W.e,ServiceWorker:W.e,ServiceWorkerContainer:W.e,ServiceWorkerGlobalScope:W.e,ServiceWorkerRegistration:W.e,SharedWorker:W.e,SharedWorkerGlobalScope:W.e,SpeechRecognition:W.e,SpeechSynthesis:W.e,SpeechSynthesisUtterance:W.e,VR:W.e,VRDevice:W.e,VRDisplay:W.e,VRSession:W.e,VisualViewport:W.e,WebSocket:W.e,Worker:W.e,WorkerGlobalScope:W.e,WorkerPerformance:W.e,BluetoothDevice:W.e,BluetoothRemoteGATTCharacteristic:W.e,Clipboard:W.e,MojoInterfaceInterceptor:W.e,USB:W.e,IDBDatabase:W.e,IDBOpenDBRequest:W.e,IDBVersionChangeRequest:W.e,IDBRequest:W.e,IDBTransaction:W.e,AnalyserNode:W.e,RealtimeAnalyserNode:W.e,AudioBufferSourceNode:W.e,AudioDestinationNode:W.e,AudioNode:W.e,AudioScheduledSourceNode:W.e,AudioWorkletNode:W.e,BiquadFilterNode:W.e,ChannelMergerNode:W.e,AudioChannelMerger:W.e,ChannelSplitterNode:W.e,AudioChannelSplitter:W.e,ConstantSourceNode:W.e,ConvolverNode:W.e,DelayNode:W.e,DynamicsCompressorNode:W.e,GainNode:W.e,AudioGainNode:W.e,IIRFilterNode:W.e,MediaElementAudioSourceNode:W.e,MediaStreamAudioDestinationNode:W.e,MediaStreamAudioSourceNode:W.e,OscillatorNode:W.e,Oscillator:W.e,PannerNode:W.e,AudioPannerNode:W.e,webkitAudioPannerNode:W.e,ScriptProcessorNode:W.e,JavaScriptAudioNode:W.e,StereoPannerNode:W.e,WaveShaperNode:W.e,EventTarget:W.e,File:W.aO,FileList:W.fO,FileWriter:W.fP,HTMLFormElement:W.fT,Gamepad:W.aP,HTMLHeadElement:W.du,History:W.fY,HTMLCollection:W.bS,HTMLFormControlsCollection:W.bS,HTMLOptionsCollection:W.bS,HTMLDocument:W.dv,ImageData:W.bw,HTMLImageElement:W.cp,KeyboardEvent:W.aT,Location:W.dF,HTMLAudioElement:W.ct,HTMLMediaElement:W.ct,MediaList:W.hm,MIDIInputMap:W.hn,MIDIOutputMap:W.hp,MimeType:W.aW,MimeTypeArray:W.hr,PointerEvent:W.aa,MouseEvent:W.aa,DragEvent:W.aa,DocumentFragment:W.D,ShadowRoot:W.D,DocumentType:W.D,Node:W.D,NodeList:W.cx,RadioNodeList:W.cx,Plugin:W.aY,PluginArray:W.hH,Range:W.dT,RTCStatsReport:W.hR,HTMLSelectElement:W.hU,SourceBuffer:W.aZ,SourceBufferList:W.i2,SpeechGrammar:W.b_,SpeechGrammarList:W.i3,SpeechRecognitionResult:W.b0,Storage:W.i6,CSSStyleSheet:W.aG,StyleSheet:W.aG,HTMLTableCellElement:W.c_,HTMLTableDataCellElement:W.c_,HTMLTableHeaderCellElement:W.c_,HTMLTableElement:W.e0,HTMLTableRowElement:W.e1,HTMLTableSectionElement:W.id,HTMLTemplateElement:W.cG,TextTrack:W.b1,TextTrackCue:W.aH,VTTCue:W.aH,TextTrackCueList:W.ig,TextTrackList:W.ih,TimeRanges:W.io,Touch:W.b3,TouchEvent:W.aI,TouchList:W.is,TrackDefaultList:W.it,CompositionEvent:W.bD,FocusEvent:W.bD,TextEvent:W.bD,UIEvent:W.bD,URL:W.iJ,HTMLVideoElement:W.iW,VideoTrackList:W.iX,WheelEvent:W.b6,Window:W.cT,DOMWindow:W.cT,Attr:W.cU,CSSRuleList:W.j4,ClientRect:W.ep,DOMRect:W.ep,GamepadList:W.ji,NamedNodeMap:W.eH,MozNamedAttrMap:W.eH,SpeechRecognitionResultList:W.jv,StyleSheetList:W.jw,SVGLength:P.ba,SVGLengthList:P.h7,SVGNumber:P.bd,SVGNumberList:P.hC,SVGPointList:P.hJ,SVGScriptElement:P.cA,SVGStringList:P.ic,SVGAElement:P.p,SVGAnimateElement:P.p,SVGAnimateMotionElement:P.p,SVGAnimateTransformElement:P.p,SVGAnimationElement:P.p,SVGCircleElement:P.p,SVGClipPathElement:P.p,SVGDefsElement:P.p,SVGDescElement:P.p,SVGDiscardElement:P.p,SVGEllipseElement:P.p,SVGFEBlendElement:P.p,SVGFEColorMatrixElement:P.p,SVGFEComponentTransferElement:P.p,SVGFECompositeElement:P.p,SVGFEConvolveMatrixElement:P.p,SVGFEDiffuseLightingElement:P.p,SVGFEDisplacementMapElement:P.p,SVGFEDistantLightElement:P.p,SVGFEFloodElement:P.p,SVGFEFuncAElement:P.p,SVGFEFuncBElement:P.p,SVGFEFuncGElement:P.p,SVGFEFuncRElement:P.p,SVGFEGaussianBlurElement:P.p,SVGFEImageElement:P.p,SVGFEMergeElement:P.p,SVGFEMergeNodeElement:P.p,SVGFEMorphologyElement:P.p,SVGFEOffsetElement:P.p,SVGFEPointLightElement:P.p,SVGFESpecularLightingElement:P.p,SVGFESpotLightElement:P.p,SVGFETileElement:P.p,SVGFETurbulenceElement:P.p,SVGFilterElement:P.p,SVGForeignObjectElement:P.p,SVGGElement:P.p,SVGGeometryElement:P.p,SVGGraphicsElement:P.p,SVGImageElement:P.p,SVGLineElement:P.p,SVGLinearGradientElement:P.p,SVGMarkerElement:P.p,SVGMaskElement:P.p,SVGMetadataElement:P.p,SVGPathElement:P.p,SVGPatternElement:P.p,SVGPolygonElement:P.p,SVGPolylineElement:P.p,SVGRadialGradientElement:P.p,SVGRectElement:P.p,SVGSetElement:P.p,SVGStopElement:P.p,SVGStyleElement:P.p,SVGSVGElement:P.p,SVGSwitchElement:P.p,SVGSymbolElement:P.p,SVGTSpanElement:P.p,SVGTextContentElement:P.p,SVGTextElement:P.p,SVGTextPathElement:P.p,SVGTextPositioningElement:P.p,SVGTitleElement:P.p,SVGUseElement:P.p,SVGViewElement:P.p,SVGGradientElement:P.p,SVGComponentTransferFunctionElement:P.p,SVGFEDropShadowElement:P.p,SVGMPathElement:P.p,SVGElement:P.p,SVGTransform:P.bh,SVGTransformList:P.iu,AudioBuffer:P.fl,AudioParamMap:P.fm,AudioTrackList:P.fo,AudioContext:P.bL,webkitAudioContext:P.bL,BaseAudioContext:P.bL,OfflineAudioContext:P.hD,WebGLBuffer:P.dg,WebGLFramebuffer:P.dt,WebGLProgram:P.dS,WebGL2RenderingContext:P.bZ,WebGLShader:P.dV,WebGLTexture:P.e2,WebGLUniformLocation:P.ec,SQLResultSetRowList:P.i4})
hunkHelpers.setOrUpdateLeafTags({ArrayBuffer:true,AnimationEffectReadOnly:true,AnimationEffectTiming:true,AnimationEffectTimingReadOnly:true,AnimationTimeline:true,AnimationWorkletGlobalScope:true,AuthenticatorAssertionResponse:true,AuthenticatorAttestationResponse:true,AuthenticatorResponse:true,BackgroundFetchFetch:true,BackgroundFetchManager:true,BackgroundFetchSettledFetch:true,BarProp:true,BarcodeDetector:true,BluetoothRemoteGATTDescriptor:true,Body:true,BudgetState:true,CacheStorage:true,CanvasGradient:true,CanvasPattern:true,Client:true,Clients:true,CookieStore:true,Coordinates:true,Credential:true,CredentialUserData:true,CredentialsContainer:true,Crypto:true,CryptoKey:true,CSS:true,CSSVariableReferenceValue:true,CustomElementRegistry:true,DataTransfer:true,DataTransferItem:true,DeprecatedStorageInfo:true,DeprecatedStorageQuota:true,DeprecationReport:true,DetectedBarcode:true,DetectedFace:true,DetectedText:true,DeviceAcceleration:true,DeviceRotationRate:true,DirectoryEntry:true,DirectoryReader:true,DocumentOrShadowRoot:true,DocumentTimeline:true,DOMError:true,Iterator:true,DOMMatrix:true,DOMMatrixReadOnly:true,DOMParser:true,DOMPoint:true,DOMPointReadOnly:true,DOMQuad:true,DOMStringMap:true,Entry:true,External:true,FaceDetector:true,FederatedCredential:true,FileEntry:true,DOMFileSystem:true,FontFace:true,FontFaceSource:true,FormData:true,GamepadButton:true,GamepadPose:true,Geolocation:true,Position:true,Headers:true,HTMLHyperlinkElementUtils:true,IdleDeadline:true,ImageBitmap:true,ImageBitmapRenderingContext:true,ImageCapture:true,InputDeviceCapabilities:true,IntersectionObserver:true,IntersectionObserverEntry:true,InterventionReport:true,KeyframeEffect:true,KeyframeEffectReadOnly:true,MediaCapabilities:true,MediaCapabilitiesInfo:true,MediaDeviceInfo:true,MediaError:true,MediaKeyStatusMap:true,MediaKeySystemAccess:true,MediaKeys:true,MediaKeysPolicy:true,MediaMetadata:true,MediaSession:true,MediaSettingsRange:true,MemoryInfo:true,MessageChannel:true,Metadata:true,MutationObserver:true,WebKitMutationObserver:true,MutationRecord:true,NavigationPreloadManager:true,Navigator:true,NavigatorAutomationInformation:true,NavigatorConcurrentHardware:true,NavigatorCookies:true,NavigatorUserMediaError:true,NodeFilter:true,NodeIterator:true,NonDocumentTypeChildNode:true,NonElementParentNode:true,NoncedElement:true,OffscreenCanvasRenderingContext2D:true,OverconstrainedError:true,PaintRenderingContext2D:true,PaintSize:true,PaintWorkletGlobalScope:true,PasswordCredential:true,Path2D:true,PaymentAddress:true,PaymentInstruments:true,PaymentManager:true,PaymentResponse:true,PerformanceEntry:true,PerformanceLongTaskTiming:true,PerformanceMark:true,PerformanceMeasure:true,PerformanceNavigation:true,PerformanceNavigationTiming:true,PerformanceObserver:true,PerformanceObserverEntryList:true,PerformancePaintTiming:true,PerformanceResourceTiming:true,PerformanceServerTiming:true,PerformanceTiming:true,Permissions:true,PhotoCapabilities:true,PositionError:true,Presentation:true,PresentationReceiver:true,PublicKeyCredential:true,PushManager:true,PushMessageData:true,PushSubscription:true,PushSubscriptionOptions:true,RelatedApplication:true,ReportBody:true,ReportingObserver:true,ResizeObserver:true,ResizeObserverEntry:true,RTCCertificate:true,RTCIceCandidate:true,mozRTCIceCandidate:true,RTCLegacyStatsReport:true,RTCRtpContributingSource:true,RTCRtpReceiver:true,RTCRtpSender:true,RTCSessionDescription:true,mozRTCSessionDescription:true,RTCStatsResponse:true,Screen:true,ScrollState:true,ScrollTimeline:true,Selection:true,SharedArrayBuffer:true,SpeechRecognitionAlternative:true,SpeechSynthesisVoice:true,StaticRange:true,StorageManager:true,StyleMedia:true,StylePropertyMap:true,StylePropertyMapReadonly:true,SyncManager:true,TaskAttributionTiming:true,TextDetector:true,TextMetrics:true,TrackDefault:true,TreeWalker:true,TrustedHTML:true,TrustedScriptURL:true,TrustedURL:true,UnderlyingSourceBase:true,URLSearchParams:true,VRCoordinateSystem:true,VRDisplayCapabilities:true,VREyeParameters:true,VRFrameData:true,VRFrameOfReference:true,VRPose:true,VRStageBounds:true,VRStageBoundsPoint:true,VRStageParameters:true,ValidityState:true,VideoPlaybackQuality:true,VideoTrack:true,VTTRegion:true,WindowClient:true,WorkletAnimation:true,WorkletGlobalScope:true,XPathEvaluator:true,XPathExpression:true,XPathNSResolver:true,XPathResult:true,XMLSerializer:true,XSLTProcessor:true,Bluetooth:true,BluetoothCharacteristicProperties:true,BluetoothRemoteGATTServer:true,BluetoothRemoteGATTService:true,BluetoothUUID:true,BudgetService:true,Cache:true,DOMFileSystemSync:true,DirectoryEntrySync:true,DirectoryReaderSync:true,EntrySync:true,FileEntrySync:true,FileReaderSync:true,FileWriterSync:true,HTMLAllCollection:true,Mojo:true,MojoHandle:true,MojoWatcher:true,NFC:true,PagePopupController:true,Report:true,Request:true,Response:true,SubtleCrypto:true,USBAlternateInterface:true,USBConfiguration:true,USBDevice:true,USBEndpoint:true,USBInTransferResult:true,USBInterface:true,USBIsochronousInTransferPacket:true,USBIsochronousInTransferResult:true,USBIsochronousOutTransferPacket:true,USBIsochronousOutTransferResult:true,USBOutTransferResult:true,WorkerLocation:true,WorkerNavigator:true,Worklet:true,IDBCursor:true,IDBCursorWithValue:true,IDBFactory:true,IDBIndex:true,IDBKeyRange:true,IDBObjectStore:true,IDBObservation:true,IDBObserver:true,IDBObserverChanges:true,SVGAngle:true,SVGAnimatedAngle:true,SVGAnimatedBoolean:true,SVGAnimatedEnumeration:true,SVGAnimatedInteger:true,SVGAnimatedLength:true,SVGAnimatedLengthList:true,SVGAnimatedNumber:true,SVGAnimatedNumberList:true,SVGAnimatedPreserveAspectRatio:true,SVGAnimatedRect:true,SVGAnimatedString:true,SVGAnimatedTransformList:true,SVGMatrix:true,SVGPoint:true,SVGPreserveAspectRatio:true,SVGRect:true,SVGUnitTypes:true,AudioListener:true,AudioParam:true,AudioTrack:true,AudioWorkletGlobalScope:true,AudioWorkletProcessor:true,PeriodicWave:true,WebGLActiveInfo:true,ANGLEInstancedArrays:true,ANGLE_instanced_arrays:true,WebGLCanvas:true,WebGLColorBufferFloat:true,WebGLCompressedTextureASTC:true,WebGLCompressedTextureATC:true,WEBGL_compressed_texture_atc:true,WebGLCompressedTextureETC1:true,WEBGL_compressed_texture_etc1:true,WebGLCompressedTextureETC:true,WebGLCompressedTexturePVRTC:true,WEBGL_compressed_texture_pvrtc:true,WebGLCompressedTextureS3TC:true,WEBGL_compressed_texture_s3tc:true,WebGLCompressedTextureS3TCsRGB:true,WebGLDebugRendererInfo:true,WEBGL_debug_renderer_info:true,WebGLDebugShaders:true,WEBGL_debug_shaders:true,WebGLDepthTexture:true,WEBGL_depth_texture:true,WebGLDrawBuffers:true,WEBGL_draw_buffers:true,EXTsRGB:true,EXT_sRGB:true,EXTBlendMinMax:true,EXT_blend_minmax:true,EXTColorBufferFloat:true,EXTColorBufferHalfFloat:true,EXTDisjointTimerQuery:true,EXTDisjointTimerQueryWebGL2:true,EXTFragDepth:true,EXT_frag_depth:true,EXTShaderTextureLOD:true,EXT_shader_texture_lod:true,EXTTextureFilterAnisotropic:true,EXT_texture_filter_anisotropic:true,WebGLGetBufferSubDataAsync:true,WebGLLoseContext:true,WebGLExtensionLoseContext:true,WEBGL_lose_context:true,OESElementIndexUint:true,OES_element_index_uint:true,OESStandardDerivatives:true,OES_standard_derivatives:true,OESTextureFloat:true,OES_texture_float:true,OESTextureFloatLinear:true,OES_texture_float_linear:true,OESTextureHalfFloat:true,OES_texture_half_float:true,OESTextureHalfFloatLinear:true,OES_texture_half_float_linear:true,OESVertexArrayObject:true,OES_vertex_array_object:true,WebGLQuery:true,WebGLRenderbuffer:true,WebGLRenderingContext:true,WebGLSampler:true,WebGLShaderPrecisionFormat:true,WebGLSync:true,WebGLTimerQueryEXT:true,WebGLTransformFeedback:true,WebGLVertexArrayObject:true,WebGLVertexArrayObjectOES:true,WebGL:true,WebGL2RenderingContextBase:true,Database:true,SQLError:true,SQLResultSet:true,SQLTransaction:true,DataView:true,ArrayBufferView:false,Float32Array:true,Float64Array:true,Int16Array:true,Int32Array:true,Int8Array:true,Uint16Array:true,Uint32Array:true,Uint8ClampedArray:true,CanvasPixelArray:true,Uint8Array:false,HTMLBRElement:true,HTMLButtonElement:true,HTMLContentElement:true,HTMLDListElement:true,HTMLDataElement:true,HTMLDataListElement:true,HTMLDetailsElement:true,HTMLDialogElement:true,HTMLEmbedElement:true,HTMLFieldSetElement:true,HTMLHRElement:true,HTMLHeadingElement:true,HTMLHtmlElement:true,HTMLIFrameElement:true,HTMLInputElement:true,HTMLLIElement:true,HTMLLabelElement:true,HTMLLegendElement:true,HTMLLinkElement:true,HTMLMapElement:true,HTMLMenuElement:true,HTMLMetaElement:true,HTMLMeterElement:true,HTMLModElement:true,HTMLOListElement:true,HTMLObjectElement:true,HTMLOptGroupElement:true,HTMLOptionElement:true,HTMLOutputElement:true,HTMLParagraphElement:true,HTMLParamElement:true,HTMLPictureElement:true,HTMLPreElement:true,HTMLProgressElement:true,HTMLQuoteElement:true,HTMLScriptElement:true,HTMLShadowElement:true,HTMLSlotElement:true,HTMLSourceElement:true,HTMLSpanElement:true,HTMLStyleElement:true,HTMLTableCaptionElement:true,HTMLTableColElement:true,HTMLTextAreaElement:true,HTMLTimeElement:true,HTMLTitleElement:true,HTMLTrackElement:true,HTMLUListElement:true,HTMLUnknownElement:true,HTMLDirectoryElement:true,HTMLFontElement:true,HTMLFrameElement:true,HTMLFrameSetElement:true,HTMLMarqueeElement:true,HTMLElement:false,AccessibleNodeList:true,HTMLAnchorElement:true,HTMLAreaElement:true,HTMLBaseElement:true,Blob:false,HTMLBodyElement:true,HTMLCanvasElement:true,CanvasRenderingContext2D:true,CDATASection:true,CharacterData:true,Comment:true,ProcessingInstruction:true,Text:true,CSSNumericValue:true,CSSUnitValue:true,CSSPerspective:true,CSSCharsetRule:true,CSSConditionRule:true,CSSFontFaceRule:true,CSSGroupingRule:true,CSSImportRule:true,CSSKeyframeRule:true,MozCSSKeyframeRule:true,WebKitCSSKeyframeRule:true,CSSKeyframesRule:true,MozCSSKeyframesRule:true,WebKitCSSKeyframesRule:true,CSSMediaRule:true,CSSNamespaceRule:true,CSSPageRule:true,CSSRule:true,CSSStyleRule:true,CSSSupportsRule:true,CSSViewportRule:true,CSSStyleDeclaration:true,MSStyleCSSProperties:true,CSS2Properties:true,CSSImageValue:true,CSSKeywordValue:true,CSSPositionValue:true,CSSResourceValue:true,CSSURLImageValue:true,CSSStyleValue:false,CSSMatrixComponent:true,CSSRotation:true,CSSScale:true,CSSSkew:true,CSSTranslation:true,CSSTransformComponent:false,CSSTransformValue:true,CSSUnparsedValue:true,DataTransferItemList:true,HTMLDivElement:true,XMLDocument:true,Document:false,DOMException:true,DOMImplementation:true,ClientRectList:true,DOMRectList:true,DOMRectReadOnly:false,DOMStringList:true,DOMTokenList:true,Element:false,AbortPaymentEvent:true,AnimationEvent:true,AnimationPlaybackEvent:true,ApplicationCacheErrorEvent:true,BackgroundFetchClickEvent:true,BackgroundFetchEvent:true,BackgroundFetchFailEvent:true,BackgroundFetchedEvent:true,BeforeInstallPromptEvent:true,BeforeUnloadEvent:true,BlobEvent:true,CanMakePaymentEvent:true,ClipboardEvent:true,CloseEvent:true,CustomEvent:true,DeviceMotionEvent:true,DeviceOrientationEvent:true,ErrorEvent:true,ExtendableEvent:true,ExtendableMessageEvent:true,FetchEvent:true,FontFaceSetLoadEvent:true,ForeignFetchEvent:true,GamepadEvent:true,HashChangeEvent:true,InstallEvent:true,MediaEncryptedEvent:true,MediaKeyMessageEvent:true,MediaQueryListEvent:true,MediaStreamEvent:true,MediaStreamTrackEvent:true,MessageEvent:true,MIDIConnectionEvent:true,MIDIMessageEvent:true,MutationEvent:true,NotificationEvent:true,PageTransitionEvent:true,PaymentRequestEvent:true,PaymentRequestUpdateEvent:true,PopStateEvent:true,PresentationConnectionAvailableEvent:true,PresentationConnectionCloseEvent:true,ProgressEvent:true,PromiseRejectionEvent:true,PushEvent:true,RTCDataChannelEvent:true,RTCDTMFToneChangeEvent:true,RTCPeerConnectionIceEvent:true,RTCTrackEvent:true,SecurityPolicyViolationEvent:true,SensorErrorEvent:true,SpeechRecognitionError:true,SpeechRecognitionEvent:true,SpeechSynthesisEvent:true,StorageEvent:true,SyncEvent:true,TrackEvent:true,TransitionEvent:true,WebKitTransitionEvent:true,VRDeviceEvent:true,VRDisplayEvent:true,VRSessionEvent:true,MojoInterfaceRequestEvent:true,ResourceProgressEvent:true,USBConnectionEvent:true,IDBVersionChangeEvent:true,AudioProcessingEvent:true,OfflineAudioCompletionEvent:true,WebGLContextEvent:true,Event:false,InputEvent:false,AbsoluteOrientationSensor:true,Accelerometer:true,AccessibleNode:true,AmbientLightSensor:true,Animation:true,ApplicationCache:true,DOMApplicationCache:true,OfflineResourceList:true,BackgroundFetchRegistration:true,BatteryManager:true,BroadcastChannel:true,CanvasCaptureMediaStreamTrack:true,DedicatedWorkerGlobalScope:true,EventSource:true,FileReader:true,FontFaceSet:true,Gyroscope:true,XMLHttpRequest:true,XMLHttpRequestEventTarget:true,XMLHttpRequestUpload:true,LinearAccelerationSensor:true,Magnetometer:true,MediaDevices:true,MediaKeySession:true,MediaQueryList:true,MediaRecorder:true,MediaSource:true,MediaStream:true,MediaStreamTrack:true,MessagePort:true,MIDIAccess:true,MIDIInput:true,MIDIOutput:true,MIDIPort:true,NetworkInformation:true,Notification:true,OffscreenCanvas:true,OrientationSensor:true,PaymentRequest:true,Performance:true,PermissionStatus:true,PresentationAvailability:true,PresentationConnection:true,PresentationConnectionList:true,PresentationRequest:true,RelativeOrientationSensor:true,RemotePlayback:true,RTCDataChannel:true,DataChannel:true,RTCDTMFSender:true,RTCPeerConnection:true,webkitRTCPeerConnection:true,mozRTCPeerConnection:true,ScreenOrientation:true,Sensor:true,ServiceWorker:true,ServiceWorkerContainer:true,ServiceWorkerGlobalScope:true,ServiceWorkerRegistration:true,SharedWorker:true,SharedWorkerGlobalScope:true,SpeechRecognition:true,SpeechSynthesis:true,SpeechSynthesisUtterance:true,VR:true,VRDevice:true,VRDisplay:true,VRSession:true,VisualViewport:true,WebSocket:true,Worker:true,WorkerGlobalScope:true,WorkerPerformance:true,BluetoothDevice:true,BluetoothRemoteGATTCharacteristic:true,Clipboard:true,MojoInterfaceInterceptor:true,USB:true,IDBDatabase:true,IDBOpenDBRequest:true,IDBVersionChangeRequest:true,IDBRequest:true,IDBTransaction:true,AnalyserNode:true,RealtimeAnalyserNode:true,AudioBufferSourceNode:true,AudioDestinationNode:true,AudioNode:true,AudioScheduledSourceNode:true,AudioWorkletNode:true,BiquadFilterNode:true,ChannelMergerNode:true,AudioChannelMerger:true,ChannelSplitterNode:true,AudioChannelSplitter:true,ConstantSourceNode:true,ConvolverNode:true,DelayNode:true,DynamicsCompressorNode:true,GainNode:true,AudioGainNode:true,IIRFilterNode:true,MediaElementAudioSourceNode:true,MediaStreamAudioDestinationNode:true,MediaStreamAudioSourceNode:true,OscillatorNode:true,Oscillator:true,PannerNode:true,AudioPannerNode:true,webkitAudioPannerNode:true,ScriptProcessorNode:true,JavaScriptAudioNode:true,StereoPannerNode:true,WaveShaperNode:true,EventTarget:false,File:true,FileList:true,FileWriter:true,HTMLFormElement:true,Gamepad:true,HTMLHeadElement:true,History:true,HTMLCollection:true,HTMLFormControlsCollection:true,HTMLOptionsCollection:true,HTMLDocument:true,ImageData:true,HTMLImageElement:true,KeyboardEvent:true,Location:true,HTMLAudioElement:true,HTMLMediaElement:false,MediaList:true,MIDIInputMap:true,MIDIOutputMap:true,MimeType:true,MimeTypeArray:true,PointerEvent:true,MouseEvent:false,DragEvent:false,DocumentFragment:true,ShadowRoot:true,DocumentType:true,Node:false,NodeList:true,RadioNodeList:true,Plugin:true,PluginArray:true,Range:true,RTCStatsReport:true,HTMLSelectElement:true,SourceBuffer:true,SourceBufferList:true,SpeechGrammar:true,SpeechGrammarList:true,SpeechRecognitionResult:true,Storage:true,CSSStyleSheet:true,StyleSheet:true,HTMLTableCellElement:true,HTMLTableDataCellElement:true,HTMLTableHeaderCellElement:true,HTMLTableElement:true,HTMLTableRowElement:true,HTMLTableSectionElement:true,HTMLTemplateElement:true,TextTrack:true,TextTrackCue:true,VTTCue:true,TextTrackCueList:true,TextTrackList:true,TimeRanges:true,Touch:true,TouchEvent:true,TouchList:true,TrackDefaultList:true,CompositionEvent:true,FocusEvent:true,TextEvent:true,UIEvent:false,URL:true,HTMLVideoElement:true,VideoTrackList:true,WheelEvent:true,Window:true,DOMWindow:true,Attr:true,CSSRuleList:true,ClientRect:true,DOMRect:true,GamepadList:true,NamedNodeMap:true,MozNamedAttrMap:true,SpeechRecognitionResultList:true,StyleSheetList:true,SVGLength:true,SVGLengthList:true,SVGNumber:true,SVGNumberList:true,SVGPointList:true,SVGScriptElement:true,SVGStringList:true,SVGAElement:true,SVGAnimateElement:true,SVGAnimateMotionElement:true,SVGAnimateTransformElement:true,SVGAnimationElement:true,SVGCircleElement:true,SVGClipPathElement:true,SVGDefsElement:true,SVGDescElement:true,SVGDiscardElement:true,SVGEllipseElement:true,SVGFEBlendElement:true,SVGFEColorMatrixElement:true,SVGFEComponentTransferElement:true,SVGFECompositeElement:true,SVGFEConvolveMatrixElement:true,SVGFEDiffuseLightingElement:true,SVGFEDisplacementMapElement:true,SVGFEDistantLightElement:true,SVGFEFloodElement:true,SVGFEFuncAElement:true,SVGFEFuncBElement:true,SVGFEFuncGElement:true,SVGFEFuncRElement:true,SVGFEGaussianBlurElement:true,SVGFEImageElement:true,SVGFEMergeElement:true,SVGFEMergeNodeElement:true,SVGFEMorphologyElement:true,SVGFEOffsetElement:true,SVGFEPointLightElement:true,SVGFESpecularLightingElement:true,SVGFESpotLightElement:true,SVGFETileElement:true,SVGFETurbulenceElement:true,SVGFilterElement:true,SVGForeignObjectElement:true,SVGGElement:true,SVGGeometryElement:true,SVGGraphicsElement:true,SVGImageElement:true,SVGLineElement:true,SVGLinearGradientElement:true,SVGMarkerElement:true,SVGMaskElement:true,SVGMetadataElement:true,SVGPathElement:true,SVGPatternElement:true,SVGPolygonElement:true,SVGPolylineElement:true,SVGRadialGradientElement:true,SVGRectElement:true,SVGSetElement:true,SVGStopElement:true,SVGStyleElement:true,SVGSVGElement:true,SVGSwitchElement:true,SVGSymbolElement:true,SVGTSpanElement:true,SVGTextContentElement:true,SVGTextElement:true,SVGTextPathElement:true,SVGTextPositioningElement:true,SVGTitleElement:true,SVGUseElement:true,SVGViewElement:true,SVGGradientElement:true,SVGComponentTransferFunctionElement:true,SVGFEDropShadowElement:true,SVGMPathElement:true,SVGElement:false,SVGTransform:true,SVGTransformList:true,AudioBuffer:true,AudioParamMap:true,AudioTrackList:true,AudioContext:true,webkitAudioContext:true,BaseAudioContext:false,OfflineAudioContext:true,WebGLBuffer:true,WebGLFramebuffer:true,WebGLProgram:true,WebGL2RenderingContext:true,WebGLShader:true,WebGLTexture:true,WebGLUniformLocation:true,SQLResultSetRowList:true})
H.dL.$nativeSuperclassTag="ArrayBufferView"
H.cW.$nativeSuperclassTag="ArrayBufferView"
H.cX.$nativeSuperclassTag="ArrayBufferView"
H.cv.$nativeSuperclassTag="ArrayBufferView"
H.cY.$nativeSuperclassTag="ArrayBufferView"
H.cZ.$nativeSuperclassTag="ArrayBufferView"
H.dM.$nativeSuperclassTag="ArrayBufferView"
W.d_.$nativeSuperclassTag="EventTarget"
W.d0.$nativeSuperclassTag="EventTarget"
W.d1.$nativeSuperclassTag="EventTarget"
W.d2.$nativeSuperclassTag="EventTarget"})()
convertAllToFastObject(w)
convertToFastObject($);(function(a){if(typeof document==="undefined"){a(null)
return}if(typeof document.currentScript!='undefined'){a(document.currentScript)
return}var u=document.scripts
function onLoad(b){for(var s=0;s<u.length;++s)u[s].removeEventListener("load",onLoad,false)
a(b.target)}for(var t=0;t<u.length;++t)u[t].addEventListener("load",onLoad,false)})(function(a){v.currentScript=a
if(typeof dartMainRunner==="function")dartMainRunner(Q.lz,[])
else Q.lz([])})})()
//# sourceMappingURL=test.dart.js.map
