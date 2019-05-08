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
function tearOffGetter(a,b,c,d,e){return e?new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+d+y+++"(receiver) {"+"if (c === null) c = "+"H.k9"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, true, name);"+"return new c(this, funcs[0], receiver, name);"+"}")(a,b,c,d,H,null):new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+d+y+++"() {"+"if (c === null) c = "+"H.k9"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, false, name);"+"return new c(this, funcs[0], null, name);"+"}")(a,b,c,d,H,null)}function tearOff(a,b,c,d,e,f){var u=null
return d?function(){if(u===null)u=H.k9(this,a,b,c,true,false,e).prototype
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
if(w[u][a])return w[u][a]}}var C={},H={jU:function jU(a){this.a=a},
fM:function(){return new P.bU("No element")},
lZ:function(){return new P.bU("Too many elements")},
lY:function(){return new P.bU("Too few elements")},
q:function q(a){this.a=a},
fp:function fp(){},
bO:function bO(){},
cl:function cl(a,b,c,d){var _=this
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
h2:function h2(a,b,c){this.a=a
this.b=b
this.$ti=c},
cI:function cI(a,b,c){this.a=a
this.b=b
this.$ti=c},
iM:function iM(a,b,c){this.a=a
this.b=b
this.$ti=c},
bK:function bK(){},
dZ:function dZ(){},
dY:function dY(){},
c5:function(a){var u,t
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
u=J.aH(a)
if(typeof u!=="string")throw H.h(H.bg(a))
return u},
me:function(a){var u,t,s
u=a.$reflectionInfo
if(u==null)return
u=J.fN(u)
t=u[0]
s=u[1]
return new H.hz(a,u,(t&2)===2,t>>2,s>>1,(s&1)===1,u[2])},
cs:function(a){var u=a.$identityHash
if(u==null){u=Math.random()*0x3fffffff|0
a.$identityHash=u}return u},
bR:function(a){return H.m5(a)+H.k6(H.bD(a),0,null)},
m5:function(a){var u,t,s,r,q,p,o,n,m
u=J.a0(a)
t=u.constructor
if(typeof t=="function"){s=t.name
r=typeof s==="string"?s:null}else r=null
q=r==null
if(q||u===C.M||!!u.$ibz){p=C.A(a)
if(q)r=p
if(p==="Object"){o=a.constructor
if(typeof o=="function"){n=String(o).match(/^\s*function\s*([\w$]*)\s*\(/)
m=n==null?null:n[1]
if(typeof m==="string"&&/^\w+$/.test(m))r=m}}return r}r=r
return H.c5(r.length>1&&C.j.aF(r,0)===36?C.j.b6(r,1):r)},
kH:function(a){var u,t,s,r,q
u=a.length
if(u<=500)return String.fromCharCode.apply(null,a)
for(t="",s=0;s<u;s=r){r=s+500
q=r<u?r:u
t+=String.fromCharCode.apply(null,a.slice(s,q))}return t},
md:function(a){var u,t,s,r
u=H.c([],[P.B])
for(t=a.length,s=0;s<a.length;a.length===t||(0,H.E)(a),++s){r=a[s]
if(typeof r!=="number"||Math.floor(r)!==r)throw H.h(H.bg(r))
if(r<=65535)C.a.h(u,r)
else if(r<=1114111){C.a.h(u,55296+(C.h.bb(r-65536,10)&1023))
C.a.h(u,56320+(r&1023))}else throw H.h(H.bg(r))}return H.kH(u)},
kI:function(a){var u,t,s
for(u=a.length,t=0;t<u;++t){s=a[t]
if(typeof s!=="number"||Math.floor(s)!==s)throw H.h(H.bg(s))
if(s<0)throw H.h(H.bg(s))
if(s>65535)return H.md(a)}return H.kH(a)},
jW:function(a){var u
if(a<=65535)return String.fromCharCode(a)
if(a<=1114111){u=a-65536
return String.fromCharCode((55296|C.h.bb(u,10))>>>0,56320|u&1023)}throw H.h(P.ax(a,0,1114111,null,null))},
bQ:function(a){if(a.date===void 0)a.date=new Date(a.a)
return a.date},
mc:function(a){var u=H.bQ(a).getFullYear()+0
return u},
ma:function(a){var u=H.bQ(a).getMonth()+1
return u},
m6:function(a){var u=H.bQ(a).getDate()+0
return u},
m7:function(a){var u=H.bQ(a).getHours()+0
return u},
m9:function(a){var u=H.bQ(a).getMinutes()+0
return u},
mb:function(a){var u=H.bQ(a).getSeconds()+0
return u},
m8:function(a){var u=H.bQ(a).getMilliseconds()+0
return u},
G:function(a){throw H.h(H.bg(a))},
j:function(a,b){if(a==null)J.bF(a)
throw H.h(H.c0(a,b))},
c0:function(a,b){var u,t
if(typeof b!=="number"||Math.floor(b)!==b)return new P.aI(!0,b,"index",null)
u=H.ad(J.bF(a))
if(!(b<0)){if(typeof u!=="number")return H.G(u)
t=b>=u}else t=!0
if(t)return P.V(b,a,"index",null,u)
return P.dG(b,"index",null)},
mL:function(a,b,c){if(a>c)return new P.bS(0,c,!0,a,"start","Invalid value")
if(b!=null)if(b<a||b>c)return new P.bS(a,c,!0,b,"end","Invalid value")
return new P.aI(!0,b,"end",null)},
bg:function(a){return new P.aI(!0,a,null,null)},
h:function(a){var u
if(a==null)a=new P.dB()
u=new Error()
u.dartException=a
if("defineProperty" in Object){Object.defineProperty(u,"message",{get:H.ll})
u.name=""}else u.toString=H.ll
return u},
ll:function(){return J.aH(this.dartException)},
r:function(a){throw H.h(a)},
E:function(a){throw H.h(P.br(a))},
b1:function(a){var u,t,s,r,q,p
a=a.replace(String({}),'$receiver$').replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
u=a.match(/\\\$[a-zA-Z]+\\\$/g)
if(u==null)u=H.c([],[P.f])
t=u.indexOf("\\$arguments\\$")
s=u.indexOf("\\$argumentsExpr\\$")
r=u.indexOf("\\$expr\\$")
q=u.indexOf("\\$method\\$")
p=u.indexOf("\\$receiver\\$")
return new H.ie(a.replace(new RegExp('\\\\\\$arguments\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$argumentsExpr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$expr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$method\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$receiver\\\\\\$','g'),'((?:x|[^x])*)'),t,s,r,q,p)},
ig:function(a){return function($expr$){var $argumentsExpr$='$arguments$'
try{$expr$.$method$($argumentsExpr$)}catch(u){return u.message}}(a)},
kR:function(a){return function($expr$){try{$expr$.$method$}catch(u){return u.message}}(a)},
kC:function(a,b){return new H.hp(a,b==null?null:b.method)},
jV:function(a,b){var u,t
u=b==null
t=u?null:b.method
return new H.fR(a,t,u?null:b.receiver)},
av:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g
u=new H.jK(a)
if(a==null)return
if(typeof a!=="object")return a
if("dartException" in a)return u.$1(a.dartException)
else if(!("message" in a))return a
t=a.message
if("number" in a&&typeof a.number=="number"){s=a.number
r=s&65535
if((C.h.bb(s,16)&8191)===10)switch(r){case 438:return u.$1(H.jV(H.l(t)+" (Error "+r+")",null))
case 445:case 5007:return u.$1(H.kC(H.l(t)+" (Error "+r+")",null))}}if(a instanceof TypeError){q=$.lo()
p=$.lp()
o=$.lq()
n=$.lr()
m=$.lu()
l=$.lv()
k=$.lt()
$.ls()
j=$.lx()
i=$.lw()
h=q.a9(t)
if(h!=null)return u.$1(H.jV(H.H(t),h))
else{h=p.a9(t)
if(h!=null){h.method="call"
return u.$1(H.jV(H.H(t),h))}else{h=o.a9(t)
if(h==null){h=n.a9(t)
if(h==null){h=m.a9(t)
if(h==null){h=l.a9(t)
if(h==null){h=k.a9(t)
if(h==null){h=n.a9(t)
if(h==null){h=j.a9(t)
if(h==null){h=i.a9(t)
g=h!=null}else g=!0}else g=!0}else g=!0}else g=!0}else g=!0}else g=!0}else g=!0
if(g)return u.$1(H.kC(H.H(t),h))}}return u.$1(new H.it(typeof t==="string"?t:""))}if(a instanceof RangeError){if(typeof t==="string"&&t.indexOf("call stack")!==-1)return new P.dL()
t=function(b){try{return String(b)}catch(f){}return null}(a)
return u.$1(new P.aI(!1,null,null,typeof t==="string"?t.replace(/^RangeError:\s*/,""):t))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof t==="string"&&t==="too much recursion")return new P.dL()
return a},
c3:function(a){var u
if(a==null)return new H.eC(a)
u=a.$cachedTrace
if(u!=null)return u
return a.$cachedTrace=new H.eC(a)},
mN:function(a,b){var u,t,s,r
u=a.length
for(t=0;t<u;t=r){s=t+1
r=s+1
b.Y(0,a[t],a[s])}return b},
mX:function(a,b,c,d,e,f){H.k(a,"$ibu")
switch(H.ad(b)){case 0:return a.$0()
case 1:return a.$1(c)
case 2:return a.$2(c,d)
case 3:return a.$3(c,d,e)
case 4:return a.$4(c,d,e,f)}throw H.h(P.t("Unsupported number of arguments for wrapped closure"))},
c_:function(a,b){var u
H.ad(b)
if(a==null)return
u=a.$identity
if(!!u)return u
u=function(c,d,e){return function(f,g,h,i){return e(c,d,f,g,h,i)}}(a,b,H.mX)
a.$identity=u
return u},
lQ:function(a,b,c,d,e,f,g){var u,t,s,r,q,p,o,n,m,l,k,j,i
u=b[0]
t=u.$callName
if(!!J.a0(d).$ib){u.$reflectionInfo=d
s=H.me(u).r}else s=d
r=e?Object.create(new H.hU().constructor.prototype):Object.create(new H.c9(null,null,null,null).constructor.prototype)
r.$initialize=r.constructor
if(e)q=function static_tear_off(){this.$initialize()}
else{p=$.aJ
if(typeof p!=="number")return p.p()
$.aJ=p+1
p=new Function("a,b,c,d"+p,"this.$initialize(a,b,c,d"+p+")")
q=p}r.constructor=q
q.prototype=r
if(!e){o=H.kr(a,u,f)
o.$reflectionInfo=d}else{r.$static_name=g
o=u}if(typeof s=="number")n=function(h,a0){return function(){return h(a0)}}(H.mR,s)
else if(typeof s=="function")if(e)n=s
else{m=f?H.kp:H.jO
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
lN:function(a,b,c,d){var u=H.jO
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,u)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,u)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,u)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,u)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,u)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,u)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,u)}},
kr:function(a,b,c){var u,t,s,r,q,p,o
if(c)return H.lP(a,b)
u=b.$stubName
t=b.length
s=a[u]
r=b==null?s==null:b===s
q=!r||t>=27
if(q)return H.lN(t,!r,u,b)
if(t===0){r=$.aJ
if(typeof r!=="number")return r.p()
$.aJ=r+1
p="self"+r
r="return function(){var "+p+" = this."
q=$.ca
if(q==null){q=H.f8("self")
$.ca=q}return new Function(r+H.l(q)+";return "+p+"."+H.l(u)+"();}")()}o="abcdefghijklmnopqrstuvwxyz".split("").splice(0,t).join(",")
r=$.aJ
if(typeof r!=="number")return r.p()
$.aJ=r+1
o+=r
r="return function("+o+"){return this."
q=$.ca
if(q==null){q=H.f8("self")
$.ca=q}return new Function(r+H.l(q)+"."+H.l(u)+"("+o+");}")()},
lO:function(a,b,c,d){var u,t
u=H.jO
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
lP:function(a,b){var u,t,s,r,q,p,o,n
u=$.ca
if(u==null){u=H.f8("self")
$.ca=u}t=$.ko
if(t==null){t=H.f8("receiver")
$.ko=t}s=b.$stubName
r=b.length
q=a[s]
p=b==null?q==null:b===q
o=!p||r>=28
if(o)return H.lO(r,!p,s,b)
if(r===1){u="return function(){return this."+H.l(u)+"."+H.l(s)+"(this."+H.l(t)+");"
t=$.aJ
if(typeof t!=="number")return t.p()
$.aJ=t+1
return new Function(u+t+"}")()}n="abcdefghijklmnopqrstuvwxyz".split("").splice(0,r-1).join(",")
u="return function("+n+"){return this."+H.l(u)+"."+H.l(s)+"(this."+H.l(t)+", "+n+");"
t=$.aJ
if(typeof t!=="number")return t.p()
$.aJ=t+1
return new Function(u+t+"}")()},
k9:function(a,b,c,d,e,f,g){return H.lQ(a,b,H.ad(c),d,!!e,!!f,g)},
jO:function(a){return a.a},
kp:function(a){return a.c},
f8:function(a){var u,t,s,r,q
u=new H.c9("self","target","receiver","name")
t=J.fN(Object.getOwnPropertyNames(u))
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
k7:function(a){if(a==null)return a
if(typeof a==="boolean")return a
throw H.h(H.aG(a,"bool"))},
ad:function(a){if(a==null)return a
if(typeof a==="number"&&Math.floor(a)===a)return a
throw H.h(H.aG(a,"int"))},
lj:function(a,b){throw H.h(H.aG(a,H.c5(H.H(b).substring(2))))},
n4:function(a,b){throw H.h(H.lM(a,H.c5(H.H(b).substring(2))))},
k:function(a,b){if(a==null)return a
if((typeof a==="object"||typeof a==="function")&&J.a0(a)[b])return a
H.lj(a,b)},
i:function(a,b){var u
if(a!=null)u=(typeof a==="object"||typeof a==="function")&&J.a0(a)[b]
else u=!0
if(u)return a
H.n4(a,b)},
kd:function(a){if(a==null)return a
if(!!J.a0(a).$ib)return a
throw H.h(H.aG(a,"List<dynamic>"))},
mZ:function(a,b){var u
if(a==null)return a
u=J.a0(a)
if(!!u.$ib)return a
if(u[b])return a
H.lj(a,b)},
ld:function(a){var u
if("$S" in a){u=a.$S
if(typeof u=="number")return v.types[H.ad(u)]
else return a.$S()}return},
eY:function(a,b){var u
if(a==null)return!1
if(typeof a=="function")return!0
u=H.ld(J.a0(a))
if(u==null)return!1
return H.l4(u,null,b,null)},
n:function(a,b){var u,t
if(a==null)return a
if($.k3)return a
$.k3=!0
try{if(H.eY(a,b))return a
u=H.jH(b)
t=H.aG(a,u)
throw H.h(t)}finally{$.k3=!1}},
ka:function(a,b){if(a!=null&&!H.k8(a,b))H.r(H.aG(a,H.jH(b)))
return a},
aG:function(a,b){return new H.ih("TypeError: "+P.ft(a)+": type '"+H.l8(a)+"' is not a subtype of type '"+b+"'")},
lM:function(a,b){return new H.f9("CastError: "+P.ft(a)+": type '"+H.l8(a)+"' is not a subtype of type '"+b+"'")},
l8:function(a){var u,t
u=J.a0(a)
if(!!u.$icb){t=H.ld(u)
if(t!=null)return H.jH(t)
return"Closure"}return H.bR(a)},
n9:function(a){throw H.h(new P.fh(H.H(a)))},
mh:function(a){return new H.hG(a)},
le:function(a){return v.getIsolateTag(a)},
c:function(a,b){a.$ti=b
return a},
bD:function(a){if(a==null)return
return a.$ti},
nS:function(a,b,c){return H.c4(a["$a"+H.l(c)],H.bD(b))},
c2:function(a,b,c,d){var u
H.H(c)
H.ad(d)
u=H.c4(a["$a"+H.l(c)],H.bD(b))
return u==null?null:u[d]},
ao:function(a,b,c){var u
H.H(b)
H.ad(c)
u=H.c4(a["$a"+H.l(b)],H.bD(a))
return u==null?null:u[c]},
x:function(a,b){var u
H.ad(b)
u=H.bD(a)
return u==null?null:u[b]},
jH:function(a){return H.bC(a,null)},
bC:function(a,b){var u,t
H.m(b,"$ib",[P.f],"$ab")
if(a==null)return"dynamic"
if(a===-1)return"void"
if(typeof a==="object"&&a!==null&&a.constructor===Array)return H.c5(a[0].name)+H.k6(a,1,b)
if(typeof a=="function")return H.c5(a.name)
if(a===-2)return"dynamic"
if(typeof a==="number"){H.ad(a)
if(b==null||a<0||a>=b.length)return"unexpected-generic-index:"+a
u=b.length
t=u-a-1
if(t<0||t>=u)return H.j(b,t)
return H.l(b[t])}if('func' in a)return H.mz(a,b)
if('futureOr' in a)return"FutureOr<"+H.bC("type" in a?a.type:null,b)+">"
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
if(l!=null&&l!==P.L)o+=" extends "+H.bC(l,b)}o+=">"}else{o=""
s=null}k=!!a.v?"void":H.bC(a.ret,b)
if("args" in a){j=a.args
for(u=j.length,i="",h="",g=0;g<u;++g,h=", "){f=j[g]
i=i+h+H.bC(f,b)}}else{i=""
h=""}if("opt" in a){e=a.opt
i+=h+"["
for(u=e.length,h="",g=0;g<u;++g,h=", "){f=e[g]
i=i+h+H.bC(f,b)}i+="]"}if("named" in a){d=a.named
i+=h+"{"
for(u=H.mM(d),m=u.length,h="",g=0;g<m;++g,h=", "){c=H.H(u[g])
i=i+h+H.bC(d[c],b)+(" "+H.l(c))}i+="}"}if(s!=null)b.length=s
return o+"("+i+") => "+k},
k6:function(a,b,c){var u,t,s,r,q,p
H.m(c,"$ib",[P.f],"$ab")
if(a==null)return""
u=new P.be("")
for(t=b,s="",r=!0,q="";t<a.length;++t,s=", "){u.a=q+s
p=a[t]
if(p!=null)r=!1
q=u.a+=H.bC(p,c)}return"<"+u.i(0)+">"},
c4:function(a,b){if(a==null)return b
a=a.apply(null,b)
if(a==null)return
if(typeof a==="object"&&a!==null&&a.constructor===Array)return a
if(typeof a=="function")return a.apply(null,b)
return b},
cX:function(a,b,c,d){var u,t
H.H(b)
H.kd(c)
H.H(d)
if(a==null)return!1
u=H.bD(a)
t=J.a0(a)
if(t[b]==null)return!1
return H.lb(H.c4(t[d],u),null,c,null)},
m:function(a,b,c,d){H.H(b)
H.kd(c)
H.H(d)
if(a==null)return a
if(H.cX(a,b,c,d))return a
throw H.h(H.aG(a,function(e,f){return e.replace(/[^<,> ]+/g,function(g){return f[g]||g})}(H.c5(b.substring(2))+H.k6(c,0,null),v.mangledGlobalNames)))},
lb:function(a,b,c,d){var u,t
if(c==null)return!0
if(a==null){u=c.length
for(t=0;t<u;++t)if(!H.aB(null,null,c[t],d))return!1
return!0}u=a.length
for(t=0;t<u;++t)if(!H.aB(a[t],b,c[t],d))return!1
return!0},
nP:function(a,b,c){return a.apply(b,H.c4(J.a0(b)["$a"+H.l(c)],H.bD(b)))},
lg:function(a){var u
if(typeof a==="number")return!1
if('futureOr' in a){u="type" in a?a.type:null
return a==null||a.name==="L"||a.name==="J"||a===-1||a===-2||H.lg(u)}return!1},
k8:function(a,b){var u,t
if(a==null)return b==null||b.name==="L"||b.name==="J"||b===-1||b===-2||H.lg(b)
if(b==null||b===-1||b.name==="L"||b===-2)return!0
if(typeof b=="object"){if('futureOr' in b)if(H.k8(a,"type" in b?b.type:null))return!0
if('func' in b)return H.eY(a,b)}u=J.a0(a).constructor
t=H.bD(a)
if(t!=null){t=t.slice()
t.splice(0,0,u)
u=t}return H.aB(u,null,b,null)},
D:function(a,b){if(a!=null&&!H.k8(a,b))throw H.h(H.aG(a,H.jH(b)))
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
if('func' in c)return H.l4(a,b,c,d)
if('func' in a)return c.name==="bu"
u=typeof a==="object"&&a!==null&&a.constructor===Array
t=u?a[0]:a
if('futureOr' in c){s="type" in c?c.type:null
if('futureOr' in a)return H.aB("type" in a?a.type:null,b,s,d)
else if(H.aB(a,b,s,d))return!0
else{if(!('$i'+"ci" in t.prototype))return!1
r=t.prototype["$a"+"ci"]
q=H.c4(r,u?a.slice(1):null)
return H.aB(typeof q==="object"&&q!==null&&q.constructor===Array?q[0]:null,b,s,d)}}p=typeof c==="object"&&c!==null&&c.constructor===Array
o=p?c[0]:c
if(o!==t){n=o.name
if(!('$i'+n in t.prototype))return!1
m=t.prototype["$a"+n]}else m=null
if(!p)return!0
u=u?a.slice(1):null
p=c.slice(1)
return H.lb(H.c4(m,u),b,p,d)},
l4:function(a,b,c,d){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g
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
u=H.H($.lf.$1(a))
t=$.jy[u]
if(t!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:t,enumerable:false,writable:true,configurable:true})
return t.i}s=$.jE[u]
if(s!=null)return s
r=v.interceptorsByTag[u]
if(r==null){u=H.H($.la.$2(a,u))
if(u!=null){t=$.jy[u]
if(t!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:t,enumerable:false,writable:true,configurable:true})
return t.i}s=$.jE[u]
if(s!=null)return s
r=v.interceptorsByTag[u]}}if(r==null)return
s=r.prototype
q=u[0]
if(q==="!"){t=H.jG(s)
$.jy[u]=t
Object.defineProperty(a,v.dispatchPropertyName,{value:t,enumerable:false,writable:true,configurable:true})
return t.i}if(q==="~"){$.jE[u]=s
return s}if(q==="-"){p=H.jG(s)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}if(q==="+")return H.li(a,s)
if(q==="*")throw H.h(P.kS(u))
if(v.leafTags[u]===true){p=H.jG(s)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}else return H.li(a,s)},
li:function(a,b){var u=Object.getPrototypeOf(a)
Object.defineProperty(u,v.dispatchPropertyName,{value:J.ke(b,u,null,null),enumerable:false,writable:true,configurable:true})
return b},
jG:function(a){return J.ke(a,!1,null,!!a.$iF)},
n0:function(a,b,c){var u=b.prototype
if(v.leafTags[a]===true)return H.jG(u)
else return J.ke(u,c,null,null)},
mV:function(){if(!0===$.kc)return
$.kc=!0
H.mW()},
mW:function(){var u,t,s,r,q,p,o,n
$.jy=Object.create(null)
$.jE=Object.create(null)
H.mU()
u=v.interceptorsByTag
t=Object.getOwnPropertyNames(u)
if(typeof window!="undefined"){window
s=function(){}
for(r=0;r<t.length;++r){q=t[r]
p=$.lk.$1(q)
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
u=H.bZ(C.N,H.bZ(C.S,H.bZ(C.z,H.bZ(C.z,H.bZ(C.R,H.bZ(C.O,H.bZ(C.P(C.A),u)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){t=dartNativeDispatchHooksTransformer
if(typeof t=="function")t=[t]
if(t.constructor==Array)for(s=0;s<t.length;++s){r=t[s]
if(typeof r=="function")u=r(u)||u}}q=u.getTag
p=u.getUnknownTag
o=u.prototypeForTag
$.lf=new H.jB(q)
$.la=new H.jC(p)
$.lk=new H.jD(o)},
bZ:function(a,b){return a(b)||b},
m0:function(a,b,c,d){var u,t,s,r
u=b?"m":""
t=c?"":"i"
s=d?"g":""
r=function(e,f){try{return new RegExp(e,f)}catch(q){return q}}(a,u+t+s)
if(r instanceof RegExp)return r
throw H.h(new P.fE("Illegal RegExp pattern ("+String(r)+")",a,null))},
n7:function(a,b,c){var u=a.indexOf(b,c)
return u>=0},
kg:function(a,b,c){var u,t,s
if(b==="")if(a==="")return c
else{u=a.length
for(t=c,s=0;s<u;++s)t=t+a[s]+c
return t.charCodeAt(0)==0?t:t}else return a.replace(new RegExp(b.replace(/[[\]{}()*+?.\\^$|]/g,"\\$&"),'g'),c.replace(/\$/g,"$$$$"))},
hz:function hz(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.x=null},
ie:function ie(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
hp:function hp(a,b){this.a=a
this.b=b},
fR:function fR(a,b,c){this.a=a
this.b=b
this.c=c},
it:function it(a){this.a=a},
jK:function jK(a){this.a=a},
eC:function eC(a){this.a=a
this.b=null},
cb:function cb(){},
i2:function i2(){},
hU:function hU(){},
c9:function c9(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
ih:function ih(a){this.a=a},
f9:function f9(a){this.a=a},
hG:function hG(a){this.a=a},
aQ:function aQ(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
fV:function fV(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
dn:function dn(a,b){this.a=a
this.$ti=b},
fW:function fW(a,b,c){var _=this
_.a=a
_.b=b
_.d=_.c=null
_.$ti=c},
jB:function jB(a){this.a=a},
jC:function jC(a){this.a=a},
jD:function jD(a){this.a=a},
fQ:function fQ(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
cU:function(a){return a},
bB:function(a,b,c){if(a>>>0!==a||a>=c)throw H.h(H.c0(b,a))},
my:function(a,b,c){var u
if(!(a>>>0!==a))u=b>>>0!==b||a>b||b>c
else u=!0
if(u)throw H.h(H.mL(a,b,c))
return b},
cp:function cp(){},
dx:function dx(){},
co:function co(){},
dy:function dy(){},
hg:function hg(){},
hh:function hh(){},
hi:function hi(){},
hj:function hj(){},
hk:function hk(){},
dz:function dz(){},
hl:function hl(){},
cM:function cM(){},
cN:function cN(){},
cO:function cO(){},
cP:function cP(){},
mM:function(a){return J.kw(a?Object.keys(a):[],null)},
n3:function(a){if(typeof dartPrint=="function"){dartPrint(a)
return}if(typeof console=="object"&&typeof console.log!="undefined"){console.log(a)
return}if(typeof window=="object")return
if(typeof print=="function"){print(a)
return}throw"Unable to print message: "+String(a)}},J={
ke:function(a,b,c,d){return{i:a,p:b,e:c,x:d}},
eZ:function(a){var u,t,s,r,q
u=a[v.dispatchPropertyName]
if(u==null)if($.kc==null){H.mV()
u=a[v.dispatchPropertyName]}if(u!=null){t=u.p
if(!1===t)return u.i
if(!0===t)return a
s=Object.getPrototypeOf(a)
if(t===s)return u.i
if(u.e===s)throw H.h(P.kS("Return interceptor for "+H.l(t(a,u))))}r=a.constructor
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
m_:function(a,b){if(typeof a!=="number"||Math.floor(a)!==a)throw H.h(P.jN(a,"length","is not an integer"))
if(a<0||a>4294967295)throw H.h(P.ax(a,0,4294967295,"length",null))
return J.kw(new Array(a),b)},
kw:function(a,b){return J.fN(H.c(a,[b]))},
fN:function(a){H.kd(a)
a.fixed$length=Array
return a},
a0:function(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.di.prototype
return J.fP.prototype}if(typeof a=="string")return J.b8.prototype
if(a==null)return J.dj.prototype
if(typeof a=="boolean")return J.fO.prototype
if(a.constructor==Array)return J.aC.prototype
if(typeof a!="object"){if(typeof a=="function")return J.b9.prototype
return a}if(a instanceof P.L)return a
return J.eZ(a)},
mO:function(a){if(typeof a=="number")return J.bv.prototype
if(typeof a=="string")return J.b8.prototype
if(a==null)return a
if(a.constructor==Array)return J.aC.prototype
if(typeof a!="object"){if(typeof a=="function")return J.b9.prototype
return a}if(a instanceof P.L)return a
return J.eZ(a)},
jz:function(a){if(typeof a=="string")return J.b8.prototype
if(a==null)return a
if(a.constructor==Array)return J.aC.prototype
if(typeof a!="object"){if(typeof a=="function")return J.b9.prototype
return a}if(a instanceof P.L)return a
return J.eZ(a)},
jA:function(a){if(a==null)return a
if(a.constructor==Array)return J.aC.prototype
if(typeof a!="object"){if(typeof a=="function")return J.b9.prototype
return a}if(a instanceof P.L)return a
return J.eZ(a)},
mP:function(a){if(typeof a=="number")return J.bv.prototype
if(a==null)return a
if(!(a instanceof P.L))return J.bz.prototype
return a},
mQ:function(a){if(typeof a=="number")return J.bv.prototype
if(typeof a=="string")return J.b8.prototype
if(a==null)return a
if(!(a instanceof P.L))return J.bz.prototype
return a},
kb:function(a){if(typeof a=="string")return J.b8.prototype
if(a==null)return a
if(!(a instanceof P.L))return J.bz.prototype
return a},
an:function(a){if(a==null)return a
if(typeof a!="object"){if(typeof a=="function")return J.b9.prototype
return a}if(a instanceof P.L)return a
return J.eZ(a)},
lD:function(a,b){if(typeof a=="number"&&typeof b=="number")return a+b
return J.mO(a).p(a,b)},
Y:function(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.a0(a).v(a,b)},
kk:function(a,b){if(typeof a=="number"&&typeof b=="number")return a*b
return J.mQ(a).u(a,b)},
lE:function(a,b){if(typeof a=="number"&&typeof b=="number")return a-b
return J.mP(a).q(a,b)},
lF:function(a,b){if(typeof b==="number")if(a.constructor==Array||typeof a=="string"||H.mY(a,a[v.dispatchPropertyName]))if(b>>>0===b&&b<a.length)return a[b]
return J.jz(a).j(a,b)},
f_:function(a,b){return J.an(a).hH(a,b)},
lG:function(a,b,c,d){return J.an(a).iG(a,b,c,d)},
kl:function(a,b){return J.an(a).C(a,b)},
jL:function(a,b){return J.jA(a).F(a,b)},
lH:function(a,b){return J.jA(a).O(a,b)},
lI:function(a){return J.an(a).giM(a)},
bE:function(a){return J.a0(a).gI(a)},
c7:function(a){return J.jA(a).gR(a)},
bF:function(a){return J.jz(a).gl(a)},
lJ:function(a){return J.an(a).gjR(a)},
jM:function(a,b){return J.an(a).aQ(a,b)},
km:function(a){return J.jA(a).jH(a)},
lK:function(a,b,c){return J.kb(a).b7(a,b,c)},
lL:function(a){return J.kb(a).jV(a)},
aH:function(a){return J.a0(a).i(a)},
a:function a(){},
fO:function fO(){},
dj:function dj(){},
dk:function dk(){},
ht:function ht(){},
bz:function bz(){},
b9:function b9(){},
aC:function aC(a){this.$ti=a},
jT:function jT(a){this.$ti=a},
ap:function ap(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=null
_.$ti=d},
bv:function bv(){},
di:function di(){},
fP:function fP(){},
b8:function b8(){}},P={
mn:function(){var u,t,s
u={}
if(self.scheduleImmediate!=null)return P.mG()
if(self.MutationObserver!=null&&self.document!=null){t=self.document.createElement("div")
s=self.document.createElement("span")
u.a=null
new self.MutationObserver(H.c_(new P.iO(u),1)).observe(t,{childList:true})
return new P.iN(u,t,s)}else if(self.setImmediate!=null)return P.mH()
return P.mI()},
mo:function(a){self.scheduleImmediate(H.c_(new P.iP(H.n(a,{func:1,ret:-1})),0))},
mp:function(a){self.setImmediate(H.c_(new P.iQ(H.n(a,{func:1,ret:-1})),0))},
mq:function(a){P.jZ(C.q,H.n(a,{func:1,ret:-1}))},
jZ:function(a,b){var u
H.n(b,{func:1,ret:-1})
u=C.h.a_(a.a,1000)
return P.mw(u<0?0:u,b)},
kQ:function(a,b){var u
H.n(b,{func:1,ret:-1,args:[P.b_]})
u=C.h.a_(a.a,1000)
return P.mx(u<0?0:u,b)},
mw:function(a,b){var u=new P.eI(!0)
u.f5(a,b)
return u},
mx:function(a,b){var u=new P.eI(!1)
u.f6(a,b)
return u},
mr:function(a,b){var u,t,s
b.a=1
try{a.ed(new P.iZ(b),new P.j_(b),null)}catch(s){u=H.av(s)
t=H.c3(s)
P.n5(new P.j0(b,u,t))}},
l_:function(a,b){var u,t
for(;u=a.a,u===2;)a=H.k(a.c,"$iaA")
if(u>=4){t=b.c2()
b.a=a.a
b.c=a.c
P.cL(b,t)}else{t=H.k(b.c,"$ib4")
b.a=2
b.c=a
a.da(t)}},
cL:function(a,b){var u,t,s,r,q,p,o,n,m,l,k,j,i,h
u={}
u.a=a
for(t=a;!0;){s={}
r=t.a===8
if(b==null){if(r){q=H.k(t.c,"$iae")
t=t.b
p=q.a
o=q.b
t.toString
P.jt(null,null,t,p,o)}return}for(;n=b.a,n!=null;b=n){b.a=null
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
if(k){H.k(m,"$iae")
t=t.b
p=m.a
o=m.b
t.toString
P.jt(null,null,t,p,o)
return}j=$.X
if(j!=l)$.X=l
else j=null
t=b.c
if(t===8)new P.j4(u,s,b,r).$0()
else if(p){if((t&1)!==0)new P.j3(s,b,m).$0()}else if((t&2)!==0)new P.j2(u,s,b).$0()
if(j!=null)$.X=j
t=s.b
if(!!J.a0(t).$ici){if(t.a>=4){i=H.k(o.c,"$ib4")
o.c=null
b=o.ba(i)
o.a=t.a
o.c=t.c
u.a=t
continue}else P.l_(t,o)
return}}h=b.b
i=H.k(h.c,"$ib4")
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
mC:function(a,b){if(H.eY(a,{func:1,args:[P.L,P.am]}))return H.n(a,{func:1,ret:null,args:[P.L,P.am]})
if(H.eY(a,{func:1,args:[P.L]}))return H.n(a,{func:1,ret:null,args:[P.L]})
throw H.h(P.jN(a,"onError","Error handler must accept one Object or one Object and a StackTrace as arguments, and return a a valid result"))},
mB:function(){var u,t
for(;u=$.bY,u!=null;){$.cW=null
t=u.b
$.bY=t
if(t==null)$.cV=null
u.a.$0()}},
mF:function(){$.k4=!0
try{P.mB()}finally{$.cW=null
$.k4=!1
if($.bY!=null)$.ki().$1(P.lc())}},
l7:function(a){var u=new P.e4(H.n(a,{func:1,ret:-1}))
if($.bY==null){$.cV=u
$.bY=u
if(!$.k4)$.ki().$1(P.lc())}else{$.cV.b=u
$.cV=u}},
mE:function(a){var u,t,s
H.n(a,{func:1,ret:-1})
u=$.bY
if(u==null){P.l7(a)
$.cW=$.cV
return}t=new P.e4(a)
s=$.cW
if(s==null){t.b=u
$.cW=t
$.bY=t}else{t.b=s.b
s.b=t
$.cW=t
if(t.b==null)$.cV=t}},
n5:function(a){var u,t
u={func:1,ret:-1}
H.n(a,u)
t=$.X
if(C.l===t){P.jv(null,null,C.l,a)
return}t.toString
P.jv(null,null,t,H.n(t.c9(a),u))},
kP:function(a,b){var u,t
u={func:1,ret:-1}
H.n(b,u)
t=$.X
if(t===C.l){t.toString
return P.jZ(a,b)}return P.jZ(a,H.n(t.c9(b),u))},
ml:function(a,b){var u,t,s
u={func:1,ret:-1,args:[P.b_]}
H.n(b,u)
t=$.X
if(t===C.l){t.toString
return P.kQ(a,b)}s=t.dm(b,P.b_)
$.X.toString
return P.kQ(a,H.n(s,u))},
jt:function(a,b,c,d,e){var u={}
u.a=d
P.mE(new P.ju(u,e))},
l5:function(a,b,c,d,e){var u,t
H.n(d,{func:1,ret:e})
t=$.X
if(t===c)return d.$0()
$.X=c
u=t
try{t=d.$0()
return t}finally{$.X=u}},
l6:function(a,b,c,d,e,f,g){var u,t
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
jv:function(a,b,c,d){var u
H.n(d,{func:1,ret:-1})
u=C.l!==c
if(u)d=!(!u||!1)?c.c9(d):c.iN(d,-1)
P.l7(d)},
iO:function iO(a){this.a=a},
iN:function iN(a,b,c){this.a=a
this.b=b
this.c=c},
iP:function iP(a){this.a=a},
iQ:function iQ(a){this.a=a},
eI:function eI(a){this.a=a
this.b=null
this.c=0},
jp:function jp(a,b){this.a=a
this.b=b},
jo:function jo(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
b4:function b4(a,b,c,d,e){var _=this
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
iY:function iY(a,b){this.a=a
this.b=b},
j1:function j1(a,b){this.a=a
this.b=b},
iZ:function iZ(a){this.a=a},
j_:function j_(a){this.a=a},
j0:function j0(a,b,c){this.a=a
this.b=b
this.c=c},
j4:function j4(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
j5:function j5(a){this.a=a},
j3:function j3(a,b,c){this.a=a
this.b=b
this.c=c},
j2:function j2(a,b,c){this.a=a
this.b=b
this.c=c},
e4:function e4(a){this.a=a
this.b=null},
hX:function hX(){},
hZ:function hZ(a,b){this.a=a
this.b=b},
i_:function i_(a,b){this.a=a
this.b=b},
cw:function cw(){},
hY:function hY(){},
b_:function b_(){},
ae:function ae(a,b){this.a=a
this.b=b},
js:function js(){},
ju:function ju(a,b){this.a=a
this.b=b},
jb:function jb(){},
jd:function jd(a,b,c){this.a=a
this.b=b
this.c=c},
jc:function jc(a,b){this.a=a
this.b=b},
je:function je(a,b,c){this.a=a
this.b=b
this.c=c},
kx:function(a,b){return new H.aQ([a,b])},
m1:function(a){return H.mN(a,new H.aQ([null,null]))},
dp:function(a,b,c,d){return new P.j9([d])},
k2:function(){var u=Object.create(null)
u["<non-identifier-key>"]=u
delete u["<non-identifier-key>"]
return u},
mv:function(a,b,c){var u=new P.ej(a,b,[c])
u.c=a.e
return u},
lX:function(a,b,c){var u,t
if(P.k5(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}u=H.c([],[P.f])
t=$.d_()
C.a.h(t,a)
try{P.mA(a,u)}finally{if(0>=t.length)return H.j(t,-1)
t.pop()}t=P.kN(b,H.mZ(u,"$ie"),", ")+c
return t.charCodeAt(0)==0?t:t},
jS:function(a,b,c){var u,t,s
if(P.k5(a))return b+"..."+c
u=new P.be(b)
t=$.d_()
C.a.h(t,a)
try{s=u
s.a=P.kN(s.a,a,", ")}finally{if(0>=t.length)return H.j(t,-1)
t.pop()}u.a+=c
t=u.a
return t.charCodeAt(0)==0?t:t},
k5:function(a){var u,t
for(u=0;t=$.d_(),u<t.length;++u)if(a===t[u])return!0
return!1},
mA:function(a,b){var u,t,s,r,q,p,o,n,m,l
H.m(b,"$ib",[P.f],"$ab")
u=a.gR(a)
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
u=P.dp(null,null,null,b)
for(t=a.length,s=0;s<a.length;a.length===t||(0,H.E)(a),++s)u.h(0,H.D(a[s],b))
return u},
kz:function(a){var u,t
u={}
if(P.k5(a))return"{...}"
t=new P.be("")
try{C.a.h($.d_(),a)
t.a+="{"
u.a=!0
J.lH(a,new P.h_(u,t))
t.a+="}"}finally{u=$.d_()
if(0>=u.length)return H.j(u,-1)
u.pop()}u=t.a
return u.charCodeAt(0)==0?u:u},
j9:function j9(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
bX:function bX(a){this.a=a
this.c=this.b=null},
ej:function ej(a,b,c){var _=this
_.a=a
_.b=b
_.d=_.c=null
_.$ti=c},
fX:function fX(){},
w:function w(){},
fZ:function fZ(){},
h_:function h_(a,b){this.a=a
this.b=b},
a6:function a6(){},
jg:function jg(){},
ek:function ek(){},
cc:function cc(){},
cd:function cd(){},
fr:function fr(){},
fK:function fK(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
fJ:function fJ(a){this.a=a},
iw:function iw(a){this.a=a},
ix:function ix(){},
jq:function jq(a){this.b=this.a=0
this.c=a},
lV:function(a){if(a instanceof H.cb)return a.i(0)
return"Instance of '"+H.bR(a)+"'"},
m2:function(a,b,c,d){var u,t
H.D(b,d)
u=J.m_(a,d)
if(a!==0&&!0)for(t=0;t<u.length;++t)C.a.Y(u,t,b)
return H.m(u,"$ib",[d],"$ab")},
m3:function(a,b,c){var u,t,s
u=[c]
t=H.c([],u)
for(s=a.gR(a);s.B();)C.a.h(t,H.D(s.gH(s),c))
if(b)return t
return H.m(J.fN(t),"$ib",u,"$ab")},
jY:function(a,b,c){var u,t
u=P.B
H.m(a,"$ie",[u],"$ae")
if(a.constructor===Array){H.m(a,"$iaC",[u],"$aaC")
t=a.length
c=P.jX(b,c,t,null,null,null)
return H.kI(b>0||c<t?C.a.eE(a,b,c):a)}return P.mj(a,b,c)},
mj:function(a,b,c){var u,t,s
H.m(a,"$ie",[P.B],"$ae")
u=J.c7(a)
for(t=0;t<b;++t)if(!u.B())throw H.h(P.ax(b,0,t,null,null))
s=[]
for(;u.B();)s.push(u.gH(u))
return H.kI(s)},
mf:function(a,b,c){return new H.fQ(a,H.m0(a,!1,!0,!1))},
kN:function(a,b,c){var u=J.c7(b)
if(!u.B())return a
if(c.length===0){do a+=H.l(u.gH(u))
while(u.B())}else{a+=H.l(u.gH(u))
for(;u.B();)a=a+c+H.l(u.gH(u))}return a},
l3:function(a,b,c,d){var u,t,s,r,q,p
H.m(a,"$ib",[P.B],"$ab")
if(c===C.x){u=$.lC().b
u=u.test(b)}else u=!1
if(u)return b
t=C.H.iW(H.D(b,H.ao(c,"cc",0)))
for(u=t.length,s=0,r="";s<u;++s){q=t[s]
if(q<128){p=q>>>4
if(p>=8)return H.j(a,p)
p=(a[p]&1<<(q&15))!==0}else p=!1
if(p)r+=H.jW(q)
else r=r+"%"+"0123456789ABCDEF"[q>>>4&15]+"0123456789ABCDEF"[q&15]}return r.charCodeAt(0)==0?r:r},
lR:function(a){var u,t
u=Math.abs(a)
t=a<0?"-":""
if(u>=1000)return""+a
if(u>=100)return t+"0"+u
if(u>=10)return t+"00"+u
return t+"000"+u},
lS:function(a){if(a>=100)return""+a
if(a>=10)return"0"+a
return"00"+a},
d9:function(a){if(a>=10)return""+a
return"0"+a},
kt:function(a,b,c,d,e,f){return new P.aM(864e8*a+36e8*b+6e7*e+1e6*f+1000*d+c)},
ft:function(a){if(typeof a==="number"||typeof a==="boolean"||null==a)return J.aH(a)
if(typeof a==="string")return JSON.stringify(a)
return P.lV(a)},
jN:function(a,b,c){return new P.aI(!0,a,b,c)},
dG:function(a,b,c){return new P.bS(null,null,!0,a,b,"Value not in range")},
ax:function(a,b,c,d,e){return new P.bS(b,c,!0,a,d,"Invalid value")},
jX:function(a,b,c,d,e,f){if(0>a||a>c)throw H.h(P.ax(a,0,c,"start",f))
if(b!=null){if(a>b||b>c)throw H.h(P.ax(b,a,c,"end",f))
return b}return c},
V:function(a,b,c,d,e){var u=H.ad(e==null?J.bF(b):e)
return new P.fL(b,u,!0,a,c,"Index out of range")},
au:function(a){return new P.iu(a)},
kS:function(a){return new P.is(a)},
kM:function(a){return new P.bU(a)},
br:function(a){return new P.fc(a)},
t:function(a){return new P.ec(a)},
kf:function(a){H.n3(a)},
M:function M(){},
ai:function ai(a,b){this.a=a
this.b=b},
z:function z(){},
aM:function aM(a){this.a=a},
fn:function fn(){},
fo:function fo(){},
bt:function bt(){},
dB:function dB(){},
aI:function aI(a,b,c,d){var _=this
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
fL:function fL(a,b,c,d,e,f){var _=this
_.e=a
_.f=b
_.a=c
_.b=d
_.c=e
_.d=f},
iu:function iu(a){this.a=a},
is:function is(a){this.a=a},
bU:function bU(a){this.a=a},
fc:function fc(a){this.a=a},
hs:function hs(){},
dL:function dL(){},
fh:function fh(a){this.a=a},
ec:function ec(a){this.a=a},
fE:function fE(a,b,c){this.a=a
this.b=b
this.c=c},
bu:function bu(){},
B:function B(){},
e:function e(){},
aP:function aP(){},
b:function b(){},
N:function N(){},
J:function J(){},
a3:function a3(){},
L:function L(){},
am:function am(){},
f:function f(){},
be:function be(a){this.a=a},
bh:function(a){var u,t,s,r,q
if(a==null)return
u=P.kx(P.f,null)
t=Object.getOwnPropertyNames(a)
for(s=t.length,r=0;r<t.length;t.length===s||(0,H.E)(t),++r){q=H.H(t[r])
u.Y(0,q,a[q])}return u},
mJ:function(a,b){var u={}
a.O(0,new P.jw(u))
return u},
jw:function jw(a){this.a=a},
fA:function fA(a,b){this.a=a
this.b=b},
fB:function fB(){},
fC:function fC(){},
j8:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
mu:function(a){a=536870911&a+((67108863&a)<<3)
a^=a>>>11
return 536870911&a+((16383&a)<<15)},
ja:function ja(){},
ab:function ab(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=e},
ba:function ba(){},
fT:function fT(){},
bd:function bd(){},
hq:function hq(){},
hx:function hx(){},
ct:function ct(){},
i0:function i0(){},
p:function p(){},
bf:function bf(){},
id:function id(){},
eh:function eh(){},
ei:function ei(){},
es:function es(){},
et:function et(){},
eE:function eE(){},
eF:function eF(){},
eL:function eL(){},
eM:function eM(){},
f3:function f3(){},
f4:function f4(){},
f5:function f5(a){this.a=a},
f6:function f6(){},
bG:function bG(){},
hr:function hr(){},
e5:function e5(){},
d3:function d3(){},
df:function df(){},
dE:function dE(){},
bT:function bT(){},
dI:function dI(){},
dX:function dX(){},
hT:function hT(){},
eA:function eA(){},
eB:function eB(){}},W={
kn:function(a){var u=document.createElement("a")
return u},
kq:function(a,b){var u=document.createElement("canvas")
return u},
lT:function(a,b,c){var u,t
u=document.body
t=(u&&C.n).a8(u,a,b,c)
t.toString
u=W.C
u=new H.cI(new W.ah(t),H.n(new W.fq(),{func:1,ret:P.M,args:[u]}),[u])
return H.k(u.gaB(u),"$iT")},
lU:function(a){H.k(a,"$id")
return"wheel"},
ch:function(a){var u,t,s
u="element tag unavailable"
try{t=J.lJ(a)
if(typeof t==="string")u=a.tagName}catch(s){H.av(s)}return u},
j7:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
l1:function(a,b,c,d){var u,t
u=W.j7(W.j7(W.j7(W.j7(0,a),b),c),d)
t=536870911&u+((67108863&u)<<3)
t^=t>>>11
return 536870911&t+((16383&t)<<15)},
ac:function(a,b,c,d,e){var u=W.l9(new W.iX(c),W.o)
if(u!=null&&!0)J.lG(a,b,u,!1)
return new W.iW(a,b,u,!1,[e])},
l0:function(a){var u,t
u=W.kn(null)
t=window.location
u=new W.bA(new W.jf(u,t))
u.eT(a)
return u},
ms:function(a,b,c,d){H.k(a,"$iT")
H.H(b)
H.H(c)
H.k(d,"$ibA")
return!0},
mt:function(a,b,c,d){var u,t,s
H.k(a,"$iT")
H.H(b)
H.H(c)
u=H.k(d,"$ibA").a
t=u.a
t.href=c
s=t.hostname
u=u.b
if(!(s==u.hostname&&t.port==u.port&&t.protocol==u.protocol))if(s==="")if(t.port===""){u=t.protocol
u=u===":"||u===""}else u=!1
else u=!1
else u=!0
return u},
l2:function(){var u,t,s,r,q
u=P.f
t=P.ky(C.t,u)
s=H.x(C.t,0)
r=H.n(new W.jn(),{func:1,ret:u,args:[s]})
q=H.c(["TEMPLATE"],[u])
t=new W.jm(t,P.dp(null,null,null,u),P.dp(null,null,null,u),P.dp(null,null,null,u),null)
t.f4(null,new H.h2(C.t,r,[s,u]),q,null)
return t},
l9:function(a,b){var u
H.n(a,{func:1,ret:-1,args:[b]})
u=$.X
if(u===C.l)return a
return u.dm(a,b)},
u:function u(){},
f0:function f0(){},
d0:function d0(){},
f1:function f1(){},
c8:function c8(){},
d2:function d2(){},
bo:function bo(){},
bH:function bH(){},
bp:function bp(){},
ce:function ce(){},
fd:function fd(){},
S:function S(){},
cf:function cf(){},
fe:function fe(){},
aK:function aK(){},
aL:function aL(){},
ff:function ff(){},
fg:function fg(){},
fj:function fj(){},
aw:function aw(){},
cg:function cg(){},
fk:function fk(){},
da:function da(){},
db:function db(){},
dc:function dc(){},
fl:function fl(){},
fm:function fm(){},
iS:function iS(a,b){this.a=a
this.b=b},
T:function T(){},
fq:function fq(){},
o:function o(){},
d:function d(){},
aN:function aN(){},
fy:function fy(){},
fz:function fz(){},
fD:function fD(){},
aO:function aO(){},
dg:function dg(){},
fI:function fI(){},
bL:function bL(){},
dh:function dh(){},
aR:function aR(){},
dq:function dq(){},
h9:function h9(){},
ha:function ha(){},
hb:function hb(a){this.a=a},
hc:function hc(){},
hd:function hd(a){this.a=a},
aU:function aU(){},
he:function he(){},
a7:function a7(){},
ah:function ah(a){this.a=a},
C:function C(){},
cq:function cq(){},
aV:function aV(){},
hv:function hv(){},
dF:function dF(){},
hE:function hE(){},
hF:function hF(a){this.a=a},
hH:function hH(){},
aW:function aW(){},
hR:function hR(){},
aX:function aX(){},
hS:function hS(){},
aY:function aY(){},
hV:function hV(){},
hW:function hW(a){this.a=a},
aD:function aD(){},
bV:function bV(){},
dM:function dM(){},
dN:function dN(){},
i1:function i1(){},
cx:function cx(){},
aZ:function aZ(){},
aE:function aE(){},
i3:function i3(){},
i4:function i4(){},
i7:function i7(){},
b0:function b0(){},
aF:function aF(){},
ib:function ib(){},
ic:function ic(){},
by:function by(){},
iv:function iv(){},
iK:function iK(){},
b3:function b3(){},
cJ:function cJ(){},
cK:function cK(){},
iT:function iT(){},
e7:function e7(){},
j6:function j6(){},
ep:function ep(){},
jj:function jj(){},
jk:function jk(){},
iR:function iR(){},
iU:function iU(a){this.a=a},
iV:function iV(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
k1:function k1(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
iW:function iW(a,b,c,d,e){var _=this
_.a=0
_.b=a
_.c=b
_.d=c
_.e=d
_.$ti=e},
iX:function iX(a){this.a=a},
bA:function bA(a){this.a=a},
A:function A(){},
dA:function dA(a){this.a=a},
hn:function hn(a){this.a=a},
hm:function hm(a,b,c){this.a=a
this.b=b
this.c=c},
ex:function ex(){},
jh:function jh(){},
ji:function ji(){},
jm:function jm(a,b,c,d,e){var _=this
_.e=a
_.a=b
_.b=c
_.c=d
_.d=e},
jn:function jn(){},
jl:function jl(){},
de:function de(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=null
_.$ti=d},
as:function as(){},
jf:function jf(a,b){this.a=a
this.b=b},
eN:function eN(a){this.a=a},
jr:function jr(a){this.a=a},
e6:function e6(){},
e8:function e8(){},
e9:function e9(){},
ea:function ea(){},
eb:function eb(){},
ed:function ed(){},
ee:function ee(){},
ef:function ef(){},
eg:function eg(){},
el:function el(){},
em:function em(){},
en:function en(){},
eo:function eo(){},
eq:function eq(){},
er:function er(){},
eu:function eu(){},
ev:function ev(){},
ew:function ew(){},
cQ:function cQ(){},
cR:function cR(){},
ey:function ey(){},
ez:function ez(){},
eD:function eD(){},
eG:function eG(){},
eH:function eH(){},
cS:function cS(){},
cT:function cT(){},
eJ:function eJ(){},
eK:function eK(){},
eO:function eO(){},
eP:function eP(){},
eQ:function eQ(){},
eR:function eR(){},
eS:function eS(){},
eT:function eT(){},
eU:function eU(){},
eV:function eV(){},
eW:function eW(){},
eX:function eX(){}},O={
jP:function(a){var u=new O.a2([a])
u.bH(a)
return u},
a2:function a2(a){var _=this
_.d=_.c=_.b=_.a=null
_.$ti=a},
cm:function cm(){this.b=this.a=null},
dt:function dt(){var _=this
_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
h4:function h4(a,b){var _=this
_.f=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
du:function du(){},
h5:function h5(a,b){var _=this
_.a=a
_.b=b
_.e=_.d=_.c=null},
aS:function aS(a,b){var _=this
_.f=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
h7:function h7(a,b){var _=this
_.f=_.ch=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
h8:function h8(a,b){var _=this
_.f=_.ch=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
bW:function bW(){}},E={
mg:function(a,b){var u=new E.hA(a,b)
u.eN(a,b)
return u},
mk:function(a,b,c,d,e){var u,t,s,r
u=J.a0(a)
if(!!u.$ibH)return E.kO(a,!0,!0,!0,!1)
t=W.kq(null,null)
s=t.style
s.width="100%"
s.height="100%"
u.gdr(a).h(0,t)
r=E.kO(t,!0,!0,!0,!1)
r.a=a
return r},
kO:function(a,b,c,d,e){var u,t,s,r,q,p,o,n,m,l,k
u=new E.dT()
t=H.k(C.p.ep(a,"webgl2",P.m1(["alpha",!0,"depth",!0,"stencil",!1,"antialias",!0])),"$ibT")
if(t==null)H.r(P.t("Failed to get the rendering context for WebGL."))
u.b=a
u.a=a
u.c=t
u.e=E.mg(t,a)
s=new T.i5(t)
s.b=H.ad((t&&C.b).cF(t,3379))
s.c=H.ad(C.b.cF(t,34076))
s.d=0
s.e=0
u.f=s
s=new X.e_(a)
r=new X.fS()
r.c=new X.ar(!1,!1,!1)
r.shE(P.dp(null,null,null,P.B))
s.b=r
r=new X.hf(s)
r.f=0
r.r=V.bx()
r.x=V.bx()
r.Q=1
r.ch=1
s.c=r
r=new X.fY(s)
r.r=0
r.x=V.bx()
r.Q=1
r.ch=1
r.cx=1
r.cy=1
s.d=r
r=new X.ia(s)
r.e=0
r.f=V.bx()
r.r=V.bx()
s.e=r
s.f=!1
s.r=!1
s.x=!1
s.y=null
s.sfp(H.c([],[[P.cw,P.L]]))
r=s.z
q=document
p=W.a7
o={func:1,ret:-1,args:[p]};(r&&C.a).h(r,W.ac(q,"contextmenu",H.n(s.gh2(),o),!1,p))
r=s.z
n=W.o
m={func:1,ret:-1,args:[n]};(r&&C.a).h(r,W.ac(a,"focus",H.n(s.gh8(),m),!1,n))
r=s.z;(r&&C.a).h(r,W.ac(a,"blur",H.n(s.gfV(),m),!1,n))
r=s.z
l=W.aR
k={func:1,ret:-1,args:[l]};(r&&C.a).h(r,W.ac(q,"keyup",H.n(s.ghc(),k),!1,l))
r=s.z;(r&&C.a).h(r,W.ac(q,"keydown",H.n(s.gha(),k),!1,l))
l=s.z;(l&&C.a).h(l,W.ac(a,"mousedown",H.n(s.ghg(),o),!1,p))
l=s.z;(l&&C.a).h(l,W.ac(a,"mouseup",H.n(s.ghk(),o),!1,p))
l=s.z;(l&&C.a).h(l,W.ac(a,"mousemove",H.n(s.ghi(),o),!1,p))
l=s.z
k=W.b3;(l&&C.a).h(l,W.ac(a,H.H(W.lU(a)),H.n(s.ghm(),{func:1,ret:-1,args:[k]}),!1,k))
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
f7:function f7(){},
aj:function aj(){var _=this
_.fx=_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
hA:function hA(a,b){var _=this
_.a=a
_.b=b
_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=null},
hB:function hB(a){this.a=a},
hC:function hC(a){this.a=a},
hD:function hD(a){this.a=a},
dT:function dT(){var _=this
_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
i6:function i6(a){this.a=a}},Z={
mm:function(a,b,c){var u
H.m(c,"$ib",[P.B],"$ab")
u=a.createBuffer()
C.b.al(a,b,u)
C.b.dq(a,b,new Int16Array(H.cU(c)),35044)
C.b.al(a,b,null)
return new Z.e3(b,u)},
az:function(a){return new Z.b2(a)},
e3:function e3(a,b){this.a=a
this.b=b},
d4:function d4(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
iL:function iL(a){this.a=a},
d5:function d5(a,b,c){var _=this
_.a=a
_.b=null
_.c=b
_.d=c},
ck:function ck(a,b,c){this.a=a
this.b=b
this.c=c},
b2:function b2(a){this.a=a}},D={
Q:function(){var u=new D.bJ()
u.sab(null)
u.saU(null)
u.c=null
u.d=0
return u},
fa:function fa(){},
bJ:function bJ(){var _=this
_.d=_.c=_.b=_.a=null},
fu:function fu(a){this.a=a},
fv:function fv(a){this.a=a},
y:function y(a){this.a=a
this.b=null},
bM:function bM(a,b,c,d){var _=this
_.c=a
_.d=b
_.a=c
_.b=null
_.$ti=d},
bN:function bN(a,b,c,d){var _=this
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
bs:function bs(){var _=this
_.d=_.c=_.b=_.a=null},
a4:function a4(){},
dm:function dm(){var _=this
_.d=_.c=_.b=_.a=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=null},
dD:function dD(){},
dK:function dK(){},
dQ:function dQ(){},
dR:function dR(){},
dS:function dS(){}},X={d6:function d6(a,b){this.a=a
this.b=b},dl:function dl(a,b){this.a=a
this.b=b},fS:function fS(){var _=this
_.d=_.c=_.b=_.a=null},dr:function dr(a,b,c,d,e,f){var _=this
_.x=a
_.y=b
_.c=c
_.d=d
_.e=e
_.a=f
_.b=null},fY:function fY(a){var _=this
_.a=a
_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},ar:function ar(a,b,c){this.a=a
this.b=b
this.c=c},bb:function bb(a,b,c,d,e,f,g,h,i){var _=this
_.x=a
_.y=b
_.z=c
_.Q=d
_.ch=e
_.c=f
_.d=g
_.e=h
_.a=i
_.b=null},hf:function hf(a){var _=this
_.a=a
_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},cn:function cn(a,b,c,d,e){var _=this
_.x=a
_.c=b
_.d=c
_.e=d
_.a=e
_.b=null},hw:function hw(){},dV:function dV(a,b,c,d,e,f,g,h,i){var _=this
_.x=a
_.y=b
_.z=c
_.Q=d
_.ch=e
_.c=f
_.d=g
_.e=h
_.a=i
_.b=null},ia:function ia(a){var _=this
_.a=a
_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},e_:function e_(a){var _=this
_.a=a
_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},
lW:function(a,b,c,d,e,f,g){var u,t
u=new X.fF()
t=new V.b6(0,0,0,1)
u.a=t
u.b=!0
u.c=e
u.d=!0
u.e=g
u.f=!1
t=$.kK
if(t==null){t=V.kJ(0,0,1,1)
$.kK=t}u.r=t
return u},
d7:function d7(){},
fF:function fF(){var _=this
_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
dC:function dC(){var _=this
_.f=_.e=_.d=_.c=_.b=_.a=null},
dO:function dO(){}},V={
nb:function(a,b,c){var u
if(c<=b)return b
u=c-b
a=C.d.ew(a-b,u)
return(a<0?a+u:a)+b},
a_:function(a,b,c){if(a==null)return C.j.ax("null",c)
return C.j.ax(C.d.ee(Math.abs(a-0)<$.P().a?0:a,b),c+b+1)},
c1:function(a,b,c){var u,t,s,r,q,p
H.m(a,"$ib",[P.z],"$ab")
u=H.c([],[P.f])
for(t=a.length,s=0,r=0;r<a.length;a.length===t||(0,H.E)(a),++r){q=V.a_(a[r],b,c)
s=Math.max(s,q.length)
C.a.h(u,q)}for(p=u.length-1;p>=0;--p){if(p>=u.length)return H.j(u,p)
C.a.Y(u,p,C.j.ax(u[p],s))}return u},
dw:function(){var u=$.kB
if(u==null){u=V.aT(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1)
$.kB=u}return u},
aT:function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){return new V.ak(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p)},
kA:function(a,b,c){var u,t,s,r,q,p,o,n
u=c.A(0,Math.sqrt(c.E(c)))
t=b.au(u)
s=t.A(0,Math.sqrt(t.E(t)))
r=u.au(s)
q=new V.U(a.a,a.b,a.c)
p=s.P(0).E(q)
o=r.P(0).E(q)
n=u.P(0).E(q)
return V.aT(s.a,r.a,u.a,p,s.b,r.b,u.b,o,s.c,r.c,u.c,n,0,0,0,1)},
bx:function(){var u=$.kF
if(u==null){u=new V.a9(0,0)
$.kF=u}return u},
kG:function(){var u=$.cr
if(u==null){u=new V.aa(0,0,0)
$.cr=u}return u},
kJ:function(a,b,c,d){if(c<0){a+=c
c=-c}if(d<0){b+=d
d=-d}return new V.dH(a,b,c,d)},
cH:function(){var u=$.kX
if(u==null){u=new V.U(0,0,0)
$.kX=u}return u},
kY:function(){var u=$.kW
if(u==null){u=new V.U(0,1,0)
$.kW=u}return u},
kZ:function(){var u=$.iy
if(u==null){u=new V.U(0,0,1)
$.iy=u}return u},
a1:function a1(a,b,c){this.a=a
this.b=b
this.c=c},
b6:function b6(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
fs:function fs(a){this.a=a},
dv:function dv(a,b,c,d,e,f,g,h,i){var _=this
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
dH:function dH(a,b,c,d){var _=this
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
s=new V.hy()
if(u>t){r=t
t=u
u=r}s.a=u
s.b=t
return s},
v:function(a){var u=new V.hI()
u.eO(a)
return u},
i9:function(){var u,t
u=new V.i8()
t=P.f
u.si2(new H.aQ([t,V.cv]))
u.si4(new H.aQ([t,V.cy]))
u.c=null
return u},
b5:function b5(){},
aq:function aq(){},
ds:function ds(){},
al:function al(){this.a=null},
hy:function hy(){this.b=this.a=null},
hI:function hI(){this.a=null},
cv:function cv(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
dU:function dU(a,b,c){this.a=a
this.b=b
this.c=c},
cy:function cy(a,b){this.a=a
this.b=b
this.c=null},
i8:function i8(){this.c=this.b=this.a=null},
cz:function cz(a){this.b=a
this.a=this.c=null},
n6:function(a){P.ml(C.J,new V.jI(a))},
mi:function(a,b){var u=new V.hM()
u.eQ(a,!0)
return u},
bq:function bq(){},
jI:function jI(a){this.a=a},
fi:function fi(a){var _=this
_.a=a
_.d=_.c=_.b=null},
fG:function fG(a){var _=this
_.a=a
_.d=_.c=_.b=null},
fH:function fH(a){var _=this
_.a=a
_.d=_.c=_.b=null},
hu:function hu(a){var _=this
_.a=a
_.d=_.c=_.b=null},
hM:function hM(){this.b=this.a=null},
hO:function hO(a){this.a=a},
hN:function hN(a){this.a=a},
hP:function hP(a){this.a=a}},U={
jQ:function(){var u=new U.fb()
u.a=!0
u.b=1e12
u.c=-1e12
u.d=0
u.e=100
u.f=0
u.x=0
u.r=0
return u},
ks:function(a){var u=new U.d8()
u.a=a
return u},
fb:function fb(){var _=this
_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
d8:function d8(){this.b=this.a=null},
cj:function cj(){var _=this
_.d=_.c=_.b=_.a=_.r=_.f=_.e=null},
a8:function a8(){},
e0:function e0(){var _=this
_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
e1:function e1(){var _=this
_.fx=_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
e2:function e2(){var _=this
_.r=_.f=_.e=_.d=_.c=_.b=_.a=null}},M={dd:function dd(){var _=this
_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null}},A={
m4:function(a,b){var u,t
u=a.ae
t=new A.h3(b,u)
t.eP(b,u)
t.eM(a,b)
return t},
k_:function(a,b,c,d,e){var u=new A.ij(a,b,c,e)
u.f=d
u.sih(P.m2(d,0,!1,P.B))
return u},
d1:function d1(a,b,c){this.a=a
this.b=b
this.c=c},
f2:function f2(a){this.a=a},
h3:function h3(a,b){var _=this
_.bh=_.dC=_.bg=_.ae=_.am=_.y2=_.y1=_.x2=_.x1=_.ry=_.rx=_.r2=_.r1=_.k4=_.k3=_.k2=_.k1=_.id=_.go=_.fy=_.fx=_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=null
_.dS=_.cj=_.dR=_.bu=_.dQ=_.dP=_.bt=_.bs=_.dO=_.dN=_.br=_.bq=_.bp=_.dM=_.dL=_.bo=_.dK=_.dJ=_.bn=_.dI=_.dH=_.bm=_.bl=_.dG=_.dF=_.bk=_.bj=_.dE=_.dD=_.bi=null
_.co=_.dW=_.cn=_.dV=_.cm=_.dU=_.cl=_.dT=_.ck=null
_.a=a
_.b=b
_.y=_.x=_.r=_.f=_.e=_.d=_.c=null},
h6:function h6(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5){var _=this
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
cA:function cA(a,b,c){this.a=a
this.b=b
this.c=c},
cE:function cE(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.x=h},
cC:function cC(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},
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
cD:function cD(a,b,c,d,e,f,g,h,i,j){var _=this
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
cG:function cG(a,b,c,d,e,f,g,h,i,j,k,l,m,n){var _=this
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
cu:function cu(){},
bI:function bI(a,b){this.a=a
this.b=b},
dW:function dW(){},
iq:function iq(a){this.a=a},
K:function K(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
il:function il(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
im:function im(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
ip:function ip(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
ij:function ij(a,b,c,d){var _=this
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
ik:function ik(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
I:function I(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
io:function io(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
ir:function ir(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
cB:function cB(a,b,c,d){var _=this
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
na:function(a,b,c,d){return F.mK(c,a,d,b,new F.jJ())},
mK:function(a,b,c,d,e){var u=F.n8(a,b,new F.jx(H.n(e,{func:1,ret:V.aa,args:[P.z]}),d,b,c),null)
if(u==null)return
u.aK()
u.jr(new F.iE(),new F.ho())
return u},
n8:function(a,b,c,d){var u,t,s,r,q,p,o,n,m,l,k,j,i,h
H.n(c,{func:1,ret:-1,args:[F.ay,P.z,P.z]})
if(a<1)return
if(b<1)return
u=new F.dJ()
t=new F.iz(u)
t.b=!1
s=[F.ay]
t.sii(H.c([],s))
u.a=t
t=new F.hL(u)
t.sc0(H.c([],[F.bP]))
u.b=t
t=new F.hK(u)
t.sfC(H.c([],[F.bw]))
u.c=t
t=new F.hJ(u)
t.sfq(H.c([],[F.a5]))
u.d=t
u.e=null
r=H.c([],s)
for(q=0;q<=b;++q){p=q/b
t=u.a
if(p<0)s=0
else s=p>1?1:p
t.toString
o=F.k0(null,null,new V.b6(s,0,0,1),null,null,new V.a9(p,1),null,null,0)
t.h(0,o)
c.$3(o,p,0)
C.a.h(r,o.dv(d))}for(q=1;q<=a;++q){n=q/a
for(t=n>1,s=n<0,m=1-n,l=0;l<=b;++l){p=l/b
k=u.a
if(p<0)j=0
else j=p>1?1:p
if(s)i=0
else i=t?1:n
if(s)h=0
else h=t?1:n
k.toString
o=F.k0(null,null,new V.b6(j,i,h,1),null,null,new V.a9(p,m),null,null,0)
k.h(0,o)
c.$3(o,p,n)
C.a.h(r,o.dv(d))}}u.d.iH(a+1,b+1,r)
return u},
fw:function(a,b,c){var u,t
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
k0:function(a,b,c,d,e,f,g,h,i){var u,t,s
u=new F.ay()
t=new F.iH(u)
t.sc0(H.c([],[F.bP]))
u.b=t
t=new F.iD(u)
s=[F.bw]
t.sfD(H.c([],s))
t.sfE(H.c([],s))
u.c=t
t=new F.iA(u)
s=[F.a5]
t.sfs(H.c([],s))
t.sft(H.c([],s))
t.sfu(H.c([],s))
u.d=t
h=$.ly()
u.e=0
t=$.bl()
s=h.a
u.f=(s&t.a)!==0?d:null
u.r=(s&$.bk().a)!==0?e:null
u.x=(s&$.bj().a)!==0?b:null
u.y=(s&$.bm().a)!==0?f:null
u.z=(s&$.bn().a)!==0?g:null
u.Q=(s&$.lz().a)!==0?c:null
u.ch=(s&$.c6().a)!==0?i:0
u.cx=(s&$.bi().a)!==0?a:null
return u},
jJ:function jJ(){},
jx:function jx(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
a5:function a5(){var _=this
_.e=_.d=_.c=_.b=_.a=null},
fx:function fx(){},
hQ:function hQ(){},
bw:function bw(){},
fU:function fU(){},
ii:function ii(){},
bP:function bP(){},
dJ:function dJ(){var _=this
_.e=_.d=_.c=_.b=_.a=null},
hJ:function hJ(a){this.a=a
this.b=null},
hK:function hK(a){this.a=a
this.b=null},
hL:function hL(a){this.a=a
this.b=null},
ay:function ay(){var _=this
_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
iJ:function iJ(a){this.a=a},
iI:function iI(a){this.a=a},
iz:function iz(a){this.a=a
this.c=this.b=null},
iA:function iA(a){var _=this
_.a=a
_.d=_.c=_.b=null},
iB:function iB(a,b){this.a=a
this.b=b},
iC:function iC(a,b){this.a=a
this.b=b},
iD:function iD(a){this.a=a
this.c=this.b=null},
iF:function iF(){},
iE:function iE(){},
iG:function iG(){},
ho:function ho(){},
iH:function iH(a){this.a=a
this.b=null}},T={dP:function dP(){},i5:function i5(a){var _=this
_.a=a
_.e=_.d=_.c=_.b=null}},Q={
lh:function(){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
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
p.sfg(0,O.jP(s))
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
o=new O.dt()
o.sfd(O.jP(V.ak))
o.e.b4(o.gfR(),o.gfT())
n=new O.aS(o,"emission")
n.c=C.c
n.f=new V.a1(0,0,0)
o.f=n
n=new O.aS(o,"ambient")
n.c=C.c
n.f=new V.a1(0,0,0)
o.r=n
n=new O.aS(o,"diffuse")
n.c=C.c
n.f=new V.a1(0,0,0)
o.x=n
n=new O.aS(o,"invDiffuse")
n.c=C.c
n.f=new V.a1(0,0,0)
o.y=n
n=new O.h8(o,"specular")
n.c=C.c
n.f=new V.a1(0,0,0)
n.ch=100
o.z=n
n=new O.h5(o,"bump")
n.c=C.c
o.Q=n
o.ch=null
n=new O.aS(o,"reflect")
n.c=C.c
n.f=new V.a1(0,0,0)
o.cx=n
n=new O.h7(o,"refract")
n.c=C.c
n.f=new V.a1(0,0,0)
n.ch=1
o.cy=n
n=new O.h4(o,"alpha")
n.c=C.c
n.f=1
o.db=n
n=new D.dm()
n.bH(D.a4)
n.sfm(H.c([],[D.bs]))
n.shD(H.c([],[D.dD]))
n.si1(H.c([],[D.dK]))
n.sic(H.c([],[D.dQ]))
n.sie(H.c([],[D.dR]))
n.sig(H.c([],[D.dS]))
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
l=V.kY()
m=U.ks(V.kA(V.kG(),l,new V.U(-1,-1,-1)))
k=new V.a1(1,1,1)
j=new D.bs()
j.c=new V.a1(1,1,1)
j.a=V.kZ()
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
h=new U.cj()
h.bH(U.a8)
h.b4(h.gfN(),h.ght())
h.e=null
h.f=V.dw()
h.r=0
n=q.r
m=new U.e1()
j=U.jQ()
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
j=U.jQ()
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
m=new U.e0()
g=U.jQ()
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
m=new U.e2()
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
h.h(0,U.ks(V.aT(1,0,0,0,0,1,0,0,0,0,1,5,0,0,0,1)))
n=new M.dd()
n.seX(0,O.jP(s))
n.d.b4(n.gfZ(),n.gh0())
n.e=null
n.f=null
n.r=null
n.x=null
e=X.lW(!0,!0,!1,null,2000,null,0)
d=new X.dC()
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
s=new D.R("camera",i,n.a,n,[X.d7])
s.b=!0
n.aq(s)}s=n.b
if(s!==e){if(s!=null)s.gw().T(0,n.gah())
i=n.b
n.b=e
e.gw().h(0,n.gah())
s=new D.R("target",i,n.b,n,[X.dO])
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
m=H.n(new Q.jF(u,o),n)
if(s.b==null)s.saU(H.c([],[n]))
s=s.b;(s&&C.a).h(s,m)
V.n6(q)},
jF:function jF(a,b){this.a=a
this.b=b}}
var w=[C,H,J,P,W,O,E,Z,D,X,V,U,M,A,F,T,Q]
hunkHelpers.setFunctionNamesIfNecessary(w)
var $={}
H.jU.prototype={}
J.a.prototype={
v:function(a,b){return a===b},
gI:function(a){return H.cs(a)},
i:function(a){return"Instance of '"+H.bR(a)+"'"}}
J.fO.prototype={
i:function(a){return String(a)},
gI:function(a){return a?519018:218159},
$iM:1}
J.dj.prototype={
v:function(a,b){return null==b},
i:function(a){return"null"},
gI:function(a){return 0},
$iJ:1}
J.dk.prototype={
gI:function(a){return 0},
i:function(a){return String(a)}}
J.ht.prototype={}
J.bz.prototype={}
J.b9.prototype={
i:function(a){var u=a[$.ln()]
if(u==null)return this.eH(a)
return"JavaScript function for "+H.l(J.aH(u))},
$S:function(){return{func:1,opt:[,,,,,,,,,,,,,,,,]}},
$ibu:1}
J.aC.prototype={
h:function(a,b){H.D(b,H.x(a,0))
if(!!a.fixed$length)H.r(P.au("add"))
a.push(b)},
jI:function(a,b){var u
if(!!a.fixed$length)H.r(P.au("removeAt"))
u=a.length
if(b>=u)throw H.h(P.dG(b,null,null))
return a.splice(b,1)[0]},
T:function(a,b){var u
if(!!a.fixed$length)H.r(P.au("remove"))
for(u=0;u<a.length;++u)if(J.Y(a[u],b)){a.splice(u,1)
return!0}return!1},
O:function(a,b){var u,t
H.n(b,{func:1,ret:-1,args:[H.x(a,0)]})
u=a.length
for(t=0;t<u;++t){b.$1(a[t])
if(a.length!==u)throw H.h(P.br(a))}},
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
if(a.length!==u)throw H.h(P.br(a))}throw H.h(H.fM())},
jf:function(a,b){return this.jg(a,b,null)},
F:function(a,b){if(b<0||b>=a.length)return H.j(a,b)
return a[b]},
eE:function(a,b,c){var u=a.length
if(b>u)throw H.h(P.ax(b,0,a.length,"start",null))
if(c<b||c>a.length)throw H.h(P.ax(c,b,a.length,"end",null))
if(b===c)return H.c([],[H.x(a,0)])
return H.c(a.slice(b,c),[H.x(a,0)])},
gje:function(a){if(a.length>0)return a[0]
throw H.h(H.fM())},
gbv:function(a){var u=a.length
if(u>0)return a[u-1]
throw H.h(H.fM())},
eB:function(a,b,c,d,e){var u,t,s
u=H.x(a,0)
H.m(d,"$ie",[u],"$ae")
if(!!a.immutable$list)H.r(P.au("setRange"))
P.jX(b,c,a.length,null,null,null)
t=c-b
if(t===0)return
H.m(d,"$ib",[u],"$ab")
u=J.jz(d)
if(e+t>u.gl(d))throw H.h(H.lY())
if(e<b)for(s=t-1;s>=0;--s)a[b+s]=u.j(d,e+s)
else for(s=0;s<t;++s)a[b+s]=u.j(d,e+s)},
b5:function(a,b,c,d){return this.eB(a,b,c,d,0)},
dk:function(a,b){var u,t
H.n(b,{func:1,ret:P.M,args:[H.x(a,0)]})
u=a.length
for(t=0;t<u;++t){if(b.$1(a[t]))return!0
if(a.length!==u)throw H.h(P.br(a))}return!1},
X:function(a,b){var u
for(u=0;u<a.length;++u)if(J.Y(a[u],b))return!0
return!1},
i:function(a){return P.jS(a,"[","]")},
gR:function(a){return new J.ap(a,a.length,0,[H.x(a,0)])},
gI:function(a){return H.cs(a)},
gl:function(a){return a.length},
sl:function(a,b){if(!!a.fixed$length)H.r(P.au("set length"))
if(b<0)throw H.h(P.ax(b,0,null,"newLength",null))
a.length=b},
j:function(a,b){if(b>=a.length||b<0)throw H.h(H.c0(a,b))
return a[b]},
Y:function(a,b,c){H.D(c,H.x(a,0))
if(!!a.immutable$list)H.r(P.au("indexed set"))
if(b>=a.length||b<0)throw H.h(H.c0(a,b))
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
J.jT.prototype={}
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
$iaP:1}
J.bv.prototype={
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
p:function(a,b){if(typeof b!=="number")throw H.h(H.bg(b))
return a+b},
q:function(a,b){if(typeof b!=="number")throw H.h(H.bg(b))
return a-b},
u:function(a,b){if(typeof b!=="number")throw H.h(H.bg(b))
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
J.di.prototype={$iB:1}
J.fP.prototype={}
J.b8.prototype={
ce:function(a,b){if(b<0)throw H.h(H.c0(a,b))
if(b>=a.length)H.r(H.c0(a,b))
return a.charCodeAt(b)},
aF:function(a,b){if(b>=a.length)throw H.h(H.c0(a,b))
return a.charCodeAt(b)},
p:function(a,b){if(typeof b!=="string")throw H.h(P.jN(b,null,null))
return a+b},
eD:function(a,b,c){var u
if(c>a.length)throw H.h(P.ax(c,0,a.length,null,null))
u=c+b.length
if(u>a.length)return!1
return b===a.substring(c,u)},
bE:function(a,b){return this.eD(a,b,0)},
b7:function(a,b,c){if(c==null)c=a.length
if(b<0)throw H.h(P.dG(b,null,null))
if(b>c)throw H.h(P.dG(b,null,null))
if(c>a.length)throw H.h(P.dG(c,null,null))
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
$ikD:1,
$if:1}
H.q.prototype={
gl:function(a){return this.a.length},
j:function(a,b){return C.j.ce(this.a,b)},
$adZ:function(){return[P.B]},
$aw:function(){return[P.B]},
$ae:function(){return[P.B]},
$ab:function(){return[P.B]}}
H.fp.prototype={}
H.bO.prototype={
gR:function(a){return new H.cl(this,this.gl(this),0,[H.ao(this,"bO",0)])},
bB:function(a,b){return this.eG(0,H.n(b,{func:1,ret:P.M,args:[H.ao(this,"bO",0)]}))}}
H.cl.prototype={
gH:function(a){return this.d},
B:function(){var u,t,s,r
u=this.a
t=J.jz(u)
s=t.gl(u)
if(this.b!==s)throw H.h(P.br(u))
r=this.c
if(r>=s){this.saS(null)
return!1}this.saS(t.F(u,r));++this.c
return!0},
saS:function(a){this.d=H.D(a,H.x(this,0))},
$iaP:1}
H.h0.prototype={
gR:function(a){return new H.h1(J.c7(this.a),this.b,this.$ti)},
gl:function(a){return J.bF(this.a)},
F:function(a,b){return this.b.$1(J.jL(this.a,b))},
$ae:function(a,b){return[b]}}
H.h1.prototype={
B:function(){var u=this.b
if(u.B()){this.saS(this.c.$1(u.gH(u)))
return!0}this.saS(null)
return!1},
gH:function(a){return this.a},
saS:function(a){this.a=H.D(a,H.x(this,1))},
$aaP:function(a,b){return[b]}}
H.h2.prototype={
gl:function(a){return J.bF(this.a)},
F:function(a,b){return this.b.$1(J.jL(this.a,b))},
$abO:function(a,b){return[b]},
$ae:function(a,b){return[b]}}
H.cI.prototype={
gR:function(a){return new H.iM(J.c7(this.a),this.b,this.$ti)}}
H.iM.prototype={
B:function(){var u,t
for(u=this.a,t=this.b;u.B();)if(t.$1(u.gH(u)))return!0
return!1},
gH:function(a){var u=this.a
return u.gH(u)}}
H.bK.prototype={}
H.dZ.prototype={}
H.dY.prototype={}
H.hz.prototype={}
H.ie.prototype={
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
H.hp.prototype={
i:function(a){var u=this.b
if(u==null)return"NoSuchMethodError: "+H.l(this.a)
return"NoSuchMethodError: method not found: '"+u+"' on null"}}
H.fR.prototype={
i:function(a){var u,t
u=this.b
if(u==null)return"NoSuchMethodError: "+H.l(this.a)
t=this.c
if(t==null)return"NoSuchMethodError: method not found: '"+u+"' ("+H.l(this.a)+")"
return"NoSuchMethodError: method not found: '"+u+"' on '"+t+"' ("+H.l(this.a)+")"}}
H.it.prototype={
i:function(a){var u=this.a
return u.length===0?"Error":"Error: "+u}}
H.jK.prototype={
$1:function(a){if(!!J.a0(a).$ibt)if(a.$thrownJsError==null)a.$thrownJsError=this.a
return a},
$S:16}
H.eC.prototype={
i:function(a){var u,t
u=this.b
if(u!=null)return u
u=this.a
t=u!==null&&typeof u==="object"?u.stack:null
u=t==null?"":t
this.b=u
return u},
$iam:1}
H.cb.prototype={
i:function(a){return"Closure '"+H.bR(this).trim()+"'"},
$ibu:1,
gjY:function(){return this},
$C:"$1",
$R:1,
$D:null}
H.i2.prototype={}
H.hU.prototype={
i:function(a){var u=this.$static_name
if(u==null)return"Closure of unknown static method"
return"Closure '"+H.c5(u)+"'"}}
H.c9.prototype={
v:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof H.c9))return!1
return this.a===b.a&&this.b===b.b&&this.c===b.c},
gI:function(a){var u,t
u=this.c
if(u==null)t=H.cs(this.a)
else t=typeof u!=="object"?J.bE(u):H.cs(u)
return(t^H.cs(this.b))>>>0},
i:function(a){var u=this.c
if(u==null)u=this.a
return"Closure '"+H.l(this.d)+"' of "+("Instance of '"+H.bR(u)+"'")}}
H.ih.prototype={
i:function(a){return this.a}}
H.f9.prototype={
i:function(a){return this.a}}
H.hG.prototype={
i:function(a){return"RuntimeError: "+H.l(this.a)}}
H.aQ.prototype={
gl:function(a){return this.a},
ga2:function(a){return new H.dn(this,[H.x(this,0)])},
du:function(a,b){var u,t
if(typeof b==="string"){u=this.b
if(u==null)return!1
return this.cZ(u,b)}else if(typeof b==="number"&&(b&0x3ffffff)===b){t=this.c
if(t==null)return!1
return this.cZ(t,b)}else return this.jk(b)},
jk:function(a){var u=this.d
if(u==null)return!1
return this.cp(this.bO(u,J.bE(a)&0x3ffffff),a)>=0},
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
t=this.bO(u,J.bE(a)&0x3ffffff)
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
this.d=s}r=J.bE(b)&0x3ffffff
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
if(t!==this.r)throw H.h(P.br(this))
u=u.c}},
cQ:function(a,b,c){var u
H.D(b,H.x(this,0))
H.D(c,H.x(this,1))
u=this.b9(a,b)
if(u==null)this.c4(a,b,this.c_(b,c))
else u.b=c},
fK:function(){this.r=this.r+1&67108863},
c_:function(a,b){var u,t
u=new H.fV(H.D(a,H.x(this,0)),H.D(b,H.x(this,1)))
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
i:function(a){return P.kz(this)},
b9:function(a,b){return a[b]},
bO:function(a,b){return a[b]},
c4:function(a,b,c){a[b]=c},
fl:function(a,b){delete a[b]},
cZ:function(a,b){return this.b9(a,b)!=null},
bZ:function(){var u=Object.create(null)
this.c4(u,"<non-identifier-key>",u)
this.fl(u,"<non-identifier-key>")
return u}}
H.fV.prototype={}
H.dn.prototype={
gl:function(a){return this.a.a},
gR:function(a){var u,t
u=this.a
t=new H.fW(u,u.r,this.$ti)
t.c=u.e
return t}}
H.fW.prototype={
gH:function(a){return this.d},
B:function(){var u=this.a
if(this.b!==u.r)throw H.h(P.br(u))
else{u=this.c
if(u==null){this.scP(null)
return!1}else{this.scP(u.a)
this.c=this.c.c
return!0}}},
scP:function(a){this.d=H.D(a,H.x(this,0))},
$iaP:1}
H.jB.prototype={
$1:function(a){return this.a(a)},
$S:16}
H.jC.prototype={
$2:function(a,b){return this.a(a,b)},
$S:38}
H.jD.prototype={
$1:function(a){return this.a(H.H(a))},
$S:37}
H.fQ.prototype={
i:function(a){return"RegExp/"+this.a+"/"},
$ikD:1}
H.cp.prototype={}
H.dx.prototype={
gl:function(a){return a.length},
$iF:1,
$aF:function(){}}
H.co.prototype={
j:function(a,b){H.bB(b,a,a.length)
return a[b]},
$abK:function(){return[P.z]},
$aw:function(){return[P.z]},
$ie:1,
$ae:function(){return[P.z]},
$ib:1,
$ab:function(){return[P.z]}}
H.dy.prototype={
$abK:function(){return[P.B]},
$aw:function(){return[P.B]},
$ie:1,
$ae:function(){return[P.B]},
$ib:1,
$ab:function(){return[P.B]}}
H.hg.prototype={
j:function(a,b){H.bB(b,a,a.length)
return a[b]}}
H.hh.prototype={
j:function(a,b){H.bB(b,a,a.length)
return a[b]}}
H.hi.prototype={
j:function(a,b){H.bB(b,a,a.length)
return a[b]}}
H.hj.prototype={
j:function(a,b){H.bB(b,a,a.length)
return a[b]}}
H.hk.prototype={
j:function(a,b){H.bB(b,a,a.length)
return a[b]}}
H.dz.prototype={
gl:function(a){return a.length},
j:function(a,b){H.bB(b,a,a.length)
return a[b]}}
H.hl.prototype={
gl:function(a){return a.length},
j:function(a,b){H.bB(b,a,a.length)
return a[b]}}
H.cM.prototype={}
H.cN.prototype={}
H.cO.prototype={}
H.cP.prototype={}
P.iO.prototype={
$1:function(a){var u,t
u=this.a
t=u.a
u.a=null
t.$0()},
$S:12}
P.iN.prototype={
$1:function(a){var u,t
this.a.a=H.n(a,{func:1,ret:-1})
u=this.b
t=this.c
u.firstChild?u.removeChild(t):u.appendChild(t)},
$S:42}
P.iP.prototype={
$0:function(){this.a.$0()},
$S:2}
P.iQ.prototype={
$0:function(){this.a.$0()},
$S:2}
P.eI.prototype={
f5:function(a,b){if(self.setTimeout!=null)this.b=self.setTimeout(H.c_(new P.jp(this,b),0),a)
else throw H.h(P.au("`setTimeout()` not found."))},
f6:function(a,b){if(self.setTimeout!=null)this.b=self.setInterval(H.c_(new P.jo(this,a,Date.now(),b),0),a)
else throw H.h(P.au("Periodic timer."))},
$ib_:1}
P.jp.prototype={
$0:function(){var u=this.a
u.b=null
u.c=1
this.b.$0()},
$S:3}
P.jo.prototype={
$0:function(){var u,t,s,r
u=this.a
t=u.c+1
s=this.b
if(s>0){r=Date.now()-this.c
if(r>(t+1)*s)t=C.h.eL(r,s)}u.c=t
this.d.$1(u)},
$S:2}
P.b4.prototype={
jp:function(a){if(this.c!==6)return!0
return this.b.b.cC(H.n(this.d,{func:1,ret:P.M,args:[P.L]}),a.a,P.M,P.L)},
jj:function(a){var u,t,s,r
u=this.e
t=P.L
s={futureOr:1,type:H.x(this,1)}
r=this.b.b
if(H.eY(u,{func:1,args:[P.L,P.am]}))return H.ka(r.jO(u,a.a,a.b,null,t,P.am),s)
else return H.ka(r.cC(H.n(u,{func:1,args:[P.L]}),a.a,null,t),s)}}
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
this.cR(new P.b4(s,r,a,b,[u,c]))
return s},
jS:function(a,b){return this.ed(a,null,b)},
cR:function(a){var u,t
u=this.a
if(u<=1){a.a=H.k(this.c,"$ib4")
this.c=a}else{if(u===2){t=H.k(this.c,"$iaA")
u=t.a
if(u<4){t.cR(a)
return}this.a=u
this.c=t.c}u=this.b
u.toString
P.jv(null,null,u,H.n(new P.iY(this,a),{func:1,ret:-1}))}},
da:function(a){var u,t,s,r,q,p
u={}
u.a=a
if(a==null)return
t=this.a
if(t<=1){s=H.k(this.c,"$ib4")
this.c=a
if(s!=null){for(r=a;q=r.a,q!=null;r=q);r.a=s}}else{if(t===2){p=H.k(this.c,"$iaA")
t=p.a
if(t<4){p.da(a)
return}this.a=t
this.c=p.c}u.a=this.ba(a)
t=this.b
t.toString
P.jv(null,null,t,H.n(new P.j1(u,this),{func:1,ret:-1}))}},
c2:function(){var u=H.k(this.c,"$ib4")
this.c=null
return this.ba(u)},
ba:function(a){var u,t,s
for(u=a,t=null;u!=null;t=u,u=s){s=u.a
u.a=t}return t},
cV:function(a){var u,t,s
u=H.x(this,0)
H.ka(a,{futureOr:1,type:u})
t=this.$ti
if(H.cX(a,"$ici",t,"$aci"))if(H.cX(a,"$iaA",t,null))P.l_(a,this)
else P.mr(a,this)
else{s=this.c2()
H.D(a,u)
this.a=4
this.c=a
P.cL(this,s)}},
cW:function(a,b){var u
H.k(b,"$iam")
u=this.c2()
this.a=8
this.c=new P.ae(a,b)
P.cL(this,u)},
$ici:1}
P.iY.prototype={
$0:function(){P.cL(this.a,this.b)},
$S:2}
P.j1.prototype={
$0:function(){P.cL(this.b,this.a.a)},
$S:2}
P.iZ.prototype={
$1:function(a){var u=this.a
u.a=0
u.cV(a)},
$S:12}
P.j_.prototype={
$2:function(a,b){H.k(b,"$iam")
this.a.cW(a,b)},
$1:function(a){return this.$2(a,null)},
$S:32}
P.j0.prototype={
$0:function(){this.a.cW(this.b,this.c)},
$S:2}
P.j4.prototype={
$0:function(){var u,t,s,r,q,p,o
u=null
try{r=this.c
u=r.b.b.eb(H.n(r.d,{func:1}),null)}catch(q){t=H.av(q)
s=H.c3(q)
if(this.d){r=H.k(this.a.a.c,"$iae").a
p=t
p=r==null?p==null:r===p
r=p}else r=!1
p=this.b
if(r)p.b=H.k(this.a.a.c,"$iae")
else p.b=new P.ae(t,s)
p.a=!0
return}if(!!J.a0(u).$ici){if(u instanceof P.aA&&u.a>=4){if(u.a===8){r=this.b
r.b=H.k(u.c,"$iae")
r.a=!0}return}o=this.a.a
r=this.b
r.b=u.jS(new P.j5(o),null)
r.a=!1}},
$S:3}
P.j5.prototype={
$1:function(a){return this.a},
$S:31}
P.j3.prototype={
$0:function(){var u,t,s,r,q,p,o
try{s=this.b
r=H.x(s,0)
q=H.D(this.c,r)
p=H.x(s,1)
this.a.b=s.b.b.cC(H.n(s.d,{func:1,ret:{futureOr:1,type:p},args:[r]}),q,{futureOr:1,type:p},r)}catch(o){u=H.av(o)
t=H.c3(o)
s=this.a
s.b=new P.ae(u,t)
s.a=!0}},
$S:3}
P.j2.prototype={
$0:function(){var u,t,s,r,q,p,o,n
try{u=H.k(this.a.a.c,"$iae")
r=this.c
if(r.jp(u)&&r.e!=null){q=this.b
q.b=r.jj(u)
q.a=!1}}catch(p){t=H.av(p)
s=H.c3(p)
r=H.k(this.a.a.c,"$iae")
q=r.a
o=t
n=this.b
if(q==null?o==null:q===o)n.b=r
else n.b=new P.ae(t,s)
n.a=!0}},
$S:3}
P.e4.prototype={}
P.hX.prototype={
gl:function(a){var u,t,s,r
u={}
t=new P.aA(0,$.X,[P.B])
u.a=0
s=H.x(this,0)
r=H.n(new P.hZ(u,this),{func:1,ret:-1,args:[s]})
H.n(new P.i_(u,t),{func:1,ret:-1})
W.ac(this.a,this.b,r,!1,s)
return t}}
P.hZ.prototype={
$1:function(a){H.D(a,H.x(this.b,0));++this.a.a},
$S:function(){return{func:1,ret:P.J,args:[H.x(this.b,0)]}}}
P.i_.prototype={
$0:function(){this.b.cV(this.a.a)},
$S:2}
P.cw.prototype={}
P.hY.prototype={}
P.b_.prototype={}
P.ae.prototype={
i:function(a){return H.l(this.a)},
$ibt:1}
P.js.prototype={$inJ:1}
P.ju.prototype={
$0:function(){var u,t,s
u=this.a
t=u.a
if(t==null){s=new P.dB()
u.a=s
u=s}else u=t
t=this.b
if(t==null)throw H.h(u)
s=H.h(u)
s.stack=t.i(0)
throw s},
$S:2}
P.jb.prototype={
jP:function(a){var u,t,s
H.n(a,{func:1,ret:-1})
try{if(C.l===$.X){a.$0()
return}P.l5(null,null,this,a,-1)}catch(s){u=H.av(s)
t=H.c3(s)
P.jt(null,null,this,u,H.k(t,"$iam"))}},
jQ:function(a,b,c){var u,t,s
H.n(a,{func:1,ret:-1,args:[c]})
H.D(b,c)
try{if(C.l===$.X){a.$1(b)
return}P.l6(null,null,this,a,b,-1,c)}catch(s){u=H.av(s)
t=H.c3(s)
P.jt(null,null,this,u,H.k(t,"$iam"))}},
iN:function(a,b){return new P.jd(this,H.n(a,{func:1,ret:b}),b)},
c9:function(a){return new P.jc(this,H.n(a,{func:1,ret:-1}))},
dm:function(a,b){return new P.je(this,H.n(a,{func:1,ret:-1,args:[b]}),b)},
eb:function(a,b){H.n(a,{func:1,ret:b})
if($.X===C.l)return a.$0()
return P.l5(null,null,this,a,b)},
cC:function(a,b,c,d){H.n(a,{func:1,ret:c,args:[d]})
H.D(b,d)
if($.X===C.l)return a.$1(b)
return P.l6(null,null,this,a,b,c,d)},
jO:function(a,b,c,d,e,f){H.n(a,{func:1,ret:d,args:[e,f]})
H.D(b,e)
H.D(c,f)
if($.X===C.l)return a.$2(b,c)
return P.mD(null,null,this,a,b,c,d,e,f)}}
P.jd.prototype={
$0:function(){return this.a.eb(this.b,this.c)},
$S:function(){return{func:1,ret:this.c}}}
P.jc.prototype={
$0:function(){return this.a.jP(this.b)},
$S:3}
P.je.prototype={
$1:function(a){var u=this.c
return this.a.jQ(this.b,H.D(a,u),u)},
$S:function(){return{func:1,ret:-1,args:[this.c]}}}
P.j9.prototype={
gR:function(a){var u=new P.ej(this,this.r,this.$ti)
u.c=this.e
return u},
gl:function(a){return this.a},
X:function(a,b){var u,t
if(typeof b==="string"&&b!=="__proto__"){u=this.b
if(u==null)return!1
return H.k(u[b],"$ibX")!=null}else{t=this.fh(b)
return t}},
fh:function(a){var u=this.d
if(u==null)return!1
return this.bM(this.d2(u,a),a)>=0},
h:function(a,b){var u,t
H.D(b,H.x(this,0))
if(typeof b==="string"&&b!=="__proto__"){u=this.b
if(u==null){u=P.k2()
this.b=u}return this.cS(u,b)}else if(typeof b==="number"&&(b&1073741823)===b){t=this.c
if(t==null){t=P.k2()
this.c=t}return this.cS(t,b)}else return this.f8(0,b)},
f8:function(a,b){var u,t,s
H.D(b,H.x(this,0))
u=this.d
if(u==null){u=P.k2()
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
if(H.k(a[b],"$ibX")!=null)return!1
a[b]=this.bJ(b)
return!0},
hI:function(a,b){var u
if(a==null)return!1
u=H.k(a[b],"$ibX")
if(u==null)return!1
this.dg(u)
delete a[b]
return!0},
cU:function(){this.r=1073741823&this.r+1},
bJ:function(a){var u,t
u=new P.bX(H.D(a,H.x(this,0)))
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
cX:function(a){return J.bE(a)&1073741823},
d2:function(a,b){return a[this.cX(b)]},
bM:function(a,b){var u,t
if(a==null)return-1
u=a.length
for(t=0;t<u;++t)if(J.Y(a[t].a,b))return t
return-1}}
P.bX.prototype={}
P.ej.prototype={
gH:function(a){return this.d},
B:function(){var u=this.a
if(this.b!==u.r)throw H.h(P.br(u))
else{u=this.c
if(u==null){this.scT(null)
return!1}else{this.scT(H.D(u.a,H.x(this,0)))
this.c=this.c.b
return!0}}},
scT:function(a){this.d=H.D(a,H.x(this,0))},
$iaP:1}
P.fX.prototype={$ie:1,$ib:1}
P.w.prototype={
gR:function(a){return new H.cl(a,this.gl(a),0,[H.c2(this,a,"w",0)])},
F:function(a,b){return this.j(a,b)},
jU:function(a,b){var u,t
u=H.c([],[H.c2(this,a,"w",0)])
C.a.sl(u,this.gl(a))
for(t=0;t<this.gl(a);++t)C.a.Y(u,t,this.j(a,t))
return u},
jT:function(a){return this.jU(a,!0)},
p:function(a,b){var u,t
u=[H.c2(this,a,"w",0)]
H.m(b,"$ib",u,"$ab")
t=H.c([],u)
C.a.sl(t,C.h.p(this.gl(a),b.gl(b)))
C.a.b5(t,0,this.gl(a),a)
C.a.b5(t,this.gl(a),t.length,b)
return t},
i:function(a){return P.jS(a,"[","]")}}
P.fZ.prototype={}
P.h_.prototype={
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
H.n(b,{func:1,ret:-1,args:[H.c2(this,a,"a6",0),H.c2(this,a,"a6",1)]})
for(u=J.c7(this.ga2(a));u.B();){t=u.gH(u)
b.$2(t,this.j(a,t))}},
gl:function(a){return J.bF(this.ga2(a))},
i:function(a){return P.kz(a)},
$iN:1}
P.jg.prototype={
aj:function(a,b){var u
for(u=J.c7(H.m(b,"$ie",this.$ti,"$ae"));u.B();)this.h(0,u.gH(u))},
i:function(a){return P.jS(this,"{","}")},
F:function(a,b){var u,t,s
if(b<0)H.r(P.ax(b,0,null,"index",null))
for(u=P.mv(this,this.r,H.x(this,0)),t=0;u.B();){s=u.d
if(b===t)return s;++t}throw H.h(P.V(b,this,"index",null,t))},
$ie:1,
$ikL:1}
P.ek.prototype={}
P.cc.prototype={}
P.cd.prototype={}
P.fr.prototype={
$acc:function(){return[P.f,[P.b,P.B]]}}
P.fK.prototype={
i:function(a){return this.a}}
P.fJ.prototype={
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
default:p=null}if(p!=null){if(q==null)q=new P.be("")
if(r>b)q.a+=C.j.b7(a,b,r)
q.a+=p
b=r+1}}if(q==null)return
if(c>b)q.a+=J.lK(a,b,c)
u=q.a
return u.charCodeAt(0)==0?u:u},
$acd:function(){return[P.f,P.f]}}
P.iw.prototype={}
P.ix.prototype={
iX:function(a,b,c){var u,t,s
c=P.jX(b,c,a.length,null,null,null)
u=c-b
if(u===0)return new Uint8Array(0)
t=new Uint8Array(u*3)
s=new P.jq(t)
if(s.fv(a,b,c)!==c)s.dh(C.j.ce(a,c-1),0)
return new Uint8Array(t.subarray(0,H.my(0,s.b,t.length)))},
iW:function(a){return this.iX(a,0,null)},
$acd:function(){return[P.f,[P.b,P.B]]}}
P.jq.prototype={
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
u=P.lR(H.mc(this))
t=P.d9(H.ma(this))
s=P.d9(H.m6(this))
r=P.d9(H.m7(this))
q=P.d9(H.m9(this))
p=P.d9(H.mb(this))
o=P.lS(H.m8(this))
n=u+"-"+t+"-"+s+" "+r+":"+q+":"+p+"."+o
return n}}
P.z.prototype={}
P.aM.prototype={
p:function(a,b){return new P.aM(C.h.p(this.a,b.gfn()))},
q:function(a,b){return new P.aM(C.h.q(this.a,b.gfn()))},
v:function(a,b){if(b==null)return!1
return b instanceof P.aM&&this.a===b.a},
gI:function(a){return C.h.gI(this.a)},
i:function(a){var u,t,s,r,q
u=new P.fo()
t=this.a
if(t<0)return"-"+new P.aM(0-t).i(0)
s=u.$1(C.h.a_(t,6e7)%60)
r=u.$1(C.h.a_(t,1e6)%60)
q=new P.fn().$1(t%1e6)
return""+C.h.a_(t,36e8)+":"+H.l(s)+":"+H.l(r)+"."+H.l(q)}}
P.fn.prototype={
$1:function(a){if(a>=1e5)return""+a
if(a>=1e4)return"0"+a
if(a>=1000)return"00"+a
if(a>=100)return"000"+a
if(a>=10)return"0000"+a
return"00000"+a},
$S:14}
P.fo.prototype={
$1:function(a){if(a>=10)return""+a
return"0"+a},
$S:14}
P.bt.prototype={}
P.dB.prototype={
i:function(a){return"Throw of null."}}
P.aI.prototype={
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
p=P.ft(this.b)
return r+q+": "+p}}
P.bS.prototype={
gbL:function(){return"RangeError"},
gbK:function(){var u,t,s
u=this.e
if(u==null){u=this.f
t=u!=null?": Not less than or equal to "+H.l(u):""}else{s=this.f
if(s==null)t=": Not greater than or equal to "+H.l(u)
else if(s>u)t=": Not in range "+H.l(u)+".."+H.l(s)+", inclusive"
else t=s<u?": Valid value range is empty":": Only valid value is "+H.l(u)}return t}}
P.fL.prototype={
gbL:function(){return"RangeError"},
gbK:function(){var u,t
u=H.ad(this.b)
if(typeof u!=="number")return u.aR()
if(u<0)return": index must not be negative"
t=this.f
if(t===0)return": no indices are valid"
return": index should be less than "+H.l(t)},
gl:function(a){return this.f}}
P.iu.prototype={
i:function(a){return"Unsupported operation: "+this.a}}
P.is.prototype={
i:function(a){var u=this.a
return u!=null?"UnimplementedError: "+u:"UnimplementedError"}}
P.bU.prototype={
i:function(a){return"Bad state: "+this.a}}
P.fc.prototype={
i:function(a){var u=this.a
if(u==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+P.ft(u)+"."}}
P.hs.prototype={
i:function(a){return"Out of Memory"},
$ibt:1}
P.dL.prototype={
i:function(a){return"Stack Overflow"},
$ibt:1}
P.fh.prototype={
i:function(a){var u=this.a
return u==null?"Reading static variable during its initialization":"Reading static variable '"+u+"' during its initialization"}}
P.ec.prototype={
i:function(a){return"Exception: "+this.a}}
P.fE.prototype={
i:function(a){var u,t,s,r
u=this.a
t=""!==u?"FormatException: "+u:"FormatException"
s=this.b
r=s.length>78?C.j.b7(s,0,75)+"...":s
return t+"\n"+r}}
P.bu.prototype={}
P.B.prototype={}
P.e.prototype={
bB:function(a,b){var u=H.ao(this,"e",0)
return new H.cI(this,H.n(b,{func:1,ret:P.M,args:[u]}),[u])},
gl:function(a){var u,t
u=this.gR(this)
for(t=0;u.B();)++t
return t},
gaB:function(a){var u,t
u=this.gR(this)
if(!u.B())throw H.h(H.fM())
t=u.gH(u)
if(u.B())throw H.h(H.lZ())
return t},
F:function(a,b){var u,t,s
if(b<0)H.r(P.ax(b,0,null,"index",null))
for(u=this.gR(this),t=0;u.B();){s=u.gH(u)
if(b===t)return s;++t}throw H.h(P.V(b,this,"index",null,t))},
i:function(a){return P.lX(this,"(",")")}}
P.aP.prototype={}
P.b.prototype={$ie:1}
P.N.prototype={}
P.J.prototype={
gI:function(a){return P.L.prototype.gI.call(this,this)},
i:function(a){return"null"}}
P.a3.prototype={}
P.L.prototype={constructor:P.L,$iL:1,
v:function(a,b){return this===b},
gI:function(a){return H.cs(this)},
i:function(a){return"Instance of '"+H.bR(this)+"'"},
toString:function(){return this.i(this)}}
P.am.prototype={}
P.f.prototype={$ikD:1}
P.be.prototype={
gl:function(a){return this.a.length},
i:function(a){var u=this.a
return u.charCodeAt(0)==0?u:u}}
W.u.prototype={}
W.f0.prototype={
gl:function(a){return a.length}}
W.d0.prototype={
i:function(a){return String(a)},
$id0:1}
W.f1.prototype={
i:function(a){return String(a)}}
W.c8.prototype={$ic8:1}
W.d2.prototype={}
W.bo.prototype={$ibo:1}
W.bH.prototype={
ep:function(a,b,c){var u=this.fw(a,b,P.mJ(c,null))
return u},
fw:function(a,b,c){return a.getContext(b,c)},
$ibH:1}
W.bp.prototype={
gl:function(a){return a.length}}
W.ce.prototype={$ice:1}
W.fd.prototype={
gl:function(a){return a.length}}
W.S.prototype={$iS:1}
W.cf.prototype={
gl:function(a){return a.length}}
W.fe.prototype={}
W.aK.prototype={}
W.aL.prototype={}
W.ff.prototype={
gl:function(a){return a.length}}
W.fg.prototype={
gl:function(a){return a.length}}
W.fj.prototype={
gl:function(a){return a.length}}
W.aw.prototype={$iaw:1}
W.cg.prototype={
iI:function(a,b){return a.adoptNode(b)},
eq:function(a,b){return a.getElementById(b)}}
W.fk.prototype={
i:function(a){return String(a)}}
W.da.prototype={
j_:function(a,b){return a.createHTMLDocument(b)}}
W.db.prototype={
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
W.dc.prototype={
i:function(a){return"Rectangle ("+H.l(a.left)+", "+H.l(a.top)+") "+H.l(this.gaA(a))+" x "+H.l(this.gav(a))},
v:function(a,b){var u
if(b==null)return!1
if(!H.cX(b,"$iab",[P.a3],"$aab"))return!1
u=J.an(b)
return a.left===u.gbw(b)&&a.top===u.gbz(b)&&this.gaA(a)===u.gaA(b)&&this.gav(a)===u.gav(b)},
gI:function(a){return W.l1(C.d.gI(a.left),C.d.gI(a.top),C.d.gI(this.gaA(a)),C.d.gI(this.gav(a)))},
gdn:function(a){return a.bottom},
gav:function(a){return a.height},
gbw:function(a){return a.left},
gby:function(a){return a.right},
gbz:function(a){return a.top},
gaA:function(a){return a.width},
$iab:1,
$aab:function(){return[P.a3]}}
W.fl.prototype={
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
W.fm.prototype={
gl:function(a){return a.length}}
W.iS.prototype={
gl:function(a){return this.b.length},
j:function(a,b){var u=this.b
if(b<0||b>=u.length)return H.j(u,b)
return H.k(u[b],"$iT")},
h:function(a,b){J.kl(this.a,b)
return b},
gR:function(a){var u=this.jT(this)
return new J.ap(u,u.length,0,[H.x(u,0)])},
$aw:function(){return[W.T]},
$ae:function(){return[W.T]},
$ab:function(){return[W.T]}}
W.T.prototype={
giM:function(a){return new W.iU(a)},
gdr:function(a){return new W.iS(a,a.children)},
gds:function(a){var u,t,s,r
u=a.clientLeft
t=a.clientTop
s=a.clientWidth
r=a.clientHeight
if(typeof s!=="number")return s.aR()
if(s<0)s=-s*0
if(typeof r!=="number")return r.aR()
if(r<0)r=-r*0
return new P.ab(u,t,s,r,[P.a3])},
i:function(a){return a.localName},
a8:function(a,b,c,d){var u,t,s,r
if(c==null){u=$.kv
if(u==null){u=H.c([],[W.as])
t=new W.dA(u)
C.a.h(u,W.l0(null))
C.a.h(u,W.l2())
$.kv=t
d=t}else d=u
u=$.ku
if(u==null){u=new W.eN(d)
$.ku=u
c=u}else{u.a=d
c=u}}if($.b7==null){u=document
t=u.implementation
t=(t&&C.I).j_(t,"")
$.b7=t
$.jR=t.createRange()
t=$.b7
t.toString
t=t.createElement("base")
H.k(t,"$ic8")
t.href=u.baseURI
u=$.b7.head;(u&&C.K).C(u,t)}u=$.b7
if(u.body==null){u.toString
t=u.createElement("body")
u.body=H.k(t,"$ibo")}u=$.b7
if(!!this.$ibo)s=u.body
else{t=a.tagName
u.toString
s=u.createElement(t)
u=$.b7.body;(u&&C.n).C(u,s)}if("createContextualFragment" in window.Range.prototype&&!C.a.X(C.V,a.tagName)){u=$.jR;(u&&C.D).ey(u,s)
u=$.jR
r=(u&&C.D).iY(u,b)}else{s.innerHTML=b
r=$.b7.createDocumentFragment()
for(u=J.an(r);t=s.firstChild,t!=null;)u.C(r,t)}u=$.b7.body
if(s==null?u!=null:s!==u)J.km(s)
c.cG(r)
C.y.iI(document,r)
return r},
iZ:function(a,b,c){return this.a8(a,b,c,null)},
eA:function(a,b,c,d){a.textContent=null
this.C(a,this.a8(a,b,c,d))},
ez:function(a,b){return this.eA(a,b,null,null)},
aQ:function(a,b){return a.getAttribute(b)},
hG:function(a,b){return a.removeAttribute(b)},
$iT:1,
gjR:function(a){return a.tagName}}
W.fq.prototype={
$1:function(a){return!!J.a0(H.k(a,"$iC")).$iT},
$S:15}
W.o.prototype={$io:1}
W.d.prototype={
iG:function(a,b,c,d){H.n(c,{func:1,args:[W.o]})
if(c!=null)this.f9(a,b,c,!1)},
f9:function(a,b,c,d){return a.addEventListener(b,H.c_(H.n(c,{func:1,args:[W.o]}),1),!1)},
$id:1}
W.aN.prototype={$iaN:1}
W.fy.prototype={
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.h(P.V(b,a,null,null,null))
return a[b]},
F:function(a,b){if(b<0||b>=a.length)return H.j(a,b)
return a[b]},
$iF:1,
$aF:function(){return[W.aN]},
$aw:function(){return[W.aN]},
$ie:1,
$ae:function(){return[W.aN]},
$ib:1,
$ab:function(){return[W.aN]},
$aA:function(){return[W.aN]}}
W.fz.prototype={
gl:function(a){return a.length}}
W.fD.prototype={
gl:function(a){return a.length}}
W.aO.prototype={$iaO:1}
W.dg.prototype={}
W.fI.prototype={
gl:function(a){return a.length}}
W.bL.prototype={
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
$ibL:1,
$aA:function(){return[W.C]}}
W.dh.prototype={}
W.aR.prototype={$iaR:1}
W.dq.prototype={
i:function(a){return String(a)},
$idq:1}
W.h9.prototype={
gl:function(a){return a.length}}
W.ha.prototype={
j:function(a,b){return P.bh(a.get(H.H(b)))},
O:function(a,b){var u,t
H.n(b,{func:1,ret:-1,args:[P.f,,]})
u=a.entries()
for(;!0;){t=u.next()
if(t.done)return
b.$2(t.value[0],P.bh(t.value[1]))}},
ga2:function(a){var u=H.c([],[P.f])
this.O(a,new W.hb(u))
return u},
gl:function(a){return a.size},
$aa6:function(){return[P.f,null]},
$iN:1,
$aN:function(){return[P.f,null]}}
W.hb.prototype={
$2:function(a,b){return C.a.h(this.a,a)},
$S:6}
W.hc.prototype={
j:function(a,b){return P.bh(a.get(H.H(b)))},
O:function(a,b){var u,t
H.n(b,{func:1,ret:-1,args:[P.f,,]})
u=a.entries()
for(;!0;){t=u.next()
if(t.done)return
b.$2(t.value[0],P.bh(t.value[1]))}},
ga2:function(a){var u=H.c([],[P.f])
this.O(a,new W.hd(u))
return u},
gl:function(a){return a.size},
$aa6:function(){return[P.f,null]},
$iN:1,
$aN:function(){return[P.f,null]}}
W.hd.prototype={
$2:function(a,b){return C.a.h(this.a,a)},
$S:6}
W.aU.prototype={$iaU:1}
W.he.prototype={
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.h(P.V(b,a,null,null,null))
return a[b]},
F:function(a,b){if(b<0||b>=a.length)return H.j(a,b)
return a[b]},
$iF:1,
$aF:function(){return[W.aU]},
$aw:function(){return[W.aU]},
$ie:1,
$ae:function(){return[W.aU]},
$ib:1,
$ab:function(){return[W.aU]},
$aA:function(){return[W.aU]}}
W.a7.prototype={$ia7:1}
W.ah.prototype={
gaB:function(a){var u,t
u=this.a
t=u.childNodes.length
if(t===0)throw H.h(P.kM("No elements"))
if(t>1)throw H.h(P.kM("More than one element"))
return u.firstChild},
aj:function(a,b){var u,t,s,r,q
H.m(b,"$ie",[W.C],"$ae")
u=b.a
t=this.a
if(u!==t)for(s=u.childNodes.length,r=J.an(t),q=0;q<s;++q)r.C(t,u.firstChild)
return},
gR:function(a){var u=this.a.childNodes
return new W.de(u,u.length,-1,[H.c2(C.X,u,"A",0)])},
gl:function(a){return this.a.childNodes.length},
j:function(a,b){var u=this.a.childNodes
if(b<0||b>=u.length)return H.j(u,b)
return u[b]},
$aw:function(){return[W.C]},
$ae:function(){return[W.C]},
$ab:function(){return[W.C]}}
W.C.prototype={
jH:function(a){var u=a.parentNode
if(u!=null)J.f_(u,a)},
i:function(a){var u=a.nodeValue
return u==null?this.eF(a):u},
C:function(a,b){return a.appendChild(b)},
hH:function(a,b){return a.removeChild(b)},
$iC:1}
W.cq.prototype={
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
W.aV.prototype={$iaV:1,
gl:function(a){return a.length}}
W.hv.prototype={
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
W.dF.prototype={
iY:function(a,b){return a.createContextualFragment(b)},
ey:function(a,b){return a.selectNodeContents(b)}}
W.hE.prototype={
j:function(a,b){return P.bh(a.get(H.H(b)))},
O:function(a,b){var u,t
H.n(b,{func:1,ret:-1,args:[P.f,,]})
u=a.entries()
for(;!0;){t=u.next()
if(t.done)return
b.$2(t.value[0],P.bh(t.value[1]))}},
ga2:function(a){var u=H.c([],[P.f])
this.O(a,new W.hF(u))
return u},
gl:function(a){return a.size},
$aa6:function(){return[P.f,null]},
$iN:1,
$aN:function(){return[P.f,null]}}
W.hF.prototype={
$2:function(a,b){return C.a.h(this.a,a)},
$S:6}
W.hH.prototype={
gl:function(a){return a.length}}
W.aW.prototype={$iaW:1}
W.hR.prototype={
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
W.aY.prototype={$iaY:1,
gl:function(a){return a.length}}
W.hV.prototype={
j:function(a,b){return this.d3(a,H.H(b))},
O:function(a,b){var u,t
H.n(b,{func:1,ret:-1,args:[P.f,P.f]})
for(u=0;!0;++u){t=this.fB(a,u)
if(t==null)return
b.$2(t,this.d3(a,t))}},
ga2:function(a){var u=H.c([],[P.f])
this.O(a,new W.hW(u))
return u},
gl:function(a){return a.length},
d3:function(a,b){return a.getItem(b)},
fB:function(a,b){return a.key(b)},
$aa6:function(){return[P.f,P.f]},
$iN:1,
$aN:function(){return[P.f,P.f]}}
W.hW.prototype={
$2:function(a,b){return C.a.h(this.a,a)},
$S:33}
W.aD.prototype={$iaD:1}
W.bV.prototype={}
W.dM.prototype={
a8:function(a,b,c,d){var u,t
if("createContextualFragment" in window.Range.prototype)return this.bF(a,b,c,d)
u=W.lT("<table>"+b+"</table>",c,d)
t=document.createDocumentFragment()
t.toString
u.toString
new W.ah(t).aj(0,new W.ah(u))
return t}}
W.dN.prototype={
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
W.i1.prototype={
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
W.cx.prototype={$icx:1}
W.aZ.prototype={$iaZ:1}
W.aE.prototype={$iaE:1}
W.i3.prototype={
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
W.i4.prototype={
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
W.i7.prototype={
gl:function(a){return a.length}}
W.b0.prototype={$ib0:1}
W.aF.prototype={$iaF:1}
W.ib.prototype={
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.h(P.V(b,a,null,null,null))
return a[b]},
F:function(a,b){if(b<0||b>=a.length)return H.j(a,b)
return a[b]},
$iF:1,
$aF:function(){return[W.b0]},
$aw:function(){return[W.b0]},
$ie:1,
$ae:function(){return[W.b0]},
$ib:1,
$ab:function(){return[W.b0]},
$aA:function(){return[W.b0]}}
W.ic.prototype={
gl:function(a){return a.length}}
W.by.prototype={}
W.iv.prototype={
i:function(a){return String(a)}}
W.iK.prototype={
gl:function(a){return a.length}}
W.b3.prototype={
gj5:function(a){if(a.deltaY!==undefined)return a.deltaY
throw H.h(P.au("deltaY is not supported"))},
gj4:function(a){if(a.deltaX!==undefined)return a.deltaX
throw H.h(P.au("deltaX is not supported"))},
$ib3:1}
W.cJ.prototype={
hN:function(a,b){return a.requestAnimationFrame(H.c_(H.n(b,{func:1,ret:-1,args:[P.a3]}),1))},
fo:function(a){if(!!(a.requestAnimationFrame&&a.cancelAnimationFrame))return;(function(b){var u=['ms','moz','webkit','o']
for(var t=0;t<u.length&&!b.requestAnimationFrame;++t){b.requestAnimationFrame=b[u[t]+'RequestAnimationFrame']
b.cancelAnimationFrame=b[u[t]+'CancelAnimationFrame']||b[u[t]+'CancelRequestAnimationFrame']}if(b.requestAnimationFrame&&b.cancelAnimationFrame)return
b.requestAnimationFrame=function(c){return window.setTimeout(function(){c(Date.now())},16)}
b.cancelAnimationFrame=function(c){clearTimeout(c)}})(a)}}
W.cK.prototype={$icK:1}
W.iT.prototype={
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
W.e7.prototype={
i:function(a){return"Rectangle ("+H.l(a.left)+", "+H.l(a.top)+") "+H.l(a.width)+" x "+H.l(a.height)},
v:function(a,b){var u
if(b==null)return!1
if(!H.cX(b,"$iab",[P.a3],"$aab"))return!1
u=J.an(b)
return a.left===u.gbw(b)&&a.top===u.gbz(b)&&a.width===u.gaA(b)&&a.height===u.gav(b)},
gI:function(a){return W.l1(C.d.gI(a.left),C.d.gI(a.top),C.d.gI(a.width),C.d.gI(a.height))},
gav:function(a){return a.height},
gaA:function(a){return a.width}}
W.j6.prototype={
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
W.ep.prototype={
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
W.jj.prototype={
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
W.jk.prototype={
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
W.iR.prototype={
O:function(a,b){var u,t,s,r,q,p
H.n(b,{func:1,ret:-1,args:[P.f,P.f]})
for(u=this.ga2(this),t=u.length,s=this.a,r=J.an(s),q=0;q<u.length;u.length===t||(0,H.E)(u),++q){p=u[q]
b.$2(p,r.aQ(s,p))}},
ga2:function(a){var u,t,s,r,q
u=this.a.attributes
t=H.c([],[P.f])
for(s=u.length,r=0;r<s;++r){if(r>=u.length)return H.j(u,r)
q=H.k(u[r],"$icK")
if(q.namespaceURI==null)C.a.h(t,q.name)}return t},
$aa6:function(){return[P.f,P.f]},
$aN:function(){return[P.f,P.f]}}
W.iU.prototype={
j:function(a,b){return J.jM(this.a,H.H(b))},
gl:function(a){return this.ga2(this).length}}
W.iV.prototype={}
W.k1.prototype={}
W.iW.prototype={}
W.iX.prototype={
$1:function(a){return this.a.$1(H.k(a,"$io"))},
$S:26}
W.bA.prototype={
eT:function(a){var u,t
u=$.kj()
if(u.a===0){for(t=0;t<262;++t)u.Y(0,C.U[t],W.mS())
for(t=0;t<12;++t)u.Y(0,C.u[t],W.mT())}},
aJ:function(a){return $.lB().X(0,W.ch(a))},
ak:function(a,b,c){var u,t,s
u=W.ch(a)
t=$.kj()
s=t.j(0,H.l(u)+"::"+b)
if(s==null)s=t.j(0,"*::"+b)
if(s==null)return!1
return H.k7(s.$4(a,b,c,this))},
$ias:1}
W.A.prototype={
gR:function(a){return new W.de(a,this.gl(a),-1,[H.c2(this,a,"A",0)])}}
W.dA.prototype={
aJ:function(a){return C.a.dk(this.a,new W.hn(a))},
ak:function(a,b,c){return C.a.dk(this.a,new W.hm(a,b,c))},
$ias:1}
W.hn.prototype={
$1:function(a){return H.k(a,"$ias").aJ(this.a)},
$S:17}
W.hm.prototype={
$1:function(a){return H.k(a,"$ias").ak(this.a,this.b,this.c)},
$S:17}
W.ex.prototype={
f4:function(a,b,c,d){var u,t,s
this.a.aj(0,c)
u=b.bB(0,new W.jh())
t=b.bB(0,new W.ji())
this.b.aj(0,u)
s=this.c
s.aj(0,C.W)
s.aj(0,t)},
aJ:function(a){return this.a.X(0,W.ch(a))},
ak:function(a,b,c){var u,t
u=W.ch(a)
t=this.c
if(t.X(0,H.l(u)+"::"+b))return this.d.iJ(c)
else if(t.X(0,"*::"+b))return this.d.iJ(c)
else{t=this.b
if(t.X(0,H.l(u)+"::"+b))return!0
else if(t.X(0,"*::"+b))return!0
else if(t.X(0,H.l(u)+"::*"))return!0
else if(t.X(0,"*::*"))return!0}return!1},
$ias:1}
W.jh.prototype={
$1:function(a){return!C.a.X(C.u,H.H(a))},
$S:18}
W.ji.prototype={
$1:function(a){return C.a.X(C.u,H.H(a))},
$S:18}
W.jm.prototype={
ak:function(a,b,c){if(this.eK(a,b,c))return!0
if(b==="template"&&c==="")return!0
if(J.jM(a,"template")==="")return this.e.X(0,b)
return!1}}
W.jn.prototype={
$1:function(a){return"TEMPLATE::"+H.l(H.H(a))},
$S:27}
W.jl.prototype={
aJ:function(a){var u=J.a0(a)
if(!!u.$ict)return!1
u=!!u.$ip
if(u&&W.ch(a)==="foreignObject")return!1
if(u)return!0
return!1},
ak:function(a,b,c){if(b==="is"||C.j.bE(b,"on"))return!1
return this.aJ(a)},
$ias:1}
W.de.prototype={
B:function(){var u,t
u=this.c+1
t=this.b
if(u<t){this.sd4(J.lF(this.a,u))
this.c=u
return!0}this.sd4(null)
this.c=t
return!1},
gH:function(a){return this.d},
sd4:function(a){this.d=H.D(a,H.x(this,0))},
$iaP:1}
W.as.prototype={}
W.jf.prototype={$inw:1}
W.eN.prototype={
cG:function(a){new W.jr(this).$2(a,null)},
aW:function(a,b){if(b==null)J.km(a)
else J.f_(b,a)},
hR:function(a,b){var u,t,s,r,q,p,o,n
u=!0
t=null
s=null
try{t=J.lI(a)
s=J.jM(t.a,"is")
r=function(c){if(!(c.attributes instanceof NamedNodeMap))return true
var m=c.childNodes
if(c.lastChild&&c.lastChild!==m[m.length-1])return true
if(c.children)if(!(c.children instanceof HTMLCollection||c.children instanceof NodeList))return true
var l=0
if(c.children)l=c.children.length
for(var k=0;k<l;k++){var j=c.children[k]
if(j.id=='attributes'||j.name=='attributes'||j.id=='lastChild'||j.name=='lastChild'||j.id=='children'||j.name=='children')return true}return false}(a)
u=r?!0:!(a.attributes instanceof NamedNodeMap)}catch(o){H.av(o)}q="element unprintable"
try{q=J.aH(a)}catch(o){H.av(o)}try{p=W.ch(a)
this.hQ(H.k(a,"$iT"),b,u,q,p,H.k(t,"$iN"),H.H(s))}catch(o){if(H.av(o) instanceof P.aI)throw o
else{this.aW(a,b)
window
n="Removing corrupted element "+H.l(q)
if(typeof console!="undefined")window.console.warn(n)}}},
hQ:function(a,b,c,d,e,f,g){var u,t,s,r,q,p
if(c){this.aW(a,b)
window
u="Removing element due to corrupted attributes on <"+d+">"
if(typeof console!="undefined")window.console.warn(u)
return}if(!this.a.aJ(a)){this.aW(a,b)
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
if(!this.a.ak(a,J.lL(q),r.aQ(u,q))){window
p="Removing disallowed attribute <"+H.l(e)+" "+q+'="'+H.l(r.aQ(u,q))+'">'
if(typeof console!="undefined")window.console.warn(p)
r.aQ(u,q)
r.hG(u,q)}}if(!!J.a0(a).$icx)this.cG(a.content)},
$ini:1}
W.jr.prototype={
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
if(p!=null)J.f_(p,q)}else J.f_(a,q)
u=null
t=a.lastChild}if(u!=null)this.$2(u,a)
u=H.k(t,"$iC")}},
$S:28}
W.e6.prototype={}
W.e8.prototype={}
W.e9.prototype={}
W.ea.prototype={}
W.eb.prototype={}
W.ed.prototype={}
W.ee.prototype={}
W.ef.prototype={}
W.eg.prototype={}
W.el.prototype={}
W.em.prototype={}
W.en.prototype={}
W.eo.prototype={}
W.eq.prototype={}
W.er.prototype={}
W.eu.prototype={}
W.ev.prototype={}
W.ew.prototype={}
W.cQ.prototype={}
W.cR.prototype={}
W.ey.prototype={}
W.ez.prototype={}
W.eD.prototype={}
W.eG.prototype={}
W.eH.prototype={}
W.cS.prototype={}
W.cT.prototype={}
W.eJ.prototype={}
W.eK.prototype={}
W.eO.prototype={}
W.eP.prototype={}
W.eQ.prototype={}
W.eR.prototype={}
W.eS.prototype={}
W.eT.prototype={}
W.eU.prototype={}
W.eV.prototype={}
W.eW.prototype={}
W.eX.prototype={}
P.jw.prototype={
$2:function(a,b){this.a[a]=b},
$S:13}
P.fA.prototype={
gbP:function(){var u,t,s
u=this.b
t=H.ao(u,"w",0)
s=W.T
return new H.h0(new H.cI(u,H.n(new P.fB(),{func:1,ret:P.M,args:[t]}),[t]),H.n(new P.fC(),{func:1,ret:s,args:[t]}),[t,s])},
h:function(a,b){J.kl(this.b.a,b)},
gl:function(a){return J.bF(this.gbP().a)},
j:function(a,b){var u=this.gbP()
return u.b.$1(J.jL(u.a,b))},
gR:function(a){var u=P.m3(this.gbP(),!1,W.T)
return new J.ap(u,u.length,0,[H.x(u,0)])},
$aw:function(){return[W.T]},
$ae:function(){return[W.T]},
$ab:function(){return[W.T]}}
P.fB.prototype={
$1:function(a){return!!J.a0(H.k(a,"$iC")).$iT},
$S:15}
P.fC.prototype={
$1:function(a){return H.i(H.k(a,"$iC"),"$iT")},
$S:29}
P.ja.prototype={
gby:function(a){var u=this.a
if(typeof u!=="number")return u.p()
return H.D(u+this.c,H.x(this,0))},
gdn:function(a){var u=this.b
if(typeof u!=="number")return u.p()
return H.D(u+this.d,H.x(this,0))},
i:function(a){return"Rectangle ("+H.l(this.a)+", "+H.l(this.b)+") "+this.c+" x "+this.d},
v:function(a,b){var u,t,s,r
if(b==null)return!1
if(H.cX(b,"$iab",[P.a3],"$aab")){u=this.a
t=J.an(b)
if(u==t.gbw(b)){s=this.b
if(s==t.gbz(b)){if(typeof u!=="number")return u.p()
r=H.x(this,0)
if(H.D(u+this.c,r)===t.gby(b)){if(typeof s!=="number")return s.p()
u=H.D(s+this.d,r)===t.gdn(b)}else u=!1}else u=!1}else u=!1}else u=!1
return u},
gI:function(a){var u,t,s,r,q
u=this.a
t=J.bE(u)
s=this.b
r=J.bE(s)
if(typeof u!=="number")return u.p()
q=H.x(this,0)
u=C.h.gI(H.D(u+this.c,q))
if(typeof s!=="number")return s.p()
q=C.h.gI(H.D(s+this.d,q))
return P.mu(P.j8(P.j8(P.j8(P.j8(0,t),r),u),q))}}
P.ab.prototype={
gbw:function(a){return this.a},
gbz:function(a){return this.b},
gaA:function(a){return this.c},
gav:function(a){return this.d}}
P.ba.prototype={$iba:1}
P.fT.prototype={
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.h(P.V(b,a,null,null,null))
return this.ao(a,b)},
F:function(a,b){return this.j(a,b)},
ao:function(a,b){return a.getItem(b)},
$aw:function(){return[P.ba]},
$ie:1,
$ae:function(){return[P.ba]},
$ib:1,
$ab:function(){return[P.ba]},
$aA:function(){return[P.ba]}}
P.bd.prototype={$ibd:1}
P.hq.prototype={
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.h(P.V(b,a,null,null,null))
return this.ao(a,b)},
F:function(a,b){return this.j(a,b)},
ao:function(a,b){return a.getItem(b)},
$aw:function(){return[P.bd]},
$ie:1,
$ae:function(){return[P.bd]},
$ib:1,
$ab:function(){return[P.bd]},
$aA:function(){return[P.bd]}}
P.hx.prototype={
gl:function(a){return a.length}}
P.ct.prototype={$ict:1}
P.i0.prototype={
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
gdr:function(a){return new P.fA(a,new W.ah(a))},
a8:function(a,b,c,d){var u,t,s,r,q,p
u=H.c([],[W.as])
C.a.h(u,W.l0(null))
C.a.h(u,W.l2())
C.a.h(u,new W.jl())
c=new W.eN(new W.dA(u))
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
P.bf.prototype={$ibf:1}
P.id.prototype={
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.h(P.V(b,a,null,null,null))
return this.ao(a,b)},
F:function(a,b){return this.j(a,b)},
ao:function(a,b){return a.getItem(b)},
$aw:function(){return[P.bf]},
$ie:1,
$ae:function(){return[P.bf]},
$ib:1,
$ab:function(){return[P.bf]},
$aA:function(){return[P.bf]}}
P.eh.prototype={}
P.ei.prototype={}
P.es.prototype={}
P.et.prototype={}
P.eE.prototype={}
P.eF.prototype={}
P.eL.prototype={}
P.eM.prototype={}
P.f3.prototype={
gl:function(a){return a.length}}
P.f4.prototype={
j:function(a,b){return P.bh(a.get(H.H(b)))},
O:function(a,b){var u,t
H.n(b,{func:1,ret:-1,args:[P.f,,]})
u=a.entries()
for(;!0;){t=u.next()
if(t.done)return
b.$2(t.value[0],P.bh(t.value[1]))}},
ga2:function(a){var u=H.c([],[P.f])
this.O(a,new P.f5(u))
return u},
gl:function(a){return a.size},
$aa6:function(){return[P.f,null]},
$iN:1,
$aN:function(){return[P.f,null]}}
P.f5.prototype={
$2:function(a,b){return C.a.h(this.a,a)},
$S:6}
P.f6.prototype={
gl:function(a){return a.length}}
P.bG.prototype={}
P.hr.prototype={
gl:function(a){return a.length}}
P.e5.prototype={}
P.d3.prototype={$id3:1}
P.df.prototype={$idf:1}
P.dE.prototype={$idE:1}
P.bT.prototype={
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
$ibT:1}
P.dI.prototype={$idI:1}
P.dX.prototype={$idX:1}
P.hT.prototype={
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.h(P.V(b,a,null,null,null))
return P.bh(this.fA(a,b))},
F:function(a,b){return this.j(a,b)},
fA:function(a,b){return a.item(b)},
$aw:function(){return[[P.N,,,]]},
$ie:1,
$ae:function(){return[[P.N,,,]]},
$ib:1,
$ab:function(){return[[P.N,,,]]},
$aA:function(){return[[P.N,,,]]}}
P.eA.prototype={}
P.eB.prototype={}
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
gR:function(a){var u=this.a
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
O.cm.prototype={
gl:function(a){return this.a.length},
gw:function(){var u=this.b
if(u==null){u=D.Q()
this.b=u}return u},
eS:function(a){var u=this.b
if(u!=null)u.G(a)},
aC:function(){return this.eS(null)},
gZ:function(a){var u=this.a
if(u.length>0)return C.a.gbv(u)
else return V.dw()},
e8:function(a){var u=this.a
if(a==null)C.a.h(u,V.dw())
else C.a.h(u,a)
this.aC()},
cw:function(){var u=this.a
if(u.length>0){u.pop()
this.aC()}},
sbR:function(a){this.a=H.m(a,"$ib",[V.ak],"$ab")}}
E.f7.prototype={}
E.aj.prototype={
scI:function(a,b){var u,t,s
u=this.c
if(u!=b){this.c=b
this.d=b
this.e=null
if(u!=null)u.gw().T(0,this.ge4())
t=this.c
if(t!=null)t.gw().h(0,this.ge4())
s=new D.R("shape",u,this.c,this,[F.dJ])
s.b=!0
this.aN(s)}},
an:function(a,b){var u
for(u=this.y.a,u=new J.ap(u,u.length,0,[H.x(u,0)]);u.B();)u.d.an(0,b)},
aO:function(a){var u,t
u=a.dx
C.a.h(u.a,u.gZ(u))
u.aC()
a.e9(this.f)
u=a.dy
t=(u&&C.a).gbv(u)
if(t!=null&&this.d!=null)t.jL(a,this)
for(u=this.y.a,u=new J.ap(u,u.length,0,[H.x(u,0)]);u.B();)u.d.aO(a)
a.e7()
a.dx.cw()},
gw:function(){var u=this.z
if(u==null){u=D.Q()
this.z=u}return u},
aN:function(a){var u=this.z
if(u!=null)u.G(a)},
a5:function(){return this.aN(null)},
e5:function(a){H.k(a,"$iy")
this.e=null
this.aN(a)},
jx:function(){return this.e5(null)},
e3:function(a){this.aN(H.k(a,"$iy"))},
ju:function(){return this.e3(null)},
jt:function(a,b){var u,t,s,r,q,p,o
H.m(b,"$ie",[E.aj],"$ae")
for(u=b.length,t=this.ge2(),s={func:1,ret:-1,args:[D.y]},r=[s],q=0;q<b.length;b.length===u||(0,H.E)(b),++q){p=b[q]
if(p!=null){o=p.z
if(o==null){o=new D.bJ()
o.sab(null)
o.saU(null)
o.c=null
o.d=0
p.z=o}H.n(t,s)
if(o.a==null)o.sab(H.c([],r))
o=o.a;(o&&C.a).h(o,t)}}this.a5()},
jw:function(a,b){var u,t
H.m(b,"$ie",[E.aj],"$ae")
for(u=b.gR(b),t=this.ge2();u.B();)u.gH(u).gw().T(0,t)
this.a5()},
i:function(a){var u,t
u=this.a
t=u.length
if(t<=0)return"Unnamed entity"
return u},
sfg:function(a,b){this.y=H.m(b,"$ia2",[E.aj],"$aa2")},
$ibc:1}
E.hA.prototype={
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
u=new O.cm()
t=[V.ak]
u.sbR(H.c([],t))
u.b=null
u.gw().h(0,new E.hB(this))
this.cy=u
u=new O.cm()
u.sbR(H.c([],t))
u.b=null
u.gw().h(0,new E.hC(this))
this.db=u
u=new O.cm()
u.sbR(H.c([],t))
u.b=null
u.gw().h(0,new E.hD(this))
this.dx=u
this.si3(H.c([],[O.bW]))
u=this.dy;(u&&C.a).h(u,null)
this.si_(new H.aQ([P.f,A.cu]))},
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
si3:function(a){this.dy=H.m(a,"$ib",[O.bW],"$ab")},
si_:function(a){this.fr=H.m(a,"$iN",[P.f,A.cu],"$aN")}}
E.hB.prototype={
$1:function(a){var u
H.k(a,"$iy")
u=this.a
u.z=null
u.ch=null},
$S:7}
E.hC.prototype={
$1:function(a){var u
H.k(a,"$iy")
u=this.a
u.z=null
u.Q=null
u.ch=null
u.cx=null},
$S:7}
E.hD.prototype={
$1:function(a){var u
H.k(a,"$iy")
u=this.a
u.ch=null
u.cx=null},
$S:7}
E.dT.prototype={
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
P.kP(C.q,this.gjM())}},
ea:function(){var u,t
if(!this.ch){this.ch=!0
u=window
t=H.n(new E.i6(this),{func:1,ret:-1,args:[P.a3]})
C.F.fo(u)
C.F.hN(u,W.l9(t,P.a3))}},
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
this.d.aO(this.e)}s=this.z
if(s!=null)s.G(null)}catch(q){u=H.av(q)
t=H.c3(q)
P.kf("Error: "+H.l(u))
P.kf("Stack: "+H.l(t))
throw H.h(u)}}}
E.i6.prototype={
$1:function(a){var u
H.n2(a)
u=this.a
if(u.ch){u.ch=!1
u.jK()}},
$S:34}
Z.e3.prototype={$inc:1}
Z.d4.prototype={
bd:function(a){var u,t,s
try{t=a.a
C.b.dB(t,this.e)
C.b.jW(t,this.e,this.b,5126,!1,this.d,this.c)}catch(s){u=H.av(s)
t=P.t('Failed to bind buffer attribute "'+this.a.i(0)+'": '+H.l(u))
throw H.h(t)}},
i:function(a){return"["+this.a.i(0)+", Size: "+this.b+", Offset: "+this.c+", Stride: "+this.d+", Attr: "+H.l(this.e)+"]"}}
Z.iL.prototype={$ind:1}
Z.d5.prototype={
aM:function(a){var u,t,s,r
for(u=this.c,t=u.length,s=0;s<t;++s){r=u[s]
if((r.a.a&a.a)!==0)return r}return},
bd:function(a){var u,t
u=this.a
C.b.al(a.a,u.a,u.b)
for(u=this.c,t=u.length-1;t>=0;--t)u[t].bd(a)},
eg:function(a){var u,t,s
for(u=this.c,t=u.length-1,s=a.a;t>=0;--t)C.b.dw(s,u[t].e)
C.b.al(s,this.a.a,null)},
aO:function(a){var u,t,s,r,q,p
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
for(u=this.c,s=u.length,q=0;q<s;++q)C.a.h(p,J.aH(u[q]))
return"Buffer:  ["+this.a.i(0)+"]\nIndices: "+C.a.m(t,", ")+"\nAttrs:   "+C.a.m(p,", ")},
sfz:function(a){this.b=H.m(a,"$ib",[Z.ck],"$ab")},
$inl:1}
Z.ck.prototype={
i:function(a){return"Type: "+this.a+", Count: "+this.b+", ["+("Instance of '"+H.bR(this.c)+"'")+"]"}}
Z.b2.prototype={
gcJ:function(a){var u,t
u=this.a
t=(u&$.bl().a)!==0?3:0
if((u&$.bk().a)!==0)t+=3
if((u&$.bj().a)!==0)t+=3
if((u&$.bm().a)!==0)t+=2
if((u&$.bn().a)!==0)t+=3
if((u&$.cY().a)!==0)t+=3
if((u&$.cZ().a)!==0)t+=4
if((u&$.c6().a)!==0)++t
return(u&$.bi().a)!==0?t+4:t},
iL:function(a){var u,t,s
u=$.bl()
t=this.a
if((t&u.a)!==0){if(0===a)return u
s=1}else s=0
u=$.bk()
if((t&u.a)!==0){if(s===a)return u;++s}u=$.bj()
if((t&u.a)!==0){if(s===a)return u;++s}u=$.bm()
if((t&u.a)!==0){if(s===a)return u;++s}u=$.bn()
if((t&u.a)!==0){if(s===a)return u;++s}u=$.cY()
if((t&u.a)!==0){if(s===a)return u;++s}u=$.cZ()
if((t&u.a)!==0){if(s===a)return u;++s}u=$.c6()
if((t&u.a)!==0){if(s===a)return u;++s}u=$.bi()
if((t&u.a)!==0)if(s===a)return u
return $.lA()},
v:function(a,b){if(b==null)return!1
if(!(b instanceof Z.b2))return!1
return this.a===b.a},
i:function(a){var u,t
u=H.c([],[P.f])
t=this.a
if((t&$.bl().a)!==0)C.a.h(u,"Pos")
if((t&$.bk().a)!==0)C.a.h(u,"Norm")
if((t&$.bj().a)!==0)C.a.h(u,"Binm")
if((t&$.bm().a)!==0)C.a.h(u,"Txt2D")
if((t&$.bn().a)!==0)C.a.h(u,"TxtCube")
if((t&$.cY().a)!==0)C.a.h(u,"Clr3")
if((t&$.cZ().a)!==0)C.a.h(u,"Clr4")
if((t&$.c6().a)!==0)C.a.h(u,"Weight")
if((t&$.bi().a)!==0)C.a.h(u,"Bending")
if(u.length<=0)return"None"
return C.a.m(u,"|")}}
D.fa.prototype={}
D.bJ.prototype={
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
return!0}if(!s)C.a.O(t,new D.fu(u))
t=this.b
if(t!=null)C.a.O(t,new D.fv(u))
u=this.b
if(u!=null)C.a.sl(u,0)
return!0},
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
saU:function(a){this.b=H.m(a,"$ib",[{func:1,ret:-1,args:[D.y]}],"$ab")}}
D.fu.prototype={
$1:function(a){var u
H.n(a,{func:1,ret:-1,args:[D.y]})
u=this.a.a
u.b
a.$1(u)},
$S:19}
D.fv.prototype={
$1:function(a){var u
H.n(a,{func:1,ret:-1,args:[D.y]})
u=this.a.a
u.b
a.$1(u)},
$S:19}
D.y.prototype={}
D.bM.prototype={}
D.bN.prototype={}
D.R.prototype={
i:function(a){return"ValueChanged: "+this.c+", "+H.l(this.d)+" => "+H.l(this.e)}}
X.d6.prototype={
v:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.d6))return!1
if(this.a!=b.a)return!1
if(!this.b.v(0,b.b))return!1
return!0},
i:function(a){return this.b.i(0)+H.l(this.a)}}
X.dl.prototype={
v:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.dl))return!1
if(this.a!=b.a)return!1
if(!this.b.v(0,b.b))return!1
return!0},
i:function(a){return this.b.i(0)+H.l(this.a)}}
X.fS.prototype={
jD:function(a){this.c=a.b
this.d.h(0,a.a)
return!1},
jz:function(a){this.c=a.b
this.d.T(0,a.a)
return!1},
shE:function(a){this.d=H.m(a,"$ikL",[P.B],"$akL")}}
X.dr.prototype={}
X.fY.prototype={
aT:function(a,b){var u,t,s,r,q,p,o,n
u=new P.ai(Date.now(),!1)
t=this.x
s=b.a
r=this.Q
if(typeof s!=="number")return s.u()
q=b.b
p=this.ch
if(typeof q!=="number")return q.u()
o=new V.a9(t.a+s*r,t.b+q*p)
p=this.a.gaL()
n=new X.bb(a,V.bx(),this.x,this.y,this.z,p,o,u,this)
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
u.G(this.aT(a,b))
return!0},
jE:function(a){var u,t,s,r,q,p,o,n
u=this.e
if(u==null)return!1
t=this.a.gaL()
s=this.x
r=Date.now()
q=a.a
p=this.cx
if(typeof q!=="number")return q.u()
o=a.b
n=this.cy
if(typeof o!=="number")return o.u()
r=new X.cn(new V.O(q*p,o*n),t,s,new P.ai(r,!1),this)
r.b=!0
u.G(r)
return!0},
hf:function(a,b,c){var u,t,s
if(this.f==null)return
u=new P.ai(Date.now(),!1)
t=this.f
s=new X.dr(c,a,this.a.gaL(),b,u,this)
s.b=!0
t.G(s)
this.y=u
this.x=V.bx()}}
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
X.bb.prototype={}
X.hf.prototype={
bN:function(a,b,c){var u,t,s
u=new P.ai(Date.now(),!1)
t=this.a.gaL()
s=new X.bb(a,this.r,this.x,this.y,this.z,t,b,u,this)
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
t=this.a.gaL()
s=Date.now()
r=a.a
q=this.Q
if(typeof r!=="number")return r.u()
p=a.b
o=this.ch
if(typeof p!=="number")return p.u()
s=new X.cn(new V.O(r*q,p*o),t,b,new P.ai(s,!1),this)
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
X.cn.prototype={}
X.hw.prototype={}
X.dV.prototype={}
X.ia.prototype={
aT:function(a,b){var u,t,s,r
H.m(a,"$ib",[V.a9],"$ab")
u=new P.ai(Date.now(),!1)
t=a.length>0?a[0]:V.bx()
s=this.a.gaL()
r=new X.dV(a,this.f,this.r,this.x,this.y,s,t,u,this)
r.b=!0
if(b){this.x=u
this.f=t}this.y=u
this.r=t
return r},
jC:function(a){var u
H.m(a,"$ib",[V.a9],"$ab")
u=this.b
if(u==null)return!1
u.G(this.aT(a,!0))
return!0},
jA:function(a){var u
H.m(a,"$ib",[V.a9],"$ab")
u=this.c
if(u==null)return!1
u.G(this.aT(a,!0))
return!0},
jB:function(a){var u
H.m(a,"$ib",[V.a9],"$ab")
u=this.d
if(u==null)return!1
u.G(this.aT(a,!1))
return!0}}
X.e_.prototype={
gaL:function(){var u=this.a
return V.kJ(0,0,C.p.gds(u).c,C.p.gds(u).d)},
d_:function(a){var u,t
u=a.keyCode
t=a.ctrlKey||a.metaKey
return new X.dl(u,new X.ar(t,a.altKey,a.shiftKey))},
aI:function(a){var u,t
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
return new X.d6(u,new X.ar(t,a.altKey,a.shiftKey))},
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
H.k(a,"$iaR")
if(!this.f)return
u=this.d_(a)
this.b.jD(u)},
hb:function(a){var u
H.k(a,"$iaR")
if(!this.f)return
u=this.d_(a)
this.b.jz(u)},
hh:function(a){var u,t,s,r
H.k(a,"$ia7")
u=this.a
u.focus()
this.f=!0
this.aI(a)
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
this.aI(a)
u=this.ar(a)
if(this.x){t=this.aV(a)
if(this.d.b0(u,t))a.preventDefault()
return}if(this.r)return
s=this.at(a)
if(this.c.b0(u,s))a.preventDefault()},
h7:function(a){var u,t,s
H.k(a,"$ia7")
if(!this.bS(a)){this.aI(a)
u=this.ar(a)
if(this.x){t=this.aV(a)
if(this.d.b0(u,t))a.preventDefault()
return}if(this.r)return
s=this.at(a)
if(this.c.b0(u,s))a.preventDefault()}},
hj:function(a){var u,t,s
H.k(a,"$ia7")
this.aI(a)
u=this.ar(a)
if(this.x){t=this.aV(a)
if(this.d.b_(u,t))a.preventDefault()
return}if(this.r)return
s=this.at(a)
if(this.c.b_(u,s))a.preventDefault()},
h5:function(a){var u,t,s
H.k(a,"$ia7")
if(!this.bS(a)){this.aI(a)
u=this.ar(a)
if(this.x){t=this.aV(a)
if(this.d.b_(u,t))a.preventDefault()
return}if(this.r)return
s=this.at(a)
if(this.c.b_(u,s))a.preventDefault()}},
hn:function(a){var u,t
H.k(a,"$ib3")
this.aI(a)
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
sfp:function(a){this.z=H.m(a,"$ib",[[P.cw,P.L]],"$ab")}}
D.bs.prototype={
gw:function(){var u=this.d
if(u==null){u=D.Q()
this.d=u}return u},
ap:function(a){var u
H.k(a,"$iy")
u=this.d
if(u!=null)u.G(a)},
eW:function(){return this.ap(null)},
$ia4:1,
$ibc:1}
D.a4.prototype={$ibc:1}
D.dm.prototype={
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
if(o instanceof D.bs)C.a.h(this.e,o)
n=o.d
if(n==null){n=new D.bJ()
n.sab(null)
n.saU(null)
n.c=null
n.d=0
o.d=n}H.n(s,r)
if(n.a==null)n.sab(H.c([],q))
n=n.a;(n&&C.a).h(n,s)}u=new D.bM(a,b,this,[u])
u.b=!0
this.ap(u)},
hw:function(a,b){var u,t,s,r
u=D.a4
H.m(b,"$ie",[u],"$ae")
for(t=b.gR(b),s=this.gd6();t.B();){r=t.gH(t)
C.a.T(this.e,r)
r.gw().T(0,s)}u=new D.bN(a,b,this,[u])
u.b=!0
this.ap(u)},
eU:function(a){var u=C.a.X(this.e,a)
return u},
sfm:function(a){this.e=H.m(a,"$ib",[D.bs],"$ab")},
shD:function(a){this.f=H.m(a,"$ib",[D.dD],"$ab")},
si1:function(a){this.r=H.m(a,"$ib",[D.dK],"$ab")},
sic:function(a){this.x=H.m(a,"$ib",[D.dQ],"$ab")},
sie:function(a){this.y=H.m(a,"$ib",[D.dR],"$ab")},
sig:function(a){this.z=H.m(a,"$ib",[D.dS],"$ab")},
$ae:function(){return[D.a4]},
$aa2:function(){return[D.a4]}}
D.dD.prototype={$ia4:1,$ibc:1}
D.dK.prototype={$ia4:1,$ibc:1}
D.dQ.prototype={$ia4:1,$ibc:1}
D.dR.prototype={$ia4:1,$ibc:1}
D.dS.prototype={$ia4:1,$ibc:1}
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
V.b6.prototype={
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
return new V.b6(u,t,s,r)},
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
return new V.b6(u,t,s,r)},
v:function(a,b){var u,t
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.b6))return!1
u=b.a
t=$.P().a
if(!(Math.abs(u-this.a)<t))return!1
if(!(Math.abs(b.b-this.b)<t))return!1
if(!(Math.abs(b.c-this.c)<t))return!1
if(!(Math.abs(b.d-this.d)<t))return!1
return!0},
i:function(a){return"["+V.a_(this.a,3,0)+", "+V.a_(this.b,3,0)+", "+V.a_(this.c,3,0)+", "+V.a_(this.d,3,0)+"]"}}
V.fs.prototype={}
V.dv.prototype={
aa:function(a,b){var u=H.c([this.a,this.d,this.r,this.b,this.e,this.x,this.c,this.f,this.y],[P.z])
return u},
v:function(a,b){var u,t
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.dv))return!1
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
t=V.c1(H.c([this.a,this.d,this.r],u),3,0)
s=V.c1(H.c([this.b,this.e,this.x],u),3,0)
r=V.c1(H.c([this.c,this.f,this.y],u),3,0)
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
if(Math.abs(a7-0)<$.P().a)return V.dw()
a8=1/a7
a9=-r
b0=-d
return V.aT((t*a6-p*a5+m*a4)*a8,(-s*a6+o*a5-l*a4)*a8,(f*h-b*i+a1*j)*a8,(-e*h+a*i-a2*j)*a8,(a9*a6+p*a3-m*a0)*a8,(u*a6-o*a3+l*a0)*a8,(b0*h+b*k-a1*n)*a8,(g*h-a*k+a2*n)*a8,(r*a5-t*a3+m*c)*a8,(-u*a5+s*a3-l*c)*a8,(d*i-f*k+a1*q)*a8,(-g*i+e*k-a2*q)*a8,(a9*a4+t*a0-p*c)*a8,(u*a4-s*a0+o*c)*a8,(b0*j+f*n-b*q)*a8,(g*j-e*n+a*q)*a8)},
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
return V.aT(u*t+s*r+q*p+o*n,u*m+s*l+q*k+o*j,u*i+s*h+q*g+o*f,u*e+s*d+q*c+o*b,a*t+a0*r+a1*p+a2*n,a*m+a0*l+a1*k+a2*j,a*i+a0*h+a1*g+a2*f,a*e+a0*d+a1*c+a2*b,a3*t+a4*r+a5*p+a6*n,a3*m+a4*l+a5*k+a6*j,a3*i+a4*h+a5*g+a6*f,a3*e+a4*d+a5*c+a6*b,a7*t+a8*r+a9*p+b0*n,a7*m+a8*l+a9*k+b0*j,a7*i+a8*h+a9*g+b0*f,a7*e+a8*d+a9*c+b0*b)},
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
i:function(a){return this.S()},
dY:function(a,b,c){var u,t,s,r,q,p,o,n,m,l
u=[P.z]
t=V.c1(H.c([this.a,this.e,this.y,this.cx],u),b,c)
s=V.c1(H.c([this.b,this.f,this.z,this.cy],u),b,c)
r=V.c1(H.c([this.c,this.r,this.Q,this.db],u),b,c)
q=V.c1(H.c([this.d,this.x,this.ch,this.dx],u),b,c)
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
S:function(){return this.dY("",3,0)},
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
V.dH.prototype={
ga4:function(){var u,t
u=this.c
t=this.d
if(u>t)return t
else return u},
v:function(a,b){var u,t
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.dH))return!1
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
if(Math.abs(b-0)<$.P().a){u=$.kT
if(u==null){u=new V.O(0,0)
$.kT=u}return u}u=this.a
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
A:function(a,b){if(Math.abs(b-0)<$.P().a)return V.cH()
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
U.fb.prototype={
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
U.d8.prototype={
gw:function(){var u=this.b
if(u==null){u=D.Q()
this.b=u}return u},
aP:function(a,b,c){return this.a},
v:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.d8))return!1
return J.Y(this.a,b.a)},
i:function(a){return"Constant: "+this.a.D("          ")}}
U.cj.prototype={
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
n=n.a;(n&&C.a).h(n,s)}}u=new D.bM(a,b,this,[u])
u.b=!0
this.M(u)},
hu:function(a,b){var u,t,s
u=U.a8
H.m(b,"$ie",[u],"$ae")
for(t=b.gR(b),s=this.gaD();t.B();)t.gH(t).gw().T(0,s)
u=new D.bN(a,b,this,[u])
u.b=!0
this.M(u)},
aP:function(a,b,c){var u,t,s,r
u=this.r
t=b.e
if(typeof u!=="number")return u.aR()
if(u<t){this.r=t
u=this.e
if(u!=null)++u.d
for(u=this.a,u=new J.ap(u,u.length,0,[H.x(u,0)]),s=null;u.B();){t=u.d
if(t!=null){r=t.aP(0,b,c)
if(r!=null)s=s==null?r:r.u(0,s)}}this.f=s==null?V.dw():s
u=this.e
if(u!=null)u.az(0)}return this.f},
v:function(a,b){var u,t,s,r
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.cj))return!1
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
U.e0.prototype={
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
a=H.i(H.k(a,"$iy"),"$ibb")
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
aP:function(a,b,c){var u,t,s,r,q
u=this.ch
t=b.e
if(typeof u!=="number")return u.aR()
if(u<t){this.ch=t
s=b.y
this.b.an(0,s)
u=this.b.d
r=Math.cos(u)
q=Math.sin(u)
this.cx=V.aT(r,-q,0,0,q,r,0,0,0,0,1,0,0,0,0,1)}return this.cx},
$ia8:1}
U.e1.prototype={
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
bU:function(a){a=H.i(H.k(a,"$iy"),"$ibb")
if(!J.Y(this.d,a.x.b))return
this.cx=!0
this.ch=!0
this.cy=this.c.d
this.db=this.b.d},
bW:function(a){var u,t,s,r,q,p,o
a=H.i(H.k(a,"$iy"),"$ibb")
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
fH:function(a){if(H.i(H.k(a,"$iy"),"$idr").x){this.ch=!0
this.cy=this.c.d
this.db=this.b.d}},
fJ:function(a){var u,t,s,r,q,p,o
a=H.i(H.k(a,"$iy"),"$ibb")
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
a=H.i(H.k(a,"$iy"),"$idV")
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
aP:function(a,b,c){var u,t,s,r,q
u=this.dy
t=b.e
if(typeof u!=="number")return u.aR()
if(u<t){this.dy=t
s=b.y
this.c.an(0,s)
this.b.an(0,s)
u=this.b.d
r=Math.cos(u)
q=Math.sin(u)
u=V.aT(1,0,0,0,0,r,-q,0,0,q,r,0,0,0,0,1)
t=this.c.d
r=Math.cos(t)
q=Math.sin(t)
this.fr=u.u(0,V.aT(r,0,-q,0,0,1,0,0,q,0,r,0,0,0,0,1))}return this.fr},
$ia8:1}
U.e2.prototype={
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
H.i(a,"$icn")
u=this.d
t=a.x.b
s=this.c
if(typeof t!=="number")return t.u()
r=u+t*s
if(u!==r){this.d=r
u=new D.R("zoom",u,r,this,[P.z])
u.b=!0
this.M(u)}},
aP:function(a,b,c){var u,t,s
u=this.e
t=b.e
if(u<t){this.e=t
s=Math.pow(10,this.d)
this.f=V.aT(s,0,0,0,0,s,0,0,0,0,s,0,0,0,0,1)}return this.f},
$ia8:1}
M.dd.prototype={
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
if(n==null){n=new D.bJ()
n.sab(null)
n.saU(null)
n.c=null
n.d=0
o.z=n}H.n(s,r)
if(n.a==null)n.sab(H.c([],q))
n=n.a;(n&&C.a).h(n,s)}}u=new D.bM(a,b,this,[u])
u.b=!0
this.aq(u)},
h1:function(a,b){var u,t,s
u=E.aj
H.m(b,"$ie",[u],"$ae")
for(t=b.gR(b),s=this.gah();t.B();)t.gH(t).gw().T(0,s)
u=new D.bN(a,b,this,[u])
u.b=!0
this.aq(u)},
sec:function(a){var u,t
u=this.c
if(u!=a){if(u!=null)u.gw().T(0,this.gah())
t=this.c
this.c=a
if(a!=null)a.gw().h(0,this.gah())
u=new D.R("technique",t,this.c,this,[O.bW])
u.b=!0
this.aq(u)}},
gw:function(){var u=this.x
if(u==null){u=D.Q()
this.x=u}return u},
aO:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g
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
i=V.aT(-j/(t/q),0,0,0,0,j,0,0,0,0,l/k,-l*m/k,0,0,1,0)
u.a
a.cy.e8(i)
t=$.kE
if(t==null){t=V.kG()
q=V.kY()
p=$.kU
if(p==null){p=new V.U(0,0,-1)
$.kU=p}p=V.kA(t,q,p)
$.kE=p
h=p}else h=t
t=u.b
if(t!=null){g=t.aP(0,a,u)
if(g!=null)h=g.u(0,h)}a.db.e8(h)
u=this.c
if(u!=null)u.an(0,a)
for(u=this.d.a,u=new J.ap(u,u.length,0,[H.x(u,0)]);u.B();)u.d.an(0,a)
for(u=this.d.a,u=new J.ap(u,u.length,0,[H.x(u,0)]);u.B();)u.d.aO(a)
this.a.toString
a.cy.cw()
a.db.cw()
this.b.toString
a.e7()},
seX:function(a,b){this.d=H.m(b,"$ia2",[E.aj],"$aa2")},
$inj:1}
A.d1.prototype={}
A.f2.prototype={
j:function(a,b){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<t;++s){r=u[s]
if(r.b===b)return r}return},
jc:function(){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<u.length;u.length===t||(0,H.E)(u),++s){r=u[s]
C.b.dB(r.a,r.c)}},
j8:function(){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<u.length;u.length===t||(0,H.E)(u),++s){r=u[s]
C.b.dw(r.a,r.c)}}}
A.h3.prototype={
eM:function(a7,a8){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6
this.z=a7
u=new P.be("")
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
u=new P.be("")
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
if(!H.k7(C.b.bC(s,this.r,35714))){h=C.b.er(s,this.r)
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
if(a7.x2)this.k1=H.i(this.y.n(0,"txt2DMat"),"$icB")
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
break}}this.seZ(H.c([],[A.cA]))
this.sf_(H.c([],[A.cC]))
this.sf0(H.c([],[A.cD]))
this.sf1(H.c([],[A.cE]))
this.sf2(H.c([],[A.cF]))
this.sf3(H.c([],[A.cG]))
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
s=this.cj;(s&&C.a).h(s,new A.cA(g,f,e))}}t=a7.Q
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
s=this.ck;(s&&C.a).h(s,new A.cC(g,f,e,d,c,b,a))}}t=a7.ch
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
s=this.cl;(s&&C.a).h(s,new A.cD(g,f,e,d,c,b,a,a0,a1,a2))}}t=a7.cx
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
s=this.cm;(s&&C.a).h(s,new A.cE(g,f,e,d,c,b,a0,a))}}t=a7.cy
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
H.i(d,"$icB")
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
s=this.cn;(s&&C.a).h(s,new A.cF(g,f,e,d,c,a2,b,a,a0,a1))}}t=a7.db
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
s=this.co;(s&&C.a).h(s,new A.cG(g,f,e,d,c,b,a6,a,a0,a1,a2,a3,a4,a5))}}}},
ac:function(a,b,c){C.b.U(b.a,b.d,1)},
a7:function(a,b,c){C.b.U(b.a,b.d,1)},
sfc:function(a){this.r1=H.m(a,"$ib",[A.at],"$ab")},
seZ:function(a){this.cj=H.m(a,"$ib",[A.cA],"$ab")},
sf_:function(a){this.ck=H.m(a,"$ib",[A.cC],"$ab")},
sf0:function(a){this.cl=H.m(a,"$ib",[A.cD],"$ab")},
sf1:function(a){this.cm=H.m(a,"$ib",[A.cE],"$ab")},
sf2:function(a){this.cn=H.m(a,"$ib",[A.cF],"$ab")},
sf3:function(a){this.co=H.m(a,"$ib",[A.cG],"$ab")}}
A.h6.prototype={
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
A.cA.prototype={}
A.cE.prototype={}
A.cC.prototype={}
A.cF.prototype={}
A.cD.prototype={}
A.cG.prototype={}
A.cu.prototype={
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
if(!H.k7(C.b.eu(u,t,35713))){s=C.b.es(u,t)
C.b.j3(u,t)
throw H.h(P.t("Error compiling shader '"+H.l(t)+"': "+H.l(s)))}return t},
hX:function(){var u,t,s,r,q,p
u=H.c([],[A.d1])
t=this.a
s=H.ad(C.b.bC(t,this.r,35721))
if(typeof s!=="number")return H.G(s)
r=0
for(;r<s;++r){q=C.b.el(t,this.r,r)
p=C.b.en(t,this.r,q.name)
C.a.h(u,new A.d1(t,q.name,p))}this.x=new A.f2(u)},
hZ:function(){var u,t,s,r,q,p
u=H.c([],[A.dW])
t=this.a
s=H.ad(C.b.bC(t,this.r,35718))
if(typeof s!=="number")return H.G(s)
r=0
for(;r<s;++r){q=C.b.em(t,this.r,r)
p=C.b.ev(t,this.r,q.name)
C.a.h(u,this.j1(q.type,q.size,q.name,p))}this.y=new A.iq(u)},
aG:function(a,b,c){var u,t
u=this.a
t=this.r
if(a===1)return new A.K(u,t,b,c)
else return A.k_(u,t,b,a,c)},
fj:function(a,b,c){var u,t
u=this.a
t=this.r
if(a===1)return new A.af(u,t,b,c)
else return A.k_(u,t,b,a,c)},
fk:function(a,b,c){var u,t
u=this.a
t=this.r
if(a===1)return new A.ag(u,t,b,c)
else return A.k_(u,t,b,a,c)},
bc:function(a,b){return new P.ec(a+" uniform variables are unsupported by all browsers.\n"+("Please change the type of "+H.l(b)+"."))},
j1:function(a,b,c,d){switch(a){case 5120:return this.aG(b,c,d)
case 5121:return this.aG(b,c,d)
case 5122:return this.aG(b,c,d)
case 5123:return this.aG(b,c,d)
case 5124:return this.aG(b,c,d)
case 5125:return this.aG(b,c,d)
case 5126:return new A.Z(this.a,this.r,c,d)
case 35664:return new A.ik(this.a,this.r,c,d)
case 35665:return new A.I(this.a,this.r,c,d)
case 35666:return new A.io(this.a,this.r,c,d)
case 35667:return new A.il(this.a,this.r,c,d)
case 35668:return new A.im(this.a,this.r,c,d)
case 35669:return new A.ip(this.a,this.r,c,d)
case 35674:return new A.ir(this.a,this.r,c,d)
case 35675:return new A.cB(this.a,this.r,c,d)
case 35676:return new A.at(this.a,this.r,c,d)
case 35678:return this.fj(b,c,d)
case 35680:return this.fk(b,c,d)
case 35670:throw H.h(this.bc("BOOL",c))
case 35671:throw H.h(this.bc("BOOL_VEC2",c))
case 35672:throw H.h(this.bc("BOOL_VEC3",c))
case 35673:throw H.h(this.bc("BOOL_VEC4",c))
default:throw H.h(P.t("Unknown uniform variable type "+H.l(a)+" for "+H.l(c)+"."))}}}
A.bI.prototype={
i:function(a){return this.b}}
A.dW.prototype={}
A.iq.prototype={
j:function(a,b){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<t;++s){r=u[s]
if(r.c===b)return r}return},
n:function(a,b){var u=this.j(0,b)
if(u==null)throw H.h(P.t("Required uniform value, "+b+", was not defined or used in shader."))
return u},
i:function(a){return this.S()},
jh:function(a){var u,t,s,r
for(u=this.a,t=u.length,s="",r=0;r<u.length;u.length===t||(0,H.E)(u),++r)s+=u[r].i(0)+a
return s},
S:function(){return this.jh("\n")}}
A.K.prototype={
i:function(a){return"Uniform1i: "+H.l(this.c)}}
A.il.prototype={
i:function(a){return"Uniform2i: "+H.l(this.c)}}
A.im.prototype={
i:function(a){return"Uniform3i: "+H.l(this.c)}}
A.ip.prototype={
i:function(a){return"Uniform4i: "+H.l(this.c)}}
A.ij.prototype={
i:function(a){return"Uniform1iv: "+H.l(this.c)},
sih:function(a){this.e=H.m(a,"$ib",[P.B],"$ab")}}
A.Z.prototype={
i:function(a){return"Uniform1f: "+H.l(this.c)}}
A.ik.prototype={
i:function(a){return"Uniform2f: "+H.l(this.c)}}
A.I.prototype={
i:function(a){return"Uniform3f: "+H.l(this.c)}}
A.io.prototype={
i:function(a){return"Uniform4f: "+H.l(this.c)}}
A.ir.prototype={
i:function(a){return"Uniform1Mat2 "+H.l(this.c)}}
A.cB.prototype={
ag:function(a){var u=new Float32Array(H.cU(H.m(a,"$ib",[P.z],"$ab")))
C.b.eh(this.a,this.d,!1,u)},
i:function(a){return"UniformMat3: "+H.l(this.c)}}
A.at.prototype={
ag:function(a){var u=new Float32Array(H.cU(H.m(a,"$ib",[P.z],"$ab")))
C.b.ei(this.a,this.d,!1,u)},
i:function(a){return"UniformMat4: "+H.l(this.c)}}
A.af.prototype={
i:function(a){return"UniformSampler2D: "+H.l(this.c)}}
A.ag.prototype={
i:function(a){return"UniformSamplerCube: "+H.l(this.c)}}
F.jJ.prototype={
$1:function(a){return new V.aa(Math.cos(a),Math.sin(a),0)},
$S:35}
F.jx.prototype={
$3:function(a,b,c){var u,t,s,r,q,p,o,n,m
u=b*6.283185307179586
t=this.a
s=this.b
r=J.kk(t.$1(u),s)
s=J.lE(J.kk(t.$1(u+3.141592653589793/this.c),s),r)
s=new V.U(s.a,s.b,s.c)
q=s.A(0,Math.sqrt(s.E(s)))
t=$.kV
if(t==null){t=new V.U(1,0,0)
$.kV=t
p=t}else p=t
t=q.au(!J.Y(q,p)?V.kZ():p)
o=t.A(0,Math.sqrt(t.E(t)))
t=o.au(q)
p=t.A(0,Math.sqrt(t.E(t)))
n=c*6.283185307179586
t=Math.cos(n)
s=this.d
m=Math.sin(n)
t=p.u(0,t*s)
s=o.u(0,m*s)
s=J.lD(r,new V.aa(t.a-s.a,t.b-s.b,t.c-s.c))
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
q=V.cH()
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
q=V.cH()
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
i:function(a){return this.S()},
D:function(a){var u,t
if(this.gdz())return a+"disposed"
u=a+C.j.ax(J.aH(this.a.e),0)+", "+C.j.ax(J.aH(this.b.e),0)+", "+C.j.ax(J.aH(this.c.e),0)+" {"
t=this.d
u=t!=null?u+(t.i(0)+", "):u+"-, "
t=this.e
return t!=null?u+(t.i(0)+"}"):u+"-}"},
S:function(){return this.D("")}}
F.fx.prototype={}
F.hQ.prototype={
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
F.bw.prototype={}
F.fU.prototype={}
F.ii.prototype={}
F.bP.prototype={}
F.dJ.prototype={
gw:function(){var u=this.e
if(u==null){u=D.Q()
this.e=u}return u},
aK:function(){var u,t
u=this.e
if(u!=null)++u.d
t=this.d.aK()||!1
if(!this.a.aK())t=!1
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
this.c.cB(new F.ii())
this.d.cB(new F.hQ())
u=this.e
if(u!=null)u.az(0)},
iQ:function(a0,a1){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a
u=this.a.c.length
a1.toString
t=$.bl()
s=a1.a
r=(s&t.a)!==0?1:0
if((s&$.bk().a)!==0)++r
if((s&$.bj().a)!==0)++r
if((s&$.bm().a)!==0)++r
if((s&$.bn().a)!==0)++r
if((s&$.cY().a)!==0)++r
if((s&$.cZ().a)!==0)++r
if((s&$.c6().a)!==0)++r
if((s&$.bi().a)!==0)++r
q=a1.gcJ(a1)
p=q*4
t=new Array(u*q)
t.fixed$length=Array
s=P.z
o=H.c(t,[s])
t=new Array(r)
t.fixed$length=Array
n=H.c(t,[Z.d4])
for(m=0,l=0;l<r;++l){k=a1.iL(l)
j=k.gcJ(k)
C.a.Y(n,l,new Z.d4(k,j,m*4,p,0))
for(i=0;i<u;++i){t=this.a.c
if(i>=t.length)return H.j(t,i)
h=t[i].jo(k)
g=m+i*q
for(f=0;f<h.length;++f){C.a.Y(o,g,h[f]);++g}}m+=j}H.m(o,"$ib",[s],"$ab")
t=a0.a
e=t.createBuffer()
C.b.al(t,34962,e)
C.b.dq(t,34962,new Float32Array(H.cU(o)),35044)
C.b.al(t,34962,null)
d=new Z.d5(new Z.e3(34962,e),n,a1)
d.sfz(H.c([],[Z.ck]))
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
C.a.h(d.b,new Z.ck(4,c.length,a))}return d},
i:function(a){var u=H.c([],[P.f])
if(this.a.c.length!==0){C.a.h(u,"Vertices:")
C.a.h(u,this.a.D("   "))}this.b.b
this.c.b
if(this.d.b.length!==0){C.a.h(u,"Faces:")
C.a.h(u,this.d.D("   "))}return C.a.m(u,"\n")},
aN:function(a){var u=this.e
if(u!=null)u.G(a)},
a5:function(){return this.aN(null)},
$ink:1}
F.hJ.prototype={
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
C.a.h(u,F.fw(l,k,i))
t.a.h(0,l)
t.a.h(0,i)
t.a.h(0,h)
C.a.h(u,F.fw(l,i,h))}else{m.h(0,k)
t.a.h(0,i)
t.a.h(0,h)
C.a.h(u,F.fw(k,i,h))
t.a.h(0,k)
t.a.h(0,h)
t.a.h(0,l)
C.a.h(u,F.fw(k,h,l))}o=!o}q=!q}return u},
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
aK:function(){var u,t,s,r
for(u=this.b,t=u.length,s=!0,r=0;r<u.length;u.length===t||(0,H.E)(u),++r)if(!u[r].cd())s=!1
return s},
cc:function(){var u,t,s,r
for(u=this.b,t=u.length,s=!0,r=0;r<u.length;u.length===t||(0,H.E)(u),++r)if(!u[r].cb())s=!1
return s},
i:function(a){return this.S()},
D:function(a){var u,t,s,r
u=H.c([],[P.f])
for(t=this.b,s=t.length,r=0;r<t.length;t.length===s||(0,H.E)(t),++r)C.a.h(u,t[r].D(a))
return C.a.m(u,"\n")},
S:function(){return this.D("")},
sfq:function(a){this.b=H.m(a,"$ib",[F.a5],"$ab")}}
F.hK.prototype={
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
i:function(a){return this.S()},
D:function(a){var u,t,s
u=H.c([],[P.f])
for(t=0;!1;++t){s=this.b
if(t>=0)return H.j(s,t)
C.a.h(u,s[t].D(a+(""+t+". ")))}return C.a.m(u,"\n")},
S:function(){return this.D("")},
sfC:function(a){this.b=H.m(a,"$ib",[F.bw],"$ab")}}
F.hL.prototype={
gl:function(a){return 0},
jJ:function(){var u,t
for(u=-1;!1;--u){t=this.b
return H.j(t,u)
t=t[u].gk9()
t=t.gk6(t)
if(t.gl(t).jZ(0,1)){t=this.b
return H.j(t,u)
t[u].bf()}}},
i:function(a){return this.S()},
D:function(a){var u,t,s
u=H.c([],[P.f])
for(t=this.b,s=0;!1;++s){if(s>=0)return H.j(t,s)
C.a.h(u,t[s].D(a))}return C.a.m(u,"\n")},
S:function(){return this.D("")},
sc0:function(a){this.b=H.m(a,"$ib",[F.bP],"$ab")}}
F.ay.prototype={
dv:function(a){var u,t,s,r,q,p,o
u=this.f
t=this.r
s=this.x
r=this.y
q=this.z
p=this.Q
o=this.ch
return F.k0(this.cx,s,p,u,t,r,q,a,o)},
jo:function(a){var u,t
if(a.v(0,$.bl())){u=this.f
t=[P.z]
if(u==null)return H.c([0,0,0],t)
else return H.c([u.a,u.b,u.c],t)}else if(a.v(0,$.bk())){u=this.r
t=[P.z]
if(u==null)return H.c([0,1,0],t)
else return H.c([u.a,u.b,u.c],t)}else if(a.v(0,$.bj())){u=this.x
t=[P.z]
if(u==null)return H.c([0,0,1],t)
else return H.c([u.a,u.b,u.c],t)}else if(a.v(0,$.bm())){u=this.y
t=[P.z]
if(u==null)return H.c([0,0],t)
else return H.c([u.a,u.b],t)}else if(a.v(0,$.bn())){u=this.z
t=[P.z]
if(u==null)return H.c([0,0,0],t)
else return H.c([u.a,u.b,u.c],t)}else if(a.v(0,$.cY())){u=this.Q
t=[P.z]
if(u==null)return H.c([1,1,1],t)
else return H.c([u.a,u.b,u.c],t)}else if(a.v(0,$.cZ())){u=this.Q
t=[P.z]
if(u==null)return H.c([1,1,1,1],t)
else return H.c([u.a,u.b,u.c,u.d],t)}else if(a.v(0,$.c6()))return H.c([this.ch],[P.z])
else if(a.v(0,$.bi())){u=H.c([-1,-1,-1,-1],[P.z])
return u}else return H.c([],[P.z])},
cd:function(){var u,t
u={}
if(this.r!=null)return!0
t=this.a
if(t!=null){t=t.e
if(t!=null)++t.d}u.a=V.cH()
this.d.O(0,new F.iJ(u))
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
if(t!=null)++t.d}u.a=V.cH()
this.d.O(0,new F.iI(u))
u=u.a
this.x=u.A(0,Math.sqrt(u.E(u)))
u=this.a
if(u!=null){u.a5()
u=this.a.e
if(u!=null)u.az(0)}return!0},
v:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.S()},
D:function(a){var u,t,s
u=H.c([],[P.f])
C.a.h(u,C.j.ax(J.aH(this.e),0))
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
S:function(){return this.D("")}}
F.iJ.prototype={
$1:function(a){var u,t
H.k(a,"$ia5")
u=a==null?null:a.d
if(u!=null){t=this.a
t.a=t.a.p(0,u)}},
$S:8}
F.iI.prototype={
$1:function(a){var u,t
H.k(a,"$ia5")
u=a==null?null:a.e
if(u!=null){t=this.a
t.a=t.a.p(0,u)}},
$S:8}
F.iz.prototype={
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
aK:function(){var u,t,s
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
i:function(a){return this.S()},
D:function(a){var u,t,s,r
this.N()
u=H.c([],[P.f])
for(t=this.c,s=t.length,r=0;r<t.length;t.length===s||(0,H.E)(t),++r)C.a.h(u,t[r].D(a))
return C.a.m(u,"\n")},
S:function(){return this.D("")},
sii:function(a){this.c=H.m(a,"$ib",[F.ay],"$ab")}}
F.iA.prototype={
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
C.a.O(this.c,new F.iB(this,b))
C.a.O(this.d,new F.iC(this,b))},
i:function(a){return this.S()},
D:function(a){var u,t,s,r
u=H.c([],[P.f])
for(t=this.b,s=t.length,r=0;r<t.length;t.length===s||(0,H.E)(t),++r)C.a.h(u,t[r].D(a))
for(t=this.c,s=t.length,r=0;r<t.length;t.length===s||(0,H.E)(t),++r)C.a.h(u,t[r].D(a))
for(t=this.d,s=t.length,r=0;r<t.length;t.length===s||(0,H.E)(t),++r)C.a.h(u,t[r].D(a))
return C.a.m(u,"\n")},
S:function(){return this.D("")},
sfs:function(a){this.b=H.m(a,"$ib",[F.a5],"$ab")},
sft:function(a){this.c=H.m(a,"$ib",[F.a5],"$ab")},
sfu:function(a){this.d=H.m(a,"$ib",[F.a5],"$ab")}}
F.iB.prototype={
$1:function(a){H.k(a,"$ia5")
if(!J.Y(a.a,this.a))this.b.$1(a)},
$S:8}
F.iC.prototype={
$1:function(a){var u
H.k(a,"$ia5")
u=this.a
if(!J.Y(a.a,u)&&!J.Y(a.b,u))this.b.$1(a)},
$S:8}
F.iD.prototype={
gl:function(a){return 0},
j:function(a,b){var u,t
if(b>=0){u=this.c
t=b-0
if(t>=0)return H.j(u,t)
return u[t]}else{u=this.b
return H.j(u,b)
return u[b]}},
i:function(a){return this.S()},
D:function(a){var u,t,s
u=H.c([],[P.f])
for(t=this.b,s=0;!1;++s){if(s>=0)return H.j(t,s)
C.a.h(u,t[s].D(a))}for(t=this.c,s=0;!1;++s){if(s>=0)return H.j(t,s)
C.a.h(u,t[s].D(a))}return C.a.m(u,"\n")},
S:function(){return this.D("")},
sfD:function(a){this.b=H.m(a,"$ib",[F.bw],"$ab")},
sfE:function(a){this.c=H.m(a,"$ib",[F.bw],"$ab")}}
F.iF.prototype={}
F.iE.prototype={
cr:function(a,b,c){return J.Y(b.f,c.f)}}
F.iG.prototype={}
F.ho.prototype={
jq:function(a){var u,t,s,r,q,p,o,n,m
H.m(a,"$ib",[F.ay],"$ab")
u=V.cH()
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
F.iH.prototype={
gl:function(a){return 0},
i:function(a){return this.S()},
D:function(a){var u,t,s
u=H.c([],[P.f])
for(t=this.b,s=0;!1;++s){if(s>=0)return H.j(t,s)
C.a.h(u,t[s].D(a))}return C.a.m(u,"\n")},
S:function(){return this.D("")},
sc0:function(a){this.b=H.m(a,"$ib",[F.bP],"$ab")}}
O.dt.prototype={
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
u=new D.bM(a,H.m(b,"$ie",[u],"$ae"),this,[u])
u.b=!0
this.a6(u)},
fU:function(a,b){var u=V.ak
u=new D.bN(a,H.m(b,"$ie",[u],"$ae"),this,[u])
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
a7=$.bl()
if(a0){b=$.bk()
a7=new Z.b2(a7.a|b.a)}if(a1){b=$.bj()
a7=new Z.b2(a7.a|b.a)}if(a2){b=$.bm()
a7=new Z.b2(a7.a|b.a)}if(a3){b=$.bn()
a7=new Z.b2(a7.a|b.a)}if(a5){b=$.bi()
a7=new Z.b2(a7.a|b.a)}return new A.h6(u,m,l,k,j,i,h,g,f,t,s,r,q,p,o,t+s+r+q+p+o,d,d,a4,a6,!0,!1,!1,c,a4,a,a0,a1,a2,a3,a5,!1,!1,!1,n,e.charCodeAt(0)==0?e:e,a7)},
W:function(a,b){H.m(a,"$ib",[T.dP],"$ab")},
an:function(a,b){var u,t,s,r,q
for(u=this.dx.a,u=new J.ap(u,u.length,0,[H.x(u,0)]);u.B();){t=u.d
t.toString
s=$.iy
if(s==null){s=new V.U(0,0,1)
$.iy=s}t.a=s
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
if(!(u instanceof Z.d5)){a5.e=null
u=null}if(u==null||!u.d.v(0,q)){u=r.r1
if(u)a5.d.aK()
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
if(n!=null)n.az(0)}l=a5.d.iQ(new Z.iL(a4.a),q)
l.aM($.bl()).e=this.a.Q.c
if(u)l.aM($.bk()).e=this.a.cx.c
if(p)l.aM($.bj()).e=this.a.ch.c
if(r.rx)l.aM($.bm()).e=this.a.cy.c
if(o)l.aM($.bn()).e=this.a.db.c
if(r.x1)l.aM($.bi()).e=this.a.dx.c
a5.e=l}u=T.dP
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
h=new Float32Array(H.cU(H.m(m.aa(0,!0),"$ib",p,"$ab")))
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
a0=$.cr
if(a0==null){a0=new V.aa(0,0,0)
$.cr=a0}a0=a.b3(a0)
a=b.b
C.b.t(a.a,a.d,a0.a,a0.b,a0.c)
a=$.cr
if(a==null){a=new V.aa(0,0,0)
$.cr=a}a=a2.b3(a)
a0=b.c
C.b.t(a0.a,a0.d,a.a,a.b,a.c)
a=a2.dZ(0)
a0=b.d
h=new Float32Array(H.cU(H.m(new V.dv(a.a,a.b,a.c,a.e,a.f,a.r,a.y,a.z,a.Q).aa(0,!0),"$ib",m,"$ab")))
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
u.aO(a4)
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
O.h4.prototype={}
O.du.prototype={
aH:function(){}}
O.h5.prototype={}
O.aS.prototype={
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
O.h7.prototype={
hT:function(a){var u=this.ch
if(!(Math.abs(u-a)<$.P().a)){this.ch=a
u=new D.R(this.b+".refraction",u,a,this,[P.z])
u.b=!0
this.a.a6(u)}},
aH:function(){this.bG()
this.hT(1)}}
O.h8.prototype={
c3:function(a){var u=this.ch
if(!(Math.abs(u-a)<$.P().a)){this.ch=a
u=new D.R(this.b+".shininess",u,a,this,[P.z])
u.b=!0
this.a.a6(u)}},
aH:function(){this.bG()
this.c3(100)}}
O.bW.prototype={}
T.dP.prototype={}
T.i5.prototype={}
V.b5.prototype={
aw:function(a,b){return!0},
i:function(a){return"all"},
$iaq:1}
V.aq.prototype={}
V.ds.prototype={
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
V.hy.prototype={
aw:function(a,b){return this.a<=b&&this.b>=b},
i:function(a){var u,t
u=H.jW(this.a)
t=H.jW(this.b)
return u+".."+t},
$iaq:1}
V.hI.prototype={
eO:function(a){var u,t
if(a.a.length<=0)throw H.h(P.t("May not create a SetMatcher with zero characters."))
u=new H.aQ([P.B,P.M])
for(t=new H.cl(a,a.gl(a),0,[H.ao(a,"w",0)]);t.B();)u.Y(0,t.d,!0)
this.shS(u)},
aw:function(a,b){return this.a.du(0,b)},
i:function(a){var u=this.a
return P.jY(new H.dn(u,[H.x(u,0)]),0,null)},
shS:function(a){this.a=H.m(a,"$iN",[P.B,P.M],"$aN")},
$iaq:1}
V.cv.prototype={
m:function(a,b){var u,t,s,r
for(u=this.c,t=u.length,s=0;s<t;++s){r=u[s]
if(r.b.b===b)return r}r=new V.cz(this.a.k(0,b))
r.sa1(H.c([],[V.aq]))
r.c=!1
C.a.h(this.c,r)
return r},
jd:function(a){var u,t,s,r
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.E)(u),++s){r=u[s]
if(r.aw(0,a))return r}return},
i:function(a){return this.b},
sib:function(a){this.c=H.m(a,"$ib",[V.cz],"$ab")}}
V.dU.prototype={
i:function(a){var u,t
u=H.kg(this.b,"\n","\\n")
t=H.kg(u,"\t","\\t")
return this.a+":"+this.c+':"'+t+'"'}}
V.cy.prototype={
ay:function(a,b,c){var u,t,s
H.m(c,"$ib",[P.f],"$ab")
for(u=c.length,t=0;t<c.length;c.length===u||(0,H.E)(c),++t){s=c[t]
this.c.Y(0,s,b)}},
i:function(a){return this.b},
shM:function(a){var u=P.f
this.c=H.m(a,"$iN",[u,u],"$aN")}}
V.i8.prototype={
k:function(a,b){var u=this.a.j(0,b)
if(u==null){u=new V.cv(this,b)
u.sib(H.c([],[V.cz]))
u.d=null
this.a.Y(0,b,u)}return u},
K:function(a){var u,t
u=this.b.j(0,a)
if(u==null){u=new V.cy(this,a)
t=P.f
u.shM(new H.aQ([t,t]))
this.b.Y(0,a,u)}return u},
ef:function(a){var u,t,s,r,q,p,o,n,m,l,k,j
u=H.c([],[V.dU])
t=this.c
s=[P.B]
r=H.c([],s)
for(q=a.length,p=null,o=0;!0;){if(o>=q){if(p!=null)C.a.h(u,p)
return u}n=C.j.aF(a,o)
m=t.jd(n)
if(m==null){if(p==null){C.a.h(r,n)
l=P.jY(r,0,null)
throw H.h(P.t("Untokenizable string [state: "+t.b+", index "+o+']: "'+l+'"'))}C.a.h(u,p)
o=p.c+1
r=H.c([],s)
t=this.c
p=null}else{if(!m.c)C.a.h(r,n)
t=m.b
if(t.d!=null){l=P.jY(r,0,null)
k=t.d
j=k.c.j(0,l)
p=new V.dU(j==null?k.b:j,l,o)}++o}}},
si2:function(a){this.a=H.m(a,"$iN",[P.f,V.cv],"$aN")},
si4:function(a){this.b=H.m(a,"$iN",[P.f,V.cy],"$aN")}}
V.cz.prototype={
i:function(a){return this.b.b+": "+this.cK(0)}}
X.d7.prototype={$ibc:1}
X.fF.prototype={
gw:function(){var u=this.x
if(u==null){u=D.Q()
this.x=u}return u}}
X.dC.prototype={
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
$ibc:1,
$id7:1}
X.dO.prototype={}
V.bq.prototype={
b8:function(a){this.b=new P.fJ(C.L)
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
V.jI.prototype={
$1:function(a){H.k(a,"$ib_")
P.kf(C.d.ee(this.a.gji(),2)+" fps")},
$S:39}
V.fi.prototype={
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
u=V.i9()
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
C.a.h(u.k(0,"OpenDoubleStr").m(0,"OpenDoubleStr").a,new V.b5())
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
C.a.h(u.k(0,"OpenSingleStr").m(0,"OpenSingleStr").a,new V.b5())
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
V.fG.prototype={
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
u=V.i9()
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
C.a.h(u.k(0,"Slash").m(0,"Sym").a,new V.b5())
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
V.fH.prototype={
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
u=V.i9()
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
C.a.h(u.k(0,"OpenStr").m(0,"OpenStr").a,new V.b5())
C.a.h(u.k(0,"Start").m(0,"Other").a,new V.b5())
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
V.hu.prototype={
e6:function(a,b){H.m(b,"$ib",[P.f],"$ab")
this.sbQ(H.c([],[[P.b,W.aw]]))
this.J(C.a.m(b,"\n"),"#111")},
bx:function(a){},
be:function(){return}}
V.hM.prototype={
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
W.ac(u,"scroll",H.n(new V.hO(s),{func:1,ret:-1,args:[o]}),!1,o)},
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
C.k.C(t,l)}else{k=P.l3(C.B,n,C.x,!1)
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
u=new V.fi("dart")
u.b8("dart")
t=new V.fG("glsl")
t.b8("glsl")
s=new V.fH("html")
s.b8("html")
r=C.a.jf(H.c([u,t,s],[V.bq]),new V.hP(a))
if(r!=null)return r
u=new V.hu("plain")
u.b8("plain")
return u},
di:function(a4,a5,a6,a7){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3
H.m(a7,"$ib",[P.f],"$ab")
u=H.c([],[P.B])
for(t=!1,s=0;s<a7.length;++s){r=a7[s]
if(J.kb(r).bE(r,"+")){C.a.Y(a7,s,C.j.b6(r,1))
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
m=P.l3(C.B,a4,C.x,!1)
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
for(a3=C.a.gR(r);a3.B();)C.v.C(c,a3.gH(a3))
C.m.C(e,d)
C.m.C(e,c)
C.o.C(n,e)}},
hY:function(){var u,t,s,r
if(this.b!=null)return
u=V.i9()
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
C.a.h(u.k(0,"Start").m(0,"Other").a,new V.b5())
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
V.hO.prototype={
$1:function(a){P.kP(C.q,new V.hN(this.a))},
$S:40}
V.hN.prototype={
$0:function(){var u,t,s
u=C.d.af(document.documentElement.scrollTop)
t=this.a.style
s=H.l(-0.01*u)+"px"
t.top=s},
$S:2}
V.hP.prototype={
$1:function(a){return H.k(a,"$ibq").a===this.a},
$S:41}
Q.jF.prototype={
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
u=J.dk.prototype
u.eH=u.i
u=P.e.prototype
u.eG=u.bB
u=W.T.prototype
u.bF=u.a8
u=W.ex.prototype
u.eK=u.ak
u=O.du.prototype
u.eJ=u.aH
u=O.aS.prototype
u.bG=u.aH
u=V.ds.prototype
u.eI=u.aw
u.cK=u.i})();(function installTearOffs(){var u=hunkHelpers._static_1,t=hunkHelpers._static_0,s=hunkHelpers.installStaticTearOff,r=hunkHelpers.installInstanceTearOff,q=hunkHelpers._instance_2u,p=hunkHelpers._instance_0u,o=hunkHelpers._instance_1u,n=hunkHelpers._instance_0i
u(P,"mG","mo",9)
u(P,"mH","mp",9)
u(P,"mI","mq",9)
t(P,"lc","mF",3)
s(W,"mS",4,null,["$4"],["ms"],21,0)
s(W,"mT",4,null,["$4"],["mt"],21,0)
var m
r(m=E.aj.prototype,"ge4",0,0,null,["$1","$0"],["e5","jx"],0,0)
r(m,"ge2",0,0,null,["$1","$0"],["e3","ju"],0,0)
q(m,"gjs","jt",5)
q(m,"gjv","jw",5)
r(m=E.dT.prototype,"gcL",0,0,null,["$1","$0"],["cN","cM"],0,0)
p(m,"gjM","ea",3)
o(m=X.e_.prototype,"gh8","h9",10)
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
r(D.bs.prototype,"geV",0,0,null,["$1","$0"],["ap","eW"],0,0)
r(m=D.dm.prototype,"gd6",0,0,null,["$1","$0"],["d7","he"],0,0)
o(m,"ghr","hs",30)
q(m,"gfP","fQ",22)
q(m,"ghv","hw",22)
n(V.O.prototype,"gl","cq",23)
n(V.U.prototype,"gl","cq",23)
r(m=U.cj.prototype,"gaD",0,0,null,["$1","$0"],["M","a0"],0,0)
q(m,"gfN","fO",24)
q(m,"ght","hu",24)
r(m=U.e0.prototype,"gaD",0,0,null,["$1","$0"],["M","a0"],0,0)
o(m,"gbT","bU",1)
o(m,"gbV","bW",1)
o(m,"gbX","bY",1)
r(m=U.e1.prototype,"gaD",0,0,null,["$1","$0"],["M","a0"],0,0)
o(m,"gbT","bU",1)
o(m,"gbV","bW",1)
o(m,"gbX","bY",1)
o(m,"gfG","fH",1)
o(m,"gfI","fJ",1)
o(m,"gi9","ia",1)
o(m,"gi7","i8",1)
o(m,"gi5","i6",1)
o(U.e2.prototype,"gfL","fM",1)
r(m=M.dd.prototype,"gah",0,0,null,["$1","$0"],["aq","eY"],0,0)
q(m,"gfZ","h_",5)
q(m,"gh0","h1",5)
r(m=O.dt.prototype,"gfX",0,0,null,["$1","$0"],["a6","fY"],0,0)
r(m,"ghO",0,0,null,["$1","$0"],["dc","hP"],0,0)
q(m,"gfR","fS",25)
q(m,"gfT","fU",25)
r(X.dC.prototype,"gcO",0,0,null,["$1","$0"],["aE","f7"],0,0)})();(function inheritance(){var u=hunkHelpers.mixin,t=hunkHelpers.inherit,s=hunkHelpers.inheritMany
t(P.L,null)
s(P.L,[H.jU,J.a,J.ap,P.ek,P.e,H.cl,P.aP,H.bK,H.dZ,H.hz,H.ie,P.bt,H.cb,H.eC,P.a6,H.fV,H.fW,H.fQ,P.eI,P.b4,P.aA,P.e4,P.hX,P.cw,P.hY,P.b_,P.ae,P.js,P.jg,P.bX,P.ej,P.w,P.cc,P.fK,P.jq,P.M,P.ai,P.a3,P.aM,P.hs,P.dL,P.ec,P.fE,P.bu,P.b,P.N,P.J,P.am,P.f,P.be,W.fe,W.bA,W.A,W.dA,W.ex,W.jl,W.de,W.as,W.jf,W.eN,P.ja,O.a2,O.cm,E.f7,E.aj,E.hA,E.dT,Z.e3,Z.iL,Z.d5,Z.ck,Z.b2,D.fa,D.bJ,D.y,X.d6,X.dl,X.fS,X.fY,X.ar,X.hf,X.ia,X.e_,D.bs,D.a4,D.dD,D.dK,D.dQ,D.dR,D.dS,V.a1,V.b6,V.fs,V.dv,V.ak,V.a9,V.aa,V.dH,V.O,V.U,U.e0,U.e1,U.e2,M.dd,A.d1,A.f2,A.h6,A.cA,A.cE,A.cC,A.cF,A.cD,A.cG,A.bI,A.dW,A.iq,F.a5,F.fx,F.bw,F.fU,F.bP,F.dJ,F.hJ,F.hK,F.hL,F.ay,F.iz,F.iA,F.iD,F.iF,F.iG,F.iH,O.bW,O.du,T.i5,V.b5,V.aq,V.ds,V.hy,V.hI,V.cv,V.dU,V.cy,V.i8,X.d7,X.dO,X.dC,V.bq,V.hM])
s(J.a,[J.fO,J.dj,J.dk,J.aC,J.bv,J.b8,H.cp,W.d,W.f0,W.d2,W.aK,W.aL,W.S,W.e6,W.fj,W.fk,W.da,W.e8,W.dc,W.ea,W.fm,W.o,W.ed,W.aO,W.fI,W.ef,W.dq,W.h9,W.el,W.em,W.aU,W.en,W.eq,W.aV,W.eu,W.dF,W.ew,W.aX,W.ey,W.aY,W.eD,W.aD,W.eG,W.i7,W.b0,W.eJ,W.ic,W.iv,W.eO,W.eQ,W.eS,W.eU,W.eW,P.ba,P.eh,P.bd,P.es,P.hx,P.eE,P.bf,P.eL,P.f3,P.e5,P.d3,P.df,P.dE,P.bT,P.dI,P.dX,P.eA])
s(J.dk,[J.ht,J.bz,J.b9])
t(J.jT,J.aC)
s(J.bv,[J.di,J.fP])
t(P.fX,P.ek)
s(P.fX,[H.dY,W.iS,W.ah,P.fA])
t(H.q,H.dY)
s(P.e,[H.fp,H.h0,H.cI])
s(H.fp,[H.bO,H.dn])
s(P.aP,[H.h1,H.iM])
t(H.h2,H.bO)
s(P.bt,[H.hp,H.fR,H.it,H.ih,H.f9,H.hG,P.dB,P.aI,P.iu,P.is,P.bU,P.fc,P.fh])
s(H.cb,[H.jK,H.i2,H.jB,H.jC,H.jD,P.iO,P.iN,P.iP,P.iQ,P.jp,P.jo,P.iY,P.j1,P.iZ,P.j_,P.j0,P.j4,P.j5,P.j3,P.j2,P.hZ,P.i_,P.ju,P.jd,P.jc,P.je,P.h_,P.fn,P.fo,W.fq,W.hb,W.hd,W.hF,W.hW,W.iX,W.hn,W.hm,W.jh,W.ji,W.jn,W.jr,P.jw,P.fB,P.fC,P.f5,E.hB,E.hC,E.hD,E.i6,D.fu,D.fv,F.jJ,F.jx,F.iJ,F.iI,F.iB,F.iC,V.jI,V.hO,V.hN,V.hP,Q.jF])
s(H.i2,[H.hU,H.c9])
t(P.fZ,P.a6)
s(P.fZ,[H.aQ,W.iR])
t(H.dx,H.cp)
s(H.dx,[H.cM,H.cO])
t(H.cN,H.cM)
t(H.co,H.cN)
t(H.cP,H.cO)
t(H.dy,H.cP)
s(H.dy,[H.hg,H.hh,H.hi,H.hj,H.hk,H.dz,H.hl])
t(P.jb,P.js)
t(P.j9,P.jg)
t(P.cd,P.hY)
t(P.fr,P.cc)
s(P.cd,[P.fJ,P.ix])
t(P.iw,P.fr)
s(P.a3,[P.z,P.B])
s(P.aI,[P.bS,P.fL])
s(W.d,[W.C,W.fz,W.aW,W.cQ,W.aZ,W.aE,W.cS,W.iK,W.cJ,P.f6,P.bG])
s(W.C,[W.T,W.bp,W.cg,W.cK])
s(W.T,[W.u,P.p])
s(W.u,[W.d0,W.f1,W.c8,W.bo,W.bH,W.aw,W.fD,W.dg,W.hH,W.bV,W.dM,W.dN,W.i1,W.cx])
s(W.aK,[W.ce,W.ff,W.fg])
t(W.fd,W.aL)
t(W.cf,W.e6)
t(W.e9,W.e8)
t(W.db,W.e9)
t(W.eb,W.ea)
t(W.fl,W.eb)
t(W.aN,W.d2)
t(W.ee,W.ed)
t(W.fy,W.ee)
t(W.eg,W.ef)
t(W.bL,W.eg)
t(W.dh,W.cg)
t(W.by,W.o)
s(W.by,[W.aR,W.a7,W.aF])
t(W.ha,W.el)
t(W.hc,W.em)
t(W.eo,W.en)
t(W.he,W.eo)
t(W.er,W.eq)
t(W.cq,W.er)
t(W.ev,W.eu)
t(W.hv,W.ev)
t(W.hE,W.ew)
t(W.cR,W.cQ)
t(W.hR,W.cR)
t(W.ez,W.ey)
t(W.hS,W.ez)
t(W.hV,W.eD)
t(W.eH,W.eG)
t(W.i3,W.eH)
t(W.cT,W.cS)
t(W.i4,W.cT)
t(W.eK,W.eJ)
t(W.ib,W.eK)
t(W.b3,W.a7)
t(W.eP,W.eO)
t(W.iT,W.eP)
t(W.e7,W.dc)
t(W.eR,W.eQ)
t(W.j6,W.eR)
t(W.eT,W.eS)
t(W.ep,W.eT)
t(W.eV,W.eU)
t(W.jj,W.eV)
t(W.eX,W.eW)
t(W.jk,W.eX)
t(W.iU,W.iR)
t(W.iV,P.hX)
t(W.k1,W.iV)
t(W.iW,P.cw)
t(W.jm,W.ex)
t(P.ab,P.ja)
t(P.ei,P.eh)
t(P.fT,P.ei)
t(P.et,P.es)
t(P.hq,P.et)
t(P.ct,P.p)
t(P.eF,P.eE)
t(P.i0,P.eF)
t(P.eM,P.eL)
t(P.id,P.eM)
t(P.f4,P.e5)
t(P.hr,P.bG)
t(P.eB,P.eA)
t(P.hT,P.eB)
s(E.f7,[Z.d4,A.cu,T.dP])
s(D.y,[D.bM,D.bN,D.R,X.hw])
s(X.hw,[X.dr,X.bb,X.cn,X.dV])
s(O.a2,[D.dm,U.cj])
s(D.fa,[U.fb,U.a8])
t(U.d8,U.a8)
t(A.h3,A.cu)
s(A.dW,[A.K,A.il,A.im,A.ip,A.ij,A.Z,A.ik,A.I,A.io,A.ir,A.cB,A.at,A.af,A.ag])
t(F.hQ,F.fx)
t(F.ii,F.fU)
t(F.iE,F.iF)
t(F.ho,F.iG)
t(O.dt,O.bW)
s(O.du,[O.h4,O.h5,O.aS])
s(O.aS,[O.h7,O.h8])
s(V.ds,[V.al,V.cz])
t(X.fF,X.dO)
s(V.bq,[V.fi,V.fG,V.fH,V.hu])
u(H.dY,H.dZ)
u(H.cM,P.w)
u(H.cN,H.bK)
u(H.cO,P.w)
u(H.cP,H.bK)
u(P.ek,P.w)
u(W.e6,W.fe)
u(W.e8,P.w)
u(W.e9,W.A)
u(W.ea,P.w)
u(W.eb,W.A)
u(W.ed,P.w)
u(W.ee,W.A)
u(W.ef,P.w)
u(W.eg,W.A)
u(W.el,P.a6)
u(W.em,P.a6)
u(W.en,P.w)
u(W.eo,W.A)
u(W.eq,P.w)
u(W.er,W.A)
u(W.eu,P.w)
u(W.ev,W.A)
u(W.ew,P.a6)
u(W.cQ,P.w)
u(W.cR,W.A)
u(W.ey,P.w)
u(W.ez,W.A)
u(W.eD,P.a6)
u(W.eG,P.w)
u(W.eH,W.A)
u(W.cS,P.w)
u(W.cT,W.A)
u(W.eJ,P.w)
u(W.eK,W.A)
u(W.eO,P.w)
u(W.eP,W.A)
u(W.eQ,P.w)
u(W.eR,W.A)
u(W.eS,P.w)
u(W.eT,W.A)
u(W.eU,P.w)
u(W.eV,W.A)
u(W.eW,P.w)
u(W.eX,W.A)
u(P.eh,P.w)
u(P.ei,W.A)
u(P.es,P.w)
u(P.et,W.A)
u(P.eE,P.w)
u(P.eF,W.A)
u(P.eL,P.w)
u(P.eM,W.A)
u(P.e5,P.a6)
u(P.eA,P.w)
u(P.eB,W.A)})();(function constants(){var u=hunkHelpers.makeConstList
C.n=W.bo.prototype
C.p=W.bH.prototype
C.k=W.aw.prototype
C.I=W.da.prototype
C.K=W.dg.prototype
C.y=W.dh.prototype
C.M=J.a.prototype
C.a=J.aC.prototype
C.h=J.di.prototype
C.r=J.dj.prototype
C.d=J.bv.prototype
C.j=J.b8.prototype
C.T=J.b9.prototype
C.X=W.cq.prototype
C.C=J.ht.prototype
C.D=W.dF.prototype
C.b=P.bT.prototype
C.v=W.bV.prototype
C.o=W.dM.prototype
C.m=W.dN.prototype
C.w=J.bz.prototype
C.E=W.b3.prototype
C.F=W.cJ.prototype
C.G=new P.hs()
C.H=new P.ix()
C.l=new P.jb()
C.c=new A.bI(0,"ColorSourceType.None")
C.i=new A.bI(1,"ColorSourceType.Solid")
C.e=new A.bI(2,"ColorSourceType.Texture2D")
C.f=new A.bI(3,"ColorSourceType.TextureCube")
C.q=new P.aM(0)
C.J=new P.aM(5e6)
C.L=new P.fK("element",!0,!1,!1,!1)
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
C.x=new P.iw(!1)})();(function staticFields(){$.aJ=0
$.ca=null
$.ko=null
$.k3=!1
$.lf=null
$.la=null
$.lk=null
$.jy=null
$.jE=null
$.kc=null
$.bY=null
$.cV=null
$.cW=null
$.k4=!1
$.X=C.l
$.b7=null
$.jR=null
$.kv=null
$.ku=null
$.kB=null
$.kF=null
$.cr=null
$.kK=null
$.kT=null
$.kX=null
$.kV=null
$.kW=null
$.iy=null
$.kU=null
$.kE=null})();(function lazyInitializers(){var u=hunkHelpers.lazy
u($,"ng","ln",function(){return H.le("_$dart_dartClosure")})
u($,"nh","kh",function(){return H.le("_$dart_js")})
u($,"nm","lo",function(){return H.b1(H.ig({
toString:function(){return"$receiver$"}}))})
u($,"nn","lp",function(){return H.b1(H.ig({$method$:null,
toString:function(){return"$receiver$"}}))})
u($,"no","lq",function(){return H.b1(H.ig(null))})
u($,"np","lr",function(){return H.b1(function(){var $argumentsExpr$='$arguments$'
try{null.$method$($argumentsExpr$)}catch(t){return t.message}}())})
u($,"ns","lu",function(){return H.b1(H.ig(void 0))})
u($,"nt","lv",function(){return H.b1(function(){var $argumentsExpr$='$arguments$'
try{(void 0).$method$($argumentsExpr$)}catch(t){return t.message}}())})
u($,"nr","lt",function(){return H.b1(H.kR(null))})
u($,"nq","ls",function(){return H.b1(function(){try{null.$method$}catch(t){return t.message}}())})
u($,"nv","lx",function(){return H.b1(H.kR(void 0))})
u($,"nu","lw",function(){return H.b1(function(){try{(void 0).$method$}catch(t){return t.message}}())})
u($,"nK","ki",function(){return P.mn()})
u($,"nO","d_",function(){return[]})
u($,"nN","lC",function(){return P.mf("^[\\-\\.0-9A-Z_a-z~]*$",!0,!1)})
u($,"nL","lB",function(){return P.ky(["A","ABBR","ACRONYM","ADDRESS","AREA","ARTICLE","ASIDE","AUDIO","B","BDI","BDO","BIG","BLOCKQUOTE","BR","BUTTON","CANVAS","CAPTION","CENTER","CITE","CODE","COL","COLGROUP","COMMAND","DATA","DATALIST","DD","DEL","DETAILS","DFN","DIR","DIV","DL","DT","EM","FIELDSET","FIGCAPTION","FIGURE","FONT","FOOTER","FORM","H1","H2","H3","H4","H5","H6","HEADER","HGROUP","HR","I","IFRAME","IMG","INPUT","INS","KBD","LABEL","LEGEND","LI","MAP","MARK","MENU","METER","NAV","NOBR","OL","OPTGROUP","OPTION","OUTPUT","P","PRE","PROGRESS","Q","S","SAMP","SECTION","SELECT","SMALL","SOURCE","SPAN","STRIKE","STRONG","SUB","SUMMARY","SUP","TABLE","TBODY","TD","TEXTAREA","TFOOT","TH","THEAD","TIME","TR","TRACK","TT","U","UL","VAR","VIDEO","WBR"],P.f)})
u($,"nM","kj",function(){return P.kx(P.f,P.bu)})
u($,"nD","lA",function(){return Z.az(0)})
u($,"nx","ly",function(){return Z.az(511)})
u($,"nF","bl",function(){return Z.az(1)})
u($,"nE","bk",function(){return Z.az(2)})
u($,"nz","bj",function(){return Z.az(4)})
u($,"nG","bm",function(){return Z.az(8)})
u($,"nH","bn",function(){return Z.az(16)})
u($,"nA","cY",function(){return Z.az(32)})
u($,"nB","cZ",function(){return Z.az(64)})
u($,"nC","lz",function(){return Z.az(96)})
u($,"nI","c6",function(){return Z.az(128)})
u($,"ny","bi",function(){return Z.az(256)})
u($,"nf","lm",function(){return new V.fs(1e-9)})
u($,"ne","P",function(){return $.lm()})})()
var v={mangledGlobalNames:{B:"int",z:"double",a3:"num",f:"String",M:"bool",J:"Null",b:"List"},mangledNames:{},getTypeFromName:getGlobalFromName,metadata:[],types:[{func:1,ret:-1,opt:[D.y]},{func:1,ret:-1,args:[D.y]},{func:1,ret:P.J},{func:1,ret:-1},{func:1,ret:-1,args:[W.a7]},{func:1,ret:-1,args:[P.B,[P.e,E.aj]]},{func:1,ret:-1,args:[P.f,,]},{func:1,ret:P.J,args:[D.y]},{func:1,ret:P.J,args:[F.a5]},{func:1,ret:-1,args:[{func:1,ret:-1}]},{func:1,ret:-1,args:[W.o]},{func:1,ret:-1,args:[W.aF]},{func:1,ret:P.J,args:[,]},{func:1,ret:P.J,args:[,,]},{func:1,ret:P.f,args:[P.B]},{func:1,ret:P.M,args:[W.C]},{func:1,args:[,]},{func:1,ret:P.M,args:[W.as]},{func:1,ret:P.M,args:[P.f]},{func:1,ret:P.J,args:[{func:1,ret:-1,args:[D.y]}]},{func:1,ret:-1,args:[W.aR]},{func:1,ret:P.M,args:[W.T,P.f,P.f,W.bA]},{func:1,ret:-1,args:[P.B,[P.e,D.a4]]},{func:1,ret:P.z},{func:1,ret:-1,args:[P.B,[P.e,U.a8]]},{func:1,ret:-1,args:[P.B,[P.e,V.ak]]},{func:1,args:[W.o]},{func:1,ret:P.f,args:[P.f]},{func:1,ret:-1,args:[W.C,W.C]},{func:1,ret:W.T,args:[W.C]},{func:1,ret:P.M,args:[[P.e,D.a4]]},{func:1,ret:[P.aA,,],args:[,]},{func:1,ret:P.J,args:[,],opt:[P.am]},{func:1,ret:-1,args:[P.f,P.f]},{func:1,ret:P.J,args:[P.a3]},{func:1,ret:V.aa,args:[P.z]},{func:1,ret:P.J,args:[F.ay,P.z,P.z]},{func:1,args:[P.f]},{func:1,args:[,P.f]},{func:1,ret:P.J,args:[P.b_]},{func:1,ret:P.J,args:[W.o]},{func:1,ret:P.M,args:[V.bq]},{func:1,ret:P.J,args:[{func:1,ret:-1}]},{func:1,ret:-1,args:[W.b3]}],interceptorsByTag:null,leafTags:null};(function nativeSupport(){!function(){var u=function(a){var o={}
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
hunkHelpers.setOrUpdateInterceptorsByTag({ArrayBuffer:J.a,AnimationEffectReadOnly:J.a,AnimationEffectTiming:J.a,AnimationEffectTimingReadOnly:J.a,AnimationTimeline:J.a,AnimationWorkletGlobalScope:J.a,AuthenticatorAssertionResponse:J.a,AuthenticatorAttestationResponse:J.a,AuthenticatorResponse:J.a,BackgroundFetchFetch:J.a,BackgroundFetchManager:J.a,BackgroundFetchSettledFetch:J.a,BarProp:J.a,BarcodeDetector:J.a,BluetoothRemoteGATTDescriptor:J.a,Body:J.a,BudgetState:J.a,CacheStorage:J.a,CanvasGradient:J.a,CanvasPattern:J.a,CanvasRenderingContext2D:J.a,Client:J.a,Clients:J.a,CookieStore:J.a,Coordinates:J.a,Credential:J.a,CredentialUserData:J.a,CredentialsContainer:J.a,Crypto:J.a,CryptoKey:J.a,CSS:J.a,CSSVariableReferenceValue:J.a,CustomElementRegistry:J.a,DataTransfer:J.a,DataTransferItem:J.a,DeprecatedStorageInfo:J.a,DeprecatedStorageQuota:J.a,DeprecationReport:J.a,DetectedBarcode:J.a,DetectedFace:J.a,DetectedText:J.a,DeviceAcceleration:J.a,DeviceRotationRate:J.a,DirectoryEntry:J.a,DirectoryReader:J.a,DocumentOrShadowRoot:J.a,DocumentTimeline:J.a,DOMError:J.a,Iterator:J.a,DOMMatrix:J.a,DOMMatrixReadOnly:J.a,DOMParser:J.a,DOMPoint:J.a,DOMPointReadOnly:J.a,DOMQuad:J.a,DOMStringMap:J.a,Entry:J.a,External:J.a,FaceDetector:J.a,FederatedCredential:J.a,FileEntry:J.a,DOMFileSystem:J.a,FontFace:J.a,FontFaceSource:J.a,FormData:J.a,GamepadButton:J.a,GamepadPose:J.a,Geolocation:J.a,Position:J.a,Headers:J.a,HTMLHyperlinkElementUtils:J.a,IdleDeadline:J.a,ImageBitmap:J.a,ImageBitmapRenderingContext:J.a,ImageCapture:J.a,ImageData:J.a,InputDeviceCapabilities:J.a,IntersectionObserver:J.a,IntersectionObserverEntry:J.a,InterventionReport:J.a,KeyframeEffect:J.a,KeyframeEffectReadOnly:J.a,MediaCapabilities:J.a,MediaCapabilitiesInfo:J.a,MediaDeviceInfo:J.a,MediaError:J.a,MediaKeyStatusMap:J.a,MediaKeySystemAccess:J.a,MediaKeys:J.a,MediaKeysPolicy:J.a,MediaMetadata:J.a,MediaSession:J.a,MediaSettingsRange:J.a,MemoryInfo:J.a,MessageChannel:J.a,Metadata:J.a,MutationObserver:J.a,WebKitMutationObserver:J.a,MutationRecord:J.a,NavigationPreloadManager:J.a,Navigator:J.a,NavigatorAutomationInformation:J.a,NavigatorConcurrentHardware:J.a,NavigatorCookies:J.a,NavigatorUserMediaError:J.a,NodeFilter:J.a,NodeIterator:J.a,NonDocumentTypeChildNode:J.a,NonElementParentNode:J.a,NoncedElement:J.a,OffscreenCanvasRenderingContext2D:J.a,OverconstrainedError:J.a,PaintRenderingContext2D:J.a,PaintSize:J.a,PaintWorkletGlobalScope:J.a,PasswordCredential:J.a,Path2D:J.a,PaymentAddress:J.a,PaymentInstruments:J.a,PaymentManager:J.a,PaymentResponse:J.a,PerformanceEntry:J.a,PerformanceLongTaskTiming:J.a,PerformanceMark:J.a,PerformanceMeasure:J.a,PerformanceNavigation:J.a,PerformanceNavigationTiming:J.a,PerformanceObserver:J.a,PerformanceObserverEntryList:J.a,PerformancePaintTiming:J.a,PerformanceResourceTiming:J.a,PerformanceServerTiming:J.a,PerformanceTiming:J.a,Permissions:J.a,PhotoCapabilities:J.a,PositionError:J.a,Presentation:J.a,PresentationReceiver:J.a,PublicKeyCredential:J.a,PushManager:J.a,PushMessageData:J.a,PushSubscription:J.a,PushSubscriptionOptions:J.a,RelatedApplication:J.a,ReportBody:J.a,ReportingObserver:J.a,ResizeObserver:J.a,ResizeObserverEntry:J.a,RTCCertificate:J.a,RTCIceCandidate:J.a,mozRTCIceCandidate:J.a,RTCLegacyStatsReport:J.a,RTCRtpContributingSource:J.a,RTCRtpReceiver:J.a,RTCRtpSender:J.a,RTCSessionDescription:J.a,mozRTCSessionDescription:J.a,RTCStatsResponse:J.a,Screen:J.a,ScrollState:J.a,ScrollTimeline:J.a,Selection:J.a,SharedArrayBuffer:J.a,SpeechRecognitionAlternative:J.a,SpeechSynthesisVoice:J.a,StaticRange:J.a,StorageManager:J.a,StyleMedia:J.a,StylePropertyMap:J.a,StylePropertyMapReadonly:J.a,SyncManager:J.a,TaskAttributionTiming:J.a,TextDetector:J.a,TextMetrics:J.a,TrackDefault:J.a,TreeWalker:J.a,TrustedHTML:J.a,TrustedScriptURL:J.a,TrustedURL:J.a,UnderlyingSourceBase:J.a,URLSearchParams:J.a,VRCoordinateSystem:J.a,VRDisplayCapabilities:J.a,VREyeParameters:J.a,VRFrameData:J.a,VRFrameOfReference:J.a,VRPose:J.a,VRStageBounds:J.a,VRStageBoundsPoint:J.a,VRStageParameters:J.a,ValidityState:J.a,VideoPlaybackQuality:J.a,VideoTrack:J.a,VTTRegion:J.a,WindowClient:J.a,WorkletAnimation:J.a,WorkletGlobalScope:J.a,XPathEvaluator:J.a,XPathExpression:J.a,XPathNSResolver:J.a,XPathResult:J.a,XMLSerializer:J.a,XSLTProcessor:J.a,Bluetooth:J.a,BluetoothCharacteristicProperties:J.a,BluetoothRemoteGATTServer:J.a,BluetoothRemoteGATTService:J.a,BluetoothUUID:J.a,BudgetService:J.a,Cache:J.a,DOMFileSystemSync:J.a,DirectoryEntrySync:J.a,DirectoryReaderSync:J.a,EntrySync:J.a,FileEntrySync:J.a,FileReaderSync:J.a,FileWriterSync:J.a,HTMLAllCollection:J.a,Mojo:J.a,MojoHandle:J.a,MojoWatcher:J.a,NFC:J.a,PagePopupController:J.a,Report:J.a,Request:J.a,Response:J.a,SubtleCrypto:J.a,USBAlternateInterface:J.a,USBConfiguration:J.a,USBDevice:J.a,USBEndpoint:J.a,USBInTransferResult:J.a,USBInterface:J.a,USBIsochronousInTransferPacket:J.a,USBIsochronousInTransferResult:J.a,USBIsochronousOutTransferPacket:J.a,USBIsochronousOutTransferResult:J.a,USBOutTransferResult:J.a,WorkerLocation:J.a,WorkerNavigator:J.a,Worklet:J.a,IDBCursor:J.a,IDBCursorWithValue:J.a,IDBFactory:J.a,IDBIndex:J.a,IDBKeyRange:J.a,IDBObjectStore:J.a,IDBObservation:J.a,IDBObserver:J.a,IDBObserverChanges:J.a,SVGAngle:J.a,SVGAnimatedAngle:J.a,SVGAnimatedBoolean:J.a,SVGAnimatedEnumeration:J.a,SVGAnimatedInteger:J.a,SVGAnimatedLength:J.a,SVGAnimatedLengthList:J.a,SVGAnimatedNumber:J.a,SVGAnimatedNumberList:J.a,SVGAnimatedPreserveAspectRatio:J.a,SVGAnimatedRect:J.a,SVGAnimatedString:J.a,SVGAnimatedTransformList:J.a,SVGMatrix:J.a,SVGPoint:J.a,SVGPreserveAspectRatio:J.a,SVGRect:J.a,SVGUnitTypes:J.a,AudioListener:J.a,AudioParam:J.a,AudioTrack:J.a,AudioWorkletGlobalScope:J.a,AudioWorkletProcessor:J.a,PeriodicWave:J.a,WebGLActiveInfo:J.a,ANGLEInstancedArrays:J.a,ANGLE_instanced_arrays:J.a,WebGLCanvas:J.a,WebGLColorBufferFloat:J.a,WebGLCompressedTextureASTC:J.a,WebGLCompressedTextureATC:J.a,WEBGL_compressed_texture_atc:J.a,WebGLCompressedTextureETC1:J.a,WEBGL_compressed_texture_etc1:J.a,WebGLCompressedTextureETC:J.a,WebGLCompressedTexturePVRTC:J.a,WEBGL_compressed_texture_pvrtc:J.a,WebGLCompressedTextureS3TC:J.a,WEBGL_compressed_texture_s3tc:J.a,WebGLCompressedTextureS3TCsRGB:J.a,WebGLDebugRendererInfo:J.a,WEBGL_debug_renderer_info:J.a,WebGLDebugShaders:J.a,WEBGL_debug_shaders:J.a,WebGLDepthTexture:J.a,WEBGL_depth_texture:J.a,WebGLDrawBuffers:J.a,WEBGL_draw_buffers:J.a,EXTsRGB:J.a,EXT_sRGB:J.a,EXTBlendMinMax:J.a,EXT_blend_minmax:J.a,EXTColorBufferFloat:J.a,EXTColorBufferHalfFloat:J.a,EXTDisjointTimerQuery:J.a,EXTDisjointTimerQueryWebGL2:J.a,EXTFragDepth:J.a,EXT_frag_depth:J.a,EXTShaderTextureLOD:J.a,EXT_shader_texture_lod:J.a,EXTTextureFilterAnisotropic:J.a,EXT_texture_filter_anisotropic:J.a,WebGLGetBufferSubDataAsync:J.a,WebGLLoseContext:J.a,WebGLExtensionLoseContext:J.a,WEBGL_lose_context:J.a,OESElementIndexUint:J.a,OES_element_index_uint:J.a,OESStandardDerivatives:J.a,OES_standard_derivatives:J.a,OESTextureFloat:J.a,OES_texture_float:J.a,OESTextureFloatLinear:J.a,OES_texture_float_linear:J.a,OESTextureHalfFloat:J.a,OES_texture_half_float:J.a,OESTextureHalfFloatLinear:J.a,OES_texture_half_float_linear:J.a,OESVertexArrayObject:J.a,OES_vertex_array_object:J.a,WebGLQuery:J.a,WebGLRenderbuffer:J.a,WebGLRenderingContext:J.a,WebGLSampler:J.a,WebGLShaderPrecisionFormat:J.a,WebGLSync:J.a,WebGLTexture:J.a,WebGLTimerQueryEXT:J.a,WebGLTransformFeedback:J.a,WebGLVertexArrayObject:J.a,WebGLVertexArrayObjectOES:J.a,WebGL:J.a,WebGL2RenderingContextBase:J.a,Database:J.a,SQLError:J.a,SQLResultSet:J.a,SQLTransaction:J.a,DataView:H.cp,ArrayBufferView:H.cp,Float32Array:H.co,Float64Array:H.co,Int16Array:H.hg,Int32Array:H.hh,Int8Array:H.hi,Uint16Array:H.hj,Uint32Array:H.hk,Uint8ClampedArray:H.dz,CanvasPixelArray:H.dz,Uint8Array:H.hl,HTMLAudioElement:W.u,HTMLBRElement:W.u,HTMLButtonElement:W.u,HTMLContentElement:W.u,HTMLDListElement:W.u,HTMLDataElement:W.u,HTMLDataListElement:W.u,HTMLDetailsElement:W.u,HTMLDialogElement:W.u,HTMLEmbedElement:W.u,HTMLFieldSetElement:W.u,HTMLHRElement:W.u,HTMLHeadingElement:W.u,HTMLHtmlElement:W.u,HTMLIFrameElement:W.u,HTMLImageElement:W.u,HTMLInputElement:W.u,HTMLLIElement:W.u,HTMLLabelElement:W.u,HTMLLegendElement:W.u,HTMLLinkElement:W.u,HTMLMapElement:W.u,HTMLMediaElement:W.u,HTMLMenuElement:W.u,HTMLMetaElement:W.u,HTMLMeterElement:W.u,HTMLModElement:W.u,HTMLOListElement:W.u,HTMLObjectElement:W.u,HTMLOptGroupElement:W.u,HTMLOptionElement:W.u,HTMLOutputElement:W.u,HTMLParagraphElement:W.u,HTMLParamElement:W.u,HTMLPictureElement:W.u,HTMLPreElement:W.u,HTMLProgressElement:W.u,HTMLQuoteElement:W.u,HTMLScriptElement:W.u,HTMLShadowElement:W.u,HTMLSlotElement:W.u,HTMLSourceElement:W.u,HTMLSpanElement:W.u,HTMLStyleElement:W.u,HTMLTableCaptionElement:W.u,HTMLTableColElement:W.u,HTMLTextAreaElement:W.u,HTMLTimeElement:W.u,HTMLTitleElement:W.u,HTMLTrackElement:W.u,HTMLUListElement:W.u,HTMLUnknownElement:W.u,HTMLVideoElement:W.u,HTMLDirectoryElement:W.u,HTMLFontElement:W.u,HTMLFrameElement:W.u,HTMLFrameSetElement:W.u,HTMLMarqueeElement:W.u,HTMLElement:W.u,AccessibleNodeList:W.f0,HTMLAnchorElement:W.d0,HTMLAreaElement:W.f1,HTMLBaseElement:W.c8,Blob:W.d2,HTMLBodyElement:W.bo,HTMLCanvasElement:W.bH,CDATASection:W.bp,CharacterData:W.bp,Comment:W.bp,ProcessingInstruction:W.bp,Text:W.bp,CSSNumericValue:W.ce,CSSUnitValue:W.ce,CSSPerspective:W.fd,CSSCharsetRule:W.S,CSSConditionRule:W.S,CSSFontFaceRule:W.S,CSSGroupingRule:W.S,CSSImportRule:W.S,CSSKeyframeRule:W.S,MozCSSKeyframeRule:W.S,WebKitCSSKeyframeRule:W.S,CSSKeyframesRule:W.S,MozCSSKeyframesRule:W.S,WebKitCSSKeyframesRule:W.S,CSSMediaRule:W.S,CSSNamespaceRule:W.S,CSSPageRule:W.S,CSSRule:W.S,CSSStyleRule:W.S,CSSSupportsRule:W.S,CSSViewportRule:W.S,CSSStyleDeclaration:W.cf,MSStyleCSSProperties:W.cf,CSS2Properties:W.cf,CSSImageValue:W.aK,CSSKeywordValue:W.aK,CSSPositionValue:W.aK,CSSResourceValue:W.aK,CSSURLImageValue:W.aK,CSSStyleValue:W.aK,CSSMatrixComponent:W.aL,CSSRotation:W.aL,CSSScale:W.aL,CSSSkew:W.aL,CSSTranslation:W.aL,CSSTransformComponent:W.aL,CSSTransformValue:W.ff,CSSUnparsedValue:W.fg,DataTransferItemList:W.fj,HTMLDivElement:W.aw,XMLDocument:W.cg,Document:W.cg,DOMException:W.fk,DOMImplementation:W.da,ClientRectList:W.db,DOMRectList:W.db,DOMRectReadOnly:W.dc,DOMStringList:W.fl,DOMTokenList:W.fm,Element:W.T,AbortPaymentEvent:W.o,AnimationEvent:W.o,AnimationPlaybackEvent:W.o,ApplicationCacheErrorEvent:W.o,BackgroundFetchClickEvent:W.o,BackgroundFetchEvent:W.o,BackgroundFetchFailEvent:W.o,BackgroundFetchedEvent:W.o,BeforeInstallPromptEvent:W.o,BeforeUnloadEvent:W.o,BlobEvent:W.o,CanMakePaymentEvent:W.o,ClipboardEvent:W.o,CloseEvent:W.o,CustomEvent:W.o,DeviceMotionEvent:W.o,DeviceOrientationEvent:W.o,ErrorEvent:W.o,ExtendableEvent:W.o,ExtendableMessageEvent:W.o,FetchEvent:W.o,FontFaceSetLoadEvent:W.o,ForeignFetchEvent:W.o,GamepadEvent:W.o,HashChangeEvent:W.o,InstallEvent:W.o,MediaEncryptedEvent:W.o,MediaKeyMessageEvent:W.o,MediaQueryListEvent:W.o,MediaStreamEvent:W.o,MediaStreamTrackEvent:W.o,MessageEvent:W.o,MIDIConnectionEvent:W.o,MIDIMessageEvent:W.o,MutationEvent:W.o,NotificationEvent:W.o,PageTransitionEvent:W.o,PaymentRequestEvent:W.o,PaymentRequestUpdateEvent:W.o,PopStateEvent:W.o,PresentationConnectionAvailableEvent:W.o,PresentationConnectionCloseEvent:W.o,ProgressEvent:W.o,PromiseRejectionEvent:W.o,PushEvent:W.o,RTCDataChannelEvent:W.o,RTCDTMFToneChangeEvent:W.o,RTCPeerConnectionIceEvent:W.o,RTCTrackEvent:W.o,SecurityPolicyViolationEvent:W.o,SensorErrorEvent:W.o,SpeechRecognitionError:W.o,SpeechRecognitionEvent:W.o,SpeechSynthesisEvent:W.o,StorageEvent:W.o,SyncEvent:W.o,TrackEvent:W.o,TransitionEvent:W.o,WebKitTransitionEvent:W.o,VRDeviceEvent:W.o,VRDisplayEvent:W.o,VRSessionEvent:W.o,MojoInterfaceRequestEvent:W.o,ResourceProgressEvent:W.o,USBConnectionEvent:W.o,IDBVersionChangeEvent:W.o,AudioProcessingEvent:W.o,OfflineAudioCompletionEvent:W.o,WebGLContextEvent:W.o,Event:W.o,InputEvent:W.o,AbsoluteOrientationSensor:W.d,Accelerometer:W.d,AccessibleNode:W.d,AmbientLightSensor:W.d,Animation:W.d,ApplicationCache:W.d,DOMApplicationCache:W.d,OfflineResourceList:W.d,BackgroundFetchRegistration:W.d,BatteryManager:W.d,BroadcastChannel:W.d,CanvasCaptureMediaStreamTrack:W.d,DedicatedWorkerGlobalScope:W.d,EventSource:W.d,FileReader:W.d,FontFaceSet:W.d,Gyroscope:W.d,XMLHttpRequest:W.d,XMLHttpRequestEventTarget:W.d,XMLHttpRequestUpload:W.d,LinearAccelerationSensor:W.d,Magnetometer:W.d,MediaDevices:W.d,MediaKeySession:W.d,MediaQueryList:W.d,MediaRecorder:W.d,MediaSource:W.d,MediaStream:W.d,MediaStreamTrack:W.d,MessagePort:W.d,MIDIAccess:W.d,MIDIInput:W.d,MIDIOutput:W.d,MIDIPort:W.d,NetworkInformation:W.d,Notification:W.d,OffscreenCanvas:W.d,OrientationSensor:W.d,PaymentRequest:W.d,Performance:W.d,PermissionStatus:W.d,PresentationAvailability:W.d,PresentationConnection:W.d,PresentationConnectionList:W.d,PresentationRequest:W.d,RelativeOrientationSensor:W.d,RemotePlayback:W.d,RTCDataChannel:W.d,DataChannel:W.d,RTCDTMFSender:W.d,RTCPeerConnection:W.d,webkitRTCPeerConnection:W.d,mozRTCPeerConnection:W.d,ScreenOrientation:W.d,Sensor:W.d,ServiceWorker:W.d,ServiceWorkerContainer:W.d,ServiceWorkerGlobalScope:W.d,ServiceWorkerRegistration:W.d,SharedWorker:W.d,SharedWorkerGlobalScope:W.d,SpeechRecognition:W.d,SpeechSynthesis:W.d,SpeechSynthesisUtterance:W.d,VR:W.d,VRDevice:W.d,VRDisplay:W.d,VRSession:W.d,VisualViewport:W.d,WebSocket:W.d,Worker:W.d,WorkerGlobalScope:W.d,WorkerPerformance:W.d,BluetoothDevice:W.d,BluetoothRemoteGATTCharacteristic:W.d,Clipboard:W.d,MojoInterfaceInterceptor:W.d,USB:W.d,IDBDatabase:W.d,IDBOpenDBRequest:W.d,IDBVersionChangeRequest:W.d,IDBRequest:W.d,IDBTransaction:W.d,AnalyserNode:W.d,RealtimeAnalyserNode:W.d,AudioBufferSourceNode:W.d,AudioDestinationNode:W.d,AudioNode:W.d,AudioScheduledSourceNode:W.d,AudioWorkletNode:W.d,BiquadFilterNode:W.d,ChannelMergerNode:W.d,AudioChannelMerger:W.d,ChannelSplitterNode:W.d,AudioChannelSplitter:W.d,ConstantSourceNode:W.d,ConvolverNode:W.d,DelayNode:W.d,DynamicsCompressorNode:W.d,GainNode:W.d,AudioGainNode:W.d,IIRFilterNode:W.d,MediaElementAudioSourceNode:W.d,MediaStreamAudioDestinationNode:W.d,MediaStreamAudioSourceNode:W.d,OscillatorNode:W.d,Oscillator:W.d,PannerNode:W.d,AudioPannerNode:W.d,webkitAudioPannerNode:W.d,ScriptProcessorNode:W.d,JavaScriptAudioNode:W.d,StereoPannerNode:W.d,WaveShaperNode:W.d,EventTarget:W.d,File:W.aN,FileList:W.fy,FileWriter:W.fz,HTMLFormElement:W.fD,Gamepad:W.aO,HTMLHeadElement:W.dg,History:W.fI,HTMLCollection:W.bL,HTMLFormControlsCollection:W.bL,HTMLOptionsCollection:W.bL,HTMLDocument:W.dh,KeyboardEvent:W.aR,Location:W.dq,MediaList:W.h9,MIDIInputMap:W.ha,MIDIOutputMap:W.hc,MimeType:W.aU,MimeTypeArray:W.he,PointerEvent:W.a7,MouseEvent:W.a7,DragEvent:W.a7,DocumentFragment:W.C,ShadowRoot:W.C,DocumentType:W.C,Node:W.C,NodeList:W.cq,RadioNodeList:W.cq,Plugin:W.aV,PluginArray:W.hv,Range:W.dF,RTCStatsReport:W.hE,HTMLSelectElement:W.hH,SourceBuffer:W.aW,SourceBufferList:W.hR,SpeechGrammar:W.aX,SpeechGrammarList:W.hS,SpeechRecognitionResult:W.aY,Storage:W.hV,CSSStyleSheet:W.aD,StyleSheet:W.aD,HTMLTableCellElement:W.bV,HTMLTableDataCellElement:W.bV,HTMLTableHeaderCellElement:W.bV,HTMLTableElement:W.dM,HTMLTableRowElement:W.dN,HTMLTableSectionElement:W.i1,HTMLTemplateElement:W.cx,TextTrack:W.aZ,TextTrackCue:W.aE,VTTCue:W.aE,TextTrackCueList:W.i3,TextTrackList:W.i4,TimeRanges:W.i7,Touch:W.b0,TouchEvent:W.aF,TouchList:W.ib,TrackDefaultList:W.ic,CompositionEvent:W.by,FocusEvent:W.by,TextEvent:W.by,UIEvent:W.by,URL:W.iv,VideoTrackList:W.iK,WheelEvent:W.b3,Window:W.cJ,DOMWindow:W.cJ,Attr:W.cK,CSSRuleList:W.iT,ClientRect:W.e7,DOMRect:W.e7,GamepadList:W.j6,NamedNodeMap:W.ep,MozNamedAttrMap:W.ep,SpeechRecognitionResultList:W.jj,StyleSheetList:W.jk,SVGLength:P.ba,SVGLengthList:P.fT,SVGNumber:P.bd,SVGNumberList:P.hq,SVGPointList:P.hx,SVGScriptElement:P.ct,SVGStringList:P.i0,SVGAElement:P.p,SVGAnimateElement:P.p,SVGAnimateMotionElement:P.p,SVGAnimateTransformElement:P.p,SVGAnimationElement:P.p,SVGCircleElement:P.p,SVGClipPathElement:P.p,SVGDefsElement:P.p,SVGDescElement:P.p,SVGDiscardElement:P.p,SVGEllipseElement:P.p,SVGFEBlendElement:P.p,SVGFEColorMatrixElement:P.p,SVGFEComponentTransferElement:P.p,SVGFECompositeElement:P.p,SVGFEConvolveMatrixElement:P.p,SVGFEDiffuseLightingElement:P.p,SVGFEDisplacementMapElement:P.p,SVGFEDistantLightElement:P.p,SVGFEFloodElement:P.p,SVGFEFuncAElement:P.p,SVGFEFuncBElement:P.p,SVGFEFuncGElement:P.p,SVGFEFuncRElement:P.p,SVGFEGaussianBlurElement:P.p,SVGFEImageElement:P.p,SVGFEMergeElement:P.p,SVGFEMergeNodeElement:P.p,SVGFEMorphologyElement:P.p,SVGFEOffsetElement:P.p,SVGFEPointLightElement:P.p,SVGFESpecularLightingElement:P.p,SVGFESpotLightElement:P.p,SVGFETileElement:P.p,SVGFETurbulenceElement:P.p,SVGFilterElement:P.p,SVGForeignObjectElement:P.p,SVGGElement:P.p,SVGGeometryElement:P.p,SVGGraphicsElement:P.p,SVGImageElement:P.p,SVGLineElement:P.p,SVGLinearGradientElement:P.p,SVGMarkerElement:P.p,SVGMaskElement:P.p,SVGMetadataElement:P.p,SVGPathElement:P.p,SVGPatternElement:P.p,SVGPolygonElement:P.p,SVGPolylineElement:P.p,SVGRadialGradientElement:P.p,SVGRectElement:P.p,SVGSetElement:P.p,SVGStopElement:P.p,SVGStyleElement:P.p,SVGSVGElement:P.p,SVGSwitchElement:P.p,SVGSymbolElement:P.p,SVGTSpanElement:P.p,SVGTextContentElement:P.p,SVGTextElement:P.p,SVGTextPathElement:P.p,SVGTextPositioningElement:P.p,SVGTitleElement:P.p,SVGUseElement:P.p,SVGViewElement:P.p,SVGGradientElement:P.p,SVGComponentTransferFunctionElement:P.p,SVGFEDropShadowElement:P.p,SVGMPathElement:P.p,SVGElement:P.p,SVGTransform:P.bf,SVGTransformList:P.id,AudioBuffer:P.f3,AudioParamMap:P.f4,AudioTrackList:P.f6,AudioContext:P.bG,webkitAudioContext:P.bG,BaseAudioContext:P.bG,OfflineAudioContext:P.hr,WebGLBuffer:P.d3,WebGLFramebuffer:P.df,WebGLProgram:P.dE,WebGL2RenderingContext:P.bT,WebGLShader:P.dI,WebGLUniformLocation:P.dX,SQLResultSetRowList:P.hT})
hunkHelpers.setOrUpdateLeafTags({ArrayBuffer:true,AnimationEffectReadOnly:true,AnimationEffectTiming:true,AnimationEffectTimingReadOnly:true,AnimationTimeline:true,AnimationWorkletGlobalScope:true,AuthenticatorAssertionResponse:true,AuthenticatorAttestationResponse:true,AuthenticatorResponse:true,BackgroundFetchFetch:true,BackgroundFetchManager:true,BackgroundFetchSettledFetch:true,BarProp:true,BarcodeDetector:true,BluetoothRemoteGATTDescriptor:true,Body:true,BudgetState:true,CacheStorage:true,CanvasGradient:true,CanvasPattern:true,CanvasRenderingContext2D:true,Client:true,Clients:true,CookieStore:true,Coordinates:true,Credential:true,CredentialUserData:true,CredentialsContainer:true,Crypto:true,CryptoKey:true,CSS:true,CSSVariableReferenceValue:true,CustomElementRegistry:true,DataTransfer:true,DataTransferItem:true,DeprecatedStorageInfo:true,DeprecatedStorageQuota:true,DeprecationReport:true,DetectedBarcode:true,DetectedFace:true,DetectedText:true,DeviceAcceleration:true,DeviceRotationRate:true,DirectoryEntry:true,DirectoryReader:true,DocumentOrShadowRoot:true,DocumentTimeline:true,DOMError:true,Iterator:true,DOMMatrix:true,DOMMatrixReadOnly:true,DOMParser:true,DOMPoint:true,DOMPointReadOnly:true,DOMQuad:true,DOMStringMap:true,Entry:true,External:true,FaceDetector:true,FederatedCredential:true,FileEntry:true,DOMFileSystem:true,FontFace:true,FontFaceSource:true,FormData:true,GamepadButton:true,GamepadPose:true,Geolocation:true,Position:true,Headers:true,HTMLHyperlinkElementUtils:true,IdleDeadline:true,ImageBitmap:true,ImageBitmapRenderingContext:true,ImageCapture:true,ImageData:true,InputDeviceCapabilities:true,IntersectionObserver:true,IntersectionObserverEntry:true,InterventionReport:true,KeyframeEffect:true,KeyframeEffectReadOnly:true,MediaCapabilities:true,MediaCapabilitiesInfo:true,MediaDeviceInfo:true,MediaError:true,MediaKeyStatusMap:true,MediaKeySystemAccess:true,MediaKeys:true,MediaKeysPolicy:true,MediaMetadata:true,MediaSession:true,MediaSettingsRange:true,MemoryInfo:true,MessageChannel:true,Metadata:true,MutationObserver:true,WebKitMutationObserver:true,MutationRecord:true,NavigationPreloadManager:true,Navigator:true,NavigatorAutomationInformation:true,NavigatorConcurrentHardware:true,NavigatorCookies:true,NavigatorUserMediaError:true,NodeFilter:true,NodeIterator:true,NonDocumentTypeChildNode:true,NonElementParentNode:true,NoncedElement:true,OffscreenCanvasRenderingContext2D:true,OverconstrainedError:true,PaintRenderingContext2D:true,PaintSize:true,PaintWorkletGlobalScope:true,PasswordCredential:true,Path2D:true,PaymentAddress:true,PaymentInstruments:true,PaymentManager:true,PaymentResponse:true,PerformanceEntry:true,PerformanceLongTaskTiming:true,PerformanceMark:true,PerformanceMeasure:true,PerformanceNavigation:true,PerformanceNavigationTiming:true,PerformanceObserver:true,PerformanceObserverEntryList:true,PerformancePaintTiming:true,PerformanceResourceTiming:true,PerformanceServerTiming:true,PerformanceTiming:true,Permissions:true,PhotoCapabilities:true,PositionError:true,Presentation:true,PresentationReceiver:true,PublicKeyCredential:true,PushManager:true,PushMessageData:true,PushSubscription:true,PushSubscriptionOptions:true,RelatedApplication:true,ReportBody:true,ReportingObserver:true,ResizeObserver:true,ResizeObserverEntry:true,RTCCertificate:true,RTCIceCandidate:true,mozRTCIceCandidate:true,RTCLegacyStatsReport:true,RTCRtpContributingSource:true,RTCRtpReceiver:true,RTCRtpSender:true,RTCSessionDescription:true,mozRTCSessionDescription:true,RTCStatsResponse:true,Screen:true,ScrollState:true,ScrollTimeline:true,Selection:true,SharedArrayBuffer:true,SpeechRecognitionAlternative:true,SpeechSynthesisVoice:true,StaticRange:true,StorageManager:true,StyleMedia:true,StylePropertyMap:true,StylePropertyMapReadonly:true,SyncManager:true,TaskAttributionTiming:true,TextDetector:true,TextMetrics:true,TrackDefault:true,TreeWalker:true,TrustedHTML:true,TrustedScriptURL:true,TrustedURL:true,UnderlyingSourceBase:true,URLSearchParams:true,VRCoordinateSystem:true,VRDisplayCapabilities:true,VREyeParameters:true,VRFrameData:true,VRFrameOfReference:true,VRPose:true,VRStageBounds:true,VRStageBoundsPoint:true,VRStageParameters:true,ValidityState:true,VideoPlaybackQuality:true,VideoTrack:true,VTTRegion:true,WindowClient:true,WorkletAnimation:true,WorkletGlobalScope:true,XPathEvaluator:true,XPathExpression:true,XPathNSResolver:true,XPathResult:true,XMLSerializer:true,XSLTProcessor:true,Bluetooth:true,BluetoothCharacteristicProperties:true,BluetoothRemoteGATTServer:true,BluetoothRemoteGATTService:true,BluetoothUUID:true,BudgetService:true,Cache:true,DOMFileSystemSync:true,DirectoryEntrySync:true,DirectoryReaderSync:true,EntrySync:true,FileEntrySync:true,FileReaderSync:true,FileWriterSync:true,HTMLAllCollection:true,Mojo:true,MojoHandle:true,MojoWatcher:true,NFC:true,PagePopupController:true,Report:true,Request:true,Response:true,SubtleCrypto:true,USBAlternateInterface:true,USBConfiguration:true,USBDevice:true,USBEndpoint:true,USBInTransferResult:true,USBInterface:true,USBIsochronousInTransferPacket:true,USBIsochronousInTransferResult:true,USBIsochronousOutTransferPacket:true,USBIsochronousOutTransferResult:true,USBOutTransferResult:true,WorkerLocation:true,WorkerNavigator:true,Worklet:true,IDBCursor:true,IDBCursorWithValue:true,IDBFactory:true,IDBIndex:true,IDBKeyRange:true,IDBObjectStore:true,IDBObservation:true,IDBObserver:true,IDBObserverChanges:true,SVGAngle:true,SVGAnimatedAngle:true,SVGAnimatedBoolean:true,SVGAnimatedEnumeration:true,SVGAnimatedInteger:true,SVGAnimatedLength:true,SVGAnimatedLengthList:true,SVGAnimatedNumber:true,SVGAnimatedNumberList:true,SVGAnimatedPreserveAspectRatio:true,SVGAnimatedRect:true,SVGAnimatedString:true,SVGAnimatedTransformList:true,SVGMatrix:true,SVGPoint:true,SVGPreserveAspectRatio:true,SVGRect:true,SVGUnitTypes:true,AudioListener:true,AudioParam:true,AudioTrack:true,AudioWorkletGlobalScope:true,AudioWorkletProcessor:true,PeriodicWave:true,WebGLActiveInfo:true,ANGLEInstancedArrays:true,ANGLE_instanced_arrays:true,WebGLCanvas:true,WebGLColorBufferFloat:true,WebGLCompressedTextureASTC:true,WebGLCompressedTextureATC:true,WEBGL_compressed_texture_atc:true,WebGLCompressedTextureETC1:true,WEBGL_compressed_texture_etc1:true,WebGLCompressedTextureETC:true,WebGLCompressedTexturePVRTC:true,WEBGL_compressed_texture_pvrtc:true,WebGLCompressedTextureS3TC:true,WEBGL_compressed_texture_s3tc:true,WebGLCompressedTextureS3TCsRGB:true,WebGLDebugRendererInfo:true,WEBGL_debug_renderer_info:true,WebGLDebugShaders:true,WEBGL_debug_shaders:true,WebGLDepthTexture:true,WEBGL_depth_texture:true,WebGLDrawBuffers:true,WEBGL_draw_buffers:true,EXTsRGB:true,EXT_sRGB:true,EXTBlendMinMax:true,EXT_blend_minmax:true,EXTColorBufferFloat:true,EXTColorBufferHalfFloat:true,EXTDisjointTimerQuery:true,EXTDisjointTimerQueryWebGL2:true,EXTFragDepth:true,EXT_frag_depth:true,EXTShaderTextureLOD:true,EXT_shader_texture_lod:true,EXTTextureFilterAnisotropic:true,EXT_texture_filter_anisotropic:true,WebGLGetBufferSubDataAsync:true,WebGLLoseContext:true,WebGLExtensionLoseContext:true,WEBGL_lose_context:true,OESElementIndexUint:true,OES_element_index_uint:true,OESStandardDerivatives:true,OES_standard_derivatives:true,OESTextureFloat:true,OES_texture_float:true,OESTextureFloatLinear:true,OES_texture_float_linear:true,OESTextureHalfFloat:true,OES_texture_half_float:true,OESTextureHalfFloatLinear:true,OES_texture_half_float_linear:true,OESVertexArrayObject:true,OES_vertex_array_object:true,WebGLQuery:true,WebGLRenderbuffer:true,WebGLRenderingContext:true,WebGLSampler:true,WebGLShaderPrecisionFormat:true,WebGLSync:true,WebGLTexture:true,WebGLTimerQueryEXT:true,WebGLTransformFeedback:true,WebGLVertexArrayObject:true,WebGLVertexArrayObjectOES:true,WebGL:true,WebGL2RenderingContextBase:true,Database:true,SQLError:true,SQLResultSet:true,SQLTransaction:true,DataView:true,ArrayBufferView:false,Float32Array:true,Float64Array:true,Int16Array:true,Int32Array:true,Int8Array:true,Uint16Array:true,Uint32Array:true,Uint8ClampedArray:true,CanvasPixelArray:true,Uint8Array:false,HTMLAudioElement:true,HTMLBRElement:true,HTMLButtonElement:true,HTMLContentElement:true,HTMLDListElement:true,HTMLDataElement:true,HTMLDataListElement:true,HTMLDetailsElement:true,HTMLDialogElement:true,HTMLEmbedElement:true,HTMLFieldSetElement:true,HTMLHRElement:true,HTMLHeadingElement:true,HTMLHtmlElement:true,HTMLIFrameElement:true,HTMLImageElement:true,HTMLInputElement:true,HTMLLIElement:true,HTMLLabelElement:true,HTMLLegendElement:true,HTMLLinkElement:true,HTMLMapElement:true,HTMLMediaElement:true,HTMLMenuElement:true,HTMLMetaElement:true,HTMLMeterElement:true,HTMLModElement:true,HTMLOListElement:true,HTMLObjectElement:true,HTMLOptGroupElement:true,HTMLOptionElement:true,HTMLOutputElement:true,HTMLParagraphElement:true,HTMLParamElement:true,HTMLPictureElement:true,HTMLPreElement:true,HTMLProgressElement:true,HTMLQuoteElement:true,HTMLScriptElement:true,HTMLShadowElement:true,HTMLSlotElement:true,HTMLSourceElement:true,HTMLSpanElement:true,HTMLStyleElement:true,HTMLTableCaptionElement:true,HTMLTableColElement:true,HTMLTextAreaElement:true,HTMLTimeElement:true,HTMLTitleElement:true,HTMLTrackElement:true,HTMLUListElement:true,HTMLUnknownElement:true,HTMLVideoElement:true,HTMLDirectoryElement:true,HTMLFontElement:true,HTMLFrameElement:true,HTMLFrameSetElement:true,HTMLMarqueeElement:true,HTMLElement:false,AccessibleNodeList:true,HTMLAnchorElement:true,HTMLAreaElement:true,HTMLBaseElement:true,Blob:false,HTMLBodyElement:true,HTMLCanvasElement:true,CDATASection:true,CharacterData:true,Comment:true,ProcessingInstruction:true,Text:true,CSSNumericValue:true,CSSUnitValue:true,CSSPerspective:true,CSSCharsetRule:true,CSSConditionRule:true,CSSFontFaceRule:true,CSSGroupingRule:true,CSSImportRule:true,CSSKeyframeRule:true,MozCSSKeyframeRule:true,WebKitCSSKeyframeRule:true,CSSKeyframesRule:true,MozCSSKeyframesRule:true,WebKitCSSKeyframesRule:true,CSSMediaRule:true,CSSNamespaceRule:true,CSSPageRule:true,CSSRule:true,CSSStyleRule:true,CSSSupportsRule:true,CSSViewportRule:true,CSSStyleDeclaration:true,MSStyleCSSProperties:true,CSS2Properties:true,CSSImageValue:true,CSSKeywordValue:true,CSSPositionValue:true,CSSResourceValue:true,CSSURLImageValue:true,CSSStyleValue:false,CSSMatrixComponent:true,CSSRotation:true,CSSScale:true,CSSSkew:true,CSSTranslation:true,CSSTransformComponent:false,CSSTransformValue:true,CSSUnparsedValue:true,DataTransferItemList:true,HTMLDivElement:true,XMLDocument:true,Document:false,DOMException:true,DOMImplementation:true,ClientRectList:true,DOMRectList:true,DOMRectReadOnly:false,DOMStringList:true,DOMTokenList:true,Element:false,AbortPaymentEvent:true,AnimationEvent:true,AnimationPlaybackEvent:true,ApplicationCacheErrorEvent:true,BackgroundFetchClickEvent:true,BackgroundFetchEvent:true,BackgroundFetchFailEvent:true,BackgroundFetchedEvent:true,BeforeInstallPromptEvent:true,BeforeUnloadEvent:true,BlobEvent:true,CanMakePaymentEvent:true,ClipboardEvent:true,CloseEvent:true,CustomEvent:true,DeviceMotionEvent:true,DeviceOrientationEvent:true,ErrorEvent:true,ExtendableEvent:true,ExtendableMessageEvent:true,FetchEvent:true,FontFaceSetLoadEvent:true,ForeignFetchEvent:true,GamepadEvent:true,HashChangeEvent:true,InstallEvent:true,MediaEncryptedEvent:true,MediaKeyMessageEvent:true,MediaQueryListEvent:true,MediaStreamEvent:true,MediaStreamTrackEvent:true,MessageEvent:true,MIDIConnectionEvent:true,MIDIMessageEvent:true,MutationEvent:true,NotificationEvent:true,PageTransitionEvent:true,PaymentRequestEvent:true,PaymentRequestUpdateEvent:true,PopStateEvent:true,PresentationConnectionAvailableEvent:true,PresentationConnectionCloseEvent:true,ProgressEvent:true,PromiseRejectionEvent:true,PushEvent:true,RTCDataChannelEvent:true,RTCDTMFToneChangeEvent:true,RTCPeerConnectionIceEvent:true,RTCTrackEvent:true,SecurityPolicyViolationEvent:true,SensorErrorEvent:true,SpeechRecognitionError:true,SpeechRecognitionEvent:true,SpeechSynthesisEvent:true,StorageEvent:true,SyncEvent:true,TrackEvent:true,TransitionEvent:true,WebKitTransitionEvent:true,VRDeviceEvent:true,VRDisplayEvent:true,VRSessionEvent:true,MojoInterfaceRequestEvent:true,ResourceProgressEvent:true,USBConnectionEvent:true,IDBVersionChangeEvent:true,AudioProcessingEvent:true,OfflineAudioCompletionEvent:true,WebGLContextEvent:true,Event:false,InputEvent:false,AbsoluteOrientationSensor:true,Accelerometer:true,AccessibleNode:true,AmbientLightSensor:true,Animation:true,ApplicationCache:true,DOMApplicationCache:true,OfflineResourceList:true,BackgroundFetchRegistration:true,BatteryManager:true,BroadcastChannel:true,CanvasCaptureMediaStreamTrack:true,DedicatedWorkerGlobalScope:true,EventSource:true,FileReader:true,FontFaceSet:true,Gyroscope:true,XMLHttpRequest:true,XMLHttpRequestEventTarget:true,XMLHttpRequestUpload:true,LinearAccelerationSensor:true,Magnetometer:true,MediaDevices:true,MediaKeySession:true,MediaQueryList:true,MediaRecorder:true,MediaSource:true,MediaStream:true,MediaStreamTrack:true,MessagePort:true,MIDIAccess:true,MIDIInput:true,MIDIOutput:true,MIDIPort:true,NetworkInformation:true,Notification:true,OffscreenCanvas:true,OrientationSensor:true,PaymentRequest:true,Performance:true,PermissionStatus:true,PresentationAvailability:true,PresentationConnection:true,PresentationConnectionList:true,PresentationRequest:true,RelativeOrientationSensor:true,RemotePlayback:true,RTCDataChannel:true,DataChannel:true,RTCDTMFSender:true,RTCPeerConnection:true,webkitRTCPeerConnection:true,mozRTCPeerConnection:true,ScreenOrientation:true,Sensor:true,ServiceWorker:true,ServiceWorkerContainer:true,ServiceWorkerGlobalScope:true,ServiceWorkerRegistration:true,SharedWorker:true,SharedWorkerGlobalScope:true,SpeechRecognition:true,SpeechSynthesis:true,SpeechSynthesisUtterance:true,VR:true,VRDevice:true,VRDisplay:true,VRSession:true,VisualViewport:true,WebSocket:true,Worker:true,WorkerGlobalScope:true,WorkerPerformance:true,BluetoothDevice:true,BluetoothRemoteGATTCharacteristic:true,Clipboard:true,MojoInterfaceInterceptor:true,USB:true,IDBDatabase:true,IDBOpenDBRequest:true,IDBVersionChangeRequest:true,IDBRequest:true,IDBTransaction:true,AnalyserNode:true,RealtimeAnalyserNode:true,AudioBufferSourceNode:true,AudioDestinationNode:true,AudioNode:true,AudioScheduledSourceNode:true,AudioWorkletNode:true,BiquadFilterNode:true,ChannelMergerNode:true,AudioChannelMerger:true,ChannelSplitterNode:true,AudioChannelSplitter:true,ConstantSourceNode:true,ConvolverNode:true,DelayNode:true,DynamicsCompressorNode:true,GainNode:true,AudioGainNode:true,IIRFilterNode:true,MediaElementAudioSourceNode:true,MediaStreamAudioDestinationNode:true,MediaStreamAudioSourceNode:true,OscillatorNode:true,Oscillator:true,PannerNode:true,AudioPannerNode:true,webkitAudioPannerNode:true,ScriptProcessorNode:true,JavaScriptAudioNode:true,StereoPannerNode:true,WaveShaperNode:true,EventTarget:false,File:true,FileList:true,FileWriter:true,HTMLFormElement:true,Gamepad:true,HTMLHeadElement:true,History:true,HTMLCollection:true,HTMLFormControlsCollection:true,HTMLOptionsCollection:true,HTMLDocument:true,KeyboardEvent:true,Location:true,MediaList:true,MIDIInputMap:true,MIDIOutputMap:true,MimeType:true,MimeTypeArray:true,PointerEvent:true,MouseEvent:false,DragEvent:false,DocumentFragment:true,ShadowRoot:true,DocumentType:true,Node:false,NodeList:true,RadioNodeList:true,Plugin:true,PluginArray:true,Range:true,RTCStatsReport:true,HTMLSelectElement:true,SourceBuffer:true,SourceBufferList:true,SpeechGrammar:true,SpeechGrammarList:true,SpeechRecognitionResult:true,Storage:true,CSSStyleSheet:true,StyleSheet:true,HTMLTableCellElement:true,HTMLTableDataCellElement:true,HTMLTableHeaderCellElement:true,HTMLTableElement:true,HTMLTableRowElement:true,HTMLTableSectionElement:true,HTMLTemplateElement:true,TextTrack:true,TextTrackCue:true,VTTCue:true,TextTrackCueList:true,TextTrackList:true,TimeRanges:true,Touch:true,TouchEvent:true,TouchList:true,TrackDefaultList:true,CompositionEvent:true,FocusEvent:true,TextEvent:true,UIEvent:false,URL:true,VideoTrackList:true,WheelEvent:true,Window:true,DOMWindow:true,Attr:true,CSSRuleList:true,ClientRect:true,DOMRect:true,GamepadList:true,NamedNodeMap:true,MozNamedAttrMap:true,SpeechRecognitionResultList:true,StyleSheetList:true,SVGLength:true,SVGLengthList:true,SVGNumber:true,SVGNumberList:true,SVGPointList:true,SVGScriptElement:true,SVGStringList:true,SVGAElement:true,SVGAnimateElement:true,SVGAnimateMotionElement:true,SVGAnimateTransformElement:true,SVGAnimationElement:true,SVGCircleElement:true,SVGClipPathElement:true,SVGDefsElement:true,SVGDescElement:true,SVGDiscardElement:true,SVGEllipseElement:true,SVGFEBlendElement:true,SVGFEColorMatrixElement:true,SVGFEComponentTransferElement:true,SVGFECompositeElement:true,SVGFEConvolveMatrixElement:true,SVGFEDiffuseLightingElement:true,SVGFEDisplacementMapElement:true,SVGFEDistantLightElement:true,SVGFEFloodElement:true,SVGFEFuncAElement:true,SVGFEFuncBElement:true,SVGFEFuncGElement:true,SVGFEFuncRElement:true,SVGFEGaussianBlurElement:true,SVGFEImageElement:true,SVGFEMergeElement:true,SVGFEMergeNodeElement:true,SVGFEMorphologyElement:true,SVGFEOffsetElement:true,SVGFEPointLightElement:true,SVGFESpecularLightingElement:true,SVGFESpotLightElement:true,SVGFETileElement:true,SVGFETurbulenceElement:true,SVGFilterElement:true,SVGForeignObjectElement:true,SVGGElement:true,SVGGeometryElement:true,SVGGraphicsElement:true,SVGImageElement:true,SVGLineElement:true,SVGLinearGradientElement:true,SVGMarkerElement:true,SVGMaskElement:true,SVGMetadataElement:true,SVGPathElement:true,SVGPatternElement:true,SVGPolygonElement:true,SVGPolylineElement:true,SVGRadialGradientElement:true,SVGRectElement:true,SVGSetElement:true,SVGStopElement:true,SVGStyleElement:true,SVGSVGElement:true,SVGSwitchElement:true,SVGSymbolElement:true,SVGTSpanElement:true,SVGTextContentElement:true,SVGTextElement:true,SVGTextPathElement:true,SVGTextPositioningElement:true,SVGTitleElement:true,SVGUseElement:true,SVGViewElement:true,SVGGradientElement:true,SVGComponentTransferFunctionElement:true,SVGFEDropShadowElement:true,SVGMPathElement:true,SVGElement:false,SVGTransform:true,SVGTransformList:true,AudioBuffer:true,AudioParamMap:true,AudioTrackList:true,AudioContext:true,webkitAudioContext:true,BaseAudioContext:false,OfflineAudioContext:true,WebGLBuffer:true,WebGLFramebuffer:true,WebGLProgram:true,WebGL2RenderingContext:true,WebGLShader:true,WebGLUniformLocation:true,SQLResultSetRowList:true})
H.dx.$nativeSuperclassTag="ArrayBufferView"
H.cM.$nativeSuperclassTag="ArrayBufferView"
H.cN.$nativeSuperclassTag="ArrayBufferView"
H.co.$nativeSuperclassTag="ArrayBufferView"
H.cO.$nativeSuperclassTag="ArrayBufferView"
H.cP.$nativeSuperclassTag="ArrayBufferView"
H.dy.$nativeSuperclassTag="ArrayBufferView"
W.cQ.$nativeSuperclassTag="EventTarget"
W.cR.$nativeSuperclassTag="EventTarget"
W.cS.$nativeSuperclassTag="EventTarget"
W.cT.$nativeSuperclassTag="EventTarget"})()
convertAllToFastObject(w)
convertToFastObject($);(function(a){if(typeof document==="undefined"){a(null)
return}if(typeof document.currentScript!='undefined'){a(document.currentScript)
return}var u=document.scripts
function onLoad(b){for(var s=0;s<u.length;++s)u[s].removeEventListener("load",onLoad,false)
a(b.target)}for(var t=0;t<u.length;++t)u[t].addEventListener("load",onLoad,false)})(function(a){v.currentScript=a
if(typeof dartMainRunner==="function")dartMainRunner(Q.lh,[])
else Q.lh([])})})()
//# sourceMappingURL=test.dart.js.map
