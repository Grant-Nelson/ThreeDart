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
a[c]=function(){a[c]=function(){H.lS(b)}
var t
var s=d
try{if(a[b]===u){t=a[b]=s
t=a[b]=d()}else t=a[b]}finally{if(t===s)a[b]=null
a[c]=function(){return this[b]}}return t}}function makeConstList(a){a.immutable$list=Array
a.fixed$length=Array
return a}function convertToFastObject(a){function t(){}t.prototype=a
new t()
return a}function convertAllToFastObject(a){for(var u=0;u<a.length;++u)convertToFastObject(a[u])}var y=0
function tearOffGetter(a,b,c,d,e){return e?new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+d+y+++"(receiver) {"+"if (c === null) c = "+"H.iJ"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, true, name);"+"return new c(this, funcs[0], receiver, name);"+"}")(a,b,c,d,H,null):new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+d+y+++"() {"+"if (c === null) c = "+"H.iJ"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, false, name);"+"return new c(this, funcs[0], null, name);"+"}")(a,b,c,d,H,null)}function tearOff(a,b,c,d,e,f){var u=null
return d?function(){if(u===null)u=H.iJ(this,a,b,c,true,false,e).prototype
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
if(w[u][a])return w[u][a]}}var C={},H={iu:function iu(a){this.a=a},
eQ:function(){return new P.bJ("No element")},
kC:function(){return new P.bJ("Too many elements")},
kB:function(){return new P.bJ("Too few elements")},
o:function o(a){this.a=a},
ew:function ew(){},
bB:function bB(){},
c8:function c8(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=null
_.$ti=d},
f2:function f2(a,b,c){this.a=a
this.b=b
this.$ti=c},
f3:function f3(a,b,c){var _=this
_.a=null
_.b=a
_.c=b
_.$ti=c},
f4:function f4(a,b,c){this.a=a
this.b=b
this.$ti=c},
cw:function cw(a,b,c){this.a=a
this.b=b
this.$ti=c},
hm:function hm(a,b,c){this.a=a
this.b=b
this.$ti=c},
bx:function bx(){},
dO:function dO(){},
dN:function dN(){},
bT:function(a){var u,t
u=H.J(v.mangledGlobalNames[a])
if(typeof u==="string")return u
t="minified:"+a
return t},
lz:function(a){return v.types[H.a1(a)]},
lG:function(a,b){var u
if(b!=null){u=b.x
if(u!=null)return u}return!!J.T(a).$iaB},
h:function(a){var u
if(typeof a==="string")return a
if(typeof a==="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
u=J.aF(a)
if(typeof u!=="string")throw H.e(H.aV(a))
return u},
kT:function(a){var u,t,s
u=a.$reflectionInfo
if(u==null)return
u=J.eR(u)
t=u[0]
s=u[1]
return new H.fo(a,u,(t&2)===2,t>>2,s>>1,(s&1)===1,u[2])},
ce:function(a){var u=a.$identityHash
if(u==null){u=Math.random()*0x3fffffff|0
a.$identityHash=u}return u},
bG:function(a){return H.kK(a)+H.iG(H.bo(a),0,null)},
kK:function(a){var u,t,s,r,q,p,o,n,m
u=J.T(a)
t=u.constructor
if(typeof t=="function"){s=t.name
r=typeof s==="string"?s:null}else r=null
q=r==null
if(q||u===C.N||!!u.$ibl){p=C.B(a)
if(q)r=p
if(p==="Object"){o=a.constructor
if(typeof o=="function"){n=String(o).match(/^\s*function\s*([\w$]*)\s*\(/)
m=n==null?null:n[1]
if(typeof m==="string"&&/^\w+$/.test(m))r=m}}return r}r=r
return H.bT(r.length>1&&C.j.aG(r,0)===36?C.j.bc(r,1):r)},
jj:function(a){var u,t,s,r,q
u=a.length
if(u<=500)return String.fromCharCode.apply(null,a)
for(t="",s=0;s<u;s=r){r=s+500
q=r<u?r:u
t+=String.fromCharCode.apply(null,a.slice(s,q))}return t},
kS:function(a){var u,t,s,r
u=H.b([],[P.x])
for(t=a.length,s=0;s<a.length;a.length===t||(0,H.y)(a),++s){r=a[s]
if(typeof r!=="number"||Math.floor(r)!==r)throw H.e(H.aV(r))
if(r<=65535)C.a.h(u,r)
else if(r<=1114111){C.a.h(u,55296+(C.d.bi(r-65536,10)&1023))
C.a.h(u,56320+(r&1023))}else throw H.e(H.aV(r))}return H.jj(u)},
jk:function(a){var u,t,s
for(u=a.length,t=0;t<u;++t){s=a[t]
if(typeof s!=="number"||Math.floor(s)!==s)throw H.e(H.aV(s))
if(s<0)throw H.e(H.aV(s))
if(s>65535)return H.kS(a)}return H.jj(a)},
iw:function(a){var u
if(a<=65535)return String.fromCharCode(a)
if(a<=1114111){u=a-65536
return String.fromCharCode((55296|C.d.bi(u,10))>>>0,56320|u&1023)}throw H.e(P.au(a,0,1114111,null,null))},
bF:function(a){if(a.date===void 0)a.date=new Date(a.a)
return a.date},
kR:function(a){var u=H.bF(a).getFullYear()+0
return u},
kP:function(a){var u=H.bF(a).getMonth()+1
return u},
kL:function(a){var u=H.bF(a).getDate()+0
return u},
kM:function(a){var u=H.bF(a).getHours()+0
return u},
kO:function(a){var u=H.bF(a).getMinutes()+0
return u},
kQ:function(a){var u=H.bF(a).getSeconds()+0
return u},
kN:function(a){var u=H.bF(a).getMilliseconds()+0
return u},
B:function(a){throw H.e(H.aV(a))},
i:function(a,b){if(a==null)J.bq(a)
throw H.e(H.bP(a,b))},
bP:function(a,b){var u,t
if(typeof b!=="number"||Math.floor(b)!==b)return new P.az(!0,b,"index",null)
u=H.a1(J.bq(a))
if(!(b<0)){if(typeof u!=="number")return H.B(u)
t=b>=u}else t=!0
if(t)return P.bz(b,a,"index",null,u)
return P.dt(b,"index",null)},
lt:function(a,b,c){if(a>c)return new P.bH(0,c,!0,a,"start","Invalid value")
if(b!=null)if(b<a||b>c)return new P.bH(a,c,!0,b,"end","Invalid value")
return new P.az(!0,b,"end",null)},
aV:function(a){return new P.az(!0,a,null,null)},
lo:function(a){if(typeof a!=="number")throw H.e(H.aV(a))
return a},
e:function(a){var u
if(a==null)a=new P.dn()
u=new Error()
u.dartException=a
if("defineProperty" in Object){Object.defineProperty(u,"message",{get:H.k_})
u.name=""}else u.toString=H.k_
return u},
k_:function(){return J.aF(this.dartException)},
r:function(a){throw H.e(a)},
y:function(a){throw H.e(P.ba(a))},
aR:function(a){var u,t,s,r,q,p
a=a.replace(String({}),'$receiver$').replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
u=a.match(/\\\$[a-zA-Z]+\\\$/g)
if(u==null)u=H.b([],[P.m])
t=u.indexOf("\\$arguments\\$")
s=u.indexOf("\\$argumentsExpr\\$")
r=u.indexOf("\\$expr\\$")
q=u.indexOf("\\$method\\$")
p=u.indexOf("\\$receiver\\$")
return new H.fS(a.replace(new RegExp('\\\\\\$arguments\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$argumentsExpr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$expr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$method\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$receiver\\\\\\$','g'),'((?:x|[^x])*)'),t,s,r,q,p)},
fT:function(a){return function($expr$){var $argumentsExpr$='$arguments$'
try{$expr$.$method$($argumentsExpr$)}catch(u){return u.message}}(a)},
ju:function(a){return function($expr$){try{$expr$.$method$}catch(u){return u.message}}(a)},
jd:function(a,b){return new H.fi(a,b==null?null:b.method)},
iv:function(a,b){var u,t
u=b==null
t=u?null:b.method
return new H.eU(a,t,u?null:b.receiver)},
ar:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g
u=new H.ih(a)
if(a==null)return
if(typeof a!=="object")return a
if("dartException" in a)return u.$1(a.dartException)
else if(!("message" in a))return a
t=a.message
if("number" in a&&typeof a.number=="number"){s=a.number
r=s&65535
if((C.d.bi(s,16)&8191)===10)switch(r){case 438:return u.$1(H.iv(H.h(t)+" (Error "+r+")",null))
case 445:case 5007:return u.$1(H.jd(H.h(t)+" (Error "+r+")",null))}}if(a instanceof TypeError){q=$.k2()
p=$.k3()
o=$.k4()
n=$.k5()
m=$.k8()
l=$.k9()
k=$.k7()
$.k6()
j=$.kb()
i=$.ka()
h=q.af(t)
if(h!=null)return u.$1(H.iv(H.J(t),h))
else{h=p.af(t)
if(h!=null){h.method="call"
return u.$1(H.iv(H.J(t),h))}else{h=o.af(t)
if(h==null){h=n.af(t)
if(h==null){h=m.af(t)
if(h==null){h=l.af(t)
if(h==null){h=k.af(t)
if(h==null){h=n.af(t)
if(h==null){h=j.af(t)
if(h==null){h=i.af(t)
g=h!=null}else g=!0}else g=!0}else g=!0}else g=!0}else g=!0}else g=!0}else g=!0
if(g)return u.$1(H.jd(H.J(t),h))}}return u.$1(new H.h4(typeof t==="string"?t:""))}if(a instanceof RangeError){if(typeof t==="string"&&t.indexOf("call stack")!==-1)return new P.dA()
t=function(b){try{return String(b)}catch(f){}return null}(a)
return u.$1(new P.az(!1,null,null,typeof t==="string"?t.replace(/^RangeError:\s*/,""):t))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof t==="string"&&t==="too much recursion")return new P.dA()
return a},
bR:function(a){var u
if(a==null)return new H.e6(a)
u=a.$cachedTrace
if(u!=null)return u
return a.$cachedTrace=new H.e6(a)},
lv:function(a,b){var u,t,s,r
u=a.length
for(t=0;t<u;t=r){s=t+1
r=s+1
b.Y(0,a[t],a[s])}return b},
lF:function(a,b,c,d,e,f){H.d(a,"$ibd")
switch(H.a1(b)){case 0:return a.$0()
case 1:return a.$1(c)
case 2:return a.$2(c,d)
case 3:return a.$3(c,d,e)
case 4:return a.$4(c,d,e,f)}throw H.e(P.p("Unsupported number of arguments for wrapped closure"))},
bO:function(a,b){var u
H.a1(b)
if(a==null)return
u=a.$identity
if(!!u)return u
u=function(c,d,e){return function(f,g,h,i){return e(c,d,f,g,h,i)}}(a,b,H.lF)
a.$identity=u
return u},
ku:function(a,b,c,d,e,f,g){var u,t,s,r,q,p,o,n,m,l,k,j,i
u=b[0]
t=u.$callName
if(!!J.T(d).$ia){u.$reflectionInfo=d
s=H.kT(u).r}else s=d
r=e?Object.create(new H.fE().constructor.prototype):Object.create(new H.bX(null,null,null,null).constructor.prototype)
r.$initialize=r.constructor
if(e)q=function static_tear_off(){this.$initialize()}
else{p=$.aG
if(typeof p!=="number")return p.p()
$.aG=p+1
p=new Function("a,b,c,d"+p,"this.$initialize(a,b,c,d"+p+")")
q=p}r.constructor=q
q.prototype=r
if(!e){o=H.j1(a,u,f)
o.$reflectionInfo=d}else{r.$static_name=g
o=u}if(typeof s=="number")n=function(h,a0){return function(){return h(a0)}}(H.lz,s)
else if(typeof s=="function")if(e)n=s
else{m=f?H.j_:H.il
n=function(h,a0){return function(){return h.apply({$receiver:a0(this)},arguments)}}(s,m)}else throw H.e("Error in reflectionInfo.")
r.$S=n
r[t]=o
for(l=o,k=1;k<b.length;++k){j=b[k]
i=j.$callName
if(i!=null){j=e?j:H.j1(a,j,f)
r[i]=j}if(k===c){j.$reflectionInfo=d
l=j}}r.$C=l
r.$R=u.$R
r.$D=u.$D
return q},
kr:function(a,b,c,d){var u=H.il
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,u)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,u)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,u)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,u)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,u)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,u)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,u)}},
j1:function(a,b,c){var u,t,s,r,q,p,o
if(c)return H.kt(a,b)
u=b.$stubName
t=b.length
s=a[u]
r=b==null?s==null:b===s
q=!r||t>=27
if(q)return H.kr(t,!r,u,b)
if(t===0){r=$.aG
if(typeof r!=="number")return r.p()
$.aG=r+1
p="self"+r
r="return function(){var "+p+" = this."
q=$.bY
if(q==null){q=H.el("self")
$.bY=q}return new Function(r+H.h(q)+";return "+p+"."+H.h(u)+"();}")()}o="abcdefghijklmnopqrstuvwxyz".split("").splice(0,t).join(",")
r=$.aG
if(typeof r!=="number")return r.p()
$.aG=r+1
o+=r
r="return function("+o+"){return this."
q=$.bY
if(q==null){q=H.el("self")
$.bY=q}return new Function(r+H.h(q)+"."+H.h(u)+"("+o+");}")()},
ks:function(a,b,c,d){var u,t
u=H.il
t=H.j_
switch(b?-1:a){case 0:throw H.e(H.kW("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,u,t)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,u,t)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,u,t)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,u,t)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,u,t)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,u,t)
default:return function(e,f,g,h){return function(){h=[g(this)]
Array.prototype.push.apply(h,arguments)
return e.apply(f(this),h)}}(d,u,t)}},
kt:function(a,b){var u,t,s,r,q,p,o,n
u=$.bY
if(u==null){u=H.el("self")
$.bY=u}t=$.iZ
if(t==null){t=H.el("receiver")
$.iZ=t}s=b.$stubName
r=b.length
q=a[s]
p=b==null?q==null:b===q
o=!p||r>=28
if(o)return H.ks(r,!p,s,b)
if(r===1){u="return function(){return this."+H.h(u)+"."+H.h(s)+"(this."+H.h(t)+");"
t=$.aG
if(typeof t!=="number")return t.p()
$.aG=t+1
return new Function(u+t+"}")()}n="abcdefghijklmnopqrstuvwxyz".split("").splice(0,r-1).join(",")
u="return function("+n+"){return this."+H.h(u)+"."+H.h(s)+"(this."+H.h(t)+", "+n+");"
t=$.aG
if(typeof t!=="number")return t.p()
$.aG=t+1
return new Function(u+t+"}")()},
iJ:function(a,b,c,d,e,f,g){return H.ku(a,b,H.a1(c),d,!!e,!!f,g)},
il:function(a){return a.a},
j_:function(a){return a.c},
el:function(a){var u,t,s,r,q
u=new H.bX("self","target","receiver","name")
t=J.eR(Object.getOwnPropertyNames(u))
for(s=t.length,r=0;r<s;++r){q=t[r]
if(u[q]===a)return q}},
J:function(a){if(a==null)return a
if(typeof a==="string")return a
throw H.e(H.aD(a,"String"))},
mA:function(a){if(a==null)return a
if(typeof a==="number")return a
throw H.e(H.aD(a,"double"))},
lL:function(a){if(a==null)return a
if(typeof a==="number")return a
throw H.e(H.aD(a,"num"))},
iH:function(a){if(a==null)return a
if(typeof a==="boolean")return a
throw H.e(H.aD(a,"bool"))},
a1:function(a){if(a==null)return a
if(typeof a==="number"&&Math.floor(a)===a)return a
throw H.e(H.aD(a,"int"))},
jY:function(a,b){throw H.e(H.aD(a,H.bT(H.J(b).substring(2))))},
lN:function(a,b){throw H.e(H.kq(a,H.bT(H.J(b).substring(2))))},
d:function(a,b){if(a==null)return a
if((typeof a==="object"||typeof a==="function")&&J.T(a)[b])return a
H.jY(a,b)},
c:function(a,b){var u
if(a!=null)u=(typeof a==="object"||typeof a==="function")&&J.T(a)[b]
else u=!0
if(u)return a
H.lN(a,b)},
ia:function(a){if(a==null)return a
if(!!J.T(a).$ia)return a
throw H.e(H.aD(a,"List<dynamic>"))},
lH:function(a,b){var u
if(a==null)return a
u=J.T(a)
if(!!u.$ia)return a
if(u[b])return a
H.jY(a,b)},
jS:function(a){var u
if("$S" in a){u=a.$S
if(typeof u=="number")return v.types[H.a1(u)]
else return a.$S()}return},
ee:function(a,b){var u
if(a==null)return!1
if(typeof a=="function")return!0
u=H.jS(J.T(a))
if(u==null)return!1
return H.jJ(u,null,b,null)},
k:function(a,b){var u,t
if(a==null)return a
if($.iD)return a
$.iD=!0
try{if(H.ee(a,b))return a
u=H.id(b)
t=H.aD(a,u)
throw H.e(t)}finally{$.iD=!1}},
iK:function(a,b){if(a!=null&&!H.iI(a,b))H.r(H.aD(a,H.id(b)))
return a},
aD:function(a,b){return new H.fU("TypeError: "+P.eA(a)+": type '"+H.jN(a)+"' is not a subtype of type '"+b+"'")},
kq:function(a,b){return new H.em("CastError: "+P.eA(a)+": type '"+H.jN(a)+"' is not a subtype of type '"+b+"'")},
jN:function(a){var u,t
u=J.T(a)
if(!!u.$ic_){t=H.jS(u)
if(t!=null)return H.id(t)
return"Closure"}return H.bG(a)},
lS:function(a){throw H.e(new P.er(H.J(a)))},
kW:function(a){return new H.ft(a)},
jT:function(a){return v.getIsolateTag(a)},
b:function(a,b){a.$ti=b
return a},
bo:function(a){if(a==null)return
return a.$ti},
mB:function(a,b,c){return H.bS(a["$a"+H.h(c)],H.bo(b))},
eg:function(a,b,c,d){var u
H.J(c)
H.a1(d)
u=H.bS(a["$a"+H.h(c)],H.bo(b))
return u==null?null:u[d]},
a4:function(a,b,c){var u
H.J(b)
H.a1(c)
u=H.bS(a["$a"+H.h(b)],H.bo(a))
return u==null?null:u[c]},
u:function(a,b){var u
H.a1(b)
u=H.bo(a)
return u==null?null:u[b]},
id:function(a){return H.bn(a,null)},
bn:function(a,b){var u,t
H.f(b,"$ia",[P.m],"$aa")
if(a==null)return"dynamic"
if(a===-1)return"void"
if(typeof a==="object"&&a!==null&&a.constructor===Array)return H.bT(a[0].name)+H.iG(a,1,b)
if(typeof a=="function")return H.bT(a.name)
if(a===-2)return"dynamic"
if(typeof a==="number"){H.a1(a)
if(b==null||a<0||a>=b.length)return"unexpected-generic-index:"+a
u=b.length
t=u-a-1
if(t<0||t>=u)return H.i(b,t)
return H.h(b[t])}if('func' in a)return H.le(a,b)
if('futureOr' in a)return"FutureOr<"+H.bn("type" in a?a.type:null,b)+">"
return"unknown-reified-type"},
le:function(a,b){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c
u=[P.m]
H.f(b,"$ia",u,"$aa")
if("bounds" in a){t=a.bounds
if(b==null){b=H.b([],u)
s=null}else s=b.length
r=b.length
for(q=t.length,p=q;p>0;--p)C.a.h(b,"T"+(r+p))
for(o="<",n="",p=0;p<q;++p,n=", "){o+=n
u=b.length
m=u-p-1
if(m<0)return H.i(b,m)
o=C.j.p(o,b[m])
l=t[p]
if(l!=null&&l!==P.H)o+=" extends "+H.bn(l,b)}o+=">"}else{o=""
s=null}k=!!a.v?"void":H.bn(a.ret,b)
if("args" in a){j=a.args
for(u=j.length,i="",h="",g=0;g<u;++g,h=", "){f=j[g]
i=i+h+H.bn(f,b)}}else{i=""
h=""}if("opt" in a){e=a.opt
i+=h+"["
for(u=e.length,h="",g=0;g<u;++g,h=", "){f=e[g]
i=i+h+H.bn(f,b)}i+="]"}if("named" in a){d=a.named
i+=h+"{"
for(u=H.lu(d),m=u.length,h="",g=0;g<m;++g,h=", "){c=H.J(u[g])
i=i+h+H.bn(d[c],b)+(" "+H.h(c))}i+="}"}if(s!=null)b.length=s
return o+"("+i+") => "+k},
iG:function(a,b,c){var u,t,s,r,q,p
H.f(c,"$ia",[P.m],"$aa")
if(a==null)return""
u=new P.b1("")
for(t=b,s="",r=!0,q="";t<a.length;++t,s=", "){u.a=q+s
p=a[t]
if(p!=null)r=!1
q=u.a+=H.bn(p,c)}return"<"+u.i(0)+">"},
bS:function(a,b){if(a==null)return b
a=a.apply(null,b)
if(a==null)return
if(typeof a==="object"&&a!==null&&a.constructor===Array)return a
if(typeof a=="function")return a.apply(null,b)
return b},
cI:function(a,b,c,d){var u,t
H.J(b)
H.ia(c)
H.J(d)
if(a==null)return!1
u=H.bo(a)
t=J.T(a)
if(t[b]==null)return!1
return H.jQ(H.bS(t[d],u),null,c,null)},
f:function(a,b,c,d){H.J(b)
H.ia(c)
H.J(d)
if(a==null)return a
if(H.cI(a,b,c,d))return a
throw H.e(H.aD(a,function(e,f){return e.replace(/[^<,> ]+/g,function(g){return f[g]||g})}(H.bT(b.substring(2))+H.iG(c,0,null),v.mangledGlobalNames)))},
jQ:function(a,b,c,d){var u,t
if(c==null)return!0
if(a==null){u=c.length
for(t=0;t<u;++t)if(!H.ay(null,null,c[t],d))return!1
return!0}u=a.length
for(t=0;t<u;++t)if(!H.ay(a[t],b,c[t],d))return!1
return!0},
my:function(a,b,c){return a.apply(b,H.bS(J.T(b)["$a"+H.h(c)],H.bo(b)))},
jV:function(a){var u
if(typeof a==="number")return!1
if('futureOr' in a){u="type" in a?a.type:null
return a==null||a.name==="H"||a.name==="E"||a===-1||a===-2||H.jV(u)}return!1},
iI:function(a,b){var u,t
if(a==null)return b==null||b.name==="H"||b.name==="E"||b===-1||b===-2||H.jV(b)
if(b==null||b===-1||b.name==="H"||b===-2)return!0
if(typeof b=="object"){if('futureOr' in b)if(H.iI(a,"type" in b?b.type:null))return!0
if('func' in b)return H.ee(a,b)}u=J.T(a).constructor
t=H.bo(a)
if(t!=null){t=t.slice()
t.splice(0,0,u)
u=t}return H.ay(u,null,b,null)},
A:function(a,b){if(a!=null&&!H.iI(a,b))throw H.e(H.aD(a,H.id(b)))
return a},
ay:function(a,b,c,d){var u,t,s,r,q,p,o,n,m
if(a===c)return!0
if(c==null||c===-1||c.name==="H"||c===-2)return!0
if(a===-2)return!0
if(a==null||a===-1||a.name==="H"||a===-2){if(typeof c==="number")return!1
if('futureOr' in c)return H.ay(a,b,"type" in c?c.type:null,d)
return!1}if(typeof a==="number")return!1
if(typeof c==="number")return!1
if(a.name==="E")return!0
if('func' in c)return H.jJ(a,b,c,d)
if('func' in a)return c.name==="bd"
u=typeof a==="object"&&a!==null&&a.constructor===Array
t=u?a[0]:a
if('futureOr' in c){s="type" in c?c.type:null
if('futureOr' in a)return H.ay("type" in a?a.type:null,b,s,d)
else if(H.ay(a,b,s,d))return!0
else{if(!('$i'+"c5" in t.prototype))return!1
r=t.prototype["$a"+"c5"]
q=H.bS(r,u?a.slice(1):null)
return H.ay(typeof q==="object"&&q!==null&&q.constructor===Array?q[0]:null,b,s,d)}}p=typeof c==="object"&&c!==null&&c.constructor===Array
o=p?c[0]:c
if(o!==t){n=o.name
if(!('$i'+n in t.prototype))return!1
m=t.prototype["$a"+n]}else m=null
if(!p)return!0
u=u?a.slice(1):null
p=c.slice(1)
return H.jQ(H.bS(m,u),b,p,d)},
jJ:function(a,b,c,d){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g
if(!('func' in a))return!1
if("bounds" in a){if(!("bounds" in c))return!1
u=a.bounds
t=c.bounds
if(u.length!==t.length)return!1}else if("bounds" in c)return!1
if(!H.ay(a.ret,b,c.ret,d))return!1
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
for(k=0;k<o;++k)if(!H.ay(r[k],d,s[k],b))return!1
for(j=k,i=0;j<n;++i,++j)if(!H.ay(r[j],d,q[i],b))return!1
for(j=0;j<l;++i,++j)if(!H.ay(p[j],d,q[i],b))return!1
h=a.named
g=c.named
if(g==null)return!0
if(h==null)return!1
return H.lK(h,b,g,d)},
lK:function(a,b,c,d){var u,t,s,r
u=Object.getOwnPropertyNames(c)
for(t=u.length,s=0;s<t;++s){r=u[s]
if(!Object.hasOwnProperty.call(a,r))return!1
if(!H.ay(c[r],d,a[r],b))return!1}return!0},
mz:function(a,b,c){Object.defineProperty(a,H.J(b),{value:c,enumerable:false,writable:true,configurable:true})},
lI:function(a){var u,t,s,r,q,p
u=H.J($.jU.$1(a))
t=$.i4[u]
if(t!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:t,enumerable:false,writable:true,configurable:true})
return t.i}s=$.i9[u]
if(s!=null)return s
r=v.interceptorsByTag[u]
if(r==null){u=H.J($.jP.$2(a,u))
if(u!=null){t=$.i4[u]
if(t!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:t,enumerable:false,writable:true,configurable:true})
return t.i}s=$.i9[u]
if(s!=null)return s
r=v.interceptorsByTag[u]}}if(r==null)return
s=r.prototype
q=u[0]
if(q==="!"){t=H.ic(s)
$.i4[u]=t
Object.defineProperty(a,v.dispatchPropertyName,{value:t,enumerable:false,writable:true,configurable:true})
return t.i}if(q==="~"){$.i9[u]=s
return s}if(q==="-"){p=H.ic(s)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}if(q==="+")return H.jX(a,s)
if(q==="*")throw H.e(P.jv(u))
if(v.leafTags[u]===true){p=H.ic(s)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}else return H.jX(a,s)},
jX:function(a,b){var u=Object.getPrototypeOf(a)
Object.defineProperty(u,v.dispatchPropertyName,{value:J.iO(b,u,null,null),enumerable:false,writable:true,configurable:true})
return b},
ic:function(a){return J.iO(a,!1,null,!!a.$iaB)},
lJ:function(a,b,c){var u=b.prototype
if(v.leafTags[a]===true)return H.ic(u)
else return J.iO(u,c,null,null)},
lD:function(){if(!0===$.iN)return
$.iN=!0
H.lE()},
lE:function(){var u,t,s,r,q,p,o,n
$.i4=Object.create(null)
$.i9=Object.create(null)
H.lC()
u=v.interceptorsByTag
t=Object.getOwnPropertyNames(u)
if(typeof window!="undefined"){window
s=function(){}
for(r=0;r<t.length;++r){q=t[r]
p=$.jZ.$1(q)
if(p!=null){o=H.lJ(q,u[q],p)
if(o!=null){Object.defineProperty(p,v.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
s.prototype=p}}}}for(r=0;r<t.length;++r){q=t[r]
if(/^[A-Za-z_]/.test(q)){n=u[q]
u["!"+q]=n
u["~"+q]=n
u["-"+q]=n
u["+"+q]=n
u["*"+q]=n}}},
lC:function(){var u,t,s,r,q,p,o
u=C.S()
u=H.bN(C.P,H.bN(C.U,H.bN(C.A,H.bN(C.A,H.bN(C.T,H.bN(C.Q,H.bN(C.R(C.B),u)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){t=dartNativeDispatchHooksTransformer
if(typeof t=="function")t=[t]
if(t.constructor==Array)for(s=0;s<t.length;++s){r=t[s]
if(typeof r=="function")u=r(u)||u}}q=u.getTag
p=u.getUnknownTag
o=u.prototypeForTag
$.jU=new H.i6(q)
$.jP=new H.i7(p)
$.jZ=new H.i8(o)},
bN:function(a,b){return a(b)||b},
kE:function(a,b,c,d){var u,t,s,r
u=b?"m":""
t=c?"":"i"
s=d?"g":""
r=function(e,f){try{return new RegExp(e,f)}catch(q){return q}}(a,u+t+s)
if(r instanceof RegExp)return r
throw H.e(new P.eI("Illegal RegExp pattern ("+String(r)+")",a,null))},
lQ:function(a,b,c){var u=a.indexOf(b,c)
return u>=0},
iR:function(a,b,c){var u,t,s
if(b==="")if(a==="")return c
else{u=a.length
for(t=c,s=0;s<u;++s)t=t+a[s]+c
return t.charCodeAt(0)==0?t:t}else return a.replace(new RegExp(b.replace(/[[\]{}()*+?.\\^$|]/g,"\\$&"),'g'),c.replace(/\$/g,"$$$$"))},
fo:function fo(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.x=null},
fS:function fS(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
fi:function fi(a,b){this.a=a
this.b=b},
eU:function eU(a,b,c){this.a=a
this.b=b
this.c=c},
h4:function h4(a){this.a=a},
ih:function ih(a){this.a=a},
e6:function e6(a){this.a=a
this.b=null},
c_:function c_(){},
fK:function fK(){},
fE:function fE(){},
bX:function bX(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
fU:function fU(a){this.a=a},
em:function em(a){this.a=a},
ft:function ft(a){this.a=a},
aJ:function aJ(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
eX:function eX(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
d8:function d8(a,b){this.a=a
this.$ti=b},
eY:function eY(a,b,c){var _=this
_.a=a
_.b=b
_.d=_.c=null
_.$ti=c},
i6:function i6(a){this.a=a},
i7:function i7(a){this.a=a},
i8:function i8(a){this.a=a},
eT:function eT(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
cF:function(a){return a},
cE:function(a,b,c){if(a>>>0!==a||a>=c)throw H.e(H.bP(b,a))},
ld:function(a,b,c){var u
if(!(a>>>0!==a))u=b>>>0!==b||a>b||b>c
else u=!0
if(u)throw H.e(H.lt(a,b,c))
return b},
dk:function dk(){},
dh:function dh(){},
di:function di(){},
dj:function dj(){},
fb:function fb(){},
fc:function fc(){},
fd:function fd(){},
dl:function dl(){},
fe:function fe(){},
cA:function cA(){},
cB:function cB(){},
cC:function cC(){},
cD:function cD(){},
lu:function(a){return J.j7(a?Object.keys(a):[],null)},
lM:function(a){if(typeof dartPrint=="function"){dartPrint(a)
return}if(typeof console=="object"&&typeof console.log!="undefined"){console.log(a)
return}if(typeof window=="object")return
if(typeof print=="function"){print(a)
return}throw"Unable to print message: "+String(a)}},J={
iO:function(a,b,c,d){return{i:a,p:b,e:c,x:d}},
ef:function(a){var u,t,s,r,q
u=a[v.dispatchPropertyName]
if(u==null)if($.iN==null){H.lD()
u=a[v.dispatchPropertyName]}if(u!=null){t=u.p
if(!1===t)return u.i
if(!0===t)return a
s=Object.getPrototypeOf(a)
if(t===s)return u.i
if(u.e===s)throw H.e(P.jv("Return interceptor for "+H.h(t(a,u))))}r=a.constructor
q=r==null?null:r[$.iS()]
if(q!=null)return q
q=H.lI(a)
if(q!=null)return q
if(typeof a=="function")return C.V
t=Object.getPrototypeOf(a)
if(t==null)return C.D
if(t===Object.prototype)return C.D
if(typeof r=="function"){Object.defineProperty(r,$.iS(),{value:C.w,enumerable:false,writable:true,configurable:true})
return C.w}return C.w},
kD:function(a,b){if(typeof a!=="number"||Math.floor(a)!==a)throw H.e(P.ik(a,"length","is not an integer"))
if(a<0||a>4294967295)throw H.e(P.au(a,0,4294967295,"length",null))
return J.j7(new Array(a),b)},
j7:function(a,b){return J.eR(H.b(a,[b]))},
eR:function(a){H.ia(a)
a.fixed$length=Array
return a},
T:function(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.d3.prototype
return J.d2.prototype}if(typeof a=="string")return J.aY.prototype
if(a==null)return J.d4.prototype
if(typeof a=="boolean")return J.eS.prototype
if(a.constructor==Array)return J.aA.prototype
if(typeof a!="object"){if(typeof a=="function")return J.aZ.prototype
return a}if(a instanceof P.H)return a
return J.ef(a)},
lw:function(a){if(typeof a=="number")return J.bh.prototype
if(typeof a=="string")return J.aY.prototype
if(a==null)return a
if(a.constructor==Array)return J.aA.prototype
if(typeof a!="object"){if(typeof a=="function")return J.aZ.prototype
return a}if(a instanceof P.H)return a
return J.ef(a)},
i5:function(a){if(typeof a=="string")return J.aY.prototype
if(a==null)return a
if(a.constructor==Array)return J.aA.prototype
if(typeof a!="object"){if(typeof a=="function")return J.aZ.prototype
return a}if(a instanceof P.H)return a
return J.ef(a)},
iL:function(a){if(a==null)return a
if(a.constructor==Array)return J.aA.prototype
if(typeof a!="object"){if(typeof a=="function")return J.aZ.prototype
return a}if(a instanceof P.H)return a
return J.ef(a)},
lx:function(a){if(typeof a=="number")return J.bh.prototype
if(a==null)return a
if(!(a instanceof P.H))return J.bl.prototype
return a},
ly:function(a){if(typeof a=="number")return J.bh.prototype
if(typeof a=="string")return J.aY.prototype
if(a==null)return a
if(!(a instanceof P.H))return J.bl.prototype
return a},
iM:function(a){if(typeof a=="string")return J.aY.prototype
if(a==null)return a
if(!(a instanceof P.H))return J.bl.prototype
return a},
ak:function(a){if(a==null)return a
if(typeof a!="object"){if(typeof a=="function")return J.aZ.prototype
return a}if(a instanceof P.H)return a
return J.ef(a)},
kh:function(a,b){if(typeof a=="number"&&typeof b=="number")return a+b
return J.lw(a).p(a,b)},
U:function(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.T(a).A(a,b)},
iV:function(a,b){if(typeof a=="number"&&typeof b=="number")return a*b
return J.ly(a).v(a,b)},
ki:function(a,b){if(typeof a=="number"&&typeof b=="number")return a-b
return J.lx(a).t(a,b)},
kj:function(a,b){if(typeof b==="number")if(a.constructor==Array||typeof a=="string"||H.lG(a,a[v.dispatchPropertyName]))if(b>>>0===b&&b<a.length)return a[b]
return J.i5(a).k(a,b)},
kk:function(a,b,c,d){return J.ak(a).fo(a,b,c,d)},
eh:function(a,b){return J.ak(a).hW(a,b)},
iW:function(a,b){return J.ak(a).C(a,b)},
ii:function(a,b){return J.iL(a).a6(a,b)},
kl:function(a){return J.ak(a).gj4(a)},
bp:function(a){return J.T(a).gI(a)},
bV:function(a){return J.iL(a).gO(a)},
bq:function(a){return J.i5(a).gm(a)},
km:function(a){return J.ak(a).gke(a)},
ij:function(a,b){return J.ak(a).aS(a,b)},
iX:function(a){return J.iL(a).k5(a)},
kn:function(a,b,c){return J.iM(a).bd(a,b,c)},
ko:function(a){return J.iM(a).kl(a)},
aF:function(a){return J.T(a).i(a)},
a2:function a2(){},
eS:function eS(){},
d4:function d4(){},
d5:function d5(){},
fk:function fk(){},
bl:function bl(){},
aZ:function aZ(){},
aA:function aA(a){this.$ti=a},
it:function it(a){this.$ti=a},
ae:function ae(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=null
_.$ti=d},
bh:function bh(){},
d3:function d3(){},
d2:function d2(){},
aY:function aY(){}},P={
l2:function(){var u,t,s
u={}
if(self.scheduleImmediate!=null)return P.ll()
if(self.MutationObserver!=null&&self.document!=null){t=self.document.createElement("div")
s=self.document.createElement("span")
u.a=null
new self.MutationObserver(H.bO(new P.ho(u),1)).observe(t,{childList:true})
return new P.hn(u,t,s)}else if(self.setImmediate!=null)return P.lm()
return P.ln()},
l3:function(a){self.scheduleImmediate(H.bO(new P.hp(H.k(a,{func:1,ret:-1})),0))},
l4:function(a){self.setImmediate(H.bO(new P.hq(H.k(a,{func:1,ret:-1})),0))},
l5:function(a){P.iz(C.q,H.k(a,{func:1,ret:-1}))},
iz:function(a,b){var u
H.k(b,{func:1,ret:-1})
u=C.d.a1(a.a,1000)
return P.lb(u<0?0:u,b)},
jt:function(a,b){var u
H.k(b,{func:1,ret:-1,args:[P.aP]})
u=C.d.a1(a.a,1000)
return P.lc(u<0?0:u,b)},
lb:function(a,b){var u=new P.e7(!0)
u.fi(a,b)
return u},
lc:function(a,b){var u=new P.e7(!1)
u.fj(a,b)
return u},
l6:function(a,b){var u,t,s
b.a=1
try{a.ev(new P.hy(b),new P.hz(b),null)}catch(s){u=H.ar(s)
t=H.bR(s)
P.lO(new P.hA(b,u,t))}},
jE:function(a,b){var u,t
for(;u=a.a,u===2;)a=H.d(a.c,"$iax")
if(u>=4){t=b.ci()
b.a=a.a
b.c=a.c
P.cz(b,t)}else{t=H.d(b.c,"$iaU")
b.a=2
b.c=a
a.dv(t)}},
cz:function(a,b){var u,t,s,r,q,p,o,n,m,l,k,j,i,h
u={}
u.a=a
for(t=a;!0;){s={}
r=t.a===8
if(b==null){if(r){q=H.d(t.c,"$ia8")
t=t.b
p=q.a
o=q.b
t.toString
P.i_(null,null,t,p,o)}return}for(;n=b.a,n!=null;b=n){b.a=null
P.cz(u.a,b)}t=u.a
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
if(k){H.d(m,"$ia8")
t=t.b
p=m.a
o=m.b
t.toString
P.i_(null,null,t,p,o)
return}j=$.S
if(j!=l)$.S=l
else j=null
t=b.c
if(t===8)new P.hE(u,s,b,r).$0()
else if(p){if((t&1)!==0)new P.hD(s,b,m).$0()}else if((t&2)!==0)new P.hC(u,s,b).$0()
if(j!=null)$.S=j
t=s.b
if(!!J.T(t).$ic5){if(t.a>=4){i=H.d(o.c,"$iaU")
o.c=null
b=o.bh(i)
o.a=t.a
o.c=t.c
u.a=t
continue}else P.jE(t,o)
return}}h=b.b
i=H.d(h.c,"$iaU")
h.c=null
b=h.bh(i)
t=s.a
p=s.b
if(!t){H.A(p,H.u(h,0))
h.a=4
h.c=p}else{H.d(p,"$ia8")
h.a=8
h.c=p}u.a=h
t=h}},
lh:function(a,b){if(H.ee(a,{func:1,args:[P.H,P.ai]}))return H.k(a,{func:1,ret:null,args:[P.H,P.ai]})
if(H.ee(a,{func:1,args:[P.H]}))return H.k(a,{func:1,ret:null,args:[P.H]})
throw H.e(P.ik(a,"onError","Error handler must accept one Object or one Object and a StackTrace as arguments, and return a a valid result"))},
lg:function(){var u,t
for(;u=$.bM,u!=null;){$.cH=null
t=u.b
$.bM=t
if(t==null)$.cG=null
u.a.$0()}},
lk:function(){$.iE=!0
try{P.lg()}finally{$.cH=null
$.iE=!1
if($.bM!=null)$.iT().$1(P.jR())}},
jM:function(a){var u=new P.dV(H.k(a,{func:1,ret:-1}))
if($.bM==null){$.cG=u
$.bM=u
if(!$.iE)$.iT().$1(P.jR())}else{$.cG.b=u
$.cG=u}},
lj:function(a){var u,t,s
H.k(a,{func:1,ret:-1})
u=$.bM
if(u==null){P.jM(a)
$.cH=$.cG
return}t=new P.dV(a)
s=$.cH
if(s==null){t.b=u
$.cH=t
$.bM=t}else{t.b=s.b
s.b=t
$.cH=t
if(t.b==null)$.cG=t}},
lO:function(a){var u,t
u={func:1,ret:-1}
H.k(a,u)
t=$.S
if(C.l===t){P.i1(null,null,C.l,a)
return}t.toString
P.i1(null,null,t,H.k(t.cp(a),u))},
js:function(a,b){var u,t
u={func:1,ret:-1}
H.k(b,u)
t=$.S
if(t===C.l){t.toString
return P.iz(a,b)}return P.iz(a,H.k(t.cp(b),u))},
l1:function(a,b){var u,t,s
u={func:1,ret:-1,args:[P.aP]}
H.k(b,u)
t=$.S
if(t===C.l){t.toString
return P.jt(a,b)}s=t.dK(b,P.aP)
$.S.toString
return P.jt(a,H.k(s,u))},
i_:function(a,b,c,d,e){var u={}
u.a=d
P.lj(new P.i0(u,e))},
jK:function(a,b,c,d,e){var u,t
H.k(d,{func:1,ret:e})
t=$.S
if(t===c)return d.$0()
$.S=c
u=t
try{t=d.$0()
return t}finally{$.S=u}},
jL:function(a,b,c,d,e,f,g){var u,t
H.k(d,{func:1,ret:f,args:[g]})
H.A(e,g)
t=$.S
if(t===c)return d.$1(e)
$.S=c
u=t
try{t=d.$1(e)
return t}finally{$.S=u}},
li:function(a,b,c,d,e,f,g,h,i){var u,t
H.k(d,{func:1,ret:g,args:[h,i]})
H.A(e,h)
H.A(f,i)
t=$.S
if(t===c)return d.$2(e,f)
$.S=c
u=t
try{t=d.$2(e,f)
return t}finally{$.S=u}},
i1:function(a,b,c,d){var u
H.k(d,{func:1,ret:-1})
u=C.l!==c
if(u)d=!(!u||!1)?c.cp(d):c.j5(d,-1)
P.jM(d)},
ho:function ho(a){this.a=a},
hn:function hn(a,b,c){this.a=a
this.b=b
this.c=c},
hp:function hp(a){this.a=a},
hq:function hq(a){this.a=a},
e7:function e7(a){this.a=a
this.b=null
this.c=0},
hW:function hW(a,b){this.a=a
this.b=b},
hV:function hV(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
aU:function aU(a,b,c,d,e){var _=this
_.a=null
_.b=a
_.c=b
_.d=c
_.e=d
_.$ti=e},
ax:function ax(a,b,c){var _=this
_.a=a
_.b=b
_.c=null
_.$ti=c},
hx:function hx(a,b){this.a=a
this.b=b},
hB:function hB(a,b){this.a=a
this.b=b},
hy:function hy(a){this.a=a},
hz:function hz(a){this.a=a},
hA:function hA(a,b,c){this.a=a
this.b=b
this.c=c},
hE:function hE(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
hF:function hF(a){this.a=a},
hD:function hD(a,b,c){this.a=a
this.b=b
this.c=c},
hC:function hC(a,b,c){this.a=a
this.b=b
this.c=c},
dV:function dV(a){this.a=a
this.b=null},
fF:function fF(){},
fH:function fH(a,b){this.a=a
this.b=b},
fI:function fI(a,b){this.a=a
this.b=b},
ci:function ci(){},
fG:function fG(){},
aP:function aP(){},
a8:function a8(a,b){this.a=a
this.b=b},
hZ:function hZ(){},
i0:function i0(a,b){this.a=a
this.b=b},
hK:function hK(){},
hM:function hM(a,b,c){this.a=a
this.b=b
this.c=c},
hL:function hL(a,b){this.a=a
this.b=b},
hN:function hN(a,b,c){this.a=a
this.b=b
this.c=c},
kG:function(a,b,c){H.ia(a)
return H.f(H.lv(a,new H.aJ([b,c])),"$ij8",[b,c],"$aj8")},
kF:function(a,b){return new H.aJ([a,b])},
d9:function(a,b,c,d){return new P.hI([d])},
iC:function(){var u=Object.create(null)
u["<non-identifier-key>"]=u
delete u["<non-identifier-key>"]
return u},
la:function(a,b,c){var u=new P.e0(a,b,[c])
u.c=a.e
return u},
kA:function(a,b,c){var u,t
if(P.iF(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}u=H.b([],[P.m])
t=$.cL()
C.a.h(t,a)
try{P.lf(a,u)}finally{if(0>=t.length)return H.i(t,-1)
t.pop()}t=P.jq(b,H.lH(u,"$ij"),", ")+c
return t.charCodeAt(0)==0?t:t},
is:function(a,b,c){var u,t,s
if(P.iF(a))return b+"..."+c
u=new P.b1(b)
t=$.cL()
C.a.h(t,a)
try{s=u
s.a=P.jq(s.a,a,", ")}finally{if(0>=t.length)return H.i(t,-1)
t.pop()}u.a+=c
t=u.a
return t.charCodeAt(0)==0?t:t},
iF:function(a){var u,t
for(u=0;t=$.cL(),u<t.length;++u)if(a===t[u])return!0
return!1},
lf:function(a,b){var u,t,s,r,q,p,o,n,m,l
H.f(b,"$ia",[P.m],"$aa")
u=a.gO(a)
t=0
s=0
while(!0){if(!(t<80||s<3))break
if(!u.B())return
r=H.h(u.gH())
C.a.h(b,r)
t+=r.length+2;++s}if(!u.B()){if(s<=5)return
if(0>=b.length)return H.i(b,-1)
q=b.pop()
if(0>=b.length)return H.i(b,-1)
p=b.pop()}else{o=u.gH();++s
if(!u.B()){if(s<=4){C.a.h(b,H.h(o))
return}q=H.h(o)
if(0>=b.length)return H.i(b,-1)
p=b.pop()
t+=q.length+2}else{n=u.gH();++s
for(;u.B();o=n,n=m){m=u.gH();++s
if(s>100){while(!0){if(!(t>75&&s>3))break
if(0>=b.length)return H.i(b,-1)
t-=b.pop().length+2;--s}C.a.h(b,"...")
return}}p=H.h(o)
q=H.h(n)
t+=q.length+p.length+4}}if(s>b.length+2){t+=5
l="..."}else l=null
while(!0){if(!(t>80&&b.length>3))break
if(0>=b.length)return H.i(b,-1)
t-=b.pop().length+2
if(l==null){t+=5
l="..."}}if(l!=null)C.a.h(b,l)
C.a.h(b,p)
C.a.h(b,q)},
j9:function(a,b){var u,t,s
u=P.d9(null,null,null,b)
for(t=a.length,s=0;s<a.length;a.length===t||(0,H.y)(a),++s)u.h(0,H.A(a[s],b))
return u},
ja:function(a){var u,t
u={}
if(P.iF(a))return"{...}"
t=new P.b1("")
try{C.a.h($.cL(),a)
t.a+="{"
u.a=!0
a.a2(0,new P.f1(u,t))
t.a+="}"}finally{u=$.cL()
if(0>=u.length)return H.i(u,-1)
u.pop()}u=t.a
return u.charCodeAt(0)==0?u:u},
hI:function hI(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
bL:function bL(a){this.a=a
this.c=this.b=null},
e0:function e0(a,b,c){var _=this
_.a=a
_.b=b
_.d=_.c=null
_.$ti=c},
eZ:function eZ(){},
P:function P(){},
f0:function f0(){},
f1:function f1(a,b){this.a=a
this.b=b},
bC:function bC(){},
hP:function hP(){},
e1:function e1(){},
c0:function c0(){},
c1:function c1(){},
ey:function ey(){},
eN:function eN(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
eM:function eM(a){this.a=a},
h6:function h6(a){this.a=a},
h7:function h7(){},
hX:function hX(a){this.b=this.a=0
this.c=a},
kz:function(a){if(a instanceof H.c_)return a.i(0)
return"Instance of '"+H.bG(a)+"'"},
kH:function(a,b,c,d){var u,t
H.A(b,d)
u=J.kD(a,d)
if(a!==0&&!0)for(t=0;t<u.length;++t)C.a.Y(u,t,b)
return H.f(u,"$ia",[d],"$aa")},
kI:function(a,b,c){var u,t,s
u=[c]
t=H.b([],u)
for(s=a.gO(a);s.B();)C.a.h(t,H.A(s.gH(),c))
if(b)return t
return H.f(J.eR(t),"$ia",u,"$aa")},
iy:function(a,b,c){var u,t
u=P.x
H.f(a,"$ij",[u],"$aj")
if(a.constructor===Array){H.f(a,"$iaA",[u],"$aaA")
t=a.length
c=P.ix(b,c,t,null,null,null)
return H.jk(b>0||c<t?C.a.eU(a,b,c):a)}return P.l_(a,b,c)},
l_:function(a,b,c){var u,t,s
H.f(a,"$ij",[P.x],"$aj")
u=J.bV(a)
for(t=0;t<b;++t)if(!u.B())throw H.e(P.au(b,0,t,null,null))
s=[]
for(;u.B();)s.push(u.gH())
return H.jk(s)},
kU:function(a,b,c){return new H.eT(a,H.kE(a,!1,!0,!1))},
jq:function(a,b,c){var u=J.bV(b)
if(!u.B())return a
if(c.length===0){do a+=H.h(u.gH())
while(u.B())}else{a+=H.h(u.gH())
for(;u.B();)a=a+c+H.h(u.gH())}return a},
jI:function(a,b,c,d){var u,t,s,r,q,p
H.f(a,"$ia",[P.x],"$aa")
if(c===C.x){u=$.kg().b
u=u.test(b)}else u=!1
if(u)return b
t=C.I.je(H.A(b,H.a4(c,"c0",0)))
for(u=t.length,s=0,r="";s<u;++s){q=t[s]
if(q<128){p=q>>>4
if(p>=8)return H.i(a,p)
p=(a[p]&1<<(q&15))!==0}else p=!1
if(p)r+=H.iw(q)
else r=r+"%"+"0123456789ABCDEF"[q>>>4&15]+"0123456789ABCDEF"[q&15]}return r.charCodeAt(0)==0?r:r},
kv:function(a){var u,t
u=Math.abs(a)
t=a<0?"-":""
if(u>=1000)return""+a
if(u>=100)return t+"0"+u
if(u>=10)return t+"00"+u
return t+"000"+u},
kw:function(a){if(a>=100)return""+a
if(a>=10)return"0"+a
return"00"+a},
cU:function(a){if(a>=10)return""+a
return"0"+a},
j3:function(a,b,c,d,e,f){return new P.aH(864e8*a+36e8*b+6e7*e+1e6*f+1000*d+c)},
eA:function(a){if(typeof a==="number"||typeof a==="boolean"||null==a)return J.aF(a)
if(typeof a==="string")return JSON.stringify(a)
return P.kz(a)},
kp:function(a){return new P.az(!1,null,null,a)},
ik:function(a,b,c){return new P.az(!0,a,b,c)},
dt:function(a,b,c){return new P.bH(null,null,!0,a,b,"Value not in range")},
au:function(a,b,c,d,e){return new P.bH(b,c,!0,a,d,"Invalid value")},
ix:function(a,b,c,d,e,f){if(0>a||a>c)throw H.e(P.au(a,0,c,"start",f))
if(b!=null){if(a>b||b>c)throw H.e(P.au(b,a,c,"end",f))
return b}return c},
bz:function(a,b,c,d,e){var u=H.a1(e==null?J.bq(b):e)
return new P.eP(b,u,!0,a,c,"Index out of range")},
ab:function(a){return new P.h5(a)},
jv:function(a){return new P.h3(a)},
jp:function(a){return new P.bJ(a)},
ba:function(a){return new P.ep(a)},
p:function(a){return new P.dY(a)},
iQ:function(a){H.lM(a)},
I:function I(){},
af:function af(a,b){this.a=a
this.b=b},
w:function w(){},
aH:function aH(a){this.a=a},
eu:function eu(){},
ev:function ev(){},
bc:function bc(){},
dn:function dn(){},
az:function az(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
bH:function bH(a,b,c,d,e,f){var _=this
_.e=a
_.f=b
_.a=c
_.b=d
_.c=e
_.d=f},
eP:function eP(a,b,c,d,e,f){var _=this
_.e=a
_.f=b
_.a=c
_.b=d
_.c=e
_.d=f},
h5:function h5(a){this.a=a},
h3:function h3(a){this.a=a},
bJ:function bJ(a){this.a=a},
ep:function ep(a){this.a=a},
fj:function fj(){},
dA:function dA(){},
er:function er(a){this.a=a},
dY:function dY(a){this.a=a},
eI:function eI(a,b,c){this.a=a
this.b=b
this.c=c},
bd:function bd(){},
x:function x(){},
j:function j(){},
aI:function aI(){},
a:function a(){},
E:function E(){},
a7:function a7(){},
H:function H(){},
ai:function ai(){},
m:function m(){},
b1:function b1(a){this.a=a},
lr:function(a){var u,t
u=J.T(a)
if(!!u.$ibe){t=u.gdS(a)
if(t.constructor===Array)if(typeof CanvasPixelArray!=="undefined"){t.constructor=CanvasPixelArray
t.BYTES_PER_ELEMENT=1}return a}return new P.ea(a.data,a.height,a.width)},
lq:function(a){if(a instanceof P.ea)return{data:a.a,height:a.b,width:a.c}
return a},
lp:function(a,b){var u={}
a.a2(0,new P.i2(u))
return u},
ea:function ea(a,b,c){this.a=a
this.b=b
this.c=c},
i2:function i2(a){this.a=a},
eE:function eE(a,b){this.a=a
this.b=b},
eF:function eF(){},
eG:function eG(){},
hH:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
l9:function(a){a=536870911&a+((67108863&a)<<3)
a^=a>>>11
return 536870911&a+((16383&a)<<15)},
hJ:function hJ(){},
av:function av(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=e},
cf:function cf(){},
n:function n(){},
cO:function cO(){},
d_:function d_(){},
dr:function dr(){},
bI:function bI(){},
dv:function dv(){},
dD:function dD(){},
dM:function dM(){}},W={
iY:function(a){var u=document.createElement("a")
return u},
im:function(a,b){var u=document.createElement("canvas")
return u},
kx:function(a,b,c){var u,t
u=document.body
t=(u&&C.n).ae(u,a,b,c)
t.toString
u=W.z
u=new H.cw(new W.ad(t),H.k(new W.ex(),{func:1,ret:P.I,args:[u]}),[u])
return H.d(u.gaE(u),"$iN")},
ky:function(a){H.d(a,"$ibw")
return"wheel"},
c4:function(a){var u,t,s
u="element tag unavailable"
try{t=J.km(a)
if(typeof t==="string")u=a.tagName}catch(s){H.ar(s)}return u},
hG:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
jG:function(a,b,c,d){var u,t
u=W.hG(W.hG(W.hG(W.hG(0,a),b),c),d)
t=536870911&u+((67108863&u)<<3)
t^=t>>>11
return 536870911&t+((16383&t)<<15)},
a0:function(a,b,c,d,e){var u,t
u=W.jO(new W.hw(c),W.l)
t=u!=null
if(t&&!0){H.k(u,{func:1,args:[W.l]})
if(t)J.kk(a,b,u,!1)}return new W.hv(a,b,u,!1,[e])},
jF:function(a){var u,t
u=W.iY(null)
t=window.location
u=new W.bm(new W.hO(u,t))
u.f7(a)
return u},
l7:function(a,b,c,d){H.d(a,"$iN")
H.J(b)
H.J(c)
H.d(d,"$ibm")
return!0},
l8:function(a,b,c,d){var u,t,s
H.d(a,"$iN")
H.J(b)
H.J(c)
u=H.d(d,"$ibm").a
t=u.a
t.href=c
s=t.hostname
u=u.b
if(!(s==u.hostname&&t.port==u.port&&t.protocol==u.protocol))if(s==="")if(t.port===""){u=t.protocol
u=u===":"||u===""}else u=!1
else u=!1
else u=!0
return u},
jH:function(){var u,t,s,r,q
u=P.m
t=P.j9(C.t,u)
s=H.u(C.t,0)
r=H.k(new W.hU(),{func:1,ret:u,args:[s]})
q=H.b(["TEMPLATE"],[u])
t=new W.hT(t,P.d9(null,null,null,u),P.d9(null,null,null,u),P.d9(null,null,null,u),null)
t.fh(null,new H.f4(C.t,r,[s,u]),q,null)
return t},
jO:function(a,b){var u
H.k(a,{func:1,ret:-1,args:[b]})
u=$.S
if(u===C.l)return a
return u.dK(a,b)},
t:function t(){},
cM:function cM(){},
ei:function ei(){},
bW:function bW(){},
b7:function b7(){},
bs:function bs(){},
bt:function bt(){},
b8:function b8(){},
c2:function c2(){},
eq:function eq(){},
as:function as(){},
c3:function c3(){},
et:function et(){},
cV:function cV(){},
cW:function cW(){},
hs:function hs(a,b){this.a=a
this.b=b},
N:function N(){},
ex:function ex(){},
l:function l(){},
bw:function bw(){},
eH:function eH(){},
d0:function d0(){},
by:function by(){},
d1:function d1(){},
be:function be(){},
c7:function c7(){},
aK:function aK(){},
da:function da(){},
ca:function ca(){},
a3:function a3(){},
ad:function ad(a){this.a=a},
z:function z(){},
cc:function cc(){},
ds:function ds(){},
fu:function fu(){},
bK:function bK(){},
dB:function dB(){},
dC:function dC(){},
fJ:function fJ(){},
ck:function ck(){},
aQ:function aQ(){},
aC:function aC(){},
fR:function fR(){},
bk:function bk(){},
hl:function hl(){},
aT:function aT(){},
cx:function cx(){},
cy:function cy(){},
dX:function dX(){},
e2:function e2(){},
hr:function hr(){},
ht:function ht(a){this.a=a},
hu:function hu(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
iB:function iB(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
hv:function hv(a,b,c,d,e){var _=this
_.a=0
_.b=a
_.c=b
_.d=c
_.e=d
_.$ti=e},
hw:function hw(a){this.a=a},
bm:function bm(a){this.a=a},
am:function am(){},
dm:function dm(a){this.a=a},
fg:function fg(a){this.a=a},
ff:function ff(a,b,c){this.a=a
this.b=b
this.c=c},
e5:function e5(){},
hQ:function hQ(){},
hR:function hR(){},
hT:function hT(a,b,c,d,e){var _=this
_.e=a
_.a=b
_.b=c
_.c=d
_.d=e},
hU:function hU(){},
hS:function hS(){},
cZ:function cZ(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=null
_.$ti=d},
ap:function ap(){},
hO:function hO(a,b){this.a=a
this.b=b},
eb:function eb(a){this.a=a},
hY:function hY(a){this.a=a},
dW:function dW(){},
dZ:function dZ(){},
e_:function e_(){},
e3:function e3(){},
e4:function e4(){},
e8:function e8(){},
e9:function e9(){},
ec:function ec(){},
ed:function ed(){}},O={
io:function(a){var u=new O.V([a])
u.bf(a)
return u},
V:function V(a){var _=this
_.d=_.c=_.b=_.a=null
_.$ti=a},
c9:function c9(){this.b=this.a=null},
dd:function dd(){var _=this
_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
f5:function f5(a,b){var _=this
_.f=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
df:function df(){},
f6:function f6(a,b){var _=this
_.a=a
_.b=b
_.e=_.d=_.c=null},
aL:function aL(a,b){var _=this
_.f=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
f8:function f8(a,b){var _=this
_.f=_.ch=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
f9:function f9(a,b){var _=this
_.f=_.ch=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
dx:function dx(){var _=this
_.e=_.d=_.c=_.b=_.a=null},
bj:function bj(){}},E={
j6:function(a,b,c,d,e,f){var u=new E.a9()
u.a=d
u.b=!0
u.sf6(0,O.io(E.a9))
u.y.aU(u.gjM(),u.gjP())
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
kV:function(a,b){var u=new E.fp(a,b)
u.f2(a,b)
return u},
l0:function(a,b,c,d,e){var u,t,s,r
u=J.T(a)
if(!!u.$ibs)return E.jr(a,!0,!0,!0,!1)
t=W.im(null,null)
s=t.style
s.width="100%"
s.height="100%"
u.gdO(a).h(0,t)
r=E.jr(t,!0,!0,!0,!1)
r.a=a
return r},
jr:function(a,b,c,d,e){var u,t,s,r,q,p,o,n,m,l,k,j
u=new E.dI()
t=P.kG(["alpha",!0,"depth",!0,"stencil",!1,"antialias",!0,"premultipliedAlpha",!0,"preserveDrawingBuffer",!1],P.m,null)
s=C.o.bO(a,"webgl",t)
s=H.d(s==null?C.o.bO(a,"experimental-webgl",t):s,"$ibI")
if(s==null)H.r(P.p("Failed to get the rendering context for WebGL."))
u.b=a
u.a=a
u.c=s
u.e=E.kV(s,a)
r=new T.fL(s)
r.b=H.a1((s&&C.b).cX(s,3379))
r.c=H.a1(C.b.cX(s,34076))
r.d=0
r.e=0
u.f=r
r=new X.dP(a)
q=new X.eV()
q.c=new X.ao(!1,!1,!1)
q.shT(P.d9(null,null,null,P.x))
r.b=q
q=new X.fa(r)
q.f=0
q.r=V.b0()
q.x=V.b0()
q.Q=1
q.ch=1
r.c=q
q=new X.f_(r)
q.r=0
q.x=V.b0()
q.Q=1
q.ch=1
q.cx=1
q.cy=1
r.d=q
q=new X.fQ(r)
q.e=0
q.f=V.b0()
q.r=V.b0()
r.e=q
r.f=!1
r.r=!1
r.x=!1
r.y=null
r.sfH(H.b([],[[P.ci,P.H]]))
q=r.z
p=document
o=W.a3
n={func:1,ret:-1,args:[o]};(q&&C.a).h(q,W.a0(p,"contextmenu",H.k(r.ghe(),n),!1,o))
q=r.z
m=W.l
l={func:1,ret:-1,args:[m]};(q&&C.a).h(q,W.a0(a,"focus",H.k(r.ghk(),l),!1,m))
q=r.z;(q&&C.a).h(q,W.a0(a,"blur",H.k(r.gh8(),l),!1,m))
q=r.z
k=W.aK
j={func:1,ret:-1,args:[k]};(q&&C.a).h(q,W.a0(p,"keyup",H.k(r.gho(),j),!1,k))
q=r.z;(q&&C.a).h(q,W.a0(p,"keydown",H.k(r.ghm(),j),!1,k))
k=r.z;(k&&C.a).h(k,W.a0(a,"mousedown",H.k(r.ghs(),n),!1,o))
k=r.z;(k&&C.a).h(k,W.a0(a,"mouseup",H.k(r.ghw(),n),!1,o))
k=r.z;(k&&C.a).h(k,W.a0(a,"mousemove",H.k(r.ghu(),n),!1,o))
k=r.z
j=W.aT;(k&&C.a).h(k,W.a0(a,H.J(W.ky(a)),H.k(r.ghy(),{func:1,ret:-1,args:[j]}),!1,j))
j=r.z;(j&&C.a).h(j,W.a0(p,"mousemove",H.k(r.ghg(),n),!1,o))
j=r.z;(j&&C.a).h(j,W.a0(p,"mouseup",H.k(r.ghi(),n),!1,o))
o=r.z;(o&&C.a).h(o,W.a0(p,"pointerlockchange",H.k(r.ghA(),l),!1,m))
m=r.z
l=W.aC
p={func:1,ret:-1,args:[l]};(m&&C.a).h(m,W.a0(a,"touchstart",H.k(r.ghQ(),p),!1,l))
m=r.z;(m&&C.a).h(m,W.a0(a,"touchend",H.k(r.ghM(),p),!1,l))
m=r.z;(m&&C.a).h(m,W.a0(a,"touchmove",H.k(r.ghO(),p),!1,l))
u.r=r
u.Q=!0
u.ch=!1
u.cx=new P.af(Date.now(),!1)
u.cy=0
u.dz()
return u},
ek:function ek(){},
a9:function a9(){var _=this
_.fx=_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
fp:function fp(a,b){var _=this
_.a=a
_.b=b
_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=null},
fq:function fq(a){this.a=a},
fr:function fr(a){this.a=a},
fs:function fs(a){this.a=a},
dI:function dI(){var _=this
_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
fN:function fN(a){this.a=a}},Z={
jD:function(a,b,c){var u
H.f(c,"$ia",[P.x],"$aa")
u=a.createBuffer()
C.b.ao(a,b,u)
C.b.dM(a,b,new Int16Array(H.cF(c)),35044)
C.b.ao(a,b,null)
return new Z.dT(b,u)},
aw:function(a){return new Z.aS(a)},
dT:function dT(a,b){this.a=a
this.b=b},
cP:function cP(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
dU:function dU(a){this.a=a},
bZ:function bZ(a,b,c){var _=this
_.a=a
_.b=null
_.c=b
_.d=c},
bA:function bA(a,b,c){this.a=a
this.b=b
this.c=c},
aS:function aS(a){this.a=a}},D={
D:function(){var u=new D.bv()
u.sac(null)
u.saY(null)
u.c=null
u.d=0
return u},
en:function en(){},
bv:function bv(){var _=this
_.d=_.c=_.b=_.a=null},
eB:function eB(a){this.a=a},
eC:function eC(a){this.a=a},
v:function v(a){this.a=a
this.b=null},
bf:function bf(a,b,c,d){var _=this
_.c=a
_.d=b
_.a=c
_.b=null
_.$ti=d},
bg:function bg(a,b,c,d){var _=this
_.c=a
_.d=b
_.a=c
_.b=null
_.$ti=d},
G:function G(a,b,c,d,e){var _=this
_.c=a
_.d=b
_.e=c
_.a=d
_.b=null
_.$ti=e},
bb:function bb(){var _=this
_.d=_.c=_.b=_.a=null},
Y:function Y(){},
d7:function d7(){var _=this
_.d=_.c=_.b=_.a=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=null},
dq:function dq(){},
dz:function dz(){},
dF:function dF(){},
dG:function dG(){},
dH:function dH(){}},X={cQ:function cQ(a,b){this.a=a
this.b=b},d6:function d6(a,b){this.a=a
this.b=b},eV:function eV(){var _=this
_.d=_.c=_.b=_.a=null},db:function db(a,b,c,d,e,f){var _=this
_.x=a
_.y=b
_.c=c
_.d=d
_.e=e
_.a=f
_.b=null},f_:function f_(a){var _=this
_.a=a
_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},ao:function ao(a,b,c){this.a=a
this.b=b
this.c=c},b_:function b_(a,b,c,d,e,f,g,h,i){var _=this
_.x=a
_.y=b
_.z=c
_.Q=d
_.ch=e
_.c=f
_.d=g
_.e=h
_.a=i
_.b=null},fa:function fa(a){var _=this
_.a=a
_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},cb:function cb(a,b,c,d,e){var _=this
_.x=a
_.c=b
_.d=c
_.e=d
_.a=e
_.b=null},fm:function fm(){},dK:function dK(a,b,c,d,e,f,g,h,i){var _=this
_.x=a
_.y=b
_.z=c
_.Q=d
_.ch=e
_.c=f
_.d=g
_.e=h
_.a=i
_.b=null},fQ:function fQ(a){var _=this
_.a=a
_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},dP:function dP(a){var _=this
_.a=a
_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},
ir:function(a,b,c,d,e,f,g){var u,t
u=new X.eJ()
t=new V.al(0,0,0,1)
u.a=t
u.b=!0
u.c=e
u.d=!0
u.e=g
u.f=!1
t=$.jm
if(t==null){t=V.jl(0,0,1,1)
$.jm=t}u.r=t
return u},
jf:function(a,b,c,d,e){var u,t,s
u=new X.dp()
u.c=1.0471975511965976
u.d=0.1
u.e=2000
if(null!=c){t=u.b
u.b=c
if(c!=null)c.gq().h(0,u.gfk())
s=new D.G("mover",t,u.b,u,[U.a5])
s.b=!0
u.al(s)}s=u.c
if(!(Math.abs(s-b)<$.L().a)){u.c=b
s=new D.G("fov",s,b,u,[P.w])
s.b=!0
u.al(s)}s=u.d
if(!(Math.abs(s-d)<$.L().a)){u.d=d
s=new D.G("near",s,d,u,[P.w])
s.b=!0
u.al(s)}s=u.e
if(!(Math.abs(s-a)<$.L().a)){u.e=a
s=new D.G("far",s,a,u,[P.w])
s.b=!0
u.al(s)}return u},
br:function br(){},
eJ:function eJ(){var _=this
_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
eO:function eO(){this.b=this.a=null},
dp:function dp(){var _=this
_.f=_.e=_.d=_.c=_.b=_.a=null},
cj:function cj(){}},V={
lU:function(a,b,c){var u
if(c<=b)return b
u=c-b
a=C.e.eL(a-b,u)
return(a<0?a+u:a)+b},
O:function(a,b,c){if(a==null)return C.j.aA("null",c)
return C.j.aA(C.e.ew(Math.abs(a-0)<$.L().a?0:a,b),c+b+1)},
bQ:function(a,b,c){var u,t,s,r,q,p
H.f(a,"$ia",[P.w],"$aa")
u=H.b([],[P.m])
for(t=a.length,s=0,r=0;r<a.length;a.length===t||(0,H.y)(a),++r){q=V.O(a[r],b,c)
s=Math.max(s,q.length)
C.a.h(u,q)}for(p=u.length-1;p>=0;--p){if(p>=u.length)return H.i(u,p)
C.a.Y(u,p,C.j.aA(u[p],s))}return u},
iP:function(a,b){return C.e.ki(Math.pow(b,C.O.cG(Math.log(H.lo(a))/Math.log(b))))},
bD:function(){var u=$.jc
if(u==null){u=V.aM(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1)
$.jc=u}return u},
aM:function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){return new V.ag(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p)},
jb:function(a,b,c){var u,t,s,r,q,p,o,n
u=c.w(0,Math.sqrt(c.D(c)))
t=b.aw(u)
s=t.w(0,Math.sqrt(t.D(t)))
r=u.aw(s)
q=new V.K(a.a,a.b,a.c)
p=s.R(0).D(q)
o=r.R(0).D(q)
n=u.R(0).D(q)
return V.aM(s.a,r.a,u.a,p,s.b,r.b,u.b,o,s.c,r.c,u.c,n,0,0,0,1)},
b0:function(){var u=$.jh
if(u==null){u=new V.Z(0,0)
$.jh=u}return u},
ji:function(){var u=$.cd
if(u==null){u=new V.X(0,0,0)
$.cd=u}return u},
jl:function(a,b,c,d){if(c<0){a+=c
c=-c}if(d<0){b+=d
d=-d}return new V.du(a,b,c,d)},
cv:function(){var u=$.jA
if(u==null){u=new V.K(0,0,0)
$.jA=u}return u},
jB:function(){var u=$.jz
if(u==null){u=new V.K(0,1,0)
$.jz=u}return u},
jC:function(){var u=$.h8
if(u==null){u=new V.K(0,0,1)
$.h8=u}return u},
W:function W(a,b,c){this.a=a
this.b=b
this.c=c},
al:function al(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
ez:function ez(a){this.a=a},
dg:function dg(a,b,c,d,e,f,g,h,i){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.x=h
_.y=i},
ag:function ag(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){var _=this
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
Z:function Z(a,b){this.a=a
this.b=b},
X:function X(a,b,c){this.a=a
this.b=b
this.c=c},
aO:function aO(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
du:function du(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
M:function M(a,b){this.a=a
this.b=b},
K:function K(a,b,c){this.a=a
this.b=b
this.c=c},
Q:function(a,b){var u,t,s,r
if(a.length!==1||b.length!==1)throw H.e(P.p("The given low and high character strings for a RangeMatcher must have one and only one characters."))
u=C.j.aG(a,0)
t=C.j.aG(b,0)
s=new V.fn()
if(u>t){r=t
t=u
u=r}s.a=u
s.b=t
return s},
q:function(a){var u=new V.fv()
u.f3(a)
return u},
fP:function(){var u,t
u=new V.fO()
t=P.m
u.sik(new H.aJ([t,V.ch]))
u.sip(new H.aJ([t,V.cm]))
u.c=null
return u},
aW:function aW(){},
an:function an(){},
dc:function dc(){},
ah:function ah(){this.a=null},
fn:function fn(){this.b=this.a=null},
fv:function fv(){this.a=null},
ch:function ch(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
dJ:function dJ(a,b,c){this.a=a
this.b=b
this.c=c},
cm:function cm(a,b){this.a=a
this.b=b
this.c=null},
fO:function fO(){this.c=this.b=this.a=null},
cn:function cn(a){this.b=a
this.a=this.c=null},
lP:function(a){P.l1(C.K,new V.ie(a))},
kX:function(a,b){var u=new V.fz()
u.f4(a,!0)
return u},
b9:function b9(){},
ie:function ie(a){this.a=a},
es:function es(a){var _=this
_.a=a
_.d=_.c=_.b=null},
eK:function eK(a){var _=this
_.a=a
_.d=_.c=_.b=null},
eL:function eL(a){var _=this
_.a=a
_.d=_.c=_.b=null},
fl:function fl(a){var _=this
_.a=a
_.d=_.c=_.b=null},
fz:function fz(){this.b=this.a=null},
fB:function fB(a){this.a=a},
fA:function fA(a){this.a=a},
fC:function fC(a){this.a=a}},U={
ip:function(){var u=new U.eo()
u.a=!0
u.b=1e12
u.c=-1e12
u.d=0
u.e=100
u.f=0
u.x=0
u.r=0
return u},
j2:function(a){var u=new U.cS()
u.a=a
return u},
eo:function eo(){var _=this
_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
cS:function cS(){this.b=this.a=null},
c6:function c6(){var _=this
_.d=_.c=_.b=_.a=_.r=_.f=_.e=null},
a5:function a5(){},
dQ:function dQ(){var _=this
_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
dR:function dR(){var _=this
_.fx=_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
dS:function dS(){var _=this
_.r=_.f=_.e=_.d=_.c=_.b=_.a=null}},M={cR:function cR(){var _=this
_.d=_.c=_.b=_.a=_.f=_.e=null},cT:function cT(){var _=this
_.f=_.e=_.d=_.c=_.b=_.a=null},cX:function cX(){var _=this
_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},aq:function aq(){}},A={
kJ:function(a,b){var u,t
u=a.ai
t=new A.de(b,u)
t.d1(b,u)
t.f1(a,b)
return t},
iA:function(a,b,c,d,e){var u=new A.fW(a,b,c,e)
u.f=d
u.siA(P.kH(d,0,!1,P.x))
return u},
cN:function cN(a,b,c){this.a=a
this.b=b
this.c=c},
ej:function ej(a){this.a=a},
de:function de(a,b){var _=this
_.bn=_.dY=_.bm=_.ai=_.aq=_.y2=_.y1=_.x2=_.x1=_.ry=_.rx=_.r2=_.r1=_.k4=_.k3=_.k2=_.k1=_.id=_.go=_.fy=_.fx=_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=null
_.ed=_.cA=_.ec=_.bA=_.eb=_.ea=_.bz=_.by=_.e9=_.e8=_.bx=_.bw=_.bv=_.e7=_.e6=_.bu=_.e5=_.e4=_.bt=_.e3=_.e2=_.bs=_.br=_.e1=_.e0=_.bq=_.bp=_.e_=_.dZ=_.bo=null
_.cF=_.eh=_.cE=_.eg=_.cD=_.ef=_.cC=_.ee=_.cB=null
_.a=a
_.b=b
_.y=_.x=_.r=_.f=_.e=_.d=_.c=null},
f7:function f7(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5){var _=this
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
_.aq=b3
_.ai=b4
_.bm=b5},
co:function co(a,b,c){this.a=a
this.b=b
this.c=c},
cs:function cs(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.x=h},
cq:function cq(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},
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
cr:function cr(a,b,c,d,e,f,g,h,i,j){var _=this
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
cu:function cu(a,b,c,d,e,f,g,h,i,j,k,l,m,n){var _=this
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
cg:function cg(){},
bu:function bu(a,b){this.a=a
this.b=b},
dy:function dy(a,b){var _=this
_.db=_.cy=_.cx=_.ch=_.Q=_.z=null
_.a=a
_.b=b
_.y=_.x=_.r=_.f=_.e=_.d=_.c=null},
dL:function dL(){},
h1:function h1(a){this.a=a},
F:function F(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
fY:function fY(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
fZ:function fZ(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
h0:function h0(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
fW:function fW(a,b,c,d){var _=this
_.f=_.e=null
_.a=a
_.b=b
_.c=c
_.d=d},
R:function R(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
fX:function fX(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
C:function C(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
h_:function h_(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
h2:function h2(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
cp:function cp(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
aj:function aj(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
aa:function aa(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
a6:function a6(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d}},F={
lT:function(a,b,c,d){return F.ls(c,a,d,b,new F.ig())},
ls:function(a,b,c,d,e){var u=F.lR(a,b,new F.i3(H.k(e,{func:1,ret:V.X,args:[P.w]}),d,b,c),null)
if(u==null)return
u.av()
u.jL(new F.hf(),new F.fh())
return u},
lR:function(a,b,c,d){var u,t,s,r,q,p,o,n,m,l,k,j,i,h
H.k(c,{func:1,ret:-1,args:[F.ac,P.w,P.w]})
if(a<1)return
if(b<1)return
u=F.jo()
t=H.b([],[F.ac])
for(s=0;s<=b;++s){r=s/b
q=u.a
if(r<0)p=0
else p=r>1?1:r
q.toString
o=F.h9(null,null,new V.al(p,0,0,1),null,null,new V.Z(r,1),null,null,0)
q.h(0,o)
c.$3(o,r,0)
C.a.h(t,o.dR(d))}for(s=1;s<=a;++s){n=s/a
for(q=n>1,p=n<0,m=1-n,l=0;l<=b;++l){r=l/b
k=u.a
if(r<0)j=0
else j=r>1?1:r
if(p)i=0
else i=q?1:n
if(p)h=0
else h=q?1:n
k.toString
o=F.h9(null,null,new V.al(j,i,h,1),null,null,new V.Z(r,m),null,null,0)
k.h(0,o)
c.$3(o,r,n)
C.a.h(t,o.dR(d))}}u.d.iZ(a+1,b+1,t)
return u},
cY:function(a,b,c){var u,t
u=new F.a_()
t=a.a
if(t==null)H.r(P.p("May not create a face with a first vertex which is not attached to a shape."))
if(t!=b.a||t!=c.a)H.r(P.p("May not create a face with vertices attached to different shapes."))
u.i9(a)
u.ia(b)
u.ib(c)
C.a.h(u.a.a.d.b,u)
u.a.a.a9()
return u},
jo:function(){var u,t
u=new F.dw()
t=new F.ha(u)
t.b=!1
t.siB(H.b([],[F.ac]))
u.a=t
t=new F.fy(u)
t.scf(H.b([],[F.bE]))
u.b=t
t=new F.fx(u)
t.sfR(H.b([],[F.bi]))
u.c=t
t=new F.fw(u)
t.sfI(H.b([],[F.a_]))
u.d=t
u.e=null
return u},
h9:function(a,b,c,d,e,f,g,h,i){var u,t,s
u=new F.ac()
t=new F.hi(u)
t.scf(H.b([],[F.bE]))
u.b=t
t=new F.he(u)
s=[F.bi]
t.sfS(H.b([],s))
t.sfT(H.b([],s))
u.c=t
t=new F.hb(u)
s=[F.a_]
t.sfJ(H.b([],s))
t.sfK(H.b([],s))
t.sfL(H.b([],s))
u.d=t
h=$.kc()
u.e=0
t=$.aE()
s=h.a
u.f=(s&t.a)!==0?d:null
u.r=(s&$.b4().a)!==0?e:null
u.x=(s&$.b3().a)!==0?b:null
u.y=(s&$.b5().a)!==0?f:null
u.z=(s&$.b6().a)!==0?g:null
u.Q=(s&$.kd().a)!==0?c:null
u.ch=(s&$.bU().a)!==0?i:0
u.cx=(s&$.b2().a)!==0?a:null
return u},
ig:function ig(){},
i3:function i3(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
a_:function a_(){var _=this
_.e=_.d=_.c=_.b=_.a=null},
eD:function eD(){},
fD:function fD(){},
bi:function bi(){},
eW:function eW(){},
fV:function fV(){},
bE:function bE(){},
dw:function dw(){var _=this
_.e=_.d=_.c=_.b=_.a=null},
fw:function fw(a){this.a=a
this.b=null},
fx:function fx(a){this.a=a
this.b=null},
fy:function fy(a){this.a=a
this.b=null},
ac:function ac(){var _=this
_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
hk:function hk(a){this.a=a},
hj:function hj(a){this.a=a},
ha:function ha(a){this.a=a
this.c=this.b=null},
hb:function hb(a){var _=this
_.a=a
_.d=_.c=_.b=null},
hc:function hc(a,b){this.a=a
this.b=b},
hd:function hd(a,b){this.a=a
this.b=b},
he:function he(a){this.a=a
this.c=this.b=null},
hg:function hg(){},
hf:function hf(){},
hh:function hh(){},
fh:function fh(){},
hi:function hi(a){this.a=a
this.b=null}},T={cl:function cl(){},dE:function dE(){var _=this
_.e=_.d=_.c=_.b=_.a=null},fL:function fL(a){var _=this
_.a=a
_.e=_.d=_.c=_.b=null},fM:function fM(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g}},B={
jW:function(){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6
u=V.kX("Test 013",!0)
t=W.im(null,null)
t.className="pageLargeCanvas"
t.id="testCanvas"
C.k.C(u.a,t)
s=[P.m]
u.dG(H.b(["Test of sky box and cover pass."],s))
u.dG(H.b(["\xab[Back to Tests|../]"],s))
r=C.z.eG(document,"testCanvas")
if(r==null)H.r(P.p("Failed to find an element with the identifier, testCanvas."))
q=E.l0(r,!0,!0,!0,!1)
p=new U.c6()
s=U.a5
p.bf(s)
p.aU(p.gh0(),p.ghE())
p.e=null
p.f=V.bD()
p.r=0
o=q.r
n=new U.dR()
m=U.ip()
m.scW(0,!0)
m.scK(6.283185307179586)
m.scM(0)
m.sa7(0,0)
m.scL(100)
m.sT(0)
m.scv(0.5)
n.b=m
l=n.gaJ()
m.gq().h(0,l)
m=U.ip()
m.scW(0,!0)
m.scK(6.283185307179586)
m.scM(0)
m.sa7(0,0)
m.scL(100)
m.sT(0)
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
k=new X.ao(!1,!1,!1)
j=n.d
n.d=k
m=[X.ao]
l=new D.G("modifiers",j,k,n,m)
l.b=!0
n.M(l)
l=n.f
if(l!==!1){n.f=!1
l=new D.G("invertX",l,!1,n,[P.I])
l.b=!0
n.M(l)}l=n.r
if(l!==!1){n.r=!1
l=new D.G("invertY",l,!1,n,[P.I])
l.b=!0
n.M(l)}n.b0(o)
p.h(0,n)
o=q.r
n=new U.dQ()
l=U.ip()
l.scW(0,!0)
l.scK(6.283185307179586)
l.scM(0)
l.sa7(0,0)
l.scL(100)
l.sT(0)
l.scv(0.2)
n.b=l
l.gq().h(0,n.gaJ())
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
k=new X.ao(!0,!1,!1)
j=n.c
n.c=k
l=new D.G("modifiers",j,k,n,m)
l.b=!0
n.M(l)
n.b0(o)
p.h(0,n)
o=q.r
n=new U.dS()
n.c=0.01
n.d=0
n.e=0
k=new X.ao(!1,!1,!1)
n.b=k
m=new D.G("modifiers",null,k,n,m)
m.b=!0
n.M(m)
n.b0(o)
p.h(0,n)
p.h(0,U.j2(V.aM(1,0,0,0,0,1,0,0,0,0,1,5,0,0,0,1)))
i=X.jf(2000,1.0471975511965976,p,0.1,null)
h=X.ir(!0,!0,!1,null,2000,null,0)
if(h.b){h.b=!1
o=new D.G("clearColor",!0,!1,h,[P.I])
o.b=!0
h.al(o)}g=E.j6(null,!0,null,"",null,null)
g.sbR(0,F.lT(30,1,15,0.5))
f=new O.dd()
f.sft(O.io(V.ag))
f.e.aU(f.gh4(),f.gh6())
o=new O.aL(f,"emission")
o.c=C.c
o.f=new V.W(0,0,0)
f.f=o
o=new O.aL(f,"ambient")
o.c=C.c
o.f=new V.W(0,0,0)
f.r=o
o=new O.aL(f,"diffuse")
o.c=C.c
o.f=new V.W(0,0,0)
f.x=o
o=new O.aL(f,"invDiffuse")
o.c=C.c
o.f=new V.W(0,0,0)
f.y=o
o=new O.f9(f,"specular")
o.c=C.c
o.f=new V.W(0,0,0)
o.ch=100
f.z=o
o=new O.f6(f,"bump")
o.c=C.c
f.Q=o
f.ch=null
o=new O.aL(f,"reflect")
o.c=C.c
o.f=new V.W(0,0,0)
f.cx=o
o=new O.f8(f,"refract")
o.c=C.c
o.f=new V.W(0,0,0)
o.ch=1
f.cy=o
o=new O.f5(f,"alpha")
o.c=C.c
o.f=1
f.db=o
o=new D.d7()
o.bf(D.Y)
o.sfE(H.b([],[D.bb]))
o.shS(H.b([],[D.dq]))
o.sij(H.b([],[D.dz]))
o.six(H.b([],[D.dF]))
o.siy(H.b([],[D.dG]))
o.siz(H.b([],[D.dH]))
o.Q=null
o.ch=null
o.cZ(o.gh2(),o.ghC(),o.ghG())
f.dx=o
n=o.Q
if(n==null){n=D.D()
o.Q=n
o=n}else o=n
o.h(0,f.gi2())
o=f.dx
n=o.ch
if(n==null){n=D.D()
o.ch=n
o=n}else o=n
o.h(0,f.gbV())
f.dy=null
o=f.dx
e=V.jB()
n=U.j2(V.jb(V.ji(),e,new V.K(0,-1,-1)))
d=new V.W(1,1,1)
m=new D.bb()
m.c=new V.W(1,1,1)
m.a=V.jC()
j=m.b
m.b=n
n.gq().h(0,m.gf9())
s=new D.G("mover",j,m.b,m,[s])
s.b=!0
m.ar(s)
if(!m.c.A(0,d)){j=m.c
m.c=d
s=new D.G("color",j,d,m,[V.W])
s.b=!0
m.ar(s)}o.h(0,m)
s=f.r
s.sap(0,new V.W(0,0,1))
s=f.x
s.sap(0,new V.W(0,1,0))
s=f.z
s.sap(0,new V.W(1,0,0))
s=f.z
if(s.c===C.c){s.c=C.i
s.bU()
s.cj(100)
o=s.a
o.a=null
o.a0(null)}s.cj(10)
s=q.f
o=s.a
c=o.createTexture()
C.b.aN(o,34067,c)
C.b.bJ(o,34067,10242,10497)
C.b.bJ(o,34067,10243,10497)
C.b.bJ(o,34067,10241,9729)
C.b.bJ(o,34067,10240,9729)
C.b.aN(o,34067,null)
b=new T.dE()
b.a=0
b.b=c
b.c=!1
b.d=0
s.aI(b,c,"../resources/maskonaive/posx.jpg",34069,!1,!1)
s.aI(b,c,"../resources/maskonaive/negx.jpg",34070,!1,!1)
s.aI(b,c,"../resources/maskonaive/posy.jpg",34071,!1,!1)
s.aI(b,c,"../resources/maskonaive/negy.jpg",34072,!1,!1)
s.aI(b,c,"../resources/maskonaive/posz.jpg",34073,!1,!1)
s.aI(b,c,"../resources/maskonaive/negz.jpg",34074,!1,!1)
a=new M.cT()
a.sb1(null)
a.sb7(0,null)
a.sb8(null)
s=E.j6(null,!0,null,"",null,null)
a0=F.jo()
o=a0.a
n=new V.K(-1,-1,1)
n=n.w(0,Math.sqrt(n.D(n)))
a1=o.bk(new V.aO(1,2,4,6),new V.al(1,0,0,1),new V.X(-1,-1,0),new V.Z(0,1),n,null)
o=a0.a
n=new V.K(1,-1,1)
n=n.w(0,Math.sqrt(n.D(n)))
a2=o.bk(new V.aO(0,3,4,6),new V.al(0,0,1,1),new V.X(1,-1,0),new V.Z(1,1),n,null)
o=a0.a
n=new V.K(1,1,1)
n=n.w(0,Math.sqrt(n.D(n)))
a3=o.bk(new V.aO(0,2,5,6),new V.al(0,1,0,1),new V.X(1,1,0),new V.Z(1,0),n,null)
o=a0.a
n=V.b0()
m=new V.K(-1,1,1)
m=m.w(0,Math.sqrt(m.D(m)))
a4=o.bk(new V.aO(0,2,4,7),new V.al(1,1,0,1),new V.X(-1,1,0),n,m,null)
a0.d.iY(H.b([a1,a2,a3,a4],[F.ac]))
a0.av()
s.sbR(0,a0)
a.d=s
a.e=null
s=new O.dx()
s.b=1.0471975511965976
s.d=new V.W(1,1,1)
j=s.c
s.c=b
b.gq().h(0,s.gbV())
o=new D.G("boxTexture",j,s.c,s,[T.dE])
o.b=!0
s.a0(o)
a.sb8(s)
a.sb7(0,h)
a.sb1(i)
a5=new M.cX()
a5.sfw(0,O.io(E.a9))
a5.d.aU(a5.gha(),a5.ghc())
a5.e=null
a5.f=null
a5.r=null
a5.x=null
a6=X.ir(!0,!0,!1,null,2000,null,0)
a5.sb1(null)
a5.sb7(0,a6)
a5.sb8(null)
a5.sb1(i)
a5.sb8(f)
a5.sb7(0,h)
a5.d.h(0,g)
s=M.aq
o=H.b([a,a5],[s])
n=new M.cR()
n.bf(s)
n.e=!1
n.f=null
n.aU(n.ghI(),n.ghK())
n.a5(0,o)
s=q.d
if(s!==n){if(s!=null)s.gq().N(0,q.gd3())
q.d=n
n.gq().h(0,q.gd3())
q.d4()}s=q.z
if(s==null){s=D.D()
q.z=s}o={func:1,ret:-1,args:[D.v]}
n=H.k(new B.ib(a,u),o)
if(s.b==null)s.saY(H.b([],[o]))
s=s.b;(s&&C.a).h(s,n)
V.lP(q)},
ib:function ib(a,b){this.a=a
this.b=b}}
var w=[C,H,J,P,W,O,E,Z,D,X,V,U,M,A,F,T,B]
hunkHelpers.setFunctionNamesIfNecessary(w)
var $={}
H.iu.prototype={}
J.a2.prototype={
A:function(a,b){return a===b},
gI:function(a){return H.ce(a)},
i:function(a){return"Instance of '"+H.bG(a)+"'"}}
J.eS.prototype={
i:function(a){return String(a)},
gI:function(a){return a?519018:218159},
$iI:1}
J.d4.prototype={
A:function(a,b){return null==b},
i:function(a){return"null"},
gI:function(a){return 0},
$iE:1}
J.d5.prototype={
gI:function(a){return 0},
i:function(a){return String(a)}}
J.fk.prototype={}
J.bl.prototype={}
J.aZ.prototype={
i:function(a){var u=a[$.k1()]
if(u==null)return this.eX(a)
return"JavaScript function for "+H.h(J.aF(u))},
$S:function(){return{func:1,opt:[,,,,,,,,,,,,,,,,]}},
$ibd:1}
J.aA.prototype={
h:function(a,b){H.A(b,H.u(a,0))
if(!!a.fixed$length)H.r(P.ab("add"))
a.push(b)},
k6:function(a,b){var u
if(!!a.fixed$length)H.r(P.ab("removeAt"))
u=a.length
if(b>=u)throw H.e(P.dt(b,null,null))
return a.splice(b,1)[0]},
N:function(a,b){var u
if(!!a.fixed$length)H.r(P.ab("remove"))
for(u=0;u<a.length;++u)if(J.U(a[u],b)){a.splice(u,1)
return!0}return!1},
a5:function(a,b){var u,t
H.f(b,"$ij",[H.u(a,0)],"$aj")
if(!!a.fixed$length)H.r(P.ab("addAll"))
for(u=b.length,t=0;t<b.length;b.length===u||(0,H.y)(b),++t)a.push(b[t])},
a2:function(a,b){var u,t
H.k(b,{func:1,ret:-1,args:[H.u(a,0)]})
u=a.length
for(t=0;t<u;++t){b.$1(a[t])
if(a.length!==u)throw H.e(P.ba(a))}},
l:function(a,b){var u,t
u=new Array(a.length)
u.fixed$length=Array
for(t=0;t<a.length;++t)this.Y(u,t,H.h(a[t]))
return u.join(b)},
jG:function(a){return this.l(a,"")},
jA:function(a,b,c){var u,t,s
H.k(b,{func:1,ret:P.I,args:[H.u(a,0)]})
u=a.length
for(t=0;t<u;++t){s=a[t]
if(b.$1(s))return s
if(a.length!==u)throw H.e(P.ba(a))}throw H.e(H.eQ())},
jz:function(a,b){return this.jA(a,b,null)},
a6:function(a,b){if(b<0||b>=a.length)return H.i(a,b)
return a[b]},
eU:function(a,b,c){var u=a.length
if(b>u)throw H.e(P.au(b,0,a.length,"start",null))
if(c<b||c>a.length)throw H.e(P.au(c,b,a.length,"end",null))
if(b===c)return H.b([],[H.u(a,0)])
return H.b(a.slice(b,c),[H.u(a,0)])},
gjy:function(a){if(a.length>0)return a[0]
throw H.e(H.eQ())},
gbD:function(a){var u=a.length
if(u>0)return a[u-1]
throw H.e(H.eQ())},
eQ:function(a,b,c,d,e){var u,t,s
u=H.u(a,0)
H.f(d,"$ij",[u],"$aj")
if(!!a.immutable$list)H.r(P.ab("setRange"))
P.ix(b,c,a.length,null,null,null)
t=c-b
if(t===0)return
H.f(d,"$ia",[u],"$aa")
u=J.i5(d)
if(e+t>u.gm(d))throw H.e(H.kB())
if(e<b)for(s=t-1;s>=0;--s)a[b+s]=u.k(d,e+s)
else for(s=0;s<t;++s)a[b+s]=u.k(d,e+s)},
bb:function(a,b,c,d){return this.eQ(a,b,c,d,0)},
dI:function(a,b){var u,t
H.k(b,{func:1,ret:P.I,args:[H.u(a,0)]})
u=a.length
for(t=0;t<u;++t){if(b.$1(a[t]))return!0
if(a.length!==u)throw H.e(P.ba(a))}return!1},
V:function(a,b){var u
for(u=0;u<a.length;++u)if(J.U(a[u],b))return!0
return!1},
i:function(a){return P.is(a,"[","]")},
gO:function(a){return new J.ae(a,a.length,0,[H.u(a,0)])},
gI:function(a){return H.ce(a)},
gm:function(a){return a.length},
sm:function(a,b){if(!!a.fixed$length)H.r(P.ab("set length"))
if(b<0)throw H.e(P.au(b,0,null,"newLength",null))
a.length=b},
k:function(a,b){if(b>=a.length||b<0)throw H.e(H.bP(a,b))
return a[b]},
Y:function(a,b,c){H.A(c,H.u(a,0))
if(!!a.immutable$list)H.r(P.ab("indexed set"))
if(b>=a.length||b<0)throw H.e(H.bP(a,b))
a[b]=c},
p:function(a,b){var u,t
u=[H.u(a,0)]
H.f(b,"$ia",u,"$aa")
t=C.d.p(a.length,b.gm(b))
u=H.b([],u)
this.sm(u,t)
this.bb(u,0,a.length,a)
this.bb(u,a.length,t,b)
return u},
$ij:1,
$ia:1}
J.it.prototype={}
J.ae.prototype={
gH:function(){return this.d},
B:function(){var u,t,s
u=this.a
t=u.length
if(this.b!==t)throw H.e(H.y(u))
s=this.c
if(s>=t){this.sdj(null)
return!1}this.sdj(u[s]);++this.c
return!0},
sdj:function(a){this.d=H.A(a,H.u(this,0))},
$iaI:1}
J.bh.prototype={
ki:function(a){var u
if(a>=-2147483648&&a<=2147483647)return a|0
if(isFinite(a)){u=a<0?Math.ceil(a):Math.floor(a)
return u+0}throw H.e(P.ab(""+a+".toInt()"))},
cG:function(a){var u,t
if(a>=0){if(a<=2147483647)return a|0}else if(a>=-2147483648){u=a|0
return a===u?u:u-1}t=Math.floor(a)
if(isFinite(t))return t
throw H.e(P.ab(""+a+".floor()"))},
aj:function(a){if(a>0){if(a!==1/0)return Math.round(a)}else if(a>-1/0)return 0-Math.round(0-a)
throw H.e(P.ab(""+a+".round()"))},
ew:function(a,b){var u,t
if(b>20)throw H.e(P.au(b,0,20,"fractionDigits",null))
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
p:function(a,b){if(typeof b!=="number")throw H.e(H.aV(b))
return a+b},
t:function(a,b){if(typeof b!=="number")throw H.e(H.aV(b))
return a-b},
v:function(a,b){if(typeof b!=="number")throw H.e(H.aV(b))
return a*b},
eL:function(a,b){var u=a%b
if(u===0)return 0
if(u>0)return u
if(b<0)return u-b
else return u+b},
f0:function(a,b){if((a|0)===a)if(b>=1||b<-1)return a/b|0
return this.dB(a,b)},
a1:function(a,b){return(a|0)===a?a/b|0:this.dB(a,b)},
dB:function(a,b){var u=a/b
if(u>=-2147483648&&u<=2147483647)return u|0
if(u>0){if(u!==1/0)return Math.floor(u)}else if(u>-1/0)return Math.ceil(u)
throw H.e(P.ab("Result of truncating division is "+H.h(u)+": "+H.h(a)+" ~/ "+b))},
bi:function(a,b){var u
if(a>0)u=this.ii(a,b)
else{u=b>31?31:b
u=a>>u>>>0}return u},
ii:function(a,b){return b>31?0:a>>>b},
$iw:1,
$ia7:1}
J.d3.prototype={$ix:1}
J.d2.prototype={}
J.aY.prototype={
cu:function(a,b){if(b<0)throw H.e(H.bP(a,b))
if(b>=a.length)H.r(H.bP(a,b))
return a.charCodeAt(b)},
aG:function(a,b){if(b>=a.length)throw H.e(H.bP(a,b))
return a.charCodeAt(b)},
p:function(a,b){if(typeof b!=="string")throw H.e(P.ik(b,null,null))
return a+b},
eT:function(a,b,c){var u
if(c>a.length)throw H.e(P.au(c,0,a.length,null,null))
u=c+b.length
if(u>a.length)return!1
return b===a.substring(c,u)},
bS:function(a,b){return this.eT(a,b,0)},
bd:function(a,b,c){if(c==null)c=a.length
if(b<0)throw H.e(P.dt(b,null,null))
if(b>c)throw H.e(P.dt(b,null,null))
if(c>a.length)throw H.e(P.dt(c,null,null))
return a.substring(b,c)},
bc:function(a,b){return this.bd(a,b,null)},
kl:function(a){return a.toLowerCase()},
v:function(a,b){var u,t
if(0>=b)return""
if(b===1||a.length===0)return a
if(b!==b>>>0)throw H.e(C.H)
for(u=a,t="";!0;){if((b&1)===1)t=u+t
b=b>>>1
if(b===0)break
u+=u}return t},
jS:function(a,b,c){var u=b-a.length
if(u<=0)return a
return this.v(c,u)+a},
aA:function(a,b){return this.jS(a,b," ")},
i:function(a){return a},
gI:function(a){var u,t,s
for(u=a.length,t=0,s=0;s<u;++s){t=536870911&t+a.charCodeAt(s)
t=536870911&t+((524287&t)<<10)
t^=t>>6}t=536870911&t+((67108863&t)<<3)
t^=t>>11
return 536870911&t+((16383&t)<<15)},
gm:function(a){return a.length},
$ije:1,
$im:1}
H.o.prototype={
gm:function(a){return this.a.length},
k:function(a,b){return C.j.cu(this.a,b)},
$adO:function(){return[P.x]},
$aP:function(){return[P.x]},
$aj:function(){return[P.x]},
$aa:function(){return[P.x]}}
H.ew.prototype={}
H.bB.prototype={
gO:function(a){return new H.c8(this,this.gm(this),0,[H.a4(this,"bB",0)])},
bM:function(a,b){return this.eW(0,H.k(b,{func:1,ret:P.I,args:[H.a4(this,"bB",0)]}))}}
H.c8.prototype={
gH:function(){return this.d},
B:function(){var u,t,s,r
u=this.a
t=J.i5(u)
s=t.gm(u)
if(this.b!==s)throw H.e(P.ba(u))
r=this.c
if(r>=s){this.saW(null)
return!1}this.saW(t.a6(u,r));++this.c
return!0},
saW:function(a){this.d=H.A(a,H.u(this,0))},
$iaI:1}
H.f2.prototype={
gO:function(a){return new H.f3(J.bV(this.a),this.b,this.$ti)},
gm:function(a){return J.bq(this.a)},
a6:function(a,b){return this.b.$1(J.ii(this.a,b))},
$aj:function(a,b){return[b]}}
H.f3.prototype={
B:function(){var u=this.b
if(u.B()){this.saW(this.c.$1(u.gH()))
return!0}this.saW(null)
return!1},
gH:function(){return this.a},
saW:function(a){this.a=H.A(a,H.u(this,1))},
$aaI:function(a,b){return[b]}}
H.f4.prototype={
gm:function(a){return J.bq(this.a)},
a6:function(a,b){return this.b.$1(J.ii(this.a,b))},
$abB:function(a,b){return[b]},
$aj:function(a,b){return[b]}}
H.cw.prototype={
gO:function(a){return new H.hm(J.bV(this.a),this.b,this.$ti)}}
H.hm.prototype={
B:function(){var u,t
for(u=this.a,t=this.b;u.B();)if(t.$1(u.gH()))return!0
return!1},
gH:function(){return this.a.gH()}}
H.bx.prototype={}
H.dO.prototype={}
H.dN.prototype={}
H.fo.prototype={}
H.fS.prototype={
af:function(a){var u,t,s
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
H.fi.prototype={
i:function(a){var u=this.b
if(u==null)return"NoSuchMethodError: "+H.h(this.a)
return"NoSuchMethodError: method not found: '"+u+"' on null"}}
H.eU.prototype={
i:function(a){var u,t
u=this.b
if(u==null)return"NoSuchMethodError: "+H.h(this.a)
t=this.c
if(t==null)return"NoSuchMethodError: method not found: '"+u+"' ("+H.h(this.a)+")"
return"NoSuchMethodError: method not found: '"+u+"' on '"+t+"' ("+H.h(this.a)+")"}}
H.h4.prototype={
i:function(a){var u=this.a
return u.length===0?"Error":"Error: "+u}}
H.ih.prototype={
$1:function(a){if(!!J.T(a).$ibc)if(a.$thrownJsError==null)a.$thrownJsError=this.a
return a},
$S:17}
H.e6.prototype={
i:function(a){var u,t
u=this.b
if(u!=null)return u
u=this.a
t=u!==null&&typeof u==="object"?u.stack:null
u=t==null?"":t
this.b=u
return u},
$iai:1}
H.c_.prototype={
i:function(a){return"Closure '"+H.bG(this).trim()+"'"},
$ibd:1,
gks:function(){return this},
$C:"$1",
$R:1,
$D:null}
H.fK.prototype={}
H.fE.prototype={
i:function(a){var u=this.$static_name
if(u==null)return"Closure of unknown static method"
return"Closure '"+H.bT(u)+"'"}}
H.bX.prototype={
A:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof H.bX))return!1
return this.a===b.a&&this.b===b.b&&this.c===b.c},
gI:function(a){var u,t
u=this.c
if(u==null)t=H.ce(this.a)
else t=typeof u!=="object"?J.bp(u):H.ce(u)
return(t^H.ce(this.b))>>>0},
i:function(a){var u=this.c
if(u==null)u=this.a
return"Closure '"+H.h(this.d)+"' of "+("Instance of '"+H.bG(u)+"'")}}
H.fU.prototype={
i:function(a){return this.a}}
H.em.prototype={
i:function(a){return this.a}}
H.ft.prototype={
i:function(a){return"RuntimeError: "+H.h(this.a)}}
H.aJ.prototype={
gm:function(a){return this.a},
gay:function(){return new H.d8(this,[H.u(this,0)])},
dQ:function(a){var u,t
if(typeof a==="string"){u=this.b
if(u==null)return!1
return this.dg(u,a)}else if(typeof a==="number"&&(a&0x3ffffff)===a){t=this.c
if(t==null)return!1
return this.dg(t,a)}else return this.jE(a)},
jE:function(a){var u=this.d
if(u==null)return!1
return this.cH(this.c2(u,J.bp(a)&0x3ffffff),a)>=0},
k:function(a,b){var u,t,s,r
if(typeof b==="string"){u=this.b
if(u==null)return
t=this.bg(u,b)
s=t==null?null:t.b
return s}else if(typeof b==="number"&&(b&0x3ffffff)===b){r=this.c
if(r==null)return
t=this.bg(r,b)
s=t==null?null:t.b
return s}else return this.jF(b)},
jF:function(a){var u,t,s
u=this.d
if(u==null)return
t=this.c2(u,J.bp(a)&0x3ffffff)
s=this.cH(t,a)
if(s<0)return
return t[s].b},
Y:function(a,b,c){var u,t,s,r,q,p
H.A(b,H.u(this,0))
H.A(c,H.u(this,1))
if(typeof b==="string"){u=this.b
if(u==null){u=this.cd()
this.b=u}this.d6(u,b,c)}else if(typeof b==="number"&&(b&0x3ffffff)===b){t=this.c
if(t==null){t=this.cd()
this.c=t}this.d6(t,b,c)}else{s=this.d
if(s==null){s=this.cd()
this.d=s}r=J.bp(b)&0x3ffffff
q=this.c2(s,r)
if(q==null)this.ck(s,r,[this.bX(b,c)])
else{p=this.cH(q,b)
if(p>=0)q[p].b=c
else q.push(this.bX(b,c))}}},
a2:function(a,b){var u,t
H.k(b,{func:1,ret:-1,args:[H.u(this,0),H.u(this,1)]})
u=this.e
t=this.r
for(;u!=null;){b.$2(u.a,u.b)
if(t!==this.r)throw H.e(P.ba(this))
u=u.c}},
d6:function(a,b,c){var u
H.A(b,H.u(this,0))
H.A(c,H.u(this,1))
u=this.bg(a,b)
if(u==null)this.ck(a,b,this.bX(b,c))
else u.b=c},
fm:function(){this.r=this.r+1&67108863},
bX:function(a,b){var u,t
u=new H.eX(H.A(a,H.u(this,0)),H.A(b,H.u(this,1)))
if(this.e==null){this.f=u
this.e=u}else{t=this.f
u.d=t
t.c=u
this.f=u}++this.a
this.fm()
return u},
cH:function(a,b){var u,t
if(a==null)return-1
u=a.length
for(t=0;t<u;++t)if(J.U(a[t].a,b))return t
return-1},
i:function(a){return P.ja(this)},
bg:function(a,b){return a[b]},
c2:function(a,b){return a[b]},
ck:function(a,b,c){a[b]=c},
fD:function(a,b){delete a[b]},
dg:function(a,b){return this.bg(a,b)!=null},
cd:function(){var u=Object.create(null)
this.ck(u,"<non-identifier-key>",u)
this.fD(u,"<non-identifier-key>")
return u},
$ij8:1}
H.eX.prototype={}
H.d8.prototype={
gm:function(a){return this.a.a},
gO:function(a){var u,t
u=this.a
t=new H.eY(u,u.r,this.$ti)
t.c=u.e
return t}}
H.eY.prototype={
gH:function(){return this.d},
B:function(){var u=this.a
if(this.b!==u.r)throw H.e(P.ba(u))
else{u=this.c
if(u==null){this.sd7(null)
return!1}else{this.sd7(u.a)
this.c=this.c.c
return!0}}},
sd7:function(a){this.d=H.A(a,H.u(this,0))},
$iaI:1}
H.i6.prototype={
$1:function(a){return this.a(a)},
$S:17}
H.i7.prototype={
$2:function(a,b){return this.a(a,b)},
$S:28}
H.i8.prototype={
$1:function(a){return this.a(H.J(a))},
$S:33}
H.eT.prototype={
i:function(a){return"RegExp/"+this.a+"/"},
$ije:1}
H.dk.prototype={$imd:1}
H.dh.prototype={
gm:function(a){return a.length},
$iaB:1,
$aaB:function(){}}
H.di.prototype={
k:function(a,b){H.cE(b,a,a.length)
return a[b]},
$abx:function(){return[P.w]},
$aP:function(){return[P.w]},
$ij:1,
$aj:function(){return[P.w]},
$ia:1,
$aa:function(){return[P.w]}}
H.dj.prototype={
$abx:function(){return[P.x]},
$aP:function(){return[P.x]},
$ij:1,
$aj:function(){return[P.x]},
$ia:1,
$aa:function(){return[P.x]}}
H.fb.prototype={
k:function(a,b){H.cE(b,a,a.length)
return a[b]}}
H.fc.prototype={
k:function(a,b){H.cE(b,a,a.length)
return a[b]}}
H.fd.prototype={
k:function(a,b){H.cE(b,a,a.length)
return a[b]}}
H.dl.prototype={
gm:function(a){return a.length},
k:function(a,b){H.cE(b,a,a.length)
return a[b]},
$ime:1}
H.fe.prototype={
gm:function(a){return a.length},
k:function(a,b){H.cE(b,a,a.length)
return a[b]}}
H.cA.prototype={}
H.cB.prototype={}
H.cC.prototype={}
H.cD.prototype={}
P.ho.prototype={
$1:function(a){var u,t
u=this.a
t=u.a
u.a=null
t.$0()},
$S:11}
P.hn.prototype={
$1:function(a){var u,t
this.a.a=H.k(a,{func:1,ret:-1})
u=this.b
t=this.c
u.firstChild?u.removeChild(t):u.appendChild(t)},
$S:29}
P.hp.prototype={
$0:function(){this.a.$0()},
$S:2}
P.hq.prototype={
$0:function(){this.a.$0()},
$S:2}
P.e7.prototype={
fi:function(a,b){if(self.setTimeout!=null)this.b=self.setTimeout(H.bO(new P.hW(this,b),0),a)
else throw H.e(P.ab("`setTimeout()` not found."))},
fj:function(a,b){if(self.setTimeout!=null)this.b=self.setInterval(H.bO(new P.hV(this,a,Date.now(),b),0),a)
else throw H.e(P.ab("Periodic timer."))},
$iaP:1}
P.hW.prototype={
$0:function(){var u=this.a
u.b=null
u.c=1
this.b.$0()},
$S:3}
P.hV.prototype={
$0:function(){var u,t,s,r
u=this.a
t=u.c+1
s=this.b
if(s>0){r=Date.now()-this.c
if(r>(t+1)*s)t=C.d.f0(r,s)}u.c=t
this.d.$1(u)},
$S:2}
P.aU.prototype={
jJ:function(a){if(this.c!==6)return!0
return this.b.b.cT(H.k(this.d,{func:1,ret:P.I,args:[P.H]}),a.a,P.I,P.H)},
jD:function(a){var u,t,s,r
u=this.e
t=P.H
s={futureOr:1,type:H.u(this,1)}
r=this.b.b
if(H.ee(u,{func:1,args:[P.H,P.ai]}))return H.iK(r.kb(u,a.a,a.b,null,t,P.ai),s)
else return H.iK(r.cT(H.k(u,{func:1,args:[P.H]}),a.a,null,t),s)}}
P.ax.prototype={
ev:function(a,b,c){var u,t,s,r
u=H.u(this,0)
H.k(a,{func:1,ret:{futureOr:1,type:c},args:[u]})
t=$.S
if(t!==C.l){t.toString
H.k(a,{func:1,ret:{futureOr:1,type:c},args:[u]})
if(b!=null)b=P.lh(b,t)}H.k(a,{func:1,ret:{futureOr:1,type:c},args:[u]})
s=new P.ax(0,$.S,[c])
r=b==null?1:3
this.d9(new P.aU(s,r,a,b,[u,c]))
return s},
kh:function(a,b){return this.ev(a,null,b)},
d9:function(a){var u,t
u=this.a
if(u<=1){a.a=H.d(this.c,"$iaU")
this.c=a}else{if(u===2){t=H.d(this.c,"$iax")
u=t.a
if(u<4){t.d9(a)
return}this.a=u
this.c=t.c}u=this.b
u.toString
P.i1(null,null,u,H.k(new P.hx(this,a),{func:1,ret:-1}))}},
dv:function(a){var u,t,s,r,q,p
u={}
u.a=a
if(a==null)return
t=this.a
if(t<=1){s=H.d(this.c,"$iaU")
this.c=a
if(s!=null){for(r=a;q=r.a,q!=null;r=q);r.a=s}}else{if(t===2){p=H.d(this.c,"$iax")
t=p.a
if(t<4){p.dv(a)
return}this.a=t
this.c=p.c}u.a=this.bh(a)
t=this.b
t.toString
P.i1(null,null,t,H.k(new P.hB(u,this),{func:1,ret:-1}))}},
ci:function(){var u=H.d(this.c,"$iaU")
this.c=null
return this.bh(u)},
bh:function(a){var u,t,s
for(u=a,t=null;u!=null;t=u,u=s){s=u.a
u.a=t}return t},
dc:function(a){var u,t,s
u=H.u(this,0)
H.iK(a,{futureOr:1,type:u})
t=this.$ti
if(H.cI(a,"$ic5",t,"$ac5"))if(H.cI(a,"$iax",t,null))P.jE(a,this)
else P.l6(a,this)
else{s=this.ci()
H.A(a,u)
this.a=4
this.c=a
P.cz(this,s)}},
dd:function(a,b){var u
H.d(b,"$iai")
u=this.ci()
this.a=8
this.c=new P.a8(a,b)
P.cz(this,u)},
$ic5:1}
P.hx.prototype={
$0:function(){P.cz(this.a,this.b)},
$S:2}
P.hB.prototype={
$0:function(){P.cz(this.b,this.a.a)},
$S:2}
P.hy.prototype={
$1:function(a){var u=this.a
u.a=0
u.dc(a)},
$S:11}
P.hz.prototype={
$2:function(a,b){H.d(b,"$iai")
this.a.dd(a,b)},
$1:function(a){return this.$2(a,null)},
$S:27}
P.hA.prototype={
$0:function(){this.a.dd(this.b,this.c)},
$S:2}
P.hE.prototype={
$0:function(){var u,t,s,r,q,p,o
u=null
try{r=this.c
u=r.b.b.eu(H.k(r.d,{func:1}),null)}catch(q){t=H.ar(q)
s=H.bR(q)
if(this.d){r=H.d(this.a.a.c,"$ia8").a
p=t
p=r==null?p==null:r===p
r=p}else r=!1
p=this.b
if(r)p.b=H.d(this.a.a.c,"$ia8")
else p.b=new P.a8(t,s)
p.a=!0
return}if(!!J.T(u).$ic5){if(u instanceof P.ax&&u.a>=4){if(u.a===8){r=this.b
r.b=H.d(u.c,"$ia8")
r.a=!0}return}o=this.a.a
r=this.b
r.b=u.kh(new P.hF(o),null)
r.a=!1}},
$S:3}
P.hF.prototype={
$1:function(a){return this.a},
$S:32}
P.hD.prototype={
$0:function(){var u,t,s,r,q,p,o
try{s=this.b
r=H.u(s,0)
q=H.A(this.c,r)
p=H.u(s,1)
this.a.b=s.b.b.cT(H.k(s.d,{func:1,ret:{futureOr:1,type:p},args:[r]}),q,{futureOr:1,type:p},r)}catch(o){u=H.ar(o)
t=H.bR(o)
s=this.a
s.b=new P.a8(u,t)
s.a=!0}},
$S:3}
P.hC.prototype={
$0:function(){var u,t,s,r,q,p,o,n
try{u=H.d(this.a.a.c,"$ia8")
r=this.c
if(r.jJ(u)&&r.e!=null){q=this.b
q.b=r.jD(u)
q.a=!1}}catch(p){t=H.ar(p)
s=H.bR(p)
r=H.d(this.a.a.c,"$ia8")
q=r.a
o=t
n=this.b
if(q==null?o==null:q===o)n.b=r
else n.b=new P.a8(t,s)
n.a=!0}},
$S:3}
P.dV.prototype={}
P.fF.prototype={
gm:function(a){var u,t,s,r
u={}
t=new P.ax(0,$.S,[P.x])
u.a=0
s=H.u(this,0)
r=H.k(new P.fH(u,this),{func:1,ret:-1,args:[s]})
H.k(new P.fI(u,t),{func:1,ret:-1})
W.a0(this.a,this.b,r,!1,s)
return t}}
P.fH.prototype={
$1:function(a){H.A(a,H.u(this.b,0));++this.a.a},
$S:function(){return{func:1,ret:P.E,args:[H.u(this.b,0)]}}}
P.fI.prototype={
$0:function(){this.b.dc(this.a.a)},
$S:2}
P.ci.prototype={}
P.fG.prototype={}
P.aP.prototype={}
P.a8.prototype={
i:function(a){return H.h(this.a)},
$ibc:1}
P.hZ.prototype={$ims:1}
P.i0.prototype={
$0:function(){var u,t,s
u=this.a
t=u.a
if(t==null){s=new P.dn()
u.a=s
u=s}else u=t
t=this.b
if(t==null)throw H.e(u)
s=H.e(u)
s.stack=t.i(0)
throw s},
$S:2}
P.hK.prototype={
kc:function(a){var u,t,s
H.k(a,{func:1,ret:-1})
try{if(C.l===$.S){a.$0()
return}P.jK(null,null,this,a,-1)}catch(s){u=H.ar(s)
t=H.bR(s)
P.i_(null,null,this,u,H.d(t,"$iai"))}},
kd:function(a,b,c){var u,t,s
H.k(a,{func:1,ret:-1,args:[c]})
H.A(b,c)
try{if(C.l===$.S){a.$1(b)
return}P.jL(null,null,this,a,b,-1,c)}catch(s){u=H.ar(s)
t=H.bR(s)
P.i_(null,null,this,u,H.d(t,"$iai"))}},
j5:function(a,b){return new P.hM(this,H.k(a,{func:1,ret:b}),b)},
cp:function(a){return new P.hL(this,H.k(a,{func:1,ret:-1}))},
dK:function(a,b){return new P.hN(this,H.k(a,{func:1,ret:-1,args:[b]}),b)},
eu:function(a,b){H.k(a,{func:1,ret:b})
if($.S===C.l)return a.$0()
return P.jK(null,null,this,a,b)},
cT:function(a,b,c,d){H.k(a,{func:1,ret:c,args:[d]})
H.A(b,d)
if($.S===C.l)return a.$1(b)
return P.jL(null,null,this,a,b,c,d)},
kb:function(a,b,c,d,e,f){H.k(a,{func:1,ret:d,args:[e,f]})
H.A(b,e)
H.A(c,f)
if($.S===C.l)return a.$2(b,c)
return P.li(null,null,this,a,b,c,d,e,f)}}
P.hM.prototype={
$0:function(){return this.a.eu(this.b,this.c)},
$S:function(){return{func:1,ret:this.c}}}
P.hL.prototype={
$0:function(){return this.a.kc(this.b)},
$S:3}
P.hN.prototype={
$1:function(a){var u=this.c
return this.a.kd(this.b,H.A(a,u),u)},
$S:function(){return{func:1,ret:-1,args:[this.c]}}}
P.hI.prototype={
gO:function(a){var u=new P.e0(this,this.r,this.$ti)
u.c=this.e
return u},
gm:function(a){return this.a},
V:function(a,b){var u,t
if(typeof b==="string"&&b!=="__proto__"){u=this.b
if(u==null)return!1
return H.d(u[b],"$ibL")!=null}else{t=this.fz(b)
return t}},
fz:function(a){var u=this.d
if(u==null)return!1
return this.c0(this.dk(u,a),a)>=0},
h:function(a,b){var u,t
H.A(b,H.u(this,0))
if(typeof b==="string"&&b!=="__proto__"){u=this.b
if(u==null){u=P.iC()
this.b=u}return this.d8(u,b)}else if(typeof b==="number"&&(b&1073741823)===b){t=this.c
if(t==null){t=P.iC()
this.c=t}return this.d8(t,b)}else return this.fn(b)},
fn:function(a){var u,t,s
H.A(a,H.u(this,0))
u=this.d
if(u==null){u=P.iC()
this.d=u}t=this.de(a)
s=u[t]
if(s==null)u[t]=[this.ce(a)]
else{if(this.c0(s,a)>=0)return!1
s.push(this.ce(a))}return!0},
N:function(a,b){if(typeof b==="number"&&(b&1073741823)===b)return this.hX(this.c,b)
else return this.hU(b)},
hU:function(a){var u,t,s
u=this.d
if(u==null)return!1
t=this.dk(u,a)
s=this.c0(t,a)
if(s<0)return!1
this.dC(t.splice(s,1)[0])
return!0},
d8:function(a,b){H.A(b,H.u(this,0))
if(H.d(a[b],"$ibL")!=null)return!1
a[b]=this.ce(b)
return!0},
hX:function(a,b){var u
if(a==null)return!1
u=H.d(a[b],"$ibL")
if(u==null)return!1
this.dC(u)
delete a[b]
return!0},
dm:function(){this.r=1073741823&this.r+1},
ce:function(a){var u,t
u=new P.bL(H.A(a,H.u(this,0)))
if(this.e==null){this.f=u
this.e=u}else{t=this.f
u.c=t
t.b=u
this.f=u}++this.a
this.dm()
return u},
dC:function(a){var u,t
u=a.c
t=a.b
if(u==null)this.e=t
else u.b=t
if(t==null)this.f=u
else t.c=u;--this.a
this.dm()},
de:function(a){return J.bp(a)&1073741823},
dk:function(a,b){return a[this.de(b)]},
c0:function(a,b){var u,t
if(a==null)return-1
u=a.length
for(t=0;t<u;++t)if(J.U(a[t].a,b))return t
return-1}}
P.bL.prototype={}
P.e0.prototype={
gH:function(){return this.d},
B:function(){var u=this.a
if(this.b!==u.r)throw H.e(P.ba(u))
else{u=this.c
if(u==null){this.sda(null)
return!1}else{this.sda(H.A(u.a,H.u(this,0)))
this.c=this.c.b
return!0}}},
sda:function(a){this.d=H.A(a,H.u(this,0))},
$iaI:1}
P.eZ.prototype={$ij:1,$ia:1}
P.P.prototype={
gO:function(a){return new H.c8(a,this.gm(a),0,[H.eg(this,a,"P",0)])},
a6:function(a,b){return this.k(a,b)},
kk:function(a,b){var u,t
u=H.b([],[H.eg(this,a,"P",0)])
C.a.sm(u,this.gm(a))
for(t=0;t<this.gm(a);++t)C.a.Y(u,t,this.k(a,t))
return u},
kj:function(a){return this.kk(a,!0)},
p:function(a,b){var u,t
u=[H.eg(this,a,"P",0)]
H.f(b,"$ia",u,"$aa")
t=H.b([],u)
C.a.sm(t,C.d.p(this.gm(a),b.gm(b)))
C.a.bb(t,0,this.gm(a),a)
C.a.bb(t,this.gm(a),t.length,b)
return t},
i:function(a){return P.is(a,"[","]")}}
P.f0.prototype={}
P.f1.prototype={
$2:function(a,b){var u,t
u=this.a
if(!u.a)this.b.a+=", "
u.a=!1
u=this.b
t=u.a+=H.h(a)
u.a=t+": "
u.a+=H.h(b)},
$S:13}
P.bC.prototype={
a2:function(a,b){var u,t
H.k(b,{func:1,ret:-1,args:[H.a4(this,"bC",0),H.a4(this,"bC",1)]})
for(u=J.bV(this.gay());u.B();){t=u.gH()
b.$2(t,this.k(0,t))}},
gm:function(a){return J.bq(this.gay())},
i:function(a){return P.ja(this)},
$iat:1}
P.hP.prototype={
a5:function(a,b){var u
for(u=J.bV(H.f(b,"$ij",this.$ti,"$aj"));u.B();)this.h(0,u.gH())},
i:function(a){return P.is(this,"{","}")},
a6:function(a,b){var u,t,s
if(b<0)H.r(P.au(b,0,null,"index",null))
for(u=P.la(this,this.r,H.u(this,0)),t=0;u.B();){s=u.d
if(b===t)return s;++t}throw H.e(P.bz(b,this,"index",null,t))},
$ij:1,
$ijn:1}
P.e1.prototype={}
P.c0.prototype={}
P.c1.prototype={}
P.ey.prototype={
$ac0:function(){return[P.m,[P.a,P.x]]}}
P.eN.prototype={
i:function(a){return this.a}}
P.eM.prototype={
fA:function(a,b,c){var u,t,s,r,q,p
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
default:p=null}if(p!=null){if(q==null)q=new P.b1("")
if(r>b)q.a+=C.j.bd(a,b,r)
q.a+=p
b=r+1}}if(q==null)return
if(c>b)q.a+=J.kn(a,b,c)
u=q.a
return u.charCodeAt(0)==0?u:u},
$ac1:function(){return[P.m,P.m]}}
P.h6.prototype={}
P.h7.prototype={
jf:function(a,b,c){var u,t,s
c=P.ix(b,c,a.length,null,null,null)
u=c-b
if(u===0)return new Uint8Array(0)
t=new Uint8Array(u*3)
s=new P.hX(t)
if(s.fM(a,b,c)!==c)s.dD(C.j.cu(a,c-1),0)
return new Uint8Array(t.subarray(0,H.ld(0,s.b,t.length)))},
je:function(a){return this.jf(a,0,null)},
$ac1:function(){return[P.m,[P.a,P.x]]}}
P.hX.prototype={
dD:function(a,b){var u,t,s,r,q
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
fM:function(a,b,c){var u,t,s,r,q,p,o
if(b!==c&&(C.j.cu(a,c-1)&64512)===55296)--c
for(u=this.c,t=u.length,s=b;s<c;++s){r=C.j.aG(a,s)
if(r<=127){q=this.b
if(q>=t)break
this.b=q+1
u[q]=r}else if((r&64512)===55296){if(this.b+3>=t)break
p=s+1
if(this.dD(r,C.j.aG(a,p)))s=p}else if(r<=2047){q=this.b
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
P.I.prototype={}
P.af.prototype={
A:function(a,b){if(b==null)return!1
return b instanceof P.af&&this.a===b.a&&!0},
gI:function(a){var u=this.a
return(u^C.d.bi(u,30))&1073741823},
i:function(a){var u,t,s,r,q,p,o,n
u=P.kv(H.kR(this))
t=P.cU(H.kP(this))
s=P.cU(H.kL(this))
r=P.cU(H.kM(this))
q=P.cU(H.kO(this))
p=P.cU(H.kQ(this))
o=P.kw(H.kN(this))
n=u+"-"+t+"-"+s+" "+r+":"+q+":"+p+"."+o
return n}}
P.w.prototype={}
P.aH.prototype={
p:function(a,b){return new P.aH(C.d.p(this.a,b.gfF()))},
t:function(a,b){return new P.aH(C.d.t(this.a,b.gfF()))},
A:function(a,b){if(b==null)return!1
return b instanceof P.aH&&this.a===b.a},
gI:function(a){return C.d.gI(this.a)},
i:function(a){var u,t,s,r,q
u=new P.ev()
t=this.a
if(t<0)return"-"+new P.aH(0-t).i(0)
s=u.$1(C.d.a1(t,6e7)%60)
r=u.$1(C.d.a1(t,1e6)%60)
q=new P.eu().$1(t%1e6)
return""+C.d.a1(t,36e8)+":"+H.h(s)+":"+H.h(r)+"."+H.h(q)}}
P.eu.prototype={
$1:function(a){if(a>=1e5)return""+a
if(a>=1e4)return"0"+a
if(a>=1000)return"00"+a
if(a>=100)return"000"+a
if(a>=10)return"0000"+a
return"00000"+a},
$S:14}
P.ev.prototype={
$1:function(a){if(a>=10)return""+a
return"0"+a},
$S:14}
P.bc.prototype={}
P.dn.prototype={
i:function(a){return"Throw of null."}}
P.az.prototype={
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
p=P.eA(this.b)
return r+q+": "+p}}
P.bH.prototype={
gc_:function(){return"RangeError"},
gbZ:function(){var u,t,s
u=this.e
if(u==null){u=this.f
t=u!=null?": Not less than or equal to "+H.h(u):""}else{s=this.f
if(s==null)t=": Not greater than or equal to "+H.h(u)
else if(s>u)t=": Not in range "+H.h(u)+".."+H.h(s)+", inclusive"
else t=s<u?": Valid value range is empty":": Only valid value is "+H.h(u)}return t}}
P.eP.prototype={
gc_:function(){return"RangeError"},
gbZ:function(){var u,t
u=H.a1(this.b)
if(typeof u!=="number")return u.aT()
if(u<0)return": index must not be negative"
t=this.f
if(t===0)return": no indices are valid"
return": index should be less than "+H.h(t)},
gm:function(a){return this.f}}
P.h5.prototype={
i:function(a){return"Unsupported operation: "+this.a}}
P.h3.prototype={
i:function(a){var u=this.a
return u!=null?"UnimplementedError: "+u:"UnimplementedError"}}
P.bJ.prototype={
i:function(a){return"Bad state: "+this.a}}
P.ep.prototype={
i:function(a){var u=this.a
if(u==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+P.eA(u)+"."}}
P.fj.prototype={
i:function(a){return"Out of Memory"},
$ibc:1}
P.dA.prototype={
i:function(a){return"Stack Overflow"},
$ibc:1}
P.er.prototype={
i:function(a){var u=this.a
return u==null?"Reading static variable during its initialization":"Reading static variable '"+u+"' during its initialization"}}
P.dY.prototype={
i:function(a){return"Exception: "+this.a}}
P.eI.prototype={
i:function(a){var u,t,s,r
u=this.a
t=""!==u?"FormatException: "+u:"FormatException"
s=this.b
r=s.length>78?C.j.bd(s,0,75)+"...":s
return t+"\n"+r}}
P.bd.prototype={}
P.x.prototype={}
P.j.prototype={
bM:function(a,b){var u=H.a4(this,"j",0)
return new H.cw(this,H.k(b,{func:1,ret:P.I,args:[u]}),[u])},
gm:function(a){var u,t
u=this.gO(this)
for(t=0;u.B();)++t
return t},
gaE:function(a){var u,t
u=this.gO(this)
if(!u.B())throw H.e(H.eQ())
t=u.gH()
if(u.B())throw H.e(H.kC())
return t},
a6:function(a,b){var u,t,s
if(b<0)H.r(P.au(b,0,null,"index",null))
for(u=this.gO(this),t=0;u.B();){s=u.gH()
if(b===t)return s;++t}throw H.e(P.bz(b,this,"index",null,t))},
i:function(a){return P.kA(this,"(",")")}}
P.aI.prototype={}
P.a.prototype={$ij:1}
P.E.prototype={
gI:function(a){return P.H.prototype.gI.call(this,this)},
i:function(a){return"null"}}
P.a7.prototype={}
P.H.prototype={constructor:P.H,$iH:1,
A:function(a,b){return this===b},
gI:function(a){return H.ce(this)},
i:function(a){return"Instance of '"+H.bG(this)+"'"},
toString:function(){return this.i(this)}}
P.ai.prototype={}
P.m.prototype={$ije:1}
P.b1.prototype={
gm:function(a){return this.a.length},
i:function(a){var u=this.a
return u.charCodeAt(0)==0?u:u}}
W.t.prototype={}
W.cM.prototype={
i:function(a){return String(a)},
$icM:1}
W.ei.prototype={
i:function(a){return String(a)}}
W.bW.prototype={$ibW:1}
W.b7.prototype={$ib7:1}
W.bs.prototype={
bO:function(a,b,c){if(c!=null)return this.fN(a,b,P.lp(c,null))
return this.fO(a,b)},
eF:function(a,b){return this.bO(a,b,null)},
fN:function(a,b,c){return a.getContext(b,c)},
fO:function(a,b){return a.getContext(b)},
$ibs:1,
$ij0:1}
W.bt.prototype={
fP:function(a,b,c,d,e){return a.getImageData(b,c,d,e)},
js:function(a,b,c,d,e,f){return a.drawImage(b,c,d,e,f)},
$ibt:1}
W.b8.prototype={
gm:function(a){return a.length}}
W.c2.prototype={
gm:function(a){return a.length}}
W.eq.prototype={}
W.as.prototype={$ias:1}
W.c3.prototype={
j0:function(a,b){return a.adoptNode(b)},
eG:function(a,b){return a.getElementById(b)}}
W.et.prototype={
i:function(a){return String(a)}}
W.cV.prototype={
ji:function(a,b){return a.createHTMLDocument(b)}}
W.cW.prototype={
i:function(a){return"Rectangle ("+H.h(a.left)+", "+H.h(a.top)+") "+H.h(a.width)+" x "+H.h(a.height)},
A:function(a,b){var u
if(b==null)return!1
if(!H.cI(b,"$iav",[P.a7],"$aav"))return!1
u=J.ak(b)
return a.left===u.gbE(b)&&a.top===u.gbK(b)&&a.width===u.gbN(b)&&a.height===u.gbB(b)},
gI:function(a){return W.jG(C.e.gI(a.left),C.e.gI(a.top),C.e.gI(a.width),C.e.gI(a.height))},
gdL:function(a){return a.bottom},
gbB:function(a){return a.height},
gbE:function(a){return a.left},
gbI:function(a){return a.right},
gbK:function(a){return a.top},
gbN:function(a){return a.width},
$iav:1,
$aav:function(){return[P.a7]}}
W.hs.prototype={
gm:function(a){return this.b.length},
k:function(a,b){var u=this.b
if(b<0||b>=u.length)return H.i(u,b)
return H.d(u[b],"$iN")},
h:function(a,b){J.iW(this.a,b)
return b},
gO:function(a){var u=this.kj(this)
return new J.ae(u,u.length,0,[H.u(u,0)])},
$aP:function(){return[W.N]},
$aj:function(){return[W.N]},
$aa:function(){return[W.N]}}
W.N.prototype={
gj4:function(a){return new W.ht(a)},
gdO:function(a){return new W.hs(a,a.children)},
gdP:function(a){var u,t,s,r
u=a.clientLeft
t=a.clientTop
s=a.clientWidth
r=a.clientHeight
if(typeof s!=="number")return s.aT()
if(s<0)s=-s*0
if(typeof r!=="number")return r.aT()
if(r<0)r=-r*0
return new P.av(u,t,s,r,[P.a7])},
i:function(a){return a.localName},
ae:function(a,b,c,d){var u,t,s,r
if(c==null){u=$.j5
if(u==null){u=H.b([],[W.ap])
t=new W.dm(u)
C.a.h(u,W.jF(null))
C.a.h(u,W.jH())
$.j5=t
d=t}else d=u
u=$.j4
if(u==null){u=new W.eb(d)
$.j4=u
c=u}else{u.a=d
c=u}}if($.aX==null){u=document
t=u.implementation
t=(t&&C.J).ji(t,"")
$.aX=t
$.iq=t.createRange()
t=$.aX
t.toString
t=t.createElement("base")
H.d(t,"$ibW")
t.href=u.baseURI
u=$.aX.head;(u&&C.L).C(u,t)}u=$.aX
if(u.body==null){u.toString
t=u.createElement("body")
u.body=H.d(t,"$ib7")}u=$.aX
if(!!this.$ib7)s=u.body
else{t=a.tagName
u.toString
s=u.createElement(t)
u=$.aX.body;(u&&C.n).C(u,s)}if("createContextualFragment" in window.Range.prototype&&!C.a.V(C.X,a.tagName)){u=$.iq;(u&&C.E).eN(u,s)
u=$.iq
r=(u&&C.E).jg(u,b)}else{s.innerHTML=b
r=$.aX.createDocumentFragment()
for(u=J.ak(r);t=s.firstChild,t!=null;)u.C(r,t)}u=$.aX.body
if(s==null?u!=null:s!==u)J.iX(s)
c.cY(r)
C.z.j0(document,r)
return r},
jh:function(a,b,c){return this.ae(a,b,c,null)},
eP:function(a,b,c,d){a.textContent=null
this.C(a,this.ae(a,b,c,d))},
eO:function(a,b){return this.eP(a,b,null,null)},
aS:function(a,b){return a.getAttribute(b)},
hV:function(a,b){return a.removeAttribute(b)},
$iN:1,
gke:function(a){return a.tagName}}
W.ex.prototype={
$1:function(a){return!!J.T(H.d(a,"$iz")).$iN},
$S:15}
W.l.prototype={$il:1}
W.bw.prototype={
fo:function(a,b,c,d){return a.addEventListener(b,H.bO(H.k(c,{func:1,args:[W.l]}),1),!1)},
$ibw:1}
W.eH.prototype={
gm:function(a){return a.length}}
W.d0.prototype={}
W.by.prototype={
gm:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.bz(b,a,null,null,null))
return a[b]},
a6:function(a,b){if(b<0||b>=a.length)return H.i(a,b)
return a[b]},
$iaB:1,
$aaB:function(){return[W.z]},
$aP:function(){return[W.z]},
$ij:1,
$aj:function(){return[W.z]},
$ia:1,
$aa:function(){return[W.z]},
$iby:1,
$aam:function(){return[W.z]}}
W.d1.prototype={}
W.be.prototype={$ibe:1,
gdS:function(a){return a.data}}
W.c7.prototype={$ic7:1,$ij0:1}
W.aK.prototype={$iaK:1}
W.da.prototype={
i:function(a){return String(a)},
$ida:1}
W.ca.prototype={}
W.a3.prototype={$ia3:1}
W.ad.prototype={
gaE:function(a){var u,t
u=this.a
t=u.childNodes.length
if(t===0)throw H.e(P.jp("No elements"))
if(t>1)throw H.e(P.jp("More than one element"))
return u.firstChild},
a5:function(a,b){var u,t,s,r,q
H.f(b,"$ij",[W.z],"$aj")
u=b.a
t=this.a
if(u!==t)for(s=u.childNodes.length,r=J.ak(t),q=0;q<s;++q)r.C(t,u.firstChild)
return},
gO:function(a){var u=this.a.childNodes
return new W.cZ(u,u.length,-1,[H.eg(C.Z,u,"am",0)])},
gm:function(a){return this.a.childNodes.length},
k:function(a,b){var u=this.a.childNodes
if(b<0||b>=u.length)return H.i(u,b)
return u[b]},
$aP:function(){return[W.z]},
$aj:function(){return[W.z]},
$aa:function(){return[W.z]}}
W.z.prototype={
k5:function(a){var u=a.parentNode
if(u!=null)J.eh(u,a)},
i:function(a){var u=a.nodeValue
return u==null?this.eV(a):u},
C:function(a,b){return a.appendChild(b)},
hW:function(a,b){return a.removeChild(b)},
$iz:1}
W.cc.prototype={
gm:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.bz(b,a,null,null,null))
return a[b]},
a6:function(a,b){if(b<0||b>=a.length)return H.i(a,b)
return a[b]},
$iaB:1,
$aaB:function(){return[W.z]},
$aP:function(){return[W.z]},
$ij:1,
$aj:function(){return[W.z]},
$ia:1,
$aa:function(){return[W.z]},
$aam:function(){return[W.z]}}
W.ds.prototype={
jg:function(a,b){return a.createContextualFragment(b)},
eN:function(a,b){return a.selectNodeContents(b)}}
W.fu.prototype={
gm:function(a){return a.length}}
W.bK.prototype={}
W.dB.prototype={
ae:function(a,b,c,d){var u,t
if("createContextualFragment" in window.Range.prototype)return this.bT(a,b,c,d)
u=W.kx("<table>"+b+"</table>",c,d)
t=document.createDocumentFragment()
t.toString
u.toString
new W.ad(t).a5(0,new W.ad(u))
return t}}
W.dC.prototype={
ae:function(a,b,c,d){var u,t,s,r
if("createContextualFragment" in window.Range.prototype)return this.bT(a,b,c,d)
u=document
t=u.createDocumentFragment()
u=C.p.ae(u.createElement("table"),b,c,d)
u.toString
u=new W.ad(u)
s=u.gaE(u)
s.toString
u=new W.ad(s)
r=u.gaE(u)
t.toString
r.toString
new W.ad(t).a5(0,new W.ad(r))
return t}}
W.fJ.prototype={
ae:function(a,b,c,d){var u,t,s
if("createContextualFragment" in window.Range.prototype)return this.bT(a,b,c,d)
u=document
t=u.createDocumentFragment()
u=C.p.ae(u.createElement("table"),b,c,d)
u.toString
u=new W.ad(u)
s=u.gaE(u)
t.toString
s.toString
new W.ad(t).a5(0,new W.ad(s))
return t}}
W.ck.prototype={$ick:1}
W.aQ.prototype={$iaQ:1}
W.aC.prototype={$iaC:1}
W.fR.prototype={
gm:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.bz(b,a,null,null,null))
return a[b]},
a6:function(a,b){if(b<0||b>=a.length)return H.i(a,b)
return a[b]},
$iaB:1,
$aaB:function(){return[W.aQ]},
$aP:function(){return[W.aQ]},
$ij:1,
$aj:function(){return[W.aQ]},
$ia:1,
$aa:function(){return[W.aQ]},
$aam:function(){return[W.aQ]}}
W.bk.prototype={}
W.hl.prototype={$ij0:1}
W.aT.prototype={
gjo:function(a){if(a.deltaY!==undefined)return a.deltaY
throw H.e(P.ab("deltaY is not supported"))},
gjn:function(a){if(a.deltaX!==undefined)return a.deltaX
throw H.e(P.ab("deltaX is not supported"))},
$iaT:1}
W.cx.prototype={
i1:function(a,b){return a.requestAnimationFrame(H.bO(H.k(b,{func:1,ret:-1,args:[P.a7]}),1))},
fG:function(a){if(!!(a.requestAnimationFrame&&a.cancelAnimationFrame))return;(function(b){var u=['ms','moz','webkit','o']
for(var t=0;t<u.length&&!b.requestAnimationFrame;++t){b.requestAnimationFrame=b[u[t]+'RequestAnimationFrame']
b.cancelAnimationFrame=b[u[t]+'CancelAnimationFrame']||b[u[t]+'CancelRequestAnimationFrame']}if(b.requestAnimationFrame&&b.cancelAnimationFrame)return
b.requestAnimationFrame=function(c){return window.setTimeout(function(){c(Date.now())},16)}
b.cancelAnimationFrame=function(c){clearTimeout(c)}})(a)}}
W.cy.prototype={$icy:1}
W.dX.prototype={
i:function(a){return"Rectangle ("+H.h(a.left)+", "+H.h(a.top)+") "+H.h(a.width)+" x "+H.h(a.height)},
A:function(a,b){var u
if(b==null)return!1
if(!H.cI(b,"$iav",[P.a7],"$aav"))return!1
u=J.ak(b)
return a.left===u.gbE(b)&&a.top===u.gbK(b)&&a.width===u.gbN(b)&&a.height===u.gbB(b)},
gI:function(a){return W.jG(C.e.gI(a.left),C.e.gI(a.top),C.e.gI(a.width),C.e.gI(a.height))},
gbB:function(a){return a.height},
gbN:function(a){return a.width}}
W.e2.prototype={
gm:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.bz(b,a,null,null,null))
return a[b]},
a6:function(a,b){if(b<0||b>=a.length)return H.i(a,b)
return a[b]},
$iaB:1,
$aaB:function(){return[W.z]},
$aP:function(){return[W.z]},
$ij:1,
$aj:function(){return[W.z]},
$ia:1,
$aa:function(){return[W.z]},
$aam:function(){return[W.z]}}
W.hr.prototype={
a2:function(a,b){var u,t,s,r,q,p
H.k(b,{func:1,ret:-1,args:[P.m,P.m]})
for(u=this.gay(),t=u.length,s=this.a,r=J.ak(s),q=0;q<u.length;u.length===t||(0,H.y)(u),++q){p=u[q]
b.$2(p,r.aS(s,p))}},
gay:function(){var u,t,s,r,q
u=this.a.attributes
t=H.b([],[P.m])
for(s=u.length,r=0;r<s;++r){if(r>=u.length)return H.i(u,r)
q=H.d(u[r],"$icy")
if(q.namespaceURI==null)C.a.h(t,q.name)}return t},
$abC:function(){return[P.m,P.m]},
$aat:function(){return[P.m,P.m]}}
W.ht.prototype={
k:function(a,b){return J.ij(this.a,H.J(b))},
gm:function(a){return this.gay().length}}
W.hu.prototype={}
W.iB.prototype={}
W.hv.prototype={}
W.hw.prototype={
$1:function(a){return this.a.$1(H.d(a,"$il"))},
$S:30}
W.bm.prototype={
f7:function(a){var u,t
u=$.iU()
if(u.a===0){for(t=0;t<262;++t)u.Y(0,C.W[t],W.lA())
for(t=0;t<12;++t)u.Y(0,C.u[t],W.lB())}},
aM:function(a){return $.kf().V(0,W.c4(a))},
an:function(a,b,c){var u,t,s
u=W.c4(a)
t=$.iU()
s=t.k(0,H.h(u)+"::"+b)
if(s==null)s=t.k(0,"*::"+b)
if(s==null)return!1
return H.iH(s.$4(a,b,c,this))},
$iap:1}
W.am.prototype={
gO:function(a){return new W.cZ(a,this.gm(a),-1,[H.eg(this,a,"am",0)])}}
W.dm.prototype={
aM:function(a){return C.a.dI(this.a,new W.fg(a))},
an:function(a,b,c){return C.a.dI(this.a,new W.ff(a,b,c))},
$iap:1}
W.fg.prototype={
$1:function(a){return H.d(a,"$iap").aM(this.a)},
$S:16}
W.ff.prototype={
$1:function(a){return H.d(a,"$iap").an(this.a,this.b,this.c)},
$S:16}
W.e5.prototype={
fh:function(a,b,c,d){var u,t,s
this.a.a5(0,c)
u=b.bM(0,new W.hQ())
t=b.bM(0,new W.hR())
this.b.a5(0,u)
s=this.c
s.a5(0,C.Y)
s.a5(0,t)},
aM:function(a){return this.a.V(0,W.c4(a))},
an:function(a,b,c){var u,t
u=W.c4(a)
t=this.c
if(t.V(0,H.h(u)+"::"+b))return this.d.j1(c)
else if(t.V(0,"*::"+b))return this.d.j1(c)
else{t=this.b
if(t.V(0,H.h(u)+"::"+b))return!0
else if(t.V(0,"*::"+b))return!0
else if(t.V(0,H.h(u)+"::*"))return!0
else if(t.V(0,"*::*"))return!0}return!1},
$iap:1}
W.hQ.prototype={
$1:function(a){return!C.a.V(C.u,H.J(a))},
$S:12}
W.hR.prototype={
$1:function(a){return C.a.V(C.u,H.J(a))},
$S:12}
W.hT.prototype={
an:function(a,b,c){if(this.f_(a,b,c))return!0
if(b==="template"&&c==="")return!0
if(J.ij(a,"template")==="")return this.e.V(0,b)
return!1}}
W.hU.prototype={
$1:function(a){return"TEMPLATE::"+H.h(H.J(a))},
$S:36}
W.hS.prototype={
aM:function(a){var u=J.T(a)
if(!!u.$icf)return!1
u=!!u.$in
if(u&&W.c4(a)==="foreignObject")return!1
if(u)return!0
return!1},
an:function(a,b,c){if(b==="is"||C.j.bS(b,"on"))return!1
return this.aM(a)},
$iap:1}
W.cZ.prototype={
B:function(){var u,t
u=this.c+1
t=this.b
if(u<t){this.sdl(J.kj(this.a,u))
this.c=u
return!0}this.sdl(null)
this.c=t
return!1},
gH:function(){return this.d},
sdl:function(a){this.d=H.A(a,H.u(this,0))},
$iaI:1}
W.ap.prototype={}
W.hO.prototype={$imf:1}
W.eb.prototype={
cY:function(a){new W.hY(this).$2(a,null)},
b_:function(a,b){if(b==null)J.iX(a)
else J.eh(b,a)},
i6:function(a,b){var u,t,s,r,q,p,o,n
u=!0
t=null
s=null
try{t=J.kl(a)
s=J.ij(t.a,"is")
r=function(c){if(!(c.attributes instanceof NamedNodeMap))return true
var m=c.childNodes
if(c.lastChild&&c.lastChild!==m[m.length-1])return true
if(c.children)if(!(c.children instanceof HTMLCollection||c.children instanceof NodeList))return true
var l=0
if(c.children)l=c.children.length
for(var k=0;k<l;k++){var j=c.children[k]
if(j.id=='attributes'||j.name=='attributes'||j.id=='lastChild'||j.name=='lastChild'||j.id=='children'||j.name=='children')return true}return false}(a)
u=r?!0:!(a.attributes instanceof NamedNodeMap)}catch(o){H.ar(o)}q="element unprintable"
try{q=J.aF(a)}catch(o){H.ar(o)}try{p=W.c4(a)
this.i5(H.d(a,"$iN"),b,u,q,p,H.d(t,"$iat"),H.J(s))}catch(o){if(H.ar(o) instanceof P.az)throw o
else{this.b_(a,b)
window
n="Removing corrupted element "+H.h(q)
if(typeof console!="undefined")window.console.warn(n)}}},
i5:function(a,b,c,d,e,f,g){var u,t,s,r,q,p
if(c){this.b_(a,b)
window
u="Removing element due to corrupted attributes on <"+d+">"
if(typeof console!="undefined")window.console.warn(u)
return}if(!this.a.aM(a)){this.b_(a,b)
window
u="Removing disallowed element <"+H.h(e)+"> from "+H.h(b)
if(typeof console!="undefined")window.console.warn(u)
return}if(g!=null)if(!this.a.an(a,"is",g)){this.b_(a,b)
window
u="Removing disallowed type extension <"+H.h(e)+' is="'+g+'">'
if(typeof console!="undefined")window.console.warn(u)
return}u=f.gay()
t=H.b(u.slice(0),[H.u(u,0)])
for(s=f.gay().length-1,u=f.a,r=J.ak(u);s>=0;--s){if(s>=t.length)return H.i(t,s)
q=t[s]
if(!this.a.an(a,J.ko(q),r.aS(u,q))){window
p="Removing disallowed attribute <"+H.h(e)+" "+q+'="'+H.h(r.aS(u,q))+'">'
if(typeof console!="undefined")window.console.warn(p)
r.aS(u,q)
r.hV(u,q)}}if(!!J.T(a).$ick)this.cY(a.content)},
$im0:1}
W.hY.prototype={
$2:function(a,b){var u,t,s,r,q,p
s=this.a
switch(a.nodeType){case 1:s.i6(a,b)
break
case 8:case 11:case 3:case 4:break
default:s.b_(a,b)}u=a.lastChild
for(s=a==null;null!=u;){t=null
try{t=u.previousSibling}catch(r){H.ar(r)
q=H.d(u,"$iz")
if(s){p=q.parentNode
if(p!=null)J.eh(p,q)}else J.eh(a,q)
u=null
t=a.lastChild}if(u!=null)this.$2(u,a)
u=H.d(t,"$iz")}},
$S:37}
W.dW.prototype={}
W.dZ.prototype={}
W.e_.prototype={}
W.e3.prototype={}
W.e4.prototype={}
W.e8.prototype={}
W.e9.prototype={}
W.ec.prototype={}
W.ed.prototype={}
P.ea.prototype={$ibe:1,
gdS:function(a){return this.a}}
P.i2.prototype={
$2:function(a,b){this.a[a]=b},
$S:13}
P.eE.prototype={
gc3:function(){var u,t,s
u=this.b
t=H.a4(u,"P",0)
s=W.N
return new H.f2(new H.cw(u,H.k(new P.eF(),{func:1,ret:P.I,args:[t]}),[t]),H.k(new P.eG(),{func:1,ret:s,args:[t]}),[t,s])},
h:function(a,b){J.iW(this.b.a,b)},
gm:function(a){return J.bq(this.gc3().a)},
k:function(a,b){var u=this.gc3()
return u.b.$1(J.ii(u.a,b))},
gO:function(a){var u=P.kI(this.gc3(),!1,W.N)
return new J.ae(u,u.length,0,[H.u(u,0)])},
$aP:function(){return[W.N]},
$aj:function(){return[W.N]},
$aa:function(){return[W.N]}}
P.eF.prototype={
$1:function(a){return!!J.T(H.d(a,"$iz")).$iN},
$S:15}
P.eG.prototype={
$1:function(a){return H.c(H.d(a,"$iz"),"$iN")},
$S:41}
P.hJ.prototype={
gbI:function(a){var u=this.a
if(typeof u!=="number")return u.p()
return H.A(u+this.c,H.u(this,0))},
gdL:function(a){var u=this.b
if(typeof u!=="number")return u.p()
return H.A(u+this.d,H.u(this,0))},
i:function(a){return"Rectangle ("+H.h(this.a)+", "+H.h(this.b)+") "+this.c+" x "+this.d},
A:function(a,b){var u,t,s,r
if(b==null)return!1
if(H.cI(b,"$iav",[P.a7],"$aav")){u=this.a
t=J.ak(b)
if(u==t.gbE(b)){s=this.b
if(s==t.gbK(b)){if(typeof u!=="number")return u.p()
r=H.u(this,0)
if(H.A(u+this.c,r)===t.gbI(b)){if(typeof s!=="number")return s.p()
u=H.A(s+this.d,r)===t.gdL(b)}else u=!1}else u=!1}else u=!1}else u=!1
return u},
gI:function(a){var u,t,s,r,q
u=this.a
t=J.bp(u)
s=this.b
r=J.bp(s)
if(typeof u!=="number")return u.p()
q=H.u(this,0)
u=C.d.gI(H.A(u+this.c,q))
if(typeof s!=="number")return s.p()
q=C.d.gI(H.A(s+this.d,q))
return P.l9(P.hH(P.hH(P.hH(P.hH(0,t),r),u),q))}}
P.av.prototype={
gbE:function(a){return this.a},
gbK:function(a){return this.b},
gbN:function(a){return this.c},
gbB:function(a){return this.d}}
P.cf.prototype={$icf:1}
P.n.prototype={
gdO:function(a){return new P.eE(a,new W.ad(a))},
ae:function(a,b,c,d){var u,t,s,r,q,p
u=H.b([],[W.ap])
C.a.h(u,W.jF(null))
C.a.h(u,W.jH())
C.a.h(u,new W.hS())
c=new W.eb(new W.dm(u))
t='<svg version="1.1">'+b+"</svg>"
u=document
s=u.body
r=(s&&C.n).jh(s,t,c)
q=u.createDocumentFragment()
r.toString
u=new W.ad(r)
p=u.gaE(u)
for(u=J.ak(q);s=p.firstChild,s!=null;)u.C(q,s)
return q},
$in:1}
P.cO.prototype={$icO:1}
P.d_.prototype={$id_:1}
P.dr.prototype={$idr:1}
P.bI.prototype={
dE:function(a,b){return a.activeTexture(b)},
dJ:function(a,b,c){return a.attachShader(b,c)},
ao:function(a,b,c){return a.bindBuffer(b,c)},
j6:function(a,b,c){return a.bindFramebuffer(b,c)},
aN:function(a,b,c){return a.bindTexture(b,c)},
j7:function(a,b,c){return a.blendFunc(b,c)},
dM:function(a,b,c,d){return a.bufferData(b,c,d)},
j9:function(a,b){return a.clear(b)},
ja:function(a,b,c,d,e){return a.clearColor(b,c,d,e)},
jb:function(a,b){return a.clearDepth(b)},
jd:function(a,b){return a.compileShader(b)},
jj:function(a,b){return a.createShader(b)},
jl:function(a,b){return a.deleteProgram(b)},
jm:function(a,b){return a.deleteShader(b)},
jp:function(a,b){return a.depthFunc(b)},
jq:function(a,b){return a.disable(b)},
dU:function(a,b){return a.disableVertexAttribArray(b)},
jr:function(a,b,c,d,e){return a.drawElements(b,c,H.a1(d),H.a1(e))},
cz:function(a,b){return a.enable(b)},
dX:function(a,b){return a.enableVertexAttribArray(b)},
eB:function(a,b,c){return a.getActiveAttrib(b,c)},
eC:function(a,b,c){return a.getActiveUniform(b,c)},
eD:function(a,b,c){return a.getAttribLocation(b,c)},
cX:function(a,b){return a.getParameter(b)},
eH:function(a,b){return a.getProgramInfoLog(b)},
bP:function(a,b,c){return a.getProgramParameter(b,c)},
eI:function(a,b){return a.getShaderInfoLog(b)},
eJ:function(a,b,c){return a.getShaderParameter(b,c)},
eK:function(a,b,c){return a.getUniformLocation(b,c)},
jH:function(a,b){return a.linkProgram(b)},
k_:function(a,b,c){return a.pixelStorei(b,c)},
eS:function(a,b,c){return a.shaderSource(b,c)},
kg:function(a,b,c,d,e,f,g,h,i,j){var u,t
u=J.T(g)
if(!!u.$ibe)t=!0
else t=!1
if(t){this.im(a,b,c,d,e,f,P.lq(g))
return}if(!!u.$ic7)u=!0
else u=!1
if(u){this.io(a,b,c,d,e,f,g)
return}throw H.e(P.kp("Incorrect number or type of arguments"))},
kf:function(a,b,c,d,e,f,g){return this.kg(a,b,c,d,e,f,g,null,null,null)},
im:function(a,b,c,d,e,f,g){return a.texImage2D(b,c,d,e,f,g)},
io:function(a,b,c,d,e,f,g){return a.texImage2D(b,c,d,e,f,g)},
bJ:function(a,b,c,d){return a.texParameteri(b,c,d)},
J:function(a,b,c){return a.uniform1f(b,c)},
P:function(a,b,c){return a.uniform1i(b,c)},
u:function(a,b,c,d,e){return a.uniform3f(b,c,d,e)},
ey:function(a,b,c,d){return a.uniformMatrix3fv(b,!1,d)},
ez:function(a,b,c,d){return a.uniformMatrix4fv(b,!1,d)},
cV:function(a,b){return a.useProgram(b)},
km:function(a,b,c,d,e,f,g){return a.vertexAttribPointer(b,c,d,!1,f,g)},
kn:function(a,b,c,d,e){return a.viewport(b,c,d,e)},
$ibI:1}
P.dv.prototype={$idv:1}
P.dD.prototype={$idD:1}
P.dM.prototype={$idM:1}
O.V.prototype={
bf:function(a){this.sfU(H.b([],[a]))
this.sdt(null)
this.sdn(null)
this.sdu(null)},
cZ:function(a,b,c){var u=H.a4(this,"V",0)
H.k(b,{func:1,ret:P.I,args:[[P.j,u]]})
u={func:1,ret:-1,args:[P.x,[P.j,u]]}
H.k(a,u)
H.k(c,u)
this.sdt(b)
this.sdn(a)
this.sdu(c)},
aU:function(a,b){return this.cZ(a,null,b)},
ds:function(a){var u
H.f(a,"$ij",[H.a4(this,"V",0)],"$aj")
u=this.b
if(u!=null)return u.$1(a)
return!0},
d2:function(a,b){var u
H.f(b,"$ij",[H.a4(this,"V",0)],"$aj")
u=this.c
if(u!=null)u.$2(a,b)},
gm:function(a){return this.a.length},
gO:function(a){var u=this.a
return new J.ae(u,u.length,0,[H.u(u,0)])},
a6:function(a,b){var u=this.a
if(b<0||b>=u.length)return H.i(u,b)
return u[b]},
h:function(a,b){var u,t,s
u=H.a4(this,"V",0)
H.A(b,u)
u=[u]
if(this.ds(H.b([b],u))){t=this.a
s=t.length
C.a.h(t,b)
this.d2(s,H.b([b],u))}},
a5:function(a,b){var u,t
H.f(b,"$ij",[H.a4(this,"V",0)],"$aj")
if(this.ds(b)){u=this.a
t=u.length
C.a.a5(u,b)
this.d2(t,b)}},
sfU:function(a){this.a=H.f(a,"$ia",[H.a4(this,"V",0)],"$aa")},
sdt:function(a){this.b=H.k(a,{func:1,ret:P.I,args:[[P.j,H.a4(this,"V",0)]]})},
sdn:function(a){this.c=H.k(a,{func:1,ret:-1,args:[P.x,[P.j,H.a4(this,"V",0)]]})},
sdu:function(a){this.d=H.k(a,{func:1,ret:-1,args:[P.x,[P.j,H.a4(this,"V",0)]]})},
$ij:1}
O.c9.prototype={
gm:function(a){return this.a.length},
gq:function(){var u=this.b
if(u==null){u=D.D()
this.b=u}return u},
f5:function(a){var u=this.b
if(u!=null)u.F(a)},
aF:function(){return this.f5(null)},
gZ:function(){var u=this.a
if(u.length>0)return C.a.gbD(u)
else return V.bD()},
bH:function(a){var u=this.a
if(a==null)C.a.h(u,V.bD())
else C.a.h(u,a)
this.aF()},
aB:function(){var u=this.a
if(u.length>0){u.pop()
this.aF()}},
sc5:function(a){this.a=H.f(a,"$ia",[V.ag],"$aa")}}
E.ek.prototype={}
E.a9.prototype={
sbR:function(a,b){var u,t,s
u=this.c
if(u!=b){this.c=b
this.d=b
this.e=null
if(u!=null)u.gq().N(0,this.geo())
t=this.c
if(t!=null)t.gq().h(0,this.geo())
s=new D.G("shape",u,this.c,this,[F.dw])
s.b=!0
this.aP(s)}},
ak:function(a){var u
for(u=this.y.a,u=new J.ae(u,u.length,0,[H.u(u,0)]);u.B();)u.d.ak(a)},
aa:function(a){var u,t
u=a.dx
C.a.h(u.a,u.gZ())
u.aF()
a.cP(this.f)
u=a.dy
t=(u&&C.a).gbD(u)
if(t!=null&&this.d!=null)t.er(a,this)
for(u=this.y.a,u=new J.ae(u,u.length,0,[H.u(u,0)]);u.B();)u.d.aa(a)
a.cO()
a.dx.aB()},
gq:function(){var u=this.z
if(u==null){u=D.D()
this.z=u}return u},
aP:function(a){var u=this.z
if(u!=null)u.F(a)},
a9:function(){return this.aP(null)},
ep:function(a){H.d(a,"$iv")
this.e=null
this.aP(a)},
jR:function(){return this.ep(null)},
en:function(a){this.aP(H.d(a,"$iv"))},
jO:function(){return this.en(null)},
jN:function(a,b){var u,t,s,r,q,p,o
H.f(b,"$ij",[E.a9],"$aj")
for(u=b.length,t=this.gem(),s={func:1,ret:-1,args:[D.v]},r=[s],q=0;q<b.length;b.length===u||(0,H.y)(b),++q){p=b[q]
if(p!=null){o=p.z
if(o==null){o=new D.bv()
o.sac(null)
o.saY(null)
o.c=null
o.d=0
p.z=o}H.k(t,s)
if(o.a==null)o.sac(H.b([],r))
o=o.a;(o&&C.a).h(o,t)}}this.a9()},
jQ:function(a,b){var u,t
H.f(b,"$ij",[E.a9],"$aj")
for(u=b.gO(b),t=this.gem();u.B();)u.gH().gq().N(0,t)
this.a9()},
i:function(a){var u,t
u=this.a
t=u.length
if(t<=0)return"Unnamed entity"
return u},
sf6:function(a,b){this.y=H.f(b,"$iV",[E.a9],"$aV")},
$iaN:1}
E.fp.prototype={
f2:function(a,b){var u,t
this.c=512
this.d=512
this.e=0
u=new P.af(Date.now(),!1)
this.f=u
this.r=u
this.x=u
this.y=0
this.z=null
this.Q=null
this.ch=null
this.cx=null
u=new O.c9()
t=[V.ag]
u.sc5(H.b([],t))
u.b=null
u.gq().h(0,new E.fq(this))
this.cy=u
u=new O.c9()
u.sc5(H.b([],t))
u.b=null
u.gq().h(0,new E.fr(this))
this.db=u
u=new O.c9()
u.sc5(H.b([],t))
u.b=null
u.gq().h(0,new E.fs(this))
this.dx=u
this.sil(H.b([],[O.bj]))
u=this.dy;(u&&C.a).h(u,null)
this.sih(new H.aJ([P.m,A.cg]))},
gk0:function(){var u=this.z
if(u==null){u=this.cy.gZ().v(0,this.db.gZ())
this.z=u}return u},
cP:function(a){var u,t
u=this.dy
t=a==null?(u&&C.a).gbD(u):a;(u&&C.a).h(u,t)},
cO:function(){var u=this.dy
if(u.length>1)u.pop()},
dH:function(a){var u=a.b
if(u.length===0)throw H.e(P.p("May not cache a shader with no name."))
if(this.fr.dQ(u))throw H.e(P.p('Shader cache already contains a shader by the name "'+u+'".'))
this.fr.Y(0,u,a)},
sil:function(a){this.dy=H.f(a,"$ia",[O.bj],"$aa")},
sih:function(a){this.fr=H.f(a,"$iat",[P.m,A.cg],"$aat")}}
E.fq.prototype={
$1:function(a){var u
H.d(a,"$iv")
u=this.a
u.z=null
u.ch=null},
$S:6}
E.fr.prototype={
$1:function(a){var u
H.d(a,"$iv")
u=this.a
u.z=null
u.Q=null
u.ch=null
u.cx=null},
$S:6}
E.fs.prototype={
$1:function(a){var u
H.d(a,"$iv")
u=this.a
u.ch=null
u.cx=null},
$S:6}
E.dI.prototype={
d5:function(a){H.d(a,"$iv")
this.es()},
d4:function(){return this.d5(null)},
gjC:function(){var u,t,s
u=Date.now()
t=C.d.a1(P.j3(0,0,0,u-this.cx.a,0,0).a,1000)/1000
if(t<=0)return 0
s=this.cy
this.cy=0
this.cx=new P.af(u,!1)
return s/t},
dz:function(){var u,t,s,r
u=window.devicePixelRatio
t=this.b.clientWidth
if(typeof t!=="number")return t.v()
if(typeof u!=="number")return H.B(u)
s=C.e.cG(t*u)
t=this.b.clientHeight
if(typeof t!=="number")return t.v()
r=C.e.cG(t*u)
t=this.b
if(t.width!==s||t.height!==r){t.width=s
t.height=r
P.js(C.q,this.gk9())}},
es:function(){var u,t
if(!this.ch){this.ch=!0
u=window
t=H.k(new E.fN(this),{func:1,ret:-1,args:[P.a7]})
C.G.fG(u)
C.G.i1(u,W.jO(t,P.a7))}},
k8:function(){var u,t,s,r,q
try{++this.cy
this.ch=!1
this.dz()
if(this.d!=null){s=this.e;++s.e
s.r=s.x
r=Date.now()
s.x=new P.af(r,!1)
s.y=P.j3(0,0,0,r-s.r.a,0,0).a*0.000001
r=s.cy
C.a.sm(r.a,0)
r.aF()
r=s.db
C.a.sm(r.a,0)
r.aF()
r=s.dx
C.a.sm(r.a,0)
r.aF()
r=s.dy;(r&&C.a).sm(r,0)
s=s.dy;(s&&C.a).h(s,null)
this.d.aa(this.e)}s=this.z
if(s!=null)s.F(null)}catch(q){u=H.ar(q)
t=H.bR(q)
P.iQ("Error: "+H.h(u))
P.iQ("Stack: "+H.h(t))
throw H.e(u)}}}
E.fN.prototype={
$1:function(a){var u
H.lL(a)
u=this.a
if(u.ch){u.ch=!1
u.k8()}},
$S:31}
Z.dT.prototype={$ilV:1}
Z.cP.prototype={
a_:function(a){var u,t,s
try{t=a.a
C.b.dX(t,this.e)
C.b.km(t,this.e,this.b,5126,!1,this.d,this.c)}catch(s){u=H.ar(s)
t=P.p('Failed to bind buffer attribute "'+this.a.i(0)+'": '+H.h(u))
throw H.e(t)}},
i:function(a){return"["+this.a.i(0)+", Size: "+this.b+", Offset: "+this.c+", Stride: "+this.d+", Attr: "+H.h(this.e)+"]"}}
Z.dU.prototype={$ilW:1}
Z.bZ.prototype={
ax:function(a){var u,t,s,r
for(u=this.c,t=u.length,s=0;s<t;++s){r=u[s]
if((r.a.a&a.a)!==0)return r}return},
a_:function(a){var u,t
u=this.a
C.b.ao(a.a,u.a,u.b)
for(u=this.c,t=u.length-1;t>=0;--t)u[t].a_(a)},
aQ:function(a){var u,t,s
for(u=this.c,t=u.length-1,s=a.a;t>=0;--t)C.b.dU(s,u[t].e)
C.b.ao(s,this.a.a,null)},
aa:function(a){var u,t,s,r,q,p
u=this.b.length
for(t=a.a,s=0;s<u;++s){r=this.b
if(s>=r.length)return H.i(r,s)
q=r[s]
r=q.c
p=r.a
C.b.ao(t,p,r.b)
C.b.jr(t,q.a,q.b,5123,0)
C.b.ao(t,p,null)}},
i:function(a){var u,t,s,r,q,p
u=[P.m]
t=H.b([],u)
for(s=this.b,r=s.length,q=0;q<s.length;s.length===r||(0,H.y)(s),++q)C.a.h(t,s[q].i(0))
p=H.b([],u)
for(u=this.c,s=u.length,q=0;q<s;++q)C.a.h(p,J.aF(u[q]))
return"Buffer:  ["+this.a.i(0)+"]\nIndices: "+C.a.l(t,", ")+"\nAttrs:   "+C.a.l(p,", ")},
sfQ:function(a){this.b=H.f(a,"$ia",[Z.bA],"$aa")},
$im2:1}
Z.bA.prototype={
i:function(a){return"Type: "+this.a+", Count: "+this.b+", ["+("Instance of '"+H.bG(this.c)+"'")+"]"}}
Z.aS.prototype={
gd_:function(a){var u,t
u=this.a
t=(u&$.aE().a)!==0?3:0
if((u&$.b4().a)!==0)t+=3
if((u&$.b3().a)!==0)t+=3
if((u&$.b5().a)!==0)t+=2
if((u&$.b6().a)!==0)t+=3
if((u&$.cJ().a)!==0)t+=3
if((u&$.cK().a)!==0)t+=4
if((u&$.bU().a)!==0)++t
return(u&$.b2().a)!==0?t+4:t},
j3:function(a){var u,t,s
u=$.aE()
t=this.a
if((t&u.a)!==0){if(0===a)return u
s=1}else s=0
u=$.b4()
if((t&u.a)!==0){if(s===a)return u;++s}u=$.b3()
if((t&u.a)!==0){if(s===a)return u;++s}u=$.b5()
if((t&u.a)!==0){if(s===a)return u;++s}u=$.b6()
if((t&u.a)!==0){if(s===a)return u;++s}u=$.cJ()
if((t&u.a)!==0){if(s===a)return u;++s}u=$.cK()
if((t&u.a)!==0){if(s===a)return u;++s}u=$.bU()
if((t&u.a)!==0){if(s===a)return u;++s}u=$.b2()
if((t&u.a)!==0)if(s===a)return u
return $.ke()},
A:function(a,b){if(b==null)return!1
if(!(b instanceof Z.aS))return!1
return this.a===b.a},
i:function(a){var u,t
u=H.b([],[P.m])
t=this.a
if((t&$.aE().a)!==0)C.a.h(u,"Pos")
if((t&$.b4().a)!==0)C.a.h(u,"Norm")
if((t&$.b3().a)!==0)C.a.h(u,"Binm")
if((t&$.b5().a)!==0)C.a.h(u,"Txt2D")
if((t&$.b6().a)!==0)C.a.h(u,"TxtCube")
if((t&$.cJ().a)!==0)C.a.h(u,"Clr3")
if((t&$.cK().a)!==0)C.a.h(u,"Clr4")
if((t&$.bU().a)!==0)C.a.h(u,"Weight")
if((t&$.b2().a)!==0)C.a.h(u,"Bending")
if(u.length<=0)return"None"
return C.a.l(u,"|")}}
D.en.prototype={}
D.bv.prototype={
h:function(a,b){var u={func:1,ret:-1,args:[D.v]}
H.k(b,u)
if(this.a==null)this.sac(H.b([],[u]))
u=this.a;(u&&C.a).h(u,b)},
N:function(a,b){var u,t
H.k(b,{func:1,ret:-1,args:[D.v]})
u=this.a
u=u==null?null:C.a.V(u,b)
if(u===!0){u=this.a
t=(u&&C.a).N(u,b)||!1}else t=!1
u=this.b
u=u==null?null:C.a.V(u,b)
if(u===!0){u=this.b
t=(u&&C.a).N(u,b)||t}return t},
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
if(a==null){a=new D.v(null)
a.b=!0
u.a=a
r=a}else r=a
if(this.d>0){if(this.c==null)this.c=r
return!0}if(!s)C.a.a2(t,new D.eB(u))
t=this.b
if(t!=null)C.a.a2(t,new D.eC(u))
u=this.b
if(u!=null)C.a.sm(u,0)
return!0},
jv:function(){return this.F(null)},
ka:function(a,b){var u,t
u=this.d
if(u>0){--u
this.d=u
if(u<=0)u=this.c!=null
else u=!1
if(u){t=this.c
this.c=null
this.F(t)}}},
aD:function(){return this.ka(!0,!1)},
sac:function(a){this.a=H.f(a,"$ia",[{func:1,ret:-1,args:[D.v]}],"$aa")},
saY:function(a){this.b=H.f(a,"$ia",[{func:1,ret:-1,args:[D.v]}],"$aa")}}
D.eB.prototype={
$1:function(a){var u
H.k(a,{func:1,ret:-1,args:[D.v]})
u=this.a.a
u.b
a.$1(u)},
$S:18}
D.eC.prototype={
$1:function(a){var u
H.k(a,{func:1,ret:-1,args:[D.v]})
u=this.a.a
u.b
a.$1(u)},
$S:18}
D.v.prototype={}
D.bf.prototype={}
D.bg.prototype={}
D.G.prototype={
i:function(a){return"ValueChanged: "+this.c+", "+H.h(this.d)+" => "+H.h(this.e)}}
X.cQ.prototype={
A:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.cQ))return!1
if(this.a!=b.a)return!1
if(!this.b.A(0,b.b))return!1
return!0},
i:function(a){return this.b.i(0)+H.h(this.a)}}
X.d6.prototype={
A:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.d6))return!1
if(this.a!=b.a)return!1
if(!this.b.A(0,b.b))return!1
return!0},
i:function(a){return this.b.i(0)+H.h(this.a)}}
X.eV.prototype={
jX:function(a){this.c=a.b
this.d.h(0,a.a)
return!1},
jT:function(a){this.c=a.b
this.d.N(0,a.a)
return!1},
shT:function(a){this.d=H.f(a,"$ijn",[P.x],"$ajn")}}
X.db.prototype={}
X.f_.prototype={
aX:function(a,b){var u,t,s,r,q,p,o,n
u=new P.af(Date.now(),!1)
t=this.x
s=b.a
r=this.Q
if(typeof s!=="number")return s.v()
q=b.b
p=this.ch
if(typeof q!=="number")return q.v()
o=new V.Z(t.a+s*r,t.b+q*p)
p=this.a.gaO()
n=new X.b_(a,V.b0(),this.x,this.y,this.z,p,o,u,this)
n.b=!0
this.z=u
this.x=o
return n},
cN:function(a,b){this.r=a.a
return!1},
b5:function(a,b){var u,t
u=this.r
t=a.a
if(typeof t!=="number")return t.eM()
if(typeof u!=="number")return u.eA()
this.r=(u&~t)>>>0
return!1},
b4:function(a,b){var u=this.d
if(u==null)return!1
u.F(this.aX(a,b))
return!0},
jY:function(a){var u,t,s,r,q,p,o,n
u=this.e
if(u==null)return!1
t=this.a.gaO()
s=this.x
r=Date.now()
q=a.a
p=this.cx
if(typeof q!=="number")return q.v()
o=a.b
n=this.cy
if(typeof o!=="number")return o.v()
r=new X.cb(new V.M(q*p,o*n),t,s,new P.af(r,!1),this)
r.b=!0
u.F(r)
return!0},
hr:function(a,b,c){var u,t,s
if(this.f==null)return
u=new P.af(Date.now(),!1)
t=this.f
s=new X.db(c,a,this.a.gaO(),b,u,this)
s.b=!0
t.F(s)
this.y=u
this.x=V.b0()}}
X.ao.prototype={
A:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.ao))return!1
if(this.a!==b.a)return!1
if(this.b!=b.b)return!1
if(this.c!=b.c)return!1
return!0},
i:function(a){var u=this.a?"Ctrl+":""
u+=this.b?"Alt+":""
return u+(this.c?"Shift+":"")}}
X.b_.prototype={}
X.fa.prototype={
c1:function(a,b,c){var u,t,s
u=new P.af(Date.now(),!1)
t=this.a.gaO()
s=new X.b_(a,this.r,this.x,this.y,this.z,t,b,u,this)
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
b5:function(a,b){var u,t
u=this.f
t=a.a
if(typeof t!=="number")return t.eM()
if(typeof u!=="number")return u.eA()
this.f=(u&~t)>>>0
u=this.c
if(u==null)return!1
u.F(this.c1(a,b,!0))
return!0},
b4:function(a,b){var u=this.d
if(u==null)return!1
u.F(this.c1(a,b,!1))
return!0},
jZ:function(a,b){var u,t,s,r,q,p,o
u=this.e
if(u==null)return!1
t=this.a.gaO()
s=Date.now()
r=a.a
q=this.Q
if(typeof r!=="number")return r.v()
p=a.b
o=this.ch
if(typeof p!=="number")return p.v()
s=new X.cb(new V.M(r*q,p*o),t,b,new P.af(s,!1),this)
s.b=!0
u.F(s)
return!0},
gdW:function(){var u=this.b
if(u==null){u=D.D()
this.b=u}return u},
gbL:function(){var u=this.c
if(u==null){u=D.D()
this.c=u}return u},
gel:function(){var u=this.d
if(u==null){u=D.D()
this.d=u}return u}}
X.cb.prototype={}
X.fm.prototype={}
X.dK.prototype={}
X.fQ.prototype={
aX:function(a,b){var u,t,s,r
H.f(a,"$ia",[V.Z],"$aa")
u=new P.af(Date.now(),!1)
t=a.length>0?a[0]:V.b0()
s=this.a.gaO()
r=new X.dK(a,this.f,this.r,this.x,this.y,s,t,u,this)
r.b=!0
if(b){this.x=u
this.f=t}this.y=u
this.r=t
return r},
jW:function(a){var u
H.f(a,"$ia",[V.Z],"$aa")
u=this.b
if(u==null)return!1
u.F(this.aX(a,!0))
return!0},
jU:function(a){var u
H.f(a,"$ia",[V.Z],"$aa")
u=this.c
if(u==null)return!1
u.F(this.aX(a,!0))
return!0},
jV:function(a){var u
H.f(a,"$ia",[V.Z],"$aa")
u=this.d
if(u==null)return!1
u.F(this.aX(a,!1))
return!0}}
X.dP.prototype={
gaO:function(){var u=this.a
return V.jl(0,0,C.o.gdP(u).c,C.o.gdP(u).d)},
dh:function(a){var u,t
u=a.keyCode
t=a.ctrlKey||a.metaKey
return new X.d6(u,new X.ao(t,a.altKey,a.shiftKey))},
aL:function(a){var u,t
u=this.b
t=a.ctrlKey||a.metaKey
u.c=new X.ao(t,a.altKey,a.shiftKey)},
cl:function(a){var u,t
u=this.b
t=a.ctrlKey||a.metaKey
u.c=new X.ao(t,a.altKey,a.shiftKey)},
au:function(a){var u,t,s,r,q
u=this.a.getBoundingClientRect()
t=a.pageX
s=a.pageY
r=u.left
if(typeof t!=="number")return t.t()
q=u.top
if(typeof s!=="number")return s.t()
return new V.Z(t-r,s-q)},
aZ:function(a){return new V.M(a.movementX,a.movementY)},
cg:function(a){var u,t,s,r,q,p,o,n
u=this.a.getBoundingClientRect()
t=H.b([],[V.Z])
for(s=a.touches,r=s.length,q=0;q<s.length;s.length===r||(0,H.y)(s),++q){p=s[q]
o=C.e.aj(p.pageX)
C.e.aj(p.pageY)
n=u.left
C.e.aj(p.pageX)
C.a.h(t,new V.Z(o-n,C.e.aj(p.pageY)-u.top))}return t},
as:function(a){var u,t
u=a.buttons
t=a.ctrlKey||a.metaKey
return new X.cQ(u,new X.ao(t,a.altKey,a.shiftKey))},
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
hl:function(a){this.f=!0},
h9:function(a){this.f=!1},
hf:function(a){H.d(a,"$ia3")
if(this.f&&this.c6(a))a.preventDefault()},
hp:function(a){var u
H.d(a,"$iaK")
if(!this.f)return
u=this.dh(a)
this.b.jX(u)},
hn:function(a){var u
H.d(a,"$iaK")
if(!this.f)return
u=this.dh(a)
this.b.jT(u)},
ht:function(a){var u,t,s,r
H.d(a,"$ia3")
u=this.a
u.focus()
this.f=!0
this.aL(a)
if(this.x){t=this.as(a)
s=this.aZ(a)
if(this.d.cN(t,s))a.preventDefault()
return}if(this.r){this.y=a
u.requestPointerLock()
return}t=this.as(a)
r=this.au(a)
if(this.c.cN(t,r))a.preventDefault()},
hx:function(a){var u,t,s
H.d(a,"$ia3")
this.aL(a)
u=this.as(a)
if(this.x){t=this.aZ(a)
if(this.d.b5(u,t))a.preventDefault()
return}if(this.r)return
s=this.au(a)
if(this.c.b5(u,s))a.preventDefault()},
hj:function(a){var u,t,s
H.d(a,"$ia3")
if(!this.c6(a)){this.aL(a)
u=this.as(a)
if(this.x){t=this.aZ(a)
if(this.d.b5(u,t))a.preventDefault()
return}if(this.r)return
s=this.au(a)
if(this.c.b5(u,s))a.preventDefault()}},
hv:function(a){var u,t,s
H.d(a,"$ia3")
this.aL(a)
u=this.as(a)
if(this.x){t=this.aZ(a)
if(this.d.b4(u,t))a.preventDefault()
return}if(this.r)return
s=this.au(a)
if(this.c.b4(u,s))a.preventDefault()},
hh:function(a){var u,t,s
H.d(a,"$ia3")
if(!this.c6(a)){this.aL(a)
u=this.as(a)
if(this.x){t=this.aZ(a)
if(this.d.b4(u,t))a.preventDefault()
return}if(this.r)return
s=this.au(a)
if(this.c.b4(u,s))a.preventDefault()}},
hz:function(a){var u,t
H.d(a,"$iaT")
this.aL(a)
u=new V.M((a&&C.F).gjn(a),C.F.gjo(a)).w(0,180)
if(this.x){if(this.d.jY(u))a.preventDefault()
return}if(this.r)return
t=this.au(a)
if(this.c.jZ(u,t))a.preventDefault()},
hB:function(a){var u,t,s
u=document.pointerLockElement===this.a
if(u!==this.x){this.x=u
t=this.as(this.y)
s=this.au(this.y)
this.d.hr(t,s,u)}},
hR:function(a){var u
H.d(a,"$iaC")
this.a.focus()
this.f=!0
this.cl(a)
u=this.cg(a)
if(this.e.jW(u))a.preventDefault()},
hN:function(a){var u
H.d(a,"$iaC")
this.cl(a)
u=this.cg(a)
if(this.e.jU(u))a.preventDefault()},
hP:function(a){var u
H.d(a,"$iaC")
this.cl(a)
u=this.cg(a)
if(this.e.jV(u))a.preventDefault()},
sfH:function(a){this.z=H.f(a,"$ia",[[P.ci,P.H]],"$aa")}}
D.bb.prototype={
gq:function(){var u=this.d
if(u==null){u=D.D()
this.d=u}return u},
ar:function(a){var u
H.d(a,"$iv")
u=this.d
if(u!=null)u.F(a)},
fa:function(){return this.ar(null)},
$iY:1,
$iaN:1}
D.Y.prototype={$iaN:1}
D.d7.prototype={
gq:function(){var u=this.Q
if(u==null){u=D.D()
this.Q=u}return u},
ar:function(a){var u=this.Q
if(u!=null)u.F(a)},
dr:function(a){var u
H.d(a,"$iv")
u=this.ch
if(u!=null)u.F(a)},
hq:function(){return this.dr(null)},
hD:function(a){var u,t,s
H.f(a,"$ij",[D.Y],"$aj")
for(u=a.length,t=0;t<a.length;a.length===u||(0,H.y)(a),++t){s=a[t]
if(s==null||this.f8(s))return!1}return!0},
h3:function(a,b){var u,t,s,r,q,p,o,n
u=D.Y
H.f(b,"$ij",[u],"$aj")
for(t=b.length,s=this.gdq(),r={func:1,ret:-1,args:[D.v]},q=[r],p=0;p<b.length;b.length===t||(0,H.y)(b),++p){o=H.d(b[p],"$iY")
if(o instanceof D.bb)C.a.h(this.e,o)
n=o.d
if(n==null){n=new D.bv()
n.sac(null)
n.saY(null)
n.c=null
n.d=0
o.d=n}H.k(s,r)
if(n.a==null)n.sac(H.b([],q))
n=n.a;(n&&C.a).h(n,s)}u=new D.bf(a,b,this,[u])
u.b=!0
this.ar(u)},
hH:function(a,b){var u,t,s,r
u=D.Y
H.f(b,"$ij",[u],"$aj")
for(t=b.gO(b),s=this.gdq();t.B();){r=t.gH()
C.a.N(this.e,r)
r.gq().N(0,s)}u=new D.bg(a,b,this,[u])
u.b=!0
this.ar(u)},
f8:function(a){var u=C.a.V(this.e,a)
return u},
sfE:function(a){this.e=H.f(a,"$ia",[D.bb],"$aa")},
shS:function(a){this.f=H.f(a,"$ia",[D.dq],"$aa")},
sij:function(a){this.r=H.f(a,"$ia",[D.dz],"$aa")},
six:function(a){this.x=H.f(a,"$ia",[D.dF],"$aa")},
siy:function(a){this.y=H.f(a,"$ia",[D.dG],"$aa")},
siz:function(a){this.z=H.f(a,"$ia",[D.dH],"$aa")},
$aj:function(){return[D.Y]},
$aV:function(){return[D.Y]}}
D.dq.prototype={$iY:1,$iaN:1}
D.dz.prototype={$iY:1,$iaN:1}
D.dF.prototype={$iY:1,$iaN:1}
D.dG.prototype={$iY:1,$iaN:1}
D.dH.prototype={$iY:1,$iaN:1}
V.W.prototype={
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
return new V.W(u,t,s)},
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
return new V.W(u,t,s)},
A:function(a,b){var u,t
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.W))return!1
u=b.a
t=$.L().a
if(!(Math.abs(u-this.a)<t))return!1
if(!(Math.abs(b.b-this.b)<t))return!1
if(!(Math.abs(b.c-this.c)<t))return!1
return!0},
i:function(a){return"["+V.O(this.a,3,0)+", "+V.O(this.b,3,0)+", "+V.O(this.c,3,0)+"]"}}
V.al.prototype={
p:function(a,b){var u,t,s,r
u=C.e.p(this.a,b.gcQ())
t=C.e.p(this.b,b.gbQ())
s=C.e.p(this.c,b.gcq())
r=C.e.p(this.d,b.gj2(b))
if(u<0)u=0
else if(u>1)u=1
if(t<0)t=0
else if(t>1)t=1
if(s<0)s=0
else if(s>1)s=1
if(r<0)r=0
else if(r>1)r=1
return new V.al(u,t,s,r)},
t:function(a,b){var u,t,s,r
u=C.e.t(this.a,b.gcQ())
t=C.e.t(this.b,b.gbQ())
s=C.e.t(this.c,b.gcq())
r=C.e.t(this.d,b.gj2(b))
if(u<0)u=0
else if(u>1)u=1
if(t<0)t=0
else if(t>1)t=1
if(s<0)s=0
else if(s>1)s=1
if(r<0)r=0
else if(r>1)r=1
return new V.al(u,t,s,r)},
A:function(a,b){var u,t
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.al))return!1
u=b.a
t=$.L().a
if(!(Math.abs(u-this.a)<t))return!1
if(!(Math.abs(b.b-this.b)<t))return!1
if(!(Math.abs(b.c-this.c)<t))return!1
if(!(Math.abs(b.d-this.d)<t))return!1
return!0},
i:function(a){return"["+V.O(this.a,3,0)+", "+V.O(this.b,3,0)+", "+V.O(this.c,3,0)+", "+V.O(this.d,3,0)+"]"}}
V.ez.prototype={}
V.dg.prototype={
ab:function(a,b){var u=H.b([this.a,this.d,this.r,this.b,this.e,this.x,this.c,this.f,this.y],[P.w])
return u},
A:function(a,b){var u,t
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.dg))return!1
u=b.a
t=$.L().a
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
u=[P.w]
t=V.bQ(H.b([this.a,this.d,this.r],u),3,0)
s=V.bQ(H.b([this.b,this.e,this.x],u),3,0)
r=V.bQ(H.b([this.c,this.f,this.y],u),3,0)
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
V.ag.prototype={
ab:function(a,b){var u=H.b([this.a,this.e,this.y,this.cx,this.b,this.f,this.z,this.cy,this.c,this.r,this.Q,this.db,this.d,this.x,this.ch,this.dx],[P.w])
return u},
cI:function(){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0
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
if(Math.abs(a7-0)<$.L().a)return V.bD()
a8=1/a7
a9=-r
b0=-d
return V.aM((t*a6-p*a5+m*a4)*a8,(-s*a6+o*a5-l*a4)*a8,(f*h-b*i+a1*j)*a8,(-e*h+a*i-a2*j)*a8,(a9*a6+p*a3-m*a0)*a8,(u*a6-o*a3+l*a0)*a8,(b0*h+b*k-a1*n)*a8,(g*h-a*k+a2*n)*a8,(r*a5-t*a3+m*c)*a8,(-u*a5+s*a3-l*c)*a8,(d*i-f*k+a1*q)*a8,(-g*i+e*k-a2*q)*a8,(a9*a4+t*a0-p*c)*a8,(u*a4-s*a0+o*c)*a8,(b0*j+f*n-b*q)*a8,(g*j-e*n+a*q)*a8)},
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
return V.aM(u*t+s*r+q*p+o*n,u*m+s*l+q*k+o*j,u*i+s*h+q*g+o*f,u*e+s*d+q*c+o*b,a*t+a0*r+a1*p+a2*n,a*m+a0*l+a1*k+a2*j,a*i+a0*h+a1*g+a2*f,a*e+a0*d+a1*c+a2*b,a3*t+a4*r+a5*p+a6*n,a3*m+a4*l+a5*k+a6*j,a3*i+a4*h+a5*g+a6*f,a3*e+a4*d+a5*c+a6*b,a7*t+a8*r+a9*p+b0*n,a7*m+a8*l+a9*k+b0*j,a7*i+a8*h+a9*g+b0*f,a7*e+a8*d+a9*c+b0*b)},
cU:function(a){var u,t,s
u=a.a
t=a.b
s=a.c
return new V.K(this.a*u+this.b*t+this.c*s,this.e*u+this.f*t+this.r*s,this.y*u+this.z*t+this.Q*s)},
ba:function(a){var u,t,s
u=a.a
t=a.b
s=a.c
return new V.X(this.a*u+this.b*t+this.c*s+this.d,this.e*u+this.f*t+this.r*s+this.x,this.y*u+this.z*t+this.Q*s+this.ch)},
A:function(a,b){var u,t
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.ag))return!1
u=b.a
t=$.L().a
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
ei:function(a,b,c){var u,t,s,r,q,p,o,n,m,l
u=[P.w]
t=V.bQ(H.b([this.a,this.e,this.y,this.cx],u),b,c)
s=V.bQ(H.b([this.b,this.f,this.z,this.cy],u),b,c)
r=V.bQ(H.b([this.c,this.r,this.Q,this.db],u),b,c)
q=V.bQ(H.b([this.d,this.x,this.ch,this.dx],u),b,c)
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
S:function(){return this.ei("",3,0)},
G:function(a){return this.ei(a,3,0)}}
V.Z.prototype={
p:function(a,b){return new V.Z(this.a+b.a,this.b+b.b)},
t:function(a,b){return new V.Z(this.a-b.a,this.b-b.b)},
A:function(a,b){var u,t
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.Z))return!1
u=b.a
t=$.L().a
if(!(Math.abs(u-this.a)<t))return!1
if(!(Math.abs(b.b-this.b)<t))return!1
return!0},
i:function(a){return"["+V.O(this.a,3,0)+", "+V.O(this.b,3,0)+"]"}}
V.X.prototype={
p:function(a,b){return new V.X(this.a+b.a,this.b+b.b,this.c+b.c)},
t:function(a,b){return new V.X(this.a-b.a,this.b-b.b,this.c-b.c)},
v:function(a,b){return new V.X(this.a*b,this.b*b,this.c*b)},
A:function(a,b){var u,t
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.X))return!1
u=b.a
t=$.L().a
if(!(Math.abs(u-this.a)<t))return!1
if(!(Math.abs(b.b-this.b)<t))return!1
if(!(Math.abs(b.c-this.c)<t))return!1
return!0},
i:function(a){return"["+V.O(this.a,3,0)+", "+V.O(this.b,3,0)+", "+V.O(this.c,3,0)+"]"}}
V.aO.prototype={
p:function(a,b){return new V.aO(C.d.p(this.a,b.gkp(b)),C.d.p(this.b,b.gkq(b)),C.d.p(this.c,b.gkr(b)),C.d.p(this.d,b.gko()))},
t:function(a,b){return new V.aO(C.d.t(this.a,b.gkp(b)),C.d.t(this.b,b.gkq(b)),C.d.t(this.c,b.gkr(b)),C.d.t(this.d,b.gko()))},
A:function(a,b){var u,t
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.aO))return!1
u=b.a
t=$.L().a
if(!(Math.abs(u-this.a)<t))return!1
if(!(Math.abs(b.b-this.b)<t))return!1
if(!(Math.abs(b.c-this.c)<t))return!1
if(!(Math.abs(b.d-this.d)<t))return!1
return!0},
i:function(a){return"["+V.O(this.a,3,0)+", "+V.O(this.b,3,0)+", "+V.O(this.c,3,0)+", "+V.O(this.d,3,0)+"]"}}
V.du.prototype={
ga8:function(){var u,t
u=this.c
t=this.d
if(u>t)return t
else return u},
A:function(a,b){var u,t
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.du))return!1
u=b.a
t=$.L().a
if(!(Math.abs(u-this.a)<t))return!1
if(!(Math.abs(b.b-this.b)<t))return!1
if(!(Math.abs(b.c-this.c)<t))return!1
if(!(Math.abs(b.d-this.d)<t))return!1
return!0},
i:function(a){return"["+V.O(this.a,3,0)+", "+V.O(this.b,3,0)+", "+V.O(this.c,3,0)+", "+V.O(this.d,3,0)+"]"}}
V.M.prototype={
cJ:function(a){return Math.sqrt(this.D(this))},
D:function(a){var u,t,s,r
u=this.a
t=a.a
if(typeof u!=="number")return u.v()
if(typeof t!=="number")return H.B(t)
s=this.b
r=a.b
if(typeof s!=="number")return s.v()
if(typeof r!=="number")return H.B(r)
return u*t+s*r},
p:function(a,b){var u,t,s
u=this.a
t=b.gjt(b)
if(typeof u!=="number")return u.p()
t=C.e.p(u,t)
u=this.b
s=b.gju(b)
if(typeof u!=="number")return u.p()
return new V.M(t,C.e.p(u,s))},
t:function(a,b){var u,t,s
u=this.a
t=b.gjt(b)
if(typeof u!=="number")return u.t()
t=C.e.t(u,t)
u=this.b
s=b.gju(b)
if(typeof u!=="number")return u.t()
return new V.M(t,C.e.t(u,s))},
v:function(a,b){var u,t
u=this.a
if(typeof u!=="number")return u.v()
t=this.b
if(typeof t!=="number")return t.v()
return new V.M(u*b,t*b)},
w:function(a,b){var u,t
if(Math.abs(b-0)<$.L().a){u=$.jw
if(u==null){u=new V.M(0,0)
$.jw=u}return u}u=this.a
if(typeof u!=="number")return u.w()
t=this.b
if(typeof t!=="number")return t.w()
return new V.M(u/b,t/b)},
A:function(a,b){var u,t,s
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.M))return!1
u=b.a
t=this.a
s=$.L()
s.toString
if(typeof u!=="number")return u.t()
if(typeof t!=="number")return H.B(t)
s=s.a
if(!(Math.abs(u-t)<s))return!1
u=b.b
t=this.b
if(typeof u!=="number")return u.t()
if(typeof t!=="number")return H.B(t)
if(!(Math.abs(u-t)<s))return!1
return!0},
i:function(a){return"["+V.O(this.a,3,0)+", "+V.O(this.b,3,0)+"]"}}
V.K.prototype={
cJ:function(a){return Math.sqrt(this.D(this))},
D:function(a){return this.a*a.a+this.b*a.b+this.c*a.c},
aw:function(a){var u,t,s,r,q,p
u=this.b
t=a.c
s=this.c
r=a.b
q=a.a
p=this.a
return new V.K(u*t-s*r,s*q-p*t,p*r-u*q)},
p:function(a,b){return new V.K(this.a+b.a,this.b+b.b,this.c+b.c)},
t:function(a,b){return new V.K(this.a-b.a,this.b-b.b,this.c-b.c)},
R:function(a){return new V.K(-this.a,-this.b,-this.c)},
v:function(a,b){return new V.K(this.a*b,this.b*b,this.c*b)},
w:function(a,b){if(Math.abs(b-0)<$.L().a)return V.cv()
return new V.K(this.a/b,this.b/b,this.c/b)},
ek:function(){var u=$.L().a
if(!(Math.abs(0-this.a)<u))return!1
if(!(Math.abs(0-this.b)<u))return!1
if(!(Math.abs(0-this.c)<u))return!1
return!0},
A:function(a,b){var u,t
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.K))return!1
u=b.a
t=$.L().a
if(!(Math.abs(u-this.a)<t))return!1
if(!(Math.abs(b.b-this.b)<t))return!1
if(!(Math.abs(b.c-this.c)<t))return!1
return!0},
i:function(a){return"["+V.O(this.a,3,0)+", "+V.O(this.b,3,0)+", "+V.O(this.c,3,0)+"]"}}
U.eo.prototype={
bY:function(a){var u=V.lU(a,this.c,this.b)
return u},
gq:function(){var u=this.y
if(u==null){u=D.D()
this.y=u}return u},
M:function(a){var u=this.y
if(u!=null)u.F(a)},
scW:function(a,b){},
scK:function(a){var u,t
u=this.b
if(!(Math.abs(u-a)<$.L().a)){this.b=a
if(a<this.c){this.c=a
this.d=a}else{t=this.d
if(a<t)this.d=this.bY(t)}u=new D.G("maximumLocation",u,this.b,this,[P.w])
u.b=!0
this.M(u)}},
scM:function(a){var u,t
u=this.c
if(!(Math.abs(u-a)<$.L().a)){this.c=a
if(this.b<a){this.b=a
this.d=a}else{t=this.d
if(a>t)this.d=this.bY(t)}u=new D.G("minimumLocation",u,this.c,this,[P.w])
u.b=!0
this.M(u)}},
sa7:function(a,b){var u
b=this.bY(b)
u=this.d
if(!(Math.abs(u-b)<$.L().a)){this.d=b
u=new D.G("location",u,b,this,[P.w])
u.b=!0
this.M(u)}},
scL:function(a){var u,t,s
u=this.e
if(!(Math.abs(u-a)<$.L().a)){this.e=a
t=this.f
s=-a
if(t<s)t=s
else if(t>a)t=a
this.f=t
u=new D.G("maximumVelocity",u,a,this,[P.w])
u.b=!0
this.M(u)}},
sT:function(a){var u,t
u=this.e
t=-u
if(a<t)a=t
else if(a>u)a=u
u=this.f
if(!(Math.abs(u-a)<$.L().a)){this.f=a
u=new D.G("velocity",u,a,this,[P.w])
u.b=!0
this.M(u)}},
scv:function(a){var u
if(a<0)a=0
else if(a>1)a=1
u=this.x
if(!(Math.abs(u-a)<$.L().a)){this.x=a
u=new D.G("dampening",u,a,this,[P.w])
u.b=!0
this.M(u)}},
ak:function(a){var u,t,s,r,q
u=this.f
t=$.L().a
if(!(Math.abs(u-0)<t)||!(Math.abs(this.r-0)<t)){s=u+this.r*a
u=this.e
r=-u
if(s<r)s=r
else if(s>u)s=u
this.sa7(0,this.d+s*a)
u=this.x
if(!(Math.abs(u-0)<$.L().a)){q=s*Math.pow(1-u,a)
if(s<0){if(q<s)q=s
else if(q>0)q=0}else if(q<0)q=0
else if(q>s)q=s
s=q}this.sT(s)}}}
U.cS.prototype={
gq:function(){var u=this.b
if(u==null){u=D.D()
this.b=u}return u},
aR:function(a,b){return this.a},
A:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.cS))return!1
return J.U(this.a,b.a)},
i:function(a){return"Constant: "+this.a.G("          ")}}
U.c6.prototype={
gq:function(){var u=this.e
if(u==null){u=D.D()
this.e=u}return u},
M:function(a){var u
H.d(a,"$iv")
u=this.e
if(u!=null)u.F(a)},
a4:function(){return this.M(null)},
h1:function(a,b){var u,t,s,r,q,p,o,n
u=U.a5
H.f(b,"$ij",[u],"$aj")
for(t=b.length,s=this.gaJ(),r={func:1,ret:-1,args:[D.v]},q=[r],p=0;p<b.length;b.length===t||(0,H.y)(b),++p){o=b[p]
if(o!=null){n=o.gq()
n.toString
H.k(s,r)
if(n.a==null)n.sac(H.b([],q))
n=n.a;(n&&C.a).h(n,s)}}u=new D.bf(a,b,this,[u])
u.b=!0
this.M(u)},
hF:function(a,b){var u,t,s
u=U.a5
H.f(b,"$ij",[u],"$aj")
for(t=b.gO(b),s=this.gaJ();t.B();)t.gH().gq().N(0,s)
u=new D.bg(a,b,this,[u])
u.b=!0
this.M(u)},
aR:function(a,b){var u,t,s,r
u=this.r
t=a.e
if(typeof u!=="number")return u.aT()
if(u<t){this.r=t
u=this.e
if(u!=null)++u.d
for(u=this.a,u=new J.ae(u,u.length,0,[H.u(u,0)]),s=null;u.B();){t=u.d
if(t!=null){r=t.aR(a,b)
if(r!=null)s=s==null?r:r.v(0,s)}}this.f=s==null?V.bD():s
u=this.e
if(u!=null)u.aD()}return this.f},
A:function(a,b){var u,t,s,r
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.c6))return!1
u=this.a.length
for(t=0;t<u;++t){s=this.a
if(t>=s.length)return H.i(s,t)
s=s[t]
r=b.a
if(t>=r.length)return H.i(r,t)
if(!J.U(s,r[t]))return!1}return!0},
i:function(a){return"Group"},
$aj:function(){return[U.a5]},
$aV:function(){return[U.a5]},
$ia5:1}
U.a5.prototype={}
U.dQ.prototype={
gq:function(){var u=this.cy
if(u==null){u=D.D()
this.cy=u}return u},
M:function(a){var u
H.d(a,"$iv")
u=this.cy
if(u!=null)u.F(a)},
a4:function(){return this.M(null)},
b0:function(a){if(this.a!=null)return!1
this.a=a
a.c.gdW().h(0,this.gc7())
this.a.c.gel().h(0,this.gc9())
this.a.c.gbL().h(0,this.gcb())
return!0},
c8:function(a){H.d(a,"$iv")
if(!J.U(this.c,this.a.b.c))return
this.y=!0
this.x=!0
this.z=this.b.d},
ca:function(a){var u,t,s,r,q,p,o
a=H.c(H.d(a,"$iv"),"$ib_")
if(!this.y)return
if(this.x){u=a.d.t(0,a.y)
u=new V.M(u.a,u.b)
u=u.D(u)
t=this.r
if(typeof t!=="number")return H.B(t)
if(u<t)return
this.x=!1}if(this.d){u=a.c
t=a.d.t(0,a.y)
u=new V.M(t.a,t.b).v(0,2).w(0,u.ga8())
this.Q=u
t=this.b
u=u.a
if(typeof u!=="number")return u.v()
s=this.e
if(typeof s!=="number")return H.B(s)
t.sT(u*10*s)}else{u=a.c
t=a.d
s=t.t(0,a.y)
r=new V.M(s.a,s.b).v(0,2).w(0,u.ga8())
s=this.b
q=r.a
if(typeof q!=="number")return q.R()
p=this.e
if(typeof p!=="number")return H.B(p)
o=this.z
if(typeof o!=="number")return H.B(o)
s.sa7(0,-q*p+o)
this.b.sT(0)
t=t.t(0,a.z)
this.Q=new V.M(t.a,t.b).v(0,2).w(0,u.ga8())}this.a4()},
cc:function(a){var u,t,s
H.d(a,"$iv")
if(!this.y)return
this.y=!1
if(this.x)return
u=this.Q
if(u.D(u)>0.0001){u=this.b
t=this.Q.a
if(typeof t!=="number")return t.v()
s=this.e
if(typeof s!=="number")return H.B(s)
u.sT(t*10*s)
this.a4()}},
aR:function(a,b){var u,t,s,r,q
u=this.ch
t=a.e
if(typeof u!=="number")return u.aT()
if(u<t){this.ch=t
s=a.y
this.b.ak(s)
u=this.b.d
r=Math.cos(u)
q=Math.sin(u)
this.cx=V.aM(r,-q,0,0,q,r,0,0,0,0,1,0,0,0,0,1)}return this.cx},
$ia5:1}
U.dR.prototype={
gq:function(){var u=this.fx
if(u==null){u=D.D()
this.fx=u}return u},
M:function(a){var u
H.d(a,"$iv")
u=this.fx
if(u!=null)u.F(a)},
a4:function(){return this.M(null)},
b0:function(a){var u,t
if(this.a!=null)return!1
this.a=a
a.c.gdW().h(0,this.gc7())
this.a.c.gel().h(0,this.gc9())
this.a.c.gbL().h(0,this.gcb())
u=this.a.d
t=u.f
if(t==null){t=D.D()
u.f=t
u=t}else u=t
u.h(0,this.gfV())
u=this.a.d
t=u.d
if(t==null){t=D.D()
u.d=t
u=t}else u=t
u.h(0,this.gfX())
u=this.a.e
t=u.b
if(t==null){t=D.D()
u.b=t
u=t}else u=t
u.h(0,this.giu())
u=this.a.e
t=u.d
if(t==null){t=D.D()
u.d=t
u=t}else u=t
u.h(0,this.gis())
u=this.a.e
t=u.c
if(t==null){t=D.D()
u.c=t
u=t}else u=t
u.h(0,this.giq())
return!0},
am:function(a){var u,t
u=a.a
t=a.b
if(this.f){if(typeof u!=="number")return u.R()
u=-u}if(this.r){if(typeof t!=="number")return t.R()
t=-t}return new V.M(u,t)},
c8:function(a){a=H.c(H.d(a,"$iv"),"$ib_")
if(!J.U(this.d,a.x.b))return
this.cx=!0
this.ch=!0
this.cy=this.c.d
this.db=this.b.d},
ca:function(a){var u,t,s,r,q,p,o
a=H.c(H.d(a,"$iv"),"$ib_")
if(!this.cx)return
if(this.ch){u=a.d.t(0,a.y)
u=new V.M(u.a,u.b)
u=u.D(u)
t=this.Q
if(typeof t!=="number")return H.B(t)
if(u<t)return
this.ch=!1}if(this.e){u=a.c
t=a.d.t(0,a.y)
u=this.am(new V.M(t.a,t.b).v(0,2).w(0,u.ga8()))
this.dx=u
t=this.c
u=u.a
if(typeof u!=="number")return u.R()
s=this.y
if(typeof s!=="number")return H.B(s)
t.sT(-u*10*s)
s=this.b
u=this.dx.b
if(typeof u!=="number")return u.R()
t=this.x
if(typeof t!=="number")return H.B(t)
s.sT(-u*10*t)}else{u=a.c
t=a.d
s=t.t(0,a.y)
r=this.am(new V.M(s.a,s.b).v(0,2).w(0,u.ga8()))
s=this.c
q=r.a
if(typeof q!=="number")return q.R()
p=this.y
if(typeof p!=="number")return H.B(p)
o=this.cy
if(typeof o!=="number")return H.B(o)
s.sa7(0,-q*p+o)
o=this.b
p=r.b
if(typeof p!=="number")return p.R()
q=this.x
if(typeof q!=="number")return H.B(q)
s=this.db
if(typeof s!=="number")return H.B(s)
o.sa7(0,-p*q+s)
this.b.sT(0)
this.c.sT(0)
t=t.t(0,a.z)
this.dx=this.am(new V.M(t.a,t.b).v(0,2).w(0,u.ga8()))}this.a4()},
cc:function(a){var u,t,s
H.d(a,"$iv")
if(!this.cx)return
this.cx=!1
if(this.ch)return
u=this.dx
if(u.D(u)>0.0001){u=this.c
t=this.dx.a
if(typeof t!=="number")return t.R()
s=this.y
if(typeof s!=="number")return H.B(s)
u.sT(-t*10*s)
s=this.b
t=this.dx.b
if(typeof t!=="number")return t.R()
u=this.x
if(typeof u!=="number")return H.B(u)
s.sT(-t*10*u)
this.a4()}},
fW:function(a){if(H.c(H.d(a,"$iv"),"$idb").x){this.ch=!0
this.cy=this.c.d
this.db=this.b.d}},
fY:function(a){var u,t,s,r,q,p,o
a=H.c(H.d(a,"$iv"),"$ib_")
if(!J.U(this.d,a.x.b))return
u=a.c
t=a.d
s=t.t(0,a.y)
r=this.am(new V.M(s.a,s.b).v(0,2).w(0,u.ga8()))
s=this.c
q=r.a
if(typeof q!=="number")return q.R()
p=this.y
if(typeof p!=="number")return H.B(p)
o=this.cy
if(typeof o!=="number")return H.B(o)
s.sa7(0,-q*p+o)
o=this.b
p=r.b
if(typeof p!=="number")return p.R()
q=this.x
if(typeof q!=="number")return H.B(q)
s=this.db
if(typeof s!=="number")return H.B(s)
o.sa7(0,-p*q+s)
this.b.sT(0)
this.c.sT(0)
t=t.t(0,a.z)
this.dx=this.am(new V.M(t.a,t.b).v(0,2).w(0,u.ga8()))
this.a4()},
iv:function(a){H.d(a,"$iv")
this.cx=!0
this.ch=!0
this.cy=this.c.d
this.db=this.b.d},
it:function(a){var u,t,s,r,q,p,o
a=H.c(H.d(a,"$iv"),"$idK")
if(!this.cx)return
if(this.ch){u=a.d.t(0,a.y)
u=new V.M(u.a,u.b)
u=u.D(u)
t=this.Q
if(typeof t!=="number")return H.B(t)
if(u<t)return
this.ch=!1}if(this.e){u=a.c
t=a.d.t(0,a.y)
u=this.am(new V.M(t.a,t.b).v(0,2).w(0,u.ga8()))
this.dx=u
t=this.c
u=u.a
if(typeof u!=="number")return u.R()
s=this.y
if(typeof s!=="number")return H.B(s)
t.sT(-u*10*s)
s=this.b
u=this.dx.b
if(typeof u!=="number")return u.R()
t=this.x
if(typeof t!=="number")return H.B(t)
s.sT(-u*10*t)}else{u=a.c
t=a.d
s=t.t(0,a.y)
r=this.am(new V.M(s.a,s.b).v(0,2).w(0,u.ga8()))
s=this.c
q=r.a
if(typeof q!=="number")return q.R()
p=this.y
if(typeof p!=="number")return H.B(p)
o=this.cy
if(typeof o!=="number")return H.B(o)
s.sa7(0,-q*p+o)
o=this.b
p=r.b
if(typeof p!=="number")return p.R()
q=this.x
if(typeof q!=="number")return H.B(q)
s=this.db
if(typeof s!=="number")return H.B(s)
o.sa7(0,-p*q+s)
this.b.sT(0)
this.c.sT(0)
t=t.t(0,a.z)
this.dx=this.am(new V.M(t.a,t.b).v(0,2).w(0,u.ga8()))}this.a4()},
ir:function(a){var u,t,s
H.d(a,"$iv")
if(!this.cx)return
this.cx=!1
if(this.ch)return
u=this.dx
if(u.D(u)>0.0001){u=this.c
t=this.dx.a
if(typeof t!=="number")return t.R()
s=this.y
if(typeof s!=="number")return H.B(s)
u.sT(-t*10*s)
s=this.b
t=this.dx.b
if(typeof t!=="number")return t.R()
u=this.x
if(typeof u!=="number")return H.B(u)
s.sT(-t*10*u)
this.a4()}},
aR:function(a,b){var u,t,s,r,q
u=this.dy
t=a.e
if(typeof u!=="number")return u.aT()
if(u<t){this.dy=t
s=a.y
this.c.ak(s)
this.b.ak(s)
u=this.b.d
r=Math.cos(u)
q=Math.sin(u)
u=V.aM(1,0,0,0,0,r,-q,0,0,q,r,0,0,0,0,1)
t=this.c.d
r=Math.cos(t)
q=Math.sin(t)
this.fr=u.v(0,V.aM(r,0,-q,0,0,1,0,0,q,0,r,0,0,0,0,1))}return this.fr},
$ia5:1}
U.dS.prototype={
gq:function(){var u=this.r
if(u==null){u=D.D()
this.r=u}return u},
M:function(a){var u=this.r
if(u!=null)u.F(a)},
b0:function(a){var u,t,s
if(this.a!=null)return!1
this.a=a
u=a.c
t=u.e
if(t==null){t=D.D()
u.e=t
u=t}else u=t
t=this.gfZ()
u.h(0,t)
u=this.a.d
s=u.e
if(s==null){s=D.D()
u.e=s
u=s}else u=s
u.h(0,t)
return!0},
h_:function(a){var u,t,s,r
H.d(a,"$iv")
if(!J.U(this.b,this.a.b.c))return
H.c(a,"$icb")
u=this.d
t=a.x.b
s=this.c
if(typeof t!=="number")return t.v()
r=u+t*s
if(u!==r){this.d=r
u=new D.G("zoom",u,r,this,[P.w])
u.b=!0
this.M(u)}},
aR:function(a,b){var u,t,s
u=this.e
t=a.e
if(u<t){this.e=t
s=Math.pow(10,this.d)
this.f=V.aM(s,0,0,0,0,s,0,0,0,0,s,0,0,0,0,1)}return this.f},
$ia5:1}
M.cR.prototype={
gq:function(){var u=this.f
if(u==null){u=D.D()
this.f=u}return u},
X:function(a){var u
H.d(a,"$iv")
u=this.f
if(u!=null)u.F(a)},
aV:function(){return this.X(null)},
hJ:function(a,b){var u,t,s,r,q,p,o,n
u=M.aq
H.f(b,"$ij",[u],"$aj")
for(t=b.length,s=this.gW(),r={func:1,ret:-1,args:[D.v]},q=[r],p=0;p<b.length;b.length===t||(0,H.y)(b),++p){o=b[p]
if(o!=null){n=o.gq()
n.toString
H.k(s,r)
if(n.a==null)n.sac(H.b([],q))
n=n.a;(n&&C.a).h(n,s)}}u=new D.bf(a,b,this,[u])
u.b=!0
this.X(u)},
hL:function(a,b){var u,t,s
u=M.aq
H.f(b,"$ij",[u],"$aj")
for(t=b.gO(b),s=this.gW();t.B();)t.gH().gq().N(0,s)
u=new D.bg(a,b,this,[u])
u.b=!0
this.X(u)},
aa:function(a){var u,t
if(this.e)return
this.e=!0
for(u=this.a,u=new J.ae(u,u.length,0,[H.u(u,0)]);u.B();){t=u.d
if(t!=null)t.aa(a)}this.e=!1},
$aj:function(){return[M.aq]},
$aV:function(){return[M.aq]},
$iaq:1}
M.cT.prototype={
gq:function(){var u=this.f
if(u==null){u=D.D()
this.f=u}return u},
X:function(a){var u
H.d(a,"$iv")
u=this.f
if(u!=null)u.F(a)},
aV:function(){return this.X(null)},
sb1:function(a){var u,t
if(a==null)a=new X.eO()
u=this.a
if(u!==a){if(u!=null)u.gq().N(0,this.gW())
t=this.a
this.a=a
a.gq().h(0,this.gW())
u=new D.G("camera",t,this.a,this,[X.br])
u.b=!0
this.X(u)}},
sb7:function(a,b){var u,t
if(b==null)b=X.ir(!0,!0,!1,null,2000,null,0)
u=this.b
if(u!==b){if(u!=null)u.gq().N(0,this.gW())
t=this.b
this.b=b
b.gq().h(0,this.gW())
u=new D.G("target",t,this.b,this,[X.cj])
u.b=!0
this.X(u)}},
sb8:function(a){var u,t
u=this.c
if(u!=a){if(u!=null)u.gq().N(0,this.gW())
t=this.c
this.c=a
if(a!=null)a.gq().h(0,this.gW())
u=new D.G("technique",t,this.c,this,[O.bj])
u.b=!0
this.X(u)}},
aa:function(a){a.cP(this.c)
this.b.a_(a)
this.a.a_(a)
this.d.ak(a)
this.d.aa(a)
this.a.aQ(a)
this.b.toString
a.cO()},
$iaq:1}
M.cX.prototype={
X:function(a){var u
H.d(a,"$iv")
u=this.x
if(u!=null)u.F(a)},
aV:function(){return this.X(null)},
hb:function(a,b){var u,t,s,r,q,p,o,n
u=E.a9
H.f(b,"$ij",[u],"$aj")
for(t=b.length,s=this.gW(),r={func:1,ret:-1,args:[D.v]},q=[r],p=0;p<b.length;b.length===t||(0,H.y)(b),++p){o=b[p]
if(o!=null){n=o.z
if(n==null){n=new D.bv()
n.sac(null)
n.saY(null)
n.c=null
n.d=0
o.z=n}H.k(s,r)
if(n.a==null)n.sac(H.b([],q))
n=n.a;(n&&C.a).h(n,s)}}u=new D.bf(a,b,this,[u])
u.b=!0
this.X(u)},
hd:function(a,b){var u,t,s
u=E.a9
H.f(b,"$ij",[u],"$aj")
for(t=b.gO(b),s=this.gW();t.B();)t.gH().gq().N(0,s)
u=new D.bg(a,b,this,[u])
u.b=!0
this.X(u)},
sb1:function(a){var u,t
if(a==null)a=X.jf(2000,1.0471975511965976,null,0.1,null)
u=this.a
if(u!==a){if(u!=null)u.gq().N(0,this.gW())
t=this.a
this.a=a
a.gq().h(0,this.gW())
u=new D.G("camera",t,this.a,this,[X.br])
u.b=!0
this.X(u)}},
sb7:function(a,b){var u,t
u=this.b
if(u!==b){if(u!=null)u.gq().N(0,this.gW())
t=this.b
this.b=b
b.gq().h(0,this.gW())
u=new D.G("target",t,this.b,this,[X.cj])
u.b=!0
this.X(u)}},
sb8:function(a){var u,t
u=this.c
if(u!=a){if(u!=null)u.gq().N(0,this.gW())
t=this.c
this.c=a
if(a!=null)a.gq().h(0,this.gW())
u=new D.G("technique",t,this.c,this,[O.bj])
u.b=!0
this.X(u)}},
gq:function(){var u=this.x
if(u==null){u=D.D()
this.x=u}return u},
aa:function(a){var u
a.cP(this.c)
this.b.a_(a)
this.a.a_(a)
u=this.c
if(u!=null)u.ak(a)
for(u=this.d.a,u=new J.ae(u,u.length,0,[H.u(u,0)]);u.B();)u.d.ak(a)
for(u=this.d.a,u=new J.ae(u,u.length,0,[H.u(u,0)]);u.B();)u.d.aa(a)
this.a.toString
a.cy.aB()
a.db.aB()
this.b.toString
a.cO()},
sfw:function(a,b){this.d=H.f(b,"$iV",[E.a9],"$aV")},
$iaq:1}
M.aq.prototype={}
A.cN.prototype={}
A.ej.prototype={
k:function(a,b){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<t;++s){r=u[s]
if(r.b===b)return r}return},
jw:function(){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<u.length;u.length===t||(0,H.y)(u),++s){r=u[s]
C.b.dX(r.a,r.c)}},
dT:function(){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<u.length;u.length===t||(0,H.y)(u),++s){r=u[s]
C.b.dU(r.a,r.c)}}}
A.de.prototype={
f1:function(a6,a7){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5
this.z=a6
u=new P.b1("")
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
a6.iD(u)
a6.iK(u)
a6.iE(u)
a6.iS(u)
a6.iT(u)
a6.iM(u)
a6.iX(u)
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
u=new P.b1("")
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
q.iH(u)
q.iC(u)
q.iF(u)
q.iI(u)
q.iQ(u)
o=q.dy
if(o){m=u.a+="// === Enviromental ===\n"
m+="\n"
u.a=m
m+="uniform samplerCube envSampler;\n"
u.a=m
m+="uniform int nullEnvTxt;\n"
u.a=m
u.a=m+"\n"
q.iO(u)
q.iP(u)}q.iL(u)
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
k=H.b([],[P.m])
if(q.b!==C.c)C.a.h(k,"ambient()")
if(q.c!==C.c)C.a.h(k,"diffuse(norm, litVec)")
if(q.d!==C.c)C.a.h(k,"invDiffuse(norm, litVec)")
if(q.e!==C.c)C.a.h(k,"specular(norm, litVec)")
m=u.a+="   return litClr*("+C.a.l(k," + ")+");\n"
m+="}\n"
u.a=m
u.a=m+"\n"
q.iG(u)
q.iN(u)
q.iR(u)
q.iU(u)
q.iV(u)
q.iW(u)
q.iJ(u)}m=u.a+="// === Main ===\n"
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
j=H.b([],[P.m])
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
this.ej(s.charCodeAt(0)==0?s:s,q.charCodeAt(0)==0?q:q)
this.Q=this.x.k(0,"posAttr")
this.cx=this.x.k(0,"normAttr")
this.ch=this.x.k(0,"binmAttr")
this.cy=this.x.k(0,"txt2DAttr")
this.db=this.x.k(0,"txtCubeAttr")
this.dx=this.x.k(0,"bendAttr")
if(a6.fr)this.id=H.c(this.y.n(0,"invViewMat"),"$iaj")
if(t)this.dy=H.c(this.y.n(0,"objMat"),"$iaj")
if(r)this.fr=H.c(this.y.n(0,"viewObjMat"),"$iaj")
this.fy=H.c(this.y.n(0,"projViewObjMat"),"$iaj")
if(a6.x2)this.k1=H.c(this.y.n(0,"txt2DMat"),"$icp")
if(a6.y1)this.k2=H.c(this.y.n(0,"txtCubeMat"),"$iaj")
if(a6.y2)this.k3=H.c(this.y.n(0,"colorMat"),"$iaj")
this.sfs(H.b([],[A.aj]))
t=a6.aq
if(t>0){this.k4=H.d(this.y.n(0,"bendMatCount"),"$iF")
for(h=0;h<t;++h){s=this.r1
r=this.y
q="bendValues["+h+"].mat"
g=r.k(0,q)
if(g==null)H.r(P.p("Required uniform value, "+q+", was not defined or used in shader."));(s&&C.a).h(s,H.c(g,"$iaj"))}}t=a6.a
if(t!==C.c){this.r2=H.c(this.y.n(0,"emissionClr"),"$iC")
switch(t){case C.c:break
case C.i:break
case C.f:this.rx=H.c(this.y.n(0,"emissionTxt"),"$iaa")
this.x1=H.c(this.y.n(0,"nullEmissionTxt"),"$iF")
break
case C.h:this.ry=H.c(this.y.n(0,"emissionTxt"),"$ia6")
this.x1=H.c(this.y.n(0,"nullEmissionTxt"),"$iF")
break}}t=a6.b
if(t!==C.c){this.x2=H.c(this.y.n(0,"ambientClr"),"$iC")
switch(t){case C.c:break
case C.i:break
case C.f:this.y1=H.c(this.y.n(0,"ambientTxt"),"$iaa")
this.aq=H.c(this.y.n(0,"nullAmbientTxt"),"$iF")
break
case C.h:this.y2=H.c(this.y.n(0,"ambientTxt"),"$ia6")
this.aq=H.c(this.y.n(0,"nullAmbientTxt"),"$iF")
break}}t=a6.c
if(t!==C.c){this.ai=H.c(this.y.n(0,"diffuseClr"),"$iC")
switch(t){case C.c:break
case C.i:break
case C.f:this.bm=H.c(this.y.n(0,"diffuseTxt"),"$iaa")
this.bn=H.c(this.y.n(0,"nullDiffuseTxt"),"$iF")
break
case C.h:this.dY=H.c(this.y.n(0,"diffuseTxt"),"$ia6")
this.bn=H.c(this.y.n(0,"nullDiffuseTxt"),"$iF")
break}}t=a6.d
if(t!==C.c){this.bo=H.c(this.y.n(0,"invDiffuseClr"),"$iC")
switch(t){case C.c:break
case C.i:break
case C.f:this.dZ=H.c(this.y.n(0,"invDiffuseTxt"),"$iaa")
this.bp=H.c(this.y.n(0,"nullInvDiffuseTxt"),"$iF")
break
case C.h:this.e_=H.c(this.y.n(0,"invDiffuseTxt"),"$ia6")
this.bp=H.c(this.y.n(0,"nullInvDiffuseTxt"),"$iF")
break}}t=a6.e
if(t!==C.c){this.bs=H.c(this.y.n(0,"shininess"),"$iR")
this.bq=H.c(this.y.n(0,"specularClr"),"$iC")
switch(t){case C.c:break
case C.i:break
case C.f:this.e0=H.c(this.y.n(0,"specularTxt"),"$iaa")
this.br=H.c(this.y.n(0,"nullSpecularTxt"),"$iF")
break
case C.h:this.e1=H.c(this.y.n(0,"specularTxt"),"$ia6")
this.br=H.c(this.y.n(0,"nullSpecularTxt"),"$iF")
break}}switch(a6.f){case C.c:break
case C.i:break
case C.f:this.e2=H.c(this.y.n(0,"bumpTxt"),"$iaa")
this.bt=H.c(this.y.n(0,"nullBumpTxt"),"$iF")
break
case C.h:this.e3=H.c(this.y.n(0,"bumpTxt"),"$ia6")
this.bt=H.c(this.y.n(0,"nullBumpTxt"),"$iF")
break}if(a6.dy){this.e4=H.c(this.y.n(0,"envSampler"),"$ia6")
this.e5=H.c(this.y.n(0,"nullEnvTxt"),"$iF")
t=a6.r
if(t!==C.c){this.bu=H.c(this.y.n(0,"reflectClr"),"$iC")
switch(t){case C.c:break
case C.i:break
case C.f:this.e6=H.c(this.y.n(0,"reflectTxt"),"$iaa")
this.bv=H.c(this.y.n(0,"nullReflectTxt"),"$iF")
break
case C.h:this.e7=H.c(this.y.n(0,"reflectTxt"),"$ia6")
this.bv=H.c(this.y.n(0,"nullReflectTxt"),"$iF")
break}}t=a6.x
if(t!==C.c){this.bw=H.c(this.y.n(0,"refraction"),"$iR")
this.bx=H.c(this.y.n(0,"refractClr"),"$iC")
switch(t){case C.c:break
case C.i:break
case C.f:this.e8=H.c(this.y.n(0,"refractTxt"),"$iaa")
this.by=H.c(this.y.n(0,"nullRefractTxt"),"$iF")
break
case C.h:this.e9=H.c(this.y.n(0,"refractTxt"),"$ia6")
this.by=H.c(this.y.n(0,"nullRefractTxt"),"$iF")
break}}}t=a6.y
if(t!==C.c){this.bz=H.c(this.y.n(0,"alpha"),"$iR")
switch(t){case C.c:break
case C.i:break
case C.f:this.ea=H.c(this.y.n(0,"alphaTxt"),"$iaa")
this.bA=H.c(this.y.n(0,"nullAlphaTxt"),"$iF")
break
case C.h:this.eb=H.c(this.y.n(0,"alphaTxt"),"$ia6")
this.bA=H.c(this.y.n(0,"nullAlphaTxt"),"$iF")
break}}this.sfb(H.b([],[A.co]))
this.sfc(H.b([],[A.cq]))
this.sfd(H.b([],[A.cr]))
this.sfe(H.b([],[A.cs]))
this.sff(H.b([],[A.ct]))
this.sfg(H.b([],[A.cu]))
if(a6.k2){t=a6.z
if(t>0){this.ec=H.d(this.y.n(0,"dirLightCount"),"$iF")
for(h=0;h<t;++h){s=this.y
r="dirLights["+h+"].viewDir"
g=s.k(0,r)
if(g==null)H.r(P.p("Required uniform value, "+r+", was not defined or used in shader."))
H.c(g,"$iC")
s=this.y
r="dirLights["+h+"].color"
f=s.k(0,r)
if(f==null)H.r(P.p("Required uniform value, "+r+", was not defined or used in shader."))
H.c(f,"$iC")
s=this.cA;(s&&C.a).h(s,new A.co(h,g,f))}}t=a6.Q
if(t>0){this.ed=H.d(this.y.n(0,"pntLightCount"),"$iF")
for(h=0;h<t;++h){s=this.y
r="pntLights["+h+"].point"
g=s.k(0,r)
if(g==null)H.r(P.p("Required uniform value, "+r+", was not defined or used in shader."))
H.c(g,"$iC")
s=this.y
r="pntLights["+h+"].viewPnt"
f=s.k(0,r)
if(f==null)H.r(P.p("Required uniform value, "+r+", was not defined or used in shader."))
H.c(f,"$iC")
s=this.y
r="pntLights["+h+"].color"
e=s.k(0,r)
if(e==null)H.r(P.p("Required uniform value, "+r+", was not defined or used in shader."))
H.c(e,"$iC")
s=this.y
r="pntLights["+h+"].att0"
d=s.k(0,r)
if(d==null)H.r(P.p("Required uniform value, "+r+", was not defined or used in shader."))
H.c(d,"$iR")
s=this.y
r="pntLights["+h+"].att1"
c=s.k(0,r)
if(c==null)H.r(P.p("Required uniform value, "+r+", was not defined or used in shader."))
H.c(c,"$iR")
s=this.y
r="pntLights["+h+"].att2"
b=s.k(0,r)
if(b==null)H.r(P.p("Required uniform value, "+r+", was not defined or used in shader."))
H.c(b,"$iR")
s=this.cB;(s&&C.a).h(s,new A.cq(h,g,f,e,d,c,b))}}t=a6.ch
if(t>0){this.ee=H.d(this.y.n(0,"spotLightCount"),"$iF")
for(h=0;h<t;++h){s=this.y
r="spotLights["+h+"].objPnt"
g=s.k(0,r)
if(g==null)H.r(P.p("Required uniform value, "+r+", was not defined or used in shader."))
H.c(g,"$iC")
s=this.y
r="spotLights["+h+"].objDir"
f=s.k(0,r)
if(f==null)H.r(P.p("Required uniform value, "+r+", was not defined or used in shader."))
H.c(f,"$iC")
s=this.y
r="spotLights["+h+"].viewPnt"
e=s.k(0,r)
if(e==null)H.r(P.p("Required uniform value, "+r+", was not defined or used in shader."))
H.c(e,"$iC")
s=this.y
r="spotLights["+h+"].color"
d=s.k(0,r)
if(d==null)H.r(P.p("Required uniform value, "+r+", was not defined or used in shader."))
H.c(d,"$iC")
s=this.y
r="spotLights["+h+"].cutoff"
c=s.k(0,r)
if(c==null)H.r(P.p("Required uniform value, "+r+", was not defined or used in shader."))
H.c(c,"$iR")
s=this.y
r="spotLights["+h+"].coneAngle"
b=s.k(0,r)
if(b==null)H.r(P.p("Required uniform value, "+r+", was not defined or used in shader."))
H.c(b,"$iR")
s=this.y
r="spotLights["+h+"].att0"
a=s.k(0,r)
if(a==null)H.r(P.p("Required uniform value, "+r+", was not defined or used in shader."))
H.c(a,"$iR")
s=this.y
r="spotLights["+h+"].att1"
a0=s.k(0,r)
if(a0==null)H.r(P.p("Required uniform value, "+r+", was not defined or used in shader."))
H.c(a0,"$iR")
s=this.y
r="spotLights["+h+"].att2"
a1=s.k(0,r)
if(a1==null)H.r(P.p("Required uniform value, "+r+", was not defined or used in shader."))
H.c(a1,"$iR")
s=this.cC;(s&&C.a).h(s,new A.cr(h,g,f,e,d,c,b,a,a0,a1))}}t=a6.cx
if(t>0){this.ef=H.d(this.y.n(0,"txtDirLightCount"),"$iF")
for(h=0;h<t;++h){s=this.y
r="txtDirLights["+h+"].objUp"
g=s.k(0,r)
if(g==null)H.r(P.p("Required uniform value, "+r+", was not defined or used in shader."))
H.c(g,"$iC")
s=this.y
r="txtDirLights["+h+"].objRight"
f=s.k(0,r)
if(f==null)H.r(P.p("Required uniform value, "+r+", was not defined or used in shader."))
H.c(f,"$iC")
s=this.y
r="txtDirLights["+h+"].objDir"
e=s.k(0,r)
if(e==null)H.r(P.p("Required uniform value, "+r+", was not defined or used in shader."))
H.c(e,"$iC")
s=this.y
r="txtDirLights["+h+"].viewDir"
d=s.k(0,r)
if(d==null)H.r(P.p("Required uniform value, "+r+", was not defined or used in shader."))
H.c(d,"$iC")
s=this.y
r="txtDirLights["+h+"].color"
c=s.k(0,r)
if(c==null)H.r(P.p("Required uniform value, "+r+", was not defined or used in shader."))
H.c(c,"$iC")
s=this.y
r="txtDirLights["+h+"].nullTxt"
b=s.k(0,r)
if(b==null)H.r(P.p("Required uniform value, "+r+", was not defined or used in shader."))
H.c(b,"$iF")
s=this.y
r="txtDirLightsTxt2D"+h
a=s.k(0,r)
if(a==null)H.r(P.p("Required uniform value, "+r+", was not defined or used in shader."))
H.c(a,"$iaa")
s=this.cD;(s&&C.a).h(s,new A.cs(h,g,f,e,d,c,a,b))}}t=a6.cy
if(t>0){this.eg=H.d(this.y.n(0,"txtPntLightCount"),"$iF")
for(h=0;h<t;++h){s=this.y
r="txtPntLights["+h+"].point"
g=s.k(0,r)
if(g==null)H.r(P.p("Required uniform value, "+r+", was not defined or used in shader."))
H.c(g,"$iC")
s=this.y
r="txtPntLights["+h+"].viewPnt"
f=s.k(0,r)
if(f==null)H.r(P.p("Required uniform value, "+r+", was not defined or used in shader."))
H.c(f,"$iC")
s=this.y
r="txtPntLights["+h+"].invViewRotMat"
e=s.k(0,r)
if(e==null)H.r(P.p("Required uniform value, "+r+", was not defined or used in shader."))
H.c(e,"$icp")
s=this.y
r="txtPntLights["+h+"].color"
d=s.k(0,r)
if(d==null)H.r(P.p("Required uniform value, "+r+", was not defined or used in shader."))
H.c(d,"$iC")
s=this.y
r="txtPntLights["+h+"].nullTxt"
c=s.k(0,r)
if(c==null)H.r(P.p("Required uniform value, "+r+", was not defined or used in shader."))
H.c(c,"$iF")
s=this.y
r="txtPntLights["+h+"].att0"
b=s.k(0,r)
if(b==null)H.r(P.p("Required uniform value, "+r+", was not defined or used in shader."))
H.c(b,"$iR")
s=this.y
r="txtPntLights["+h+"].att1"
a=s.k(0,r)
if(a==null)H.r(P.p("Required uniform value, "+r+", was not defined or used in shader."))
H.c(a,"$iR")
s=this.y
r="txtPntLights["+h+"].att2"
a0=s.k(0,r)
if(a0==null)H.r(P.p("Required uniform value, "+r+", was not defined or used in shader."))
H.c(a0,"$iR")
s=this.y
r="txtPntLightsTxtCube"+h
a1=s.k(0,r)
if(a1==null)H.r(P.p("Required uniform value, "+r+", was not defined or used in shader."))
H.c(a1,"$ia6")
s=this.cE;(s&&C.a).h(s,new A.ct(h,g,f,e,d,a1,c,b,a,a0))}}t=a6.db
if(t>0){this.eh=H.d(this.y.n(0,"txtSpotLightCount"),"$iF")
for(h=0;h<t;++h){s=this.y
r="txtSpotLights["+h+"].objPnt"
g=s.k(0,r)
if(g==null)H.r(P.p("Required uniform value, "+r+", was not defined or used in shader."))
H.c(g,"$iC")
s=this.y
r="txtSpotLights["+h+"].objDir"
f=s.k(0,r)
if(f==null)H.r(P.p("Required uniform value, "+r+", was not defined or used in shader."))
H.c(f,"$iC")
s=this.y
r="txtSpotLights["+h+"].objUp"
e=s.k(0,r)
if(e==null)H.r(P.p("Required uniform value, "+r+", was not defined or used in shader."))
H.c(e,"$iC")
s=this.y
r="txtSpotLights["+h+"].objRight"
d=s.k(0,r)
if(d==null)H.r(P.p("Required uniform value, "+r+", was not defined or used in shader."))
H.c(d,"$iC")
s=this.y
r="txtSpotLights["+h+"].viewPnt"
c=s.k(0,r)
if(c==null)H.r(P.p("Required uniform value, "+r+", was not defined or used in shader."))
H.c(c,"$iC")
s=this.y
r="txtSpotLights["+h+"].nullTxt"
b=s.k(0,r)
if(b==null)H.r(P.p("Required uniform value, "+r+", was not defined or used in shader."))
H.c(b,"$iF")
s=this.y
r="txtSpotLights["+h+"].color"
a=s.k(0,r)
if(a==null)H.r(P.p("Required uniform value, "+r+", was not defined or used in shader."))
H.c(a,"$iC")
s=this.y
r="txtSpotLights["+h+"].tuScalar"
a0=s.k(0,r)
if(a0==null)H.r(P.p("Required uniform value, "+r+", was not defined or used in shader."))
H.c(a0,"$iR")
s=this.y
r="txtSpotLights["+h+"].tvScalar"
a1=s.k(0,r)
if(a1==null)H.r(P.p("Required uniform value, "+r+", was not defined or used in shader."))
H.c(a1,"$iR")
s=this.y
r="txtSpotLights["+h+"].att0"
a2=s.k(0,r)
if(a2==null)H.r(P.p("Required uniform value, "+r+", was not defined or used in shader."))
H.c(a2,"$iR")
s=this.y
r="txtSpotLights["+h+"].att1"
a3=s.k(0,r)
if(a3==null)H.r(P.p("Required uniform value, "+r+", was not defined or used in shader."))
H.c(a3,"$iR")
s=this.y
r="txtSpotLights["+h+"].att2"
a4=s.k(0,r)
if(a4==null)H.r(P.p("Required uniform value, "+r+", was not defined or used in shader."))
H.c(a4,"$iR")
s=this.y
r="txtSpotLightsTxt2D"+h
a5=s.k(0,r)
if(a5==null)H.r(P.p("Required uniform value, "+r+", was not defined or used in shader."))
H.c(a5,"$iaa")
s=this.cF;(s&&C.a).h(s,new A.cu(h,g,f,e,d,c,a5,b,a,a0,a1,a2,a3,a4))}}}},
ah:function(a,b,c){C.b.P(b.a,b.d,1)},
ad:function(a,b,c){C.b.P(b.a,b.d,1)},
sfs:function(a){this.r1=H.f(a,"$ia",[A.aj],"$aa")},
sfb:function(a){this.cA=H.f(a,"$ia",[A.co],"$aa")},
sfc:function(a){this.cB=H.f(a,"$ia",[A.cq],"$aa")},
sfd:function(a){this.cC=H.f(a,"$ia",[A.cr],"$aa")},
sfe:function(a){this.cD=H.f(a,"$ia",[A.cs],"$aa")},
sff:function(a){this.cE=H.f(a,"$ia",[A.ct],"$aa")},
sfg:function(a){this.cF=H.f(a,"$ia",[A.cu],"$aa")}}
A.f7.prototype={
iD:function(a){var u,t,s
if(!this.x1)return
u=a.a+="struct BendingValue\n"
u+="{\n"
a.a=u
u+="   mat4 mat;\n"
a.a=u
u+="};\n"
a.a=u
a.a=u+"uniform int bendMatCount;\n"
u=a.a+="uniform BendingValue bendValues["+this.aq+"];\n"
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
iK:function(a){var u
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
iE:function(a){var u
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
iS:function(a){var u,t
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
iT:function(a){var u,t
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
iM:function(a){var u
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
iX:function(a){var u
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
at:function(a,b,c){var u
if(b===C.c)return
u=a.a+="uniform vec3 "+c+"Clr;\n"
if(b===C.i)return
if(0>=c.length)return H.i(c,0)
u+="uniform int null"+(c[0].toUpperCase()+C.j.bc(c,1))+"Txt;\n"
a.a=u
if(b===C.f)a.a=u+("uniform sampler2D "+c+"Txt;\n")
else if(b===C.h)a.a=u+("uniform samplerCube "+c+"Txt;\n")},
iH:function(a){var u,t
u=this.a
if(u===C.c)return
t=a.a+="// === Emission ===\n"
a.a=t+"\n"
this.at(a,u,"emission")
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
iC:function(a){var u,t
u=this.b
if(u===C.c)return
t=a.a+="// === Ambient ===\n"
a.a=t+"\n"
this.at(a,u,"ambient")
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
iF:function(a){var u,t
u=this.c
if(u===C.c)return
t=a.a+="// === Diffuse ===\n"
a.a=t+"\n"
this.at(a,u,"diffuse")
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
iI:function(a){var u,t
u=this.d
if(u===C.c)return
t=a.a+="// === Inverse Diffuse ===\n"
a.a=t+"\n"
this.at(a,u,"invDiffuse")
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
iQ:function(a){var u,t
u=this.e
if(u===C.c)return
t=a.a+="// === Specular ===\n"
a.a=t+"\n"
this.at(a,u,"specular")
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
iL:function(a){var u,t
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
iO:function(a){var u,t
u=this.r
if(u===C.c)return
t=a.a+="// === Reflection ===\n"
a.a=t+"\n"
this.at(a,u,"reflect")
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
iP:function(a){var u,t
u=this.x
if(u===C.c)return
t=a.a+="// === Refraction ===\n"
a.a=t+"\n"
this.at(a,u,"refract")
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
iG:function(a){var u,t
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
iN:function(a){var u,t
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
iR:function(a){var u,t
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
iU:function(a){var u,t,s
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
iV:function(a){var u,t,s
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
iW:function(a){var u,t,s
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
iJ:function(a){var u
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
i:function(a){return this.ai}}
A.co.prototype={}
A.cs.prototype={}
A.cq.prototype={}
A.ct.prototype={}
A.cr.prototype={}
A.cu.prototype={}
A.cg.prototype={
d1:function(a,b){this.c=null
this.d=null
this.e=null
this.f=null
this.r=null
this.x=null
this.y=null},
ej:function(a,b){var u,t,s
this.c=a
this.d=b
this.e=this.di(a,35633)
this.f=this.di(this.d,35632)
u=this.a
t=u.createProgram()
this.r=t
C.b.dJ(u,t,this.e)
C.b.dJ(u,this.r,this.f)
C.b.jH(u,this.r)
if(!H.iH(C.b.bP(u,this.r,35714))){s=C.b.eH(u,this.r)
C.b.jl(u,this.r)
H.r(P.p("Failed to link shader: "+H.h(s)))}this.ic()
this.ig()},
a_:function(a){C.b.cV(a.a,this.r)
this.x.jw()},
di:function(a,b){var u,t,s
u=this.a
t=C.b.jj(u,b)
C.b.eS(u,t,a)
C.b.jd(u,t)
if(!H.iH(C.b.eJ(u,t,35713))){s=C.b.eI(u,t)
C.b.jm(u,t)
throw H.e(P.p("Error compiling shader '"+H.h(t)+"': "+H.h(s)))}return t},
ic:function(){var u,t,s,r,q,p
u=H.b([],[A.cN])
t=this.a
s=H.a1(C.b.bP(t,this.r,35721))
if(typeof s!=="number")return H.B(s)
r=0
for(;r<s;++r){q=C.b.eB(t,this.r,r)
p=C.b.eD(t,this.r,q.name)
C.a.h(u,new A.cN(t,q.name,p))}this.x=new A.ej(u)},
ig:function(){var u,t,s,r,q,p
u=H.b([],[A.dL])
t=this.a
s=H.a1(C.b.bP(t,this.r,35718))
if(typeof s!=="number")return H.B(s)
r=0
for(;r<s;++r){q=C.b.eC(t,this.r,r)
p=C.b.eK(t,this.r,q.name)
C.a.h(u,this.jk(q.type,q.size,q.name,p))}this.y=new A.h1(u)},
aH:function(a,b,c){var u,t
u=this.a
t=this.r
if(a===1)return new A.F(u,t,b,c)
else return A.iA(u,t,b,a,c)},
fB:function(a,b,c){var u,t
u=this.a
t=this.r
if(a===1)return new A.aa(u,t,b,c)
else return A.iA(u,t,b,a,c)},
fC:function(a,b,c){var u,t
u=this.a
t=this.r
if(a===1)return new A.a6(u,t,b,c)
else return A.iA(u,t,b,a,c)},
bj:function(a,b){return new P.dY(a+" uniform variables are unsupported by all browsers.\n"+("Please change the type of "+H.h(b)+"."))},
jk:function(a,b,c,d){switch(a){case 5120:return this.aH(b,c,d)
case 5121:return this.aH(b,c,d)
case 5122:return this.aH(b,c,d)
case 5123:return this.aH(b,c,d)
case 5124:return this.aH(b,c,d)
case 5125:return this.aH(b,c,d)
case 5126:return new A.R(this.a,this.r,c,d)
case 35664:return new A.fX(this.a,this.r,c,d)
case 35665:return new A.C(this.a,this.r,c,d)
case 35666:return new A.h_(this.a,this.r,c,d)
case 35667:return new A.fY(this.a,this.r,c,d)
case 35668:return new A.fZ(this.a,this.r,c,d)
case 35669:return new A.h0(this.a,this.r,c,d)
case 35674:return new A.h2(this.a,this.r,c,d)
case 35675:return new A.cp(this.a,this.r,c,d)
case 35676:return new A.aj(this.a,this.r,c,d)
case 35678:return this.fB(b,c,d)
case 35680:return this.fC(b,c,d)
case 35670:throw H.e(this.bj("BOOL",c))
case 35671:throw H.e(this.bj("BOOL_VEC2",c))
case 35672:throw H.e(this.bj("BOOL_VEC3",c))
case 35673:throw H.e(this.bj("BOOL_VEC4",c))
default:throw H.e(P.p("Unknown uniform variable type "+H.h(a)+" for "+H.h(c)+"."))}}}
A.bu.prototype={
i:function(a){return this.b}}
A.dy.prototype={}
A.dL.prototype={}
A.h1.prototype={
k:function(a,b){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<t;++s){r=u[s]
if(r.c===b)return r}return},
n:function(a,b){var u=this.k(0,b)
if(u==null)throw H.e(P.p("Required uniform value, "+b+", was not defined or used in shader."))
return u},
i:function(a){return this.S()},
jB:function(a){var u,t,s,r
for(u=this.a,t=u.length,s="",r=0;r<u.length;u.length===t||(0,H.y)(u),++r)s+=u[r].i(0)+a
return s},
S:function(){return this.jB("\n")}}
A.F.prototype={
i:function(a){return"Uniform1i: "+H.h(this.c)}}
A.fY.prototype={
i:function(a){return"Uniform2i: "+H.h(this.c)}}
A.fZ.prototype={
i:function(a){return"Uniform3i: "+H.h(this.c)}}
A.h0.prototype={
i:function(a){return"Uniform4i: "+H.h(this.c)}}
A.fW.prototype={
i:function(a){return"Uniform1iv: "+H.h(this.c)},
siA:function(a){this.e=H.f(a,"$ia",[P.x],"$aa")}}
A.R.prototype={
i:function(a){return"Uniform1f: "+H.h(this.c)}}
A.fX.prototype={
i:function(a){return"Uniform2f: "+H.h(this.c)}}
A.C.prototype={
i:function(a){return"Uniform3f: "+H.h(this.c)}}
A.h_.prototype={
i:function(a){return"Uniform4f: "+H.h(this.c)}}
A.h2.prototype={
i:function(a){return"Uniform1Mat2 "+H.h(this.c)}}
A.cp.prototype={
ag:function(a){var u=new Float32Array(H.cF(H.f(a,"$ia",[P.w],"$aa")))
C.b.ey(this.a,this.d,!1,u)},
i:function(a){return"UniformMat3: "+H.h(this.c)}}
A.aj.prototype={
ag:function(a){var u=new Float32Array(H.cF(H.f(a,"$ia",[P.w],"$aa")))
C.b.ez(this.a,this.d,!1,u)},
i:function(a){return"UniformMat4: "+H.h(this.c)}}
A.aa.prototype={
i:function(a){return"UniformSampler2D: "+H.h(this.c)}}
A.a6.prototype={
eR:function(a){var u,t,s
u=a==null||a.d<6
t=this.a
s=this.d
if(u)C.b.P(t,s,0)
else C.b.P(t,s,a.a)},
i:function(a){return"UniformSamplerCube: "+H.h(this.c)}}
F.ig.prototype={
$1:function(a){return new V.X(Math.cos(a),Math.sin(a),0)},
$S:34}
F.i3.prototype={
$3:function(a,b,c){var u,t,s,r,q,p,o,n,m
u=b*6.283185307179586
t=this.a
s=this.b
r=J.iV(t.$1(u),s)
s=J.ki(J.iV(t.$1(u+3.141592653589793/this.c),s),r)
s=new V.K(s.a,s.b,s.c)
q=s.w(0,Math.sqrt(s.D(s)))
t=$.jy
if(t==null){t=new V.K(1,0,0)
$.jy=t
p=t}else p=t
t=q.aw(!J.U(q,p)?V.jC():p)
o=t.w(0,Math.sqrt(t.D(t)))
t=o.aw(q)
p=t.w(0,Math.sqrt(t.D(t)))
n=c*6.283185307179586
t=Math.cos(n)
s=this.d
m=Math.sin(n)
t=p.v(0,t*s)
s=o.v(0,m*s)
s=J.kh(r,new V.X(t.a-s.a,t.b-s.b,t.c-s.c))
if(!J.U(a.f,s)){a.f=H.d(s,"$iX")
t=a.a
if(t!=null)t.a9()}},
$S:35}
F.a_.prototype={
b2:function(){if(!this.gdV()){C.a.N(this.a.a.d.b,this)
this.a.a.a9()}this.hY()
this.hZ()
this.i_()},
i9:function(a){this.a=a
C.a.h(a.d.b,this)},
ia:function(a){this.b=a
C.a.h(a.d.c,this)},
ib:function(a){this.c=a
C.a.h(a.d.d,this)},
hY:function(){var u=this.a
if(u!=null){C.a.N(u.d.b,this)
this.a=null}},
hZ:function(){var u=this.b
if(u!=null){C.a.N(u.d.c,this)
this.b=null}},
i_:function(){var u=this.c
if(u!=null){C.a.N(u.d.d,this)
this.c=null}},
gdV:function(){return this.a==null||this.b==null||this.c==null},
fq:function(){var u,t,s,r,q
u=this.a
t=u==null?null:u.r
u=this.b
s=u==null?null:u.r
u=this.c
r=u==null?null:u.r
q=V.cv()
if(t!=null)q=q.p(0,t)
if(s!=null)q=q.p(0,s)
if(r!=null)q=q.p(0,r)
if(q.ek())return
return q.w(0,Math.sqrt(q.D(q)))},
fv:function(){var u,t,s,r,q
u=this.a
t=u==null?null:u.f
u=this.b
s=u==null?null:u.f
u=this.c
r=u==null?null:u.f
if(t==null||s==null||r==null)return
u=s.t(0,t)
u=new V.K(u.a,u.b,u.c)
q=u.w(0,Math.sqrt(u.D(u)))
u=r.t(0,t)
u=new V.K(u.a,u.b,u.c)
u=q.aw(u.w(0,Math.sqrt(u.D(u))))
return u.w(0,Math.sqrt(u.D(u)))},
ct:function(){if(this.d!=null)return!0
var u=this.fq()
if(u==null){u=this.fv()
if(u==null)return!1}this.d=u
this.a.a.a9()
return!0},
fp:function(){var u,t,s,r,q
u=this.a
t=u==null?null:u.x
u=this.b
s=u==null?null:u.x
u=this.c
r=u==null?null:u.x
q=V.cv()
if(t!=null)q=q.p(0,t)
if(s!=null)q=q.p(0,s)
if(r!=null)q=q.p(0,r)
if(q.ek())return
return q.w(0,Math.sqrt(q.D(q)))},
fu:function(){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f
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
if(Math.abs(i-0)<$.L().a){u=m.t(0,p)
u=new V.K(u.a,u.b,u.c)
h=u.w(0,Math.sqrt(u.D(u)))
if(j.a-k.a<0)h=h.R(0)}else{g=(u-l.b)/i
u=m.t(0,p).v(0,g).p(0,p).t(0,s)
u=new V.K(u.a,u.b,u.c)
h=u.w(0,Math.sqrt(u.D(u)))
j=j.a
k=k.a
if((j-k)*g+k-l.a<0)h=h.R(0)}u=this.d
if(u!=null){f=u.w(0,Math.sqrt(u.D(u)))
u=f.aw(h)
u=u.w(0,Math.sqrt(u.D(u))).aw(f)
h=u.w(0,Math.sqrt(u.D(u)))}return h},
cr:function(){if(this.e!=null)return!0
var u=this.fp()
if(u==null){u=this.fu()
if(u==null)return!1}this.e=u
this.a.a.a9()
return!0},
gjc:function(a){if(J.U(this.a,this.b))return!0
if(J.U(this.b,this.c))return!0
if(J.U(this.c,this.a))return!0
return!1},
A:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.S()},
G:function(a){var u,t
if(this.gdV())return a+"disposed"
u=a+C.j.aA(J.aF(this.a.e),0)+", "+C.j.aA(J.aF(this.b.e),0)+", "+C.j.aA(J.aF(this.c.e),0)+" {"
t=this.d
u=t!=null?u+(t.i(0)+", "):u+"-, "
t=this.e
return t!=null?u+(t.i(0)+"}"):u+"-}"},
S:function(){return this.G("")}}
F.eD.prototype={}
F.fD.prototype={
b3:function(a,b,c){var u,t
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
F.bi.prototype={}
F.eW.prototype={}
F.fV.prototype={
b3:function(a,b,c){var u,t
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
F.bE.prototype={}
F.dw.prototype={
gq:function(){var u=this.e
if(u==null){u=D.D()
this.e=u}return u},
av:function(){var u,t
u=this.e
if(u!=null)++u.d
t=this.d.av()||!1
if(!this.a.av())t=!1
u=this.e
if(u!=null)u.aD()
return t},
jL:function(a,b){var u,t,s,r,q,p,o
u=this.e
if(u!=null)++u.d
u=this.a.c
t=H.b(u.slice(0),[H.u(u,0)])
for(u=[F.ac];t.length!==0;){s=C.a.gjy(t)
C.a.k6(t,0)
if(s!=null){r=H.b([],u)
C.a.h(r,s)
for(q=t.length,p=0;p<t.length;t.length===q||(0,H.y)(t),++p){o=t[p]
if(o!=null&&a.b3(0,s,o)){C.a.h(r,o)
C.a.N(t,o)}}if(r.length>1)b.jK(r)}}this.a.E()
this.c.cR()
this.d.cR()
this.b.k7()
this.c.cS(new F.fV())
this.d.cS(new F.fD())
u=this.e
if(u!=null)u.aD()},
dN:function(a0,a1){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a
u=this.a.c.length
a1.toString
t=$.aE()
s=a1.a
r=(s&t.a)!==0?1:0
if((s&$.b4().a)!==0)++r
if((s&$.b3().a)!==0)++r
if((s&$.b5().a)!==0)++r
if((s&$.b6().a)!==0)++r
if((s&$.cJ().a)!==0)++r
if((s&$.cK().a)!==0)++r
if((s&$.bU().a)!==0)++r
if((s&$.b2().a)!==0)++r
q=a1.gd_(a1)
p=q*4
t=new Array(u*q)
t.fixed$length=Array
s=P.w
o=H.b(t,[s])
t=new Array(r)
t.fixed$length=Array
n=H.b(t,[Z.cP])
for(m=0,l=0;l<r;++l){k=a1.j3(l)
j=k.gd_(k)
C.a.Y(n,l,new Z.cP(k,j,m*4,p,0))
for(i=0;i<u;++i){t=this.a.c
if(i>=t.length)return H.i(t,i)
h=t[i].jI(k)
g=m+i*q
for(f=0;f<h.length;++f){C.a.Y(o,g,h[f]);++g}}m+=j}H.f(o,"$ia",[s],"$aa")
t=a0.a
e=t.createBuffer()
C.b.ao(t,34962,e)
C.b.dM(t,34962,new Float32Array(H.cF(o)),35044)
C.b.ao(t,34962,null)
d=new Z.bZ(new Z.dT(34962,e),n,a1)
d.sfQ(H.b([],[Z.bA]))
this.b.b
if(this.c.b.length!==0){s=P.x
c=H.b([],[s])
for(l=0;b=this.c.b,l<b.length;++l){b=b[l].a
b.a.a.E()
C.a.h(c,b.e)
b=this.c.b
if(l>=b.length)return H.i(b,l)
b=b[l].b
b.a.a.E()
C.a.h(c,b.e)}a=Z.jD(t,34963,H.f(c,"$ia",[s],"$aa"))
C.a.h(d.b,new Z.bA(1,c.length,a))}if(this.d.b.length!==0){s=P.x
c=H.b([],[s])
for(l=0;b=this.d.b,l<b.length;++l){b=b[l].a
b.a.a.E()
C.a.h(c,b.e)
b=this.d.b
if(l>=b.length)return H.i(b,l)
b=b[l].b
b.a.a.E()
C.a.h(c,b.e)
b=this.d.b
if(l>=b.length)return H.i(b,l)
b=b[l].c
b.a.a.E()
C.a.h(c,b.e)}a=Z.jD(t,34963,H.f(c,"$ia",[s],"$aa"))
C.a.h(d.b,new Z.bA(4,c.length,a))}return d},
i:function(a){var u=H.b([],[P.m])
if(this.a.c.length!==0){C.a.h(u,"Vertices:")
C.a.h(u,this.a.G("   "))}this.b.b
if(this.c.b.length!==0){C.a.h(u,"Lines:")
C.a.h(u,this.c.G("   "))}if(this.d.b.length!==0){C.a.h(u,"Faces:")
C.a.h(u,this.d.G("   "))}return C.a.l(u,"\n")},
aP:function(a){var u=this.e
if(u!=null)u.F(a)},
a9:function(){return this.aP(null)},
$im1:1}
F.fw.prototype={
iY:function(a){var u,t,s,r,q,p
H.f(a,"$ia",[F.ac],"$aa")
u=H.b([],[F.a_])
t=a[0]
for(s=this.a,r=2;r<4;++r){q=a[r-1]
p=a[r]
s.a.h(0,t)
s.a.h(0,q)
s.a.h(0,p)
C.a.h(u,F.cY(t,q,p))}return u},
iZ:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k,j,i,h
H.f(c,"$ia",[F.ac],"$aa")
u=H.b([],[F.a_])
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
C.a.h(u,F.cY(l,k,i))
t.a.h(0,l)
t.a.h(0,i)
t.a.h(0,h)
C.a.h(u,F.cY(l,i,h))}else{m.h(0,k)
t.a.h(0,i)
t.a.h(0,h)
C.a.h(u,F.cY(k,i,h))
t.a.h(0,k)
t.a.h(0,h)
t.a.h(0,l)
C.a.h(u,F.cY(k,h,l))}o=!o}q=!q}return u},
gm:function(a){return this.b.length},
cS:function(a){var u,t,s,r,q,p,o,n
for(u=this.a,t=u.a.c.length-1;t>=0;--t){s=u.a.c
if(t>=s.length)return H.i(s,t)
r=s[t]
for(s=r.d,q=s.b.length+s.c.length+s.d.length-1;q>=0;--q){p=r.d.k(0,q)
for(o=q-1;o>=0;--o){n=r.d.k(0,o)
if(a.b3(0,p,n)){p.b2()
break}}}}},
cR:function(){var u,t,s
for(u=this.b.length-1;u>=0;--u){t=this.b
if(u>=t.length)return H.i(t,u)
s=t[u]
t=s.gjc(s)
if(t)s.b2()}},
av:function(){var u,t,s,r
for(u=this.b,t=u.length,s=!0,r=0;r<u.length;u.length===t||(0,H.y)(u),++r)if(!u[r].ct())s=!1
return s},
cs:function(){var u,t,s,r
for(u=this.b,t=u.length,s=!0,r=0;r<u.length;u.length===t||(0,H.y)(u),++r)if(!u[r].cr())s=!1
return s},
i:function(a){return this.S()},
G:function(a){var u,t,s,r
u=H.b([],[P.m])
for(t=this.b,s=t.length,r=0;r<t.length;t.length===s||(0,H.y)(t),++r)C.a.h(u,t[r].G(a))
return C.a.l(u,"\n")},
S:function(){return this.G("")},
sfI:function(a){this.b=H.f(a,"$ia",[F.a_],"$aa")}}
F.fx.prototype={
gm:function(a){return this.b.length},
cS:function(a){var u,t,s,r,q,p,o,n
for(u=this.a,t=u.a.c.length-1;t>=0;--t){s=u.a.c
if(t>=s.length)return H.i(s,t)
r=s[t]
for(s=r.c,q=s.b.length+s.c.length-1;q>=0;--q){p=r.c.k(0,q)
for(o=q-1;o>=0;--o){n=r.c.k(0,o)
if(a.b3(0,p,n)){p.b2()
break}}}}},
cR:function(){var u,t,s
for(u=this.b.length-1;u>=0;--u){t=this.b
if(u>=t.length)return H.i(t,u)
s=t[u]
t=J.U(s.a,s.b)
if(t)s.b2()}},
i:function(a){return this.S()},
G:function(a){var u,t,s,r
u=H.b([],[P.m])
t=this.b.length
for(s=0;s<t;++s){r=this.b
if(s>=r.length)return H.i(r,s)
C.a.h(u,r[s].G(a+(""+s+". ")))}return C.a.l(u,"\n")},
S:function(){return this.G("")},
sfR:function(a){this.b=H.f(a,"$ia",[F.bi],"$aa")}}
F.fy.prototype={
gm:function(a){return 0},
k7:function(){var u,t
for(u=-1;!1;--u){t=this.b
return H.i(t,u)
t=t[u].gkA()
t=t.gkx(t)
if(t.gm(t).kt(0,1)){t=this.b
return H.i(t,u)
t[u].b2()}}},
i:function(a){return this.S()},
G:function(a){var u,t,s
u=H.b([],[P.m])
for(t=this.b,s=0;!1;++s){if(s>=0)return H.i(t,s)
C.a.h(u,t[s].G(a))}return C.a.l(u,"\n")},
S:function(){return this.G("")},
scf:function(a){this.b=H.f(a,"$ia",[F.bE],"$aa")}}
F.ac.prototype={
dR:function(a){var u,t,s,r,q,p,o
u=this.f
t=this.r
s=this.x
r=this.y
q=this.z
p=this.Q
o=this.ch
return F.h9(this.cx,s,p,u,t,r,q,a,o)},
jI:function(a){var u,t
if(a.A(0,$.aE())){u=this.f
t=[P.w]
if(u==null)return H.b([0,0,0],t)
else return H.b([u.a,u.b,u.c],t)}else if(a.A(0,$.b4())){u=this.r
t=[P.w]
if(u==null)return H.b([0,1,0],t)
else return H.b([u.a,u.b,u.c],t)}else if(a.A(0,$.b3())){u=this.x
t=[P.w]
if(u==null)return H.b([0,0,1],t)
else return H.b([u.a,u.b,u.c],t)}else if(a.A(0,$.b5())){u=this.y
t=[P.w]
if(u==null)return H.b([0,0],t)
else return H.b([u.a,u.b],t)}else if(a.A(0,$.b6())){u=this.z
t=[P.w]
if(u==null)return H.b([0,0,0],t)
else return H.b([u.a,u.b,u.c],t)}else if(a.A(0,$.cJ())){u=this.Q
t=[P.w]
if(u==null)return H.b([1,1,1],t)
else return H.b([u.a,u.b,u.c],t)}else if(a.A(0,$.cK())){u=this.Q
t=[P.w]
if(u==null)return H.b([1,1,1,1],t)
else return H.b([u.a,u.b,u.c,u.d],t)}else if(a.A(0,$.bU()))return H.b([this.ch],[P.w])
else if(a.A(0,$.b2())){u=this.cx
t=[P.w]
if(u==null)return H.b([-1,-1,-1,-1],t)
else return H.b([u.a,u.b,u.c,u.d],t)}else return H.b([],[P.w])},
ct:function(){var u,t
u={}
if(this.r!=null)return!0
t=this.a
if(t!=null){t=t.e
if(t!=null)++t.d}u.a=V.cv()
this.d.a2(0,new F.hk(u))
u=u.a
this.r=u.w(0,Math.sqrt(u.D(u)))
u=this.a
if(u!=null){u.a9()
u=this.a.e
if(u!=null)u.aD()}return!0},
cr:function(){var u,t
u={}
if(this.x!=null)return!0
t=this.a
if(t!=null){t=t.e
if(t!=null)++t.d}u.a=V.cv()
this.d.a2(0,new F.hj(u))
u=u.a
this.x=u.w(0,Math.sqrt(u.D(u)))
u=this.a
if(u!=null){u.a9()
u=this.a.e
if(u!=null)u.aD()}return!0},
A:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.S()},
G:function(a){var u,t,s
u=H.b([],[P.m])
C.a.h(u,C.j.aA(J.aF(this.e),0))
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
C.a.h(u,V.O(this.ch,3,0))
t=this.cx
if(t!=null)C.a.h(u,t.i(0))
else C.a.h(u,"-")
s=C.a.l(u,", ")
return a+"{"+s+"}"},
S:function(){return this.G("")}}
F.hk.prototype={
$1:function(a){var u,t
H.d(a,"$ia_")
u=a==null?null:a.d
if(u!=null){t=this.a
t.a=t.a.p(0,u)}},
$S:7}
F.hj.prototype={
$1:function(a){var u,t
H.d(a,"$ia_")
u=a==null?null:a.e
if(u!=null){t=this.a
t.a=t.a.p(0,u)}},
$S:7}
F.ha.prototype={
E:function(){var u,t,s,r
if(this.b){u=this.c
t=u.length
for(s=0,r=0;r<t;++r){if(r>=u.length)return H.i(u,r)
u[r].e=s;++s}this.b=!1}},
h:function(a,b){var u,t
u=b.a
if(u!=null){if(u===this.a)return!1
throw H.e(P.p("May not add a vertex already attached to another shape to this shape."))}u=this.c
b.e=u.length
t=this.a
b.a=t
C.a.h(u,b)
t.a9()
return!0},
j_:function(a,b,c,d,e,f,g,h,i){var u=F.h9(a,b,c,d,e,f,g,h,i)
this.h(0,u)
return u},
bk:function(a,b,c,d,e,f){return this.j_(a,null,b,c,null,d,e,f,0)},
gm:function(a){return this.c.length},
av:function(){var u,t,s
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.y)(u),++s)u[s].ct()
return!0},
cs:function(){var u,t,s
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.y)(u),++s)u[s].cr()
return!0},
j8:function(){var u,t,s,r,q,p,o,n
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.y)(u),++s){r=u[s]
if(r.z==null){q=r.r
p=q.a
o=q.b
n=q.c
n=q.w(0,Math.sqrt(p*p+o*o+n*n))
if(!J.U(r.z,n)){r.z=n
q=r.a
if(q!=null){q=q.e
if(q!=null)q.F(null)}}}}return!0},
i:function(a){return this.S()},
G:function(a){var u,t,s,r
this.E()
u=H.b([],[P.m])
for(t=this.c,s=t.length,r=0;r<t.length;t.length===s||(0,H.y)(t),++r)C.a.h(u,t[r].G(a))
return C.a.l(u,"\n")},
S:function(){return this.G("")},
siB:function(a){this.c=H.f(a,"$ia",[F.ac],"$aa")}}
F.hb.prototype={
gm:function(a){return this.b.length+this.c.length+this.d.length},
k:function(a,b){var u,t,s
u=this.b
t=u.length
if(b<t){if(b<0)return H.i(u,b)
return u[b]}b-=t
u=this.c
s=u.length
if(b<s){if(b<0)return H.i(u,b)
return u[b]}b-=s
u=this.d
if(b<0||b>=u.length)return H.i(u,b)
return u[b]},
a2:function(a,b){H.k(b,{func:1,ret:-1,args:[F.a_]})
C.a.a2(this.b,b)
C.a.a2(this.c,new F.hc(this,b))
C.a.a2(this.d,new F.hd(this,b))},
i:function(a){return this.S()},
G:function(a){var u,t,s,r
u=H.b([],[P.m])
for(t=this.b,s=t.length,r=0;r<t.length;t.length===s||(0,H.y)(t),++r)C.a.h(u,t[r].G(a))
for(t=this.c,s=t.length,r=0;r<t.length;t.length===s||(0,H.y)(t),++r)C.a.h(u,t[r].G(a))
for(t=this.d,s=t.length,r=0;r<t.length;t.length===s||(0,H.y)(t),++r)C.a.h(u,t[r].G(a))
return C.a.l(u,"\n")},
S:function(){return this.G("")},
sfJ:function(a){this.b=H.f(a,"$ia",[F.a_],"$aa")},
sfK:function(a){this.c=H.f(a,"$ia",[F.a_],"$aa")},
sfL:function(a){this.d=H.f(a,"$ia",[F.a_],"$aa")}}
F.hc.prototype={
$1:function(a){H.d(a,"$ia_")
if(!J.U(a.a,this.a))this.b.$1(a)},
$S:7}
F.hd.prototype={
$1:function(a){var u
H.d(a,"$ia_")
u=this.a
if(!J.U(a.a,u)&&!J.U(a.b,u))this.b.$1(a)},
$S:7}
F.he.prototype={
gm:function(a){return this.b.length+this.c.length},
k:function(a,b){var u,t,s
u=this.b
t=u.length
if(b>=t){u=this.c
s=b-t
if(s<0||s>=u.length)return H.i(u,s)
return u[s]}else{if(b<0)return H.i(u,b)
return u[b]}},
i:function(a){return this.S()},
G:function(a){var u,t,s,r
u=H.b([],[P.m])
for(t=this.b,s=t.length,r=0;r<t.length;t.length===s||(0,H.y)(t),++r)C.a.h(u,t[r].G(a))
for(t=this.c,s=t.length,r=0;r<t.length;t.length===s||(0,H.y)(t),++r)C.a.h(u,t[r].G(a))
return C.a.l(u,"\n")},
S:function(){return this.G("")},
sfS:function(a){this.b=H.f(a,"$ia",[F.bi],"$aa")},
sfT:function(a){this.c=H.f(a,"$ia",[F.bi],"$aa")}}
F.hg.prototype={}
F.hf.prototype={
b3:function(a,b,c){return J.U(b.f,c.f)}}
F.hh.prototype={}
F.fh.prototype={
jK:function(a){var u,t,s,r,q,p,o,n,m
H.f(a,"$ia",[F.ac],"$aa")
u=V.cv()
for(t=a.length,s=0;s<t;++s){r=a[s].r
if(r!=null)u=new V.K(u.a+r.a,u.b+r.b,u.c+r.c)}u=u.w(0,Math.sqrt(u.D(u)))
for(t=a.length,r=u==null,s=0;s<a.length;a.length===t||(0,H.y)(a),++s){q=a[s]
if(r)p=null
else{o=u.a
n=u.b
m=u.c
p=u.w(0,Math.sqrt(o*o+n*n+m*m))}if(!J.U(q.r,p)){q.r=p
o=q.a
if(o!=null){o=o.e
if(o!=null)o.F(null)}}}return}}
F.hi.prototype={
gm:function(a){return 0},
i:function(a){return this.S()},
G:function(a){var u,t,s
u=H.b([],[P.m])
for(t=this.b,s=0;!1;++s){if(s>=0)return H.i(t,s)
C.a.h(u,t[s].G(a))}return C.a.l(u,"\n")},
S:function(){return this.G("")},
scf:function(a){this.b=H.f(a,"$ia",[F.bE],"$aa")}}
O.dd.prototype={
gq:function(){var u=this.dy
if(u==null){u=D.D()
this.dy=u}return u},
a0:function(a){var u
H.d(a,"$iv")
u=this.dy
if(u!=null)u.F(a)},
bW:function(){return this.a0(null)},
dw:function(a){H.d(a,"$iv")
this.a=null
this.a0(a)},
i3:function(){return this.dw(null)},
h5:function(a,b){var u=V.ag
u=new D.bf(a,H.f(b,"$ij",[u],"$aj"),this,[u])
u.b=!0
this.a0(u)},
h7:function(a,b){var u=V.ag
u=new D.bg(a,H.f(b,"$ij",[u],"$aj"),this,[u])
u.b=!0
this.a0(u)},
df:function(){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7
u=this.dx
t=C.d.a1(u.e.length+3,4)*4
s=C.d.a1(u.f.length+3,4)*4
r=C.d.a1(u.r.length+3,4)*4
q=C.d.a1(u.x.length+3,4)*4
p=C.d.a1(u.y.length+3,4)*4
o=C.d.a1(u.z.length+3,4)*4
n=C.d.a1(this.e.a.length+3,4)*4
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
a7=$.aE()
if(a0){b=$.b4()
a7=new Z.aS(a7.a|b.a)}if(a1){b=$.b3()
a7=new Z.aS(a7.a|b.a)}if(a2){b=$.b5()
a7=new Z.aS(a7.a|b.a)}if(a3){b=$.b6()
a7=new Z.aS(a7.a|b.a)}if(a5){b=$.b2()
a7=new Z.aS(a7.a|b.a)}return new A.f7(u,m,l,k,j,i,h,g,f,t,s,r,q,p,o,t+s+r+q+p+o,d,d,a4,a6,!0,!1,!1,c,a4,a,a0,a1,a2,a3,a5,!1,!1,!1,n,e.charCodeAt(0)==0?e:e,a7)},
U:function(a,b){H.f(a,"$ia",[T.cl],"$aa")},
ak:function(a){var u,t,s,r,q
for(u=this.dx.a,u=new J.ae(u,u.length,0,[H.u(u,0)]);u.B();){t=u.d
t.toString
s=$.h8
if(s==null){s=new V.K(0,0,1)
$.h8=s}t.a=s
r=t.b
if(r!=null){q=r.a
if(q!=null)t.a=q.cU(s)}}},
er:function(a2,a3){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1
u=this.a
if(u==null){u=this.df()
t=H.d(a2.fr.k(0,u.ai),"$ide")
if(t==null){t=A.kJ(u,a2.a)
a2.dH(t)}this.a=t
a3.e=null
u=t}s=u.z
r=s.bm
u=a3.e
if(!(u instanceof Z.bZ)){a3.e=null
u=null}if(u==null||!u.d.A(0,r)){u=s.r1
if(u)a3.d.av()
q=s.r2
if(q){p=a3.d
o=p.e
if(o!=null)++o.d
p.d.cs()
p.a.cs()
p=p.e
if(p!=null)p.aD()}p=s.ry
if(p){o=a3.d
n=o.e
if(n!=null)++n.d
o.a.j8()
o=o.e
if(o!=null)o.aD()}m=a3.d.dN(new Z.dU(a2.a),r)
m.ax($.aE()).e=this.a.Q.c
if(u)m.ax($.b4()).e=this.a.cx.c
if(q)m.ax($.b3()).e=this.a.ch.c
if(s.rx)m.ax($.b5()).e=this.a.cy.c
if(p)m.ax($.b6()).e=this.a.db.c
if(s.x1)m.ax($.b2()).e=this.a.dx.c
a3.e=m}u=T.cl
l=H.b([],[u])
this.a.a_(a2)
if(s.fx){q=this.a
p=a2.dx.gZ()
q=q.dy
q.toString
q.ag(p.ab(0,!0))}if(s.fy){q=this.a
p=a2.cx
if(p==null){p=a2.db.gZ().v(0,a2.dx.gZ())
a2.cx=p}q=q.fr
q.toString
q.ag(p.ab(0,!0))}q=this.a
p=a2.ch
if(p==null){p=a2.gk0().v(0,a2.dx.gZ())
a2.ch=p}q=q.fy
q.toString
q.ag(p.ab(0,!0))
if(s.x2){q=this.a
p=this.b
q=q.k1
q.toString
q.ag(C.r.ab(p,!0))}if(s.y1){q=this.a
p=this.c
q=q.k2
q.toString
q.ag(C.r.ab(p,!0))}if(s.y2){q=this.a
p=this.d
q=q.k3
q.toString
q.ag(C.r.ab(p,!0))}if(s.aq>0){k=this.e.a.length
q=this.a.k4
C.b.P(q.a,q.d,k)
for(q=[P.w],j=0;j<k;++j){p=this.a
o=this.e.a
if(j>=o.length)return H.i(o,j)
o=o[j]
p.toString
H.d(o,"$iag")
p=p.r1
if(j>=p.length)return H.i(p,j)
p=p[j]
i=new Float32Array(H.cF(H.f(o.ab(0,!0),"$ia",q,"$aa")))
C.b.ez(p.a,p.d,!1,i)}}switch(s.a){case C.c:break
case C.i:q=this.a
p=this.f.f
q=q.r2
q.toString
o=p.a
n=p.b
p=p.c
C.b.u(q.a,q.d,o,n,p)
break
case C.f:this.U(l,this.f.d)
q=this.a
p=this.f.d
q.ah(q.rx,q.x1,p)
p=this.a
q=this.f.f
p=p.r2
p.toString
o=q.a
n=q.b
q=q.c
C.b.u(p.a,p.d,o,n,q)
break
case C.h:this.U(l,this.f.e)
q=this.a
p=this.f.e
q.ad(q.ry,q.x1,p)
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
case C.f:this.U(l,this.r.d)
q=this.a
p=this.r.d
q.ah(q.y1,q.aq,p)
p=this.a
q=this.r.f
p=p.x2
p.toString
o=q.a
n=q.b
q=q.c
C.b.u(p.a,p.d,o,n,q)
break
case C.h:this.U(l,this.r.e)
q=this.a
p=this.r.e
q.ad(q.y2,q.aq,p)
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
q=q.ai
q.toString
o=p.a
n=p.b
p=p.c
C.b.u(q.a,q.d,o,n,p)
break
case C.f:this.U(l,this.x.d)
q=this.a
p=this.x.d
q.ah(q.bm,q.bn,p)
p=this.a
q=this.x.f
p=p.ai
p.toString
o=q.a
n=q.b
q=q.c
C.b.u(p.a,p.d,o,n,q)
break
case C.h:this.U(l,this.x.e)
q=this.a
p=this.x.e
q.ad(q.dY,q.bn,p)
p=this.a
q=this.x.f
p=p.ai
p.toString
o=q.a
n=q.b
q=q.c
C.b.u(p.a,p.d,o,n,q)
break}switch(s.d){case C.c:break
case C.i:q=this.a
p=this.y.f
q=q.bo
q.toString
o=p.a
n=p.b
p=p.c
C.b.u(q.a,q.d,o,n,p)
break
case C.f:this.U(l,this.y.d)
q=this.a
p=this.y.d
q.ah(q.dZ,q.bp,p)
p=this.a
q=this.y.f
p=p.bo
p.toString
o=q.a
n=q.b
q=q.c
C.b.u(p.a,p.d,o,n,q)
break
case C.h:this.U(l,this.y.e)
q=this.a
p=this.y.e
q.ad(q.e_,q.bp,p)
p=this.a
q=this.y.f
p=p.bo
p.toString
o=q.a
n=q.b
q=q.c
C.b.u(p.a,p.d,o,n,q)
break}switch(s.e){case C.c:break
case C.i:q=this.a
p=this.z.f
q=q.bq
q.toString
o=p.a
n=p.b
p=p.c
C.b.u(q.a,q.d,o,n,p)
p=this.a
n=this.z.ch
p=p.bs
C.b.J(p.a,p.d,n)
break
case C.f:this.U(l,this.z.d)
q=this.a
p=this.z.d
q.ah(q.e0,q.br,p)
p=this.a
q=this.z.f
p=p.bq
p.toString
o=q.a
n=q.b
q=q.c
C.b.u(p.a,p.d,o,n,q)
q=this.a
n=this.z.ch
q=q.bs
C.b.J(q.a,q.d,n)
break
case C.h:this.U(l,this.z.e)
q=this.a
p=this.z.e
q.ad(q.e1,q.br,p)
p=this.a
q=this.z.f
p=p.bq
p.toString
o=q.a
n=q.b
q=q.c
C.b.u(p.a,p.d,o,n,q)
q=this.a
n=this.z.ch
q=q.bs
C.b.J(q.a,q.d,n)
break}if(s.z>0){k=this.dx.e.length
q=this.a.ec
C.b.P(q.a,q.d,k)
h=a2.db.gZ()
for(q=this.dx.e,p=q.length,g=0,f=0;f<q.length;q.length===p||(0,H.y)(q),++f){e=q[f]
o=this.a.cA
if(g>=o.length)return H.i(o,g)
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
q=this.a.ed
C.b.P(q.a,q.d,k)
h=a2.db.gZ()
for(q=this.dx.f,p=q.length,g=0,f=0;f<q.length;q.length===p||(0,H.y)(q),++f){e=q[f]
o=this.a.cB
if(g>=o.length)return H.i(o,g)
d=o[g]
o=e.gb6(e)
n=d.b
C.b.u(n.a,n.d,o.a,o.b,o.c)
o=h.ba(e.gb6(e))
n=d.c
C.b.u(n.a,n.d,o.a,o.b,o.c)
o=e.gap(e)
n=d.d
C.b.u(n.a,n.d,o.a,o.b,o.c)
o=e.gcm()
n=d.e
C.b.J(n.a,n.d,o)
o=e.gcn()
n=d.f
C.b.J(n.a,n.d,o)
o=e.gco()
n=d.r
C.b.J(n.a,n.d,o);++g}}if(s.ch>0){k=this.dx.r.length
q=this.a.ee
C.b.P(q.a,q.d,k)
h=a2.db.gZ()
for(q=this.dx.r,p=q.length,g=0,f=0;f<q.length;q.length===p||(0,H.y)(q),++f){e=q[f]
o=this.a.cC
if(g>=o.length)return H.i(o,g)
d=o[g]
o=e.gb6(e)
n=d.b
C.b.u(n.a,n.d,o.a,o.b,o.c)
o=e.gcw(e).kw()
n=d.c
C.b.u(n.a,n.d,o.a,o.b,o.c)
o=h.ba(e.gb6(e))
n=d.d
C.b.u(n.a,n.d,o.a,o.b,o.c)
o=e.gap(e)
n=d.e
C.b.u(n.a,n.d,o.a,o.b,o.c)
o=e.gkv()
n=d.f
C.b.J(n.a,n.d,o)
o=e.gku()
n=d.r
C.b.J(n.a,n.d,o)
o=e.gcm()
n=d.x
C.b.J(n.a,n.d,o)
o=e.gcn()
n=d.y
C.b.J(n.a,n.d,o)
o=e.gco()
n=d.z
C.b.J(n.a,n.d,o);++g}}if(s.cx>0){k=this.dx.x.length
q=this.a.ef
C.b.P(q.a,q.d,k)
h=a2.db.gZ()
for(q=this.dx.x,p=q.length,o=[u],g=0,f=0;f<q.length;q.length===p||(0,H.y)(q),++f){e=q[f]
n=this.a.cD
if(g>=n.length)return H.i(n,g)
d=n[g]
n=e.gb9()
H.f(l,"$ia",o,"$aa")
if(!C.a.V(l,n)){n.sbC(0,l.length)
C.a.h(l,n)}n=e.gcw(e)
c=d.d
C.b.u(c.a,c.d,n.a,n.b,n.c)
n=e.gbL()
c=d.b
C.b.u(c.a,c.d,n.a,n.b,n.c)
n=e.gbI(e)
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
a=e.gap(e)
n=d.f
C.b.u(n.a,n.d,a.a,a.b,a.c)
a=e.gb9()
n=a.gbF(a)
if(!n){n=d.x
C.b.P(n.a,n.d,1)}else{n=d.r
c=a.gbF(a)
b=n.a
n=n.d
if(!c)C.b.P(b,n,0)
else C.b.P(b,n,a.gbC(a))
n=d.x
C.b.P(n.a,n.d,0)}++g}}if(s.cy>0){k=this.dx.y.length
q=this.a.eg
C.b.P(q.a,q.d,k)
h=a2.db.gZ()
for(q=this.dx.y,p=q.length,o=[P.w],n=[u],g=0,f=0;f<q.length;q.length===p||(0,H.y)(q),++f){e=q[f]
c=this.a.cE
if(g>=c.length)return H.i(c,g)
d=c[g]
c=e.gb9()
H.f(l,"$ia",n,"$aa")
if(!C.a.V(l,c)){c.sbC(0,l.length)
C.a.h(l,c)}a0=h.v(0,e.gZ())
c=e.gZ()
b=$.cd
if(b==null){b=new V.X(0,0,0)
$.cd=b}b=c.ba(b)
c=d.b
C.b.u(c.a,c.d,b.a,b.b,b.c)
c=$.cd
if(c==null){c=new V.X(0,0,0)
$.cd=c}c=a0.ba(c)
b=d.c
C.b.u(b.a,b.d,c.a,c.b,c.c)
c=a0.cI()
b=d.d
i=new Float32Array(H.cF(H.f(new V.dg(c.a,c.b,c.c,c.e,c.f,c.r,c.y,c.z,c.Q).ab(0,!0),"$ia",o,"$aa")))
C.b.ey(b.a,b.d,!1,i)
b=e.gap(e)
c=d.e
C.b.u(c.a,c.d,b.a,b.b,b.c)
b=e.gb9()
c=b.gbF(b)
if(!c){c=d.r
C.b.P(c.a,c.d,1)}else{c=d.f
a=b.d
a1=c.a
c=c.d
if(a<6)C.b.P(a1,c,0)
else C.b.P(a1,c,b.a)
c=d.r
C.b.P(c.a,c.d,0)}c=e.gcm()
b=d.x
C.b.J(b.a,b.d,c)
c=e.gcn()
b=d.y
C.b.J(b.a,b.d,c)
c=e.gco()
b=d.z
C.b.J(b.a,b.d,c);++g}}if(s.db>0){k=this.dx.z.length
q=this.a.eh
C.b.P(q.a,q.d,k)
h=a2.db.gZ()
for(q=this.dx.z,p=q.length,u=[u],g=0,f=0;f<q.length;q.length===p||(0,H.y)(q),++f){e=q[f]
o=this.a.cF
if(g>=o.length)return H.i(o,g)
d=o[g]
o=e.gb9()
H.f(l,"$ia",u,"$aa")
if(!C.a.V(l,o)){o.sbC(0,l.length)
C.a.h(l,o)}o=e.gb6(e)
n=d.b
C.b.u(n.a,n.d,o.a,o.b,o.c)
o=e.gcw(e)
n=d.c
C.b.u(n.a,n.d,o.a,o.b,o.c)
o=e.gbL()
n=d.d
C.b.u(n.a,n.d,o.a,o.b,o.c)
o=e.gbI(e)
n=d.e
C.b.u(n.a,n.d,o.a,o.b,o.c)
o=h.ba(e.gb6(e))
n=d.f
C.b.u(n.a,n.d,o.a,o.b,o.c)
o=e.gb9()
n=o.gbF(o)
if(!n){o=d.x
C.b.P(o.a,o.d,1)}else{n=d.r
c=o.gbF(o)
b=n.a
n=n.d
if(!c)C.b.P(b,n,0)
else C.b.P(b,n,o.gbC(o))
o=d.x
C.b.P(o.a,o.d,0)}o=e.gap(e)
n=d.y
C.b.u(n.a,n.d,o.a,o.b,o.c)
o=e.gky()
n=d.z
C.b.J(n.a,n.d,o)
o=e.gkz()
n=d.Q
C.b.J(n.a,n.d,o)
o=e.gcm()
n=d.ch
C.b.J(n.a,n.d,o)
o=e.gcn()
n=d.cx
C.b.J(n.a,n.d,o)
o=e.gco()
n=d.cy
C.b.J(n.a,n.d,o);++g}}}switch(s.f){case C.c:break
case C.i:break
case C.f:this.U(l,this.Q.d)
u=this.a
q=this.Q.d
u.ah(u.e2,u.bt,q)
break
case C.h:this.U(l,this.Q.e)
u=this.a
q=this.Q.e
u.ad(u.e3,u.bt,q)
break}if(s.fr){u=this.a
q=a2.Q
if(q==null){q=a2.db.gZ().cI()
a2.Q=q}u=u.id
u.toString
u.ag(q.ab(0,!0))}if(s.dy){this.U(l,this.ch)
u=this.a
q=this.ch
u.ad(u.e4,u.e5,q)
switch(s.r){case C.c:break
case C.i:u=this.a
q=this.cx.f
u=u.bu
u.toString
p=q.a
o=q.b
q=q.c
C.b.u(u.a,u.d,p,o,q)
break
case C.f:this.U(l,this.cx.d)
u=this.a
q=this.cx.d
u.ah(u.e6,u.bv,q)
q=this.a
u=this.cx.f
q=q.bu
q.toString
p=u.a
o=u.b
u=u.c
C.b.u(q.a,q.d,p,o,u)
break
case C.h:this.U(l,this.cx.e)
u=this.a
q=this.cx.e
u.ad(u.e7,u.bv,q)
q=this.a
u=this.cx.f
q=q.bu
q.toString
p=u.a
o=u.b
u=u.c
C.b.u(q.a,q.d,p,o,u)
break}switch(s.x){case C.c:break
case C.i:u=this.a
q=this.cy.f
u=u.bx
u.toString
p=q.a
o=q.b
q=q.c
C.b.u(u.a,u.d,p,o,q)
q=this.a
o=this.cy.ch
q=q.bw
C.b.J(q.a,q.d,o)
break
case C.f:this.U(l,this.cy.d)
u=this.a
q=this.cy.d
u.ah(u.e8,u.by,q)
q=this.a
u=this.cy.f
q=q.bx
q.toString
p=u.a
o=u.b
u=u.c
C.b.u(q.a,q.d,p,o,u)
u=this.a
o=this.cy.ch
u=u.bw
C.b.J(u.a,u.d,o)
break
case C.h:this.U(l,this.cy.e)
u=this.a
q=this.cy.e
u.ad(u.e9,u.by,q)
q=this.a
u=this.cy.f
q=q.bx
q.toString
p=u.a
o=u.b
u=u.c
C.b.u(q.a,q.d,p,o,u)
u=this.a
o=this.cy.ch
u=u.bw
C.b.J(u.a,u.d,o)
break}}u=s.y
q=u!==C.c
if(q){switch(u){case C.c:break
case C.i:u=this.a
p=this.db.f
u=u.bz
C.b.J(u.a,u.d,p)
break
case C.f:this.U(l,this.db.d)
u=this.a
p=this.db.d
u.ah(u.ea,u.bA,p)
p=this.a
u=this.db.f
p=p.bz
C.b.J(p.a,p.d,u)
break
case C.h:this.U(l,this.db.e)
u=this.a
p=this.db.e
u.ad(u.eb,u.bA,p)
p=this.a
u=this.db.f
p=p.bz
C.b.J(p.a,p.d,u)
break}u=a2.a
C.b.cz(u,3042)
C.b.j7(u,770,771)}for(j=0;j<l.length;++j)l[j].a_(a2)
u=a3.e
u.a_(a2)
u.aa(a2)
u.aQ(a2)
if(q)C.b.jq(a2.a,3042)
for(j=0;j<l.length;++j)l[j].aQ(a2)
u=this.a
u.toString
C.b.cV(a2.a,null)
u.x.dT()},
i:function(a){var u=this.a
if(u!=null)return u.b
else return this.df().ai},
sft:function(a){this.e=H.f(a,"$iV",[V.ag],"$aV")}}
O.f5.prototype={}
O.df.prototype={
aK:function(){}}
O.f6.prototype={}
O.aL.prototype={
dA:function(a){var u,t
if(!J.U(this.f,a)){u=this.f
this.f=a
t=new D.G(this.b+".color",u,a,this,[V.W])
t.b=!0
this.a.a0(t)}},
aK:function(){this.eZ()
this.dA(new V.W(1,1,1))},
sap:function(a,b){var u
if(this.c===C.c){this.c=C.i
this.aK()
u=this.a
u.a=null
u.a0(null)}this.dA(b)}}
O.f8.prototype={
i8:function(a){var u=this.ch
if(!(Math.abs(u-a)<$.L().a)){this.ch=a
u=new D.G(this.b+".refraction",u,a,this,[P.w])
u.b=!0
this.a.a0(u)}},
aK:function(){this.bU()
this.i8(1)}}
O.f9.prototype={
cj:function(a){var u=this.ch
if(!(Math.abs(u-a)<$.L().a)){this.ch=a
u=new D.G(this.b+".shininess",u,a,this,[P.w])
u.b=!0
this.a.a0(u)}},
aK:function(){this.bU()
this.cj(100)}}
O.dx.prototype={
gq:function(){var u=this.e
if(u==null){u=D.D()
this.e=u}return u},
a0:function(a){var u
H.d(a,"$iv")
u=this.e
if(u!=null)u.F(a)},
bW:function(){return this.a0(null)},
er:function(a,b){var u,t,s,r,q,p
if(this.a==null){u=H.d(a.fr.k(0,"Skybox"),"$idy")
if(u==null){t=a.a
u=new A.dy(t,"Skybox")
u.d1(t,"Skybox")
u.ej($.kZ,$.kY)
u.z=u.x.k(0,"posAttr")
u.Q=H.c(u.y.k(0,"fov"),"$iR")
u.ch=H.c(u.y.k(0,"ratio"),"$iR")
u.cx=H.c(u.y.k(0,"boxClr"),"$iC")
u.cy=H.c(u.y.k(0,"boxTxt"),"$ia6")
u.db=H.c(u.y.k(0,"viewMat"),"$iaj")
a.dH(u)}this.a=u}if(b.e==null){t=b.d.dN(new Z.dU(a.a),$.aE())
t.ax($.aE()).e=this.a.z.c
b.e=t}t=this.c
if(t!=null){t.a=1
if(!t.c&&t.d>=6){t.c=!0
s=a.a
C.b.dE(s,33985)
C.b.aN(s,34067,t.b)}}t=a.d
s=a.c
r=this.a
r.a_(a)
q=this.b
p=r.Q
C.b.J(p.a,p.d,q)
q=r.ch
C.b.J(q.a,q.d,t/s)
s=this.c
r.cy.eR(s)
s=this.d
t=r.cx
C.b.u(t.a,t.d,s.a,s.b,s.c)
s=a.db.gZ().cI()
r=r.db
r.toString
r.ag(s.ab(0,!0))
t=b.e
if(t instanceof Z.bZ){t.a_(a)
t.aa(a)
t.aQ(a)}else b.e=null
t=this.a
t.toString
s=a.a
C.b.cV(s,null)
t.x.dT()
t=this.c
if(t!=null)if(t.c){t.c=!1
C.b.dE(s,33984+t.a)
C.b.aN(s,34067,null)}}}
O.bj.prototype={}
T.cl.prototype={}
T.dE.prototype={
gq:function(){var u=this.e
if(u==null){u=D.D()
this.e=u}return u}}
T.fL.prototype={
aI:function(a,b,c,d,e,f){var u,t
u=document.createElement("img")
u.src=c;++this.d
t=W.l
W.a0(u,"load",H.k(new T.fM(this,u,!1,b,!1,d,a),{func:1,ret:-1,args:[t]}),!1,t)},
i4:function(a,b,c){var u,t,s,r
b=V.iP(b,2)
u=V.iP(a.width,2)
t=V.iP(a.height,2)
u=Math.min(u,b)
t=Math.min(t,b)
if(a.width===u&&a.height===t)return a
else{s=W.im(null,null)
s.width=u
s.height=t
r=H.d(C.o.eF(s,"2d"),"$ibt")
r.imageSmoothingEnabled=!1;(r&&C.y).js(r,a,0,0,s.width,s.height)
return P.lr(C.y.fP(r,0,0,s.width,s.height))}}}
T.fM.prototype={
$1:function(a){var u,t,s
u=this.a
t=u.i4(this.b,u.c,this.c)
s=u.a
C.b.aN(s,34067,this.d)
C.b.k_(s,37440,this.e?1:0)
C.b.kf(s,this.f,0,6408,6408,5121,t)
C.b.aN(s,34067,null)
s=this.r
if(++s.d>=6){s=s.e
if(s!=null)s.jv()}++u.e},
$S:26}
V.aW.prototype={
az:function(a){return!0},
i:function(a){return"all"},
$ian:1}
V.an.prototype={}
V.dc.prototype={
az:function(a){var u,t,s
for(u=this.a,t=u.length,s=0;s<u.length;u.length===t||(0,H.y)(u),++s)if(u[s].az(a))return!0
return!1},
i:function(a){var u,t,s,r,q
for(u=this.a,t=u.length,s="",r=0;r<u.length;u.length===t||(0,H.y)(u),++r){q=u[r]
if(s.length!==0)s+=", "
s+=q.i(0)}return s},
sa3:function(a){this.a=H.f(a,"$ia",[V.an],"$aa")},
$ian:1}
V.ah.prototype={
az:function(a){return!this.eY(a)},
i:function(a){return"!["+this.d0(0)+"]"}}
V.fn.prototype={
az:function(a){return this.a<=a&&this.b>=a},
i:function(a){var u,t
u=H.iw(this.a)
t=H.iw(this.b)
return u+".."+t},
$ian:1}
V.fv.prototype={
f3:function(a){var u,t
if(a.a.length<=0)throw H.e(P.p("May not create a SetMatcher with zero characters."))
u=new H.aJ([P.x,P.I])
for(t=new H.c8(a,a.gm(a),0,[H.a4(a,"P",0)]);t.B();)u.Y(0,t.d,!0)
this.si7(u)},
az:function(a){return this.a.dQ(a)},
i:function(a){var u=this.a
return P.iy(new H.d8(u,[H.u(u,0)]),0,null)},
si7:function(a){this.a=H.f(a,"$iat",[P.x,P.I],"$aat")},
$ian:1}
V.ch.prototype={
l:function(a,b){var u,t,s,r
for(u=this.c,t=u.length,s=0;s<t;++s){r=u[s]
if(r.b.b===b)return r}r=new V.cn(this.a.j(0,b))
r.sa3(H.b([],[V.an]))
r.c=!1
C.a.h(this.c,r)
return r},
jx:function(a){var u,t,s,r
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.y)(u),++s){r=u[s]
if(r.az(a))return r}return},
i:function(a){return this.b},
siw:function(a){this.c=H.f(a,"$ia",[V.cn],"$aa")}}
V.dJ.prototype={
i:function(a){var u,t
u=H.iR(this.b,"\n","\\n")
t=H.iR(u,"\t","\\t")
return this.a+":"+this.c+':"'+t+'"'}}
V.cm.prototype={
aC:function(a,b,c){var u,t,s
H.f(c,"$ia",[P.m],"$aa")
for(u=c.length,t=0;t<c.length;c.length===u||(0,H.y)(c),++t){s=c[t]
this.c.Y(0,s,b)}},
i:function(a){return this.b},
si0:function(a){var u=P.m
this.c=H.f(a,"$iat",[u,u],"$aat")}}
V.fO.prototype={
j:function(a,b){var u=this.a.k(0,b)
if(u==null){u=new V.ch(this,b)
u.siw(H.b([],[V.cn]))
u.d=null
this.a.Y(0,b,u)}return u},
L:function(a){var u,t
u=this.b.k(0,a)
if(u==null){u=new V.cm(this,a)
t=P.m
u.si0(new H.aJ([t,t]))
this.b.Y(0,a,u)}return u},
ex:function(a){var u,t,s,r,q,p,o,n,m,l,k,j
u=H.b([],[V.dJ])
t=this.c
s=[P.x]
r=H.b([],s)
for(q=a.length,p=null,o=0;!0;){if(o>=q){if(p!=null)C.a.h(u,p)
return u}n=C.j.aG(a,o)
m=t.jx(n)
if(m==null){if(p==null){C.a.h(r,n)
l=P.iy(r,0,null)
throw H.e(P.p("Untokenizable string [state: "+t.b+", index "+o+']: "'+l+'"'))}C.a.h(u,p)
o=p.c+1
r=H.b([],s)
t=this.c
p=null}else{if(!m.c)C.a.h(r,n)
t=m.b
if(t.d!=null){l=P.iy(r,0,null)
k=t.d
j=k.c.k(0,l)
p=new V.dJ(j==null?k.b:j,l,o)}++o}}},
sik:function(a){this.a=H.f(a,"$iat",[P.m,V.ch],"$aat")},
sip:function(a){this.b=H.f(a,"$iat",[P.m,V.cm],"$aat")}}
V.cn.prototype={
i:function(a){return this.b.b+": "+this.d0(0)}}
X.br.prototype={$iaN:1}
X.eJ.prototype={
gq:function(){var u=this.x
if(u==null){u=D.D()
this.x=u}return u},
al:function(a){var u=this.x
if(u!=null)u.F(a)},
a_:function(a){var u,t,s,r,q,p,o,n
u=a.a
C.b.j6(u,36160,null)
C.b.cz(u,2884)
C.b.cz(u,2929)
C.b.jp(u,513)
t=u.drawingBufferWidth
s=u.drawingBufferHeight
r=this.r
q=r.a
if(typeof t!=="number")return H.B(t)
p=C.e.aj(q*t)
q=r.b
if(typeof s!=="number")return H.B(s)
o=C.e.aj(q*s)
q=C.e.aj(r.c*t)
a.c=q
r=C.e.aj(r.d*s)
a.d=r
C.b.kn(u,p,o,q,r)
C.b.jb(u,this.c)
if(this.b){r=this.a
C.b.ja(u,r.a,r.b,r.c,r.d)
n=16640}else n=256
C.b.j9(u,n)}}
X.eO.prototype={
gq:function(){var u=this.b
if(u==null){u=D.D()
this.b=u}return u},
a_:function(a){var u
a.cy.bH(V.bD())
u=V.bD()
a.db.bH(u)},
aQ:function(a){a.cy.aB()
a.db.aB()},
$iaN:1,
$ibr:1}
X.dp.prototype={
gq:function(){var u=this.f
if(u==null){u=D.D()
this.f=u}return u},
al:function(a){var u
H.d(a,"$iv")
u=this.f
if(u!=null)u.F(a)},
fl:function(){return this.al(null)},
a_:function(a){var u,t,s,r,q,p,o,n,m,l
u=a.c
t=a.d
s=this.c
r=this.d
q=this.e
p=q-r
o=1/Math.tan(s*0.5)
n=V.aM(-o/(u/t),0,0,0,0,o,0,0,0,0,q/p,-q*r/p,0,0,1,0)
a.cy.bH(n)
u=$.jg
if(u==null){u=V.ji()
t=V.jB()
s=$.jx
if(s==null){s=new V.K(0,0,-1)
$.jx=s}s=V.jb(u,t,s)
$.jg=s
m=s}else m=u
u=this.b
if(u!=null){l=u.aR(a,this)
if(l!=null)m=l.v(0,m)}a.db.bH(m)},
aQ:function(a){a.cy.aB()
a.db.aB()},
$iaN:1,
$ibr:1}
X.cj.prototype={}
V.b9.prototype={
be:function(a){this.b=new P.eM(C.M)
this.c=null
this.sc4(H.b([],[[P.a,W.as]]))},
K:function(a,b){var u,t,s,r,q,p,o,n,m
u=this.d
if(u.length===0)C.a.h(u,H.b([],[W.as]))
t=a.split("\n")
for(u=t.length,s=[W.as],r=!0,q=0;q<u;++q){p=t[q]
if(r)r=!1
else C.a.h(this.d,H.b([],s))
o=document.createElement("div")
o.className="codePart"
H.J(p)
n=this.b.fA(p,0,p.length)
m=n==null?p:n
C.k.eO(o,H.iR(m," ","&nbsp;"))
m=o.style
m.color=b
C.a.h(C.a.gbD(this.d),o)}},
eq:function(a){var u,t,s,r
H.f(a,"$ia",[P.m],"$aa")
this.sc4(H.b([],[[P.a,W.as]]))
u=C.a.l(a,"\n")
t=this.c
if(t==null){t=this.bl()
this.c=t}for(t=t.ex(u),s=t.length,r=0;r<t.length;t.length===s||(0,H.y)(t),++r)this.bG(t[r])},
sc4:function(a){this.d=H.f(a,"$ia",[[P.a,W.as]],"$aa")}}
V.ie.prototype={
$1:function(a){H.d(a,"$iaP")
P.iQ(C.e.ew(this.a.gjC(),2)+" fps")},
$S:39}
V.es.prototype={
bG:function(a){switch(a.a){case"Class":this.K(a.b,"#551")
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
bl:function(){var u,t,s,r
u=V.fP()
u.c=u.j(0,"Start")
t=u.j(0,"Start").l(0,"Id")
s=V.q(new H.o("_"))
C.a.h(t.a,s)
s=V.Q("a","z")
C.a.h(t.a,s)
s=V.Q("A","Z")
C.a.h(t.a,s)
s=u.j(0,"Id").l(0,"Id")
t=V.q(new H.o("_"))
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
s=V.q(new H.o("."))
C.a.h(t.a,s)
s=u.j(0,"FloatDot").l(0,"Float")
t=V.Q("0","9")
C.a.h(s.a,t)
t=u.j(0,"Float").l(0,"Float")
s=V.Q("0","9")
C.a.h(t.a,s)
s=u.j(0,"Start").l(0,"Sym")
t=V.q(new H.o("<>{}()\\-+*%!&|=.,?:;"))
C.a.h(s.a,t)
t=u.j(0,"Sym").l(0,"Sym")
s=V.q(new H.o("<>{}()\\-+*%!&|=.,?:;"))
C.a.h(t.a,s)
s=u.j(0,"Start").l(0,"OpenDoubleStr")
t=V.q(new H.o('"'))
C.a.h(s.a,t)
t=u.j(0,"OpenDoubleStr").l(0,"CloseDoubleStr")
s=V.q(new H.o('"'))
C.a.h(t.a,s)
s=u.j(0,"OpenDoubleStr").l(0,"EscDoubleStr")
t=V.q(new H.o("\\"))
C.a.h(s.a,t)
t=u.j(0,"EscDoubleStr").l(0,"OpenDoubleStr")
s=V.q(new H.o('"'))
C.a.h(t.a,s)
C.a.h(u.j(0,"OpenDoubleStr").l(0,"OpenDoubleStr").a,new V.aW())
s=u.j(0,"Start").l(0,"OpenSingleStr")
t=V.q(new H.o("'"))
C.a.h(s.a,t)
t=u.j(0,"OpenSingleStr").l(0,"CloseSingleStr")
s=V.q(new H.o("'"))
C.a.h(t.a,s)
s=u.j(0,"OpenSingleStr").l(0,"EscSingleStr")
t=V.q(new H.o("\\"))
C.a.h(s.a,t)
t=u.j(0,"EscSingleStr").l(0,"OpenSingleStr")
s=V.q(new H.o("'"))
C.a.h(t.a,s)
C.a.h(u.j(0,"OpenSingleStr").l(0,"OpenSingleStr").a,new V.aW())
s=u.j(0,"Start").l(0,"Slash")
t=V.q(new H.o("/"))
C.a.h(s.a,t)
t=u.j(0,"Slash").l(0,"Comment")
s=V.q(new H.o("/"))
C.a.h(t.a,s)
s=u.j(0,"Comment").l(0,"EndComment")
t=V.q(new H.o("\n"))
C.a.h(s.a,t)
t=u.j(0,"Comment").l(0,"Comment")
s=new V.ah()
r=[V.an]
s.sa3(H.b([],r))
C.a.h(t.a,s)
t=V.q(new H.o("\n"))
C.a.h(s.a,t)
t=u.j(0,"Slash").l(0,"MLComment")
s=V.q(new H.o("*"))
C.a.h(t.a,s)
s=u.j(0,"MLComment").l(0,"MLCStar")
t=V.q(new H.o("*"))
C.a.h(s.a,t)
t=u.j(0,"MLCStar").l(0,"MLComment")
s=new V.ah()
s.sa3(H.b([],r))
C.a.h(t.a,s)
t=V.q(new H.o("*"))
C.a.h(s.a,t)
t=u.j(0,"MLCStar").l(0,"EndComment")
s=V.q(new H.o("/"))
C.a.h(t.a,s)
s=u.j(0,"Start").l(0,"Whitespace")
t=V.q(new H.o(" \n\t"))
C.a.h(s.a,t)
t=u.j(0,"Whitespace").l(0,"Whitespace")
s=V.q(new H.o(" \n\t"))
C.a.h(t.a,s)
s=u.j(0,"Int")
s.d=s.a.L("Num")
s=u.j(0,"Float")
s.d=s.a.L("Num")
s=u.j(0,"Sym")
s.d=s.a.L("Symbol")
s=u.j(0,"CloseDoubleStr")
s.d=s.a.L("String")
s=u.j(0,"CloseSingleStr")
s.d=s.a.L("String")
s=u.j(0,"EndComment")
s.d=s.a.L("Comment")
s=u.j(0,"Whitespace")
s.d=s.a.L("Whitespace")
s=u.j(0,"Id")
t=s.a.L("Id")
s.d=t
s=[P.m]
t.aC(0,"Class",H.b(["Constant","Depth","Entity","EntityPass","Math","Matrix4","Movers","Rotater","Scenes","Shapes","Techniques","ThreeDart"],s))
t.aC(0,"Type",H.b(["bool","double","dynamic","false","int","List","Map","null","num","Object","String","this","true","var","void"],s))
t.aC(0,"Reserved",H.b(["abstract","as","assert","async","await","break","case","catch","class","continue","const","default","deferred","do","else","enum","export","extends","external","factory","final","finally","for","get","if","implements","import","in","is","library","new","operator","part","rethrow","return","set","static","super","switch","sync","throw","try","typedef","with","while","yield"],s))
return u}}
V.eK.prototype={
bG:function(a){switch(a.a){case"Builtin":this.K(a.b,"#411")
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
bl:function(){var u,t,s,r
u=V.fP()
u.c=u.j(0,"Start")
t=u.j(0,"Start").l(0,"Id")
s=V.q(new H.o("_"))
C.a.h(t.a,s)
s=V.Q("a","z")
C.a.h(t.a,s)
s=V.Q("A","Z")
C.a.h(t.a,s)
s=u.j(0,"Id").l(0,"Id")
t=V.q(new H.o("_"))
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
s=V.q(new H.o("."))
C.a.h(t.a,s)
s=u.j(0,"FloatDot").l(0,"Float")
t=V.Q("0","9")
C.a.h(s.a,t)
t=u.j(0,"Float").l(0,"Float")
s=V.Q("0","9")
C.a.h(t.a,s)
s=u.j(0,"Start").l(0,"Sym")
t=V.q(new H.o("<>{}()[]\\-+*%!&|=.,?:;"))
C.a.h(s.a,t)
t=u.j(0,"Sym").l(0,"Sym")
s=V.q(new H.o("<>{}()[]\\-+*%!&|=.,?:;"))
C.a.h(t.a,s)
s=u.j(0,"Start").l(0,"Slash")
t=V.q(new H.o("/"))
C.a.h(s.a,t)
t=u.j(0,"Slash").l(0,"Comment")
s=V.q(new H.o("/"))
C.a.h(t.a,s)
C.a.h(u.j(0,"Slash").l(0,"Sym").a,new V.aW())
s=u.j(0,"Comment").l(0,"EndComment")
t=V.q(new H.o("\n"))
C.a.h(s.a,t)
t=u.j(0,"Comment").l(0,"Comment")
s=new V.ah()
r=[V.an]
s.sa3(H.b([],r))
C.a.h(t.a,s)
t=V.q(new H.o("\n"))
C.a.h(s.a,t)
t=u.j(0,"Start").l(0,"Preprocess")
s=V.q(new H.o("#"))
C.a.h(t.a,s)
s=u.j(0,"Preprocess").l(0,"Preprocess")
t=new V.ah()
t.sa3(H.b([],r))
C.a.h(s.a,t)
s=V.q(new H.o("\n"))
C.a.h(t.a,s)
s=u.j(0,"Preprocess").l(0,"EndPreprocess")
t=V.q(new H.o("\n"))
C.a.h(s.a,t)
t=u.j(0,"Start").l(0,"Whitespace")
s=V.q(new H.o(" \n\t"))
C.a.h(t.a,s)
s=u.j(0,"Whitespace").l(0,"Whitespace")
t=V.q(new H.o(" \n\t"))
C.a.h(s.a,t)
t=u.j(0,"Int")
t.d=t.a.L("Num")
t=u.j(0,"Float")
t.d=t.a.L("Num")
t=u.j(0,"Sym")
t.d=t.a.L("Symbol")
t=u.j(0,"EndComment")
t.d=t.a.L("Comment")
t=u.j(0,"EndPreprocess")
t.d=t.a.L("Preprocess")
t=u.j(0,"Whitespace")
t.d=t.a.L("Whitespace")
t=u.j(0,"Id")
s=t.a.L("Id")
t.d=s
t=[P.m]
s.aC(0,"Type",H.b(["float","double","int","void","bool","true","false","mat2","mat3","mat4","dmat2","dmat3","dmat4","mat2x2","mat2x3","mat2x4","dmat2x2","dmat2x3","dmat2x4","mat3x2","mat3x3","mat3x4","dmat3x2","dmat3x3","dmat3x4","mat4x2","mat4x3","mat4x4","dmat4x2","dmat4x3","dmat4x4","vec2","vec3","vec4","ivec2","ivec3","ivec4","bvec2","bvec3","bvec4","dvec2","dvec3","dvec4","uint","uvec2","uvec3","uvec4","sampler1D","sampler2D","sampler3D","samplerCube","sampler1DShadow","sampler2DShadow","samplerCubeShadow","sampler1DArray","sampler2DArray","sampler1DArrayShadow","sampler2DArrayShadow","isampler1D","isampler2D","isampler3D","isamplerCube","isampler1DArray","isampler2DArray","usampler1D","usampler2D","usampler3D","usamplerCube","usampler1DArray","usampler2DArray","sampler2DRect","sampler2DRectShadow","isampler2DRect","usampler2DRect","samplerBuffer","isamplerBuffer","usamplerBuffer","sampler2DMS","isampler2DMS","usampler2DMS","sampler2DMSArray","isampler2DMSArray","usampler2DMSArray","samplerCubeArray","samplerCubeArrayShadow","isamplerCubeArray","usamplerCubeArray"],t))
s.aC(0,"Reserved",H.b(["attribute","break","case","centroid","const","continue","default","discard","do","else","flat","for","highp","if","in","inout","invariant","layout","lowp","mediump","noperspective","out","patch","precision","return","sample","smooth","struct","subroutine","switch","uniform","varying","while"],t))
s.aC(0,"Builtin",H.b(["gl_FragColor","gl_Position"],t))
return u}}
V.eL.prototype={
bG:function(a){switch(a.a){case"Attr":this.K(a.b,"#911")
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
bl:function(){var u,t,s
u=V.fP()
u.c=u.j(0,"Start")
t=u.j(0,"Start").l(0,"Id")
s=V.q(new H.o("_"))
C.a.h(t.a,s)
s=V.Q("a","z")
C.a.h(t.a,s)
s=V.Q("A","Z")
C.a.h(t.a,s)
s=u.j(0,"Id").l(0,"Id")
t=V.q(new H.o("_"))
C.a.h(s.a,t)
t=V.Q("0","9")
C.a.h(s.a,t)
t=V.Q("a","z")
C.a.h(s.a,t)
t=V.Q("A","Z")
C.a.h(s.a,t)
t=u.j(0,"Id").l(0,"Attr")
s=V.q(new H.o("="))
C.a.h(t.a,s)
t.c=!0
t=u.j(0,"Start").l(0,"Sym")
s=V.q(new H.o("</\\-!>="))
C.a.h(t.a,s)
s=u.j(0,"Sym").l(0,"Sym")
t=V.q(new H.o("</\\-!>="))
C.a.h(s.a,t)
t=u.j(0,"Start").l(0,"OpenStr")
s=V.q(new H.o('"'))
C.a.h(t.a,s)
s=u.j(0,"OpenStr").l(0,"CloseStr")
t=V.q(new H.o('"'))
C.a.h(s.a,t)
t=u.j(0,"OpenStr").l(0,"EscStr")
s=V.q(new H.o("\\"))
C.a.h(t.a,s)
s=u.j(0,"EscStr").l(0,"OpenStr")
t=V.q(new H.o('"'))
C.a.h(s.a,t)
C.a.h(u.j(0,"OpenStr").l(0,"OpenStr").a,new V.aW())
C.a.h(u.j(0,"Start").l(0,"Other").a,new V.aW())
t=u.j(0,"Other").l(0,"Other")
s=new V.ah()
s.sa3(H.b([],[V.an]))
C.a.h(t.a,s)
t=V.q(new H.o('</\\-!>=_"'))
C.a.h(s.a,t)
t=V.Q("a","z")
C.a.h(s.a,t)
t=V.Q("A","Z")
C.a.h(s.a,t)
t=u.j(0,"Sym")
t.d=t.a.L("Symbol")
t=u.j(0,"CloseStr")
t.d=t.a.L("String")
t=u.j(0,"Id")
s=t.a.L("Id")
t.d=s
s.aC(0,"Reserved",H.b(["DOCTYPE","html","head","meta","link","title","body","script"],[P.m]))
s=u.j(0,"Attr")
s.d=s.a.L("Attr")
s=u.j(0,"Other")
s.d=s.a.L("Other")
return u}}
V.fl.prototype={
eq:function(a){H.f(a,"$ia",[P.m],"$aa")
this.sc4(H.b([],[[P.a,W.as]]))
this.K(C.a.l(a,"\n"),"#111")},
bG:function(a){},
bl:function(){return}}
V.fz.prototype={
f4:function(a,b){var u,t,s,r,q,p,o
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
o=W.l
W.a0(u,"scroll",H.k(new V.fB(s),{func:1,ret:-1,args:[o]}),!1,o)},
dG:function(a){var u,t,s,r,q,p,o,n,m,l,k
H.f(a,"$ia",[P.m],"$aa")
this.ie()
u=document
t=u.createElement("div")
t.className="textPar"
for(s=this.b.ex(C.a.jG(a)),r=s.length,q=0;q<s.length;s.length===r||(0,H.y)(s),++q){p=s[q]
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
if(H.lQ(n,"|",0)){m=n.split("|")
l=u.createElement("a")
l.className="linkPar"
if(1>=m.length)return H.i(m,1)
l.href=H.J(m[1])
l.textContent=H.J(m[0])
C.k.C(t,l)}else{k=P.jI(C.C,n,C.x,!1)
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
eE:function(a){var u,t,s,r
u=new V.es("dart")
u.be("dart")
t=new V.eK("glsl")
t.be("glsl")
s=new V.eL("html")
s.be("html")
r=C.a.jz(H.b([u,t,s],[V.b9]),new V.fC(a))
if(r!=null)return r
u=new V.fl("plain")
u.be("plain")
return u},
dF:function(a4,a5,a6,a7){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3
H.f(a7,"$ia",[P.m],"$aa")
u=H.b([],[P.x])
for(t=!1,s=0;s<a7.length;++s){r=a7[s]
if(J.iM(r).bS(r,"+")){C.a.Y(a7,s,C.j.bc(r,1))
C.a.h(u,1)
t=!0}else if(C.j.bS(r,"-")){C.a.Y(a7,s,C.j.bc(r,1))
C.a.h(u,-1)
t=!0}else C.a.h(u,0)}q=this.eE(a5)
q.eq(a7)
p=document
o=p.createElement("div")
o.className="codeTableScroll"
n=p.createElement("table")
n.className="codeTable"
C.k.C(o,n)
C.k.C(this.a,o)
m=P.jI(C.C,a4,C.x,!1)
l=p.createElement("tr")
l.className="headerRow"
k=p.createElement("td")
k.className="headerCell"
k.colSpan=t?3:2
j=p.createElement("div")
j.className="tableHeader"
j.id=m
i=W.iY(null)
i.href="#"+m
i.textContent=a4
C.k.C(j,i)
C.v.C(k,j)
C.m.C(l,k)
C.p.C(n,l)
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
for(f=r.length,a0=0;a0<r.length;r.length===f||(0,H.y)(r),++a0)C.v.C(a,r[a0])
C.m.C(e,d)
C.m.C(e,c)
C.m.C(e,a)
C.p.C(n,e)}else for(f=q.d,a1=f.length,a2=a6,a0=0;a0<f.length;f.length===a1||(0,H.y)(f),++a0){r=f[a0]
e=p.createElement("tr")
e.className="codeTableRow"
d=p.createElement("td")
d.className="codeLineNums";++a2
d.textContent=""+a2
c=p.createElement("td")
c.className="codeLineText"
for(a3=C.a.gO(r);a3.B();)C.v.C(c,a3.gH())
C.m.C(e,d)
C.m.C(e,c)
C.p.C(n,e)}},
ie:function(){var u,t,s,r
if(this.b!=null)return
u=V.fP()
u.c=u.j(0,"Start")
t=u.j(0,"Start").l(0,"Bold")
s=V.q(new H.o("*"))
C.a.h(t.a,s)
t.c=!0
t=u.j(0,"Bold").l(0,"Bold")
s=new V.ah()
r=[V.an]
s.sa3(H.b([],r))
C.a.h(t.a,s)
t=V.q(new H.o("*"))
C.a.h(s.a,t)
t=u.j(0,"Bold").l(0,"BoldEnd")
s=V.q(new H.o("*"))
C.a.h(t.a,s)
t.c=!0
t=u.j(0,"Start").l(0,"Italic")
s=V.q(new H.o("_"))
C.a.h(t.a,s)
t.c=!0
t=u.j(0,"Italic").l(0,"Italic")
s=new V.ah()
s.sa3(H.b([],r))
C.a.h(t.a,s)
t=V.q(new H.o("_"))
C.a.h(s.a,t)
t=u.j(0,"Italic").l(0,"ItalicEnd")
s=V.q(new H.o("_"))
C.a.h(t.a,s)
t.c=!0
t=u.j(0,"Start").l(0,"Code")
s=V.q(new H.o("`"))
C.a.h(t.a,s)
t.c=!0
t=u.j(0,"Code").l(0,"Code")
s=new V.ah()
s.sa3(H.b([],r))
C.a.h(t.a,s)
t=V.q(new H.o("`"))
C.a.h(s.a,t)
t=u.j(0,"Code").l(0,"CodeEnd")
s=V.q(new H.o("`"))
C.a.h(t.a,s)
t.c=!0
t=u.j(0,"Start").l(0,"LinkHead")
s=V.q(new H.o("["))
C.a.h(t.a,s)
t.c=!0
t=u.j(0,"LinkHead").l(0,"LinkTail")
s=V.q(new H.o("|"))
C.a.h(t.a,s)
s=u.j(0,"LinkHead").l(0,"LinkEnd")
t=V.q(new H.o("]"))
C.a.h(s.a,t)
s.c=!0
s=u.j(0,"LinkHead").l(0,"LinkHead")
t=new V.ah()
t.sa3(H.b([],r))
C.a.h(s.a,t)
s=V.q(new H.o("|]"))
C.a.h(t.a,s)
s=u.j(0,"LinkTail").l(0,"LinkEnd")
t=V.q(new H.o("]"))
C.a.h(s.a,t)
s.c=!0
s=u.j(0,"LinkTail").l(0,"LinkTail")
t=new V.ah()
t.sa3(H.b([],r))
C.a.h(s.a,t)
s=V.q(new H.o("|]"))
C.a.h(t.a,s)
C.a.h(u.j(0,"Start").l(0,"Other").a,new V.aW())
s=u.j(0,"Other").l(0,"Other")
t=new V.ah()
t.sa3(H.b([],r))
C.a.h(s.a,t)
s=V.q(new H.o("*_`["))
C.a.h(t.a,s)
s=u.j(0,"BoldEnd")
s.d=s.a.L("Bold")
s=u.j(0,"ItalicEnd")
s.d=s.a.L("Italic")
s=u.j(0,"CodeEnd")
s.d=s.a.L("Code")
s=u.j(0,"LinkEnd")
s.d=s.a.L("Link")
s=u.j(0,"Other")
s.d=s.a.L("Other")
this.b=u}}
V.fB.prototype={
$1:function(a){P.js(C.q,new V.fA(this.a))},
$S:26}
V.fA.prototype={
$0:function(){var u,t,s
u=C.e.aj(document.documentElement.scrollTop)
t=this.a.style
s=H.h(-0.01*u)+"px"
t.top=s},
$S:2}
V.fC.prototype={
$1:function(a){return H.d(a,"$ib9").a===this.a},
$S:40}
B.ib.prototype={
$1:function(a){var u,t,s,r
H.d(a,"$iv")
u=this.a.c
t=this.b
s=u.a
r=[P.m]
t.dF("Vertex Shader for Skybox","glsl",0,H.b((s==null?null:s.c).split("\n"),r))
s=u.a
t.dF("Fragment Shader for Skybox","glsl",0,H.b((s==null?null:s.d).split("\n"),r))},
$S:6};(function aliases(){var u=J.a2.prototype
u.eV=u.i
u=J.d5.prototype
u.eX=u.i
u=P.j.prototype
u.eW=u.bM
u=W.N.prototype
u.bT=u.ae
u=W.e5.prototype
u.f_=u.an
u=O.df.prototype
u.eZ=u.aK
u=O.aL.prototype
u.bU=u.aK
u=V.dc.prototype
u.eY=u.az
u.d0=u.i})();(function installTearOffs(){var u=hunkHelpers._static_1,t=hunkHelpers._static_0,s=hunkHelpers.installStaticTearOff,r=hunkHelpers.installInstanceTearOff,q=hunkHelpers._instance_2u,p=hunkHelpers._instance_0u,o=hunkHelpers._instance_1u,n=hunkHelpers._instance_0i
u(P,"ll","l3",8)
u(P,"lm","l4",8)
u(P,"ln","l5",8)
t(P,"jR","lk",3)
s(W,"lA",4,null,["$4"],["l7"],20,0)
s(W,"lB",4,null,["$4"],["l8"],20,0)
var m
r(m=E.a9.prototype,"geo",0,0,null,["$1","$0"],["ep","jR"],0,0)
r(m,"gem",0,0,null,["$1","$0"],["en","jO"],0,0)
q(m,"gjM","jN",5)
q(m,"gjP","jQ",5)
r(m=E.dI.prototype,"gd3",0,0,null,["$1","$0"],["d5","d4"],0,0)
p(m,"gk9","es",3)
o(m=X.dP.prototype,"ghk","hl",9)
o(m,"gh8","h9",9)
o(m,"ghe","hf",4)
o(m,"gho","hp",19)
o(m,"ghm","hn",19)
o(m,"ghs","ht",4)
o(m,"ghw","hx",4)
o(m,"ghi","hj",4)
o(m,"ghu","hv",4)
o(m,"ghg","hh",4)
o(m,"ghy","hz",38)
o(m,"ghA","hB",9)
o(m,"ghQ","hR",10)
o(m,"ghM","hN",10)
o(m,"ghO","hP",10)
r(D.bb.prototype,"gf9",0,0,null,["$1","$0"],["ar","fa"],0,0)
r(m=D.d7.prototype,"gdq",0,0,null,["$1","$0"],["dr","hq"],0,0)
o(m,"ghC","hD",42)
q(m,"gh2","h3",21)
q(m,"ghG","hH",21)
n(V.M.prototype,"gm","cJ",22)
n(V.K.prototype,"gm","cJ",22)
r(m=U.c6.prototype,"gaJ",0,0,null,["$1","$0"],["M","a4"],0,0)
q(m,"gh0","h1",23)
q(m,"ghE","hF",23)
r(m=U.dQ.prototype,"gaJ",0,0,null,["$1","$0"],["M","a4"],0,0)
o(m,"gc7","c8",1)
o(m,"gc9","ca",1)
o(m,"gcb","cc",1)
r(m=U.dR.prototype,"gaJ",0,0,null,["$1","$0"],["M","a4"],0,0)
o(m,"gc7","c8",1)
o(m,"gc9","ca",1)
o(m,"gcb","cc",1)
o(m,"gfV","fW",1)
o(m,"gfX","fY",1)
o(m,"giu","iv",1)
o(m,"gis","it",1)
o(m,"giq","ir",1)
o(U.dS.prototype,"gfZ","h_",1)
r(m=M.cR.prototype,"gW",0,0,null,["$1","$0"],["X","aV"],0,0)
q(m,"ghI","hJ",24)
q(m,"ghK","hL",24)
r(M.cT.prototype,"gW",0,0,null,["$1","$0"],["X","aV"],0,0)
r(m=M.cX.prototype,"gW",0,0,null,["$1","$0"],["X","aV"],0,0)
q(m,"gha","hb",5)
q(m,"ghc","hd",5)
r(m=O.dd.prototype,"gbV",0,0,null,["$1","$0"],["a0","bW"],0,0)
r(m,"gi2",0,0,null,["$1","$0"],["dw","i3"],0,0)
q(m,"gh4","h5",25)
q(m,"gh6","h7",25)
r(O.dx.prototype,"gbV",0,0,null,["$1","$0"],["a0","bW"],0,0)
r(X.dp.prototype,"gfk",0,0,null,["$1","$0"],["al","fl"],0,0)})();(function inheritance(){var u=hunkHelpers.mixin,t=hunkHelpers.inherit,s=hunkHelpers.inheritMany
t(P.H,null)
s(P.H,[H.iu,J.a2,J.ae,P.e1,P.j,H.c8,P.aI,H.bx,H.dO,H.fo,H.fS,P.bc,H.c_,H.e6,P.bC,H.eX,H.eY,H.eT,P.e7,P.aU,P.ax,P.dV,P.fF,P.ci,P.fG,P.aP,P.a8,P.hZ,P.hP,P.bL,P.e0,P.P,P.c0,P.eN,P.hX,P.I,P.af,P.a7,P.aH,P.fj,P.dA,P.dY,P.eI,P.bd,P.a,P.E,P.ai,P.m,P.b1,W.eq,W.bm,W.am,W.dm,W.e5,W.hS,W.cZ,W.ap,W.hO,W.eb,P.ea,P.hJ,O.V,O.c9,E.ek,E.a9,E.fp,E.dI,Z.dT,Z.dU,Z.bZ,Z.bA,Z.aS,D.en,D.bv,D.v,X.cQ,X.d6,X.eV,X.f_,X.ao,X.fa,X.fQ,X.dP,D.bb,D.Y,D.dq,D.dz,D.dF,D.dG,D.dH,V.W,V.al,V.ez,V.dg,V.ag,V.Z,V.X,V.aO,V.du,V.M,V.K,U.dQ,U.dR,U.dS,M.cT,M.cX,M.aq,A.cN,A.ej,A.f7,A.co,A.cs,A.cq,A.ct,A.cr,A.cu,A.bu,A.dL,A.h1,F.a_,F.eD,F.bi,F.eW,F.bE,F.dw,F.fw,F.fx,F.fy,F.ac,F.ha,F.hb,F.he,F.hg,F.hh,F.hi,O.bj,O.df,T.fL,V.aW,V.an,V.dc,V.fn,V.fv,V.ch,V.dJ,V.cm,V.fO,X.br,X.cj,X.eO,X.dp,V.b9,V.fz])
s(J.a2,[J.eS,J.d4,J.d5,J.aA,J.bh,J.aY,H.dk,W.bw,W.bt,W.dW,W.et,W.cV,W.cW,W.l,W.dZ,W.be,W.da,W.e3,W.ds,W.aQ,W.e8,W.ec,P.cO,P.d_,P.dr,P.bI,P.dv,P.dD,P.dM])
s(J.d5,[J.fk,J.bl,J.aZ])
t(J.it,J.aA)
s(J.bh,[J.d3,J.d2])
t(P.eZ,P.e1)
s(P.eZ,[H.dN,W.hs,W.ad,P.eE])
t(H.o,H.dN)
s(P.j,[H.ew,H.f2,H.cw])
s(H.ew,[H.bB,H.d8])
s(P.aI,[H.f3,H.hm])
t(H.f4,H.bB)
s(P.bc,[H.fi,H.eU,H.h4,H.fU,H.em,H.ft,P.dn,P.az,P.h5,P.h3,P.bJ,P.ep,P.er])
s(H.c_,[H.ih,H.fK,H.i6,H.i7,H.i8,P.ho,P.hn,P.hp,P.hq,P.hW,P.hV,P.hx,P.hB,P.hy,P.hz,P.hA,P.hE,P.hF,P.hD,P.hC,P.fH,P.fI,P.i0,P.hM,P.hL,P.hN,P.f1,P.eu,P.ev,W.ex,W.hw,W.fg,W.ff,W.hQ,W.hR,W.hU,W.hY,P.i2,P.eF,P.eG,E.fq,E.fr,E.fs,E.fN,D.eB,D.eC,F.ig,F.i3,F.hk,F.hj,F.hc,F.hd,T.fM,V.ie,V.fB,V.fA,V.fC,B.ib])
s(H.fK,[H.fE,H.bX])
t(P.f0,P.bC)
s(P.f0,[H.aJ,W.hr])
t(H.dh,H.dk)
s(H.dh,[H.cA,H.cC])
t(H.cB,H.cA)
t(H.di,H.cB)
t(H.cD,H.cC)
t(H.dj,H.cD)
s(H.dj,[H.fb,H.fc,H.fd,H.dl,H.fe])
t(P.hK,P.hZ)
t(P.hI,P.hP)
t(P.c1,P.fG)
t(P.ey,P.c0)
s(P.c1,[P.eM,P.h7])
t(P.h6,P.ey)
s(P.a7,[P.w,P.x])
s(P.az,[P.bH,P.eP])
s(W.bw,[W.z,W.cx])
s(W.z,[W.N,W.b8,W.c3,W.cy])
s(W.N,[W.t,P.n])
s(W.t,[W.cM,W.ei,W.bW,W.b7,W.bs,W.as,W.eH,W.d0,W.c7,W.ca,W.fu,W.bK,W.dB,W.dC,W.fJ,W.ck])
t(W.c2,W.dW)
t(W.e_,W.dZ)
t(W.by,W.e_)
t(W.d1,W.c3)
t(W.bk,W.l)
s(W.bk,[W.aK,W.a3,W.aC])
t(W.e4,W.e3)
t(W.cc,W.e4)
t(W.e9,W.e8)
t(W.fR,W.e9)
t(W.hl,W.ca)
t(W.aT,W.a3)
t(W.dX,W.cW)
t(W.ed,W.ec)
t(W.e2,W.ed)
t(W.ht,W.hr)
t(W.hu,P.fF)
t(W.iB,W.hu)
t(W.hv,P.ci)
t(W.hT,W.e5)
t(P.av,P.hJ)
t(P.cf,P.n)
s(E.ek,[Z.cP,A.cg,T.cl])
s(D.v,[D.bf,D.bg,D.G,X.fm])
s(X.fm,[X.db,X.b_,X.cb,X.dK])
s(O.V,[D.d7,U.c6,M.cR])
s(D.en,[U.eo,U.a5])
t(U.cS,U.a5)
s(A.cg,[A.de,A.dy])
s(A.dL,[A.F,A.fY,A.fZ,A.h0,A.fW,A.R,A.fX,A.C,A.h_,A.h2,A.cp,A.aj,A.aa,A.a6])
t(F.fD,F.eD)
t(F.fV,F.eW)
t(F.hf,F.hg)
t(F.fh,F.hh)
s(O.bj,[O.dd,O.dx])
s(O.df,[O.f5,O.f6,O.aL])
s(O.aL,[O.f8,O.f9])
t(T.dE,T.cl)
s(V.dc,[V.ah,V.cn])
t(X.eJ,X.cj)
s(V.b9,[V.es,V.eK,V.eL,V.fl])
u(H.dN,H.dO)
u(H.cA,P.P)
u(H.cB,H.bx)
u(H.cC,P.P)
u(H.cD,H.bx)
u(P.e1,P.P)
u(W.dW,W.eq)
u(W.dZ,P.P)
u(W.e_,W.am)
u(W.e3,P.P)
u(W.e4,W.am)
u(W.e8,P.P)
u(W.e9,W.am)
u(W.ec,P.P)
u(W.ed,W.am)})();(function constants(){var u=hunkHelpers.makeConstList
C.n=W.b7.prototype
C.o=W.bs.prototype
C.y=W.bt.prototype
C.k=W.as.prototype
C.J=W.cV.prototype
C.L=W.d0.prototype
C.z=W.d1.prototype
C.N=J.a2.prototype
C.a=J.aA.prototype
C.O=J.d2.prototype
C.d=J.d3.prototype
C.r=J.d4.prototype
C.e=J.bh.prototype
C.j=J.aY.prototype
C.V=J.aZ.prototype
C.Z=W.cc.prototype
C.D=J.fk.prototype
C.E=W.ds.prototype
C.b=P.bI.prototype
C.v=W.bK.prototype
C.p=W.dB.prototype
C.m=W.dC.prototype
C.w=J.bl.prototype
C.F=W.aT.prototype
C.G=W.cx.prototype
C.H=new P.fj()
C.I=new P.h7()
C.l=new P.hK()
C.c=new A.bu(0,"ColorSourceType.None")
C.i=new A.bu(1,"ColorSourceType.Solid")
C.f=new A.bu(2,"ColorSourceType.Texture2D")
C.h=new A.bu(3,"ColorSourceType.TextureCube")
C.q=new P.aH(0)
C.K=new P.aH(5e6)
C.M=new P.eN("element",!0,!1,!1,!1)
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
C.W=H.b(u(["*::class","*::dir","*::draggable","*::hidden","*::id","*::inert","*::itemprop","*::itemref","*::itemscope","*::lang","*::spellcheck","*::title","*::translate","A::accesskey","A::coords","A::hreflang","A::name","A::shape","A::tabindex","A::target","A::type","AREA::accesskey","AREA::alt","AREA::coords","AREA::nohref","AREA::shape","AREA::tabindex","AREA::target","AUDIO::controls","AUDIO::loop","AUDIO::mediagroup","AUDIO::muted","AUDIO::preload","BDO::dir","BODY::alink","BODY::bgcolor","BODY::link","BODY::text","BODY::vlink","BR::clear","BUTTON::accesskey","BUTTON::disabled","BUTTON::name","BUTTON::tabindex","BUTTON::type","BUTTON::value","CANVAS::height","CANVAS::width","CAPTION::align","COL::align","COL::char","COL::charoff","COL::span","COL::valign","COL::width","COLGROUP::align","COLGROUP::char","COLGROUP::charoff","COLGROUP::span","COLGROUP::valign","COLGROUP::width","COMMAND::checked","COMMAND::command","COMMAND::disabled","COMMAND::label","COMMAND::radiogroup","COMMAND::type","DATA::value","DEL::datetime","DETAILS::open","DIR::compact","DIV::align","DL::compact","FIELDSET::disabled","FONT::color","FONT::face","FONT::size","FORM::accept","FORM::autocomplete","FORM::enctype","FORM::method","FORM::name","FORM::novalidate","FORM::target","FRAME::name","H1::align","H2::align","H3::align","H4::align","H5::align","H6::align","HR::align","HR::noshade","HR::size","HR::width","HTML::version","IFRAME::align","IFRAME::frameborder","IFRAME::height","IFRAME::marginheight","IFRAME::marginwidth","IFRAME::width","IMG::align","IMG::alt","IMG::border","IMG::height","IMG::hspace","IMG::ismap","IMG::name","IMG::usemap","IMG::vspace","IMG::width","INPUT::accept","INPUT::accesskey","INPUT::align","INPUT::alt","INPUT::autocomplete","INPUT::autofocus","INPUT::checked","INPUT::disabled","INPUT::inputmode","INPUT::ismap","INPUT::list","INPUT::max","INPUT::maxlength","INPUT::min","INPUT::multiple","INPUT::name","INPUT::placeholder","INPUT::readonly","INPUT::required","INPUT::size","INPUT::step","INPUT::tabindex","INPUT::type","INPUT::usemap","INPUT::value","INS::datetime","KEYGEN::disabled","KEYGEN::keytype","KEYGEN::name","LABEL::accesskey","LABEL::for","LEGEND::accesskey","LEGEND::align","LI::type","LI::value","LINK::sizes","MAP::name","MENU::compact","MENU::label","MENU::type","METER::high","METER::low","METER::max","METER::min","METER::value","OBJECT::typemustmatch","OL::compact","OL::reversed","OL::start","OL::type","OPTGROUP::disabled","OPTGROUP::label","OPTION::disabled","OPTION::label","OPTION::selected","OPTION::value","OUTPUT::for","OUTPUT::name","P::align","PRE::width","PROGRESS::max","PROGRESS::min","PROGRESS::value","SELECT::autocomplete","SELECT::disabled","SELECT::multiple","SELECT::name","SELECT::required","SELECT::size","SELECT::tabindex","SOURCE::type","TABLE::align","TABLE::bgcolor","TABLE::border","TABLE::cellpadding","TABLE::cellspacing","TABLE::frame","TABLE::rules","TABLE::summary","TABLE::width","TBODY::align","TBODY::char","TBODY::charoff","TBODY::valign","TD::abbr","TD::align","TD::axis","TD::bgcolor","TD::char","TD::charoff","TD::colspan","TD::headers","TD::height","TD::nowrap","TD::rowspan","TD::scope","TD::valign","TD::width","TEXTAREA::accesskey","TEXTAREA::autocomplete","TEXTAREA::cols","TEXTAREA::disabled","TEXTAREA::inputmode","TEXTAREA::name","TEXTAREA::placeholder","TEXTAREA::readonly","TEXTAREA::required","TEXTAREA::rows","TEXTAREA::tabindex","TEXTAREA::wrap","TFOOT::align","TFOOT::char","TFOOT::charoff","TFOOT::valign","TH::abbr","TH::align","TH::axis","TH::bgcolor","TH::char","TH::charoff","TH::colspan","TH::headers","TH::height","TH::nowrap","TH::rowspan","TH::scope","TH::valign","TH::width","THEAD::align","THEAD::char","THEAD::charoff","THEAD::valign","TR::align","TR::bgcolor","TR::char","TR::charoff","TR::valign","TRACK::default","TRACK::kind","TRACK::label","TRACK::srclang","UL::compact","UL::type","VIDEO::controls","VIDEO::height","VIDEO::loop","VIDEO::mediagroup","VIDEO::muted","VIDEO::preload","VIDEO::width"]),[P.m])
C.X=H.b(u(["HEAD","AREA","BASE","BASEFONT","BR","COL","COLGROUP","EMBED","FRAME","FRAMESET","HR","IMAGE","IMG","INPUT","ISINDEX","LINK","META","PARAM","SOURCE","STYLE","TITLE","WBR"]),[P.m])
C.Y=H.b(u([]),[P.m])
C.C=H.b(u([0,0,65498,45055,65535,34815,65534,18431]),[P.x])
C.t=H.b(u(["bind","if","ref","repeat","syntax"]),[P.m])
C.u=H.b(u(["A::href","AREA::href","BLOCKQUOTE::cite","BODY::background","COMMAND::icon","DEL::cite","FORM::action","IMG::src","INPUT::src","INS::cite","Q::cite","VIDEO::poster"]),[P.m])
C.x=new P.h6(!1)})();(function staticFields(){$.aG=0
$.bY=null
$.iZ=null
$.iD=!1
$.jU=null
$.jP=null
$.jZ=null
$.i4=null
$.i9=null
$.iN=null
$.bM=null
$.cG=null
$.cH=null
$.iE=!1
$.S=C.l
$.aX=null
$.iq=null
$.j5=null
$.j4=null
$.jc=null
$.jh=null
$.cd=null
$.jm=null
$.jw=null
$.jA=null
$.jy=null
$.jz=null
$.h8=null
$.jx=null
$.kZ="uniform mat4 viewMat;                             \nuniform float fov;                                \nuniform float ratio;                              \n                                                  \nattribute vec3 posAttr;                           \n                                                  \nvarying vec3 cubeTxt;                             \n                                                  \nvoid main()                                       \n{                                                 \n  float t = 1.0 / (tan(fov * 0.5)*3.0);           \n  float x = -t * posAttr.x / ratio;               \n  float y = t * posAttr.y;                        \n  cubeTxt = (viewMat * vec4(x, y, 1.0, 0.0)).xyz; \n  gl_Position = vec4(posAttr, 1.0);               \n}                                                 \n"
$.kY="precision mediump float;                                              \n                                                                      \nuniform samplerCube boxTxt;                                           \nuniform vec3 boxClr;                                                  \n                                                                      \nvarying vec3 cubeTxt;                                                 \n                                                                      \nvoid main()                                                           \n{                                                                     \n   vec3 txtCube = normalize(cubeTxt);                                 \n   gl_FragColor = vec4(boxClr*textureCube(boxTxt, txtCube).xyz, 1.0); \n}                                                                     \n"
$.jg=null})();(function lazyInitializers(){var u=hunkHelpers.lazy
u($,"lZ","k1",function(){return H.jT("_$dart_dartClosure")})
u($,"m_","iS",function(){return H.jT("_$dart_js")})
u($,"m3","k2",function(){return H.aR(H.fT({
toString:function(){return"$receiver$"}}))})
u($,"m4","k3",function(){return H.aR(H.fT({$method$:null,
toString:function(){return"$receiver$"}}))})
u($,"m5","k4",function(){return H.aR(H.fT(null))})
u($,"m6","k5",function(){return H.aR(function(){var $argumentsExpr$='$arguments$'
try{null.$method$($argumentsExpr$)}catch(t){return t.message}}())})
u($,"m9","k8",function(){return H.aR(H.fT(void 0))})
u($,"ma","k9",function(){return H.aR(function(){var $argumentsExpr$='$arguments$'
try{(void 0).$method$($argumentsExpr$)}catch(t){return t.message}}())})
u($,"m8","k7",function(){return H.aR(H.ju(null))})
u($,"m7","k6",function(){return H.aR(function(){try{null.$method$}catch(t){return t.message}}())})
u($,"mc","kb",function(){return H.aR(H.ju(void 0))})
u($,"mb","ka",function(){return H.aR(function(){try{(void 0).$method$}catch(t){return t.message}}())})
u($,"mt","iT",function(){return P.l2()})
u($,"mx","cL",function(){return[]})
u($,"mw","kg",function(){return P.kU("^[\\-\\.0-9A-Z_a-z~]*$",!0,!1)})
u($,"mu","kf",function(){return P.j9(["A","ABBR","ACRONYM","ADDRESS","AREA","ARTICLE","ASIDE","AUDIO","B","BDI","BDO","BIG","BLOCKQUOTE","BR","BUTTON","CANVAS","CAPTION","CENTER","CITE","CODE","COL","COLGROUP","COMMAND","DATA","DATALIST","DD","DEL","DETAILS","DFN","DIR","DIV","DL","DT","EM","FIELDSET","FIGCAPTION","FIGURE","FONT","FOOTER","FORM","H1","H2","H3","H4","H5","H6","HEADER","HGROUP","HR","I","IFRAME","IMG","INPUT","INS","KBD","LABEL","LEGEND","LI","MAP","MARK","MENU","METER","NAV","NOBR","OL","OPTGROUP","OPTION","OUTPUT","P","PRE","PROGRESS","Q","S","SAMP","SECTION","SELECT","SMALL","SOURCE","SPAN","STRIKE","STRONG","SUB","SUMMARY","SUP","TABLE","TBODY","TD","TEXTAREA","TFOOT","TH","THEAD","TIME","TR","TRACK","TT","U","UL","VAR","VIDEO","WBR"],P.m)})
u($,"mv","iU",function(){return P.kF(P.m,P.bd)})
u($,"mm","ke",function(){return Z.aw(0)})
u($,"mg","kc",function(){return Z.aw(511)})
u($,"mo","aE",function(){return Z.aw(1)})
u($,"mn","b4",function(){return Z.aw(2)})
u($,"mi","b3",function(){return Z.aw(4)})
u($,"mp","b5",function(){return Z.aw(8)})
u($,"mq","b6",function(){return Z.aw(16)})
u($,"mj","cJ",function(){return Z.aw(32)})
u($,"mk","cK",function(){return Z.aw(64)})
u($,"ml","kd",function(){return Z.aw(96)})
u($,"mr","bU",function(){return Z.aw(128)})
u($,"mh","b2",function(){return Z.aw(256)})
u($,"lY","k0",function(){return new V.ez(1e-9)})
u($,"lX","L",function(){return $.k0()})})()
var v={mangledGlobalNames:{x:"int",w:"double",a7:"num",m:"String",I:"bool",E:"Null",a:"List"},mangledNames:{},getTypeFromName:getGlobalFromName,metadata:[],types:[{func:1,ret:-1,opt:[D.v]},{func:1,ret:-1,args:[D.v]},{func:1,ret:P.E},{func:1,ret:-1},{func:1,ret:-1,args:[W.a3]},{func:1,ret:-1,args:[P.x,[P.j,E.a9]]},{func:1,ret:P.E,args:[D.v]},{func:1,ret:P.E,args:[F.a_]},{func:1,ret:-1,args:[{func:1,ret:-1}]},{func:1,ret:-1,args:[W.l]},{func:1,ret:-1,args:[W.aC]},{func:1,ret:P.E,args:[,]},{func:1,ret:P.I,args:[P.m]},{func:1,ret:P.E,args:[,,]},{func:1,ret:P.m,args:[P.x]},{func:1,ret:P.I,args:[W.z]},{func:1,ret:P.I,args:[W.ap]},{func:1,args:[,]},{func:1,ret:P.E,args:[{func:1,ret:-1,args:[D.v]}]},{func:1,ret:-1,args:[W.aK]},{func:1,ret:P.I,args:[W.N,P.m,P.m,W.bm]},{func:1,ret:-1,args:[P.x,[P.j,D.Y]]},{func:1,ret:P.w},{func:1,ret:-1,args:[P.x,[P.j,U.a5]]},{func:1,ret:-1,args:[P.x,[P.j,M.aq]]},{func:1,ret:-1,args:[P.x,[P.j,V.ag]]},{func:1,ret:P.E,args:[W.l]},{func:1,ret:P.E,args:[,],opt:[P.ai]},{func:1,args:[,P.m]},{func:1,ret:P.E,args:[{func:1,ret:-1}]},{func:1,args:[W.l]},{func:1,ret:P.E,args:[P.a7]},{func:1,ret:[P.ax,,],args:[,]},{func:1,args:[P.m]},{func:1,ret:V.X,args:[P.w]},{func:1,ret:P.E,args:[F.ac,P.w,P.w]},{func:1,ret:P.m,args:[P.m]},{func:1,ret:-1,args:[W.z,W.z]},{func:1,ret:-1,args:[W.aT]},{func:1,ret:P.E,args:[P.aP]},{func:1,ret:P.I,args:[V.b9]},{func:1,ret:W.N,args:[W.z]},{func:1,ret:P.I,args:[[P.j,D.Y]]}],interceptorsByTag:null,leafTags:null};(function nativeSupport(){!function(){var u=function(a){var o={}
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
hunkHelpers.setOrUpdateInterceptorsByTag({DOMError:J.a2,MediaError:J.a2,Navigator:J.a2,NavigatorConcurrentHardware:J.a2,NavigatorUserMediaError:J.a2,OverconstrainedError:J.a2,PositionError:J.a2,WebGLActiveInfo:J.a2,WebGLRenderbuffer:J.a2,WebGL2RenderingContext:J.a2,SQLError:J.a2,ArrayBufferView:H.dk,Float32Array:H.di,Int16Array:H.fb,Int32Array:H.fc,Uint32Array:H.fd,Uint8ClampedArray:H.dl,CanvasPixelArray:H.dl,Uint8Array:H.fe,HTMLBRElement:W.t,HTMLButtonElement:W.t,HTMLContentElement:W.t,HTMLDListElement:W.t,HTMLDataElement:W.t,HTMLDataListElement:W.t,HTMLDetailsElement:W.t,HTMLDialogElement:W.t,HTMLEmbedElement:W.t,HTMLFieldSetElement:W.t,HTMLHRElement:W.t,HTMLHeadingElement:W.t,HTMLHtmlElement:W.t,HTMLIFrameElement:W.t,HTMLInputElement:W.t,HTMLLIElement:W.t,HTMLLabelElement:W.t,HTMLLegendElement:W.t,HTMLLinkElement:W.t,HTMLMapElement:W.t,HTMLMenuElement:W.t,HTMLMetaElement:W.t,HTMLMeterElement:W.t,HTMLModElement:W.t,HTMLOListElement:W.t,HTMLObjectElement:W.t,HTMLOptGroupElement:W.t,HTMLOptionElement:W.t,HTMLOutputElement:W.t,HTMLParagraphElement:W.t,HTMLParamElement:W.t,HTMLPictureElement:W.t,HTMLPreElement:W.t,HTMLProgressElement:W.t,HTMLQuoteElement:W.t,HTMLScriptElement:W.t,HTMLShadowElement:W.t,HTMLSlotElement:W.t,HTMLSourceElement:W.t,HTMLSpanElement:W.t,HTMLStyleElement:W.t,HTMLTableCaptionElement:W.t,HTMLTableColElement:W.t,HTMLTextAreaElement:W.t,HTMLTimeElement:W.t,HTMLTitleElement:W.t,HTMLTrackElement:W.t,HTMLUListElement:W.t,HTMLUnknownElement:W.t,HTMLDirectoryElement:W.t,HTMLFontElement:W.t,HTMLFrameElement:W.t,HTMLFrameSetElement:W.t,HTMLMarqueeElement:W.t,HTMLElement:W.t,HTMLAnchorElement:W.cM,HTMLAreaElement:W.ei,HTMLBaseElement:W.bW,HTMLBodyElement:W.b7,HTMLCanvasElement:W.bs,CanvasRenderingContext2D:W.bt,CDATASection:W.b8,CharacterData:W.b8,Comment:W.b8,ProcessingInstruction:W.b8,Text:W.b8,CSSStyleDeclaration:W.c2,MSStyleCSSProperties:W.c2,CSS2Properties:W.c2,HTMLDivElement:W.as,XMLDocument:W.c3,Document:W.c3,DOMException:W.et,DOMImplementation:W.cV,DOMRectReadOnly:W.cW,Element:W.N,AbortPaymentEvent:W.l,AnimationEvent:W.l,AnimationPlaybackEvent:W.l,ApplicationCacheErrorEvent:W.l,BackgroundFetchClickEvent:W.l,BackgroundFetchEvent:W.l,BackgroundFetchFailEvent:W.l,BackgroundFetchedEvent:W.l,BeforeInstallPromptEvent:W.l,BeforeUnloadEvent:W.l,BlobEvent:W.l,CanMakePaymentEvent:W.l,ClipboardEvent:W.l,CloseEvent:W.l,CustomEvent:W.l,DeviceMotionEvent:W.l,DeviceOrientationEvent:W.l,ErrorEvent:W.l,ExtendableEvent:W.l,ExtendableMessageEvent:W.l,FetchEvent:W.l,FontFaceSetLoadEvent:W.l,ForeignFetchEvent:W.l,GamepadEvent:W.l,HashChangeEvent:W.l,InstallEvent:W.l,MediaEncryptedEvent:W.l,MediaKeyMessageEvent:W.l,MediaQueryListEvent:W.l,MediaStreamEvent:W.l,MediaStreamTrackEvent:W.l,MessageEvent:W.l,MIDIConnectionEvent:W.l,MIDIMessageEvent:W.l,MutationEvent:W.l,NotificationEvent:W.l,PageTransitionEvent:W.l,PaymentRequestEvent:W.l,PaymentRequestUpdateEvent:W.l,PopStateEvent:W.l,PresentationConnectionAvailableEvent:W.l,PresentationConnectionCloseEvent:W.l,ProgressEvent:W.l,PromiseRejectionEvent:W.l,PushEvent:W.l,RTCDataChannelEvent:W.l,RTCDTMFToneChangeEvent:W.l,RTCPeerConnectionIceEvent:W.l,RTCTrackEvent:W.l,SecurityPolicyViolationEvent:W.l,SensorErrorEvent:W.l,SpeechRecognitionError:W.l,SpeechRecognitionEvent:W.l,SpeechSynthesisEvent:W.l,StorageEvent:W.l,SyncEvent:W.l,TrackEvent:W.l,TransitionEvent:W.l,WebKitTransitionEvent:W.l,VRDeviceEvent:W.l,VRDisplayEvent:W.l,VRSessionEvent:W.l,MojoInterfaceRequestEvent:W.l,ResourceProgressEvent:W.l,USBConnectionEvent:W.l,IDBVersionChangeEvent:W.l,AudioProcessingEvent:W.l,OfflineAudioCompletionEvent:W.l,WebGLContextEvent:W.l,Event:W.l,InputEvent:W.l,EventTarget:W.bw,HTMLFormElement:W.eH,HTMLHeadElement:W.d0,HTMLCollection:W.by,HTMLFormControlsCollection:W.by,HTMLOptionsCollection:W.by,HTMLDocument:W.d1,ImageData:W.be,HTMLImageElement:W.c7,KeyboardEvent:W.aK,Location:W.da,HTMLAudioElement:W.ca,HTMLMediaElement:W.ca,PointerEvent:W.a3,MouseEvent:W.a3,DragEvent:W.a3,DocumentFragment:W.z,ShadowRoot:W.z,DocumentType:W.z,Node:W.z,NodeList:W.cc,RadioNodeList:W.cc,Range:W.ds,HTMLSelectElement:W.fu,HTMLTableCellElement:W.bK,HTMLTableDataCellElement:W.bK,HTMLTableHeaderCellElement:W.bK,HTMLTableElement:W.dB,HTMLTableRowElement:W.dC,HTMLTableSectionElement:W.fJ,HTMLTemplateElement:W.ck,Touch:W.aQ,TouchEvent:W.aC,TouchList:W.fR,CompositionEvent:W.bk,FocusEvent:W.bk,TextEvent:W.bk,UIEvent:W.bk,HTMLVideoElement:W.hl,WheelEvent:W.aT,Window:W.cx,DOMWindow:W.cx,Attr:W.cy,ClientRect:W.dX,DOMRect:W.dX,NamedNodeMap:W.e2,MozNamedAttrMap:W.e2,SVGScriptElement:P.cf,SVGAElement:P.n,SVGAnimateElement:P.n,SVGAnimateMotionElement:P.n,SVGAnimateTransformElement:P.n,SVGAnimationElement:P.n,SVGCircleElement:P.n,SVGClipPathElement:P.n,SVGDefsElement:P.n,SVGDescElement:P.n,SVGDiscardElement:P.n,SVGEllipseElement:P.n,SVGFEBlendElement:P.n,SVGFEColorMatrixElement:P.n,SVGFEComponentTransferElement:P.n,SVGFECompositeElement:P.n,SVGFEConvolveMatrixElement:P.n,SVGFEDiffuseLightingElement:P.n,SVGFEDisplacementMapElement:P.n,SVGFEDistantLightElement:P.n,SVGFEFloodElement:P.n,SVGFEFuncAElement:P.n,SVGFEFuncBElement:P.n,SVGFEFuncGElement:P.n,SVGFEFuncRElement:P.n,SVGFEGaussianBlurElement:P.n,SVGFEImageElement:P.n,SVGFEMergeElement:P.n,SVGFEMergeNodeElement:P.n,SVGFEMorphologyElement:P.n,SVGFEOffsetElement:P.n,SVGFEPointLightElement:P.n,SVGFESpecularLightingElement:P.n,SVGFESpotLightElement:P.n,SVGFETileElement:P.n,SVGFETurbulenceElement:P.n,SVGFilterElement:P.n,SVGForeignObjectElement:P.n,SVGGElement:P.n,SVGGeometryElement:P.n,SVGGraphicsElement:P.n,SVGImageElement:P.n,SVGLineElement:P.n,SVGLinearGradientElement:P.n,SVGMarkerElement:P.n,SVGMaskElement:P.n,SVGMetadataElement:P.n,SVGPathElement:P.n,SVGPatternElement:P.n,SVGPolygonElement:P.n,SVGPolylineElement:P.n,SVGRadialGradientElement:P.n,SVGRectElement:P.n,SVGSetElement:P.n,SVGStopElement:P.n,SVGStyleElement:P.n,SVGSVGElement:P.n,SVGSwitchElement:P.n,SVGSymbolElement:P.n,SVGTSpanElement:P.n,SVGTextContentElement:P.n,SVGTextElement:P.n,SVGTextPathElement:P.n,SVGTextPositioningElement:P.n,SVGTitleElement:P.n,SVGUseElement:P.n,SVGViewElement:P.n,SVGGradientElement:P.n,SVGComponentTransferFunctionElement:P.n,SVGFEDropShadowElement:P.n,SVGMPathElement:P.n,SVGElement:P.n,WebGLBuffer:P.cO,WebGLFramebuffer:P.d_,WebGLProgram:P.dr,WebGLRenderingContext:P.bI,WebGLShader:P.dv,WebGLTexture:P.dD,WebGLUniformLocation:P.dM})
hunkHelpers.setOrUpdateLeafTags({DOMError:true,MediaError:true,Navigator:true,NavigatorConcurrentHardware:true,NavigatorUserMediaError:true,OverconstrainedError:true,PositionError:true,WebGLActiveInfo:true,WebGLRenderbuffer:true,WebGL2RenderingContext:true,SQLError:true,ArrayBufferView:false,Float32Array:true,Int16Array:true,Int32Array:true,Uint32Array:true,Uint8ClampedArray:true,CanvasPixelArray:true,Uint8Array:false,HTMLBRElement:true,HTMLButtonElement:true,HTMLContentElement:true,HTMLDListElement:true,HTMLDataElement:true,HTMLDataListElement:true,HTMLDetailsElement:true,HTMLDialogElement:true,HTMLEmbedElement:true,HTMLFieldSetElement:true,HTMLHRElement:true,HTMLHeadingElement:true,HTMLHtmlElement:true,HTMLIFrameElement:true,HTMLInputElement:true,HTMLLIElement:true,HTMLLabelElement:true,HTMLLegendElement:true,HTMLLinkElement:true,HTMLMapElement:true,HTMLMenuElement:true,HTMLMetaElement:true,HTMLMeterElement:true,HTMLModElement:true,HTMLOListElement:true,HTMLObjectElement:true,HTMLOptGroupElement:true,HTMLOptionElement:true,HTMLOutputElement:true,HTMLParagraphElement:true,HTMLParamElement:true,HTMLPictureElement:true,HTMLPreElement:true,HTMLProgressElement:true,HTMLQuoteElement:true,HTMLScriptElement:true,HTMLShadowElement:true,HTMLSlotElement:true,HTMLSourceElement:true,HTMLSpanElement:true,HTMLStyleElement:true,HTMLTableCaptionElement:true,HTMLTableColElement:true,HTMLTextAreaElement:true,HTMLTimeElement:true,HTMLTitleElement:true,HTMLTrackElement:true,HTMLUListElement:true,HTMLUnknownElement:true,HTMLDirectoryElement:true,HTMLFontElement:true,HTMLFrameElement:true,HTMLFrameSetElement:true,HTMLMarqueeElement:true,HTMLElement:false,HTMLAnchorElement:true,HTMLAreaElement:true,HTMLBaseElement:true,HTMLBodyElement:true,HTMLCanvasElement:true,CanvasRenderingContext2D:true,CDATASection:true,CharacterData:true,Comment:true,ProcessingInstruction:true,Text:true,CSSStyleDeclaration:true,MSStyleCSSProperties:true,CSS2Properties:true,HTMLDivElement:true,XMLDocument:true,Document:false,DOMException:true,DOMImplementation:true,DOMRectReadOnly:false,Element:false,AbortPaymentEvent:true,AnimationEvent:true,AnimationPlaybackEvent:true,ApplicationCacheErrorEvent:true,BackgroundFetchClickEvent:true,BackgroundFetchEvent:true,BackgroundFetchFailEvent:true,BackgroundFetchedEvent:true,BeforeInstallPromptEvent:true,BeforeUnloadEvent:true,BlobEvent:true,CanMakePaymentEvent:true,ClipboardEvent:true,CloseEvent:true,CustomEvent:true,DeviceMotionEvent:true,DeviceOrientationEvent:true,ErrorEvent:true,ExtendableEvent:true,ExtendableMessageEvent:true,FetchEvent:true,FontFaceSetLoadEvent:true,ForeignFetchEvent:true,GamepadEvent:true,HashChangeEvent:true,InstallEvent:true,MediaEncryptedEvent:true,MediaKeyMessageEvent:true,MediaQueryListEvent:true,MediaStreamEvent:true,MediaStreamTrackEvent:true,MessageEvent:true,MIDIConnectionEvent:true,MIDIMessageEvent:true,MutationEvent:true,NotificationEvent:true,PageTransitionEvent:true,PaymentRequestEvent:true,PaymentRequestUpdateEvent:true,PopStateEvent:true,PresentationConnectionAvailableEvent:true,PresentationConnectionCloseEvent:true,ProgressEvent:true,PromiseRejectionEvent:true,PushEvent:true,RTCDataChannelEvent:true,RTCDTMFToneChangeEvent:true,RTCPeerConnectionIceEvent:true,RTCTrackEvent:true,SecurityPolicyViolationEvent:true,SensorErrorEvent:true,SpeechRecognitionError:true,SpeechRecognitionEvent:true,SpeechSynthesisEvent:true,StorageEvent:true,SyncEvent:true,TrackEvent:true,TransitionEvent:true,WebKitTransitionEvent:true,VRDeviceEvent:true,VRDisplayEvent:true,VRSessionEvent:true,MojoInterfaceRequestEvent:true,ResourceProgressEvent:true,USBConnectionEvent:true,IDBVersionChangeEvent:true,AudioProcessingEvent:true,OfflineAudioCompletionEvent:true,WebGLContextEvent:true,Event:false,InputEvent:false,EventTarget:false,HTMLFormElement:true,HTMLHeadElement:true,HTMLCollection:true,HTMLFormControlsCollection:true,HTMLOptionsCollection:true,HTMLDocument:true,ImageData:true,HTMLImageElement:true,KeyboardEvent:true,Location:true,HTMLAudioElement:true,HTMLMediaElement:false,PointerEvent:true,MouseEvent:false,DragEvent:false,DocumentFragment:true,ShadowRoot:true,DocumentType:true,Node:false,NodeList:true,RadioNodeList:true,Range:true,HTMLSelectElement:true,HTMLTableCellElement:true,HTMLTableDataCellElement:true,HTMLTableHeaderCellElement:true,HTMLTableElement:true,HTMLTableRowElement:true,HTMLTableSectionElement:true,HTMLTemplateElement:true,Touch:true,TouchEvent:true,TouchList:true,CompositionEvent:true,FocusEvent:true,TextEvent:true,UIEvent:false,HTMLVideoElement:true,WheelEvent:true,Window:true,DOMWindow:true,Attr:true,ClientRect:true,DOMRect:true,NamedNodeMap:true,MozNamedAttrMap:true,SVGScriptElement:true,SVGAElement:true,SVGAnimateElement:true,SVGAnimateMotionElement:true,SVGAnimateTransformElement:true,SVGAnimationElement:true,SVGCircleElement:true,SVGClipPathElement:true,SVGDefsElement:true,SVGDescElement:true,SVGDiscardElement:true,SVGEllipseElement:true,SVGFEBlendElement:true,SVGFEColorMatrixElement:true,SVGFEComponentTransferElement:true,SVGFECompositeElement:true,SVGFEConvolveMatrixElement:true,SVGFEDiffuseLightingElement:true,SVGFEDisplacementMapElement:true,SVGFEDistantLightElement:true,SVGFEFloodElement:true,SVGFEFuncAElement:true,SVGFEFuncBElement:true,SVGFEFuncGElement:true,SVGFEFuncRElement:true,SVGFEGaussianBlurElement:true,SVGFEImageElement:true,SVGFEMergeElement:true,SVGFEMergeNodeElement:true,SVGFEMorphologyElement:true,SVGFEOffsetElement:true,SVGFEPointLightElement:true,SVGFESpecularLightingElement:true,SVGFESpotLightElement:true,SVGFETileElement:true,SVGFETurbulenceElement:true,SVGFilterElement:true,SVGForeignObjectElement:true,SVGGElement:true,SVGGeometryElement:true,SVGGraphicsElement:true,SVGImageElement:true,SVGLineElement:true,SVGLinearGradientElement:true,SVGMarkerElement:true,SVGMaskElement:true,SVGMetadataElement:true,SVGPathElement:true,SVGPatternElement:true,SVGPolygonElement:true,SVGPolylineElement:true,SVGRadialGradientElement:true,SVGRectElement:true,SVGSetElement:true,SVGStopElement:true,SVGStyleElement:true,SVGSVGElement:true,SVGSwitchElement:true,SVGSymbolElement:true,SVGTSpanElement:true,SVGTextContentElement:true,SVGTextElement:true,SVGTextPathElement:true,SVGTextPositioningElement:true,SVGTitleElement:true,SVGUseElement:true,SVGViewElement:true,SVGGradientElement:true,SVGComponentTransferFunctionElement:true,SVGFEDropShadowElement:true,SVGMPathElement:true,SVGElement:false,WebGLBuffer:true,WebGLFramebuffer:true,WebGLProgram:true,WebGLRenderingContext:true,WebGLShader:true,WebGLTexture:true,WebGLUniformLocation:true})
H.dh.$nativeSuperclassTag="ArrayBufferView"
H.cA.$nativeSuperclassTag="ArrayBufferView"
H.cB.$nativeSuperclassTag="ArrayBufferView"
H.di.$nativeSuperclassTag="ArrayBufferView"
H.cC.$nativeSuperclassTag="ArrayBufferView"
H.cD.$nativeSuperclassTag="ArrayBufferView"
H.dj.$nativeSuperclassTag="ArrayBufferView"})()
convertAllToFastObject(w)
convertToFastObject($);(function(a){if(typeof document==="undefined"){a(null)
return}if(typeof document.currentScript!='undefined'){a(document.currentScript)
return}var u=document.scripts
function onLoad(b){for(var s=0;s<u.length;++s)u[s].removeEventListener("load",onLoad,false)
a(b.target)}for(var t=0;t<u.length;++t)u[t].addEventListener("load",onLoad,false)})(function(a){v.currentScript=a
if(typeof dartMainRunner==="function")dartMainRunner(B.jW,[])
else B.jW([])})})()
//# sourceMappingURL=test.dart.js.map
