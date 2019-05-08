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
a[c]=function(){a[c]=function(){H.l2(b)}
var t
var s=d
try{if(a[b]===u){t=a[b]=s
t=a[b]=d()}else t=a[b]}finally{if(t===s)a[b]=null
a[c]=function(){return this[b]}}return t}}function makeConstList(a){a.immutable$list=Array
a.fixed$length=Array
return a}function convertToFastObject(a){function t(){}t.prototype=a
new t()
return a}function convertAllToFastObject(a){for(var u=0;u<a.length;++u)convertToFastObject(a[u])}var y=0
function tearOffGetter(a,b,c,d,e){return e?new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+d+y+++"(receiver) {"+"if (c === null) c = "+"H.i3"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, true, name);"+"return new c(this, funcs[0], receiver, name);"+"}")(a,b,c,d,H,null):new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+d+y+++"() {"+"if (c === null) c = "+"H.i3"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, false, name);"+"return new c(this, funcs[0], null, name);"+"}")(a,b,c,d,H,null)}function tearOff(a,b,c,d,e,f){var u=null
return d?function(){if(u===null)u=H.i3(this,a,b,c,true,false,e).prototype
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
if(w[u][a])return w[u][a]}}var C={},H={hO:function hO(a){this.a=a},
hM:function(){return new P.bX("No element")},
jU:function(){return new P.bX("Too many elements")},
m:function m(a){this.a=a},
e0:function e0(){},
bf:function bf(){},
bO:function bO(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=null
_.$ti=d},
eu:function eu(a,b,c){this.a=a
this.b=b
this.$ti=c},
ev:function ev(a,b,c){var _=this
_.a=null
_.b=a
_.c=b
_.$ti=c},
ew:function ew(a,b,c){this.a=a
this.b=b
this.$ti=c},
c4:function c4(a,b,c){this.a=a
this.b=b
this.$ti=c},
fH:function fH(a,b,c){this.a=a
this.b=b
this.$ti=c},
bb:function bb(){},
dj:function dj(){},
di:function di(){},
bx:function(a){var u,t
u=H.A(v.mangledGlobalNames[a])
if(typeof u==="string")return u
t="minified:"+a
return t},
kK:function(a){return v.types[H.Z(a)]},
kR:function(a,b){var u
if(b!=null){u=b.x
if(u!=null)return u}return!!J.K(a).$iao},
c:function(a){var u
if(typeof a==="string")return a
if(typeof a==="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
u=J.a8(a)
if(typeof u!=="string")throw H.d(H.bs(a))
return u},
k9:function(a){var u,t,s
u=a.$reflectionInfo
if(u==null)return
u=J.ei(u)
t=u[0]
s=u[1]
return new H.eN(a,u,(t&2)===2,t>>2,s>>1,(s&1)===1,u[2])},
bT:function(a){var u=a.$identityHash
if(u==null){u=Math.random()*0x3fffffff|0
a.$identityHash=u}return u},
bi:function(a){return H.k0(a)+H.i0(H.b4(a),0,null)},
k0:function(a){var u,t,s,r,q,p,o,n,m
u=J.K(a)
t=u.constructor
if(typeof t=="function"){s=t.name
r=typeof s==="string"?s:null}else r=null
q=r==null
if(q||u===C.M||!!u.$ic3){p=C.A(a)
if(q)r=p
if(p==="Object"){o=a.constructor
if(typeof o=="function"){n=String(o).match(/^\s*function\s*([\w$]*)\s*\(/)
m=n==null?null:n[1]
if(typeof m==="string"&&/^\w+$/.test(m))r=m}}return r}r=r
return H.bx(r.length>1&&C.c.al(r,0)===36?C.c.b6(r,1):r)},
iH:function(a){var u,t,s,r,q
u=a.length
if(u<=500)return String.fromCharCode.apply(null,a)
for(t="",s=0;s<u;s=r){r=s+500
q=r<u?r:u
t+=String.fromCharCode.apply(null,a.slice(s,q))}return t},
k8:function(a){var u,t,s,r
u=H.a([],[P.w])
for(t=a.length,s=0;s<a.length;a.length===t||(0,H.x)(a),++s){r=a[s]
if(typeof r!=="number"||Math.floor(r)!==r)throw H.d(H.bs(r))
if(r<=65535)C.a.h(u,r)
else if(r<=1114111){C.a.h(u,55296+(C.f.aR(r-65536,10)&1023))
C.a.h(u,56320+(r&1023))}else throw H.d(H.bs(r))}return H.iH(u)},
iI:function(a){var u,t,s
for(u=a.length,t=0;t<u;++t){s=a[t]
if(typeof s!=="number"||Math.floor(s)!==s)throw H.d(H.bs(s))
if(s<0)throw H.d(H.bs(s))
if(s>65535)return H.k8(a)}return H.iH(a)},
hQ:function(a){var u
if(a<=65535)return String.fromCharCode(a)
if(a<=1114111){u=a-65536
return String.fromCharCode((55296|C.f.aR(u,10))>>>0,56320|u&1023)}throw H.d(P.ah(a,0,1114111,null,null))},
bh:function(a){if(a.date===void 0)a.date=new Date(a.a)
return a.date},
k7:function(a){var u=H.bh(a).getFullYear()+0
return u},
k5:function(a){var u=H.bh(a).getMonth()+1
return u},
k1:function(a){var u=H.bh(a).getDate()+0
return u},
k2:function(a){var u=H.bh(a).getHours()+0
return u},
k4:function(a){var u=H.bh(a).getMinutes()+0
return u},
k6:function(a){var u=H.bh(a).getSeconds()+0
return u},
k3:function(a){var u=H.bh(a).getMilliseconds()+0
return u},
y:function(a){throw H.d(H.bs(a))},
i:function(a,b){if(a==null)J.b6(a)
throw H.d(H.ch(a,b))},
ch:function(a,b){var u,t
if(typeof b!=="number"||Math.floor(b)!==b)return new P.an(!0,b,"index",null)
u=H.Z(J.b6(a))
if(!(b<0)){if(typeof u!=="number")return H.y(u)
t=b>=u}else t=!0
if(t)return P.bd(b,a,"index",null,u)
return P.eL(b,"index",null)},
kH:function(a,b,c){if(a>c)return new P.bj(0,c,!0,a,"start","Invalid value")
if(b!=null)if(b<a||b>c)return new P.bj(a,c,!0,b,"end","Invalid value")
return new P.an(!0,b,"end",null)},
bs:function(a){return new P.an(!0,a,null,null)},
kD:function(a){if(typeof a!=="number")throw H.d(H.bs(a))
return a},
d:function(a){var u
if(a==null)a=new P.cX()
u=new Error()
u.dartException=a
if("defineProperty" in Object){Object.defineProperty(u,"message",{get:H.jk})
u.name=""}else u.toString=H.jk
return u},
jk:function(){return J.a8(this.dartException)},
T:function(a){throw H.d(a)},
x:function(a){throw H.d(P.aR(a))},
az:function(a){var u,t,s,r,q,p
a=a.replace(String({}),'$receiver$').replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
u=a.match(/\\\$[a-zA-Z]+\\\$/g)
if(u==null)u=H.a([],[P.k])
t=u.indexOf("\\$arguments\\$")
s=u.indexOf("\\$argumentsExpr\\$")
r=u.indexOf("\\$expr\\$")
q=u.indexOf("\\$method\\$")
p=u.indexOf("\\$receiver\\$")
return new H.ff(a.replace(new RegExp('\\\\\\$arguments\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$argumentsExpr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$expr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$method\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$receiver\\\\\\$','g'),'((?:x|[^x])*)'),t,s,r,q,p)},
fg:function(a){return function($expr$){var $argumentsExpr$='$arguments$'
try{$expr$.$method$($argumentsExpr$)}catch(u){return u.message}}(a)},
iT:function(a){return function($expr$){try{$expr$.$method$}catch(u){return u.message}}(a)},
iC:function(a,b){return new H.eG(a,b==null?null:b.method)},
hP:function(a,b){var u,t
u=b==null
t=u?null:b.method
return new H.em(a,t,u?null:b.receiver)},
ad:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g
u=new H.hD(a)
if(a==null)return
if(typeof a!=="object")return a
if("dartException" in a)return u.$1(a.dartException)
else if(!("message" in a))return a
t=a.message
if("number" in a&&typeof a.number=="number"){s=a.number
r=s&65535
if((C.f.aR(s,16)&8191)===10)switch(r){case 438:return u.$1(H.hP(H.c(t)+" (Error "+r+")",null))
case 445:case 5007:return u.$1(H.iC(H.c(t)+" (Error "+r+")",null))}}if(a instanceof TypeError){q=$.jn()
p=$.jo()
o=$.jp()
n=$.jq()
m=$.jt()
l=$.ju()
k=$.js()
$.jr()
j=$.jw()
i=$.jv()
h=q.a_(t)
if(h!=null)return u.$1(H.hP(H.A(t),h))
else{h=p.a_(t)
if(h!=null){h.method="call"
return u.$1(H.hP(H.A(t),h))}else{h=o.a_(t)
if(h==null){h=n.a_(t)
if(h==null){h=m.a_(t)
if(h==null){h=l.a_(t)
if(h==null){h=k.a_(t)
if(h==null){h=n.a_(t)
if(h==null){h=j.a_(t)
if(h==null){h=i.a_(t)
g=h!=null}else g=!0}else g=!0}else g=!0}else g=!0}else g=!0}else g=!0}else g=!0
if(g)return u.$1(H.iC(H.A(t),h))}}return u.$1(new H.ft(typeof t==="string"?t:""))}if(a instanceof RangeError){if(typeof t==="string"&&t.indexOf("call stack")!==-1)return new P.d4()
t=function(b){try{return String(b)}catch(f){}return null}(a)
return u.$1(new P.an(!1,null,null,typeof t==="string"?t.replace(/^RangeError:\s*/,""):t))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof t==="string"&&t==="too much recursion")return new P.d4()
return a},
bv:function(a){var u
if(a==null)return new H.dD(a)
u=a.$cachedTrace
if(u!=null)return u
return a.$cachedTrace=new H.dD(a)},
kJ:function(a,b){var u,t,s,r
u=a.length
for(t=0;t<u;t=r){s=t+1
r=s+1
b.N(0,a[t],a[s])}return b},
kQ:function(a,b,c,d,e,f){H.e(a,"$iaU")
switch(H.Z(b)){case 0:return a.$0()
case 1:return a.$1(c)
case 2:return a.$2(c,d)
case 3:return a.$3(c,d,e)
case 4:return a.$4(c,d,e,f)}throw H.d(P.P("Unsupported number of arguments for wrapped closure"))},
bt:function(a,b){var u
H.Z(b)
if(a==null)return
u=a.$identity
if(!!u)return u
u=function(c,d,e){return function(f,g,h,i){return e(c,d,f,g,h,i)}}(a,b,H.kQ)
a.$identity=u
return u},
jN:function(a,b,c,d,e,f,g){var u,t,s,r,q,p,o,n,m,l,k,j,i
u=b[0]
t=u.$callName
if(!!J.K(d).$ib){u.$reflectionInfo=d
s=H.k9(u).r}else s=d
r=e?Object.create(new H.f1().constructor.prototype):Object.create(new H.bC(null,null,null,null).constructor.prototype)
r.$initialize=r.constructor
if(e)q=function static_tear_off(){this.$initialize()}
else{p=$.as
if(typeof p!=="number")return p.B()
$.as=p+1
p=new Function("a,b,c,d"+p,"this.$initialize(a,b,c,d"+p+")")
q=p}r.constructor=q
q.prototype=r
if(!e){o=H.io(a,u,f)
o.$reflectionInfo=d}else{r.$static_name=g
o=u}if(typeof s=="number")n=function(h,a0){return function(){return h(a0)}}(H.kK,s)
else if(typeof s=="function")if(e)n=s
else{m=f?H.il:H.hH
n=function(h,a0){return function(){return h.apply({$receiver:a0(this)},arguments)}}(s,m)}else throw H.d("Error in reflectionInfo.")
r.$S=n
r[t]=o
for(l=o,k=1;k<b.length;++k){j=b[k]
i=j.$callName
if(i!=null){j=e?j:H.io(a,j,f)
r[i]=j}if(k===c){j.$reflectionInfo=d
l=j}}r.$C=l
r.$R=u.$R
r.$D=u.$D
return q},
jK:function(a,b,c,d){var u=H.hH
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,u)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,u)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,u)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,u)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,u)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,u)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,u)}},
io:function(a,b,c){var u,t,s,r,q,p,o
if(c)return H.jM(a,b)
u=b.$stubName
t=b.length
s=a[u]
r=b==null?s==null:b===s
q=!r||t>=27
if(q)return H.jK(t,!r,u,b)
if(t===0){r=$.as
if(typeof r!=="number")return r.B()
$.as=r+1
p="self"+r
r="return function(){var "+p+" = this."
q=$.bD
if(q==null){q=H.dQ("self")
$.bD=q}return new Function(r+H.c(q)+";return "+p+"."+H.c(u)+"();}")()}o="abcdefghijklmnopqrstuvwxyz".split("").splice(0,t).join(",")
r=$.as
if(typeof r!=="number")return r.B()
$.as=r+1
o+=r
r="return function("+o+"){return this."
q=$.bD
if(q==null){q=H.dQ("self")
$.bD=q}return new Function(r+H.c(q)+"."+H.c(u)+"("+o+");}")()},
jL:function(a,b,c,d){var u,t
u=H.hH
t=H.il
switch(b?-1:a){case 0:throw H.d(H.kc("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,u,t)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,u,t)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,u,t)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,u,t)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,u,t)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,u,t)
default:return function(e,f,g,h){return function(){h=[g(this)]
Array.prototype.push.apply(h,arguments)
return e.apply(f(this),h)}}(d,u,t)}},
jM:function(a,b){var u,t,s,r,q,p,o,n
u=$.bD
if(u==null){u=H.dQ("self")
$.bD=u}t=$.ik
if(t==null){t=H.dQ("receiver")
$.ik=t}s=b.$stubName
r=b.length
q=a[s]
p=b==null?q==null:b===q
o=!p||r>=28
if(o)return H.jL(r,!p,s,b)
if(r===1){u="return function(){return this."+H.c(u)+"."+H.c(s)+"(this."+H.c(t)+");"
t=$.as
if(typeof t!=="number")return t.B()
$.as=t+1
return new Function(u+t+"}")()}n="abcdefghijklmnopqrstuvwxyz".split("").splice(0,r-1).join(",")
u="return function("+n+"){return this."+H.c(u)+"."+H.c(s)+"(this."+H.c(t)+", "+n+");"
t=$.as
if(typeof t!=="number")return t.B()
$.as=t+1
return new Function(u+t+"}")()},
i3:function(a,b,c,d,e,f,g){return H.jN(a,b,H.Z(c),d,!!e,!!f,g)},
hH:function(a){return a.a},
il:function(a){return a.c},
dQ:function(a){var u,t,s,r,q
u=new H.bC("self","target","receiver","name")
t=J.ei(Object.getOwnPropertyNames(u))
for(s=t.length,r=0;r<s;++r){q=t[r]
if(u[q]===a)return q}},
A:function(a){if(a==null)return a
if(typeof a==="string")return a
throw H.d(H.aq(a,"String"))},
lL:function(a){if(a==null)return a
if(typeof a==="number")return a
throw H.d(H.aq(a,"double"))},
kW:function(a){if(a==null)return a
if(typeof a==="number")return a
throw H.d(H.aq(a,"num"))},
i1:function(a){if(a==null)return a
if(typeof a==="boolean")return a
throw H.d(H.aq(a,"bool"))},
Z:function(a){if(a==null)return a
if(typeof a==="number"&&Math.floor(a)===a)return a
throw H.d(H.aq(a,"int"))},
ji:function(a,b){throw H.d(H.aq(a,H.bx(H.A(b).substring(2))))},
kY:function(a,b){throw H.d(H.jJ(a,H.bx(H.A(b).substring(2))))},
e:function(a,b){if(a==null)return a
if((typeof a==="object"||typeof a==="function")&&J.K(a)[b])return a
H.ji(a,b)},
a_:function(a,b){var u
if(a!=null)u=(typeof a==="object"||typeof a==="function")&&J.K(a)[b]
else u=!0
if(u)return a
H.kY(a,b)},
hy:function(a){if(a==null)return a
if(!!J.K(a).$ib)return a
throw H.d(H.aq(a,"List<dynamic>"))},
kS:function(a,b){var u
if(a==null)return a
u=J.K(a)
if(!!u.$ib)return a
if(u[b])return a
H.ji(a,b)},
jc:function(a){var u
if("$S" in a){u=a.$S
if(typeof u=="number")return v.types[H.Z(u)]
else return a.$S()}return},
dL:function(a,b){var u
if(a==null)return!1
if(typeof a=="function")return!0
u=H.jc(J.K(a))
if(u==null)return!1
return H.j3(u,null,b,null)},
h:function(a,b){var u,t
if(a==null)return a
if($.hY)return a
$.hY=!0
try{if(H.dL(a,b))return a
u=H.hB(b)
t=H.aq(a,u)
throw H.d(t)}finally{$.hY=!1}},
i4:function(a,b){if(a!=null&&!H.i2(a,b))H.T(H.aq(a,H.hB(b)))
return a},
aq:function(a,b){return new H.fh("TypeError: "+P.e4(a)+": type '"+H.j7(a)+"' is not a subtype of type '"+b+"'")},
jJ:function(a,b){return new H.dR("CastError: "+P.e4(a)+": type '"+H.j7(a)+"' is not a subtype of type '"+b+"'")},
j7:function(a){var u,t
u=J.K(a)
if(!!u.$ibE){t=H.jc(u)
if(t!=null)return H.hB(t)
return"Closure"}return H.bi(a)},
l2:function(a){throw H.d(new P.dW(H.A(a)))},
kc:function(a){return new H.eS(a)},
jd:function(a){return v.getIsolateTag(a)},
a:function(a,b){a.$ti=b
return a},
b4:function(a){if(a==null)return
return a.$ti},
lM:function(a,b,c){return H.bw(a["$a"+H.c(c)],H.b4(b))},
ht:function(a,b,c,d){var u
H.A(c)
H.Z(d)
u=H.bw(a["$a"+H.c(c)],H.b4(b))
return u==null?null:u[d]},
Y:function(a,b,c){var u
H.A(b)
H.Z(c)
u=H.bw(a["$a"+H.c(b)],H.b4(a))
return u==null?null:u[c]},
q:function(a,b){var u
H.Z(b)
u=H.b4(a)
return u==null?null:u[b]},
hB:function(a){return H.b3(a,null)},
b3:function(a,b){var u,t
H.l(b,"$ib",[P.k],"$ab")
if(a==null)return"dynamic"
if(a===-1)return"void"
if(typeof a==="object"&&a!==null&&a.constructor===Array)return H.bx(a[0].name)+H.i0(a,1,b)
if(typeof a=="function")return H.bx(a.name)
if(a===-2)return"dynamic"
if(typeof a==="number"){H.Z(a)
if(b==null||a<0||a>=b.length)return"unexpected-generic-index:"+a
u=b.length
t=u-a-1
if(t<0||t>=u)return H.i(b,t)
return H.c(b[t])}if('func' in a)return H.kt(a,b)
if('futureOr' in a)return"FutureOr<"+H.b3("type" in a?a.type:null,b)+">"
return"unknown-reified-type"},
kt:function(a,b){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c
u=[P.k]
H.l(b,"$ib",u,"$ab")
if("bounds" in a){t=a.bounds
if(b==null){b=H.a([],u)
s=null}else s=b.length
r=b.length
for(q=t.length,p=q;p>0;--p)C.a.h(b,"T"+(r+p))
for(o="<",n="",p=0;p<q;++p,n=", "){o+=n
u=b.length
m=u-p-1
if(m<0)return H.i(b,m)
o=C.c.B(o,b[m])
l=t[p]
if(l!=null&&l!==P.B)o+=" extends "+H.b3(l,b)}o+=">"}else{o=""
s=null}k=!!a.v?"void":H.b3(a.ret,b)
if("args" in a){j=a.args
for(u=j.length,i="",h="",g=0;g<u;++g,h=", "){f=j[g]
i=i+h+H.b3(f,b)}}else{i=""
h=""}if("opt" in a){e=a.opt
i+=h+"["
for(u=e.length,h="",g=0;g<u;++g,h=", "){f=e[g]
i=i+h+H.b3(f,b)}i+="]"}if("named" in a){d=a.named
i+=h+"{"
for(u=H.kI(d),m=u.length,h="",g=0;g<m;++g,h=", "){c=H.A(u[g])
i=i+h+H.b3(d[c],b)+(" "+H.c(c))}i+="}"}if(s!=null)b.length=s
return o+"("+i+") => "+k},
i0:function(a,b,c){var u,t,s,r,q,p
H.l(c,"$ib",[P.k],"$ab")
if(a==null)return""
u=new P.bl("")
for(t=b,s="",r=!0,q="";t<a.length;++t,s=", "){u.a=q+s
p=a[t]
if(p!=null)r=!1
q=u.a+=H.b3(p,c)}return"<"+u.i(0)+">"},
bw:function(a,b){if(a==null)return b
a=a.apply(null,b)
if(a==null)return
if(typeof a==="object"&&a!==null&&a.constructor===Array)return a
if(typeof a=="function")return a.apply(null,b)
return b},
cg:function(a,b,c,d){var u,t
H.A(b)
H.hy(c)
H.A(d)
if(a==null)return!1
u=H.b4(a)
t=J.K(a)
if(t[b]==null)return!1
return H.ja(H.bw(t[d],u),null,c,null)},
l:function(a,b,c,d){H.A(b)
H.hy(c)
H.A(d)
if(a==null)return a
if(H.cg(a,b,c,d))return a
throw H.d(H.aq(a,function(e,f){return e.replace(/[^<,> ]+/g,function(g){return f[g]||g})}(H.bx(b.substring(2))+H.i0(c,0,null),v.mangledGlobalNames)))},
ja:function(a,b,c,d){var u,t
if(c==null)return!0
if(a==null){u=c.length
for(t=0;t<u;++t)if(!H.am(null,null,c[t],d))return!1
return!0}u=a.length
for(t=0;t<u;++t)if(!H.am(a[t],b,c[t],d))return!1
return!0},
lJ:function(a,b,c){return a.apply(b,H.bw(J.K(b)["$a"+H.c(c)],H.b4(b)))},
jf:function(a){var u
if(typeof a==="number")return!1
if('futureOr' in a){u="type" in a?a.type:null
return a==null||a.name==="B"||a.name==="z"||a===-1||a===-2||H.jf(u)}return!1},
i2:function(a,b){var u,t
if(a==null)return b==null||b.name==="B"||b.name==="z"||b===-1||b===-2||H.jf(b)
if(b==null||b===-1||b.name==="B"||b===-2)return!0
if(typeof b=="object"){if('futureOr' in b)if(H.i2(a,"type" in b?b.type:null))return!0
if('func' in b)return H.dL(a,b)}u=J.K(a).constructor
t=H.b4(a)
if(t!=null){t=t.slice()
t.splice(0,0,u)
u=t}return H.am(u,null,b,null)},
v:function(a,b){if(a!=null&&!H.i2(a,b))throw H.d(H.aq(a,H.hB(b)))
return a},
am:function(a,b,c,d){var u,t,s,r,q,p,o,n,m
if(a===c)return!0
if(c==null||c===-1||c.name==="B"||c===-2)return!0
if(a===-2)return!0
if(a==null||a===-1||a.name==="B"||a===-2){if(typeof c==="number")return!1
if('futureOr' in c)return H.am(a,b,"type" in c?c.type:null,d)
return!1}if(typeof a==="number")return!1
if(typeof c==="number")return!1
if(a.name==="z")return!0
if('func' in c)return H.j3(a,b,c,d)
if('func' in a)return c.name==="aU"
u=typeof a==="object"&&a!==null&&a.constructor===Array
t=u?a[0]:a
if('futureOr' in c){s="type" in c?c.type:null
if('futureOr' in a)return H.am("type" in a?a.type:null,b,s,d)
else if(H.am(a,b,s,d))return!0
else{if(!('$i'+"bL" in t.prototype))return!1
r=t.prototype["$a"+"bL"]
q=H.bw(r,u?a.slice(1):null)
return H.am(typeof q==="object"&&q!==null&&q.constructor===Array?q[0]:null,b,s,d)}}p=typeof c==="object"&&c!==null&&c.constructor===Array
o=p?c[0]:c
if(o!==t){n=o.name
if(!('$i'+n in t.prototype))return!1
m=t.prototype["$a"+n]}else m=null
if(!p)return!0
u=u?a.slice(1):null
p=c.slice(1)
return H.ja(H.bw(m,u),b,p,d)},
j3:function(a,b,c,d){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g
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
return H.kV(h,b,g,d)},
kV:function(a,b,c,d){var u,t,s,r
u=Object.getOwnPropertyNames(c)
for(t=u.length,s=0;s<t;++s){r=u[s]
if(!Object.hasOwnProperty.call(a,r))return!1
if(!H.am(c[r],d,a[r],b))return!1}return!0},
lK:function(a,b,c){Object.defineProperty(a,H.A(b),{value:c,enumerable:false,writable:true,configurable:true})},
kT:function(a){var u,t,s,r,q,p
u=H.A($.je.$1(a))
t=$.hr[u]
if(t!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:t,enumerable:false,writable:true,configurable:true})
return t.i}s=$.hx[u]
if(s!=null)return s
r=v.interceptorsByTag[u]
if(r==null){u=H.A($.j9.$2(a,u))
if(u!=null){t=$.hr[u]
if(t!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:t,enumerable:false,writable:true,configurable:true})
return t.i}s=$.hx[u]
if(s!=null)return s
r=v.interceptorsByTag[u]}}if(r==null)return
s=r.prototype
q=u[0]
if(q==="!"){t=H.hA(s)
$.hr[u]=t
Object.defineProperty(a,v.dispatchPropertyName,{value:t,enumerable:false,writable:true,configurable:true})
return t.i}if(q==="~"){$.hx[u]=s
return s}if(q==="-"){p=H.hA(s)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}if(q==="+")return H.jh(a,s)
if(q==="*")throw H.d(P.iU(u))
if(v.leafTags[u]===true){p=H.hA(s)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}else return H.jh(a,s)},
jh:function(a,b){var u=Object.getPrototypeOf(a)
Object.defineProperty(u,v.dispatchPropertyName,{value:J.i9(b,u,null,null),enumerable:false,writable:true,configurable:true})
return b},
hA:function(a){return J.i9(a,!1,null,!!a.$iao)},
kU:function(a,b,c){var u=b.prototype
if(v.leafTags[a]===true)return H.hA(u)
else return J.i9(u,c,null,null)},
kO:function(){if(!0===$.i8)return
$.i8=!0
H.kP()},
kP:function(){var u,t,s,r,q,p,o,n
$.hr=Object.create(null)
$.hx=Object.create(null)
H.kN()
u=v.interceptorsByTag
t=Object.getOwnPropertyNames(u)
if(typeof window!="undefined"){window
s=function(){}
for(r=0;r<t.length;++r){q=t[r]
p=$.jj.$1(q)
if(p!=null){o=H.kU(q,u[q],p)
if(o!=null){Object.defineProperty(p,v.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
s.prototype=p}}}}for(r=0;r<t.length;++r){q=t[r]
if(/^[A-Za-z_]/.test(q)){n=u[q]
u["!"+q]=n
u["~"+q]=n
u["-"+q]=n
u["+"+q]=n
u["*"+q]=n}}},
kN:function(){var u,t,s,r,q,p,o
u=C.R()
u=H.br(C.O,H.br(C.T,H.br(C.z,H.br(C.z,H.br(C.S,H.br(C.P,H.br(C.Q(C.A),u)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){t=dartNativeDispatchHooksTransformer
if(typeof t=="function")t=[t]
if(t.constructor==Array)for(s=0;s<t.length;++s){r=t[s]
if(typeof r=="function")u=r(u)||u}}q=u.getTag
p=u.getUnknownTag
o=u.prototypeForTag
$.je=new H.hu(q)
$.j9=new H.hv(p)
$.jj=new H.hw(o)},
br:function(a,b){return a(b)||b},
jW:function(a,b,c,d){var u,t,s,r
u=b?"m":""
t=c?"":"i"
s=d?"g":""
r=function(e,f){try{return new RegExp(e,f)}catch(q){return q}}(a,u+t+s)
if(r instanceof RegExp)return r
throw H.d(new P.eb("Illegal RegExp pattern ("+String(r)+")",a,null))},
l0:function(a,b,c){var u=a.indexOf(b,c)
return u>=0},
ic:function(a,b,c){var u,t,s
if(b==="")if(a==="")return c
else{u=a.length
for(t=c,s=0;s<u;++s)t=t+a[s]+c
return t.charCodeAt(0)==0?t:t}else return a.replace(new RegExp(b.replace(/[[\]{}()*+?.\\^$|]/g,"\\$&"),'g'),c.replace(/\$/g,"$$$$"))},
eN:function eN(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.x=null},
ff:function ff(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
eG:function eG(a,b){this.a=a
this.b=b},
em:function em(a,b,c){this.a=a
this.b=b
this.c=c},
ft:function ft(a){this.a=a},
hD:function hD(a){this.a=a},
dD:function dD(a){this.a=a
this.b=null},
bE:function bE(){},
f7:function f7(){},
f1:function f1(){},
bC:function bC(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
fh:function fh(a){this.a=a},
dR:function dR(a){this.a=a},
eS:function eS(a){this.a=a},
av:function av(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
eo:function eo(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
cJ:function cJ(a,b){this.a=a
this.$ti=b},
ep:function ep(a,b,c){var _=this
_.a=a
_.b=b
_.d=_.c=null
_.$ti=c},
hu:function hu(a){this.a=a},
hv:function hv(a){this.a=a},
hw:function hw(a){this.a=a},
el:function el(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
hm:function(a){return a},
cd:function(a,b,c){if(a>>>0!==a||a>=c)throw H.d(H.ch(b,a))},
ks:function(a,b,c){var u
if(!(a>>>0!==a))u=b>>>0!==b||a>b||b>c
else u=!0
if(u)throw H.d(H.kH(a,b,c))
return b},
cT:function cT(){},
cQ:function cQ(){},
cR:function cR(){},
cS:function cS(){},
ey:function ey(){},
ez:function ez(){},
eA:function eA(){},
cU:function cU(){},
eB:function eB(){},
c8:function c8(){},
c9:function c9(){},
ca:function ca(){},
cb:function cb(){},
kI:function(a){return J.iu(a?Object.keys(a):[],null)},
kX:function(a){if(typeof dartPrint=="function"){dartPrint(a)
return}if(typeof console=="object"&&typeof console.log!="undefined"){console.log(a)
return}if(typeof window=="object")return
if(typeof print=="function"){print(a)
return}throw"Unable to print message: "+String(a)}},J={
i9:function(a,b,c,d){return{i:a,p:b,e:c,x:d}},
hs:function(a){var u,t,s,r,q
u=a[v.dispatchPropertyName]
if(u==null)if($.i8==null){H.kO()
u=a[v.dispatchPropertyName]}if(u!=null){t=u.p
if(!1===t)return u.i
if(!0===t)return a
s=Object.getPrototypeOf(a)
if(t===s)return u.i
if(u.e===s)throw H.d(P.iU("Return interceptor for "+H.c(t(a,u))))}r=a.constructor
q=r==null?null:r[$.id()]
if(q!=null)return q
q=H.kT(a)
if(q!=null)return q
if(typeof a=="function")return C.U
t=Object.getPrototypeOf(a)
if(t==null)return C.C
if(t===Object.prototype)return C.C
if(typeof r=="function"){Object.defineProperty(r,$.id(),{value:C.v,enumerable:false,writable:true,configurable:true})
return C.v}return C.v},
jV:function(a,b){if(typeof a!=="number"||Math.floor(a)!==a)throw H.d(P.hG(a,"length","is not an integer"))
if(a<0||a>4294967295)throw H.d(P.ah(a,0,4294967295,"length",null))
return J.iu(new Array(a),b)},
iu:function(a,b){return J.ei(H.a(a,[b]))},
ei:function(a){H.hy(a)
a.fixed$length=Array
return a},
K:function(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.cF.prototype
return J.cE.prototype}if(typeof a=="string")return J.be.prototype
if(a==null)return J.ek.prototype
if(typeof a=="boolean")return J.ej.prototype
if(a.constructor==Array)return J.au.prototype
if(typeof a!="object"){if(typeof a=="function")return J.aX.prototype
return a}if(a instanceof P.B)return a
return J.hs(a)},
i5:function(a){if(typeof a=="string")return J.be.prototype
if(a==null)return a
if(a.constructor==Array)return J.au.prototype
if(typeof a!="object"){if(typeof a=="function")return J.aX.prototype
return a}if(a instanceof P.B)return a
return J.hs(a)},
i6:function(a){if(a==null)return a
if(a.constructor==Array)return J.au.prototype
if(typeof a!="object"){if(typeof a=="function")return J.aX.prototype
return a}if(a instanceof P.B)return a
return J.hs(a)},
i7:function(a){if(typeof a=="string")return J.be.prototype
if(a==null)return a
if(!(a instanceof P.B))return J.c3.prototype
return a},
a7:function(a){if(a==null)return a
if(typeof a!="object"){if(typeof a=="function")return J.aX.prototype
return a}if(a instanceof P.B)return a
return J.hs(a)},
O:function(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.K(a).m(a,b)},
jC:function(a,b){if(typeof b==="number")if(a.constructor==Array||typeof a=="string"||H.kR(a,a[v.dispatchPropertyName]))if(b>>>0===b&&b<a.length)return a[b]
return J.i5(a).v(a,b)},
jD:function(a,b,c,d){return J.a7(a).dQ(a,b,c,d)},
dM:function(a,b){return J.a7(a).f2(a,b)},
ih:function(a,b){return J.a7(a).t(a,b)},
hE:function(a,b){return J.i6(a).V(a,b)},
jE:function(a){return J.a7(a).gfA(a)},
b5:function(a){return J.K(a).gD(a)},
bA:function(a){return J.i6(a).gL(a)},
b6:function(a){return J.i5(a).gl(a)},
jF:function(a){return J.a7(a).ghB(a)},
hF:function(a,b){return J.a7(a).ay(a,b)},
ii:function(a){return J.i6(a).ht(a)},
jG:function(a,b,c){return J.i7(a).aM(a,b,c)},
jH:function(a){return J.i7(a).hJ(a)},
a8:function(a){return J.K(a).i(a)},
U:function U(){},
ej:function ej(){},
ek:function ek(){},
cH:function cH(){},
eI:function eI(){},
c3:function c3(){},
aX:function aX(){},
au:function au(a){this.$ti=a},
hN:function hN(a){this.$ti=a},
ae:function ae(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=null
_.$ti=d},
cG:function cG(){},
cF:function cF(){},
cE:function cE(){},
be:function be(){}},P={
kh:function(){var u,t,s
u={}
if(self.scheduleImmediate!=null)return P.kA()
if(self.MutationObserver!=null&&self.document!=null){t=self.document.createElement("div")
s=self.document.createElement("span")
u.a=null
new self.MutationObserver(H.bt(new P.fJ(u),1)).observe(t,{childList:true})
return new P.fI(u,t,s)}else if(self.setImmediate!=null)return P.kB()
return P.kC()},
ki:function(a){self.scheduleImmediate(H.bt(new P.fK(H.h(a,{func:1,ret:-1})),0))},
kj:function(a){self.setImmediate(H.bt(new P.fL(H.h(a,{func:1,ret:-1})),0))},
kk:function(a){P.hS(C.q,H.h(a,{func:1,ret:-1}))},
hS:function(a,b){var u
H.h(b,{func:1,ret:-1})
u=C.f.aq(a.a,1000)
return P.kq(u<0?0:u,b)},
iS:function(a,b){var u
H.h(b,{func:1,ret:-1,args:[P.ax]})
u=C.f.aq(a.a,1000)
return P.kr(u<0?0:u,b)},
kq:function(a,b){var u=new P.dE(!0)
u.dL(a,b)
return u},
kr:function(a,b){var u=new P.dE(!1)
u.dM(a,b)
return u},
kl:function(a,b){var u,t,s
b.a=1
try{a.d1(new P.fT(b),new P.fU(b),null)}catch(s){u=H.ad(s)
t=H.bv(s)
P.kZ(new P.fV(b,u,t))}},
iZ:function(a,b){var u,t
for(;u=a.a,u===2;)a=H.e(a.c,"$ial")
if(u>=4){t=b.bu()
b.a=a.a
b.c=a.c
P.c7(b,t)}else{t=H.e(b.c,"$iaB")
b.a=2
b.c=a
a.cl(t)}},
c7:function(a,b){var u,t,s,r,q,p,o,n,m,l,k,j,i,h
u={}
u.a=a
for(t=a;!0;){s={}
r=t.a===8
if(b==null){if(r){q=H.e(t.c,"$ia1")
t=t.b
p=q.a
o=q.b
t.toString
P.hn(null,null,t,p,o)}return}for(;n=b.a,n!=null;b=n){b.a=null
P.c7(u.a,b)}t=u.a
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
if(k){H.e(m,"$ia1")
t=t.b
p=m.a
o=m.b
t.toString
P.hn(null,null,t,p,o)
return}j=$.J
if(j!=l)$.J=l
else j=null
t=b.c
if(t===8)new P.fZ(u,s,b,r).$0()
else if(p){if((t&1)!==0)new P.fY(s,b,m).$0()}else if((t&2)!==0)new P.fX(u,s,b).$0()
if(j!=null)$.J=j
t=s.b
if(!!J.K(t).$ibL){if(t.a>=4){i=H.e(o.c,"$iaB")
o.c=null
b=o.aQ(i)
o.a=t.a
o.c=t.c
u.a=t
continue}else P.iZ(t,o)
return}}h=b.b
i=H.e(h.c,"$iaB")
h.c=null
b=h.aQ(i)
t=s.a
p=s.b
if(!t){H.v(p,H.q(h,0))
h.a=4
h.c=p}else{H.e(p,"$ia1")
h.a=8
h.c=p}u.a=h
t=h}},
kw:function(a,b){if(H.dL(a,{func:1,args:[P.B,P.a6]}))return H.h(a,{func:1,ret:null,args:[P.B,P.a6]})
if(H.dL(a,{func:1,args:[P.B]}))return H.h(a,{func:1,ret:null,args:[P.B]})
throw H.d(P.hG(a,"onError","Error handler must accept one Object or one Object and a StackTrace as arguments, and return a a valid result"))},
kv:function(){var u,t
for(;u=$.bq,u!=null;){$.cf=null
t=u.b
$.bq=t
if(t==null)$.ce=null
u.a.$0()}},
kz:function(){$.hZ=!0
try{P.kv()}finally{$.cf=null
$.hZ=!1
if($.bq!=null)$.ie().$1(P.jb())}},
j6:function(a){var u=new P.dr(H.h(a,{func:1,ret:-1}))
if($.bq==null){$.ce=u
$.bq=u
if(!$.hZ)$.ie().$1(P.jb())}else{$.ce.b=u
$.ce=u}},
ky:function(a){var u,t,s
H.h(a,{func:1,ret:-1})
u=$.bq
if(u==null){P.j6(a)
$.cf=$.ce
return}t=new P.dr(a)
s=$.cf
if(s==null){t.b=u
$.cf=t
$.bq=t}else{t.b=s.b
s.b=t
$.cf=t
if(t.b==null)$.ce=t}},
kZ:function(a){var u,t
u={func:1,ret:-1}
H.h(a,u)
t=$.J
if(C.h===t){P.hp(null,null,C.h,a)
return}t.toString
P.hp(null,null,t,H.h(t.by(a),u))},
iR:function(a,b){var u,t
u={func:1,ret:-1}
H.h(b,u)
t=$.J
if(t===C.h){t.toString
return P.hS(a,b)}return P.hS(a,H.h(t.by(b),u))},
kg:function(a,b){var u,t,s
u={func:1,ret:-1,args:[P.ax]}
H.h(b,u)
t=$.J
if(t===C.h){t.toString
return P.iS(a,b)}s=t.cz(b,P.ax)
$.J.toString
return P.iS(a,H.h(s,u))},
hn:function(a,b,c,d,e){var u={}
u.a=d
P.ky(new P.ho(u,e))},
j4:function(a,b,c,d,e){var u,t
H.h(d,{func:1,ret:e})
t=$.J
if(t===c)return d.$0()
$.J=c
u=t
try{t=d.$0()
return t}finally{$.J=u}},
j5:function(a,b,c,d,e,f,g){var u,t
H.h(d,{func:1,ret:f,args:[g]})
H.v(e,g)
t=$.J
if(t===c)return d.$1(e)
$.J=c
u=t
try{t=d.$1(e)
return t}finally{$.J=u}},
kx:function(a,b,c,d,e,f,g,h,i){var u,t
H.h(d,{func:1,ret:g,args:[h,i]})
H.v(e,h)
H.v(f,i)
t=$.J
if(t===c)return d.$2(e,f)
$.J=c
u=t
try{t=d.$2(e,f)
return t}finally{$.J=u}},
hp:function(a,b,c,d){var u
H.h(d,{func:1,ret:-1})
u=C.h!==c
if(u)d=!(!u||!1)?c.by(d):c.fB(d,-1)
P.j6(d)},
fJ:function fJ(a){this.a=a},
fI:function fI(a,b,c){this.a=a
this.b=b
this.c=c},
fK:function fK(a){this.a=a},
fL:function fL(a){this.a=a},
dE:function dE(a){this.a=a
this.b=null
this.c=0},
hg:function hg(a,b){this.a=a
this.b=b},
hf:function hf(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
aB:function aB(a,b,c,d,e){var _=this
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
fS:function fS(a,b){this.a=a
this.b=b},
fW:function fW(a,b){this.a=a
this.b=b},
fT:function fT(a){this.a=a},
fU:function fU(a){this.a=a},
fV:function fV(a,b,c){this.a=a
this.b=b
this.c=c},
fZ:function fZ(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
h_:function h_(a){this.a=a},
fY:function fY(a,b,c){this.a=a
this.b=b
this.c=c},
fX:function fX(a,b,c){this.a=a
this.b=b
this.c=c},
dr:function dr(a){this.a=a
this.b=null},
f2:function f2(){},
f4:function f4(a,b){this.a=a
this.b=b},
f5:function f5(a,b){this.a=a
this.b=b},
bY:function bY(){},
f3:function f3(){},
ax:function ax(){},
a1:function a1(a,b){this.a=a
this.b=b},
hj:function hj(){},
ho:function ho(a,b){this.a=a
this.b=b},
h4:function h4(){},
h6:function h6(a,b,c){this.a=a
this.b=b
this.c=c},
h5:function h5(a,b){this.a=a
this.b=b},
h7:function h7(a,b,c){this.a=a
this.b=b
this.c=c},
jY:function(a,b,c){H.hy(a)
return H.l(H.kJ(a,new H.av([b,c])),"$iiv",[b,c],"$aiv")},
jX:function(a,b){return new H.av([a,b])},
cK:function(a,b,c,d){return new P.h2([d])},
hX:function(){var u=Object.create(null)
u["<non-identifier-key>"]=u
delete u["<non-identifier-key>"]
return u},
kp:function(a,b,c){var u=new P.dx(a,b,[c])
u.c=a.e
return u},
jT:function(a,b,c){var u,t
if(P.i_(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}u=H.a([],[P.k])
t=$.ck()
C.a.h(t,a)
try{P.ku(a,u)}finally{if(0>=t.length)return H.i(t,-1)
t.pop()}t=P.iP(b,H.kS(u,"$in"),", ")+c
return t.charCodeAt(0)==0?t:t},
hL:function(a,b,c){var u,t,s
if(P.i_(a))return b+"..."+c
u=new P.bl(b)
t=$.ck()
C.a.h(t,a)
try{s=u
s.a=P.iP(s.a,a,", ")}finally{if(0>=t.length)return H.i(t,-1)
t.pop()}u.a+=c
t=u.a
return t.charCodeAt(0)==0?t:t},
i_:function(a){var u,t
for(u=0;t=$.ck(),u<t.length;++u)if(a===t[u])return!0
return!1},
ku:function(a,b){var u,t,s,r,q,p,o,n,m,l
H.l(b,"$ib",[P.k],"$ab")
u=a.gL(a)
t=0
s=0
while(!0){if(!(t<80||s<3))break
if(!u.u())return
r=H.c(u.gG())
C.a.h(b,r)
t+=r.length+2;++s}if(!u.u()){if(s<=5)return
if(0>=b.length)return H.i(b,-1)
q=b.pop()
if(0>=b.length)return H.i(b,-1)
p=b.pop()}else{o=u.gG();++s
if(!u.u()){if(s<=4){C.a.h(b,H.c(o))
return}q=H.c(o)
if(0>=b.length)return H.i(b,-1)
p=b.pop()
t+=q.length+2}else{n=u.gG();++s
for(;u.u();o=n,n=m){m=u.gG();++s
if(s>100){while(!0){if(!(t>75&&s>3))break
if(0>=b.length)return H.i(b,-1)
t-=b.pop().length+2;--s}C.a.h(b,"...")
return}}p=H.c(o)
q=H.c(n)
t+=q.length+p.length+4}}if(s>b.length+2){t+=5
l="..."}else l=null
while(!0){if(!(t>80&&b.length>3))break
if(0>=b.length)return H.i(b,-1)
t-=b.pop().length+2
if(l==null){t+=5
l="..."}}if(l!=null)C.a.h(b,l)
C.a.h(b,p)
C.a.h(b,q)},
iw:function(a,b){var u,t,s
u=P.cK(null,null,null,b)
for(t=a.length,s=0;s<a.length;a.length===t||(0,H.x)(a),++s)u.h(0,H.v(a[s],b))
return u},
ix:function(a){var u,t
u={}
if(P.i_(a))return"{...}"
t=new P.bl("")
try{C.a.h($.ck(),a)
t.a+="{"
u.a=!0
a.S(0,new P.et(u,t))
t.a+="}"}finally{u=$.ck()
if(0>=u.length)return H.i(u,-1)
u.pop()}u=t.a
return u.charCodeAt(0)==0?u:u},
h2:function h2(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
bp:function bp(a){this.a=a
this.c=this.b=null},
dx:function dx(a,b,c){var _=this
_.a=a
_.b=b
_.d=_.c=null
_.$ti=c},
eq:function eq(){},
L:function L(){},
es:function es(){},
et:function et(a,b){this.a=a
this.b=b},
bg:function bg(){},
h9:function h9(){},
dy:function dy(){},
bF:function bF(){},
bG:function bG(){},
e2:function e2(){},
eg:function eg(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
ef:function ef(a){this.a=a},
fv:function fv(a){this.a=a},
fw:function fw(){},
hh:function hh(a){this.b=this.a=0
this.c=a},
jS:function(a){if(a instanceof H.bE)return a.i(0)
return"Instance of '"+H.bi(a)+"'"},
jZ:function(a,b,c,d){var u,t
H.v(b,d)
u=J.jV(a,d)
if(a!==0&&!0)for(t=0;t<u.length;++t)C.a.N(u,t,b)
return H.l(u,"$ib",[d],"$ab")},
k_:function(a,b,c){var u,t,s
u=[c]
t=H.a([],u)
for(s=a.gL(a);s.u();)C.a.h(t,H.v(s.gG(),c))
if(b)return t
return H.l(J.ei(t),"$ib",u,"$ab")},
hR:function(a,b,c){var u,t
u=P.w
H.l(a,"$in",[u],"$an")
if(a.constructor===Array){H.l(a,"$iau",[u],"$aau")
t=a.length
c=P.iJ(b,c,t,null,null,null)
return H.iI(b>0||c<t?C.a.ds(a,b,c):a)}return P.ke(a,b,c)},
ke:function(a,b,c){var u,t,s
H.l(a,"$in",[P.w],"$an")
u=J.bA(a)
for(t=0;t<b;++t)if(!u.u())throw H.d(P.ah(b,0,t,null,null))
s=[]
for(;u.u();)s.push(u.gG())
return H.iI(s)},
ka:function(a,b,c){return new H.el(a,H.jW(a,!1,!0,!1))},
iP:function(a,b,c){var u=J.bA(b)
if(!u.u())return a
if(c.length===0){do a+=H.c(u.gG())
while(u.u())}else{a+=H.c(u.gG())
for(;u.u();)a=a+c+H.c(u.gG())}return a},
j2:function(a,b,c,d){var u,t,s,r,q,p
H.l(a,"$ib",[P.w],"$ab")
if(c===C.w){u=$.jB().b
u=u.test(b)}else u=!1
if(u)return b
t=C.H.fJ(H.v(b,H.Y(c,"bF",0)))
for(u=t.length,s=0,r="";s<u;++s){q=t[s]
if(q<128){p=q>>>4
if(p>=8)return H.i(a,p)
p=(a[p]&1<<(q&15))!==0}else p=!1
if(p)r+=H.hQ(q)
else r=r+"%"+"0123456789ABCDEF"[q>>>4&15]+"0123456789ABCDEF"[q&15]}return r.charCodeAt(0)==0?r:r},
jO:function(a){var u,t
u=Math.abs(a)
t=a<0?"-":""
if(u>=1000)return""+a
if(u>=100)return t+"0"+u
if(u>=10)return t+"00"+u
return t+"000"+u},
jP:function(a){if(a>=100)return""+a
if(a>=10)return"0"+a
return"00"+a},
ct:function(a){if(a>=10)return""+a
return"0"+a},
iq:function(a,b,c,d,e,f){return new P.aS(864e8*a+36e8*b+6e7*e+1e6*f+1000*d+c)},
e4:function(a){if(typeof a==="number"||typeof a==="boolean"||null==a)return J.a8(a)
if(typeof a==="string")return JSON.stringify(a)
return P.jS(a)},
jI:function(a){return new P.an(!1,null,null,a)},
hG:function(a,b,c){return new P.an(!0,a,b,c)},
eL:function(a,b,c){return new P.bj(null,null,!0,a,b,"Value not in range")},
ah:function(a,b,c,d,e){return new P.bj(b,c,!0,a,d,"Invalid value")},
iJ:function(a,b,c,d,e,f){if(0>a||a>c)throw H.d(P.ah(a,0,c,"start",f))
if(b!=null){if(a>b||b>c)throw H.d(P.ah(b,a,c,"end",f))
return b}return c},
bd:function(a,b,c,d,e){var u=H.Z(e==null?J.b6(b):e)
return new P.eh(b,u,!0,a,c,"Index out of range")},
aj:function(a){return new P.fu(a)},
iU:function(a){return new P.fs(a)},
iO:function(a){return new P.bX(a)},
aR:function(a){return new P.dU(a)},
P:function(a){return new P.du(a)},
ib:function(a){H.kX(a)},
C:function C(){},
a3:function a3(a,b){this.a=a
this.b=b},
t:function t(){},
aS:function aS(a){this.a=a},
dZ:function dZ(){},
e_:function e_(){},
aT:function aT(){},
cX:function cX(){},
an:function an(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
bj:function bj(a,b,c,d,e,f){var _=this
_.e=a
_.f=b
_.a=c
_.b=d
_.c=e
_.d=f},
eh:function eh(a,b,c,d,e,f){var _=this
_.e=a
_.f=b
_.a=c
_.b=d
_.c=e
_.d=f},
fu:function fu(a){this.a=a},
fs:function fs(a){this.a=a},
bX:function bX(a){this.a=a},
dU:function dU(a){this.a=a},
eH:function eH(){},
d4:function d4(){},
dW:function dW(a){this.a=a},
du:function du(a){this.a=a},
eb:function eb(a,b,c){this.a=a
this.b=b
this.c=c},
aU:function aU(){},
w:function w(){},
n:function n(){},
at:function at(){},
b:function b(){},
z:function z(){},
a0:function a0(){},
B:function B(){},
a6:function a6(){},
k:function k(){},
bl:function bl(a){this.a=a},
kG:function(a){var u,t
u=J.K(a)
if(!!u.$iaV){t=u.gcF(a)
if(t.constructor===Array)if(typeof CanvasPixelArray!=="undefined"){t.constructor=CanvasPixelArray
t.BYTES_PER_ELEMENT=1}return a}return new P.dH(a.data,a.height,a.width)},
kF:function(a){if(a instanceof P.dH)return{data:a.a,height:a.b,width:a.c}
return a},
kE:function(a,b){var u={}
a.S(0,new P.hq(u))
return u},
dH:function dH(a,b,c){this.a=a
this.b=b
this.c=c},
hq:function hq(a){this.a=a},
e7:function e7(a,b){this.a=a
this.b=b},
e8:function e8(){},
e9:function e9(){},
h1:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
ko:function(a){a=536870911&a+((67108863&a)<<3)
a^=a>>>11
return 536870911&a+((16383&a)<<15)},
h3:function h3(){},
ai:function ai(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=e},
bU:function bU(){},
j:function j(){},
cn:function cn(){},
cz:function cz(){},
d_:function d_(){},
bk:function bk(){},
d2:function d2(){},
d8:function d8(){},
de:function de(){}},W={
ij:function(a){var u=document.createElement("a")
return u},
hI:function(a,b){var u=document.createElement("canvas")
return u},
jQ:function(a,b,c){var u,t
u=document.body
t=(u&&C.l).Z(u,a,b,c)
t.toString
u=W.u
u=new H.c4(new W.a2(t),H.h(new W.e1(),{func:1,ret:P.C,args:[u]}),[u])
return H.e(u.gai(u),"$iD")},
jR:function(a){H.e(a,"$iba")
return"wheel"},
bJ:function(a){var u,t,s
u="element tag unavailable"
try{t=J.jF(a)
if(typeof t==="string")u=a.tagName}catch(s){H.ad(s)}return u},
h0:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
j0:function(a,b,c,d){var u,t
u=W.h0(W.h0(W.h0(W.h0(0,a),b),c),d)
t=536870911&u+((67108863&u)<<3)
t^=t>>>11
return 536870911&t+((16383&t)<<15)},
S:function(a,b,c,d,e){var u,t
u=W.j8(new W.fR(c),W.f)
t=u!=null
if(t&&!0){H.h(u,{func:1,args:[W.f]})
if(t)J.jD(a,b,u,!1)}return new W.fQ(a,b,u,!1,[e])},
j_:function(a){var u,t
u=W.ij(null)
t=window.location
u=new W.b2(new W.h8(u,t))
u.dH(a)
return u},
km:function(a,b,c,d){H.e(a,"$iD")
H.A(b)
H.A(c)
H.e(d,"$ib2")
return!0},
kn:function(a,b,c,d){var u,t,s
H.e(a,"$iD")
H.A(b)
H.A(c)
u=H.e(d,"$ib2").a
t=u.a
t.href=c
s=t.hostname
u=u.b
if(!(s==u.hostname&&t.port==u.port&&t.protocol==u.protocol))if(s==="")if(t.port===""){u=t.protocol
u=u===":"||u===""}else u=!1
else u=!1
else u=!0
return u},
j1:function(){var u,t,s,r,q
u=P.k
t=P.iw(C.r,u)
s=H.q(C.r,0)
r=H.h(new W.he(),{func:1,ret:u,args:[s]})
q=H.a(["TEMPLATE"],[u])
t=new W.hd(t,P.cK(null,null,null,u),P.cK(null,null,null,u),P.cK(null,null,null,u),null)
t.dK(null,new H.ew(C.r,r,[s,u]),q,null)
return t},
j8:function(a,b){var u
H.h(a,{func:1,ret:-1,args:[b]})
u=$.J
if(u===C.h)return a
return u.cz(a,b)},
p:function p(){},
cl:function cl(){},
dN:function dN(){},
bB:function bB(){},
aO:function aO(){},
b7:function b7(){},
b8:function b8(){},
aP:function aP(){},
bH:function bH(){},
dV:function dV(){},
af:function af(){},
bI:function bI(){},
dY:function dY(){},
cu:function cu(){},
cv:function cv(){},
fN:function fN(a,b){this.a=a
this.b=b},
D:function D(){},
e1:function e1(){},
f:function f(){},
ba:function ba(){},
ea:function ea(){},
cA:function cA(){},
bc:function bc(){},
cB:function cB(){},
aV:function aV(){},
bN:function bN(){},
aw:function aw(){},
cL:function cL(){},
bQ:function bQ(){},
V:function V(){},
a2:function a2(a){this.a=a},
u:function u(){},
bS:function bS(){},
d0:function d0(){},
eT:function eT(){},
bm:function bm(){},
d5:function d5(){},
d6:function d6(){},
f6:function f6(){},
bZ:function bZ(){},
ay:function ay(){},
ap:function ap(){},
fe:function fe(){},
b1:function b1(){},
fF:function fF(){},
aA:function aA(){},
c5:function c5(){},
c6:function c6(){},
dt:function dt(){},
dz:function dz(){},
fM:function fM(){},
fO:function fO(a){this.a=a},
fP:function fP(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
hW:function hW(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
fQ:function fQ(a,b,c,d,e){var _=this
_.a=0
_.b=a
_.c=b
_.d=c
_.e=d
_.$ti=e},
fR:function fR(a){this.a=a},
b2:function b2(a){this.a=a},
a9:function a9(){},
cV:function cV(a){this.a=a},
eD:function eD(a){this.a=a},
eC:function eC(a,b,c){this.a=a
this.b=b
this.c=c},
dC:function dC(){},
ha:function ha(){},
hb:function hb(){},
hd:function hd(a,b,c,d,e){var _=this
_.e=a
_.a=b
_.b=c
_.c=d
_.d=e},
he:function he(){},
hc:function hc(){},
cy:function cy(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=null
_.$ti=d},
ac:function ac(){},
h8:function h8(a,b){this.a=a
this.b=b},
dI:function dI(a){this.a=a},
hi:function hi(a){this.a=a},
ds:function ds(){},
dv:function dv(){},
dw:function dw(){},
dA:function dA(){},
dB:function dB(){},
dF:function dF(){},
dG:function dG(){},
dJ:function dJ(){},
dK:function dK(){}},O={
ip:function(a){var u=new O.Q([a])
u.bV(a)
return u},
Q:function Q(a){var _=this
_.d=_.c=_.b=_.a=null
_.$ti=a},
bP:function bP(){this.b=this.a=null},
cW:function cW(){var _=this
_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
bn:function bn(){}},E={
kb:function(a,b){var u=new E.eO(a,b)
u.dB(a,b)
return u},
kf:function(a,b,c,d,e){var u,t,s,r
u=J.K(a)
if(!!u.$ib7)return E.iQ(a,!0,!0,!0,!1)
t=W.hI(null,null)
s=t.style
s.width="100%"
s.height="100%"
u.gcC(a).h(0,t)
r=E.iQ(t,!0,!0,!0,!1)
r.a=a
return r},
iQ:function(a,b,c,d,e){var u,t,s,r,q,p,o,n,m,l,k,j
u=new E.da()
t=P.jY(["alpha",!0,"depth",!0,"stencil",!1,"antialias",!0,"premultipliedAlpha",!0,"preserveDrawingBuffer",!1],P.k,null)
s=C.m.b1(a,"webgl",t)
s=H.e(s==null?C.m.b1(a,"experimental-webgl",t):s,"$ibk")
if(s==null)H.T(P.P("Failed to get the rendering context for WebGL."))
u.b=a
u.a=a
u.c=s
u.e=E.kb(s,a)
r=new T.f8(s)
r.b=H.Z((s&&C.b).bQ(s,3379))
r.c=H.Z(C.b.bQ(s,34076))
r.d=0
r.e=0
u.f=r
r=new X.dk(a)
q=new X.en()
q.c=new X.ab(!1,!1,!1)
q.sf_(P.cK(null,null,null,P.w))
r.b=q
q=new X.ex(r)
q.f=0
q.r=V.b_()
q.x=V.b_()
q.Q=1
q.ch=1
r.c=q
q=new X.er(r)
q.r=0
q.x=V.b_()
q.Q=1
q.ch=1
q.cx=1
q.cy=1
r.d=q
q=new X.fd(r)
q.e=0
q.f=V.b_()
q.r=V.b_()
r.e=q
r.f=!1
r.r=!1
r.x=!1
r.y=null
r.se1(H.a([],[[P.bY,P.B]]))
q=r.z
p=document
o=W.V
n={func:1,ret:-1,args:[o]};(q&&C.a).h(q,W.S(p,"contextmenu",H.h(r.geu(),n),!1,o))
q=r.z
m=W.f
l={func:1,ret:-1,args:[m]};(q&&C.a).h(q,W.S(a,"focus",H.h(r.geA(),l),!1,m))
q=r.z;(q&&C.a).h(q,W.S(a,"blur",H.h(r.gen(),l),!1,m))
q=r.z
k=W.aw
j={func:1,ret:-1,args:[k]};(q&&C.a).h(q,W.S(p,"keyup",H.h(r.geE(),j),!1,k))
q=r.z;(q&&C.a).h(q,W.S(p,"keydown",H.h(r.geC(),j),!1,k))
k=r.z;(k&&C.a).h(k,W.S(a,"mousedown",H.h(r.geH(),n),!1,o))
k=r.z;(k&&C.a).h(k,W.S(a,"mouseup",H.h(r.geL(),n),!1,o))
k=r.z;(k&&C.a).h(k,W.S(a,"mousemove",H.h(r.geJ(),n),!1,o))
k=r.z
j=W.aA;(k&&C.a).h(k,W.S(a,H.A(W.jR(a)),H.h(r.geN(),{func:1,ret:-1,args:[j]}),!1,j))
j=r.z;(j&&C.a).h(j,W.S(p,"mousemove",H.h(r.gew(),n),!1,o))
j=r.z;(j&&C.a).h(j,W.S(p,"mouseup",H.h(r.gey(),n),!1,o))
o=r.z;(o&&C.a).h(o,W.S(p,"pointerlockchange",H.h(r.geP(),l),!1,m))
m=r.z
l=W.ap
p={func:1,ret:-1,args:[l]};(m&&C.a).h(m,W.S(a,"touchstart",H.h(r.geY(),p),!1,l))
m=r.z;(m&&C.a).h(m,W.S(a,"touchend",H.h(r.geU(),p),!1,l))
m=r.z;(m&&C.a).h(m,W.S(a,"touchmove",H.h(r.geW(),p),!1,l))
u.r=r
u.Q=!0
u.ch=!1
u.cx=new P.a3(Date.now(),!1)
u.cy=0
u.cm()
return u},
dP:function dP(){},
a4:function a4(){var _=this
_.fx=_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
eO:function eO(a,b){var _=this
_.a=a
_.b=b
_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=null},
eP:function eP(a){this.a=a},
eQ:function eQ(a){this.a=a},
eR:function eR(a){this.a=a},
da:function da(){var _=this
_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
fa:function fa(a){this.a=a}},Z={
hV:function(a,b,c){var u
H.l(c,"$ib",[P.w],"$ab")
u=a.createBuffer()
C.b.a7(a,b,u)
C.b.cB(a,b,new Int16Array(H.hm(c)),35044)
C.b.a7(a,b,null)
return new Z.dq(b,u)},
ak:function(a){return new Z.aI(a)},
dq:function dq(a,b){this.a=a
this.b=b},
co:function co(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
fG:function fG(a){this.a=a},
cp:function cp(a,b,c){var _=this
_.a=a
_.b=null
_.c=b
_.d=c},
aW:function aW(a,b,c){this.a=a
this.b=b
this.c=c},
aI:function aI(a){this.a=a}},D={
H:function(){var u=new D.bK()
u.sab(null)
u.saP(null)
u.c=null
u.d=0
return u},
dS:function dS(){},
bK:function bK(){var _=this
_.d=_.c=_.b=_.a=null},
e5:function e5(a){this.a=a},
e6:function e6(a){this.a=a},
r:function r(a){this.a=a
this.b=null},
cC:function cC(a,b,c,d){var _=this
_.c=a
_.d=b
_.a=c
_.b=null
_.$ti=d},
cD:function cD(a,b,c,d){var _=this
_.c=a
_.d=b
_.a=c
_.b=null
_.$ti=d},
E:function E(a,b,c,d,e){var _=this
_.c=a
_.d=b
_.e=c
_.a=d
_.b=null
_.$ti=e},
jg:function(){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1
u=V.kd("Test 030",!0)
t=W.hI(null,null)
t.className="pageLargeCanvas"
t.id="testCanvas"
C.e.t(u.a,t)
s=[P.k]
u.cu(H.a(["A test of the Normal shader for dynamically rendering normal maps."],s))
u.cu(H.a(["\xab[Back to Tests|../]"],s))
r=C.y.dd(document,"testCanvas")
if(r==null)H.T(P.P("Failed to find an element with the identifier, testCanvas."))
q=E.kf(r,!0,!0,!0,!1)
p=new E.a4()
p.a=""
p.b=!0
s=E.a4
p.sdV(0,O.ip(s))
p.y.b3(p.ghd(),p.ghg())
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
p.sbS(0,null)
p.saH(null)
o=F.iN()
F.cc(o,null,null,1,1,1,0,0,1)
F.cc(o,null,null,1,1,0,1,0,3)
F.cc(o,null,null,1,1,0,0,1,2)
F.cc(o,null,null,1,1,-1,0,0,0)
F.cc(o,null,null,1,1,0,-1,0,0)
F.cc(o,null,null,1,1,0,0,-1,3)
o.at()
p.sbS(0,o)
n=new U.bM()
n.bV(U.W)
n.b3(n.gel(),n.geS())
n.e=null
n.f=V.cP()
n.r=0
m=q.r
l=new U.dm()
k=U.hJ()
k.sbP(0,!0)
k.sbJ(6.283185307179586)
k.sbL(0)
k.sX(0,0)
k.sbK(100)
k.sM(0)
k.sbE(0.5)
l.b=k
j=l.gao()
k.gn().h(0,j)
k=U.hJ()
k.sbP(0,!0)
k.sbJ(6.283185307179586)
k.sbL(0)
k.sX(0,0)
k.sbK(100)
k.sM(0)
k.sbE(0.5)
l.c=k
k.gn().h(0,j)
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
i=new X.ab(!1,!1,!1)
h=l.d
l.d=i
k=[X.ab]
j=new D.E("modifiers",h,i,l,k)
j.b=!0
l.J(j)
j=l.f
if(j!==!1){l.f=!1
j=new D.E("invertX",j,!1,l,[P.C])
j.b=!0
l.J(j)}j=l.r
if(j!==!1){l.r=!1
j=new D.E("invertY",j,!1,l,[P.C])
j.b=!0
l.J(j)}l.aE(m)
n.h(0,l)
m=q.r
l=new U.dl()
j=U.hJ()
j.sbP(0,!0)
j.sbJ(6.283185307179586)
j.sbL(0)
j.sX(0,0)
j.sbK(100)
j.sM(0)
j.sbE(0.2)
l.b=j
j.gn().h(0,l.gao())
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
i=new X.ab(!0,!1,!1)
h=l.c
l.c=i
j=new D.E("modifiers",h,i,l,k)
j.b=!0
l.J(j)
l.aE(m)
n.h(0,l)
m=q.r
l=new U.dn()
l.c=0.01
l.d=0
l.e=0
i=new X.ab(!1,!1,!1)
l.b=i
k=new D.E("modifiers",null,i,l,k)
k.b=!0
l.J(k)
l.aE(m)
n.h(0,l)
p.saH(n)
g=new O.cW()
n=$.iy
if(n==null){n=new V.cO(1,0,0,0,1,0,0,0,1)
$.iy=n}g.b=n
g.c=V.cP()
g.d=C.i
g.cn(null)
g.co(null)
g.c_()
g.r=null
n=q.f
m=n.a
f=m.createTexture()
C.b.as(m,34067,f)
C.b.aY(m,34067,10242,10497)
C.b.aY(m,34067,10243,10497)
C.b.aY(m,34067,10241,9729)
C.b.aY(m,34067,10240,9729)
C.b.as(m,34067,null)
e=new T.d9()
e.a=0
e.b=f
e.c=!1
e.d=0
n.an(e,f,"../resources/diceBumpMap/posx.png",34069,!1,!1)
n.an(e,f,"../resources/diceBumpMap/negx.png",34070,!1,!1)
n.an(e,f,"../resources/diceBumpMap/posy.png",34071,!1,!1)
n.an(e,f,"../resources/diceBumpMap/negy.png",34072,!1,!1)
n.an(e,f,"../resources/diceBumpMap/posz.png",34073,!1,!1)
n.an(e,f,"../resources/diceBumpMap/negz.png",34074,!1,!1)
if(g.d!==C.j){g.d=C.j
g.cn(null)
g.a=null}g.co(e)
d=X.it(!0,!0,!1,null,2000,null,0)
c=new V.aD(0.5,0.5,1,1)
if(!d.a.m(0,c)){h=d.a
d.a=c
n=new D.E("color",h,c,d,[V.aD])
n.b=!0
m=d.x
if(m!=null)m.A(n)}b=new M.cw()
b.sdI(0,O.ip(s))
b.d.b3(b.gep(),b.ger())
b.e=null
b.f=null
b.r=null
b.x=null
a=X.it(!0,!0,!1,null,2000,null,0)
a0=new X.cY()
a0.c=1.0471975511965976
a0.d=0.1
a0.e=2000
a0.saH(null)
s=a0.c
if(!(Math.abs(s-1.0471975511965976)<$.G().a)){a0.c=1.0471975511965976
s=new D.E("fov",s,1.0471975511965976,a0,[P.t])
s.b=!0
a0.ak(s)}s=a0.d
if(!(Math.abs(s-0.1)<$.G().a)){a0.d=0.1
s=new D.E("near",s,0.1,a0,[P.t])
s.b=!0
a0.ak(s)}s=a0.e
if(!(Math.abs(s-2000)<$.G().a)){a0.e=2000
s=new D.E("far",s,2000,a0,[P.t])
s.b=!0
a0.ak(s)}s=b.a
if(s!==a0){if(s!=null)s.gn().P(0,b.ga3())
h=b.a
b.a=a0
a0.gn().h(0,b.ga3())
s=new D.E("camera",h,b.a,b,[X.cr])
s.b=!0
b.a9(s)}b.sd_(0,a)
b.sd0(null)
b.sd0(g)
b.sd_(0,d)
b.d.h(0,p)
s=b.a
a1=V.aG(1,0,0,0,0,1,0,0,0,0,1,5,0,0,0,1)
n=new U.cs()
n.a=a1
s.saH(n)
s=q.d
if(s!==b){if(s!=null)s.gn().P(0,q.gbW())
q.d=b
b.gn().h(0,q.gbW())
q.bX()}s=q.z
if(s==null){s=D.H()
q.z=s}n={func:1,ret:-1,args:[D.r]}
m=H.h(new D.hz(u,g),n)
if(s.b==null)s.saP(H.a([],[n]))
s=s.b;(s&&C.a).h(s,m)
V.l_(q)},
hz:function hz(a,b){this.a=a
this.b=b}},X={cq:function cq(a,b){this.a=a
this.b=b},cI:function cI(a,b){this.a=a
this.b=b},en:function en(){var _=this
_.d=_.c=_.b=_.a=null},cM:function cM(a,b,c,d,e,f){var _=this
_.x=a
_.y=b
_.c=c
_.d=d
_.e=e
_.a=f
_.b=null},er:function er(a){var _=this
_.a=a
_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},ab:function ab(a,b,c){this.a=a
this.b=b
this.c=c},aH:function aH(a,b,c,d,e,f,g,h,i){var _=this
_.x=a
_.y=b
_.z=c
_.Q=d
_.ch=e
_.c=f
_.d=g
_.e=h
_.a=i
_.b=null},ex:function ex(a){var _=this
_.a=a
_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},bR:function bR(a,b,c,d,e){var _=this
_.x=a
_.c=b
_.d=c
_.e=d
_.a=e
_.b=null},eK:function eK(){},dc:function dc(a,b,c,d,e,f,g,h,i){var _=this
_.x=a
_.y=b
_.z=c
_.Q=d
_.ch=e
_.c=f
_.d=g
_.e=h
_.a=i
_.b=null},fd:function fd(a){var _=this
_.a=a
_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},dk:function dk(a){var _=this
_.a=a
_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},
it:function(a,b,c,d,e,f,g){var u,t
u=new X.ec()
t=new V.aD(0,0,0,1)
u.a=t
u.b=!0
u.c=e
u.d=!0
u.e=g
u.f=!1
t=$.iL
if(t==null){t=V.iK(0,0,1,1)
$.iL=t}u.r=t
return u},
cr:function cr(){},
ec:function ec(){var _=this
_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
cY:function cY(){var _=this
_.f=_.e=_.d=_.c=_.b=_.a=null},
d7:function d7(){}},V={
l3:function(a,b,c){var u
if(c<=b)return b
u=c-b
a=C.d.di(a-b,u)
return(a<0?a+u:a)+b},
M:function(a,b,c){if(a==null)return C.c.a0("null",c)
return C.c.a0(C.d.d2(Math.abs(a-0)<$.G().a?0:a,b),c+b+1)},
bu:function(a,b,c){var u,t,s,r,q,p
H.l(a,"$ib",[P.t],"$ab")
u=H.a([],[P.k])
for(t=a.length,s=0,r=0;r<a.length;a.length===t||(0,H.x)(a),++r){q=V.M(a[r],b,c)
s=Math.max(s,q.length)
C.a.h(u,q)}for(p=u.length-1;p>=0;--p){if(p>=u.length)return H.i(u,p)
C.a.N(u,p,C.c.a0(u[p],s))}return u},
ia:function(a,b){return C.d.hG(Math.pow(b,C.N.bF(Math.log(H.kD(a))/Math.log(b))))},
cP:function(){var u=$.iz
if(u==null){u=V.aG(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1)
$.iz=u}return u},
aG:function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){return new V.aY(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p)},
b_:function(){var u=$.iF
if(u==null){u=new V.X(0,0)
$.iF=u}return u},
iK:function(a,b,c,d){if(c<0){a+=c
c=-c}if(d<0){b+=d
d=-d}return new V.d1(a,b,c,d)},
dp:function(){var u=$.iY
if(u==null){u=new V.N(0,0,0)
$.iY=u}return u},
aD:function aD(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
e3:function e3(a){this.a=a},
cO:function cO(a,b,c,d,e,f,g,h,i){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.x=h
_.y=i},
aY:function aY(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){var _=this
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
X:function X(a,b){this.a=a
this.b=b},
b0:function b0(a,b,c){this.a=a
this.b=b
this.c=c},
cZ:function cZ(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
d1:function d1(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
F:function F(a,b){this.a=a
this.b=b},
N:function N(a,b,c){this.a=a
this.b=b
this.c=c},
I:function(a,b){var u,t,s,r
if(a.length!==1||b.length!==1)throw H.d(P.P("The given low and high character strings for a RangeMatcher must have one and only one characters."))
u=C.c.al(a,0)
t=C.c.al(b,0)
s=new V.eM()
if(u>t){r=t
t=u
u=r}s.a=u
s.b=t
return s},
o:function(a){var u=new V.eU()
u.dC(a)
return u},
fc:function(){var u,t
u=new V.fb()
t=P.k
u.sff(new H.av([t,V.bW]))
u.sfj(new H.av([t,V.c0]))
u.c=null
return u},
aC:function aC(){},
aa:function aa(){},
cN:function cN(){},
a5:function a5(){this.a=null},
eM:function eM(){this.b=this.a=null},
eU:function eU(){this.a=null},
bW:function bW(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
db:function db(a,b,c){this.a=a
this.b=b
this.c=c},
c0:function c0(a,b){this.a=a
this.b=b
this.c=null},
fb:function fb(){this.c=this.b=this.a=null},
c1:function c1(a){this.b=a
this.a=this.c=null},
l_:function(a){P.kg(C.J,new V.hC(a))},
kd:function(a,b){var u=new V.eY()
u.dE(a,!0)
return u},
aQ:function aQ(){},
hC:function hC(a){this.a=a},
dX:function dX(a){var _=this
_.a=a
_.d=_.c=_.b=null},
ed:function ed(a){var _=this
_.a=a
_.d=_.c=_.b=null},
ee:function ee(a){var _=this
_.a=a
_.d=_.c=_.b=null},
eJ:function eJ(a){var _=this
_.a=a
_.d=_.c=_.b=null},
eY:function eY(){this.b=this.a=null},
f_:function f_(a){this.a=a},
eZ:function eZ(a){this.a=a},
f0:function f0(a){this.a=a}},U={
hJ:function(){var u=new U.dT()
u.a=!0
u.b=1e12
u.c=-1e12
u.d=0
u.e=100
u.f=0
u.x=0
u.r=0
return u},
dT:function dT(){var _=this
_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
cs:function cs(){this.b=this.a=null},
bM:function bM(){var _=this
_.d=_.c=_.b=_.a=_.r=_.f=_.e=null},
W:function W(){},
dl:function dl(){var _=this
_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
dm:function dm(){var _=this
_.fx=_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
dn:function dn(){var _=this
_.r=_.f=_.e=_.d=_.c=_.b=_.a=null}},M={cw:function cw(){var _=this
_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null}},A={
iB:function(a){var u,t,s,r,q,p,o
u=a!==C.i
t=a===C.n
s=a===C.j
r="Normal_"+C.f.i(a.a)
q=$.aL()
p=$.aK()
p=q.a|p.a
o=new Z.aI(p)
if(u)o=new Z.aI(p|$.aJ().a)
if(t)o=new Z.aI(o.a|$.aM().a)
return new A.eF(a,u,t,s,r,s?new Z.aI(o.a|$.aN().a):o)},
hT:function(a,b,c,d,e){var u=new A.fj(a,b,c,e)
u.f=d
u.sfs(P.jZ(d,0,!1,P.w))
return u},
cm:function cm(a,b,c){this.a=a
this.b=b
this.c=c},
dO:function dO(a){this.a=a},
eE:function eE(a,b){var _=this
_.id=_.go=_.fy=_.fx=_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=null
_.a=a
_.b=b
_.y=_.x=_.r=_.f=_.e=_.d=_.c=null},
eF:function eF(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
bV:function bV(){},
b9:function b9(a,b){this.a=a
this.b=b},
dd:function dd(){},
fq:function fq(a){this.a=a},
c2:function c2(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
fl:function fl(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
fn:function fn(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
fp:function fp(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
fj:function fj(a,b,c,d){var _=this
_.f=_.e=null
_.a=a
_.b=b
_.c=c
_.d=d},
fi:function fi(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
fk:function fk(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
fm:function fm(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
fo:function fo(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
fr:function fr(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
df:function df(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
bo:function bo(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
dg:function dg(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
dh:function dh(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d}},F={
hl:function(a){var u=a.a>0?1:0
if(a.b>0)u+=2
return(a.c>0?u+4:u)*2},
cc:function(a,b,c,d,a0,a1,a2,a3,a4){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e
u={}
t=a1+a2
s=t+a3
r=a2+a3
q=a3+a1
p=new V.N(s,r+a1,q+a2)
u.a=p
o=a1-a2
n=a2-a3
m=a3-a1
l=new V.N(o+a3,n+a1,m+a2)
u.b=l
k=new V.N(o-a3,n-a1,m-a2)
u.c=k
j=new V.N(t-a3,r-a1,q-a2)
u.d=j
if(s>0){u.d=l
u.b=j
s=l
t=j}else{s=j
t=l}for(q=s,s=t,t=p,r=k,i=0;i<a4;++i,h=q,q=t,t=s,s=r,r=h){u.a=s
u.b=r
u.c=q
u.d=t}g=F.hl(t)
f=F.hl(u.b)
e=F.l1(d,a0,new F.hk(u,F.hl(u.c),F.hl(u.d),f,g,c),b)
if(e!=null)a.hc(e)},
l1:function(a,b,c,d){var u,t,s,r,q,p,o,n,m,l,k,j,i,h
H.h(c,{func:1,ret:-1,args:[F.ar,P.t,P.t]})
if(a<1)return
if(b<1)return
u=F.iN()
t=H.a([],[F.ar])
for(s=0;s<=b;++s){r=s/b
q=u.a
if(r<0)p=0
else p=r>1?1:r
q.toString
o=F.hU(null,null,new V.aD(p,0,0,1),null,null,new V.X(r,1),null,null,0)
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
o=F.hU(null,null,new V.aD(j,i,h,1),null,null,new V.X(r,m),null,null,0)
k.h(0,o)
c.$3(o,r,n)
C.a.h(t,o.bD(d))}}u.d.fu(a+1,b+1,t)
return u},
cx:function(a,b,c){var u,t
u=new F.R()
t=a.a
if(t==null)H.T(P.P("May not create a face with a first vertex which is not attached to a shape."))
if(t!=b.a||t!=c.a)H.T(P.P("May not create a face with vertices attached to different shapes."))
u.a=a
C.a.h(a.d.b,u)
u.b=b
C.a.h(b.d.c,u)
u.c=c
C.a.h(c.d.d,u)
C.a.h(u.a.a.d.b,u)
u.a.a.W()
return u},
iN:function(){var u,t
u=new F.d3()
t=new F.fx(u)
t.b=!1
t.sft(H.a([],[F.ar]))
u.a=t
t=new F.eX(u)
t.sbs(H.a([],[F.aZ]))
u.b=t
t=new F.eW(u)
t.seb(H.a([],[F.aF]))
u.c=t
t=new F.eV(u)
t.se2(H.a([],[F.R]))
u.d=t
u.e=null
return u},
hU:function(a,b,c,d,e,f,g,h,i){var u,t,s
u=new F.ar()
t=new F.fC(u)
t.sbs(H.a([],[F.aZ]))
u.b=t
t=new F.fB(u)
s=[F.aF]
t.sec(H.a([],s))
t.sed(H.a([],s))
u.c=t
t=new F.fy(u)
s=[F.R]
t.se3(H.a([],s))
t.se4(H.a([],s))
t.se5(H.a([],s))
u.d=t
h=$.jx()
u.e=0
t=$.aL()
s=h.a
u.f=(s&t.a)!==0?d:null
u.r=(s&$.aK().a)!==0?e:null
u.x=(s&$.aJ().a)!==0?b:null
u.y=(s&$.aM().a)!==0?f:null
u.z=(s&$.aN().a)!==0?g:null
u.Q=(s&$.jy().a)!==0?c:null
u.ch=(s&$.bz().a)!==0?i:0
u.cx=(s&$.by().a)!==0?a:null
return u},
hk:function hk(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
R:function R(){var _=this
_.e=_.d=_.c=_.b=_.a=null},
aF:function aF(){this.b=this.a=null},
aZ:function aZ(){this.a=null},
d3:function d3(){var _=this
_.e=_.d=_.c=_.b=_.a=null},
eV:function eV(a){this.a=a
this.b=null},
eW:function eW(a){this.a=a
this.b=null},
eX:function eX(a){this.a=a
this.b=null},
ar:function ar(){var _=this
_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
fE:function fE(a){this.a=a},
fD:function fD(a){this.a=a},
fx:function fx(a){this.a=a
this.c=this.b=null},
fy:function fy(a){var _=this
_.a=a
_.d=_.c=_.b=null},
fz:function fz(a,b){this.a=a
this.b=b},
fA:function fA(a,b){this.a=a
this.b=b},
fB:function fB(a){this.a=a
this.c=this.b=null},
fC:function fC(a){this.a=a
this.b=null}},T={c_:function c_(){},d9:function d9(){var _=this
_.e=_.d=_.c=_.b=_.a=null},f8:function f8(a){var _=this
_.a=a
_.e=_.d=_.c=_.b=null},f9:function f9(a,b,c,d,e,f,g){var _=this
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
H.hO.prototype={}
J.U.prototype={
m:function(a,b){return a===b},
gD:function(a){return H.bT(a)},
i:function(a){return"Instance of '"+H.bi(a)+"'"}}
J.ej.prototype={
i:function(a){return String(a)},
gD:function(a){return a?519018:218159},
$iC:1}
J.ek.prototype={
m:function(a,b){return null==b},
i:function(a){return"null"},
gD:function(a){return 0},
$iz:1}
J.cH.prototype={
gD:function(a){return 0},
i:function(a){return String(a)}}
J.eI.prototype={}
J.c3.prototype={}
J.aX.prototype={
i:function(a){var u=a[$.jm()]
if(u==null)return this.dv(a)
return"JavaScript function for "+H.c(J.a8(u))},
$S:function(){return{func:1,opt:[,,,,,,,,,,,,,,,,]}},
$iaU:1}
J.au.prototype={
h:function(a,b){H.v(b,H.q(a,0))
if(!!a.fixed$length)H.T(P.aj("add"))
a.push(b)},
P:function(a,b){var u
if(!!a.fixed$length)H.T(P.aj("remove"))
for(u=0;u<a.length;++u)if(J.O(a[u],b)){a.splice(u,1)
return!0}return!1},
S:function(a,b){var u,t
H.h(b,{func:1,ret:-1,args:[H.q(a,0)]})
u=a.length
for(t=0;t<u;++t){b.$1(a[t])
if(a.length!==u)throw H.d(P.aR(a))}},
k:function(a,b){var u,t
u=new Array(a.length)
u.fixed$length=Array
for(t=0;t<a.length;++t)this.N(u,t,H.c(a[t]))
return u.join(b)},
h8:function(a){return this.k(a,"")},
h2:function(a,b,c){var u,t,s
H.h(b,{func:1,ret:P.C,args:[H.q(a,0)]})
u=a.length
for(t=0;t<u;++t){s=a[t]
if(b.$1(s))return s
if(a.length!==u)throw H.d(P.aR(a))}throw H.d(H.hM())},
h1:function(a,b){return this.h2(a,b,null)},
V:function(a,b){if(b<0||b>=a.length)return H.i(a,b)
return a[b]},
ds:function(a,b,c){var u=a.length
if(b>u)throw H.d(P.ah(b,0,a.length,"start",null))
if(c<b||c>a.length)throw H.d(P.ah(c,b,a.length,"end",null))
if(b===c)return H.a([],[H.q(a,0)])
return H.a(a.slice(b,c),[H.q(a,0)])},
gaV:function(a){var u=a.length
if(u>0)return a[u-1]
throw H.d(H.hM())},
cv:function(a,b){var u,t
H.h(b,{func:1,ret:P.C,args:[H.q(a,0)]})
u=a.length
for(t=0;t<u;++t){if(b.$1(a[t]))return!0
if(a.length!==u)throw H.d(P.aR(a))}return!1},
O:function(a,b){var u
for(u=0;u<a.length;++u)if(J.O(a[u],b))return!0
return!1},
i:function(a){return P.hL(a,"[","]")},
gL:function(a){return new J.ae(a,a.length,0,[H.q(a,0)])},
gD:function(a){return H.bT(a)},
gl:function(a){return a.length},
sl:function(a,b){if(!!a.fixed$length)H.T(P.aj("set length"))
if(b<0)throw H.d(P.ah(b,0,null,"newLength",null))
a.length=b},
N:function(a,b,c){H.v(c,H.q(a,0))
if(!!a.immutable$list)H.T(P.aj("indexed set"))
if(b>=a.length||b<0)throw H.d(H.ch(a,b))
a[b]=c},
$in:1,
$ib:1}
J.hN.prototype={}
J.ae.prototype={
gG:function(){return this.d},
u:function(){var u,t,s
u=this.a
t=u.length
if(this.b!==t)throw H.d(H.x(u))
s=this.c
if(s>=t){this.scd(null)
return!1}this.scd(u[s]);++this.c
return!0},
scd:function(a){this.d=H.v(a,H.q(this,0))},
$iat:1}
J.cG.prototype={
hG:function(a){var u
if(a>=-2147483648&&a<=2147483647)return a|0
if(isFinite(a)){u=a<0?Math.ceil(a):Math.floor(a)
return u+0}throw H.d(P.aj(""+a+".toInt()"))},
bF:function(a){var u,t
if(a>=0){if(a<=2147483647)return a|0}else if(a>=-2147483648){u=a|0
return a===u?u:u-1}t=Math.floor(a)
if(isFinite(t))return t
throw H.d(P.aj(""+a+".floor()"))},
a2:function(a){if(a>0){if(a!==1/0)return Math.round(a)}else if(a>-1/0)return 0-Math.round(0-a)
throw H.d(P.aj(""+a+".round()"))},
d2:function(a,b){var u,t
if(b>20)throw H.d(P.ah(b,0,20,"fractionDigits",null))
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
di:function(a,b){var u=a%b
if(u===0)return 0
if(u>0)return u
if(b<0)return u-b
else return u+b},
dA:function(a,b){if((a|0)===a)if(b>=1||b<-1)return a/b|0
return this.cp(a,b)},
aq:function(a,b){return(a|0)===a?a/b|0:this.cp(a,b)},
cp:function(a,b){var u=a/b
if(u>=-2147483648&&u<=2147483647)return u|0
if(u>0){if(u!==1/0)return Math.floor(u)}else if(u>-1/0)return Math.ceil(u)
throw H.d(P.aj("Result of truncating division is "+H.c(u)+": "+H.c(a)+" ~/ "+b))},
aR:function(a,b){var u
if(a>0)u=this.fe(a,b)
else{u=b>31?31:b
u=a>>u>>>0}return u},
fe:function(a,b){return b>31?0:a>>>b},
$it:1,
$ia0:1}
J.cF.prototype={$iw:1}
J.cE.prototype={}
J.be.prototype={
bC:function(a,b){if(b<0)throw H.d(H.ch(a,b))
if(b>=a.length)H.T(H.ch(a,b))
return a.charCodeAt(b)},
al:function(a,b){if(b>=a.length)throw H.d(H.ch(a,b))
return a.charCodeAt(b)},
B:function(a,b){if(typeof b!=="string")throw H.d(P.hG(b,null,null))
return a+b},
dr:function(a,b,c){var u
if(c>a.length)throw H.d(P.ah(c,0,a.length,null,null))
u=c+b.length
if(u>a.length)return!1
return b===a.substring(c,u)},
b5:function(a,b){return this.dr(a,b,0)},
aM:function(a,b,c){if(c==null)c=a.length
if(b<0)throw H.d(P.eL(b,null,null))
if(b>c)throw H.d(P.eL(b,null,null))
if(c>a.length)throw H.d(P.eL(c,null,null))
return a.substring(b,c)},
b6:function(a,b){return this.aM(a,b,null)},
hJ:function(a){return a.toLowerCase()},
q:function(a,b){var u,t
if(0>=b)return""
if(b===1||a.length===0)return a
if(b!==b>>>0)throw H.d(C.G)
for(u=a,t="";!0;){if((b&1)===1)t=u+t
b=b>>>1
if(b===0)break
u+=u}return t},
hk:function(a,b,c){var u=b-a.length
if(u<=0)return a
return this.q(c,u)+a},
a0:function(a,b){return this.hk(a,b," ")},
i:function(a){return a},
gD:function(a){var u,t,s
for(u=a.length,t=0,s=0;s<u;++s){t=536870911&t+a.charCodeAt(s)
t=536870911&t+((524287&t)<<10)
t^=t>>6}t=536870911&t+((67108863&t)<<3)
t^=t>>11
return 536870911&t+((16383&t)<<15)},
gl:function(a){return a.length},
$iiD:1,
$ik:1}
H.m.prototype={
gl:function(a){return this.a.length},
v:function(a,b){return C.c.bC(this.a,b)},
$adj:function(){return[P.w]},
$aL:function(){return[P.w]},
$an:function(){return[P.w]},
$ab:function(){return[P.w]}}
H.e0.prototype={}
H.bf.prototype={
gL:function(a){return new H.bO(this,this.gl(this),0,[H.Y(this,"bf",0)])},
b_:function(a,b){return this.du(0,H.h(b,{func:1,ret:P.C,args:[H.Y(this,"bf",0)]}))}}
H.bO.prototype={
gG:function(){return this.d},
u:function(){var u,t,s,r
u=this.a
t=J.i5(u)
s=t.gl(u)
if(this.b!==s)throw H.d(P.aR(u))
r=this.c
if(r>=s){this.saA(null)
return!1}this.saA(t.V(u,r));++this.c
return!0},
saA:function(a){this.d=H.v(a,H.q(this,0))},
$iat:1}
H.eu.prototype={
gL:function(a){return new H.ev(J.bA(this.a),this.b,this.$ti)},
gl:function(a){return J.b6(this.a)},
V:function(a,b){return this.b.$1(J.hE(this.a,b))},
$an:function(a,b){return[b]}}
H.ev.prototype={
u:function(){var u=this.b
if(u.u()){this.saA(this.c.$1(u.gG()))
return!0}this.saA(null)
return!1},
gG:function(){return this.a},
saA:function(a){this.a=H.v(a,H.q(this,1))},
$aat:function(a,b){return[b]}}
H.ew.prototype={
gl:function(a){return J.b6(this.a)},
V:function(a,b){return this.b.$1(J.hE(this.a,b))},
$abf:function(a,b){return[b]},
$an:function(a,b){return[b]}}
H.c4.prototype={
gL:function(a){return new H.fH(J.bA(this.a),this.b,this.$ti)}}
H.fH.prototype={
u:function(){var u,t
for(u=this.a,t=this.b;u.u();)if(t.$1(u.gG()))return!0
return!1},
gG:function(){return this.a.gG()}}
H.bb.prototype={}
H.dj.prototype={}
H.di.prototype={}
H.eN.prototype={}
H.ff.prototype={
a_:function(a){var u,t,s
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
H.eG.prototype={
i:function(a){var u=this.b
if(u==null)return"NoSuchMethodError: "+H.c(this.a)
return"NoSuchMethodError: method not found: '"+u+"' on null"}}
H.em.prototype={
i:function(a){var u,t
u=this.b
if(u==null)return"NoSuchMethodError: "+H.c(this.a)
t=this.c
if(t==null)return"NoSuchMethodError: method not found: '"+u+"' ("+H.c(this.a)+")"
return"NoSuchMethodError: method not found: '"+u+"' on '"+t+"' ("+H.c(this.a)+")"}}
H.ft.prototype={
i:function(a){var u=this.a
return u.length===0?"Error":"Error: "+u}}
H.hD.prototype={
$1:function(a){if(!!J.K(a).$iaT)if(a.$thrownJsError==null)a.$thrownJsError=this.a
return a},
$S:17}
H.dD.prototype={
i:function(a){var u,t
u=this.b
if(u!=null)return u
u=this.a
t=u!==null&&typeof u==="object"?u.stack:null
u=t==null?"":t
this.b=u
return u},
$ia6:1}
H.bE.prototype={
i:function(a){return"Closure '"+H.bi(this).trim()+"'"},
$iaU:1,
ghP:function(){return this},
$C:"$1",
$R:1,
$D:null}
H.f7.prototype={}
H.f1.prototype={
i:function(a){var u=this.$static_name
if(u==null)return"Closure of unknown static method"
return"Closure '"+H.bx(u)+"'"}}
H.bC.prototype={
m:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof H.bC))return!1
return this.a===b.a&&this.b===b.b&&this.c===b.c},
gD:function(a){var u,t
u=this.c
if(u==null)t=H.bT(this.a)
else t=typeof u!=="object"?J.b5(u):H.bT(u)
return(t^H.bT(this.b))>>>0},
i:function(a){var u=this.c
if(u==null)u=this.a
return"Closure '"+H.c(this.d)+"' of "+("Instance of '"+H.bi(u)+"'")}}
H.fh.prototype={
i:function(a){return this.a}}
H.dR.prototype={
i:function(a){return this.a}}
H.eS.prototype={
i:function(a){return"RuntimeError: "+H.c(this.a)}}
H.av.prototype={
gl:function(a){return this.a},
gad:function(){return new H.cJ(this,[H.q(this,0)])},
cE:function(a){var u,t
if(typeof a==="string"){u=this.b
if(u==null)return!1
return this.ca(u,a)}else if(typeof a==="number"&&(a&0x3ffffff)===a){t=this.c
if(t==null)return!1
return this.ca(t,a)}else return this.h6(a)},
h6:function(a){var u=this.d
if(u==null)return!1
return this.bG(this.bf(u,J.b5(a)&0x3ffffff),a)>=0},
v:function(a,b){var u,t,s,r
if(typeof b==="string"){u=this.b
if(u==null)return
t=this.aO(u,b)
s=t==null?null:t.b
return s}else if(typeof b==="number"&&(b&0x3ffffff)===b){r=this.c
if(r==null)return
t=this.aO(r,b)
s=t==null?null:t.b
return s}else return this.h7(b)},
h7:function(a){var u,t,s
u=this.d
if(u==null)return
t=this.bf(u,J.b5(a)&0x3ffffff)
s=this.bG(t,a)
if(s<0)return
return t[s].b},
N:function(a,b,c){var u,t,s,r,q,p
H.v(b,H.q(this,0))
H.v(c,H.q(this,1))
if(typeof b==="string"){u=this.b
if(u==null){u=this.bq()
this.b=u}this.c1(u,b,c)}else if(typeof b==="number"&&(b&0x3ffffff)===b){t=this.c
if(t==null){t=this.bq()
this.c=t}this.c1(t,b,c)}else{s=this.d
if(s==null){s=this.bq()
this.d=s}r=J.b5(b)&0x3ffffff
q=this.bf(s,r)
if(q==null)this.bv(s,r,[this.b9(b,c)])
else{p=this.bG(q,b)
if(p>=0)q[p].b=c
else q.push(this.b9(b,c))}}},
S:function(a,b){var u,t
H.h(b,{func:1,ret:-1,args:[H.q(this,0),H.q(this,1)]})
u=this.e
t=this.r
for(;u!=null;){b.$2(u.a,u.b)
if(t!==this.r)throw H.d(P.aR(this))
u=u.c}},
c1:function(a,b,c){var u
H.v(b,H.q(this,0))
H.v(c,H.q(this,1))
u=this.aO(a,b)
if(u==null)this.bv(a,b,this.b9(b,c))
else u.b=c},
dO:function(){this.r=this.r+1&67108863},
b9:function(a,b){var u,t
u=new H.eo(H.v(a,H.q(this,0)),H.v(b,H.q(this,1)))
if(this.e==null){this.f=u
this.e=u}else{t=this.f
u.d=t
t.c=u
this.f=u}++this.a
this.dO()
return u},
bG:function(a,b){var u,t
if(a==null)return-1
u=a.length
for(t=0;t<u;++t)if(J.O(a[t].a,b))return t
return-1},
i:function(a){return P.ix(this)},
aO:function(a,b){return a[b]},
bf:function(a,b){return a[b]},
bv:function(a,b,c){a[b]=c},
e_:function(a,b){delete a[b]},
ca:function(a,b){return this.aO(a,b)!=null},
bq:function(){var u=Object.create(null)
this.bv(u,"<non-identifier-key>",u)
this.e_(u,"<non-identifier-key>")
return u},
$iiv:1}
H.eo.prototype={}
H.cJ.prototype={
gl:function(a){return this.a.a},
gL:function(a){var u,t
u=this.a
t=new H.ep(u,u.r,this.$ti)
t.c=u.e
return t}}
H.ep.prototype={
gG:function(){return this.d},
u:function(){var u=this.a
if(this.b!==u.r)throw H.d(P.aR(u))
else{u=this.c
if(u==null){this.sc2(null)
return!1}else{this.sc2(u.a)
this.c=this.c.c
return!0}}},
sc2:function(a){this.d=H.v(a,H.q(this,0))},
$iat:1}
H.hu.prototype={
$1:function(a){return this.a(a)},
$S:17}
H.hv.prototype={
$2:function(a,b){return this.a(a,b)},
$S:33}
H.hw.prototype={
$1:function(a){return this.a(H.A(a))},
$S:32}
H.el.prototype={
i:function(a){return"RegExp/"+this.a+"/"},
$iiD:1}
H.cT.prototype={$ilo:1}
H.cQ.prototype={
gl:function(a){return a.length},
$iao:1,
$aao:function(){}}
H.cR.prototype={
v:function(a,b){H.cd(b,a,a.length)
return a[b]},
$abb:function(){return[P.t]},
$aL:function(){return[P.t]},
$in:1,
$an:function(){return[P.t]},
$ib:1,
$ab:function(){return[P.t]}}
H.cS.prototype={
$abb:function(){return[P.w]},
$aL:function(){return[P.w]},
$in:1,
$an:function(){return[P.w]},
$ib:1,
$ab:function(){return[P.w]}}
H.ey.prototype={
v:function(a,b){H.cd(b,a,a.length)
return a[b]}}
H.ez.prototype={
v:function(a,b){H.cd(b,a,a.length)
return a[b]}}
H.eA.prototype={
v:function(a,b){H.cd(b,a,a.length)
return a[b]}}
H.cU.prototype={
gl:function(a){return a.length},
v:function(a,b){H.cd(b,a,a.length)
return a[b]},
$ilp:1}
H.eB.prototype={
gl:function(a){return a.length},
v:function(a,b){H.cd(b,a,a.length)
return a[b]}}
H.c8.prototype={}
H.c9.prototype={}
H.ca.prototype={}
H.cb.prototype={}
P.fJ.prototype={
$1:function(a){var u,t
u=this.a
t=u.a
u.a=null
t.$0()},
$S:12}
P.fI.prototype={
$1:function(a){var u,t
this.a.a=H.h(a,{func:1,ret:-1})
u=this.b
t=this.c
u.firstChild?u.removeChild(t):u.appendChild(t)},
$S:36}
P.fK.prototype={
$0:function(){this.a.$0()},
$S:2}
P.fL.prototype={
$0:function(){this.a.$0()},
$S:2}
P.dE.prototype={
dL:function(a,b){if(self.setTimeout!=null)this.b=self.setTimeout(H.bt(new P.hg(this,b),0),a)
else throw H.d(P.aj("`setTimeout()` not found."))},
dM:function(a,b){if(self.setTimeout!=null)this.b=self.setInterval(H.bt(new P.hf(this,a,Date.now(),b),0),a)
else throw H.d(P.aj("Periodic timer."))},
$iax:1}
P.hg.prototype={
$0:function(){var u=this.a
u.b=null
u.c=1
this.b.$0()},
$S:3}
P.hf.prototype={
$0:function(){var u,t,s,r
u=this.a
t=u.c+1
s=this.b
if(s>0){r=Date.now()-this.c
if(r>(t+1)*s)t=C.f.dA(r,s)}u.c=t
this.d.$1(u)},
$S:2}
P.aB.prototype={
hb:function(a){if(this.c!==6)return!0
return this.b.b.bO(H.h(this.d,{func:1,ret:P.C,args:[P.B]}),a.a,P.C,P.B)},
h5:function(a){var u,t,s,r
u=this.e
t=P.B
s={futureOr:1,type:H.q(this,1)}
r=this.b.b
if(H.dL(u,{func:1,args:[P.B,P.a6]}))return H.i4(r.hy(u,a.a,a.b,null,t,P.a6),s)
else return H.i4(r.bO(H.h(u,{func:1,args:[P.B]}),a.a,null,t),s)}}
P.al.prototype={
d1:function(a,b,c){var u,t,s,r
u=H.q(this,0)
H.h(a,{func:1,ret:{futureOr:1,type:c},args:[u]})
t=$.J
if(t!==C.h){t.toString
H.h(a,{func:1,ret:{futureOr:1,type:c},args:[u]})
if(b!=null)b=P.kw(b,t)}H.h(a,{func:1,ret:{futureOr:1,type:c},args:[u]})
s=new P.al(0,$.J,[c])
r=b==null?1:3
this.c4(new P.aB(s,r,a,b,[u,c]))
return s},
hF:function(a,b){return this.d1(a,null,b)},
c4:function(a){var u,t
u=this.a
if(u<=1){a.a=H.e(this.c,"$iaB")
this.c=a}else{if(u===2){t=H.e(this.c,"$ial")
u=t.a
if(u<4){t.c4(a)
return}this.a=u
this.c=t.c}u=this.b
u.toString
P.hp(null,null,u,H.h(new P.fS(this,a),{func:1,ret:-1}))}},
cl:function(a){var u,t,s,r,q,p
u={}
u.a=a
if(a==null)return
t=this.a
if(t<=1){s=H.e(this.c,"$iaB")
this.c=a
if(s!=null){for(r=a;q=r.a,q!=null;r=q);r.a=s}}else{if(t===2){p=H.e(this.c,"$ial")
t=p.a
if(t<4){p.cl(a)
return}this.a=t
this.c=p.c}u.a=this.aQ(a)
t=this.b
t.toString
P.hp(null,null,t,H.h(new P.fW(u,this),{func:1,ret:-1}))}},
bu:function(){var u=H.e(this.c,"$iaB")
this.c=null
return this.aQ(u)},
aQ:function(a){var u,t,s
for(u=a,t=null;u!=null;t=u,u=s){s=u.a
u.a=t}return t},
c7:function(a){var u,t,s
u=H.q(this,0)
H.i4(a,{futureOr:1,type:u})
t=this.$ti
if(H.cg(a,"$ibL",t,"$abL"))if(H.cg(a,"$ial",t,null))P.iZ(a,this)
else P.kl(a,this)
else{s=this.bu()
H.v(a,u)
this.a=4
this.c=a
P.c7(this,s)}},
c8:function(a,b){var u
H.e(b,"$ia6")
u=this.bu()
this.a=8
this.c=new P.a1(a,b)
P.c7(this,u)},
$ibL:1}
P.fS.prototype={
$0:function(){P.c7(this.a,this.b)},
$S:2}
P.fW.prototype={
$0:function(){P.c7(this.b,this.a.a)},
$S:2}
P.fT.prototype={
$1:function(a){var u=this.a
u.a=0
u.c7(a)},
$S:12}
P.fU.prototype={
$2:function(a,b){H.e(b,"$ia6")
this.a.c8(a,b)},
$1:function(a){return this.$2(a,null)},
$S:30}
P.fV.prototype={
$0:function(){this.a.c8(this.b,this.c)},
$S:2}
P.fZ.prototype={
$0:function(){var u,t,s,r,q,p,o
u=null
try{r=this.c
u=r.b.b.cZ(H.h(r.d,{func:1}),null)}catch(q){t=H.ad(q)
s=H.bv(q)
if(this.d){r=H.e(this.a.a.c,"$ia1").a
p=t
p=r==null?p==null:r===p
r=p}else r=!1
p=this.b
if(r)p.b=H.e(this.a.a.c,"$ia1")
else p.b=new P.a1(t,s)
p.a=!0
return}if(!!J.K(u).$ibL){if(u instanceof P.al&&u.a>=4){if(u.a===8){r=this.b
r.b=H.e(u.c,"$ia1")
r.a=!0}return}o=this.a.a
r=this.b
r.b=u.hF(new P.h_(o),null)
r.a=!1}},
$S:3}
P.h_.prototype={
$1:function(a){return this.a},
$S:29}
P.fY.prototype={
$0:function(){var u,t,s,r,q,p,o
try{s=this.b
r=H.q(s,0)
q=H.v(this.c,r)
p=H.q(s,1)
this.a.b=s.b.b.bO(H.h(s.d,{func:1,ret:{futureOr:1,type:p},args:[r]}),q,{futureOr:1,type:p},r)}catch(o){u=H.ad(o)
t=H.bv(o)
s=this.a
s.b=new P.a1(u,t)
s.a=!0}},
$S:3}
P.fX.prototype={
$0:function(){var u,t,s,r,q,p,o,n
try{u=H.e(this.a.a.c,"$ia1")
r=this.c
if(r.hb(u)&&r.e!=null){q=this.b
q.b=r.h5(u)
q.a=!1}}catch(p){t=H.ad(p)
s=H.bv(p)
r=H.e(this.a.a.c,"$ia1")
q=r.a
o=t
n=this.b
if(q==null?o==null:q===o)n.b=r
else n.b=new P.a1(t,s)
n.a=!0}},
$S:3}
P.dr.prototype={}
P.f2.prototype={
gl:function(a){var u,t,s,r
u={}
t=new P.al(0,$.J,[P.w])
u.a=0
s=H.q(this,0)
r=H.h(new P.f4(u,this),{func:1,ret:-1,args:[s]})
H.h(new P.f5(u,t),{func:1,ret:-1})
W.S(this.a,this.b,r,!1,s)
return t}}
P.f4.prototype={
$1:function(a){H.v(a,H.q(this.b,0));++this.a.a},
$S:function(){return{func:1,ret:P.z,args:[H.q(this.b,0)]}}}
P.f5.prototype={
$0:function(){this.b.c7(this.a.a)},
$S:2}
P.bY.prototype={}
P.f3.prototype={}
P.ax.prototype={}
P.a1.prototype={
i:function(a){return H.c(this.a)},
$iaT:1}
P.hj.prototype={$ilD:1}
P.ho.prototype={
$0:function(){var u,t,s
u=this.a
t=u.a
if(t==null){s=new P.cX()
u.a=s
u=s}else u=t
t=this.b
if(t==null)throw H.d(u)
s=H.d(u)
s.stack=t.i(0)
throw s},
$S:2}
P.h4.prototype={
hz:function(a){var u,t,s
H.h(a,{func:1,ret:-1})
try{if(C.h===$.J){a.$0()
return}P.j4(null,null,this,a,-1)}catch(s){u=H.ad(s)
t=H.bv(s)
P.hn(null,null,this,u,H.e(t,"$ia6"))}},
hA:function(a,b,c){var u,t,s
H.h(a,{func:1,ret:-1,args:[c]})
H.v(b,c)
try{if(C.h===$.J){a.$1(b)
return}P.j5(null,null,this,a,b,-1,c)}catch(s){u=H.ad(s)
t=H.bv(s)
P.hn(null,null,this,u,H.e(t,"$ia6"))}},
fB:function(a,b){return new P.h6(this,H.h(a,{func:1,ret:b}),b)},
by:function(a){return new P.h5(this,H.h(a,{func:1,ret:-1}))},
cz:function(a,b){return new P.h7(this,H.h(a,{func:1,ret:-1,args:[b]}),b)},
cZ:function(a,b){H.h(a,{func:1,ret:b})
if($.J===C.h)return a.$0()
return P.j4(null,null,this,a,b)},
bO:function(a,b,c,d){H.h(a,{func:1,ret:c,args:[d]})
H.v(b,d)
if($.J===C.h)return a.$1(b)
return P.j5(null,null,this,a,b,c,d)},
hy:function(a,b,c,d,e,f){H.h(a,{func:1,ret:d,args:[e,f]})
H.v(b,e)
H.v(c,f)
if($.J===C.h)return a.$2(b,c)
return P.kx(null,null,this,a,b,c,d,e,f)}}
P.h6.prototype={
$0:function(){return this.a.cZ(this.b,this.c)},
$S:function(){return{func:1,ret:this.c}}}
P.h5.prototype={
$0:function(){return this.a.hz(this.b)},
$S:3}
P.h7.prototype={
$1:function(a){var u=this.c
return this.a.hA(this.b,H.v(a,u),u)},
$S:function(){return{func:1,ret:-1,args:[this.c]}}}
P.h2.prototype={
gL:function(a){var u=new P.dx(this,this.r,this.$ti)
u.c=this.e
return u},
gl:function(a){return this.a},
O:function(a,b){var u,t
if(typeof b==="string"&&b!=="__proto__"){u=this.b
if(u==null)return!1
return H.e(u[b],"$ibp")!=null}else{t=this.dW(b)
return t}},
dW:function(a){var u=this.d
if(u==null)return!1
return this.bd(this.ce(u,a),a)>=0},
h:function(a,b){var u,t
H.v(b,H.q(this,0))
if(typeof b==="string"&&b!=="__proto__"){u=this.b
if(u==null){u=P.hX()
this.b=u}return this.c3(u,b)}else if(typeof b==="number"&&(b&1073741823)===b){t=this.c
if(t==null){t=P.hX()
this.c=t}return this.c3(t,b)}else return this.dP(b)},
dP:function(a){var u,t,s
H.v(a,H.q(this,0))
u=this.d
if(u==null){u=P.hX()
this.d=u}t=this.c9(a)
s=u[t]
if(s==null)u[t]=[this.br(a)]
else{if(this.bd(s,a)>=0)return!1
s.push(this.br(a))}return!0},
P:function(a,b){if(typeof b==="number"&&(b&1073741823)===b)return this.f3(this.c,b)
else return this.f0(b)},
f0:function(a){var u,t,s
u=this.d
if(u==null)return!1
t=this.ce(u,a)
s=this.bd(t,a)
if(s<0)return!1
this.cq(t.splice(s,1)[0])
return!0},
c3:function(a,b){H.v(b,H.q(this,0))
if(H.e(a[b],"$ibp")!=null)return!1
a[b]=this.br(b)
return!0},
f3:function(a,b){var u
if(a==null)return!1
u=H.e(a[b],"$ibp")
if(u==null)return!1
this.cq(u)
delete a[b]
return!0},
cg:function(){this.r=1073741823&this.r+1},
br:function(a){var u,t
u=new P.bp(H.v(a,H.q(this,0)))
if(this.e==null){this.f=u
this.e=u}else{t=this.f
u.c=t
t.b=u
this.f=u}++this.a
this.cg()
return u},
cq:function(a){var u,t
u=a.c
t=a.b
if(u==null)this.e=t
else u.b=t
if(t==null)this.f=u
else t.c=u;--this.a
this.cg()},
c9:function(a){return J.b5(a)&1073741823},
ce:function(a,b){return a[this.c9(b)]},
bd:function(a,b){var u,t
if(a==null)return-1
u=a.length
for(t=0;t<u;++t)if(J.O(a[t].a,b))return t
return-1}}
P.bp.prototype={}
P.dx.prototype={
gG:function(){return this.d},
u:function(){var u=this.a
if(this.b!==u.r)throw H.d(P.aR(u))
else{u=this.c
if(u==null){this.sc6(null)
return!1}else{this.sc6(H.v(u.a,H.q(this,0)))
this.c=this.c.b
return!0}}},
sc6:function(a){this.d=H.v(a,H.q(this,0))},
$iat:1}
P.eq.prototype={$in:1,$ib:1}
P.L.prototype={
gL:function(a){return new H.bO(a,this.gl(a),0,[H.ht(this,a,"L",0)])},
V:function(a,b){return this.v(a,b)},
hI:function(a,b){var u,t
u=H.a([],[H.ht(this,a,"L",0)])
C.a.sl(u,this.gl(a))
for(t=0;t<this.gl(a);++t)C.a.N(u,t,this.v(a,t))
return u},
hH:function(a){return this.hI(a,!0)},
i:function(a){return P.hL(a,"[","]")}}
P.es.prototype={}
P.et.prototype={
$2:function(a,b){var u,t
u=this.a
if(!u.a)this.b.a+=", "
u.a=!1
u=this.b
t=u.a+=H.c(a)
u.a=t+": "
u.a+=H.c(b)},
$S:14}
P.bg.prototype={
S:function(a,b){var u,t
H.h(b,{func:1,ret:-1,args:[H.Y(this,"bg",0),H.Y(this,"bg",1)]})
for(u=J.bA(this.gad());u.u();){t=u.gG()
b.$2(t,this.v(0,t))}},
gl:function(a){return J.b6(this.gad())},
i:function(a){return P.ix(this)},
$iag:1}
P.h9.prototype={
a5:function(a,b){var u
for(u=J.bA(H.l(b,"$in",this.$ti,"$an"));u.u();)this.h(0,u.gG())},
i:function(a){return P.hL(this,"{","}")},
V:function(a,b){var u,t,s
if(b<0)H.T(P.ah(b,0,null,"index",null))
for(u=P.kp(this,this.r,H.q(this,0)),t=0;u.u();){s=u.d
if(b===t)return s;++t}throw H.d(P.bd(b,this,"index",null,t))},
$in:1,
$iiM:1}
P.dy.prototype={}
P.bF.prototype={}
P.bG.prototype={}
P.e2.prototype={
$abF:function(){return[P.k,[P.b,P.w]]}}
P.eg.prototype={
i:function(a){return this.a}}
P.ef.prototype={
dX:function(a,b,c){var u,t,s,r,q,p
for(u=this.a,t=u.e,s=u.d,u=u.c,r=b,q=null;r<c;++r){if(r>=a.length)return H.i(a,r)
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
default:p=null}if(p!=null){if(q==null)q=new P.bl("")
if(r>b)q.a+=C.c.aM(a,b,r)
q.a+=p
b=r+1}}if(q==null)return
if(c>b)q.a+=J.jG(a,b,c)
u=q.a
return u.charCodeAt(0)==0?u:u},
$abG:function(){return[P.k,P.k]}}
P.fv.prototype={}
P.fw.prototype={
fK:function(a,b,c){var u,t,s
c=P.iJ(b,c,a.length,null,null,null)
u=c-b
if(u===0)return new Uint8Array(0)
t=new Uint8Array(u*3)
s=new P.hh(t)
if(s.e6(a,b,c)!==c)s.cr(C.c.bC(a,c-1),0)
return new Uint8Array(t.subarray(0,H.ks(0,s.b,t.length)))},
fJ:function(a){return this.fK(a,0,null)},
$abG:function(){return[P.k,[P.b,P.w]]}}
P.hh.prototype={
cr:function(a,b){var u,t,s,r,q
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
e6:function(a,b,c){var u,t,s,r,q,p,o
if(b!==c&&(C.c.bC(a,c-1)&64512)===55296)--c
for(u=this.c,t=u.length,s=b;s<c;++s){r=C.c.al(a,s)
if(r<=127){q=this.b
if(q>=t)break
this.b=q+1
u[q]=r}else if((r&64512)===55296){if(this.b+3>=t)break
p=s+1
if(this.cr(r,C.c.al(a,p)))s=p}else if(r<=2047){q=this.b
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
P.C.prototype={}
P.a3.prototype={
m:function(a,b){if(b==null)return!1
return b instanceof P.a3&&this.a===b.a&&!0},
gD:function(a){var u=this.a
return(u^C.f.aR(u,30))&1073741823},
i:function(a){var u,t,s,r,q,p,o,n
u=P.jO(H.k7(this))
t=P.ct(H.k5(this))
s=P.ct(H.k1(this))
r=P.ct(H.k2(this))
q=P.ct(H.k4(this))
p=P.ct(H.k6(this))
o=P.jP(H.k3(this))
n=u+"-"+t+"-"+s+" "+r+":"+q+":"+p+"."+o
return n}}
P.t.prototype={}
P.aS.prototype={
m:function(a,b){if(b==null)return!1
return b instanceof P.aS&&this.a===b.a},
gD:function(a){return C.f.gD(this.a)},
i:function(a){var u,t,s,r,q
u=new P.e_()
t=this.a
if(t<0)return"-"+new P.aS(0-t).i(0)
s=u.$1(C.f.aq(t,6e7)%60)
r=u.$1(C.f.aq(t,1e6)%60)
q=new P.dZ().$1(t%1e6)
return""+C.f.aq(t,36e8)+":"+H.c(s)+":"+H.c(r)+"."+H.c(q)}}
P.dZ.prototype={
$1:function(a){if(a>=1e5)return""+a
if(a>=1e4)return"0"+a
if(a>=1000)return"00"+a
if(a>=100)return"000"+a
if(a>=10)return"0000"+a
return"00000"+a},
$S:15}
P.e_.prototype={
$1:function(a){if(a>=10)return""+a
return"0"+a},
$S:15}
P.aT.prototype={}
P.cX.prototype={
i:function(a){return"Throw of null."}}
P.an.prototype={
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
p=P.e4(this.b)
return r+q+": "+p}}
P.bj.prototype={
gbc:function(){return"RangeError"},
gbb:function(){var u,t,s
u=this.e
if(u==null){u=this.f
t=u!=null?": Not less than or equal to "+H.c(u):""}else{s=this.f
if(s==null)t=": Not greater than or equal to "+H.c(u)
else if(s>u)t=": Not in range "+H.c(u)+".."+H.c(s)+", inclusive"
else t=s<u?": Valid value range is empty":": Only valid value is "+H.c(u)}return t}}
P.eh.prototype={
gbc:function(){return"RangeError"},
gbb:function(){var u,t
u=H.Z(this.b)
if(typeof u!=="number")return u.az()
if(u<0)return": index must not be negative"
t=this.f
if(t===0)return": no indices are valid"
return": index should be less than "+H.c(t)},
gl:function(a){return this.f}}
P.fu.prototype={
i:function(a){return"Unsupported operation: "+this.a}}
P.fs.prototype={
i:function(a){var u=this.a
return u!=null?"UnimplementedError: "+u:"UnimplementedError"}}
P.bX.prototype={
i:function(a){return"Bad state: "+this.a}}
P.dU.prototype={
i:function(a){var u=this.a
if(u==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+P.e4(u)+"."}}
P.eH.prototype={
i:function(a){return"Out of Memory"},
$iaT:1}
P.d4.prototype={
i:function(a){return"Stack Overflow"},
$iaT:1}
P.dW.prototype={
i:function(a){var u=this.a
return u==null?"Reading static variable during its initialization":"Reading static variable '"+u+"' during its initialization"}}
P.du.prototype={
i:function(a){return"Exception: "+this.a}}
P.eb.prototype={
i:function(a){var u,t,s,r
u=this.a
t=""!==u?"FormatException: "+u:"FormatException"
s=this.b
r=s.length>78?C.c.aM(s,0,75)+"...":s
return t+"\n"+r}}
P.aU.prototype={}
P.w.prototype={}
P.n.prototype={
b_:function(a,b){var u=H.Y(this,"n",0)
return new H.c4(this,H.h(b,{func:1,ret:P.C,args:[u]}),[u])},
gl:function(a){var u,t
u=this.gL(this)
for(t=0;u.u();)++t
return t},
gai:function(a){var u,t
u=this.gL(this)
if(!u.u())throw H.d(H.hM())
t=u.gG()
if(u.u())throw H.d(H.jU())
return t},
V:function(a,b){var u,t,s
if(b<0)H.T(P.ah(b,0,null,"index",null))
for(u=this.gL(this),t=0;u.u();){s=u.gG()
if(b===t)return s;++t}throw H.d(P.bd(b,this,"index",null,t))},
i:function(a){return P.jT(this,"(",")")}}
P.at.prototype={}
P.b.prototype={$in:1}
P.z.prototype={
gD:function(a){return P.B.prototype.gD.call(this,this)},
i:function(a){return"null"}}
P.a0.prototype={}
P.B.prototype={constructor:P.B,$iB:1,
m:function(a,b){return this===b},
gD:function(a){return H.bT(this)},
i:function(a){return"Instance of '"+H.bi(this)+"'"},
toString:function(){return this.i(this)}}
P.a6.prototype={}
P.k.prototype={$iiD:1}
P.bl.prototype={
gl:function(a){return this.a.length},
i:function(a){var u=this.a
return u.charCodeAt(0)==0?u:u}}
W.p.prototype={}
W.cl.prototype={
i:function(a){return String(a)},
$icl:1}
W.dN.prototype={
i:function(a){return String(a)}}
W.bB.prototype={$ibB:1}
W.aO.prototype={$iaO:1}
W.b7.prototype={
b1:function(a,b,c){if(c!=null)return this.e7(a,b,P.kE(c,null))
return this.e8(a,b)},
dc:function(a,b){return this.b1(a,b,null)},
e7:function(a,b,c){return a.getContext(b,c)},
e8:function(a,b){return a.getContext(b)},
$ib7:1,
$iim:1}
W.b8.prototype={
e9:function(a,b,c,d,e){return a.getImageData(b,c,d,e)},
fY:function(a,b,c,d,e,f){return a.drawImage(b,c,d,e,f)},
$ib8:1}
W.aP.prototype={
gl:function(a){return a.length}}
W.bH.prototype={
gl:function(a){return a.length}}
W.dV.prototype={}
W.af.prototype={$iaf:1}
W.bI.prototype={
fv:function(a,b){return a.adoptNode(b)},
dd:function(a,b){return a.getElementById(b)}}
W.dY.prototype={
i:function(a){return String(a)}}
W.cu.prototype={
fO:function(a,b){return a.createHTMLDocument(b)}}
W.cv.prototype={
i:function(a){return"Rectangle ("+H.c(a.left)+", "+H.c(a.top)+") "+H.c(a.width)+" x "+H.c(a.height)},
m:function(a,b){var u
if(b==null)return!1
if(!H.cg(b,"$iai",[P.a0],"$aai"))return!1
u=J.a7(b)
return a.left===u.gaW(b)&&a.top===u.gaZ(b)&&a.width===u.gb0(b)&&a.height===u.gaU(b)},
gD:function(a){return W.j0(C.d.gD(a.left),C.d.gD(a.top),C.d.gD(a.width),C.d.gD(a.height))},
gcA:function(a){return a.bottom},
gaU:function(a){return a.height},
gaW:function(a){return a.left},
gcY:function(a){return a.right},
gaZ:function(a){return a.top},
gb0:function(a){return a.width},
$iai:1,
$aai:function(){return[P.a0]}}
W.fN.prototype={
gl:function(a){return this.b.length},
v:function(a,b){var u=this.b
if(b<0||b>=u.length)return H.i(u,b)
return H.e(u[b],"$iD")},
h:function(a,b){J.ih(this.a,b)
return b},
gL:function(a){var u=this.hH(this)
return new J.ae(u,u.length,0,[H.q(u,0)])},
$aL:function(){return[W.D]},
$an:function(){return[W.D]},
$ab:function(){return[W.D]}}
W.D.prototype={
gfA:function(a){return new W.fO(a)},
gcC:function(a){return new W.fN(a,a.children)},
gcD:function(a){var u,t,s,r
u=a.clientLeft
t=a.clientTop
s=a.clientWidth
r=a.clientHeight
if(typeof s!=="number")return s.az()
if(s<0)s=-s*0
if(typeof r!=="number")return r.az()
if(r<0)r=-r*0
return new P.ai(u,t,s,r,[P.a0])},
i:function(a){return a.localName},
Z:function(a,b,c,d){var u,t,s,r
if(c==null){u=$.is
if(u==null){u=H.a([],[W.ac])
t=new W.cV(u)
C.a.h(u,W.j_(null))
C.a.h(u,W.j1())
$.is=t
d=t}else d=u
u=$.ir
if(u==null){u=new W.dI(d)
$.ir=u
c=u}else{u.a=d
c=u}}if($.aE==null){u=document
t=u.implementation
t=(t&&C.I).fO(t,"")
$.aE=t
$.hK=t.createRange()
t=$.aE
t.toString
t=t.createElement("base")
H.e(t,"$ibB")
t.href=u.baseURI
u=$.aE.head;(u&&C.K).t(u,t)}u=$.aE
if(u.body==null){u.toString
t=u.createElement("body")
u.body=H.e(t,"$iaO")}u=$.aE
if(!!this.$iaO)s=u.body
else{t=a.tagName
u.toString
s=u.createElement(t)
u=$.aE.body;(u&&C.l).t(u,s)}if("createContextualFragment" in window.Range.prototype&&!C.a.O(C.W,a.tagName)){u=$.hK;(u&&C.D).dk(u,s)
u=$.hK
r=(u&&C.D).fM(u,b)}else{s.innerHTML=b
r=$.aE.createDocumentFragment()
for(u=J.a7(r);t=s.firstChild,t!=null;)u.t(r,t)}u=$.aE.body
if(s==null?u!=null:s!==u)J.ii(s)
c.bR(r)
C.y.fv(document,r)
return r},
fN:function(a,b,c){return this.Z(a,b,c,null)},
dn:function(a,b,c,d){a.textContent=null
this.t(a,this.Z(a,b,c,d))},
dm:function(a,b){return this.dn(a,b,null,null)},
ay:function(a,b){return a.getAttribute(b)},
f1:function(a,b){return a.removeAttribute(b)},
$iD:1,
ghB:function(a){return a.tagName}}
W.e1.prototype={
$1:function(a){return!!J.K(H.e(a,"$iu")).$iD},
$S:16}
W.f.prototype={$if:1}
W.ba.prototype={
dQ:function(a,b,c,d){return a.addEventListener(b,H.bt(H.h(c,{func:1,args:[W.f]}),1),!1)},
$iba:1}
W.ea.prototype={
gl:function(a){return a.length}}
W.cA.prototype={}
W.bc.prototype={
gl:function(a){return a.length},
v:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.bd(b,a,null,null,null))
return a[b]},
V:function(a,b){if(b<0||b>=a.length)return H.i(a,b)
return a[b]},
$iao:1,
$aao:function(){return[W.u]},
$aL:function(){return[W.u]},
$in:1,
$an:function(){return[W.u]},
$ib:1,
$ab:function(){return[W.u]},
$ibc:1,
$aa9:function(){return[W.u]}}
W.cB.prototype={}
W.aV.prototype={$iaV:1,
gcF:function(a){return a.data}}
W.bN.prototype={$ibN:1,$iim:1}
W.aw.prototype={$iaw:1}
W.cL.prototype={
i:function(a){return String(a)},
$icL:1}
W.bQ.prototype={}
W.V.prototype={$iV:1}
W.a2.prototype={
gai:function(a){var u,t
u=this.a
t=u.childNodes.length
if(t===0)throw H.d(P.iO("No elements"))
if(t>1)throw H.d(P.iO("More than one element"))
return u.firstChild},
a5:function(a,b){var u,t,s,r,q
H.l(b,"$in",[W.u],"$an")
u=b.a
t=this.a
if(u!==t)for(s=u.childNodes.length,r=J.a7(t),q=0;q<s;++q)r.t(t,u.firstChild)
return},
gL:function(a){var u=this.a.childNodes
return new W.cy(u,u.length,-1,[H.ht(C.Y,u,"a9",0)])},
gl:function(a){return this.a.childNodes.length},
v:function(a,b){var u=this.a.childNodes
if(b<0||b>=u.length)return H.i(u,b)
return u[b]},
$aL:function(){return[W.u]},
$an:function(){return[W.u]},
$ab:function(){return[W.u]}}
W.u.prototype={
ht:function(a){var u=a.parentNode
if(u!=null)J.dM(u,a)},
i:function(a){var u=a.nodeValue
return u==null?this.dt(a):u},
t:function(a,b){return a.appendChild(b)},
f2:function(a,b){return a.removeChild(b)},
$iu:1}
W.bS.prototype={
gl:function(a){return a.length},
v:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.bd(b,a,null,null,null))
return a[b]},
V:function(a,b){if(b<0||b>=a.length)return H.i(a,b)
return a[b]},
$iao:1,
$aao:function(){return[W.u]},
$aL:function(){return[W.u]},
$in:1,
$an:function(){return[W.u]},
$ib:1,
$ab:function(){return[W.u]},
$aa9:function(){return[W.u]}}
W.d0.prototype={
fM:function(a,b){return a.createContextualFragment(b)},
dk:function(a,b){return a.selectNodeContents(b)}}
W.eT.prototype={
gl:function(a){return a.length}}
W.bm.prototype={}
W.d5.prototype={
Z:function(a,b,c,d){var u,t
if("createContextualFragment" in window.Range.prototype)return this.b7(a,b,c,d)
u=W.jQ("<table>"+b+"</table>",c,d)
t=document.createDocumentFragment()
t.toString
u.toString
new W.a2(t).a5(0,new W.a2(u))
return t}}
W.d6.prototype={
Z:function(a,b,c,d){var u,t,s,r
if("createContextualFragment" in window.Range.prototype)return this.b7(a,b,c,d)
u=document
t=u.createDocumentFragment()
u=C.o.Z(u.createElement("table"),b,c,d)
u.toString
u=new W.a2(u)
s=u.gai(u)
s.toString
u=new W.a2(s)
r=u.gai(u)
t.toString
r.toString
new W.a2(t).a5(0,new W.a2(r))
return t}}
W.f6.prototype={
Z:function(a,b,c,d){var u,t,s
if("createContextualFragment" in window.Range.prototype)return this.b7(a,b,c,d)
u=document
t=u.createDocumentFragment()
u=C.o.Z(u.createElement("table"),b,c,d)
u.toString
u=new W.a2(u)
s=u.gai(u)
t.toString
s.toString
new W.a2(t).a5(0,new W.a2(s))
return t}}
W.bZ.prototype={$ibZ:1}
W.ay.prototype={$iay:1}
W.ap.prototype={$iap:1}
W.fe.prototype={
gl:function(a){return a.length},
v:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.bd(b,a,null,null,null))
return a[b]},
V:function(a,b){if(b<0||b>=a.length)return H.i(a,b)
return a[b]},
$iao:1,
$aao:function(){return[W.ay]},
$aL:function(){return[W.ay]},
$in:1,
$an:function(){return[W.ay]},
$ib:1,
$ab:function(){return[W.ay]},
$aa9:function(){return[W.ay]}}
W.b1.prototype={}
W.fF.prototype={$iim:1}
W.aA.prototype={
gfU:function(a){if(a.deltaY!==undefined)return a.deltaY
throw H.d(P.aj("deltaY is not supported"))},
gfT:function(a){if(a.deltaX!==undefined)return a.deltaX
throw H.d(P.aj("deltaX is not supported"))},
$iaA:1}
W.c5.prototype={
f5:function(a,b){return a.requestAnimationFrame(H.bt(H.h(b,{func:1,ret:-1,args:[P.a0]}),1))},
e0:function(a){if(!!(a.requestAnimationFrame&&a.cancelAnimationFrame))return;(function(b){var u=['ms','moz','webkit','o']
for(var t=0;t<u.length&&!b.requestAnimationFrame;++t){b.requestAnimationFrame=b[u[t]+'RequestAnimationFrame']
b.cancelAnimationFrame=b[u[t]+'CancelAnimationFrame']||b[u[t]+'CancelRequestAnimationFrame']}if(b.requestAnimationFrame&&b.cancelAnimationFrame)return
b.requestAnimationFrame=function(c){return window.setTimeout(function(){c(Date.now())},16)}
b.cancelAnimationFrame=function(c){clearTimeout(c)}})(a)}}
W.c6.prototype={$ic6:1}
W.dt.prototype={
i:function(a){return"Rectangle ("+H.c(a.left)+", "+H.c(a.top)+") "+H.c(a.width)+" x "+H.c(a.height)},
m:function(a,b){var u
if(b==null)return!1
if(!H.cg(b,"$iai",[P.a0],"$aai"))return!1
u=J.a7(b)
return a.left===u.gaW(b)&&a.top===u.gaZ(b)&&a.width===u.gb0(b)&&a.height===u.gaU(b)},
gD:function(a){return W.j0(C.d.gD(a.left),C.d.gD(a.top),C.d.gD(a.width),C.d.gD(a.height))},
gaU:function(a){return a.height},
gb0:function(a){return a.width}}
W.dz.prototype={
gl:function(a){return a.length},
v:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.bd(b,a,null,null,null))
return a[b]},
V:function(a,b){if(b<0||b>=a.length)return H.i(a,b)
return a[b]},
$iao:1,
$aao:function(){return[W.u]},
$aL:function(){return[W.u]},
$in:1,
$an:function(){return[W.u]},
$ib:1,
$ab:function(){return[W.u]},
$aa9:function(){return[W.u]}}
W.fM.prototype={
S:function(a,b){var u,t,s,r,q,p
H.h(b,{func:1,ret:-1,args:[P.k,P.k]})
for(u=this.gad(),t=u.length,s=this.a,r=J.a7(s),q=0;q<u.length;u.length===t||(0,H.x)(u),++q){p=u[q]
b.$2(p,r.ay(s,p))}},
gad:function(){var u,t,s,r,q
u=this.a.attributes
t=H.a([],[P.k])
for(s=u.length,r=0;r<s;++r){if(r>=u.length)return H.i(u,r)
q=H.e(u[r],"$ic6")
if(q.namespaceURI==null)C.a.h(t,q.name)}return t},
$abg:function(){return[P.k,P.k]},
$aag:function(){return[P.k,P.k]}}
W.fO.prototype={
v:function(a,b){return J.hF(this.a,H.A(b))},
gl:function(a){return this.gad().length}}
W.fP.prototype={}
W.hW.prototype={}
W.fQ.prototype={}
W.fR.prototype={
$1:function(a){return this.a.$1(H.e(a,"$if"))},
$S:37}
W.b2.prototype={
dH:function(a){var u,t
u=$.ig()
if(u.a===0){for(t=0;t<262;++t)u.N(0,C.V[t],W.kL())
for(t=0;t<12;++t)u.N(0,C.t[t],W.kM())}},
ar:function(a){return $.jA().O(0,W.bJ(a))},
a6:function(a,b,c){var u,t,s
u=W.bJ(a)
t=$.ig()
s=t.v(0,H.c(u)+"::"+b)
if(s==null)s=t.v(0,"*::"+b)
if(s==null)return!1
return H.i1(s.$4(a,b,c,this))},
$iac:1}
W.a9.prototype={
gL:function(a){return new W.cy(a,this.gl(a),-1,[H.ht(this,a,"a9",0)])}}
W.cV.prototype={
ar:function(a){return C.a.cv(this.a,new W.eD(a))},
a6:function(a,b,c){return C.a.cv(this.a,new W.eC(a,b,c))},
$iac:1}
W.eD.prototype={
$1:function(a){return H.e(a,"$iac").ar(this.a)},
$S:18}
W.eC.prototype={
$1:function(a){return H.e(a,"$iac").a6(this.a,this.b,this.c)},
$S:18}
W.dC.prototype={
dK:function(a,b,c,d){var u,t,s
this.a.a5(0,c)
u=b.b_(0,new W.ha())
t=b.b_(0,new W.hb())
this.b.a5(0,u)
s=this.c
s.a5(0,C.X)
s.a5(0,t)},
ar:function(a){return this.a.O(0,W.bJ(a))},
a6:function(a,b,c){var u,t
u=W.bJ(a)
t=this.c
if(t.O(0,H.c(u)+"::"+b))return this.d.fw(c)
else if(t.O(0,"*::"+b))return this.d.fw(c)
else{t=this.b
if(t.O(0,H.c(u)+"::"+b))return!0
else if(t.O(0,"*::"+b))return!0
else if(t.O(0,H.c(u)+"::*"))return!0
else if(t.O(0,"*::*"))return!0}return!1},
$iac:1}
W.ha.prototype={
$1:function(a){return!C.a.O(C.t,H.A(a))},
$S:19}
W.hb.prototype={
$1:function(a){return C.a.O(C.t,H.A(a))},
$S:19}
W.hd.prototype={
a6:function(a,b,c){if(this.dz(a,b,c))return!0
if(b==="template"&&c==="")return!0
if(J.hF(a,"template")==="")return this.e.O(0,b)
return!1}}
W.he.prototype={
$1:function(a){return"TEMPLATE::"+H.c(H.A(a))},
$S:28}
W.hc.prototype={
ar:function(a){var u=J.K(a)
if(!!u.$ibU)return!1
u=!!u.$ij
if(u&&W.bJ(a)==="foreignObject")return!1
if(u)return!0
return!1},
a6:function(a,b,c){if(b==="is"||C.c.b5(b,"on"))return!1
return this.ar(a)},
$iac:1}
W.cy.prototype={
u:function(){var u,t
u=this.c+1
t=this.b
if(u<t){this.scf(J.jC(this.a,u))
this.c=u
return!0}this.scf(null)
this.c=t
return!1},
gG:function(){return this.d},
scf:function(a){this.d=H.v(a,H.q(this,0))},
$iat:1}
W.ac.prototype={}
W.h8.prototype={$ilq:1}
W.dI.prototype={
bR:function(a){new W.hi(this).$2(a,null)},
aD:function(a,b){if(b==null)J.ii(a)
else J.dM(b,a)},
f8:function(a,b){var u,t,s,r,q,p,o,n
u=!0
t=null
s=null
try{t=J.jE(a)
s=J.hF(t.a,"is")
r=function(c){if(!(c.attributes instanceof NamedNodeMap))return true
var m=c.childNodes
if(c.lastChild&&c.lastChild!==m[m.length-1])return true
if(c.children)if(!(c.children instanceof HTMLCollection||c.children instanceof NodeList))return true
var l=0
if(c.children)l=c.children.length
for(var k=0;k<l;k++){var j=c.children[k]
if(j.id=='attributes'||j.name=='attributes'||j.id=='lastChild'||j.name=='lastChild'||j.id=='children'||j.name=='children')return true}return false}(a)
u=r?!0:!(a.attributes instanceof NamedNodeMap)}catch(o){H.ad(o)}q="element unprintable"
try{q=J.a8(a)}catch(o){H.ad(o)}try{p=W.bJ(a)
this.f7(H.e(a,"$iD"),b,u,q,p,H.e(t,"$iag"),H.A(s))}catch(o){if(H.ad(o) instanceof P.an)throw o
else{this.aD(a,b)
window
n="Removing corrupted element "+H.c(q)
if(typeof console!="undefined")window.console.warn(n)}}},
f7:function(a,b,c,d,e,f,g){var u,t,s,r,q,p
if(c){this.aD(a,b)
window
u="Removing element due to corrupted attributes on <"+d+">"
if(typeof console!="undefined")window.console.warn(u)
return}if(!this.a.ar(a)){this.aD(a,b)
window
u="Removing disallowed element <"+H.c(e)+"> from "+H.c(b)
if(typeof console!="undefined")window.console.warn(u)
return}if(g!=null)if(!this.a.a6(a,"is",g)){this.aD(a,b)
window
u="Removing disallowed type extension <"+H.c(e)+' is="'+g+'">'
if(typeof console!="undefined")window.console.warn(u)
return}u=f.gad()
t=H.a(u.slice(0),[H.q(u,0)])
for(s=f.gad().length-1,u=f.a,r=J.a7(u);s>=0;--s){if(s>=t.length)return H.i(t,s)
q=t[s]
if(!this.a.a6(a,J.jH(q),r.ay(u,q))){window
p="Removing disallowed attribute <"+H.c(e)+" "+q+'="'+H.c(r.ay(u,q))+'">'
if(typeof console!="undefined")window.console.warn(p)
r.ay(u,q)
r.f1(u,q)}}if(!!J.K(a).$ibZ)this.bR(a.content)},
$ila:1}
W.hi.prototype={
$2:function(a,b){var u,t,s,r,q,p
s=this.a
switch(a.nodeType){case 1:s.f8(a,b)
break
case 8:case 11:case 3:case 4:break
default:s.aD(a,b)}u=a.lastChild
for(s=a==null;null!=u;){t=null
try{t=u.previousSibling}catch(r){H.ad(r)
q=H.e(u,"$iu")
if(s){p=q.parentNode
if(p!=null)J.dM(p,q)}else J.dM(a,q)
u=null
t=a.lastChild}if(u!=null)this.$2(u,a)
u=H.e(t,"$iu")}},
$S:27}
W.ds.prototype={}
W.dv.prototype={}
W.dw.prototype={}
W.dA.prototype={}
W.dB.prototype={}
W.dF.prototype={}
W.dG.prototype={}
W.dJ.prototype={}
W.dK.prototype={}
P.dH.prototype={$iaV:1,
gcF:function(a){return this.a}}
P.hq.prototype={
$2:function(a,b){this.a[a]=b},
$S:14}
P.e7.prototype={
gbg:function(){var u,t,s
u=this.b
t=H.Y(u,"L",0)
s=W.D
return new H.eu(new H.c4(u,H.h(new P.e8(),{func:1,ret:P.C,args:[t]}),[t]),H.h(new P.e9(),{func:1,ret:s,args:[t]}),[t,s])},
h:function(a,b){J.ih(this.b.a,b)},
gl:function(a){return J.b6(this.gbg().a)},
v:function(a,b){var u=this.gbg()
return u.b.$1(J.hE(u.a,b))},
gL:function(a){var u=P.k_(this.gbg(),!1,W.D)
return new J.ae(u,u.length,0,[H.q(u,0)])},
$aL:function(){return[W.D]},
$an:function(){return[W.D]},
$ab:function(){return[W.D]}}
P.e8.prototype={
$1:function(a){return!!J.K(H.e(a,"$iu")).$iD},
$S:16}
P.e9.prototype={
$1:function(a){return H.a_(H.e(a,"$iu"),"$iD")},
$S:25}
P.h3.prototype={
gcY:function(a){var u=this.a
if(typeof u!=="number")return u.B()
return H.v(u+this.c,H.q(this,0))},
gcA:function(a){var u=this.b
if(typeof u!=="number")return u.B()
return H.v(u+this.d,H.q(this,0))},
i:function(a){return"Rectangle ("+H.c(this.a)+", "+H.c(this.b)+") "+this.c+" x "+this.d},
m:function(a,b){var u,t,s,r
if(b==null)return!1
if(H.cg(b,"$iai",[P.a0],"$aai")){u=this.a
t=J.a7(b)
if(u==t.gaW(b)){s=this.b
if(s==t.gaZ(b)){if(typeof u!=="number")return u.B()
r=H.q(this,0)
if(H.v(u+this.c,r)===t.gcY(b)){if(typeof s!=="number")return s.B()
u=H.v(s+this.d,r)===t.gcA(b)}else u=!1}else u=!1}else u=!1}else u=!1
return u},
gD:function(a){var u,t,s,r,q
u=this.a
t=J.b5(u)
s=this.b
r=J.b5(s)
if(typeof u!=="number")return u.B()
q=H.q(this,0)
u=C.f.gD(H.v(u+this.c,q))
if(typeof s!=="number")return s.B()
q=C.f.gD(H.v(s+this.d,q))
return P.ko(P.h1(P.h1(P.h1(P.h1(0,t),r),u),q))}}
P.ai.prototype={
gaW:function(a){return this.a},
gaZ:function(a){return this.b},
gb0:function(a){return this.c},
gaU:function(a){return this.d}}
P.bU.prototype={$ibU:1}
P.j.prototype={
gcC:function(a){return new P.e7(a,new W.a2(a))},
Z:function(a,b,c,d){var u,t,s,r,q,p
u=H.a([],[W.ac])
C.a.h(u,W.j_(null))
C.a.h(u,W.j1())
C.a.h(u,new W.hc())
c=new W.dI(new W.cV(u))
t='<svg version="1.1">'+b+"</svg>"
u=document
s=u.body
r=(s&&C.l).fN(s,t,c)
q=u.createDocumentFragment()
r.toString
u=new W.a2(r)
p=u.gai(u)
for(u=J.a7(q);s=p.firstChild,s!=null;)u.t(q,s)
return q},
$ij:1}
P.cn.prototype={$icn:1}
P.cz.prototype={$icz:1}
P.d_.prototype={$id_:1}
P.bk.prototype={
cs:function(a,b){return a.activeTexture(b)},
cw:function(a,b,c){return a.attachShader(b,c)},
a7:function(a,b,c){return a.bindBuffer(b,c)},
fC:function(a,b,c){return a.bindFramebuffer(b,c)},
as:function(a,b,c){return a.bindTexture(b,c)},
cB:function(a,b,c,d){return a.bufferData(b,c,d)},
fF:function(a,b){return a.clear(b)},
fG:function(a,b,c,d,e){return a.clearColor(b,c,d,e)},
fH:function(a,b){return a.clearDepth(b)},
fI:function(a,b){return a.compileShader(b)},
fP:function(a,b){return a.createShader(b)},
fR:function(a,b){return a.deleteProgram(b)},
fS:function(a,b){return a.deleteShader(b)},
fV:function(a,b){return a.depthFunc(b)},
cG:function(a,b){return a.disableVertexAttribArray(b)},
fX:function(a,b,c,d,e){return a.drawElements(b,c,d,e)},
cI:function(a,b){return a.enable(b)},
cJ:function(a,b){return a.enableVertexAttribArray(b)},
d7:function(a,b,c){return a.getActiveAttrib(b,c)},
d8:function(a,b,c){return a.getActiveUniform(b,c)},
d9:function(a,b,c){return a.getAttribLocation(b,c)},
bQ:function(a,b){return a.getParameter(b)},
de:function(a,b){return a.getProgramInfoLog(b)},
b2:function(a,b,c){return a.getProgramParameter(b,c)},
df:function(a,b){return a.getShaderInfoLog(b)},
dg:function(a,b,c){return a.getShaderParameter(b,c)},
dh:function(a,b,c){return a.getUniformLocation(b,c)},
h9:function(a,b){return a.linkProgram(b)},
hs:function(a,b,c){return a.pixelStorei(b,c)},
dq:function(a,b,c){return a.shaderSource(b,c)},
hD:function(a,b,c,d,e,f,g,h,i,j){var u,t
u=J.K(g)
if(!!u.$iaV)t=!0
else t=!1
if(t){this.fh(a,b,c,d,e,f,P.kF(g))
return}if(!!u.$ibN)u=!0
else u=!1
if(u){this.fi(a,b,c,d,e,f,g)
return}throw H.d(P.jI("Incorrect number or type of arguments"))},
hC:function(a,b,c,d,e,f,g){return this.hD(a,b,c,d,e,f,g,null,null,null)},
fh:function(a,b,c,d,e,f,g){return a.texImage2D(b,c,d,e,f,g)},
fi:function(a,b,c,d,e,f,g){return a.texImage2D(b,c,d,e,f,g)},
aY:function(a,b,c,d){return a.texParameteri(b,c,d)},
aL:function(a,b,c){return a.uniform1i(b,c)},
hL:function(a,b,c,d){return a.uniformMatrix3fv(b,!1,d)},
hM:function(a,b,c,d){return a.uniformMatrix4fv(b,!1,d)},
d5:function(a,b){return a.useProgram(b)},
hN:function(a,b,c,d,e,f,g){return a.vertexAttribPointer(b,c,d,!1,f,g)},
hO:function(a,b,c,d,e){return a.viewport(b,c,d,e)},
$ibk:1}
P.d2.prototype={$id2:1}
P.d8.prototype={$id8:1}
P.de.prototype={$ide:1}
O.Q.prototype={
bV:function(a){this.see(H.a([],[a]))
this.scj(null)
this.sci(null)
this.sck(null)},
dl:function(a,b,c){var u={func:1,ret:-1,args:[P.w,[P.n,H.Y(this,"Q",0)]]}
H.h(a,u)
H.h(c,u)
this.scj(b)
this.sci(a)
this.sck(c)},
b3:function(a,b){return this.dl(a,null,b)},
eR:function(a){H.l(a,"$in",[H.Y(this,"Q",0)],"$an")
return!0},
dF:function(a,b){var u
H.l(b,"$in",[H.Y(this,"Q",0)],"$an")
u=this.c
if(u!=null)u.$2(a,b)},
gl:function(a){return this.a.length},
gL:function(a){var u=this.a
return new J.ae(u,u.length,0,[H.q(u,0)])},
V:function(a,b){var u=this.a
if(b<0||b>=u.length)return H.i(u,b)
return u[b]},
h:function(a,b){var u,t,s
u=H.Y(this,"Q",0)
H.v(b,u)
u=[u]
if(this.eR(H.a([b],u))){t=this.a
s=t.length
C.a.h(t,b)
this.dF(s,H.a([b],u))}},
see:function(a){this.a=H.l(a,"$ib",[H.Y(this,"Q",0)],"$ab")},
scj:function(a){this.b=H.h(a,{func:1,ret:P.C,args:[[P.n,H.Y(this,"Q",0)]]})},
sci:function(a){this.c=H.h(a,{func:1,ret:-1,args:[P.w,[P.n,H.Y(this,"Q",0)]]})},
sck:function(a){this.d=H.h(a,{func:1,ret:-1,args:[P.w,[P.n,H.Y(this,"Q",0)]]})},
$in:1}
O.bP.prototype={
gl:function(a){return this.a.length},
gn:function(){var u=this.b
if(u==null){u=D.H()
this.b=u}return u},
dG:function(a){var u=this.b
if(u!=null)u.A(a)},
aj:function(){return this.dG(null)},
gaf:function(){var u=this.a
if(u.length>0)return C.a.gaV(u)
else return V.cP()},
cV:function(a){var u=this.a
if(a==null)C.a.h(u,V.cP())
else C.a.h(u,a)
this.aj()},
bN:function(){var u=this.a
if(u.length>0){u.pop()
this.aj()}},
sbi:function(a){this.a=H.l(a,"$ib",[V.aY],"$ab")}}
E.dP.prototype={}
E.a4.prototype={
sbS:function(a,b){var u,t,s
u=this.c
if(u!=b){this.c=b
this.d=b
this.e=null
if(u!=null)u.gn().P(0,this.gcR())
t=this.c
if(t!=null)t.gn().h(0,this.gcR())
s=new D.E("shape",u,this.c,this,[F.d3])
s.b=!0
this.a1(s)}},
saH:function(a){var u,t
if(!J.O(this.r,a)){u=this.r
if(u!=null)u.gn().P(0,this.gcP())
if(a!=null)a.gn().h(0,this.gcP())
this.r=a
t=new D.E("mover",u,a,this,[U.W])
t.b=!0
this.a1(t)}},
aw:function(a){var u,t,s,r
u=this.r
t=u!=null?u.ax(a,this):null
if(!J.O(t,this.x)){s=this.x
this.x=t
r=new D.E("matrix",s,t,this,[V.aY])
r.b=!0
this.a1(r)}for(u=this.y.a,u=new J.ae(u,u.length,0,[H.q(u,0)]);u.u();)u.d.aw(a)},
av:function(a){var u,t,s
u=a.dx
t=this.x
u.toString
if(t==null)C.a.h(u.a,u.gaf())
else C.a.h(u.a,t.q(0,u.gaf()))
u.aj()
a.cW(this.f)
u=a.dy
s=(u&&C.a).gaV(u)
if(s!=null&&this.d!=null)s.hv(a,this)
for(u=this.y.a,u=new J.ae(u,u.length,0,[H.q(u,0)]);u.u();)u.d.av(a)
a.cU()
a.dx.bN()},
gn:function(){var u=this.z
if(u==null){u=D.H()
this.z=u}return u},
a1:function(a){var u=this.z
if(u!=null)u.A(a)},
W:function(){return this.a1(null)},
cS:function(a){H.e(a,"$ir")
this.e=null
this.a1(a)},
hj:function(){return this.cS(null)},
cQ:function(a){this.a1(H.e(a,"$ir"))},
hi:function(){return this.cQ(null)},
cO:function(a){this.a1(H.e(a,"$ir"))},
hf:function(){return this.cO(null)},
he:function(a,b){var u,t,s,r,q,p,o
H.l(b,"$in",[E.a4],"$an")
for(u=b.length,t=this.gcN(),s={func:1,ret:-1,args:[D.r]},r=[s],q=0;q<b.length;b.length===u||(0,H.x)(b),++q){p=b[q]
if(p!=null){o=p.z
if(o==null){o=new D.bK()
o.sab(null)
o.saP(null)
o.c=null
o.d=0
p.z=o}H.h(t,s)
if(o.a==null)o.sab(H.a([],r))
o=o.a;(o&&C.a).h(o,t)}}this.W()},
hh:function(a,b){var u,t
H.l(b,"$in",[E.a4],"$an")
for(u=b.gL(b),t=this.gcN();u.u();)u.gG().gn().P(0,t)
this.W()},
i:function(a){var u,t
u=this.a
t=u.length
if(t<=0)return"Unnamed entity"
return u},
sdV:function(a,b){this.y=H.l(b,"$iQ",[E.a4],"$aQ")},
$iiA:1}
E.eO.prototype={
dB:function(a,b){var u,t
this.c=512
this.d=512
this.e=0
u=new P.a3(Date.now(),!1)
this.f=u
this.r=u
this.x=u
this.y=0
this.z=null
this.Q=null
this.ch=null
this.cx=null
u=new O.bP()
t=[V.aY]
u.sbi(H.a([],t))
u.b=null
u.gn().h(0,new E.eP(this))
this.cy=u
u=new O.bP()
u.sbi(H.a([],t))
u.b=null
u.gn().h(0,new E.eQ(this))
this.db=u
u=new O.bP()
u.sbi(H.a([],t))
u.b=null
u.gn().h(0,new E.eR(this))
this.dx=u
this.sfg(H.a([],[O.bn]))
u=this.dy;(u&&C.a).h(u,null)
this.sfd(new H.av([P.k,A.bV]))},
cW:function(a){var u,t
u=this.dy
t=a==null?(u&&C.a).gaV(u):a;(u&&C.a).h(u,t)},
cU:function(){var u=this.dy
if(u.length>1)u.pop()},
sfg:function(a){this.dy=H.l(a,"$ib",[O.bn],"$ab")},
sfd:function(a){this.fr=H.l(a,"$iag",[P.k,A.bV],"$aag")}}
E.eP.prototype={
$1:function(a){var u
H.e(a,"$ir")
u=this.a
u.z=null
u.ch=null},
$S:7}
E.eQ.prototype={
$1:function(a){var u
H.e(a,"$ir")
u=this.a
u.z=null
u.Q=null
u.ch=null
u.cx=null},
$S:7}
E.eR.prototype={
$1:function(a){var u
H.e(a,"$ir")
u=this.a
u.ch=null
u.cx=null},
$S:7}
E.da.prototype={
bY:function(a){H.e(a,"$ir")
this.cX()},
bX:function(){return this.bY(null)},
gh4:function(){var u,t,s
u=Date.now()
t=C.f.aq(P.iq(0,0,0,u-this.cx.a,0,0).a,1000)/1000
if(t<=0)return 0
s=this.cy
this.cy=0
this.cx=new P.a3(u,!1)
return s/t},
cm:function(){var u,t,s,r
u=window.devicePixelRatio
t=this.b.clientWidth
if(typeof t!=="number")return t.q()
if(typeof u!=="number")return H.y(u)
s=C.d.bF(t*u)
t=this.b.clientHeight
if(typeof t!=="number")return t.q()
r=C.d.bF(t*u)
t=this.b
if(t.width!==s||t.height!==r){t.width=s
t.height=r
P.iR(C.q,this.ghw())}},
cX:function(){var u,t
if(!this.ch){this.ch=!0
u=window
t=H.h(new E.fa(this),{func:1,ret:-1,args:[P.a0]})
C.F.e0(u)
C.F.f5(u,W.j8(t,P.a0))}},
hu:function(){var u,t,s,r,q
try{++this.cy
this.ch=!1
this.cm()
if(this.d!=null){s=this.e;++s.e
s.r=s.x
r=Date.now()
s.x=new P.a3(r,!1)
s.y=P.iq(0,0,0,r-s.r.a,0,0).a*0.000001
r=s.cy
C.a.sl(r.a,0)
r.aj()
r=s.db
C.a.sl(r.a,0)
r.aj()
r=s.dx
C.a.sl(r.a,0)
r.aj()
r=s.dy;(r&&C.a).sl(r,0)
s=s.dy;(s&&C.a).h(s,null)
this.d.av(this.e)}s=this.z
if(s!=null)s.A(null)}catch(q){u=H.ad(q)
t=H.bv(q)
P.ib("Error: "+H.c(u))
P.ib("Stack: "+H.c(t))
throw H.d(u)}}}
E.fa.prototype={
$1:function(a){var u
H.kW(a)
u=this.a
if(u.ch){u.ch=!1
u.hu()}},
$S:24}
Z.dq.prototype={$il4:1}
Z.co.prototype={
bx:function(a){var u,t,s
try{t=a.a
C.b.cJ(t,this.e)
C.b.hN(t,this.e,this.b,5126,!1,this.d,this.c)}catch(s){u=H.ad(s)
t=P.P('Failed to bind buffer attribute "'+this.a.i(0)+'": '+H.c(u))
throw H.d(t)}},
i:function(a){return"["+this.a.i(0)+", Size: "+this.b+", Offset: "+this.c+", Stride: "+this.d+", Attr: "+H.c(this.e)+"]"}}
Z.fG.prototype={$il5:1}
Z.cp.prototype={
aG:function(a){var u,t,s,r
for(u=this.c,t=u.length,s=0;s<t;++s){r=u[s]
if((r.a.a&a.a)!==0)return r}return},
bx:function(a){var u,t
u=this.a
C.b.a7(a.a,u.a,u.b)
for(u=this.c,t=u.length-1;t>=0;--t)u[t].bx(a)},
hK:function(a){var u,t,s
for(u=this.c,t=u.length-1,s=a.a;t>=0;--t)C.b.cG(s,u[t].e)
C.b.a7(s,this.a.a,null)},
av:function(a){var u,t,s,r,q,p
u=this.b.length
for(t=a.a,s=0;s<u;++s){r=this.b
if(s>=r.length)return H.i(r,s)
q=r[s]
r=q.c
p=r.a
C.b.a7(t,p,r.b)
C.b.fX(t,q.a,q.b,5123,0)
C.b.a7(t,p,null)}},
i:function(a){var u,t,s,r,q,p
u=[P.k]
t=H.a([],u)
for(s=this.b,r=s.length,q=0;q<s.length;s.length===r||(0,H.x)(s),++q)C.a.h(t,s[q].i(0))
p=H.a([],u)
for(u=this.c,s=u.length,q=0;q<s;++q)C.a.h(p,J.a8(u[q]))
return"Buffer:  ["+this.a.i(0)+"]\nIndices: "+C.a.k(t,", ")+"\nAttrs:   "+C.a.k(p,", ")},
sea:function(a){this.b=H.l(a,"$ib",[Z.aW],"$ab")},
$ild:1}
Z.aW.prototype={
i:function(a){return"Type: "+this.a+", Count: "+this.b+", ["+("Instance of '"+H.bi(this.c)+"'")+"]"}}
Z.aI.prototype={
gbT:function(a){var u,t
u=this.a
t=(u&$.aL().a)!==0?3:0
if((u&$.aK().a)!==0)t+=3
if((u&$.aJ().a)!==0)t+=3
if((u&$.aM().a)!==0)t+=2
if((u&$.aN().a)!==0)t+=3
if((u&$.ci().a)!==0)t+=3
if((u&$.cj().a)!==0)t+=4
if((u&$.bz().a)!==0)++t
return(u&$.by().a)!==0?t+4:t},
fz:function(a){var u,t,s
u=$.aL()
t=this.a
if((t&u.a)!==0){if(0===a)return u
s=1}else s=0
u=$.aK()
if((t&u.a)!==0){if(s===a)return u;++s}u=$.aJ()
if((t&u.a)!==0){if(s===a)return u;++s}u=$.aM()
if((t&u.a)!==0){if(s===a)return u;++s}u=$.aN()
if((t&u.a)!==0){if(s===a)return u;++s}u=$.ci()
if((t&u.a)!==0){if(s===a)return u;++s}u=$.cj()
if((t&u.a)!==0){if(s===a)return u;++s}u=$.bz()
if((t&u.a)!==0){if(s===a)return u;++s}u=$.by()
if((t&u.a)!==0)if(s===a)return u
return $.jz()},
m:function(a,b){if(b==null)return!1
if(!(b instanceof Z.aI))return!1
return this.a===b.a},
i:function(a){var u,t
u=H.a([],[P.k])
t=this.a
if((t&$.aL().a)!==0)C.a.h(u,"Pos")
if((t&$.aK().a)!==0)C.a.h(u,"Norm")
if((t&$.aJ().a)!==0)C.a.h(u,"Binm")
if((t&$.aM().a)!==0)C.a.h(u,"Txt2D")
if((t&$.aN().a)!==0)C.a.h(u,"TxtCube")
if((t&$.ci().a)!==0)C.a.h(u,"Clr3")
if((t&$.cj().a)!==0)C.a.h(u,"Clr4")
if((t&$.bz().a)!==0)C.a.h(u,"Weight")
if((t&$.by().a)!==0)C.a.h(u,"Bending")
if(u.length<=0)return"None"
return C.a.k(u,"|")}}
D.dS.prototype={}
D.bK.prototype={
h:function(a,b){var u={func:1,ret:-1,args:[D.r]}
H.h(b,u)
if(this.a==null)this.sab(H.a([],[u]))
u=this.a;(u&&C.a).h(u,b)},
P:function(a,b){var u,t
H.h(b,{func:1,ret:-1,args:[D.r]})
u=this.a
u=u==null?null:C.a.O(u,b)
if(u===!0){u=this.a
t=(u&&C.a).P(u,b)||!1}else t=!1
u=this.b
u=u==null?null:C.a.O(u,b)
if(u===!0){u=this.b
t=(u&&C.a).P(u,b)||t}return t},
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
if(a==null){a=new D.r(null)
a.b=!0
u.a=a
r=a}else r=a
if(this.d>0){if(this.c==null)this.c=r
return!0}if(!s)C.a.S(t,new D.e5(u))
t=this.b
if(t!=null)C.a.S(t,new D.e6(u))
u=this.b
if(u!=null)C.a.sl(u,0)
return!0},
fZ:function(){return this.A(null)},
hx:function(a,b){var u,t
u=this.d
if(u>0){--u
this.d=u
if(u<=0)u=this.c!=null
else u=!1
if(u){t=this.c
this.c=null
this.A(t)}}},
ah:function(){return this.hx(!0,!1)},
sab:function(a){this.a=H.l(a,"$ib",[{func:1,ret:-1,args:[D.r]}],"$ab")},
saP:function(a){this.b=H.l(a,"$ib",[{func:1,ret:-1,args:[D.r]}],"$ab")}}
D.e5.prototype={
$1:function(a){var u
H.h(a,{func:1,ret:-1,args:[D.r]})
u=this.a.a
u.b
a.$1(u)},
$S:23}
D.e6.prototype={
$1:function(a){var u
H.h(a,{func:1,ret:-1,args:[D.r]})
u=this.a.a
u.b
a.$1(u)},
$S:23}
D.r.prototype={}
D.cC.prototype={}
D.cD.prototype={}
D.E.prototype={
i:function(a){return"ValueChanged: "+this.c+", "+H.c(this.d)+" => "+H.c(this.e)}}
X.cq.prototype={
m:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.cq))return!1
if(this.a!=b.a)return!1
if(!this.b.m(0,b.b))return!1
return!0},
i:function(a){return this.b.i(0)+H.c(this.a)}}
X.cI.prototype={
m:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.cI))return!1
if(this.a!=b.a)return!1
if(!this.b.m(0,b.b))return!1
return!0},
i:function(a){return this.b.i(0)+H.c(this.a)}}
X.en.prototype={
hp:function(a){this.c=a.b
this.d.h(0,a.a)
return!1},
hl:function(a){this.c=a.b
this.d.P(0,a.a)
return!1},
sf_:function(a){this.d=H.l(a,"$iiM",[P.w],"$aiM")}}
X.cM.prototype={}
X.er.prototype={
aB:function(a,b){var u,t,s,r,q,p,o,n
u=new P.a3(Date.now(),!1)
t=this.x
s=b.a
r=this.Q
if(typeof s!=="number")return s.q()
q=b.b
p=this.ch
if(typeof q!=="number")return q.q()
o=new V.X(t.a+s*r,t.b+q*p)
p=this.a.gau()
n=new X.aH(a,V.b_(),this.x,this.y,this.z,p,o,u,this)
n.b=!0
this.z=u
this.x=o
return n},
bM:function(a,b){this.r=a.a
return!1},
aJ:function(a,b){var u,t
u=this.r
t=a.a
if(typeof t!=="number")return t.dj()
if(typeof u!=="number")return u.d6()
this.r=(u&~t)>>>0
return!1},
aI:function(a,b){var u=this.d
if(u==null)return!1
u.A(this.aB(a,b))
return!0},
hq:function(a){var u,t,s,r,q,p,o,n
u=this.e
if(u==null)return!1
t=this.a.gau()
s=this.x
r=Date.now()
q=a.a
p=this.cx
if(typeof q!=="number")return q.q()
o=a.b
n=this.cy
if(typeof o!=="number")return o.q()
r=new X.bR(new V.F(q*p,o*n),t,s,new P.a3(r,!1),this)
r.b=!0
u.A(r)
return!0},
eG:function(a,b,c){var u,t,s
if(this.f==null)return
u=new P.a3(Date.now(),!1)
t=this.f
s=new X.cM(c,a,this.a.gau(),b,u,this)
s.b=!0
t.A(s)
this.y=u
this.x=V.b_()}}
X.ab.prototype={
m:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.ab))return!1
if(this.a!==b.a)return!1
if(this.b!=b.b)return!1
if(this.c!=b.c)return!1
return!0},
i:function(a){var u=this.a?"Ctrl+":""
u+=this.b?"Alt+":""
return u+(this.c?"Shift+":"")}}
X.aH.prototype={}
X.ex.prototype={
be:function(a,b,c){var u,t,s
u=new P.a3(Date.now(),!1)
t=this.a.gau()
s=new X.aH(a,this.r,this.x,this.y,this.z,t,b,u,this)
s.b=!0
if(c){this.y=u
this.r=b}this.z=u
this.x=b
return s},
bM:function(a,b){var u
this.f=a.a
u=this.b
if(u==null)return!1
u.A(this.be(a,b,!0))
return!0},
aJ:function(a,b){var u,t
u=this.f
t=a.a
if(typeof t!=="number")return t.dj()
if(typeof u!=="number")return u.d6()
this.f=(u&~t)>>>0
u=this.c
if(u==null)return!1
u.A(this.be(a,b,!0))
return!0},
aI:function(a,b){var u=this.d
if(u==null)return!1
u.A(this.be(a,b,!1))
return!0},
hr:function(a,b){var u,t,s,r,q,p,o
u=this.e
if(u==null)return!1
t=this.a.gau()
s=Date.now()
r=a.a
q=this.Q
if(typeof r!=="number")return r.q()
p=a.b
o=this.ch
if(typeof p!=="number")return p.q()
s=new X.bR(new V.F(r*q,p*o),t,b,new P.a3(s,!1),this)
s.b=!0
u.A(s)
return!0},
gcH:function(){var u=this.b
if(u==null){u=D.H()
this.b=u}return u},
gd4:function(){var u=this.c
if(u==null){u=D.H()
this.c=u}return u},
gcM:function(){var u=this.d
if(u==null){u=D.H()
this.d=u}return u}}
X.bR.prototype={}
X.eK.prototype={}
X.dc.prototype={}
X.fd.prototype={
aB:function(a,b){var u,t,s,r
H.l(a,"$ib",[V.X],"$ab")
u=new P.a3(Date.now(),!1)
t=a.length>0?a[0]:V.b_()
s=this.a.gau()
r=new X.dc(a,this.f,this.r,this.x,this.y,s,t,u,this)
r.b=!0
if(b){this.x=u
this.f=t}this.y=u
this.r=t
return r},
ho:function(a){var u
H.l(a,"$ib",[V.X],"$ab")
u=this.b
if(u==null)return!1
u.A(this.aB(a,!0))
return!0},
hm:function(a){var u
H.l(a,"$ib",[V.X],"$ab")
u=this.c
if(u==null)return!1
u.A(this.aB(a,!0))
return!0},
hn:function(a){var u
H.l(a,"$ib",[V.X],"$ab")
u=this.d
if(u==null)return!1
u.A(this.aB(a,!1))
return!0}}
X.dk.prototype={
gau:function(){var u=this.a
return V.iK(0,0,C.m.gcD(u).c,C.m.gcD(u).d)},
cb:function(a){var u,t
u=a.keyCode
t=a.ctrlKey||a.metaKey
return new X.cI(u,new X.ab(t,a.altKey,a.shiftKey))},
ap:function(a){var u,t
u=this.b
t=a.ctrlKey||a.metaKey
u.c=new X.ab(t,a.altKey,a.shiftKey)},
bw:function(a){var u,t
u=this.b
t=a.ctrlKey||a.metaKey
u.c=new X.ab(t,a.altKey,a.shiftKey)},
ac:function(a){var u,t,s,r,q
u=this.a.getBoundingClientRect()
t=a.pageX
s=a.pageY
r=u.left
if(typeof t!=="number")return t.E()
q=u.top
if(typeof s!=="number")return s.E()
return new V.X(t-r,s-q)},
aC:function(a){return new V.F(a.movementX,a.movementY)},
bt:function(a){var u,t,s,r,q,p,o,n
u=this.a.getBoundingClientRect()
t=H.a([],[V.X])
for(s=a.touches,r=s.length,q=0;q<s.length;s.length===r||(0,H.x)(s),++q){p=s[q]
o=C.d.a2(p.pageX)
C.d.a2(p.pageY)
n=u.left
C.d.a2(p.pageX)
C.a.h(t,new V.X(o-n,C.d.a2(p.pageY)-u.top))}return t},
aa:function(a){var u,t
u=a.buttons
t=a.ctrlKey||a.metaKey
return new X.cq(u,new X.ab(t,a.altKey,a.shiftKey))},
bj:function(a){var u,t,s,r,q,p
u=this.a.getBoundingClientRect()
t=a.pageX
s=a.pageY
r=u.left
if(typeof t!=="number")return t.E()
q=t-r
if(q<0)return!1
t=u.top
if(typeof s!=="number")return s.E()
p=s-t
if(p<0)return!1
return q<u.width&&p<u.height},
eB:function(a){this.f=!0},
eo:function(a){this.f=!1},
ev:function(a){H.e(a,"$iV")
if(this.f&&this.bj(a))a.preventDefault()},
eF:function(a){var u
H.e(a,"$iaw")
if(!this.f)return
u=this.cb(a)
this.b.hp(u)},
eD:function(a){var u
H.e(a,"$iaw")
if(!this.f)return
u=this.cb(a)
this.b.hl(u)},
eI:function(a){var u,t,s,r
H.e(a,"$iV")
u=this.a
u.focus()
this.f=!0
this.ap(a)
if(this.x){t=this.aa(a)
s=this.aC(a)
if(this.d.bM(t,s))a.preventDefault()
return}if(this.r){this.y=a
u.requestPointerLock()
return}t=this.aa(a)
r=this.ac(a)
if(this.c.bM(t,r))a.preventDefault()},
eM:function(a){var u,t,s
H.e(a,"$iV")
this.ap(a)
u=this.aa(a)
if(this.x){t=this.aC(a)
if(this.d.aJ(u,t))a.preventDefault()
return}if(this.r)return
s=this.ac(a)
if(this.c.aJ(u,s))a.preventDefault()},
ez:function(a){var u,t,s
H.e(a,"$iV")
if(!this.bj(a)){this.ap(a)
u=this.aa(a)
if(this.x){t=this.aC(a)
if(this.d.aJ(u,t))a.preventDefault()
return}if(this.r)return
s=this.ac(a)
if(this.c.aJ(u,s))a.preventDefault()}},
eK:function(a){var u,t,s
H.e(a,"$iV")
this.ap(a)
u=this.aa(a)
if(this.x){t=this.aC(a)
if(this.d.aI(u,t))a.preventDefault()
return}if(this.r)return
s=this.ac(a)
if(this.c.aI(u,s))a.preventDefault()},
ex:function(a){var u,t,s
H.e(a,"$iV")
if(!this.bj(a)){this.ap(a)
u=this.aa(a)
if(this.x){t=this.aC(a)
if(this.d.aI(u,t))a.preventDefault()
return}if(this.r)return
s=this.ac(a)
if(this.c.aI(u,s))a.preventDefault()}},
eO:function(a){var u,t
H.e(a,"$iaA")
this.ap(a)
u=new V.F((a&&C.E).gfT(a),C.E.gfU(a)).w(0,180)
if(this.x){if(this.d.hq(u))a.preventDefault()
return}if(this.r)return
t=this.ac(a)
if(this.c.hr(u,t))a.preventDefault()},
eQ:function(a){var u,t,s
u=document.pointerLockElement===this.a
if(u!==this.x){this.x=u
t=this.aa(this.y)
s=this.ac(this.y)
this.d.eG(t,s,u)}},
eZ:function(a){var u
H.e(a,"$iap")
this.a.focus()
this.f=!0
this.bw(a)
u=this.bt(a)
if(this.e.ho(u))a.preventDefault()},
eV:function(a){var u
H.e(a,"$iap")
this.bw(a)
u=this.bt(a)
if(this.e.hm(u))a.preventDefault()},
eX:function(a){var u
H.e(a,"$iap")
this.bw(a)
u=this.bt(a)
if(this.e.hn(u))a.preventDefault()},
se1:function(a){this.z=H.l(a,"$ib",[[P.bY,P.B]],"$ab")}}
V.aD.prototype={
m:function(a,b){var u,t
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.aD))return!1
u=b.a
t=$.G().a
if(!(Math.abs(u-this.a)<t))return!1
if(!(Math.abs(b.b-this.b)<t))return!1
if(!(Math.abs(b.c-this.c)<t))return!1
if(!(Math.abs(b.d-this.d)<t))return!1
return!0},
i:function(a){return"["+V.M(this.a,3,0)+", "+V.M(this.b,3,0)+", "+V.M(this.c,3,0)+", "+V.M(this.d,3,0)+"]"}}
V.e3.prototype={}
V.cO.prototype={
aK:function(a,b){var u=H.a([this.a,this.d,this.r,this.b,this.e,this.x,this.c,this.f,this.y],[P.t])
return u},
m:function(a,b){var u,t
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.cO))return!1
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
t=V.bu(H.a([this.a,this.d,this.r],u),3,0)
s=V.bu(H.a([this.b,this.e,this.x],u),3,0)
r=V.bu(H.a([this.c,this.f,this.y],u),3,0)
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
V.aY.prototype={
aK:function(a,b){var u=H.a([this.a,this.e,this.y,this.cx,this.b,this.f,this.z,this.cy,this.c,this.r,this.Q,this.db,this.d,this.x,this.ch,this.dx],[P.t])
return u},
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
return V.aG(u*t+s*r+q*p+o*n,u*m+s*l+q*k+o*j,u*i+s*h+q*g+o*f,u*e+s*d+q*c+o*b,a*t+a0*r+a1*p+a2*n,a*m+a0*l+a1*k+a2*j,a*i+a0*h+a1*g+a2*f,a*e+a0*d+a1*c+a2*b,a3*t+a4*r+a5*p+a6*n,a3*m+a4*l+a5*k+a6*j,a3*i+a4*h+a5*g+a6*f,a3*e+a4*d+a5*c+a6*b,a7*t+a8*r+a9*p+b0*n,a7*m+a8*l+a9*k+b0*j,a7*i+a8*h+a9*g+b0*f,a7*e+a8*d+a9*c+b0*b)},
m:function(a,b){var u,t
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.aY))return!1
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
i:function(a){return this.H()},
cK:function(a,b,c){var u,t,s,r,q,p,o,n,m,l
u=[P.t]
t=V.bu(H.a([this.a,this.e,this.y,this.cx],u),b,c)
s=V.bu(H.a([this.b,this.f,this.z,this.cy],u),b,c)
r=V.bu(H.a([this.c,this.r,this.Q,this.db],u),b,c)
q=V.bu(H.a([this.d,this.x,this.ch,this.dx],u),b,c)
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
H:function(){return this.cK("",3,0)},
p:function(a){return this.cK(a,3,0)}}
V.X.prototype={
E:function(a,b){return new V.X(this.a-b.a,this.b-b.b)},
m:function(a,b){var u,t
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.X))return!1
u=b.a
t=$.G().a
if(!(Math.abs(u-this.a)<t))return!1
if(!(Math.abs(b.b-this.b)<t))return!1
return!0},
i:function(a){return"["+V.M(this.a,3,0)+", "+V.M(this.b,3,0)+"]"}}
V.b0.prototype={
E:function(a,b){return new V.b0(this.a-b.a,this.b-b.b,this.c-b.c)},
m:function(a,b){var u,t
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.b0))return!1
u=b.a
t=$.G().a
if(!(Math.abs(u-this.a)<t))return!1
if(!(Math.abs(b.b-this.b)<t))return!1
if(!(Math.abs(b.c-this.c)<t))return!1
return!0},
i:function(a){return"["+V.M(this.a,3,0)+", "+V.M(this.b,3,0)+", "+V.M(this.c,3,0)+"]"}}
V.cZ.prototype={
m:function(a,b){var u,t
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.cZ))return!1
u=b.a
t=$.G().a
if(!(Math.abs(u-this.a)<t))return!1
if(!(Math.abs(b.b-this.b)<t))return!1
if(!(Math.abs(b.c-this.c)<t))return!1
if(!(Math.abs(b.d-this.d)<t))return!1
return!0},
i:function(a){return"["+V.M(this.a,3,0)+", "+V.M(this.b,3,0)+", "+V.M(this.c,3,0)+", "+V.M(this.d,3,0)+"]"}}
V.d1.prototype={
gY:function(){var u,t
u=this.c
t=this.d
if(u>t)return t
else return u},
m:function(a,b){var u,t
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.d1))return!1
u=b.a
t=$.G().a
if(!(Math.abs(u-this.a)<t))return!1
if(!(Math.abs(b.b-this.b)<t))return!1
if(!(Math.abs(b.c-this.c)<t))return!1
if(!(Math.abs(b.d-this.d)<t))return!1
return!0},
i:function(a){return"["+V.M(this.a,3,0)+", "+V.M(this.b,3,0)+", "+V.M(this.c,3,0)+", "+V.M(this.d,3,0)+"]"}}
V.F.prototype={
bH:function(a){return Math.sqrt(this.C(this))},
C:function(a){var u,t,s,r
u=this.a
t=a.a
if(typeof u!=="number")return u.q()
if(typeof t!=="number")return H.y(t)
s=this.b
r=a.b
if(typeof s!=="number")return s.q()
if(typeof r!=="number")return H.y(r)
return u*t+s*r},
q:function(a,b){var u,t
u=this.a
if(typeof u!=="number")return u.q()
t=this.b
if(typeof t!=="number")return t.q()
return new V.F(u*b,t*b)},
w:function(a,b){var u,t
if(Math.abs(b-0)<$.G().a){u=$.iV
if(u==null){u=new V.F(0,0)
$.iV=u}return u}u=this.a
if(typeof u!=="number")return u.w()
t=this.b
if(typeof t!=="number")return t.w()
return new V.F(u/b,t/b)},
m:function(a,b){var u,t,s
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.F))return!1
u=b.a
t=this.a
s=$.G()
s.toString
if(typeof u!=="number")return u.E()
if(typeof t!=="number")return H.y(t)
s=s.a
if(!(Math.abs(u-t)<s))return!1
u=b.b
t=this.b
if(typeof u!=="number")return u.E()
if(typeof t!=="number")return H.y(t)
if(!(Math.abs(u-t)<s))return!1
return!0},
i:function(a){return"["+V.M(this.a,3,0)+", "+V.M(this.b,3,0)+"]"}}
V.N.prototype={
bH:function(a){return Math.sqrt(this.C(this))},
C:function(a){return this.a*a.a+this.b*a.b+this.c*a.c},
bI:function(a,b){var u,t,s
u=this.a
t=this.b
s=this.c
return new V.N(u+b*(a.a-u),t+b*(a.b-t),s+b*(a.c-s))},
aF:function(a){var u,t,s,r,q,p
u=this.b
t=a.c
s=this.c
r=a.b
q=a.a
p=this.a
return new V.N(u*t-s*r,s*q-p*t,p*r-u*q)},
B:function(a,b){return new V.N(this.a+b.a,this.b+b.b,this.c+b.c)},
K:function(a){return new V.N(-this.a,-this.b,-this.c)},
w:function(a,b){if(Math.abs(b-0)<$.G().a)return V.dp()
return new V.N(this.a/b,this.b/b,this.c/b)},
cL:function(){var u=$.G().a
if(!(Math.abs(0-this.a)<u))return!1
if(!(Math.abs(0-this.b)<u))return!1
if(!(Math.abs(0-this.c)<u))return!1
return!0},
m:function(a,b){var u,t
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.N))return!1
u=b.a
t=$.G().a
if(!(Math.abs(u-this.a)<t))return!1
if(!(Math.abs(b.b-this.b)<t))return!1
if(!(Math.abs(b.c-this.c)<t))return!1
return!0},
i:function(a){return"["+V.M(this.a,3,0)+", "+V.M(this.b,3,0)+", "+V.M(this.c,3,0)+"]"}}
U.dT.prototype={
ba:function(a){var u=V.l3(a,this.c,this.b)
return u},
gn:function(){var u=this.y
if(u==null){u=D.H()
this.y=u}return u},
J:function(a){var u=this.y
if(u!=null)u.A(a)},
sbP:function(a,b){},
sbJ:function(a){var u,t
u=this.b
if(!(Math.abs(u-a)<$.G().a)){this.b=a
if(a<this.c){this.c=a
this.d=a}else{t=this.d
if(a<t)this.d=this.ba(t)}u=new D.E("maximumLocation",u,this.b,this,[P.t])
u.b=!0
this.J(u)}},
sbL:function(a){var u,t
u=this.c
if(!(Math.abs(u-a)<$.G().a)){this.c=a
if(this.b<a){this.b=a
this.d=a}else{t=this.d
if(a>t)this.d=this.ba(t)}u=new D.E("minimumLocation",u,this.c,this,[P.t])
u.b=!0
this.J(u)}},
sX:function(a,b){var u
b=this.ba(b)
u=this.d
if(!(Math.abs(u-b)<$.G().a)){this.d=b
u=new D.E("location",u,b,this,[P.t])
u.b=!0
this.J(u)}},
sbK:function(a){var u,t,s
u=this.e
if(!(Math.abs(u-a)<$.G().a)){this.e=a
t=this.f
s=-a
if(t<s)t=s
else if(t>a)t=a
this.f=t
u=new D.E("maximumVelocity",u,a,this,[P.t])
u.b=!0
this.J(u)}},
sM:function(a){var u,t
u=this.e
t=-u
if(a<t)a=t
else if(a>u)a=u
u=this.f
if(!(Math.abs(u-a)<$.G().a)){this.f=a
u=new D.E("velocity",u,a,this,[P.t])
u.b=!0
this.J(u)}},
sbE:function(a){var u
if(a<0)a=0
else if(a>1)a=1
u=this.x
if(!(Math.abs(u-a)<$.G().a)){this.x=a
u=new D.E("dampening",u,a,this,[P.t])
u.b=!0
this.J(u)}},
aw:function(a){var u,t,s,r,q
u=this.f
t=$.G().a
if(!(Math.abs(u-0)<t)||!(Math.abs(this.r-0)<t)){s=u+this.r*a
u=this.e
r=-u
if(s<r)s=r
else if(s>u)s=u
this.sX(0,this.d+s*a)
u=this.x
if(!(Math.abs(u-0)<$.G().a)){q=s*Math.pow(1-u,a)
if(s<0){if(q<s)q=s
else if(q>0)q=0}else if(q<0)q=0
else if(q>s)q=s
s=q}this.sM(s)}}}
U.cs.prototype={
gn:function(){var u=this.b
if(u==null){u=D.H()
this.b=u}return u},
ax:function(a,b){return this.a},
m:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.cs))return!1
return J.O(this.a,b.a)},
i:function(a){return"Constant: "+this.a.p("          ")}}
U.bM.prototype={
gn:function(){var u=this.e
if(u==null){u=D.H()
this.e=u}return u},
J:function(a){var u
H.e(a,"$ir")
u=this.e
if(u!=null)u.A(a)},
U:function(){return this.J(null)},
em:function(a,b){var u,t,s,r,q,p,o,n
u=U.W
H.l(b,"$in",[u],"$an")
for(t=b.length,s=this.gao(),r={func:1,ret:-1,args:[D.r]},q=[r],p=0;p<b.length;b.length===t||(0,H.x)(b),++p){o=b[p]
if(o!=null){n=o.gn()
n.toString
H.h(s,r)
if(n.a==null)n.sab(H.a([],q))
n=n.a;(n&&C.a).h(n,s)}}u=new D.cC(a,b,this,[u])
u.b=!0
this.J(u)},
eT:function(a,b){var u,t,s
u=U.W
H.l(b,"$in",[u],"$an")
for(t=b.gL(b),s=this.gao();t.u();)t.gG().gn().P(0,s)
u=new D.cD(a,b,this,[u])
u.b=!0
this.J(u)},
ax:function(a,b){var u,t,s,r
u=this.r
t=a.e
if(typeof u!=="number")return u.az()
if(u<t){this.r=t
u=this.e
if(u!=null)++u.d
for(u=this.a,u=new J.ae(u,u.length,0,[H.q(u,0)]),s=null;u.u();){t=u.d
if(t!=null){r=t.ax(a,b)
if(r!=null)s=s==null?r:r.q(0,s)}}this.f=s==null?V.cP():s
u=this.e
if(u!=null)u.ah()}return this.f},
m:function(a,b){var u,t,s,r
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.bM))return!1
u=this.a.length
for(t=0;t<u;++t){s=this.a
if(t>=s.length)return H.i(s,t)
s=s[t]
r=b.a
if(t>=r.length)return H.i(r,t)
if(!J.O(s,r[t]))return!1}return!0},
i:function(a){return"Group"},
$an:function(){return[U.W]},
$aQ:function(){return[U.W]},
$iW:1}
U.W.prototype={}
U.dl.prototype={
gn:function(){var u=this.cy
if(u==null){u=D.H()
this.cy=u}return u},
J:function(a){var u
H.e(a,"$ir")
u=this.cy
if(u!=null)u.A(a)},
U:function(){return this.J(null)},
aE:function(a){if(this.a!=null)return!1
this.a=a
a.c.gcH().h(0,this.gbk())
this.a.c.gcM().h(0,this.gbm())
this.a.c.gd4().h(0,this.gbo())
return!0},
bl:function(a){H.e(a,"$ir")
if(!J.O(this.c,this.a.b.c))return
this.y=!0
this.x=!0
this.z=this.b.d},
bn:function(a){var u,t,s,r,q,p,o
a=H.a_(H.e(a,"$ir"),"$iaH")
if(!this.y)return
if(this.x){u=a.d.E(0,a.y)
u=new V.F(u.a,u.b)
u=u.C(u)
t=this.r
if(typeof t!=="number")return H.y(t)
if(u<t)return
this.x=!1}if(this.d){u=a.c
t=a.d.E(0,a.y)
u=new V.F(t.a,t.b).q(0,2).w(0,u.gY())
this.Q=u
t=this.b
u=u.a
if(typeof u!=="number")return u.q()
s=this.e
if(typeof s!=="number")return H.y(s)
t.sM(u*10*s)}else{u=a.c
t=a.d
s=t.E(0,a.y)
r=new V.F(s.a,s.b).q(0,2).w(0,u.gY())
s=this.b
q=r.a
if(typeof q!=="number")return q.K()
p=this.e
if(typeof p!=="number")return H.y(p)
o=this.z
if(typeof o!=="number")return H.y(o)
s.sX(0,-q*p+o)
this.b.sM(0)
t=t.E(0,a.z)
this.Q=new V.F(t.a,t.b).q(0,2).w(0,u.gY())}this.U()},
bp:function(a){var u,t,s
H.e(a,"$ir")
if(!this.y)return
this.y=!1
if(this.x)return
u=this.Q
if(u.C(u)>0.0001){u=this.b
t=this.Q.a
if(typeof t!=="number")return t.q()
s=this.e
if(typeof s!=="number")return H.y(s)
u.sM(t*10*s)
this.U()}},
ax:function(a,b){var u,t,s,r,q
u=this.ch
t=a.e
if(typeof u!=="number")return u.az()
if(u<t){this.ch=t
s=a.y
this.b.aw(s)
u=this.b.d
r=Math.cos(u)
q=Math.sin(u)
this.cx=V.aG(r,-q,0,0,q,r,0,0,0,0,1,0,0,0,0,1)}return this.cx},
$iW:1}
U.dm.prototype={
gn:function(){var u=this.fx
if(u==null){u=D.H()
this.fx=u}return u},
J:function(a){var u
H.e(a,"$ir")
u=this.fx
if(u!=null)u.A(a)},
U:function(){return this.J(null)},
aE:function(a){var u,t
if(this.a!=null)return!1
this.a=a
a.c.gcH().h(0,this.gbk())
this.a.c.gcM().h(0,this.gbm())
this.a.c.gd4().h(0,this.gbo())
u=this.a.d
t=u.f
if(t==null){t=D.H()
u.f=t
u=t}else u=t
u.h(0,this.gef())
u=this.a.d
t=u.d
if(t==null){t=D.H()
u.d=t
u=t}else u=t
u.h(0,this.geh())
u=this.a.e
t=u.b
if(t==null){t=D.H()
u.b=t
u=t}else u=t
u.h(0,this.gfo())
u=this.a.e
t=u.d
if(t==null){t=D.H()
u.d=t
u=t}else u=t
u.h(0,this.gfm())
u=this.a.e
t=u.c
if(t==null){t=D.H()
u.c=t
u=t}else u=t
u.h(0,this.gfk())
return!0},
a4:function(a){var u,t
u=a.a
t=a.b
if(this.f){if(typeof u!=="number")return u.K()
u=-u}if(this.r){if(typeof t!=="number")return t.K()
t=-t}return new V.F(u,t)},
bl:function(a){a=H.a_(H.e(a,"$ir"),"$iaH")
if(!J.O(this.d,a.x.b))return
this.cx=!0
this.ch=!0
this.cy=this.c.d
this.db=this.b.d},
bn:function(a){var u,t,s,r,q,p,o
a=H.a_(H.e(a,"$ir"),"$iaH")
if(!this.cx)return
if(this.ch){u=a.d.E(0,a.y)
u=new V.F(u.a,u.b)
u=u.C(u)
t=this.Q
if(typeof t!=="number")return H.y(t)
if(u<t)return
this.ch=!1}if(this.e){u=a.c
t=a.d.E(0,a.y)
u=this.a4(new V.F(t.a,t.b).q(0,2).w(0,u.gY()))
this.dx=u
t=this.c
u=u.a
if(typeof u!=="number")return u.K()
s=this.y
if(typeof s!=="number")return H.y(s)
t.sM(-u*10*s)
s=this.b
u=this.dx.b
if(typeof u!=="number")return u.K()
t=this.x
if(typeof t!=="number")return H.y(t)
s.sM(-u*10*t)}else{u=a.c
t=a.d
s=t.E(0,a.y)
r=this.a4(new V.F(s.a,s.b).q(0,2).w(0,u.gY()))
s=this.c
q=r.a
if(typeof q!=="number")return q.K()
p=this.y
if(typeof p!=="number")return H.y(p)
o=this.cy
if(typeof o!=="number")return H.y(o)
s.sX(0,-q*p+o)
o=this.b
p=r.b
if(typeof p!=="number")return p.K()
q=this.x
if(typeof q!=="number")return H.y(q)
s=this.db
if(typeof s!=="number")return H.y(s)
o.sX(0,-p*q+s)
this.b.sM(0)
this.c.sM(0)
t=t.E(0,a.z)
this.dx=this.a4(new V.F(t.a,t.b).q(0,2).w(0,u.gY()))}this.U()},
bp:function(a){var u,t,s
H.e(a,"$ir")
if(!this.cx)return
this.cx=!1
if(this.ch)return
u=this.dx
if(u.C(u)>0.0001){u=this.c
t=this.dx.a
if(typeof t!=="number")return t.K()
s=this.y
if(typeof s!=="number")return H.y(s)
u.sM(-t*10*s)
s=this.b
t=this.dx.b
if(typeof t!=="number")return t.K()
u=this.x
if(typeof u!=="number")return H.y(u)
s.sM(-t*10*u)
this.U()}},
eg:function(a){if(H.a_(H.e(a,"$ir"),"$icM").x){this.ch=!0
this.cy=this.c.d
this.db=this.b.d}},
ei:function(a){var u,t,s,r,q,p,o
a=H.a_(H.e(a,"$ir"),"$iaH")
if(!J.O(this.d,a.x.b))return
u=a.c
t=a.d
s=t.E(0,a.y)
r=this.a4(new V.F(s.a,s.b).q(0,2).w(0,u.gY()))
s=this.c
q=r.a
if(typeof q!=="number")return q.K()
p=this.y
if(typeof p!=="number")return H.y(p)
o=this.cy
if(typeof o!=="number")return H.y(o)
s.sX(0,-q*p+o)
o=this.b
p=r.b
if(typeof p!=="number")return p.K()
q=this.x
if(typeof q!=="number")return H.y(q)
s=this.db
if(typeof s!=="number")return H.y(s)
o.sX(0,-p*q+s)
this.b.sM(0)
this.c.sM(0)
t=t.E(0,a.z)
this.dx=this.a4(new V.F(t.a,t.b).q(0,2).w(0,u.gY()))
this.U()},
fp:function(a){H.e(a,"$ir")
this.cx=!0
this.ch=!0
this.cy=this.c.d
this.db=this.b.d},
fn:function(a){var u,t,s,r,q,p,o
a=H.a_(H.e(a,"$ir"),"$idc")
if(!this.cx)return
if(this.ch){u=a.d.E(0,a.y)
u=new V.F(u.a,u.b)
u=u.C(u)
t=this.Q
if(typeof t!=="number")return H.y(t)
if(u<t)return
this.ch=!1}if(this.e){u=a.c
t=a.d.E(0,a.y)
u=this.a4(new V.F(t.a,t.b).q(0,2).w(0,u.gY()))
this.dx=u
t=this.c
u=u.a
if(typeof u!=="number")return u.K()
s=this.y
if(typeof s!=="number")return H.y(s)
t.sM(-u*10*s)
s=this.b
u=this.dx.b
if(typeof u!=="number")return u.K()
t=this.x
if(typeof t!=="number")return H.y(t)
s.sM(-u*10*t)}else{u=a.c
t=a.d
s=t.E(0,a.y)
r=this.a4(new V.F(s.a,s.b).q(0,2).w(0,u.gY()))
s=this.c
q=r.a
if(typeof q!=="number")return q.K()
p=this.y
if(typeof p!=="number")return H.y(p)
o=this.cy
if(typeof o!=="number")return H.y(o)
s.sX(0,-q*p+o)
o=this.b
p=r.b
if(typeof p!=="number")return p.K()
q=this.x
if(typeof q!=="number")return H.y(q)
s=this.db
if(typeof s!=="number")return H.y(s)
o.sX(0,-p*q+s)
this.b.sM(0)
this.c.sM(0)
t=t.E(0,a.z)
this.dx=this.a4(new V.F(t.a,t.b).q(0,2).w(0,u.gY()))}this.U()},
fl:function(a){var u,t,s
H.e(a,"$ir")
if(!this.cx)return
this.cx=!1
if(this.ch)return
u=this.dx
if(u.C(u)>0.0001){u=this.c
t=this.dx.a
if(typeof t!=="number")return t.K()
s=this.y
if(typeof s!=="number")return H.y(s)
u.sM(-t*10*s)
s=this.b
t=this.dx.b
if(typeof t!=="number")return t.K()
u=this.x
if(typeof u!=="number")return H.y(u)
s.sM(-t*10*u)
this.U()}},
ax:function(a,b){var u,t,s,r,q
u=this.dy
t=a.e
if(typeof u!=="number")return u.az()
if(u<t){this.dy=t
s=a.y
this.c.aw(s)
this.b.aw(s)
u=this.b.d
r=Math.cos(u)
q=Math.sin(u)
u=V.aG(1,0,0,0,0,r,-q,0,0,q,r,0,0,0,0,1)
t=this.c.d
r=Math.cos(t)
q=Math.sin(t)
this.fr=u.q(0,V.aG(r,0,-q,0,0,1,0,0,q,0,r,0,0,0,0,1))}return this.fr},
$iW:1}
U.dn.prototype={
gn:function(){var u=this.r
if(u==null){u=D.H()
this.r=u}return u},
J:function(a){var u=this.r
if(u!=null)u.A(a)},
aE:function(a){var u,t,s
if(this.a!=null)return!1
this.a=a
u=a.c
t=u.e
if(t==null){t=D.H()
u.e=t
u=t}else u=t
t=this.gej()
u.h(0,t)
u=this.a.d
s=u.e
if(s==null){s=D.H()
u.e=s
u=s}else u=s
u.h(0,t)
return!0},
ek:function(a){var u,t,s,r
H.e(a,"$ir")
if(!J.O(this.b,this.a.b.c))return
H.a_(a,"$ibR")
u=this.d
t=a.x.b
s=this.c
if(typeof t!=="number")return t.q()
r=u+t*s
if(u!==r){this.d=r
u=new D.E("zoom",u,r,this,[P.t])
u.b=!0
this.J(u)}},
ax:function(a,b){var u,t,s
u=this.e
t=a.e
if(u<t){this.e=t
s=Math.pow(10,this.d)
this.f=V.aG(s,0,0,0,0,s,0,0,0,0,s,0,0,0,0,1)}return this.f},
$iW:1}
M.cw.prototype={
a9:function(a){var u
H.e(a,"$ir")
u=this.x
if(u!=null)u.A(a)},
dJ:function(){return this.a9(null)},
eq:function(a,b){var u,t,s,r,q,p,o,n
u=E.a4
H.l(b,"$in",[u],"$an")
for(t=b.length,s=this.ga3(),r={func:1,ret:-1,args:[D.r]},q=[r],p=0;p<b.length;b.length===t||(0,H.x)(b),++p){o=b[p]
if(o!=null){n=o.z
if(n==null){n=new D.bK()
n.sab(null)
n.saP(null)
n.c=null
n.d=0
o.z=n}H.h(s,r)
if(n.a==null)n.sab(H.a([],q))
n=n.a;(n&&C.a).h(n,s)}}u=new D.cC(a,b,this,[u])
u.b=!0
this.a9(u)},
es:function(a,b){var u,t,s
u=E.a4
H.l(b,"$in",[u],"$an")
for(t=b.gL(b),s=this.ga3();t.u();)t.gG().gn().P(0,s)
u=new D.cD(a,b,this,[u])
u.b=!0
this.a9(u)},
sd_:function(a,b){var u,t
u=this.b
if(u!==b){if(u!=null)u.gn().P(0,this.ga3())
t=this.b
this.b=b
b.gn().h(0,this.ga3())
u=new D.E("target",t,this.b,this,[X.d7])
u.b=!0
this.a9(u)}},
sd0:function(a){var u,t
u=this.c
if(u!=a){if(u!=null)u.gn().P(0,this.ga3())
t=this.c
this.c=a
if(a!=null)a.gn().h(0,this.ga3())
u=new D.E("technique",t,this.c,this,[O.bn])
u.b=!0
this.a9(u)}},
gn:function(){var u=this.x
if(u==null){u=D.H()
this.x=u}return u},
av:function(a1){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0
a1.cW(this.c)
u=this.b
u.toString
t=a1.a
C.b.fC(t,36160,null)
C.b.cI(t,2884)
C.b.cI(t,2929)
C.b.fV(t,513)
s=t.drawingBufferWidth
r=t.drawingBufferHeight
q=u.r
p=q.a
if(typeof s!=="number")return H.y(s)
o=C.d.a2(p*s)
p=q.b
if(typeof r!=="number")return H.y(r)
n=C.d.a2(p*r)
p=C.d.a2(q.c*s)
a1.c=p
q=C.d.a2(q.d*r)
a1.d=q
C.b.hO(t,o,n,p,q)
C.b.fH(t,u.c)
u=u.a
C.b.fG(t,u.a,u.b,u.c,u.d)
C.b.fF(t,16640)
u=this.a
t=a1.c
q=a1.d
p=u.c
m=u.d
l=u.e
k=l-m
j=1/Math.tan(p*0.5)
i=V.aG(-j/(t/q),0,0,0,0,j,0,0,0,0,l/k,-l*m/k,0,0,1,0)
u.a
a1.cy.cV(i)
t=$.iE
if(t==null){t=$.iG
if(t==null){t=new V.b0(0,0,0)
$.iG=t}q=$.iX
if(q==null){q=new V.N(0,1,0)
$.iX=q}p=$.iW
if(p==null){p=new V.N(0,0,-1)
$.iW=p}h=p.w(0,Math.sqrt(p.C(p)))
q=q.aF(h)
g=q.w(0,Math.sqrt(q.C(q)))
f=h.aF(g)
e=new V.N(t.a,t.b,t.c)
d=g.K(0).C(e)
c=f.K(0).C(e)
b=h.K(0).C(e)
t=V.aG(g.a,f.a,h.a,d,g.b,f.b,h.b,c,g.c,f.c,h.c,b,0,0,0,1)
$.iE=t
a=t}else a=t
u=u.b
if(u!=null){a0=u.a
if(a0!=null)a=a0.q(0,a)}a1.db.cV(a)
for(u=this.d.a,u=new J.ae(u,u.length,0,[H.q(u,0)]);u.u();)u.d.aw(a1)
for(u=this.d.a,u=new J.ae(u,u.length,0,[H.q(u,0)]);u.u();)u.d.av(a1)
this.a.toString
a1.cy.bN()
a1.db.bN()
this.b.toString
a1.cU()},
sdI:function(a,b){this.d=H.l(b,"$iQ",[E.a4],"$aQ")},
$ilb:1}
A.cm.prototype={}
A.dO.prototype={
v:function(a,b){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<t;++s){r=u[s]
if(r.b===b)return r}return},
h_:function(){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<u.length;u.length===t||(0,H.x)(u),++s){r=u[s]
C.b.cJ(r.a,r.c)}},
fW:function(){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<u.length;u.length===t||(0,H.x)(u),++s){r=u[s]
C.b.cG(r.a,r.c)}}}
A.eE.prototype={}
A.eF.prototype={
i:function(a){return this.e}}
A.bV.prototype={
dD:function(a,b){this.c=null
this.d=null
this.e=null
this.f=null
this.r=null
this.x=null
this.y=null},
cc:function(a,b){var u,t,s
u=this.a
t=C.b.fP(u,b)
C.b.dq(u,t,a)
C.b.fI(u,t)
if(!H.i1(C.b.dg(u,t,35713))){s=C.b.df(u,t)
C.b.fS(u,t)
throw H.d(P.P("Error compiling shader '"+H.c(t)+"': "+H.c(s)))}return t},
fa:function(){var u,t,s,r,q,p
u=H.a([],[A.cm])
t=this.a
s=H.Z(C.b.b2(t,this.r,35721))
if(typeof s!=="number")return H.y(s)
r=0
for(;r<s;++r){q=C.b.d7(t,this.r,r)
p=C.b.d9(t,this.r,q.name)
C.a.h(u,new A.cm(t,q.name,p))}this.x=new A.dO(u)},
fc:function(){var u,t,s,r,q,p
u=H.a([],[A.dd])
t=this.a
s=H.Z(C.b.b2(t,this.r,35718))
if(typeof s!=="number")return H.y(s)
r=0
for(;r<s;++r){q=C.b.d8(t,this.r,r)
p=C.b.dh(t,this.r,q.name)
C.a.h(u,this.fQ(q.type,q.size,q.name,p))}this.y=new A.fq(u)},
am:function(a,b,c){var u,t
u=this.a
t=this.r
if(a===1)return new A.c2(u,t,b,c)
else return A.hT(u,t,b,a,c)},
dY:function(a,b,c){var u,t
u=this.a
t=this.r
if(a===1)return new A.dg(u,t,b,c)
else return A.hT(u,t,b,a,c)},
dZ:function(a,b,c){var u,t
u=this.a
t=this.r
if(a===1)return new A.dh(u,t,b,c)
else return A.hT(u,t,b,a,c)},
aS:function(a,b){return new P.du(a+" uniform variables are unsupported by all browsers.\n"+("Please change the type of "+H.c(b)+"."))},
fQ:function(a,b,c,d){switch(a){case 5120:return this.am(b,c,d)
case 5121:return this.am(b,c,d)
case 5122:return this.am(b,c,d)
case 5123:return this.am(b,c,d)
case 5124:return this.am(b,c,d)
case 5125:return this.am(b,c,d)
case 5126:return new A.fi(this.a,this.r,c,d)
case 35664:return new A.fk(this.a,this.r,c,d)
case 35665:return new A.fm(this.a,this.r,c,d)
case 35666:return new A.fo(this.a,this.r,c,d)
case 35667:return new A.fl(this.a,this.r,c,d)
case 35668:return new A.fn(this.a,this.r,c,d)
case 35669:return new A.fp(this.a,this.r,c,d)
case 35674:return new A.fr(this.a,this.r,c,d)
case 35675:return new A.df(this.a,this.r,c,d)
case 35676:return new A.bo(this.a,this.r,c,d)
case 35678:return this.dY(b,c,d)
case 35680:return this.dZ(b,c,d)
case 35670:throw H.d(this.aS("BOOL",c))
case 35671:throw H.d(this.aS("BOOL_VEC2",c))
case 35672:throw H.d(this.aS("BOOL_VEC3",c))
case 35673:throw H.d(this.aS("BOOL_VEC4",c))
default:throw H.d(P.P("Unknown uniform variable type "+H.c(a)+" for "+H.c(c)+"."))}}}
A.b9.prototype={
i:function(a){return this.b}}
A.dd.prototype={}
A.fq.prototype={
v:function(a,b){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<t;++s){r=u[s]
if(r.c===b)return r}return},
a8:function(a,b){var u=this.v(0,b)
if(u==null)throw H.d(P.P("Required uniform value, "+b+", was not defined or used in shader."))
return u},
i:function(a){return this.H()},
h3:function(a){var u,t,s,r
for(u=this.a,t=u.length,s="",r=0;r<u.length;u.length===t||(0,H.x)(u),++r)s+=u[r].i(0)+a
return s},
H:function(){return this.h3("\n")}}
A.c2.prototype={
i:function(a){return"Uniform1i: "+H.c(this.c)}}
A.fl.prototype={
i:function(a){return"Uniform2i: "+H.c(this.c)}}
A.fn.prototype={
i:function(a){return"Uniform3i: "+H.c(this.c)}}
A.fp.prototype={
i:function(a){return"Uniform4i: "+H.c(this.c)}}
A.fj.prototype={
i:function(a){return"Uniform1iv: "+H.c(this.c)},
sfs:function(a){this.e=H.l(a,"$ib",[P.w],"$ab")}}
A.fi.prototype={
i:function(a){return"Uniform1f: "+H.c(this.c)}}
A.fk.prototype={
i:function(a){return"Uniform2f: "+H.c(this.c)}}
A.fm.prototype={
i:function(a){return"Uniform3f: "+H.c(this.c)}}
A.fo.prototype={
i:function(a){return"Uniform4f: "+H.c(this.c)}}
A.fr.prototype={
i:function(a){return"Uniform1Mat2 "+H.c(this.c)}}
A.df.prototype={
i:function(a){return"UniformMat3: "+H.c(this.c)}}
A.bo.prototype={
b4:function(a){var u=new Float32Array(H.hm(H.l(a,"$ib",[P.t],"$ab")))
C.b.hM(this.a,this.d,!1,u)},
i:function(a){return"UniformMat4: "+H.c(this.c)}}
A.dg.prototype={
i:function(a){return"UniformSampler2D: "+H.c(this.c)}}
A.dh.prototype={
i:function(a){return"UniformSamplerCube: "+H.c(this.c)}}
F.hk.prototype={
$3:function(a,b,c){var u,t,s
u=this.a
t=u.a.bI(u.b,b).bI(u.d.bI(u.c,b),c)
u=new V.b0(t.a,t.b,t.c)
if(!J.O(a.f,u)){a.f=u
u=a.a
if(u!=null)u.W()}a.shE(t.w(0,Math.sqrt(t.C(t))))
u=1-b
s=1-c
s=new V.cZ(this.b+b*c,this.c+u*c,this.d+b*s,this.e+u*s)
if(!J.O(a.cx,s)){a.cx=s
u=a.a
if(u!=null)u.W()}},
$S:31}
F.R.prototype={
dS:function(){var u,t,s,r,q
u=this.a
t=u==null?null:u.r
u=this.b
s=u==null?null:u.r
u=this.c
r=u==null?null:u.r
q=V.dp()
if(t!=null)q=q.B(0,t)
if(s!=null)q=q.B(0,s)
if(r!=null)q=q.B(0,r)
if(q.cL())return
return q.w(0,Math.sqrt(q.C(q)))},
dU:function(){var u,t,s,r,q
u=this.a
t=u==null?null:u.f
u=this.b
s=u==null?null:u.f
u=this.c
r=u==null?null:u.f
if(t==null||s==null||r==null)return
u=s.E(0,t)
u=new V.N(u.a,u.b,u.c)
q=u.w(0,Math.sqrt(u.C(u)))
u=r.E(0,t)
u=new V.N(u.a,u.b,u.c)
u=q.aF(u.w(0,Math.sqrt(u.C(u))))
return u.w(0,Math.sqrt(u.C(u)))},
bB:function(){if(this.d!=null)return!0
var u=this.dS()
if(u==null){u=this.dU()
if(u==null)return!1}this.d=u
this.a.a.W()
return!0},
dR:function(){var u,t,s,r,q
u=this.a
t=u==null?null:u.x
u=this.b
s=u==null?null:u.x
u=this.c
r=u==null?null:u.x
q=V.dp()
if(t!=null)q=q.B(0,t)
if(s!=null)q=q.B(0,s)
if(r!=null)q=q.B(0,r)
if(q.cL())return
return q.w(0,Math.sqrt(q.C(q)))},
dT:function(){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f
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
if(Math.abs(i-0)<$.G().a){u=m.E(0,p)
u=new V.N(u.a,u.b,u.c)
h=u.w(0,Math.sqrt(u.C(u)))
if(j.a-k.a<0)h=h.K(0)}else{g=(u-l.b)/i
u=m.E(0,p)
u=new V.b0(u.a*g+p.a,u.b*g+p.b,u.c*g+p.c).E(0,s)
u=new V.N(u.a,u.b,u.c)
h=u.w(0,Math.sqrt(u.C(u)))
j=j.a
k=k.a
if((j-k)*g+k-l.a<0)h=h.K(0)}u=this.d
if(u!=null){f=u.w(0,Math.sqrt(u.C(u)))
u=f.aF(h)
u=u.w(0,Math.sqrt(u.C(u))).aF(f)
h=u.w(0,Math.sqrt(u.C(u)))}return h},
bz:function(){if(this.e!=null)return!0
var u=this.dR()
if(u==null){u=this.dT()
if(u==null)return!1}this.e=u
this.a.a.W()
return!0},
m:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.H()},
p:function(a){var u,t
u=this.a
if(u==null||this.b==null||this.c==null)return a+"disposed"
t=a+C.c.a0(J.a8(u.e),0)+", "+C.c.a0(J.a8(this.b.e),0)+", "+C.c.a0(J.a8(this.c.e),0)+" {"
u=this.d
t=u!=null?t+(u.i(0)+", "):t+"-, "
u=this.e
return u!=null?t+(u.i(0)+"}"):t+"-}"},
H:function(){return this.p("")}}
F.aF.prototype={
m:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.H()},
p:function(a){var u=this.a
if(u==null||this.b==null)return a+"disposed"
return a+C.c.a0(J.a8(u.e),0)+", "+C.c.a0(J.a8(this.b.e),0)},
H:function(){return this.p("")}}
F.aZ.prototype={
m:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.H()},
p:function(a){var u=this.a
if(u==null)return a+"disposed"
return a+C.c.a0(J.a8(u.e),0)},
H:function(){return this.p("")}}
F.d3.prototype={
gn:function(){var u=this.e
if(u==null){u=D.H()
this.e=u}return u},
hc:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i,h
u=this.e
if(u!=null)++u.d
a.a.R()
t=this.a.c.length
for(u=a.a.c,s=u.length,r=0;r<u.length;u.length===s||(0,H.x)(u),++r){q=u[r]
this.a.h(0,q.fL())}this.a.R()
for(u=a.b.b,s=u.length,r=0;r<u.length;u.length===s||(0,H.x)(u),++r){p=u[r]
o=this.a
n=p.a
n.a.a.R()
n=n.e
if(typeof n!=="number")return n.B()
n+=t
o=o.c
if(n>=o.length)return H.i(o,n)
m=o[n]
this.b.a.a.h(0,m)
n=new F.aZ()
if(m.a==null)H.T(P.P("May not create a point with a vertex which is not attached to a shape."))
n.a=m
C.a.h(m.b.b,n)
C.a.h(n.a.a.b.b,n)
o=n.a.a.e
if(o!=null)o.A(null)}for(u=a.c.b,s=u.length,r=0;r<u.length;u.length===s||(0,H.x)(u),++r){l=u[r]
o=this.a
n=l.a
n.a.a.R()
n=n.e
if(typeof n!=="number")return n.B()
n+=t
o=o.c
if(n>=o.length)return H.i(o,n)
k=o[n]
n=this.a
o=l.b
o.a.a.R()
o=o.e
if(typeof o!=="number")return o.B()
o+=t
n=n.c
if(o>=n.length)return H.i(n,o)
j=n[o]
o=this.c.a
o.a.h(0,k)
o.a.h(0,j)
o=new F.aF()
n=k.a
if(n==null)H.T(P.P("May not create a line with a start vertex which is not attached to a shape."))
if(n!=j.a)H.T(P.P("May not create a line with vertices attached to different shapes."))
o.a=k
C.a.h(k.c.b,o)
o.b=j
C.a.h(j.c.c,o)
C.a.h(o.a.a.c.b,o)
o=o.a.a.e
if(o!=null)o.A(null)}for(u=a.d.b,s=u.length,r=0;r<u.length;u.length===s||(0,H.x)(u),++r){i=u[r]
o=this.a
n=i.a
n.a.a.R()
n=n.e
if(typeof n!=="number")return n.B()
n+=t
o=o.c
if(n>=o.length)return H.i(o,n)
k=o[n]
n=this.a
o=i.b
o.a.a.R()
o=o.e
if(typeof o!=="number")return o.B()
o+=t
n=n.c
if(o>=n.length)return H.i(n,o)
j=n[o]
o=this.a
n=i.c
n.a.a.R()
n=n.e
if(typeof n!=="number")return n.B()
n+=t
o=o.c
if(n>=o.length)return H.i(o,n)
h=o[n]
n=this.d.a
n.a.h(0,k)
n.a.h(0,j)
n.a.h(0,h)
F.cx(k,j,h)}u=this.e
if(u!=null)u.ah()},
at:function(){var u,t
u=this.e
if(u!=null)++u.d
t=this.d.at()||!1
if(!this.a.at())t=!1
u=this.e
if(u!=null)u.ah()
return t},
fD:function(a0,a1){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a
u=this.a.c.length
t=a1.a
s=(t&$.aL().a)!==0?1:0
if((t&$.aK().a)!==0)++s
if((t&$.aJ().a)!==0)++s
if((t&$.aM().a)!==0)++s
if((t&$.aN().a)!==0)++s
if((t&$.ci().a)!==0)++s
if((t&$.cj().a)!==0)++s
if((t&$.bz().a)!==0)++s
if((t&$.by().a)!==0)++s
r=a1.gbT(a1)
q=r*4
t=new Array(u*r)
t.fixed$length=Array
p=P.t
o=H.a(t,[p])
t=new Array(s)
t.fixed$length=Array
n=H.a(t,[Z.co])
for(m=0,l=0;l<s;++l){k=a1.fz(l)
j=k.gbT(k)
C.a.N(n,l,new Z.co(k,j,m*4,q,0))
for(i=0;i<u;++i){t=this.a.c
if(i>=t.length)return H.i(t,i)
h=t[i].ha(k)
g=m+i*r
for(f=0;f<h.length;++f){C.a.N(o,g,h[f]);++g}}m+=j}H.l(o,"$ib",[p],"$ab")
t=a0.a
e=t.createBuffer()
C.b.a7(t,34962,e)
C.b.cB(t,34962,new Float32Array(H.hm(o)),35044)
C.b.a7(t,34962,null)
d=new Z.cp(new Z.dq(34962,e),n,a1)
d.sea(H.a([],[Z.aW]))
if(this.b.b.length!==0){p=P.w
c=H.a([],[p])
for(l=0;b=this.b.b,l<b.length;++l){b=b[l].a
b.a.a.R()
C.a.h(c,b.e)}a=Z.hV(t,34963,H.l(c,"$ib",[p],"$ab"))
C.a.h(d.b,new Z.aW(0,c.length,a))}if(this.c.b.length!==0){p=P.w
c=H.a([],[p])
for(l=0;b=this.c.b,l<b.length;++l){b=b[l].a
b.a.a.R()
C.a.h(c,b.e)
b=this.c.b
if(l>=b.length)return H.i(b,l)
b=b[l].b
b.a.a.R()
C.a.h(c,b.e)}a=Z.hV(t,34963,H.l(c,"$ib",[p],"$ab"))
C.a.h(d.b,new Z.aW(1,c.length,a))}if(this.d.b.length!==0){p=P.w
c=H.a([],[p])
for(l=0;b=this.d.b,l<b.length;++l){b=b[l].a
b.a.a.R()
C.a.h(c,b.e)
b=this.d.b
if(l>=b.length)return H.i(b,l)
b=b[l].b
b.a.a.R()
C.a.h(c,b.e)
b=this.d.b
if(l>=b.length)return H.i(b,l)
b=b[l].c
b.a.a.R()
C.a.h(c,b.e)}a=Z.hV(t,34963,H.l(c,"$ib",[p],"$ab"))
C.a.h(d.b,new Z.aW(4,c.length,a))}return d},
i:function(a){var u=H.a([],[P.k])
if(this.a.c.length!==0){C.a.h(u,"Vertices:")
C.a.h(u,this.a.p("   "))}if(this.b.b.length!==0){C.a.h(u,"Points:")
C.a.h(u,this.b.p("   "))}if(this.c.b.length!==0){C.a.h(u,"Lines:")
C.a.h(u,this.c.p("   "))}if(this.d.b.length!==0){C.a.h(u,"Faces:")
C.a.h(u,this.d.p("   "))}return C.a.k(u,"\n")},
a1:function(a){var u=this.e
if(u!=null)u.A(a)},
W:function(){return this.a1(null)},
$ilc:1}
F.eV.prototype={
fu:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k,j,i,h
H.l(c,"$ib",[F.ar],"$ab")
u=H.a([],[F.R])
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
C.a.h(u,F.cx(l,k,i))
t.a.h(0,l)
t.a.h(0,i)
t.a.h(0,h)
C.a.h(u,F.cx(l,i,h))}else{m.h(0,k)
t.a.h(0,i)
t.a.h(0,h)
C.a.h(u,F.cx(k,i,h))
t.a.h(0,k)
t.a.h(0,h)
t.a.h(0,l)
C.a.h(u,F.cx(k,h,l))}o=!o}q=!q}return u},
gl:function(a){return this.b.length},
at:function(){var u,t,s,r
for(u=this.b,t=u.length,s=!0,r=0;r<u.length;u.length===t||(0,H.x)(u),++r)if(!u[r].bB())s=!1
return s},
bA:function(){var u,t,s,r
for(u=this.b,t=u.length,s=!0,r=0;r<u.length;u.length===t||(0,H.x)(u),++r)if(!u[r].bz())s=!1
return s},
i:function(a){return this.H()},
p:function(a){var u,t,s,r
u=H.a([],[P.k])
for(t=this.b,s=t.length,r=0;r<t.length;t.length===s||(0,H.x)(t),++r)C.a.h(u,t[r].p(a))
return C.a.k(u,"\n")},
H:function(){return this.p("")},
se2:function(a){this.b=H.l(a,"$ib",[F.R],"$ab")}}
F.eW.prototype={
gl:function(a){return this.b.length},
i:function(a){return this.H()},
p:function(a){var u,t,s,r
u=H.a([],[P.k])
t=this.b.length
for(s=0;s<t;++s){r=this.b
if(s>=r.length)return H.i(r,s)
C.a.h(u,r[s].p(a+(""+s+". ")))}return C.a.k(u,"\n")},
H:function(){return this.p("")},
seb:function(a){this.b=H.l(a,"$ib",[F.aF],"$ab")}}
F.eX.prototype={
gl:function(a){return this.b.length},
i:function(a){return this.H()},
p:function(a){var u,t,s,r
u=H.a([],[P.k])
for(t=this.b,s=t.length,r=0;r<t.length;t.length===s||(0,H.x)(t),++r)C.a.h(u,t[r].p(a))
return C.a.k(u,"\n")},
H:function(){return this.p("")},
sbs:function(a){this.b=H.l(a,"$ib",[F.aZ],"$ab")}}
F.ar.prototype={
bD:function(a){var u,t,s,r,q,p,o
u=this.f
t=this.r
s=this.x
r=this.y
q=this.z
p=this.Q
o=this.ch
return F.hU(this.cx,s,p,u,t,r,q,a,o)},
fL:function(){return this.bD(null)},
shE:function(a){var u
if(!J.O(this.z,a)){this.z=a
u=this.a
if(u!=null)u.W()}},
ha:function(a){var u,t
if(a.m(0,$.aL())){u=this.f
t=[P.t]
if(u==null)return H.a([0,0,0],t)
else return H.a([u.a,u.b,u.c],t)}else if(a.m(0,$.aK())){u=this.r
t=[P.t]
if(u==null)return H.a([0,1,0],t)
else return H.a([u.a,u.b,u.c],t)}else if(a.m(0,$.aJ())){u=this.x
t=[P.t]
if(u==null)return H.a([0,0,1],t)
else return H.a([u.a,u.b,u.c],t)}else if(a.m(0,$.aM())){u=this.y
t=[P.t]
if(u==null)return H.a([0,0],t)
else return H.a([u.a,u.b],t)}else if(a.m(0,$.aN())){u=this.z
t=[P.t]
if(u==null)return H.a([0,0,0],t)
else return H.a([u.a,u.b,u.c],t)}else if(a.m(0,$.ci())){u=this.Q
t=[P.t]
if(u==null)return H.a([1,1,1],t)
else return H.a([u.a,u.b,u.c],t)}else if(a.m(0,$.cj())){u=this.Q
t=[P.t]
if(u==null)return H.a([1,1,1,1],t)
else return H.a([u.a,u.b,u.c,u.d],t)}else if(a.m(0,$.bz()))return H.a([this.ch],[P.t])
else if(a.m(0,$.by())){u=this.cx
t=[P.t]
if(u==null)return H.a([-1,-1,-1,-1],t)
else return H.a([u.a,u.b,u.c,u.d],t)}else return H.a([],[P.t])},
bB:function(){var u,t
u={}
if(this.r!=null)return!0
t=this.a
if(t!=null){t=t.e
if(t!=null)++t.d}u.a=V.dp()
this.d.S(0,new F.fE(u))
u=u.a
this.r=u.w(0,Math.sqrt(u.C(u)))
u=this.a
if(u!=null){u.W()
u=this.a.e
if(u!=null)u.ah()}return!0},
bz:function(){var u,t
u={}
if(this.x!=null)return!0
t=this.a
if(t!=null){t=t.e
if(t!=null)++t.d}u.a=V.dp()
this.d.S(0,new F.fD(u))
u=u.a
this.x=u.w(0,Math.sqrt(u.C(u)))
u=this.a
if(u!=null){u.W()
u=this.a.e
if(u!=null)u.ah()}return!0},
m:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.H()},
p:function(a){var u,t,s
u=H.a([],[P.k])
C.a.h(u,C.c.a0(J.a8(this.e),0))
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
C.a.h(u,V.M(this.ch,3,0))
t=this.cx
if(t!=null)C.a.h(u,t.i(0))
else C.a.h(u,"-")
s=C.a.k(u,", ")
return a+"{"+s+"}"},
H:function(){return this.p("")}}
F.fE.prototype={
$1:function(a){var u,t
H.e(a,"$iR")
u=a==null?null:a.d
if(u!=null){t=this.a
t.a=t.a.B(0,u)}},
$S:5}
F.fD.prototype={
$1:function(a){var u,t
H.e(a,"$iR")
u=a==null?null:a.e
if(u!=null){t=this.a
t.a=t.a.B(0,u)}},
$S:5}
F.fx.prototype={
R:function(){},
h:function(a,b){var u,t
u=b.a
if(u!=null){if(u===this.a)return!1
throw H.d(P.P("May not add a vertex already attached to another shape to this shape."))}u=this.c
b.e=u.length
t=this.a
b.a=t
C.a.h(u,b)
t.W()
return!0},
gl:function(a){return this.c.length},
at:function(){var u,t,s
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.x)(u),++s)u[s].bB()
return!0},
bA:function(){var u,t,s
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.x)(u),++s)u[s].bz()
return!0},
fE:function(){var u,t,s,r,q,p,o,n
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.x)(u),++s){r=u[s]
if(r.z==null){q=r.r
p=q.a
o=q.b
n=q.c
n=q.w(0,Math.sqrt(p*p+o*o+n*n))
if(!J.O(r.z,n)){r.z=n
q=r.a
if(q!=null){q=q.e
if(q!=null)q.A(null)}}}}return!0},
i:function(a){return this.H()},
p:function(a){var u,t,s,r
this.R()
u=H.a([],[P.k])
for(t=this.c,s=t.length,r=0;r<t.length;t.length===s||(0,H.x)(t),++r)C.a.h(u,t[r].p(a))
return C.a.k(u,"\n")},
H:function(){return this.p("")},
sft:function(a){this.c=H.l(a,"$ib",[F.ar],"$ab")}}
F.fy.prototype={
gl:function(a){return this.b.length+this.c.length+this.d.length},
S:function(a,b){H.h(b,{func:1,ret:-1,args:[F.R]})
C.a.S(this.b,b)
C.a.S(this.c,new F.fz(this,b))
C.a.S(this.d,new F.fA(this,b))},
i:function(a){return this.H()},
p:function(a){var u,t,s,r
u=H.a([],[P.k])
for(t=this.b,s=t.length,r=0;r<t.length;t.length===s||(0,H.x)(t),++r)C.a.h(u,t[r].p(a))
for(t=this.c,s=t.length,r=0;r<t.length;t.length===s||(0,H.x)(t),++r)C.a.h(u,t[r].p(a))
for(t=this.d,s=t.length,r=0;r<t.length;t.length===s||(0,H.x)(t),++r)C.a.h(u,t[r].p(a))
return C.a.k(u,"\n")},
H:function(){return this.p("")},
se3:function(a){this.b=H.l(a,"$ib",[F.R],"$ab")},
se4:function(a){this.c=H.l(a,"$ib",[F.R],"$ab")},
se5:function(a){this.d=H.l(a,"$ib",[F.R],"$ab")}}
F.fz.prototype={
$1:function(a){H.e(a,"$iR")
if(!J.O(a.a,this.a))this.b.$1(a)},
$S:5}
F.fA.prototype={
$1:function(a){var u
H.e(a,"$iR")
u=this.a
if(!J.O(a.a,u)&&!J.O(a.b,u))this.b.$1(a)},
$S:5}
F.fB.prototype={
gl:function(a){return this.b.length+this.c.length},
i:function(a){return this.H()},
p:function(a){var u,t,s,r
u=H.a([],[P.k])
for(t=this.b,s=t.length,r=0;r<t.length;t.length===s||(0,H.x)(t),++r)C.a.h(u,t[r].p(a))
for(t=this.c,s=t.length,r=0;r<t.length;t.length===s||(0,H.x)(t),++r)C.a.h(u,t[r].p(a))
return C.a.k(u,"\n")},
H:function(){return this.p("")},
sec:function(a){this.b=H.l(a,"$ib",[F.aF],"$ab")},
sed:function(a){this.c=H.l(a,"$ib",[F.aF],"$ab")}}
F.fC.prototype={
gl:function(a){return this.b.length},
i:function(a){return this.H()},
p:function(a){var u,t,s,r
u=H.a([],[P.k])
for(t=this.b,s=t.length,r=0;r<t.length;t.length===s||(0,H.x)(t),++r)C.a.h(u,t[r].p(a))
return C.a.k(u,"\n")},
H:function(){return this.p("")},
sbs:function(a){this.b=H.l(a,"$ib",[F.aZ],"$ab")}}
O.cW.prototype={
gn:function(){var u=this.r
if(u==null){u=D.H()
this.r=u}return u},
b8:function(a){var u
H.e(a,"$ir")
u=this.r
if(u!=null)u.A(a)},
c_:function(){return this.b8(null)},
cn:function(a){},
co:function(a){var u,t
u=this.f
if(u!=a){if(u!=null)u.gn().P(0,this.gbZ())
t=this.f
this.f=a
if(a!=null)a.gn().h(0,this.gbZ())
u=new D.E("bumpyTextureCube",t,this.f,this,[T.d9])
u.b=!0
this.b8(u)}},
c5:function(a,b){H.l(a,"$ib",[T.c_],"$ab")
if(b!=null)if(!C.a.O(a,b)){b.a=a.length
C.a.h(a,b)}},
hv:function(a,b){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g
u=this.a
if(u==null){t=A.iB(this.d)
u=t.e
s=a.fr.v(0,u)
if(s==null){r=a.a
s=new A.eE(r,u)
s.dD(r,u)
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
case C.n:p+="uniform sampler2D bumpTxt;\nuniform int nullBumpTxt;\n"
break
case C.j:p+="uniform samplerCube bumpTxt;\nuniform int nullBumpTxt;\n"
break}p+="\nvec3 normal()\n{\n"
if(n===C.i||n===C.p)p+="   return normalize(normalVec);\n"
else{p+="   if(nullBumpTxt > 0) return normalVec;\n"
p=(n===C.n?p+"   vec3 color = texture2D(bumpTxt, txt2D).rgb;\n":p+"   vec3 color = textureCube(bumpTxt, txtCube).rgb;\n")+"   vec3 n = normalize(normalVec);\n   vec3 b = normalize(binormalVec);\n   vec3 c = normalize(cross(b, n));\n   b = cross(n, c);\n   mat3 mat = mat3( b.x,  b.y,  b.z,\n                   -c.x, -c.y, -c.z,\n                    n.x,  n.y,  n.z);\n   return mat * normalize(2.0*color - 1.0);\n"}p+="}\n\nvoid main()\n{\n   vec3 norm = normal();\n   norm = -norm*0.5 + 0.5;\n   gl_FragColor = vec4(norm.x, 1.0-norm.y, norm.z, 1.0);\n}\n"
s.c=m
s.d=p.charCodeAt(0)==0?p:p
s.e=s.cc(m,35633)
s.f=s.cc(s.d,35632)
p=r.createProgram()
s.r=p
C.b.cw(r,p,s.e)
C.b.cw(r,s.r,s.f)
C.b.h9(r,s.r)
if(!H.i1(C.b.b2(r,s.r,35714))){l=C.b.de(r,s.r)
C.b.fR(r,s.r)
H.T(P.P("Failed to link shader: "+H.c(l)))}s.fa()
s.fc()
s.Q=s.x.v(0,"posAttr")
s.cx=s.x.v(0,"normAttr")
s.ch=s.x.v(0,"binmAttr")
s.cy=s.x.v(0,"txt2DAttr")
s.db=s.x.v(0,"txtCubeAttr")
s.dx=H.a_(s.y.a8(0,"viewObjMat"),"$ibo")
s.dy=H.a_(s.y.a8(0,"projViewObjMat"),"$ibo")
if(q)s.fr=H.a_(s.y.a8(0,"txt2DMat"),"$idf")
if(o)s.fx=H.a_(s.y.a8(0,"txtCubeMat"),"$ibo")
switch(n){case C.i:break
case C.p:break
case C.n:s.fy=H.a_(s.y.a8(0,"bumpTxt"),"$idg")
s.id=H.a_(s.y.a8(0,"nullBumpTxt"),"$ic2")
break
case C.j:s.go=H.a_(s.y.a8(0,"bumpTxt"),"$idh")
s.id=H.a_(s.y.a8(0,"nullBumpTxt"),"$ic2")
break}if(u.length===0)H.T(P.P("May not cache a shader with no name."))
if(a.fr.cE(u))H.T(P.P('Shader cache already contains a shader by the name "'+u+'".'))
a.fr.N(0,u,s)}this.a=s
b.e=null
u=s}t=u.z
k=t.f
u=b.e
if(!(u instanceof Z.cp)){b.e=null
u=null}if(u==null||!u.d.m(0,k)){b.d.at()
u=t.b
if(u){q=b.d
p=q.e
if(p!=null)++p.d
q.d.bA()
q.a.bA()
q=q.e
if(q!=null)q.ah()}q=t.d
if(q){p=b.d
o=p.e
if(o!=null)++o.d
p.a.fE()
p=p.e
if(p!=null)p.ah()}j=b.d.fD(new Z.fG(a.a),k)
j.aG($.aL()).e=this.a.Q.c
j.aG($.aK()).e=this.a.cx.c
if(u)j.aG($.aJ()).e=this.a.ch.c
if(t.c)j.aG($.aM()).e=this.a.cy.c
if(q)j.aG($.aN()).e=this.a.db.c
b.e=j}i=H.a([],[T.c_])
u=this.a
q=a.a
C.b.d5(q,u.r)
u.x.h_()
u=this.a
p=a.cx
if(p==null){p=a.db.gaf().q(0,a.dx.gaf())
a.cx=p}u=u.dx
u.toString
u.b4(p.aK(0,!0))
p=this.a
u=a.ch
if(u==null){u=a.z
if(u==null){u=a.cy.gaf().q(0,a.db.gaf())
a.z=u}u=u.q(0,a.dx.gaf())
a.ch=u}p=p.dy
p.toString
p.b4(u.aK(0,!0))
if(t.c){u=this.a
p=this.b
u=u.fr
u.toString
h=new Float32Array(H.hm(H.l(p.aK(0,!0),"$ib",[P.t],"$ab")))
C.b.hL(u.a,u.d,!1,h)}if(t.d){u=this.a
p=this.c
u=u.fx
u.toString
u.b4(p.aK(0,!0))}switch(t.a){case C.i:break
case C.p:break
case C.n:this.c5(i,this.e)
u=this.a.id
C.b.aL(u.a,u.d,1)
break
case C.j:this.c5(i,this.f)
u=this.a
p=this.f
o=u.go
u=u.id
n=p!=null
if(!n||p.d<6)C.b.aL(u.a,u.d,1)
else{o.toString
if(!n||p.d<6)C.b.aL(o.a,o.d,0)
else{p=p.a
C.b.aL(o.a,o.d,p)}C.b.aL(u.a,u.d,0)}break}for(g=0;g<i.length;++g){u=i[g]
if(!u.c&&u.d>=6){u.c=!0
C.b.cs(q,33984+u.a)
C.b.as(q,34067,u.b)}}u=b.e
u.bx(a)
u.av(a)
u.hK(a)
for(g=0;g<i.length;++g){u=i[g]
if(u.c){u.c=!1
C.b.cs(q,33984+u.a)
C.b.as(q,34067,null)}}u=this.a
u.toString
C.b.d5(q,null)
u.x.fW()},
i:function(a){var u=this.a
if(u!=null)return u.b
else return A.iB(this.d).e}}
O.bn.prototype={}
T.c_.prototype={}
T.d9.prototype={
gn:function(){var u=this.e
if(u==null){u=D.H()
this.e=u}return u}}
T.f8.prototype={
an:function(a,b,c,d,e,f){var u,t
u=document.createElement("img")
u.src=c;++this.d
t=W.f
W.S(u,"load",H.h(new T.f9(this,u,!1,b,!1,d,a),{func:1,ret:-1,args:[t]}),!1,t)},
f6:function(a,b,c){var u,t,s,r
b=V.ia(b,2)
u=V.ia(a.width,2)
t=V.ia(a.height,2)
u=Math.min(u,b)
t=Math.min(t,b)
if(a.width===u&&a.height===t)return a
else{s=W.hI(null,null)
s.width=u
s.height=t
r=H.e(C.m.dc(s,"2d"),"$ib8")
r.imageSmoothingEnabled=!1;(r&&C.x).fY(r,a,0,0,s.width,s.height)
return P.kG(C.x.e9(r,0,0,s.width,s.height))}}}
T.f9.prototype={
$1:function(a){var u,t,s
u=this.a
t=u.f6(this.b,u.c,this.c)
s=u.a
C.b.as(s,34067,this.d)
C.b.hs(s,37440,this.e?1:0)
C.b.hC(s,this.f,0,6408,6408,5121,t)
C.b.as(s,34067,null)
s=this.r
if(++s.d>=6){s=s.e
if(s!=null)s.fZ()}++u.e},
$S:11}
V.aC.prototype={
ae:function(a){return!0},
i:function(a){return"all"},
$iaa:1}
V.aa.prototype={}
V.cN.prototype={
ae:function(a){var u,t,s
for(u=this.a,t=u.length,s=0;s<u.length;u.length===t||(0,H.x)(u),++s)if(u[s].ae(a))return!0
return!1},
i:function(a){var u,t,s,r,q
for(u=this.a,t=u.length,s="",r=0;r<u.length;u.length===t||(0,H.x)(u),++r){q=u[r]
if(s.length!==0)s+=", "
s+=q.i(0)}return s},
sT:function(a){this.a=H.l(a,"$ib",[V.aa],"$ab")},
$iaa:1}
V.a5.prototype={
ae:function(a){return!this.dw(a)},
i:function(a){return"!["+this.bU(0)+"]"}}
V.eM.prototype={
ae:function(a){return this.a<=a&&this.b>=a},
i:function(a){var u,t
u=H.hQ(this.a)
t=H.hQ(this.b)
return u+".."+t},
$iaa:1}
V.eU.prototype={
dC:function(a){var u,t
if(a.a.length<=0)throw H.d(P.P("May not create a SetMatcher with zero characters."))
u=new H.av([P.w,P.C])
for(t=new H.bO(a,a.gl(a),0,[H.Y(a,"L",0)]);t.u();)u.N(0,t.d,!0)
this.sf9(u)},
ae:function(a){return this.a.cE(a)},
i:function(a){var u=this.a
return P.hR(new H.cJ(u,[H.q(u,0)]),0,null)},
sf9:function(a){this.a=H.l(a,"$iag",[P.w,P.C],"$aag")},
$iaa:1}
V.bW.prototype={
k:function(a,b){var u,t,s,r
for(u=this.c,t=u.length,s=0;s<t;++s){r=u[s]
if(r.b.b===b)return r}r=new V.c1(this.a.j(0,b))
r.sT(H.a([],[V.aa]))
r.c=!1
C.a.h(this.c,r)
return r},
h0:function(a){var u,t,s,r
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.x)(u),++s){r=u[s]
if(r.ae(a))return r}return},
i:function(a){return this.b},
sfq:function(a){this.c=H.l(a,"$ib",[V.c1],"$ab")}}
V.db.prototype={
i:function(a){var u,t
u=H.ic(this.b,"\n","\\n")
t=H.ic(u,"\t","\\t")
return this.a+":"+this.c+':"'+t+'"'}}
V.c0.prototype={
ag:function(a,b,c){var u,t,s
H.l(c,"$ib",[P.k],"$ab")
for(u=c.length,t=0;t<c.length;c.length===u||(0,H.x)(c),++t){s=c[t]
this.c.N(0,s,b)}},
i:function(a){return this.b},
sf4:function(a){var u=P.k
this.c=H.l(a,"$iag",[u,u],"$aag")}}
V.fb.prototype={
j:function(a,b){var u=this.a.v(0,b)
if(u==null){u=new V.bW(this,b)
u.sfq(H.a([],[V.c1]))
u.d=null
this.a.N(0,b,u)}return u},
I:function(a){var u,t
u=this.b.v(0,a)
if(u==null){u=new V.c0(this,a)
t=P.k
u.sf4(new H.av([t,t]))
this.b.N(0,a,u)}return u},
d3:function(a){var u,t,s,r,q,p,o,n,m,l,k,j
u=H.a([],[V.db])
t=this.c
s=[P.w]
r=H.a([],s)
for(q=a.length,p=null,o=0;!0;){if(o>=q){if(p!=null)C.a.h(u,p)
return u}n=C.c.al(a,o)
m=t.h0(n)
if(m==null){if(p==null){C.a.h(r,n)
l=P.hR(r,0,null)
throw H.d(P.P("Untokenizable string [state: "+t.b+", index "+o+']: "'+l+'"'))}C.a.h(u,p)
o=p.c+1
r=H.a([],s)
t=this.c
p=null}else{if(!m.c)C.a.h(r,n)
t=m.b
if(t.d!=null){l=P.hR(r,0,null)
k=t.d
j=k.c.v(0,l)
p=new V.db(j==null?k.b:j,l,o)}++o}}},
sff:function(a){this.a=H.l(a,"$iag",[P.k,V.bW],"$aag")},
sfj:function(a){this.b=H.l(a,"$iag",[P.k,V.c0],"$aag")}}
V.c1.prototype={
i:function(a){return this.b.b+": "+this.bU(0)}}
X.cr.prototype={$iiA:1}
X.ec.prototype={
gn:function(){var u=this.x
if(u==null){u=D.H()
this.x=u}return u}}
X.cY.prototype={
gn:function(){var u=this.f
if(u==null){u=D.H()
this.f=u}return u},
ak:function(a){var u
H.e(a,"$ir")
u=this.f
if(u!=null)u.A(a)},
dN:function(){return this.ak(null)},
saH:function(a){var u,t
if(!J.O(this.b,a)){u=this.b
if(u!=null)u.gn().P(0,this.gc0())
t=this.b
this.b=a
if(a!=null)a.gn().h(0,this.gc0())
u=new D.E("mover",t,this.b,this,[U.W])
u.b=!0
this.ak(u)}},
$iiA:1,
$icr:1}
X.d7.prototype={}
V.aQ.prototype={
aN:function(a){this.b=new P.ef(C.L)
this.c=null
this.sbh(H.a([],[[P.b,W.af]]))},
F:function(a,b){var u,t,s,r,q,p,o,n,m
u=this.d
if(u.length===0)C.a.h(u,H.a([],[W.af]))
t=a.split("\n")
for(u=t.length,s=[W.af],r=!0,q=0;q<u;++q){p=t[q]
if(r)r=!1
else C.a.h(this.d,H.a([],s))
o=document.createElement("div")
o.className="codePart"
H.A(p)
n=this.b.dX(p,0,p.length)
m=n==null?p:n
C.e.dm(o,H.ic(m," ","&nbsp;"))
m=o.style
m.color=b
C.a.h(C.a.gaV(this.d),o)}},
cT:function(a){var u,t,s,r
H.l(a,"$ib",[P.k],"$ab")
this.sbh(H.a([],[[P.b,W.af]]))
u=C.a.k(a,"\n")
t=this.c
if(t==null){t=this.aT()
this.c=t}for(t=t.d3(u),s=t.length,r=0;r<t.length;t.length===s||(0,H.x)(t),++r)this.aX(t[r])},
sbh:function(a){this.d=H.l(a,"$ib",[[P.b,W.af]],"$ab")}}
V.hC.prototype={
$1:function(a){H.e(a,"$iax")
P.ib(C.d.d2(this.a.gh4(),2)+" fps")},
$S:34}
V.dX.prototype={
aX:function(a){switch(a.a){case"Class":this.F(a.b,"#551")
break
case"Comment":this.F(a.b,"#777")
break
case"Id":this.F(a.b,"#111")
break
case"Num":this.F(a.b,"#191")
break
case"Reserved":this.F(a.b,"#119")
break
case"String":this.F(a.b,"#171")
break
case"Symbol":this.F(a.b,"#616")
break
case"Type":this.F(a.b,"#B11")
break
case"Whitespace":this.F(a.b,"#111")
break}},
aT:function(){var u,t,s,r
u=V.fc()
u.c=u.j(0,"Start")
t=u.j(0,"Start").k(0,"Id")
s=V.o(new H.m("_"))
C.a.h(t.a,s)
s=V.I("a","z")
C.a.h(t.a,s)
s=V.I("A","Z")
C.a.h(t.a,s)
s=u.j(0,"Id").k(0,"Id")
t=V.o(new H.m("_"))
C.a.h(s.a,t)
t=V.I("0","9")
C.a.h(s.a,t)
t=V.I("a","z")
C.a.h(s.a,t)
t=V.I("A","Z")
C.a.h(s.a,t)
t=u.j(0,"Start").k(0,"Int")
s=V.I("0","9")
C.a.h(t.a,s)
s=u.j(0,"Int").k(0,"Int")
t=V.I("0","9")
C.a.h(s.a,t)
t=u.j(0,"Int").k(0,"FloatDot")
s=V.o(new H.m("."))
C.a.h(t.a,s)
s=u.j(0,"FloatDot").k(0,"Float")
t=V.I("0","9")
C.a.h(s.a,t)
t=u.j(0,"Float").k(0,"Float")
s=V.I("0","9")
C.a.h(t.a,s)
s=u.j(0,"Start").k(0,"Sym")
t=V.o(new H.m("<>{}()\\-+*%!&|=.,?:;"))
C.a.h(s.a,t)
t=u.j(0,"Sym").k(0,"Sym")
s=V.o(new H.m("<>{}()\\-+*%!&|=.,?:;"))
C.a.h(t.a,s)
s=u.j(0,"Start").k(0,"OpenDoubleStr")
t=V.o(new H.m('"'))
C.a.h(s.a,t)
t=u.j(0,"OpenDoubleStr").k(0,"CloseDoubleStr")
s=V.o(new H.m('"'))
C.a.h(t.a,s)
s=u.j(0,"OpenDoubleStr").k(0,"EscDoubleStr")
t=V.o(new H.m("\\"))
C.a.h(s.a,t)
t=u.j(0,"EscDoubleStr").k(0,"OpenDoubleStr")
s=V.o(new H.m('"'))
C.a.h(t.a,s)
C.a.h(u.j(0,"OpenDoubleStr").k(0,"OpenDoubleStr").a,new V.aC())
s=u.j(0,"Start").k(0,"OpenSingleStr")
t=V.o(new H.m("'"))
C.a.h(s.a,t)
t=u.j(0,"OpenSingleStr").k(0,"CloseSingleStr")
s=V.o(new H.m("'"))
C.a.h(t.a,s)
s=u.j(0,"OpenSingleStr").k(0,"EscSingleStr")
t=V.o(new H.m("\\"))
C.a.h(s.a,t)
t=u.j(0,"EscSingleStr").k(0,"OpenSingleStr")
s=V.o(new H.m("'"))
C.a.h(t.a,s)
C.a.h(u.j(0,"OpenSingleStr").k(0,"OpenSingleStr").a,new V.aC())
s=u.j(0,"Start").k(0,"Slash")
t=V.o(new H.m("/"))
C.a.h(s.a,t)
t=u.j(0,"Slash").k(0,"Comment")
s=V.o(new H.m("/"))
C.a.h(t.a,s)
s=u.j(0,"Comment").k(0,"EndComment")
t=V.o(new H.m("\n"))
C.a.h(s.a,t)
t=u.j(0,"Comment").k(0,"Comment")
s=new V.a5()
r=[V.aa]
s.sT(H.a([],r))
C.a.h(t.a,s)
t=V.o(new H.m("\n"))
C.a.h(s.a,t)
t=u.j(0,"Slash").k(0,"MLComment")
s=V.o(new H.m("*"))
C.a.h(t.a,s)
s=u.j(0,"MLComment").k(0,"MLCStar")
t=V.o(new H.m("*"))
C.a.h(s.a,t)
t=u.j(0,"MLCStar").k(0,"MLComment")
s=new V.a5()
s.sT(H.a([],r))
C.a.h(t.a,s)
t=V.o(new H.m("*"))
C.a.h(s.a,t)
t=u.j(0,"MLCStar").k(0,"EndComment")
s=V.o(new H.m("/"))
C.a.h(t.a,s)
s=u.j(0,"Start").k(0,"Whitespace")
t=V.o(new H.m(" \n\t"))
C.a.h(s.a,t)
t=u.j(0,"Whitespace").k(0,"Whitespace")
s=V.o(new H.m(" \n\t"))
C.a.h(t.a,s)
s=u.j(0,"Int")
s.d=s.a.I("Num")
s=u.j(0,"Float")
s.d=s.a.I("Num")
s=u.j(0,"Sym")
s.d=s.a.I("Symbol")
s=u.j(0,"CloseDoubleStr")
s.d=s.a.I("String")
s=u.j(0,"CloseSingleStr")
s.d=s.a.I("String")
s=u.j(0,"EndComment")
s.d=s.a.I("Comment")
s=u.j(0,"Whitespace")
s.d=s.a.I("Whitespace")
s=u.j(0,"Id")
t=s.a.I("Id")
s.d=t
s=[P.k]
t.ag(0,"Class",H.a(["Constant","Depth","Entity","EntityPass","Math","Matrix4","Movers","Rotater","Scenes","Shapes","Techniques","ThreeDart"],s))
t.ag(0,"Type",H.a(["bool","double","dynamic","false","int","List","Map","null","num","Object","String","this","true","var","void"],s))
t.ag(0,"Reserved",H.a(["abstract","as","assert","async","await","break","case","catch","class","continue","const","default","deferred","do","else","enum","export","extends","external","factory","final","finally","for","get","if","implements","import","in","is","library","new","operator","part","rethrow","return","set","static","super","switch","sync","throw","try","typedef","with","while","yield"],s))
return u}}
V.ed.prototype={
aX:function(a){switch(a.a){case"Builtin":this.F(a.b,"#411")
break
case"Comment":this.F(a.b,"#777")
break
case"Id":this.F(a.b,"#111")
break
case"Num":this.F(a.b,"#191")
break
case"Preprocess":this.F(a.b,"#737")
break
case"Reserved":this.F(a.b,"#119")
break
case"Symbol":this.F(a.b,"#611")
break
case"Type":this.F(a.b,"#171")
break
case"Whitespace":this.F(a.b,"#111")
break}},
aT:function(){var u,t,s,r
u=V.fc()
u.c=u.j(0,"Start")
t=u.j(0,"Start").k(0,"Id")
s=V.o(new H.m("_"))
C.a.h(t.a,s)
s=V.I("a","z")
C.a.h(t.a,s)
s=V.I("A","Z")
C.a.h(t.a,s)
s=u.j(0,"Id").k(0,"Id")
t=V.o(new H.m("_"))
C.a.h(s.a,t)
t=V.I("0","9")
C.a.h(s.a,t)
t=V.I("a","z")
C.a.h(s.a,t)
t=V.I("A","Z")
C.a.h(s.a,t)
t=u.j(0,"Start").k(0,"Int")
s=V.I("0","9")
C.a.h(t.a,s)
s=u.j(0,"Int").k(0,"Int")
t=V.I("0","9")
C.a.h(s.a,t)
t=u.j(0,"Int").k(0,"FloatDot")
s=V.o(new H.m("."))
C.a.h(t.a,s)
s=u.j(0,"FloatDot").k(0,"Float")
t=V.I("0","9")
C.a.h(s.a,t)
t=u.j(0,"Float").k(0,"Float")
s=V.I("0","9")
C.a.h(t.a,s)
s=u.j(0,"Start").k(0,"Sym")
t=V.o(new H.m("<>{}()[]\\-+*%!&|=.,?:;"))
C.a.h(s.a,t)
t=u.j(0,"Sym").k(0,"Sym")
s=V.o(new H.m("<>{}()[]\\-+*%!&|=.,?:;"))
C.a.h(t.a,s)
s=u.j(0,"Start").k(0,"Slash")
t=V.o(new H.m("/"))
C.a.h(s.a,t)
t=u.j(0,"Slash").k(0,"Comment")
s=V.o(new H.m("/"))
C.a.h(t.a,s)
C.a.h(u.j(0,"Slash").k(0,"Sym").a,new V.aC())
s=u.j(0,"Comment").k(0,"EndComment")
t=V.o(new H.m("\n"))
C.a.h(s.a,t)
t=u.j(0,"Comment").k(0,"Comment")
s=new V.a5()
r=[V.aa]
s.sT(H.a([],r))
C.a.h(t.a,s)
t=V.o(new H.m("\n"))
C.a.h(s.a,t)
t=u.j(0,"Start").k(0,"Preprocess")
s=V.o(new H.m("#"))
C.a.h(t.a,s)
s=u.j(0,"Preprocess").k(0,"Preprocess")
t=new V.a5()
t.sT(H.a([],r))
C.a.h(s.a,t)
s=V.o(new H.m("\n"))
C.a.h(t.a,s)
s=u.j(0,"Preprocess").k(0,"EndPreprocess")
t=V.o(new H.m("\n"))
C.a.h(s.a,t)
t=u.j(0,"Start").k(0,"Whitespace")
s=V.o(new H.m(" \n\t"))
C.a.h(t.a,s)
s=u.j(0,"Whitespace").k(0,"Whitespace")
t=V.o(new H.m(" \n\t"))
C.a.h(s.a,t)
t=u.j(0,"Int")
t.d=t.a.I("Num")
t=u.j(0,"Float")
t.d=t.a.I("Num")
t=u.j(0,"Sym")
t.d=t.a.I("Symbol")
t=u.j(0,"EndComment")
t.d=t.a.I("Comment")
t=u.j(0,"EndPreprocess")
t.d=t.a.I("Preprocess")
t=u.j(0,"Whitespace")
t.d=t.a.I("Whitespace")
t=u.j(0,"Id")
s=t.a.I("Id")
t.d=s
t=[P.k]
s.ag(0,"Type",H.a(["float","double","int","void","bool","true","false","mat2","mat3","mat4","dmat2","dmat3","dmat4","mat2x2","mat2x3","mat2x4","dmat2x2","dmat2x3","dmat2x4","mat3x2","mat3x3","mat3x4","dmat3x2","dmat3x3","dmat3x4","mat4x2","mat4x3","mat4x4","dmat4x2","dmat4x3","dmat4x4","vec2","vec3","vec4","ivec2","ivec3","ivec4","bvec2","bvec3","bvec4","dvec2","dvec3","dvec4","uint","uvec2","uvec3","uvec4","sampler1D","sampler2D","sampler3D","samplerCube","sampler1DShadow","sampler2DShadow","samplerCubeShadow","sampler1DArray","sampler2DArray","sampler1DArrayShadow","sampler2DArrayShadow","isampler1D","isampler2D","isampler3D","isamplerCube","isampler1DArray","isampler2DArray","usampler1D","usampler2D","usampler3D","usamplerCube","usampler1DArray","usampler2DArray","sampler2DRect","sampler2DRectShadow","isampler2DRect","usampler2DRect","samplerBuffer","isamplerBuffer","usamplerBuffer","sampler2DMS","isampler2DMS","usampler2DMS","sampler2DMSArray","isampler2DMSArray","usampler2DMSArray","samplerCubeArray","samplerCubeArrayShadow","isamplerCubeArray","usamplerCubeArray"],t))
s.ag(0,"Reserved",H.a(["attribute","break","case","centroid","const","continue","default","discard","do","else","flat","for","highp","if","in","inout","invariant","layout","lowp","mediump","noperspective","out","patch","precision","return","sample","smooth","struct","subroutine","switch","uniform","varying","while"],t))
s.ag(0,"Builtin",H.a(["gl_FragColor","gl_Position"],t))
return u}}
V.ee.prototype={
aX:function(a){switch(a.a){case"Attr":this.F(a.b,"#911")
this.F("=","#111")
break
case"Id":this.F(a.b,"#111")
break
case"Other":this.F(a.b,"#111")
break
case"Reserved":this.F(a.b,"#119")
break
case"String":this.F(a.b,"#171")
break
case"Symbol":this.F(a.b,"#616")
break}},
aT:function(){var u,t,s
u=V.fc()
u.c=u.j(0,"Start")
t=u.j(0,"Start").k(0,"Id")
s=V.o(new H.m("_"))
C.a.h(t.a,s)
s=V.I("a","z")
C.a.h(t.a,s)
s=V.I("A","Z")
C.a.h(t.a,s)
s=u.j(0,"Id").k(0,"Id")
t=V.o(new H.m("_"))
C.a.h(s.a,t)
t=V.I("0","9")
C.a.h(s.a,t)
t=V.I("a","z")
C.a.h(s.a,t)
t=V.I("A","Z")
C.a.h(s.a,t)
t=u.j(0,"Id").k(0,"Attr")
s=V.o(new H.m("="))
C.a.h(t.a,s)
t.c=!0
t=u.j(0,"Start").k(0,"Sym")
s=V.o(new H.m("</\\-!>="))
C.a.h(t.a,s)
s=u.j(0,"Sym").k(0,"Sym")
t=V.o(new H.m("</\\-!>="))
C.a.h(s.a,t)
t=u.j(0,"Start").k(0,"OpenStr")
s=V.o(new H.m('"'))
C.a.h(t.a,s)
s=u.j(0,"OpenStr").k(0,"CloseStr")
t=V.o(new H.m('"'))
C.a.h(s.a,t)
t=u.j(0,"OpenStr").k(0,"EscStr")
s=V.o(new H.m("\\"))
C.a.h(t.a,s)
s=u.j(0,"EscStr").k(0,"OpenStr")
t=V.o(new H.m('"'))
C.a.h(s.a,t)
C.a.h(u.j(0,"OpenStr").k(0,"OpenStr").a,new V.aC())
C.a.h(u.j(0,"Start").k(0,"Other").a,new V.aC())
t=u.j(0,"Other").k(0,"Other")
s=new V.a5()
s.sT(H.a([],[V.aa]))
C.a.h(t.a,s)
t=V.o(new H.m('</\\-!>=_"'))
C.a.h(s.a,t)
t=V.I("a","z")
C.a.h(s.a,t)
t=V.I("A","Z")
C.a.h(s.a,t)
t=u.j(0,"Sym")
t.d=t.a.I("Symbol")
t=u.j(0,"CloseStr")
t.d=t.a.I("String")
t=u.j(0,"Id")
s=t.a.I("Id")
t.d=s
s.ag(0,"Reserved",H.a(["DOCTYPE","html","head","meta","link","title","body","script"],[P.k]))
s=u.j(0,"Attr")
s.d=s.a.I("Attr")
s=u.j(0,"Other")
s.d=s.a.I("Other")
return u}}
V.eJ.prototype={
cT:function(a){H.l(a,"$ib",[P.k],"$ab")
this.sbh(H.a([],[[P.b,W.af]]))
this.F(C.a.k(a,"\n"),"#111")},
aX:function(a){},
aT:function(){return}}
V.eY.prototype={
dE:function(a,b){var u,t,s,r,q,p,o
u=document
t=u.body
s=u.createElement("div")
s.className="scrollTop";(t&&C.l).t(t,s)
r=u.createElement("div")
r.className="scrollPage"
C.l.t(t,r)
q=u.createElement("div")
q.className="pageCenter"
C.e.t(r,q)
if(a.length!==0){u.title=a
p=u.createElement("div")
p.className="pageTitle"
p.textContent=a
C.e.t(q,p)}o=u.createElement("div")
this.a=o
C.e.t(q,o)
this.b=null
o=W.f
W.S(u,"scroll",H.h(new V.f_(s),{func:1,ret:-1,args:[o]}),!1,o)},
cu:function(a){var u,t,s,r,q,p,o,n,m,l,k
H.l(a,"$ib",[P.k],"$ab")
this.fb()
u=document
t=u.createElement("div")
t.className="textPar"
for(s=this.b.d3(C.a.h8(a)),r=s.length,q=0;q<s.length;s.length===r||(0,H.x)(s),++q){p=s[q]
switch(p.a){case"Bold":o=u.createElement("div")
o.className="boldPar"
o.textContent=p.b
C.e.t(t,o)
break
case"Italic":o=u.createElement("div")
o.className="italicPar"
o.textContent=p.b
C.e.t(t,o)
break
case"Code":o=u.createElement("div")
o.className="codePar"
o.textContent=p.b
C.e.t(t,o)
break
case"Link":n=p.b
if(H.l0(n,"|",0)){m=n.split("|")
l=u.createElement("a")
l.className="linkPar"
if(1>=m.length)return H.i(m,1)
l.href=H.A(m[1])
l.textContent=H.A(m[0])
C.e.t(t,l)}else{k=P.j2(C.B,n,C.w,!1)
l=u.createElement("a")
l.className="linkPar"
l.href="#"+k
l.textContent=n
C.e.t(t,l)}break
case"Other":o=u.createElement("div")
o.className="normalPar"
o.textContent=p.b
C.e.t(t,o)
break}}C.e.t(this.a,t)},
da:function(a){var u,t,s,r
u=new V.dX("dart")
u.aN("dart")
t=new V.ed("glsl")
t.aN("glsl")
s=new V.ee("html")
s.aN("html")
r=C.a.h1(H.a([u,t,s],[V.aQ]),new V.f0(a))
if(r!=null)return r
u=new V.eJ("plain")
u.aN("plain")
return u},
ct:function(a4,a5,a6,a7){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3
H.l(a7,"$ib",[P.k],"$ab")
u=H.a([],[P.w])
for(t=!1,s=0;s<a7.length;++s){r=a7[s]
if(J.i7(r).b5(r,"+")){C.a.N(a7,s,C.c.b6(r,1))
C.a.h(u,1)
t=!0}else if(C.c.b5(r,"-")){C.a.N(a7,s,C.c.b6(r,1))
C.a.h(u,-1)
t=!0}else C.a.h(u,0)}q=this.da(a5)
q.cT(a7)
p=document
o=p.createElement("div")
o.className="codeTableScroll"
n=p.createElement("table")
n.className="codeTable"
C.e.t(o,n)
C.e.t(this.a,o)
m=P.j2(C.B,a4,C.w,!1)
l=p.createElement("tr")
l.className="headerRow"
k=p.createElement("td")
k.className="headerCell"
k.colSpan=t?3:2
j=p.createElement("div")
j.className="tableHeader"
j.id=m
i=W.ij(null)
i.href="#"+m
i.textContent=a4
C.e.t(j,i)
C.u.t(k,j)
C.k.t(l,k)
C.o.t(n,l)
if(t)for(h=a6,g=h,s=0;f=q.d,s<f.length;++s){r=f[s]
e=p.createElement("tr")
e.className="codeTableRow"
d=p.createElement("td")
d.className="codeLineNums codeLineLight"
c=p.createElement("td")
c.className="codeLineNums"
if(s>=u.length)return H.i(u,s)
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
for(f=r.length,a0=0;a0<r.length;r.length===f||(0,H.x)(r),++a0)C.u.t(a,r[a0])
C.k.t(e,d)
C.k.t(e,c)
C.k.t(e,a)
C.o.t(n,e)}else for(f=q.d,a1=f.length,a2=a6,a0=0;a0<f.length;f.length===a1||(0,H.x)(f),++a0){r=f[a0]
e=p.createElement("tr")
e.className="codeTableRow"
d=p.createElement("td")
d.className="codeLineNums";++a2
d.textContent=""+a2
c=p.createElement("td")
c.className="codeLineText"
for(a3=C.a.gL(r);a3.u();)C.u.t(c,a3.gG())
C.k.t(e,d)
C.k.t(e,c)
C.o.t(n,e)}},
fb:function(){var u,t,s,r
if(this.b!=null)return
u=V.fc()
u.c=u.j(0,"Start")
t=u.j(0,"Start").k(0,"Bold")
s=V.o(new H.m("*"))
C.a.h(t.a,s)
t.c=!0
t=u.j(0,"Bold").k(0,"Bold")
s=new V.a5()
r=[V.aa]
s.sT(H.a([],r))
C.a.h(t.a,s)
t=V.o(new H.m("*"))
C.a.h(s.a,t)
t=u.j(0,"Bold").k(0,"BoldEnd")
s=V.o(new H.m("*"))
C.a.h(t.a,s)
t.c=!0
t=u.j(0,"Start").k(0,"Italic")
s=V.o(new H.m("_"))
C.a.h(t.a,s)
t.c=!0
t=u.j(0,"Italic").k(0,"Italic")
s=new V.a5()
s.sT(H.a([],r))
C.a.h(t.a,s)
t=V.o(new H.m("_"))
C.a.h(s.a,t)
t=u.j(0,"Italic").k(0,"ItalicEnd")
s=V.o(new H.m("_"))
C.a.h(t.a,s)
t.c=!0
t=u.j(0,"Start").k(0,"Code")
s=V.o(new H.m("`"))
C.a.h(t.a,s)
t.c=!0
t=u.j(0,"Code").k(0,"Code")
s=new V.a5()
s.sT(H.a([],r))
C.a.h(t.a,s)
t=V.o(new H.m("`"))
C.a.h(s.a,t)
t=u.j(0,"Code").k(0,"CodeEnd")
s=V.o(new H.m("`"))
C.a.h(t.a,s)
t.c=!0
t=u.j(0,"Start").k(0,"LinkHead")
s=V.o(new H.m("["))
C.a.h(t.a,s)
t.c=!0
t=u.j(0,"LinkHead").k(0,"LinkTail")
s=V.o(new H.m("|"))
C.a.h(t.a,s)
s=u.j(0,"LinkHead").k(0,"LinkEnd")
t=V.o(new H.m("]"))
C.a.h(s.a,t)
s.c=!0
s=u.j(0,"LinkHead").k(0,"LinkHead")
t=new V.a5()
t.sT(H.a([],r))
C.a.h(s.a,t)
s=V.o(new H.m("|]"))
C.a.h(t.a,s)
s=u.j(0,"LinkTail").k(0,"LinkEnd")
t=V.o(new H.m("]"))
C.a.h(s.a,t)
s.c=!0
s=u.j(0,"LinkTail").k(0,"LinkTail")
t=new V.a5()
t.sT(H.a([],r))
C.a.h(s.a,t)
s=V.o(new H.m("|]"))
C.a.h(t.a,s)
C.a.h(u.j(0,"Start").k(0,"Other").a,new V.aC())
s=u.j(0,"Other").k(0,"Other")
t=new V.a5()
t.sT(H.a([],r))
C.a.h(s.a,t)
s=V.o(new H.m("*_`["))
C.a.h(t.a,s)
s=u.j(0,"BoldEnd")
s.d=s.a.I("Bold")
s=u.j(0,"ItalicEnd")
s.d=s.a.I("Italic")
s=u.j(0,"CodeEnd")
s.d=s.a.I("Code")
s=u.j(0,"LinkEnd")
s.d=s.a.I("Link")
s=u.j(0,"Other")
s.d=s.a.I("Other")
this.b=u}}
V.f_.prototype={
$1:function(a){P.iR(C.q,new V.eZ(this.a))},
$S:11}
V.eZ.prototype={
$0:function(){var u,t,s
u=C.d.a2(document.documentElement.scrollTop)
t=this.a.style
s=H.c(-0.01*u)+"px"
t.top=s},
$S:2}
V.f0.prototype={
$1:function(a){return H.e(a,"$iaQ").a===this.a},
$S:35}
D.hz.prototype={
$1:function(a){var u,t,s,r
H.e(a,"$ir")
u=this.a
t=this.b
s=t.a
r=[P.k]
u.ct("Vertex Shader","glsl",0,H.a((s==null?null:s.c).split("\n"),r))
t=t.a
u.ct("Fragment Shader","glsl",0,H.a((t==null?null:t.d).split("\n"),r))},
$S:7};(function aliases(){var u=J.U.prototype
u.dt=u.i
u=J.cH.prototype
u.dv=u.i
u=P.n.prototype
u.du=u.b_
u=W.D.prototype
u.b7=u.Z
u=W.dC.prototype
u.dz=u.a6
u=V.cN.prototype
u.dw=u.ae
u.bU=u.i})();(function installTearOffs(){var u=hunkHelpers._static_1,t=hunkHelpers._static_0,s=hunkHelpers.installStaticTearOff,r=hunkHelpers.installInstanceTearOff,q=hunkHelpers._instance_2u,p=hunkHelpers._instance_0u,o=hunkHelpers._instance_1u,n=hunkHelpers._instance_0i
u(P,"kA","ki",8)
u(P,"kB","kj",8)
u(P,"kC","kk",8)
t(P,"jb","kz",3)
s(W,"kL",4,null,["$4"],["km"],22,0)
s(W,"kM",4,null,["$4"],["kn"],22,0)
var m
r(m=E.a4.prototype,"gcR",0,0,null,["$1","$0"],["cS","hj"],1,0)
r(m,"gcP",0,0,null,["$1","$0"],["cQ","hi"],1,0)
r(m,"gcN",0,0,null,["$1","$0"],["cO","hf"],1,0)
q(m,"ghd","he",6)
q(m,"ghg","hh",6)
r(m=E.da.prototype,"gbW",0,0,null,["$1","$0"],["bY","bX"],1,0)
p(m,"ghw","cX",3)
o(m=X.dk.prototype,"geA","eB",10)
o(m,"gen","eo",10)
o(m,"geu","ev",4)
o(m,"geE","eF",21)
o(m,"geC","eD",21)
o(m,"geH","eI",4)
o(m,"geL","eM",4)
o(m,"gey","ez",4)
o(m,"geJ","eK",4)
o(m,"gew","ex",4)
o(m,"geN","eO",26)
o(m,"geP","eQ",10)
o(m,"geY","eZ",9)
o(m,"geU","eV",9)
o(m,"geW","eX",9)
n(V.F.prototype,"gl","bH",20)
n(V.N.prototype,"gl","bH",20)
r(m=U.bM.prototype,"gao",0,0,null,["$1","$0"],["J","U"],1,0)
q(m,"gel","em",13)
q(m,"geS","eT",13)
r(m=U.dl.prototype,"gao",0,0,null,["$1","$0"],["J","U"],1,0)
o(m,"gbk","bl",0)
o(m,"gbm","bn",0)
o(m,"gbo","bp",0)
r(m=U.dm.prototype,"gao",0,0,null,["$1","$0"],["J","U"],1,0)
o(m,"gbk","bl",0)
o(m,"gbm","bn",0)
o(m,"gbo","bp",0)
o(m,"gef","eg",0)
o(m,"geh","ei",0)
o(m,"gfo","fp",0)
o(m,"gfm","fn",0)
o(m,"gfk","fl",0)
o(U.dn.prototype,"gej","ek",0)
r(m=M.cw.prototype,"ga3",0,0,null,["$1","$0"],["a9","dJ"],1,0)
q(m,"gep","eq",6)
q(m,"ger","es",6)
r(O.cW.prototype,"gbZ",0,0,null,["$1","$0"],["b8","c_"],1,0)
r(X.cY.prototype,"gc0",0,0,null,["$1","$0"],["ak","dN"],1,0)})();(function inheritance(){var u=hunkHelpers.mixin,t=hunkHelpers.inherit,s=hunkHelpers.inheritMany
t(P.B,null)
s(P.B,[H.hO,J.U,J.ae,P.dy,P.n,H.bO,P.at,H.bb,H.dj,H.eN,H.ff,P.aT,H.bE,H.dD,P.bg,H.eo,H.ep,H.el,P.dE,P.aB,P.al,P.dr,P.f2,P.bY,P.f3,P.ax,P.a1,P.hj,P.h9,P.bp,P.dx,P.L,P.bF,P.eg,P.hh,P.C,P.a3,P.a0,P.aS,P.eH,P.d4,P.du,P.eb,P.aU,P.b,P.z,P.a6,P.k,P.bl,W.dV,W.b2,W.a9,W.cV,W.dC,W.hc,W.cy,W.ac,W.h8,W.dI,P.dH,P.h3,O.Q,O.bP,E.dP,E.a4,E.eO,E.da,Z.dq,Z.fG,Z.cp,Z.aW,Z.aI,D.dS,D.bK,D.r,X.cq,X.cI,X.en,X.er,X.ab,X.ex,X.fd,X.dk,V.aD,V.e3,V.cO,V.aY,V.X,V.b0,V.cZ,V.d1,V.F,V.N,U.dl,U.dm,U.dn,M.cw,A.cm,A.dO,A.eF,A.b9,A.dd,A.fq,F.R,F.aF,F.aZ,F.d3,F.eV,F.eW,F.eX,F.ar,F.fx,F.fy,F.fB,F.fC,O.bn,T.f8,V.aC,V.aa,V.cN,V.eM,V.eU,V.bW,V.db,V.c0,V.fb,X.cr,X.d7,X.cY,V.aQ,V.eY])
s(J.U,[J.ej,J.ek,J.cH,J.au,J.cG,J.be,H.cT,W.ba,W.b8,W.ds,W.dY,W.cu,W.cv,W.f,W.dv,W.aV,W.cL,W.dA,W.d0,W.ay,W.dF,W.dJ,P.cn,P.cz,P.d_,P.bk,P.d2,P.d8,P.de])
s(J.cH,[J.eI,J.c3,J.aX])
t(J.hN,J.au)
s(J.cG,[J.cF,J.cE])
t(P.eq,P.dy)
s(P.eq,[H.di,W.fN,W.a2,P.e7])
t(H.m,H.di)
s(P.n,[H.e0,H.eu,H.c4])
s(H.e0,[H.bf,H.cJ])
s(P.at,[H.ev,H.fH])
t(H.ew,H.bf)
s(P.aT,[H.eG,H.em,H.ft,H.fh,H.dR,H.eS,P.cX,P.an,P.fu,P.fs,P.bX,P.dU,P.dW])
s(H.bE,[H.hD,H.f7,H.hu,H.hv,H.hw,P.fJ,P.fI,P.fK,P.fL,P.hg,P.hf,P.fS,P.fW,P.fT,P.fU,P.fV,P.fZ,P.h_,P.fY,P.fX,P.f4,P.f5,P.ho,P.h6,P.h5,P.h7,P.et,P.dZ,P.e_,W.e1,W.fR,W.eD,W.eC,W.ha,W.hb,W.he,W.hi,P.hq,P.e8,P.e9,E.eP,E.eQ,E.eR,E.fa,D.e5,D.e6,F.hk,F.fE,F.fD,F.fz,F.fA,T.f9,V.hC,V.f_,V.eZ,V.f0,D.hz])
s(H.f7,[H.f1,H.bC])
t(P.es,P.bg)
s(P.es,[H.av,W.fM])
t(H.cQ,H.cT)
s(H.cQ,[H.c8,H.ca])
t(H.c9,H.c8)
t(H.cR,H.c9)
t(H.cb,H.ca)
t(H.cS,H.cb)
s(H.cS,[H.ey,H.ez,H.eA,H.cU,H.eB])
t(P.h4,P.hj)
t(P.h2,P.h9)
t(P.bG,P.f3)
t(P.e2,P.bF)
s(P.bG,[P.ef,P.fw])
t(P.fv,P.e2)
s(P.a0,[P.t,P.w])
s(P.an,[P.bj,P.eh])
s(W.ba,[W.u,W.c5])
s(W.u,[W.D,W.aP,W.bI,W.c6])
s(W.D,[W.p,P.j])
s(W.p,[W.cl,W.dN,W.bB,W.aO,W.b7,W.af,W.ea,W.cA,W.bN,W.bQ,W.eT,W.bm,W.d5,W.d6,W.f6,W.bZ])
t(W.bH,W.ds)
t(W.dw,W.dv)
t(W.bc,W.dw)
t(W.cB,W.bI)
t(W.b1,W.f)
s(W.b1,[W.aw,W.V,W.ap])
t(W.dB,W.dA)
t(W.bS,W.dB)
t(W.dG,W.dF)
t(W.fe,W.dG)
t(W.fF,W.bQ)
t(W.aA,W.V)
t(W.dt,W.cv)
t(W.dK,W.dJ)
t(W.dz,W.dK)
t(W.fO,W.fM)
t(W.fP,P.f2)
t(W.hW,W.fP)
t(W.fQ,P.bY)
t(W.hd,W.dC)
t(P.ai,P.h3)
t(P.bU,P.j)
s(E.dP,[Z.co,A.bV,T.c_])
s(D.r,[D.cC,D.cD,D.E,X.eK])
s(X.eK,[X.cM,X.aH,X.bR,X.dc])
s(D.dS,[U.dT,U.W])
t(U.cs,U.W)
t(U.bM,O.Q)
t(A.eE,A.bV)
s(A.dd,[A.c2,A.fl,A.fn,A.fp,A.fj,A.fi,A.fk,A.fm,A.fo,A.fr,A.df,A.bo,A.dg,A.dh])
t(O.cW,O.bn)
t(T.d9,T.c_)
s(V.cN,[V.a5,V.c1])
t(X.ec,X.d7)
s(V.aQ,[V.dX,V.ed,V.ee,V.eJ])
u(H.di,H.dj)
u(H.c8,P.L)
u(H.c9,H.bb)
u(H.ca,P.L)
u(H.cb,H.bb)
u(P.dy,P.L)
u(W.ds,W.dV)
u(W.dv,P.L)
u(W.dw,W.a9)
u(W.dA,P.L)
u(W.dB,W.a9)
u(W.dF,P.L)
u(W.dG,W.a9)
u(W.dJ,P.L)
u(W.dK,W.a9)})();(function constants(){var u=hunkHelpers.makeConstList
C.l=W.aO.prototype
C.m=W.b7.prototype
C.x=W.b8.prototype
C.e=W.af.prototype
C.I=W.cu.prototype
C.K=W.cA.prototype
C.y=W.cB.prototype
C.M=J.U.prototype
C.a=J.au.prototype
C.N=J.cE.prototype
C.f=J.cF.prototype
C.d=J.cG.prototype
C.c=J.be.prototype
C.U=J.aX.prototype
C.Y=W.bS.prototype
C.C=J.eI.prototype
C.D=W.d0.prototype
C.b=P.bk.prototype
C.u=W.bm.prototype
C.o=W.d5.prototype
C.k=W.d6.prototype
C.v=J.c3.prototype
C.E=W.aA.prototype
C.F=W.c5.prototype
C.G=new P.eH()
C.H=new P.fw()
C.h=new P.h4()
C.i=new A.b9(0,"ColorSourceType.None")
C.p=new A.b9(1,"ColorSourceType.Solid")
C.n=new A.b9(2,"ColorSourceType.Texture2D")
C.j=new A.b9(3,"ColorSourceType.TextureCube")
C.q=new P.aS(0)
C.J=new P.aS(5e6)
C.L=new P.eg("element",!0,!1,!1,!1)
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
C.V=H.a(u(["*::class","*::dir","*::draggable","*::hidden","*::id","*::inert","*::itemprop","*::itemref","*::itemscope","*::lang","*::spellcheck","*::title","*::translate","A::accesskey","A::coords","A::hreflang","A::name","A::shape","A::tabindex","A::target","A::type","AREA::accesskey","AREA::alt","AREA::coords","AREA::nohref","AREA::shape","AREA::tabindex","AREA::target","AUDIO::controls","AUDIO::loop","AUDIO::mediagroup","AUDIO::muted","AUDIO::preload","BDO::dir","BODY::alink","BODY::bgcolor","BODY::link","BODY::text","BODY::vlink","BR::clear","BUTTON::accesskey","BUTTON::disabled","BUTTON::name","BUTTON::tabindex","BUTTON::type","BUTTON::value","CANVAS::height","CANVAS::width","CAPTION::align","COL::align","COL::char","COL::charoff","COL::span","COL::valign","COL::width","COLGROUP::align","COLGROUP::char","COLGROUP::charoff","COLGROUP::span","COLGROUP::valign","COLGROUP::width","COMMAND::checked","COMMAND::command","COMMAND::disabled","COMMAND::label","COMMAND::radiogroup","COMMAND::type","DATA::value","DEL::datetime","DETAILS::open","DIR::compact","DIV::align","DL::compact","FIELDSET::disabled","FONT::color","FONT::face","FONT::size","FORM::accept","FORM::autocomplete","FORM::enctype","FORM::method","FORM::name","FORM::novalidate","FORM::target","FRAME::name","H1::align","H2::align","H3::align","H4::align","H5::align","H6::align","HR::align","HR::noshade","HR::size","HR::width","HTML::version","IFRAME::align","IFRAME::frameborder","IFRAME::height","IFRAME::marginheight","IFRAME::marginwidth","IFRAME::width","IMG::align","IMG::alt","IMG::border","IMG::height","IMG::hspace","IMG::ismap","IMG::name","IMG::usemap","IMG::vspace","IMG::width","INPUT::accept","INPUT::accesskey","INPUT::align","INPUT::alt","INPUT::autocomplete","INPUT::autofocus","INPUT::checked","INPUT::disabled","INPUT::inputmode","INPUT::ismap","INPUT::list","INPUT::max","INPUT::maxlength","INPUT::min","INPUT::multiple","INPUT::name","INPUT::placeholder","INPUT::readonly","INPUT::required","INPUT::size","INPUT::step","INPUT::tabindex","INPUT::type","INPUT::usemap","INPUT::value","INS::datetime","KEYGEN::disabled","KEYGEN::keytype","KEYGEN::name","LABEL::accesskey","LABEL::for","LEGEND::accesskey","LEGEND::align","LI::type","LI::value","LINK::sizes","MAP::name","MENU::compact","MENU::label","MENU::type","METER::high","METER::low","METER::max","METER::min","METER::value","OBJECT::typemustmatch","OL::compact","OL::reversed","OL::start","OL::type","OPTGROUP::disabled","OPTGROUP::label","OPTION::disabled","OPTION::label","OPTION::selected","OPTION::value","OUTPUT::for","OUTPUT::name","P::align","PRE::width","PROGRESS::max","PROGRESS::min","PROGRESS::value","SELECT::autocomplete","SELECT::disabled","SELECT::multiple","SELECT::name","SELECT::required","SELECT::size","SELECT::tabindex","SOURCE::type","TABLE::align","TABLE::bgcolor","TABLE::border","TABLE::cellpadding","TABLE::cellspacing","TABLE::frame","TABLE::rules","TABLE::summary","TABLE::width","TBODY::align","TBODY::char","TBODY::charoff","TBODY::valign","TD::abbr","TD::align","TD::axis","TD::bgcolor","TD::char","TD::charoff","TD::colspan","TD::headers","TD::height","TD::nowrap","TD::rowspan","TD::scope","TD::valign","TD::width","TEXTAREA::accesskey","TEXTAREA::autocomplete","TEXTAREA::cols","TEXTAREA::disabled","TEXTAREA::inputmode","TEXTAREA::name","TEXTAREA::placeholder","TEXTAREA::readonly","TEXTAREA::required","TEXTAREA::rows","TEXTAREA::tabindex","TEXTAREA::wrap","TFOOT::align","TFOOT::char","TFOOT::charoff","TFOOT::valign","TH::abbr","TH::align","TH::axis","TH::bgcolor","TH::char","TH::charoff","TH::colspan","TH::headers","TH::height","TH::nowrap","TH::rowspan","TH::scope","TH::valign","TH::width","THEAD::align","THEAD::char","THEAD::charoff","THEAD::valign","TR::align","TR::bgcolor","TR::char","TR::charoff","TR::valign","TRACK::default","TRACK::kind","TRACK::label","TRACK::srclang","UL::compact","UL::type","VIDEO::controls","VIDEO::height","VIDEO::loop","VIDEO::mediagroup","VIDEO::muted","VIDEO::preload","VIDEO::width"]),[P.k])
C.W=H.a(u(["HEAD","AREA","BASE","BASEFONT","BR","COL","COLGROUP","EMBED","FRAME","FRAMESET","HR","IMAGE","IMG","INPUT","ISINDEX","LINK","META","PARAM","SOURCE","STYLE","TITLE","WBR"]),[P.k])
C.X=H.a(u([]),[P.k])
C.B=H.a(u([0,0,65498,45055,65535,34815,65534,18431]),[P.w])
C.r=H.a(u(["bind","if","ref","repeat","syntax"]),[P.k])
C.t=H.a(u(["A::href","AREA::href","BLOCKQUOTE::cite","BODY::background","COMMAND::icon","DEL::cite","FORM::action","IMG::src","INPUT::src","INS::cite","Q::cite","VIDEO::poster"]),[P.k])
C.w=new P.fv(!1)})();(function staticFields(){$.as=0
$.bD=null
$.ik=null
$.hY=!1
$.je=null
$.j9=null
$.jj=null
$.hr=null
$.hx=null
$.i8=null
$.bq=null
$.ce=null
$.cf=null
$.hZ=!1
$.J=C.h
$.aE=null
$.hK=null
$.is=null
$.ir=null
$.iy=null
$.iz=null
$.iF=null
$.iG=null
$.iL=null
$.iV=null
$.iY=null
$.iX=null
$.iW=null
$.iE=null})();(function lazyInitializers(){var u=hunkHelpers.lazy
u($,"l8","jm",function(){return H.jd("_$dart_dartClosure")})
u($,"l9","id",function(){return H.jd("_$dart_js")})
u($,"le","jn",function(){return H.az(H.fg({
toString:function(){return"$receiver$"}}))})
u($,"lf","jo",function(){return H.az(H.fg({$method$:null,
toString:function(){return"$receiver$"}}))})
u($,"lg","jp",function(){return H.az(H.fg(null))})
u($,"lh","jq",function(){return H.az(function(){var $argumentsExpr$='$arguments$'
try{null.$method$($argumentsExpr$)}catch(t){return t.message}}())})
u($,"lk","jt",function(){return H.az(H.fg(void 0))})
u($,"ll","ju",function(){return H.az(function(){var $argumentsExpr$='$arguments$'
try{(void 0).$method$($argumentsExpr$)}catch(t){return t.message}}())})
u($,"lj","js",function(){return H.az(H.iT(null))})
u($,"li","jr",function(){return H.az(function(){try{null.$method$}catch(t){return t.message}}())})
u($,"ln","jw",function(){return H.az(H.iT(void 0))})
u($,"lm","jv",function(){return H.az(function(){try{(void 0).$method$}catch(t){return t.message}}())})
u($,"lE","ie",function(){return P.kh()})
u($,"lI","ck",function(){return[]})
u($,"lH","jB",function(){return P.ka("^[\\-\\.0-9A-Z_a-z~]*$",!0,!1)})
u($,"lF","jA",function(){return P.iw(["A","ABBR","ACRONYM","ADDRESS","AREA","ARTICLE","ASIDE","AUDIO","B","BDI","BDO","BIG","BLOCKQUOTE","BR","BUTTON","CANVAS","CAPTION","CENTER","CITE","CODE","COL","COLGROUP","COMMAND","DATA","DATALIST","DD","DEL","DETAILS","DFN","DIR","DIV","DL","DT","EM","FIELDSET","FIGCAPTION","FIGURE","FONT","FOOTER","FORM","H1","H2","H3","H4","H5","H6","HEADER","HGROUP","HR","I","IFRAME","IMG","INPUT","INS","KBD","LABEL","LEGEND","LI","MAP","MARK","MENU","METER","NAV","NOBR","OL","OPTGROUP","OPTION","OUTPUT","P","PRE","PROGRESS","Q","S","SAMP","SECTION","SELECT","SMALL","SOURCE","SPAN","STRIKE","STRONG","SUB","SUMMARY","SUP","TABLE","TBODY","TD","TEXTAREA","TFOOT","TH","THEAD","TIME","TR","TRACK","TT","U","UL","VAR","VIDEO","WBR"],P.k)})
u($,"lG","ig",function(){return P.jX(P.k,P.aU)})
u($,"lx","jz",function(){return Z.ak(0)})
u($,"lr","jx",function(){return Z.ak(511)})
u($,"lz","aL",function(){return Z.ak(1)})
u($,"ly","aK",function(){return Z.ak(2)})
u($,"lt","aJ",function(){return Z.ak(4)})
u($,"lA","aM",function(){return Z.ak(8)})
u($,"lB","aN",function(){return Z.ak(16)})
u($,"lu","ci",function(){return Z.ak(32)})
u($,"lv","cj",function(){return Z.ak(64)})
u($,"lw","jy",function(){return Z.ak(96)})
u($,"lC","bz",function(){return Z.ak(128)})
u($,"ls","by",function(){return Z.ak(256)})
u($,"l7","jl",function(){return new V.e3(1e-9)})
u($,"l6","G",function(){return $.jl()})})()
var v={mangledGlobalNames:{w:"int",t:"double",a0:"num",k:"String",C:"bool",z:"Null",b:"List"},mangledNames:{},getTypeFromName:getGlobalFromName,metadata:[],types:[{func:1,ret:-1,args:[D.r]},{func:1,ret:-1,opt:[D.r]},{func:1,ret:P.z},{func:1,ret:-1},{func:1,ret:-1,args:[W.V]},{func:1,ret:P.z,args:[F.R]},{func:1,ret:-1,args:[P.w,[P.n,E.a4]]},{func:1,ret:P.z,args:[D.r]},{func:1,ret:-1,args:[{func:1,ret:-1}]},{func:1,ret:-1,args:[W.ap]},{func:1,ret:-1,args:[W.f]},{func:1,ret:P.z,args:[W.f]},{func:1,ret:P.z,args:[,]},{func:1,ret:-1,args:[P.w,[P.n,U.W]]},{func:1,ret:P.z,args:[,,]},{func:1,ret:P.k,args:[P.w]},{func:1,ret:P.C,args:[W.u]},{func:1,args:[,]},{func:1,ret:P.C,args:[W.ac]},{func:1,ret:P.C,args:[P.k]},{func:1,ret:P.t},{func:1,ret:-1,args:[W.aw]},{func:1,ret:P.C,args:[W.D,P.k,P.k,W.b2]},{func:1,ret:P.z,args:[{func:1,ret:-1,args:[D.r]}]},{func:1,ret:P.z,args:[P.a0]},{func:1,ret:W.D,args:[W.u]},{func:1,ret:-1,args:[W.aA]},{func:1,ret:-1,args:[W.u,W.u]},{func:1,ret:P.k,args:[P.k]},{func:1,ret:[P.al,,],args:[,]},{func:1,ret:P.z,args:[,],opt:[P.a6]},{func:1,ret:P.z,args:[F.ar,P.t,P.t]},{func:1,args:[P.k]},{func:1,args:[,P.k]},{func:1,ret:P.z,args:[P.ax]},{func:1,ret:P.C,args:[V.aQ]},{func:1,ret:P.z,args:[{func:1,ret:-1}]},{func:1,args:[W.f]}],interceptorsByTag:null,leafTags:null};(function nativeSupport(){!function(){var u=function(a){var o={}
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
hunkHelpers.setOrUpdateInterceptorsByTag({DOMError:J.U,MediaError:J.U,Navigator:J.U,NavigatorConcurrentHardware:J.U,NavigatorUserMediaError:J.U,OverconstrainedError:J.U,PositionError:J.U,WebGLActiveInfo:J.U,WebGLRenderbuffer:J.U,WebGL2RenderingContext:J.U,SQLError:J.U,ArrayBufferView:H.cT,Float32Array:H.cR,Int16Array:H.ey,Int32Array:H.ez,Uint32Array:H.eA,Uint8ClampedArray:H.cU,CanvasPixelArray:H.cU,Uint8Array:H.eB,HTMLBRElement:W.p,HTMLButtonElement:W.p,HTMLContentElement:W.p,HTMLDListElement:W.p,HTMLDataElement:W.p,HTMLDataListElement:W.p,HTMLDetailsElement:W.p,HTMLDialogElement:W.p,HTMLEmbedElement:W.p,HTMLFieldSetElement:W.p,HTMLHRElement:W.p,HTMLHeadingElement:W.p,HTMLHtmlElement:W.p,HTMLIFrameElement:W.p,HTMLInputElement:W.p,HTMLLIElement:W.p,HTMLLabelElement:W.p,HTMLLegendElement:W.p,HTMLLinkElement:W.p,HTMLMapElement:W.p,HTMLMenuElement:W.p,HTMLMetaElement:W.p,HTMLMeterElement:W.p,HTMLModElement:W.p,HTMLOListElement:W.p,HTMLObjectElement:W.p,HTMLOptGroupElement:W.p,HTMLOptionElement:W.p,HTMLOutputElement:W.p,HTMLParagraphElement:W.p,HTMLParamElement:W.p,HTMLPictureElement:W.p,HTMLPreElement:W.p,HTMLProgressElement:W.p,HTMLQuoteElement:W.p,HTMLScriptElement:W.p,HTMLShadowElement:W.p,HTMLSlotElement:W.p,HTMLSourceElement:W.p,HTMLSpanElement:W.p,HTMLStyleElement:W.p,HTMLTableCaptionElement:W.p,HTMLTableColElement:W.p,HTMLTextAreaElement:W.p,HTMLTimeElement:W.p,HTMLTitleElement:W.p,HTMLTrackElement:W.p,HTMLUListElement:W.p,HTMLUnknownElement:W.p,HTMLDirectoryElement:W.p,HTMLFontElement:W.p,HTMLFrameElement:W.p,HTMLFrameSetElement:W.p,HTMLMarqueeElement:W.p,HTMLElement:W.p,HTMLAnchorElement:W.cl,HTMLAreaElement:W.dN,HTMLBaseElement:W.bB,HTMLBodyElement:W.aO,HTMLCanvasElement:W.b7,CanvasRenderingContext2D:W.b8,CDATASection:W.aP,CharacterData:W.aP,Comment:W.aP,ProcessingInstruction:W.aP,Text:W.aP,CSSStyleDeclaration:W.bH,MSStyleCSSProperties:W.bH,CSS2Properties:W.bH,HTMLDivElement:W.af,XMLDocument:W.bI,Document:W.bI,DOMException:W.dY,DOMImplementation:W.cu,DOMRectReadOnly:W.cv,Element:W.D,AbortPaymentEvent:W.f,AnimationEvent:W.f,AnimationPlaybackEvent:W.f,ApplicationCacheErrorEvent:W.f,BackgroundFetchClickEvent:W.f,BackgroundFetchEvent:W.f,BackgroundFetchFailEvent:W.f,BackgroundFetchedEvent:W.f,BeforeInstallPromptEvent:W.f,BeforeUnloadEvent:W.f,BlobEvent:W.f,CanMakePaymentEvent:W.f,ClipboardEvent:W.f,CloseEvent:W.f,CustomEvent:W.f,DeviceMotionEvent:W.f,DeviceOrientationEvent:W.f,ErrorEvent:W.f,ExtendableEvent:W.f,ExtendableMessageEvent:W.f,FetchEvent:W.f,FontFaceSetLoadEvent:W.f,ForeignFetchEvent:W.f,GamepadEvent:W.f,HashChangeEvent:W.f,InstallEvent:W.f,MediaEncryptedEvent:W.f,MediaKeyMessageEvent:W.f,MediaQueryListEvent:W.f,MediaStreamEvent:W.f,MediaStreamTrackEvent:W.f,MessageEvent:W.f,MIDIConnectionEvent:W.f,MIDIMessageEvent:W.f,MutationEvent:W.f,NotificationEvent:W.f,PageTransitionEvent:W.f,PaymentRequestEvent:W.f,PaymentRequestUpdateEvent:W.f,PopStateEvent:W.f,PresentationConnectionAvailableEvent:W.f,PresentationConnectionCloseEvent:W.f,ProgressEvent:W.f,PromiseRejectionEvent:W.f,PushEvent:W.f,RTCDataChannelEvent:W.f,RTCDTMFToneChangeEvent:W.f,RTCPeerConnectionIceEvent:W.f,RTCTrackEvent:W.f,SecurityPolicyViolationEvent:W.f,SensorErrorEvent:W.f,SpeechRecognitionError:W.f,SpeechRecognitionEvent:W.f,SpeechSynthesisEvent:W.f,StorageEvent:W.f,SyncEvent:W.f,TrackEvent:W.f,TransitionEvent:W.f,WebKitTransitionEvent:W.f,VRDeviceEvent:W.f,VRDisplayEvent:W.f,VRSessionEvent:W.f,MojoInterfaceRequestEvent:W.f,ResourceProgressEvent:W.f,USBConnectionEvent:W.f,IDBVersionChangeEvent:W.f,AudioProcessingEvent:W.f,OfflineAudioCompletionEvent:W.f,WebGLContextEvent:W.f,Event:W.f,InputEvent:W.f,EventTarget:W.ba,HTMLFormElement:W.ea,HTMLHeadElement:W.cA,HTMLCollection:W.bc,HTMLFormControlsCollection:W.bc,HTMLOptionsCollection:W.bc,HTMLDocument:W.cB,ImageData:W.aV,HTMLImageElement:W.bN,KeyboardEvent:W.aw,Location:W.cL,HTMLAudioElement:W.bQ,HTMLMediaElement:W.bQ,PointerEvent:W.V,MouseEvent:W.V,DragEvent:W.V,DocumentFragment:W.u,ShadowRoot:W.u,DocumentType:W.u,Node:W.u,NodeList:W.bS,RadioNodeList:W.bS,Range:W.d0,HTMLSelectElement:W.eT,HTMLTableCellElement:W.bm,HTMLTableDataCellElement:W.bm,HTMLTableHeaderCellElement:W.bm,HTMLTableElement:W.d5,HTMLTableRowElement:W.d6,HTMLTableSectionElement:W.f6,HTMLTemplateElement:W.bZ,Touch:W.ay,TouchEvent:W.ap,TouchList:W.fe,CompositionEvent:W.b1,FocusEvent:W.b1,TextEvent:W.b1,UIEvent:W.b1,HTMLVideoElement:W.fF,WheelEvent:W.aA,Window:W.c5,DOMWindow:W.c5,Attr:W.c6,ClientRect:W.dt,DOMRect:W.dt,NamedNodeMap:W.dz,MozNamedAttrMap:W.dz,SVGScriptElement:P.bU,SVGAElement:P.j,SVGAnimateElement:P.j,SVGAnimateMotionElement:P.j,SVGAnimateTransformElement:P.j,SVGAnimationElement:P.j,SVGCircleElement:P.j,SVGClipPathElement:P.j,SVGDefsElement:P.j,SVGDescElement:P.j,SVGDiscardElement:P.j,SVGEllipseElement:P.j,SVGFEBlendElement:P.j,SVGFEColorMatrixElement:P.j,SVGFEComponentTransferElement:P.j,SVGFECompositeElement:P.j,SVGFEConvolveMatrixElement:P.j,SVGFEDiffuseLightingElement:P.j,SVGFEDisplacementMapElement:P.j,SVGFEDistantLightElement:P.j,SVGFEFloodElement:P.j,SVGFEFuncAElement:P.j,SVGFEFuncBElement:P.j,SVGFEFuncGElement:P.j,SVGFEFuncRElement:P.j,SVGFEGaussianBlurElement:P.j,SVGFEImageElement:P.j,SVGFEMergeElement:P.j,SVGFEMergeNodeElement:P.j,SVGFEMorphologyElement:P.j,SVGFEOffsetElement:P.j,SVGFEPointLightElement:P.j,SVGFESpecularLightingElement:P.j,SVGFESpotLightElement:P.j,SVGFETileElement:P.j,SVGFETurbulenceElement:P.j,SVGFilterElement:P.j,SVGForeignObjectElement:P.j,SVGGElement:P.j,SVGGeometryElement:P.j,SVGGraphicsElement:P.j,SVGImageElement:P.j,SVGLineElement:P.j,SVGLinearGradientElement:P.j,SVGMarkerElement:P.j,SVGMaskElement:P.j,SVGMetadataElement:P.j,SVGPathElement:P.j,SVGPatternElement:P.j,SVGPolygonElement:P.j,SVGPolylineElement:P.j,SVGRadialGradientElement:P.j,SVGRectElement:P.j,SVGSetElement:P.j,SVGStopElement:P.j,SVGStyleElement:P.j,SVGSVGElement:P.j,SVGSwitchElement:P.j,SVGSymbolElement:P.j,SVGTSpanElement:P.j,SVGTextContentElement:P.j,SVGTextElement:P.j,SVGTextPathElement:P.j,SVGTextPositioningElement:P.j,SVGTitleElement:P.j,SVGUseElement:P.j,SVGViewElement:P.j,SVGGradientElement:P.j,SVGComponentTransferFunctionElement:P.j,SVGFEDropShadowElement:P.j,SVGMPathElement:P.j,SVGElement:P.j,WebGLBuffer:P.cn,WebGLFramebuffer:P.cz,WebGLProgram:P.d_,WebGLRenderingContext:P.bk,WebGLShader:P.d2,WebGLTexture:P.d8,WebGLUniformLocation:P.de})
hunkHelpers.setOrUpdateLeafTags({DOMError:true,MediaError:true,Navigator:true,NavigatorConcurrentHardware:true,NavigatorUserMediaError:true,OverconstrainedError:true,PositionError:true,WebGLActiveInfo:true,WebGLRenderbuffer:true,WebGL2RenderingContext:true,SQLError:true,ArrayBufferView:false,Float32Array:true,Int16Array:true,Int32Array:true,Uint32Array:true,Uint8ClampedArray:true,CanvasPixelArray:true,Uint8Array:false,HTMLBRElement:true,HTMLButtonElement:true,HTMLContentElement:true,HTMLDListElement:true,HTMLDataElement:true,HTMLDataListElement:true,HTMLDetailsElement:true,HTMLDialogElement:true,HTMLEmbedElement:true,HTMLFieldSetElement:true,HTMLHRElement:true,HTMLHeadingElement:true,HTMLHtmlElement:true,HTMLIFrameElement:true,HTMLInputElement:true,HTMLLIElement:true,HTMLLabelElement:true,HTMLLegendElement:true,HTMLLinkElement:true,HTMLMapElement:true,HTMLMenuElement:true,HTMLMetaElement:true,HTMLMeterElement:true,HTMLModElement:true,HTMLOListElement:true,HTMLObjectElement:true,HTMLOptGroupElement:true,HTMLOptionElement:true,HTMLOutputElement:true,HTMLParagraphElement:true,HTMLParamElement:true,HTMLPictureElement:true,HTMLPreElement:true,HTMLProgressElement:true,HTMLQuoteElement:true,HTMLScriptElement:true,HTMLShadowElement:true,HTMLSlotElement:true,HTMLSourceElement:true,HTMLSpanElement:true,HTMLStyleElement:true,HTMLTableCaptionElement:true,HTMLTableColElement:true,HTMLTextAreaElement:true,HTMLTimeElement:true,HTMLTitleElement:true,HTMLTrackElement:true,HTMLUListElement:true,HTMLUnknownElement:true,HTMLDirectoryElement:true,HTMLFontElement:true,HTMLFrameElement:true,HTMLFrameSetElement:true,HTMLMarqueeElement:true,HTMLElement:false,HTMLAnchorElement:true,HTMLAreaElement:true,HTMLBaseElement:true,HTMLBodyElement:true,HTMLCanvasElement:true,CanvasRenderingContext2D:true,CDATASection:true,CharacterData:true,Comment:true,ProcessingInstruction:true,Text:true,CSSStyleDeclaration:true,MSStyleCSSProperties:true,CSS2Properties:true,HTMLDivElement:true,XMLDocument:true,Document:false,DOMException:true,DOMImplementation:true,DOMRectReadOnly:false,Element:false,AbortPaymentEvent:true,AnimationEvent:true,AnimationPlaybackEvent:true,ApplicationCacheErrorEvent:true,BackgroundFetchClickEvent:true,BackgroundFetchEvent:true,BackgroundFetchFailEvent:true,BackgroundFetchedEvent:true,BeforeInstallPromptEvent:true,BeforeUnloadEvent:true,BlobEvent:true,CanMakePaymentEvent:true,ClipboardEvent:true,CloseEvent:true,CustomEvent:true,DeviceMotionEvent:true,DeviceOrientationEvent:true,ErrorEvent:true,ExtendableEvent:true,ExtendableMessageEvent:true,FetchEvent:true,FontFaceSetLoadEvent:true,ForeignFetchEvent:true,GamepadEvent:true,HashChangeEvent:true,InstallEvent:true,MediaEncryptedEvent:true,MediaKeyMessageEvent:true,MediaQueryListEvent:true,MediaStreamEvent:true,MediaStreamTrackEvent:true,MessageEvent:true,MIDIConnectionEvent:true,MIDIMessageEvent:true,MutationEvent:true,NotificationEvent:true,PageTransitionEvent:true,PaymentRequestEvent:true,PaymentRequestUpdateEvent:true,PopStateEvent:true,PresentationConnectionAvailableEvent:true,PresentationConnectionCloseEvent:true,ProgressEvent:true,PromiseRejectionEvent:true,PushEvent:true,RTCDataChannelEvent:true,RTCDTMFToneChangeEvent:true,RTCPeerConnectionIceEvent:true,RTCTrackEvent:true,SecurityPolicyViolationEvent:true,SensorErrorEvent:true,SpeechRecognitionError:true,SpeechRecognitionEvent:true,SpeechSynthesisEvent:true,StorageEvent:true,SyncEvent:true,TrackEvent:true,TransitionEvent:true,WebKitTransitionEvent:true,VRDeviceEvent:true,VRDisplayEvent:true,VRSessionEvent:true,MojoInterfaceRequestEvent:true,ResourceProgressEvent:true,USBConnectionEvent:true,IDBVersionChangeEvent:true,AudioProcessingEvent:true,OfflineAudioCompletionEvent:true,WebGLContextEvent:true,Event:false,InputEvent:false,EventTarget:false,HTMLFormElement:true,HTMLHeadElement:true,HTMLCollection:true,HTMLFormControlsCollection:true,HTMLOptionsCollection:true,HTMLDocument:true,ImageData:true,HTMLImageElement:true,KeyboardEvent:true,Location:true,HTMLAudioElement:true,HTMLMediaElement:false,PointerEvent:true,MouseEvent:false,DragEvent:false,DocumentFragment:true,ShadowRoot:true,DocumentType:true,Node:false,NodeList:true,RadioNodeList:true,Range:true,HTMLSelectElement:true,HTMLTableCellElement:true,HTMLTableDataCellElement:true,HTMLTableHeaderCellElement:true,HTMLTableElement:true,HTMLTableRowElement:true,HTMLTableSectionElement:true,HTMLTemplateElement:true,Touch:true,TouchEvent:true,TouchList:true,CompositionEvent:true,FocusEvent:true,TextEvent:true,UIEvent:false,HTMLVideoElement:true,WheelEvent:true,Window:true,DOMWindow:true,Attr:true,ClientRect:true,DOMRect:true,NamedNodeMap:true,MozNamedAttrMap:true,SVGScriptElement:true,SVGAElement:true,SVGAnimateElement:true,SVGAnimateMotionElement:true,SVGAnimateTransformElement:true,SVGAnimationElement:true,SVGCircleElement:true,SVGClipPathElement:true,SVGDefsElement:true,SVGDescElement:true,SVGDiscardElement:true,SVGEllipseElement:true,SVGFEBlendElement:true,SVGFEColorMatrixElement:true,SVGFEComponentTransferElement:true,SVGFECompositeElement:true,SVGFEConvolveMatrixElement:true,SVGFEDiffuseLightingElement:true,SVGFEDisplacementMapElement:true,SVGFEDistantLightElement:true,SVGFEFloodElement:true,SVGFEFuncAElement:true,SVGFEFuncBElement:true,SVGFEFuncGElement:true,SVGFEFuncRElement:true,SVGFEGaussianBlurElement:true,SVGFEImageElement:true,SVGFEMergeElement:true,SVGFEMergeNodeElement:true,SVGFEMorphologyElement:true,SVGFEOffsetElement:true,SVGFEPointLightElement:true,SVGFESpecularLightingElement:true,SVGFESpotLightElement:true,SVGFETileElement:true,SVGFETurbulenceElement:true,SVGFilterElement:true,SVGForeignObjectElement:true,SVGGElement:true,SVGGeometryElement:true,SVGGraphicsElement:true,SVGImageElement:true,SVGLineElement:true,SVGLinearGradientElement:true,SVGMarkerElement:true,SVGMaskElement:true,SVGMetadataElement:true,SVGPathElement:true,SVGPatternElement:true,SVGPolygonElement:true,SVGPolylineElement:true,SVGRadialGradientElement:true,SVGRectElement:true,SVGSetElement:true,SVGStopElement:true,SVGStyleElement:true,SVGSVGElement:true,SVGSwitchElement:true,SVGSymbolElement:true,SVGTSpanElement:true,SVGTextContentElement:true,SVGTextElement:true,SVGTextPathElement:true,SVGTextPositioningElement:true,SVGTitleElement:true,SVGUseElement:true,SVGViewElement:true,SVGGradientElement:true,SVGComponentTransferFunctionElement:true,SVGFEDropShadowElement:true,SVGMPathElement:true,SVGElement:false,WebGLBuffer:true,WebGLFramebuffer:true,WebGLProgram:true,WebGLRenderingContext:true,WebGLShader:true,WebGLTexture:true,WebGLUniformLocation:true})
H.cQ.$nativeSuperclassTag="ArrayBufferView"
H.c8.$nativeSuperclassTag="ArrayBufferView"
H.c9.$nativeSuperclassTag="ArrayBufferView"
H.cR.$nativeSuperclassTag="ArrayBufferView"
H.ca.$nativeSuperclassTag="ArrayBufferView"
H.cb.$nativeSuperclassTag="ArrayBufferView"
H.cS.$nativeSuperclassTag="ArrayBufferView"})()
convertAllToFastObject(w)
convertToFastObject($);(function(a){if(typeof document==="undefined"){a(null)
return}if(typeof document.currentScript!='undefined'){a(document.currentScript)
return}var u=document.scripts
function onLoad(b){for(var s=0;s<u.length;++s)u[s].removeEventListener("load",onLoad,false)
a(b.target)}for(var t=0;t<u.length;++t)u[t].addEventListener("load",onLoad,false)})(function(a){v.currentScript=a
if(typeof dartMainRunner==="function")dartMainRunner(D.jg,[])
else D.jg([])})})()
//# sourceMappingURL=test.dart.js.map
