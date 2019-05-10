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
function tearOffGetter(a,b,c,d,e){return e?new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+d+y+++"(receiver) {"+"if (c === null) c = "+"H.kr"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, true, name);"+"return new c(this, funcs[0], receiver, name);"+"}")(a,b,c,d,H,null):new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+d+y+++"() {"+"if (c === null) c = "+"H.kr"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, false, name);"+"return new c(this, funcs[0], null, name);"+"}")(a,b,c,d,H,null)}function tearOff(a,b,c,d,e,f){var u=null
return d?function(){if(u===null)u=H.kr(this,a,b,c,true,false,e).prototype
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
if(w[u][a])return w[u][a]}}var C={},H={kc:function kc(a){this.a=a},
h2:function(){return new P.c2("No element")},
mm:function(){return new P.c2("Too many elements")},
ml:function(){return new P.c2("Too few elements")},
q:function q(a){this.a=a},
fG:function fG(){},
bW:function bW(){},
ct:function ct(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=null
_.$ti=d},
hg:function hg(a,b,c){this.a=a
this.b=b
this.$ti=c},
hh:function hh(a,b,c){var _=this
_.a=null
_.b=a
_.c=b
_.$ti=c},
hi:function hi(a,b,c){this.a=a
this.b=b
this.$ti=c},
cT:function cT(a,b,c){this.a=a
this.b=b
this.$ti=c},
j2:function j2(a,b,c){this.a=a
this.b=b
this.$ti=c},
bT:function bT(){},
ed:function ed(){},
ec:function ec(){},
cd:function(a){var u,t
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
u=J.aL(a)
if(typeof u!=="string")throw H.f(H.ba(a))
return u},
mB:function(a){var u,t,s
u=a.$reflectionInfo
if(u==null)return
u=J.h3(u)
t=u[0]
s=u[1]
return new H.hO(a,u,(t&2)===2,t>>2,s>>1,(s&1)===1,u[2])},
cB:function(a){var u=a.$identityHash
if(u==null){u=Math.random()*0x3fffffff|0
a.$identityHash=u}return u},
c_:function(a){return H.ms(a)+H.ko(H.bJ(a),0,null)},
ms:function(a){var u,t,s,r,q,p,o,n,m
u=J.a_(a)
t=u.constructor
if(typeof t=="function"){s=t.name
r=typeof s==="string"?s:null}else r=null
q=r==null
if(q||u===C.N||!!u.$ibF){p=C.B(a)
if(q)r=p
if(p==="Object"){o=a.constructor
if(typeof o=="function"){n=String(o).match(/^\s*function\s*([\w$]*)\s*\(/)
m=n==null?null:n[1]
if(typeof m==="string"&&/^\w+$/.test(m))r=m}}return r}r=r
return H.cd(r.length>1&&C.j.aJ(r,0)===36?C.j.bf(r,1):r)},
l2:function(a){var u,t,s,r,q
u=a.length
if(u<=500)return String.fromCharCode.apply(null,a)
for(t="",s=0;s<u;s=r){r=s+500
q=r<u?r:u
t+=String.fromCharCode.apply(null,a.slice(s,q))}return t},
mA:function(a){var u,t,s,r
u=H.c([],[P.B])
for(t=a.length,s=0;s<a.length;a.length===t||(0,H.C)(a),++s){r=a[s]
if(typeof r!=="number"||Math.floor(r)!==r)throw H.f(H.ba(r))
if(r<=65535)C.a.h(u,r)
else if(r<=1114111){C.a.h(u,55296+(C.d.bl(r-65536,10)&1023))
C.a.h(u,56320+(r&1023))}else throw H.f(H.ba(r))}return H.l2(u)},
l3:function(a){var u,t,s
for(u=a.length,t=0;t<u;++t){s=a[t]
if(typeof s!=="number"||Math.floor(s)!==s)throw H.f(H.ba(s))
if(s<0)throw H.f(H.ba(s))
if(s>65535)return H.mA(a)}return H.l2(a)},
ke:function(a){var u
if(a<=65535)return String.fromCharCode(a)
if(a<=1114111){u=a-65536
return String.fromCharCode((55296|C.d.bl(u,10))>>>0,56320|u&1023)}throw H.f(P.aA(a,0,1114111,null,null))},
bZ:function(a){if(a.date===void 0)a.date=new Date(a.a)
return a.date},
mz:function(a){var u=H.bZ(a).getFullYear()+0
return u},
mx:function(a){var u=H.bZ(a).getMonth()+1
return u},
mt:function(a){var u=H.bZ(a).getDate()+0
return u},
mu:function(a){var u=H.bZ(a).getHours()+0
return u},
mw:function(a){var u=H.bZ(a).getMinutes()+0
return u},
my:function(a){var u=H.bZ(a).getSeconds()+0
return u},
mv:function(a){var u=H.bZ(a).getMilliseconds()+0
return u},
G:function(a){throw H.f(H.ba(a))},
j:function(a,b){if(a==null)J.bM(a)
throw H.f(H.c8(a,b))},
c8:function(a,b){var u,t
if(typeof b!=="number"||Math.floor(b)!==b)return new P.aE(!0,b,"index",null)
u=H.a9(J.bM(a))
if(!(b<0)){if(typeof u!=="number")return H.G(u)
t=b>=u}else t=!0
if(t)return P.W(b,a,"index",null,u)
return P.dT(b,"index",null)},
nb:function(a,b,c){if(a>c)return new P.c0(0,c,!0,a,"start","Invalid value")
if(b!=null)if(b<a||b>c)return new P.c0(a,c,!0,b,"end","Invalid value")
return new P.aE(!0,b,"end",null)},
ba:function(a){return new P.aE(!0,a,null,null)},
n6:function(a){if(typeof a!=="number")throw H.f(H.ba(a))
return a},
f:function(a){var u
if(a==null)a=new P.dO()
u=new Error()
u.dartException=a
if("defineProperty" in Object){Object.defineProperty(u,"message",{get:H.lJ})
u.name=""}else u.toString=H.lJ
return u},
lJ:function(){return J.aL(this.dartException)},
u:function(a){throw H.f(a)},
C:function(a){throw H.f(P.bu(a))},
b6:function(a){var u,t,s,r,q,p
a=a.replace(String({}),'$receiver$').replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
u=a.match(/\\\$[a-zA-Z]+\\\$/g)
if(u==null)u=H.c([],[P.h])
t=u.indexOf("\\$arguments\\$")
s=u.indexOf("\\$argumentsExpr\\$")
r=u.indexOf("\\$expr\\$")
q=u.indexOf("\\$method\\$")
p=u.indexOf("\\$receiver\\$")
return new H.iw(a.replace(new RegExp('\\\\\\$arguments\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$argumentsExpr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$expr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$method\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$receiver\\\\\\$','g'),'((?:x|[^x])*)'),t,s,r,q,p)},
ix:function(a){return function($expr$){var $argumentsExpr$='$arguments$'
try{$expr$.$method$($argumentsExpr$)}catch(u){return u.message}}(a)},
ld:function(a){return function($expr$){try{$expr$.$method$}catch(u){return u.message}}(a)},
kX:function(a,b){return new H.hE(a,b==null?null:b.method)},
kd:function(a,b){var u,t
u=b==null
t=u?null:b.method
return new H.h6(a,t,u?null:b.receiver)},
ay:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g
u=new H.k0(a)
if(a==null)return
if(typeof a!=="object")return a
if("dartException" in a)return u.$1(a.dartException)
else if(!("message" in a))return a
t=a.message
if("number" in a&&typeof a.number=="number"){s=a.number
r=s&65535
if((C.d.bl(s,16)&8191)===10)switch(r){case 438:return u.$1(H.kd(H.m(t)+" (Error "+r+")",null))
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
if(h!=null)return u.$1(H.kd(H.H(t),h))
else{h=p.ag(t)
if(h!=null){h.method="call"
return u.$1(H.kd(H.H(t),h))}else{h=o.ag(t)
if(h==null){h=n.ag(t)
if(h==null){h=m.ag(t)
if(h==null){h=l.ag(t)
if(h==null){h=k.ag(t)
if(h==null){h=n.ag(t)
if(h==null){h=j.ag(t)
if(h==null){h=i.ag(t)
g=h!=null}else g=!0}else g=!0}else g=!0}else g=!0}else g=!0}else g=!0}else g=!0
if(g)return u.$1(H.kX(H.H(t),h))}}return u.$1(new H.iJ(typeof t==="string"?t:""))}if(a instanceof RangeError){if(typeof t==="string"&&t.indexOf("call stack")!==-1)return new P.e_()
t=function(b){try{return String(b)}catch(f){}return null}(a)
return u.$1(new P.aE(!1,null,null,typeof t==="string"?t.replace(/^RangeError:\s*/,""):t))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof t==="string"&&t==="too much recursion")return new P.e_()
return a},
cb:function(a){var u
if(a==null)return new H.eS(a)
u=a.$cachedTrace
if(u!=null)return u
return a.$cachedTrace=new H.eS(a)},
nd:function(a,b){var u,t,s,r
u=a.length
for(t=0;t<u;t=r){s=t+1
r=s+1
b.Y(0,a[t],a[s])}return b},
nn:function(a,b,c,d,e,f){H.k(a,"$ibx")
switch(H.a9(b)){case 0:return a.$0()
case 1:return a.$1(c)
case 2:return a.$2(c,d)
case 3:return a.$3(c,d,e)
case 4:return a.$4(c,d,e,f)}throw H.f(P.r("Unsupported number of arguments for wrapped closure"))},
c7:function(a,b){var u
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
r=e?Object.create(new H.i8().constructor.prototype):Object.create(new H.cg(null,null,null,null).constructor.prototype)
r.$initialize=r.constructor
if(e)q=function static_tear_off(){this.$initialize()}
else{p=$.aM
if(typeof p!=="number")return p.p()
$.aM=p+1
p=new Function("a,b,c,d"+p,"this.$initialize(a,b,c,d"+p+")")
q=p}r.constructor=q
q.prototype=r
if(!e){o=H.kK(a,u,f)
o.$reflectionInfo=d}else{r.$static_name=g
o=u}if(typeof s=="number")n=function(h,a0){return function(){return h(a0)}}(H.nh,s)
else if(typeof s=="function")if(e)n=s
else{m=f?H.kI:H.k4
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
mb:function(a,b,c,d){var u=H.k4
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
if(t===0){r=$.aM
if(typeof r!=="number")return r.p()
$.aM=r+1
p="self"+r
r="return function(){var "+p+" = this."
q=$.ch
if(q==null){q=H.fp("self")
$.ch=q}return new Function(r+H.m(q)+";return "+p+"."+H.m(u)+"();}")()}o="abcdefghijklmnopqrstuvwxyz".split("").splice(0,t).join(",")
r=$.aM
if(typeof r!=="number")return r.p()
$.aM=r+1
o+=r
r="return function("+o+"){return this."
q=$.ch
if(q==null){q=H.fp("self")
$.ch=q}return new Function(r+H.m(q)+"."+H.m(u)+"("+o+");}")()},
mc:function(a,b,c,d){var u,t
u=H.k4
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
u=$.ch
if(u==null){u=H.fp("self")
$.ch=u}t=$.kH
if(t==null){t=H.fp("receiver")
$.kH=t}s=b.$stubName
r=b.length
q=a[s]
p=b==null?q==null:b===q
o=!p||r>=28
if(o)return H.mc(r,!p,s,b)
if(r===1){u="return function(){return this."+H.m(u)+"."+H.m(s)+"(this."+H.m(t)+");"
t=$.aM
if(typeof t!=="number")return t.p()
$.aM=t+1
return new Function(u+t+"}")()}n="abcdefghijklmnopqrstuvwxyz".split("").splice(0,r-1).join(",")
u="return function("+n+"){return this."+H.m(u)+"."+H.m(s)+"(this."+H.m(t)+", "+n+");"
t=$.aM
if(typeof t!=="number")return t.p()
$.aM=t+1
return new Function(u+t+"}")()},
kr:function(a,b,c,d,e,f,g){return H.me(a,b,H.a9(c),d,!!e,!!f,g)},
k4:function(a){return a.a},
kI:function(a){return a.c},
fp:function(a){var u,t,s,r,q
u=new H.cg("self","target","receiver","name")
t=J.h3(Object.getOwnPropertyNames(u))
for(s=t.length,r=0;r<s;++r){q=t[r]
if(u[q]===a)return q}},
H:function(a){if(a==null)return a
if(typeof a==="string")return a
throw H.f(H.aJ(a,"String"))},
oi:function(a){if(a==null)return a
if(typeof a==="number")return a
throw H.f(H.aJ(a,"double"))},
nt:function(a){if(a==null)return a
if(typeof a==="number")return a
throw H.f(H.aJ(a,"num"))},
kp:function(a){if(a==null)return a
if(typeof a==="boolean")return a
throw H.f(H.aJ(a,"bool"))},
a9:function(a){if(a==null)return a
if(typeof a==="number"&&Math.floor(a)===a)return a
throw H.f(H.aJ(a,"int"))},
lH:function(a,b){throw H.f(H.aJ(a,H.cd(H.H(b).substring(2))))},
nv:function(a,b){throw H.f(H.ma(a,H.cd(H.H(b).substring(2))))},
k:function(a,b){if(a==null)return a
if((typeof a==="object"||typeof a==="function")&&J.a_(a)[b])return a
H.lH(a,b)},
i:function(a,b){var u
if(a!=null)u=(typeof a==="object"||typeof a==="function")&&J.a_(a)[b]
else u=!0
if(u)return a
H.nv(a,b)},
kv:function(a){if(a==null)return a
if(!!J.a_(a).$ib)return a
throw H.f(H.aJ(a,"List<dynamic>"))},
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
fe:function(a,b){var u
if(a==null)return!1
if(typeof a=="function")return!0
u=H.lB(J.a_(a))
if(u==null)return!1
return H.ls(u,null,b,null)},
n:function(a,b){var u,t
if(a==null)return a
if($.kl)return a
$.kl=!0
try{if(H.fe(a,b))return a
u=H.jY(b)
t=H.aJ(a,u)
throw H.f(t)}finally{$.kl=!1}},
ks:function(a,b){if(a!=null&&!H.kq(a,b))H.u(H.aJ(a,H.jY(b)))
return a},
aJ:function(a,b){return new H.iy("TypeError: "+P.fK(a)+": type '"+H.lw(a)+"' is not a subtype of type '"+b+"'")},
ma:function(a,b){return new H.fq("CastError: "+P.fK(a)+": type '"+H.lw(a)+"' is not a subtype of type '"+b+"'")},
lw:function(a){var u,t
u=J.a_(a)
if(!!u.$icj){t=H.lB(u)
if(t!=null)return H.jY(t)
return"Closure"}return H.c_(a)},
nA:function(a){throw H.f(new P.fy(H.H(a)))},
mE:function(a){return new H.hV(a)},
lC:function(a){return v.getIsolateTag(a)},
c:function(a,b){a.$ti=b
return a},
bJ:function(a){if(a==null)return
return a.$ti},
oj:function(a,b,c){return H.cc(a["$a"+H.m(c)],H.bJ(b))},
ca:function(a,b,c,d){var u
H.H(c)
H.a9(d)
u=H.cc(a["$a"+H.m(c)],H.bJ(b))
return u==null?null:u[d]},
al:function(a,b,c){var u
H.H(b)
H.a9(c)
u=H.cc(a["$a"+H.m(b)],H.bJ(a))
return u==null?null:u[c]},
x:function(a,b){var u
H.a9(b)
u=H.bJ(a)
return u==null?null:u[b]},
jY:function(a){return H.bI(a,null)},
bI:function(a,b){var u,t
H.l(b,"$ib",[P.h],"$ab")
if(a==null)return"dynamic"
if(a===-1)return"void"
if(typeof a==="object"&&a!==null&&a.constructor===Array)return H.cd(a[0].name)+H.ko(a,1,b)
if(typeof a=="function")return H.cd(a.name)
if(a===-2)return"dynamic"
if(typeof a==="number"){H.a9(a)
if(b==null||a<0||a>=b.length)return"unexpected-generic-index:"+a
u=b.length
t=u-a-1
if(t<0||t>=u)return H.j(b,t)
return H.m(b[t])}if('func' in a)return H.mX(a,b)
if('futureOr' in a)return"FutureOr<"+H.bI("type" in a?a.type:null,b)+">"
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
if(l!=null&&l!==P.N)o+=" extends "+H.bI(l,b)}o+=">"}else{o=""
s=null}k=!!a.v?"void":H.bI(a.ret,b)
if("args" in a){j=a.args
for(u=j.length,i="",h="",g=0;g<u;++g,h=", "){f=j[g]
i=i+h+H.bI(f,b)}}else{i=""
h=""}if("opt" in a){e=a.opt
i+=h+"["
for(u=e.length,h="",g=0;g<u;++g,h=", "){f=e[g]
i=i+h+H.bI(f,b)}i+="]"}if("named" in a){d=a.named
i+=h+"{"
for(u=H.nc(d),m=u.length,h="",g=0;g<m;++g,h=", "){c=H.H(u[g])
i=i+h+H.bI(d[c],b)+(" "+H.m(c))}i+="}"}if(s!=null)b.length=s
return o+"("+i+") => "+k},
ko:function(a,b,c){var u,t,s,r,q,p
H.l(c,"$ib",[P.h],"$ab")
if(a==null)return""
u=new P.bj("")
for(t=b,s="",r=!0,q="";t<a.length;++t,s=", "){u.a=q+s
p=a[t]
if(p!=null)r=!1
q=u.a+=H.bI(p,c)}return"<"+u.i(0)+">"},
cc:function(a,b){if(a==null)return b
a=a.apply(null,b)
if(a==null)return
if(typeof a==="object"&&a!==null&&a.constructor===Array)return a
if(typeof a=="function")return a.apply(null,b)
return b},
d7:function(a,b,c,d){var u,t
H.H(b)
H.kv(c)
H.H(d)
if(a==null)return!1
u=H.bJ(a)
t=J.a_(a)
if(t[b]==null)return!1
return H.lz(H.cc(t[d],u),null,c,null)},
l:function(a,b,c,d){H.H(b)
H.kv(c)
H.H(d)
if(a==null)return a
if(H.d7(a,b,c,d))return a
throw H.f(H.aJ(a,function(e,f){return e.replace(/[^<,> ]+/g,function(g){return f[g]||g})}(H.cd(b.substring(2))+H.ko(c,0,null),v.mangledGlobalNames)))},
lz:function(a,b,c,d){var u,t
if(c==null)return!0
if(a==null){u=c.length
for(t=0;t<u;++t)if(!H.aD(null,null,c[t],d))return!1
return!0}u=a.length
for(t=0;t<u;++t)if(!H.aD(a[t],b,c[t],d))return!1
return!0},
og:function(a,b,c){return a.apply(b,H.cc(J.a_(b)["$a"+H.m(c)],H.bJ(b)))},
lE:function(a){var u
if(typeof a==="number")return!1
if('futureOr' in a){u="type" in a?a.type:null
return a==null||a.name==="N"||a.name==="K"||a===-1||a===-2||H.lE(u)}return!1},
kq:function(a,b){var u,t
if(a==null)return b==null||b.name==="N"||b.name==="K"||b===-1||b===-2||H.lE(b)
if(b==null||b===-1||b.name==="N"||b===-2)return!0
if(typeof b=="object"){if('futureOr' in b)if(H.kq(a,"type" in b?b.type:null))return!0
if('func' in b)return H.fe(a,b)}u=J.a_(a).constructor
t=H.bJ(a)
if(t!=null){t=t.slice()
t.splice(0,0,u)
u=t}return H.aD(u,null,b,null)},
E:function(a,b){if(a!=null&&!H.kq(a,b))throw H.f(H.aJ(a,H.jY(b)))
return a},
aD:function(a,b,c,d){var u,t,s,r,q,p,o,n,m
if(a===c)return!0
if(c==null||c===-1||c.name==="N"||c===-2)return!0
if(a===-2)return!0
if(a==null||a===-1||a.name==="N"||a===-2){if(typeof c==="number")return!1
if('futureOr' in c)return H.aD(a,b,"type" in c?c.type:null,d)
return!1}if(typeof a==="number")return!1
if(typeof c==="number")return!1
if(a.name==="K")return!0
if('func' in c)return H.ls(a,b,c,d)
if('func' in a)return c.name==="bx"
u=typeof a==="object"&&a!==null&&a.constructor===Array
t=u?a[0]:a
if('futureOr' in c){s="type" in c?c.type:null
if('futureOr' in a)return H.aD("type" in a?a.type:null,b,s,d)
else if(H.aD(a,b,s,d))return!0
else{if(!('$i'+"cq" in t.prototype))return!1
r=t.prototype["$a"+"cq"]
q=H.cc(r,u?a.slice(1):null)
return H.aD(typeof q==="object"&&q!==null&&q.constructor===Array?q[0]:null,b,s,d)}}p=typeof c==="object"&&c!==null&&c.constructor===Array
o=p?c[0]:c
if(o!==t){n=o.name
if(!('$i'+n in t.prototype))return!1
m=t.prototype["$a"+n]}else m=null
if(!p)return!0
u=u?a.slice(1):null
p=c.slice(1)
return H.lz(H.cc(m,u),b,p,d)},
ls:function(a,b,c,d){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g
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
return H.ns(h,b,g,d)},
ns:function(a,b,c,d){var u,t,s,r
u=Object.getOwnPropertyNames(c)
for(t=u.length,s=0;s<t;++s){r=u[s]
if(!Object.hasOwnProperty.call(a,r))return!1
if(!H.aD(c[r],d,a[r],b))return!1}return!0},
oh:function(a,b,c){Object.defineProperty(a,H.H(b),{value:c,enumerable:false,writable:true,configurable:true})},
nq:function(a){var u,t,s,r,q,p
u=H.H($.lD.$1(a))
t=$.jP[u]
if(t!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:t,enumerable:false,writable:true,configurable:true})
return t.i}s=$.jV[u]
if(s!=null)return s
r=v.interceptorsByTag[u]
if(r==null){u=H.H($.ly.$2(a,u))
if(u!=null){t=$.jP[u]
if(t!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:t,enumerable:false,writable:true,configurable:true})
return t.i}s=$.jV[u]
if(s!=null)return s
r=v.interceptorsByTag[u]}}if(r==null)return
s=r.prototype
q=u[0]
if(q==="!"){t=H.jX(s)
$.jP[u]=t
Object.defineProperty(a,v.dispatchPropertyName,{value:t,enumerable:false,writable:true,configurable:true})
return t.i}if(q==="~"){$.jV[u]=s
return s}if(q==="-"){p=H.jX(s)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}if(q==="+")return H.lG(a,s)
if(q==="*")throw H.f(P.le(u))
if(v.leafTags[u]===true){p=H.jX(s)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}else return H.lG(a,s)},
lG:function(a,b){var u=Object.getPrototypeOf(a)
Object.defineProperty(u,v.dispatchPropertyName,{value:J.kw(b,u,null,null),enumerable:false,writable:true,configurable:true})
return b},
jX:function(a){return J.kw(a,!1,null,!!a.$iF)},
nr:function(a,b,c){var u=b.prototype
if(v.leafTags[a]===true)return H.jX(u)
else return J.kw(u,c,null,null)},
nl:function(){if(!0===$.ku)return
$.ku=!0
H.nm()},
nm:function(){var u,t,s,r,q,p,o,n
$.jP=Object.create(null)
$.jV=Object.create(null)
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
u=H.c6(C.P,H.c6(C.U,H.c6(C.A,H.c6(C.A,H.c6(C.T,H.c6(C.Q,H.c6(C.R(C.B),u)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){t=dartNativeDispatchHooksTransformer
if(typeof t=="function")t=[t]
if(t.constructor==Array)for(s=0;s<t.length;++s){r=t[s]
if(typeof r=="function")u=r(u)||u}}q=u.getTag
p=u.getUnknownTag
o=u.prototypeForTag
$.lD=new H.jS(q)
$.ly=new H.jT(p)
$.lI=new H.jU(o)},
c6:function(a,b){return a(b)||b},
mo:function(a,b,c,d){var u,t,s,r
u=b?"m":""
t=c?"":"i"
s=d?"g":""
r=function(e,f){try{return new RegExp(e,f)}catch(q){return q}}(a,u+t+s)
if(r instanceof RegExp)return r
throw H.f(new P.fU("Illegal RegExp pattern ("+String(r)+")",a,null))},
ny:function(a,b,c){var u=a.indexOf(b,c)
return u>=0},
kz:function(a,b,c){var u,t,s
if(b==="")if(a==="")return c
else{u=a.length
for(t=c,s=0;s<u;++s)t=t+a[s]+c
return t.charCodeAt(0)==0?t:t}else return a.replace(new RegExp(b.replace(/[[\]{}()*+?.\\^$|]/g,"\\$&"),'g'),c.replace(/\$/g,"$$$$"))},
hO:function hO(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.x=null},
iw:function iw(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
hE:function hE(a,b){this.a=a
this.b=b},
h6:function h6(a,b,c){this.a=a
this.b=b
this.c=c},
iJ:function iJ(a){this.a=a},
k0:function k0(a){this.a=a},
eS:function eS(a){this.a=a
this.b=null},
cj:function cj(){},
ii:function ii(){},
i8:function i8(){},
cg:function cg(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
iy:function iy(a){this.a=a},
fq:function fq(a){this.a=a},
hV:function hV(a){this.a=a},
aT:function aT(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
ha:function ha(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
dB:function dB(a,b){this.a=a
this.$ti=b},
hb:function hb(a,b,c){var _=this
_.a=a
_.b=b
_.d=_.c=null
_.$ti=c},
jS:function jS(a){this.a=a},
jT:function jT(a){this.a=a},
jU:function jU(a){this.a=a},
h5:function h5(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
d4:function(a){return a},
bH:function(a,b,c){if(a>>>0!==a||a>=c)throw H.f(H.c8(b,a))},
mW:function(a,b,c){var u
if(!(a>>>0!==a))u=b>>>0!==b||a>b||b>c
else u=!0
if(u)throw H.f(H.nb(a,b,c))
return b},
cy:function cy(){},
dK:function dK(){},
cx:function cx(){},
dL:function dL(){},
hv:function hv(){},
hw:function hw(){},
hx:function hx(){},
hy:function hy(){},
hz:function hz(){},
dM:function dM(){},
hA:function hA(){},
cX:function cX(){},
cY:function cY(){},
cZ:function cZ(){},
d_:function d_(){},
nc:function(a){return J.kQ(a?Object.keys(a):[],null)},
nu:function(a){if(typeof dartPrint=="function"){dartPrint(a)
return}if(typeof console=="object"&&typeof console.log!="undefined"){console.log(a)
return}if(typeof window=="object")return
if(typeof print=="function"){print(a)
return}throw"Unable to print message: "+String(a)}},J={
kw:function(a,b,c,d){return{i:a,p:b,e:c,x:d}},
ff:function(a){var u,t,s,r,q
u=a[v.dispatchPropertyName]
if(u==null)if($.ku==null){H.nl()
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
mn:function(a,b){if(typeof a!=="number"||Math.floor(a)!==a)throw H.f(P.k3(a,"length","is not an integer"))
if(a<0||a>4294967295)throw H.f(P.aA(a,0,4294967295,"length",null))
return J.kQ(new Array(a),b)},
kQ:function(a,b){return J.h3(H.c(a,[b]))},
h3:function(a){H.kv(a)
a.fixed$length=Array
return a},
a_:function(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.dw.prototype
return J.dv.prototype}if(typeof a=="string")return J.bd.prototype
if(a==null)return J.dx.prototype
if(typeof a=="boolean")return J.h4.prototype
if(a.constructor==Array)return J.aF.prototype
if(typeof a!="object"){if(typeof a=="function")return J.be.prototype
return a}if(a instanceof P.N)return a
return J.ff(a)},
ne:function(a){if(typeof a=="number")return J.bB.prototype
if(typeof a=="string")return J.bd.prototype
if(a==null)return a
if(a.constructor==Array)return J.aF.prototype
if(typeof a!="object"){if(typeof a=="function")return J.be.prototype
return a}if(a instanceof P.N)return a
return J.ff(a)},
jQ:function(a){if(typeof a=="string")return J.bd.prototype
if(a==null)return a
if(a.constructor==Array)return J.aF.prototype
if(typeof a!="object"){if(typeof a=="function")return J.be.prototype
return a}if(a instanceof P.N)return a
return J.ff(a)},
jR:function(a){if(a==null)return a
if(a.constructor==Array)return J.aF.prototype
if(typeof a!="object"){if(typeof a=="function")return J.be.prototype
return a}if(a instanceof P.N)return a
return J.ff(a)},
nf:function(a){if(typeof a=="number")return J.bB.prototype
if(a==null)return a
if(!(a instanceof P.N))return J.bF.prototype
return a},
ng:function(a){if(typeof a=="number")return J.bB.prototype
if(typeof a=="string")return J.bd.prototype
if(a==null)return a
if(!(a instanceof P.N))return J.bF.prototype
return a},
kt:function(a){if(typeof a=="string")return J.bd.prototype
if(a==null)return a
if(!(a instanceof P.N))return J.bF.prototype
return a},
as:function(a){if(a==null)return a
if(typeof a!="object"){if(typeof a=="function")return J.be.prototype
return a}if(a instanceof P.N)return a
return J.ff(a)},
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
return J.jQ(a).j(a,b)},
fg:function(a,b){return J.as(a).i0(a,b)},
m3:function(a,b,c,d){return J.as(a).j2(a,b,c,d)},
kE:function(a,b){return J.as(a).C(a,b)},
k1:function(a,b){return J.jR(a).H(a,b)},
m4:function(a,b){return J.jR(a).O(a,b)},
m5:function(a){return J.as(a).gja(a)},
bK:function(a){return J.a_(a).gJ(a)},
bL:function(a){return J.jR(a).gT(a)},
bM:function(a){return J.jQ(a).gl(a)},
m6:function(a){return J.as(a).gkj(a)},
k2:function(a,b){return J.as(a).aW(a,b)},
kF:function(a){return J.jR(a).kb(a)},
m7:function(a,b,c){return J.kt(a).bg(a,b,c)},
m8:function(a){return J.kt(a).kq(a)},
aL:function(a){return J.a_(a).i(a)},
a:function a(){},
h4:function h4(){},
dx:function dx(){},
dy:function dy(){},
hI:function hI(){},
bF:function bF(){},
be:function be(){},
aF:function aF(a){this.$ti=a},
kb:function kb(a){this.$ti=a},
am:function am(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=null
_.$ti=d},
bB:function bB(){},
dw:function dw(){},
dv:function dv(){},
bd:function bd(){}},P={
mL:function(){var u,t,s
u={}
if(self.scheduleImmediate!=null)return P.n3()
if(self.MutationObserver!=null&&self.document!=null){t=self.document.createElement("div")
s=self.document.createElement("span")
u.a=null
new self.MutationObserver(H.c7(new P.j4(u),1)).observe(t,{childList:true})
return new P.j3(u,t,s)}else if(self.setImmediate!=null)return P.n4()
return P.n5()},
mM:function(a){self.scheduleImmediate(H.c7(new P.j5(H.n(a,{func:1,ret:-1})),0))},
mN:function(a){self.setImmediate(H.c7(new P.j6(H.n(a,{func:1,ret:-1})),0))},
mO:function(a){P.kh(C.q,H.n(a,{func:1,ret:-1}))},
kh:function(a,b){var u
H.n(b,{func:1,ret:-1})
u=C.d.a3(a.a,1000)
return P.mU(u<0?0:u,b)},
lc:function(a,b){var u
H.n(b,{func:1,ret:-1,args:[P.b4]})
u=C.d.a3(a.a,1000)
return P.mV(u<0?0:u,b)},
mU:function(a,b){var u=new P.eY(!0)
u.fl(a,b)
return u},
mV:function(a,b){var u=new P.eY(!1)
u.fm(a,b)
return u},
mP:function(a,b){var u,t,s
b.a=1
try{a.ey(new P.jf(b),new P.jg(b),null)}catch(s){u=H.ay(s)
t=H.cb(s)
P.nw(new P.jh(b,u,t))}},
ln:function(a,b){var u,t
for(;u=a.a,u===2;)a=H.k(a.c,"$iaC")
if(u>=4){t=b.ci()
b.a=a.a
b.c=a.c
P.cW(b,t)}else{t=H.k(b.c,"$ib9")
b.a=2
b.c=a
a.dz(t)}},
cW:function(a,b){var u,t,s,r,q,p,o,n,m,l,k,j,i,h
u={}
u.a=a
for(t=a;!0;){s={}
r=t.a===8
if(b==null){if(r){q=H.k(t.c,"$iaf")
t=t.b
p=q.a
o=q.b
t.toString
P.jK(null,null,t,p,o)}return}for(;n=b.a,n!=null;b=n){b.a=null
P.cW(u.a,b)}t=u.a
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
P.jK(null,null,t,p,o)
return}j=$.Z
if(j!=l)$.Z=l
else j=null
t=b.c
if(t===8)new P.jl(u,s,b,r).$0()
else if(p){if((t&1)!==0)new P.jk(s,b,m).$0()}else if((t&2)!==0)new P.jj(u,s,b).$0()
if(j!=null)$.Z=j
t=s.b
if(!!J.a_(t).$icq){if(t.a>=4){i=H.k(o.c,"$ib9")
o.c=null
b=o.bk(i)
o.a=t.a
o.c=t.c
u.a=t
continue}else P.ln(t,o)
return}}h=b.b
i=H.k(h.c,"$ib9")
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
n_:function(a,b){if(H.fe(a,{func:1,args:[P.N,P.aq]}))return H.n(a,{func:1,ret:null,args:[P.N,P.aq]})
if(H.fe(a,{func:1,args:[P.N]}))return H.n(a,{func:1,ret:null,args:[P.N]})
throw H.f(P.k3(a,"onError","Error handler must accept one Object or one Object and a StackTrace as arguments, and return a a valid result"))},
mZ:function(){var u,t
for(;u=$.c5,u!=null;){$.d6=null
t=u.b
$.c5=t
if(t==null)$.d5=null
u.a.$0()}},
n2:function(){$.km=!0
try{P.mZ()}finally{$.d6=null
$.km=!1
if($.c5!=null)$.kB().$1(P.lA())}},
lv:function(a){var u=new P.ek(H.n(a,{func:1,ret:-1}))
if($.c5==null){$.d5=u
$.c5=u
if(!$.km)$.kB().$1(P.lA())}else{$.d5.b=u
$.d5=u}},
n1:function(a){var u,t,s
H.n(a,{func:1,ret:-1})
u=$.c5
if(u==null){P.lv(a)
$.d6=$.d5
return}t=new P.ek(a)
s=$.d6
if(s==null){t.b=u
$.d6=t
$.c5=t}else{t.b=s.b
s.b=t
$.d6=t
if(t.b==null)$.d5=t}},
nw:function(a){var u,t
u={func:1,ret:-1}
H.n(a,u)
t=$.Z
if(C.l===t){P.jM(null,null,C.l,a)
return}t.toString
P.jM(null,null,t,H.n(t.cp(a),u))},
lb:function(a,b){var u,t
u={func:1,ret:-1}
H.n(b,u)
t=$.Z
if(t===C.l){t.toString
return P.kh(a,b)}return P.kh(a,H.n(t.cp(b),u))},
mK:function(a,b){var u,t,s
u={func:1,ret:-1,args:[P.b4]}
H.n(b,u)
t=$.Z
if(t===C.l){t.toString
return P.lc(a,b)}s=t.dM(b,P.b4)
$.Z.toString
return P.lc(a,H.n(s,u))},
jK:function(a,b,c,d,e){var u={}
u.a=d
P.n1(new P.jL(u,e))},
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
jM:function(a,b,c,d){var u
H.n(d,{func:1,ret:-1})
u=C.l!==c
if(u)d=!(!u||!1)?c.cp(d):c.jb(d,-1)
P.lv(d)},
j4:function j4(a){this.a=a},
j3:function j3(a,b,c){this.a=a
this.b=b
this.c=c},
j5:function j5(a){this.a=a},
j6:function j6(a){this.a=a},
eY:function eY(a){this.a=a
this.b=null
this.c=0},
jG:function jG(a,b){this.a=a
this.b=b},
jF:function jF(a,b,c,d){var _=this
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
aC:function aC(a,b,c){var _=this
_.a=a
_.b=b
_.c=null
_.$ti=c},
je:function je(a,b){this.a=a
this.b=b},
ji:function ji(a,b){this.a=a
this.b=b},
jf:function jf(a){this.a=a},
jg:function jg(a){this.a=a},
jh:function jh(a,b,c){this.a=a
this.b=b
this.c=c},
jl:function jl(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
jm:function jm(a){this.a=a},
jk:function jk(a,b,c){this.a=a
this.b=b
this.c=c},
jj:function jj(a,b,c){this.a=a
this.b=b
this.c=c},
ek:function ek(a){this.a=a
this.b=null},
ib:function ib(){},
id:function id(a,b){this.a=a
this.b=b},
ie:function ie(a,b){this.a=a
this.b=b},
cF:function cF(){},
ic:function ic(){},
b4:function b4(){},
af:function af(a,b){this.a=a
this.b=b},
jJ:function jJ(){},
jL:function jL(a,b){this.a=a
this.b=b},
js:function js(){},
ju:function ju(a,b,c){this.a=a
this.b=b
this.c=c},
jt:function jt(a,b){this.a=a
this.b=b},
jv:function jv(a,b,c){this.a=a
this.b=b
this.c=c},
kR:function(a,b){return new H.aT([a,b])},
mp:function(a){return H.nd(a,new H.aT([null,null]))},
dC:function(a,b,c,d){return new P.jq([d])},
kk:function(){var u=Object.create(null)
u["<non-identifier-key>"]=u
delete u["<non-identifier-key>"]
return u},
mT:function(a,b,c){var u=new P.ez(a,b,[c])
u.c=a.e
return u},
mk:function(a,b,c){var u,t
if(P.kn(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}u=H.c([],[P.h])
t=$.da()
C.a.h(t,a)
try{P.mY(a,u)}finally{if(0>=t.length)return H.j(t,-1)
t.pop()}t=P.l9(b,H.np(u,"$id"),", ")+c
return t.charCodeAt(0)==0?t:t},
ka:function(a,b,c){var u,t,s
if(P.kn(a))return b+"..."+c
u=new P.bj(b)
t=$.da()
C.a.h(t,a)
try{s=u
s.a=P.l9(s.a,a,", ")}finally{if(0>=t.length)return H.j(t,-1)
t.pop()}u.a+=c
t=u.a
return t.charCodeAt(0)==0?t:t},
kn:function(a){var u,t
for(u=0;t=$.da(),u<t.length;++u)if(a===t[u])return!0
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
u=P.dC(null,null,null,b)
for(t=a.length,s=0;s<a.length;a.length===t||(0,H.C)(a),++s)u.h(0,H.E(a[s],b))
return u},
kU:function(a){var u,t
u={}
if(P.kn(a))return"{...}"
t=new P.bj("")
try{C.a.h($.da(),a)
t.a+="{"
u.a=!0
J.m4(a,new P.hf(u,t))
t.a+="}"}finally{u=$.da()
if(0>=u.length)return H.j(u,-1)
u.pop()}u=t.a
return u.charCodeAt(0)==0?u:u},
jq:function jq(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
c4:function c4(a){this.a=a
this.c=this.b=null},
ez:function ez(a,b,c){var _=this
_.a=a
_.b=b
_.d=_.c=null
_.$ti=c},
hc:function hc(){},
v:function v(){},
he:function he(){},
hf:function hf(a,b){this.a=a
this.b=b},
aa:function aa(){},
jx:function jx(){},
eA:function eA(){},
ck:function ck(){},
cl:function cl(){},
fI:function fI(){},
h_:function h_(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
fZ:function fZ(a){this.a=a},
iM:function iM(a){this.a=a},
iN:function iN(){},
jH:function jH(a){this.b=this.a=0
this.c=a},
mj:function(a){if(a instanceof H.cj)return a.i(0)
return"Instance of '"+H.c_(a)+"'"},
mq:function(a,b,c,d){var u,t
H.E(b,d)
u=J.mn(a,d)
if(a!==0&&!0)for(t=0;t<u.length;++t)C.a.Y(u,t,b)
return H.l(u,"$ib",[d],"$ab")},
kT:function(a,b,c){var u,t,s
u=[c]
t=H.c([],u)
for(s=J.bL(a);s.B();)C.a.h(t,H.E(s.gI(s),c))
if(b)return t
return H.l(J.h3(t),"$ib",u,"$ab")},
kg:function(a,b,c){var u,t
u=P.B
H.l(a,"$id",[u],"$ad")
if(a.constructor===Array){H.l(a,"$iaF",[u],"$aaF")
t=a.length
c=P.kf(b,c,t,null,null,null)
return H.l3(b>0||c<t?C.a.eX(a,b,c):a)}return P.mI(a,b,c)},
mI:function(a,b,c){var u,t,s
H.l(a,"$id",[P.B],"$ad")
u=J.bL(a)
for(t=0;t<b;++t)if(!u.B())throw H.f(P.aA(b,0,t,null,null))
s=[]
for(;u.B();)s.push(u.gI(u))
return H.l3(s)},
mC:function(a,b,c){return new H.h5(a,H.mo(a,!1,!0,!1))},
l9:function(a,b,c){var u=J.bL(b)
if(!u.B())return a
if(c.length===0){do a+=H.m(u.gI(u))
while(u.B())}else{a+=H.m(u.gI(u))
for(;u.B();)a=a+c+H.m(u.gI(u))}return a},
lr:function(a,b,c,d){var u,t,s,r,q,p
H.l(a,"$ib",[P.B],"$ab")
if(c===C.x){u=$.m_().b
u=u.test(b)}else u=!1
if(u)return b
t=C.I.jk(H.E(b,H.al(c,"ck",0)))
for(u=t.length,s=0,r="";s<u;++s){q=t[s]
if(q<128){p=q>>>4
if(p>=8)return H.j(a,p)
p=(a[p]&1<<(q&15))!==0}else p=!1
if(p)r+=H.ke(q)
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
dk:function(a){if(a>=10)return""+a
return"0"+a},
kM:function(a,b,c,d,e,f){return new P.aP(864e8*a+36e8*b+6e7*e+1e6*f+1000*d+c)},
fK:function(a){if(typeof a==="number"||typeof a==="boolean"||null==a)return J.aL(a)
if(typeof a==="string")return JSON.stringify(a)
return P.mj(a)},
m9:function(a){return new P.aE(!1,null,null,a)},
k3:function(a,b,c){return new P.aE(!0,a,b,c)},
dT:function(a,b,c){return new P.c0(null,null,!0,a,b,"Value not in range")},
aA:function(a,b,c,d,e){return new P.c0(b,c,!0,a,d,"Invalid value")},
kf:function(a,b,c,d,e,f){if(0>a||a>c)throw H.f(P.aA(a,0,c,"start",f))
if(b!=null){if(a>b||b>c)throw H.f(P.aA(b,a,c,"end",f))
return b}return c},
W:function(a,b,c,d,e){var u=H.a9(e==null?J.bM(b):e)
return new P.h1(b,u,!0,a,c,"Index out of range")},
ai:function(a){return new P.iK(a)},
le:function(a){return new P.iI(a)},
l8:function(a){return new P.c2(a)},
bu:function(a){return new P.ft(a)},
r:function(a){return new P.es(a)},
ky:function(a){H.nu(a)},
O:function O(){},
an:function an(a,b){this.a=a
this.b=b},
z:function z(){},
aP:function aP(a){this.a=a},
fE:function fE(){},
fF:function fF(){},
bw:function bw(){},
dO:function dO(){},
aE:function aE(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
c0:function c0(a,b,c,d,e,f){var _=this
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
iK:function iK(a){this.a=a},
iI:function iI(a){this.a=a},
c2:function c2(a){this.a=a},
ft:function ft(a){this.a=a},
hH:function hH(){},
e_:function e_(){},
fy:function fy(a){this.a=a},
es:function es(a){this.a=a},
fU:function fU(a,b,c){this.a=a
this.b=b
this.c=c},
bx:function bx(){},
B:function B(){},
d:function d(){},
aS:function aS(){},
b:function b(){},
P:function P(){},
K:function K(){},
a4:function a4(){},
N:function N(){},
aq:function aq(){},
h:function h(){},
bj:function bj(a){this.a=a},
n9:function(a){var u,t
u=J.a_(a)
if(!!u.$iby){t=u.gdU(a)
if(t.constructor===Array)if(typeof CanvasPixelArray!=="undefined"){t.constructor=CanvasPixelArray
t.BYTES_PER_ELEMENT=1}return a}return new P.f2(a.data,a.height,a.width)},
n8:function(a){if(a instanceof P.f2)return{data:a.a,height:a.b,width:a.c}
return a},
bl:function(a){var u,t,s,r,q
if(a==null)return
u=P.kR(P.h,null)
t=Object.getOwnPropertyNames(a)
for(s=t.length,r=0;r<t.length;t.length===s||(0,H.C)(t),++r){q=H.H(t[r])
u.Y(0,q,a[q])}return u},
n7:function(a,b){var u={}
a.O(0,new P.jN(u))
return u},
f2:function f2(a,b,c){this.a=a
this.b=b
this.c=c},
jN:function jN(a){this.a=a},
fQ:function fQ(a,b){this.a=a
this.b=b},
fR:function fR(){},
fS:function fS(){},
jp:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
mS:function(a){a=536870911&a+((67108863&a)<<3)
a^=a>>>11
return 536870911&a+((16383&a)<<15)},
jr:function jr(){},
ac:function ac(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=e},
bf:function bf(){},
h8:function h8(){},
bh:function bh(){},
hF:function hF(){},
hM:function hM(){},
cC:function cC(){},
ig:function ig(){},
p:function p(){},
bk:function bk(){},
iv:function iv(){},
ex:function ex(){},
ey:function ey(){},
eI:function eI(){},
eJ:function eJ(){},
eU:function eU(){},
eV:function eV(){},
f0:function f0(){},
f1:function f1(){},
fk:function fk(){},
fl:function fl(){},
fm:function fm(a){this.a=a},
fn:function fn(){},
bN:function bN(){},
hG:function hG(){},
el:function el(){},
de:function de(){},
ds:function ds(){},
dR:function dR(){},
c1:function c1(){},
dV:function dV(){},
e2:function e2(){},
eb:function eb(){},
i7:function i7(){},
eQ:function eQ(){},
eR:function eR(){}},W={
kG:function(a){var u=document.createElement("a")
return u},
k5:function(a,b){var u=document.createElement("canvas")
return u},
mh:function(a,b,c){var u,t
u=document.body
t=(u&&C.n).af(u,a,b,c)
t.toString
u=W.D
u=new H.cT(new W.ak(t),H.n(new W.fH(),{func:1,ret:P.O,args:[u]}),[u])
return H.k(u.gaH(u),"$iU")},
mi:function(a){H.k(a,"$ie")
return"wheel"},
cp:function(a){var u,t,s
u="element tag unavailable"
try{t=J.m6(a)
if(typeof t==="string")u=a.tagName}catch(s){H.ay(s)}return u},
jo:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
lp:function(a,b,c,d){var u,t
u=W.jo(W.jo(W.jo(W.jo(0,a),b),c),d)
t=536870911&u+((67108863&u)<<3)
t^=t>>>11
return 536870911&t+((16383&t)<<15)},
a8:function(a,b,c,d,e){var u=W.lx(new W.jd(c),W.o)
if(u!=null&&!0)J.m3(a,b,u,!1)
return new W.jc(a,b,u,!1,[e])},
lo:function(a){var u,t
u=W.kG(null)
t=window.location
u=new W.bG(new W.jw(u,t))
u.fa(a)
return u},
mQ:function(a,b,c,d){H.k(a,"$iU")
H.H(b)
H.H(c)
H.k(d,"$ibG")
return!0},
mR:function(a,b,c,d){var u,t,s
H.k(a,"$iU")
H.H(b)
H.H(c)
u=H.k(d,"$ibG").a
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
r=H.n(new W.jE(),{func:1,ret:u,args:[s]})
q=H.c(["TEMPLATE"],[u])
t=new W.jD(t,P.dC(null,null,null,u),P.dC(null,null,null,u),P.dC(null,null,null,u),null)
t.fk(null,new H.hi(C.t,r,[s,u]),q,null)
return t},
lx:function(a,b){var u
H.n(a,{func:1,ret:-1,args:[b]})
u=$.Z
if(u===C.l)return a
return u.dM(a,b)},
w:function w(){},
fh:function fh(){},
db:function db(){},
fi:function fi(){},
cf:function cf(){},
dd:function dd(){},
br:function br(){},
bP:function bP(){},
bQ:function bQ(){},
bs:function bs(){},
cm:function cm(){},
fu:function fu(){},
T:function T(){},
cn:function cn(){},
fv:function fv(){},
aN:function aN(){},
aO:function aO(){},
fw:function fw(){},
fx:function fx(){},
fA:function fA(){},
az:function az(){},
co:function co(){},
fB:function fB(){},
dl:function dl(){},
dm:function dm(){},
dn:function dn(){},
fC:function fC(){},
fD:function fD(){},
j8:function j8(a,b){this.a=a
this.b=b},
U:function U(){},
fH:function fH(){},
o:function o(){},
e:function e(){},
aQ:function aQ(){},
fO:function fO(){},
fP:function fP(){},
fT:function fT(){},
aR:function aR(){},
dt:function dt(){},
fY:function fY(){},
bU:function bU(){},
du:function du(){},
by:function by(){},
cs:function cs(){},
aU:function aU(){},
dD:function dD(){},
cv:function cv(){},
ho:function ho(){},
hp:function hp(){},
hq:function hq(a){this.a=a},
hr:function hr(){},
hs:function hs(a){this.a=a},
aX:function aX(){},
ht:function ht(){},
ab:function ab(){},
ak:function ak(a){this.a=a},
D:function D(){},
cz:function cz(){},
aZ:function aZ(){},
hK:function hK(){},
dS:function dS(){},
hT:function hT(){},
hU:function hU(a){this.a=a},
hW:function hW(){},
b0:function b0(){},
i5:function i5(){},
b1:function b1(){},
i6:function i6(){},
b2:function b2(){},
i9:function i9(){},
ia:function ia(a){this.a=a},
aG:function aG(){},
c3:function c3(){},
e0:function e0(){},
e1:function e1(){},
ih:function ih(){},
cH:function cH(){},
b3:function b3(){},
aH:function aH(){},
ij:function ij(){},
ik:function ik(){},
ip:function ip(){},
b5:function b5(){},
aI:function aI(){},
it:function it(){},
iu:function iu(){},
bE:function bE(){},
iL:function iL(){},
j0:function j0(){},
j1:function j1(){},
b8:function b8(){},
cU:function cU(){},
cV:function cV(){},
j9:function j9(){},
en:function en(){},
jn:function jn(){},
eF:function eF(){},
jA:function jA(){},
jB:function jB(){},
j7:function j7(){},
ja:function ja(a){this.a=a},
jb:function jb(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
kj:function kj(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
jc:function jc(a,b,c,d,e){var _=this
_.a=0
_.b=a
_.c=b
_.d=c
_.e=d
_.$ti=e},
jd:function jd(a){this.a=a},
bG:function bG(a){this.a=a},
A:function A(){},
dN:function dN(a){this.a=a},
hC:function hC(a){this.a=a},
hB:function hB(a,b,c){this.a=a
this.b=b
this.c=c},
eN:function eN(){},
jy:function jy(){},
jz:function jz(){},
jD:function jD(a,b,c,d,e){var _=this
_.e=a
_.a=b
_.b=c
_.c=d
_.d=e},
jE:function jE(){},
jC:function jC(){},
dr:function dr(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=null
_.$ti=d},
aw:function aw(){},
jw:function jw(a,b){this.a=a
this.b=b},
f3:function f3(a){this.a=a},
jI:function jI(a){this.a=a},
em:function em(){},
eo:function eo(){},
ep:function ep(){},
eq:function eq(){},
er:function er(){},
et:function et(){},
eu:function eu(){},
ev:function ev(){},
ew:function ew(){},
eB:function eB(){},
eC:function eC(){},
eD:function eD(){},
eE:function eE(){},
eG:function eG(){},
eH:function eH(){},
eK:function eK(){},
eL:function eL(){},
eM:function eM(){},
d0:function d0(){},
d1:function d1(){},
eO:function eO(){},
eP:function eP(){},
eT:function eT(){},
eW:function eW(){},
eX:function eX(){},
d2:function d2(){},
d3:function d3(){},
eZ:function eZ(){},
f_:function f_(){},
f4:function f4(){},
f5:function f5(){},
f6:function f6(){},
f7:function f7(){},
f8:function f8(){},
f9:function f9(){},
fa:function fa(){},
fb:function fb(){},
fc:function fc(){},
fd:function fd(){}},O={
k6:function(a){var u=new O.a1([a])
u.bi(a)
return u},
a1:function a1(a){var _=this
_.d=_.c=_.b=_.a=null
_.$ti=a},
cu:function cu(){this.b=this.a=null},
dG:function dG(){var _=this
_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
hj:function hj(a,b){var _=this
_.f=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
dI:function dI(){},
hk:function hk(a,b){var _=this
_.a=a
_.b=b
_.e=_.d=_.c=null},
aV:function aV(a,b){var _=this
_.f=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
hm:function hm(a,b){var _=this
_.f=_.ch=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
hn:function hn(a,b){var _=this
_.f=_.ch=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
dX:function dX(){var _=this
_.e=_.d=_.c=_.b=_.a=null},
bD:function bD(){}},E={
kP:function(a,b,c,d,e,f){var u=new E.ag()
u.a=d
u.b=!0
u.sf9(0,O.k6(E.ag))
u.y.aY(u.gjS(),u.gjV())
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
mD:function(a,b){var u=new E.hP(a,b)
u.f5(a,b)
return u},
mJ:function(a,b,c,d,e){var u,t,s,r
u=J.a_(a)
if(!!u.$ibP)return E.la(a,!0,!0,!0,!1)
t=W.k5(null,null)
s=t.style
s.width="100%"
s.height="100%"
u.gdQ(a).h(0,t)
r=E.la(t,!0,!0,!0,!1)
r.a=a
return r},
la:function(a,b,c,d,e){var u,t,s,r,q,p,o,n,m,l,k
u=new E.e7()
t=H.k(C.p.cX(a,"webgl2",P.mp(["alpha",!0,"depth",!0,"stencil",!1,"antialias",!0])),"$ic1")
if(t==null)H.u(P.r("Failed to get the rendering context for WebGL."))
u.b=a
u.a=a
u.c=t
u.e=E.mD(t,a)
s=new T.il(t)
s.b=H.a9((t&&C.b).cY(t,3379))
s.c=H.a9(C.b.cY(t,34076))
s.d=0
s.e=0
u.f=s
s=new X.ee(a)
r=new X.h7()
r.c=new X.av(!1,!1,!1)
r.shY(P.dC(null,null,null,P.B))
s.b=r
r=new X.hu(s)
r.f=0
r.r=V.bi()
r.x=V.bi()
r.Q=1
r.ch=1
s.c=r
r=new X.hd(s)
r.r=0
r.x=V.bi()
r.Q=1
r.ch=1
r.cx=1
r.cy=1
s.d=r
r=new X.is(s)
r.e=0
r.f=V.bi()
r.r=V.bi()
s.e=r
s.f=!1
s.r=!1
s.x=!1
s.y=null
s.sfJ(H.c([],[[P.cF,P.N]]))
r=s.z
q=document
p=W.ab
o={func:1,ret:-1,args:[p]};(r&&C.a).h(r,W.a8(q,"contextmenu",H.n(s.ghj(),o),!1,p))
r=s.z
n=W.o
m={func:1,ret:-1,args:[n]};(r&&C.a).h(r,W.a8(a,"focus",H.n(s.ghp(),m),!1,n))
r=s.z;(r&&C.a).h(r,W.a8(a,"blur",H.n(s.ghd(),m),!1,n))
r=s.z
l=W.aU
k={func:1,ret:-1,args:[l]};(r&&C.a).h(r,W.a8(q,"keyup",H.n(s.ght(),k),!1,l))
r=s.z;(r&&C.a).h(r,W.a8(q,"keydown",H.n(s.ghr(),k),!1,l))
l=s.z;(l&&C.a).h(l,W.a8(a,"mousedown",H.n(s.ghx(),o),!1,p))
l=s.z;(l&&C.a).h(l,W.a8(a,"mouseup",H.n(s.ghB(),o),!1,p))
l=s.z;(l&&C.a).h(l,W.a8(a,"mousemove",H.n(s.ghz(),o),!1,p))
l=s.z
k=W.b8;(l&&C.a).h(l,W.a8(a,H.H(W.mi(a)),H.n(s.ghD(),{func:1,ret:-1,args:[k]}),!1,k))
k=s.z;(k&&C.a).h(k,W.a8(q,"mousemove",H.n(s.ghl(),o),!1,p))
k=s.z;(k&&C.a).h(k,W.a8(q,"mouseup",H.n(s.ghn(),o),!1,p))
p=s.z;(p&&C.a).h(p,W.a8(q,"pointerlockchange",H.n(s.ghF(),m),!1,n))
n=s.z
m=W.aI
q={func:1,ret:-1,args:[m]};(n&&C.a).h(n,W.a8(a,"touchstart",H.n(s.ghV(),q),!1,m))
n=s.z;(n&&C.a).h(n,W.a8(a,"touchend",H.n(s.ghR(),q),!1,m))
n=s.z;(n&&C.a).h(n,W.a8(a,"touchmove",H.n(s.ghT(),q),!1,m))
u.r=s
u.Q=!0
u.ch=!1
u.cx=new P.an(Date.now(),!1)
u.cy=0
u.dB()
return u},
fo:function fo(){},
ag:function ag(){var _=this
_.fx=_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
hP:function hP(a,b){var _=this
_.a=a
_.b=b
_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=null},
hQ:function hQ(a){this.a=a},
hR:function hR(a){this.a=a},
hS:function hS(a){this.a=a},
e7:function e7(){var _=this
_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
io:function io(a){this.a=a}},Z={
lm:function(a,b,c){var u
H.l(c,"$ib",[P.B],"$ab")
u=a.createBuffer()
C.b.ap(a,b,u)
C.b.dO(a,b,new Int16Array(H.d4(c)),35044)
C.b.ap(a,b,null)
return new Z.ei(b,u)},
aB:function(a){return new Z.b7(a)},
ei:function ei(a,b){this.a=a
this.b=b},
df:function df(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
ej:function ej(a){this.a=a},
ci:function ci(a,b,c){var _=this
_.a=a
_.b=null
_.c=b
_.d=c},
bV:function bV(a,b,c){this.a=a
this.b=b
this.c=c},
b7:function b7(a){this.a=a}},D={
J:function(){var u=new D.bS()
u.sad(null)
u.saO(null)
u.c=null
u.d=0
return u},
fr:function fr(){},
bS:function bS(){var _=this
_.d=_.c=_.b=_.a=null},
fL:function fL(a){this.a=a},
fM:function fM(a){this.a=a},
y:function y(a){this.a=a
this.b=null},
bz:function bz(a,b,c,d){var _=this
_.c=a
_.d=b
_.a=c
_.b=null
_.$ti=d},
bA:function bA(a,b,c,d){var _=this
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
bv:function bv(){var _=this
_.d=_.c=_.b=_.a=null},
a5:function a5(){},
dA:function dA(){var _=this
_.d=_.c=_.b=_.a=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=null},
dQ:function dQ(){},
dZ:function dZ(){},
e4:function e4(){},
e5:function e5(){},
e6:function e6(){}},X={dg:function dg(a,b){this.a=a
this.b=b},dz:function dz(a,b){this.a=a
this.b=b},h7:function h7(){var _=this
_.d=_.c=_.b=_.a=null},dE:function dE(a,b,c,d,e,f){var _=this
_.x=a
_.y=b
_.c=c
_.d=d
_.e=e
_.a=f
_.b=null},hd:function hd(a){var _=this
_.a=a
_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},av:function av(a,b,c){this.a=a
this.b=b
this.c=c},bg:function bg(a,b,c,d,e,f,g,h,i){var _=this
_.x=a
_.y=b
_.z=c
_.Q=d
_.ch=e
_.c=f
_.d=g
_.e=h
_.a=i
_.b=null},hu:function hu(a){var _=this
_.a=a
_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},cw:function cw(a,b,c,d,e){var _=this
_.x=a
_.c=b
_.d=c
_.e=d
_.a=e
_.b=null},hL:function hL(){},e9:function e9(a,b,c,d,e,f,g,h,i){var _=this
_.x=a
_.y=b
_.z=c
_.Q=d
_.ch=e
_.c=f
_.d=g
_.e=h
_.a=i
_.b=null},is:function is(a){var _=this
_.a=a
_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},ee:function ee(a){var _=this
_.a=a
_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},
k9:function(a,b,c,d,e,f,g){var u,t
u=new X.fV()
t=new V.at(0,0,0,1)
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
u=new X.dP()
u.c=1.0471975511965976
u.d=0.1
u.e=2000
if(null!=c){t=u.b
u.b=c
if(c!=null)c.gq().h(0,u.gfn())
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
bO:function bO(){},
fV:function fV(){var _=this
_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
h0:function h0(){this.b=this.a=null},
dP:function dP(){var _=this
_.f=_.e=_.d=_.c=_.b=_.a=null},
cG:function cG(){}},V={
nC:function(a,b,c){var u
if(c<=b)return b
u=c-b
a=C.e.eO(a-b,u)
return(a<0?a+u:a)+b},
V:function(a,b,c){if(a==null)return C.j.aC("null",c)
return C.j.aC(C.e.ez(Math.abs(a-0)<$.R().a?0:a,b),c+b+1)},
c9:function(a,b,c){var u,t,s,r,q,p
H.l(a,"$ib",[P.z],"$ab")
u=H.c([],[P.h])
for(t=a.length,s=0,r=0;r<a.length;a.length===t||(0,H.C)(a),++r){q=V.V(a[r],b,c)
s=Math.max(s,q.length)
C.a.h(u,q)}for(p=u.length-1;p>=0;--p){if(p>=u.length)return H.j(u,p)
C.a.Y(u,p,C.j.aC(u[p],s))}return u},
kx:function(a,b){return C.e.kn(Math.pow(b,C.O.cG(Math.log(H.n6(a))/Math.log(b))))},
bX:function(){var u=$.kW
if(u==null){u=V.aW(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1)
$.kW=u}return u},
aW:function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){return new V.ao(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p)},
kV:function(a,b,c){var u,t,s,r,q,p,o,n
u=c.w(0,Math.sqrt(c.D(c)))
t=b.ay(u)
s=t.w(0,Math.sqrt(t.D(t)))
r=u.ay(s)
q=new V.Q(a.a,a.b,a.c)
p=s.S(0).D(q)
o=r.S(0).D(q)
n=u.S(0).D(q)
return V.aW(s.a,r.a,u.a,p,s.b,r.b,u.b,o,s.c,r.c,u.c,n,0,0,0,1)},
bi:function(){var u=$.l0
if(u==null){u=new V.a6(0,0)
$.l0=u}return u},
l1:function(){var u=$.cA
if(u==null){u=new V.a3(0,0,0)
$.cA=u}return u},
l4:function(a,b,c,d){if(c<0){a+=c
c=-c}if(d<0){b+=d
d=-d}return new V.dU(a,b,c,d)},
cS:function(){var u=$.lj
if(u==null){u=new V.Q(0,0,0)
$.lj=u}return u},
lk:function(){var u=$.li
if(u==null){u=new V.Q(0,1,0)
$.li=u}return u},
ll:function(){var u=$.iO
if(u==null){u=new V.Q(0,0,1)
$.iO=u}return u},
a2:function a2(a,b,c){this.a=a
this.b=b
this.c=c},
at:function at(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
fJ:function fJ(a){this.a=a},
dJ:function dJ(a,b,c,d,e,f,g,h,i){var _=this
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
b_:function b_(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
dU:function dU(a,b,c,d){var _=this
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
s=new V.hN()
if(u>t){r=t
t=u
u=r}s.a=u
s.b=t
return s},
t:function(a){var u=new V.hX()
u.f6(a)
return u},
ir:function(){var u,t
u=new V.iq()
t=P.h
u.siq(new H.aT([t,V.cE]))
u.siu(new H.aT([t,V.cJ]))
u.c=null
return u},
bb:function bb(){},
au:function au(){},
dF:function dF(){},
ap:function ap(){this.a=null},
hN:function hN(){this.b=this.a=null},
hX:function hX(){this.a=null},
cE:function cE(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
e8:function e8(a,b,c){this.a=a
this.b=b
this.c=c},
cJ:function cJ(a,b){this.a=a
this.b=b
this.c=null},
iq:function iq(){this.c=this.b=this.a=null},
cK:function cK(a){this.b=a
this.a=this.c=null},
nx:function(a){P.mK(C.K,new V.jZ(a))},
mF:function(a,b){var u=new V.i0()
u.f7(a,!0)
return u},
bt:function bt(){},
jZ:function jZ(a){this.a=a},
fz:function fz(a){var _=this
_.a=a
_.d=_.c=_.b=null},
fW:function fW(a){var _=this
_.a=a
_.d=_.c=_.b=null},
fX:function fX(a){var _=this
_.a=a
_.d=_.c=_.b=null},
hJ:function hJ(a){var _=this
_.a=a
_.d=_.c=_.b=null},
i0:function i0(){this.b=this.a=null},
i2:function i2(a){this.a=a},
i1:function i1(a){this.a=a},
i3:function i3(a){this.a=a}},U={
k7:function(){var u=new U.fs()
u.a=!0
u.b=1e12
u.c=-1e12
u.d=0
u.e=100
u.f=0
u.x=0
u.r=0
return u},
kL:function(a){var u=new U.di()
u.a=a
return u},
fs:function fs(){var _=this
_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
di:function di(){this.b=this.a=null},
cr:function cr(){var _=this
_.d=_.c=_.b=_.a=_.r=_.f=_.e=null},
ad:function ad(){},
ef:function ef(){var _=this
_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
eg:function eg(){var _=this
_.fx=_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
eh:function eh(){var _=this
_.r=_.f=_.e=_.d=_.c=_.b=_.a=null}},M={dh:function dh(){var _=this
_.d=_.c=_.b=_.a=_.f=_.e=null},dj:function dj(){var _=this
_.f=_.e=_.d=_.c=_.b=_.a=null},dp:function dp(){var _=this
_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},ax:function ax(){}},A={
mr:function(a,b){var u,t
u=a.aj
t=new A.dH(b,u)
t.d2(b,u)
t.f4(a,b)
return t},
ki:function(a,b,c,d,e){var u=new A.iA(a,b,c,e)
u.f=d
u.siF(P.mq(d,0,!1,P.B))
return u},
dc:function dc(a,b,c){this.a=a
this.b=b
this.c=c},
fj:function fj(a){this.a=a},
dH:function dH(a,b){var _=this
_.bq=_.e_=_.bp=_.aj=_.ar=_.y2=_.y1=_.x2=_.x1=_.ry=_.rx=_.r2=_.r1=_.k4=_.k3=_.k2=_.k1=_.id=_.go=_.fy=_.fx=_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=null
_.ef=_.cA=_.ee=_.bD=_.ed=_.ec=_.bC=_.bB=_.eb=_.ea=_.bA=_.bz=_.by=_.e9=_.e8=_.bx=_.e7=_.e6=_.bw=_.e5=_.e4=_.bv=_.bu=_.e3=_.e2=_.bt=_.bs=_.e1=_.e0=_.br=null
_.cF=_.ej=_.cE=_.ei=_.cD=_.eh=_.cC=_.eg=_.cB=null
_.a=a
_.b=b
_.y=_.x=_.r=_.f=_.e=_.d=_.c=null},
hl:function hl(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5){var _=this
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
cL:function cL(a,b,c){this.a=a
this.b=b
this.c=c},
cP:function cP(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.x=h},
cN:function cN(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},
cQ:function cQ(a,b,c,d,e,f,g,h,i,j){var _=this
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
cO:function cO(a,b,c,d,e,f,g,h,i,j){var _=this
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
cR:function cR(a,b,c,d,e,f,g,h,i,j,k,l,m,n){var _=this
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
cD:function cD(){},
bR:function bR(a,b){this.a=a
this.b=b},
dY:function dY(a,b){var _=this
_.db=_.cy=_.cx=_.ch=_.Q=_.z=null
_.a=a
_.b=b
_.y=_.x=_.r=_.f=_.e=_.d=_.c=null},
ea:function ea(){},
iG:function iG(a){this.a=a},
L:function L(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
iC:function iC(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
iD:function iD(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
iF:function iF(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
iA:function iA(a,b,c,d){var _=this
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
iB:function iB(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
I:function I(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
iE:function iE(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
iH:function iH(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
cM:function cM(a,b,c,d){var _=this
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
nB:function(a,b,c,d){return F.na(c,a,d,b,new F.k_())},
na:function(a,b,c,d,e){var u=F.nz(a,b,new F.jO(H.n(e,{func:1,ret:V.a3,args:[P.z]}),d,b,c),null)
if(u==null)return
u.ax()
u.jR(new F.iV(),new F.hD())
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
o=F.iP(null,null,new V.at(p,0,0,1),null,null,new V.a6(r,1),null,null,0)
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
o=F.iP(null,null,new V.at(j,i,h,1),null,null,new V.a6(r,m),null,null,0)
k.h(0,o)
c.$3(o,r,n)
C.a.h(t,o.dT(d))}}u.d.j4(a+1,b+1,t)
return u},
dq:function(a,b,c){var u,t
u=new F.a7()
t=a.a
if(t==null)H.u(P.r("May not create a face with a first vertex which is not attached to a shape."))
if(t!=b.a||t!=c.a)H.u(P.r("May not create a face with vertices attached to different shapes."))
u.ig(a)
u.ih(b)
u.ii(c)
C.a.h(u.a.a.d.b,u)
u.a.a.aa()
return u},
l7:function(){var u,t
u=new F.dW()
t=new F.iQ(u)
t.b=!1
t.siG(H.c([],[F.aj]))
u.a=t
t=new F.i_(u)
t.scf(H.c([],[F.bY]))
u.b=t
t=new F.hZ(u)
t.sfV(H.c([],[F.bC]))
u.c=t
t=new F.hY(u)
t.sfK(H.c([],[F.a7]))
u.d=t
u.e=null
return u},
iP:function(a,b,c,d,e,f,g,h,i){var u,t,s
u=new F.aj()
t=new F.iY(u)
t.scf(H.c([],[F.bY]))
u.b=t
t=new F.iU(u)
s=[F.bC]
t.sfW(H.c([],s))
t.sfX(H.c([],s))
u.c=t
t=new F.iR(u)
s=[F.a7]
t.sfL(H.c([],s))
t.sfM(H.c([],s))
t.sfN(H.c([],s))
u.d=t
h=$.lW()
u.e=0
t=$.aK()
s=h.a
u.f=(s&t.a)!==0?d:null
u.r=(s&$.bo().a)!==0?e:null
u.x=(s&$.bn().a)!==0?b:null
u.y=(s&$.bp().a)!==0?f:null
u.z=(s&$.bq().a)!==0?g:null
u.Q=(s&$.lX().a)!==0?c:null
u.ch=(s&$.ce().a)!==0?i:0
u.cx=(s&$.bm().a)!==0?a:null
return u},
k_:function k_(){},
jO:function jO(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
a7:function a7(){var _=this
_.e=_.d=_.c=_.b=_.a=null},
fN:function fN(){},
i4:function i4(){},
bC:function bC(){},
h9:function h9(){},
iz:function iz(){},
bY:function bY(){},
dW:function dW(){var _=this
_.e=_.d=_.c=_.b=_.a=null},
hY:function hY(a){this.a=a
this.b=null},
hZ:function hZ(a){this.a=a
this.b=null},
i_:function i_(a){this.a=a
this.b=null},
aj:function aj(){var _=this
_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
j_:function j_(a){this.a=a},
iZ:function iZ(a){this.a=a},
iQ:function iQ(a){this.a=a
this.c=this.b=null},
iR:function iR(a){var _=this
_.a=a
_.d=_.c=_.b=null},
iS:function iS(a,b){this.a=a
this.b=b},
iT:function iT(a,b){this.a=a
this.b=b},
iU:function iU(a){this.a=a
this.c=this.b=null},
iW:function iW(){},
iV:function iV(){},
iX:function iX(){},
hD:function hD(){},
iY:function iY(a){this.a=a
this.b=null}},T={cI:function cI(){},e3:function e3(){var _=this
_.e=_.d=_.c=_.b=_.a=null},il:function il(a){var _=this
_.a=a
_.e=_.d=_.c=_.b=null},im:function im(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g}},B={
lF:function(){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6
u=V.mF("Test 013",!0)
t=W.k5(null,null)
t.className="pageLargeCanvas"
t.id="testCanvas"
C.k.C(u.a,t)
s=[P.h]
u.dI(H.c(["Test of sky box and cover pass."],s))
u.dI(H.c(["\xab[Back to Tests|../]"],s))
r=C.z.eJ(document,"testCanvas")
if(r==null)H.u(P.r("Failed to find an element with the identifier, testCanvas."))
q=E.mJ(r,!0,!0,!0,!1)
p=new U.cr()
s=U.ad
p.bi(s)
p.aY(p.gh5(),p.ghJ())
p.e=null
p.f=V.bX()
p.r=0
o=q.r
n=new U.eg()
m=U.k7()
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
m=U.k7()
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
k=new X.av(!1,!1,!1)
j=n.d
n.d=k
m=[X.av]
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
n=new U.ef()
l=U.k7()
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
k=new X.av(!0,!1,!1)
j=n.c
n.c=k
l=new D.M("modifiers",j,k,n,m)
l.b=!0
n.N(l)
n.b3(o)
p.h(0,n)
o=q.r
n=new U.eh()
n.c=0.01
n.d=0
n.e=0
k=new X.av(!1,!1,!1)
n.b=k
m=new D.M("modifiers",null,k,n,m)
m.b=!0
n.N(m)
n.b3(o)
p.h(0,n)
p.h(0,U.kL(V.aW(1,0,0,0,0,1,0,0,0,0,1,5,0,0,0,1)))
i=X.kZ(2000,1.0471975511965976,p,0.1,null)
h=X.k9(!0,!0,!1,null,2000,null,0)
if(h.b){h.b=!1
o=new D.M("clearColor",!0,!1,h,[P.O])
o.b=!0
h.am(o)}g=E.kP(null,!0,null,"",null,null)
g.sbR(0,F.nB(30,1,15,0.5))
f=new O.dG()
f.sfv(O.k6(V.ao))
f.e.aY(f.gh9(),f.ghb())
o=new O.aV(f,"emission")
o.c=C.c
o.f=new V.a2(0,0,0)
f.f=o
o=new O.aV(f,"ambient")
o.c=C.c
o.f=new V.a2(0,0,0)
f.r=o
o=new O.aV(f,"diffuse")
o.c=C.c
o.f=new V.a2(0,0,0)
f.x=o
o=new O.aV(f,"invDiffuse")
o.c=C.c
o.f=new V.a2(0,0,0)
f.y=o
o=new O.hn(f,"specular")
o.c=C.c
o.f=new V.a2(0,0,0)
o.ch=100
f.z=o
o=new O.hk(f,"bump")
o.c=C.c
f.Q=o
f.ch=null
o=new O.aV(f,"reflect")
o.c=C.c
o.f=new V.a2(0,0,0)
f.cx=o
o=new O.hm(f,"refract")
o.c=C.c
o.f=new V.a2(0,0,0)
o.ch=1
f.cy=o
o=new O.hj(f,"alpha")
o.c=C.c
o.f=1
f.db=o
o=new D.dA()
o.bi(D.a5)
o.sfG(H.c([],[D.bv]))
o.shX(H.c([],[D.dQ]))
o.sip(H.c([],[D.dZ]))
o.siC(H.c([],[D.e4]))
o.siD(H.c([],[D.e5]))
o.siE(H.c([],[D.e6]))
o.Q=null
o.ch=null
o.d_(o.gh7(),o.ghH(),o.ghL())
f.dx=o
n=o.Q
if(n==null){n=D.J()
o.Q=n
o=n}else o=n
o.h(0,f.gi7())
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
m=new D.bv()
m.c=new V.a2(1,1,1)
m.a=V.ll()
j=m.b
m.b=n
n.gq().h(0,m.gfc())
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
b=new T.e3()
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
a=new M.dj()
a.sb4(null)
a.sba(0,null)
a.sbb(null)
s=E.kP(null,!0,null,"",null,null)
a0=F.l7()
o=a0.a
n=new V.Q(-1,-1,1)
n=n.w(0,Math.sqrt(n.D(n)))
a1=o.bn(new V.b_(1,2,4,6),new V.at(1,0,0,1),new V.a3(-1,-1,0),new V.a6(0,1),n,null)
o=a0.a
n=new V.Q(1,-1,1)
n=n.w(0,Math.sqrt(n.D(n)))
a2=o.bn(new V.b_(0,3,4,6),new V.at(0,0,1,1),new V.a3(1,-1,0),new V.a6(1,1),n,null)
o=a0.a
n=new V.Q(1,1,1)
n=n.w(0,Math.sqrt(n.D(n)))
a3=o.bn(new V.b_(0,2,5,6),new V.at(0,1,0,1),new V.a3(1,1,0),new V.a6(1,0),n,null)
o=a0.a
n=V.bi()
m=new V.Q(-1,1,1)
m=m.w(0,Math.sqrt(m.D(m)))
a4=o.bn(new V.b_(0,2,4,7),new V.at(1,1,0,1),new V.a3(-1,1,0),n,m,null)
a0.d.j3(H.c([a1,a2,a3,a4],[F.aj]))
a0.ax()
s.sbR(0,a0)
a.d=s
a.e=null
s=new O.dX()
s.b=1.0471975511965976
s.d=new V.a2(1,1,1)
j=s.c
s.c=b
b.gq().h(0,s.gbV())
o=new D.M("boxTexture",j,s.c,s,[T.e3])
o.b=!0
s.a2(o)
a.sbb(s)
a.sba(0,h)
a.sb4(i)
a5=new M.dp()
a5.sfA(0,O.k6(E.ag))
a5.d.aY(a5.ghf(),a5.ghh())
a5.e=null
a5.f=null
a5.r=null
a5.x=null
a6=X.k9(!0,!0,!1,null,2000,null,0)
a5.sb4(null)
a5.sba(0,a6)
a5.sbb(null)
a5.sb4(i)
a5.sbb(f)
a5.sba(0,h)
a5.d.h(0,g)
s=M.ax
o=H.c([a,a5],[s])
n=new M.dh()
n.bi(s)
n.e=!1
n.f=null
n.aY(n.ghN(),n.ghP())
n.a6(0,o)
s=q.d
if(s!==n){if(s!=null)s.gq().P(0,q.gd4())
q.d=n
n.gq().h(0,q.gd4())
q.d5()}s=q.z
if(s==null){s=D.J()
q.z=s}o={func:1,ret:-1,args:[D.y]}
n=H.n(new B.jW(a,u),o)
if(s.b==null)s.saO(H.c([],[o]))
s=s.b;(s&&C.a).h(s,n)
V.nx(q)},
jW:function jW(a,b){this.a=a
this.b=b}}
var w=[C,H,J,P,W,O,E,Z,D,X,V,U,M,A,F,T,B]
hunkHelpers.setFunctionNamesIfNecessary(w)
var $={}
H.kc.prototype={}
J.a.prototype={
A:function(a,b){return a===b},
gJ:function(a){return H.cB(a)},
i:function(a){return"Instance of '"+H.c_(a)+"'"}}
J.h4.prototype={
i:function(a){return String(a)},
gJ:function(a){return a?519018:218159},
$iO:1}
J.dx.prototype={
A:function(a,b){return null==b},
i:function(a){return"null"},
gJ:function(a){return 0},
$iK:1}
J.dy.prototype={
gJ:function(a){return 0},
i:function(a){return String(a)}}
J.hI.prototype={}
J.bF.prototype={}
J.be.prototype={
i:function(a){var u=a[$.lL()]
if(u==null)return this.f_(a)
return"JavaScript function for "+H.m(J.aL(u))},
$S:function(){return{func:1,opt:[,,,,,,,,,,,,,,,,]}},
$ibx:1}
J.aF.prototype={
h:function(a,b){H.E(b,H.x(a,0))
if(!!a.fixed$length)H.u(P.ai("add"))
a.push(b)},
eu:function(a,b){if(!!a.fixed$length)H.u(P.ai("removeAt"))
if(b<0||b>=a.length)throw H.f(P.dT(b,null,null))
return a.splice(b,1)[0]},
P:function(a,b){var u
if(!!a.fixed$length)H.u(P.ai("remove"))
for(u=0;u<a.length;++u)if(J.a0(a[u],b)){a.splice(u,1)
return!0}return!1},
a6:function(a,b){var u,t
H.l(b,"$id",[H.x(a,0)],"$ad")
if(!!a.fixed$length)H.u(P.ai("addAll"))
for(u=b.length,t=0;t<b.length;b.length===u||(0,H.C)(b),++t)a.push(b[t])},
O:function(a,b){var u,t
H.n(b,{func:1,ret:-1,args:[H.x(a,0)]})
u=a.length
for(t=0;t<u;++t){b.$1(a[t])
if(a.length!==u)throw H.f(P.bu(a))}},
m:function(a,b){var u,t
u=new Array(a.length)
u.fixed$length=Array
for(t=0;t<a.length;++t)this.Y(u,t,H.m(a[t]))
return u.join(b)},
jM:function(a){return this.m(a,"")},
jG:function(a,b,c){var u,t,s
H.n(b,{func:1,ret:P.O,args:[H.x(a,0)]})
u=a.length
for(t=0;t<u;++t){s=a[t]
if(b.$1(s))return s
if(a.length!==u)throw H.f(P.bu(a))}throw H.f(H.h2())},
jF:function(a,b){return this.jG(a,b,null)},
H:function(a,b){if(b<0||b>=a.length)return H.j(a,b)
return a[b]},
eX:function(a,b,c){var u=a.length
if(b>u)throw H.f(P.aA(b,0,a.length,"start",null))
if(c<b||c>a.length)throw H.f(P.aA(c,b,a.length,"end",null))
if(b===c)return H.c([],[H.x(a,0)])
return H.c(a.slice(b,c),[H.x(a,0)])},
gjE:function(a){if(a.length>0)return a[0]
throw H.f(H.h2())},
gbF:function(a){var u=a.length
if(u>0)return a[u-1]
throw H.f(H.h2())},
eT:function(a,b,c,d,e){var u,t,s
u=H.x(a,0)
H.l(d,"$id",[u],"$ad")
if(!!a.immutable$list)H.u(P.ai("setRange"))
P.kf(b,c,a.length,null,null,null)
t=c-b
if(t===0)return
H.l(d,"$ib",[u],"$ab")
u=J.jQ(d)
if(e+t>u.gl(d))throw H.f(H.ml())
if(e<b)for(s=t-1;s>=0;--s)a[b+s]=u.j(d,e+s)
else for(s=0;s<t;++s)a[b+s]=u.j(d,e+s)},
be:function(a,b,c,d){return this.eT(a,b,c,d,0)},
dK:function(a,b){var u,t
H.n(b,{func:1,ret:P.O,args:[H.x(a,0)]})
u=a.length
for(t=0;t<u;++t){if(b.$1(a[t]))return!0
if(a.length!==u)throw H.f(P.bu(a))}return!1},
X:function(a,b){var u
for(u=0;u<a.length;++u)if(J.a0(a[u],b))return!0
return!1},
i:function(a){return P.ka(a,"[","]")},
gT:function(a){return new J.am(a,a.length,0,[H.x(a,0)])},
gJ:function(a){return H.cB(a)},
gl:function(a){return a.length},
sl:function(a,b){if(!!a.fixed$length)H.u(P.ai("set length"))
if(b<0)throw H.f(P.aA(b,0,null,"newLength",null))
a.length=b},
j:function(a,b){if(b>=a.length||b<0)throw H.f(H.c8(a,b))
return a[b]},
Y:function(a,b,c){H.E(c,H.x(a,0))
if(!!a.immutable$list)H.u(P.ai("indexed set"))
if(b>=a.length||b<0)throw H.f(H.c8(a,b))
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
J.kb.prototype={}
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
$iaS:1}
J.bB.prototype={
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
ez:function(a,b){var u,t
if(b>20)throw H.f(P.aA(b,0,20,"fractionDigits",null))
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
p:function(a,b){if(typeof b!=="number")throw H.f(H.ba(b))
return a+b},
t:function(a,b){if(typeof b!=="number")throw H.f(H.ba(b))
return a-b},
v:function(a,b){if(typeof b!=="number")throw H.f(H.ba(b))
return a*b},
eO:function(a,b){var u=a%b
if(u===0)return 0
if(u>0)return u
if(b<0)return u-b
else return u+b},
f3:function(a,b){if((a|0)===a)if(b>=1||b<-1)return a/b|0
return this.dD(a,b)},
a3:function(a,b){return(a|0)===a?a/b|0:this.dD(a,b)},
dD:function(a,b){var u=a/b
if(u>=-2147483648&&u<=2147483647)return u|0
if(u>0){if(u!==1/0)return Math.floor(u)}else if(u>-1/0)return Math.ceil(u)
throw H.f(P.ai("Result of truncating division is "+H.m(u)+": "+H.m(a)+" ~/ "+b))},
bl:function(a,b){var u
if(a>0)u=this.io(a,b)
else{u=b>31?31:b
u=a>>u>>>0}return u},
io:function(a,b){return b>31?0:a>>>b},
$iz:1,
$ia4:1}
J.dw.prototype={$iB:1}
J.dv.prototype={}
J.bd.prototype={
cu:function(a,b){if(b<0)throw H.f(H.c8(a,b))
if(b>=a.length)H.u(H.c8(a,b))
return a.charCodeAt(b)},
aJ:function(a,b){if(b>=a.length)throw H.f(H.c8(a,b))
return a.charCodeAt(b)},
p:function(a,b){if(typeof b!=="string")throw H.f(P.k3(b,null,null))
return a+b},
eW:function(a,b,c){var u
if(c>a.length)throw H.f(P.aA(c,0,a.length,null,null))
u=c+b.length
if(u>a.length)return!1
return b===a.substring(c,u)},
bS:function(a,b){return this.eW(a,b,0)},
bg:function(a,b,c){if(c==null)c=a.length
if(b<0)throw H.f(P.dT(b,null,null))
if(b>c)throw H.f(P.dT(b,null,null))
if(c>a.length)throw H.f(P.dT(c,null,null))
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
jY:function(a,b,c){var u=b-a.length
if(u<=0)return a
return this.v(c,u)+a},
aC:function(a,b){return this.jY(a,b," ")},
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
$aed:function(){return[P.B]},
$av:function(){return[P.B]},
$ad:function(){return[P.B]},
$ab:function(){return[P.B]}}
H.fG.prototype={}
H.bW.prototype={
gT:function(a){return new H.ct(this,this.gl(this),0,[H.al(this,"bW",0)])},
bO:function(a,b){return this.eZ(0,H.n(b,{func:1,ret:P.O,args:[H.al(this,"bW",0)]}))}}
H.ct.prototype={
gI:function(a){return this.d},
B:function(){var u,t,s,r
u=this.a
t=J.jQ(u)
s=t.gl(u)
if(this.b!==s)throw H.f(P.bu(u))
r=this.c
if(r>=s){this.sb_(null)
return!1}this.sb_(t.H(u,r));++this.c
return!0},
sb_:function(a){this.d=H.E(a,H.x(this,0))},
$iaS:1}
H.hg.prototype={
gT:function(a){return new H.hh(J.bL(this.a),this.b,this.$ti)},
gl:function(a){return J.bM(this.a)},
H:function(a,b){return this.b.$1(J.k1(this.a,b))},
$ad:function(a,b){return[b]}}
H.hh.prototype={
B:function(){var u=this.b
if(u.B()){this.sb_(this.c.$1(u.gI(u)))
return!0}this.sb_(null)
return!1},
gI:function(a){return this.a},
sb_:function(a){this.a=H.E(a,H.x(this,1))},
$aaS:function(a,b){return[b]}}
H.hi.prototype={
gl:function(a){return J.bM(this.a)},
H:function(a,b){return this.b.$1(J.k1(this.a,b))},
$abW:function(a,b){return[b]},
$ad:function(a,b){return[b]}}
H.cT.prototype={
gT:function(a){return new H.j2(J.bL(this.a),this.b,this.$ti)}}
H.j2.prototype={
B:function(){var u,t
for(u=this.a,t=this.b;u.B();)if(t.$1(u.gI(u)))return!0
return!1},
gI:function(a){var u=this.a
return u.gI(u)}}
H.bT.prototype={}
H.ed.prototype={}
H.ec.prototype={}
H.hO.prototype={}
H.iw.prototype={
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
H.hE.prototype={
i:function(a){var u=this.b
if(u==null)return"NoSuchMethodError: "+H.m(this.a)
return"NoSuchMethodError: method not found: '"+u+"' on null"}}
H.h6.prototype={
i:function(a){var u,t
u=this.b
if(u==null)return"NoSuchMethodError: "+H.m(this.a)
t=this.c
if(t==null)return"NoSuchMethodError: method not found: '"+u+"' ("+H.m(this.a)+")"
return"NoSuchMethodError: method not found: '"+u+"' on '"+t+"' ("+H.m(this.a)+")"}}
H.iJ.prototype={
i:function(a){var u=this.a
return u.length===0?"Error":"Error: "+u}}
H.k0.prototype={
$1:function(a){if(!!J.a_(a).$ibw)if(a.$thrownJsError==null)a.$thrownJsError=this.a
return a},
$S:15}
H.eS.prototype={
i:function(a){var u,t
u=this.b
if(u!=null)return u
u=this.a
t=u!==null&&typeof u==="object"?u.stack:null
u=t==null?"":t
this.b=u
return u},
$iaq:1}
H.cj.prototype={
i:function(a){return"Closure '"+H.c_(this).trim()+"'"},
$ibx:1,
gkx:function(){return this},
$C:"$1",
$R:1,
$D:null}
H.ii.prototype={}
H.i8.prototype={
i:function(a){var u=this.$static_name
if(u==null)return"Closure of unknown static method"
return"Closure '"+H.cd(u)+"'"}}
H.cg.prototype={
A:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof H.cg))return!1
return this.a===b.a&&this.b===b.b&&this.c===b.c},
gJ:function(a){var u,t
u=this.c
if(u==null)t=H.cB(this.a)
else t=typeof u!=="object"?J.bK(u):H.cB(u)
return(t^H.cB(this.b))>>>0},
i:function(a){var u=this.c
if(u==null)u=this.a
return"Closure '"+H.m(this.d)+"' of "+("Instance of '"+H.c_(u)+"'")}}
H.iy.prototype={
i:function(a){return this.a}}
H.fq.prototype={
i:function(a){return this.a}}
H.hV.prototype={
i:function(a){return"RuntimeError: "+H.m(this.a)}}
H.aT.prototype={
gl:function(a){return this.a},
ga7:function(a){return new H.dB(this,[H.x(this,0)])},
dS:function(a,b){var u,t
if(typeof b==="string"){u=this.b
if(u==null)return!1
return this.di(u,b)}else if(typeof b==="number"&&(b&0x3ffffff)===b){t=this.c
if(t==null)return!1
return this.di(t,b)}else return this.jK(b)},
jK:function(a){var u=this.d
if(u==null)return!1
return this.cH(this.c2(u,J.bK(a)&0x3ffffff),a)>=0},
j:function(a,b){var u,t,s,r
if(typeof b==="string"){u=this.b
if(u==null)return
t=this.bj(u,b)
s=t==null?null:t.b
return s}else if(typeof b==="number"&&(b&0x3ffffff)===b){r=this.c
if(r==null)return
t=this.bj(r,b)
s=t==null?null:t.b
return s}else return this.jL(b)},
jL:function(a){var u,t,s
u=this.d
if(u==null)return
t=this.c2(u,J.bK(a)&0x3ffffff)
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
this.d=s}r=J.bK(b)&0x3ffffff
q=this.c2(s,r)
if(q==null)this.ck(s,r,[this.ce(b,c)])
else{p=this.cH(q,b)
if(p>=0)q[p].b=c
else q.push(this.ce(b,c))}}},
O:function(a,b){var u,t
H.n(b,{func:1,ret:-1,args:[H.x(this,0),H.x(this,1)]})
u=this.e
t=this.r
for(;u!=null;){b.$2(u.a,u.b)
if(t!==this.r)throw H.f(P.bu(this))
u=u.c}},
d8:function(a,b,c){var u
H.E(b,H.x(this,0))
H.E(c,H.x(this,1))
u=this.bj(a,b)
if(u==null)this.ck(a,b,this.ce(b,c))
else u.b=c},
h2:function(){this.r=this.r+1&67108863},
ce:function(a,b){var u,t
u=new H.ha(H.E(a,H.x(this,0)),H.E(b,H.x(this,1)))
if(this.e==null){this.f=u
this.e=u}else{t=this.f
u.d=t
t.c=u
this.f=u}++this.a
this.h2()
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
fF:function(a,b){delete a[b]},
di:function(a,b){return this.bj(a,b)!=null},
cd:function(){var u=Object.create(null)
this.ck(u,"<non-identifier-key>",u)
this.fF(u,"<non-identifier-key>")
return u}}
H.ha.prototype={}
H.dB.prototype={
gl:function(a){return this.a.a},
gT:function(a){var u,t
u=this.a
t=new H.hb(u,u.r,this.$ti)
t.c=u.e
return t}}
H.hb.prototype={
gI:function(a){return this.d},
B:function(){var u=this.a
if(this.b!==u.r)throw H.f(P.bu(u))
else{u=this.c
if(u==null){this.sd7(null)
return!1}else{this.sd7(u.a)
this.c=this.c.c
return!0}}},
sd7:function(a){this.d=H.E(a,H.x(this,0))},
$iaS:1}
H.jS.prototype={
$1:function(a){return this.a(a)},
$S:15}
H.jT.prototype={
$2:function(a,b){return this.a(a,b)},
$S:29}
H.jU.prototype={
$1:function(a){return this.a(H.H(a))},
$S:38}
H.h5.prototype={
i:function(a){return"RegExp/"+this.a+"/"},
$ikY:1}
H.cy.prototype={$inW:1}
H.dK.prototype={
gl:function(a){return a.length},
$iF:1,
$aF:function(){}}
H.cx.prototype={
j:function(a,b){H.bH(b,a,a.length)
return a[b]},
$abT:function(){return[P.z]},
$av:function(){return[P.z]},
$id:1,
$ad:function(){return[P.z]},
$ib:1,
$ab:function(){return[P.z]}}
H.dL.prototype={
$abT:function(){return[P.B]},
$av:function(){return[P.B]},
$id:1,
$ad:function(){return[P.B]},
$ib:1,
$ab:function(){return[P.B]}}
H.hv.prototype={
j:function(a,b){H.bH(b,a,a.length)
return a[b]}}
H.hw.prototype={
j:function(a,b){H.bH(b,a,a.length)
return a[b]}}
H.hx.prototype={
j:function(a,b){H.bH(b,a,a.length)
return a[b]}}
H.hy.prototype={
j:function(a,b){H.bH(b,a,a.length)
return a[b]}}
H.hz.prototype={
j:function(a,b){H.bH(b,a,a.length)
return a[b]}}
H.dM.prototype={
gl:function(a){return a.length},
j:function(a,b){H.bH(b,a,a.length)
return a[b]},
$inX:1}
H.hA.prototype={
gl:function(a){return a.length},
j:function(a,b){H.bH(b,a,a.length)
return a[b]}}
H.cX.prototype={}
H.cY.prototype={}
H.cZ.prototype={}
H.d_.prototype={}
P.j4.prototype={
$1:function(a){var u,t
u=this.a
t=u.a
u.a=null
t.$0()},
$S:12}
P.j3.prototype={
$1:function(a){var u,t
this.a.a=H.n(a,{func:1,ret:-1})
u=this.b
t=this.c
u.firstChild?u.removeChild(t):u.appendChild(t)},
$S:40}
P.j5.prototype={
$0:function(){this.a.$0()},
$S:2}
P.j6.prototype={
$0:function(){this.a.$0()},
$S:2}
P.eY.prototype={
fl:function(a,b){if(self.setTimeout!=null)this.b=self.setTimeout(H.c7(new P.jG(this,b),0),a)
else throw H.f(P.ai("`setTimeout()` not found."))},
fm:function(a,b){if(self.setTimeout!=null)this.b=self.setInterval(H.c7(new P.jF(this,a,Date.now(),b),0),a)
else throw H.f(P.ai("Periodic timer."))},
$ib4:1}
P.jG.prototype={
$0:function(){var u=this.a
u.b=null
u.c=1
this.b.$0()},
$S:3}
P.jF.prototype={
$0:function(){var u,t,s,r
u=this.a
t=u.c+1
s=this.b
if(s>0){r=Date.now()-this.c
if(r>(t+1)*s)t=C.d.f3(r,s)}u.c=t
this.d.$1(u)},
$S:2}
P.b9.prototype={
jP:function(a){if(this.c!==6)return!0
return this.b.b.cT(H.n(this.d,{func:1,ret:P.O,args:[P.N]}),a.a,P.O,P.N)},
jJ:function(a){var u,t,s,r
u=this.e
t=P.N
s={futureOr:1,type:H.x(this,1)}
r=this.b.b
if(H.fe(u,{func:1,args:[P.N,P.aq]}))return H.ks(r.kg(u,a.a,a.b,null,t,P.aq),s)
else return H.ks(r.cT(H.n(u,{func:1,args:[P.N]}),a.a,null,t),s)}}
P.aC.prototype={
ey:function(a,b,c){var u,t,s,r
u=H.x(this,0)
H.n(a,{func:1,ret:{futureOr:1,type:c},args:[u]})
t=$.Z
if(t!==C.l){t.toString
H.n(a,{func:1,ret:{futureOr:1,type:c},args:[u]})
if(b!=null)b=P.n_(b,t)}H.n(a,{func:1,ret:{futureOr:1,type:c},args:[u]})
s=new P.aC(0,$.Z,[c])
r=b==null?1:3
this.d9(new P.b9(s,r,a,b,[u,c]))
return s},
km:function(a,b){return this.ey(a,null,b)},
d9:function(a){var u,t
u=this.a
if(u<=1){a.a=H.k(this.c,"$ib9")
this.c=a}else{if(u===2){t=H.k(this.c,"$iaC")
u=t.a
if(u<4){t.d9(a)
return}this.a=u
this.c=t.c}u=this.b
u.toString
P.jM(null,null,u,H.n(new P.je(this,a),{func:1,ret:-1}))}},
dz:function(a){var u,t,s,r,q,p
u={}
u.a=a
if(a==null)return
t=this.a
if(t<=1){s=H.k(this.c,"$ib9")
this.c=a
if(s!=null){for(r=a;q=r.a,q!=null;r=q);r.a=s}}else{if(t===2){p=H.k(this.c,"$iaC")
t=p.a
if(t<4){p.dz(a)
return}this.a=t
this.c=p.c}u.a=this.bk(a)
t=this.b
t.toString
P.jM(null,null,t,H.n(new P.ji(u,this),{func:1,ret:-1}))}},
ci:function(){var u=H.k(this.c,"$ib9")
this.c=null
return this.bk(u)},
bk:function(a){var u,t,s
for(u=a,t=null;u!=null;t=u,u=s){s=u.a
u.a=t}return t},
de:function(a){var u,t,s
u=H.x(this,0)
H.ks(a,{futureOr:1,type:u})
t=this.$ti
if(H.d7(a,"$icq",t,"$acq"))if(H.d7(a,"$iaC",t,null))P.ln(a,this)
else P.mP(a,this)
else{s=this.ci()
H.E(a,u)
this.a=4
this.c=a
P.cW(this,s)}},
df:function(a,b){var u
H.k(b,"$iaq")
u=this.ci()
this.a=8
this.c=new P.af(a,b)
P.cW(this,u)},
$icq:1}
P.je.prototype={
$0:function(){P.cW(this.a,this.b)},
$S:2}
P.ji.prototype={
$0:function(){P.cW(this.b,this.a.a)},
$S:2}
P.jf.prototype={
$1:function(a){var u=this.a
u.a=0
u.de(a)},
$S:12}
P.jg.prototype={
$2:function(a,b){H.k(b,"$iaq")
this.a.df(a,b)},
$1:function(a){return this.$2(a,null)},
$S:44}
P.jh.prototype={
$0:function(){this.a.df(this.b,this.c)},
$S:2}
P.jl.prototype={
$0:function(){var u,t,s,r,q,p,o
u=null
try{r=this.c
u=r.b.b.ex(H.n(r.d,{func:1}),null)}catch(q){t=H.ay(q)
s=H.cb(q)
if(this.d){r=H.k(this.a.a.c,"$iaf").a
p=t
p=r==null?p==null:r===p
r=p}else r=!1
p=this.b
if(r)p.b=H.k(this.a.a.c,"$iaf")
else p.b=new P.af(t,s)
p.a=!0
return}if(!!J.a_(u).$icq){if(u instanceof P.aC&&u.a>=4){if(u.a===8){r=this.b
r.b=H.k(u.c,"$iaf")
r.a=!0}return}o=this.a.a
r=this.b
r.b=u.km(new P.jm(o),null)
r.a=!1}},
$S:3}
P.jm.prototype={
$1:function(a){return this.a},
$S:34}
P.jk.prototype={
$0:function(){var u,t,s,r,q,p,o
try{s=this.b
r=H.x(s,0)
q=H.E(this.c,r)
p=H.x(s,1)
this.a.b=s.b.b.cT(H.n(s.d,{func:1,ret:{futureOr:1,type:p},args:[r]}),q,{futureOr:1,type:p},r)}catch(o){u=H.ay(o)
t=H.cb(o)
s=this.a
s.b=new P.af(u,t)
s.a=!0}},
$S:3}
P.jj.prototype={
$0:function(){var u,t,s,r,q,p,o,n
try{u=H.k(this.a.a.c,"$iaf")
r=this.c
if(r.jP(u)&&r.e!=null){q=this.b
q.b=r.jJ(u)
q.a=!1}}catch(p){t=H.ay(p)
s=H.cb(p)
r=H.k(this.a.a.c,"$iaf")
q=r.a
o=t
n=this.b
if(q==null?o==null:q===o)n.b=r
else n.b=new P.af(t,s)
n.a=!0}},
$S:3}
P.ek.prototype={}
P.ib.prototype={
gl:function(a){var u,t,s,r
u={}
t=new P.aC(0,$.Z,[P.B])
u.a=0
s=H.x(this,0)
r=H.n(new P.id(u,this),{func:1,ret:-1,args:[s]})
H.n(new P.ie(u,t),{func:1,ret:-1})
W.a8(this.a,this.b,r,!1,s)
return t}}
P.id.prototype={
$1:function(a){H.E(a,H.x(this.b,0));++this.a.a},
$S:function(){return{func:1,ret:P.K,args:[H.x(this.b,0)]}}}
P.ie.prototype={
$0:function(){this.b.de(this.a.a)},
$S:2}
P.cF.prototype={}
P.ic.prototype={}
P.b4.prototype={}
P.af.prototype={
i:function(a){return H.m(this.a)},
$ibw:1}
P.jJ.prototype={$ioa:1}
P.jL.prototype={
$0:function(){var u,t,s
u=this.a
t=u.a
if(t==null){s=new P.dO()
u.a=s
u=s}else u=t
t=this.b
if(t==null)throw H.f(u)
s=H.f(u)
s.stack=t.i(0)
throw s},
$S:2}
P.js.prototype={
kh:function(a){var u,t,s
H.n(a,{func:1,ret:-1})
try{if(C.l===$.Z){a.$0()
return}P.lt(null,null,this,a,-1)}catch(s){u=H.ay(s)
t=H.cb(s)
P.jK(null,null,this,u,H.k(t,"$iaq"))}},
ki:function(a,b,c){var u,t,s
H.n(a,{func:1,ret:-1,args:[c]})
H.E(b,c)
try{if(C.l===$.Z){a.$1(b)
return}P.lu(null,null,this,a,b,-1,c)}catch(s){u=H.ay(s)
t=H.cb(s)
P.jK(null,null,this,u,H.k(t,"$iaq"))}},
jb:function(a,b){return new P.ju(this,H.n(a,{func:1,ret:b}),b)},
cp:function(a){return new P.jt(this,H.n(a,{func:1,ret:-1}))},
dM:function(a,b){return new P.jv(this,H.n(a,{func:1,ret:-1,args:[b]}),b)},
ex:function(a,b){H.n(a,{func:1,ret:b})
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
P.ju.prototype={
$0:function(){return this.a.ex(this.b,this.c)},
$S:function(){return{func:1,ret:this.c}}}
P.jt.prototype={
$0:function(){return this.a.kh(this.b)},
$S:3}
P.jv.prototype={
$1:function(a){var u=this.c
return this.a.ki(this.b,H.E(a,u),u)},
$S:function(){return{func:1,ret:-1,args:[this.c]}}}
P.jq.prototype={
gT:function(a){var u=new P.ez(this,this.r,this.$ti)
u.c=this.e
return u},
gl:function(a){return this.a},
X:function(a,b){var u,t
if(typeof b==="string"&&b!=="__proto__"){u=this.b
if(u==null)return!1
return H.k(u[b],"$ic4")!=null}else{t=this.fB(b)
return t}},
fB:function(a){var u=this.d
if(u==null)return!1
return this.c0(this.dm(u,a),a)>=0},
h:function(a,b){var u,t
H.E(b,H.x(this,0))
if(typeof b==="string"&&b!=="__proto__"){u=this.b
if(u==null){u=P.kk()
this.b=u}return this.da(u,b)}else if(typeof b==="number"&&(b&1073741823)===b){t=this.c
if(t==null){t=P.kk()
this.c=t}return this.da(t,b)}else return this.fp(0,b)},
fp:function(a,b){var u,t,s
H.E(b,H.x(this,0))
u=this.d
if(u==null){u=P.kk()
this.d=u}t=this.dg(b)
s=u[t]
if(s==null)u[t]=[this.bY(b)]
else{if(this.c0(s,b)>=0)return!1
s.push(this.bY(b))}return!0},
P:function(a,b){if(typeof b==="number"&&(b&1073741823)===b)return this.i1(this.c,b)
else return this.hZ(0,b)},
hZ:function(a,b){var u,t,s
u=this.d
if(u==null)return!1
t=this.dm(u,b)
s=this.c0(t,b)
if(s<0)return!1
this.dE(t.splice(s,1)[0])
return!0},
da:function(a,b){H.E(b,H.x(this,0))
if(H.k(a[b],"$ic4")!=null)return!1
a[b]=this.bY(b)
return!0},
i1:function(a,b){var u
if(a==null)return!1
u=H.k(a[b],"$ic4")
if(u==null)return!1
this.dE(u)
delete a[b]
return!0},
dd:function(){this.r=1073741823&this.r+1},
bY:function(a){var u,t
u=new P.c4(H.E(a,H.x(this,0)))
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
dg:function(a){return J.bK(a)&1073741823},
dm:function(a,b){return a[this.dg(b)]},
c0:function(a,b){var u,t
if(a==null)return-1
u=a.length
for(t=0;t<u;++t)if(J.a0(a[t].a,b))return t
return-1}}
P.c4.prototype={}
P.ez.prototype={
gI:function(a){return this.d},
B:function(){var u=this.a
if(this.b!==u.r)throw H.f(P.bu(u))
else{u=this.c
if(u==null){this.sdc(null)
return!1}else{this.sdc(H.E(u.a,H.x(this,0)))
this.c=this.c.b
return!0}}},
sdc:function(a){this.d=H.E(a,H.x(this,0))},
$iaS:1}
P.hc.prototype={$id:1,$ib:1}
P.v.prototype={
gT:function(a){return new H.ct(a,this.gl(a),0,[H.ca(this,a,"v",0)])},
H:function(a,b){return this.j(a,b)},
kp:function(a,b){var u,t
u=H.c([],[H.ca(this,a,"v",0)])
C.a.sl(u,this.gl(a))
for(t=0;t<this.gl(a);++t)C.a.Y(u,t,this.j(a,t))
return u},
ko:function(a){return this.kp(a,!0)},
p:function(a,b){var u,t
u=[H.ca(this,a,"v",0)]
H.l(b,"$ib",u,"$ab")
t=H.c([],u)
C.a.sl(t,C.d.p(this.gl(a),b.gl(b)))
C.a.be(t,0,this.gl(a),a)
C.a.be(t,this.gl(a),t.length,b)
return t},
i:function(a){return P.ka(a,"[","]")}}
P.he.prototype={}
P.hf.prototype={
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
O:function(a,b){var u,t
H.n(b,{func:1,ret:-1,args:[H.ca(this,a,"aa",0),H.ca(this,a,"aa",1)]})
for(u=J.bL(this.ga7(a));u.B();){t=u.gI(u)
b.$2(t,this.j(a,t))}},
gl:function(a){return J.bM(this.ga7(a))},
i:function(a){return P.kU(a)},
$iP:1}
P.jx.prototype={
a6:function(a,b){var u
for(u=J.bL(H.l(b,"$id",this.$ti,"$ad"));u.B();)this.h(0,u.gI(u))},
i:function(a){return P.ka(this,"{","}")},
H:function(a,b){var u,t,s
if(b<0)H.u(P.aA(b,0,null,"index",null))
for(u=P.mT(this,this.r,H.x(this,0)),t=0;u.B();){s=u.d
if(b===t)return s;++t}throw H.f(P.W(b,this,"index",null,t))},
$id:1,
$il6:1}
P.eA.prototype={}
P.ck.prototype={}
P.cl.prototype={}
P.fI.prototype={
$ack:function(){return[P.h,[P.b,P.B]]}}
P.h_.prototype={
i:function(a){return this.a}}
P.fZ.prototype={
fC:function(a,b,c){var u,t,s,r,q,p
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
default:p=null}if(p!=null){if(q==null)q=new P.bj("")
if(r>b)q.a+=C.j.bg(a,b,r)
q.a+=p
b=r+1}}if(q==null)return
if(c>b)q.a+=J.m7(a,b,c)
u=q.a
return u.charCodeAt(0)==0?u:u},
$acl:function(){return[P.h,P.h]}}
P.iM.prototype={}
P.iN.prototype={
jl:function(a,b,c){var u,t,s
c=P.kf(b,c,a.length,null,null,null)
u=c-b
if(u===0)return new Uint8Array(0)
t=new Uint8Array(u*3)
s=new P.jH(t)
if(s.fO(a,b,c)!==c)s.dF(C.j.cu(a,c-1),0)
return new Uint8Array(t.subarray(0,H.mW(0,s.b,t.length)))},
jk:function(a){return this.jl(a,0,null)},
$acl:function(){return[P.h,[P.b,P.B]]}}
P.jH.prototype={
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
fO:function(a,b,c){var u,t,s,r,q,p,o
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
t=P.dk(H.mx(this))
s=P.dk(H.mt(this))
r=P.dk(H.mu(this))
q=P.dk(H.mw(this))
p=P.dk(H.my(this))
o=P.mg(H.mv(this))
n=u+"-"+t+"-"+s+" "+r+":"+q+":"+p+"."+o
return n}}
P.z.prototype={}
P.aP.prototype={
p:function(a,b){return new P.aP(C.d.p(this.a,b.gfH()))},
t:function(a,b){return new P.aP(C.d.t(this.a,b.gfH()))},
A:function(a,b){if(b==null)return!1
return b instanceof P.aP&&this.a===b.a},
gJ:function(a){return C.d.gJ(this.a)},
i:function(a){var u,t,s,r,q
u=new P.fF()
t=this.a
if(t<0)return"-"+new P.aP(0-t).i(0)
s=u.$1(C.d.a3(t,6e7)%60)
r=u.$1(C.d.a3(t,1e6)%60)
q=new P.fE().$1(t%1e6)
return""+C.d.a3(t,36e8)+":"+H.m(s)+":"+H.m(r)+"."+H.m(q)}}
P.fE.prototype={
$1:function(a){if(a>=1e5)return""+a
if(a>=1e4)return"0"+a
if(a>=1000)return"00"+a
if(a>=100)return"000"+a
if(a>=10)return"0000"+a
return"00000"+a},
$S:21}
P.fF.prototype={
$1:function(a){if(a>=10)return""+a
return"0"+a},
$S:21}
P.bw.prototype={}
P.dO.prototype={
i:function(a){return"Throw of null."}}
P.aE.prototype={
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
p=P.fK(this.b)
return r+q+": "+p}}
P.c0.prototype={
gc_:function(){return"RangeError"},
gbZ:function(){var u,t,s
u=this.e
if(u==null){u=this.f
t=u!=null?": Not less than or equal to "+H.m(u):""}else{s=this.f
if(s==null)t=": Not greater than or equal to "+H.m(u)
else if(s>u)t=": Not in range "+H.m(u)+".."+H.m(s)+", inclusive"
else t=s<u?": Valid value range is empty":": Only valid value is "+H.m(u)}return t}}
P.h1.prototype={
gc_:function(){return"RangeError"},
gbZ:function(){var u,t
u=H.a9(this.b)
if(typeof u!=="number")return u.aX()
if(u<0)return": index must not be negative"
t=this.f
if(t===0)return": no indices are valid"
return": index should be less than "+H.m(t)},
gl:function(a){return this.f}}
P.iK.prototype={
i:function(a){return"Unsupported operation: "+this.a}}
P.iI.prototype={
i:function(a){var u=this.a
return u!=null?"UnimplementedError: "+u:"UnimplementedError"}}
P.c2.prototype={
i:function(a){return"Bad state: "+this.a}}
P.ft.prototype={
i:function(a){var u=this.a
if(u==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+P.fK(u)+"."}}
P.hH.prototype={
i:function(a){return"Out of Memory"},
$ibw:1}
P.e_.prototype={
i:function(a){return"Stack Overflow"},
$ibw:1}
P.fy.prototype={
i:function(a){var u=this.a
return u==null?"Reading static variable during its initialization":"Reading static variable '"+u+"' during its initialization"}}
P.es.prototype={
i:function(a){return"Exception: "+this.a}}
P.fU.prototype={
i:function(a){var u,t,s,r
u=this.a
t=""!==u?"FormatException: "+u:"FormatException"
s=this.b
r=s.length>78?C.j.bg(s,0,75)+"...":s
return t+"\n"+r}}
P.bx.prototype={}
P.B.prototype={}
P.d.prototype={
bO:function(a,b){var u=H.al(this,"d",0)
return new H.cT(this,H.n(b,{func:1,ret:P.O,args:[u]}),[u])},
gl:function(a){var u,t
u=this.gT(this)
for(t=0;u.B();)++t
return t},
gaH:function(a){var u,t
u=this.gT(this)
if(!u.B())throw H.f(H.h2())
t=u.gI(u)
if(u.B())throw H.f(H.mm())
return t},
H:function(a,b){var u,t,s
if(b<0)H.u(P.aA(b,0,null,"index",null))
for(u=this.gT(this),t=0;u.B();){s=u.gI(u)
if(b===t)return s;++t}throw H.f(P.W(b,this,"index",null,t))},
i:function(a){return P.mk(this,"(",")")}}
P.aS.prototype={}
P.b.prototype={$id:1}
P.P.prototype={}
P.K.prototype={
gJ:function(a){return P.N.prototype.gJ.call(this,this)},
i:function(a){return"null"}}
P.a4.prototype={}
P.N.prototype={constructor:P.N,$iN:1,
A:function(a,b){return this===b},
gJ:function(a){return H.cB(this)},
i:function(a){return"Instance of '"+H.c_(this)+"'"},
toString:function(){return this.i(this)}}
P.aq.prototype={}
P.h.prototype={$ikY:1}
P.bj.prototype={
gl:function(a){return this.a.length},
i:function(a){var u=this.a
return u.charCodeAt(0)==0?u:u}}
W.w.prototype={}
W.fh.prototype={
gl:function(a){return a.length}}
W.db.prototype={
i:function(a){return String(a)},
$idb:1}
W.fi.prototype={
i:function(a){return String(a)}}
W.cf.prototype={$icf:1}
W.dd.prototype={}
W.br.prototype={$ibr:1}
W.bP.prototype={
cX:function(a,b,c){if(c!=null)return this.fP(a,b,P.n7(c,null))
return this.fQ(a,b)},
eI:function(a,b){return this.cX(a,b,null)},
fP:function(a,b,c){return a.getContext(b,c)},
fQ:function(a,b){return a.getContext(b)},
$ibP:1,
$ikJ:1}
W.bQ.prototype={
fR:function(a,b,c,d,e){return a.getImageData(b,c,d,e)},
jy:function(a,b,c,d,e,f){return a.drawImage(b,c,d,e,f)},
$ibQ:1}
W.bs.prototype={
gl:function(a){return a.length}}
W.cm.prototype={$icm:1}
W.fu.prototype={
gl:function(a){return a.length}}
W.T.prototype={$iT:1}
W.cn.prototype={
gl:function(a){return a.length}}
W.fv.prototype={}
W.aN.prototype={}
W.aO.prototype={}
W.fw.prototype={
gl:function(a){return a.length}}
W.fx.prototype={
gl:function(a){return a.length}}
W.fA.prototype={
gl:function(a){return a.length}}
W.az.prototype={$iaz:1}
W.co.prototype={
j6:function(a,b){return a.adoptNode(b)},
eJ:function(a,b){return a.getElementById(b)}}
W.fB.prototype={
i:function(a){return String(a)}}
W.dl.prototype={
jo:function(a,b){return a.createHTMLDocument(b)}}
W.dm.prototype={
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
W.dn.prototype={
i:function(a){return"Rectangle ("+H.m(a.left)+", "+H.m(a.top)+") "+H.m(this.gaG(a))+" x "+H.m(this.gaA(a))},
A:function(a,b){var u
if(b==null)return!1
if(!H.d7(b,"$iac",[P.a4],"$aac"))return!1
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
W.fC.prototype={
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
W.fD.prototype={
gl:function(a){return a.length}}
W.j8.prototype={
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
gja:function(a){return new W.ja(a)},
gdQ:function(a){return new W.j8(a,a.children)},
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
if(u==null){u=H.c([],[W.aw])
t=new W.dN(u)
C.a.h(u,W.lo(null))
C.a.h(u,W.lq())
$.kO=t
d=t}else d=u
u=$.kN
if(u==null){u=new W.f3(d)
$.kN=u
c=u}else{u.a=d
c=u}}if($.bc==null){u=document
t=u.implementation
t=(t&&C.J).jo(t,"")
$.bc=t
$.k8=t.createRange()
t=$.bc
t.toString
t=t.createElement("base")
H.k(t,"$icf")
t.href=u.baseURI
u=$.bc.head;(u&&C.L).C(u,t)}u=$.bc
if(u.body==null){u.toString
t=u.createElement("body")
u.body=H.k(t,"$ibr")}u=$.bc
if(!!this.$ibr)s=u.body
else{t=a.tagName
u.toString
s=u.createElement(t)
u=$.bc.body;(u&&C.n).C(u,s)}if("createContextualFragment" in window.Range.prototype&&!C.a.X(C.X,a.tagName)){u=$.k8;(u&&C.E).eQ(u,s)
u=$.k8
r=(u&&C.E).jm(u,b)}else{s.innerHTML=b
r=$.bc.createDocumentFragment()
for(u=J.as(r);t=s.firstChild,t!=null;)u.C(r,t)}u=$.bc.body
if(s==null?u!=null:s!==u)J.kF(s)
c.cZ(r)
C.z.j6(document,r)
return r},
jn:function(a,b,c){return this.af(a,b,c,null)},
eS:function(a,b,c,d){a.textContent=null
this.C(a,this.af(a,b,c,d))},
eR:function(a,b){return this.eS(a,b,null,null)},
aW:function(a,b){return a.getAttribute(b)},
i_:function(a,b){return a.removeAttribute(b)},
$iU:1,
gkj:function(a){return a.tagName}}
W.fH.prototype={
$1:function(a){return!!J.a_(H.k(a,"$iD")).$iU},
$S:19}
W.o.prototype={$io:1}
W.e.prototype={
j2:function(a,b,c,d){H.n(c,{func:1,args:[W.o]})
if(c!=null)this.fq(a,b,c,!1)},
fq:function(a,b,c,d){return a.addEventListener(b,H.c7(H.n(c,{func:1,args:[W.o]}),1),!1)},
$ie:1}
W.aQ.prototype={$iaQ:1}
W.fO.prototype={
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.W(b,a,null,null,null))
return a[b]},
H:function(a,b){if(b<0||b>=a.length)return H.j(a,b)
return a[b]},
$iF:1,
$aF:function(){return[W.aQ]},
$av:function(){return[W.aQ]},
$id:1,
$ad:function(){return[W.aQ]},
$ib:1,
$ab:function(){return[W.aQ]},
$aA:function(){return[W.aQ]}}
W.fP.prototype={
gl:function(a){return a.length}}
W.fT.prototype={
gl:function(a){return a.length}}
W.aR.prototype={$iaR:1}
W.dt.prototype={}
W.fY.prototype={
gl:function(a){return a.length}}
W.bU.prototype={
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
$ibU:1,
$aA:function(){return[W.D]}}
W.du.prototype={}
W.by.prototype={$iby:1,
gdU:function(a){return a.data}}
W.cs.prototype={$ics:1,$ikJ:1}
W.aU.prototype={$iaU:1}
W.dD.prototype={
i:function(a){return String(a)},
$idD:1}
W.cv.prototype={}
W.ho.prototype={
gl:function(a){return a.length}}
W.hp.prototype={
j:function(a,b){return P.bl(a.get(H.H(b)))},
O:function(a,b){var u,t
H.n(b,{func:1,ret:-1,args:[P.h,,]})
u=a.entries()
for(;!0;){t=u.next()
if(t.done)return
b.$2(t.value[0],P.bl(t.value[1]))}},
ga7:function(a){var u=H.c([],[P.h])
this.O(a,new W.hq(u))
return u},
gl:function(a){return a.size},
$aaa:function(){return[P.h,null]},
$iP:1,
$aP:function(){return[P.h,null]}}
W.hq.prototype={
$2:function(a,b){return C.a.h(this.a,a)},
$S:7}
W.hr.prototype={
j:function(a,b){return P.bl(a.get(H.H(b)))},
O:function(a,b){var u,t
H.n(b,{func:1,ret:-1,args:[P.h,,]})
u=a.entries()
for(;!0;){t=u.next()
if(t.done)return
b.$2(t.value[0],P.bl(t.value[1]))}},
ga7:function(a){var u=H.c([],[P.h])
this.O(a,new W.hs(u))
return u},
gl:function(a){return a.size},
$aaa:function(){return[P.h,null]},
$iP:1,
$aP:function(){return[P.h,null]}}
W.hs.prototype={
$2:function(a,b){return C.a.h(this.a,a)},
$S:7}
W.aX.prototype={$iaX:1}
W.ht.prototype={
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.W(b,a,null,null,null))
return a[b]},
H:function(a,b){if(b<0||b>=a.length)return H.j(a,b)
return a[b]},
$iF:1,
$aF:function(){return[W.aX]},
$av:function(){return[W.aX]},
$id:1,
$ad:function(){return[W.aX]},
$ib:1,
$ab:function(){return[W.aX]},
$aA:function(){return[W.aX]}}
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
return new W.dr(u,u.length,-1,[H.ca(C.Z,u,"A",0)])},
gl:function(a){return this.a.childNodes.length},
j:function(a,b){var u=this.a.childNodes
if(b<0||b>=u.length)return H.j(u,b)
return u[b]},
$av:function(){return[W.D]},
$ad:function(){return[W.D]},
$ab:function(){return[W.D]}}
W.D.prototype={
kb:function(a){var u=a.parentNode
if(u!=null)J.fg(u,a)},
i:function(a){var u=a.nodeValue
return u==null?this.eY(a):u},
C:function(a,b){return a.appendChild(b)},
i0:function(a,b){return a.removeChild(b)},
$iD:1}
W.cz.prototype={
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
W.aZ.prototype={$iaZ:1,
gl:function(a){return a.length}}
W.hK.prototype={
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.W(b,a,null,null,null))
return a[b]},
H:function(a,b){if(b<0||b>=a.length)return H.j(a,b)
return a[b]},
$iF:1,
$aF:function(){return[W.aZ]},
$av:function(){return[W.aZ]},
$id:1,
$ad:function(){return[W.aZ]},
$ib:1,
$ab:function(){return[W.aZ]},
$aA:function(){return[W.aZ]}}
W.dS.prototype={
jm:function(a,b){return a.createContextualFragment(b)},
eQ:function(a,b){return a.selectNodeContents(b)}}
W.hT.prototype={
j:function(a,b){return P.bl(a.get(H.H(b)))},
O:function(a,b){var u,t
H.n(b,{func:1,ret:-1,args:[P.h,,]})
u=a.entries()
for(;!0;){t=u.next()
if(t.done)return
b.$2(t.value[0],P.bl(t.value[1]))}},
ga7:function(a){var u=H.c([],[P.h])
this.O(a,new W.hU(u))
return u},
gl:function(a){return a.size},
$aaa:function(){return[P.h,null]},
$iP:1,
$aP:function(){return[P.h,null]}}
W.hU.prototype={
$2:function(a,b){return C.a.h(this.a,a)},
$S:7}
W.hW.prototype={
gl:function(a){return a.length}}
W.b0.prototype={$ib0:1}
W.i5.prototype={
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.W(b,a,null,null,null))
return a[b]},
H:function(a,b){if(b<0||b>=a.length)return H.j(a,b)
return a[b]},
$iF:1,
$aF:function(){return[W.b0]},
$av:function(){return[W.b0]},
$id:1,
$ad:function(){return[W.b0]},
$ib:1,
$ab:function(){return[W.b0]},
$aA:function(){return[W.b0]}}
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
W.b2.prototype={$ib2:1,
gl:function(a){return a.length}}
W.i9.prototype={
j:function(a,b){return this.dn(a,H.H(b))},
O:function(a,b){var u,t
H.n(b,{func:1,ret:-1,args:[P.h,P.h]})
for(u=0;!0;++u){t=this.fU(a,u)
if(t==null)return
b.$2(t,this.dn(a,t))}},
ga7:function(a){var u=H.c([],[P.h])
this.O(a,new W.ia(u))
return u},
gl:function(a){return a.length},
dn:function(a,b){return a.getItem(b)},
fU:function(a,b){return a.key(b)},
$aaa:function(){return[P.h,P.h]},
$iP:1,
$aP:function(){return[P.h,P.h]}}
W.ia.prototype={
$2:function(a,b){return C.a.h(this.a,a)},
$S:39}
W.aG.prototype={$iaG:1}
W.c3.prototype={}
W.e0.prototype={
af:function(a,b,c,d){var u,t
if("createContextualFragment" in window.Range.prototype)return this.bT(a,b,c,d)
u=W.mh("<table>"+b+"</table>",c,d)
t=document.createDocumentFragment()
t.toString
u.toString
new W.ak(t).a6(0,new W.ak(u))
return t}}
W.e1.prototype={
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
W.ih.prototype={
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
W.cH.prototype={$icH:1}
W.b3.prototype={$ib3:1}
W.aH.prototype={$iaH:1}
W.ij.prototype={
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
W.ik.prototype={
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
W.ip.prototype={
gl:function(a){return a.length}}
W.b5.prototype={$ib5:1}
W.aI.prototype={$iaI:1}
W.it.prototype={
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.W(b,a,null,null,null))
return a[b]},
H:function(a,b){if(b<0||b>=a.length)return H.j(a,b)
return a[b]},
$iF:1,
$aF:function(){return[W.b5]},
$av:function(){return[W.b5]},
$id:1,
$ad:function(){return[W.b5]},
$ib:1,
$ab:function(){return[W.b5]},
$aA:function(){return[W.b5]}}
W.iu.prototype={
gl:function(a){return a.length}}
W.bE.prototype={}
W.iL.prototype={
i:function(a){return String(a)}}
W.j0.prototype={$ikJ:1}
W.j1.prototype={
gl:function(a){return a.length}}
W.b8.prototype={
gju:function(a){if(a.deltaY!==undefined)return a.deltaY
throw H.f(P.ai("deltaY is not supported"))},
gjt:function(a){if(a.deltaX!==undefined)return a.deltaX
throw H.f(P.ai("deltaX is not supported"))},
$ib8:1}
W.cU.prototype={
i6:function(a,b){return a.requestAnimationFrame(H.c7(H.n(b,{func:1,ret:-1,args:[P.a4]}),1))},
fI:function(a){if(!!(a.requestAnimationFrame&&a.cancelAnimationFrame))return;(function(b){var u=['ms','moz','webkit','o']
for(var t=0;t<u.length&&!b.requestAnimationFrame;++t){b.requestAnimationFrame=b[u[t]+'RequestAnimationFrame']
b.cancelAnimationFrame=b[u[t]+'CancelAnimationFrame']||b[u[t]+'CancelRequestAnimationFrame']}if(b.requestAnimationFrame&&b.cancelAnimationFrame)return
b.requestAnimationFrame=function(c){return window.setTimeout(function(){c(Date.now())},16)}
b.cancelAnimationFrame=function(c){clearTimeout(c)}})(a)}}
W.cV.prototype={$icV:1}
W.j9.prototype={
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
W.en.prototype={
i:function(a){return"Rectangle ("+H.m(a.left)+", "+H.m(a.top)+") "+H.m(a.width)+" x "+H.m(a.height)},
A:function(a,b){var u
if(b==null)return!1
if(!H.d7(b,"$iac",[P.a4],"$aac"))return!1
u=J.as(b)
return a.left===u.gbG(b)&&a.top===u.gbM(b)&&a.width===u.gaG(b)&&a.height===u.gaA(b)},
gJ:function(a){return W.lp(C.e.gJ(a.left),C.e.gJ(a.top),C.e.gJ(a.width),C.e.gJ(a.height))},
gaA:function(a){return a.height},
gaG:function(a){return a.width}}
W.jn.prototype={
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
W.eF.prototype={
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
W.jA.prototype={
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
W.jB.prototype={
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.W(b,a,null,null,null))
return a[b]},
H:function(a,b){if(b<0||b>=a.length)return H.j(a,b)
return a[b]},
$iF:1,
$aF:function(){return[W.aG]},
$av:function(){return[W.aG]},
$id:1,
$ad:function(){return[W.aG]},
$ib:1,
$ab:function(){return[W.aG]},
$aA:function(){return[W.aG]}}
W.j7.prototype={
O:function(a,b){var u,t,s,r,q,p
H.n(b,{func:1,ret:-1,args:[P.h,P.h]})
for(u=this.ga7(this),t=u.length,s=this.a,r=J.as(s),q=0;q<u.length;u.length===t||(0,H.C)(u),++q){p=u[q]
b.$2(p,r.aW(s,p))}},
ga7:function(a){var u,t,s,r,q
u=this.a.attributes
t=H.c([],[P.h])
for(s=u.length,r=0;r<s;++r){if(r>=u.length)return H.j(u,r)
q=H.k(u[r],"$icV")
if(q.namespaceURI==null)C.a.h(t,q.name)}return t},
$aaa:function(){return[P.h,P.h]},
$aP:function(){return[P.h,P.h]}}
W.ja.prototype={
j:function(a,b){return J.k2(this.a,H.H(b))},
gl:function(a){return this.ga7(this).length}}
W.jb.prototype={}
W.kj.prototype={}
W.jc.prototype={}
W.jd.prototype={
$1:function(a){return this.a.$1(H.k(a,"$io"))},
$S:35}
W.bG.prototype={
fa:function(a){var u,t
u=$.kC()
if(u.a===0){for(t=0;t<262;++t)u.Y(0,C.W[t],W.ni())
for(t=0;t<12;++t)u.Y(0,C.u[t],W.nj())}},
aQ:function(a){return $.lZ().X(0,W.cp(a))},
ao:function(a,b,c){var u,t,s
u=W.cp(a)
t=$.kC()
s=t.j(0,H.m(u)+"::"+b)
if(s==null)s=t.j(0,"*::"+b)
if(s==null)return!1
return H.kp(s.$4(a,b,c,this))},
$iaw:1}
W.A.prototype={
gT:function(a){return new W.dr(a,this.gl(a),-1,[H.ca(this,a,"A",0)])}}
W.dN.prototype={
aQ:function(a){return C.a.dK(this.a,new W.hC(a))},
ao:function(a,b,c){return C.a.dK(this.a,new W.hB(a,b,c))},
$iaw:1}
W.hC.prototype={
$1:function(a){return H.k(a,"$iaw").aQ(this.a)},
$S:22}
W.hB.prototype={
$1:function(a){return H.k(a,"$iaw").ao(this.a,this.b,this.c)},
$S:22}
W.eN.prototype={
fk:function(a,b,c,d){var u,t,s
this.a.a6(0,c)
u=b.bO(0,new W.jy())
t=b.bO(0,new W.jz())
this.b.a6(0,u)
s=this.c
s.a6(0,C.Y)
s.a6(0,t)},
aQ:function(a){return this.a.X(0,W.cp(a))},
ao:function(a,b,c){var u,t
u=W.cp(a)
t=this.c
if(t.X(0,H.m(u)+"::"+b))return this.d.j7(c)
else if(t.X(0,"*::"+b))return this.d.j7(c)
else{t=this.b
if(t.X(0,H.m(u)+"::"+b))return!0
else if(t.X(0,"*::"+b))return!0
else if(t.X(0,H.m(u)+"::*"))return!0
else if(t.X(0,"*::*"))return!0}return!1},
$iaw:1}
W.jy.prototype={
$1:function(a){return!C.a.X(C.u,H.H(a))},
$S:16}
W.jz.prototype={
$1:function(a){return C.a.X(C.u,H.H(a))},
$S:16}
W.jD.prototype={
ao:function(a,b,c){if(this.f2(a,b,c))return!0
if(b==="template"&&c==="")return!0
if(J.k2(a,"template")==="")return this.e.X(0,b)
return!1}}
W.jE.prototype={
$1:function(a){return"TEMPLATE::"+H.m(H.H(a))},
$S:33}
W.jC.prototype={
aQ:function(a){var u=J.a_(a)
if(!!u.$icC)return!1
u=!!u.$ip
if(u&&W.cp(a)==="foreignObject")return!1
if(u)return!0
return!1},
ao:function(a,b,c){if(b==="is"||C.j.bS(b,"on"))return!1
return this.aQ(a)},
$iaw:1}
W.dr.prototype={
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
$iaS:1}
W.aw.prototype={}
W.jw.prototype={$inY:1}
W.f3.prototype={
cZ:function(a){new W.jI(this).$2(a,null)},
b2:function(a,b){if(b==null)J.kF(a)
else J.fg(b,a)},
ib:function(a,b){var u,t,s,r,q,p,o,n
u=!0
t=null
s=null
try{t=J.m5(a)
s=J.k2(t.a,"is")
r=function(c){if(!(c.attributes instanceof NamedNodeMap))return true
var m=c.childNodes
if(c.lastChild&&c.lastChild!==m[m.length-1])return true
if(c.children)if(!(c.children instanceof HTMLCollection||c.children instanceof NodeList))return true
var l=0
if(c.children)l=c.children.length
for(var k=0;k<l;k++){var j=c.children[k]
if(j.id=='attributes'||j.name=='attributes'||j.id=='lastChild'||j.name=='lastChild'||j.id=='children'||j.name=='children')return true}return false}(a)
u=r?!0:!(a.attributes instanceof NamedNodeMap)}catch(o){H.ay(o)}q="element unprintable"
try{q=J.aL(a)}catch(o){H.ay(o)}try{p=W.cp(a)
this.ia(H.k(a,"$iU"),b,u,q,p,H.k(t,"$iP"),H.H(s))}catch(o){if(H.ay(o) instanceof P.aE)throw o
else{this.b2(a,b)
window
n="Removing corrupted element "+H.m(q)
if(typeof console!="undefined")window.console.warn(n)}}},
ia:function(a,b,c,d,e,f,g){var u,t,s,r,q,p
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
r.i_(u,q)}}if(!!J.a_(a).$icH)this.cZ(a.content)},
$inJ:1}
W.jI.prototype={
$2:function(a,b){var u,t,s,r,q,p
s=this.a
switch(a.nodeType){case 1:s.ib(a,b)
break
case 8:case 11:case 3:case 4:break
default:s.b2(a,b)}u=a.lastChild
for(s=a==null;null!=u;){t=null
try{t=u.previousSibling}catch(r){H.ay(r)
q=H.k(u,"$iD")
if(s){p=q.parentNode
if(p!=null)J.fg(p,q)}else J.fg(a,q)
u=null
t=a.lastChild}if(u!=null)this.$2(u,a)
u=H.k(t,"$iD")}},
$S:32}
W.em.prototype={}
W.eo.prototype={}
W.ep.prototype={}
W.eq.prototype={}
W.er.prototype={}
W.et.prototype={}
W.eu.prototype={}
W.ev.prototype={}
W.ew.prototype={}
W.eB.prototype={}
W.eC.prototype={}
W.eD.prototype={}
W.eE.prototype={}
W.eG.prototype={}
W.eH.prototype={}
W.eK.prototype={}
W.eL.prototype={}
W.eM.prototype={}
W.d0.prototype={}
W.d1.prototype={}
W.eO.prototype={}
W.eP.prototype={}
W.eT.prototype={}
W.eW.prototype={}
W.eX.prototype={}
W.d2.prototype={}
W.d3.prototype={}
W.eZ.prototype={}
W.f_.prototype={}
W.f4.prototype={}
W.f5.prototype={}
W.f6.prototype={}
W.f7.prototype={}
W.f8.prototype={}
W.f9.prototype={}
W.fa.prototype={}
W.fb.prototype={}
W.fc.prototype={}
W.fd.prototype={}
P.f2.prototype={$iby:1,
gdU:function(a){return this.a}}
P.jN.prototype={
$2:function(a,b){this.a[a]=b},
$S:27}
P.fQ.prototype={
gc3:function(){var u,t,s
u=this.b
t=H.al(u,"v",0)
s=W.U
return new H.hg(new H.cT(u,H.n(new P.fR(),{func:1,ret:P.O,args:[t]}),[t]),H.n(new P.fS(),{func:1,ret:s,args:[t]}),[t,s])},
h:function(a,b){J.kE(this.b.a,b)},
gl:function(a){return J.bM(this.gc3().a)},
j:function(a,b){var u=this.gc3()
return u.b.$1(J.k1(u.a,b))},
gT:function(a){var u=P.kT(this.gc3(),!1,W.U)
return new J.am(u,u.length,0,[H.x(u,0)])},
$av:function(){return[W.U]},
$ad:function(){return[W.U]},
$ab:function(){return[W.U]}}
P.fR.prototype={
$1:function(a){return!!J.a_(H.k(a,"$iD")).$iU},
$S:19}
P.fS.prototype={
$1:function(a){return H.i(H.k(a,"$iD"),"$iU")},
$S:31}
P.jr.prototype={
gbK:function(a){var u=this.a
if(typeof u!=="number")return u.p()
return H.E(u+this.c,H.x(this,0))},
gdN:function(a){var u=this.b
if(typeof u!=="number")return u.p()
return H.E(u+this.d,H.x(this,0))},
i:function(a){return"Rectangle ("+H.m(this.a)+", "+H.m(this.b)+") "+this.c+" x "+this.d},
A:function(a,b){var u,t,s,r
if(b==null)return!1
if(H.d7(b,"$iac",[P.a4],"$aac")){u=this.a
t=J.as(b)
if(u==t.gbG(b)){s=this.b
if(s==t.gbM(b)){if(typeof u!=="number")return u.p()
r=H.x(this,0)
if(H.E(u+this.c,r)===t.gbK(b)){if(typeof s!=="number")return s.p()
u=H.E(s+this.d,r)===t.gdN(b)}else u=!1}else u=!1}else u=!1}else u=!1
return u},
gJ:function(a){var u,t,s,r,q
u=this.a
t=J.bK(u)
s=this.b
r=J.bK(s)
if(typeof u!=="number")return u.p()
q=H.x(this,0)
u=C.d.gJ(H.E(u+this.c,q))
if(typeof s!=="number")return s.p()
q=C.d.gJ(H.E(s+this.d,q))
return P.mS(P.jp(P.jp(P.jp(P.jp(0,t),r),u),q))}}
P.ac.prototype={
gbG:function(a){return this.a},
gbM:function(a){return this.b},
gaG:function(a){return this.c},
gaA:function(a){return this.d}}
P.bf.prototype={$ibf:1}
P.h8.prototype={
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.W(b,a,null,null,null))
return this.as(a,b)},
H:function(a,b){return this.j(a,b)},
as:function(a,b){return a.getItem(b)},
$av:function(){return[P.bf]},
$id:1,
$ad:function(){return[P.bf]},
$ib:1,
$ab:function(){return[P.bf]},
$aA:function(){return[P.bf]}}
P.bh.prototype={$ibh:1}
P.hF.prototype={
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.W(b,a,null,null,null))
return this.as(a,b)},
H:function(a,b){return this.j(a,b)},
as:function(a,b){return a.getItem(b)},
$av:function(){return[P.bh]},
$id:1,
$ad:function(){return[P.bh]},
$ib:1,
$ab:function(){return[P.bh]},
$aA:function(){return[P.bh]}}
P.hM.prototype={
gl:function(a){return a.length}}
P.cC.prototype={$icC:1}
P.ig.prototype={
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
gdQ:function(a){return new P.fQ(a,new W.ak(a))},
af:function(a,b,c,d){var u,t,s,r,q,p
u=H.c([],[W.aw])
C.a.h(u,W.lo(null))
C.a.h(u,W.lq())
C.a.h(u,new W.jC())
c=new W.f3(new W.dN(u))
t='<svg version="1.1">'+b+"</svg>"
u=document
s=u.body
r=(s&&C.n).jn(s,t,c)
q=u.createDocumentFragment()
r.toString
u=new W.ak(r)
p=u.gaH(u)
for(u=J.as(q);s=p.firstChild,s!=null;)u.C(q,s)
return q},
$ip:1}
P.bk.prototype={$ibk:1}
P.iv.prototype={
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.W(b,a,null,null,null))
return this.as(a,b)},
H:function(a,b){return this.j(a,b)},
as:function(a,b){return a.getItem(b)},
$av:function(){return[P.bk]},
$id:1,
$ad:function(){return[P.bk]},
$ib:1,
$ab:function(){return[P.bk]},
$aA:function(){return[P.bk]}}
P.ex.prototype={}
P.ey.prototype={}
P.eI.prototype={}
P.eJ.prototype={}
P.eU.prototype={}
P.eV.prototype={}
P.f0.prototype={}
P.f1.prototype={}
P.fk.prototype={
gl:function(a){return a.length}}
P.fl.prototype={
j:function(a,b){return P.bl(a.get(H.H(b)))},
O:function(a,b){var u,t
H.n(b,{func:1,ret:-1,args:[P.h,,]})
u=a.entries()
for(;!0;){t=u.next()
if(t.done)return
b.$2(t.value[0],P.bl(t.value[1]))}},
ga7:function(a){var u=H.c([],[P.h])
this.O(a,new P.fm(u))
return u},
gl:function(a){return a.size},
$aaa:function(){return[P.h,null]},
$iP:1,
$aP:function(){return[P.h,null]}}
P.fm.prototype={
$2:function(a,b){return C.a.h(this.a,a)},
$S:7}
P.fn.prototype={
gl:function(a){return a.length}}
P.bN.prototype={}
P.hG.prototype={
gl:function(a){return a.length}}
P.el.prototype={}
P.de.prototype={$ide:1}
P.ds.prototype={$ids:1}
P.dR.prototype={$idR:1}
P.c1.prototype={
dG:function(a,b){return a.activeTexture(b)},
dL:function(a,b,c){return a.attachShader(b,c)},
ap:function(a,b,c){return a.bindBuffer(b,c)},
jc:function(a,b,c){return a.bindFramebuffer(b,c)},
aR:function(a,b,c){return a.bindTexture(b,c)},
jd:function(a,b,c){return a.blendFunc(b,c)},
dO:function(a,b,c,d){return a.bufferData(b,c,d)},
jf:function(a,b){return a.clear(b)},
jg:function(a,b,c,d,e){return a.clearColor(b,c,d,e)},
jh:function(a,b){return a.clearDepth(b)},
jj:function(a,b){return a.compileShader(b)},
jp:function(a,b){return a.createShader(b)},
jr:function(a,b){return a.deleteProgram(b)},
js:function(a,b){return a.deleteShader(b)},
jv:function(a,b){return a.depthFunc(b)},
jw:function(a,b){return a.disable(b)},
dW:function(a,b){return a.disableVertexAttribArray(b)},
jx:function(a,b,c,d,e){return a.drawElements(b,c,H.a9(d),H.a9(e))},
cz:function(a,b){return a.enable(b)},
dZ:function(a,b){return a.enableVertexAttribArray(b)},
eE:function(a,b,c){return a.getActiveAttrib(b,c)},
eF:function(a,b,c){return a.getActiveUniform(b,c)},
eG:function(a,b,c){return a.getAttribLocation(b,c)},
cY:function(a,b){return a.getParameter(b)},
eK:function(a,b){return a.getProgramInfoLog(b)},
bP:function(a,b,c){return a.getProgramParameter(b,c)},
eL:function(a,b){return a.getShaderInfoLog(b)},
eM:function(a,b,c){return a.getShaderParameter(b,c)},
eN:function(a,b,c){return a.getUniformLocation(b,c)},
jN:function(a,b){return a.linkProgram(b)},
k9:function(a,b,c){return a.pixelStorei(b,c)},
eV:function(a,b,c){return a.shaderSource(b,c)},
kl:function(a,b,c,d,e,f,g,h,i,j){var u,t
u=J.a_(g)
if(!!u.$iby)t=!0
else t=!1
if(t){this.is(a,b,c,d,e,f,P.n8(g))
return}if(!!u.$ics)u=!0
else u=!1
if(u){this.it(a,b,c,d,e,f,g)
return}throw H.f(P.m9("Incorrect number or type of arguments"))},
kk:function(a,b,c,d,e,f,g){return this.kl(a,b,c,d,e,f,g,null,null,null)},
is:function(a,b,c,d,e,f,g){return a.texImage2D(b,c,d,e,f,g)},
it:function(a,b,c,d,e,f,g){return a.texImage2D(b,c,d,e,f,g)},
bL:function(a,b,c,d){return a.texParameteri(b,c,d)},
K:function(a,b,c){return a.uniform1f(b,c)},
R:function(a,b,c){return a.uniform1i(b,c)},
u:function(a,b,c,d,e){return a.uniform3f(b,c,d,e)},
eB:function(a,b,c,d){return a.uniformMatrix3fv(b,!1,d)},
eC:function(a,b,c,d){return a.uniformMatrix4fv(b,!1,d)},
cV:function(a,b){return a.useProgram(b)},
kr:function(a,b,c,d,e,f,g){return a.vertexAttribPointer(b,c,d,!1,f,g)},
ks:function(a,b,c,d,e){return a.viewport(b,c,d,e)},
$ic1:1}
P.dV.prototype={$idV:1}
P.e2.prototype={$ie2:1}
P.eb.prototype={$ieb:1}
P.i7.prototype={
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.W(b,a,null,null,null))
return P.bl(this.fT(a,b))},
H:function(a,b){return this.j(a,b)},
fT:function(a,b){return a.item(b)},
$av:function(){return[[P.P,,,]]},
$id:1,
$ad:function(){return[[P.P,,,]]},
$ib:1,
$ab:function(){return[[P.P,,,]]},
$aA:function(){return[[P.P,,,]]}}
P.eQ.prototype={}
P.eR.prototype={}
O.a1.prototype={
bi:function(a){this.sfY(H.c([],[a]))
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
sfY:function(a){this.a=H.l(a,"$ib",[H.al(this,"a1",0)],"$ab")},
sdv:function(a){this.b=H.n(a,{func:1,ret:P.O,args:[[P.d,H.al(this,"a1",0)]]})},
sdr:function(a){this.c=H.n(a,{func:1,ret:-1,args:[P.B,[P.d,H.al(this,"a1",0)]]})},
sdw:function(a){this.d=H.n(a,{func:1,ret:-1,args:[P.B,[P.d,H.al(this,"a1",0)]]})},
$id:1}
O.cu.prototype={
gl:function(a){return this.a.length},
gq:function(){var u=this.b
if(u==null){u=D.J()
this.b=u}return u},
f8:function(a){var u=this.b
if(u!=null)u.F(a)},
aI:function(){return this.f8(null)},
ga0:function(a){var u=this.a
if(u.length>0)return C.a.gbF(u)
else return V.bX()},
bJ:function(a){var u=this.a
if(a==null)C.a.h(u,V.bX())
else C.a.h(u,a)
this.aI()},
aD:function(){var u=this.a
if(u.length>0){u.pop()
this.aI()}},
sc5:function(a){this.a=H.l(a,"$ib",[V.ao],"$ab")}}
E.fo.prototype={}
E.ag.prototype={
sbR:function(a,b){var u,t,s
u=this.c
if(u!=b){this.c=b
this.d=b
this.e=null
if(u!=null)u.gq().P(0,this.geq())
t=this.c
if(t!=null)t.gq().h(0,this.geq())
s=new D.M("shape",u,this.c,this,[F.dW])
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
if(t!=null&&this.d!=null)t.ev(a,this)
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
jX:function(){return this.er(null)},
ep:function(a){this.aT(H.k(a,"$iy"))},
jU:function(){return this.ep(null)},
jT:function(a,b){var u,t,s,r,q,p,o
H.l(b,"$id",[E.ag],"$ad")
for(u=b.length,t=this.geo(),s={func:1,ret:-1,args:[D.y]},r=[s],q=0;q<b.length;b.length===u||(0,H.C)(b),++q){p=b[q]
if(p!=null){o=p.z
if(o==null){o=new D.bS()
o.sad(null)
o.saO(null)
o.c=null
o.d=0
p.z=o}H.n(t,s)
if(o.a==null)o.sad(H.c([],r))
o=o.a;(o&&C.a).h(o,t)}}this.aa()},
jW:function(a,b){var u,t
H.l(b,"$id",[E.ag],"$ad")
for(u=b.gT(b),t=this.geo();u.B();)u.gI(u).gq().P(0,t)
this.aa()},
i:function(a){var u,t
u=this.a
t=u.length
if(t<=0)return"Unnamed entity"
return u},
sf9:function(a,b){this.y=H.l(b,"$ia1",[E.ag],"$aa1")},
$iaY:1}
E.hP.prototype={
f5:function(a,b){var u,t
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
u=new O.cu()
t=[V.ao]
u.sc5(H.c([],t))
u.b=null
u.gq().h(0,new E.hQ(this))
this.cy=u
u=new O.cu()
u.sc5(H.c([],t))
u.b=null
u.gq().h(0,new E.hR(this))
this.db=u
u=new O.cu()
u.sc5(H.c([],t))
u.b=null
u.gq().h(0,new E.hS(this))
this.dx=u
this.sir(H.c([],[O.bD]))
u=this.dy;(u&&C.a).h(u,null)
this.sim(new H.aT([P.h,A.cD]))},
gka:function(){var u,t
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
sir:function(a){this.dy=H.l(a,"$ib",[O.bD],"$ab")},
sim:function(a){this.fr=H.l(a,"$iP",[P.h,A.cD],"$aP")}}
E.hQ.prototype={
$1:function(a){var u
H.k(a,"$iy")
u=this.a
u.z=null
u.ch=null},
$S:6}
E.hR.prototype={
$1:function(a){var u
H.k(a,"$iy")
u=this.a
u.z=null
u.Q=null
u.ch=null
u.cx=null},
$S:6}
E.hS.prototype={
$1:function(a){var u
H.k(a,"$iy")
u=this.a
u.ch=null
u.cx=null},
$S:6}
E.e7.prototype={
d6:function(a){H.k(a,"$iy")
this.ew()},
d5:function(){return this.d6(null)},
gjI:function(){var u,t,s
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
ew:function(){var u,t
if(!this.ch){this.ch=!0
u=window
t=H.n(new E.io(this),{func:1,ret:-1,args:[P.a4]})
C.G.fI(u)
C.G.i6(u,W.lx(t,P.a4))}},
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
if(s!=null)s.F(null)}catch(q){u=H.ay(q)
t=H.cb(q)
P.ky("Error: "+H.m(u))
P.ky("Stack: "+H.m(t))
throw H.f(u)}}}
E.io.prototype={
$1:function(a){var u
H.nt(a)
u=this.a
if(u.ch){u.ch=!1
u.kd()}},
$S:43}
Z.ei.prototype={$inD:1}
Z.df.prototype={
a1:function(a){var u,t,s
try{t=a.a
C.b.dZ(t,this.e)
C.b.kr(t,this.e,this.b,5126,!1,this.d,this.c)}catch(s){u=H.ay(s)
t=P.r('Failed to bind buffer attribute "'+this.a.i(0)+'": '+H.m(u))
throw H.f(t)}},
i:function(a){return"["+this.a.i(0)+", Size: "+this.b+", Offset: "+this.c+", Stride: "+this.d+", Attr: "+H.m(this.e)+"]"}}
Z.ej.prototype={$inE:1}
Z.ci.prototype={
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
C.b.jx(t,q.a,q.b,5123,0)
C.b.ap(t,p,null)}},
i:function(a){var u,t,s,r,q,p
u=[P.h]
t=H.c([],u)
for(s=this.b,r=s.length,q=0;q<s.length;s.length===r||(0,H.C)(s),++q)C.a.h(t,s[q].i(0))
p=H.c([],u)
for(u=this.c,s=u.length,q=0;q<s;++q)C.a.h(p,J.aL(u[q]))
return"Buffer:  ["+this.a.i(0)+"]\nIndices: "+C.a.m(t,", ")+"\nAttrs:   "+C.a.m(p,", ")},
sfS:function(a){this.b=H.l(a,"$ib",[Z.bV],"$ab")},
$inL:1}
Z.bV.prototype={
i:function(a){return"Type: "+this.a+", Count: "+this.b+", ["+("Instance of '"+H.c_(this.c)+"'")+"]"}}
Z.b7.prototype={
gd0:function(a){var u,t
u=this.a
t=(u&$.aK().a)!==0?3:0
if((u&$.bo().a)!==0)t+=3
if((u&$.bn().a)!==0)t+=3
if((u&$.bp().a)!==0)t+=2
if((u&$.bq().a)!==0)t+=3
if((u&$.d8().a)!==0)t+=3
if((u&$.d9().a)!==0)t+=4
if((u&$.ce().a)!==0)++t
return(u&$.bm().a)!==0?t+4:t},
j9:function(a){var u,t,s
u=$.aK()
t=this.a
if((t&u.a)!==0){if(0===a)return u
s=1}else s=0
u=$.bo()
if((t&u.a)!==0){if(s===a)return u;++s}u=$.bn()
if((t&u.a)!==0){if(s===a)return u;++s}u=$.bp()
if((t&u.a)!==0){if(s===a)return u;++s}u=$.bq()
if((t&u.a)!==0){if(s===a)return u;++s}u=$.d8()
if((t&u.a)!==0){if(s===a)return u;++s}u=$.d9()
if((t&u.a)!==0){if(s===a)return u;++s}u=$.ce()
if((t&u.a)!==0){if(s===a)return u;++s}u=$.bm()
if((t&u.a)!==0)if(s===a)return u
return $.lY()},
A:function(a,b){if(b==null)return!1
if(!(b instanceof Z.b7))return!1
return this.a===b.a},
i:function(a){var u,t
u=H.c([],[P.h])
t=this.a
if((t&$.aK().a)!==0)C.a.h(u,"Pos")
if((t&$.bo().a)!==0)C.a.h(u,"Norm")
if((t&$.bn().a)!==0)C.a.h(u,"Binm")
if((t&$.bp().a)!==0)C.a.h(u,"Txt2D")
if((t&$.bq().a)!==0)C.a.h(u,"TxtCube")
if((t&$.d8().a)!==0)C.a.h(u,"Clr3")
if((t&$.d9().a)!==0)C.a.h(u,"Clr4")
if((t&$.ce().a)!==0)C.a.h(u,"Weight")
if((t&$.bm().a)!==0)C.a.h(u,"Bending")
if(u.length<=0)return"None"
return C.a.m(u,"|")}}
D.fr.prototype={}
D.bS.prototype={
h:function(a,b){var u={func:1,ret:-1,args:[D.y]}
H.n(b,u)
if(this.a==null)this.sad(H.c([],[u]))
u=this.a;(u&&C.a).h(u,b)},
P:function(a,b){var u,t
H.n(b,{func:1,ret:-1,args:[D.y]})
u=this.a
u=u==null?null:C.a.X(u,b)
if(u===!0){u=this.a
t=(u&&C.a).P(u,b)||!1}else t=!1
u=this.b
u=u==null?null:C.a.X(u,b)
if(u===!0){u=this.b
t=(u&&C.a).P(u,b)||t}return t},
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
return!0}if(!s)C.a.O(P.kT(t,!0,{func:1,ret:-1,args:[D.y]}),new D.fL(u))
t=this.b
if(t!=null){this.saO(H.c([],[{func:1,ret:-1,args:[D.y]}]))
C.a.O(t,new D.fM(u))}return!0},
jB:function(){return this.F(null)},
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
D.fL.prototype={
$1:function(a){var u
H.n(a,{func:1,ret:-1,args:[D.y]})
u=this.a.a
u.b
a.$1(u)},
$S:24}
D.fM.prototype={
$1:function(a){var u
H.n(a,{func:1,ret:-1,args:[D.y]})
u=this.a.a
u.b
a.$1(u)},
$S:24}
D.y.prototype={}
D.bz.prototype={}
D.bA.prototype={}
D.M.prototype={
i:function(a){return"ValueChanged: "+this.c+", "+H.m(this.d)+" => "+H.m(this.e)}}
X.dg.prototype={
A:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.dg))return!1
if(this.a!=b.a)return!1
if(!this.b.A(0,b.b))return!1
return!0},
i:function(a){return this.b.i(0)+H.m(this.a)}}
X.dz.prototype={
A:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.dz))return!1
if(this.a!=b.a)return!1
if(!this.b.A(0,b.b))return!1
return!0},
i:function(a){return this.b.i(0)+H.m(this.a)}}
X.h7.prototype={
k6:function(a){this.c=a.b
this.d.h(0,a.a)
return!1},
jZ:function(a){this.c=a.b
this.d.P(0,a.a)
return!1},
shY:function(a){this.d=H.l(a,"$il6",[P.B],"$al6")}}
X.dE.prototype={}
X.hd.prototype={
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
n=new X.bg(a,V.bi(),this.x,this.y,this.z,p,o,u,this)
n.b=!0
this.z=u
this.x=o
return n},
cN:function(a,b){this.r=a.a
return!1},
b8:function(a,b){var u,t
u=this.r
t=a.a
if(typeof t!=="number")return t.eP()
if(typeof u!=="number")return u.eD()
this.r=(u&~t)>>>0
return!1},
b7:function(a,b){var u=this.d
if(u==null)return!1
u.F(this.b0(a,b))
return!0},
k7:function(a){var u,t,s,r,q,p,o,n
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
r=new X.cw(new V.S(q*p,o*n),t,s,new P.an(r,!1),this)
r.b=!0
u.F(r)
return!0},
hw:function(a,b,c){var u,t,s
if(this.f==null)return
u=new P.an(Date.now(),!1)
t=this.f
s=new X.dE(c,a,this.a.gaS(),b,u,this)
s.b=!0
t.F(s)
this.y=u
this.x=V.bi()}}
X.av.prototype={
A:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.av))return!1
if(this.a!==b.a)return!1
if(this.b!=b.b)return!1
if(this.c!=b.c)return!1
return!0},
i:function(a){var u=this.a?"Ctrl+":""
u+=this.b?"Alt+":""
return u+(this.c?"Shift+":"")}}
X.bg.prototype={}
X.hu.prototype={
c1:function(a,b,c){var u,t,s
u=new P.an(Date.now(),!1)
t=this.a.gaS()
s=new X.bg(a,this.r,this.x,this.y,this.z,t,b,u,this)
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
if(typeof t!=="number")return t.eP()
if(typeof u!=="number")return u.eD()
this.f=(u&~t)>>>0
u=this.c
if(u==null)return!1
u.F(this.c1(a,b,!0))
return!0},
b7:function(a,b){var u=this.d
if(u==null)return!1
u.F(this.c1(a,b,!1))
return!0},
k8:function(a,b){var u,t,s,r,q,p,o
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
s=new X.cw(new V.S(r*q,p*o),t,b,new P.an(s,!1),this)
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
X.cw.prototype={}
X.hL.prototype={}
X.e9.prototype={}
X.is.prototype={
b0:function(a,b){var u,t,s,r
H.l(a,"$ib",[V.a6],"$ab")
u=new P.an(Date.now(),!1)
t=a.length>0?a[0]:V.bi()
s=this.a.gaS()
r=new X.e9(a,this.f,this.r,this.x,this.y,s,t,u,this)
r.b=!0
if(b){this.x=u
this.f=t}this.y=u
this.r=t
return r},
k5:function(a){var u
H.l(a,"$ib",[V.a6],"$ab")
u=this.b
if(u==null)return!1
u.F(this.b0(a,!0))
return!0},
k_:function(a){var u
H.l(a,"$ib",[V.a6],"$ab")
u=this.c
if(u==null)return!1
u.F(this.b0(a,!0))
return!0},
k0:function(a){var u
H.l(a,"$ib",[V.a6],"$ab")
u=this.d
if(u==null)return!1
u.F(this.b0(a,!1))
return!0}}
X.ee.prototype={
gaS:function(){var u=this.a
return V.l4(0,0,C.p.gdR(u).c,C.p.gdR(u).d)},
dj:function(a){var u,t
u=a.keyCode
t=a.ctrlKey||a.metaKey
return new X.dz(u,new X.av(t,a.altKey,a.shiftKey))},
aP:function(a){var u,t
u=this.b
t=a.ctrlKey||a.metaKey
u.c=new X.av(t,a.altKey,a.shiftKey)},
cl:function(a){var u,t
u=this.b
t=a.ctrlKey||a.metaKey
u.c=new X.av(t,a.altKey,a.shiftKey)},
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
return new X.dg(u,new X.av(t,a.altKey,a.shiftKey))},
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
hq:function(a){this.f=!0},
he:function(a){this.f=!1},
hk:function(a){H.k(a,"$iab")
if(this.f&&this.c6(a))a.preventDefault()},
hu:function(a){var u
H.k(a,"$iaU")
if(!this.f)return
u=this.dj(a)
this.b.k6(u)},
hs:function(a){var u
H.k(a,"$iaU")
if(!this.f)return
u=this.dj(a)
this.b.jZ(u)},
hy:function(a){var u,t,s,r
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
hC:function(a){var u,t,s
H.k(a,"$iab")
this.aP(a)
u=this.au(a)
if(this.x){t=this.b1(a)
if(this.d.b8(u,t))a.preventDefault()
return}if(this.r)return
s=this.aw(a)
if(this.c.b8(u,s))a.preventDefault()},
ho:function(a){var u,t,s
H.k(a,"$iab")
if(!this.c6(a)){this.aP(a)
u=this.au(a)
if(this.x){t=this.b1(a)
if(this.d.b8(u,t))a.preventDefault()
return}if(this.r)return
s=this.aw(a)
if(this.c.b8(u,s))a.preventDefault()}},
hA:function(a){var u,t,s
H.k(a,"$iab")
this.aP(a)
u=this.au(a)
if(this.x){t=this.b1(a)
if(this.d.b7(u,t))a.preventDefault()
return}if(this.r)return
s=this.aw(a)
if(this.c.b7(u,s))a.preventDefault()},
hm:function(a){var u,t,s
H.k(a,"$iab")
if(!this.c6(a)){this.aP(a)
u=this.au(a)
if(this.x){t=this.b1(a)
if(this.d.b7(u,t))a.preventDefault()
return}if(this.r)return
s=this.aw(a)
if(this.c.b7(u,s))a.preventDefault()}},
hE:function(a){var u,t
H.k(a,"$ib8")
this.aP(a)
u=new V.S((a&&C.F).gjt(a),C.F.gju(a)).w(0,180)
if(this.x){if(this.d.k7(u))a.preventDefault()
return}if(this.r)return
t=this.aw(a)
if(this.c.k8(u,t))a.preventDefault()},
hG:function(a){var u,t,s
u=document.pointerLockElement===this.a
if(u!==this.x){this.x=u
t=this.au(this.y)
s=this.aw(this.y)
this.d.hw(t,s,u)}},
hW:function(a){var u
H.k(a,"$iaI")
this.a.focus()
this.f=!0
this.cl(a)
u=this.cg(a)
if(this.e.k5(u))a.preventDefault()},
hS:function(a){var u
H.k(a,"$iaI")
this.cl(a)
u=this.cg(a)
if(this.e.k_(u))a.preventDefault()},
hU:function(a){var u
H.k(a,"$iaI")
this.cl(a)
u=this.cg(a)
if(this.e.k0(u))a.preventDefault()},
sfJ:function(a){this.z=H.l(a,"$ib",[[P.cF,P.N]],"$ab")}}
D.bv.prototype={
gq:function(){var u=this.d
if(u==null){u=D.J()
this.d=u}return u},
at:function(a){var u
H.k(a,"$iy")
u=this.d
if(u!=null)u.F(a)},
fd:function(){return this.at(null)},
$ia5:1,
$iaY:1}
D.a5.prototype={$iaY:1}
D.dA.prototype={
gq:function(){var u=this.Q
if(u==null){u=D.J()
this.Q=u}return u},
at:function(a){var u=this.Q
if(u!=null)u.F(a)},
dt:function(a){var u
H.k(a,"$iy")
u=this.ch
if(u!=null)u.F(a)},
hv:function(){return this.dt(null)},
hI:function(a){var u,t,s
H.l(a,"$id",[D.a5],"$ad")
for(u=a.length,t=0;t<a.length;a.length===u||(0,H.C)(a),++t){s=a[t]
if(s==null||this.fb(s))return!1}return!0},
h8:function(a,b){var u,t,s,r,q,p,o,n
u=D.a5
H.l(b,"$id",[u],"$ad")
for(t=b.length,s=this.gds(),r={func:1,ret:-1,args:[D.y]},q=[r],p=0;p<b.length;b.length===t||(0,H.C)(b),++p){o=H.k(b[p],"$ia5")
if(o instanceof D.bv)C.a.h(this.e,o)
n=o.d
if(n==null){n=new D.bS()
n.sad(null)
n.saO(null)
n.c=null
n.d=0
o.d=n}H.n(s,r)
if(n.a==null)n.sad(H.c([],q))
n=n.a;(n&&C.a).h(n,s)}u=new D.bz(a,b,this,[u])
u.b=!0
this.at(u)},
hM:function(a,b){var u,t,s,r
u=D.a5
H.l(b,"$id",[u],"$ad")
for(t=b.gT(b),s=this.gds();t.B();){r=t.gI(t)
C.a.P(this.e,r)
r.gq().P(0,s)}u=new D.bA(a,b,this,[u])
u.b=!0
this.at(u)},
fb:function(a){var u=C.a.X(this.e,a)
return u},
sfG:function(a){this.e=H.l(a,"$ib",[D.bv],"$ab")},
shX:function(a){this.f=H.l(a,"$ib",[D.dQ],"$ab")},
sip:function(a){this.r=H.l(a,"$ib",[D.dZ],"$ab")},
siC:function(a){this.x=H.l(a,"$ib",[D.e4],"$ab")},
siD:function(a){this.y=H.l(a,"$ib",[D.e5],"$ab")},
siE:function(a){this.z=H.l(a,"$ib",[D.e6],"$ab")},
$ad:function(){return[D.a5]},
$aa1:function(){return[D.a5]}}
D.dQ.prototype={$ia5:1,$iaY:1}
D.dZ.prototype={$ia5:1,$iaY:1}
D.e4.prototype={$ia5:1,$iaY:1}
D.e5.prototype={$ia5:1,$iaY:1}
D.e6.prototype={$ia5:1,$iaY:1}
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
V.at.prototype={
p:function(a,b){var u,t,s,r
u=C.e.p(this.a,b.gcQ())
t=C.e.p(this.b,b.gbQ())
s=C.e.p(this.c,b.gcq())
r=C.e.p(this.d,b.gj8(b))
if(u<0)u=0
else if(u>1)u=1
if(t<0)t=0
else if(t>1)t=1
if(s<0)s=0
else if(s>1)s=1
if(r<0)r=0
else if(r>1)r=1
return new V.at(u,t,s,r)},
t:function(a,b){var u,t,s,r
u=C.e.t(this.a,b.gcQ())
t=C.e.t(this.b,b.gbQ())
s=C.e.t(this.c,b.gcq())
r=C.e.t(this.d,b.gj8(b))
if(u<0)u=0
else if(u>1)u=1
if(t<0)t=0
else if(t>1)t=1
if(s<0)s=0
else if(s>1)s=1
if(r<0)r=0
else if(r>1)r=1
return new V.at(u,t,s,r)},
A:function(a,b){var u,t
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.at))return!1
u=b.a
t=$.R().a
if(!(Math.abs(u-this.a)<t))return!1
if(!(Math.abs(b.b-this.b)<t))return!1
if(!(Math.abs(b.c-this.c)<t))return!1
if(!(Math.abs(b.d-this.d)<t))return!1
return!0},
i:function(a){return"["+V.V(this.a,3,0)+", "+V.V(this.b,3,0)+", "+V.V(this.c,3,0)+", "+V.V(this.d,3,0)+"]"}}
V.fJ.prototype={}
V.dJ.prototype={
ac:function(a,b){var u=H.c([this.a,this.d,this.r,this.b,this.e,this.x,this.c,this.f,this.y],[P.z])
return u},
A:function(a,b){var u,t
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.dJ))return!1
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
t=V.c9(H.c([this.a,this.d,this.r],u),3,0)
s=V.c9(H.c([this.b,this.e,this.x],u),3,0)
r=V.c9(H.c([this.c,this.f,this.y],u),3,0)
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
if(Math.abs(a7-0)<$.R().a)return V.bX()
a8=1/a7
a9=-r
b0=-d
return V.aW((t*a6-p*a5+m*a4)*a8,(-s*a6+o*a5-l*a4)*a8,(f*h-b*i+a1*j)*a8,(-e*h+a*i-a2*j)*a8,(a9*a6+p*a3-m*a0)*a8,(u*a6-o*a3+l*a0)*a8,(b0*h+b*k-a1*n)*a8,(g*h-a*k+a2*n)*a8,(r*a5-t*a3+m*c)*a8,(-u*a5+s*a3-l*c)*a8,(d*i-f*k+a1*q)*a8,(-g*i+e*k-a2*q)*a8,(a9*a4+t*a0-p*c)*a8,(u*a4-s*a0+o*c)*a8,(b0*j+f*n-b*q)*a8,(g*j-e*n+a*q)*a8)},
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
return V.aW(u*t+s*r+q*p+o*n,u*m+s*l+q*k+o*j,u*i+s*h+q*g+o*f,u*e+s*d+q*c+o*b,a*t+a0*r+a1*p+a2*n,a*m+a0*l+a1*k+a2*j,a*i+a0*h+a1*g+a2*f,a*e+a0*d+a1*c+a2*b,a3*t+a4*r+a5*p+a6*n,a3*m+a4*l+a5*k+a6*j,a3*i+a4*h+a5*g+a6*f,a3*e+a4*d+a5*c+a6*b,a7*t+a8*r+a9*p+b0*n,a7*m+a8*l+a9*k+b0*j,a7*i+a8*h+a9*g+b0*f,a7*e+a8*d+a9*c+b0*b)},
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
t=V.c9(H.c([this.a,this.e,this.y,this.cx],u),b,c)
s=V.c9(H.c([this.b,this.f,this.z,this.cy],u),b,c)
r=V.c9(H.c([this.c,this.r,this.Q,this.db],u),b,c)
q=V.c9(H.c([this.d,this.x,this.ch,this.dx],u),b,c)
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
V.b_.prototype={
p:function(a,b){return new V.b_(C.d.p(this.a,b.gku(b)),C.d.p(this.b,b.gkv(b)),C.d.p(this.c,b.gkw(b)),C.d.p(this.d,b.gkt(b)))},
t:function(a,b){return new V.b_(C.d.t(this.a,b.gku(b)),C.d.t(this.b,b.gkv(b)),C.d.t(this.c,b.gkw(b)),C.d.t(this.d,b.gkt(b)))},
A:function(a,b){var u,t
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.b_))return!1
u=b.a
t=$.R().a
if(!(Math.abs(u-this.a)<t))return!1
if(!(Math.abs(b.b-this.b)<t))return!1
if(!(Math.abs(b.c-this.c)<t))return!1
if(!(Math.abs(b.d-this.d)<t))return!1
return!0},
i:function(a){return"["+V.V(this.a,3,0)+", "+V.V(this.b,3,0)+", "+V.V(this.c,3,0)+", "+V.V(this.d,3,0)+"]"}}
V.dU.prototype={
ga9:function(){var u,t
u=this.c
t=this.d
if(u>t)return t
else return u},
A:function(a,b){var u,t
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.dU))return!1
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
t=b.gjz(b)
if(typeof u!=="number")return u.p()
t=C.e.p(u,t)
u=this.b
s=b.gjA(b)
if(typeof u!=="number")return u.p()
return new V.S(t,C.e.p(u,s))},
t:function(a,b){var u,t,s
u=this.a
t=b.gjz(b)
if(typeof u!=="number")return u.t()
t=C.e.t(u,t)
u=this.b
s=b.gjA(b)
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
w:function(a,b){if(Math.abs(b-0)<$.R().a)return V.cS()
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
U.fs.prototype={
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
U.di.prototype={
gq:function(){var u=this.b
if(u==null){u=D.J()
this.b=u}return u},
aV:function(a,b,c){return this.a},
A:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.di))return!1
return J.a0(this.a,b.a)},
i:function(a){return"Constant: "+this.a.G("          ")}}
U.cr.prototype={
gq:function(){var u=this.e
if(u==null){u=D.J()
this.e=u}return u},
N:function(a){var u
H.k(a,"$iy")
u=this.e
if(u!=null)u.F(a)},
a5:function(){return this.N(null)},
h6:function(a,b){var u,t,s,r,q,p,o,n
u=U.ad
H.l(b,"$id",[u],"$ad")
for(t=b.length,s=this.gaM(),r={func:1,ret:-1,args:[D.y]},q=[r],p=0;p<b.length;b.length===t||(0,H.C)(b),++p){o=b[p]
if(o!=null){n=o.gq()
n.toString
H.n(s,r)
if(n.a==null)n.sad(H.c([],q))
n=n.a;(n&&C.a).h(n,s)}}u=new D.bz(a,b,this,[u])
u.b=!0
this.N(u)},
hK:function(a,b){var u,t,s
u=U.ad
H.l(b,"$id",[u],"$ad")
for(t=b.gT(b),s=this.gaM();t.B();)t.gI(t).gq().P(0,s)
u=new D.bA(a,b,this,[u])
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
if(r!=null)s=s==null?r:r.v(0,s)}}this.f=s==null?V.bX():s
u=this.e
if(u!=null)u.aF(0)}return this.f},
A:function(a,b){var u,t,s,r
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.cr))return!1
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
U.ef.prototype={
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
a=H.i(H.k(a,"$iy"),"$ibg")
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
this.cx=V.aW(r,-q,0,0,q,r,0,0,0,0,1,0,0,0,0,1)}return this.cx},
$iad:1}
U.eg.prototype={
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
u.h(0,this.gfZ())
u=this.a.d
t=u.d
if(t==null){t=D.J()
u.d=t
u=t}else u=t
u.h(0,this.gh0())
u=this.a.e
t=u.b
if(t==null){t=D.J()
u.b=t
u=t}else u=t
u.h(0,this.giz())
u=this.a.e
t=u.d
if(t==null){t=D.J()
u.d=t
u=t}else u=t
u.h(0,this.gix())
u=this.a.e
t=u.c
if(t==null){t=D.J()
u.c=t
u=t}else u=t
u.h(0,this.giv())
return!0},
an:function(a){var u,t
u=a.a
t=a.b
if(this.f){if(typeof u!=="number")return u.S()
u=-u}if(this.r){if(typeof t!=="number")return t.S()
t=-t}return new V.S(u,t)},
c8:function(a){a=H.i(H.k(a,"$iy"),"$ibg")
if(!J.a0(this.d,a.x.b))return
this.cx=!0
this.ch=!0
this.cy=this.c.d
this.db=this.b.d},
ca:function(a){var u,t,s,r,q,p,o
a=H.i(H.k(a,"$iy"),"$ibg")
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
h_:function(a){if(H.i(H.k(a,"$iy"),"$idE").x){this.ch=!0
this.cy=this.c.d
this.db=this.b.d}},
h1:function(a){var u,t,s,r,q,p,o
a=H.i(H.k(a,"$iy"),"$ibg")
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
iA:function(a){H.k(a,"$iy")
this.cx=!0
this.ch=!0
this.cy=this.c.d
this.db=this.b.d},
iy:function(a){var u,t,s,r,q,p,o
a=H.i(H.k(a,"$iy"),"$ie9")
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
iw:function(a){var u,t,s
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
u=V.aW(1,0,0,0,0,r,-q,0,0,q,r,0,0,0,0,1)
t=this.c.d
r=Math.cos(t)
q=Math.sin(t)
this.fr=u.v(0,V.aW(r,0,-q,0,0,1,0,0,q,0,r,0,0,0,0,1))}return this.fr},
$iad:1}
U.eh.prototype={
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
t=this.gh3()
u.h(0,t)
u=this.a.d
s=u.e
if(s==null){s=D.J()
u.e=s
u=s}else u=s
u.h(0,t)
return!0},
h4:function(a){var u,t,s,r
H.k(a,"$iy")
if(!J.a0(this.b,this.a.b.c))return
H.i(a,"$icw")
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
this.f=V.aW(s,0,0,0,0,s,0,0,0,0,s,0,0,0,0,1)}return this.f},
$iad:1}
M.dh.prototype={
gq:function(){var u=this.f
if(u==null){u=D.J()
this.f=u}return u},
a_:function(a){var u
H.k(a,"$iy")
u=this.f
if(u!=null)u.F(a)},
aZ:function(){return this.a_(null)},
hO:function(a,b){var u,t,s,r,q,p,o,n
u=M.ax
H.l(b,"$id",[u],"$ad")
for(t=b.length,s=this.gZ(),r={func:1,ret:-1,args:[D.y]},q=[r],p=0;p<b.length;b.length===t||(0,H.C)(b),++p){o=b[p]
if(o!=null){n=o.gq()
n.toString
H.n(s,r)
if(n.a==null)n.sad(H.c([],q))
n=n.a;(n&&C.a).h(n,s)}}u=new D.bz(a,b,this,[u])
u.b=!0
this.a_(u)},
hQ:function(a,b){var u,t,s
u=M.ax
H.l(b,"$id",[u],"$ad")
for(t=b.gT(b),s=this.gZ();t.B();)t.gI(t).gq().P(0,s)
u=new D.bA(a,b,this,[u])
u.b=!0
this.a_(u)},
ab:function(a){var u,t
if(this.e)return
this.e=!0
for(u=this.a,u=new J.am(u,u.length,0,[H.x(u,0)]);u.B();){t=u.d
if(t!=null)t.ab(a)}this.e=!1},
$ad:function(){return[M.ax]},
$aa1:function(){return[M.ax]},
$iax:1}
M.dj.prototype={
gq:function(){var u=this.f
if(u==null){u=D.J()
this.f=u}return u},
a_:function(a){var u
H.k(a,"$iy")
u=this.f
if(u!=null)u.F(a)},
aZ:function(){return this.a_(null)},
sb4:function(a){var u,t
if(a==null)a=new X.h0()
u=this.a
if(u!==a){if(u!=null)u.gq().P(0,this.gZ())
t=this.a
this.a=a
a.gq().h(0,this.gZ())
u=new D.M("camera",t,this.a,this,[X.bO])
u.b=!0
this.a_(u)}},
sba:function(a,b){var u,t
if(b==null)b=X.k9(!0,!0,!1,null,2000,null,0)
u=this.b
if(u!==b){if(u!=null)u.gq().P(0,this.gZ())
t=this.b
this.b=b
b.gq().h(0,this.gZ())
u=new D.M("target",t,this.b,this,[X.cG])
u.b=!0
this.a_(u)}},
sbb:function(a){var u,t
u=this.c
if(u!=a){if(u!=null)u.gq().P(0,this.gZ())
t=this.c
this.c=a
if(a!=null)a.gq().h(0,this.gZ())
u=new D.M("technique",t,this.c,this,[O.bD])
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
$iax:1}
M.dp.prototype={
a_:function(a){var u
H.k(a,"$iy")
u=this.x
if(u!=null)u.F(a)},
aZ:function(){return this.a_(null)},
hg:function(a,b){var u,t,s,r,q,p,o,n
u=E.ag
H.l(b,"$id",[u],"$ad")
for(t=b.length,s=this.gZ(),r={func:1,ret:-1,args:[D.y]},q=[r],p=0;p<b.length;b.length===t||(0,H.C)(b),++p){o=b[p]
if(o!=null){n=o.z
if(n==null){n=new D.bS()
n.sad(null)
n.saO(null)
n.c=null
n.d=0
o.z=n}H.n(s,r)
if(n.a==null)n.sad(H.c([],q))
n=n.a;(n&&C.a).h(n,s)}}u=new D.bz(a,b,this,[u])
u.b=!0
this.a_(u)},
hi:function(a,b){var u,t,s
u=E.ag
H.l(b,"$id",[u],"$ad")
for(t=b.gT(b),s=this.gZ();t.B();)t.gI(t).gq().P(0,s)
u=new D.bA(a,b,this,[u])
u.b=!0
this.a_(u)},
sb4:function(a){var u,t
if(a==null)a=X.kZ(2000,1.0471975511965976,null,0.1,null)
u=this.a
if(u!==a){if(u!=null)u.gq().P(0,this.gZ())
t=this.a
this.a=a
a.gq().h(0,this.gZ())
u=new D.M("camera",t,this.a,this,[X.bO])
u.b=!0
this.a_(u)}},
sba:function(a,b){var u,t
u=this.b
if(u!==b){if(u!=null)u.gq().P(0,this.gZ())
t=this.b
this.b=b
b.gq().h(0,this.gZ())
u=new D.M("target",t,this.b,this,[X.cG])
u.b=!0
this.a_(u)}},
sbb:function(a){var u,t
u=this.c
if(u!=a){if(u!=null)u.gq().P(0,this.gZ())
t=this.c
this.c=a
if(a!=null)a.gq().h(0,this.gZ())
u=new D.M("technique",t,this.c,this,[O.bD])
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
sfA:function(a,b){this.d=H.l(b,"$ia1",[E.ag],"$aa1")},
$iax:1}
M.ax.prototype={}
A.dc.prototype={}
A.fj.prototype={
j:function(a,b){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<t;++s){r=u[s]
if(r.b===b)return r}return},
jC:function(){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<u.length;u.length===t||(0,H.C)(u),++s){r=u[s]
C.b.dZ(r.a,r.c)}},
dV:function(){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<u.length;u.length===t||(0,H.C)(u),++s){r=u[s]
C.b.dW(r.a,r.c)}}}
A.dH.prototype={
f4:function(a6,a7){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5
this.z=a6
u=new P.bj("")
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
a6.iI(u)
a6.iP(u)
a6.iJ(u)
a6.iX(u)
a6.iY(u)
a6.iR(u)
a6.j1(u)
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
u=new P.bj("")
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
q.iM(u)
q.iH(u)
q.iK(u)
q.iN(u)
q.iV(u)
o=q.dy
if(o){m=u.a+="// === Enviromental ===\n"
m+="\n"
u.a=m
m+="uniform samplerCube envSampler;\n"
u.a=m
m+="uniform int nullEnvTxt;\n"
u.a=m
u.a=m+"\n"
q.iT(u)
q.iU(u)}q.iQ(u)
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
q.iL(u)
q.iS(u)
q.iW(u)
q.iZ(u)
q.j_(u)
q.j0(u)
q.iO(u)}m=u.a+="// === Main ===\n"
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
if(a6.x2)this.k1=H.i(this.y.n(0,"txt2DMat"),"$icM")
if(a6.y1)this.k2=H.i(this.y.n(0,"txtCubeMat"),"$iar")
if(a6.y2)this.k3=H.i(this.y.n(0,"colorMat"),"$iar")
this.sfu(H.c([],[A.ar]))
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
break}}this.sfe(H.c([],[A.cL]))
this.sff(H.c([],[A.cN]))
this.sfg(H.c([],[A.cO]))
this.sfh(H.c([],[A.cP]))
this.sfi(H.c([],[A.cQ]))
this.sfj(H.c([],[A.cR]))
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
s=this.cA;(s&&C.a).h(s,new A.cL(h,g,f))}}t=a6.Q
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
s=this.cB;(s&&C.a).h(s,new A.cN(h,g,f,e,d,c,b))}}t=a6.ch
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
s=this.cC;(s&&C.a).h(s,new A.cO(h,g,f,e,d,c,b,a,a0,a1))}}t=a6.cx
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
s=this.cD;(s&&C.a).h(s,new A.cP(h,g,f,e,d,c,a,b))}}t=a6.cy
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
H.i(e,"$icM")
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
s=this.cE;(s&&C.a).h(s,new A.cQ(h,g,f,e,d,a1,c,b,a,a0))}}t=a6.db
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
s=this.cF;(s&&C.a).h(s,new A.cR(h,g,f,e,d,c,a5,b,a,a0,a1,a2,a3,a4))}}}},
ai:function(a,b,c){C.b.R(b.a,b.d,1)},
ae:function(a,b,c){C.b.R(b.a,b.d,1)},
sfu:function(a){this.r1=H.l(a,"$ib",[A.ar],"$ab")},
sfe:function(a){this.cA=H.l(a,"$ib",[A.cL],"$ab")},
sff:function(a){this.cB=H.l(a,"$ib",[A.cN],"$ab")},
sfg:function(a){this.cC=H.l(a,"$ib",[A.cO],"$ab")},
sfh:function(a){this.cD=H.l(a,"$ib",[A.cP],"$ab")},
sfi:function(a){this.cE=H.l(a,"$ib",[A.cQ],"$ab")},
sfj:function(a){this.cF=H.l(a,"$ib",[A.cR],"$ab")}}
A.hl.prototype={
iI:function(a){var u,t,s
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
iP:function(a){var u
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
iJ:function(a){var u
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
iX:function(a){var u,t
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
iY:function(a){var u,t
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
iR:function(a){var u
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
j1:function(a){var u
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
iM:function(a){var u,t
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
iH:function(a){var u,t
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
iK:function(a){var u,t
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
iN:function(a){var u,t
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
iV:function(a){var u,t
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
iQ:function(a){var u,t
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
iT:function(a){var u,t
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
iU:function(a){var u,t
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
iL:function(a){var u,t
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
iS:function(a){var u,t
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
iW:function(a){var u,t
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
iZ:function(a){var u,t,s
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
j_:function(a){var u,t,s
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
j0:function(a){var u,t,s
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
iO:function(a){var u
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
A.cL.prototype={}
A.cP.prototype={}
A.cN.prototype={}
A.cQ.prototype={}
A.cO.prototype={}
A.cR.prototype={}
A.cD.prototype={
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
C.b.jN(u,this.r)
if(!H.kp(C.b.bP(u,this.r,35714))){s=C.b.eK(u,this.r)
C.b.jr(u,this.r)
H.u(P.r("Failed to link shader: "+H.m(s)))}this.ij()
this.il()},
a1:function(a){C.b.cV(a.a,this.r)
this.x.jC()},
dk:function(a,b){var u,t,s
u=this.a
t=C.b.jp(u,b)
C.b.eV(u,t,a)
C.b.jj(u,t)
if(!H.kp(C.b.eM(u,t,35713))){s=C.b.eL(u,t)
C.b.js(u,t)
throw H.f(P.r("Error compiling shader '"+H.m(t)+"': "+H.m(s)))}return t},
ij:function(){var u,t,s,r,q,p
u=H.c([],[A.dc])
t=this.a
s=H.a9(C.b.bP(t,this.r,35721))
if(typeof s!=="number")return H.G(s)
r=0
for(;r<s;++r){q=C.b.eE(t,this.r,r)
p=C.b.eG(t,this.r,q.name)
C.a.h(u,new A.dc(t,q.name,p))}this.x=new A.fj(u)},
il:function(){var u,t,s,r,q,p
u=H.c([],[A.ea])
t=this.a
s=H.a9(C.b.bP(t,this.r,35718))
if(typeof s!=="number")return H.G(s)
r=0
for(;r<s;++r){q=C.b.eF(t,this.r,r)
p=C.b.eN(t,this.r,q.name)
C.a.h(u,this.jq(q.type,q.size,q.name,p))}this.y=new A.iG(u)},
aK:function(a,b,c){var u,t
u=this.a
t=this.r
if(a===1)return new A.L(u,t,b,c)
else return A.ki(u,t,b,a,c)},
fD:function(a,b,c){var u,t
u=this.a
t=this.r
if(a===1)return new A.ah(u,t,b,c)
else return A.ki(u,t,b,a,c)},
fE:function(a,b,c){var u,t
u=this.a
t=this.r
if(a===1)return new A.ae(u,t,b,c)
else return A.ki(u,t,b,a,c)},
bm:function(a,b){return new P.es(a+" uniform variables are unsupported by all browsers.\n"+("Please change the type of "+H.m(b)+"."))},
jq:function(a,b,c,d){switch(a){case 5120:return this.aK(b,c,d)
case 5121:return this.aK(b,c,d)
case 5122:return this.aK(b,c,d)
case 5123:return this.aK(b,c,d)
case 5124:return this.aK(b,c,d)
case 5125:return this.aK(b,c,d)
case 5126:return new A.Y(this.a,this.r,c,d)
case 35664:return new A.iB(this.a,this.r,c,d)
case 35665:return new A.I(this.a,this.r,c,d)
case 35666:return new A.iE(this.a,this.r,c,d)
case 35667:return new A.iC(this.a,this.r,c,d)
case 35668:return new A.iD(this.a,this.r,c,d)
case 35669:return new A.iF(this.a,this.r,c,d)
case 35674:return new A.iH(this.a,this.r,c,d)
case 35675:return new A.cM(this.a,this.r,c,d)
case 35676:return new A.ar(this.a,this.r,c,d)
case 35678:return this.fD(b,c,d)
case 35680:return this.fE(b,c,d)
case 35670:throw H.f(this.bm("BOOL",c))
case 35671:throw H.f(this.bm("BOOL_VEC2",c))
case 35672:throw H.f(this.bm("BOOL_VEC3",c))
case 35673:throw H.f(this.bm("BOOL_VEC4",c))
default:throw H.f(P.r("Unknown uniform variable type "+H.m(a)+" for "+H.m(c)+"."))}}}
A.bR.prototype={
i:function(a){return this.b}}
A.dY.prototype={}
A.ea.prototype={}
A.iG.prototype={
j:function(a,b){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<t;++s){r=u[s]
if(r.c===b)return r}return},
n:function(a,b){var u=this.j(0,b)
if(u==null)throw H.f(P.r("Required uniform value, "+b+", was not defined or used in shader."))
return u},
i:function(a){return this.U()},
jH:function(a){var u,t,s,r
for(u=this.a,t=u.length,s="",r=0;r<u.length;u.length===t||(0,H.C)(u),++r)s+=u[r].i(0)+a
return s},
U:function(){return this.jH("\n")}}
A.L.prototype={
i:function(a){return"Uniform1i: "+H.m(this.c)}}
A.iC.prototype={
i:function(a){return"Uniform2i: "+H.m(this.c)}}
A.iD.prototype={
i:function(a){return"Uniform3i: "+H.m(this.c)}}
A.iF.prototype={
i:function(a){return"Uniform4i: "+H.m(this.c)}}
A.iA.prototype={
i:function(a){return"Uniform1iv: "+H.m(this.c)},
siF:function(a){this.e=H.l(a,"$ib",[P.B],"$ab")}}
A.Y.prototype={
i:function(a){return"Uniform1f: "+H.m(this.c)}}
A.iB.prototype={
i:function(a){return"Uniform2f: "+H.m(this.c)}}
A.I.prototype={
i:function(a){return"Uniform3f: "+H.m(this.c)}}
A.iE.prototype={
i:function(a){return"Uniform4f: "+H.m(this.c)}}
A.iH.prototype={
i:function(a){return"Uniform1Mat2 "+H.m(this.c)}}
A.cM.prototype={
ah:function(a){var u=new Float32Array(H.d4(H.l(a,"$ib",[P.z],"$ab")))
C.b.eB(this.a,this.d,!1,u)},
i:function(a){return"UniformMat3: "+H.m(this.c)}}
A.ar.prototype={
ah:function(a){var u=new Float32Array(H.d4(H.l(a,"$ib",[P.z],"$ab")))
C.b.eC(this.a,this.d,!1,u)},
i:function(a){return"UniformMat4: "+H.m(this.c)}}
A.ah.prototype={
i:function(a){return"UniformSampler2D: "+H.m(this.c)}}
A.ae.prototype={
eU:function(a){var u,t,s
u=a==null||a.d<6
t=this.a
s=this.d
if(u)C.b.R(t,s,0)
else C.b.R(t,s,a.a)},
i:function(a){return"UniformSamplerCube: "+H.m(this.c)}}
F.k_.prototype={
$1:function(a){return new V.a3(Math.cos(a),Math.sin(a),0)},
$S:36}
F.jO.prototype={
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
b5:function(){if(!this.gdX()){C.a.P(this.a.a.d.b,this)
this.a.a.aa()}this.i2()
this.i3()
this.i4()},
ig:function(a){this.a=a
C.a.h(a.d.b,this)},
ih:function(a){this.b=a
C.a.h(a.d.c,this)},
ii:function(a){this.c=a
C.a.h(a.d.d,this)},
i2:function(){var u=this.a
if(u!=null){C.a.P(u.d.b,this)
this.a=null}},
i3:function(){var u=this.b
if(u!=null){C.a.P(u.d.c,this)
this.b=null}},
i4:function(){var u=this.c
if(u!=null){C.a.P(u.d.d,this)
this.c=null}},
gdX:function(){return this.a==null||this.b==null||this.c==null},
ft:function(){var u,t,s,r,q
u=this.a
t=u==null?null:u.r
u=this.b
s=u==null?null:u.r
u=this.c
r=u==null?null:u.r
q=V.cS()
if(t!=null)q=q.p(0,t)
if(s!=null)q=q.p(0,s)
if(r!=null)q=q.p(0,r)
if(q.em())return
return q.w(0,Math.sqrt(q.D(q)))},
fz:function(){var u,t,s,r,q
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
var u=this.ft()
if(u==null){u=this.fz()
if(u==null)return!1}this.d=u
this.a.a.aa()
return!0},
fs:function(){var u,t,s,r,q
u=this.a
t=u==null?null:u.x
u=this.b
s=u==null?null:u.x
u=this.c
r=u==null?null:u.x
q=V.cS()
if(t!=null)q=q.p(0,t)
if(s!=null)q=q.p(0,s)
if(r!=null)q=q.p(0,r)
if(q.em())return
return q.w(0,Math.sqrt(q.D(q)))},
fw:function(){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f
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
var u=this.fs()
if(u==null){u=this.fw()
if(u==null)return!1}this.e=u
this.a.a.aa()
return!0},
gji:function(a){if(J.a0(this.a,this.b))return!0
if(J.a0(this.b,this.c))return!0
if(J.a0(this.c,this.a))return!0
return!1},
A:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.U()},
G:function(a){var u,t
if(this.gdX())return a+"disposed"
u=a+C.j.aC(J.aL(this.a.e),0)+", "+C.j.aC(J.aL(this.b.e),0)+", "+C.j.aC(J.aL(this.c.e),0)+" {"
t=this.d
u=t!=null?u+(t.i(0)+", "):u+"-, "
t=this.e
return t!=null?u+(t.i(0)+"}"):u+"-}"},
U:function(){return this.G("")}}
F.fN.prototype={}
F.i4.prototype={
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
F.bC.prototype={}
F.h9.prototype={}
F.iz.prototype={
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
F.bY.prototype={}
F.dW.prototype={
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
jR:function(a,b){var u,t,s,r,q,p
u=this.e
if(u!=null)++u.d
u=this.a.c
t=H.c(u.slice(0),[H.x(u,0)])
for(u=[F.aj];t.length!==0;){s=C.a.gjE(t)
C.a.eu(t,0)
if(s!=null){r=H.c([],u)
C.a.h(r,s)
for(q=t.length-1;q>=0;--q){if(q>=t.length)return H.j(t,q)
p=t[q]
if(p!=null&&a.b6(0,s,p)){C.a.h(r,p)
C.a.eu(t,q)}}if(r.length>1)b.jQ(r)}}this.a.E()
this.c.cR()
this.d.cR()
this.b.kc()
this.c.cS(new F.iz())
this.d.cS(new F.i4())
u=this.e
if(u!=null)u.aF(0)},
dP:function(a0,a1){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a
u=this.a.c.length
a1.toString
t=$.aK()
s=a1.a
r=(s&t.a)!==0?1:0
if((s&$.bo().a)!==0)++r
if((s&$.bn().a)!==0)++r
if((s&$.bp().a)!==0)++r
if((s&$.bq().a)!==0)++r
if((s&$.d8().a)!==0)++r
if((s&$.d9().a)!==0)++r
if((s&$.ce().a)!==0)++r
if((s&$.bm().a)!==0)++r
q=a1.gd0(a1)
p=q*4
t=new Array(u*q)
t.fixed$length=Array
s=P.z
o=H.c(t,[s])
t=new Array(r)
t.fixed$length=Array
n=H.c(t,[Z.df])
for(m=0,l=0;l<r;++l){k=a1.j9(l)
j=k.gd0(k)
C.a.Y(n,l,new Z.df(k,j,m*4,p,0))
for(i=0;i<u;++i){t=this.a.c
if(i>=t.length)return H.j(t,i)
h=t[i].jO(k)
g=m+i*q
for(f=0;f<h.length;++f){C.a.Y(o,g,h[f]);++g}}m+=j}H.l(o,"$ib",[s],"$ab")
t=a0.a
e=t.createBuffer()
C.b.ap(t,34962,e)
C.b.dO(t,34962,new Float32Array(H.d4(o)),35044)
C.b.ap(t,34962,null)
d=new Z.ci(new Z.ei(34962,e),n,a1)
d.sfS(H.c([],[Z.bV]))
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
C.a.h(d.b,new Z.bV(1,c.length,a))}if(this.d.b.length!==0){s=P.B
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
C.a.h(d.b,new Z.bV(4,c.length,a))}return d},
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
F.hY.prototype={
j3:function(a){var u,t,s,r,q,p
H.l(a,"$ib",[F.aj],"$ab")
u=H.c([],[F.a7])
t=a[0]
for(s=this.a,r=2;r<4;++r){q=a[r-1]
p=a[r]
s.a.h(0,t)
s.a.h(0,q)
s.a.h(0,p)
C.a.h(u,F.dq(t,q,p))}return u},
j4:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k,j,i,h
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
C.a.h(u,F.dq(l,k,i))
t.a.h(0,l)
t.a.h(0,i)
t.a.h(0,h)
C.a.h(u,F.dq(l,i,h))}else{m.h(0,k)
t.a.h(0,i)
t.a.h(0,h)
C.a.h(u,F.dq(k,i,h))
t.a.h(0,k)
t.a.h(0,h)
t.a.h(0,l)
C.a.h(u,F.dq(k,h,l))}o=!o}q=!q}return u},
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
t=s.gji(s)
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
sfK:function(a){this.b=H.l(a,"$ib",[F.a7],"$ab")}}
F.hZ.prototype={
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
sfV:function(a){this.b=H.l(a,"$ib",[F.bC],"$ab")}}
F.i_.prototype={
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
scf:function(a){this.b=H.l(a,"$ib",[F.bY],"$ab")}}
F.aj.prototype={
dT:function(a){var u,t,s,r,q,p,o
u=this.f
t=this.r
s=this.x
r=this.y
q=this.z
p=this.Q
o=this.ch
return F.iP(this.cx,s,p,u,t,r,q,a,o)},
jO:function(a){var u,t
if(a.A(0,$.aK())){u=this.f
t=[P.z]
if(u==null)return H.c([0,0,0],t)
else return H.c([u.a,u.b,u.c],t)}else if(a.A(0,$.bo())){u=this.r
t=[P.z]
if(u==null)return H.c([0,1,0],t)
else return H.c([u.a,u.b,u.c],t)}else if(a.A(0,$.bn())){u=this.x
t=[P.z]
if(u==null)return H.c([0,0,1],t)
else return H.c([u.a,u.b,u.c],t)}else if(a.A(0,$.bp())){u=this.y
t=[P.z]
if(u==null)return H.c([0,0],t)
else return H.c([u.a,u.b],t)}else if(a.A(0,$.bq())){u=this.z
t=[P.z]
if(u==null)return H.c([0,0,0],t)
else return H.c([u.a,u.b,u.c],t)}else if(a.A(0,$.d8())){u=this.Q
t=[P.z]
if(u==null)return H.c([1,1,1],t)
else return H.c([u.a,u.b,u.c],t)}else if(a.A(0,$.d9())){u=this.Q
t=[P.z]
if(u==null)return H.c([1,1,1,1],t)
else return H.c([u.a,u.b,u.c,u.d],t)}else if(a.A(0,$.ce()))return H.c([this.ch],[P.z])
else if(a.A(0,$.bm())){u=this.cx
t=[P.z]
if(u==null)return H.c([-1,-1,-1,-1],t)
else return H.c([u.a,u.b,u.c,u.d],t)}else return H.c([],[P.z])},
ct:function(){var u,t
u={}
if(this.r!=null)return!0
t=this.a
if(t!=null){t=t.e
if(t!=null)++t.d}u.a=V.cS()
this.d.O(0,new F.j_(u))
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
if(t!=null)++t.d}u.a=V.cS()
this.d.O(0,new F.iZ(u))
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
C.a.h(u,C.j.aC(J.aL(this.e),0))
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
F.j_.prototype={
$1:function(a){var u,t
H.k(a,"$ia7")
u=a==null?null:a.d
if(u!=null){t=this.a
t.a=t.a.p(0,u)}},
$S:5}
F.iZ.prototype={
$1:function(a){var u,t
H.k(a,"$ia7")
u=a==null?null:a.e
if(u!=null){t=this.a
t.a=t.a.p(0,u)}},
$S:5}
F.iQ.prototype={
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
j5:function(a,b,c,d,e,f,g,h,i){var u=F.iP(a,b,c,d,e,f,g,h,i)
this.h(0,u)
return u},
bn:function(a,b,c,d,e,f){return this.j5(a,null,b,c,null,d,e,f,0)},
gl:function(a){return this.c.length},
ax:function(){var u,t,s
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.C)(u),++s)u[s].ct()
return!0},
cs:function(){var u,t,s
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.C)(u),++s)u[s].cr()
return!0},
je:function(){var u,t,s,r,q,p,o,n
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
siG:function(a){this.c=H.l(a,"$ib",[F.aj],"$ab")}}
F.iR.prototype={
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
O:function(a,b){H.n(b,{func:1,ret:-1,args:[F.a7]})
C.a.O(this.b,b)
C.a.O(this.c,new F.iS(this,b))
C.a.O(this.d,new F.iT(this,b))},
i:function(a){return this.U()},
G:function(a){var u,t,s,r
u=H.c([],[P.h])
for(t=this.b,s=t.length,r=0;r<t.length;t.length===s||(0,H.C)(t),++r)C.a.h(u,t[r].G(a))
for(t=this.c,s=t.length,r=0;r<t.length;t.length===s||(0,H.C)(t),++r)C.a.h(u,t[r].G(a))
for(t=this.d,s=t.length,r=0;r<t.length;t.length===s||(0,H.C)(t),++r)C.a.h(u,t[r].G(a))
return C.a.m(u,"\n")},
U:function(){return this.G("")},
sfL:function(a){this.b=H.l(a,"$ib",[F.a7],"$ab")},
sfM:function(a){this.c=H.l(a,"$ib",[F.a7],"$ab")},
sfN:function(a){this.d=H.l(a,"$ib",[F.a7],"$ab")}}
F.iS.prototype={
$1:function(a){H.k(a,"$ia7")
if(!J.a0(a.a,this.a))this.b.$1(a)},
$S:5}
F.iT.prototype={
$1:function(a){var u
H.k(a,"$ia7")
u=this.a
if(!J.a0(a.a,u)&&!J.a0(a.b,u))this.b.$1(a)},
$S:5}
F.iU.prototype={
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
sfW:function(a){this.b=H.l(a,"$ib",[F.bC],"$ab")},
sfX:function(a){this.c=H.l(a,"$ib",[F.bC],"$ab")}}
F.iW.prototype={}
F.iV.prototype={
b6:function(a,b,c){return J.a0(b.f,c.f)}}
F.iX.prototype={}
F.hD.prototype={
jQ:function(a){var u,t,s,r,q,p,o,n,m
H.l(a,"$ib",[F.aj],"$ab")
u=V.cS()
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
F.iY.prototype={
gl:function(a){return 0},
i:function(a){return this.U()},
G:function(a){var u,t,s
u=H.c([],[P.h])
for(t=this.b,s=0;!1;++s){if(s>=0)return H.j(t,s)
C.a.h(u,t[s].G(a))}return C.a.m(u,"\n")},
U:function(){return this.G("")},
scf:function(a){this.b=H.l(a,"$ib",[F.bY],"$ab")}}
O.dG.prototype={
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
i8:function(){return this.dA(null)},
ha:function(a,b){var u=V.ao
u=new D.bz(a,H.l(b,"$id",[u],"$ad"),this,[u])
u.b=!0
this.a2(u)},
hc:function(a,b){var u=V.ao
u=new D.bA(a,H.l(b,"$id",[u],"$ad"),this,[u])
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
a7=$.aK()
if(a0){b=$.bo()
a7=new Z.b7(a7.a|b.a)}if(a1){b=$.bn()
a7=new Z.b7(a7.a|b.a)}if(a2){b=$.bp()
a7=new Z.b7(a7.a|b.a)}if(a3){b=$.bq()
a7=new Z.b7(a7.a|b.a)}if(a5){b=$.bm()
a7=new Z.b7(a7.a|b.a)}return new A.hl(u,m,l,k,j,i,h,g,f,t,s,r,q,p,o,t+s+r+q+p+o,d,d,a4,a6,!0,!1,!1,c,a4,a,a0,a1,a2,a3,a5,!1,!1,!1,n,e.charCodeAt(0)==0?e:e,a7)},
W:function(a,b){H.l(a,"$ib",[T.cI],"$ab")},
al:function(a,b){var u,t,s,r,q
for(u=this.dx.a,u=new J.am(u,u.length,0,[H.x(u,0)]);u.B();){t=u.d
t.toString
s=$.iO
if(s==null){s=new V.Q(0,0,1)
$.iO=s}t.a=s
r=t.b
if(r!=null){q=r.a
if(q!=null)t.a=q.cU(s)}}},
ev:function(a2,a3){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1
u=this.a
if(u==null){u=this.dh()
t=H.k(a2.fr.j(0,u.aj),"$idH")
if(t==null){t=A.mr(u,a2.a)
a2.dJ(t)}this.a=t
a3.e=null
u=t}s=u.z
r=s.bp
u=a3.e
if(!(u instanceof Z.ci)){a3.e=null
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
o.a.je()
o=o.e
if(o!=null)o.aF(0)}m=a3.d.dP(new Z.ej(a2.a),r)
m.az($.aK()).e=this.a.Q.c
if(u)m.az($.bo()).e=this.a.cx.c
if(q)m.az($.bn()).e=this.a.ch.c
if(s.rx)m.az($.bp()).e=this.a.cy.c
if(p)m.az($.bq()).e=this.a.db.c
if(s.x1)m.az($.bm()).e=this.a.dx.c
a3.e=m}u=T.cI
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
if(p==null){p=a2.gka()
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
i=new Float32Array(H.d4(H.l(o.ac(0,!0),"$ib",q,"$ab")))
C.b.eC(p.a,p.d,!1,i)}}switch(s.a){case C.c:break
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
b=$.cA
if(b==null){b=new V.a3(0,0,0)
$.cA=b}b=c.bd(b)
c=d.b
C.b.u(c.a,c.d,b.a,b.b,b.c)
c=$.cA
if(c==null){c=new V.a3(0,0,0)
$.cA=c}c=a0.bd(c)
b=d.c
C.b.u(b.a,b.d,c.a,c.b,c.c)
c=a0.cI(0)
b=d.d
i=new Float32Array(H.d4(H.l(new V.dJ(c.a,c.b,c.c,c.e,c.f,c.r,c.y,c.z,c.Q).ac(0,!0),"$ib",o,"$ab")))
C.b.eB(b.a,b.d,!1,i)
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
C.b.jd(u,770,771)}for(j=0;j<l.length;++j)l[j].a1(a2)
u=a3.e
u.a1(a2)
u.ab(a2)
u.aU(a2)
if(q)C.b.jw(a2.a,3042)
for(j=0;j<l.length;++j)l[j].aU(a2)
u=this.a
u.toString
C.b.cV(a2.a,null)
u.x.dV()},
i:function(a){var u=this.a
if(u!=null)return u.b
else return this.dh().aj},
sfv:function(a){this.e=H.l(a,"$ia1",[V.ao],"$aa1")}}
O.hj.prototype={}
O.dI.prototype={
aN:function(){}}
O.hk.prototype={}
O.aV.prototype={
dC:function(a){var u,t
if(!J.a0(this.f,a)){u=this.f
this.f=a
t=new D.M(this.b+".color",u,a,this,[V.a2])
t.b=!0
this.a.a2(t)}},
aN:function(){this.f1()
this.dC(new V.a2(1,1,1))},
saq:function(a,b){var u
if(this.c===C.c){this.c=C.i
this.aN()
u=this.a
u.a=null
u.a2(null)}this.dC(b)}}
O.hm.prototype={
ie:function(a){var u=this.ch
if(!(Math.abs(u-a)<$.R().a)){this.ch=a
u=new D.M(this.b+".refraction",u,a,this,[P.z])
u.b=!0
this.a.a2(u)}},
aN:function(){this.bU()
this.ie(1)}}
O.hn.prototype={
cj:function(a){var u=this.ch
if(!(Math.abs(u-a)<$.R().a)){this.ch=a
u=new D.M(this.b+".shininess",u,a,this,[P.z])
u.b=!0
this.a.a2(u)}},
aN:function(){this.bU()
this.cj(100)}}
O.dX.prototype={
gq:function(){var u=this.e
if(u==null){u=D.J()
this.e=u}return u},
a2:function(a){var u
H.k(a,"$iy")
u=this.e
if(u!=null)u.F(a)},
bW:function(){return this.a2(null)},
ev:function(a,b){var u,t,s,r,q,p
if(this.a==null){u=H.k(a.fr.j(0,"Skybox"),"$idY")
if(u==null){t=a.a
u=new A.dY(t,"Skybox")
u.d2(t,"Skybox")
u.el(0,$.mH,$.mG)
u.z=u.x.j(0,"posAttr")
u.Q=H.i(u.y.j(0,"fov"),"$iY")
u.ch=H.i(u.y.j(0,"ratio"),"$iY")
u.cx=H.i(u.y.j(0,"boxClr"),"$iI")
u.cy=H.i(u.y.j(0,"boxTxt"),"$iae")
u.db=H.i(u.y.j(0,"viewMat"),"$iar")
a.dJ(u)}this.a=u}if(b.e==null){t=b.d.dP(new Z.ej(a.a),$.aK())
t.az($.aK()).e=this.a.z.c
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
r.cy.eU(s)
s=this.d
t=r.cx
C.b.u(t.a,t.d,s.a,s.b,s.c)
s=a.db
s=s.ga0(s).cI(0)
r=r.db
r.toString
r.ah(s.ac(0,!0))
t=b.e
if(t instanceof Z.ci){t.a1(a)
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
O.bD.prototype={}
T.cI.prototype={}
T.e3.prototype={
gq:function(){var u=this.e
if(u==null){u=D.J()
this.e=u}return u}}
T.il.prototype={
aL:function(a,b,c,d,e,f){var u,t
u=document.createElement("img")
u.src=c;++this.d
t=W.o
W.a8(u,"load",H.n(new T.im(this,u,!1,b,!1,d,a),{func:1,ret:-1,args:[t]}),!1,t)},
i9:function(a,b,c){var u,t,s,r
b=V.kx(b,2)
u=V.kx(a.width,2)
t=V.kx(a.height,2)
u=Math.min(u,b)
t=Math.min(t,b)
if(a.width===u&&a.height===t)return a
else{s=W.k5(null,null)
s.width=u
s.height=t
r=H.k(C.p.eI(s,"2d"),"$ibQ")
r.imageSmoothingEnabled=!1;(r&&C.y).jy(r,a,0,0,s.width,s.height)
return P.n9(C.y.fR(r,0,0,s.width,s.height))}}}
T.im.prototype={
$1:function(a){var u,t,s
u=this.a
t=u.i9(this.b,u.c,this.c)
s=u.a
C.b.aR(s,34067,this.d)
C.b.k9(s,37440,this.e?1:0)
C.b.kk(s,this.f,0,6408,6408,5121,t)
C.b.aR(s,34067,null)
s=this.r
if(++s.d>=6){s=s.e
if(s!=null)s.jB()}++u.e},
$S:25}
V.bb.prototype={
aB:function(a,b){return!0},
i:function(a){return"all"},
$iau:1}
V.au.prototype={}
V.dF.prototype={
aB:function(a,b){var u,t,s
for(u=this.a,t=u.length,s=0;s<u.length;u.length===t||(0,H.C)(u),++s)if(u[s].aB(0,b))return!0
return!1},
i:function(a){var u,t,s,r,q
for(u=this.a,t=u.length,s="",r=0;r<u.length;u.length===t||(0,H.C)(u),++r){q=u[r]
if(s.length!==0)s+=", "
s+=q.i(0)}return s},
sa4:function(a){this.a=H.l(a,"$ib",[V.au],"$ab")},
$iau:1}
V.ap.prototype={
aB:function(a,b){return!this.f0(0,b)},
i:function(a){return"!["+this.d1(0)+"]"}}
V.hN.prototype={
aB:function(a,b){return this.a<=b&&this.b>=b},
i:function(a){var u,t
u=H.ke(this.a)
t=H.ke(this.b)
return u+".."+t},
$iau:1}
V.hX.prototype={
f6:function(a){var u,t
if(a.a.length<=0)throw H.f(P.r("May not create a SetMatcher with zero characters."))
u=new H.aT([P.B,P.O])
for(t=new H.ct(a,a.gl(a),0,[H.al(a,"v",0)]);t.B();)u.Y(0,t.d,!0)
this.sic(u)},
aB:function(a,b){return this.a.dS(0,b)},
i:function(a){var u=this.a
return P.kg(new H.dB(u,[H.x(u,0)]),0,null)},
sic:function(a){this.a=H.l(a,"$iP",[P.B,P.O],"$aP")},
$iau:1}
V.cE.prototype={
m:function(a,b){var u,t,s,r
for(u=this.c,t=u.length,s=0;s<t;++s){r=u[s]
if(r.b.b===b)return r}r=new V.cK(this.a.k(0,b))
r.sa4(H.c([],[V.au]))
r.c=!1
C.a.h(this.c,r)
return r},
jD:function(a){var u,t,s,r
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.C)(u),++s){r=u[s]
if(r.aB(0,a))return r}return},
i:function(a){return this.b},
siB:function(a){this.c=H.l(a,"$ib",[V.cK],"$ab")}}
V.e8.prototype={
i:function(a){var u,t
u=H.kz(this.b,"\n","\\n")
t=H.kz(u,"\t","\\t")
return this.a+":"+this.c+':"'+t+'"'}}
V.cJ.prototype={
aE:function(a,b,c){var u,t,s
H.l(c,"$ib",[P.h],"$ab")
for(u=c.length,t=0;t<c.length;c.length===u||(0,H.C)(c),++t){s=c[t]
this.c.Y(0,s,b)}},
i:function(a){return this.b},
si5:function(a){var u=P.h
this.c=H.l(a,"$iP",[u,u],"$aP")}}
V.iq.prototype={
k:function(a,b){var u=this.a.j(0,b)
if(u==null){u=new V.cE(this,b)
u.siB(H.c([],[V.cK]))
u.d=null
this.a.Y(0,b,u)}return u},
M:function(a){var u,t
u=this.b.j(0,a)
if(u==null){u=new V.cJ(this,a)
t=P.h
u.si5(new H.aT([t,t]))
this.b.Y(0,a,u)}return u},
eA:function(a){var u,t,s,r,q,p,o,n,m,l,k,j
u=H.c([],[V.e8])
t=this.c
s=[P.B]
r=H.c([],s)
for(q=a.length,p=null,o=0;!0;){if(o>=q){if(p!=null)C.a.h(u,p)
return u}n=C.j.aJ(a,o)
m=t.jD(n)
if(m==null){if(p==null){C.a.h(r,n)
l=P.kg(r,0,null)
throw H.f(P.r("Untokenizable string [state: "+t.b+", index "+o+']: "'+l+'"'))}C.a.h(u,p)
o=p.c+1
r=H.c([],s)
t=this.c
p=null}else{if(!m.c)C.a.h(r,n)
t=m.b
if(t.d!=null){l=P.kg(r,0,null)
k=t.d
j=k.c.j(0,l)
p=new V.e8(j==null?k.b:j,l,o)}++o}}},
siq:function(a){this.a=H.l(a,"$iP",[P.h,V.cE],"$aP")},
siu:function(a){this.b=H.l(a,"$iP",[P.h,V.cJ],"$aP")}}
V.cK.prototype={
i:function(a){return this.b.b+": "+this.d1(0)}}
X.bO.prototype={$iaY:1}
X.fV.prototype={
gq:function(){var u=this.x
if(u==null){u=D.J()
this.x=u}return u},
am:function(a){var u=this.x
if(u!=null)u.F(a)},
a1:function(a){var u,t,s,r,q,p,o,n
u=a.a
C.b.jc(u,36160,null)
C.b.cz(u,2884)
C.b.cz(u,2929)
C.b.jv(u,513)
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
C.b.jh(u,this.c)
if(this.b){r=this.a
C.b.jg(u,r.a,r.b,r.c,r.d)
n=16640}else n=256
C.b.jf(u,n)}}
X.h0.prototype={
gq:function(){var u=this.b
if(u==null){u=D.J()
this.b=u}return u},
a1:function(a){var u
a.cy.bJ(V.bX())
u=V.bX()
a.db.bJ(u)},
aU:function(a){a.cy.aD()
a.db.aD()},
$iaY:1,
$ibO:1}
X.dP.prototype={
gq:function(){var u=this.f
if(u==null){u=D.J()
this.f=u}return u},
am:function(a){var u
H.k(a,"$iy")
u=this.f
if(u!=null)u.F(a)},
fo:function(){return this.am(null)},
a1:function(a){var u,t,s,r,q,p,o,n,m,l
u=a.c
t=a.d
s=this.c
r=this.d
q=this.e
p=q-r
o=1/Math.tan(s*0.5)
n=V.aW(-o/(u/t),0,0,0,0,o,0,0,0,0,q/p,-q*r/p,0,0,1,0)
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
$iaY:1,
$ibO:1}
X.cG.prototype={}
V.bt.prototype={
bh:function(a){this.b=new P.fZ(C.M)
this.c=null
this.sc4(H.c([],[[P.b,W.az]]))},
L:function(a,b){var u,t,s,r,q,p,o,n,m
u=this.d
if(u.length===0)C.a.h(u,H.c([],[W.az]))
t=a.split("\n")
for(u=t.length,s=[W.az],r=!0,q=0;q<u;++q){p=t[q]
if(r)r=!1
else C.a.h(this.d,H.c([],s))
o=document.createElement("div")
o.className="codePart"
H.H(p)
n=this.b.fC(p,0,p.length)
m=n==null?p:n
C.k.eR(o,H.kz(m," ","&nbsp;"))
m=o.style
m.color=b
C.a.h(C.a.gbF(this.d),o)}},
es:function(a,b){var u,t,s,r
H.l(b,"$ib",[P.h],"$ab")
this.sc4(H.c([],[[P.b,W.az]]))
u=C.a.m(b,"\n")
t=this.c
if(t==null){t=this.bo()
this.c=t}for(t=t.eA(u),s=t.length,r=0;r<t.length;t.length===s||(0,H.C)(t),++r)this.bI(t[r])},
sc4:function(a){this.d=H.l(a,"$ib",[[P.b,W.az]],"$ab")}}
V.jZ.prototype={
$1:function(a){H.k(a,"$ib4")
P.ky(C.e.ez(this.a.gjI(),2)+" fps")},
$S:41}
V.fz.prototype={
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
u=V.ir()
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
C.a.h(u.k(0,"OpenDoubleStr").m(0,"OpenDoubleStr").a,new V.bb())
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
C.a.h(u.k(0,"OpenSingleStr").m(0,"OpenSingleStr").a,new V.bb())
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
r=[V.au]
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
V.fW.prototype={
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
u=V.ir()
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
C.a.h(u.k(0,"Slash").m(0,"Sym").a,new V.bb())
s=u.k(0,"Comment").m(0,"EndComment")
t=V.t(new H.q("\n"))
C.a.h(s.a,t)
t=u.k(0,"Comment").m(0,"Comment")
s=new V.ap()
r=[V.au]
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
V.fX.prototype={
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
u=V.ir()
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
C.a.h(u.k(0,"OpenStr").m(0,"OpenStr").a,new V.bb())
C.a.h(u.k(0,"Start").m(0,"Other").a,new V.bb())
t=u.k(0,"Other").m(0,"Other")
s=new V.ap()
s.sa4(H.c([],[V.au]))
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
V.hJ.prototype={
es:function(a,b){H.l(b,"$ib",[P.h],"$ab")
this.sc4(H.c([],[[P.b,W.az]]))
this.L(C.a.m(b,"\n"),"#111")},
bI:function(a){},
bo:function(){return}}
V.i0.prototype={
f7:function(a,b){var u,t,s,r,q,p,o
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
W.a8(u,"scroll",H.n(new V.i2(s),{func:1,ret:-1,args:[o]}),!1,o)},
dI:function(a){var u,t,s,r,q,p,o,n,m,l,k
H.l(a,"$ib",[P.h],"$ab")
this.ik()
u=document
t=u.createElement("div")
t.className="textPar"
for(s=this.b.eA(C.a.jM(a)),r=s.length,q=0;q<s.length;s.length===r||(0,H.C)(s),++q){p=s[q]
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
eH:function(a){var u,t,s,r
u=new V.fz("dart")
u.bh("dart")
t=new V.fW("glsl")
t.bh("glsl")
s=new V.fX("html")
s.bh("html")
r=C.a.jF(H.c([u,t,s],[V.bt]),new V.i3(a))
if(r!=null)return r
u=new V.hJ("plain")
u.bh("plain")
return u},
dH:function(a4,a5,a6,a7){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3
H.l(a7,"$ib",[P.h],"$ab")
u=H.c([],[P.B])
for(t=!1,s=0;s<a7.length;++s){r=a7[s]
if(J.kt(r).bS(r,"+")){C.a.Y(a7,s,C.j.bf(r,1))
C.a.h(u,1)
t=!0}else if(C.j.bS(r,"-")){C.a.Y(a7,s,C.j.bf(r,1))
C.a.h(u,-1)
t=!0}else C.a.h(u,0)}q=this.eH(a5)
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
ik:function(){var u,t,s,r
if(this.b!=null)return
u=V.ir()
u.c=u.k(0,"Start")
t=u.k(0,"Start").m(0,"Bold")
s=V.t(new H.q("*"))
C.a.h(t.a,s)
t.c=!0
t=u.k(0,"Bold").m(0,"Bold")
s=new V.ap()
r=[V.au]
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
C.a.h(u.k(0,"Start").m(0,"Other").a,new V.bb())
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
V.i2.prototype={
$1:function(a){P.lb(C.q,new V.i1(this.a))},
$S:25}
V.i1.prototype={
$0:function(){var u,t,s
u=C.e.ak(document.documentElement.scrollTop)
t=this.a.style
s=H.m(-0.01*u)+"px"
t.top=s},
$S:2}
V.i3.prototype={
$1:function(a){return H.k(a,"$ibt").a===this.a},
$S:42}
B.jW.prototype={
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
u.eY=u.i
u=J.dy.prototype
u.f_=u.i
u=P.d.prototype
u.eZ=u.bO
u=W.U.prototype
u.bT=u.af
u=W.eN.prototype
u.f2=u.ao
u=O.dI.prototype
u.f1=u.aN
u=O.aV.prototype
u.bU=u.aN
u=V.dF.prototype
u.f0=u.aB
u.d1=u.i})();(function installTearOffs(){var u=hunkHelpers._static_1,t=hunkHelpers._static_0,s=hunkHelpers.installStaticTearOff,r=hunkHelpers.installInstanceTearOff,q=hunkHelpers._instance_2u,p=hunkHelpers._instance_0u,o=hunkHelpers._instance_1u,n=hunkHelpers._instance_0i
u(P,"n3","mM",11)
u(P,"n4","mN",11)
u(P,"n5","mO",11)
t(P,"lA","n2",3)
s(W,"ni",4,null,["$4"],["mQ"],20,0)
s(W,"nj",4,null,["$4"],["mR"],20,0)
var m
r(m=E.ag.prototype,"geq",0,0,null,["$1","$0"],["er","jX"],0,0)
r(m,"geo",0,0,null,["$1","$0"],["ep","jU"],0,0)
q(m,"gjS","jT",8)
q(m,"gjV","jW",8)
r(m=E.e7.prototype,"gd4",0,0,null,["$1","$0"],["d6","d5"],0,0)
p(m,"gke","ew",3)
o(m=X.ee.prototype,"ghp","hq",10)
o(m,"ghd","he",10)
o(m,"ghj","hk",4)
o(m,"ght","hu",23)
o(m,"ghr","hs",23)
o(m,"ghx","hy",4)
o(m,"ghB","hC",4)
o(m,"ghn","ho",4)
o(m,"ghz","hA",4)
o(m,"ghl","hm",4)
o(m,"ghD","hE",28)
o(m,"ghF","hG",10)
o(m,"ghV","hW",9)
o(m,"ghR","hS",9)
o(m,"ghT","hU",9)
r(D.bv.prototype,"gfc",0,0,null,["$1","$0"],["at","fd"],0,0)
r(m=D.dA.prototype,"gds",0,0,null,["$1","$0"],["dt","hv"],0,0)
o(m,"ghH","hI",30)
q(m,"gh7","h8",26)
q(m,"ghL","hM",26)
n(V.S.prototype,"gl","cJ",18)
n(V.Q.prototype,"gl","cJ",18)
r(m=U.cr.prototype,"gaM",0,0,null,["$1","$0"],["N","a5"],0,0)
q(m,"gh5","h6",17)
q(m,"ghJ","hK",17)
r(m=U.ef.prototype,"gaM",0,0,null,["$1","$0"],["N","a5"],0,0)
o(m,"gc7","c8",1)
o(m,"gc9","ca",1)
o(m,"gcb","cc",1)
r(m=U.eg.prototype,"gaM",0,0,null,["$1","$0"],["N","a5"],0,0)
o(m,"gc7","c8",1)
o(m,"gc9","ca",1)
o(m,"gcb","cc",1)
o(m,"gfZ","h_",1)
o(m,"gh0","h1",1)
o(m,"giz","iA",1)
o(m,"gix","iy",1)
o(m,"giv","iw",1)
o(U.eh.prototype,"gh3","h4",1)
r(m=M.dh.prototype,"gZ",0,0,null,["$1","$0"],["a_","aZ"],0,0)
q(m,"ghN","hO",14)
q(m,"ghP","hQ",14)
r(M.dj.prototype,"gZ",0,0,null,["$1","$0"],["a_","aZ"],0,0)
r(m=M.dp.prototype,"gZ",0,0,null,["$1","$0"],["a_","aZ"],0,0)
q(m,"ghf","hg",8)
q(m,"ghh","hi",8)
r(m=O.dG.prototype,"gbV",0,0,null,["$1","$0"],["a2","bW"],0,0)
r(m,"gi7",0,0,null,["$1","$0"],["dA","i8"],0,0)
q(m,"gh9","ha",13)
q(m,"ghb","hc",13)
r(O.dX.prototype,"gbV",0,0,null,["$1","$0"],["a2","bW"],0,0)
r(X.dP.prototype,"gfn",0,0,null,["$1","$0"],["am","fo"],0,0)})();(function inheritance(){var u=hunkHelpers.mixin,t=hunkHelpers.inherit,s=hunkHelpers.inheritMany
t(P.N,null)
s(P.N,[H.kc,J.a,J.am,P.eA,P.d,H.ct,P.aS,H.bT,H.ed,H.hO,H.iw,P.bw,H.cj,H.eS,P.aa,H.ha,H.hb,H.h5,P.eY,P.b9,P.aC,P.ek,P.ib,P.cF,P.ic,P.b4,P.af,P.jJ,P.jx,P.c4,P.ez,P.v,P.ck,P.h_,P.jH,P.O,P.an,P.a4,P.aP,P.hH,P.e_,P.es,P.fU,P.bx,P.b,P.P,P.K,P.aq,P.h,P.bj,W.fv,W.bG,W.A,W.dN,W.eN,W.jC,W.dr,W.aw,W.jw,W.f3,P.f2,P.jr,O.a1,O.cu,E.fo,E.ag,E.hP,E.e7,Z.ei,Z.ej,Z.ci,Z.bV,Z.b7,D.fr,D.bS,D.y,X.dg,X.dz,X.h7,X.hd,X.av,X.hu,X.is,X.ee,D.bv,D.a5,D.dQ,D.dZ,D.e4,D.e5,D.e6,V.a2,V.at,V.fJ,V.dJ,V.ao,V.a6,V.a3,V.b_,V.dU,V.S,V.Q,U.ef,U.eg,U.eh,M.dj,M.dp,M.ax,A.dc,A.fj,A.hl,A.cL,A.cP,A.cN,A.cQ,A.cO,A.cR,A.bR,A.ea,A.iG,F.a7,F.fN,F.bC,F.h9,F.bY,F.dW,F.hY,F.hZ,F.i_,F.aj,F.iQ,F.iR,F.iU,F.iW,F.iX,F.iY,O.bD,O.dI,T.il,V.bb,V.au,V.dF,V.hN,V.hX,V.cE,V.e8,V.cJ,V.iq,X.bO,X.cG,X.h0,X.dP,V.bt,V.i0])
s(J.a,[J.h4,J.dx,J.dy,J.aF,J.bB,J.bd,H.cy,W.e,W.fh,W.dd,W.bQ,W.aN,W.aO,W.T,W.em,W.fA,W.fB,W.dl,W.eo,W.dn,W.eq,W.fD,W.o,W.et,W.aR,W.fY,W.ev,W.by,W.dD,W.ho,W.eB,W.eC,W.aX,W.eD,W.eG,W.aZ,W.eK,W.dS,W.eM,W.b1,W.eO,W.b2,W.eT,W.aG,W.eW,W.ip,W.b5,W.eZ,W.iu,W.iL,W.f4,W.f6,W.f8,W.fa,W.fc,P.bf,P.ex,P.bh,P.eI,P.hM,P.eU,P.bk,P.f0,P.fk,P.el,P.de,P.ds,P.dR,P.c1,P.dV,P.e2,P.eb,P.eQ])
s(J.dy,[J.hI,J.bF,J.be])
t(J.kb,J.aF)
s(J.bB,[J.dw,J.dv])
t(P.hc,P.eA)
s(P.hc,[H.ec,W.j8,W.ak,P.fQ])
t(H.q,H.ec)
s(P.d,[H.fG,H.hg,H.cT])
s(H.fG,[H.bW,H.dB])
s(P.aS,[H.hh,H.j2])
t(H.hi,H.bW)
s(P.bw,[H.hE,H.h6,H.iJ,H.iy,H.fq,H.hV,P.dO,P.aE,P.iK,P.iI,P.c2,P.ft,P.fy])
s(H.cj,[H.k0,H.ii,H.jS,H.jT,H.jU,P.j4,P.j3,P.j5,P.j6,P.jG,P.jF,P.je,P.ji,P.jf,P.jg,P.jh,P.jl,P.jm,P.jk,P.jj,P.id,P.ie,P.jL,P.ju,P.jt,P.jv,P.hf,P.fE,P.fF,W.fH,W.hq,W.hs,W.hU,W.ia,W.jd,W.hC,W.hB,W.jy,W.jz,W.jE,W.jI,P.jN,P.fR,P.fS,P.fm,E.hQ,E.hR,E.hS,E.io,D.fL,D.fM,F.k_,F.jO,F.j_,F.iZ,F.iS,F.iT,T.im,V.jZ,V.i2,V.i1,V.i3,B.jW])
s(H.ii,[H.i8,H.cg])
t(P.he,P.aa)
s(P.he,[H.aT,W.j7])
t(H.dK,H.cy)
s(H.dK,[H.cX,H.cZ])
t(H.cY,H.cX)
t(H.cx,H.cY)
t(H.d_,H.cZ)
t(H.dL,H.d_)
s(H.dL,[H.hv,H.hw,H.hx,H.hy,H.hz,H.dM,H.hA])
t(P.js,P.jJ)
t(P.jq,P.jx)
t(P.cl,P.ic)
t(P.fI,P.ck)
s(P.cl,[P.fZ,P.iN])
t(P.iM,P.fI)
s(P.a4,[P.z,P.B])
s(P.aE,[P.c0,P.h1])
s(W.e,[W.D,W.fP,W.b0,W.d0,W.b3,W.aH,W.d2,W.j1,W.cU,P.fn,P.bN])
s(W.D,[W.U,W.bs,W.co,W.cV])
s(W.U,[W.w,P.p])
s(W.w,[W.db,W.fi,W.cf,W.br,W.bP,W.az,W.fT,W.dt,W.cs,W.cv,W.hW,W.c3,W.e0,W.e1,W.ih,W.cH])
s(W.aN,[W.cm,W.fw,W.fx])
t(W.fu,W.aO)
t(W.cn,W.em)
t(W.ep,W.eo)
t(W.dm,W.ep)
t(W.er,W.eq)
t(W.fC,W.er)
t(W.aQ,W.dd)
t(W.eu,W.et)
t(W.fO,W.eu)
t(W.ew,W.ev)
t(W.bU,W.ew)
t(W.du,W.co)
t(W.bE,W.o)
s(W.bE,[W.aU,W.ab,W.aI])
t(W.hp,W.eB)
t(W.hr,W.eC)
t(W.eE,W.eD)
t(W.ht,W.eE)
t(W.eH,W.eG)
t(W.cz,W.eH)
t(W.eL,W.eK)
t(W.hK,W.eL)
t(W.hT,W.eM)
t(W.d1,W.d0)
t(W.i5,W.d1)
t(W.eP,W.eO)
t(W.i6,W.eP)
t(W.i9,W.eT)
t(W.eX,W.eW)
t(W.ij,W.eX)
t(W.d3,W.d2)
t(W.ik,W.d3)
t(W.f_,W.eZ)
t(W.it,W.f_)
t(W.j0,W.cv)
t(W.b8,W.ab)
t(W.f5,W.f4)
t(W.j9,W.f5)
t(W.en,W.dn)
t(W.f7,W.f6)
t(W.jn,W.f7)
t(W.f9,W.f8)
t(W.eF,W.f9)
t(W.fb,W.fa)
t(W.jA,W.fb)
t(W.fd,W.fc)
t(W.jB,W.fd)
t(W.ja,W.j7)
t(W.jb,P.ib)
t(W.kj,W.jb)
t(W.jc,P.cF)
t(W.jD,W.eN)
t(P.ac,P.jr)
t(P.ey,P.ex)
t(P.h8,P.ey)
t(P.eJ,P.eI)
t(P.hF,P.eJ)
t(P.cC,P.p)
t(P.eV,P.eU)
t(P.ig,P.eV)
t(P.f1,P.f0)
t(P.iv,P.f1)
t(P.fl,P.el)
t(P.hG,P.bN)
t(P.eR,P.eQ)
t(P.i7,P.eR)
s(E.fo,[Z.df,A.cD,T.cI])
s(D.y,[D.bz,D.bA,D.M,X.hL])
s(X.hL,[X.dE,X.bg,X.cw,X.e9])
s(O.a1,[D.dA,U.cr,M.dh])
s(D.fr,[U.fs,U.ad])
t(U.di,U.ad)
s(A.cD,[A.dH,A.dY])
s(A.ea,[A.L,A.iC,A.iD,A.iF,A.iA,A.Y,A.iB,A.I,A.iE,A.iH,A.cM,A.ar,A.ah,A.ae])
t(F.i4,F.fN)
t(F.iz,F.h9)
t(F.iV,F.iW)
t(F.hD,F.iX)
s(O.bD,[O.dG,O.dX])
s(O.dI,[O.hj,O.hk,O.aV])
s(O.aV,[O.hm,O.hn])
t(T.e3,T.cI)
s(V.dF,[V.ap,V.cK])
t(X.fV,X.cG)
s(V.bt,[V.fz,V.fW,V.fX,V.hJ])
u(H.ec,H.ed)
u(H.cX,P.v)
u(H.cY,H.bT)
u(H.cZ,P.v)
u(H.d_,H.bT)
u(P.eA,P.v)
u(W.em,W.fv)
u(W.eo,P.v)
u(W.ep,W.A)
u(W.eq,P.v)
u(W.er,W.A)
u(W.et,P.v)
u(W.eu,W.A)
u(W.ev,P.v)
u(W.ew,W.A)
u(W.eB,P.aa)
u(W.eC,P.aa)
u(W.eD,P.v)
u(W.eE,W.A)
u(W.eG,P.v)
u(W.eH,W.A)
u(W.eK,P.v)
u(W.eL,W.A)
u(W.eM,P.aa)
u(W.d0,P.v)
u(W.d1,W.A)
u(W.eO,P.v)
u(W.eP,W.A)
u(W.eT,P.aa)
u(W.eW,P.v)
u(W.eX,W.A)
u(W.d2,P.v)
u(W.d3,W.A)
u(W.eZ,P.v)
u(W.f_,W.A)
u(W.f4,P.v)
u(W.f5,W.A)
u(W.f6,P.v)
u(W.f7,W.A)
u(W.f8,P.v)
u(W.f9,W.A)
u(W.fa,P.v)
u(W.fb,W.A)
u(W.fc,P.v)
u(W.fd,W.A)
u(P.ex,P.v)
u(P.ey,W.A)
u(P.eI,P.v)
u(P.eJ,W.A)
u(P.eU,P.v)
u(P.eV,W.A)
u(P.f0,P.v)
u(P.f1,W.A)
u(P.el,P.aa)
u(P.eQ,P.v)
u(P.eR,W.A)})();(function constants(){var u=hunkHelpers.makeConstList
C.n=W.br.prototype
C.p=W.bP.prototype
C.y=W.bQ.prototype
C.k=W.az.prototype
C.J=W.dl.prototype
C.L=W.dt.prototype
C.z=W.du.prototype
C.N=J.a.prototype
C.a=J.aF.prototype
C.O=J.dv.prototype
C.d=J.dw.prototype
C.r=J.dx.prototype
C.e=J.bB.prototype
C.j=J.bd.prototype
C.V=J.be.prototype
C.Z=W.cz.prototype
C.D=J.hI.prototype
C.E=W.dS.prototype
C.b=P.c1.prototype
C.v=W.c3.prototype
C.o=W.e0.prototype
C.m=W.e1.prototype
C.w=J.bF.prototype
C.F=W.b8.prototype
C.G=W.cU.prototype
C.H=new P.hH()
C.I=new P.iN()
C.l=new P.js()
C.c=new A.bR(0,"ColorSourceType.None")
C.i=new A.bR(1,"ColorSourceType.Solid")
C.f=new A.bR(2,"ColorSourceType.Texture2D")
C.h=new A.bR(3,"ColorSourceType.TextureCube")
C.q=new P.aP(0)
C.K=new P.aP(5e6)
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
C.W=H.c(u(["*::class","*::dir","*::draggable","*::hidden","*::id","*::inert","*::itemprop","*::itemref","*::itemscope","*::lang","*::spellcheck","*::title","*::translate","A::accesskey","A::coords","A::hreflang","A::name","A::shape","A::tabindex","A::target","A::type","AREA::accesskey","AREA::alt","AREA::coords","AREA::nohref","AREA::shape","AREA::tabindex","AREA::target","AUDIO::controls","AUDIO::loop","AUDIO::mediagroup","AUDIO::muted","AUDIO::preload","BDO::dir","BODY::alink","BODY::bgcolor","BODY::link","BODY::text","BODY::vlink","BR::clear","BUTTON::accesskey","BUTTON::disabled","BUTTON::name","BUTTON::tabindex","BUTTON::type","BUTTON::value","CANVAS::height","CANVAS::width","CAPTION::align","COL::align","COL::char","COL::charoff","COL::span","COL::valign","COL::width","COLGROUP::align","COLGROUP::char","COLGROUP::charoff","COLGROUP::span","COLGROUP::valign","COLGROUP::width","COMMAND::checked","COMMAND::command","COMMAND::disabled","COMMAND::label","COMMAND::radiogroup","COMMAND::type","DATA::value","DEL::datetime","DETAILS::open","DIR::compact","DIV::align","DL::compact","FIELDSET::disabled","FONT::color","FONT::face","FONT::size","FORM::accept","FORM::autocomplete","FORM::enctype","FORM::method","FORM::name","FORM::novalidate","FORM::target","FRAME::name","H1::align","H2::align","H3::align","H4::align","H5::align","H6::align","HR::align","HR::noshade","HR::size","HR::width","HTML::version","IFRAME::align","IFRAME::frameborder","IFRAME::height","IFRAME::marginheight","IFRAME::marginwidth","IFRAME::width","IMG::align","IMG::alt","IMG::border","IMG::height","IMG::hspace","IMG::ismap","IMG::name","IMG::usemap","IMG::vspace","IMG::width","INPUT::accept","INPUT::accesskey","INPUT::align","INPUT::alt","INPUT::autocomplete","INPUT::autofocus","INPUT::checked","INPUT::disabled","INPUT::inputmode","INPUT::ismap","INPUT::list","INPUT::max","INPUT::maxlength","INPUT::min","INPUT::multiple","INPUT::name","INPUT::placeholder","INPUT::readonly","INPUT::required","INPUT::size","INPUT::step","INPUT::tabindex","INPUT::type","INPUT::usemap","INPUT::value","INS::datetime","KEYGEN::disabled","KEYGEN::keytype","KEYGEN::name","LABEL::accesskey","LABEL::for","LEGEND::accesskey","LEGEND::align","LI::type","LI::value","LINK::sizes","MAP::name","MENU::compact","MENU::label","MENU::type","METER::high","METER::low","METER::max","METER::min","METER::value","OBJECT::typemustmatch","OL::compact","OL::reversed","OL::start","OL::type","OPTGROUP::disabled","OPTGROUP::label","OPTION::disabled","OPTION::label","OPTION::selected","OPTION::value","OUTPUT::for","OUTPUT::name","P::align","PRE::width","PROGRESS::max","PROGRESS::min","PROGRESS::value","SELECT::autocomplete","SELECT::disabled","SELECT::multiple","SELECT::name","SELECT::required","SELECT::size","SELECT::tabindex","SOURCE::type","TABLE::align","TABLE::bgcolor","TABLE::border","TABLE::cellpadding","TABLE::cellspacing","TABLE::frame","TABLE::rules","TABLE::summary","TABLE::width","TBODY::align","TBODY::char","TBODY::charoff","TBODY::valign","TD::abbr","TD::align","TD::axis","TD::bgcolor","TD::char","TD::charoff","TD::colspan","TD::headers","TD::height","TD::nowrap","TD::rowspan","TD::scope","TD::valign","TD::width","TEXTAREA::accesskey","TEXTAREA::autocomplete","TEXTAREA::cols","TEXTAREA::disabled","TEXTAREA::inputmode","TEXTAREA::name","TEXTAREA::placeholder","TEXTAREA::readonly","TEXTAREA::required","TEXTAREA::rows","TEXTAREA::tabindex","TEXTAREA::wrap","TFOOT::align","TFOOT::char","TFOOT::charoff","TFOOT::valign","TH::abbr","TH::align","TH::axis","TH::bgcolor","TH::char","TH::charoff","TH::colspan","TH::headers","TH::height","TH::nowrap","TH::rowspan","TH::scope","TH::valign","TH::width","THEAD::align","THEAD::char","THEAD::charoff","THEAD::valign","TR::align","TR::bgcolor","TR::char","TR::charoff","TR::valign","TRACK::default","TRACK::kind","TRACK::label","TRACK::srclang","UL::compact","UL::type","VIDEO::controls","VIDEO::height","VIDEO::loop","VIDEO::mediagroup","VIDEO::muted","VIDEO::preload","VIDEO::width"]),[P.h])
C.X=H.c(u(["HEAD","AREA","BASE","BASEFONT","BR","COL","COLGROUP","EMBED","FRAME","FRAMESET","HR","IMAGE","IMG","INPUT","ISINDEX","LINK","META","PARAM","SOURCE","STYLE","TITLE","WBR"]),[P.h])
C.Y=H.c(u([]),[P.h])
C.C=H.c(u([0,0,65498,45055,65535,34815,65534,18431]),[P.B])
C.t=H.c(u(["bind","if","ref","repeat","syntax"]),[P.h])
C.u=H.c(u(["A::href","AREA::href","BLOCKQUOTE::cite","BODY::background","COMMAND::icon","DEL::cite","FORM::action","IMG::src","INPUT::src","INS::cite","Q::cite","VIDEO::poster"]),[P.h])
C.x=new P.iM(!1)})();(function staticFields(){$.aM=0
$.ch=null
$.kH=null
$.kl=!1
$.lD=null
$.ly=null
$.lI=null
$.jP=null
$.jV=null
$.ku=null
$.c5=null
$.d5=null
$.d6=null
$.km=!1
$.Z=C.l
$.bc=null
$.k8=null
$.kO=null
$.kN=null
$.kW=null
$.l0=null
$.cA=null
$.l5=null
$.lf=null
$.lj=null
$.lh=null
$.li=null
$.iO=null
$.lg=null
$.mH="uniform mat4 viewMat;                             \nuniform float fov;                                \nuniform float ratio;                              \n                                                  \nattribute vec3 posAttr;                           \n                                                  \nvarying vec3 cubeTxt;                             \n                                                  \nvoid main()                                       \n{                                                 \n  float t = 1.0 / (tan(fov * 0.5)*3.0);           \n  float x = -t * posAttr.x / ratio;               \n  float y = t * posAttr.y;                        \n  cubeTxt = (viewMat * vec4(x, y, 1.0, 0.0)).xyz; \n  gl_Position = vec4(posAttr, 1.0);               \n}                                                 \n"
$.mG="precision mediump float;                                              \n                                                                      \nuniform samplerCube boxTxt;                                           \nuniform vec3 boxClr;                                                  \n                                                                      \nvarying vec3 cubeTxt;                                                 \n                                                                      \nvoid main()                                                           \n{                                                                     \n   vec3 txtCube = normalize(cubeTxt);                                 \n   gl_FragColor = vec4(boxClr*textureCube(boxTxt, txtCube).xyz, 1.0); \n}                                                                     \n"
$.l_=null})();(function lazyInitializers(){var u=hunkHelpers.lazy
u($,"nH","lL",function(){return H.lC("_$dart_dartClosure")})
u($,"nI","kA",function(){return H.lC("_$dart_js")})
u($,"nM","lM",function(){return H.b6(H.ix({
toString:function(){return"$receiver$"}}))})
u($,"nN","lN",function(){return H.b6(H.ix({$method$:null,
toString:function(){return"$receiver$"}}))})
u($,"nO","lO",function(){return H.b6(H.ix(null))})
u($,"nP","lP",function(){return H.b6(function(){var $argumentsExpr$='$arguments$'
try{null.$method$($argumentsExpr$)}catch(t){return t.message}}())})
u($,"nS","lS",function(){return H.b6(H.ix(void 0))})
u($,"nT","lT",function(){return H.b6(function(){var $argumentsExpr$='$arguments$'
try{(void 0).$method$($argumentsExpr$)}catch(t){return t.message}}())})
u($,"nR","lR",function(){return H.b6(H.ld(null))})
u($,"nQ","lQ",function(){return H.b6(function(){try{null.$method$}catch(t){return t.message}}())})
u($,"nV","lV",function(){return H.b6(H.ld(void 0))})
u($,"nU","lU",function(){return H.b6(function(){try{(void 0).$method$}catch(t){return t.message}}())})
u($,"ob","kB",function(){return P.mL()})
u($,"of","da",function(){return[]})
u($,"oe","m_",function(){return P.mC("^[\\-\\.0-9A-Z_a-z~]*$",!0,!1)})
u($,"oc","lZ",function(){return P.kS(["A","ABBR","ACRONYM","ADDRESS","AREA","ARTICLE","ASIDE","AUDIO","B","BDI","BDO","BIG","BLOCKQUOTE","BR","BUTTON","CANVAS","CAPTION","CENTER","CITE","CODE","COL","COLGROUP","COMMAND","DATA","DATALIST","DD","DEL","DETAILS","DFN","DIR","DIV","DL","DT","EM","FIELDSET","FIGCAPTION","FIGURE","FONT","FOOTER","FORM","H1","H2","H3","H4","H5","H6","HEADER","HGROUP","HR","I","IFRAME","IMG","INPUT","INS","KBD","LABEL","LEGEND","LI","MAP","MARK","MENU","METER","NAV","NOBR","OL","OPTGROUP","OPTION","OUTPUT","P","PRE","PROGRESS","Q","S","SAMP","SECTION","SELECT","SMALL","SOURCE","SPAN","STRIKE","STRONG","SUB","SUMMARY","SUP","TABLE","TBODY","TD","TEXTAREA","TFOOT","TH","THEAD","TIME","TR","TRACK","TT","U","UL","VAR","VIDEO","WBR"],P.h)})
u($,"od","kC",function(){return P.kR(P.h,P.bx)})
u($,"o4","lY",function(){return Z.aB(0)})
u($,"nZ","lW",function(){return Z.aB(511)})
u($,"o6","aK",function(){return Z.aB(1)})
u($,"o5","bo",function(){return Z.aB(2)})
u($,"o0","bn",function(){return Z.aB(4)})
u($,"o7","bp",function(){return Z.aB(8)})
u($,"o8","bq",function(){return Z.aB(16)})
u($,"o1","d8",function(){return Z.aB(32)})
u($,"o2","d9",function(){return Z.aB(64)})
u($,"o3","lX",function(){return Z.aB(96)})
u($,"o9","ce",function(){return Z.aB(128)})
u($,"o_","bm",function(){return Z.aB(256)})
u($,"nG","lK",function(){return new V.fJ(1e-9)})
u($,"nF","R",function(){return $.lK()})})()
var v={mangledGlobalNames:{B:"int",z:"double",a4:"num",h:"String",O:"bool",K:"Null",b:"List"},mangledNames:{},getTypeFromName:getGlobalFromName,metadata:[],types:[{func:1,ret:-1,opt:[D.y]},{func:1,ret:-1,args:[D.y]},{func:1,ret:P.K},{func:1,ret:-1},{func:1,ret:-1,args:[W.ab]},{func:1,ret:P.K,args:[F.a7]},{func:1,ret:P.K,args:[D.y]},{func:1,ret:-1,args:[P.h,,]},{func:1,ret:-1,args:[P.B,[P.d,E.ag]]},{func:1,ret:-1,args:[W.aI]},{func:1,ret:-1,args:[W.o]},{func:1,ret:-1,args:[{func:1,ret:-1}]},{func:1,ret:P.K,args:[,]},{func:1,ret:-1,args:[P.B,[P.d,V.ao]]},{func:1,ret:-1,args:[P.B,[P.d,M.ax]]},{func:1,args:[,]},{func:1,ret:P.O,args:[P.h]},{func:1,ret:-1,args:[P.B,[P.d,U.ad]]},{func:1,ret:P.z},{func:1,ret:P.O,args:[W.D]},{func:1,ret:P.O,args:[W.U,P.h,P.h,W.bG]},{func:1,ret:P.h,args:[P.B]},{func:1,ret:P.O,args:[W.aw]},{func:1,ret:-1,args:[W.aU]},{func:1,ret:P.K,args:[{func:1,ret:-1,args:[D.y]}]},{func:1,ret:P.K,args:[W.o]},{func:1,ret:-1,args:[P.B,[P.d,D.a5]]},{func:1,ret:P.K,args:[,,]},{func:1,ret:-1,args:[W.b8]},{func:1,args:[,P.h]},{func:1,ret:P.O,args:[[P.d,D.a5]]},{func:1,ret:W.U,args:[W.D]},{func:1,ret:-1,args:[W.D,W.D]},{func:1,ret:P.h,args:[P.h]},{func:1,ret:[P.aC,,],args:[,]},{func:1,args:[W.o]},{func:1,ret:V.a3,args:[P.z]},{func:1,ret:P.K,args:[F.aj,P.z,P.z]},{func:1,args:[P.h]},{func:1,ret:-1,args:[P.h,P.h]},{func:1,ret:P.K,args:[{func:1,ret:-1}]},{func:1,ret:P.K,args:[P.b4]},{func:1,ret:P.O,args:[V.bt]},{func:1,ret:P.K,args:[P.a4]},{func:1,ret:P.K,args:[,],opt:[P.aq]}],interceptorsByTag:null,leafTags:null};(function nativeSupport(){!function(){var u=function(a){var o={}
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
hunkHelpers.setOrUpdateInterceptorsByTag({ArrayBuffer:J.a,AnimationEffectReadOnly:J.a,AnimationEffectTiming:J.a,AnimationEffectTimingReadOnly:J.a,AnimationTimeline:J.a,AnimationWorkletGlobalScope:J.a,AuthenticatorAssertionResponse:J.a,AuthenticatorAttestationResponse:J.a,AuthenticatorResponse:J.a,BackgroundFetchFetch:J.a,BackgroundFetchManager:J.a,BackgroundFetchSettledFetch:J.a,BarProp:J.a,BarcodeDetector:J.a,BluetoothRemoteGATTDescriptor:J.a,Body:J.a,BudgetState:J.a,CacheStorage:J.a,CanvasGradient:J.a,CanvasPattern:J.a,Client:J.a,Clients:J.a,CookieStore:J.a,Coordinates:J.a,Credential:J.a,CredentialUserData:J.a,CredentialsContainer:J.a,Crypto:J.a,CryptoKey:J.a,CSS:J.a,CSSVariableReferenceValue:J.a,CustomElementRegistry:J.a,DataTransfer:J.a,DataTransferItem:J.a,DeprecatedStorageInfo:J.a,DeprecatedStorageQuota:J.a,DeprecationReport:J.a,DetectedBarcode:J.a,DetectedFace:J.a,DetectedText:J.a,DeviceAcceleration:J.a,DeviceRotationRate:J.a,DirectoryEntry:J.a,DirectoryReader:J.a,DocumentOrShadowRoot:J.a,DocumentTimeline:J.a,DOMError:J.a,Iterator:J.a,DOMMatrix:J.a,DOMMatrixReadOnly:J.a,DOMParser:J.a,DOMPoint:J.a,DOMPointReadOnly:J.a,DOMQuad:J.a,DOMStringMap:J.a,Entry:J.a,External:J.a,FaceDetector:J.a,FederatedCredential:J.a,FileEntry:J.a,DOMFileSystem:J.a,FontFace:J.a,FontFaceSource:J.a,FormData:J.a,GamepadButton:J.a,GamepadPose:J.a,Geolocation:J.a,Position:J.a,Headers:J.a,HTMLHyperlinkElementUtils:J.a,IdleDeadline:J.a,ImageBitmap:J.a,ImageBitmapRenderingContext:J.a,ImageCapture:J.a,InputDeviceCapabilities:J.a,IntersectionObserver:J.a,IntersectionObserverEntry:J.a,InterventionReport:J.a,KeyframeEffect:J.a,KeyframeEffectReadOnly:J.a,MediaCapabilities:J.a,MediaCapabilitiesInfo:J.a,MediaDeviceInfo:J.a,MediaError:J.a,MediaKeyStatusMap:J.a,MediaKeySystemAccess:J.a,MediaKeys:J.a,MediaKeysPolicy:J.a,MediaMetadata:J.a,MediaSession:J.a,MediaSettingsRange:J.a,MemoryInfo:J.a,MessageChannel:J.a,Metadata:J.a,MutationObserver:J.a,WebKitMutationObserver:J.a,MutationRecord:J.a,NavigationPreloadManager:J.a,Navigator:J.a,NavigatorAutomationInformation:J.a,NavigatorConcurrentHardware:J.a,NavigatorCookies:J.a,NavigatorUserMediaError:J.a,NodeFilter:J.a,NodeIterator:J.a,NonDocumentTypeChildNode:J.a,NonElementParentNode:J.a,NoncedElement:J.a,OffscreenCanvasRenderingContext2D:J.a,OverconstrainedError:J.a,PaintRenderingContext2D:J.a,PaintSize:J.a,PaintWorkletGlobalScope:J.a,PasswordCredential:J.a,Path2D:J.a,PaymentAddress:J.a,PaymentInstruments:J.a,PaymentManager:J.a,PaymentResponse:J.a,PerformanceEntry:J.a,PerformanceLongTaskTiming:J.a,PerformanceMark:J.a,PerformanceMeasure:J.a,PerformanceNavigation:J.a,PerformanceNavigationTiming:J.a,PerformanceObserver:J.a,PerformanceObserverEntryList:J.a,PerformancePaintTiming:J.a,PerformanceResourceTiming:J.a,PerformanceServerTiming:J.a,PerformanceTiming:J.a,Permissions:J.a,PhotoCapabilities:J.a,PositionError:J.a,Presentation:J.a,PresentationReceiver:J.a,PublicKeyCredential:J.a,PushManager:J.a,PushMessageData:J.a,PushSubscription:J.a,PushSubscriptionOptions:J.a,RelatedApplication:J.a,ReportBody:J.a,ReportingObserver:J.a,ResizeObserver:J.a,ResizeObserverEntry:J.a,RTCCertificate:J.a,RTCIceCandidate:J.a,mozRTCIceCandidate:J.a,RTCLegacyStatsReport:J.a,RTCRtpContributingSource:J.a,RTCRtpReceiver:J.a,RTCRtpSender:J.a,RTCSessionDescription:J.a,mozRTCSessionDescription:J.a,RTCStatsResponse:J.a,Screen:J.a,ScrollState:J.a,ScrollTimeline:J.a,Selection:J.a,SharedArrayBuffer:J.a,SpeechRecognitionAlternative:J.a,SpeechSynthesisVoice:J.a,StaticRange:J.a,StorageManager:J.a,StyleMedia:J.a,StylePropertyMap:J.a,StylePropertyMapReadonly:J.a,SyncManager:J.a,TaskAttributionTiming:J.a,TextDetector:J.a,TextMetrics:J.a,TrackDefault:J.a,TreeWalker:J.a,TrustedHTML:J.a,TrustedScriptURL:J.a,TrustedURL:J.a,UnderlyingSourceBase:J.a,URLSearchParams:J.a,VRCoordinateSystem:J.a,VRDisplayCapabilities:J.a,VREyeParameters:J.a,VRFrameData:J.a,VRFrameOfReference:J.a,VRPose:J.a,VRStageBounds:J.a,VRStageBoundsPoint:J.a,VRStageParameters:J.a,ValidityState:J.a,VideoPlaybackQuality:J.a,VideoTrack:J.a,VTTRegion:J.a,WindowClient:J.a,WorkletAnimation:J.a,WorkletGlobalScope:J.a,XPathEvaluator:J.a,XPathExpression:J.a,XPathNSResolver:J.a,XPathResult:J.a,XMLSerializer:J.a,XSLTProcessor:J.a,Bluetooth:J.a,BluetoothCharacteristicProperties:J.a,BluetoothRemoteGATTServer:J.a,BluetoothRemoteGATTService:J.a,BluetoothUUID:J.a,BudgetService:J.a,Cache:J.a,DOMFileSystemSync:J.a,DirectoryEntrySync:J.a,DirectoryReaderSync:J.a,EntrySync:J.a,FileEntrySync:J.a,FileReaderSync:J.a,FileWriterSync:J.a,HTMLAllCollection:J.a,Mojo:J.a,MojoHandle:J.a,MojoWatcher:J.a,NFC:J.a,PagePopupController:J.a,Report:J.a,Request:J.a,Response:J.a,SubtleCrypto:J.a,USBAlternateInterface:J.a,USBConfiguration:J.a,USBDevice:J.a,USBEndpoint:J.a,USBInTransferResult:J.a,USBInterface:J.a,USBIsochronousInTransferPacket:J.a,USBIsochronousInTransferResult:J.a,USBIsochronousOutTransferPacket:J.a,USBIsochronousOutTransferResult:J.a,USBOutTransferResult:J.a,WorkerLocation:J.a,WorkerNavigator:J.a,Worklet:J.a,IDBCursor:J.a,IDBCursorWithValue:J.a,IDBFactory:J.a,IDBIndex:J.a,IDBKeyRange:J.a,IDBObjectStore:J.a,IDBObservation:J.a,IDBObserver:J.a,IDBObserverChanges:J.a,SVGAngle:J.a,SVGAnimatedAngle:J.a,SVGAnimatedBoolean:J.a,SVGAnimatedEnumeration:J.a,SVGAnimatedInteger:J.a,SVGAnimatedLength:J.a,SVGAnimatedLengthList:J.a,SVGAnimatedNumber:J.a,SVGAnimatedNumberList:J.a,SVGAnimatedPreserveAspectRatio:J.a,SVGAnimatedRect:J.a,SVGAnimatedString:J.a,SVGAnimatedTransformList:J.a,SVGMatrix:J.a,SVGPoint:J.a,SVGPreserveAspectRatio:J.a,SVGRect:J.a,SVGUnitTypes:J.a,AudioListener:J.a,AudioParam:J.a,AudioTrack:J.a,AudioWorkletGlobalScope:J.a,AudioWorkletProcessor:J.a,PeriodicWave:J.a,WebGLActiveInfo:J.a,ANGLEInstancedArrays:J.a,ANGLE_instanced_arrays:J.a,WebGLCanvas:J.a,WebGLColorBufferFloat:J.a,WebGLCompressedTextureASTC:J.a,WebGLCompressedTextureATC:J.a,WEBGL_compressed_texture_atc:J.a,WebGLCompressedTextureETC1:J.a,WEBGL_compressed_texture_etc1:J.a,WebGLCompressedTextureETC:J.a,WebGLCompressedTexturePVRTC:J.a,WEBGL_compressed_texture_pvrtc:J.a,WebGLCompressedTextureS3TC:J.a,WEBGL_compressed_texture_s3tc:J.a,WebGLCompressedTextureS3TCsRGB:J.a,WebGLDebugRendererInfo:J.a,WEBGL_debug_renderer_info:J.a,WebGLDebugShaders:J.a,WEBGL_debug_shaders:J.a,WebGLDepthTexture:J.a,WEBGL_depth_texture:J.a,WebGLDrawBuffers:J.a,WEBGL_draw_buffers:J.a,EXTsRGB:J.a,EXT_sRGB:J.a,EXTBlendMinMax:J.a,EXT_blend_minmax:J.a,EXTColorBufferFloat:J.a,EXTColorBufferHalfFloat:J.a,EXTDisjointTimerQuery:J.a,EXTDisjointTimerQueryWebGL2:J.a,EXTFragDepth:J.a,EXT_frag_depth:J.a,EXTShaderTextureLOD:J.a,EXT_shader_texture_lod:J.a,EXTTextureFilterAnisotropic:J.a,EXT_texture_filter_anisotropic:J.a,WebGLGetBufferSubDataAsync:J.a,WebGLLoseContext:J.a,WebGLExtensionLoseContext:J.a,WEBGL_lose_context:J.a,OESElementIndexUint:J.a,OES_element_index_uint:J.a,OESStandardDerivatives:J.a,OES_standard_derivatives:J.a,OESTextureFloat:J.a,OES_texture_float:J.a,OESTextureFloatLinear:J.a,OES_texture_float_linear:J.a,OESTextureHalfFloat:J.a,OES_texture_half_float:J.a,OESTextureHalfFloatLinear:J.a,OES_texture_half_float_linear:J.a,OESVertexArrayObject:J.a,OES_vertex_array_object:J.a,WebGLQuery:J.a,WebGLRenderbuffer:J.a,WebGLRenderingContext:J.a,WebGLSampler:J.a,WebGLShaderPrecisionFormat:J.a,WebGLSync:J.a,WebGLTimerQueryEXT:J.a,WebGLTransformFeedback:J.a,WebGLVertexArrayObject:J.a,WebGLVertexArrayObjectOES:J.a,WebGL:J.a,WebGL2RenderingContextBase:J.a,Database:J.a,SQLError:J.a,SQLResultSet:J.a,SQLTransaction:J.a,DataView:H.cy,ArrayBufferView:H.cy,Float32Array:H.cx,Float64Array:H.cx,Int16Array:H.hv,Int32Array:H.hw,Int8Array:H.hx,Uint16Array:H.hy,Uint32Array:H.hz,Uint8ClampedArray:H.dM,CanvasPixelArray:H.dM,Uint8Array:H.hA,HTMLBRElement:W.w,HTMLButtonElement:W.w,HTMLContentElement:W.w,HTMLDListElement:W.w,HTMLDataElement:W.w,HTMLDataListElement:W.w,HTMLDetailsElement:W.w,HTMLDialogElement:W.w,HTMLEmbedElement:W.w,HTMLFieldSetElement:W.w,HTMLHRElement:W.w,HTMLHeadingElement:W.w,HTMLHtmlElement:W.w,HTMLIFrameElement:W.w,HTMLInputElement:W.w,HTMLLIElement:W.w,HTMLLabelElement:W.w,HTMLLegendElement:W.w,HTMLLinkElement:W.w,HTMLMapElement:W.w,HTMLMenuElement:W.w,HTMLMetaElement:W.w,HTMLMeterElement:W.w,HTMLModElement:W.w,HTMLOListElement:W.w,HTMLObjectElement:W.w,HTMLOptGroupElement:W.w,HTMLOptionElement:W.w,HTMLOutputElement:W.w,HTMLParagraphElement:W.w,HTMLParamElement:W.w,HTMLPictureElement:W.w,HTMLPreElement:W.w,HTMLProgressElement:W.w,HTMLQuoteElement:W.w,HTMLScriptElement:W.w,HTMLShadowElement:W.w,HTMLSlotElement:W.w,HTMLSourceElement:W.w,HTMLSpanElement:W.w,HTMLStyleElement:W.w,HTMLTableCaptionElement:W.w,HTMLTableColElement:W.w,HTMLTextAreaElement:W.w,HTMLTimeElement:W.w,HTMLTitleElement:W.w,HTMLTrackElement:W.w,HTMLUListElement:W.w,HTMLUnknownElement:W.w,HTMLDirectoryElement:W.w,HTMLFontElement:W.w,HTMLFrameElement:W.w,HTMLFrameSetElement:W.w,HTMLMarqueeElement:W.w,HTMLElement:W.w,AccessibleNodeList:W.fh,HTMLAnchorElement:W.db,HTMLAreaElement:W.fi,HTMLBaseElement:W.cf,Blob:W.dd,HTMLBodyElement:W.br,HTMLCanvasElement:W.bP,CanvasRenderingContext2D:W.bQ,CDATASection:W.bs,CharacterData:W.bs,Comment:W.bs,ProcessingInstruction:W.bs,Text:W.bs,CSSNumericValue:W.cm,CSSUnitValue:W.cm,CSSPerspective:W.fu,CSSCharsetRule:W.T,CSSConditionRule:W.T,CSSFontFaceRule:W.T,CSSGroupingRule:W.T,CSSImportRule:W.T,CSSKeyframeRule:W.T,MozCSSKeyframeRule:W.T,WebKitCSSKeyframeRule:W.T,CSSKeyframesRule:W.T,MozCSSKeyframesRule:W.T,WebKitCSSKeyframesRule:W.T,CSSMediaRule:W.T,CSSNamespaceRule:W.T,CSSPageRule:W.T,CSSRule:W.T,CSSStyleRule:W.T,CSSSupportsRule:W.T,CSSViewportRule:W.T,CSSStyleDeclaration:W.cn,MSStyleCSSProperties:W.cn,CSS2Properties:W.cn,CSSImageValue:W.aN,CSSKeywordValue:W.aN,CSSPositionValue:W.aN,CSSResourceValue:W.aN,CSSURLImageValue:W.aN,CSSStyleValue:W.aN,CSSMatrixComponent:W.aO,CSSRotation:W.aO,CSSScale:W.aO,CSSSkew:W.aO,CSSTranslation:W.aO,CSSTransformComponent:W.aO,CSSTransformValue:W.fw,CSSUnparsedValue:W.fx,DataTransferItemList:W.fA,HTMLDivElement:W.az,XMLDocument:W.co,Document:W.co,DOMException:W.fB,DOMImplementation:W.dl,ClientRectList:W.dm,DOMRectList:W.dm,DOMRectReadOnly:W.dn,DOMStringList:W.fC,DOMTokenList:W.fD,Element:W.U,AbortPaymentEvent:W.o,AnimationEvent:W.o,AnimationPlaybackEvent:W.o,ApplicationCacheErrorEvent:W.o,BackgroundFetchClickEvent:W.o,BackgroundFetchEvent:W.o,BackgroundFetchFailEvent:W.o,BackgroundFetchedEvent:W.o,BeforeInstallPromptEvent:W.o,BeforeUnloadEvent:W.o,BlobEvent:W.o,CanMakePaymentEvent:W.o,ClipboardEvent:W.o,CloseEvent:W.o,CustomEvent:W.o,DeviceMotionEvent:W.o,DeviceOrientationEvent:W.o,ErrorEvent:W.o,ExtendableEvent:W.o,ExtendableMessageEvent:W.o,FetchEvent:W.o,FontFaceSetLoadEvent:W.o,ForeignFetchEvent:W.o,GamepadEvent:W.o,HashChangeEvent:W.o,InstallEvent:W.o,MediaEncryptedEvent:W.o,MediaKeyMessageEvent:W.o,MediaQueryListEvent:W.o,MediaStreamEvent:W.o,MediaStreamTrackEvent:W.o,MessageEvent:W.o,MIDIConnectionEvent:W.o,MIDIMessageEvent:W.o,MutationEvent:W.o,NotificationEvent:W.o,PageTransitionEvent:W.o,PaymentRequestEvent:W.o,PaymentRequestUpdateEvent:W.o,PopStateEvent:W.o,PresentationConnectionAvailableEvent:W.o,PresentationConnectionCloseEvent:W.o,ProgressEvent:W.o,PromiseRejectionEvent:W.o,PushEvent:W.o,RTCDataChannelEvent:W.o,RTCDTMFToneChangeEvent:W.o,RTCPeerConnectionIceEvent:W.o,RTCTrackEvent:W.o,SecurityPolicyViolationEvent:W.o,SensorErrorEvent:W.o,SpeechRecognitionError:W.o,SpeechRecognitionEvent:W.o,SpeechSynthesisEvent:W.o,StorageEvent:W.o,SyncEvent:W.o,TrackEvent:W.o,TransitionEvent:W.o,WebKitTransitionEvent:W.o,VRDeviceEvent:W.o,VRDisplayEvent:W.o,VRSessionEvent:W.o,MojoInterfaceRequestEvent:W.o,ResourceProgressEvent:W.o,USBConnectionEvent:W.o,IDBVersionChangeEvent:W.o,AudioProcessingEvent:W.o,OfflineAudioCompletionEvent:W.o,WebGLContextEvent:W.o,Event:W.o,InputEvent:W.o,AbsoluteOrientationSensor:W.e,Accelerometer:W.e,AccessibleNode:W.e,AmbientLightSensor:W.e,Animation:W.e,ApplicationCache:W.e,DOMApplicationCache:W.e,OfflineResourceList:W.e,BackgroundFetchRegistration:W.e,BatteryManager:W.e,BroadcastChannel:W.e,CanvasCaptureMediaStreamTrack:W.e,DedicatedWorkerGlobalScope:W.e,EventSource:W.e,FileReader:W.e,FontFaceSet:W.e,Gyroscope:W.e,XMLHttpRequest:W.e,XMLHttpRequestEventTarget:W.e,XMLHttpRequestUpload:W.e,LinearAccelerationSensor:W.e,Magnetometer:W.e,MediaDevices:W.e,MediaKeySession:W.e,MediaQueryList:W.e,MediaRecorder:W.e,MediaSource:W.e,MediaStream:W.e,MediaStreamTrack:W.e,MessagePort:W.e,MIDIAccess:W.e,MIDIInput:W.e,MIDIOutput:W.e,MIDIPort:W.e,NetworkInformation:W.e,Notification:W.e,OffscreenCanvas:W.e,OrientationSensor:W.e,PaymentRequest:W.e,Performance:W.e,PermissionStatus:W.e,PresentationAvailability:W.e,PresentationConnection:W.e,PresentationConnectionList:W.e,PresentationRequest:W.e,RelativeOrientationSensor:W.e,RemotePlayback:W.e,RTCDataChannel:W.e,DataChannel:W.e,RTCDTMFSender:W.e,RTCPeerConnection:W.e,webkitRTCPeerConnection:W.e,mozRTCPeerConnection:W.e,ScreenOrientation:W.e,Sensor:W.e,ServiceWorker:W.e,ServiceWorkerContainer:W.e,ServiceWorkerGlobalScope:W.e,ServiceWorkerRegistration:W.e,SharedWorker:W.e,SharedWorkerGlobalScope:W.e,SpeechRecognition:W.e,SpeechSynthesis:W.e,SpeechSynthesisUtterance:W.e,VR:W.e,VRDevice:W.e,VRDisplay:W.e,VRSession:W.e,VisualViewport:W.e,WebSocket:W.e,Worker:W.e,WorkerGlobalScope:W.e,WorkerPerformance:W.e,BluetoothDevice:W.e,BluetoothRemoteGATTCharacteristic:W.e,Clipboard:W.e,MojoInterfaceInterceptor:W.e,USB:W.e,IDBDatabase:W.e,IDBOpenDBRequest:W.e,IDBVersionChangeRequest:W.e,IDBRequest:W.e,IDBTransaction:W.e,AnalyserNode:W.e,RealtimeAnalyserNode:W.e,AudioBufferSourceNode:W.e,AudioDestinationNode:W.e,AudioNode:W.e,AudioScheduledSourceNode:W.e,AudioWorkletNode:W.e,BiquadFilterNode:W.e,ChannelMergerNode:W.e,AudioChannelMerger:W.e,ChannelSplitterNode:W.e,AudioChannelSplitter:W.e,ConstantSourceNode:W.e,ConvolverNode:W.e,DelayNode:W.e,DynamicsCompressorNode:W.e,GainNode:W.e,AudioGainNode:W.e,IIRFilterNode:W.e,MediaElementAudioSourceNode:W.e,MediaStreamAudioDestinationNode:W.e,MediaStreamAudioSourceNode:W.e,OscillatorNode:W.e,Oscillator:W.e,PannerNode:W.e,AudioPannerNode:W.e,webkitAudioPannerNode:W.e,ScriptProcessorNode:W.e,JavaScriptAudioNode:W.e,StereoPannerNode:W.e,WaveShaperNode:W.e,EventTarget:W.e,File:W.aQ,FileList:W.fO,FileWriter:W.fP,HTMLFormElement:W.fT,Gamepad:W.aR,HTMLHeadElement:W.dt,History:W.fY,HTMLCollection:W.bU,HTMLFormControlsCollection:W.bU,HTMLOptionsCollection:W.bU,HTMLDocument:W.du,ImageData:W.by,HTMLImageElement:W.cs,KeyboardEvent:W.aU,Location:W.dD,HTMLAudioElement:W.cv,HTMLMediaElement:W.cv,MediaList:W.ho,MIDIInputMap:W.hp,MIDIOutputMap:W.hr,MimeType:W.aX,MimeTypeArray:W.ht,PointerEvent:W.ab,MouseEvent:W.ab,DragEvent:W.ab,DocumentFragment:W.D,ShadowRoot:W.D,DocumentType:W.D,Node:W.D,NodeList:W.cz,RadioNodeList:W.cz,Plugin:W.aZ,PluginArray:W.hK,Range:W.dS,RTCStatsReport:W.hT,HTMLSelectElement:W.hW,SourceBuffer:W.b0,SourceBufferList:W.i5,SpeechGrammar:W.b1,SpeechGrammarList:W.i6,SpeechRecognitionResult:W.b2,Storage:W.i9,CSSStyleSheet:W.aG,StyleSheet:W.aG,HTMLTableCellElement:W.c3,HTMLTableDataCellElement:W.c3,HTMLTableHeaderCellElement:W.c3,HTMLTableElement:W.e0,HTMLTableRowElement:W.e1,HTMLTableSectionElement:W.ih,HTMLTemplateElement:W.cH,TextTrack:W.b3,TextTrackCue:W.aH,VTTCue:W.aH,TextTrackCueList:W.ij,TextTrackList:W.ik,TimeRanges:W.ip,Touch:W.b5,TouchEvent:W.aI,TouchList:W.it,TrackDefaultList:W.iu,CompositionEvent:W.bE,FocusEvent:W.bE,TextEvent:W.bE,UIEvent:W.bE,URL:W.iL,HTMLVideoElement:W.j0,VideoTrackList:W.j1,WheelEvent:W.b8,Window:W.cU,DOMWindow:W.cU,Attr:W.cV,CSSRuleList:W.j9,ClientRect:W.en,DOMRect:W.en,GamepadList:W.jn,NamedNodeMap:W.eF,MozNamedAttrMap:W.eF,SpeechRecognitionResultList:W.jA,StyleSheetList:W.jB,SVGLength:P.bf,SVGLengthList:P.h8,SVGNumber:P.bh,SVGNumberList:P.hF,SVGPointList:P.hM,SVGScriptElement:P.cC,SVGStringList:P.ig,SVGAElement:P.p,SVGAnimateElement:P.p,SVGAnimateMotionElement:P.p,SVGAnimateTransformElement:P.p,SVGAnimationElement:P.p,SVGCircleElement:P.p,SVGClipPathElement:P.p,SVGDefsElement:P.p,SVGDescElement:P.p,SVGDiscardElement:P.p,SVGEllipseElement:P.p,SVGFEBlendElement:P.p,SVGFEColorMatrixElement:P.p,SVGFEComponentTransferElement:P.p,SVGFECompositeElement:P.p,SVGFEConvolveMatrixElement:P.p,SVGFEDiffuseLightingElement:P.p,SVGFEDisplacementMapElement:P.p,SVGFEDistantLightElement:P.p,SVGFEFloodElement:P.p,SVGFEFuncAElement:P.p,SVGFEFuncBElement:P.p,SVGFEFuncGElement:P.p,SVGFEFuncRElement:P.p,SVGFEGaussianBlurElement:P.p,SVGFEImageElement:P.p,SVGFEMergeElement:P.p,SVGFEMergeNodeElement:P.p,SVGFEMorphologyElement:P.p,SVGFEOffsetElement:P.p,SVGFEPointLightElement:P.p,SVGFESpecularLightingElement:P.p,SVGFESpotLightElement:P.p,SVGFETileElement:P.p,SVGFETurbulenceElement:P.p,SVGFilterElement:P.p,SVGForeignObjectElement:P.p,SVGGElement:P.p,SVGGeometryElement:P.p,SVGGraphicsElement:P.p,SVGImageElement:P.p,SVGLineElement:P.p,SVGLinearGradientElement:P.p,SVGMarkerElement:P.p,SVGMaskElement:P.p,SVGMetadataElement:P.p,SVGPathElement:P.p,SVGPatternElement:P.p,SVGPolygonElement:P.p,SVGPolylineElement:P.p,SVGRadialGradientElement:P.p,SVGRectElement:P.p,SVGSetElement:P.p,SVGStopElement:P.p,SVGStyleElement:P.p,SVGSVGElement:P.p,SVGSwitchElement:P.p,SVGSymbolElement:P.p,SVGTSpanElement:P.p,SVGTextContentElement:P.p,SVGTextElement:P.p,SVGTextPathElement:P.p,SVGTextPositioningElement:P.p,SVGTitleElement:P.p,SVGUseElement:P.p,SVGViewElement:P.p,SVGGradientElement:P.p,SVGComponentTransferFunctionElement:P.p,SVGFEDropShadowElement:P.p,SVGMPathElement:P.p,SVGElement:P.p,SVGTransform:P.bk,SVGTransformList:P.iv,AudioBuffer:P.fk,AudioParamMap:P.fl,AudioTrackList:P.fn,AudioContext:P.bN,webkitAudioContext:P.bN,BaseAudioContext:P.bN,OfflineAudioContext:P.hG,WebGLBuffer:P.de,WebGLFramebuffer:P.ds,WebGLProgram:P.dR,WebGL2RenderingContext:P.c1,WebGLShader:P.dV,WebGLTexture:P.e2,WebGLUniformLocation:P.eb,SQLResultSetRowList:P.i7})
hunkHelpers.setOrUpdateLeafTags({ArrayBuffer:true,AnimationEffectReadOnly:true,AnimationEffectTiming:true,AnimationEffectTimingReadOnly:true,AnimationTimeline:true,AnimationWorkletGlobalScope:true,AuthenticatorAssertionResponse:true,AuthenticatorAttestationResponse:true,AuthenticatorResponse:true,BackgroundFetchFetch:true,BackgroundFetchManager:true,BackgroundFetchSettledFetch:true,BarProp:true,BarcodeDetector:true,BluetoothRemoteGATTDescriptor:true,Body:true,BudgetState:true,CacheStorage:true,CanvasGradient:true,CanvasPattern:true,Client:true,Clients:true,CookieStore:true,Coordinates:true,Credential:true,CredentialUserData:true,CredentialsContainer:true,Crypto:true,CryptoKey:true,CSS:true,CSSVariableReferenceValue:true,CustomElementRegistry:true,DataTransfer:true,DataTransferItem:true,DeprecatedStorageInfo:true,DeprecatedStorageQuota:true,DeprecationReport:true,DetectedBarcode:true,DetectedFace:true,DetectedText:true,DeviceAcceleration:true,DeviceRotationRate:true,DirectoryEntry:true,DirectoryReader:true,DocumentOrShadowRoot:true,DocumentTimeline:true,DOMError:true,Iterator:true,DOMMatrix:true,DOMMatrixReadOnly:true,DOMParser:true,DOMPoint:true,DOMPointReadOnly:true,DOMQuad:true,DOMStringMap:true,Entry:true,External:true,FaceDetector:true,FederatedCredential:true,FileEntry:true,DOMFileSystem:true,FontFace:true,FontFaceSource:true,FormData:true,GamepadButton:true,GamepadPose:true,Geolocation:true,Position:true,Headers:true,HTMLHyperlinkElementUtils:true,IdleDeadline:true,ImageBitmap:true,ImageBitmapRenderingContext:true,ImageCapture:true,InputDeviceCapabilities:true,IntersectionObserver:true,IntersectionObserverEntry:true,InterventionReport:true,KeyframeEffect:true,KeyframeEffectReadOnly:true,MediaCapabilities:true,MediaCapabilitiesInfo:true,MediaDeviceInfo:true,MediaError:true,MediaKeyStatusMap:true,MediaKeySystemAccess:true,MediaKeys:true,MediaKeysPolicy:true,MediaMetadata:true,MediaSession:true,MediaSettingsRange:true,MemoryInfo:true,MessageChannel:true,Metadata:true,MutationObserver:true,WebKitMutationObserver:true,MutationRecord:true,NavigationPreloadManager:true,Navigator:true,NavigatorAutomationInformation:true,NavigatorConcurrentHardware:true,NavigatorCookies:true,NavigatorUserMediaError:true,NodeFilter:true,NodeIterator:true,NonDocumentTypeChildNode:true,NonElementParentNode:true,NoncedElement:true,OffscreenCanvasRenderingContext2D:true,OverconstrainedError:true,PaintRenderingContext2D:true,PaintSize:true,PaintWorkletGlobalScope:true,PasswordCredential:true,Path2D:true,PaymentAddress:true,PaymentInstruments:true,PaymentManager:true,PaymentResponse:true,PerformanceEntry:true,PerformanceLongTaskTiming:true,PerformanceMark:true,PerformanceMeasure:true,PerformanceNavigation:true,PerformanceNavigationTiming:true,PerformanceObserver:true,PerformanceObserverEntryList:true,PerformancePaintTiming:true,PerformanceResourceTiming:true,PerformanceServerTiming:true,PerformanceTiming:true,Permissions:true,PhotoCapabilities:true,PositionError:true,Presentation:true,PresentationReceiver:true,PublicKeyCredential:true,PushManager:true,PushMessageData:true,PushSubscription:true,PushSubscriptionOptions:true,RelatedApplication:true,ReportBody:true,ReportingObserver:true,ResizeObserver:true,ResizeObserverEntry:true,RTCCertificate:true,RTCIceCandidate:true,mozRTCIceCandidate:true,RTCLegacyStatsReport:true,RTCRtpContributingSource:true,RTCRtpReceiver:true,RTCRtpSender:true,RTCSessionDescription:true,mozRTCSessionDescription:true,RTCStatsResponse:true,Screen:true,ScrollState:true,ScrollTimeline:true,Selection:true,SharedArrayBuffer:true,SpeechRecognitionAlternative:true,SpeechSynthesisVoice:true,StaticRange:true,StorageManager:true,StyleMedia:true,StylePropertyMap:true,StylePropertyMapReadonly:true,SyncManager:true,TaskAttributionTiming:true,TextDetector:true,TextMetrics:true,TrackDefault:true,TreeWalker:true,TrustedHTML:true,TrustedScriptURL:true,TrustedURL:true,UnderlyingSourceBase:true,URLSearchParams:true,VRCoordinateSystem:true,VRDisplayCapabilities:true,VREyeParameters:true,VRFrameData:true,VRFrameOfReference:true,VRPose:true,VRStageBounds:true,VRStageBoundsPoint:true,VRStageParameters:true,ValidityState:true,VideoPlaybackQuality:true,VideoTrack:true,VTTRegion:true,WindowClient:true,WorkletAnimation:true,WorkletGlobalScope:true,XPathEvaluator:true,XPathExpression:true,XPathNSResolver:true,XPathResult:true,XMLSerializer:true,XSLTProcessor:true,Bluetooth:true,BluetoothCharacteristicProperties:true,BluetoothRemoteGATTServer:true,BluetoothRemoteGATTService:true,BluetoothUUID:true,BudgetService:true,Cache:true,DOMFileSystemSync:true,DirectoryEntrySync:true,DirectoryReaderSync:true,EntrySync:true,FileEntrySync:true,FileReaderSync:true,FileWriterSync:true,HTMLAllCollection:true,Mojo:true,MojoHandle:true,MojoWatcher:true,NFC:true,PagePopupController:true,Report:true,Request:true,Response:true,SubtleCrypto:true,USBAlternateInterface:true,USBConfiguration:true,USBDevice:true,USBEndpoint:true,USBInTransferResult:true,USBInterface:true,USBIsochronousInTransferPacket:true,USBIsochronousInTransferResult:true,USBIsochronousOutTransferPacket:true,USBIsochronousOutTransferResult:true,USBOutTransferResult:true,WorkerLocation:true,WorkerNavigator:true,Worklet:true,IDBCursor:true,IDBCursorWithValue:true,IDBFactory:true,IDBIndex:true,IDBKeyRange:true,IDBObjectStore:true,IDBObservation:true,IDBObserver:true,IDBObserverChanges:true,SVGAngle:true,SVGAnimatedAngle:true,SVGAnimatedBoolean:true,SVGAnimatedEnumeration:true,SVGAnimatedInteger:true,SVGAnimatedLength:true,SVGAnimatedLengthList:true,SVGAnimatedNumber:true,SVGAnimatedNumberList:true,SVGAnimatedPreserveAspectRatio:true,SVGAnimatedRect:true,SVGAnimatedString:true,SVGAnimatedTransformList:true,SVGMatrix:true,SVGPoint:true,SVGPreserveAspectRatio:true,SVGRect:true,SVGUnitTypes:true,AudioListener:true,AudioParam:true,AudioTrack:true,AudioWorkletGlobalScope:true,AudioWorkletProcessor:true,PeriodicWave:true,WebGLActiveInfo:true,ANGLEInstancedArrays:true,ANGLE_instanced_arrays:true,WebGLCanvas:true,WebGLColorBufferFloat:true,WebGLCompressedTextureASTC:true,WebGLCompressedTextureATC:true,WEBGL_compressed_texture_atc:true,WebGLCompressedTextureETC1:true,WEBGL_compressed_texture_etc1:true,WebGLCompressedTextureETC:true,WebGLCompressedTexturePVRTC:true,WEBGL_compressed_texture_pvrtc:true,WebGLCompressedTextureS3TC:true,WEBGL_compressed_texture_s3tc:true,WebGLCompressedTextureS3TCsRGB:true,WebGLDebugRendererInfo:true,WEBGL_debug_renderer_info:true,WebGLDebugShaders:true,WEBGL_debug_shaders:true,WebGLDepthTexture:true,WEBGL_depth_texture:true,WebGLDrawBuffers:true,WEBGL_draw_buffers:true,EXTsRGB:true,EXT_sRGB:true,EXTBlendMinMax:true,EXT_blend_minmax:true,EXTColorBufferFloat:true,EXTColorBufferHalfFloat:true,EXTDisjointTimerQuery:true,EXTDisjointTimerQueryWebGL2:true,EXTFragDepth:true,EXT_frag_depth:true,EXTShaderTextureLOD:true,EXT_shader_texture_lod:true,EXTTextureFilterAnisotropic:true,EXT_texture_filter_anisotropic:true,WebGLGetBufferSubDataAsync:true,WebGLLoseContext:true,WebGLExtensionLoseContext:true,WEBGL_lose_context:true,OESElementIndexUint:true,OES_element_index_uint:true,OESStandardDerivatives:true,OES_standard_derivatives:true,OESTextureFloat:true,OES_texture_float:true,OESTextureFloatLinear:true,OES_texture_float_linear:true,OESTextureHalfFloat:true,OES_texture_half_float:true,OESTextureHalfFloatLinear:true,OES_texture_half_float_linear:true,OESVertexArrayObject:true,OES_vertex_array_object:true,WebGLQuery:true,WebGLRenderbuffer:true,WebGLRenderingContext:true,WebGLSampler:true,WebGLShaderPrecisionFormat:true,WebGLSync:true,WebGLTimerQueryEXT:true,WebGLTransformFeedback:true,WebGLVertexArrayObject:true,WebGLVertexArrayObjectOES:true,WebGL:true,WebGL2RenderingContextBase:true,Database:true,SQLError:true,SQLResultSet:true,SQLTransaction:true,DataView:true,ArrayBufferView:false,Float32Array:true,Float64Array:true,Int16Array:true,Int32Array:true,Int8Array:true,Uint16Array:true,Uint32Array:true,Uint8ClampedArray:true,CanvasPixelArray:true,Uint8Array:false,HTMLBRElement:true,HTMLButtonElement:true,HTMLContentElement:true,HTMLDListElement:true,HTMLDataElement:true,HTMLDataListElement:true,HTMLDetailsElement:true,HTMLDialogElement:true,HTMLEmbedElement:true,HTMLFieldSetElement:true,HTMLHRElement:true,HTMLHeadingElement:true,HTMLHtmlElement:true,HTMLIFrameElement:true,HTMLInputElement:true,HTMLLIElement:true,HTMLLabelElement:true,HTMLLegendElement:true,HTMLLinkElement:true,HTMLMapElement:true,HTMLMenuElement:true,HTMLMetaElement:true,HTMLMeterElement:true,HTMLModElement:true,HTMLOListElement:true,HTMLObjectElement:true,HTMLOptGroupElement:true,HTMLOptionElement:true,HTMLOutputElement:true,HTMLParagraphElement:true,HTMLParamElement:true,HTMLPictureElement:true,HTMLPreElement:true,HTMLProgressElement:true,HTMLQuoteElement:true,HTMLScriptElement:true,HTMLShadowElement:true,HTMLSlotElement:true,HTMLSourceElement:true,HTMLSpanElement:true,HTMLStyleElement:true,HTMLTableCaptionElement:true,HTMLTableColElement:true,HTMLTextAreaElement:true,HTMLTimeElement:true,HTMLTitleElement:true,HTMLTrackElement:true,HTMLUListElement:true,HTMLUnknownElement:true,HTMLDirectoryElement:true,HTMLFontElement:true,HTMLFrameElement:true,HTMLFrameSetElement:true,HTMLMarqueeElement:true,HTMLElement:false,AccessibleNodeList:true,HTMLAnchorElement:true,HTMLAreaElement:true,HTMLBaseElement:true,Blob:false,HTMLBodyElement:true,HTMLCanvasElement:true,CanvasRenderingContext2D:true,CDATASection:true,CharacterData:true,Comment:true,ProcessingInstruction:true,Text:true,CSSNumericValue:true,CSSUnitValue:true,CSSPerspective:true,CSSCharsetRule:true,CSSConditionRule:true,CSSFontFaceRule:true,CSSGroupingRule:true,CSSImportRule:true,CSSKeyframeRule:true,MozCSSKeyframeRule:true,WebKitCSSKeyframeRule:true,CSSKeyframesRule:true,MozCSSKeyframesRule:true,WebKitCSSKeyframesRule:true,CSSMediaRule:true,CSSNamespaceRule:true,CSSPageRule:true,CSSRule:true,CSSStyleRule:true,CSSSupportsRule:true,CSSViewportRule:true,CSSStyleDeclaration:true,MSStyleCSSProperties:true,CSS2Properties:true,CSSImageValue:true,CSSKeywordValue:true,CSSPositionValue:true,CSSResourceValue:true,CSSURLImageValue:true,CSSStyleValue:false,CSSMatrixComponent:true,CSSRotation:true,CSSScale:true,CSSSkew:true,CSSTranslation:true,CSSTransformComponent:false,CSSTransformValue:true,CSSUnparsedValue:true,DataTransferItemList:true,HTMLDivElement:true,XMLDocument:true,Document:false,DOMException:true,DOMImplementation:true,ClientRectList:true,DOMRectList:true,DOMRectReadOnly:false,DOMStringList:true,DOMTokenList:true,Element:false,AbortPaymentEvent:true,AnimationEvent:true,AnimationPlaybackEvent:true,ApplicationCacheErrorEvent:true,BackgroundFetchClickEvent:true,BackgroundFetchEvent:true,BackgroundFetchFailEvent:true,BackgroundFetchedEvent:true,BeforeInstallPromptEvent:true,BeforeUnloadEvent:true,BlobEvent:true,CanMakePaymentEvent:true,ClipboardEvent:true,CloseEvent:true,CustomEvent:true,DeviceMotionEvent:true,DeviceOrientationEvent:true,ErrorEvent:true,ExtendableEvent:true,ExtendableMessageEvent:true,FetchEvent:true,FontFaceSetLoadEvent:true,ForeignFetchEvent:true,GamepadEvent:true,HashChangeEvent:true,InstallEvent:true,MediaEncryptedEvent:true,MediaKeyMessageEvent:true,MediaQueryListEvent:true,MediaStreamEvent:true,MediaStreamTrackEvent:true,MessageEvent:true,MIDIConnectionEvent:true,MIDIMessageEvent:true,MutationEvent:true,NotificationEvent:true,PageTransitionEvent:true,PaymentRequestEvent:true,PaymentRequestUpdateEvent:true,PopStateEvent:true,PresentationConnectionAvailableEvent:true,PresentationConnectionCloseEvent:true,ProgressEvent:true,PromiseRejectionEvent:true,PushEvent:true,RTCDataChannelEvent:true,RTCDTMFToneChangeEvent:true,RTCPeerConnectionIceEvent:true,RTCTrackEvent:true,SecurityPolicyViolationEvent:true,SensorErrorEvent:true,SpeechRecognitionError:true,SpeechRecognitionEvent:true,SpeechSynthesisEvent:true,StorageEvent:true,SyncEvent:true,TrackEvent:true,TransitionEvent:true,WebKitTransitionEvent:true,VRDeviceEvent:true,VRDisplayEvent:true,VRSessionEvent:true,MojoInterfaceRequestEvent:true,ResourceProgressEvent:true,USBConnectionEvent:true,IDBVersionChangeEvent:true,AudioProcessingEvent:true,OfflineAudioCompletionEvent:true,WebGLContextEvent:true,Event:false,InputEvent:false,AbsoluteOrientationSensor:true,Accelerometer:true,AccessibleNode:true,AmbientLightSensor:true,Animation:true,ApplicationCache:true,DOMApplicationCache:true,OfflineResourceList:true,BackgroundFetchRegistration:true,BatteryManager:true,BroadcastChannel:true,CanvasCaptureMediaStreamTrack:true,DedicatedWorkerGlobalScope:true,EventSource:true,FileReader:true,FontFaceSet:true,Gyroscope:true,XMLHttpRequest:true,XMLHttpRequestEventTarget:true,XMLHttpRequestUpload:true,LinearAccelerationSensor:true,Magnetometer:true,MediaDevices:true,MediaKeySession:true,MediaQueryList:true,MediaRecorder:true,MediaSource:true,MediaStream:true,MediaStreamTrack:true,MessagePort:true,MIDIAccess:true,MIDIInput:true,MIDIOutput:true,MIDIPort:true,NetworkInformation:true,Notification:true,OffscreenCanvas:true,OrientationSensor:true,PaymentRequest:true,Performance:true,PermissionStatus:true,PresentationAvailability:true,PresentationConnection:true,PresentationConnectionList:true,PresentationRequest:true,RelativeOrientationSensor:true,RemotePlayback:true,RTCDataChannel:true,DataChannel:true,RTCDTMFSender:true,RTCPeerConnection:true,webkitRTCPeerConnection:true,mozRTCPeerConnection:true,ScreenOrientation:true,Sensor:true,ServiceWorker:true,ServiceWorkerContainer:true,ServiceWorkerGlobalScope:true,ServiceWorkerRegistration:true,SharedWorker:true,SharedWorkerGlobalScope:true,SpeechRecognition:true,SpeechSynthesis:true,SpeechSynthesisUtterance:true,VR:true,VRDevice:true,VRDisplay:true,VRSession:true,VisualViewport:true,WebSocket:true,Worker:true,WorkerGlobalScope:true,WorkerPerformance:true,BluetoothDevice:true,BluetoothRemoteGATTCharacteristic:true,Clipboard:true,MojoInterfaceInterceptor:true,USB:true,IDBDatabase:true,IDBOpenDBRequest:true,IDBVersionChangeRequest:true,IDBRequest:true,IDBTransaction:true,AnalyserNode:true,RealtimeAnalyserNode:true,AudioBufferSourceNode:true,AudioDestinationNode:true,AudioNode:true,AudioScheduledSourceNode:true,AudioWorkletNode:true,BiquadFilterNode:true,ChannelMergerNode:true,AudioChannelMerger:true,ChannelSplitterNode:true,AudioChannelSplitter:true,ConstantSourceNode:true,ConvolverNode:true,DelayNode:true,DynamicsCompressorNode:true,GainNode:true,AudioGainNode:true,IIRFilterNode:true,MediaElementAudioSourceNode:true,MediaStreamAudioDestinationNode:true,MediaStreamAudioSourceNode:true,OscillatorNode:true,Oscillator:true,PannerNode:true,AudioPannerNode:true,webkitAudioPannerNode:true,ScriptProcessorNode:true,JavaScriptAudioNode:true,StereoPannerNode:true,WaveShaperNode:true,EventTarget:false,File:true,FileList:true,FileWriter:true,HTMLFormElement:true,Gamepad:true,HTMLHeadElement:true,History:true,HTMLCollection:true,HTMLFormControlsCollection:true,HTMLOptionsCollection:true,HTMLDocument:true,ImageData:true,HTMLImageElement:true,KeyboardEvent:true,Location:true,HTMLAudioElement:true,HTMLMediaElement:false,MediaList:true,MIDIInputMap:true,MIDIOutputMap:true,MimeType:true,MimeTypeArray:true,PointerEvent:true,MouseEvent:false,DragEvent:false,DocumentFragment:true,ShadowRoot:true,DocumentType:true,Node:false,NodeList:true,RadioNodeList:true,Plugin:true,PluginArray:true,Range:true,RTCStatsReport:true,HTMLSelectElement:true,SourceBuffer:true,SourceBufferList:true,SpeechGrammar:true,SpeechGrammarList:true,SpeechRecognitionResult:true,Storage:true,CSSStyleSheet:true,StyleSheet:true,HTMLTableCellElement:true,HTMLTableDataCellElement:true,HTMLTableHeaderCellElement:true,HTMLTableElement:true,HTMLTableRowElement:true,HTMLTableSectionElement:true,HTMLTemplateElement:true,TextTrack:true,TextTrackCue:true,VTTCue:true,TextTrackCueList:true,TextTrackList:true,TimeRanges:true,Touch:true,TouchEvent:true,TouchList:true,TrackDefaultList:true,CompositionEvent:true,FocusEvent:true,TextEvent:true,UIEvent:false,URL:true,HTMLVideoElement:true,VideoTrackList:true,WheelEvent:true,Window:true,DOMWindow:true,Attr:true,CSSRuleList:true,ClientRect:true,DOMRect:true,GamepadList:true,NamedNodeMap:true,MozNamedAttrMap:true,SpeechRecognitionResultList:true,StyleSheetList:true,SVGLength:true,SVGLengthList:true,SVGNumber:true,SVGNumberList:true,SVGPointList:true,SVGScriptElement:true,SVGStringList:true,SVGAElement:true,SVGAnimateElement:true,SVGAnimateMotionElement:true,SVGAnimateTransformElement:true,SVGAnimationElement:true,SVGCircleElement:true,SVGClipPathElement:true,SVGDefsElement:true,SVGDescElement:true,SVGDiscardElement:true,SVGEllipseElement:true,SVGFEBlendElement:true,SVGFEColorMatrixElement:true,SVGFEComponentTransferElement:true,SVGFECompositeElement:true,SVGFEConvolveMatrixElement:true,SVGFEDiffuseLightingElement:true,SVGFEDisplacementMapElement:true,SVGFEDistantLightElement:true,SVGFEFloodElement:true,SVGFEFuncAElement:true,SVGFEFuncBElement:true,SVGFEFuncGElement:true,SVGFEFuncRElement:true,SVGFEGaussianBlurElement:true,SVGFEImageElement:true,SVGFEMergeElement:true,SVGFEMergeNodeElement:true,SVGFEMorphologyElement:true,SVGFEOffsetElement:true,SVGFEPointLightElement:true,SVGFESpecularLightingElement:true,SVGFESpotLightElement:true,SVGFETileElement:true,SVGFETurbulenceElement:true,SVGFilterElement:true,SVGForeignObjectElement:true,SVGGElement:true,SVGGeometryElement:true,SVGGraphicsElement:true,SVGImageElement:true,SVGLineElement:true,SVGLinearGradientElement:true,SVGMarkerElement:true,SVGMaskElement:true,SVGMetadataElement:true,SVGPathElement:true,SVGPatternElement:true,SVGPolygonElement:true,SVGPolylineElement:true,SVGRadialGradientElement:true,SVGRectElement:true,SVGSetElement:true,SVGStopElement:true,SVGStyleElement:true,SVGSVGElement:true,SVGSwitchElement:true,SVGSymbolElement:true,SVGTSpanElement:true,SVGTextContentElement:true,SVGTextElement:true,SVGTextPathElement:true,SVGTextPositioningElement:true,SVGTitleElement:true,SVGUseElement:true,SVGViewElement:true,SVGGradientElement:true,SVGComponentTransferFunctionElement:true,SVGFEDropShadowElement:true,SVGMPathElement:true,SVGElement:false,SVGTransform:true,SVGTransformList:true,AudioBuffer:true,AudioParamMap:true,AudioTrackList:true,AudioContext:true,webkitAudioContext:true,BaseAudioContext:false,OfflineAudioContext:true,WebGLBuffer:true,WebGLFramebuffer:true,WebGLProgram:true,WebGL2RenderingContext:true,WebGLShader:true,WebGLTexture:true,WebGLUniformLocation:true,SQLResultSetRowList:true})
H.dK.$nativeSuperclassTag="ArrayBufferView"
H.cX.$nativeSuperclassTag="ArrayBufferView"
H.cY.$nativeSuperclassTag="ArrayBufferView"
H.cx.$nativeSuperclassTag="ArrayBufferView"
H.cZ.$nativeSuperclassTag="ArrayBufferView"
H.d_.$nativeSuperclassTag="ArrayBufferView"
H.dL.$nativeSuperclassTag="ArrayBufferView"
W.d0.$nativeSuperclassTag="EventTarget"
W.d1.$nativeSuperclassTag="EventTarget"
W.d2.$nativeSuperclassTag="EventTarget"
W.d3.$nativeSuperclassTag="EventTarget"})()
convertAllToFastObject(w)
convertToFastObject($);(function(a){if(typeof document==="undefined"){a(null)
return}if(typeof document.currentScript!='undefined'){a(document.currentScript)
return}var u=document.scripts
function onLoad(b){for(var s=0;s<u.length;++s)u[s].removeEventListener("load",onLoad,false)
a(b.target)}for(var t=0;t<u.length;++t)u[t].addEventListener("load",onLoad,false)})(function(a){v.currentScript=a
if(typeof dartMainRunner==="function")dartMainRunner(B.lF,[])
else B.lF([])})})()
//# sourceMappingURL=test.dart.js.map
