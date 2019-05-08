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
a[c]=function(){a[c]=function(){H.mw(b)}
var t
var s=d
try{if(a[b]===u){t=a[b]=s
t=a[b]=d()}else t=a[b]}finally{if(t===s)a[b]=null
a[c]=function(){return this[b]}}return t}}function makeConstList(a){a.immutable$list=Array
a.fixed$length=Array
return a}function convertToFastObject(a){function t(){}t.prototype=a
new t()
return a}function convertAllToFastObject(a){for(var u=0;u<a.length;++u)convertToFastObject(a[u])}var y=0
function tearOffGetter(a,b,c,d,e){return e?new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+d+y+++"(receiver) {"+"if (c === null) c = "+"H.jw"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, true, name);"+"return new c(this, funcs[0], receiver, name);"+"}")(a,b,c,d,H,null):new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+d+y+++"() {"+"if (c === null) c = "+"H.jw"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, false, name);"+"return new c(this, funcs[0], null, name);"+"}")(a,b,c,d,H,null)}function tearOff(a,b,c,d,e,f){var u=null
return d?function(){if(u===null)u=H.jw(this,a,b,c,true,false,e).prototype
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
if(w[u][a])return w[u][a]}}var C={},H={jg:function jg(a){this.a=a},
fc:function(){return new P.ca("No element")},
ln:function(){return new P.ca("Too many elements")},
o:function o(a){this.a=a},
eQ:function eQ(){},
bq:function bq(){},
c1:function c1(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=null
_.$ti=d},
fs:function fs(a,b,c){this.a=a
this.b=b
this.$ti=c},
ft:function ft(a,b,c){var _=this
_.a=null
_.b=a
_.c=b
_.$ti=c},
fu:function fu(a,b,c){this.a=a
this.b=b
this.$ti=c},
ci:function ci(a,b,c){this.a=a
this.b=b
this.$ti=c},
i8:function i8(a,b,c){this.a=a
this.b=b
this.$ti=c},
bn:function bn(){},
dq:function dq(){},
dp:function dp(){},
bG:function(a){var u,t
u=H.A(v.mangledGlobalNames[a])
if(typeof u==="string")return u
t="minified:"+a
return t},
md:function(a){return v.types[H.Z(a)]},
mk:function(a,b){var u
if(b!=null){u=b.x
if(u!=null)return u}return!!J.Q(a).$iz},
i:function(a){var u
if(typeof a==="string")return a
if(typeof a==="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
u=J.as(a)
if(typeof u!=="string")throw H.f(H.bh(a))
return u},
lC:function(a){var u,t,s
u=a.$reflectionInfo
if(u==null)return
u=J.fd(u)
t=u[0]
s=u[1]
return new H.fV(a,u,(t&2)===2,t>>2,s>>1,(s&1)===1,u[2])},
c6:function(a){var u=a.$identityHash
if(u==null){u=Math.random()*0x3fffffff|0
a.$identityHash=u}return u},
bt:function(a){return H.lt(a)+H.jt(H.bi(a),0,null)},
lt:function(a){var u,t,s,r,q,p,o,n,m
u=J.Q(a)
t=u.constructor
if(typeof t=="function"){s=t.name
r=typeof s==="string"?s:null}else r=null
q=r==null
if(q||u===C.H||!!u.$ibd){p=C.u(a)
if(q)r=p
if(p==="Object"){o=a.constructor
if(typeof o=="function"){n=String(o).match(/^\s*function\s*([\w$]*)\s*\(/)
m=n==null?null:n[1]
if(typeof m==="string"&&/^\w+$/.test(m))r=m}}return r}r=r
return H.bG(r.length>1&&C.d.ad(r,0)===36?C.d.aM(r,1):r)},
k6:function(a){var u,t,s,r,q
u=a.length
if(u<=500)return String.fromCharCode.apply(null,a)
for(t="",s=0;s<u;s=r){r=s+500
q=r<u?r:u
t+=String.fromCharCode.apply(null,a.slice(s,q))}return t},
lB:function(a){var u,t,s,r
u=H.c([],[P.y])
for(t=a.length,s=0;s<a.length;a.length===t||(0,H.G)(a),++s){r=a[s]
if(typeof r!=="number"||Math.floor(r)!==r)throw H.f(H.bh(r))
if(r<=65535)C.a.h(u,r)
else if(r<=1114111){C.a.h(u,55296+(C.h.aA(r-65536,10)&1023))
C.a.h(u,56320+(r&1023))}else throw H.f(H.bh(r))}return H.k6(u)},
k7:function(a){var u,t,s
for(u=a.length,t=0;t<u;++t){s=a[t]
if(typeof s!=="number"||Math.floor(s)!==s)throw H.f(H.bh(s))
if(s<0)throw H.f(H.bh(s))
if(s>65535)return H.lB(a)}return H.k6(a)},
ji:function(a){var u
if(a<=65535)return String.fromCharCode(a)
if(a<=1114111){u=a-65536
return String.fromCharCode((55296|C.h.aA(u,10))>>>0,56320|u&1023)}throw H.f(P.ah(a,0,1114111,null,null))},
bs:function(a){if(a.date===void 0)a.date=new Date(a.a)
return a.date},
lA:function(a){var u=H.bs(a).getFullYear()+0
return u},
ly:function(a){var u=H.bs(a).getMonth()+1
return u},
lu:function(a){var u=H.bs(a).getDate()+0
return u},
lv:function(a){var u=H.bs(a).getHours()+0
return u},
lx:function(a){var u=H.bs(a).getMinutes()+0
return u},
lz:function(a){var u=H.bs(a).getSeconds()+0
return u},
lw:function(a){var u=H.bs(a).getMilliseconds()+0
return u},
bj:function(a){throw H.f(H.bh(a))},
k:function(a,b){if(a==null)J.bk(a)
throw H.f(H.cw(a,b))},
cw:function(a,b){var u,t
if(typeof b!=="number"||Math.floor(b)!==b)return new P.at(!0,b,"index",null)
u=H.Z(J.bk(a))
if(!(b<0)){if(typeof u!=="number")return H.bj(u)
t=b>=u}else t=!0
if(t)return P.L(b,a,"index",null,u)
return P.db(b,"index",null)},
m8:function(a,b,c){if(a>c)return new P.bu(0,c,!0,a,"start","Invalid value")
if(b!=null)if(b<a||b>c)return new P.bu(a,c,!0,b,"end","Invalid value")
return new P.at(!0,b,"end",null)},
bh:function(a){return new P.at(!0,a,null,null)},
f:function(a){var u
if(a==null)a=new P.d6()
u=new Error()
u.dartException=a
if("defineProperty" in Object){Object.defineProperty(u,"message",{get:H.kK})
u.name=""}else u.toString=H.kK
return u},
kK:function(){return J.as(this.dartException)},
a2:function(a){throw H.f(a)},
G:function(a){throw H.f(P.b4(a))},
aL:function(a){var u,t,s,r,q,p
a=a.replace(String({}),'$receiver$').replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
u=a.match(/\\\$[a-zA-Z]+\\\$/g)
if(u==null)u=H.c([],[P.e])
t=u.indexOf("\\$arguments\\$")
s=u.indexOf("\\$argumentsExpr\\$")
r=u.indexOf("\\$expr\\$")
q=u.indexOf("\\$method\\$")
p=u.indexOf("\\$receiver\\$")
return new H.hA(a.replace(new RegExp('\\\\\\$arguments\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$argumentsExpr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$expr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$method\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$receiver\\\\\\$','g'),'((?:x|[^x])*)'),t,s,r,q,p)},
hB:function(a){return function($expr$){var $argumentsExpr$='$arguments$'
try{$expr$.$method$($argumentsExpr$)}catch(u){return u.message}}(a)},
kg:function(a){return function($expr$){try{$expr$.$method$}catch(u){return u.message}}(a)},
k1:function(a,b){return new H.fM(a,b==null?null:b.method)},
jh:function(a,b){var u,t
u=b==null
t=u?null:b.method
return new H.fi(a,t,u?null:b.receiver)},
ad:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g
u=new H.j8(a)
if(a==null)return
if(typeof a!=="object")return a
if("dartException" in a)return u.$1(a.dartException)
else if(!("message" in a))return a
t=a.message
if("number" in a&&typeof a.number=="number"){s=a.number
r=s&65535
if((C.h.aA(s,16)&8191)===10)switch(r){case 438:return u.$1(H.jh(H.i(t)+" (Error "+r+")",null))
case 445:case 5007:return u.$1(H.k1(H.i(t)+" (Error "+r+")",null))}}if(a instanceof TypeError){q=$.kN()
p=$.kO()
o=$.kP()
n=$.kQ()
m=$.kT()
l=$.kU()
k=$.kS()
$.kR()
j=$.kW()
i=$.kV()
h=q.V(t)
if(h!=null)return u.$1(H.jh(H.A(t),h))
else{h=p.V(t)
if(h!=null){h.method="call"
return u.$1(H.jh(H.A(t),h))}else{h=o.V(t)
if(h==null){h=n.V(t)
if(h==null){h=m.V(t)
if(h==null){h=l.V(t)
if(h==null){h=k.V(t)
if(h==null){h=n.V(t)
if(h==null){h=j.V(t)
if(h==null){h=i.V(t)
g=h!=null}else g=!0}else g=!0}else g=!0}else g=!0}else g=!0}else g=!0}else g=!0
if(g)return u.$1(H.k1(H.A(t),h))}}return u.$1(new H.hR(typeof t==="string"?t:""))}if(a instanceof RangeError){if(typeof t==="string"&&t.indexOf("call stack")!==-1)return new P.dg()
t=function(b){try{return String(b)}catch(f){}return null}(a)
return u.$1(new P.at(!1,null,null,typeof t==="string"?t.replace(/^RangeError:\s*/,""):t))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof t==="string"&&t==="too much recursion")return new P.dg()
return a},
bD:function(a){var u
if(a==null)return new H.e1(a)
u=a.$cachedTrace
if(u!=null)return u
return a.$cachedTrace=new H.e1(a)},
ma:function(a,b){var u,t,s,r
u=a.length
for(t=0;t<u;t=r){s=t+1
r=s+1
b.J(0,a[t],a[s])}return b},
mj:function(a,b,c,d,e,f){H.n(a,"$ib7")
switch(H.Z(b)){case 0:return a.$0()
case 1:return a.$1(c)
case 2:return a.$2(c,d)
case 3:return a.$3(c,d,e)
case 4:return a.$4(c,d,e,f)}throw H.f(P.a3("Unsupported number of arguments for wrapped closure"))},
bC:function(a,b){var u
H.Z(b)
if(a==null)return
u=a.$identity
if(!!u)return u
u=function(c,d,e){return function(f,g,h,i){return e(c,d,f,g,h,i)}}(a,b,H.mj)
a.$identity=u
return u},
ld:function(a,b,c,d,e,f,g){var u,t,s,r,q,p,o,n,m,l,k,j,i
u=b[0]
t=u.$callName
if(!!J.Q(d).$ib){u.$reflectionInfo=d
s=H.lC(u).r}else s=d
r=e?Object.create(new H.hf().constructor.prototype):Object.create(new H.bP(null,null,null,null).constructor.prototype)
r.$initialize=r.constructor
if(e)q=function static_tear_off(){this.$initialize()}
else{p=$.au
if(typeof p!=="number")return p.R()
$.au=p+1
p=new Function("a,b,c,d"+p,"this.$initialize(a,b,c,d"+p+")")
q=p}r.constructor=q
q.prototype=r
if(!e){o=H.jQ(a,u,f)
o.$reflectionInfo=d}else{r.$static_name=g
o=u}if(typeof s=="number")n=function(h,a0){return function(){return h(a0)}}(H.md,s)
else if(typeof s=="function")if(e)n=s
else{m=f?H.jO:H.jc
n=function(h,a0){return function(){return h.apply({$receiver:a0(this)},arguments)}}(s,m)}else throw H.f("Error in reflectionInfo.")
r.$S=n
r[t]=o
for(l=o,k=1;k<b.length;++k){j=b[k]
i=j.$callName
if(i!=null){j=e?j:H.jQ(a,j,f)
r[i]=j}if(k===c){j.$reflectionInfo=d
l=j}}r.$C=l
r.$R=u.$R
r.$D=u.$D
return q},
la:function(a,b,c,d){var u=H.jc
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,u)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,u)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,u)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,u)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,u)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,u)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,u)}},
jQ:function(a,b,c){var u,t,s,r,q,p,o
if(c)return H.lc(a,b)
u=b.$stubName
t=b.length
s=a[u]
r=b==null?s==null:b===s
q=!r||t>=27
if(q)return H.la(t,!r,u,b)
if(t===0){r=$.au
if(typeof r!=="number")return r.R()
$.au=r+1
p="self"+r
r="return function(){var "+p+" = this."
q=$.bQ
if(q==null){q=H.ey("self")
$.bQ=q}return new Function(r+H.i(q)+";return "+p+"."+H.i(u)+"();}")()}o="abcdefghijklmnopqrstuvwxyz".split("").splice(0,t).join(",")
r=$.au
if(typeof r!=="number")return r.R()
$.au=r+1
o+=r
r="return function("+o+"){return this."
q=$.bQ
if(q==null){q=H.ey("self")
$.bQ=q}return new Function(r+H.i(q)+"."+H.i(u)+"("+o+");}")()},
lb:function(a,b,c,d){var u,t
u=H.jc
t=H.jO
switch(b?-1:a){case 0:throw H.f(H.lG("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,u,t)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,u,t)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,u,t)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,u,t)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,u,t)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,u,t)
default:return function(e,f,g,h){return function(){h=[g(this)]
Array.prototype.push.apply(h,arguments)
return e.apply(f(this),h)}}(d,u,t)}},
lc:function(a,b){var u,t,s,r,q,p,o,n
u=$.bQ
if(u==null){u=H.ey("self")
$.bQ=u}t=$.jN
if(t==null){t=H.ey("receiver")
$.jN=t}s=b.$stubName
r=b.length
q=a[s]
p=b==null?q==null:b===q
o=!p||r>=28
if(o)return H.lb(r,!p,s,b)
if(r===1){u="return function(){return this."+H.i(u)+"."+H.i(s)+"(this."+H.i(t)+");"
t=$.au
if(typeof t!=="number")return t.R()
$.au=t+1
return new Function(u+t+"}")()}n="abcdefghijklmnopqrstuvwxyz".split("").splice(0,r-1).join(",")
u="return function("+n+"){return this."+H.i(u)+"."+H.i(s)+"(this."+H.i(t)+", "+n+");"
t=$.au
if(typeof t!=="number")return t.R()
$.au=t+1
return new Function(u+t+"}")()},
jw:function(a,b,c,d,e,f,g){return H.ld(a,b,H.Z(c),d,!!e,!!f,g)},
jc:function(a){return a.a},
jO:function(a){return a.c},
ey:function(a){var u,t,s,r,q
u=new H.bP("self","target","receiver","name")
t=J.fd(Object.getOwnPropertyNames(u))
for(s=t.length,r=0;r<s;++r){q=t[r]
if(u[q]===a)return q}},
A:function(a){if(a==null)return a
if(typeof a==="string")return a
throw H.f(H.ar(a,"String"))},
nc:function(a){if(a==null)return a
if(typeof a==="number")return a
throw H.f(H.ar(a,"double"))},
mp:function(a){if(a==null)return a
if(typeof a==="number")return a
throw H.f(H.ar(a,"num"))},
ju:function(a){if(a==null)return a
if(typeof a==="boolean")return a
throw H.f(H.ar(a,"bool"))},
Z:function(a){if(a==null)return a
if(typeof a==="number"&&Math.floor(a)===a)return a
throw H.f(H.ar(a,"int"))},
kI:function(a,b){throw H.f(H.ar(a,H.bG(H.A(b).substring(2))))},
mr:function(a,b){throw H.f(H.l9(a,H.bG(H.A(b).substring(2))))},
n:function(a,b){if(a==null)return a
if((typeof a==="object"||typeof a==="function")&&J.Q(a)[b])return a
H.kI(a,b)},
bE:function(a,b){var u
if(a!=null)u=(typeof a==="object"||typeof a==="function")&&J.Q(a)[b]
else u=!0
if(u)return a
H.mr(a,b)},
jB:function(a){if(a==null)return a
if(!!J.Q(a).$ib)return a
throw H.f(H.ar(a,"List<dynamic>"))},
ml:function(a,b){var u
if(a==null)return a
u=J.Q(a)
if(!!u.$ib)return a
if(u[b])return a
H.kI(a,b)},
kC:function(a){var u
if("$S" in a){u=a.$S
if(typeof u=="number")return v.types[H.Z(u)]
else return a.$S()}return},
eo:function(a,b){var u
if(a==null)return!1
if(typeof a=="function")return!0
u=H.kC(J.Q(a))
if(u==null)return!1
return H.kt(u,null,b,null)},
j:function(a,b){var u,t
if(a==null)return a
if($.jq)return a
$.jq=!0
try{if(H.eo(a,b))return a
u=H.j5(b)
t=H.ar(a,u)
throw H.f(t)}finally{$.jq=!1}},
jx:function(a,b){if(a!=null&&!H.jv(a,b))H.a2(H.ar(a,H.j5(b)))
return a},
ar:function(a,b){return new H.hC("TypeError: "+P.eU(a)+": type '"+H.kx(a)+"' is not a subtype of type '"+b+"'")},
l9:function(a,b){return new H.ez("CastError: "+P.eU(a)+": type '"+H.kx(a)+"' is not a subtype of type '"+b+"'")},
kx:function(a){var u,t
u=J.Q(a)
if(!!u.$ibR){t=H.kC(u)
if(t!=null)return H.j5(t)
return"Closure"}return H.bt(a)},
mw:function(a){throw H.f(new P.eG(H.A(a)))},
lG:function(a){return new H.h1(a)},
kD:function(a){return v.getIsolateTag(a)},
c:function(a,b){a.$ti=b
return a},
bi:function(a){if(a==null)return
return a.$ti},
nd:function(a,b,c){return H.bF(a["$a"+H.i(c)],H.bi(b))},
cx:function(a,b,c,d){var u
H.A(c)
H.Z(d)
u=H.bF(a["$a"+H.i(c)],H.bi(b))
return u==null?null:u[d]},
a9:function(a,b,c){var u
H.A(b)
H.Z(c)
u=H.bF(a["$a"+H.i(b)],H.bi(a))
return u==null?null:u[c]},
u:function(a,b){var u
H.Z(b)
u=H.bi(a)
return u==null?null:u[b]},
j5:function(a){return H.bg(a,null)},
bg:function(a,b){var u,t
H.p(b,"$ib",[P.e],"$ab")
if(a==null)return"dynamic"
if(a===-1)return"void"
if(typeof a==="object"&&a!==null&&a.constructor===Array)return H.bG(a[0].name)+H.jt(a,1,b)
if(typeof a=="function")return H.bG(a.name)
if(a===-2)return"dynamic"
if(typeof a==="number"){H.Z(a)
if(b==null||a<0||a>=b.length)return"unexpected-generic-index:"+a
u=b.length
t=u-a-1
if(t<0||t>=u)return H.k(b,t)
return H.i(b[t])}if('func' in a)return H.lX(a,b)
if('futureOr' in a)return"FutureOr<"+H.bg("type" in a?a.type:null,b)+">"
return"unknown-reified-type"},
lX:function(a,b){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c
u=[P.e]
H.p(b,"$ib",u,"$ab")
if("bounds" in a){t=a.bounds
if(b==null){b=H.c([],u)
s=null}else s=b.length
r=b.length
for(q=t.length,p=q;p>0;--p)C.a.h(b,"T"+(r+p))
for(o="<",n="",p=0;p<q;++p,n=", "){o+=n
u=b.length
m=u-p-1
if(m<0)return H.k(b,m)
o=C.d.R(o,b[m])
l=t[p]
if(l!=null&&l!==P.E)o+=" extends "+H.bg(l,b)}o+=">"}else{o=""
s=null}k=!!a.v?"void":H.bg(a.ret,b)
if("args" in a){j=a.args
for(u=j.length,i="",h="",g=0;g<u;++g,h=", "){f=j[g]
i=i+h+H.bg(f,b)}}else{i=""
h=""}if("opt" in a){e=a.opt
i+=h+"["
for(u=e.length,h="",g=0;g<u;++g,h=", "){f=e[g]
i=i+h+H.bg(f,b)}i+="]"}if("named" in a){d=a.named
i+=h+"{"
for(u=H.m9(d),m=u.length,h="",g=0;g<m;++g,h=", "){c=H.A(u[g])
i=i+h+H.bg(d[c],b)+(" "+H.i(c))}i+="}"}if(s!=null)b.length=s
return o+"("+i+") => "+k},
jt:function(a,b,c){var u,t,s,r,q,p
H.p(c,"$ib",[P.e],"$ab")
if(a==null)return""
u=new P.bw("")
for(t=b,s="",r=!0,q="";t<a.length;++t,s=", "){u.a=q+s
p=a[t]
if(p!=null)r=!1
q=u.a+=H.bg(p,c)}return"<"+u.i(0)+">"},
bF:function(a,b){if(a==null)return b
a=a.apply(null,b)
if(a==null)return
if(typeof a==="object"&&a!==null&&a.constructor===Array)return a
if(typeof a=="function")return a.apply(null,b)
return b},
en:function(a,b,c,d){var u,t
H.A(b)
H.jB(c)
H.A(d)
if(a==null)return!1
u=H.bi(a)
t=J.Q(a)
if(t[b]==null)return!1
return H.kA(H.bF(t[d],u),null,c,null)},
p:function(a,b,c,d){H.A(b)
H.jB(c)
H.A(d)
if(a==null)return a
if(H.en(a,b,c,d))return a
throw H.f(H.ar(a,function(e,f){return e.replace(/[^<,> ]+/g,function(g){return f[g]||g})}(H.bG(b.substring(2))+H.jt(c,0,null),v.mangledGlobalNames)))},
kA:function(a,b,c,d){var u,t
if(c==null)return!0
if(a==null){u=c.length
for(t=0;t<u;++t)if(!H.am(null,null,c[t],d))return!1
return!0}u=a.length
for(t=0;t<u;++t)if(!H.am(a[t],b,c[t],d))return!1
return!0},
na:function(a,b,c){return a.apply(b,H.bF(J.Q(b)["$a"+H.i(c)],H.bi(b)))},
kF:function(a){var u
if(typeof a==="number")return!1
if('futureOr' in a){u="type" in a?a.type:null
return a==null||a.name==="E"||a.name==="C"||a===-1||a===-2||H.kF(u)}return!1},
jv:function(a,b){var u,t
if(a==null)return b==null||b.name==="E"||b.name==="C"||b===-1||b===-2||H.kF(b)
if(b==null||b===-1||b.name==="E"||b===-2)return!0
if(typeof b=="object"){if('futureOr' in b)if(H.jv(a,"type" in b?b.type:null))return!0
if('func' in b)return H.eo(a,b)}u=J.Q(a).constructor
t=H.bi(a)
if(t!=null){t=t.slice()
t.splice(0,0,u)
u=t}return H.am(u,null,b,null)},
B:function(a,b){if(a!=null&&!H.jv(a,b))throw H.f(H.ar(a,H.j5(b)))
return a},
am:function(a,b,c,d){var u,t,s,r,q,p,o,n,m
if(a===c)return!0
if(c==null||c===-1||c.name==="E"||c===-2)return!0
if(a===-2)return!0
if(a==null||a===-1||a.name==="E"||a===-2){if(typeof c==="number")return!1
if('futureOr' in c)return H.am(a,b,"type" in c?c.type:null,d)
return!1}if(typeof a==="number")return!1
if(typeof c==="number")return!1
if(a.name==="C")return!0
if('func' in c)return H.kt(a,b,c,d)
if('func' in a)return c.name==="b7"
u=typeof a==="object"&&a!==null&&a.constructor===Array
t=u?a[0]:a
if('futureOr' in c){s="type" in c?c.type:null
if('futureOr' in a)return H.am("type" in a?a.type:null,b,s,d)
else if(H.am(a,b,s,d))return!0
else{if(!('$i'+"bZ" in t.prototype))return!1
r=t.prototype["$a"+"bZ"]
q=H.bF(r,u?a.slice(1):null)
return H.am(typeof q==="object"&&q!==null&&q.constructor===Array?q[0]:null,b,s,d)}}p=typeof c==="object"&&c!==null&&c.constructor===Array
o=p?c[0]:c
if(o!==t){n=o.name
if(!('$i'+n in t.prototype))return!1
m=t.prototype["$a"+n]}else m=null
if(!p)return!0
u=u?a.slice(1):null
p=c.slice(1)
return H.kA(H.bF(m,u),b,p,d)},
kt:function(a,b,c,d){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g
if(!('func' in a))return!1
if("bounds" in a){if(!("bounds" in c))return!1
u=a.bounds
t=c.bounds
if(u.length!==t.length)return!1}else if("bounds" in c)return!1
if(!H.am(a.ret,b,c.ret,d))return!1
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
for(k=0;k<o;++k)if(!H.am(r[k],d,s[k],b))return!1
for(j=k,i=0;j<n;++i,++j)if(!H.am(r[j],d,q[i],b))return!1
for(j=0;j<l;++i,++j)if(!H.am(p[j],d,q[i],b))return!1
h=a.named
g=c.named
if(g==null)return!0
if(h==null)return!1
return H.mo(h,b,g,d)},
mo:function(a,b,c,d){var u,t,s,r
u=Object.getOwnPropertyNames(c)
for(t=u.length,s=0;s<t;++s){r=u[s]
if(!Object.hasOwnProperty.call(a,r))return!1
if(!H.am(c[r],d,a[r],b))return!1}return!0},
nb:function(a,b,c){Object.defineProperty(a,H.A(b),{value:c,enumerable:false,writable:true,configurable:true})},
mm:function(a){var u,t,s,r,q,p
u=H.A($.kE.$1(a))
t=$.iW[u]
if(t!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:t,enumerable:false,writable:true,configurable:true})
return t.i}s=$.j2[u]
if(s!=null)return s
r=v.interceptorsByTag[u]
if(r==null){u=H.A($.kz.$2(a,u))
if(u!=null){t=$.iW[u]
if(t!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:t,enumerable:false,writable:true,configurable:true})
return t.i}s=$.j2[u]
if(s!=null)return s
r=v.interceptorsByTag[u]}}if(r==null)return
s=r.prototype
q=u[0]
if(q==="!"){t=H.j4(s)
$.iW[u]=t
Object.defineProperty(a,v.dispatchPropertyName,{value:t,enumerable:false,writable:true,configurable:true})
return t.i}if(q==="~"){$.j2[u]=s
return s}if(q==="-"){p=H.j4(s)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}if(q==="+")return H.kH(a,s)
if(q==="*")throw H.f(P.kh(u))
if(v.leafTags[u]===true){p=H.j4(s)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}else return H.kH(a,s)},
kH:function(a,b){var u=Object.getPrototypeOf(a)
Object.defineProperty(u,v.dispatchPropertyName,{value:J.jC(b,u,null,null),enumerable:false,writable:true,configurable:true})
return b},
j4:function(a){return J.jC(a,!1,null,!!a.$iz)},
mn:function(a,b,c){var u=b.prototype
if(v.leafTags[a]===true)return H.j4(u)
else return J.jC(u,c,null,null)},
mh:function(){if(!0===$.jA)return
$.jA=!0
H.mi()},
mi:function(){var u,t,s,r,q,p,o,n
$.iW=Object.create(null)
$.j2=Object.create(null)
H.mg()
u=v.interceptorsByTag
t=Object.getOwnPropertyNames(u)
if(typeof window!="undefined"){window
s=function(){}
for(r=0;r<t.length;++r){q=t[r]
p=$.kJ.$1(q)
if(p!=null){o=H.mn(q,u[q],p)
if(o!=null){Object.defineProperty(p,v.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
s.prototype=p}}}}for(r=0;r<t.length;++r){q=t[r]
if(/^[A-Za-z_]/.test(q)){n=u[q]
u["!"+q]=n
u["~"+q]=n
u["-"+q]=n
u["+"+q]=n
u["*"+q]=n}}},
mg:function(){var u,t,s,r,q,p,o
u=C.L()
u=H.bB(C.I,H.bB(C.N,H.bB(C.t,H.bB(C.t,H.bB(C.M,H.bB(C.J,H.bB(C.K(C.u),u)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){t=dartNativeDispatchHooksTransformer
if(typeof t=="function")t=[t]
if(t.constructor==Array)for(s=0;s<t.length;++s){r=t[s]
if(typeof r=="function")u=r(u)||u}}q=u.getTag
p=u.getUnknownTag
o=u.prototypeForTag
$.kE=new H.j_(q)
$.kz=new H.j0(p)
$.kJ=new H.j1(o)},
bB:function(a,b){return a(b)||b},
lp:function(a,b,c,d){var u,t,s,r
u=b?"m":""
t=c?"":"i"
s=d?"g":""
r=function(e,f){try{return new RegExp(e,f)}catch(q){return q}}(a,u+t+s)
if(r instanceof RegExp)return r
throw H.f(new P.f4("Illegal RegExp pattern ("+String(r)+")",a,null))},
mu:function(a,b,c){var u=a.indexOf(b,c)
return u>=0},
jE:function(a,b,c){var u,t,s
if(b==="")if(a==="")return c
else{u=a.length
for(t=c,s=0;s<u;++s)t=t+a[s]+c
return t.charCodeAt(0)==0?t:t}else return a.replace(new RegExp(b.replace(/[[\]{}()*+?.\\^$|]/g,"\\$&"),'g'),c.replace(/\$/g,"$$$$"))},
fV:function fV(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.x=null},
hA:function hA(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
fM:function fM(a,b){this.a=a
this.b=b},
fi:function fi(a,b,c){this.a=a
this.b=b
this.c=c},
hR:function hR(a){this.a=a},
j8:function j8(a){this.a=a},
e1:function e1(a){this.a=a
this.b=null},
bR:function bR(){},
ho:function ho(){},
hf:function hf(){},
bP:function bP(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
hC:function hC(a){this.a=a},
ez:function ez(a){this.a=a},
h1:function h1(a){this.a=a},
aB:function aB(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
fm:function fm(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
cZ:function cZ(a,b){this.a=a
this.$ti=b},
fn:function fn(a,b,c){var _=this
_.a=a
_.b=b
_.d=_.c=null
_.$ti=c},
j_:function j_(a){this.a=a},
j0:function j0(a){this.a=a},
j1:function j1(a){this.a=a},
fh:function fh(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
jp:function(a){return a},
bf:function(a,b,c){if(a>>>0!==a||a>=c)throw H.f(H.cw(b,a))},
lW:function(a,b,c){var u
if(!(a>>>0!==a))u=b>>>0!==b||a>b||b>c
else u=!0
if(u)throw H.f(H.m8(a,b,c))
return b},
c4:function c4(){},
d2:function d2(){},
c3:function c3(){},
d3:function d3(){},
fD:function fD(){},
fE:function fE(){},
fF:function fF(){},
fG:function fG(){},
fH:function fH(){},
d4:function d4(){},
fI:function fI(){},
cm:function cm(){},
cn:function cn(){},
co:function co(){},
cp:function cp(){},
m9:function(a){return J.jW(a?Object.keys(a):[],null)},
mq:function(a){if(typeof dartPrint=="function"){dartPrint(a)
return}if(typeof console=="object"&&typeof console.log!="undefined"){console.log(a)
return}if(typeof window=="object")return
if(typeof print=="function"){print(a)
return}throw"Unable to print message: "+String(a)}},J={
jC:function(a,b,c,d){return{i:a,p:b,e:c,x:d}},
iZ:function(a){var u,t,s,r,q
u=a[v.dispatchPropertyName]
if(u==null)if($.jA==null){H.mh()
u=a[v.dispatchPropertyName]}if(u!=null){t=u.p
if(!1===t)return u.i
if(!0===t)return a
s=Object.getPrototypeOf(a)
if(t===s)return u.i
if(u.e===s)throw H.f(P.kh("Return interceptor for "+H.i(t(a,u))))}r=a.constructor
q=r==null?null:r[$.jG()]
if(q!=null)return q
q=H.mm(a)
if(q!=null)return q
if(typeof a=="function")return C.O
t=Object.getPrototypeOf(a)
if(t==null)return C.w
if(t===Object.prototype)return C.w
if(typeof r=="function"){Object.defineProperty(r,$.jG(),{value:C.p,enumerable:false,writable:true,configurable:true})
return C.p}return C.p},
lo:function(a,b){if(typeof a!=="number"||Math.floor(a)!==a)throw H.f(P.jb(a,"length","is not an integer"))
if(a<0||a>4294967295)throw H.f(P.ah(a,0,4294967295,"length",null))
return J.jW(new Array(a),b)},
jW:function(a,b){return J.fd(H.c(a,[b]))},
fd:function(a){H.jB(a)
a.fixed$length=Array
return a},
Q:function(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.cW.prototype
return J.ff.prototype}if(typeof a=="string")return J.b8.prototype
if(a==null)return J.fg.prototype
if(typeof a=="boolean")return J.fe.prototype
if(a.constructor==Array)return J.aA.prototype
if(typeof a!="object"){if(typeof a=="function")return J.b9.prototype
return a}if(a instanceof P.E)return a
return J.iZ(a)},
jy:function(a){if(typeof a=="string")return J.b8.prototype
if(a==null)return a
if(a.constructor==Array)return J.aA.prototype
if(typeof a!="object"){if(typeof a=="function")return J.b9.prototype
return a}if(a instanceof P.E)return a
return J.iZ(a)},
iY:function(a){if(a==null)return a
if(a.constructor==Array)return J.aA.prototype
if(typeof a!="object"){if(typeof a=="function")return J.b9.prototype
return a}if(a instanceof P.E)return a
return J.iZ(a)},
mb:function(a){if(typeof a=="number")return J.bp.prototype
if(a==null)return a
if(!(a instanceof P.E))return J.bd.prototype
return a},
mc:function(a){if(typeof a=="number")return J.bp.prototype
if(typeof a=="string")return J.b8.prototype
if(a==null)return a
if(!(a instanceof P.E))return J.bd.prototype
return a},
jz:function(a){if(typeof a=="string")return J.b8.prototype
if(a==null)return a
if(!(a instanceof P.E))return J.bd.prototype
return a},
ac:function(a){if(a==null)return a
if(typeof a!="object"){if(typeof a=="function")return J.b9.prototype
return a}if(a instanceof P.E)return a
return J.iZ(a)},
S:function(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.Q(a).n(a,b)},
jJ:function(a,b){if(typeof a=="number"&&typeof b=="number")return a*b
return J.mc(a).K(a,b)},
l1:function(a,b){if(typeof a=="number"&&typeof b=="number")return a-b
return J.mb(a).u(a,b)},
l2:function(a,b){if(typeof b==="number")if(a.constructor==Array||typeof a=="string"||H.mk(a,a[v.dispatchPropertyName]))if(b>>>0===b&&b<a.length)return a[b]
return J.jy(a).m(a,b)},
ep:function(a,b){return J.ac(a).er(a,b)},
l3:function(a,b,c,d){return J.ac(a).eQ(a,b,c,d)},
jK:function(a,b){return J.ac(a).p(a,b)},
j9:function(a,b){return J.iY(a).w(a,b)},
l4:function(a,b){return J.iY(a).F(a,b)},
l5:function(a){return J.ac(a).geV(a)},
cB:function(a){return J.Q(a).gD(a)},
bN:function(a){return J.iY(a).gH(a)},
bk:function(a){return J.jy(a).gk(a)},
l6:function(a){return J.ac(a).gh0(a)},
ja:function(a,b){return J.ac(a).al(a,b)},
jL:function(a){return J.iY(a).fS(a)},
l7:function(a,b,c){return J.jz(a).au(a,b,c)},
l8:function(a){return J.jz(a).h4(a)},
as:function(a){return J.Q(a).i(a)},
a:function a(){},
fe:function fe(){},
fg:function fg(){},
cX:function cX(){},
fQ:function fQ(){},
bd:function bd(){},
b9:function b9(){},
aA:function aA(a){this.$ti=a},
jf:function jf(a){this.$ti=a},
ae:function ae(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=null
_.$ti=d},
bp:function bp(){},
cW:function cW(){},
ff:function ff(){},
b8:function b8(){}},P={
lM:function(){var u,t,s
u={}
if(self.scheduleImmediate!=null)return P.m3()
if(self.MutationObserver!=null&&self.document!=null){t=self.document.createElement("div")
s=self.document.createElement("span")
u.a=null
new self.MutationObserver(H.bC(new P.ia(u),1)).observe(t,{childList:true})
return new P.i9(u,t,s)}else if(self.setImmediate!=null)return P.m4()
return P.m5()},
lN:function(a){self.scheduleImmediate(H.bC(new P.ib(H.j(a,{func:1,ret:-1})),0))},
lO:function(a){self.setImmediate(H.bC(new P.ic(H.j(a,{func:1,ret:-1})),0))},
lP:function(a){P.jk(C.l,H.j(a,{func:1,ret:-1}))},
jk:function(a,b){var u
H.j(b,{func:1,ret:-1})
u=C.h.ag(a.a,1000)
return P.lU(u<0?0:u,b)},
kf:function(a,b){var u
H.j(b,{func:1,ret:-1,args:[P.aJ]})
u=C.h.ag(a.a,1000)
return P.lV(u<0?0:u,b)},
lU:function(a,b){var u=new P.e7(!0)
u.de(a,b)
return u},
lV:function(a,b){var u=new P.e7(!1)
u.df(a,b)
return u},
lQ:function(a,b){var u,t,s
b.a=1
try{a.cp(new P.im(b),new P.io(b),null)}catch(s){u=H.ad(s)
t=H.bD(s)
P.ms(new P.ip(b,u,t))}},
ko:function(a,b){var u,t
for(;u=a.a,u===2;)a=H.n(a.c,"$ial")
if(u>=4){t=b.b0()
b.a=a.a
b.c=a.c
P.cl(b,t)}else{t=H.n(b.c,"$iaO")
b.a=2
b.c=a
a.bK(t)}},
cl:function(a,b){var u,t,s,r,q,p,o,n,m,l,k,j,i,h
u={}
u.a=a
for(t=a;!0;){s={}
r=t.a===8
if(b==null){if(r){q=H.n(t.c,"$ia_")
t=t.b
p=q.a
o=q.b
t.toString
P.iR(null,null,t,p,o)}return}for(;n=b.a,n!=null;b=n){b.a=null
P.cl(u.a,b)}t=u.a
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
if(k){H.n(m,"$ia_")
t=t.b
p=m.a
o=m.b
t.toString
P.iR(null,null,t,p,o)
return}j=$.N
if(j!=l)$.N=l
else j=null
t=b.c
if(t===8)new P.it(u,s,b,r).$0()
else if(p){if((t&1)!==0)new P.is(s,b,m).$0()}else if((t&2)!==0)new P.ir(u,s,b).$0()
if(j!=null)$.N=j
t=s.b
if(!!J.Q(t).$ibZ){if(t.a>=4){i=H.n(o.c,"$iaO")
o.c=null
b=o.az(i)
o.a=t.a
o.c=t.c
u.a=t
continue}else P.ko(t,o)
return}}h=b.b
i=H.n(h.c,"$iaO")
h.c=null
b=h.az(i)
t=s.a
p=s.b
if(!t){H.B(p,H.u(h,0))
h.a=4
h.c=p}else{H.n(p,"$ia_")
h.a=8
h.c=p}u.a=h
t=h}},
m_:function(a,b){if(H.eo(a,{func:1,args:[P.E,P.a8]}))return H.j(a,{func:1,ret:null,args:[P.E,P.a8]})
if(H.eo(a,{func:1,args:[P.E]}))return H.j(a,{func:1,ret:null,args:[P.E]})
throw H.f(P.jb(a,"onError","Error handler must accept one Object or one Object and a StackTrace as arguments, and return a a valid result"))},
lZ:function(){var u,t
for(;u=$.bA,u!=null;){$.cv=null
t=u.b
$.bA=t
if(t==null)$.cu=null
u.a.$0()}},
m2:function(){$.jr=!0
try{P.lZ()}finally{$.cv=null
$.jr=!1
if($.bA!=null)$.jH().$1(P.kB())}},
kw:function(a){var u=new P.du(H.j(a,{func:1,ret:-1}))
if($.bA==null){$.cu=u
$.bA=u
if(!$.jr)$.jH().$1(P.kB())}else{$.cu.b=u
$.cu=u}},
m1:function(a){var u,t,s
H.j(a,{func:1,ret:-1})
u=$.bA
if(u==null){P.kw(a)
$.cv=$.cu
return}t=new P.du(a)
s=$.cv
if(s==null){t.b=u
$.cv=t
$.bA=t}else{t.b=s.b
s.b=t
$.cv=t
if(t.b==null)$.cu=t}},
ms:function(a){var u,t
u={func:1,ret:-1}
H.j(a,u)
t=$.N
if(C.f===t){P.iT(null,null,C.f,a)
return}t.toString
P.iT(null,null,t,H.j(t.b4(a),u))},
ke:function(a,b){var u,t
u={func:1,ret:-1}
H.j(b,u)
t=$.N
if(t===C.f){t.toString
return P.jk(a,b)}return P.jk(a,H.j(t.b4(b),u))},
lK:function(a,b){var u,t,s
u={func:1,ret:-1,args:[P.aJ]}
H.j(b,u)
t=$.N
if(t===C.f){t.toString
return P.kf(a,b)}s=t.bT(b,P.aJ)
$.N.toString
return P.kf(a,H.j(s,u))},
iR:function(a,b,c,d,e){var u={}
u.a=d
P.m1(new P.iS(u,e))},
ku:function(a,b,c,d,e){var u,t
H.j(d,{func:1,ret:e})
t=$.N
if(t===c)return d.$0()
$.N=c
u=t
try{t=d.$0()
return t}finally{$.N=u}},
kv:function(a,b,c,d,e,f,g){var u,t
H.j(d,{func:1,ret:f,args:[g]})
H.B(e,g)
t=$.N
if(t===c)return d.$1(e)
$.N=c
u=t
try{t=d.$1(e)
return t}finally{$.N=u}},
m0:function(a,b,c,d,e,f,g,h,i){var u,t
H.j(d,{func:1,ret:g,args:[h,i]})
H.B(e,h)
H.B(f,i)
t=$.N
if(t===c)return d.$2(e,f)
$.N=c
u=t
try{t=d.$2(e,f)
return t}finally{$.N=u}},
iT:function(a,b,c,d){var u
H.j(d,{func:1,ret:-1})
u=C.f!==c
if(u)d=!(!u||!1)?c.b4(d):c.eW(d,-1)
P.kw(d)},
ia:function ia(a){this.a=a},
i9:function i9(a,b,c){this.a=a
this.b=b
this.c=c},
ib:function ib(a){this.a=a},
ic:function ic(a){this.a=a},
e7:function e7(a){this.a=a
this.b=null
this.c=0},
iN:function iN(a,b){this.a=a
this.b=b},
iM:function iM(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
aO:function aO(a,b,c,d,e){var _=this
_.a=null
_.b=a
_.c=b
_.d=c
_.e=d
_.$ti=e},
al:function al(a,b,c){var _=this
_.a=a
_.b=b
_.c=null
_.$ti=c},
il:function il(a,b){this.a=a
this.b=b},
iq:function iq(a,b){this.a=a
this.b=b},
im:function im(a){this.a=a},
io:function io(a){this.a=a},
ip:function ip(a,b,c){this.a=a
this.b=b
this.c=c},
it:function it(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
iu:function iu(a){this.a=a},
is:function is(a,b,c){this.a=a
this.b=b
this.c=c},
ir:function ir(a,b,c){this.a=a
this.b=b
this.c=c},
du:function du(a){this.a=a
this.b=null},
hi:function hi(){},
hk:function hk(a,b){this.a=a
this.b=b},
hl:function hl(a,b){this.a=a
this.b=b},
cb:function cb(){},
hj:function hj(){},
aJ:function aJ(){},
a_:function a_(a,b){this.a=a
this.b=b},
iQ:function iQ(){},
iS:function iS(a,b){this.a=a
this.b=b},
iz:function iz(){},
iB:function iB(a,b,c){this.a=a
this.b=b
this.c=c},
iA:function iA(a,b){this.a=a
this.b=b},
iC:function iC(a,b,c){this.a=a
this.b=b
this.c=c},
jX:function(a,b){return new H.aB([a,b])},
lq:function(a){return H.ma(a,new H.aB([null,null]))},
d_:function(a,b,c,d){return new P.ix([d])},
jo:function(){var u=Object.create(null)
u["<non-identifier-key>"]=u
delete u["<non-identifier-key>"]
return u},
lT:function(a,b,c){var u=new P.dJ(a,b,[c])
u.c=a.e
return u},
lm:function(a,b,c){var u,t
if(P.js(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}u=H.c([],[P.e])
t=$.cA()
C.a.h(t,a)
try{P.lY(a,u)}finally{if(0>=t.length)return H.k(t,-1)
t.pop()}t=P.kc(b,H.ml(u,"$ih"),", ")+c
return t.charCodeAt(0)==0?t:t},
je:function(a,b,c){var u,t,s
if(P.js(a))return b+"..."+c
u=new P.bw(b)
t=$.cA()
C.a.h(t,a)
try{s=u
s.a=P.kc(s.a,a,", ")}finally{if(0>=t.length)return H.k(t,-1)
t.pop()}u.a+=c
t=u.a
return t.charCodeAt(0)==0?t:t},
js:function(a){var u,t
for(u=0;t=$.cA(),u<t.length;++u)if(a===t[u])return!0
return!1},
lY:function(a,b){var u,t,s,r,q,p,o,n,m,l
H.p(b,"$ib",[P.e],"$ab")
u=a.gH(a)
t=0
s=0
while(!0){if(!(t<80||s<3))break
if(!u.q())return
r=H.i(u.gB(u))
C.a.h(b,r)
t+=r.length+2;++s}if(!u.q()){if(s<=5)return
if(0>=b.length)return H.k(b,-1)
q=b.pop()
if(0>=b.length)return H.k(b,-1)
p=b.pop()}else{o=u.gB(u);++s
if(!u.q()){if(s<=4){C.a.h(b,H.i(o))
return}q=H.i(o)
if(0>=b.length)return H.k(b,-1)
p=b.pop()
t+=q.length+2}else{n=u.gB(u);++s
for(;u.q();o=n,n=m){m=u.gB(u);++s
if(s>100){while(!0){if(!(t>75&&s>3))break
if(0>=b.length)return H.k(b,-1)
t-=b.pop().length+2;--s}C.a.h(b,"...")
return}}p=H.i(o)
q=H.i(n)
t+=q.length+p.length+4}}if(s>b.length+2){t+=5
l="..."}else l=null
while(!0){if(!(t>80&&b.length>3))break
if(0>=b.length)return H.k(b,-1)
t-=b.pop().length+2
if(l==null){t+=5
l="..."}}if(l!=null)C.a.h(b,l)
C.a.h(b,p)
C.a.h(b,q)},
jY:function(a,b){var u,t,s
u=P.d_(null,null,null,b)
for(t=a.length,s=0;s<a.length;a.length===t||(0,H.G)(a),++s)u.h(0,H.B(a[s],b))
return u},
jZ:function(a){var u,t
u={}
if(P.js(a))return"{...}"
t=new P.bw("")
try{C.a.h($.cA(),a)
t.a+="{"
u.a=!0
J.l4(a,new P.fr(u,t))
t.a+="}"}finally{u=$.cA()
if(0>=u.length)return H.k(u,-1)
u.pop()}u=t.a
return u.charCodeAt(0)==0?u:u},
ix:function ix(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
bz:function bz(a){this.a=a
this.c=this.b=null},
dJ:function dJ(a,b,c){var _=this
_.a=a
_.b=b
_.d=_.c=null
_.$ti=c},
fo:function fo(){},
t:function t(){},
fq:function fq(){},
fr:function fr(a,b){this.a=a
this.b=b},
W:function W(){},
iE:function iE(){},
dK:function dK(){},
bS:function bS(){},
bT:function bT(){},
eS:function eS(){},
fa:function fa(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
f9:function f9(a){this.a=a},
hU:function hU(a){this.a=a},
hV:function hV(){},
iO:function iO(a){this.b=this.a=0
this.c=a},
lk:function(a){if(a instanceof H.bR)return a.i(0)
return"Instance of '"+H.bt(a)+"'"},
lr:function(a,b,c,d){var u,t
H.B(b,d)
u=J.lo(a,d)
if(a!==0&&!0)for(t=0;t<u.length;++t)C.a.J(u,t,b)
return H.p(u,"$ib",[d],"$ab")},
ls:function(a,b,c){var u,t,s
u=[c]
t=H.c([],u)
for(s=a.gH(a);s.q();)C.a.h(t,H.B(s.gB(s),c))
if(b)return t
return H.p(J.fd(t),"$ib",u,"$ab")},
jj:function(a,b,c){var u,t
u=P.y
H.p(a,"$ih",[u],"$ah")
if(a.constructor===Array){H.p(a,"$iaA",[u],"$aaA")
t=a.length
c=P.k8(b,c,t,null,null,null)
return H.k7(b>0||c<t?C.a.cW(a,b,c):a)}return P.lI(a,b,c)},
lI:function(a,b,c){var u,t,s
H.p(a,"$ih",[P.y],"$ah")
u=J.bN(a)
for(t=0;t<b;++t)if(!u.q())throw H.f(P.ah(b,0,t,null,null))
s=[]
for(;u.q();)s.push(u.gB(u))
return H.k7(s)},
lD:function(a,b,c){return new H.fh(a,H.lp(a,!1,!0,!1))},
kc:function(a,b,c){var u=J.bN(b)
if(!u.q())return a
if(c.length===0){do a+=H.i(u.gB(u))
while(u.q())}else{a+=H.i(u.gB(u))
for(;u.q();)a=a+c+H.i(u.gB(u))}return a},
ks:function(a,b,c,d){var u,t,s,r,q,p
H.p(a,"$ib",[P.y],"$ab")
if(c===C.q){u=$.l0().b
u=u.test(b)}else u=!1
if(u)return b
t=C.B.f3(H.B(b,H.a9(c,"bS",0)))
for(u=t.length,s=0,r="";s<u;++s){q=t[s]
if(q<128){p=q>>>4
if(p>=8)return H.k(a,p)
p=(a[p]&1<<(q&15))!==0}else p=!1
if(p)r+=H.ji(q)
else r=r+"%"+"0123456789ABCDEF"[q>>>4&15]+"0123456789ABCDEF"[q&15]}return r.charCodeAt(0)==0?r:r},
le:function(a){var u,t
u=Math.abs(a)
t=a<0?"-":""
if(u>=1000)return""+a
if(u>=100)return t+"0"+u
if(u>=10)return t+"00"+u
return t+"000"+u},
lf:function(a){if(a>=100)return""+a
if(a>=10)return"0"+a
return"00"+a},
cL:function(a){if(a>=10)return""+a
return"0"+a},
jT:function(a,b,c,d,e,f){return new P.aQ(864e8*a+36e8*b+6e7*e+1e6*f+1000*d+c)},
eU:function(a){if(typeof a==="number"||typeof a==="boolean"||null==a)return J.as(a)
if(typeof a==="string")return JSON.stringify(a)
return P.lk(a)},
jb:function(a,b,c){return new P.at(!0,a,b,c)},
db:function(a,b,c){return new P.bu(null,null,!0,a,b,"Value not in range")},
ah:function(a,b,c,d,e){return new P.bu(b,c,!0,a,d,"Invalid value")},
k8:function(a,b,c,d,e,f){if(0>a||a>c)throw H.f(P.ah(a,0,c,"start",f))
if(b!=null){if(a>b||b>c)throw H.f(P.ah(b,a,c,"end",f))
return b}return c},
L:function(a,b,c,d,e){var u=H.Z(e==null?J.bk(b):e)
return new P.fb(b,u,!0,a,c,"Index out of range")},
ai:function(a){return new P.hS(a)},
kh:function(a){return new P.hQ(a)},
kb:function(a){return new P.ca(a)},
b4:function(a){return new P.eB(a)},
a3:function(a){return new P.dC(a)},
jD:function(a){H.mq(a)},
K:function K(){},
b5:function b5(a,b){this.a=a
this.b=b},
w:function w(){},
aQ:function aQ(a){this.a=a},
eO:function eO(){},
eP:function eP(){},
b6:function b6(){},
d6:function d6(){},
at:function at(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
bu:function bu(a,b,c,d,e,f){var _=this
_.e=a
_.f=b
_.a=c
_.b=d
_.c=e
_.d=f},
fb:function fb(a,b,c,d,e,f){var _=this
_.e=a
_.f=b
_.a=c
_.b=d
_.c=e
_.d=f},
hS:function hS(a){this.a=a},
hQ:function hQ(a){this.a=a},
ca:function ca(a){this.a=a},
eB:function eB(a){this.a=a},
fP:function fP(){},
dg:function dg(){},
eG:function eG(a){this.a=a},
dC:function dC(a){this.a=a},
f4:function f4(a,b,c){this.a=a
this.b=b
this.c=c},
b7:function b7(){},
y:function y(){},
h:function h(){},
az:function az(){},
b:function b(){},
F:function F(){},
C:function C(){},
T:function T(){},
E:function E(){},
a8:function a8(){},
e:function e(){},
bw:function bw(a){this.a=a},
aY:function(a){var u,t,s,r,q
if(a==null)return
u=P.jX(P.e,null)
t=Object.getOwnPropertyNames(a)
for(s=t.length,r=0;r<t.length;t.length===s||(0,H.G)(t),++r){q=H.A(t[r])
u.J(0,q,a[q])}return u},
m6:function(a,b){var u={}
a.F(0,new P.iU(u))
return u},
iU:function iU(a){this.a=a},
f0:function f0(a,b){this.a=a
this.b=b},
f1:function f1(){},
f2:function f2(){},
iy:function iy(){},
a7:function a7(){},
aT:function aT(){},
fk:function fk(){},
aW:function aW(){},
fN:function fN(){},
fT:function fT(){},
c7:function c7(){},
hm:function hm(){},
m:function m(){},
aX:function aX(){},
hz:function hz(){},
dH:function dH(){},
dI:function dI(){},
dS:function dS(){},
dT:function dT(){},
e3:function e3(){},
e4:function e4(){},
ea:function ea(){},
eb:function eb(){},
et:function et(){},
eu:function eu(){},
ev:function ev(a){this.a=a},
ew:function ew(){},
bl:function bl(){},
fO:function fO(){},
dv:function dv(){},
cF:function cF(){},
cR:function cR(){},
d9:function d9(){},
bv:function bv(){},
de:function de(){},
dn:function dn(){},
he:function he(){},
e_:function e_(){},
e0:function e0(){}},W={
jM:function(a){var u=document.createElement("a")
return u},
jP:function(a,b){var u=document.createElement("canvas")
return u},
li:function(a,b,c){var u,t
u=document.body
t=(u&&C.j).U(u,a,b,c)
t.toString
u=W.x
u=new H.ci(new W.a1(t),H.j(new W.eR(),{func:1,ret:P.K,args:[u]}),[u])
return H.n(u.gaa(u),"$iJ")},
lj:function(a){H.n(a,"$id")
return"wheel"},
bX:function(a){var u,t,s
u="element tag unavailable"
try{t=J.l6(a)
if(typeof t==="string")u=a.tagName}catch(s){H.ad(s)}return u},
iw:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
kq:function(a,b,c,d){var u,t
u=W.iw(W.iw(W.iw(W.iw(0,a),b),c),d)
t=536870911&u+((67108863&u)<<3)
t^=t>>>11
return 536870911&t+((16383&t)<<15)},
Y:function(a,b,c,d,e){var u=W.ky(new W.ik(c),W.l)
if(u!=null&&!0)J.l3(a,b,u,!1)
return new W.ij(a,b,u,!1,[e])},
kp:function(a){var u,t
u=W.jM(null)
t=window.location
u=new W.be(new W.iD(u,t))
u.d9(a)
return u},
lR:function(a,b,c,d){H.n(a,"$iJ")
H.A(b)
H.A(c)
H.n(d,"$ibe")
return!0},
lS:function(a,b,c,d){var u,t,s
H.n(a,"$iJ")
H.A(b)
H.A(c)
u=H.n(d,"$ibe").a
t=u.a
t.href=c
s=t.hostname
u=u.b
if(!(s==u.hostname&&t.port==u.port&&t.protocol==u.protocol))if(s==="")if(t.port===""){u=t.protocol
u=u===":"||u===""}else u=!1
else u=!1
else u=!0
return u},
kr:function(){var u,t,s,r,q
u=P.e
t=P.jY(C.m,u)
s=H.u(C.m,0)
r=H.j(new W.iL(),{func:1,ret:u,args:[s]})
q=H.c(["TEMPLATE"],[u])
t=new W.iK(t,P.d_(null,null,null,u),P.d_(null,null,null,u),P.d_(null,null,null,u),null)
t.dd(null,new H.fu(C.m,r,[s,u]),q,null)
return t},
ky:function(a,b){var u
H.j(a,{func:1,ret:-1,args:[b]})
u=$.N
if(u===C.f)return a
return u.bT(a,b)},
q:function q(){},
eq:function eq(){},
cC:function cC(){},
er:function er(){},
bO:function bO(){},
cE:function cE(){},
b_:function b_(){},
bm:function bm(){},
b0:function b0(){},
bU:function bU(){},
eC:function eC(){},
I:function I(){},
bV:function bV(){},
eD:function eD(){},
av:function av(){},
aw:function aw(){},
eE:function eE(){},
eF:function eF(){},
eI:function eI(){},
af:function af(){},
bW:function bW(){},
eL:function eL(){},
cM:function cM(){},
cN:function cN(){},
cO:function cO(){},
eM:function eM(){},
eN:function eN(){},
ie:function ie(a,b){this.a=a
this.b=b},
J:function J(){},
eR:function eR(){},
l:function l(){},
d:function d(){},
ax:function ax(){},
eZ:function eZ(){},
f_:function f_(){},
f3:function f3(){},
ay:function ay(){},
cS:function cS(){},
f8:function f8(){},
bo:function bo(){},
cT:function cT(){},
aC:function aC(){},
d0:function d0(){},
fw:function fw(){},
fx:function fx(){},
fy:function fy(a){this.a=a},
fz:function fz(){},
fA:function fA(a){this.a=a},
aD:function aD(){},
fB:function fB(){},
X:function X(){},
a1:function a1(a){this.a=a},
x:function x(){},
c5:function c5(){},
aE:function aE(){},
fS:function fS(){},
da:function da(){},
h_:function h_(){},
h0:function h0(a){this.a=a},
h2:function h2(){},
aF:function aF(){},
hc:function hc(){},
aG:function aG(){},
hd:function hd(){},
aH:function aH(){},
hg:function hg(){},
hh:function hh(a){this.a=a},
ao:function ao(){},
bx:function bx(){},
dh:function dh(){},
di:function di(){},
hn:function hn(){},
cc:function cc(){},
aI:function aI(){},
ap:function ap(){},
hp:function hp(){},
hq:function hq(){},
ht:function ht(){},
aK:function aK(){},
aq:function aq(){},
hx:function hx(){},
hy:function hy(){},
bc:function bc(){},
hT:function hT(){},
i6:function i6(){},
aN:function aN(){},
cj:function cj(){},
ck:function ck(){},
ig:function ig(){},
dx:function dx(){},
iv:function iv(){},
dP:function dP(){},
iH:function iH(){},
iI:function iI(){},
id:function id(){},
ih:function ih(a){this.a=a},
ii:function ii(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
jn:function jn(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
ij:function ij(a,b,c,d,e){var _=this
_.a=0
_.b=a
_.c=b
_.d=c
_.e=d
_.$ti=e},
ik:function ik(a){this.a=a},
be:function be(a){this.a=a},
v:function v(){},
d5:function d5(a){this.a=a},
fK:function fK(a){this.a=a},
fJ:function fJ(a,b,c){this.a=a
this.b=b
this.c=c},
dX:function dX(){},
iF:function iF(){},
iG:function iG(){},
iK:function iK(a,b,c,d,e){var _=this
_.e=a
_.a=b
_.b=c
_.c=d
_.d=e},
iL:function iL(){},
iJ:function iJ(){},
cQ:function cQ(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=null
_.$ti=d},
ab:function ab(){},
iD:function iD(a,b){this.a=a
this.b=b},
ec:function ec(a){this.a=a},
iP:function iP(a){this.a=a},
dw:function dw(){},
dy:function dy(){},
dz:function dz(){},
dA:function dA(){},
dB:function dB(){},
dD:function dD(){},
dE:function dE(){},
dF:function dF(){},
dG:function dG(){},
dL:function dL(){},
dM:function dM(){},
dN:function dN(){},
dO:function dO(){},
dQ:function dQ(){},
dR:function dR(){},
dU:function dU(){},
dV:function dV(){},
dW:function dW(){},
cq:function cq(){},
cr:function cr(){},
dY:function dY(){},
dZ:function dZ(){},
e2:function e2(){},
e5:function e5(){},
e6:function e6(){},
cs:function cs(){},
ct:function ct(){},
e8:function e8(){},
e9:function e9(){},
ed:function ed(){},
ee:function ee(){},
ef:function ef(){},
eg:function eg(){},
eh:function eh(){},
ei:function ei(){},
ej:function ej(){},
ek:function ek(){},
el:function el(){},
em:function em(){}},O={
jR:function(a){var u=new O.U([a])
u.bl(a)
return u},
U:function U(a){var _=this
_.d=_.c=_.b=_.a=null
_.$ti=a},
c2:function c2(){this.b=this.a=null},
eJ:function eJ(){var _=this
_.f=_.e=_.d=_.c=_.b=_.a=null},
by:function by(){}},E={
aS:function(a,b,c,d,e,f){var u,t,s,r,q
u=new E.a0()
u.a=d
u.b=!0
u.sd8(0,O.jR(E.a0))
u.y.aK(u.gfC(),u.gfF())
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
t=u.c
if(t!=e){u.c=e
u.d=e
u.e=null
if(t!=null)t.gv().I(0,u.gcd())
s=u.c
if(s!=null)s.gv().h(0,u.gcd())
r=new D.P("shape",t,u.c,u,[F.df])
r.b=!0
u.X(r)}if(!J.S(u.r,c)){q=u.r
if(q!=null)q.gv().I(0,u.gcb())
c.gv().h(0,u.gcb())
u.r=c
r=new D.P("mover",q,c,u,[U.a4])
r.b=!0
u.X(r)}return u},
lF:function(a,b){var u=new E.fW(a,b)
u.d2(a,b)
return u},
lJ:function(a,b,c,d,e){var u,t,s,r
u=J.Q(a)
if(!!u.$ibm)return E.kd(a,!0,!0,!0,!1)
t=W.jP(null,null)
s=t.style
s.width="100%"
s.height="100%"
u.gbV(a).h(0,t)
r=E.kd(t,!0,!0,!0,!1)
r.a=a
return r},
kd:function(a,b,c,d,e){var u,t,s,r,q,p,o,n,m,l,k
u=new E.dk()
t=H.n(C.C.cG(a,"webgl2",P.lq(["alpha",!0,"depth",!0,"stencil",!1,"antialias",!0])),"$ibv")
if(t==null)H.a2(P.a3("Failed to get the rendering context for WebGL."))
u.b=a
u.a=a
u.c=t
u.e=E.lF(t,a)
s=new T.hr(t)
s.b=H.Z((t&&C.b).bg(t,3379))
s.c=H.Z(C.b.bg(t,34076))
s.d=0
s.e=0
u.f=s
s=new X.dr(a)
r=new X.fj()
r.c=new X.aV(!1,!1,!1)
r.seo(P.d_(null,null,null,P.y))
s.b=r
r=new X.fC(s)
r.f=0
r.r=V.d8()
r.x=V.d8()
r.Q=1
r.ch=1
s.c=r
r=new X.fp(s)
r.r=0
r.x=V.d8()
r.Q=1
r.ch=1
r.cx=1
r.cy=1
s.d=r
r=new X.hw(s)
r.e=0
r.f=V.d8()
r.r=V.d8()
s.e=r
s.f=!1
s.r=!1
s.x=!1
s.y=null
s.sdu(H.c([],[[P.cb,P.E]]))
r=s.z
q=document
p=W.X
o={func:1,ret:-1,args:[p]};(r&&C.a).h(r,W.Y(q,"contextmenu",H.j(s.gdT(),o),!1,p))
r=s.z
n=W.l
m={func:1,ret:-1,args:[n]};(r&&C.a).h(r,W.Y(a,"focus",H.j(s.gdZ(),m),!1,n))
r=s.z;(r&&C.a).h(r,W.Y(a,"blur",H.j(s.gdN(),m),!1,n))
r=s.z
l=W.aC
k={func:1,ret:-1,args:[l]};(r&&C.a).h(r,W.Y(q,"keyup",H.j(s.ge2(),k),!1,l))
r=s.z;(r&&C.a).h(r,W.Y(q,"keydown",H.j(s.ge0(),k),!1,l))
l=s.z;(l&&C.a).h(l,W.Y(a,"mousedown",H.j(s.ge5(),o),!1,p))
l=s.z;(l&&C.a).h(l,W.Y(a,"mouseup",H.j(s.ge9(),o),!1,p))
l=s.z;(l&&C.a).h(l,W.Y(a,"mousemove",H.j(s.ge7(),o),!1,p))
l=s.z
k=W.aN;(l&&C.a).h(l,W.Y(a,H.A(W.lj(a)),H.j(s.geb(),{func:1,ret:-1,args:[k]}),!1,k))
k=s.z;(k&&C.a).h(k,W.Y(q,"mousemove",H.j(s.gdV(),o),!1,p))
k=s.z;(k&&C.a).h(k,W.Y(q,"mouseup",H.j(s.gdX(),o),!1,p))
p=s.z;(p&&C.a).h(p,W.Y(q,"pointerlockchange",H.j(s.ged(),m),!1,n))
n=s.z
m=W.aq
q={func:1,ret:-1,args:[m]};(n&&C.a).h(n,W.Y(a,"touchstart",H.j(s.gem(),q),!1,m))
n=s.z;(n&&C.a).h(n,W.Y(a,"touchend",H.j(s.gei(),q),!1,m))
n=s.z;(n&&C.a).h(n,W.Y(a,"touchmove",H.j(s.gek(),q),!1,m))
u.r=s
u.Q=!0
u.ch=!1
u.cx=new P.b5(Date.now(),!1)
u.cy=0
u.bL()
return u},
ex:function ex(){},
a0:function a0(){var _=this
_.fx=_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
fW:function fW(a,b){var _=this
_.a=a
_.b=b
_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=null},
fX:function fX(a){this.a=a},
fY:function fY(a){this.a=a},
fZ:function fZ(a){this.a=a},
dk:function dk(){var _=this
_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
hs:function hs(a){this.a=a}},Z={
lL:function(a,b,c){var u
H.p(c,"$ib",[P.y],"$ab")
u=a.createBuffer()
C.b.a1(a,b,u)
C.b.bU(a,b,new Int16Array(H.jp(c)),35044)
C.b.a1(a,b,null)
return new Z.dt(b,u)},
ak:function(a){return new Z.ds(a)},
dt:function dt(a,b){this.a=a
this.b=b},
cG:function cG(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
i7:function i7(a){this.a=a},
cH:function cH(a,b,c){var _=this
_.a=a
_.b=null
_.c=b
_.d=c},
c0:function c0(a,b,c){this.a=a
this.b=b
this.c=c},
ds:function ds(a){this.a=a}},D={
an:function(){var u=new D.bY()
u.sa5(null)
u.say(null)
u.c=null
u.d=0
return u},
eA:function eA(){},
bY:function bY(){var _=this
_.d=_.c=_.b=_.a=null},
eV:function eV(a){this.a=a},
eW:function eW(a){this.a=a},
D:function D(a){this.a=a
this.b=null},
cU:function cU(a,b,c,d){var _=this
_.c=a
_.d=b
_.a=c
_.b=null
_.$ti=d},
cV:function cV(a,b,c,d){var _=this
_.c=a
_.d=b
_.a=c
_.b=null
_.$ti=d},
P:function P(a,b,c,d,e){var _=this
_.c=a
_.d=b
_.e=c
_.a=d
_.b=null
_.$ti=e}},X={cI:function cI(a,b){this.a=a
this.b=b},cY:function cY(a,b){this.a=a
this.b=b},fj:function fj(){var _=this
_.d=_.c=_.b=_.a=null},fp:function fp(a){var _=this
_.a=a
_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},aV:function aV(a,b,c){this.a=a
this.b=b
this.c=c},fC:function fC(a){var _=this
_.a=a
_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},hw:function hw(a){var _=this
_.a=a
_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},dr:function dr(a){var _=this
_.a=a
_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},
ll:function(a,b,c,d,e,f,g){var u,t
u=new X.f5()
t=new V.b3(0,0,0,1)
u.a=t
u.b=!0
u.c=e
u.d=!0
u.e=g
u.f=!1
t=$.k9
if(t==null){t=V.lE(0,0,1,1)
$.k9=t}u.r=t
return u},
cJ:function cJ(){},
f5:function f5(){var _=this
_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
d7:function d7(){var _=this
_.f=_.e=_.d=_.c=_.b=_.a=null},
dj:function dj(){}},V={
jF:function(a,b,c){var u
if(c<=b)return b
u=c-b
a=C.c.cO(a-b,u)
return(a<0?a+u:a)+b},
H:function(a,b,c){if(a==null)return C.d.a8("null",c)
return C.d.a8(C.c.cr(Math.abs(a-0)<$.O().a?0:a,b),c+b+1)},
iX:function(a,b,c){var u,t,s,r,q
H.p(a,"$ib",[P.w],"$ab")
u=H.c([],[P.e])
for(t=0,s=0;s<4;++s){r=V.H(a[s],b,c)
t=Math.max(t,r.length)
C.a.h(u,r)}for(q=u.length-1;q>=0;--q){if(q>=u.length)return H.k(u,q)
C.a.J(u,q,C.d.a8(u[q],t))}return u},
fv:function(){var u=$.k_
if(u==null){u=V.aU(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1)
$.k_=u}return u},
aU:function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){return new V.bb(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p)},
d8:function(){var u=$.k4
if(u==null){u=new V.a6(0,0)
$.k4=u}return u},
lE:function(a,b,c,d){if(c<0){a+=c
c=-c}if(d<0){b+=d
d=-d}return new V.dc(a,b,c,d)},
hW:function(){var u=$.kn
if(u==null){u=new V.R(0,0,0)
$.kn=u}return u},
b2:function b2(a,b,c){this.a=a
this.b=b
this.c=c},
b3:function b3(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
eT:function eT(a){this.a=a},
bb:function bb(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){var _=this
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
ag:function ag(a,b,c){this.a=a
this.b=b
this.c=c},
dc:function dc(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
aM:function aM(a,b){this.a=a
this.b=b},
R:function R(a,b,c){this.a=a
this.b=b
this.c=c},
M:function(a,b){var u,t,s,r
if(a.length!==1||b.length!==1)throw H.f(P.a3("The given low and high character strings for a RangeMatcher must have one and only one characters."))
u=C.d.ad(a,0)
t=C.d.ad(b,0)
s=new V.fU()
if(u>t){r=t
t=u
u=r}s.a=u
s.b=t
return s},
r:function(a){var u=new V.h3()
u.d3(a)
return u},
hv:function(){var u,t
u=new V.hu()
t=P.e
u.seK(new H.aB([t,V.c9]))
u.seM(new H.aB([t,V.cd]))
u.c=null
return u},
aP:function aP(){},
aa:function aa(){},
d1:function d1(){},
a5:function a5(){this.a=null},
fU:function fU(){this.b=this.a=null},
h3:function h3(){this.a=null},
c9:function c9(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
dl:function dl(a,b,c){this.a=a
this.b=b
this.c=c},
cd:function cd(a,b){this.a=a
this.b=b
this.c=null},
hu:function hu(){this.c=this.b=this.a=null},
ce:function ce(a){this.b=a
this.a=this.c=null},
mt:function(a){P.lK(C.E,new V.j6(a))},
lH:function(a,b){var u=new V.h7()
u.d5(a,!0)
return u},
b1:function b1(){},
j6:function j6(a){this.a=a},
eH:function eH(a){var _=this
_.a=a
_.d=_.c=_.b=null},
f6:function f6(a){var _=this
_.a=a
_.d=_.c=_.b=null},
f7:function f7(a){var _=this
_.a=a
_.d=_.c=_.b=null},
fR:function fR(a){var _=this
_.a=a
_.d=_.c=_.b=null},
h7:function h7(){this.b=this.a=null},
h9:function h9(a){this.a=a},
h8:function h8(a){this.a=a},
ha:function ha(a){this.a=a}},U={
jS:function(a){var u=new U.cK()
u.a=a
return u},
cK:function cK(){this.b=this.a=null},
c_:function c_(){var _=this
_.d=_.c=_.b=_.a=_.r=_.f=_.e=null},
a4:function a4(){},
dd:function dd(){var _=this
_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null}},M={cP:function cP(){var _=this
_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null}},A={
jl:function(a,b,c,d,e){var u=new A.hF(a,b,c,e)
u.f=d
u.seO(P.lr(d,0,!1,P.y))
return u},
cD:function cD(a,b,c){this.a=a
this.b=b
this.c=c},
es:function es(a){this.a=a},
eK:function eK(a,b){var _=this
_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=null
_.a=a
_.b=b
_.y=_.x=_.r=_.f=_.e=_.d=_.c=null},
c8:function c8(){},
dm:function dm(){},
hL:function hL(a){this.a=a},
hE:function hE(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
hH:function hH(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
hI:function hI(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
hK:function hK(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
hF:function hF(a,b,c,d){var _=this
_.f=_.e=null
_.a=a
_.b=b
_.c=c
_.d=d},
cf:function cf(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
hG:function hG(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
cg:function cg(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
hJ:function hJ(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
hM:function hM(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
hN:function hN(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
ch:function ch(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
hO:function hO(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
hP:function hP(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d}},F={
mx:function(a,b,c,d){return F.m7(c,a,d,b,new F.j7())},
m7:function(a,b,c,d,e){var u,t
u=F.mv(a,b,new F.iV(H.j(e,{func:1,ret:V.ag,args:[P.w]}),d,b,c),null)
if(u==null)return
t=u.e
if(t!=null)++t.d
u.d.b6()
u.a.b6()
t=u.e
if(t!=null)t.at(0)
u.fB(new F.i1(),new F.fL())
return u},
mv:function(a,b,c,d){var u,t,s,r,q,p,o,n,m,l,k,j,i,h
H.j(c,{func:1,ret:-1,args:[F.aj,P.w,P.w]})
if(a<1)return
if(b<1)return
u=new F.df()
t=new F.hX(u)
t.b=!1
s=[F.aj]
t.seP(H.c([],s))
u.a=t
t=new F.h6(u)
t.saZ(H.c([],[F.br]))
u.b=t
t=new F.h5(u)
t.sdG(H.c([],[F.ba]))
u.c=t
t=new F.h4(u)
t.sdv(H.c([],[F.V]))
u.d=t
u.e=null
r=H.c([],s)
for(q=0;q<=b;++q){p=q/b
t=u.a
if(p<0)s=0
else s=p>1?1:p
t.toString
o=F.jm(null,null,new V.b3(s,0,0,1),null,null,new V.a6(p,1),null,null,0)
t.h(0,o)
c.$3(o,p,0)
C.a.h(r,o.bY(d))}for(q=1;q<=a;++q){n=q/a
for(t=n>1,s=n<0,m=1-n,l=0;l<=b;++l){p=l/b
k=u.a
if(p<0)j=0
else j=p>1?1:p
if(s)i=0
else i=t?1:n
if(s)h=0
else h=t?1:n
k.toString
o=F.jm(null,null,new V.b3(j,i,h,1),null,null,new V.a6(p,m),null,null,0)
k.h(0,o)
c.$3(o,p,n)
C.a.h(r,o.bY(d))}}u.d.eR(a+1,b+1,r)
return u},
eX:function(a,b,c){var u,t
u=new F.V()
t=a.a
if(t==null)H.a2(P.a3("May not create a face with a first vertex which is not attached to a shape."))
if(t!=b.a||t!=c.a)H.a2(P.a3("May not create a face with vertices attached to different shapes."))
u.eC(a)
u.eD(b)
u.eE(c)
C.a.h(u.a.a.d.b,u)
u.a.a.W()
return u},
jm:function(a,b,c,d,e,f,g,h,i){var u,t,s
u=new F.aj()
t=new F.i4(u)
t.saZ(H.c([],[F.br]))
u.b=t
t=new F.i0(u)
s=[F.ba]
t.sdH(H.c([],s))
t.sdI(H.c([],s))
u.c=t
t=new F.hY(u)
s=[F.V]
t.sdw(H.c([],s))
t.sdz(H.c([],s))
t.sdA(H.c([],s))
u.d=t
h=$.kX()
u.e=0
t=$.aZ()
s=h.a
u.f=(s&t.a)!==0?d:null
u.r=(s&$.bJ().a)!==0?e:null
u.x=(s&$.bI().a)!==0?b:null
u.y=(s&$.bK().a)!==0?f:null
u.z=(s&$.bL().a)!==0?g:null
u.Q=(s&$.kY().a)!==0?c:null
u.ch=(s&$.bM().a)!==0?i:0
u.cx=(s&$.bH().a)!==0?a:null
return u},
j7:function j7(){},
iV:function iV(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
V:function V(){var _=this
_.e=_.d=_.c=_.b=_.a=null},
eY:function eY(){},
hb:function hb(){},
ba:function ba(){},
fl:function fl(){},
hD:function hD(){},
br:function br(){},
df:function df(){var _=this
_.e=_.d=_.c=_.b=_.a=null},
h4:function h4(a){this.a=a
this.b=null},
h5:function h5(a){this.a=a
this.b=null},
h6:function h6(a){this.a=a
this.b=null},
aj:function aj(){var _=this
_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
i5:function i5(a){this.a=a},
hX:function hX(a){this.a=a
this.c=this.b=null},
hY:function hY(a){var _=this
_.a=a
_.d=_.c=_.b=null},
hZ:function hZ(a,b){this.a=a
this.b=b},
i_:function i_(a,b){this.a=a
this.b=b},
i0:function i0(a){this.a=a
this.c=this.b=null},
i2:function i2(){},
i1:function i1(){},
i3:function i3(){},
fL:function fL(){},
i4:function i4(a){this.a=a
this.b=null}},T={hr:function hr(a){var _=this
_.a=a
_.e=_.d=_.c=_.b=null}},R={
kG:function(){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3
u=V.lH("Test 004",!0)
t=W.jP(null,null)
t.className="pageLargeCanvas"
t.id="testCanvas"
C.e.p(u.a,t)
s=[P.e]
u.bQ(H.c(["Test of repeat use of a single mover and shape. There are 9 rings ","moving at the same speed, however the second one is attached to ","the first, the third to the second, and so on."],s))
u.bQ(H.c(["\xab[Back to Tests|../]"],s))
r=new U.dd()
r.a=0
r.b=0
r.c=0
r.d=0
r.e=0
r.f=0
r.r=0
r.scA(0)
r.scg(0,0)
r.scm(0)
r.sc0(0.1)
r.sbZ(0.21)
r.sc_(0.32)
r.sc0(0.51)
r.sbZ(0.71)
r.sc_(0.92)
q=new U.c_()
q.bl(U.a4)
q.aK(q.gdL(),q.geg())
q.e=null
q.f=V.fv()
q.r=0
q.h(0,U.jS(V.aU(0.8,0,0,0,0,0.8,0,0,0,0,0.8,0,0,0,0,1)))
q.h(0,r)
p=F.mx(30,2,15,0.2)
o=E.aS(null,!0,q,"",p,null)
n=E.aS(null,!0,q,"",p,null)
n.y.h(0,o)
m=E.aS(null,!0,q,"",p,null)
m.y.h(0,n)
l=E.aS(null,!0,q,"",p,null)
l.y.h(0,m)
k=E.aS(null,!0,q,"",p,null)
k.y.h(0,l)
j=E.aS(null,!0,q,"",p,null)
j.y.h(0,k)
i=E.aS(null,!0,q,"",p,null)
i.y.h(0,j)
h=E.aS(null,!0,q,"",p,null)
h.y.h(0,i)
g=E.aS(null,!0,q,"",p,null)
g.y.h(0,h)
f=new O.eJ()
f.d=1
f.e=10
e=new V.b2(1,1,1)
f.b=e
s=[V.b2]
d=new D.P("objectColor",null,e,f,s)
d.b=!0
f.ax(d)
e=new V.b2(0,0,0)
if(!J.S(f.c,e)){c=f.c
f.c=e
s=new D.P("fogColor",c,e,f,s)
s.b=!0
f.ax(s)}s=f.d
if(!(Math.abs(s-3)<$.O().a)){f.d=3
s=new D.P("fogStart",s,3,f,[P.w])
s.b=!0
f.ax(s)}s=f.e
if(!(Math.abs(s-6)<$.O().a)){f.e=6
s=new D.P("fogStop",s,6,f,[P.w])
s.b=!0
f.ax(s)}b=new M.cP()
b.sdl(0,O.jR(E.a0))
b.d.aK(b.gdP(),b.gdR())
b.e=null
b.f=null
b.r=null
b.x=null
a=X.ll(!0,!0,!1,null,2000,null,0)
a0=new X.d7()
a0.c=1.0471975511965976
a0.d=0.1
a0.e=2000
a0.sc8(null)
s=a0.c
if(!(Math.abs(s-1.0471975511965976)<$.O().a)){a0.c=1.0471975511965976
s=new D.P("fov",s,1.0471975511965976,a0,[P.w])
s.b=!0
a0.ac(s)}s=a0.d
if(!(Math.abs(s-0.1)<$.O().a)){a0.d=0.1
s=new D.P("near",s,0.1,a0,[P.w])
s.b=!0
a0.ac(s)}s=a0.e
if(!(Math.abs(s-2000)<$.O().a)){a0.e=2000
s=new D.P("far",s,2000,a0,[P.w])
s.b=!0
a0.ac(s)}s=b.a
if(s!==a0){if(s!=null)s.gv().I(0,b.gZ())
c=b.a
b.a=a0
a0.gv().h(0,b.gZ())
s=new D.P("camera",c,b.a,b,[X.cJ])
s.b=!0
b.a3(s)}s=b.b
if(s!==a){if(s!=null)s.gv().I(0,b.gZ())
c=b.b
b.b=a
a.gv().h(0,b.gZ())
s=new D.P("target",c,b.b,b,[X.dj])
s.b=!0
b.a3(s)}b.sco(null)
b.sco(f)
b.d.h(0,g)
b.a.sc8(U.jS(V.aU(1,0,0,0,0,1,0,0,0,0,1,5,0,0,0,1)))
a1=C.r.cH(document,"testCanvas")
if(a1==null)H.a2(P.a3("Failed to find an element with the identifier, testCanvas."))
a2=E.lJ(a1,!0,!0,!0,!1)
s=a2.d
if(s!==b){if(s!=null)s.gv().I(0,a2.gbm())
a2.d=b
b.gv().h(0,a2.gbm())
a2.bn()}s=a2.z
if(s==null){s=D.an()
a2.z=s}d={func:1,ret:-1,args:[D.D]}
a3=H.j(new R.j3(u,f),d)
if(s.b==null)s.say(H.c([],[d]))
s=s.b;(s&&C.a).h(s,a3)
V.mt(a2)},
j3:function j3(a,b){this.a=a
this.b=b}}
var w=[C,H,J,P,W,O,E,Z,D,X,V,U,M,A,F,T,R]
hunkHelpers.setFunctionNamesIfNecessary(w)
var $={}
H.jg.prototype={}
J.a.prototype={
n:function(a,b){return a===b},
gD:function(a){return H.c6(a)},
i:function(a){return"Instance of '"+H.bt(a)+"'"}}
J.fe.prototype={
i:function(a){return String(a)},
gD:function(a){return a?519018:218159},
$iK:1}
J.fg.prototype={
n:function(a,b){return null==b},
i:function(a){return"null"},
gD:function(a){return 0},
$iC:1}
J.cX.prototype={
gD:function(a){return 0},
i:function(a){return String(a)}}
J.fQ.prototype={}
J.bd.prototype={}
J.b9.prototype={
i:function(a){var u=a[$.kM()]
if(u==null)return this.cZ(a)
return"JavaScript function for "+H.i(J.as(u))},
$S:function(){return{func:1,opt:[,,,,,,,,,,,,,,,,]}},
$ib7:1}
J.aA.prototype={
h:function(a,b){H.B(b,H.u(a,0))
if(!!a.fixed$length)H.a2(P.ai("add"))
a.push(b)},
fT:function(a,b){var u
if(!!a.fixed$length)H.a2(P.ai("removeAt"))
u=a.length
if(b>=u)throw H.f(P.db(b,null,null))
return a.splice(b,1)[0]},
I:function(a,b){var u
if(!!a.fixed$length)H.a2(P.ai("remove"))
for(u=0;u<a.length;++u)if(J.S(a[u],b)){a.splice(u,1)
return!0}return!1},
F:function(a,b){var u,t
H.j(b,{func:1,ret:-1,args:[H.u(a,0)]})
u=a.length
for(t=0;t<u;++t){b.$1(a[t])
if(a.length!==u)throw H.f(P.b4(a))}},
l:function(a,b){var u,t
u=new Array(a.length)
u.fixed$length=Array
for(t=0;t<a.length;++t)this.J(u,t,H.i(a[t]))
return u.join(b)},
fu:function(a){return this.l(a,"")},
fm:function(a,b,c){var u,t,s
H.j(b,{func:1,ret:P.K,args:[H.u(a,0)]})
u=a.length
for(t=0;t<u;++t){s=a[t]
if(b.$1(s))return s
if(a.length!==u)throw H.f(P.b4(a))}throw H.f(H.fc())},
fl:function(a,b){return this.fm(a,b,null)},
w:function(a,b){if(b<0||b>=a.length)return H.k(a,b)
return a[b]},
cW:function(a,b,c){var u=a.length
if(b>u)throw H.f(P.ah(b,0,a.length,"start",null))
if(c<b||c>a.length)throw H.f(P.ah(c,b,a.length,"end",null))
if(b===c)return H.c([],[H.u(a,0)])
return H.c(a.slice(b,c),[H.u(a,0)])},
gfk:function(a){if(a.length>0)return a[0]
throw H.f(H.fc())},
gaE:function(a){var u=a.length
if(u>0)return a[u-1]
throw H.f(H.fc())},
bR:function(a,b){var u,t
H.j(b,{func:1,ret:P.K,args:[H.u(a,0)]})
u=a.length
for(t=0;t<u;++t){if(b.$1(a[t]))return!0
if(a.length!==u)throw H.f(P.b4(a))}return!1},
M:function(a,b){var u
for(u=0;u<a.length;++u)if(J.S(a[u],b))return!0
return!1},
i:function(a){return P.je(a,"[","]")},
gH:function(a){return new J.ae(a,a.length,0,[H.u(a,0)])},
gD:function(a){return H.c6(a)},
gk:function(a){return a.length},
sk:function(a,b){if(!!a.fixed$length)H.a2(P.ai("set length"))
if(b<0)throw H.f(P.ah(b,0,null,"newLength",null))
a.length=b},
J:function(a,b,c){H.B(c,H.u(a,0))
if(!!a.immutable$list)H.a2(P.ai("indexed set"))
if(b>=a.length||b<0)throw H.f(H.cw(a,b))
a[b]=c},
$ih:1,
$ib:1}
J.jf.prototype={}
J.ae.prototype={
gB:function(a){return this.d},
q:function(){var u,t,s
u=this.a
t=u.length
if(this.b!==t)throw H.f(H.G(u))
s=this.c
if(s>=t){this.sbr(null)
return!1}this.sbr(u[s]);++this.c
return!0},
sbr:function(a){this.d=H.B(a,H.u(this,0))},
$iaz:1}
J.bp.prototype={
c5:function(a){var u,t
if(a>=0){if(a<=2147483647)return a|0}else if(a>=-2147483648){u=a|0
return a===u?u:u-1}t=Math.floor(a)
if(isFinite(t))return t
throw H.f(P.ai(""+a+".floor()"))},
Y:function(a){if(a>0){if(a!==1/0)return Math.round(a)}else if(a>-1/0)return 0-Math.round(0-a)
throw H.f(P.ai(""+a+".round()"))},
cr:function(a,b){var u,t
if(b>20)throw H.f(P.ah(b,0,20,"fractionDigits",null))
u=a.toFixed(b)
if(a===0)t=1/a<0
else t=!1
if(t)return"-"+u
return u},
i:function(a){if(a===0&&1/a<0)return"-0.0"
else return""+a},
gD:function(a){var u,t,s,r,q
u=a|0
if(a===u)return 536870911&u
t=Math.abs(a)
s=Math.log(t)/0.6931471805599453|0
r=Math.pow(2,s)
q=t<1?t/r:r/t
return 536870911&((q*9007199254740992|0)+(q*3542243181176521|0))*599197+s*1259},
u:function(a,b){if(typeof b!=="number")throw H.f(H.bh(b))
return a-b},
K:function(a,b){if(typeof b!=="number")throw H.f(H.bh(b))
return a*b},
cO:function(a,b){var u=a%b
if(u===0)return 0
if(u>0)return u
if(b<0)return u-b
else return u+b},
d1:function(a,b){if((a|0)===a)if(b>=1||b<-1)return a/b|0
return this.bM(a,b)},
ag:function(a,b){return(a|0)===a?a/b|0:this.bM(a,b)},
bM:function(a,b){var u=a/b
if(u>=-2147483648&&u<=2147483647)return u|0
if(u>0){if(u!==1/0)return Math.floor(u)}else if(u>-1/0)return Math.ceil(u)
throw H.f(P.ai("Result of truncating division is "+H.i(u)+": "+H.i(a)+" ~/ "+b))},
aA:function(a,b){var u
if(a>0)u=this.eJ(a,b)
else{u=b>31?31:b
u=a>>u>>>0}return u},
eJ:function(a,b){return b>31?0:a>>>b},
$iw:1,
$iT:1}
J.cW.prototype={$iy:1}
J.ff.prototype={}
J.b8.prototype={
b7:function(a,b){if(b<0)throw H.f(H.cw(a,b))
if(b>=a.length)H.a2(H.cw(a,b))
return a.charCodeAt(b)},
ad:function(a,b){if(b>=a.length)throw H.f(H.cw(a,b))
return a.charCodeAt(b)},
R:function(a,b){if(typeof b!=="string")throw H.f(P.jb(b,null,null))
return a+b},
cV:function(a,b,c){var u
if(c>a.length)throw H.f(P.ah(c,0,a.length,null,null))
u=c+b.length
if(u>a.length)return!1
return b===a.substring(c,u)},
aL:function(a,b){return this.cV(a,b,0)},
au:function(a,b,c){if(c==null)c=a.length
if(b<0)throw H.f(P.db(b,null,null))
if(b>c)throw H.f(P.db(b,null,null))
if(c>a.length)throw H.f(P.db(c,null,null))
return a.substring(b,c)},
aM:function(a,b){return this.au(a,b,null)},
h4:function(a){return a.toLowerCase()},
K:function(a,b){var u,t
if(0>=b)return""
if(b===1||a.length===0)return a
if(b!==b>>>0)throw H.f(C.A)
for(u=a,t="";!0;){if((b&1)===1)t=u+t
b=b>>>1
if(b===0)break
u+=u}return t},
fJ:function(a,b,c){var u=b-a.length
if(u<=0)return a
return this.K(c,u)+a},
a8:function(a,b){return this.fJ(a,b," ")},
i:function(a){return a},
gD:function(a){var u,t,s
for(u=a.length,t=0,s=0;s<u;++s){t=536870911&t+a.charCodeAt(s)
t=536870911&t+((524287&t)<<10)
t^=t>>6}t=536870911&t+((67108863&t)<<3)
t^=t>>11
return 536870911&t+((16383&t)<<15)},
gk:function(a){return a.length},
$ik2:1,
$ie:1}
H.o.prototype={
gk:function(a){return this.a.length},
m:function(a,b){return C.d.b7(this.a,b)},
$adq:function(){return[P.y]},
$at:function(){return[P.y]},
$ah:function(){return[P.y]},
$ab:function(){return[P.y]}}
H.eQ.prototype={}
H.bq.prototype={
gH:function(a){return new H.c1(this,this.gk(this),0,[H.a9(this,"bq",0)])},
aH:function(a,b){return this.cY(0,H.j(b,{func:1,ret:P.K,args:[H.a9(this,"bq",0)]}))}}
H.c1.prototype={
gB:function(a){return this.d},
q:function(){var u,t,s,r
u=this.a
t=J.jy(u)
s=t.gk(u)
if(this.b!==s)throw H.f(P.b4(u))
r=this.c
if(r>=s){this.sam(null)
return!1}this.sam(t.w(u,r));++this.c
return!0},
sam:function(a){this.d=H.B(a,H.u(this,0))},
$iaz:1}
H.fs.prototype={
gH:function(a){return new H.ft(J.bN(this.a),this.b,this.$ti)},
gk:function(a){return J.bk(this.a)},
w:function(a,b){return this.b.$1(J.j9(this.a,b))},
$ah:function(a,b){return[b]}}
H.ft.prototype={
q:function(){var u=this.b
if(u.q()){this.sam(this.c.$1(u.gB(u)))
return!0}this.sam(null)
return!1},
gB:function(a){return this.a},
sam:function(a){this.a=H.B(a,H.u(this,1))},
$aaz:function(a,b){return[b]}}
H.fu.prototype={
gk:function(a){return J.bk(this.a)},
w:function(a,b){return this.b.$1(J.j9(this.a,b))},
$abq:function(a,b){return[b]},
$ah:function(a,b){return[b]}}
H.ci.prototype={
gH:function(a){return new H.i8(J.bN(this.a),this.b,this.$ti)}}
H.i8.prototype={
q:function(){var u,t
for(u=this.a,t=this.b;u.q();)if(t.$1(u.gB(u)))return!0
return!1},
gB:function(a){var u=this.a
return u.gB(u)}}
H.bn.prototype={}
H.dq.prototype={}
H.dp.prototype={}
H.fV.prototype={}
H.hA.prototype={
V:function(a){var u,t,s
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
H.fM.prototype={
i:function(a){var u=this.b
if(u==null)return"NoSuchMethodError: "+H.i(this.a)
return"NoSuchMethodError: method not found: '"+u+"' on null"}}
H.fi.prototype={
i:function(a){var u,t
u=this.b
if(u==null)return"NoSuchMethodError: "+H.i(this.a)
t=this.c
if(t==null)return"NoSuchMethodError: method not found: '"+u+"' ("+H.i(this.a)+")"
return"NoSuchMethodError: method not found: '"+u+"' on '"+t+"' ("+H.i(this.a)+")"}}
H.hR.prototype={
i:function(a){var u=this.a
return u.length===0?"Error":"Error: "+u}}
H.j8.prototype={
$1:function(a){if(!!J.Q(a).$ib6)if(a.$thrownJsError==null)a.$thrownJsError=this.a
return a},
$S:15}
H.e1.prototype={
i:function(a){var u,t
u=this.b
if(u!=null)return u
u=this.a
t=u!==null&&typeof u==="object"?u.stack:null
u=t==null?"":t
this.b=u
return u},
$ia8:1}
H.bR.prototype={
i:function(a){return"Closure '"+H.bt(this).trim()+"'"},
$ib7:1,
gh9:function(){return this},
$C:"$1",
$R:1,
$D:null}
H.ho.prototype={}
H.hf.prototype={
i:function(a){var u=this.$static_name
if(u==null)return"Closure of unknown static method"
return"Closure '"+H.bG(u)+"'"}}
H.bP.prototype={
n:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof H.bP))return!1
return this.a===b.a&&this.b===b.b&&this.c===b.c},
gD:function(a){var u,t
u=this.c
if(u==null)t=H.c6(this.a)
else t=typeof u!=="object"?J.cB(u):H.c6(u)
return(t^H.c6(this.b))>>>0},
i:function(a){var u=this.c
if(u==null)u=this.a
return"Closure '"+H.i(this.d)+"' of "+("Instance of '"+H.bt(u)+"'")}}
H.hC.prototype={
i:function(a){return this.a}}
H.ez.prototype={
i:function(a){return this.a}}
H.h1.prototype={
i:function(a){return"RuntimeError: "+H.i(this.a)}}
H.aB.prototype={
gk:function(a){return this.a},
gP:function(a){return new H.cZ(this,[H.u(this,0)])},
bX:function(a,b){var u,t
if(typeof b==="string"){u=this.b
if(u==null)return!1
return this.bB(u,b)}else if(typeof b==="number"&&(b&0x3ffffff)===b){t=this.c
if(t==null)return!1
return this.bB(t,b)}else return this.fq(b)},
fq:function(a){var u=this.d
if(u==null)return!1
return this.b8(this.aS(u,J.cB(a)&0x3ffffff),a)>=0},
m:function(a,b){var u,t,s,r
if(typeof b==="string"){u=this.b
if(u==null)return
t=this.aw(u,b)
s=t==null?null:t.b
return s}else if(typeof b==="number"&&(b&0x3ffffff)===b){r=this.c
if(r==null)return
t=this.aw(r,b)
s=t==null?null:t.b
return s}else return this.fs(b)},
fs:function(a){var u,t,s
u=this.d
if(u==null)return
t=this.aS(u,J.cB(a)&0x3ffffff)
s=this.b8(t,a)
if(s<0)return
return t[s].b},
J:function(a,b,c){var u,t,s,r,q,p
H.B(b,H.u(this,0))
H.B(c,H.u(this,1))
if(typeof b==="string"){u=this.b
if(u==null){u=this.aX()
this.b=u}this.bt(u,b,c)}else if(typeof b==="number"&&(b&0x3ffffff)===b){t=this.c
if(t==null){t=this.aX()
this.c=t}this.bt(t,b,c)}else{s=this.d
if(s==null){s=this.aX()
this.d=s}r=J.cB(b)&0x3ffffff
q=this.aS(s,r)
if(q==null)this.b1(s,r,[this.aY(b,c)])
else{p=this.b8(q,b)
if(p>=0)q[p].b=c
else q.push(this.aY(b,c))}}},
F:function(a,b){var u,t
H.j(b,{func:1,ret:-1,args:[H.u(this,0),H.u(this,1)]})
u=this.e
t=this.r
for(;u!=null;){b.$2(u.a,u.b)
if(t!==this.r)throw H.f(P.b4(this))
u=u.c}},
bt:function(a,b,c){var u
H.B(b,H.u(this,0))
H.B(c,H.u(this,1))
u=this.aw(a,b)
if(u==null)this.b1(a,b,this.aY(b,c))
else u.b=c},
dK:function(){this.r=this.r+1&67108863},
aY:function(a,b){var u,t
u=new H.fm(H.B(a,H.u(this,0)),H.B(b,H.u(this,1)))
if(this.e==null){this.f=u
this.e=u}else{t=this.f
u.d=t
t.c=u
this.f=u}++this.a
this.dK()
return u},
b8:function(a,b){var u,t
if(a==null)return-1
u=a.length
for(t=0;t<u;++t)if(J.S(a[t].a,b))return t
return-1},
i:function(a){return P.jZ(this)},
aw:function(a,b){return a[b]},
aS:function(a,b){return a[b]},
b1:function(a,b,c){a[b]=c},
ds:function(a,b){delete a[b]},
bB:function(a,b){return this.aw(a,b)!=null},
aX:function(){var u=Object.create(null)
this.b1(u,"<non-identifier-key>",u)
this.ds(u,"<non-identifier-key>")
return u}}
H.fm.prototype={}
H.cZ.prototype={
gk:function(a){return this.a.a},
gH:function(a){var u,t
u=this.a
t=new H.fn(u,u.r,this.$ti)
t.c=u.e
return t}}
H.fn.prototype={
gB:function(a){return this.d},
q:function(){var u=this.a
if(this.b!==u.r)throw H.f(P.b4(u))
else{u=this.c
if(u==null){this.sbs(null)
return!1}else{this.sbs(u.a)
this.c=this.c.c
return!0}}},
sbs:function(a){this.d=H.B(a,H.u(this,0))},
$iaz:1}
H.j_.prototype={
$1:function(a){return this.a(a)},
$S:15}
H.j0.prototype={
$2:function(a,b){return this.a(a,b)},
$S:29}
H.j1.prototype={
$1:function(a){return this.a(H.A(a))},
$S:30}
H.fh.prototype={
i:function(a){return"RegExp/"+this.a+"/"},
$ik2:1}
H.c4.prototype={}
H.d2.prototype={
gk:function(a){return a.length},
$iz:1,
$az:function(){}}
H.c3.prototype={
m:function(a,b){H.bf(b,a,a.length)
return a[b]},
$abn:function(){return[P.w]},
$at:function(){return[P.w]},
$ih:1,
$ah:function(){return[P.w]},
$ib:1,
$ab:function(){return[P.w]}}
H.d3.prototype={
$abn:function(){return[P.y]},
$at:function(){return[P.y]},
$ih:1,
$ah:function(){return[P.y]},
$ib:1,
$ab:function(){return[P.y]}}
H.fD.prototype={
m:function(a,b){H.bf(b,a,a.length)
return a[b]}}
H.fE.prototype={
m:function(a,b){H.bf(b,a,a.length)
return a[b]}}
H.fF.prototype={
m:function(a,b){H.bf(b,a,a.length)
return a[b]}}
H.fG.prototype={
m:function(a,b){H.bf(b,a,a.length)
return a[b]}}
H.fH.prototype={
m:function(a,b){H.bf(b,a,a.length)
return a[b]}}
H.d4.prototype={
gk:function(a){return a.length},
m:function(a,b){H.bf(b,a,a.length)
return a[b]}}
H.fI.prototype={
gk:function(a){return a.length},
m:function(a,b){H.bf(b,a,a.length)
return a[b]}}
H.cm.prototype={}
H.cn.prototype={}
H.co.prototype={}
H.cp.prototype={}
P.ia.prototype={
$1:function(a){var u,t
u=this.a
t=u.a
u.a=null
t.$0()},
$S:14}
P.i9.prototype={
$1:function(a){var u,t
this.a.a=H.j(a,{func:1,ret:-1})
u=this.b
t=this.c
u.firstChild?u.removeChild(t):u.appendChild(t)},
$S:28}
P.ib.prototype={
$0:function(){this.a.$0()},
$S:0}
P.ic.prototype={
$0:function(){this.a.$0()},
$S:0}
P.e7.prototype={
de:function(a,b){if(self.setTimeout!=null)this.b=self.setTimeout(H.bC(new P.iN(this,b),0),a)
else throw H.f(P.ai("`setTimeout()` not found."))},
df:function(a,b){if(self.setTimeout!=null)this.b=self.setInterval(H.bC(new P.iM(this,a,Date.now(),b),0),a)
else throw H.f(P.ai("Periodic timer."))},
$iaJ:1}
P.iN.prototype={
$0:function(){var u=this.a
u.b=null
u.c=1
this.b.$0()},
$S:1}
P.iM.prototype={
$0:function(){var u,t,s,r
u=this.a
t=u.c+1
s=this.b
if(s>0){r=Date.now()-this.c
if(r>(t+1)*s)t=C.h.d1(r,s)}u.c=t
this.d.$1(u)},
$S:0}
P.aO.prototype={
fz:function(a){if(this.c!==6)return!0
return this.b.b.bf(H.j(this.d,{func:1,ret:P.K,args:[P.E]}),a.a,P.K,P.E)},
fp:function(a){var u,t,s,r
u=this.e
t=P.E
s={futureOr:1,type:H.u(this,1)}
r=this.b.b
if(H.eo(u,{func:1,args:[P.E,P.a8]}))return H.jx(r.fY(u,a.a,a.b,null,t,P.a8),s)
else return H.jx(r.bf(H.j(u,{func:1,args:[P.E]}),a.a,null,t),s)}}
P.al.prototype={
cp:function(a,b,c){var u,t,s,r
u=H.u(this,0)
H.j(a,{func:1,ret:{futureOr:1,type:c},args:[u]})
t=$.N
if(t!==C.f){t.toString
H.j(a,{func:1,ret:{futureOr:1,type:c},args:[u]})
if(b!=null)b=P.m_(b,t)}H.j(a,{func:1,ret:{futureOr:1,type:c},args:[u]})
s=new P.al(0,$.N,[c])
r=b==null?1:3
this.bu(new P.aO(s,r,a,b,[u,c]))
return s},
h1:function(a,b){return this.cp(a,null,b)},
bu:function(a){var u,t
u=this.a
if(u<=1){a.a=H.n(this.c,"$iaO")
this.c=a}else{if(u===2){t=H.n(this.c,"$ial")
u=t.a
if(u<4){t.bu(a)
return}this.a=u
this.c=t.c}u=this.b
u.toString
P.iT(null,null,u,H.j(new P.il(this,a),{func:1,ret:-1}))}},
bK:function(a){var u,t,s,r,q,p
u={}
u.a=a
if(a==null)return
t=this.a
if(t<=1){s=H.n(this.c,"$iaO")
this.c=a
if(s!=null){for(r=a;q=r.a,q!=null;r=q);r.a=s}}else{if(t===2){p=H.n(this.c,"$ial")
t=p.a
if(t<4){p.bK(a)
return}this.a=t
this.c=p.c}u.a=this.az(a)
t=this.b
t.toString
P.iT(null,null,t,H.j(new P.iq(u,this),{func:1,ret:-1}))}},
b0:function(){var u=H.n(this.c,"$iaO")
this.c=null
return this.az(u)},
az:function(a){var u,t,s
for(u=a,t=null;u!=null;t=u,u=s){s=u.a
u.a=t}return t},
by:function(a){var u,t,s
u=H.u(this,0)
H.jx(a,{futureOr:1,type:u})
t=this.$ti
if(H.en(a,"$ibZ",t,"$abZ"))if(H.en(a,"$ial",t,null))P.ko(a,this)
else P.lQ(a,this)
else{s=this.b0()
H.B(a,u)
this.a=4
this.c=a
P.cl(this,s)}},
bz:function(a,b){var u
H.n(b,"$ia8")
u=this.b0()
this.a=8
this.c=new P.a_(a,b)
P.cl(this,u)},
$ibZ:1}
P.il.prototype={
$0:function(){P.cl(this.a,this.b)},
$S:0}
P.iq.prototype={
$0:function(){P.cl(this.b,this.a.a)},
$S:0}
P.im.prototype={
$1:function(a){var u=this.a
u.a=0
u.by(a)},
$S:14}
P.io.prototype={
$2:function(a,b){H.n(b,"$ia8")
this.a.bz(a,b)},
$1:function(a){return this.$2(a,null)},
$S:32}
P.ip.prototype={
$0:function(){this.a.bz(this.b,this.c)},
$S:0}
P.it.prototype={
$0:function(){var u,t,s,r,q,p,o
u=null
try{r=this.c
u=r.b.b.cn(H.j(r.d,{func:1}),null)}catch(q){t=H.ad(q)
s=H.bD(q)
if(this.d){r=H.n(this.a.a.c,"$ia_").a
p=t
p=r==null?p==null:r===p
r=p}else r=!1
p=this.b
if(r)p.b=H.n(this.a.a.c,"$ia_")
else p.b=new P.a_(t,s)
p.a=!0
return}if(!!J.Q(u).$ibZ){if(u instanceof P.al&&u.a>=4){if(u.a===8){r=this.b
r.b=H.n(u.c,"$ia_")
r.a=!0}return}o=this.a.a
r=this.b
r.b=u.h1(new P.iu(o),null)
r.a=!1}},
$S:1}
P.iu.prototype={
$1:function(a){return this.a},
$S:23}
P.is.prototype={
$0:function(){var u,t,s,r,q,p,o
try{s=this.b
r=H.u(s,0)
q=H.B(this.c,r)
p=H.u(s,1)
this.a.b=s.b.b.bf(H.j(s.d,{func:1,ret:{futureOr:1,type:p},args:[r]}),q,{futureOr:1,type:p},r)}catch(o){u=H.ad(o)
t=H.bD(o)
s=this.a
s.b=new P.a_(u,t)
s.a=!0}},
$S:1}
P.ir.prototype={
$0:function(){var u,t,s,r,q,p,o,n
try{u=H.n(this.a.a.c,"$ia_")
r=this.c
if(r.fz(u)&&r.e!=null){q=this.b
q.b=r.fp(u)
q.a=!1}}catch(p){t=H.ad(p)
s=H.bD(p)
r=H.n(this.a.a.c,"$ia_")
q=r.a
o=t
n=this.b
if(q==null?o==null:q===o)n.b=r
else n.b=new P.a_(t,s)
n.a=!0}},
$S:1}
P.du.prototype={}
P.hi.prototype={
gk:function(a){var u,t,s,r
u={}
t=new P.al(0,$.N,[P.y])
u.a=0
s=H.u(this,0)
r=H.j(new P.hk(u,this),{func:1,ret:-1,args:[s]})
H.j(new P.hl(u,t),{func:1,ret:-1})
W.Y(this.a,this.b,r,!1,s)
return t}}
P.hk.prototype={
$1:function(a){H.B(a,H.u(this.b,0));++this.a.a},
$S:function(){return{func:1,ret:P.C,args:[H.u(this.b,0)]}}}
P.hl.prototype={
$0:function(){this.b.by(this.a.a)},
$S:0}
P.cb.prototype={}
P.hj.prototype={}
P.aJ.prototype={}
P.a_.prototype={
i:function(a){return H.i(this.a)},
$ib6:1}
P.iQ.prototype={$in4:1}
P.iS.prototype={
$0:function(){var u,t,s
u=this.a
t=u.a
if(t==null){s=new P.d6()
u.a=s
u=s}else u=t
t=this.b
if(t==null)throw H.f(u)
s=H.f(u)
s.stack=t.i(0)
throw s},
$S:0}
P.iz.prototype={
fZ:function(a){var u,t,s
H.j(a,{func:1,ret:-1})
try{if(C.f===$.N){a.$0()
return}P.ku(null,null,this,a,-1)}catch(s){u=H.ad(s)
t=H.bD(s)
P.iR(null,null,this,u,H.n(t,"$ia8"))}},
h_:function(a,b,c){var u,t,s
H.j(a,{func:1,ret:-1,args:[c]})
H.B(b,c)
try{if(C.f===$.N){a.$1(b)
return}P.kv(null,null,this,a,b,-1,c)}catch(s){u=H.ad(s)
t=H.bD(s)
P.iR(null,null,this,u,H.n(t,"$ia8"))}},
eW:function(a,b){return new P.iB(this,H.j(a,{func:1,ret:b}),b)},
b4:function(a){return new P.iA(this,H.j(a,{func:1,ret:-1}))},
bT:function(a,b){return new P.iC(this,H.j(a,{func:1,ret:-1,args:[b]}),b)},
cn:function(a,b){H.j(a,{func:1,ret:b})
if($.N===C.f)return a.$0()
return P.ku(null,null,this,a,b)},
bf:function(a,b,c,d){H.j(a,{func:1,ret:c,args:[d]})
H.B(b,d)
if($.N===C.f)return a.$1(b)
return P.kv(null,null,this,a,b,c,d)},
fY:function(a,b,c,d,e,f){H.j(a,{func:1,ret:d,args:[e,f]})
H.B(b,e)
H.B(c,f)
if($.N===C.f)return a.$2(b,c)
return P.m0(null,null,this,a,b,c,d,e,f)}}
P.iB.prototype={
$0:function(){return this.a.cn(this.b,this.c)},
$S:function(){return{func:1,ret:this.c}}}
P.iA.prototype={
$0:function(){return this.a.fZ(this.b)},
$S:1}
P.iC.prototype={
$1:function(a){var u=this.c
return this.a.h_(this.b,H.B(a,u),u)},
$S:function(){return{func:1,ret:-1,args:[this.c]}}}
P.ix.prototype={
gH:function(a){var u=new P.dJ(this,this.r,this.$ti)
u.c=this.e
return u},
gk:function(a){return this.a},
M:function(a,b){var u,t
if(typeof b==="string"&&b!=="__proto__"){u=this.b
if(u==null)return!1
return H.n(u[b],"$ibz")!=null}else{t=this.dm(b)
return t}},
dm:function(a){var u=this.d
if(u==null)return!1
return this.aR(this.bE(u,a),a)>=0},
h:function(a,b){var u,t
H.B(b,H.u(this,0))
if(typeof b==="string"&&b!=="__proto__"){u=this.b
if(u==null){u=P.jo()
this.b=u}return this.bv(u,b)}else if(typeof b==="number"&&(b&1073741823)===b){t=this.c
if(t==null){t=P.jo()
this.c=t}return this.bv(t,b)}else return this.dh(0,b)},
dh:function(a,b){var u,t,s
H.B(b,H.u(this,0))
u=this.d
if(u==null){u=P.jo()
this.d=u}t=this.bA(b)
s=u[t]
if(s==null)u[t]=[this.aO(b)]
else{if(this.aR(s,b)>=0)return!1
s.push(this.aO(b))}return!0},
I:function(a,b){if(typeof b==="number"&&(b&1073741823)===b)return this.es(this.c,b)
else return this.ep(0,b)},
ep:function(a,b){var u,t,s
u=this.d
if(u==null)return!1
t=this.bE(u,b)
s=this.aR(t,b)
if(s<0)return!1
this.bN(t.splice(s,1)[0])
return!0},
bv:function(a,b){H.B(b,H.u(this,0))
if(H.n(a[b],"$ibz")!=null)return!1
a[b]=this.aO(b)
return!0},
es:function(a,b){var u
if(a==null)return!1
u=H.n(a[b],"$ibz")
if(u==null)return!1
this.bN(u)
delete a[b]
return!0},
bx:function(){this.r=1073741823&this.r+1},
aO:function(a){var u,t
u=new P.bz(H.B(a,H.u(this,0)))
if(this.e==null){this.f=u
this.e=u}else{t=this.f
u.c=t
t.b=u
this.f=u}++this.a
this.bx()
return u},
bN:function(a){var u,t
u=a.c
t=a.b
if(u==null)this.e=t
else u.b=t
if(t==null)this.f=u
else t.c=u;--this.a
this.bx()},
bA:function(a){return J.cB(a)&1073741823},
bE:function(a,b){return a[this.bA(b)]},
aR:function(a,b){var u,t
if(a==null)return-1
u=a.length
for(t=0;t<u;++t)if(J.S(a[t].a,b))return t
return-1}}
P.bz.prototype={}
P.dJ.prototype={
gB:function(a){return this.d},
q:function(){var u=this.a
if(this.b!==u.r)throw H.f(P.b4(u))
else{u=this.c
if(u==null){this.sbw(null)
return!1}else{this.sbw(H.B(u.a,H.u(this,0)))
this.c=this.c.b
return!0}}},
sbw:function(a){this.d=H.B(a,H.u(this,0))},
$iaz:1}
P.fo.prototype={$ih:1,$ib:1}
P.t.prototype={
gH:function(a){return new H.c1(a,this.gk(a),0,[H.cx(this,a,"t",0)])},
w:function(a,b){return this.m(a,b)},
h3:function(a,b){var u,t
u=H.c([],[H.cx(this,a,"t",0)])
C.a.sk(u,this.gk(a))
for(t=0;t<this.gk(a);++t)C.a.J(u,t,this.m(a,t))
return u},
h2:function(a){return this.h3(a,!0)},
i:function(a){return P.je(a,"[","]")}}
P.fq.prototype={}
P.fr.prototype={
$2:function(a,b){var u,t
u=this.a
if(!u.a)this.b.a+=", "
u.a=!1
u=this.b
t=u.a+=H.i(a)
u.a=t+": "
u.a+=H.i(b)},
$S:11}
P.W.prototype={
F:function(a,b){var u,t
H.j(b,{func:1,ret:-1,args:[H.cx(this,a,"W",0),H.cx(this,a,"W",1)]})
for(u=J.bN(this.gP(a));u.q();){t=u.gB(u)
b.$2(t,this.m(a,t))}},
gk:function(a){return J.bk(this.gP(a))},
i:function(a){return P.jZ(a)},
$iF:1}
P.iE.prototype={
a_:function(a,b){var u
for(u=J.bN(H.p(b,"$ih",this.$ti,"$ah"));u.q();)this.h(0,u.gB(u))},
i:function(a){return P.je(this,"{","}")},
w:function(a,b){var u,t,s
if(b<0)H.a2(P.ah(b,0,null,"index",null))
for(u=P.lT(this,this.r,H.u(this,0)),t=0;u.q();){s=u.d
if(b===t)return s;++t}throw H.f(P.L(b,this,"index",null,t))},
$ih:1,
$ika:1}
P.dK.prototype={}
P.bS.prototype={}
P.bT.prototype={}
P.eS.prototype={
$abS:function(){return[P.e,[P.b,P.y]]}}
P.fa.prototype={
i:function(a){return this.a}}
P.f9.prototype={
dn:function(a,b,c){var u,t,s,r,q,p
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
default:p=null}if(p!=null){if(q==null)q=new P.bw("")
if(r>b)q.a+=C.d.au(a,b,r)
q.a+=p
b=r+1}}if(q==null)return
if(c>b)q.a+=J.l7(a,b,c)
u=q.a
return u.charCodeAt(0)==0?u:u},
$abT:function(){return[P.e,P.e]}}
P.hU.prototype={}
P.hV.prototype={
f4:function(a,b,c){var u,t,s
c=P.k8(b,c,a.length,null,null,null)
u=c-b
if(u===0)return new Uint8Array(0)
t=new Uint8Array(u*3)
s=new P.iO(t)
if(s.dB(a,b,c)!==c)s.bO(C.d.b7(a,c-1),0)
return new Uint8Array(t.subarray(0,H.lW(0,s.b,t.length)))},
f3:function(a){return this.f4(a,0,null)},
$abT:function(){return[P.e,[P.b,P.y]]}}
P.iO.prototype={
bO:function(a,b){var u,t,s,r,q
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
dB:function(a,b,c){var u,t,s,r,q,p,o
if(b!==c&&(C.d.b7(a,c-1)&64512)===55296)--c
for(u=this.c,t=u.length,s=b;s<c;++s){r=C.d.ad(a,s)
if(r<=127){q=this.b
if(q>=t)break
this.b=q+1
u[q]=r}else if((r&64512)===55296){if(this.b+3>=t)break
p=s+1
if(this.bO(r,C.d.ad(a,p)))s=p}else if(r<=2047){q=this.b
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
P.K.prototype={}
P.b5.prototype={
n:function(a,b){if(b==null)return!1
return b instanceof P.b5&&this.a===b.a&&!0},
gD:function(a){var u=this.a
return(u^C.h.aA(u,30))&1073741823},
i:function(a){var u,t,s,r,q,p,o,n
u=P.le(H.lA(this))
t=P.cL(H.ly(this))
s=P.cL(H.lu(this))
r=P.cL(H.lv(this))
q=P.cL(H.lx(this))
p=P.cL(H.lz(this))
o=P.lf(H.lw(this))
n=u+"-"+t+"-"+s+" "+r+":"+q+":"+p+"."+o
return n}}
P.w.prototype={}
P.aQ.prototype={
u:function(a,b){return new P.aQ(C.h.u(this.a,b.ghb()))},
n:function(a,b){if(b==null)return!1
return b instanceof P.aQ&&this.a===b.a},
gD:function(a){return C.h.gD(this.a)},
i:function(a){var u,t,s,r,q
u=new P.eP()
t=this.a
if(t<0)return"-"+new P.aQ(0-t).i(0)
s=u.$1(C.h.ag(t,6e7)%60)
r=u.$1(C.h.ag(t,1e6)%60)
q=new P.eO().$1(t%1e6)
return""+C.h.ag(t,36e8)+":"+H.i(s)+":"+H.i(r)+"."+H.i(q)}}
P.eO.prototype={
$1:function(a){if(a>=1e5)return""+a
if(a>=1e4)return"0"+a
if(a>=1000)return"00"+a
if(a>=100)return"000"+a
if(a>=10)return"0000"+a
return"00000"+a},
$S:12}
P.eP.prototype={
$1:function(a){if(a>=10)return""+a
return"0"+a},
$S:12}
P.b6.prototype={}
P.d6.prototype={
i:function(a){return"Throw of null."}}
P.at.prototype={
gaQ:function(){return"Invalid argument"+(!this.a?"(s)":"")},
gaP:function(){return""},
i:function(a){var u,t,s,r,q,p
u=this.c
t=u!=null?" ("+u+")":""
u=this.d
s=u==null?"":": "+u
r=this.gaQ()+t+s
if(!this.a)return r
q=this.gaP()
p=P.eU(this.b)
return r+q+": "+p}}
P.bu.prototype={
gaQ:function(){return"RangeError"},
gaP:function(){var u,t,s
u=this.e
if(u==null){u=this.f
t=u!=null?": Not less than or equal to "+H.i(u):""}else{s=this.f
if(s==null)t=": Not greater than or equal to "+H.i(u)
else if(s>u)t=": Not in range "+H.i(u)+".."+H.i(s)+", inclusive"
else t=s<u?": Valid value range is empty":": Only valid value is "+H.i(u)}return t}}
P.fb.prototype={
gaQ:function(){return"RangeError"},
gaP:function(){var u,t
u=H.Z(this.b)
if(typeof u!=="number")return u.cN()
if(u<0)return": index must not be negative"
t=this.f
if(t===0)return": no indices are valid"
return": index should be less than "+H.i(t)},
gk:function(a){return this.f}}
P.hS.prototype={
i:function(a){return"Unsupported operation: "+this.a}}
P.hQ.prototype={
i:function(a){var u=this.a
return u!=null?"UnimplementedError: "+u:"UnimplementedError"}}
P.ca.prototype={
i:function(a){return"Bad state: "+this.a}}
P.eB.prototype={
i:function(a){var u=this.a
if(u==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+P.eU(u)+"."}}
P.fP.prototype={
i:function(a){return"Out of Memory"},
$ib6:1}
P.dg.prototype={
i:function(a){return"Stack Overflow"},
$ib6:1}
P.eG.prototype={
i:function(a){var u=this.a
return u==null?"Reading static variable during its initialization":"Reading static variable '"+u+"' during its initialization"}}
P.dC.prototype={
i:function(a){return"Exception: "+this.a}}
P.f4.prototype={
i:function(a){var u,t,s,r
u=this.a
t=""!==u?"FormatException: "+u:"FormatException"
s=this.b
r=s.length>78?C.d.au(s,0,75)+"...":s
return t+"\n"+r}}
P.b7.prototype={}
P.y.prototype={}
P.h.prototype={
aH:function(a,b){var u=H.a9(this,"h",0)
return new H.ci(this,H.j(b,{func:1,ret:P.K,args:[u]}),[u])},
gk:function(a){var u,t
u=this.gH(this)
for(t=0;u.q();)++t
return t},
gaa:function(a){var u,t
u=this.gH(this)
if(!u.q())throw H.f(H.fc())
t=u.gB(u)
if(u.q())throw H.f(H.ln())
return t},
w:function(a,b){var u,t,s
if(b<0)H.a2(P.ah(b,0,null,"index",null))
for(u=this.gH(this),t=0;u.q();){s=u.gB(u)
if(b===t)return s;++t}throw H.f(P.L(b,this,"index",null,t))},
i:function(a){return P.lm(this,"(",")")}}
P.az.prototype={}
P.b.prototype={$ih:1}
P.F.prototype={}
P.C.prototype={
gD:function(a){return P.E.prototype.gD.call(this,this)},
i:function(a){return"null"}}
P.T.prototype={}
P.E.prototype={constructor:P.E,$iE:1,
n:function(a,b){return this===b},
gD:function(a){return H.c6(this)},
i:function(a){return"Instance of '"+H.bt(this)+"'"},
toString:function(){return this.i(this)}}
P.a8.prototype={}
P.e.prototype={$ik2:1}
P.bw.prototype={
gk:function(a){return this.a.length},
i:function(a){var u=this.a
return u.charCodeAt(0)==0?u:u}}
W.q.prototype={}
W.eq.prototype={
gk:function(a){return a.length}}
W.cC.prototype={
i:function(a){return String(a)},
$icC:1}
W.er.prototype={
i:function(a){return String(a)}}
W.bO.prototype={$ibO:1}
W.cE.prototype={}
W.b_.prototype={$ib_:1}
W.bm.prototype={
cG:function(a,b,c){var u=this.dC(a,b,P.m6(c,null))
return u},
dC:function(a,b,c){return a.getContext(b,c)},
$ibm:1}
W.b0.prototype={
gk:function(a){return a.length}}
W.bU.prototype={$ibU:1}
W.eC.prototype={
gk:function(a){return a.length}}
W.I.prototype={$iI:1}
W.bV.prototype={
gk:function(a){return a.length}}
W.eD.prototype={}
W.av.prototype={}
W.aw.prototype={}
W.eE.prototype={
gk:function(a){return a.length}}
W.eF.prototype={
gk:function(a){return a.length}}
W.eI.prototype={
gk:function(a){return a.length}}
W.af.prototype={$iaf:1}
W.bW.prototype={
eS:function(a,b){return a.adoptNode(b)},
cH:function(a,b){return a.getElementById(b)}}
W.eL.prototype={
i:function(a){return String(a)}}
W.cM.prototype={
f7:function(a,b){return a.createHTMLDocument(b)}}
W.cN.prototype={
gk:function(a){return a.length},
m:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.L(b,a,null,null,null))
return a[b]},
w:function(a,b){if(b<0||b>=a.length)return H.k(a,b)
return a[b]},
$iz:1,
$az:function(){return[[P.a7,P.T]]},
$at:function(){return[[P.a7,P.T]]},
$ih:1,
$ah:function(){return[[P.a7,P.T]]},
$ib:1,
$ab:function(){return[[P.a7,P.T]]},
$av:function(){return[[P.a7,P.T]]}}
W.cO.prototype={
i:function(a){return"Rectangle ("+H.i(a.left)+", "+H.i(a.top)+") "+H.i(this.gak(a))+" x "+H.i(this.gai(a))},
n:function(a,b){var u
if(b==null)return!1
if(!H.en(b,"$ia7",[P.T],"$aa7"))return!1
u=J.ac(b)
return a.left===u.gc7(b)&&a.top===u.gct(b)&&this.gak(a)===u.gak(b)&&this.gai(a)===u.gai(b)},
gD:function(a){return W.kq(C.c.gD(a.left),C.c.gD(a.top),C.c.gD(this.gak(a)),C.c.gD(this.gai(a)))},
gai:function(a){return a.height},
gc7:function(a){return a.left},
gct:function(a){return a.top},
gak:function(a){return a.width},
$ia7:1,
$aa7:function(){return[P.T]}}
W.eM.prototype={
gk:function(a){return a.length},
m:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.L(b,a,null,null,null))
return a[b]},
w:function(a,b){if(b<0||b>=a.length)return H.k(a,b)
return a[b]},
$iz:1,
$az:function(){return[P.e]},
$at:function(){return[P.e]},
$ih:1,
$ah:function(){return[P.e]},
$ib:1,
$ab:function(){return[P.e]},
$av:function(){return[P.e]}}
W.eN.prototype={
gk:function(a){return a.length}}
W.ie.prototype={
gk:function(a){return this.b.length},
m:function(a,b){var u=this.b
if(b<0||b>=u.length)return H.k(u,b)
return H.n(u[b],"$iJ")},
h:function(a,b){J.jK(this.a,b)
return b},
gH:function(a){var u=this.h2(this)
return new J.ae(u,u.length,0,[H.u(u,0)])},
$at:function(){return[W.J]},
$ah:function(){return[W.J]},
$ab:function(){return[W.J]}}
W.J.prototype={
geV:function(a){return new W.ih(a)},
gbV:function(a){return new W.ie(a,a.children)},
i:function(a){return a.localName},
U:function(a,b,c,d){var u,t,s,r
if(c==null){u=$.jV
if(u==null){u=H.c([],[W.ab])
t=new W.d5(u)
C.a.h(u,W.kp(null))
C.a.h(u,W.kr())
$.jV=t
d=t}else d=u
u=$.jU
if(u==null){u=new W.ec(d)
$.jU=u
c=u}else{u.a=d
c=u}}if($.aR==null){u=document
t=u.implementation
t=(t&&C.D).f7(t,"")
$.aR=t
$.jd=t.createRange()
t=$.aR
t.toString
t=t.createElement("base")
H.n(t,"$ibO")
t.href=u.baseURI
u=$.aR.head;(u&&C.F).p(u,t)}u=$.aR
if(u.body==null){u.toString
t=u.createElement("body")
u.body=H.n(t,"$ib_")}u=$.aR
if(!!this.$ib_)s=u.body
else{t=a.tagName
u.toString
s=u.createElement(t)
u=$.aR.body;(u&&C.j).p(u,s)}if("createContextualFragment" in window.Range.prototype&&!C.a.M(C.Q,a.tagName)){u=$.jd;(u&&C.x).cQ(u,s)
u=$.jd
r=(u&&C.x).f5(u,b)}else{s.innerHTML=b
r=$.aR.createDocumentFragment()
for(u=J.ac(r);t=s.firstChild,t!=null;)u.p(r,t)}u=$.aR.body
if(s==null?u!=null:s!==u)J.jL(s)
c.bh(r)
C.r.eS(document,r)
return r},
f6:function(a,b,c){return this.U(a,b,c,null)},
cT:function(a,b,c,d){a.textContent=null
this.p(a,this.U(a,b,c,d))},
cS:function(a,b){return this.cT(a,b,null,null)},
al:function(a,b){return a.getAttribute(b)},
eq:function(a,b){return a.removeAttribute(b)},
$iJ:1,
gh0:function(a){return a.tagName}}
W.eR.prototype={
$1:function(a){return!!J.Q(H.n(a,"$ix")).$iJ},
$S:13}
W.l.prototype={$il:1}
W.d.prototype={
eQ:function(a,b,c,d){H.j(c,{func:1,args:[W.l]})
if(c!=null)this.di(a,b,c,!1)},
di:function(a,b,c,d){return a.addEventListener(b,H.bC(H.j(c,{func:1,args:[W.l]}),1),!1)},
$id:1}
W.ax.prototype={$iax:1}
W.eZ.prototype={
gk:function(a){return a.length},
m:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.L(b,a,null,null,null))
return a[b]},
w:function(a,b){if(b<0||b>=a.length)return H.k(a,b)
return a[b]},
$iz:1,
$az:function(){return[W.ax]},
$at:function(){return[W.ax]},
$ih:1,
$ah:function(){return[W.ax]},
$ib:1,
$ab:function(){return[W.ax]},
$av:function(){return[W.ax]}}
W.f_.prototype={
gk:function(a){return a.length}}
W.f3.prototype={
gk:function(a){return a.length}}
W.ay.prototype={$iay:1}
W.cS.prototype={}
W.f8.prototype={
gk:function(a){return a.length}}
W.bo.prototype={
gk:function(a){return a.length},
m:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.L(b,a,null,null,null))
return a[b]},
w:function(a,b){if(b<0||b>=a.length)return H.k(a,b)
return a[b]},
$iz:1,
$az:function(){return[W.x]},
$at:function(){return[W.x]},
$ih:1,
$ah:function(){return[W.x]},
$ib:1,
$ab:function(){return[W.x]},
$ibo:1,
$av:function(){return[W.x]}}
W.cT.prototype={}
W.aC.prototype={$iaC:1}
W.d0.prototype={
i:function(a){return String(a)},
$id0:1}
W.fw.prototype={
gk:function(a){return a.length}}
W.fx.prototype={
m:function(a,b){return P.aY(a.get(H.A(b)))},
F:function(a,b){var u,t
H.j(b,{func:1,ret:-1,args:[P.e,,]})
u=a.entries()
for(;!0;){t=u.next()
if(t.done)return
b.$2(t.value[0],P.aY(t.value[1]))}},
gP:function(a){var u=H.c([],[P.e])
this.F(a,new W.fy(u))
return u},
gk:function(a){return a.size},
$aW:function(){return[P.e,null]},
$iF:1,
$aF:function(){return[P.e,null]}}
W.fy.prototype={
$2:function(a,b){return C.a.h(this.a,a)},
$S:4}
W.fz.prototype={
m:function(a,b){return P.aY(a.get(H.A(b)))},
F:function(a,b){var u,t
H.j(b,{func:1,ret:-1,args:[P.e,,]})
u=a.entries()
for(;!0;){t=u.next()
if(t.done)return
b.$2(t.value[0],P.aY(t.value[1]))}},
gP:function(a){var u=H.c([],[P.e])
this.F(a,new W.fA(u))
return u},
gk:function(a){return a.size},
$aW:function(){return[P.e,null]},
$iF:1,
$aF:function(){return[P.e,null]}}
W.fA.prototype={
$2:function(a,b){return C.a.h(this.a,a)},
$S:4}
W.aD.prototype={$iaD:1}
W.fB.prototype={
gk:function(a){return a.length},
m:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.L(b,a,null,null,null))
return a[b]},
w:function(a,b){if(b<0||b>=a.length)return H.k(a,b)
return a[b]},
$iz:1,
$az:function(){return[W.aD]},
$at:function(){return[W.aD]},
$ih:1,
$ah:function(){return[W.aD]},
$ib:1,
$ab:function(){return[W.aD]},
$av:function(){return[W.aD]}}
W.X.prototype={$iX:1}
W.a1.prototype={
gaa:function(a){var u,t
u=this.a
t=u.childNodes.length
if(t===0)throw H.f(P.kb("No elements"))
if(t>1)throw H.f(P.kb("More than one element"))
return u.firstChild},
a_:function(a,b){var u,t,s,r,q
H.p(b,"$ih",[W.x],"$ah")
u=b.a
t=this.a
if(u!==t)for(s=u.childNodes.length,r=J.ac(t),q=0;q<s;++q)r.p(t,u.firstChild)
return},
gH:function(a){var u=this.a.childNodes
return new W.cQ(u,u.length,-1,[H.cx(C.S,u,"v",0)])},
gk:function(a){return this.a.childNodes.length},
m:function(a,b){var u=this.a.childNodes
if(b<0||b>=u.length)return H.k(u,b)
return u[b]},
$at:function(){return[W.x]},
$ah:function(){return[W.x]},
$ab:function(){return[W.x]}}
W.x.prototype={
fS:function(a){var u=a.parentNode
if(u!=null)J.ep(u,a)},
i:function(a){var u=a.nodeValue
return u==null?this.cX(a):u},
p:function(a,b){return a.appendChild(b)},
er:function(a,b){return a.removeChild(b)},
$ix:1}
W.c5.prototype={
gk:function(a){return a.length},
m:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.L(b,a,null,null,null))
return a[b]},
w:function(a,b){if(b<0||b>=a.length)return H.k(a,b)
return a[b]},
$iz:1,
$az:function(){return[W.x]},
$at:function(){return[W.x]},
$ih:1,
$ah:function(){return[W.x]},
$ib:1,
$ab:function(){return[W.x]},
$av:function(){return[W.x]}}
W.aE.prototype={$iaE:1,
gk:function(a){return a.length}}
W.fS.prototype={
gk:function(a){return a.length},
m:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.L(b,a,null,null,null))
return a[b]},
w:function(a,b){if(b<0||b>=a.length)return H.k(a,b)
return a[b]},
$iz:1,
$az:function(){return[W.aE]},
$at:function(){return[W.aE]},
$ih:1,
$ah:function(){return[W.aE]},
$ib:1,
$ab:function(){return[W.aE]},
$av:function(){return[W.aE]}}
W.da.prototype={
f5:function(a,b){return a.createContextualFragment(b)},
cQ:function(a,b){return a.selectNodeContents(b)}}
W.h_.prototype={
m:function(a,b){return P.aY(a.get(H.A(b)))},
F:function(a,b){var u,t
H.j(b,{func:1,ret:-1,args:[P.e,,]})
u=a.entries()
for(;!0;){t=u.next()
if(t.done)return
b.$2(t.value[0],P.aY(t.value[1]))}},
gP:function(a){var u=H.c([],[P.e])
this.F(a,new W.h0(u))
return u},
gk:function(a){return a.size},
$aW:function(){return[P.e,null]},
$iF:1,
$aF:function(){return[P.e,null]}}
W.h0.prototype={
$2:function(a,b){return C.a.h(this.a,a)},
$S:4}
W.h2.prototype={
gk:function(a){return a.length}}
W.aF.prototype={$iaF:1}
W.hc.prototype={
gk:function(a){return a.length},
m:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.L(b,a,null,null,null))
return a[b]},
w:function(a,b){if(b<0||b>=a.length)return H.k(a,b)
return a[b]},
$iz:1,
$az:function(){return[W.aF]},
$at:function(){return[W.aF]},
$ih:1,
$ah:function(){return[W.aF]},
$ib:1,
$ab:function(){return[W.aF]},
$av:function(){return[W.aF]}}
W.aG.prototype={$iaG:1}
W.hd.prototype={
gk:function(a){return a.length},
m:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.L(b,a,null,null,null))
return a[b]},
w:function(a,b){if(b<0||b>=a.length)return H.k(a,b)
return a[b]},
$iz:1,
$az:function(){return[W.aG]},
$at:function(){return[W.aG]},
$ih:1,
$ah:function(){return[W.aG]},
$ib:1,
$ab:function(){return[W.aG]},
$av:function(){return[W.aG]}}
W.aH.prototype={$iaH:1,
gk:function(a){return a.length}}
W.hg.prototype={
m:function(a,b){return this.bF(a,H.A(b))},
F:function(a,b){var u,t
H.j(b,{func:1,ret:-1,args:[P.e,P.e]})
for(u=0;!0;++u){t=this.dF(a,u)
if(t==null)return
b.$2(t,this.bF(a,t))}},
gP:function(a){var u=H.c([],[P.e])
this.F(a,new W.hh(u))
return u},
gk:function(a){return a.length},
bF:function(a,b){return a.getItem(b)},
dF:function(a,b){return a.key(b)},
$aW:function(){return[P.e,P.e]},
$iF:1,
$aF:function(){return[P.e,P.e]}}
W.hh.prototype={
$2:function(a,b){return C.a.h(this.a,a)},
$S:27}
W.ao.prototype={$iao:1}
W.bx.prototype={}
W.dh.prototype={
U:function(a,b,c,d){var u,t
if("createContextualFragment" in window.Range.prototype)return this.aN(a,b,c,d)
u=W.li("<table>"+b+"</table>",c,d)
t=document.createDocumentFragment()
t.toString
u.toString
new W.a1(t).a_(0,new W.a1(u))
return t}}
W.di.prototype={
U:function(a,b,c,d){var u,t,s,r
if("createContextualFragment" in window.Range.prototype)return this.aN(a,b,c,d)
u=document
t=u.createDocumentFragment()
u=C.k.U(u.createElement("table"),b,c,d)
u.toString
u=new W.a1(u)
s=u.gaa(u)
s.toString
u=new W.a1(s)
r=u.gaa(u)
t.toString
r.toString
new W.a1(t).a_(0,new W.a1(r))
return t}}
W.hn.prototype={
U:function(a,b,c,d){var u,t,s
if("createContextualFragment" in window.Range.prototype)return this.aN(a,b,c,d)
u=document
t=u.createDocumentFragment()
u=C.k.U(u.createElement("table"),b,c,d)
u.toString
u=new W.a1(u)
s=u.gaa(u)
t.toString
s.toString
new W.a1(t).a_(0,new W.a1(s))
return t}}
W.cc.prototype={$icc:1}
W.aI.prototype={$iaI:1}
W.ap.prototype={$iap:1}
W.hp.prototype={
gk:function(a){return a.length},
m:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.L(b,a,null,null,null))
return a[b]},
w:function(a,b){if(b<0||b>=a.length)return H.k(a,b)
return a[b]},
$iz:1,
$az:function(){return[W.ap]},
$at:function(){return[W.ap]},
$ih:1,
$ah:function(){return[W.ap]},
$ib:1,
$ab:function(){return[W.ap]},
$av:function(){return[W.ap]}}
W.hq.prototype={
gk:function(a){return a.length},
m:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.L(b,a,null,null,null))
return a[b]},
w:function(a,b){if(b<0||b>=a.length)return H.k(a,b)
return a[b]},
$iz:1,
$az:function(){return[W.aI]},
$at:function(){return[W.aI]},
$ih:1,
$ah:function(){return[W.aI]},
$ib:1,
$ab:function(){return[W.aI]},
$av:function(){return[W.aI]}}
W.ht.prototype={
gk:function(a){return a.length}}
W.aK.prototype={$iaK:1}
W.aq.prototype={$iaq:1}
W.hx.prototype={
gk:function(a){return a.length},
m:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.L(b,a,null,null,null))
return a[b]},
w:function(a,b){if(b<0||b>=a.length)return H.k(a,b)
return a[b]},
$iz:1,
$az:function(){return[W.aK]},
$at:function(){return[W.aK]},
$ih:1,
$ah:function(){return[W.aK]},
$ib:1,
$ab:function(){return[W.aK]},
$av:function(){return[W.aK]}}
W.hy.prototype={
gk:function(a){return a.length}}
W.bc.prototype={}
W.hT.prototype={
i:function(a){return String(a)}}
W.i6.prototype={
gk:function(a){return a.length}}
W.aN.prototype={
gfd:function(a){if(a.deltaY!==undefined)return a.deltaY
throw H.f(P.ai("deltaY is not supported"))},
gfc:function(a){if(a.deltaX!==undefined)return a.deltaX
throw H.f(P.ai("deltaX is not supported"))},
$iaN:1}
W.cj.prototype={
ey:function(a,b){return a.requestAnimationFrame(H.bC(H.j(b,{func:1,ret:-1,args:[P.T]}),1))},
dt:function(a){if(!!(a.requestAnimationFrame&&a.cancelAnimationFrame))return;(function(b){var u=['ms','moz','webkit','o']
for(var t=0;t<u.length&&!b.requestAnimationFrame;++t){b.requestAnimationFrame=b[u[t]+'RequestAnimationFrame']
b.cancelAnimationFrame=b[u[t]+'CancelAnimationFrame']||b[u[t]+'CancelRequestAnimationFrame']}if(b.requestAnimationFrame&&b.cancelAnimationFrame)return
b.requestAnimationFrame=function(c){return window.setTimeout(function(){c(Date.now())},16)}
b.cancelAnimationFrame=function(c){clearTimeout(c)}})(a)}}
W.ck.prototype={$ick:1}
W.ig.prototype={
gk:function(a){return a.length},
m:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.L(b,a,null,null,null))
return a[b]},
w:function(a,b){if(b<0||b>=a.length)return H.k(a,b)
return a[b]},
$iz:1,
$az:function(){return[W.I]},
$at:function(){return[W.I]},
$ih:1,
$ah:function(){return[W.I]},
$ib:1,
$ab:function(){return[W.I]},
$av:function(){return[W.I]}}
W.dx.prototype={
i:function(a){return"Rectangle ("+H.i(a.left)+", "+H.i(a.top)+") "+H.i(a.width)+" x "+H.i(a.height)},
n:function(a,b){var u
if(b==null)return!1
if(!H.en(b,"$ia7",[P.T],"$aa7"))return!1
u=J.ac(b)
return a.left===u.gc7(b)&&a.top===u.gct(b)&&a.width===u.gak(b)&&a.height===u.gai(b)},
gD:function(a){return W.kq(C.c.gD(a.left),C.c.gD(a.top),C.c.gD(a.width),C.c.gD(a.height))},
gai:function(a){return a.height},
gak:function(a){return a.width}}
W.iv.prototype={
gk:function(a){return a.length},
m:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.L(b,a,null,null,null))
return a[b]},
w:function(a,b){if(b<0||b>=a.length)return H.k(a,b)
return a[b]},
$iz:1,
$az:function(){return[W.ay]},
$at:function(){return[W.ay]},
$ih:1,
$ah:function(){return[W.ay]},
$ib:1,
$ab:function(){return[W.ay]},
$av:function(){return[W.ay]}}
W.dP.prototype={
gk:function(a){return a.length},
m:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.L(b,a,null,null,null))
return a[b]},
w:function(a,b){if(b<0||b>=a.length)return H.k(a,b)
return a[b]},
$iz:1,
$az:function(){return[W.x]},
$at:function(){return[W.x]},
$ih:1,
$ah:function(){return[W.x]},
$ib:1,
$ab:function(){return[W.x]},
$av:function(){return[W.x]}}
W.iH.prototype={
gk:function(a){return a.length},
m:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.L(b,a,null,null,null))
return a[b]},
w:function(a,b){if(b<0||b>=a.length)return H.k(a,b)
return a[b]},
$iz:1,
$az:function(){return[W.aH]},
$at:function(){return[W.aH]},
$ih:1,
$ah:function(){return[W.aH]},
$ib:1,
$ab:function(){return[W.aH]},
$av:function(){return[W.aH]}}
W.iI.prototype={
gk:function(a){return a.length},
m:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.L(b,a,null,null,null))
return a[b]},
w:function(a,b){if(b<0||b>=a.length)return H.k(a,b)
return a[b]},
$iz:1,
$az:function(){return[W.ao]},
$at:function(){return[W.ao]},
$ih:1,
$ah:function(){return[W.ao]},
$ib:1,
$ab:function(){return[W.ao]},
$av:function(){return[W.ao]}}
W.id.prototype={
F:function(a,b){var u,t,s,r,q,p
H.j(b,{func:1,ret:-1,args:[P.e,P.e]})
for(u=this.gP(this),t=u.length,s=this.a,r=J.ac(s),q=0;q<u.length;u.length===t||(0,H.G)(u),++q){p=u[q]
b.$2(p,r.al(s,p))}},
gP:function(a){var u,t,s,r,q
u=this.a.attributes
t=H.c([],[P.e])
for(s=u.length,r=0;r<s;++r){if(r>=u.length)return H.k(u,r)
q=H.n(u[r],"$ick")
if(q.namespaceURI==null)C.a.h(t,q.name)}return t},
$aW:function(){return[P.e,P.e]},
$aF:function(){return[P.e,P.e]}}
W.ih.prototype={
m:function(a,b){return J.ja(this.a,H.A(b))},
gk:function(a){return this.gP(this).length}}
W.ii.prototype={}
W.jn.prototype={}
W.ij.prototype={}
W.ik.prototype={
$1:function(a){return this.a.$1(H.n(a,"$il"))},
$S:24}
W.be.prototype={
d9:function(a){var u,t
u=$.jI()
if(u.a===0){for(t=0;t<262;++t)u.J(0,C.P[t],W.me())
for(t=0;t<12;++t)u.J(0,C.n[t],W.mf())}},
ah:function(a){return $.l_().M(0,W.bX(a))},
a0:function(a,b,c){var u,t,s
u=W.bX(a)
t=$.jI()
s=t.m(0,H.i(u)+"::"+b)
if(s==null)s=t.m(0,"*::"+b)
if(s==null)return!1
return H.ju(s.$4(a,b,c,this))},
$iab:1}
W.v.prototype={
gH:function(a){return new W.cQ(a,this.gk(a),-1,[H.cx(this,a,"v",0)])}}
W.d5.prototype={
ah:function(a){return C.a.bR(this.a,new W.fK(a))},
a0:function(a,b,c){return C.a.bR(this.a,new W.fJ(a,b,c))},
$iab:1}
W.fK.prototype={
$1:function(a){return H.n(a,"$iab").ah(this.a)},
$S:16}
W.fJ.prototype={
$1:function(a){return H.n(a,"$iab").a0(this.a,this.b,this.c)},
$S:16}
W.dX.prototype={
dd:function(a,b,c,d){var u,t,s
this.a.a_(0,c)
u=b.aH(0,new W.iF())
t=b.aH(0,new W.iG())
this.b.a_(0,u)
s=this.c
s.a_(0,C.R)
s.a_(0,t)},
ah:function(a){return this.a.M(0,W.bX(a))},
a0:function(a,b,c){var u,t
u=W.bX(a)
t=this.c
if(t.M(0,H.i(u)+"::"+b))return this.d.eT(c)
else if(t.M(0,"*::"+b))return this.d.eT(c)
else{t=this.b
if(t.M(0,H.i(u)+"::"+b))return!0
else if(t.M(0,"*::"+b))return!0
else if(t.M(0,H.i(u)+"::*"))return!0
else if(t.M(0,"*::*"))return!0}return!1},
$iab:1}
W.iF.prototype={
$1:function(a){return!C.a.M(C.n,H.A(a))},
$S:17}
W.iG.prototype={
$1:function(a){return C.a.M(C.n,H.A(a))},
$S:17}
W.iK.prototype={
a0:function(a,b,c){if(this.d0(a,b,c))return!0
if(b==="template"&&c==="")return!0
if(J.ja(a,"template")==="")return this.e.M(0,b)
return!1}}
W.iL.prototype={
$1:function(a){return"TEMPLATE::"+H.i(H.A(a))},
$S:25}
W.iJ.prototype={
ah:function(a){var u=J.Q(a)
if(!!u.$ic7)return!1
u=!!u.$im
if(u&&W.bX(a)==="foreignObject")return!1
if(u)return!0
return!1},
a0:function(a,b,c){if(b==="is"||C.d.aL(b,"on"))return!1
return this.ah(a)},
$iab:1}
W.cQ.prototype={
q:function(){var u,t
u=this.c+1
t=this.b
if(u<t){this.sbG(J.l2(this.a,u))
this.c=u
return!0}this.sbG(null)
this.c=t
return!1},
gB:function(a){return this.d},
sbG:function(a){this.d=H.B(a,H.u(this,0))},
$iaz:1}
W.ab.prototype={}
W.iD.prototype={$imS:1}
W.ec.prototype={
bh:function(a){new W.iP(this).$2(a,null)},
ao:function(a,b){if(b==null)J.jL(a)
else J.ep(b,a)},
eA:function(a,b){var u,t,s,r,q,p,o,n
u=!0
t=null
s=null
try{t=J.l5(a)
s=J.ja(t.a,"is")
r=function(c){if(!(c.attributes instanceof NamedNodeMap))return true
var m=c.childNodes
if(c.lastChild&&c.lastChild!==m[m.length-1])return true
if(c.children)if(!(c.children instanceof HTMLCollection||c.children instanceof NodeList))return true
var l=0
if(c.children)l=c.children.length
for(var k=0;k<l;k++){var j=c.children[k]
if(j.id=='attributes'||j.name=='attributes'||j.id=='lastChild'||j.name=='lastChild'||j.id=='children'||j.name=='children')return true}return false}(a)
u=r?!0:!(a.attributes instanceof NamedNodeMap)}catch(o){H.ad(o)}q="element unprintable"
try{q=J.as(a)}catch(o){H.ad(o)}try{p=W.bX(a)
this.ez(H.n(a,"$iJ"),b,u,q,p,H.n(t,"$iF"),H.A(s))}catch(o){if(H.ad(o) instanceof P.at)throw o
else{this.ao(a,b)
window
n="Removing corrupted element "+H.i(q)
if(typeof console!="undefined")window.console.warn(n)}}},
ez:function(a,b,c,d,e,f,g){var u,t,s,r,q,p
if(c){this.ao(a,b)
window
u="Removing element due to corrupted attributes on <"+d+">"
if(typeof console!="undefined")window.console.warn(u)
return}if(!this.a.ah(a)){this.ao(a,b)
window
u="Removing disallowed element <"+H.i(e)+"> from "+H.i(b)
if(typeof console!="undefined")window.console.warn(u)
return}if(g!=null)if(!this.a.a0(a,"is",g)){this.ao(a,b)
window
u="Removing disallowed type extension <"+H.i(e)+' is="'+g+'">'
if(typeof console!="undefined")window.console.warn(u)
return}u=f.gP(f)
t=H.c(u.slice(0),[H.u(u,0)])
for(s=f.gP(f).length-1,u=f.a,r=J.ac(u);s>=0;--s){if(s>=t.length)return H.k(t,s)
q=t[s]
if(!this.a.a0(a,J.l8(q),r.al(u,q))){window
p="Removing disallowed attribute <"+H.i(e)+" "+q+'="'+H.i(r.al(u,q))+'">'
if(typeof console!="undefined")window.console.warn(p)
r.al(u,q)
r.eq(u,q)}}if(!!J.Q(a).$icc)this.bh(a.content)},
$imE:1}
W.iP.prototype={
$2:function(a,b){var u,t,s,r,q,p
s=this.a
switch(a.nodeType){case 1:s.eA(a,b)
break
case 8:case 11:case 3:case 4:break
default:s.ao(a,b)}u=a.lastChild
for(s=a==null;null!=u;){t=null
try{t=u.previousSibling}catch(r){H.ad(r)
q=H.n(u,"$ix")
if(s){p=q.parentNode
if(p!=null)J.ep(p,q)}else J.ep(a,q)
u=null
t=a.lastChild}if(u!=null)this.$2(u,a)
u=H.n(t,"$ix")}},
$S:26}
W.dw.prototype={}
W.dy.prototype={}
W.dz.prototype={}
W.dA.prototype={}
W.dB.prototype={}
W.dD.prototype={}
W.dE.prototype={}
W.dF.prototype={}
W.dG.prototype={}
W.dL.prototype={}
W.dM.prototype={}
W.dN.prototype={}
W.dO.prototype={}
W.dQ.prototype={}
W.dR.prototype={}
W.dU.prototype={}
W.dV.prototype={}
W.dW.prototype={}
W.cq.prototype={}
W.cr.prototype={}
W.dY.prototype={}
W.dZ.prototype={}
W.e2.prototype={}
W.e5.prototype={}
W.e6.prototype={}
W.cs.prototype={}
W.ct.prototype={}
W.e8.prototype={}
W.e9.prototype={}
W.ed.prototype={}
W.ee.prototype={}
W.ef.prototype={}
W.eg.prototype={}
W.eh.prototype={}
W.ei.prototype={}
W.ej.prototype={}
W.ek.prototype={}
W.el.prototype={}
W.em.prototype={}
P.iU.prototype={
$2:function(a,b){this.a[a]=b},
$S:11}
P.f0.prototype={
gaT:function(){var u,t,s
u=this.b
t=H.a9(u,"t",0)
s=W.J
return new H.fs(new H.ci(u,H.j(new P.f1(),{func:1,ret:P.K,args:[t]}),[t]),H.j(new P.f2(),{func:1,ret:s,args:[t]}),[t,s])},
h:function(a,b){J.jK(this.b.a,b)},
gk:function(a){return J.bk(this.gaT().a)},
m:function(a,b){var u=this.gaT()
return u.b.$1(J.j9(u.a,b))},
gH:function(a){var u=P.ls(this.gaT(),!1,W.J)
return new J.ae(u,u.length,0,[H.u(u,0)])},
$at:function(){return[W.J]},
$ah:function(){return[W.J]},
$ab:function(){return[W.J]}}
P.f1.prototype={
$1:function(a){return!!J.Q(H.n(a,"$ix")).$iJ},
$S:13}
P.f2.prototype={
$1:function(a){return H.bE(H.n(a,"$ix"),"$iJ")},
$S:39}
P.iy.prototype={}
P.a7.prototype={}
P.aT.prototype={$iaT:1}
P.fk.prototype={
gk:function(a){return a.length},
m:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.L(b,a,null,null,null))
return this.a2(a,b)},
w:function(a,b){return this.m(a,b)},
a2:function(a,b){return a.getItem(b)},
$at:function(){return[P.aT]},
$ih:1,
$ah:function(){return[P.aT]},
$ib:1,
$ab:function(){return[P.aT]},
$av:function(){return[P.aT]}}
P.aW.prototype={$iaW:1}
P.fN.prototype={
gk:function(a){return a.length},
m:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.L(b,a,null,null,null))
return this.a2(a,b)},
w:function(a,b){return this.m(a,b)},
a2:function(a,b){return a.getItem(b)},
$at:function(){return[P.aW]},
$ih:1,
$ah:function(){return[P.aW]},
$ib:1,
$ab:function(){return[P.aW]},
$av:function(){return[P.aW]}}
P.fT.prototype={
gk:function(a){return a.length}}
P.c7.prototype={$ic7:1}
P.hm.prototype={
gk:function(a){return a.length},
m:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.L(b,a,null,null,null))
return this.a2(a,b)},
w:function(a,b){return this.m(a,b)},
a2:function(a,b){return a.getItem(b)},
$at:function(){return[P.e]},
$ih:1,
$ah:function(){return[P.e]},
$ib:1,
$ab:function(){return[P.e]},
$av:function(){return[P.e]}}
P.m.prototype={
gbV:function(a){return new P.f0(a,new W.a1(a))},
U:function(a,b,c,d){var u,t,s,r,q,p
u=H.c([],[W.ab])
C.a.h(u,W.kp(null))
C.a.h(u,W.kr())
C.a.h(u,new W.iJ())
c=new W.ec(new W.d5(u))
t='<svg version="1.1">'+b+"</svg>"
u=document
s=u.body
r=(s&&C.j).f6(s,t,c)
q=u.createDocumentFragment()
r.toString
u=new W.a1(r)
p=u.gaa(u)
for(u=J.ac(q);s=p.firstChild,s!=null;)u.p(q,s)
return q},
$im:1}
P.aX.prototype={$iaX:1}
P.hz.prototype={
gk:function(a){return a.length},
m:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.L(b,a,null,null,null))
return this.a2(a,b)},
w:function(a,b){return this.m(a,b)},
a2:function(a,b){return a.getItem(b)},
$at:function(){return[P.aX]},
$ih:1,
$ah:function(){return[P.aX]},
$ib:1,
$ab:function(){return[P.aX]},
$av:function(){return[P.aX]}}
P.dH.prototype={}
P.dI.prototype={}
P.dS.prototype={}
P.dT.prototype={}
P.e3.prototype={}
P.e4.prototype={}
P.ea.prototype={}
P.eb.prototype={}
P.et.prototype={
gk:function(a){return a.length}}
P.eu.prototype={
m:function(a,b){return P.aY(a.get(H.A(b)))},
F:function(a,b){var u,t
H.j(b,{func:1,ret:-1,args:[P.e,,]})
u=a.entries()
for(;!0;){t=u.next()
if(t.done)return
b.$2(t.value[0],P.aY(t.value[1]))}},
gP:function(a){var u=H.c([],[P.e])
this.F(a,new P.ev(u))
return u},
gk:function(a){return a.size},
$aW:function(){return[P.e,null]},
$iF:1,
$aF:function(){return[P.e,null]}}
P.ev.prototype={
$2:function(a,b){return C.a.h(this.a,a)},
$S:4}
P.ew.prototype={
gk:function(a){return a.length}}
P.bl.prototype={}
P.fO.prototype={
gk:function(a){return a.length}}
P.dv.prototype={}
P.cF.prototype={$icF:1}
P.cR.prototype={$icR:1}
P.d9.prototype={$id9:1}
P.bv.prototype={
bS:function(a,b,c){return a.attachShader(b,c)},
a1:function(a,b,c){return a.bindBuffer(b,c)},
eX:function(a,b,c){return a.bindFramebuffer(b,c)},
bU:function(a,b,c,d){return a.bufferData(b,c,d)},
f_:function(a,b){return a.clear(b)},
f0:function(a,b,c,d,e){return a.clearColor(b,c,d,e)},
f1:function(a,b){return a.clearDepth(b)},
f2:function(a,b){return a.compileShader(b)},
f8:function(a,b){return a.createShader(b)},
fa:function(a,b){return a.deleteProgram(b)},
fb:function(a,b){return a.deleteShader(b)},
fe:function(a,b){return a.depthFunc(b)},
c1:function(a,b){return a.disableVertexAttribArray(b)},
fg:function(a,b,c,d,e){return a.drawElements(b,c,d,e)},
c3:function(a,b){return a.enable(b)},
c4:function(a,b){return a.enableVertexAttribArray(b)},
cC:function(a,b,c){return a.getActiveAttrib(b,c)},
cD:function(a,b,c){return a.getActiveUniform(b,c)},
cE:function(a,b,c){return a.getAttribLocation(b,c)},
bg:function(a,b){return a.getParameter(b)},
cI:function(a,b){return a.getProgramInfoLog(b)},
aI:function(a,b,c){return a.getProgramParameter(b,c)},
cJ:function(a,b){return a.getShaderInfoLog(b)},
cK:function(a,b,c){return a.getShaderParameter(b,c)},
cL:function(a,b,c){return a.getUniformLocation(b,c)},
fv:function(a,b){return a.linkProgram(b)},
cU:function(a,b,c){return a.shaderSource(b,c)},
cu:function(a,b,c){return a.uniform1f(b,c)},
cv:function(a,b,c,d,e){return a.uniform3f(b,c,d,e)},
h6:function(a,b,c,d){return a.uniformMatrix4fv(b,!1,d)},
cz:function(a,b){return a.useProgram(b)},
h7:function(a,b,c,d,e,f,g){return a.vertexAttribPointer(b,c,d,!1,f,g)},
h8:function(a,b,c,d,e){return a.viewport(b,c,d,e)},
$ibv:1}
P.de.prototype={$ide:1}
P.dn.prototype={$idn:1}
P.he.prototype={
gk:function(a){return a.length},
m:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.L(b,a,null,null,null))
return P.aY(this.dE(a,b))},
w:function(a,b){return this.m(a,b)},
dE:function(a,b){return a.item(b)},
$at:function(){return[[P.F,,,]]},
$ih:1,
$ah:function(){return[[P.F,,,]]},
$ib:1,
$ab:function(){return[[P.F,,,]]},
$av:function(){return[[P.F,,,]]}}
P.e_.prototype={}
P.e0.prototype={}
O.U.prototype={
bl:function(a){this.sdJ(H.c([],[a]))
this.sbI(null)
this.sbH(null)
this.sbJ(null)},
cR:function(a,b,c){var u={func:1,ret:-1,args:[P.y,[P.h,H.a9(this,"U",0)]]}
H.j(a,u)
H.j(c,u)
this.sbI(b)
this.sbH(a)
this.sbJ(c)},
aK:function(a,b){return this.cR(a,null,b)},
ef:function(a){H.p(a,"$ih",[H.a9(this,"U",0)],"$ah")
return!0},
d6:function(a,b){var u
H.p(b,"$ih",[H.a9(this,"U",0)],"$ah")
u=this.c
if(u!=null)u.$2(a,b)},
gk:function(a){return this.a.length},
gH:function(a){var u=this.a
return new J.ae(u,u.length,0,[H.u(u,0)])},
w:function(a,b){var u=this.a
if(b<0||b>=u.length)return H.k(u,b)
return u[b]},
h:function(a,b){var u,t,s
u=H.a9(this,"U",0)
H.B(b,u)
u=[u]
if(this.ef(H.c([b],u))){t=this.a
s=t.length
C.a.h(t,b)
this.d6(s,H.c([b],u))}},
sdJ:function(a){this.a=H.p(a,"$ib",[H.a9(this,"U",0)],"$ab")},
sbI:function(a){this.b=H.j(a,{func:1,ret:P.K,args:[[P.h,H.a9(this,"U",0)]]})},
sbH:function(a){this.c=H.j(a,{func:1,ret:-1,args:[P.y,[P.h,H.a9(this,"U",0)]]})},
sbJ:function(a){this.d=H.j(a,{func:1,ret:-1,args:[P.y,[P.h,H.a9(this,"U",0)]]})},
$ih:1}
O.c2.prototype={
gk:function(a){return this.a.length},
gv:function(){var u=this.b
if(u==null){u=D.an()
this.b=u}return u},
d7:function(a){var u=this.b
if(u!=null)u.T(a)},
ab:function(){return this.d7(null)},
gaq:function(a){var u=this.a
if(u.length>0)return C.a.gaE(u)
else return V.fv()},
cj:function(a){var u=this.a
if(a==null)C.a.h(u,V.fv())
else C.a.h(u,a)
this.ab()},
bc:function(){var u=this.a
if(u.length>0){u.pop()
this.ab()}},
saV:function(a){this.a=H.p(a,"$ib",[V.bb],"$ab")}}
E.ex.prototype={}
E.a0.prototype={
cw:function(a,b){var u,t,s,r
u=this.r
t=u!=null?u.aG(0,b,this):null
if(!J.S(t,this.x)){s=this.x
this.x=t
r=new D.P("matrix",s,t,this,[V.bb])
r.b=!0
this.X(r)}for(u=this.y.a,u=new J.ae(u,u.length,0,[H.u(u,0)]);u.q();)u.d.cw(0,b)},
aj:function(a){var u,t,s,r,q,p,o,n,m
u=a.dx
t=this.x
u.toString
if(t==null)C.a.h(u.a,u.gaq(u))
else C.a.h(u.a,t.K(0,u.gaq(u)))
u.ab()
a.ck(this.f)
u=a.dy
s=(u&&C.a).gaE(u)
if(s!=null&&this.d!=null){u=s.a
if(u==null){r=a.fr.m(0,"Depth")
if(r==null){u=a.a
r=new A.eK(u,"Depth")
r.d4(u,"Depth")
t=$.lh
q=$.lg
r.c=t
r.d=q
r.e=r.bD(t,35633)
r.f=r.bD(r.d,35632)
t=u.createProgram()
r.r=t
C.b.bS(u,t,r.e)
C.b.bS(u,r.r,r.f)
C.b.fv(u,r.r)
if(!H.ju(C.b.aI(u,r.r,35714))){p=C.b.cI(u,r.r)
C.b.fa(u,r.r)
H.a2(P.a3("Failed to link shader: "+H.i(p)))}r.eF()
r.eH()
r.z=r.x.m(0,"posAttr")
r.Q=H.bE(r.y.m(0,"objClr"),"$icg")
r.ch=H.bE(r.y.m(0,"fogClr"),"$icg")
r.cx=H.bE(r.y.m(0,"fogStart"),"$icf")
r.cy=H.bE(r.y.m(0,"fogStop"),"$icf")
r.db=H.bE(r.y.m(0,"viewObjMat"),"$ich")
r.dx=H.bE(r.y.m(0,"projMat"),"$ich")
if(a.fr.bX(0,"Depth"))H.a2(P.a3('Shader cache already contains a shader by the name "Depth".'))
a.fr.J(0,"Depth",r)}s.a=r
u=r}t=this.e
if(!(t instanceof Z.cH)){this.e=null
t=null}if(t==null){u=this.d.eZ(new Z.i7(a.a),$.aZ())
t=u.fi($.aZ())
q=s.a
t.e=q.z.c
this.e=u
u=q}t=a.a
C.b.cz(t,u.r)
u.x.fh()
q=s.b
o=u.Q
o.toString
n=q.a
m=q.b
q=q.c
C.b.cv(o.a,o.d,n,m,q)
q=s.c
m=u.ch
m.toString
n=q.a
o=q.b
q=q.c
C.b.cv(m.a,m.d,n,o,q)
q=s.d
o=u.cx
C.b.cu(o.a,o.d,q)
q=s.e
o=u.cy
C.b.cu(o.a,o.d,q)
q=a.cy
q=q.gaq(q)
o=u.dx
o.toString
o.bi(q.cq(0,!0))
q=a.cx
if(q==null){q=a.db
q=q.gaq(q)
o=a.dx
o=q.K(0,o.gaq(o))
a.cx=o
q=o}u=u.db
u.toString
u.bi(q.cq(0,!0))
q=this.e
q.b3(a)
q.aj(a)
q.h5(a)
q=s.a
q.toString
C.b.cz(t,null)
q.x.ff()}for(u=this.y.a,u=new J.ae(u,u.length,0,[H.u(u,0)]);u.q();)u.d.aj(a)
a.ci()
a.dx.bc()},
gv:function(){var u=this.z
if(u==null){u=D.an()
this.z=u}return u},
X:function(a){var u=this.z
if(u!=null)u.T(a)},
W:function(){return this.X(null)},
ce:function(a){H.n(a,"$iD")
this.e=null
this.X(a)},
fI:function(){return this.ce(null)},
cc:function(a){this.X(H.n(a,"$iD"))},
fH:function(){return this.cc(null)},
ca:function(a){this.X(H.n(a,"$iD"))},
fE:function(){return this.ca(null)},
fD:function(a,b){var u,t,s,r,q,p,o
H.p(b,"$ih",[E.a0],"$ah")
for(u=b.length,t=this.gc9(),s={func:1,ret:-1,args:[D.D]},r=[s],q=0;q<b.length;b.length===u||(0,H.G)(b),++q){p=b[q]
if(p!=null){o=p.z
if(o==null){o=new D.bY()
o.sa5(null)
o.say(null)
o.c=null
o.d=0
p.z=o}H.j(t,s)
if(o.a==null)o.sa5(H.c([],r))
o=o.a;(o&&C.a).h(o,t)}}this.W()},
fG:function(a,b){var u,t
H.p(b,"$ih",[E.a0],"$ah")
for(u=b.gH(b),t=this.gc9();u.q();)u.gB(u).gv().I(0,t)
this.W()},
i:function(a){var u,t
u=this.a
t=u.length
if(t<=0)return"Unnamed entity"
return u},
sd8:function(a,b){this.y=H.p(b,"$iU",[E.a0],"$aU")},
$ik0:1}
E.fW.prototype={
d2:function(a,b){var u,t
this.c=512
this.d=512
this.e=0
u=new P.b5(Date.now(),!1)
this.f=u
this.r=u
this.x=u
this.y=0
this.z=null
this.Q=null
this.ch=null
this.cx=null
u=new O.c2()
t=[V.bb]
u.saV(H.c([],t))
u.b=null
u.gv().h(0,new E.fX(this))
this.cy=u
u=new O.c2()
u.saV(H.c([],t))
u.b=null
u.gv().h(0,new E.fY(this))
this.db=u
u=new O.c2()
u.saV(H.c([],t))
u.b=null
u.gv().h(0,new E.fZ(this))
this.dx=u
this.seL(H.c([],[O.by]))
u=this.dy;(u&&C.a).h(u,null)
this.seI(new H.aB([P.e,A.c8]))},
ck:function(a){var u,t
u=this.dy
t=a==null?(u&&C.a).gaE(u):a;(u&&C.a).h(u,t)},
ci:function(){var u=this.dy
if(u.length>1)u.pop()},
seL:function(a){this.dy=H.p(a,"$ib",[O.by],"$ab")},
seI:function(a){this.fr=H.p(a,"$iF",[P.e,A.c8],"$aF")}}
E.fX.prototype={
$1:function(a){var u
H.n(a,"$iD")
u=this.a
u.z=null
u.ch=null},
$S:6}
E.fY.prototype={
$1:function(a){var u
H.n(a,"$iD")
u=this.a
u.z=null
u.Q=null
u.ch=null
u.cx=null},
$S:6}
E.fZ.prototype={
$1:function(a){var u
H.n(a,"$iD")
u=this.a
u.ch=null
u.cx=null},
$S:6}
E.dk.prototype={
bo:function(a){H.n(a,"$iD")
this.cl()},
bn:function(){return this.bo(null)},
gfo:function(){var u,t,s
u=Date.now()
t=C.h.ag(P.jT(0,0,0,u-this.cx.a,0,0).a,1000)/1000
if(t<=0)return 0
s=this.cy
this.cy=0
this.cx=new P.b5(u,!1)
return s/t},
bL:function(){var u,t,s,r
u=window.devicePixelRatio
t=this.b.clientWidth
if(typeof t!=="number")return t.K()
if(typeof u!=="number")return H.bj(u)
s=C.c.c5(t*u)
t=this.b.clientHeight
if(typeof t!=="number")return t.K()
r=C.c.c5(t*u)
t=this.b
if(t.width!==s||t.height!==r){t.width=s
t.height=r
P.ke(C.l,this.gfW())}},
cl:function(){var u,t
if(!this.ch){this.ch=!0
u=window
t=H.j(new E.hs(this),{func:1,ret:-1,args:[P.T]})
C.z.dt(u)
C.z.ey(u,W.ky(t,P.T))}},
fV:function(){var u,t,s,r,q
try{++this.cy
this.ch=!1
this.bL()
if(this.d!=null){s=this.e;++s.e
s.r=s.x
r=Date.now()
s.x=new P.b5(r,!1)
s.y=P.jT(0,0,0,r-s.r.a,0,0).a*0.000001
r=s.cy
C.a.sk(r.a,0)
r.ab()
r=s.db
C.a.sk(r.a,0)
r.ab()
r=s.dx
C.a.sk(r.a,0)
r.ab()
r=s.dy;(r&&C.a).sk(r,0)
s=s.dy;(s&&C.a).h(s,null)
this.d.aj(this.e)}s=this.z
if(s!=null)s.T(null)}catch(q){u=H.ad(q)
t=H.bD(q)
P.jD("Error: "+H.i(u))
P.jD("Stack: "+H.i(t))
throw H.f(u)}}}
E.hs.prototype={
$1:function(a){var u
H.mp(a)
u=this.a
if(u.ch){u.ch=!1
u.fV()}},
$S:31}
Z.dt.prototype={$imy:1}
Z.cG.prototype={
b3:function(a){var u,t,s
try{t=a.a
C.b.c4(t,this.e)
C.b.h7(t,this.e,this.b,5126,!1,this.d,this.c)}catch(s){u=H.ad(s)
t=P.a3('Failed to bind buffer attribute "'+this.a.i(0)+'": '+H.i(u))
throw H.f(t)}},
i:function(a){return"["+this.a.i(0)+", Size: "+this.b+", Offset: "+this.c+", Stride: "+this.d+", Attr: "+H.i(this.e)+"]"}}
Z.i7.prototype={$imz:1}
Z.cH.prototype={
fi:function(a){var u,t,s,r
for(u=this.c,t=u.length,s=0;s<t;++s){r=u[s]
if((r.a.a&a.a)!==0)return r}return},
b3:function(a){var u,t
u=this.a
C.b.a1(a.a,u.a,u.b)
for(u=this.c,t=u.length-1;t>=0;--t)u[t].b3(a)},
h5:function(a){var u,t,s
for(u=this.c,t=u.length-1,s=a.a;t>=0;--t)C.b.c1(s,u[t].e)
C.b.a1(s,this.a.a,null)},
aj:function(a){var u,t,s,r,q,p
u=this.b.length
for(t=a.a,s=0;s<u;++s){r=this.b
if(s>=r.length)return H.k(r,s)
q=r[s]
r=q.c
p=r.a
C.b.a1(t,p,r.b)
C.b.fg(t,q.a,q.b,5123,0)
C.b.a1(t,p,null)}},
i:function(a){var u,t,s,r,q,p
u=[P.e]
t=H.c([],u)
for(s=this.b,r=s.length,q=0;q<s.length;s.length===r||(0,H.G)(s),++q)C.a.h(t,s[q].i(0))
p=H.c([],u)
for(u=this.c,s=u.length,q=0;q<s;++q)C.a.h(p,J.as(u[q]))
return"Buffer:  ["+this.a.i(0)+"]\nIndices: "+C.a.l(t,", ")+"\nAttrs:   "+C.a.l(p,", ")},
sdD:function(a){this.b=H.p(a,"$ib",[Z.c0],"$ab")},
$imH:1}
Z.c0.prototype={
i:function(a){return"Type: "+this.a+", Count: "+this.b+", ["+("Instance of '"+H.bt(this.c)+"'")+"]"}}
Z.ds.prototype={
gbj:function(a){var u,t
u=this.a
t=(u&$.aZ().a)!==0?3:0
if((u&$.bJ().a)!==0)t+=3
if((u&$.bI().a)!==0)t+=3
if((u&$.bK().a)!==0)t+=2
if((u&$.bL().a)!==0)t+=3
if((u&$.cy().a)!==0)t+=3
if((u&$.cz().a)!==0)t+=4
if((u&$.bM().a)!==0)++t
return(u&$.bH().a)!==0?t+4:t},
eU:function(a){var u,t,s
u=$.aZ()
t=this.a
if((t&u.a)!==0){if(0===a)return u
s=1}else s=0
u=$.bJ()
if((t&u.a)!==0){if(s===a)return u;++s}u=$.bI()
if((t&u.a)!==0){if(s===a)return u;++s}u=$.bK()
if((t&u.a)!==0){if(s===a)return u;++s}u=$.bL()
if((t&u.a)!==0){if(s===a)return u;++s}u=$.cy()
if((t&u.a)!==0){if(s===a)return u;++s}u=$.cz()
if((t&u.a)!==0){if(s===a)return u;++s}u=$.bM()
if((t&u.a)!==0){if(s===a)return u;++s}u=$.bH()
if((t&u.a)!==0)if(s===a)return u
return $.kZ()},
n:function(a,b){if(b==null)return!1
if(!(b instanceof Z.ds))return!1
return this.a===b.a},
i:function(a){var u,t
u=H.c([],[P.e])
t=this.a
if((t&$.aZ().a)!==0)C.a.h(u,"Pos")
if((t&$.bJ().a)!==0)C.a.h(u,"Norm")
if((t&$.bI().a)!==0)C.a.h(u,"Binm")
if((t&$.bK().a)!==0)C.a.h(u,"Txt2D")
if((t&$.bL().a)!==0)C.a.h(u,"TxtCube")
if((t&$.cy().a)!==0)C.a.h(u,"Clr3")
if((t&$.cz().a)!==0)C.a.h(u,"Clr4")
if((t&$.bM().a)!==0)C.a.h(u,"Weight")
if((t&$.bH().a)!==0)C.a.h(u,"Bending")
if(u.length<=0)return"None"
return C.a.l(u,"|")}}
D.eA.prototype={}
D.bY.prototype={
h:function(a,b){var u={func:1,ret:-1,args:[D.D]}
H.j(b,u)
if(this.a==null)this.sa5(H.c([],[u]))
u=this.a;(u&&C.a).h(u,b)},
I:function(a,b){var u,t
H.j(b,{func:1,ret:-1,args:[D.D]})
u=this.a
u=u==null?null:C.a.M(u,b)
if(u===!0){u=this.a
t=(u&&C.a).I(u,b)||!1}else t=!1
u=this.b
u=u==null?null:C.a.M(u,b)
if(u===!0){u=this.b
t=(u&&C.a).I(u,b)||t}return t},
T:function(a){var u,t,s,r
u={}
u.a=a
t=this.a
s=t==null
r=s?null:t.length===0
if(r!==!1){r=this.b
r=r==null?null:r.length===0
r=r!==!1}else r=!1
if(r)return!1
if(a==null){a=new D.D(null)
a.b=!0
u.a=a
r=a}else r=a
if(this.d>0){if(this.c==null)this.c=r
return!0}if(!s)C.a.F(t,new D.eV(u))
t=this.b
if(t!=null)C.a.F(t,new D.eW(u))
u=this.b
if(u!=null)C.a.sk(u,0)
return!0},
fX:function(a,b,c){var u,t
u=this.d
if(u>0){--u
this.d=u
if(u<=0)u=this.c!=null
else u=!1
if(u){t=this.c
this.c=null
this.T(t)}}},
at:function(a){return this.fX(a,!0,!1)},
sa5:function(a){this.a=H.p(a,"$ib",[{func:1,ret:-1,args:[D.D]}],"$ab")},
say:function(a){this.b=H.p(a,"$ib",[{func:1,ret:-1,args:[D.D]}],"$ab")}}
D.eV.prototype={
$1:function(a){var u
H.j(a,{func:1,ret:-1,args:[D.D]})
u=this.a.a
u.b
a.$1(u)},
$S:18}
D.eW.prototype={
$1:function(a){var u
H.j(a,{func:1,ret:-1,args:[D.D]})
u=this.a.a
u.b
a.$1(u)},
$S:18}
D.D.prototype={}
D.cU.prototype={}
D.cV.prototype={}
D.P.prototype={
i:function(a){return"ValueChanged: "+this.c+", "+H.i(this.d)+" => "+H.i(this.e)}}
X.cI.prototype={
n:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.cI))return!1
if(this.a!=b.a)return!1
if(!this.b.n(0,b.b))return!1
return!0},
i:function(a){return this.b.i(0)+H.i(this.a)}}
X.cY.prototype={
n:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.cY))return!1
if(this.a!=b.a)return!1
if(!this.b.n(0,b.b))return!1
return!0},
i:function(a){return this.b.i(0)+H.i(this.a)}}
X.fj.prototype={
fO:function(a){this.c=a.b
this.d.h(0,a.a)
return!1},
fK:function(a){this.c=a.b
this.d.I(0,a.a)
return!1},
seo:function(a){this.d=H.p(a,"$ika",[P.y],"$aka")}}
X.fp.prototype={
bb:function(a,b){this.r=a.a
return!1},
as:function(a,b){var u,t
u=this.r
t=a.a
if(typeof t!=="number")return t.cP()
if(typeof u!=="number")return u.cB()
this.r=(u&~t)>>>0
return!1},
ar:function(a,b){return!1},
fP:function(a){return!1},
e4:function(a,b,c){return}}
X.aV.prototype={
n:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.aV))return!1
if(this.a!==b.a)return!1
if(this.b!=b.b)return!1
if(this.c!=b.c)return!1
return!0},
i:function(a){var u=this.a?"Ctrl+":""
u+=this.b?"Alt+":""
return u+(this.c?"Shift+":"")}}
X.fC.prototype={
bb:function(a,b){this.f=a.a
return!1},
as:function(a,b){var u,t
u=this.f
t=a.a
if(typeof t!=="number")return t.cP()
if(typeof u!=="number")return u.cB()
this.f=(u&~t)>>>0
return!1},
ar:function(a,b){return!1},
fQ:function(a,b){return!1}}
X.hw.prototype={
fN:function(a){H.p(a,"$ib",[V.a6],"$ab")
return!1},
fL:function(a){H.p(a,"$ib",[V.a6],"$ab")
return!1},
fM:function(a){H.p(a,"$ib",[V.a6],"$ab")
return!1}}
X.dr.prototype={
bC:function(a){var u,t
u=a.keyCode
t=a.ctrlKey||a.metaKey
return new X.cY(u,new X.aV(t,a.altKey,a.shiftKey))},
af:function(a){var u,t
u=this.b
t=a.ctrlKey||a.metaKey
u.c=new X.aV(t,a.altKey,a.shiftKey)},
b2:function(a){var u,t
u=this.b
t=a.ctrlKey||a.metaKey
u.c=new X.aV(t,a.altKey,a.shiftKey)},
a6:function(a){var u,t,s,r,q
u=this.a.getBoundingClientRect()
t=a.pageX
s=a.pageY
r=u.left
if(typeof t!=="number")return t.u()
q=u.top
if(typeof s!=="number")return s.u()
return new V.a6(t-r,s-q)},
an:function(a){return new V.aM(a.movementX,a.movementY)},
b_:function(a){var u,t,s,r,q,p,o,n
u=this.a.getBoundingClientRect()
t=H.c([],[V.a6])
for(s=a.touches,r=s.length,q=0;q<s.length;s.length===r||(0,H.G)(s),++q){p=s[q]
o=C.c.Y(p.pageX)
C.c.Y(p.pageY)
n=u.left
C.c.Y(p.pageX)
C.a.h(t,new V.a6(o-n,C.c.Y(p.pageY)-u.top))}return t},
a4:function(a){var u,t
u=a.buttons
t=a.ctrlKey||a.metaKey
return new X.cI(u,new X.aV(t,a.altKey,a.shiftKey))},
aW:function(a){var u,t,s,r,q,p
u=this.a.getBoundingClientRect()
t=a.pageX
s=a.pageY
r=u.left
if(typeof t!=="number")return t.u()
q=t-r
if(q<0)return!1
t=u.top
if(typeof s!=="number")return s.u()
p=s-t
if(p<0)return!1
return q<u.width&&p<u.height},
e_:function(a){this.f=!0},
dO:function(a){this.f=!1},
dU:function(a){H.n(a,"$iX")
if(this.f&&this.aW(a))a.preventDefault()},
e3:function(a){var u
H.n(a,"$iaC")
if(!this.f)return
u=this.bC(a)
this.b.fO(u)},
e1:function(a){var u
H.n(a,"$iaC")
if(!this.f)return
u=this.bC(a)
this.b.fK(u)},
e6:function(a){var u,t,s,r
H.n(a,"$iX")
u=this.a
u.focus()
this.f=!0
this.af(a)
if(this.x){t=this.a4(a)
s=this.an(a)
if(this.d.bb(t,s))a.preventDefault()
return}if(this.r){this.y=a
u.requestPointerLock()
return}t=this.a4(a)
r=this.a6(a)
if(this.c.bb(t,r))a.preventDefault()},
ea:function(a){var u,t,s
H.n(a,"$iX")
this.af(a)
u=this.a4(a)
if(this.x){t=this.an(a)
if(this.d.as(u,t))a.preventDefault()
return}if(this.r)return
s=this.a6(a)
if(this.c.as(u,s))a.preventDefault()},
dY:function(a){var u,t,s
H.n(a,"$iX")
if(!this.aW(a)){this.af(a)
u=this.a4(a)
if(this.x){t=this.an(a)
if(this.d.as(u,t))a.preventDefault()
return}if(this.r)return
s=this.a6(a)
if(this.c.as(u,s))a.preventDefault()}},
e8:function(a){var u,t,s
H.n(a,"$iX")
this.af(a)
u=this.a4(a)
if(this.x){t=this.an(a)
if(this.d.ar(u,t))a.preventDefault()
return}if(this.r)return
s=this.a6(a)
if(this.c.ar(u,s))a.preventDefault()},
dW:function(a){var u,t,s
H.n(a,"$iX")
if(!this.aW(a)){this.af(a)
u=this.a4(a)
if(this.x){t=this.an(a)
if(this.d.ar(u,t))a.preventDefault()
return}if(this.r)return
s=this.a6(a)
if(this.c.ar(u,s))a.preventDefault()}},
ec:function(a){var u,t
H.n(a,"$iaN")
this.af(a)
u=new V.aM((a&&C.y).gfc(a),C.y.gfd(a)).L(0,180)
if(this.x){if(this.d.fP(u))a.preventDefault()
return}if(this.r)return
t=this.a6(a)
if(this.c.fQ(u,t))a.preventDefault()},
ee:function(a){var u,t,s
u=document.pointerLockElement===this.a
if(u!==this.x){this.x=u
t=this.a4(this.y)
s=this.a6(this.y)
this.d.e4(t,s,u)}},
en:function(a){var u
H.n(a,"$iaq")
this.a.focus()
this.f=!0
this.b2(a)
u=this.b_(a)
if(this.e.fN(u))a.preventDefault()},
ej:function(a){var u
H.n(a,"$iaq")
this.b2(a)
u=this.b_(a)
if(this.e.fL(u))a.preventDefault()},
el:function(a){var u
H.n(a,"$iaq")
this.b2(a)
u=this.b_(a)
if(this.e.fM(u))a.preventDefault()},
sdu:function(a){this.z=H.p(a,"$ib",[[P.cb,P.E]],"$ab")}}
V.b2.prototype={
u:function(a,b){var u,t,s
u=C.c.u(this.a,b.gfR())
t=C.c.u(this.b,b.gcM())
s=C.c.u(this.c,b.geY())
if(u<0)u=0
else if(u>1)u=1
if(t<0)t=0
else if(t>1)t=1
if(s<0)s=0
else if(s>1)s=1
return new V.b2(u,t,s)},
n:function(a,b){var u,t
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.b2))return!1
u=b.a
t=$.O().a
if(!(Math.abs(u-this.a)<t))return!1
if(!(Math.abs(b.b-this.b)<t))return!1
if(!(Math.abs(b.c-this.c)<t))return!1
return!0},
i:function(a){return"["+V.H(this.a,3,0)+", "+V.H(this.b,3,0)+", "+V.H(this.c,3,0)+"]"}}
V.b3.prototype={
u:function(a,b){var u,t,s,r
u=C.c.u(this.a,b.gfR())
t=C.c.u(this.b,b.gcM())
s=C.c.u(this.c,b.geY())
r=C.c.u(this.d,b.ghc(b))
if(u<0)u=0
else if(u>1)u=1
if(t<0)t=0
else if(t>1)t=1
if(s<0)s=0
else if(s>1)s=1
if(r<0)r=0
else if(r>1)r=1
return new V.b3(u,t,s,r)},
n:function(a,b){var u,t
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.b3))return!1
u=b.a
t=$.O().a
if(!(Math.abs(u-this.a)<t))return!1
if(!(Math.abs(b.b-this.b)<t))return!1
if(!(Math.abs(b.c-this.c)<t))return!1
if(!(Math.abs(b.d-this.d)<t))return!1
return!0},
i:function(a){return"["+V.H(this.a,3,0)+", "+V.H(this.b,3,0)+", "+V.H(this.c,3,0)+", "+V.H(this.d,3,0)+"]"}}
V.eT.prototype={}
V.bb.prototype={
cq:function(a,b){var u=H.c([this.a,this.e,this.y,this.cx,this.b,this.f,this.z,this.cy,this.c,this.r,this.Q,this.db,this.d,this.x,this.ch,this.dx],[P.w])
return u},
K:function(b1,b2){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0
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
n:function(a,b){var u,t
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.bb))return!1
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
i:function(a){return this.G()},
c6:function(a,b,c){var u,t,s,r,q,p,o,n,m,l
u=[P.w]
t=V.iX(H.c([this.a,this.e,this.y,this.cx],u),b,c)
s=V.iX(H.c([this.b,this.f,this.z,this.cy],u),b,c)
r=V.iX(H.c([this.c,this.r,this.Q,this.db],u),b,c)
q=V.iX(H.c([this.d,this.x,this.ch,this.dx],u),b,c)
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
G:function(){return this.c6("",3,0)},
t:function(a){return this.c6(a,3,0)}}
V.a6.prototype={
u:function(a,b){return new V.a6(C.c.u(this.a,b.ghh(b)),C.c.u(this.b,b.ghi(b)))},
n:function(a,b){var u,t
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.a6))return!1
u=b.a
t=$.O().a
if(!(Math.abs(u-this.a)<t))return!1
if(!(Math.abs(b.b-this.b)<t))return!1
return!0},
i:function(a){return"["+V.H(this.a,3,0)+", "+V.H(this.b,3,0)+"]"}}
V.ag.prototype={
u:function(a,b){return new V.ag(this.a-b.a,this.b-b.b,this.c-b.c)},
K:function(a,b){return new V.ag(this.a*b,this.b*b,this.c*b)},
n:function(a,b){var u,t
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.ag))return!1
u=b.a
t=$.O().a
if(!(Math.abs(u-this.a)<t))return!1
if(!(Math.abs(b.b-this.b)<t))return!1
if(!(Math.abs(b.c-this.c)<t))return!1
return!0},
i:function(a){return"["+V.H(this.a,3,0)+", "+V.H(this.b,3,0)+", "+V.H(this.c,3,0)+"]"}}
V.dc.prototype={
n:function(a,b){var u,t
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.dc))return!1
u=b.a
t=$.O().a
if(!(Math.abs(u-this.a)<t))return!1
if(!(Math.abs(b.b-this.b)<t))return!1
if(!(Math.abs(b.c-this.c)<t))return!1
if(!(Math.abs(b.d-this.d)<t))return!1
return!0},
i:function(a){return"["+V.H(this.a,3,0)+", "+V.H(this.b,3,0)+", "+V.H(this.c,3,0)+", "+V.H(this.d,3,0)+"]"}}
V.aM.prototype={
b9:function(a){var u,t
u=this.a
if(typeof u!=="number")return u.K()
t=this.b
if(typeof t!=="number")return t.K()
return Math.sqrt(u*u+t*t)},
u:function(a,b){var u,t,s
u=this.a
t=b.ghd(b)
if(typeof u!=="number")return u.u()
t=C.c.u(u,t)
u=this.b
s=b.ghe(b)
if(typeof u!=="number")return u.u()
return new V.aM(t,C.c.u(u,s))},
L:function(a,b){var u,t
if(Math.abs(b-0)<$.O().a){u=$.ki
if(u==null){u=new V.aM(0,0)
$.ki=u}return u}u=this.a
if(typeof u!=="number")return u.L()
t=this.b
if(typeof t!=="number")return t.L()
return new V.aM(u/b,t/b)},
n:function(a,b){var u,t,s
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.aM))return!1
u=b.a
t=this.a
s=$.O()
s.toString
if(typeof u!=="number")return u.u()
if(typeof t!=="number")return H.bj(t)
s=s.a
if(!(Math.abs(u-t)<s))return!1
u=b.b
t=this.b
if(typeof u!=="number")return u.u()
if(typeof t!=="number")return H.bj(t)
if(!(Math.abs(u-t)<s))return!1
return!0},
i:function(a){return"["+V.H(this.a,3,0)+", "+V.H(this.b,3,0)+"]"}}
V.R.prototype={
b9:function(a){return Math.sqrt(this.N(this))},
N:function(a){return this.a*a.a+this.b*a.b+this.c*a.c},
ap:function(a){var u,t,s,r,q,p
u=this.b
t=a.c
s=this.c
r=a.b
q=a.a
p=this.a
return new V.R(u*t-s*r,s*q-p*t,p*r-u*q)},
R:function(a,b){return new V.R(this.a+b.a,this.b+b.b,this.c+b.c)},
u:function(a,b){return new V.R(this.a-b.a,this.b-b.b,this.c-b.c)},
aJ:function(a){return new V.R(-this.a,-this.b,-this.c)},
K:function(a,b){return new V.R(this.a*b,this.b*b,this.c*b)},
L:function(a,b){if(Math.abs(b-0)<$.O().a)return V.hW()
return new V.R(this.a/b,this.b/b,this.c/b)},
ft:function(){var u=$.O().a
if(!(Math.abs(0-this.a)<u))return!1
if(!(Math.abs(0-this.b)<u))return!1
if(!(Math.abs(0-this.c)<u))return!1
return!0},
n:function(a,b){var u,t
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.R))return!1
u=b.a
t=$.O().a
if(!(Math.abs(u-this.a)<t))return!1
if(!(Math.abs(b.b-this.b)<t))return!1
if(!(Math.abs(b.c-this.c)<t))return!1
return!0},
i:function(a){return"["+V.H(this.a,3,0)+", "+V.H(this.b,3,0)+", "+V.H(this.c,3,0)+"]"}}
U.cK.prototype={
gv:function(){var u=this.b
if(u==null){u=D.an()
this.b=u}return u},
aG:function(a,b,c){return this.a},
n:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.cK))return!1
return J.S(this.a,b.a)},
i:function(a){return"Constant: "+this.a.t("          ")}}
U.c_.prototype={
gv:function(){var u=this.e
if(u==null){u=D.an()
this.e=u}return u},
S:function(a){var u
H.n(a,"$iD")
u=this.e
if(u!=null)u.T(a)},
da:function(){return this.S(null)},
dM:function(a,b){var u,t,s,r,q,p,o,n
u=U.a4
H.p(b,"$ih",[u],"$ah")
for(t=b.length,s=this.gbp(),r={func:1,ret:-1,args:[D.D]},q=[r],p=0;p<b.length;b.length===t||(0,H.G)(b),++p){o=b[p]
if(o!=null){n=o.gv()
n.toString
H.j(s,r)
if(n.a==null)n.sa5(H.c([],q))
n=n.a;(n&&C.a).h(n,s)}}u=new D.cU(a,b,this,[u])
u.b=!0
this.S(u)},
eh:function(a,b){var u,t,s
u=U.a4
H.p(b,"$ih",[u],"$ah")
for(t=b.gH(b),s=this.gbp();t.q();)t.gB(t).gv().I(0,s)
u=new D.cV(a,b,this,[u])
u.b=!0
this.S(u)},
aG:function(a,b,c){var u,t,s,r
u=this.r
t=b.e
if(typeof u!=="number")return u.cN()
if(u<t){this.r=t
u=this.e
if(u!=null)++u.d
for(u=this.a,u=new J.ae(u,u.length,0,[H.u(u,0)]),s=null;u.q();){t=u.d
if(t!=null){r=t.aG(0,b,c)
if(r!=null)s=s==null?r:r.K(0,s)}}this.f=s==null?V.fv():s
u=this.e
if(u!=null)u.at(0)}return this.f},
n:function(a,b){var u,t,s,r
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.c_))return!1
u=this.a.length
for(t=0;t<u;++t){s=this.a
if(t>=s.length)return H.k(s,t)
s=s[t]
r=b.a
if(t>=r.length)return H.k(r,t)
if(!J.S(s,r[t]))return!1}return!0},
i:function(a){return"Group"},
$ah:function(){return[U.a4]},
$aU:function(){return[U.a4]},
$ia4:1}
U.a4.prototype={}
U.dd.prototype={
gv:function(){var u=this.y
if(u==null){u=D.an()
this.y=u}return u},
S:function(a){var u=this.y
if(u!=null)u.T(a)},
scA:function(a){var u
a=V.jF(a,0,6.283185307179586)
u=this.a
if(!(Math.abs(u-a)<$.O().a)){this.a=a
u=new D.P("yaw",u,a,this,[P.w])
u.b=!0
this.S(u)}},
scg:function(a,b){var u
b=V.jF(b,0,6.283185307179586)
u=this.b
if(!(Math.abs(u-b)<$.O().a)){this.b=b
u=new D.P("pitch",u,b,this,[P.w])
u.b=!0
this.S(u)}},
scm:function(a){var u
a=V.jF(a,0,6.283185307179586)
u=this.c
if(!(Math.abs(u-a)<$.O().a)){this.c=a
u=new D.P("roll",u,a,this,[P.w])
u.b=!0
this.S(u)}},
sc0:function(a){var u=this.d
if(!(Math.abs(u-a)<$.O().a)){this.d=a
u=new D.P("deltaYaw",u,a,this,[P.w])
u.b=!0
this.S(u)}},
sbZ:function(a){var u=this.e
if(!(Math.abs(u-a)<$.O().a)){this.e=a
u=new D.P("deltaPitch",u,a,this,[P.w])
u.b=!0
this.S(u)}},
sc_:function(a){var u=this.f
if(!(Math.abs(u-a)<$.O().a)){this.f=a
u=new D.P("deltaRoll",u,a,this,[P.w])
u.b=!0
this.S(u)}},
aG:function(a,b,c){var u,t,s,r
u=this.r
t=b.e
if(u<t){this.r=t
u=this.y
if(u!=null)++u.d
this.scA(this.a+this.d*b.y)
this.scg(0,this.b+this.e*b.y)
this.scm(this.c+this.f*b.y)
u=this.c
s=Math.cos(u)
r=Math.sin(u)
u=V.aU(s,-r,0,0,r,s,0,0,0,0,1,0,0,0,0,1)
t=this.b
s=Math.cos(t)
r=Math.sin(t)
u=u.K(0,V.aU(s,0,-r,0,0,1,0,0,r,0,s,0,0,0,0,1))
t=this.a
s=Math.cos(t)
r=Math.sin(t)
this.x=u.K(0,V.aU(1,0,0,0,0,s,-r,0,0,r,s,0,0,0,0,1))
u=this.y
if(u!=null)u.at(0)}return this.x},
n:function(a,b){var u,t,s
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.dd))return!1
u=this.a
t=b.a
s=$.O().a
if(!(Math.abs(u-t)<s))return!1
if(!(Math.abs(this.b-b.b)<s))return!1
if(!(Math.abs(this.c-b.c)<s))return!1
if(!(Math.abs(this.d-b.d)<s))return!1
if(!(Math.abs(this.e-b.e)<s))return!1
if(!(Math.abs(this.f-b.f)<s))return!1
return!0},
i:function(a){return"Rotater: ["+V.H(this.a,3,0)+", "+V.H(this.b,3,0)+", "+V.H(this.c,3,0)+"], ["+V.H(this.d,3,0)+", "+V.H(this.e,3,0)+", "+V.H(this.f,3,0)+"]"}}
M.cP.prototype={
a3:function(a){var u
H.n(a,"$iD")
u=this.x
if(u!=null)u.T(a)},
dc:function(){return this.a3(null)},
dQ:function(a,b){var u,t,s,r,q,p,o,n
u=E.a0
H.p(b,"$ih",[u],"$ah")
for(t=b.length,s=this.gZ(),r={func:1,ret:-1,args:[D.D]},q=[r],p=0;p<b.length;b.length===t||(0,H.G)(b),++p){o=b[p]
if(o!=null){n=o.z
if(n==null){n=new D.bY()
n.sa5(null)
n.say(null)
n.c=null
n.d=0
o.z=n}H.j(s,r)
if(n.a==null)n.sa5(H.c([],q))
n=n.a;(n&&C.a).h(n,s)}}u=new D.cU(a,b,this,[u])
u.b=!0
this.a3(u)},
dS:function(a,b){var u,t,s
u=E.a0
H.p(b,"$ih",[u],"$ah")
for(t=b.gH(b),s=this.gZ();t.q();)t.gB(t).gv().I(0,s)
u=new D.cV(a,b,this,[u])
u.b=!0
this.a3(u)},
sco:function(a){var u,t
u=this.c
if(u!=a){if(u!=null)u.gv().I(0,this.gZ())
t=this.c
this.c=a
if(a!=null)a.gv().h(0,this.gZ())
u=new D.P("technique",t,this.c,this,[O.by])
u.b=!0
this.a3(u)}},
gv:function(){var u=this.x
if(u==null){u=D.an()
this.x=u}return u},
aj:function(a1){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0
a1.ck(this.c)
u=this.b
u.toString
t=a1.a
C.b.eX(t,36160,null)
C.b.c3(t,2884)
C.b.c3(t,2929)
C.b.fe(t,513)
s=t.drawingBufferWidth
r=t.drawingBufferHeight
q=u.r
p=q.a
if(typeof s!=="number")return H.bj(s)
o=C.c.Y(p*s)
p=q.b
if(typeof r!=="number")return H.bj(r)
n=C.c.Y(p*r)
p=C.c.Y(q.c*s)
a1.c=p
q=C.c.Y(q.d*r)
a1.d=q
C.b.h8(t,o,n,p,q)
C.b.f1(t,u.c)
u=u.a
C.b.f0(t,u.a,u.b,u.c,u.d)
C.b.f_(t,16640)
u=this.a
t=a1.c
q=a1.d
p=u.c
m=u.d
l=u.e
k=l-m
j=1/Math.tan(p*0.5)
i=V.aU(-j/(t/q),0,0,0,0,j,0,0,0,0,l/k,-l*m/k,0,0,1,0)
u.a
a1.cy.cj(i)
t=$.k3
if(t==null){t=$.k5
if(t==null){t=new V.ag(0,0,0)
$.k5=t}q=$.kl
if(q==null){q=new V.R(0,1,0)
$.kl=q}p=$.kj
if(p==null){p=new V.R(0,0,-1)
$.kj=p}h=p.L(0,Math.sqrt(p.N(p)))
q=q.ap(h)
g=q.L(0,Math.sqrt(q.N(q)))
f=h.ap(g)
e=new V.R(t.a,t.b,t.c)
d=g.aJ(0).N(e)
c=f.aJ(0).N(e)
b=h.aJ(0).N(e)
t=V.aU(g.a,f.a,h.a,d,g.b,f.b,h.b,c,g.c,f.c,h.c,b,0,0,0,1)
$.k3=t
a=t}else a=t
u=u.b
if(u!=null){a0=u.a
if(a0!=null)a=a0.K(0,a)}a1.db.cj(a)
for(u=this.d.a,u=new J.ae(u,u.length,0,[H.u(u,0)]);u.q();)u.d.cw(0,a1)
for(u=this.d.a,u=new J.ae(u,u.length,0,[H.u(u,0)]);u.q();)u.d.aj(a1)
this.a.toString
a1.cy.bc()
a1.db.bc()
this.b.toString
a1.ci()},
sdl:function(a,b){this.d=H.p(b,"$iU",[E.a0],"$aU")},
$imF:1}
A.cD.prototype={}
A.es.prototype={
m:function(a,b){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<t;++s){r=u[s]
if(r.b===b)return r}return},
fh:function(){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<u.length;u.length===t||(0,H.G)(u),++s){r=u[s]
C.b.c4(r.a,r.c)}},
ff:function(){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<u.length;u.length===t||(0,H.G)(u),++s){r=u[s]
C.b.c1(r.a,r.c)}}}
A.eK.prototype={}
A.c8.prototype={
d4:function(a,b){this.c=null
this.d=null
this.e=null
this.f=null
this.r=null
this.x=null
this.y=null},
bD:function(a,b){var u,t,s
u=this.a
t=C.b.f8(u,b)
C.b.cU(u,t,a)
C.b.f2(u,t)
if(!H.ju(C.b.cK(u,t,35713))){s=C.b.cJ(u,t)
C.b.fb(u,t)
throw H.f(P.a3("Error compiling shader '"+H.i(t)+"': "+H.i(s)))}return t},
eF:function(){var u,t,s,r,q,p
u=H.c([],[A.cD])
t=this.a
s=H.Z(C.b.aI(t,this.r,35721))
if(typeof s!=="number")return H.bj(s)
r=0
for(;r<s;++r){q=C.b.cC(t,this.r,r)
p=C.b.cE(t,this.r,q.name)
C.a.h(u,new A.cD(t,q.name,p))}this.x=new A.es(u)},
eH:function(){var u,t,s,r,q,p
u=H.c([],[A.dm])
t=this.a
s=H.Z(C.b.aI(t,this.r,35718))
if(typeof s!=="number")return H.bj(s)
r=0
for(;r<s;++r){q=C.b.cD(t,this.r,r)
p=C.b.cL(t,this.r,q.name)
C.a.h(u,this.f9(q.type,q.size,q.name,p))}this.y=new A.hL(u)},
ae:function(a,b,c){var u,t
u=this.a
t=this.r
if(a===1)return new A.hE(u,t,b,c)
else return A.jl(u,t,b,a,c)},
dq:function(a,b,c){var u,t
u=this.a
t=this.r
if(a===1)return new A.hO(u,t,b,c)
else return A.jl(u,t,b,a,c)},
dr:function(a,b,c){var u,t
u=this.a
t=this.r
if(a===1)return new A.hP(u,t,b,c)
else return A.jl(u,t,b,a,c)},
aB:function(a,b){return new P.dC(a+" uniform variables are unsupported by all browsers.\n"+("Please change the type of "+H.i(b)+"."))},
f9:function(a,b,c,d){switch(a){case 5120:return this.ae(b,c,d)
case 5121:return this.ae(b,c,d)
case 5122:return this.ae(b,c,d)
case 5123:return this.ae(b,c,d)
case 5124:return this.ae(b,c,d)
case 5125:return this.ae(b,c,d)
case 5126:return new A.cf(this.a,this.r,c,d)
case 35664:return new A.hG(this.a,this.r,c,d)
case 35665:return new A.cg(this.a,this.r,c,d)
case 35666:return new A.hJ(this.a,this.r,c,d)
case 35667:return new A.hH(this.a,this.r,c,d)
case 35668:return new A.hI(this.a,this.r,c,d)
case 35669:return new A.hK(this.a,this.r,c,d)
case 35674:return new A.hM(this.a,this.r,c,d)
case 35675:return new A.hN(this.a,this.r,c,d)
case 35676:return new A.ch(this.a,this.r,c,d)
case 35678:return this.dq(b,c,d)
case 35680:return this.dr(b,c,d)
case 35670:throw H.f(this.aB("BOOL",c))
case 35671:throw H.f(this.aB("BOOL_VEC2",c))
case 35672:throw H.f(this.aB("BOOL_VEC3",c))
case 35673:throw H.f(this.aB("BOOL_VEC4",c))
default:throw H.f(P.a3("Unknown uniform variable type "+H.i(a)+" for "+H.i(c)+"."))}}}
A.dm.prototype={}
A.hL.prototype={
m:function(a,b){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<t;++s){r=u[s]
if(r.c===b)return r}return},
i:function(a){return this.G()},
fn:function(a){var u,t,s,r
for(u=this.a,t=u.length,s="",r=0;r<u.length;u.length===t||(0,H.G)(u),++r)s+=u[r].i(0)+a
return s},
G:function(){return this.fn("\n")}}
A.hE.prototype={
i:function(a){return"Uniform1i: "+H.i(this.c)}}
A.hH.prototype={
i:function(a){return"Uniform2i: "+H.i(this.c)}}
A.hI.prototype={
i:function(a){return"Uniform3i: "+H.i(this.c)}}
A.hK.prototype={
i:function(a){return"Uniform4i: "+H.i(this.c)}}
A.hF.prototype={
i:function(a){return"Uniform1iv: "+H.i(this.c)},
seO:function(a){this.e=H.p(a,"$ib",[P.y],"$ab")}}
A.cf.prototype={
i:function(a){return"Uniform1f: "+H.i(this.c)}}
A.hG.prototype={
i:function(a){return"Uniform2f: "+H.i(this.c)}}
A.cg.prototype={
i:function(a){return"Uniform3f: "+H.i(this.c)}}
A.hJ.prototype={
i:function(a){return"Uniform4f: "+H.i(this.c)}}
A.hM.prototype={
i:function(a){return"Uniform1Mat2 "+H.i(this.c)}}
A.hN.prototype={
i:function(a){return"UniformMat3: "+H.i(this.c)}}
A.ch.prototype={
bi:function(a){var u=new Float32Array(H.jp(H.p(a,"$ib",[P.w],"$ab")))
C.b.h6(this.a,this.d,!1,u)},
i:function(a){return"UniformMat4: "+H.i(this.c)}}
A.hO.prototype={
i:function(a){return"UniformSampler2D: "+H.i(this.c)}}
A.hP.prototype={
i:function(a){return"UniformSamplerCube: "+H.i(this.c)}}
F.j7.prototype={
$1:function(a){return new V.ag(Math.cos(a),Math.sin(a),0)},
$S:34}
F.iV.prototype={
$3:function(a,b,c){var u,t,s,r,q,p,o,n,m
u=b*6.283185307179586
t=this.a
s=this.b
r=J.jJ(t.$1(u),s)
s=J.l1(J.jJ(t.$1(u+3.141592653589793/this.c),s),r)
s=new V.R(s.a,s.b,s.c)
q=s.L(0,Math.sqrt(s.N(s)))
t=$.kk
if(t==null){t=new V.R(1,0,0)
$.kk=t
p=t}else p=t
if(!J.S(q,p)){t=$.km
if(t==null){t=new V.R(0,0,1)
$.km=t
p=t}else p=t}t=q.ap(p)
o=t.L(0,Math.sqrt(t.N(t)))
t=o.ap(q)
p=t.L(0,Math.sqrt(t.N(t)))
n=c*6.283185307179586
t=Math.cos(n)
s=this.d
m=Math.sin(n)
t=p.K(0,t*s)
s=o.K(0,m*s)
s=new V.ag(r.a+(t.a-s.a),r.b+(t.b-s.b),r.c+(t.c-s.c))
if(!J.S(a.f,s)){a.f=s
t=a.a
if(t!=null)t.W()}},
$S:35}
F.V.prototype={
aD:function(){if(!this.gc2()){C.a.I(this.a.a.d.b,this)
this.a.a.W()}this.eu()
this.ev()
this.ew()},
eC:function(a){this.a=a
C.a.h(a.d.b,this)},
eD:function(a){this.b=a
C.a.h(a.d.c,this)},
eE:function(a){this.c=a
C.a.h(a.d.d,this)},
eu:function(){var u=this.a
if(u!=null){C.a.I(u.d.b,this)
this.a=null}},
ev:function(){var u=this.b
if(u!=null){C.a.I(u.d.c,this)
this.b=null}},
ew:function(){var u=this.c
if(u!=null){C.a.I(u.d.d,this)
this.c=null}},
gc2:function(){return this.a==null||this.b==null||this.c==null},
dj:function(){var u,t,s,r,q
u=this.a
t=u==null?null:u.r
u=this.b
s=u==null?null:u.r
u=this.c
r=u==null?null:u.r
q=V.hW()
if(t!=null)q=q.R(0,t)
if(s!=null)q=q.R(0,s)
if(r!=null)q=q.R(0,r)
if(q.ft())return
return q.L(0,Math.sqrt(q.N(q)))},
dk:function(){var u,t,s,r,q
u=this.a
t=u==null?null:u.f
u=this.b
s=u==null?null:u.f
u=this.c
r=u==null?null:u.f
if(t==null||s==null||r==null)return
u=s.u(0,t)
u=new V.R(u.a,u.b,u.c)
q=u.L(0,Math.sqrt(u.N(u)))
u=r.u(0,t)
u=new V.R(u.a,u.b,u.c)
u=q.ap(u.L(0,Math.sqrt(u.N(u))))
return u.L(0,Math.sqrt(u.N(u)))},
b5:function(){if(this.d!=null)return!0
var u=this.dj()
if(u==null){u=this.dk()
if(u==null)return!1}this.d=u
this.a.a.W()
return!0},
gbW:function(a){if(J.S(this.a,this.b))return!0
if(J.S(this.b,this.c))return!0
if(J.S(this.c,this.a))return!0
return!1},
n:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.G()},
t:function(a){var u,t
if(this.gc2())return a+"disposed"
u=a+C.d.a8(J.as(this.a.e),0)+", "+C.d.a8(J.as(this.b.e),0)+", "+C.d.a8(J.as(this.c.e),0)+" {"
t=this.d
u=(t!=null?u+(t.i(0)+", "):u+"-, ")+"-}"
return u},
G:function(){return this.t("")}}
F.eY.prototype={}
F.hb.prototype={
ba:function(a,b,c){var u,t
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
F.ba.prototype={}
F.fl.prototype={}
F.hD.prototype={}
F.br.prototype={}
F.df.prototype={
gv:function(){var u=this.e
if(u==null){u=D.an()
this.e=u}return u},
fB:function(a,b){var u,t,s,r,q,p,o
u=this.e
if(u!=null)++u.d
u=this.a.c
t=H.c(u.slice(0),[H.u(u,0)])
for(u=[F.aj];t.length!==0;){s=C.a.gfk(t)
C.a.fT(t,0)
if(s!=null){r=H.c([],u)
C.a.h(r,s)
for(q=t.length,p=0;p<t.length;t.length===q||(0,H.G)(t),++p){o=t[p]
if(o!=null&&a.ba(0,s,o)){C.a.h(r,o)
C.a.I(t,o)}}if(r.length>1)b.fA(r)}}this.a.E()
this.c.bd()
this.d.bd()
this.b.fU()
this.c.be(new F.hD())
this.d.be(new F.hb())
u=this.e
if(u!=null)u.at(0)},
eZ:function(a0,a1){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a
u=this.a.c.length
a1.toString
t=$.aZ()
s=a1.a
r=(s&t.a)!==0?1:0
if((s&$.bJ().a)!==0)++r
if((s&$.bI().a)!==0)++r
if((s&$.bK().a)!==0)++r
if((s&$.bL().a)!==0)++r
if((s&$.cy().a)!==0)++r
if((s&$.cz().a)!==0)++r
if((s&$.bM().a)!==0)++r
if((s&$.bH().a)!==0)++r
q=a1.gbj(a1)
p=q*4
t=new Array(u*q)
t.fixed$length=Array
s=P.w
o=H.c(t,[s])
t=new Array(r)
t.fixed$length=Array
n=H.c(t,[Z.cG])
for(m=0,l=0;l<r;++l){k=a1.eU(l)
j=k.gbj(k)
C.a.J(n,l,new Z.cG(k,j,m*4,p,0))
for(i=0;i<u;++i){t=this.a.c
if(i>=t.length)return H.k(t,i)
h=t[i].fw(k)
g=m+i*q
for(f=0;f<h.length;++f){C.a.J(o,g,h[f]);++g}}m+=j}H.p(o,"$ib",[s],"$ab")
t=a0.a
e=t.createBuffer()
C.b.a1(t,34962,e)
C.b.bU(t,34962,new Float32Array(H.jp(o)),35044)
C.b.a1(t,34962,null)
d=new Z.cH(new Z.dt(34962,e),n,a1)
d.sdD(H.c([],[Z.c0]))
this.b.b
this.c.b
if(this.d.b.length!==0){s=P.y
c=H.c([],[s])
for(l=0;b=this.d.b,l<b.length;++l){b=b[l].a
b.a.a.E()
C.a.h(c,b.e)
b=this.d.b
if(l>=b.length)return H.k(b,l)
b=b[l].b
b.a.a.E()
C.a.h(c,b.e)
b=this.d.b
if(l>=b.length)return H.k(b,l)
b=b[l].c
b.a.a.E()
C.a.h(c,b.e)}a=Z.lL(t,34963,H.p(c,"$ib",[s],"$ab"))
C.a.h(d.b,new Z.c0(4,c.length,a))}return d},
i:function(a){var u=H.c([],[P.e])
if(this.a.c.length!==0){C.a.h(u,"Vertices:")
C.a.h(u,this.a.t("   "))}this.b.b
this.c.b
if(this.d.b.length!==0){C.a.h(u,"Faces:")
C.a.h(u,this.d.t("   "))}return C.a.l(u,"\n")},
X:function(a){var u=this.e
if(u!=null)u.T(a)},
W:function(){return this.X(null)},
$imG:1}
F.h4.prototype={
eR:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k,j,i,h
H.p(c,"$ib",[F.aj],"$ab")
u=H.c([],[F.V])
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
C.a.h(u,F.eX(l,k,i))
t.a.h(0,l)
t.a.h(0,i)
t.a.h(0,h)
C.a.h(u,F.eX(l,i,h))}else{m.h(0,k)
t.a.h(0,i)
t.a.h(0,h)
C.a.h(u,F.eX(k,i,h))
t.a.h(0,k)
t.a.h(0,h)
t.a.h(0,l)
C.a.h(u,F.eX(k,h,l))}o=!o}q=!q}return u},
gk:function(a){return this.b.length},
be:function(a){var u,t,s,r,q,p,o,n
for(u=this.a,t=u.a.c.length-1;t>=0;--t){s=u.a.c
if(t>=s.length)return H.k(s,t)
r=s[t]
for(s=r.d,q=s.b.length+s.c.length+s.d.length-1;q>=0;--q){p=r.d.m(0,q)
for(o=q-1;o>=0;--o){n=r.d.m(0,o)
if(a.ba(0,p,n)){p.aD()
break}}}}},
bd:function(){var u,t,s
for(u=this.b.length-1;u>=0;--u){t=this.b
if(u>=t.length)return H.k(t,u)
s=t[u]
t=s.gbW(s)
if(t)s.aD()}},
b6:function(){var u,t,s,r
for(u=this.b,t=u.length,s=!0,r=0;r<u.length;u.length===t||(0,H.G)(u),++r)if(!u[r].b5())s=!1
return s},
i:function(a){return this.G()},
t:function(a){var u,t,s,r
u=H.c([],[P.e])
for(t=this.b,s=t.length,r=0;r<t.length;t.length===s||(0,H.G)(t),++r)C.a.h(u,t[r].t(a))
return C.a.l(u,"\n")},
G:function(){return this.t("")},
sdv:function(a){this.b=H.p(a,"$ib",[F.V],"$ab")}}
F.h5.prototype={
gk:function(a){return 0},
be:function(a){var u,t,s,r,q
for(u=this.a,t=u.a.c.length-1;t>=0;--t){s=u.a.c
if(t>=s.length)return H.k(s,t)
r=s[t]
for(r.c.c,q=-1;!1;--q)r.c.m(0,q)}},
bd:function(){var u,t,s
for(u=-1;!1;--u){t=this.b
return H.k(t,u)
s=t[u]
t=s.gbW(s)
if(t)s.aD()}},
i:function(a){return this.G()},
t:function(a){var u,t,s
u=H.c([],[P.e])
for(t=0;!1;++t){s=this.b
if(t>=0)return H.k(s,t)
C.a.h(u,s[t].t(a+(""+t+". ")))}return C.a.l(u,"\n")},
G:function(){return this.t("")},
sdG:function(a){this.b=H.p(a,"$ib",[F.ba],"$ab")}}
F.h6.prototype={
gk:function(a){return 0},
fU:function(){var u,t
for(u=-1;!1;--u){t=this.b
return H.k(t,u)
t=t[u].ghg()
t=t.ghf(t)
if(t.gk(t).ha(0,1)){t=this.b
return H.k(t,u)
t[u].aD()}}},
i:function(a){return this.G()},
t:function(a){var u,t,s
u=H.c([],[P.e])
for(t=this.b,s=0;!1;++s){if(s>=0)return H.k(t,s)
C.a.h(u,t[s].t(a))}return C.a.l(u,"\n")},
G:function(){return this.t("")},
saZ:function(a){this.b=H.p(a,"$ib",[F.br],"$ab")}}
F.aj.prototype={
bY:function(a){var u,t,s,r,q,p,o
u=this.f
t=this.r
s=this.x
r=this.y
q=this.z
p=this.Q
o=this.ch
return F.jm(this.cx,s,p,u,t,r,q,a,o)},
fw:function(a){var u,t
if(a.n(0,$.aZ())){u=this.f
t=[P.w]
if(u==null)return H.c([0,0,0],t)
else return H.c([u.a,u.b,u.c],t)}else if(a.n(0,$.bJ())){u=this.r
t=[P.w]
if(u==null)return H.c([0,1,0],t)
else return H.c([u.a,u.b,u.c],t)}else if(a.n(0,$.bI())){u=H.c([0,0,1],[P.w])
return u}else if(a.n(0,$.bK())){u=this.y
t=[P.w]
if(u==null)return H.c([0,0],t)
else return H.c([u.a,u.b],t)}else if(a.n(0,$.bL())){u=H.c([0,0,0],[P.w])
return u}else if(a.n(0,$.cy())){u=this.Q
t=[P.w]
if(u==null)return H.c([1,1,1],t)
else return H.c([u.a,u.b,u.c],t)}else if(a.n(0,$.cz())){u=this.Q
t=[P.w]
if(u==null)return H.c([1,1,1,1],t)
else return H.c([u.a,u.b,u.c,u.d],t)}else if(a.n(0,$.bM()))return H.c([this.ch],[P.w])
else if(a.n(0,$.bH())){u=H.c([-1,-1,-1,-1],[P.w])
return u}else return H.c([],[P.w])},
b5:function(){var u,t
u={}
if(this.r!=null)return!0
t=this.a
if(t!=null){t=t.e
if(t!=null)++t.d}u.a=V.hW()
this.d.F(0,new F.i5(u))
u=u.a
this.r=u.L(0,Math.sqrt(u.N(u)))
u=this.a
if(u!=null){u.W()
u=this.a.e
if(u!=null)u.at(0)}return!0},
n:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.G()},
t:function(a){var u,t,s
u=H.c([],[P.e])
C.a.h(u,C.d.a8(J.as(this.e),0))
t=this.f
if(t!=null)C.a.h(u,t.i(0))
else C.a.h(u,"-")
t=this.r
if(t!=null)C.a.h(u,t.i(0))
else C.a.h(u,"-")
C.a.h(u,"-")
t=this.y
if(t!=null)C.a.h(u,t.i(0))
else C.a.h(u,"-")
C.a.h(u,"-")
t=this.Q
if(t!=null)C.a.h(u,t.i(0))
else C.a.h(u,"-")
C.a.h(u,V.H(this.ch,3,0))
C.a.h(u,"-")
s=C.a.l(u,", ")
return a+"{"+s+"}"},
G:function(){return this.t("")}}
F.i5.prototype={
$1:function(a){var u,t
H.n(a,"$iV")
u=a==null?null:a.d
if(u!=null){t=this.a
t.a=t.a.R(0,u)}},
$S:9}
F.hX.prototype={
E:function(){var u,t,s,r
if(this.b){u=this.c
t=u.length
for(s=0,r=0;r<t;++r){if(r>=u.length)return H.k(u,r)
u[r].e=s;++s}this.b=!1}},
h:function(a,b){var u,t
u=b.a
if(u!=null){if(u===this.a)return!1
throw H.f(P.a3("May not add a vertex already attached to another shape to this shape."))}u=this.c
b.e=u.length
t=this.a
b.a=t
C.a.h(u,b)
t.W()
return!0},
gk:function(a){return this.c.length},
b6:function(){var u,t,s
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.G)(u),++s)u[s].b5()
return!0},
i:function(a){return this.G()},
t:function(a){var u,t,s,r
this.E()
u=H.c([],[P.e])
for(t=this.c,s=t.length,r=0;r<t.length;t.length===s||(0,H.G)(t),++r)C.a.h(u,t[r].t(a))
return C.a.l(u,"\n")},
G:function(){return this.t("")},
seP:function(a){this.c=H.p(a,"$ib",[F.aj],"$ab")}}
F.hY.prototype={
gk:function(a){return this.b.length+this.c.length+this.d.length},
m:function(a,b){var u,t,s
u=this.b
t=u.length
if(b<t){if(b<0)return H.k(u,b)
return u[b]}b-=t
u=this.c
s=u.length
if(b<s){if(b<0)return H.k(u,b)
return u[b]}b-=s
u=this.d
if(b<0||b>=u.length)return H.k(u,b)
return u[b]},
F:function(a,b){H.j(b,{func:1,ret:-1,args:[F.V]})
C.a.F(this.b,b)
C.a.F(this.c,new F.hZ(this,b))
C.a.F(this.d,new F.i_(this,b))},
i:function(a){return this.G()},
t:function(a){var u,t,s,r
u=H.c([],[P.e])
for(t=this.b,s=t.length,r=0;r<t.length;t.length===s||(0,H.G)(t),++r)C.a.h(u,t[r].t(a))
for(t=this.c,s=t.length,r=0;r<t.length;t.length===s||(0,H.G)(t),++r)C.a.h(u,t[r].t(a))
for(t=this.d,s=t.length,r=0;r<t.length;t.length===s||(0,H.G)(t),++r)C.a.h(u,t[r].t(a))
return C.a.l(u,"\n")},
G:function(){return this.t("")},
sdw:function(a){this.b=H.p(a,"$ib",[F.V],"$ab")},
sdz:function(a){this.c=H.p(a,"$ib",[F.V],"$ab")},
sdA:function(a){this.d=H.p(a,"$ib",[F.V],"$ab")}}
F.hZ.prototype={
$1:function(a){H.n(a,"$iV")
if(!J.S(a.a,this.a))this.b.$1(a)},
$S:9}
F.i_.prototype={
$1:function(a){var u
H.n(a,"$iV")
u=this.a
if(!J.S(a.a,u)&&!J.S(a.b,u))this.b.$1(a)},
$S:9}
F.i0.prototype={
gk:function(a){return 0},
m:function(a,b){var u,t
if(b>=0){u=this.c
t=b-0
if(t>=0)return H.k(u,t)
return u[t]}else{u=this.b
return H.k(u,b)
return u[b]}},
i:function(a){return this.G()},
t:function(a){var u,t,s
u=H.c([],[P.e])
for(t=this.b,s=0;!1;++s){if(s>=0)return H.k(t,s)
C.a.h(u,t[s].t(a))}for(t=this.c,s=0;!1;++s){if(s>=0)return H.k(t,s)
C.a.h(u,t[s].t(a))}return C.a.l(u,"\n")},
G:function(){return this.t("")},
sdH:function(a){this.b=H.p(a,"$ib",[F.ba],"$ab")},
sdI:function(a){this.c=H.p(a,"$ib",[F.ba],"$ab")}}
F.i2.prototype={}
F.i1.prototype={
ba:function(a,b,c){return J.S(b.f,c.f)}}
F.i3.prototype={}
F.fL.prototype={
fA:function(a){var u,t,s,r,q,p,o,n,m
H.p(a,"$ib",[F.aj],"$ab")
u=V.hW()
for(t=a.length,s=0;s<t;++s){r=a[s].r
if(r!=null)u=new V.R(u.a+r.a,u.b+r.b,u.c+r.c)}u=u.L(0,Math.sqrt(u.N(u)))
for(t=a.length,r=u==null,s=0;s<a.length;a.length===t||(0,H.G)(a),++s){q=a[s]
if(r)p=null
else{o=u.a
n=u.b
m=u.c
p=u.L(0,Math.sqrt(o*o+n*n+m*m))}if(!J.S(q.r,p)){q.r=p
o=q.a
if(o!=null){o=o.e
if(o!=null)o.T(null)}}}return}}
F.i4.prototype={
gk:function(a){return 0},
i:function(a){return this.G()},
t:function(a){var u,t,s
u=H.c([],[P.e])
for(t=this.b,s=0;!1;++s){if(s>=0)return H.k(t,s)
C.a.h(u,t[s].t(a))}return C.a.l(u,"\n")},
G:function(){return this.t("")},
saZ:function(a){this.b=H.p(a,"$ib",[F.br],"$ab")}}
O.eJ.prototype={
gv:function(){var u=this.f
if(u==null){u=D.an()
this.f=u}return u},
ax:function(a){var u=this.f
if(u!=null)u.T(a)}}
O.by.prototype={}
T.hr.prototype={}
V.aP.prototype={
a7:function(a,b){return!0},
i:function(a){return"all"},
$iaa:1}
V.aa.prototype={}
V.d1.prototype={
a7:function(a,b){var u,t,s
for(u=this.a,t=u.length,s=0;s<u.length;u.length===t||(0,H.G)(u),++s)if(u[s].a7(0,b))return!0
return!1},
i:function(a){var u,t,s,r,q
for(u=this.a,t=u.length,s="",r=0;r<u.length;u.length===t||(0,H.G)(u),++r){q=u[r]
if(s.length!==0)s+=", "
s+=q.i(0)}return s},
sO:function(a){this.a=H.p(a,"$ib",[V.aa],"$ab")},
$iaa:1}
V.a5.prototype={
a7:function(a,b){return!this.d_(0,b)},
i:function(a){return"!["+this.bk(0)+"]"}}
V.fU.prototype={
a7:function(a,b){return this.a<=b&&this.b>=b},
i:function(a){var u,t
u=H.ji(this.a)
t=H.ji(this.b)
return u+".."+t},
$iaa:1}
V.h3.prototype={
d3:function(a){var u,t
if(a.a.length<=0)throw H.f(P.a3("May not create a SetMatcher with zero characters."))
u=new H.aB([P.y,P.K])
for(t=new H.c1(a,a.gk(a),0,[H.a9(a,"t",0)]);t.q();)u.J(0,t.d,!0)
this.seB(u)},
a7:function(a,b){return this.a.bX(0,b)},
i:function(a){var u=this.a
return P.jj(new H.cZ(u,[H.u(u,0)]),0,null)},
seB:function(a){this.a=H.p(a,"$iF",[P.y,P.K],"$aF")},
$iaa:1}
V.c9.prototype={
l:function(a,b){var u,t,s,r
for(u=this.c,t=u.length,s=0;s<t;++s){r=u[s]
if(r.b.b===b)return r}r=new V.ce(this.a.j(0,b))
r.sO(H.c([],[V.aa]))
r.c=!1
C.a.h(this.c,r)
return r},
fj:function(a){var u,t,s,r
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.G)(u),++s){r=u[s]
if(r.a7(0,a))return r}return},
i:function(a){return this.b},
seN:function(a){this.c=H.p(a,"$ib",[V.ce],"$ab")}}
V.dl.prototype={
i:function(a){var u,t
u=H.jE(this.b,"\n","\\n")
t=H.jE(u,"\t","\\t")
return this.a+":"+this.c+':"'+t+'"'}}
V.cd.prototype={
a9:function(a,b,c){var u,t,s
H.p(c,"$ib",[P.e],"$ab")
for(u=c.length,t=0;t<c.length;c.length===u||(0,H.G)(c),++t){s=c[t]
this.c.J(0,s,b)}},
i:function(a){return this.b},
sex:function(a){var u=P.e
this.c=H.p(a,"$iF",[u,u],"$aF")}}
V.hu.prototype={
j:function(a,b){var u=this.a.m(0,b)
if(u==null){u=new V.c9(this,b)
u.seN(H.c([],[V.ce]))
u.d=null
this.a.J(0,b,u)}return u},
C:function(a){var u,t
u=this.b.m(0,a)
if(u==null){u=new V.cd(this,a)
t=P.e
u.sex(new H.aB([t,t]))
this.b.J(0,a,u)}return u},
cs:function(a){var u,t,s,r,q,p,o,n,m,l,k,j
u=H.c([],[V.dl])
t=this.c
s=[P.y]
r=H.c([],s)
for(q=a.length,p=null,o=0;!0;){if(o>=q){if(p!=null)C.a.h(u,p)
return u}n=C.d.ad(a,o)
m=t.fj(n)
if(m==null){if(p==null){C.a.h(r,n)
l=P.jj(r,0,null)
throw H.f(P.a3("Untokenizable string [state: "+t.b+", index "+o+']: "'+l+'"'))}C.a.h(u,p)
o=p.c+1
r=H.c([],s)
t=this.c
p=null}else{if(!m.c)C.a.h(r,n)
t=m.b
if(t.d!=null){l=P.jj(r,0,null)
k=t.d
j=k.c.m(0,l)
p=new V.dl(j==null?k.b:j,l,o)}++o}}},
seK:function(a){this.a=H.p(a,"$iF",[P.e,V.c9],"$aF")},
seM:function(a){this.b=H.p(a,"$iF",[P.e,V.cd],"$aF")}}
V.ce.prototype={
i:function(a){return this.b.b+": "+this.bk(0)}}
X.cJ.prototype={$ik0:1}
X.f5.prototype={
gv:function(){var u=this.x
if(u==null){u=D.an()
this.x=u}return u}}
X.d7.prototype={
gv:function(){var u=this.f
if(u==null){u=D.an()
this.f=u}return u},
ac:function(a){var u
H.n(a,"$iD")
u=this.f
if(u!=null)u.T(a)},
dg:function(){return this.ac(null)},
sc8:function(a){var u,t
if(!J.S(this.b,a)){u=this.b
if(u!=null)u.gv().I(0,this.gbq())
t=this.b
this.b=a
if(a!=null)a.gv().h(0,this.gbq())
u=new D.P("mover",t,this.b,this,[U.a4])
u.b=!0
this.ac(u)}},
$ik0:1,
$icJ:1}
X.dj.prototype={}
V.b1.prototype={
av:function(a){this.b=new P.f9(C.G)
this.c=null
this.saU(H.c([],[[P.b,W.af]]))},
A:function(a,b){var u,t,s,r,q,p,o,n,m
u=this.d
if(u.length===0)C.a.h(u,H.c([],[W.af]))
t=a.split("\n")
for(u=t.length,s=[W.af],r=!0,q=0;q<u;++q){p=t[q]
if(r)r=!1
else C.a.h(this.d,H.c([],s))
o=document.createElement("div")
o.className="codePart"
H.A(p)
n=this.b.dn(p,0,p.length)
m=n==null?p:n
C.e.cS(o,H.jE(m," ","&nbsp;"))
m=o.style
m.color=b
C.a.h(C.a.gaE(this.d),o)}},
cf:function(a,b){var u,t,s,r
H.p(b,"$ib",[P.e],"$ab")
this.saU(H.c([],[[P.b,W.af]]))
u=C.a.l(b,"\n")
t=this.c
if(t==null){t=this.aC()
this.c=t}for(t=t.cs(u),s=t.length,r=0;r<t.length;t.length===s||(0,H.G)(t),++r)this.aF(t[r])},
saU:function(a){this.d=H.p(a,"$ib",[[P.b,W.af]],"$ab")}}
V.j6.prototype={
$1:function(a){H.n(a,"$iaJ")
P.jD(C.c.cr(this.a.gfo(),2)+" fps")},
$S:36}
V.eH.prototype={
aF:function(a){switch(a.a){case"Class":this.A(a.b,"#551")
break
case"Comment":this.A(a.b,"#777")
break
case"Id":this.A(a.b,"#111")
break
case"Num":this.A(a.b,"#191")
break
case"Reserved":this.A(a.b,"#119")
break
case"String":this.A(a.b,"#171")
break
case"Symbol":this.A(a.b,"#616")
break
case"Type":this.A(a.b,"#B11")
break
case"Whitespace":this.A(a.b,"#111")
break}},
aC:function(){var u,t,s,r
u=V.hv()
u.c=u.j(0,"Start")
t=u.j(0,"Start").l(0,"Id")
s=V.r(new H.o("_"))
C.a.h(t.a,s)
s=V.M("a","z")
C.a.h(t.a,s)
s=V.M("A","Z")
C.a.h(t.a,s)
s=u.j(0,"Id").l(0,"Id")
t=V.r(new H.o("_"))
C.a.h(s.a,t)
t=V.M("0","9")
C.a.h(s.a,t)
t=V.M("a","z")
C.a.h(s.a,t)
t=V.M("A","Z")
C.a.h(s.a,t)
t=u.j(0,"Start").l(0,"Int")
s=V.M("0","9")
C.a.h(t.a,s)
s=u.j(0,"Int").l(0,"Int")
t=V.M("0","9")
C.a.h(s.a,t)
t=u.j(0,"Int").l(0,"FloatDot")
s=V.r(new H.o("."))
C.a.h(t.a,s)
s=u.j(0,"FloatDot").l(0,"Float")
t=V.M("0","9")
C.a.h(s.a,t)
t=u.j(0,"Float").l(0,"Float")
s=V.M("0","9")
C.a.h(t.a,s)
s=u.j(0,"Start").l(0,"Sym")
t=V.r(new H.o("<>{}()\\-+*%!&|=.,?:;"))
C.a.h(s.a,t)
t=u.j(0,"Sym").l(0,"Sym")
s=V.r(new H.o("<>{}()\\-+*%!&|=.,?:;"))
C.a.h(t.a,s)
s=u.j(0,"Start").l(0,"OpenDoubleStr")
t=V.r(new H.o('"'))
C.a.h(s.a,t)
t=u.j(0,"OpenDoubleStr").l(0,"CloseDoubleStr")
s=V.r(new H.o('"'))
C.a.h(t.a,s)
s=u.j(0,"OpenDoubleStr").l(0,"EscDoubleStr")
t=V.r(new H.o("\\"))
C.a.h(s.a,t)
t=u.j(0,"EscDoubleStr").l(0,"OpenDoubleStr")
s=V.r(new H.o('"'))
C.a.h(t.a,s)
C.a.h(u.j(0,"OpenDoubleStr").l(0,"OpenDoubleStr").a,new V.aP())
s=u.j(0,"Start").l(0,"OpenSingleStr")
t=V.r(new H.o("'"))
C.a.h(s.a,t)
t=u.j(0,"OpenSingleStr").l(0,"CloseSingleStr")
s=V.r(new H.o("'"))
C.a.h(t.a,s)
s=u.j(0,"OpenSingleStr").l(0,"EscSingleStr")
t=V.r(new H.o("\\"))
C.a.h(s.a,t)
t=u.j(0,"EscSingleStr").l(0,"OpenSingleStr")
s=V.r(new H.o("'"))
C.a.h(t.a,s)
C.a.h(u.j(0,"OpenSingleStr").l(0,"OpenSingleStr").a,new V.aP())
s=u.j(0,"Start").l(0,"Slash")
t=V.r(new H.o("/"))
C.a.h(s.a,t)
t=u.j(0,"Slash").l(0,"Comment")
s=V.r(new H.o("/"))
C.a.h(t.a,s)
s=u.j(0,"Comment").l(0,"EndComment")
t=V.r(new H.o("\n"))
C.a.h(s.a,t)
t=u.j(0,"Comment").l(0,"Comment")
s=new V.a5()
r=[V.aa]
s.sO(H.c([],r))
C.a.h(t.a,s)
t=V.r(new H.o("\n"))
C.a.h(s.a,t)
t=u.j(0,"Slash").l(0,"MLComment")
s=V.r(new H.o("*"))
C.a.h(t.a,s)
s=u.j(0,"MLComment").l(0,"MLCStar")
t=V.r(new H.o("*"))
C.a.h(s.a,t)
t=u.j(0,"MLCStar").l(0,"MLComment")
s=new V.a5()
s.sO(H.c([],r))
C.a.h(t.a,s)
t=V.r(new H.o("*"))
C.a.h(s.a,t)
t=u.j(0,"MLCStar").l(0,"EndComment")
s=V.r(new H.o("/"))
C.a.h(t.a,s)
s=u.j(0,"Start").l(0,"Whitespace")
t=V.r(new H.o(" \n\t"))
C.a.h(s.a,t)
t=u.j(0,"Whitespace").l(0,"Whitespace")
s=V.r(new H.o(" \n\t"))
C.a.h(t.a,s)
s=u.j(0,"Int")
s.d=s.a.C("Num")
s=u.j(0,"Float")
s.d=s.a.C("Num")
s=u.j(0,"Sym")
s.d=s.a.C("Symbol")
s=u.j(0,"CloseDoubleStr")
s.d=s.a.C("String")
s=u.j(0,"CloseSingleStr")
s.d=s.a.C("String")
s=u.j(0,"EndComment")
s.d=s.a.C("Comment")
s=u.j(0,"Whitespace")
s.d=s.a.C("Whitespace")
s=u.j(0,"Id")
t=s.a.C("Id")
s.d=t
s=[P.e]
t.a9(0,"Class",H.c(["Constant","Depth","Entity","EntityPass","Math","Matrix4","Movers","Rotater","Scenes","Shapes","Techniques","ThreeDart"],s))
t.a9(0,"Type",H.c(["bool","double","dynamic","false","int","List","Map","null","num","Object","String","this","true","var","void"],s))
t.a9(0,"Reserved",H.c(["abstract","as","assert","async","await","break","case","catch","class","continue","const","default","deferred","do","else","enum","export","extends","external","factory","final","finally","for","get","if","implements","import","in","is","library","new","operator","part","rethrow","return","set","static","super","switch","sync","throw","try","typedef","with","while","yield"],s))
return u}}
V.f6.prototype={
aF:function(a){switch(a.a){case"Builtin":this.A(a.b,"#411")
break
case"Comment":this.A(a.b,"#777")
break
case"Id":this.A(a.b,"#111")
break
case"Num":this.A(a.b,"#191")
break
case"Preprocess":this.A(a.b,"#737")
break
case"Reserved":this.A(a.b,"#119")
break
case"Symbol":this.A(a.b,"#611")
break
case"Type":this.A(a.b,"#171")
break
case"Whitespace":this.A(a.b,"#111")
break}},
aC:function(){var u,t,s,r
u=V.hv()
u.c=u.j(0,"Start")
t=u.j(0,"Start").l(0,"Id")
s=V.r(new H.o("_"))
C.a.h(t.a,s)
s=V.M("a","z")
C.a.h(t.a,s)
s=V.M("A","Z")
C.a.h(t.a,s)
s=u.j(0,"Id").l(0,"Id")
t=V.r(new H.o("_"))
C.a.h(s.a,t)
t=V.M("0","9")
C.a.h(s.a,t)
t=V.M("a","z")
C.a.h(s.a,t)
t=V.M("A","Z")
C.a.h(s.a,t)
t=u.j(0,"Start").l(0,"Int")
s=V.M("0","9")
C.a.h(t.a,s)
s=u.j(0,"Int").l(0,"Int")
t=V.M("0","9")
C.a.h(s.a,t)
t=u.j(0,"Int").l(0,"FloatDot")
s=V.r(new H.o("."))
C.a.h(t.a,s)
s=u.j(0,"FloatDot").l(0,"Float")
t=V.M("0","9")
C.a.h(s.a,t)
t=u.j(0,"Float").l(0,"Float")
s=V.M("0","9")
C.a.h(t.a,s)
s=u.j(0,"Start").l(0,"Sym")
t=V.r(new H.o("<>{}()[]\\-+*%!&|=.,?:;"))
C.a.h(s.a,t)
t=u.j(0,"Sym").l(0,"Sym")
s=V.r(new H.o("<>{}()[]\\-+*%!&|=.,?:;"))
C.a.h(t.a,s)
s=u.j(0,"Start").l(0,"Slash")
t=V.r(new H.o("/"))
C.a.h(s.a,t)
t=u.j(0,"Slash").l(0,"Comment")
s=V.r(new H.o("/"))
C.a.h(t.a,s)
C.a.h(u.j(0,"Slash").l(0,"Sym").a,new V.aP())
s=u.j(0,"Comment").l(0,"EndComment")
t=V.r(new H.o("\n"))
C.a.h(s.a,t)
t=u.j(0,"Comment").l(0,"Comment")
s=new V.a5()
r=[V.aa]
s.sO(H.c([],r))
C.a.h(t.a,s)
t=V.r(new H.o("\n"))
C.a.h(s.a,t)
t=u.j(0,"Start").l(0,"Preprocess")
s=V.r(new H.o("#"))
C.a.h(t.a,s)
s=u.j(0,"Preprocess").l(0,"Preprocess")
t=new V.a5()
t.sO(H.c([],r))
C.a.h(s.a,t)
s=V.r(new H.o("\n"))
C.a.h(t.a,s)
s=u.j(0,"Preprocess").l(0,"EndPreprocess")
t=V.r(new H.o("\n"))
C.a.h(s.a,t)
t=u.j(0,"Start").l(0,"Whitespace")
s=V.r(new H.o(" \n\t"))
C.a.h(t.a,s)
s=u.j(0,"Whitespace").l(0,"Whitespace")
t=V.r(new H.o(" \n\t"))
C.a.h(s.a,t)
t=u.j(0,"Int")
t.d=t.a.C("Num")
t=u.j(0,"Float")
t.d=t.a.C("Num")
t=u.j(0,"Sym")
t.d=t.a.C("Symbol")
t=u.j(0,"EndComment")
t.d=t.a.C("Comment")
t=u.j(0,"EndPreprocess")
t.d=t.a.C("Preprocess")
t=u.j(0,"Whitespace")
t.d=t.a.C("Whitespace")
t=u.j(0,"Id")
s=t.a.C("Id")
t.d=s
t=[P.e]
s.a9(0,"Type",H.c(["float","double","int","void","bool","true","false","mat2","mat3","mat4","dmat2","dmat3","dmat4","mat2x2","mat2x3","mat2x4","dmat2x2","dmat2x3","dmat2x4","mat3x2","mat3x3","mat3x4","dmat3x2","dmat3x3","dmat3x4","mat4x2","mat4x3","mat4x4","dmat4x2","dmat4x3","dmat4x4","vec2","vec3","vec4","ivec2","ivec3","ivec4","bvec2","bvec3","bvec4","dvec2","dvec3","dvec4","uint","uvec2","uvec3","uvec4","sampler1D","sampler2D","sampler3D","samplerCube","sampler1DShadow","sampler2DShadow","samplerCubeShadow","sampler1DArray","sampler2DArray","sampler1DArrayShadow","sampler2DArrayShadow","isampler1D","isampler2D","isampler3D","isamplerCube","isampler1DArray","isampler2DArray","usampler1D","usampler2D","usampler3D","usamplerCube","usampler1DArray","usampler2DArray","sampler2DRect","sampler2DRectShadow","isampler2DRect","usampler2DRect","samplerBuffer","isamplerBuffer","usamplerBuffer","sampler2DMS","isampler2DMS","usampler2DMS","sampler2DMSArray","isampler2DMSArray","usampler2DMSArray","samplerCubeArray","samplerCubeArrayShadow","isamplerCubeArray","usamplerCubeArray"],t))
s.a9(0,"Reserved",H.c(["attribute","break","case","centroid","const","continue","default","discard","do","else","flat","for","highp","if","in","inout","invariant","layout","lowp","mediump","noperspective","out","patch","precision","return","sample","smooth","struct","subroutine","switch","uniform","varying","while"],t))
s.a9(0,"Builtin",H.c(["gl_FragColor","gl_Position"],t))
return u}}
V.f7.prototype={
aF:function(a){switch(a.a){case"Attr":this.A(a.b,"#911")
this.A("=","#111")
break
case"Id":this.A(a.b,"#111")
break
case"Other":this.A(a.b,"#111")
break
case"Reserved":this.A(a.b,"#119")
break
case"String":this.A(a.b,"#171")
break
case"Symbol":this.A(a.b,"#616")
break}},
aC:function(){var u,t,s
u=V.hv()
u.c=u.j(0,"Start")
t=u.j(0,"Start").l(0,"Id")
s=V.r(new H.o("_"))
C.a.h(t.a,s)
s=V.M("a","z")
C.a.h(t.a,s)
s=V.M("A","Z")
C.a.h(t.a,s)
s=u.j(0,"Id").l(0,"Id")
t=V.r(new H.o("_"))
C.a.h(s.a,t)
t=V.M("0","9")
C.a.h(s.a,t)
t=V.M("a","z")
C.a.h(s.a,t)
t=V.M("A","Z")
C.a.h(s.a,t)
t=u.j(0,"Id").l(0,"Attr")
s=V.r(new H.o("="))
C.a.h(t.a,s)
t.c=!0
t=u.j(0,"Start").l(0,"Sym")
s=V.r(new H.o("</\\-!>="))
C.a.h(t.a,s)
s=u.j(0,"Sym").l(0,"Sym")
t=V.r(new H.o("</\\-!>="))
C.a.h(s.a,t)
t=u.j(0,"Start").l(0,"OpenStr")
s=V.r(new H.o('"'))
C.a.h(t.a,s)
s=u.j(0,"OpenStr").l(0,"CloseStr")
t=V.r(new H.o('"'))
C.a.h(s.a,t)
t=u.j(0,"OpenStr").l(0,"EscStr")
s=V.r(new H.o("\\"))
C.a.h(t.a,s)
s=u.j(0,"EscStr").l(0,"OpenStr")
t=V.r(new H.o('"'))
C.a.h(s.a,t)
C.a.h(u.j(0,"OpenStr").l(0,"OpenStr").a,new V.aP())
C.a.h(u.j(0,"Start").l(0,"Other").a,new V.aP())
t=u.j(0,"Other").l(0,"Other")
s=new V.a5()
s.sO(H.c([],[V.aa]))
C.a.h(t.a,s)
t=V.r(new H.o('</\\-!>=_"'))
C.a.h(s.a,t)
t=V.M("a","z")
C.a.h(s.a,t)
t=V.M("A","Z")
C.a.h(s.a,t)
t=u.j(0,"Sym")
t.d=t.a.C("Symbol")
t=u.j(0,"CloseStr")
t.d=t.a.C("String")
t=u.j(0,"Id")
s=t.a.C("Id")
t.d=s
s.a9(0,"Reserved",H.c(["DOCTYPE","html","head","meta","link","title","body","script"],[P.e]))
s=u.j(0,"Attr")
s.d=s.a.C("Attr")
s=u.j(0,"Other")
s.d=s.a.C("Other")
return u}}
V.fR.prototype={
cf:function(a,b){H.p(b,"$ib",[P.e],"$ab")
this.saU(H.c([],[[P.b,W.af]]))
this.A(C.a.l(b,"\n"),"#111")},
aF:function(a){},
aC:function(){return}}
V.h7.prototype={
d5:function(a,b){var u,t,s,r,q,p,o
u=document
t=u.body
s=u.createElement("div")
s.className="scrollTop";(t&&C.j).p(t,s)
r=u.createElement("div")
r.className="scrollPage"
C.j.p(t,r)
q=u.createElement("div")
q.className="pageCenter"
C.e.p(r,q)
if(a.length!==0){u.title=a
p=u.createElement("div")
p.className="pageTitle"
p.textContent=a
C.e.p(q,p)}o=u.createElement("div")
this.a=o
C.e.p(q,o)
this.b=null
o=W.l
W.Y(u,"scroll",H.j(new V.h9(s),{func:1,ret:-1,args:[o]}),!1,o)},
bQ:function(a){var u,t,s,r,q,p,o,n,m,l,k
H.p(a,"$ib",[P.e],"$ab")
this.eG()
u=document
t=u.createElement("div")
t.className="textPar"
for(s=this.b.cs(C.a.fu(a)),r=s.length,q=0;q<s.length;s.length===r||(0,H.G)(s),++q){p=s[q]
switch(p.a){case"Bold":o=u.createElement("div")
o.className="boldPar"
o.textContent=p.b
C.e.p(t,o)
break
case"Italic":o=u.createElement("div")
o.className="italicPar"
o.textContent=p.b
C.e.p(t,o)
break
case"Code":o=u.createElement("div")
o.className="codePar"
o.textContent=p.b
C.e.p(t,o)
break
case"Link":n=p.b
if(H.mu(n,"|",0)){m=n.split("|")
l=u.createElement("a")
l.className="linkPar"
if(1>=m.length)return H.k(m,1)
l.href=H.A(m[1])
l.textContent=H.A(m[0])
C.e.p(t,l)}else{k=P.ks(C.v,n,C.q,!1)
l=u.createElement("a")
l.className="linkPar"
l.href="#"+k
l.textContent=n
C.e.p(t,l)}break
case"Other":o=u.createElement("div")
o.className="normalPar"
o.textContent=p.b
C.e.p(t,o)
break}}C.e.p(this.a,t)},
cF:function(a){var u,t,s,r
u=new V.eH("dart")
u.av("dart")
t=new V.f6("glsl")
t.av("glsl")
s=new V.f7("html")
s.av("html")
r=C.a.fl(H.c([u,t,s],[V.b1]),new V.ha(a))
if(r!=null)return r
u=new V.fR("plain")
u.av("plain")
return u},
bP:function(a4,a5,a6,a7){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3
H.p(a7,"$ib",[P.e],"$ab")
u=H.c([],[P.y])
for(t=!1,s=0;s<a7.length;++s){r=a7[s]
if(J.jz(r).aL(r,"+")){C.a.J(a7,s,C.d.aM(r,1))
C.a.h(u,1)
t=!0}else if(C.d.aL(r,"-")){C.a.J(a7,s,C.d.aM(r,1))
C.a.h(u,-1)
t=!0}else C.a.h(u,0)}q=this.cF(a5)
q.cf(0,a7)
p=document
o=p.createElement("div")
o.className="codeTableScroll"
n=p.createElement("table")
n.className="codeTable"
C.e.p(o,n)
C.e.p(this.a,o)
m=P.ks(C.v,a4,C.q,!1)
l=p.createElement("tr")
l.className="headerRow"
k=p.createElement("td")
k.className="headerCell"
k.colSpan=t?3:2
j=p.createElement("div")
j.className="tableHeader"
j.id=m
i=W.jM(null)
i.href="#"+m
i.textContent=a4
C.e.p(j,i)
C.o.p(k,j)
C.i.p(l,k)
C.k.p(n,l)
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
for(f=r.length,a0=0;a0<r.length;r.length===f||(0,H.G)(r),++a0)C.o.p(a,r[a0])
C.i.p(e,d)
C.i.p(e,c)
C.i.p(e,a)
C.k.p(n,e)}else for(f=q.d,a1=f.length,a2=a6,a0=0;a0<f.length;f.length===a1||(0,H.G)(f),++a0){r=f[a0]
e=p.createElement("tr")
e.className="codeTableRow"
d=p.createElement("td")
d.className="codeLineNums";++a2
d.textContent=""+a2
c=p.createElement("td")
c.className="codeLineText"
for(a3=C.a.gH(r);a3.q();)C.o.p(c,a3.gB(a3))
C.i.p(e,d)
C.i.p(e,c)
C.k.p(n,e)}},
eG:function(){var u,t,s,r
if(this.b!=null)return
u=V.hv()
u.c=u.j(0,"Start")
t=u.j(0,"Start").l(0,"Bold")
s=V.r(new H.o("*"))
C.a.h(t.a,s)
t.c=!0
t=u.j(0,"Bold").l(0,"Bold")
s=new V.a5()
r=[V.aa]
s.sO(H.c([],r))
C.a.h(t.a,s)
t=V.r(new H.o("*"))
C.a.h(s.a,t)
t=u.j(0,"Bold").l(0,"BoldEnd")
s=V.r(new H.o("*"))
C.a.h(t.a,s)
t.c=!0
t=u.j(0,"Start").l(0,"Italic")
s=V.r(new H.o("_"))
C.a.h(t.a,s)
t.c=!0
t=u.j(0,"Italic").l(0,"Italic")
s=new V.a5()
s.sO(H.c([],r))
C.a.h(t.a,s)
t=V.r(new H.o("_"))
C.a.h(s.a,t)
t=u.j(0,"Italic").l(0,"ItalicEnd")
s=V.r(new H.o("_"))
C.a.h(t.a,s)
t.c=!0
t=u.j(0,"Start").l(0,"Code")
s=V.r(new H.o("`"))
C.a.h(t.a,s)
t.c=!0
t=u.j(0,"Code").l(0,"Code")
s=new V.a5()
s.sO(H.c([],r))
C.a.h(t.a,s)
t=V.r(new H.o("`"))
C.a.h(s.a,t)
t=u.j(0,"Code").l(0,"CodeEnd")
s=V.r(new H.o("`"))
C.a.h(t.a,s)
t.c=!0
t=u.j(0,"Start").l(0,"LinkHead")
s=V.r(new H.o("["))
C.a.h(t.a,s)
t.c=!0
t=u.j(0,"LinkHead").l(0,"LinkTail")
s=V.r(new H.o("|"))
C.a.h(t.a,s)
s=u.j(0,"LinkHead").l(0,"LinkEnd")
t=V.r(new H.o("]"))
C.a.h(s.a,t)
s.c=!0
s=u.j(0,"LinkHead").l(0,"LinkHead")
t=new V.a5()
t.sO(H.c([],r))
C.a.h(s.a,t)
s=V.r(new H.o("|]"))
C.a.h(t.a,s)
s=u.j(0,"LinkTail").l(0,"LinkEnd")
t=V.r(new H.o("]"))
C.a.h(s.a,t)
s.c=!0
s=u.j(0,"LinkTail").l(0,"LinkTail")
t=new V.a5()
t.sO(H.c([],r))
C.a.h(s.a,t)
s=V.r(new H.o("|]"))
C.a.h(t.a,s)
C.a.h(u.j(0,"Start").l(0,"Other").a,new V.aP())
s=u.j(0,"Other").l(0,"Other")
t=new V.a5()
t.sO(H.c([],r))
C.a.h(s.a,t)
s=V.r(new H.o("*_`["))
C.a.h(t.a,s)
s=u.j(0,"BoldEnd")
s.d=s.a.C("Bold")
s=u.j(0,"ItalicEnd")
s.d=s.a.C("Italic")
s=u.j(0,"CodeEnd")
s.d=s.a.C("Code")
s=u.j(0,"LinkEnd")
s.d=s.a.C("Link")
s=u.j(0,"Other")
s.d=s.a.C("Other")
this.b=u}}
V.h9.prototype={
$1:function(a){P.ke(C.l,new V.h8(this.a))},
$S:37}
V.h8.prototype={
$0:function(){var u,t,s
u=C.c.Y(document.documentElement.scrollTop)
t=this.a.style
s=H.i(-0.01*u)+"px"
t.top=s},
$S:0}
V.ha.prototype={
$1:function(a){return H.n(a,"$ib1").a===this.a},
$S:38}
R.j3.prototype={
$1:function(a){var u,t,s,r
H.n(a,"$iD")
u=this.a
t=this.b
s=t.a
r=[P.e]
u.bP("Vertex Shader","glsl",0,H.c((s==null?null:s.c).split("\n"),r))
t=t.a
u.bP("Fragment Shader","glsl",0,H.c((t==null?null:t.d).split("\n"),r))},
$S:6};(function aliases(){var u=J.a.prototype
u.cX=u.i
u=J.cX.prototype
u.cZ=u.i
u=P.h.prototype
u.cY=u.aH
u=W.J.prototype
u.aN=u.U
u=W.dX.prototype
u.d0=u.a0
u=V.d1.prototype
u.d_=u.a7
u.bk=u.i})();(function installTearOffs(){var u=hunkHelpers._static_1,t=hunkHelpers._static_0,s=hunkHelpers.installStaticTearOff,r=hunkHelpers.installInstanceTearOff,q=hunkHelpers._instance_2u,p=hunkHelpers._instance_0u,o=hunkHelpers._instance_1u,n=hunkHelpers._instance_0i
u(P,"m3","lN",10)
u(P,"m4","lO",10)
u(P,"m5","lP",10)
t(P,"kB","m2",1)
s(W,"me",4,null,["$4"],["lR"],19,0)
s(W,"mf",4,null,["$4"],["lS"],19,0)
var m
r(m=E.a0.prototype,"gcd",0,0,null,["$1","$0"],["ce","fI"],2,0)
r(m,"gcb",0,0,null,["$1","$0"],["cc","fH"],2,0)
r(m,"gc9",0,0,null,["$1","$0"],["ca","fE"],2,0)
q(m,"gfC","fD",5)
q(m,"gfF","fG",5)
r(m=E.dk.prototype,"gbm",0,0,null,["$1","$0"],["bo","bn"],2,0)
p(m,"gfW","cl",1)
o(m=X.dr.prototype,"gdZ","e_",7)
o(m,"gdN","dO",7)
o(m,"gdT","dU",3)
o(m,"ge2","e3",20)
o(m,"ge0","e1",20)
o(m,"ge5","e6",3)
o(m,"ge9","ea",3)
o(m,"gdX","dY",3)
o(m,"ge7","e8",3)
o(m,"gdV","dW",3)
o(m,"geb","ec",33)
o(m,"ged","ee",7)
o(m,"gem","en",8)
o(m,"gei","ej",8)
o(m,"gek","el",8)
n(V.aM.prototype,"gk","b9",21)
n(V.R.prototype,"gk","b9",21)
r(m=U.c_.prototype,"gbp",0,0,null,["$1","$0"],["S","da"],2,0)
q(m,"gdL","dM",22)
q(m,"geg","eh",22)
r(m=M.cP.prototype,"gZ",0,0,null,["$1","$0"],["a3","dc"],2,0)
q(m,"gdP","dQ",5)
q(m,"gdR","dS",5)
r(X.d7.prototype,"gbq",0,0,null,["$1","$0"],["ac","dg"],2,0)})();(function inheritance(){var u=hunkHelpers.mixin,t=hunkHelpers.inherit,s=hunkHelpers.inheritMany
t(P.E,null)
s(P.E,[H.jg,J.a,J.ae,P.dK,P.h,H.c1,P.az,H.bn,H.dq,H.fV,H.hA,P.b6,H.bR,H.e1,P.W,H.fm,H.fn,H.fh,P.e7,P.aO,P.al,P.du,P.hi,P.cb,P.hj,P.aJ,P.a_,P.iQ,P.iE,P.bz,P.dJ,P.t,P.bS,P.fa,P.iO,P.K,P.b5,P.T,P.aQ,P.fP,P.dg,P.dC,P.f4,P.b7,P.b,P.F,P.C,P.a8,P.e,P.bw,W.eD,W.be,W.v,W.d5,W.dX,W.iJ,W.cQ,W.ab,W.iD,W.ec,P.iy,O.U,O.c2,E.ex,E.a0,E.fW,E.dk,Z.dt,Z.i7,Z.cH,Z.c0,Z.ds,D.eA,D.bY,D.D,X.cI,X.cY,X.fj,X.fp,X.aV,X.fC,X.hw,X.dr,V.b2,V.b3,V.eT,V.bb,V.a6,V.ag,V.dc,V.aM,V.R,M.cP,A.cD,A.es,A.dm,A.hL,F.V,F.eY,F.ba,F.fl,F.br,F.df,F.h4,F.h5,F.h6,F.aj,F.hX,F.hY,F.i0,F.i2,F.i3,F.i4,O.by,T.hr,V.aP,V.aa,V.d1,V.fU,V.h3,V.c9,V.dl,V.cd,V.hu,X.cJ,X.dj,X.d7,V.b1,V.h7])
s(J.a,[J.fe,J.fg,J.cX,J.aA,J.bp,J.b8,H.c4,W.d,W.eq,W.cE,W.av,W.aw,W.I,W.dw,W.eI,W.eL,W.cM,W.dy,W.cO,W.dA,W.eN,W.l,W.dD,W.ay,W.f8,W.dF,W.d0,W.fw,W.dL,W.dM,W.aD,W.dN,W.dQ,W.aE,W.dU,W.da,W.dW,W.aG,W.dY,W.aH,W.e2,W.ao,W.e5,W.ht,W.aK,W.e8,W.hy,W.hT,W.ed,W.ef,W.eh,W.ej,W.el,P.aT,P.dH,P.aW,P.dS,P.fT,P.e3,P.aX,P.ea,P.et,P.dv,P.cF,P.cR,P.d9,P.bv,P.de,P.dn,P.e_])
s(J.cX,[J.fQ,J.bd,J.b9])
t(J.jf,J.aA)
s(J.bp,[J.cW,J.ff])
t(P.fo,P.dK)
s(P.fo,[H.dp,W.ie,W.a1,P.f0])
t(H.o,H.dp)
s(P.h,[H.eQ,H.fs,H.ci])
s(H.eQ,[H.bq,H.cZ])
s(P.az,[H.ft,H.i8])
t(H.fu,H.bq)
s(P.b6,[H.fM,H.fi,H.hR,H.hC,H.ez,H.h1,P.d6,P.at,P.hS,P.hQ,P.ca,P.eB,P.eG])
s(H.bR,[H.j8,H.ho,H.j_,H.j0,H.j1,P.ia,P.i9,P.ib,P.ic,P.iN,P.iM,P.il,P.iq,P.im,P.io,P.ip,P.it,P.iu,P.is,P.ir,P.hk,P.hl,P.iS,P.iB,P.iA,P.iC,P.fr,P.eO,P.eP,W.eR,W.fy,W.fA,W.h0,W.hh,W.ik,W.fK,W.fJ,W.iF,W.iG,W.iL,W.iP,P.iU,P.f1,P.f2,P.ev,E.fX,E.fY,E.fZ,E.hs,D.eV,D.eW,F.j7,F.iV,F.i5,F.hZ,F.i_,V.j6,V.h9,V.h8,V.ha,R.j3])
s(H.ho,[H.hf,H.bP])
t(P.fq,P.W)
s(P.fq,[H.aB,W.id])
t(H.d2,H.c4)
s(H.d2,[H.cm,H.co])
t(H.cn,H.cm)
t(H.c3,H.cn)
t(H.cp,H.co)
t(H.d3,H.cp)
s(H.d3,[H.fD,H.fE,H.fF,H.fG,H.fH,H.d4,H.fI])
t(P.iz,P.iQ)
t(P.ix,P.iE)
t(P.bT,P.hj)
t(P.eS,P.bS)
s(P.bT,[P.f9,P.hV])
t(P.hU,P.eS)
s(P.T,[P.w,P.y])
s(P.at,[P.bu,P.fb])
s(W.d,[W.x,W.f_,W.aF,W.cq,W.aI,W.ap,W.cs,W.i6,W.cj,P.ew,P.bl])
s(W.x,[W.J,W.b0,W.bW,W.ck])
s(W.J,[W.q,P.m])
s(W.q,[W.cC,W.er,W.bO,W.b_,W.bm,W.af,W.f3,W.cS,W.h2,W.bx,W.dh,W.di,W.hn,W.cc])
s(W.av,[W.bU,W.eE,W.eF])
t(W.eC,W.aw)
t(W.bV,W.dw)
t(W.dz,W.dy)
t(W.cN,W.dz)
t(W.dB,W.dA)
t(W.eM,W.dB)
t(W.ax,W.cE)
t(W.dE,W.dD)
t(W.eZ,W.dE)
t(W.dG,W.dF)
t(W.bo,W.dG)
t(W.cT,W.bW)
t(W.bc,W.l)
s(W.bc,[W.aC,W.X,W.aq])
t(W.fx,W.dL)
t(W.fz,W.dM)
t(W.dO,W.dN)
t(W.fB,W.dO)
t(W.dR,W.dQ)
t(W.c5,W.dR)
t(W.dV,W.dU)
t(W.fS,W.dV)
t(W.h_,W.dW)
t(W.cr,W.cq)
t(W.hc,W.cr)
t(W.dZ,W.dY)
t(W.hd,W.dZ)
t(W.hg,W.e2)
t(W.e6,W.e5)
t(W.hp,W.e6)
t(W.ct,W.cs)
t(W.hq,W.ct)
t(W.e9,W.e8)
t(W.hx,W.e9)
t(W.aN,W.X)
t(W.ee,W.ed)
t(W.ig,W.ee)
t(W.dx,W.cO)
t(W.eg,W.ef)
t(W.iv,W.eg)
t(W.ei,W.eh)
t(W.dP,W.ei)
t(W.ek,W.ej)
t(W.iH,W.ek)
t(W.em,W.el)
t(W.iI,W.em)
t(W.ih,W.id)
t(W.ii,P.hi)
t(W.jn,W.ii)
t(W.ij,P.cb)
t(W.iK,W.dX)
t(P.a7,P.iy)
t(P.dI,P.dH)
t(P.fk,P.dI)
t(P.dT,P.dS)
t(P.fN,P.dT)
t(P.c7,P.m)
t(P.e4,P.e3)
t(P.hm,P.e4)
t(P.eb,P.ea)
t(P.hz,P.eb)
t(P.eu,P.dv)
t(P.fO,P.bl)
t(P.e0,P.e_)
t(P.he,P.e0)
s(E.ex,[Z.cG,A.c8])
s(D.D,[D.cU,D.cV,D.P])
t(U.a4,D.eA)
s(U.a4,[U.cK,U.dd])
t(U.c_,O.U)
t(A.eK,A.c8)
s(A.dm,[A.hE,A.hH,A.hI,A.hK,A.hF,A.cf,A.hG,A.cg,A.hJ,A.hM,A.hN,A.ch,A.hO,A.hP])
t(F.hb,F.eY)
t(F.hD,F.fl)
t(F.i1,F.i2)
t(F.fL,F.i3)
t(O.eJ,O.by)
s(V.d1,[V.a5,V.ce])
t(X.f5,X.dj)
s(V.b1,[V.eH,V.f6,V.f7,V.fR])
u(H.dp,H.dq)
u(H.cm,P.t)
u(H.cn,H.bn)
u(H.co,P.t)
u(H.cp,H.bn)
u(P.dK,P.t)
u(W.dw,W.eD)
u(W.dy,P.t)
u(W.dz,W.v)
u(W.dA,P.t)
u(W.dB,W.v)
u(W.dD,P.t)
u(W.dE,W.v)
u(W.dF,P.t)
u(W.dG,W.v)
u(W.dL,P.W)
u(W.dM,P.W)
u(W.dN,P.t)
u(W.dO,W.v)
u(W.dQ,P.t)
u(W.dR,W.v)
u(W.dU,P.t)
u(W.dV,W.v)
u(W.dW,P.W)
u(W.cq,P.t)
u(W.cr,W.v)
u(W.dY,P.t)
u(W.dZ,W.v)
u(W.e2,P.W)
u(W.e5,P.t)
u(W.e6,W.v)
u(W.cs,P.t)
u(W.ct,W.v)
u(W.e8,P.t)
u(W.e9,W.v)
u(W.ed,P.t)
u(W.ee,W.v)
u(W.ef,P.t)
u(W.eg,W.v)
u(W.eh,P.t)
u(W.ei,W.v)
u(W.ej,P.t)
u(W.ek,W.v)
u(W.el,P.t)
u(W.em,W.v)
u(P.dH,P.t)
u(P.dI,W.v)
u(P.dS,P.t)
u(P.dT,W.v)
u(P.e3,P.t)
u(P.e4,W.v)
u(P.ea,P.t)
u(P.eb,W.v)
u(P.dv,P.W)
u(P.e_,P.t)
u(P.e0,W.v)})();(function constants(){var u=hunkHelpers.makeConstList
C.j=W.b_.prototype
C.C=W.bm.prototype
C.e=W.af.prototype
C.D=W.cM.prototype
C.F=W.cS.prototype
C.r=W.cT.prototype
C.H=J.a.prototype
C.a=J.aA.prototype
C.h=J.cW.prototype
C.c=J.bp.prototype
C.d=J.b8.prototype
C.O=J.b9.prototype
C.S=W.c5.prototype
C.w=J.fQ.prototype
C.x=W.da.prototype
C.b=P.bv.prototype
C.o=W.bx.prototype
C.k=W.dh.prototype
C.i=W.di.prototype
C.p=J.bd.prototype
C.y=W.aN.prototype
C.z=W.cj.prototype
C.A=new P.fP()
C.B=new P.hV()
C.f=new P.iz()
C.l=new P.aQ(0)
C.E=new P.aQ(5e6)
C.G=new P.fa("element",!0,!1,!1,!1)
C.I=function(hooks) {
  if (typeof dartExperimentalFixupGetTag != "function") return hooks;
  hooks.getTag = dartExperimentalFixupGetTag(hooks.getTag);
}
C.J=function(hooks) {
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

C.K=function(getTagFallback) {
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
C.L=function() {
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
C.M=function(hooks) {
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
C.N=function(hooks) {
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
C.P=H.c(u(["*::class","*::dir","*::draggable","*::hidden","*::id","*::inert","*::itemprop","*::itemref","*::itemscope","*::lang","*::spellcheck","*::title","*::translate","A::accesskey","A::coords","A::hreflang","A::name","A::shape","A::tabindex","A::target","A::type","AREA::accesskey","AREA::alt","AREA::coords","AREA::nohref","AREA::shape","AREA::tabindex","AREA::target","AUDIO::controls","AUDIO::loop","AUDIO::mediagroup","AUDIO::muted","AUDIO::preload","BDO::dir","BODY::alink","BODY::bgcolor","BODY::link","BODY::text","BODY::vlink","BR::clear","BUTTON::accesskey","BUTTON::disabled","BUTTON::name","BUTTON::tabindex","BUTTON::type","BUTTON::value","CANVAS::height","CANVAS::width","CAPTION::align","COL::align","COL::char","COL::charoff","COL::span","COL::valign","COL::width","COLGROUP::align","COLGROUP::char","COLGROUP::charoff","COLGROUP::span","COLGROUP::valign","COLGROUP::width","COMMAND::checked","COMMAND::command","COMMAND::disabled","COMMAND::label","COMMAND::radiogroup","COMMAND::type","DATA::value","DEL::datetime","DETAILS::open","DIR::compact","DIV::align","DL::compact","FIELDSET::disabled","FONT::color","FONT::face","FONT::size","FORM::accept","FORM::autocomplete","FORM::enctype","FORM::method","FORM::name","FORM::novalidate","FORM::target","FRAME::name","H1::align","H2::align","H3::align","H4::align","H5::align","H6::align","HR::align","HR::noshade","HR::size","HR::width","HTML::version","IFRAME::align","IFRAME::frameborder","IFRAME::height","IFRAME::marginheight","IFRAME::marginwidth","IFRAME::width","IMG::align","IMG::alt","IMG::border","IMG::height","IMG::hspace","IMG::ismap","IMG::name","IMG::usemap","IMG::vspace","IMG::width","INPUT::accept","INPUT::accesskey","INPUT::align","INPUT::alt","INPUT::autocomplete","INPUT::autofocus","INPUT::checked","INPUT::disabled","INPUT::inputmode","INPUT::ismap","INPUT::list","INPUT::max","INPUT::maxlength","INPUT::min","INPUT::multiple","INPUT::name","INPUT::placeholder","INPUT::readonly","INPUT::required","INPUT::size","INPUT::step","INPUT::tabindex","INPUT::type","INPUT::usemap","INPUT::value","INS::datetime","KEYGEN::disabled","KEYGEN::keytype","KEYGEN::name","LABEL::accesskey","LABEL::for","LEGEND::accesskey","LEGEND::align","LI::type","LI::value","LINK::sizes","MAP::name","MENU::compact","MENU::label","MENU::type","METER::high","METER::low","METER::max","METER::min","METER::value","OBJECT::typemustmatch","OL::compact","OL::reversed","OL::start","OL::type","OPTGROUP::disabled","OPTGROUP::label","OPTION::disabled","OPTION::label","OPTION::selected","OPTION::value","OUTPUT::for","OUTPUT::name","P::align","PRE::width","PROGRESS::max","PROGRESS::min","PROGRESS::value","SELECT::autocomplete","SELECT::disabled","SELECT::multiple","SELECT::name","SELECT::required","SELECT::size","SELECT::tabindex","SOURCE::type","TABLE::align","TABLE::bgcolor","TABLE::border","TABLE::cellpadding","TABLE::cellspacing","TABLE::frame","TABLE::rules","TABLE::summary","TABLE::width","TBODY::align","TBODY::char","TBODY::charoff","TBODY::valign","TD::abbr","TD::align","TD::axis","TD::bgcolor","TD::char","TD::charoff","TD::colspan","TD::headers","TD::height","TD::nowrap","TD::rowspan","TD::scope","TD::valign","TD::width","TEXTAREA::accesskey","TEXTAREA::autocomplete","TEXTAREA::cols","TEXTAREA::disabled","TEXTAREA::inputmode","TEXTAREA::name","TEXTAREA::placeholder","TEXTAREA::readonly","TEXTAREA::required","TEXTAREA::rows","TEXTAREA::tabindex","TEXTAREA::wrap","TFOOT::align","TFOOT::char","TFOOT::charoff","TFOOT::valign","TH::abbr","TH::align","TH::axis","TH::bgcolor","TH::char","TH::charoff","TH::colspan","TH::headers","TH::height","TH::nowrap","TH::rowspan","TH::scope","TH::valign","TH::width","THEAD::align","THEAD::char","THEAD::charoff","THEAD::valign","TR::align","TR::bgcolor","TR::char","TR::charoff","TR::valign","TRACK::default","TRACK::kind","TRACK::label","TRACK::srclang","UL::compact","UL::type","VIDEO::controls","VIDEO::height","VIDEO::loop","VIDEO::mediagroup","VIDEO::muted","VIDEO::preload","VIDEO::width"]),[P.e])
C.Q=H.c(u(["HEAD","AREA","BASE","BASEFONT","BR","COL","COLGROUP","EMBED","FRAME","FRAMESET","HR","IMAGE","IMG","INPUT","ISINDEX","LINK","META","PARAM","SOURCE","STYLE","TITLE","WBR"]),[P.e])
C.R=H.c(u([]),[P.e])
C.v=H.c(u([0,0,65498,45055,65535,34815,65534,18431]),[P.y])
C.m=H.c(u(["bind","if","ref","repeat","syntax"]),[P.e])
C.n=H.c(u(["A::href","AREA::href","BLOCKQUOTE::cite","BODY::background","COMMAND::icon","DEL::cite","FORM::action","IMG::src","INPUT::src","INS::cite","Q::cite","VIDEO::poster"]),[P.e])
C.q=new P.hU(!1)})();(function staticFields(){$.au=0
$.bQ=null
$.jN=null
$.jq=!1
$.kE=null
$.kz=null
$.kJ=null
$.iW=null
$.j2=null
$.jA=null
$.bA=null
$.cu=null
$.cv=null
$.jr=!1
$.N=C.f
$.aR=null
$.jd=null
$.jV=null
$.jU=null
$.k_=null
$.k4=null
$.k5=null
$.k9=null
$.ki=null
$.kn=null
$.kk=null
$.kl=null
$.km=null
$.kj=null
$.lh="uniform mat4 viewObjMat;                    \nuniform mat4 projMat;                       \n                                            \nattribute vec3 posAttr;                     \n                                            \nvarying float depth;                        \n                                            \nvoid main()                                 \n{                                           \n  vec4 pos = viewObjMat*vec4(posAttr, 1.0); \n  depth = pos.z;                            \n  gl_Position = projMat*pos;                \n}                                           \n"
$.lg="precision mediump float;                                  \n                                                          \nuniform vec3 objClr;                                      \nuniform vec3 fogClr;                                      \nuniform float fogStart;                                   \nuniform float fogStop;                                    \n                                                          \nvarying float depth;                                      \n                                                          \nvoid main()                                               \n{                                                         \n   float factor = (depth-fogStop)/(fogStart-fogStop);     \n   factor = clamp(factor, 0.0, 1.0);                      \n   gl_FragColor = vec4(mix(fogClr, objClr, factor), 1.0); \n}                                                         \n"
$.k3=null})();(function lazyInitializers(){var u=hunkHelpers.lazy
u($,"mC","kM",function(){return H.kD("_$dart_dartClosure")})
u($,"mD","jG",function(){return H.kD("_$dart_js")})
u($,"mI","kN",function(){return H.aL(H.hB({
toString:function(){return"$receiver$"}}))})
u($,"mJ","kO",function(){return H.aL(H.hB({$method$:null,
toString:function(){return"$receiver$"}}))})
u($,"mK","kP",function(){return H.aL(H.hB(null))})
u($,"mL","kQ",function(){return H.aL(function(){var $argumentsExpr$='$arguments$'
try{null.$method$($argumentsExpr$)}catch(t){return t.message}}())})
u($,"mO","kT",function(){return H.aL(H.hB(void 0))})
u($,"mP","kU",function(){return H.aL(function(){var $argumentsExpr$='$arguments$'
try{(void 0).$method$($argumentsExpr$)}catch(t){return t.message}}())})
u($,"mN","kS",function(){return H.aL(H.kg(null))})
u($,"mM","kR",function(){return H.aL(function(){try{null.$method$}catch(t){return t.message}}())})
u($,"mR","kW",function(){return H.aL(H.kg(void 0))})
u($,"mQ","kV",function(){return H.aL(function(){try{(void 0).$method$}catch(t){return t.message}}())})
u($,"n5","jH",function(){return P.lM()})
u($,"n9","cA",function(){return[]})
u($,"n8","l0",function(){return P.lD("^[\\-\\.0-9A-Z_a-z~]*$",!0,!1)})
u($,"n6","l_",function(){return P.jY(["A","ABBR","ACRONYM","ADDRESS","AREA","ARTICLE","ASIDE","AUDIO","B","BDI","BDO","BIG","BLOCKQUOTE","BR","BUTTON","CANVAS","CAPTION","CENTER","CITE","CODE","COL","COLGROUP","COMMAND","DATA","DATALIST","DD","DEL","DETAILS","DFN","DIR","DIV","DL","DT","EM","FIELDSET","FIGCAPTION","FIGURE","FONT","FOOTER","FORM","H1","H2","H3","H4","H5","H6","HEADER","HGROUP","HR","I","IFRAME","IMG","INPUT","INS","KBD","LABEL","LEGEND","LI","MAP","MARK","MENU","METER","NAV","NOBR","OL","OPTGROUP","OPTION","OUTPUT","P","PRE","PROGRESS","Q","S","SAMP","SECTION","SELECT","SMALL","SOURCE","SPAN","STRIKE","STRONG","SUB","SUMMARY","SUP","TABLE","TBODY","TD","TEXTAREA","TFOOT","TH","THEAD","TIME","TR","TRACK","TT","U","UL","VAR","VIDEO","WBR"],P.e)})
u($,"n7","jI",function(){return P.jX(P.e,P.b7)})
u($,"mZ","kZ",function(){return Z.ak(0)})
u($,"mT","kX",function(){return Z.ak(511)})
u($,"n0","aZ",function(){return Z.ak(1)})
u($,"n_","bJ",function(){return Z.ak(2)})
u($,"mV","bI",function(){return Z.ak(4)})
u($,"n1","bK",function(){return Z.ak(8)})
u($,"n2","bL",function(){return Z.ak(16)})
u($,"mW","cy",function(){return Z.ak(32)})
u($,"mX","cz",function(){return Z.ak(64)})
u($,"mY","kY",function(){return Z.ak(96)})
u($,"n3","bM",function(){return Z.ak(128)})
u($,"mU","bH",function(){return Z.ak(256)})
u($,"mB","kL",function(){return new V.eT(1e-9)})
u($,"mA","O",function(){return $.kL()})})()
var v={mangledGlobalNames:{y:"int",w:"double",T:"num",e:"String",K:"bool",C:"Null",b:"List"},mangledNames:{},getTypeFromName:getGlobalFromName,metadata:[],types:[{func:1,ret:P.C},{func:1,ret:-1},{func:1,ret:-1,opt:[D.D]},{func:1,ret:-1,args:[W.X]},{func:1,ret:-1,args:[P.e,,]},{func:1,ret:-1,args:[P.y,[P.h,E.a0]]},{func:1,ret:P.C,args:[D.D]},{func:1,ret:-1,args:[W.l]},{func:1,ret:-1,args:[W.aq]},{func:1,ret:P.C,args:[F.V]},{func:1,ret:-1,args:[{func:1,ret:-1}]},{func:1,ret:P.C,args:[,,]},{func:1,ret:P.e,args:[P.y]},{func:1,ret:P.K,args:[W.x]},{func:1,ret:P.C,args:[,]},{func:1,args:[,]},{func:1,ret:P.K,args:[W.ab]},{func:1,ret:P.K,args:[P.e]},{func:1,ret:P.C,args:[{func:1,ret:-1,args:[D.D]}]},{func:1,ret:P.K,args:[W.J,P.e,P.e,W.be]},{func:1,ret:-1,args:[W.aC]},{func:1,ret:P.w},{func:1,ret:-1,args:[P.y,[P.h,U.a4]]},{func:1,ret:[P.al,,],args:[,]},{func:1,args:[W.l]},{func:1,ret:P.e,args:[P.e]},{func:1,ret:-1,args:[W.x,W.x]},{func:1,ret:-1,args:[P.e,P.e]},{func:1,ret:P.C,args:[{func:1,ret:-1}]},{func:1,args:[,P.e]},{func:1,args:[P.e]},{func:1,ret:P.C,args:[P.T]},{func:1,ret:P.C,args:[,],opt:[P.a8]},{func:1,ret:-1,args:[W.aN]},{func:1,ret:V.ag,args:[P.w]},{func:1,ret:P.C,args:[F.aj,P.w,P.w]},{func:1,ret:P.C,args:[P.aJ]},{func:1,ret:P.C,args:[W.l]},{func:1,ret:P.K,args:[V.b1]},{func:1,ret:W.J,args:[W.x]}],interceptorsByTag:null,leafTags:null};(function nativeSupport(){!function(){var u=function(a){var o={}
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
hunkHelpers.setOrUpdateInterceptorsByTag({ArrayBuffer:J.a,AnimationEffectReadOnly:J.a,AnimationEffectTiming:J.a,AnimationEffectTimingReadOnly:J.a,AnimationTimeline:J.a,AnimationWorkletGlobalScope:J.a,AuthenticatorAssertionResponse:J.a,AuthenticatorAttestationResponse:J.a,AuthenticatorResponse:J.a,BackgroundFetchFetch:J.a,BackgroundFetchManager:J.a,BackgroundFetchSettledFetch:J.a,BarProp:J.a,BarcodeDetector:J.a,BluetoothRemoteGATTDescriptor:J.a,Body:J.a,BudgetState:J.a,CacheStorage:J.a,CanvasGradient:J.a,CanvasPattern:J.a,CanvasRenderingContext2D:J.a,Client:J.a,Clients:J.a,CookieStore:J.a,Coordinates:J.a,Credential:J.a,CredentialUserData:J.a,CredentialsContainer:J.a,Crypto:J.a,CryptoKey:J.a,CSS:J.a,CSSVariableReferenceValue:J.a,CustomElementRegistry:J.a,DataTransfer:J.a,DataTransferItem:J.a,DeprecatedStorageInfo:J.a,DeprecatedStorageQuota:J.a,DeprecationReport:J.a,DetectedBarcode:J.a,DetectedFace:J.a,DetectedText:J.a,DeviceAcceleration:J.a,DeviceRotationRate:J.a,DirectoryEntry:J.a,DirectoryReader:J.a,DocumentOrShadowRoot:J.a,DocumentTimeline:J.a,DOMError:J.a,Iterator:J.a,DOMMatrix:J.a,DOMMatrixReadOnly:J.a,DOMParser:J.a,DOMPoint:J.a,DOMPointReadOnly:J.a,DOMQuad:J.a,DOMStringMap:J.a,Entry:J.a,External:J.a,FaceDetector:J.a,FederatedCredential:J.a,FileEntry:J.a,DOMFileSystem:J.a,FontFace:J.a,FontFaceSource:J.a,FormData:J.a,GamepadButton:J.a,GamepadPose:J.a,Geolocation:J.a,Position:J.a,Headers:J.a,HTMLHyperlinkElementUtils:J.a,IdleDeadline:J.a,ImageBitmap:J.a,ImageBitmapRenderingContext:J.a,ImageCapture:J.a,ImageData:J.a,InputDeviceCapabilities:J.a,IntersectionObserver:J.a,IntersectionObserverEntry:J.a,InterventionReport:J.a,KeyframeEffect:J.a,KeyframeEffectReadOnly:J.a,MediaCapabilities:J.a,MediaCapabilitiesInfo:J.a,MediaDeviceInfo:J.a,MediaError:J.a,MediaKeyStatusMap:J.a,MediaKeySystemAccess:J.a,MediaKeys:J.a,MediaKeysPolicy:J.a,MediaMetadata:J.a,MediaSession:J.a,MediaSettingsRange:J.a,MemoryInfo:J.a,MessageChannel:J.a,Metadata:J.a,MutationObserver:J.a,WebKitMutationObserver:J.a,MutationRecord:J.a,NavigationPreloadManager:J.a,Navigator:J.a,NavigatorAutomationInformation:J.a,NavigatorConcurrentHardware:J.a,NavigatorCookies:J.a,NavigatorUserMediaError:J.a,NodeFilter:J.a,NodeIterator:J.a,NonDocumentTypeChildNode:J.a,NonElementParentNode:J.a,NoncedElement:J.a,OffscreenCanvasRenderingContext2D:J.a,OverconstrainedError:J.a,PaintRenderingContext2D:J.a,PaintSize:J.a,PaintWorkletGlobalScope:J.a,PasswordCredential:J.a,Path2D:J.a,PaymentAddress:J.a,PaymentInstruments:J.a,PaymentManager:J.a,PaymentResponse:J.a,PerformanceEntry:J.a,PerformanceLongTaskTiming:J.a,PerformanceMark:J.a,PerformanceMeasure:J.a,PerformanceNavigation:J.a,PerformanceNavigationTiming:J.a,PerformanceObserver:J.a,PerformanceObserverEntryList:J.a,PerformancePaintTiming:J.a,PerformanceResourceTiming:J.a,PerformanceServerTiming:J.a,PerformanceTiming:J.a,Permissions:J.a,PhotoCapabilities:J.a,PositionError:J.a,Presentation:J.a,PresentationReceiver:J.a,PublicKeyCredential:J.a,PushManager:J.a,PushMessageData:J.a,PushSubscription:J.a,PushSubscriptionOptions:J.a,RelatedApplication:J.a,ReportBody:J.a,ReportingObserver:J.a,ResizeObserver:J.a,ResizeObserverEntry:J.a,RTCCertificate:J.a,RTCIceCandidate:J.a,mozRTCIceCandidate:J.a,RTCLegacyStatsReport:J.a,RTCRtpContributingSource:J.a,RTCRtpReceiver:J.a,RTCRtpSender:J.a,RTCSessionDescription:J.a,mozRTCSessionDescription:J.a,RTCStatsResponse:J.a,Screen:J.a,ScrollState:J.a,ScrollTimeline:J.a,Selection:J.a,SharedArrayBuffer:J.a,SpeechRecognitionAlternative:J.a,SpeechSynthesisVoice:J.a,StaticRange:J.a,StorageManager:J.a,StyleMedia:J.a,StylePropertyMap:J.a,StylePropertyMapReadonly:J.a,SyncManager:J.a,TaskAttributionTiming:J.a,TextDetector:J.a,TextMetrics:J.a,TrackDefault:J.a,TreeWalker:J.a,TrustedHTML:J.a,TrustedScriptURL:J.a,TrustedURL:J.a,UnderlyingSourceBase:J.a,URLSearchParams:J.a,VRCoordinateSystem:J.a,VRDisplayCapabilities:J.a,VREyeParameters:J.a,VRFrameData:J.a,VRFrameOfReference:J.a,VRPose:J.a,VRStageBounds:J.a,VRStageBoundsPoint:J.a,VRStageParameters:J.a,ValidityState:J.a,VideoPlaybackQuality:J.a,VideoTrack:J.a,VTTRegion:J.a,WindowClient:J.a,WorkletAnimation:J.a,WorkletGlobalScope:J.a,XPathEvaluator:J.a,XPathExpression:J.a,XPathNSResolver:J.a,XPathResult:J.a,XMLSerializer:J.a,XSLTProcessor:J.a,Bluetooth:J.a,BluetoothCharacteristicProperties:J.a,BluetoothRemoteGATTServer:J.a,BluetoothRemoteGATTService:J.a,BluetoothUUID:J.a,BudgetService:J.a,Cache:J.a,DOMFileSystemSync:J.a,DirectoryEntrySync:J.a,DirectoryReaderSync:J.a,EntrySync:J.a,FileEntrySync:J.a,FileReaderSync:J.a,FileWriterSync:J.a,HTMLAllCollection:J.a,Mojo:J.a,MojoHandle:J.a,MojoWatcher:J.a,NFC:J.a,PagePopupController:J.a,Report:J.a,Request:J.a,Response:J.a,SubtleCrypto:J.a,USBAlternateInterface:J.a,USBConfiguration:J.a,USBDevice:J.a,USBEndpoint:J.a,USBInTransferResult:J.a,USBInterface:J.a,USBIsochronousInTransferPacket:J.a,USBIsochronousInTransferResult:J.a,USBIsochronousOutTransferPacket:J.a,USBIsochronousOutTransferResult:J.a,USBOutTransferResult:J.a,WorkerLocation:J.a,WorkerNavigator:J.a,Worklet:J.a,IDBCursor:J.a,IDBCursorWithValue:J.a,IDBFactory:J.a,IDBIndex:J.a,IDBKeyRange:J.a,IDBObjectStore:J.a,IDBObservation:J.a,IDBObserver:J.a,IDBObserverChanges:J.a,SVGAngle:J.a,SVGAnimatedAngle:J.a,SVGAnimatedBoolean:J.a,SVGAnimatedEnumeration:J.a,SVGAnimatedInteger:J.a,SVGAnimatedLength:J.a,SVGAnimatedLengthList:J.a,SVGAnimatedNumber:J.a,SVGAnimatedNumberList:J.a,SVGAnimatedPreserveAspectRatio:J.a,SVGAnimatedRect:J.a,SVGAnimatedString:J.a,SVGAnimatedTransformList:J.a,SVGMatrix:J.a,SVGPoint:J.a,SVGPreserveAspectRatio:J.a,SVGRect:J.a,SVGUnitTypes:J.a,AudioListener:J.a,AudioParam:J.a,AudioTrack:J.a,AudioWorkletGlobalScope:J.a,AudioWorkletProcessor:J.a,PeriodicWave:J.a,WebGLActiveInfo:J.a,ANGLEInstancedArrays:J.a,ANGLE_instanced_arrays:J.a,WebGLCanvas:J.a,WebGLColorBufferFloat:J.a,WebGLCompressedTextureASTC:J.a,WebGLCompressedTextureATC:J.a,WEBGL_compressed_texture_atc:J.a,WebGLCompressedTextureETC1:J.a,WEBGL_compressed_texture_etc1:J.a,WebGLCompressedTextureETC:J.a,WebGLCompressedTexturePVRTC:J.a,WEBGL_compressed_texture_pvrtc:J.a,WebGLCompressedTextureS3TC:J.a,WEBGL_compressed_texture_s3tc:J.a,WebGLCompressedTextureS3TCsRGB:J.a,WebGLDebugRendererInfo:J.a,WEBGL_debug_renderer_info:J.a,WebGLDebugShaders:J.a,WEBGL_debug_shaders:J.a,WebGLDepthTexture:J.a,WEBGL_depth_texture:J.a,WebGLDrawBuffers:J.a,WEBGL_draw_buffers:J.a,EXTsRGB:J.a,EXT_sRGB:J.a,EXTBlendMinMax:J.a,EXT_blend_minmax:J.a,EXTColorBufferFloat:J.a,EXTColorBufferHalfFloat:J.a,EXTDisjointTimerQuery:J.a,EXTDisjointTimerQueryWebGL2:J.a,EXTFragDepth:J.a,EXT_frag_depth:J.a,EXTShaderTextureLOD:J.a,EXT_shader_texture_lod:J.a,EXTTextureFilterAnisotropic:J.a,EXT_texture_filter_anisotropic:J.a,WebGLGetBufferSubDataAsync:J.a,WebGLLoseContext:J.a,WebGLExtensionLoseContext:J.a,WEBGL_lose_context:J.a,OESElementIndexUint:J.a,OES_element_index_uint:J.a,OESStandardDerivatives:J.a,OES_standard_derivatives:J.a,OESTextureFloat:J.a,OES_texture_float:J.a,OESTextureFloatLinear:J.a,OES_texture_float_linear:J.a,OESTextureHalfFloat:J.a,OES_texture_half_float:J.a,OESTextureHalfFloatLinear:J.a,OES_texture_half_float_linear:J.a,OESVertexArrayObject:J.a,OES_vertex_array_object:J.a,WebGLQuery:J.a,WebGLRenderbuffer:J.a,WebGLRenderingContext:J.a,WebGLSampler:J.a,WebGLShaderPrecisionFormat:J.a,WebGLSync:J.a,WebGLTexture:J.a,WebGLTimerQueryEXT:J.a,WebGLTransformFeedback:J.a,WebGLVertexArrayObject:J.a,WebGLVertexArrayObjectOES:J.a,WebGL:J.a,WebGL2RenderingContextBase:J.a,Database:J.a,SQLError:J.a,SQLResultSet:J.a,SQLTransaction:J.a,DataView:H.c4,ArrayBufferView:H.c4,Float32Array:H.c3,Float64Array:H.c3,Int16Array:H.fD,Int32Array:H.fE,Int8Array:H.fF,Uint16Array:H.fG,Uint32Array:H.fH,Uint8ClampedArray:H.d4,CanvasPixelArray:H.d4,Uint8Array:H.fI,HTMLAudioElement:W.q,HTMLBRElement:W.q,HTMLButtonElement:W.q,HTMLContentElement:W.q,HTMLDListElement:W.q,HTMLDataElement:W.q,HTMLDataListElement:W.q,HTMLDetailsElement:W.q,HTMLDialogElement:W.q,HTMLEmbedElement:W.q,HTMLFieldSetElement:W.q,HTMLHRElement:W.q,HTMLHeadingElement:W.q,HTMLHtmlElement:W.q,HTMLIFrameElement:W.q,HTMLImageElement:W.q,HTMLInputElement:W.q,HTMLLIElement:W.q,HTMLLabelElement:W.q,HTMLLegendElement:W.q,HTMLLinkElement:W.q,HTMLMapElement:W.q,HTMLMediaElement:W.q,HTMLMenuElement:W.q,HTMLMetaElement:W.q,HTMLMeterElement:W.q,HTMLModElement:W.q,HTMLOListElement:W.q,HTMLObjectElement:W.q,HTMLOptGroupElement:W.q,HTMLOptionElement:W.q,HTMLOutputElement:W.q,HTMLParagraphElement:W.q,HTMLParamElement:W.q,HTMLPictureElement:W.q,HTMLPreElement:W.q,HTMLProgressElement:W.q,HTMLQuoteElement:W.q,HTMLScriptElement:W.q,HTMLShadowElement:W.q,HTMLSlotElement:W.q,HTMLSourceElement:W.q,HTMLSpanElement:W.q,HTMLStyleElement:W.q,HTMLTableCaptionElement:W.q,HTMLTableColElement:W.q,HTMLTextAreaElement:W.q,HTMLTimeElement:W.q,HTMLTitleElement:W.q,HTMLTrackElement:W.q,HTMLUListElement:W.q,HTMLUnknownElement:W.q,HTMLVideoElement:W.q,HTMLDirectoryElement:W.q,HTMLFontElement:W.q,HTMLFrameElement:W.q,HTMLFrameSetElement:W.q,HTMLMarqueeElement:W.q,HTMLElement:W.q,AccessibleNodeList:W.eq,HTMLAnchorElement:W.cC,HTMLAreaElement:W.er,HTMLBaseElement:W.bO,Blob:W.cE,HTMLBodyElement:W.b_,HTMLCanvasElement:W.bm,CDATASection:W.b0,CharacterData:W.b0,Comment:W.b0,ProcessingInstruction:W.b0,Text:W.b0,CSSNumericValue:W.bU,CSSUnitValue:W.bU,CSSPerspective:W.eC,CSSCharsetRule:W.I,CSSConditionRule:W.I,CSSFontFaceRule:W.I,CSSGroupingRule:W.I,CSSImportRule:W.I,CSSKeyframeRule:W.I,MozCSSKeyframeRule:W.I,WebKitCSSKeyframeRule:W.I,CSSKeyframesRule:W.I,MozCSSKeyframesRule:W.I,WebKitCSSKeyframesRule:W.I,CSSMediaRule:W.I,CSSNamespaceRule:W.I,CSSPageRule:W.I,CSSRule:W.I,CSSStyleRule:W.I,CSSSupportsRule:W.I,CSSViewportRule:W.I,CSSStyleDeclaration:W.bV,MSStyleCSSProperties:W.bV,CSS2Properties:W.bV,CSSImageValue:W.av,CSSKeywordValue:W.av,CSSPositionValue:W.av,CSSResourceValue:W.av,CSSURLImageValue:W.av,CSSStyleValue:W.av,CSSMatrixComponent:W.aw,CSSRotation:W.aw,CSSScale:W.aw,CSSSkew:W.aw,CSSTranslation:W.aw,CSSTransformComponent:W.aw,CSSTransformValue:W.eE,CSSUnparsedValue:W.eF,DataTransferItemList:W.eI,HTMLDivElement:W.af,XMLDocument:W.bW,Document:W.bW,DOMException:W.eL,DOMImplementation:W.cM,ClientRectList:W.cN,DOMRectList:W.cN,DOMRectReadOnly:W.cO,DOMStringList:W.eM,DOMTokenList:W.eN,Element:W.J,AbortPaymentEvent:W.l,AnimationEvent:W.l,AnimationPlaybackEvent:W.l,ApplicationCacheErrorEvent:W.l,BackgroundFetchClickEvent:W.l,BackgroundFetchEvent:W.l,BackgroundFetchFailEvent:W.l,BackgroundFetchedEvent:W.l,BeforeInstallPromptEvent:W.l,BeforeUnloadEvent:W.l,BlobEvent:W.l,CanMakePaymentEvent:W.l,ClipboardEvent:W.l,CloseEvent:W.l,CustomEvent:W.l,DeviceMotionEvent:W.l,DeviceOrientationEvent:W.l,ErrorEvent:W.l,ExtendableEvent:W.l,ExtendableMessageEvent:W.l,FetchEvent:W.l,FontFaceSetLoadEvent:W.l,ForeignFetchEvent:W.l,GamepadEvent:W.l,HashChangeEvent:W.l,InstallEvent:W.l,MediaEncryptedEvent:W.l,MediaKeyMessageEvent:W.l,MediaQueryListEvent:W.l,MediaStreamEvent:W.l,MediaStreamTrackEvent:W.l,MessageEvent:W.l,MIDIConnectionEvent:W.l,MIDIMessageEvent:W.l,MutationEvent:W.l,NotificationEvent:W.l,PageTransitionEvent:W.l,PaymentRequestEvent:W.l,PaymentRequestUpdateEvent:W.l,PopStateEvent:W.l,PresentationConnectionAvailableEvent:W.l,PresentationConnectionCloseEvent:W.l,ProgressEvent:W.l,PromiseRejectionEvent:W.l,PushEvent:W.l,RTCDataChannelEvent:W.l,RTCDTMFToneChangeEvent:W.l,RTCPeerConnectionIceEvent:W.l,RTCTrackEvent:W.l,SecurityPolicyViolationEvent:W.l,SensorErrorEvent:W.l,SpeechRecognitionError:W.l,SpeechRecognitionEvent:W.l,SpeechSynthesisEvent:W.l,StorageEvent:W.l,SyncEvent:W.l,TrackEvent:W.l,TransitionEvent:W.l,WebKitTransitionEvent:W.l,VRDeviceEvent:W.l,VRDisplayEvent:W.l,VRSessionEvent:W.l,MojoInterfaceRequestEvent:W.l,ResourceProgressEvent:W.l,USBConnectionEvent:W.l,IDBVersionChangeEvent:W.l,AudioProcessingEvent:W.l,OfflineAudioCompletionEvent:W.l,WebGLContextEvent:W.l,Event:W.l,InputEvent:W.l,AbsoluteOrientationSensor:W.d,Accelerometer:W.d,AccessibleNode:W.d,AmbientLightSensor:W.d,Animation:W.d,ApplicationCache:W.d,DOMApplicationCache:W.d,OfflineResourceList:W.d,BackgroundFetchRegistration:W.d,BatteryManager:W.d,BroadcastChannel:W.d,CanvasCaptureMediaStreamTrack:W.d,DedicatedWorkerGlobalScope:W.d,EventSource:W.d,FileReader:W.d,FontFaceSet:W.d,Gyroscope:W.d,XMLHttpRequest:W.d,XMLHttpRequestEventTarget:W.d,XMLHttpRequestUpload:W.d,LinearAccelerationSensor:W.d,Magnetometer:W.d,MediaDevices:W.d,MediaKeySession:W.d,MediaQueryList:W.d,MediaRecorder:W.d,MediaSource:W.d,MediaStream:W.d,MediaStreamTrack:W.d,MessagePort:W.d,MIDIAccess:W.d,MIDIInput:W.d,MIDIOutput:W.d,MIDIPort:W.d,NetworkInformation:W.d,Notification:W.d,OffscreenCanvas:W.d,OrientationSensor:W.d,PaymentRequest:W.d,Performance:W.d,PermissionStatus:W.d,PresentationAvailability:W.d,PresentationConnection:W.d,PresentationConnectionList:W.d,PresentationRequest:W.d,RelativeOrientationSensor:W.d,RemotePlayback:W.d,RTCDataChannel:W.d,DataChannel:W.d,RTCDTMFSender:W.d,RTCPeerConnection:W.d,webkitRTCPeerConnection:W.d,mozRTCPeerConnection:W.d,ScreenOrientation:W.d,Sensor:W.d,ServiceWorker:W.d,ServiceWorkerContainer:W.d,ServiceWorkerGlobalScope:W.d,ServiceWorkerRegistration:W.d,SharedWorker:W.d,SharedWorkerGlobalScope:W.d,SpeechRecognition:W.d,SpeechSynthesis:W.d,SpeechSynthesisUtterance:W.d,VR:W.d,VRDevice:W.d,VRDisplay:W.d,VRSession:W.d,VisualViewport:W.d,WebSocket:W.d,Worker:W.d,WorkerGlobalScope:W.d,WorkerPerformance:W.d,BluetoothDevice:W.d,BluetoothRemoteGATTCharacteristic:W.d,Clipboard:W.d,MojoInterfaceInterceptor:W.d,USB:W.d,IDBDatabase:W.d,IDBOpenDBRequest:W.d,IDBVersionChangeRequest:W.d,IDBRequest:W.d,IDBTransaction:W.d,AnalyserNode:W.d,RealtimeAnalyserNode:W.d,AudioBufferSourceNode:W.d,AudioDestinationNode:W.d,AudioNode:W.d,AudioScheduledSourceNode:W.d,AudioWorkletNode:W.d,BiquadFilterNode:W.d,ChannelMergerNode:W.d,AudioChannelMerger:W.d,ChannelSplitterNode:W.d,AudioChannelSplitter:W.d,ConstantSourceNode:W.d,ConvolverNode:W.d,DelayNode:W.d,DynamicsCompressorNode:W.d,GainNode:W.d,AudioGainNode:W.d,IIRFilterNode:W.d,MediaElementAudioSourceNode:W.d,MediaStreamAudioDestinationNode:W.d,MediaStreamAudioSourceNode:W.d,OscillatorNode:W.d,Oscillator:W.d,PannerNode:W.d,AudioPannerNode:W.d,webkitAudioPannerNode:W.d,ScriptProcessorNode:W.d,JavaScriptAudioNode:W.d,StereoPannerNode:W.d,WaveShaperNode:W.d,EventTarget:W.d,File:W.ax,FileList:W.eZ,FileWriter:W.f_,HTMLFormElement:W.f3,Gamepad:W.ay,HTMLHeadElement:W.cS,History:W.f8,HTMLCollection:W.bo,HTMLFormControlsCollection:W.bo,HTMLOptionsCollection:W.bo,HTMLDocument:W.cT,KeyboardEvent:W.aC,Location:W.d0,MediaList:W.fw,MIDIInputMap:W.fx,MIDIOutputMap:W.fz,MimeType:W.aD,MimeTypeArray:W.fB,PointerEvent:W.X,MouseEvent:W.X,DragEvent:W.X,DocumentFragment:W.x,ShadowRoot:W.x,DocumentType:W.x,Node:W.x,NodeList:W.c5,RadioNodeList:W.c5,Plugin:W.aE,PluginArray:W.fS,Range:W.da,RTCStatsReport:W.h_,HTMLSelectElement:W.h2,SourceBuffer:W.aF,SourceBufferList:W.hc,SpeechGrammar:W.aG,SpeechGrammarList:W.hd,SpeechRecognitionResult:W.aH,Storage:W.hg,CSSStyleSheet:W.ao,StyleSheet:W.ao,HTMLTableCellElement:W.bx,HTMLTableDataCellElement:W.bx,HTMLTableHeaderCellElement:W.bx,HTMLTableElement:W.dh,HTMLTableRowElement:W.di,HTMLTableSectionElement:W.hn,HTMLTemplateElement:W.cc,TextTrack:W.aI,TextTrackCue:W.ap,VTTCue:W.ap,TextTrackCueList:W.hp,TextTrackList:W.hq,TimeRanges:W.ht,Touch:W.aK,TouchEvent:W.aq,TouchList:W.hx,TrackDefaultList:W.hy,CompositionEvent:W.bc,FocusEvent:W.bc,TextEvent:W.bc,UIEvent:W.bc,URL:W.hT,VideoTrackList:W.i6,WheelEvent:W.aN,Window:W.cj,DOMWindow:W.cj,Attr:W.ck,CSSRuleList:W.ig,ClientRect:W.dx,DOMRect:W.dx,GamepadList:W.iv,NamedNodeMap:W.dP,MozNamedAttrMap:W.dP,SpeechRecognitionResultList:W.iH,StyleSheetList:W.iI,SVGLength:P.aT,SVGLengthList:P.fk,SVGNumber:P.aW,SVGNumberList:P.fN,SVGPointList:P.fT,SVGScriptElement:P.c7,SVGStringList:P.hm,SVGAElement:P.m,SVGAnimateElement:P.m,SVGAnimateMotionElement:P.m,SVGAnimateTransformElement:P.m,SVGAnimationElement:P.m,SVGCircleElement:P.m,SVGClipPathElement:P.m,SVGDefsElement:P.m,SVGDescElement:P.m,SVGDiscardElement:P.m,SVGEllipseElement:P.m,SVGFEBlendElement:P.m,SVGFEColorMatrixElement:P.m,SVGFEComponentTransferElement:P.m,SVGFECompositeElement:P.m,SVGFEConvolveMatrixElement:P.m,SVGFEDiffuseLightingElement:P.m,SVGFEDisplacementMapElement:P.m,SVGFEDistantLightElement:P.m,SVGFEFloodElement:P.m,SVGFEFuncAElement:P.m,SVGFEFuncBElement:P.m,SVGFEFuncGElement:P.m,SVGFEFuncRElement:P.m,SVGFEGaussianBlurElement:P.m,SVGFEImageElement:P.m,SVGFEMergeElement:P.m,SVGFEMergeNodeElement:P.m,SVGFEMorphologyElement:P.m,SVGFEOffsetElement:P.m,SVGFEPointLightElement:P.m,SVGFESpecularLightingElement:P.m,SVGFESpotLightElement:P.m,SVGFETileElement:P.m,SVGFETurbulenceElement:P.m,SVGFilterElement:P.m,SVGForeignObjectElement:P.m,SVGGElement:P.m,SVGGeometryElement:P.m,SVGGraphicsElement:P.m,SVGImageElement:P.m,SVGLineElement:P.m,SVGLinearGradientElement:P.m,SVGMarkerElement:P.m,SVGMaskElement:P.m,SVGMetadataElement:P.m,SVGPathElement:P.m,SVGPatternElement:P.m,SVGPolygonElement:P.m,SVGPolylineElement:P.m,SVGRadialGradientElement:P.m,SVGRectElement:P.m,SVGSetElement:P.m,SVGStopElement:P.m,SVGStyleElement:P.m,SVGSVGElement:P.m,SVGSwitchElement:P.m,SVGSymbolElement:P.m,SVGTSpanElement:P.m,SVGTextContentElement:P.m,SVGTextElement:P.m,SVGTextPathElement:P.m,SVGTextPositioningElement:P.m,SVGTitleElement:P.m,SVGUseElement:P.m,SVGViewElement:P.m,SVGGradientElement:P.m,SVGComponentTransferFunctionElement:P.m,SVGFEDropShadowElement:P.m,SVGMPathElement:P.m,SVGElement:P.m,SVGTransform:P.aX,SVGTransformList:P.hz,AudioBuffer:P.et,AudioParamMap:P.eu,AudioTrackList:P.ew,AudioContext:P.bl,webkitAudioContext:P.bl,BaseAudioContext:P.bl,OfflineAudioContext:P.fO,WebGLBuffer:P.cF,WebGLFramebuffer:P.cR,WebGLProgram:P.d9,WebGL2RenderingContext:P.bv,WebGLShader:P.de,WebGLUniformLocation:P.dn,SQLResultSetRowList:P.he})
hunkHelpers.setOrUpdateLeafTags({ArrayBuffer:true,AnimationEffectReadOnly:true,AnimationEffectTiming:true,AnimationEffectTimingReadOnly:true,AnimationTimeline:true,AnimationWorkletGlobalScope:true,AuthenticatorAssertionResponse:true,AuthenticatorAttestationResponse:true,AuthenticatorResponse:true,BackgroundFetchFetch:true,BackgroundFetchManager:true,BackgroundFetchSettledFetch:true,BarProp:true,BarcodeDetector:true,BluetoothRemoteGATTDescriptor:true,Body:true,BudgetState:true,CacheStorage:true,CanvasGradient:true,CanvasPattern:true,CanvasRenderingContext2D:true,Client:true,Clients:true,CookieStore:true,Coordinates:true,Credential:true,CredentialUserData:true,CredentialsContainer:true,Crypto:true,CryptoKey:true,CSS:true,CSSVariableReferenceValue:true,CustomElementRegistry:true,DataTransfer:true,DataTransferItem:true,DeprecatedStorageInfo:true,DeprecatedStorageQuota:true,DeprecationReport:true,DetectedBarcode:true,DetectedFace:true,DetectedText:true,DeviceAcceleration:true,DeviceRotationRate:true,DirectoryEntry:true,DirectoryReader:true,DocumentOrShadowRoot:true,DocumentTimeline:true,DOMError:true,Iterator:true,DOMMatrix:true,DOMMatrixReadOnly:true,DOMParser:true,DOMPoint:true,DOMPointReadOnly:true,DOMQuad:true,DOMStringMap:true,Entry:true,External:true,FaceDetector:true,FederatedCredential:true,FileEntry:true,DOMFileSystem:true,FontFace:true,FontFaceSource:true,FormData:true,GamepadButton:true,GamepadPose:true,Geolocation:true,Position:true,Headers:true,HTMLHyperlinkElementUtils:true,IdleDeadline:true,ImageBitmap:true,ImageBitmapRenderingContext:true,ImageCapture:true,ImageData:true,InputDeviceCapabilities:true,IntersectionObserver:true,IntersectionObserverEntry:true,InterventionReport:true,KeyframeEffect:true,KeyframeEffectReadOnly:true,MediaCapabilities:true,MediaCapabilitiesInfo:true,MediaDeviceInfo:true,MediaError:true,MediaKeyStatusMap:true,MediaKeySystemAccess:true,MediaKeys:true,MediaKeysPolicy:true,MediaMetadata:true,MediaSession:true,MediaSettingsRange:true,MemoryInfo:true,MessageChannel:true,Metadata:true,MutationObserver:true,WebKitMutationObserver:true,MutationRecord:true,NavigationPreloadManager:true,Navigator:true,NavigatorAutomationInformation:true,NavigatorConcurrentHardware:true,NavigatorCookies:true,NavigatorUserMediaError:true,NodeFilter:true,NodeIterator:true,NonDocumentTypeChildNode:true,NonElementParentNode:true,NoncedElement:true,OffscreenCanvasRenderingContext2D:true,OverconstrainedError:true,PaintRenderingContext2D:true,PaintSize:true,PaintWorkletGlobalScope:true,PasswordCredential:true,Path2D:true,PaymentAddress:true,PaymentInstruments:true,PaymentManager:true,PaymentResponse:true,PerformanceEntry:true,PerformanceLongTaskTiming:true,PerformanceMark:true,PerformanceMeasure:true,PerformanceNavigation:true,PerformanceNavigationTiming:true,PerformanceObserver:true,PerformanceObserverEntryList:true,PerformancePaintTiming:true,PerformanceResourceTiming:true,PerformanceServerTiming:true,PerformanceTiming:true,Permissions:true,PhotoCapabilities:true,PositionError:true,Presentation:true,PresentationReceiver:true,PublicKeyCredential:true,PushManager:true,PushMessageData:true,PushSubscription:true,PushSubscriptionOptions:true,RelatedApplication:true,ReportBody:true,ReportingObserver:true,ResizeObserver:true,ResizeObserverEntry:true,RTCCertificate:true,RTCIceCandidate:true,mozRTCIceCandidate:true,RTCLegacyStatsReport:true,RTCRtpContributingSource:true,RTCRtpReceiver:true,RTCRtpSender:true,RTCSessionDescription:true,mozRTCSessionDescription:true,RTCStatsResponse:true,Screen:true,ScrollState:true,ScrollTimeline:true,Selection:true,SharedArrayBuffer:true,SpeechRecognitionAlternative:true,SpeechSynthesisVoice:true,StaticRange:true,StorageManager:true,StyleMedia:true,StylePropertyMap:true,StylePropertyMapReadonly:true,SyncManager:true,TaskAttributionTiming:true,TextDetector:true,TextMetrics:true,TrackDefault:true,TreeWalker:true,TrustedHTML:true,TrustedScriptURL:true,TrustedURL:true,UnderlyingSourceBase:true,URLSearchParams:true,VRCoordinateSystem:true,VRDisplayCapabilities:true,VREyeParameters:true,VRFrameData:true,VRFrameOfReference:true,VRPose:true,VRStageBounds:true,VRStageBoundsPoint:true,VRStageParameters:true,ValidityState:true,VideoPlaybackQuality:true,VideoTrack:true,VTTRegion:true,WindowClient:true,WorkletAnimation:true,WorkletGlobalScope:true,XPathEvaluator:true,XPathExpression:true,XPathNSResolver:true,XPathResult:true,XMLSerializer:true,XSLTProcessor:true,Bluetooth:true,BluetoothCharacteristicProperties:true,BluetoothRemoteGATTServer:true,BluetoothRemoteGATTService:true,BluetoothUUID:true,BudgetService:true,Cache:true,DOMFileSystemSync:true,DirectoryEntrySync:true,DirectoryReaderSync:true,EntrySync:true,FileEntrySync:true,FileReaderSync:true,FileWriterSync:true,HTMLAllCollection:true,Mojo:true,MojoHandle:true,MojoWatcher:true,NFC:true,PagePopupController:true,Report:true,Request:true,Response:true,SubtleCrypto:true,USBAlternateInterface:true,USBConfiguration:true,USBDevice:true,USBEndpoint:true,USBInTransferResult:true,USBInterface:true,USBIsochronousInTransferPacket:true,USBIsochronousInTransferResult:true,USBIsochronousOutTransferPacket:true,USBIsochronousOutTransferResult:true,USBOutTransferResult:true,WorkerLocation:true,WorkerNavigator:true,Worklet:true,IDBCursor:true,IDBCursorWithValue:true,IDBFactory:true,IDBIndex:true,IDBKeyRange:true,IDBObjectStore:true,IDBObservation:true,IDBObserver:true,IDBObserverChanges:true,SVGAngle:true,SVGAnimatedAngle:true,SVGAnimatedBoolean:true,SVGAnimatedEnumeration:true,SVGAnimatedInteger:true,SVGAnimatedLength:true,SVGAnimatedLengthList:true,SVGAnimatedNumber:true,SVGAnimatedNumberList:true,SVGAnimatedPreserveAspectRatio:true,SVGAnimatedRect:true,SVGAnimatedString:true,SVGAnimatedTransformList:true,SVGMatrix:true,SVGPoint:true,SVGPreserveAspectRatio:true,SVGRect:true,SVGUnitTypes:true,AudioListener:true,AudioParam:true,AudioTrack:true,AudioWorkletGlobalScope:true,AudioWorkletProcessor:true,PeriodicWave:true,WebGLActiveInfo:true,ANGLEInstancedArrays:true,ANGLE_instanced_arrays:true,WebGLCanvas:true,WebGLColorBufferFloat:true,WebGLCompressedTextureASTC:true,WebGLCompressedTextureATC:true,WEBGL_compressed_texture_atc:true,WebGLCompressedTextureETC1:true,WEBGL_compressed_texture_etc1:true,WebGLCompressedTextureETC:true,WebGLCompressedTexturePVRTC:true,WEBGL_compressed_texture_pvrtc:true,WebGLCompressedTextureS3TC:true,WEBGL_compressed_texture_s3tc:true,WebGLCompressedTextureS3TCsRGB:true,WebGLDebugRendererInfo:true,WEBGL_debug_renderer_info:true,WebGLDebugShaders:true,WEBGL_debug_shaders:true,WebGLDepthTexture:true,WEBGL_depth_texture:true,WebGLDrawBuffers:true,WEBGL_draw_buffers:true,EXTsRGB:true,EXT_sRGB:true,EXTBlendMinMax:true,EXT_blend_minmax:true,EXTColorBufferFloat:true,EXTColorBufferHalfFloat:true,EXTDisjointTimerQuery:true,EXTDisjointTimerQueryWebGL2:true,EXTFragDepth:true,EXT_frag_depth:true,EXTShaderTextureLOD:true,EXT_shader_texture_lod:true,EXTTextureFilterAnisotropic:true,EXT_texture_filter_anisotropic:true,WebGLGetBufferSubDataAsync:true,WebGLLoseContext:true,WebGLExtensionLoseContext:true,WEBGL_lose_context:true,OESElementIndexUint:true,OES_element_index_uint:true,OESStandardDerivatives:true,OES_standard_derivatives:true,OESTextureFloat:true,OES_texture_float:true,OESTextureFloatLinear:true,OES_texture_float_linear:true,OESTextureHalfFloat:true,OES_texture_half_float:true,OESTextureHalfFloatLinear:true,OES_texture_half_float_linear:true,OESVertexArrayObject:true,OES_vertex_array_object:true,WebGLQuery:true,WebGLRenderbuffer:true,WebGLRenderingContext:true,WebGLSampler:true,WebGLShaderPrecisionFormat:true,WebGLSync:true,WebGLTexture:true,WebGLTimerQueryEXT:true,WebGLTransformFeedback:true,WebGLVertexArrayObject:true,WebGLVertexArrayObjectOES:true,WebGL:true,WebGL2RenderingContextBase:true,Database:true,SQLError:true,SQLResultSet:true,SQLTransaction:true,DataView:true,ArrayBufferView:false,Float32Array:true,Float64Array:true,Int16Array:true,Int32Array:true,Int8Array:true,Uint16Array:true,Uint32Array:true,Uint8ClampedArray:true,CanvasPixelArray:true,Uint8Array:false,HTMLAudioElement:true,HTMLBRElement:true,HTMLButtonElement:true,HTMLContentElement:true,HTMLDListElement:true,HTMLDataElement:true,HTMLDataListElement:true,HTMLDetailsElement:true,HTMLDialogElement:true,HTMLEmbedElement:true,HTMLFieldSetElement:true,HTMLHRElement:true,HTMLHeadingElement:true,HTMLHtmlElement:true,HTMLIFrameElement:true,HTMLImageElement:true,HTMLInputElement:true,HTMLLIElement:true,HTMLLabelElement:true,HTMLLegendElement:true,HTMLLinkElement:true,HTMLMapElement:true,HTMLMediaElement:true,HTMLMenuElement:true,HTMLMetaElement:true,HTMLMeterElement:true,HTMLModElement:true,HTMLOListElement:true,HTMLObjectElement:true,HTMLOptGroupElement:true,HTMLOptionElement:true,HTMLOutputElement:true,HTMLParagraphElement:true,HTMLParamElement:true,HTMLPictureElement:true,HTMLPreElement:true,HTMLProgressElement:true,HTMLQuoteElement:true,HTMLScriptElement:true,HTMLShadowElement:true,HTMLSlotElement:true,HTMLSourceElement:true,HTMLSpanElement:true,HTMLStyleElement:true,HTMLTableCaptionElement:true,HTMLTableColElement:true,HTMLTextAreaElement:true,HTMLTimeElement:true,HTMLTitleElement:true,HTMLTrackElement:true,HTMLUListElement:true,HTMLUnknownElement:true,HTMLVideoElement:true,HTMLDirectoryElement:true,HTMLFontElement:true,HTMLFrameElement:true,HTMLFrameSetElement:true,HTMLMarqueeElement:true,HTMLElement:false,AccessibleNodeList:true,HTMLAnchorElement:true,HTMLAreaElement:true,HTMLBaseElement:true,Blob:false,HTMLBodyElement:true,HTMLCanvasElement:true,CDATASection:true,CharacterData:true,Comment:true,ProcessingInstruction:true,Text:true,CSSNumericValue:true,CSSUnitValue:true,CSSPerspective:true,CSSCharsetRule:true,CSSConditionRule:true,CSSFontFaceRule:true,CSSGroupingRule:true,CSSImportRule:true,CSSKeyframeRule:true,MozCSSKeyframeRule:true,WebKitCSSKeyframeRule:true,CSSKeyframesRule:true,MozCSSKeyframesRule:true,WebKitCSSKeyframesRule:true,CSSMediaRule:true,CSSNamespaceRule:true,CSSPageRule:true,CSSRule:true,CSSStyleRule:true,CSSSupportsRule:true,CSSViewportRule:true,CSSStyleDeclaration:true,MSStyleCSSProperties:true,CSS2Properties:true,CSSImageValue:true,CSSKeywordValue:true,CSSPositionValue:true,CSSResourceValue:true,CSSURLImageValue:true,CSSStyleValue:false,CSSMatrixComponent:true,CSSRotation:true,CSSScale:true,CSSSkew:true,CSSTranslation:true,CSSTransformComponent:false,CSSTransformValue:true,CSSUnparsedValue:true,DataTransferItemList:true,HTMLDivElement:true,XMLDocument:true,Document:false,DOMException:true,DOMImplementation:true,ClientRectList:true,DOMRectList:true,DOMRectReadOnly:false,DOMStringList:true,DOMTokenList:true,Element:false,AbortPaymentEvent:true,AnimationEvent:true,AnimationPlaybackEvent:true,ApplicationCacheErrorEvent:true,BackgroundFetchClickEvent:true,BackgroundFetchEvent:true,BackgroundFetchFailEvent:true,BackgroundFetchedEvent:true,BeforeInstallPromptEvent:true,BeforeUnloadEvent:true,BlobEvent:true,CanMakePaymentEvent:true,ClipboardEvent:true,CloseEvent:true,CustomEvent:true,DeviceMotionEvent:true,DeviceOrientationEvent:true,ErrorEvent:true,ExtendableEvent:true,ExtendableMessageEvent:true,FetchEvent:true,FontFaceSetLoadEvent:true,ForeignFetchEvent:true,GamepadEvent:true,HashChangeEvent:true,InstallEvent:true,MediaEncryptedEvent:true,MediaKeyMessageEvent:true,MediaQueryListEvent:true,MediaStreamEvent:true,MediaStreamTrackEvent:true,MessageEvent:true,MIDIConnectionEvent:true,MIDIMessageEvent:true,MutationEvent:true,NotificationEvent:true,PageTransitionEvent:true,PaymentRequestEvent:true,PaymentRequestUpdateEvent:true,PopStateEvent:true,PresentationConnectionAvailableEvent:true,PresentationConnectionCloseEvent:true,ProgressEvent:true,PromiseRejectionEvent:true,PushEvent:true,RTCDataChannelEvent:true,RTCDTMFToneChangeEvent:true,RTCPeerConnectionIceEvent:true,RTCTrackEvent:true,SecurityPolicyViolationEvent:true,SensorErrorEvent:true,SpeechRecognitionError:true,SpeechRecognitionEvent:true,SpeechSynthesisEvent:true,StorageEvent:true,SyncEvent:true,TrackEvent:true,TransitionEvent:true,WebKitTransitionEvent:true,VRDeviceEvent:true,VRDisplayEvent:true,VRSessionEvent:true,MojoInterfaceRequestEvent:true,ResourceProgressEvent:true,USBConnectionEvent:true,IDBVersionChangeEvent:true,AudioProcessingEvent:true,OfflineAudioCompletionEvent:true,WebGLContextEvent:true,Event:false,InputEvent:false,AbsoluteOrientationSensor:true,Accelerometer:true,AccessibleNode:true,AmbientLightSensor:true,Animation:true,ApplicationCache:true,DOMApplicationCache:true,OfflineResourceList:true,BackgroundFetchRegistration:true,BatteryManager:true,BroadcastChannel:true,CanvasCaptureMediaStreamTrack:true,DedicatedWorkerGlobalScope:true,EventSource:true,FileReader:true,FontFaceSet:true,Gyroscope:true,XMLHttpRequest:true,XMLHttpRequestEventTarget:true,XMLHttpRequestUpload:true,LinearAccelerationSensor:true,Magnetometer:true,MediaDevices:true,MediaKeySession:true,MediaQueryList:true,MediaRecorder:true,MediaSource:true,MediaStream:true,MediaStreamTrack:true,MessagePort:true,MIDIAccess:true,MIDIInput:true,MIDIOutput:true,MIDIPort:true,NetworkInformation:true,Notification:true,OffscreenCanvas:true,OrientationSensor:true,PaymentRequest:true,Performance:true,PermissionStatus:true,PresentationAvailability:true,PresentationConnection:true,PresentationConnectionList:true,PresentationRequest:true,RelativeOrientationSensor:true,RemotePlayback:true,RTCDataChannel:true,DataChannel:true,RTCDTMFSender:true,RTCPeerConnection:true,webkitRTCPeerConnection:true,mozRTCPeerConnection:true,ScreenOrientation:true,Sensor:true,ServiceWorker:true,ServiceWorkerContainer:true,ServiceWorkerGlobalScope:true,ServiceWorkerRegistration:true,SharedWorker:true,SharedWorkerGlobalScope:true,SpeechRecognition:true,SpeechSynthesis:true,SpeechSynthesisUtterance:true,VR:true,VRDevice:true,VRDisplay:true,VRSession:true,VisualViewport:true,WebSocket:true,Worker:true,WorkerGlobalScope:true,WorkerPerformance:true,BluetoothDevice:true,BluetoothRemoteGATTCharacteristic:true,Clipboard:true,MojoInterfaceInterceptor:true,USB:true,IDBDatabase:true,IDBOpenDBRequest:true,IDBVersionChangeRequest:true,IDBRequest:true,IDBTransaction:true,AnalyserNode:true,RealtimeAnalyserNode:true,AudioBufferSourceNode:true,AudioDestinationNode:true,AudioNode:true,AudioScheduledSourceNode:true,AudioWorkletNode:true,BiquadFilterNode:true,ChannelMergerNode:true,AudioChannelMerger:true,ChannelSplitterNode:true,AudioChannelSplitter:true,ConstantSourceNode:true,ConvolverNode:true,DelayNode:true,DynamicsCompressorNode:true,GainNode:true,AudioGainNode:true,IIRFilterNode:true,MediaElementAudioSourceNode:true,MediaStreamAudioDestinationNode:true,MediaStreamAudioSourceNode:true,OscillatorNode:true,Oscillator:true,PannerNode:true,AudioPannerNode:true,webkitAudioPannerNode:true,ScriptProcessorNode:true,JavaScriptAudioNode:true,StereoPannerNode:true,WaveShaperNode:true,EventTarget:false,File:true,FileList:true,FileWriter:true,HTMLFormElement:true,Gamepad:true,HTMLHeadElement:true,History:true,HTMLCollection:true,HTMLFormControlsCollection:true,HTMLOptionsCollection:true,HTMLDocument:true,KeyboardEvent:true,Location:true,MediaList:true,MIDIInputMap:true,MIDIOutputMap:true,MimeType:true,MimeTypeArray:true,PointerEvent:true,MouseEvent:false,DragEvent:false,DocumentFragment:true,ShadowRoot:true,DocumentType:true,Node:false,NodeList:true,RadioNodeList:true,Plugin:true,PluginArray:true,Range:true,RTCStatsReport:true,HTMLSelectElement:true,SourceBuffer:true,SourceBufferList:true,SpeechGrammar:true,SpeechGrammarList:true,SpeechRecognitionResult:true,Storage:true,CSSStyleSheet:true,StyleSheet:true,HTMLTableCellElement:true,HTMLTableDataCellElement:true,HTMLTableHeaderCellElement:true,HTMLTableElement:true,HTMLTableRowElement:true,HTMLTableSectionElement:true,HTMLTemplateElement:true,TextTrack:true,TextTrackCue:true,VTTCue:true,TextTrackCueList:true,TextTrackList:true,TimeRanges:true,Touch:true,TouchEvent:true,TouchList:true,TrackDefaultList:true,CompositionEvent:true,FocusEvent:true,TextEvent:true,UIEvent:false,URL:true,VideoTrackList:true,WheelEvent:true,Window:true,DOMWindow:true,Attr:true,CSSRuleList:true,ClientRect:true,DOMRect:true,GamepadList:true,NamedNodeMap:true,MozNamedAttrMap:true,SpeechRecognitionResultList:true,StyleSheetList:true,SVGLength:true,SVGLengthList:true,SVGNumber:true,SVGNumberList:true,SVGPointList:true,SVGScriptElement:true,SVGStringList:true,SVGAElement:true,SVGAnimateElement:true,SVGAnimateMotionElement:true,SVGAnimateTransformElement:true,SVGAnimationElement:true,SVGCircleElement:true,SVGClipPathElement:true,SVGDefsElement:true,SVGDescElement:true,SVGDiscardElement:true,SVGEllipseElement:true,SVGFEBlendElement:true,SVGFEColorMatrixElement:true,SVGFEComponentTransferElement:true,SVGFECompositeElement:true,SVGFEConvolveMatrixElement:true,SVGFEDiffuseLightingElement:true,SVGFEDisplacementMapElement:true,SVGFEDistantLightElement:true,SVGFEFloodElement:true,SVGFEFuncAElement:true,SVGFEFuncBElement:true,SVGFEFuncGElement:true,SVGFEFuncRElement:true,SVGFEGaussianBlurElement:true,SVGFEImageElement:true,SVGFEMergeElement:true,SVGFEMergeNodeElement:true,SVGFEMorphologyElement:true,SVGFEOffsetElement:true,SVGFEPointLightElement:true,SVGFESpecularLightingElement:true,SVGFESpotLightElement:true,SVGFETileElement:true,SVGFETurbulenceElement:true,SVGFilterElement:true,SVGForeignObjectElement:true,SVGGElement:true,SVGGeometryElement:true,SVGGraphicsElement:true,SVGImageElement:true,SVGLineElement:true,SVGLinearGradientElement:true,SVGMarkerElement:true,SVGMaskElement:true,SVGMetadataElement:true,SVGPathElement:true,SVGPatternElement:true,SVGPolygonElement:true,SVGPolylineElement:true,SVGRadialGradientElement:true,SVGRectElement:true,SVGSetElement:true,SVGStopElement:true,SVGStyleElement:true,SVGSVGElement:true,SVGSwitchElement:true,SVGSymbolElement:true,SVGTSpanElement:true,SVGTextContentElement:true,SVGTextElement:true,SVGTextPathElement:true,SVGTextPositioningElement:true,SVGTitleElement:true,SVGUseElement:true,SVGViewElement:true,SVGGradientElement:true,SVGComponentTransferFunctionElement:true,SVGFEDropShadowElement:true,SVGMPathElement:true,SVGElement:false,SVGTransform:true,SVGTransformList:true,AudioBuffer:true,AudioParamMap:true,AudioTrackList:true,AudioContext:true,webkitAudioContext:true,BaseAudioContext:false,OfflineAudioContext:true,WebGLBuffer:true,WebGLFramebuffer:true,WebGLProgram:true,WebGL2RenderingContext:true,WebGLShader:true,WebGLUniformLocation:true,SQLResultSetRowList:true})
H.d2.$nativeSuperclassTag="ArrayBufferView"
H.cm.$nativeSuperclassTag="ArrayBufferView"
H.cn.$nativeSuperclassTag="ArrayBufferView"
H.c3.$nativeSuperclassTag="ArrayBufferView"
H.co.$nativeSuperclassTag="ArrayBufferView"
H.cp.$nativeSuperclassTag="ArrayBufferView"
H.d3.$nativeSuperclassTag="ArrayBufferView"
W.cq.$nativeSuperclassTag="EventTarget"
W.cr.$nativeSuperclassTag="EventTarget"
W.cs.$nativeSuperclassTag="EventTarget"
W.ct.$nativeSuperclassTag="EventTarget"})()
convertAllToFastObject(w)
convertToFastObject($);(function(a){if(typeof document==="undefined"){a(null)
return}if(typeof document.currentScript!='undefined'){a(document.currentScript)
return}var u=document.scripts
function onLoad(b){for(var s=0;s<u.length;++s)u[s].removeEventListener("load",onLoad,false)
a(b.target)}for(var t=0;t<u.length;++t)u[t].addEventListener("load",onLoad,false)})(function(a){v.currentScript=a
if(typeof dartMainRunner==="function")dartMainRunner(R.kG,[])
else R.kG([])})})()
//# sourceMappingURL=test.dart.js.map
