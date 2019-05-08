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
a[c]=function(){a[c]=function(){H.mL(b)}
var t
var s=d
try{if(a[b]===u){t=a[b]=s
t=a[b]=d()}else t=a[b]}finally{if(t===s)a[b]=null
a[c]=function(){return this[b]}}return t}}function makeConstList(a){a.immutable$list=Array
a.fixed$length=Array
return a}function convertToFastObject(a){function t(){}t.prototype=a
new t()
return a}function convertAllToFastObject(a){for(var u=0;u<a.length;++u)convertToFastObject(a[u])}var y=0
function tearOffGetter(a,b,c,d,e){return e?new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+d+y+++"(receiver) {"+"if (c === null) c = "+"H.jO"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, true, name);"+"return new c(this, funcs[0], receiver, name);"+"}")(a,b,c,d,H,null):new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+d+y+++"() {"+"if (c === null) c = "+"H.jO"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, false, name);"+"return new c(this, funcs[0], null, name);"+"}")(a,b,c,d,H,null)}function tearOff(a,b,c,d,e,f){var u=null
return d?function(){if(u===null)u=H.jO(this,a,b,c,true,false,e).prototype
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
if(w[u][a])return w[u][a]}}var C={},H={jy:function jy(a){this.a=a},
jw:function(){return new P.ci("No element")},
lD:function(){return new P.ci("Too many elements")},
p:function p(a){this.a=a},
fb:function fb(){},
bz:function bz(){},
c7:function c7(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=null
_.$ti=d},
fJ:function fJ(a,b,c){this.a=a
this.b=b
this.$ti=c},
fK:function fK(a,b,c){var _=this
_.a=null
_.b=a
_.c=b
_.$ti=c},
fL:function fL(a,b,c){this.a=a
this.b=b
this.$ti=c},
cq:function cq(a,b,c){this.a=a
this.b=b
this.$ti=c},
io:function io(a,b,c){this.a=a
this.b=b
this.$ti=c},
bw:function bw(){},
dK:function dK(){},
dJ:function dJ(){},
bQ:function(a){var u,t
u=H.E(v.mangledGlobalNames[a])
if(typeof u==="string")return u
t="minified:"+a
return t},
ms:function(a){return v.types[H.a6(a)]},
mz:function(a,b){var u
if(b!=null){u=b.x
if(u!=null)return u}return!!J.S(a).$iC},
i:function(a){var u
if(typeof a==="string")return a
if(typeof a==="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
u=J.ag(a)
if(typeof u!=="string")throw H.f(H.bL(a))
return u},
lS:function(a){var u,t,s
u=a.$reflectionInfo
if(u==null)return
u=J.fw(u)
t=u[0]
s=u[1]
return new H.hd(a,u,(t&2)===2,t>>2,s>>1,(s&1)===1,u[2])},
ce:function(a){var u=a.$identityHash
if(u==null){u=Math.random()*0x3fffffff|0
a.$identityHash=u}return u},
bB:function(a){return H.lJ(a)+H.jL(H.bp(a),0,null)},
lJ:function(a){var u,t,s,r,q,p,o,n,m
u=J.S(a)
t=u.constructor
if(typeof t=="function"){s=t.name
r=typeof s==="string"?s:null}else r=null
q=r==null
if(q||u===C.M||!!u.$icp){p=C.A(a)
if(q)r=p
if(p==="Object"){o=a.constructor
if(typeof o=="function"){n=String(o).match(/^\s*function\s*([\w$]*)\s*\(/)
m=n==null?null:n[1]
if(typeof m==="string"&&/^\w+$/.test(m))r=m}}return r}r=r
return H.bQ(r.length>1&&C.c.ao(r,0)===36?C.c.b6(r,1):r)},
kp:function(a){var u,t,s,r,q
u=a.length
if(u<=500)return String.fromCharCode.apply(null,a)
for(t="",s=0;s<u;s=r){r=s+500
q=r<u?r:u
t+=String.fromCharCode.apply(null,a.slice(s,q))}return t},
lR:function(a){var u,t,s,r
u=H.c([],[P.A])
for(t=a.length,s=0;s<a.length;a.length===t||(0,H.B)(a),++s){r=a[s]
if(typeof r!=="number"||Math.floor(r)!==r)throw H.f(H.bL(r))
if(r<=65535)C.a.h(u,r)
else if(r<=1114111){C.a.h(u,55296+(C.f.aU(r-65536,10)&1023))
C.a.h(u,56320+(r&1023))}else throw H.f(H.bL(r))}return H.kp(u)},
kq:function(a){var u,t,s
for(u=a.length,t=0;t<u;++t){s=a[t]
if(typeof s!=="number"||Math.floor(s)!==s)throw H.f(H.bL(s))
if(s<0)throw H.f(H.bL(s))
if(s>65535)return H.lR(a)}return H.kp(a)},
jA:function(a){var u
if(a<=65535)return String.fromCharCode(a)
if(a<=1114111){u=a-65536
return String.fromCharCode((55296|C.f.aU(u,10))>>>0,56320|u&1023)}throw H.f(P.an(a,0,1114111,null,null))},
bA:function(a){if(a.date===void 0)a.date=new Date(a.a)
return a.date},
lQ:function(a){var u=H.bA(a).getFullYear()+0
return u},
lO:function(a){var u=H.bA(a).getMonth()+1
return u},
lK:function(a){var u=H.bA(a).getDate()+0
return u},
lL:function(a){var u=H.bA(a).getHours()+0
return u},
lN:function(a){var u=H.bA(a).getMinutes()+0
return u},
lP:function(a){var u=H.bA(a).getSeconds()+0
return u},
lM:function(a){var u=H.bA(a).getMilliseconds()+0
return u},
D:function(a){throw H.f(H.bL(a))},
k:function(a,b){if(a==null)J.br(a)
throw H.f(H.cG(a,b))},
cG:function(a,b){var u,t
if(typeof b!=="number"||Math.floor(b)!==b)return new P.as(!0,b,"index",null)
u=H.a6(J.br(a))
if(!(b<0)){if(typeof u!=="number")return H.D(u)
t=b>=u}else t=!0
if(t)return P.P(b,a,"index",null,u)
return P.hb(b,"index",null)},
mp:function(a,b,c){if(a>c)return new P.bC(0,c,!0,a,"start","Invalid value")
if(b!=null)if(b<a||b>c)return new P.bC(a,c,!0,b,"end","Invalid value")
return new P.as(!0,b,"end",null)},
bL:function(a){return new P.as(!0,a,null,null)},
ml:function(a){if(typeof a!=="number")throw H.f(H.bL(a))
return a},
f:function(a){var u
if(a==null)a=new P.dm()
u=new Error()
u.dartException=a
if("defineProperty" in Object){Object.defineProperty(u,"message",{get:H.l2})
u.name=""}else u.toString=H.l2
return u},
l2:function(){return J.ag(this.dartException)},
a0:function(a){throw H.f(a)},
B:function(a){throw H.f(P.ba(a))},
aP:function(a){var u,t,s,r,q,p
a=a.replace(String({}),'$receiver$').replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
u=a.match(/\\\$[a-zA-Z]+\\\$/g)
if(u==null)u=H.c([],[P.e])
t=u.indexOf("\\$arguments\\$")
s=u.indexOf("\\$argumentsExpr\\$")
r=u.indexOf("\\$expr\\$")
q=u.indexOf("\\$method\\$")
p=u.indexOf("\\$receiver\\$")
return new H.hT(a.replace(new RegExp('\\\\\\$arguments\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$argumentsExpr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$expr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$method\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$receiver\\\\\\$','g'),'((?:x|[^x])*)'),t,s,r,q,p)},
hU:function(a){return function($expr$){var $argumentsExpr$='$arguments$'
try{$expr$.$method$($argumentsExpr$)}catch(u){return u.message}}(a)},
kB:function(a){return function($expr$){try{$expr$.$method$}catch(u){return u.message}}(a)},
kk:function(a,b){return new H.h2(a,b==null?null:b.method)},
jz:function(a,b){var u,t
u=b==null
t=u?null:b.method
return new H.fA(a,t,u?null:b.receiver)},
ak:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g
u=new H.jn(a)
if(a==null)return
if(typeof a!=="object")return a
if("dartException" in a)return u.$1(a.dartException)
else if(!("message" in a))return a
t=a.message
if("number" in a&&typeof a.number=="number"){s=a.number
r=s&65535
if((C.f.aU(s,16)&8191)===10)switch(r){case 438:return u.$1(H.jz(H.i(t)+" (Error "+r+")",null))
case 445:case 5007:return u.$1(H.kk(H.i(t)+" (Error "+r+")",null))}}if(a instanceof TypeError){q=$.l5()
p=$.l6()
o=$.l7()
n=$.l8()
m=$.lb()
l=$.lc()
k=$.la()
$.l9()
j=$.le()
i=$.ld()
h=q.a0(t)
if(h!=null)return u.$1(H.jz(H.E(t),h))
else{h=p.a0(t)
if(h!=null){h.method="call"
return u.$1(H.jz(H.E(t),h))}else{h=o.a0(t)
if(h==null){h=n.a0(t)
if(h==null){h=m.a0(t)
if(h==null){h=l.a0(t)
if(h==null){h=k.a0(t)
if(h==null){h=n.a0(t)
if(h==null){h=j.a0(t)
if(h==null){h=i.a0(t)
g=h!=null}else g=!0}else g=!0}else g=!0}else g=!0}else g=!0}else g=!0}else g=!0
if(g)return u.$1(H.kk(H.E(t),h))}}return u.$1(new H.i6(typeof t==="string"?t:""))}if(a instanceof RangeError){if(typeof t==="string"&&t.indexOf("call stack")!==-1)return new P.dv()
t=function(b){try{return String(b)}catch(f){}return null}(a)
return u.$1(new P.as(!1,null,null,typeof t==="string"?t.replace(/^RangeError:\s*/,""):t))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof t==="string"&&t==="too much recursion")return new P.dv()
return a},
bO:function(a){var u
if(a==null)return new H.eo(a)
u=a.$cachedTrace
if(u!=null)return u
return a.$cachedTrace=new H.eo(a)},
mr:function(a,b){var u,t,s,r
u=a.length
for(t=0;t<u;t=r){s=t+1
r=s+1
b.P(0,a[t],a[s])}return b},
my:function(a,b,c,d,e,f){H.l(a,"$ibd")
switch(H.a6(b)){case 0:return a.$0()
case 1:return a.$1(c)
case 2:return a.$2(c,d)
case 3:return a.$3(c,d,e)
case 4:return a.$4(c,d,e,f)}throw H.f(P.X("Unsupported number of arguments for wrapped closure"))},
bM:function(a,b){var u
H.a6(b)
if(a==null)return
u=a.$identity
if(!!u)return u
u=function(c,d,e){return function(f,g,h,i){return e(c,d,f,g,h,i)}}(a,b,H.my)
a.$identity=u
return u},
lw:function(a,b,c,d,e,f,g){var u,t,s,r,q,p,o,n,m,l,k,j,i
u=b[0]
t=u.$callName
if(!!J.S(d).$ib){u.$reflectionInfo=d
s=H.lS(u).r}else s=d
r=e?Object.create(new H.hx().constructor.prototype):Object.create(new H.bV(null,null,null,null).constructor.prototype)
r.$initialize=r.constructor
if(e)q=function static_tear_off(){this.$initialize()}
else{p=$.ay
if(typeof p!=="number")return p.C()
$.ay=p+1
p=new Function("a,b,c,d"+p,"this.$initialize(a,b,c,d"+p+")")
q=p}r.constructor=q
q.prototype=r
if(!e){o=H.k6(a,u,f)
o.$reflectionInfo=d}else{r.$static_name=g
o=u}if(typeof s=="number")n=function(h,a0){return function(){return h(a0)}}(H.ms,s)
else if(typeof s=="function")if(e)n=s
else{m=f?H.k4:H.jr
n=function(h,a0){return function(){return h.apply({$receiver:a0(this)},arguments)}}(s,m)}else throw H.f("Error in reflectionInfo.")
r.$S=n
r[t]=o
for(l=o,k=1;k<b.length;++k){j=b[k]
i=j.$callName
if(i!=null){j=e?j:H.k6(a,j,f)
r[i]=j}if(k===c){j.$reflectionInfo=d
l=j}}r.$C=l
r.$R=u.$R
r.$D=u.$D
return q},
lt:function(a,b,c,d){var u=H.jr
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,u)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,u)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,u)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,u)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,u)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,u)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,u)}},
k6:function(a,b,c){var u,t,s,r,q,p,o
if(c)return H.lv(a,b)
u=b.$stubName
t=b.length
s=a[u]
r=b==null?s==null:b===s
q=!r||t>=27
if(q)return H.lt(t,!r,u,b)
if(t===0){r=$.ay
if(typeof r!=="number")return r.C()
$.ay=r+1
p="self"+r
r="return function(){var "+p+" = this."
q=$.bW
if(q==null){q=H.eV("self")
$.bW=q}return new Function(r+H.i(q)+";return "+p+"."+H.i(u)+"();}")()}o="abcdefghijklmnopqrstuvwxyz".split("").splice(0,t).join(",")
r=$.ay
if(typeof r!=="number")return r.C()
$.ay=r+1
o+=r
r="return function("+o+"){return this."
q=$.bW
if(q==null){q=H.eV("self")
$.bW=q}return new Function(r+H.i(q)+"."+H.i(u)+"("+o+");}")()},
lu:function(a,b,c,d){var u,t
u=H.jr
t=H.k4
switch(b?-1:a){case 0:throw H.f(H.lV("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,u,t)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,u,t)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,u,t)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,u,t)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,u,t)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,u,t)
default:return function(e,f,g,h){return function(){h=[g(this)]
Array.prototype.push.apply(h,arguments)
return e.apply(f(this),h)}}(d,u,t)}},
lv:function(a,b){var u,t,s,r,q,p,o,n
u=$.bW
if(u==null){u=H.eV("self")
$.bW=u}t=$.k3
if(t==null){t=H.eV("receiver")
$.k3=t}s=b.$stubName
r=b.length
q=a[s]
p=b==null?q==null:b===q
o=!p||r>=28
if(o)return H.lu(r,!p,s,b)
if(r===1){u="return function(){return this."+H.i(u)+"."+H.i(s)+"(this."+H.i(t)+");"
t=$.ay
if(typeof t!=="number")return t.C()
$.ay=t+1
return new Function(u+t+"}")()}n="abcdefghijklmnopqrstuvwxyz".split("").splice(0,r-1).join(",")
u="return function("+n+"){return this."+H.i(u)+"."+H.i(s)+"(this."+H.i(t)+", "+n+");"
t=$.ay
if(typeof t!=="number")return t.C()
$.ay=t+1
return new Function(u+t+"}")()},
jO:function(a,b,c,d,e,f,g){return H.lw(a,b,H.a6(c),d,!!e,!!f,g)},
jr:function(a){return a.a},
k4:function(a){return a.c},
eV:function(a){var u,t,s,r,q
u=new H.bV("self","target","receiver","name")
t=J.fw(Object.getOwnPropertyNames(u))
for(s=t.length,r=0;r<s;++r){q=t[r]
if(u[q]===a)return q}},
E:function(a){if(a==null)return a
if(typeof a==="string")return a
throw H.f(H.aw(a,"String"))},
nt:function(a){if(a==null)return a
if(typeof a==="number")return a
throw H.f(H.aw(a,"double"))},
mE:function(a){if(a==null)return a
if(typeof a==="number")return a
throw H.f(H.aw(a,"num"))},
jM:function(a){if(a==null)return a
if(typeof a==="boolean")return a
throw H.f(H.aw(a,"bool"))},
a6:function(a){if(a==null)return a
if(typeof a==="number"&&Math.floor(a)===a)return a
throw H.f(H.aw(a,"int"))},
l0:function(a,b){throw H.f(H.aw(a,H.bQ(H.E(b).substring(2))))},
mG:function(a,b){throw H.f(H.ls(a,H.bQ(H.E(b).substring(2))))},
l:function(a,b){if(a==null)return a
if((typeof a==="object"||typeof a==="function")&&J.S(a)[b])return a
H.l0(a,b)},
a7:function(a,b){var u
if(a!=null)u=(typeof a==="object"||typeof a==="function")&&J.S(a)[b]
else u=!0
if(u)return a
H.mG(a,b)},
jT:function(a){if(a==null)return a
if(!!J.S(a).$ib)return a
throw H.f(H.aw(a,"List<dynamic>"))},
mA:function(a,b){var u
if(a==null)return a
u=J.S(a)
if(!!u.$ib)return a
if(u[b])return a
H.l0(a,b)},
kV:function(a){var u
if("$S" in a){u=a.$S
if(typeof u=="number")return v.types[H.a6(u)]
else return a.$S()}return},
eL:function(a,b){var u
if(a==null)return!1
if(typeof a=="function")return!0
u=H.kV(J.S(a))
if(u==null)return!1
return H.kM(u,null,b,null)},
j:function(a,b){var u,t
if(a==null)return a
if($.jI)return a
$.jI=!0
try{if(H.eL(a,b))return a
u=H.jl(b)
t=H.aw(a,u)
throw H.f(t)}finally{$.jI=!1}},
jP:function(a,b){if(a!=null&&!H.jN(a,b))H.a0(H.aw(a,H.jl(b)))
return a},
aw:function(a,b){return new H.hV("TypeError: "+P.ff(a)+": type '"+H.kQ(a)+"' is not a subtype of type '"+b+"'")},
ls:function(a,b){return new H.eW("CastError: "+P.ff(a)+": type '"+H.kQ(a)+"' is not a subtype of type '"+b+"'")},
kQ:function(a){var u,t
u=J.S(a)
if(!!u.$ibX){t=H.kV(u)
if(t!=null)return H.jl(t)
return"Closure"}return H.bB(a)},
mL:function(a){throw H.f(new P.f3(H.E(a)))},
lV:function(a){return new H.hk(a)},
kW:function(a){return v.getIsolateTag(a)},
c:function(a,b){a.$ti=b
return a},
bp:function(a){if(a==null)return
return a.$ti},
nu:function(a,b,c){return H.bP(a["$a"+H.i(c)],H.bp(b))},
cH:function(a,b,c,d){var u
H.E(c)
H.a6(d)
u=H.bP(a["$a"+H.i(c)],H.bp(b))
return u==null?null:u[d]},
af:function(a,b,c){var u
H.E(b)
H.a6(c)
u=H.bP(a["$a"+H.i(b)],H.bp(a))
return u==null?null:u[c]},
u:function(a,b){var u
H.a6(b)
u=H.bp(a)
return u==null?null:u[b]},
jl:function(a){return H.bo(a,null)},
bo:function(a,b){var u,t
H.o(b,"$ib",[P.e],"$ab")
if(a==null)return"dynamic"
if(a===-1)return"void"
if(typeof a==="object"&&a!==null&&a.constructor===Array)return H.bQ(a[0].name)+H.jL(a,1,b)
if(typeof a=="function")return H.bQ(a.name)
if(a===-2)return"dynamic"
if(typeof a==="number"){H.a6(a)
if(b==null||a<0||a>=b.length)return"unexpected-generic-index:"+a
u=b.length
t=u-a-1
if(t<0||t>=u)return H.k(b,t)
return H.i(b[t])}if('func' in a)return H.mb(a,b)
if('futureOr' in a)return"FutureOr<"+H.bo("type" in a?a.type:null,b)+">"
return"unknown-reified-type"},
mb:function(a,b){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c
u=[P.e]
H.o(b,"$ib",u,"$ab")
if("bounds" in a){t=a.bounds
if(b==null){b=H.c([],u)
s=null}else s=b.length
r=b.length
for(q=t.length,p=q;p>0;--p)C.a.h(b,"T"+(r+p))
for(o="<",n="",p=0;p<q;++p,n=", "){o+=n
u=b.length
m=u-p-1
if(m<0)return H.k(b,m)
o=C.c.C(o,b[m])
l=t[p]
if(l!=null&&l!==P.H)o+=" extends "+H.bo(l,b)}o+=">"}else{o=""
s=null}k=!!a.v?"void":H.bo(a.ret,b)
if("args" in a){j=a.args
for(u=j.length,i="",h="",g=0;g<u;++g,h=", "){f=j[g]
i=i+h+H.bo(f,b)}}else{i=""
h=""}if("opt" in a){e=a.opt
i+=h+"["
for(u=e.length,h="",g=0;g<u;++g,h=", "){f=e[g]
i=i+h+H.bo(f,b)}i+="]"}if("named" in a){d=a.named
i+=h+"{"
for(u=H.mq(d),m=u.length,h="",g=0;g<m;++g,h=", "){c=H.E(u[g])
i=i+h+H.bo(d[c],b)+(" "+H.i(c))}i+="}"}if(s!=null)b.length=s
return o+"("+i+") => "+k},
jL:function(a,b,c){var u,t,s,r,q,p
H.o(c,"$ib",[P.e],"$ab")
if(a==null)return""
u=new P.bE("")
for(t=b,s="",r=!0,q="";t<a.length;++t,s=", "){u.a=q+s
p=a[t]
if(p!=null)r=!1
q=u.a+=H.bo(p,c)}return"<"+u.i(0)+">"},
bP:function(a,b){if(a==null)return b
a=a.apply(null,b)
if(a==null)return
if(typeof a==="object"&&a!==null&&a.constructor===Array)return a
if(typeof a=="function")return a.apply(null,b)
return b},
cF:function(a,b,c,d){var u,t
H.E(b)
H.jT(c)
H.E(d)
if(a==null)return!1
u=H.bp(a)
t=J.S(a)
if(t[b]==null)return!1
return H.kT(H.bP(t[d],u),null,c,null)},
o:function(a,b,c,d){H.E(b)
H.jT(c)
H.E(d)
if(a==null)return a
if(H.cF(a,b,c,d))return a
throw H.f(H.aw(a,function(e,f){return e.replace(/[^<,> ]+/g,function(g){return f[g]||g})}(H.bQ(b.substring(2))+H.jL(c,0,null),v.mangledGlobalNames)))},
kT:function(a,b,c,d){var u,t
if(c==null)return!0
if(a==null){u=c.length
for(t=0;t<u;++t)if(!H.ar(null,null,c[t],d))return!1
return!0}u=a.length
for(t=0;t<u;++t)if(!H.ar(a[t],b,c[t],d))return!1
return!0},
nr:function(a,b,c){return a.apply(b,H.bP(J.S(b)["$a"+H.i(c)],H.bp(b)))},
kY:function(a){var u
if(typeof a==="number")return!1
if('futureOr' in a){u="type" in a?a.type:null
return a==null||a.name==="H"||a.name==="F"||a===-1||a===-2||H.kY(u)}return!1},
jN:function(a,b){var u,t
if(a==null)return b==null||b.name==="H"||b.name==="F"||b===-1||b===-2||H.kY(b)
if(b==null||b===-1||b.name==="H"||b===-2)return!0
if(typeof b=="object"){if('futureOr' in b)if(H.jN(a,"type" in b?b.type:null))return!0
if('func' in b)return H.eL(a,b)}u=J.S(a).constructor
t=H.bp(a)
if(t!=null){t=t.slice()
t.splice(0,0,u)
u=t}return H.ar(u,null,b,null)},
z:function(a,b){if(a!=null&&!H.jN(a,b))throw H.f(H.aw(a,H.jl(b)))
return a},
ar:function(a,b,c,d){var u,t,s,r,q,p,o,n,m
if(a===c)return!0
if(c==null||c===-1||c.name==="H"||c===-2)return!0
if(a===-2)return!0
if(a==null||a===-1||a.name==="H"||a===-2){if(typeof c==="number")return!1
if('futureOr' in c)return H.ar(a,b,"type" in c?c.type:null,d)
return!1}if(typeof a==="number")return!1
if(typeof c==="number")return!1
if(a.name==="F")return!0
if('func' in c)return H.kM(a,b,c,d)
if('func' in a)return c.name==="bd"
u=typeof a==="object"&&a!==null&&a.constructor===Array
t=u?a[0]:a
if('futureOr' in c){s="type" in c?c.type:null
if('futureOr' in a)return H.ar("type" in a?a.type:null,b,s,d)
else if(H.ar(a,b,s,d))return!0
else{if(!('$i'+"c4" in t.prototype))return!1
r=t.prototype["$a"+"c4"]
q=H.bP(r,u?a.slice(1):null)
return H.ar(typeof q==="object"&&q!==null&&q.constructor===Array?q[0]:null,b,s,d)}}p=typeof c==="object"&&c!==null&&c.constructor===Array
o=p?c[0]:c
if(o!==t){n=o.name
if(!('$i'+n in t.prototype))return!1
m=t.prototype["$a"+n]}else m=null
if(!p)return!0
u=u?a.slice(1):null
p=c.slice(1)
return H.kT(H.bP(m,u),b,p,d)},
kM:function(a,b,c,d){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g
if(!('func' in a))return!1
if("bounds" in a){if(!("bounds" in c))return!1
u=a.bounds
t=c.bounds
if(u.length!==t.length)return!1}else if("bounds" in c)return!1
if(!H.ar(a.ret,b,c.ret,d))return!1
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
for(k=0;k<o;++k)if(!H.ar(r[k],d,s[k],b))return!1
for(j=k,i=0;j<n;++i,++j)if(!H.ar(r[j],d,q[i],b))return!1
for(j=0;j<l;++i,++j)if(!H.ar(p[j],d,q[i],b))return!1
h=a.named
g=c.named
if(g==null)return!0
if(h==null)return!1
return H.mD(h,b,g,d)},
mD:function(a,b,c,d){var u,t,s,r
u=Object.getOwnPropertyNames(c)
for(t=u.length,s=0;s<t;++s){r=u[s]
if(!Object.hasOwnProperty.call(a,r))return!1
if(!H.ar(c[r],d,a[r],b))return!1}return!0},
ns:function(a,b,c){Object.defineProperty(a,H.E(b),{value:c,enumerable:false,writable:true,configurable:true})},
mB:function(a){var u,t,s,r,q,p
u=H.E($.kX.$1(a))
t=$.jc[u]
if(t!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:t,enumerable:false,writable:true,configurable:true})
return t.i}s=$.ji[u]
if(s!=null)return s
r=v.interceptorsByTag[u]
if(r==null){u=H.E($.kS.$2(a,u))
if(u!=null){t=$.jc[u]
if(t!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:t,enumerable:false,writable:true,configurable:true})
return t.i}s=$.ji[u]
if(s!=null)return s
r=v.interceptorsByTag[u]}}if(r==null)return
s=r.prototype
q=u[0]
if(q==="!"){t=H.jk(s)
$.jc[u]=t
Object.defineProperty(a,v.dispatchPropertyName,{value:t,enumerable:false,writable:true,configurable:true})
return t.i}if(q==="~"){$.ji[u]=s
return s}if(q==="-"){p=H.jk(s)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}if(q==="+")return H.l_(a,s)
if(q==="*")throw H.f(P.kC(u))
if(v.leafTags[u]===true){p=H.jk(s)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}else return H.l_(a,s)},
l_:function(a,b){var u=Object.getPrototypeOf(a)
Object.defineProperty(u,v.dispatchPropertyName,{value:J.jU(b,u,null,null),enumerable:false,writable:true,configurable:true})
return b},
jk:function(a){return J.jU(a,!1,null,!!a.$iC)},
mC:function(a,b,c){var u=b.prototype
if(v.leafTags[a]===true)return H.jk(u)
else return J.jU(u,c,null,null)},
mw:function(){if(!0===$.jS)return
$.jS=!0
H.mx()},
mx:function(){var u,t,s,r,q,p,o,n
$.jc=Object.create(null)
$.ji=Object.create(null)
H.mv()
u=v.interceptorsByTag
t=Object.getOwnPropertyNames(u)
if(typeof window!="undefined"){window
s=function(){}
for(r=0;r<t.length;++r){q=t[r]
p=$.l1.$1(q)
if(p!=null){o=H.mC(q,u[q],p)
if(o!=null){Object.defineProperty(p,v.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
s.prototype=p}}}}for(r=0;r<t.length;++r){q=t[r]
if(/^[A-Za-z_]/.test(q)){n=u[q]
u["!"+q]=n
u["~"+q]=n
u["-"+q]=n
u["+"+q]=n
u["*"+q]=n}}},
mv:function(){var u,t,s,r,q,p,o
u=C.R()
u=H.bK(C.O,H.bK(C.T,H.bK(C.z,H.bK(C.z,H.bK(C.S,H.bK(C.P,H.bK(C.Q(C.A),u)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){t=dartNativeDispatchHooksTransformer
if(typeof t=="function")t=[t]
if(t.constructor==Array)for(s=0;s<t.length;++s){r=t[s]
if(typeof r=="function")u=r(u)||u}}q=u.getTag
p=u.getUnknownTag
o=u.prototypeForTag
$.kX=new H.jf(q)
$.kS=new H.jg(p)
$.l1=new H.jh(o)},
bK:function(a,b){return a(b)||b},
lF:function(a,b,c,d){var u,t,s,r
u=b?"m":""
t=c?"":"i"
s=d?"g":""
r=function(e,f){try{return new RegExp(e,f)}catch(q){return q}}(a,u+t+s)
if(r instanceof RegExp)return r
throw H.f(new P.fo("Illegal RegExp pattern ("+String(r)+")",a,null))},
mJ:function(a,b,c){var u=a.indexOf(b,c)
return u>=0},
jX:function(a,b,c){var u,t,s
if(b==="")if(a==="")return c
else{u=a.length
for(t=c,s=0;s<u;++s)t=t+a[s]+c
return t.charCodeAt(0)==0?t:t}else return a.replace(new RegExp(b.replace(/[[\]{}()*+?.\\^$|]/g,"\\$&"),'g'),c.replace(/\$/g,"$$$$"))},
hd:function hd(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.x=null},
hT:function hT(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
h2:function h2(a,b){this.a=a
this.b=b},
fA:function fA(a,b,c){this.a=a
this.b=b
this.c=c},
i6:function i6(a){this.a=a},
jn:function jn(a){this.a=a},
eo:function eo(a){this.a=a
this.b=null},
bX:function bX(){},
hG:function hG(){},
hx:function hx(){},
bV:function bV(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
hV:function hV(a){this.a=a},
eW:function eW(a){this.a=a},
hk:function hk(a){this.a=a},
aF:function aF(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
fD:function fD(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
da:function da(a,b){this.a=a
this.$ti=b},
fE:function fE(a,b,c){var _=this
_.a=a
_.b=b
_.d=_.c=null
_.$ti=c},
jf:function jf(a){this.a=a},
jg:function jg(a){this.a=a},
jh:function jh(a){this.a=a},
fz:function fz(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
j7:function(a){return a},
bn:function(a,b,c){if(a>>>0!==a||a>=c)throw H.f(H.cG(b,a))},
ma:function(a,b,c){var u
if(!(a>>>0!==a))u=b>>>0!==b||a>b||b>c
else u=!0
if(u)throw H.f(H.mp(a,b,c))
return b},
cc:function cc(){},
dh:function dh(){},
cb:function cb(){},
di:function di(){},
fT:function fT(){},
fU:function fU(){},
fV:function fV(){},
fW:function fW(){},
fX:function fX(){},
dj:function dj(){},
fY:function fY(){},
cu:function cu(){},
cv:function cv(){},
cw:function cw(){},
cx:function cx(){},
mq:function(a){return J.kc(a?Object.keys(a):[],null)},
mF:function(a){if(typeof dartPrint=="function"){dartPrint(a)
return}if(typeof console=="object"&&typeof console.log!="undefined"){console.log(a)
return}if(typeof window=="object")return
if(typeof print=="function"){print(a)
return}throw"Unable to print message: "+String(a)}},J={
jU:function(a,b,c,d){return{i:a,p:b,e:c,x:d}},
je:function(a){var u,t,s,r,q
u=a[v.dispatchPropertyName]
if(u==null)if($.jS==null){H.mw()
u=a[v.dispatchPropertyName]}if(u!=null){t=u.p
if(!1===t)return u.i
if(!0===t)return a
s=Object.getPrototypeOf(a)
if(t===s)return u.i
if(u.e===s)throw H.f(P.kC("Return interceptor for "+H.i(t(a,u))))}r=a.constructor
q=r==null?null:r[$.jY()]
if(q!=null)return q
q=H.mB(a)
if(q!=null)return q
if(typeof a=="function")return C.U
t=Object.getPrototypeOf(a)
if(t==null)return C.C
if(t===Object.prototype)return C.C
if(typeof r=="function"){Object.defineProperty(r,$.jY(),{value:C.v,enumerable:false,writable:true,configurable:true})
return C.v}return C.v},
lE:function(a,b){if(typeof a!=="number"||Math.floor(a)!==a)throw H.f(P.jq(a,"length","is not an integer"))
if(a<0||a>4294967295)throw H.f(P.an(a,0,4294967295,"length",null))
return J.kc(new Array(a),b)},
kc:function(a,b){return J.fw(H.c(a,[b]))},
fw:function(a){H.jT(a)
a.fixed$length=Array
return a},
S:function(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.d6.prototype
return J.d5.prototype}if(typeof a=="string")return J.by.prototype
if(a==null)return J.fy.prototype
if(typeof a=="boolean")return J.fx.prototype
if(a.constructor==Array)return J.aE.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bg.prototype
return a}if(a instanceof P.H)return a
return J.je(a)},
jQ:function(a){if(typeof a=="string")return J.by.prototype
if(a==null)return a
if(a.constructor==Array)return J.aE.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bg.prototype
return a}if(a instanceof P.H)return a
return J.je(a)},
jd:function(a){if(a==null)return a
if(a.constructor==Array)return J.aE.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bg.prototype
return a}if(a instanceof P.H)return a
return J.je(a)},
jR:function(a){if(typeof a=="string")return J.by.prototype
if(a==null)return a
if(!(a instanceof P.H))return J.cp.prototype
return a},
ae:function(a){if(a==null)return a
if(typeof a!="object"){if(typeof a=="function")return J.bg.prototype
return a}if(a instanceof P.H)return a
return J.je(a)},
W:function(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.S(a).n(a,b)},
lk:function(a,b){if(typeof b==="number")if(a.constructor==Array||typeof a=="string"||H.mz(a,a[v.dispatchPropertyName]))if(b>>>0===b&&b<a.length)return a[b]
return J.jQ(a).m(a,b)},
eM:function(a,b){return J.ae(a).f6(a,b)},
ll:function(a,b,c,d){return J.ae(a).fA(a,b,c,d)},
k0:function(a,b){return J.ae(a).u(a,b)},
jo:function(a,b){return J.jd(a).A(a,b)},
lm:function(a,b){return J.jd(a).L(a,b)},
ln:function(a){return J.ae(a).gfF(a)},
bq:function(a){return J.S(a).gE(a)},
bT:function(a){return J.jd(a).gN(a)},
br:function(a){return J.jQ(a).gk(a)},
lo:function(a){return J.ae(a).ghG(a)},
jp:function(a,b){return J.ae(a).aB(a,b)},
k1:function(a){return J.jd(a).hy(a)},
lp:function(a,b,c){return J.jR(a).aP(a,b,c)},
lq:function(a){return J.jR(a).hO(a)},
ag:function(a){return J.S(a).i(a)},
a:function a(){},
fx:function fx(){},
fy:function fy(){},
d8:function d8(){},
h6:function h6(){},
cp:function cp(){},
bg:function bg(){},
aE:function aE(a){this.$ti=a},
jx:function jx(a){this.$ti=a},
al:function al(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=null
_.$ti=d},
d7:function d7(){},
d6:function d6(){},
d5:function d5(){},
by:function by(){}},P={
m_:function(){var u,t,s
u={}
if(self.scheduleImmediate!=null)return P.mi()
if(self.MutationObserver!=null&&self.document!=null){t=self.document.createElement("div")
s=self.document.createElement("span")
u.a=null
new self.MutationObserver(H.bM(new P.iq(u),1)).observe(t,{childList:true})
return new P.ip(u,t,s)}else if(self.setImmediate!=null)return P.mj()
return P.mk()},
m0:function(a){self.scheduleImmediate(H.bM(new P.ir(H.j(a,{func:1,ret:-1})),0))},
m1:function(a){self.setImmediate(H.bM(new P.is(H.j(a,{func:1,ret:-1})),0))},
m2:function(a){P.jC(C.q,H.j(a,{func:1,ret:-1}))},
jC:function(a,b){var u
H.j(b,{func:1,ret:-1})
u=C.f.at(a.a,1000)
return P.m8(u<0?0:u,b)},
kA:function(a,b){var u
H.j(b,{func:1,ret:-1,args:[P.aN]})
u=C.f.at(a.a,1000)
return P.m9(u<0?0:u,b)},
m8:function(a,b){var u=new P.eu(!0)
u.dN(a,b)
return u},
m9:function(a,b){var u=new P.eu(!1)
u.dO(a,b)
return u},
m3:function(a,b){var u,t,s
b.a=1
try{a.d3(new P.iB(b),new P.iC(b),null)}catch(s){u=H.ak(s)
t=H.bO(s)
P.mH(new P.iD(b,u,t))}},
kH:function(a,b){var u,t
for(;u=a.a,u===2;)a=H.l(a.c,"$iaq")
if(u>=4){t=b.bu()
b.a=a.a
b.c=a.c
P.ct(b,t)}else{t=H.l(b.c,"$iaR")
b.a=2
b.c=a
a.cn(t)}},
ct:function(a,b){var u,t,s,r,q,p,o,n,m,l,k,j,i,h
u={}
u.a=a
for(t=a;!0;){s={}
r=t.a===8
if(b==null){if(r){q=H.l(t.c,"$ia8")
t=t.b
p=q.a
o=q.b
t.toString
P.j8(null,null,t,p,o)}return}for(;n=b.a,n!=null;b=n){b.a=null
P.ct(u.a,b)}t=u.a
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
if(k){H.l(m,"$ia8")
t=t.b
p=m.a
o=m.b
t.toString
P.j8(null,null,t,p,o)
return}j=$.R
if(j!=l)$.R=l
else j=null
t=b.c
if(t===8)new P.iH(u,s,b,r).$0()
else if(p){if((t&1)!==0)new P.iG(s,b,m).$0()}else if((t&2)!==0)new P.iF(u,s,b).$0()
if(j!=null)$.R=j
t=s.b
if(!!J.S(t).$ic4){if(t.a>=4){i=H.l(o.c,"$iaR")
o.c=null
b=o.aT(i)
o.a=t.a
o.c=t.c
u.a=t
continue}else P.kH(t,o)
return}}h=b.b
i=H.l(h.c,"$iaR")
h.c=null
b=h.aT(i)
t=s.a
p=s.b
if(!t){H.z(p,H.u(h,0))
h.a=4
h.c=p}else{H.l(p,"$ia8")
h.a=8
h.c=p}u.a=h
t=h}},
me:function(a,b){if(H.eL(a,{func:1,args:[P.H,P.ad]}))return H.j(a,{func:1,ret:null,args:[P.H,P.ad]})
if(H.eL(a,{func:1,args:[P.H]}))return H.j(a,{func:1,ret:null,args:[P.H]})
throw H.f(P.jq(a,"onError","Error handler must accept one Object or one Object and a StackTrace as arguments, and return a a valid result"))},
md:function(){var u,t
for(;u=$.bJ,u!=null;){$.cE=null
t=u.b
$.bJ=t
if(t==null)$.cD=null
u.a.$0()}},
mh:function(){$.jJ=!0
try{P.md()}finally{$.cE=null
$.jJ=!1
if($.bJ!=null)$.jZ().$1(P.kU())}},
kP:function(a){var u=new P.dR(H.j(a,{func:1,ret:-1}))
if($.bJ==null){$.cD=u
$.bJ=u
if(!$.jJ)$.jZ().$1(P.kU())}else{$.cD.b=u
$.cD=u}},
mg:function(a){var u,t,s
H.j(a,{func:1,ret:-1})
u=$.bJ
if(u==null){P.kP(a)
$.cE=$.cD
return}t=new P.dR(a)
s=$.cE
if(s==null){t.b=u
$.cE=t
$.bJ=t}else{t.b=s.b
s.b=t
$.cE=t
if(t.b==null)$.cD=t}},
mH:function(a){var u,t
u={func:1,ret:-1}
H.j(a,u)
t=$.R
if(C.h===t){P.ja(null,null,C.h,a)
return}t.toString
P.ja(null,null,t,H.j(t.by(a),u))},
kz:function(a,b){var u,t
u={func:1,ret:-1}
H.j(b,u)
t=$.R
if(t===C.h){t.toString
return P.jC(a,b)}return P.jC(a,H.j(t.by(b),u))},
lZ:function(a,b){var u,t,s
u={func:1,ret:-1,args:[P.aN]}
H.j(b,u)
t=$.R
if(t===C.h){t.toString
return P.kA(a,b)}s=t.cB(b,P.aN)
$.R.toString
return P.kA(a,H.j(s,u))},
j8:function(a,b,c,d,e){var u={}
u.a=d
P.mg(new P.j9(u,e))},
kN:function(a,b,c,d,e){var u,t
H.j(d,{func:1,ret:e})
t=$.R
if(t===c)return d.$0()
$.R=c
u=t
try{t=d.$0()
return t}finally{$.R=u}},
kO:function(a,b,c,d,e,f,g){var u,t
H.j(d,{func:1,ret:f,args:[g]})
H.z(e,g)
t=$.R
if(t===c)return d.$1(e)
$.R=c
u=t
try{t=d.$1(e)
return t}finally{$.R=u}},
mf:function(a,b,c,d,e,f,g,h,i){var u,t
H.j(d,{func:1,ret:g,args:[h,i]})
H.z(e,h)
H.z(f,i)
t=$.R
if(t===c)return d.$2(e,f)
$.R=c
u=t
try{t=d.$2(e,f)
return t}finally{$.R=u}},
ja:function(a,b,c,d){var u
H.j(d,{func:1,ret:-1})
u=C.h!==c
if(u)d=!(!u||!1)?c.by(d):c.fG(d,-1)
P.kP(d)},
iq:function iq(a){this.a=a},
ip:function ip(a,b,c){this.a=a
this.b=b
this.c=c},
ir:function ir(a){this.a=a},
is:function is(a){this.a=a},
eu:function eu(a){this.a=a
this.b=null
this.c=0},
j1:function j1(a,b){this.a=a
this.b=b},
j0:function j0(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
aR:function aR(a,b,c,d,e){var _=this
_.a=null
_.b=a
_.c=b
_.d=c
_.e=d
_.$ti=e},
aq:function aq(a,b,c){var _=this
_.a=a
_.b=b
_.c=null
_.$ti=c},
iA:function iA(a,b){this.a=a
this.b=b},
iE:function iE(a,b){this.a=a
this.b=b},
iB:function iB(a){this.a=a},
iC:function iC(a){this.a=a},
iD:function iD(a,b,c){this.a=a
this.b=b
this.c=c},
iH:function iH(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
iI:function iI(a){this.a=a},
iG:function iG(a,b,c){this.a=a
this.b=b
this.c=c},
iF:function iF(a,b,c){this.a=a
this.b=b
this.c=c},
dR:function dR(a){this.a=a
this.b=null},
hA:function hA(){},
hC:function hC(a,b){this.a=a
this.b=b},
hD:function hD(a,b){this.a=a
this.b=b},
cj:function cj(){},
hB:function hB(){},
aN:function aN(){},
a8:function a8(a,b){this.a=a
this.b=b},
j4:function j4(){},
j9:function j9(a,b){this.a=a
this.b=b},
iO:function iO(){},
iQ:function iQ(a,b,c){this.a=a
this.b=b
this.c=c},
iP:function iP(a,b){this.a=a
this.b=b},
iR:function iR(a,b,c){this.a=a
this.b=b
this.c=c},
kd:function(a,b){return new H.aF([a,b])},
lG:function(a){return H.mr(a,new H.aF([null,null]))},
db:function(a,b,c,d){return new P.iM([d])},
jH:function(){var u=Object.create(null)
u["<non-identifier-key>"]=u
delete u["<non-identifier-key>"]
return u},
m7:function(a,b,c){var u=new P.e5(a,b,[c])
u.c=a.e
return u},
lC:function(a,b,c){var u,t
if(P.jK(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}u=H.c([],[P.e])
t=$.cK()
C.a.h(t,a)
try{P.mc(a,u)}finally{if(0>=t.length)return H.k(t,-1)
t.pop()}t=P.kx(b,H.mA(u,"$ih"),", ")+c
return t.charCodeAt(0)==0?t:t},
jv:function(a,b,c){var u,t,s
if(P.jK(a))return b+"..."+c
u=new P.bE(b)
t=$.cK()
C.a.h(t,a)
try{s=u
s.a=P.kx(s.a,a,", ")}finally{if(0>=t.length)return H.k(t,-1)
t.pop()}u.a+=c
t=u.a
return t.charCodeAt(0)==0?t:t},
jK:function(a){var u,t
for(u=0;t=$.cK(),u<t.length;++u)if(a===t[u])return!0
return!1},
mc:function(a,b){var u,t,s,r,q,p,o,n,m,l
H.o(b,"$ib",[P.e],"$ab")
u=a.gN(a)
t=0
s=0
while(!0){if(!(t<80||s<3))break
if(!u.v())return
r=H.i(u.gH(u))
C.a.h(b,r)
t+=r.length+2;++s}if(!u.v()){if(s<=5)return
if(0>=b.length)return H.k(b,-1)
q=b.pop()
if(0>=b.length)return H.k(b,-1)
p=b.pop()}else{o=u.gH(u);++s
if(!u.v()){if(s<=4){C.a.h(b,H.i(o))
return}q=H.i(o)
if(0>=b.length)return H.k(b,-1)
p=b.pop()
t+=q.length+2}else{n=u.gH(u);++s
for(;u.v();o=n,n=m){m=u.gH(u);++s
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
ke:function(a,b){var u,t,s
u=P.db(null,null,null,b)
for(t=a.length,s=0;s<a.length;a.length===t||(0,H.B)(a),++s)u.h(0,H.z(a[s],b))
return u},
kf:function(a){var u,t
u={}
if(P.jK(a))return"{...}"
t=new P.bE("")
try{C.a.h($.cK(),a)
t.a+="{"
u.a=!0
J.lm(a,new P.fI(u,t))
t.a+="}"}finally{u=$.cK()
if(0>=u.length)return H.k(u,-1)
u.pop()}u=t.a
return u.charCodeAt(0)==0?u:u},
iM:function iM(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
bI:function bI(a){this.a=a
this.c=this.b=null},
e5:function e5(a,b,c){var _=this
_.a=a
_.b=b
_.d=_.c=null
_.$ti=c},
fF:function fF(){},
r:function r(){},
fH:function fH(){},
fI:function fI(a,b){this.a=a
this.b=b},
a1:function a1(){},
iT:function iT(){},
e6:function e6(){},
bY:function bY(){},
bZ:function bZ(){},
fd:function fd(){},
fu:function fu(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
ft:function ft(a){this.a=a},
i9:function i9(a){this.a=a},
ia:function ia(){},
j2:function j2(a){this.b=this.a=0
this.c=a},
lB:function(a){if(a instanceof H.bX)return a.i(0)
return"Instance of '"+H.bB(a)+"'"},
lH:function(a,b,c,d){var u,t
H.z(b,d)
u=J.lE(a,d)
if(a!==0&&!0)for(t=0;t<u.length;++t)C.a.P(u,t,b)
return H.o(u,"$ib",[d],"$ab")},
lI:function(a,b,c){var u,t,s
u=[c]
t=H.c([],u)
for(s=a.gN(a);s.v();)C.a.h(t,H.z(s.gH(s),c))
if(b)return t
return H.o(J.fw(t),"$ib",u,"$ab")},
jB:function(a,b,c){var u,t
u=P.A
H.o(a,"$ih",[u],"$ah")
if(a.constructor===Array){H.o(a,"$iaE",[u],"$aaE")
t=a.length
c=P.kr(b,c,t,null,null,null)
return H.kq(b>0||c<t?C.a.du(a,b,c):a)}return P.lX(a,b,c)},
lX:function(a,b,c){var u,t,s
H.o(a,"$ih",[P.A],"$ah")
u=J.bT(a)
for(t=0;t<b;++t)if(!u.v())throw H.f(P.an(b,0,t,null,null))
s=[]
for(;u.v();)s.push(u.gH(u))
return H.kq(s)},
lT:function(a,b,c){return new H.fz(a,H.lF(a,!1,!0,!1))},
kx:function(a,b,c){var u=J.bT(b)
if(!u.v())return a
if(c.length===0){do a+=H.i(u.gH(u))
while(u.v())}else{a+=H.i(u.gH(u))
for(;u.v();)a=a+c+H.i(u.gH(u))}return a},
kL:function(a,b,c,d){var u,t,s,r,q,p
H.o(a,"$ib",[P.A],"$ab")
if(c===C.w){u=$.lj().b
u=u.test(b)}else u=!1
if(u)return b
t=C.H.fO(H.z(b,H.af(c,"bY",0)))
for(u=t.length,s=0,r="";s<u;++s){q=t[s]
if(q<128){p=q>>>4
if(p>=8)return H.k(a,p)
p=(a[p]&1<<(q&15))!==0}else p=!1
if(p)r+=H.jA(q)
else r=r+"%"+"0123456789ABCDEF"[q>>>4&15]+"0123456789ABCDEF"[q&15]}return r.charCodeAt(0)==0?r:r},
lx:function(a){var u,t
u=Math.abs(a)
t=a<0?"-":""
if(u>=1000)return""+a
if(u>=100)return t+"0"+u
if(u>=10)return t+"00"+u
return t+"000"+u},
ly:function(a){if(a>=100)return""+a
if(a>=10)return"0"+a
return"00"+a},
cU:function(a){if(a>=10)return""+a
return"0"+a},
k8:function(a,b,c,d,e,f){return new P.bb(864e8*a+36e8*b+6e7*e+1e6*f+1000*d+c)},
ff:function(a){if(typeof a==="number"||typeof a==="boolean"||null==a)return J.ag(a)
if(typeof a==="string")return JSON.stringify(a)
return P.lB(a)},
lr:function(a){return new P.as(!1,null,null,a)},
jq:function(a,b,c){return new P.as(!0,a,b,c)},
hb:function(a,b,c){return new P.bC(null,null,!0,a,b,"Value not in range")},
an:function(a,b,c,d,e){return new P.bC(b,c,!0,a,d,"Invalid value")},
kr:function(a,b,c,d,e,f){if(0>a||a>c)throw H.f(P.an(a,0,c,"start",f))
if(b!=null){if(a>b||b>c)throw H.f(P.an(b,a,c,"end",f))
return b}return c},
P:function(a,b,c,d,e){var u=H.a6(e==null?J.br(b):e)
return new P.fv(b,u,!0,a,c,"Index out of range")},
ao:function(a){return new P.i7(a)},
kC:function(a){return new P.i5(a)},
kw:function(a){return new P.ci(a)},
ba:function(a){return new P.eZ(a)},
X:function(a){return new P.dZ(a)},
jW:function(a){H.mF(a)},
I:function I(){},
aa:function aa(a,b){this.a=a
this.b=b},
x:function x(){},
bb:function bb(a){this.a=a},
f9:function f9(){},
fa:function fa(){},
bc:function bc(){},
dm:function dm(){},
as:function as(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
bC:function bC(a,b,c,d,e,f){var _=this
_.e=a
_.f=b
_.a=c
_.b=d
_.c=e
_.d=f},
fv:function fv(a,b,c,d,e,f){var _=this
_.e=a
_.f=b
_.a=c
_.b=d
_.c=e
_.d=f},
i7:function i7(a){this.a=a},
i5:function i5(a){this.a=a},
ci:function ci(a){this.a=a},
eZ:function eZ(a){this.a=a},
h5:function h5(){},
dv:function dv(){},
f3:function f3(a){this.a=a},
dZ:function dZ(a){this.a=a},
fo:function fo(a,b,c){this.a=a
this.b=b
this.c=c},
bd:function bd(){},
A:function A(){},
h:function h(){},
aD:function aD(){},
b:function b(){},
G:function G(){},
F:function F(){},
V:function V(){},
H:function H(){},
ad:function ad(){},
e:function e(){},
bE:function bE(a){this.a=a},
mo:function(a){var u,t
u=J.S(a)
if(!!u.$ibe){t=u.gcH(a)
if(t.constructor===Array)if(typeof CanvasPixelArray!=="undefined"){t.constructor=CanvasPixelArray
t.BYTES_PER_ELEMENT=1}return a}return new P.ez(a.data,a.height,a.width)},
mn:function(a){if(a instanceof P.ez)return{data:a.a,height:a.b,width:a.c}
return a},
b1:function(a){var u,t,s,r,q
if(a==null)return
u=P.kd(P.e,null)
t=Object.getOwnPropertyNames(a)
for(s=t.length,r=0;r<t.length;t.length===s||(0,H.B)(t),++r){q=H.E(t[r])
u.P(0,q,a[q])}return u},
mm:function(a,b){var u={}
a.L(0,new P.jb(u))
return u},
ez:function ez(a,b,c){this.a=a
this.b=b
this.c=c},
jb:function jb(a){this.a=a},
fk:function fk(a,b){this.a=a
this.b=b},
fl:function fl(){},
fm:function fm(){},
iL:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
m6:function(a){a=536870911&a+((67108863&a)<<3)
a^=a>>>11
return 536870911&a+((16383&a)<<15)},
iN:function iN(){},
a4:function a4(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=e},
aV:function aV(){},
fC:function fC(){},
aZ:function aZ(){},
h3:function h3(){},
ha:function ha(){},
cf:function cf(){},
hE:function hE(){},
n:function n(){},
b_:function b_(){},
hS:function hS(){},
e3:function e3(){},
e4:function e4(){},
ee:function ee(){},
ef:function ef(){},
eq:function eq(){},
er:function er(){},
ex:function ex(){},
ey:function ey(){},
eQ:function eQ(){},
eR:function eR(){},
eS:function eS(a){this.a=a},
eT:function eT(){},
bs:function bs(){},
h4:function h4(){},
dS:function dS(){},
cO:function cO(){},
d0:function d0(){},
dq:function dq(){},
bD:function bD(){},
dt:function dt(){},
dz:function dz(){},
dF:function dF(){},
hw:function hw(){},
em:function em(){},
en:function en(){}},W={
k2:function(a){var u=document.createElement("a")
return u},
js:function(a,b){var u=document.createElement("canvas")
return u},
lz:function(a,b,c){var u,t
u=document.body
t=(u&&C.l).a_(u,a,b,c)
t.toString
u=W.y
u=new H.cq(new W.a9(t),H.j(new W.fc(),{func:1,ret:P.I,args:[u]}),[u])
return H.l(u.gal(u),"$iK")},
lA:function(a){H.l(a,"$id")
return"wheel"},
c2:function(a){var u,t,s
u="element tag unavailable"
try{t=J.lo(a)
if(typeof t==="string")u=a.tagName}catch(s){H.ak(s)}return u},
iK:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
kJ:function(a,b,c,d){var u,t
u=W.iK(W.iK(W.iK(W.iK(0,a),b),c),d)
t=536870911&u+((67108863&u)<<3)
t^=t>>>11
return 536870911&t+((16383&t)<<15)},
a_:function(a,b,c,d,e){var u=W.kR(new W.iz(c),W.m)
if(u!=null&&!0)J.ll(a,b,u,!1)
return new W.iy(a,b,u,!1,[e])},
kI:function(a){var u,t
u=W.k2(null)
t=window.location
u=new W.bm(new W.iS(u,t))
u.dJ(a)
return u},
m4:function(a,b,c,d){H.l(a,"$iK")
H.E(b)
H.E(c)
H.l(d,"$ibm")
return!0},
m5:function(a,b,c,d){var u,t,s
H.l(a,"$iK")
H.E(b)
H.E(c)
u=H.l(d,"$ibm").a
t=u.a
t.href=c
s=t.hostname
u=u.b
if(!(s==u.hostname&&t.port==u.port&&t.protocol==u.protocol))if(s==="")if(t.port===""){u=t.protocol
u=u===":"||u===""}else u=!1
else u=!1
else u=!0
return u},
kK:function(){var u,t,s,r,q
u=P.e
t=P.ke(C.r,u)
s=H.u(C.r,0)
r=H.j(new W.j_(),{func:1,ret:u,args:[s]})
q=H.c(["TEMPLATE"],[u])
t=new W.iZ(t,P.db(null,null,null,u),P.db(null,null,null,u),P.db(null,null,null,u),null)
t.dM(null,new H.fL(C.r,r,[s,u]),q,null)
return t},
kR:function(a,b){var u
H.j(a,{func:1,ret:-1,args:[b]})
u=$.R
if(u===C.h)return a
return u.cB(a,b)},
t:function t(){},
eN:function eN(){},
cL:function cL(){},
eO:function eO(){},
bU:function bU(){},
cN:function cN(){},
b7:function b7(){},
bt:function bt(){},
bu:function bu(){},
b8:function b8(){},
c_:function c_(){},
f_:function f_(){},
J:function J(){},
c0:function c0(){},
f0:function f0(){},
az:function az(){},
aA:function aA(){},
f1:function f1(){},
f2:function f2(){},
f5:function f5(){},
am:function am(){},
c1:function c1(){},
f6:function f6(){},
cV:function cV(){},
cW:function cW(){},
cX:function cX(){},
f7:function f7(){},
f8:function f8(){},
iu:function iu(a,b){this.a=a
this.b=b},
K:function K(){},
fc:function fc(){},
m:function m(){},
d:function d(){},
aB:function aB(){},
fi:function fi(){},
fj:function fj(){},
fn:function fn(){},
aC:function aC(){},
d1:function d1(){},
fs:function fs(){},
bx:function bx(){},
d2:function d2(){},
be:function be(){},
c6:function c6(){},
aG:function aG(){},
dc:function dc(){},
c9:function c9(){},
fM:function fM(){},
fN:function fN(){},
fO:function fO(a){this.a=a},
fP:function fP(){},
fQ:function fQ(a){this.a=a},
aH:function aH(){},
fR:function fR(){},
a2:function a2(){},
a9:function a9(a){this.a=a},
y:function y(){},
cd:function cd(){},
aI:function aI(){},
h8:function h8(){},
dr:function dr(){},
hi:function hi(){},
hj:function hj(a){this.a=a},
hl:function hl(){},
aJ:function aJ(){},
hu:function hu(){},
aK:function aK(){},
hv:function hv(){},
aL:function aL(){},
hy:function hy(){},
hz:function hz(a){this.a=a},
at:function at(){},
bF:function bF(){},
dw:function dw(){},
dx:function dx(){},
hF:function hF(){},
ck:function ck(){},
aM:function aM(){},
au:function au(){},
hH:function hH(){},
hI:function hI(){},
hM:function hM(){},
aO:function aO(){},
av:function av(){},
hQ:function hQ(){},
hR:function hR(){},
bl:function bl(){},
i8:function i8(){},
ik:function ik(){},
il:function il(){},
aQ:function aQ(){},
cr:function cr(){},
cs:function cs(){},
iv:function iv(){},
dU:function dU(){},
iJ:function iJ(){},
eb:function eb(){},
iW:function iW(){},
iX:function iX(){},
it:function it(){},
iw:function iw(a){this.a=a},
ix:function ix(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
jG:function jG(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
iy:function iy(a,b,c,d,e){var _=this
_.a=0
_.b=a
_.c=b
_.d=c
_.e=d
_.$ti=e},
iz:function iz(a){this.a=a},
bm:function bm(a){this.a=a},
w:function w(){},
dk:function dk(a){this.a=a},
h_:function h_(a){this.a=a},
fZ:function fZ(a,b,c){this.a=a
this.b=b
this.c=c},
ej:function ej(){},
iU:function iU(){},
iV:function iV(){},
iZ:function iZ(a,b,c,d,e){var _=this
_.e=a
_.a=b
_.b=c
_.c=d
_.d=e},
j_:function j_(){},
iY:function iY(){},
d_:function d_(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=null
_.$ti=d},
aj:function aj(){},
iS:function iS(a,b){this.a=a
this.b=b},
eA:function eA(a){this.a=a},
j3:function j3(a){this.a=a},
dT:function dT(){},
dV:function dV(){},
dW:function dW(){},
dX:function dX(){},
dY:function dY(){},
e_:function e_(){},
e0:function e0(){},
e1:function e1(){},
e2:function e2(){},
e7:function e7(){},
e8:function e8(){},
e9:function e9(){},
ea:function ea(){},
ec:function ec(){},
ed:function ed(){},
eg:function eg(){},
eh:function eh(){},
ei:function ei(){},
cy:function cy(){},
cz:function cz(){},
ek:function ek(){},
el:function el(){},
ep:function ep(){},
es:function es(){},
et:function et(){},
cA:function cA(){},
cB:function cB(){},
ev:function ev(){},
ew:function ew(){},
eB:function eB(){},
eC:function eC(){},
eD:function eD(){},
eE:function eE(){},
eF:function eF(){},
eG:function eG(){},
eH:function eH(){},
eI:function eI(){},
eJ:function eJ(){},
eK:function eK(){}},O={
k7:function(a){var u=new O.Y([a])
u.bW(a)
return u},
Y:function Y(a){var _=this
_.d=_.c=_.b=_.a=null
_.$ti=a},
c8:function c8(){this.b=this.a=null},
dl:function dl(){var _=this
_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
bG:function bG(){}},E={
lU:function(a,b){var u=new E.he(a,b)
u.dD(a,b)
return u},
lY:function(a,b,c,d,e){var u,t,s,r
u=J.S(a)
if(!!u.$ibt)return E.ky(a,!0,!0,!0,!1)
t=W.js(null,null)
s=t.style
s.width="100%"
s.height="100%"
u.gcE(a).h(0,t)
r=E.ky(t,!0,!0,!0,!1)
r.a=a
return r},
ky:function(a,b,c,d,e){var u,t,s,r,q,p,o,n,m,l,k
u=new E.dB()
t=H.l(C.o.bQ(a,"webgl2",P.lG(["alpha",!0,"depth",!0,"stencil",!1,"antialias",!0])),"$ibD")
if(t==null)H.a0(P.X("Failed to get the rendering context for WebGL."))
u.b=a
u.a=a
u.c=t
u.e=E.lU(t,a)
s=new T.hJ(t)
s.b=H.a6((t&&C.b).bR(t,3379))
s.c=H.a6(C.b.bR(t,34076))
s.d=0
s.e=0
u.f=s
s=new X.dL(a)
r=new X.fB()
r.c=new X.ai(!1,!1,!1)
r.sf3(P.db(null,null,null,P.A))
s.b=r
r=new X.fS(s)
r.f=0
r.r=V.bj()
r.x=V.bj()
r.Q=1
r.ch=1
s.c=r
r=new X.fG(s)
r.r=0
r.x=V.bj()
r.Q=1
r.ch=1
r.cx=1
r.cy=1
s.d=r
r=new X.hP(s)
r.e=0
r.f=V.bj()
r.r=V.bj()
s.e=r
s.f=!1
s.r=!1
s.x=!1
s.y=null
s.se2(H.c([],[[P.cj,P.H]]))
r=s.z
q=document
p=W.a2
o={func:1,ret:-1,args:[p]};(r&&C.a).h(r,W.a_(q,"contextmenu",H.j(s.gey(),o),!1,p))
r=s.z
n=W.m
m={func:1,ret:-1,args:[n]};(r&&C.a).h(r,W.a_(a,"focus",H.j(s.geE(),m),!1,n))
r=s.z;(r&&C.a).h(r,W.a_(a,"blur",H.j(s.ger(),m),!1,n))
r=s.z
l=W.aG
k={func:1,ret:-1,args:[l]};(r&&C.a).h(r,W.a_(q,"keyup",H.j(s.geI(),k),!1,l))
r=s.z;(r&&C.a).h(r,W.a_(q,"keydown",H.j(s.geG(),k),!1,l))
l=s.z;(l&&C.a).h(l,W.a_(a,"mousedown",H.j(s.geL(),o),!1,p))
l=s.z;(l&&C.a).h(l,W.a_(a,"mouseup",H.j(s.geP(),o),!1,p))
l=s.z;(l&&C.a).h(l,W.a_(a,"mousemove",H.j(s.geN(),o),!1,p))
l=s.z
k=W.aQ;(l&&C.a).h(l,W.a_(a,H.E(W.lA(a)),H.j(s.geR(),{func:1,ret:-1,args:[k]}),!1,k))
k=s.z;(k&&C.a).h(k,W.a_(q,"mousemove",H.j(s.geA(),o),!1,p))
k=s.z;(k&&C.a).h(k,W.a_(q,"mouseup",H.j(s.geC(),o),!1,p))
p=s.z;(p&&C.a).h(p,W.a_(q,"pointerlockchange",H.j(s.geT(),m),!1,n))
n=s.z
m=W.av
q={func:1,ret:-1,args:[m]};(n&&C.a).h(n,W.a_(a,"touchstart",H.j(s.gf1(),q),!1,m))
n=s.z;(n&&C.a).h(n,W.a_(a,"touchend",H.j(s.geY(),q),!1,m))
n=s.z;(n&&C.a).h(n,W.a_(a,"touchmove",H.j(s.gf_(),q),!1,m))
u.r=s
u.Q=!0
u.ch=!1
u.cx=new P.aa(Date.now(),!1)
u.cy=0
u.co()
return u},
eU:function eU(){},
ab:function ab(){var _=this
_.fx=_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
he:function he(a,b){var _=this
_.a=a
_.b=b
_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=null},
hf:function hf(a){this.a=a},
hg:function hg(a){this.a=a},
hh:function hh(a){this.a=a},
dB:function dB(){var _=this
_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
hL:function hL(a){this.a=a}},Z={
jF:function(a,b,c){var u
H.o(c,"$ib",[P.A],"$ab")
u=a.createBuffer()
C.b.a8(a,b,u)
C.b.cD(a,b,new Int16Array(H.j7(c)),35044)
C.b.a8(a,b,null)
return new Z.dQ(b,u)},
ap:function(a){return new Z.b0(a)},
dQ:function dQ(a,b){this.a=a
this.b=b},
cP:function cP(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
im:function im(a){this.a=a},
cQ:function cQ(a,b,c){var _=this
_.a=a
_.b=null
_.c=b
_.d=c},
bf:function bf(a,b,c){this.a=a
this.b=b
this.c=c},
b0:function b0(a){this.a=a}},D={
O:function(){var u=new D.c3()
u.sad(null)
u.saS(null)
u.c=null
u.d=0
return u},
eX:function eX(){},
c3:function c3(){var _=this
_.d=_.c=_.b=_.a=null},
fg:function fg(a){this.a=a},
fh:function fh(a){this.a=a},
v:function v(a){this.a=a
this.b=null},
d3:function d3(a,b,c,d){var _=this
_.c=a
_.d=b
_.a=c
_.b=null
_.$ti=d},
d4:function d4(a,b,c,d){var _=this
_.c=a
_.d=b
_.a=c
_.b=null
_.$ti=d},
L:function L(a,b,c,d,e){var _=this
_.c=a
_.d=b
_.e=c
_.a=d
_.b=null
_.$ti=e},
kZ:function(){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1
u=V.lW("Test 030",!0)
t=W.js(null,null)
t.className="pageLargeCanvas"
t.id="testCanvas"
C.e.u(u.a,t)
s=[P.e]
u.cw(H.c(["A test of the Normal shader for dynamically rendering normal maps."],s))
u.cw(H.c(["\xab[Back to Tests|../]"],s))
r=C.y.df(document,"testCanvas")
if(r==null)H.a0(P.X("Failed to find an element with the identifier, testCanvas."))
q=E.lY(r,!0,!0,!0,!1)
p=new E.ab()
p.a=""
p.b=!0
s=E.ab
p.sdW(0,O.k7(s))
p.y.b3(p.ghi(),p.ghl())
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
p.sbT(0,null)
p.saK(null)
o=F.kv()
F.cC(o,null,null,1,1,1,0,0,1)
F.cC(o,null,null,1,1,0,1,0,3)
F.cC(o,null,null,1,1,0,0,1,2)
F.cC(o,null,null,1,1,-1,0,0,0)
F.cC(o,null,null,1,1,0,-1,0,0)
F.cC(o,null,null,1,1,0,0,-1,3)
o.aw()
p.sbT(0,o)
n=new U.c5()
n.bW(U.a3)
n.b3(n.gep(),n.geW())
n.e=null
n.f=V.dg()
n.r=0
m=q.r
l=new U.dN()
k=U.jt()
k.sbP(0,!0)
k.sbJ(6.283185307179586)
k.sbL(0)
k.sY(0,0)
k.sbK(100)
k.sO(0)
k.sbE(0.5)
l.b=k
j=l.gar()
k.gp().h(0,j)
k=U.jt()
k.sbP(0,!0)
k.sbJ(6.283185307179586)
k.sbL(0)
k.sY(0,0)
k.sbK(100)
k.sO(0)
k.sbE(0.5)
l.c=k
k.gp().h(0,j)
l.d=null
l.e=!1
l.f=!1
l.r=!1
l.x=2.5
l.y=2.5
l.z=2
l.Q=4
l.cx=!1
l.ch=!1
l.cy=0
l.db=0
l.dx=null
l.dy=0
l.fr=null
l.fx=null
i=new X.ai(!1,!1,!1)
h=l.d
l.d=i
k=[X.ai]
j=new D.L("modifiers",h,i,l,k)
j.b=!0
l.K(j)
j=l.f
if(j!==!1){l.f=!1
j=new D.L("invertX",j,!1,l,[P.I])
j.b=!0
l.K(j)}j=l.r
if(j!==!1){l.r=!1
j=new D.L("invertY",j,!1,l,[P.I])
j.b=!0
l.K(j)}l.aH(m)
n.h(0,l)
m=q.r
l=new U.dM()
j=U.jt()
j.sbP(0,!0)
j.sbJ(6.283185307179586)
j.sbL(0)
j.sY(0,0)
j.sbK(100)
j.sO(0)
j.sbE(0.2)
l.b=j
j.gp().h(0,l.gar())
l.c=null
l.d=!1
l.e=2.5
l.f=2
l.r=4
l.y=!1
l.x=!1
l.z=0
l.Q=null
l.ch=0
l.cx=null
l.cy=null
i=new X.ai(!0,!1,!1)
h=l.c
l.c=i
j=new D.L("modifiers",h,i,l,k)
j.b=!0
l.K(j)
l.aH(m)
n.h(0,l)
m=q.r
l=new U.dO()
l.c=0.01
l.d=0
l.e=0
i=new X.ai(!1,!1,!1)
l.b=i
k=new D.L("modifiers",null,i,l,k)
k.b=!0
l.K(k)
l.aH(m)
n.h(0,l)
p.saK(n)
g=new O.dl()
n=$.kg
if(n==null){n=new V.df(1,0,0,0,1,0,0,0,1)
$.kg=n}g.b=n
g.c=V.dg()
g.d=C.i
g.cp(null)
g.cq(null)
g.c0()
g.r=null
n=q.f
m=n.a
f=m.createTexture()
C.b.av(m,34067,f)
C.b.b_(m,34067,10242,10497)
C.b.b_(m,34067,10243,10497)
C.b.b_(m,34067,10241,9729)
C.b.b_(m,34067,10240,9729)
C.b.av(m,34067,null)
e=new T.dA()
e.a=0
e.b=f
e.c=!1
e.d=0
n.aq(e,f,"../resources/diceBumpMap/posx.png",34069,!1,!1)
n.aq(e,f,"../resources/diceBumpMap/negx.png",34070,!1,!1)
n.aq(e,f,"../resources/diceBumpMap/posy.png",34071,!1,!1)
n.aq(e,f,"../resources/diceBumpMap/negy.png",34072,!1,!1)
n.aq(e,f,"../resources/diceBumpMap/posz.png",34073,!1,!1)
n.aq(e,f,"../resources/diceBumpMap/negz.png",34074,!1,!1)
if(g.d!==C.j){g.d=C.j
g.cp(null)
g.a=null}g.cq(e)
d=X.kb(!0,!0,!1,null,2000,null,0)
c=new V.aT(0.5,0.5,1,1)
if(!d.a.n(0,c)){h=d.a
d.a=c
n=new D.L("color",h,c,d,[V.aT])
n.b=!0
m=d.x
if(m!=null)m.B(n)}b=new M.cY()
b.sdK(0,O.k7(s))
b.d.b3(b.geu(),b.gew())
b.e=null
b.f=null
b.r=null
b.x=null
a=X.kb(!0,!0,!1,null,2000,null,0)
a0=new X.dn()
a0.c=1.0471975511965976
a0.d=0.1
a0.e=2000
a0.saK(null)
s=a0.c
if(!(Math.abs(s-1.0471975511965976)<$.N().a)){a0.c=1.0471975511965976
s=new D.L("fov",s,1.0471975511965976,a0,[P.x])
s.b=!0
a0.an(s)}s=a0.d
if(!(Math.abs(s-0.1)<$.N().a)){a0.d=0.1
s=new D.L("near",s,0.1,a0,[P.x])
s.b=!0
a0.an(s)}s=a0.e
if(!(Math.abs(s-2000)<$.N().a)){a0.e=2000
s=new D.L("far",s,2000,a0,[P.x])
s.b=!0
a0.an(s)}s=b.a
if(s!==a0){if(s!=null)s.gp().S(0,b.ga4())
h=b.a
b.a=a0
a0.gp().h(0,b.ga4())
s=new D.L("camera",h,b.a,b,[X.cS])
s.b=!0
b.ab(s)}b.sd1(0,a)
b.sd2(null)
b.sd2(g)
b.sd1(0,d)
b.d.h(0,p)
s=b.a
a1=V.aX(1,0,0,0,0,1,0,0,0,0,1,5,0,0,0,1)
n=new U.cT()
n.a=a1
s.saK(n)
s=q.d
if(s!==b){if(s!=null)s.gp().S(0,q.gbX())
q.d=b
b.gp().h(0,q.gbX())
q.bY()}s=q.z
if(s==null){s=D.O()
q.z=s}n={func:1,ret:-1,args:[D.v]}
m=H.j(new D.jj(u,g),n)
if(s.b==null)s.saS(H.c([],[n]))
s=s.b;(s&&C.a).h(s,m)
V.mI(q)},
jj:function jj(a,b){this.a=a
this.b=b}},X={cR:function cR(a,b){this.a=a
this.b=b},d9:function d9(a,b){this.a=a
this.b=b},fB:function fB(){var _=this
_.d=_.c=_.b=_.a=null},dd:function dd(a,b,c,d,e,f){var _=this
_.x=a
_.y=b
_.c=c
_.d=d
_.e=e
_.a=f
_.b=null},fG:function fG(a){var _=this
_.a=a
_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},ai:function ai(a,b,c){this.a=a
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
_.b=null},fS:function fS(a){var _=this
_.a=a
_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},ca:function ca(a,b,c,d,e){var _=this
_.x=a
_.c=b
_.d=c
_.e=d
_.a=e
_.b=null},h9:function h9(){},dD:function dD(a,b,c,d,e,f,g,h,i){var _=this
_.x=a
_.y=b
_.z=c
_.Q=d
_.ch=e
_.c=f
_.d=g
_.e=h
_.a=i
_.b=null},hP:function hP(a){var _=this
_.a=a
_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},dL:function dL(a){var _=this
_.a=a
_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},
kb:function(a,b,c,d,e,f,g){var u,t
u=new X.fp()
t=new V.aT(0,0,0,1)
u.a=t
u.b=!0
u.c=e
u.d=!0
u.e=g
u.f=!1
t=$.kt
if(t==null){t=V.ks(0,0,1,1)
$.kt=t}u.r=t
return u},
cS:function cS(){},
fp:function fp(){var _=this
_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
dn:function dn(){var _=this
_.f=_.e=_.d=_.c=_.b=_.a=null},
dy:function dy(){}},V={
mM:function(a,b,c){var u
if(c<=b)return b
u=c-b
a=C.d.dk(a-b,u)
return(a<0?a+u:a)+b},
T:function(a,b,c){if(a==null)return C.c.a1("null",c)
return C.c.a1(C.d.d4(Math.abs(a-0)<$.N().a?0:a,b),c+b+1)},
bN:function(a,b,c){var u,t,s,r,q,p
H.o(a,"$ib",[P.x],"$ab")
u=H.c([],[P.e])
for(t=a.length,s=0,r=0;r<a.length;a.length===t||(0,H.B)(a),++r){q=V.T(a[r],b,c)
s=Math.max(s,q.length)
C.a.h(u,q)}for(p=u.length-1;p>=0;--p){if(p>=u.length)return H.k(u,p)
C.a.P(u,p,C.c.a1(u[p],s))}return u},
jV:function(a,b){return C.d.hL(Math.pow(b,C.N.bF(Math.log(H.ml(a))/Math.log(b))))},
dg:function(){var u=$.kh
if(u==null){u=V.aX(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1)
$.kh=u}return u},
aX:function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){return new V.bh(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p)},
bj:function(){var u=$.kn
if(u==null){u=new V.a5(0,0)
$.kn=u}return u},
ks:function(a,b,c,d){if(c<0){a+=c
c=-c}if(d<0){b+=d
d=-d}return new V.ds(a,b,c,d)},
dP:function(){var u=$.kG
if(u==null){u=new V.U(0,0,0)
$.kG=u}return u},
aT:function aT(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
fe:function fe(a){this.a=a},
df:function df(a,b,c,d,e,f,g,h,i){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.x=h
_.y=i},
bh:function bh(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){var _=this
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
bk:function bk(a,b,c){this.a=a
this.b=b
this.c=c},
dp:function dp(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
ds:function ds(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
M:function M(a,b){this.a=a
this.b=b},
U:function U(a,b,c){this.a=a
this.b=b
this.c=c},
Q:function(a,b){var u,t,s,r
if(a.length!==1||b.length!==1)throw H.f(P.X("The given low and high character strings for a RangeMatcher must have one and only one characters."))
u=C.c.ao(a,0)
t=C.c.ao(b,0)
s=new V.hc()
if(u>t){r=t
t=u
u=r}s.a=u
s.b=t
return s},
q:function(a){var u=new V.hm()
u.dE(a)
return u},
hO:function(){var u,t
u=new V.hN()
t=P.e
u.sfj(new H.aF([t,V.ch]))
u.sfn(new H.aF([t,V.cm]))
u.c=null
return u},
aS:function aS(){},
ah:function ah(){},
de:function de(){},
ac:function ac(){this.a=null},
hc:function hc(){this.b=this.a=null},
hm:function hm(){this.a=null},
ch:function ch(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
dC:function dC(a,b,c){this.a=a
this.b=b
this.c=c},
cm:function cm(a,b){this.a=a
this.b=b
this.c=null},
hN:function hN(){this.c=this.b=this.a=null},
cn:function cn(a){this.b=a
this.a=this.c=null},
mI:function(a){P.lZ(C.J,new V.jm(a))},
lW:function(a,b){var u=new V.hq()
u.dG(a,!0)
return u},
b9:function b9(){},
jm:function jm(a){this.a=a},
f4:function f4(a){var _=this
_.a=a
_.d=_.c=_.b=null},
fq:function fq(a){var _=this
_.a=a
_.d=_.c=_.b=null},
fr:function fr(a){var _=this
_.a=a
_.d=_.c=_.b=null},
h7:function h7(a){var _=this
_.a=a
_.d=_.c=_.b=null},
hq:function hq(){this.b=this.a=null},
hs:function hs(a){this.a=a},
hr:function hr(a){this.a=a},
ht:function ht(a){this.a=a}},U={
jt:function(){var u=new U.eY()
u.a=!0
u.b=1e12
u.c=-1e12
u.d=0
u.e=100
u.f=0
u.x=0
u.r=0
return u},
eY:function eY(){var _=this
_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
cT:function cT(){this.b=this.a=null},
c5:function c5(){var _=this
_.d=_.c=_.b=_.a=_.r=_.f=_.e=null},
a3:function a3(){},
dM:function dM(){var _=this
_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
dN:function dN(){var _=this
_.fx=_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
dO:function dO(){var _=this
_.r=_.f=_.e=_.d=_.c=_.b=_.a=null}},M={cY:function cY(){var _=this
_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null}},A={
kj:function(a){var u,t,s,r,q,p,o
u=a!==C.i
t=a===C.m
s=a===C.j
r="Normal_"+C.f.i(a.a)
q=$.b4()
p=$.b3()
p=q.a|p.a
o=new Z.b0(p)
if(u)o=new Z.b0(p|$.b2().a)
if(t)o=new Z.b0(o.a|$.b5().a)
return new A.h1(a,u,t,s,r,s?new Z.b0(o.a|$.b6().a):o)},
jD:function(a,b,c,d,e){var u=new A.hX(a,b,c,e)
u.f=d
u.sfw(P.lH(d,0,!1,P.A))
return u},
cM:function cM(a,b,c){this.a=a
this.b=b
this.c=c},
eP:function eP(a){this.a=a},
h0:function h0(a,b){var _=this
_.id=_.go=_.fy=_.fx=_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=null
_.a=a
_.b=b
_.y=_.x=_.r=_.f=_.e=_.d=_.c=null},
h1:function h1(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
cg:function cg(){},
bv:function bv(a,b){this.a=a
this.b=b},
dE:function dE(){},
i3:function i3(a){this.a=a},
co:function co(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
hZ:function hZ(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
i0:function i0(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
i2:function i2(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
hX:function hX(a,b,c,d){var _=this
_.f=_.e=null
_.a=a
_.b=b
_.c=c
_.d=d},
hW:function hW(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
hY:function hY(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
i_:function i_(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
i1:function i1(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
i4:function i4(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
dG:function dG(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
bH:function bH(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
dH:function dH(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
dI:function dI(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d}},F={
j6:function(a){var u=a.a>0?1:0
if(a.b>0)u+=2
return(a.c>0?u+4:u)*2},
cC:function(a,b,c,d,a0,a1,a2,a3,a4){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e
u={}
t=a1+a2
s=t+a3
r=a2+a3
q=a3+a1
p=new V.U(s,r+a1,q+a2)
u.a=p
o=a1-a2
n=a2-a3
m=a3-a1
l=new V.U(o+a3,n+a1,m+a2)
u.b=l
k=new V.U(o-a3,n-a1,m-a2)
u.c=k
j=new V.U(t-a3,r-a1,q-a2)
u.d=j
if(s>0){u.d=l
u.b=j
s=l
t=j}else{s=j
t=l}for(q=s,s=t,t=p,r=k,i=0;i<a4;++i,h=q,q=t,t=s,s=r,r=h){u.a=s
u.b=r
u.c=q
u.d=t}g=F.j6(t)
f=F.j6(u.b)
e=F.mK(d,a0,new F.j5(u,F.j6(u.c),F.j6(u.d),f,g,c),b)
if(e!=null)a.hh(e)},
mK:function(a,b,c,d){var u,t,s,r,q,p,o,n,m,l,k,j,i,h
H.j(c,{func:1,ret:-1,args:[F.ax,P.x,P.x]})
if(a<1)return
if(b<1)return
u=F.kv()
t=H.c([],[F.ax])
for(s=0;s<=b;++s){r=s/b
q=u.a
if(r<0)p=0
else p=r>1?1:r
q.toString
o=F.jE(null,null,new V.aT(p,0,0,1),null,null,new V.a5(r,1),null,null,0)
q.h(0,o)
c.$3(o,r,0)
C.a.h(t,o.bD(d))}for(s=1;s<=a;++s){n=s/a
for(q=n>1,p=n<0,m=1-n,l=0;l<=b;++l){r=l/b
k=u.a
if(r<0)j=0
else j=r>1?1:r
if(p)i=0
else i=q?1:n
if(p)h=0
else h=q?1:n
k.toString
o=F.jE(null,null,new V.aT(j,i,h,1),null,null,new V.a5(r,m),null,null,0)
k.h(0,o)
c.$3(o,r,n)
C.a.h(t,o.bD(d))}}u.d.fB(a+1,b+1,t)
return u},
cZ:function(a,b,c){var u,t
u=new F.Z()
t=a.a
if(t==null)H.a0(P.X("May not create a face with a first vertex which is not attached to a shape."))
if(t!=b.a||t!=c.a)H.a0(P.X("May not create a face with vertices attached to different shapes."))
u.a=a
C.a.h(a.d.b,u)
u.b=b
C.a.h(b.d.c,u)
u.c=c
C.a.h(c.d.d,u)
C.a.h(u.a.a.d.b,u)
u.a.a.X()
return u},
kv:function(){var u,t
u=new F.du()
t=new F.ib(u)
t.b=!1
t.sfz(H.c([],[F.ax]))
u.a=t
t=new F.hp(u)
t.sbs(H.c([],[F.bi]))
u.b=t
t=new F.ho(u)
t.see(H.c([],[F.aW]))
u.c=t
t=new F.hn(u)
t.se3(H.c([],[F.Z]))
u.d=t
u.e=null
return u},
jE:function(a,b,c,d,e,f,g,h,i){var u,t,s
u=new F.ax()
t=new F.ih(u)
t.sbs(H.c([],[F.bi]))
u.b=t
t=new F.ig(u)
s=[F.aW]
t.sef(H.c([],s))
t.seg(H.c([],s))
u.c=t
t=new F.ic(u)
s=[F.Z]
t.se4(H.c([],s))
t.se5(H.c([],s))
t.se6(H.c([],s))
u.d=t
h=$.lf()
u.e=0
t=$.b4()
s=h.a
u.f=(s&t.a)!==0?d:null
u.r=(s&$.b3().a)!==0?e:null
u.x=(s&$.b2().a)!==0?b:null
u.y=(s&$.b5().a)!==0?f:null
u.z=(s&$.b6().a)!==0?g:null
u.Q=(s&$.lg().a)!==0?c:null
u.ch=(s&$.bS().a)!==0?i:0
u.cx=(s&$.bR().a)!==0?a:null
return u},
j5:function j5(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
Z:function Z(){var _=this
_.e=_.d=_.c=_.b=_.a=null},
aW:function aW(){this.b=this.a=null},
bi:function bi(){this.a=null},
du:function du(){var _=this
_.e=_.d=_.c=_.b=_.a=null},
hn:function hn(a){this.a=a
this.b=null},
ho:function ho(a){this.a=a
this.b=null},
hp:function hp(a){this.a=a
this.b=null},
ax:function ax(){var _=this
_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
ij:function ij(a){this.a=a},
ii:function ii(a){this.a=a},
ib:function ib(a){this.a=a
this.c=this.b=null},
ic:function ic(a){var _=this
_.a=a
_.d=_.c=_.b=null},
id:function id(a,b){this.a=a
this.b=b},
ie:function ie(a,b){this.a=a
this.b=b},
ig:function ig(a){this.a=a
this.c=this.b=null},
ih:function ih(a){this.a=a
this.b=null}},T={cl:function cl(){},dA:function dA(){var _=this
_.e=_.d=_.c=_.b=_.a=null},hJ:function hJ(a){var _=this
_.a=a
_.e=_.d=_.c=_.b=null},hK:function hK(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g}}
var w=[C,H,J,P,W,O,E,Z,D,X,V,U,M,A,F,T]
hunkHelpers.setFunctionNamesIfNecessary(w)
var $={}
H.jy.prototype={}
J.a.prototype={
n:function(a,b){return a===b},
gE:function(a){return H.ce(a)},
i:function(a){return"Instance of '"+H.bB(a)+"'"}}
J.fx.prototype={
i:function(a){return String(a)},
gE:function(a){return a?519018:218159},
$iI:1}
J.fy.prototype={
n:function(a,b){return null==b},
i:function(a){return"null"},
gE:function(a){return 0},
$iF:1}
J.d8.prototype={
gE:function(a){return 0},
i:function(a){return String(a)}}
J.h6.prototype={}
J.cp.prototype={}
J.bg.prototype={
i:function(a){var u=a[$.l4()]
if(u==null)return this.dz(a)
return"JavaScript function for "+H.i(J.ag(u))},
$S:function(){return{func:1,opt:[,,,,,,,,,,,,,,,,]}},
$ibd:1}
J.aE.prototype={
h:function(a,b){H.z(b,H.u(a,0))
if(!!a.fixed$length)H.a0(P.ao("add"))
a.push(b)},
S:function(a,b){var u
if(!!a.fixed$length)H.a0(P.ao("remove"))
for(u=0;u<a.length;++u)if(J.W(a[u],b)){a.splice(u,1)
return!0}return!1},
L:function(a,b){var u,t
H.j(b,{func:1,ret:-1,args:[H.u(a,0)]})
u=a.length
for(t=0;t<u;++t){b.$1(a[t])
if(a.length!==u)throw H.f(P.ba(a))}},
l:function(a,b){var u,t
u=new Array(a.length)
u.fixed$length=Array
for(t=0;t<a.length;++t)this.P(u,t,H.i(a[t]))
return u.join(b)},
hd:function(a){return this.l(a,"")},
h7:function(a,b,c){var u,t,s
H.j(b,{func:1,ret:P.I,args:[H.u(a,0)]})
u=a.length
for(t=0;t<u;++t){s=a[t]
if(b.$1(s))return s
if(a.length!==u)throw H.f(P.ba(a))}throw H.f(H.jw())},
h6:function(a,b){return this.h7(a,b,null)},
A:function(a,b){if(b<0||b>=a.length)return H.k(a,b)
return a[b]},
du:function(a,b,c){var u=a.length
if(b>u)throw H.f(P.an(b,0,a.length,"start",null))
if(c<b||c>a.length)throw H.f(P.an(c,b,a.length,"end",null))
if(b===c)return H.c([],[H.u(a,0)])
return H.c(a.slice(b,c),[H.u(a,0)])},
gaX:function(a){var u=a.length
if(u>0)return a[u-1]
throw H.f(H.jw())},
cz:function(a,b){var u,t
H.j(b,{func:1,ret:P.I,args:[H.u(a,0)]})
u=a.length
for(t=0;t<u;++t){if(b.$1(a[t]))return!0
if(a.length!==u)throw H.f(P.ba(a))}return!1},
R:function(a,b){var u
for(u=0;u<a.length;++u)if(J.W(a[u],b))return!0
return!1},
i:function(a){return P.jv(a,"[","]")},
gN:function(a){return new J.al(a,a.length,0,[H.u(a,0)])},
gE:function(a){return H.ce(a)},
gk:function(a){return a.length},
sk:function(a,b){if(!!a.fixed$length)H.a0(P.ao("set length"))
if(b<0)throw H.f(P.an(b,0,null,"newLength",null))
a.length=b},
P:function(a,b,c){H.z(c,H.u(a,0))
if(!!a.immutable$list)H.a0(P.ao("indexed set"))
if(b>=a.length||b<0)throw H.f(H.cG(a,b))
a[b]=c},
$ih:1,
$ib:1}
J.jx.prototype={}
J.al.prototype={
gH:function(a){return this.d},
v:function(){var u,t,s
u=this.a
t=u.length
if(this.b!==t)throw H.f(H.B(u))
s=this.c
if(s>=t){this.scf(null)
return!1}this.scf(u[s]);++this.c
return!0},
scf:function(a){this.d=H.z(a,H.u(this,0))},
$iaD:1}
J.d7.prototype={
hL:function(a){var u
if(a>=-2147483648&&a<=2147483647)return a|0
if(isFinite(a)){u=a<0?Math.ceil(a):Math.floor(a)
return u+0}throw H.f(P.ao(""+a+".toInt()"))},
bF:function(a){var u,t
if(a>=0){if(a<=2147483647)return a|0}else if(a>=-2147483648){u=a|0
return a===u?u:u-1}t=Math.floor(a)
if(isFinite(t))return t
throw H.f(P.ao(""+a+".floor()"))},
a3:function(a){if(a>0){if(a!==1/0)return Math.round(a)}else if(a>-1/0)return 0-Math.round(0-a)
throw H.f(P.ao(""+a+".round()"))},
d4:function(a,b){var u,t
if(b>20)throw H.f(P.an(b,0,20,"fractionDigits",null))
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
dk:function(a,b){var u=a%b
if(u===0)return 0
if(u>0)return u
if(b<0)return u-b
else return u+b},
dC:function(a,b){if((a|0)===a)if(b>=1||b<-1)return a/b|0
return this.cr(a,b)},
at:function(a,b){return(a|0)===a?a/b|0:this.cr(a,b)},
cr:function(a,b){var u=a/b
if(u>=-2147483648&&u<=2147483647)return u|0
if(u>0){if(u!==1/0)return Math.floor(u)}else if(u>-1/0)return Math.ceil(u)
throw H.f(P.ao("Result of truncating division is "+H.i(u)+": "+H.i(a)+" ~/ "+b))},
aU:function(a,b){var u
if(a>0)u=this.fi(a,b)
else{u=b>31?31:b
u=a>>u>>>0}return u},
fi:function(a,b){return b>31?0:a>>>b},
$ix:1,
$iV:1}
J.d6.prototype={$iA:1}
J.d5.prototype={}
J.by.prototype={
bC:function(a,b){if(b<0)throw H.f(H.cG(a,b))
if(b>=a.length)H.a0(H.cG(a,b))
return a.charCodeAt(b)},
ao:function(a,b){if(b>=a.length)throw H.f(H.cG(a,b))
return a.charCodeAt(b)},
C:function(a,b){if(typeof b!=="string")throw H.f(P.jq(b,null,null))
return a+b},
dt:function(a,b,c){var u
if(c>a.length)throw H.f(P.an(c,0,a.length,null,null))
u=c+b.length
if(u>a.length)return!1
return b===a.substring(c,u)},
b5:function(a,b){return this.dt(a,b,0)},
aP:function(a,b,c){if(c==null)c=a.length
if(b<0)throw H.f(P.hb(b,null,null))
if(b>c)throw H.f(P.hb(b,null,null))
if(c>a.length)throw H.f(P.hb(c,null,null))
return a.substring(b,c)},
b6:function(a,b){return this.aP(a,b,null)},
hO:function(a){return a.toLowerCase()},
t:function(a,b){var u,t
if(0>=b)return""
if(b===1||a.length===0)return a
if(b!==b>>>0)throw H.f(C.G)
for(u=a,t="";!0;){if((b&1)===1)t=u+t
b=b>>>1
if(b===0)break
u+=u}return t},
hp:function(a,b,c){var u=b-a.length
if(u<=0)return a
return this.t(c,u)+a},
a1:function(a,b){return this.hp(a,b," ")},
i:function(a){return a},
gE:function(a){var u,t,s
for(u=a.length,t=0,s=0;s<u;++s){t=536870911&t+a.charCodeAt(s)
t=536870911&t+((524287&t)<<10)
t^=t>>6}t=536870911&t+((67108863&t)<<3)
t^=t>>11
return 536870911&t+((16383&t)<<15)},
gk:function(a){return a.length},
$ikl:1,
$ie:1}
H.p.prototype={
gk:function(a){return this.a.length},
m:function(a,b){return C.c.bC(this.a,b)},
$adK:function(){return[P.A]},
$ar:function(){return[P.A]},
$ah:function(){return[P.A]},
$ab:function(){return[P.A]}}
H.fb.prototype={}
H.bz.prototype={
gN:function(a){return new H.c7(this,this.gk(this),0,[H.af(this,"bz",0)])},
b1:function(a,b){return this.dw(0,H.j(b,{func:1,ret:P.I,args:[H.af(this,"bz",0)]}))}}
H.c7.prototype={
gH:function(a){return this.d},
v:function(){var u,t,s,r
u=this.a
t=J.jQ(u)
s=t.gk(u)
if(this.b!==s)throw H.f(P.ba(u))
r=this.c
if(r>=s){this.saD(null)
return!1}this.saD(t.A(u,r));++this.c
return!0},
saD:function(a){this.d=H.z(a,H.u(this,0))},
$iaD:1}
H.fJ.prototype={
gN:function(a){return new H.fK(J.bT(this.a),this.b,this.$ti)},
gk:function(a){return J.br(this.a)},
A:function(a,b){return this.b.$1(J.jo(this.a,b))},
$ah:function(a,b){return[b]}}
H.fK.prototype={
v:function(){var u=this.b
if(u.v()){this.saD(this.c.$1(u.gH(u)))
return!0}this.saD(null)
return!1},
gH:function(a){return this.a},
saD:function(a){this.a=H.z(a,H.u(this,1))},
$aaD:function(a,b){return[b]}}
H.fL.prototype={
gk:function(a){return J.br(this.a)},
A:function(a,b){return this.b.$1(J.jo(this.a,b))},
$abz:function(a,b){return[b]},
$ah:function(a,b){return[b]}}
H.cq.prototype={
gN:function(a){return new H.io(J.bT(this.a),this.b,this.$ti)}}
H.io.prototype={
v:function(){var u,t
for(u=this.a,t=this.b;u.v();)if(t.$1(u.gH(u)))return!0
return!1},
gH:function(a){var u=this.a
return u.gH(u)}}
H.bw.prototype={}
H.dK.prototype={}
H.dJ.prototype={}
H.hd.prototype={}
H.hT.prototype={
a0:function(a){var u,t,s
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
H.h2.prototype={
i:function(a){var u=this.b
if(u==null)return"NoSuchMethodError: "+H.i(this.a)
return"NoSuchMethodError: method not found: '"+u+"' on null"}}
H.fA.prototype={
i:function(a){var u,t
u=this.b
if(u==null)return"NoSuchMethodError: "+H.i(this.a)
t=this.c
if(t==null)return"NoSuchMethodError: method not found: '"+u+"' ("+H.i(this.a)+")"
return"NoSuchMethodError: method not found: '"+u+"' on '"+t+"' ("+H.i(this.a)+")"}}
H.i6.prototype={
i:function(a){var u=this.a
return u.length===0?"Error":"Error: "+u}}
H.jn.prototype={
$1:function(a){if(!!J.S(a).$ibc)if(a.$thrownJsError==null)a.$thrownJsError=this.a
return a},
$S:15}
H.eo.prototype={
i:function(a){var u,t
u=this.b
if(u!=null)return u
u=this.a
t=u!==null&&typeof u==="object"?u.stack:null
u=t==null?"":t
this.b=u
return u},
$iad:1}
H.bX.prototype={
i:function(a){return"Closure '"+H.bB(this).trim()+"'"},
$ibd:1,
ghU:function(){return this},
$C:"$1",
$R:1,
$D:null}
H.hG.prototype={}
H.hx.prototype={
i:function(a){var u=this.$static_name
if(u==null)return"Closure of unknown static method"
return"Closure '"+H.bQ(u)+"'"}}
H.bV.prototype={
n:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof H.bV))return!1
return this.a===b.a&&this.b===b.b&&this.c===b.c},
gE:function(a){var u,t
u=this.c
if(u==null)t=H.ce(this.a)
else t=typeof u!=="object"?J.bq(u):H.ce(u)
return(t^H.ce(this.b))>>>0},
i:function(a){var u=this.c
if(u==null)u=this.a
return"Closure '"+H.i(this.d)+"' of "+("Instance of '"+H.bB(u)+"'")}}
H.hV.prototype={
i:function(a){return this.a}}
H.eW.prototype={
i:function(a){return this.a}}
H.hk.prototype={
i:function(a){return"RuntimeError: "+H.i(this.a)}}
H.aF.prototype={
gk:function(a){return this.a},
gW:function(a){return new H.da(this,[H.u(this,0)])},
cG:function(a,b){var u,t
if(typeof b==="string"){u=this.b
if(u==null)return!1
return this.cc(u,b)}else if(typeof b==="number"&&(b&0x3ffffff)===b){t=this.c
if(t==null)return!1
return this.cc(t,b)}else return this.hb(b)},
hb:function(a){var u=this.d
if(u==null)return!1
return this.bG(this.bf(u,J.bq(a)&0x3ffffff),a)>=0},
m:function(a,b){var u,t,s,r
if(typeof b==="string"){u=this.b
if(u==null)return
t=this.aR(u,b)
s=t==null?null:t.b
return s}else if(typeof b==="number"&&(b&0x3ffffff)===b){r=this.c
if(r==null)return
t=this.aR(r,b)
s=t==null?null:t.b
return s}else return this.hc(b)},
hc:function(a){var u,t,s
u=this.d
if(u==null)return
t=this.bf(u,J.bq(a)&0x3ffffff)
s=this.bG(t,a)
if(s<0)return
return t[s].b},
P:function(a,b,c){var u,t,s,r,q,p
H.z(b,H.u(this,0))
H.z(c,H.u(this,1))
if(typeof b==="string"){u=this.b
if(u==null){u=this.bq()
this.b=u}this.c3(u,b,c)}else if(typeof b==="number"&&(b&0x3ffffff)===b){t=this.c
if(t==null){t=this.bq()
this.c=t}this.c3(t,b,c)}else{s=this.d
if(s==null){s=this.bq()
this.d=s}r=J.bq(b)&0x3ffffff
q=this.bf(s,r)
if(q==null)this.bv(s,r,[this.br(b,c)])
else{p=this.bG(q,b)
if(p>=0)q[p].b=c
else q.push(this.br(b,c))}}},
L:function(a,b){var u,t
H.j(b,{func:1,ret:-1,args:[H.u(this,0),H.u(this,1)]})
u=this.e
t=this.r
for(;u!=null;){b.$2(u.a,u.b)
if(t!==this.r)throw H.f(P.ba(this))
u=u.c}},
c3:function(a,b,c){var u
H.z(b,H.u(this,0))
H.z(c,H.u(this,1))
u=this.aR(a,b)
if(u==null)this.bv(a,b,this.br(b,c))
else u.b=c},
em:function(){this.r=this.r+1&67108863},
br:function(a,b){var u,t
u=new H.fD(H.z(a,H.u(this,0)),H.z(b,H.u(this,1)))
if(this.e==null){this.f=u
this.e=u}else{t=this.f
u.d=t
t.c=u
this.f=u}++this.a
this.em()
return u},
bG:function(a,b){var u,t
if(a==null)return-1
u=a.length
for(t=0;t<u;++t)if(J.W(a[t].a,b))return t
return-1},
i:function(a){return P.kf(this)},
aR:function(a,b){return a[b]},
bf:function(a,b){return a[b]},
bv:function(a,b,c){a[b]=c},
e0:function(a,b){delete a[b]},
cc:function(a,b){return this.aR(a,b)!=null},
bq:function(){var u=Object.create(null)
this.bv(u,"<non-identifier-key>",u)
this.e0(u,"<non-identifier-key>")
return u}}
H.fD.prototype={}
H.da.prototype={
gk:function(a){return this.a.a},
gN:function(a){var u,t
u=this.a
t=new H.fE(u,u.r,this.$ti)
t.c=u.e
return t}}
H.fE.prototype={
gH:function(a){return this.d},
v:function(){var u=this.a
if(this.b!==u.r)throw H.f(P.ba(u))
else{u=this.c
if(u==null){this.sc2(null)
return!1}else{this.sc2(u.a)
this.c=this.c.c
return!0}}},
sc2:function(a){this.d=H.z(a,H.u(this,0))},
$iaD:1}
H.jf.prototype={
$1:function(a){return this.a(a)},
$S:15}
H.jg.prototype={
$2:function(a,b){return this.a(a,b)},
$S:30}
H.jh.prototype={
$1:function(a){return this.a(H.E(a))},
$S:31}
H.fz.prototype={
i:function(a){return"RegExp/"+this.a+"/"},
$ikl:1}
H.cc.prototype={$in6:1}
H.dh.prototype={
gk:function(a){return a.length},
$iC:1,
$aC:function(){}}
H.cb.prototype={
m:function(a,b){H.bn(b,a,a.length)
return a[b]},
$abw:function(){return[P.x]},
$ar:function(){return[P.x]},
$ih:1,
$ah:function(){return[P.x]},
$ib:1,
$ab:function(){return[P.x]}}
H.di.prototype={
$abw:function(){return[P.A]},
$ar:function(){return[P.A]},
$ih:1,
$ah:function(){return[P.A]},
$ib:1,
$ab:function(){return[P.A]}}
H.fT.prototype={
m:function(a,b){H.bn(b,a,a.length)
return a[b]}}
H.fU.prototype={
m:function(a,b){H.bn(b,a,a.length)
return a[b]}}
H.fV.prototype={
m:function(a,b){H.bn(b,a,a.length)
return a[b]}}
H.fW.prototype={
m:function(a,b){H.bn(b,a,a.length)
return a[b]}}
H.fX.prototype={
m:function(a,b){H.bn(b,a,a.length)
return a[b]}}
H.dj.prototype={
gk:function(a){return a.length},
m:function(a,b){H.bn(b,a,a.length)
return a[b]},
$in7:1}
H.fY.prototype={
gk:function(a){return a.length},
m:function(a,b){H.bn(b,a,a.length)
return a[b]}}
H.cu.prototype={}
H.cv.prototype={}
H.cw.prototype={}
H.cx.prototype={}
P.iq.prototype={
$1:function(a){var u,t
u=this.a
t=u.a
u.a=null
t.$0()},
$S:14}
P.ip.prototype={
$1:function(a){var u,t
this.a.a=H.j(a,{func:1,ret:-1})
u=this.b
t=this.c
u.firstChild?u.removeChild(t):u.appendChild(t)},
$S:29}
P.ir.prototype={
$0:function(){this.a.$0()},
$S:2}
P.is.prototype={
$0:function(){this.a.$0()},
$S:2}
P.eu.prototype={
dN:function(a,b){if(self.setTimeout!=null)this.b=self.setTimeout(H.bM(new P.j1(this,b),0),a)
else throw H.f(P.ao("`setTimeout()` not found."))},
dO:function(a,b){if(self.setTimeout!=null)this.b=self.setInterval(H.bM(new P.j0(this,a,Date.now(),b),0),a)
else throw H.f(P.ao("Periodic timer."))},
$iaN:1}
P.j1.prototype={
$0:function(){var u=this.a
u.b=null
u.c=1
this.b.$0()},
$S:3}
P.j0.prototype={
$0:function(){var u,t,s,r
u=this.a
t=u.c+1
s=this.b
if(s>0){r=Date.now()-this.c
if(r>(t+1)*s)t=C.f.dC(r,s)}u.c=t
this.d.$1(u)},
$S:2}
P.aR.prototype={
hg:function(a){if(this.c!==6)return!0
return this.b.b.bO(H.j(this.d,{func:1,ret:P.I,args:[P.H]}),a.a,P.I,P.H)},
ha:function(a){var u,t,s,r
u=this.e
t=P.H
s={futureOr:1,type:H.u(this,1)}
r=this.b.b
if(H.eL(u,{func:1,args:[P.H,P.ad]}))return H.jP(r.hD(u,a.a,a.b,null,t,P.ad),s)
else return H.jP(r.bO(H.j(u,{func:1,args:[P.H]}),a.a,null,t),s)}}
P.aq.prototype={
d3:function(a,b,c){var u,t,s,r
u=H.u(this,0)
H.j(a,{func:1,ret:{futureOr:1,type:c},args:[u]})
t=$.R
if(t!==C.h){t.toString
H.j(a,{func:1,ret:{futureOr:1,type:c},args:[u]})
if(b!=null)b=P.me(b,t)}H.j(a,{func:1,ret:{futureOr:1,type:c},args:[u]})
s=new P.aq(0,$.R,[c])
r=b==null?1:3
this.c4(new P.aR(s,r,a,b,[u,c]))
return s},
hK:function(a,b){return this.d3(a,null,b)},
c4:function(a){var u,t
u=this.a
if(u<=1){a.a=H.l(this.c,"$iaR")
this.c=a}else{if(u===2){t=H.l(this.c,"$iaq")
u=t.a
if(u<4){t.c4(a)
return}this.a=u
this.c=t.c}u=this.b
u.toString
P.ja(null,null,u,H.j(new P.iA(this,a),{func:1,ret:-1}))}},
cn:function(a){var u,t,s,r,q,p
u={}
u.a=a
if(a==null)return
t=this.a
if(t<=1){s=H.l(this.c,"$iaR")
this.c=a
if(s!=null){for(r=a;q=r.a,q!=null;r=q);r.a=s}}else{if(t===2){p=H.l(this.c,"$iaq")
t=p.a
if(t<4){p.cn(a)
return}this.a=t
this.c=p.c}u.a=this.aT(a)
t=this.b
t.toString
P.ja(null,null,t,H.j(new P.iE(u,this),{func:1,ret:-1}))}},
bu:function(){var u=H.l(this.c,"$iaR")
this.c=null
return this.aT(u)},
aT:function(a){var u,t,s
for(u=a,t=null;u!=null;t=u,u=s){s=u.a
u.a=t}return t},
c9:function(a){var u,t,s
u=H.u(this,0)
H.jP(a,{futureOr:1,type:u})
t=this.$ti
if(H.cF(a,"$ic4",t,"$ac4"))if(H.cF(a,"$iaq",t,null))P.kH(a,this)
else P.m3(a,this)
else{s=this.bu()
H.z(a,u)
this.a=4
this.c=a
P.ct(this,s)}},
ca:function(a,b){var u
H.l(b,"$iad")
u=this.bu()
this.a=8
this.c=new P.a8(a,b)
P.ct(this,u)},
$ic4:1}
P.iA.prototype={
$0:function(){P.ct(this.a,this.b)},
$S:2}
P.iE.prototype={
$0:function(){P.ct(this.b,this.a.a)},
$S:2}
P.iB.prototype={
$1:function(a){var u=this.a
u.a=0
u.c9(a)},
$S:14}
P.iC.prototype={
$2:function(a,b){H.l(b,"$iad")
this.a.ca(a,b)},
$1:function(a){return this.$2(a,null)},
$S:33}
P.iD.prototype={
$0:function(){this.a.ca(this.b,this.c)},
$S:2}
P.iH.prototype={
$0:function(){var u,t,s,r,q,p,o
u=null
try{r=this.c
u=r.b.b.d0(H.j(r.d,{func:1}),null)}catch(q){t=H.ak(q)
s=H.bO(q)
if(this.d){r=H.l(this.a.a.c,"$ia8").a
p=t
p=r==null?p==null:r===p
r=p}else r=!1
p=this.b
if(r)p.b=H.l(this.a.a.c,"$ia8")
else p.b=new P.a8(t,s)
p.a=!0
return}if(!!J.S(u).$ic4){if(u instanceof P.aq&&u.a>=4){if(u.a===8){r=this.b
r.b=H.l(u.c,"$ia8")
r.a=!0}return}o=this.a.a
r=this.b
r.b=u.hK(new P.iI(o),null)
r.a=!1}},
$S:3}
P.iI.prototype={
$1:function(a){return this.a},
$S:35}
P.iG.prototype={
$0:function(){var u,t,s,r,q,p,o
try{s=this.b
r=H.u(s,0)
q=H.z(this.c,r)
p=H.u(s,1)
this.a.b=s.b.b.bO(H.j(s.d,{func:1,ret:{futureOr:1,type:p},args:[r]}),q,{futureOr:1,type:p},r)}catch(o){u=H.ak(o)
t=H.bO(o)
s=this.a
s.b=new P.a8(u,t)
s.a=!0}},
$S:3}
P.iF.prototype={
$0:function(){var u,t,s,r,q,p,o,n
try{u=H.l(this.a.a.c,"$ia8")
r=this.c
if(r.hg(u)&&r.e!=null){q=this.b
q.b=r.ha(u)
q.a=!1}}catch(p){t=H.ak(p)
s=H.bO(p)
r=H.l(this.a.a.c,"$ia8")
q=r.a
o=t
n=this.b
if(q==null?o==null:q===o)n.b=r
else n.b=new P.a8(t,s)
n.a=!0}},
$S:3}
P.dR.prototype={}
P.hA.prototype={
gk:function(a){var u,t,s,r
u={}
t=new P.aq(0,$.R,[P.A])
u.a=0
s=H.u(this,0)
r=H.j(new P.hC(u,this),{func:1,ret:-1,args:[s]})
H.j(new P.hD(u,t),{func:1,ret:-1})
W.a_(this.a,this.b,r,!1,s)
return t}}
P.hC.prototype={
$1:function(a){H.z(a,H.u(this.b,0));++this.a.a},
$S:function(){return{func:1,ret:P.F,args:[H.u(this.b,0)]}}}
P.hD.prototype={
$0:function(){this.b.c9(this.a.a)},
$S:2}
P.cj.prototype={}
P.hB.prototype={}
P.aN.prototype={}
P.a8.prototype={
i:function(a){return H.i(this.a)},
$ibc:1}
P.j4.prototype={$inl:1}
P.j9.prototype={
$0:function(){var u,t,s
u=this.a
t=u.a
if(t==null){s=new P.dm()
u.a=s
u=s}else u=t
t=this.b
if(t==null)throw H.f(u)
s=H.f(u)
s.stack=t.i(0)
throw s},
$S:2}
P.iO.prototype={
hE:function(a){var u,t,s
H.j(a,{func:1,ret:-1})
try{if(C.h===$.R){a.$0()
return}P.kN(null,null,this,a,-1)}catch(s){u=H.ak(s)
t=H.bO(s)
P.j8(null,null,this,u,H.l(t,"$iad"))}},
hF:function(a,b,c){var u,t,s
H.j(a,{func:1,ret:-1,args:[c]})
H.z(b,c)
try{if(C.h===$.R){a.$1(b)
return}P.kO(null,null,this,a,b,-1,c)}catch(s){u=H.ak(s)
t=H.bO(s)
P.j8(null,null,this,u,H.l(t,"$iad"))}},
fG:function(a,b){return new P.iQ(this,H.j(a,{func:1,ret:b}),b)},
by:function(a){return new P.iP(this,H.j(a,{func:1,ret:-1}))},
cB:function(a,b){return new P.iR(this,H.j(a,{func:1,ret:-1,args:[b]}),b)},
d0:function(a,b){H.j(a,{func:1,ret:b})
if($.R===C.h)return a.$0()
return P.kN(null,null,this,a,b)},
bO:function(a,b,c,d){H.j(a,{func:1,ret:c,args:[d]})
H.z(b,d)
if($.R===C.h)return a.$1(b)
return P.kO(null,null,this,a,b,c,d)},
hD:function(a,b,c,d,e,f){H.j(a,{func:1,ret:d,args:[e,f]})
H.z(b,e)
H.z(c,f)
if($.R===C.h)return a.$2(b,c)
return P.mf(null,null,this,a,b,c,d,e,f)}}
P.iQ.prototype={
$0:function(){return this.a.d0(this.b,this.c)},
$S:function(){return{func:1,ret:this.c}}}
P.iP.prototype={
$0:function(){return this.a.hE(this.b)},
$S:3}
P.iR.prototype={
$1:function(a){var u=this.c
return this.a.hF(this.b,H.z(a,u),u)},
$S:function(){return{func:1,ret:-1,args:[this.c]}}}
P.iM.prototype={
gN:function(a){var u=new P.e5(this,this.r,this.$ti)
u.c=this.e
return u},
gk:function(a){return this.a},
R:function(a,b){var u,t
if(typeof b==="string"&&b!=="__proto__"){u=this.b
if(u==null)return!1
return H.l(u[b],"$ibI")!=null}else{t=this.dX(b)
return t}},
dX:function(a){var u=this.d
if(u==null)return!1
return this.bd(this.cg(u,a),a)>=0},
h:function(a,b){var u,t
H.z(b,H.u(this,0))
if(typeof b==="string"&&b!=="__proto__"){u=this.b
if(u==null){u=P.jH()
this.b=u}return this.c6(u,b)}else if(typeof b==="number"&&(b&1073741823)===b){t=this.c
if(t==null){t=P.jH()
this.c=t}return this.c6(t,b)}else return this.dQ(0,b)},
dQ:function(a,b){var u,t,s
H.z(b,H.u(this,0))
u=this.d
if(u==null){u=P.jH()
this.d=u}t=this.cb(b)
s=u[t]
if(s==null)u[t]=[this.ba(b)]
else{if(this.bd(s,b)>=0)return!1
s.push(this.ba(b))}return!0},
S:function(a,b){if(typeof b==="number"&&(b&1073741823)===b)return this.f7(this.c,b)
else return this.f4(0,b)},
f4:function(a,b){var u,t,s
u=this.d
if(u==null)return!1
t=this.cg(u,b)
s=this.bd(t,b)
if(s<0)return!1
this.cs(t.splice(s,1)[0])
return!0},
c6:function(a,b){H.z(b,H.u(this,0))
if(H.l(a[b],"$ibI")!=null)return!1
a[b]=this.ba(b)
return!0},
f7:function(a,b){var u
if(a==null)return!1
u=H.l(a[b],"$ibI")
if(u==null)return!1
this.cs(u)
delete a[b]
return!0},
c8:function(){this.r=1073741823&this.r+1},
ba:function(a){var u,t
u=new P.bI(H.z(a,H.u(this,0)))
if(this.e==null){this.f=u
this.e=u}else{t=this.f
u.c=t
t.b=u
this.f=u}++this.a
this.c8()
return u},
cs:function(a){var u,t
u=a.c
t=a.b
if(u==null)this.e=t
else u.b=t
if(t==null)this.f=u
else t.c=u;--this.a
this.c8()},
cb:function(a){return J.bq(a)&1073741823},
cg:function(a,b){return a[this.cb(b)]},
bd:function(a,b){var u,t
if(a==null)return-1
u=a.length
for(t=0;t<u;++t)if(J.W(a[t].a,b))return t
return-1}}
P.bI.prototype={}
P.e5.prototype={
gH:function(a){return this.d},
v:function(){var u=this.a
if(this.b!==u.r)throw H.f(P.ba(u))
else{u=this.c
if(u==null){this.sc7(null)
return!1}else{this.sc7(H.z(u.a,H.u(this,0)))
this.c=this.c.b
return!0}}},
sc7:function(a){this.d=H.z(a,H.u(this,0))},
$iaD:1}
P.fF.prototype={$ih:1,$ib:1}
P.r.prototype={
gN:function(a){return new H.c7(a,this.gk(a),0,[H.cH(this,a,"r",0)])},
A:function(a,b){return this.m(a,b)},
hN:function(a,b){var u,t
u=H.c([],[H.cH(this,a,"r",0)])
C.a.sk(u,this.gk(a))
for(t=0;t<this.gk(a);++t)C.a.P(u,t,this.m(a,t))
return u},
hM:function(a){return this.hN(a,!0)},
i:function(a){return P.jv(a,"[","]")}}
P.fH.prototype={}
P.fI.prototype={
$2:function(a,b){var u,t
u=this.a
if(!u.a)this.b.a+=", "
u.a=!1
u=this.b
t=u.a+=H.i(a)
u.a=t+": "
u.a+=H.i(b)},
$S:23}
P.a1.prototype={
L:function(a,b){var u,t
H.j(b,{func:1,ret:-1,args:[H.cH(this,a,"a1",0),H.cH(this,a,"a1",1)]})
for(u=J.bT(this.gW(a));u.v();){t=u.gH(u)
b.$2(t,this.m(a,t))}},
gk:function(a){return J.br(this.gW(a))},
i:function(a){return P.kf(a)},
$iG:1}
P.iT.prototype={
a6:function(a,b){var u
for(u=J.bT(H.o(b,"$ih",this.$ti,"$ah"));u.v();)this.h(0,u.gH(u))},
i:function(a){return P.jv(this,"{","}")},
A:function(a,b){var u,t,s
if(b<0)H.a0(P.an(b,0,null,"index",null))
for(u=P.m7(this,this.r,H.u(this,0)),t=0;u.v();){s=u.d
if(b===t)return s;++t}throw H.f(P.P(b,this,"index",null,t))},
$ih:1,
$iku:1}
P.e6.prototype={}
P.bY.prototype={}
P.bZ.prototype={}
P.fd.prototype={
$abY:function(){return[P.e,[P.b,P.A]]}}
P.fu.prototype={
i:function(a){return this.a}}
P.ft.prototype={
dY:function(a,b,c){var u,t,s,r,q,p
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
default:p=null}if(p!=null){if(q==null)q=new P.bE("")
if(r>b)q.a+=C.c.aP(a,b,r)
q.a+=p
b=r+1}}if(q==null)return
if(c>b)q.a+=J.lp(a,b,c)
u=q.a
return u.charCodeAt(0)==0?u:u},
$abZ:function(){return[P.e,P.e]}}
P.i9.prototype={}
P.ia.prototype={
fP:function(a,b,c){var u,t,s
c=P.kr(b,c,a.length,null,null,null)
u=c-b
if(u===0)return new Uint8Array(0)
t=new Uint8Array(u*3)
s=new P.j2(t)
if(s.e7(a,b,c)!==c)s.ct(C.c.bC(a,c-1),0)
return new Uint8Array(t.subarray(0,H.ma(0,s.b,t.length)))},
fO:function(a){return this.fP(a,0,null)},
$abZ:function(){return[P.e,[P.b,P.A]]}}
P.j2.prototype={
ct:function(a,b){var u,t,s,r,q
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
e7:function(a,b,c){var u,t,s,r,q,p,o
if(b!==c&&(C.c.bC(a,c-1)&64512)===55296)--c
for(u=this.c,t=u.length,s=b;s<c;++s){r=C.c.ao(a,s)
if(r<=127){q=this.b
if(q>=t)break
this.b=q+1
u[q]=r}else if((r&64512)===55296){if(this.b+3>=t)break
p=s+1
if(this.ct(r,C.c.ao(a,p)))s=p}else if(r<=2047){q=this.b
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
P.I.prototype={}
P.aa.prototype={
n:function(a,b){if(b==null)return!1
return b instanceof P.aa&&this.a===b.a&&!0},
gE:function(a){var u=this.a
return(u^C.f.aU(u,30))&1073741823},
i:function(a){var u,t,s,r,q,p,o,n
u=P.lx(H.lQ(this))
t=P.cU(H.lO(this))
s=P.cU(H.lK(this))
r=P.cU(H.lL(this))
q=P.cU(H.lN(this))
p=P.cU(H.lP(this))
o=P.ly(H.lM(this))
n=u+"-"+t+"-"+s+" "+r+":"+q+":"+p+"."+o
return n}}
P.x.prototype={}
P.bb.prototype={
n:function(a,b){if(b==null)return!1
return b instanceof P.bb&&this.a===b.a},
gE:function(a){return C.f.gE(this.a)},
i:function(a){var u,t,s,r,q
u=new P.fa()
t=this.a
if(t<0)return"-"+new P.bb(0-t).i(0)
s=u.$1(C.f.at(t,6e7)%60)
r=u.$1(C.f.at(t,1e6)%60)
q=new P.f9().$1(t%1e6)
return""+C.f.at(t,36e8)+":"+H.i(s)+":"+H.i(r)+"."+H.i(q)}}
P.f9.prototype={
$1:function(a){if(a>=1e5)return""+a
if(a>=1e4)return"0"+a
if(a>=1000)return"00"+a
if(a>=100)return"000"+a
if(a>=10)return"0000"+a
return"00000"+a},
$S:12}
P.fa.prototype={
$1:function(a){if(a>=10)return""+a
return"0"+a},
$S:12}
P.bc.prototype={}
P.dm.prototype={
i:function(a){return"Throw of null."}}
P.as.prototype={
gbc:function(){return"Invalid argument"+(!this.a?"(s)":"")},
gbb:function(){return""},
i:function(a){var u,t,s,r,q,p
u=this.c
t=u!=null?" ("+u+")":""
u=this.d
s=u==null?"":": "+u
r=this.gbc()+t+s
if(!this.a)return r
q=this.gbb()
p=P.ff(this.b)
return r+q+": "+p}}
P.bC.prototype={
gbc:function(){return"RangeError"},
gbb:function(){var u,t,s
u=this.e
if(u==null){u=this.f
t=u!=null?": Not less than or equal to "+H.i(u):""}else{s=this.f
if(s==null)t=": Not greater than or equal to "+H.i(u)
else if(s>u)t=": Not in range "+H.i(u)+".."+H.i(s)+", inclusive"
else t=s<u?": Valid value range is empty":": Only valid value is "+H.i(u)}return t}}
P.fv.prototype={
gbc:function(){return"RangeError"},
gbb:function(){var u,t
u=H.a6(this.b)
if(typeof u!=="number")return u.aC()
if(u<0)return": index must not be negative"
t=this.f
if(t===0)return": no indices are valid"
return": index should be less than "+H.i(t)},
gk:function(a){return this.f}}
P.i7.prototype={
i:function(a){return"Unsupported operation: "+this.a}}
P.i5.prototype={
i:function(a){var u=this.a
return u!=null?"UnimplementedError: "+u:"UnimplementedError"}}
P.ci.prototype={
i:function(a){return"Bad state: "+this.a}}
P.eZ.prototype={
i:function(a){var u=this.a
if(u==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+P.ff(u)+"."}}
P.h5.prototype={
i:function(a){return"Out of Memory"},
$ibc:1}
P.dv.prototype={
i:function(a){return"Stack Overflow"},
$ibc:1}
P.f3.prototype={
i:function(a){var u=this.a
return u==null?"Reading static variable during its initialization":"Reading static variable '"+u+"' during its initialization"}}
P.dZ.prototype={
i:function(a){return"Exception: "+this.a}}
P.fo.prototype={
i:function(a){var u,t,s,r
u=this.a
t=""!==u?"FormatException: "+u:"FormatException"
s=this.b
r=s.length>78?C.c.aP(s,0,75)+"...":s
return t+"\n"+r}}
P.bd.prototype={}
P.A.prototype={}
P.h.prototype={
b1:function(a,b){var u=H.af(this,"h",0)
return new H.cq(this,H.j(b,{func:1,ret:P.I,args:[u]}),[u])},
gk:function(a){var u,t
u=this.gN(this)
for(t=0;u.v();)++t
return t},
gal:function(a){var u,t
u=this.gN(this)
if(!u.v())throw H.f(H.jw())
t=u.gH(u)
if(u.v())throw H.f(H.lD())
return t},
A:function(a,b){var u,t,s
if(b<0)H.a0(P.an(b,0,null,"index",null))
for(u=this.gN(this),t=0;u.v();){s=u.gH(u)
if(b===t)return s;++t}throw H.f(P.P(b,this,"index",null,t))},
i:function(a){return P.lC(this,"(",")")}}
P.aD.prototype={}
P.b.prototype={$ih:1}
P.G.prototype={}
P.F.prototype={
gE:function(a){return P.H.prototype.gE.call(this,this)},
i:function(a){return"null"}}
P.V.prototype={}
P.H.prototype={constructor:P.H,$iH:1,
n:function(a,b){return this===b},
gE:function(a){return H.ce(this)},
i:function(a){return"Instance of '"+H.bB(this)+"'"},
toString:function(){return this.i(this)}}
P.ad.prototype={}
P.e.prototype={$ikl:1}
P.bE.prototype={
gk:function(a){return this.a.length},
i:function(a){var u=this.a
return u.charCodeAt(0)==0?u:u}}
W.t.prototype={}
W.eN.prototype={
gk:function(a){return a.length}}
W.cL.prototype={
i:function(a){return String(a)},
$icL:1}
W.eO.prototype={
i:function(a){return String(a)}}
W.bU.prototype={$ibU:1}
W.cN.prototype={}
W.b7.prototype={$ib7:1}
W.bt.prototype={
bQ:function(a,b,c){if(c!=null)return this.e8(a,b,P.mm(c,null))
return this.e9(a,b)},
de:function(a,b){return this.bQ(a,b,null)},
e8:function(a,b,c){return a.getContext(b,c)},
e9:function(a,b){return a.getContext(b)},
$ibt:1,
$ik5:1}
W.bu.prototype={
ea:function(a,b,c,d,e){return a.getImageData(b,c,d,e)},
h2:function(a,b,c,d,e,f){return a.drawImage(b,c,d,e,f)},
$ibu:1}
W.b8.prototype={
gk:function(a){return a.length}}
W.c_.prototype={$ic_:1}
W.f_.prototype={
gk:function(a){return a.length}}
W.J.prototype={$iJ:1}
W.c0.prototype={
gk:function(a){return a.length}}
W.f0.prototype={}
W.az.prototype={}
W.aA.prototype={}
W.f1.prototype={
gk:function(a){return a.length}}
W.f2.prototype={
gk:function(a){return a.length}}
W.f5.prototype={
gk:function(a){return a.length}}
W.am.prototype={$iam:1}
W.c1.prototype={
fC:function(a,b){return a.adoptNode(b)},
df:function(a,b){return a.getElementById(b)}}
W.f6.prototype={
i:function(a){return String(a)}}
W.cV.prototype={
fT:function(a,b){return a.createHTMLDocument(b)}}
W.cW.prototype={
gk:function(a){return a.length},
m:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.P(b,a,null,null,null))
return a[b]},
A:function(a,b){if(b<0||b>=a.length)return H.k(a,b)
return a[b]},
$iC:1,
$aC:function(){return[[P.a4,P.V]]},
$ar:function(){return[[P.a4,P.V]]},
$ih:1,
$ah:function(){return[[P.a4,P.V]]},
$ib:1,
$ab:function(){return[[P.a4,P.V]]},
$aw:function(){return[[P.a4,P.V]]}}
W.cX.prototype={
i:function(a){return"Rectangle ("+H.i(a.left)+", "+H.i(a.top)+") "+H.i(this.gak(a))+" x "+H.i(this.gaf(a))},
n:function(a,b){var u
if(b==null)return!1
if(!H.cF(b,"$ia4",[P.V],"$aa4"))return!1
u=J.ae(b)
return a.left===u.gaY(b)&&a.top===u.gb0(b)&&this.gak(a)===u.gak(b)&&this.gaf(a)===u.gaf(b)},
gE:function(a){return W.kJ(C.d.gE(a.left),C.d.gE(a.top),C.d.gE(this.gak(a)),C.d.gE(this.gaf(a)))},
gcC:function(a){return a.bottom},
gaf:function(a){return a.height},
gaY:function(a){return a.left},
gd_:function(a){return a.right},
gb0:function(a){return a.top},
gak:function(a){return a.width},
$ia4:1,
$aa4:function(){return[P.V]}}
W.f7.prototype={
gk:function(a){return a.length},
m:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.P(b,a,null,null,null))
return a[b]},
A:function(a,b){if(b<0||b>=a.length)return H.k(a,b)
return a[b]},
$iC:1,
$aC:function(){return[P.e]},
$ar:function(){return[P.e]},
$ih:1,
$ah:function(){return[P.e]},
$ib:1,
$ab:function(){return[P.e]},
$aw:function(){return[P.e]}}
W.f8.prototype={
gk:function(a){return a.length}}
W.iu.prototype={
gk:function(a){return this.b.length},
m:function(a,b){var u=this.b
if(b<0||b>=u.length)return H.k(u,b)
return H.l(u[b],"$iK")},
h:function(a,b){J.k0(this.a,b)
return b},
gN:function(a){var u=this.hM(this)
return new J.al(u,u.length,0,[H.u(u,0)])},
$ar:function(){return[W.K]},
$ah:function(){return[W.K]},
$ab:function(){return[W.K]}}
W.K.prototype={
gfF:function(a){return new W.iw(a)},
gcE:function(a){return new W.iu(a,a.children)},
gcF:function(a){var u,t,s,r
u=a.clientLeft
t=a.clientTop
s=a.clientWidth
r=a.clientHeight
if(typeof s!=="number")return s.aC()
if(s<0)s=-s*0
if(typeof r!=="number")return r.aC()
if(r<0)r=-r*0
return new P.a4(u,t,s,r,[P.V])},
i:function(a){return a.localName},
a_:function(a,b,c,d){var u,t,s,r
if(c==null){u=$.ka
if(u==null){u=H.c([],[W.aj])
t=new W.dk(u)
C.a.h(u,W.kI(null))
C.a.h(u,W.kK())
$.ka=t
d=t}else d=u
u=$.k9
if(u==null){u=new W.eA(d)
$.k9=u
c=u}else{u.a=d
c=u}}if($.aU==null){u=document
t=u.implementation
t=(t&&C.I).fT(t,"")
$.aU=t
$.ju=t.createRange()
t=$.aU
t.toString
t=t.createElement("base")
H.l(t,"$ibU")
t.href=u.baseURI
u=$.aU.head;(u&&C.K).u(u,t)}u=$.aU
if(u.body==null){u.toString
t=u.createElement("body")
u.body=H.l(t,"$ib7")}u=$.aU
if(!!this.$ib7)s=u.body
else{t=a.tagName
u.toString
s=u.createElement(t)
u=$.aU.body;(u&&C.l).u(u,s)}if("createContextualFragment" in window.Range.prototype&&!C.a.R(C.W,a.tagName)){u=$.ju;(u&&C.D).dm(u,s)
u=$.ju
r=(u&&C.D).fR(u,b)}else{s.innerHTML=b
r=$.aU.createDocumentFragment()
for(u=J.ae(r);t=s.firstChild,t!=null;)u.u(r,t)}u=$.aU.body
if(s==null?u!=null:s!==u)J.k1(s)
c.bS(r)
C.y.fC(document,r)
return r},
fS:function(a,b,c){return this.a_(a,b,c,null)},
dr:function(a,b,c,d){a.textContent=null
this.u(a,this.a_(a,b,c,d))},
dq:function(a,b){return this.dr(a,b,null,null)},
aB:function(a,b){return a.getAttribute(b)},
f5:function(a,b){return a.removeAttribute(b)},
$iK:1,
ghG:function(a){return a.tagName}}
W.fc.prototype={
$1:function(a){return!!J.S(H.l(a,"$iy")).$iK},
$S:13}
W.m.prototype={$im:1}
W.d.prototype={
fA:function(a,b,c,d){H.j(c,{func:1,args:[W.m]})
if(c!=null)this.dR(a,b,c,!1)},
dR:function(a,b,c,d){return a.addEventListener(b,H.bM(H.j(c,{func:1,args:[W.m]}),1),!1)},
$id:1}
W.aB.prototype={$iaB:1}
W.fi.prototype={
gk:function(a){return a.length},
m:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.P(b,a,null,null,null))
return a[b]},
A:function(a,b){if(b<0||b>=a.length)return H.k(a,b)
return a[b]},
$iC:1,
$aC:function(){return[W.aB]},
$ar:function(){return[W.aB]},
$ih:1,
$ah:function(){return[W.aB]},
$ib:1,
$ab:function(){return[W.aB]},
$aw:function(){return[W.aB]}}
W.fj.prototype={
gk:function(a){return a.length}}
W.fn.prototype={
gk:function(a){return a.length}}
W.aC.prototype={$iaC:1}
W.d1.prototype={}
W.fs.prototype={
gk:function(a){return a.length}}
W.bx.prototype={
gk:function(a){return a.length},
m:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.P(b,a,null,null,null))
return a[b]},
A:function(a,b){if(b<0||b>=a.length)return H.k(a,b)
return a[b]},
$iC:1,
$aC:function(){return[W.y]},
$ar:function(){return[W.y]},
$ih:1,
$ah:function(){return[W.y]},
$ib:1,
$ab:function(){return[W.y]},
$ibx:1,
$aw:function(){return[W.y]}}
W.d2.prototype={}
W.be.prototype={$ibe:1,
gcH:function(a){return a.data}}
W.c6.prototype={$ic6:1,$ik5:1}
W.aG.prototype={$iaG:1}
W.dc.prototype={
i:function(a){return String(a)},
$idc:1}
W.c9.prototype={}
W.fM.prototype={
gk:function(a){return a.length}}
W.fN.prototype={
m:function(a,b){return P.b1(a.get(H.E(b)))},
L:function(a,b){var u,t
H.j(b,{func:1,ret:-1,args:[P.e,,]})
u=a.entries()
for(;!0;){t=u.next()
if(t.done)return
b.$2(t.value[0],P.b1(t.value[1]))}},
gW:function(a){var u=H.c([],[P.e])
this.L(a,new W.fO(u))
return u},
gk:function(a){return a.size},
$aa1:function(){return[P.e,null]},
$iG:1,
$aG:function(){return[P.e,null]}}
W.fO.prototype={
$2:function(a,b){return C.a.h(this.a,a)},
$S:6}
W.fP.prototype={
m:function(a,b){return P.b1(a.get(H.E(b)))},
L:function(a,b){var u,t
H.j(b,{func:1,ret:-1,args:[P.e,,]})
u=a.entries()
for(;!0;){t=u.next()
if(t.done)return
b.$2(t.value[0],P.b1(t.value[1]))}},
gW:function(a){var u=H.c([],[P.e])
this.L(a,new W.fQ(u))
return u},
gk:function(a){return a.size},
$aa1:function(){return[P.e,null]},
$iG:1,
$aG:function(){return[P.e,null]}}
W.fQ.prototype={
$2:function(a,b){return C.a.h(this.a,a)},
$S:6}
W.aH.prototype={$iaH:1}
W.fR.prototype={
gk:function(a){return a.length},
m:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.P(b,a,null,null,null))
return a[b]},
A:function(a,b){if(b<0||b>=a.length)return H.k(a,b)
return a[b]},
$iC:1,
$aC:function(){return[W.aH]},
$ar:function(){return[W.aH]},
$ih:1,
$ah:function(){return[W.aH]},
$ib:1,
$ab:function(){return[W.aH]},
$aw:function(){return[W.aH]}}
W.a2.prototype={$ia2:1}
W.a9.prototype={
gal:function(a){var u,t
u=this.a
t=u.childNodes.length
if(t===0)throw H.f(P.kw("No elements"))
if(t>1)throw H.f(P.kw("More than one element"))
return u.firstChild},
a6:function(a,b){var u,t,s,r,q
H.o(b,"$ih",[W.y],"$ah")
u=b.a
t=this.a
if(u!==t)for(s=u.childNodes.length,r=J.ae(t),q=0;q<s;++q)r.u(t,u.firstChild)
return},
gN:function(a){var u=this.a.childNodes
return new W.d_(u,u.length,-1,[H.cH(C.Y,u,"w",0)])},
gk:function(a){return this.a.childNodes.length},
m:function(a,b){var u=this.a.childNodes
if(b<0||b>=u.length)return H.k(u,b)
return u[b]},
$ar:function(){return[W.y]},
$ah:function(){return[W.y]},
$ab:function(){return[W.y]}}
W.y.prototype={
hy:function(a){var u=a.parentNode
if(u!=null)J.eM(u,a)},
i:function(a){var u=a.nodeValue
return u==null?this.dv(a):u},
u:function(a,b){return a.appendChild(b)},
f6:function(a,b){return a.removeChild(b)},
$iy:1}
W.cd.prototype={
gk:function(a){return a.length},
m:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.P(b,a,null,null,null))
return a[b]},
A:function(a,b){if(b<0||b>=a.length)return H.k(a,b)
return a[b]},
$iC:1,
$aC:function(){return[W.y]},
$ar:function(){return[W.y]},
$ih:1,
$ah:function(){return[W.y]},
$ib:1,
$ab:function(){return[W.y]},
$aw:function(){return[W.y]}}
W.aI.prototype={$iaI:1,
gk:function(a){return a.length}}
W.h8.prototype={
gk:function(a){return a.length},
m:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.P(b,a,null,null,null))
return a[b]},
A:function(a,b){if(b<0||b>=a.length)return H.k(a,b)
return a[b]},
$iC:1,
$aC:function(){return[W.aI]},
$ar:function(){return[W.aI]},
$ih:1,
$ah:function(){return[W.aI]},
$ib:1,
$ab:function(){return[W.aI]},
$aw:function(){return[W.aI]}}
W.dr.prototype={
fR:function(a,b){return a.createContextualFragment(b)},
dm:function(a,b){return a.selectNodeContents(b)}}
W.hi.prototype={
m:function(a,b){return P.b1(a.get(H.E(b)))},
L:function(a,b){var u,t
H.j(b,{func:1,ret:-1,args:[P.e,,]})
u=a.entries()
for(;!0;){t=u.next()
if(t.done)return
b.$2(t.value[0],P.b1(t.value[1]))}},
gW:function(a){var u=H.c([],[P.e])
this.L(a,new W.hj(u))
return u},
gk:function(a){return a.size},
$aa1:function(){return[P.e,null]},
$iG:1,
$aG:function(){return[P.e,null]}}
W.hj.prototype={
$2:function(a,b){return C.a.h(this.a,a)},
$S:6}
W.hl.prototype={
gk:function(a){return a.length}}
W.aJ.prototype={$iaJ:1}
W.hu.prototype={
gk:function(a){return a.length},
m:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.P(b,a,null,null,null))
return a[b]},
A:function(a,b){if(b<0||b>=a.length)return H.k(a,b)
return a[b]},
$iC:1,
$aC:function(){return[W.aJ]},
$ar:function(){return[W.aJ]},
$ih:1,
$ah:function(){return[W.aJ]},
$ib:1,
$ab:function(){return[W.aJ]},
$aw:function(){return[W.aJ]}}
W.aK.prototype={$iaK:1}
W.hv.prototype={
gk:function(a){return a.length},
m:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.P(b,a,null,null,null))
return a[b]},
A:function(a,b){if(b<0||b>=a.length)return H.k(a,b)
return a[b]},
$iC:1,
$aC:function(){return[W.aK]},
$ar:function(){return[W.aK]},
$ih:1,
$ah:function(){return[W.aK]},
$ib:1,
$ab:function(){return[W.aK]},
$aw:function(){return[W.aK]}}
W.aL.prototype={$iaL:1,
gk:function(a){return a.length}}
W.hy.prototype={
m:function(a,b){return this.ci(a,H.E(b))},
L:function(a,b){var u,t
H.j(b,{func:1,ret:-1,args:[P.e,P.e]})
for(u=0;!0;++u){t=this.ed(a,u)
if(t==null)return
b.$2(t,this.ci(a,t))}},
gW:function(a){var u=H.c([],[P.e])
this.L(a,new W.hz(u))
return u},
gk:function(a){return a.length},
ci:function(a,b){return a.getItem(b)},
ed:function(a,b){return a.key(b)},
$aa1:function(){return[P.e,P.e]},
$iG:1,
$aG:function(){return[P.e,P.e]}}
W.hz.prototype={
$2:function(a,b){return C.a.h(this.a,a)},
$S:28}
W.at.prototype={$iat:1}
W.bF.prototype={}
W.dw.prototype={
a_:function(a,b,c,d){var u,t
if("createContextualFragment" in window.Range.prototype)return this.b7(a,b,c,d)
u=W.lz("<table>"+b+"</table>",c,d)
t=document.createDocumentFragment()
t.toString
u.toString
new W.a9(t).a6(0,new W.a9(u))
return t}}
W.dx.prototype={
a_:function(a,b,c,d){var u,t,s,r
if("createContextualFragment" in window.Range.prototype)return this.b7(a,b,c,d)
u=document
t=u.createDocumentFragment()
u=C.n.a_(u.createElement("table"),b,c,d)
u.toString
u=new W.a9(u)
s=u.gal(u)
s.toString
u=new W.a9(s)
r=u.gal(u)
t.toString
r.toString
new W.a9(t).a6(0,new W.a9(r))
return t}}
W.hF.prototype={
a_:function(a,b,c,d){var u,t,s
if("createContextualFragment" in window.Range.prototype)return this.b7(a,b,c,d)
u=document
t=u.createDocumentFragment()
u=C.n.a_(u.createElement("table"),b,c,d)
u.toString
u=new W.a9(u)
s=u.gal(u)
t.toString
s.toString
new W.a9(t).a6(0,new W.a9(s))
return t}}
W.ck.prototype={$ick:1}
W.aM.prototype={$iaM:1}
W.au.prototype={$iau:1}
W.hH.prototype={
gk:function(a){return a.length},
m:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.P(b,a,null,null,null))
return a[b]},
A:function(a,b){if(b<0||b>=a.length)return H.k(a,b)
return a[b]},
$iC:1,
$aC:function(){return[W.au]},
$ar:function(){return[W.au]},
$ih:1,
$ah:function(){return[W.au]},
$ib:1,
$ab:function(){return[W.au]},
$aw:function(){return[W.au]}}
W.hI.prototype={
gk:function(a){return a.length},
m:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.P(b,a,null,null,null))
return a[b]},
A:function(a,b){if(b<0||b>=a.length)return H.k(a,b)
return a[b]},
$iC:1,
$aC:function(){return[W.aM]},
$ar:function(){return[W.aM]},
$ih:1,
$ah:function(){return[W.aM]},
$ib:1,
$ab:function(){return[W.aM]},
$aw:function(){return[W.aM]}}
W.hM.prototype={
gk:function(a){return a.length}}
W.aO.prototype={$iaO:1}
W.av.prototype={$iav:1}
W.hQ.prototype={
gk:function(a){return a.length},
m:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.P(b,a,null,null,null))
return a[b]},
A:function(a,b){if(b<0||b>=a.length)return H.k(a,b)
return a[b]},
$iC:1,
$aC:function(){return[W.aO]},
$ar:function(){return[W.aO]},
$ih:1,
$ah:function(){return[W.aO]},
$ib:1,
$ab:function(){return[W.aO]},
$aw:function(){return[W.aO]}}
W.hR.prototype={
gk:function(a){return a.length}}
W.bl.prototype={}
W.i8.prototype={
i:function(a){return String(a)}}
W.ik.prototype={$ik5:1}
W.il.prototype={
gk:function(a){return a.length}}
W.aQ.prototype={
gfZ:function(a){if(a.deltaY!==undefined)return a.deltaY
throw H.f(P.ao("deltaY is not supported"))},
gfY:function(a){if(a.deltaX!==undefined)return a.deltaX
throw H.f(P.ao("deltaX is not supported"))},
$iaQ:1}
W.cr.prototype={
f9:function(a,b){return a.requestAnimationFrame(H.bM(H.j(b,{func:1,ret:-1,args:[P.V]}),1))},
e1:function(a){if(!!(a.requestAnimationFrame&&a.cancelAnimationFrame))return;(function(b){var u=['ms','moz','webkit','o']
for(var t=0;t<u.length&&!b.requestAnimationFrame;++t){b.requestAnimationFrame=b[u[t]+'RequestAnimationFrame']
b.cancelAnimationFrame=b[u[t]+'CancelAnimationFrame']||b[u[t]+'CancelRequestAnimationFrame']}if(b.requestAnimationFrame&&b.cancelAnimationFrame)return
b.requestAnimationFrame=function(c){return window.setTimeout(function(){c(Date.now())},16)}
b.cancelAnimationFrame=function(c){clearTimeout(c)}})(a)}}
W.cs.prototype={$ics:1}
W.iv.prototype={
gk:function(a){return a.length},
m:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.P(b,a,null,null,null))
return a[b]},
A:function(a,b){if(b<0||b>=a.length)return H.k(a,b)
return a[b]},
$iC:1,
$aC:function(){return[W.J]},
$ar:function(){return[W.J]},
$ih:1,
$ah:function(){return[W.J]},
$ib:1,
$ab:function(){return[W.J]},
$aw:function(){return[W.J]}}
W.dU.prototype={
i:function(a){return"Rectangle ("+H.i(a.left)+", "+H.i(a.top)+") "+H.i(a.width)+" x "+H.i(a.height)},
n:function(a,b){var u
if(b==null)return!1
if(!H.cF(b,"$ia4",[P.V],"$aa4"))return!1
u=J.ae(b)
return a.left===u.gaY(b)&&a.top===u.gb0(b)&&a.width===u.gak(b)&&a.height===u.gaf(b)},
gE:function(a){return W.kJ(C.d.gE(a.left),C.d.gE(a.top),C.d.gE(a.width),C.d.gE(a.height))},
gaf:function(a){return a.height},
gak:function(a){return a.width}}
W.iJ.prototype={
gk:function(a){return a.length},
m:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.P(b,a,null,null,null))
return a[b]},
A:function(a,b){if(b<0||b>=a.length)return H.k(a,b)
return a[b]},
$iC:1,
$aC:function(){return[W.aC]},
$ar:function(){return[W.aC]},
$ih:1,
$ah:function(){return[W.aC]},
$ib:1,
$ab:function(){return[W.aC]},
$aw:function(){return[W.aC]}}
W.eb.prototype={
gk:function(a){return a.length},
m:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.P(b,a,null,null,null))
return a[b]},
A:function(a,b){if(b<0||b>=a.length)return H.k(a,b)
return a[b]},
$iC:1,
$aC:function(){return[W.y]},
$ar:function(){return[W.y]},
$ih:1,
$ah:function(){return[W.y]},
$ib:1,
$ab:function(){return[W.y]},
$aw:function(){return[W.y]}}
W.iW.prototype={
gk:function(a){return a.length},
m:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.P(b,a,null,null,null))
return a[b]},
A:function(a,b){if(b<0||b>=a.length)return H.k(a,b)
return a[b]},
$iC:1,
$aC:function(){return[W.aL]},
$ar:function(){return[W.aL]},
$ih:1,
$ah:function(){return[W.aL]},
$ib:1,
$ab:function(){return[W.aL]},
$aw:function(){return[W.aL]}}
W.iX.prototype={
gk:function(a){return a.length},
m:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.P(b,a,null,null,null))
return a[b]},
A:function(a,b){if(b<0||b>=a.length)return H.k(a,b)
return a[b]},
$iC:1,
$aC:function(){return[W.at]},
$ar:function(){return[W.at]},
$ih:1,
$ah:function(){return[W.at]},
$ib:1,
$ab:function(){return[W.at]},
$aw:function(){return[W.at]}}
W.it.prototype={
L:function(a,b){var u,t,s,r,q,p
H.j(b,{func:1,ret:-1,args:[P.e,P.e]})
for(u=this.gW(this),t=u.length,s=this.a,r=J.ae(s),q=0;q<u.length;u.length===t||(0,H.B)(u),++q){p=u[q]
b.$2(p,r.aB(s,p))}},
gW:function(a){var u,t,s,r,q
u=this.a.attributes
t=H.c([],[P.e])
for(s=u.length,r=0;r<s;++r){if(r>=u.length)return H.k(u,r)
q=H.l(u[r],"$ics")
if(q.namespaceURI==null)C.a.h(t,q.name)}return t},
$aa1:function(){return[P.e,P.e]},
$aG:function(){return[P.e,P.e]}}
W.iw.prototype={
m:function(a,b){return J.jp(this.a,H.E(b))},
gk:function(a){return this.gW(this).length}}
W.ix.prototype={}
W.jG.prototype={}
W.iy.prototype={}
W.iz.prototype={
$1:function(a){return this.a.$1(H.l(a,"$im"))},
$S:25}
W.bm.prototype={
dJ:function(a){var u,t
u=$.k_()
if(u.a===0){for(t=0;t<262;++t)u.P(0,C.V[t],W.mt())
for(t=0;t<12;++t)u.P(0,C.t[t],W.mu())}},
au:function(a){return $.li().R(0,W.c2(a))},
a7:function(a,b,c){var u,t,s
u=W.c2(a)
t=$.k_()
s=t.m(0,H.i(u)+"::"+b)
if(s==null)s=t.m(0,"*::"+b)
if(s==null)return!1
return H.jM(s.$4(a,b,c,this))},
$iaj:1}
W.w.prototype={
gN:function(a){return new W.d_(a,this.gk(a),-1,[H.cH(this,a,"w",0)])}}
W.dk.prototype={
au:function(a){return C.a.cz(this.a,new W.h_(a))},
a7:function(a,b,c){return C.a.cz(this.a,new W.fZ(a,b,c))},
$iaj:1}
W.h_.prototype={
$1:function(a){return H.l(a,"$iaj").au(this.a)},
$S:16}
W.fZ.prototype={
$1:function(a){return H.l(a,"$iaj").a7(this.a,this.b,this.c)},
$S:16}
W.ej.prototype={
dM:function(a,b,c,d){var u,t,s
this.a.a6(0,c)
u=b.b1(0,new W.iU())
t=b.b1(0,new W.iV())
this.b.a6(0,u)
s=this.c
s.a6(0,C.X)
s.a6(0,t)},
au:function(a){return this.a.R(0,W.c2(a))},
a7:function(a,b,c){var u,t
u=W.c2(a)
t=this.c
if(t.R(0,H.i(u)+"::"+b))return this.d.fD(c)
else if(t.R(0,"*::"+b))return this.d.fD(c)
else{t=this.b
if(t.R(0,H.i(u)+"::"+b))return!0
else if(t.R(0,"*::"+b))return!0
else if(t.R(0,H.i(u)+"::*"))return!0
else if(t.R(0,"*::*"))return!0}return!1},
$iaj:1}
W.iU.prototype={
$1:function(a){return!C.a.R(C.t,H.E(a))},
$S:17}
W.iV.prototype={
$1:function(a){return C.a.R(C.t,H.E(a))},
$S:17}
W.iZ.prototype={
a7:function(a,b,c){if(this.dB(a,b,c))return!0
if(b==="template"&&c==="")return!0
if(J.jp(a,"template")==="")return this.e.R(0,b)
return!1}}
W.j_.prototype={
$1:function(a){return"TEMPLATE::"+H.i(H.E(a))},
$S:26}
W.iY.prototype={
au:function(a){var u=J.S(a)
if(!!u.$icf)return!1
u=!!u.$in
if(u&&W.c2(a)==="foreignObject")return!1
if(u)return!0
return!1},
a7:function(a,b,c){if(b==="is"||C.c.b5(b,"on"))return!1
return this.au(a)},
$iaj:1}
W.d_.prototype={
v:function(){var u,t
u=this.c+1
t=this.b
if(u<t){this.scj(J.lk(this.a,u))
this.c=u
return!0}this.scj(null)
this.c=t
return!1},
gH:function(a){return this.d},
scj:function(a){this.d=H.z(a,H.u(this,0))},
$iaD:1}
W.aj.prototype={}
W.iS.prototype={$in8:1}
W.eA.prototype={
bS:function(a){new W.j3(this).$2(a,null)},
aG:function(a,b){if(b==null)J.k1(a)
else J.eM(b,a)},
fc:function(a,b){var u,t,s,r,q,p,o,n
u=!0
t=null
s=null
try{t=J.ln(a)
s=J.jp(t.a,"is")
r=function(c){if(!(c.attributes instanceof NamedNodeMap))return true
var m=c.childNodes
if(c.lastChild&&c.lastChild!==m[m.length-1])return true
if(c.children)if(!(c.children instanceof HTMLCollection||c.children instanceof NodeList))return true
var l=0
if(c.children)l=c.children.length
for(var k=0;k<l;k++){var j=c.children[k]
if(j.id=='attributes'||j.name=='attributes'||j.id=='lastChild'||j.name=='lastChild'||j.id=='children'||j.name=='children')return true}return false}(a)
u=r?!0:!(a.attributes instanceof NamedNodeMap)}catch(o){H.ak(o)}q="element unprintable"
try{q=J.ag(a)}catch(o){H.ak(o)}try{p=W.c2(a)
this.fb(H.l(a,"$iK"),b,u,q,p,H.l(t,"$iG"),H.E(s))}catch(o){if(H.ak(o) instanceof P.as)throw o
else{this.aG(a,b)
window
n="Removing corrupted element "+H.i(q)
if(typeof console!="undefined")window.console.warn(n)}}},
fb:function(a,b,c,d,e,f,g){var u,t,s,r,q,p
if(c){this.aG(a,b)
window
u="Removing element due to corrupted attributes on <"+d+">"
if(typeof console!="undefined")window.console.warn(u)
return}if(!this.a.au(a)){this.aG(a,b)
window
u="Removing disallowed element <"+H.i(e)+"> from "+H.i(b)
if(typeof console!="undefined")window.console.warn(u)
return}if(g!=null)if(!this.a.a7(a,"is",g)){this.aG(a,b)
window
u="Removing disallowed type extension <"+H.i(e)+' is="'+g+'">'
if(typeof console!="undefined")window.console.warn(u)
return}u=f.gW(f)
t=H.c(u.slice(0),[H.u(u,0)])
for(s=f.gW(f).length-1,u=f.a,r=J.ae(u);s>=0;--s){if(s>=t.length)return H.k(t,s)
q=t[s]
if(!this.a.a7(a,J.lq(q),r.aB(u,q))){window
p="Removing disallowed attribute <"+H.i(e)+" "+q+'="'+H.i(r.aB(u,q))+'">'
if(typeof console!="undefined")window.console.warn(p)
r.aB(u,q)
r.f5(u,q)}}if(!!J.S(a).$ick)this.bS(a.content)},
$imT:1}
W.j3.prototype={
$2:function(a,b){var u,t,s,r,q,p
s=this.a
switch(a.nodeType){case 1:s.fc(a,b)
break
case 8:case 11:case 3:case 4:break
default:s.aG(a,b)}u=a.lastChild
for(s=a==null;null!=u;){t=null
try{t=u.previousSibling}catch(r){H.ak(r)
q=H.l(u,"$iy")
if(s){p=q.parentNode
if(p!=null)J.eM(p,q)}else J.eM(a,q)
u=null
t=a.lastChild}if(u!=null)this.$2(u,a)
u=H.l(t,"$iy")}},
$S:27}
W.dT.prototype={}
W.dV.prototype={}
W.dW.prototype={}
W.dX.prototype={}
W.dY.prototype={}
W.e_.prototype={}
W.e0.prototype={}
W.e1.prototype={}
W.e2.prototype={}
W.e7.prototype={}
W.e8.prototype={}
W.e9.prototype={}
W.ea.prototype={}
W.ec.prototype={}
W.ed.prototype={}
W.eg.prototype={}
W.eh.prototype={}
W.ei.prototype={}
W.cy.prototype={}
W.cz.prototype={}
W.ek.prototype={}
W.el.prototype={}
W.ep.prototype={}
W.es.prototype={}
W.et.prototype={}
W.cA.prototype={}
W.cB.prototype={}
W.ev.prototype={}
W.ew.prototype={}
W.eB.prototype={}
W.eC.prototype={}
W.eD.prototype={}
W.eE.prototype={}
W.eF.prototype={}
W.eG.prototype={}
W.eH.prototype={}
W.eI.prototype={}
W.eJ.prototype={}
W.eK.prototype={}
P.ez.prototype={$ibe:1,
gcH:function(a){return this.a}}
P.jb.prototype={
$2:function(a,b){this.a[a]=b},
$S:23}
P.fk.prototype={
gbg:function(){var u,t,s
u=this.b
t=H.af(u,"r",0)
s=W.K
return new H.fJ(new H.cq(u,H.j(new P.fl(),{func:1,ret:P.I,args:[t]}),[t]),H.j(new P.fm(),{func:1,ret:s,args:[t]}),[t,s])},
h:function(a,b){J.k0(this.b.a,b)},
gk:function(a){return J.br(this.gbg().a)},
m:function(a,b){var u=this.gbg()
return u.b.$1(J.jo(u.a,b))},
gN:function(a){var u=P.lI(this.gbg(),!1,W.K)
return new J.al(u,u.length,0,[H.u(u,0)])},
$ar:function(){return[W.K]},
$ah:function(){return[W.K]},
$ab:function(){return[W.K]}}
P.fl.prototype={
$1:function(a){return!!J.S(H.l(a,"$iy")).$iK},
$S:13}
P.fm.prototype={
$1:function(a){return H.a7(H.l(a,"$iy"),"$iK")},
$S:39}
P.iN.prototype={
gd_:function(a){var u=this.a
if(typeof u!=="number")return u.C()
return H.z(u+this.c,H.u(this,0))},
gcC:function(a){var u=this.b
if(typeof u!=="number")return u.C()
return H.z(u+this.d,H.u(this,0))},
i:function(a){return"Rectangle ("+H.i(this.a)+", "+H.i(this.b)+") "+this.c+" x "+this.d},
n:function(a,b){var u,t,s,r
if(b==null)return!1
if(H.cF(b,"$ia4",[P.V],"$aa4")){u=this.a
t=J.ae(b)
if(u==t.gaY(b)){s=this.b
if(s==t.gb0(b)){if(typeof u!=="number")return u.C()
r=H.u(this,0)
if(H.z(u+this.c,r)===t.gd_(b)){if(typeof s!=="number")return s.C()
u=H.z(s+this.d,r)===t.gcC(b)}else u=!1}else u=!1}else u=!1}else u=!1
return u},
gE:function(a){var u,t,s,r,q
u=this.a
t=J.bq(u)
s=this.b
r=J.bq(s)
if(typeof u!=="number")return u.C()
q=H.u(this,0)
u=C.f.gE(H.z(u+this.c,q))
if(typeof s!=="number")return s.C()
q=C.f.gE(H.z(s+this.d,q))
return P.m6(P.iL(P.iL(P.iL(P.iL(0,t),r),u),q))}}
P.a4.prototype={
gaY:function(a){return this.a},
gb0:function(a){return this.b},
gak:function(a){return this.c},
gaf:function(a){return this.d}}
P.aV.prototype={$iaV:1}
P.fC.prototype={
gk:function(a){return a.length},
m:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.P(b,a,null,null,null))
return this.aa(a,b)},
A:function(a,b){return this.m(a,b)},
aa:function(a,b){return a.getItem(b)},
$ar:function(){return[P.aV]},
$ih:1,
$ah:function(){return[P.aV]},
$ib:1,
$ab:function(){return[P.aV]},
$aw:function(){return[P.aV]}}
P.aZ.prototype={$iaZ:1}
P.h3.prototype={
gk:function(a){return a.length},
m:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.P(b,a,null,null,null))
return this.aa(a,b)},
A:function(a,b){return this.m(a,b)},
aa:function(a,b){return a.getItem(b)},
$ar:function(){return[P.aZ]},
$ih:1,
$ah:function(){return[P.aZ]},
$ib:1,
$ab:function(){return[P.aZ]},
$aw:function(){return[P.aZ]}}
P.ha.prototype={
gk:function(a){return a.length}}
P.cf.prototype={$icf:1}
P.hE.prototype={
gk:function(a){return a.length},
m:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.P(b,a,null,null,null))
return this.aa(a,b)},
A:function(a,b){return this.m(a,b)},
aa:function(a,b){return a.getItem(b)},
$ar:function(){return[P.e]},
$ih:1,
$ah:function(){return[P.e]},
$ib:1,
$ab:function(){return[P.e]},
$aw:function(){return[P.e]}}
P.n.prototype={
gcE:function(a){return new P.fk(a,new W.a9(a))},
a_:function(a,b,c,d){var u,t,s,r,q,p
u=H.c([],[W.aj])
C.a.h(u,W.kI(null))
C.a.h(u,W.kK())
C.a.h(u,new W.iY())
c=new W.eA(new W.dk(u))
t='<svg version="1.1">'+b+"</svg>"
u=document
s=u.body
r=(s&&C.l).fS(s,t,c)
q=u.createDocumentFragment()
r.toString
u=new W.a9(r)
p=u.gal(u)
for(u=J.ae(q);s=p.firstChild,s!=null;)u.u(q,s)
return q},
$in:1}
P.b_.prototype={$ib_:1}
P.hS.prototype={
gk:function(a){return a.length},
m:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.P(b,a,null,null,null))
return this.aa(a,b)},
A:function(a,b){return this.m(a,b)},
aa:function(a,b){return a.getItem(b)},
$ar:function(){return[P.b_]},
$ih:1,
$ah:function(){return[P.b_]},
$ib:1,
$ab:function(){return[P.b_]},
$aw:function(){return[P.b_]}}
P.e3.prototype={}
P.e4.prototype={}
P.ee.prototype={}
P.ef.prototype={}
P.eq.prototype={}
P.er.prototype={}
P.ex.prototype={}
P.ey.prototype={}
P.eQ.prototype={
gk:function(a){return a.length}}
P.eR.prototype={
m:function(a,b){return P.b1(a.get(H.E(b)))},
L:function(a,b){var u,t
H.j(b,{func:1,ret:-1,args:[P.e,,]})
u=a.entries()
for(;!0;){t=u.next()
if(t.done)return
b.$2(t.value[0],P.b1(t.value[1]))}},
gW:function(a){var u=H.c([],[P.e])
this.L(a,new P.eS(u))
return u},
gk:function(a){return a.size},
$aa1:function(){return[P.e,null]},
$iG:1,
$aG:function(){return[P.e,null]}}
P.eS.prototype={
$2:function(a,b){return C.a.h(this.a,a)},
$S:6}
P.eT.prototype={
gk:function(a){return a.length}}
P.bs.prototype={}
P.h4.prototype={
gk:function(a){return a.length}}
P.dS.prototype={}
P.cO.prototype={$icO:1}
P.d0.prototype={$id0:1}
P.dq.prototype={$idq:1}
P.bD.prototype={
cu:function(a,b){return a.activeTexture(b)},
cA:function(a,b,c){return a.attachShader(b,c)},
a8:function(a,b,c){return a.bindBuffer(b,c)},
fH:function(a,b,c){return a.bindFramebuffer(b,c)},
av:function(a,b,c){return a.bindTexture(b,c)},
cD:function(a,b,c,d){return a.bufferData(b,c,d)},
fK:function(a,b){return a.clear(b)},
fL:function(a,b,c,d,e){return a.clearColor(b,c,d,e)},
fM:function(a,b){return a.clearDepth(b)},
fN:function(a,b){return a.compileShader(b)},
fU:function(a,b){return a.createShader(b)},
fW:function(a,b){return a.deleteProgram(b)},
fX:function(a,b){return a.deleteShader(b)},
h_:function(a,b){return a.depthFunc(b)},
cI:function(a,b){return a.disableVertexAttribArray(b)},
h1:function(a,b,c,d,e){return a.drawElements(b,c,d,e)},
cK:function(a,b){return a.enable(b)},
cL:function(a,b){return a.enableVertexAttribArray(b)},
d9:function(a,b,c){return a.getActiveAttrib(b,c)},
da:function(a,b,c){return a.getActiveUniform(b,c)},
dc:function(a,b,c){return a.getAttribLocation(b,c)},
bR:function(a,b){return a.getParameter(b)},
dg:function(a,b){return a.getProgramInfoLog(b)},
b2:function(a,b,c){return a.getProgramParameter(b,c)},
dh:function(a,b){return a.getShaderInfoLog(b)},
di:function(a,b,c){return a.getShaderParameter(b,c)},
dj:function(a,b,c){return a.getUniformLocation(b,c)},
he:function(a,b){return a.linkProgram(b)},
hx:function(a,b,c){return a.pixelStorei(b,c)},
ds:function(a,b,c){return a.shaderSource(b,c)},
hI:function(a,b,c,d,e,f,g,h,i,j){var u,t
u=J.S(g)
if(!!u.$ibe)t=!0
else t=!1
if(t){this.fl(a,b,c,d,e,f,P.mn(g))
return}if(!!u.$ic6)u=!0
else u=!1
if(u){this.fm(a,b,c,d,e,f,g)
return}throw H.f(P.lr("Incorrect number or type of arguments"))},
hH:function(a,b,c,d,e,f,g){return this.hI(a,b,c,d,e,f,g,null,null,null)},
fl:function(a,b,c,d,e,f,g){return a.texImage2D(b,c,d,e,f,g)},
fm:function(a,b,c,d,e,f,g){return a.texImage2D(b,c,d,e,f,g)},
b_:function(a,b,c,d){return a.texParameteri(b,c,d)},
aO:function(a,b,c){return a.uniform1i(b,c)},
hQ:function(a,b,c,d){return a.uniformMatrix3fv(b,!1,d)},
hR:function(a,b,c,d){return a.uniformMatrix4fv(b,!1,d)},
d7:function(a,b){return a.useProgram(b)},
hS:function(a,b,c,d,e,f,g){return a.vertexAttribPointer(b,c,d,!1,f,g)},
hT:function(a,b,c,d,e){return a.viewport(b,c,d,e)},
$ibD:1}
P.dt.prototype={$idt:1}
P.dz.prototype={$idz:1}
P.dF.prototype={$idF:1}
P.hw.prototype={
gk:function(a){return a.length},
m:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.P(b,a,null,null,null))
return P.b1(this.ec(a,b))},
A:function(a,b){return this.m(a,b)},
ec:function(a,b){return a.item(b)},
$ar:function(){return[[P.G,,,]]},
$ih:1,
$ah:function(){return[[P.G,,,]]},
$ib:1,
$ab:function(){return[[P.G,,,]]},
$aw:function(){return[[P.G,,,]]}}
P.em.prototype={}
P.en.prototype={}
O.Y.prototype={
bW:function(a){this.seh(H.c([],[a]))
this.scl(null)
this.sck(null)
this.scm(null)},
dn:function(a,b,c){var u={func:1,ret:-1,args:[P.A,[P.h,H.af(this,"Y",0)]]}
H.j(a,u)
H.j(c,u)
this.scl(b)
this.sck(a)
this.scm(c)},
b3:function(a,b){return this.dn(a,null,b)},
eV:function(a){H.o(a,"$ih",[H.af(this,"Y",0)],"$ah")
return!0},
dH:function(a,b){var u
H.o(b,"$ih",[H.af(this,"Y",0)],"$ah")
u=this.c
if(u!=null)u.$2(a,b)},
gk:function(a){return this.a.length},
gN:function(a){var u=this.a
return new J.al(u,u.length,0,[H.u(u,0)])},
A:function(a,b){var u=this.a
if(b<0||b>=u.length)return H.k(u,b)
return u[b]},
h:function(a,b){var u,t,s
u=H.af(this,"Y",0)
H.z(b,u)
u=[u]
if(this.eV(H.c([b],u))){t=this.a
s=t.length
C.a.h(t,b)
this.dH(s,H.c([b],u))}},
seh:function(a){this.a=H.o(a,"$ib",[H.af(this,"Y",0)],"$ab")},
scl:function(a){this.b=H.j(a,{func:1,ret:P.I,args:[[P.h,H.af(this,"Y",0)]]})},
sck:function(a){this.c=H.j(a,{func:1,ret:-1,args:[P.A,[P.h,H.af(this,"Y",0)]]})},
scm:function(a){this.d=H.j(a,{func:1,ret:-1,args:[P.A,[P.h,H.af(this,"Y",0)]]})},
$ih:1}
O.c8.prototype={
gk:function(a){return this.a.length},
gp:function(){var u=this.b
if(u==null){u=D.O()
this.b=u}return u},
dI:function(a){var u=this.b
if(u!=null)u.B(a)},
am:function(){return this.dI(null)},
gah:function(a){var u=this.a
if(u.length>0)return C.a.gaX(u)
else return V.dg()},
cX:function(a){var u=this.a
if(a==null)C.a.h(u,V.dg())
else C.a.h(u,a)
this.am()},
bN:function(){var u=this.a
if(u.length>0){u.pop()
this.am()}},
sbi:function(a){this.a=H.o(a,"$ib",[V.bh],"$ab")}}
E.eU.prototype={}
E.ab.prototype={
sbT:function(a,b){var u,t,s
u=this.c
if(u!=b){this.c=b
this.d=b
this.e=null
if(u!=null)u.gp().S(0,this.gcT())
t=this.c
if(t!=null)t.gp().h(0,this.gcT())
s=new D.L("shape",u,this.c,this,[F.du])
s.b=!0
this.a2(s)}},
saK:function(a){var u,t
if(!J.W(this.r,a)){u=this.r
if(u!=null)u.gp().S(0,this.gcR())
if(a!=null)a.gp().h(0,this.gcR())
this.r=a
t=new D.L("mover",u,a,this,[U.a3])
t.b=!0
this.a2(t)}},
az:function(a,b){var u,t,s,r
u=this.r
t=u!=null?u.aA(0,b,this):null
if(!J.W(t,this.x)){s=this.x
this.x=t
r=new D.L("matrix",s,t,this,[V.bh])
r.b=!0
this.a2(r)}for(u=this.y.a,u=new J.al(u,u.length,0,[H.u(u,0)]);u.v();)u.d.az(0,b)},
ay:function(a){var u,t,s
u=a.dx
t=this.x
u.toString
if(t==null)C.a.h(u.a,u.gah(u))
else C.a.h(u.a,t.t(0,u.gah(u)))
u.am()
a.cY(this.f)
u=a.dy
s=(u&&C.a).gaX(u)
if(s!=null&&this.d!=null)s.hA(a,this)
for(u=this.y.a,u=new J.al(u,u.length,0,[H.u(u,0)]);u.v();)u.d.ay(a)
a.cW()
a.dx.bN()},
gp:function(){var u=this.z
if(u==null){u=D.O()
this.z=u}return u},
a2:function(a){var u=this.z
if(u!=null)u.B(a)},
X:function(){return this.a2(null)},
cU:function(a){H.l(a,"$iv")
this.e=null
this.a2(a)},
ho:function(){return this.cU(null)},
cS:function(a){this.a2(H.l(a,"$iv"))},
hn:function(){return this.cS(null)},
cQ:function(a){this.a2(H.l(a,"$iv"))},
hk:function(){return this.cQ(null)},
hj:function(a,b){var u,t,s,r,q,p,o
H.o(b,"$ih",[E.ab],"$ah")
for(u=b.length,t=this.gcP(),s={func:1,ret:-1,args:[D.v]},r=[s],q=0;q<b.length;b.length===u||(0,H.B)(b),++q){p=b[q]
if(p!=null){o=p.z
if(o==null){o=new D.c3()
o.sad(null)
o.saS(null)
o.c=null
o.d=0
p.z=o}H.j(t,s)
if(o.a==null)o.sad(H.c([],r))
o=o.a;(o&&C.a).h(o,t)}}this.X()},
hm:function(a,b){var u,t
H.o(b,"$ih",[E.ab],"$ah")
for(u=b.gN(b),t=this.gcP();u.v();)u.gH(u).gp().S(0,t)
this.X()},
i:function(a){var u,t
u=this.a
t=u.length
if(t<=0)return"Unnamed entity"
return u},
sdW:function(a,b){this.y=H.o(b,"$iY",[E.ab],"$aY")},
$iki:1}
E.he.prototype={
dD:function(a,b){var u,t
this.c=512
this.d=512
this.e=0
u=new P.aa(Date.now(),!1)
this.f=u
this.r=u
this.x=u
this.y=0
this.z=null
this.Q=null
this.ch=null
this.cx=null
u=new O.c8()
t=[V.bh]
u.sbi(H.c([],t))
u.b=null
u.gp().h(0,new E.hf(this))
this.cy=u
u=new O.c8()
u.sbi(H.c([],t))
u.b=null
u.gp().h(0,new E.hg(this))
this.db=u
u=new O.c8()
u.sbi(H.c([],t))
u.b=null
u.gp().h(0,new E.hh(this))
this.dx=u
this.sfk(H.c([],[O.bG]))
u=this.dy;(u&&C.a).h(u,null)
this.sfh(new H.aF([P.e,A.cg]))},
cY:function(a){var u,t
u=this.dy
t=a==null?(u&&C.a).gaX(u):a;(u&&C.a).h(u,t)},
cW:function(){var u=this.dy
if(u.length>1)u.pop()},
sfk:function(a){this.dy=H.o(a,"$ib",[O.bG],"$ab")},
sfh:function(a){this.fr=H.o(a,"$iG",[P.e,A.cg],"$aG")}}
E.hf.prototype={
$1:function(a){var u
H.l(a,"$iv")
u=this.a
u.z=null
u.ch=null},
$S:8}
E.hg.prototype={
$1:function(a){var u
H.l(a,"$iv")
u=this.a
u.z=null
u.Q=null
u.ch=null
u.cx=null},
$S:8}
E.hh.prototype={
$1:function(a){var u
H.l(a,"$iv")
u=this.a
u.ch=null
u.cx=null},
$S:8}
E.dB.prototype={
bZ:function(a){H.l(a,"$iv")
this.cZ()},
bY:function(){return this.bZ(null)},
gh9:function(){var u,t,s
u=Date.now()
t=C.f.at(P.k8(0,0,0,u-this.cx.a,0,0).a,1000)/1000
if(t<=0)return 0
s=this.cy
this.cy=0
this.cx=new P.aa(u,!1)
return s/t},
co:function(){var u,t,s,r
u=window.devicePixelRatio
t=this.b.clientWidth
if(typeof t!=="number")return t.t()
if(typeof u!=="number")return H.D(u)
s=C.d.bF(t*u)
t=this.b.clientHeight
if(typeof t!=="number")return t.t()
r=C.d.bF(t*u)
t=this.b
if(t.width!==s||t.height!==r){t.width=s
t.height=r
P.kz(C.q,this.ghB())}},
cZ:function(){var u,t
if(!this.ch){this.ch=!0
u=window
t=H.j(new E.hL(this),{func:1,ret:-1,args:[P.V]})
C.F.e1(u)
C.F.f9(u,W.kR(t,P.V))}},
hz:function(){var u,t,s,r,q
try{++this.cy
this.ch=!1
this.co()
if(this.d!=null){s=this.e;++s.e
s.r=s.x
r=Date.now()
s.x=new P.aa(r,!1)
s.y=P.k8(0,0,0,r-s.r.a,0,0).a*0.000001
r=s.cy
C.a.sk(r.a,0)
r.am()
r=s.db
C.a.sk(r.a,0)
r.am()
r=s.dx
C.a.sk(r.a,0)
r.am()
r=s.dy;(r&&C.a).sk(r,0)
s=s.dy;(s&&C.a).h(s,null)
this.d.ay(this.e)}s=this.z
if(s!=null)s.B(null)}catch(q){u=H.ak(q)
t=H.bO(q)
P.jW("Error: "+H.i(u))
P.jW("Stack: "+H.i(t))
throw H.f(u)}}}
E.hL.prototype={
$1:function(a){var u
H.mE(a)
u=this.a
if(u.ch){u.ch=!1
u.hz()}},
$S:32}
Z.dQ.prototype={$imN:1}
Z.cP.prototype={
bx:function(a){var u,t,s
try{t=a.a
C.b.cL(t,this.e)
C.b.hS(t,this.e,this.b,5126,!1,this.d,this.c)}catch(s){u=H.ak(s)
t=P.X('Failed to bind buffer attribute "'+this.a.i(0)+'": '+H.i(u))
throw H.f(t)}},
i:function(a){return"["+this.a.i(0)+", Size: "+this.b+", Offset: "+this.c+", Stride: "+this.d+", Attr: "+H.i(this.e)+"]"}}
Z.im.prototype={$imO:1}
Z.cQ.prototype={
aJ:function(a){var u,t,s,r
for(u=this.c,t=u.length,s=0;s<t;++s){r=u[s]
if((r.a.a&a.a)!==0)return r}return},
bx:function(a){var u,t
u=this.a
C.b.a8(a.a,u.a,u.b)
for(u=this.c,t=u.length-1;t>=0;--t)u[t].bx(a)},
hP:function(a){var u,t,s
for(u=this.c,t=u.length-1,s=a.a;t>=0;--t)C.b.cI(s,u[t].e)
C.b.a8(s,this.a.a,null)},
ay:function(a){var u,t,s,r,q,p
u=this.b.length
for(t=a.a,s=0;s<u;++s){r=this.b
if(s>=r.length)return H.k(r,s)
q=r[s]
r=q.c
p=r.a
C.b.a8(t,p,r.b)
C.b.h1(t,q.a,q.b,5123,0)
C.b.a8(t,p,null)}},
i:function(a){var u,t,s,r,q,p
u=[P.e]
t=H.c([],u)
for(s=this.b,r=s.length,q=0;q<s.length;s.length===r||(0,H.B)(s),++q)C.a.h(t,s[q].i(0))
p=H.c([],u)
for(u=this.c,s=u.length,q=0;q<s;++q)C.a.h(p,J.ag(u[q]))
return"Buffer:  ["+this.a.i(0)+"]\nIndices: "+C.a.l(t,", ")+"\nAttrs:   "+C.a.l(p,", ")},
seb:function(a){this.b=H.o(a,"$ib",[Z.bf],"$ab")},
$imW:1}
Z.bf.prototype={
i:function(a){return"Type: "+this.a+", Count: "+this.b+", ["+("Instance of '"+H.bB(this.c)+"'")+"]"}}
Z.b0.prototype={
gbU:function(a){var u,t
u=this.a
t=(u&$.b4().a)!==0?3:0
if((u&$.b3().a)!==0)t+=3
if((u&$.b2().a)!==0)t+=3
if((u&$.b5().a)!==0)t+=2
if((u&$.b6().a)!==0)t+=3
if((u&$.cI().a)!==0)t+=3
if((u&$.cJ().a)!==0)t+=4
if((u&$.bS().a)!==0)++t
return(u&$.bR().a)!==0?t+4:t},
fE:function(a){var u,t,s
u=$.b4()
t=this.a
if((t&u.a)!==0){if(0===a)return u
s=1}else s=0
u=$.b3()
if((t&u.a)!==0){if(s===a)return u;++s}u=$.b2()
if((t&u.a)!==0){if(s===a)return u;++s}u=$.b5()
if((t&u.a)!==0){if(s===a)return u;++s}u=$.b6()
if((t&u.a)!==0){if(s===a)return u;++s}u=$.cI()
if((t&u.a)!==0){if(s===a)return u;++s}u=$.cJ()
if((t&u.a)!==0){if(s===a)return u;++s}u=$.bS()
if((t&u.a)!==0){if(s===a)return u;++s}u=$.bR()
if((t&u.a)!==0)if(s===a)return u
return $.lh()},
n:function(a,b){if(b==null)return!1
if(!(b instanceof Z.b0))return!1
return this.a===b.a},
i:function(a){var u,t
u=H.c([],[P.e])
t=this.a
if((t&$.b4().a)!==0)C.a.h(u,"Pos")
if((t&$.b3().a)!==0)C.a.h(u,"Norm")
if((t&$.b2().a)!==0)C.a.h(u,"Binm")
if((t&$.b5().a)!==0)C.a.h(u,"Txt2D")
if((t&$.b6().a)!==0)C.a.h(u,"TxtCube")
if((t&$.cI().a)!==0)C.a.h(u,"Clr3")
if((t&$.cJ().a)!==0)C.a.h(u,"Clr4")
if((t&$.bS().a)!==0)C.a.h(u,"Weight")
if((t&$.bR().a)!==0)C.a.h(u,"Bending")
if(u.length<=0)return"None"
return C.a.l(u,"|")}}
D.eX.prototype={}
D.c3.prototype={
h:function(a,b){var u={func:1,ret:-1,args:[D.v]}
H.j(b,u)
if(this.a==null)this.sad(H.c([],[u]))
u=this.a;(u&&C.a).h(u,b)},
S:function(a,b){var u,t
H.j(b,{func:1,ret:-1,args:[D.v]})
u=this.a
u=u==null?null:C.a.R(u,b)
if(u===!0){u=this.a
t=(u&&C.a).S(u,b)||!1}else t=!1
u=this.b
u=u==null?null:C.a.R(u,b)
if(u===!0){u=this.b
t=(u&&C.a).S(u,b)||t}return t},
B:function(a){var u,t,s,r
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
return!0}if(!s)C.a.L(t,new D.fg(u))
t=this.b
if(t!=null)C.a.L(t,new D.fh(u))
u=this.b
if(u!=null)C.a.sk(u,0)
return!0},
h3:function(){return this.B(null)},
hC:function(a,b,c){var u,t
u=this.d
if(u>0){--u
this.d=u
if(u<=0)u=this.c!=null
else u=!1
if(u){t=this.c
this.c=null
this.B(t)}}},
aj:function(a){return this.hC(a,!0,!1)},
sad:function(a){this.a=H.o(a,"$ib",[{func:1,ret:-1,args:[D.v]}],"$ab")},
saS:function(a){this.b=H.o(a,"$ib",[{func:1,ret:-1,args:[D.v]}],"$ab")}}
D.fg.prototype={
$1:function(a){var u
H.j(a,{func:1,ret:-1,args:[D.v]})
u=this.a.a
u.b
a.$1(u)},
$S:18}
D.fh.prototype={
$1:function(a){var u
H.j(a,{func:1,ret:-1,args:[D.v]})
u=this.a.a
u.b
a.$1(u)},
$S:18}
D.v.prototype={}
D.d3.prototype={}
D.d4.prototype={}
D.L.prototype={
i:function(a){return"ValueChanged: "+this.c+", "+H.i(this.d)+" => "+H.i(this.e)}}
X.cR.prototype={
n:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.cR))return!1
if(this.a!=b.a)return!1
if(!this.b.n(0,b.b))return!1
return!0},
i:function(a){return this.b.i(0)+H.i(this.a)}}
X.d9.prototype={
n:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.d9))return!1
if(this.a!=b.a)return!1
if(!this.b.n(0,b.b))return!1
return!0},
i:function(a){return this.b.i(0)+H.i(this.a)}}
X.fB.prototype={
hu:function(a){this.c=a.b
this.d.h(0,a.a)
return!1},
hq:function(a){this.c=a.b
this.d.S(0,a.a)
return!1},
sf3:function(a){this.d=H.o(a,"$iku",[P.A],"$aku")}}
X.dd.prototype={}
X.fG.prototype={
aE:function(a,b){var u,t,s,r,q,p,o,n
u=new P.aa(Date.now(),!1)
t=this.x
s=b.a
r=this.Q
if(typeof s!=="number")return s.t()
q=b.b
p=this.ch
if(typeof q!=="number")return q.t()
o=new V.a5(t.a+s*r,t.b+q*p)
p=this.a.gax()
n=new X.aY(a,V.bj(),this.x,this.y,this.z,p,o,u,this)
n.b=!0
this.z=u
this.x=o
return n},
bM:function(a,b){this.r=a.a
return!1},
aM:function(a,b){var u,t
u=this.r
t=a.a
if(typeof t!=="number")return t.dl()
if(typeof u!=="number")return u.d8()
this.r=(u&~t)>>>0
return!1},
aL:function(a,b){var u=this.d
if(u==null)return!1
u.B(this.aE(a,b))
return!0},
hv:function(a){var u,t,s,r,q,p,o,n
u=this.e
if(u==null)return!1
t=this.a.gax()
s=this.x
r=Date.now()
q=a.a
p=this.cx
if(typeof q!=="number")return q.t()
o=a.b
n=this.cy
if(typeof o!=="number")return o.t()
r=new X.ca(new V.M(q*p,o*n),t,s,new P.aa(r,!1),this)
r.b=!0
u.B(r)
return!0},
eK:function(a,b,c){var u,t,s
if(this.f==null)return
u=new P.aa(Date.now(),!1)
t=this.f
s=new X.dd(c,a,this.a.gax(),b,u,this)
s.b=!0
t.B(s)
this.y=u
this.x=V.bj()}}
X.ai.prototype={
n:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.ai))return!1
if(this.a!==b.a)return!1
if(this.b!=b.b)return!1
if(this.c!=b.c)return!1
return!0},
i:function(a){var u=this.a?"Ctrl+":""
u+=this.b?"Alt+":""
return u+(this.c?"Shift+":"")}}
X.aY.prototype={}
X.fS.prototype={
be:function(a,b,c){var u,t,s
u=new P.aa(Date.now(),!1)
t=this.a.gax()
s=new X.aY(a,this.r,this.x,this.y,this.z,t,b,u,this)
s.b=!0
if(c){this.y=u
this.r=b}this.z=u
this.x=b
return s},
bM:function(a,b){var u
this.f=a.a
u=this.b
if(u==null)return!1
u.B(this.be(a,b,!0))
return!0},
aM:function(a,b){var u,t
u=this.f
t=a.a
if(typeof t!=="number")return t.dl()
if(typeof u!=="number")return u.d8()
this.f=(u&~t)>>>0
u=this.c
if(u==null)return!1
u.B(this.be(a,b,!0))
return!0},
aL:function(a,b){var u=this.d
if(u==null)return!1
u.B(this.be(a,b,!1))
return!0},
hw:function(a,b){var u,t,s,r,q,p,o
u=this.e
if(u==null)return!1
t=this.a.gax()
s=Date.now()
r=a.a
q=this.Q
if(typeof r!=="number")return r.t()
p=a.b
o=this.ch
if(typeof p!=="number")return p.t()
s=new X.ca(new V.M(r*q,p*o),t,b,new P.aa(s,!1),this)
s.b=!0
u.B(s)
return!0},
gcJ:function(){var u=this.b
if(u==null){u=D.O()
this.b=u}return u},
gd6:function(){var u=this.c
if(u==null){u=D.O()
this.c=u}return u},
gcO:function(){var u=this.d
if(u==null){u=D.O()
this.d=u}return u}}
X.ca.prototype={}
X.h9.prototype={}
X.dD.prototype={}
X.hP.prototype={
aE:function(a,b){var u,t,s,r
H.o(a,"$ib",[V.a5],"$ab")
u=new P.aa(Date.now(),!1)
t=a.length>0?a[0]:V.bj()
s=this.a.gax()
r=new X.dD(a,this.f,this.r,this.x,this.y,s,t,u,this)
r.b=!0
if(b){this.x=u
this.f=t}this.y=u
this.r=t
return r},
ht:function(a){var u
H.o(a,"$ib",[V.a5],"$ab")
u=this.b
if(u==null)return!1
u.B(this.aE(a,!0))
return!0},
hr:function(a){var u
H.o(a,"$ib",[V.a5],"$ab")
u=this.c
if(u==null)return!1
u.B(this.aE(a,!0))
return!0},
hs:function(a){var u
H.o(a,"$ib",[V.a5],"$ab")
u=this.d
if(u==null)return!1
u.B(this.aE(a,!1))
return!0}}
X.dL.prototype={
gax:function(){var u=this.a
return V.ks(0,0,C.o.gcF(u).c,C.o.gcF(u).d)},
cd:function(a){var u,t
u=a.keyCode
t=a.ctrlKey||a.metaKey
return new X.d9(u,new X.ai(t,a.altKey,a.shiftKey))},
as:function(a){var u,t
u=this.b
t=a.ctrlKey||a.metaKey
u.c=new X.ai(t,a.altKey,a.shiftKey)},
bw:function(a){var u,t
u=this.b
t=a.ctrlKey||a.metaKey
u.c=new X.ai(t,a.altKey,a.shiftKey)},
ae:function(a){var u,t,s,r,q
u=this.a.getBoundingClientRect()
t=a.pageX
s=a.pageY
r=u.left
if(typeof t!=="number")return t.F()
q=u.top
if(typeof s!=="number")return s.F()
return new V.a5(t-r,s-q)},
aF:function(a){return new V.M(a.movementX,a.movementY)},
bt:function(a){var u,t,s,r,q,p,o,n
u=this.a.getBoundingClientRect()
t=H.c([],[V.a5])
for(s=a.touches,r=s.length,q=0;q<s.length;s.length===r||(0,H.B)(s),++q){p=s[q]
o=C.d.a3(p.pageX)
C.d.a3(p.pageY)
n=u.left
C.d.a3(p.pageX)
C.a.h(t,new V.a5(o-n,C.d.a3(p.pageY)-u.top))}return t},
ac:function(a){var u,t
u=a.buttons
t=a.ctrlKey||a.metaKey
return new X.cR(u,new X.ai(t,a.altKey,a.shiftKey))},
bj:function(a){var u,t,s,r,q,p
u=this.a.getBoundingClientRect()
t=a.pageX
s=a.pageY
r=u.left
if(typeof t!=="number")return t.F()
q=t-r
if(q<0)return!1
t=u.top
if(typeof s!=="number")return s.F()
p=s-t
if(p<0)return!1
return q<u.width&&p<u.height},
eF:function(a){this.f=!0},
es:function(a){this.f=!1},
ez:function(a){H.l(a,"$ia2")
if(this.f&&this.bj(a))a.preventDefault()},
eJ:function(a){var u
H.l(a,"$iaG")
if(!this.f)return
u=this.cd(a)
this.b.hu(u)},
eH:function(a){var u
H.l(a,"$iaG")
if(!this.f)return
u=this.cd(a)
this.b.hq(u)},
eM:function(a){var u,t,s,r
H.l(a,"$ia2")
u=this.a
u.focus()
this.f=!0
this.as(a)
if(this.x){t=this.ac(a)
s=this.aF(a)
if(this.d.bM(t,s))a.preventDefault()
return}if(this.r){this.y=a
u.requestPointerLock()
return}t=this.ac(a)
r=this.ae(a)
if(this.c.bM(t,r))a.preventDefault()},
eQ:function(a){var u,t,s
H.l(a,"$ia2")
this.as(a)
u=this.ac(a)
if(this.x){t=this.aF(a)
if(this.d.aM(u,t))a.preventDefault()
return}if(this.r)return
s=this.ae(a)
if(this.c.aM(u,s))a.preventDefault()},
eD:function(a){var u,t,s
H.l(a,"$ia2")
if(!this.bj(a)){this.as(a)
u=this.ac(a)
if(this.x){t=this.aF(a)
if(this.d.aM(u,t))a.preventDefault()
return}if(this.r)return
s=this.ae(a)
if(this.c.aM(u,s))a.preventDefault()}},
eO:function(a){var u,t,s
H.l(a,"$ia2")
this.as(a)
u=this.ac(a)
if(this.x){t=this.aF(a)
if(this.d.aL(u,t))a.preventDefault()
return}if(this.r)return
s=this.ae(a)
if(this.c.aL(u,s))a.preventDefault()},
eB:function(a){var u,t,s
H.l(a,"$ia2")
if(!this.bj(a)){this.as(a)
u=this.ac(a)
if(this.x){t=this.aF(a)
if(this.d.aL(u,t))a.preventDefault()
return}if(this.r)return
s=this.ae(a)
if(this.c.aL(u,s))a.preventDefault()}},
eS:function(a){var u,t
H.l(a,"$iaQ")
this.as(a)
u=new V.M((a&&C.E).gfY(a),C.E.gfZ(a)).w(0,180)
if(this.x){if(this.d.hv(u))a.preventDefault()
return}if(this.r)return
t=this.ae(a)
if(this.c.hw(u,t))a.preventDefault()},
eU:function(a){var u,t,s
u=document.pointerLockElement===this.a
if(u!==this.x){this.x=u
t=this.ac(this.y)
s=this.ae(this.y)
this.d.eK(t,s,u)}},
f2:function(a){var u
H.l(a,"$iav")
this.a.focus()
this.f=!0
this.bw(a)
u=this.bt(a)
if(this.e.ht(u))a.preventDefault()},
eZ:function(a){var u
H.l(a,"$iav")
this.bw(a)
u=this.bt(a)
if(this.e.hr(u))a.preventDefault()},
f0:function(a){var u
H.l(a,"$iav")
this.bw(a)
u=this.bt(a)
if(this.e.hs(u))a.preventDefault()},
se2:function(a){this.z=H.o(a,"$ib",[[P.cj,P.H]],"$ab")}}
V.aT.prototype={
n:function(a,b){var u,t
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.aT))return!1
u=b.a
t=$.N().a
if(!(Math.abs(u-this.a)<t))return!1
if(!(Math.abs(b.b-this.b)<t))return!1
if(!(Math.abs(b.c-this.c)<t))return!1
if(!(Math.abs(b.d-this.d)<t))return!1
return!0},
i:function(a){return"["+V.T(this.a,3,0)+", "+V.T(this.b,3,0)+", "+V.T(this.c,3,0)+", "+V.T(this.d,3,0)+"]"}}
V.fe.prototype={}
V.df.prototype={
aN:function(a,b){var u=H.c([this.a,this.d,this.r,this.b,this.e,this.x,this.c,this.f,this.y],[P.x])
return u},
n:function(a,b){var u,t
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.df))return!1
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
t=V.bN(H.c([this.a,this.d,this.r],u),3,0)
s=V.bN(H.c([this.b,this.e,this.x],u),3,0)
r=V.bN(H.c([this.c,this.f,this.y],u),3,0)
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
V.bh.prototype={
aN:function(a,b){var u=H.c([this.a,this.e,this.y,this.cx,this.b,this.f,this.z,this.cy,this.c,this.r,this.Q,this.db,this.d,this.x,this.ch,this.dx],[P.x])
return u},
t:function(b1,b2){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0
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
n:function(a,b){var u,t
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.bh))return!1
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
i:function(a){return this.I()},
cM:function(a,b,c){var u,t,s,r,q,p,o,n,m,l
u=[P.x]
t=V.bN(H.c([this.a,this.e,this.y,this.cx],u),b,c)
s=V.bN(H.c([this.b,this.f,this.z,this.cy],u),b,c)
r=V.bN(H.c([this.c,this.r,this.Q,this.db],u),b,c)
q=V.bN(H.c([this.d,this.x,this.ch,this.dx],u),b,c)
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
I:function(){return this.cM("",3,0)},
q:function(a){return this.cM(a,3,0)}}
V.a5.prototype={
F:function(a,b){return new V.a5(this.a-b.a,this.b-b.b)},
n:function(a,b){var u,t
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.a5))return!1
u=b.a
t=$.N().a
if(!(Math.abs(u-this.a)<t))return!1
if(!(Math.abs(b.b-this.b)<t))return!1
return!0},
i:function(a){return"["+V.T(this.a,3,0)+", "+V.T(this.b,3,0)+"]"}}
V.bk.prototype={
F:function(a,b){return new V.bk(this.a-b.a,this.b-b.b,this.c-b.c)},
n:function(a,b){var u,t
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.bk))return!1
u=b.a
t=$.N().a
if(!(Math.abs(u-this.a)<t))return!1
if(!(Math.abs(b.b-this.b)<t))return!1
if(!(Math.abs(b.c-this.c)<t))return!1
return!0},
i:function(a){return"["+V.T(this.a,3,0)+", "+V.T(this.b,3,0)+", "+V.T(this.c,3,0)+"]"}}
V.dp.prototype={
n:function(a,b){var u,t
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.dp))return!1
u=b.a
t=$.N().a
if(!(Math.abs(u-this.a)<t))return!1
if(!(Math.abs(b.b-this.b)<t))return!1
if(!(Math.abs(b.c-this.c)<t))return!1
if(!(Math.abs(b.d-this.d)<t))return!1
return!0},
i:function(a){return"["+V.T(this.a,3,0)+", "+V.T(this.b,3,0)+", "+V.T(this.c,3,0)+", "+V.T(this.d,3,0)+"]"}}
V.ds.prototype={
gZ:function(){var u,t
u=this.c
t=this.d
if(u>t)return t
else return u},
n:function(a,b){var u,t
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.ds))return!1
u=b.a
t=$.N().a
if(!(Math.abs(u-this.a)<t))return!1
if(!(Math.abs(b.b-this.b)<t))return!1
if(!(Math.abs(b.c-this.c)<t))return!1
if(!(Math.abs(b.d-this.d)<t))return!1
return!0},
i:function(a){return"["+V.T(this.a,3,0)+", "+V.T(this.b,3,0)+", "+V.T(this.c,3,0)+", "+V.T(this.d,3,0)+"]"}}
V.M.prototype={
bH:function(a){return Math.sqrt(this.D(this))},
D:function(a){var u,t,s,r
u=this.a
t=a.a
if(typeof u!=="number")return u.t()
if(typeof t!=="number")return H.D(t)
s=this.b
r=a.b
if(typeof s!=="number")return s.t()
if(typeof r!=="number")return H.D(r)
return u*t+s*r},
t:function(a,b){var u,t
u=this.a
if(typeof u!=="number")return u.t()
t=this.b
if(typeof t!=="number")return t.t()
return new V.M(u*b,t*b)},
w:function(a,b){var u,t
if(Math.abs(b-0)<$.N().a){u=$.kD
if(u==null){u=new V.M(0,0)
$.kD=u}return u}u=this.a
if(typeof u!=="number")return u.w()
t=this.b
if(typeof t!=="number")return t.w()
return new V.M(u/b,t/b)},
n:function(a,b){var u,t,s
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.M))return!1
u=b.a
t=this.a
s=$.N()
s.toString
if(typeof u!=="number")return u.F()
if(typeof t!=="number")return H.D(t)
s=s.a
if(!(Math.abs(u-t)<s))return!1
u=b.b
t=this.b
if(typeof u!=="number")return u.F()
if(typeof t!=="number")return H.D(t)
if(!(Math.abs(u-t)<s))return!1
return!0},
i:function(a){return"["+V.T(this.a,3,0)+", "+V.T(this.b,3,0)+"]"}}
V.U.prototype={
bH:function(a){return Math.sqrt(this.D(this))},
D:function(a){return this.a*a.a+this.b*a.b+this.c*a.c},
bI:function(a,b){var u,t,s
u=this.a
t=this.b
s=this.c
return new V.U(u+b*(a.a-u),t+b*(a.b-t),s+b*(a.c-s))},
aI:function(a){var u,t,s,r,q,p
u=this.b
t=a.c
s=this.c
r=a.b
q=a.a
p=this.a
return new V.U(u*t-s*r,s*q-p*t,p*r-u*q)},
C:function(a,b){return new V.U(this.a+b.a,this.b+b.b,this.c+b.c)},
M:function(a){return new V.U(-this.a,-this.b,-this.c)},
w:function(a,b){if(Math.abs(b-0)<$.N().a)return V.dP()
return new V.U(this.a/b,this.b/b,this.c/b)},
cN:function(){var u=$.N().a
if(!(Math.abs(0-this.a)<u))return!1
if(!(Math.abs(0-this.b)<u))return!1
if(!(Math.abs(0-this.c)<u))return!1
return!0},
n:function(a,b){var u,t
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.U))return!1
u=b.a
t=$.N().a
if(!(Math.abs(u-this.a)<t))return!1
if(!(Math.abs(b.b-this.b)<t))return!1
if(!(Math.abs(b.c-this.c)<t))return!1
return!0},
i:function(a){return"["+V.T(this.a,3,0)+", "+V.T(this.b,3,0)+", "+V.T(this.c,3,0)+"]"}}
U.eY.prototype={
b9:function(a){var u=V.mM(a,this.c,this.b)
return u},
gp:function(){var u=this.y
if(u==null){u=D.O()
this.y=u}return u},
K:function(a){var u=this.y
if(u!=null)u.B(a)},
sbP:function(a,b){},
sbJ:function(a){var u,t
u=this.b
if(!(Math.abs(u-a)<$.N().a)){this.b=a
if(a<this.c){this.c=a
this.d=a}else{t=this.d
if(a<t)this.d=this.b9(t)}u=new D.L("maximumLocation",u,this.b,this,[P.x])
u.b=!0
this.K(u)}},
sbL:function(a){var u,t
u=this.c
if(!(Math.abs(u-a)<$.N().a)){this.c=a
if(this.b<a){this.b=a
this.d=a}else{t=this.d
if(a>t)this.d=this.b9(t)}u=new D.L("minimumLocation",u,this.c,this,[P.x])
u.b=!0
this.K(u)}},
sY:function(a,b){var u
b=this.b9(b)
u=this.d
if(!(Math.abs(u-b)<$.N().a)){this.d=b
u=new D.L("location",u,b,this,[P.x])
u.b=!0
this.K(u)}},
sbK:function(a){var u,t,s
u=this.e
if(!(Math.abs(u-a)<$.N().a)){this.e=a
t=this.f
s=-a
if(t<s)t=s
else if(t>a)t=a
this.f=t
u=new D.L("maximumVelocity",u,a,this,[P.x])
u.b=!0
this.K(u)}},
sO:function(a){var u,t
u=this.e
t=-u
if(a<t)a=t
else if(a>u)a=u
u=this.f
if(!(Math.abs(u-a)<$.N().a)){this.f=a
u=new D.L("velocity",u,a,this,[P.x])
u.b=!0
this.K(u)}},
sbE:function(a){var u
if(a<0)a=0
else if(a>1)a=1
u=this.x
if(!(Math.abs(u-a)<$.N().a)){this.x=a
u=new D.L("dampening",u,a,this,[P.x])
u.b=!0
this.K(u)}},
az:function(a,b){var u,t,s,r,q
u=this.f
t=$.N().a
if(!(Math.abs(u-0)<t)||!(Math.abs(this.r-0)<t)){s=u+this.r*b
u=this.e
r=-u
if(s<r)s=r
else if(s>u)s=u
this.sY(0,this.d+s*b)
u=this.x
if(!(Math.abs(u-0)<$.N().a)){q=s*Math.pow(1-u,b)
if(s<0){if(q<s)q=s
else if(q>0)q=0}else if(q<0)q=0
else if(q>s)q=s
s=q}this.sO(s)}}}
U.cT.prototype={
gp:function(){var u=this.b
if(u==null){u=D.O()
this.b=u}return u},
aA:function(a,b,c){return this.a},
n:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.cT))return!1
return J.W(this.a,b.a)},
i:function(a){return"Constant: "+this.a.q("          ")}}
U.c5.prototype={
gp:function(){var u=this.e
if(u==null){u=D.O()
this.e=u}return u},
K:function(a){var u
H.l(a,"$iv")
u=this.e
if(u!=null)u.B(a)},
V:function(){return this.K(null)},
eq:function(a,b){var u,t,s,r,q,p,o,n
u=U.a3
H.o(b,"$ih",[u],"$ah")
for(t=b.length,s=this.gar(),r={func:1,ret:-1,args:[D.v]},q=[r],p=0;p<b.length;b.length===t||(0,H.B)(b),++p){o=b[p]
if(o!=null){n=o.gp()
n.toString
H.j(s,r)
if(n.a==null)n.sad(H.c([],q))
n=n.a;(n&&C.a).h(n,s)}}u=new D.d3(a,b,this,[u])
u.b=!0
this.K(u)},
eX:function(a,b){var u,t,s
u=U.a3
H.o(b,"$ih",[u],"$ah")
for(t=b.gN(b),s=this.gar();t.v();)t.gH(t).gp().S(0,s)
u=new D.d4(a,b,this,[u])
u.b=!0
this.K(u)},
aA:function(a,b,c){var u,t,s,r
u=this.r
t=b.e
if(typeof u!=="number")return u.aC()
if(u<t){this.r=t
u=this.e
if(u!=null)++u.d
for(u=this.a,u=new J.al(u,u.length,0,[H.u(u,0)]),s=null;u.v();){t=u.d
if(t!=null){r=t.aA(0,b,c)
if(r!=null)s=s==null?r:r.t(0,s)}}this.f=s==null?V.dg():s
u=this.e
if(u!=null)u.aj(0)}return this.f},
n:function(a,b){var u,t,s,r
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.c5))return!1
u=this.a.length
for(t=0;t<u;++t){s=this.a
if(t>=s.length)return H.k(s,t)
s=s[t]
r=b.a
if(t>=r.length)return H.k(r,t)
if(!J.W(s,r[t]))return!1}return!0},
i:function(a){return"Group"},
$ah:function(){return[U.a3]},
$aY:function(){return[U.a3]},
$ia3:1}
U.a3.prototype={}
U.dM.prototype={
gp:function(){var u=this.cy
if(u==null){u=D.O()
this.cy=u}return u},
K:function(a){var u
H.l(a,"$iv")
u=this.cy
if(u!=null)u.B(a)},
V:function(){return this.K(null)},
aH:function(a){if(this.a!=null)return!1
this.a=a
a.c.gcJ().h(0,this.gbk())
this.a.c.gcO().h(0,this.gbm())
this.a.c.gd6().h(0,this.gbo())
return!0},
bl:function(a){H.l(a,"$iv")
if(!J.W(this.c,this.a.b.c))return
this.y=!0
this.x=!0
this.z=this.b.d},
bn:function(a){var u,t,s,r,q,p,o
a=H.a7(H.l(a,"$iv"),"$iaY")
if(!this.y)return
if(this.x){u=a.d.F(0,a.y)
u=new V.M(u.a,u.b)
u=u.D(u)
t=this.r
if(typeof t!=="number")return H.D(t)
if(u<t)return
this.x=!1}if(this.d){u=a.c
t=a.d.F(0,a.y)
u=new V.M(t.a,t.b).t(0,2).w(0,u.gZ())
this.Q=u
t=this.b
u=u.a
if(typeof u!=="number")return u.t()
s=this.e
if(typeof s!=="number")return H.D(s)
t.sO(u*10*s)}else{u=a.c
t=a.d
s=t.F(0,a.y)
r=new V.M(s.a,s.b).t(0,2).w(0,u.gZ())
s=this.b
q=r.a
if(typeof q!=="number")return q.M()
p=this.e
if(typeof p!=="number")return H.D(p)
o=this.z
if(typeof o!=="number")return H.D(o)
s.sY(0,-q*p+o)
this.b.sO(0)
t=t.F(0,a.z)
this.Q=new V.M(t.a,t.b).t(0,2).w(0,u.gZ())}this.V()},
bp:function(a){var u,t,s
H.l(a,"$iv")
if(!this.y)return
this.y=!1
if(this.x)return
u=this.Q
if(u.D(u)>0.0001){u=this.b
t=this.Q.a
if(typeof t!=="number")return t.t()
s=this.e
if(typeof s!=="number")return H.D(s)
u.sO(t*10*s)
this.V()}},
aA:function(a,b,c){var u,t,s,r,q
u=this.ch
t=b.e
if(typeof u!=="number")return u.aC()
if(u<t){this.ch=t
s=b.y
this.b.az(0,s)
u=this.b.d
r=Math.cos(u)
q=Math.sin(u)
this.cx=V.aX(r,-q,0,0,q,r,0,0,0,0,1,0,0,0,0,1)}return this.cx},
$ia3:1}
U.dN.prototype={
gp:function(){var u=this.fx
if(u==null){u=D.O()
this.fx=u}return u},
K:function(a){var u
H.l(a,"$iv")
u=this.fx
if(u!=null)u.B(a)},
V:function(){return this.K(null)},
aH:function(a){var u,t
if(this.a!=null)return!1
this.a=a
a.c.gcJ().h(0,this.gbk())
this.a.c.gcO().h(0,this.gbm())
this.a.c.gd6().h(0,this.gbo())
u=this.a.d
t=u.f
if(t==null){t=D.O()
u.f=t
u=t}else u=t
u.h(0,this.gei())
u=this.a.d
t=u.d
if(t==null){t=D.O()
u.d=t
u=t}else u=t
u.h(0,this.gek())
u=this.a.e
t=u.b
if(t==null){t=D.O()
u.b=t
u=t}else u=t
u.h(0,this.gft())
u=this.a.e
t=u.d
if(t==null){t=D.O()
u.d=t
u=t}else u=t
u.h(0,this.gfq())
u=this.a.e
t=u.c
if(t==null){t=D.O()
u.c=t
u=t}else u=t
u.h(0,this.gfo())
return!0},
a5:function(a){var u,t
u=a.a
t=a.b
if(this.f){if(typeof u!=="number")return u.M()
u=-u}if(this.r){if(typeof t!=="number")return t.M()
t=-t}return new V.M(u,t)},
bl:function(a){a=H.a7(H.l(a,"$iv"),"$iaY")
if(!J.W(this.d,a.x.b))return
this.cx=!0
this.ch=!0
this.cy=this.c.d
this.db=this.b.d},
bn:function(a){var u,t,s,r,q,p,o
a=H.a7(H.l(a,"$iv"),"$iaY")
if(!this.cx)return
if(this.ch){u=a.d.F(0,a.y)
u=new V.M(u.a,u.b)
u=u.D(u)
t=this.Q
if(typeof t!=="number")return H.D(t)
if(u<t)return
this.ch=!1}if(this.e){u=a.c
t=a.d.F(0,a.y)
u=this.a5(new V.M(t.a,t.b).t(0,2).w(0,u.gZ()))
this.dx=u
t=this.c
u=u.a
if(typeof u!=="number")return u.M()
s=this.y
if(typeof s!=="number")return H.D(s)
t.sO(-u*10*s)
s=this.b
u=this.dx.b
if(typeof u!=="number")return u.M()
t=this.x
if(typeof t!=="number")return H.D(t)
s.sO(-u*10*t)}else{u=a.c
t=a.d
s=t.F(0,a.y)
r=this.a5(new V.M(s.a,s.b).t(0,2).w(0,u.gZ()))
s=this.c
q=r.a
if(typeof q!=="number")return q.M()
p=this.y
if(typeof p!=="number")return H.D(p)
o=this.cy
if(typeof o!=="number")return H.D(o)
s.sY(0,-q*p+o)
o=this.b
p=r.b
if(typeof p!=="number")return p.M()
q=this.x
if(typeof q!=="number")return H.D(q)
s=this.db
if(typeof s!=="number")return H.D(s)
o.sY(0,-p*q+s)
this.b.sO(0)
this.c.sO(0)
t=t.F(0,a.z)
this.dx=this.a5(new V.M(t.a,t.b).t(0,2).w(0,u.gZ()))}this.V()},
bp:function(a){var u,t,s
H.l(a,"$iv")
if(!this.cx)return
this.cx=!1
if(this.ch)return
u=this.dx
if(u.D(u)>0.0001){u=this.c
t=this.dx.a
if(typeof t!=="number")return t.M()
s=this.y
if(typeof s!=="number")return H.D(s)
u.sO(-t*10*s)
s=this.b
t=this.dx.b
if(typeof t!=="number")return t.M()
u=this.x
if(typeof u!=="number")return H.D(u)
s.sO(-t*10*u)
this.V()}},
ej:function(a){if(H.a7(H.l(a,"$iv"),"$idd").x){this.ch=!0
this.cy=this.c.d
this.db=this.b.d}},
el:function(a){var u,t,s,r,q,p,o
a=H.a7(H.l(a,"$iv"),"$iaY")
if(!J.W(this.d,a.x.b))return
u=a.c
t=a.d
s=t.F(0,a.y)
r=this.a5(new V.M(s.a,s.b).t(0,2).w(0,u.gZ()))
s=this.c
q=r.a
if(typeof q!=="number")return q.M()
p=this.y
if(typeof p!=="number")return H.D(p)
o=this.cy
if(typeof o!=="number")return H.D(o)
s.sY(0,-q*p+o)
o=this.b
p=r.b
if(typeof p!=="number")return p.M()
q=this.x
if(typeof q!=="number")return H.D(q)
s=this.db
if(typeof s!=="number")return H.D(s)
o.sY(0,-p*q+s)
this.b.sO(0)
this.c.sO(0)
t=t.F(0,a.z)
this.dx=this.a5(new V.M(t.a,t.b).t(0,2).w(0,u.gZ()))
this.V()},
fu:function(a){H.l(a,"$iv")
this.cx=!0
this.ch=!0
this.cy=this.c.d
this.db=this.b.d},
fs:function(a){var u,t,s,r,q,p,o
a=H.a7(H.l(a,"$iv"),"$idD")
if(!this.cx)return
if(this.ch){u=a.d.F(0,a.y)
u=new V.M(u.a,u.b)
u=u.D(u)
t=this.Q
if(typeof t!=="number")return H.D(t)
if(u<t)return
this.ch=!1}if(this.e){u=a.c
t=a.d.F(0,a.y)
u=this.a5(new V.M(t.a,t.b).t(0,2).w(0,u.gZ()))
this.dx=u
t=this.c
u=u.a
if(typeof u!=="number")return u.M()
s=this.y
if(typeof s!=="number")return H.D(s)
t.sO(-u*10*s)
s=this.b
u=this.dx.b
if(typeof u!=="number")return u.M()
t=this.x
if(typeof t!=="number")return H.D(t)
s.sO(-u*10*t)}else{u=a.c
t=a.d
s=t.F(0,a.y)
r=this.a5(new V.M(s.a,s.b).t(0,2).w(0,u.gZ()))
s=this.c
q=r.a
if(typeof q!=="number")return q.M()
p=this.y
if(typeof p!=="number")return H.D(p)
o=this.cy
if(typeof o!=="number")return H.D(o)
s.sY(0,-q*p+o)
o=this.b
p=r.b
if(typeof p!=="number")return p.M()
q=this.x
if(typeof q!=="number")return H.D(q)
s=this.db
if(typeof s!=="number")return H.D(s)
o.sY(0,-p*q+s)
this.b.sO(0)
this.c.sO(0)
t=t.F(0,a.z)
this.dx=this.a5(new V.M(t.a,t.b).t(0,2).w(0,u.gZ()))}this.V()},
fp:function(a){var u,t,s
H.l(a,"$iv")
if(!this.cx)return
this.cx=!1
if(this.ch)return
u=this.dx
if(u.D(u)>0.0001){u=this.c
t=this.dx.a
if(typeof t!=="number")return t.M()
s=this.y
if(typeof s!=="number")return H.D(s)
u.sO(-t*10*s)
s=this.b
t=this.dx.b
if(typeof t!=="number")return t.M()
u=this.x
if(typeof u!=="number")return H.D(u)
s.sO(-t*10*u)
this.V()}},
aA:function(a,b,c){var u,t,s,r,q
u=this.dy
t=b.e
if(typeof u!=="number")return u.aC()
if(u<t){this.dy=t
s=b.y
this.c.az(0,s)
this.b.az(0,s)
u=this.b.d
r=Math.cos(u)
q=Math.sin(u)
u=V.aX(1,0,0,0,0,r,-q,0,0,q,r,0,0,0,0,1)
t=this.c.d
r=Math.cos(t)
q=Math.sin(t)
this.fr=u.t(0,V.aX(r,0,-q,0,0,1,0,0,q,0,r,0,0,0,0,1))}return this.fr},
$ia3:1}
U.dO.prototype={
gp:function(){var u=this.r
if(u==null){u=D.O()
this.r=u}return u},
K:function(a){var u=this.r
if(u!=null)u.B(a)},
aH:function(a){var u,t,s
if(this.a!=null)return!1
this.a=a
u=a.c
t=u.e
if(t==null){t=D.O()
u.e=t
u=t}else u=t
t=this.gen()
u.h(0,t)
u=this.a.d
s=u.e
if(s==null){s=D.O()
u.e=s
u=s}else u=s
u.h(0,t)
return!0},
eo:function(a){var u,t,s,r
H.l(a,"$iv")
if(!J.W(this.b,this.a.b.c))return
H.a7(a,"$ica")
u=this.d
t=a.x.b
s=this.c
if(typeof t!=="number")return t.t()
r=u+t*s
if(u!==r){this.d=r
u=new D.L("zoom",u,r,this,[P.x])
u.b=!0
this.K(u)}},
aA:function(a,b,c){var u,t,s
u=this.e
t=b.e
if(u<t){this.e=t
s=Math.pow(10,this.d)
this.f=V.aX(s,0,0,0,0,s,0,0,0,0,s,0,0,0,0,1)}return this.f},
$ia3:1}
M.cY.prototype={
ab:function(a){var u
H.l(a,"$iv")
u=this.x
if(u!=null)u.B(a)},
dL:function(){return this.ab(null)},
ev:function(a,b){var u,t,s,r,q,p,o,n
u=E.ab
H.o(b,"$ih",[u],"$ah")
for(t=b.length,s=this.ga4(),r={func:1,ret:-1,args:[D.v]},q=[r],p=0;p<b.length;b.length===t||(0,H.B)(b),++p){o=b[p]
if(o!=null){n=o.z
if(n==null){n=new D.c3()
n.sad(null)
n.saS(null)
n.c=null
n.d=0
o.z=n}H.j(s,r)
if(n.a==null)n.sad(H.c([],q))
n=n.a;(n&&C.a).h(n,s)}}u=new D.d3(a,b,this,[u])
u.b=!0
this.ab(u)},
ex:function(a,b){var u,t,s
u=E.ab
H.o(b,"$ih",[u],"$ah")
for(t=b.gN(b),s=this.ga4();t.v();)t.gH(t).gp().S(0,s)
u=new D.d4(a,b,this,[u])
u.b=!0
this.ab(u)},
sd1:function(a,b){var u,t
u=this.b
if(u!==b){if(u!=null)u.gp().S(0,this.ga4())
t=this.b
this.b=b
b.gp().h(0,this.ga4())
u=new D.L("target",t,this.b,this,[X.dy])
u.b=!0
this.ab(u)}},
sd2:function(a){var u,t
u=this.c
if(u!=a){if(u!=null)u.gp().S(0,this.ga4())
t=this.c
this.c=a
if(a!=null)a.gp().h(0,this.ga4())
u=new D.L("technique",t,this.c,this,[O.bG])
u.b=!0
this.ab(u)}},
gp:function(){var u=this.x
if(u==null){u=D.O()
this.x=u}return u},
ay:function(a1){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0
a1.cY(this.c)
u=this.b
u.toString
t=a1.a
C.b.fH(t,36160,null)
C.b.cK(t,2884)
C.b.cK(t,2929)
C.b.h_(t,513)
s=t.drawingBufferWidth
r=t.drawingBufferHeight
q=u.r
p=q.a
if(typeof s!=="number")return H.D(s)
o=C.d.a3(p*s)
p=q.b
if(typeof r!=="number")return H.D(r)
n=C.d.a3(p*r)
p=C.d.a3(q.c*s)
a1.c=p
q=C.d.a3(q.d*r)
a1.d=q
C.b.hT(t,o,n,p,q)
C.b.fM(t,u.c)
u=u.a
C.b.fL(t,u.a,u.b,u.c,u.d)
C.b.fK(t,16640)
u=this.a
t=a1.c
q=a1.d
p=u.c
m=u.d
l=u.e
k=l-m
j=1/Math.tan(p*0.5)
i=V.aX(-j/(t/q),0,0,0,0,j,0,0,0,0,l/k,-l*m/k,0,0,1,0)
u.a
a1.cy.cX(i)
t=$.km
if(t==null){t=$.ko
if(t==null){t=new V.bk(0,0,0)
$.ko=t}q=$.kF
if(q==null){q=new V.U(0,1,0)
$.kF=q}p=$.kE
if(p==null){p=new V.U(0,0,-1)
$.kE=p}h=p.w(0,Math.sqrt(p.D(p)))
q=q.aI(h)
g=q.w(0,Math.sqrt(q.D(q)))
f=h.aI(g)
e=new V.U(t.a,t.b,t.c)
d=g.M(0).D(e)
c=f.M(0).D(e)
b=h.M(0).D(e)
t=V.aX(g.a,f.a,h.a,d,g.b,f.b,h.b,c,g.c,f.c,h.c,b,0,0,0,1)
$.km=t
a=t}else a=t
u=u.b
if(u!=null){a0=u.a
if(a0!=null)a=a0.t(0,a)}a1.db.cX(a)
for(u=this.d.a,u=new J.al(u,u.length,0,[H.u(u,0)]);u.v();)u.d.az(0,a1)
for(u=this.d.a,u=new J.al(u,u.length,0,[H.u(u,0)]);u.v();)u.d.ay(a1)
this.a.toString
a1.cy.bN()
a1.db.bN()
this.b.toString
a1.cW()},
sdK:function(a,b){this.d=H.o(b,"$iY",[E.ab],"$aY")},
$imU:1}
A.cM.prototype={}
A.eP.prototype={
m:function(a,b){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<t;++s){r=u[s]
if(r.b===b)return r}return},
h4:function(){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<u.length;u.length===t||(0,H.B)(u),++s){r=u[s]
C.b.cL(r.a,r.c)}},
h0:function(){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<u.length;u.length===t||(0,H.B)(u),++s){r=u[s]
C.b.cI(r.a,r.c)}}}
A.h0.prototype={}
A.h1.prototype={
i:function(a){return this.e}}
A.cg.prototype={
dF:function(a,b){this.c=null
this.d=null
this.e=null
this.f=null
this.r=null
this.x=null
this.y=null},
ce:function(a,b){var u,t,s
u=this.a
t=C.b.fU(u,b)
C.b.ds(u,t,a)
C.b.fN(u,t)
if(!H.jM(C.b.di(u,t,35713))){s=C.b.dh(u,t)
C.b.fX(u,t)
throw H.f(P.X("Error compiling shader '"+H.i(t)+"': "+H.i(s)))}return t},
fe:function(){var u,t,s,r,q,p
u=H.c([],[A.cM])
t=this.a
s=H.a6(C.b.b2(t,this.r,35721))
if(typeof s!=="number")return H.D(s)
r=0
for(;r<s;++r){q=C.b.d9(t,this.r,r)
p=C.b.dc(t,this.r,q.name)
C.a.h(u,new A.cM(t,q.name,p))}this.x=new A.eP(u)},
fg:function(){var u,t,s,r,q,p
u=H.c([],[A.dE])
t=this.a
s=H.a6(C.b.b2(t,this.r,35718))
if(typeof s!=="number")return H.D(s)
r=0
for(;r<s;++r){q=C.b.da(t,this.r,r)
p=C.b.dj(t,this.r,q.name)
C.a.h(u,this.fV(q.type,q.size,q.name,p))}this.y=new A.i3(u)},
ap:function(a,b,c){var u,t
u=this.a
t=this.r
if(a===1)return new A.co(u,t,b,c)
else return A.jD(u,t,b,a,c)},
dZ:function(a,b,c){var u,t
u=this.a
t=this.r
if(a===1)return new A.dH(u,t,b,c)
else return A.jD(u,t,b,a,c)},
e_:function(a,b,c){var u,t
u=this.a
t=this.r
if(a===1)return new A.dI(u,t,b,c)
else return A.jD(u,t,b,a,c)},
aV:function(a,b){return new P.dZ(a+" uniform variables are unsupported by all browsers.\n"+("Please change the type of "+H.i(b)+"."))},
fV:function(a,b,c,d){switch(a){case 5120:return this.ap(b,c,d)
case 5121:return this.ap(b,c,d)
case 5122:return this.ap(b,c,d)
case 5123:return this.ap(b,c,d)
case 5124:return this.ap(b,c,d)
case 5125:return this.ap(b,c,d)
case 5126:return new A.hW(this.a,this.r,c,d)
case 35664:return new A.hY(this.a,this.r,c,d)
case 35665:return new A.i_(this.a,this.r,c,d)
case 35666:return new A.i1(this.a,this.r,c,d)
case 35667:return new A.hZ(this.a,this.r,c,d)
case 35668:return new A.i0(this.a,this.r,c,d)
case 35669:return new A.i2(this.a,this.r,c,d)
case 35674:return new A.i4(this.a,this.r,c,d)
case 35675:return new A.dG(this.a,this.r,c,d)
case 35676:return new A.bH(this.a,this.r,c,d)
case 35678:return this.dZ(b,c,d)
case 35680:return this.e_(b,c,d)
case 35670:throw H.f(this.aV("BOOL",c))
case 35671:throw H.f(this.aV("BOOL_VEC2",c))
case 35672:throw H.f(this.aV("BOOL_VEC3",c))
case 35673:throw H.f(this.aV("BOOL_VEC4",c))
default:throw H.f(P.X("Unknown uniform variable type "+H.i(a)+" for "+H.i(c)+"."))}}}
A.bv.prototype={
i:function(a){return this.b}}
A.dE.prototype={}
A.i3.prototype={
m:function(a,b){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<t;++s){r=u[s]
if(r.c===b)return r}return},
a9:function(a,b){var u=this.m(0,b)
if(u==null)throw H.f(P.X("Required uniform value, "+b+", was not defined or used in shader."))
return u},
i:function(a){return this.I()},
h8:function(a){var u,t,s,r
for(u=this.a,t=u.length,s="",r=0;r<u.length;u.length===t||(0,H.B)(u),++r)s+=u[r].i(0)+a
return s},
I:function(){return this.h8("\n")}}
A.co.prototype={
i:function(a){return"Uniform1i: "+H.i(this.c)}}
A.hZ.prototype={
i:function(a){return"Uniform2i: "+H.i(this.c)}}
A.i0.prototype={
i:function(a){return"Uniform3i: "+H.i(this.c)}}
A.i2.prototype={
i:function(a){return"Uniform4i: "+H.i(this.c)}}
A.hX.prototype={
i:function(a){return"Uniform1iv: "+H.i(this.c)},
sfw:function(a){this.e=H.o(a,"$ib",[P.A],"$ab")}}
A.hW.prototype={
i:function(a){return"Uniform1f: "+H.i(this.c)}}
A.hY.prototype={
i:function(a){return"Uniform2f: "+H.i(this.c)}}
A.i_.prototype={
i:function(a){return"Uniform3f: "+H.i(this.c)}}
A.i1.prototype={
i:function(a){return"Uniform4f: "+H.i(this.c)}}
A.i4.prototype={
i:function(a){return"Uniform1Mat2 "+H.i(this.c)}}
A.dG.prototype={
i:function(a){return"UniformMat3: "+H.i(this.c)}}
A.bH.prototype={
b4:function(a){var u=new Float32Array(H.j7(H.o(a,"$ib",[P.x],"$ab")))
C.b.hR(this.a,this.d,!1,u)},
i:function(a){return"UniformMat4: "+H.i(this.c)}}
A.dH.prototype={
i:function(a){return"UniformSampler2D: "+H.i(this.c)}}
A.dI.prototype={
i:function(a){return"UniformSamplerCube: "+H.i(this.c)}}
F.j5.prototype={
$3:function(a,b,c){var u,t,s
u=this.a
t=u.a.bI(u.b,b).bI(u.d.bI(u.c,b),c)
u=new V.bk(t.a,t.b,t.c)
if(!J.W(a.f,u)){a.f=u
u=a.a
if(u!=null)u.X()}a.shJ(t.w(0,Math.sqrt(t.D(t))))
u=1-b
s=1-c
s=new V.dp(this.b+b*c,this.c+u*c,this.d+b*s,this.e+u*s)
if(!J.W(a.cx,s)){a.cx=s
u=a.a
if(u!=null)u.X()}},
$S:36}
F.Z.prototype={
dT:function(){var u,t,s,r,q
u=this.a
t=u==null?null:u.r
u=this.b
s=u==null?null:u.r
u=this.c
r=u==null?null:u.r
q=V.dP()
if(t!=null)q=q.C(0,t)
if(s!=null)q=q.C(0,s)
if(r!=null)q=q.C(0,r)
if(q.cN())return
return q.w(0,Math.sqrt(q.D(q)))},
dV:function(){var u,t,s,r,q
u=this.a
t=u==null?null:u.f
u=this.b
s=u==null?null:u.f
u=this.c
r=u==null?null:u.f
if(t==null||s==null||r==null)return
u=s.F(0,t)
u=new V.U(u.a,u.b,u.c)
q=u.w(0,Math.sqrt(u.D(u)))
u=r.F(0,t)
u=new V.U(u.a,u.b,u.c)
u=q.aI(u.w(0,Math.sqrt(u.D(u))))
return u.w(0,Math.sqrt(u.D(u)))},
bB:function(){if(this.d!=null)return!0
var u=this.dT()
if(u==null){u=this.dV()
if(u==null)return!1}this.d=u
this.a.a.X()
return!0},
dS:function(){var u,t,s,r,q
u=this.a
t=u==null?null:u.x
u=this.b
s=u==null?null:u.x
u=this.c
r=u==null?null:u.x
q=V.dP()
if(t!=null)q=q.C(0,t)
if(s!=null)q=q.C(0,s)
if(r!=null)q=q.C(0,r)
if(q.cN())return
return q.w(0,Math.sqrt(q.D(q)))},
dU:function(){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f
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
if(Math.abs(i-0)<$.N().a){u=m.F(0,p)
u=new V.U(u.a,u.b,u.c)
h=u.w(0,Math.sqrt(u.D(u)))
if(j.a-k.a<0)h=h.M(0)}else{g=(u-l.b)/i
u=m.F(0,p)
u=new V.bk(u.a*g+p.a,u.b*g+p.b,u.c*g+p.c).F(0,s)
u=new V.U(u.a,u.b,u.c)
h=u.w(0,Math.sqrt(u.D(u)))
j=j.a
k=k.a
if((j-k)*g+k-l.a<0)h=h.M(0)}u=this.d
if(u!=null){f=u.w(0,Math.sqrt(u.D(u)))
u=f.aI(h)
u=u.w(0,Math.sqrt(u.D(u))).aI(f)
h=u.w(0,Math.sqrt(u.D(u)))}return h},
bz:function(){if(this.e!=null)return!0
var u=this.dS()
if(u==null){u=this.dU()
if(u==null)return!1}this.e=u
this.a.a.X()
return!0},
n:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.I()},
q:function(a){var u,t
u=this.a
if(u==null||this.b==null||this.c==null)return a+"disposed"
t=a+C.c.a1(J.ag(u.e),0)+", "+C.c.a1(J.ag(this.b.e),0)+", "+C.c.a1(J.ag(this.c.e),0)+" {"
u=this.d
t=u!=null?t+(u.i(0)+", "):t+"-, "
u=this.e
return u!=null?t+(u.i(0)+"}"):t+"-}"},
I:function(){return this.q("")}}
F.aW.prototype={
n:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.I()},
q:function(a){var u=this.a
if(u==null||this.b==null)return a+"disposed"
return a+C.c.a1(J.ag(u.e),0)+", "+C.c.a1(J.ag(this.b.e),0)},
I:function(){return this.q("")}}
F.bi.prototype={
n:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.I()},
q:function(a){var u=this.a
if(u==null)return a+"disposed"
return a+C.c.a1(J.ag(u.e),0)},
I:function(){return this.q("")}}
F.du.prototype={
gp:function(){var u=this.e
if(u==null){u=D.O()
this.e=u}return u},
hh:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i,h
u=this.e
if(u!=null)++u.d
a.a.T()
t=this.a.c.length
for(u=a.a.c,s=u.length,r=0;r<u.length;u.length===s||(0,H.B)(u),++r){q=u[r]
this.a.h(0,q.fQ())}this.a.T()
for(u=a.b.b,s=u.length,r=0;r<u.length;u.length===s||(0,H.B)(u),++r){p=u[r]
o=this.a
n=p.a
n.a.a.T()
n=n.e
if(typeof n!=="number")return n.C()
n+=t
o=o.c
if(n>=o.length)return H.k(o,n)
m=o[n]
this.b.a.a.h(0,m)
n=new F.bi()
if(m.a==null)H.a0(P.X("May not create a point with a vertex which is not attached to a shape."))
n.a=m
C.a.h(m.b.b,n)
C.a.h(n.a.a.b.b,n)
o=n.a.a.e
if(o!=null)o.B(null)}for(u=a.c.b,s=u.length,r=0;r<u.length;u.length===s||(0,H.B)(u),++r){l=u[r]
o=this.a
n=l.a
n.a.a.T()
n=n.e
if(typeof n!=="number")return n.C()
n+=t
o=o.c
if(n>=o.length)return H.k(o,n)
k=o[n]
n=this.a
o=l.b
o.a.a.T()
o=o.e
if(typeof o!=="number")return o.C()
o+=t
n=n.c
if(o>=n.length)return H.k(n,o)
j=n[o]
o=this.c.a
o.a.h(0,k)
o.a.h(0,j)
o=new F.aW()
n=k.a
if(n==null)H.a0(P.X("May not create a line with a start vertex which is not attached to a shape."))
if(n!=j.a)H.a0(P.X("May not create a line with vertices attached to different shapes."))
o.a=k
C.a.h(k.c.b,o)
o.b=j
C.a.h(j.c.c,o)
C.a.h(o.a.a.c.b,o)
o=o.a.a.e
if(o!=null)o.B(null)}for(u=a.d.b,s=u.length,r=0;r<u.length;u.length===s||(0,H.B)(u),++r){i=u[r]
o=this.a
n=i.a
n.a.a.T()
n=n.e
if(typeof n!=="number")return n.C()
n+=t
o=o.c
if(n>=o.length)return H.k(o,n)
k=o[n]
n=this.a
o=i.b
o.a.a.T()
o=o.e
if(typeof o!=="number")return o.C()
o+=t
n=n.c
if(o>=n.length)return H.k(n,o)
j=n[o]
o=this.a
n=i.c
n.a.a.T()
n=n.e
if(typeof n!=="number")return n.C()
n+=t
o=o.c
if(n>=o.length)return H.k(o,n)
h=o[n]
n=this.d.a
n.a.h(0,k)
n.a.h(0,j)
n.a.h(0,h)
F.cZ(k,j,h)}u=this.e
if(u!=null)u.aj(0)},
aw:function(){var u,t
u=this.e
if(u!=null)++u.d
t=this.d.aw()||!1
if(!this.a.aw())t=!1
u=this.e
if(u!=null)u.aj(0)
return t},
fI:function(a0,a1){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a
u=this.a.c.length
t=a1.a
s=(t&$.b4().a)!==0?1:0
if((t&$.b3().a)!==0)++s
if((t&$.b2().a)!==0)++s
if((t&$.b5().a)!==0)++s
if((t&$.b6().a)!==0)++s
if((t&$.cI().a)!==0)++s
if((t&$.cJ().a)!==0)++s
if((t&$.bS().a)!==0)++s
if((t&$.bR().a)!==0)++s
r=a1.gbU(a1)
q=r*4
t=new Array(u*r)
t.fixed$length=Array
p=P.x
o=H.c(t,[p])
t=new Array(s)
t.fixed$length=Array
n=H.c(t,[Z.cP])
for(m=0,l=0;l<s;++l){k=a1.fE(l)
j=k.gbU(k)
C.a.P(n,l,new Z.cP(k,j,m*4,q,0))
for(i=0;i<u;++i){t=this.a.c
if(i>=t.length)return H.k(t,i)
h=t[i].hf(k)
g=m+i*r
for(f=0;f<h.length;++f){C.a.P(o,g,h[f]);++g}}m+=j}H.o(o,"$ib",[p],"$ab")
t=a0.a
e=t.createBuffer()
C.b.a8(t,34962,e)
C.b.cD(t,34962,new Float32Array(H.j7(o)),35044)
C.b.a8(t,34962,null)
d=new Z.cQ(new Z.dQ(34962,e),n,a1)
d.seb(H.c([],[Z.bf]))
if(this.b.b.length!==0){p=P.A
c=H.c([],[p])
for(l=0;b=this.b.b,l<b.length;++l){b=b[l].a
b.a.a.T()
C.a.h(c,b.e)}a=Z.jF(t,34963,H.o(c,"$ib",[p],"$ab"))
C.a.h(d.b,new Z.bf(0,c.length,a))}if(this.c.b.length!==0){p=P.A
c=H.c([],[p])
for(l=0;b=this.c.b,l<b.length;++l){b=b[l].a
b.a.a.T()
C.a.h(c,b.e)
b=this.c.b
if(l>=b.length)return H.k(b,l)
b=b[l].b
b.a.a.T()
C.a.h(c,b.e)}a=Z.jF(t,34963,H.o(c,"$ib",[p],"$ab"))
C.a.h(d.b,new Z.bf(1,c.length,a))}if(this.d.b.length!==0){p=P.A
c=H.c([],[p])
for(l=0;b=this.d.b,l<b.length;++l){b=b[l].a
b.a.a.T()
C.a.h(c,b.e)
b=this.d.b
if(l>=b.length)return H.k(b,l)
b=b[l].b
b.a.a.T()
C.a.h(c,b.e)
b=this.d.b
if(l>=b.length)return H.k(b,l)
b=b[l].c
b.a.a.T()
C.a.h(c,b.e)}a=Z.jF(t,34963,H.o(c,"$ib",[p],"$ab"))
C.a.h(d.b,new Z.bf(4,c.length,a))}return d},
i:function(a){var u=H.c([],[P.e])
if(this.a.c.length!==0){C.a.h(u,"Vertices:")
C.a.h(u,this.a.q("   "))}if(this.b.b.length!==0){C.a.h(u,"Points:")
C.a.h(u,this.b.q("   "))}if(this.c.b.length!==0){C.a.h(u,"Lines:")
C.a.h(u,this.c.q("   "))}if(this.d.b.length!==0){C.a.h(u,"Faces:")
C.a.h(u,this.d.q("   "))}return C.a.l(u,"\n")},
a2:function(a){var u=this.e
if(u!=null)u.B(a)},
X:function(){return this.a2(null)},
$imV:1}
F.hn.prototype={
fB:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k,j,i,h
H.o(c,"$ib",[F.ax],"$ab")
u=H.c([],[F.Z])
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
C.a.h(u,F.cZ(l,k,i))
t.a.h(0,l)
t.a.h(0,i)
t.a.h(0,h)
C.a.h(u,F.cZ(l,i,h))}else{m.h(0,k)
t.a.h(0,i)
t.a.h(0,h)
C.a.h(u,F.cZ(k,i,h))
t.a.h(0,k)
t.a.h(0,h)
t.a.h(0,l)
C.a.h(u,F.cZ(k,h,l))}o=!o}q=!q}return u},
gk:function(a){return this.b.length},
aw:function(){var u,t,s,r
for(u=this.b,t=u.length,s=!0,r=0;r<u.length;u.length===t||(0,H.B)(u),++r)if(!u[r].bB())s=!1
return s},
bA:function(){var u,t,s,r
for(u=this.b,t=u.length,s=!0,r=0;r<u.length;u.length===t||(0,H.B)(u),++r)if(!u[r].bz())s=!1
return s},
i:function(a){return this.I()},
q:function(a){var u,t,s,r
u=H.c([],[P.e])
for(t=this.b,s=t.length,r=0;r<t.length;t.length===s||(0,H.B)(t),++r)C.a.h(u,t[r].q(a))
return C.a.l(u,"\n")},
I:function(){return this.q("")},
se3:function(a){this.b=H.o(a,"$ib",[F.Z],"$ab")}}
F.ho.prototype={
gk:function(a){return this.b.length},
i:function(a){return this.I()},
q:function(a){var u,t,s,r
u=H.c([],[P.e])
t=this.b.length
for(s=0;s<t;++s){r=this.b
if(s>=r.length)return H.k(r,s)
C.a.h(u,r[s].q(a+(""+s+". ")))}return C.a.l(u,"\n")},
I:function(){return this.q("")},
see:function(a){this.b=H.o(a,"$ib",[F.aW],"$ab")}}
F.hp.prototype={
gk:function(a){return this.b.length},
i:function(a){return this.I()},
q:function(a){var u,t,s,r
u=H.c([],[P.e])
for(t=this.b,s=t.length,r=0;r<t.length;t.length===s||(0,H.B)(t),++r)C.a.h(u,t[r].q(a))
return C.a.l(u,"\n")},
I:function(){return this.q("")},
sbs:function(a){this.b=H.o(a,"$ib",[F.bi],"$ab")}}
F.ax.prototype={
bD:function(a){var u,t,s,r,q,p,o
u=this.f
t=this.r
s=this.x
r=this.y
q=this.z
p=this.Q
o=this.ch
return F.jE(this.cx,s,p,u,t,r,q,a,o)},
fQ:function(){return this.bD(null)},
shJ:function(a){var u
if(!J.W(this.z,a)){this.z=a
u=this.a
if(u!=null)u.X()}},
hf:function(a){var u,t
if(a.n(0,$.b4())){u=this.f
t=[P.x]
if(u==null)return H.c([0,0,0],t)
else return H.c([u.a,u.b,u.c],t)}else if(a.n(0,$.b3())){u=this.r
t=[P.x]
if(u==null)return H.c([0,1,0],t)
else return H.c([u.a,u.b,u.c],t)}else if(a.n(0,$.b2())){u=this.x
t=[P.x]
if(u==null)return H.c([0,0,1],t)
else return H.c([u.a,u.b,u.c],t)}else if(a.n(0,$.b5())){u=this.y
t=[P.x]
if(u==null)return H.c([0,0],t)
else return H.c([u.a,u.b],t)}else if(a.n(0,$.b6())){u=this.z
t=[P.x]
if(u==null)return H.c([0,0,0],t)
else return H.c([u.a,u.b,u.c],t)}else if(a.n(0,$.cI())){u=this.Q
t=[P.x]
if(u==null)return H.c([1,1,1],t)
else return H.c([u.a,u.b,u.c],t)}else if(a.n(0,$.cJ())){u=this.Q
t=[P.x]
if(u==null)return H.c([1,1,1,1],t)
else return H.c([u.a,u.b,u.c,u.d],t)}else if(a.n(0,$.bS()))return H.c([this.ch],[P.x])
else if(a.n(0,$.bR())){u=this.cx
t=[P.x]
if(u==null)return H.c([-1,-1,-1,-1],t)
else return H.c([u.a,u.b,u.c,u.d],t)}else return H.c([],[P.x])},
bB:function(){var u,t
u={}
if(this.r!=null)return!0
t=this.a
if(t!=null){t=t.e
if(t!=null)++t.d}u.a=V.dP()
this.d.L(0,new F.ij(u))
u=u.a
this.r=u.w(0,Math.sqrt(u.D(u)))
u=this.a
if(u!=null){u.X()
u=this.a.e
if(u!=null)u.aj(0)}return!0},
bz:function(){var u,t
u={}
if(this.x!=null)return!0
t=this.a
if(t!=null){t=t.e
if(t!=null)++t.d}u.a=V.dP()
this.d.L(0,new F.ii(u))
u=u.a
this.x=u.w(0,Math.sqrt(u.D(u)))
u=this.a
if(u!=null){u.X()
u=this.a.e
if(u!=null)u.aj(0)}return!0},
n:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.I()},
q:function(a){var u,t,s
u=H.c([],[P.e])
C.a.h(u,C.c.a1(J.ag(this.e),0))
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
C.a.h(u,V.T(this.ch,3,0))
t=this.cx
if(t!=null)C.a.h(u,t.i(0))
else C.a.h(u,"-")
s=C.a.l(u,", ")
return a+"{"+s+"}"},
I:function(){return this.q("")}}
F.ij.prototype={
$1:function(a){var u,t
H.l(a,"$iZ")
u=a==null?null:a.d
if(u!=null){t=this.a
t.a=t.a.C(0,u)}},
$S:5}
F.ii.prototype={
$1:function(a){var u,t
H.l(a,"$iZ")
u=a==null?null:a.e
if(u!=null){t=this.a
t.a=t.a.C(0,u)}},
$S:5}
F.ib.prototype={
T:function(){},
h:function(a,b){var u,t
u=b.a
if(u!=null){if(u===this.a)return!1
throw H.f(P.X("May not add a vertex already attached to another shape to this shape."))}u=this.c
b.e=u.length
t=this.a
b.a=t
C.a.h(u,b)
t.X()
return!0},
gk:function(a){return this.c.length},
aw:function(){var u,t,s
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.B)(u),++s)u[s].bB()
return!0},
bA:function(){var u,t,s
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.B)(u),++s)u[s].bz()
return!0},
fJ:function(){var u,t,s,r,q,p,o,n
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.B)(u),++s){r=u[s]
if(r.z==null){q=r.r
p=q.a
o=q.b
n=q.c
n=q.w(0,Math.sqrt(p*p+o*o+n*n))
if(!J.W(r.z,n)){r.z=n
q=r.a
if(q!=null){q=q.e
if(q!=null)q.B(null)}}}}return!0},
i:function(a){return this.I()},
q:function(a){var u,t,s,r
this.T()
u=H.c([],[P.e])
for(t=this.c,s=t.length,r=0;r<t.length;t.length===s||(0,H.B)(t),++r)C.a.h(u,t[r].q(a))
return C.a.l(u,"\n")},
I:function(){return this.q("")},
sfz:function(a){this.c=H.o(a,"$ib",[F.ax],"$ab")}}
F.ic.prototype={
gk:function(a){return this.b.length+this.c.length+this.d.length},
L:function(a,b){H.j(b,{func:1,ret:-1,args:[F.Z]})
C.a.L(this.b,b)
C.a.L(this.c,new F.id(this,b))
C.a.L(this.d,new F.ie(this,b))},
i:function(a){return this.I()},
q:function(a){var u,t,s,r
u=H.c([],[P.e])
for(t=this.b,s=t.length,r=0;r<t.length;t.length===s||(0,H.B)(t),++r)C.a.h(u,t[r].q(a))
for(t=this.c,s=t.length,r=0;r<t.length;t.length===s||(0,H.B)(t),++r)C.a.h(u,t[r].q(a))
for(t=this.d,s=t.length,r=0;r<t.length;t.length===s||(0,H.B)(t),++r)C.a.h(u,t[r].q(a))
return C.a.l(u,"\n")},
I:function(){return this.q("")},
se4:function(a){this.b=H.o(a,"$ib",[F.Z],"$ab")},
se5:function(a){this.c=H.o(a,"$ib",[F.Z],"$ab")},
se6:function(a){this.d=H.o(a,"$ib",[F.Z],"$ab")}}
F.id.prototype={
$1:function(a){H.l(a,"$iZ")
if(!J.W(a.a,this.a))this.b.$1(a)},
$S:5}
F.ie.prototype={
$1:function(a){var u
H.l(a,"$iZ")
u=this.a
if(!J.W(a.a,u)&&!J.W(a.b,u))this.b.$1(a)},
$S:5}
F.ig.prototype={
gk:function(a){return this.b.length+this.c.length},
i:function(a){return this.I()},
q:function(a){var u,t,s,r
u=H.c([],[P.e])
for(t=this.b,s=t.length,r=0;r<t.length;t.length===s||(0,H.B)(t),++r)C.a.h(u,t[r].q(a))
for(t=this.c,s=t.length,r=0;r<t.length;t.length===s||(0,H.B)(t),++r)C.a.h(u,t[r].q(a))
return C.a.l(u,"\n")},
I:function(){return this.q("")},
sef:function(a){this.b=H.o(a,"$ib",[F.aW],"$ab")},
seg:function(a){this.c=H.o(a,"$ib",[F.aW],"$ab")}}
F.ih.prototype={
gk:function(a){return this.b.length},
i:function(a){return this.I()},
q:function(a){var u,t,s,r
u=H.c([],[P.e])
for(t=this.b,s=t.length,r=0;r<t.length;t.length===s||(0,H.B)(t),++r)C.a.h(u,t[r].q(a))
return C.a.l(u,"\n")},
I:function(){return this.q("")},
sbs:function(a){this.b=H.o(a,"$ib",[F.bi],"$ab")}}
O.dl.prototype={
gp:function(){var u=this.r
if(u==null){u=D.O()
this.r=u}return u},
b8:function(a){var u
H.l(a,"$iv")
u=this.r
if(u!=null)u.B(a)},
c0:function(){return this.b8(null)},
cp:function(a){},
cq:function(a){var u,t
u=this.f
if(u!=a){if(u!=null)u.gp().S(0,this.gc_())
t=this.f
this.f=a
if(a!=null)a.gp().h(0,this.gc_())
u=new D.L("bumpyTextureCube",t,this.f,this,[T.dA])
u.b=!0
this.b8(u)}},
c5:function(a,b){H.o(a,"$ib",[T.cl],"$ab")
if(b!=null)if(!C.a.R(a,b)){b.a=a.length
C.a.h(a,b)}},
hA:function(a,b){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g
u=this.a
if(u==null){t=A.kj(this.d)
u=t.e
s=a.fr.m(0,u)
if(s==null){r=a.a
s=new A.h0(r,u)
s.dF(r,u)
s.z=t
q=t.c
p=q?"uniform mat4 viewObjMat;\nuniform mat4 projViewObjMat;\nuniform mat3 txt2DMat;\n":"uniform mat4 viewObjMat;\nuniform mat4 projViewObjMat;\n"
o=t.d
p=(o?p+"uniform mat4 txtCubeMat;\n":p)+"\nattribute vec3 posAttr;\nattribute vec3 normAttr;\n"
n=t.b
if(n)p+="attribute vec3 binmAttr;\n"
if(q)p+="attribute vec2 txt2DAttr;\n"
p=(o?p+"attribute vec3 txtCubeAttr;\n":p)+"\nvarying vec3 normalVec;\n"
if(n)p+="varying vec3 binormalVec;\n"
if(q)p+="varying vec2 txt2D;\n"
p=(o?p+"varying vec3 txtCube;\n":p)+"\nvoid main()\n{\n   normalVec = normalize(viewObjMat*vec4(normAttr, 0.0)).xyz;\n"
if(n)p+="   binormalVec = normalize(viewObjMat*vec4(binmAttr, 0.0)).xyz;\n"
if(q)p+="   txt2D = (txt2DMat*vec3(txt2DAttr, 1.0)).xy;\n"
p=(o?p+"   txtCube = (txtCubeMat*vec4(txtCubeAttr, 1.0)).xyz;\n":p)+"   gl_Position = projViewObjMat*vec4(posAttr, 1.0);\n}\n"
m=p.charCodeAt(0)==0?p:p
p=n?"precision mediump float;\n\nvarying vec3 normalVec;\nvarying vec3 binormalVec;\n":"precision mediump float;\n\nvarying vec3 normalVec;\n"
if(q)p+="varying vec2 txt2D;\n"
p=(o?p+"varying vec3 txtCube;\n":p)+"\n"
n=t.a
switch(n){case C.i:break
case C.p:break
case C.m:p+="uniform sampler2D bumpTxt;\nuniform int nullBumpTxt;\n"
break
case C.j:p+="uniform samplerCube bumpTxt;\nuniform int nullBumpTxt;\n"
break}p+="\nvec3 normal()\n{\n"
if(n===C.i||n===C.p)p+="   return normalize(normalVec);\n"
else{p+="   if(nullBumpTxt > 0) return normalVec;\n"
p=(n===C.m?p+"   vec3 color = texture2D(bumpTxt, txt2D).rgb;\n":p+"   vec3 color = textureCube(bumpTxt, txtCube).rgb;\n")+"   vec3 n = normalize(normalVec);\n   vec3 b = normalize(binormalVec);\n   vec3 c = normalize(cross(b, n));\n   b = cross(n, c);\n   mat3 mat = mat3( b.x,  b.y,  b.z,\n                   -c.x, -c.y, -c.z,\n                    n.x,  n.y,  n.z);\n   return mat * normalize(2.0*color - 1.0);\n"}p+="}\n\nvoid main()\n{\n   vec3 norm = normal();\n   norm = -norm*0.5 + 0.5;\n   gl_FragColor = vec4(norm.x, 1.0-norm.y, norm.z, 1.0);\n}\n"
s.c=m
s.d=p.charCodeAt(0)==0?p:p
s.e=s.ce(m,35633)
s.f=s.ce(s.d,35632)
p=r.createProgram()
s.r=p
C.b.cA(r,p,s.e)
C.b.cA(r,s.r,s.f)
C.b.he(r,s.r)
if(!H.jM(C.b.b2(r,s.r,35714))){l=C.b.dg(r,s.r)
C.b.fW(r,s.r)
H.a0(P.X("Failed to link shader: "+H.i(l)))}s.fe()
s.fg()
s.Q=s.x.m(0,"posAttr")
s.cx=s.x.m(0,"normAttr")
s.ch=s.x.m(0,"binmAttr")
s.cy=s.x.m(0,"txt2DAttr")
s.db=s.x.m(0,"txtCubeAttr")
s.dx=H.a7(s.y.a9(0,"viewObjMat"),"$ibH")
s.dy=H.a7(s.y.a9(0,"projViewObjMat"),"$ibH")
if(q)s.fr=H.a7(s.y.a9(0,"txt2DMat"),"$idG")
if(o)s.fx=H.a7(s.y.a9(0,"txtCubeMat"),"$ibH")
switch(n){case C.i:break
case C.p:break
case C.m:s.fy=H.a7(s.y.a9(0,"bumpTxt"),"$idH")
s.id=H.a7(s.y.a9(0,"nullBumpTxt"),"$ico")
break
case C.j:s.go=H.a7(s.y.a9(0,"bumpTxt"),"$idI")
s.id=H.a7(s.y.a9(0,"nullBumpTxt"),"$ico")
break}if(u.length===0)H.a0(P.X("May not cache a shader with no name."))
if(a.fr.cG(0,u))H.a0(P.X('Shader cache already contains a shader by the name "'+u+'".'))
a.fr.P(0,u,s)}this.a=s
b.e=null
u=s}t=u.z
k=t.f
u=b.e
if(!(u instanceof Z.cQ)){b.e=null
u=null}if(u==null||!u.d.n(0,k)){b.d.aw()
u=t.b
if(u){q=b.d
p=q.e
if(p!=null)++p.d
q.d.bA()
q.a.bA()
q=q.e
if(q!=null)q.aj(0)}q=t.d
if(q){p=b.d
o=p.e
if(o!=null)++o.d
p.a.fJ()
p=p.e
if(p!=null)p.aj(0)}j=b.d.fI(new Z.im(a.a),k)
j.aJ($.b4()).e=this.a.Q.c
j.aJ($.b3()).e=this.a.cx.c
if(u)j.aJ($.b2()).e=this.a.ch.c
if(t.c)j.aJ($.b5()).e=this.a.cy.c
if(q)j.aJ($.b6()).e=this.a.db.c
b.e=j}i=H.c([],[T.cl])
u=this.a
q=a.a
C.b.d7(q,u.r)
u.x.h4()
u=this.a
p=a.cx
if(p==null){p=a.db
p=p.gah(p)
o=a.dx
o=p.t(0,o.gah(o))
a.cx=o
p=o}u=u.dx
u.toString
u.b4(p.aN(0,!0))
p=this.a
u=a.ch
if(u==null){u=a.z
if(u==null){u=a.cy
u=u.gah(u)
o=a.db
o=u.t(0,o.gah(o))
a.z=o
u=o}o=a.dx
o=u.t(0,o.gah(o))
a.ch=o
u=o}p=p.dy
p.toString
p.b4(u.aN(0,!0))
if(t.c){u=this.a
p=this.b
u=u.fr
u.toString
h=new Float32Array(H.j7(H.o(p.aN(0,!0),"$ib",[P.x],"$ab")))
C.b.hQ(u.a,u.d,!1,h)}if(t.d){u=this.a
p=this.c
u=u.fx
u.toString
u.b4(p.aN(0,!0))}switch(t.a){case C.i:break
case C.p:break
case C.m:this.c5(i,this.e)
u=this.a.id
C.b.aO(u.a,u.d,1)
break
case C.j:this.c5(i,this.f)
u=this.a
p=this.f
o=u.go
u=u.id
n=p!=null
if(!n||p.d<6)C.b.aO(u.a,u.d,1)
else{o.toString
if(!n||p.d<6)C.b.aO(o.a,o.d,0)
else{p=p.a
C.b.aO(o.a,o.d,p)}C.b.aO(u.a,u.d,0)}break}for(g=0;g<i.length;++g){u=i[g]
if(!u.c&&u.d>=6){u.c=!0
C.b.cu(q,33984+u.a)
C.b.av(q,34067,u.b)}}u=b.e
u.bx(a)
u.ay(a)
u.hP(a)
for(g=0;g<i.length;++g){u=i[g]
if(u.c){u.c=!1
C.b.cu(q,33984+u.a)
C.b.av(q,34067,null)}}u=this.a
u.toString
C.b.d7(q,null)
u.x.h0()},
i:function(a){var u=this.a
if(u!=null)return u.b
else return A.kj(this.d).e}}
O.bG.prototype={}
T.cl.prototype={}
T.dA.prototype={
gp:function(){var u=this.e
if(u==null){u=D.O()
this.e=u}return u}}
T.hJ.prototype={
aq:function(a,b,c,d,e,f){var u,t
u=document.createElement("img")
u.src=c;++this.d
t=W.m
W.a_(u,"load",H.j(new T.hK(this,u,!1,b,!1,d,a),{func:1,ret:-1,args:[t]}),!1,t)},
fa:function(a,b,c){var u,t,s,r
b=V.jV(b,2)
u=V.jV(a.width,2)
t=V.jV(a.height,2)
u=Math.min(u,b)
t=Math.min(t,b)
if(a.width===u&&a.height===t)return a
else{s=W.js(null,null)
s.width=u
s.height=t
r=H.l(C.o.de(s,"2d"),"$ibu")
r.imageSmoothingEnabled=!1;(r&&C.x).h2(r,a,0,0,s.width,s.height)
return P.mo(C.x.ea(r,0,0,s.width,s.height))}}}
T.hK.prototype={
$1:function(a){var u,t,s
u=this.a
t=u.fa(this.b,u.c,this.c)
s=u.a
C.b.av(s,34067,this.d)
C.b.hx(s,37440,this.e?1:0)
C.b.hH(s,this.f,0,6408,6408,5121,t)
C.b.av(s,34067,null)
s=this.r
if(++s.d>=6){s=s.e
if(s!=null)s.h3()}++u.e},
$S:24}
V.aS.prototype={
ag:function(a,b){return!0},
i:function(a){return"all"},
$iah:1}
V.ah.prototype={}
V.de.prototype={
ag:function(a,b){var u,t,s
for(u=this.a,t=u.length,s=0;s<u.length;u.length===t||(0,H.B)(u),++s)if(u[s].ag(0,b))return!0
return!1},
i:function(a){var u,t,s,r,q
for(u=this.a,t=u.length,s="",r=0;r<u.length;u.length===t||(0,H.B)(u),++r){q=u[r]
if(s.length!==0)s+=", "
s+=q.i(0)}return s},
sU:function(a){this.a=H.o(a,"$ib",[V.ah],"$ab")},
$iah:1}
V.ac.prototype={
ag:function(a,b){return!this.dA(0,b)},
i:function(a){return"!["+this.bV(0)+"]"}}
V.hc.prototype={
ag:function(a,b){return this.a<=b&&this.b>=b},
i:function(a){var u,t
u=H.jA(this.a)
t=H.jA(this.b)
return u+".."+t},
$iah:1}
V.hm.prototype={
dE:function(a){var u,t
if(a.a.length<=0)throw H.f(P.X("May not create a SetMatcher with zero characters."))
u=new H.aF([P.A,P.I])
for(t=new H.c7(a,a.gk(a),0,[H.af(a,"r",0)]);t.v();)u.P(0,t.d,!0)
this.sfd(u)},
ag:function(a,b){return this.a.cG(0,b)},
i:function(a){var u=this.a
return P.jB(new H.da(u,[H.u(u,0)]),0,null)},
sfd:function(a){this.a=H.o(a,"$iG",[P.A,P.I],"$aG")},
$iah:1}
V.ch.prototype={
l:function(a,b){var u,t,s,r
for(u=this.c,t=u.length,s=0;s<t;++s){r=u[s]
if(r.b.b===b)return r}r=new V.cn(this.a.j(0,b))
r.sU(H.c([],[V.ah]))
r.c=!1
C.a.h(this.c,r)
return r},
h5:function(a){var u,t,s,r
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.B)(u),++s){r=u[s]
if(r.ag(0,a))return r}return},
i:function(a){return this.b},
sfv:function(a){this.c=H.o(a,"$ib",[V.cn],"$ab")}}
V.dC.prototype={
i:function(a){var u,t
u=H.jX(this.b,"\n","\\n")
t=H.jX(u,"\t","\\t")
return this.a+":"+this.c+':"'+t+'"'}}
V.cm.prototype={
ai:function(a,b,c){var u,t,s
H.o(c,"$ib",[P.e],"$ab")
for(u=c.length,t=0;t<c.length;c.length===u||(0,H.B)(c),++t){s=c[t]
this.c.P(0,s,b)}},
i:function(a){return this.b},
sf8:function(a){var u=P.e
this.c=H.o(a,"$iG",[u,u],"$aG")}}
V.hN.prototype={
j:function(a,b){var u=this.a.m(0,b)
if(u==null){u=new V.ch(this,b)
u.sfv(H.c([],[V.cn]))
u.d=null
this.a.P(0,b,u)}return u},
J:function(a){var u,t
u=this.b.m(0,a)
if(u==null){u=new V.cm(this,a)
t=P.e
u.sf8(new H.aF([t,t]))
this.b.P(0,a,u)}return u},
d5:function(a){var u,t,s,r,q,p,o,n,m,l,k,j
u=H.c([],[V.dC])
t=this.c
s=[P.A]
r=H.c([],s)
for(q=a.length,p=null,o=0;!0;){if(o>=q){if(p!=null)C.a.h(u,p)
return u}n=C.c.ao(a,o)
m=t.h5(n)
if(m==null){if(p==null){C.a.h(r,n)
l=P.jB(r,0,null)
throw H.f(P.X("Untokenizable string [state: "+t.b+", index "+o+']: "'+l+'"'))}C.a.h(u,p)
o=p.c+1
r=H.c([],s)
t=this.c
p=null}else{if(!m.c)C.a.h(r,n)
t=m.b
if(t.d!=null){l=P.jB(r,0,null)
k=t.d
j=k.c.m(0,l)
p=new V.dC(j==null?k.b:j,l,o)}++o}}},
sfj:function(a){this.a=H.o(a,"$iG",[P.e,V.ch],"$aG")},
sfn:function(a){this.b=H.o(a,"$iG",[P.e,V.cm],"$aG")}}
V.cn.prototype={
i:function(a){return this.b.b+": "+this.bV(0)}}
X.cS.prototype={$iki:1}
X.fp.prototype={
gp:function(){var u=this.x
if(u==null){u=D.O()
this.x=u}return u}}
X.dn.prototype={
gp:function(){var u=this.f
if(u==null){u=D.O()
this.f=u}return u},
an:function(a){var u
H.l(a,"$iv")
u=this.f
if(u!=null)u.B(a)},
dP:function(){return this.an(null)},
saK:function(a){var u,t
if(!J.W(this.b,a)){u=this.b
if(u!=null)u.gp().S(0,this.gc1())
t=this.b
this.b=a
if(a!=null)a.gp().h(0,this.gc1())
u=new D.L("mover",t,this.b,this,[U.a3])
u.b=!0
this.an(u)}},
$iki:1,
$icS:1}
X.dy.prototype={}
V.b9.prototype={
aQ:function(a){this.b=new P.ft(C.L)
this.c=null
this.sbh(H.c([],[[P.b,W.am]]))},
G:function(a,b){var u,t,s,r,q,p,o,n,m
u=this.d
if(u.length===0)C.a.h(u,H.c([],[W.am]))
t=a.split("\n")
for(u=t.length,s=[W.am],r=!0,q=0;q<u;++q){p=t[q]
if(r)r=!1
else C.a.h(this.d,H.c([],s))
o=document.createElement("div")
o.className="codePart"
H.E(p)
n=this.b.dY(p,0,p.length)
m=n==null?p:n
C.e.dq(o,H.jX(m," ","&nbsp;"))
m=o.style
m.color=b
C.a.h(C.a.gaX(this.d),o)}},
cV:function(a,b){var u,t,s,r
H.o(b,"$ib",[P.e],"$ab")
this.sbh(H.c([],[[P.b,W.am]]))
u=C.a.l(b,"\n")
t=this.c
if(t==null){t=this.aW()
this.c=t}for(t=t.d5(u),s=t.length,r=0;r<t.length;t.length===s||(0,H.B)(t),++r)this.aZ(t[r])},
sbh:function(a){this.d=H.o(a,"$ib",[[P.b,W.am]],"$ab")}}
V.jm.prototype={
$1:function(a){H.l(a,"$iaN")
P.jW(C.d.d4(this.a.gh9(),2)+" fps")},
$S:37}
V.f4.prototype={
aZ:function(a){switch(a.a){case"Class":this.G(a.b,"#551")
break
case"Comment":this.G(a.b,"#777")
break
case"Id":this.G(a.b,"#111")
break
case"Num":this.G(a.b,"#191")
break
case"Reserved":this.G(a.b,"#119")
break
case"String":this.G(a.b,"#171")
break
case"Symbol":this.G(a.b,"#616")
break
case"Type":this.G(a.b,"#B11")
break
case"Whitespace":this.G(a.b,"#111")
break}},
aW:function(){var u,t,s,r
u=V.hO()
u.c=u.j(0,"Start")
t=u.j(0,"Start").l(0,"Id")
s=V.q(new H.p("_"))
C.a.h(t.a,s)
s=V.Q("a","z")
C.a.h(t.a,s)
s=V.Q("A","Z")
C.a.h(t.a,s)
s=u.j(0,"Id").l(0,"Id")
t=V.q(new H.p("_"))
C.a.h(s.a,t)
t=V.Q("0","9")
C.a.h(s.a,t)
t=V.Q("a","z")
C.a.h(s.a,t)
t=V.Q("A","Z")
C.a.h(s.a,t)
t=u.j(0,"Start").l(0,"Int")
s=V.Q("0","9")
C.a.h(t.a,s)
s=u.j(0,"Int").l(0,"Int")
t=V.Q("0","9")
C.a.h(s.a,t)
t=u.j(0,"Int").l(0,"FloatDot")
s=V.q(new H.p("."))
C.a.h(t.a,s)
s=u.j(0,"FloatDot").l(0,"Float")
t=V.Q("0","9")
C.a.h(s.a,t)
t=u.j(0,"Float").l(0,"Float")
s=V.Q("0","9")
C.a.h(t.a,s)
s=u.j(0,"Start").l(0,"Sym")
t=V.q(new H.p("<>{}()\\-+*%!&|=.,?:;"))
C.a.h(s.a,t)
t=u.j(0,"Sym").l(0,"Sym")
s=V.q(new H.p("<>{}()\\-+*%!&|=.,?:;"))
C.a.h(t.a,s)
s=u.j(0,"Start").l(0,"OpenDoubleStr")
t=V.q(new H.p('"'))
C.a.h(s.a,t)
t=u.j(0,"OpenDoubleStr").l(0,"CloseDoubleStr")
s=V.q(new H.p('"'))
C.a.h(t.a,s)
s=u.j(0,"OpenDoubleStr").l(0,"EscDoubleStr")
t=V.q(new H.p("\\"))
C.a.h(s.a,t)
t=u.j(0,"EscDoubleStr").l(0,"OpenDoubleStr")
s=V.q(new H.p('"'))
C.a.h(t.a,s)
C.a.h(u.j(0,"OpenDoubleStr").l(0,"OpenDoubleStr").a,new V.aS())
s=u.j(0,"Start").l(0,"OpenSingleStr")
t=V.q(new H.p("'"))
C.a.h(s.a,t)
t=u.j(0,"OpenSingleStr").l(0,"CloseSingleStr")
s=V.q(new H.p("'"))
C.a.h(t.a,s)
s=u.j(0,"OpenSingleStr").l(0,"EscSingleStr")
t=V.q(new H.p("\\"))
C.a.h(s.a,t)
t=u.j(0,"EscSingleStr").l(0,"OpenSingleStr")
s=V.q(new H.p("'"))
C.a.h(t.a,s)
C.a.h(u.j(0,"OpenSingleStr").l(0,"OpenSingleStr").a,new V.aS())
s=u.j(0,"Start").l(0,"Slash")
t=V.q(new H.p("/"))
C.a.h(s.a,t)
t=u.j(0,"Slash").l(0,"Comment")
s=V.q(new H.p("/"))
C.a.h(t.a,s)
s=u.j(0,"Comment").l(0,"EndComment")
t=V.q(new H.p("\n"))
C.a.h(s.a,t)
t=u.j(0,"Comment").l(0,"Comment")
s=new V.ac()
r=[V.ah]
s.sU(H.c([],r))
C.a.h(t.a,s)
t=V.q(new H.p("\n"))
C.a.h(s.a,t)
t=u.j(0,"Slash").l(0,"MLComment")
s=V.q(new H.p("*"))
C.a.h(t.a,s)
s=u.j(0,"MLComment").l(0,"MLCStar")
t=V.q(new H.p("*"))
C.a.h(s.a,t)
t=u.j(0,"MLCStar").l(0,"MLComment")
s=new V.ac()
s.sU(H.c([],r))
C.a.h(t.a,s)
t=V.q(new H.p("*"))
C.a.h(s.a,t)
t=u.j(0,"MLCStar").l(0,"EndComment")
s=V.q(new H.p("/"))
C.a.h(t.a,s)
s=u.j(0,"Start").l(0,"Whitespace")
t=V.q(new H.p(" \n\t"))
C.a.h(s.a,t)
t=u.j(0,"Whitespace").l(0,"Whitespace")
s=V.q(new H.p(" \n\t"))
C.a.h(t.a,s)
s=u.j(0,"Int")
s.d=s.a.J("Num")
s=u.j(0,"Float")
s.d=s.a.J("Num")
s=u.j(0,"Sym")
s.d=s.a.J("Symbol")
s=u.j(0,"CloseDoubleStr")
s.d=s.a.J("String")
s=u.j(0,"CloseSingleStr")
s.d=s.a.J("String")
s=u.j(0,"EndComment")
s.d=s.a.J("Comment")
s=u.j(0,"Whitespace")
s.d=s.a.J("Whitespace")
s=u.j(0,"Id")
t=s.a.J("Id")
s.d=t
s=[P.e]
t.ai(0,"Class",H.c(["Constant","Depth","Entity","EntityPass","Math","Matrix4","Movers","Rotater","Scenes","Shapes","Techniques","ThreeDart"],s))
t.ai(0,"Type",H.c(["bool","double","dynamic","false","int","List","Map","null","num","Object","String","this","true","var","void"],s))
t.ai(0,"Reserved",H.c(["abstract","as","assert","async","await","break","case","catch","class","continue","const","default","deferred","do","else","enum","export","extends","external","factory","final","finally","for","get","if","implements","import","in","is","library","new","operator","part","rethrow","return","set","static","super","switch","sync","throw","try","typedef","with","while","yield"],s))
return u}}
V.fq.prototype={
aZ:function(a){switch(a.a){case"Builtin":this.G(a.b,"#411")
break
case"Comment":this.G(a.b,"#777")
break
case"Id":this.G(a.b,"#111")
break
case"Num":this.G(a.b,"#191")
break
case"Preprocess":this.G(a.b,"#737")
break
case"Reserved":this.G(a.b,"#119")
break
case"Symbol":this.G(a.b,"#611")
break
case"Type":this.G(a.b,"#171")
break
case"Whitespace":this.G(a.b,"#111")
break}},
aW:function(){var u,t,s,r
u=V.hO()
u.c=u.j(0,"Start")
t=u.j(0,"Start").l(0,"Id")
s=V.q(new H.p("_"))
C.a.h(t.a,s)
s=V.Q("a","z")
C.a.h(t.a,s)
s=V.Q("A","Z")
C.a.h(t.a,s)
s=u.j(0,"Id").l(0,"Id")
t=V.q(new H.p("_"))
C.a.h(s.a,t)
t=V.Q("0","9")
C.a.h(s.a,t)
t=V.Q("a","z")
C.a.h(s.a,t)
t=V.Q("A","Z")
C.a.h(s.a,t)
t=u.j(0,"Start").l(0,"Int")
s=V.Q("0","9")
C.a.h(t.a,s)
s=u.j(0,"Int").l(0,"Int")
t=V.Q("0","9")
C.a.h(s.a,t)
t=u.j(0,"Int").l(0,"FloatDot")
s=V.q(new H.p("."))
C.a.h(t.a,s)
s=u.j(0,"FloatDot").l(0,"Float")
t=V.Q("0","9")
C.a.h(s.a,t)
t=u.j(0,"Float").l(0,"Float")
s=V.Q("0","9")
C.a.h(t.a,s)
s=u.j(0,"Start").l(0,"Sym")
t=V.q(new H.p("<>{}()[]\\-+*%!&|=.,?:;"))
C.a.h(s.a,t)
t=u.j(0,"Sym").l(0,"Sym")
s=V.q(new H.p("<>{}()[]\\-+*%!&|=.,?:;"))
C.a.h(t.a,s)
s=u.j(0,"Start").l(0,"Slash")
t=V.q(new H.p("/"))
C.a.h(s.a,t)
t=u.j(0,"Slash").l(0,"Comment")
s=V.q(new H.p("/"))
C.a.h(t.a,s)
C.a.h(u.j(0,"Slash").l(0,"Sym").a,new V.aS())
s=u.j(0,"Comment").l(0,"EndComment")
t=V.q(new H.p("\n"))
C.a.h(s.a,t)
t=u.j(0,"Comment").l(0,"Comment")
s=new V.ac()
r=[V.ah]
s.sU(H.c([],r))
C.a.h(t.a,s)
t=V.q(new H.p("\n"))
C.a.h(s.a,t)
t=u.j(0,"Start").l(0,"Preprocess")
s=V.q(new H.p("#"))
C.a.h(t.a,s)
s=u.j(0,"Preprocess").l(0,"Preprocess")
t=new V.ac()
t.sU(H.c([],r))
C.a.h(s.a,t)
s=V.q(new H.p("\n"))
C.a.h(t.a,s)
s=u.j(0,"Preprocess").l(0,"EndPreprocess")
t=V.q(new H.p("\n"))
C.a.h(s.a,t)
t=u.j(0,"Start").l(0,"Whitespace")
s=V.q(new H.p(" \n\t"))
C.a.h(t.a,s)
s=u.j(0,"Whitespace").l(0,"Whitespace")
t=V.q(new H.p(" \n\t"))
C.a.h(s.a,t)
t=u.j(0,"Int")
t.d=t.a.J("Num")
t=u.j(0,"Float")
t.d=t.a.J("Num")
t=u.j(0,"Sym")
t.d=t.a.J("Symbol")
t=u.j(0,"EndComment")
t.d=t.a.J("Comment")
t=u.j(0,"EndPreprocess")
t.d=t.a.J("Preprocess")
t=u.j(0,"Whitespace")
t.d=t.a.J("Whitespace")
t=u.j(0,"Id")
s=t.a.J("Id")
t.d=s
t=[P.e]
s.ai(0,"Type",H.c(["float","double","int","void","bool","true","false","mat2","mat3","mat4","dmat2","dmat3","dmat4","mat2x2","mat2x3","mat2x4","dmat2x2","dmat2x3","dmat2x4","mat3x2","mat3x3","mat3x4","dmat3x2","dmat3x3","dmat3x4","mat4x2","mat4x3","mat4x4","dmat4x2","dmat4x3","dmat4x4","vec2","vec3","vec4","ivec2","ivec3","ivec4","bvec2","bvec3","bvec4","dvec2","dvec3","dvec4","uint","uvec2","uvec3","uvec4","sampler1D","sampler2D","sampler3D","samplerCube","sampler1DShadow","sampler2DShadow","samplerCubeShadow","sampler1DArray","sampler2DArray","sampler1DArrayShadow","sampler2DArrayShadow","isampler1D","isampler2D","isampler3D","isamplerCube","isampler1DArray","isampler2DArray","usampler1D","usampler2D","usampler3D","usamplerCube","usampler1DArray","usampler2DArray","sampler2DRect","sampler2DRectShadow","isampler2DRect","usampler2DRect","samplerBuffer","isamplerBuffer","usamplerBuffer","sampler2DMS","isampler2DMS","usampler2DMS","sampler2DMSArray","isampler2DMSArray","usampler2DMSArray","samplerCubeArray","samplerCubeArrayShadow","isamplerCubeArray","usamplerCubeArray"],t))
s.ai(0,"Reserved",H.c(["attribute","break","case","centroid","const","continue","default","discard","do","else","flat","for","highp","if","in","inout","invariant","layout","lowp","mediump","noperspective","out","patch","precision","return","sample","smooth","struct","subroutine","switch","uniform","varying","while"],t))
s.ai(0,"Builtin",H.c(["gl_FragColor","gl_Position"],t))
return u}}
V.fr.prototype={
aZ:function(a){switch(a.a){case"Attr":this.G(a.b,"#911")
this.G("=","#111")
break
case"Id":this.G(a.b,"#111")
break
case"Other":this.G(a.b,"#111")
break
case"Reserved":this.G(a.b,"#119")
break
case"String":this.G(a.b,"#171")
break
case"Symbol":this.G(a.b,"#616")
break}},
aW:function(){var u,t,s
u=V.hO()
u.c=u.j(0,"Start")
t=u.j(0,"Start").l(0,"Id")
s=V.q(new H.p("_"))
C.a.h(t.a,s)
s=V.Q("a","z")
C.a.h(t.a,s)
s=V.Q("A","Z")
C.a.h(t.a,s)
s=u.j(0,"Id").l(0,"Id")
t=V.q(new H.p("_"))
C.a.h(s.a,t)
t=V.Q("0","9")
C.a.h(s.a,t)
t=V.Q("a","z")
C.a.h(s.a,t)
t=V.Q("A","Z")
C.a.h(s.a,t)
t=u.j(0,"Id").l(0,"Attr")
s=V.q(new H.p("="))
C.a.h(t.a,s)
t.c=!0
t=u.j(0,"Start").l(0,"Sym")
s=V.q(new H.p("</\\-!>="))
C.a.h(t.a,s)
s=u.j(0,"Sym").l(0,"Sym")
t=V.q(new H.p("</\\-!>="))
C.a.h(s.a,t)
t=u.j(0,"Start").l(0,"OpenStr")
s=V.q(new H.p('"'))
C.a.h(t.a,s)
s=u.j(0,"OpenStr").l(0,"CloseStr")
t=V.q(new H.p('"'))
C.a.h(s.a,t)
t=u.j(0,"OpenStr").l(0,"EscStr")
s=V.q(new H.p("\\"))
C.a.h(t.a,s)
s=u.j(0,"EscStr").l(0,"OpenStr")
t=V.q(new H.p('"'))
C.a.h(s.a,t)
C.a.h(u.j(0,"OpenStr").l(0,"OpenStr").a,new V.aS())
C.a.h(u.j(0,"Start").l(0,"Other").a,new V.aS())
t=u.j(0,"Other").l(0,"Other")
s=new V.ac()
s.sU(H.c([],[V.ah]))
C.a.h(t.a,s)
t=V.q(new H.p('</\\-!>=_"'))
C.a.h(s.a,t)
t=V.Q("a","z")
C.a.h(s.a,t)
t=V.Q("A","Z")
C.a.h(s.a,t)
t=u.j(0,"Sym")
t.d=t.a.J("Symbol")
t=u.j(0,"CloseStr")
t.d=t.a.J("String")
t=u.j(0,"Id")
s=t.a.J("Id")
t.d=s
s.ai(0,"Reserved",H.c(["DOCTYPE","html","head","meta","link","title","body","script"],[P.e]))
s=u.j(0,"Attr")
s.d=s.a.J("Attr")
s=u.j(0,"Other")
s.d=s.a.J("Other")
return u}}
V.h7.prototype={
cV:function(a,b){H.o(b,"$ib",[P.e],"$ab")
this.sbh(H.c([],[[P.b,W.am]]))
this.G(C.a.l(b,"\n"),"#111")},
aZ:function(a){},
aW:function(){return}}
V.hq.prototype={
dG:function(a,b){var u,t,s,r,q,p,o
u=document
t=u.body
s=u.createElement("div")
s.className="scrollTop";(t&&C.l).u(t,s)
r=u.createElement("div")
r.className="scrollPage"
C.l.u(t,r)
q=u.createElement("div")
q.className="pageCenter"
C.e.u(r,q)
if(a.length!==0){u.title=a
p=u.createElement("div")
p.className="pageTitle"
p.textContent=a
C.e.u(q,p)}o=u.createElement("div")
this.a=o
C.e.u(q,o)
this.b=null
o=W.m
W.a_(u,"scroll",H.j(new V.hs(s),{func:1,ret:-1,args:[o]}),!1,o)},
cw:function(a){var u,t,s,r,q,p,o,n,m,l,k
H.o(a,"$ib",[P.e],"$ab")
this.ff()
u=document
t=u.createElement("div")
t.className="textPar"
for(s=this.b.d5(C.a.hd(a)),r=s.length,q=0;q<s.length;s.length===r||(0,H.B)(s),++q){p=s[q]
switch(p.a){case"Bold":o=u.createElement("div")
o.className="boldPar"
o.textContent=p.b
C.e.u(t,o)
break
case"Italic":o=u.createElement("div")
o.className="italicPar"
o.textContent=p.b
C.e.u(t,o)
break
case"Code":o=u.createElement("div")
o.className="codePar"
o.textContent=p.b
C.e.u(t,o)
break
case"Link":n=p.b
if(H.mJ(n,"|",0)){m=n.split("|")
l=u.createElement("a")
l.className="linkPar"
if(1>=m.length)return H.k(m,1)
l.href=H.E(m[1])
l.textContent=H.E(m[0])
C.e.u(t,l)}else{k=P.kL(C.B,n,C.w,!1)
l=u.createElement("a")
l.className="linkPar"
l.href="#"+k
l.textContent=n
C.e.u(t,l)}break
case"Other":o=u.createElement("div")
o.className="normalPar"
o.textContent=p.b
C.e.u(t,o)
break}}C.e.u(this.a,t)},
dd:function(a){var u,t,s,r
u=new V.f4("dart")
u.aQ("dart")
t=new V.fq("glsl")
t.aQ("glsl")
s=new V.fr("html")
s.aQ("html")
r=C.a.h6(H.c([u,t,s],[V.b9]),new V.ht(a))
if(r!=null)return r
u=new V.h7("plain")
u.aQ("plain")
return u},
cv:function(a4,a5,a6,a7){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3
H.o(a7,"$ib",[P.e],"$ab")
u=H.c([],[P.A])
for(t=!1,s=0;s<a7.length;++s){r=a7[s]
if(J.jR(r).b5(r,"+")){C.a.P(a7,s,C.c.b6(r,1))
C.a.h(u,1)
t=!0}else if(C.c.b5(r,"-")){C.a.P(a7,s,C.c.b6(r,1))
C.a.h(u,-1)
t=!0}else C.a.h(u,0)}q=this.dd(a5)
q.cV(0,a7)
p=document
o=p.createElement("div")
o.className="codeTableScroll"
n=p.createElement("table")
n.className="codeTable"
C.e.u(o,n)
C.e.u(this.a,o)
m=P.kL(C.B,a4,C.w,!1)
l=p.createElement("tr")
l.className="headerRow"
k=p.createElement("td")
k.className="headerCell"
k.colSpan=t?3:2
j=p.createElement("div")
j.className="tableHeader"
j.id=m
i=W.k2(null)
i.href="#"+m
i.textContent=a4
C.e.u(j,i)
C.u.u(k,j)
C.k.u(l,k)
C.n.u(n,l)
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
for(f=r.length,a0=0;a0<r.length;r.length===f||(0,H.B)(r),++a0)C.u.u(a,r[a0])
C.k.u(e,d)
C.k.u(e,c)
C.k.u(e,a)
C.n.u(n,e)}else for(f=q.d,a1=f.length,a2=a6,a0=0;a0<f.length;f.length===a1||(0,H.B)(f),++a0){r=f[a0]
e=p.createElement("tr")
e.className="codeTableRow"
d=p.createElement("td")
d.className="codeLineNums";++a2
d.textContent=""+a2
c=p.createElement("td")
c.className="codeLineText"
for(a3=C.a.gN(r);a3.v();)C.u.u(c,a3.gH(a3))
C.k.u(e,d)
C.k.u(e,c)
C.n.u(n,e)}},
ff:function(){var u,t,s,r
if(this.b!=null)return
u=V.hO()
u.c=u.j(0,"Start")
t=u.j(0,"Start").l(0,"Bold")
s=V.q(new H.p("*"))
C.a.h(t.a,s)
t.c=!0
t=u.j(0,"Bold").l(0,"Bold")
s=new V.ac()
r=[V.ah]
s.sU(H.c([],r))
C.a.h(t.a,s)
t=V.q(new H.p("*"))
C.a.h(s.a,t)
t=u.j(0,"Bold").l(0,"BoldEnd")
s=V.q(new H.p("*"))
C.a.h(t.a,s)
t.c=!0
t=u.j(0,"Start").l(0,"Italic")
s=V.q(new H.p("_"))
C.a.h(t.a,s)
t.c=!0
t=u.j(0,"Italic").l(0,"Italic")
s=new V.ac()
s.sU(H.c([],r))
C.a.h(t.a,s)
t=V.q(new H.p("_"))
C.a.h(s.a,t)
t=u.j(0,"Italic").l(0,"ItalicEnd")
s=V.q(new H.p("_"))
C.a.h(t.a,s)
t.c=!0
t=u.j(0,"Start").l(0,"Code")
s=V.q(new H.p("`"))
C.a.h(t.a,s)
t.c=!0
t=u.j(0,"Code").l(0,"Code")
s=new V.ac()
s.sU(H.c([],r))
C.a.h(t.a,s)
t=V.q(new H.p("`"))
C.a.h(s.a,t)
t=u.j(0,"Code").l(0,"CodeEnd")
s=V.q(new H.p("`"))
C.a.h(t.a,s)
t.c=!0
t=u.j(0,"Start").l(0,"LinkHead")
s=V.q(new H.p("["))
C.a.h(t.a,s)
t.c=!0
t=u.j(0,"LinkHead").l(0,"LinkTail")
s=V.q(new H.p("|"))
C.a.h(t.a,s)
s=u.j(0,"LinkHead").l(0,"LinkEnd")
t=V.q(new H.p("]"))
C.a.h(s.a,t)
s.c=!0
s=u.j(0,"LinkHead").l(0,"LinkHead")
t=new V.ac()
t.sU(H.c([],r))
C.a.h(s.a,t)
s=V.q(new H.p("|]"))
C.a.h(t.a,s)
s=u.j(0,"LinkTail").l(0,"LinkEnd")
t=V.q(new H.p("]"))
C.a.h(s.a,t)
s.c=!0
s=u.j(0,"LinkTail").l(0,"LinkTail")
t=new V.ac()
t.sU(H.c([],r))
C.a.h(s.a,t)
s=V.q(new H.p("|]"))
C.a.h(t.a,s)
C.a.h(u.j(0,"Start").l(0,"Other").a,new V.aS())
s=u.j(0,"Other").l(0,"Other")
t=new V.ac()
t.sU(H.c([],r))
C.a.h(s.a,t)
s=V.q(new H.p("*_`["))
C.a.h(t.a,s)
s=u.j(0,"BoldEnd")
s.d=s.a.J("Bold")
s=u.j(0,"ItalicEnd")
s.d=s.a.J("Italic")
s=u.j(0,"CodeEnd")
s.d=s.a.J("Code")
s=u.j(0,"LinkEnd")
s.d=s.a.J("Link")
s=u.j(0,"Other")
s.d=s.a.J("Other")
this.b=u}}
V.hs.prototype={
$1:function(a){P.kz(C.q,new V.hr(this.a))},
$S:24}
V.hr.prototype={
$0:function(){var u,t,s
u=C.d.a3(document.documentElement.scrollTop)
t=this.a.style
s=H.i(-0.01*u)+"px"
t.top=s},
$S:2}
V.ht.prototype={
$1:function(a){return H.l(a,"$ib9").a===this.a},
$S:38}
D.jj.prototype={
$1:function(a){var u,t,s,r
H.l(a,"$iv")
u=this.a
t=this.b
s=t.a
r=[P.e]
u.cv("Vertex Shader","glsl",0,H.c((s==null?null:s.c).split("\n"),r))
t=t.a
u.cv("Fragment Shader","glsl",0,H.c((t==null?null:t.d).split("\n"),r))},
$S:8};(function aliases(){var u=J.a.prototype
u.dv=u.i
u=J.d8.prototype
u.dz=u.i
u=P.h.prototype
u.dw=u.b1
u=W.K.prototype
u.b7=u.a_
u=W.ej.prototype
u.dB=u.a7
u=V.de.prototype
u.dA=u.ag
u.bV=u.i})();(function installTearOffs(){var u=hunkHelpers._static_1,t=hunkHelpers._static_0,s=hunkHelpers.installStaticTearOff,r=hunkHelpers.installInstanceTearOff,q=hunkHelpers._instance_2u,p=hunkHelpers._instance_0u,o=hunkHelpers._instance_1u,n=hunkHelpers._instance_0i
u(P,"mi","m0",11)
u(P,"mj","m1",11)
u(P,"mk","m2",11)
t(P,"kU","mh",3)
s(W,"mt",4,null,["$4"],["m4"],19,0)
s(W,"mu",4,null,["$4"],["m5"],19,0)
var m
r(m=E.ab.prototype,"gcT",0,0,null,["$1","$0"],["cU","ho"],1,0)
r(m,"gcR",0,0,null,["$1","$0"],["cS","hn"],1,0)
r(m,"gcP",0,0,null,["$1","$0"],["cQ","hk"],1,0)
q(m,"ghi","hj",7)
q(m,"ghl","hm",7)
r(m=E.dB.prototype,"gbX",0,0,null,["$1","$0"],["bZ","bY"],1,0)
p(m,"ghB","cZ",3)
o(m=X.dL.prototype,"geE","eF",9)
o(m,"ger","es",9)
o(m,"gey","ez",4)
o(m,"geI","eJ",20)
o(m,"geG","eH",20)
o(m,"geL","eM",4)
o(m,"geP","eQ",4)
o(m,"geC","eD",4)
o(m,"geN","eO",4)
o(m,"geA","eB",4)
o(m,"geR","eS",34)
o(m,"geT","eU",9)
o(m,"gf1","f2",10)
o(m,"geY","eZ",10)
o(m,"gf_","f0",10)
n(V.M.prototype,"gk","bH",21)
n(V.U.prototype,"gk","bH",21)
r(m=U.c5.prototype,"gar",0,0,null,["$1","$0"],["K","V"],1,0)
q(m,"gep","eq",22)
q(m,"geW","eX",22)
r(m=U.dM.prototype,"gar",0,0,null,["$1","$0"],["K","V"],1,0)
o(m,"gbk","bl",0)
o(m,"gbm","bn",0)
o(m,"gbo","bp",0)
r(m=U.dN.prototype,"gar",0,0,null,["$1","$0"],["K","V"],1,0)
o(m,"gbk","bl",0)
o(m,"gbm","bn",0)
o(m,"gbo","bp",0)
o(m,"gei","ej",0)
o(m,"gek","el",0)
o(m,"gft","fu",0)
o(m,"gfq","fs",0)
o(m,"gfo","fp",0)
o(U.dO.prototype,"gen","eo",0)
r(m=M.cY.prototype,"ga4",0,0,null,["$1","$0"],["ab","dL"],1,0)
q(m,"geu","ev",7)
q(m,"gew","ex",7)
r(O.dl.prototype,"gc_",0,0,null,["$1","$0"],["b8","c0"],1,0)
r(X.dn.prototype,"gc1",0,0,null,["$1","$0"],["an","dP"],1,0)})();(function inheritance(){var u=hunkHelpers.mixin,t=hunkHelpers.inherit,s=hunkHelpers.inheritMany
t(P.H,null)
s(P.H,[H.jy,J.a,J.al,P.e6,P.h,H.c7,P.aD,H.bw,H.dK,H.hd,H.hT,P.bc,H.bX,H.eo,P.a1,H.fD,H.fE,H.fz,P.eu,P.aR,P.aq,P.dR,P.hA,P.cj,P.hB,P.aN,P.a8,P.j4,P.iT,P.bI,P.e5,P.r,P.bY,P.fu,P.j2,P.I,P.aa,P.V,P.bb,P.h5,P.dv,P.dZ,P.fo,P.bd,P.b,P.G,P.F,P.ad,P.e,P.bE,W.f0,W.bm,W.w,W.dk,W.ej,W.iY,W.d_,W.aj,W.iS,W.eA,P.ez,P.iN,O.Y,O.c8,E.eU,E.ab,E.he,E.dB,Z.dQ,Z.im,Z.cQ,Z.bf,Z.b0,D.eX,D.c3,D.v,X.cR,X.d9,X.fB,X.fG,X.ai,X.fS,X.hP,X.dL,V.aT,V.fe,V.df,V.bh,V.a5,V.bk,V.dp,V.ds,V.M,V.U,U.dM,U.dN,U.dO,M.cY,A.cM,A.eP,A.h1,A.bv,A.dE,A.i3,F.Z,F.aW,F.bi,F.du,F.hn,F.ho,F.hp,F.ax,F.ib,F.ic,F.ig,F.ih,O.bG,T.hJ,V.aS,V.ah,V.de,V.hc,V.hm,V.ch,V.dC,V.cm,V.hN,X.cS,X.dy,X.dn,V.b9,V.hq])
s(J.a,[J.fx,J.fy,J.d8,J.aE,J.d7,J.by,H.cc,W.d,W.eN,W.cN,W.bu,W.az,W.aA,W.J,W.dT,W.f5,W.f6,W.cV,W.dV,W.cX,W.dX,W.f8,W.m,W.e_,W.aC,W.fs,W.e1,W.be,W.dc,W.fM,W.e7,W.e8,W.aH,W.e9,W.ec,W.aI,W.eg,W.dr,W.ei,W.aK,W.ek,W.aL,W.ep,W.at,W.es,W.hM,W.aO,W.ev,W.hR,W.i8,W.eB,W.eD,W.eF,W.eH,W.eJ,P.aV,P.e3,P.aZ,P.ee,P.ha,P.eq,P.b_,P.ex,P.eQ,P.dS,P.cO,P.d0,P.dq,P.bD,P.dt,P.dz,P.dF,P.em])
s(J.d8,[J.h6,J.cp,J.bg])
t(J.jx,J.aE)
s(J.d7,[J.d6,J.d5])
t(P.fF,P.e6)
s(P.fF,[H.dJ,W.iu,W.a9,P.fk])
t(H.p,H.dJ)
s(P.h,[H.fb,H.fJ,H.cq])
s(H.fb,[H.bz,H.da])
s(P.aD,[H.fK,H.io])
t(H.fL,H.bz)
s(P.bc,[H.h2,H.fA,H.i6,H.hV,H.eW,H.hk,P.dm,P.as,P.i7,P.i5,P.ci,P.eZ,P.f3])
s(H.bX,[H.jn,H.hG,H.jf,H.jg,H.jh,P.iq,P.ip,P.ir,P.is,P.j1,P.j0,P.iA,P.iE,P.iB,P.iC,P.iD,P.iH,P.iI,P.iG,P.iF,P.hC,P.hD,P.j9,P.iQ,P.iP,P.iR,P.fI,P.f9,P.fa,W.fc,W.fO,W.fQ,W.hj,W.hz,W.iz,W.h_,W.fZ,W.iU,W.iV,W.j_,W.j3,P.jb,P.fl,P.fm,P.eS,E.hf,E.hg,E.hh,E.hL,D.fg,D.fh,F.j5,F.ij,F.ii,F.id,F.ie,T.hK,V.jm,V.hs,V.hr,V.ht,D.jj])
s(H.hG,[H.hx,H.bV])
t(P.fH,P.a1)
s(P.fH,[H.aF,W.it])
t(H.dh,H.cc)
s(H.dh,[H.cu,H.cw])
t(H.cv,H.cu)
t(H.cb,H.cv)
t(H.cx,H.cw)
t(H.di,H.cx)
s(H.di,[H.fT,H.fU,H.fV,H.fW,H.fX,H.dj,H.fY])
t(P.iO,P.j4)
t(P.iM,P.iT)
t(P.bZ,P.hB)
t(P.fd,P.bY)
s(P.bZ,[P.ft,P.ia])
t(P.i9,P.fd)
s(P.V,[P.x,P.A])
s(P.as,[P.bC,P.fv])
s(W.d,[W.y,W.fj,W.aJ,W.cy,W.aM,W.au,W.cA,W.il,W.cr,P.eT,P.bs])
s(W.y,[W.K,W.b8,W.c1,W.cs])
s(W.K,[W.t,P.n])
s(W.t,[W.cL,W.eO,W.bU,W.b7,W.bt,W.am,W.fn,W.d1,W.c6,W.c9,W.hl,W.bF,W.dw,W.dx,W.hF,W.ck])
s(W.az,[W.c_,W.f1,W.f2])
t(W.f_,W.aA)
t(W.c0,W.dT)
t(W.dW,W.dV)
t(W.cW,W.dW)
t(W.dY,W.dX)
t(W.f7,W.dY)
t(W.aB,W.cN)
t(W.e0,W.e_)
t(W.fi,W.e0)
t(W.e2,W.e1)
t(W.bx,W.e2)
t(W.d2,W.c1)
t(W.bl,W.m)
s(W.bl,[W.aG,W.a2,W.av])
t(W.fN,W.e7)
t(W.fP,W.e8)
t(W.ea,W.e9)
t(W.fR,W.ea)
t(W.ed,W.ec)
t(W.cd,W.ed)
t(W.eh,W.eg)
t(W.h8,W.eh)
t(W.hi,W.ei)
t(W.cz,W.cy)
t(W.hu,W.cz)
t(W.el,W.ek)
t(W.hv,W.el)
t(W.hy,W.ep)
t(W.et,W.es)
t(W.hH,W.et)
t(W.cB,W.cA)
t(W.hI,W.cB)
t(W.ew,W.ev)
t(W.hQ,W.ew)
t(W.ik,W.c9)
t(W.aQ,W.a2)
t(W.eC,W.eB)
t(W.iv,W.eC)
t(W.dU,W.cX)
t(W.eE,W.eD)
t(W.iJ,W.eE)
t(W.eG,W.eF)
t(W.eb,W.eG)
t(W.eI,W.eH)
t(W.iW,W.eI)
t(W.eK,W.eJ)
t(W.iX,W.eK)
t(W.iw,W.it)
t(W.ix,P.hA)
t(W.jG,W.ix)
t(W.iy,P.cj)
t(W.iZ,W.ej)
t(P.a4,P.iN)
t(P.e4,P.e3)
t(P.fC,P.e4)
t(P.ef,P.ee)
t(P.h3,P.ef)
t(P.cf,P.n)
t(P.er,P.eq)
t(P.hE,P.er)
t(P.ey,P.ex)
t(P.hS,P.ey)
t(P.eR,P.dS)
t(P.h4,P.bs)
t(P.en,P.em)
t(P.hw,P.en)
s(E.eU,[Z.cP,A.cg,T.cl])
s(D.v,[D.d3,D.d4,D.L,X.h9])
s(X.h9,[X.dd,X.aY,X.ca,X.dD])
s(D.eX,[U.eY,U.a3])
t(U.cT,U.a3)
t(U.c5,O.Y)
t(A.h0,A.cg)
s(A.dE,[A.co,A.hZ,A.i0,A.i2,A.hX,A.hW,A.hY,A.i_,A.i1,A.i4,A.dG,A.bH,A.dH,A.dI])
t(O.dl,O.bG)
t(T.dA,T.cl)
s(V.de,[V.ac,V.cn])
t(X.fp,X.dy)
s(V.b9,[V.f4,V.fq,V.fr,V.h7])
u(H.dJ,H.dK)
u(H.cu,P.r)
u(H.cv,H.bw)
u(H.cw,P.r)
u(H.cx,H.bw)
u(P.e6,P.r)
u(W.dT,W.f0)
u(W.dV,P.r)
u(W.dW,W.w)
u(W.dX,P.r)
u(W.dY,W.w)
u(W.e_,P.r)
u(W.e0,W.w)
u(W.e1,P.r)
u(W.e2,W.w)
u(W.e7,P.a1)
u(W.e8,P.a1)
u(W.e9,P.r)
u(W.ea,W.w)
u(W.ec,P.r)
u(W.ed,W.w)
u(W.eg,P.r)
u(W.eh,W.w)
u(W.ei,P.a1)
u(W.cy,P.r)
u(W.cz,W.w)
u(W.ek,P.r)
u(W.el,W.w)
u(W.ep,P.a1)
u(W.es,P.r)
u(W.et,W.w)
u(W.cA,P.r)
u(W.cB,W.w)
u(W.ev,P.r)
u(W.ew,W.w)
u(W.eB,P.r)
u(W.eC,W.w)
u(W.eD,P.r)
u(W.eE,W.w)
u(W.eF,P.r)
u(W.eG,W.w)
u(W.eH,P.r)
u(W.eI,W.w)
u(W.eJ,P.r)
u(W.eK,W.w)
u(P.e3,P.r)
u(P.e4,W.w)
u(P.ee,P.r)
u(P.ef,W.w)
u(P.eq,P.r)
u(P.er,W.w)
u(P.ex,P.r)
u(P.ey,W.w)
u(P.dS,P.a1)
u(P.em,P.r)
u(P.en,W.w)})();(function constants(){var u=hunkHelpers.makeConstList
C.l=W.b7.prototype
C.o=W.bt.prototype
C.x=W.bu.prototype
C.e=W.am.prototype
C.I=W.cV.prototype
C.K=W.d1.prototype
C.y=W.d2.prototype
C.M=J.a.prototype
C.a=J.aE.prototype
C.N=J.d5.prototype
C.f=J.d6.prototype
C.d=J.d7.prototype
C.c=J.by.prototype
C.U=J.bg.prototype
C.Y=W.cd.prototype
C.C=J.h6.prototype
C.D=W.dr.prototype
C.b=P.bD.prototype
C.u=W.bF.prototype
C.n=W.dw.prototype
C.k=W.dx.prototype
C.v=J.cp.prototype
C.E=W.aQ.prototype
C.F=W.cr.prototype
C.G=new P.h5()
C.H=new P.ia()
C.h=new P.iO()
C.i=new A.bv(0,"ColorSourceType.None")
C.p=new A.bv(1,"ColorSourceType.Solid")
C.m=new A.bv(2,"ColorSourceType.Texture2D")
C.j=new A.bv(3,"ColorSourceType.TextureCube")
C.q=new P.bb(0)
C.J=new P.bb(5e6)
C.L=new P.fu("element",!0,!1,!1,!1)
C.O=function(hooks) {
  if (typeof dartExperimentalFixupGetTag != "function") return hooks;
  hooks.getTag = dartExperimentalFixupGetTag(hooks.getTag);
}
C.P=function(hooks) {
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

C.Q=function(getTagFallback) {
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
C.R=function() {
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
C.S=function(hooks) {
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
C.T=function(hooks) {
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
C.V=H.c(u(["*::class","*::dir","*::draggable","*::hidden","*::id","*::inert","*::itemprop","*::itemref","*::itemscope","*::lang","*::spellcheck","*::title","*::translate","A::accesskey","A::coords","A::hreflang","A::name","A::shape","A::tabindex","A::target","A::type","AREA::accesskey","AREA::alt","AREA::coords","AREA::nohref","AREA::shape","AREA::tabindex","AREA::target","AUDIO::controls","AUDIO::loop","AUDIO::mediagroup","AUDIO::muted","AUDIO::preload","BDO::dir","BODY::alink","BODY::bgcolor","BODY::link","BODY::text","BODY::vlink","BR::clear","BUTTON::accesskey","BUTTON::disabled","BUTTON::name","BUTTON::tabindex","BUTTON::type","BUTTON::value","CANVAS::height","CANVAS::width","CAPTION::align","COL::align","COL::char","COL::charoff","COL::span","COL::valign","COL::width","COLGROUP::align","COLGROUP::char","COLGROUP::charoff","COLGROUP::span","COLGROUP::valign","COLGROUP::width","COMMAND::checked","COMMAND::command","COMMAND::disabled","COMMAND::label","COMMAND::radiogroup","COMMAND::type","DATA::value","DEL::datetime","DETAILS::open","DIR::compact","DIV::align","DL::compact","FIELDSET::disabled","FONT::color","FONT::face","FONT::size","FORM::accept","FORM::autocomplete","FORM::enctype","FORM::method","FORM::name","FORM::novalidate","FORM::target","FRAME::name","H1::align","H2::align","H3::align","H4::align","H5::align","H6::align","HR::align","HR::noshade","HR::size","HR::width","HTML::version","IFRAME::align","IFRAME::frameborder","IFRAME::height","IFRAME::marginheight","IFRAME::marginwidth","IFRAME::width","IMG::align","IMG::alt","IMG::border","IMG::height","IMG::hspace","IMG::ismap","IMG::name","IMG::usemap","IMG::vspace","IMG::width","INPUT::accept","INPUT::accesskey","INPUT::align","INPUT::alt","INPUT::autocomplete","INPUT::autofocus","INPUT::checked","INPUT::disabled","INPUT::inputmode","INPUT::ismap","INPUT::list","INPUT::max","INPUT::maxlength","INPUT::min","INPUT::multiple","INPUT::name","INPUT::placeholder","INPUT::readonly","INPUT::required","INPUT::size","INPUT::step","INPUT::tabindex","INPUT::type","INPUT::usemap","INPUT::value","INS::datetime","KEYGEN::disabled","KEYGEN::keytype","KEYGEN::name","LABEL::accesskey","LABEL::for","LEGEND::accesskey","LEGEND::align","LI::type","LI::value","LINK::sizes","MAP::name","MENU::compact","MENU::label","MENU::type","METER::high","METER::low","METER::max","METER::min","METER::value","OBJECT::typemustmatch","OL::compact","OL::reversed","OL::start","OL::type","OPTGROUP::disabled","OPTGROUP::label","OPTION::disabled","OPTION::label","OPTION::selected","OPTION::value","OUTPUT::for","OUTPUT::name","P::align","PRE::width","PROGRESS::max","PROGRESS::min","PROGRESS::value","SELECT::autocomplete","SELECT::disabled","SELECT::multiple","SELECT::name","SELECT::required","SELECT::size","SELECT::tabindex","SOURCE::type","TABLE::align","TABLE::bgcolor","TABLE::border","TABLE::cellpadding","TABLE::cellspacing","TABLE::frame","TABLE::rules","TABLE::summary","TABLE::width","TBODY::align","TBODY::char","TBODY::charoff","TBODY::valign","TD::abbr","TD::align","TD::axis","TD::bgcolor","TD::char","TD::charoff","TD::colspan","TD::headers","TD::height","TD::nowrap","TD::rowspan","TD::scope","TD::valign","TD::width","TEXTAREA::accesskey","TEXTAREA::autocomplete","TEXTAREA::cols","TEXTAREA::disabled","TEXTAREA::inputmode","TEXTAREA::name","TEXTAREA::placeholder","TEXTAREA::readonly","TEXTAREA::required","TEXTAREA::rows","TEXTAREA::tabindex","TEXTAREA::wrap","TFOOT::align","TFOOT::char","TFOOT::charoff","TFOOT::valign","TH::abbr","TH::align","TH::axis","TH::bgcolor","TH::char","TH::charoff","TH::colspan","TH::headers","TH::height","TH::nowrap","TH::rowspan","TH::scope","TH::valign","TH::width","THEAD::align","THEAD::char","THEAD::charoff","THEAD::valign","TR::align","TR::bgcolor","TR::char","TR::charoff","TR::valign","TRACK::default","TRACK::kind","TRACK::label","TRACK::srclang","UL::compact","UL::type","VIDEO::controls","VIDEO::height","VIDEO::loop","VIDEO::mediagroup","VIDEO::muted","VIDEO::preload","VIDEO::width"]),[P.e])
C.W=H.c(u(["HEAD","AREA","BASE","BASEFONT","BR","COL","COLGROUP","EMBED","FRAME","FRAMESET","HR","IMAGE","IMG","INPUT","ISINDEX","LINK","META","PARAM","SOURCE","STYLE","TITLE","WBR"]),[P.e])
C.X=H.c(u([]),[P.e])
C.B=H.c(u([0,0,65498,45055,65535,34815,65534,18431]),[P.A])
C.r=H.c(u(["bind","if","ref","repeat","syntax"]),[P.e])
C.t=H.c(u(["A::href","AREA::href","BLOCKQUOTE::cite","BODY::background","COMMAND::icon","DEL::cite","FORM::action","IMG::src","INPUT::src","INS::cite","Q::cite","VIDEO::poster"]),[P.e])
C.w=new P.i9(!1)})();(function staticFields(){$.ay=0
$.bW=null
$.k3=null
$.jI=!1
$.kX=null
$.kS=null
$.l1=null
$.jc=null
$.ji=null
$.jS=null
$.bJ=null
$.cD=null
$.cE=null
$.jJ=!1
$.R=C.h
$.aU=null
$.ju=null
$.ka=null
$.k9=null
$.kg=null
$.kh=null
$.kn=null
$.ko=null
$.kt=null
$.kD=null
$.kG=null
$.kF=null
$.kE=null
$.km=null})();(function lazyInitializers(){var u=hunkHelpers.lazy
u($,"mR","l4",function(){return H.kW("_$dart_dartClosure")})
u($,"mS","jY",function(){return H.kW("_$dart_js")})
u($,"mX","l5",function(){return H.aP(H.hU({
toString:function(){return"$receiver$"}}))})
u($,"mY","l6",function(){return H.aP(H.hU({$method$:null,
toString:function(){return"$receiver$"}}))})
u($,"mZ","l7",function(){return H.aP(H.hU(null))})
u($,"n_","l8",function(){return H.aP(function(){var $argumentsExpr$='$arguments$'
try{null.$method$($argumentsExpr$)}catch(t){return t.message}}())})
u($,"n2","lb",function(){return H.aP(H.hU(void 0))})
u($,"n3","lc",function(){return H.aP(function(){var $argumentsExpr$='$arguments$'
try{(void 0).$method$($argumentsExpr$)}catch(t){return t.message}}())})
u($,"n1","la",function(){return H.aP(H.kB(null))})
u($,"n0","l9",function(){return H.aP(function(){try{null.$method$}catch(t){return t.message}}())})
u($,"n5","le",function(){return H.aP(H.kB(void 0))})
u($,"n4","ld",function(){return H.aP(function(){try{(void 0).$method$}catch(t){return t.message}}())})
u($,"nm","jZ",function(){return P.m_()})
u($,"nq","cK",function(){return[]})
u($,"np","lj",function(){return P.lT("^[\\-\\.0-9A-Z_a-z~]*$",!0,!1)})
u($,"nn","li",function(){return P.ke(["A","ABBR","ACRONYM","ADDRESS","AREA","ARTICLE","ASIDE","AUDIO","B","BDI","BDO","BIG","BLOCKQUOTE","BR","BUTTON","CANVAS","CAPTION","CENTER","CITE","CODE","COL","COLGROUP","COMMAND","DATA","DATALIST","DD","DEL","DETAILS","DFN","DIR","DIV","DL","DT","EM","FIELDSET","FIGCAPTION","FIGURE","FONT","FOOTER","FORM","H1","H2","H3","H4","H5","H6","HEADER","HGROUP","HR","I","IFRAME","IMG","INPUT","INS","KBD","LABEL","LEGEND","LI","MAP","MARK","MENU","METER","NAV","NOBR","OL","OPTGROUP","OPTION","OUTPUT","P","PRE","PROGRESS","Q","S","SAMP","SECTION","SELECT","SMALL","SOURCE","SPAN","STRIKE","STRONG","SUB","SUMMARY","SUP","TABLE","TBODY","TD","TEXTAREA","TFOOT","TH","THEAD","TIME","TR","TRACK","TT","U","UL","VAR","VIDEO","WBR"],P.e)})
u($,"no","k_",function(){return P.kd(P.e,P.bd)})
u($,"nf","lh",function(){return Z.ap(0)})
u($,"n9","lf",function(){return Z.ap(511)})
u($,"nh","b4",function(){return Z.ap(1)})
u($,"ng","b3",function(){return Z.ap(2)})
u($,"nb","b2",function(){return Z.ap(4)})
u($,"ni","b5",function(){return Z.ap(8)})
u($,"nj","b6",function(){return Z.ap(16)})
u($,"nc","cI",function(){return Z.ap(32)})
u($,"nd","cJ",function(){return Z.ap(64)})
u($,"ne","lg",function(){return Z.ap(96)})
u($,"nk","bS",function(){return Z.ap(128)})
u($,"na","bR",function(){return Z.ap(256)})
u($,"mQ","l3",function(){return new V.fe(1e-9)})
u($,"mP","N",function(){return $.l3()})})()
var v={mangledGlobalNames:{A:"int",x:"double",V:"num",e:"String",I:"bool",F:"Null",b:"List"},mangledNames:{},getTypeFromName:getGlobalFromName,metadata:[],types:[{func:1,ret:-1,args:[D.v]},{func:1,ret:-1,opt:[D.v]},{func:1,ret:P.F},{func:1,ret:-1},{func:1,ret:-1,args:[W.a2]},{func:1,ret:P.F,args:[F.Z]},{func:1,ret:-1,args:[P.e,,]},{func:1,ret:-1,args:[P.A,[P.h,E.ab]]},{func:1,ret:P.F,args:[D.v]},{func:1,ret:-1,args:[W.m]},{func:1,ret:-1,args:[W.av]},{func:1,ret:-1,args:[{func:1,ret:-1}]},{func:1,ret:P.e,args:[P.A]},{func:1,ret:P.I,args:[W.y]},{func:1,ret:P.F,args:[,]},{func:1,args:[,]},{func:1,ret:P.I,args:[W.aj]},{func:1,ret:P.I,args:[P.e]},{func:1,ret:P.F,args:[{func:1,ret:-1,args:[D.v]}]},{func:1,ret:P.I,args:[W.K,P.e,P.e,W.bm]},{func:1,ret:-1,args:[W.aG]},{func:1,ret:P.x},{func:1,ret:-1,args:[P.A,[P.h,U.a3]]},{func:1,ret:P.F,args:[,,]},{func:1,ret:P.F,args:[W.m]},{func:1,args:[W.m]},{func:1,ret:P.e,args:[P.e]},{func:1,ret:-1,args:[W.y,W.y]},{func:1,ret:-1,args:[P.e,P.e]},{func:1,ret:P.F,args:[{func:1,ret:-1}]},{func:1,args:[,P.e]},{func:1,args:[P.e]},{func:1,ret:P.F,args:[P.V]},{func:1,ret:P.F,args:[,],opt:[P.ad]},{func:1,ret:-1,args:[W.aQ]},{func:1,ret:[P.aq,,],args:[,]},{func:1,ret:P.F,args:[F.ax,P.x,P.x]},{func:1,ret:P.F,args:[P.aN]},{func:1,ret:P.I,args:[V.b9]},{func:1,ret:W.K,args:[W.y]}],interceptorsByTag:null,leafTags:null};(function nativeSupport(){!function(){var u=function(a){var o={}
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
hunkHelpers.setOrUpdateInterceptorsByTag({ArrayBuffer:J.a,AnimationEffectReadOnly:J.a,AnimationEffectTiming:J.a,AnimationEffectTimingReadOnly:J.a,AnimationTimeline:J.a,AnimationWorkletGlobalScope:J.a,AuthenticatorAssertionResponse:J.a,AuthenticatorAttestationResponse:J.a,AuthenticatorResponse:J.a,BackgroundFetchFetch:J.a,BackgroundFetchManager:J.a,BackgroundFetchSettledFetch:J.a,BarProp:J.a,BarcodeDetector:J.a,BluetoothRemoteGATTDescriptor:J.a,Body:J.a,BudgetState:J.a,CacheStorage:J.a,CanvasGradient:J.a,CanvasPattern:J.a,Client:J.a,Clients:J.a,CookieStore:J.a,Coordinates:J.a,Credential:J.a,CredentialUserData:J.a,CredentialsContainer:J.a,Crypto:J.a,CryptoKey:J.a,CSS:J.a,CSSVariableReferenceValue:J.a,CustomElementRegistry:J.a,DataTransfer:J.a,DataTransferItem:J.a,DeprecatedStorageInfo:J.a,DeprecatedStorageQuota:J.a,DeprecationReport:J.a,DetectedBarcode:J.a,DetectedFace:J.a,DetectedText:J.a,DeviceAcceleration:J.a,DeviceRotationRate:J.a,DirectoryEntry:J.a,DirectoryReader:J.a,DocumentOrShadowRoot:J.a,DocumentTimeline:J.a,DOMError:J.a,Iterator:J.a,DOMMatrix:J.a,DOMMatrixReadOnly:J.a,DOMParser:J.a,DOMPoint:J.a,DOMPointReadOnly:J.a,DOMQuad:J.a,DOMStringMap:J.a,Entry:J.a,External:J.a,FaceDetector:J.a,FederatedCredential:J.a,FileEntry:J.a,DOMFileSystem:J.a,FontFace:J.a,FontFaceSource:J.a,FormData:J.a,GamepadButton:J.a,GamepadPose:J.a,Geolocation:J.a,Position:J.a,Headers:J.a,HTMLHyperlinkElementUtils:J.a,IdleDeadline:J.a,ImageBitmap:J.a,ImageBitmapRenderingContext:J.a,ImageCapture:J.a,InputDeviceCapabilities:J.a,IntersectionObserver:J.a,IntersectionObserverEntry:J.a,InterventionReport:J.a,KeyframeEffect:J.a,KeyframeEffectReadOnly:J.a,MediaCapabilities:J.a,MediaCapabilitiesInfo:J.a,MediaDeviceInfo:J.a,MediaError:J.a,MediaKeyStatusMap:J.a,MediaKeySystemAccess:J.a,MediaKeys:J.a,MediaKeysPolicy:J.a,MediaMetadata:J.a,MediaSession:J.a,MediaSettingsRange:J.a,MemoryInfo:J.a,MessageChannel:J.a,Metadata:J.a,MutationObserver:J.a,WebKitMutationObserver:J.a,MutationRecord:J.a,NavigationPreloadManager:J.a,Navigator:J.a,NavigatorAutomationInformation:J.a,NavigatorConcurrentHardware:J.a,NavigatorCookies:J.a,NavigatorUserMediaError:J.a,NodeFilter:J.a,NodeIterator:J.a,NonDocumentTypeChildNode:J.a,NonElementParentNode:J.a,NoncedElement:J.a,OffscreenCanvasRenderingContext2D:J.a,OverconstrainedError:J.a,PaintRenderingContext2D:J.a,PaintSize:J.a,PaintWorkletGlobalScope:J.a,PasswordCredential:J.a,Path2D:J.a,PaymentAddress:J.a,PaymentInstruments:J.a,PaymentManager:J.a,PaymentResponse:J.a,PerformanceEntry:J.a,PerformanceLongTaskTiming:J.a,PerformanceMark:J.a,PerformanceMeasure:J.a,PerformanceNavigation:J.a,PerformanceNavigationTiming:J.a,PerformanceObserver:J.a,PerformanceObserverEntryList:J.a,PerformancePaintTiming:J.a,PerformanceResourceTiming:J.a,PerformanceServerTiming:J.a,PerformanceTiming:J.a,Permissions:J.a,PhotoCapabilities:J.a,PositionError:J.a,Presentation:J.a,PresentationReceiver:J.a,PublicKeyCredential:J.a,PushManager:J.a,PushMessageData:J.a,PushSubscription:J.a,PushSubscriptionOptions:J.a,RelatedApplication:J.a,ReportBody:J.a,ReportingObserver:J.a,ResizeObserver:J.a,ResizeObserverEntry:J.a,RTCCertificate:J.a,RTCIceCandidate:J.a,mozRTCIceCandidate:J.a,RTCLegacyStatsReport:J.a,RTCRtpContributingSource:J.a,RTCRtpReceiver:J.a,RTCRtpSender:J.a,RTCSessionDescription:J.a,mozRTCSessionDescription:J.a,RTCStatsResponse:J.a,Screen:J.a,ScrollState:J.a,ScrollTimeline:J.a,Selection:J.a,SharedArrayBuffer:J.a,SpeechRecognitionAlternative:J.a,SpeechSynthesisVoice:J.a,StaticRange:J.a,StorageManager:J.a,StyleMedia:J.a,StylePropertyMap:J.a,StylePropertyMapReadonly:J.a,SyncManager:J.a,TaskAttributionTiming:J.a,TextDetector:J.a,TextMetrics:J.a,TrackDefault:J.a,TreeWalker:J.a,TrustedHTML:J.a,TrustedScriptURL:J.a,TrustedURL:J.a,UnderlyingSourceBase:J.a,URLSearchParams:J.a,VRCoordinateSystem:J.a,VRDisplayCapabilities:J.a,VREyeParameters:J.a,VRFrameData:J.a,VRFrameOfReference:J.a,VRPose:J.a,VRStageBounds:J.a,VRStageBoundsPoint:J.a,VRStageParameters:J.a,ValidityState:J.a,VideoPlaybackQuality:J.a,VideoTrack:J.a,VTTRegion:J.a,WindowClient:J.a,WorkletAnimation:J.a,WorkletGlobalScope:J.a,XPathEvaluator:J.a,XPathExpression:J.a,XPathNSResolver:J.a,XPathResult:J.a,XMLSerializer:J.a,XSLTProcessor:J.a,Bluetooth:J.a,BluetoothCharacteristicProperties:J.a,BluetoothRemoteGATTServer:J.a,BluetoothRemoteGATTService:J.a,BluetoothUUID:J.a,BudgetService:J.a,Cache:J.a,DOMFileSystemSync:J.a,DirectoryEntrySync:J.a,DirectoryReaderSync:J.a,EntrySync:J.a,FileEntrySync:J.a,FileReaderSync:J.a,FileWriterSync:J.a,HTMLAllCollection:J.a,Mojo:J.a,MojoHandle:J.a,MojoWatcher:J.a,NFC:J.a,PagePopupController:J.a,Report:J.a,Request:J.a,Response:J.a,SubtleCrypto:J.a,USBAlternateInterface:J.a,USBConfiguration:J.a,USBDevice:J.a,USBEndpoint:J.a,USBInTransferResult:J.a,USBInterface:J.a,USBIsochronousInTransferPacket:J.a,USBIsochronousInTransferResult:J.a,USBIsochronousOutTransferPacket:J.a,USBIsochronousOutTransferResult:J.a,USBOutTransferResult:J.a,WorkerLocation:J.a,WorkerNavigator:J.a,Worklet:J.a,IDBCursor:J.a,IDBCursorWithValue:J.a,IDBFactory:J.a,IDBIndex:J.a,IDBKeyRange:J.a,IDBObjectStore:J.a,IDBObservation:J.a,IDBObserver:J.a,IDBObserverChanges:J.a,SVGAngle:J.a,SVGAnimatedAngle:J.a,SVGAnimatedBoolean:J.a,SVGAnimatedEnumeration:J.a,SVGAnimatedInteger:J.a,SVGAnimatedLength:J.a,SVGAnimatedLengthList:J.a,SVGAnimatedNumber:J.a,SVGAnimatedNumberList:J.a,SVGAnimatedPreserveAspectRatio:J.a,SVGAnimatedRect:J.a,SVGAnimatedString:J.a,SVGAnimatedTransformList:J.a,SVGMatrix:J.a,SVGPoint:J.a,SVGPreserveAspectRatio:J.a,SVGRect:J.a,SVGUnitTypes:J.a,AudioListener:J.a,AudioParam:J.a,AudioTrack:J.a,AudioWorkletGlobalScope:J.a,AudioWorkletProcessor:J.a,PeriodicWave:J.a,WebGLActiveInfo:J.a,ANGLEInstancedArrays:J.a,ANGLE_instanced_arrays:J.a,WebGLCanvas:J.a,WebGLColorBufferFloat:J.a,WebGLCompressedTextureASTC:J.a,WebGLCompressedTextureATC:J.a,WEBGL_compressed_texture_atc:J.a,WebGLCompressedTextureETC1:J.a,WEBGL_compressed_texture_etc1:J.a,WebGLCompressedTextureETC:J.a,WebGLCompressedTexturePVRTC:J.a,WEBGL_compressed_texture_pvrtc:J.a,WebGLCompressedTextureS3TC:J.a,WEBGL_compressed_texture_s3tc:J.a,WebGLCompressedTextureS3TCsRGB:J.a,WebGLDebugRendererInfo:J.a,WEBGL_debug_renderer_info:J.a,WebGLDebugShaders:J.a,WEBGL_debug_shaders:J.a,WebGLDepthTexture:J.a,WEBGL_depth_texture:J.a,WebGLDrawBuffers:J.a,WEBGL_draw_buffers:J.a,EXTsRGB:J.a,EXT_sRGB:J.a,EXTBlendMinMax:J.a,EXT_blend_minmax:J.a,EXTColorBufferFloat:J.a,EXTColorBufferHalfFloat:J.a,EXTDisjointTimerQuery:J.a,EXTDisjointTimerQueryWebGL2:J.a,EXTFragDepth:J.a,EXT_frag_depth:J.a,EXTShaderTextureLOD:J.a,EXT_shader_texture_lod:J.a,EXTTextureFilterAnisotropic:J.a,EXT_texture_filter_anisotropic:J.a,WebGLGetBufferSubDataAsync:J.a,WebGLLoseContext:J.a,WebGLExtensionLoseContext:J.a,WEBGL_lose_context:J.a,OESElementIndexUint:J.a,OES_element_index_uint:J.a,OESStandardDerivatives:J.a,OES_standard_derivatives:J.a,OESTextureFloat:J.a,OES_texture_float:J.a,OESTextureFloatLinear:J.a,OES_texture_float_linear:J.a,OESTextureHalfFloat:J.a,OES_texture_half_float:J.a,OESTextureHalfFloatLinear:J.a,OES_texture_half_float_linear:J.a,OESVertexArrayObject:J.a,OES_vertex_array_object:J.a,WebGLQuery:J.a,WebGLRenderbuffer:J.a,WebGLRenderingContext:J.a,WebGLSampler:J.a,WebGLShaderPrecisionFormat:J.a,WebGLSync:J.a,WebGLTimerQueryEXT:J.a,WebGLTransformFeedback:J.a,WebGLVertexArrayObject:J.a,WebGLVertexArrayObjectOES:J.a,WebGL:J.a,WebGL2RenderingContextBase:J.a,Database:J.a,SQLError:J.a,SQLResultSet:J.a,SQLTransaction:J.a,DataView:H.cc,ArrayBufferView:H.cc,Float32Array:H.cb,Float64Array:H.cb,Int16Array:H.fT,Int32Array:H.fU,Int8Array:H.fV,Uint16Array:H.fW,Uint32Array:H.fX,Uint8ClampedArray:H.dj,CanvasPixelArray:H.dj,Uint8Array:H.fY,HTMLBRElement:W.t,HTMLButtonElement:W.t,HTMLContentElement:W.t,HTMLDListElement:W.t,HTMLDataElement:W.t,HTMLDataListElement:W.t,HTMLDetailsElement:W.t,HTMLDialogElement:W.t,HTMLEmbedElement:W.t,HTMLFieldSetElement:W.t,HTMLHRElement:W.t,HTMLHeadingElement:W.t,HTMLHtmlElement:W.t,HTMLIFrameElement:W.t,HTMLInputElement:W.t,HTMLLIElement:W.t,HTMLLabelElement:W.t,HTMLLegendElement:W.t,HTMLLinkElement:W.t,HTMLMapElement:W.t,HTMLMenuElement:W.t,HTMLMetaElement:W.t,HTMLMeterElement:W.t,HTMLModElement:W.t,HTMLOListElement:W.t,HTMLObjectElement:W.t,HTMLOptGroupElement:W.t,HTMLOptionElement:W.t,HTMLOutputElement:W.t,HTMLParagraphElement:W.t,HTMLParamElement:W.t,HTMLPictureElement:W.t,HTMLPreElement:W.t,HTMLProgressElement:W.t,HTMLQuoteElement:W.t,HTMLScriptElement:W.t,HTMLShadowElement:W.t,HTMLSlotElement:W.t,HTMLSourceElement:W.t,HTMLSpanElement:W.t,HTMLStyleElement:W.t,HTMLTableCaptionElement:W.t,HTMLTableColElement:W.t,HTMLTextAreaElement:W.t,HTMLTimeElement:W.t,HTMLTitleElement:W.t,HTMLTrackElement:W.t,HTMLUListElement:W.t,HTMLUnknownElement:W.t,HTMLDirectoryElement:W.t,HTMLFontElement:W.t,HTMLFrameElement:W.t,HTMLFrameSetElement:W.t,HTMLMarqueeElement:W.t,HTMLElement:W.t,AccessibleNodeList:W.eN,HTMLAnchorElement:W.cL,HTMLAreaElement:W.eO,HTMLBaseElement:W.bU,Blob:W.cN,HTMLBodyElement:W.b7,HTMLCanvasElement:W.bt,CanvasRenderingContext2D:W.bu,CDATASection:W.b8,CharacterData:W.b8,Comment:W.b8,ProcessingInstruction:W.b8,Text:W.b8,CSSNumericValue:W.c_,CSSUnitValue:W.c_,CSSPerspective:W.f_,CSSCharsetRule:W.J,CSSConditionRule:W.J,CSSFontFaceRule:W.J,CSSGroupingRule:W.J,CSSImportRule:W.J,CSSKeyframeRule:W.J,MozCSSKeyframeRule:W.J,WebKitCSSKeyframeRule:W.J,CSSKeyframesRule:W.J,MozCSSKeyframesRule:W.J,WebKitCSSKeyframesRule:W.J,CSSMediaRule:W.J,CSSNamespaceRule:W.J,CSSPageRule:W.J,CSSRule:W.J,CSSStyleRule:W.J,CSSSupportsRule:W.J,CSSViewportRule:W.J,CSSStyleDeclaration:W.c0,MSStyleCSSProperties:W.c0,CSS2Properties:W.c0,CSSImageValue:W.az,CSSKeywordValue:W.az,CSSPositionValue:W.az,CSSResourceValue:W.az,CSSURLImageValue:W.az,CSSStyleValue:W.az,CSSMatrixComponent:W.aA,CSSRotation:W.aA,CSSScale:W.aA,CSSSkew:W.aA,CSSTranslation:W.aA,CSSTransformComponent:W.aA,CSSTransformValue:W.f1,CSSUnparsedValue:W.f2,DataTransferItemList:W.f5,HTMLDivElement:W.am,XMLDocument:W.c1,Document:W.c1,DOMException:W.f6,DOMImplementation:W.cV,ClientRectList:W.cW,DOMRectList:W.cW,DOMRectReadOnly:W.cX,DOMStringList:W.f7,DOMTokenList:W.f8,Element:W.K,AbortPaymentEvent:W.m,AnimationEvent:W.m,AnimationPlaybackEvent:W.m,ApplicationCacheErrorEvent:W.m,BackgroundFetchClickEvent:W.m,BackgroundFetchEvent:W.m,BackgroundFetchFailEvent:W.m,BackgroundFetchedEvent:W.m,BeforeInstallPromptEvent:W.m,BeforeUnloadEvent:W.m,BlobEvent:W.m,CanMakePaymentEvent:W.m,ClipboardEvent:W.m,CloseEvent:W.m,CustomEvent:W.m,DeviceMotionEvent:W.m,DeviceOrientationEvent:W.m,ErrorEvent:W.m,ExtendableEvent:W.m,ExtendableMessageEvent:W.m,FetchEvent:W.m,FontFaceSetLoadEvent:W.m,ForeignFetchEvent:W.m,GamepadEvent:W.m,HashChangeEvent:W.m,InstallEvent:W.m,MediaEncryptedEvent:W.m,MediaKeyMessageEvent:W.m,MediaQueryListEvent:W.m,MediaStreamEvent:W.m,MediaStreamTrackEvent:W.m,MessageEvent:W.m,MIDIConnectionEvent:W.m,MIDIMessageEvent:W.m,MutationEvent:W.m,NotificationEvent:W.m,PageTransitionEvent:W.m,PaymentRequestEvent:W.m,PaymentRequestUpdateEvent:W.m,PopStateEvent:W.m,PresentationConnectionAvailableEvent:W.m,PresentationConnectionCloseEvent:W.m,ProgressEvent:W.m,PromiseRejectionEvent:W.m,PushEvent:W.m,RTCDataChannelEvent:W.m,RTCDTMFToneChangeEvent:W.m,RTCPeerConnectionIceEvent:W.m,RTCTrackEvent:W.m,SecurityPolicyViolationEvent:W.m,SensorErrorEvent:W.m,SpeechRecognitionError:W.m,SpeechRecognitionEvent:W.m,SpeechSynthesisEvent:W.m,StorageEvent:W.m,SyncEvent:W.m,TrackEvent:W.m,TransitionEvent:W.m,WebKitTransitionEvent:W.m,VRDeviceEvent:W.m,VRDisplayEvent:W.m,VRSessionEvent:W.m,MojoInterfaceRequestEvent:W.m,ResourceProgressEvent:W.m,USBConnectionEvent:W.m,IDBVersionChangeEvent:W.m,AudioProcessingEvent:W.m,OfflineAudioCompletionEvent:W.m,WebGLContextEvent:W.m,Event:W.m,InputEvent:W.m,AbsoluteOrientationSensor:W.d,Accelerometer:W.d,AccessibleNode:W.d,AmbientLightSensor:W.d,Animation:W.d,ApplicationCache:W.d,DOMApplicationCache:W.d,OfflineResourceList:W.d,BackgroundFetchRegistration:W.d,BatteryManager:W.d,BroadcastChannel:W.d,CanvasCaptureMediaStreamTrack:W.d,DedicatedWorkerGlobalScope:W.d,EventSource:W.d,FileReader:W.d,FontFaceSet:W.d,Gyroscope:W.d,XMLHttpRequest:W.d,XMLHttpRequestEventTarget:W.d,XMLHttpRequestUpload:W.d,LinearAccelerationSensor:W.d,Magnetometer:W.d,MediaDevices:W.d,MediaKeySession:W.d,MediaQueryList:W.d,MediaRecorder:W.d,MediaSource:W.d,MediaStream:W.d,MediaStreamTrack:W.d,MessagePort:W.d,MIDIAccess:W.d,MIDIInput:W.d,MIDIOutput:W.d,MIDIPort:W.d,NetworkInformation:W.d,Notification:W.d,OffscreenCanvas:W.d,OrientationSensor:W.d,PaymentRequest:W.d,Performance:W.d,PermissionStatus:W.d,PresentationAvailability:W.d,PresentationConnection:W.d,PresentationConnectionList:W.d,PresentationRequest:W.d,RelativeOrientationSensor:W.d,RemotePlayback:W.d,RTCDataChannel:W.d,DataChannel:W.d,RTCDTMFSender:W.d,RTCPeerConnection:W.d,webkitRTCPeerConnection:W.d,mozRTCPeerConnection:W.d,ScreenOrientation:W.d,Sensor:W.d,ServiceWorker:W.d,ServiceWorkerContainer:W.d,ServiceWorkerGlobalScope:W.d,ServiceWorkerRegistration:W.d,SharedWorker:W.d,SharedWorkerGlobalScope:W.d,SpeechRecognition:W.d,SpeechSynthesis:W.d,SpeechSynthesisUtterance:W.d,VR:W.d,VRDevice:W.d,VRDisplay:W.d,VRSession:W.d,VisualViewport:W.d,WebSocket:W.d,Worker:W.d,WorkerGlobalScope:W.d,WorkerPerformance:W.d,BluetoothDevice:W.d,BluetoothRemoteGATTCharacteristic:W.d,Clipboard:W.d,MojoInterfaceInterceptor:W.d,USB:W.d,IDBDatabase:W.d,IDBOpenDBRequest:W.d,IDBVersionChangeRequest:W.d,IDBRequest:W.d,IDBTransaction:W.d,AnalyserNode:W.d,RealtimeAnalyserNode:W.d,AudioBufferSourceNode:W.d,AudioDestinationNode:W.d,AudioNode:W.d,AudioScheduledSourceNode:W.d,AudioWorkletNode:W.d,BiquadFilterNode:W.d,ChannelMergerNode:W.d,AudioChannelMerger:W.d,ChannelSplitterNode:W.d,AudioChannelSplitter:W.d,ConstantSourceNode:W.d,ConvolverNode:W.d,DelayNode:W.d,DynamicsCompressorNode:W.d,GainNode:W.d,AudioGainNode:W.d,IIRFilterNode:W.d,MediaElementAudioSourceNode:W.d,MediaStreamAudioDestinationNode:W.d,MediaStreamAudioSourceNode:W.d,OscillatorNode:W.d,Oscillator:W.d,PannerNode:W.d,AudioPannerNode:W.d,webkitAudioPannerNode:W.d,ScriptProcessorNode:W.d,JavaScriptAudioNode:W.d,StereoPannerNode:W.d,WaveShaperNode:W.d,EventTarget:W.d,File:W.aB,FileList:W.fi,FileWriter:W.fj,HTMLFormElement:W.fn,Gamepad:W.aC,HTMLHeadElement:W.d1,History:W.fs,HTMLCollection:W.bx,HTMLFormControlsCollection:W.bx,HTMLOptionsCollection:W.bx,HTMLDocument:W.d2,ImageData:W.be,HTMLImageElement:W.c6,KeyboardEvent:W.aG,Location:W.dc,HTMLAudioElement:W.c9,HTMLMediaElement:W.c9,MediaList:W.fM,MIDIInputMap:W.fN,MIDIOutputMap:W.fP,MimeType:W.aH,MimeTypeArray:W.fR,PointerEvent:W.a2,MouseEvent:W.a2,DragEvent:W.a2,DocumentFragment:W.y,ShadowRoot:W.y,DocumentType:W.y,Node:W.y,NodeList:W.cd,RadioNodeList:W.cd,Plugin:W.aI,PluginArray:W.h8,Range:W.dr,RTCStatsReport:W.hi,HTMLSelectElement:W.hl,SourceBuffer:W.aJ,SourceBufferList:W.hu,SpeechGrammar:W.aK,SpeechGrammarList:W.hv,SpeechRecognitionResult:W.aL,Storage:W.hy,CSSStyleSheet:W.at,StyleSheet:W.at,HTMLTableCellElement:W.bF,HTMLTableDataCellElement:W.bF,HTMLTableHeaderCellElement:W.bF,HTMLTableElement:W.dw,HTMLTableRowElement:W.dx,HTMLTableSectionElement:W.hF,HTMLTemplateElement:W.ck,TextTrack:W.aM,TextTrackCue:W.au,VTTCue:W.au,TextTrackCueList:W.hH,TextTrackList:W.hI,TimeRanges:W.hM,Touch:W.aO,TouchEvent:W.av,TouchList:W.hQ,TrackDefaultList:W.hR,CompositionEvent:W.bl,FocusEvent:W.bl,TextEvent:W.bl,UIEvent:W.bl,URL:W.i8,HTMLVideoElement:W.ik,VideoTrackList:W.il,WheelEvent:W.aQ,Window:W.cr,DOMWindow:W.cr,Attr:W.cs,CSSRuleList:W.iv,ClientRect:W.dU,DOMRect:W.dU,GamepadList:W.iJ,NamedNodeMap:W.eb,MozNamedAttrMap:W.eb,SpeechRecognitionResultList:W.iW,StyleSheetList:W.iX,SVGLength:P.aV,SVGLengthList:P.fC,SVGNumber:P.aZ,SVGNumberList:P.h3,SVGPointList:P.ha,SVGScriptElement:P.cf,SVGStringList:P.hE,SVGAElement:P.n,SVGAnimateElement:P.n,SVGAnimateMotionElement:P.n,SVGAnimateTransformElement:P.n,SVGAnimationElement:P.n,SVGCircleElement:P.n,SVGClipPathElement:P.n,SVGDefsElement:P.n,SVGDescElement:P.n,SVGDiscardElement:P.n,SVGEllipseElement:P.n,SVGFEBlendElement:P.n,SVGFEColorMatrixElement:P.n,SVGFEComponentTransferElement:P.n,SVGFECompositeElement:P.n,SVGFEConvolveMatrixElement:P.n,SVGFEDiffuseLightingElement:P.n,SVGFEDisplacementMapElement:P.n,SVGFEDistantLightElement:P.n,SVGFEFloodElement:P.n,SVGFEFuncAElement:P.n,SVGFEFuncBElement:P.n,SVGFEFuncGElement:P.n,SVGFEFuncRElement:P.n,SVGFEGaussianBlurElement:P.n,SVGFEImageElement:P.n,SVGFEMergeElement:P.n,SVGFEMergeNodeElement:P.n,SVGFEMorphologyElement:P.n,SVGFEOffsetElement:P.n,SVGFEPointLightElement:P.n,SVGFESpecularLightingElement:P.n,SVGFESpotLightElement:P.n,SVGFETileElement:P.n,SVGFETurbulenceElement:P.n,SVGFilterElement:P.n,SVGForeignObjectElement:P.n,SVGGElement:P.n,SVGGeometryElement:P.n,SVGGraphicsElement:P.n,SVGImageElement:P.n,SVGLineElement:P.n,SVGLinearGradientElement:P.n,SVGMarkerElement:P.n,SVGMaskElement:P.n,SVGMetadataElement:P.n,SVGPathElement:P.n,SVGPatternElement:P.n,SVGPolygonElement:P.n,SVGPolylineElement:P.n,SVGRadialGradientElement:P.n,SVGRectElement:P.n,SVGSetElement:P.n,SVGStopElement:P.n,SVGStyleElement:P.n,SVGSVGElement:P.n,SVGSwitchElement:P.n,SVGSymbolElement:P.n,SVGTSpanElement:P.n,SVGTextContentElement:P.n,SVGTextElement:P.n,SVGTextPathElement:P.n,SVGTextPositioningElement:P.n,SVGTitleElement:P.n,SVGUseElement:P.n,SVGViewElement:P.n,SVGGradientElement:P.n,SVGComponentTransferFunctionElement:P.n,SVGFEDropShadowElement:P.n,SVGMPathElement:P.n,SVGElement:P.n,SVGTransform:P.b_,SVGTransformList:P.hS,AudioBuffer:P.eQ,AudioParamMap:P.eR,AudioTrackList:P.eT,AudioContext:P.bs,webkitAudioContext:P.bs,BaseAudioContext:P.bs,OfflineAudioContext:P.h4,WebGLBuffer:P.cO,WebGLFramebuffer:P.d0,WebGLProgram:P.dq,WebGL2RenderingContext:P.bD,WebGLShader:P.dt,WebGLTexture:P.dz,WebGLUniformLocation:P.dF,SQLResultSetRowList:P.hw})
hunkHelpers.setOrUpdateLeafTags({ArrayBuffer:true,AnimationEffectReadOnly:true,AnimationEffectTiming:true,AnimationEffectTimingReadOnly:true,AnimationTimeline:true,AnimationWorkletGlobalScope:true,AuthenticatorAssertionResponse:true,AuthenticatorAttestationResponse:true,AuthenticatorResponse:true,BackgroundFetchFetch:true,BackgroundFetchManager:true,BackgroundFetchSettledFetch:true,BarProp:true,BarcodeDetector:true,BluetoothRemoteGATTDescriptor:true,Body:true,BudgetState:true,CacheStorage:true,CanvasGradient:true,CanvasPattern:true,Client:true,Clients:true,CookieStore:true,Coordinates:true,Credential:true,CredentialUserData:true,CredentialsContainer:true,Crypto:true,CryptoKey:true,CSS:true,CSSVariableReferenceValue:true,CustomElementRegistry:true,DataTransfer:true,DataTransferItem:true,DeprecatedStorageInfo:true,DeprecatedStorageQuota:true,DeprecationReport:true,DetectedBarcode:true,DetectedFace:true,DetectedText:true,DeviceAcceleration:true,DeviceRotationRate:true,DirectoryEntry:true,DirectoryReader:true,DocumentOrShadowRoot:true,DocumentTimeline:true,DOMError:true,Iterator:true,DOMMatrix:true,DOMMatrixReadOnly:true,DOMParser:true,DOMPoint:true,DOMPointReadOnly:true,DOMQuad:true,DOMStringMap:true,Entry:true,External:true,FaceDetector:true,FederatedCredential:true,FileEntry:true,DOMFileSystem:true,FontFace:true,FontFaceSource:true,FormData:true,GamepadButton:true,GamepadPose:true,Geolocation:true,Position:true,Headers:true,HTMLHyperlinkElementUtils:true,IdleDeadline:true,ImageBitmap:true,ImageBitmapRenderingContext:true,ImageCapture:true,InputDeviceCapabilities:true,IntersectionObserver:true,IntersectionObserverEntry:true,InterventionReport:true,KeyframeEffect:true,KeyframeEffectReadOnly:true,MediaCapabilities:true,MediaCapabilitiesInfo:true,MediaDeviceInfo:true,MediaError:true,MediaKeyStatusMap:true,MediaKeySystemAccess:true,MediaKeys:true,MediaKeysPolicy:true,MediaMetadata:true,MediaSession:true,MediaSettingsRange:true,MemoryInfo:true,MessageChannel:true,Metadata:true,MutationObserver:true,WebKitMutationObserver:true,MutationRecord:true,NavigationPreloadManager:true,Navigator:true,NavigatorAutomationInformation:true,NavigatorConcurrentHardware:true,NavigatorCookies:true,NavigatorUserMediaError:true,NodeFilter:true,NodeIterator:true,NonDocumentTypeChildNode:true,NonElementParentNode:true,NoncedElement:true,OffscreenCanvasRenderingContext2D:true,OverconstrainedError:true,PaintRenderingContext2D:true,PaintSize:true,PaintWorkletGlobalScope:true,PasswordCredential:true,Path2D:true,PaymentAddress:true,PaymentInstruments:true,PaymentManager:true,PaymentResponse:true,PerformanceEntry:true,PerformanceLongTaskTiming:true,PerformanceMark:true,PerformanceMeasure:true,PerformanceNavigation:true,PerformanceNavigationTiming:true,PerformanceObserver:true,PerformanceObserverEntryList:true,PerformancePaintTiming:true,PerformanceResourceTiming:true,PerformanceServerTiming:true,PerformanceTiming:true,Permissions:true,PhotoCapabilities:true,PositionError:true,Presentation:true,PresentationReceiver:true,PublicKeyCredential:true,PushManager:true,PushMessageData:true,PushSubscription:true,PushSubscriptionOptions:true,RelatedApplication:true,ReportBody:true,ReportingObserver:true,ResizeObserver:true,ResizeObserverEntry:true,RTCCertificate:true,RTCIceCandidate:true,mozRTCIceCandidate:true,RTCLegacyStatsReport:true,RTCRtpContributingSource:true,RTCRtpReceiver:true,RTCRtpSender:true,RTCSessionDescription:true,mozRTCSessionDescription:true,RTCStatsResponse:true,Screen:true,ScrollState:true,ScrollTimeline:true,Selection:true,SharedArrayBuffer:true,SpeechRecognitionAlternative:true,SpeechSynthesisVoice:true,StaticRange:true,StorageManager:true,StyleMedia:true,StylePropertyMap:true,StylePropertyMapReadonly:true,SyncManager:true,TaskAttributionTiming:true,TextDetector:true,TextMetrics:true,TrackDefault:true,TreeWalker:true,TrustedHTML:true,TrustedScriptURL:true,TrustedURL:true,UnderlyingSourceBase:true,URLSearchParams:true,VRCoordinateSystem:true,VRDisplayCapabilities:true,VREyeParameters:true,VRFrameData:true,VRFrameOfReference:true,VRPose:true,VRStageBounds:true,VRStageBoundsPoint:true,VRStageParameters:true,ValidityState:true,VideoPlaybackQuality:true,VideoTrack:true,VTTRegion:true,WindowClient:true,WorkletAnimation:true,WorkletGlobalScope:true,XPathEvaluator:true,XPathExpression:true,XPathNSResolver:true,XPathResult:true,XMLSerializer:true,XSLTProcessor:true,Bluetooth:true,BluetoothCharacteristicProperties:true,BluetoothRemoteGATTServer:true,BluetoothRemoteGATTService:true,BluetoothUUID:true,BudgetService:true,Cache:true,DOMFileSystemSync:true,DirectoryEntrySync:true,DirectoryReaderSync:true,EntrySync:true,FileEntrySync:true,FileReaderSync:true,FileWriterSync:true,HTMLAllCollection:true,Mojo:true,MojoHandle:true,MojoWatcher:true,NFC:true,PagePopupController:true,Report:true,Request:true,Response:true,SubtleCrypto:true,USBAlternateInterface:true,USBConfiguration:true,USBDevice:true,USBEndpoint:true,USBInTransferResult:true,USBInterface:true,USBIsochronousInTransferPacket:true,USBIsochronousInTransferResult:true,USBIsochronousOutTransferPacket:true,USBIsochronousOutTransferResult:true,USBOutTransferResult:true,WorkerLocation:true,WorkerNavigator:true,Worklet:true,IDBCursor:true,IDBCursorWithValue:true,IDBFactory:true,IDBIndex:true,IDBKeyRange:true,IDBObjectStore:true,IDBObservation:true,IDBObserver:true,IDBObserverChanges:true,SVGAngle:true,SVGAnimatedAngle:true,SVGAnimatedBoolean:true,SVGAnimatedEnumeration:true,SVGAnimatedInteger:true,SVGAnimatedLength:true,SVGAnimatedLengthList:true,SVGAnimatedNumber:true,SVGAnimatedNumberList:true,SVGAnimatedPreserveAspectRatio:true,SVGAnimatedRect:true,SVGAnimatedString:true,SVGAnimatedTransformList:true,SVGMatrix:true,SVGPoint:true,SVGPreserveAspectRatio:true,SVGRect:true,SVGUnitTypes:true,AudioListener:true,AudioParam:true,AudioTrack:true,AudioWorkletGlobalScope:true,AudioWorkletProcessor:true,PeriodicWave:true,WebGLActiveInfo:true,ANGLEInstancedArrays:true,ANGLE_instanced_arrays:true,WebGLCanvas:true,WebGLColorBufferFloat:true,WebGLCompressedTextureASTC:true,WebGLCompressedTextureATC:true,WEBGL_compressed_texture_atc:true,WebGLCompressedTextureETC1:true,WEBGL_compressed_texture_etc1:true,WebGLCompressedTextureETC:true,WebGLCompressedTexturePVRTC:true,WEBGL_compressed_texture_pvrtc:true,WebGLCompressedTextureS3TC:true,WEBGL_compressed_texture_s3tc:true,WebGLCompressedTextureS3TCsRGB:true,WebGLDebugRendererInfo:true,WEBGL_debug_renderer_info:true,WebGLDebugShaders:true,WEBGL_debug_shaders:true,WebGLDepthTexture:true,WEBGL_depth_texture:true,WebGLDrawBuffers:true,WEBGL_draw_buffers:true,EXTsRGB:true,EXT_sRGB:true,EXTBlendMinMax:true,EXT_blend_minmax:true,EXTColorBufferFloat:true,EXTColorBufferHalfFloat:true,EXTDisjointTimerQuery:true,EXTDisjointTimerQueryWebGL2:true,EXTFragDepth:true,EXT_frag_depth:true,EXTShaderTextureLOD:true,EXT_shader_texture_lod:true,EXTTextureFilterAnisotropic:true,EXT_texture_filter_anisotropic:true,WebGLGetBufferSubDataAsync:true,WebGLLoseContext:true,WebGLExtensionLoseContext:true,WEBGL_lose_context:true,OESElementIndexUint:true,OES_element_index_uint:true,OESStandardDerivatives:true,OES_standard_derivatives:true,OESTextureFloat:true,OES_texture_float:true,OESTextureFloatLinear:true,OES_texture_float_linear:true,OESTextureHalfFloat:true,OES_texture_half_float:true,OESTextureHalfFloatLinear:true,OES_texture_half_float_linear:true,OESVertexArrayObject:true,OES_vertex_array_object:true,WebGLQuery:true,WebGLRenderbuffer:true,WebGLRenderingContext:true,WebGLSampler:true,WebGLShaderPrecisionFormat:true,WebGLSync:true,WebGLTimerQueryEXT:true,WebGLTransformFeedback:true,WebGLVertexArrayObject:true,WebGLVertexArrayObjectOES:true,WebGL:true,WebGL2RenderingContextBase:true,Database:true,SQLError:true,SQLResultSet:true,SQLTransaction:true,DataView:true,ArrayBufferView:false,Float32Array:true,Float64Array:true,Int16Array:true,Int32Array:true,Int8Array:true,Uint16Array:true,Uint32Array:true,Uint8ClampedArray:true,CanvasPixelArray:true,Uint8Array:false,HTMLBRElement:true,HTMLButtonElement:true,HTMLContentElement:true,HTMLDListElement:true,HTMLDataElement:true,HTMLDataListElement:true,HTMLDetailsElement:true,HTMLDialogElement:true,HTMLEmbedElement:true,HTMLFieldSetElement:true,HTMLHRElement:true,HTMLHeadingElement:true,HTMLHtmlElement:true,HTMLIFrameElement:true,HTMLInputElement:true,HTMLLIElement:true,HTMLLabelElement:true,HTMLLegendElement:true,HTMLLinkElement:true,HTMLMapElement:true,HTMLMenuElement:true,HTMLMetaElement:true,HTMLMeterElement:true,HTMLModElement:true,HTMLOListElement:true,HTMLObjectElement:true,HTMLOptGroupElement:true,HTMLOptionElement:true,HTMLOutputElement:true,HTMLParagraphElement:true,HTMLParamElement:true,HTMLPictureElement:true,HTMLPreElement:true,HTMLProgressElement:true,HTMLQuoteElement:true,HTMLScriptElement:true,HTMLShadowElement:true,HTMLSlotElement:true,HTMLSourceElement:true,HTMLSpanElement:true,HTMLStyleElement:true,HTMLTableCaptionElement:true,HTMLTableColElement:true,HTMLTextAreaElement:true,HTMLTimeElement:true,HTMLTitleElement:true,HTMLTrackElement:true,HTMLUListElement:true,HTMLUnknownElement:true,HTMLDirectoryElement:true,HTMLFontElement:true,HTMLFrameElement:true,HTMLFrameSetElement:true,HTMLMarqueeElement:true,HTMLElement:false,AccessibleNodeList:true,HTMLAnchorElement:true,HTMLAreaElement:true,HTMLBaseElement:true,Blob:false,HTMLBodyElement:true,HTMLCanvasElement:true,CanvasRenderingContext2D:true,CDATASection:true,CharacterData:true,Comment:true,ProcessingInstruction:true,Text:true,CSSNumericValue:true,CSSUnitValue:true,CSSPerspective:true,CSSCharsetRule:true,CSSConditionRule:true,CSSFontFaceRule:true,CSSGroupingRule:true,CSSImportRule:true,CSSKeyframeRule:true,MozCSSKeyframeRule:true,WebKitCSSKeyframeRule:true,CSSKeyframesRule:true,MozCSSKeyframesRule:true,WebKitCSSKeyframesRule:true,CSSMediaRule:true,CSSNamespaceRule:true,CSSPageRule:true,CSSRule:true,CSSStyleRule:true,CSSSupportsRule:true,CSSViewportRule:true,CSSStyleDeclaration:true,MSStyleCSSProperties:true,CSS2Properties:true,CSSImageValue:true,CSSKeywordValue:true,CSSPositionValue:true,CSSResourceValue:true,CSSURLImageValue:true,CSSStyleValue:false,CSSMatrixComponent:true,CSSRotation:true,CSSScale:true,CSSSkew:true,CSSTranslation:true,CSSTransformComponent:false,CSSTransformValue:true,CSSUnparsedValue:true,DataTransferItemList:true,HTMLDivElement:true,XMLDocument:true,Document:false,DOMException:true,DOMImplementation:true,ClientRectList:true,DOMRectList:true,DOMRectReadOnly:false,DOMStringList:true,DOMTokenList:true,Element:false,AbortPaymentEvent:true,AnimationEvent:true,AnimationPlaybackEvent:true,ApplicationCacheErrorEvent:true,BackgroundFetchClickEvent:true,BackgroundFetchEvent:true,BackgroundFetchFailEvent:true,BackgroundFetchedEvent:true,BeforeInstallPromptEvent:true,BeforeUnloadEvent:true,BlobEvent:true,CanMakePaymentEvent:true,ClipboardEvent:true,CloseEvent:true,CustomEvent:true,DeviceMotionEvent:true,DeviceOrientationEvent:true,ErrorEvent:true,ExtendableEvent:true,ExtendableMessageEvent:true,FetchEvent:true,FontFaceSetLoadEvent:true,ForeignFetchEvent:true,GamepadEvent:true,HashChangeEvent:true,InstallEvent:true,MediaEncryptedEvent:true,MediaKeyMessageEvent:true,MediaQueryListEvent:true,MediaStreamEvent:true,MediaStreamTrackEvent:true,MessageEvent:true,MIDIConnectionEvent:true,MIDIMessageEvent:true,MutationEvent:true,NotificationEvent:true,PageTransitionEvent:true,PaymentRequestEvent:true,PaymentRequestUpdateEvent:true,PopStateEvent:true,PresentationConnectionAvailableEvent:true,PresentationConnectionCloseEvent:true,ProgressEvent:true,PromiseRejectionEvent:true,PushEvent:true,RTCDataChannelEvent:true,RTCDTMFToneChangeEvent:true,RTCPeerConnectionIceEvent:true,RTCTrackEvent:true,SecurityPolicyViolationEvent:true,SensorErrorEvent:true,SpeechRecognitionError:true,SpeechRecognitionEvent:true,SpeechSynthesisEvent:true,StorageEvent:true,SyncEvent:true,TrackEvent:true,TransitionEvent:true,WebKitTransitionEvent:true,VRDeviceEvent:true,VRDisplayEvent:true,VRSessionEvent:true,MojoInterfaceRequestEvent:true,ResourceProgressEvent:true,USBConnectionEvent:true,IDBVersionChangeEvent:true,AudioProcessingEvent:true,OfflineAudioCompletionEvent:true,WebGLContextEvent:true,Event:false,InputEvent:false,AbsoluteOrientationSensor:true,Accelerometer:true,AccessibleNode:true,AmbientLightSensor:true,Animation:true,ApplicationCache:true,DOMApplicationCache:true,OfflineResourceList:true,BackgroundFetchRegistration:true,BatteryManager:true,BroadcastChannel:true,CanvasCaptureMediaStreamTrack:true,DedicatedWorkerGlobalScope:true,EventSource:true,FileReader:true,FontFaceSet:true,Gyroscope:true,XMLHttpRequest:true,XMLHttpRequestEventTarget:true,XMLHttpRequestUpload:true,LinearAccelerationSensor:true,Magnetometer:true,MediaDevices:true,MediaKeySession:true,MediaQueryList:true,MediaRecorder:true,MediaSource:true,MediaStream:true,MediaStreamTrack:true,MessagePort:true,MIDIAccess:true,MIDIInput:true,MIDIOutput:true,MIDIPort:true,NetworkInformation:true,Notification:true,OffscreenCanvas:true,OrientationSensor:true,PaymentRequest:true,Performance:true,PermissionStatus:true,PresentationAvailability:true,PresentationConnection:true,PresentationConnectionList:true,PresentationRequest:true,RelativeOrientationSensor:true,RemotePlayback:true,RTCDataChannel:true,DataChannel:true,RTCDTMFSender:true,RTCPeerConnection:true,webkitRTCPeerConnection:true,mozRTCPeerConnection:true,ScreenOrientation:true,Sensor:true,ServiceWorker:true,ServiceWorkerContainer:true,ServiceWorkerGlobalScope:true,ServiceWorkerRegistration:true,SharedWorker:true,SharedWorkerGlobalScope:true,SpeechRecognition:true,SpeechSynthesis:true,SpeechSynthesisUtterance:true,VR:true,VRDevice:true,VRDisplay:true,VRSession:true,VisualViewport:true,WebSocket:true,Worker:true,WorkerGlobalScope:true,WorkerPerformance:true,BluetoothDevice:true,BluetoothRemoteGATTCharacteristic:true,Clipboard:true,MojoInterfaceInterceptor:true,USB:true,IDBDatabase:true,IDBOpenDBRequest:true,IDBVersionChangeRequest:true,IDBRequest:true,IDBTransaction:true,AnalyserNode:true,RealtimeAnalyserNode:true,AudioBufferSourceNode:true,AudioDestinationNode:true,AudioNode:true,AudioScheduledSourceNode:true,AudioWorkletNode:true,BiquadFilterNode:true,ChannelMergerNode:true,AudioChannelMerger:true,ChannelSplitterNode:true,AudioChannelSplitter:true,ConstantSourceNode:true,ConvolverNode:true,DelayNode:true,DynamicsCompressorNode:true,GainNode:true,AudioGainNode:true,IIRFilterNode:true,MediaElementAudioSourceNode:true,MediaStreamAudioDestinationNode:true,MediaStreamAudioSourceNode:true,OscillatorNode:true,Oscillator:true,PannerNode:true,AudioPannerNode:true,webkitAudioPannerNode:true,ScriptProcessorNode:true,JavaScriptAudioNode:true,StereoPannerNode:true,WaveShaperNode:true,EventTarget:false,File:true,FileList:true,FileWriter:true,HTMLFormElement:true,Gamepad:true,HTMLHeadElement:true,History:true,HTMLCollection:true,HTMLFormControlsCollection:true,HTMLOptionsCollection:true,HTMLDocument:true,ImageData:true,HTMLImageElement:true,KeyboardEvent:true,Location:true,HTMLAudioElement:true,HTMLMediaElement:false,MediaList:true,MIDIInputMap:true,MIDIOutputMap:true,MimeType:true,MimeTypeArray:true,PointerEvent:true,MouseEvent:false,DragEvent:false,DocumentFragment:true,ShadowRoot:true,DocumentType:true,Node:false,NodeList:true,RadioNodeList:true,Plugin:true,PluginArray:true,Range:true,RTCStatsReport:true,HTMLSelectElement:true,SourceBuffer:true,SourceBufferList:true,SpeechGrammar:true,SpeechGrammarList:true,SpeechRecognitionResult:true,Storage:true,CSSStyleSheet:true,StyleSheet:true,HTMLTableCellElement:true,HTMLTableDataCellElement:true,HTMLTableHeaderCellElement:true,HTMLTableElement:true,HTMLTableRowElement:true,HTMLTableSectionElement:true,HTMLTemplateElement:true,TextTrack:true,TextTrackCue:true,VTTCue:true,TextTrackCueList:true,TextTrackList:true,TimeRanges:true,Touch:true,TouchEvent:true,TouchList:true,TrackDefaultList:true,CompositionEvent:true,FocusEvent:true,TextEvent:true,UIEvent:false,URL:true,HTMLVideoElement:true,VideoTrackList:true,WheelEvent:true,Window:true,DOMWindow:true,Attr:true,CSSRuleList:true,ClientRect:true,DOMRect:true,GamepadList:true,NamedNodeMap:true,MozNamedAttrMap:true,SpeechRecognitionResultList:true,StyleSheetList:true,SVGLength:true,SVGLengthList:true,SVGNumber:true,SVGNumberList:true,SVGPointList:true,SVGScriptElement:true,SVGStringList:true,SVGAElement:true,SVGAnimateElement:true,SVGAnimateMotionElement:true,SVGAnimateTransformElement:true,SVGAnimationElement:true,SVGCircleElement:true,SVGClipPathElement:true,SVGDefsElement:true,SVGDescElement:true,SVGDiscardElement:true,SVGEllipseElement:true,SVGFEBlendElement:true,SVGFEColorMatrixElement:true,SVGFEComponentTransferElement:true,SVGFECompositeElement:true,SVGFEConvolveMatrixElement:true,SVGFEDiffuseLightingElement:true,SVGFEDisplacementMapElement:true,SVGFEDistantLightElement:true,SVGFEFloodElement:true,SVGFEFuncAElement:true,SVGFEFuncBElement:true,SVGFEFuncGElement:true,SVGFEFuncRElement:true,SVGFEGaussianBlurElement:true,SVGFEImageElement:true,SVGFEMergeElement:true,SVGFEMergeNodeElement:true,SVGFEMorphologyElement:true,SVGFEOffsetElement:true,SVGFEPointLightElement:true,SVGFESpecularLightingElement:true,SVGFESpotLightElement:true,SVGFETileElement:true,SVGFETurbulenceElement:true,SVGFilterElement:true,SVGForeignObjectElement:true,SVGGElement:true,SVGGeometryElement:true,SVGGraphicsElement:true,SVGImageElement:true,SVGLineElement:true,SVGLinearGradientElement:true,SVGMarkerElement:true,SVGMaskElement:true,SVGMetadataElement:true,SVGPathElement:true,SVGPatternElement:true,SVGPolygonElement:true,SVGPolylineElement:true,SVGRadialGradientElement:true,SVGRectElement:true,SVGSetElement:true,SVGStopElement:true,SVGStyleElement:true,SVGSVGElement:true,SVGSwitchElement:true,SVGSymbolElement:true,SVGTSpanElement:true,SVGTextContentElement:true,SVGTextElement:true,SVGTextPathElement:true,SVGTextPositioningElement:true,SVGTitleElement:true,SVGUseElement:true,SVGViewElement:true,SVGGradientElement:true,SVGComponentTransferFunctionElement:true,SVGFEDropShadowElement:true,SVGMPathElement:true,SVGElement:false,SVGTransform:true,SVGTransformList:true,AudioBuffer:true,AudioParamMap:true,AudioTrackList:true,AudioContext:true,webkitAudioContext:true,BaseAudioContext:false,OfflineAudioContext:true,WebGLBuffer:true,WebGLFramebuffer:true,WebGLProgram:true,WebGL2RenderingContext:true,WebGLShader:true,WebGLTexture:true,WebGLUniformLocation:true,SQLResultSetRowList:true})
H.dh.$nativeSuperclassTag="ArrayBufferView"
H.cu.$nativeSuperclassTag="ArrayBufferView"
H.cv.$nativeSuperclassTag="ArrayBufferView"
H.cb.$nativeSuperclassTag="ArrayBufferView"
H.cw.$nativeSuperclassTag="ArrayBufferView"
H.cx.$nativeSuperclassTag="ArrayBufferView"
H.di.$nativeSuperclassTag="ArrayBufferView"
W.cy.$nativeSuperclassTag="EventTarget"
W.cz.$nativeSuperclassTag="EventTarget"
W.cA.$nativeSuperclassTag="EventTarget"
W.cB.$nativeSuperclassTag="EventTarget"})()
convertAllToFastObject(w)
convertToFastObject($);(function(a){if(typeof document==="undefined"){a(null)
return}if(typeof document.currentScript!='undefined'){a(document.currentScript)
return}var u=document.scripts
function onLoad(b){for(var s=0;s<u.length;++s)u[s].removeEventListener("load",onLoad,false)
a(b.target)}for(var t=0;t<u.length;++t)u[t].addEventListener("load",onLoad,false)})(function(a){v.currentScript=a
if(typeof dartMainRunner==="function")dartMainRunner(D.kZ,[])
else D.kZ([])})})()
//# sourceMappingURL=test.dart.js.map
