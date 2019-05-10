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
a[c]=function(){a[c]=function(){H.mp(b)}
var t
var s=d
try{if(a[b]===u){t=a[b]=s
t=a[b]=d()}else t=a[b]}finally{if(t===s)a[b]=null
a[c]=function(){return this[b]}}return t}}function makeConstList(a){a.immutable$list=Array
a.fixed$length=Array
return a}function convertToFastObject(a){function t(){}t.prototype=a
new t()
return a}function convertAllToFastObject(a){for(var u=0;u<a.length;++u)convertToFastObject(a[u])}var y=0
function tearOffGetter(a,b,c,d,e){return e?new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+d+y+++"(receiver) {"+"if (c === null) c = "+"H.jy"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, true, name);"+"return new c(this, funcs[0], receiver, name);"+"}")(a,b,c,d,H,null):new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+d+y+++"() {"+"if (c === null) c = "+"H.jy"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, false, name);"+"return new c(this, funcs[0], null, name);"+"}")(a,b,c,d,H,null)}function tearOff(a,b,c,d,e,f){var u=null
return d?function(){if(u===null)u=H.jy(this,a,b,c,true,false,e).prototype
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
if(w[u][a])return w[u][a]}}var C={},H={jl:function jl(a){this.a=a},
lf:function(){return new P.ht("No element")},
Z:function Z(a){this.a=a},
fe:function fe(){},
dh:function dh(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=null
_.$ti=d},
fI:function fI(a,b,c){this.a=a
this.b=b
this.$ti=c},
fJ:function fJ(a,b,c){var _=this
_.a=null
_.b=a
_.c=b
_.$ti=c},
ii:function ii(a,b,c){this.a=a
this.b=b
this.$ti=c},
ij:function ij(a,b,c){this.a=a
this.b=b
this.$ti=c},
bD:function bD(){},
dP:function dP(){},
dO:function dO(){},
bS:function(a){var u,t
u=H.R(v.mangledGlobalNames[a])
if(typeof u==="string")return u
t="minified:"+a
return t},
m9:function(a){return v.types[H.a4(a)]},
me:function(a,b){var u
if(b!=null){u=b.x
if(u!=null)return u}return!!J.W(a).$iC},
l:function(a){var u
if(typeof a==="string")return a
if(typeof a==="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
u=J.aq(a)
if(typeof u!=="string")throw H.h(H.bu(a))
return u},
lz:function(a){var u,t,s
u=a.$reflectionInfo
if(u==null)return
u=J.fv(u)
t=u[0]
s=u[1]
return new H.ha(a,u,(t&2)===2,t>>2,s>>1,(s&1)===1,u[2])},
ci:function(a){var u=a.$identityHash
if(u==null){u=Math.random()*0x3fffffff|0
a.$identityHash=u}return u},
bH:function(a){return H.lp(a)+H.jw(H.bv(a),0,null)},
lp:function(a){var u,t,s,r,q,p,o,n,m
u=J.W(a)
t=u.constructor
if(typeof t=="function"){s=t.name
r=typeof s==="string"?s:null}else r=null
q=r==null
if(q||u===C.E||!!u.$idN){p=C.w(a)
if(q)r=p
if(p==="Object"){o=a.constructor
if(typeof o=="function"){n=String(o).match(/^\s*function\s*([\w$]*)\s*\(/)
m=n==null?null:n[1]
if(typeof m==="string"&&/^\w+$/.test(m))r=m}}return r}r=r
return H.bS(r.length>1&&C.j.b4(r,0)===36?C.j.cz(r,1):r)},
k3:function(a){var u,t,s,r,q
u=a.length
if(u<=500)return String.fromCharCode.apply(null,a)
for(t="",s=0;s<u;s=r){r=s+500
q=r<u?r:u
t+=String.fromCharCode.apply(null,a.slice(s,q))}return t},
ly:function(a){var u,t,s,r
u=H.c([],[P.z])
for(t=a.length,s=0;s<a.length;a.length===t||(0,H.A)(a),++s){r=a[s]
if(typeof r!=="number"||Math.floor(r)!==r)throw H.h(H.bu(r))
if(r<=65535)C.a.h(u,r)
else if(r<=1114111){C.a.h(u,55296+(C.i.b8(r-65536,10)&1023))
C.a.h(u,56320+(r&1023))}else throw H.h(H.bu(r))}return H.k3(u)},
k4:function(a){var u,t,s
for(u=a.length,t=0;t<u;++t){s=a[t]
if(typeof s!=="number"||Math.floor(s)!==s)throw H.h(H.bu(s))
if(s<0)throw H.h(H.bu(s))
if(s>65535)return H.ly(a)}return H.k3(a)},
lx:function(a){var u
if(a<=65535)return String.fromCharCode(a)
if(a<=1114111){u=a-65536
return String.fromCharCode((55296|C.i.b8(u,10))>>>0,56320|u&1023)}throw H.h(P.ar(a,0,1114111,null,null))},
bG:function(a){if(a.date===void 0)a.date=new Date(a.a)
return a.date},
lw:function(a){var u=H.bG(a).getFullYear()+0
return u},
lu:function(a){var u=H.bG(a).getMonth()+1
return u},
lq:function(a){var u=H.bG(a).getDate()+0
return u},
lr:function(a){var u=H.bG(a).getHours()+0
return u},
lt:function(a){var u=H.bG(a).getMinutes()+0
return u},
lv:function(a){var u=H.bG(a).getSeconds()+0
return u},
ls:function(a){var u=H.bG(a).getMilliseconds()+0
return u},
D:function(a){throw H.h(H.bu(a))},
i:function(a,b){if(a==null)J.bV(a)
throw H.h(H.cN(a,b))},
cN:function(a,b){var u,t
if(typeof b!=="number"||Math.floor(b)!==b)return new P.aC(!0,b,"index",null)
u=H.a4(J.bV(a))
if(!(b<0)){if(typeof u!=="number")return H.D(u)
t=b>=u}else t=!0
if(t)return P.S(b,a,"index",null,u)
return P.h9(b,"index",null)},
m6:function(a,b,c){if(a>c)return new P.bI(0,c,!0,a,"start","Invalid value")
if(b!=null)if(b<a||b>c)return new P.bI(a,c,!0,b,"end","Invalid value")
return new P.aC(!0,b,"end",null)},
bu:function(a){return new P.aC(!0,a,null,null)},
m2:function(a){if(typeof a!=="number")throw H.h(H.bu(a))
return a},
h:function(a){var u
if(a==null)a=new P.dr()
u=new Error()
u.dartException=a
if("defineProperty" in Object){Object.defineProperty(u,"message",{get:H.kH})
u.name=""}else u.toString=H.kH
return u},
kH:function(){return J.aq(this.dartException)},
t:function(a){throw H.h(a)},
A:function(a){throw H.h(P.c0(a))},
aX:function(a){var u,t,s,r,q,p
a=a.replace(String({}),'$receiver$').replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
u=a.match(/\\\$[a-zA-Z]+\\\$/g)
if(u==null)u=H.c([],[P.o])
t=u.indexOf("\\$arguments\\$")
s=u.indexOf("\\$argumentsExpr\\$")
r=u.indexOf("\\$expr\\$")
q=u.indexOf("\\$method\\$")
p=u.indexOf("\\$receiver\\$")
return new H.hQ(a.replace(new RegExp('\\\\\\$arguments\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$argumentsExpr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$expr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$method\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$receiver\\\\\\$','g'),'((?:x|[^x])*)'),t,s,r,q,p)},
hR:function(a){return function($expr$){var $argumentsExpr$='$arguments$'
try{$expr$.$method$($argumentsExpr$)}catch(u){return u.message}}(a)},
kd:function(a){return function($expr$){try{$expr$.$method$}catch(u){return u.message}}(a)},
jZ:function(a,b){return new H.h1(a,b==null?null:b.method)},
jm:function(a,b){var u,t
u=b==null
t=u?null:b.method
return new H.fy(a,t,u?null:b.receiver)},
ba:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g
u=new H.ja(a)
if(a==null)return
if(typeof a!=="object")return a
if("dartException" in a)return u.$1(a.dartException)
else if(!("message" in a))return a
t=a.message
if("number" in a&&typeof a.number=="number"){s=a.number
r=s&65535
if((C.i.b8(s,16)&8191)===10)switch(r){case 438:return u.$1(H.jm(H.l(t)+" (Error "+r+")",null))
case 445:case 5007:return u.$1(H.jZ(H.l(t)+" (Error "+r+")",null))}}if(a instanceof TypeError){q=$.kL()
p=$.kM()
o=$.kN()
n=$.kO()
m=$.kR()
l=$.kS()
k=$.kQ()
$.kP()
j=$.kU()
i=$.kT()
h=q.a9(t)
if(h!=null)return u.$1(H.jm(H.R(t),h))
else{h=p.a9(t)
if(h!=null){h.method="call"
return u.$1(H.jm(H.R(t),h))}else{h=o.a9(t)
if(h==null){h=n.a9(t)
if(h==null){h=m.a9(t)
if(h==null){h=l.a9(t)
if(h==null){h=k.a9(t)
if(h==null){h=n.a9(t)
if(h==null){h=j.a9(t)
if(h==null){h=i.a9(t)
g=h!=null}else g=!0}else g=!0}else g=!0}else g=!0}else g=!0}else g=!0}else g=!0
if(g)return u.$1(H.jZ(H.R(t),h))}}return u.$1(new H.i1(typeof t==="string"?t:""))}if(a instanceof RangeError){if(typeof t==="string"&&t.indexOf("call stack")!==-1)return new P.dB()
t=function(b){try{return String(b)}catch(f){}return null}(a)
return u.$1(new P.aC(!1,null,null,typeof t==="string"?t.replace(/^RangeError:\s*/,""):t))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof t==="string"&&t==="too much recursion")return new P.dB()
return a},
bP:function(a){var u
if(a==null)return new H.es(a)
u=a.$cachedTrace
if(u!=null)return u
return a.$cachedTrace=new H.es(a)},
m8:function(a,b){var u,t,s,r
u=a.length
for(t=0;t<u;t=r){s=t+1
r=s+1
b.a_(0,a[t],a[s])}return b},
md:function(a,b,c,d,e,f){H.n(a,"$iji")
switch(H.a4(b)){case 0:return a.$0()
case 1:return a.$1(c)
case 2:return a.$2(c,d)
case 3:return a.$3(c,d,e)
case 4:return a.$4(c,d,e,f)}throw H.h(P.r("Unsupported number of arguments for wrapped closure"))},
bM:function(a,b){var u
H.a4(b)
if(a==null)return
u=a.$identity
if(!!u)return u
u=function(c,d,e){return function(f,g,h,i){return e(c,d,f,g,h,i)}}(a,b,H.md)
a.$identity=u
return u},
l8:function(a,b,c,d,e,f,g){var u,t,s,r,q,p,o,n,m,l,k,j,i
u=b[0]
t=u.$callName
if(!!J.W(d).$ib){u.$reflectionInfo=d
s=H.lz(u).r}else s=d
r=e?Object.create(new H.hu().constructor.prototype):Object.create(new H.bW(null,null,null,null).constructor.prototype)
r.$initialize=r.constructor
if(e)q=function static_tear_off(){this.$initialize()}
else{p=$.aD
if(typeof p!=="number")return p.D()
$.aD=p+1
p=new Function("a,b,c,d"+p,"this.$initialize(a,b,c,d"+p+")")
q=p}r.constructor=q
q.prototype=r
if(!e){o=H.jM(a,u,f)
o.$reflectionInfo=d}else{r.$static_name=g
o=u}if(typeof s=="number")n=function(h,a0){return function(){return h(a0)}}(H.m9,s)
else if(typeof s=="function")if(e)n=s
else{m=f?H.jK:H.jd
n=function(h,a0){return function(){return h.apply({$receiver:a0(this)},arguments)}}(s,m)}else throw H.h("Error in reflectionInfo.")
r.$S=n
r[t]=o
for(l=o,k=1;k<b.length;++k){j=b[k]
i=j.$callName
if(i!=null){j=e?j:H.jM(a,j,f)
r[i]=j}if(k===c){j.$reflectionInfo=d
l=j}}r.$C=l
r.$R=u.$R
r.$D=u.$D
return q},
l5:function(a,b,c,d){var u=H.jd
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,u)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,u)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,u)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,u)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,u)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,u)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,u)}},
jM:function(a,b,c){var u,t,s,r,q,p,o
if(c)return H.l7(a,b)
u=b.$stubName
t=b.length
s=a[u]
r=b==null?s==null:b===s
q=!r||t>=27
if(q)return H.l5(t,!r,u,b)
if(t===0){r=$.aD
if(typeof r!=="number")return r.D()
$.aD=r+1
p="self"+r
r="return function(){var "+p+" = this."
q=$.bX
if(q==null){q=H.eZ("self")
$.bX=q}return new Function(r+H.l(q)+";return "+p+"."+H.l(u)+"();}")()}o="abcdefghijklmnopqrstuvwxyz".split("").splice(0,t).join(",")
r=$.aD
if(typeof r!=="number")return r.D()
$.aD=r+1
o+=r
r="return function("+o+"){return this."
q=$.bX
if(q==null){q=H.eZ("self")
$.bX=q}return new Function(r+H.l(q)+"."+H.l(u)+"("+o+");}")()},
l6:function(a,b,c,d){var u,t
u=H.jd
t=H.jK
switch(b?-1:a){case 0:throw H.h(H.lC("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,u,t)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,u,t)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,u,t)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,u,t)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,u,t)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,u,t)
default:return function(e,f,g,h){return function(){h=[g(this)]
Array.prototype.push.apply(h,arguments)
return e.apply(f(this),h)}}(d,u,t)}},
l7:function(a,b){var u,t,s,r,q,p,o,n
u=$.bX
if(u==null){u=H.eZ("self")
$.bX=u}t=$.jJ
if(t==null){t=H.eZ("receiver")
$.jJ=t}s=b.$stubName
r=b.length
q=a[s]
p=b==null?q==null:b===q
o=!p||r>=28
if(o)return H.l6(r,!p,s,b)
if(r===1){u="return function(){return this."+H.l(u)+"."+H.l(s)+"(this."+H.l(t)+");"
t=$.aD
if(typeof t!=="number")return t.D()
$.aD=t+1
return new Function(u+t+"}")()}n="abcdefghijklmnopqrstuvwxyz".split("").splice(0,r-1).join(",")
u="return function("+n+"){return this."+H.l(u)+"."+H.l(s)+"(this."+H.l(t)+", "+n+");"
t=$.aD
if(typeof t!=="number")return t.D()
$.aD=t+1
return new Function(u+t+"}")()},
jy:function(a,b,c,d,e,f,g){return H.l8(a,b,H.a4(c),d,!!e,!!f,g)},
jd:function(a){return a.a},
jK:function(a){return a.c},
eZ:function(a){var u,t,s,r,q
u=new H.bW("self","target","receiver","name")
t=J.fv(Object.getOwnPropertyNames(u))
for(s=t.length,r=0;r<s;++r){q=t[r]
if(u[q]===a)return q}},
R:function(a){if(a==null)return a
if(typeof a==="string")return a
throw H.h(H.aA(a,"String"))},
n3:function(a){if(a==null)return a
if(typeof a==="number")return a
throw H.h(H.aA(a,"double"))},
mj:function(a){if(a==null)return a
if(typeof a==="number")return a
throw H.h(H.aA(a,"num"))},
kw:function(a){if(a==null)return a
if(typeof a==="boolean")return a
throw H.h(H.aA(a,"bool"))},
a4:function(a){if(a==null)return a
if(typeof a==="number"&&Math.floor(a)===a)return a
throw H.h(H.aA(a,"int"))},
kD:function(a,b){throw H.h(H.aA(a,H.bS(H.R(b).substring(2))))},
ml:function(a,b){throw H.h(H.l4(a,H.bS(H.R(b).substring(2))))},
n:function(a,b){if(a==null)return a
if((typeof a==="object"||typeof a==="function")&&J.W(a)[b])return a
H.kD(a,b)},
f:function(a,b){var u
if(a!=null)u=(typeof a==="object"||typeof a==="function")&&J.W(a)[b]
else u=!0
if(u)return a
H.ml(a,b)},
jC:function(a){if(a==null)return a
if(!!J.W(a).$ib)return a
throw H.h(H.aA(a,"List<dynamic>"))},
mf:function(a,b){var u
if(a==null)return a
u=J.W(a)
if(!!u.$ib)return a
if(u[b])return a
H.kD(a,b)},
kx:function(a){var u
if("$S" in a){u=a.$S
if(typeof u=="number")return v.types[H.a4(u)]
else return a.$S()}return},
eO:function(a,b){var u
if(a==null)return!1
if(typeof a=="function")return!0
u=H.kx(J.W(a))
if(u==null)return!1
return H.kn(u,null,b,null)},
m:function(a,b){var u,t
if(a==null)return a
if($.jt)return a
$.jt=!0
try{if(H.eO(a,b))return a
u=H.j8(b)
t=H.aA(a,u)
throw H.h(t)}finally{$.jt=!1}},
jz:function(a,b){if(a!=null&&!H.jx(a,b))H.t(H.aA(a,H.j8(b)))
return a},
aA:function(a,b){return new H.hS("TypeError: "+P.fh(a)+": type '"+H.kr(a)+"' is not a subtype of type '"+b+"'")},
l4:function(a,b){return new H.f_("CastError: "+P.fh(a)+": type '"+H.kr(a)+"' is not a subtype of type '"+b+"'")},
kr:function(a){var u,t
u=J.W(a)
if(!!u.$ibZ){t=H.kx(u)
if(t!=null)return H.j8(t)
return"Closure"}return H.bH(a)},
mp:function(a){throw H.h(new P.f7(H.R(a)))},
lC:function(a){return new H.hh(a)},
ky:function(a){return v.getIsolateTag(a)},
c:function(a,b){a.$ti=b
return a},
bv:function(a){if(a==null)return
return a.$ti},
n4:function(a,b,c){return H.bR(a["$a"+H.l(c)],H.bv(b))},
cO:function(a,b,c,d){var u
H.R(c)
H.a4(d)
u=H.bR(a["$a"+H.l(c)],H.bv(b))
return u==null?null:u[d]},
av:function(a,b,c){var u
H.R(b)
H.a4(c)
u=H.bR(a["$a"+H.l(b)],H.bv(a))
return u==null?null:u[c]},
w:function(a,b){var u
H.a4(b)
u=H.bv(a)
return u==null?null:u[b]},
j8:function(a){return H.bt(a,null)},
bt:function(a,b){var u,t
H.k(b,"$ib",[P.o],"$ab")
if(a==null)return"dynamic"
if(a===-1)return"void"
if(typeof a==="object"&&a!==null&&a.constructor===Array)return H.bS(a[0].name)+H.jw(a,1,b)
if(typeof a=="function")return H.bS(a.name)
if(a===-2)return"dynamic"
if(typeof a==="number"){H.a4(a)
if(b==null||a<0||a>=b.length)return"unexpected-generic-index:"+a
u=b.length
t=u-a-1
if(t<0||t>=u)return H.i(b,t)
return H.l(b[t])}if('func' in a)return H.lT(a,b)
if('futureOr' in a)return"FutureOr<"+H.bt("type" in a?a.type:null,b)+">"
return"unknown-reified-type"},
lT:function(a,b){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c
u=[P.o]
H.k(b,"$ib",u,"$ab")
if("bounds" in a){t=a.bounds
if(b==null){b=H.c([],u)
s=null}else s=b.length
r=b.length
for(q=t.length,p=q;p>0;--p)C.a.h(b,"T"+(r+p))
for(o="<",n="",p=0;p<q;++p,n=", "){o+=n
u=b.length
m=u-p-1
if(m<0)return H.i(b,m)
o=C.j.D(o,b[m])
l=t[p]
if(l!=null&&l!==P.M)o+=" extends "+H.bt(l,b)}o+=">"}else{o=""
s=null}k=!!a.v?"void":H.bt(a.ret,b)
if("args" in a){j=a.args
for(u=j.length,i="",h="",g=0;g<u;++g,h=", "){f=j[g]
i=i+h+H.bt(f,b)}}else{i=""
h=""}if("opt" in a){e=a.opt
i+=h+"["
for(u=e.length,h="",g=0;g<u;++g,h=", "){f=e[g]
i=i+h+H.bt(f,b)}i+="]"}if("named" in a){d=a.named
i+=h+"{"
for(u=H.m7(d),m=u.length,h="",g=0;g<m;++g,h=", "){c=H.R(u[g])
i=i+h+H.bt(d[c],b)+(" "+H.l(c))}i+="}"}if(s!=null)b.length=s
return o+"("+i+") => "+k},
jw:function(a,b,c){var u,t,s,r,q,p
H.k(c,"$ib",[P.o],"$ab")
if(a==null)return""
u=new P.bp("")
for(t=b,s="",r=!0,q="";t<a.length;++t,s=", "){u.a=q+s
p=a[t]
if(p!=null)r=!1
q=u.a+=H.bt(p,c)}return"<"+u.i(0)+">"},
bR:function(a,b){if(a==null)return b
a=a.apply(null,b)
if(a==null)return
if(typeof a==="object"&&a!==null&&a.constructor===Array)return a
if(typeof a=="function")return a.apply(null,b)
return b},
cM:function(a,b,c,d){var u,t
H.R(b)
H.jC(c)
H.R(d)
if(a==null)return!1
u=H.bv(a)
t=J.W(a)
if(t[b]==null)return!1
return H.ku(H.bR(t[d],u),null,c,null)},
k:function(a,b,c,d){H.R(b)
H.jC(c)
H.R(d)
if(a==null)return a
if(H.cM(a,b,c,d))return a
throw H.h(H.aA(a,function(e,f){return e.replace(/[^<,> ]+/g,function(g){return f[g]||g})}(H.bS(b.substring(2))+H.jw(c,0,null),v.mangledGlobalNames)))},
ku:function(a,b,c,d){var u,t
if(c==null)return!0
if(a==null){u=c.length
for(t=0;t<u;++t)if(!H.au(null,null,c[t],d))return!1
return!0}u=a.length
for(t=0;t<u;++t)if(!H.au(a[t],b,c[t],d))return!1
return!0},
n1:function(a,b,c){return a.apply(b,H.bR(J.W(b)["$a"+H.l(c)],H.bv(b)))},
kA:function(a){var u
if(typeof a==="number")return!1
if('futureOr' in a){u="type" in a?a.type:null
return a==null||a.name==="M"||a.name==="G"||a===-1||a===-2||H.kA(u)}return!1},
jx:function(a,b){var u,t
if(a==null)return b==null||b.name==="M"||b.name==="G"||b===-1||b===-2||H.kA(b)
if(b==null||b===-1||b.name==="M"||b===-2)return!0
if(typeof b=="object"){if('futureOr' in b)if(H.jx(a,"type" in b?b.type:null))return!0
if('func' in b)return H.eO(a,b)}u=J.W(a).constructor
t=H.bv(a)
if(t!=null){t=t.slice()
t.splice(0,0,u)
u=t}return H.au(u,null,b,null)},
B:function(a,b){if(a!=null&&!H.jx(a,b))throw H.h(H.aA(a,H.j8(b)))
return a},
au:function(a,b,c,d){var u,t,s,r,q,p,o,n,m
if(a===c)return!0
if(c==null||c===-1||c.name==="M"||c===-2)return!0
if(a===-2)return!0
if(a==null||a===-1||a.name==="M"||a===-2){if(typeof c==="number")return!1
if('futureOr' in c)return H.au(a,b,"type" in c?c.type:null,d)
return!1}if(typeof a==="number")return!1
if(typeof c==="number")return!1
if(a.name==="G")return!0
if('func' in c)return H.kn(a,b,c,d)
if('func' in a)return c.name==="ji"
u=typeof a==="object"&&a!==null&&a.constructor===Array
t=u?a[0]:a
if('futureOr' in c){s="type" in c?c.type:null
if('futureOr' in a)return H.au("type" in a?a.type:null,b,s,d)
else if(H.au(a,b,s,d))return!0
else{if(!('$i'+"c6" in t.prototype))return!1
r=t.prototype["$a"+"c6"]
q=H.bR(r,u?a.slice(1):null)
return H.au(typeof q==="object"&&q!==null&&q.constructor===Array?q[0]:null,b,s,d)}}p=typeof c==="object"&&c!==null&&c.constructor===Array
o=p?c[0]:c
if(o!==t){n=o.name
if(!('$i'+n in t.prototype))return!1
m=t.prototype["$a"+n]}else m=null
if(!p)return!0
u=u?a.slice(1):null
p=c.slice(1)
return H.ku(H.bR(m,u),b,p,d)},
kn:function(a,b,c,d){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g
if(!('func' in a))return!1
if("bounds" in a){if(!("bounds" in c))return!1
u=a.bounds
t=c.bounds
if(u.length!==t.length)return!1}else if("bounds" in c)return!1
if(!H.au(a.ret,b,c.ret,d))return!1
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
for(k=0;k<o;++k)if(!H.au(r[k],d,s[k],b))return!1
for(j=k,i=0;j<n;++i,++j)if(!H.au(r[j],d,q[i],b))return!1
for(j=0;j<l;++i,++j)if(!H.au(p[j],d,q[i],b))return!1
h=a.named
g=c.named
if(g==null)return!0
if(h==null)return!1
return H.mi(h,b,g,d)},
mi:function(a,b,c,d){var u,t,s,r
u=Object.getOwnPropertyNames(c)
for(t=u.length,s=0;s<t;++s){r=u[s]
if(!Object.hasOwnProperty.call(a,r))return!1
if(!H.au(c[r],d,a[r],b))return!1}return!0},
n2:function(a,b,c){Object.defineProperty(a,H.R(b),{value:c,enumerable:false,writable:true,configurable:true})},
mg:function(a){var u,t,s,r,q,p
u=H.R($.kz.$1(a))
t=$.j0[u]
if(t!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:t,enumerable:false,writable:true,configurable:true})
return t.i}s=$.j6[u]
if(s!=null)return s
r=v.interceptorsByTag[u]
if(r==null){u=H.R($.kt.$2(a,u))
if(u!=null){t=$.j0[u]
if(t!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:t,enumerable:false,writable:true,configurable:true})
return t.i}s=$.j6[u]
if(s!=null)return s
r=v.interceptorsByTag[u]}}if(r==null)return
s=r.prototype
q=u[0]
if(q==="!"){t=H.j7(s)
$.j0[u]=t
Object.defineProperty(a,v.dispatchPropertyName,{value:t,enumerable:false,writable:true,configurable:true})
return t.i}if(q==="~"){$.j6[u]=s
return s}if(q==="-"){p=H.j7(s)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}if(q==="+")return H.kC(a,s)
if(q==="*")throw H.h(P.ke(u))
if(v.leafTags[u]===true){p=H.j7(s)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}else return H.kC(a,s)},
kC:function(a,b){var u=Object.getPrototypeOf(a)
Object.defineProperty(u,v.dispatchPropertyName,{value:J.jD(b,u,null,null),enumerable:false,writable:true,configurable:true})
return b},
j7:function(a){return J.jD(a,!1,null,!!a.$iC)},
mh:function(a,b,c){var u=b.prototype
if(v.leafTags[a]===true)return H.j7(u)
else return J.jD(u,c,null,null)},
mb:function(){if(!0===$.jB)return
$.jB=!0
H.mc()},
mc:function(){var u,t,s,r,q,p,o,n
$.j0=Object.create(null)
$.j6=Object.create(null)
H.ma()
u=v.interceptorsByTag
t=Object.getOwnPropertyNames(u)
if(typeof window!="undefined"){window
s=function(){}
for(r=0;r<t.length;++r){q=t[r]
p=$.kE.$1(q)
if(p!=null){o=H.mh(q,u[q],p)
if(o!=null){Object.defineProperty(p,v.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
s.prototype=p}}}}for(r=0;r<t.length;++r){q=t[r]
if(/^[A-Za-z_]/.test(q)){n=u[q]
u["!"+q]=n
u["~"+q]=n
u["-"+q]=n
u["+"+q]=n
u["*"+q]=n}}},
ma:function(){var u,t,s,r,q,p,o
u=C.J()
u=H.bL(C.G,H.bL(C.L,H.bL(C.v,H.bL(C.v,H.bL(C.K,H.bL(C.H,H.bL(C.I(C.w),u)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){t=dartNativeDispatchHooksTransformer
if(typeof t=="function")t=[t]
if(t.constructor==Array)for(s=0;s<t.length;++s){r=t[s]
if(typeof r=="function")u=r(u)||u}}q=u.getTag
p=u.getUnknownTag
o=u.prototypeForTag
$.kz=new H.j3(q)
$.kt=new H.j4(p)
$.kE=new H.j5(o)},
bL:function(a,b){return a(b)||b},
lh:function(a,b,c,d){var u,t,s,r
u=b?"m":""
t=c?"":"i"
s=d?"g":""
r=function(e,f){try{return new RegExp(e,f)}catch(q){return q}}(a,u+t+s)
if(r instanceof RegExp)return r
throw H.h(new P.fq("Illegal RegExp pattern ("+String(r)+")",a,null))},
kF:function(a,b,c){var u=a.indexOf(b,c)
return u>=0},
kG:function(a,b,c){var u,t,s
if(b==="")if(a==="")return c
else{u=a.length
for(t=c,s=0;s<u;++s)t=t+a[s]+c
return t.charCodeAt(0)==0?t:t}else return a.replace(new RegExp(b.replace(/[[\]{}()*+?.\\^$|]/g,"\\$&"),'g'),c.replace(/\$/g,"$$$$"))},
ha:function ha(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.x=null},
hQ:function hQ(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
h1:function h1(a,b){this.a=a
this.b=b},
fy:function fy(a,b,c){this.a=a
this.b=b
this.c=c},
i1:function i1(a){this.a=a},
ja:function ja(a){this.a=a},
es:function es(a){this.a=a
this.b=null},
bZ:function bZ(){},
hC:function hC(){},
hu:function hu(){},
bW:function bW(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
hS:function hS(a){this.a=a},
f_:function f_(a){this.a=a},
hh:function hh(a){this.a=a},
aK:function aK(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
fB:function fB(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
dg:function dg(a,b){this.a=a
this.$ti=b},
fC:function fC(a,b,c){var _=this
_.a=a
_.b=b
_.d=_.c=null
_.$ti=c},
j3:function j3(a){this.a=a},
j4:function j4(a){this.a=a},
j5:function j5(a){this.a=a},
fx:function fx(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
cJ:function(a){return a},
bs:function(a,b,c){if(a>>>0!==a||a>=c)throw H.h(H.cN(b,a))},
lS:function(a,b,c){var u
if(!(a>>>0!==a))u=b>>>0!==b||a>b||b>c
else u=!0
if(u)throw H.h(H.m6(a,b,c))
return b},
cf:function cf(){},
dn:function dn(){},
ce:function ce(){},
dp:function dp(){},
fW:function fW(){},
fX:function fX(){},
fY:function fY(){},
fZ:function fZ(){},
h_:function h_(){},
dq:function dq(){},
h0:function h0(){},
cA:function cA(){},
cB:function cB(){},
cC:function cC(){},
cD:function cD(){},
m7:function(a){return J.jV(a?Object.keys(a):[],null)},
mk:function(a){if(typeof dartPrint=="function"){dartPrint(a)
return}if(typeof console=="object"&&typeof console.log!="undefined"){console.log(a)
return}if(typeof window=="object")return
if(typeof print=="function"){print(a)
return}throw"Unable to print message: "+String(a)}},J={
jD:function(a,b,c,d){return{i:a,p:b,e:c,x:d}},
j2:function(a){var u,t,s,r,q
u=a[v.dispatchPropertyName]
if(u==null)if($.jB==null){H.mb()
u=a[v.dispatchPropertyName]}if(u!=null){t=u.p
if(!1===t)return u.i
if(!0===t)return a
s=Object.getPrototypeOf(a)
if(t===s)return u.i
if(u.e===s)throw H.h(P.ke("Return interceptor for "+H.l(t(a,u))))}r=a.constructor
q=r==null?null:r[$.jF()]
if(q!=null)return q
q=H.mg(a)
if(q!=null)return q
if(typeof a=="function")return C.M
t=Object.getPrototypeOf(a)
if(t==null)return C.x
if(t===Object.prototype)return C.x
if(typeof r=="function"){Object.defineProperty(r,$.jF(),{value:C.p,enumerable:false,writable:true,configurable:true})
return C.p}return C.p},
lg:function(a,b){if(typeof a!=="number"||Math.floor(a)!==a)throw H.h(P.jc(a,"length","is not an integer"))
if(a<0||a>4294967295)throw H.h(P.ar(a,0,4294967295,"length",null))
return J.jV(new Array(a),b)},
jV:function(a,b){return J.fv(H.c(a,[b]))},
fv:function(a){H.jC(a)
a.fixed$length=Array
return a},
W:function(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.da.prototype
return J.d9.prototype}if(typeof a=="string")return J.c9.prototype
if(a==null)return J.db.prototype
if(typeof a=="boolean")return J.fw.prototype
if(a.constructor==Array)return J.aJ.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bn.prototype
return a}if(a instanceof P.M)return a
return J.j2(a)},
j1:function(a){if(typeof a=="string")return J.c9.prototype
if(a==null)return a
if(a.constructor==Array)return J.aJ.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bn.prototype
return a}if(a instanceof P.M)return a
return J.j2(a)},
jA:function(a){if(a==null)return a
if(a.constructor==Array)return J.aJ.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bn.prototype
return a}if(a instanceof P.M)return a
return J.j2(a)},
bO:function(a){if(a==null)return a
if(typeof a!="object"){if(typeof a=="function")return J.bn.prototype
return a}if(a instanceof P.M)return a
return J.j2(a)},
a5:function(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.W(a).q(a,b)},
kZ:function(a,b){if(typeof b==="number")if(a.constructor==Array||typeof a=="string"||H.me(a,a[v.dispatchPropertyName]))if(b>>>0===b&&b<a.length)return a[b]
return J.j1(a).j(a,b)},
l_:function(a,b,c){return J.bO(a).hr(a,b,c)},
l0:function(a,b,c,d){return J.bO(a).im(a,b,c,d)},
jH:function(a,b){return J.bO(a).Y(a,b)},
jb:function(a,b,c){return J.j1(a).iA(a,b,c)},
jI:function(a,b){return J.jA(a).C(a,b)},
l1:function(a,b){return J.jA(a).N(a,b)},
bw:function(a){return J.W(a).gE(a)},
bU:function(a){return J.jA(a).gT(a)},
bV:function(a){return J.j1(a).gk(a)},
l2:function(a,b){return J.bO(a).jh(a,b)},
aq:function(a){return J.W(a).i(a)},
a:function a(){},
fw:function fw(){},
db:function db(){},
dd:function dd(){},
h5:function h5(){},
dN:function dN(){},
bn:function bn(){},
aJ:function aJ(a){this.$ti=a},
jk:function jk(a){this.$ti=a},
ah:function ah(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=null
_.$ti=d},
dc:function dc(){},
da:function da(){},
d9:function d9(){},
c9:function c9(){}},P={
lJ:function(){var u,t,s
u={}
if(self.scheduleImmediate!=null)return P.m_()
if(self.MutationObserver!=null&&self.document!=null){t=self.document.createElement("div")
s=self.document.createElement("span")
u.a=null
new self.MutationObserver(H.bM(new P.il(u),1)).observe(t,{childList:true})
return new P.ik(u,t,s)}else if(self.setImmediate!=null)return P.m0()
return P.m1()},
lK:function(a){self.scheduleImmediate(H.bM(new P.im(H.m(a,{func:1,ret:-1})),0))},
lL:function(a){self.setImmediate(H.bM(new P.io(H.m(a,{func:1,ret:-1})),0))},
lM:function(a){P.jp(C.o,H.m(a,{func:1,ret:-1}))},
jp:function(a,b){var u
H.m(b,{func:1,ret:-1})
u=C.i.a0(a.a,1000)
return P.lP(u<0?0:u,b)},
kc:function(a,b){var u
H.m(b,{func:1,ret:-1,args:[P.aV]})
u=C.i.a0(a.a,1000)
return P.lQ(u<0?0:u,b)},
lP:function(a,b){var u=new P.ey(!0)
u.eL(a,b)
return u},
lQ:function(a,b){var u=new P.ey(!1)
u.eM(a,b)
return u},
lN:function(a,b){var u,t,s
b.a=1
try{a.e8(new P.iw(b),new P.ix(b),null)}catch(s){u=H.ba(s)
t=H.bP(s)
P.mm(new P.iy(b,u,t))}},
kj:function(a,b){var u,t
for(;u=a.a,u===2;)a=H.n(a.c,"$iat")
if(u>=4){t=b.bS()
b.a=a.a
b.c=a.c
P.cy(b,t)}else{t=H.n(b.c,"$ib_")
b.a=2
b.c=a
a.d4(t)}},
cy:function(a,b){var u,t,s,r,q,p,o,n,m,l,k,j,i,h
u={}
u.a=a
for(t=a;!0;){s={}
r=t.a===8
if(b==null){if(r){q=H.n(t.c,"$iad")
t=t.b
p=q.a
o=q.b
t.toString
P.iX(null,null,t,p,o)}return}for(;n=b.a,n!=null;b=n){b.a=null
P.cy(u.a,b)}t=u.a
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
if(k){H.n(m,"$iad")
t=t.b
p=m.a
o=m.b
t.toString
P.iX(null,null,t,p,o)
return}j=$.U
if(j!=l)$.U=l
else j=null
t=b.c
if(t===8)new P.iC(u,s,b,r).$0()
else if(p){if((t&1)!==0)new P.iB(s,b,m).$0()}else if((t&2)!==0)new P.iA(u,s,b).$0()
if(j!=null)$.U=j
t=s.b
if(!!J.W(t).$ic6){if(t.a>=4){i=H.n(o.c,"$ib_")
o.c=null
b=o.b7(i)
o.a=t.a
o.c=t.c
u.a=t
continue}else P.kj(t,o)
return}}h=b.b
i=H.n(h.c,"$ib_")
h.c=null
b=h.b7(i)
t=s.a
p=s.b
if(!t){H.B(p,H.w(h,0))
h.a=4
h.c=p}else{H.n(p,"$iad")
h.a=8
h.c=p}u.a=h
t=h}},
lW:function(a,b){if(H.eO(a,{func:1,args:[P.M,P.ak]}))return H.m(a,{func:1,ret:null,args:[P.M,P.ak]})
if(H.eO(a,{func:1,args:[P.M]}))return H.m(a,{func:1,ret:null,args:[P.M]})
throw H.h(P.jc(a,"onError","Error handler must accept one Object or one Object and a StackTrace as arguments, and return a a valid result"))},
lV:function(){var u,t
for(;u=$.bK,u!=null;){$.cL=null
t=u.b
$.bK=t
if(t==null)$.cK=null
u.a.$0()}},
lZ:function(){$.ju=!0
try{P.lV()}finally{$.cL=null
$.ju=!1
if($.bK!=null)$.jG().$1(P.kv())}},
kq:function(a){var u=new P.dX(H.m(a,{func:1,ret:-1}))
if($.bK==null){$.cK=u
$.bK=u
if(!$.ju)$.jG().$1(P.kv())}else{$.cK.b=u
$.cK=u}},
lY:function(a){var u,t,s
H.m(a,{func:1,ret:-1})
u=$.bK
if(u==null){P.kq(a)
$.cL=$.cK
return}t=new P.dX(a)
s=$.cL
if(s==null){t.b=u
$.cL=t
$.bK=t}else{t.b=s.b
s.b=t
$.cL=t
if(t.b==null)$.cK=t}},
mm:function(a){var u,t
u={func:1,ret:-1}
H.m(a,u)
t=$.U
if(C.k===t){P.iZ(null,null,C.k,a)
return}t.toString
P.iZ(null,null,t,H.m(t.bZ(a),u))},
kb:function(a,b){var u,t
u={func:1,ret:-1}
H.m(b,u)
t=$.U
if(t===C.k){t.toString
return P.jp(a,b)}return P.jp(a,H.m(t.bZ(b),u))},
lI:function(a,b){var u,t,s
u={func:1,ret:-1,args:[P.aV]}
H.m(b,u)
t=$.U
if(t===C.k){t.toString
return P.kc(a,b)}s=t.dg(b,P.aV)
$.U.toString
return P.kc(a,H.m(s,u))},
iX:function(a,b,c,d,e){var u={}
u.a=d
P.lY(new P.iY(u,e))},
ko:function(a,b,c,d,e){var u,t
H.m(d,{func:1,ret:e})
t=$.U
if(t===c)return d.$0()
$.U=c
u=t
try{t=d.$0()
return t}finally{$.U=u}},
kp:function(a,b,c,d,e,f,g){var u,t
H.m(d,{func:1,ret:f,args:[g]})
H.B(e,g)
t=$.U
if(t===c)return d.$1(e)
$.U=c
u=t
try{t=d.$1(e)
return t}finally{$.U=u}},
lX:function(a,b,c,d,e,f,g,h,i){var u,t
H.m(d,{func:1,ret:g,args:[h,i]})
H.B(e,h)
H.B(f,i)
t=$.U
if(t===c)return d.$2(e,f)
$.U=c
u=t
try{t=d.$2(e,f)
return t}finally{$.U=u}},
iZ:function(a,b,c,d){var u
H.m(d,{func:1,ret:-1})
u=C.k!==c
if(u)d=!(!u||!1)?c.bZ(d):c.is(d,-1)
P.kq(d)},
il:function il(a){this.a=a},
ik:function ik(a,b,c){this.a=a
this.b=b
this.c=c},
im:function im(a){this.a=a},
io:function io(a){this.a=a},
ey:function ey(a){this.a=a
this.b=null
this.c=0},
iS:function iS(a,b){this.a=a
this.b=b},
iR:function iR(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
b_:function b_(a,b,c,d,e){var _=this
_.a=null
_.b=a
_.c=b
_.d=c
_.e=d
_.$ti=e},
at:function at(a,b,c){var _=this
_.a=a
_.b=b
_.c=null
_.$ti=c},
iv:function iv(a,b){this.a=a
this.b=b},
iz:function iz(a,b){this.a=a
this.b=b},
iw:function iw(a){this.a=a},
ix:function ix(a){this.a=a},
iy:function iy(a,b,c){this.a=a
this.b=b
this.c=c},
iC:function iC(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
iD:function iD(a){this.a=a},
iB:function iB(a,b,c){this.a=a
this.b=b
this.c=c},
iA:function iA(a,b,c){this.a=a
this.b=b
this.c=c},
dX:function dX(a){this.a=a
this.b=null},
hx:function hx(){},
hz:function hz(a,b){this.a=a
this.b=b},
hA:function hA(a,b){this.a=a
this.b=b},
cl:function cl(){},
hy:function hy(){},
aV:function aV(){},
ad:function ad(a,b){this.a=a
this.b=b},
iU:function iU(){},
iY:function iY(a,b){this.a=a
this.b=b},
iK:function iK(){},
iM:function iM(a,b,c){this.a=a
this.b=b
this.c=c},
iL:function iL(a,b){this.a=a
this.b=b},
iN:function iN(a,b,c){this.a=a
this.b=b
this.c=c},
lj:function(a,b){return new H.aK([a,b])},
lk:function(a){return H.m8(a,new H.aK([null,null]))},
ll:function(a,b,c,d){return new P.iH([d])},
km:function(){var u=Object.create(null)
u["<non-identifier-key>"]=u
delete u["<non-identifier-key>"]
return u},
kl:function(a,b,c){var u=new P.iI(a,b,[c])
u.c=a.e
return u},
le:function(a,b,c){var u,t
if(P.jv(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}u=H.c([],[P.o])
t=$.cR()
C.a.h(t,a)
try{P.lU(a,u)}finally{if(0>=t.length)return H.i(t,-1)
t.pop()}t=P.k9(b,H.mf(u,"$ie"),", ")+c
return t.charCodeAt(0)==0?t:t},
jj:function(a,b,c){var u,t,s
if(P.jv(a))return b+"..."+c
u=new P.bp(b)
t=$.cR()
C.a.h(t,a)
try{s=u
s.a=P.k9(s.a,a,", ")}finally{if(0>=t.length)return H.i(t,-1)
t.pop()}u.a+=c
t=u.a
return t.charCodeAt(0)==0?t:t},
jv:function(a){var u,t
for(u=0;t=$.cR(),u<t.length;++u)if(a===t[u])return!0
return!1},
lU:function(a,b){var u,t,s,r,q,p,o,n,m,l
H.k(b,"$ib",[P.o],"$ab")
u=a.gT(a)
t=0
s=0
while(!0){if(!(t<80||s<3))break
if(!u.v())return
r=H.l(u.gI(u))
C.a.h(b,r)
t+=r.length+2;++s}if(!u.v()){if(s<=5)return
if(0>=b.length)return H.i(b,-1)
q=b.pop()
if(0>=b.length)return H.i(b,-1)
p=b.pop()}else{o=u.gI(u);++s
if(!u.v()){if(s<=4){C.a.h(b,H.l(o))
return}q=H.l(o)
if(0>=b.length)return H.i(b,-1)
p=b.pop()
t+=q.length+2}else{n=u.gI(u);++s
for(;u.v();o=n,n=m){m=u.gI(u);++s
if(s>100){while(!0){if(!(t>75&&s>3))break
if(0>=b.length)return H.i(b,-1)
t-=b.pop().length+2;--s}C.a.h(b,"...")
return}}p=H.l(o)
q=H.l(n)
t+=q.length+p.length+4}}if(s>b.length+2){t+=5
l="..."}else l=null
while(!0){if(!(t>80&&b.length>3))break
if(0>=b.length)return H.i(b,-1)
t-=b.pop().length+2
if(l==null){t+=5
l="..."}}if(l!=null)C.a.h(b,l)
C.a.h(b,p)
C.a.h(b,q)},
jX:function(a){var u,t
u={}
if(P.jv(a))return"{...}"
t=new P.bp("")
try{C.a.h($.cR(),a)
t.a+="{"
u.a=!0
J.l1(a,new P.fH(u,t))
t.a+="}"}finally{u=$.cR()
if(0>=u.length)return H.i(u,-1)
u.pop()}u=t.a
return u.charCodeAt(0)==0?u:u},
iH:function iH(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
cz:function cz(a){this.a=a
this.c=this.b=null},
iI:function iI(a,b,c){var _=this
_.a=a
_.b=b
_.d=_.c=null
_.$ti=c},
fD:function fD(){},
u:function u(){},
fG:function fG(){},
fH:function fH(a,b){this.a=a
this.b=b},
a9:function a9(){},
iO:function iO(){},
eb:function eb(){},
c_:function c_(){},
d_:function d_(){},
ff:function ff(){},
i4:function i4(a){this.a=a},
i5:function i5(){},
iT:function iT(a){this.b=this.a=0
this.c=a},
ld:function(a){if(a instanceof H.bZ)return a.i(0)
return"Instance of '"+H.bH(a)+"'"},
lm:function(a,b,c,d){var u,t
H.B(b,d)
u=J.lg(a,d)
if(a!==0&&!0)for(t=0;t<u.length;++t)C.a.a_(u,t,b)
return H.k(u,"$ib",[d],"$ab")},
jW:function(a,b,c){var u,t,s
u=[c]
t=H.c([],u)
for(s=J.bU(a);s.v();)C.a.h(t,H.B(s.gI(s),c))
if(b)return t
return H.k(J.fv(t),"$ib",u,"$ab")},
jo:function(a,b,c){var u,t
u=P.z
H.k(a,"$ie",[u],"$ae")
if(a.constructor===Array){H.k(a,"$iaJ",[u],"$aaJ")
t=a.length
c=P.k5(b,c,t,null,null,null)
return H.k4(b>0||c<t?C.a.es(a,b,c):a)}return P.lG(a,b,c)},
lG:function(a,b,c){var u,t,s
H.k(a,"$ie",[P.z],"$ae")
u=J.bU(a)
for(t=0;t<b;++t)if(!u.v())throw H.h(P.ar(b,0,t,null,null))
s=[]
for(;u.v();)s.push(u.gI(u))
return H.k4(s)},
lA:function(a,b,c){return new H.fx(a,H.lh(a,!1,!0,!1))},
k9:function(a,b,c){var u=J.bU(b)
if(!u.v())return a
if(c.length===0){do a+=H.l(u.gI(u))
while(u.v())}else{a+=H.l(u.gI(u))
for(;u.v();)a=a+c+H.l(u.gI(u))}return a},
lR:function(a,b,c,d){var u,t,s,r,q,p
H.k(a,"$ib",[P.z],"$ab")
if(c===C.y){u=$.kY().b
u=u.test(b)}else u=!1
if(u)return b
t=C.C.iB(H.B(b,H.av(c,"c_",0)))
for(u=t.length,s=0,r="";s<u;++s){q=t[s]
if(q<128){p=q>>>4
if(p>=8)return H.i(a,p)
p=(a[p]&1<<(q&15))!==0}else p=!1
if(p)r+=H.lx(q)
else r=r+"%"+"0123456789ABCDEF"[q>>>4&15]+"0123456789ABCDEF"[q&15]}return r.charCodeAt(0)==0?r:r},
l9:function(a){var u,t
u=Math.abs(a)
t=a<0?"-":""
if(u>=1000)return""+a
if(u>=100)return t+"0"+u
if(u>=10)return t+"00"+u
return t+"000"+u},
la:function(a){if(a>=100)return""+a
if(a>=10)return"0"+a
return"00"+a},
d1:function(a){if(a>=10)return""+a
return"0"+a},
jS:function(a,b,c,d,e,f){return new P.bh(864e8*a+36e8*b+6e7*e+1e6*f+1000*d+c)},
fh:function(a){if(typeof a==="number"||typeof a==="boolean"||null==a)return J.aq(a)
if(typeof a==="string")return JSON.stringify(a)
return P.ld(a)},
l3:function(a){return new P.aC(!1,null,null,a)},
jc:function(a,b,c){return new P.aC(!0,a,b,c)},
h9:function(a,b,c){return new P.bI(null,null,!0,a,b,"Value not in range")},
ar:function(a,b,c,d,e){return new P.bI(b,c,!0,a,d,"Invalid value")},
k5:function(a,b,c,d,e,f){if(0>a||a>c)throw H.h(P.ar(a,0,c,"start",f))
if(b!=null){if(a>b||b>c)throw H.h(P.ar(b,a,c,"end",f))
return b}return c},
S:function(a,b,c,d,e){var u=H.a4(e==null?J.bV(b):e)
return new P.fu(b,u,!0,a,c,"Index out of range")},
ao:function(a){return new P.i2(a)},
ke:function(a){return new P.i0(a)},
c0:function(a){return new P.f2(a)},
r:function(a){return new P.e4(a)},
bQ:function(a){H.mk(a)},
a3:function a3(){},
ai:function ai(a,b){this.a=a
this.b=b},
y:function y(){},
bh:function bh(a){this.a=a},
fc:function fc(){},
fd:function fd(){},
bi:function bi(){},
dr:function dr(){},
aC:function aC(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
bI:function bI(a,b,c,d,e,f){var _=this
_.e=a
_.f=b
_.a=c
_.b=d
_.c=e
_.d=f},
fu:function fu(a,b,c,d,e,f){var _=this
_.e=a
_.f=b
_.a=c
_.b=d
_.c=e
_.d=f},
i2:function i2(a){this.a=a},
i0:function i0(a){this.a=a},
ht:function ht(a){this.a=a},
f2:function f2(a){this.a=a},
h4:function h4(){},
dB:function dB(){},
f7:function f7(a){this.a=a},
e4:function e4(a){this.a=a},
fq:function fq(a,b,c){this.a=a
this.b=b
this.c=c},
z:function z(){},
e:function e(){},
aI:function aI(){},
b:function b(){},
L:function L(){},
G:function G(){},
X:function X(){},
M:function M(){},
ak:function ak(){},
o:function o(){},
bp:function bp(a){this.a=a},
m5:function(a){var u,t
u=J.W(a)
if(!!u.$ibj){t=u.gdn(a)
if(t.constructor===Array)if(typeof CanvasPixelArray!=="undefined"){t.constructor=CanvasPixelArray
t.BYTES_PER_ELEMENT=1}return a}return new P.eD(a.data,a.height,a.width)},
m4:function(a){if(a instanceof P.eD)return{data:a.a,height:a.b,width:a.c}
return a},
b9:function(a){var u,t,s,r,q
if(a==null)return
u=P.lj(P.o,null)
t=Object.getOwnPropertyNames(a)
for(s=t.length,r=0;r<t.length;t.length===s||(0,H.A)(t),++r){q=H.R(t[r])
u.a_(0,q,a[q])}return u},
m3:function(a,b){var u={}
a.N(0,new P.j_(u))
return u},
jR:function(){var u=$.jQ
if(u==null){u=J.jb(window.navigator.userAgent,"Opera",0)
$.jQ=u}return u},
lb:function(){var u,t
u=$.jN
if(u!=null)return u
t=$.jO
if(t==null){t=J.jb(window.navigator.userAgent,"Firefox",0)
$.jO=t}if(t)u="-moz-"
else{t=$.jP
if(t==null){t=!P.jR()&&J.jb(window.navigator.userAgent,"Trident/",0)
$.jP=t}if(t)u="-ms-"
else u=P.jR()?"-o-":"-webkit-"}$.jN=u
return u},
eD:function eD(a,b,c){this.a=a
this.b=b
this.c=c},
j_:function j_(a){this.a=a},
fm:function fm(a,b){this.a=a
this.b=b},
fn:function fn(){},
fo:function fo(){},
iG:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
lO:function(a){a=536870911&a+((67108863&a)<<3)
a^=a>>>11
return 536870911&a+((16383&a)<<15)},
iJ:function iJ(){},
a7:function a7(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=e},
b0:function b0(){},
fA:function fA(){},
b5:function b5(){},
h2:function h2(){},
h8:function h8(){},
hB:function hB(){},
p:function p(){},
b8:function b8(){},
hP:function hP(){},
e9:function e9(){},
ea:function ea(){},
ej:function ej(){},
ek:function ek(){},
eu:function eu(){},
ev:function ev(){},
eB:function eB(){},
eC:function eC(){},
eU:function eU(){},
eV:function eV(){},
eW:function eW(a){this.a=a},
eX:function eX(){},
bx:function bx(){},
h3:function h3(){},
dY:function dY(){},
cV:function cV(){},
d7:function d7(){},
du:function du(){},
bJ:function bJ(){},
dw:function dw(){},
dC:function dC(){},
dM:function dM(){},
hs:function hs(){},
eq:function eq(){},
er:function er(){}},W={
je:function(a,b){var u=document.createElement("canvas")
return u},
lc:function(a){H.n(a,"$id")
return"wheel"},
jU:function(a,b,c){var u=document.createElement("img")
u.src=b
return u},
iF:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
kk:function(a,b,c,d){var u,t
u=W.iF(W.iF(W.iF(W.iF(0,a),b),c),d)
t=536870911&u+((67108863&u)<<3)
t^=t>>>11
return 536870911&t+((16383&t)<<15)},
a2:function(a,b,c,d,e){var u=W.ks(new W.iu(c),W.j)
if(u!=null&&!0)J.l0(a,b,u,!1)
return new W.it(a,b,u,!1,[e])},
ks:function(a,b){var u
H.m(a,{func:1,ret:-1,args:[b]})
u=$.U
if(u===C.k)return a
return u.dg(a,b)},
q:function q(){},
eP:function eP(){},
eR:function eR(){},
eS:function eS(){},
cT:function cT(){},
cU:function cU(){},
bz:function bz(){},
bA:function bA(){},
bg:function bg(){},
c1:function c1(){},
f3:function f3(){},
N:function N(){},
bC:function bC(){},
f4:function f4(){},
aE:function aE(){},
aF:function aF(){},
f5:function f5(){},
f6:function f6(){},
f8:function f8(){},
c2:function c2(){},
c3:function c3(){},
f9:function f9(){},
d3:function d3(){},
d4:function d4(){},
fa:function fa(){},
fb:function fb(){},
iq:function iq(a,b){this.a=a
this.b=b},
a_:function a_(){},
j:function j(){},
d:function d(){},
aG:function aG(){},
fk:function fk(){},
fl:function fl(){},
fp:function fp(){},
aH:function aH(){},
fs:function fs(){},
bE:function bE(){},
d8:function d8(){},
bj:function bj(){},
c8:function c8(){},
aL:function aL(){},
fE:function fE(){},
cc:function cc(){},
fP:function fP(){},
fQ:function fQ(){},
fR:function fR(a){this.a=a},
fS:function fS(){},
fT:function fT(a){this.a=a},
aO:function aO(){},
fU:function fU(){},
a6:function a6(){},
ip:function ip(a){this.a=a},
F:function F(){},
cg:function cg(){},
aQ:function aQ(){},
h6:function h6(){},
hf:function hf(){},
hg:function hg(a){this.a=a},
hi:function hi(){},
aR:function aR(){},
hq:function hq(){},
aS:function aS(){},
hr:function hr(){},
aT:function aT(){},
hv:function hv(){},
hw:function hw(a){this.a=a},
ax:function ax(){},
aU:function aU(){},
ay:function ay(){},
hD:function hD(){},
hE:function hE(){},
hK:function hK(){},
aW:function aW(){},
az:function az(){},
hN:function hN(){},
hO:function hO(){},
br:function br(){},
i3:function i3(){},
ig:function ig(){},
ih:function ih(){},
aZ:function aZ(){},
cx:function cx(){},
ir:function ir(){},
e_:function e_(){},
iE:function iE(){},
eg:function eg(){},
iP:function iP(){},
iQ:function iQ(){},
is:function is(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
js:function js(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
it:function it(a,b,c,d,e){var _=this
_.a=0
_.b=a
_.c=b
_.d=c
_.e=d
_.$ti=e},
iu:function iu(a){this.a=a},
x:function x(){},
d6:function d6(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=null
_.$ti=d},
dZ:function dZ(){},
e0:function e0(){},
e1:function e1(){},
e2:function e2(){},
e3:function e3(){},
e5:function e5(){},
e6:function e6(){},
e7:function e7(){},
e8:function e8(){},
ec:function ec(){},
ed:function ed(){},
ee:function ee(){},
ef:function ef(){},
eh:function eh(){},
ei:function ei(){},
el:function el(){},
em:function em(){},
en:function en(){},
cE:function cE(){},
cF:function cF(){},
eo:function eo(){},
ep:function ep(){},
et:function et(){},
ew:function ew(){},
ex:function ex(){},
cG:function cG(){},
cH:function cH(){},
ez:function ez(){},
eA:function eA(){},
eE:function eE(){},
eF:function eF(){},
eG:function eG(){},
eH:function eH(){},
eI:function eI(){},
eJ:function eJ(){},
eK:function eK(){},
eL:function eL(){},
eM:function eM(){},
eN:function eN(){}},O={
jf:function(a){var u=new O.V([a])
u.b3(a)
return u},
V:function V(a){var _=this
_.d=_.c=_.b=_.a=null
_.$ti=a},
cb:function cb(){this.b=this.a=null},
dk:function dk(){var _=this
_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
fK:function fK(a,b){var _=this
_.f=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
ca:function ca(){},
fL:function fL(a,b){var _=this
_.a=a
_.b=b
_.e=_.d=_.c=null},
aM:function aM(a,b){var _=this
_.f=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
fN:function fN(a,b){var _=this
_.f=_.ch=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
fO:function fO(a,b){var _=this
_.f=_.ch=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
dy:function dy(){var _=this
_.e=_.d=_.c=_.b=_.a=null},
bq:function bq(){}},E={
jT:function(a,b,c,d,e,f){var u=new E.ae()
u.a=d
u.b=!0
u.seE(0,O.jf(E.ae))
u.y.aM(u.gj1(),u.gj4())
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
u.sby(0,e)
return u},
lB:function(a,b){var u=new E.hb(a,b)
u.eA(a,b)
return u},
lH:function(a,b,c,d,e){var u,t,s,r
u=J.W(a)
if(!!u.$ibz)return E.ka(a,!0,!0,!0,!1)
t=W.je(null,null)
s=t.style
s.width="100%"
s.height="100%"
u.gdk(a).h(0,t)
r=E.ka(t,!0,!0,!0,!1)
r.a=a
return r},
ka:function(a,b,c,d,e){var u,t,s,r,q,p,o,n,m,l,k
u=new E.dI()
t=H.n(C.m.cs(a,"webgl2",P.lk(["alpha",!0,"depth",!0,"stencil",!1,"antialias",!0])),"$ibJ")
if(t==null)H.t(P.r("Failed to get the rendering context for WebGL."))
u.b=a
u.a=a
u.c=t
u.e=E.lB(t,a)
s=new T.hG(t)
s.b=H.a4((t&&C.b).cu(t,3379))
s.c=H.a4(C.b.cu(t,34076))
s.d=0
s.e=0
u.f=s
s=new X.dQ(a)
r=new X.fz()
r.c=new X.am(!1,!1,!1)
r.shn(P.ll(null,null,null,P.z))
s.b=r
r=new X.fV(s)
r.f=0
r.r=V.b6()
r.x=V.b6()
r.Q=1
r.ch=1
s.c=r
r=new X.fF(s)
r.r=0
r.x=V.b6()
r.Q=1
r.ch=1
r.cx=1
r.cy=1
s.d=r
r=new X.hM(s)
r.e=0
r.f=V.b6()
r.r=V.b6()
s.e=r
s.f=!1
s.r=!1
s.x=!1
s.y=null
s.sf5(H.c([],[[P.cl,P.M]]))
r=s.z
q=document
p=W.a6
o={func:1,ret:-1,args:[p]};(r&&C.a).h(r,W.a2(q,"contextmenu",H.m(s.gfJ(),o),!1,p))
r=s.z
n=W.j
m={func:1,ret:-1,args:[n]};(r&&C.a).h(r,W.a2(a,"focus",H.m(s.gfP(),m),!1,n))
r=s.z;(r&&C.a).h(r,W.a2(a,"blur",H.m(s.gfD(),m),!1,n))
r=s.z
l=W.aL
k={func:1,ret:-1,args:[l]};(r&&C.a).h(r,W.a2(q,"keyup",H.m(s.gfT(),k),!1,l))
r=s.z;(r&&C.a).h(r,W.a2(q,"keydown",H.m(s.gfR(),k),!1,l))
l=s.z;(l&&C.a).h(l,W.a2(a,"mousedown",H.m(s.gfX(),o),!1,p))
l=s.z;(l&&C.a).h(l,W.a2(a,"mouseup",H.m(s.gh0(),o),!1,p))
l=s.z;(l&&C.a).h(l,W.a2(a,"mousemove",H.m(s.gfZ(),o),!1,p))
l=s.z
k=W.aZ;(l&&C.a).h(l,W.a2(a,H.R(W.lc(a)),H.m(s.gh2(),{func:1,ret:-1,args:[k]}),!1,k))
k=s.z;(k&&C.a).h(k,W.a2(q,"mousemove",H.m(s.gfL(),o),!1,p))
k=s.z;(k&&C.a).h(k,W.a2(q,"mouseup",H.m(s.gfN(),o),!1,p))
p=s.z;(p&&C.a).h(p,W.a2(q,"pointerlockchange",H.m(s.gh4(),m),!1,n))
n=s.z
m=W.az
q={func:1,ret:-1,args:[m]};(n&&C.a).h(n,W.a2(a,"touchstart",H.m(s.ghk(),q),!1,m))
n=s.z;(n&&C.a).h(n,W.a2(a,"touchend",H.m(s.ghg(),q),!1,m))
n=s.z;(n&&C.a).h(n,W.a2(a,"touchmove",H.m(s.ghi(),q),!1,m))
u.r=s
u.Q=!0
u.ch=!1
u.cx=new P.ai(Date.now(),!1)
u.cy=0
u.d6()
return u},
eY:function eY(){},
ae:function ae(){var _=this
_.fx=_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
hb:function hb(a,b){var _=this
_.a=a
_.b=b
_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=null},
hc:function hc(a){this.a=a},
hd:function hd(a){this.a=a},
he:function he(a){this.a=a},
dI:function dI(){var _=this
_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
hJ:function hJ(a){this.a=a}},Z={
jr:function(a,b,c){var u
H.k(c,"$ib",[P.z],"$ab")
u=a.createBuffer()
C.b.aj(a,b,u)
C.b.di(a,b,new Int16Array(H.cJ(c)),35044)
C.b.aj(a,b,null)
return new Z.dV(b,u)},
as:function(a){return new Z.aY(a)},
dV:function dV(a,b){this.a=a
this.b=b},
cW:function cW(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
dW:function dW(a){this.a=a},
bY:function bY(a,b,c){var _=this
_.a=a
_.b=null
_.c=b
_.d=c},
bk:function bk(a,b,c){this.a=a
this.b=b
this.c=c},
aY:function aY(a){this.a=a}},D={
I:function(){var u=new D.c4()
u.sai(null)
u.sb6(null)
u.c=null
u.d=0
return u},
f0:function f0(){},
c4:function c4(){var _=this
_.d=_.c=_.b=_.a=null},
fi:function fi(a){this.a=a},
fj:function fj(a){this.a=a},
v:function v(a){this.a=a
this.b=null},
bl:function bl(a,b,c,d){var _=this
_.c=a
_.d=b
_.a=c
_.b=null
_.$ti=d},
bm:function bm(a,b,c,d){var _=this
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
d2:function d2(){},
Y:function Y(){},
df:function df(){var _=this
_.d=_.c=_.b=_.a=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=null},
dt:function dt(){},
dA:function dA(){},
dF:function dF(){},
dG:function dG(){},
dH:function dH(){}},X={cX:function cX(a,b){this.a=a
this.b=b},de:function de(a,b){this.a=a
this.b=b},fz:function fz(){var _=this
_.d=_.c=_.b=_.a=null},di:function di(a,b,c,d,e,f){var _=this
_.x=a
_.y=b
_.c=c
_.d=d
_.e=e
_.a=f
_.b=null},fF:function fF(a){var _=this
_.a=a
_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},am:function am(a,b,c){this.a=a
this.b=b
this.c=c},b3:function b3(a,b,c,d,e,f,g,h,i){var _=this
_.x=a
_.y=b
_.z=c
_.Q=d
_.ch=e
_.c=f
_.d=g
_.e=h
_.a=i
_.b=null},fV:function fV(a){var _=this
_.a=a
_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},cd:function cd(a,b,c,d,e){var _=this
_.x=a
_.c=b
_.d=c
_.e=d
_.a=e
_.b=null},h7:function h7(){},dK:function dK(a,b,c,d,e,f,g,h,i){var _=this
_.x=a
_.y=b
_.z=c
_.Q=d
_.ch=e
_.c=f
_.d=g
_.e=h
_.a=i
_.b=null},hM:function hM(a){var _=this
_.a=a
_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},dQ:function dQ(a){var _=this
_.a=a
_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},
jh:function(a,b,c,d,e,f,g){var u,t
u=new X.fr()
t=new V.aw(0,0,0,1)
u.a=t
u.b=!0
u.c=e
u.d=!0
u.e=g
u.f=!1
t=$.k7
if(t==null){t=V.k6(0,0,1,1)
$.k7=t}u.r=t
return u},
k0:function(a,b,c,d,e){var u,t,s
u=new X.ds()
u.c=1.0471975511965976
u.d=0.1
u.e=2000
if(null!=c){t=u.b
u.b=c
if(c!=null)c.gm().h(0,u.geN())
s=new D.J("mover",t,u.b,u,[U.aa])
s.b=!0
u.ag(s)}s=u.c
if(!(Math.abs(s-b)<$.K().a)){u.c=b
s=new D.J("fov",s,b,u,[P.y])
s.b=!0
u.ag(s)}s=u.d
if(!(Math.abs(s-d)<$.K().a)){u.d=d
s=new D.J("near",s,d,u,[P.y])
s.b=!0
u.ag(s)}s=u.e
if(!(Math.abs(s-a)<$.K().a)){u.e=a
s=new D.J("far",s,a,u,[P.y])
s.b=!0
u.ag(s)}return u},
by:function by(){},
fr:function fr(){var _=this
_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
ft:function ft(){this.b=this.a=null},
ds:function ds(){var _=this
_.f=_.e=_.d=_.c=_.b=_.a=null},
cm:function cm(){}},V={
mq:function(a,b,c){var u
if(c<=b)return b
u=c-b
a=C.f.en(a-b,u)
return(a<0?a+u:a)+b},
Q:function(a,b,c){if(a==null)return C.j.aa("null",c)
return C.j.aa(C.f.e9(Math.abs(a-0)<$.K().a?0:a,b),c+b+1)},
bN:function(a,b,c){var u,t,s,r,q,p
H.k(a,"$ib",[P.y],"$ab")
u=H.c([],[P.o])
for(t=a.length,s=0,r=0;r<a.length;a.length===t||(0,H.A)(a),++r){q=V.Q(a[r],b,c)
s=Math.max(s,q.length)
C.a.h(u,q)}for(p=u.length-1;p>=0;--p){if(p>=u.length)return H.i(u,p)
C.a.a_(u,p,C.j.aa(u[p],s))}return u},
jE:function(a,b){return C.f.jq(Math.pow(b,C.F.cc(Math.log(H.m2(a))/Math.log(b))))},
bF:function(){var u=$.jY
if(u==null){u=V.aN(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1)
$.jY=u}return u},
aN:function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){return new V.aj(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p)},
b6:function(){var u=$.k2
if(u==null){u=new V.a1(0,0)
$.k2=u}return u},
lo:function(){var u=$.ch
if(u==null){u=new V.af(0,0,0)
$.ch=u}return u},
k6:function(a,b,c,d){if(c<0){a+=c
c=-c}if(d<0){b+=d
d=-d}return new V.dv(a,b,c,d)},
dU:function(){var u=$.ki
if(u==null){u=new V.P(0,0,0)
$.ki=u}return u},
a8:function a8(a,b,c){this.a=a
this.b=b
this.c=c},
aw:function aw(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
fg:function fg(a){this.a=a},
dm:function dm(a,b,c,d,e,f,g,h,i){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.x=h
_.y=i},
aj:function aj(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){var _=this
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
a1:function a1(a,b){this.a=a
this.b=b},
af:function af(a,b,c){this.a=a
this.b=b
this.c=c},
b7:function b7(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
dv:function dv(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
O:function O(a,b){this.a=a
this.b=b},
P:function P(a,b,c){this.a=a
this.b=b
this.c=c},
ab:function(a){var u=new V.hj()
u.eB(a)
return u},
eQ:function eQ(){},
b2:function b2(){},
dj:function dj(){},
b4:function b4(){this.a=null},
hj:function hj(){this.a=null},
ck:function ck(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
dJ:function dJ(a,b,c){this.a=a
this.b=b
this.c=c},
co:function co(a,b){this.a=a
this.b=b
this.c=null},
hL:function hL(){this.c=this.b=this.a=null},
cp:function cp(a){this.b=a
this.a=this.c=null},
mn:function(a){P.lI(C.D,new V.j9(a))},
lD:function(a,b){var u=new V.hn()
u.eC(a,!0)
return u},
j9:function j9(a){this.a=a},
hn:function hn(){this.b=this.a=null},
hp:function hp(a){this.a=a},
ho:function ho(a){this.a=a}},U={
jg:function(){var u=new U.f1()
u.a=!0
u.b=1e12
u.c=-1e12
u.d=0
u.e=100
u.f=0
u.x=0
u.r=0
return u},
f1:function f1(){var _=this
_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
cZ:function cZ(){this.b=this.a=null},
c7:function c7(){var _=this
_.d=_.c=_.b=_.a=_.r=_.f=_.e=null},
aa:function aa(){},
dR:function dR(){var _=this
_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
dS:function dS(){var _=this
_.fx=_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
dT:function dT(){var _=this
_.r=_.f=_.e=_.d=_.c=_.b=_.a=null}},M={cY:function cY(){var _=this
_.d=_.c=_.b=_.a=_.f=_.e=null},d0:function d0(){var _=this
_.f=_.e=_.d=_.c=_.b=_.a=null},d5:function d5(){var _=this
_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},an:function an(){},
kB:function(){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4
u=V.lD("Test 034",!0)
t=W.je(null,null)
t.className="pageLargeCanvas"
t.id="testCanvas"
C.l.Y(u.a,t)
s=[P.o]
u.dd(H.c(["Test of resizing the render target. ","Resizing the canvas works better in Chrome."],s))
u.dd(H.c(["\xab[Back to Tests|../]"],s))
s=document
t=C.u.ct(s,"testCanvas")
u=t.style
u.width="100%"
u.height="100%"
u.margin="-4px"
r=s.createElement("div")
u=r.style
u.border="2px solid"
u.padding="10px"
C.t.hw(u,(u&&C.t).eV(u,"resize"),"both","")
u.overflow="auto"
J.l2(t,r)
C.l.Y(r,t)
q=C.u.ct(s,"testCanvas")
if(q==null)H.t(P.r("Failed to find an element with the identifier, testCanvas."))
p=E.lH(q,!0,!0,!0,!1)
o=new U.c7()
o.b3(U.aa)
o.aM(o.gft(),o.gh8())
o.e=null
o.f=V.bF()
o.r=0
u=p.r
s=new U.dS()
n=U.jg()
n.scr(0,!0)
n.scj(6.283185307179586)
n.scl(0)
n.sa4(0,0)
n.sck(100)
n.sO(0)
n.sc4(0.5)
s.b=n
m=s.gaF()
n.gm().h(0,m)
n=U.jg()
n.scr(0,!0)
n.scj(6.283185307179586)
n.scl(0)
n.sa4(0,0)
n.sck(100)
n.sO(0)
n.sc4(0.5)
s.c=n
n.gm().h(0,m)
s.d=null
s.e=!1
s.f=!1
s.r=!1
s.x=2.5
s.y=2.5
s.z=2
s.Q=4
s.cx=!1
s.ch=!1
s.cy=0
s.db=0
s.dx=null
s.dy=0
s.fr=null
s.fx=null
l=new X.am(!1,!1,!1)
k=s.d
s.d=l
n=[X.am]
m=new D.J("modifiers",k,l,s,n)
m.b=!0
s.L(m)
m=s.f
if(m!==!1){s.f=!1
m=new D.J("invertX",m,!1,s,[P.a3])
m.b=!0
s.L(m)}m=s.r
if(m!==!1){s.r=!1
m=new D.J("invertY",m,!1,s,[P.a3])
m.b=!0
s.L(m)}s.aS(u)
o.h(0,s)
u=p.r
s=new U.dR()
m=U.jg()
m.scr(0,!0)
m.scj(6.283185307179586)
m.scl(0)
m.sa4(0,0)
m.sck(100)
m.sO(0)
m.sc4(0.2)
s.b=m
m.gm().h(0,s.gaF())
s.c=null
s.d=!1
s.e=2.5
s.f=2
s.r=4
s.y=!1
s.x=!1
s.z=0
s.Q=null
s.ch=0
s.cx=null
s.cy=null
l=new X.am(!0,!1,!1)
k=s.c
s.c=l
m=new D.J("modifiers",k,l,s,n)
m.b=!0
s.L(m)
s.aS(u)
o.h(0,s)
u=p.r
s=new U.dT()
s.c=0.01
s.d=0
s.e=0
l=new X.am(!1,!1,!1)
s.b=l
n=new D.J("modifiers",null,l,s,n)
n.b=!0
s.L(n)
s.aS(u)
o.h(0,s)
j=V.aN(1,0,0,0,0,1,0,0,0,0,1,5,0,0,0,1)
u=new U.cZ()
u.a=j
o.h(0,u)
i=X.k0(2000,1.0471975511965976,o,0.1,null)
h=new O.dk()
h.seU(O.jf(V.aj))
h.e.aM(h.gfz(),h.gfB())
u=new O.aM(h,"emission")
u.c=C.c
u.f=new V.a8(0,0,0)
h.f=u
u=new O.aM(h,"ambient")
u.c=C.c
u.f=new V.a8(0,0,0)
h.r=u
u=new O.aM(h,"diffuse")
u.c=C.c
u.f=new V.a8(0,0,0)
h.x=u
u=new O.aM(h,"invDiffuse")
u.c=C.c
u.f=new V.a8(0,0,0)
h.y=u
u=new O.fO(h,"specular")
u.c=C.c
u.f=new V.a8(0,0,0)
u.ch=100
h.z=u
u=new O.fL(h,"bump")
u.c=C.c
h.Q=u
h.ch=null
u=new O.aM(h,"reflect")
u.c=C.c
u.f=new V.a8(0,0,0)
h.cx=u
u=new O.fN(h,"refract")
u.c=C.c
u.f=new V.a8(0,0,0)
u.ch=1
h.cy=u
u=new O.fK(h,"alpha")
u.c=C.c
u.f=1
h.db=u
u=new D.df()
u.b3(D.Y)
u.sf3(H.c([],[D.d2]))
u.shm(H.c([],[D.dt]))
u.shG(H.c([],[D.dA]))
u.shU(H.c([],[D.dF]))
u.shV(H.c([],[D.dG]))
u.shW(H.c([],[D.dH]))
u.Q=null
u.ch=null
u.cv(u.gfv(),u.gh6(),u.gha())
h.dx=u
s=u.Q
if(s==null){s=D.I()
u.Q=s
u=s}else u=s
u.h(0,h.ght())
u=h.dx
s=u.ch
if(s==null){s=D.I()
u.ch=s
u=s}else u=s
u.h(0,h.gaC())
h.dy=null
u=h.r
u.sak(0,new V.a8(0.3,0.3,0.3))
u=h.x
u.sak(0,new V.a8(0.8,0.8,0.8))
u=h.x
s=p.f.iY("../resources/Test.png")
n=u.c
if(n!==C.d){if(n===C.c)u.ar()
u.c=C.d
u.hA(null)
n=u.a
n.a=null
n.R(null)}u.hz(s)
g=X.jh(!0,!0,!1,null,2000,null,0)
if(g.b){g.b=!1
u=new D.J("clearColor",!0,!1,g,[P.a3])
u.b=!0
g.ag(u)}f=E.jT(null,!0,null,"",null,null)
e=F.jn()
F.cI(e,null,null,1,1,1,0,0,1)
F.cI(e,null,null,1,1,0,1,0,3)
F.cI(e,null,null,1,1,0,0,1,2)
F.cI(e,null,null,1,1,-1,0,0,0)
F.cI(e,null,null,1,1,0,-1,0,0)
F.cI(e,null,null,1,1,0,0,-1,3)
e.at()
f.sby(0,e)
d=new M.d5()
d.seY(0,O.jf(E.ae))
d.d.aM(d.gfF(),d.gfH())
d.e=null
d.f=null
d.r=null
d.x=null
c=X.jh(!0,!0,!1,null,2000,null,0)
d.saT(null)
d.saY(0,c)
d.saZ(null)
d.d.h(0,f)
d.saZ(h)
d.saY(0,g)
d.saT(i)
u=p.f
s=u.a
b=s.createTexture()
C.b.a3(s,34067,b)
C.b.am(s,34067,10242,10497)
C.b.am(s,34067,10243,10497)
C.b.am(s,34067,10241,9729)
C.b.am(s,34067,10240,9729)
C.b.a3(s,34067,null)
a=new T.dE()
a.a=0
a.b=b
a.c=!1
a.d=0
u.aE(a,b,"../resources/maskonaive/posx.jpg",34069,!1,!1)
u.aE(a,b,"../resources/maskonaive/negx.jpg",34070,!1,!1)
u.aE(a,b,"../resources/maskonaive/posy.jpg",34071,!1,!1)
u.aE(a,b,"../resources/maskonaive/negy.jpg",34072,!1,!1)
u.aE(a,b,"../resources/maskonaive/posz.jpg",34073,!1,!1)
u.aE(a,b,"../resources/maskonaive/negz.jpg",34074,!1,!1)
a0=new M.d0()
a0.saT(null)
a0.saY(0,null)
a0.saZ(null)
u=E.jT(null,!0,null,"",null,null)
e=F.jn()
s=e.a
n=new V.P(-1,-1,1)
n=n.t(0,Math.sqrt(n.A(n)))
a1=s.bb(new V.b7(1,2,4,6),new V.aw(1,0,0,1),new V.af(-1,-1,0),new V.a1(0,1),n,null)
s=e.a
n=new V.P(1,-1,1)
n=n.t(0,Math.sqrt(n.A(n)))
a2=s.bb(new V.b7(0,3,4,6),new V.aw(0,0,1,1),new V.af(1,-1,0),new V.a1(1,1),n,null)
s=e.a
n=new V.P(1,1,1)
n=n.t(0,Math.sqrt(n.A(n)))
a3=s.bb(new V.b7(0,2,5,6),new V.aw(0,1,0,1),new V.af(1,1,0),new V.a1(1,0),n,null)
s=e.a
n=V.b6()
m=new V.P(-1,1,1)
m=m.t(0,Math.sqrt(m.A(m)))
a4=s.bb(new V.b7(0,2,4,7),new V.aw(1,1,0,1),new V.af(-1,1,0),n,m,null)
e.d.io(H.c([a1,a2,a3,a4],[F.ap]))
e.at()
u.sby(0,e)
a0.d=u
a0.e=null
u=new O.dy()
u.b=1.0471975511965976
u.d=new V.a8(1,1,1)
k=u.c
u.c=a
a.gm().h(0,u.gaC())
s=new D.J("boxTexture",k,u.c,u,[T.dE])
s.b=!0
u.R(s)
a0.saZ(u)
a0.saY(0,g)
a0.saT(i)
u=M.an
s=H.c([a0,d],[u])
n=new M.cY()
n.b3(u)
n.e=!1
n.f=null
n.aM(n.ghc(),n.ghe())
n.bV(0,s)
u=p.d
if(u!==n){if(u!=null)u.gm().P(0,p.gcF())
p.d=n
n.gm().h(0,p.gcF())
p.cG()}V.mn(p)}},A={
ln:function(a,b){var u,t
u=a.ae
t=new A.dl(b,u)
t.cD(b,u)
t.ez(a,b)
return t},
jq:function(a,b,c,d,e){var u=new A.hT(a,b,c,e)
u.f=d
u.shX(P.lm(d,0,!1,P.z))
return u},
cS:function cS(a,b,c){this.a=a
this.b=b
this.c=c},
eT:function eT(a){this.a=a},
dl:function dl(a,b){var _=this
_.be=_.dA=_.bd=_.ae=_.al=_.y2=_.y1=_.x2=_.x1=_.ry=_.rx=_.r2=_.r1=_.k4=_.k3=_.k2=_.k1=_.id=_.go=_.fy=_.fx=_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=null
_.dQ=_.c6=_.dP=_.br=_.dO=_.dN=_.bq=_.bp=_.dM=_.dL=_.bo=_.bn=_.bm=_.dK=_.dJ=_.bl=_.dI=_.dH=_.bk=_.dG=_.dF=_.bj=_.bi=_.dE=_.dD=_.bh=_.bg=_.dC=_.dB=_.bf=null
_.cb=_.dU=_.ca=_.dT=_.c9=_.dS=_.c8=_.dR=_.c7=null
_.a=a
_.b=b
_.y=_.x=_.r=_.f=_.e=_.d=_.c=null},
fM:function fM(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5){var _=this
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
_.al=b3
_.ae=b4
_.bd=b5},
cq:function cq(a,b,c){this.a=a
this.b=b
this.c=c},
cu:function cu(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.x=h},
cs:function cs(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},
cv:function cv(a,b,c,d,e,f,g,h,i,j){var _=this
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
ct:function ct(a,b,c,d,e,f,g,h,i,j){var _=this
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
cw:function cw(a,b,c,d,e,f,g,h,i,j,k,l,m,n){var _=this
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
cj:function cj(){},
bB:function bB(a,b){this.a=a
this.b=b},
dz:function dz(a,b){var _=this
_.db=_.cy=_.cx=_.ch=_.Q=_.z=null
_.a=a
_.b=b
_.y=_.x=_.r=_.f=_.e=_.d=_.c=null},
dL:function dL(){},
hZ:function hZ(a){this.a=a},
H:function H(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
hV:function hV(a,b,c,d){var _=this
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
hT:function hT(a,b,c,d){var _=this
_.f=_.e=null
_.a=a
_.b=b
_.c=c
_.d=d},
T:function T(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
hU:function hU(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
E:function E(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
hX:function hX(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
i_:function i_(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
cr:function cr(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
al:function al(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
ag:function ag(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
ac:function ac(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d}},F={
iW:function(a){var u=a.a>0?1:0
if(a.b>0)u+=2
return(a.c>0?u+4:u)*2},
cI:function(a,b,c,d,a0,a1,a2,a3,a4){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e
u={}
t=a1+a2
s=t+a3
r=a2+a3
q=a3+a1
p=new V.P(s,r+a1,q+a2)
u.a=p
o=a1-a2
n=a2-a3
m=a3-a1
l=new V.P(o+a3,n+a1,m+a2)
u.b=l
k=new V.P(o-a3,n-a1,m-a2)
u.c=k
j=new V.P(t-a3,r-a1,q-a2)
u.d=j
if(s>0){u.d=l
u.b=j
s=l
t=j}else{s=j
t=l}for(q=s,s=t,t=p,r=k,i=0;i<a4;++i,h=q,q=t,t=s,s=r,r=h){u.a=s
u.b=r
u.c=q
u.d=t}g=F.iW(t)
f=F.iW(u.b)
e=F.mo(d,a0,new F.iV(u,F.iW(u.c),F.iW(u.d),f,g,c),b)
if(e!=null)a.j0(e)},
mo:function(a,b,c,d){var u,t,s,r,q,p,o,n,m,l,k,j,i,h
H.m(c,{func:1,ret:-1,args:[F.ap,P.y,P.y]})
if(a<1)return
if(b<1)return
u=F.jn()
t=H.c([],[F.ap])
P.bQ("FLAG A\n")
for(s=0;s<=b;++s){r=s/b
q=u.a
if(r<0)p=0
else p=r>1?1:r
q.toString
o=F.i6(null,null,new V.aw(p,0,0,1),null,null,new V.a1(r,1),null,null,0)
q.h(0,o)
c.$3(o,r,0)
C.a.h(t,o.c3(d))}P.bQ("FLAG B\n")
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
o=F.i6(null,null,new V.aw(j,i,h,1),null,null,new V.a1(r,m),null,null,0)
k.h(0,o)
c.$3(o,r,n)
C.a.h(t,o.c3(d))}}P.bQ("FLAG C\n")
u.d.ip(a+1,b+1,t)
P.bQ("FLAG D\n")
return u},
c5:function(a,b,c){var u,t
u=new F.a0()
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
u.a.a.a1()
return u},
li:function(a,b){var u,t
u=new F.b1()
t=a.a
if(t==null)H.t(P.r("May not create a line with a start vertex which is not attached to a shape."))
if(t!=b.a)H.t(P.r("May not create a line with vertices attached to different shapes."))
u.a=a
C.a.h(a.c.b,u)
u.b=b
C.a.h(b.c.c,u)
C.a.h(u.a.a.c.b,u)
u.a.a.a1()
return u},
jn:function(){var u,t
u=new F.dx()
t=new F.i7(u)
t.b=!1
t.shY(H.c([],[F.ap]))
u.a=t
t=new F.hm(u)
t.sbQ(H.c([],[F.bo]))
u.b=t
t=new F.hl(u)
t.sfi(H.c([],[F.b1]))
u.c=t
t=new F.hk(u)
t.sf6(H.c([],[F.a0]))
u.d=t
u.e=null
return u},
i6:function(a,b,c,d,e,f,g,h,i){var u,t,s
u=new F.ap()
t=new F.ic(u)
t.sbQ(H.c([],[F.bo]))
u.b=t
t=new F.ib(u)
s=[F.b1]
t.sfj(H.c([],s))
t.sfk(H.c([],s))
u.c=t
t=new F.i8(u)
s=[F.a0]
t.sf7(H.c([],s))
t.sf8(H.c([],s))
t.sf9(H.c([],s))
u.d=t
h=$.kV()
u.e=0
t=$.aB()
s=h.a
u.f=(s&t.a)!==0?d:null
u.r=(s&$.bd().a)!==0?e:null
u.x=(s&$.bc().a)!==0?b:null
u.y=(s&$.be().a)!==0?f:null
u.z=(s&$.bf().a)!==0?g:null
u.Q=(s&$.kW().a)!==0?c:null
u.ch=(s&$.bT().a)!==0?i:0
u.cx=(s&$.bb().a)!==0?a:null
return u},
iV:function iV(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
a0:function a0(){var _=this
_.e=_.d=_.c=_.b=_.a=null},
b1:function b1(){this.b=this.a=null},
bo:function bo(){this.a=null},
dx:function dx(){var _=this
_.e=_.d=_.c=_.b=_.a=null},
hk:function hk(a){this.a=a
this.b=null},
hl:function hl(a){this.a=a
this.b=null},
hm:function hm(a){this.a=a
this.b=null},
ap:function ap(){var _=this
_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
ie:function ie(a){this.a=a},
id:function id(a){this.a=a},
i7:function i7(a){this.a=a
this.c=this.b=null},
i8:function i8(a){var _=this
_.a=a
_.d=_.c=_.b=null},
i9:function i9(a,b){this.a=a
this.b=b},
ia:function ia(a,b){this.a=a
this.b=b},
ib:function ib(a){this.a=a
this.c=this.b=null},
ic:function ic(a){this.a=a
this.b=null}},T={cn:function cn(){},dD:function dD(){},hF:function hF(){var _=this
_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},dE:function dE(){var _=this
_.e=_.d=_.c=_.b=_.a=null},hG:function hG(a){var _=this
_.a=a
_.e=_.d=_.c=_.b=null},hI:function hI(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},hH:function hH(a,b,c,d,e,f,g){var _=this
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
H.jl.prototype={}
J.a.prototype={
q:function(a,b){return a===b},
gE:function(a){return H.ci(a)},
i:function(a){return"Instance of '"+H.bH(a)+"'"}}
J.fw.prototype={
i:function(a){return String(a)},
gE:function(a){return a?519018:218159},
$ia3:1}
J.db.prototype={
q:function(a,b){return null==b},
i:function(a){return"null"},
gE:function(a){return 0},
$iG:1}
J.dd.prototype={
gE:function(a){return 0},
i:function(a){return String(a)}}
J.h5.prototype={}
J.dN.prototype={}
J.bn.prototype={
i:function(a){var u=a[$.kK()]
if(u==null)return this.ev(a)
return"JavaScript function for "+H.l(J.aq(u))},
$S:function(){return{func:1,opt:[,,,,,,,,,,,,,,,,]}},
$iji:1}
J.aJ.prototype={
h:function(a,b){H.B(b,H.w(a,0))
if(!!a.fixed$length)H.t(P.ao("add"))
a.push(b)},
P:function(a,b){var u
if(!!a.fixed$length)H.t(P.ao("remove"))
for(u=0;u<a.length;++u)if(J.a5(a[u],b)){a.splice(u,1)
return!0}return!1},
bV:function(a,b){var u,t
H.k(b,"$ie",[H.w(a,0)],"$ae")
if(!!a.fixed$length)H.t(P.ao("addAll"))
for(u=b.length,t=0;t<b.length;b.length===u||(0,H.A)(b),++t)a.push(b[t])},
N:function(a,b){var u,t
H.m(b,{func:1,ret:-1,args:[H.w(a,0)]})
u=a.length
for(t=0;t<u;++t){b.$1(a[t])
if(a.length!==u)throw H.h(P.c0(a))}},
w:function(a,b){var u,t
u=new Array(a.length)
u.fixed$length=Array
for(t=0;t<a.length;++t)this.a_(u,t,H.l(a[t]))
return u.join(b)},
iV:function(a){return this.w(a,"")},
C:function(a,b){if(b<0||b>=a.length)return H.i(a,b)
return a[b]},
es:function(a,b,c){var u=a.length
if(b>u)throw H.h(P.ar(b,0,a.length,"start",null))
if(c<b||c>a.length)throw H.h(P.ar(c,b,a.length,"end",null))
if(b===c)return H.c([],[H.w(a,0)])
return H.c(a.slice(b,c),[H.w(a,0)])},
gcf:function(a){var u=a.length
if(u>0)return a[u-1]
throw H.h(H.lf())},
au:function(a,b){var u
for(u=0;u<a.length;++u)if(J.a5(a[u],b))return!0
return!1},
i:function(a){return P.jj(a,"[","]")},
gT:function(a){return new J.ah(a,a.length,0,[H.w(a,0)])},
gE:function(a){return H.ci(a)},
gk:function(a){return a.length},
sk:function(a,b){if(!!a.fixed$length)H.t(P.ao("set length"))
if(b<0)throw H.h(P.ar(b,0,null,"newLength",null))
a.length=b},
a_:function(a,b,c){H.B(c,H.w(a,0))
if(!!a.immutable$list)H.t(P.ao("indexed set"))
if(b>=a.length||b<0)throw H.h(H.cN(a,b))
a[b]=c},
$ie:1,
$ib:1}
J.jk.prototype={}
J.ah.prototype={
gI:function(a){return this.d},
v:function(){var u,t,s
u=this.a
t=u.length
if(this.b!==t)throw H.h(H.A(u))
s=this.c
if(s>=t){this.scU(null)
return!1}this.scU(u[s]);++this.c
return!0},
scU:function(a){this.d=H.B(a,H.w(this,0))},
$iaI:1}
J.dc.prototype={
jq:function(a){var u
if(a>=-2147483648&&a<=2147483647)return a|0
if(isFinite(a)){u=a<0?Math.ceil(a):Math.floor(a)
return u+0}throw H.h(P.ao(""+a+".toInt()"))},
cc:function(a){var u,t
if(a>=0){if(a<=2147483647)return a|0}else if(a>=-2147483648){u=a|0
return a===u?u:u-1}t=Math.floor(a)
if(isFinite(t))return t
throw H.h(P.ao(""+a+".floor()"))},
af:function(a){if(a>0){if(a!==1/0)return Math.round(a)}else if(a>-1/0)return 0-Math.round(0-a)
throw H.h(P.ao(""+a+".round()"))},
e9:function(a,b){var u,t
if(b>20)throw H.h(P.ar(b,0,20,"fractionDigits",null))
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
n:function(a,b){if(typeof b!=="number")throw H.h(H.bu(b))
return a*b},
en:function(a,b){var u=a%b
if(u===0)return 0
if(u>0)return u
if(b<0)return u-b
else return u+b},
ey:function(a,b){if((a|0)===a)if(b>=1||b<-1)return a/b|0
return this.d9(a,b)},
a0:function(a,b){return(a|0)===a?a/b|0:this.d9(a,b)},
d9:function(a,b){var u=a/b
if(u>=-2147483648&&u<=2147483647)return u|0
if(u>0){if(u!==1/0)return Math.floor(u)}else if(u>-1/0)return Math.ceil(u)
throw H.h(P.ao("Result of truncating division is "+H.l(u)+": "+H.l(a)+" ~/ "+b))},
b8:function(a,b){var u
if(a>0)u=this.hF(a,b)
else{u=b>31?31:b
u=a>>u>>>0}return u},
hF:function(a,b){return b>31?0:a>>>b},
$iy:1,
$iX:1}
J.da.prototype={$iz:1}
J.d9.prototype={}
J.c9.prototype={
c2:function(a,b){if(b<0)throw H.h(H.cN(a,b))
if(b>=a.length)H.t(H.cN(a,b))
return a.charCodeAt(b)},
b4:function(a,b){if(b>=a.length)throw H.h(H.cN(a,b))
return a.charCodeAt(b)},
D:function(a,b){if(typeof b!=="string")throw H.h(P.jc(b,null,null))
return a+b},
cA:function(a,b,c){if(c==null)c=a.length
if(b<0)throw H.h(P.h9(b,null,null))
if(b>c)throw H.h(P.h9(b,null,null))
if(c>a.length)throw H.h(P.h9(c,null,null))
return a.substring(b,c)},
cz:function(a,b){return this.cA(a,b,null)},
n:function(a,b){var u,t
if(0>=b)return""
if(b===1||a.length===0)return a
if(b!==b>>>0)throw H.h(C.B)
for(u=a,t="";!0;){if((b&1)===1)t=u+t
b=b>>>1
if(b===0)break
u+=u}return t},
j7:function(a,b,c){var u=b-a.length
if(u<=0)return a
return this.n(c,u)+a},
aa:function(a,b){return this.j7(a,b," ")},
iA:function(a,b,c){if(c>a.length)throw H.h(P.ar(c,0,a.length,null,null))
return H.kF(a,b,c)},
i:function(a){return a},
gE:function(a){var u,t,s
for(u=a.length,t=0,s=0;s<u;++s){t=536870911&t+a.charCodeAt(s)
t=536870911&t+((524287&t)<<10)
t^=t>>6}t=536870911&t+((67108863&t)<<3)
t^=t>>11
return 536870911&t+((16383&t)<<15)},
gk:function(a){return a.length},
$ik_:1,
$io:1}
H.Z.prototype={
gk:function(a){return this.a.length},
j:function(a,b){return C.j.c2(this.a,b)},
$adP:function(){return[P.z]},
$au:function(){return[P.z]},
$ae:function(){return[P.z]},
$ab:function(){return[P.z]}}
H.fe.prototype={}
H.dh.prototype={
gI:function(a){return this.d},
v:function(){var u,t,s,r
u=this.a
t=J.j1(u)
s=t.gk(u)
if(this.b!==s)throw H.h(P.c0(u))
r=this.c
if(r>=s){this.saP(null)
return!1}this.saP(t.C(u,r));++this.c
return!0},
saP:function(a){this.d=H.B(a,H.w(this,0))},
$iaI:1}
H.fI.prototype={
gT:function(a){return new H.fJ(J.bU(this.a),this.b,this.$ti)},
gk:function(a){return J.bV(this.a)},
C:function(a,b){return this.b.$1(J.jI(this.a,b))},
$ae:function(a,b){return[b]}}
H.fJ.prototype={
v:function(){var u=this.b
if(u.v()){this.saP(this.c.$1(u.gI(u)))
return!0}this.saP(null)
return!1},
gI:function(a){return this.a},
saP:function(a){this.a=H.B(a,H.w(this,1))},
$aaI:function(a,b){return[b]}}
H.ii.prototype={
gT:function(a){return new H.ij(J.bU(this.a),this.b,this.$ti)}}
H.ij.prototype={
v:function(){var u,t
for(u=this.a,t=this.b;u.v();)if(t.$1(u.gI(u)))return!0
return!1},
gI:function(a){var u=this.a
return u.gI(u)}}
H.bD.prototype={}
H.dP.prototype={}
H.dO.prototype={}
H.ha.prototype={}
H.hQ.prototype={
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
H.h1.prototype={
i:function(a){var u=this.b
if(u==null)return"NoSuchMethodError: "+H.l(this.a)
return"NoSuchMethodError: method not found: '"+u+"' on null"}}
H.fy.prototype={
i:function(a){var u,t
u=this.b
if(u==null)return"NoSuchMethodError: "+H.l(this.a)
t=this.c
if(t==null)return"NoSuchMethodError: method not found: '"+u+"' ("+H.l(this.a)+")"
return"NoSuchMethodError: method not found: '"+u+"' on '"+t+"' ("+H.l(this.a)+")"}}
H.i1.prototype={
i:function(a){var u=this.a
return u.length===0?"Error":"Error: "+u}}
H.ja.prototype={
$1:function(a){if(!!J.W(a).$ibi)if(a.$thrownJsError==null)a.$thrownJsError=this.a
return a},
$S:16}
H.es.prototype={
i:function(a){var u,t
u=this.b
if(u!=null)return u
u=this.a
t=u!==null&&typeof u==="object"?u.stack:null
u=t==null?"":t
this.b=u
return u},
$iak:1}
H.bZ.prototype={
i:function(a){return"Closure '"+H.bH(this).trim()+"'"},
$iji:1,
gjw:function(){return this},
$C:"$1",
$R:1,
$D:null}
H.hC.prototype={}
H.hu.prototype={
i:function(a){var u=this.$static_name
if(u==null)return"Closure of unknown static method"
return"Closure '"+H.bS(u)+"'"}}
H.bW.prototype={
q:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof H.bW))return!1
return this.a===b.a&&this.b===b.b&&this.c===b.c},
gE:function(a){var u,t
u=this.c
if(u==null)t=H.ci(this.a)
else t=typeof u!=="object"?J.bw(u):H.ci(u)
return(t^H.ci(this.b))>>>0},
i:function(a){var u=this.c
if(u==null)u=this.a
return"Closure '"+H.l(this.d)+"' of "+("Instance of '"+H.bH(u)+"'")}}
H.hS.prototype={
i:function(a){return this.a}}
H.f_.prototype={
i:function(a){return this.a}}
H.hh.prototype={
i:function(a){return"RuntimeError: "+H.l(this.a)}}
H.aK.prototype={
gk:function(a){return this.a},
gax:function(a){return new H.dg(this,[H.w(this,0)])},
dm:function(a,b){var u,t
if(typeof b==="string"){u=this.b
if(u==null)return!1
return this.cR(u,b)}else if(typeof b==="number"&&(b&0x3ffffff)===b){t=this.c
if(t==null)return!1
return this.cR(t,b)}else return this.iT(b)},
iT:function(a){var u=this.d
if(u==null)return!1
return this.cd(this.bE(u,J.bw(a)&0x3ffffff),a)>=0},
j:function(a,b){var u,t,s,r
if(typeof b==="string"){u=this.b
if(u==null)return
t=this.b5(u,b)
s=t==null?null:t.b
return s}else if(typeof b==="number"&&(b&0x3ffffff)===b){r=this.c
if(r==null)return
t=this.b5(r,b)
s=t==null?null:t.b
return s}else return this.iU(b)},
iU:function(a){var u,t,s
u=this.d
if(u==null)return
t=this.bE(u,J.bw(a)&0x3ffffff)
s=this.cd(t,a)
if(s<0)return
return t[s].b},
a_:function(a,b,c){var u,t,s,r,q,p
H.B(b,H.w(this,0))
H.B(c,H.w(this,1))
if(typeof b==="string"){u=this.b
if(u==null){u=this.bO()
this.b=u}this.cK(u,b,c)}else if(typeof b==="number"&&(b&0x3ffffff)===b){t=this.c
if(t==null){t=this.bO()
this.c=t}this.cK(t,b,c)}else{s=this.d
if(s==null){s=this.bO()
this.d=s}r=J.bw(b)&0x3ffffff
q=this.bE(s,r)
if(q==null)this.bT(s,r,[this.bP(b,c)])
else{p=this.cd(q,b)
if(p>=0)q[p].b=c
else q.push(this.bP(b,c))}}},
N:function(a,b){var u,t
H.m(b,{func:1,ret:-1,args:[H.w(this,0),H.w(this,1)]})
u=this.e
t=this.r
for(;u!=null;){b.$2(u.a,u.b)
if(t!==this.r)throw H.h(P.c0(this))
u=u.c}},
cK:function(a,b,c){var u
H.B(b,H.w(this,0))
H.B(c,H.w(this,1))
u=this.b5(a,b)
if(u==null)this.bT(a,b,this.bP(b,c))
else u.b=c},
bP:function(a,b){var u,t
u=new H.fB(H.B(a,H.w(this,0)),H.B(b,H.w(this,1)))
if(this.e==null){this.f=u
this.e=u}else{t=this.f
u.d=t
t.c=u
this.f=u}++this.a
this.r=this.r+1&67108863
return u},
cd:function(a,b){var u,t
if(a==null)return-1
u=a.length
for(t=0;t<u;++t)if(J.a5(a[t].a,b))return t
return-1},
i:function(a){return P.jX(this)},
b5:function(a,b){return a[b]},
bE:function(a,b){return a[b]},
bT:function(a,b,c){a[b]=c},
f2:function(a,b){delete a[b]},
cR:function(a,b){return this.b5(a,b)!=null},
bO:function(){var u=Object.create(null)
this.bT(u,"<non-identifier-key>",u)
this.f2(u,"<non-identifier-key>")
return u}}
H.fB.prototype={}
H.dg.prototype={
gk:function(a){return this.a.a},
gT:function(a){var u,t
u=this.a
t=new H.fC(u,u.r,this.$ti)
t.c=u.e
return t}}
H.fC.prototype={
gI:function(a){return this.d},
v:function(){var u=this.a
if(this.b!==u.r)throw H.h(P.c0(u))
else{u=this.c
if(u==null){this.scJ(null)
return!1}else{this.scJ(u.a)
this.c=this.c.c
return!0}}},
scJ:function(a){this.d=H.B(a,H.w(this,0))},
$iaI:1}
H.j3.prototype={
$1:function(a){return this.a(a)},
$S:16}
H.j4.prototype={
$2:function(a,b){return this.a(a,b)},
$S:28}
H.j5.prototype={
$1:function(a){return this.a(H.R(a))},
$S:30}
H.fx.prototype={
i:function(a){return"RegExp/"+this.a+"/"},
$ik_:1}
H.cf.prototype={$imK:1}
H.dn.prototype={
gk:function(a){return a.length},
$iC:1,
$aC:function(){}}
H.ce.prototype={
j:function(a,b){H.bs(b,a,a.length)
return a[b]},
$abD:function(){return[P.y]},
$au:function(){return[P.y]},
$ie:1,
$ae:function(){return[P.y]},
$ib:1,
$ab:function(){return[P.y]}}
H.dp.prototype={
$abD:function(){return[P.z]},
$au:function(){return[P.z]},
$ie:1,
$ae:function(){return[P.z]},
$ib:1,
$ab:function(){return[P.z]}}
H.fW.prototype={
j:function(a,b){H.bs(b,a,a.length)
return a[b]}}
H.fX.prototype={
j:function(a,b){H.bs(b,a,a.length)
return a[b]}}
H.fY.prototype={
j:function(a,b){H.bs(b,a,a.length)
return a[b]}}
H.fZ.prototype={
j:function(a,b){H.bs(b,a,a.length)
return a[b]}}
H.h_.prototype={
j:function(a,b){H.bs(b,a,a.length)
return a[b]}}
H.dq.prototype={
gk:function(a){return a.length},
j:function(a,b){H.bs(b,a,a.length)
return a[b]},
$imL:1}
H.h0.prototype={
gk:function(a){return a.length},
j:function(a,b){H.bs(b,a,a.length)
return a[b]}}
H.cA.prototype={}
H.cB.prototype={}
H.cC.prototype={}
H.cD.prototype={}
P.il.prototype={
$1:function(a){var u,t
u=this.a
t=u.a
u.a=null
t.$0()},
$S:15}
P.ik.prototype={
$1:function(a){var u,t
this.a.a=H.m(a,{func:1,ret:-1})
u=this.b
t=this.c
u.firstChild?u.removeChild(t):u.appendChild(t)},
$S:27}
P.im.prototype={
$0:function(){this.a.$0()},
$S:2}
P.io.prototype={
$0:function(){this.a.$0()},
$S:2}
P.ey.prototype={
eL:function(a,b){if(self.setTimeout!=null)this.b=self.setTimeout(H.bM(new P.iS(this,b),0),a)
else throw H.h(P.ao("`setTimeout()` not found."))},
eM:function(a,b){if(self.setTimeout!=null)this.b=self.setInterval(H.bM(new P.iR(this,a,Date.now(),b),0),a)
else throw H.h(P.ao("Periodic timer."))},
$iaV:1}
P.iS.prototype={
$0:function(){var u=this.a
u.b=null
u.c=1
this.b.$0()},
$S:3}
P.iR.prototype={
$0:function(){var u,t,s,r
u=this.a
t=u.c+1
s=this.b
if(s>0){r=Date.now()-this.c
if(r>(t+1)*s)t=C.i.ey(r,s)}u.c=t
this.d.$1(u)},
$S:2}
P.b_.prototype={
j_:function(a){if(this.c!==6)return!0
return this.b.b.cp(H.m(this.d,{func:1,ret:P.a3,args:[P.M]}),a.a,P.a3,P.M)},
iS:function(a){var u,t,s,r
u=this.e
t=P.M
s={futureOr:1,type:H.w(this,1)}
r=this.b.b
if(H.eO(u,{func:1,args:[P.M,P.ak]}))return H.jz(r.jk(u,a.a,a.b,null,t,P.ak),s)
else return H.jz(r.cp(H.m(u,{func:1,args:[P.M]}),a.a,null,t),s)}}
P.at.prototype={
e8:function(a,b,c){var u,t,s,r
u=H.w(this,0)
H.m(a,{func:1,ret:{futureOr:1,type:c},args:[u]})
t=$.U
if(t!==C.k){t.toString
H.m(a,{func:1,ret:{futureOr:1,type:c},args:[u]})
if(b!=null)b=P.lW(b,t)}H.m(a,{func:1,ret:{futureOr:1,type:c},args:[u]})
s=new P.at(0,$.U,[c])
r=b==null?1:3
this.cL(new P.b_(s,r,a,b,[u,c]))
return s},
jp:function(a,b){return this.e8(a,null,b)},
cL:function(a){var u,t
u=this.a
if(u<=1){a.a=H.n(this.c,"$ib_")
this.c=a}else{if(u===2){t=H.n(this.c,"$iat")
u=t.a
if(u<4){t.cL(a)
return}this.a=u
this.c=t.c}u=this.b
u.toString
P.iZ(null,null,u,H.m(new P.iv(this,a),{func:1,ret:-1}))}},
d4:function(a){var u,t,s,r,q,p
u={}
u.a=a
if(a==null)return
t=this.a
if(t<=1){s=H.n(this.c,"$ib_")
this.c=a
if(s!=null){for(r=a;q=r.a,q!=null;r=q);r.a=s}}else{if(t===2){p=H.n(this.c,"$iat")
t=p.a
if(t<4){p.d4(a)
return}this.a=t
this.c=p.c}u.a=this.b7(a)
t=this.b
t.toString
P.iZ(null,null,t,H.m(new P.iz(u,this),{func:1,ret:-1}))}},
bS:function(){var u=H.n(this.c,"$ib_")
this.c=null
return this.b7(u)},
b7:function(a){var u,t,s
for(u=a,t=null;u!=null;t=u,u=s){s=u.a
u.a=t}return t},
cN:function(a){var u,t,s
u=H.w(this,0)
H.jz(a,{futureOr:1,type:u})
t=this.$ti
if(H.cM(a,"$ic6",t,"$ac6"))if(H.cM(a,"$iat",t,null))P.kj(a,this)
else P.lN(a,this)
else{s=this.bS()
H.B(a,u)
this.a=4
this.c=a
P.cy(this,s)}},
cO:function(a,b){var u
H.n(b,"$iak")
u=this.bS()
this.a=8
this.c=new P.ad(a,b)
P.cy(this,u)},
$ic6:1}
P.iv.prototype={
$0:function(){P.cy(this.a,this.b)},
$S:2}
P.iz.prototype={
$0:function(){P.cy(this.b,this.a.a)},
$S:2}
P.iw.prototype={
$1:function(a){var u=this.a
u.a=0
u.cN(a)},
$S:15}
P.ix.prototype={
$2:function(a,b){H.n(b,"$iak")
this.a.cO(a,b)},
$1:function(a){return this.$2(a,null)},
$S:32}
P.iy.prototype={
$0:function(){this.a.cO(this.b,this.c)},
$S:2}
P.iC.prototype={
$0:function(){var u,t,s,r,q,p,o
u=null
try{r=this.c
u=r.b.b.e6(H.m(r.d,{func:1}),null)}catch(q){t=H.ba(q)
s=H.bP(q)
if(this.d){r=H.n(this.a.a.c,"$iad").a
p=t
p=r==null?p==null:r===p
r=p}else r=!1
p=this.b
if(r)p.b=H.n(this.a.a.c,"$iad")
else p.b=new P.ad(t,s)
p.a=!0
return}if(!!J.W(u).$ic6){if(u instanceof P.at&&u.a>=4){if(u.a===8){r=this.b
r.b=H.n(u.c,"$iad")
r.a=!0}return}o=this.a.a
r=this.b
r.b=u.jp(new P.iD(o),null)
r.a=!1}},
$S:3}
P.iD.prototype={
$1:function(a){return this.a},
$S:35}
P.iB.prototype={
$0:function(){var u,t,s,r,q,p,o
try{s=this.b
r=H.w(s,0)
q=H.B(this.c,r)
p=H.w(s,1)
this.a.b=s.b.b.cp(H.m(s.d,{func:1,ret:{futureOr:1,type:p},args:[r]}),q,{futureOr:1,type:p},r)}catch(o){u=H.ba(o)
t=H.bP(o)
s=this.a
s.b=new P.ad(u,t)
s.a=!0}},
$S:3}
P.iA.prototype={
$0:function(){var u,t,s,r,q,p,o,n
try{u=H.n(this.a.a.c,"$iad")
r=this.c
if(r.j_(u)&&r.e!=null){q=this.b
q.b=r.iS(u)
q.a=!1}}catch(p){t=H.ba(p)
s=H.bP(p)
r=H.n(this.a.a.c,"$iad")
q=r.a
o=t
n=this.b
if(q==null?o==null:q===o)n.b=r
else n.b=new P.ad(t,s)
n.a=!0}},
$S:3}
P.dX.prototype={}
P.hx.prototype={
gk:function(a){var u,t,s,r
u={}
t=new P.at(0,$.U,[P.z])
u.a=0
s=H.w(this,0)
r=H.m(new P.hz(u,this),{func:1,ret:-1,args:[s]})
H.m(new P.hA(u,t),{func:1,ret:-1})
W.a2(this.a,this.b,r,!1,s)
return t}}
P.hz.prototype={
$1:function(a){H.B(a,H.w(this.b,0));++this.a.a},
$S:function(){return{func:1,ret:P.G,args:[H.w(this.b,0)]}}}
P.hA.prototype={
$0:function(){this.b.cN(this.a.a)},
$S:2}
P.cl.prototype={}
P.hy.prototype={}
P.aV.prototype={}
P.ad.prototype={
i:function(a){return H.l(this.a)},
$ibi:1}
P.iU.prototype={$imY:1}
P.iY.prototype={
$0:function(){var u,t,s
u=this.a
t=u.a
if(t==null){s=new P.dr()
u.a=s
u=s}else u=t
t=this.b
if(t==null)throw H.h(u)
s=H.h(u)
s.stack=t.i(0)
throw s},
$S:2}
P.iK.prototype={
jl:function(a){var u,t,s
H.m(a,{func:1,ret:-1})
try{if(C.k===$.U){a.$0()
return}P.ko(null,null,this,a,-1)}catch(s){u=H.ba(s)
t=H.bP(s)
P.iX(null,null,this,u,H.n(t,"$iak"))}},
jm:function(a,b,c){var u,t,s
H.m(a,{func:1,ret:-1,args:[c]})
H.B(b,c)
try{if(C.k===$.U){a.$1(b)
return}P.kp(null,null,this,a,b,-1,c)}catch(s){u=H.ba(s)
t=H.bP(s)
P.iX(null,null,this,u,H.n(t,"$iak"))}},
is:function(a,b){return new P.iM(this,H.m(a,{func:1,ret:b}),b)},
bZ:function(a){return new P.iL(this,H.m(a,{func:1,ret:-1}))},
dg:function(a,b){return new P.iN(this,H.m(a,{func:1,ret:-1,args:[b]}),b)},
e6:function(a,b){H.m(a,{func:1,ret:b})
if($.U===C.k)return a.$0()
return P.ko(null,null,this,a,b)},
cp:function(a,b,c,d){H.m(a,{func:1,ret:c,args:[d]})
H.B(b,d)
if($.U===C.k)return a.$1(b)
return P.kp(null,null,this,a,b,c,d)},
jk:function(a,b,c,d,e,f){H.m(a,{func:1,ret:d,args:[e,f]})
H.B(b,e)
H.B(c,f)
if($.U===C.k)return a.$2(b,c)
return P.lX(null,null,this,a,b,c,d,e,f)}}
P.iM.prototype={
$0:function(){return this.a.e6(this.b,this.c)},
$S:function(){return{func:1,ret:this.c}}}
P.iL.prototype={
$0:function(){return this.a.jl(this.b)},
$S:3}
P.iN.prototype={
$1:function(a){var u=this.c
return this.a.jm(this.b,H.B(a,u),u)},
$S:function(){return{func:1,ret:-1,args:[this.c]}}}
P.iH.prototype={
gT:function(a){return P.kl(this,this.r,H.w(this,0))},
gk:function(a){return this.a},
h:function(a,b){var u
H.B(b,H.w(this,0))
if(typeof b==="number"&&(b&1073741823)===b){u=this.c
if(u==null){u=P.km()
this.c=u}return this.eZ(u,b)}else return this.eP(0,b)},
eP:function(a,b){var u,t,s
H.B(b,H.w(this,0))
u=this.d
if(u==null){u=P.km()
this.d=u}t=this.cP(b)
s=u[t]
if(s==null)u[t]=[this.bA(b)]
else{if(this.cV(s,b)>=0)return!1
s.push(this.bA(b))}return!0},
P:function(a,b){if(typeof b==="number"&&(b&1073741823)===b)return this.hp(this.c,b)
else return this.ho(0,b)},
ho:function(a,b){var u,t,s
u=this.d
if(u==null)return!1
t=this.fb(u,b)
s=this.cV(t,b)
if(s<0)return!1
this.da(t.splice(s,1)[0])
return!0},
eZ:function(a,b){H.B(b,H.w(this,0))
if(H.n(a[b],"$icz")!=null)return!1
a[b]=this.bA(b)
return!0},
hp:function(a,b){var u
if(a==null)return!1
u=H.n(a[b],"$icz")
if(u==null)return!1
this.da(u)
delete a[b]
return!0},
cY:function(){this.r=1073741823&this.r+1},
bA:function(a){var u,t
u=new P.cz(H.B(a,H.w(this,0)))
if(this.e==null){this.f=u
this.e=u}else{t=this.f
u.c=t
t.b=u
this.f=u}++this.a
this.cY()
return u},
da:function(a){var u,t
u=a.c
t=a.b
if(u==null)this.e=t
else u.b=t
if(t==null)this.f=u
else t.c=u;--this.a
this.cY()},
cP:function(a){return J.bw(a)&1073741823},
fb:function(a,b){return a[this.cP(b)]},
cV:function(a,b){var u,t
if(a==null)return-1
u=a.length
for(t=0;t<u;++t)if(a[t].a==b)return t
return-1}}
P.cz.prototype={}
P.iI.prototype={
gI:function(a){return this.d},
v:function(){var u=this.a
if(this.b!==u.r)throw H.h(P.c0(u))
else{u=this.c
if(u==null){this.scM(null)
return!1}else{this.scM(H.B(u.a,H.w(this,0)))
this.c=this.c.b
return!0}}},
scM:function(a){this.d=H.B(a,H.w(this,0))},
$iaI:1}
P.fD.prototype={$ie:1,$ib:1}
P.u.prototype={
gT:function(a){return new H.dh(a,this.gk(a),0,[H.cO(this,a,"u",0)])},
C:function(a,b){return this.j(a,b)},
js:function(a,b){var u,t
u=H.c([],[H.cO(this,a,"u",0)])
C.a.sk(u,this.gk(a))
for(t=0;t<this.gk(a);++t)C.a.a_(u,t,this.j(a,t))
return u},
jr:function(a){return this.js(a,!0)},
i:function(a){return P.jj(a,"[","]")}}
P.fG.prototype={}
P.fH.prototype={
$2:function(a,b){var u,t
u=this.a
if(!u.a)this.b.a+=", "
u.a=!1
u=this.b
t=u.a+=H.l(a)
u.a=t+": "
u.a+=H.l(b)},
$S:13}
P.a9.prototype={
N:function(a,b){var u,t
H.m(b,{func:1,ret:-1,args:[H.cO(this,a,"a9",0),H.cO(this,a,"a9",1)]})
for(u=J.bU(this.gax(a));u.v();){t=u.gI(u)
b.$2(t,this.j(a,t))}},
gk:function(a){return J.bV(this.gax(a))},
i:function(a){return P.jX(a)},
$iL:1}
P.iO.prototype={
i:function(a){return P.jj(this,"{","}")},
C:function(a,b){var u,t,s
if(b<0)H.t(P.ar(b,0,null,"index",null))
for(u=P.kl(this,this.r,H.w(this,0)),t=0;u.v();){s=u.d
if(b===t)return s;++t}throw H.h(P.S(b,this,"index",null,t))},
$ie:1,
$ik8:1}
P.eb.prototype={}
P.c_.prototype={}
P.d_.prototype={}
P.ff.prototype={
$ac_:function(){return[P.o,[P.b,P.z]]}}
P.i4.prototype={}
P.i5.prototype={
iC:function(a,b,c){var u,t,s
c=P.k5(b,c,a.length,null,null,null)
u=c-b
if(u===0)return new Uint8Array(0)
t=new Uint8Array(u*3)
s=new P.iT(t)
if(s.fa(a,b,c)!==c)s.dc(C.j.c2(a,c-1),0)
return new Uint8Array(t.subarray(0,H.lS(0,s.b,t.length)))},
iB:function(a){return this.iC(a,0,null)},
$ad_:function(){return[P.o,[P.b,P.z]]}}
P.iT.prototype={
dc:function(a,b){var u,t,s,r,q
u=this.c
t=this.b
s=t+1
r=u.length
if((b&64512)===56320){q=65536+((a&1023)<<10)|b&1023
this.b=s
if(t>=r)return H.i(u,t)
u[t]=240|q>>>18
t=s+1
this.b=t
if(s>=r)return H.i(u,s)
u[s]=128|q>>>12&63
s=t+1
this.b=s
if(t>=r)return H.i(u,t)
u[t]=128|q>>>6&63
this.b=s+1
if(s>=r)return H.i(u,s)
u[s]=128|q&63
return!0}else{this.b=s
if(t>=r)return H.i(u,t)
u[t]=224|a>>>12
t=s+1
this.b=t
if(s>=r)return H.i(u,s)
u[s]=128|a>>>6&63
this.b=t+1
if(t>=r)return H.i(u,t)
u[t]=128|a&63
return!1}},
fa:function(a,b,c){var u,t,s,r,q,p,o
if(b!==c&&(C.j.c2(a,c-1)&64512)===55296)--c
for(u=this.c,t=u.length,s=b;s<c;++s){r=C.j.b4(a,s)
if(r<=127){q=this.b
if(q>=t)break
this.b=q+1
u[q]=r}else if((r&64512)===55296){if(this.b+3>=t)break
p=s+1
if(this.dc(r,C.j.b4(a,p)))s=p}else if(r<=2047){q=this.b
o=q+1
if(o>=t)break
this.b=o
if(q>=t)return H.i(u,q)
u[q]=192|r>>>6
this.b=o+1
u[o]=128|r&63}else{q=this.b
if(q+2>=t)break
o=q+1
this.b=o
if(q>=t)return H.i(u,q)
u[q]=224|r>>>12
q=o+1
this.b=q
if(o>=t)return H.i(u,o)
u[o]=128|r>>>6&63
this.b=q+1
if(q>=t)return H.i(u,q)
u[q]=128|r&63}}return s}}
P.a3.prototype={}
P.ai.prototype={
q:function(a,b){if(b==null)return!1
return b instanceof P.ai&&this.a===b.a&&!0},
gE:function(a){var u=this.a
return(u^C.i.b8(u,30))&1073741823},
i:function(a){var u,t,s,r,q,p,o,n
u=P.l9(H.lw(this))
t=P.d1(H.lu(this))
s=P.d1(H.lq(this))
r=P.d1(H.lr(this))
q=P.d1(H.lt(this))
p=P.d1(H.lv(this))
o=P.la(H.ls(this))
n=u+"-"+t+"-"+s+" "+r+":"+q+":"+p+"."+o
return n}}
P.y.prototype={}
P.bh.prototype={
q:function(a,b){if(b==null)return!1
return b instanceof P.bh&&this.a===b.a},
gE:function(a){return C.i.gE(this.a)},
i:function(a){var u,t,s,r,q
u=new P.fd()
t=this.a
if(t<0)return"-"+new P.bh(0-t).i(0)
s=u.$1(C.i.a0(t,6e7)%60)
r=u.$1(C.i.a0(t,1e6)%60)
q=new P.fc().$1(t%1e6)
return""+C.i.a0(t,36e8)+":"+H.l(s)+":"+H.l(r)+"."+H.l(q)}}
P.fc.prototype={
$1:function(a){if(a>=1e5)return""+a
if(a>=1e4)return"0"+a
if(a>=1000)return"00"+a
if(a>=100)return"000"+a
if(a>=10)return"0000"+a
return"00000"+a},
$S:14}
P.fd.prototype={
$1:function(a){if(a>=10)return""+a
return"0"+a},
$S:14}
P.bi.prototype={}
P.dr.prototype={
i:function(a){return"Throw of null."}}
P.aC.prototype={
gbC:function(){return"Invalid argument"+(!this.a?"(s)":"")},
gbB:function(){return""},
i:function(a){var u,t,s,r,q,p
u=this.c
t=u!=null?" ("+u+")":""
u=this.d
s=u==null?"":": "+u
r=this.gbC()+t+s
if(!this.a)return r
q=this.gbB()
p=P.fh(this.b)
return r+q+": "+p}}
P.bI.prototype={
gbC:function(){return"RangeError"},
gbB:function(){var u,t,s
u=this.e
if(u==null){u=this.f
t=u!=null?": Not less than or equal to "+H.l(u):""}else{s=this.f
if(s==null)t=": Not greater than or equal to "+H.l(u)
else if(s>u)t=": Not in range "+H.l(u)+".."+H.l(s)+", inclusive"
else t=s<u?": Valid value range is empty":": Only valid value is "+H.l(u)}return t}}
P.fu.prototype={
gbC:function(){return"RangeError"},
gbB:function(){var u,t
u=H.a4(this.b)
if(typeof u!=="number")return u.aL()
if(u<0)return": index must not be negative"
t=this.f
if(t===0)return": no indices are valid"
return": index should be less than "+H.l(t)},
gk:function(a){return this.f}}
P.i2.prototype={
i:function(a){return"Unsupported operation: "+this.a}}
P.i0.prototype={
i:function(a){var u=this.a
return u!=null?"UnimplementedError: "+u:"UnimplementedError"}}
P.ht.prototype={
i:function(a){return"Bad state: "+this.a}}
P.f2.prototype={
i:function(a){var u=this.a
if(u==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+P.fh(u)+"."}}
P.h4.prototype={
i:function(a){return"Out of Memory"},
$ibi:1}
P.dB.prototype={
i:function(a){return"Stack Overflow"},
$ibi:1}
P.f7.prototype={
i:function(a){var u=this.a
return u==null?"Reading static variable during its initialization":"Reading static variable '"+u+"' during its initialization"}}
P.e4.prototype={
i:function(a){return"Exception: "+this.a}}
P.fq.prototype={
i:function(a){var u,t,s,r
u=this.a
t=""!==u?"FormatException: "+u:"FormatException"
s=this.b
r=s.length>78?C.j.cA(s,0,75)+"...":s
return t+"\n"+r}}
P.z.prototype={}
P.e.prototype={
gk:function(a){var u,t
u=this.gT(this)
for(t=0;u.v();)++t
return t},
C:function(a,b){var u,t,s
if(b<0)H.t(P.ar(b,0,null,"index",null))
for(u=this.gT(this),t=0;u.v();){s=u.gI(u)
if(b===t)return s;++t}throw H.h(P.S(b,this,"index",null,t))},
i:function(a){return P.le(this,"(",")")}}
P.aI.prototype={}
P.b.prototype={$ie:1}
P.L.prototype={}
P.G.prototype={
gE:function(a){return P.M.prototype.gE.call(this,this)},
i:function(a){return"null"}}
P.X.prototype={}
P.M.prototype={constructor:P.M,$iM:1,
q:function(a,b){return this===b},
gE:function(a){return H.ci(this)},
i:function(a){return"Instance of '"+H.bH(this)+"'"},
toString:function(){return this.i(this)}}
P.ak.prototype={}
P.o.prototype={$ik_:1}
P.bp.prototype={
gk:function(a){return this.a.length},
i:function(a){var u=this.a
return u.charCodeAt(0)==0?u:u}}
W.q.prototype={}
W.eP.prototype={
gk:function(a){return a.length}}
W.eR.prototype={
i:function(a){return String(a)}}
W.eS.prototype={
i:function(a){return String(a)}}
W.cT.prototype={}
W.cU.prototype={}
W.bz.prototype={
cs:function(a,b,c){if(c!=null)return this.fc(a,b,P.m3(c,null))
return this.fd(a,b)},
ei:function(a,b){return this.cs(a,b,null)},
fc:function(a,b,c){return a.getContext(b,c)},
fd:function(a,b){return a.getContext(b)},
$ibz:1,
$ijL:1}
W.bA.prototype={
fe:function(a,b,c,d,e){return a.getImageData(b,c,d,e)},
iN:function(a,b,c,d,e,f){return a.drawImage(b,c,d,e,f)},
$ibA:1}
W.bg.prototype={
gk:function(a){return a.length}}
W.c1.prototype={$ic1:1}
W.f3.prototype={
gk:function(a){return a.length}}
W.N.prototype={$iN:1}
W.bC.prototype={
eV:function(a,b){var u,t
u=$.kJ()
t=u[b]
if(typeof t==="string")return t
t=this.hI(a,b)
u[b]=t
return t},
hI:function(a,b){var u
if(b.replace(/^-ms-/,"ms-").replace(/-([\da-z])/ig,function(c,d){return d.toUpperCase()}) in a)return b
u=P.lb()+b
if(u in a)return u
return b},
hw:function(a,b,c,d){a.setProperty(b,c,d)},
gk:function(a){return a.length}}
W.f4.prototype={}
W.aE.prototype={}
W.aF.prototype={}
W.f5.prototype={
gk:function(a){return a.length}}
W.f6.prototype={
gk:function(a){return a.length}}
W.f8.prototype={
gk:function(a){return a.length}}
W.c2.prototype={$ic2:1}
W.c3.prototype={
ct:function(a,b){return a.getElementById(b)}}
W.f9.prototype={
i:function(a){return String(a)}}
W.d3.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.h(P.S(b,a,null,null,null))
return a[b]},
C:function(a,b){if(b<0||b>=a.length)return H.i(a,b)
return a[b]},
$iC:1,
$aC:function(){return[[P.a7,P.X]]},
$au:function(){return[[P.a7,P.X]]},
$ie:1,
$ae:function(){return[[P.a7,P.X]]},
$ib:1,
$ab:function(){return[[P.a7,P.X]]},
$ax:function(){return[[P.a7,P.X]]}}
W.d4.prototype={
i:function(a){return"Rectangle ("+H.l(a.left)+", "+H.l(a.top)+") "+H.l(this.gaA(a))+" x "+H.l(this.gaw(a))},
q:function(a,b){var u
if(b==null)return!1
if(!H.cM(b,"$ia7",[P.X],"$aa7"))return!1
u=J.bO(b)
return a.left===u.gbs(b)&&a.top===u.gbv(b)&&this.gaA(a)===u.gaA(b)&&this.gaw(a)===u.gaw(b)},
gE:function(a){return W.kk(C.f.gE(a.left),C.f.gE(a.top),C.f.gE(this.gaA(a)),C.f.gE(this.gaw(a)))},
gdh:function(a){return a.bottom},
gaw:function(a){return a.height},
gbs:function(a){return a.left},
gbu:function(a){return a.right},
gbv:function(a){return a.top},
gaA:function(a){return a.width},
$ia7:1,
$aa7:function(){return[P.X]}}
W.fa.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.h(P.S(b,a,null,null,null))
return a[b]},
C:function(a,b){if(b<0||b>=a.length)return H.i(a,b)
return a[b]},
$iC:1,
$aC:function(){return[P.o]},
$au:function(){return[P.o]},
$ie:1,
$ae:function(){return[P.o]},
$ib:1,
$ab:function(){return[P.o]},
$ax:function(){return[P.o]}}
W.fb.prototype={
gk:function(a){return a.length}}
W.iq.prototype={
gk:function(a){return this.b.length},
j:function(a,b){var u=this.b
if(b<0||b>=u.length)return H.i(u,b)
return H.n(u[b],"$ia_")},
h:function(a,b){J.jH(this.a,b)
return b},
gT:function(a){var u=this.jr(this)
return new J.ah(u,u.length,0,[H.w(u,0)])},
$au:function(){return[W.a_]},
$ae:function(){return[W.a_]},
$ab:function(){return[W.a_]}}
W.a_.prototype={
gdk:function(a){return new W.iq(a,a.children)},
gdl:function(a){var u,t,s,r
u=a.clientLeft
t=a.clientTop
s=a.clientWidth
r=a.clientHeight
if(typeof s!=="number")return s.aL()
if(s<0)s=-s*0
if(typeof r!=="number")return r.aL()
if(r<0)r=-r*0
return new P.a7(u,t,s,r,[P.X])},
i:function(a){return a.localName},
$ia_:1}
W.j.prototype={$ij:1}
W.d.prototype={
im:function(a,b,c,d){H.m(c,{func:1,args:[W.j]})
if(c!=null)this.eQ(a,b,c,!1)},
eQ:function(a,b,c,d){return a.addEventListener(b,H.bM(H.m(c,{func:1,args:[W.j]}),1),!1)},
$id:1}
W.aG.prototype={$iaG:1}
W.fk.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.h(P.S(b,a,null,null,null))
return a[b]},
C:function(a,b){if(b<0||b>=a.length)return H.i(a,b)
return a[b]},
$iC:1,
$aC:function(){return[W.aG]},
$au:function(){return[W.aG]},
$ie:1,
$ae:function(){return[W.aG]},
$ib:1,
$ab:function(){return[W.aG]},
$ax:function(){return[W.aG]}}
W.fl.prototype={
gk:function(a){return a.length}}
W.fp.prototype={
gk:function(a){return a.length}}
W.aH.prototype={$iaH:1}
W.fs.prototype={
gk:function(a){return a.length}}
W.bE.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.h(P.S(b,a,null,null,null))
return a[b]},
C:function(a,b){if(b<0||b>=a.length)return H.i(a,b)
return a[b]},
$iC:1,
$aC:function(){return[W.F]},
$au:function(){return[W.F]},
$ie:1,
$ae:function(){return[W.F]},
$ib:1,
$ab:function(){return[W.F]},
$ibE:1,
$ax:function(){return[W.F]}}
W.d8.prototype={}
W.bj.prototype={$ibj:1,
gdn:function(a){return a.data}}
W.c8.prototype={$ic8:1,$ijL:1}
W.aL.prototype={$iaL:1}
W.fE.prototype={
i:function(a){return String(a)}}
W.cc.prototype={}
W.fP.prototype={
gk:function(a){return a.length}}
W.fQ.prototype={
j:function(a,b){return P.b9(a.get(H.R(b)))},
N:function(a,b){var u,t
H.m(b,{func:1,ret:-1,args:[P.o,,]})
u=a.entries()
for(;!0;){t=u.next()
if(t.done)return
b.$2(t.value[0],P.b9(t.value[1]))}},
gax:function(a){var u=H.c([],[P.o])
this.N(a,new W.fR(u))
return u},
gk:function(a){return a.size},
$aa9:function(){return[P.o,null]},
$iL:1,
$aL:function(){return[P.o,null]}}
W.fR.prototype={
$2:function(a,b){return C.a.h(this.a,a)},
$S:6}
W.fS.prototype={
j:function(a,b){return P.b9(a.get(H.R(b)))},
N:function(a,b){var u,t
H.m(b,{func:1,ret:-1,args:[P.o,,]})
u=a.entries()
for(;!0;){t=u.next()
if(t.done)return
b.$2(t.value[0],P.b9(t.value[1]))}},
gax:function(a){var u=H.c([],[P.o])
this.N(a,new W.fT(u))
return u},
gk:function(a){return a.size},
$aa9:function(){return[P.o,null]},
$iL:1,
$aL:function(){return[P.o,null]}}
W.fT.prototype={
$2:function(a,b){return C.a.h(this.a,a)},
$S:6}
W.aO.prototype={$iaO:1}
W.fU.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.h(P.S(b,a,null,null,null))
return a[b]},
C:function(a,b){if(b<0||b>=a.length)return H.i(a,b)
return a[b]},
$iC:1,
$aC:function(){return[W.aO]},
$au:function(){return[W.aO]},
$ie:1,
$ae:function(){return[W.aO]},
$ib:1,
$ab:function(){return[W.aO]},
$ax:function(){return[W.aO]}}
W.a6.prototype={$ia6:1}
W.ip.prototype={
gT:function(a){var u=this.a.childNodes
return new W.d6(u,u.length,-1,[H.cO(C.O,u,"x",0)])},
gk:function(a){return this.a.childNodes.length},
j:function(a,b){var u=this.a.childNodes
if(b<0||b>=u.length)return H.i(u,b)
return u[b]},
$au:function(){return[W.F]},
$ae:function(){return[W.F]},
$ab:function(){return[W.F]}}
W.F.prototype={
jh:function(a,b){var u,t
try{u=a.parentNode
J.l_(u,b,a)}catch(t){H.ba(t)}return a},
i:function(a){var u=a.nodeValue
return u==null?this.eu(a):u},
Y:function(a,b){return a.appendChild(b)},
hr:function(a,b,c){return a.replaceChild(b,c)},
$iF:1}
W.cg.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.h(P.S(b,a,null,null,null))
return a[b]},
C:function(a,b){if(b<0||b>=a.length)return H.i(a,b)
return a[b]},
$iC:1,
$aC:function(){return[W.F]},
$au:function(){return[W.F]},
$ie:1,
$ae:function(){return[W.F]},
$ib:1,
$ab:function(){return[W.F]},
$ax:function(){return[W.F]}}
W.aQ.prototype={$iaQ:1,
gk:function(a){return a.length}}
W.h6.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.h(P.S(b,a,null,null,null))
return a[b]},
C:function(a,b){if(b<0||b>=a.length)return H.i(a,b)
return a[b]},
$iC:1,
$aC:function(){return[W.aQ]},
$au:function(){return[W.aQ]},
$ie:1,
$ae:function(){return[W.aQ]},
$ib:1,
$ab:function(){return[W.aQ]},
$ax:function(){return[W.aQ]}}
W.hf.prototype={
j:function(a,b){return P.b9(a.get(H.R(b)))},
N:function(a,b){var u,t
H.m(b,{func:1,ret:-1,args:[P.o,,]})
u=a.entries()
for(;!0;){t=u.next()
if(t.done)return
b.$2(t.value[0],P.b9(t.value[1]))}},
gax:function(a){var u=H.c([],[P.o])
this.N(a,new W.hg(u))
return u},
gk:function(a){return a.size},
$aa9:function(){return[P.o,null]},
$iL:1,
$aL:function(){return[P.o,null]}}
W.hg.prototype={
$2:function(a,b){return C.a.h(this.a,a)},
$S:6}
W.hi.prototype={
gk:function(a){return a.length}}
W.aR.prototype={$iaR:1}
W.hq.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.h(P.S(b,a,null,null,null))
return a[b]},
C:function(a,b){if(b<0||b>=a.length)return H.i(a,b)
return a[b]},
$iC:1,
$aC:function(){return[W.aR]},
$au:function(){return[W.aR]},
$ie:1,
$ae:function(){return[W.aR]},
$ib:1,
$ab:function(){return[W.aR]},
$ax:function(){return[W.aR]}}
W.aS.prototype={$iaS:1}
W.hr.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.h(P.S(b,a,null,null,null))
return a[b]},
C:function(a,b){if(b<0||b>=a.length)return H.i(a,b)
return a[b]},
$iC:1,
$aC:function(){return[W.aS]},
$au:function(){return[W.aS]},
$ie:1,
$ae:function(){return[W.aS]},
$ib:1,
$ab:function(){return[W.aS]},
$ax:function(){return[W.aS]}}
W.aT.prototype={$iaT:1,
gk:function(a){return a.length}}
W.hv.prototype={
j:function(a,b){return this.cW(a,H.R(b))},
N:function(a,b){var u,t
H.m(b,{func:1,ret:-1,args:[P.o,P.o]})
for(u=0;!0;++u){t=this.fh(a,u)
if(t==null)return
b.$2(t,this.cW(a,t))}},
gax:function(a){var u=H.c([],[P.o])
this.N(a,new W.hw(u))
return u},
gk:function(a){return a.length},
cW:function(a,b){return a.getItem(b)},
fh:function(a,b){return a.key(b)},
$aa9:function(){return[P.o,P.o]},
$iL:1,
$aL:function(){return[P.o,P.o]}}
W.hw.prototype={
$2:function(a,b){return C.a.h(this.a,a)},
$S:37}
W.ax.prototype={$iax:1}
W.aU.prototype={$iaU:1}
W.ay.prototype={$iay:1}
W.hD.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.h(P.S(b,a,null,null,null))
return a[b]},
C:function(a,b){if(b<0||b>=a.length)return H.i(a,b)
return a[b]},
$iC:1,
$aC:function(){return[W.ay]},
$au:function(){return[W.ay]},
$ie:1,
$ae:function(){return[W.ay]},
$ib:1,
$ab:function(){return[W.ay]},
$ax:function(){return[W.ay]}}
W.hE.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.h(P.S(b,a,null,null,null))
return a[b]},
C:function(a,b){if(b<0||b>=a.length)return H.i(a,b)
return a[b]},
$iC:1,
$aC:function(){return[W.aU]},
$au:function(){return[W.aU]},
$ie:1,
$ae:function(){return[W.aU]},
$ib:1,
$ab:function(){return[W.aU]},
$ax:function(){return[W.aU]}}
W.hK.prototype={
gk:function(a){return a.length}}
W.aW.prototype={$iaW:1}
W.az.prototype={$iaz:1}
W.hN.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.h(P.S(b,a,null,null,null))
return a[b]},
C:function(a,b){if(b<0||b>=a.length)return H.i(a,b)
return a[b]},
$iC:1,
$aC:function(){return[W.aW]},
$au:function(){return[W.aW]},
$ie:1,
$ae:function(){return[W.aW]},
$ib:1,
$ab:function(){return[W.aW]},
$ax:function(){return[W.aW]}}
W.hO.prototype={
gk:function(a){return a.length}}
W.br.prototype={}
W.i3.prototype={
i:function(a){return String(a)}}
W.ig.prototype={$ijL:1}
W.ih.prototype={
gk:function(a){return a.length}}
W.aZ.prototype={
giJ:function(a){if(a.deltaY!==undefined)return a.deltaY
throw H.h(P.ao("deltaY is not supported"))},
giI:function(a){if(a.deltaX!==undefined)return a.deltaX
throw H.h(P.ao("deltaX is not supported"))},
$iaZ:1}
W.cx.prototype={
hs:function(a,b){return a.requestAnimationFrame(H.bM(H.m(b,{func:1,ret:-1,args:[P.X]}),1))},
f4:function(a){if(!!(a.requestAnimationFrame&&a.cancelAnimationFrame))return;(function(b){var u=['ms','moz','webkit','o']
for(var t=0;t<u.length&&!b.requestAnimationFrame;++t){b.requestAnimationFrame=b[u[t]+'RequestAnimationFrame']
b.cancelAnimationFrame=b[u[t]+'CancelAnimationFrame']||b[u[t]+'CancelRequestAnimationFrame']}if(b.requestAnimationFrame&&b.cancelAnimationFrame)return
b.requestAnimationFrame=function(c){return window.setTimeout(function(){c(Date.now())},16)}
b.cancelAnimationFrame=function(c){clearTimeout(c)}})(a)}}
W.ir.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.h(P.S(b,a,null,null,null))
return a[b]},
C:function(a,b){if(b<0||b>=a.length)return H.i(a,b)
return a[b]},
$iC:1,
$aC:function(){return[W.N]},
$au:function(){return[W.N]},
$ie:1,
$ae:function(){return[W.N]},
$ib:1,
$ab:function(){return[W.N]},
$ax:function(){return[W.N]}}
W.e_.prototype={
i:function(a){return"Rectangle ("+H.l(a.left)+", "+H.l(a.top)+") "+H.l(a.width)+" x "+H.l(a.height)},
q:function(a,b){var u
if(b==null)return!1
if(!H.cM(b,"$ia7",[P.X],"$aa7"))return!1
u=J.bO(b)
return a.left===u.gbs(b)&&a.top===u.gbv(b)&&a.width===u.gaA(b)&&a.height===u.gaw(b)},
gE:function(a){return W.kk(C.f.gE(a.left),C.f.gE(a.top),C.f.gE(a.width),C.f.gE(a.height))},
gaw:function(a){return a.height},
gaA:function(a){return a.width}}
W.iE.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.h(P.S(b,a,null,null,null))
return a[b]},
C:function(a,b){if(b<0||b>=a.length)return H.i(a,b)
return a[b]},
$iC:1,
$aC:function(){return[W.aH]},
$au:function(){return[W.aH]},
$ie:1,
$ae:function(){return[W.aH]},
$ib:1,
$ab:function(){return[W.aH]},
$ax:function(){return[W.aH]}}
W.eg.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.h(P.S(b,a,null,null,null))
return a[b]},
C:function(a,b){if(b<0||b>=a.length)return H.i(a,b)
return a[b]},
$iC:1,
$aC:function(){return[W.F]},
$au:function(){return[W.F]},
$ie:1,
$ae:function(){return[W.F]},
$ib:1,
$ab:function(){return[W.F]},
$ax:function(){return[W.F]}}
W.iP.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.h(P.S(b,a,null,null,null))
return a[b]},
C:function(a,b){if(b<0||b>=a.length)return H.i(a,b)
return a[b]},
$iC:1,
$aC:function(){return[W.aT]},
$au:function(){return[W.aT]},
$ie:1,
$ae:function(){return[W.aT]},
$ib:1,
$ab:function(){return[W.aT]},
$ax:function(){return[W.aT]}}
W.iQ.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.h(P.S(b,a,null,null,null))
return a[b]},
C:function(a,b){if(b<0||b>=a.length)return H.i(a,b)
return a[b]},
$iC:1,
$aC:function(){return[W.ax]},
$au:function(){return[W.ax]},
$ie:1,
$ae:function(){return[W.ax]},
$ib:1,
$ab:function(){return[W.ax]},
$ax:function(){return[W.ax]}}
W.is.prototype={}
W.js.prototype={}
W.it.prototype={}
W.iu.prototype={
$1:function(a){return this.a.$1(H.n(a,"$ij"))},
$S:24}
W.x.prototype={
gT:function(a){return new W.d6(a,this.gk(a),-1,[H.cO(this,a,"x",0)])}}
W.d6.prototype={
v:function(){var u,t
u=this.c+1
t=this.b
if(u<t){this.scX(J.kZ(this.a,u))
this.c=u
return!0}this.scX(null)
this.c=t
return!1},
gI:function(a){return this.d},
scX:function(a){this.d=H.B(a,H.w(this,0))},
$iaI:1}
W.dZ.prototype={}
W.e0.prototype={}
W.e1.prototype={}
W.e2.prototype={}
W.e3.prototype={}
W.e5.prototype={}
W.e6.prototype={}
W.e7.prototype={}
W.e8.prototype={}
W.ec.prototype={}
W.ed.prototype={}
W.ee.prototype={}
W.ef.prototype={}
W.eh.prototype={}
W.ei.prototype={}
W.el.prototype={}
W.em.prototype={}
W.en.prototype={}
W.cE.prototype={}
W.cF.prototype={}
W.eo.prototype={}
W.ep.prototype={}
W.et.prototype={}
W.ew.prototype={}
W.ex.prototype={}
W.cG.prototype={}
W.cH.prototype={}
W.ez.prototype={}
W.eA.prototype={}
W.eE.prototype={}
W.eF.prototype={}
W.eG.prototype={}
W.eH.prototype={}
W.eI.prototype={}
W.eJ.prototype={}
W.eK.prototype={}
W.eL.prototype={}
W.eM.prototype={}
W.eN.prototype={}
P.eD.prototype={$ibj:1,
gdn:function(a){return this.a}}
P.j_.prototype={
$2:function(a,b){this.a[a]=b},
$S:13}
P.fm.prototype={
gbF:function(){var u,t,s
u=this.b
t=H.av(u,"u",0)
s=W.a_
return new H.fI(new H.ii(u,H.m(new P.fn(),{func:1,ret:P.a3,args:[t]}),[t]),H.m(new P.fo(),{func:1,ret:s,args:[t]}),[t,s])},
h:function(a,b){J.jH(this.b.a,b)},
gk:function(a){return J.bV(this.gbF().a)},
j:function(a,b){var u=this.gbF()
return u.b.$1(J.jI(u.a,b))},
gT:function(a){var u=P.jW(this.gbF(),!1,W.a_)
return new J.ah(u,u.length,0,[H.w(u,0)])},
$au:function(){return[W.a_]},
$ae:function(){return[W.a_]},
$ab:function(){return[W.a_]}}
P.fn.prototype={
$1:function(a){return!!J.W(H.n(a,"$iF")).$ia_},
$S:25}
P.fo.prototype={
$1:function(a){return H.f(H.n(a,"$iF"),"$ia_")},
$S:26}
P.iJ.prototype={
gbu:function(a){var u=this.a
if(typeof u!=="number")return u.D()
return H.B(u+this.c,H.w(this,0))},
gdh:function(a){var u=this.b
if(typeof u!=="number")return u.D()
return H.B(u+this.d,H.w(this,0))},
i:function(a){return"Rectangle ("+H.l(this.a)+", "+H.l(this.b)+") "+this.c+" x "+this.d},
q:function(a,b){var u,t,s,r
if(b==null)return!1
if(H.cM(b,"$ia7",[P.X],"$aa7")){u=this.a
t=J.bO(b)
if(u==t.gbs(b)){s=this.b
if(s==t.gbv(b)){if(typeof u!=="number")return u.D()
r=H.w(this,0)
if(H.B(u+this.c,r)===t.gbu(b)){if(typeof s!=="number")return s.D()
u=H.B(s+this.d,r)===t.gdh(b)}else u=!1}else u=!1}else u=!1}else u=!1
return u},
gE:function(a){var u,t,s,r,q
u=this.a
t=J.bw(u)
s=this.b
r=J.bw(s)
if(typeof u!=="number")return u.D()
q=H.w(this,0)
u=C.i.gE(H.B(u+this.c,q))
if(typeof s!=="number")return s.D()
q=C.i.gE(H.B(s+this.d,q))
return P.lO(P.iG(P.iG(P.iG(P.iG(0,t),r),u),q))}}
P.a7.prototype={
gbs:function(a){return this.a},
gbv:function(a){return this.b},
gaA:function(a){return this.c},
gaw:function(a){return this.d}}
P.b0.prototype={$ib0:1}
P.fA.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.h(P.S(b,a,null,null,null))
return this.an(a,b)},
C:function(a,b){return this.j(a,b)},
an:function(a,b){return a.getItem(b)},
$au:function(){return[P.b0]},
$ie:1,
$ae:function(){return[P.b0]},
$ib:1,
$ab:function(){return[P.b0]},
$ax:function(){return[P.b0]}}
P.b5.prototype={$ib5:1}
P.h2.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.h(P.S(b,a,null,null,null))
return this.an(a,b)},
C:function(a,b){return this.j(a,b)},
an:function(a,b){return a.getItem(b)},
$au:function(){return[P.b5]},
$ie:1,
$ae:function(){return[P.b5]},
$ib:1,
$ab:function(){return[P.b5]},
$ax:function(){return[P.b5]}}
P.h8.prototype={
gk:function(a){return a.length}}
P.hB.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.h(P.S(b,a,null,null,null))
return this.an(a,b)},
C:function(a,b){return this.j(a,b)},
an:function(a,b){return a.getItem(b)},
$au:function(){return[P.o]},
$ie:1,
$ae:function(){return[P.o]},
$ib:1,
$ab:function(){return[P.o]},
$ax:function(){return[P.o]}}
P.p.prototype={
gdk:function(a){return new P.fm(a,new W.ip(a))}}
P.b8.prototype={$ib8:1}
P.hP.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.h(P.S(b,a,null,null,null))
return this.an(a,b)},
C:function(a,b){return this.j(a,b)},
an:function(a,b){return a.getItem(b)},
$au:function(){return[P.b8]},
$ie:1,
$ae:function(){return[P.b8]},
$ib:1,
$ab:function(){return[P.b8]},
$ax:function(){return[P.b8]}}
P.e9.prototype={}
P.ea.prototype={}
P.ej.prototype={}
P.ek.prototype={}
P.eu.prototype={}
P.ev.prototype={}
P.eB.prototype={}
P.eC.prototype={}
P.eU.prototype={
gk:function(a){return a.length}}
P.eV.prototype={
j:function(a,b){return P.b9(a.get(H.R(b)))},
N:function(a,b){var u,t
H.m(b,{func:1,ret:-1,args:[P.o,,]})
u=a.entries()
for(;!0;){t=u.next()
if(t.done)return
b.$2(t.value[0],P.b9(t.value[1]))}},
gax:function(a){var u=H.c([],[P.o])
this.N(a,new P.eW(u))
return u},
gk:function(a){return a.size},
$aa9:function(){return[P.o,null]},
$iL:1,
$aL:function(){return[P.o,null]}}
P.eW.prototype={
$2:function(a,b){return C.a.h(this.a,a)},
$S:6}
P.eX.prototype={
gk:function(a){return a.length}}
P.bx.prototype={}
P.h3.prototype={
gk:function(a){return a.length}}
P.dY.prototype={}
P.cV.prototype={$icV:1}
P.d7.prototype={$id7:1}
P.du.prototype={$idu:1}
P.bJ.prototype={
ba:function(a,b){return a.activeTexture(b)},
df:function(a,b,c){return a.attachShader(b,c)},
aj:function(a,b,c){return a.bindBuffer(b,c)},
it:function(a,b,c){return a.bindFramebuffer(b,c)},
a3:function(a,b,c){return a.bindTexture(b,c)},
iu:function(a,b,c){return a.blendFunc(b,c)},
di:function(a,b,c,d){return a.bufferData(b,c,d)},
iw:function(a,b){return a.clear(b)},
ix:function(a,b,c,d,e){return a.clearColor(b,c,d,e)},
iy:function(a,b){return a.clearDepth(b)},
iz:function(a,b){return a.compileShader(b)},
iE:function(a,b){return a.createShader(b)},
iG:function(a,b){return a.deleteProgram(b)},
iH:function(a,b){return a.deleteShader(b)},
iK:function(a,b){return a.depthFunc(b)},
iL:function(a,b){return a.disable(b)},
dr:function(a,b){return a.disableVertexAttribArray(b)},
iM:function(a,b,c,d,e){return a.drawElements(b,c,H.a4(d),H.a4(e))},
c5:function(a,b){return a.enable(b)},
dz:function(a,b){return a.enableVertexAttribArray(b)},
ee:function(a,b){return a.generateMipmap(b)},
ef:function(a,b,c){return a.getActiveAttrib(b,c)},
eg:function(a,b,c){return a.getActiveUniform(b,c)},
eh:function(a,b,c){return a.getAttribLocation(b,c)},
cu:function(a,b){return a.getParameter(b)},
ej:function(a,b){return a.getProgramInfoLog(b)},
bx:function(a,b,c){return a.getProgramParameter(b,c)},
ek:function(a,b){return a.getShaderInfoLog(b)},
el:function(a,b,c){return a.getShaderParameter(b,c)},
em:function(a,b,c){return a.getUniformLocation(b,c)},
iW:function(a,b){return a.linkProgram(b)},
e3:function(a,b,c){return a.pixelStorei(b,c)},
er:function(a,b,c){return a.shaderSource(b,c)},
jn:function(a,b,c,d,e,f,g,h,i,j){var u,t
u=J.W(g)
if(!!u.$ibj)t=!0
else t=!1
if(t){this.hK(a,b,c,d,e,f,P.m4(g))
return}if(!!u.$ic8)u=!0
else u=!1
if(u){this.hL(a,b,c,d,e,f,g)
return}throw H.h(P.l3("Incorrect number or type of arguments"))},
e7:function(a,b,c,d,e,f,g){return this.jn(a,b,c,d,e,f,g,null,null,null)},
hK:function(a,b,c,d,e,f,g){return a.texImage2D(b,c,d,e,f,g)},
hL:function(a,b,c,d,e,f,g){return a.texImage2D(b,c,d,e,f,g)},
am:function(a,b,c,d){return a.texParameteri(b,c,d)},
F:function(a,b,c){return a.uniform1f(b,c)},
H:function(a,b,c){return a.uniform1i(b,c)},
p:function(a,b,c,d,e){return a.uniform3f(b,c,d,e)},
eb:function(a,b,c,d){return a.uniformMatrix3fv(b,!1,d)},
ec:function(a,b,c,d){return a.uniformMatrix4fv(b,!1,d)},
cq:function(a,b){return a.useProgram(b)},
ju:function(a,b,c,d,e,f,g){return a.vertexAttribPointer(b,c,d,!1,f,g)},
jv:function(a,b,c,d,e){return a.viewport(b,c,d,e)},
$ibJ:1}
P.dw.prototype={$idw:1}
P.dC.prototype={$idC:1}
P.dM.prototype={$idM:1}
P.hs.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.h(P.S(b,a,null,null,null))
return P.b9(this.fg(a,b))},
C:function(a,b){return this.j(a,b)},
fg:function(a,b){return a.item(b)},
$au:function(){return[[P.L,,,]]},
$ie:1,
$ae:function(){return[[P.L,,,]]},
$ib:1,
$ab:function(){return[[P.L,,,]]},
$ax:function(){return[[P.L,,,]]}}
P.eq.prototype={}
P.er.prototype={}
O.V.prototype={
b3:function(a){this.sfl(H.c([],[a]))
this.sd2(null)
this.scZ(null)
this.sd3(null)},
cv:function(a,b,c){var u=H.av(this,"V",0)
H.m(b,{func:1,ret:P.a3,args:[[P.e,u]]})
u={func:1,ret:-1,args:[P.z,[P.e,u]]}
H.m(a,u)
H.m(c,u)
this.sd2(b)
this.scZ(a)
this.sd3(c)},
aM:function(a,b){return this.cv(a,null,b)},
d1:function(a){var u
H.k(a,"$ie",[H.av(this,"V",0)],"$ae")
u=this.b
if(u!=null)return u.$1(a)
return!0},
cE:function(a,b){var u
H.k(b,"$ie",[H.av(this,"V",0)],"$ae")
u=this.c
if(u!=null)u.$2(a,b)},
gk:function(a){return this.a.length},
gT:function(a){var u=this.a
return new J.ah(u,u.length,0,[H.w(u,0)])},
C:function(a,b){var u=this.a
if(b<0||b>=u.length)return H.i(u,b)
return u[b]},
h:function(a,b){var u,t,s
u=H.av(this,"V",0)
H.B(b,u)
u=[u]
if(this.d1(H.c([b],u))){t=this.a
s=t.length
C.a.h(t,b)
this.cE(s,H.c([b],u))}},
bV:function(a,b){var u,t
H.k(b,"$ie",[H.av(this,"V",0)],"$ae")
if(this.d1(b)){u=this.a
t=u.length
C.a.bV(u,b)
this.cE(t,b)}},
sfl:function(a){this.a=H.k(a,"$ib",[H.av(this,"V",0)],"$ab")},
sd2:function(a){this.b=H.m(a,{func:1,ret:P.a3,args:[[P.e,H.av(this,"V",0)]]})},
scZ:function(a){this.c=H.m(a,{func:1,ret:-1,args:[P.z,[P.e,H.av(this,"V",0)]]})},
sd3:function(a){this.d=H.m(a,{func:1,ret:-1,args:[P.z,[P.e,H.av(this,"V",0)]]})},
$ie:1}
O.cb.prototype={
gk:function(a){return this.a.length},
gm:function(){var u=this.b
if(u==null){u=D.I()
this.b=u}return u},
eD:function(a){var u=this.b
if(u!=null)u.B(a)},
aB:function(){return this.eD(null)},
gW:function(a){var u=this.a
if(u.length>0)return C.a.gcf(u)
else return V.bF()},
bt:function(a){var u=this.a
if(a==null)C.a.h(u,V.bF())
else C.a.h(u,a)
this.aB()},
ay:function(){var u=this.a
if(u.length>0){u.pop()
this.aB()}},
sbG:function(a){this.a=H.k(a,"$ib",[V.aj],"$ab")}}
E.eY.prototype={}
E.ae.prototype={
sby:function(a,b){var u,t,s
u=this.c
if(u!=b){this.c=b
this.d=b
this.e=null
if(u!=null)u.gm().P(0,this.ge1())
t=this.c
if(t!=null)t.gm().h(0,this.ge1())
s=new D.J("shape",u,this.c,this,[F.dx])
s.b=!0
this.aJ(s)}},
ab:function(a,b){var u
for(u=this.y.a,u=new J.ah(u,u.length,0,[H.w(u,0)]);u.v();)u.d.ab(0,b)},
a6:function(a){var u,t
u=a.dx
C.a.h(u.a,u.gW(u))
u.aB()
a.co(this.f)
u=a.dy
t=(u&&C.a).gcf(u)
if(t!=null&&this.d!=null)t.e4(a,this)
for(u=this.y.a,u=new J.ah(u,u.length,0,[H.w(u,0)]);u.v();)u.d.a6(a)
a.cn()
a.dx.ay()},
gm:function(){var u=this.z
if(u==null){u=D.I()
this.z=u}return u},
aJ:function(a){var u=this.z
if(u!=null)u.B(a)},
a1:function(){return this.aJ(null)},
e2:function(a){H.n(a,"$iv")
this.e=null
this.aJ(a)},
j6:function(){return this.e2(null)},
e0:function(a){this.aJ(H.n(a,"$iv"))},
j3:function(){return this.e0(null)},
j2:function(a,b){var u,t,s,r,q,p,o
H.k(b,"$ie",[E.ae],"$ae")
for(u=b.length,t=this.ge_(),s={func:1,ret:-1,args:[D.v]},r=[s],q=0;q<b.length;b.length===u||(0,H.A)(b),++q){p=b[q]
if(p!=null){o=p.z
if(o==null){o=new D.c4()
o.sai(null)
o.sb6(null)
o.c=null
o.d=0
p.z=o}H.m(t,s)
if(o.a==null)o.sai(H.c([],r))
o=o.a;(o&&C.a).h(o,t)}}this.a1()},
j5:function(a,b){var u,t
H.k(b,"$ie",[E.ae],"$ae")
for(u=b.gT(b),t=this.ge_();u.v();)u.gI(u).gm().P(0,t)
this.a1()},
i:function(a){var u,t
u=this.a
t=u.length
if(t<=0)return"Unnamed entity"
return u},
seE:function(a,b){this.y=H.k(b,"$iV",[E.ae],"$aV")},
$iaP:1}
E.hb.prototype={
eA:function(a,b){var u,t
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
u=new O.cb()
t=[V.aj]
u.sbG(H.c([],t))
u.b=null
u.gm().h(0,new E.hc(this))
this.cy=u
u=new O.cb()
u.sbG(H.c([],t))
u.b=null
u.gm().h(0,new E.hd(this))
this.db=u
u=new O.cb()
u.sbG(H.c([],t))
u.b=null
u.gm().h(0,new E.he(this))
this.dx=u
this.shJ(H.c([],[O.bq]))
u=this.dy;(u&&C.a).h(u,null)
this.shE(new H.aK([P.o,A.cj]))},
gjf:function(){var u,t
u=this.z
if(u==null){u=this.cy
u=u.gW(u)
t=this.db
t=u.n(0,t.gW(t))
this.z=t
u=t}return u},
co:function(a){var u,t
u=this.dy
t=a==null?(u&&C.a).gcf(u):a;(u&&C.a).h(u,t)},
cn:function(){var u=this.dy
if(u.length>1)u.pop()},
de:function(a){var u=a.b
if(u.length===0)throw H.h(P.r("May not cache a shader with no name."))
if(this.fr.dm(0,u))throw H.h(P.r('Shader cache already contains a shader by the name "'+u+'".'))
this.fr.a_(0,u,a)},
shJ:function(a){this.dy=H.k(a,"$ib",[O.bq],"$ab")},
shE:function(a){this.fr=H.k(a,"$iL",[P.o,A.cj],"$aL")}}
E.hc.prototype={
$1:function(a){var u
H.n(a,"$iv")
u=this.a
u.z=null
u.ch=null},
$S:8}
E.hd.prototype={
$1:function(a){var u
H.n(a,"$iv")
u=this.a
u.z=null
u.Q=null
u.ch=null
u.cx=null},
$S:8}
E.he.prototype={
$1:function(a){var u
H.n(a,"$iv")
u=this.a
u.ch=null
u.cx=null},
$S:8}
E.dI.prototype={
cH:function(a){H.n(a,"$iv")
this.e5()},
cG:function(){return this.cH(null)},
giR:function(){var u,t,s
u=Date.now()
t=C.i.a0(P.jS(0,0,0,u-this.cx.a,0,0).a,1000)/1000
if(t<=0)return 0
s=this.cy
this.cy=0
this.cx=new P.ai(u,!1)
return s/t},
d6:function(){var u,t,s,r
u=window.devicePixelRatio
t=this.b.clientWidth
if(typeof t!=="number")return t.n()
if(typeof u!=="number")return H.D(u)
s=C.f.cc(t*u)
t=this.b.clientHeight
if(typeof t!=="number")return t.n()
r=C.f.cc(t*u)
t=this.b
if(t.width!==s||t.height!==r){t.width=s
t.height=r
P.kb(C.o,this.gji())}},
e5:function(){var u,t
if(!this.ch){this.ch=!0
u=window
t=H.m(new E.hJ(this),{func:1,ret:-1,args:[P.X]})
C.A.f4(u)
C.A.hs(u,W.ks(t,P.X))}},
jg:function(){var u,t,s,r,q
try{++this.cy
this.ch=!1
this.d6()
if(this.d!=null){s=this.e;++s.e
s.r=s.x
r=Date.now()
s.x=new P.ai(r,!1)
s.y=P.jS(0,0,0,r-s.r.a,0,0).a*0.000001
r=s.cy
C.a.sk(r.a,0)
r.aB()
r=s.db
C.a.sk(r.a,0)
r.aB()
r=s.dx
C.a.sk(r.a,0)
r.aB()
r=s.dy;(r&&C.a).sk(r,0)
s=s.dy;(s&&C.a).h(s,null)
this.d.a6(this.e)}}catch(q){u=H.ba(q)
t=H.bP(q)
P.bQ("Error: "+H.l(u))
P.bQ("Stack: "+H.l(t))
throw H.h(u)}}}
E.hJ.prototype={
$1:function(a){var u
H.mj(a)
u=this.a
if(u.ch){u.ch=!1
u.jg()}},
$S:29}
Z.dV.prototype={$imr:1}
Z.cW.prototype={
Z:function(a){var u,t,s
try{t=a.a
C.b.dz(t,this.e)
C.b.ju(t,this.e,this.b,5126,!1,this.d,this.c)}catch(s){u=H.ba(s)
t=P.r('Failed to bind buffer attribute "'+this.a.i(0)+'": '+H.l(u))
throw H.h(t)}},
i:function(a){return"["+this.a.i(0)+", Size: "+this.b+", Offset: "+this.c+", Stride: "+this.d+", Attr: "+H.l(this.e)+"]"}}
Z.dW.prototype={$ims:1}
Z.bY.prototype={
av:function(a){var u,t,s,r
for(u=this.c,t=u.length,s=0;s<t;++s){r=u[s]
if((r.a.a&a.a)!==0)return r}return},
Z:function(a){var u,t
u=this.a
C.b.aj(a.a,u.a,u.b)
for(u=this.c,t=u.length-1;t>=0;--t)u[t].Z(a)},
b2:function(a){var u,t,s
for(u=this.c,t=u.length-1,s=a.a;t>=0;--t)C.b.dr(s,u[t].e)
C.b.aj(s,this.a.a,null)},
a6:function(a){var u,t,s,r,q,p
u=this.b.length
for(t=a.a,s=0;s<u;++s){r=this.b
if(s>=r.length)return H.i(r,s)
q=r[s]
r=q.c
p=r.a
C.b.aj(t,p,r.b)
C.b.iM(t,q.a,q.b,5123,0)
C.b.aj(t,p,null)}},
i:function(a){var u,t,s,r,q,p
u=[P.o]
t=H.c([],u)
for(s=this.b,r=s.length,q=0;q<s.length;s.length===r||(0,H.A)(s),++q)C.a.h(t,s[q].i(0))
p=H.c([],u)
for(u=this.c,s=u.length,q=0;q<s;++q)C.a.h(p,J.aq(u[q]))
return"Buffer:  ["+this.a.i(0)+"]\nIndices: "+C.a.w(t,", ")+"\nAttrs:   "+C.a.w(p,", ")},
sff:function(a){this.b=H.k(a,"$ib",[Z.bk],"$ab")},
$imz:1}
Z.bk.prototype={
i:function(a){return"Type: "+this.a+", Count: "+this.b+", ["+("Instance of '"+H.bH(this.c)+"'")+"]"}}
Z.aY.prototype={
gcw:function(a){var u,t
u=this.a
t=(u&$.aB().a)!==0?3:0
if((u&$.bd().a)!==0)t+=3
if((u&$.bc().a)!==0)t+=3
if((u&$.be().a)!==0)t+=2
if((u&$.bf().a)!==0)t+=3
if((u&$.cP().a)!==0)t+=3
if((u&$.cQ().a)!==0)t+=4
if((u&$.bT().a)!==0)++t
return(u&$.bb().a)!==0?t+4:t},
ir:function(a){var u,t,s
u=$.aB()
t=this.a
if((t&u.a)!==0){if(0===a)return u
s=1}else s=0
u=$.bd()
if((t&u.a)!==0){if(s===a)return u;++s}u=$.bc()
if((t&u.a)!==0){if(s===a)return u;++s}u=$.be()
if((t&u.a)!==0){if(s===a)return u;++s}u=$.bf()
if((t&u.a)!==0){if(s===a)return u;++s}u=$.cP()
if((t&u.a)!==0){if(s===a)return u;++s}u=$.cQ()
if((t&u.a)!==0){if(s===a)return u;++s}u=$.bT()
if((t&u.a)!==0){if(s===a)return u;++s}u=$.bb()
if((t&u.a)!==0)if(s===a)return u
return $.kX()},
q:function(a,b){if(b==null)return!1
if(!(b instanceof Z.aY))return!1
return this.a===b.a},
i:function(a){var u,t
u=H.c([],[P.o])
t=this.a
if((t&$.aB().a)!==0)C.a.h(u,"Pos")
if((t&$.bd().a)!==0)C.a.h(u,"Norm")
if((t&$.bc().a)!==0)C.a.h(u,"Binm")
if((t&$.be().a)!==0)C.a.h(u,"Txt2D")
if((t&$.bf().a)!==0)C.a.h(u,"TxtCube")
if((t&$.cP().a)!==0)C.a.h(u,"Clr3")
if((t&$.cQ().a)!==0)C.a.h(u,"Clr4")
if((t&$.bT().a)!==0)C.a.h(u,"Weight")
if((t&$.bb().a)!==0)C.a.h(u,"Bending")
if(u.length<=0)return"None"
return C.a.w(u,"|")}}
D.f0.prototype={}
D.c4.prototype={
h:function(a,b){var u={func:1,ret:-1,args:[D.v]}
H.m(b,u)
if(this.a==null)this.sai(H.c([],[u]))
u=this.a;(u&&C.a).h(u,b)},
P:function(a,b){var u,t
H.m(b,{func:1,ret:-1,args:[D.v]})
u=this.a
u=u==null?null:C.a.au(u,b)
if(u===!0){u=this.a
t=(u&&C.a).P(u,b)||!1}else t=!1
u=this.b
u=u==null?null:C.a.au(u,b)
if(u===!0){u=this.b
t=(u&&C.a).P(u,b)||t}return t},
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
return!0}if(!s)C.a.N(P.jW(t,!0,{func:1,ret:-1,args:[D.v]}),new D.fi(u))
t=this.b
if(t!=null){this.sb6(H.c([],[{func:1,ret:-1,args:[D.v]}]))
C.a.N(t,new D.fj(u))}return!0},
dw:function(){return this.B(null)},
jj:function(a,b,c){var u,t
u=this.d
if(u>0){--u
this.d=u
if(u<=0)u=this.c!=null
else u=!1
if(u){t=this.c
this.c=null
this.B(t)}}},
az:function(a){return this.jj(a,!0,!1)},
sai:function(a){this.a=H.k(a,"$ib",[{func:1,ret:-1,args:[D.v]}],"$ab")},
sb6:function(a){this.b=H.k(a,"$ib",[{func:1,ret:-1,args:[D.v]}],"$ab")}}
D.fi.prototype={
$1:function(a){var u
H.m(a,{func:1,ret:-1,args:[D.v]})
u=this.a.a
u.b
a.$1(u)},
$S:18}
D.fj.prototype={
$1:function(a){var u
H.m(a,{func:1,ret:-1,args:[D.v]})
u=this.a.a
u.b
a.$1(u)},
$S:18}
D.v.prototype={}
D.bl.prototype={}
D.bm.prototype={}
D.J.prototype={
i:function(a){return"ValueChanged: "+this.c+", "+H.l(this.d)+" => "+H.l(this.e)}}
X.cX.prototype={
q:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.cX))return!1
if(this.a!=b.a)return!1
if(!this.b.q(0,b.b))return!1
return!0},
i:function(a){return this.b.i(0)+H.l(this.a)}}
X.de.prototype={
q:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.de))return!1
if(this.a!=b.a)return!1
if(!this.b.q(0,b.b))return!1
return!0},
i:function(a){return this.b.i(0)+H.l(this.a)}}
X.fz.prototype={
jc:function(a){this.c=a.b
this.d.h(0,a.a)
return!1},
j8:function(a){this.c=a.b
this.d.P(0,a.a)
return!1},
shn:function(a){this.d=H.k(a,"$ik8",[P.z],"$ak8")}}
X.di.prototype={}
X.fF.prototype={
aQ:function(a,b){var u,t,s,r,q,p,o,n
u=new P.ai(Date.now(),!1)
t=this.x
s=b.a
r=this.Q
if(typeof s!=="number")return s.n()
q=b.b
p=this.ch
if(typeof q!=="number")return q.n()
o=new V.a1(t.a+s*r,t.b+q*p)
p=this.a.gaH()
n=new X.b3(a,V.b6(),this.x,this.y,this.z,p,o,u,this)
n.b=!0
this.z=u
this.x=o
return n},
cm:function(a,b){this.r=a.a
return!1},
aW:function(a,b){var u,t
u=this.r
t=a.a
if(typeof t!=="number")return t.eo()
if(typeof u!=="number")return u.ed()
this.r=(u&~t)>>>0
return!1},
aV:function(a,b){var u=this.d
if(u==null)return!1
u.B(this.aQ(a,b))
return!0},
jd:function(a){var u,t,s,r,q,p,o,n
u=this.e
if(u==null)return!1
t=this.a.gaH()
s=this.x
r=Date.now()
q=a.a
p=this.cx
if(typeof q!=="number")return q.n()
o=a.b
n=this.cy
if(typeof o!=="number")return o.n()
r=new X.cd(new V.O(q*p,o*n),t,s,new P.ai(r,!1),this)
r.b=!0
u.B(r)
return!0},
fW:function(a,b,c){var u,t,s
if(this.f==null)return
u=new P.ai(Date.now(),!1)
t=this.f
s=new X.di(c,a,this.a.gaH(),b,u,this)
s.b=!0
t.B(s)
this.y=u
this.x=V.b6()}}
X.am.prototype={
q:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.am))return!1
if(this.a!==b.a)return!1
if(this.b!=b.b)return!1
if(this.c!=b.c)return!1
return!0},
i:function(a){var u=this.a?"Ctrl+":""
u+=this.b?"Alt+":""
return u+(this.c?"Shift+":"")}}
X.b3.prototype={}
X.fV.prototype={
bD:function(a,b,c){var u,t,s
u=new P.ai(Date.now(),!1)
t=this.a.gaH()
s=new X.b3(a,this.r,this.x,this.y,this.z,t,b,u,this)
s.b=!0
if(c){this.y=u
this.r=b}this.z=u
this.x=b
return s},
cm:function(a,b){var u
this.f=a.a
u=this.b
if(u==null)return!1
u.B(this.bD(a,b,!0))
return!0},
aW:function(a,b){var u,t
u=this.f
t=a.a
if(typeof t!=="number")return t.eo()
if(typeof u!=="number")return u.ed()
this.f=(u&~t)>>>0
u=this.c
if(u==null)return!1
u.B(this.bD(a,b,!0))
return!0},
aV:function(a,b){var u=this.d
if(u==null)return!1
u.B(this.bD(a,b,!1))
return!0},
je:function(a,b){var u,t,s,r,q,p,o
u=this.e
if(u==null)return!1
t=this.a.gaH()
s=Date.now()
r=a.a
q=this.Q
if(typeof r!=="number")return r.n()
p=a.b
o=this.ch
if(typeof p!=="number")return p.n()
s=new X.cd(new V.O(r*q,p*o),t,b,new P.ai(s,!1),this)
s.b=!0
u.B(s)
return!0},
gds:function(){var u=this.b
if(u==null){u=D.I()
this.b=u}return u},
gbw:function(){var u=this.c
if(u==null){u=D.I()
this.c=u}return u},
gdZ:function(){var u=this.d
if(u==null){u=D.I()
this.d=u}return u}}
X.cd.prototype={}
X.h7.prototype={}
X.dK.prototype={}
X.hM.prototype={
aQ:function(a,b){var u,t,s,r
H.k(a,"$ib",[V.a1],"$ab")
u=new P.ai(Date.now(),!1)
t=a.length>0?a[0]:V.b6()
s=this.a.gaH()
r=new X.dK(a,this.f,this.r,this.x,this.y,s,t,u,this)
r.b=!0
if(b){this.x=u
this.f=t}this.y=u
this.r=t
return r},
jb:function(a){var u
H.k(a,"$ib",[V.a1],"$ab")
u=this.b
if(u==null)return!1
u.B(this.aQ(a,!0))
return!0},
j9:function(a){var u
H.k(a,"$ib",[V.a1],"$ab")
u=this.c
if(u==null)return!1
u.B(this.aQ(a,!0))
return!0},
ja:function(a){var u
H.k(a,"$ib",[V.a1],"$ab")
u=this.d
if(u==null)return!1
u.B(this.aQ(a,!1))
return!0}}
X.dQ.prototype={
gaH:function(){var u=this.a
return V.k6(0,0,C.m.gdl(u).c,C.m.gdl(u).d)},
cS:function(a){var u,t
u=a.keyCode
t=a.ctrlKey||a.metaKey
return new X.de(u,new X.am(t,a.altKey,a.shiftKey))},
aG:function(a){var u,t
u=this.b
t=a.ctrlKey||a.metaKey
u.c=new X.am(t,a.altKey,a.shiftKey)},
bU:function(a){var u,t
u=this.b
t=a.ctrlKey||a.metaKey
u.c=new X.am(t,a.altKey,a.shiftKey)},
as:function(a){var u,t,s,r,q
u=this.a.getBoundingClientRect()
t=a.pageX
s=a.pageY
r=u.left
if(typeof t!=="number")return t.G()
q=u.top
if(typeof s!=="number")return s.G()
return new V.a1(t-r,s-q)},
aR:function(a){return new V.O(a.movementX,a.movementY)},
bR:function(a){var u,t,s,r,q,p,o,n
u=this.a.getBoundingClientRect()
t=H.c([],[V.a1])
for(s=a.touches,r=s.length,q=0;q<s.length;s.length===r||(0,H.A)(s),++q){p=s[q]
o=C.f.af(p.pageX)
C.f.af(p.pageY)
n=u.left
C.f.af(p.pageX)
C.a.h(t,new V.a1(o-n,C.f.af(p.pageY)-u.top))}return t},
ao:function(a){var u,t
u=a.buttons
t=a.ctrlKey||a.metaKey
return new X.cX(u,new X.am(t,a.altKey,a.shiftKey))},
bH:function(a){var u,t,s,r,q,p
u=this.a.getBoundingClientRect()
t=a.pageX
s=a.pageY
r=u.left
if(typeof t!=="number")return t.G()
q=t-r
if(q<0)return!1
t=u.top
if(typeof s!=="number")return s.G()
p=s-t
if(p<0)return!1
return q<u.width&&p<u.height},
fQ:function(a){this.f=!0},
fE:function(a){this.f=!1},
fK:function(a){H.n(a,"$ia6")
if(this.f&&this.bH(a))a.preventDefault()},
fU:function(a){var u
H.n(a,"$iaL")
if(!this.f)return
u=this.cS(a)
this.b.jc(u)},
fS:function(a){var u
H.n(a,"$iaL")
if(!this.f)return
u=this.cS(a)
this.b.j8(u)},
fY:function(a){var u,t,s,r
H.n(a,"$ia6")
u=this.a
u.focus()
this.f=!0
this.aG(a)
if(this.x){t=this.ao(a)
s=this.aR(a)
if(this.d.cm(t,s))a.preventDefault()
return}if(this.r){this.y=a
u.requestPointerLock()
return}t=this.ao(a)
r=this.as(a)
if(this.c.cm(t,r))a.preventDefault()},
h1:function(a){var u,t,s
H.n(a,"$ia6")
this.aG(a)
u=this.ao(a)
if(this.x){t=this.aR(a)
if(this.d.aW(u,t))a.preventDefault()
return}if(this.r)return
s=this.as(a)
if(this.c.aW(u,s))a.preventDefault()},
fO:function(a){var u,t,s
H.n(a,"$ia6")
if(!this.bH(a)){this.aG(a)
u=this.ao(a)
if(this.x){t=this.aR(a)
if(this.d.aW(u,t))a.preventDefault()
return}if(this.r)return
s=this.as(a)
if(this.c.aW(u,s))a.preventDefault()}},
h_:function(a){var u,t,s
H.n(a,"$ia6")
this.aG(a)
u=this.ao(a)
if(this.x){t=this.aR(a)
if(this.d.aV(u,t))a.preventDefault()
return}if(this.r)return
s=this.as(a)
if(this.c.aV(u,s))a.preventDefault()},
fM:function(a){var u,t,s
H.n(a,"$ia6")
if(!this.bH(a)){this.aG(a)
u=this.ao(a)
if(this.x){t=this.aR(a)
if(this.d.aV(u,t))a.preventDefault()
return}if(this.r)return
s=this.as(a)
if(this.c.aV(u,s))a.preventDefault()}},
h3:function(a){var u,t
H.n(a,"$iaZ")
this.aG(a)
u=new V.O((a&&C.z).giI(a),C.z.giJ(a)).t(0,180)
if(this.x){if(this.d.jd(u))a.preventDefault()
return}if(this.r)return
t=this.as(a)
if(this.c.je(u,t))a.preventDefault()},
h5:function(a){var u,t,s
u=document.pointerLockElement===this.a
if(u!==this.x){this.x=u
t=this.ao(this.y)
s=this.as(this.y)
this.d.fW(t,s,u)}},
hl:function(a){var u
H.n(a,"$iaz")
this.a.focus()
this.f=!0
this.bU(a)
u=this.bR(a)
if(this.e.jb(u))a.preventDefault()},
hh:function(a){var u
H.n(a,"$iaz")
this.bU(a)
u=this.bR(a)
if(this.e.j9(u))a.preventDefault()},
hj:function(a){var u
H.n(a,"$iaz")
this.bU(a)
u=this.bR(a)
if(this.e.ja(u))a.preventDefault()},
sf5:function(a){this.z=H.k(a,"$ib",[[P.cl,P.M]],"$ab")}}
D.d2.prototype={$iY:1,$iaP:1}
D.Y.prototype={$iaP:1}
D.df.prototype={
gm:function(){var u=this.Q
if(u==null){u=D.I()
this.Q=u}return u},
cI:function(a){var u=this.Q
if(u!=null)u.B(a)},
d0:function(a){var u=this.ch
if(u!=null)u.B(a)},
fV:function(){return this.d0(null)},
h7:function(a){var u,t,s
H.k(a,"$ie",[D.Y],"$ae")
for(u=a.length,t=0;t<a.length;a.length===u||(0,H.A)(a),++t){s=a[t]
if(s==null||this.f_(s))return!1}return!0},
fw:function(a,b){var u,t,s,r,q
u=D.Y
H.k(b,"$ie",[u],"$ae")
for(t=b.length,s=this.gd_(),r=0;r<b.length;b.length===t||(0,H.A)(b),++r){q=H.n(b[r],"$iY")
q.gm().h(0,s)}u=new D.bl(a,b,this,[u])
u.b=!0
this.cI(u)},
hb:function(a,b){var u,t,s,r
u=D.Y
H.k(b,"$ie",[u],"$ae")
for(t=b.gT(b),s=this.gd_();t.v();){r=t.gI(t)
C.a.P(this.e,r)
r.gm().P(0,s)}u=new D.bm(a,b,this,[u])
u.b=!0
this.cI(u)},
f_:function(a){var u=C.a.au(this.e,a)
return u},
sf3:function(a){this.e=H.k(a,"$ib",[D.d2],"$ab")},
shm:function(a){this.f=H.k(a,"$ib",[D.dt],"$ab")},
shG:function(a){this.r=H.k(a,"$ib",[D.dA],"$ab")},
shU:function(a){this.x=H.k(a,"$ib",[D.dF],"$ab")},
shV:function(a){this.y=H.k(a,"$ib",[D.dG],"$ab")},
shW:function(a){this.z=H.k(a,"$ib",[D.dH],"$ab")},
$ae:function(){return[D.Y]},
$aV:function(){return[D.Y]}}
D.dt.prototype={$iY:1,$iaP:1}
D.dA.prototype={$iY:1,$iaP:1}
D.dF.prototype={$iY:1,$iaP:1}
D.dG.prototype={$iY:1,$iaP:1}
D.dH.prototype={$iY:1,$iaP:1}
V.a8.prototype={
q:function(a,b){var u,t
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.a8))return!1
u=b.a
t=$.K().a
if(!(Math.abs(u-this.a)<t))return!1
if(!(Math.abs(b.b-this.b)<t))return!1
if(!(Math.abs(b.c-this.c)<t))return!1
return!0},
i:function(a){return"["+V.Q(this.a,3,0)+", "+V.Q(this.b,3,0)+", "+V.Q(this.c,3,0)+"]"}}
V.aw.prototype={
q:function(a,b){var u,t
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.aw))return!1
u=b.a
t=$.K().a
if(!(Math.abs(u-this.a)<t))return!1
if(!(Math.abs(b.b-this.b)<t))return!1
if(!(Math.abs(b.c-this.c)<t))return!1
if(!(Math.abs(b.d-this.d)<t))return!1
return!0},
i:function(a){return"["+V.Q(this.a,3,0)+", "+V.Q(this.b,3,0)+", "+V.Q(this.c,3,0)+", "+V.Q(this.d,3,0)+"]"}}
V.fg.prototype={}
V.dm.prototype={
a7:function(a,b){var u=H.c([this.a,this.d,this.r,this.b,this.e,this.x,this.c,this.f,this.y],[P.y])
return u},
q:function(a,b){var u,t
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.dm))return!1
u=b.a
t=$.K().a
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
u=[P.y]
t=V.bN(H.c([this.a,this.d,this.r],u),3,0)
s=V.bN(H.c([this.b,this.e,this.x],u),3,0)
r=V.bN(H.c([this.c,this.f,this.y],u),3,0)
u=t.length
if(0>=u)return H.i(t,0)
q="["+t[0]+", "
p=s.length
if(0>=p)return H.i(s,0)
q=q+s[0]+", "
o=r.length
if(0>=o)return H.i(r,0)
q=q+r[0]+",\n"
if(1>=u)return H.i(t,1)
n=" "+t[1]+", "
if(1>=p)return H.i(s,1)
n=n+s[1]+", "
if(1>=o)return H.i(r,1)
n=q+(n+r[1]+",\n")
if(2>=u)return H.i(t,2)
u=" "+t[2]+", "
if(2>=p)return H.i(s,2)
u=u+s[2]+", "
if(2>=o)return H.i(r,2)
return n+(u+r[2]+"]")}}
V.aj.prototype={
a7:function(a,b){var u=H.c([this.a,this.e,this.y,this.cx,this.b,this.f,this.z,this.cy,this.c,this.r,this.Q,this.db,this.d,this.x,this.ch,this.dx],[P.y])
return u},
ce:function(b1){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0
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
if(Math.abs(a7-0)<$.K().a)return V.bF()
a8=1/a7
a9=-r
b0=-d
return V.aN((t*a6-p*a5+m*a4)*a8,(-s*a6+o*a5-l*a4)*a8,(f*h-b*i+a1*j)*a8,(-e*h+a*i-a2*j)*a8,(a9*a6+p*a3-m*a0)*a8,(u*a6-o*a3+l*a0)*a8,(b0*h+b*k-a1*n)*a8,(g*h-a*k+a2*n)*a8,(r*a5-t*a3+m*c)*a8,(-u*a5+s*a3-l*c)*a8,(d*i-f*k+a1*q)*a8,(-g*i+e*k-a2*q)*a8,(a9*a4+t*a0-p*c)*a8,(u*a4-s*a0+o*c)*a8,(b0*j+f*n-b*q)*a8,(g*j-e*n+a*q)*a8)},
n:function(b1,b2){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0
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
return V.aN(u*t+s*r+q*p+o*n,u*m+s*l+q*k+o*j,u*i+s*h+q*g+o*f,u*e+s*d+q*c+o*b,a*t+a0*r+a1*p+a2*n,a*m+a0*l+a1*k+a2*j,a*i+a0*h+a1*g+a2*f,a*e+a0*d+a1*c+a2*b,a3*t+a4*r+a5*p+a6*n,a3*m+a4*l+a5*k+a6*j,a3*i+a4*h+a5*g+a6*f,a3*e+a4*d+a5*c+a6*b,a7*t+a8*r+a9*p+b0*n,a7*m+a8*l+a9*k+b0*j,a7*i+a8*h+a9*g+b0*f,a7*e+a8*d+a9*c+b0*b)},
ea:function(a){return new V.P(C.f.n(this.a,a.gdt(a))+C.f.n(this.b,a.gdu(a))+C.f.n(this.c,a.gdv()),C.f.n(this.e,a.gdt(a))+C.f.n(this.f,a.gdu(a))+C.f.n(this.r,a.gdv()),C.f.n(this.y,a.gdt(a))+C.f.n(this.z,a.gdu(a))+C.f.n(this.Q,a.gdv()))},
b1:function(a){var u,t,s
u=a.a
t=a.b
s=a.c
return new V.af(this.a*u+this.b*t+this.c*s+this.d,this.e*u+this.f*t+this.r*s+this.x,this.y*u+this.z*t+this.Q*s+this.ch)},
q:function(a,b){var u,t
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.aj))return!1
u=b.a
t=$.K().a
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
i:function(a){return this.J()},
dV:function(a,b,c){var u,t,s,r,q,p,o,n,m,l
u=[P.y]
t=V.bN(H.c([this.a,this.e,this.y,this.cx],u),b,c)
s=V.bN(H.c([this.b,this.f,this.z,this.cy],u),b,c)
r=V.bN(H.c([this.c,this.r,this.Q,this.db],u),b,c)
q=V.bN(H.c([this.d,this.x,this.ch,this.dx],u),b,c)
u=t.length
if(0>=u)return H.i(t,0)
p="["+t[0]+", "
o=s.length
if(0>=o)return H.i(s,0)
p=p+s[0]+", "
n=r.length
if(0>=n)return H.i(r,0)
p=p+r[0]+", "
m=q.length
if(0>=m)return H.i(q,0)
p=p+q[0]+",\n"
l=a+" "
if(1>=u)return H.i(t,1)
l=l+t[1]+", "
if(1>=o)return H.i(s,1)
l=l+s[1]+", "
if(1>=n)return H.i(r,1)
l=l+r[1]+", "
if(1>=m)return H.i(q,1)
l=p+(l+q[1]+",\n")
p=a+" "
if(2>=u)return H.i(t,2)
p=p+t[2]+", "
if(2>=o)return H.i(s,2)
p=p+s[2]+", "
if(2>=n)return H.i(r,2)
p=p+r[2]+", "
if(2>=m)return H.i(q,2)
p=l+(p+q[2]+",\n")
l=a+" "
if(3>=u)return H.i(t,3)
l=l+t[3]+", "
if(3>=o)return H.i(s,3)
l=l+s[3]+", "
if(3>=n)return H.i(r,3)
l=l+r[3]+", "
if(3>=m)return H.i(q,3)
return p+(l+q[3]+"]")},
J:function(){return this.dV("",3,0)},
u:function(a){return this.dV(a,3,0)}}
V.a1.prototype={
G:function(a,b){return new V.a1(this.a-b.a,this.b-b.b)},
q:function(a,b){var u,t
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.a1))return!1
u=b.a
t=$.K().a
if(!(Math.abs(u-this.a)<t))return!1
if(!(Math.abs(b.b-this.b)<t))return!1
return!0},
i:function(a){return"["+V.Q(this.a,3,0)+", "+V.Q(this.b,3,0)+"]"}}
V.af.prototype={
G:function(a,b){return new V.af(this.a-b.a,this.b-b.b,this.c-b.c)},
q:function(a,b){var u,t
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.af))return!1
u=b.a
t=$.K().a
if(!(Math.abs(u-this.a)<t))return!1
if(!(Math.abs(b.b-this.b)<t))return!1
if(!(Math.abs(b.c-this.c)<t))return!1
return!0},
i:function(a){return"["+V.Q(this.a,3,0)+", "+V.Q(this.b,3,0)+", "+V.Q(this.c,3,0)+"]"}}
V.b7.prototype={
q:function(a,b){var u,t
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.b7))return!1
u=b.a
t=$.K().a
if(!(Math.abs(u-this.a)<t))return!1
if(!(Math.abs(b.b-this.b)<t))return!1
if(!(Math.abs(b.c-this.c)<t))return!1
if(!(Math.abs(b.d-this.d)<t))return!1
return!0},
i:function(a){return"["+V.Q(this.a,3,0)+", "+V.Q(this.b,3,0)+", "+V.Q(this.c,3,0)+", "+V.Q(this.d,3,0)+"]"}}
V.dv.prototype={
ga5:function(){var u,t
u=this.c
t=this.d
if(u>t)return t
else return u},
q:function(a,b){var u,t
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.dv))return!1
u=b.a
t=$.K().a
if(!(Math.abs(u-this.a)<t))return!1
if(!(Math.abs(b.b-this.b)<t))return!1
if(!(Math.abs(b.c-this.c)<t))return!1
if(!(Math.abs(b.d-this.d)<t))return!1
return!0},
i:function(a){return"["+V.Q(this.a,3,0)+", "+V.Q(this.b,3,0)+", "+V.Q(this.c,3,0)+", "+V.Q(this.d,3,0)+"]"}}
V.O.prototype={
cg:function(a){return Math.sqrt(this.A(this))},
A:function(a){var u,t,s,r
u=this.a
t=a.a
if(typeof u!=="number")return u.n()
if(typeof t!=="number")return H.D(t)
s=this.b
r=a.b
if(typeof s!=="number")return s.n()
if(typeof r!=="number")return H.D(r)
return u*t+s*r},
n:function(a,b){var u,t
u=this.a
if(typeof u!=="number")return u.n()
t=this.b
if(typeof t!=="number")return t.n()
return new V.O(u*b,t*b)},
t:function(a,b){var u,t
if(Math.abs(b-0)<$.K().a){u=$.kf
if(u==null){u=new V.O(0,0)
$.kf=u}return u}u=this.a
if(typeof u!=="number")return u.t()
t=this.b
if(typeof t!=="number")return t.t()
return new V.O(u/b,t/b)},
q:function(a,b){var u,t,s
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.O))return!1
u=b.a
t=this.a
s=$.K()
s.toString
if(typeof u!=="number")return u.G()
if(typeof t!=="number")return H.D(t)
s=s.a
if(!(Math.abs(u-t)<s))return!1
u=b.b
t=this.b
if(typeof u!=="number")return u.G()
if(typeof t!=="number")return H.D(t)
if(!(Math.abs(u-t)<s))return!1
return!0},
i:function(a){return"["+V.Q(this.a,3,0)+", "+V.Q(this.b,3,0)+"]"}}
V.P.prototype={
cg:function(a){return Math.sqrt(this.A(this))},
A:function(a){return this.a*a.a+this.b*a.b+this.c*a.c},
ci:function(a,b){var u,t,s
u=this.a
t=this.b
s=this.c
return new V.P(u+b*(a.a-u),t+b*(a.b-t),s+b*(a.c-s))},
aU:function(a){var u,t,s,r,q,p
u=this.b
t=a.c
s=this.c
r=a.b
q=a.a
p=this.a
return new V.P(u*t-s*r,s*q-p*t,p*r-u*q)},
D:function(a,b){return new V.P(this.a+b.a,this.b+b.b,this.c+b.c)},
M:function(a){return new V.P(-this.a,-this.b,-this.c)},
t:function(a,b){if(Math.abs(b-0)<$.K().a)return V.dU()
return new V.P(this.a/b,this.b/b,this.c/b)},
dX:function(){var u=$.K().a
if(!(Math.abs(0-this.a)<u))return!1
if(!(Math.abs(0-this.b)<u))return!1
if(!(Math.abs(0-this.c)<u))return!1
return!0},
q:function(a,b){var u,t
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.P))return!1
u=b.a
t=$.K().a
if(!(Math.abs(u-this.a)<t))return!1
if(!(Math.abs(b.b-this.b)<t))return!1
if(!(Math.abs(b.c-this.c)<t))return!1
return!0},
i:function(a){return"["+V.Q(this.a,3,0)+", "+V.Q(this.b,3,0)+", "+V.Q(this.c,3,0)+"]"}}
U.f1.prototype={
bz:function(a){var u=V.mq(a,this.c,this.b)
return u},
gm:function(){var u=this.y
if(u==null){u=D.I()
this.y=u}return u},
L:function(a){var u=this.y
if(u!=null)u.B(a)},
scr:function(a,b){},
scj:function(a){var u,t
u=this.b
if(!(Math.abs(u-a)<$.K().a)){this.b=a
if(a<this.c){this.c=a
this.d=a}else{t=this.d
if(a<t)this.d=this.bz(t)}u=new D.J("maximumLocation",u,this.b,this,[P.y])
u.b=!0
this.L(u)}},
scl:function(a){var u,t
u=this.c
if(!(Math.abs(u-a)<$.K().a)){this.c=a
if(this.b<a){this.b=a
this.d=a}else{t=this.d
if(a>t)this.d=this.bz(t)}u=new D.J("minimumLocation",u,this.c,this,[P.y])
u.b=!0
this.L(u)}},
sa4:function(a,b){var u
b=this.bz(b)
u=this.d
if(!(Math.abs(u-b)<$.K().a)){this.d=b
u=new D.J("location",u,b,this,[P.y])
u.b=!0
this.L(u)}},
sck:function(a){var u,t,s
u=this.e
if(!(Math.abs(u-a)<$.K().a)){this.e=a
t=this.f
s=-a
if(t<s)t=s
else if(t>a)t=a
this.f=t
u=new D.J("maximumVelocity",u,a,this,[P.y])
u.b=!0
this.L(u)}},
sO:function(a){var u,t
u=this.e
t=-u
if(a<t)a=t
else if(a>u)a=u
u=this.f
if(!(Math.abs(u-a)<$.K().a)){this.f=a
u=new D.J("velocity",u,a,this,[P.y])
u.b=!0
this.L(u)}},
sc4:function(a){var u
if(a<0)a=0
else if(a>1)a=1
u=this.x
if(!(Math.abs(u-a)<$.K().a)){this.x=a
u=new D.J("dampening",u,a,this,[P.y])
u.b=!0
this.L(u)}},
ab:function(a,b){var u,t,s,r,q
u=this.f
t=$.K().a
if(!(Math.abs(u-0)<t)||!(Math.abs(this.r-0)<t)){s=u+this.r*b
u=this.e
r=-u
if(s<r)s=r
else if(s>u)s=u
this.sa4(0,this.d+s*b)
u=this.x
if(!(Math.abs(u-0)<$.K().a)){q=s*Math.pow(1-u,b)
if(s<0){if(q<s)q=s
else if(q>0)q=0}else if(q<0)q=0
else if(q>s)q=s
s=q}this.sO(s)}}}
U.cZ.prototype={
gm:function(){var u=this.b
if(u==null){u=D.I()
this.b=u}return u},
aK:function(a,b,c){return this.a},
q:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.cZ))return!1
return J.a5(this.a,b.a)},
i:function(a){return"Constant: "+this.a.u("          ")}}
U.c7.prototype={
gm:function(){var u=this.e
if(u==null){u=D.I()
this.e=u}return u},
L:function(a){var u
H.n(a,"$iv")
u=this.e
if(u!=null)u.B(a)},
a2:function(){return this.L(null)},
fu:function(a,b){var u,t,s,r,q,p,o,n
u=U.aa
H.k(b,"$ie",[u],"$ae")
for(t=b.length,s=this.gaF(),r={func:1,ret:-1,args:[D.v]},q=[r],p=0;p<b.length;b.length===t||(0,H.A)(b),++p){o=b[p]
if(o!=null){n=o.gm()
n.toString
H.m(s,r)
if(n.a==null)n.sai(H.c([],q))
n=n.a;(n&&C.a).h(n,s)}}u=new D.bl(a,b,this,[u])
u.b=!0
this.L(u)},
h9:function(a,b){var u,t,s
u=U.aa
H.k(b,"$ie",[u],"$ae")
for(t=b.gT(b),s=this.gaF();t.v();)t.gI(t).gm().P(0,s)
u=new D.bm(a,b,this,[u])
u.b=!0
this.L(u)},
aK:function(a,b,c){var u,t,s,r
u=this.r
t=b.e
if(typeof u!=="number")return u.aL()
if(u<t){this.r=t
u=this.e
if(u!=null)++u.d
for(u=this.a,u=new J.ah(u,u.length,0,[H.w(u,0)]),s=null;u.v();){t=u.d
if(t!=null){r=t.aK(0,b,c)
if(r!=null)s=s==null?r:r.n(0,s)}}this.f=s==null?V.bF():s
u=this.e
if(u!=null)u.az(0)}return this.f},
q:function(a,b){var u,t,s,r
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.c7))return!1
u=this.a.length
for(t=0;t<u;++t){s=this.a
if(t>=s.length)return H.i(s,t)
s=s[t]
r=b.a
if(t>=r.length)return H.i(r,t)
if(!J.a5(s,r[t]))return!1}return!0},
i:function(a){return"Group"},
$ae:function(){return[U.aa]},
$aV:function(){return[U.aa]},
$iaa:1}
U.aa.prototype={}
U.dR.prototype={
gm:function(){var u=this.cy
if(u==null){u=D.I()
this.cy=u}return u},
L:function(a){var u
H.n(a,"$iv")
u=this.cy
if(u!=null)u.B(a)},
a2:function(){return this.L(null)},
aS:function(a){if(this.a!=null)return!1
this.a=a
a.c.gds().h(0,this.gbI())
this.a.c.gdZ().h(0,this.gbK())
this.a.c.gbw().h(0,this.gbM())
return!0},
bJ:function(a){H.n(a,"$iv")
if(!J.a5(this.c,this.a.b.c))return
this.y=!0
this.x=!0
this.z=this.b.d},
bL:function(a){var u,t,s,r,q,p,o
a=H.f(H.n(a,"$iv"),"$ib3")
if(!this.y)return
if(this.x){u=a.d.G(0,a.y)
u=new V.O(u.a,u.b)
u=u.A(u)
t=this.r
if(typeof t!=="number")return H.D(t)
if(u<t)return
this.x=!1}if(this.d){u=a.c
t=a.d.G(0,a.y)
u=new V.O(t.a,t.b).n(0,2).t(0,u.ga5())
this.Q=u
t=this.b
u=u.a
if(typeof u!=="number")return u.n()
s=this.e
if(typeof s!=="number")return H.D(s)
t.sO(u*10*s)}else{u=a.c
t=a.d
s=t.G(0,a.y)
r=new V.O(s.a,s.b).n(0,2).t(0,u.ga5())
s=this.b
q=r.a
if(typeof q!=="number")return q.M()
p=this.e
if(typeof p!=="number")return H.D(p)
o=this.z
if(typeof o!=="number")return H.D(o)
s.sa4(0,-q*p+o)
this.b.sO(0)
t=t.G(0,a.z)
this.Q=new V.O(t.a,t.b).n(0,2).t(0,u.ga5())}this.a2()},
bN:function(a){var u,t,s
H.n(a,"$iv")
if(!this.y)return
this.y=!1
if(this.x)return
u=this.Q
if(u.A(u)>0.0001){u=this.b
t=this.Q.a
if(typeof t!=="number")return t.n()
s=this.e
if(typeof s!=="number")return H.D(s)
u.sO(t*10*s)
this.a2()}},
aK:function(a,b,c){var u,t,s,r,q
u=this.ch
t=b.e
if(typeof u!=="number")return u.aL()
if(u<t){this.ch=t
s=b.y
this.b.ab(0,s)
u=this.b.d
r=Math.cos(u)
q=Math.sin(u)
this.cx=V.aN(r,-q,0,0,q,r,0,0,0,0,1,0,0,0,0,1)}return this.cx},
$iaa:1}
U.dS.prototype={
gm:function(){var u=this.fx
if(u==null){u=D.I()
this.fx=u}return u},
L:function(a){var u
H.n(a,"$iv")
u=this.fx
if(u!=null)u.B(a)},
a2:function(){return this.L(null)},
aS:function(a){var u,t
if(this.a!=null)return!1
this.a=a
a.c.gds().h(0,this.gbI())
this.a.c.gdZ().h(0,this.gbK())
this.a.c.gbw().h(0,this.gbM())
u=this.a.d
t=u.f
if(t==null){t=D.I()
u.f=t
u=t}else u=t
u.h(0,this.gfm())
u=this.a.d
t=u.d
if(t==null){t=D.I()
u.d=t
u=t}else u=t
u.h(0,this.gfo())
u=this.a.e
t=u.b
if(t==null){t=D.I()
u.b=t
u=t}else u=t
u.h(0,this.ghR())
u=this.a.e
t=u.d
if(t==null){t=D.I()
u.d=t
u=t}else u=t
u.h(0,this.ghP())
u=this.a.e
t=u.c
if(t==null){t=D.I()
u.c=t
u=t}else u=t
u.h(0,this.ghN())
return!0},
ah:function(a){var u,t
u=a.a
t=a.b
if(this.f){if(typeof u!=="number")return u.M()
u=-u}if(this.r){if(typeof t!=="number")return t.M()
t=-t}return new V.O(u,t)},
bJ:function(a){a=H.f(H.n(a,"$iv"),"$ib3")
if(!J.a5(this.d,a.x.b))return
this.cx=!0
this.ch=!0
this.cy=this.c.d
this.db=this.b.d},
bL:function(a){var u,t,s,r,q,p,o
a=H.f(H.n(a,"$iv"),"$ib3")
if(!this.cx)return
if(this.ch){u=a.d.G(0,a.y)
u=new V.O(u.a,u.b)
u=u.A(u)
t=this.Q
if(typeof t!=="number")return H.D(t)
if(u<t)return
this.ch=!1}if(this.e){u=a.c
t=a.d.G(0,a.y)
u=this.ah(new V.O(t.a,t.b).n(0,2).t(0,u.ga5()))
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
s=t.G(0,a.y)
r=this.ah(new V.O(s.a,s.b).n(0,2).t(0,u.ga5()))
s=this.c
q=r.a
if(typeof q!=="number")return q.M()
p=this.y
if(typeof p!=="number")return H.D(p)
o=this.cy
if(typeof o!=="number")return H.D(o)
s.sa4(0,-q*p+o)
o=this.b
p=r.b
if(typeof p!=="number")return p.M()
q=this.x
if(typeof q!=="number")return H.D(q)
s=this.db
if(typeof s!=="number")return H.D(s)
o.sa4(0,-p*q+s)
this.b.sO(0)
this.c.sO(0)
t=t.G(0,a.z)
this.dx=this.ah(new V.O(t.a,t.b).n(0,2).t(0,u.ga5()))}this.a2()},
bN:function(a){var u,t,s
H.n(a,"$iv")
if(!this.cx)return
this.cx=!1
if(this.ch)return
u=this.dx
if(u.A(u)>0.0001){u=this.c
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
this.a2()}},
fn:function(a){if(H.f(H.n(a,"$iv"),"$idi").x){this.ch=!0
this.cy=this.c.d
this.db=this.b.d}},
fp:function(a){var u,t,s,r,q,p,o
a=H.f(H.n(a,"$iv"),"$ib3")
if(!J.a5(this.d,a.x.b))return
u=a.c
t=a.d
s=t.G(0,a.y)
r=this.ah(new V.O(s.a,s.b).n(0,2).t(0,u.ga5()))
s=this.c
q=r.a
if(typeof q!=="number")return q.M()
p=this.y
if(typeof p!=="number")return H.D(p)
o=this.cy
if(typeof o!=="number")return H.D(o)
s.sa4(0,-q*p+o)
o=this.b
p=r.b
if(typeof p!=="number")return p.M()
q=this.x
if(typeof q!=="number")return H.D(q)
s=this.db
if(typeof s!=="number")return H.D(s)
o.sa4(0,-p*q+s)
this.b.sO(0)
this.c.sO(0)
t=t.G(0,a.z)
this.dx=this.ah(new V.O(t.a,t.b).n(0,2).t(0,u.ga5()))
this.a2()},
hS:function(a){H.n(a,"$iv")
this.cx=!0
this.ch=!0
this.cy=this.c.d
this.db=this.b.d},
hQ:function(a){var u,t,s,r,q,p,o
a=H.f(H.n(a,"$iv"),"$idK")
if(!this.cx)return
if(this.ch){u=a.d.G(0,a.y)
u=new V.O(u.a,u.b)
u=u.A(u)
t=this.Q
if(typeof t!=="number")return H.D(t)
if(u<t)return
this.ch=!1}if(this.e){u=a.c
t=a.d.G(0,a.y)
u=this.ah(new V.O(t.a,t.b).n(0,2).t(0,u.ga5()))
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
s=t.G(0,a.y)
r=this.ah(new V.O(s.a,s.b).n(0,2).t(0,u.ga5()))
s=this.c
q=r.a
if(typeof q!=="number")return q.M()
p=this.y
if(typeof p!=="number")return H.D(p)
o=this.cy
if(typeof o!=="number")return H.D(o)
s.sa4(0,-q*p+o)
o=this.b
p=r.b
if(typeof p!=="number")return p.M()
q=this.x
if(typeof q!=="number")return H.D(q)
s=this.db
if(typeof s!=="number")return H.D(s)
o.sa4(0,-p*q+s)
this.b.sO(0)
this.c.sO(0)
t=t.G(0,a.z)
this.dx=this.ah(new V.O(t.a,t.b).n(0,2).t(0,u.ga5()))}this.a2()},
hO:function(a){var u,t,s
H.n(a,"$iv")
if(!this.cx)return
this.cx=!1
if(this.ch)return
u=this.dx
if(u.A(u)>0.0001){u=this.c
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
this.a2()}},
aK:function(a,b,c){var u,t,s,r,q
u=this.dy
t=b.e
if(typeof u!=="number")return u.aL()
if(u<t){this.dy=t
s=b.y
this.c.ab(0,s)
this.b.ab(0,s)
u=this.b.d
r=Math.cos(u)
q=Math.sin(u)
u=V.aN(1,0,0,0,0,r,-q,0,0,q,r,0,0,0,0,1)
t=this.c.d
r=Math.cos(t)
q=Math.sin(t)
this.fr=u.n(0,V.aN(r,0,-q,0,0,1,0,0,q,0,r,0,0,0,0,1))}return this.fr},
$iaa:1}
U.dT.prototype={
gm:function(){var u=this.r
if(u==null){u=D.I()
this.r=u}return u},
L:function(a){var u=this.r
if(u!=null)u.B(a)},
aS:function(a){var u,t,s
if(this.a!=null)return!1
this.a=a
u=a.c
t=u.e
if(t==null){t=D.I()
u.e=t
u=t}else u=t
t=this.gfq()
u.h(0,t)
u=this.a.d
s=u.e
if(s==null){s=D.I()
u.e=s
u=s}else u=s
u.h(0,t)
return!0},
fs:function(a){var u,t,s,r
H.n(a,"$iv")
if(!J.a5(this.b,this.a.b.c))return
H.f(a,"$icd")
u=this.d
t=a.x.b
s=this.c
if(typeof t!=="number")return t.n()
r=u+t*s
if(u!==r){this.d=r
u=new D.J("zoom",u,r,this,[P.y])
u.b=!0
this.L(u)}},
aK:function(a,b,c){var u,t,s
u=this.e
t=b.e
if(u<t){this.e=t
s=Math.pow(10,this.d)
this.f=V.aN(s,0,0,0,0,s,0,0,0,0,s,0,0,0,0,1)}return this.f},
$iaa:1}
M.cY.prototype={
gm:function(){var u=this.f
if(u==null){u=D.I()
this.f=u}return u},
V:function(a){var u
H.n(a,"$iv")
u=this.f
if(u!=null)u.B(a)},
aN:function(){return this.V(null)},
hd:function(a,b){var u,t,s,r,q,p,o,n
u=M.an
H.k(b,"$ie",[u],"$ae")
for(t=b.length,s=this.gU(),r={func:1,ret:-1,args:[D.v]},q=[r],p=0;p<b.length;b.length===t||(0,H.A)(b),++p){o=b[p]
if(o!=null){n=o.gm()
n.toString
H.m(s,r)
if(n.a==null)n.sai(H.c([],q))
n=n.a;(n&&C.a).h(n,s)}}u=new D.bl(a,b,this,[u])
u.b=!0
this.V(u)},
hf:function(a,b){var u,t,s
u=M.an
H.k(b,"$ie",[u],"$ae")
for(t=b.gT(b),s=this.gU();t.v();)t.gI(t).gm().P(0,s)
u=new D.bm(a,b,this,[u])
u.b=!0
this.V(u)},
a6:function(a){var u,t
if(this.e)return
this.e=!0
for(u=this.a,u=new J.ah(u,u.length,0,[H.w(u,0)]);u.v();){t=u.d
if(t!=null)t.a6(a)}this.e=!1},
$ae:function(){return[M.an]},
$aV:function(){return[M.an]},
$ian:1}
M.d0.prototype={
gm:function(){var u=this.f
if(u==null){u=D.I()
this.f=u}return u},
V:function(a){var u
H.n(a,"$iv")
u=this.f
if(u!=null)u.B(a)},
aN:function(){return this.V(null)},
saT:function(a){var u,t
if(a==null)a=new X.ft()
u=this.a
if(u!==a){if(u!=null)u.gm().P(0,this.gU())
t=this.a
this.a=a
a.gm().h(0,this.gU())
u=new D.J("camera",t,this.a,this,[X.by])
u.b=!0
this.V(u)}},
saY:function(a,b){var u,t
if(b==null)b=X.jh(!0,!0,!1,null,2000,null,0)
u=this.b
if(u!==b){if(u!=null)u.gm().P(0,this.gU())
t=this.b
this.b=b
b.gm().h(0,this.gU())
u=new D.J("target",t,this.b,this,[X.cm])
u.b=!0
this.V(u)}},
saZ:function(a){var u,t
u=this.c
if(u!=a){if(u!=null)u.gm().P(0,this.gU())
t=this.c
this.c=a
if(a!=null)a.gm().h(0,this.gU())
u=new D.J("technique",t,this.c,this,[O.bq])
u.b=!0
this.V(u)}},
a6:function(a){a.co(this.c)
this.b.Z(a)
this.a.Z(a)
this.d.ab(0,a)
this.d.a6(a)
this.a.b2(a)
this.b.toString
a.cn()},
$ian:1}
M.d5.prototype={
V:function(a){var u
H.n(a,"$iv")
u=this.x
if(u!=null)u.B(a)},
aN:function(){return this.V(null)},
fG:function(a,b){var u,t,s,r,q,p,o,n
u=E.ae
H.k(b,"$ie",[u],"$ae")
for(t=b.length,s=this.gU(),r={func:1,ret:-1,args:[D.v]},q=[r],p=0;p<b.length;b.length===t||(0,H.A)(b),++p){o=b[p]
if(o!=null){n=o.z
if(n==null){n=new D.c4()
n.sai(null)
n.sb6(null)
n.c=null
n.d=0
o.z=n}H.m(s,r)
if(n.a==null)n.sai(H.c([],q))
n=n.a;(n&&C.a).h(n,s)}}u=new D.bl(a,b,this,[u])
u.b=!0
this.V(u)},
fI:function(a,b){var u,t,s
u=E.ae
H.k(b,"$ie",[u],"$ae")
for(t=b.gT(b),s=this.gU();t.v();)t.gI(t).gm().P(0,s)
u=new D.bm(a,b,this,[u])
u.b=!0
this.V(u)},
saT:function(a){var u,t
if(a==null)a=X.k0(2000,1.0471975511965976,null,0.1,null)
u=this.a
if(u!==a){if(u!=null)u.gm().P(0,this.gU())
t=this.a
this.a=a
a.gm().h(0,this.gU())
u=new D.J("camera",t,this.a,this,[X.by])
u.b=!0
this.V(u)}},
saY:function(a,b){var u,t
u=this.b
if(u!==b){if(u!=null)u.gm().P(0,this.gU())
t=this.b
this.b=b
b.gm().h(0,this.gU())
u=new D.J("target",t,this.b,this,[X.cm])
u.b=!0
this.V(u)}},
saZ:function(a){var u,t
u=this.c
if(u!=a){if(u!=null)u.gm().P(0,this.gU())
t=this.c
this.c=a
if(a!=null)a.gm().h(0,this.gU())
u=new D.J("technique",t,this.c,this,[O.bq])
u.b=!0
this.V(u)}},
gm:function(){var u=this.x
if(u==null){u=D.I()
this.x=u}return u},
a6:function(a){var u
a.co(this.c)
this.b.Z(a)
this.a.Z(a)
u=this.c
if(u!=null)u.ab(0,a)
for(u=this.d.a,u=new J.ah(u,u.length,0,[H.w(u,0)]);u.v();)u.d.ab(0,a)
for(u=this.d.a,u=new J.ah(u,u.length,0,[H.w(u,0)]);u.v();)u.d.a6(a)
this.a.toString
a.cy.ay()
a.db.ay()
this.b.toString
a.cn()},
seY:function(a,b){this.d=H.k(b,"$iV",[E.ae],"$aV")},
$ian:1}
M.an.prototype={}
A.cS.prototype={}
A.eT.prototype={
j:function(a,b){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<t;++s){r=u[s]
if(r.b===b)return r}return},
iO:function(){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<u.length;u.length===t||(0,H.A)(u),++s){r=u[s]
C.b.dz(r.a,r.c)}},
dq:function(){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<u.length;u.length===t||(0,H.A)(u),++s){r=u[s]
C.b.dr(r.a,r.c)}}}
A.dl.prototype={
ez:function(a6,a7){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5
this.z=a6
u=new P.bp("")
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
a6.i_(u)
a6.i6(u)
a6.i0(u)
a6.ig(u)
a6.ih(u)
a6.i8(u)
a6.il(u)
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
u=new P.bp("")
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
q.i3(u)
q.hZ(u)
q.i1(u)
q.i4(u)
q.ic(u)
o=q.dy
if(o){m=u.a+="// === Enviromental ===\n"
m+="\n"
u.a=m
m+="uniform samplerCube envSampler;\n"
u.a=m
m+="uniform int nullEnvTxt;\n"
u.a=m
u.a=m+"\n"
q.ia(u)
q.ib(u)}q.i7(u)
m=u.a+="// === Alpha ===\n"
m+="\n"
u.a=m
l=q.y
if(l!==C.c){m+="uniform float alpha;\n"
u.a=m
if(l!==C.h){m+="uniform int nullAlphaTxt;\n"
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
case C.h:m+="   return alpha;\n"
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
k=H.c([],[P.o])
if(q.b!==C.c)C.a.h(k,"ambient()")
if(q.c!==C.c)C.a.h(k,"diffuse(norm, litVec)")
if(q.d!==C.c)C.a.h(k,"invDiffuse(norm, litVec)")
if(q.e!==C.c)C.a.h(k,"specular(norm, litVec)")
m=u.a+="   return litClr*("+C.a.w(k," + ")+");\n"
m+="}\n"
u.a=m
u.a=m+"\n"
q.i2(u)
q.i9(u)
q.ie(u)
q.ii(u)
q.ij(u)
q.ik(u)
q.i5(u)}m=u.a+="// === Main ===\n"
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
j=H.c([],[P.o])
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
i="vec4("+C.a.w(j," + ")+", alpha);"
q=u.a
if(n){q+="   gl_FragColor = colorMat*"+i+"\n"
u.a=q}else{q+="   gl_FragColor = "+i+"\n"
u.a=q}q+="}\n"
u.a=q
this.dW(0,s.charCodeAt(0)==0?s:s,q.charCodeAt(0)==0?q:q)
this.Q=this.x.j(0,"posAttr")
this.cx=this.x.j(0,"normAttr")
this.ch=this.x.j(0,"binmAttr")
this.cy=this.x.j(0,"txt2DAttr")
this.db=this.x.j(0,"txtCubeAttr")
this.dx=this.x.j(0,"bendAttr")
if(a6.fr)this.id=H.f(this.y.l(0,"invViewMat"),"$ial")
if(t)this.dy=H.f(this.y.l(0,"objMat"),"$ial")
if(r)this.fr=H.f(this.y.l(0,"viewObjMat"),"$ial")
this.fy=H.f(this.y.l(0,"projViewObjMat"),"$ial")
if(a6.x2)this.k1=H.f(this.y.l(0,"txt2DMat"),"$icr")
if(a6.y1)this.k2=H.f(this.y.l(0,"txtCubeMat"),"$ial")
if(a6.y2)this.k3=H.f(this.y.l(0,"colorMat"),"$ial")
this.seT(H.c([],[A.al]))
t=a6.al
if(t>0){this.k4=H.n(this.y.l(0,"bendMatCount"),"$iH")
for(h=0;h<t;++h){s=this.r1
r=this.y
q="bendValues["+h+"].mat"
g=r.j(0,q)
if(g==null)H.t(P.r("Required uniform value, "+q+", was not defined or used in shader."));(s&&C.a).h(s,H.f(g,"$ial"))}}t=a6.a
if(t!==C.c){this.r2=H.f(this.y.l(0,"emissionClr"),"$iE")
switch(t){case C.c:break
case C.h:break
case C.d:this.rx=H.f(this.y.l(0,"emissionTxt"),"$iag")
this.x1=H.f(this.y.l(0,"nullEmissionTxt"),"$iH")
break
case C.e:this.ry=H.f(this.y.l(0,"emissionTxt"),"$iac")
this.x1=H.f(this.y.l(0,"nullEmissionTxt"),"$iH")
break}}t=a6.b
if(t!==C.c){this.x2=H.f(this.y.l(0,"ambientClr"),"$iE")
switch(t){case C.c:break
case C.h:break
case C.d:this.y1=H.f(this.y.l(0,"ambientTxt"),"$iag")
this.al=H.f(this.y.l(0,"nullAmbientTxt"),"$iH")
break
case C.e:this.y2=H.f(this.y.l(0,"ambientTxt"),"$iac")
this.al=H.f(this.y.l(0,"nullAmbientTxt"),"$iH")
break}}t=a6.c
if(t!==C.c){this.ae=H.f(this.y.l(0,"diffuseClr"),"$iE")
switch(t){case C.c:break
case C.h:break
case C.d:this.bd=H.f(this.y.l(0,"diffuseTxt"),"$iag")
this.be=H.f(this.y.l(0,"nullDiffuseTxt"),"$iH")
break
case C.e:this.dA=H.f(this.y.l(0,"diffuseTxt"),"$iac")
this.be=H.f(this.y.l(0,"nullDiffuseTxt"),"$iH")
break}}t=a6.d
if(t!==C.c){this.bf=H.f(this.y.l(0,"invDiffuseClr"),"$iE")
switch(t){case C.c:break
case C.h:break
case C.d:this.dB=H.f(this.y.l(0,"invDiffuseTxt"),"$iag")
this.bg=H.f(this.y.l(0,"nullInvDiffuseTxt"),"$iH")
break
case C.e:this.dC=H.f(this.y.l(0,"invDiffuseTxt"),"$iac")
this.bg=H.f(this.y.l(0,"nullInvDiffuseTxt"),"$iH")
break}}t=a6.e
if(t!==C.c){this.bj=H.f(this.y.l(0,"shininess"),"$iT")
this.bh=H.f(this.y.l(0,"specularClr"),"$iE")
switch(t){case C.c:break
case C.h:break
case C.d:this.dD=H.f(this.y.l(0,"specularTxt"),"$iag")
this.bi=H.f(this.y.l(0,"nullSpecularTxt"),"$iH")
break
case C.e:this.dE=H.f(this.y.l(0,"specularTxt"),"$iac")
this.bi=H.f(this.y.l(0,"nullSpecularTxt"),"$iH")
break}}switch(a6.f){case C.c:break
case C.h:break
case C.d:this.dF=H.f(this.y.l(0,"bumpTxt"),"$iag")
this.bk=H.f(this.y.l(0,"nullBumpTxt"),"$iH")
break
case C.e:this.dG=H.f(this.y.l(0,"bumpTxt"),"$iac")
this.bk=H.f(this.y.l(0,"nullBumpTxt"),"$iH")
break}if(a6.dy){this.dH=H.f(this.y.l(0,"envSampler"),"$iac")
this.dI=H.f(this.y.l(0,"nullEnvTxt"),"$iH")
t=a6.r
if(t!==C.c){this.bl=H.f(this.y.l(0,"reflectClr"),"$iE")
switch(t){case C.c:break
case C.h:break
case C.d:this.dJ=H.f(this.y.l(0,"reflectTxt"),"$iag")
this.bm=H.f(this.y.l(0,"nullReflectTxt"),"$iH")
break
case C.e:this.dK=H.f(this.y.l(0,"reflectTxt"),"$iac")
this.bm=H.f(this.y.l(0,"nullReflectTxt"),"$iH")
break}}t=a6.x
if(t!==C.c){this.bn=H.f(this.y.l(0,"refraction"),"$iT")
this.bo=H.f(this.y.l(0,"refractClr"),"$iE")
switch(t){case C.c:break
case C.h:break
case C.d:this.dL=H.f(this.y.l(0,"refractTxt"),"$iag")
this.bp=H.f(this.y.l(0,"nullRefractTxt"),"$iH")
break
case C.e:this.dM=H.f(this.y.l(0,"refractTxt"),"$iac")
this.bp=H.f(this.y.l(0,"nullRefractTxt"),"$iH")
break}}}t=a6.y
if(t!==C.c){this.bq=H.f(this.y.l(0,"alpha"),"$iT")
switch(t){case C.c:break
case C.h:break
case C.d:this.dN=H.f(this.y.l(0,"alphaTxt"),"$iag")
this.br=H.f(this.y.l(0,"nullAlphaTxt"),"$iH")
break
case C.e:this.dO=H.f(this.y.l(0,"alphaTxt"),"$iac")
this.br=H.f(this.y.l(0,"nullAlphaTxt"),"$iH")
break}}this.seF(H.c([],[A.cq]))
this.seG(H.c([],[A.cs]))
this.seH(H.c([],[A.ct]))
this.seI(H.c([],[A.cu]))
this.seJ(H.c([],[A.cv]))
this.seK(H.c([],[A.cw]))
if(a6.k2){t=a6.z
if(t>0){this.dP=H.n(this.y.l(0,"dirLightCount"),"$iH")
for(h=0;h<t;++h){s=this.y
r="dirLights["+h+"].viewDir"
g=s.j(0,r)
if(g==null)H.t(P.r("Required uniform value, "+r+", was not defined or used in shader."))
H.f(g,"$iE")
s=this.y
r="dirLights["+h+"].color"
f=s.j(0,r)
if(f==null)H.t(P.r("Required uniform value, "+r+", was not defined or used in shader."))
H.f(f,"$iE")
s=this.c6;(s&&C.a).h(s,new A.cq(h,g,f))}}t=a6.Q
if(t>0){this.dQ=H.n(this.y.l(0,"pntLightCount"),"$iH")
for(h=0;h<t;++h){s=this.y
r="pntLights["+h+"].point"
g=s.j(0,r)
if(g==null)H.t(P.r("Required uniform value, "+r+", was not defined or used in shader."))
H.f(g,"$iE")
s=this.y
r="pntLights["+h+"].viewPnt"
f=s.j(0,r)
if(f==null)H.t(P.r("Required uniform value, "+r+", was not defined or used in shader."))
H.f(f,"$iE")
s=this.y
r="pntLights["+h+"].color"
e=s.j(0,r)
if(e==null)H.t(P.r("Required uniform value, "+r+", was not defined or used in shader."))
H.f(e,"$iE")
s=this.y
r="pntLights["+h+"].att0"
d=s.j(0,r)
if(d==null)H.t(P.r("Required uniform value, "+r+", was not defined or used in shader."))
H.f(d,"$iT")
s=this.y
r="pntLights["+h+"].att1"
c=s.j(0,r)
if(c==null)H.t(P.r("Required uniform value, "+r+", was not defined or used in shader."))
H.f(c,"$iT")
s=this.y
r="pntLights["+h+"].att2"
b=s.j(0,r)
if(b==null)H.t(P.r("Required uniform value, "+r+", was not defined or used in shader."))
H.f(b,"$iT")
s=this.c7;(s&&C.a).h(s,new A.cs(h,g,f,e,d,c,b))}}t=a6.ch
if(t>0){this.dR=H.n(this.y.l(0,"spotLightCount"),"$iH")
for(h=0;h<t;++h){s=this.y
r="spotLights["+h+"].objPnt"
g=s.j(0,r)
if(g==null)H.t(P.r("Required uniform value, "+r+", was not defined or used in shader."))
H.f(g,"$iE")
s=this.y
r="spotLights["+h+"].objDir"
f=s.j(0,r)
if(f==null)H.t(P.r("Required uniform value, "+r+", was not defined or used in shader."))
H.f(f,"$iE")
s=this.y
r="spotLights["+h+"].viewPnt"
e=s.j(0,r)
if(e==null)H.t(P.r("Required uniform value, "+r+", was not defined or used in shader."))
H.f(e,"$iE")
s=this.y
r="spotLights["+h+"].color"
d=s.j(0,r)
if(d==null)H.t(P.r("Required uniform value, "+r+", was not defined or used in shader."))
H.f(d,"$iE")
s=this.y
r="spotLights["+h+"].cutoff"
c=s.j(0,r)
if(c==null)H.t(P.r("Required uniform value, "+r+", was not defined or used in shader."))
H.f(c,"$iT")
s=this.y
r="spotLights["+h+"].coneAngle"
b=s.j(0,r)
if(b==null)H.t(P.r("Required uniform value, "+r+", was not defined or used in shader."))
H.f(b,"$iT")
s=this.y
r="spotLights["+h+"].att0"
a=s.j(0,r)
if(a==null)H.t(P.r("Required uniform value, "+r+", was not defined or used in shader."))
H.f(a,"$iT")
s=this.y
r="spotLights["+h+"].att1"
a0=s.j(0,r)
if(a0==null)H.t(P.r("Required uniform value, "+r+", was not defined or used in shader."))
H.f(a0,"$iT")
s=this.y
r="spotLights["+h+"].att2"
a1=s.j(0,r)
if(a1==null)H.t(P.r("Required uniform value, "+r+", was not defined or used in shader."))
H.f(a1,"$iT")
s=this.c8;(s&&C.a).h(s,new A.ct(h,g,f,e,d,c,b,a,a0,a1))}}t=a6.cx
if(t>0){this.dS=H.n(this.y.l(0,"txtDirLightCount"),"$iH")
for(h=0;h<t;++h){s=this.y
r="txtDirLights["+h+"].objUp"
g=s.j(0,r)
if(g==null)H.t(P.r("Required uniform value, "+r+", was not defined or used in shader."))
H.f(g,"$iE")
s=this.y
r="txtDirLights["+h+"].objRight"
f=s.j(0,r)
if(f==null)H.t(P.r("Required uniform value, "+r+", was not defined or used in shader."))
H.f(f,"$iE")
s=this.y
r="txtDirLights["+h+"].objDir"
e=s.j(0,r)
if(e==null)H.t(P.r("Required uniform value, "+r+", was not defined or used in shader."))
H.f(e,"$iE")
s=this.y
r="txtDirLights["+h+"].viewDir"
d=s.j(0,r)
if(d==null)H.t(P.r("Required uniform value, "+r+", was not defined or used in shader."))
H.f(d,"$iE")
s=this.y
r="txtDirLights["+h+"].color"
c=s.j(0,r)
if(c==null)H.t(P.r("Required uniform value, "+r+", was not defined or used in shader."))
H.f(c,"$iE")
s=this.y
r="txtDirLights["+h+"].nullTxt"
b=s.j(0,r)
if(b==null)H.t(P.r("Required uniform value, "+r+", was not defined or used in shader."))
H.f(b,"$iH")
s=this.y
r="txtDirLightsTxt2D"+h
a=s.j(0,r)
if(a==null)H.t(P.r("Required uniform value, "+r+", was not defined or used in shader."))
H.f(a,"$iag")
s=this.c9;(s&&C.a).h(s,new A.cu(h,g,f,e,d,c,a,b))}}t=a6.cy
if(t>0){this.dT=H.n(this.y.l(0,"txtPntLightCount"),"$iH")
for(h=0;h<t;++h){s=this.y
r="txtPntLights["+h+"].point"
g=s.j(0,r)
if(g==null)H.t(P.r("Required uniform value, "+r+", was not defined or used in shader."))
H.f(g,"$iE")
s=this.y
r="txtPntLights["+h+"].viewPnt"
f=s.j(0,r)
if(f==null)H.t(P.r("Required uniform value, "+r+", was not defined or used in shader."))
H.f(f,"$iE")
s=this.y
r="txtPntLights["+h+"].invViewRotMat"
e=s.j(0,r)
if(e==null)H.t(P.r("Required uniform value, "+r+", was not defined or used in shader."))
H.f(e,"$icr")
s=this.y
r="txtPntLights["+h+"].color"
d=s.j(0,r)
if(d==null)H.t(P.r("Required uniform value, "+r+", was not defined or used in shader."))
H.f(d,"$iE")
s=this.y
r="txtPntLights["+h+"].nullTxt"
c=s.j(0,r)
if(c==null)H.t(P.r("Required uniform value, "+r+", was not defined or used in shader."))
H.f(c,"$iH")
s=this.y
r="txtPntLights["+h+"].att0"
b=s.j(0,r)
if(b==null)H.t(P.r("Required uniform value, "+r+", was not defined or used in shader."))
H.f(b,"$iT")
s=this.y
r="txtPntLights["+h+"].att1"
a=s.j(0,r)
if(a==null)H.t(P.r("Required uniform value, "+r+", was not defined or used in shader."))
H.f(a,"$iT")
s=this.y
r="txtPntLights["+h+"].att2"
a0=s.j(0,r)
if(a0==null)H.t(P.r("Required uniform value, "+r+", was not defined or used in shader."))
H.f(a0,"$iT")
s=this.y
r="txtPntLightsTxtCube"+h
a1=s.j(0,r)
if(a1==null)H.t(P.r("Required uniform value, "+r+", was not defined or used in shader."))
H.f(a1,"$iac")
s=this.ca;(s&&C.a).h(s,new A.cv(h,g,f,e,d,a1,c,b,a,a0))}}t=a6.db
if(t>0){this.dU=H.n(this.y.l(0,"txtSpotLightCount"),"$iH")
for(h=0;h<t;++h){s=this.y
r="txtSpotLights["+h+"].objPnt"
g=s.j(0,r)
if(g==null)H.t(P.r("Required uniform value, "+r+", was not defined or used in shader."))
H.f(g,"$iE")
s=this.y
r="txtSpotLights["+h+"].objDir"
f=s.j(0,r)
if(f==null)H.t(P.r("Required uniform value, "+r+", was not defined or used in shader."))
H.f(f,"$iE")
s=this.y
r="txtSpotLights["+h+"].objUp"
e=s.j(0,r)
if(e==null)H.t(P.r("Required uniform value, "+r+", was not defined or used in shader."))
H.f(e,"$iE")
s=this.y
r="txtSpotLights["+h+"].objRight"
d=s.j(0,r)
if(d==null)H.t(P.r("Required uniform value, "+r+", was not defined or used in shader."))
H.f(d,"$iE")
s=this.y
r="txtSpotLights["+h+"].viewPnt"
c=s.j(0,r)
if(c==null)H.t(P.r("Required uniform value, "+r+", was not defined or used in shader."))
H.f(c,"$iE")
s=this.y
r="txtSpotLights["+h+"].nullTxt"
b=s.j(0,r)
if(b==null)H.t(P.r("Required uniform value, "+r+", was not defined or used in shader."))
H.f(b,"$iH")
s=this.y
r="txtSpotLights["+h+"].color"
a=s.j(0,r)
if(a==null)H.t(P.r("Required uniform value, "+r+", was not defined or used in shader."))
H.f(a,"$iE")
s=this.y
r="txtSpotLights["+h+"].tuScalar"
a0=s.j(0,r)
if(a0==null)H.t(P.r("Required uniform value, "+r+", was not defined or used in shader."))
H.f(a0,"$iT")
s=this.y
r="txtSpotLights["+h+"].tvScalar"
a1=s.j(0,r)
if(a1==null)H.t(P.r("Required uniform value, "+r+", was not defined or used in shader."))
H.f(a1,"$iT")
s=this.y
r="txtSpotLights["+h+"].att0"
a2=s.j(0,r)
if(a2==null)H.t(P.r("Required uniform value, "+r+", was not defined or used in shader."))
H.f(a2,"$iT")
s=this.y
r="txtSpotLights["+h+"].att1"
a3=s.j(0,r)
if(a3==null)H.t(P.r("Required uniform value, "+r+", was not defined or used in shader."))
H.f(a3,"$iT")
s=this.y
r="txtSpotLights["+h+"].att2"
a4=s.j(0,r)
if(a4==null)H.t(P.r("Required uniform value, "+r+", was not defined or used in shader."))
H.f(a4,"$iT")
s=this.y
r="txtSpotLightsTxt2D"+h
a5=s.j(0,r)
if(a5==null)H.t(P.r("Required uniform value, "+r+", was not defined or used in shader."))
H.f(a5,"$iag")
s=this.cb;(s&&C.a).h(s,new A.cw(h,g,f,e,d,c,a5,b,a,a0,a1,a2,a3,a4))}}}},
ad:function(a,b,c){if(c==null||!c.d)C.b.H(b.a,b.d,1)
else{a.ep(c)
C.b.H(b.a,b.d,0)}},
a8:function(a,b,c){C.b.H(b.a,b.d,1)},
seT:function(a){this.r1=H.k(a,"$ib",[A.al],"$ab")},
seF:function(a){this.c6=H.k(a,"$ib",[A.cq],"$ab")},
seG:function(a){this.c7=H.k(a,"$ib",[A.cs],"$ab")},
seH:function(a){this.c8=H.k(a,"$ib",[A.ct],"$ab")},
seI:function(a){this.c9=H.k(a,"$ib",[A.cu],"$ab")},
seJ:function(a){this.ca=H.k(a,"$ib",[A.cv],"$ab")},
seK:function(a){this.cb=H.k(a,"$ib",[A.cw],"$ab")}}
A.fM.prototype={
i_:function(a){var u,t,s
if(!this.x1)return
u=a.a+="struct BendingValue\n"
u+="{\n"
a.a=u
u+="   mat4 mat;\n"
a.a=u
u+="};\n"
a.a=u
a.a=u+"uniform int bendMatCount;\n"
u=a.a+="uniform BendingValue bendValues["+this.al+"];\n"
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
i6:function(a){var u
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
i0:function(a){var u
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
ig:function(a){var u,t
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
ih:function(a){var u,t
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
i8:function(a){var u
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
il:function(a){var u
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
if(b===C.h)return
if(0>=c.length)return H.i(c,0)
u+="uniform int null"+(c[0].toUpperCase()+C.j.cz(c,1))+"Txt;\n"
a.a=u
if(b===C.d)a.a=u+("uniform sampler2D "+c+"Txt;\n")
else if(b===C.e)a.a=u+("uniform samplerCube "+c+"Txt;\n")},
i3:function(a){var u,t
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
case C.h:u=t+"   return emissionClr;\n"
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
hZ:function(a){var u,t
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
case C.h:u=t+"   return ambientClr;\n"
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
i1:function(a){var u,t
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
case C.h:u=t+"   diffuseColor = diffuseClr;\n"
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
i4:function(a){var u,t
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
case C.h:u=t+"   invDiffuseColor = invDiffuseClr;\n"
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
ic:function(a){var u,t
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
case C.h:u=t+"   specularColor = specularClr;\n"
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
i7:function(a){var u,t
if(!this.r1)return
u=a.a+="// === Normal ===\n"
u+="\n"
a.a=u
t=this.f
switch(t){case C.c:break
case C.h:break
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
case C.h:u+="   return normalize(normalVec);\n"
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
ia:function(a){var u,t
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
case C.h:u=t+"   vec3 scalar = reflectClr;\n"
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
ib:function(a){var u,t
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
case C.h:u=t+"   vec3 scalar = refractClr;\n"
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
i2:function(a){var u,t
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
i9:function(a){var u,t
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
ie:function(a){var u,t
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
ii:function(a){var u,t,s
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
ij:function(a){var u,t,s
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
ik:function(a){var u,t,s
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
i5:function(a){var u
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
A.cq.prototype={}
A.cu.prototype={}
A.cs.prototype={}
A.cv.prototype={}
A.ct.prototype={}
A.cw.prototype={}
A.cj.prototype={
cD:function(a,b){this.c=null
this.d=null
this.e=null
this.f=null
this.r=null
this.x=null
this.y=null},
dW:function(a,b,c){var u,t,s
this.c=b
this.d=c
this.e=this.cT(b,35633)
this.f=this.cT(this.d,35632)
u=this.a
t=u.createProgram()
this.r=t
C.b.df(u,t,this.e)
C.b.df(u,this.r,this.f)
C.b.iW(u,this.r)
if(!H.kw(C.b.bx(u,this.r,35714))){s=C.b.ej(u,this.r)
C.b.iG(u,this.r)
H.t(P.r("Failed to link shader: "+H.l(s)))}this.hB()
this.hD()},
Z:function(a){C.b.cq(a.a,this.r)
this.x.iO()},
cT:function(a,b){var u,t,s
u=this.a
t=C.b.iE(u,b)
C.b.er(u,t,a)
C.b.iz(u,t)
if(!H.kw(C.b.el(u,t,35713))){s=C.b.ek(u,t)
C.b.iH(u,t)
throw H.h(P.r("Error compiling shader '"+H.l(t)+"': "+H.l(s)))}return t},
hB:function(){var u,t,s,r,q,p
u=H.c([],[A.cS])
t=this.a
s=H.a4(C.b.bx(t,this.r,35721))
if(typeof s!=="number")return H.D(s)
r=0
for(;r<s;++r){q=C.b.ef(t,this.r,r)
p=C.b.eh(t,this.r,q.name)
C.a.h(u,new A.cS(t,q.name,p))}this.x=new A.eT(u)},
hD:function(){var u,t,s,r,q,p
u=H.c([],[A.dL])
t=this.a
s=H.a4(C.b.bx(t,this.r,35718))
if(typeof s!=="number")return H.D(s)
r=0
for(;r<s;++r){q=C.b.eg(t,this.r,r)
p=C.b.em(t,this.r,q.name)
C.a.h(u,this.iF(q.type,q.size,q.name,p))}this.y=new A.hZ(u)},
aD:function(a,b,c){var u,t
u=this.a
t=this.r
if(a===1)return new A.H(u,t,b,c)
else return A.jq(u,t,b,a,c)},
f0:function(a,b,c){var u,t
u=this.a
t=this.r
if(a===1)return new A.ag(u,t,b,c)
else return A.jq(u,t,b,a,c)},
f1:function(a,b,c){var u,t
u=this.a
t=this.r
if(a===1)return new A.ac(u,t,b,c)
else return A.jq(u,t,b,a,c)},
b9:function(a,b){return new P.e4(a+" uniform variables are unsupported by all browsers.\n"+("Please change the type of "+H.l(b)+"."))},
iF:function(a,b,c,d){switch(a){case 5120:return this.aD(b,c,d)
case 5121:return this.aD(b,c,d)
case 5122:return this.aD(b,c,d)
case 5123:return this.aD(b,c,d)
case 5124:return this.aD(b,c,d)
case 5125:return this.aD(b,c,d)
case 5126:return new A.T(this.a,this.r,c,d)
case 35664:return new A.hU(this.a,this.r,c,d)
case 35665:return new A.E(this.a,this.r,c,d)
case 35666:return new A.hX(this.a,this.r,c,d)
case 35667:return new A.hV(this.a,this.r,c,d)
case 35668:return new A.hW(this.a,this.r,c,d)
case 35669:return new A.hY(this.a,this.r,c,d)
case 35674:return new A.i_(this.a,this.r,c,d)
case 35675:return new A.cr(this.a,this.r,c,d)
case 35676:return new A.al(this.a,this.r,c,d)
case 35678:return this.f0(b,c,d)
case 35680:return this.f1(b,c,d)
case 35670:throw H.h(this.b9("BOOL",c))
case 35671:throw H.h(this.b9("BOOL_VEC2",c))
case 35672:throw H.h(this.b9("BOOL_VEC3",c))
case 35673:throw H.h(this.b9("BOOL_VEC4",c))
default:throw H.h(P.r("Unknown uniform variable type "+H.l(a)+" for "+H.l(c)+"."))}}}
A.bB.prototype={
i:function(a){return this.b}}
A.dz.prototype={}
A.dL.prototype={}
A.hZ.prototype={
j:function(a,b){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<t;++s){r=u[s]
if(r.c===b)return r}return},
l:function(a,b){var u=this.j(0,b)
if(u==null)throw H.h(P.r("Required uniform value, "+b+", was not defined or used in shader."))
return u},
i:function(a){return this.J()},
iQ:function(a){var u,t,s,r
for(u=this.a,t=u.length,s="",r=0;r<u.length;u.length===t||(0,H.A)(u),++r)s+=u[r].i(0)+a
return s},
J:function(){return this.iQ("\n")}}
A.H.prototype={
i:function(a){return"Uniform1i: "+H.l(this.c)}}
A.hV.prototype={
i:function(a){return"Uniform2i: "+H.l(this.c)}}
A.hW.prototype={
i:function(a){return"Uniform3i: "+H.l(this.c)}}
A.hY.prototype={
i:function(a){return"Uniform4i: "+H.l(this.c)}}
A.hT.prototype={
i:function(a){return"Uniform1iv: "+H.l(this.c)},
shX:function(a){this.e=H.k(a,"$ib",[P.z],"$ab")}}
A.T.prototype={
i:function(a){return"Uniform1f: "+H.l(this.c)}}
A.hU.prototype={
i:function(a){return"Uniform2f: "+H.l(this.c)}}
A.E.prototype={
i:function(a){return"Uniform3f: "+H.l(this.c)}}
A.hX.prototype={
i:function(a){return"Uniform4f: "+H.l(this.c)}}
A.i_.prototype={
i:function(a){return"Uniform1Mat2 "+H.l(this.c)}}
A.cr.prototype={
ac:function(a){var u=new Float32Array(H.cJ(H.k(a,"$ib",[P.y],"$ab")))
C.b.eb(this.a,this.d,!1,u)},
i:function(a){return"UniformMat3: "+H.l(this.c)}}
A.al.prototype={
ac:function(a){var u=new Float32Array(H.cJ(H.k(a,"$ib",[P.y],"$ab")))
C.b.ec(this.a,this.d,!1,u)},
i:function(a){return"UniformMat4: "+H.l(this.c)}}
A.ag.prototype={
ep:function(a){var u,t,s
u=a.d
t=this.a
s=this.d
if(!u)C.b.H(t,s,0)
else C.b.H(t,s,a.a)},
i:function(a){return"UniformSampler2D: "+H.l(this.c)}}
A.ac.prototype={
eq:function(a){var u,t,s
u=a==null||a.d<6
t=this.a
s=this.d
if(u)C.b.H(t,s,0)
else C.b.H(t,s,a.a)},
i:function(a){return"UniformSamplerCube: "+H.l(this.c)}}
F.iV.prototype={
$3:function(a,b,c){var u,t,s
u=this.a
t=u.a.ci(u.b,b).ci(u.d.ci(u.c,b),c)
u=new V.af(t.a,t.b,t.c)
if(!J.a5(a.f,u)){a.f=u
u=a.a
if(u!=null)u.a1()}a.sjo(t.t(0,Math.sqrt(t.A(t))))
u=1-b
s=1-c
s=new V.b7(this.b+b*c,this.c+u*c,this.d+b*s,this.e+u*s)
if(!J.a5(a.cx,s)){a.cx=s
u=a.a
if(u!=null)u.a1()}},
$S:34}
F.a0.prototype={
eS:function(){var u,t,s,r,q
u=this.a
t=u==null?null:u.r
u=this.b
s=u==null?null:u.r
u=this.c
r=u==null?null:u.r
q=V.dU()
if(t!=null)q=q.D(0,t)
if(s!=null)q=q.D(0,s)
if(r!=null)q=q.D(0,r)
if(q.dX())return
return q.t(0,Math.sqrt(q.A(q)))},
eX:function(){var u,t,s,r,q
u=this.a
t=u==null?null:u.f
u=this.b
s=u==null?null:u.f
u=this.c
r=u==null?null:u.f
if(t==null||s==null||r==null)return
u=s.G(0,t)
u=new V.P(u.a,u.b,u.c)
q=u.t(0,Math.sqrt(u.A(u)))
u=r.G(0,t)
u=new V.P(u.a,u.b,u.c)
u=q.aU(u.t(0,Math.sqrt(u.A(u))))
return u.t(0,Math.sqrt(u.A(u)))},
c1:function(){if(this.d!=null)return!0
var u=this.eS()
if(u==null){u=this.eX()
if(u==null)return!1}this.d=u
this.a.a.a1()
return!0},
eR:function(){var u,t,s,r,q
u=this.a
t=u==null?null:u.x
u=this.b
s=u==null?null:u.x
u=this.c
r=u==null?null:u.x
q=V.dU()
if(t!=null)q=q.D(0,t)
if(s!=null)q=q.D(0,s)
if(r!=null)q=q.D(0,r)
if(q.dX())return
return q.t(0,Math.sqrt(q.A(q)))},
eW:function(){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f
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
if(Math.abs(i-0)<$.K().a){u=m.G(0,p)
u=new V.P(u.a,u.b,u.c)
h=u.t(0,Math.sqrt(u.A(u)))
if(j.a-k.a<0)h=h.M(0)}else{g=(u-l.b)/i
u=m.G(0,p)
u=new V.af(u.a*g+p.a,u.b*g+p.b,u.c*g+p.c).G(0,s)
u=new V.P(u.a,u.b,u.c)
h=u.t(0,Math.sqrt(u.A(u)))
j=j.a
k=k.a
if((j-k)*g+k-l.a<0)h=h.M(0)}u=this.d
if(u!=null){f=u.t(0,Math.sqrt(u.A(u)))
u=f.aU(h)
u=u.t(0,Math.sqrt(u.A(u))).aU(f)
h=u.t(0,Math.sqrt(u.A(u)))}return h},
c_:function(){if(this.e!=null)return!0
var u=this.eR()
if(u==null){u=this.eW()
if(u==null)return!1}this.e=u
this.a.a.a1()
return!0},
q:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.J()},
u:function(a){var u,t
u=this.a
if(u==null||this.b==null||this.c==null)return a+"disposed"
t=a+C.j.aa(J.aq(u.e),0)+", "+C.j.aa(J.aq(this.b.e),0)+", "+C.j.aa(J.aq(this.c.e),0)+" {"
u=this.d
t=u!=null?t+(u.i(0)+", "):t+"-, "
u=this.e
return u!=null?t+(u.i(0)+"}"):t+"-}"},
J:function(){return this.u("")}}
F.b1.prototype={
q:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.J()},
u:function(a){var u=this.a
if(u==null||this.b==null)return a+"disposed"
return a+C.j.aa(J.aq(u.e),0)+", "+C.j.aa(J.aq(this.b.e),0)},
J:function(){return this.u("")}}
F.bo.prototype={
q:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.J()},
u:function(a){var u=this.a
if(u==null)return a+"disposed"
return a+C.j.aa(J.aq(u.e),0)},
J:function(){return this.u("")}}
F.dx.prototype={
gm:function(){var u=this.e
if(u==null){u=D.I()
this.e=u}return u},
j0:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i,h
u=this.e
if(u!=null)++u.d
a.a.X()
t=this.a.c.length
for(u=a.a.c,s=u.length,r=0;r<u.length;u.length===s||(0,H.A)(u),++r){q=u[r]
this.a.h(0,q.iD())}this.a.X()
for(u=a.b.b,s=u.length,r=0;r<u.length;u.length===s||(0,H.A)(u),++r){p=u[r]
o=this.a
n=p.a
n.a.a.X()
n=n.e
if(typeof n!=="number")return n.D()
n+=t
o=o.c
if(n>=o.length)return H.i(o,n)
m=o[n]
this.b.a.a.h(0,m)
n=new F.bo()
if(m.a==null)H.t(P.r("May not create a point with a vertex which is not attached to a shape."))
n.a=m
C.a.h(m.b.b,n)
C.a.h(n.a.a.b.b,n)
o=n.a.a.e
if(o!=null)o.B(null)}for(u=a.c.b,s=u.length,r=0;r<u.length;u.length===s||(0,H.A)(u),++r){l=u[r]
o=this.a
n=l.a
n.a.a.X()
n=n.e
if(typeof n!=="number")return n.D()
n+=t
o=o.c
if(n>=o.length)return H.i(o,n)
k=o[n]
n=this.a
o=l.b
o.a.a.X()
o=o.e
if(typeof o!=="number")return o.D()
o+=t
n=n.c
if(o>=n.length)return H.i(n,o)
j=n[o]
o=this.c.a
o.a.h(0,k)
o.a.h(0,j)
F.li(k,j)}for(u=a.d.b,s=u.length,r=0;r<u.length;u.length===s||(0,H.A)(u),++r){i=u[r]
o=this.a
n=i.a
n.a.a.X()
n=n.e
if(typeof n!=="number")return n.D()
n+=t
o=o.c
if(n>=o.length)return H.i(o,n)
k=o[n]
n=this.a
o=i.b
o.a.a.X()
o=o.e
if(typeof o!=="number")return o.D()
o+=t
n=n.c
if(o>=n.length)return H.i(n,o)
j=n[o]
o=this.a
n=i.c
n.a.a.X()
n=n.e
if(typeof n!=="number")return n.D()
n+=t
o=o.c
if(n>=o.length)return H.i(o,n)
h=o[n]
n=this.d.a
n.a.h(0,k)
n.a.h(0,j)
n.a.h(0,h)
F.c5(k,j,h)}u=this.e
if(u!=null)u.az(0)},
at:function(){var u,t
u=this.e
if(u!=null)++u.d
t=this.d.at()||!1
if(!this.a.at())t=!1
u=this.e
if(u!=null)u.az(0)
return t},
dj:function(a0,a1){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a
u=this.a.c.length
a1.toString
t=$.aB()
s=a1.a
r=(s&t.a)!==0?1:0
if((s&$.bd().a)!==0)++r
if((s&$.bc().a)!==0)++r
if((s&$.be().a)!==0)++r
if((s&$.bf().a)!==0)++r
if((s&$.cP().a)!==0)++r
if((s&$.cQ().a)!==0)++r
if((s&$.bT().a)!==0)++r
if((s&$.bb().a)!==0)++r
q=a1.gcw(a1)
p=q*4
t=new Array(u*q)
t.fixed$length=Array
s=P.y
o=H.c(t,[s])
t=new Array(r)
t.fixed$length=Array
n=H.c(t,[Z.cW])
for(m=0,l=0;l<r;++l){k=a1.ir(l)
j=k.gcw(k)
C.a.a_(n,l,new Z.cW(k,j,m*4,p,0))
for(i=0;i<u;++i){t=this.a.c
if(i>=t.length)return H.i(t,i)
h=t[i].iX(k)
g=m+i*q
for(f=0;f<h.length;++f){C.a.a_(o,g,h[f]);++g}}m+=j}H.k(o,"$ib",[s],"$ab")
t=a0.a
e=t.createBuffer()
C.b.aj(t,34962,e)
C.b.di(t,34962,new Float32Array(H.cJ(o)),35044)
C.b.aj(t,34962,null)
d=new Z.bY(new Z.dV(34962,e),n,a1)
d.sff(H.c([],[Z.bk]))
if(this.b.b.length!==0){s=P.z
c=H.c([],[s])
for(l=0;b=this.b.b,l<b.length;++l){b=b[l].a
b.a.a.X()
C.a.h(c,b.e)}a=Z.jr(t,34963,H.k(c,"$ib",[s],"$ab"))
C.a.h(d.b,new Z.bk(0,c.length,a))}if(this.c.b.length!==0){s=P.z
c=H.c([],[s])
for(l=0;b=this.c.b,l<b.length;++l){b=b[l].a
b.a.a.X()
C.a.h(c,b.e)
b=this.c.b
if(l>=b.length)return H.i(b,l)
b=b[l].b
b.a.a.X()
C.a.h(c,b.e)}a=Z.jr(t,34963,H.k(c,"$ib",[s],"$ab"))
C.a.h(d.b,new Z.bk(1,c.length,a))}if(this.d.b.length!==0){s=P.z
c=H.c([],[s])
for(l=0;b=this.d.b,l<b.length;++l){b=b[l].a
b.a.a.X()
C.a.h(c,b.e)
b=this.d.b
if(l>=b.length)return H.i(b,l)
b=b[l].b
b.a.a.X()
C.a.h(c,b.e)
b=this.d.b
if(l>=b.length)return H.i(b,l)
b=b[l].c
b.a.a.X()
C.a.h(c,b.e)}a=Z.jr(t,34963,H.k(c,"$ib",[s],"$ab"))
C.a.h(d.b,new Z.bk(4,c.length,a))}return d},
i:function(a){var u=H.c([],[P.o])
if(this.a.c.length!==0){C.a.h(u,"Vertices:")
C.a.h(u,this.a.u("   "))}if(this.b.b.length!==0){C.a.h(u,"Points:")
C.a.h(u,this.b.u("   "))}if(this.c.b.length!==0){C.a.h(u,"Lines:")
C.a.h(u,this.c.u("   "))}if(this.d.b.length!==0){C.a.h(u,"Faces:")
C.a.h(u,this.d.u("   "))}return C.a.w(u,"\n")},
aJ:function(a){var u=this.e
if(u!=null)u.B(a)},
a1:function(){return this.aJ(null)},
$imy:1}
F.hk.prototype={
io:function(a){var u,t,s,r,q,p
H.k(a,"$ib",[F.ap],"$ab")
u=H.c([],[F.a0])
t=a[0]
for(s=this.a,r=2;r<4;++r){q=a[r-1]
p=a[r]
s.a.h(0,t)
s.a.h(0,q)
s.a.h(0,p)
C.a.h(u,F.c5(t,q,p))}return u},
ip:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k,j,i,h
H.k(c,"$ib",[F.ap],"$ab")
u=H.c([],[F.a0])
for(t=this.a,s=b,r=0,q=!1,p=1;p<a;++p,++r,++s){for(o=q,n=1;n<b;++n,s=j){m=c.length
if(r<0||r>=m)return H.i(c,r)
l=c[r];++r
if(r>=m)return H.i(c,r)
k=c[r]
j=s+1
if(j<0||j>=m)return H.i(c,j)
i=c[j]
if(s<0||s>=m)return H.i(c,s)
h=c[s]
m=t.a
if(o){m.h(0,l)
t.a.h(0,k)
t.a.h(0,i)
C.a.h(u,F.c5(l,k,i))
t.a.h(0,l)
t.a.h(0,i)
t.a.h(0,h)
C.a.h(u,F.c5(l,i,h))}else{m.h(0,k)
t.a.h(0,i)
t.a.h(0,h)
C.a.h(u,F.c5(k,i,h))
t.a.h(0,k)
t.a.h(0,h)
t.a.h(0,l)
C.a.h(u,F.c5(k,h,l))}o=!o}q=!q}return u},
gk:function(a){return this.b.length},
at:function(){var u,t,s,r
for(u=this.b,t=u.length,s=!0,r=0;r<u.length;u.length===t||(0,H.A)(u),++r)if(!u[r].c1())s=!1
return s},
c0:function(){var u,t,s,r
for(u=this.b,t=u.length,s=!0,r=0;r<u.length;u.length===t||(0,H.A)(u),++r)if(!u[r].c_())s=!1
return s},
i:function(a){return this.J()},
u:function(a){var u,t,s,r
u=H.c([],[P.o])
for(t=this.b,s=t.length,r=0;r<t.length;t.length===s||(0,H.A)(t),++r)C.a.h(u,t[r].u(a))
return C.a.w(u,"\n")},
J:function(){return this.u("")},
sf6:function(a){this.b=H.k(a,"$ib",[F.a0],"$ab")}}
F.hl.prototype={
gk:function(a){return this.b.length},
i:function(a){return this.J()},
u:function(a){var u,t,s,r
u=H.c([],[P.o])
t=this.b.length
for(s=0;s<t;++s){r=this.b
if(s>=r.length)return H.i(r,s)
C.a.h(u,r[s].u(a+(""+s+". ")))}return C.a.w(u,"\n")},
J:function(){return this.u("")},
sfi:function(a){this.b=H.k(a,"$ib",[F.b1],"$ab")}}
F.hm.prototype={
gk:function(a){return this.b.length},
i:function(a){return this.J()},
u:function(a){var u,t,s,r
u=H.c([],[P.o])
for(t=this.b,s=t.length,r=0;r<t.length;t.length===s||(0,H.A)(t),++r)C.a.h(u,t[r].u(a))
return C.a.w(u,"\n")},
J:function(){return this.u("")},
sbQ:function(a){this.b=H.k(a,"$ib",[F.bo],"$ab")}}
F.ap.prototype={
c3:function(a){var u,t,s,r,q,p,o
u=this.f
t=this.r
s=this.x
r=this.y
q=this.z
p=this.Q
o=this.ch
return F.i6(this.cx,s,p,u,t,r,q,a,o)},
iD:function(){return this.c3(null)},
sjo:function(a){var u
if(!J.a5(this.z,a)){this.z=a
u=this.a
if(u!=null)u.a1()}},
iX:function(a){var u,t
if(a.q(0,$.aB())){u=this.f
t=[P.y]
if(u==null)return H.c([0,0,0],t)
else return H.c([u.a,u.b,u.c],t)}else if(a.q(0,$.bd())){u=this.r
t=[P.y]
if(u==null)return H.c([0,1,0],t)
else return H.c([u.a,u.b,u.c],t)}else if(a.q(0,$.bc())){u=this.x
t=[P.y]
if(u==null)return H.c([0,0,1],t)
else return H.c([u.a,u.b,u.c],t)}else if(a.q(0,$.be())){u=this.y
t=[P.y]
if(u==null)return H.c([0,0],t)
else return H.c([u.a,u.b],t)}else if(a.q(0,$.bf())){u=this.z
t=[P.y]
if(u==null)return H.c([0,0,0],t)
else return H.c([u.a,u.b,u.c],t)}else if(a.q(0,$.cP())){u=this.Q
t=[P.y]
if(u==null)return H.c([1,1,1],t)
else return H.c([u.a,u.b,u.c],t)}else if(a.q(0,$.cQ())){u=this.Q
t=[P.y]
if(u==null)return H.c([1,1,1,1],t)
else return H.c([u.a,u.b,u.c,u.d],t)}else if(a.q(0,$.bT()))return H.c([this.ch],[P.y])
else if(a.q(0,$.bb())){u=this.cx
t=[P.y]
if(u==null)return H.c([-1,-1,-1,-1],t)
else return H.c([u.a,u.b,u.c,u.d],t)}else return H.c([],[P.y])},
c1:function(){var u,t
u={}
if(this.r!=null)return!0
t=this.a
if(t!=null){t=t.e
if(t!=null)++t.d}u.a=V.dU()
this.d.N(0,new F.ie(u))
u=u.a
this.r=u.t(0,Math.sqrt(u.A(u)))
u=this.a
if(u!=null){u.a1()
u=this.a.e
if(u!=null)u.az(0)}return!0},
c_:function(){var u,t
u={}
if(this.x!=null)return!0
t=this.a
if(t!=null){t=t.e
if(t!=null)++t.d}u.a=V.dU()
this.d.N(0,new F.id(u))
u=u.a
this.x=u.t(0,Math.sqrt(u.A(u)))
u=this.a
if(u!=null){u.a1()
u=this.a.e
if(u!=null)u.az(0)}return!0},
q:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.J()},
u:function(a){var u,t,s
u=H.c([],[P.o])
C.a.h(u,C.j.aa(J.aq(this.e),0))
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
s=C.a.w(u,", ")
return a+"{"+s+"}"},
J:function(){return this.u("")}}
F.ie.prototype={
$1:function(a){var u,t
H.n(a,"$ia0")
u=a==null?null:a.d
if(u!=null){t=this.a
t.a=t.a.D(0,u)}},
$S:5}
F.id.prototype={
$1:function(a){var u,t
H.n(a,"$ia0")
u=a==null?null:a.e
if(u!=null){t=this.a
t.a=t.a.D(0,u)}},
$S:5}
F.i7.prototype={
X:function(){},
h:function(a,b){var u,t
u=b.a
if(u!=null){if(u===this.a)return!1
throw H.h(P.r("May not add a vertex already attached to another shape to this shape."))}u=this.c
b.e=u.length
t=this.a
b.a=t
C.a.h(u,b)
t.a1()
return!0},
iq:function(a,b,c,d,e,f,g,h,i){var u=F.i6(a,b,c,d,e,f,g,h,i)
this.h(0,u)
return u},
bb:function(a,b,c,d,e,f){return this.iq(a,null,b,c,null,d,e,f,0)},
gk:function(a){return this.c.length},
at:function(){var u,t,s
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.A)(u),++s)u[s].c1()
return!0},
c0:function(){var u,t,s
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.A)(u),++s)u[s].c_()
return!0},
iv:function(){var u,t,s,r,q,p,o,n
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.A)(u),++s){r=u[s]
if(r.z==null){q=r.r
p=q.a
o=q.b
n=q.c
n=q.t(0,Math.sqrt(p*p+o*o+n*n))
if(!J.a5(r.z,n)){r.z=n
q=r.a
if(q!=null){q=q.e
if(q!=null)q.B(null)}}}}return!0},
i:function(a){return this.J()},
u:function(a){var u,t,s,r
this.X()
u=H.c([],[P.o])
for(t=this.c,s=t.length,r=0;r<t.length;t.length===s||(0,H.A)(t),++r)C.a.h(u,t[r].u(a))
return C.a.w(u,"\n")},
J:function(){return this.u("")},
shY:function(a){this.c=H.k(a,"$ib",[F.ap],"$ab")}}
F.i8.prototype={
gk:function(a){return this.b.length+this.c.length+this.d.length},
N:function(a,b){H.m(b,{func:1,ret:-1,args:[F.a0]})
C.a.N(this.b,b)
C.a.N(this.c,new F.i9(this,b))
C.a.N(this.d,new F.ia(this,b))},
i:function(a){return this.J()},
u:function(a){var u,t,s,r
u=H.c([],[P.o])
for(t=this.b,s=t.length,r=0;r<t.length;t.length===s||(0,H.A)(t),++r)C.a.h(u,t[r].u(a))
for(t=this.c,s=t.length,r=0;r<t.length;t.length===s||(0,H.A)(t),++r)C.a.h(u,t[r].u(a))
for(t=this.d,s=t.length,r=0;r<t.length;t.length===s||(0,H.A)(t),++r)C.a.h(u,t[r].u(a))
return C.a.w(u,"\n")},
J:function(){return this.u("")},
sf7:function(a){this.b=H.k(a,"$ib",[F.a0],"$ab")},
sf8:function(a){this.c=H.k(a,"$ib",[F.a0],"$ab")},
sf9:function(a){this.d=H.k(a,"$ib",[F.a0],"$ab")}}
F.i9.prototype={
$1:function(a){H.n(a,"$ia0")
if(!J.a5(a.a,this.a))this.b.$1(a)},
$S:5}
F.ia.prototype={
$1:function(a){var u
H.n(a,"$ia0")
u=this.a
if(!J.a5(a.a,u)&&!J.a5(a.b,u))this.b.$1(a)},
$S:5}
F.ib.prototype={
gk:function(a){return this.b.length+this.c.length},
i:function(a){return this.J()},
u:function(a){var u,t,s,r
u=H.c([],[P.o])
for(t=this.b,s=t.length,r=0;r<t.length;t.length===s||(0,H.A)(t),++r)C.a.h(u,t[r].u(a))
for(t=this.c,s=t.length,r=0;r<t.length;t.length===s||(0,H.A)(t),++r)C.a.h(u,t[r].u(a))
return C.a.w(u,"\n")},
J:function(){return this.u("")},
sfj:function(a){this.b=H.k(a,"$ib",[F.b1],"$ab")},
sfk:function(a){this.c=H.k(a,"$ib",[F.b1],"$ab")}}
F.ic.prototype={
gk:function(a){return this.b.length},
i:function(a){return this.J()},
u:function(a){var u,t,s,r
u=H.c([],[P.o])
for(t=this.b,s=t.length,r=0;r<t.length;t.length===s||(0,H.A)(t),++r)C.a.h(u,t[r].u(a))
return C.a.w(u,"\n")},
J:function(){return this.u("")},
sbQ:function(a){this.b=H.k(a,"$ib",[F.bo],"$ab")}}
O.dk.prototype={
gm:function(){var u=this.dy
if(u==null){u=D.I()
this.dy=u}return u},
R:function(a){var u
H.n(a,"$iv")
u=this.dy
if(u!=null)u.B(a)},
aO:function(){return this.R(null)},
d5:function(a){H.n(a,"$iv")
this.a=null
this.R(a)},
hu:function(){return this.d5(null)},
fA:function(a,b){var u=V.aj
u=new D.bl(a,H.k(b,"$ie",[u],"$ae"),this,[u])
u.b=!0
this.R(u)},
fC:function(a,b){var u=V.aj
u=new D.bm(a,H.k(b,"$ie",[u],"$ae"),this,[u])
u.b=!0
this.R(u)},
cQ:function(){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7
u=this.dx
t=C.i.a0(u.e.length+3,4)*4
s=C.i.a0(u.f.length+3,4)*4
r=C.i.a0(u.r.length+3,4)*4
q=C.i.a0(u.x.length+3,4)*4
p=C.i.a0(u.y.length+3,4)*4
o=C.i.a0(u.z.length+3,4)*4
n=C.i.a0(this.e.a.length+3,4)*4
u=this.f.c
m=this.r.c
l=this.x.c
k=this.y.c
j=this.z.c
i=this.Q.c
h=this.cx.c
g=this.cy.c
f=this.db.c
e="MaterialLight_"+C.i.i(u.a)+C.i.i(m.a)+C.i.i(l.a)+C.i.i(k.a)+C.i.i(j.a)+C.i.i(i.a)+C.i.i(h.a)+C.i.i(g.a)+C.i.i(f.a)
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
a7=$.aB()
if(a0){b=$.bd()
a7=new Z.aY(a7.a|b.a)}if(a1){b=$.bc()
a7=new Z.aY(a7.a|b.a)}if(a2){b=$.be()
a7=new Z.aY(a7.a|b.a)}if(a3){b=$.bf()
a7=new Z.aY(a7.a|b.a)}if(a5){b=$.bb()
a7=new Z.aY(a7.a|b.a)}return new A.fM(u,m,l,k,j,i,h,g,f,t,s,r,q,p,o,t+s+r+q+p+o,d,d,a4,a6,!0,!1,!1,c,a4,a,a0,a1,a2,a3,a5,!1,!1,!1,n,e.charCodeAt(0)==0?e:e,a7)},
S:function(a,b){H.k(a,"$ib",[T.cn],"$ab")
if(b!=null)if(!C.a.au(a,b)){b.a=a.length
C.a.h(a,b)}},
ab:function(a,b){var u
for(u=this.dx.a,u=new J.ah(u,u.length,0,[H.w(u,0)]);u.v();)C.n.ab(u.d,b)},
e4:function(a2,a3){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1
u=this.a
if(u==null){u=this.cQ()
t=H.n(a2.fr.j(0,u.ae),"$idl")
if(t==null){t=A.ln(u,a2.a)
a2.de(t)}this.a=t
a3.e=null
u=t}s=u.z
r=s.bd
u=a3.e
if(!(u instanceof Z.bY)){a3.e=null
u=null}if(u==null||!u.d.q(0,r)){u=s.r1
if(u)a3.d.at()
q=s.r2
if(q){p=a3.d
o=p.e
if(o!=null)++o.d
p.d.c0()
p.a.c0()
p=p.e
if(p!=null)p.az(0)}p=s.ry
if(p){o=a3.d
n=o.e
if(n!=null)++n.d
o.a.iv()
o=o.e
if(o!=null)o.az(0)}m=a3.d.dj(new Z.dW(a2.a),r)
m.av($.aB()).e=this.a.Q.c
if(u)m.av($.bd()).e=this.a.cx.c
if(q)m.av($.bc()).e=this.a.ch.c
if(s.rx)m.av($.be()).e=this.a.cy.c
if(p)m.av($.bf()).e=this.a.db.c
if(s.x1)m.av($.bb()).e=this.a.dx.c
a3.e=m}u=T.cn
l=H.c([],[u])
this.a.Z(a2)
if(s.fx){q=this.a
p=a2.dx
p=p.gW(p)
q=q.dy
q.toString
q.ac(p.a7(0,!0))}if(s.fy){q=this.a
p=a2.cx
if(p==null){p=a2.db
p=p.gW(p)
o=a2.dx
o=p.n(0,o.gW(o))
a2.cx=o
p=o}q=q.fr
q.toString
q.ac(p.a7(0,!0))}q=this.a
p=a2.ch
if(p==null){p=a2.gjf()
o=a2.dx
o=p.n(0,o.gW(o))
a2.ch=o
p=o}q=q.fy
q.toString
q.ac(p.a7(0,!0))
if(s.x2){q=this.a
p=this.b
q=q.k1
q.toString
q.ac(C.n.a7(p,!0))}if(s.y1){q=this.a
p=this.c
q=q.k2
q.toString
q.ac(C.n.a7(p,!0))}if(s.y2){q=this.a
p=this.d
q=q.k3
q.toString
q.ac(C.n.a7(p,!0))}if(s.al>0){k=this.e.a.length
q=this.a.k4
C.b.H(q.a,q.d,k)
for(q=[P.y],j=0;j<k;++j){p=this.a
o=this.e.a
if(j>=o.length)return H.i(o,j)
o=o[j]
p.toString
H.n(o,"$iaj")
p=p.r1
if(j>=p.length)return H.i(p,j)
p=p[j]
i=new Float32Array(H.cJ(H.k(o.a7(0,!0),"$ib",q,"$ab")))
C.b.ec(p.a,p.d,!1,i)}}switch(s.a){case C.c:break
case C.h:q=this.a
p=this.f.f
q=q.r2
q.toString
o=p.a
n=p.b
p=p.c
C.b.p(q.a,q.d,o,n,p)
break
case C.d:this.S(l,this.f.d)
q=this.a
p=this.f.d
q.ad(q.rx,q.x1,p)
p=this.a
q=this.f.f
p=p.r2
p.toString
o=q.a
n=q.b
q=q.c
C.b.p(p.a,p.d,o,n,q)
break
case C.e:this.S(l,this.f.e)
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
C.b.p(p.a,p.d,o,n,q)
break}if(s.k2){switch(s.b){case C.c:break
case C.h:q=this.a
p=this.r.f
q=q.x2
q.toString
o=p.a
n=p.b
p=p.c
C.b.p(q.a,q.d,o,n,p)
break
case C.d:this.S(l,this.r.d)
q=this.a
p=this.r.d
q.ad(q.y1,q.al,p)
p=this.a
q=this.r.f
p=p.x2
p.toString
o=q.a
n=q.b
q=q.c
C.b.p(p.a,p.d,o,n,q)
break
case C.e:this.S(l,this.r.e)
q=this.a
p=this.r.e
q.a8(q.y2,q.al,p)
p=this.a
q=this.r.f
p=p.x2
p.toString
o=q.a
n=q.b
q=q.c
C.b.p(p.a,p.d,o,n,q)
break}switch(s.c){case C.c:break
case C.h:q=this.a
p=this.x.f
q=q.ae
q.toString
o=p.a
n=p.b
p=p.c
C.b.p(q.a,q.d,o,n,p)
break
case C.d:this.S(l,this.x.d)
q=this.a
p=this.x.d
q.ad(q.bd,q.be,p)
p=this.a
q=this.x.f
p=p.ae
p.toString
o=q.a
n=q.b
q=q.c
C.b.p(p.a,p.d,o,n,q)
break
case C.e:this.S(l,this.x.e)
q=this.a
p=this.x.e
q.a8(q.dA,q.be,p)
p=this.a
q=this.x.f
p=p.ae
p.toString
o=q.a
n=q.b
q=q.c
C.b.p(p.a,p.d,o,n,q)
break}switch(s.d){case C.c:break
case C.h:q=this.a
p=this.y.f
q=q.bf
q.toString
o=p.a
n=p.b
p=p.c
C.b.p(q.a,q.d,o,n,p)
break
case C.d:this.S(l,this.y.d)
q=this.a
p=this.y.d
q.ad(q.dB,q.bg,p)
p=this.a
q=this.y.f
p=p.bf
p.toString
o=q.a
n=q.b
q=q.c
C.b.p(p.a,p.d,o,n,q)
break
case C.e:this.S(l,this.y.e)
q=this.a
p=this.y.e
q.a8(q.dC,q.bg,p)
p=this.a
q=this.y.f
p=p.bf
p.toString
o=q.a
n=q.b
q=q.c
C.b.p(p.a,p.d,o,n,q)
break}switch(s.e){case C.c:break
case C.h:q=this.a
p=this.z.f
q=q.bh
q.toString
o=p.a
n=p.b
p=p.c
C.b.p(q.a,q.d,o,n,p)
p=this.a
n=this.z.ch
p=p.bj
C.b.F(p.a,p.d,n)
break
case C.d:this.S(l,this.z.d)
q=this.a
p=this.z.d
q.ad(q.dD,q.bi,p)
p=this.a
q=this.z.f
p=p.bh
p.toString
o=q.a
n=q.b
q=q.c
C.b.p(p.a,p.d,o,n,q)
q=this.a
n=this.z.ch
q=q.bj
C.b.F(q.a,q.d,n)
break
case C.e:this.S(l,this.z.e)
q=this.a
p=this.z.e
q.a8(q.dE,q.bi,p)
p=this.a
q=this.z.f
p=p.bh
p.toString
o=q.a
n=q.b
q=q.c
C.b.p(p.a,p.d,o,n,q)
q=this.a
n=this.z.ch
q=q.bj
C.b.F(q.a,q.d,n)
break}if(s.z>0){k=this.dx.e.length
q=this.a.dP
C.b.H(q.a,q.d,k)
q=a2.db
h=q.gW(q)
for(q=this.dx.e,p=q.length,g=0,f=0;f<q.length;q.length===p||(0,H.A)(q),++f){e=q[f]
o=this.a.c6
if(g>=o.length)return H.i(o,g)
d=o[g]
o=h.ea(e.gbc(e))
n=o.a
c=o.b
b=o.c
b=o.t(0,Math.sqrt(n*n+c*c+b*b))
c=d.b
n=b.a
o=b.b
b=b.c
C.b.p(c.a,c.d,n,o,b)
b=e.gak(e)
o=d.c
C.b.p(o.a,o.d,b.a,b.b,b.c);++g}}if(s.Q>0){k=this.dx.f.length
q=this.a.dQ
C.b.H(q.a,q.d,k)
q=a2.db
h=q.gW(q)
for(q=this.dx.f,p=q.length,g=0,f=0;f<q.length;q.length===p||(0,H.A)(q),++f){e=q[f]
o=this.a.c7
if(g>=o.length)return H.i(o,g)
d=o[g]
o=e.gaX(e)
n=d.b
C.b.p(n.a,n.d,o.a,o.b,o.c)
o=h.b1(e.gaX(e))
n=d.c
C.b.p(n.a,n.d,o.a,o.b,o.c)
o=e.gak(e)
n=d.d
C.b.p(n.a,n.d,o.a,o.b,o.c)
o=e.gbW()
n=d.e
C.b.F(n.a,n.d,o)
o=e.gbX()
n=d.f
C.b.F(n.a,n.d,o)
o=e.gbY()
n=d.r
C.b.F(n.a,n.d,o);++g}}if(s.ch>0){k=this.dx.r.length
q=this.a.dR
C.b.H(q.a,q.d,k)
q=a2.db
h=q.gW(q)
for(q=this.dx.r,p=q.length,g=0,f=0;f<q.length;q.length===p||(0,H.A)(q),++f){e=q[f]
o=this.a.c8
if(g>=o.length)return H.i(o,g)
d=o[g]
o=e.gaX(e)
n=d.b
C.b.p(n.a,n.d,o.a,o.b,o.c)
o=e.gbc(e).jz()
n=d.c
C.b.p(n.a,n.d,o.a,o.b,o.c)
o=h.b1(e.gaX(e))
n=d.d
C.b.p(n.a,n.d,o.a,o.b,o.c)
o=e.gak(e)
n=d.e
C.b.p(n.a,n.d,o.a,o.b,o.c)
o=e.gjy()
n=d.f
C.b.F(n.a,n.d,o)
o=e.gjx()
n=d.r
C.b.F(n.a,n.d,o)
o=e.gbW()
n=d.x
C.b.F(n.a,n.d,o)
o=e.gbX()
n=d.y
C.b.F(n.a,n.d,o)
o=e.gbY()
n=d.z
C.b.F(n.a,n.d,o);++g}}if(s.cx>0){k=this.dx.x.length
q=this.a.dS
C.b.H(q.a,q.d,k)
q=a2.db
h=q.gW(q)
for(q=this.dx.x,p=q.length,o=[u],g=0,f=0;f<q.length;q.length===p||(0,H.A)(q),++f){e=q[f]
n=this.a.c9
if(g>=n.length)return H.i(n,g)
d=n[g]
n=e.gb_()
H.k(l,"$ib",o,"$ab")
if(!C.a.au(l,n)){n.a=l.length
C.a.h(l,n)}n=e.gbc(e)
c=d.d
C.b.p(c.a,c.d,n.a,n.b,n.c)
n=e.gbw()
c=d.b
C.b.p(c.a,c.d,n.a,n.b,n.c)
n=e.gbu(e)
c=d.c
C.b.p(c.a,c.d,n.a,n.b,n.c)
n=h.ea(e.gbc(e))
c=n.a
b=n.b
a=n.c
a=n.t(0,Math.sqrt(c*c+b*b+a*a))
b=d.e
c=a.a
n=a.b
a=a.c
C.b.p(b.a,b.d,c,n,a)
a=e.gak(e)
n=d.f
C.b.p(n.a,n.d,a.a,a.b,a.c)
a=e.gb_()
n=a.gdY(a)
if(!n){n=d.x
C.b.H(n.a,n.d,1)}else{n=d.r
c=a.d
b=n.a
n=n.d
if(!c)C.b.H(b,n,0)
else C.b.H(b,n,a.a)
n=d.x
C.b.H(n.a,n.d,0)}++g}}if(s.cy>0){k=this.dx.y.length
q=this.a.dT
C.b.H(q.a,q.d,k)
q=a2.db
h=q.gW(q)
for(q=this.dx.y,p=q.length,o=[P.y],n=[u],g=0,f=0;f<q.length;q.length===p||(0,H.A)(q),++f){e=q[f]
c=this.a.ca
if(g>=c.length)return H.i(c,g)
d=c[g]
c=e.gb_()
H.k(l,"$ib",n,"$ab")
if(!C.a.au(l,c)){c.a=l.length
C.a.h(l,c)}a0=h.n(0,e.gW(e))
c=e.gW(e)
b=$.ch
if(b==null){b=new V.af(0,0,0)
$.ch=b}b=c.b1(b)
c=d.b
C.b.p(c.a,c.d,b.a,b.b,b.c)
c=$.ch
if(c==null){c=new V.af(0,0,0)
$.ch=c}c=a0.b1(c)
b=d.c
C.b.p(b.a,b.d,c.a,c.b,c.c)
c=a0.ce(0)
b=d.d
i=new Float32Array(H.cJ(H.k(new V.dm(c.a,c.b,c.c,c.e,c.f,c.r,c.y,c.z,c.Q).a7(0,!0),"$ib",o,"$ab")))
C.b.eb(b.a,b.d,!1,i)
b=e.gak(e)
c=d.e
C.b.p(c.a,c.d,b.a,b.b,b.c)
b=e.gb_()
c=b.gdY(b)
if(!c){c=d.r
C.b.H(c.a,c.d,1)}else{c=d.f
a=b.d
a1=c.a
c=c.d
if(a<6)C.b.H(a1,c,0)
else C.b.H(a1,c,b.a)
c=d.r
C.b.H(c.a,c.d,0)}c=e.gbW()
b=d.x
C.b.F(b.a,b.d,c)
c=e.gbX()
b=d.y
C.b.F(b.a,b.d,c)
c=e.gbY()
b=d.z
C.b.F(b.a,b.d,c);++g}}if(s.db>0){k=this.dx.z.length
q=this.a.dU
C.b.H(q.a,q.d,k)
q=a2.db
h=q.gW(q)
for(q=this.dx.z,p=q.length,u=[u],g=0,f=0;f<q.length;q.length===p||(0,H.A)(q),++f){e=q[f]
o=this.a.cb
if(g>=o.length)return H.i(o,g)
d=o[g]
o=e.gb_()
H.k(l,"$ib",u,"$ab")
if(!C.a.au(l,o)){o.a=l.length
C.a.h(l,o)}o=e.gaX(e)
n=d.b
C.b.p(n.a,n.d,o.a,o.b,o.c)
o=e.gbc(e)
n=d.c
C.b.p(n.a,n.d,o.a,o.b,o.c)
o=e.gbw()
n=d.d
C.b.p(n.a,n.d,o.a,o.b,o.c)
o=e.gbu(e)
n=d.e
C.b.p(n.a,n.d,o.a,o.b,o.c)
o=h.b1(e.gaX(e))
n=d.f
C.b.p(n.a,n.d,o.a,o.b,o.c)
o=e.gb_()
n=o.gdY(o)
if(!n){o=d.x
C.b.H(o.a,o.d,1)}else{n=d.r
c=o.d
b=n.a
n=n.d
if(!c)C.b.H(b,n,0)
else C.b.H(b,n,o.a)
o=d.x
C.b.H(o.a,o.d,0)}o=e.gak(e)
n=d.y
C.b.p(n.a,n.d,o.a,o.b,o.c)
o=e.gjA()
n=d.z
C.b.F(n.a,n.d,o)
o=e.gjB()
n=d.Q
C.b.F(n.a,n.d,o)
o=e.gbW()
n=d.ch
C.b.F(n.a,n.d,o)
o=e.gbX()
n=d.cx
C.b.F(n.a,n.d,o)
o=e.gbY()
n=d.cy
C.b.F(n.a,n.d,o);++g}}}switch(s.f){case C.c:break
case C.h:break
case C.d:this.S(l,this.Q.d)
u=this.a
q=this.Q.d
u.ad(u.dF,u.bk,q)
break
case C.e:this.S(l,this.Q.e)
u=this.a
q=this.Q.e
u.a8(u.dG,u.bk,q)
break}if(s.fr){u=this.a
q=a2.Q
if(q==null){q=a2.db
q=q.gW(q).ce(0)
a2.Q=q}u=u.id
u.toString
u.ac(q.a7(0,!0))}if(s.dy){this.S(l,this.ch)
u=this.a
q=this.ch
u.a8(u.dH,u.dI,q)
switch(s.r){case C.c:break
case C.h:u=this.a
q=this.cx.f
u=u.bl
u.toString
p=q.a
o=q.b
q=q.c
C.b.p(u.a,u.d,p,o,q)
break
case C.d:this.S(l,this.cx.d)
u=this.a
q=this.cx.d
u.ad(u.dJ,u.bm,q)
q=this.a
u=this.cx.f
q=q.bl
q.toString
p=u.a
o=u.b
u=u.c
C.b.p(q.a,q.d,p,o,u)
break
case C.e:this.S(l,this.cx.e)
u=this.a
q=this.cx.e
u.a8(u.dK,u.bm,q)
q=this.a
u=this.cx.f
q=q.bl
q.toString
p=u.a
o=u.b
u=u.c
C.b.p(q.a,q.d,p,o,u)
break}switch(s.x){case C.c:break
case C.h:u=this.a
q=this.cy.f
u=u.bo
u.toString
p=q.a
o=q.b
q=q.c
C.b.p(u.a,u.d,p,o,q)
q=this.a
o=this.cy.ch
q=q.bn
C.b.F(q.a,q.d,o)
break
case C.d:this.S(l,this.cy.d)
u=this.a
q=this.cy.d
u.ad(u.dL,u.bp,q)
q=this.a
u=this.cy.f
q=q.bo
q.toString
p=u.a
o=u.b
u=u.c
C.b.p(q.a,q.d,p,o,u)
u=this.a
o=this.cy.ch
u=u.bn
C.b.F(u.a,u.d,o)
break
case C.e:this.S(l,this.cy.e)
u=this.a
q=this.cy.e
u.a8(u.dM,u.bp,q)
q=this.a
u=this.cy.f
q=q.bo
q.toString
p=u.a
o=u.b
u=u.c
C.b.p(q.a,q.d,p,o,u)
u=this.a
o=this.cy.ch
u=u.bn
C.b.F(u.a,u.d,o)
break}}u=s.y
q=u!==C.c
if(q){switch(u){case C.c:break
case C.h:u=this.a
p=this.db.f
u=u.bq
C.b.F(u.a,u.d,p)
break
case C.d:this.S(l,this.db.d)
u=this.a
p=this.db.d
u.ad(u.dN,u.br,p)
p=this.a
u=this.db.f
p=p.bq
C.b.F(p.a,p.d,u)
break
case C.e:this.S(l,this.db.e)
u=this.a
p=this.db.e
u.a8(u.dO,u.br,p)
p=this.a
u=this.db.f
p=p.bq
C.b.F(p.a,p.d,u)
break}u=a2.a
C.b.c5(u,3042)
C.b.iu(u,770,771)}for(u=a2.a,j=0;j<l.length;++j){p=l[j]
if(!p.c&&p.d){p.c=!0
C.b.ba(u,33984+p.a)
C.b.a3(u,3553,p.b)}}p=a3.e
p.Z(a2)
p.a6(a2)
p.b2(a2)
if(q)C.b.iL(u,3042)
for(j=0;j<l.length;++j){q=l[j]
if(q.c){q.c=!1
C.b.ba(u,33984+q.a)
C.b.a3(u,3553,null)}}q=this.a
q.toString
C.b.cq(u,null)
q.x.dq()},
i:function(a){var u=this.a
if(u!=null)return u.b
else return this.cQ().ae},
seU:function(a){this.e=H.k(a,"$iV",[V.aj],"$aV")}}
O.fK.prototype={}
O.ca.prototype={
R:function(a){this.a.R(H.n(a,"$iv"))},
aO:function(){return this.R(null)},
ar:function(){},
hz:function(a){var u,t
u=this.d
if(u!=a){if(u!=null)u.gm().P(0,this.gaC())
t=this.d
this.d=a
if(a!=null)a.gm().h(0,this.gaC())
u=new D.J(this.b+".texture2D",t,this.d,this,[T.dD])
u.b=!0
this.a.R(u)}},
hA:function(a){}}
O.fL.prototype={}
O.aM.prototype={
d8:function(a){var u,t
if(!J.a5(this.f,a)){u=this.f
this.f=a
t=new D.J(this.b+".color",u,a,this,[V.a8])
t.b=!0
this.a.R(t)}},
ar:function(){this.ex()
this.d8(new V.a8(1,1,1))},
sak:function(a,b){var u
if(this.c===C.c){this.c=C.h
this.ar()
u=this.a
u.a=null
u.R(null)}this.d8(b)}}
O.fN.prototype={
hx:function(a){var u=this.ch
if(!(Math.abs(u-a)<$.K().a)){this.ch=a
u=new D.J(this.b+".refraction",u,a,this,[P.y])
u.b=!0
this.a.R(u)}},
ar:function(){this.cC()
this.hx(1)}}
O.fO.prototype={
hy:function(a){var u=this.ch
if(!(Math.abs(u-a)<$.K().a)){this.ch=a
u=new D.J(this.b+".shininess",u,a,this,[P.y])
u.b=!0
this.a.R(u)}},
ar:function(){this.cC()
this.hy(100)}}
O.dy.prototype={
gm:function(){var u=this.e
if(u==null){u=D.I()
this.e=u}return u},
R:function(a){var u
H.n(a,"$iv")
u=this.e
if(u!=null)u.B(a)},
aO:function(){return this.R(null)},
e4:function(a,b){var u,t,s,r,q,p
if(this.a==null){u=H.n(a.fr.j(0,"Skybox"),"$idz")
if(u==null){t=a.a
u=new A.dz(t,"Skybox")
u.cD(t,"Skybox")
u.dW(0,$.lF,$.lE)
u.z=u.x.j(0,"posAttr")
u.Q=H.f(u.y.j(0,"fov"),"$iT")
u.ch=H.f(u.y.j(0,"ratio"),"$iT")
u.cx=H.f(u.y.j(0,"boxClr"),"$iE")
u.cy=H.f(u.y.j(0,"boxTxt"),"$iac")
u.db=H.f(u.y.j(0,"viewMat"),"$ial")
a.de(u)}this.a=u}if(b.e==null){t=b.d.dj(new Z.dW(a.a),$.aB())
t.av($.aB()).e=this.a.z.c
b.e=t}t=this.c
if(t!=null){t.a=1
if(!t.c&&t.d>=6){t.c=!0
s=a.a
C.b.ba(s,33985)
C.b.a3(s,34067,t.b)}}t=a.d
s=a.c
r=this.a
r.Z(a)
q=this.b
p=r.Q
C.b.F(p.a,p.d,q)
q=r.ch
C.b.F(q.a,q.d,t/s)
s=this.c
r.cy.eq(s)
s=this.d
t=r.cx
C.b.p(t.a,t.d,s.a,s.b,s.c)
s=a.db
s=s.gW(s).ce(0)
r=r.db
r.toString
r.ac(s.a7(0,!0))
t=b.e
if(t instanceof Z.bY){t.Z(a)
t.a6(a)
t.b2(a)}else b.e=null
t=this.a
t.toString
s=a.a
C.b.cq(s,null)
t.x.dq()
t=this.c
if(t!=null)if(t.c){t.c=!1
C.b.ba(s,33984+t.a)
C.b.a3(s,34067,null)}}}
O.bq.prototype={}
T.cn.prototype={}
T.dD.prototype={}
T.hF.prototype={
gm:function(){var u=this.y
if(u==null){u=D.I()
this.y=u}return u}}
T.dE.prototype={
gm:function(){var u=this.e
if(u==null){u=D.I()
this.e=u}return u}}
T.hG.prototype={
iZ:function(a,b,c,d,e){var u,t,s,r
u=this.a
t=u.createTexture()
C.b.a3(u,3553,t)
C.b.am(u,3553,10242,33071)
C.b.am(u,3553,10243,33071)
C.b.am(u,3553,10241,9729)
C.b.am(u,3553,10240,9729)
C.b.a3(u,3553,null);++this.d
s=W.jU(null,a,null)
r=new T.hF()
r.a=0
r.b=t
r.c=!1
r.d=!1
r.e=0
r.f=0
r.r=0
r.x=0
u=W.j
W.a2(s,"load",H.m(new T.hI(this,r,s,!1,t,!1,!1),{func:1,ret:-1,args:[u]}),!1,u)
return r},
iY:function(a){return this.iZ(a,!1,!1,!1,!1)},
aE:function(a,b,c,d,e,f){var u,t
u=W.jU(null,c,null);++this.d
t=W.j
W.a2(u,"load",H.m(new T.hH(this,u,!1,b,!1,d,a),{func:1,ret:-1,args:[t]}),!1,t)},
d7:function(a,b,c){var u,t,s,r
b=V.jE(b,2)
u=V.jE(a.width,2)
t=V.jE(a.height,2)
u=Math.min(u,b)
t=Math.min(t,b)
if(a.width===u&&a.height===t)return a
else{s=W.je(null,null)
s.width=u
s.height=t
r=H.n(C.m.ei(s,"2d"),"$ibA")
r.imageSmoothingEnabled=!1;(r&&C.r).iN(r,a,0,0,s.width,s.height)
return P.m5(C.r.fe(r,0,0,s.width,s.height))}}}
T.hI.prototype={
$1:function(a){var u,t,s,r
u=this.b
t=this.c
u.e=t.width
u.f=t.height
s=this.a
r=s.d7(t,s.b,this.d)
u.r=t.width
u.x=t.height
t=s.a
C.b.a3(t,3553,this.e)
C.b.e3(t,37440,this.f?1:0)
C.b.e7(t,3553,0,6408,6408,5121,r)
if(this.r)C.b.ee(t,3553)
C.b.a3(t,3553,null)
if(!u.d){u.d=!0
u=u.y
if(u!=null)u.dw()}++s.e},
$S:12}
T.hH.prototype={
$1:function(a){var u,t,s
u=this.a
t=u.d7(this.b,u.c,this.c)
s=u.a
C.b.a3(s,34067,this.d)
C.b.e3(s,37440,this.e?1:0)
C.b.e7(s,this.f,0,6408,6408,5121,t)
C.b.a3(s,34067,null)
s=this.r
if(++s.d>=6){s=s.e
if(s!=null)s.dw()}++u.e},
$S:12}
V.eQ.prototype={
aI:function(a,b){return!0},
i:function(a){return"all"},
$ib2:1}
V.b2.prototype={}
V.dj.prototype={
aI:function(a,b){var u,t,s
for(u=this.a,t=u.length,s=0;s<u.length;u.length===t||(0,H.A)(u),++s)if(u[s].aI(0,b))return!0
return!1},
i:function(a){var u,t,s,r,q
for(u=this.a,t=u.length,s="",r=0;r<u.length;u.length===t||(0,H.A)(u),++r){q=u[r]
if(s.length!==0)s+=", "
s+=q.i(0)}return s},
saq:function(a){this.a=H.k(a,"$ib",[V.b2],"$ab")},
$ib2:1}
V.b4.prototype={
aI:function(a,b){return!this.ew(0,b)},
i:function(a){return"!["+this.cB(0)+"]"}}
V.hj.prototype={
eB:function(a){var u,t
if(a.a.length<=0)throw H.h(P.r("May not create a SetMatcher with zero characters."))
u=new H.aK([P.z,P.a3])
for(t=new H.dh(a,a.gk(a),0,[H.av(a,"u",0)]);t.v();)u.a_(0,t.d,!0)
this.shv(u)},
aI:function(a,b){return this.a.dm(0,b)},
i:function(a){var u=this.a
return P.jo(new H.dg(u,[H.w(u,0)]),0,null)},
shv:function(a){this.a=H.k(a,"$iL",[P.z,P.a3],"$aL")},
$ib2:1}
V.ck.prototype={
w:function(a,b){var u,t,s,r
for(u=this.c,t=u.length,s=0;s<t;++s){r=u[s]
if(r.b.b===b)return r}r=new V.cp(this.a.K(0,b))
r.saq(H.c([],[V.b2]))
r.c=!1
C.a.h(this.c,r)
return r},
iP:function(a){var u,t,s,r
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.A)(u),++s){r=u[s]
if(r.aI(0,a))return r}return},
i:function(a){return this.b},
shT:function(a){this.c=H.k(a,"$ib",[V.cp],"$ab")}}
V.dJ.prototype={
i:function(a){var u,t
u=H.kG(this.b,"\n","\\n")
t=H.kG(u,"\t","\\t")
return this.a+":"+this.c+':"'+t+'"'}}
V.co.prototype={
i:function(a){return this.b},
shq:function(a){var u=P.o
this.c=H.k(a,"$iL",[u,u],"$aL")}}
V.hL.prototype={
K:function(a,b){var u=this.a.j(0,b)
if(u==null){u=new V.ck(this,b)
u.shT(H.c([],[V.cp]))
u.d=null
this.a.a_(0,b,u)}return u},
b0:function(a){var u,t
u=this.b.j(0,a)
if(u==null){u=new V.co(this,a)
t=P.o
u.shq(new H.aK([t,t]))
this.b.a_(0,a,u)}return u},
jt:function(a){var u,t,s,r,q,p,o,n,m,l,k,j
u=H.c([],[V.dJ])
t=this.c
s=[P.z]
r=H.c([],s)
for(q=a.length,p=null,o=0;!0;){if(o>=q){if(p!=null)C.a.h(u,p)
return u}n=C.j.b4(a,o)
m=t.iP(n)
if(m==null){if(p==null){C.a.h(r,n)
l=P.jo(r,0,null)
throw H.h(P.r("Untokenizable string [state: "+t.b+", index "+o+']: "'+l+'"'))}C.a.h(u,p)
o=p.c+1
r=H.c([],s)
t=this.c
p=null}else{if(!m.c)C.a.h(r,n)
t=m.b
if(t.d!=null){l=P.jo(r,0,null)
k=t.d
j=k.c.j(0,l)
p=new V.dJ(j==null?k.b:j,l,o)}++o}}},
shH:function(a){this.a=H.k(a,"$iL",[P.o,V.ck],"$aL")},
shM:function(a){this.b=H.k(a,"$iL",[P.o,V.co],"$aL")}}
V.cp.prototype={
i:function(a){return this.b.b+": "+this.cB(0)}}
X.by.prototype={$iaP:1}
X.fr.prototype={
gm:function(){var u=this.x
if(u==null){u=D.I()
this.x=u}return u},
ag:function(a){var u=this.x
if(u!=null)u.B(a)},
Z:function(a){var u,t,s,r,q,p,o,n
u=a.a
C.b.it(u,36160,null)
C.b.c5(u,2884)
C.b.c5(u,2929)
C.b.iK(u,513)
t=u.drawingBufferWidth
s=u.drawingBufferHeight
r=this.r
q=r.a
if(typeof t!=="number")return H.D(t)
p=C.f.af(q*t)
q=r.b
if(typeof s!=="number")return H.D(s)
o=C.f.af(q*s)
q=C.f.af(r.c*t)
a.c=q
r=C.f.af(r.d*s)
a.d=r
C.b.jv(u,p,o,q,r)
C.b.iy(u,this.c)
if(this.b){r=this.a
C.b.ix(u,r.a,r.b,r.c,r.d)
n=16640}else n=256
C.b.iw(u,n)}}
X.ft.prototype={
gm:function(){var u=this.b
if(u==null){u=D.I()
this.b=u}return u},
Z:function(a){var u
a.cy.bt(V.bF())
u=V.bF()
a.db.bt(u)},
b2:function(a){a.cy.ay()
a.db.ay()},
$iaP:1,
$iby:1}
X.ds.prototype={
gm:function(){var u=this.f
if(u==null){u=D.I()
this.f=u}return u},
ag:function(a){var u
H.n(a,"$iv")
u=this.f
if(u!=null)u.B(a)},
eO:function(){return this.ag(null)},
Z:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e
u=a.c
t=a.d
s=this.c
r=this.d
q=this.e
p=q-r
o=1/Math.tan(s*0.5)
n=V.aN(-o/(u/t),0,0,0,0,o,0,0,0,0,q/p,-q*r/p,0,0,1,0)
a.cy.bt(n)
u=$.k1
if(u==null){u=V.lo()
t=$.kh
if(t==null){t=new V.P(0,1,0)
$.kh=t}s=$.kg
if(s==null){s=new V.P(0,0,-1)
$.kg=s}m=s.t(0,Math.sqrt(s.A(s)))
t=t.aU(m)
l=t.t(0,Math.sqrt(t.A(t)))
k=m.aU(l)
j=new V.P(u.a,u.b,u.c)
i=l.M(0).A(j)
h=k.M(0).A(j)
g=m.M(0).A(j)
u=V.aN(l.a,k.a,m.a,i,l.b,k.b,m.b,h,l.c,k.c,m.c,g,0,0,0,1)
$.k1=u
f=u}else f=u
u=this.b
if(u!=null){e=u.aK(0,a,this)
if(e!=null)f=e.n(0,f)}a.db.bt(f)},
b2:function(a){a.cy.ay()
a.db.ay()},
$iaP:1,
$iby:1}
X.cm.prototype={}
V.j9.prototype={
$1:function(a){H.n(a,"$iaV")
P.bQ(C.f.e9(this.a.giR(),2)+" fps")},
$S:36}
V.hn.prototype={
eC:function(a,b){var u,t,s,r,q,p,o
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
W.a2(u,"scroll",H.m(new V.hp(s),{func:1,ret:-1,args:[o]}),!1,o)},
dd:function(a){var u,t,s,r,q,p,o,n,m,l,k
H.k(a,"$ib",[P.o],"$ab")
this.hC()
u=document
t=u.createElement("div")
t.className="textPar"
for(s=this.b.jt(C.a.iV(a)),r=s.length,q=0;q<s.length;s.length===r||(0,H.A)(s),++q){p=s[q]
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
if(H.kF(n,"|",0)){m=n.split("|")
l=u.createElement("a")
l.className="linkPar"
if(1>=m.length)return H.i(m,1)
l.href=H.R(m[1])
l.textContent=H.R(m[0])
C.l.Y(t,l)}else{k=P.lR(C.N,n,C.y,!1)
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
hC:function(){var u,t,s,r
if(this.b!=null)return
u=new V.hL()
t=P.o
u.shH(new H.aK([t,V.ck]))
u.shM(new H.aK([t,V.co]))
u.c=null
u.c=u.K(0,"Start")
t=u.K(0,"Start").w(0,"Bold")
s=V.ab(new H.Z("*"))
C.a.h(t.a,s)
t.c=!0
t=u.K(0,"Bold").w(0,"Bold")
s=new V.b4()
r=[V.b2]
s.saq(H.c([],r))
C.a.h(t.a,s)
t=V.ab(new H.Z("*"))
C.a.h(s.a,t)
t=u.K(0,"Bold").w(0,"BoldEnd")
s=V.ab(new H.Z("*"))
C.a.h(t.a,s)
t.c=!0
t=u.K(0,"Start").w(0,"Italic")
s=V.ab(new H.Z("_"))
C.a.h(t.a,s)
t.c=!0
t=u.K(0,"Italic").w(0,"Italic")
s=new V.b4()
s.saq(H.c([],r))
C.a.h(t.a,s)
t=V.ab(new H.Z("_"))
C.a.h(s.a,t)
t=u.K(0,"Italic").w(0,"ItalicEnd")
s=V.ab(new H.Z("_"))
C.a.h(t.a,s)
t.c=!0
t=u.K(0,"Start").w(0,"Code")
s=V.ab(new H.Z("`"))
C.a.h(t.a,s)
t.c=!0
t=u.K(0,"Code").w(0,"Code")
s=new V.b4()
s.saq(H.c([],r))
C.a.h(t.a,s)
t=V.ab(new H.Z("`"))
C.a.h(s.a,t)
t=u.K(0,"Code").w(0,"CodeEnd")
s=V.ab(new H.Z("`"))
C.a.h(t.a,s)
t.c=!0
t=u.K(0,"Start").w(0,"LinkHead")
s=V.ab(new H.Z("["))
C.a.h(t.a,s)
t.c=!0
t=u.K(0,"LinkHead").w(0,"LinkTail")
s=V.ab(new H.Z("|"))
C.a.h(t.a,s)
s=u.K(0,"LinkHead").w(0,"LinkEnd")
t=V.ab(new H.Z("]"))
C.a.h(s.a,t)
s.c=!0
s=u.K(0,"LinkHead").w(0,"LinkHead")
t=new V.b4()
t.saq(H.c([],r))
C.a.h(s.a,t)
s=V.ab(new H.Z("|]"))
C.a.h(t.a,s)
s=u.K(0,"LinkTail").w(0,"LinkEnd")
t=V.ab(new H.Z("]"))
C.a.h(s.a,t)
s.c=!0
s=u.K(0,"LinkTail").w(0,"LinkTail")
t=new V.b4()
t.saq(H.c([],r))
C.a.h(s.a,t)
s=V.ab(new H.Z("|]"))
C.a.h(t.a,s)
C.a.h(u.K(0,"Start").w(0,"Other").a,new V.eQ())
s=u.K(0,"Other").w(0,"Other")
t=new V.b4()
t.saq(H.c([],r))
C.a.h(s.a,t)
s=V.ab(new H.Z("*_`["))
C.a.h(t.a,s)
s=u.K(0,"BoldEnd")
s.d=s.a.b0("Bold")
s=u.K(0,"ItalicEnd")
s.d=s.a.b0("Italic")
s=u.K(0,"CodeEnd")
s.d=s.a.b0("Code")
s=u.K(0,"LinkEnd")
s.d=s.a.b0("Link")
s=u.K(0,"Other")
s.d=s.a.b0("Other")
this.b=u}}
V.hp.prototype={
$1:function(a){P.kb(C.o,new V.ho(this.a))},
$S:12}
V.ho.prototype={
$0:function(){var u,t,s
u=C.f.af(document.documentElement.scrollTop)
t=this.a.style
s=H.l(-0.01*u)+"px"
t.top=s},
$S:2};(function aliases(){var u=J.a.prototype
u.eu=u.i
u=J.dd.prototype
u.ev=u.i
u=O.ca.prototype
u.ex=u.ar
u=O.aM.prototype
u.cC=u.ar
u=V.dj.prototype
u.ew=u.aI
u.cB=u.i})();(function installTearOffs(){var u=hunkHelpers._static_1,t=hunkHelpers._static_0,s=hunkHelpers.installInstanceTearOff,r=hunkHelpers._instance_2u,q=hunkHelpers._instance_0u,p=hunkHelpers._instance_1u,o=hunkHelpers._instance_0i
u(P,"m_","lK",10)
u(P,"m0","lL",10)
u(P,"m1","lM",10)
t(P,"kv","lZ",3)
var n
s(n=E.ae.prototype,"ge1",0,0,null,["$1","$0"],["e2","j6"],0,0)
s(n,"ge_",0,0,null,["$1","$0"],["e0","j3"],0,0)
r(n,"gj1","j2",7)
r(n,"gj4","j5",7)
s(n=E.dI.prototype,"gcF",0,0,null,["$1","$0"],["cH","cG"],0,0)
q(n,"gji","e5",3)
p(n=X.dQ.prototype,"gfP","fQ",9)
p(n,"gfD","fE",9)
p(n,"gfJ","fK",4)
p(n,"gfT","fU",19)
p(n,"gfR","fS",19)
p(n,"gfX","fY",4)
p(n,"gh0","h1",4)
p(n,"gfN","fO",4)
p(n,"gfZ","h_",4)
p(n,"gfL","fM",4)
p(n,"gh2","h3",33)
p(n,"gh4","h5",9)
p(n,"ghk","hl",11)
p(n,"ghg","hh",11)
p(n,"ghi","hj",11)
s(n=D.df.prototype,"gd_",0,0,null,["$1","$0"],["d0","fV"],0,0)
p(n,"gh6","h7",31)
r(n,"gfv","fw",20)
r(n,"gha","hb",20)
o(V.O.prototype,"gk","cg",21)
o(V.P.prototype,"gk","cg",21)
s(n=U.c7.prototype,"gaF",0,0,null,["$1","$0"],["L","a2"],0,0)
r(n,"gft","fu",22)
r(n,"gh8","h9",22)
s(n=U.dR.prototype,"gaF",0,0,null,["$1","$0"],["L","a2"],0,0)
p(n,"gbI","bJ",1)
p(n,"gbK","bL",1)
p(n,"gbM","bN",1)
s(n=U.dS.prototype,"gaF",0,0,null,["$1","$0"],["L","a2"],0,0)
p(n,"gbI","bJ",1)
p(n,"gbK","bL",1)
p(n,"gbM","bN",1)
p(n,"gfm","fn",1)
p(n,"gfo","fp",1)
p(n,"ghR","hS",1)
p(n,"ghP","hQ",1)
p(n,"ghN","hO",1)
p(U.dT.prototype,"gfq","fs",1)
s(n=M.cY.prototype,"gU",0,0,null,["$1","$0"],["V","aN"],0,0)
r(n,"ghc","hd",17)
r(n,"ghe","hf",17)
s(M.d0.prototype,"gU",0,0,null,["$1","$0"],["V","aN"],0,0)
s(n=M.d5.prototype,"gU",0,0,null,["$1","$0"],["V","aN"],0,0)
r(n,"gfF","fG",7)
r(n,"gfH","fI",7)
s(n=O.dk.prototype,"gaC",0,0,null,["$1","$0"],["R","aO"],0,0)
s(n,"ght",0,0,null,["$1","$0"],["d5","hu"],0,0)
r(n,"gfz","fA",23)
r(n,"gfB","fC",23)
s(O.ca.prototype,"gaC",0,0,null,["$1","$0"],["R","aO"],0,0)
s(O.dy.prototype,"gaC",0,0,null,["$1","$0"],["R","aO"],0,0)
s(X.ds.prototype,"geN",0,0,null,["$1","$0"],["ag","eO"],0,0)})();(function inheritance(){var u=hunkHelpers.mixin,t=hunkHelpers.inherit,s=hunkHelpers.inheritMany
t(P.M,null)
s(P.M,[H.jl,J.a,J.ah,P.eb,P.e,H.dh,P.aI,H.bD,H.dP,H.ha,H.hQ,P.bi,H.bZ,H.es,P.a9,H.fB,H.fC,H.fx,P.ey,P.b_,P.at,P.dX,P.hx,P.cl,P.hy,P.aV,P.ad,P.iU,P.iO,P.cz,P.iI,P.u,P.c_,P.iT,P.a3,P.ai,P.X,P.bh,P.h4,P.dB,P.e4,P.fq,P.b,P.L,P.G,P.ak,P.o,P.bp,W.f4,W.x,W.d6,P.eD,P.iJ,O.V,O.cb,E.eY,E.ae,E.hb,E.dI,Z.dV,Z.dW,Z.bY,Z.bk,Z.aY,D.f0,D.c4,D.v,X.cX,X.de,X.fz,X.fF,X.am,X.fV,X.hM,X.dQ,D.d2,D.Y,D.dt,D.dA,D.dF,D.dG,D.dH,V.a8,V.aw,V.fg,V.dm,V.aj,V.a1,V.af,V.b7,V.dv,V.O,V.P,U.dR,U.dS,U.dT,M.d0,M.d5,M.an,A.cS,A.eT,A.fM,A.cq,A.cu,A.cs,A.cv,A.ct,A.cw,A.bB,A.dL,A.hZ,F.a0,F.b1,F.bo,F.dx,F.hk,F.hl,F.hm,F.ap,F.i7,F.i8,F.ib,F.ic,O.bq,O.ca,T.hG,V.eQ,V.b2,V.dj,V.hj,V.ck,V.dJ,V.co,V.hL,X.by,X.cm,X.ft,X.ds,V.hn])
s(J.a,[J.fw,J.db,J.dd,J.aJ,J.dc,J.c9,H.cf,W.d,W.eP,W.cT,W.bA,W.aE,W.aF,W.N,W.dZ,W.f8,W.f9,W.e0,W.d4,W.e2,W.fb,W.j,W.e5,W.aH,W.fs,W.e7,W.bj,W.fE,W.fP,W.ec,W.ed,W.aO,W.ee,W.eh,W.aQ,W.el,W.en,W.aS,W.eo,W.aT,W.et,W.ax,W.ew,W.hK,W.aW,W.ez,W.hO,W.i3,W.eE,W.eG,W.eI,W.eK,W.eM,P.b0,P.e9,P.b5,P.ej,P.h8,P.eu,P.b8,P.eB,P.eU,P.dY,P.cV,P.d7,P.du,P.bJ,P.dw,P.dC,P.dM,P.eq])
s(J.dd,[J.h5,J.dN,J.bn])
t(J.jk,J.aJ)
s(J.dc,[J.da,J.d9])
t(P.fD,P.eb)
s(P.fD,[H.dO,W.iq,W.ip,P.fm])
t(H.Z,H.dO)
s(P.e,[H.fe,H.fI,H.ii])
s(P.aI,[H.fJ,H.ij])
s(P.bi,[H.h1,H.fy,H.i1,H.hS,H.f_,H.hh,P.dr,P.aC,P.i2,P.i0,P.ht,P.f2,P.f7])
s(H.bZ,[H.ja,H.hC,H.j3,H.j4,H.j5,P.il,P.ik,P.im,P.io,P.iS,P.iR,P.iv,P.iz,P.iw,P.ix,P.iy,P.iC,P.iD,P.iB,P.iA,P.hz,P.hA,P.iY,P.iM,P.iL,P.iN,P.fH,P.fc,P.fd,W.fR,W.fT,W.hg,W.hw,W.iu,P.j_,P.fn,P.fo,P.eW,E.hc,E.hd,E.he,E.hJ,D.fi,D.fj,F.iV,F.ie,F.id,F.i9,F.ia,T.hI,T.hH,V.j9,V.hp,V.ho])
s(H.hC,[H.hu,H.bW])
t(P.fG,P.a9)
t(H.aK,P.fG)
t(H.dg,H.fe)
t(H.dn,H.cf)
s(H.dn,[H.cA,H.cC])
t(H.cB,H.cA)
t(H.ce,H.cB)
t(H.cD,H.cC)
t(H.dp,H.cD)
s(H.dp,[H.fW,H.fX,H.fY,H.fZ,H.h_,H.dq,H.h0])
t(P.iK,P.iU)
t(P.iH,P.iO)
t(P.d_,P.hy)
t(P.ff,P.c_)
t(P.i4,P.ff)
t(P.i5,P.d_)
s(P.X,[P.y,P.z])
s(P.aC,[P.bI,P.fu])
s(W.d,[W.F,W.fl,W.aR,W.cE,W.aU,W.ay,W.cG,W.ih,W.cx,P.eX,P.bx])
s(W.F,[W.a_,W.bg,W.c3])
s(W.a_,[W.q,P.p])
s(W.q,[W.eR,W.eS,W.cU,W.bz,W.c2,W.fp,W.c8,W.cc,W.hi])
s(W.aE,[W.c1,W.f5,W.f6])
t(W.f3,W.aF)
t(W.bC,W.dZ)
t(W.e1,W.e0)
t(W.d3,W.e1)
t(W.e3,W.e2)
t(W.fa,W.e3)
t(W.aG,W.cT)
t(W.e6,W.e5)
t(W.fk,W.e6)
t(W.e8,W.e7)
t(W.bE,W.e8)
t(W.d8,W.c3)
t(W.br,W.j)
s(W.br,[W.aL,W.a6,W.az])
t(W.fQ,W.ec)
t(W.fS,W.ed)
t(W.ef,W.ee)
t(W.fU,W.ef)
t(W.ei,W.eh)
t(W.cg,W.ei)
t(W.em,W.el)
t(W.h6,W.em)
t(W.hf,W.en)
t(W.cF,W.cE)
t(W.hq,W.cF)
t(W.ep,W.eo)
t(W.hr,W.ep)
t(W.hv,W.et)
t(W.ex,W.ew)
t(W.hD,W.ex)
t(W.cH,W.cG)
t(W.hE,W.cH)
t(W.eA,W.ez)
t(W.hN,W.eA)
t(W.ig,W.cc)
t(W.aZ,W.a6)
t(W.eF,W.eE)
t(W.ir,W.eF)
t(W.e_,W.d4)
t(W.eH,W.eG)
t(W.iE,W.eH)
t(W.eJ,W.eI)
t(W.eg,W.eJ)
t(W.eL,W.eK)
t(W.iP,W.eL)
t(W.eN,W.eM)
t(W.iQ,W.eN)
t(W.is,P.hx)
t(W.js,W.is)
t(W.it,P.cl)
t(P.a7,P.iJ)
t(P.ea,P.e9)
t(P.fA,P.ea)
t(P.ek,P.ej)
t(P.h2,P.ek)
t(P.ev,P.eu)
t(P.hB,P.ev)
t(P.eC,P.eB)
t(P.hP,P.eC)
t(P.eV,P.dY)
t(P.h3,P.bx)
t(P.er,P.eq)
t(P.hs,P.er)
s(E.eY,[Z.cW,A.cj,T.cn])
s(D.v,[D.bl,D.bm,D.J,X.h7])
s(X.h7,[X.di,X.b3,X.cd,X.dK])
s(O.V,[D.df,U.c7,M.cY])
s(D.f0,[U.f1,U.aa])
t(U.cZ,U.aa)
s(A.cj,[A.dl,A.dz])
s(A.dL,[A.H,A.hV,A.hW,A.hY,A.hT,A.T,A.hU,A.E,A.hX,A.i_,A.cr,A.al,A.ag,A.ac])
s(O.bq,[O.dk,O.dy])
s(O.ca,[O.fK,O.fL,O.aM])
s(O.aM,[O.fN,O.fO])
s(T.cn,[T.dD,T.dE])
t(T.hF,T.dD)
s(V.dj,[V.b4,V.cp])
t(X.fr,X.cm)
u(H.dO,H.dP)
u(H.cA,P.u)
u(H.cB,H.bD)
u(H.cC,P.u)
u(H.cD,H.bD)
u(P.eb,P.u)
u(W.dZ,W.f4)
u(W.e0,P.u)
u(W.e1,W.x)
u(W.e2,P.u)
u(W.e3,W.x)
u(W.e5,P.u)
u(W.e6,W.x)
u(W.e7,P.u)
u(W.e8,W.x)
u(W.ec,P.a9)
u(W.ed,P.a9)
u(W.ee,P.u)
u(W.ef,W.x)
u(W.eh,P.u)
u(W.ei,W.x)
u(W.el,P.u)
u(W.em,W.x)
u(W.en,P.a9)
u(W.cE,P.u)
u(W.cF,W.x)
u(W.eo,P.u)
u(W.ep,W.x)
u(W.et,P.a9)
u(W.ew,P.u)
u(W.ex,W.x)
u(W.cG,P.u)
u(W.cH,W.x)
u(W.ez,P.u)
u(W.eA,W.x)
u(W.eE,P.u)
u(W.eF,W.x)
u(W.eG,P.u)
u(W.eH,W.x)
u(W.eI,P.u)
u(W.eJ,W.x)
u(W.eK,P.u)
u(W.eL,W.x)
u(W.eM,P.u)
u(W.eN,W.x)
u(P.e9,P.u)
u(P.ea,W.x)
u(P.ej,P.u)
u(P.ek,W.x)
u(P.eu,P.u)
u(P.ev,W.x)
u(P.eB,P.u)
u(P.eC,W.x)
u(P.dY,P.a9)
u(P.eq,P.u)
u(P.er,W.x)})();(function constants(){var u=hunkHelpers.makeConstList
C.q=W.cU.prototype
C.m=W.bz.prototype
C.r=W.bA.prototype
C.t=W.bC.prototype
C.l=W.c2.prototype
C.u=W.d8.prototype
C.E=J.a.prototype
C.a=J.aJ.prototype
C.F=J.d9.prototype
C.i=J.da.prototype
C.n=J.db.prototype
C.f=J.dc.prototype
C.j=J.c9.prototype
C.M=J.bn.prototype
C.O=W.cg.prototype
C.x=J.h5.prototype
C.b=P.bJ.prototype
C.p=J.dN.prototype
C.z=W.aZ.prototype
C.A=W.cx.prototype
C.B=new P.h4()
C.C=new P.i5()
C.k=new P.iK()
C.c=new A.bB(0,"ColorSourceType.None")
C.h=new A.bB(1,"ColorSourceType.Solid")
C.d=new A.bB(2,"ColorSourceType.Texture2D")
C.e=new A.bB(3,"ColorSourceType.TextureCube")
C.o=new P.bh(0)
C.D=new P.bh(5e6)
C.G=function(hooks) {
  if (typeof dartExperimentalFixupGetTag != "function") return hooks;
  hooks.getTag = dartExperimentalFixupGetTag(hooks.getTag);
}
C.H=function(hooks) {
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
C.v=function(hooks) { return hooks; }

C.I=function(getTagFallback) {
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
C.J=function() {
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
C.K=function(hooks) {
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
C.L=function(hooks) {
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
C.w=function getTagFallback(o) {
  var s = Object.prototype.toString.call(o);
  return s.substring(8, s.length - 1);
}
C.N=H.c(u([0,0,65498,45055,65535,34815,65534,18431]),[P.z])
C.y=new P.i4(!1)})();(function staticFields(){$.aD=0
$.bX=null
$.jJ=null
$.jt=!1
$.kz=null
$.kt=null
$.kE=null
$.j0=null
$.j6=null
$.jB=null
$.bK=null
$.cK=null
$.cL=null
$.ju=!1
$.U=C.k
$.jQ=null
$.jP=null
$.jO=null
$.jN=null
$.jY=null
$.k2=null
$.ch=null
$.k7=null
$.kf=null
$.ki=null
$.kh=null
$.kg=null
$.lF="uniform mat4 viewMat;                             \nuniform float fov;                                \nuniform float ratio;                              \n                                                  \nattribute vec3 posAttr;                           \n                                                  \nvarying vec3 cubeTxt;                             \n                                                  \nvoid main()                                       \n{                                                 \n  float t = 1.0 / (tan(fov * 0.5)*3.0);           \n  float x = -t * posAttr.x / ratio;               \n  float y = t * posAttr.y;                        \n  cubeTxt = (viewMat * vec4(x, y, 1.0, 0.0)).xyz; \n  gl_Position = vec4(posAttr, 1.0);               \n}                                                 \n"
$.lE="precision mediump float;                                              \n                                                                      \nuniform samplerCube boxTxt;                                           \nuniform vec3 boxClr;                                                  \n                                                                      \nvarying vec3 cubeTxt;                                                 \n                                                                      \nvoid main()                                                           \n{                                                                     \n   vec3 txtCube = normalize(cubeTxt);                                 \n   gl_FragColor = vec4(boxClr*textureCube(boxTxt, txtCube).xyz, 1.0); \n}                                                                     \n"
$.k1=null})();(function lazyInitializers(){var u=hunkHelpers.lazy
u($,"mw","kK",function(){return H.ky("_$dart_dartClosure")})
u($,"mx","jF",function(){return H.ky("_$dart_js")})
u($,"mA","kL",function(){return H.aX(H.hR({
toString:function(){return"$receiver$"}}))})
u($,"mB","kM",function(){return H.aX(H.hR({$method$:null,
toString:function(){return"$receiver$"}}))})
u($,"mC","kN",function(){return H.aX(H.hR(null))})
u($,"mD","kO",function(){return H.aX(function(){var $argumentsExpr$='$arguments$'
try{null.$method$($argumentsExpr$)}catch(t){return t.message}}())})
u($,"mG","kR",function(){return H.aX(H.hR(void 0))})
u($,"mH","kS",function(){return H.aX(function(){var $argumentsExpr$='$arguments$'
try{(void 0).$method$($argumentsExpr$)}catch(t){return t.message}}())})
u($,"mF","kQ",function(){return H.aX(H.kd(null))})
u($,"mE","kP",function(){return H.aX(function(){try{null.$method$}catch(t){return t.message}}())})
u($,"mJ","kU",function(){return H.aX(H.kd(void 0))})
u($,"mI","kT",function(){return H.aX(function(){try{(void 0).$method$}catch(t){return t.message}}())})
u($,"mZ","jG",function(){return P.lJ()})
u($,"n0","cR",function(){return[]})
u($,"n_","kY",function(){return P.lA("^[\\-\\.0-9A-Z_a-z~]*$",!0,!1)})
u($,"mv","kJ",function(){return{}})
u($,"mS","kX",function(){return Z.as(0)})
u($,"mM","kV",function(){return Z.as(511)})
u($,"mU","aB",function(){return Z.as(1)})
u($,"mT","bd",function(){return Z.as(2)})
u($,"mO","bc",function(){return Z.as(4)})
u($,"mV","be",function(){return Z.as(8)})
u($,"mW","bf",function(){return Z.as(16)})
u($,"mP","cP",function(){return Z.as(32)})
u($,"mQ","cQ",function(){return Z.as(64)})
u($,"mR","kW",function(){return Z.as(96)})
u($,"mX","bT",function(){return Z.as(128)})
u($,"mN","bb",function(){return Z.as(256)})
u($,"mu","kI",function(){return new V.fg(1e-9)})
u($,"mt","K",function(){return $.kI()})})()
var v={mangledGlobalNames:{z:"int",y:"double",X:"num",o:"String",a3:"bool",G:"Null",b:"List"},mangledNames:{},getTypeFromName:getGlobalFromName,metadata:[],types:[{func:1,ret:-1,opt:[D.v]},{func:1,ret:-1,args:[D.v]},{func:1,ret:P.G},{func:1,ret:-1},{func:1,ret:-1,args:[W.a6]},{func:1,ret:P.G,args:[F.a0]},{func:1,ret:-1,args:[P.o,,]},{func:1,ret:-1,args:[P.z,[P.e,E.ae]]},{func:1,ret:P.G,args:[D.v]},{func:1,ret:-1,args:[W.j]},{func:1,ret:-1,args:[{func:1,ret:-1}]},{func:1,ret:-1,args:[W.az]},{func:1,ret:P.G,args:[W.j]},{func:1,ret:P.G,args:[,,]},{func:1,ret:P.o,args:[P.z]},{func:1,ret:P.G,args:[,]},{func:1,args:[,]},{func:1,ret:-1,args:[P.z,[P.e,M.an]]},{func:1,ret:P.G,args:[{func:1,ret:-1,args:[D.v]}]},{func:1,ret:-1,args:[W.aL]},{func:1,ret:-1,args:[P.z,[P.e,D.Y]]},{func:1,ret:P.y},{func:1,ret:-1,args:[P.z,[P.e,U.aa]]},{func:1,ret:-1,args:[P.z,[P.e,V.aj]]},{func:1,args:[W.j]},{func:1,ret:P.a3,args:[W.F]},{func:1,ret:W.a_,args:[W.F]},{func:1,ret:P.G,args:[{func:1,ret:-1}]},{func:1,args:[,P.o]},{func:1,ret:P.G,args:[P.X]},{func:1,args:[P.o]},{func:1,ret:P.a3,args:[[P.e,D.Y]]},{func:1,ret:P.G,args:[,],opt:[P.ak]},{func:1,ret:-1,args:[W.aZ]},{func:1,ret:P.G,args:[F.ap,P.y,P.y]},{func:1,ret:[P.at,,],args:[,]},{func:1,ret:P.G,args:[P.aV]},{func:1,ret:-1,args:[P.o,P.o]}],interceptorsByTag:null,leafTags:null};(function nativeSupport(){!function(){var u=function(a){var o={}
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
hunkHelpers.setOrUpdateInterceptorsByTag({ArrayBuffer:J.a,AnimationEffectReadOnly:J.a,AnimationEffectTiming:J.a,AnimationEffectTimingReadOnly:J.a,AnimationTimeline:J.a,AnimationWorkletGlobalScope:J.a,AuthenticatorAssertionResponse:J.a,AuthenticatorAttestationResponse:J.a,AuthenticatorResponse:J.a,BackgroundFetchFetch:J.a,BackgroundFetchManager:J.a,BackgroundFetchSettledFetch:J.a,BarProp:J.a,BarcodeDetector:J.a,BluetoothRemoteGATTDescriptor:J.a,Body:J.a,BudgetState:J.a,CacheStorage:J.a,CanvasGradient:J.a,CanvasPattern:J.a,Client:J.a,Clients:J.a,CookieStore:J.a,Coordinates:J.a,Credential:J.a,CredentialUserData:J.a,CredentialsContainer:J.a,Crypto:J.a,CryptoKey:J.a,CSS:J.a,CSSVariableReferenceValue:J.a,CustomElementRegistry:J.a,DataTransfer:J.a,DataTransferItem:J.a,DeprecatedStorageInfo:J.a,DeprecatedStorageQuota:J.a,DeprecationReport:J.a,DetectedBarcode:J.a,DetectedFace:J.a,DetectedText:J.a,DeviceAcceleration:J.a,DeviceRotationRate:J.a,DirectoryEntry:J.a,DirectoryReader:J.a,DocumentOrShadowRoot:J.a,DocumentTimeline:J.a,DOMError:J.a,DOMImplementation:J.a,Iterator:J.a,DOMMatrix:J.a,DOMMatrixReadOnly:J.a,DOMParser:J.a,DOMPoint:J.a,DOMPointReadOnly:J.a,DOMQuad:J.a,DOMStringMap:J.a,Entry:J.a,External:J.a,FaceDetector:J.a,FederatedCredential:J.a,FileEntry:J.a,DOMFileSystem:J.a,FontFace:J.a,FontFaceSource:J.a,FormData:J.a,GamepadButton:J.a,GamepadPose:J.a,Geolocation:J.a,Position:J.a,Headers:J.a,HTMLHyperlinkElementUtils:J.a,IdleDeadline:J.a,ImageBitmap:J.a,ImageBitmapRenderingContext:J.a,ImageCapture:J.a,InputDeviceCapabilities:J.a,IntersectionObserver:J.a,IntersectionObserverEntry:J.a,InterventionReport:J.a,KeyframeEffect:J.a,KeyframeEffectReadOnly:J.a,MediaCapabilities:J.a,MediaCapabilitiesInfo:J.a,MediaDeviceInfo:J.a,MediaError:J.a,MediaKeyStatusMap:J.a,MediaKeySystemAccess:J.a,MediaKeys:J.a,MediaKeysPolicy:J.a,MediaMetadata:J.a,MediaSession:J.a,MediaSettingsRange:J.a,MemoryInfo:J.a,MessageChannel:J.a,Metadata:J.a,MutationObserver:J.a,WebKitMutationObserver:J.a,MutationRecord:J.a,NavigationPreloadManager:J.a,Navigator:J.a,NavigatorAutomationInformation:J.a,NavigatorConcurrentHardware:J.a,NavigatorCookies:J.a,NavigatorUserMediaError:J.a,NodeFilter:J.a,NodeIterator:J.a,NonDocumentTypeChildNode:J.a,NonElementParentNode:J.a,NoncedElement:J.a,OffscreenCanvasRenderingContext2D:J.a,OverconstrainedError:J.a,PaintRenderingContext2D:J.a,PaintSize:J.a,PaintWorkletGlobalScope:J.a,PasswordCredential:J.a,Path2D:J.a,PaymentAddress:J.a,PaymentInstruments:J.a,PaymentManager:J.a,PaymentResponse:J.a,PerformanceEntry:J.a,PerformanceLongTaskTiming:J.a,PerformanceMark:J.a,PerformanceMeasure:J.a,PerformanceNavigation:J.a,PerformanceNavigationTiming:J.a,PerformanceObserver:J.a,PerformanceObserverEntryList:J.a,PerformancePaintTiming:J.a,PerformanceResourceTiming:J.a,PerformanceServerTiming:J.a,PerformanceTiming:J.a,Permissions:J.a,PhotoCapabilities:J.a,PositionError:J.a,Presentation:J.a,PresentationReceiver:J.a,PublicKeyCredential:J.a,PushManager:J.a,PushMessageData:J.a,PushSubscription:J.a,PushSubscriptionOptions:J.a,Range:J.a,RelatedApplication:J.a,ReportBody:J.a,ReportingObserver:J.a,ResizeObserver:J.a,ResizeObserverEntry:J.a,RTCCertificate:J.a,RTCIceCandidate:J.a,mozRTCIceCandidate:J.a,RTCLegacyStatsReport:J.a,RTCRtpContributingSource:J.a,RTCRtpReceiver:J.a,RTCRtpSender:J.a,RTCSessionDescription:J.a,mozRTCSessionDescription:J.a,RTCStatsResponse:J.a,Screen:J.a,ScrollState:J.a,ScrollTimeline:J.a,Selection:J.a,SharedArrayBuffer:J.a,SpeechRecognitionAlternative:J.a,SpeechSynthesisVoice:J.a,StaticRange:J.a,StorageManager:J.a,StyleMedia:J.a,StylePropertyMap:J.a,StylePropertyMapReadonly:J.a,SyncManager:J.a,TaskAttributionTiming:J.a,TextDetector:J.a,TextMetrics:J.a,TrackDefault:J.a,TreeWalker:J.a,TrustedHTML:J.a,TrustedScriptURL:J.a,TrustedURL:J.a,UnderlyingSourceBase:J.a,URLSearchParams:J.a,VRCoordinateSystem:J.a,VRDisplayCapabilities:J.a,VREyeParameters:J.a,VRFrameData:J.a,VRFrameOfReference:J.a,VRPose:J.a,VRStageBounds:J.a,VRStageBoundsPoint:J.a,VRStageParameters:J.a,ValidityState:J.a,VideoPlaybackQuality:J.a,VideoTrack:J.a,VTTRegion:J.a,WindowClient:J.a,WorkletAnimation:J.a,WorkletGlobalScope:J.a,XPathEvaluator:J.a,XPathExpression:J.a,XPathNSResolver:J.a,XPathResult:J.a,XMLSerializer:J.a,XSLTProcessor:J.a,Bluetooth:J.a,BluetoothCharacteristicProperties:J.a,BluetoothRemoteGATTServer:J.a,BluetoothRemoteGATTService:J.a,BluetoothUUID:J.a,BudgetService:J.a,Cache:J.a,DOMFileSystemSync:J.a,DirectoryEntrySync:J.a,DirectoryReaderSync:J.a,EntrySync:J.a,FileEntrySync:J.a,FileReaderSync:J.a,FileWriterSync:J.a,HTMLAllCollection:J.a,Mojo:J.a,MojoHandle:J.a,MojoWatcher:J.a,NFC:J.a,PagePopupController:J.a,Report:J.a,Request:J.a,Response:J.a,SubtleCrypto:J.a,USBAlternateInterface:J.a,USBConfiguration:J.a,USBDevice:J.a,USBEndpoint:J.a,USBInTransferResult:J.a,USBInterface:J.a,USBIsochronousInTransferPacket:J.a,USBIsochronousInTransferResult:J.a,USBIsochronousOutTransferPacket:J.a,USBIsochronousOutTransferResult:J.a,USBOutTransferResult:J.a,WorkerLocation:J.a,WorkerNavigator:J.a,Worklet:J.a,IDBCursor:J.a,IDBCursorWithValue:J.a,IDBFactory:J.a,IDBIndex:J.a,IDBKeyRange:J.a,IDBObjectStore:J.a,IDBObservation:J.a,IDBObserver:J.a,IDBObserverChanges:J.a,SVGAngle:J.a,SVGAnimatedAngle:J.a,SVGAnimatedBoolean:J.a,SVGAnimatedEnumeration:J.a,SVGAnimatedInteger:J.a,SVGAnimatedLength:J.a,SVGAnimatedLengthList:J.a,SVGAnimatedNumber:J.a,SVGAnimatedNumberList:J.a,SVGAnimatedPreserveAspectRatio:J.a,SVGAnimatedRect:J.a,SVGAnimatedString:J.a,SVGAnimatedTransformList:J.a,SVGMatrix:J.a,SVGPoint:J.a,SVGPreserveAspectRatio:J.a,SVGRect:J.a,SVGUnitTypes:J.a,AudioListener:J.a,AudioParam:J.a,AudioTrack:J.a,AudioWorkletGlobalScope:J.a,AudioWorkletProcessor:J.a,PeriodicWave:J.a,WebGLActiveInfo:J.a,ANGLEInstancedArrays:J.a,ANGLE_instanced_arrays:J.a,WebGLCanvas:J.a,WebGLColorBufferFloat:J.a,WebGLCompressedTextureASTC:J.a,WebGLCompressedTextureATC:J.a,WEBGL_compressed_texture_atc:J.a,WebGLCompressedTextureETC1:J.a,WEBGL_compressed_texture_etc1:J.a,WebGLCompressedTextureETC:J.a,WebGLCompressedTexturePVRTC:J.a,WEBGL_compressed_texture_pvrtc:J.a,WebGLCompressedTextureS3TC:J.a,WEBGL_compressed_texture_s3tc:J.a,WebGLCompressedTextureS3TCsRGB:J.a,WebGLDebugRendererInfo:J.a,WEBGL_debug_renderer_info:J.a,WebGLDebugShaders:J.a,WEBGL_debug_shaders:J.a,WebGLDepthTexture:J.a,WEBGL_depth_texture:J.a,WebGLDrawBuffers:J.a,WEBGL_draw_buffers:J.a,EXTsRGB:J.a,EXT_sRGB:J.a,EXTBlendMinMax:J.a,EXT_blend_minmax:J.a,EXTColorBufferFloat:J.a,EXTColorBufferHalfFloat:J.a,EXTDisjointTimerQuery:J.a,EXTDisjointTimerQueryWebGL2:J.a,EXTFragDepth:J.a,EXT_frag_depth:J.a,EXTShaderTextureLOD:J.a,EXT_shader_texture_lod:J.a,EXTTextureFilterAnisotropic:J.a,EXT_texture_filter_anisotropic:J.a,WebGLGetBufferSubDataAsync:J.a,WebGLLoseContext:J.a,WebGLExtensionLoseContext:J.a,WEBGL_lose_context:J.a,OESElementIndexUint:J.a,OES_element_index_uint:J.a,OESStandardDerivatives:J.a,OES_standard_derivatives:J.a,OESTextureFloat:J.a,OES_texture_float:J.a,OESTextureFloatLinear:J.a,OES_texture_float_linear:J.a,OESTextureHalfFloat:J.a,OES_texture_half_float:J.a,OESTextureHalfFloatLinear:J.a,OES_texture_half_float_linear:J.a,OESVertexArrayObject:J.a,OES_vertex_array_object:J.a,WebGLQuery:J.a,WebGLRenderbuffer:J.a,WebGLRenderingContext:J.a,WebGLSampler:J.a,WebGLShaderPrecisionFormat:J.a,WebGLSync:J.a,WebGLTimerQueryEXT:J.a,WebGLTransformFeedback:J.a,WebGLVertexArrayObject:J.a,WebGLVertexArrayObjectOES:J.a,WebGL:J.a,WebGL2RenderingContextBase:J.a,Database:J.a,SQLError:J.a,SQLResultSet:J.a,SQLTransaction:J.a,DataView:H.cf,ArrayBufferView:H.cf,Float32Array:H.ce,Float64Array:H.ce,Int16Array:H.fW,Int32Array:H.fX,Int8Array:H.fY,Uint16Array:H.fZ,Uint32Array:H.h_,Uint8ClampedArray:H.dq,CanvasPixelArray:H.dq,Uint8Array:H.h0,HTMLBRElement:W.q,HTMLBaseElement:W.q,HTMLButtonElement:W.q,HTMLContentElement:W.q,HTMLDListElement:W.q,HTMLDataElement:W.q,HTMLDataListElement:W.q,HTMLDetailsElement:W.q,HTMLDialogElement:W.q,HTMLEmbedElement:W.q,HTMLFieldSetElement:W.q,HTMLHRElement:W.q,HTMLHeadElement:W.q,HTMLHeadingElement:W.q,HTMLHtmlElement:W.q,HTMLIFrameElement:W.q,HTMLInputElement:W.q,HTMLLIElement:W.q,HTMLLabelElement:W.q,HTMLLegendElement:W.q,HTMLLinkElement:W.q,HTMLMapElement:W.q,HTMLMenuElement:W.q,HTMLMetaElement:W.q,HTMLMeterElement:W.q,HTMLModElement:W.q,HTMLOListElement:W.q,HTMLObjectElement:W.q,HTMLOptGroupElement:W.q,HTMLOptionElement:W.q,HTMLOutputElement:W.q,HTMLParagraphElement:W.q,HTMLParamElement:W.q,HTMLPictureElement:W.q,HTMLPreElement:W.q,HTMLProgressElement:W.q,HTMLQuoteElement:W.q,HTMLScriptElement:W.q,HTMLShadowElement:W.q,HTMLSlotElement:W.q,HTMLSourceElement:W.q,HTMLSpanElement:W.q,HTMLStyleElement:W.q,HTMLTableCaptionElement:W.q,HTMLTableCellElement:W.q,HTMLTableDataCellElement:W.q,HTMLTableHeaderCellElement:W.q,HTMLTableColElement:W.q,HTMLTableElement:W.q,HTMLTableRowElement:W.q,HTMLTableSectionElement:W.q,HTMLTemplateElement:W.q,HTMLTextAreaElement:W.q,HTMLTimeElement:W.q,HTMLTitleElement:W.q,HTMLTrackElement:W.q,HTMLUListElement:W.q,HTMLUnknownElement:W.q,HTMLDirectoryElement:W.q,HTMLFontElement:W.q,HTMLFrameElement:W.q,HTMLFrameSetElement:W.q,HTMLMarqueeElement:W.q,HTMLElement:W.q,AccessibleNodeList:W.eP,HTMLAnchorElement:W.eR,HTMLAreaElement:W.eS,Blob:W.cT,HTMLBodyElement:W.cU,HTMLCanvasElement:W.bz,CanvasRenderingContext2D:W.bA,CDATASection:W.bg,CharacterData:W.bg,Comment:W.bg,ProcessingInstruction:W.bg,Text:W.bg,CSSNumericValue:W.c1,CSSUnitValue:W.c1,CSSPerspective:W.f3,CSSCharsetRule:W.N,CSSConditionRule:W.N,CSSFontFaceRule:W.N,CSSGroupingRule:W.N,CSSImportRule:W.N,CSSKeyframeRule:W.N,MozCSSKeyframeRule:W.N,WebKitCSSKeyframeRule:W.N,CSSKeyframesRule:W.N,MozCSSKeyframesRule:W.N,WebKitCSSKeyframesRule:W.N,CSSMediaRule:W.N,CSSNamespaceRule:W.N,CSSPageRule:W.N,CSSRule:W.N,CSSStyleRule:W.N,CSSSupportsRule:W.N,CSSViewportRule:W.N,CSSStyleDeclaration:W.bC,MSStyleCSSProperties:W.bC,CSS2Properties:W.bC,CSSImageValue:W.aE,CSSKeywordValue:W.aE,CSSPositionValue:W.aE,CSSResourceValue:W.aE,CSSURLImageValue:W.aE,CSSStyleValue:W.aE,CSSMatrixComponent:W.aF,CSSRotation:W.aF,CSSScale:W.aF,CSSSkew:W.aF,CSSTranslation:W.aF,CSSTransformComponent:W.aF,CSSTransformValue:W.f5,CSSUnparsedValue:W.f6,DataTransferItemList:W.f8,HTMLDivElement:W.c2,XMLDocument:W.c3,Document:W.c3,DOMException:W.f9,ClientRectList:W.d3,DOMRectList:W.d3,DOMRectReadOnly:W.d4,DOMStringList:W.fa,DOMTokenList:W.fb,Element:W.a_,AbortPaymentEvent:W.j,AnimationEvent:W.j,AnimationPlaybackEvent:W.j,ApplicationCacheErrorEvent:W.j,BackgroundFetchClickEvent:W.j,BackgroundFetchEvent:W.j,BackgroundFetchFailEvent:W.j,BackgroundFetchedEvent:W.j,BeforeInstallPromptEvent:W.j,BeforeUnloadEvent:W.j,BlobEvent:W.j,CanMakePaymentEvent:W.j,ClipboardEvent:W.j,CloseEvent:W.j,CustomEvent:W.j,DeviceMotionEvent:W.j,DeviceOrientationEvent:W.j,ErrorEvent:W.j,ExtendableEvent:W.j,ExtendableMessageEvent:W.j,FetchEvent:W.j,FontFaceSetLoadEvent:W.j,ForeignFetchEvent:W.j,GamepadEvent:W.j,HashChangeEvent:W.j,InstallEvent:W.j,MediaEncryptedEvent:W.j,MediaKeyMessageEvent:W.j,MediaQueryListEvent:W.j,MediaStreamEvent:W.j,MediaStreamTrackEvent:W.j,MessageEvent:W.j,MIDIConnectionEvent:W.j,MIDIMessageEvent:W.j,MutationEvent:W.j,NotificationEvent:W.j,PageTransitionEvent:W.j,PaymentRequestEvent:W.j,PaymentRequestUpdateEvent:W.j,PopStateEvent:W.j,PresentationConnectionAvailableEvent:W.j,PresentationConnectionCloseEvent:W.j,ProgressEvent:W.j,PromiseRejectionEvent:W.j,PushEvent:W.j,RTCDataChannelEvent:W.j,RTCDTMFToneChangeEvent:W.j,RTCPeerConnectionIceEvent:W.j,RTCTrackEvent:W.j,SecurityPolicyViolationEvent:W.j,SensorErrorEvent:W.j,SpeechRecognitionError:W.j,SpeechRecognitionEvent:W.j,SpeechSynthesisEvent:W.j,StorageEvent:W.j,SyncEvent:W.j,TrackEvent:W.j,TransitionEvent:W.j,WebKitTransitionEvent:W.j,VRDeviceEvent:W.j,VRDisplayEvent:W.j,VRSessionEvent:W.j,MojoInterfaceRequestEvent:W.j,ResourceProgressEvent:W.j,USBConnectionEvent:W.j,IDBVersionChangeEvent:W.j,AudioProcessingEvent:W.j,OfflineAudioCompletionEvent:W.j,WebGLContextEvent:W.j,Event:W.j,InputEvent:W.j,AbsoluteOrientationSensor:W.d,Accelerometer:W.d,AccessibleNode:W.d,AmbientLightSensor:W.d,Animation:W.d,ApplicationCache:W.d,DOMApplicationCache:W.d,OfflineResourceList:W.d,BackgroundFetchRegistration:W.d,BatteryManager:W.d,BroadcastChannel:W.d,CanvasCaptureMediaStreamTrack:W.d,DedicatedWorkerGlobalScope:W.d,EventSource:W.d,FileReader:W.d,FontFaceSet:W.d,Gyroscope:W.d,XMLHttpRequest:W.d,XMLHttpRequestEventTarget:W.d,XMLHttpRequestUpload:W.d,LinearAccelerationSensor:W.d,Magnetometer:W.d,MediaDevices:W.d,MediaKeySession:W.d,MediaQueryList:W.d,MediaRecorder:W.d,MediaSource:W.d,MediaStream:W.d,MediaStreamTrack:W.d,MessagePort:W.d,MIDIAccess:W.d,MIDIInput:W.d,MIDIOutput:W.d,MIDIPort:W.d,NetworkInformation:W.d,Notification:W.d,OffscreenCanvas:W.d,OrientationSensor:W.d,PaymentRequest:W.d,Performance:W.d,PermissionStatus:W.d,PresentationAvailability:W.d,PresentationConnection:W.d,PresentationConnectionList:W.d,PresentationRequest:W.d,RelativeOrientationSensor:W.d,RemotePlayback:W.d,RTCDataChannel:W.d,DataChannel:W.d,RTCDTMFSender:W.d,RTCPeerConnection:W.d,webkitRTCPeerConnection:W.d,mozRTCPeerConnection:W.d,ScreenOrientation:W.d,Sensor:W.d,ServiceWorker:W.d,ServiceWorkerContainer:W.d,ServiceWorkerGlobalScope:W.d,ServiceWorkerRegistration:W.d,SharedWorker:W.d,SharedWorkerGlobalScope:W.d,SpeechRecognition:W.d,SpeechSynthesis:W.d,SpeechSynthesisUtterance:W.d,VR:W.d,VRDevice:W.d,VRDisplay:W.d,VRSession:W.d,VisualViewport:W.d,WebSocket:W.d,Worker:W.d,WorkerGlobalScope:W.d,WorkerPerformance:W.d,BluetoothDevice:W.d,BluetoothRemoteGATTCharacteristic:W.d,Clipboard:W.d,MojoInterfaceInterceptor:W.d,USB:W.d,IDBDatabase:W.d,IDBOpenDBRequest:W.d,IDBVersionChangeRequest:W.d,IDBRequest:W.d,IDBTransaction:W.d,AnalyserNode:W.d,RealtimeAnalyserNode:W.d,AudioBufferSourceNode:W.d,AudioDestinationNode:W.d,AudioNode:W.d,AudioScheduledSourceNode:W.d,AudioWorkletNode:W.d,BiquadFilterNode:W.d,ChannelMergerNode:W.d,AudioChannelMerger:W.d,ChannelSplitterNode:W.d,AudioChannelSplitter:W.d,ConstantSourceNode:W.d,ConvolverNode:W.d,DelayNode:W.d,DynamicsCompressorNode:W.d,GainNode:W.d,AudioGainNode:W.d,IIRFilterNode:W.d,MediaElementAudioSourceNode:W.d,MediaStreamAudioDestinationNode:W.d,MediaStreamAudioSourceNode:W.d,OscillatorNode:W.d,Oscillator:W.d,PannerNode:W.d,AudioPannerNode:W.d,webkitAudioPannerNode:W.d,ScriptProcessorNode:W.d,JavaScriptAudioNode:W.d,StereoPannerNode:W.d,WaveShaperNode:W.d,EventTarget:W.d,File:W.aG,FileList:W.fk,FileWriter:W.fl,HTMLFormElement:W.fp,Gamepad:W.aH,History:W.fs,HTMLCollection:W.bE,HTMLFormControlsCollection:W.bE,HTMLOptionsCollection:W.bE,HTMLDocument:W.d8,ImageData:W.bj,HTMLImageElement:W.c8,KeyboardEvent:W.aL,Location:W.fE,HTMLAudioElement:W.cc,HTMLMediaElement:W.cc,MediaList:W.fP,MIDIInputMap:W.fQ,MIDIOutputMap:W.fS,MimeType:W.aO,MimeTypeArray:W.fU,PointerEvent:W.a6,MouseEvent:W.a6,DragEvent:W.a6,DocumentFragment:W.F,ShadowRoot:W.F,Attr:W.F,DocumentType:W.F,Node:W.F,NodeList:W.cg,RadioNodeList:W.cg,Plugin:W.aQ,PluginArray:W.h6,RTCStatsReport:W.hf,HTMLSelectElement:W.hi,SourceBuffer:W.aR,SourceBufferList:W.hq,SpeechGrammar:W.aS,SpeechGrammarList:W.hr,SpeechRecognitionResult:W.aT,Storage:W.hv,CSSStyleSheet:W.ax,StyleSheet:W.ax,TextTrack:W.aU,TextTrackCue:W.ay,VTTCue:W.ay,TextTrackCueList:W.hD,TextTrackList:W.hE,TimeRanges:W.hK,Touch:W.aW,TouchEvent:W.az,TouchList:W.hN,TrackDefaultList:W.hO,CompositionEvent:W.br,FocusEvent:W.br,TextEvent:W.br,UIEvent:W.br,URL:W.i3,HTMLVideoElement:W.ig,VideoTrackList:W.ih,WheelEvent:W.aZ,Window:W.cx,DOMWindow:W.cx,CSSRuleList:W.ir,ClientRect:W.e_,DOMRect:W.e_,GamepadList:W.iE,NamedNodeMap:W.eg,MozNamedAttrMap:W.eg,SpeechRecognitionResultList:W.iP,StyleSheetList:W.iQ,SVGLength:P.b0,SVGLengthList:P.fA,SVGNumber:P.b5,SVGNumberList:P.h2,SVGPointList:P.h8,SVGStringList:P.hB,SVGAElement:P.p,SVGAnimateElement:P.p,SVGAnimateMotionElement:P.p,SVGAnimateTransformElement:P.p,SVGAnimationElement:P.p,SVGCircleElement:P.p,SVGClipPathElement:P.p,SVGDefsElement:P.p,SVGDescElement:P.p,SVGDiscardElement:P.p,SVGEllipseElement:P.p,SVGFEBlendElement:P.p,SVGFEColorMatrixElement:P.p,SVGFEComponentTransferElement:P.p,SVGFECompositeElement:P.p,SVGFEConvolveMatrixElement:P.p,SVGFEDiffuseLightingElement:P.p,SVGFEDisplacementMapElement:P.p,SVGFEDistantLightElement:P.p,SVGFEFloodElement:P.p,SVGFEFuncAElement:P.p,SVGFEFuncBElement:P.p,SVGFEFuncGElement:P.p,SVGFEFuncRElement:P.p,SVGFEGaussianBlurElement:P.p,SVGFEImageElement:P.p,SVGFEMergeElement:P.p,SVGFEMergeNodeElement:P.p,SVGFEMorphologyElement:P.p,SVGFEOffsetElement:P.p,SVGFEPointLightElement:P.p,SVGFESpecularLightingElement:P.p,SVGFESpotLightElement:P.p,SVGFETileElement:P.p,SVGFETurbulenceElement:P.p,SVGFilterElement:P.p,SVGForeignObjectElement:P.p,SVGGElement:P.p,SVGGeometryElement:P.p,SVGGraphicsElement:P.p,SVGImageElement:P.p,SVGLineElement:P.p,SVGLinearGradientElement:P.p,SVGMarkerElement:P.p,SVGMaskElement:P.p,SVGMetadataElement:P.p,SVGPathElement:P.p,SVGPatternElement:P.p,SVGPolygonElement:P.p,SVGPolylineElement:P.p,SVGRadialGradientElement:P.p,SVGRectElement:P.p,SVGScriptElement:P.p,SVGSetElement:P.p,SVGStopElement:P.p,SVGStyleElement:P.p,SVGElement:P.p,SVGSVGElement:P.p,SVGSwitchElement:P.p,SVGSymbolElement:P.p,SVGTSpanElement:P.p,SVGTextContentElement:P.p,SVGTextElement:P.p,SVGTextPathElement:P.p,SVGTextPositioningElement:P.p,SVGTitleElement:P.p,SVGUseElement:P.p,SVGViewElement:P.p,SVGGradientElement:P.p,SVGComponentTransferFunctionElement:P.p,SVGFEDropShadowElement:P.p,SVGMPathElement:P.p,SVGTransform:P.b8,SVGTransformList:P.hP,AudioBuffer:P.eU,AudioParamMap:P.eV,AudioTrackList:P.eX,AudioContext:P.bx,webkitAudioContext:P.bx,BaseAudioContext:P.bx,OfflineAudioContext:P.h3,WebGLBuffer:P.cV,WebGLFramebuffer:P.d7,WebGLProgram:P.du,WebGL2RenderingContext:P.bJ,WebGLShader:P.dw,WebGLTexture:P.dC,WebGLUniformLocation:P.dM,SQLResultSetRowList:P.hs})
hunkHelpers.setOrUpdateLeafTags({ArrayBuffer:true,AnimationEffectReadOnly:true,AnimationEffectTiming:true,AnimationEffectTimingReadOnly:true,AnimationTimeline:true,AnimationWorkletGlobalScope:true,AuthenticatorAssertionResponse:true,AuthenticatorAttestationResponse:true,AuthenticatorResponse:true,BackgroundFetchFetch:true,BackgroundFetchManager:true,BackgroundFetchSettledFetch:true,BarProp:true,BarcodeDetector:true,BluetoothRemoteGATTDescriptor:true,Body:true,BudgetState:true,CacheStorage:true,CanvasGradient:true,CanvasPattern:true,Client:true,Clients:true,CookieStore:true,Coordinates:true,Credential:true,CredentialUserData:true,CredentialsContainer:true,Crypto:true,CryptoKey:true,CSS:true,CSSVariableReferenceValue:true,CustomElementRegistry:true,DataTransfer:true,DataTransferItem:true,DeprecatedStorageInfo:true,DeprecatedStorageQuota:true,DeprecationReport:true,DetectedBarcode:true,DetectedFace:true,DetectedText:true,DeviceAcceleration:true,DeviceRotationRate:true,DirectoryEntry:true,DirectoryReader:true,DocumentOrShadowRoot:true,DocumentTimeline:true,DOMError:true,DOMImplementation:true,Iterator:true,DOMMatrix:true,DOMMatrixReadOnly:true,DOMParser:true,DOMPoint:true,DOMPointReadOnly:true,DOMQuad:true,DOMStringMap:true,Entry:true,External:true,FaceDetector:true,FederatedCredential:true,FileEntry:true,DOMFileSystem:true,FontFace:true,FontFaceSource:true,FormData:true,GamepadButton:true,GamepadPose:true,Geolocation:true,Position:true,Headers:true,HTMLHyperlinkElementUtils:true,IdleDeadline:true,ImageBitmap:true,ImageBitmapRenderingContext:true,ImageCapture:true,InputDeviceCapabilities:true,IntersectionObserver:true,IntersectionObserverEntry:true,InterventionReport:true,KeyframeEffect:true,KeyframeEffectReadOnly:true,MediaCapabilities:true,MediaCapabilitiesInfo:true,MediaDeviceInfo:true,MediaError:true,MediaKeyStatusMap:true,MediaKeySystemAccess:true,MediaKeys:true,MediaKeysPolicy:true,MediaMetadata:true,MediaSession:true,MediaSettingsRange:true,MemoryInfo:true,MessageChannel:true,Metadata:true,MutationObserver:true,WebKitMutationObserver:true,MutationRecord:true,NavigationPreloadManager:true,Navigator:true,NavigatorAutomationInformation:true,NavigatorConcurrentHardware:true,NavigatorCookies:true,NavigatorUserMediaError:true,NodeFilter:true,NodeIterator:true,NonDocumentTypeChildNode:true,NonElementParentNode:true,NoncedElement:true,OffscreenCanvasRenderingContext2D:true,OverconstrainedError:true,PaintRenderingContext2D:true,PaintSize:true,PaintWorkletGlobalScope:true,PasswordCredential:true,Path2D:true,PaymentAddress:true,PaymentInstruments:true,PaymentManager:true,PaymentResponse:true,PerformanceEntry:true,PerformanceLongTaskTiming:true,PerformanceMark:true,PerformanceMeasure:true,PerformanceNavigation:true,PerformanceNavigationTiming:true,PerformanceObserver:true,PerformanceObserverEntryList:true,PerformancePaintTiming:true,PerformanceResourceTiming:true,PerformanceServerTiming:true,PerformanceTiming:true,Permissions:true,PhotoCapabilities:true,PositionError:true,Presentation:true,PresentationReceiver:true,PublicKeyCredential:true,PushManager:true,PushMessageData:true,PushSubscription:true,PushSubscriptionOptions:true,Range:true,RelatedApplication:true,ReportBody:true,ReportingObserver:true,ResizeObserver:true,ResizeObserverEntry:true,RTCCertificate:true,RTCIceCandidate:true,mozRTCIceCandidate:true,RTCLegacyStatsReport:true,RTCRtpContributingSource:true,RTCRtpReceiver:true,RTCRtpSender:true,RTCSessionDescription:true,mozRTCSessionDescription:true,RTCStatsResponse:true,Screen:true,ScrollState:true,ScrollTimeline:true,Selection:true,SharedArrayBuffer:true,SpeechRecognitionAlternative:true,SpeechSynthesisVoice:true,StaticRange:true,StorageManager:true,StyleMedia:true,StylePropertyMap:true,StylePropertyMapReadonly:true,SyncManager:true,TaskAttributionTiming:true,TextDetector:true,TextMetrics:true,TrackDefault:true,TreeWalker:true,TrustedHTML:true,TrustedScriptURL:true,TrustedURL:true,UnderlyingSourceBase:true,URLSearchParams:true,VRCoordinateSystem:true,VRDisplayCapabilities:true,VREyeParameters:true,VRFrameData:true,VRFrameOfReference:true,VRPose:true,VRStageBounds:true,VRStageBoundsPoint:true,VRStageParameters:true,ValidityState:true,VideoPlaybackQuality:true,VideoTrack:true,VTTRegion:true,WindowClient:true,WorkletAnimation:true,WorkletGlobalScope:true,XPathEvaluator:true,XPathExpression:true,XPathNSResolver:true,XPathResult:true,XMLSerializer:true,XSLTProcessor:true,Bluetooth:true,BluetoothCharacteristicProperties:true,BluetoothRemoteGATTServer:true,BluetoothRemoteGATTService:true,BluetoothUUID:true,BudgetService:true,Cache:true,DOMFileSystemSync:true,DirectoryEntrySync:true,DirectoryReaderSync:true,EntrySync:true,FileEntrySync:true,FileReaderSync:true,FileWriterSync:true,HTMLAllCollection:true,Mojo:true,MojoHandle:true,MojoWatcher:true,NFC:true,PagePopupController:true,Report:true,Request:true,Response:true,SubtleCrypto:true,USBAlternateInterface:true,USBConfiguration:true,USBDevice:true,USBEndpoint:true,USBInTransferResult:true,USBInterface:true,USBIsochronousInTransferPacket:true,USBIsochronousInTransferResult:true,USBIsochronousOutTransferPacket:true,USBIsochronousOutTransferResult:true,USBOutTransferResult:true,WorkerLocation:true,WorkerNavigator:true,Worklet:true,IDBCursor:true,IDBCursorWithValue:true,IDBFactory:true,IDBIndex:true,IDBKeyRange:true,IDBObjectStore:true,IDBObservation:true,IDBObserver:true,IDBObserverChanges:true,SVGAngle:true,SVGAnimatedAngle:true,SVGAnimatedBoolean:true,SVGAnimatedEnumeration:true,SVGAnimatedInteger:true,SVGAnimatedLength:true,SVGAnimatedLengthList:true,SVGAnimatedNumber:true,SVGAnimatedNumberList:true,SVGAnimatedPreserveAspectRatio:true,SVGAnimatedRect:true,SVGAnimatedString:true,SVGAnimatedTransformList:true,SVGMatrix:true,SVGPoint:true,SVGPreserveAspectRatio:true,SVGRect:true,SVGUnitTypes:true,AudioListener:true,AudioParam:true,AudioTrack:true,AudioWorkletGlobalScope:true,AudioWorkletProcessor:true,PeriodicWave:true,WebGLActiveInfo:true,ANGLEInstancedArrays:true,ANGLE_instanced_arrays:true,WebGLCanvas:true,WebGLColorBufferFloat:true,WebGLCompressedTextureASTC:true,WebGLCompressedTextureATC:true,WEBGL_compressed_texture_atc:true,WebGLCompressedTextureETC1:true,WEBGL_compressed_texture_etc1:true,WebGLCompressedTextureETC:true,WebGLCompressedTexturePVRTC:true,WEBGL_compressed_texture_pvrtc:true,WebGLCompressedTextureS3TC:true,WEBGL_compressed_texture_s3tc:true,WebGLCompressedTextureS3TCsRGB:true,WebGLDebugRendererInfo:true,WEBGL_debug_renderer_info:true,WebGLDebugShaders:true,WEBGL_debug_shaders:true,WebGLDepthTexture:true,WEBGL_depth_texture:true,WebGLDrawBuffers:true,WEBGL_draw_buffers:true,EXTsRGB:true,EXT_sRGB:true,EXTBlendMinMax:true,EXT_blend_minmax:true,EXTColorBufferFloat:true,EXTColorBufferHalfFloat:true,EXTDisjointTimerQuery:true,EXTDisjointTimerQueryWebGL2:true,EXTFragDepth:true,EXT_frag_depth:true,EXTShaderTextureLOD:true,EXT_shader_texture_lod:true,EXTTextureFilterAnisotropic:true,EXT_texture_filter_anisotropic:true,WebGLGetBufferSubDataAsync:true,WebGLLoseContext:true,WebGLExtensionLoseContext:true,WEBGL_lose_context:true,OESElementIndexUint:true,OES_element_index_uint:true,OESStandardDerivatives:true,OES_standard_derivatives:true,OESTextureFloat:true,OES_texture_float:true,OESTextureFloatLinear:true,OES_texture_float_linear:true,OESTextureHalfFloat:true,OES_texture_half_float:true,OESTextureHalfFloatLinear:true,OES_texture_half_float_linear:true,OESVertexArrayObject:true,OES_vertex_array_object:true,WebGLQuery:true,WebGLRenderbuffer:true,WebGLRenderingContext:true,WebGLSampler:true,WebGLShaderPrecisionFormat:true,WebGLSync:true,WebGLTimerQueryEXT:true,WebGLTransformFeedback:true,WebGLVertexArrayObject:true,WebGLVertexArrayObjectOES:true,WebGL:true,WebGL2RenderingContextBase:true,Database:true,SQLError:true,SQLResultSet:true,SQLTransaction:true,DataView:true,ArrayBufferView:false,Float32Array:true,Float64Array:true,Int16Array:true,Int32Array:true,Int8Array:true,Uint16Array:true,Uint32Array:true,Uint8ClampedArray:true,CanvasPixelArray:true,Uint8Array:false,HTMLBRElement:true,HTMLBaseElement:true,HTMLButtonElement:true,HTMLContentElement:true,HTMLDListElement:true,HTMLDataElement:true,HTMLDataListElement:true,HTMLDetailsElement:true,HTMLDialogElement:true,HTMLEmbedElement:true,HTMLFieldSetElement:true,HTMLHRElement:true,HTMLHeadElement:true,HTMLHeadingElement:true,HTMLHtmlElement:true,HTMLIFrameElement:true,HTMLInputElement:true,HTMLLIElement:true,HTMLLabelElement:true,HTMLLegendElement:true,HTMLLinkElement:true,HTMLMapElement:true,HTMLMenuElement:true,HTMLMetaElement:true,HTMLMeterElement:true,HTMLModElement:true,HTMLOListElement:true,HTMLObjectElement:true,HTMLOptGroupElement:true,HTMLOptionElement:true,HTMLOutputElement:true,HTMLParagraphElement:true,HTMLParamElement:true,HTMLPictureElement:true,HTMLPreElement:true,HTMLProgressElement:true,HTMLQuoteElement:true,HTMLScriptElement:true,HTMLShadowElement:true,HTMLSlotElement:true,HTMLSourceElement:true,HTMLSpanElement:true,HTMLStyleElement:true,HTMLTableCaptionElement:true,HTMLTableCellElement:true,HTMLTableDataCellElement:true,HTMLTableHeaderCellElement:true,HTMLTableColElement:true,HTMLTableElement:true,HTMLTableRowElement:true,HTMLTableSectionElement:true,HTMLTemplateElement:true,HTMLTextAreaElement:true,HTMLTimeElement:true,HTMLTitleElement:true,HTMLTrackElement:true,HTMLUListElement:true,HTMLUnknownElement:true,HTMLDirectoryElement:true,HTMLFontElement:true,HTMLFrameElement:true,HTMLFrameSetElement:true,HTMLMarqueeElement:true,HTMLElement:false,AccessibleNodeList:true,HTMLAnchorElement:true,HTMLAreaElement:true,Blob:false,HTMLBodyElement:true,HTMLCanvasElement:true,CanvasRenderingContext2D:true,CDATASection:true,CharacterData:true,Comment:true,ProcessingInstruction:true,Text:true,CSSNumericValue:true,CSSUnitValue:true,CSSPerspective:true,CSSCharsetRule:true,CSSConditionRule:true,CSSFontFaceRule:true,CSSGroupingRule:true,CSSImportRule:true,CSSKeyframeRule:true,MozCSSKeyframeRule:true,WebKitCSSKeyframeRule:true,CSSKeyframesRule:true,MozCSSKeyframesRule:true,WebKitCSSKeyframesRule:true,CSSMediaRule:true,CSSNamespaceRule:true,CSSPageRule:true,CSSRule:true,CSSStyleRule:true,CSSSupportsRule:true,CSSViewportRule:true,CSSStyleDeclaration:true,MSStyleCSSProperties:true,CSS2Properties:true,CSSImageValue:true,CSSKeywordValue:true,CSSPositionValue:true,CSSResourceValue:true,CSSURLImageValue:true,CSSStyleValue:false,CSSMatrixComponent:true,CSSRotation:true,CSSScale:true,CSSSkew:true,CSSTranslation:true,CSSTransformComponent:false,CSSTransformValue:true,CSSUnparsedValue:true,DataTransferItemList:true,HTMLDivElement:true,XMLDocument:true,Document:false,DOMException:true,ClientRectList:true,DOMRectList:true,DOMRectReadOnly:false,DOMStringList:true,DOMTokenList:true,Element:false,AbortPaymentEvent:true,AnimationEvent:true,AnimationPlaybackEvent:true,ApplicationCacheErrorEvent:true,BackgroundFetchClickEvent:true,BackgroundFetchEvent:true,BackgroundFetchFailEvent:true,BackgroundFetchedEvent:true,BeforeInstallPromptEvent:true,BeforeUnloadEvent:true,BlobEvent:true,CanMakePaymentEvent:true,ClipboardEvent:true,CloseEvent:true,CustomEvent:true,DeviceMotionEvent:true,DeviceOrientationEvent:true,ErrorEvent:true,ExtendableEvent:true,ExtendableMessageEvent:true,FetchEvent:true,FontFaceSetLoadEvent:true,ForeignFetchEvent:true,GamepadEvent:true,HashChangeEvent:true,InstallEvent:true,MediaEncryptedEvent:true,MediaKeyMessageEvent:true,MediaQueryListEvent:true,MediaStreamEvent:true,MediaStreamTrackEvent:true,MessageEvent:true,MIDIConnectionEvent:true,MIDIMessageEvent:true,MutationEvent:true,NotificationEvent:true,PageTransitionEvent:true,PaymentRequestEvent:true,PaymentRequestUpdateEvent:true,PopStateEvent:true,PresentationConnectionAvailableEvent:true,PresentationConnectionCloseEvent:true,ProgressEvent:true,PromiseRejectionEvent:true,PushEvent:true,RTCDataChannelEvent:true,RTCDTMFToneChangeEvent:true,RTCPeerConnectionIceEvent:true,RTCTrackEvent:true,SecurityPolicyViolationEvent:true,SensorErrorEvent:true,SpeechRecognitionError:true,SpeechRecognitionEvent:true,SpeechSynthesisEvent:true,StorageEvent:true,SyncEvent:true,TrackEvent:true,TransitionEvent:true,WebKitTransitionEvent:true,VRDeviceEvent:true,VRDisplayEvent:true,VRSessionEvent:true,MojoInterfaceRequestEvent:true,ResourceProgressEvent:true,USBConnectionEvent:true,IDBVersionChangeEvent:true,AudioProcessingEvent:true,OfflineAudioCompletionEvent:true,WebGLContextEvent:true,Event:false,InputEvent:false,AbsoluteOrientationSensor:true,Accelerometer:true,AccessibleNode:true,AmbientLightSensor:true,Animation:true,ApplicationCache:true,DOMApplicationCache:true,OfflineResourceList:true,BackgroundFetchRegistration:true,BatteryManager:true,BroadcastChannel:true,CanvasCaptureMediaStreamTrack:true,DedicatedWorkerGlobalScope:true,EventSource:true,FileReader:true,FontFaceSet:true,Gyroscope:true,XMLHttpRequest:true,XMLHttpRequestEventTarget:true,XMLHttpRequestUpload:true,LinearAccelerationSensor:true,Magnetometer:true,MediaDevices:true,MediaKeySession:true,MediaQueryList:true,MediaRecorder:true,MediaSource:true,MediaStream:true,MediaStreamTrack:true,MessagePort:true,MIDIAccess:true,MIDIInput:true,MIDIOutput:true,MIDIPort:true,NetworkInformation:true,Notification:true,OffscreenCanvas:true,OrientationSensor:true,PaymentRequest:true,Performance:true,PermissionStatus:true,PresentationAvailability:true,PresentationConnection:true,PresentationConnectionList:true,PresentationRequest:true,RelativeOrientationSensor:true,RemotePlayback:true,RTCDataChannel:true,DataChannel:true,RTCDTMFSender:true,RTCPeerConnection:true,webkitRTCPeerConnection:true,mozRTCPeerConnection:true,ScreenOrientation:true,Sensor:true,ServiceWorker:true,ServiceWorkerContainer:true,ServiceWorkerGlobalScope:true,ServiceWorkerRegistration:true,SharedWorker:true,SharedWorkerGlobalScope:true,SpeechRecognition:true,SpeechSynthesis:true,SpeechSynthesisUtterance:true,VR:true,VRDevice:true,VRDisplay:true,VRSession:true,VisualViewport:true,WebSocket:true,Worker:true,WorkerGlobalScope:true,WorkerPerformance:true,BluetoothDevice:true,BluetoothRemoteGATTCharacteristic:true,Clipboard:true,MojoInterfaceInterceptor:true,USB:true,IDBDatabase:true,IDBOpenDBRequest:true,IDBVersionChangeRequest:true,IDBRequest:true,IDBTransaction:true,AnalyserNode:true,RealtimeAnalyserNode:true,AudioBufferSourceNode:true,AudioDestinationNode:true,AudioNode:true,AudioScheduledSourceNode:true,AudioWorkletNode:true,BiquadFilterNode:true,ChannelMergerNode:true,AudioChannelMerger:true,ChannelSplitterNode:true,AudioChannelSplitter:true,ConstantSourceNode:true,ConvolverNode:true,DelayNode:true,DynamicsCompressorNode:true,GainNode:true,AudioGainNode:true,IIRFilterNode:true,MediaElementAudioSourceNode:true,MediaStreamAudioDestinationNode:true,MediaStreamAudioSourceNode:true,OscillatorNode:true,Oscillator:true,PannerNode:true,AudioPannerNode:true,webkitAudioPannerNode:true,ScriptProcessorNode:true,JavaScriptAudioNode:true,StereoPannerNode:true,WaveShaperNode:true,EventTarget:false,File:true,FileList:true,FileWriter:true,HTMLFormElement:true,Gamepad:true,History:true,HTMLCollection:true,HTMLFormControlsCollection:true,HTMLOptionsCollection:true,HTMLDocument:true,ImageData:true,HTMLImageElement:true,KeyboardEvent:true,Location:true,HTMLAudioElement:true,HTMLMediaElement:false,MediaList:true,MIDIInputMap:true,MIDIOutputMap:true,MimeType:true,MimeTypeArray:true,PointerEvent:true,MouseEvent:false,DragEvent:false,DocumentFragment:true,ShadowRoot:true,Attr:true,DocumentType:true,Node:false,NodeList:true,RadioNodeList:true,Plugin:true,PluginArray:true,RTCStatsReport:true,HTMLSelectElement:true,SourceBuffer:true,SourceBufferList:true,SpeechGrammar:true,SpeechGrammarList:true,SpeechRecognitionResult:true,Storage:true,CSSStyleSheet:true,StyleSheet:true,TextTrack:true,TextTrackCue:true,VTTCue:true,TextTrackCueList:true,TextTrackList:true,TimeRanges:true,Touch:true,TouchEvent:true,TouchList:true,TrackDefaultList:true,CompositionEvent:true,FocusEvent:true,TextEvent:true,UIEvent:false,URL:true,HTMLVideoElement:true,VideoTrackList:true,WheelEvent:true,Window:true,DOMWindow:true,CSSRuleList:true,ClientRect:true,DOMRect:true,GamepadList:true,NamedNodeMap:true,MozNamedAttrMap:true,SpeechRecognitionResultList:true,StyleSheetList:true,SVGLength:true,SVGLengthList:true,SVGNumber:true,SVGNumberList:true,SVGPointList:true,SVGStringList:true,SVGAElement:true,SVGAnimateElement:true,SVGAnimateMotionElement:true,SVGAnimateTransformElement:true,SVGAnimationElement:true,SVGCircleElement:true,SVGClipPathElement:true,SVGDefsElement:true,SVGDescElement:true,SVGDiscardElement:true,SVGEllipseElement:true,SVGFEBlendElement:true,SVGFEColorMatrixElement:true,SVGFEComponentTransferElement:true,SVGFECompositeElement:true,SVGFEConvolveMatrixElement:true,SVGFEDiffuseLightingElement:true,SVGFEDisplacementMapElement:true,SVGFEDistantLightElement:true,SVGFEFloodElement:true,SVGFEFuncAElement:true,SVGFEFuncBElement:true,SVGFEFuncGElement:true,SVGFEFuncRElement:true,SVGFEGaussianBlurElement:true,SVGFEImageElement:true,SVGFEMergeElement:true,SVGFEMergeNodeElement:true,SVGFEMorphologyElement:true,SVGFEOffsetElement:true,SVGFEPointLightElement:true,SVGFESpecularLightingElement:true,SVGFESpotLightElement:true,SVGFETileElement:true,SVGFETurbulenceElement:true,SVGFilterElement:true,SVGForeignObjectElement:true,SVGGElement:true,SVGGeometryElement:true,SVGGraphicsElement:true,SVGImageElement:true,SVGLineElement:true,SVGLinearGradientElement:true,SVGMarkerElement:true,SVGMaskElement:true,SVGMetadataElement:true,SVGPathElement:true,SVGPatternElement:true,SVGPolygonElement:true,SVGPolylineElement:true,SVGRadialGradientElement:true,SVGRectElement:true,SVGScriptElement:true,SVGSetElement:true,SVGStopElement:true,SVGStyleElement:true,SVGElement:true,SVGSVGElement:true,SVGSwitchElement:true,SVGSymbolElement:true,SVGTSpanElement:true,SVGTextContentElement:true,SVGTextElement:true,SVGTextPathElement:true,SVGTextPositioningElement:true,SVGTitleElement:true,SVGUseElement:true,SVGViewElement:true,SVGGradientElement:true,SVGComponentTransferFunctionElement:true,SVGFEDropShadowElement:true,SVGMPathElement:true,SVGTransform:true,SVGTransformList:true,AudioBuffer:true,AudioParamMap:true,AudioTrackList:true,AudioContext:true,webkitAudioContext:true,BaseAudioContext:false,OfflineAudioContext:true,WebGLBuffer:true,WebGLFramebuffer:true,WebGLProgram:true,WebGL2RenderingContext:true,WebGLShader:true,WebGLTexture:true,WebGLUniformLocation:true,SQLResultSetRowList:true})
H.dn.$nativeSuperclassTag="ArrayBufferView"
H.cA.$nativeSuperclassTag="ArrayBufferView"
H.cB.$nativeSuperclassTag="ArrayBufferView"
H.ce.$nativeSuperclassTag="ArrayBufferView"
H.cC.$nativeSuperclassTag="ArrayBufferView"
H.cD.$nativeSuperclassTag="ArrayBufferView"
H.dp.$nativeSuperclassTag="ArrayBufferView"
W.cE.$nativeSuperclassTag="EventTarget"
W.cF.$nativeSuperclassTag="EventTarget"
W.cG.$nativeSuperclassTag="EventTarget"
W.cH.$nativeSuperclassTag="EventTarget"})()
convertAllToFastObject(w)
convertToFastObject($);(function(a){if(typeof document==="undefined"){a(null)
return}if(typeof document.currentScript!='undefined'){a(document.currentScript)
return}var u=document.scripts
function onLoad(b){for(var s=0;s<u.length;++s)u[s].removeEventListener("load",onLoad,false)
a(b.target)}for(var t=0;t<u.length;++t)u[t].addEventListener("load",onLoad,false)})(function(a){v.currentScript=a
if(typeof dartMainRunner==="function")dartMainRunner(M.kB,[])
else M.kB([])})})()
//# sourceMappingURL=test.dart.js.map
