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
a[c]=function(){a[c]=function(){H.n9(b)}
var t
var s=d
try{if(a[b]===u){t=a[b]=s
t=a[b]=d()}else t=a[b]}finally{if(t===s)a[b]=null
a[c]=function(){return this[b]}}return t}}function makeConstList(a){a.immutable$list=Array
a.fixed$length=Array
return a}function convertToFastObject(a){function t(){}t.prototype=a
new t()
return a}function convertAllToFastObject(a){for(var u=0;u<a.length;++u)convertToFastObject(a[u])}var y=0
function tearOffGetter(a,b,c,d,e){return e?new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+d+y+++"(receiver) {"+"if (c === null) c = "+"H.ka"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, true, name);"+"return new c(this, funcs[0], receiver, name);"+"}")(a,b,c,d,H,null):new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+d+y+++"() {"+"if (c === null) c = "+"H.ka"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, false, name);"+"return new c(this, funcs[0], null, name);"+"}")(a,b,c,d,H,null)}function tearOff(a,b,c,d,e,f){var u=null
return d?function(){if(u===null)u=H.ka(this,a,b,c,true,false,e).prototype
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
if(w[u][a])return w[u][a]}}var C={},H={jV:function jV(a){this.a=a},
fN:function(){return new P.bW("No element")},
m_:function(){return new P.bW("Too many elements")},
lZ:function(){return new P.bW("Too few elements")},
q:function q(a){this.a=a},
fq:function fq(){},
bQ:function bQ(){},
cm:function cm(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=null
_.$ti=d},
h1:function h1(a,b,c){this.a=a
this.b=b
this.$ti=c},
h2:function h2(a,b,c){var _=this
_.a=null
_.b=a
_.c=b
_.$ti=c},
h3:function h3(a,b,c){this.a=a
this.b=b
this.$ti=c},
cJ:function cJ(a,b,c){this.a=a
this.b=b
this.$ti=c},
iN:function iN(a,b,c){this.a=a
this.b=b
this.$ti=c},
bM:function bM(){},
e_:function e_(){},
dZ:function dZ(){},
c7:function(a){var u,t
u=H.H(v.mangledGlobalNames[a])
if(typeof u==="string")return u
t="minified:"+a
return t},
mR:function(a){return v.types[H.ad(a)]},
mY:function(a,b){var u
if(b!=null){u=b.x
if(u!=null)return u}return!!J.a0(a).$iF},
l:function(a){var u
if(typeof a==="string")return a
if(typeof a==="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
u=J.aI(a)
if(typeof u!=="string")throw H.h(H.bh(a))
return u},
me:function(a){var u,t,s
u=a.$reflectionInfo
if(u==null)return
u=J.fO(u)
t=u[0]
s=u[1]
return new H.hA(a,u,(t&2)===2,t>>2,s>>1,(s&1)===1,u[2])},
ct:function(a){var u=a.$identityHash
if(u==null){u=Math.random()*0x3fffffff|0
a.$identityHash=u}return u},
bT:function(a){return H.m5(a)+H.k7(H.bE(a),0,null)},
m5:function(a){var u,t,s,r,q,p,o,n,m
u=J.a0(a)
t=u.constructor
if(typeof t=="function"){s=t.name
r=typeof s==="string"?s:null}else r=null
q=r==null
if(q||u===C.M||!!u.$ibA){p=C.A(a)
if(q)r=p
if(p==="Object"){o=a.constructor
if(typeof o=="function"){n=String(o).match(/^\s*function\s*([\w$]*)\s*\(/)
m=n==null?null:n[1]
if(typeof m==="string"&&/^\w+$/.test(m))r=m}}return r}r=r
return H.c7(r.length>1&&C.j.aF(r,0)===36?C.j.b6(r,1):r)},
kI:function(a){var u,t,s,r,q
u=a.length
if(u<=500)return String.fromCharCode.apply(null,a)
for(t="",s=0;s<u;s=r){r=s+500
q=r<u?r:u
t+=String.fromCharCode.apply(null,a.slice(s,q))}return t},
md:function(a){var u,t,s,r
u=H.c([],[P.B])
for(t=a.length,s=0;s<a.length;a.length===t||(0,H.E)(a),++s){r=a[s]
if(typeof r!=="number"||Math.floor(r)!==r)throw H.h(H.bh(r))
if(r<=65535)C.a.h(u,r)
else if(r<=1114111){C.a.h(u,55296+(C.h.bb(r-65536,10)&1023))
C.a.h(u,56320+(r&1023))}else throw H.h(H.bh(r))}return H.kI(u)},
kJ:function(a){var u,t,s
for(u=a.length,t=0;t<u;++t){s=a[t]
if(typeof s!=="number"||Math.floor(s)!==s)throw H.h(H.bh(s))
if(s<0)throw H.h(H.bh(s))
if(s>65535)return H.md(a)}return H.kI(a)},
jX:function(a){var u
if(a<=65535)return String.fromCharCode(a)
if(a<=1114111){u=a-65536
return String.fromCharCode((55296|C.h.bb(u,10))>>>0,56320|u&1023)}throw H.h(P.ax(a,0,1114111,null,null))},
bS:function(a){if(a.date===void 0)a.date=new Date(a.a)
return a.date},
mc:function(a){var u=H.bS(a).getFullYear()+0
return u},
ma:function(a){var u=H.bS(a).getMonth()+1
return u},
m6:function(a){var u=H.bS(a).getDate()+0
return u},
m7:function(a){var u=H.bS(a).getHours()+0
return u},
m9:function(a){var u=H.bS(a).getMinutes()+0
return u},
mb:function(a){var u=H.bS(a).getSeconds()+0
return u},
m8:function(a){var u=H.bS(a).getMilliseconds()+0
return u},
G:function(a){throw H.h(H.bh(a))},
j:function(a,b){if(a==null)J.bH(a)
throw H.h(H.c2(a,b))},
c2:function(a,b){var u,t
if(typeof b!=="number"||Math.floor(b)!==b)return new P.aJ(!0,b,"index",null)
u=H.ad(J.bH(a))
if(!(b<0)){if(typeof u!=="number")return H.G(u)
t=b>=u}else t=!0
if(t)return P.V(b,a,"index",null,u)
return P.dH(b,"index",null)},
mL:function(a,b,c){if(a>c)return new P.bU(0,c,!0,a,"start","Invalid value")
if(b!=null)if(b<a||b>c)return new P.bU(a,c,!0,b,"end","Invalid value")
return new P.aJ(!0,b,"end",null)},
bh:function(a){return new P.aJ(!0,a,null,null)},
h:function(a){var u
if(a==null)a=new P.dC()
u=new Error()
u.dartException=a
if("defineProperty" in Object){Object.defineProperty(u,"message",{get:H.lm})
u.name=""}else u.toString=H.lm
return u},
lm:function(){return J.aI(this.dartException)},
r:function(a){throw H.h(a)},
E:function(a){throw H.h(P.bs(a))},
b2:function(a){var u,t,s,r,q,p
a=a.replace(String({}),'$receiver$').replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
u=a.match(/\\\$[a-zA-Z]+\\\$/g)
if(u==null)u=H.c([],[P.f])
t=u.indexOf("\\$arguments\\$")
s=u.indexOf("\\$argumentsExpr\\$")
r=u.indexOf("\\$expr\\$")
q=u.indexOf("\\$method\\$")
p=u.indexOf("\\$receiver\\$")
return new H.ig(a.replace(new RegExp('\\\\\\$arguments\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$argumentsExpr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$expr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$method\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$receiver\\\\\\$','g'),'((?:x|[^x])*)'),t,s,r,q,p)},
ih:function(a){return function($expr$){var $argumentsExpr$='$arguments$'
try{$expr$.$method$($argumentsExpr$)}catch(u){return u.message}}(a)},
kS:function(a){return function($expr$){try{$expr$.$method$}catch(u){return u.message}}(a)},
kD:function(a,b){return new H.hq(a,b==null?null:b.method)},
jW:function(a,b){var u,t
u=b==null
t=u?null:b.method
return new H.fS(a,t,u?null:b.receiver)},
av:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g
u=new H.jL(a)
if(a==null)return
if(typeof a!=="object")return a
if("dartException" in a)return u.$1(a.dartException)
else if(!("message" in a))return a
t=a.message
if("number" in a&&typeof a.number=="number"){s=a.number
r=s&65535
if((C.h.bb(s,16)&8191)===10)switch(r){case 438:return u.$1(H.jW(H.l(t)+" (Error "+r+")",null))
case 445:case 5007:return u.$1(H.kD(H.l(t)+" (Error "+r+")",null))}}if(a instanceof TypeError){q=$.lp()
p=$.lq()
o=$.lr()
n=$.ls()
m=$.lv()
l=$.lw()
k=$.lu()
$.lt()
j=$.ly()
i=$.lx()
h=q.a9(t)
if(h!=null)return u.$1(H.jW(H.H(t),h))
else{h=p.a9(t)
if(h!=null){h.method="call"
return u.$1(H.jW(H.H(t),h))}else{h=o.a9(t)
if(h==null){h=n.a9(t)
if(h==null){h=m.a9(t)
if(h==null){h=l.a9(t)
if(h==null){h=k.a9(t)
if(h==null){h=n.a9(t)
if(h==null){h=j.a9(t)
if(h==null){h=i.a9(t)
g=h!=null}else g=!0}else g=!0}else g=!0}else g=!0}else g=!0}else g=!0}else g=!0
if(g)return u.$1(H.kD(H.H(t),h))}}return u.$1(new H.iu(typeof t==="string"?t:""))}if(a instanceof RangeError){if(typeof t==="string"&&t.indexOf("call stack")!==-1)return new P.dM()
t=function(b){try{return String(b)}catch(f){}return null}(a)
return u.$1(new P.aJ(!1,null,null,typeof t==="string"?t.replace(/^RangeError:\s*/,""):t))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof t==="string"&&t==="too much recursion")return new P.dM()
return a},
c5:function(a){var u
if(a==null)return new H.eD(a)
u=a.$cachedTrace
if(u!=null)return u
return a.$cachedTrace=new H.eD(a)},
mN:function(a,b){var u,t,s,r
u=a.length
for(t=0;t<u;t=r){s=t+1
r=s+1
b.Y(0,a[t],a[s])}return b},
mX:function(a,b,c,d,e,f){H.k(a,"$ibv")
switch(H.ad(b)){case 0:return a.$0()
case 1:return a.$1(c)
case 2:return a.$2(c,d)
case 3:return a.$3(c,d,e)
case 4:return a.$4(c,d,e,f)}throw H.h(P.t("Unsupported number of arguments for wrapped closure"))},
c1:function(a,b){var u
H.ad(b)
if(a==null)return
u=a.$identity
if(!!u)return u
u=function(c,d,e){return function(f,g,h,i){return e(c,d,f,g,h,i)}}(a,b,H.mX)
a.$identity=u
return u},
lR:function(a,b,c,d,e,f,g){var u,t,s,r,q,p,o,n,m,l,k,j,i
u=b[0]
t=u.$callName
if(!!J.a0(d).$ib){u.$reflectionInfo=d
s=H.me(u).r}else s=d
r=e?Object.create(new H.hV().constructor.prototype):Object.create(new H.ca(null,null,null,null).constructor.prototype)
r.$initialize=r.constructor
if(e)q=function static_tear_off(){this.$initialize()}
else{p=$.aK
if(typeof p!=="number")return p.p()
$.aK=p+1
p=new Function("a,b,c,d"+p,"this.$initialize(a,b,c,d"+p+")")
q=p}r.constructor=q
q.prototype=r
if(!e){o=H.kr(a,u,f)
o.$reflectionInfo=d}else{r.$static_name=g
o=u}if(typeof s=="number")n=function(h,a0){return function(){return h(a0)}}(H.mR,s)
else if(typeof s=="function")if(e)n=s
else{m=f?H.kp:H.jP
n=function(h,a0){return function(){return h.apply({$receiver:a0(this)},arguments)}}(s,m)}else throw H.h("Error in reflectionInfo.")
r.$S=n
r[t]=o
for(l=o,k=1;k<b.length;++k){j=b[k]
i=j.$callName
if(i!=null){j=e?j:H.kr(a,j,f)
r[i]=j}if(k===c){j.$reflectionInfo=d
l=j}}r.$C=l
r.$R=u.$R
r.$D=u.$D
return q},
lO:function(a,b,c,d){var u=H.jP
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,u)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,u)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,u)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,u)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,u)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,u)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,u)}},
kr:function(a,b,c){var u,t,s,r,q,p,o
if(c)return H.lQ(a,b)
u=b.$stubName
t=b.length
s=a[u]
r=b==null?s==null:b===s
q=!r||t>=27
if(q)return H.lO(t,!r,u,b)
if(t===0){r=$.aK
if(typeof r!=="number")return r.p()
$.aK=r+1
p="self"+r
r="return function(){var "+p+" = this."
q=$.cb
if(q==null){q=H.f9("self")
$.cb=q}return new Function(r+H.l(q)+";return "+p+"."+H.l(u)+"();}")()}o="abcdefghijklmnopqrstuvwxyz".split("").splice(0,t).join(",")
r=$.aK
if(typeof r!=="number")return r.p()
$.aK=r+1
o+=r
r="return function("+o+"){return this."
q=$.cb
if(q==null){q=H.f9("self")
$.cb=q}return new Function(r+H.l(q)+"."+H.l(u)+"("+o+");}")()},
lP:function(a,b,c,d){var u,t
u=H.jP
t=H.kp
switch(b?-1:a){case 0:throw H.h(H.mh("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,u,t)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,u,t)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,u,t)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,u,t)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,u,t)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,u,t)
default:return function(e,f,g,h){return function(){h=[g(this)]
Array.prototype.push.apply(h,arguments)
return e.apply(f(this),h)}}(d,u,t)}},
lQ:function(a,b){var u,t,s,r,q,p,o,n
u=$.cb
if(u==null){u=H.f9("self")
$.cb=u}t=$.ko
if(t==null){t=H.f9("receiver")
$.ko=t}s=b.$stubName
r=b.length
q=a[s]
p=b==null?q==null:b===q
o=!p||r>=28
if(o)return H.lP(r,!p,s,b)
if(r===1){u="return function(){return this."+H.l(u)+"."+H.l(s)+"(this."+H.l(t)+");"
t=$.aK
if(typeof t!=="number")return t.p()
$.aK=t+1
return new Function(u+t+"}")()}n="abcdefghijklmnopqrstuvwxyz".split("").splice(0,r-1).join(",")
u="return function("+n+"){return this."+H.l(u)+"."+H.l(s)+"(this."+H.l(t)+", "+n+");"
t=$.aK
if(typeof t!=="number")return t.p()
$.aK=t+1
return new Function(u+t+"}")()},
ka:function(a,b,c,d,e,f,g){return H.lR(a,b,H.ad(c),d,!!e,!!f,g)},
jP:function(a){return a.a},
kp:function(a){return a.c},
f9:function(a){var u,t,s,r,q
u=new H.ca("self","target","receiver","name")
t=J.fO(Object.getOwnPropertyNames(u))
for(s=t.length,r=0;r<s;++r){q=t[r]
if(u[q]===a)return q}},
H:function(a){if(a==null)return a
if(typeof a==="string")return a
throw H.h(H.aG(a,"String"))},
nR:function(a){if(a==null)return a
if(typeof a==="number")return a
throw H.h(H.aG(a,"double"))},
n2:function(a){if(a==null)return a
if(typeof a==="number")return a
throw H.h(H.aG(a,"num"))},
k8:function(a){if(a==null)return a
if(typeof a==="boolean")return a
throw H.h(H.aG(a,"bool"))},
ad:function(a){if(a==null)return a
if(typeof a==="number"&&Math.floor(a)===a)return a
throw H.h(H.aG(a,"int"))},
lk:function(a,b){throw H.h(H.aG(a,H.c7(H.H(b).substring(2))))},
n4:function(a,b){throw H.h(H.lN(a,H.c7(H.H(b).substring(2))))},
k:function(a,b){if(a==null)return a
if((typeof a==="object"||typeof a==="function")&&J.a0(a)[b])return a
H.lk(a,b)},
i:function(a,b){var u
if(a!=null)u=(typeof a==="object"||typeof a==="function")&&J.a0(a)[b]
else u=!0
if(u)return a
H.n4(a,b)},
ke:function(a){if(a==null)return a
if(!!J.a0(a).$ib)return a
throw H.h(H.aG(a,"List<dynamic>"))},
mZ:function(a,b){var u
if(a==null)return a
u=J.a0(a)
if(!!u.$ib)return a
if(u[b])return a
H.lk(a,b)},
le:function(a){var u
if("$S" in a){u=a.$S
if(typeof u=="number")return v.types[H.ad(u)]
else return a.$S()}return},
eZ:function(a,b){var u
if(a==null)return!1
if(typeof a=="function")return!0
u=H.le(J.a0(a))
if(u==null)return!1
return H.l5(u,null,b,null)},
n:function(a,b){var u,t
if(a==null)return a
if($.k4)return a
$.k4=!0
try{if(H.eZ(a,b))return a
u=H.jI(b)
t=H.aG(a,u)
throw H.h(t)}finally{$.k4=!1}},
kb:function(a,b){if(a!=null&&!H.k9(a,b))H.r(H.aG(a,H.jI(b)))
return a},
aG:function(a,b){return new H.ii("TypeError: "+P.fu(a)+": type '"+H.l9(a)+"' is not a subtype of type '"+b+"'")},
lN:function(a,b){return new H.fa("CastError: "+P.fu(a)+": type '"+H.l9(a)+"' is not a subtype of type '"+b+"'")},
l9:function(a){var u,t
u=J.a0(a)
if(!!u.$icc){t=H.le(u)
if(t!=null)return H.jI(t)
return"Closure"}return H.bT(a)},
n9:function(a){throw H.h(new P.fi(H.H(a)))},
mh:function(a){return new H.hH(a)},
lf:function(a){return v.getIsolateTag(a)},
c:function(a,b){a.$ti=b
return a},
bE:function(a){if(a==null)return
return a.$ti},
nS:function(a,b,c){return H.c6(a["$a"+H.l(c)],H.bE(b))},
c4:function(a,b,c,d){var u
H.H(c)
H.ad(d)
u=H.c6(a["$a"+H.l(c)],H.bE(b))
return u==null?null:u[d]},
ao:function(a,b,c){var u
H.H(b)
H.ad(c)
u=H.c6(a["$a"+H.l(b)],H.bE(a))
return u==null?null:u[c]},
x:function(a,b){var u
H.ad(b)
u=H.bE(a)
return u==null?null:u[b]},
jI:function(a){return H.bD(a,null)},
bD:function(a,b){var u,t
H.m(b,"$ib",[P.f],"$ab")
if(a==null)return"dynamic"
if(a===-1)return"void"
if(typeof a==="object"&&a!==null&&a.constructor===Array)return H.c7(a[0].name)+H.k7(a,1,b)
if(typeof a=="function")return H.c7(a.name)
if(a===-2)return"dynamic"
if(typeof a==="number"){H.ad(a)
if(b==null||a<0||a>=b.length)return"unexpected-generic-index:"+a
u=b.length
t=u-a-1
if(t<0||t>=u)return H.j(b,t)
return H.l(b[t])}if('func' in a)return H.mz(a,b)
if('futureOr' in a)return"FutureOr<"+H.bD("type" in a?a.type:null,b)+">"
return"unknown-reified-type"},
mz:function(a,b){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c
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
if(m<0)return H.j(b,m)
o=C.j.p(o,b[m])
l=t[p]
if(l!=null&&l!==P.L)o+=" extends "+H.bD(l,b)}o+=">"}else{o=""
s=null}k=!!a.v?"void":H.bD(a.ret,b)
if("args" in a){j=a.args
for(u=j.length,i="",h="",g=0;g<u;++g,h=", "){f=j[g]
i=i+h+H.bD(f,b)}}else{i=""
h=""}if("opt" in a){e=a.opt
i+=h+"["
for(u=e.length,h="",g=0;g<u;++g,h=", "){f=e[g]
i=i+h+H.bD(f,b)}i+="]"}if("named" in a){d=a.named
i+=h+"{"
for(u=H.mM(d),m=u.length,h="",g=0;g<m;++g,h=", "){c=H.H(u[g])
i=i+h+H.bD(d[c],b)+(" "+H.l(c))}i+="}"}if(s!=null)b.length=s
return o+"("+i+") => "+k},
k7:function(a,b,c){var u,t,s,r,q,p
H.m(c,"$ib",[P.f],"$ab")
if(a==null)return""
u=new P.bf("")
for(t=b,s="",r=!0,q="";t<a.length;++t,s=", "){u.a=q+s
p=a[t]
if(p!=null)r=!1
q=u.a+=H.bD(p,c)}return"<"+u.i(0)+">"},
c6:function(a,b){if(a==null)return b
a=a.apply(null,b)
if(a==null)return
if(typeof a==="object"&&a!==null&&a.constructor===Array)return a
if(typeof a=="function")return a.apply(null,b)
return b},
cY:function(a,b,c,d){var u,t
H.H(b)
H.ke(c)
H.H(d)
if(a==null)return!1
u=H.bE(a)
t=J.a0(a)
if(t[b]==null)return!1
return H.lc(H.c6(t[d],u),null,c,null)},
m:function(a,b,c,d){H.H(b)
H.ke(c)
H.H(d)
if(a==null)return a
if(H.cY(a,b,c,d))return a
throw H.h(H.aG(a,function(e,f){return e.replace(/[^<,> ]+/g,function(g){return f[g]||g})}(H.c7(b.substring(2))+H.k7(c,0,null),v.mangledGlobalNames)))},
lc:function(a,b,c,d){var u,t
if(c==null)return!0
if(a==null){u=c.length
for(t=0;t<u;++t)if(!H.aB(null,null,c[t],d))return!1
return!0}u=a.length
for(t=0;t<u;++t)if(!H.aB(a[t],b,c[t],d))return!1
return!0},
nP:function(a,b,c){return a.apply(b,H.c6(J.a0(b)["$a"+H.l(c)],H.bE(b)))},
lh:function(a){var u
if(typeof a==="number")return!1
if('futureOr' in a){u="type" in a?a.type:null
return a==null||a.name==="L"||a.name==="J"||a===-1||a===-2||H.lh(u)}return!1},
k9:function(a,b){var u,t
if(a==null)return b==null||b.name==="L"||b.name==="J"||b===-1||b===-2||H.lh(b)
if(b==null||b===-1||b.name==="L"||b===-2)return!0
if(typeof b=="object"){if('futureOr' in b)if(H.k9(a,"type" in b?b.type:null))return!0
if('func' in b)return H.eZ(a,b)}u=J.a0(a).constructor
t=H.bE(a)
if(t!=null){t=t.slice()
t.splice(0,0,u)
u=t}return H.aB(u,null,b,null)},
D:function(a,b){if(a!=null&&!H.k9(a,b))throw H.h(H.aG(a,H.jI(b)))
return a},
aB:function(a,b,c,d){var u,t,s,r,q,p,o,n,m
if(a===c)return!0
if(c==null||c===-1||c.name==="L"||c===-2)return!0
if(a===-2)return!0
if(a==null||a===-1||a.name==="L"||a===-2){if(typeof c==="number")return!1
if('futureOr' in c)return H.aB(a,b,"type" in c?c.type:null,d)
return!1}if(typeof a==="number")return!1
if(typeof c==="number")return!1
if(a.name==="J")return!0
if('func' in c)return H.l5(a,b,c,d)
if('func' in a)return c.name==="bv"
u=typeof a==="object"&&a!==null&&a.constructor===Array
t=u?a[0]:a
if('futureOr' in c){s="type" in c?c.type:null
if('futureOr' in a)return H.aB("type" in a?a.type:null,b,s,d)
else if(H.aB(a,b,s,d))return!0
else{if(!('$i'+"cj" in t.prototype))return!1
r=t.prototype["$a"+"cj"]
q=H.c6(r,u?a.slice(1):null)
return H.aB(typeof q==="object"&&q!==null&&q.constructor===Array?q[0]:null,b,s,d)}}p=typeof c==="object"&&c!==null&&c.constructor===Array
o=p?c[0]:c
if(o!==t){n=o.name
if(!('$i'+n in t.prototype))return!1
m=t.prototype["$a"+n]}else m=null
if(!p)return!0
u=u?a.slice(1):null
p=c.slice(1)
return H.lc(H.c6(m,u),b,p,d)},
l5:function(a,b,c,d){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g
if(!('func' in a))return!1
if("bounds" in a){if(!("bounds" in c))return!1
u=a.bounds
t=c.bounds
if(u.length!==t.length)return!1}else if("bounds" in c)return!1
if(!H.aB(a.ret,b,c.ret,d))return!1
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
for(k=0;k<o;++k)if(!H.aB(r[k],d,s[k],b))return!1
for(j=k,i=0;j<n;++i,++j)if(!H.aB(r[j],d,q[i],b))return!1
for(j=0;j<l;++i,++j)if(!H.aB(p[j],d,q[i],b))return!1
h=a.named
g=c.named
if(g==null)return!0
if(h==null)return!1
return H.n1(h,b,g,d)},
n1:function(a,b,c,d){var u,t,s,r
u=Object.getOwnPropertyNames(c)
for(t=u.length,s=0;s<t;++s){r=u[s]
if(!Object.hasOwnProperty.call(a,r))return!1
if(!H.aB(c[r],d,a[r],b))return!1}return!0},
nQ:function(a,b,c){Object.defineProperty(a,H.H(b),{value:c,enumerable:false,writable:true,configurable:true})},
n_:function(a){var u,t,s,r,q,p
u=H.H($.lg.$1(a))
t=$.jz[u]
if(t!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:t,enumerable:false,writable:true,configurable:true})
return t.i}s=$.jF[u]
if(s!=null)return s
r=v.interceptorsByTag[u]
if(r==null){u=H.H($.lb.$2(a,u))
if(u!=null){t=$.jz[u]
if(t!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:t,enumerable:false,writable:true,configurable:true})
return t.i}s=$.jF[u]
if(s!=null)return s
r=v.interceptorsByTag[u]}}if(r==null)return
s=r.prototype
q=u[0]
if(q==="!"){t=H.jH(s)
$.jz[u]=t
Object.defineProperty(a,v.dispatchPropertyName,{value:t,enumerable:false,writable:true,configurable:true})
return t.i}if(q==="~"){$.jF[u]=s
return s}if(q==="-"){p=H.jH(s)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}if(q==="+")return H.lj(a,s)
if(q==="*")throw H.h(P.kT(u))
if(v.leafTags[u]===true){p=H.jH(s)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}else return H.lj(a,s)},
lj:function(a,b){var u=Object.getPrototypeOf(a)
Object.defineProperty(u,v.dispatchPropertyName,{value:J.kf(b,u,null,null),enumerable:false,writable:true,configurable:true})
return b},
jH:function(a){return J.kf(a,!1,null,!!a.$iF)},
n0:function(a,b,c){var u=b.prototype
if(v.leafTags[a]===true)return H.jH(u)
else return J.kf(u,c,null,null)},
mV:function(){if(!0===$.kd)return
$.kd=!0
H.mW()},
mW:function(){var u,t,s,r,q,p,o,n
$.jz=Object.create(null)
$.jF=Object.create(null)
H.mU()
u=v.interceptorsByTag
t=Object.getOwnPropertyNames(u)
if(typeof window!="undefined"){window
s=function(){}
for(r=0;r<t.length;++r){q=t[r]
p=$.ll.$1(q)
if(p!=null){o=H.n0(q,u[q],p)
if(o!=null){Object.defineProperty(p,v.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
s.prototype=p}}}}for(r=0;r<t.length;++r){q=t[r]
if(/^[A-Za-z_]/.test(q)){n=u[q]
u["!"+q]=n
u["~"+q]=n
u["-"+q]=n
u["+"+q]=n
u["*"+q]=n}}},
mU:function(){var u,t,s,r,q,p,o
u=C.Q()
u=H.c0(C.N,H.c0(C.S,H.c0(C.z,H.c0(C.z,H.c0(C.R,H.c0(C.O,H.c0(C.P(C.A),u)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){t=dartNativeDispatchHooksTransformer
if(typeof t=="function")t=[t]
if(t.constructor==Array)for(s=0;s<t.length;++s){r=t[s]
if(typeof r=="function")u=r(u)||u}}q=u.getTag
p=u.getUnknownTag
o=u.prototypeForTag
$.lg=new H.jC(q)
$.lb=new H.jD(p)
$.ll=new H.jE(o)},
c0:function(a,b){return a(b)||b},
m1:function(a,b,c,d){var u,t,s,r
u=b?"m":""
t=c?"":"i"
s=d?"g":""
r=function(e,f){try{return new RegExp(e,f)}catch(q){return q}}(a,u+t+s)
if(r instanceof RegExp)return r
throw H.h(new P.fF("Illegal RegExp pattern ("+String(r)+")",a,null))},
n7:function(a,b,c){var u=a.indexOf(b,c)
return u>=0},
kg:function(a,b,c){var u,t,s
if(b==="")if(a==="")return c
else{u=a.length
for(t=c,s=0;s<u;++s)t=t+a[s]+c
return t.charCodeAt(0)==0?t:t}else return a.replace(new RegExp(b.replace(/[[\]{}()*+?.\\^$|]/g,"\\$&"),'g'),c.replace(/\$/g,"$$$$"))},
hA:function hA(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.x=null},
ig:function ig(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
hq:function hq(a,b){this.a=a
this.b=b},
fS:function fS(a,b,c){this.a=a
this.b=b
this.c=c},
iu:function iu(a){this.a=a},
jL:function jL(a){this.a=a},
eD:function eD(a){this.a=a
this.b=null},
cc:function cc(){},
i3:function i3(){},
hV:function hV(){},
ca:function ca(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
ii:function ii(a){this.a=a},
fa:function fa(a){this.a=a},
hH:function hH(a){this.a=a},
aR:function aR(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
fW:function fW(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
dp:function dp(a,b){this.a=a
this.$ti=b},
fX:function fX(a,b,c){var _=this
_.a=a
_.b=b
_.d=_.c=null
_.$ti=c},
jC:function jC(a){this.a=a},
jD:function jD(a){this.a=a},
jE:function jE(a){this.a=a},
fR:function fR(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
cV:function(a){return a},
bC:function(a,b,c){if(a>>>0!==a||a>=c)throw H.h(H.c2(b,a))},
my:function(a,b,c){var u
if(!(a>>>0!==a))u=b>>>0!==b||a>b||b>c
else u=!0
if(u)throw H.h(H.mL(a,b,c))
return b},
cq:function cq(){},
dy:function dy(){},
cp:function cp(){},
dz:function dz(){},
hh:function hh(){},
hi:function hi(){},
hj:function hj(){},
hk:function hk(){},
hl:function hl(){},
dA:function dA(){},
hm:function hm(){},
cN:function cN(){},
cO:function cO(){},
cP:function cP(){},
cQ:function cQ(){},
mM:function(a){return J.kw(a?Object.keys(a):[],null)},
n3:function(a){if(typeof dartPrint=="function"){dartPrint(a)
return}if(typeof console=="object"&&typeof console.log!="undefined"){console.log(a)
return}if(typeof window=="object")return
if(typeof print=="function"){print(a)
return}throw"Unable to print message: "+String(a)}},J={
kf:function(a,b,c,d){return{i:a,p:b,e:c,x:d}},
f_:function(a){var u,t,s,r,q
u=a[v.dispatchPropertyName]
if(u==null)if($.kd==null){H.mV()
u=a[v.dispatchPropertyName]}if(u!=null){t=u.p
if(!1===t)return u.i
if(!0===t)return a
s=Object.getPrototypeOf(a)
if(t===s)return u.i
if(u.e===s)throw H.h(P.kT("Return interceptor for "+H.l(t(a,u))))}r=a.constructor
q=r==null?null:r[$.kh()]
if(q!=null)return q
q=H.n_(a)
if(q!=null)return q
if(typeof a=="function")return C.T
t=Object.getPrototypeOf(a)
if(t==null)return C.C
if(t===Object.prototype)return C.C
if(typeof r=="function"){Object.defineProperty(r,$.kh(),{value:C.w,enumerable:false,writable:true,configurable:true})
return C.w}return C.w},
m0:function(a,b){if(typeof a!=="number"||Math.floor(a)!==a)throw H.h(P.jO(a,"length","is not an integer"))
if(a<0||a>4294967295)throw H.h(P.ax(a,0,4294967295,"length",null))
return J.kw(new Array(a),b)},
kw:function(a,b){return J.fO(H.c(a,[b]))},
fO:function(a){H.ke(a)
a.fixed$length=Array
return a},
a0:function(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.dj.prototype
return J.fQ.prototype}if(typeof a=="string")return J.b9.prototype
if(a==null)return J.dk.prototype
if(typeof a=="boolean")return J.fP.prototype
if(a.constructor==Array)return J.aC.prototype
if(typeof a!="object"){if(typeof a=="function")return J.ba.prototype
return a}if(a instanceof P.L)return a
return J.f_(a)},
mO:function(a){if(typeof a=="number")return J.bw.prototype
if(typeof a=="string")return J.b9.prototype
if(a==null)return a
if(a.constructor==Array)return J.aC.prototype
if(typeof a!="object"){if(typeof a=="function")return J.ba.prototype
return a}if(a instanceof P.L)return a
return J.f_(a)},
jA:function(a){if(typeof a=="string")return J.b9.prototype
if(a==null)return a
if(a.constructor==Array)return J.aC.prototype
if(typeof a!="object"){if(typeof a=="function")return J.ba.prototype
return a}if(a instanceof P.L)return a
return J.f_(a)},
jB:function(a){if(a==null)return a
if(a.constructor==Array)return J.aC.prototype
if(typeof a!="object"){if(typeof a=="function")return J.ba.prototype
return a}if(a instanceof P.L)return a
return J.f_(a)},
mP:function(a){if(typeof a=="number")return J.bw.prototype
if(a==null)return a
if(!(a instanceof P.L))return J.bA.prototype
return a},
mQ:function(a){if(typeof a=="number")return J.bw.prototype
if(typeof a=="string")return J.b9.prototype
if(a==null)return a
if(!(a instanceof P.L))return J.bA.prototype
return a},
kc:function(a){if(typeof a=="string")return J.b9.prototype
if(a==null)return a
if(!(a instanceof P.L))return J.bA.prototype
return a},
an:function(a){if(a==null)return a
if(typeof a!="object"){if(typeof a=="function")return J.ba.prototype
return a}if(a instanceof P.L)return a
return J.f_(a)},
lE:function(a,b){if(typeof a=="number"&&typeof b=="number")return a+b
return J.mO(a).p(a,b)},
Y:function(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.a0(a).v(a,b)},
kk:function(a,b){if(typeof a=="number"&&typeof b=="number")return a*b
return J.mQ(a).u(a,b)},
lF:function(a,b){if(typeof a=="number"&&typeof b=="number")return a-b
return J.mP(a).q(a,b)},
lG:function(a,b){if(typeof b==="number")if(a.constructor==Array||typeof a=="string"||H.mY(a,a[v.dispatchPropertyName]))if(b>>>0===b&&b<a.length)return a[b]
return J.jA(a).j(a,b)},
f0:function(a,b){return J.an(a).hH(a,b)},
lH:function(a,b,c,d){return J.an(a).iG(a,b,c,d)},
kl:function(a,b){return J.an(a).C(a,b)},
jM:function(a,b){return J.jB(a).F(a,b)},
lI:function(a,b){return J.jB(a).O(a,b)},
lJ:function(a){return J.an(a).giM(a)},
bF:function(a){return J.a0(a).gI(a)},
bG:function(a){return J.jB(a).gS(a)},
bH:function(a){return J.jA(a).gl(a)},
lK:function(a){return J.an(a).gjR(a)},
jN:function(a,b){return J.an(a).aR(a,b)},
km:function(a){return J.jB(a).jH(a)},
lL:function(a,b,c){return J.kc(a).b7(a,b,c)},
lM:function(a){return J.kc(a).jV(a)},
aI:function(a){return J.a0(a).i(a)},
a:function a(){},
fP:function fP(){},
dk:function dk(){},
dl:function dl(){},
hu:function hu(){},
bA:function bA(){},
ba:function ba(){},
aC:function aC(a){this.$ti=a},
jU:function jU(a){this.$ti=a},
ap:function ap(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=null
_.$ti=d},
bw:function bw(){},
dj:function dj(){},
fQ:function fQ(){},
b9:function b9(){}},P={
mn:function(){var u,t,s
u={}
if(self.scheduleImmediate!=null)return P.mG()
if(self.MutationObserver!=null&&self.document!=null){t=self.document.createElement("div")
s=self.document.createElement("span")
u.a=null
new self.MutationObserver(H.c1(new P.iP(u),1)).observe(t,{childList:true})
return new P.iO(u,t,s)}else if(self.setImmediate!=null)return P.mH()
return P.mI()},
mo:function(a){self.scheduleImmediate(H.c1(new P.iQ(H.n(a,{func:1,ret:-1})),0))},
mp:function(a){self.setImmediate(H.c1(new P.iR(H.n(a,{func:1,ret:-1})),0))},
mq:function(a){P.k_(C.q,H.n(a,{func:1,ret:-1}))},
k_:function(a,b){var u
H.n(b,{func:1,ret:-1})
u=C.h.a_(a.a,1000)
return P.mw(u<0?0:u,b)},
kR:function(a,b){var u
H.n(b,{func:1,ret:-1,args:[P.b0]})
u=C.h.a_(a.a,1000)
return P.mx(u<0?0:u,b)},
mw:function(a,b){var u=new P.eJ(!0)
u.f5(a,b)
return u},
mx:function(a,b){var u=new P.eJ(!1)
u.f6(a,b)
return u},
mr:function(a,b){var u,t,s
b.a=1
try{a.ed(new P.j_(b),new P.j0(b),null)}catch(s){u=H.av(s)
t=H.c5(s)
P.n5(new P.j1(b,u,t))}},
l0:function(a,b){var u,t
for(;u=a.a,u===2;)a=H.k(a.c,"$iaA")
if(u>=4){t=b.c2()
b.a=a.a
b.c=a.c
P.cM(b,t)}else{t=H.k(b.c,"$ib5")
b.a=2
b.c=a
a.da(t)}},
cM:function(a,b){var u,t,s,r,q,p,o,n,m,l,k,j,i,h
u={}
u.a=a
for(t=a;!0;){s={}
r=t.a===8
if(b==null){if(r){q=H.k(t.c,"$iae")
t=t.b
p=q.a
o=q.b
t.toString
P.ju(null,null,t,p,o)}return}for(;n=b.a,n!=null;b=n){b.a=null
P.cM(u.a,b)}t=u.a
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
if(k){H.k(m,"$iae")
t=t.b
p=m.a
o=m.b
t.toString
P.ju(null,null,t,p,o)
return}j=$.X
if(j!=l)$.X=l
else j=null
t=b.c
if(t===8)new P.j5(u,s,b,r).$0()
else if(p){if((t&1)!==0)new P.j4(s,b,m).$0()}else if((t&2)!==0)new P.j3(u,s,b).$0()
if(j!=null)$.X=j
t=s.b
if(!!J.a0(t).$icj){if(t.a>=4){i=H.k(o.c,"$ib5")
o.c=null
b=o.ba(i)
o.a=t.a
o.c=t.c
u.a=t
continue}else P.l0(t,o)
return}}h=b.b
i=H.k(h.c,"$ib5")
h.c=null
b=h.ba(i)
t=s.a
p=s.b
if(!t){H.D(p,H.x(h,0))
h.a=4
h.c=p}else{H.k(p,"$iae")
h.a=8
h.c=p}u.a=h
t=h}},
mC:function(a,b){if(H.eZ(a,{func:1,args:[P.L,P.am]}))return H.n(a,{func:1,ret:null,args:[P.L,P.am]})
if(H.eZ(a,{func:1,args:[P.L]}))return H.n(a,{func:1,ret:null,args:[P.L]})
throw H.h(P.jO(a,"onError","Error handler must accept one Object or one Object and a StackTrace as arguments, and return a a valid result"))},
mB:function(){var u,t
for(;u=$.c_,u!=null;){$.cX=null
t=u.b
$.c_=t
if(t==null)$.cW=null
u.a.$0()}},
mF:function(){$.k5=!0
try{P.mB()}finally{$.cX=null
$.k5=!1
if($.c_!=null)$.ki().$1(P.ld())}},
l8:function(a){var u=new P.e5(H.n(a,{func:1,ret:-1}))
if($.c_==null){$.cW=u
$.c_=u
if(!$.k5)$.ki().$1(P.ld())}else{$.cW.b=u
$.cW=u}},
mE:function(a){var u,t,s
H.n(a,{func:1,ret:-1})
u=$.c_
if(u==null){P.l8(a)
$.cX=$.cW
return}t=new P.e5(a)
s=$.cX
if(s==null){t.b=u
$.cX=t
$.c_=t}else{t.b=s.b
s.b=t
$.cX=t
if(t.b==null)$.cW=t}},
n5:function(a){var u,t
u={func:1,ret:-1}
H.n(a,u)
t=$.X
if(C.l===t){P.jw(null,null,C.l,a)
return}t.toString
P.jw(null,null,t,H.n(t.c9(a),u))},
kQ:function(a,b){var u,t
u={func:1,ret:-1}
H.n(b,u)
t=$.X
if(t===C.l){t.toString
return P.k_(a,b)}return P.k_(a,H.n(t.c9(b),u))},
ml:function(a,b){var u,t,s
u={func:1,ret:-1,args:[P.b0]}
H.n(b,u)
t=$.X
if(t===C.l){t.toString
return P.kR(a,b)}s=t.dm(b,P.b0)
$.X.toString
return P.kR(a,H.n(s,u))},
ju:function(a,b,c,d,e){var u={}
u.a=d
P.mE(new P.jv(u,e))},
l6:function(a,b,c,d,e){var u,t
H.n(d,{func:1,ret:e})
t=$.X
if(t===c)return d.$0()
$.X=c
u=t
try{t=d.$0()
return t}finally{$.X=u}},
l7:function(a,b,c,d,e,f,g){var u,t
H.n(d,{func:1,ret:f,args:[g]})
H.D(e,g)
t=$.X
if(t===c)return d.$1(e)
$.X=c
u=t
try{t=d.$1(e)
return t}finally{$.X=u}},
mD:function(a,b,c,d,e,f,g,h,i){var u,t
H.n(d,{func:1,ret:g,args:[h,i]})
H.D(e,h)
H.D(f,i)
t=$.X
if(t===c)return d.$2(e,f)
$.X=c
u=t
try{t=d.$2(e,f)
return t}finally{$.X=u}},
jw:function(a,b,c,d){var u
H.n(d,{func:1,ret:-1})
u=C.l!==c
if(u)d=!(!u||!1)?c.c9(d):c.iN(d,-1)
P.l8(d)},
iP:function iP(a){this.a=a},
iO:function iO(a,b,c){this.a=a
this.b=b
this.c=c},
iQ:function iQ(a){this.a=a},
iR:function iR(a){this.a=a},
eJ:function eJ(a){this.a=a
this.b=null
this.c=0},
jq:function jq(a,b){this.a=a
this.b=b},
jp:function jp(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
b5:function b5(a,b,c,d,e){var _=this
_.a=null
_.b=a
_.c=b
_.d=c
_.e=d
_.$ti=e},
aA:function aA(a,b,c){var _=this
_.a=a
_.b=b
_.c=null
_.$ti=c},
iZ:function iZ(a,b){this.a=a
this.b=b},
j2:function j2(a,b){this.a=a
this.b=b},
j_:function j_(a){this.a=a},
j0:function j0(a){this.a=a},
j1:function j1(a,b,c){this.a=a
this.b=b
this.c=c},
j5:function j5(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
j6:function j6(a){this.a=a},
j4:function j4(a,b,c){this.a=a
this.b=b
this.c=c},
j3:function j3(a,b,c){this.a=a
this.b=b
this.c=c},
e5:function e5(a){this.a=a
this.b=null},
hY:function hY(){},
i_:function i_(a,b){this.a=a
this.b=b},
i0:function i0(a,b){this.a=a
this.b=b},
cx:function cx(){},
hZ:function hZ(){},
b0:function b0(){},
ae:function ae(a,b){this.a=a
this.b=b},
jt:function jt(){},
jv:function jv(a,b){this.a=a
this.b=b},
jc:function jc(){},
je:function je(a,b,c){this.a=a
this.b=b
this.c=c},
jd:function jd(a,b){this.a=a
this.b=b},
jf:function jf(a,b,c){this.a=a
this.b=b
this.c=c},
kx:function(a,b){return new H.aR([a,b])},
m2:function(a){return H.mN(a,new H.aR([null,null]))},
dq:function(a,b,c,d){return new P.ja([d])},
k3:function(){var u=Object.create(null)
u["<non-identifier-key>"]=u
delete u["<non-identifier-key>"]
return u},
mv:function(a,b,c){var u=new P.ek(a,b,[c])
u.c=a.e
return u},
lY:function(a,b,c){var u,t
if(P.k6(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}u=H.c([],[P.f])
t=$.d0()
C.a.h(t,a)
try{P.mA(a,u)}finally{if(0>=t.length)return H.j(t,-1)
t.pop()}t=P.kO(b,H.mZ(u,"$ie"),", ")+c
return t.charCodeAt(0)==0?t:t},
jT:function(a,b,c){var u,t,s
if(P.k6(a))return b+"..."+c
u=new P.bf(b)
t=$.d0()
C.a.h(t,a)
try{s=u
s.a=P.kO(s.a,a,", ")}finally{if(0>=t.length)return H.j(t,-1)
t.pop()}u.a+=c
t=u.a
return t.charCodeAt(0)==0?t:t},
k6:function(a){var u,t
for(u=0;t=$.d0(),u<t.length;++u)if(a===t[u])return!0
return!1},
mA:function(a,b){var u,t,s,r,q,p,o,n,m,l
H.m(b,"$ib",[P.f],"$ab")
u=a.gS(a)
t=0
s=0
while(!0){if(!(t<80||s<3))break
if(!u.B())return
r=H.l(u.gH(u))
C.a.h(b,r)
t+=r.length+2;++s}if(!u.B()){if(s<=5)return
if(0>=b.length)return H.j(b,-1)
q=b.pop()
if(0>=b.length)return H.j(b,-1)
p=b.pop()}else{o=u.gH(u);++s
if(!u.B()){if(s<=4){C.a.h(b,H.l(o))
return}q=H.l(o)
if(0>=b.length)return H.j(b,-1)
p=b.pop()
t+=q.length+2}else{n=u.gH(u);++s
for(;u.B();o=n,n=m){m=u.gH(u);++s
if(s>100){while(!0){if(!(t>75&&s>3))break
if(0>=b.length)return H.j(b,-1)
t-=b.pop().length+2;--s}C.a.h(b,"...")
return}}p=H.l(o)
q=H.l(n)
t+=q.length+p.length+4}}if(s>b.length+2){t+=5
l="..."}else l=null
while(!0){if(!(t>80&&b.length>3))break
if(0>=b.length)return H.j(b,-1)
t-=b.pop().length+2
if(l==null){t+=5
l="..."}}if(l!=null)C.a.h(b,l)
C.a.h(b,p)
C.a.h(b,q)},
ky:function(a,b){var u,t,s
u=P.dq(null,null,null,b)
for(t=a.length,s=0;s<a.length;a.length===t||(0,H.E)(a),++s)u.h(0,H.D(a[s],b))
return u},
kA:function(a){var u,t
u={}
if(P.k6(a))return"{...}"
t=new P.bf("")
try{C.a.h($.d0(),a)
t.a+="{"
u.a=!0
J.lI(a,new P.h0(u,t))
t.a+="}"}finally{u=$.d0()
if(0>=u.length)return H.j(u,-1)
u.pop()}u=t.a
return u.charCodeAt(0)==0?u:u},
ja:function ja(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
bZ:function bZ(a){this.a=a
this.c=this.b=null},
ek:function ek(a,b,c){var _=this
_.a=a
_.b=b
_.d=_.c=null
_.$ti=c},
fY:function fY(){},
w:function w(){},
h_:function h_(){},
h0:function h0(a,b){this.a=a
this.b=b},
a6:function a6(){},
jh:function jh(){},
el:function el(){},
cd:function cd(){},
ce:function ce(){},
fs:function fs(){},
fL:function fL(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
fK:function fK(a){this.a=a},
ix:function ix(a){this.a=a},
iy:function iy(){},
jr:function jr(a){this.b=this.a=0
this.c=a},
lW:function(a){if(a instanceof H.cc)return a.i(0)
return"Instance of '"+H.bT(a)+"'"},
m3:function(a,b,c,d){var u,t
H.D(b,d)
u=J.m0(a,d)
if(a!==0&&!0)for(t=0;t<u.length;++t)C.a.Y(u,t,b)
return H.m(u,"$ib",[d],"$ab")},
kz:function(a,b,c){var u,t,s
u=[c]
t=H.c([],u)
for(s=J.bG(a);s.B();)C.a.h(t,H.D(s.gH(s),c))
if(b)return t
return H.m(J.fO(t),"$ib",u,"$ab")},
jZ:function(a,b,c){var u,t
u=P.B
H.m(a,"$ie",[u],"$ae")
if(a.constructor===Array){H.m(a,"$iaC",[u],"$aaC")
t=a.length
c=P.jY(b,c,t,null,null,null)
return H.kJ(b>0||c<t?C.a.eE(a,b,c):a)}return P.mj(a,b,c)},
mj:function(a,b,c){var u,t,s
H.m(a,"$ie",[P.B],"$ae")
u=J.bG(a)
for(t=0;t<b;++t)if(!u.B())throw H.h(P.ax(b,0,t,null,null))
s=[]
for(;u.B();)s.push(u.gH(u))
return H.kJ(s)},
mf:function(a,b,c){return new H.fR(a,H.m1(a,!1,!0,!1))},
kO:function(a,b,c){var u=J.bG(b)
if(!u.B())return a
if(c.length===0){do a+=H.l(u.gH(u))
while(u.B())}else{a+=H.l(u.gH(u))
for(;u.B();)a=a+c+H.l(u.gH(u))}return a},
l4:function(a,b,c,d){var u,t,s,r,q,p
H.m(a,"$ib",[P.B],"$ab")
if(c===C.x){u=$.lD().b
u=u.test(b)}else u=!1
if(u)return b
t=C.H.iW(H.D(b,H.ao(c,"cd",0)))
for(u=t.length,s=0,r="";s<u;++s){q=t[s]
if(q<128){p=q>>>4
if(p>=8)return H.j(a,p)
p=(a[p]&1<<(q&15))!==0}else p=!1
if(p)r+=H.jX(q)
else r=r+"%"+"0123456789ABCDEF"[q>>>4&15]+"0123456789ABCDEF"[q&15]}return r.charCodeAt(0)==0?r:r},
lS:function(a){var u,t
u=Math.abs(a)
t=a<0?"-":""
if(u>=1000)return""+a
if(u>=100)return t+"0"+u
if(u>=10)return t+"00"+u
return t+"000"+u},
lT:function(a){if(a>=100)return""+a
if(a>=10)return"0"+a
return"00"+a},
da:function(a){if(a>=10)return""+a
return"0"+a},
kt:function(a,b,c,d,e,f){return new P.aN(864e8*a+36e8*b+6e7*e+1e6*f+1000*d+c)},
fu:function(a){if(typeof a==="number"||typeof a==="boolean"||null==a)return J.aI(a)
if(typeof a==="string")return JSON.stringify(a)
return P.lW(a)},
jO:function(a,b,c){return new P.aJ(!0,a,b,c)},
dH:function(a,b,c){return new P.bU(null,null,!0,a,b,"Value not in range")},
ax:function(a,b,c,d,e){return new P.bU(b,c,!0,a,d,"Invalid value")},
jY:function(a,b,c,d,e,f){if(0>a||a>c)throw H.h(P.ax(a,0,c,"start",f))
if(b!=null){if(a>b||b>c)throw H.h(P.ax(b,a,c,"end",f))
return b}return c},
V:function(a,b,c,d,e){var u=H.ad(e==null?J.bH(b):e)
return new P.fM(b,u,!0,a,c,"Index out of range")},
au:function(a){return new P.iv(a)},
kT:function(a){return new P.it(a)},
kN:function(a){return new P.bW(a)},
bs:function(a){return new P.fd(a)},
t:function(a){return new P.ed(a)},
aH:function(a){H.n3(a)},
M:function M(){},
ai:function ai(a,b){this.a=a
this.b=b},
z:function z(){},
aN:function aN(a){this.a=a},
fo:function fo(){},
fp:function fp(){},
bu:function bu(){},
dC:function dC(){},
aJ:function aJ(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
bU:function bU(a,b,c,d,e,f){var _=this
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
iv:function iv(a){this.a=a},
it:function it(a){this.a=a},
bW:function bW(a){this.a=a},
fd:function fd(a){this.a=a},
ht:function ht(){},
dM:function dM(){},
fi:function fi(a){this.a=a},
ed:function ed(a){this.a=a},
fF:function fF(a,b,c){this.a=a
this.b=b
this.c=c},
bv:function bv(){},
B:function B(){},
e:function e(){},
aQ:function aQ(){},
b:function b(){},
N:function N(){},
J:function J(){},
a3:function a3(){},
L:function L(){},
am:function am(){},
f:function f(){},
bf:function bf(a){this.a=a},
bi:function(a){var u,t,s,r,q
if(a==null)return
u=P.kx(P.f,null)
t=Object.getOwnPropertyNames(a)
for(s=t.length,r=0;r<t.length;t.length===s||(0,H.E)(t),++r){q=H.H(t[r])
u.Y(0,q,a[q])}return u},
mJ:function(a,b){var u={}
a.O(0,new P.jx(u))
return u},
jx:function jx(a){this.a=a},
fB:function fB(a,b){this.a=a
this.b=b},
fC:function fC(){},
fD:function fD(){},
j9:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
mu:function(a){a=536870911&a+((67108863&a)<<3)
a^=a>>>11
return 536870911&a+((16383&a)<<15)},
jb:function jb(){},
ab:function ab(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=e},
bb:function bb(){},
fU:function fU(){},
be:function be(){},
hr:function hr(){},
hy:function hy(){},
cu:function cu(){},
i1:function i1(){},
p:function p(){},
bg:function bg(){},
ie:function ie(){},
ei:function ei(){},
ej:function ej(){},
et:function et(){},
eu:function eu(){},
eF:function eF(){},
eG:function eG(){},
eM:function eM(){},
eN:function eN(){},
f4:function f4(){},
f5:function f5(){},
f6:function f6(a){this.a=a},
f7:function f7(){},
bI:function bI(){},
hs:function hs(){},
e6:function e6(){},
d4:function d4(){},
dg:function dg(){},
dF:function dF(){},
bV:function bV(){},
dJ:function dJ(){},
dY:function dY(){},
hU:function hU(){},
eB:function eB(){},
eC:function eC(){}},W={
kn:function(a){var u=document.createElement("a")
return u},
kq:function(a,b){var u=document.createElement("canvas")
return u},
lU:function(a,b,c){var u,t
u=document.body
t=(u&&C.n).a8(u,a,b,c)
t.toString
u=W.C
u=new H.cJ(new W.ah(t),H.n(new W.fr(),{func:1,ret:P.M,args:[u]}),[u])
return H.k(u.gaB(u),"$iT")},
lV:function(a){H.k(a,"$id")
return"wheel"},
ci:function(a){var u,t,s
u="element tag unavailable"
try{t=J.lK(a)
if(typeof t==="string")u=a.tagName}catch(s){H.av(s)}return u},
j8:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
l2:function(a,b,c,d){var u,t
u=W.j8(W.j8(W.j8(W.j8(0,a),b),c),d)
t=536870911&u+((67108863&u)<<3)
t^=t>>>11
return 536870911&t+((16383&t)<<15)},
ac:function(a,b,c,d,e){var u=W.la(new W.iY(c),W.o)
if(u!=null&&!0)J.lH(a,b,u,!1)
return new W.iX(a,b,u,!1,[e])},
l1:function(a){var u,t
u=W.kn(null)
t=window.location
u=new W.bB(new W.jg(u,t))
u.eT(a)
return u},
ms:function(a,b,c,d){H.k(a,"$iT")
H.H(b)
H.H(c)
H.k(d,"$ibB")
return!0},
mt:function(a,b,c,d){var u,t,s
H.k(a,"$iT")
H.H(b)
H.H(c)
u=H.k(d,"$ibB").a
t=u.a
t.href=c
s=t.hostname
u=u.b
if(!(s==u.hostname&&t.port==u.port&&t.protocol==u.protocol))if(s==="")if(t.port===""){u=t.protocol
u=u===":"||u===""}else u=!1
else u=!1
else u=!0
return u},
l3:function(){var u,t,s,r,q
u=P.f
t=P.ky(C.t,u)
s=H.x(C.t,0)
r=H.n(new W.jo(),{func:1,ret:u,args:[s]})
q=H.c(["TEMPLATE"],[u])
t=new W.jn(t,P.dq(null,null,null,u),P.dq(null,null,null,u),P.dq(null,null,null,u),null)
t.f4(null,new H.h3(C.t,r,[s,u]),q,null)
return t},
la:function(a,b){var u
H.n(a,{func:1,ret:-1,args:[b]})
u=$.X
if(u===C.l)return a
return u.dm(a,b)},
u:function u(){},
f1:function f1(){},
d1:function d1(){},
f2:function f2(){},
c9:function c9(){},
d3:function d3(){},
bp:function bp(){},
bJ:function bJ(){},
bq:function bq(){},
cf:function cf(){},
fe:function fe(){},
S:function S(){},
cg:function cg(){},
ff:function ff(){},
aL:function aL(){},
aM:function aM(){},
fg:function fg(){},
fh:function fh(){},
fk:function fk(){},
aw:function aw(){},
ch:function ch(){},
fl:function fl(){},
db:function db(){},
dc:function dc(){},
dd:function dd(){},
fm:function fm(){},
fn:function fn(){},
iT:function iT(a,b){this.a=a
this.b=b},
T:function T(){},
fr:function fr(){},
o:function o(){},
d:function d(){},
aO:function aO(){},
fz:function fz(){},
fA:function fA(){},
fE:function fE(){},
aP:function aP(){},
dh:function dh(){},
fJ:function fJ(){},
bN:function bN(){},
di:function di(){},
aS:function aS(){},
dr:function dr(){},
ha:function ha(){},
hb:function hb(){},
hc:function hc(a){this.a=a},
hd:function hd(){},
he:function he(a){this.a=a},
aV:function aV(){},
hf:function hf(){},
a7:function a7(){},
ah:function ah(a){this.a=a},
C:function C(){},
cr:function cr(){},
aW:function aW(){},
hw:function hw(){},
dG:function dG(){},
hF:function hF(){},
hG:function hG(a){this.a=a},
hI:function hI(){},
aX:function aX(){},
hS:function hS(){},
aY:function aY(){},
hT:function hT(){},
aZ:function aZ(){},
hW:function hW(){},
hX:function hX(a){this.a=a},
aD:function aD(){},
bX:function bX(){},
dN:function dN(){},
dO:function dO(){},
i2:function i2(){},
cy:function cy(){},
b_:function b_(){},
aE:function aE(){},
i4:function i4(){},
i5:function i5(){},
i8:function i8(){},
b1:function b1(){},
aF:function aF(){},
ic:function ic(){},
id:function id(){},
bz:function bz(){},
iw:function iw(){},
iL:function iL(){},
b4:function b4(){},
cK:function cK(){},
cL:function cL(){},
iU:function iU(){},
e8:function e8(){},
j7:function j7(){},
eq:function eq(){},
jk:function jk(){},
jl:function jl(){},
iS:function iS(){},
iV:function iV(a){this.a=a},
iW:function iW(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
k2:function k2(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
iX:function iX(a,b,c,d,e){var _=this
_.a=0
_.b=a
_.c=b
_.d=c
_.e=d
_.$ti=e},
iY:function iY(a){this.a=a},
bB:function bB(a){this.a=a},
A:function A(){},
dB:function dB(a){this.a=a},
ho:function ho(a){this.a=a},
hn:function hn(a,b,c){this.a=a
this.b=b
this.c=c},
ey:function ey(){},
ji:function ji(){},
jj:function jj(){},
jn:function jn(a,b,c,d,e){var _=this
_.e=a
_.a=b
_.b=c
_.c=d
_.d=e},
jo:function jo(){},
jm:function jm(){},
df:function df(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=null
_.$ti=d},
as:function as(){},
jg:function jg(a,b){this.a=a
this.b=b},
eO:function eO(a){this.a=a},
js:function js(a){this.a=a},
e7:function e7(){},
e9:function e9(){},
ea:function ea(){},
eb:function eb(){},
ec:function ec(){},
ee:function ee(){},
ef:function ef(){},
eg:function eg(){},
eh:function eh(){},
em:function em(){},
en:function en(){},
eo:function eo(){},
ep:function ep(){},
er:function er(){},
es:function es(){},
ev:function ev(){},
ew:function ew(){},
ex:function ex(){},
cR:function cR(){},
cS:function cS(){},
ez:function ez(){},
eA:function eA(){},
eE:function eE(){},
eH:function eH(){},
eI:function eI(){},
cT:function cT(){},
cU:function cU(){},
eK:function eK(){},
eL:function eL(){},
eP:function eP(){},
eQ:function eQ(){},
eR:function eR(){},
eS:function eS(){},
eT:function eT(){},
eU:function eU(){},
eV:function eV(){},
eW:function eW(){},
eX:function eX(){},
eY:function eY(){}},O={
jQ:function(a){var u=new O.a2([a])
u.bH(a)
return u},
a2:function a2(a){var _=this
_.d=_.c=_.b=_.a=null
_.$ti=a},
cn:function cn(){this.b=this.a=null},
du:function du(){var _=this
_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
h5:function h5(a,b){var _=this
_.f=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
dv:function dv(){},
h6:function h6(a,b){var _=this
_.a=a
_.b=b
_.e=_.d=_.c=null},
aT:function aT(a,b){var _=this
_.f=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
h8:function h8(a,b){var _=this
_.f=_.ch=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
h9:function h9(a,b){var _=this
_.f=_.ch=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
bY:function bY(){}},E={
mg:function(a,b){var u=new E.hB(a,b)
u.eN(a,b)
return u},
mk:function(a,b,c,d,e){var u,t,s,r
u=J.a0(a)
if(!!u.$ibJ)return E.kP(a,!0,!0,!0,!1)
t=W.kq(null,null)
s=t.style
s.width="100%"
s.height="100%"
u.gdr(a).h(0,t)
r=E.kP(t,!0,!0,!0,!1)
r.a=a
return r},
kP:function(a,b,c,d,e){var u,t,s,r,q,p,o,n,m,l,k
u=new E.dU()
t=H.k(C.p.ep(a,"webgl2",P.m2(["alpha",!0,"depth",!0,"stencil",!1,"antialias",!0])),"$ibV")
if(t==null)H.r(P.t("Failed to get the rendering context for WebGL."))
u.b=a
u.a=a
u.c=t
u.e=E.mg(t,a)
s=new T.i6(t)
s.b=H.ad((t&&C.b).cF(t,3379))
s.c=H.ad(C.b.cF(t,34076))
s.d=0
s.e=0
u.f=s
s=new X.e0(a)
r=new X.fT()
r.c=new X.ar(!1,!1,!1)
r.shE(P.dq(null,null,null,P.B))
s.b=r
r=new X.hg(s)
r.f=0
r.r=V.by()
r.x=V.by()
r.Q=1
r.ch=1
s.c=r
r=new X.fZ(s)
r.r=0
r.x=V.by()
r.Q=1
r.ch=1
r.cx=1
r.cy=1
s.d=r
r=new X.ib(s)
r.e=0
r.f=V.by()
r.r=V.by()
s.e=r
s.f=!1
s.r=!1
s.x=!1
s.y=null
s.sfp(H.c([],[[P.cx,P.L]]))
r=s.z
q=document
p=W.a7
o={func:1,ret:-1,args:[p]};(r&&C.a).h(r,W.ac(q,"contextmenu",H.n(s.gh2(),o),!1,p))
r=s.z
n=W.o
m={func:1,ret:-1,args:[n]};(r&&C.a).h(r,W.ac(a,"focus",H.n(s.gh8(),m),!1,n))
r=s.z;(r&&C.a).h(r,W.ac(a,"blur",H.n(s.gfV(),m),!1,n))
r=s.z
l=W.aS
k={func:1,ret:-1,args:[l]};(r&&C.a).h(r,W.ac(q,"keyup",H.n(s.ghc(),k),!1,l))
r=s.z;(r&&C.a).h(r,W.ac(q,"keydown",H.n(s.gha(),k),!1,l))
l=s.z;(l&&C.a).h(l,W.ac(a,"mousedown",H.n(s.ghg(),o),!1,p))
l=s.z;(l&&C.a).h(l,W.ac(a,"mouseup",H.n(s.ghk(),o),!1,p))
l=s.z;(l&&C.a).h(l,W.ac(a,"mousemove",H.n(s.ghi(),o),!1,p))
l=s.z
k=W.b4;(l&&C.a).h(l,W.ac(a,H.H(W.lV(a)),H.n(s.ghm(),{func:1,ret:-1,args:[k]}),!1,k))
k=s.z;(k&&C.a).h(k,W.ac(q,"mousemove",H.n(s.gh4(),o),!1,p))
k=s.z;(k&&C.a).h(k,W.ac(q,"mouseup",H.n(s.gh6(),o),!1,p))
p=s.z;(p&&C.a).h(p,W.ac(q,"pointerlockchange",H.n(s.gho(),m),!1,n))
n=s.z
m=W.aF
q={func:1,ret:-1,args:[m]};(n&&C.a).h(n,W.ac(a,"touchstart",H.n(s.ghB(),q),!1,m))
n=s.z;(n&&C.a).h(n,W.ac(a,"touchend",H.n(s.ghx(),q),!1,m))
n=s.z;(n&&C.a).h(n,W.ac(a,"touchmove",H.n(s.ghz(),q),!1,m))
u.r=s
u.Q=!0
u.ch=!1
u.cx=new P.ai(Date.now(),!1)
u.cy=0
u.dd()
return u},
f8:function f8(){},
aj:function aj(){var _=this
_.fx=_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
hB:function hB(a,b){var _=this
_.a=a
_.b=b
_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=null},
hC:function hC(a){this.a=a},
hD:function hD(a){this.a=a},
hE:function hE(a){this.a=a},
dU:function dU(){var _=this
_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
i7:function i7(a){this.a=a}},Z={
mm:function(a,b,c){var u
H.m(c,"$ib",[P.B],"$ab")
u=a.createBuffer()
C.b.al(a,b,u)
C.b.dq(a,b,new Int16Array(H.cV(c)),35044)
C.b.al(a,b,null)
return new Z.e4(b,u)},
az:function(a){return new Z.b3(a)},
e4:function e4(a,b){this.a=a
this.b=b},
d5:function d5(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
iM:function iM(a){this.a=a},
d6:function d6(a,b,c){var _=this
_.a=a
_.b=null
_.c=b
_.d=c},
cl:function cl(a,b,c){this.a=a
this.b=b
this.c=c},
b3:function b3(a){this.a=a}},D={
Q:function(){var u=new D.bL()
u.sab(null)
u.saI(null)
u.c=null
u.d=0
return u},
fb:function fb(){},
bL:function bL(){var _=this
_.d=_.c=_.b=_.a=null},
fv:function fv(a){this.a=a},
fw:function fw(a){this.a=a},
y:function y(a){this.a=a
this.b=null},
bO:function bO(a,b,c,d){var _=this
_.c=a
_.d=b
_.a=c
_.b=null
_.$ti=d},
bP:function bP(a,b,c,d){var _=this
_.c=a
_.d=b
_.a=c
_.b=null
_.$ti=d},
R:function R(a,b,c,d,e){var _=this
_.c=a
_.d=b
_.e=c
_.a=d
_.b=null
_.$ti=e},
bt:function bt(){var _=this
_.d=_.c=_.b=_.a=null},
a4:function a4(){},
dn:function dn(){var _=this
_.d=_.c=_.b=_.a=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=null},
dE:function dE(){},
dL:function dL(){},
dR:function dR(){},
dS:function dS(){},
dT:function dT(){}},X={d7:function d7(a,b){this.a=a
this.b=b},dm:function dm(a,b){this.a=a
this.b=b},fT:function fT(){var _=this
_.d=_.c=_.b=_.a=null},ds:function ds(a,b,c,d,e,f){var _=this
_.x=a
_.y=b
_.c=c
_.d=d
_.e=e
_.a=f
_.b=null},fZ:function fZ(a){var _=this
_.a=a
_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},ar:function ar(a,b,c){this.a=a
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
_.b=null},hg:function hg(a){var _=this
_.a=a
_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},co:function co(a,b,c,d,e){var _=this
_.x=a
_.c=b
_.d=c
_.e=d
_.a=e
_.b=null},hx:function hx(){},dW:function dW(a,b,c,d,e,f,g,h,i){var _=this
_.x=a
_.y=b
_.z=c
_.Q=d
_.ch=e
_.c=f
_.d=g
_.e=h
_.a=i
_.b=null},ib:function ib(a){var _=this
_.a=a
_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},e0:function e0(a){var _=this
_.a=a
_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},
lX:function(a,b,c,d,e,f,g){var u,t
u=new X.fG()
t=new V.b7(0,0,0,1)
u.a=t
u.b=!0
u.c=e
u.d=!0
u.e=g
u.f=!1
t=$.kL
if(t==null){t=V.kK(0,0,1,1)
$.kL=t}u.r=t
return u},
d8:function d8(){},
fG:function fG(){var _=this
_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
dD:function dD(){var _=this
_.f=_.e=_.d=_.c=_.b=_.a=null},
dP:function dP(){}},V={
nb:function(a,b,c){var u
if(c<=b)return b
u=c-b
a=C.d.ew(a-b,u)
return(a<0?a+u:a)+b},
a_:function(a,b,c){if(a==null)return C.j.ax("null",c)
return C.j.ax(C.d.ee(Math.abs(a-0)<$.P().a?0:a,b),c+b+1)},
c3:function(a,b,c){var u,t,s,r,q,p
H.m(a,"$ib",[P.z],"$ab")
u=H.c([],[P.f])
for(t=a.length,s=0,r=0;r<a.length;a.length===t||(0,H.E)(a),++r){q=V.a_(a[r],b,c)
s=Math.max(s,q.length)
C.a.h(u,q)}for(p=u.length-1;p>=0;--p){if(p>=u.length)return H.j(u,p)
C.a.Y(u,p,C.j.ax(u[p],s))}return u},
dx:function(){var u=$.kC
if(u==null){u=V.aU(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1)
$.kC=u}return u},
aU:function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){return new V.ak(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p)},
kB:function(a,b,c){var u,t,s,r,q,p,o,n
u=c.A(0,Math.sqrt(c.E(c)))
t=b.au(u)
s=t.A(0,Math.sqrt(t.E(t)))
r=u.au(s)
q=new V.U(a.a,a.b,a.c)
p=s.P(0).E(q)
o=r.P(0).E(q)
n=u.P(0).E(q)
return V.aU(s.a,r.a,u.a,p,s.b,r.b,u.b,o,s.c,r.c,u.c,n,0,0,0,1)},
by:function(){var u=$.kG
if(u==null){u=new V.a9(0,0)
$.kG=u}return u},
kH:function(){var u=$.cs
if(u==null){u=new V.aa(0,0,0)
$.cs=u}return u},
kK:function(a,b,c,d){if(c<0){a+=c
c=-c}if(d<0){b+=d
d=-d}return new V.dI(a,b,c,d)},
cI:function(){var u=$.kY
if(u==null){u=new V.U(0,0,0)
$.kY=u}return u},
kZ:function(){var u=$.kX
if(u==null){u=new V.U(0,1,0)
$.kX=u}return u},
l_:function(){var u=$.iz
if(u==null){u=new V.U(0,0,1)
$.iz=u}return u},
a1:function a1(a,b,c){this.a=a
this.b=b
this.c=c},
b7:function b7(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
ft:function ft(a){this.a=a},
dw:function dw(a,b,c,d,e,f,g,h,i){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.x=h
_.y=i},
ak:function ak(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){var _=this
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
a9:function a9(a,b){this.a=a
this.b=b},
aa:function aa(a,b,c){this.a=a
this.b=b
this.c=c},
dI:function dI(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
O:function O(a,b){this.a=a
this.b=b},
U:function U(a,b,c){this.a=a
this.b=b
this.c=c},
W:function(a,b){var u,t,s,r
if(a.length!==1||b.length!==1)throw H.h(P.t("The given low and high character strings for a RangeMatcher must have one and only one characters."))
u=C.j.aF(a,0)
t=C.j.aF(b,0)
s=new V.hz()
if(u>t){r=t
t=u
u=r}s.a=u
s.b=t
return s},
v:function(a){var u=new V.hJ()
u.eO(a)
return u},
ia:function(){var u,t
u=new V.i9()
t=P.f
u.si2(new H.aR([t,V.cw]))
u.si4(new H.aR([t,V.cz]))
u.c=null
return u},
b6:function b6(){},
aq:function aq(){},
dt:function dt(){},
al:function al(){this.a=null},
hz:function hz(){this.b=this.a=null},
hJ:function hJ(){this.a=null},
cw:function cw(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
dV:function dV(a,b,c){this.a=a
this.b=b
this.c=c},
cz:function cz(a,b){this.a=a
this.b=b
this.c=null},
i9:function i9(){this.c=this.b=this.a=null},
cA:function cA(a){this.b=a
this.a=this.c=null},
n6:function(a){P.ml(C.J,new V.jJ(a))},
mi:function(a,b){var u=new V.hN()
u.eQ(a,!0)
return u},
br:function br(){},
jJ:function jJ(a){this.a=a},
fj:function fj(a){var _=this
_.a=a
_.d=_.c=_.b=null},
fH:function fH(a){var _=this
_.a=a
_.d=_.c=_.b=null},
fI:function fI(a){var _=this
_.a=a
_.d=_.c=_.b=null},
hv:function hv(a){var _=this
_.a=a
_.d=_.c=_.b=null},
hN:function hN(){this.b=this.a=null},
hP:function hP(a){this.a=a},
hO:function hO(a){this.a=a},
hQ:function hQ(a){this.a=a}},U={
jR:function(){var u=new U.fc()
u.a=!0
u.b=1e12
u.c=-1e12
u.d=0
u.e=100
u.f=0
u.x=0
u.r=0
return u},
ks:function(a){var u=new U.d9()
u.a=a
return u},
fc:function fc(){var _=this
_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
d9:function d9(){this.b=this.a=null},
ck:function ck(){var _=this
_.d=_.c=_.b=_.a=_.r=_.f=_.e=null},
a8:function a8(){},
e1:function e1(){var _=this
_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
e2:function e2(){var _=this
_.fx=_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
e3:function e3(){var _=this
_.r=_.f=_.e=_.d=_.c=_.b=_.a=null}},M={de:function de(){var _=this
_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null}},A={
m4:function(a,b){var u,t
u=a.ae
t=new A.h4(b,u)
t.eP(b,u)
t.eM(a,b)
return t},
k0:function(a,b,c,d,e){var u=new A.ik(a,b,c,e)
u.f=d
u.sih(P.m3(d,0,!1,P.B))
return u},
d2:function d2(a,b,c){this.a=a
this.b=b
this.c=c},
f3:function f3(a){this.a=a},
h4:function h4(a,b){var _=this
_.bh=_.dC=_.bg=_.ae=_.am=_.y2=_.y1=_.x2=_.x1=_.ry=_.rx=_.r2=_.r1=_.k4=_.k3=_.k2=_.k1=_.id=_.go=_.fy=_.fx=_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=null
_.dS=_.cj=_.dR=_.bu=_.dQ=_.dP=_.bt=_.bs=_.dO=_.dN=_.br=_.bq=_.bp=_.dM=_.dL=_.bo=_.dK=_.dJ=_.bn=_.dI=_.dH=_.bm=_.bl=_.dG=_.dF=_.bk=_.bj=_.dE=_.dD=_.bi=null
_.co=_.dW=_.cn=_.dV=_.cm=_.dU=_.cl=_.dT=_.ck=null
_.a=a
_.b=b
_.y=_.x=_.r=_.f=_.e=_.d=_.c=null},
h7:function h7(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5){var _=this
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
_.bg=b5},
cB:function cB(a,b,c){this.a=a
this.b=b
this.c=c},
cF:function cF(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.x=h},
cD:function cD(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},
cG:function cG(a,b,c,d,e,f,g,h,i,j){var _=this
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
cE:function cE(a,b,c,d,e,f,g,h,i,j){var _=this
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
cH:function cH(a,b,c,d,e,f,g,h,i,j,k,l,m,n){var _=this
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
cv:function cv(){},
bK:function bK(a,b){this.a=a
this.b=b},
dX:function dX(){},
ir:function ir(a){this.a=a},
K:function K(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
im:function im(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
io:function io(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
iq:function iq(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
ik:function ik(a,b,c,d){var _=this
_.f=_.e=null
_.a=a
_.b=b
_.c=c
_.d=d},
Z:function Z(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
il:function il(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
I:function I(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
ip:function ip(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
is:function is(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
cC:function cC(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
at:function at(a,b,c,d){var _=this
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
na:function(a,b,c,d){return F.mK(c,a,d,b,new F.jK())},
mK:function(a,b,c,d,e){var u
H.n(e,{func:1,ret:V.aa,args:[P.z]})
P.aH("FLAG 1\n")
u=F.n8(a,b,new F.jy(e,d,b,c),null)
if(u==null)return
P.aH("FLAG 2\n")
u.aL()
P.aH("FLAG 3\n")
u.jr(new F.iF(),new F.hp())
P.aH("FLAG 4\n")
return u},
n8:function(a,b,c,d){var u,t,s,r,q,p,o,n,m,l,k,j,i,h
H.n(c,{func:1,ret:-1,args:[F.ay,P.z,P.z]})
if(a<1)return
if(b<1)return
u=new F.dK()
t=new F.iA(u)
t.b=!1
s=[F.ay]
t.sii(H.c([],s))
u.a=t
t=new F.hM(u)
t.sc0(H.c([],[F.bR]))
u.b=t
t=new F.hL(u)
t.sfC(H.c([],[F.bx]))
u.c=t
t=new F.hK(u)
t.sfq(H.c([],[F.a5]))
u.d=t
u.e=null
r=H.c([],s)
P.aH("FLAG A\n")
for(q=0;q<=b;++q){p=q/b
t=u.a
if(p<0)s=0
else s=p>1?1:p
t.toString
o=F.k1(null,null,new V.b7(s,0,0,1),null,null,new V.a9(p,1),null,null,0)
t.h(0,o)
c.$3(o,p,0)
C.a.h(r,o.dv(d))}P.aH("FLAG B\n")
for(q=1;q<=a;++q){n=q/a
for(t=n>1,s=n<0,m=1-n,l=0;l<=b;++l){p=l/b
k=u.a
if(p<0)j=0
else j=p>1?1:p
if(s)i=0
else i=t?1:n
if(s)h=0
else h=t?1:n
k.toString
o=F.k1(null,null,new V.b7(j,i,h,1),null,null,new V.a9(p,m),null,null,0)
k.h(0,o)
c.$3(o,p,n)
C.a.h(r,o.dv(d))}}P.aH("FLAG C\n")
u.d.iH(a+1,b+1,r)
P.aH("FLAG D\n")
return u},
fx:function(a,b,c){var u,t
u=new F.a5()
t=a.a
if(t==null)H.r(P.t("May not create a face with a first vertex which is not attached to a shape."))
if(t!=b.a||t!=c.a)H.r(P.t("May not create a face with vertices attached to different shapes."))
u.hU(a)
u.hV(b)
u.hW(c)
C.a.h(u.a.a.d.b,u)
u.a.a.a5()
return u},
k1:function(a,b,c,d,e,f,g,h,i){var u,t,s
u=new F.ay()
t=new F.iI(u)
t.sc0(H.c([],[F.bR]))
u.b=t
t=new F.iE(u)
s=[F.bx]
t.sfD(H.c([],s))
t.sfE(H.c([],s))
u.c=t
t=new F.iB(u)
s=[F.a5]
t.sfs(H.c([],s))
t.sft(H.c([],s))
t.sfu(H.c([],s))
u.d=t
h=$.lz()
u.e=0
t=$.bm()
s=h.a
u.f=(s&t.a)!==0?d:null
u.r=(s&$.bl().a)!==0?e:null
u.x=(s&$.bk().a)!==0?b:null
u.y=(s&$.bn().a)!==0?f:null
u.z=(s&$.bo().a)!==0?g:null
u.Q=(s&$.lA().a)!==0?c:null
u.ch=(s&$.c8().a)!==0?i:0
u.cx=(s&$.bj().a)!==0?a:null
return u},
jK:function jK(){},
jy:function jy(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
a5:function a5(){var _=this
_.e=_.d=_.c=_.b=_.a=null},
fy:function fy(){},
hR:function hR(){},
bx:function bx(){},
fV:function fV(){},
ij:function ij(){},
bR:function bR(){},
dK:function dK(){var _=this
_.e=_.d=_.c=_.b=_.a=null},
hK:function hK(a){this.a=a
this.b=null},
hL:function hL(a){this.a=a
this.b=null},
hM:function hM(a){this.a=a
this.b=null},
ay:function ay(){var _=this
_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
iK:function iK(a){this.a=a},
iJ:function iJ(a){this.a=a},
iA:function iA(a){this.a=a
this.c=this.b=null},
iB:function iB(a){var _=this
_.a=a
_.d=_.c=_.b=null},
iC:function iC(a,b){this.a=a
this.b=b},
iD:function iD(a,b){this.a=a
this.b=b},
iE:function iE(a){this.a=a
this.c=this.b=null},
iG:function iG(){},
iF:function iF(){},
iH:function iH(){},
hp:function hp(){},
iI:function iI(a){this.a=a
this.b=null}},T={dQ:function dQ(){},i6:function i6(a){var _=this
_.a=a
_.e=_.d=_.c=_.b=null}},Q={
li:function(){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
u=V.mi("Test 009",!0)
t=W.kq(null,null)
t.className="pageLargeCanvas"
t.id="testCanvas"
C.k.C(u.a,t)
s=[P.f]
u.dj(H.c(["Another test of the Material Lighting shader with solid color and ","a directional lighting. The light and object don't move but the camera can be ","moved around the object."],s))
u.dj(H.c(["\xab[Back to Tests|../]"],s))
r=C.y.eq(document,"testCanvas")
if(r==null)H.r(P.t("Failed to find an element with the identifier, testCanvas."))
q=E.mk(r,!0,!0,!0,!1)
p=new E.aj()
p.a=""
p.b=!0
s=E.aj
p.sfg(0,O.jQ(s))
p.y.b4(p.gjs(),p.gjv())
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
p.scI(0,null)
p.scI(0,F.na(30,1,15,0.5))
o=new O.du()
o.sfd(O.jQ(V.ak))
o.e.b4(o.gfR(),o.gfT())
n=new O.aT(o,"emission")
n.c=C.c
n.f=new V.a1(0,0,0)
o.f=n
n=new O.aT(o,"ambient")
n.c=C.c
n.f=new V.a1(0,0,0)
o.r=n
n=new O.aT(o,"diffuse")
n.c=C.c
n.f=new V.a1(0,0,0)
o.x=n
n=new O.aT(o,"invDiffuse")
n.c=C.c
n.f=new V.a1(0,0,0)
o.y=n
n=new O.h9(o,"specular")
n.c=C.c
n.f=new V.a1(0,0,0)
n.ch=100
o.z=n
n=new O.h6(o,"bump")
n.c=C.c
o.Q=n
o.ch=null
n=new O.aT(o,"reflect")
n.c=C.c
n.f=new V.a1(0,0,0)
o.cx=n
n=new O.h8(o,"refract")
n.c=C.c
n.f=new V.a1(0,0,0)
n.ch=1
o.cy=n
n=new O.h5(o,"alpha")
n.c=C.c
n.f=1
o.db=n
n=new D.dn()
n.bH(D.a4)
n.sfm(H.c([],[D.bt]))
n.shD(H.c([],[D.dE]))
n.si1(H.c([],[D.dL]))
n.sic(H.c([],[D.dR]))
n.sie(H.c([],[D.dS]))
n.sig(H.c([],[D.dT]))
n.Q=null
n.ch=null
n.cH(n.gfP(),n.ghr(),n.ghv())
o.dx=n
m=n.Q
if(m==null){m=D.Q()
n.Q=m
n=m}else n=m
n.h(0,o.ghO())
n=o.dx
m=n.ch
if(m==null){m=D.Q()
n.ch=m
n=m}else n=m
n.h(0,o.gfX())
o.dy=null
n=o.dx
l=V.kZ()
m=U.ks(V.kB(V.kH(),l,new V.U(-1,-1,-1)))
k=new V.a1(1,1,1)
j=new D.bt()
j.c=new V.a1(1,1,1)
j.a=V.l_()
i=j.b
j.b=m
m.gw().h(0,j.geV())
m=new D.R("mover",i,j.b,j,[U.a8])
m.b=!0
j.ap(m)
if(!j.c.v(0,k)){i=j.c
j.c=k
m=new D.R("color",i,k,j,[V.a1])
m.b=!0
j.ap(m)}n.h(0,j)
o.f.sad(0,new V.a1(0,0,0))
n=o.r
n.sad(0,new V.a1(0,0,1))
n=o.x
n.sad(0,new V.a1(0,1,0))
n=o.z
n.sad(0,new V.a1(1,0,0))
n=o.z
if(n.c===C.c){n.c=C.i
n.bG()
n.c3(100)
m=n.a
m.a=null
m.a6(null)}n.c3(10)
h=new U.ck()
h.bH(U.a8)
h.b4(h.gfN(),h.ght())
h.e=null
h.f=V.dx()
h.r=0
n=q.r
m=new U.e2()
j=U.jR()
j.scE(0,!0)
j.scs(6.283185307179586)
j.scu(0)
j.sa3(0,0)
j.sct(100)
j.sV(0)
j.scf(0.5)
m.b=j
g=m.gaD()
j.gw().h(0,g)
j=U.jR()
j.scE(0,!0)
j.scs(6.283185307179586)
j.scu(0)
j.sa3(0,0)
j.sct(100)
j.sV(0)
j.scf(0.5)
m.c=j
j.gw().h(0,g)
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
f=new X.ar(!1,!1,!1)
i=m.d
m.d=f
j=[X.ar]
g=new D.R("modifiers",i,f,m,j)
g.b=!0
m.M(g)
g=m.f
if(g!==!1){m.f=!1
g=new D.R("invertX",g,!1,m,[P.M])
g.b=!0
m.M(g)}g=m.r
if(g!==!0){m.r=!0
g=new D.R("invertY",g,!0,m,[P.M])
g.b=!0
m.M(g)}m.aX(n)
h.h(0,m)
n=q.r
m=new U.e1()
g=U.jR()
g.scE(0,!0)
g.scs(6.283185307179586)
g.scu(0)
g.sa3(0,0)
g.sct(100)
g.sV(0)
g.scf(0.2)
m.b=g
g.gw().h(0,m.gaD())
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
f=new X.ar(!0,!1,!1)
i=m.c
m.c=f
g=new D.R("modifiers",i,f,m,j)
g.b=!0
m.M(g)
m.aX(n)
h.h(0,m)
n=q.r
m=new U.e3()
m.c=0.01
m.d=0
m.e=0
f=new X.ar(!1,!1,!1)
m.b=f
j=new D.R("modifiers",null,f,m,j)
j.b=!0
m.M(j)
m.aX(n)
h.h(0,m)
h.h(0,U.ks(V.aU(1,0,0,0,0,1,0,0,0,0,1,5,0,0,0,1)))
n=new M.de()
n.seX(0,O.jQ(s))
n.d.b4(n.gfZ(),n.gh0())
n.e=null
n.f=null
n.r=null
n.x=null
e=X.lX(!0,!0,!1,null,2000,null,0)
d=new X.dD()
d.c=1.0471975511965976
d.d=0.1
d.e=2000
d.se1(null)
s=d.c
if(!(Math.abs(s-1.0471975511965976)<$.P().a)){d.c=1.0471975511965976
s=new D.R("fov",s,1.0471975511965976,d,[P.z])
s.b=!0
d.aE(s)}s=d.d
if(!(Math.abs(s-0.1)<$.P().a)){d.d=0.1
s=new D.R("near",s,0.1,d,[P.z])
s.b=!0
d.aE(s)}s=d.e
if(!(Math.abs(s-2000)<$.P().a)){d.e=2000
s=new D.R("far",s,2000,d,[P.z])
s.b=!0
d.aE(s)}s=n.a
if(s!==d){if(s!=null)s.gw().T(0,n.gah())
i=n.a
n.a=d
d.gw().h(0,n.gah())
s=new D.R("camera",i,n.a,n,[X.d8])
s.b=!0
n.aq(s)}s=n.b
if(s!==e){if(s!=null)s.gw().T(0,n.gah())
i=n.b
n.b=e
e.gw().h(0,n.gah())
s=new D.R("target",i,n.b,n,[X.dP])
s.b=!0
n.aq(s)}n.sec(null)
n.sec(o)
n.d.h(0,p)
n.a.se1(h)
s=q.d
if(s!==n){if(s!=null)s.gw().T(0,q.gcL())
q.d=n
n.gw().h(0,q.gcL())
q.cM()}s=q.z
if(s==null){s=D.Q()
q.z=s}n={func:1,ret:-1,args:[D.y]}
m=H.n(new Q.jG(u,o),n)
if(s.b==null)s.saI(H.c([],[n]))
s=s.b;(s&&C.a).h(s,m)
V.n6(q)},
jG:function jG(a,b){this.a=a
this.b=b}}
var w=[C,H,J,P,W,O,E,Z,D,X,V,U,M,A,F,T,Q]
hunkHelpers.setFunctionNamesIfNecessary(w)
var $={}
H.jV.prototype={}
J.a.prototype={
v:function(a,b){return a===b},
gI:function(a){return H.ct(a)},
i:function(a){return"Instance of '"+H.bT(a)+"'"}}
J.fP.prototype={
i:function(a){return String(a)},
gI:function(a){return a?519018:218159},
$iM:1}
J.dk.prototype={
v:function(a,b){return null==b},
i:function(a){return"null"},
gI:function(a){return 0},
$iJ:1}
J.dl.prototype={
gI:function(a){return 0},
i:function(a){return String(a)}}
J.hu.prototype={}
J.bA.prototype={}
J.ba.prototype={
i:function(a){var u=a[$.lo()]
if(u==null)return this.eH(a)
return"JavaScript function for "+H.l(J.aI(u))},
$S:function(){return{func:1,opt:[,,,,,,,,,,,,,,,,]}},
$ibv:1}
J.aC.prototype={
h:function(a,b){H.D(b,H.x(a,0))
if(!!a.fixed$length)H.r(P.au("add"))
a.push(b)},
jI:function(a,b){var u
if(!!a.fixed$length)H.r(P.au("removeAt"))
u=a.length
if(b>=u)throw H.h(P.dH(b,null,null))
return a.splice(b,1)[0]},
T:function(a,b){var u
if(!!a.fixed$length)H.r(P.au("remove"))
for(u=0;u<a.length;++u)if(J.Y(a[u],b)){a.splice(u,1)
return!0}return!1},
O:function(a,b){var u,t
H.n(b,{func:1,ret:-1,args:[H.x(a,0)]})
u=a.length
for(t=0;t<u;++t){b.$1(a[t])
if(a.length!==u)throw H.h(P.bs(a))}},
m:function(a,b){var u,t
u=new Array(a.length)
u.fixed$length=Array
for(t=0;t<a.length;++t)this.Y(u,t,H.l(a[t]))
return u.join(b)},
jm:function(a){return this.m(a,"")},
jg:function(a,b,c){var u,t,s
H.n(b,{func:1,ret:P.M,args:[H.x(a,0)]})
u=a.length
for(t=0;t<u;++t){s=a[t]
if(b.$1(s))return s
if(a.length!==u)throw H.h(P.bs(a))}throw H.h(H.fN())},
jf:function(a,b){return this.jg(a,b,null)},
F:function(a,b){if(b<0||b>=a.length)return H.j(a,b)
return a[b]},
eE:function(a,b,c){var u=a.length
if(b>u)throw H.h(P.ax(b,0,a.length,"start",null))
if(c<b||c>a.length)throw H.h(P.ax(c,b,a.length,"end",null))
if(b===c)return H.c([],[H.x(a,0)])
return H.c(a.slice(b,c),[H.x(a,0)])},
gje:function(a){if(a.length>0)return a[0]
throw H.h(H.fN())},
gbv:function(a){var u=a.length
if(u>0)return a[u-1]
throw H.h(H.fN())},
eB:function(a,b,c,d,e){var u,t,s
u=H.x(a,0)
H.m(d,"$ie",[u],"$ae")
if(!!a.immutable$list)H.r(P.au("setRange"))
P.jY(b,c,a.length,null,null,null)
t=c-b
if(t===0)return
H.m(d,"$ib",[u],"$ab")
u=J.jA(d)
if(e+t>u.gl(d))throw H.h(H.lZ())
if(e<b)for(s=t-1;s>=0;--s)a[b+s]=u.j(d,e+s)
else for(s=0;s<t;++s)a[b+s]=u.j(d,e+s)},
b5:function(a,b,c,d){return this.eB(a,b,c,d,0)},
dk:function(a,b){var u,t
H.n(b,{func:1,ret:P.M,args:[H.x(a,0)]})
u=a.length
for(t=0;t<u;++t){if(b.$1(a[t]))return!0
if(a.length!==u)throw H.h(P.bs(a))}return!1},
X:function(a,b){var u
for(u=0;u<a.length;++u)if(J.Y(a[u],b))return!0
return!1},
i:function(a){return P.jT(a,"[","]")},
gS:function(a){return new J.ap(a,a.length,0,[H.x(a,0)])},
gI:function(a){return H.ct(a)},
gl:function(a){return a.length},
sl:function(a,b){if(!!a.fixed$length)H.r(P.au("set length"))
if(b<0)throw H.h(P.ax(b,0,null,"newLength",null))
a.length=b},
j:function(a,b){if(b>=a.length||b<0)throw H.h(H.c2(a,b))
return a[b]},
Y:function(a,b,c){H.D(c,H.x(a,0))
if(!!a.immutable$list)H.r(P.au("indexed set"))
if(b>=a.length||b<0)throw H.h(H.c2(a,b))
a[b]=c},
p:function(a,b){var u,t
u=[H.x(a,0)]
H.m(b,"$ib",u,"$ab")
t=C.h.p(a.length,b.gl(b))
u=H.c([],u)
this.sl(u,t)
this.b5(u,0,a.length,a)
this.b5(u,a.length,t,b)
return u},
$ie:1,
$ib:1}
J.jU.prototype={}
J.ap.prototype={
gH:function(a){return this.d},
B:function(){var u,t,s
u=this.a
t=u.length
if(this.b!==t)throw H.h(H.E(u))
s=this.c
if(s>=t){this.sd1(null)
return!1}this.sd1(u[s]);++this.c
return!0},
sd1:function(a){this.d=H.D(a,H.x(this,0))},
$iaQ:1}
J.bw.prototype={
dX:function(a){var u,t
if(a>=0){if(a<=2147483647)return a|0}else if(a>=-2147483648){u=a|0
return a===u?u:u-1}t=Math.floor(a)
if(isFinite(t))return t
throw H.h(P.au(""+a+".floor()"))},
af:function(a){if(a>0){if(a!==1/0)return Math.round(a)}else if(a>-1/0)return 0-Math.round(0-a)
throw H.h(P.au(""+a+".round()"))},
ee:function(a,b){var u,t
if(b>20)throw H.h(P.ax(b,0,20,"fractionDigits",null))
u=a.toFixed(b)
if(a===0)t=1/a<0
else t=!1
if(t)return"-"+u
return u},
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
p:function(a,b){if(typeof b!=="number")throw H.h(H.bh(b))
return a+b},
q:function(a,b){if(typeof b!=="number")throw H.h(H.bh(b))
return a-b},
u:function(a,b){if(typeof b!=="number")throw H.h(H.bh(b))
return a*b},
ew:function(a,b){var u=a%b
if(u===0)return 0
if(u>0)return u
if(b<0)return u-b
else return u+b},
eL:function(a,b){if((a|0)===a)if(b>=1||b<-1)return a/b|0
return this.df(a,b)},
a_:function(a,b){return(a|0)===a?a/b|0:this.df(a,b)},
df:function(a,b){var u=a/b
if(u>=-2147483648&&u<=2147483647)return u|0
if(u>0){if(u!==1/0)return Math.floor(u)}else if(u>-1/0)return Math.ceil(u)
throw H.h(P.au("Result of truncating division is "+H.l(u)+": "+H.l(a)+" ~/ "+b))},
bb:function(a,b){var u
if(a>0)u=this.i0(a,b)
else{u=b>31?31:b
u=a>>u>>>0}return u},
i0:function(a,b){return b>31?0:a>>>b},
$iz:1,
$ia3:1}
J.dj.prototype={$iB:1}
J.fQ.prototype={}
J.b9.prototype={
ce:function(a,b){if(b<0)throw H.h(H.c2(a,b))
if(b>=a.length)H.r(H.c2(a,b))
return a.charCodeAt(b)},
aF:function(a,b){if(b>=a.length)throw H.h(H.c2(a,b))
return a.charCodeAt(b)},
p:function(a,b){if(typeof b!=="string")throw H.h(P.jO(b,null,null))
return a+b},
eD:function(a,b,c){var u
if(c>a.length)throw H.h(P.ax(c,0,a.length,null,null))
u=c+b.length
if(u>a.length)return!1
return b===a.substring(c,u)},
bE:function(a,b){return this.eD(a,b,0)},
b7:function(a,b,c){if(c==null)c=a.length
if(b<0)throw H.h(P.dH(b,null,null))
if(b>c)throw H.h(P.dH(b,null,null))
if(c>a.length)throw H.h(P.dH(c,null,null))
return a.substring(b,c)},
b6:function(a,b){return this.b7(a,b,null)},
jV:function(a){return a.toLowerCase()},
u:function(a,b){var u,t
if(0>=b)return""
if(b===1||a.length===0)return a
if(b!==b>>>0)throw H.h(C.G)
for(u=a,t="";!0;){if((b&1)===1)t=u+t
b=b>>>1
if(b===0)break
u+=u}return t},
jy:function(a,b,c){var u=b-a.length
if(u<=0)return a
return this.u(c,u)+a},
ax:function(a,b){return this.jy(a,b," ")},
i:function(a){return a},
gI:function(a){var u,t,s
for(u=a.length,t=0,s=0;s<u;++s){t=536870911&t+a.charCodeAt(s)
t=536870911&t+((524287&t)<<10)
t^=t>>6}t=536870911&t+((67108863&t)<<3)
t^=t>>11
return 536870911&t+((16383&t)<<15)},
gl:function(a){return a.length},
$ikE:1,
$if:1}
H.q.prototype={
gl:function(a){return this.a.length},
j:function(a,b){return C.j.ce(this.a,b)},
$ae_:function(){return[P.B]},
$aw:function(){return[P.B]},
$ae:function(){return[P.B]},
$ab:function(){return[P.B]}}
H.fq.prototype={}
H.bQ.prototype={
gS:function(a){return new H.cm(this,this.gl(this),0,[H.ao(this,"bQ",0)])},
bB:function(a,b){return this.eG(0,H.n(b,{func:1,ret:P.M,args:[H.ao(this,"bQ",0)]}))}}
H.cm.prototype={
gH:function(a){return this.d},
B:function(){var u,t,s,r
u=this.a
t=J.jA(u)
s=t.gl(u)
if(this.b!==s)throw H.h(P.bs(u))
r=this.c
if(r>=s){this.saT(null)
return!1}this.saT(t.F(u,r));++this.c
return!0},
saT:function(a){this.d=H.D(a,H.x(this,0))},
$iaQ:1}
H.h1.prototype={
gS:function(a){return new H.h2(J.bG(this.a),this.b,this.$ti)},
gl:function(a){return J.bH(this.a)},
F:function(a,b){return this.b.$1(J.jM(this.a,b))},
$ae:function(a,b){return[b]}}
H.h2.prototype={
B:function(){var u=this.b
if(u.B()){this.saT(this.c.$1(u.gH(u)))
return!0}this.saT(null)
return!1},
gH:function(a){return this.a},
saT:function(a){this.a=H.D(a,H.x(this,1))},
$aaQ:function(a,b){return[b]}}
H.h3.prototype={
gl:function(a){return J.bH(this.a)},
F:function(a,b){return this.b.$1(J.jM(this.a,b))},
$abQ:function(a,b){return[b]},
$ae:function(a,b){return[b]}}
H.cJ.prototype={
gS:function(a){return new H.iN(J.bG(this.a),this.b,this.$ti)}}
H.iN.prototype={
B:function(){var u,t
for(u=this.a,t=this.b;u.B();)if(t.$1(u.gH(u)))return!0
return!1},
gH:function(a){var u=this.a
return u.gH(u)}}
H.bM.prototype={}
H.e_.prototype={}
H.dZ.prototype={}
H.hA.prototype={}
H.ig.prototype={
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
H.hq.prototype={
i:function(a){var u=this.b
if(u==null)return"NoSuchMethodError: "+H.l(this.a)
return"NoSuchMethodError: method not found: '"+u+"' on null"}}
H.fS.prototype={
i:function(a){var u,t
u=this.b
if(u==null)return"NoSuchMethodError: "+H.l(this.a)
t=this.c
if(t==null)return"NoSuchMethodError: method not found: '"+u+"' ("+H.l(this.a)+")"
return"NoSuchMethodError: method not found: '"+u+"' on '"+t+"' ("+H.l(this.a)+")"}}
H.iu.prototype={
i:function(a){var u=this.a
return u.length===0?"Error":"Error: "+u}}
H.jL.prototype={
$1:function(a){if(!!J.a0(a).$ibu)if(a.$thrownJsError==null)a.$thrownJsError=this.a
return a},
$S:16}
H.eD.prototype={
i:function(a){var u,t
u=this.b
if(u!=null)return u
u=this.a
t=u!==null&&typeof u==="object"?u.stack:null
u=t==null?"":t
this.b=u
return u},
$iam:1}
H.cc.prototype={
i:function(a){return"Closure '"+H.bT(this).trim()+"'"},
$ibv:1,
gjY:function(){return this},
$C:"$1",
$R:1,
$D:null}
H.i3.prototype={}
H.hV.prototype={
i:function(a){var u=this.$static_name
if(u==null)return"Closure of unknown static method"
return"Closure '"+H.c7(u)+"'"}}
H.ca.prototype={
v:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof H.ca))return!1
return this.a===b.a&&this.b===b.b&&this.c===b.c},
gI:function(a){var u,t
u=this.c
if(u==null)t=H.ct(this.a)
else t=typeof u!=="object"?J.bF(u):H.ct(u)
return(t^H.ct(this.b))>>>0},
i:function(a){var u=this.c
if(u==null)u=this.a
return"Closure '"+H.l(this.d)+"' of "+("Instance of '"+H.bT(u)+"'")}}
H.ii.prototype={
i:function(a){return this.a}}
H.fa.prototype={
i:function(a){return this.a}}
H.hH.prototype={
i:function(a){return"RuntimeError: "+H.l(this.a)}}
H.aR.prototype={
gl:function(a){return this.a},
ga2:function(a){return new H.dp(this,[H.x(this,0)])},
du:function(a,b){var u,t
if(typeof b==="string"){u=this.b
if(u==null)return!1
return this.cZ(u,b)}else if(typeof b==="number"&&(b&0x3ffffff)===b){t=this.c
if(t==null)return!1
return this.cZ(t,b)}else return this.jk(b)},
jk:function(a){var u=this.d
if(u==null)return!1
return this.cp(this.bO(u,J.bF(a)&0x3ffffff),a)>=0},
j:function(a,b){var u,t,s,r
if(typeof b==="string"){u=this.b
if(u==null)return
t=this.b9(u,b)
s=t==null?null:t.b
return s}else if(typeof b==="number"&&(b&0x3ffffff)===b){r=this.c
if(r==null)return
t=this.b9(r,b)
s=t==null?null:t.b
return s}else return this.jl(b)},
jl:function(a){var u,t,s
u=this.d
if(u==null)return
t=this.bO(u,J.bF(a)&0x3ffffff)
s=this.cp(t,a)
if(s<0)return
return t[s].b},
Y:function(a,b,c){var u,t,s,r,q,p
H.D(b,H.x(this,0))
H.D(c,H.x(this,1))
if(typeof b==="string"){u=this.b
if(u==null){u=this.bZ()
this.b=u}this.cQ(u,b,c)}else if(typeof b==="number"&&(b&0x3ffffff)===b){t=this.c
if(t==null){t=this.bZ()
this.c=t}this.cQ(t,b,c)}else{s=this.d
if(s==null){s=this.bZ()
this.d=s}r=J.bF(b)&0x3ffffff
q=this.bO(s,r)
if(q==null)this.c4(s,r,[this.c_(b,c)])
else{p=this.cp(q,b)
if(p>=0)q[p].b=c
else q.push(this.c_(b,c))}}},
O:function(a,b){var u,t
H.n(b,{func:1,ret:-1,args:[H.x(this,0),H.x(this,1)]})
u=this.e
t=this.r
for(;u!=null;){b.$2(u.a,u.b)
if(t!==this.r)throw H.h(P.bs(this))
u=u.c}},
cQ:function(a,b,c){var u
H.D(b,H.x(this,0))
H.D(c,H.x(this,1))
u=this.b9(a,b)
if(u==null)this.c4(a,b,this.c_(b,c))
else u.b=c},
fK:function(){this.r=this.r+1&67108863},
c_:function(a,b){var u,t
u=new H.fW(H.D(a,H.x(this,0)),H.D(b,H.x(this,1)))
if(this.e==null){this.f=u
this.e=u}else{t=this.f
u.d=t
t.c=u
this.f=u}++this.a
this.fK()
return u},
cp:function(a,b){var u,t
if(a==null)return-1
u=a.length
for(t=0;t<u;++t)if(J.Y(a[t].a,b))return t
return-1},
i:function(a){return P.kA(this)},
b9:function(a,b){return a[b]},
bO:function(a,b){return a[b]},
c4:function(a,b,c){a[b]=c},
fl:function(a,b){delete a[b]},
cZ:function(a,b){return this.b9(a,b)!=null},
bZ:function(){var u=Object.create(null)
this.c4(u,"<non-identifier-key>",u)
this.fl(u,"<non-identifier-key>")
return u}}
H.fW.prototype={}
H.dp.prototype={
gl:function(a){return this.a.a},
gS:function(a){var u,t
u=this.a
t=new H.fX(u,u.r,this.$ti)
t.c=u.e
return t}}
H.fX.prototype={
gH:function(a){return this.d},
B:function(){var u=this.a
if(this.b!==u.r)throw H.h(P.bs(u))
else{u=this.c
if(u==null){this.scP(null)
return!1}else{this.scP(u.a)
this.c=this.c.c
return!0}}},
scP:function(a){this.d=H.D(a,H.x(this,0))},
$iaQ:1}
H.jC.prototype={
$1:function(a){return this.a(a)},
$S:16}
H.jD.prototype={
$2:function(a,b){return this.a(a,b)},
$S:38}
H.jE.prototype={
$1:function(a){return this.a(H.H(a))},
$S:37}
H.fR.prototype={
i:function(a){return"RegExp/"+this.a+"/"},
$ikE:1}
H.cq.prototype={}
H.dy.prototype={
gl:function(a){return a.length},
$iF:1,
$aF:function(){}}
H.cp.prototype={
j:function(a,b){H.bC(b,a,a.length)
return a[b]},
$abM:function(){return[P.z]},
$aw:function(){return[P.z]},
$ie:1,
$ae:function(){return[P.z]},
$ib:1,
$ab:function(){return[P.z]}}
H.dz.prototype={
$abM:function(){return[P.B]},
$aw:function(){return[P.B]},
$ie:1,
$ae:function(){return[P.B]},
$ib:1,
$ab:function(){return[P.B]}}
H.hh.prototype={
j:function(a,b){H.bC(b,a,a.length)
return a[b]}}
H.hi.prototype={
j:function(a,b){H.bC(b,a,a.length)
return a[b]}}
H.hj.prototype={
j:function(a,b){H.bC(b,a,a.length)
return a[b]}}
H.hk.prototype={
j:function(a,b){H.bC(b,a,a.length)
return a[b]}}
H.hl.prototype={
j:function(a,b){H.bC(b,a,a.length)
return a[b]}}
H.dA.prototype={
gl:function(a){return a.length},
j:function(a,b){H.bC(b,a,a.length)
return a[b]}}
H.hm.prototype={
gl:function(a){return a.length},
j:function(a,b){H.bC(b,a,a.length)
return a[b]}}
H.cN.prototype={}
H.cO.prototype={}
H.cP.prototype={}
H.cQ.prototype={}
P.iP.prototype={
$1:function(a){var u,t
u=this.a
t=u.a
u.a=null
t.$0()},
$S:12}
P.iO.prototype={
$1:function(a){var u,t
this.a.a=H.n(a,{func:1,ret:-1})
u=this.b
t=this.c
u.firstChild?u.removeChild(t):u.appendChild(t)},
$S:42}
P.iQ.prototype={
$0:function(){this.a.$0()},
$S:2}
P.iR.prototype={
$0:function(){this.a.$0()},
$S:2}
P.eJ.prototype={
f5:function(a,b){if(self.setTimeout!=null)this.b=self.setTimeout(H.c1(new P.jq(this,b),0),a)
else throw H.h(P.au("`setTimeout()` not found."))},
f6:function(a,b){if(self.setTimeout!=null)this.b=self.setInterval(H.c1(new P.jp(this,a,Date.now(),b),0),a)
else throw H.h(P.au("Periodic timer."))},
$ib0:1}
P.jq.prototype={
$0:function(){var u=this.a
u.b=null
u.c=1
this.b.$0()},
$S:3}
P.jp.prototype={
$0:function(){var u,t,s,r
u=this.a
t=u.c+1
s=this.b
if(s>0){r=Date.now()-this.c
if(r>(t+1)*s)t=C.h.eL(r,s)}u.c=t
this.d.$1(u)},
$S:2}
P.b5.prototype={
jp:function(a){if(this.c!==6)return!0
return this.b.b.cC(H.n(this.d,{func:1,ret:P.M,args:[P.L]}),a.a,P.M,P.L)},
jj:function(a){var u,t,s,r
u=this.e
t=P.L
s={futureOr:1,type:H.x(this,1)}
r=this.b.b
if(H.eZ(u,{func:1,args:[P.L,P.am]}))return H.kb(r.jO(u,a.a,a.b,null,t,P.am),s)
else return H.kb(r.cC(H.n(u,{func:1,args:[P.L]}),a.a,null,t),s)}}
P.aA.prototype={
ed:function(a,b,c){var u,t,s,r
u=H.x(this,0)
H.n(a,{func:1,ret:{futureOr:1,type:c},args:[u]})
t=$.X
if(t!==C.l){t.toString
H.n(a,{func:1,ret:{futureOr:1,type:c},args:[u]})
if(b!=null)b=P.mC(b,t)}H.n(a,{func:1,ret:{futureOr:1,type:c},args:[u]})
s=new P.aA(0,$.X,[c])
r=b==null?1:3
this.cR(new P.b5(s,r,a,b,[u,c]))
return s},
jS:function(a,b){return this.ed(a,null,b)},
cR:function(a){var u,t
u=this.a
if(u<=1){a.a=H.k(this.c,"$ib5")
this.c=a}else{if(u===2){t=H.k(this.c,"$iaA")
u=t.a
if(u<4){t.cR(a)
return}this.a=u
this.c=t.c}u=this.b
u.toString
P.jw(null,null,u,H.n(new P.iZ(this,a),{func:1,ret:-1}))}},
da:function(a){var u,t,s,r,q,p
u={}
u.a=a
if(a==null)return
t=this.a
if(t<=1){s=H.k(this.c,"$ib5")
this.c=a
if(s!=null){for(r=a;q=r.a,q!=null;r=q);r.a=s}}else{if(t===2){p=H.k(this.c,"$iaA")
t=p.a
if(t<4){p.da(a)
return}this.a=t
this.c=p.c}u.a=this.ba(a)
t=this.b
t.toString
P.jw(null,null,t,H.n(new P.j2(u,this),{func:1,ret:-1}))}},
c2:function(){var u=H.k(this.c,"$ib5")
this.c=null
return this.ba(u)},
ba:function(a){var u,t,s
for(u=a,t=null;u!=null;t=u,u=s){s=u.a
u.a=t}return t},
cV:function(a){var u,t,s
u=H.x(this,0)
H.kb(a,{futureOr:1,type:u})
t=this.$ti
if(H.cY(a,"$icj",t,"$acj"))if(H.cY(a,"$iaA",t,null))P.l0(a,this)
else P.mr(a,this)
else{s=this.c2()
H.D(a,u)
this.a=4
this.c=a
P.cM(this,s)}},
cW:function(a,b){var u
H.k(b,"$iam")
u=this.c2()
this.a=8
this.c=new P.ae(a,b)
P.cM(this,u)},
$icj:1}
P.iZ.prototype={
$0:function(){P.cM(this.a,this.b)},
$S:2}
P.j2.prototype={
$0:function(){P.cM(this.b,this.a.a)},
$S:2}
P.j_.prototype={
$1:function(a){var u=this.a
u.a=0
u.cV(a)},
$S:12}
P.j0.prototype={
$2:function(a,b){H.k(b,"$iam")
this.a.cW(a,b)},
$1:function(a){return this.$2(a,null)},
$S:32}
P.j1.prototype={
$0:function(){this.a.cW(this.b,this.c)},
$S:2}
P.j5.prototype={
$0:function(){var u,t,s,r,q,p,o
u=null
try{r=this.c
u=r.b.b.eb(H.n(r.d,{func:1}),null)}catch(q){t=H.av(q)
s=H.c5(q)
if(this.d){r=H.k(this.a.a.c,"$iae").a
p=t
p=r==null?p==null:r===p
r=p}else r=!1
p=this.b
if(r)p.b=H.k(this.a.a.c,"$iae")
else p.b=new P.ae(t,s)
p.a=!0
return}if(!!J.a0(u).$icj){if(u instanceof P.aA&&u.a>=4){if(u.a===8){r=this.b
r.b=H.k(u.c,"$iae")
r.a=!0}return}o=this.a.a
r=this.b
r.b=u.jS(new P.j6(o),null)
r.a=!1}},
$S:3}
P.j6.prototype={
$1:function(a){return this.a},
$S:31}
P.j4.prototype={
$0:function(){var u,t,s,r,q,p,o
try{s=this.b
r=H.x(s,0)
q=H.D(this.c,r)
p=H.x(s,1)
this.a.b=s.b.b.cC(H.n(s.d,{func:1,ret:{futureOr:1,type:p},args:[r]}),q,{futureOr:1,type:p},r)}catch(o){u=H.av(o)
t=H.c5(o)
s=this.a
s.b=new P.ae(u,t)
s.a=!0}},
$S:3}
P.j3.prototype={
$0:function(){var u,t,s,r,q,p,o,n
try{u=H.k(this.a.a.c,"$iae")
r=this.c
if(r.jp(u)&&r.e!=null){q=this.b
q.b=r.jj(u)
q.a=!1}}catch(p){t=H.av(p)
s=H.c5(p)
r=H.k(this.a.a.c,"$iae")
q=r.a
o=t
n=this.b
if(q==null?o==null:q===o)n.b=r
else n.b=new P.ae(t,s)
n.a=!0}},
$S:3}
P.e5.prototype={}
P.hY.prototype={
gl:function(a){var u,t,s,r
u={}
t=new P.aA(0,$.X,[P.B])
u.a=0
s=H.x(this,0)
r=H.n(new P.i_(u,this),{func:1,ret:-1,args:[s]})
H.n(new P.i0(u,t),{func:1,ret:-1})
W.ac(this.a,this.b,r,!1,s)
return t}}
P.i_.prototype={
$1:function(a){H.D(a,H.x(this.b,0));++this.a.a},
$S:function(){return{func:1,ret:P.J,args:[H.x(this.b,0)]}}}
P.i0.prototype={
$0:function(){this.b.cV(this.a.a)},
$S:2}
P.cx.prototype={}
P.hZ.prototype={}
P.b0.prototype={}
P.ae.prototype={
i:function(a){return H.l(this.a)},
$ibu:1}
P.jt.prototype={$inJ:1}
P.jv.prototype={
$0:function(){var u,t,s
u=this.a
t=u.a
if(t==null){s=new P.dC()
u.a=s
u=s}else u=t
t=this.b
if(t==null)throw H.h(u)
s=H.h(u)
s.stack=t.i(0)
throw s},
$S:2}
P.jc.prototype={
jP:function(a){var u,t,s
H.n(a,{func:1,ret:-1})
try{if(C.l===$.X){a.$0()
return}P.l6(null,null,this,a,-1)}catch(s){u=H.av(s)
t=H.c5(s)
P.ju(null,null,this,u,H.k(t,"$iam"))}},
jQ:function(a,b,c){var u,t,s
H.n(a,{func:1,ret:-1,args:[c]})
H.D(b,c)
try{if(C.l===$.X){a.$1(b)
return}P.l7(null,null,this,a,b,-1,c)}catch(s){u=H.av(s)
t=H.c5(s)
P.ju(null,null,this,u,H.k(t,"$iam"))}},
iN:function(a,b){return new P.je(this,H.n(a,{func:1,ret:b}),b)},
c9:function(a){return new P.jd(this,H.n(a,{func:1,ret:-1}))},
dm:function(a,b){return new P.jf(this,H.n(a,{func:1,ret:-1,args:[b]}),b)},
eb:function(a,b){H.n(a,{func:1,ret:b})
if($.X===C.l)return a.$0()
return P.l6(null,null,this,a,b)},
cC:function(a,b,c,d){H.n(a,{func:1,ret:c,args:[d]})
H.D(b,d)
if($.X===C.l)return a.$1(b)
return P.l7(null,null,this,a,b,c,d)},
jO:function(a,b,c,d,e,f){H.n(a,{func:1,ret:d,args:[e,f]})
H.D(b,e)
H.D(c,f)
if($.X===C.l)return a.$2(b,c)
return P.mD(null,null,this,a,b,c,d,e,f)}}
P.je.prototype={
$0:function(){return this.a.eb(this.b,this.c)},
$S:function(){return{func:1,ret:this.c}}}
P.jd.prototype={
$0:function(){return this.a.jP(this.b)},
$S:3}
P.jf.prototype={
$1:function(a){var u=this.c
return this.a.jQ(this.b,H.D(a,u),u)},
$S:function(){return{func:1,ret:-1,args:[this.c]}}}
P.ja.prototype={
gS:function(a){var u=new P.ek(this,this.r,this.$ti)
u.c=this.e
return u},
gl:function(a){return this.a},
X:function(a,b){var u,t
if(typeof b==="string"&&b!=="__proto__"){u=this.b
if(u==null)return!1
return H.k(u[b],"$ibZ")!=null}else{t=this.fh(b)
return t}},
fh:function(a){var u=this.d
if(u==null)return!1
return this.bM(this.d2(u,a),a)>=0},
h:function(a,b){var u,t
H.D(b,H.x(this,0))
if(typeof b==="string"&&b!=="__proto__"){u=this.b
if(u==null){u=P.k3()
this.b=u}return this.cS(u,b)}else if(typeof b==="number"&&(b&1073741823)===b){t=this.c
if(t==null){t=P.k3()
this.c=t}return this.cS(t,b)}else return this.f8(0,b)},
f8:function(a,b){var u,t,s
H.D(b,H.x(this,0))
u=this.d
if(u==null){u=P.k3()
this.d=u}t=this.cX(b)
s=u[t]
if(s==null)u[t]=[this.bJ(b)]
else{if(this.bM(s,b)>=0)return!1
s.push(this.bJ(b))}return!0},
T:function(a,b){if(typeof b==="number"&&(b&1073741823)===b)return this.hI(this.c,b)
else return this.hF(0,b)},
hF:function(a,b){var u,t,s
u=this.d
if(u==null)return!1
t=this.d2(u,b)
s=this.bM(t,b)
if(s<0)return!1
this.dg(t.splice(s,1)[0])
return!0},
cS:function(a,b){H.D(b,H.x(this,0))
if(H.k(a[b],"$ibZ")!=null)return!1
a[b]=this.bJ(b)
return!0},
hI:function(a,b){var u
if(a==null)return!1
u=H.k(a[b],"$ibZ")
if(u==null)return!1
this.dg(u)
delete a[b]
return!0},
cU:function(){this.r=1073741823&this.r+1},
bJ:function(a){var u,t
u=new P.bZ(H.D(a,H.x(this,0)))
if(this.e==null){this.f=u
this.e=u}else{t=this.f
u.c=t
t.b=u
this.f=u}++this.a
this.cU()
return u},
dg:function(a){var u,t
u=a.c
t=a.b
if(u==null)this.e=t
else u.b=t
if(t==null)this.f=u
else t.c=u;--this.a
this.cU()},
cX:function(a){return J.bF(a)&1073741823},
d2:function(a,b){return a[this.cX(b)]},
bM:function(a,b){var u,t
if(a==null)return-1
u=a.length
for(t=0;t<u;++t)if(J.Y(a[t].a,b))return t
return-1}}
P.bZ.prototype={}
P.ek.prototype={
gH:function(a){return this.d},
B:function(){var u=this.a
if(this.b!==u.r)throw H.h(P.bs(u))
else{u=this.c
if(u==null){this.scT(null)
return!1}else{this.scT(H.D(u.a,H.x(this,0)))
this.c=this.c.b
return!0}}},
scT:function(a){this.d=H.D(a,H.x(this,0))},
$iaQ:1}
P.fY.prototype={$ie:1,$ib:1}
P.w.prototype={
gS:function(a){return new H.cm(a,this.gl(a),0,[H.c4(this,a,"w",0)])},
F:function(a,b){return this.j(a,b)},
jU:function(a,b){var u,t
u=H.c([],[H.c4(this,a,"w",0)])
C.a.sl(u,this.gl(a))
for(t=0;t<this.gl(a);++t)C.a.Y(u,t,this.j(a,t))
return u},
jT:function(a){return this.jU(a,!0)},
p:function(a,b){var u,t
u=[H.c4(this,a,"w",0)]
H.m(b,"$ib",u,"$ab")
t=H.c([],u)
C.a.sl(t,C.h.p(this.gl(a),b.gl(b)))
C.a.b5(t,0,this.gl(a),a)
C.a.b5(t,this.gl(a),t.length,b)
return t},
i:function(a){return P.jT(a,"[","]")}}
P.h_.prototype={}
P.h0.prototype={
$2:function(a,b){var u,t
u=this.a
if(!u.a)this.b.a+=", "
u.a=!1
u=this.b
t=u.a+=H.l(a)
u.a=t+": "
u.a+=H.l(b)},
$S:13}
P.a6.prototype={
O:function(a,b){var u,t
H.n(b,{func:1,ret:-1,args:[H.c4(this,a,"a6",0),H.c4(this,a,"a6",1)]})
for(u=J.bG(this.ga2(a));u.B();){t=u.gH(u)
b.$2(t,this.j(a,t))}},
gl:function(a){return J.bH(this.ga2(a))},
i:function(a){return P.kA(a)},
$iN:1}
P.jh.prototype={
aj:function(a,b){var u
for(u=J.bG(H.m(b,"$ie",this.$ti,"$ae"));u.B();)this.h(0,u.gH(u))},
i:function(a){return P.jT(this,"{","}")},
F:function(a,b){var u,t,s
if(b<0)H.r(P.ax(b,0,null,"index",null))
for(u=P.mv(this,this.r,H.x(this,0)),t=0;u.B();){s=u.d
if(b===t)return s;++t}throw H.h(P.V(b,this,"index",null,t))},
$ie:1,
$ikM:1}
P.el.prototype={}
P.cd.prototype={}
P.ce.prototype={}
P.fs.prototype={
$acd:function(){return[P.f,[P.b,P.B]]}}
P.fL.prototype={
i:function(a){return this.a}}
P.fK.prototype={
fi:function(a,b,c){var u,t,s,r,q,p
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
default:p=null}if(p!=null){if(q==null)q=new P.bf("")
if(r>b)q.a+=C.j.b7(a,b,r)
q.a+=p
b=r+1}}if(q==null)return
if(c>b)q.a+=J.lL(a,b,c)
u=q.a
return u.charCodeAt(0)==0?u:u},
$ace:function(){return[P.f,P.f]}}
P.ix.prototype={}
P.iy.prototype={
iX:function(a,b,c){var u,t,s
c=P.jY(b,c,a.length,null,null,null)
u=c-b
if(u===0)return new Uint8Array(0)
t=new Uint8Array(u*3)
s=new P.jr(t)
if(s.fv(a,b,c)!==c)s.dh(C.j.ce(a,c-1),0)
return new Uint8Array(t.subarray(0,H.my(0,s.b,t.length)))},
iW:function(a){return this.iX(a,0,null)},
$ace:function(){return[P.f,[P.b,P.B]]}}
P.jr.prototype={
dh:function(a,b){var u,t,s,r,q
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
fv:function(a,b,c){var u,t,s,r,q,p,o
if(b!==c&&(C.j.ce(a,c-1)&64512)===55296)--c
for(u=this.c,t=u.length,s=b;s<c;++s){r=C.j.aF(a,s)
if(r<=127){q=this.b
if(q>=t)break
this.b=q+1
u[q]=r}else if((r&64512)===55296){if(this.b+3>=t)break
p=s+1
if(this.dh(r,C.j.aF(a,p)))s=p}else if(r<=2047){q=this.b
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
P.M.prototype={}
P.ai.prototype={
v:function(a,b){if(b==null)return!1
return b instanceof P.ai&&this.a===b.a&&!0},
gI:function(a){var u=this.a
return(u^C.h.bb(u,30))&1073741823},
i:function(a){var u,t,s,r,q,p,o,n
u=P.lS(H.mc(this))
t=P.da(H.ma(this))
s=P.da(H.m6(this))
r=P.da(H.m7(this))
q=P.da(H.m9(this))
p=P.da(H.mb(this))
o=P.lT(H.m8(this))
n=u+"-"+t+"-"+s+" "+r+":"+q+":"+p+"."+o
return n}}
P.z.prototype={}
P.aN.prototype={
p:function(a,b){return new P.aN(C.h.p(this.a,b.gfn()))},
q:function(a,b){return new P.aN(C.h.q(this.a,b.gfn()))},
v:function(a,b){if(b==null)return!1
return b instanceof P.aN&&this.a===b.a},
gI:function(a){return C.h.gI(this.a)},
i:function(a){var u,t,s,r,q
u=new P.fp()
t=this.a
if(t<0)return"-"+new P.aN(0-t).i(0)
s=u.$1(C.h.a_(t,6e7)%60)
r=u.$1(C.h.a_(t,1e6)%60)
q=new P.fo().$1(t%1e6)
return""+C.h.a_(t,36e8)+":"+H.l(s)+":"+H.l(r)+"."+H.l(q)}}
P.fo.prototype={
$1:function(a){if(a>=1e5)return""+a
if(a>=1e4)return"0"+a
if(a>=1000)return"00"+a
if(a>=100)return"000"+a
if(a>=10)return"0000"+a
return"00000"+a},
$S:14}
P.fp.prototype={
$1:function(a){if(a>=10)return""+a
return"0"+a},
$S:14}
P.bu.prototype={}
P.dC.prototype={
i:function(a){return"Throw of null."}}
P.aJ.prototype={
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
p=P.fu(this.b)
return r+q+": "+p}}
P.bU.prototype={
gbL:function(){return"RangeError"},
gbK:function(){var u,t,s
u=this.e
if(u==null){u=this.f
t=u!=null?": Not less than or equal to "+H.l(u):""}else{s=this.f
if(s==null)t=": Not greater than or equal to "+H.l(u)
else if(s>u)t=": Not in range "+H.l(u)+".."+H.l(s)+", inclusive"
else t=s<u?": Valid value range is empty":": Only valid value is "+H.l(u)}return t}}
P.fM.prototype={
gbL:function(){return"RangeError"},
gbK:function(){var u,t
u=H.ad(this.b)
if(typeof u!=="number")return u.aS()
if(u<0)return": index must not be negative"
t=this.f
if(t===0)return": no indices are valid"
return": index should be less than "+H.l(t)},
gl:function(a){return this.f}}
P.iv.prototype={
i:function(a){return"Unsupported operation: "+this.a}}
P.it.prototype={
i:function(a){var u=this.a
return u!=null?"UnimplementedError: "+u:"UnimplementedError"}}
P.bW.prototype={
i:function(a){return"Bad state: "+this.a}}
P.fd.prototype={
i:function(a){var u=this.a
if(u==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+P.fu(u)+"."}}
P.ht.prototype={
i:function(a){return"Out of Memory"},
$ibu:1}
P.dM.prototype={
i:function(a){return"Stack Overflow"},
$ibu:1}
P.fi.prototype={
i:function(a){var u=this.a
return u==null?"Reading static variable during its initialization":"Reading static variable '"+u+"' during its initialization"}}
P.ed.prototype={
i:function(a){return"Exception: "+this.a}}
P.fF.prototype={
i:function(a){var u,t,s,r
u=this.a
t=""!==u?"FormatException: "+u:"FormatException"
s=this.b
r=s.length>78?C.j.b7(s,0,75)+"...":s
return t+"\n"+r}}
P.bv.prototype={}
P.B.prototype={}
P.e.prototype={
bB:function(a,b){var u=H.ao(this,"e",0)
return new H.cJ(this,H.n(b,{func:1,ret:P.M,args:[u]}),[u])},
gl:function(a){var u,t
u=this.gS(this)
for(t=0;u.B();)++t
return t},
gaB:function(a){var u,t
u=this.gS(this)
if(!u.B())throw H.h(H.fN())
t=u.gH(u)
if(u.B())throw H.h(H.m_())
return t},
F:function(a,b){var u,t,s
if(b<0)H.r(P.ax(b,0,null,"index",null))
for(u=this.gS(this),t=0;u.B();){s=u.gH(u)
if(b===t)return s;++t}throw H.h(P.V(b,this,"index",null,t))},
i:function(a){return P.lY(this,"(",")")}}
P.aQ.prototype={}
P.b.prototype={$ie:1}
P.N.prototype={}
P.J.prototype={
gI:function(a){return P.L.prototype.gI.call(this,this)},
i:function(a){return"null"}}
P.a3.prototype={}
P.L.prototype={constructor:P.L,$iL:1,
v:function(a,b){return this===b},
gI:function(a){return H.ct(this)},
i:function(a){return"Instance of '"+H.bT(this)+"'"},
toString:function(){return this.i(this)}}
P.am.prototype={}
P.f.prototype={$ikE:1}
P.bf.prototype={
gl:function(a){return this.a.length},
i:function(a){var u=this.a
return u.charCodeAt(0)==0?u:u}}
W.u.prototype={}
W.f1.prototype={
gl:function(a){return a.length}}
W.d1.prototype={
i:function(a){return String(a)},
$id1:1}
W.f2.prototype={
i:function(a){return String(a)}}
W.c9.prototype={$ic9:1}
W.d3.prototype={}
W.bp.prototype={$ibp:1}
W.bJ.prototype={
ep:function(a,b,c){var u=this.fw(a,b,P.mJ(c,null))
return u},
fw:function(a,b,c){return a.getContext(b,c)},
$ibJ:1}
W.bq.prototype={
gl:function(a){return a.length}}
W.cf.prototype={$icf:1}
W.fe.prototype={
gl:function(a){return a.length}}
W.S.prototype={$iS:1}
W.cg.prototype={
gl:function(a){return a.length}}
W.ff.prototype={}
W.aL.prototype={}
W.aM.prototype={}
W.fg.prototype={
gl:function(a){return a.length}}
W.fh.prototype={
gl:function(a){return a.length}}
W.fk.prototype={
gl:function(a){return a.length}}
W.aw.prototype={$iaw:1}
W.ch.prototype={
iI:function(a,b){return a.adoptNode(b)},
eq:function(a,b){return a.getElementById(b)}}
W.fl.prototype={
i:function(a){return String(a)}}
W.db.prototype={
j_:function(a,b){return a.createHTMLDocument(b)}}
W.dc.prototype={
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.h(P.V(b,a,null,null,null))
return a[b]},
F:function(a,b){if(b<0||b>=a.length)return H.j(a,b)
return a[b]},
$iF:1,
$aF:function(){return[[P.ab,P.a3]]},
$aw:function(){return[[P.ab,P.a3]]},
$ie:1,
$ae:function(){return[[P.ab,P.a3]]},
$ib:1,
$ab:function(){return[[P.ab,P.a3]]},
$aA:function(){return[[P.ab,P.a3]]}}
W.dd.prototype={
i:function(a){return"Rectangle ("+H.l(a.left)+", "+H.l(a.top)+") "+H.l(this.gaA(a))+" x "+H.l(this.gav(a))},
v:function(a,b){var u
if(b==null)return!1
if(!H.cY(b,"$iab",[P.a3],"$aab"))return!1
u=J.an(b)
return a.left===u.gbw(b)&&a.top===u.gbz(b)&&this.gaA(a)===u.gaA(b)&&this.gav(a)===u.gav(b)},
gI:function(a){return W.l2(C.d.gI(a.left),C.d.gI(a.top),C.d.gI(this.gaA(a)),C.d.gI(this.gav(a)))},
gdn:function(a){return a.bottom},
gav:function(a){return a.height},
gbw:function(a){return a.left},
gby:function(a){return a.right},
gbz:function(a){return a.top},
gaA:function(a){return a.width},
$iab:1,
$aab:function(){return[P.a3]}}
W.fm.prototype={
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.h(P.V(b,a,null,null,null))
return a[b]},
F:function(a,b){if(b<0||b>=a.length)return H.j(a,b)
return a[b]},
$iF:1,
$aF:function(){return[P.f]},
$aw:function(){return[P.f]},
$ie:1,
$ae:function(){return[P.f]},
$ib:1,
$ab:function(){return[P.f]},
$aA:function(){return[P.f]}}
W.fn.prototype={
gl:function(a){return a.length}}
W.iT.prototype={
gl:function(a){return this.b.length},
j:function(a,b){var u=this.b
if(b<0||b>=u.length)return H.j(u,b)
return H.k(u[b],"$iT")},
h:function(a,b){J.kl(this.a,b)
return b},
gS:function(a){var u=this.jT(this)
return new J.ap(u,u.length,0,[H.x(u,0)])},
$aw:function(){return[W.T]},
$ae:function(){return[W.T]},
$ab:function(){return[W.T]}}
W.T.prototype={
giM:function(a){return new W.iV(a)},
gdr:function(a){return new W.iT(a,a.children)},
gds:function(a){var u,t,s,r
u=a.clientLeft
t=a.clientTop
s=a.clientWidth
r=a.clientHeight
if(typeof s!=="number")return s.aS()
if(s<0)s=-s*0
if(typeof r!=="number")return r.aS()
if(r<0)r=-r*0
return new P.ab(u,t,s,r,[P.a3])},
i:function(a){return a.localName},
a8:function(a,b,c,d){var u,t,s,r
if(c==null){u=$.kv
if(u==null){u=H.c([],[W.as])
t=new W.dB(u)
C.a.h(u,W.l1(null))
C.a.h(u,W.l3())
$.kv=t
d=t}else d=u
u=$.ku
if(u==null){u=new W.eO(d)
$.ku=u
c=u}else{u.a=d
c=u}}if($.b8==null){u=document
t=u.implementation
t=(t&&C.I).j_(t,"")
$.b8=t
$.jS=t.createRange()
t=$.b8
t.toString
t=t.createElement("base")
H.k(t,"$ic9")
t.href=u.baseURI
u=$.b8.head;(u&&C.K).C(u,t)}u=$.b8
if(u.body==null){u.toString
t=u.createElement("body")
u.body=H.k(t,"$ibp")}u=$.b8
if(!!this.$ibp)s=u.body
else{t=a.tagName
u.toString
s=u.createElement(t)
u=$.b8.body;(u&&C.n).C(u,s)}if("createContextualFragment" in window.Range.prototype&&!C.a.X(C.V,a.tagName)){u=$.jS;(u&&C.D).ey(u,s)
u=$.jS
r=(u&&C.D).iY(u,b)}else{s.innerHTML=b
r=$.b8.createDocumentFragment()
for(u=J.an(r);t=s.firstChild,t!=null;)u.C(r,t)}u=$.b8.body
if(s==null?u!=null:s!==u)J.km(s)
c.cG(r)
C.y.iI(document,r)
return r},
iZ:function(a,b,c){return this.a8(a,b,c,null)},
eA:function(a,b,c,d){a.textContent=null
this.C(a,this.a8(a,b,c,d))},
ez:function(a,b){return this.eA(a,b,null,null)},
aR:function(a,b){return a.getAttribute(b)},
hG:function(a,b){return a.removeAttribute(b)},
$iT:1,
gjR:function(a){return a.tagName}}
W.fr.prototype={
$1:function(a){return!!J.a0(H.k(a,"$iC")).$iT},
$S:15}
W.o.prototype={$io:1}
W.d.prototype={
iG:function(a,b,c,d){H.n(c,{func:1,args:[W.o]})
if(c!=null)this.f9(a,b,c,!1)},
f9:function(a,b,c,d){return a.addEventListener(b,H.c1(H.n(c,{func:1,args:[W.o]}),1),!1)},
$id:1}
W.aO.prototype={$iaO:1}
W.fz.prototype={
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.h(P.V(b,a,null,null,null))
return a[b]},
F:function(a,b){if(b<0||b>=a.length)return H.j(a,b)
return a[b]},
$iF:1,
$aF:function(){return[W.aO]},
$aw:function(){return[W.aO]},
$ie:1,
$ae:function(){return[W.aO]},
$ib:1,
$ab:function(){return[W.aO]},
$aA:function(){return[W.aO]}}
W.fA.prototype={
gl:function(a){return a.length}}
W.fE.prototype={
gl:function(a){return a.length}}
W.aP.prototype={$iaP:1}
W.dh.prototype={}
W.fJ.prototype={
gl:function(a){return a.length}}
W.bN.prototype={
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.h(P.V(b,a,null,null,null))
return a[b]},
F:function(a,b){if(b<0||b>=a.length)return H.j(a,b)
return a[b]},
$iF:1,
$aF:function(){return[W.C]},
$aw:function(){return[W.C]},
$ie:1,
$ae:function(){return[W.C]},
$ib:1,
$ab:function(){return[W.C]},
$ibN:1,
$aA:function(){return[W.C]}}
W.di.prototype={}
W.aS.prototype={$iaS:1}
W.dr.prototype={
i:function(a){return String(a)},
$idr:1}
W.ha.prototype={
gl:function(a){return a.length}}
W.hb.prototype={
j:function(a,b){return P.bi(a.get(H.H(b)))},
O:function(a,b){var u,t
H.n(b,{func:1,ret:-1,args:[P.f,,]})
u=a.entries()
for(;!0;){t=u.next()
if(t.done)return
b.$2(t.value[0],P.bi(t.value[1]))}},
ga2:function(a){var u=H.c([],[P.f])
this.O(a,new W.hc(u))
return u},
gl:function(a){return a.size},
$aa6:function(){return[P.f,null]},
$iN:1,
$aN:function(){return[P.f,null]}}
W.hc.prototype={
$2:function(a,b){return C.a.h(this.a,a)},
$S:6}
W.hd.prototype={
j:function(a,b){return P.bi(a.get(H.H(b)))},
O:function(a,b){var u,t
H.n(b,{func:1,ret:-1,args:[P.f,,]})
u=a.entries()
for(;!0;){t=u.next()
if(t.done)return
b.$2(t.value[0],P.bi(t.value[1]))}},
ga2:function(a){var u=H.c([],[P.f])
this.O(a,new W.he(u))
return u},
gl:function(a){return a.size},
$aa6:function(){return[P.f,null]},
$iN:1,
$aN:function(){return[P.f,null]}}
W.he.prototype={
$2:function(a,b){return C.a.h(this.a,a)},
$S:6}
W.aV.prototype={$iaV:1}
W.hf.prototype={
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.h(P.V(b,a,null,null,null))
return a[b]},
F:function(a,b){if(b<0||b>=a.length)return H.j(a,b)
return a[b]},
$iF:1,
$aF:function(){return[W.aV]},
$aw:function(){return[W.aV]},
$ie:1,
$ae:function(){return[W.aV]},
$ib:1,
$ab:function(){return[W.aV]},
$aA:function(){return[W.aV]}}
W.a7.prototype={$ia7:1}
W.ah.prototype={
gaB:function(a){var u,t
u=this.a
t=u.childNodes.length
if(t===0)throw H.h(P.kN("No elements"))
if(t>1)throw H.h(P.kN("More than one element"))
return u.firstChild},
aj:function(a,b){var u,t,s,r,q
H.m(b,"$ie",[W.C],"$ae")
u=b.a
t=this.a
if(u!==t)for(s=u.childNodes.length,r=J.an(t),q=0;q<s;++q)r.C(t,u.firstChild)
return},
gS:function(a){var u=this.a.childNodes
return new W.df(u,u.length,-1,[H.c4(C.X,u,"A",0)])},
gl:function(a){return this.a.childNodes.length},
j:function(a,b){var u=this.a.childNodes
if(b<0||b>=u.length)return H.j(u,b)
return u[b]},
$aw:function(){return[W.C]},
$ae:function(){return[W.C]},
$ab:function(){return[W.C]}}
W.C.prototype={
jH:function(a){var u=a.parentNode
if(u!=null)J.f0(u,a)},
i:function(a){var u=a.nodeValue
return u==null?this.eF(a):u},
C:function(a,b){return a.appendChild(b)},
hH:function(a,b){return a.removeChild(b)},
$iC:1}
W.cr.prototype={
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.h(P.V(b,a,null,null,null))
return a[b]},
F:function(a,b){if(b<0||b>=a.length)return H.j(a,b)
return a[b]},
$iF:1,
$aF:function(){return[W.C]},
$aw:function(){return[W.C]},
$ie:1,
$ae:function(){return[W.C]},
$ib:1,
$ab:function(){return[W.C]},
$aA:function(){return[W.C]}}
W.aW.prototype={$iaW:1,
gl:function(a){return a.length}}
W.hw.prototype={
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.h(P.V(b,a,null,null,null))
return a[b]},
F:function(a,b){if(b<0||b>=a.length)return H.j(a,b)
return a[b]},
$iF:1,
$aF:function(){return[W.aW]},
$aw:function(){return[W.aW]},
$ie:1,
$ae:function(){return[W.aW]},
$ib:1,
$ab:function(){return[W.aW]},
$aA:function(){return[W.aW]}}
W.dG.prototype={
iY:function(a,b){return a.createContextualFragment(b)},
ey:function(a,b){return a.selectNodeContents(b)}}
W.hF.prototype={
j:function(a,b){return P.bi(a.get(H.H(b)))},
O:function(a,b){var u,t
H.n(b,{func:1,ret:-1,args:[P.f,,]})
u=a.entries()
for(;!0;){t=u.next()
if(t.done)return
b.$2(t.value[0],P.bi(t.value[1]))}},
ga2:function(a){var u=H.c([],[P.f])
this.O(a,new W.hG(u))
return u},
gl:function(a){return a.size},
$aa6:function(){return[P.f,null]},
$iN:1,
$aN:function(){return[P.f,null]}}
W.hG.prototype={
$2:function(a,b){return C.a.h(this.a,a)},
$S:6}
W.hI.prototype={
gl:function(a){return a.length}}
W.aX.prototype={$iaX:1}
W.hS.prototype={
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.h(P.V(b,a,null,null,null))
return a[b]},
F:function(a,b){if(b<0||b>=a.length)return H.j(a,b)
return a[b]},
$iF:1,
$aF:function(){return[W.aX]},
$aw:function(){return[W.aX]},
$ie:1,
$ae:function(){return[W.aX]},
$ib:1,
$ab:function(){return[W.aX]},
$aA:function(){return[W.aX]}}
W.aY.prototype={$iaY:1}
W.hT.prototype={
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.h(P.V(b,a,null,null,null))
return a[b]},
F:function(a,b){if(b<0||b>=a.length)return H.j(a,b)
return a[b]},
$iF:1,
$aF:function(){return[W.aY]},
$aw:function(){return[W.aY]},
$ie:1,
$ae:function(){return[W.aY]},
$ib:1,
$ab:function(){return[W.aY]},
$aA:function(){return[W.aY]}}
W.aZ.prototype={$iaZ:1,
gl:function(a){return a.length}}
W.hW.prototype={
j:function(a,b){return this.d3(a,H.H(b))},
O:function(a,b){var u,t
H.n(b,{func:1,ret:-1,args:[P.f,P.f]})
for(u=0;!0;++u){t=this.fB(a,u)
if(t==null)return
b.$2(t,this.d3(a,t))}},
ga2:function(a){var u=H.c([],[P.f])
this.O(a,new W.hX(u))
return u},
gl:function(a){return a.length},
d3:function(a,b){return a.getItem(b)},
fB:function(a,b){return a.key(b)},
$aa6:function(){return[P.f,P.f]},
$iN:1,
$aN:function(){return[P.f,P.f]}}
W.hX.prototype={
$2:function(a,b){return C.a.h(this.a,a)},
$S:33}
W.aD.prototype={$iaD:1}
W.bX.prototype={}
W.dN.prototype={
a8:function(a,b,c,d){var u,t
if("createContextualFragment" in window.Range.prototype)return this.bF(a,b,c,d)
u=W.lU("<table>"+b+"</table>",c,d)
t=document.createDocumentFragment()
t.toString
u.toString
new W.ah(t).aj(0,new W.ah(u))
return t}}
W.dO.prototype={
a8:function(a,b,c,d){var u,t,s,r
if("createContextualFragment" in window.Range.prototype)return this.bF(a,b,c,d)
u=document
t=u.createDocumentFragment()
u=C.o.a8(u.createElement("table"),b,c,d)
u.toString
u=new W.ah(u)
s=u.gaB(u)
s.toString
u=new W.ah(s)
r=u.gaB(u)
t.toString
r.toString
new W.ah(t).aj(0,new W.ah(r))
return t}}
W.i2.prototype={
a8:function(a,b,c,d){var u,t,s
if("createContextualFragment" in window.Range.prototype)return this.bF(a,b,c,d)
u=document
t=u.createDocumentFragment()
u=C.o.a8(u.createElement("table"),b,c,d)
u.toString
u=new W.ah(u)
s=u.gaB(u)
t.toString
s.toString
new W.ah(t).aj(0,new W.ah(s))
return t}}
W.cy.prototype={$icy:1}
W.b_.prototype={$ib_:1}
W.aE.prototype={$iaE:1}
W.i4.prototype={
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.h(P.V(b,a,null,null,null))
return a[b]},
F:function(a,b){if(b<0||b>=a.length)return H.j(a,b)
return a[b]},
$iF:1,
$aF:function(){return[W.aE]},
$aw:function(){return[W.aE]},
$ie:1,
$ae:function(){return[W.aE]},
$ib:1,
$ab:function(){return[W.aE]},
$aA:function(){return[W.aE]}}
W.i5.prototype={
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.h(P.V(b,a,null,null,null))
return a[b]},
F:function(a,b){if(b<0||b>=a.length)return H.j(a,b)
return a[b]},
$iF:1,
$aF:function(){return[W.b_]},
$aw:function(){return[W.b_]},
$ie:1,
$ae:function(){return[W.b_]},
$ib:1,
$ab:function(){return[W.b_]},
$aA:function(){return[W.b_]}}
W.i8.prototype={
gl:function(a){return a.length}}
W.b1.prototype={$ib1:1}
W.aF.prototype={$iaF:1}
W.ic.prototype={
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.h(P.V(b,a,null,null,null))
return a[b]},
F:function(a,b){if(b<0||b>=a.length)return H.j(a,b)
return a[b]},
$iF:1,
$aF:function(){return[W.b1]},
$aw:function(){return[W.b1]},
$ie:1,
$ae:function(){return[W.b1]},
$ib:1,
$ab:function(){return[W.b1]},
$aA:function(){return[W.b1]}}
W.id.prototype={
gl:function(a){return a.length}}
W.bz.prototype={}
W.iw.prototype={
i:function(a){return String(a)}}
W.iL.prototype={
gl:function(a){return a.length}}
W.b4.prototype={
gj5:function(a){if(a.deltaY!==undefined)return a.deltaY
throw H.h(P.au("deltaY is not supported"))},
gj4:function(a){if(a.deltaX!==undefined)return a.deltaX
throw H.h(P.au("deltaX is not supported"))},
$ib4:1}
W.cK.prototype={
hN:function(a,b){return a.requestAnimationFrame(H.c1(H.n(b,{func:1,ret:-1,args:[P.a3]}),1))},
fo:function(a){if(!!(a.requestAnimationFrame&&a.cancelAnimationFrame))return;(function(b){var u=['ms','moz','webkit','o']
for(var t=0;t<u.length&&!b.requestAnimationFrame;++t){b.requestAnimationFrame=b[u[t]+'RequestAnimationFrame']
b.cancelAnimationFrame=b[u[t]+'CancelAnimationFrame']||b[u[t]+'CancelRequestAnimationFrame']}if(b.requestAnimationFrame&&b.cancelAnimationFrame)return
b.requestAnimationFrame=function(c){return window.setTimeout(function(){c(Date.now())},16)}
b.cancelAnimationFrame=function(c){clearTimeout(c)}})(a)}}
W.cL.prototype={$icL:1}
W.iU.prototype={
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.h(P.V(b,a,null,null,null))
return a[b]},
F:function(a,b){if(b<0||b>=a.length)return H.j(a,b)
return a[b]},
$iF:1,
$aF:function(){return[W.S]},
$aw:function(){return[W.S]},
$ie:1,
$ae:function(){return[W.S]},
$ib:1,
$ab:function(){return[W.S]},
$aA:function(){return[W.S]}}
W.e8.prototype={
i:function(a){return"Rectangle ("+H.l(a.left)+", "+H.l(a.top)+") "+H.l(a.width)+" x "+H.l(a.height)},
v:function(a,b){var u
if(b==null)return!1
if(!H.cY(b,"$iab",[P.a3],"$aab"))return!1
u=J.an(b)
return a.left===u.gbw(b)&&a.top===u.gbz(b)&&a.width===u.gaA(b)&&a.height===u.gav(b)},
gI:function(a){return W.l2(C.d.gI(a.left),C.d.gI(a.top),C.d.gI(a.width),C.d.gI(a.height))},
gav:function(a){return a.height},
gaA:function(a){return a.width}}
W.j7.prototype={
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.h(P.V(b,a,null,null,null))
return a[b]},
F:function(a,b){if(b<0||b>=a.length)return H.j(a,b)
return a[b]},
$iF:1,
$aF:function(){return[W.aP]},
$aw:function(){return[W.aP]},
$ie:1,
$ae:function(){return[W.aP]},
$ib:1,
$ab:function(){return[W.aP]},
$aA:function(){return[W.aP]}}
W.eq.prototype={
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.h(P.V(b,a,null,null,null))
return a[b]},
F:function(a,b){if(b<0||b>=a.length)return H.j(a,b)
return a[b]},
$iF:1,
$aF:function(){return[W.C]},
$aw:function(){return[W.C]},
$ie:1,
$ae:function(){return[W.C]},
$ib:1,
$ab:function(){return[W.C]},
$aA:function(){return[W.C]}}
W.jk.prototype={
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.h(P.V(b,a,null,null,null))
return a[b]},
F:function(a,b){if(b<0||b>=a.length)return H.j(a,b)
return a[b]},
$iF:1,
$aF:function(){return[W.aZ]},
$aw:function(){return[W.aZ]},
$ie:1,
$ae:function(){return[W.aZ]},
$ib:1,
$ab:function(){return[W.aZ]},
$aA:function(){return[W.aZ]}}
W.jl.prototype={
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.h(P.V(b,a,null,null,null))
return a[b]},
F:function(a,b){if(b<0||b>=a.length)return H.j(a,b)
return a[b]},
$iF:1,
$aF:function(){return[W.aD]},
$aw:function(){return[W.aD]},
$ie:1,
$ae:function(){return[W.aD]},
$ib:1,
$ab:function(){return[W.aD]},
$aA:function(){return[W.aD]}}
W.iS.prototype={
O:function(a,b){var u,t,s,r,q,p
H.n(b,{func:1,ret:-1,args:[P.f,P.f]})
for(u=this.ga2(this),t=u.length,s=this.a,r=J.an(s),q=0;q<u.length;u.length===t||(0,H.E)(u),++q){p=u[q]
b.$2(p,r.aR(s,p))}},
ga2:function(a){var u,t,s,r,q
u=this.a.attributes
t=H.c([],[P.f])
for(s=u.length,r=0;r<s;++r){if(r>=u.length)return H.j(u,r)
q=H.k(u[r],"$icL")
if(q.namespaceURI==null)C.a.h(t,q.name)}return t},
$aa6:function(){return[P.f,P.f]},
$aN:function(){return[P.f,P.f]}}
W.iV.prototype={
j:function(a,b){return J.jN(this.a,H.H(b))},
gl:function(a){return this.ga2(this).length}}
W.iW.prototype={}
W.k2.prototype={}
W.iX.prototype={}
W.iY.prototype={
$1:function(a){return this.a.$1(H.k(a,"$io"))},
$S:26}
W.bB.prototype={
eT:function(a){var u,t
u=$.kj()
if(u.a===0){for(t=0;t<262;++t)u.Y(0,C.U[t],W.mS())
for(t=0;t<12;++t)u.Y(0,C.u[t],W.mT())}},
aK:function(a){return $.lC().X(0,W.ci(a))},
ak:function(a,b,c){var u,t,s
u=W.ci(a)
t=$.kj()
s=t.j(0,H.l(u)+"::"+b)
if(s==null)s=t.j(0,"*::"+b)
if(s==null)return!1
return H.k8(s.$4(a,b,c,this))},
$ias:1}
W.A.prototype={
gS:function(a){return new W.df(a,this.gl(a),-1,[H.c4(this,a,"A",0)])}}
W.dB.prototype={
aK:function(a){return C.a.dk(this.a,new W.ho(a))},
ak:function(a,b,c){return C.a.dk(this.a,new W.hn(a,b,c))},
$ias:1}
W.ho.prototype={
$1:function(a){return H.k(a,"$ias").aK(this.a)},
$S:17}
W.hn.prototype={
$1:function(a){return H.k(a,"$ias").ak(this.a,this.b,this.c)},
$S:17}
W.ey.prototype={
f4:function(a,b,c,d){var u,t,s
this.a.aj(0,c)
u=b.bB(0,new W.ji())
t=b.bB(0,new W.jj())
this.b.aj(0,u)
s=this.c
s.aj(0,C.W)
s.aj(0,t)},
aK:function(a){return this.a.X(0,W.ci(a))},
ak:function(a,b,c){var u,t
u=W.ci(a)
t=this.c
if(t.X(0,H.l(u)+"::"+b))return this.d.iJ(c)
else if(t.X(0,"*::"+b))return this.d.iJ(c)
else{t=this.b
if(t.X(0,H.l(u)+"::"+b))return!0
else if(t.X(0,"*::"+b))return!0
else if(t.X(0,H.l(u)+"::*"))return!0
else if(t.X(0,"*::*"))return!0}return!1},
$ias:1}
W.ji.prototype={
$1:function(a){return!C.a.X(C.u,H.H(a))},
$S:18}
W.jj.prototype={
$1:function(a){return C.a.X(C.u,H.H(a))},
$S:18}
W.jn.prototype={
ak:function(a,b,c){if(this.eK(a,b,c))return!0
if(b==="template"&&c==="")return!0
if(J.jN(a,"template")==="")return this.e.X(0,b)
return!1}}
W.jo.prototype={
$1:function(a){return"TEMPLATE::"+H.l(H.H(a))},
$S:27}
W.jm.prototype={
aK:function(a){var u=J.a0(a)
if(!!u.$icu)return!1
u=!!u.$ip
if(u&&W.ci(a)==="foreignObject")return!1
if(u)return!0
return!1},
ak:function(a,b,c){if(b==="is"||C.j.bE(b,"on"))return!1
return this.aK(a)},
$ias:1}
W.df.prototype={
B:function(){var u,t
u=this.c+1
t=this.b
if(u<t){this.sd4(J.lG(this.a,u))
this.c=u
return!0}this.sd4(null)
this.c=t
return!1},
gH:function(a){return this.d},
sd4:function(a){this.d=H.D(a,H.x(this,0))},
$iaQ:1}
W.as.prototype={}
W.jg.prototype={$inw:1}
W.eO.prototype={
cG:function(a){new W.js(this).$2(a,null)},
aW:function(a,b){if(b==null)J.km(a)
else J.f0(b,a)},
hR:function(a,b){var u,t,s,r,q,p,o,n
u=!0
t=null
s=null
try{t=J.lJ(a)
s=J.jN(t.a,"is")
r=function(c){if(!(c.attributes instanceof NamedNodeMap))return true
var m=c.childNodes
if(c.lastChild&&c.lastChild!==m[m.length-1])return true
if(c.children)if(!(c.children instanceof HTMLCollection||c.children instanceof NodeList))return true
var l=0
if(c.children)l=c.children.length
for(var k=0;k<l;k++){var j=c.children[k]
if(j.id=='attributes'||j.name=='attributes'||j.id=='lastChild'||j.name=='lastChild'||j.id=='children'||j.name=='children')return true}return false}(a)
u=r?!0:!(a.attributes instanceof NamedNodeMap)}catch(o){H.av(o)}q="element unprintable"
try{q=J.aI(a)}catch(o){H.av(o)}try{p=W.ci(a)
this.hQ(H.k(a,"$iT"),b,u,q,p,H.k(t,"$iN"),H.H(s))}catch(o){if(H.av(o) instanceof P.aJ)throw o
else{this.aW(a,b)
window
n="Removing corrupted element "+H.l(q)
if(typeof console!="undefined")window.console.warn(n)}}},
hQ:function(a,b,c,d,e,f,g){var u,t,s,r,q,p
if(c){this.aW(a,b)
window
u="Removing element due to corrupted attributes on <"+d+">"
if(typeof console!="undefined")window.console.warn(u)
return}if(!this.a.aK(a)){this.aW(a,b)
window
u="Removing disallowed element <"+H.l(e)+"> from "+H.l(b)
if(typeof console!="undefined")window.console.warn(u)
return}if(g!=null)if(!this.a.ak(a,"is",g)){this.aW(a,b)
window
u="Removing disallowed type extension <"+H.l(e)+' is="'+g+'">'
if(typeof console!="undefined")window.console.warn(u)
return}u=f.ga2(f)
t=H.c(u.slice(0),[H.x(u,0)])
for(s=f.ga2(f).length-1,u=f.a,r=J.an(u);s>=0;--s){if(s>=t.length)return H.j(t,s)
q=t[s]
if(!this.a.ak(a,J.lM(q),r.aR(u,q))){window
p="Removing disallowed attribute <"+H.l(e)+" "+q+'="'+H.l(r.aR(u,q))+'">'
if(typeof console!="undefined")window.console.warn(p)
r.aR(u,q)
r.hG(u,q)}}if(!!J.a0(a).$icy)this.cG(a.content)},
$ini:1}
W.js.prototype={
$2:function(a,b){var u,t,s,r,q,p
s=this.a
switch(a.nodeType){case 1:s.hR(a,b)
break
case 8:case 11:case 3:case 4:break
default:s.aW(a,b)}u=a.lastChild
for(s=a==null;null!=u;){t=null
try{t=u.previousSibling}catch(r){H.av(r)
q=H.k(u,"$iC")
if(s){p=q.parentNode
if(p!=null)J.f0(p,q)}else J.f0(a,q)
u=null
t=a.lastChild}if(u!=null)this.$2(u,a)
u=H.k(t,"$iC")}},
$S:28}
W.e7.prototype={}
W.e9.prototype={}
W.ea.prototype={}
W.eb.prototype={}
W.ec.prototype={}
W.ee.prototype={}
W.ef.prototype={}
W.eg.prototype={}
W.eh.prototype={}
W.em.prototype={}
W.en.prototype={}
W.eo.prototype={}
W.ep.prototype={}
W.er.prototype={}
W.es.prototype={}
W.ev.prototype={}
W.ew.prototype={}
W.ex.prototype={}
W.cR.prototype={}
W.cS.prototype={}
W.ez.prototype={}
W.eA.prototype={}
W.eE.prototype={}
W.eH.prototype={}
W.eI.prototype={}
W.cT.prototype={}
W.cU.prototype={}
W.eK.prototype={}
W.eL.prototype={}
W.eP.prototype={}
W.eQ.prototype={}
W.eR.prototype={}
W.eS.prototype={}
W.eT.prototype={}
W.eU.prototype={}
W.eV.prototype={}
W.eW.prototype={}
W.eX.prototype={}
W.eY.prototype={}
P.jx.prototype={
$2:function(a,b){this.a[a]=b},
$S:13}
P.fB.prototype={
gbP:function(){var u,t,s
u=this.b
t=H.ao(u,"w",0)
s=W.T
return new H.h1(new H.cJ(u,H.n(new P.fC(),{func:1,ret:P.M,args:[t]}),[t]),H.n(new P.fD(),{func:1,ret:s,args:[t]}),[t,s])},
h:function(a,b){J.kl(this.b.a,b)},
gl:function(a){return J.bH(this.gbP().a)},
j:function(a,b){var u=this.gbP()
return u.b.$1(J.jM(u.a,b))},
gS:function(a){var u=P.kz(this.gbP(),!1,W.T)
return new J.ap(u,u.length,0,[H.x(u,0)])},
$aw:function(){return[W.T]},
$ae:function(){return[W.T]},
$ab:function(){return[W.T]}}
P.fC.prototype={
$1:function(a){return!!J.a0(H.k(a,"$iC")).$iT},
$S:15}
P.fD.prototype={
$1:function(a){return H.i(H.k(a,"$iC"),"$iT")},
$S:29}
P.jb.prototype={
gby:function(a){var u=this.a
if(typeof u!=="number")return u.p()
return H.D(u+this.c,H.x(this,0))},
gdn:function(a){var u=this.b
if(typeof u!=="number")return u.p()
return H.D(u+this.d,H.x(this,0))},
i:function(a){return"Rectangle ("+H.l(this.a)+", "+H.l(this.b)+") "+this.c+" x "+this.d},
v:function(a,b){var u,t,s,r
if(b==null)return!1
if(H.cY(b,"$iab",[P.a3],"$aab")){u=this.a
t=J.an(b)
if(u==t.gbw(b)){s=this.b
if(s==t.gbz(b)){if(typeof u!=="number")return u.p()
r=H.x(this,0)
if(H.D(u+this.c,r)===t.gby(b)){if(typeof s!=="number")return s.p()
u=H.D(s+this.d,r)===t.gdn(b)}else u=!1}else u=!1}else u=!1}else u=!1
return u},
gI:function(a){var u,t,s,r,q
u=this.a
t=J.bF(u)
s=this.b
r=J.bF(s)
if(typeof u!=="number")return u.p()
q=H.x(this,0)
u=C.h.gI(H.D(u+this.c,q))
if(typeof s!=="number")return s.p()
q=C.h.gI(H.D(s+this.d,q))
return P.mu(P.j9(P.j9(P.j9(P.j9(0,t),r),u),q))}}
P.ab.prototype={
gbw:function(a){return this.a},
gbz:function(a){return this.b},
gaA:function(a){return this.c},
gav:function(a){return this.d}}
P.bb.prototype={$ibb:1}
P.fU.prototype={
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.h(P.V(b,a,null,null,null))
return this.ao(a,b)},
F:function(a,b){return this.j(a,b)},
ao:function(a,b){return a.getItem(b)},
$aw:function(){return[P.bb]},
$ie:1,
$ae:function(){return[P.bb]},
$ib:1,
$ab:function(){return[P.bb]},
$aA:function(){return[P.bb]}}
P.be.prototype={$ibe:1}
P.hr.prototype={
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.h(P.V(b,a,null,null,null))
return this.ao(a,b)},
F:function(a,b){return this.j(a,b)},
ao:function(a,b){return a.getItem(b)},
$aw:function(){return[P.be]},
$ie:1,
$ae:function(){return[P.be]},
$ib:1,
$ab:function(){return[P.be]},
$aA:function(){return[P.be]}}
P.hy.prototype={
gl:function(a){return a.length}}
P.cu.prototype={$icu:1}
P.i1.prototype={
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.h(P.V(b,a,null,null,null))
return this.ao(a,b)},
F:function(a,b){return this.j(a,b)},
ao:function(a,b){return a.getItem(b)},
$aw:function(){return[P.f]},
$ie:1,
$ae:function(){return[P.f]},
$ib:1,
$ab:function(){return[P.f]},
$aA:function(){return[P.f]}}
P.p.prototype={
gdr:function(a){return new P.fB(a,new W.ah(a))},
a8:function(a,b,c,d){var u,t,s,r,q,p
u=H.c([],[W.as])
C.a.h(u,W.l1(null))
C.a.h(u,W.l3())
C.a.h(u,new W.jm())
c=new W.eO(new W.dB(u))
t='<svg version="1.1">'+b+"</svg>"
u=document
s=u.body
r=(s&&C.n).iZ(s,t,c)
q=u.createDocumentFragment()
r.toString
u=new W.ah(r)
p=u.gaB(u)
for(u=J.an(q);s=p.firstChild,s!=null;)u.C(q,s)
return q},
$ip:1}
P.bg.prototype={$ibg:1}
P.ie.prototype={
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.h(P.V(b,a,null,null,null))
return this.ao(a,b)},
F:function(a,b){return this.j(a,b)},
ao:function(a,b){return a.getItem(b)},
$aw:function(){return[P.bg]},
$ie:1,
$ae:function(){return[P.bg]},
$ib:1,
$ab:function(){return[P.bg]},
$aA:function(){return[P.bg]}}
P.ei.prototype={}
P.ej.prototype={}
P.et.prototype={}
P.eu.prototype={}
P.eF.prototype={}
P.eG.prototype={}
P.eM.prototype={}
P.eN.prototype={}
P.f4.prototype={
gl:function(a){return a.length}}
P.f5.prototype={
j:function(a,b){return P.bi(a.get(H.H(b)))},
O:function(a,b){var u,t
H.n(b,{func:1,ret:-1,args:[P.f,,]})
u=a.entries()
for(;!0;){t=u.next()
if(t.done)return
b.$2(t.value[0],P.bi(t.value[1]))}},
ga2:function(a){var u=H.c([],[P.f])
this.O(a,new P.f6(u))
return u},
gl:function(a){return a.size},
$aa6:function(){return[P.f,null]},
$iN:1,
$aN:function(){return[P.f,null]}}
P.f6.prototype={
$2:function(a,b){return C.a.h(this.a,a)},
$S:6}
P.f7.prototype={
gl:function(a){return a.length}}
P.bI.prototype={}
P.hs.prototype={
gl:function(a){return a.length}}
P.e6.prototype={}
P.d4.prototype={$id4:1}
P.dg.prototype={$idg:1}
P.dF.prototype={$idF:1}
P.bV.prototype={
dl:function(a,b,c){return a.attachShader(b,c)},
al:function(a,b,c){return a.bindBuffer(b,c)},
iO:function(a,b,c){return a.bindFramebuffer(b,c)},
iP:function(a,b,c){return a.blendFunc(b,c)},
dq:function(a,b,c,d){return a.bufferData(b,c,d)},
iS:function(a,b){return a.clear(b)},
iT:function(a,b,c,d,e){return a.clearColor(b,c,d,e)},
iU:function(a,b){return a.clearDepth(b)},
iV:function(a,b){return a.compileShader(b)},
j0:function(a,b){return a.createShader(b)},
j2:function(a,b){return a.deleteProgram(b)},
j3:function(a,b){return a.deleteShader(b)},
j6:function(a,b){return a.depthFunc(b)},
j7:function(a,b){return a.disable(b)},
dw:function(a,b){return a.disableVertexAttribArray(b)},
j9:function(a,b,c,d,e){return a.drawElements(b,c,d,e)},
ci:function(a,b){return a.enable(b)},
dB:function(a,b){return a.enableVertexAttribArray(b)},
el:function(a,b,c){return a.getActiveAttrib(b,c)},
em:function(a,b,c){return a.getActiveUniform(b,c)},
en:function(a,b,c){return a.getAttribLocation(b,c)},
cF:function(a,b){return a.getParameter(b)},
er:function(a,b){return a.getProgramInfoLog(b)},
bC:function(a,b,c){return a.getProgramParameter(b,c)},
es:function(a,b){return a.getShaderInfoLog(b)},
eu:function(a,b,c){return a.getShaderParameter(b,c)},
ev:function(a,b,c){return a.getUniformLocation(b,c)},
jn:function(a,b){return a.linkProgram(b)},
eC:function(a,b,c){return a.shaderSource(b,c)},
L:function(a,b,c){return a.uniform1f(b,c)},
U:function(a,b,c){return a.uniform1i(b,c)},
t:function(a,b,c,d,e){return a.uniform3f(b,c,d,e)},
eh:function(a,b,c,d){return a.uniformMatrix3fv(b,!1,d)},
ei:function(a,b,c,d){return a.uniformMatrix4fv(b,!1,d)},
ej:function(a,b){return a.useProgram(b)},
jW:function(a,b,c,d,e,f,g){return a.vertexAttribPointer(b,c,d,!1,f,g)},
jX:function(a,b,c,d,e){return a.viewport(b,c,d,e)},
$ibV:1}
P.dJ.prototype={$idJ:1}
P.dY.prototype={$idY:1}
P.hU.prototype={
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.h(P.V(b,a,null,null,null))
return P.bi(this.fA(a,b))},
F:function(a,b){return this.j(a,b)},
fA:function(a,b){return a.item(b)},
$aw:function(){return[[P.N,,,]]},
$ie:1,
$ae:function(){return[[P.N,,,]]},
$ib:1,
$ab:function(){return[[P.N,,,]]},
$aA:function(){return[[P.N,,,]]}}
P.eB.prototype={}
P.eC.prototype={}
O.a2.prototype={
bH:function(a){this.sfF(H.c([],[a]))
this.sd8(null)
this.sd5(null)
this.sd9(null)},
cH:function(a,b,c){var u=H.ao(this,"a2",0)
H.n(b,{func:1,ret:P.M,args:[[P.e,u]]})
u={func:1,ret:-1,args:[P.B,[P.e,u]]}
H.n(a,u)
H.n(c,u)
this.sd8(b)
this.sd5(a)
this.sd9(c)},
b4:function(a,b){return this.cH(a,null,b)},
hq:function(a){var u
H.m(a,"$ie",[H.ao(this,"a2",0)],"$ae")
u=this.b
if(u!=null)return u.$1(a)
return!0},
eR:function(a,b){var u
H.m(b,"$ie",[H.ao(this,"a2",0)],"$ae")
u=this.c
if(u!=null)u.$2(a,b)},
gl:function(a){return this.a.length},
gS:function(a){var u=this.a
return new J.ap(u,u.length,0,[H.x(u,0)])},
F:function(a,b){var u=this.a
if(b<0||b>=u.length)return H.j(u,b)
return u[b]},
h:function(a,b){var u,t,s
u=H.ao(this,"a2",0)
H.D(b,u)
u=[u]
if(this.hq(H.c([b],u))){t=this.a
s=t.length
C.a.h(t,b)
this.eR(s,H.c([b],u))}},
sfF:function(a){this.a=H.m(a,"$ib",[H.ao(this,"a2",0)],"$ab")},
sd8:function(a){this.b=H.n(a,{func:1,ret:P.M,args:[[P.e,H.ao(this,"a2",0)]]})},
sd5:function(a){this.c=H.n(a,{func:1,ret:-1,args:[P.B,[P.e,H.ao(this,"a2",0)]]})},
sd9:function(a){this.d=H.n(a,{func:1,ret:-1,args:[P.B,[P.e,H.ao(this,"a2",0)]]})},
$ie:1}
O.cn.prototype={
gl:function(a){return this.a.length},
gw:function(){var u=this.b
if(u==null){u=D.Q()
this.b=u}return u},
eS:function(a){var u=this.b
if(u!=null)u.G(a)},
aC:function(){return this.eS(null)},
gZ:function(a){var u=this.a
if(u.length>0)return C.a.gbv(u)
else return V.dx()},
e8:function(a){var u=this.a
if(a==null)C.a.h(u,V.dx())
else C.a.h(u,a)
this.aC()},
cw:function(){var u=this.a
if(u.length>0){u.pop()
this.aC()}},
sbR:function(a){this.a=H.m(a,"$ib",[V.ak],"$ab")}}
E.f8.prototype={}
E.aj.prototype={
scI:function(a,b){var u,t,s
u=this.c
if(u!=b){this.c=b
this.d=b
this.e=null
if(u!=null)u.gw().T(0,this.ge4())
t=this.c
if(t!=null)t.gw().h(0,this.ge4())
s=new D.R("shape",u,this.c,this,[F.dK])
s.b=!0
this.aO(s)}},
an:function(a,b){var u
for(u=this.y.a,u=new J.ap(u,u.length,0,[H.x(u,0)]);u.B();)u.d.an(0,b)},
aP:function(a){var u,t
u=a.dx
C.a.h(u.a,u.gZ(u))
u.aC()
a.e9(this.f)
u=a.dy
t=(u&&C.a).gbv(u)
if(t!=null&&this.d!=null)t.jL(a,this)
for(u=this.y.a,u=new J.ap(u,u.length,0,[H.x(u,0)]);u.B();)u.d.aP(a)
a.e7()
a.dx.cw()},
gw:function(){var u=this.z
if(u==null){u=D.Q()
this.z=u}return u},
aO:function(a){var u=this.z
if(u!=null)u.G(a)},
a5:function(){return this.aO(null)},
e5:function(a){H.k(a,"$iy")
this.e=null
this.aO(a)},
jx:function(){return this.e5(null)},
e3:function(a){this.aO(H.k(a,"$iy"))},
ju:function(){return this.e3(null)},
jt:function(a,b){var u,t,s,r,q,p,o
H.m(b,"$ie",[E.aj],"$ae")
for(u=b.length,t=this.ge2(),s={func:1,ret:-1,args:[D.y]},r=[s],q=0;q<b.length;b.length===u||(0,H.E)(b),++q){p=b[q]
if(p!=null){o=p.z
if(o==null){o=new D.bL()
o.sab(null)
o.saI(null)
o.c=null
o.d=0
p.z=o}H.n(t,s)
if(o.a==null)o.sab(H.c([],r))
o=o.a;(o&&C.a).h(o,t)}}this.a5()},
jw:function(a,b){var u,t
H.m(b,"$ie",[E.aj],"$ae")
for(u=b.gS(b),t=this.ge2();u.B();)u.gH(u).gw().T(0,t)
this.a5()},
i:function(a){var u,t
u=this.a
t=u.length
if(t<=0)return"Unnamed entity"
return u},
sfg:function(a,b){this.y=H.m(b,"$ia2",[E.aj],"$aa2")},
$ibd:1}
E.hB.prototype={
eN:function(a,b){var u,t
this.c=512
this.d=512
this.e=0
u=new P.ai(Date.now(),!1)
this.f=u
this.r=u
this.x=u
this.y=0
this.z=null
this.Q=null
this.ch=null
this.cx=null
u=new O.cn()
t=[V.ak]
u.sbR(H.c([],t))
u.b=null
u.gw().h(0,new E.hC(this))
this.cy=u
u=new O.cn()
u.sbR(H.c([],t))
u.b=null
u.gw().h(0,new E.hD(this))
this.db=u
u=new O.cn()
u.sbR(H.c([],t))
u.b=null
u.gw().h(0,new E.hE(this))
this.dx=u
this.si3(H.c([],[O.bY]))
u=this.dy;(u&&C.a).h(u,null)
this.si_(new H.aR([P.f,A.cv]))},
gjG:function(){var u,t
u=this.z
if(u==null){u=this.cy
u=u.gZ(u)
t=this.db
t=u.u(0,t.gZ(t))
this.z=t
u=t}return u},
e9:function(a){var u,t
u=this.dy
t=a==null?(u&&C.a).gbv(u):a;(u&&C.a).h(u,t)},
e7:function(){var u=this.dy
if(u.length>1)u.pop()},
si3:function(a){this.dy=H.m(a,"$ib",[O.bY],"$ab")},
si_:function(a){this.fr=H.m(a,"$iN",[P.f,A.cv],"$aN")}}
E.hC.prototype={
$1:function(a){var u
H.k(a,"$iy")
u=this.a
u.z=null
u.ch=null},
$S:7}
E.hD.prototype={
$1:function(a){var u
H.k(a,"$iy")
u=this.a
u.z=null
u.Q=null
u.ch=null
u.cx=null},
$S:7}
E.hE.prototype={
$1:function(a){var u
H.k(a,"$iy")
u=this.a
u.ch=null
u.cx=null},
$S:7}
E.dU.prototype={
cN:function(a){H.k(a,"$iy")
this.ea()},
cM:function(){return this.cN(null)},
gji:function(){var u,t,s
u=Date.now()
t=C.h.a_(P.kt(0,0,0,u-this.cx.a,0,0).a,1000)/1000
if(t<=0)return 0
s=this.cy
this.cy=0
this.cx=new P.ai(u,!1)
return s/t},
dd:function(){var u,t,s,r
u=window.devicePixelRatio
t=this.b.clientWidth
if(typeof t!=="number")return t.u()
if(typeof u!=="number")return H.G(u)
s=C.d.dX(t*u)
t=this.b.clientHeight
if(typeof t!=="number")return t.u()
r=C.d.dX(t*u)
t=this.b
if(t.width!==s||t.height!==r){t.width=s
t.height=r
P.kQ(C.q,this.gjM())}},
ea:function(){var u,t
if(!this.ch){this.ch=!0
u=window
t=H.n(new E.i7(this),{func:1,ret:-1,args:[P.a3]})
C.F.fo(u)
C.F.hN(u,W.la(t,P.a3))}},
jK:function(){var u,t,s,r,q
try{++this.cy
this.ch=!1
this.dd()
if(this.d!=null){s=this.e;++s.e
s.r=s.x
r=Date.now()
s.x=new P.ai(r,!1)
s.y=P.kt(0,0,0,r-s.r.a,0,0).a*0.000001
r=s.cy
C.a.sl(r.a,0)
r.aC()
r=s.db
C.a.sl(r.a,0)
r.aC()
r=s.dx
C.a.sl(r.a,0)
r.aC()
r=s.dy;(r&&C.a).sl(r,0)
s=s.dy;(s&&C.a).h(s,null)
this.d.aP(this.e)}s=this.z
if(s!=null)s.G(null)}catch(q){u=H.av(q)
t=H.c5(q)
P.aH("Error: "+H.l(u))
P.aH("Stack: "+H.l(t))
throw H.h(u)}}}
E.i7.prototype={
$1:function(a){var u
H.n2(a)
u=this.a
if(u.ch){u.ch=!1
u.jK()}},
$S:34}
Z.e4.prototype={$inc:1}
Z.d5.prototype={
bd:function(a){var u,t,s
try{t=a.a
C.b.dB(t,this.e)
C.b.jW(t,this.e,this.b,5126,!1,this.d,this.c)}catch(s){u=H.av(s)
t=P.t('Failed to bind buffer attribute "'+this.a.i(0)+'": '+H.l(u))
throw H.h(t)}},
i:function(a){return"["+this.a.i(0)+", Size: "+this.b+", Offset: "+this.c+", Stride: "+this.d+", Attr: "+H.l(this.e)+"]"}}
Z.iM.prototype={$ind:1}
Z.d6.prototype={
aN:function(a){var u,t,s,r
for(u=this.c,t=u.length,s=0;s<t;++s){r=u[s]
if((r.a.a&a.a)!==0)return r}return},
bd:function(a){var u,t
u=this.a
C.b.al(a.a,u.a,u.b)
for(u=this.c,t=u.length-1;t>=0;--t)u[t].bd(a)},
eg:function(a){var u,t,s
for(u=this.c,t=u.length-1,s=a.a;t>=0;--t)C.b.dw(s,u[t].e)
C.b.al(s,this.a.a,null)},
aP:function(a){var u,t,s,r,q,p
u=this.b.length
for(t=a.a,s=0;s<u;++s){r=this.b
if(s>=r.length)return H.j(r,s)
q=r[s]
r=q.c
p=r.a
C.b.al(t,p,r.b)
C.b.j9(t,q.a,q.b,5123,0)
C.b.al(t,p,null)}},
i:function(a){var u,t,s,r,q,p
u=[P.f]
t=H.c([],u)
for(s=this.b,r=s.length,q=0;q<s.length;s.length===r||(0,H.E)(s),++q)C.a.h(t,s[q].i(0))
p=H.c([],u)
for(u=this.c,s=u.length,q=0;q<s;++q)C.a.h(p,J.aI(u[q]))
return"Buffer:  ["+this.a.i(0)+"]\nIndices: "+C.a.m(t,", ")+"\nAttrs:   "+C.a.m(p,", ")},
sfz:function(a){this.b=H.m(a,"$ib",[Z.cl],"$ab")},
$inl:1}
Z.cl.prototype={
i:function(a){return"Type: "+this.a+", Count: "+this.b+", ["+("Instance of '"+H.bT(this.c)+"'")+"]"}}
Z.b3.prototype={
gcJ:function(a){var u,t
u=this.a
t=(u&$.bm().a)!==0?3:0
if((u&$.bl().a)!==0)t+=3
if((u&$.bk().a)!==0)t+=3
if((u&$.bn().a)!==0)t+=2
if((u&$.bo().a)!==0)t+=3
if((u&$.cZ().a)!==0)t+=3
if((u&$.d_().a)!==0)t+=4
if((u&$.c8().a)!==0)++t
return(u&$.bj().a)!==0?t+4:t},
iL:function(a){var u,t,s
u=$.bm()
t=this.a
if((t&u.a)!==0){if(0===a)return u
s=1}else s=0
u=$.bl()
if((t&u.a)!==0){if(s===a)return u;++s}u=$.bk()
if((t&u.a)!==0){if(s===a)return u;++s}u=$.bn()
if((t&u.a)!==0){if(s===a)return u;++s}u=$.bo()
if((t&u.a)!==0){if(s===a)return u;++s}u=$.cZ()
if((t&u.a)!==0){if(s===a)return u;++s}u=$.d_()
if((t&u.a)!==0){if(s===a)return u;++s}u=$.c8()
if((t&u.a)!==0){if(s===a)return u;++s}u=$.bj()
if((t&u.a)!==0)if(s===a)return u
return $.lB()},
v:function(a,b){if(b==null)return!1
if(!(b instanceof Z.b3))return!1
return this.a===b.a},
i:function(a){var u,t
u=H.c([],[P.f])
t=this.a
if((t&$.bm().a)!==0)C.a.h(u,"Pos")
if((t&$.bl().a)!==0)C.a.h(u,"Norm")
if((t&$.bk().a)!==0)C.a.h(u,"Binm")
if((t&$.bn().a)!==0)C.a.h(u,"Txt2D")
if((t&$.bo().a)!==0)C.a.h(u,"TxtCube")
if((t&$.cZ().a)!==0)C.a.h(u,"Clr3")
if((t&$.d_().a)!==0)C.a.h(u,"Clr4")
if((t&$.c8().a)!==0)C.a.h(u,"Weight")
if((t&$.bj().a)!==0)C.a.h(u,"Bending")
if(u.length<=0)return"None"
return C.a.m(u,"|")}}
D.fb.prototype={}
D.bL.prototype={
h:function(a,b){var u={func:1,ret:-1,args:[D.y]}
H.n(b,u)
if(this.a==null)this.sab(H.c([],[u]))
u=this.a;(u&&C.a).h(u,b)},
T:function(a,b){var u,t
H.n(b,{func:1,ret:-1,args:[D.y]})
u=this.a
u=u==null?null:C.a.X(u,b)
if(u===!0){u=this.a
t=(u&&C.a).T(u,b)||!1}else t=!1
u=this.b
u=u==null?null:C.a.X(u,b)
if(u===!0){u=this.b
t=(u&&C.a).T(u,b)||t}return t},
G:function(a){var u,t,s,r
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
return!0}if(!s)C.a.O(P.kz(t,!0,{func:1,ret:-1,args:[D.y]}),new D.fv(u))
t=this.b
if(t!=null){this.saI(H.c([],[{func:1,ret:-1,args:[D.y]}]))
C.a.O(t,new D.fw(u))}return!0},
jN:function(a,b,c){var u,t
u=this.d
if(u>0){--u
this.d=u
if(u<=0)u=this.c!=null
else u=!1
if(u){t=this.c
this.c=null
this.G(t)}}},
az:function(a){return this.jN(a,!0,!1)},
sab:function(a){this.a=H.m(a,"$ib",[{func:1,ret:-1,args:[D.y]}],"$ab")},
saI:function(a){this.b=H.m(a,"$ib",[{func:1,ret:-1,args:[D.y]}],"$ab")}}
D.fv.prototype={
$1:function(a){var u
H.n(a,{func:1,ret:-1,args:[D.y]})
u=this.a.a
u.b
a.$1(u)},
$S:19}
D.fw.prototype={
$1:function(a){var u
H.n(a,{func:1,ret:-1,args:[D.y]})
u=this.a.a
u.b
a.$1(u)},
$S:19}
D.y.prototype={}
D.bO.prototype={}
D.bP.prototype={}
D.R.prototype={
i:function(a){return"ValueChanged: "+this.c+", "+H.l(this.d)+" => "+H.l(this.e)}}
X.d7.prototype={
v:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.d7))return!1
if(this.a!=b.a)return!1
if(!this.b.v(0,b.b))return!1
return!0},
i:function(a){return this.b.i(0)+H.l(this.a)}}
X.dm.prototype={
v:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.dm))return!1
if(this.a!=b.a)return!1
if(!this.b.v(0,b.b))return!1
return!0},
i:function(a){return this.b.i(0)+H.l(this.a)}}
X.fT.prototype={
jD:function(a){this.c=a.b
this.d.h(0,a.a)
return!1},
jz:function(a){this.c=a.b
this.d.T(0,a.a)
return!1},
shE:function(a){this.d=H.m(a,"$ikM",[P.B],"$akM")}}
X.ds.prototype={}
X.fZ.prototype={
aU:function(a,b){var u,t,s,r,q,p,o,n
u=new P.ai(Date.now(),!1)
t=this.x
s=b.a
r=this.Q
if(typeof s!=="number")return s.u()
q=b.b
p=this.ch
if(typeof q!=="number")return q.u()
o=new V.a9(t.a+s*r,t.b+q*p)
p=this.a.gaM()
n=new X.bc(a,V.by(),this.x,this.y,this.z,p,o,u,this)
n.b=!0
this.z=u
this.x=o
return n},
cv:function(a,b){this.r=a.a
return!1},
b0:function(a,b){var u,t
u=this.r
t=a.a
if(typeof t!=="number")return t.ex()
if(typeof u!=="number")return u.ek()
this.r=(u&~t)>>>0
return!1},
b_:function(a,b){var u=this.d
if(u==null)return!1
u.G(this.aU(a,b))
return!0},
jE:function(a){var u,t,s,r,q,p,o,n
u=this.e
if(u==null)return!1
t=this.a.gaM()
s=this.x
r=Date.now()
q=a.a
p=this.cx
if(typeof q!=="number")return q.u()
o=a.b
n=this.cy
if(typeof o!=="number")return o.u()
r=new X.co(new V.O(q*p,o*n),t,s,new P.ai(r,!1),this)
r.b=!0
u.G(r)
return!0},
hf:function(a,b,c){var u,t,s
if(this.f==null)return
u=new P.ai(Date.now(),!1)
t=this.f
s=new X.ds(c,a,this.a.gaM(),b,u,this)
s.b=!0
t.G(s)
this.y=u
this.x=V.by()}}
X.ar.prototype={
v:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.ar))return!1
if(this.a!==b.a)return!1
if(this.b!=b.b)return!1
if(this.c!=b.c)return!1
return!0},
i:function(a){var u=this.a?"Ctrl+":""
u+=this.b?"Alt+":""
return u+(this.c?"Shift+":"")}}
X.bc.prototype={}
X.hg.prototype={
bN:function(a,b,c){var u,t,s
u=new P.ai(Date.now(),!1)
t=this.a.gaM()
s=new X.bc(a,this.r,this.x,this.y,this.z,t,b,u,this)
s.b=!0
if(c){this.y=u
this.r=b}this.z=u
this.x=b
return s},
cv:function(a,b){var u
this.f=a.a
u=this.b
if(u==null)return!1
u.G(this.bN(a,b,!0))
return!0},
b0:function(a,b){var u,t
u=this.f
t=a.a
if(typeof t!=="number")return t.ex()
if(typeof u!=="number")return u.ek()
this.f=(u&~t)>>>0
u=this.c
if(u==null)return!1
u.G(this.bN(a,b,!0))
return!0},
b_:function(a,b){var u=this.d
if(u==null)return!1
u.G(this.bN(a,b,!1))
return!0},
jF:function(a,b){var u,t,s,r,q,p,o
u=this.e
if(u==null)return!1
t=this.a.gaM()
s=Date.now()
r=a.a
q=this.Q
if(typeof r!=="number")return r.u()
p=a.b
o=this.ch
if(typeof p!=="number")return p.u()
s=new X.co(new V.O(r*q,p*o),t,b,new P.ai(s,!1),this)
s.b=!0
u.G(s)
return!0},
gdA:function(){var u=this.b
if(u==null){u=D.Q()
this.b=u}return u},
gbA:function(){var u=this.c
if(u==null){u=D.Q()
this.c=u}return u},
ge0:function(){var u=this.d
if(u==null){u=D.Q()
this.d=u}return u}}
X.co.prototype={}
X.hx.prototype={}
X.dW.prototype={}
X.ib.prototype={
aU:function(a,b){var u,t,s,r
H.m(a,"$ib",[V.a9],"$ab")
u=new P.ai(Date.now(),!1)
t=a.length>0?a[0]:V.by()
s=this.a.gaM()
r=new X.dW(a,this.f,this.r,this.x,this.y,s,t,u,this)
r.b=!0
if(b){this.x=u
this.f=t}this.y=u
this.r=t
return r},
jC:function(a){var u
H.m(a,"$ib",[V.a9],"$ab")
u=this.b
if(u==null)return!1
u.G(this.aU(a,!0))
return!0},
jA:function(a){var u
H.m(a,"$ib",[V.a9],"$ab")
u=this.c
if(u==null)return!1
u.G(this.aU(a,!0))
return!0},
jB:function(a){var u
H.m(a,"$ib",[V.a9],"$ab")
u=this.d
if(u==null)return!1
u.G(this.aU(a,!1))
return!0}}
X.e0.prototype={
gaM:function(){var u=this.a
return V.kK(0,0,C.p.gds(u).c,C.p.gds(u).d)},
d_:function(a){var u,t
u=a.keyCode
t=a.ctrlKey||a.metaKey
return new X.dm(u,new X.ar(t,a.altKey,a.shiftKey))},
aJ:function(a){var u,t
u=this.b
t=a.ctrlKey||a.metaKey
u.c=new X.ar(t,a.altKey,a.shiftKey)},
c5:function(a){var u,t
u=this.b
t=a.ctrlKey||a.metaKey
u.c=new X.ar(t,a.altKey,a.shiftKey)},
at:function(a){var u,t,s,r,q
u=this.a.getBoundingClientRect()
t=a.pageX
s=a.pageY
r=u.left
if(typeof t!=="number")return t.q()
q=u.top
if(typeof s!=="number")return s.q()
return new V.a9(t-r,s-q)},
aV:function(a){return new V.O(a.movementX,a.movementY)},
c1:function(a){var u,t,s,r,q,p,o,n
u=this.a.getBoundingClientRect()
t=H.c([],[V.a9])
for(s=a.touches,r=s.length,q=0;q<s.length;s.length===r||(0,H.E)(s),++q){p=s[q]
o=C.d.af(p.pageX)
C.d.af(p.pageY)
n=u.left
C.d.af(p.pageX)
C.a.h(t,new V.a9(o-n,C.d.af(p.pageY)-u.top))}return t},
ar:function(a){var u,t
u=a.buttons
t=a.ctrlKey||a.metaKey
return new X.d7(u,new X.ar(t,a.altKey,a.shiftKey))},
bS:function(a){var u,t,s,r,q,p
u=this.a.getBoundingClientRect()
t=a.pageX
s=a.pageY
r=u.left
if(typeof t!=="number")return t.q()
q=t-r
if(q<0)return!1
t=u.top
if(typeof s!=="number")return s.q()
p=s-t
if(p<0)return!1
return q<u.width&&p<u.height},
h9:function(a){this.f=!0},
fW:function(a){this.f=!1},
h3:function(a){H.k(a,"$ia7")
if(this.f&&this.bS(a))a.preventDefault()},
hd:function(a){var u
H.k(a,"$iaS")
if(!this.f)return
u=this.d_(a)
this.b.jD(u)},
hb:function(a){var u
H.k(a,"$iaS")
if(!this.f)return
u=this.d_(a)
this.b.jz(u)},
hh:function(a){var u,t,s,r
H.k(a,"$ia7")
u=this.a
u.focus()
this.f=!0
this.aJ(a)
if(this.x){t=this.ar(a)
s=this.aV(a)
if(this.d.cv(t,s))a.preventDefault()
return}if(this.r){this.y=a
u.requestPointerLock()
return}t=this.ar(a)
r=this.at(a)
if(this.c.cv(t,r))a.preventDefault()},
hl:function(a){var u,t,s
H.k(a,"$ia7")
this.aJ(a)
u=this.ar(a)
if(this.x){t=this.aV(a)
if(this.d.b0(u,t))a.preventDefault()
return}if(this.r)return
s=this.at(a)
if(this.c.b0(u,s))a.preventDefault()},
h7:function(a){var u,t,s
H.k(a,"$ia7")
if(!this.bS(a)){this.aJ(a)
u=this.ar(a)
if(this.x){t=this.aV(a)
if(this.d.b0(u,t))a.preventDefault()
return}if(this.r)return
s=this.at(a)
if(this.c.b0(u,s))a.preventDefault()}},
hj:function(a){var u,t,s
H.k(a,"$ia7")
this.aJ(a)
u=this.ar(a)
if(this.x){t=this.aV(a)
if(this.d.b_(u,t))a.preventDefault()
return}if(this.r)return
s=this.at(a)
if(this.c.b_(u,s))a.preventDefault()},
h5:function(a){var u,t,s
H.k(a,"$ia7")
if(!this.bS(a)){this.aJ(a)
u=this.ar(a)
if(this.x){t=this.aV(a)
if(this.d.b_(u,t))a.preventDefault()
return}if(this.r)return
s=this.at(a)
if(this.c.b_(u,s))a.preventDefault()}},
hn:function(a){var u,t
H.k(a,"$ib4")
this.aJ(a)
u=new V.O((a&&C.E).gj4(a),C.E.gj5(a)).A(0,180)
if(this.x){if(this.d.jE(u))a.preventDefault()
return}if(this.r)return
t=this.at(a)
if(this.c.jF(u,t))a.preventDefault()},
hp:function(a){var u,t,s
u=document.pointerLockElement===this.a
if(u!==this.x){this.x=u
t=this.ar(this.y)
s=this.at(this.y)
this.d.hf(t,s,u)}},
hC:function(a){var u
H.k(a,"$iaF")
this.a.focus()
this.f=!0
this.c5(a)
u=this.c1(a)
if(this.e.jC(u))a.preventDefault()},
hy:function(a){var u
H.k(a,"$iaF")
this.c5(a)
u=this.c1(a)
if(this.e.jA(u))a.preventDefault()},
hA:function(a){var u
H.k(a,"$iaF")
this.c5(a)
u=this.c1(a)
if(this.e.jB(u))a.preventDefault()},
sfp:function(a){this.z=H.m(a,"$ib",[[P.cx,P.L]],"$ab")}}
D.bt.prototype={
gw:function(){var u=this.d
if(u==null){u=D.Q()
this.d=u}return u},
ap:function(a){var u
H.k(a,"$iy")
u=this.d
if(u!=null)u.G(a)},
eW:function(){return this.ap(null)},
$ia4:1,
$ibd:1}
D.a4.prototype={$ibd:1}
D.dn.prototype={
gw:function(){var u=this.Q
if(u==null){u=D.Q()
this.Q=u}return u},
ap:function(a){var u=this.Q
if(u!=null)u.G(a)},
d7:function(a){var u
H.k(a,"$iy")
u=this.ch
if(u!=null)u.G(a)},
he:function(){return this.d7(null)},
hs:function(a){var u,t,s
H.m(a,"$ie",[D.a4],"$ae")
for(u=a.length,t=0;t<a.length;a.length===u||(0,H.E)(a),++t){s=a[t]
if(s==null||this.eU(s))return!1}return!0},
fQ:function(a,b){var u,t,s,r,q,p,o,n
u=D.a4
H.m(b,"$ie",[u],"$ae")
for(t=b.length,s=this.gd6(),r={func:1,ret:-1,args:[D.y]},q=[r],p=0;p<b.length;b.length===t||(0,H.E)(b),++p){o=H.k(b[p],"$ia4")
if(o instanceof D.bt)C.a.h(this.e,o)
n=o.d
if(n==null){n=new D.bL()
n.sab(null)
n.saI(null)
n.c=null
n.d=0
o.d=n}H.n(s,r)
if(n.a==null)n.sab(H.c([],q))
n=n.a;(n&&C.a).h(n,s)}u=new D.bO(a,b,this,[u])
u.b=!0
this.ap(u)},
hw:function(a,b){var u,t,s,r
u=D.a4
H.m(b,"$ie",[u],"$ae")
for(t=b.gS(b),s=this.gd6();t.B();){r=t.gH(t)
C.a.T(this.e,r)
r.gw().T(0,s)}u=new D.bP(a,b,this,[u])
u.b=!0
this.ap(u)},
eU:function(a){var u=C.a.X(this.e,a)
return u},
sfm:function(a){this.e=H.m(a,"$ib",[D.bt],"$ab")},
shD:function(a){this.f=H.m(a,"$ib",[D.dE],"$ab")},
si1:function(a){this.r=H.m(a,"$ib",[D.dL],"$ab")},
sic:function(a){this.x=H.m(a,"$ib",[D.dR],"$ab")},
sie:function(a){this.y=H.m(a,"$ib",[D.dS],"$ab")},
sig:function(a){this.z=H.m(a,"$ib",[D.dT],"$ab")},
$ae:function(){return[D.a4]},
$aa2:function(){return[D.a4]}}
D.dE.prototype={$ia4:1,$ibd:1}
D.dL.prototype={$ia4:1,$ibd:1}
D.dR.prototype={$ia4:1,$ibd:1}
D.dS.prototype={$ia4:1,$ibd:1}
D.dT.prototype={$ia4:1,$ibd:1}
V.a1.prototype={
p:function(a,b){var u,t,s
u=C.d.p(this.a,b.gcz())
t=C.d.p(this.b,b.gbD())
s=C.d.p(this.c,b.gca())
if(u<0)u=0
else if(u>1)u=1
if(t<0)t=0
else if(t>1)t=1
if(s<0)s=0
else if(s>1)s=1
return new V.a1(u,t,s)},
q:function(a,b){var u,t,s
u=C.d.q(this.a,b.gcz())
t=C.d.q(this.b,b.gbD())
s=C.d.q(this.c,b.gca())
if(u<0)u=0
else if(u>1)u=1
if(t<0)t=0
else if(t>1)t=1
if(s<0)s=0
else if(s>1)s=1
return new V.a1(u,t,s)},
v:function(a,b){var u,t
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.a1))return!1
u=b.a
t=$.P().a
if(!(Math.abs(u-this.a)<t))return!1
if(!(Math.abs(b.b-this.b)<t))return!1
if(!(Math.abs(b.c-this.c)<t))return!1
return!0},
i:function(a){return"["+V.a_(this.a,3,0)+", "+V.a_(this.b,3,0)+", "+V.a_(this.c,3,0)+"]"}}
V.b7.prototype={
p:function(a,b){var u,t,s,r
u=C.d.p(this.a,b.gcz())
t=C.d.p(this.b,b.gbD())
s=C.d.p(this.c,b.gca())
r=C.d.p(this.d,b.giK(b))
if(u<0)u=0
else if(u>1)u=1
if(t<0)t=0
else if(t>1)t=1
if(s<0)s=0
else if(s>1)s=1
if(r<0)r=0
else if(r>1)r=1
return new V.b7(u,t,s,r)},
q:function(a,b){var u,t,s,r
u=C.d.q(this.a,b.gcz())
t=C.d.q(this.b,b.gbD())
s=C.d.q(this.c,b.gca())
r=C.d.q(this.d,b.giK(b))
if(u<0)u=0
else if(u>1)u=1
if(t<0)t=0
else if(t>1)t=1
if(s<0)s=0
else if(s>1)s=1
if(r<0)r=0
else if(r>1)r=1
return new V.b7(u,t,s,r)},
v:function(a,b){var u,t
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.b7))return!1
u=b.a
t=$.P().a
if(!(Math.abs(u-this.a)<t))return!1
if(!(Math.abs(b.b-this.b)<t))return!1
if(!(Math.abs(b.c-this.c)<t))return!1
if(!(Math.abs(b.d-this.d)<t))return!1
return!0},
i:function(a){return"["+V.a_(this.a,3,0)+", "+V.a_(this.b,3,0)+", "+V.a_(this.c,3,0)+", "+V.a_(this.d,3,0)+"]"}}
V.ft.prototype={}
V.dw.prototype={
aa:function(a,b){var u=H.c([this.a,this.d,this.r,this.b,this.e,this.x,this.c,this.f,this.y],[P.z])
return u},
v:function(a,b){var u,t
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.dw))return!1
u=b.a
t=$.P().a
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
t=V.c3(H.c([this.a,this.d,this.r],u),3,0)
s=V.c3(H.c([this.b,this.e,this.x],u),3,0)
r=V.c3(H.c([this.c,this.f,this.y],u),3,0)
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
V.ak.prototype={
aa:function(a,b){var u=H.c([this.a,this.e,this.y,this.cx,this.b,this.f,this.z,this.cy,this.c,this.r,this.Q,this.db,this.d,this.x,this.ch,this.dx],[P.z])
return u},
dZ:function(b1){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0
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
if(Math.abs(a7-0)<$.P().a)return V.dx()
a8=1/a7
a9=-r
b0=-d
return V.aU((t*a6-p*a5+m*a4)*a8,(-s*a6+o*a5-l*a4)*a8,(f*h-b*i+a1*j)*a8,(-e*h+a*i-a2*j)*a8,(a9*a6+p*a3-m*a0)*a8,(u*a6-o*a3+l*a0)*a8,(b0*h+b*k-a1*n)*a8,(g*h-a*k+a2*n)*a8,(r*a5-t*a3+m*c)*a8,(-u*a5+s*a3-l*c)*a8,(d*i-f*k+a1*q)*a8,(-g*i+e*k-a2*q)*a8,(a9*a4+t*a0-p*c)*a8,(u*a4-s*a0+o*c)*a8,(b0*j+f*n-b*q)*a8,(g*j-e*n+a*q)*a8)},
u:function(b1,b2){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0
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
return V.aU(u*t+s*r+q*p+o*n,u*m+s*l+q*k+o*j,u*i+s*h+q*g+o*f,u*e+s*d+q*c+o*b,a*t+a0*r+a1*p+a2*n,a*m+a0*l+a1*k+a2*j,a*i+a0*h+a1*g+a2*f,a*e+a0*d+a1*c+a2*b,a3*t+a4*r+a5*p+a6*n,a3*m+a4*l+a5*k+a6*j,a3*i+a4*h+a5*g+a6*f,a3*e+a4*d+a5*c+a6*b,a7*t+a8*r+a9*p+b0*n,a7*m+a8*l+a9*k+b0*j,a7*i+a8*h+a9*g+b0*f,a7*e+a8*d+a9*c+b0*b)},
cD:function(a){var u,t,s
u=a.a
t=a.b
s=a.c
return new V.U(this.a*u+this.b*t+this.c*s,this.e*u+this.f*t+this.r*s,this.y*u+this.z*t+this.Q*s)},
b3:function(a){var u,t,s
u=a.a
t=a.b
s=a.c
return new V.aa(this.a*u+this.b*t+this.c*s+this.d,this.e*u+this.f*t+this.r*s+this.x,this.y*u+this.z*t+this.Q*s+this.ch)},
v:function(a,b){var u,t
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.ak))return!1
u=b.a
t=$.P().a
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
i:function(a){return this.R()},
dY:function(a,b,c){var u,t,s,r,q,p,o,n,m,l
u=[P.z]
t=V.c3(H.c([this.a,this.e,this.y,this.cx],u),b,c)
s=V.c3(H.c([this.b,this.f,this.z,this.cy],u),b,c)
r=V.c3(H.c([this.c,this.r,this.Q,this.db],u),b,c)
q=V.c3(H.c([this.d,this.x,this.ch,this.dx],u),b,c)
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
R:function(){return this.dY("",3,0)},
D:function(a){return this.dY(a,3,0)}}
V.a9.prototype={
p:function(a,b){return new V.a9(this.a+b.a,this.b+b.b)},
q:function(a,b){return new V.a9(this.a-b.a,this.b-b.b)},
v:function(a,b){var u,t
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.a9))return!1
u=b.a
t=$.P().a
if(!(Math.abs(u-this.a)<t))return!1
if(!(Math.abs(b.b-this.b)<t))return!1
return!0},
i:function(a){return"["+V.a_(this.a,3,0)+", "+V.a_(this.b,3,0)+"]"}}
V.aa.prototype={
p:function(a,b){return new V.aa(this.a+b.a,this.b+b.b,this.c+b.c)},
q:function(a,b){return new V.aa(this.a-b.a,this.b-b.b,this.c-b.c)},
u:function(a,b){return new V.aa(this.a*b,this.b*b,this.c*b)},
v:function(a,b){var u,t
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.aa))return!1
u=b.a
t=$.P().a
if(!(Math.abs(u-this.a)<t))return!1
if(!(Math.abs(b.b-this.b)<t))return!1
if(!(Math.abs(b.c-this.c)<t))return!1
return!0},
i:function(a){return"["+V.a_(this.a,3,0)+", "+V.a_(this.b,3,0)+", "+V.a_(this.c,3,0)+"]"}}
V.dI.prototype={
ga4:function(){var u,t
u=this.c
t=this.d
if(u>t)return t
else return u},
v:function(a,b){var u,t
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.dI))return!1
u=b.a
t=$.P().a
if(!(Math.abs(u-this.a)<t))return!1
if(!(Math.abs(b.b-this.b)<t))return!1
if(!(Math.abs(b.c-this.c)<t))return!1
if(!(Math.abs(b.d-this.d)<t))return!1
return!0},
i:function(a){return"["+V.a_(this.a,3,0)+", "+V.a_(this.b,3,0)+", "+V.a_(this.c,3,0)+", "+V.a_(this.d,3,0)+"]"}}
V.O.prototype={
cq:function(a){return Math.sqrt(this.E(this))},
E:function(a){var u,t,s,r
u=this.a
t=a.a
if(typeof u!=="number")return u.u()
if(typeof t!=="number")return H.G(t)
s=this.b
r=a.b
if(typeof s!=="number")return s.u()
if(typeof r!=="number")return H.G(r)
return u*t+s*r},
p:function(a,b){var u,t,s
u=this.a
t=b.gja(b)
if(typeof u!=="number")return u.p()
t=C.d.p(u,t)
u=this.b
s=b.gjb(b)
if(typeof u!=="number")return u.p()
return new V.O(t,C.d.p(u,s))},
q:function(a,b){var u,t,s
u=this.a
t=b.gja(b)
if(typeof u!=="number")return u.q()
t=C.d.q(u,t)
u=this.b
s=b.gjb(b)
if(typeof u!=="number")return u.q()
return new V.O(t,C.d.q(u,s))},
u:function(a,b){var u,t
u=this.a
if(typeof u!=="number")return u.u()
t=this.b
if(typeof t!=="number")return t.u()
return new V.O(u*b,t*b)},
A:function(a,b){var u,t
if(Math.abs(b-0)<$.P().a){u=$.kU
if(u==null){u=new V.O(0,0)
$.kU=u}return u}u=this.a
if(typeof u!=="number")return u.A()
t=this.b
if(typeof t!=="number")return t.A()
return new V.O(u/b,t/b)},
v:function(a,b){var u,t,s
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.O))return!1
u=b.a
t=this.a
s=$.P()
s.toString
if(typeof u!=="number")return u.q()
if(typeof t!=="number")return H.G(t)
s=s.a
if(!(Math.abs(u-t)<s))return!1
u=b.b
t=this.b
if(typeof u!=="number")return u.q()
if(typeof t!=="number")return H.G(t)
if(!(Math.abs(u-t)<s))return!1
return!0},
i:function(a){return"["+V.a_(this.a,3,0)+", "+V.a_(this.b,3,0)+"]"}}
V.U.prototype={
cq:function(a){return Math.sqrt(this.E(this))},
E:function(a){return this.a*a.a+this.b*a.b+this.c*a.c},
au:function(a){var u,t,s,r,q,p
u=this.b
t=a.c
s=this.c
r=a.b
q=a.a
p=this.a
return new V.U(u*t-s*r,s*q-p*t,p*r-u*q)},
p:function(a,b){return new V.U(this.a+b.a,this.b+b.b,this.c+b.c)},
q:function(a,b){return new V.U(this.a-b.a,this.b-b.b,this.c-b.c)},
P:function(a){return new V.U(-this.a,-this.b,-this.c)},
u:function(a,b){return new V.U(this.a*b,this.b*b,this.c*b)},
A:function(a,b){if(Math.abs(b-0)<$.P().a)return V.cI()
return new V.U(this.a/b,this.b/b,this.c/b)},
e_:function(){var u=$.P().a
if(!(Math.abs(0-this.a)<u))return!1
if(!(Math.abs(0-this.b)<u))return!1
if(!(Math.abs(0-this.c)<u))return!1
return!0},
v:function(a,b){var u,t
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.U))return!1
u=b.a
t=$.P().a
if(!(Math.abs(u-this.a)<t))return!1
if(!(Math.abs(b.b-this.b)<t))return!1
if(!(Math.abs(b.c-this.c)<t))return!1
return!0},
i:function(a){return"["+V.a_(this.a,3,0)+", "+V.a_(this.b,3,0)+", "+V.a_(this.c,3,0)+"]"}}
U.fc.prototype={
bI:function(a){var u=V.nb(a,this.c,this.b)
return u},
gw:function(){var u=this.y
if(u==null){u=D.Q()
this.y=u}return u},
M:function(a){var u=this.y
if(u!=null)u.G(a)},
scE:function(a,b){},
scs:function(a){var u,t
u=this.b
if(!(Math.abs(u-a)<$.P().a)){this.b=a
if(a<this.c){this.c=a
this.d=a}else{t=this.d
if(a<t)this.d=this.bI(t)}u=new D.R("maximumLocation",u,this.b,this,[P.z])
u.b=!0
this.M(u)}},
scu:function(a){var u,t
u=this.c
if(!(Math.abs(u-a)<$.P().a)){this.c=a
if(this.b<a){this.b=a
this.d=a}else{t=this.d
if(a>t)this.d=this.bI(t)}u=new D.R("minimumLocation",u,this.c,this,[P.z])
u.b=!0
this.M(u)}},
sa3:function(a,b){var u
b=this.bI(b)
u=this.d
if(!(Math.abs(u-b)<$.P().a)){this.d=b
u=new D.R("location",u,b,this,[P.z])
u.b=!0
this.M(u)}},
sct:function(a){var u,t,s
u=this.e
if(!(Math.abs(u-a)<$.P().a)){this.e=a
t=this.f
s=-a
if(t<s)t=s
else if(t>a)t=a
this.f=t
u=new D.R("maximumVelocity",u,a,this,[P.z])
u.b=!0
this.M(u)}},
sV:function(a){var u,t
u=this.e
t=-u
if(a<t)a=t
else if(a>u)a=u
u=this.f
if(!(Math.abs(u-a)<$.P().a)){this.f=a
u=new D.R("velocity",u,a,this,[P.z])
u.b=!0
this.M(u)}},
scf:function(a){var u
if(a<0)a=0
else if(a>1)a=1
u=this.x
if(!(Math.abs(u-a)<$.P().a)){this.x=a
u=new D.R("dampening",u,a,this,[P.z])
u.b=!0
this.M(u)}},
an:function(a,b){var u,t,s,r,q
u=this.f
t=$.P().a
if(!(Math.abs(u-0)<t)||!(Math.abs(this.r-0)<t)){s=u+this.r*b
u=this.e
r=-u
if(s<r)s=r
else if(s>u)s=u
this.sa3(0,this.d+s*b)
u=this.x
if(!(Math.abs(u-0)<$.P().a)){q=s*Math.pow(1-u,b)
if(s<0){if(q<s)q=s
else if(q>0)q=0}else if(q<0)q=0
else if(q>s)q=s
s=q}this.sV(s)}}}
U.d9.prototype={
gw:function(){var u=this.b
if(u==null){u=D.Q()
this.b=u}return u},
aQ:function(a,b,c){return this.a},
v:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.d9))return!1
return J.Y(this.a,b.a)},
i:function(a){return"Constant: "+this.a.D("          ")}}
U.ck.prototype={
gw:function(){var u=this.e
if(u==null){u=D.Q()
this.e=u}return u},
M:function(a){var u
H.k(a,"$iy")
u=this.e
if(u!=null)u.G(a)},
a0:function(){return this.M(null)},
fO:function(a,b){var u,t,s,r,q,p,o,n
u=U.a8
H.m(b,"$ie",[u],"$ae")
for(t=b.length,s=this.gaD(),r={func:1,ret:-1,args:[D.y]},q=[r],p=0;p<b.length;b.length===t||(0,H.E)(b),++p){o=b[p]
if(o!=null){n=o.gw()
n.toString
H.n(s,r)
if(n.a==null)n.sab(H.c([],q))
n=n.a;(n&&C.a).h(n,s)}}u=new D.bO(a,b,this,[u])
u.b=!0
this.M(u)},
hu:function(a,b){var u,t,s
u=U.a8
H.m(b,"$ie",[u],"$ae")
for(t=b.gS(b),s=this.gaD();t.B();)t.gH(t).gw().T(0,s)
u=new D.bP(a,b,this,[u])
u.b=!0
this.M(u)},
aQ:function(a,b,c){var u,t,s,r
u=this.r
t=b.e
if(typeof u!=="number")return u.aS()
if(u<t){this.r=t
u=this.e
if(u!=null)++u.d
for(u=this.a,u=new J.ap(u,u.length,0,[H.x(u,0)]),s=null;u.B();){t=u.d
if(t!=null){r=t.aQ(0,b,c)
if(r!=null)s=s==null?r:r.u(0,s)}}this.f=s==null?V.dx():s
u=this.e
if(u!=null)u.az(0)}return this.f},
v:function(a,b){var u,t,s,r
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.ck))return!1
u=this.a.length
for(t=0;t<u;++t){s=this.a
if(t>=s.length)return H.j(s,t)
s=s[t]
r=b.a
if(t>=r.length)return H.j(r,t)
if(!J.Y(s,r[t]))return!1}return!0},
i:function(a){return"Group"},
$ae:function(){return[U.a8]},
$aa2:function(){return[U.a8]},
$ia8:1}
U.a8.prototype={}
U.e1.prototype={
gw:function(){var u=this.cy
if(u==null){u=D.Q()
this.cy=u}return u},
M:function(a){var u
H.k(a,"$iy")
u=this.cy
if(u!=null)u.G(a)},
a0:function(){return this.M(null)},
aX:function(a){if(this.a!=null)return!1
this.a=a
a.c.gdA().h(0,this.gbT())
this.a.c.ge0().h(0,this.gbV())
this.a.c.gbA().h(0,this.gbX())
return!0},
bU:function(a){H.k(a,"$iy")
if(!J.Y(this.c,this.a.b.c))return
this.y=!0
this.x=!0
this.z=this.b.d},
bW:function(a){var u,t,s,r,q,p,o
a=H.i(H.k(a,"$iy"),"$ibc")
if(!this.y)return
if(this.x){u=a.d.q(0,a.y)
u=new V.O(u.a,u.b)
u=u.E(u)
t=this.r
if(typeof t!=="number")return H.G(t)
if(u<t)return
this.x=!1}if(this.d){u=a.c
t=a.d.q(0,a.y)
u=new V.O(t.a,t.b).u(0,2).A(0,u.ga4())
this.Q=u
t=this.b
u=u.a
if(typeof u!=="number")return u.u()
s=this.e
if(typeof s!=="number")return H.G(s)
t.sV(u*10*s)}else{u=a.c
t=a.d
s=t.q(0,a.y)
r=new V.O(s.a,s.b).u(0,2).A(0,u.ga4())
s=this.b
q=r.a
if(typeof q!=="number")return q.P()
p=this.e
if(typeof p!=="number")return H.G(p)
o=this.z
if(typeof o!=="number")return H.G(o)
s.sa3(0,-q*p+o)
this.b.sV(0)
t=t.q(0,a.z)
this.Q=new V.O(t.a,t.b).u(0,2).A(0,u.ga4())}this.a0()},
bY:function(a){var u,t,s
H.k(a,"$iy")
if(!this.y)return
this.y=!1
if(this.x)return
u=this.Q
if(u.E(u)>0.0001){u=this.b
t=this.Q.a
if(typeof t!=="number")return t.u()
s=this.e
if(typeof s!=="number")return H.G(s)
u.sV(t*10*s)
this.a0()}},
aQ:function(a,b,c){var u,t,s,r,q
u=this.ch
t=b.e
if(typeof u!=="number")return u.aS()
if(u<t){this.ch=t
s=b.y
this.b.an(0,s)
u=this.b.d
r=Math.cos(u)
q=Math.sin(u)
this.cx=V.aU(r,-q,0,0,q,r,0,0,0,0,1,0,0,0,0,1)}return this.cx},
$ia8:1}
U.e2.prototype={
gw:function(){var u=this.fx
if(u==null){u=D.Q()
this.fx=u}return u},
M:function(a){var u
H.k(a,"$iy")
u=this.fx
if(u!=null)u.G(a)},
a0:function(){return this.M(null)},
aX:function(a){var u,t
if(this.a!=null)return!1
this.a=a
a.c.gdA().h(0,this.gbT())
this.a.c.ge0().h(0,this.gbV())
this.a.c.gbA().h(0,this.gbX())
u=this.a.d
t=u.f
if(t==null){t=D.Q()
u.f=t
u=t}else u=t
u.h(0,this.gfG())
u=this.a.d
t=u.d
if(t==null){t=D.Q()
u.d=t
u=t}else u=t
u.h(0,this.gfI())
u=this.a.e
t=u.b
if(t==null){t=D.Q()
u.b=t
u=t}else u=t
u.h(0,this.gi9())
u=this.a.e
t=u.d
if(t==null){t=D.Q()
u.d=t
u=t}else u=t
u.h(0,this.gi7())
u=this.a.e
t=u.c
if(t==null){t=D.Q()
u.c=t
u=t}else u=t
u.h(0,this.gi5())
return!0},
ai:function(a){var u,t
u=a.a
t=a.b
if(this.f){if(typeof u!=="number")return u.P()
u=-u}if(this.r){if(typeof t!=="number")return t.P()
t=-t}return new V.O(u,t)},
bU:function(a){a=H.i(H.k(a,"$iy"),"$ibc")
if(!J.Y(this.d,a.x.b))return
this.cx=!0
this.ch=!0
this.cy=this.c.d
this.db=this.b.d},
bW:function(a){var u,t,s,r,q,p,o
a=H.i(H.k(a,"$iy"),"$ibc")
if(!this.cx)return
if(this.ch){u=a.d.q(0,a.y)
u=new V.O(u.a,u.b)
u=u.E(u)
t=this.Q
if(typeof t!=="number")return H.G(t)
if(u<t)return
this.ch=!1}if(this.e){u=a.c
t=a.d.q(0,a.y)
u=this.ai(new V.O(t.a,t.b).u(0,2).A(0,u.ga4()))
this.dx=u
t=this.c
u=u.a
if(typeof u!=="number")return u.P()
s=this.y
if(typeof s!=="number")return H.G(s)
t.sV(-u*10*s)
s=this.b
u=this.dx.b
if(typeof u!=="number")return u.P()
t=this.x
if(typeof t!=="number")return H.G(t)
s.sV(-u*10*t)}else{u=a.c
t=a.d
s=t.q(0,a.y)
r=this.ai(new V.O(s.a,s.b).u(0,2).A(0,u.ga4()))
s=this.c
q=r.a
if(typeof q!=="number")return q.P()
p=this.y
if(typeof p!=="number")return H.G(p)
o=this.cy
if(typeof o!=="number")return H.G(o)
s.sa3(0,-q*p+o)
o=this.b
p=r.b
if(typeof p!=="number")return p.P()
q=this.x
if(typeof q!=="number")return H.G(q)
s=this.db
if(typeof s!=="number")return H.G(s)
o.sa3(0,-p*q+s)
this.b.sV(0)
this.c.sV(0)
t=t.q(0,a.z)
this.dx=this.ai(new V.O(t.a,t.b).u(0,2).A(0,u.ga4()))}this.a0()},
bY:function(a){var u,t,s
H.k(a,"$iy")
if(!this.cx)return
this.cx=!1
if(this.ch)return
u=this.dx
if(u.E(u)>0.0001){u=this.c
t=this.dx.a
if(typeof t!=="number")return t.P()
s=this.y
if(typeof s!=="number")return H.G(s)
u.sV(-t*10*s)
s=this.b
t=this.dx.b
if(typeof t!=="number")return t.P()
u=this.x
if(typeof u!=="number")return H.G(u)
s.sV(-t*10*u)
this.a0()}},
fH:function(a){if(H.i(H.k(a,"$iy"),"$ids").x){this.ch=!0
this.cy=this.c.d
this.db=this.b.d}},
fJ:function(a){var u,t,s,r,q,p,o
a=H.i(H.k(a,"$iy"),"$ibc")
if(!J.Y(this.d,a.x.b))return
u=a.c
t=a.d
s=t.q(0,a.y)
r=this.ai(new V.O(s.a,s.b).u(0,2).A(0,u.ga4()))
s=this.c
q=r.a
if(typeof q!=="number")return q.P()
p=this.y
if(typeof p!=="number")return H.G(p)
o=this.cy
if(typeof o!=="number")return H.G(o)
s.sa3(0,-q*p+o)
o=this.b
p=r.b
if(typeof p!=="number")return p.P()
q=this.x
if(typeof q!=="number")return H.G(q)
s=this.db
if(typeof s!=="number")return H.G(s)
o.sa3(0,-p*q+s)
this.b.sV(0)
this.c.sV(0)
t=t.q(0,a.z)
this.dx=this.ai(new V.O(t.a,t.b).u(0,2).A(0,u.ga4()))
this.a0()},
ia:function(a){H.k(a,"$iy")
this.cx=!0
this.ch=!0
this.cy=this.c.d
this.db=this.b.d},
i8:function(a){var u,t,s,r,q,p,o
a=H.i(H.k(a,"$iy"),"$idW")
if(!this.cx)return
if(this.ch){u=a.d.q(0,a.y)
u=new V.O(u.a,u.b)
u=u.E(u)
t=this.Q
if(typeof t!=="number")return H.G(t)
if(u<t)return
this.ch=!1}if(this.e){u=a.c
t=a.d.q(0,a.y)
u=this.ai(new V.O(t.a,t.b).u(0,2).A(0,u.ga4()))
this.dx=u
t=this.c
u=u.a
if(typeof u!=="number")return u.P()
s=this.y
if(typeof s!=="number")return H.G(s)
t.sV(-u*10*s)
s=this.b
u=this.dx.b
if(typeof u!=="number")return u.P()
t=this.x
if(typeof t!=="number")return H.G(t)
s.sV(-u*10*t)}else{u=a.c
t=a.d
s=t.q(0,a.y)
r=this.ai(new V.O(s.a,s.b).u(0,2).A(0,u.ga4()))
s=this.c
q=r.a
if(typeof q!=="number")return q.P()
p=this.y
if(typeof p!=="number")return H.G(p)
o=this.cy
if(typeof o!=="number")return H.G(o)
s.sa3(0,-q*p+o)
o=this.b
p=r.b
if(typeof p!=="number")return p.P()
q=this.x
if(typeof q!=="number")return H.G(q)
s=this.db
if(typeof s!=="number")return H.G(s)
o.sa3(0,-p*q+s)
this.b.sV(0)
this.c.sV(0)
t=t.q(0,a.z)
this.dx=this.ai(new V.O(t.a,t.b).u(0,2).A(0,u.ga4()))}this.a0()},
i6:function(a){var u,t,s
H.k(a,"$iy")
if(!this.cx)return
this.cx=!1
if(this.ch)return
u=this.dx
if(u.E(u)>0.0001){u=this.c
t=this.dx.a
if(typeof t!=="number")return t.P()
s=this.y
if(typeof s!=="number")return H.G(s)
u.sV(-t*10*s)
s=this.b
t=this.dx.b
if(typeof t!=="number")return t.P()
u=this.x
if(typeof u!=="number")return H.G(u)
s.sV(-t*10*u)
this.a0()}},
aQ:function(a,b,c){var u,t,s,r,q
u=this.dy
t=b.e
if(typeof u!=="number")return u.aS()
if(u<t){this.dy=t
s=b.y
this.c.an(0,s)
this.b.an(0,s)
u=this.b.d
r=Math.cos(u)
q=Math.sin(u)
u=V.aU(1,0,0,0,0,r,-q,0,0,q,r,0,0,0,0,1)
t=this.c.d
r=Math.cos(t)
q=Math.sin(t)
this.fr=u.u(0,V.aU(r,0,-q,0,0,1,0,0,q,0,r,0,0,0,0,1))}return this.fr},
$ia8:1}
U.e3.prototype={
gw:function(){var u=this.r
if(u==null){u=D.Q()
this.r=u}return u},
M:function(a){var u=this.r
if(u!=null)u.G(a)},
aX:function(a){var u,t,s
if(this.a!=null)return!1
this.a=a
u=a.c
t=u.e
if(t==null){t=D.Q()
u.e=t
u=t}else u=t
t=this.gfL()
u.h(0,t)
u=this.a.d
s=u.e
if(s==null){s=D.Q()
u.e=s
u=s}else u=s
u.h(0,t)
return!0},
fM:function(a){var u,t,s,r
H.k(a,"$iy")
if(!J.Y(this.b,this.a.b.c))return
H.i(a,"$ico")
u=this.d
t=a.x.b
s=this.c
if(typeof t!=="number")return t.u()
r=u+t*s
if(u!==r){this.d=r
u=new D.R("zoom",u,r,this,[P.z])
u.b=!0
this.M(u)}},
aQ:function(a,b,c){var u,t,s
u=this.e
t=b.e
if(u<t){this.e=t
s=Math.pow(10,this.d)
this.f=V.aU(s,0,0,0,0,s,0,0,0,0,s,0,0,0,0,1)}return this.f},
$ia8:1}
M.de.prototype={
aq:function(a){var u
H.k(a,"$iy")
u=this.x
if(u!=null)u.G(a)},
eY:function(){return this.aq(null)},
h_:function(a,b){var u,t,s,r,q,p,o,n
u=E.aj
H.m(b,"$ie",[u],"$ae")
for(t=b.length,s=this.gah(),r={func:1,ret:-1,args:[D.y]},q=[r],p=0;p<b.length;b.length===t||(0,H.E)(b),++p){o=b[p]
if(o!=null){n=o.z
if(n==null){n=new D.bL()
n.sab(null)
n.saI(null)
n.c=null
n.d=0
o.z=n}H.n(s,r)
if(n.a==null)n.sab(H.c([],q))
n=n.a;(n&&C.a).h(n,s)}}u=new D.bO(a,b,this,[u])
u.b=!0
this.aq(u)},
h1:function(a,b){var u,t,s
u=E.aj
H.m(b,"$ie",[u],"$ae")
for(t=b.gS(b),s=this.gah();t.B();)t.gH(t).gw().T(0,s)
u=new D.bP(a,b,this,[u])
u.b=!0
this.aq(u)},
sec:function(a){var u,t
u=this.c
if(u!=a){if(u!=null)u.gw().T(0,this.gah())
t=this.c
this.c=a
if(a!=null)a.gw().h(0,this.gah())
u=new D.R("technique",t,this.c,this,[O.bY])
u.b=!0
this.aq(u)}},
gw:function(){var u=this.x
if(u==null){u=D.Q()
this.x=u}return u},
aP:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g
a.e9(this.c)
u=this.b
u.toString
t=a.a
C.b.iO(t,36160,null)
C.b.ci(t,2884)
C.b.ci(t,2929)
C.b.j6(t,513)
s=t.drawingBufferWidth
r=t.drawingBufferHeight
q=u.r
p=q.a
if(typeof s!=="number")return H.G(s)
o=C.d.af(p*s)
p=q.b
if(typeof r!=="number")return H.G(r)
n=C.d.af(p*r)
p=C.d.af(q.c*s)
a.c=p
q=C.d.af(q.d*r)
a.d=q
C.b.jX(t,o,n,p,q)
C.b.iU(t,u.c)
u=u.a
C.b.iT(t,u.a,u.b,u.c,u.d)
C.b.iS(t,16640)
u=this.a
t=a.c
q=a.d
p=u.c
m=u.d
l=u.e
k=l-m
j=1/Math.tan(p*0.5)
i=V.aU(-j/(t/q),0,0,0,0,j,0,0,0,0,l/k,-l*m/k,0,0,1,0)
u.a
a.cy.e8(i)
t=$.kF
if(t==null){t=V.kH()
q=V.kZ()
p=$.kV
if(p==null){p=new V.U(0,0,-1)
$.kV=p}p=V.kB(t,q,p)
$.kF=p
h=p}else h=t
t=u.b
if(t!=null){g=t.aQ(0,a,u)
if(g!=null)h=g.u(0,h)}a.db.e8(h)
u=this.c
if(u!=null)u.an(0,a)
for(u=this.d.a,u=new J.ap(u,u.length,0,[H.x(u,0)]);u.B();)u.d.an(0,a)
for(u=this.d.a,u=new J.ap(u,u.length,0,[H.x(u,0)]);u.B();)u.d.aP(a)
this.a.toString
a.cy.cw()
a.db.cw()
this.b.toString
a.e7()},
seX:function(a,b){this.d=H.m(b,"$ia2",[E.aj],"$aa2")},
$inj:1}
A.d2.prototype={}
A.f3.prototype={
j:function(a,b){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<t;++s){r=u[s]
if(r.b===b)return r}return},
jc:function(){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<u.length;u.length===t||(0,H.E)(u),++s){r=u[s]
C.b.dB(r.a,r.c)}},
j8:function(){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<u.length;u.length===t||(0,H.E)(u),++s){r=u[s]
C.b.dw(r.a,r.c)}}}
A.h4.prototype={
eM:function(a7,a8){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6
this.z=a7
u=new P.bf("")
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
a7.ik(u)
a7.is(u)
a7.il(u)
a7.iA(u)
a7.iB(u)
a7.iu(u)
a7.iF(u)
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
u=new P.bf("")
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
s.ip(u)
s.ij(u)
s.im(u)
s.iq(u)
s.iy(u)
p=s.dy
if(p){m=u.a+="// === Enviromental ===\n"
m+="\n"
u.a=m
m+="uniform samplerCube envSampler;\n"
u.a=m
m+="uniform int nullEnvTxt;\n"
u.a=m
u.a=m+"\n"
s.iw(u)
s.ix(u)}s.it(u)
m=u.a+="// === Alpha ===\n"
m+="\n"
u.a=m
l=s.y
if(l!==C.c){m+="uniform float alpha;\n"
u.a=m
if(l!==C.i){m+="uniform int nullAlphaTxt;\n"
u.a=m
if(l===C.e){m+="uniform sampler2D alphaTxt;\n"
u.a=m}else if(l===C.f){m+="uniform samplerCube alphaTxt;\n"
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
case C.e:m+="   if(nullAlphaTxt > 0) return alpha;\n"
u.a=m
m+="   float a = alpha*texture2D(alphaTxt, txt2D).a;\n"
u.a=m
m+="   if (a <= 0.000001) discard;\n"
u.a=m
m+="   return a;\n"
u.a=m
break
case C.f:m+="   if(nullAlphaTxt > 0) return alpha;\n"
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
k=H.c([],[P.f])
if(s.b!==C.c)C.a.h(k,"ambient()")
if(s.c!==C.c)C.a.h(k,"diffuse(norm, litVec)")
if(s.d!==C.c)C.a.h(k,"invDiffuse(norm, litVec)")
if(s.e!==C.c)C.a.h(k,"specular(norm, litVec)")
m=u.a+="   return litClr*("+C.a.m(k," + ")+");\n"
m+="}\n"
u.a=m
u.a=m+"\n"
s.io(u)
s.iv(u)
s.iz(u)
s.iC(u)
s.iD(u)
s.iE(u)
s.ir(u)}m=u.a+="// === Main ===\n"
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
j=H.c([],[P.f])
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
i="vec4("+C.a.m(j," + ")+", alpha);"
s=u.a
if(o){s+="   gl_FragColor = colorMat*"+i+"\n"
u.a=s}else{s+="   gl_FragColor = "+i+"\n"
u.a=s}s+="}\n"
u.a=s
this.c=n
this.d=s.charCodeAt(0)==0?s:s
this.e=this.d0(n,35633)
this.f=this.d0(this.d,35632)
s=this.a
q=s.createProgram()
this.r=q
C.b.dl(s,q,this.e)
C.b.dl(s,this.r,this.f)
C.b.jn(s,this.r)
if(!H.k8(C.b.bC(s,this.r,35714))){h=C.b.er(s,this.r)
C.b.j2(s,this.r)
H.r(P.t("Failed to link shader: "+H.l(h)))}this.hX()
this.hZ()
this.Q=this.x.j(0,"posAttr")
this.cx=this.x.j(0,"normAttr")
this.ch=this.x.j(0,"binmAttr")
this.cy=this.x.j(0,"txt2DAttr")
this.db=this.x.j(0,"txtCubeAttr")
this.dx=this.x.j(0,"bendAttr")
if(a7.fr)this.id=H.i(this.y.n(0,"invViewMat"),"$iat")
if(t)this.dy=H.i(this.y.n(0,"objMat"),"$iat")
if(r)this.fr=H.i(this.y.n(0,"viewObjMat"),"$iat")
this.fy=H.i(this.y.n(0,"projViewObjMat"),"$iat")
if(a7.x2)this.k1=H.i(this.y.n(0,"txt2DMat"),"$icC")
if(a7.y1)this.k2=H.i(this.y.n(0,"txtCubeMat"),"$iat")
if(a7.y2)this.k3=H.i(this.y.n(0,"colorMat"),"$iat")
this.sfc(H.c([],[A.at]))
t=a7.am
if(t>0){this.k4=H.k(this.y.n(0,"bendMatCount"),"$iK")
for(g=0;g<t;++g){s=this.r1
r=this.y
q="bendValues["+g+"].mat"
f=r.j(0,q)
if(f==null)H.r(P.t("Required uniform value, "+q+", was not defined or used in shader."));(s&&C.a).h(s,H.i(f,"$iat"))}}t=a7.a
if(t!==C.c){this.r2=H.i(this.y.n(0,"emissionClr"),"$iI")
switch(t){case C.c:break
case C.i:break
case C.e:this.rx=H.i(this.y.n(0,"emissionTxt"),"$iaf")
this.x1=H.i(this.y.n(0,"nullEmissionTxt"),"$iK")
break
case C.f:this.ry=H.i(this.y.n(0,"emissionTxt"),"$iag")
this.x1=H.i(this.y.n(0,"nullEmissionTxt"),"$iK")
break}}t=a7.b
if(t!==C.c){this.x2=H.i(this.y.n(0,"ambientClr"),"$iI")
switch(t){case C.c:break
case C.i:break
case C.e:this.y1=H.i(this.y.n(0,"ambientTxt"),"$iaf")
this.am=H.i(this.y.n(0,"nullAmbientTxt"),"$iK")
break
case C.f:this.y2=H.i(this.y.n(0,"ambientTxt"),"$iag")
this.am=H.i(this.y.n(0,"nullAmbientTxt"),"$iK")
break}}t=a7.c
if(t!==C.c){this.ae=H.i(this.y.n(0,"diffuseClr"),"$iI")
switch(t){case C.c:break
case C.i:break
case C.e:this.bg=H.i(this.y.n(0,"diffuseTxt"),"$iaf")
this.bh=H.i(this.y.n(0,"nullDiffuseTxt"),"$iK")
break
case C.f:this.dC=H.i(this.y.n(0,"diffuseTxt"),"$iag")
this.bh=H.i(this.y.n(0,"nullDiffuseTxt"),"$iK")
break}}t=a7.d
if(t!==C.c){this.bi=H.i(this.y.n(0,"invDiffuseClr"),"$iI")
switch(t){case C.c:break
case C.i:break
case C.e:this.dD=H.i(this.y.n(0,"invDiffuseTxt"),"$iaf")
this.bj=H.i(this.y.n(0,"nullInvDiffuseTxt"),"$iK")
break
case C.f:this.dE=H.i(this.y.n(0,"invDiffuseTxt"),"$iag")
this.bj=H.i(this.y.n(0,"nullInvDiffuseTxt"),"$iK")
break}}t=a7.e
if(t!==C.c){this.bm=H.i(this.y.n(0,"shininess"),"$iZ")
this.bk=H.i(this.y.n(0,"specularClr"),"$iI")
switch(t){case C.c:break
case C.i:break
case C.e:this.dF=H.i(this.y.n(0,"specularTxt"),"$iaf")
this.bl=H.i(this.y.n(0,"nullSpecularTxt"),"$iK")
break
case C.f:this.dG=H.i(this.y.n(0,"specularTxt"),"$iag")
this.bl=H.i(this.y.n(0,"nullSpecularTxt"),"$iK")
break}}switch(a7.f){case C.c:break
case C.i:break
case C.e:this.dH=H.i(this.y.n(0,"bumpTxt"),"$iaf")
this.bn=H.i(this.y.n(0,"nullBumpTxt"),"$iK")
break
case C.f:this.dI=H.i(this.y.n(0,"bumpTxt"),"$iag")
this.bn=H.i(this.y.n(0,"nullBumpTxt"),"$iK")
break}if(a7.dy){this.dJ=H.i(this.y.n(0,"envSampler"),"$iag")
this.dK=H.i(this.y.n(0,"nullEnvTxt"),"$iK")
t=a7.r
if(t!==C.c){this.bo=H.i(this.y.n(0,"reflectClr"),"$iI")
switch(t){case C.c:break
case C.i:break
case C.e:this.dL=H.i(this.y.n(0,"reflectTxt"),"$iaf")
this.bp=H.i(this.y.n(0,"nullReflectTxt"),"$iK")
break
case C.f:this.dM=H.i(this.y.n(0,"reflectTxt"),"$iag")
this.bp=H.i(this.y.n(0,"nullReflectTxt"),"$iK")
break}}t=a7.x
if(t!==C.c){this.bq=H.i(this.y.n(0,"refraction"),"$iZ")
this.br=H.i(this.y.n(0,"refractClr"),"$iI")
switch(t){case C.c:break
case C.i:break
case C.e:this.dN=H.i(this.y.n(0,"refractTxt"),"$iaf")
this.bs=H.i(this.y.n(0,"nullRefractTxt"),"$iK")
break
case C.f:this.dO=H.i(this.y.n(0,"refractTxt"),"$iag")
this.bs=H.i(this.y.n(0,"nullRefractTxt"),"$iK")
break}}}t=a7.y
if(t!==C.c){this.bt=H.i(this.y.n(0,"alpha"),"$iZ")
switch(t){case C.c:break
case C.i:break
case C.e:this.dP=H.i(this.y.n(0,"alphaTxt"),"$iaf")
this.bu=H.i(this.y.n(0,"nullAlphaTxt"),"$iK")
break
case C.f:this.dQ=H.i(this.y.n(0,"alphaTxt"),"$iag")
this.bu=H.i(this.y.n(0,"nullAlphaTxt"),"$iK")
break}}this.seZ(H.c([],[A.cB]))
this.sf_(H.c([],[A.cD]))
this.sf0(H.c([],[A.cE]))
this.sf1(H.c([],[A.cF]))
this.sf2(H.c([],[A.cG]))
this.sf3(H.c([],[A.cH]))
if(a7.k2){t=a7.z
if(t>0){this.dR=H.k(this.y.n(0,"dirLightCount"),"$iK")
for(g=0;g<t;++g){s=this.y
r="dirLights["+g+"].viewDir"
f=s.j(0,r)
if(f==null)H.r(P.t("Required uniform value, "+r+", was not defined or used in shader."))
H.i(f,"$iI")
s=this.y
r="dirLights["+g+"].color"
e=s.j(0,r)
if(e==null)H.r(P.t("Required uniform value, "+r+", was not defined or used in shader."))
H.i(e,"$iI")
s=this.cj;(s&&C.a).h(s,new A.cB(g,f,e))}}t=a7.Q
if(t>0){this.dS=H.k(this.y.n(0,"pntLightCount"),"$iK")
for(g=0;g<t;++g){s=this.y
r="pntLights["+g+"].point"
f=s.j(0,r)
if(f==null)H.r(P.t("Required uniform value, "+r+", was not defined or used in shader."))
H.i(f,"$iI")
s=this.y
r="pntLights["+g+"].viewPnt"
e=s.j(0,r)
if(e==null)H.r(P.t("Required uniform value, "+r+", was not defined or used in shader."))
H.i(e,"$iI")
s=this.y
r="pntLights["+g+"].color"
d=s.j(0,r)
if(d==null)H.r(P.t("Required uniform value, "+r+", was not defined or used in shader."))
H.i(d,"$iI")
s=this.y
r="pntLights["+g+"].att0"
c=s.j(0,r)
if(c==null)H.r(P.t("Required uniform value, "+r+", was not defined or used in shader."))
H.i(c,"$iZ")
s=this.y
r="pntLights["+g+"].att1"
b=s.j(0,r)
if(b==null)H.r(P.t("Required uniform value, "+r+", was not defined or used in shader."))
H.i(b,"$iZ")
s=this.y
r="pntLights["+g+"].att2"
a=s.j(0,r)
if(a==null)H.r(P.t("Required uniform value, "+r+", was not defined or used in shader."))
H.i(a,"$iZ")
s=this.ck;(s&&C.a).h(s,new A.cD(g,f,e,d,c,b,a))}}t=a7.ch
if(t>0){this.dT=H.k(this.y.n(0,"spotLightCount"),"$iK")
for(g=0;g<t;++g){s=this.y
r="spotLights["+g+"].objPnt"
f=s.j(0,r)
if(f==null)H.r(P.t("Required uniform value, "+r+", was not defined or used in shader."))
H.i(f,"$iI")
s=this.y
r="spotLights["+g+"].objDir"
e=s.j(0,r)
if(e==null)H.r(P.t("Required uniform value, "+r+", was not defined or used in shader."))
H.i(e,"$iI")
s=this.y
r="spotLights["+g+"].viewPnt"
d=s.j(0,r)
if(d==null)H.r(P.t("Required uniform value, "+r+", was not defined or used in shader."))
H.i(d,"$iI")
s=this.y
r="spotLights["+g+"].color"
c=s.j(0,r)
if(c==null)H.r(P.t("Required uniform value, "+r+", was not defined or used in shader."))
H.i(c,"$iI")
s=this.y
r="spotLights["+g+"].cutoff"
b=s.j(0,r)
if(b==null)H.r(P.t("Required uniform value, "+r+", was not defined or used in shader."))
H.i(b,"$iZ")
s=this.y
r="spotLights["+g+"].coneAngle"
a=s.j(0,r)
if(a==null)H.r(P.t("Required uniform value, "+r+", was not defined or used in shader."))
H.i(a,"$iZ")
s=this.y
r="spotLights["+g+"].att0"
a0=s.j(0,r)
if(a0==null)H.r(P.t("Required uniform value, "+r+", was not defined or used in shader."))
H.i(a0,"$iZ")
s=this.y
r="spotLights["+g+"].att1"
a1=s.j(0,r)
if(a1==null)H.r(P.t("Required uniform value, "+r+", was not defined or used in shader."))
H.i(a1,"$iZ")
s=this.y
r="spotLights["+g+"].att2"
a2=s.j(0,r)
if(a2==null)H.r(P.t("Required uniform value, "+r+", was not defined or used in shader."))
H.i(a2,"$iZ")
s=this.cl;(s&&C.a).h(s,new A.cE(g,f,e,d,c,b,a,a0,a1,a2))}}t=a7.cx
if(t>0){this.dU=H.k(this.y.n(0,"txtDirLightCount"),"$iK")
for(g=0;g<t;++g){s=this.y
r="txtDirLights["+g+"].objUp"
f=s.j(0,r)
if(f==null)H.r(P.t("Required uniform value, "+r+", was not defined or used in shader."))
H.i(f,"$iI")
s=this.y
r="txtDirLights["+g+"].objRight"
e=s.j(0,r)
if(e==null)H.r(P.t("Required uniform value, "+r+", was not defined or used in shader."))
H.i(e,"$iI")
s=this.y
r="txtDirLights["+g+"].objDir"
d=s.j(0,r)
if(d==null)H.r(P.t("Required uniform value, "+r+", was not defined or used in shader."))
H.i(d,"$iI")
s=this.y
r="txtDirLights["+g+"].viewDir"
c=s.j(0,r)
if(c==null)H.r(P.t("Required uniform value, "+r+", was not defined or used in shader."))
H.i(c,"$iI")
s=this.y
r="txtDirLights["+g+"].color"
b=s.j(0,r)
if(b==null)H.r(P.t("Required uniform value, "+r+", was not defined or used in shader."))
H.i(b,"$iI")
s=this.y
r="txtDirLights["+g+"].nullTxt"
a=s.j(0,r)
if(a==null)H.r(P.t("Required uniform value, "+r+", was not defined or used in shader."))
H.i(a,"$iK")
s=this.y
r="txtDirLightsTxt2D"+g
a0=s.j(0,r)
if(a0==null)H.r(P.t("Required uniform value, "+r+", was not defined or used in shader."))
H.i(a0,"$iaf")
s=this.cm;(s&&C.a).h(s,new A.cF(g,f,e,d,c,b,a0,a))}}t=a7.cy
if(t>0){this.dV=H.k(this.y.n(0,"txtPntLightCount"),"$iK")
for(g=0;g<t;++g){s=this.y
r="txtPntLights["+g+"].point"
f=s.j(0,r)
if(f==null)H.r(P.t("Required uniform value, "+r+", was not defined or used in shader."))
H.i(f,"$iI")
s=this.y
r="txtPntLights["+g+"].viewPnt"
e=s.j(0,r)
if(e==null)H.r(P.t("Required uniform value, "+r+", was not defined or used in shader."))
H.i(e,"$iI")
s=this.y
r="txtPntLights["+g+"].invViewRotMat"
d=s.j(0,r)
if(d==null)H.r(P.t("Required uniform value, "+r+", was not defined or used in shader."))
H.i(d,"$icC")
s=this.y
r="txtPntLights["+g+"].color"
c=s.j(0,r)
if(c==null)H.r(P.t("Required uniform value, "+r+", was not defined or used in shader."))
H.i(c,"$iI")
s=this.y
r="txtPntLights["+g+"].nullTxt"
b=s.j(0,r)
if(b==null)H.r(P.t("Required uniform value, "+r+", was not defined or used in shader."))
H.i(b,"$iK")
s=this.y
r="txtPntLights["+g+"].att0"
a=s.j(0,r)
if(a==null)H.r(P.t("Required uniform value, "+r+", was not defined or used in shader."))
H.i(a,"$iZ")
s=this.y
r="txtPntLights["+g+"].att1"
a0=s.j(0,r)
if(a0==null)H.r(P.t("Required uniform value, "+r+", was not defined or used in shader."))
H.i(a0,"$iZ")
s=this.y
r="txtPntLights["+g+"].att2"
a1=s.j(0,r)
if(a1==null)H.r(P.t("Required uniform value, "+r+", was not defined or used in shader."))
H.i(a1,"$iZ")
s=this.y
r="txtPntLightsTxtCube"+g
a2=s.j(0,r)
if(a2==null)H.r(P.t("Required uniform value, "+r+", was not defined or used in shader."))
H.i(a2,"$iag")
s=this.cn;(s&&C.a).h(s,new A.cG(g,f,e,d,c,a2,b,a,a0,a1))}}t=a7.db
if(t>0){this.dW=H.k(this.y.n(0,"txtSpotLightCount"),"$iK")
for(g=0;g<t;++g){s=this.y
r="txtSpotLights["+g+"].objPnt"
f=s.j(0,r)
if(f==null)H.r(P.t("Required uniform value, "+r+", was not defined or used in shader."))
H.i(f,"$iI")
s=this.y
r="txtSpotLights["+g+"].objDir"
e=s.j(0,r)
if(e==null)H.r(P.t("Required uniform value, "+r+", was not defined or used in shader."))
H.i(e,"$iI")
s=this.y
r="txtSpotLights["+g+"].objUp"
d=s.j(0,r)
if(d==null)H.r(P.t("Required uniform value, "+r+", was not defined or used in shader."))
H.i(d,"$iI")
s=this.y
r="txtSpotLights["+g+"].objRight"
c=s.j(0,r)
if(c==null)H.r(P.t("Required uniform value, "+r+", was not defined or used in shader."))
H.i(c,"$iI")
s=this.y
r="txtSpotLights["+g+"].viewPnt"
b=s.j(0,r)
if(b==null)H.r(P.t("Required uniform value, "+r+", was not defined or used in shader."))
H.i(b,"$iI")
s=this.y
r="txtSpotLights["+g+"].nullTxt"
a=s.j(0,r)
if(a==null)H.r(P.t("Required uniform value, "+r+", was not defined or used in shader."))
H.i(a,"$iK")
s=this.y
r="txtSpotLights["+g+"].color"
a0=s.j(0,r)
if(a0==null)H.r(P.t("Required uniform value, "+r+", was not defined or used in shader."))
H.i(a0,"$iI")
s=this.y
r="txtSpotLights["+g+"].tuScalar"
a1=s.j(0,r)
if(a1==null)H.r(P.t("Required uniform value, "+r+", was not defined or used in shader."))
H.i(a1,"$iZ")
s=this.y
r="txtSpotLights["+g+"].tvScalar"
a2=s.j(0,r)
if(a2==null)H.r(P.t("Required uniform value, "+r+", was not defined or used in shader."))
H.i(a2,"$iZ")
s=this.y
r="txtSpotLights["+g+"].att0"
a3=s.j(0,r)
if(a3==null)H.r(P.t("Required uniform value, "+r+", was not defined or used in shader."))
H.i(a3,"$iZ")
s=this.y
r="txtSpotLights["+g+"].att1"
a4=s.j(0,r)
if(a4==null)H.r(P.t("Required uniform value, "+r+", was not defined or used in shader."))
H.i(a4,"$iZ")
s=this.y
r="txtSpotLights["+g+"].att2"
a5=s.j(0,r)
if(a5==null)H.r(P.t("Required uniform value, "+r+", was not defined or used in shader."))
H.i(a5,"$iZ")
s=this.y
r="txtSpotLightsTxt2D"+g
a6=s.j(0,r)
if(a6==null)H.r(P.t("Required uniform value, "+r+", was not defined or used in shader."))
H.i(a6,"$iaf")
s=this.co;(s&&C.a).h(s,new A.cH(g,f,e,d,c,b,a6,a,a0,a1,a2,a3,a4,a5))}}}},
ac:function(a,b,c){C.b.U(b.a,b.d,1)},
a7:function(a,b,c){C.b.U(b.a,b.d,1)},
sfc:function(a){this.r1=H.m(a,"$ib",[A.at],"$ab")},
seZ:function(a){this.cj=H.m(a,"$ib",[A.cB],"$ab")},
sf_:function(a){this.ck=H.m(a,"$ib",[A.cD],"$ab")},
sf0:function(a){this.cl=H.m(a,"$ib",[A.cE],"$ab")},
sf1:function(a){this.cm=H.m(a,"$ib",[A.cF],"$ab")},
sf2:function(a){this.cn=H.m(a,"$ib",[A.cG],"$ab")},
sf3:function(a){this.co=H.m(a,"$ib",[A.cH],"$ab")}}
A.h7.prototype={
ik:function(a){var u,t,s
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
is:function(a){var u
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
il:function(a){var u
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
iA:function(a){var u,t
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
iB:function(a){var u,t
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
iu:function(a){var u
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
iF:function(a){var u
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
as:function(a,b,c){var u
if(b===C.c)return
u=a.a+="uniform vec3 "+c+"Clr;\n"
if(b===C.i)return
if(0>=c.length)return H.j(c,0)
u+="uniform int null"+(c[0].toUpperCase()+C.j.b6(c,1))+"Txt;\n"
a.a=u
if(b===C.e)a.a=u+("uniform sampler2D "+c+"Txt;\n")
else if(b===C.f)a.a=u+("uniform samplerCube "+c+"Txt;\n")},
ip:function(a){var u,t
u=this.a
if(u===C.c)return
t=a.a+="// === Emission ===\n"
a.a=t+"\n"
this.as(a,u,"emission")
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
case C.e:u=t+"   if(nullEmissionTxt > 0) return emissionClr;\n"
a.a=u
u+="   return emissionClr*texture2D(emissionTxt, txt2D).rgb;\n"
a.a=u
break
case C.f:u=t+"   if(nullEmissionTxt > 0) return emissionClr;\n"
a.a=u
u+="   return emissionClr*textureCube(emissionTxt, txtCube).rgb;\n"
a.a=u
break
default:u=t}u+="}\n"
a.a=u
a.a=u+"\n"},
ij:function(a){var u,t
u=this.b
if(u===C.c)return
t=a.a+="// === Ambient ===\n"
a.a=t+"\n"
this.as(a,u,"ambient")
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
case C.e:u=t+"   if(nullAmbientTxt > 0) return ambientClr;\n"
a.a=u
u+="   return ambientClr*texture2D(ambientTxt, txt2D).rgb;\n"
a.a=u
break
case C.f:u=t+"   if(nullAmbientTxt > 0) return ambientClr;\n"
a.a=u
u+="   return ambientClr*textureCube(ambientTxt, txtCube).rgb;\n"
a.a=u
break
default:u=t}u+="}\n"
a.a=u
a.a=u+"\n"},
im:function(a){var u,t
u=this.c
if(u===C.c)return
t=a.a+="// === Diffuse ===\n"
a.a=t+"\n"
this.as(a,u,"diffuse")
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
case C.e:u=t+"   if(nullDiffuseTxt > 0) diffuseColor = diffuseClr;\n"
a.a=u
u+="   else diffuseColor = diffuseClr*texture2D(diffuseTxt, txt2D).rgb;\n"
a.a=u
break
case C.f:u=t+"   if(nullDiffuseTxt > 0) diffuseColor = diffuseClr;\n"
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
iq:function(a){var u,t
u=this.d
if(u===C.c)return
t=a.a+="// === Inverse Diffuse ===\n"
a.a=t+"\n"
this.as(a,u,"invDiffuse")
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
case C.e:u=t+"   if(nullInvDiffuseTxt > 0) invDiffuseColor = invDiffuseClr;\n"
a.a=u
u+="   else invDiffuseColor = invDiffuseClr*texture2D(invDiffuseTxt, txt2D).rgb;\n"
a.a=u
break
case C.f:u=t+"   if(nullInvDiffuseTxt > 0) invDiffuseColor = invDiffuseClr;\n"
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
iy:function(a){var u,t
u=this.e
if(u===C.c)return
t=a.a+="// === Specular ===\n"
a.a=t+"\n"
this.as(a,u,"specular")
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
case C.e:u=t+"   if(nullSpecularTxt > 0) specularColor = specularClr;\n"
a.a=u
u+="   else specularColor = specularClr*texture2D(specularTxt, txt2D).rgb;\n"
a.a=u
break
case C.f:u=t+"   if(nullSpecularTxt > 0) specularColor = specularClr;\n"
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
it:function(a){var u,t
if(!this.r1)return
u=a.a+="// === Normal ===\n"
u+="\n"
a.a=u
t=this.f
switch(t){case C.c:break
case C.i:break
case C.e:u+="uniform sampler2D bumpTxt;\n"
a.a=u
u+="uniform int nullBumpTxt;\n"
a.a=u
u+="\n"
a.a=u
break
case C.f:u+="uniform samplerCube bumpTxt;\n"
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
case C.f:u+="   if(nullBumpTxt > 0) return normalVec;\n"
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
iw:function(a){var u,t
u=this.r
if(u===C.c)return
t=a.a+="// === Reflection ===\n"
a.a=t+"\n"
this.as(a,u,"reflect")
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
case C.e:u=t+"   if(nullReflectTxt > 0) return vec3(0.0, 0.0, 0.0);\n"
a.a=u
u+="   vec3 scalar = reflectClr*texture2D(reflectTxt, txt2D).rgb;\n"
a.a=u
break
case C.f:u=t+"   if(nullReflectTxt > 0) return vec3(0.0, 0.0, 0.0);\n"
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
ix:function(a){var u,t
u=this.x
if(u===C.c)return
t=a.a+="// === Refraction ===\n"
a.a=t+"\n"
this.as(a,u,"refract")
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
case C.e:u=t+"   if(nullRefractTxt > 0) return vec3(0.0, 0.0, 0.0);\n"
a.a=u
u+="   vec3 scalar = refractClr*texture2D(refractTxt, txt2D).rgb;\n"
a.a=u
break
case C.f:u=t+"   if(nullRefractTxt > 0) return vec3(0.0, 0.0, 0.0);\n"
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
io:function(a){var u,t
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
iv:function(a){var u,t
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
iz:function(a){var u,t
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
iC:function(a){var u,t,s
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
iD:function(a){var u,t,s
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
iE:function(a){var u,t,s
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
ir:function(a){var u
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
A.cB.prototype={}
A.cF.prototype={}
A.cD.prototype={}
A.cG.prototype={}
A.cE.prototype={}
A.cH.prototype={}
A.cv.prototype={
eP:function(a,b){this.c=null
this.d=null
this.e=null
this.f=null
this.r=null
this.x=null
this.y=null},
d0:function(a,b){var u,t,s
u=this.a
t=C.b.j0(u,b)
C.b.eC(u,t,a)
C.b.iV(u,t)
if(!H.k8(C.b.eu(u,t,35713))){s=C.b.es(u,t)
C.b.j3(u,t)
throw H.h(P.t("Error compiling shader '"+H.l(t)+"': "+H.l(s)))}return t},
hX:function(){var u,t,s,r,q,p
u=H.c([],[A.d2])
t=this.a
s=H.ad(C.b.bC(t,this.r,35721))
if(typeof s!=="number")return H.G(s)
r=0
for(;r<s;++r){q=C.b.el(t,this.r,r)
p=C.b.en(t,this.r,q.name)
C.a.h(u,new A.d2(t,q.name,p))}this.x=new A.f3(u)},
hZ:function(){var u,t,s,r,q,p
u=H.c([],[A.dX])
t=this.a
s=H.ad(C.b.bC(t,this.r,35718))
if(typeof s!=="number")return H.G(s)
r=0
for(;r<s;++r){q=C.b.em(t,this.r,r)
p=C.b.ev(t,this.r,q.name)
C.a.h(u,this.j1(q.type,q.size,q.name,p))}this.y=new A.ir(u)},
aG:function(a,b,c){var u,t
u=this.a
t=this.r
if(a===1)return new A.K(u,t,b,c)
else return A.k0(u,t,b,a,c)},
fj:function(a,b,c){var u,t
u=this.a
t=this.r
if(a===1)return new A.af(u,t,b,c)
else return A.k0(u,t,b,a,c)},
fk:function(a,b,c){var u,t
u=this.a
t=this.r
if(a===1)return new A.ag(u,t,b,c)
else return A.k0(u,t,b,a,c)},
bc:function(a,b){return new P.ed(a+" uniform variables are unsupported by all browsers.\n"+("Please change the type of "+H.l(b)+"."))},
j1:function(a,b,c,d){switch(a){case 5120:return this.aG(b,c,d)
case 5121:return this.aG(b,c,d)
case 5122:return this.aG(b,c,d)
case 5123:return this.aG(b,c,d)
case 5124:return this.aG(b,c,d)
case 5125:return this.aG(b,c,d)
case 5126:return new A.Z(this.a,this.r,c,d)
case 35664:return new A.il(this.a,this.r,c,d)
case 35665:return new A.I(this.a,this.r,c,d)
case 35666:return new A.ip(this.a,this.r,c,d)
case 35667:return new A.im(this.a,this.r,c,d)
case 35668:return new A.io(this.a,this.r,c,d)
case 35669:return new A.iq(this.a,this.r,c,d)
case 35674:return new A.is(this.a,this.r,c,d)
case 35675:return new A.cC(this.a,this.r,c,d)
case 35676:return new A.at(this.a,this.r,c,d)
case 35678:return this.fj(b,c,d)
case 35680:return this.fk(b,c,d)
case 35670:throw H.h(this.bc("BOOL",c))
case 35671:throw H.h(this.bc("BOOL_VEC2",c))
case 35672:throw H.h(this.bc("BOOL_VEC3",c))
case 35673:throw H.h(this.bc("BOOL_VEC4",c))
default:throw H.h(P.t("Unknown uniform variable type "+H.l(a)+" for "+H.l(c)+"."))}}}
A.bK.prototype={
i:function(a){return this.b}}
A.dX.prototype={}
A.ir.prototype={
j:function(a,b){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<t;++s){r=u[s]
if(r.c===b)return r}return},
n:function(a,b){var u=this.j(0,b)
if(u==null)throw H.h(P.t("Required uniform value, "+b+", was not defined or used in shader."))
return u},
i:function(a){return this.R()},
jh:function(a){var u,t,s,r
for(u=this.a,t=u.length,s="",r=0;r<u.length;u.length===t||(0,H.E)(u),++r)s+=u[r].i(0)+a
return s},
R:function(){return this.jh("\n")}}
A.K.prototype={
i:function(a){return"Uniform1i: "+H.l(this.c)}}
A.im.prototype={
i:function(a){return"Uniform2i: "+H.l(this.c)}}
A.io.prototype={
i:function(a){return"Uniform3i: "+H.l(this.c)}}
A.iq.prototype={
i:function(a){return"Uniform4i: "+H.l(this.c)}}
A.ik.prototype={
i:function(a){return"Uniform1iv: "+H.l(this.c)},
sih:function(a){this.e=H.m(a,"$ib",[P.B],"$ab")}}
A.Z.prototype={
i:function(a){return"Uniform1f: "+H.l(this.c)}}
A.il.prototype={
i:function(a){return"Uniform2f: "+H.l(this.c)}}
A.I.prototype={
i:function(a){return"Uniform3f: "+H.l(this.c)}}
A.ip.prototype={
i:function(a){return"Uniform4f: "+H.l(this.c)}}
A.is.prototype={
i:function(a){return"Uniform1Mat2 "+H.l(this.c)}}
A.cC.prototype={
ag:function(a){var u=new Float32Array(H.cV(H.m(a,"$ib",[P.z],"$ab")))
C.b.eh(this.a,this.d,!1,u)},
i:function(a){return"UniformMat3: "+H.l(this.c)}}
A.at.prototype={
ag:function(a){var u=new Float32Array(H.cV(H.m(a,"$ib",[P.z],"$ab")))
C.b.ei(this.a,this.d,!1,u)},
i:function(a){return"UniformMat4: "+H.l(this.c)}}
A.af.prototype={
i:function(a){return"UniformSampler2D: "+H.l(this.c)}}
A.ag.prototype={
i:function(a){return"UniformSamplerCube: "+H.l(this.c)}}
F.jK.prototype={
$1:function(a){return new V.aa(Math.cos(a),Math.sin(a),0)},
$S:35}
F.jy.prototype={
$3:function(a,b,c){var u,t,s,r,q,p,o,n,m
u=b*6.283185307179586
t=this.a
s=this.b
r=J.kk(t.$1(u),s)
s=J.lF(J.kk(t.$1(u+3.141592653589793/this.c),s),r)
s=new V.U(s.a,s.b,s.c)
q=s.A(0,Math.sqrt(s.E(s)))
t=$.kW
if(t==null){t=new V.U(1,0,0)
$.kW=t
p=t}else p=t
t=q.au(!J.Y(q,p)?V.l_():p)
o=t.A(0,Math.sqrt(t.E(t)))
t=o.au(q)
p=t.A(0,Math.sqrt(t.E(t)))
n=c*6.283185307179586
t=Math.cos(n)
s=this.d
m=Math.sin(n)
t=p.u(0,t*s)
s=o.u(0,m*s)
s=J.lE(r,new V.aa(t.a-s.a,t.b-s.b,t.c-s.c))
if(!J.Y(a.f,s)){a.f=H.k(s,"$iaa")
t=a.a
if(t!=null)t.a5()}},
$S:36}
F.a5.prototype={
bf:function(){if(!this.gdz()){C.a.T(this.a.a.d.b,this)
this.a.a.a5()}this.hJ()
this.hK()
this.hL()},
hU:function(a){this.a=a
C.a.h(a.d.b,this)},
hV:function(a){this.b=a
C.a.h(a.d.c,this)},
hW:function(a){this.c=a
C.a.h(a.d.d,this)},
hJ:function(){var u=this.a
if(u!=null){C.a.T(u.d.b,this)
this.a=null}},
hK:function(){var u=this.b
if(u!=null){C.a.T(u.d.c,this)
this.b=null}},
hL:function(){var u=this.c
if(u!=null){C.a.T(u.d.d,this)
this.c=null}},
gdz:function(){return this.a==null||this.b==null||this.c==null},
fb:function(){var u,t,s,r,q
u=this.a
t=u==null?null:u.r
u=this.b
s=u==null?null:u.r
u=this.c
r=u==null?null:u.r
q=V.cI()
if(t!=null)q=q.p(0,t)
if(s!=null)q=q.p(0,s)
if(r!=null)q=q.p(0,r)
if(q.e_())return
return q.A(0,Math.sqrt(q.E(q)))},
ff:function(){var u,t,s,r,q
u=this.a
t=u==null?null:u.f
u=this.b
s=u==null?null:u.f
u=this.c
r=u==null?null:u.f
if(t==null||s==null||r==null)return
u=s.q(0,t)
u=new V.U(u.a,u.b,u.c)
q=u.A(0,Math.sqrt(u.E(u)))
u=r.q(0,t)
u=new V.U(u.a,u.b,u.c)
u=q.au(u.A(0,Math.sqrt(u.E(u))))
return u.A(0,Math.sqrt(u.E(u)))},
cd:function(){if(this.d!=null)return!0
var u=this.fb()
if(u==null){u=this.ff()
if(u==null)return!1}this.d=u
this.a.a.a5()
return!0},
fa:function(){var u,t,s,r,q
u=this.a
t=u==null?null:u.x
u=this.b
s=u==null?null:u.x
u=this.c
r=u==null?null:u.x
q=V.cI()
if(t!=null)q=q.p(0,t)
if(s!=null)q=q.p(0,s)
if(r!=null)q=q.p(0,r)
if(q.e_())return
return q.A(0,Math.sqrt(q.E(q)))},
fe:function(){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f
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
if(Math.abs(i-0)<$.P().a){u=m.q(0,p)
u=new V.U(u.a,u.b,u.c)
h=u.A(0,Math.sqrt(u.E(u)))
if(j.a-k.a<0)h=h.P(0)}else{g=(u-l.b)/i
u=m.q(0,p).u(0,g).p(0,p).q(0,s)
u=new V.U(u.a,u.b,u.c)
h=u.A(0,Math.sqrt(u.E(u)))
j=j.a
k=k.a
if((j-k)*g+k-l.a<0)h=h.P(0)}u=this.d
if(u!=null){f=u.A(0,Math.sqrt(u.E(u)))
u=f.au(h)
u=u.A(0,Math.sqrt(u.E(u))).au(f)
h=u.A(0,Math.sqrt(u.E(u)))}return h},
cb:function(){if(this.e!=null)return!0
var u=this.fa()
if(u==null){u=this.fe()
if(u==null)return!1}this.e=u
this.a.a.a5()
return!0},
gdt:function(a){if(J.Y(this.a,this.b))return!0
if(J.Y(this.b,this.c))return!0
if(J.Y(this.c,this.a))return!0
return!1},
v:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.R()},
D:function(a){var u,t
if(this.gdz())return a+"disposed"
u=a+C.j.ax(J.aI(this.a.e),0)+", "+C.j.ax(J.aI(this.b.e),0)+", "+C.j.ax(J.aI(this.c.e),0)+" {"
t=this.d
u=t!=null?u+(t.i(0)+", "):u+"-, "
t=this.e
return t!=null?u+(t.i(0)+"}"):u+"-}"},
R:function(){return this.D("")}}
F.fy.prototype={}
F.hR.prototype={
cr:function(a,b,c){var u,t
u=b.a
u.a.a.N()
u=u.e
t=c.a
t.a.a.N()
if(u==t.e){u=b.b
u.a.a.N()
u=u.e
t=c.b
t.a.a.N()
if(u==t.e){u=b.c
u.a.a.N()
u=u.e
t=c.c
t.a.a.N()
t=u==t.e
u=t}else u=!1
return u}else{u=b.a
u.a.a.N()
u=u.e
t=c.b
t.a.a.N()
if(u==t.e){u=b.b
u.a.a.N()
u=u.e
t=c.c
t.a.a.N()
if(u==t.e){u=b.c
u.a.a.N()
u=u.e
t=c.a
t.a.a.N()
t=u==t.e
u=t}else u=!1
return u}else{u=b.a
u.a.a.N()
u=u.e
t=c.c
t.a.a.N()
if(u==t.e){u=b.b
u.a.a.N()
u=u.e
t=c.a
t.a.a.N()
if(u==t.e){u=b.c
u.a.a.N()
u=u.e
t=c.b
t.a.a.N()
t=u==t.e
u=t}else u=!1
return u}else return!1}}}}
F.bx.prototype={}
F.fV.prototype={}
F.ij.prototype={}
F.bR.prototype={}
F.dK.prototype={
gw:function(){var u=this.e
if(u==null){u=D.Q()
this.e=u}return u},
aL:function(){var u,t
u=this.e
if(u!=null)++u.d
t=this.d.aL()||!1
if(!this.a.aL())t=!1
u=this.e
if(u!=null)u.az(0)
return t},
jr:function(a,b){var u,t,s,r,q,p,o
u=this.e
if(u!=null)++u.d
u=this.a.c
t=H.c(u.slice(0),[H.x(u,0)])
for(u=[F.ay];t.length!==0;){s=C.a.gje(t)
C.a.jI(t,0)
if(s!=null){r=H.c([],u)
C.a.h(r,s)
for(q=t.length,p=0;p<t.length;t.length===q||(0,H.E)(t),++p){o=t[p]
if(o!=null&&a.cr(0,s,o)){C.a.h(r,o)
C.a.T(t,o)}}if(r.length>1)b.jq(r)}}this.a.N()
this.c.cA()
this.d.cA()
this.b.jJ()
this.c.cB(new F.ij())
this.d.cB(new F.hR())
u=this.e
if(u!=null)u.az(0)},
iQ:function(a0,a1){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a
u=this.a.c.length
a1.toString
t=$.bm()
s=a1.a
r=(s&t.a)!==0?1:0
if((s&$.bl().a)!==0)++r
if((s&$.bk().a)!==0)++r
if((s&$.bn().a)!==0)++r
if((s&$.bo().a)!==0)++r
if((s&$.cZ().a)!==0)++r
if((s&$.d_().a)!==0)++r
if((s&$.c8().a)!==0)++r
if((s&$.bj().a)!==0)++r
q=a1.gcJ(a1)
p=q*4
t=new Array(u*q)
t.fixed$length=Array
s=P.z
o=H.c(t,[s])
t=new Array(r)
t.fixed$length=Array
n=H.c(t,[Z.d5])
for(m=0,l=0;l<r;++l){k=a1.iL(l)
j=k.gcJ(k)
C.a.Y(n,l,new Z.d5(k,j,m*4,p,0))
for(i=0;i<u;++i){t=this.a.c
if(i>=t.length)return H.j(t,i)
h=t[i].jo(k)
g=m+i*q
for(f=0;f<h.length;++f){C.a.Y(o,g,h[f]);++g}}m+=j}H.m(o,"$ib",[s],"$ab")
t=a0.a
e=t.createBuffer()
C.b.al(t,34962,e)
C.b.dq(t,34962,new Float32Array(H.cV(o)),35044)
C.b.al(t,34962,null)
d=new Z.d6(new Z.e4(34962,e),n,a1)
d.sfz(H.c([],[Z.cl]))
this.b.b
this.c.b
if(this.d.b.length!==0){s=P.B
c=H.c([],[s])
for(l=0;b=this.d.b,l<b.length;++l){b=b[l].a
b.a.a.N()
C.a.h(c,b.e)
b=this.d.b
if(l>=b.length)return H.j(b,l)
b=b[l].b
b.a.a.N()
C.a.h(c,b.e)
b=this.d.b
if(l>=b.length)return H.j(b,l)
b=b[l].c
b.a.a.N()
C.a.h(c,b.e)}a=Z.mm(t,34963,H.m(c,"$ib",[s],"$ab"))
C.a.h(d.b,new Z.cl(4,c.length,a))}return d},
i:function(a){var u=H.c([],[P.f])
if(this.a.c.length!==0){C.a.h(u,"Vertices:")
C.a.h(u,this.a.D("   "))}this.b.b
this.c.b
if(this.d.b.length!==0){C.a.h(u,"Faces:")
C.a.h(u,this.d.D("   "))}return C.a.m(u,"\n")},
aO:function(a){var u=this.e
if(u!=null)u.G(a)},
a5:function(){return this.aO(null)},
$ink:1}
F.hK.prototype={
iH:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k,j,i,h
H.m(c,"$ib",[F.ay],"$ab")
u=H.c([],[F.a5])
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
C.a.h(u,F.fx(l,k,i))
t.a.h(0,l)
t.a.h(0,i)
t.a.h(0,h)
C.a.h(u,F.fx(l,i,h))}else{m.h(0,k)
t.a.h(0,i)
t.a.h(0,h)
C.a.h(u,F.fx(k,i,h))
t.a.h(0,k)
t.a.h(0,h)
t.a.h(0,l)
C.a.h(u,F.fx(k,h,l))}o=!o}q=!q}return u},
gl:function(a){return this.b.length},
cB:function(a){var u,t,s,r,q,p,o,n
for(u=this.a,t=u.a.c.length-1;t>=0;--t){s=u.a.c
if(t>=s.length)return H.j(s,t)
r=s[t]
for(s=r.d,q=s.b.length+s.c.length+s.d.length-1;q>=0;--q){p=r.d.j(0,q)
for(o=q-1;o>=0;--o){n=r.d.j(0,o)
if(a.cr(0,p,n)){p.bf()
break}}}}},
cA:function(){var u,t,s
for(u=this.b.length-1;u>=0;--u){t=this.b
if(u>=t.length)return H.j(t,u)
s=t[u]
t=s.gdt(s)
if(t)s.bf()}},
aL:function(){var u,t,s,r
for(u=this.b,t=u.length,s=!0,r=0;r<u.length;u.length===t||(0,H.E)(u),++r)if(!u[r].cd())s=!1
return s},
cc:function(){var u,t,s,r
for(u=this.b,t=u.length,s=!0,r=0;r<u.length;u.length===t||(0,H.E)(u),++r)if(!u[r].cb())s=!1
return s},
i:function(a){return this.R()},
D:function(a){var u,t,s,r
u=H.c([],[P.f])
for(t=this.b,s=t.length,r=0;r<t.length;t.length===s||(0,H.E)(t),++r)C.a.h(u,t[r].D(a))
return C.a.m(u,"\n")},
R:function(){return this.D("")},
sfq:function(a){this.b=H.m(a,"$ib",[F.a5],"$ab")}}
F.hL.prototype={
gl:function(a){return 0},
cB:function(a){var u,t,s,r,q
for(u=this.a,t=u.a.c.length-1;t>=0;--t){s=u.a.c
if(t>=s.length)return H.j(s,t)
r=s[t]
for(r.c.c,q=-1;!1;--q)r.c.j(0,q)}},
cA:function(){var u,t,s
for(u=-1;!1;--u){t=this.b
return H.j(t,u)
s=t[u]
t=s.gdt(s)
if(t)s.bf()}},
i:function(a){return this.R()},
D:function(a){var u,t,s
u=H.c([],[P.f])
for(t=0;!1;++t){s=this.b
if(t>=0)return H.j(s,t)
C.a.h(u,s[t].D(a+(""+t+". ")))}return C.a.m(u,"\n")},
R:function(){return this.D("")},
sfC:function(a){this.b=H.m(a,"$ib",[F.bx],"$ab")}}
F.hM.prototype={
gl:function(a){return 0},
jJ:function(){var u,t
for(u=-1;!1;--u){t=this.b
return H.j(t,u)
t=t[u].gk9()
t=t.gk6(t)
if(t.gl(t).jZ(0,1)){t=this.b
return H.j(t,u)
t[u].bf()}}},
i:function(a){return this.R()},
D:function(a){var u,t,s
u=H.c([],[P.f])
for(t=this.b,s=0;!1;++s){if(s>=0)return H.j(t,s)
C.a.h(u,t[s].D(a))}return C.a.m(u,"\n")},
R:function(){return this.D("")},
sc0:function(a){this.b=H.m(a,"$ib",[F.bR],"$ab")}}
F.ay.prototype={
dv:function(a){var u,t,s,r,q,p,o
u=this.f
t=this.r
s=this.x
r=this.y
q=this.z
p=this.Q
o=this.ch
return F.k1(this.cx,s,p,u,t,r,q,a,o)},
jo:function(a){var u,t
if(a.v(0,$.bm())){u=this.f
t=[P.z]
if(u==null)return H.c([0,0,0],t)
else return H.c([u.a,u.b,u.c],t)}else if(a.v(0,$.bl())){u=this.r
t=[P.z]
if(u==null)return H.c([0,1,0],t)
else return H.c([u.a,u.b,u.c],t)}else if(a.v(0,$.bk())){u=this.x
t=[P.z]
if(u==null)return H.c([0,0,1],t)
else return H.c([u.a,u.b,u.c],t)}else if(a.v(0,$.bn())){u=this.y
t=[P.z]
if(u==null)return H.c([0,0],t)
else return H.c([u.a,u.b],t)}else if(a.v(0,$.bo())){u=this.z
t=[P.z]
if(u==null)return H.c([0,0,0],t)
else return H.c([u.a,u.b,u.c],t)}else if(a.v(0,$.cZ())){u=this.Q
t=[P.z]
if(u==null)return H.c([1,1,1],t)
else return H.c([u.a,u.b,u.c],t)}else if(a.v(0,$.d_())){u=this.Q
t=[P.z]
if(u==null)return H.c([1,1,1,1],t)
else return H.c([u.a,u.b,u.c,u.d],t)}else if(a.v(0,$.c8()))return H.c([this.ch],[P.z])
else if(a.v(0,$.bj())){u=H.c([-1,-1,-1,-1],[P.z])
return u}else return H.c([],[P.z])},
cd:function(){var u,t
u={}
if(this.r!=null)return!0
t=this.a
if(t!=null){t=t.e
if(t!=null)++t.d}u.a=V.cI()
this.d.O(0,new F.iK(u))
u=u.a
this.r=u.A(0,Math.sqrt(u.E(u)))
u=this.a
if(u!=null){u.a5()
u=this.a.e
if(u!=null)u.az(0)}return!0},
cb:function(){var u,t
u={}
if(this.x!=null)return!0
t=this.a
if(t!=null){t=t.e
if(t!=null)++t.d}u.a=V.cI()
this.d.O(0,new F.iJ(u))
u=u.a
this.x=u.A(0,Math.sqrt(u.E(u)))
u=this.a
if(u!=null){u.a5()
u=this.a.e
if(u!=null)u.az(0)}return!0},
v:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.R()},
D:function(a){var u,t,s
u=H.c([],[P.f])
C.a.h(u,C.j.ax(J.aI(this.e),0))
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
C.a.h(u,V.a_(this.ch,3,0))
C.a.h(u,"-")
s=C.a.m(u,", ")
return a+"{"+s+"}"},
R:function(){return this.D("")}}
F.iK.prototype={
$1:function(a){var u,t
H.k(a,"$ia5")
u=a==null?null:a.d
if(u!=null){t=this.a
t.a=t.a.p(0,u)}},
$S:8}
F.iJ.prototype={
$1:function(a){var u,t
H.k(a,"$ia5")
u=a==null?null:a.e
if(u!=null){t=this.a
t.a=t.a.p(0,u)}},
$S:8}
F.iA.prototype={
N:function(){var u,t,s,r
if(this.b){u=this.c
t=u.length
for(s=0,r=0;r<t;++r){if(r>=u.length)return H.j(u,r)
u[r].e=s;++s}this.b=!1}},
h:function(a,b){var u,t
u=b.a
if(u!=null){if(u===this.a)return!1
throw H.h(P.t("May not add a vertex already attached to another shape to this shape."))}u=this.c
b.e=u.length
t=this.a
b.a=t
C.a.h(u,b)
t.a5()
return!0},
gl:function(a){return this.c.length},
aL:function(){var u,t,s
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.E)(u),++s)u[s].cd()
return!0},
cc:function(){var u,t,s
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.E)(u),++s)u[s].cb()
return!0},
iR:function(){var u,t,s,r,q,p,o,n
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.E)(u),++s){r=u[s]
if(r.z==null){q=r.r
p=q.a
o=q.b
n=q.c
n=q.A(0,Math.sqrt(p*p+o*o+n*n))
if(!J.Y(r.z,n)){r.z=n
q=r.a
if(q!=null){q=q.e
if(q!=null)q.G(null)}}}}return!0},
i:function(a){return this.R()},
D:function(a){var u,t,s,r
this.N()
u=H.c([],[P.f])
for(t=this.c,s=t.length,r=0;r<t.length;t.length===s||(0,H.E)(t),++r)C.a.h(u,t[r].D(a))
return C.a.m(u,"\n")},
R:function(){return this.D("")},
sii:function(a){this.c=H.m(a,"$ib",[F.ay],"$ab")}}
F.iB.prototype={
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
O:function(a,b){H.n(b,{func:1,ret:-1,args:[F.a5]})
C.a.O(this.b,b)
C.a.O(this.c,new F.iC(this,b))
C.a.O(this.d,new F.iD(this,b))},
i:function(a){return this.R()},
D:function(a){var u,t,s,r
u=H.c([],[P.f])
for(t=this.b,s=t.length,r=0;r<t.length;t.length===s||(0,H.E)(t),++r)C.a.h(u,t[r].D(a))
for(t=this.c,s=t.length,r=0;r<t.length;t.length===s||(0,H.E)(t),++r)C.a.h(u,t[r].D(a))
for(t=this.d,s=t.length,r=0;r<t.length;t.length===s||(0,H.E)(t),++r)C.a.h(u,t[r].D(a))
return C.a.m(u,"\n")},
R:function(){return this.D("")},
sfs:function(a){this.b=H.m(a,"$ib",[F.a5],"$ab")},
sft:function(a){this.c=H.m(a,"$ib",[F.a5],"$ab")},
sfu:function(a){this.d=H.m(a,"$ib",[F.a5],"$ab")}}
F.iC.prototype={
$1:function(a){H.k(a,"$ia5")
if(!J.Y(a.a,this.a))this.b.$1(a)},
$S:8}
F.iD.prototype={
$1:function(a){var u
H.k(a,"$ia5")
u=this.a
if(!J.Y(a.a,u)&&!J.Y(a.b,u))this.b.$1(a)},
$S:8}
F.iE.prototype={
gl:function(a){return 0},
j:function(a,b){var u,t
if(b>=0){u=this.c
t=b-0
if(t>=0)return H.j(u,t)
return u[t]}else{u=this.b
return H.j(u,b)
return u[b]}},
i:function(a){return this.R()},
D:function(a){var u,t,s
u=H.c([],[P.f])
for(t=this.b,s=0;!1;++s){if(s>=0)return H.j(t,s)
C.a.h(u,t[s].D(a))}for(t=this.c,s=0;!1;++s){if(s>=0)return H.j(t,s)
C.a.h(u,t[s].D(a))}return C.a.m(u,"\n")},
R:function(){return this.D("")},
sfD:function(a){this.b=H.m(a,"$ib",[F.bx],"$ab")},
sfE:function(a){this.c=H.m(a,"$ib",[F.bx],"$ab")}}
F.iG.prototype={}
F.iF.prototype={
cr:function(a,b,c){return J.Y(b.f,c.f)}}
F.iH.prototype={}
F.hp.prototype={
jq:function(a){var u,t,s,r,q,p,o,n,m
H.m(a,"$ib",[F.ay],"$ab")
u=V.cI()
for(t=a.length,s=0;s<t;++s){r=a[s].r
if(r!=null)u=new V.U(u.a+r.a,u.b+r.b,u.c+r.c)}u=u.A(0,Math.sqrt(u.E(u)))
for(t=a.length,r=u==null,s=0;s<a.length;a.length===t||(0,H.E)(a),++s){q=a[s]
if(r)p=null
else{o=u.a
n=u.b
m=u.c
p=u.A(0,Math.sqrt(o*o+n*n+m*m))}if(!J.Y(q.r,p)){q.r=p
o=q.a
if(o!=null){o=o.e
if(o!=null)o.G(null)}}}return}}
F.iI.prototype={
gl:function(a){return 0},
i:function(a){return this.R()},
D:function(a){var u,t,s
u=H.c([],[P.f])
for(t=this.b,s=0;!1;++s){if(s>=0)return H.j(t,s)
C.a.h(u,t[s].D(a))}return C.a.m(u,"\n")},
R:function(){return this.D("")},
sc0:function(a){this.b=H.m(a,"$ib",[F.bR],"$ab")}}
O.du.prototype={
gw:function(){var u=this.dy
if(u==null){u=D.Q()
this.dy=u}return u},
a6:function(a){var u
H.k(a,"$iy")
u=this.dy
if(u!=null)u.G(a)},
fY:function(){return this.a6(null)},
dc:function(a){H.k(a,"$iy")
this.a=null
this.a6(a)},
hP:function(){return this.dc(null)},
fS:function(a,b){var u=V.ak
u=new D.bO(a,H.m(b,"$ie",[u],"$ae"),this,[u])
u.b=!0
this.a6(u)},
fU:function(a,b){var u=V.ak
u=new D.bP(a,H.m(b,"$ie",[u],"$ae"),this,[u])
u.b=!0
this.a6(u)},
cY:function(){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7
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
a3=u===C.f||m===C.f||l===C.f||k===C.f||j===C.f||i===C.f||h===C.f||g===C.f||f===C.f
a4=s+p+q+r+o>0
a5=n>0
a6=a0||!b||a
a7=$.bm()
if(a0){b=$.bl()
a7=new Z.b3(a7.a|b.a)}if(a1){b=$.bk()
a7=new Z.b3(a7.a|b.a)}if(a2){b=$.bn()
a7=new Z.b3(a7.a|b.a)}if(a3){b=$.bo()
a7=new Z.b3(a7.a|b.a)}if(a5){b=$.bj()
a7=new Z.b3(a7.a|b.a)}return new A.h7(u,m,l,k,j,i,h,g,f,t,s,r,q,p,o,t+s+r+q+p+o,d,d,a4,a6,!0,!1,!1,c,a4,a,a0,a1,a2,a3,a5,!1,!1,!1,n,e.charCodeAt(0)==0?e:e,a7)},
W:function(a,b){H.m(a,"$ib",[T.dQ],"$ab")},
an:function(a,b){var u,t,s,r,q
for(u=this.dx.a,u=new J.ap(u,u.length,0,[H.x(u,0)]);u.B();){t=u.d
t.toString
s=$.iz
if(s==null){s=new V.U(0,0,1)
$.iz=s}t.a=s
r=t.b
if(r!=null){q=r.a
if(q!=null)t.a=q.cD(s)}}},
jL:function(a4,a5){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3
u=this.a
if(u==null){u=this.cY()
t=a4.fr.j(0,u.ae)
if(t==null){t=A.m4(u,a4.a)
s=t.b
if(s.length===0)H.r(P.t("May not cache a shader with no name."))
if(a4.fr.du(0,s))H.r(P.t('Shader cache already contains a shader by the name "'+s+'".'))
a4.fr.Y(0,s,t)}this.a=t
a5.e=null
u=t}r=u.z
q=r.bg
u=a5.e
if(!(u instanceof Z.d6)){a5.e=null
u=null}if(u==null||!u.d.v(0,q)){u=r.r1
if(u)a5.d.aL()
p=r.r2
if(p){o=a5.d
n=o.e
if(n!=null)++n.d
o.d.cc()
o.a.cc()
o=o.e
if(o!=null)o.az(0)}o=r.ry
if(o){n=a5.d
m=n.e
if(m!=null)++m.d
n.a.iR()
n=n.e
if(n!=null)n.az(0)}l=a5.d.iQ(new Z.iM(a4.a),q)
l.aN($.bm()).e=this.a.Q.c
if(u)l.aN($.bl()).e=this.a.cx.c
if(p)l.aN($.bk()).e=this.a.ch.c
if(r.rx)l.aN($.bn()).e=this.a.cy.c
if(o)l.aN($.bo()).e=this.a.db.c
if(r.x1)l.aN($.bj()).e=this.a.dx.c
a5.e=l}u=T.dQ
k=H.c([],[u])
p=this.a
o=a4.a
C.b.ej(o,p.r)
p.x.jc()
if(r.fx){p=this.a
n=a4.dx
n=n.gZ(n)
p=p.dy
p.toString
p.ag(n.aa(0,!0))}if(r.fy){p=this.a
n=a4.cx
if(n==null){n=a4.db
n=n.gZ(n)
m=a4.dx
m=n.u(0,m.gZ(m))
a4.cx=m
n=m}p=p.fr
p.toString
p.ag(n.aa(0,!0))}p=this.a
n=a4.ch
if(n==null){n=a4.gjG()
m=a4.dx
m=n.u(0,m.gZ(m))
a4.ch=m
n=m}p=p.fy
p.toString
p.ag(n.aa(0,!0))
if(r.x2){p=this.a
n=this.b
p=p.k1
p.toString
p.ag(C.r.aa(n,!0))}if(r.y1){p=this.a
n=this.c
p=p.k2
p.toString
p.ag(C.r.aa(n,!0))}if(r.y2){p=this.a
n=this.d
p=p.k3
p.toString
p.ag(C.r.aa(n,!0))}if(r.am>0){j=this.e.a.length
p=this.a.k4
C.b.U(p.a,p.d,j)
for(p=[P.z],i=0;i<j;++i){n=this.a
m=this.e.a
if(i>=m.length)return H.j(m,i)
m=m[i]
n.toString
H.k(m,"$iak")
n=n.r1
if(i>=n.length)return H.j(n,i)
n=n[i]
h=new Float32Array(H.cV(H.m(m.aa(0,!0),"$ib",p,"$ab")))
C.b.ei(n.a,n.d,!1,h)}}switch(r.a){case C.c:break
case C.i:p=this.a
n=this.f.f
p=p.r2
p.toString
m=n.a
g=n.b
n=n.c
C.b.t(p.a,p.d,m,g,n)
break
case C.e:this.W(k,this.f.d)
p=this.a
n=this.f.d
p.ac(p.rx,p.x1,n)
n=this.a
p=this.f.f
n=n.r2
n.toString
m=p.a
g=p.b
p=p.c
C.b.t(n.a,n.d,m,g,p)
break
case C.f:this.W(k,this.f.e)
p=this.a
n=this.f.e
p.a7(p.ry,p.x1,n)
n=this.a
p=this.f.f
n=n.r2
n.toString
m=p.a
g=p.b
p=p.c
C.b.t(n.a,n.d,m,g,p)
break}if(r.k2){switch(r.b){case C.c:break
case C.i:p=this.a
n=this.r.f
p=p.x2
p.toString
m=n.a
g=n.b
n=n.c
C.b.t(p.a,p.d,m,g,n)
break
case C.e:this.W(k,this.r.d)
p=this.a
n=this.r.d
p.ac(p.y1,p.am,n)
n=this.a
p=this.r.f
n=n.x2
n.toString
m=p.a
g=p.b
p=p.c
C.b.t(n.a,n.d,m,g,p)
break
case C.f:this.W(k,this.r.e)
p=this.a
n=this.r.e
p.a7(p.y2,p.am,n)
n=this.a
p=this.r.f
n=n.x2
n.toString
m=p.a
g=p.b
p=p.c
C.b.t(n.a,n.d,m,g,p)
break}switch(r.c){case C.c:break
case C.i:p=this.a
n=this.x.f
p=p.ae
p.toString
m=n.a
g=n.b
n=n.c
C.b.t(p.a,p.d,m,g,n)
break
case C.e:this.W(k,this.x.d)
p=this.a
n=this.x.d
p.ac(p.bg,p.bh,n)
n=this.a
p=this.x.f
n=n.ae
n.toString
m=p.a
g=p.b
p=p.c
C.b.t(n.a,n.d,m,g,p)
break
case C.f:this.W(k,this.x.e)
p=this.a
n=this.x.e
p.a7(p.dC,p.bh,n)
n=this.a
p=this.x.f
n=n.ae
n.toString
m=p.a
g=p.b
p=p.c
C.b.t(n.a,n.d,m,g,p)
break}switch(r.d){case C.c:break
case C.i:p=this.a
n=this.y.f
p=p.bi
p.toString
m=n.a
g=n.b
n=n.c
C.b.t(p.a,p.d,m,g,n)
break
case C.e:this.W(k,this.y.d)
p=this.a
n=this.y.d
p.ac(p.dD,p.bj,n)
n=this.a
p=this.y.f
n=n.bi
n.toString
m=p.a
g=p.b
p=p.c
C.b.t(n.a,n.d,m,g,p)
break
case C.f:this.W(k,this.y.e)
p=this.a
n=this.y.e
p.a7(p.dE,p.bj,n)
n=this.a
p=this.y.f
n=n.bi
n.toString
m=p.a
g=p.b
p=p.c
C.b.t(n.a,n.d,m,g,p)
break}switch(r.e){case C.c:break
case C.i:p=this.a
n=this.z.f
p=p.bk
p.toString
m=n.a
g=n.b
n=n.c
C.b.t(p.a,p.d,m,g,n)
n=this.a
g=this.z.ch
n=n.bm
C.b.L(n.a,n.d,g)
break
case C.e:this.W(k,this.z.d)
p=this.a
n=this.z.d
p.ac(p.dF,p.bl,n)
n=this.a
p=this.z.f
n=n.bk
n.toString
m=p.a
g=p.b
p=p.c
C.b.t(n.a,n.d,m,g,p)
p=this.a
g=this.z.ch
p=p.bm
C.b.L(p.a,p.d,g)
break
case C.f:this.W(k,this.z.e)
p=this.a
n=this.z.e
p.a7(p.dG,p.bl,n)
n=this.a
p=this.z.f
n=n.bk
n.toString
m=p.a
g=p.b
p=p.c
C.b.t(n.a,n.d,m,g,p)
p=this.a
g=this.z.ch
p=p.bm
C.b.L(p.a,p.d,g)
break}if(r.z>0){j=this.dx.e.length
p=this.a.dR
C.b.U(p.a,p.d,j)
p=a4.db
f=p.gZ(p)
for(p=this.dx.e,n=p.length,e=0,d=0;d<p.length;p.length===n||(0,H.E)(p),++d){c=p[d]
m=this.a.cj
if(e>=m.length)return H.j(m,e)
b=m[e]
m=f.cD(c.a)
g=m.a
a=m.b
a0=m.c
a0=m.A(0,Math.sqrt(g*g+a*a+a0*a0))
a=b.b
g=a0.a
m=a0.b
a0=a0.c
C.b.t(a.a,a.d,g,m,a0)
a0=c.c
m=b.c
C.b.t(m.a,m.d,a0.a,a0.b,a0.c);++e}}if(r.Q>0){j=this.dx.f.length
p=this.a.dS
C.b.U(p.a,p.d,j)
p=a4.db
f=p.gZ(p)
for(p=this.dx.f,n=p.length,e=0,d=0;d<p.length;p.length===n||(0,H.E)(p),++d){c=p[d]
m=this.a.ck
if(e>=m.length)return H.j(m,e)
b=m[e]
m=c.gb1(c)
g=b.b
C.b.t(g.a,g.d,m.a,m.b,m.c)
m=f.b3(c.gb1(c))
g=b.c
C.b.t(g.a,g.d,m.a,m.b,m.c)
m=c.gad(c)
g=b.d
C.b.t(g.a,g.d,m.a,m.b,m.c)
m=c.gc6()
g=b.e
C.b.L(g.a,g.d,m)
m=c.gc7()
g=b.f
C.b.L(g.a,g.d,m)
m=c.gc8()
g=b.r
C.b.L(g.a,g.d,m);++e}}if(r.ch>0){j=this.dx.r.length
p=this.a.dT
C.b.U(p.a,p.d,j)
p=a4.db
f=p.gZ(p)
for(p=this.dx.r,n=p.length,e=0,d=0;d<p.length;p.length===n||(0,H.E)(p),++d){c=p[d]
m=this.a.cl
if(e>=m.length)return H.j(m,e)
b=m[e]
m=c.gb1(c)
g=b.b
C.b.t(g.a,g.d,m.a,m.b,m.c)
m=c.gcg(c).k5()
g=b.c
C.b.t(g.a,g.d,m.a,m.b,m.c)
m=f.b3(c.gb1(c))
g=b.d
C.b.t(g.a,g.d,m.a,m.b,m.c)
m=c.gad(c)
g=b.e
C.b.t(g.a,g.d,m.a,m.b,m.c)
m=c.gk0()
g=b.f
C.b.L(g.a,g.d,m)
m=c.gk_()
g=b.r
C.b.L(g.a,g.d,m)
m=c.gc6()
g=b.x
C.b.L(g.a,g.d,m)
m=c.gc7()
g=b.y
C.b.L(g.a,g.d,m)
m=c.gc8()
g=b.z
C.b.L(g.a,g.d,m);++e}}if(r.cx>0){j=this.dx.x.length
p=this.a.dU
C.b.U(p.a,p.d,j)
p=a4.db
f=p.gZ(p)
for(p=this.dx.x,n=p.length,m=[u],e=0,d=0;d<p.length;p.length===n||(0,H.E)(p),++d){c=p[d]
g=this.a.cm
if(e>=g.length)return H.j(g,e)
b=g[e]
g=c.gb2()
H.m(k,"$ib",m,"$ab")
if(!C.a.X(k,g)){g.saY(0,k.length)
C.a.h(k,g)}g=c.gcg(c)
a=b.d
C.b.t(a.a,a.d,g.a,g.b,g.c)
g=c.gbA()
a=b.b
C.b.t(a.a,a.d,g.a,g.b,g.c)
g=c.gby(c)
a=b.c
C.b.t(a.a,a.d,g.a,g.b,g.c)
g=f.cD(c.gcg(c))
a=g.a
a0=g.b
a1=g.c
a1=g.A(0,Math.sqrt(a*a+a0*a0+a1*a1))
a0=b.e
a=a1.a
g=a1.b
a1=a1.c
C.b.t(a0.a,a0.d,a,g,a1)
a1=c.gad(c)
g=b.f
C.b.t(g.a,g.d,a1.a,a1.b,a1.c)
a1=c.gb2()
g=a1.gaZ(a1)
if(!g){g=b.x
C.b.U(g.a,g.d,1)}else{g=b.r
a=a1.gaZ(a1)
a0=g.a
g=g.d
if(!a)C.b.U(a0,g,0)
else C.b.U(a0,g,a1.gaY(a1))
g=b.x
C.b.U(g.a,g.d,0)}++e}}if(r.cy>0){j=this.dx.y.length
p=this.a.dV
C.b.U(p.a,p.d,j)
p=a4.db
f=p.gZ(p)
for(p=this.dx.y,n=p.length,m=[P.z],g=[u],e=0,d=0;d<p.length;p.length===n||(0,H.E)(p),++d){c=p[d]
a=this.a.cn
if(e>=a.length)return H.j(a,e)
b=a[e]
a=c.gb2()
H.m(k,"$ib",g,"$ab")
if(!C.a.X(k,a)){a.saY(0,k.length)
C.a.h(k,a)}a2=f.u(0,c.gZ(c))
a=c.gZ(c)
a0=$.cs
if(a0==null){a0=new V.aa(0,0,0)
$.cs=a0}a0=a.b3(a0)
a=b.b
C.b.t(a.a,a.d,a0.a,a0.b,a0.c)
a=$.cs
if(a==null){a=new V.aa(0,0,0)
$.cs=a}a=a2.b3(a)
a0=b.c
C.b.t(a0.a,a0.d,a.a,a.b,a.c)
a=a2.dZ(0)
a0=b.d
h=new Float32Array(H.cV(H.m(new V.dw(a.a,a.b,a.c,a.e,a.f,a.r,a.y,a.z,a.Q).aa(0,!0),"$ib",m,"$ab")))
C.b.eh(a0.a,a0.d,!1,h)
a0=c.gad(c)
a=b.e
C.b.t(a.a,a.d,a0.a,a0.b,a0.c)
a0=c.gb2()
a=a0.gaZ(a0)
if(!a){a=b.r
C.b.U(a.a,a.d,1)}else{a=b.f
a1=a0.gaZ(a0)
a3=a.a
a=a.d
if(!a1)C.b.U(a3,a,0)
else C.b.U(a3,a,a0.gaY(a0))
a=b.r
C.b.U(a.a,a.d,0)}a=c.gc6()
a0=b.x
C.b.L(a0.a,a0.d,a)
a=c.gc7()
a0=b.y
C.b.L(a0.a,a0.d,a)
a=c.gc8()
a0=b.z
C.b.L(a0.a,a0.d,a);++e}}if(r.db>0){j=this.dx.z.length
p=this.a.dW
C.b.U(p.a,p.d,j)
p=a4.db
f=p.gZ(p)
for(p=this.dx.z,n=p.length,u=[u],e=0,d=0;d<p.length;p.length===n||(0,H.E)(p),++d){c=p[d]
m=this.a.co
if(e>=m.length)return H.j(m,e)
b=m[e]
m=c.gb2()
H.m(k,"$ib",u,"$ab")
if(!C.a.X(k,m)){m.saY(0,k.length)
C.a.h(k,m)}m=c.gb1(c)
g=b.b
C.b.t(g.a,g.d,m.a,m.b,m.c)
m=c.gcg(c)
g=b.c
C.b.t(g.a,g.d,m.a,m.b,m.c)
m=c.gbA()
g=b.d
C.b.t(g.a,g.d,m.a,m.b,m.c)
m=c.gby(c)
g=b.e
C.b.t(g.a,g.d,m.a,m.b,m.c)
m=f.b3(c.gb1(c))
g=b.f
C.b.t(g.a,g.d,m.a,m.b,m.c)
m=c.gb2()
g=m.gaZ(m)
if(!g){m=b.x
C.b.U(m.a,m.d,1)}else{g=b.r
a=m.gaZ(m)
a0=g.a
g=g.d
if(!a)C.b.U(a0,g,0)
else C.b.U(a0,g,m.gaY(m))
m=b.x
C.b.U(m.a,m.d,0)}m=c.gad(c)
g=b.y
C.b.t(g.a,g.d,m.a,m.b,m.c)
m=c.gk7()
g=b.z
C.b.L(g.a,g.d,m)
m=c.gk8()
g=b.Q
C.b.L(g.a,g.d,m)
m=c.gc6()
g=b.ch
C.b.L(g.a,g.d,m)
m=c.gc7()
g=b.cx
C.b.L(g.a,g.d,m)
m=c.gc8()
g=b.cy
C.b.L(g.a,g.d,m);++e}}}switch(r.f){case C.c:break
case C.i:break
case C.e:this.W(k,this.Q.d)
u=this.a
p=this.Q.d
u.ac(u.dH,u.bn,p)
break
case C.f:this.W(k,this.Q.e)
u=this.a
p=this.Q.e
u.a7(u.dI,u.bn,p)
break}if(r.fr){u=this.a
p=a4.Q
if(p==null){p=a4.db
p=p.gZ(p).dZ(0)
a4.Q=p}u=u.id
u.toString
u.ag(p.aa(0,!0))}if(r.dy){this.W(k,this.ch)
u=this.a
p=this.ch
u.a7(u.dJ,u.dK,p)
switch(r.r){case C.c:break
case C.i:u=this.a
p=this.cx.f
u=u.bo
u.toString
n=p.a
m=p.b
p=p.c
C.b.t(u.a,u.d,n,m,p)
break
case C.e:this.W(k,this.cx.d)
u=this.a
p=this.cx.d
u.ac(u.dL,u.bp,p)
p=this.a
u=this.cx.f
p=p.bo
p.toString
n=u.a
m=u.b
u=u.c
C.b.t(p.a,p.d,n,m,u)
break
case C.f:this.W(k,this.cx.e)
u=this.a
p=this.cx.e
u.a7(u.dM,u.bp,p)
p=this.a
u=this.cx.f
p=p.bo
p.toString
n=u.a
m=u.b
u=u.c
C.b.t(p.a,p.d,n,m,u)
break}switch(r.x){case C.c:break
case C.i:u=this.a
p=this.cy.f
u=u.br
u.toString
n=p.a
m=p.b
p=p.c
C.b.t(u.a,u.d,n,m,p)
p=this.a
m=this.cy.ch
p=p.bq
C.b.L(p.a,p.d,m)
break
case C.e:this.W(k,this.cy.d)
u=this.a
p=this.cy.d
u.ac(u.dN,u.bs,p)
p=this.a
u=this.cy.f
p=p.br
p.toString
n=u.a
m=u.b
u=u.c
C.b.t(p.a,p.d,n,m,u)
u=this.a
m=this.cy.ch
u=u.bq
C.b.L(u.a,u.d,m)
break
case C.f:this.W(k,this.cy.e)
u=this.a
p=this.cy.e
u.a7(u.dO,u.bs,p)
p=this.a
u=this.cy.f
p=p.br
p.toString
n=u.a
m=u.b
u=u.c
C.b.t(p.a,p.d,n,m,u)
u=this.a
m=this.cy.ch
u=u.bq
C.b.L(u.a,u.d,m)
break}}u=r.y
p=u!==C.c
if(p){switch(u){case C.c:break
case C.i:u=this.a
n=this.db.f
u=u.bt
C.b.L(u.a,u.d,n)
break
case C.e:this.W(k,this.db.d)
u=this.a
n=this.db.d
u.ac(u.dP,u.bu,n)
n=this.a
u=this.db.f
n=n.bt
C.b.L(n.a,n.d,u)
break
case C.f:this.W(k,this.db.e)
u=this.a
n=this.db.e
u.a7(u.dQ,u.bu,n)
n=this.a
u=this.db.f
n=n.bt
C.b.L(n.a,n.d,u)
break}C.b.ci(o,3042)
C.b.iP(o,770,771)}for(i=0;i<k.length;++i)k[i].bd(a4)
u=a5.e
u.bd(a4)
u.aP(a4)
u.eg(a4)
if(p)C.b.j7(o,3042)
for(i=0;i<k.length;++i)k[i].eg(a4)
u=this.a
u.toString
C.b.ej(o,null)
u.x.j8()},
i:function(a){var u=this.a
if(u!=null)return u.b
else return this.cY().ae},
sfd:function(a){this.e=H.m(a,"$ia2",[V.ak],"$aa2")}}
O.h5.prototype={}
O.dv.prototype={
aH:function(){}}
O.h6.prototype={}
O.aT.prototype={
de:function(a){var u,t
if(!J.Y(this.f,a)){u=this.f
this.f=a
t=new D.R(this.b+".color",u,a,this,[V.a1])
t.b=!0
this.a.a6(t)}},
aH:function(){this.eJ()
this.de(new V.a1(1,1,1))},
sad:function(a,b){var u
if(this.c===C.c){this.c=C.i
this.aH()
u=this.a
u.a=null
u.a6(null)}this.de(b)}}
O.h8.prototype={
hT:function(a){var u=this.ch
if(!(Math.abs(u-a)<$.P().a)){this.ch=a
u=new D.R(this.b+".refraction",u,a,this,[P.z])
u.b=!0
this.a.a6(u)}},
aH:function(){this.bG()
this.hT(1)}}
O.h9.prototype={
c3:function(a){var u=this.ch
if(!(Math.abs(u-a)<$.P().a)){this.ch=a
u=new D.R(this.b+".shininess",u,a,this,[P.z])
u.b=!0
this.a.a6(u)}},
aH:function(){this.bG()
this.c3(100)}}
O.bY.prototype={}
T.dQ.prototype={}
T.i6.prototype={}
V.b6.prototype={
aw:function(a,b){return!0},
i:function(a){return"all"},
$iaq:1}
V.aq.prototype={}
V.dt.prototype={
aw:function(a,b){var u,t,s
for(u=this.a,t=u.length,s=0;s<u.length;u.length===t||(0,H.E)(u),++s)if(u[s].aw(0,b))return!0
return!1},
i:function(a){var u,t,s,r,q
for(u=this.a,t=u.length,s="",r=0;r<u.length;u.length===t||(0,H.E)(u),++r){q=u[r]
if(s.length!==0)s+=", "
s+=q.i(0)}return s},
sa1:function(a){this.a=H.m(a,"$ib",[V.aq],"$ab")},
$iaq:1}
V.al.prototype={
aw:function(a,b){return!this.eI(0,b)},
i:function(a){return"!["+this.cK(0)+"]"}}
V.hz.prototype={
aw:function(a,b){return this.a<=b&&this.b>=b},
i:function(a){var u,t
u=H.jX(this.a)
t=H.jX(this.b)
return u+".."+t},
$iaq:1}
V.hJ.prototype={
eO:function(a){var u,t
if(a.a.length<=0)throw H.h(P.t("May not create a SetMatcher with zero characters."))
u=new H.aR([P.B,P.M])
for(t=new H.cm(a,a.gl(a),0,[H.ao(a,"w",0)]);t.B();)u.Y(0,t.d,!0)
this.shS(u)},
aw:function(a,b){return this.a.du(0,b)},
i:function(a){var u=this.a
return P.jZ(new H.dp(u,[H.x(u,0)]),0,null)},
shS:function(a){this.a=H.m(a,"$iN",[P.B,P.M],"$aN")},
$iaq:1}
V.cw.prototype={
m:function(a,b){var u,t,s,r
for(u=this.c,t=u.length,s=0;s<t;++s){r=u[s]
if(r.b.b===b)return r}r=new V.cA(this.a.k(0,b))
r.sa1(H.c([],[V.aq]))
r.c=!1
C.a.h(this.c,r)
return r},
jd:function(a){var u,t,s,r
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.E)(u),++s){r=u[s]
if(r.aw(0,a))return r}return},
i:function(a){return this.b},
sib:function(a){this.c=H.m(a,"$ib",[V.cA],"$ab")}}
V.dV.prototype={
i:function(a){var u,t
u=H.kg(this.b,"\n","\\n")
t=H.kg(u,"\t","\\t")
return this.a+":"+this.c+':"'+t+'"'}}
V.cz.prototype={
ay:function(a,b,c){var u,t,s
H.m(c,"$ib",[P.f],"$ab")
for(u=c.length,t=0;t<c.length;c.length===u||(0,H.E)(c),++t){s=c[t]
this.c.Y(0,s,b)}},
i:function(a){return this.b},
shM:function(a){var u=P.f
this.c=H.m(a,"$iN",[u,u],"$aN")}}
V.i9.prototype={
k:function(a,b){var u=this.a.j(0,b)
if(u==null){u=new V.cw(this,b)
u.sib(H.c([],[V.cA]))
u.d=null
this.a.Y(0,b,u)}return u},
K:function(a){var u,t
u=this.b.j(0,a)
if(u==null){u=new V.cz(this,a)
t=P.f
u.shM(new H.aR([t,t]))
this.b.Y(0,a,u)}return u},
ef:function(a){var u,t,s,r,q,p,o,n,m,l,k,j
u=H.c([],[V.dV])
t=this.c
s=[P.B]
r=H.c([],s)
for(q=a.length,p=null,o=0;!0;){if(o>=q){if(p!=null)C.a.h(u,p)
return u}n=C.j.aF(a,o)
m=t.jd(n)
if(m==null){if(p==null){C.a.h(r,n)
l=P.jZ(r,0,null)
throw H.h(P.t("Untokenizable string [state: "+t.b+", index "+o+']: "'+l+'"'))}C.a.h(u,p)
o=p.c+1
r=H.c([],s)
t=this.c
p=null}else{if(!m.c)C.a.h(r,n)
t=m.b
if(t.d!=null){l=P.jZ(r,0,null)
k=t.d
j=k.c.j(0,l)
p=new V.dV(j==null?k.b:j,l,o)}++o}}},
si2:function(a){this.a=H.m(a,"$iN",[P.f,V.cw],"$aN")},
si4:function(a){this.b=H.m(a,"$iN",[P.f,V.cz],"$aN")}}
V.cA.prototype={
i:function(a){return this.b.b+": "+this.cK(0)}}
X.d8.prototype={$ibd:1}
X.fG.prototype={
gw:function(){var u=this.x
if(u==null){u=D.Q()
this.x=u}return u}}
X.dD.prototype={
gw:function(){var u=this.f
if(u==null){u=D.Q()
this.f=u}return u},
aE:function(a){var u
H.k(a,"$iy")
u=this.f
if(u!=null)u.G(a)},
f7:function(){return this.aE(null)},
se1:function(a){var u,t
if(!J.Y(this.b,a)){u=this.b
if(u!=null)u.gw().T(0,this.gcO())
t=this.b
this.b=a
if(a!=null)a.gw().h(0,this.gcO())
u=new D.R("mover",t,this.b,this,[U.a8])
u.b=!0
this.aE(u)}},
$ibd:1,
$id8:1}
X.dP.prototype={}
V.br.prototype={
b8:function(a){this.b=new P.fK(C.L)
this.c=null
this.sbQ(H.c([],[[P.b,W.aw]]))},
J:function(a,b){var u,t,s,r,q,p,o,n,m
u=this.d
if(u.length===0)C.a.h(u,H.c([],[W.aw]))
t=a.split("\n")
for(u=t.length,s=[W.aw],r=!0,q=0;q<u;++q){p=t[q]
if(r)r=!1
else C.a.h(this.d,H.c([],s))
o=document.createElement("div")
o.className="codePart"
H.H(p)
n=this.b.fi(p,0,p.length)
m=n==null?p:n
C.k.ez(o,H.kg(m," ","&nbsp;"))
m=o.style
m.color=b
C.a.h(C.a.gbv(this.d),o)}},
e6:function(a,b){var u,t,s,r
H.m(b,"$ib",[P.f],"$ab")
this.sbQ(H.c([],[[P.b,W.aw]]))
u=C.a.m(b,"\n")
t=this.c
if(t==null){t=this.be()
this.c=t}for(t=t.ef(u),s=t.length,r=0;r<t.length;t.length===s||(0,H.E)(t),++r)this.bx(t[r])},
sbQ:function(a){this.d=H.m(a,"$ib",[[P.b,W.aw]],"$ab")}}
V.jJ.prototype={
$1:function(a){H.k(a,"$ib0")
P.aH(C.d.ee(this.a.gji(),2)+" fps")},
$S:39}
V.fj.prototype={
bx:function(a){switch(a.a){case"Class":this.J(a.b,"#551")
break
case"Comment":this.J(a.b,"#777")
break
case"Id":this.J(a.b,"#111")
break
case"Num":this.J(a.b,"#191")
break
case"Reserved":this.J(a.b,"#119")
break
case"String":this.J(a.b,"#171")
break
case"Symbol":this.J(a.b,"#616")
break
case"Type":this.J(a.b,"#B11")
break
case"Whitespace":this.J(a.b,"#111")
break}},
be:function(){var u,t,s,r
u=V.ia()
u.c=u.k(0,"Start")
t=u.k(0,"Start").m(0,"Id")
s=V.v(new H.q("_"))
C.a.h(t.a,s)
s=V.W("a","z")
C.a.h(t.a,s)
s=V.W("A","Z")
C.a.h(t.a,s)
s=u.k(0,"Id").m(0,"Id")
t=V.v(new H.q("_"))
C.a.h(s.a,t)
t=V.W("0","9")
C.a.h(s.a,t)
t=V.W("a","z")
C.a.h(s.a,t)
t=V.W("A","Z")
C.a.h(s.a,t)
t=u.k(0,"Start").m(0,"Int")
s=V.W("0","9")
C.a.h(t.a,s)
s=u.k(0,"Int").m(0,"Int")
t=V.W("0","9")
C.a.h(s.a,t)
t=u.k(0,"Int").m(0,"FloatDot")
s=V.v(new H.q("."))
C.a.h(t.a,s)
s=u.k(0,"FloatDot").m(0,"Float")
t=V.W("0","9")
C.a.h(s.a,t)
t=u.k(0,"Float").m(0,"Float")
s=V.W("0","9")
C.a.h(t.a,s)
s=u.k(0,"Start").m(0,"Sym")
t=V.v(new H.q("<>{}()\\-+*%!&|=.,?:;"))
C.a.h(s.a,t)
t=u.k(0,"Sym").m(0,"Sym")
s=V.v(new H.q("<>{}()\\-+*%!&|=.,?:;"))
C.a.h(t.a,s)
s=u.k(0,"Start").m(0,"OpenDoubleStr")
t=V.v(new H.q('"'))
C.a.h(s.a,t)
t=u.k(0,"OpenDoubleStr").m(0,"CloseDoubleStr")
s=V.v(new H.q('"'))
C.a.h(t.a,s)
s=u.k(0,"OpenDoubleStr").m(0,"EscDoubleStr")
t=V.v(new H.q("\\"))
C.a.h(s.a,t)
t=u.k(0,"EscDoubleStr").m(0,"OpenDoubleStr")
s=V.v(new H.q('"'))
C.a.h(t.a,s)
C.a.h(u.k(0,"OpenDoubleStr").m(0,"OpenDoubleStr").a,new V.b6())
s=u.k(0,"Start").m(0,"OpenSingleStr")
t=V.v(new H.q("'"))
C.a.h(s.a,t)
t=u.k(0,"OpenSingleStr").m(0,"CloseSingleStr")
s=V.v(new H.q("'"))
C.a.h(t.a,s)
s=u.k(0,"OpenSingleStr").m(0,"EscSingleStr")
t=V.v(new H.q("\\"))
C.a.h(s.a,t)
t=u.k(0,"EscSingleStr").m(0,"OpenSingleStr")
s=V.v(new H.q("'"))
C.a.h(t.a,s)
C.a.h(u.k(0,"OpenSingleStr").m(0,"OpenSingleStr").a,new V.b6())
s=u.k(0,"Start").m(0,"Slash")
t=V.v(new H.q("/"))
C.a.h(s.a,t)
t=u.k(0,"Slash").m(0,"Comment")
s=V.v(new H.q("/"))
C.a.h(t.a,s)
s=u.k(0,"Comment").m(0,"EndComment")
t=V.v(new H.q("\n"))
C.a.h(s.a,t)
t=u.k(0,"Comment").m(0,"Comment")
s=new V.al()
r=[V.aq]
s.sa1(H.c([],r))
C.a.h(t.a,s)
t=V.v(new H.q("\n"))
C.a.h(s.a,t)
t=u.k(0,"Slash").m(0,"MLComment")
s=V.v(new H.q("*"))
C.a.h(t.a,s)
s=u.k(0,"MLComment").m(0,"MLCStar")
t=V.v(new H.q("*"))
C.a.h(s.a,t)
t=u.k(0,"MLCStar").m(0,"MLComment")
s=new V.al()
s.sa1(H.c([],r))
C.a.h(t.a,s)
t=V.v(new H.q("*"))
C.a.h(s.a,t)
t=u.k(0,"MLCStar").m(0,"EndComment")
s=V.v(new H.q("/"))
C.a.h(t.a,s)
s=u.k(0,"Start").m(0,"Whitespace")
t=V.v(new H.q(" \n\t"))
C.a.h(s.a,t)
t=u.k(0,"Whitespace").m(0,"Whitespace")
s=V.v(new H.q(" \n\t"))
C.a.h(t.a,s)
s=u.k(0,"Int")
s.d=s.a.K("Num")
s=u.k(0,"Float")
s.d=s.a.K("Num")
s=u.k(0,"Sym")
s.d=s.a.K("Symbol")
s=u.k(0,"CloseDoubleStr")
s.d=s.a.K("String")
s=u.k(0,"CloseSingleStr")
s.d=s.a.K("String")
s=u.k(0,"EndComment")
s.d=s.a.K("Comment")
s=u.k(0,"Whitespace")
s.d=s.a.K("Whitespace")
s=u.k(0,"Id")
t=s.a.K("Id")
s.d=t
s=[P.f]
t.ay(0,"Class",H.c(["Constant","Depth","Entity","EntityPass","Math","Matrix4","Movers","Rotater","Scenes","Shapes","Techniques","ThreeDart"],s))
t.ay(0,"Type",H.c(["bool","double","dynamic","false","int","List","Map","null","num","Object","String","this","true","var","void"],s))
t.ay(0,"Reserved",H.c(["abstract","as","assert","async","await","break","case","catch","class","continue","const","default","deferred","do","else","enum","export","extends","external","factory","final","finally","for","get","if","implements","import","in","is","library","new","operator","part","rethrow","return","set","static","super","switch","sync","throw","try","typedef","with","while","yield"],s))
return u}}
V.fH.prototype={
bx:function(a){switch(a.a){case"Builtin":this.J(a.b,"#411")
break
case"Comment":this.J(a.b,"#777")
break
case"Id":this.J(a.b,"#111")
break
case"Num":this.J(a.b,"#191")
break
case"Preprocess":this.J(a.b,"#737")
break
case"Reserved":this.J(a.b,"#119")
break
case"Symbol":this.J(a.b,"#611")
break
case"Type":this.J(a.b,"#171")
break
case"Whitespace":this.J(a.b,"#111")
break}},
be:function(){var u,t,s,r
u=V.ia()
u.c=u.k(0,"Start")
t=u.k(0,"Start").m(0,"Id")
s=V.v(new H.q("_"))
C.a.h(t.a,s)
s=V.W("a","z")
C.a.h(t.a,s)
s=V.W("A","Z")
C.a.h(t.a,s)
s=u.k(0,"Id").m(0,"Id")
t=V.v(new H.q("_"))
C.a.h(s.a,t)
t=V.W("0","9")
C.a.h(s.a,t)
t=V.W("a","z")
C.a.h(s.a,t)
t=V.W("A","Z")
C.a.h(s.a,t)
t=u.k(0,"Start").m(0,"Int")
s=V.W("0","9")
C.a.h(t.a,s)
s=u.k(0,"Int").m(0,"Int")
t=V.W("0","9")
C.a.h(s.a,t)
t=u.k(0,"Int").m(0,"FloatDot")
s=V.v(new H.q("."))
C.a.h(t.a,s)
s=u.k(0,"FloatDot").m(0,"Float")
t=V.W("0","9")
C.a.h(s.a,t)
t=u.k(0,"Float").m(0,"Float")
s=V.W("0","9")
C.a.h(t.a,s)
s=u.k(0,"Start").m(0,"Sym")
t=V.v(new H.q("<>{}()[]\\-+*%!&|=.,?:;"))
C.a.h(s.a,t)
t=u.k(0,"Sym").m(0,"Sym")
s=V.v(new H.q("<>{}()[]\\-+*%!&|=.,?:;"))
C.a.h(t.a,s)
s=u.k(0,"Start").m(0,"Slash")
t=V.v(new H.q("/"))
C.a.h(s.a,t)
t=u.k(0,"Slash").m(0,"Comment")
s=V.v(new H.q("/"))
C.a.h(t.a,s)
C.a.h(u.k(0,"Slash").m(0,"Sym").a,new V.b6())
s=u.k(0,"Comment").m(0,"EndComment")
t=V.v(new H.q("\n"))
C.a.h(s.a,t)
t=u.k(0,"Comment").m(0,"Comment")
s=new V.al()
r=[V.aq]
s.sa1(H.c([],r))
C.a.h(t.a,s)
t=V.v(new H.q("\n"))
C.a.h(s.a,t)
t=u.k(0,"Start").m(0,"Preprocess")
s=V.v(new H.q("#"))
C.a.h(t.a,s)
s=u.k(0,"Preprocess").m(0,"Preprocess")
t=new V.al()
t.sa1(H.c([],r))
C.a.h(s.a,t)
s=V.v(new H.q("\n"))
C.a.h(t.a,s)
s=u.k(0,"Preprocess").m(0,"EndPreprocess")
t=V.v(new H.q("\n"))
C.a.h(s.a,t)
t=u.k(0,"Start").m(0,"Whitespace")
s=V.v(new H.q(" \n\t"))
C.a.h(t.a,s)
s=u.k(0,"Whitespace").m(0,"Whitespace")
t=V.v(new H.q(" \n\t"))
C.a.h(s.a,t)
t=u.k(0,"Int")
t.d=t.a.K("Num")
t=u.k(0,"Float")
t.d=t.a.K("Num")
t=u.k(0,"Sym")
t.d=t.a.K("Symbol")
t=u.k(0,"EndComment")
t.d=t.a.K("Comment")
t=u.k(0,"EndPreprocess")
t.d=t.a.K("Preprocess")
t=u.k(0,"Whitespace")
t.d=t.a.K("Whitespace")
t=u.k(0,"Id")
s=t.a.K("Id")
t.d=s
t=[P.f]
s.ay(0,"Type",H.c(["float","double","int","void","bool","true","false","mat2","mat3","mat4","dmat2","dmat3","dmat4","mat2x2","mat2x3","mat2x4","dmat2x2","dmat2x3","dmat2x4","mat3x2","mat3x3","mat3x4","dmat3x2","dmat3x3","dmat3x4","mat4x2","mat4x3","mat4x4","dmat4x2","dmat4x3","dmat4x4","vec2","vec3","vec4","ivec2","ivec3","ivec4","bvec2","bvec3","bvec4","dvec2","dvec3","dvec4","uint","uvec2","uvec3","uvec4","sampler1D","sampler2D","sampler3D","samplerCube","sampler1DShadow","sampler2DShadow","samplerCubeShadow","sampler1DArray","sampler2DArray","sampler1DArrayShadow","sampler2DArrayShadow","isampler1D","isampler2D","isampler3D","isamplerCube","isampler1DArray","isampler2DArray","usampler1D","usampler2D","usampler3D","usamplerCube","usampler1DArray","usampler2DArray","sampler2DRect","sampler2DRectShadow","isampler2DRect","usampler2DRect","samplerBuffer","isamplerBuffer","usamplerBuffer","sampler2DMS","isampler2DMS","usampler2DMS","sampler2DMSArray","isampler2DMSArray","usampler2DMSArray","samplerCubeArray","samplerCubeArrayShadow","isamplerCubeArray","usamplerCubeArray"],t))
s.ay(0,"Reserved",H.c(["attribute","break","case","centroid","const","continue","default","discard","do","else","flat","for","highp","if","in","inout","invariant","layout","lowp","mediump","noperspective","out","patch","precision","return","sample","smooth","struct","subroutine","switch","uniform","varying","while"],t))
s.ay(0,"Builtin",H.c(["gl_FragColor","gl_Position"],t))
return u}}
V.fI.prototype={
bx:function(a){switch(a.a){case"Attr":this.J(a.b,"#911")
this.J("=","#111")
break
case"Id":this.J(a.b,"#111")
break
case"Other":this.J(a.b,"#111")
break
case"Reserved":this.J(a.b,"#119")
break
case"String":this.J(a.b,"#171")
break
case"Symbol":this.J(a.b,"#616")
break}},
be:function(){var u,t,s
u=V.ia()
u.c=u.k(0,"Start")
t=u.k(0,"Start").m(0,"Id")
s=V.v(new H.q("_"))
C.a.h(t.a,s)
s=V.W("a","z")
C.a.h(t.a,s)
s=V.W("A","Z")
C.a.h(t.a,s)
s=u.k(0,"Id").m(0,"Id")
t=V.v(new H.q("_"))
C.a.h(s.a,t)
t=V.W("0","9")
C.a.h(s.a,t)
t=V.W("a","z")
C.a.h(s.a,t)
t=V.W("A","Z")
C.a.h(s.a,t)
t=u.k(0,"Id").m(0,"Attr")
s=V.v(new H.q("="))
C.a.h(t.a,s)
t.c=!0
t=u.k(0,"Start").m(0,"Sym")
s=V.v(new H.q("</\\-!>="))
C.a.h(t.a,s)
s=u.k(0,"Sym").m(0,"Sym")
t=V.v(new H.q("</\\-!>="))
C.a.h(s.a,t)
t=u.k(0,"Start").m(0,"OpenStr")
s=V.v(new H.q('"'))
C.a.h(t.a,s)
s=u.k(0,"OpenStr").m(0,"CloseStr")
t=V.v(new H.q('"'))
C.a.h(s.a,t)
t=u.k(0,"OpenStr").m(0,"EscStr")
s=V.v(new H.q("\\"))
C.a.h(t.a,s)
s=u.k(0,"EscStr").m(0,"OpenStr")
t=V.v(new H.q('"'))
C.a.h(s.a,t)
C.a.h(u.k(0,"OpenStr").m(0,"OpenStr").a,new V.b6())
C.a.h(u.k(0,"Start").m(0,"Other").a,new V.b6())
t=u.k(0,"Other").m(0,"Other")
s=new V.al()
s.sa1(H.c([],[V.aq]))
C.a.h(t.a,s)
t=V.v(new H.q('</\\-!>=_"'))
C.a.h(s.a,t)
t=V.W("a","z")
C.a.h(s.a,t)
t=V.W("A","Z")
C.a.h(s.a,t)
t=u.k(0,"Sym")
t.d=t.a.K("Symbol")
t=u.k(0,"CloseStr")
t.d=t.a.K("String")
t=u.k(0,"Id")
s=t.a.K("Id")
t.d=s
s.ay(0,"Reserved",H.c(["DOCTYPE","html","head","meta","link","title","body","script"],[P.f]))
s=u.k(0,"Attr")
s.d=s.a.K("Attr")
s=u.k(0,"Other")
s.d=s.a.K("Other")
return u}}
V.hv.prototype={
e6:function(a,b){H.m(b,"$ib",[P.f],"$ab")
this.sbQ(H.c([],[[P.b,W.aw]]))
this.J(C.a.m(b,"\n"),"#111")},
bx:function(a){},
be:function(){return}}
V.hN.prototype={
eQ:function(a,b){var u,t,s,r,q,p,o
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
W.ac(u,"scroll",H.n(new V.hP(s),{func:1,ret:-1,args:[o]}),!1,o)},
dj:function(a){var u,t,s,r,q,p,o,n,m,l,k
H.m(a,"$ib",[P.f],"$ab")
this.hY()
u=document
t=u.createElement("div")
t.className="textPar"
for(s=this.b.ef(C.a.jm(a)),r=s.length,q=0;q<s.length;s.length===r||(0,H.E)(s),++q){p=s[q]
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
if(H.n7(n,"|",0)){m=n.split("|")
l=u.createElement("a")
l.className="linkPar"
if(1>=m.length)return H.j(m,1)
l.href=H.H(m[1])
l.textContent=H.H(m[0])
C.k.C(t,l)}else{k=P.l4(C.B,n,C.x,!1)
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
eo:function(a){var u,t,s,r
u=new V.fj("dart")
u.b8("dart")
t=new V.fH("glsl")
t.b8("glsl")
s=new V.fI("html")
s.b8("html")
r=C.a.jf(H.c([u,t,s],[V.br]),new V.hQ(a))
if(r!=null)return r
u=new V.hv("plain")
u.b8("plain")
return u},
di:function(a4,a5,a6,a7){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3
H.m(a7,"$ib",[P.f],"$ab")
u=H.c([],[P.B])
for(t=!1,s=0;s<a7.length;++s){r=a7[s]
if(J.kc(r).bE(r,"+")){C.a.Y(a7,s,C.j.b6(r,1))
C.a.h(u,1)
t=!0}else if(C.j.bE(r,"-")){C.a.Y(a7,s,C.j.b6(r,1))
C.a.h(u,-1)
t=!0}else C.a.h(u,0)}q=this.eo(a5)
q.e6(0,a7)
p=document
o=p.createElement("div")
o.className="codeTableScroll"
n=p.createElement("table")
n.className="codeTable"
C.k.C(o,n)
C.k.C(this.a,o)
m=P.l4(C.B,a4,C.x,!1)
l=p.createElement("tr")
l.className="headerRow"
k=p.createElement("td")
k.className="headerCell"
k.colSpan=t?3:2
j=p.createElement("div")
j.className="tableHeader"
j.id=m
i=W.kn(null)
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
for(f=r.length,a0=0;a0<r.length;r.length===f||(0,H.E)(r),++a0)C.v.C(a,r[a0])
C.m.C(e,d)
C.m.C(e,c)
C.m.C(e,a)
C.o.C(n,e)}else for(f=q.d,a1=f.length,a2=a6,a0=0;a0<f.length;f.length===a1||(0,H.E)(f),++a0){r=f[a0]
e=p.createElement("tr")
e.className="codeTableRow"
d=p.createElement("td")
d.className="codeLineNums";++a2
d.textContent=""+a2
c=p.createElement("td")
c.className="codeLineText"
for(a3=C.a.gS(r);a3.B();)C.v.C(c,a3.gH(a3))
C.m.C(e,d)
C.m.C(e,c)
C.o.C(n,e)}},
hY:function(){var u,t,s,r
if(this.b!=null)return
u=V.ia()
u.c=u.k(0,"Start")
t=u.k(0,"Start").m(0,"Bold")
s=V.v(new H.q("*"))
C.a.h(t.a,s)
t.c=!0
t=u.k(0,"Bold").m(0,"Bold")
s=new V.al()
r=[V.aq]
s.sa1(H.c([],r))
C.a.h(t.a,s)
t=V.v(new H.q("*"))
C.a.h(s.a,t)
t=u.k(0,"Bold").m(0,"BoldEnd")
s=V.v(new H.q("*"))
C.a.h(t.a,s)
t.c=!0
t=u.k(0,"Start").m(0,"Italic")
s=V.v(new H.q("_"))
C.a.h(t.a,s)
t.c=!0
t=u.k(0,"Italic").m(0,"Italic")
s=new V.al()
s.sa1(H.c([],r))
C.a.h(t.a,s)
t=V.v(new H.q("_"))
C.a.h(s.a,t)
t=u.k(0,"Italic").m(0,"ItalicEnd")
s=V.v(new H.q("_"))
C.a.h(t.a,s)
t.c=!0
t=u.k(0,"Start").m(0,"Code")
s=V.v(new H.q("`"))
C.a.h(t.a,s)
t.c=!0
t=u.k(0,"Code").m(0,"Code")
s=new V.al()
s.sa1(H.c([],r))
C.a.h(t.a,s)
t=V.v(new H.q("`"))
C.a.h(s.a,t)
t=u.k(0,"Code").m(0,"CodeEnd")
s=V.v(new H.q("`"))
C.a.h(t.a,s)
t.c=!0
t=u.k(0,"Start").m(0,"LinkHead")
s=V.v(new H.q("["))
C.a.h(t.a,s)
t.c=!0
t=u.k(0,"LinkHead").m(0,"LinkTail")
s=V.v(new H.q("|"))
C.a.h(t.a,s)
s=u.k(0,"LinkHead").m(0,"LinkEnd")
t=V.v(new H.q("]"))
C.a.h(s.a,t)
s.c=!0
s=u.k(0,"LinkHead").m(0,"LinkHead")
t=new V.al()
t.sa1(H.c([],r))
C.a.h(s.a,t)
s=V.v(new H.q("|]"))
C.a.h(t.a,s)
s=u.k(0,"LinkTail").m(0,"LinkEnd")
t=V.v(new H.q("]"))
C.a.h(s.a,t)
s.c=!0
s=u.k(0,"LinkTail").m(0,"LinkTail")
t=new V.al()
t.sa1(H.c([],r))
C.a.h(s.a,t)
s=V.v(new H.q("|]"))
C.a.h(t.a,s)
C.a.h(u.k(0,"Start").m(0,"Other").a,new V.b6())
s=u.k(0,"Other").m(0,"Other")
t=new V.al()
t.sa1(H.c([],r))
C.a.h(s.a,t)
s=V.v(new H.q("*_`["))
C.a.h(t.a,s)
s=u.k(0,"BoldEnd")
s.d=s.a.K("Bold")
s=u.k(0,"ItalicEnd")
s.d=s.a.K("Italic")
s=u.k(0,"CodeEnd")
s.d=s.a.K("Code")
s=u.k(0,"LinkEnd")
s.d=s.a.K("Link")
s=u.k(0,"Other")
s.d=s.a.K("Other")
this.b=u}}
V.hP.prototype={
$1:function(a){P.kQ(C.q,new V.hO(this.a))},
$S:40}
V.hO.prototype={
$0:function(){var u,t,s
u=C.d.af(document.documentElement.scrollTop)
t=this.a.style
s=H.l(-0.01*u)+"px"
t.top=s},
$S:2}
V.hQ.prototype={
$1:function(a){return H.k(a,"$ibr").a===this.a},
$S:41}
Q.jG.prototype={
$1:function(a){var u,t,s,r
H.k(a,"$iy")
u=this.a
t=this.b
s=t.a
r=[P.f]
u.di("Vertex Shader","glsl",0,H.c((s==null?null:s.c).split("\n"),r))
t=t.a
u.di("Fragment Shader","glsl",0,H.c((t==null?null:t.d).split("\n"),r))},
$S:7};(function aliases(){var u=J.a.prototype
u.eF=u.i
u=J.dl.prototype
u.eH=u.i
u=P.e.prototype
u.eG=u.bB
u=W.T.prototype
u.bF=u.a8
u=W.ey.prototype
u.eK=u.ak
u=O.dv.prototype
u.eJ=u.aH
u=O.aT.prototype
u.bG=u.aH
u=V.dt.prototype
u.eI=u.aw
u.cK=u.i})();(function installTearOffs(){var u=hunkHelpers._static_1,t=hunkHelpers._static_0,s=hunkHelpers.installStaticTearOff,r=hunkHelpers.installInstanceTearOff,q=hunkHelpers._instance_2u,p=hunkHelpers._instance_0u,o=hunkHelpers._instance_1u,n=hunkHelpers._instance_0i
u(P,"mG","mo",9)
u(P,"mH","mp",9)
u(P,"mI","mq",9)
t(P,"ld","mF",3)
s(W,"mS",4,null,["$4"],["ms"],21,0)
s(W,"mT",4,null,["$4"],["mt"],21,0)
var m
r(m=E.aj.prototype,"ge4",0,0,null,["$1","$0"],["e5","jx"],0,0)
r(m,"ge2",0,0,null,["$1","$0"],["e3","ju"],0,0)
q(m,"gjs","jt",5)
q(m,"gjv","jw",5)
r(m=E.dU.prototype,"gcL",0,0,null,["$1","$0"],["cN","cM"],0,0)
p(m,"gjM","ea",3)
o(m=X.e0.prototype,"gh8","h9",10)
o(m,"gfV","fW",10)
o(m,"gh2","h3",4)
o(m,"ghc","hd",20)
o(m,"gha","hb",20)
o(m,"ghg","hh",4)
o(m,"ghk","hl",4)
o(m,"gh6","h7",4)
o(m,"ghi","hj",4)
o(m,"gh4","h5",4)
o(m,"ghm","hn",43)
o(m,"gho","hp",10)
o(m,"ghB","hC",11)
o(m,"ghx","hy",11)
o(m,"ghz","hA",11)
r(D.bt.prototype,"geV",0,0,null,["$1","$0"],["ap","eW"],0,0)
r(m=D.dn.prototype,"gd6",0,0,null,["$1","$0"],["d7","he"],0,0)
o(m,"ghr","hs",30)
q(m,"gfP","fQ",22)
q(m,"ghv","hw",22)
n(V.O.prototype,"gl","cq",23)
n(V.U.prototype,"gl","cq",23)
r(m=U.ck.prototype,"gaD",0,0,null,["$1","$0"],["M","a0"],0,0)
q(m,"gfN","fO",24)
q(m,"ght","hu",24)
r(m=U.e1.prototype,"gaD",0,0,null,["$1","$0"],["M","a0"],0,0)
o(m,"gbT","bU",1)
o(m,"gbV","bW",1)
o(m,"gbX","bY",1)
r(m=U.e2.prototype,"gaD",0,0,null,["$1","$0"],["M","a0"],0,0)
o(m,"gbT","bU",1)
o(m,"gbV","bW",1)
o(m,"gbX","bY",1)
o(m,"gfG","fH",1)
o(m,"gfI","fJ",1)
o(m,"gi9","ia",1)
o(m,"gi7","i8",1)
o(m,"gi5","i6",1)
o(U.e3.prototype,"gfL","fM",1)
r(m=M.de.prototype,"gah",0,0,null,["$1","$0"],["aq","eY"],0,0)
q(m,"gfZ","h_",5)
q(m,"gh0","h1",5)
r(m=O.du.prototype,"gfX",0,0,null,["$1","$0"],["a6","fY"],0,0)
r(m,"ghO",0,0,null,["$1","$0"],["dc","hP"],0,0)
q(m,"gfR","fS",25)
q(m,"gfT","fU",25)
r(X.dD.prototype,"gcO",0,0,null,["$1","$0"],["aE","f7"],0,0)})();(function inheritance(){var u=hunkHelpers.mixin,t=hunkHelpers.inherit,s=hunkHelpers.inheritMany
t(P.L,null)
s(P.L,[H.jV,J.a,J.ap,P.el,P.e,H.cm,P.aQ,H.bM,H.e_,H.hA,H.ig,P.bu,H.cc,H.eD,P.a6,H.fW,H.fX,H.fR,P.eJ,P.b5,P.aA,P.e5,P.hY,P.cx,P.hZ,P.b0,P.ae,P.jt,P.jh,P.bZ,P.ek,P.w,P.cd,P.fL,P.jr,P.M,P.ai,P.a3,P.aN,P.ht,P.dM,P.ed,P.fF,P.bv,P.b,P.N,P.J,P.am,P.f,P.bf,W.ff,W.bB,W.A,W.dB,W.ey,W.jm,W.df,W.as,W.jg,W.eO,P.jb,O.a2,O.cn,E.f8,E.aj,E.hB,E.dU,Z.e4,Z.iM,Z.d6,Z.cl,Z.b3,D.fb,D.bL,D.y,X.d7,X.dm,X.fT,X.fZ,X.ar,X.hg,X.ib,X.e0,D.bt,D.a4,D.dE,D.dL,D.dR,D.dS,D.dT,V.a1,V.b7,V.ft,V.dw,V.ak,V.a9,V.aa,V.dI,V.O,V.U,U.e1,U.e2,U.e3,M.de,A.d2,A.f3,A.h7,A.cB,A.cF,A.cD,A.cG,A.cE,A.cH,A.bK,A.dX,A.ir,F.a5,F.fy,F.bx,F.fV,F.bR,F.dK,F.hK,F.hL,F.hM,F.ay,F.iA,F.iB,F.iE,F.iG,F.iH,F.iI,O.bY,O.dv,T.i6,V.b6,V.aq,V.dt,V.hz,V.hJ,V.cw,V.dV,V.cz,V.i9,X.d8,X.dP,X.dD,V.br,V.hN])
s(J.a,[J.fP,J.dk,J.dl,J.aC,J.bw,J.b9,H.cq,W.d,W.f1,W.d3,W.aL,W.aM,W.S,W.e7,W.fk,W.fl,W.db,W.e9,W.dd,W.eb,W.fn,W.o,W.ee,W.aP,W.fJ,W.eg,W.dr,W.ha,W.em,W.en,W.aV,W.eo,W.er,W.aW,W.ev,W.dG,W.ex,W.aY,W.ez,W.aZ,W.eE,W.aD,W.eH,W.i8,W.b1,W.eK,W.id,W.iw,W.eP,W.eR,W.eT,W.eV,W.eX,P.bb,P.ei,P.be,P.et,P.hy,P.eF,P.bg,P.eM,P.f4,P.e6,P.d4,P.dg,P.dF,P.bV,P.dJ,P.dY,P.eB])
s(J.dl,[J.hu,J.bA,J.ba])
t(J.jU,J.aC)
s(J.bw,[J.dj,J.fQ])
t(P.fY,P.el)
s(P.fY,[H.dZ,W.iT,W.ah,P.fB])
t(H.q,H.dZ)
s(P.e,[H.fq,H.h1,H.cJ])
s(H.fq,[H.bQ,H.dp])
s(P.aQ,[H.h2,H.iN])
t(H.h3,H.bQ)
s(P.bu,[H.hq,H.fS,H.iu,H.ii,H.fa,H.hH,P.dC,P.aJ,P.iv,P.it,P.bW,P.fd,P.fi])
s(H.cc,[H.jL,H.i3,H.jC,H.jD,H.jE,P.iP,P.iO,P.iQ,P.iR,P.jq,P.jp,P.iZ,P.j2,P.j_,P.j0,P.j1,P.j5,P.j6,P.j4,P.j3,P.i_,P.i0,P.jv,P.je,P.jd,P.jf,P.h0,P.fo,P.fp,W.fr,W.hc,W.he,W.hG,W.hX,W.iY,W.ho,W.hn,W.ji,W.jj,W.jo,W.js,P.jx,P.fC,P.fD,P.f6,E.hC,E.hD,E.hE,E.i7,D.fv,D.fw,F.jK,F.jy,F.iK,F.iJ,F.iC,F.iD,V.jJ,V.hP,V.hO,V.hQ,Q.jG])
s(H.i3,[H.hV,H.ca])
t(P.h_,P.a6)
s(P.h_,[H.aR,W.iS])
t(H.dy,H.cq)
s(H.dy,[H.cN,H.cP])
t(H.cO,H.cN)
t(H.cp,H.cO)
t(H.cQ,H.cP)
t(H.dz,H.cQ)
s(H.dz,[H.hh,H.hi,H.hj,H.hk,H.hl,H.dA,H.hm])
t(P.jc,P.jt)
t(P.ja,P.jh)
t(P.ce,P.hZ)
t(P.fs,P.cd)
s(P.ce,[P.fK,P.iy])
t(P.ix,P.fs)
s(P.a3,[P.z,P.B])
s(P.aJ,[P.bU,P.fM])
s(W.d,[W.C,W.fA,W.aX,W.cR,W.b_,W.aE,W.cT,W.iL,W.cK,P.f7,P.bI])
s(W.C,[W.T,W.bq,W.ch,W.cL])
s(W.T,[W.u,P.p])
s(W.u,[W.d1,W.f2,W.c9,W.bp,W.bJ,W.aw,W.fE,W.dh,W.hI,W.bX,W.dN,W.dO,W.i2,W.cy])
s(W.aL,[W.cf,W.fg,W.fh])
t(W.fe,W.aM)
t(W.cg,W.e7)
t(W.ea,W.e9)
t(W.dc,W.ea)
t(W.ec,W.eb)
t(W.fm,W.ec)
t(W.aO,W.d3)
t(W.ef,W.ee)
t(W.fz,W.ef)
t(W.eh,W.eg)
t(W.bN,W.eh)
t(W.di,W.ch)
t(W.bz,W.o)
s(W.bz,[W.aS,W.a7,W.aF])
t(W.hb,W.em)
t(W.hd,W.en)
t(W.ep,W.eo)
t(W.hf,W.ep)
t(W.es,W.er)
t(W.cr,W.es)
t(W.ew,W.ev)
t(W.hw,W.ew)
t(W.hF,W.ex)
t(W.cS,W.cR)
t(W.hS,W.cS)
t(W.eA,W.ez)
t(W.hT,W.eA)
t(W.hW,W.eE)
t(W.eI,W.eH)
t(W.i4,W.eI)
t(W.cU,W.cT)
t(W.i5,W.cU)
t(W.eL,W.eK)
t(W.ic,W.eL)
t(W.b4,W.a7)
t(W.eQ,W.eP)
t(W.iU,W.eQ)
t(W.e8,W.dd)
t(W.eS,W.eR)
t(W.j7,W.eS)
t(W.eU,W.eT)
t(W.eq,W.eU)
t(W.eW,W.eV)
t(W.jk,W.eW)
t(W.eY,W.eX)
t(W.jl,W.eY)
t(W.iV,W.iS)
t(W.iW,P.hY)
t(W.k2,W.iW)
t(W.iX,P.cx)
t(W.jn,W.ey)
t(P.ab,P.jb)
t(P.ej,P.ei)
t(P.fU,P.ej)
t(P.eu,P.et)
t(P.hr,P.eu)
t(P.cu,P.p)
t(P.eG,P.eF)
t(P.i1,P.eG)
t(P.eN,P.eM)
t(P.ie,P.eN)
t(P.f5,P.e6)
t(P.hs,P.bI)
t(P.eC,P.eB)
t(P.hU,P.eC)
s(E.f8,[Z.d5,A.cv,T.dQ])
s(D.y,[D.bO,D.bP,D.R,X.hx])
s(X.hx,[X.ds,X.bc,X.co,X.dW])
s(O.a2,[D.dn,U.ck])
s(D.fb,[U.fc,U.a8])
t(U.d9,U.a8)
t(A.h4,A.cv)
s(A.dX,[A.K,A.im,A.io,A.iq,A.ik,A.Z,A.il,A.I,A.ip,A.is,A.cC,A.at,A.af,A.ag])
t(F.hR,F.fy)
t(F.ij,F.fV)
t(F.iF,F.iG)
t(F.hp,F.iH)
t(O.du,O.bY)
s(O.dv,[O.h5,O.h6,O.aT])
s(O.aT,[O.h8,O.h9])
s(V.dt,[V.al,V.cA])
t(X.fG,X.dP)
s(V.br,[V.fj,V.fH,V.fI,V.hv])
u(H.dZ,H.e_)
u(H.cN,P.w)
u(H.cO,H.bM)
u(H.cP,P.w)
u(H.cQ,H.bM)
u(P.el,P.w)
u(W.e7,W.ff)
u(W.e9,P.w)
u(W.ea,W.A)
u(W.eb,P.w)
u(W.ec,W.A)
u(W.ee,P.w)
u(W.ef,W.A)
u(W.eg,P.w)
u(W.eh,W.A)
u(W.em,P.a6)
u(W.en,P.a6)
u(W.eo,P.w)
u(W.ep,W.A)
u(W.er,P.w)
u(W.es,W.A)
u(W.ev,P.w)
u(W.ew,W.A)
u(W.ex,P.a6)
u(W.cR,P.w)
u(W.cS,W.A)
u(W.ez,P.w)
u(W.eA,W.A)
u(W.eE,P.a6)
u(W.eH,P.w)
u(W.eI,W.A)
u(W.cT,P.w)
u(W.cU,W.A)
u(W.eK,P.w)
u(W.eL,W.A)
u(W.eP,P.w)
u(W.eQ,W.A)
u(W.eR,P.w)
u(W.eS,W.A)
u(W.eT,P.w)
u(W.eU,W.A)
u(W.eV,P.w)
u(W.eW,W.A)
u(W.eX,P.w)
u(W.eY,W.A)
u(P.ei,P.w)
u(P.ej,W.A)
u(P.et,P.w)
u(P.eu,W.A)
u(P.eF,P.w)
u(P.eG,W.A)
u(P.eM,P.w)
u(P.eN,W.A)
u(P.e6,P.a6)
u(P.eB,P.w)
u(P.eC,W.A)})();(function constants(){var u=hunkHelpers.makeConstList
C.n=W.bp.prototype
C.p=W.bJ.prototype
C.k=W.aw.prototype
C.I=W.db.prototype
C.K=W.dh.prototype
C.y=W.di.prototype
C.M=J.a.prototype
C.a=J.aC.prototype
C.h=J.dj.prototype
C.r=J.dk.prototype
C.d=J.bw.prototype
C.j=J.b9.prototype
C.T=J.ba.prototype
C.X=W.cr.prototype
C.C=J.hu.prototype
C.D=W.dG.prototype
C.b=P.bV.prototype
C.v=W.bX.prototype
C.o=W.dN.prototype
C.m=W.dO.prototype
C.w=J.bA.prototype
C.E=W.b4.prototype
C.F=W.cK.prototype
C.G=new P.ht()
C.H=new P.iy()
C.l=new P.jc()
C.c=new A.bK(0,"ColorSourceType.None")
C.i=new A.bK(1,"ColorSourceType.Solid")
C.e=new A.bK(2,"ColorSourceType.Texture2D")
C.f=new A.bK(3,"ColorSourceType.TextureCube")
C.q=new P.aN(0)
C.J=new P.aN(5e6)
C.L=new P.fL("element",!0,!1,!1,!1)
C.N=function(hooks) {
  if (typeof dartExperimentalFixupGetTag != "function") return hooks;
  hooks.getTag = dartExperimentalFixupGetTag(hooks.getTag);
}
C.O=function(hooks) {
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
C.z=function(hooks) { return hooks; }

C.P=function(getTagFallback) {
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
C.Q=function() {
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
C.R=function(hooks) {
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
C.S=function(hooks) {
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
C.A=function getTagFallback(o) {
  var s = Object.prototype.toString.call(o);
  return s.substring(8, s.length - 1);
}
C.U=H.c(u(["*::class","*::dir","*::draggable","*::hidden","*::id","*::inert","*::itemprop","*::itemref","*::itemscope","*::lang","*::spellcheck","*::title","*::translate","A::accesskey","A::coords","A::hreflang","A::name","A::shape","A::tabindex","A::target","A::type","AREA::accesskey","AREA::alt","AREA::coords","AREA::nohref","AREA::shape","AREA::tabindex","AREA::target","AUDIO::controls","AUDIO::loop","AUDIO::mediagroup","AUDIO::muted","AUDIO::preload","BDO::dir","BODY::alink","BODY::bgcolor","BODY::link","BODY::text","BODY::vlink","BR::clear","BUTTON::accesskey","BUTTON::disabled","BUTTON::name","BUTTON::tabindex","BUTTON::type","BUTTON::value","CANVAS::height","CANVAS::width","CAPTION::align","COL::align","COL::char","COL::charoff","COL::span","COL::valign","COL::width","COLGROUP::align","COLGROUP::char","COLGROUP::charoff","COLGROUP::span","COLGROUP::valign","COLGROUP::width","COMMAND::checked","COMMAND::command","COMMAND::disabled","COMMAND::label","COMMAND::radiogroup","COMMAND::type","DATA::value","DEL::datetime","DETAILS::open","DIR::compact","DIV::align","DL::compact","FIELDSET::disabled","FONT::color","FONT::face","FONT::size","FORM::accept","FORM::autocomplete","FORM::enctype","FORM::method","FORM::name","FORM::novalidate","FORM::target","FRAME::name","H1::align","H2::align","H3::align","H4::align","H5::align","H6::align","HR::align","HR::noshade","HR::size","HR::width","HTML::version","IFRAME::align","IFRAME::frameborder","IFRAME::height","IFRAME::marginheight","IFRAME::marginwidth","IFRAME::width","IMG::align","IMG::alt","IMG::border","IMG::height","IMG::hspace","IMG::ismap","IMG::name","IMG::usemap","IMG::vspace","IMG::width","INPUT::accept","INPUT::accesskey","INPUT::align","INPUT::alt","INPUT::autocomplete","INPUT::autofocus","INPUT::checked","INPUT::disabled","INPUT::inputmode","INPUT::ismap","INPUT::list","INPUT::max","INPUT::maxlength","INPUT::min","INPUT::multiple","INPUT::name","INPUT::placeholder","INPUT::readonly","INPUT::required","INPUT::size","INPUT::step","INPUT::tabindex","INPUT::type","INPUT::usemap","INPUT::value","INS::datetime","KEYGEN::disabled","KEYGEN::keytype","KEYGEN::name","LABEL::accesskey","LABEL::for","LEGEND::accesskey","LEGEND::align","LI::type","LI::value","LINK::sizes","MAP::name","MENU::compact","MENU::label","MENU::type","METER::high","METER::low","METER::max","METER::min","METER::value","OBJECT::typemustmatch","OL::compact","OL::reversed","OL::start","OL::type","OPTGROUP::disabled","OPTGROUP::label","OPTION::disabled","OPTION::label","OPTION::selected","OPTION::value","OUTPUT::for","OUTPUT::name","P::align","PRE::width","PROGRESS::max","PROGRESS::min","PROGRESS::value","SELECT::autocomplete","SELECT::disabled","SELECT::multiple","SELECT::name","SELECT::required","SELECT::size","SELECT::tabindex","SOURCE::type","TABLE::align","TABLE::bgcolor","TABLE::border","TABLE::cellpadding","TABLE::cellspacing","TABLE::frame","TABLE::rules","TABLE::summary","TABLE::width","TBODY::align","TBODY::char","TBODY::charoff","TBODY::valign","TD::abbr","TD::align","TD::axis","TD::bgcolor","TD::char","TD::charoff","TD::colspan","TD::headers","TD::height","TD::nowrap","TD::rowspan","TD::scope","TD::valign","TD::width","TEXTAREA::accesskey","TEXTAREA::autocomplete","TEXTAREA::cols","TEXTAREA::disabled","TEXTAREA::inputmode","TEXTAREA::name","TEXTAREA::placeholder","TEXTAREA::readonly","TEXTAREA::required","TEXTAREA::rows","TEXTAREA::tabindex","TEXTAREA::wrap","TFOOT::align","TFOOT::char","TFOOT::charoff","TFOOT::valign","TH::abbr","TH::align","TH::axis","TH::bgcolor","TH::char","TH::charoff","TH::colspan","TH::headers","TH::height","TH::nowrap","TH::rowspan","TH::scope","TH::valign","TH::width","THEAD::align","THEAD::char","THEAD::charoff","THEAD::valign","TR::align","TR::bgcolor","TR::char","TR::charoff","TR::valign","TRACK::default","TRACK::kind","TRACK::label","TRACK::srclang","UL::compact","UL::type","VIDEO::controls","VIDEO::height","VIDEO::loop","VIDEO::mediagroup","VIDEO::muted","VIDEO::preload","VIDEO::width"]),[P.f])
C.V=H.c(u(["HEAD","AREA","BASE","BASEFONT","BR","COL","COLGROUP","EMBED","FRAME","FRAMESET","HR","IMAGE","IMG","INPUT","ISINDEX","LINK","META","PARAM","SOURCE","STYLE","TITLE","WBR"]),[P.f])
C.W=H.c(u([]),[P.f])
C.B=H.c(u([0,0,65498,45055,65535,34815,65534,18431]),[P.B])
C.t=H.c(u(["bind","if","ref","repeat","syntax"]),[P.f])
C.u=H.c(u(["A::href","AREA::href","BLOCKQUOTE::cite","BODY::background","COMMAND::icon","DEL::cite","FORM::action","IMG::src","INPUT::src","INS::cite","Q::cite","VIDEO::poster"]),[P.f])
C.x=new P.ix(!1)})();(function staticFields(){$.aK=0
$.cb=null
$.ko=null
$.k4=!1
$.lg=null
$.lb=null
$.ll=null
$.jz=null
$.jF=null
$.kd=null
$.c_=null
$.cW=null
$.cX=null
$.k5=!1
$.X=C.l
$.b8=null
$.jS=null
$.kv=null
$.ku=null
$.kC=null
$.kG=null
$.cs=null
$.kL=null
$.kU=null
$.kY=null
$.kW=null
$.kX=null
$.iz=null
$.kV=null
$.kF=null})();(function lazyInitializers(){var u=hunkHelpers.lazy
u($,"ng","lo",function(){return H.lf("_$dart_dartClosure")})
u($,"nh","kh",function(){return H.lf("_$dart_js")})
u($,"nm","lp",function(){return H.b2(H.ih({
toString:function(){return"$receiver$"}}))})
u($,"nn","lq",function(){return H.b2(H.ih({$method$:null,
toString:function(){return"$receiver$"}}))})
u($,"no","lr",function(){return H.b2(H.ih(null))})
u($,"np","ls",function(){return H.b2(function(){var $argumentsExpr$='$arguments$'
try{null.$method$($argumentsExpr$)}catch(t){return t.message}}())})
u($,"ns","lv",function(){return H.b2(H.ih(void 0))})
u($,"nt","lw",function(){return H.b2(function(){var $argumentsExpr$='$arguments$'
try{(void 0).$method$($argumentsExpr$)}catch(t){return t.message}}())})
u($,"nr","lu",function(){return H.b2(H.kS(null))})
u($,"nq","lt",function(){return H.b2(function(){try{null.$method$}catch(t){return t.message}}())})
u($,"nv","ly",function(){return H.b2(H.kS(void 0))})
u($,"nu","lx",function(){return H.b2(function(){try{(void 0).$method$}catch(t){return t.message}}())})
u($,"nK","ki",function(){return P.mn()})
u($,"nO","d0",function(){return[]})
u($,"nN","lD",function(){return P.mf("^[\\-\\.0-9A-Z_a-z~]*$",!0,!1)})
u($,"nL","lC",function(){return P.ky(["A","ABBR","ACRONYM","ADDRESS","AREA","ARTICLE","ASIDE","AUDIO","B","BDI","BDO","BIG","BLOCKQUOTE","BR","BUTTON","CANVAS","CAPTION","CENTER","CITE","CODE","COL","COLGROUP","COMMAND","DATA","DATALIST","DD","DEL","DETAILS","DFN","DIR","DIV","DL","DT","EM","FIELDSET","FIGCAPTION","FIGURE","FONT","FOOTER","FORM","H1","H2","H3","H4","H5","H6","HEADER","HGROUP","HR","I","IFRAME","IMG","INPUT","INS","KBD","LABEL","LEGEND","LI","MAP","MARK","MENU","METER","NAV","NOBR","OL","OPTGROUP","OPTION","OUTPUT","P","PRE","PROGRESS","Q","S","SAMP","SECTION","SELECT","SMALL","SOURCE","SPAN","STRIKE","STRONG","SUB","SUMMARY","SUP","TABLE","TBODY","TD","TEXTAREA","TFOOT","TH","THEAD","TIME","TR","TRACK","TT","U","UL","VAR","VIDEO","WBR"],P.f)})
u($,"nM","kj",function(){return P.kx(P.f,P.bv)})
u($,"nD","lB",function(){return Z.az(0)})
u($,"nx","lz",function(){return Z.az(511)})
u($,"nF","bm",function(){return Z.az(1)})
u($,"nE","bl",function(){return Z.az(2)})
u($,"nz","bk",function(){return Z.az(4)})
u($,"nG","bn",function(){return Z.az(8)})
u($,"nH","bo",function(){return Z.az(16)})
u($,"nA","cZ",function(){return Z.az(32)})
u($,"nB","d_",function(){return Z.az(64)})
u($,"nC","lA",function(){return Z.az(96)})
u($,"nI","c8",function(){return Z.az(128)})
u($,"ny","bj",function(){return Z.az(256)})
u($,"nf","ln",function(){return new V.ft(1e-9)})
u($,"ne","P",function(){return $.ln()})})()
var v={mangledGlobalNames:{B:"int",z:"double",a3:"num",f:"String",M:"bool",J:"Null",b:"List"},mangledNames:{},getTypeFromName:getGlobalFromName,metadata:[],types:[{func:1,ret:-1,opt:[D.y]},{func:1,ret:-1,args:[D.y]},{func:1,ret:P.J},{func:1,ret:-1},{func:1,ret:-1,args:[W.a7]},{func:1,ret:-1,args:[P.B,[P.e,E.aj]]},{func:1,ret:-1,args:[P.f,,]},{func:1,ret:P.J,args:[D.y]},{func:1,ret:P.J,args:[F.a5]},{func:1,ret:-1,args:[{func:1,ret:-1}]},{func:1,ret:-1,args:[W.o]},{func:1,ret:-1,args:[W.aF]},{func:1,ret:P.J,args:[,]},{func:1,ret:P.J,args:[,,]},{func:1,ret:P.f,args:[P.B]},{func:1,ret:P.M,args:[W.C]},{func:1,args:[,]},{func:1,ret:P.M,args:[W.as]},{func:1,ret:P.M,args:[P.f]},{func:1,ret:P.J,args:[{func:1,ret:-1,args:[D.y]}]},{func:1,ret:-1,args:[W.aS]},{func:1,ret:P.M,args:[W.T,P.f,P.f,W.bB]},{func:1,ret:-1,args:[P.B,[P.e,D.a4]]},{func:1,ret:P.z},{func:1,ret:-1,args:[P.B,[P.e,U.a8]]},{func:1,ret:-1,args:[P.B,[P.e,V.ak]]},{func:1,args:[W.o]},{func:1,ret:P.f,args:[P.f]},{func:1,ret:-1,args:[W.C,W.C]},{func:1,ret:W.T,args:[W.C]},{func:1,ret:P.M,args:[[P.e,D.a4]]},{func:1,ret:[P.aA,,],args:[,]},{func:1,ret:P.J,args:[,],opt:[P.am]},{func:1,ret:-1,args:[P.f,P.f]},{func:1,ret:P.J,args:[P.a3]},{func:1,ret:V.aa,args:[P.z]},{func:1,ret:P.J,args:[F.ay,P.z,P.z]},{func:1,args:[P.f]},{func:1,args:[,P.f]},{func:1,ret:P.J,args:[P.b0]},{func:1,ret:P.J,args:[W.o]},{func:1,ret:P.M,args:[V.br]},{func:1,ret:P.J,args:[{func:1,ret:-1}]},{func:1,ret:-1,args:[W.b4]}],interceptorsByTag:null,leafTags:null};(function nativeSupport(){!function(){var u=function(a){var o={}
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
hunkHelpers.setOrUpdateInterceptorsByTag({ArrayBuffer:J.a,AnimationEffectReadOnly:J.a,AnimationEffectTiming:J.a,AnimationEffectTimingReadOnly:J.a,AnimationTimeline:J.a,AnimationWorkletGlobalScope:J.a,AuthenticatorAssertionResponse:J.a,AuthenticatorAttestationResponse:J.a,AuthenticatorResponse:J.a,BackgroundFetchFetch:J.a,BackgroundFetchManager:J.a,BackgroundFetchSettledFetch:J.a,BarProp:J.a,BarcodeDetector:J.a,BluetoothRemoteGATTDescriptor:J.a,Body:J.a,BudgetState:J.a,CacheStorage:J.a,CanvasGradient:J.a,CanvasPattern:J.a,CanvasRenderingContext2D:J.a,Client:J.a,Clients:J.a,CookieStore:J.a,Coordinates:J.a,Credential:J.a,CredentialUserData:J.a,CredentialsContainer:J.a,Crypto:J.a,CryptoKey:J.a,CSS:J.a,CSSVariableReferenceValue:J.a,CustomElementRegistry:J.a,DataTransfer:J.a,DataTransferItem:J.a,DeprecatedStorageInfo:J.a,DeprecatedStorageQuota:J.a,DeprecationReport:J.a,DetectedBarcode:J.a,DetectedFace:J.a,DetectedText:J.a,DeviceAcceleration:J.a,DeviceRotationRate:J.a,DirectoryEntry:J.a,DirectoryReader:J.a,DocumentOrShadowRoot:J.a,DocumentTimeline:J.a,DOMError:J.a,Iterator:J.a,DOMMatrix:J.a,DOMMatrixReadOnly:J.a,DOMParser:J.a,DOMPoint:J.a,DOMPointReadOnly:J.a,DOMQuad:J.a,DOMStringMap:J.a,Entry:J.a,External:J.a,FaceDetector:J.a,FederatedCredential:J.a,FileEntry:J.a,DOMFileSystem:J.a,FontFace:J.a,FontFaceSource:J.a,FormData:J.a,GamepadButton:J.a,GamepadPose:J.a,Geolocation:J.a,Position:J.a,Headers:J.a,HTMLHyperlinkElementUtils:J.a,IdleDeadline:J.a,ImageBitmap:J.a,ImageBitmapRenderingContext:J.a,ImageCapture:J.a,ImageData:J.a,InputDeviceCapabilities:J.a,IntersectionObserver:J.a,IntersectionObserverEntry:J.a,InterventionReport:J.a,KeyframeEffect:J.a,KeyframeEffectReadOnly:J.a,MediaCapabilities:J.a,MediaCapabilitiesInfo:J.a,MediaDeviceInfo:J.a,MediaError:J.a,MediaKeyStatusMap:J.a,MediaKeySystemAccess:J.a,MediaKeys:J.a,MediaKeysPolicy:J.a,MediaMetadata:J.a,MediaSession:J.a,MediaSettingsRange:J.a,MemoryInfo:J.a,MessageChannel:J.a,Metadata:J.a,MutationObserver:J.a,WebKitMutationObserver:J.a,MutationRecord:J.a,NavigationPreloadManager:J.a,Navigator:J.a,NavigatorAutomationInformation:J.a,NavigatorConcurrentHardware:J.a,NavigatorCookies:J.a,NavigatorUserMediaError:J.a,NodeFilter:J.a,NodeIterator:J.a,NonDocumentTypeChildNode:J.a,NonElementParentNode:J.a,NoncedElement:J.a,OffscreenCanvasRenderingContext2D:J.a,OverconstrainedError:J.a,PaintRenderingContext2D:J.a,PaintSize:J.a,PaintWorkletGlobalScope:J.a,PasswordCredential:J.a,Path2D:J.a,PaymentAddress:J.a,PaymentInstruments:J.a,PaymentManager:J.a,PaymentResponse:J.a,PerformanceEntry:J.a,PerformanceLongTaskTiming:J.a,PerformanceMark:J.a,PerformanceMeasure:J.a,PerformanceNavigation:J.a,PerformanceNavigationTiming:J.a,PerformanceObserver:J.a,PerformanceObserverEntryList:J.a,PerformancePaintTiming:J.a,PerformanceResourceTiming:J.a,PerformanceServerTiming:J.a,PerformanceTiming:J.a,Permissions:J.a,PhotoCapabilities:J.a,PositionError:J.a,Presentation:J.a,PresentationReceiver:J.a,PublicKeyCredential:J.a,PushManager:J.a,PushMessageData:J.a,PushSubscription:J.a,PushSubscriptionOptions:J.a,RelatedApplication:J.a,ReportBody:J.a,ReportingObserver:J.a,ResizeObserver:J.a,ResizeObserverEntry:J.a,RTCCertificate:J.a,RTCIceCandidate:J.a,mozRTCIceCandidate:J.a,RTCLegacyStatsReport:J.a,RTCRtpContributingSource:J.a,RTCRtpReceiver:J.a,RTCRtpSender:J.a,RTCSessionDescription:J.a,mozRTCSessionDescription:J.a,RTCStatsResponse:J.a,Screen:J.a,ScrollState:J.a,ScrollTimeline:J.a,Selection:J.a,SharedArrayBuffer:J.a,SpeechRecognitionAlternative:J.a,SpeechSynthesisVoice:J.a,StaticRange:J.a,StorageManager:J.a,StyleMedia:J.a,StylePropertyMap:J.a,StylePropertyMapReadonly:J.a,SyncManager:J.a,TaskAttributionTiming:J.a,TextDetector:J.a,TextMetrics:J.a,TrackDefault:J.a,TreeWalker:J.a,TrustedHTML:J.a,TrustedScriptURL:J.a,TrustedURL:J.a,UnderlyingSourceBase:J.a,URLSearchParams:J.a,VRCoordinateSystem:J.a,VRDisplayCapabilities:J.a,VREyeParameters:J.a,VRFrameData:J.a,VRFrameOfReference:J.a,VRPose:J.a,VRStageBounds:J.a,VRStageBoundsPoint:J.a,VRStageParameters:J.a,ValidityState:J.a,VideoPlaybackQuality:J.a,VideoTrack:J.a,VTTRegion:J.a,WindowClient:J.a,WorkletAnimation:J.a,WorkletGlobalScope:J.a,XPathEvaluator:J.a,XPathExpression:J.a,XPathNSResolver:J.a,XPathResult:J.a,XMLSerializer:J.a,XSLTProcessor:J.a,Bluetooth:J.a,BluetoothCharacteristicProperties:J.a,BluetoothRemoteGATTServer:J.a,BluetoothRemoteGATTService:J.a,BluetoothUUID:J.a,BudgetService:J.a,Cache:J.a,DOMFileSystemSync:J.a,DirectoryEntrySync:J.a,DirectoryReaderSync:J.a,EntrySync:J.a,FileEntrySync:J.a,FileReaderSync:J.a,FileWriterSync:J.a,HTMLAllCollection:J.a,Mojo:J.a,MojoHandle:J.a,MojoWatcher:J.a,NFC:J.a,PagePopupController:J.a,Report:J.a,Request:J.a,Response:J.a,SubtleCrypto:J.a,USBAlternateInterface:J.a,USBConfiguration:J.a,USBDevice:J.a,USBEndpoint:J.a,USBInTransferResult:J.a,USBInterface:J.a,USBIsochronousInTransferPacket:J.a,USBIsochronousInTransferResult:J.a,USBIsochronousOutTransferPacket:J.a,USBIsochronousOutTransferResult:J.a,USBOutTransferResult:J.a,WorkerLocation:J.a,WorkerNavigator:J.a,Worklet:J.a,IDBCursor:J.a,IDBCursorWithValue:J.a,IDBFactory:J.a,IDBIndex:J.a,IDBKeyRange:J.a,IDBObjectStore:J.a,IDBObservation:J.a,IDBObserver:J.a,IDBObserverChanges:J.a,SVGAngle:J.a,SVGAnimatedAngle:J.a,SVGAnimatedBoolean:J.a,SVGAnimatedEnumeration:J.a,SVGAnimatedInteger:J.a,SVGAnimatedLength:J.a,SVGAnimatedLengthList:J.a,SVGAnimatedNumber:J.a,SVGAnimatedNumberList:J.a,SVGAnimatedPreserveAspectRatio:J.a,SVGAnimatedRect:J.a,SVGAnimatedString:J.a,SVGAnimatedTransformList:J.a,SVGMatrix:J.a,SVGPoint:J.a,SVGPreserveAspectRatio:J.a,SVGRect:J.a,SVGUnitTypes:J.a,AudioListener:J.a,AudioParam:J.a,AudioTrack:J.a,AudioWorkletGlobalScope:J.a,AudioWorkletProcessor:J.a,PeriodicWave:J.a,WebGLActiveInfo:J.a,ANGLEInstancedArrays:J.a,ANGLE_instanced_arrays:J.a,WebGLCanvas:J.a,WebGLColorBufferFloat:J.a,WebGLCompressedTextureASTC:J.a,WebGLCompressedTextureATC:J.a,WEBGL_compressed_texture_atc:J.a,WebGLCompressedTextureETC1:J.a,WEBGL_compressed_texture_etc1:J.a,WebGLCompressedTextureETC:J.a,WebGLCompressedTexturePVRTC:J.a,WEBGL_compressed_texture_pvrtc:J.a,WebGLCompressedTextureS3TC:J.a,WEBGL_compressed_texture_s3tc:J.a,WebGLCompressedTextureS3TCsRGB:J.a,WebGLDebugRendererInfo:J.a,WEBGL_debug_renderer_info:J.a,WebGLDebugShaders:J.a,WEBGL_debug_shaders:J.a,WebGLDepthTexture:J.a,WEBGL_depth_texture:J.a,WebGLDrawBuffers:J.a,WEBGL_draw_buffers:J.a,EXTsRGB:J.a,EXT_sRGB:J.a,EXTBlendMinMax:J.a,EXT_blend_minmax:J.a,EXTColorBufferFloat:J.a,EXTColorBufferHalfFloat:J.a,EXTDisjointTimerQuery:J.a,EXTDisjointTimerQueryWebGL2:J.a,EXTFragDepth:J.a,EXT_frag_depth:J.a,EXTShaderTextureLOD:J.a,EXT_shader_texture_lod:J.a,EXTTextureFilterAnisotropic:J.a,EXT_texture_filter_anisotropic:J.a,WebGLGetBufferSubDataAsync:J.a,WebGLLoseContext:J.a,WebGLExtensionLoseContext:J.a,WEBGL_lose_context:J.a,OESElementIndexUint:J.a,OES_element_index_uint:J.a,OESStandardDerivatives:J.a,OES_standard_derivatives:J.a,OESTextureFloat:J.a,OES_texture_float:J.a,OESTextureFloatLinear:J.a,OES_texture_float_linear:J.a,OESTextureHalfFloat:J.a,OES_texture_half_float:J.a,OESTextureHalfFloatLinear:J.a,OES_texture_half_float_linear:J.a,OESVertexArrayObject:J.a,OES_vertex_array_object:J.a,WebGLQuery:J.a,WebGLRenderbuffer:J.a,WebGLRenderingContext:J.a,WebGLSampler:J.a,WebGLShaderPrecisionFormat:J.a,WebGLSync:J.a,WebGLTexture:J.a,WebGLTimerQueryEXT:J.a,WebGLTransformFeedback:J.a,WebGLVertexArrayObject:J.a,WebGLVertexArrayObjectOES:J.a,WebGL:J.a,WebGL2RenderingContextBase:J.a,Database:J.a,SQLError:J.a,SQLResultSet:J.a,SQLTransaction:J.a,DataView:H.cq,ArrayBufferView:H.cq,Float32Array:H.cp,Float64Array:H.cp,Int16Array:H.hh,Int32Array:H.hi,Int8Array:H.hj,Uint16Array:H.hk,Uint32Array:H.hl,Uint8ClampedArray:H.dA,CanvasPixelArray:H.dA,Uint8Array:H.hm,HTMLAudioElement:W.u,HTMLBRElement:W.u,HTMLButtonElement:W.u,HTMLContentElement:W.u,HTMLDListElement:W.u,HTMLDataElement:W.u,HTMLDataListElement:W.u,HTMLDetailsElement:W.u,HTMLDialogElement:W.u,HTMLEmbedElement:W.u,HTMLFieldSetElement:W.u,HTMLHRElement:W.u,HTMLHeadingElement:W.u,HTMLHtmlElement:W.u,HTMLIFrameElement:W.u,HTMLImageElement:W.u,HTMLInputElement:W.u,HTMLLIElement:W.u,HTMLLabelElement:W.u,HTMLLegendElement:W.u,HTMLLinkElement:W.u,HTMLMapElement:W.u,HTMLMediaElement:W.u,HTMLMenuElement:W.u,HTMLMetaElement:W.u,HTMLMeterElement:W.u,HTMLModElement:W.u,HTMLOListElement:W.u,HTMLObjectElement:W.u,HTMLOptGroupElement:W.u,HTMLOptionElement:W.u,HTMLOutputElement:W.u,HTMLParagraphElement:W.u,HTMLParamElement:W.u,HTMLPictureElement:W.u,HTMLPreElement:W.u,HTMLProgressElement:W.u,HTMLQuoteElement:W.u,HTMLScriptElement:W.u,HTMLShadowElement:W.u,HTMLSlotElement:W.u,HTMLSourceElement:W.u,HTMLSpanElement:W.u,HTMLStyleElement:W.u,HTMLTableCaptionElement:W.u,HTMLTableColElement:W.u,HTMLTextAreaElement:W.u,HTMLTimeElement:W.u,HTMLTitleElement:W.u,HTMLTrackElement:W.u,HTMLUListElement:W.u,HTMLUnknownElement:W.u,HTMLVideoElement:W.u,HTMLDirectoryElement:W.u,HTMLFontElement:W.u,HTMLFrameElement:W.u,HTMLFrameSetElement:W.u,HTMLMarqueeElement:W.u,HTMLElement:W.u,AccessibleNodeList:W.f1,HTMLAnchorElement:W.d1,HTMLAreaElement:W.f2,HTMLBaseElement:W.c9,Blob:W.d3,HTMLBodyElement:W.bp,HTMLCanvasElement:W.bJ,CDATASection:W.bq,CharacterData:W.bq,Comment:W.bq,ProcessingInstruction:W.bq,Text:W.bq,CSSNumericValue:W.cf,CSSUnitValue:W.cf,CSSPerspective:W.fe,CSSCharsetRule:W.S,CSSConditionRule:W.S,CSSFontFaceRule:W.S,CSSGroupingRule:W.S,CSSImportRule:W.S,CSSKeyframeRule:W.S,MozCSSKeyframeRule:W.S,WebKitCSSKeyframeRule:W.S,CSSKeyframesRule:W.S,MozCSSKeyframesRule:W.S,WebKitCSSKeyframesRule:W.S,CSSMediaRule:W.S,CSSNamespaceRule:W.S,CSSPageRule:W.S,CSSRule:W.S,CSSStyleRule:W.S,CSSSupportsRule:W.S,CSSViewportRule:W.S,CSSStyleDeclaration:W.cg,MSStyleCSSProperties:W.cg,CSS2Properties:W.cg,CSSImageValue:W.aL,CSSKeywordValue:W.aL,CSSPositionValue:W.aL,CSSResourceValue:W.aL,CSSURLImageValue:W.aL,CSSStyleValue:W.aL,CSSMatrixComponent:W.aM,CSSRotation:W.aM,CSSScale:W.aM,CSSSkew:W.aM,CSSTranslation:W.aM,CSSTransformComponent:W.aM,CSSTransformValue:W.fg,CSSUnparsedValue:W.fh,DataTransferItemList:W.fk,HTMLDivElement:W.aw,XMLDocument:W.ch,Document:W.ch,DOMException:W.fl,DOMImplementation:W.db,ClientRectList:W.dc,DOMRectList:W.dc,DOMRectReadOnly:W.dd,DOMStringList:W.fm,DOMTokenList:W.fn,Element:W.T,AbortPaymentEvent:W.o,AnimationEvent:W.o,AnimationPlaybackEvent:W.o,ApplicationCacheErrorEvent:W.o,BackgroundFetchClickEvent:W.o,BackgroundFetchEvent:W.o,BackgroundFetchFailEvent:W.o,BackgroundFetchedEvent:W.o,BeforeInstallPromptEvent:W.o,BeforeUnloadEvent:W.o,BlobEvent:W.o,CanMakePaymentEvent:W.o,ClipboardEvent:W.o,CloseEvent:W.o,CustomEvent:W.o,DeviceMotionEvent:W.o,DeviceOrientationEvent:W.o,ErrorEvent:W.o,ExtendableEvent:W.o,ExtendableMessageEvent:W.o,FetchEvent:W.o,FontFaceSetLoadEvent:W.o,ForeignFetchEvent:W.o,GamepadEvent:W.o,HashChangeEvent:W.o,InstallEvent:W.o,MediaEncryptedEvent:W.o,MediaKeyMessageEvent:W.o,MediaQueryListEvent:W.o,MediaStreamEvent:W.o,MediaStreamTrackEvent:W.o,MessageEvent:W.o,MIDIConnectionEvent:W.o,MIDIMessageEvent:W.o,MutationEvent:W.o,NotificationEvent:W.o,PageTransitionEvent:W.o,PaymentRequestEvent:W.o,PaymentRequestUpdateEvent:W.o,PopStateEvent:W.o,PresentationConnectionAvailableEvent:W.o,PresentationConnectionCloseEvent:W.o,ProgressEvent:W.o,PromiseRejectionEvent:W.o,PushEvent:W.o,RTCDataChannelEvent:W.o,RTCDTMFToneChangeEvent:W.o,RTCPeerConnectionIceEvent:W.o,RTCTrackEvent:W.o,SecurityPolicyViolationEvent:W.o,SensorErrorEvent:W.o,SpeechRecognitionError:W.o,SpeechRecognitionEvent:W.o,SpeechSynthesisEvent:W.o,StorageEvent:W.o,SyncEvent:W.o,TrackEvent:W.o,TransitionEvent:W.o,WebKitTransitionEvent:W.o,VRDeviceEvent:W.o,VRDisplayEvent:W.o,VRSessionEvent:W.o,MojoInterfaceRequestEvent:W.o,ResourceProgressEvent:W.o,USBConnectionEvent:W.o,IDBVersionChangeEvent:W.o,AudioProcessingEvent:W.o,OfflineAudioCompletionEvent:W.o,WebGLContextEvent:W.o,Event:W.o,InputEvent:W.o,AbsoluteOrientationSensor:W.d,Accelerometer:W.d,AccessibleNode:W.d,AmbientLightSensor:W.d,Animation:W.d,ApplicationCache:W.d,DOMApplicationCache:W.d,OfflineResourceList:W.d,BackgroundFetchRegistration:W.d,BatteryManager:W.d,BroadcastChannel:W.d,CanvasCaptureMediaStreamTrack:W.d,DedicatedWorkerGlobalScope:W.d,EventSource:W.d,FileReader:W.d,FontFaceSet:W.d,Gyroscope:W.d,XMLHttpRequest:W.d,XMLHttpRequestEventTarget:W.d,XMLHttpRequestUpload:W.d,LinearAccelerationSensor:W.d,Magnetometer:W.d,MediaDevices:W.d,MediaKeySession:W.d,MediaQueryList:W.d,MediaRecorder:W.d,MediaSource:W.d,MediaStream:W.d,MediaStreamTrack:W.d,MessagePort:W.d,MIDIAccess:W.d,MIDIInput:W.d,MIDIOutput:W.d,MIDIPort:W.d,NetworkInformation:W.d,Notification:W.d,OffscreenCanvas:W.d,OrientationSensor:W.d,PaymentRequest:W.d,Performance:W.d,PermissionStatus:W.d,PresentationAvailability:W.d,PresentationConnection:W.d,PresentationConnectionList:W.d,PresentationRequest:W.d,RelativeOrientationSensor:W.d,RemotePlayback:W.d,RTCDataChannel:W.d,DataChannel:W.d,RTCDTMFSender:W.d,RTCPeerConnection:W.d,webkitRTCPeerConnection:W.d,mozRTCPeerConnection:W.d,ScreenOrientation:W.d,Sensor:W.d,ServiceWorker:W.d,ServiceWorkerContainer:W.d,ServiceWorkerGlobalScope:W.d,ServiceWorkerRegistration:W.d,SharedWorker:W.d,SharedWorkerGlobalScope:W.d,SpeechRecognition:W.d,SpeechSynthesis:W.d,SpeechSynthesisUtterance:W.d,VR:W.d,VRDevice:W.d,VRDisplay:W.d,VRSession:W.d,VisualViewport:W.d,WebSocket:W.d,Worker:W.d,WorkerGlobalScope:W.d,WorkerPerformance:W.d,BluetoothDevice:W.d,BluetoothRemoteGATTCharacteristic:W.d,Clipboard:W.d,MojoInterfaceInterceptor:W.d,USB:W.d,IDBDatabase:W.d,IDBOpenDBRequest:W.d,IDBVersionChangeRequest:W.d,IDBRequest:W.d,IDBTransaction:W.d,AnalyserNode:W.d,RealtimeAnalyserNode:W.d,AudioBufferSourceNode:W.d,AudioDestinationNode:W.d,AudioNode:W.d,AudioScheduledSourceNode:W.d,AudioWorkletNode:W.d,BiquadFilterNode:W.d,ChannelMergerNode:W.d,AudioChannelMerger:W.d,ChannelSplitterNode:W.d,AudioChannelSplitter:W.d,ConstantSourceNode:W.d,ConvolverNode:W.d,DelayNode:W.d,DynamicsCompressorNode:W.d,GainNode:W.d,AudioGainNode:W.d,IIRFilterNode:W.d,MediaElementAudioSourceNode:W.d,MediaStreamAudioDestinationNode:W.d,MediaStreamAudioSourceNode:W.d,OscillatorNode:W.d,Oscillator:W.d,PannerNode:W.d,AudioPannerNode:W.d,webkitAudioPannerNode:W.d,ScriptProcessorNode:W.d,JavaScriptAudioNode:W.d,StereoPannerNode:W.d,WaveShaperNode:W.d,EventTarget:W.d,File:W.aO,FileList:W.fz,FileWriter:W.fA,HTMLFormElement:W.fE,Gamepad:W.aP,HTMLHeadElement:W.dh,History:W.fJ,HTMLCollection:W.bN,HTMLFormControlsCollection:W.bN,HTMLOptionsCollection:W.bN,HTMLDocument:W.di,KeyboardEvent:W.aS,Location:W.dr,MediaList:W.ha,MIDIInputMap:W.hb,MIDIOutputMap:W.hd,MimeType:W.aV,MimeTypeArray:W.hf,PointerEvent:W.a7,MouseEvent:W.a7,DragEvent:W.a7,DocumentFragment:W.C,ShadowRoot:W.C,DocumentType:W.C,Node:W.C,NodeList:W.cr,RadioNodeList:W.cr,Plugin:W.aW,PluginArray:W.hw,Range:W.dG,RTCStatsReport:W.hF,HTMLSelectElement:W.hI,SourceBuffer:W.aX,SourceBufferList:W.hS,SpeechGrammar:W.aY,SpeechGrammarList:W.hT,SpeechRecognitionResult:W.aZ,Storage:W.hW,CSSStyleSheet:W.aD,StyleSheet:W.aD,HTMLTableCellElement:W.bX,HTMLTableDataCellElement:W.bX,HTMLTableHeaderCellElement:W.bX,HTMLTableElement:W.dN,HTMLTableRowElement:W.dO,HTMLTableSectionElement:W.i2,HTMLTemplateElement:W.cy,TextTrack:W.b_,TextTrackCue:W.aE,VTTCue:W.aE,TextTrackCueList:W.i4,TextTrackList:W.i5,TimeRanges:W.i8,Touch:W.b1,TouchEvent:W.aF,TouchList:W.ic,TrackDefaultList:W.id,CompositionEvent:W.bz,FocusEvent:W.bz,TextEvent:W.bz,UIEvent:W.bz,URL:W.iw,VideoTrackList:W.iL,WheelEvent:W.b4,Window:W.cK,DOMWindow:W.cK,Attr:W.cL,CSSRuleList:W.iU,ClientRect:W.e8,DOMRect:W.e8,GamepadList:W.j7,NamedNodeMap:W.eq,MozNamedAttrMap:W.eq,SpeechRecognitionResultList:W.jk,StyleSheetList:W.jl,SVGLength:P.bb,SVGLengthList:P.fU,SVGNumber:P.be,SVGNumberList:P.hr,SVGPointList:P.hy,SVGScriptElement:P.cu,SVGStringList:P.i1,SVGAElement:P.p,SVGAnimateElement:P.p,SVGAnimateMotionElement:P.p,SVGAnimateTransformElement:P.p,SVGAnimationElement:P.p,SVGCircleElement:P.p,SVGClipPathElement:P.p,SVGDefsElement:P.p,SVGDescElement:P.p,SVGDiscardElement:P.p,SVGEllipseElement:P.p,SVGFEBlendElement:P.p,SVGFEColorMatrixElement:P.p,SVGFEComponentTransferElement:P.p,SVGFECompositeElement:P.p,SVGFEConvolveMatrixElement:P.p,SVGFEDiffuseLightingElement:P.p,SVGFEDisplacementMapElement:P.p,SVGFEDistantLightElement:P.p,SVGFEFloodElement:P.p,SVGFEFuncAElement:P.p,SVGFEFuncBElement:P.p,SVGFEFuncGElement:P.p,SVGFEFuncRElement:P.p,SVGFEGaussianBlurElement:P.p,SVGFEImageElement:P.p,SVGFEMergeElement:P.p,SVGFEMergeNodeElement:P.p,SVGFEMorphologyElement:P.p,SVGFEOffsetElement:P.p,SVGFEPointLightElement:P.p,SVGFESpecularLightingElement:P.p,SVGFESpotLightElement:P.p,SVGFETileElement:P.p,SVGFETurbulenceElement:P.p,SVGFilterElement:P.p,SVGForeignObjectElement:P.p,SVGGElement:P.p,SVGGeometryElement:P.p,SVGGraphicsElement:P.p,SVGImageElement:P.p,SVGLineElement:P.p,SVGLinearGradientElement:P.p,SVGMarkerElement:P.p,SVGMaskElement:P.p,SVGMetadataElement:P.p,SVGPathElement:P.p,SVGPatternElement:P.p,SVGPolygonElement:P.p,SVGPolylineElement:P.p,SVGRadialGradientElement:P.p,SVGRectElement:P.p,SVGSetElement:P.p,SVGStopElement:P.p,SVGStyleElement:P.p,SVGSVGElement:P.p,SVGSwitchElement:P.p,SVGSymbolElement:P.p,SVGTSpanElement:P.p,SVGTextContentElement:P.p,SVGTextElement:P.p,SVGTextPathElement:P.p,SVGTextPositioningElement:P.p,SVGTitleElement:P.p,SVGUseElement:P.p,SVGViewElement:P.p,SVGGradientElement:P.p,SVGComponentTransferFunctionElement:P.p,SVGFEDropShadowElement:P.p,SVGMPathElement:P.p,SVGElement:P.p,SVGTransform:P.bg,SVGTransformList:P.ie,AudioBuffer:P.f4,AudioParamMap:P.f5,AudioTrackList:P.f7,AudioContext:P.bI,webkitAudioContext:P.bI,BaseAudioContext:P.bI,OfflineAudioContext:P.hs,WebGLBuffer:P.d4,WebGLFramebuffer:P.dg,WebGLProgram:P.dF,WebGL2RenderingContext:P.bV,WebGLShader:P.dJ,WebGLUniformLocation:P.dY,SQLResultSetRowList:P.hU})
hunkHelpers.setOrUpdateLeafTags({ArrayBuffer:true,AnimationEffectReadOnly:true,AnimationEffectTiming:true,AnimationEffectTimingReadOnly:true,AnimationTimeline:true,AnimationWorkletGlobalScope:true,AuthenticatorAssertionResponse:true,AuthenticatorAttestationResponse:true,AuthenticatorResponse:true,BackgroundFetchFetch:true,BackgroundFetchManager:true,BackgroundFetchSettledFetch:true,BarProp:true,BarcodeDetector:true,BluetoothRemoteGATTDescriptor:true,Body:true,BudgetState:true,CacheStorage:true,CanvasGradient:true,CanvasPattern:true,CanvasRenderingContext2D:true,Client:true,Clients:true,CookieStore:true,Coordinates:true,Credential:true,CredentialUserData:true,CredentialsContainer:true,Crypto:true,CryptoKey:true,CSS:true,CSSVariableReferenceValue:true,CustomElementRegistry:true,DataTransfer:true,DataTransferItem:true,DeprecatedStorageInfo:true,DeprecatedStorageQuota:true,DeprecationReport:true,DetectedBarcode:true,DetectedFace:true,DetectedText:true,DeviceAcceleration:true,DeviceRotationRate:true,DirectoryEntry:true,DirectoryReader:true,DocumentOrShadowRoot:true,DocumentTimeline:true,DOMError:true,Iterator:true,DOMMatrix:true,DOMMatrixReadOnly:true,DOMParser:true,DOMPoint:true,DOMPointReadOnly:true,DOMQuad:true,DOMStringMap:true,Entry:true,External:true,FaceDetector:true,FederatedCredential:true,FileEntry:true,DOMFileSystem:true,FontFace:true,FontFaceSource:true,FormData:true,GamepadButton:true,GamepadPose:true,Geolocation:true,Position:true,Headers:true,HTMLHyperlinkElementUtils:true,IdleDeadline:true,ImageBitmap:true,ImageBitmapRenderingContext:true,ImageCapture:true,ImageData:true,InputDeviceCapabilities:true,IntersectionObserver:true,IntersectionObserverEntry:true,InterventionReport:true,KeyframeEffect:true,KeyframeEffectReadOnly:true,MediaCapabilities:true,MediaCapabilitiesInfo:true,MediaDeviceInfo:true,MediaError:true,MediaKeyStatusMap:true,MediaKeySystemAccess:true,MediaKeys:true,MediaKeysPolicy:true,MediaMetadata:true,MediaSession:true,MediaSettingsRange:true,MemoryInfo:true,MessageChannel:true,Metadata:true,MutationObserver:true,WebKitMutationObserver:true,MutationRecord:true,NavigationPreloadManager:true,Navigator:true,NavigatorAutomationInformation:true,NavigatorConcurrentHardware:true,NavigatorCookies:true,NavigatorUserMediaError:true,NodeFilter:true,NodeIterator:true,NonDocumentTypeChildNode:true,NonElementParentNode:true,NoncedElement:true,OffscreenCanvasRenderingContext2D:true,OverconstrainedError:true,PaintRenderingContext2D:true,PaintSize:true,PaintWorkletGlobalScope:true,PasswordCredential:true,Path2D:true,PaymentAddress:true,PaymentInstruments:true,PaymentManager:true,PaymentResponse:true,PerformanceEntry:true,PerformanceLongTaskTiming:true,PerformanceMark:true,PerformanceMeasure:true,PerformanceNavigation:true,PerformanceNavigationTiming:true,PerformanceObserver:true,PerformanceObserverEntryList:true,PerformancePaintTiming:true,PerformanceResourceTiming:true,PerformanceServerTiming:true,PerformanceTiming:true,Permissions:true,PhotoCapabilities:true,PositionError:true,Presentation:true,PresentationReceiver:true,PublicKeyCredential:true,PushManager:true,PushMessageData:true,PushSubscription:true,PushSubscriptionOptions:true,RelatedApplication:true,ReportBody:true,ReportingObserver:true,ResizeObserver:true,ResizeObserverEntry:true,RTCCertificate:true,RTCIceCandidate:true,mozRTCIceCandidate:true,RTCLegacyStatsReport:true,RTCRtpContributingSource:true,RTCRtpReceiver:true,RTCRtpSender:true,RTCSessionDescription:true,mozRTCSessionDescription:true,RTCStatsResponse:true,Screen:true,ScrollState:true,ScrollTimeline:true,Selection:true,SharedArrayBuffer:true,SpeechRecognitionAlternative:true,SpeechSynthesisVoice:true,StaticRange:true,StorageManager:true,StyleMedia:true,StylePropertyMap:true,StylePropertyMapReadonly:true,SyncManager:true,TaskAttributionTiming:true,TextDetector:true,TextMetrics:true,TrackDefault:true,TreeWalker:true,TrustedHTML:true,TrustedScriptURL:true,TrustedURL:true,UnderlyingSourceBase:true,URLSearchParams:true,VRCoordinateSystem:true,VRDisplayCapabilities:true,VREyeParameters:true,VRFrameData:true,VRFrameOfReference:true,VRPose:true,VRStageBounds:true,VRStageBoundsPoint:true,VRStageParameters:true,ValidityState:true,VideoPlaybackQuality:true,VideoTrack:true,VTTRegion:true,WindowClient:true,WorkletAnimation:true,WorkletGlobalScope:true,XPathEvaluator:true,XPathExpression:true,XPathNSResolver:true,XPathResult:true,XMLSerializer:true,XSLTProcessor:true,Bluetooth:true,BluetoothCharacteristicProperties:true,BluetoothRemoteGATTServer:true,BluetoothRemoteGATTService:true,BluetoothUUID:true,BudgetService:true,Cache:true,DOMFileSystemSync:true,DirectoryEntrySync:true,DirectoryReaderSync:true,EntrySync:true,FileEntrySync:true,FileReaderSync:true,FileWriterSync:true,HTMLAllCollection:true,Mojo:true,MojoHandle:true,MojoWatcher:true,NFC:true,PagePopupController:true,Report:true,Request:true,Response:true,SubtleCrypto:true,USBAlternateInterface:true,USBConfiguration:true,USBDevice:true,USBEndpoint:true,USBInTransferResult:true,USBInterface:true,USBIsochronousInTransferPacket:true,USBIsochronousInTransferResult:true,USBIsochronousOutTransferPacket:true,USBIsochronousOutTransferResult:true,USBOutTransferResult:true,WorkerLocation:true,WorkerNavigator:true,Worklet:true,IDBCursor:true,IDBCursorWithValue:true,IDBFactory:true,IDBIndex:true,IDBKeyRange:true,IDBObjectStore:true,IDBObservation:true,IDBObserver:true,IDBObserverChanges:true,SVGAngle:true,SVGAnimatedAngle:true,SVGAnimatedBoolean:true,SVGAnimatedEnumeration:true,SVGAnimatedInteger:true,SVGAnimatedLength:true,SVGAnimatedLengthList:true,SVGAnimatedNumber:true,SVGAnimatedNumberList:true,SVGAnimatedPreserveAspectRatio:true,SVGAnimatedRect:true,SVGAnimatedString:true,SVGAnimatedTransformList:true,SVGMatrix:true,SVGPoint:true,SVGPreserveAspectRatio:true,SVGRect:true,SVGUnitTypes:true,AudioListener:true,AudioParam:true,AudioTrack:true,AudioWorkletGlobalScope:true,AudioWorkletProcessor:true,PeriodicWave:true,WebGLActiveInfo:true,ANGLEInstancedArrays:true,ANGLE_instanced_arrays:true,WebGLCanvas:true,WebGLColorBufferFloat:true,WebGLCompressedTextureASTC:true,WebGLCompressedTextureATC:true,WEBGL_compressed_texture_atc:true,WebGLCompressedTextureETC1:true,WEBGL_compressed_texture_etc1:true,WebGLCompressedTextureETC:true,WebGLCompressedTexturePVRTC:true,WEBGL_compressed_texture_pvrtc:true,WebGLCompressedTextureS3TC:true,WEBGL_compressed_texture_s3tc:true,WebGLCompressedTextureS3TCsRGB:true,WebGLDebugRendererInfo:true,WEBGL_debug_renderer_info:true,WebGLDebugShaders:true,WEBGL_debug_shaders:true,WebGLDepthTexture:true,WEBGL_depth_texture:true,WebGLDrawBuffers:true,WEBGL_draw_buffers:true,EXTsRGB:true,EXT_sRGB:true,EXTBlendMinMax:true,EXT_blend_minmax:true,EXTColorBufferFloat:true,EXTColorBufferHalfFloat:true,EXTDisjointTimerQuery:true,EXTDisjointTimerQueryWebGL2:true,EXTFragDepth:true,EXT_frag_depth:true,EXTShaderTextureLOD:true,EXT_shader_texture_lod:true,EXTTextureFilterAnisotropic:true,EXT_texture_filter_anisotropic:true,WebGLGetBufferSubDataAsync:true,WebGLLoseContext:true,WebGLExtensionLoseContext:true,WEBGL_lose_context:true,OESElementIndexUint:true,OES_element_index_uint:true,OESStandardDerivatives:true,OES_standard_derivatives:true,OESTextureFloat:true,OES_texture_float:true,OESTextureFloatLinear:true,OES_texture_float_linear:true,OESTextureHalfFloat:true,OES_texture_half_float:true,OESTextureHalfFloatLinear:true,OES_texture_half_float_linear:true,OESVertexArrayObject:true,OES_vertex_array_object:true,WebGLQuery:true,WebGLRenderbuffer:true,WebGLRenderingContext:true,WebGLSampler:true,WebGLShaderPrecisionFormat:true,WebGLSync:true,WebGLTexture:true,WebGLTimerQueryEXT:true,WebGLTransformFeedback:true,WebGLVertexArrayObject:true,WebGLVertexArrayObjectOES:true,WebGL:true,WebGL2RenderingContextBase:true,Database:true,SQLError:true,SQLResultSet:true,SQLTransaction:true,DataView:true,ArrayBufferView:false,Float32Array:true,Float64Array:true,Int16Array:true,Int32Array:true,Int8Array:true,Uint16Array:true,Uint32Array:true,Uint8ClampedArray:true,CanvasPixelArray:true,Uint8Array:false,HTMLAudioElement:true,HTMLBRElement:true,HTMLButtonElement:true,HTMLContentElement:true,HTMLDListElement:true,HTMLDataElement:true,HTMLDataListElement:true,HTMLDetailsElement:true,HTMLDialogElement:true,HTMLEmbedElement:true,HTMLFieldSetElement:true,HTMLHRElement:true,HTMLHeadingElement:true,HTMLHtmlElement:true,HTMLIFrameElement:true,HTMLImageElement:true,HTMLInputElement:true,HTMLLIElement:true,HTMLLabelElement:true,HTMLLegendElement:true,HTMLLinkElement:true,HTMLMapElement:true,HTMLMediaElement:true,HTMLMenuElement:true,HTMLMetaElement:true,HTMLMeterElement:true,HTMLModElement:true,HTMLOListElement:true,HTMLObjectElement:true,HTMLOptGroupElement:true,HTMLOptionElement:true,HTMLOutputElement:true,HTMLParagraphElement:true,HTMLParamElement:true,HTMLPictureElement:true,HTMLPreElement:true,HTMLProgressElement:true,HTMLQuoteElement:true,HTMLScriptElement:true,HTMLShadowElement:true,HTMLSlotElement:true,HTMLSourceElement:true,HTMLSpanElement:true,HTMLStyleElement:true,HTMLTableCaptionElement:true,HTMLTableColElement:true,HTMLTextAreaElement:true,HTMLTimeElement:true,HTMLTitleElement:true,HTMLTrackElement:true,HTMLUListElement:true,HTMLUnknownElement:true,HTMLVideoElement:true,HTMLDirectoryElement:true,HTMLFontElement:true,HTMLFrameElement:true,HTMLFrameSetElement:true,HTMLMarqueeElement:true,HTMLElement:false,AccessibleNodeList:true,HTMLAnchorElement:true,HTMLAreaElement:true,HTMLBaseElement:true,Blob:false,HTMLBodyElement:true,HTMLCanvasElement:true,CDATASection:true,CharacterData:true,Comment:true,ProcessingInstruction:true,Text:true,CSSNumericValue:true,CSSUnitValue:true,CSSPerspective:true,CSSCharsetRule:true,CSSConditionRule:true,CSSFontFaceRule:true,CSSGroupingRule:true,CSSImportRule:true,CSSKeyframeRule:true,MozCSSKeyframeRule:true,WebKitCSSKeyframeRule:true,CSSKeyframesRule:true,MozCSSKeyframesRule:true,WebKitCSSKeyframesRule:true,CSSMediaRule:true,CSSNamespaceRule:true,CSSPageRule:true,CSSRule:true,CSSStyleRule:true,CSSSupportsRule:true,CSSViewportRule:true,CSSStyleDeclaration:true,MSStyleCSSProperties:true,CSS2Properties:true,CSSImageValue:true,CSSKeywordValue:true,CSSPositionValue:true,CSSResourceValue:true,CSSURLImageValue:true,CSSStyleValue:false,CSSMatrixComponent:true,CSSRotation:true,CSSScale:true,CSSSkew:true,CSSTranslation:true,CSSTransformComponent:false,CSSTransformValue:true,CSSUnparsedValue:true,DataTransferItemList:true,HTMLDivElement:true,XMLDocument:true,Document:false,DOMException:true,DOMImplementation:true,ClientRectList:true,DOMRectList:true,DOMRectReadOnly:false,DOMStringList:true,DOMTokenList:true,Element:false,AbortPaymentEvent:true,AnimationEvent:true,AnimationPlaybackEvent:true,ApplicationCacheErrorEvent:true,BackgroundFetchClickEvent:true,BackgroundFetchEvent:true,BackgroundFetchFailEvent:true,BackgroundFetchedEvent:true,BeforeInstallPromptEvent:true,BeforeUnloadEvent:true,BlobEvent:true,CanMakePaymentEvent:true,ClipboardEvent:true,CloseEvent:true,CustomEvent:true,DeviceMotionEvent:true,DeviceOrientationEvent:true,ErrorEvent:true,ExtendableEvent:true,ExtendableMessageEvent:true,FetchEvent:true,FontFaceSetLoadEvent:true,ForeignFetchEvent:true,GamepadEvent:true,HashChangeEvent:true,InstallEvent:true,MediaEncryptedEvent:true,MediaKeyMessageEvent:true,MediaQueryListEvent:true,MediaStreamEvent:true,MediaStreamTrackEvent:true,MessageEvent:true,MIDIConnectionEvent:true,MIDIMessageEvent:true,MutationEvent:true,NotificationEvent:true,PageTransitionEvent:true,PaymentRequestEvent:true,PaymentRequestUpdateEvent:true,PopStateEvent:true,PresentationConnectionAvailableEvent:true,PresentationConnectionCloseEvent:true,ProgressEvent:true,PromiseRejectionEvent:true,PushEvent:true,RTCDataChannelEvent:true,RTCDTMFToneChangeEvent:true,RTCPeerConnectionIceEvent:true,RTCTrackEvent:true,SecurityPolicyViolationEvent:true,SensorErrorEvent:true,SpeechRecognitionError:true,SpeechRecognitionEvent:true,SpeechSynthesisEvent:true,StorageEvent:true,SyncEvent:true,TrackEvent:true,TransitionEvent:true,WebKitTransitionEvent:true,VRDeviceEvent:true,VRDisplayEvent:true,VRSessionEvent:true,MojoInterfaceRequestEvent:true,ResourceProgressEvent:true,USBConnectionEvent:true,IDBVersionChangeEvent:true,AudioProcessingEvent:true,OfflineAudioCompletionEvent:true,WebGLContextEvent:true,Event:false,InputEvent:false,AbsoluteOrientationSensor:true,Accelerometer:true,AccessibleNode:true,AmbientLightSensor:true,Animation:true,ApplicationCache:true,DOMApplicationCache:true,OfflineResourceList:true,BackgroundFetchRegistration:true,BatteryManager:true,BroadcastChannel:true,CanvasCaptureMediaStreamTrack:true,DedicatedWorkerGlobalScope:true,EventSource:true,FileReader:true,FontFaceSet:true,Gyroscope:true,XMLHttpRequest:true,XMLHttpRequestEventTarget:true,XMLHttpRequestUpload:true,LinearAccelerationSensor:true,Magnetometer:true,MediaDevices:true,MediaKeySession:true,MediaQueryList:true,MediaRecorder:true,MediaSource:true,MediaStream:true,MediaStreamTrack:true,MessagePort:true,MIDIAccess:true,MIDIInput:true,MIDIOutput:true,MIDIPort:true,NetworkInformation:true,Notification:true,OffscreenCanvas:true,OrientationSensor:true,PaymentRequest:true,Performance:true,PermissionStatus:true,PresentationAvailability:true,PresentationConnection:true,PresentationConnectionList:true,PresentationRequest:true,RelativeOrientationSensor:true,RemotePlayback:true,RTCDataChannel:true,DataChannel:true,RTCDTMFSender:true,RTCPeerConnection:true,webkitRTCPeerConnection:true,mozRTCPeerConnection:true,ScreenOrientation:true,Sensor:true,ServiceWorker:true,ServiceWorkerContainer:true,ServiceWorkerGlobalScope:true,ServiceWorkerRegistration:true,SharedWorker:true,SharedWorkerGlobalScope:true,SpeechRecognition:true,SpeechSynthesis:true,SpeechSynthesisUtterance:true,VR:true,VRDevice:true,VRDisplay:true,VRSession:true,VisualViewport:true,WebSocket:true,Worker:true,WorkerGlobalScope:true,WorkerPerformance:true,BluetoothDevice:true,BluetoothRemoteGATTCharacteristic:true,Clipboard:true,MojoInterfaceInterceptor:true,USB:true,IDBDatabase:true,IDBOpenDBRequest:true,IDBVersionChangeRequest:true,IDBRequest:true,IDBTransaction:true,AnalyserNode:true,RealtimeAnalyserNode:true,AudioBufferSourceNode:true,AudioDestinationNode:true,AudioNode:true,AudioScheduledSourceNode:true,AudioWorkletNode:true,BiquadFilterNode:true,ChannelMergerNode:true,AudioChannelMerger:true,ChannelSplitterNode:true,AudioChannelSplitter:true,ConstantSourceNode:true,ConvolverNode:true,DelayNode:true,DynamicsCompressorNode:true,GainNode:true,AudioGainNode:true,IIRFilterNode:true,MediaElementAudioSourceNode:true,MediaStreamAudioDestinationNode:true,MediaStreamAudioSourceNode:true,OscillatorNode:true,Oscillator:true,PannerNode:true,AudioPannerNode:true,webkitAudioPannerNode:true,ScriptProcessorNode:true,JavaScriptAudioNode:true,StereoPannerNode:true,WaveShaperNode:true,EventTarget:false,File:true,FileList:true,FileWriter:true,HTMLFormElement:true,Gamepad:true,HTMLHeadElement:true,History:true,HTMLCollection:true,HTMLFormControlsCollection:true,HTMLOptionsCollection:true,HTMLDocument:true,KeyboardEvent:true,Location:true,MediaList:true,MIDIInputMap:true,MIDIOutputMap:true,MimeType:true,MimeTypeArray:true,PointerEvent:true,MouseEvent:false,DragEvent:false,DocumentFragment:true,ShadowRoot:true,DocumentType:true,Node:false,NodeList:true,RadioNodeList:true,Plugin:true,PluginArray:true,Range:true,RTCStatsReport:true,HTMLSelectElement:true,SourceBuffer:true,SourceBufferList:true,SpeechGrammar:true,SpeechGrammarList:true,SpeechRecognitionResult:true,Storage:true,CSSStyleSheet:true,StyleSheet:true,HTMLTableCellElement:true,HTMLTableDataCellElement:true,HTMLTableHeaderCellElement:true,HTMLTableElement:true,HTMLTableRowElement:true,HTMLTableSectionElement:true,HTMLTemplateElement:true,TextTrack:true,TextTrackCue:true,VTTCue:true,TextTrackCueList:true,TextTrackList:true,TimeRanges:true,Touch:true,TouchEvent:true,TouchList:true,TrackDefaultList:true,CompositionEvent:true,FocusEvent:true,TextEvent:true,UIEvent:false,URL:true,VideoTrackList:true,WheelEvent:true,Window:true,DOMWindow:true,Attr:true,CSSRuleList:true,ClientRect:true,DOMRect:true,GamepadList:true,NamedNodeMap:true,MozNamedAttrMap:true,SpeechRecognitionResultList:true,StyleSheetList:true,SVGLength:true,SVGLengthList:true,SVGNumber:true,SVGNumberList:true,SVGPointList:true,SVGScriptElement:true,SVGStringList:true,SVGAElement:true,SVGAnimateElement:true,SVGAnimateMotionElement:true,SVGAnimateTransformElement:true,SVGAnimationElement:true,SVGCircleElement:true,SVGClipPathElement:true,SVGDefsElement:true,SVGDescElement:true,SVGDiscardElement:true,SVGEllipseElement:true,SVGFEBlendElement:true,SVGFEColorMatrixElement:true,SVGFEComponentTransferElement:true,SVGFECompositeElement:true,SVGFEConvolveMatrixElement:true,SVGFEDiffuseLightingElement:true,SVGFEDisplacementMapElement:true,SVGFEDistantLightElement:true,SVGFEFloodElement:true,SVGFEFuncAElement:true,SVGFEFuncBElement:true,SVGFEFuncGElement:true,SVGFEFuncRElement:true,SVGFEGaussianBlurElement:true,SVGFEImageElement:true,SVGFEMergeElement:true,SVGFEMergeNodeElement:true,SVGFEMorphologyElement:true,SVGFEOffsetElement:true,SVGFEPointLightElement:true,SVGFESpecularLightingElement:true,SVGFESpotLightElement:true,SVGFETileElement:true,SVGFETurbulenceElement:true,SVGFilterElement:true,SVGForeignObjectElement:true,SVGGElement:true,SVGGeometryElement:true,SVGGraphicsElement:true,SVGImageElement:true,SVGLineElement:true,SVGLinearGradientElement:true,SVGMarkerElement:true,SVGMaskElement:true,SVGMetadataElement:true,SVGPathElement:true,SVGPatternElement:true,SVGPolygonElement:true,SVGPolylineElement:true,SVGRadialGradientElement:true,SVGRectElement:true,SVGSetElement:true,SVGStopElement:true,SVGStyleElement:true,SVGSVGElement:true,SVGSwitchElement:true,SVGSymbolElement:true,SVGTSpanElement:true,SVGTextContentElement:true,SVGTextElement:true,SVGTextPathElement:true,SVGTextPositioningElement:true,SVGTitleElement:true,SVGUseElement:true,SVGViewElement:true,SVGGradientElement:true,SVGComponentTransferFunctionElement:true,SVGFEDropShadowElement:true,SVGMPathElement:true,SVGElement:false,SVGTransform:true,SVGTransformList:true,AudioBuffer:true,AudioParamMap:true,AudioTrackList:true,AudioContext:true,webkitAudioContext:true,BaseAudioContext:false,OfflineAudioContext:true,WebGLBuffer:true,WebGLFramebuffer:true,WebGLProgram:true,WebGL2RenderingContext:true,WebGLShader:true,WebGLUniformLocation:true,SQLResultSetRowList:true})
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
if(typeof dartMainRunner==="function")dartMainRunner(Q.li,[])
else Q.li([])})})()
//# sourceMappingURL=test.dart.js.map
