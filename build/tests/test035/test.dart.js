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
a[c]=function(){a[c]=function(){H.op(b)}
var t
var s=d
try{if(a[b]===u){t=a[b]=s
t=a[b]=d()}else t=a[b]}finally{if(t===s)a[b]=null
a[c]=function(){return this[b]}}return t}}function makeConstList(a){a.immutable$list=Array
a.fixed$length=Array
return a}function convertToFastObject(a){function t(){}t.prototype=a
new t()
return a}function convertAllToFastObject(a){for(var u=0;u<a.length;++u)convertToFastObject(a[u])}var y=0
function tearOffGetter(a,b,c,d,e){return e?new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+d+y+++"(receiver) {"+"if (c === null) c = "+"H.kL"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, true, name);"+"return new c(this, funcs[0], receiver, name);"+"}")(a,b,c,d,H,null):new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+d+y+++"() {"+"if (c === null) c = "+"H.kL"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, false, name);"+"return new c(this, funcs[0], null, name);"+"}")(a,b,c,d,H,null)}function tearOff(a,b,c,d,e,f){var u=null
return d?function(){if(u===null)u=H.kL(this,a,b,c,true,false,e).prototype
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
if(w[u][a])return w[u][a]}}var C={},H={kt:function kt(a){this.a=a},
jU:function(a){var u,t
u=a^48
if(u<=9)return u
t=a|32
if(97<=t&&t<=102)return t-87
return-1},
l3:function(){return new P.dK("No element")},
mN:function(){return new P.dK("Too few elements")},
a5:function a5(a){this.a=a},
fv:function fv(){},
dq:function dq(a,b,c,d){var _=this
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
iN:function iN(a,b,c){this.a=a
this.b=b
this.$ti=c},
iO:function iO(a,b,c){this.a=a
this.b=b
this.$ti=c},
bN:function bN(){},
cH:function cH(){},
dZ:function dZ(){},
mF:function(){throw H.c(P.E("Cannot modify unmodifiable Map"))},
c6:function(a){var u,t
u=H.L(v.mangledGlobalNames[a])
if(typeof u==="string")return u
t="minified:"+a
return t},
o7:function(a){return v.types[H.af(a)]},
od:function(a,b){var u
if(b!=null){u=b.x
if(u!=null)return u}return!!J.X(a).$iH},
m:function(a){var u
if(typeof a==="string")return a
if(typeof a==="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
u=J.as(a)
if(typeof u!=="string")throw H.c(H.ar(a))
return u},
nb:function(a){var u,t,s
u=a.$reflectionInfo
if(u==null)return
u=J.fJ(u)
t=u[0]
s=u[1]
return new H.hw(a,u,(t&2)===2,t>>2,s>>1,(s&1)===1,u[2])},
ct:function(a){var u=a.$identityHash
if(u==null){u=Math.random()*0x3fffffff|0
a.$identityHash=u}return u},
n8:function(a,b){var u,t,s,r,q,p
u=/^\s*[+-]?((0x[a-f0-9]+)|(\d+)|([a-z0-9]+))\s*$/i.exec(a)
if(u==null)return
if(3>=u.length)return H.e(u,3)
t=H.L(u[3])
if(b==null){if(t!=null)return parseInt(a,10)
if(u[2]!=null)return parseInt(a,16)
return}if(b<2||b>36)throw H.c(P.aa(b,2,36,"radix",null))
if(b===10&&t!=null)return parseInt(a,10)
if(b<10||t==null){s=b<=10?47+b:86+b
r=u[1]
for(q=r.length,p=0;p<q;++p)if((C.c.G(r,p)|32)>s)return}return parseInt(a,b)},
bS:function(a){return H.n_(a)+H.kJ(H.bE(a),0,null)},
n_:function(a){var u,t,s,r,q,p,o,n,m
u=J.X(a)
t=u.constructor
if(typeof t=="function"){s=t.name
r=typeof s==="string"?s:null}else r=null
q=r==null
if(q||u===C.O||!!u.$ibB){p=C.z(a)
if(q)r=p
if(p==="Object"){o=a.constructor
if(typeof o=="function"){n=String(o).match(/^\s*function\s*([\w$]*)\s*\(/)
m=n==null?null:n[1]
if(typeof m==="string"&&/^\w+$/.test(m))r=m}}return r}r=r
return H.c6(r.length>1&&C.c.G(r,0)===36?C.c.aE(r,1):r)},
n0:function(){if(!!self.location)return self.location.href
return},
lf:function(a){var u,t,s,r,q
H.k_(a)
u=J.aE(a)
if(u<=500)return String.fromCharCode.apply(null,a)
for(t="",s=0;s<u;s=r){r=s+500
q=r<u?r:u
t+=String.fromCharCode.apply(null,a.slice(s,q))}return t},
n9:function(a){var u,t,s,r
u=H.d([],[P.o])
for(t=a.length,s=0;s<a.length;a.length===t||(0,H.C)(a),++s){r=a[s]
if(typeof r!=="number"||Math.floor(r)!==r)throw H.c(H.ar(r))
if(r<=65535)C.a.h(u,r)
else if(r<=1114111){C.a.h(u,55296+(C.f.aL(r-65536,10)&1023))
C.a.h(u,56320+(r&1023))}else throw H.c(H.ar(r))}return H.lf(u)},
lg:function(a){var u,t,s
for(u=a.length,t=0;t<u;++t){s=a[t]
if(typeof s!=="number"||Math.floor(s)!==s)throw H.c(H.ar(s))
if(s<0)throw H.c(H.ar(s))
if(s>65535)return H.n9(a)}return H.lf(a)},
na:function(a,b,c){var u,t,s,r
if(c<=500&&b===0&&c===a.length)return String.fromCharCode.apply(null,a)
for(u=b,t="";u<c;u=s){s=u+500
r=s<c?s:c
t+=String.fromCharCode.apply(null,a.subarray(u,r))}return t},
dC:function(a){var u
if(0<=a){if(a<=65535)return String.fromCharCode(a)
if(a<=1114111){u=a-65536
return String.fromCharCode((55296|C.f.aL(u,10))>>>0,56320|u&1023)}}throw H.c(P.aa(a,0,1114111,null,null))},
bR:function(a){if(a.date===void 0)a.date=new Date(a.a)
return a.date},
n7:function(a){var u=H.bR(a).getFullYear()+0
return u},
n5:function(a){var u=H.bR(a).getMonth()+1
return u},
n1:function(a){var u=H.bR(a).getDate()+0
return u},
n2:function(a){var u=H.bR(a).getHours()+0
return u},
n4:function(a){var u=H.bR(a).getMinutes()+0
return u},
n6:function(a){var u=H.bR(a).getSeconds()+0
return u},
n3:function(a){var u=H.bR(a).getMilliseconds()+0
return u},
u:function(a){throw H.c(H.ar(a))},
e:function(a,b){if(a==null)J.aE(a)
throw H.c(H.c1(a,b))},
c1:function(a,b){var u,t
if(typeof b!=="number"||Math.floor(b)!==b)return new P.aT(!0,b,"index",null)
u=H.af(J.aE(a))
if(!(b<0)){if(typeof u!=="number")return H.u(u)
t=b>=u}else t=!0
if(t)return P.V(b,a,"index",null,u)
return P.dE(b,"index",null)},
o0:function(a,b,c){if(a>c)return new P.bT(0,c,!0,a,"start","Invalid value")
if(b!=null)if(b<a||b>c)return new P.bT(a,c,!0,b,"end","Invalid value")
return new P.aT(!0,b,"end",null)},
ar:function(a){return new P.aT(!0,a,null,null)},
c:function(a){var u
if(a==null)a=new P.dz()
u=new Error()
u.dartException=a
if("defineProperty" in Object){Object.defineProperty(u,"message",{get:H.m9})
u.name=""}else u.toString=H.m9
return u},
m9:function(){return J.as(this.dartException)},
t:function(a){throw H.c(a)},
C:function(a){throw H.c(P.bK(a))},
b7:function(a){var u,t,s,r,q,p
a=a.replace(String({}),'$receiver$').replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
u=a.match(/\\\$[a-zA-Z]+\\\$/g)
if(u==null)u=H.d([],[P.h])
t=u.indexOf("\\$arguments\\$")
s=u.indexOf("\\$argumentsExpr\\$")
r=u.indexOf("\\$expr\\$")
q=u.indexOf("\\$method\\$")
p=u.indexOf("\\$receiver\\$")
return new H.i8(a.replace(new RegExp('\\\\\\$arguments\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$argumentsExpr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$expr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$method\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$receiver\\\\\\$','g'),'((?:x|[^x])*)'),t,s,r,q,p)},
i9:function(a){return function($expr$){var $argumentsExpr$='$arguments$'
try{$expr$.$method$($argumentsExpr$)}catch(u){return u.message}}(a)},
lo:function(a){return function($expr$){try{$expr$.$method$}catch(u){return u.message}}(a)},
la:function(a,b){return new H.hm(a,b==null?null:b.method)},
ku:function(a,b){var u,t
u=b==null
t=u?null:b.method
return new H.fN(a,t,u?null:b.receiver)},
aD:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g
u=new H.kg(a)
if(a==null)return
if(typeof a!=="object")return a
if("dartException" in a)return u.$1(a.dartException)
else if(!("message" in a))return a
t=a.message
if("number" in a&&typeof a.number=="number"){s=a.number
r=s&65535
if((C.f.aL(s,16)&8191)===10)switch(r){case 438:return u.$1(H.ku(H.m(t)+" (Error "+r+")",null))
case 445:case 5007:return u.$1(H.la(H.m(t)+" (Error "+r+")",null))}}if(a instanceof TypeError){q=$.mc()
p=$.md()
o=$.me()
n=$.mf()
m=$.mi()
l=$.mj()
k=$.mh()
$.mg()
j=$.ml()
i=$.mk()
h=q.aa(t)
if(h!=null)return u.$1(H.ku(H.L(t),h))
else{h=p.aa(t)
if(h!=null){h.method="call"
return u.$1(H.ku(H.L(t),h))}else{h=o.aa(t)
if(h==null){h=n.aa(t)
if(h==null){h=m.aa(t)
if(h==null){h=l.aa(t)
if(h==null){h=k.aa(t)
if(h==null){h=n.aa(t)
if(h==null){h=j.aa(t)
if(h==null){h=i.aa(t)
g=h!=null}else g=!0}else g=!0}else g=!0}else g=!0}else g=!0}else g=!0}else g=!0
if(g)return u.$1(H.la(H.L(t),h))}}return u.$1(new H.io(typeof t==="string"?t:""))}if(a instanceof RangeError){if(typeof t==="string"&&t.indexOf("call stack")!==-1)return new P.dJ()
t=function(b){try{return String(b)}catch(f){}return null}(a)
return u.$1(new P.aT(!1,null,null,typeof t==="string"?t.replace(/^RangeError:\s*/,""):t))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof t==="string"&&t==="too much recursion")return new P.dJ()
return a},
c4:function(a){var u
if(a==null)return new H.eC(a)
u=a.$cachedTrace
if(u!=null)return u
return a.$cachedTrace=new H.eC(a)},
o3:function(a,b){var u,t,s,r
u=a.length
for(t=0;t<u;t=r){s=t+1
r=s+1
b.l(0,a[t],a[s])}return b},
oc:function(a,b,c,d,e,f){H.f(a,"$ikp")
switch(H.af(b)){case 0:return a.$0()
case 1:return a.$1(c)
case 2:return a.$2(c,d)
case 3:return a.$3(c,d,e)
case 4:return a.$4(c,d,e,f)}throw H.c(P.w("Unsupported number of arguments for wrapped closure"))},
c0:function(a,b){var u
H.af(b)
if(a==null)return
u=a.$identity
if(!!u)return u
u=function(c,d,e){return function(f,g,h,i){return e(c,d,f,g,h,i)}}(a,b,H.oc)
a.$identity=u
return u},
mE:function(a,b,c,d,e,f,g){var u,t,s,r,q,p,o,n,m,l,k,j,i
u=b[0]
t=u.$callName
if(!!J.X(d).$ib){u.$reflectionInfo=d
s=H.nb(u).r}else s=d
r=e?Object.create(new H.hQ().constructor.prototype):Object.create(new H.c9(null,null,null,null).constructor.prototype)
r.$initialize=r.constructor
if(e)q=function static_tear_off(){this.$initialize()}
else{p=$.aU
if(typeof p!=="number")return p.n()
$.aU=p+1
p=new Function("a,b,c,d"+p,"this.$initialize(a,b,c,d"+p+")")
q=p}r.constructor=q
q.prototype=r
if(!e){o=H.l1(a,u,f)
o.$reflectionInfo=d}else{r.$static_name=g
o=u}if(typeof s=="number")n=function(h,a0){return function(){return h(a0)}}(H.o7,s)
else if(typeof s=="function")if(e)n=s
else{m=f?H.l_:H.km
n=function(h,a0){return function(){return h.apply({$receiver:a0(this)},arguments)}}(s,m)}else throw H.c("Error in reflectionInfo.")
r.$S=n
r[t]=o
for(l=o,k=1;k<b.length;++k){j=b[k]
i=j.$callName
if(i!=null){j=e?j:H.l1(a,j,f)
r[i]=j}if(k===c){j.$reflectionInfo=d
l=j}}r.$C=l
r.$R=u.$R
r.$D=u.$D
return q},
mB:function(a,b,c,d){var u=H.km
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,u)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,u)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,u)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,u)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,u)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,u)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,u)}},
l1:function(a,b,c){var u,t,s,r,q,p,o
if(c)return H.mD(a,b)
u=b.$stubName
t=b.length
s=a[u]
r=b==null?s==null:b===s
q=!r||t>=27
if(q)return H.mB(t,!r,u,b)
if(t===0){r=$.aU
if(typeof r!=="number")return r.n()
$.aU=r+1
p="self"+r
r="return function(){var "+p+" = this."
q=$.ca
if(q==null){q=H.fd("self")
$.ca=q}return new Function(r+H.m(q)+";return "+p+"."+H.m(u)+"();}")()}o="abcdefghijklmnopqrstuvwxyz".split("").splice(0,t).join(",")
r=$.aU
if(typeof r!=="number")return r.n()
$.aU=r+1
o+=r
r="return function("+o+"){return this."
q=$.ca
if(q==null){q=H.fd("self")
$.ca=q}return new Function(r+H.m(q)+"."+H.m(u)+"("+o+");}")()},
mC:function(a,b,c,d){var u,t
u=H.km
t=H.l_
switch(b?-1:a){case 0:throw H.c(H.nf("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,u,t)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,u,t)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,u,t)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,u,t)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,u,t)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,u,t)
default:return function(e,f,g,h){return function(){h=[g(this)]
Array.prototype.push.apply(h,arguments)
return e.apply(f(this),h)}}(d,u,t)}},
mD:function(a,b){var u,t,s,r,q,p,o,n
u=$.ca
if(u==null){u=H.fd("self")
$.ca=u}t=$.kZ
if(t==null){t=H.fd("receiver")
$.kZ=t}s=b.$stubName
r=b.length
q=a[s]
p=b==null?q==null:b===q
o=!p||r>=28
if(o)return H.mC(r,!p,s,b)
if(r===1){u="return function(){return this."+H.m(u)+"."+H.m(s)+"(this."+H.m(t)+");"
t=$.aU
if(typeof t!=="number")return t.n()
$.aU=t+1
return new Function(u+t+"}")()}n="abcdefghijklmnopqrstuvwxyz".split("").splice(0,r-1).join(",")
u="return function("+n+"){return this."+H.m(u)+"."+H.m(s)+"(this."+H.m(t)+", "+n+");"
t=$.aU
if(typeof t!=="number")return t.n()
$.aU=t+1
return new Function(u+t+"}")()},
kL:function(a,b,c,d,e,f,g){return H.mE(a,b,H.af(c),d,!!e,!!f,g)},
km:function(a){return a.a},
l_:function(a){return a.c},
fd:function(a){var u,t,s,r,q
u=new H.c9("self","target","receiver","name")
t=J.fJ(Object.getOwnPropertyNames(u))
for(s=t.length,r=0;r<s;++r){q=t[r]
if(u[q]===a)return q}},
L:function(a){if(a==null)return a
if(typeof a==="string")return a
throw H.c(H.aS(a,"String"))},
o1:function(a){if(a==null)return a
if(typeof a==="number")return a
throw H.c(H.aS(a,"double"))},
oi:function(a){if(a==null)return a
if(typeof a==="number")return a
throw H.c(H.aS(a,"num"))},
lV:function(a){if(a==null)return a
if(typeof a==="boolean")return a
throw H.c(H.aS(a,"bool"))},
af:function(a){if(a==null)return a
if(typeof a==="number"&&Math.floor(a)===a)return a
throw H.c(H.aS(a,"int"))},
m6:function(a,b){throw H.c(H.aS(a,H.c6(H.L(b).substring(2))))},
ok:function(a,b){throw H.c(H.mA(a,H.c6(H.L(b).substring(2))))},
f:function(a,b){if(a==null)return a
if((typeof a==="object"||typeof a==="function")&&J.X(a)[b])return a
H.m6(a,b)},
k:function(a,b){var u
if(a!=null)u=(typeof a==="object"||typeof a==="function")&&J.X(a)[b]
else u=!0
if(u)return a
H.ok(a,b)},
k_:function(a){if(a==null)return a
if(!!J.X(a).$ib)return a
throw H.c(H.aS(a,"List<dynamic>"))},
m3:function(a,b){var u
if(a==null)return a
u=J.X(a)
if(!!u.$ib)return a
if(u[b])return a
H.m6(a,b)},
m_:function(a){var u
if("$S" in a){u=a.$S
if(typeof u=="number")return v.types[H.af(u)]
else return a.$S()}return},
eY:function(a,b){var u
if(a==null)return!1
if(typeof a=="function")return!0
u=H.m_(J.X(a))
if(u==null)return!1
return H.lL(u,null,b,null)},
n:function(a,b){var u,t
if(a==null)return a
if($.kG)return a
$.kG=!0
try{if(H.eY(a,b))return a
u=H.ka(b)
t=H.aS(a,u)
throw H.c(t)}finally{$.kG=!1}},
kM:function(a,b){if(a!=null&&!H.kK(a,b))H.t(H.aS(a,H.ka(b)))
return a},
aS:function(a,b){return new H.ia("TypeError: "+P.fy(a)+": type '"+H.lQ(a)+"' is not a subtype of type '"+b+"'")},
mA:function(a,b){return new H.fe("CastError: "+P.fy(a)+": type '"+H.lQ(a)+"' is not a subtype of type '"+b+"'")},
lQ:function(a){var u,t
u=J.X(a)
if(!!u.$icb){t=H.m_(u)
if(t!=null)return H.ka(t)
return"Closure"}return H.bS(a)},
op:function(a){throw H.c(new P.fo(H.L(a)))},
nf:function(a){return new H.hD(a)},
m0:function(a){return v.getIsolateTag(a)},
d:function(a,b){a.$ti=b
return a},
bE:function(a){if(a==null)return
return a.$ti},
p5:function(a,b,c){return H.c5(a["$a"+H.m(c)],H.bE(b))},
bD:function(a,b,c,d){var u
H.L(c)
H.af(d)
u=H.c5(a["$a"+H.m(c)],H.bE(b))
return u==null?null:u[d]},
aw:function(a,b,c){var u
H.L(b)
H.af(c)
u=H.c5(a["$a"+H.m(b)],H.bE(a))
return u==null?null:u[c]},
v:function(a,b){var u
H.af(b)
u=H.bE(a)
return u==null?null:u[b]},
ka:function(a){return H.bC(a,null)},
bC:function(a,b){var u,t
H.l(b,"$ib",[P.h],"$ab")
if(a==null)return"dynamic"
if(a===-1)return"void"
if(typeof a==="object"&&a!==null&&a.constructor===Array)return H.c6(a[0].name)+H.kJ(a,1,b)
if(typeof a=="function")return H.c6(a.name)
if(a===-2)return"dynamic"
if(typeof a==="number"){H.af(a)
if(b==null||a<0||a>=b.length)return"unexpected-generic-index:"+a
u=b.length
t=u-a-1
if(t<0||t>=u)return H.e(b,t)
return H.m(b[t])}if('func' in a)return H.nO(a,b)
if('futureOr' in a)return"FutureOr<"+H.bC("type" in a?a.type:null,b)+">"
return"unknown-reified-type"},
nO:function(a,b){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c
u=[P.h]
H.l(b,"$ib",u,"$ab")
if("bounds" in a){t=a.bounds
if(b==null){b=H.d([],u)
s=null}else s=b.length
r=b.length
for(q=t.length,p=q;p>0;--p)C.a.h(b,"T"+(r+p))
for(o="<",n="",p=0;p<q;++p,n=", "){o+=n
u=b.length
m=u-p-1
if(m<0)return H.e(b,m)
o=C.c.n(o,b[m])
l=t[p]
if(l!=null&&l!==P.P)o+=" extends "+H.bC(l,b)}o+=">"}else{o=""
s=null}k=!!a.v?"void":H.bC(a.ret,b)
if("args" in a){j=a.args
for(u=j.length,i="",h="",g=0;g<u;++g,h=", "){f=j[g]
i=i+h+H.bC(f,b)}}else{i=""
h=""}if("opt" in a){e=a.opt
i+=h+"["
for(u=e.length,h="",g=0;g<u;++g,h=", "){f=e[g]
i=i+h+H.bC(f,b)}i+="]"}if("named" in a){d=a.named
i+=h+"{"
for(u=H.o2(d),m=u.length,h="",g=0;g<m;++g,h=", "){c=H.L(u[g])
i=i+h+H.bC(d[c],b)+(" "+H.m(c))}i+="}"}if(s!=null)b.length=s
return o+"("+i+") => "+k},
kJ:function(a,b,c){var u,t,s,r,q,p
H.l(c,"$ib",[P.h],"$ab")
if(a==null)return""
u=new P.al("")
for(t=b,s="",r=!0,q="";t<a.length;++t,s=", "){u.a=q+s
p=a[t]
if(p!=null)r=!1
q=u.a+=H.bC(p,c)}return"<"+u.i(0)+">"},
c5:function(a,b){if(a==null)return b
a=a.apply(null,b)
if(a==null)return
if(typeof a==="object"&&a!==null&&a.constructor===Array)return a
if(typeof a=="function")return a.apply(null,b)
return b},
cZ:function(a,b,c,d){var u,t
H.L(b)
H.k_(c)
H.L(d)
if(a==null)return!1
u=H.bE(a)
t=J.X(a)
if(t[b]==null)return!1
return H.lT(H.c5(t[d],u),null,c,null)},
l:function(a,b,c,d){H.L(b)
H.k_(c)
H.L(d)
if(a==null)return a
if(H.cZ(a,b,c,d))return a
throw H.c(H.aS(a,function(e,f){return e.replace(/[^<,> ]+/g,function(g){return f[g]||g})}(H.c6(b.substring(2))+H.kJ(c,0,null),v.mangledGlobalNames)))},
lT:function(a,b,c,d){var u,t
if(c==null)return!0
if(a==null){u=c.length
for(t=0;t<u;++t)if(!H.aC(null,null,c[t],d))return!1
return!0}u=a.length
for(t=0;t<u;++t)if(!H.aC(a[t],b,c[t],d))return!1
return!0},
p3:function(a,b,c){return a.apply(b,H.c5(J.X(b)["$a"+H.m(c)],H.bE(b)))},
m2:function(a){var u
if(typeof a==="number")return!1
if('futureOr' in a){u="type" in a?a.type:null
return a==null||a.name==="P"||a.name==="I"||a===-1||a===-2||H.m2(u)}return!1},
kK:function(a,b){var u,t
if(a==null)return b==null||b.name==="P"||b.name==="I"||b===-1||b===-2||H.m2(b)
if(b==null||b===-1||b.name==="P"||b===-2)return!0
if(typeof b=="object"){if('futureOr' in b)if(H.kK(a,"type" in b?b.type:null))return!0
if('func' in b)return H.eY(a,b)}u=J.X(a).constructor
t=H.bE(a)
if(t!=null){t=t.slice()
t.splice(0,0,u)
u=t}return H.aC(u,null,b,null)},
z:function(a,b){if(a!=null&&!H.kK(a,b))throw H.c(H.aS(a,H.ka(b)))
return a},
aC:function(a,b,c,d){var u,t,s,r,q,p,o,n,m
if(a===c)return!0
if(c==null||c===-1||c.name==="P"||c===-2)return!0
if(a===-2)return!0
if(a==null||a===-1||a.name==="P"||a===-2){if(typeof c==="number")return!1
if('futureOr' in c)return H.aC(a,b,"type" in c?c.type:null,d)
return!1}if(typeof a==="number")return!1
if(typeof c==="number")return!1
if(a.name==="I")return!0
if('func' in c)return H.lL(a,b,c,d)
if('func' in a)return c.name==="kp"
u=typeof a==="object"&&a!==null&&a.constructor===Array
t=u?a[0]:a
if('futureOr' in c){s="type" in c?c.type:null
if('futureOr' in a)return H.aC("type" in a?a.type:null,b,s,d)
else if(H.aC(a,b,s,d))return!0
else{if(!('$i'+"ci" in t.prototype))return!1
r=t.prototype["$a"+"ci"]
q=H.c5(r,u?a.slice(1):null)
return H.aC(typeof q==="object"&&q!==null&&q.constructor===Array?q[0]:null,b,s,d)}}p=typeof c==="object"&&c!==null&&c.constructor===Array
o=p?c[0]:c
if(o!==t){n=o.name
if(!('$i'+n in t.prototype))return!1
m=t.prototype["$a"+n]}else m=null
if(!p)return!0
u=u?a.slice(1):null
p=c.slice(1)
return H.lT(H.c5(m,u),b,p,d)},
lL:function(a,b,c,d){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g
if(!('func' in a))return!1
if("bounds" in a){if(!("bounds" in c))return!1
u=a.bounds
t=c.bounds
if(u.length!==t.length)return!1}else if("bounds" in c)return!1
if(!H.aC(a.ret,b,c.ret,d))return!1
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
for(k=0;k<o;++k)if(!H.aC(r[k],d,s[k],b))return!1
for(j=k,i=0;j<n;++i,++j)if(!H.aC(r[j],d,q[i],b))return!1
for(j=0;j<l;++i,++j)if(!H.aC(p[j],d,q[i],b))return!1
h=a.named
g=c.named
if(g==null)return!0
if(h==null)return!1
return H.oh(h,b,g,d)},
oh:function(a,b,c,d){var u,t,s,r
u=Object.getOwnPropertyNames(c)
for(t=u.length,s=0;s<t;++s){r=u[s]
if(!Object.hasOwnProperty.call(a,r))return!1
if(!H.aC(c[r],d,a[r],b))return!1}return!0},
p4:function(a,b,c){Object.defineProperty(a,H.L(b),{value:c,enumerable:false,writable:true,configurable:true})},
of:function(a){var u,t,s,r,q,p
u=H.L($.m1.$1(a))
t=$.jQ[u]
if(t!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:t,enumerable:false,writable:true,configurable:true})
return t.i}s=$.jY[u]
if(s!=null)return s
r=v.interceptorsByTag[u]
if(r==null){u=H.L($.lS.$2(a,u))
if(u!=null){t=$.jQ[u]
if(t!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:t,enumerable:false,writable:true,configurable:true})
return t.i}s=$.jY[u]
if(s!=null)return s
r=v.interceptorsByTag[u]}}if(r==null)return
s=r.prototype
q=u[0]
if(q==="!"){t=H.k9(s)
$.jQ[u]=t
Object.defineProperty(a,v.dispatchPropertyName,{value:t,enumerable:false,writable:true,configurable:true})
return t.i}if(q==="~"){$.jY[u]=s
return s}if(q==="-"){p=H.k9(s)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}if(q==="+")return H.m5(a,s)
if(q==="*")throw H.c(P.im(u))
if(v.leafTags[u]===true){p=H.k9(s)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}else return H.m5(a,s)},
m5:function(a,b){var u=Object.getPrototypeOf(a)
Object.defineProperty(u,v.dispatchPropertyName,{value:J.kP(b,u,null,null),enumerable:false,writable:true,configurable:true})
return b},
k9:function(a){return J.kP(a,!1,null,!!a.$iH)},
og:function(a,b,c){var u=b.prototype
if(v.leafTags[a]===true)return H.k9(u)
else return J.kP(u,c,null,null)},
oa:function(){if(!0===$.kO)return
$.kO=!0
H.ob()},
ob:function(){var u,t,s,r,q,p,o,n
$.jQ=Object.create(null)
$.jY=Object.create(null)
H.o9()
u=v.interceptorsByTag
t=Object.getOwnPropertyNames(u)
if(typeof window!="undefined"){window
s=function(){}
for(r=0;r<t.length;++r){q=t[r]
p=$.m7.$1(q)
if(p!=null){o=H.og(q,u[q],p)
if(o!=null){Object.defineProperty(p,v.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
s.prototype=p}}}}for(r=0;r<t.length;++r){q=t[r]
if(/^[A-Za-z_]/.test(q)){n=u[q]
u["!"+q]=n
u["~"+q]=n
u["-"+q]=n
u["+"+q]=n
u["*"+q]=n}}},
o9:function(){var u,t,s,r,q,p,o
u=C.S()
u=H.c_(C.P,H.c_(C.U,H.c_(C.y,H.c_(C.y,H.c_(C.T,H.c_(C.Q,H.c_(C.R(C.z),u)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){t=dartNativeDispatchHooksTransformer
if(typeof t=="function")t=[t]
if(t.constructor==Array)for(s=0;s<t.length;++s){r=t[s]
if(typeof r=="function")u=r(u)||u}}q=u.getTag
p=u.getUnknownTag
o=u.prototypeForTag
$.m1=new H.jV(q)
$.lS=new H.jW(p)
$.m7=new H.jX(o)},
c_:function(a,b){return a(b)||b},
mP:function(a,b,c,d){var u,t,s,r
u=b?"m":""
t=c?"":"i"
s=d?"g":""
r=function(e,f){try{return new RegExp(e,f)}catch(q){return q}}(a,u+t+s)
if(r instanceof RegExp)return r
throw H.c(P.a3("Illegal RegExp pattern ("+String(r)+")",a,null))},
oo:function(a,b,c){var u=a.indexOf(b,c)
return u>=0},
m8:function(a,b,c){var u,t,s
if(b==="")if(a==="")return c
else{u=a.length
for(t=c,s=0;s<u;++s)t=t+a[s]+c
return t.charCodeAt(0)==0?t:t}else return a.replace(new RegExp(b.replace(/[[\]{}()*+?.\\^$|]/g,"\\$&"),'g'),c.replace(/\$/g,"$$$$"))},
fi:function fi(){},
fj:function fj(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
hw:function hw(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.x=null},
i8:function i8(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
hm:function hm(a,b){this.a=a
this.b=b},
fN:function fN(a,b,c){this.a=a
this.b=b
this.c=c},
io:function io(a){this.a=a},
kg:function kg(a){this.a=a},
eC:function eC(a){this.a=a
this.b=null},
cb:function cb(){},
hY:function hY(){},
hQ:function hQ(){},
c9:function c9(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
ia:function ia(a){this.a=a},
fe:function fe(a){this.a=a},
hD:function hD(a){this.a=a},
aI:function aI(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
fR:function fR(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
fS:function fS(a,b){this.a=a
this.$ti=b},
fT:function fT(a,b,c){var _=this
_.a=a
_.b=b
_.d=_.c=null
_.$ti=c},
jV:function jV(a){this.a=a},
jW:function jW(a){this.a=a},
jX:function jX(a){this.a=a},
fM:function fM(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
bY:function(a){return a},
mZ:function(a){return new Int8Array(a)},
bb:function(a,b,c){if(a>>>0!==a||a>=c)throw H.c(H.c1(b,a))},
nM:function(a,b,c){var u
if(!(a>>>0!==a))u=b>>>0!==b||a>b||b>c
else u=!0
if(u)throw H.c(H.o0(a,b,c))
return b},
co:function co(){},
bx:function bx(){},
dw:function dw(){},
cp:function cp(){},
dx:function dx(){},
hg:function hg(){},
hh:function hh(){},
hi:function hi(){},
hj:function hj(){},
hk:function hk(){},
dy:function dy(){},
cq:function cq(){},
cM:function cM(){},
cN:function cN(){},
cO:function cO(){},
cP:function cP(){},
o2:function(a){return J.l4(a?Object.keys(a):[],null)},
oj:function(a){if(typeof dartPrint=="function"){dartPrint(a)
return}if(typeof console=="object"&&typeof console.log!="undefined"){console.log(a)
return}if(typeof window=="object")return
if(typeof print=="function"){print(a)
return}throw"Unable to print message: "+String(a)}},J={
kP:function(a,b,c,d){return{i:a,p:b,e:c,x:d}},
eZ:function(a){var u,t,s,r,q
u=a[v.dispatchPropertyName]
if(u==null)if($.kO==null){H.oa()
u=a[v.dispatchPropertyName]}if(u!=null){t=u.p
if(!1===t)return u.i
if(!0===t)return a
s=Object.getPrototypeOf(a)
if(t===s)return u.i
if(u.e===s)throw H.c(P.im("Return interceptor for "+H.m(t(a,u))))}r=a.constructor
q=r==null?null:r[$.kR()]
if(q!=null)return q
q=H.of(a)
if(q!=null)return q
if(typeof a=="function")return C.V
t=Object.getPrototypeOf(a)
if(t==null)return C.E
if(t===Object.prototype)return C.E
if(typeof r=="function"){Object.defineProperty(r,$.kR(),{value:C.v,enumerable:false,writable:true,configurable:true})
return C.v}return C.v},
mO:function(a,b){if(typeof a!=="number"||Math.floor(a)!==a)throw H.c(P.kl(a,"length","is not an integer"))
if(a<0||a>4294967295)throw H.c(P.aa(a,0,4294967295,"length",null))
return J.l4(new Array(a),b)},
l4:function(a,b){return J.fJ(H.d(a,[b]))},
fJ:function(a){H.k_(a)
a.fixed$length=Array
return a},
X:function(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.dj.prototype
return J.fL.prototype}if(typeof a=="string")return J.bd.prototype
if(a==null)return J.dk.prototype
if(typeof a=="boolean")return J.fK.prototype
if(a.constructor==Array)return J.aH.prototype
if(typeof a!="object"){if(typeof a=="function")return J.be.prototype
return a}if(a instanceof P.P)return a
return J.eZ(a)},
o4:function(a){if(typeof a=="number")return J.bw.prototype
if(typeof a=="string")return J.bd.prototype
if(a==null)return a
if(a.constructor==Array)return J.aH.prototype
if(typeof a!="object"){if(typeof a=="function")return J.be.prototype
return a}if(a instanceof P.P)return a
return J.eZ(a)},
c3:function(a){if(typeof a=="string")return J.bd.prototype
if(a==null)return a
if(a.constructor==Array)return J.aH.prototype
if(typeof a!="object"){if(typeof a=="function")return J.be.prototype
return a}if(a instanceof P.P)return a
return J.eZ(a)},
jR:function(a){if(a==null)return a
if(a.constructor==Array)return J.aH.prototype
if(typeof a!="object"){if(typeof a=="function")return J.be.prototype
return a}if(a instanceof P.P)return a
return J.eZ(a)},
o5:function(a){if(typeof a=="number")return J.bw.prototype
if(a==null)return a
if(!(a instanceof P.P))return J.bB.prototype
return a},
o6:function(a){if(typeof a=="number")return J.bw.prototype
if(typeof a=="string")return J.bd.prototype
if(a==null)return a
if(!(a instanceof P.P))return J.bB.prototype
return a},
kN:function(a){if(typeof a=="string")return J.bd.prototype
if(a==null)return a
if(!(a instanceof P.P))return J.bB.prototype
return a},
bm:function(a){if(a==null)return a
if(typeof a!="object"){if(typeof a=="function")return J.be.prototype
return a}if(a instanceof P.P)return a
return J.eZ(a)},
mt:function(a,b){if(typeof a=="number"&&typeof b=="number")return a+b
return J.o4(a).n(a,b)},
R:function(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.X(a).t(a,b)},
kT:function(a,b){if(typeof a=="number"&&typeof b=="number")return a*b
return J.o6(a).m(a,b)},
mu:function(a,b){if(typeof a=="number"&&typeof b=="number")return a-b
return J.o5(a).p(a,b)},
kU:function(a,b){if(typeof b==="number")if(a.constructor==Array||typeof a=="string"||H.od(a,a[v.dispatchPropertyName]))if(b>>>0===b&&b<a.length)return a[b]
return J.c3(a).j(a,b)},
ki:function(a,b,c){return J.jR(a).l(a,b,c)},
mv:function(a,b){return J.kN(a).G(a,b)},
kj:function(a,b,c){return J.bm(a).i_(a,b,c)},
mw:function(a,b,c,d){return J.bm(a).iT(a,b,c,d)},
kV:function(a,b){return J.bm(a).X(a,b)},
mx:function(a,b){return J.kN(a).Y(a,b)},
kk:function(a,b){return J.jR(a).K(a,b)},
my:function(a,b,c,d){return J.bm(a).jq(a,b,c,d)},
kW:function(a,b){return J.jR(a).L(a,b)},
kX:function(a){return J.bm(a).gck(a)},
d2:function(a){return J.X(a).gI(a)},
c8:function(a){return J.jR(a).ga0(a)},
aE:function(a){return J.c3(a).gk(a)},
mz:function(a,b){return J.bm(a).k_(a,b)},
as:function(a){return J.X(a).i(a)},
a:function a(){},
fK:function fK(){},
dk:function dk(){},
dl:function dl(){},
hq:function hq(){},
bB:function bB(){},
be:function be(){},
aH:function aH(a){this.$ti=a},
ks:function ks(a){this.$ti=a},
at:function at(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=null
_.$ti=d},
bw:function bw(){},
dj:function dj(){},
fL:function fL(){},
bd:function bd(){}},P={
nr:function(){var u,t,s
u={}
if(self.scheduleImmediate!=null)return P.nW()
if(self.MutationObserver!=null&&self.document!=null){t=self.document.createElement("div")
s=self.document.createElement("span")
u.a=null
new self.MutationObserver(H.c0(new P.iQ(u),1)).observe(t,{childList:true})
return new P.iP(u,t,s)}else if(self.setImmediate!=null)return P.nX()
return P.nY()},
ns:function(a){self.scheduleImmediate(H.c0(new P.iR(H.n(a,{func:1,ret:-1})),0))},
nt:function(a){self.setImmediate(H.c0(new P.iS(H.n(a,{func:1,ret:-1})),0))},
nu:function(a){P.ky(C.u,H.n(a,{func:1,ret:-1}))},
ky:function(a,b){var u
H.n(b,{func:1,ret:-1})
u=C.f.a2(a.a,1000)
return P.nx(u<0?0:u,b)},
ln:function(a,b){var u
H.n(b,{func:1,ret:-1,args:[P.b5]})
u=C.f.a2(a.a,1000)
return P.ny(u<0?0:u,b)},
nx:function(a,b){var u=new P.eI(!0)
u.fn(a,b)
return u},
ny:function(a,b){var u=new P.eI(!1)
u.fo(a,b)
return u},
nv:function(a,b){var u,t,s
b.a=1
try{a.eG(new P.j0(b),new P.j1(b),null)}catch(s){u=H.aD(s)
t=H.c4(s)
P.ol(new P.j2(b,u,t))}},
lA:function(a,b){var u,t
for(;u=a.a,u===2;)a=H.f(a.c,"$iaB")
if(u>=4){t=b.c1()
b.a=a.a
b.c=a.c
P.cK(b,t)}else{t=H.f(b.c,"$iba")
b.a=2
b.c=a
a.dz(t)}},
cK:function(a,b){var u,t,s,r,q,p,o,n,m,l,k,j,i,h
u={}
u.a=a
for(t=a;!0;){s={}
r=t.a===8
if(b==null){if(r){q=H.f(t.c,"$iai")
t=t.b
p=q.a
o=q.b
t.toString
P.jH(null,null,t,p,o)}return}for(;n=b.a,n!=null;b=n){b.a=null
P.cK(u.a,b)}t=u.a
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
if(k){H.f(m,"$iai")
t=t.b
p=m.a
o=m.b
t.toString
P.jH(null,null,t,p,o)
return}j=$.W
if(j!=l)$.W=l
else j=null
t=b.c
if(t===8)new P.j6(u,s,b,r).$0()
else if(p){if((t&1)!==0)new P.j5(s,b,m).$0()}else if((t&2)!==0)new P.j4(u,s,b).$0()
if(j!=null)$.W=j
t=s.b
if(!!J.X(t).$ici){if(t.a>=4){i=H.f(o.c,"$iba")
o.c=null
b=o.bg(i)
o.a=t.a
o.c=t.c
u.a=t
continue}else P.lA(t,o)
return}}h=b.b
i=H.f(h.c,"$iba")
h.c=null
b=h.bg(i)
t=s.a
p=s.b
if(!t){H.z(p,H.v(h,0))
h.a=4
h.c=p}else{H.f(p,"$iai")
h.a=8
h.c=p}u.a=h
t=h}},
nR:function(a,b){if(H.eY(a,{func:1,args:[P.P,P.aq]}))return H.n(a,{func:1,ret:null,args:[P.P,P.aq]})
if(H.eY(a,{func:1,args:[P.P]}))return H.n(a,{func:1,ret:null,args:[P.P]})
throw H.c(P.kl(a,"onError","Error handler must accept one Object or one Object and a StackTrace as arguments, and return a a valid result"))},
nQ:function(){var u,t
for(;u=$.bZ,u!=null;){$.cY=null
t=u.b
$.bZ=t
if(t==null)$.cX=null
u.a.$0()}},
nV:function(){$.kH=!0
try{P.nQ()}finally{$.cY=null
$.kH=!1
if($.bZ!=null)$.kS().$1(P.lU())}},
lP:function(a){var u=new P.e6(H.n(a,{func:1,ret:-1}))
if($.bZ==null){$.cX=u
$.bZ=u
if(!$.kH)$.kS().$1(P.lU())}else{$.cX.b=u
$.cX=u}},
nU:function(a){var u,t,s
H.n(a,{func:1,ret:-1})
u=$.bZ
if(u==null){P.lP(a)
$.cY=$.cX
return}t=new P.e6(a)
s=$.cY
if(s==null){t.b=u
$.cY=t
$.bZ=t}else{t.b=s.b
s.b=t
$.cY=t
if(t.b==null)$.cX=t}},
ol:function(a){var u,t
u={func:1,ret:-1}
H.n(a,u)
t=$.W
if(C.k===t){P.jJ(null,null,C.k,a)
return}t.toString
P.jJ(null,null,t,H.n(t.ce(a),u))},
lm:function(a,b){var u,t
u={func:1,ret:-1}
H.n(b,u)
t=$.W
if(t===C.k){t.toString
return P.ky(a,b)}return P.ky(a,H.n(t.ce(b),u))},
nj:function(a,b){var u,t,s
u={func:1,ret:-1,args:[P.b5]}
H.n(b,u)
t=$.W
if(t===C.k){t.toString
return P.ln(a,b)}s=t.dL(b,P.b5)
$.W.toString
return P.ln(a,H.n(s,u))},
jH:function(a,b,c,d,e){var u={}
u.a=d
P.nU(new P.jI(u,e))},
lM:function(a,b,c,d,e){var u,t
H.n(d,{func:1,ret:e})
t=$.W
if(t===c)return d.$0()
$.W=c
u=t
try{t=d.$0()
return t}finally{$.W=u}},
lN:function(a,b,c,d,e,f,g){var u,t
H.n(d,{func:1,ret:f,args:[g]})
H.z(e,g)
t=$.W
if(t===c)return d.$1(e)
$.W=c
u=t
try{t=d.$1(e)
return t}finally{$.W=u}},
nS:function(a,b,c,d,e,f,g,h,i){var u,t
H.n(d,{func:1,ret:g,args:[h,i]})
H.z(e,h)
H.z(f,i)
t=$.W
if(t===c)return d.$2(e,f)
$.W=c
u=t
try{t=d.$2(e,f)
return t}finally{$.W=u}},
jJ:function(a,b,c,d){var u
H.n(d,{func:1,ret:-1})
u=C.k!==c
if(u)d=!(!u||!1)?c.ce(d):c.j0(d,-1)
P.lP(d)},
iQ:function iQ(a){this.a=a},
iP:function iP(a,b,c){this.a=a
this.b=b
this.c=c},
iR:function iR(a){this.a=a},
iS:function iS(a){this.a=a},
eI:function eI(a){this.a=a
this.b=null
this.c=0},
jq:function jq(a,b){this.a=a
this.b=b},
jp:function jp(a,b,c,d){var _=this
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
aB:function aB(a,b,c){var _=this
_.a=a
_.b=b
_.c=null
_.$ti=c},
j_:function j_(a,b){this.a=a
this.b=b},
j3:function j3(a,b){this.a=a
this.b=b},
j0:function j0(a){this.a=a},
j1:function j1(a){this.a=a},
j2:function j2(a,b,c){this.a=a
this.b=b
this.c=c},
j6:function j6(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
j7:function j7(a){this.a=a},
j5:function j5(a,b,c){this.a=a
this.b=b
this.c=c},
j4:function j4(a,b,c){this.a=a
this.b=b
this.c=c},
e6:function e6(a){this.a=a
this.b=null},
hT:function hT(){},
hV:function hV(a,b){this.a=a
this.b=b},
hW:function hW(a,b){this.a=a
this.b=b},
cx:function cx(){},
hU:function hU(){},
b5:function b5(){},
ai:function ai(a,b){this.a=a
this.b=b},
jA:function jA(){},
jI:function jI(a,b){this.a=a
this.b=b},
je:function je(){},
jg:function jg(a,b,c){this.a=a
this.b=b
this.c=c},
jf:function jf(a,b){this.a=a
this.b=b},
jh:function jh(a,b,c){this.a=a
this.b=b
this.c=c},
mR:function(a,b,c,d,e){return new H.aI([d,e])},
l5:function(a,b){return new H.aI([a,b])},
mT:function(a){return H.o3(a,new H.aI([null,null]))},
mU:function(a,b,c,d){return new P.jb([d])},
lD:function(){var u=Object.create(null)
u["<non-identifier-key>"]=u
delete u["<non-identifier-key>"]
return u},
lC:function(a,b,c){var u=new P.jc(a,b,[c])
u.c=a.e
return u},
mM:function(a,b,c){var u,t
if(P.kI(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}u=H.d([],[P.h])
t=$.d1()
C.a.h(t,a)
try{P.nP(a,u)}finally{if(0>=t.length)return H.e(t,-1)
t.pop()}t=P.lk(b,H.m3(u,"$ij"),", ")+c
return t.charCodeAt(0)==0?t:t},
kr:function(a,b,c){var u,t,s
if(P.kI(a))return b+"..."+c
u=new P.al(b)
t=$.d1()
C.a.h(t,a)
try{s=u
s.a=P.lk(s.a,a,", ")}finally{if(0>=t.length)return H.e(t,-1)
t.pop()}u.a+=c
t=u.a
return t.charCodeAt(0)==0?t:t},
kI:function(a){var u,t
for(u=0;t=$.d1(),u<t.length;++u)if(a===t[u])return!0
return!1},
nP:function(a,b){var u,t,s,r,q,p,o,n,m,l
H.l(b,"$ib",[P.h],"$ab")
u=a.ga0(a)
t=0
s=0
while(!0){if(!(t<80||s<3))break
if(!u.J())return
r=H.m(u.gS(u))
C.a.h(b,r)
t+=r.length+2;++s}if(!u.J()){if(s<=5)return
if(0>=b.length)return H.e(b,-1)
q=b.pop()
if(0>=b.length)return H.e(b,-1)
p=b.pop()}else{o=u.gS(u);++s
if(!u.J()){if(s<=4){C.a.h(b,H.m(o))
return}q=H.m(o)
if(0>=b.length)return H.e(b,-1)
p=b.pop()
t+=q.length+2}else{n=u.gS(u);++s
for(;u.J();o=n,n=m){m=u.gS(u);++s
if(s>100){while(!0){if(!(t>75&&s>3))break
if(0>=b.length)return H.e(b,-1)
t-=b.pop().length+2;--s}C.a.h(b,"...")
return}}p=H.m(o)
q=H.m(n)
t+=q.length+p.length+4}}if(s>b.length+2){t+=5
l="..."}else l=null
while(!0){if(!(t>80&&b.length>3))break
if(0>=b.length)return H.e(b,-1)
t-=b.pop().length+2
if(l==null){t+=5
l="..."}}if(l!=null)C.a.h(b,l)
C.a.h(b,p)
C.a.h(b,q)},
mS:function(a,b,c){var u=P.mR(null,null,null,b,c)
a.L(0,new P.fU(u,b,c))
return u},
kv:function(a){var u,t
u={}
if(P.kI(a))return"{...}"
t=new P.al("")
try{C.a.h($.d1(),a)
t.a+="{"
u.a=!0
J.kW(a,new P.fZ(u,t))
t.a+="}"}finally{u=$.d1()
if(0>=u.length)return H.e(u,-1)
u.pop()}u=t.a
return u.charCodeAt(0)==0?u:u},
jb:function jb(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
cL:function cL(a){this.a=a
this.c=this.b=null},
jc:function jc(a,b,c){var _=this
_.a=a
_.b=b
_.d=_.c=null
_.$ti=c},
fU:function fU(a,b,c){this.a=a
this.b=b
this.c=c},
fV:function fV(){},
y:function y(){},
fY:function fY(){},
fZ:function fZ(a,b){this.a=a
this.b=b},
ag:function ag(){},
jr:function jr(){},
h_:function h_(){},
e_:function e_(a,b){this.a=a
this.$ti=b},
ji:function ji(){},
el:function el(){},
eN:function eN(){},
nm:function(a,b,c,d){H.l(b,"$ib",[P.o],"$ab")
if(b instanceof Uint8Array)return P.nn(!1,b,c,d)
return},
nn:function(a,b,c,d){var u,t,s
u=$.mm()
if(u==null)return
t=0===c
if(t&&!0)return P.kB(u,b)
s=b.length
d=P.bk(c,d,s,null,null,null)
if(t&&d===s)return P.kB(u,b)
return P.kB(u,b.subarray(c,d))},
kB:function(a,b){if(P.np(b))return
return P.nq(a,b)},
nq:function(a,b){var u,t
try{u=a.decode(b)
return u}catch(t){H.aD(t)}return},
np:function(a){var u,t
u=a.length-2
for(t=0;t<u;++t)if(a[t]===237)if((a[t+1]&224)===160)return!0
return!1},
no:function(){var u,t
try{u=new TextDecoder("utf-8",{fatal:true})
return u}catch(t){H.aD(t)}return},
nT:function(a,b,c){var u,t,s
H.l(a,"$ib",[P.o],"$ab")
for(u=J.c3(a),t=b;t<c;++t){s=u.j(a,t)
if(typeof s!=="number")return s.bE()
if((s&127)!==s)return t-b}return c-b},
kY:function(a,b,c,d,e,f){if(C.f.bb(f,4)!==0)throw H.c(P.a3("Invalid base64 padding, padded length must be multiple of four, is "+f,a,c))
if(d+e!==f)throw H.c(P.a3("Invalid base64 padding, '=' not at the end",a,b))
if(e>2)throw H.c(P.a3("Invalid base64 padding, more than two '=' characters",a,b))},
fa:function fa(a){this.a=a},
fb:function fb(a){this.a=a},
bI:function bI(){},
bM:function bM(){},
fw:function fw(){},
iw:function iw(a){this.a=a},
iy:function iy(){},
jz:function jz(a){this.b=this.a=0
this.c=a},
ix:function ix(a){this.a=a},
jx:function jx(a,b){var _=this
_.a=a
_.b=b
_.c=!0
_.f=_.e=_.d=0},
jy:function jy(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
f_:function(a,b,c){var u
H.n(b,{func:1,ret:P.o,args:[P.h]})
u=H.n8(a,c)
if(u!=null)return u
if(b!=null)return b.$1(a)
throw H.c(P.a3(a,null,null))},
mJ:function(a){if(a instanceof H.cb)return a.i(0)
return"Instance of '"+H.bS(a)+"'"},
mV:function(a,b,c,d){var u,t
H.z(b,d)
u=J.mO(a,d)
if(a!==0&&!0)for(t=0;t<u.length;++t)C.a.l(u,t,b)
return H.l(u,"$ib",[d],"$ab")},
mW:function(a,b,c){var u,t,s
u=[c]
t=H.d([],u)
for(s=a.ga0(a);s.J();)C.a.h(t,H.z(s.gS(s),c))
if(b)return t
return H.l(J.fJ(t),"$ib",u,"$ab")},
dM:function(a,b,c){var u,t
u=P.o
H.l(a,"$ij",[u],"$aj")
if(typeof a==="object"&&a!==null&&a.constructor===Array){H.l(a,"$iaH",[u],"$aaH")
t=a.length
c=P.bk(b,c,t,null,null,null)
return H.lg(b>0||c<t?C.a.f_(a,b,c):a)}if(!!J.X(a).$icq)return H.na(a,b,P.bk(b,c,a.length,null,null,null))
return P.nh(a,b,c)},
nh:function(a,b,c){var u,t,s,r
H.l(a,"$ij",[P.o],"$aj")
if(b<0)throw H.c(P.aa(b,0,J.aE(a),null,null))
u=c==null
if(!u&&c<b)throw H.c(P.aa(c,b,J.aE(a),null,null))
t=J.c8(a)
for(s=0;s<b;++s)if(!t.J())throw H.c(P.aa(b,0,s,null,null))
r=[]
if(u)for(;t.J();)r.push(t.gS(t))
else for(s=b;s<c;++s){if(!t.J())throw H.c(P.aa(c,b,s,null,null))
r.push(t.gS(t))}return H.lg(r)},
nd:function(a,b,c){return new H.fM(a,H.mP(a,!1,!0,!1))},
lk:function(a,b,c){var u=J.c8(b)
if(!u.J())return a
if(c.length===0){do a+=H.m(u.gS(u))
while(u.J())}else{a+=H.m(u.gS(u))
for(;u.J();)a=a+c+H.m(u.gS(u))}return a},
lq:function(){var u=H.n0()
if(u!=null)return P.nl(u,0,null)
throw H.c(P.E("'Uri.base' is not supported"))},
jw:function(a,b,c,d){var u,t,s,r,q,p
H.l(a,"$ib",[P.o],"$ab")
if(c===C.m){u=$.mr().b
if(typeof b!=="string")H.t(H.ar(b))
u=u.test(b)}else u=!1
if(u)return b
H.z(b,H.aw(c,"bI",0))
t=c.gjp().cl(b)
for(u=t.length,s=0,r="";s<u;++s){q=t[s]
if(q<128){p=q>>>4
if(p>=8)return H.e(a,p)
p=(a[p]&1<<(q&15))!==0}else p=!1
if(p)r+=H.dC(q)
else r=d&&q===32?r+"+":r+"%"+"0123456789ABCDEF"[q>>>4&15]+"0123456789ABCDEF"[q&15]}return r.charCodeAt(0)==0?r:r},
mG:function(a){var u,t
u=Math.abs(a)
t=a<0?"-":""
if(u>=1000)return""+a
if(u>=100)return t+"0"+u
if(u>=10)return t+"00"+u
return t+"000"+u},
mH:function(a){if(a>=100)return""+a
if(a>=10)return"0"+a
return"00"+a},
db:function(a){if(a>=10)return""+a
return"0"+a},
l2:function(a,b,c,d,e,f){return new P.aX(864e8*a+36e8*b+6e7*e+1e6*f+1000*d+c)},
fy:function(a){if(typeof a==="number"||typeof a==="boolean"||null==a)return J.as(a)
if(typeof a==="string")return JSON.stringify(a)
return P.mJ(a)},
f4:function(a){return new P.aT(!1,null,null,a)},
kl:function(a,b,c){return new P.aT(!0,a,b,c)},
dE:function(a,b,c){return new P.bT(null,null,!0,a,b,"Value not in range")},
aa:function(a,b,c,d,e){return new P.bT(b,c,!0,a,d,"Invalid value")},
bk:function(a,b,c,d,e,f){if(typeof a!=="number")return H.u(a)
if(0>a||a>c)throw H.c(P.aa(a,0,c,"start",f))
if(b!=null){if(a>b||b>c)throw H.c(P.aa(b,a,c,"end",f))
return b}return c},
V:function(a,b,c,d,e){var u=H.af(e==null?J.aE(b):e)
return new P.fI(b,u,!0,a,c,"Index out of range")},
E:function(a){return new P.ip(a)},
im:function(a){return new P.il(a)},
bK:function(a){return new P.fh(a)},
w:function(a){return new P.ee(a)},
a3:function(a,b,c){return new P.fG(a,b,c)},
mX:function(a,b,c,d){var u,t
H.n(b,{func:1,ret:d,args:[P.o]})
u=H.d([],[d])
C.a.sk(u,a)
for(t=0;t<a;++t)C.a.l(u,t,b.$1(t))
return u},
kQ:function(a){H.oj(a)},
nl:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k,j,i,h
c=a.length
u=b+5
if(c>=u){t=((C.c.G(a,b+4)^58)*3|C.c.G(a,b)^100|C.c.G(a,b+1)^97|C.c.G(a,b+2)^116|C.c.G(a,b+3)^97)>>>0
if(t===0)return P.lp(b>0||c<c?C.c.u(a,b,c):a,5,null).geL()
else if(t===32)return P.lp(C.c.u(a,u,c),0,null).geL()}s=new Array(8)
s.fixed$length=Array
r=H.d(s,[P.o])
C.a.l(r,0,0)
s=b-1
C.a.l(r,1,s)
C.a.l(r,2,s)
C.a.l(r,7,s)
C.a.l(r,3,b)
C.a.l(r,4,b)
C.a.l(r,5,c)
C.a.l(r,6,c)
if(P.lO(a,b,c,0,r)>=14)C.a.l(r,7,c)
q=r[1]
if(typeof q!=="number")return q.kk()
if(q>=b)if(P.lO(a,b,q,20,r)===20)r[7]=q
s=r[2]
if(typeof s!=="number")return s.n()
p=s+1
o=r[3]
n=r[4]
m=r[5]
l=r[6]
if(typeof l!=="number")return l.V()
if(typeof m!=="number")return H.u(m)
if(l<m)m=l
if(typeof n!=="number")return n.V()
if(n<p)n=m
else if(n<=q)n=q+1
if(typeof o!=="number")return o.V()
if(o<p)o=n
s=r[7]
if(typeof s!=="number")return s.V()
k=s<b
if(k)if(p>q+3){j=null
k=!1}else{s=o>b
if(s&&o+1===n){j=null
k=!1}else{if(!(m<c&&m===n+2&&C.c.a7(a,"..",n)))i=m>n+2&&C.c.a7(a,"/..",m-3)
else i=!0
if(i){j=null
k=!1}else{if(q===b+4)if(C.c.a7(a,"file",b)){if(p<=b){if(!C.c.a7(a,"/",n)){h="file:///"
t=3}else{h="file://"
t=2}a=h+C.c.u(a,n,c)
q-=b
u=t-b
m+=u
l+=u
c=a.length
b=0
p=7
o=7
n=7}else if(n===m)if(b===0&&!0){a=C.c.aR(a,n,m,"/");++m;++l;++c}else{a=C.c.u(a,b,n)+"/"+C.c.u(a,m,c)
q-=b
p-=b
o-=b
n-=b
u=1-b
m+=u
l+=u
c=a.length
b=0}j="file"}else if(C.c.a7(a,"http",b)){if(s&&o+3===n&&C.c.a7(a,"80",o+1))if(b===0&&!0){a=C.c.aR(a,o,n,"")
n-=3
m-=3
l-=3
c-=3}else{a=C.c.u(a,b,o)+C.c.u(a,n,c)
q-=b
p-=b
o-=b
u=3+b
n-=u
m-=u
l-=u
c=a.length
b=0}j="http"}else j=null
else if(q===u&&C.c.a7(a,"https",b)){if(s&&o+4===n&&C.c.a7(a,"443",o+1))if(b===0&&!0){a=C.c.aR(a,o,n,"")
n-=4
m-=4
l-=4
c-=3}else{a=C.c.u(a,b,o)+C.c.u(a,n,c)
q-=b
p-=b
o-=b
u=4+b
n-=u
m-=u
l-=u
c=a.length
b=0}j="https"}else j=null
k=!0}}}else j=null
if(k){if(b>0||c<a.length){a=C.c.u(a,b,c)
q-=b
p-=b
o-=b
n-=b
m-=b
l-=b}return new P.jj(a,q,p,o,n,m,l,j)}return P.nz(a,b,c,q,p,o,n,m,l,j)},
ls:function(a,b){var u=P.h
return C.a.jt(H.d(a.split("&"),[u]),P.l5(u,u),new P.iu(b),[P.D,P.h,P.h])},
nk:function(a,b,c){var u,t,s,r,q,p,o,n,m
u=new P.ir(a)
t=new Uint8Array(4)
for(s=t.length,r=b,q=r,p=0;r<c;++r){o=C.c.Y(a,r)
if(o!==46){if((o^48)>9)u.$2("invalid character",r)}else{if(p===3)u.$2("IPv4 address should contain exactly 4 parts",r)
n=P.f_(C.c.u(a,q,r),null,null)
if(typeof n!=="number")return n.cV()
if(n>255)u.$2("each part must be in the range 0..255",q)
m=p+1
if(p>=s)return H.e(t,p)
t[p]=n
q=r+1
p=m}}if(p!==3)u.$2("IPv4 address should contain exactly 4 parts",c)
n=P.f_(C.c.u(a,q,c),null,null)
if(typeof n!=="number")return n.cV()
if(n>255)u.$2("each part must be in the range 0..255",q)
if(p>=s)return H.e(t,p)
t[p]=n
return t},
lr:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
if(c==null)c=a.length
u=new P.is(a)
t=new P.it(u,a)
if(a.length<2)u.$1("address is too short")
s=H.d([],[P.o])
for(r=b,q=r,p=!1,o=!1;r<c;++r){n=C.c.Y(a,r)
if(n===58){if(r===b){++r
if(C.c.Y(a,r)!==58)u.$2("invalid start colon.",r)
q=r}if(r===q){if(p)u.$2("only one wildcard `::` is allowed",r)
C.a.h(s,-1)
p=!0}else C.a.h(s,t.$2(q,r))
q=r+1}else if(n===46)o=!0}if(s.length===0)u.$1("too few parts")
m=q===c
l=C.a.gaC(s)
if(m&&l!==-1)u.$2("expected a part after last `:`",c)
if(!m)if(!o)C.a.h(s,t.$2(q,c))
else{k=P.nk(a,q,c)
C.a.h(s,(k[0]<<8|k[1])>>>0)
C.a.h(s,(k[2]<<8|k[3])>>>0)}if(p){if(s.length>7)u.$1("an address with a wildcard must have less than 7 parts")}else if(s.length!==8)u.$1("an address without a wildcard must contain exactly 8 parts")
j=new Uint8Array(16)
for(l=s.length,i=j.length,h=9-l,r=0,g=0;r<l;++r){f=s[r]
if(f===-1)for(e=0;e<h;++e){if(g<0||g>=i)return H.e(j,g)
j[g]=0
d=g+1
if(d>=i)return H.e(j,d)
j[d]=0
g+=2}else{d=C.f.aL(f,8)
if(g<0||g>=i)return H.e(j,g)
j[g]=d
d=g+1
if(d>=i)return H.e(j,d)
j[d]=f&255
g+=2}}return j},
nz:function(a,b,c,d,e,f,g,h,i,j){var u,t,s,r,q,p,o
if(j==null)if(d>b)j=P.nG(a,b,d)
else{if(d===b)P.cU(a,b,"Invalid empty scheme")
j=""}if(e>b){u=d+3
t=u<e?P.nH(a,u,e-1):""
s=P.nD(a,e,f,!1)
if(typeof f!=="number")return f.n()
r=f+1
if(typeof g!=="number")return H.u(g)
q=r<g?P.nF(P.f_(C.c.u(a,r,g),new P.js(a,f),null),j):null}else{t=""
s=null
q=null}p=P.nE(a,g,h,null,j,s!=null)
if(typeof h!=="number")return h.V()
o=h<i?P.kE(a,h+1,i,null):null
return new P.bX(j,t,s,q,p,o,i<c?P.nC(a,i+1,c):null)},
lE:function(a){if(a==="http")return 80
if(a==="https")return 443
return 0},
cU:function(a,b,c){throw H.c(P.a3(c,a,b))},
nF:function(a,b){if(a!=null&&a===P.lE(b))return
return a},
nD:function(a,b,c,d){var u,t
if(b===c)return""
if(C.c.Y(a,b)===91){if(typeof c!=="number")return c.p()
u=c-1
if(C.c.Y(a,u)!==93)P.cU(a,b,"Missing end `]` to match `[` in host")
P.lr(a,b+1,u)
return C.c.u(a,b,c).toLowerCase()}if(typeof c!=="number")return H.u(c)
t=b
for(;t<c;++t)if(C.c.Y(a,t)===58){P.lr(a,b,c)
return"["+a+"]"}return P.nJ(a,b,c)},
nJ:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k
if(typeof c!=="number")return H.u(c)
u=b
t=u
s=null
r=!0
for(;u<c;){q=C.c.Y(a,u)
if(q===37){p=P.lK(a,u,!0)
o=p==null
if(o&&r){u+=3
continue}if(s==null)s=new P.al("")
n=C.c.u(a,t,u)
m=s.a+=!r?n.toLowerCase():n
if(o){p=C.c.u(a,u,u+3)
l=3}else if(p==="%"){p="%25"
l=1}else l=3
s.a=m+p
u+=l
t=u
r=!0}else{if(q<127){o=q>>>4
if(o>=8)return H.e(C.C,o)
o=(C.C[o]&1<<(q&15))!==0}else o=!1
if(o){if(r&&65<=q&&90>=q){if(s==null)s=new P.al("")
if(t<u){s.a+=C.c.u(a,t,u)
t=u}r=!1}++u}else{if(q<=93){o=q>>>4
if(o>=8)return H.e(C.o,o)
o=(C.o[o]&1<<(q&15))!==0}else o=!1
if(o)P.cU(a,u,"Invalid character")
else{if((q&64512)===55296&&u+1<c){k=C.c.Y(a,u+1)
if((k&64512)===56320){q=65536|(q&1023)<<10|k&1023
l=2}else l=1}else l=1
if(s==null)s=new P.al("")
n=C.c.u(a,t,u)
s.a+=!r?n.toLowerCase():n
s.a+=P.lF(q)
u+=l
t=u}}}}if(s==null)return C.c.u(a,b,c)
if(t<c){n=C.c.u(a,t,c)
s.a+=!r?n.toLowerCase():n}o=s.a
return o.charCodeAt(0)==0?o:o},
nG:function(a,b,c){var u,t,s,r
if(b===c)return""
if(!P.lH(C.c.G(a,b)))P.cU(a,b,"Scheme not starting with alphabetic character")
for(u=b,t=!1;u<c;++u){s=C.c.G(a,u)
if(s<128){r=s>>>4
if(r>=8)return H.e(C.q,r)
r=(C.q[r]&1<<(s&15))!==0}else r=!1
if(!r)P.cU(a,u,"Illegal scheme character")
if(65<=s&&s<=90)t=!0}a=C.c.u(a,b,c)
return P.nA(t?a.toLowerCase():a)},
nA:function(a){if(a==="http")return"http"
if(a==="file")return"file"
if(a==="https")return"https"
if(a==="package")return"package"
return a},
nH:function(a,b,c){return P.cV(a,b,c,C.X,!1)},
nE:function(a,b,c,d,e,f){var u,t,s,r
u=e==="file"
t=u||f
s=a==null
if(s&&!0)return u?"/":""
r=!s?P.cV(a,b,c,C.D,!0):C.n.kn(d,new P.jt(),P.h).D(0,"/")
if(r.length===0){if(u)return"/"}else if(t&&!C.c.a6(r,"/"))r="/"+r
return P.nI(r,e,f)},
nI:function(a,b,c){var u=b.length===0
if(u&&!c&&!C.c.a6(a,"/"))return P.nK(a,!u||c)
return P.nL(a)},
kE:function(a,b,c,d){var u,t
u={}
H.l(d,"$iD",[P.h,null],"$aD")
if(a!=null){if(d!=null)throw H.c(P.f4("Both query and queryParameters specified"))
return P.cV(a,b,c,C.p,!0)}if(d==null)return
t=new P.al("")
u.a=""
d.L(0,new P.ju(new P.jv(u,t)))
u=t.a
return u.charCodeAt(0)==0?u:u},
nC:function(a,b,c){return P.cV(a,b,c,C.p,!0)},
lK:function(a,b,c){var u,t,s,r,q,p
u=b+2
if(u>=a.length)return"%"
t=C.c.Y(a,b+1)
s=C.c.Y(a,u)
r=H.jU(t)
q=H.jU(s)
if(r<0||q<0)return"%"
p=r*16+q
if(p<127){u=C.f.aL(p,4)
if(u>=8)return H.e(C.r,u)
u=(C.r[u]&1<<(p&15))!==0}else u=!1
if(u)return H.dC(c&&65<=p&&90>=p?(p|32)>>>0:p)
if(t>=97||s>=97)return C.c.u(a,b,b+3).toUpperCase()
return},
lF:function(a){var u,t,s,r,q,p
if(a<128){u=new Array(3)
u.fixed$length=Array
t=H.d(u,[P.o])
C.a.l(t,0,37)
C.a.l(t,1,C.c.G("0123456789ABCDEF",a>>>4))
C.a.l(t,2,C.c.G("0123456789ABCDEF",a&15))}else{if(a>2047)if(a>65535){s=240
r=4}else{s=224
r=3}else{s=192
r=2}u=new Array(3*r)
u.fixed$length=Array
t=H.d(u,[P.o])
for(q=0;--r,r>=0;s=128){p=C.f.ic(a,6*r)&63|s
C.a.l(t,q,37)
C.a.l(t,q+1,C.c.G("0123456789ABCDEF",p>>>4))
C.a.l(t,q+2,C.c.G("0123456789ABCDEF",p&15))
q+=3}}return P.dM(t,0,null)},
cV:function(a,b,c,d,e){var u=P.lJ(a,b,c,H.l(d,"$ib",[P.o],"$ab"),e)
return u==null?C.c.u(a,b,c):u},
lJ:function(a,b,c,d,e){var u,t,s,r,q,p,o,n,m
H.l(d,"$ib",[P.o],"$ab")
u=!e
t=b
s=t
r=null
while(!0){if(typeof t!=="number")return t.V()
if(typeof c!=="number")return H.u(c)
if(!(t<c))break
c$0:{q=C.c.Y(a,t)
if(q<127){p=q>>>4
if(p>=8)return H.e(d,p)
p=(d[p]&1<<(q&15))!==0}else p=!1
if(p)++t
else{if(q===37){o=P.lK(a,t,!1)
if(o==null){t+=3
break c$0}if("%"===o){o="%25"
n=1}else n=3}else{if(u)if(q<=93){p=q>>>4
if(p>=8)return H.e(C.o,p)
p=(C.o[p]&1<<(q&15))!==0}else p=!1
else p=!1
if(p){P.cU(a,t,"Invalid character")
o=null
n=null}else{if((q&64512)===55296){p=t+1
if(p<c){m=C.c.Y(a,p)
if((m&64512)===56320){q=65536|(q&1023)<<10|m&1023
n=2}else n=1}else n=1}else n=1
o=P.lF(q)}}if(r==null)r=new P.al("")
r.a+=C.c.u(a,s,t)
r.a+=H.m(o)
if(typeof n!=="number")return H.u(n)
t+=n
s=t}}}if(r==null)return
if(typeof s!=="number")return s.V()
if(s<c)r.a+=C.c.u(a,s,c)
u=r.a
return u.charCodeAt(0)==0?u:u},
lI:function(a){if(C.c.a6(a,"."))return!0
return C.c.ek(a,"/.")!==-1},
nL:function(a){var u,t,s,r,q,p,o
if(!P.lI(a))return a
u=H.d([],[P.h])
for(t=a.split("/"),s=t.length,r=!1,q=0;q<s;++q){p=t[q]
if(J.R(p,"..")){o=u.length
if(o!==0){if(0>=o)return H.e(u,-1)
u.pop()
if(u.length===0)C.a.h(u,"")}r=!0}else if("."===p)r=!0
else{C.a.h(u,p)
r=!1}}if(r)C.a.h(u,"")
return C.a.D(u,"/")},
nK:function(a,b){var u,t,s,r,q,p
if(!P.lI(a))return!b?P.lG(a):a
u=H.d([],[P.h])
for(t=a.split("/"),s=t.length,r=!1,q=0;q<s;++q){p=t[q]
if(".."===p)if(u.length!==0&&C.a.gaC(u)!==".."){if(0>=u.length)return H.e(u,-1)
u.pop()
r=!0}else{C.a.h(u,"..")
r=!1}else if("."===p)r=!0
else{C.a.h(u,p)
r=!1}}t=u.length
if(t!==0)if(t===1){if(0>=t)return H.e(u,0)
t=u[0].length===0}else t=!1
else t=!0
if(t)return"./"
if(r||C.a.gaC(u)==="..")C.a.h(u,"")
if(!b){if(0>=u.length)return H.e(u,0)
C.a.l(u,0,P.lG(u[0]))}return C.a.D(u,"/")},
lG:function(a){var u,t,s,r
u=a.length
if(u>=2&&P.lH(J.mv(a,0)))for(t=1;t<u;++t){s=C.c.G(a,t)
if(s===58)return C.c.u(a,0,t)+"%3A"+C.c.aE(a,t+1)
if(s<=127){r=s>>>4
if(r>=8)return H.e(C.q,r)
r=(C.q[r]&1<<(s&15))===0}else r=!0
if(r)break}return a},
nB:function(a,b){var u,t,s
for(u=0,t=0;t<2;++t){s=C.c.G(a,b+t)
if(48<=s&&s<=57)u=u*16+s-48
else{s|=32
if(97<=s&&s<=102)u=u*16+s-87
else throw H.c(P.f4("Invalid URL encoding"))}}return u},
kF:function(a,b,c,d,e){var u,t,s,r,q
t=b
while(!0){if(!(t<c)){u=!0
break}s=C.c.G(a,t)
if(s<=127)if(s!==37)r=s===43
else r=!0
else r=!0
if(r){u=!1
break}++t}if(u){if(C.m!==d)r=!1
else r=!0
if(r)return C.c.u(a,b,c)
else q=new H.a5(C.c.u(a,b,c))}else{q=H.d([],[P.o])
for(r=a.length,t=b;t<c;++t){s=C.c.G(a,t)
if(s>127)throw H.c(P.f4("Illegal percent encoding in URI"))
if(s===37){if(t+3>r)throw H.c(P.f4("Truncated URI"))
C.a.h(q,P.nB(a,t+1))
t+=2}else if(s===43)C.a.h(q,32)
else C.a.h(q,s)}}H.l(q,"$ib",[P.o],"$ab")
return new P.ix(!1).cl(q)},
lH:function(a){var u=a|32
return 97<=u&&u<=122},
lp:function(a,b,c){var u,t,s,r,q,p,o,n,m
u=H.d([b-1],[P.o])
for(t=a.length,s=b,r=-1,q=null;s<t;++s){q=C.c.G(a,s)
if(q===44||q===59)break
if(q===47){if(r<0){r=s
continue}throw H.c(P.a3("Invalid MIME type",a,s))}}if(r<0&&s>b)throw H.c(P.a3("Invalid MIME type",a,s))
for(;q!==44;){C.a.h(u,s);++s
for(p=-1;s<t;++s){q=C.c.G(a,s)
if(q===61){if(p<0)p=s}else if(q===59||q===44)break}if(p>=0)C.a.h(u,p)
else{o=C.a.gaC(u)
if(q!==44||s!==o+7||!C.c.a7(a,"base64",o+1))throw H.c(P.a3("Expecting '='",a,s))
break}}C.a.h(u,s)
n=s+1
if((u.length&1)===1)a=C.I.jF(0,a,n,t)
else{m=P.lJ(a,n,t,C.p,!0)
if(m!=null)a=C.c.aR(a,n,t,m)}return new P.iq(a,u,c)},
nN:function(){var u,t,s,r,q
u=P.mX(22,new P.jE(),!0,P.Q)
t=new P.jD(u)
s=new P.jF()
r=new P.jG()
q=H.f(t.$2(0,225),"$iQ")
s.$3(q,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",1)
s.$3(q,".",14)
s.$3(q,":",34)
s.$3(q,"/",3)
s.$3(q,"?",172)
s.$3(q,"#",205)
q=H.f(t.$2(14,225),"$iQ")
s.$3(q,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",1)
s.$3(q,".",15)
s.$3(q,":",34)
s.$3(q,"/",234)
s.$3(q,"?",172)
s.$3(q,"#",205)
q=H.f(t.$2(15,225),"$iQ")
s.$3(q,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",1)
s.$3(q,"%",225)
s.$3(q,":",34)
s.$3(q,"/",9)
s.$3(q,"?",172)
s.$3(q,"#",205)
q=H.f(t.$2(1,225),"$iQ")
s.$3(q,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",1)
s.$3(q,":",34)
s.$3(q,"/",10)
s.$3(q,"?",172)
s.$3(q,"#",205)
q=H.f(t.$2(2,235),"$iQ")
s.$3(q,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",139)
s.$3(q,"/",131)
s.$3(q,".",146)
s.$3(q,"?",172)
s.$3(q,"#",205)
q=H.f(t.$2(3,235),"$iQ")
s.$3(q,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",11)
s.$3(q,"/",68)
s.$3(q,".",18)
s.$3(q,"?",172)
s.$3(q,"#",205)
q=H.f(t.$2(4,229),"$iQ")
s.$3(q,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",5)
r.$3(q,"AZ",229)
s.$3(q,":",102)
s.$3(q,"@",68)
s.$3(q,"[",232)
s.$3(q,"/",138)
s.$3(q,"?",172)
s.$3(q,"#",205)
q=H.f(t.$2(5,229),"$iQ")
s.$3(q,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",5)
r.$3(q,"AZ",229)
s.$3(q,":",102)
s.$3(q,"@",68)
s.$3(q,"/",138)
s.$3(q,"?",172)
s.$3(q,"#",205)
q=H.f(t.$2(6,231),"$iQ")
r.$3(q,"19",7)
s.$3(q,"@",68)
s.$3(q,"/",138)
s.$3(q,"?",172)
s.$3(q,"#",205)
q=H.f(t.$2(7,231),"$iQ")
r.$3(q,"09",7)
s.$3(q,"@",68)
s.$3(q,"/",138)
s.$3(q,"?",172)
s.$3(q,"#",205)
s.$3(H.f(t.$2(8,8),"$iQ"),"]",5)
q=H.f(t.$2(9,235),"$iQ")
s.$3(q,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",11)
s.$3(q,".",16)
s.$3(q,"/",234)
s.$3(q,"?",172)
s.$3(q,"#",205)
q=H.f(t.$2(16,235),"$iQ")
s.$3(q,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",11)
s.$3(q,".",17)
s.$3(q,"/",234)
s.$3(q,"?",172)
s.$3(q,"#",205)
q=H.f(t.$2(17,235),"$iQ")
s.$3(q,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",11)
s.$3(q,"/",9)
s.$3(q,"?",172)
s.$3(q,"#",205)
q=H.f(t.$2(10,235),"$iQ")
s.$3(q,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",11)
s.$3(q,".",18)
s.$3(q,"/",234)
s.$3(q,"?",172)
s.$3(q,"#",205)
q=H.f(t.$2(18,235),"$iQ")
s.$3(q,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",11)
s.$3(q,".",19)
s.$3(q,"/",234)
s.$3(q,"?",172)
s.$3(q,"#",205)
q=H.f(t.$2(19,235),"$iQ")
s.$3(q,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",11)
s.$3(q,"/",234)
s.$3(q,"?",172)
s.$3(q,"#",205)
q=H.f(t.$2(11,235),"$iQ")
s.$3(q,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",11)
s.$3(q,"/",10)
s.$3(q,"?",172)
s.$3(q,"#",205)
q=H.f(t.$2(12,236),"$iQ")
s.$3(q,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",12)
s.$3(q,"?",12)
s.$3(q,"#",205)
q=H.f(t.$2(13,237),"$iQ")
s.$3(q,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",13)
s.$3(q,"?",13)
r.$3(H.f(t.$2(20,245),"$iQ"),"az",21)
q=H.f(t.$2(21,245),"$iQ")
r.$3(q,"az",21)
r.$3(q,"09",21)
s.$3(q,"+-.",21)
return u},
lO:function(a,b,c,d,e){var u,t,s,r,q
H.l(e,"$ib",[P.o],"$ab")
u=$.ms()
for(t=b;t<c;++t){if(d<0||d>=u.length)return H.e(u,d)
s=u[d]
r=C.c.G(a,t)^96
if(r>95)r=31
if(r>=s.length)return H.e(s,r)
q=s[r]
d=q&31
C.a.l(e,q>>>5,t)}return d},
ac:function ac(){},
aj:function aj(a,b){this.a=a
this.b=b},
q:function q(){},
aX:function aX(a){this.a=a},
ft:function ft(){},
fu:function fu(){},
bu:function bu(){},
dz:function dz(){},
aT:function aT(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
bT:function bT(a,b,c,d,e,f){var _=this
_.e=a
_.f=b
_.a=c
_.b=d
_.c=e
_.d=f},
fI:function fI(a,b,c,d,e,f){var _=this
_.e=a
_.f=b
_.a=c
_.b=d
_.c=e
_.d=f},
ip:function ip(a){this.a=a},
il:function il(a){this.a=a},
dK:function dK(a){this.a=a},
fh:function fh(a){this.a=a},
hp:function hp(){},
dJ:function dJ(){},
fo:function fo(a){this.a=a},
ee:function ee(a){this.a=a},
fG:function fG(a,b,c){this.a=a
this.b=b
this.c=c},
o:function o(){},
j:function j(){},
aZ:function aZ(){},
b:function b(){},
D:function D(){},
I:function I(){},
a0:function a0(){},
P:function P(){},
aq:function aq(){},
h:function h(){},
al:function al(a){this.a=a},
iu:function iu(a){this.a=a},
ir:function ir(a){this.a=a},
is:function is(a){this.a=a},
it:function it(a,b){this.a=a
this.b=b},
bX:function bX(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.ch=_.Q=_.z=_.y=_.x=null},
js:function js(a,b){this.a=a
this.b=b},
jt:function jt(){},
jv:function jv(a,b){this.a=a
this.b=b},
ju:function ju(a){this.a=a},
iq:function iq(a,b,c){this.a=a
this.b=b
this.c=c},
jE:function jE(){},
jD:function jD(a){this.a=a},
jF:function jF(){},
jG:function jG(){},
jj:function jj(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.x=h
_.y=null},
iW:function iW(a,b,c,d,e,f,g,h){var _=this
_.cx=a
_.a=b
_.b=c
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.ch=_.Q=_.z=_.y=_.x=null},
bl:function(a){var u,t,s,r,q
if(a==null)return
u=P.l5(P.h,null)
t=Object.getOwnPropertyNames(a)
for(s=t.length,r=0;r<t.length;t.length===s||(0,H.C)(t),++r){q=H.L(t[r])
u.l(0,q,a[q])}return u},
nZ:function(a,b){var u={}
a.L(0,new P.jK(u))
return u},
jl:function jl(){},
jn:function jn(a,b){this.a=a
this.b=b},
jK:function jK(a){this.a=a},
jm:function jm(a,b){this.a=a
this.b=b},
fC:function fC(a,b){this.a=a
this.b=b},
fD:function fD(){},
fE:function fE(){},
ja:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
nw:function(a){a=536870911&a+((67108863&a)<<3)
a^=a>>>11
return 536870911&a+((16383&a)<<15)},
jd:function jd(){},
a8:function a8(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=e},
b0:function b0(){},
fP:function fP(){},
b3:function b3(){},
hn:function hn(){},
ht:function ht(){},
hX:function hX(){},
r:function r(){},
b6:function b6(){},
i7:function i7(){},
ej:function ej(){},
ek:function ek(){},
et:function et(){},
eu:function eu(){},
eE:function eE(){},
eF:function eF(){},
eL:function eL(){},
eM:function eM(){},
Q:function Q(){},
f6:function f6(){},
f7:function f7(){},
f8:function f8(a){this.a=a},
f9:function f9(){},
bF:function bF(){},
ho:function ho(){},
e7:function e7(){},
d5:function d5(){},
dg:function dg(){},
dD:function dD(){},
bU:function bU(){},
dH:function dH(){},
dY:function dY(){},
hP:function hP(){},
eA:function eA(){},
eB:function eB(){}},W={
l0:function(a,b){var u=document.createElement("canvas")
return u},
mI:function(a){H.f(a,"$ii")
return"wheel"},
mL:function(a){var u,t,s
t=document.createElement("input")
u=H.f(t,"$icl")
try{u.type=a}catch(s){H.aD(s)}return u},
j9:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
lB:function(a,b,c,d){var u,t
u=W.j9(W.j9(W.j9(W.j9(0,a),b),c),d)
t=536870911&u+((67108863&u)<<3)
t^=t>>>11
return 536870911&t+((16383&t)<<15)},
ab:function(a,b,c,d,e){var u=W.lR(new W.iZ(c),W.p)
if(u!=null&&!0)J.mw(a,b,u,!1)
return new W.iY(a,b,u,!1,[e])},
lR:function(a,b){var u
H.n(a,{func:1,ret:-1,args:[b]})
u=$.W
if(u===C.k)return a
return u.dL(a,b)},
x:function x(){},
f0:function f0(){},
f2:function f2(){},
f3:function f3(){},
bG:function bG(){},
d4:function d4(){},
bH:function bH(){},
bt:function bt(){},
cc:function cc(){},
fk:function fk(){},
U:function U(){},
cd:function cd(){},
fl:function fl(){},
aV:function aV(){},
aW:function aW(){},
fm:function fm(){},
fn:function fn(){},
fp:function fp(){},
ce:function ce(){},
cf:function cf(){},
fq:function fq(){},
dc:function dc(){},
dd:function dd(){},
fr:function fr(){},
fs:function fs(){},
iU:function iU(a,b){this.a=a
this.b=b},
a2:function a2(){},
p:function p(){},
i:function i(){},
ax:function ax(){},
ch:function ch(){},
fB:function fB(){},
fF:function fF(){},
aG:function aG(){},
dh:function dh(){},
bO:function bO(){},
di:function di(){},
ck:function ck(){},
cl:function cl(){},
b_:function b_(){},
dn:function dn(){},
fW:function fW(){},
h9:function h9(){},
ha:function ha(){},
hb:function hb(a){this.a=a},
hc:function hc(){},
hd:function hd(a){this.a=a},
aJ:function aJ(){},
he:function he(){},
ad:function ad(){},
iT:function iT(a){this.a=a},
F:function F(){},
cr:function cr(){},
aK:function aK(){},
hr:function hr(){},
hB:function hB(){},
hC:function hC(a){this.a=a},
hE:function hE(){},
aM:function aM(){},
hN:function hN(){},
aN:function aN(){},
hO:function hO(){},
aO:function aO(){},
hR:function hR(){},
hS:function hS(a){this.a=a},
ay:function ay(){},
b4:function b4(){},
dN:function dN(){},
dO:function dO(){},
aP:function aP(){},
az:function az(){},
hZ:function hZ(){},
i_:function i_(){},
i2:function i2(){},
aQ:function aQ(){},
aR:function aR(){},
i5:function i5(){},
i6:function i6(){},
bA:function bA(){},
iv:function iv(){},
iL:function iL(){},
b9:function b9(){},
cJ:function cJ(){},
iV:function iV(){},
e9:function e9(){},
j8:function j8(){},
eq:function eq(){},
jk:function jk(){},
jo:function jo(){},
iX:function iX(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
kD:function kD(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
iY:function iY(a,b,c,d,e){var _=this
_.a=0
_.b=a
_.c=b
_.d=c
_.e=d
_.$ti=e},
iZ:function iZ(a){this.a=a},
B:function B(){},
df:function df(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=null
_.$ti=d},
e8:function e8(){},
ea:function ea(){},
eb:function eb(){},
ec:function ec(){},
ed:function ed(){},
ef:function ef(){},
eg:function eg(){},
eh:function eh(){},
ei:function ei(){},
em:function em(){},
en:function en(){},
eo:function eo(){},
ep:function ep(){},
er:function er(){},
es:function es(){},
ev:function ev(){},
ew:function ew(){},
ex:function ex(){},
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
kn:function(a){var u=new O.a_([a])
u.bJ(a)
return u},
a_:function a_(a){var _=this
_.d=_.c=_.b=_.a=null
_.$ti=a},
cm:function cm(){this.b=this.a=null},
dt:function dt(){var _=this
_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
h3:function h3(a,b){var _=this
_.f=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
du:function du(){},
h4:function h4(a,b){var _=this
_.a=a
_.b=b
_.e=_.d=_.c=null},
b1:function b1(a,b){var _=this
_.f=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
h6:function h6(a,b){var _=this
_.f=_.ch=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
h7:function h7(a,b){var _=this
_.f=_.ch=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
bW:function bW(){}},E={
ne:function(a,b){var u=new E.hx(a,b)
u.f6(a,b)
return u},
ni:function(a,b,c,d,e){var u,t,s,r
u=J.X(a)
if(!!u.$ibH)return E.ll(a,!0,!0,!0,!1)
t=W.l0(null,null)
s=t.style
s.width="100%"
s.height="100%"
u.gck(a).h(0,t)
r=E.ll(t,!0,!0,!0,!1)
r.a=a
return r},
ll:function(a,b,c,d,e){var u,t,s,r,q,p,o,n,m,l,k
u=new E.dU()
t=H.f(C.t.eS(a,"webgl2",P.mT(["alpha",!0,"depth",!0,"stencil",!1,"antialias",!0])),"$ibU")
if(t==null)H.t(P.w("Failed to get the rendering context for WebGL."))
u.b=a
u.a=a
u.c=t
u.e=E.ne(t,a)
s=new T.i0(t)
s.b=H.af((t&&C.b).cU(t,3379))
s.c=H.af(C.b.cU(t,34076))
s.d=0
s.e=0
u.f=s
s=new X.e0(a)
r=new X.fO()
r.c=new X.au(!1,!1,!1)
r.shU(P.mU(null,null,null,P.o))
s.b=r
r=new X.hf(s)
r.f=0
r.r=V.bz()
r.x=V.bz()
r.Q=1
r.ch=1
s.c=r
r=new X.fX(s)
r.r=0
r.x=V.bz()
r.Q=1
r.ch=1
r.cx=1
r.cy=1
s.d=r
r=new X.i4(s)
r.e=0
r.f=V.bz()
r.r=V.bz()
s.e=r
s.f=!1
s.r=!1
s.x=!1
s.y=null
s.sfK(H.d([],[[P.cx,P.P]]))
r=s.z
q=document
p=W.ad
o={func:1,ret:-1,args:[p]};(r&&C.a).h(r,W.ab(q,"contextmenu",H.n(s.ghj(),o),!1,p))
r=s.z
n=W.p
m={func:1,ret:-1,args:[n]};(r&&C.a).h(r,W.ab(a,"focus",H.n(s.ghp(),m),!1,n))
r=s.z;(r&&C.a).h(r,W.ab(a,"blur",H.n(s.ghb(),m),!1,n))
r=s.z
l=W.b_
k={func:1,ret:-1,args:[l]};(r&&C.a).h(r,W.ab(q,"keyup",H.n(s.ght(),k),!1,l))
r=s.z;(r&&C.a).h(r,W.ab(q,"keydown",H.n(s.ghr(),k),!1,l))
l=s.z;(l&&C.a).h(l,W.ab(a,"mousedown",H.n(s.ghx(),o),!1,p))
l=s.z;(l&&C.a).h(l,W.ab(a,"mouseup",H.n(s.ghB(),o),!1,p))
l=s.z;(l&&C.a).h(l,W.ab(a,"mousemove",H.n(s.ghz(),o),!1,p))
l=s.z
k=W.b9;(l&&C.a).h(l,W.ab(a,H.L(W.mI(a)),H.n(s.ghD(),{func:1,ret:-1,args:[k]}),!1,k))
k=s.z;(k&&C.a).h(k,W.ab(q,"mousemove",H.n(s.ghl(),o),!1,p))
k=s.z;(k&&C.a).h(k,W.ab(q,"mouseup",H.n(s.ghn(),o),!1,p))
p=s.z;(p&&C.a).h(p,W.ab(q,"pointerlockchange",H.n(s.ghF(),m),!1,n))
n=s.z
m=W.aR
q={func:1,ret:-1,args:[m]};(n&&C.a).h(n,W.ab(a,"touchstart",H.n(s.ghR(),q),!1,m))
n=s.z;(n&&C.a).h(n,W.ab(a,"touchend",H.n(s.ghN(),q),!1,m))
n=s.z;(n&&C.a).h(n,W.ab(a,"touchmove",H.n(s.ghP(),q),!1,m))
u.r=s
u.Q=!0
u.ch=!1
u.cx=new P.aj(Date.now(),!1)
u.cy=0
u.dB()
return u},
fc:function fc(){},
ao:function ao(){var _=this
_.fx=_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
hx:function hx(a,b){var _=this
_.a=a
_.b=b
_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=null},
hy:function hy(a){this.a=a},
hz:function hz(a){this.a=a},
hA:function hA(a){this.a=a},
dL:function dL(a,b){this.c=a
this.a=b
this.b=null},
dU:function dU(){var _=this
_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
i1:function i1(a){this.a=a}},Z={
kC:function(a,b,c){var u
H.l(c,"$ib",[P.o],"$ab")
u=a.createBuffer()
C.b.an(a,b,u)
C.b.dN(a,b,new Int16Array(H.bY(c)),35044)
C.b.an(a,b,null)
return new Z.e5(b,u)},
aA:function(a){return new Z.b8(a)},
e5:function e5(a,b){this.a=a
this.b=b},
d6:function d6(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
iM:function iM(a){this.a=a},
d7:function d7(a,b,c){var _=this
_.a=a
_.b=null
_.c=b
_.d=c},
bv:function bv(a,b,c){this.a=a
this.b=b
this.c=c},
b8:function b8(a){this.a=a}},D={
S:function(){var u=new D.aY()
u.sa4(null)
u.say(null)
u.c=null
u.d=0
return u},
ff:function ff(){},
aY:function aY(){var _=this
_.d=_.c=_.b=_.a=null},
fz:function fz(a){this.a=a},
A:function A(a){this.a=a
this.b=null},
bP:function bP(a,b,c,d){var _=this
_.c=a
_.d=b
_.a=c
_.b=null
_.$ti=d},
bQ:function bQ(a,b,c,d){var _=this
_.c=a
_.d=b
_.a=c
_.b=null
_.$ti=d},
K:function K(a,b,c,d,e){var _=this
_.c=a
_.d=b
_.e=c
_.a=d
_.b=null
_.$ti=e},
bc:function bc(){var _=this
_.d=_.c=_.b=_.a=null},
a4:function a4(){},
dp:function dp(){var _=this
_.d=_.c=_.b=_.a=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=null},
dB:function dB(){},
dI:function dI(){},
dR:function dR(){},
dS:function dS(){},
dT:function dT(){}},X={d8:function d8(a,b){this.a=a
this.b=b},dm:function dm(a,b){this.a=a
this.b=b},fO:function fO(){var _=this
_.d=_.c=_.b=_.a=null},dr:function dr(a,b,c,d,e,f){var _=this
_.x=a
_.y=b
_.c=c
_.d=d
_.e=e
_.a=f
_.b=null},fX:function fX(a){var _=this
_.a=a
_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},au:function au(a,b,c){this.a=a
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
_.b=null},hf:function hf(a){var _=this
_.a=a
_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},cn:function cn(a,b,c,d,e){var _=this
_.x=a
_.c=b
_.d=c
_.e=d
_.a=e
_.b=null},hs:function hs(){},dW:function dW(a,b,c,d,e,f,g,h,i){var _=this
_.x=a
_.y=b
_.z=c
_.Q=d
_.ch=e
_.c=f
_.d=g
_.e=h
_.a=i
_.b=null},i4:function i4(a){var _=this
_.a=a
_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},e0:function e0(a){var _=this
_.a=a
_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},
mK:function(a,b,c,d,e,f,g){var u,t
u=new X.fH()
t=new V.aF(0,0,0,1)
u.a=t
u.b=!0
u.c=e
u.d=!0
u.e=g
u.f=!1
t=$.li
if(t==null){t=V.lh(0,0,1,1)
$.li=t}u.r=t
return u},
d9:function d9(){},
fH:function fH(){var _=this
_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
dA:function dA(){var _=this
_.f=_.e=_.d=_.c=_.b=_.a=null},
dP:function dP(){}},V={
kh:function(a,b,c){var u
if(c<=b)return b
u=c-b
a=C.e.bb(a-b,u)
return(a<0?a+u:a)+b},
O:function(a,b,c){if(a==null)return C.c.ab("null",c)
return C.c.ab(C.e.eH(Math.abs(a-0)<$.J().a?0:a,b),c+b+1)},
c2:function(a,b,c){var u,t,s,r,q,p
H.l(a,"$ib",[P.q],"$ab")
u=H.d([],[P.h])
for(t=a.length,s=0,r=0;r<a.length;a.length===t||(0,H.C)(a),++r){q=V.O(a[r],b,c)
s=Math.max(s,q.length)
C.a.h(u,q)}for(p=u.length-1;p>=0;--p){if(p>=u.length)return H.e(u,p)
C.a.l(u,p,C.c.ab(u[p],s))}return u},
ap:function(){var u=$.l9
if(u==null){u=V.b2(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1)
$.l9=u}return u},
b2:function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){return new V.ak(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p)},
h8:function(a,b,c){return V.b2(1,0,0,a,0,1,0,b,0,0,1,c,0,0,0,1)},
kw:function(a){var u,t
u=Math.cos(a)
t=Math.sin(a)
return V.b2(1,0,0,0,0,u,-t,0,0,t,u,0,0,0,0,1)},
l7:function(a){var u,t
u=Math.cos(a)
t=Math.sin(a)
return V.b2(u,0,-t,0,0,1,0,0,t,0,u,0,0,0,0,1)},
l8:function(a){var u,t
u=Math.cos(a)
t=Math.sin(a)
return V.b2(u,-t,0,0,t,u,0,0,0,0,1,0,0,0,0,1)},
l6:function(a,b,c){var u,t,s,r,q,p,o,n
u=c.v(0,Math.sqrt(c.E(c)))
t=b.aA(u)
s=t.v(0,Math.sqrt(t.E(t)))
r=u.aA(s)
q=new V.G(a.a,a.b,a.c)
p=s.R(0).E(q)
o=r.R(0).E(q)
n=u.R(0).E(q)
return V.b2(s.a,r.a,u.a,p,s.b,r.b,u.b,o,s.c,r.c,u.c,n,0,0,0,1)},
bz:function(){var u=$.ld
if(u==null){u=new V.a7(0,0)
$.ld=u}return u},
le:function(){var u=$.cs
if(u==null){u=new V.Y(0,0,0)
$.cs=u}return u},
lh:function(a,b,c,d){if(c<0){a+=c
c=-c}if(d<0){b+=d
d=-d}return new V.dF(a,b,c,d)},
cI:function(){var u=$.lx
if(u==null){u=new V.G(0,0,0)
$.lx=u}return u},
ly:function(){var u=$.lw
if(u==null){u=new V.G(0,1,0)
$.lw=u}return u},
lz:function(){var u=$.iz
if(u==null){u=new V.G(0,0,1)
$.iz=u}return u},
a1:function a1(a,b,c){this.a=a
this.b=b
this.c=c},
aF:function aF(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
fx:function fx(a){this.a=a},
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
a7:function a7(a,b){this.a=a
this.b=b},
Y:function Y(a,b,c){this.a=a
this.b=b
this.c=c},
aL:function aL(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
dF:function dF(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
T:function T(a,b){this.a=a
this.b=b},
G:function G(a,b,c){this.a=a
this.b=b
this.c=c},
ah:function(a){var u=new V.hF()
u.f7(a)
return u},
f1:function f1(){},
bg:function bg(){},
ds:function ds(){},
bj:function bj(){this.a=null},
hF:function hF(){this.a=null},
cw:function cw(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
dV:function dV(a,b,c){this.a=a
this.b=b
this.c=c},
cy:function cy(a,b){this.a=a
this.b=b
this.c=null},
i3:function i3(){this.c=this.b=this.a=null},
cz:function cz(a){this.b=a
this.a=this.c=null},
om:function(a){P.nj(C.M,new V.kb(a))},
ng:function(a,b){var u=new V.hJ()
u.f9(a,!0)
return u},
kb:function kb(a){this.a=a},
hu:function hu(a,b){this.a=a
this.b=b
this.c=null},
hv:function hv(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
hJ:function hJ(){this.b=this.a=null},
hL:function hL(a){this.a=a},
hK:function hK(a){this.a=a}},U={
ko:function(){var u=new U.fg()
u.a=!0
u.b=1e12
u.c=-1e12
u.d=0
u.e=100
u.f=0
u.x=0
u.r=0
return u},
bL:function(a){var u=new U.da()
if(a==null)a=V.ap()
if(null!=a)u.a=a
return u},
kq:function(a){var u=new U.cj()
u.bJ(U.a9)
u.bc(u.gfd(),u.ghJ())
u.e=null
u.f=V.ap()
u.r=0
return u},
cu:function(a,b,c,d,e,f){var u,t
u=new U.dG()
u.a=0
u.b=0
u.c=0
u.d=0
u.e=0
u.f=0
u.r=0
u.seO(f)
u.sex(0,d)
u.seD(e)
t=u.d
if(!(Math.abs(t-c)<$.J().a)){u.d=c
t=new D.K("deltaYaw",t,c,u,[P.q])
t.b=!0
u.F(t)}t=u.e
if(!(Math.abs(t-a)<$.J().a)){u.e=a
t=new D.K("deltaPitch",t,a,u,[P.q])
t.b=!0
u.F(t)}t=u.f
if(!(Math.abs(t-b)<$.J().a)){u.f=b
t=new D.K("deltaRoll",t,b,u,[P.q])
t.b=!0
u.F(t)}return u},
fg:function fg(){var _=this
_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
da:function da(){this.b=this.a=null},
cj:function cj(){var _=this
_.d=_.c=_.b=_.a=_.r=_.f=_.e=null},
a9:function a9(){},
dG:function dG(){var _=this
_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
e1:function e1(){var _=this
_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
e2:function e2(){var _=this
_.fx=_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
e3:function e3(){var _=this
_.r=_.f=_.e=_.d=_.c=_.b=_.a=null}},M={de:function de(){var _=this
_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null}},A={
mY:function(a,b){var u,t
u=a.af
t=new A.h2(b,u)
t.f8(b,u)
t.f5(a,b)
return t},
kz:function(a,b,c,d,e){var u=new A.ic(a,b,c,e)
u.f=d
u.siu(P.mV(d,0,!1,P.o))
return u},
d3:function d3(a,b,c){this.a=a
this.b=b
this.c=c},
f5:function f5(a){this.a=a},
h2:function h2(a,b){var _=this
_.bl=_.dS=_.bk=_.af=_.ap=_.y2=_.y1=_.x2=_.x1=_.ry=_.rx=_.r2=_.r1=_.k4=_.k3=_.k2=_.k1=_.id=_.go=_.fy=_.fx=_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=null
_.e7=_.cq=_.e6=_.by=_.e5=_.e4=_.bx=_.bw=_.e3=_.e2=_.bv=_.bu=_.bt=_.e1=_.e0=_.bs=_.e_=_.dZ=_.br=_.dY=_.dX=_.bq=_.bp=_.dW=_.dV=_.bo=_.bn=_.dU=_.dT=_.bm=null
_.cv=_.eb=_.cu=_.ea=_.ct=_.e9=_.cs=_.e8=_.cr=null
_.a=a
_.b=b
_.y=_.x=_.r=_.f=_.e=_.d=_.c=null},
h5:function h5(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5){var _=this
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
_.ap=b3
_.af=b4
_.bk=b5},
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
cv:function cv(){},
bJ:function bJ(a,b){this.a=a
this.b=b},
dX:function dX(){},
ij:function ij(a){this.a=a},
N:function N(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
ie:function ie(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
ig:function ig(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
ii:function ii(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
ic:function ic(a,b,c,d){var _=this
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
id:function id(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
M:function M(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
ih:function ih(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
ik:function ik(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
cB:function cB(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
av:function av(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
am:function am(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
an:function an(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d}},F={
lW:function(a,b,c,d){var u
H.n(c,{func:1,ret:-1,args:[F.ae,P.q,P.q]})
u=F.kx()
F.cW(u,b,c,d,a,1,0,0,1)
F.cW(u,b,c,d,a,0,1,0,3)
F.cW(u,b,c,d,a,0,0,1,2)
F.cW(u,b,c,d,a,-1,0,0,0)
F.cW(u,b,c,d,a,0,-1,0,0)
F.cW(u,b,c,d,a,0,0,-1,3)
u.ae()
return u},
jC:function(a){var u,t
u=a.a>0?1:0
if(a.b>0)u+=2
t=a.c
if(typeof t!=="number")return t.cV()
return(t>0?u+4:u)*2},
cW:function(a,b,c,d,a0,a1,a2,a3,a4){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e
u={}
H.n(c,{func:1,ret:-1,args:[F.ae,P.q,P.q]})
t=a1+a2
s=t+a3
r=a2+a3
q=a3+a1
p=new V.G(s,r+a1,q+a2)
u.a=p
o=a1-a2
n=a2-a3
m=a3-a1
l=new V.G(o+a3,n+a1,m+a2)
u.b=l
k=new V.G(o-a3,n-a1,m-a2)
u.c=k
j=new V.G(t-a3,r-a1,q-a2)
u.d=j
if(s>0){u.d=l
u.b=j
s=l
t=j}else{s=j
t=l}for(q=s,s=t,t=p,r=k,i=0;i<a4;++i,h=q,q=t,t=s,s=r,r=h){u.a=s
u.b=r
u.c=q
u.d=t}g=F.jC(t)
f=F.jC(u.b)
e=F.ke(d,a0,new F.jB(u,F.jC(u.c),F.jC(u.d),f,g,c),b)
if(e!=null)a.b2(e)},
lZ:function(a,b,c,d,e,a0){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f
H.n(e,{func:1,ret:P.q,args:[P.q]})
if(a0<3)return
u=F.kx()
t=b?-1:1
s=-6.283185307179586/a0
r=H.d([],[F.ae])
q=u.a
p=new V.G(0,0,t)
p=p.v(0,Math.sqrt(p.E(p)))
C.a.h(r,q.iW(new V.aL(a,-1,-1,-1),new V.aF(1,1,1,1),new V.Y(0,0,d),new V.G(0,0,t),new V.a7(0.5,0.5),p))
for(q=t*t,o=0;o<=a0;++o){n=s*o
m=t*Math.sin(n)
l=Math.cos(n)
k=e.$1(o/a0)
p=u.a
if(typeof k!=="number")return H.u(k)
j=new V.G(m,l,t).v(0,Math.sqrt(m*m+l*l+q))
if(m<0)i=0
else i=m>1?1:m
h=l<0
if(h)g=0
else g=l>1?1:l
if(h)h=0
else h=l>1?1:l
p.toString
f=F.e4(new V.aL(a,-1,-1,-1),null,new V.aF(i,g,h,1),new V.Y(m*k,l*k,d),new V.G(0,0,t),new V.a7(m*0.5+0.5,l*0.5+0.5),j,null,0)
p.h(0,f)
C.a.h(r,f)}u.d.iU(r)
return u},
lX:function(a,b,c,d,e,f){return F.o_(!0,c,d,new F.jL(a,f),e)},
o_:function(a,b,c,d,e){var u
H.n(d,{func:1,ret:P.q,args:[P.q,P.q]})
if(e<3)return
if(c<1)return
u=F.ke(c,e,new F.jN(d),null)
if(u==null)return
u.ae()
u.c9()
if(b)u.b2(F.lZ(3,!1,!1,1,new F.jO(d),e))
u.b2(F.lZ(1,!0,!1,-1,new F.jP(d),e))
return u},
on:function(a,b,c,d){var u,t
u={}
u.a=b
u.a=new F.kc()
t=F.lW(a,null,new F.kd(u,c),d)
t.c9()
return t},
oq:function(a,b,c,d){return F.lY(c,a,d,b,new F.kf())},
oe:function(a,b,c,d,e,f){return F.lY(d,a,e,b,new F.jZ(f,c))},
lY:function(a,b,c,d,e){var u=F.ke(a,b,new F.jM(H.n(e,{func:1,ret:V.Y,args:[P.q]}),d,b,c),null)
if(u==null)return
u.ae()
u.c9()
return u},
o8:function(a,b,c){var u={}
u.a=b
u.a=new F.jS()
return F.ke(c,a,new F.jT(u),null)},
ke:function(a,b,c,d){var u,t,s,r,q,p,o,n,m,l,k,j,i,h
H.n(c,{func:1,ret:-1,args:[F.ae,P.q,P.q]})
if(a<1)return
if(b<1)return
u=F.kx()
t=H.d([],[F.ae])
for(s=0;s<=b;++s){r=s/b
q=u.a
if(r<0)p=0
else p=r>1?1:r
q.toString
o=F.e4(null,null,new V.aF(p,0,0,1),null,null,new V.a7(r,1),null,null,0)
q.h(0,o)
c.$3(o,r,0)
C.a.h(t,o.cm(d))}for(s=1;s<=a;++s){n=s/a
for(q=n>1,p=n<0,m=1-n,l=0;l<=b;++l){r=l/b
k=u.a
if(r<0)j=0
else j=r>1?1:r
if(p)i=0
else i=q?1:n
if(p)h=0
else h=q?1:n
k.toString
o=F.e4(null,null,new V.aF(j,i,h,1),null,null,new V.a7(r,m),null,null,0)
k.h(0,o)
c.$3(o,r,n)
C.a.h(t,o.cm(d))}}u.d.iV(a+1,b+1,t)
return u},
cg:function(a,b,c){var u,t
u=new F.a6()
t=a.a
if(t==null)H.t(P.w("May not create a face with a first vertex which is not attached to a shape."))
if(t!=b.a||t!=c.a)H.t(P.w("May not create a face with vertices attached to different shapes."))
u.c7(a)
u.c8(b)
u.i7(c)
C.a.h(u.a.a.d.b,u)
u.a.a.a1()
return u},
mQ:function(a,b){var u,t
u=new F.bf()
t=a.a
if(t==null)H.t(P.w("May not create a line with a start vertex which is not attached to a shape."))
if(t!=b.a)H.t(P.w("May not create a line with vertices attached to different shapes."))
u.c7(a)
u.c8(b)
C.a.h(u.a.a.c.b,u)
u.a.a.a1()
return u},
kx:function(){var u,t
u=new F.bV()
t=new F.iA(u)
t.b=!1
t.siv(H.d([],[F.ae]))
u.a=t
t=new F.hI(u)
t.sc_(H.d([],[F.by]))
u.b=t
t=new F.hH(u)
t.sfW(H.d([],[F.bf]))
u.c=t
t=new F.hG(u)
t.sfL(H.d([],[F.a6]))
u.d=t
u.e=null
return u},
e4:function(a,b,c,d,e,f,g,h,i){var u,t,s
u=new F.ae()
t=new F.iI(u)
t.sc_(H.d([],[F.by]))
u.b=t
t=new F.iE(u)
s=[F.bf]
t.sfX(H.d([],s))
t.sfY(H.d([],s))
u.c=t
t=new F.iB(u)
s=[F.a6]
t.sfM(H.d([],s))
t.sfN(H.d([],s))
t.sfO(H.d([],s))
u.d=t
h=$.mn()
u.e=0
t=$.bq()
s=h.a
u.f=(s&t.a)!==0?d:null
u.r=(s&$.bp().a)!==0?e:null
u.x=(s&$.bo().a)!==0?b:null
u.y=(s&$.br().a)!==0?f:null
u.z=(s&$.bs().a)!==0?g:null
u.Q=(s&$.mo().a)!==0?c:null
u.ch=(s&$.c7().a)!==0?i:0
u.cx=(s&$.bn().a)!==0?a:null
return u},
jB:function jB(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
jL:function jL(a,b){this.a=a
this.b=b},
jN:function jN(a){this.a=a},
jO:function jO(a){this.a=a},
jP:function jP(a){this.a=a},
kc:function kc(){},
kd:function kd(a,b){this.a=a
this.b=b},
kf:function kf(){},
jZ:function jZ(a,b){this.a=a
this.b=b},
jM:function jM(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
jS:function jS(){},
jT:function jT(a){this.a=a},
a6:function a6(){var _=this
_.e=_.d=_.c=_.b=_.a=null},
fA:function fA(){},
hM:function hM(){},
bf:function bf(){this.b=this.a=null},
fQ:function fQ(){},
ib:function ib(){},
by:function by(){this.a=null},
bV:function bV(){var _=this
_.e=_.d=_.c=_.b=_.a=null},
hG:function hG(a){this.a=a
this.b=null},
hH:function hH(a){this.a=a
this.b=null},
hI:function hI(a){this.a=a
this.b=null},
ae:function ae(){var _=this
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
hl:function hl(){},
iI:function iI(a){this.a=a
this.b=null}},T={dQ:function dQ(){},i0:function i0(a){var _=this
_.a=a
_.e=_.d=_.c=_.b=null}},K={
m4:function(){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a
u=V.ng("Test 035",!0)
t=W.l0(null,null)
t.className="pageLargeCanvas"
t.id="testCanvas"
C.l.X(u.a,t)
s=[P.h]
u.dJ(H.d(["A test of the bending a shape with the Material Light Shader. ","Not all of the shapes have predefined bend values."],s))
u.iS(H.d(["shapes"],s))
u.dJ(H.d(["\xab[Back to Tests|../]"],s))
s=document
r=C.x.cT(s,"testCanvas")
if(r==null)H.t(P.w("Failed to find an element with the identifier, testCanvas."))
q=E.ni(r,!0,!0,!0,!1)
p=new E.ao()
p.a=""
p.b=!0
u=E.ao
p.sfB(0,O.kn(u))
p.y.bc(p.gjG(),p.gjJ())
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
p.scX(0,null)
p.sb3(null)
p.sb3(U.bL(null))
o=new O.dt()
o.sfw(O.kn(V.ak))
o.e.bc(o.gh7(),o.gh9())
n=new O.b1(o,"emission")
n.c=C.d
n.f=new V.a1(0,0,0)
o.f=n
n=new O.b1(o,"ambient")
n.c=C.d
n.f=new V.a1(0,0,0)
o.r=n
n=new O.b1(o,"diffuse")
n.c=C.d
n.f=new V.a1(0,0,0)
o.x=n
n=new O.b1(o,"invDiffuse")
n.c=C.d
n.f=new V.a1(0,0,0)
o.y=n
n=new O.h7(o,"specular")
n.c=C.d
n.f=new V.a1(0,0,0)
n.ch=100
o.z=n
n=new O.h4(o,"bump")
n.c=C.d
o.Q=n
o.ch=null
n=new O.b1(o,"reflect")
n.c=C.d
n.f=new V.a1(0,0,0)
o.cx=n
n=new O.h6(o,"refract")
n.c=C.d
n.f=new V.a1(0,0,0)
n.ch=1
o.cy=n
n=new O.h3(o,"alpha")
n.c=C.d
n.f=1
o.db=n
n=new D.dp()
n.bJ(D.a4)
n.sfH(H.d([],[D.bc]))
n.shT(H.d([],[D.dB]))
n.sie(H.d([],[D.dI]))
n.sir(H.d([],[D.dR]))
n.sis(H.d([],[D.dS]))
n.sit(H.d([],[D.dT]))
n.Q=null
n.ch=null
n.cW(n.gh5(),n.ghH(),n.ghL())
o.dx=n
m=n.Q
if(m==null){m=D.S()
n.Q=m
n=m}else n=m
n.h(0,o.gi2())
n=o.dx
m=n.ch
if(m==null){m=D.S()
n.ch=m
n=m}else n=m
n.h(0,o.ghd())
o.dy=null
n=o.dx
l=V.ly()
m=U.bL(V.l6(V.le(),l,new V.G(1,1,-3)))
k=new V.a1(1,1,1)
j=new D.bc()
j.c=new V.a1(1,1,1)
j.a=V.lz()
i=j.b
j.b=m
m.gB().h(0,j.gfb())
m=new D.K("mover",i,j.b,j,[U.a9])
m.b=!0
j.at(m)
if(!j.c.t(0,k)){i=j.c
j.c=k
m=new D.K("color",i,k,j,[V.a1])
m.b=!0
j.at(m)}n.h(0,j)
n=o.r
n.sao(0,new V.a1(0,0,1))
n=o.x
n.sao(0,new V.a1(0,1,0))
n=o.z
n.sao(0,new V.a1(1,0,0))
n=o.z
if(n.c===C.d){n.c=C.j
n.bI()
n.c4(100)
m=n.a
m.a=null
m.a8(null)}n.c4(10)
o.e.h(0,V.ap())
o.e.h(0,V.ap())
o.e.h(0,V.ap())
o.e.h(0,V.ap())
o.e.h(0,V.ap())
o.e.h(0,V.ap())
o.e.h(0,V.ap())
o.e.h(0,V.ap())
h=U.kq(null)
n=q.r
m=new U.e2()
j=U.ko()
j.scS(0,!0)
j.scD(6.283185307179586)
j.scF(0)
j.sZ(0,0)
j.scE(100)
j.sU(0)
j.scn(0.5)
m.b=j
g=m.gaG()
j.gB().h(0,g)
j=U.ko()
j.scS(0,!0)
j.scD(6.283185307179586)
j.scF(0)
j.sZ(0,0)
j.scE(100)
j.sU(0)
j.scn(0.5)
m.c=j
j.gB().h(0,g)
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
f=new X.au(!1,!1,!1)
i=m.d
m.d=f
j=[X.au]
g=new D.K("modifiers",i,f,m,j)
g.b=!0
m.F(g)
g=m.f
if(g!==!1){m.f=!1
g=new D.K("invertX",g,!1,m,[P.ac])
g.b=!0
m.F(g)}g=m.r
if(g!==!1){m.r=!1
g=new D.K("invertY",g,!1,m,[P.ac])
g.b=!0
m.F(g)}m.aV(n)
h.h(0,m)
n=q.r
m=new U.e1()
g=U.ko()
g.scS(0,!0)
g.scD(6.283185307179586)
g.scF(0)
g.sZ(0,0)
g.scE(100)
g.sU(0)
g.scn(0.2)
m.b=g
g.gB().h(0,m.gaG())
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
f=new X.au(!0,!1,!1)
i=m.c
m.c=f
g=new D.K("modifiers",i,f,m,j)
g.b=!0
m.F(g)
m.aV(n)
h.h(0,m)
n=q.r
m=new U.e3()
m.c=0.01
m.d=0
m.e=0
f=new X.au(!1,!1,!1)
m.b=f
j=new D.K("modifiers",null,f,m,j)
j.b=!0
m.F(j)
m.aV(n)
h.h(0,m)
h.h(0,U.bL(V.h8(0,0,5)))
e=U.kq(null)
e.h(0,U.bL(V.h8(0.5,0,0)))
e.h(0,U.cu(0,1.7,0,0,0,0))
e.h(0,U.cu(0.5,0,0,0,0,0))
e.h(0,U.bL(V.kw(0.35)))
e.h(0,U.cu(-0.5,0,0,0,0,0))
e.h(0,U.cu(0,-1.7,0,0,0,0))
e.h(0,U.bL(V.h8(-0.5,0,0)))
d=U.kq(null)
d.h(0,U.cu(0,-1.4,0,0,0,0))
d.h(0,U.bL(V.h8(0.5,0,0)))
d.h(0,U.cu(0,1.4,0,0,0,0))
c=new M.de()
c.sff(0,O.kn(u))
c.d.bc(c.ghf(),c.ghh())
c.e=null
c.f=null
c.r=null
c.x=null
b=X.mK(!0,!0,!1,null,2000,null,0)
a=new X.dA()
a.c=1.0471975511965976
a.d=0.1
a.e=2000
a.sb3(null)
u=a.c
if(!(Math.abs(u-1.0471975511965976)<$.J().a)){a.c=1.0471975511965976
u=new D.K("fov",u,1.0471975511965976,a,[P.q])
u.b=!0
a.aH(u)}u=a.d
if(!(Math.abs(u-0.1)<$.J().a)){a.d=0.1
u=new D.K("near",u,0.1,a,[P.q])
u.b=!0
a.aH(u)}u=a.e
if(!(Math.abs(u-2000)<$.J().a)){a.e=2000
u=new D.K("far",u,2000,a,[P.q])
u.b=!0
a.aH(u)}u=c.a
if(u!==a){if(u!=null)u.gB().M(0,c.gal())
i=c.a
c.a=a
a.gB().h(0,c.gal())
u=new D.K("camera",i,c.a,c,[X.d9])
u.b=!0
c.au(u)}u=c.b
if(u!==b){if(u!=null)u.gB().M(0,c.gal())
i=c.b
c.b=b
b.gB().h(0,c.gal())
u=new D.K("target",i,c.b,c,[X.dP])
u.b=!0
c.au(u)}c.seF(null)
c.seF(o)
c.d.h(0,p)
c.a.sb3(h)
u=c.e
if(u==null){u=D.S()
c.e=u}u.h(0,new K.k0(e,d,o))
u=q.d
if(u!==c){if(u!=null)u.gB().M(0,q.gd_())
q.d=c
c.gB().h(0,q.gd_())
q.d0()}u=new K.k8(p)
n=new V.hu("shapes",!0)
s=C.x.cT(s,"shapes")
n.c=s
if(s==null)H.t("Failed to find shapes for RadioGroup")
n.dI(0,"Cuboid",new K.k1(u),!0)
n.aM(0,"Cylinder",new K.k2(u))
n.aM(0,"Cone",new K.k3(u))
n.aM(0,"Sphere",new K.k4(u))
n.aM(0,"Toroid",new K.k5(u))
n.aM(0,"Knot",new K.k6(u))
n.aM(0,"Grid",new K.k7(u))
V.om(q)},
k0:function k0(a,b,c){this.a=a
this.b=b
this.c=c},
k8:function k8(a){this.a=a},
k1:function k1(a){this.a=a},
k2:function k2(a){this.a=a},
k3:function k3(a){this.a=a},
k4:function k4(a){this.a=a},
k5:function k5(a){this.a=a},
k6:function k6(a){this.a=a},
k7:function k7(a){this.a=a}}
var w=[C,H,J,P,W,O,E,Z,D,X,V,U,M,A,F,T,K]
hunkHelpers.setFunctionNamesIfNecessary(w)
var $={}
H.kt.prototype={}
J.a.prototype={
t:function(a,b){return a===b},
gI:function(a){return H.ct(a)},
i:function(a){return"Instance of '"+H.bS(a)+"'"}}
J.fK.prototype={
i:function(a){return String(a)},
gI:function(a){return a?519018:218159},
$iac:1}
J.dk.prototype={
t:function(a,b){return null==b},
i:function(a){return"null"},
gI:function(a){return 0},
$iI:1}
J.dl.prototype={
gI:function(a){return 0},
i:function(a){return String(a)}}
J.hq.prototype={}
J.bB.prototype={}
J.be.prototype={
i:function(a){var u=a[$.mb()]
if(u==null)return this.f1(a)
return"JavaScript function for "+H.m(J.as(u))},
$S:function(){return{func:1,opt:[,,,,,,,,,,,,,,,,]}},
$ikp:1}
J.aH.prototype={
h:function(a,b){H.z(b,H.v(a,0))
if(!!a.fixed$length)H.t(P.E("add"))
a.push(b)},
jW:function(a,b){var u
if(!!a.fixed$length)H.t(P.E("removeAt"))
u=a.length
if(b>=u)throw H.c(P.dE(b,null,null))
return a.splice(b,1)[0]},
M:function(a,b){var u
if(!!a.fixed$length)H.t(P.E("remove"))
for(u=0;u<a.length;++u)if(J.R(a[u],b)){a.splice(u,1)
return!0}return!1},
L:function(a,b){var u,t
H.n(b,{func:1,ret:-1,args:[H.v(a,0)]})
u=a.length
for(t=0;t<u;++t){b.$1(a[t])
if(a.length!==u)throw H.c(P.bK(a))}},
D:function(a,b){var u,t
u=new Array(a.length)
u.fixed$length=Array
for(t=0;t<a.length;++t)this.l(u,t,H.m(a[t]))
return u.join(b)},
jA:function(a){return this.D(a,"")},
jt:function(a,b,c,d){var u,t,s
H.z(b,d)
H.n(c,{func:1,ret:d,args:[d,H.v(a,0)]})
u=a.length
for(t=b,s=0;s<u;++s){t=c.$2(t,a[s])
if(a.length!==u)throw H.c(P.bK(a))}return t},
K:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
f_:function(a,b,c){if(b<0||b>a.length)throw H.c(P.aa(b,0,a.length,"start",null))
if(c<b||c>a.length)throw H.c(P.aa(c,b,a.length,"end",null))
if(b===c)return H.d([],[H.v(a,0)])
return H.d(a.slice(b,c),[H.v(a,0)])},
gjs:function(a){if(a.length>0)return a[0]
throw H.c(H.l3())},
gaC:function(a){var u=a.length
if(u>0)return a[u-1]
throw H.c(H.l3())},
eY:function(a,b,c,d,e){var u,t,s
u=H.v(a,0)
H.l(d,"$ij",[u],"$aj")
if(!!a.immutable$list)H.t(P.E("setRange"))
P.bk(b,c,a.length,null,null,null)
t=c-b
if(t===0)return
H.l(d,"$ib",[u],"$ab")
u=J.c3(d)
if(e+t>u.gk(d))throw H.c(H.mN())
if(e<b)for(s=t-1;s>=0;--s)a[b+s]=u.j(d,e+s)
else for(s=0;s<t;++s)a[b+s]=u.j(d,e+s)},
bd:function(a,b,c,d){return this.eY(a,b,c,d,0)},
aW:function(a,b){var u
for(u=0;u<a.length;++u)if(J.R(a[u],b))return!0
return!1},
i:function(a){return P.kr(a,"[","]")},
ga0:function(a){return new J.at(a,a.length,0,[H.v(a,0)])},
gI:function(a){return H.ct(a)},
gk:function(a){return a.length},
sk:function(a,b){if(!!a.fixed$length)H.t(P.E("set length"))
if(b<0)throw H.c(P.aa(b,0,null,"newLength",null))
a.length=b},
j:function(a,b){if(b>=a.length||b<0)throw H.c(H.c1(a,b))
return a[b]},
l:function(a,b,c){H.z(c,H.v(a,0))
if(!!a.immutable$list)H.t(P.E("indexed set"))
if(b>=a.length||b<0)throw H.c(H.c1(a,b))
a[b]=c},
n:function(a,b){var u,t
u=[H.v(a,0)]
H.l(b,"$ib",u,"$ab")
t=C.f.n(a.length,b.gk(b))
u=H.d([],u)
this.sk(u,t)
this.bd(u,0,a.length,a)
this.bd(u,a.length,t,b)
return u},
$ij:1,
$ib:1}
J.ks.prototype={}
J.at.prototype={
gS:function(a){return this.d},
J:function(){var u,t,s
u=this.a
t=u.length
if(this.b!==t)throw H.c(H.C(u))
s=this.c
if(s>=t){this.sdf(null)
return!1}this.sdf(u[s]);++this.c
return!0},
sdf:function(a){this.d=H.z(a,H.v(this,0))},
$iaZ:1}
J.bw.prototype={
ed:function(a){var u,t
if(a>=0){if(a<=2147483647)return a|0}else if(a>=-2147483648){u=a|0
return a===u?u:u-1}t=Math.floor(a)
if(isFinite(t))return t
throw H.c(P.E(""+a+".floor()"))},
ai:function(a){if(a>0){if(a!==1/0)return Math.round(a)}else if(a>-1/0)return 0-Math.round(0-a)
throw H.c(P.E(""+a+".round()"))},
eH:function(a,b){var u,t
if(b>20)throw H.c(P.aa(b,0,20,"fractionDigits",null))
u=a.toFixed(b)
if(a===0)t=1/a<0
else t=!1
if(t)return"-"+u
return u},
b8:function(a,b){var u,t,s,r
if(b<2||b>36)throw H.c(P.aa(b,2,36,"radix",null))
u=a.toString(b)
if(C.c.Y(u,u.length-1)!==41)return u
t=/^([\da-z]+)(?:\.([\da-z]+))?\(e\+(\d+)\)$/.exec(u)
if(t==null)H.t(P.E("Unexpected toString result: "+u))
s=t.length
if(1>=s)return H.e(t,1)
u=t[1]
if(3>=s)return H.e(t,3)
r=+t[3]
s=t[2]
if(s!=null){u+=s
r-=s.length}return u+C.c.m("0",r)},
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
n:function(a,b){if(typeof b!=="number")throw H.c(H.ar(b))
return a+b},
p:function(a,b){if(typeof b!=="number")throw H.c(H.ar(b))
return a-b},
m:function(a,b){if(typeof b!=="number")throw H.c(H.ar(b))
return a*b},
bb:function(a,b){var u=a%b
if(u===0)return 0
if(u>0)return u
if(b<0)return u-b
else return u+b},
f4:function(a,b){if((a|0)===a)if(b>=1||b<-1)return a/b|0
return this.dE(a,b)},
a2:function(a,b){return(a|0)===a?a/b|0:this.dE(a,b)},
dE:function(a,b){var u=a/b
if(u>=-2147483648&&u<=2147483647)return u|0
if(u>0){if(u!==1/0)return Math.floor(u)}else if(u>-1/0)return Math.ceil(u)
throw H.c(P.E("Result of truncating division is "+H.m(u)+": "+H.m(a)+" ~/ "+b))},
aL:function(a,b){var u
if(a>0)u=this.dD(a,b)
else{u=b>31?31:b
u=a>>u>>>0}return u},
ic:function(a,b){if(b<0)throw H.c(H.ar(b))
return this.dD(a,b)},
dD:function(a,b){return b>31?0:a>>>b},
$iq:1,
$ia0:1}
J.dj.prototype={$io:1}
J.fL.prototype={}
J.bd.prototype={
Y:function(a,b){if(b<0)throw H.c(H.c1(a,b))
if(b>=a.length)H.t(H.c1(a,b))
return a.charCodeAt(b)},
G:function(a,b){if(b>=a.length)throw H.c(H.c1(a,b))
return a.charCodeAt(b)},
n:function(a,b){if(typeof b!=="string")throw H.c(P.kl(b,null,null))
return a+b},
aR:function(a,b,c,d){var u,t
if(typeof b!=="number"||Math.floor(b)!==b)H.t(H.ar(b))
c=P.bk(b,c,a.length,null,null,null)
u=a.substring(0,b)
t=a.substring(c)
return u+d+t},
a7:function(a,b,c){var u
if(typeof c!=="number"||Math.floor(c)!==c)H.t(H.ar(c))
if(typeof c!=="number")return c.V()
if(c<0||c>a.length)throw H.c(P.aa(c,0,a.length,null,null))
u=c+b.length
if(u>a.length)return!1
return b===a.substring(c,u)},
a6:function(a,b){return this.a7(a,b,0)},
u:function(a,b,c){if(typeof b!=="number"||Math.floor(b)!==b)H.t(H.ar(b))
if(c==null)c=a.length
if(typeof b!=="number")return b.V()
if(b<0)throw H.c(P.dE(b,null,null))
if(b>c)throw H.c(P.dE(b,null,null))
if(c>a.length)throw H.c(P.dE(c,null,null))
return a.substring(b,c)},
aE:function(a,b){return this.u(a,b,null)},
m:function(a,b){var u,t
if(0>=b)return""
if(b===1||a.length===0)return a
if(b!==b>>>0)throw H.c(C.K)
for(u=a,t="";!0;){if((b&1)===1)t=u+t
b=b>>>1
if(b===0)break
u+=u}return t},
jN:function(a,b,c){var u=b-a.length
if(u<=0)return a
return this.m(c,u)+a},
ab:function(a,b){return this.jN(a,b," ")},
el:function(a,b,c){var u
if(c<0||c>a.length)throw H.c(P.aa(c,0,a.length,null,null))
u=a.indexOf(b,c)
return u},
ek:function(a,b){return this.el(a,b,0)},
i:function(a){return a},
gI:function(a){var u,t,s
for(u=a.length,t=0,s=0;s<u;++s){t=536870911&t+a.charCodeAt(s)
t=536870911&t+((524287&t)<<10)
t^=t>>6}t=536870911&t+((67108863&t)<<3)
t^=t>>11
return 536870911&t+((16383&t)<<15)},
gk:function(a){return a.length},
$ilb:1,
$ih:1}
H.a5.prototype={
gk:function(a){return this.a.length},
j:function(a,b){return C.c.Y(this.a,b)},
$acH:function(){return[P.o]},
$ay:function(){return[P.o]},
$aj:function(){return[P.o]},
$ab:function(){return[P.o]}}
H.fv.prototype={}
H.dq.prototype={
gS:function(a){return this.d},
J:function(){var u,t,s,r
u=this.a
t=J.c3(u)
s=t.gk(u)
if(this.b!==s)throw H.c(P.bK(u))
r=this.c
if(r>=s){this.saS(null)
return!1}this.saS(t.K(u,r));++this.c
return!0},
saS:function(a){this.d=H.z(a,H.v(this,0))},
$iaZ:1}
H.h0.prototype={
ga0:function(a){return new H.h1(J.c8(this.a),this.b,this.$ti)},
gk:function(a){return J.aE(this.a)},
K:function(a,b){return this.b.$1(J.kk(this.a,b))},
$aj:function(a,b){return[b]}}
H.h1.prototype={
J:function(){var u=this.b
if(u.J()){this.saS(this.c.$1(u.gS(u)))
return!0}this.saS(null)
return!1},
gS:function(a){return this.a},
saS:function(a){this.a=H.z(a,H.v(this,1))},
$aaZ:function(a,b){return[b]}}
H.iN.prototype={
ga0:function(a){return new H.iO(J.c8(this.a),this.b,this.$ti)}}
H.iO.prototype={
J:function(){var u,t
for(u=this.a,t=this.b;u.J();)if(t.$1(u.gS(u)))return!0
return!1},
gS:function(a){var u=this.a
return u.gS(u)}}
H.bN.prototype={}
H.cH.prototype={
l:function(a,b,c){H.z(c,H.aw(this,"cH",0))
throw H.c(P.E("Cannot modify an unmodifiable list"))}}
H.dZ.prototype={}
H.fi.prototype={
i:function(a){return P.kv(this)},
l:function(a,b,c){H.z(b,H.v(this,0))
H.z(c,H.v(this,1))
return H.mF()},
$iD:1}
H.fj.prototype={
gk:function(a){return this.a},
bj:function(a,b){if("__proto__"===b)return!1
return this.b.hasOwnProperty(b)},
j:function(a,b){if(!this.bj(0,b))return
return this.dg(b)},
dg:function(a){return this.b[H.L(a)]},
L:function(a,b){var u,t,s,r,q
u=H.v(this,1)
H.n(b,{func:1,ret:-1,args:[H.v(this,0),u]})
t=this.c
for(s=t.length,r=0;r<s;++r){q=t[r]
b.$2(q,H.z(this.dg(q),u))}}}
H.hw.prototype={}
H.i8.prototype={
aa:function(a){var u,t,s
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
H.hm.prototype={
i:function(a){var u=this.b
if(u==null)return"NoSuchMethodError: "+H.m(this.a)
return"NoSuchMethodError: method not found: '"+u+"' on null"}}
H.fN.prototype={
i:function(a){var u,t
u=this.b
if(u==null)return"NoSuchMethodError: "+H.m(this.a)
t=this.c
if(t==null)return"NoSuchMethodError: method not found: '"+u+"' ("+H.m(this.a)+")"
return"NoSuchMethodError: method not found: '"+u+"' on '"+t+"' ("+H.m(this.a)+")"}}
H.io.prototype={
i:function(a){var u=this.a
return u.length===0?"Error":"Error: "+u}}
H.kg.prototype={
$1:function(a){if(!!J.X(a).$ibu)if(a.$thrownJsError==null)a.$thrownJsError=this.a
return a},
$S:17}
H.eC.prototype={
i:function(a){var u,t
u=this.b
if(u!=null)return u
u=this.a
t=u!==null&&typeof u==="object"?u.stack:null
u=t==null?"":t
this.b=u
return u},
$iaq:1}
H.cb.prototype={
i:function(a){return"Closure '"+H.bS(this).trim()+"'"},
$ikp:1,
gkj:function(){return this},
$C:"$1",
$R:1,
$D:null}
H.hY.prototype={}
H.hQ.prototype={
i:function(a){var u=this.$static_name
if(u==null)return"Closure of unknown static method"
return"Closure '"+H.c6(u)+"'"}}
H.c9.prototype={
t:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof H.c9))return!1
return this.a===b.a&&this.b===b.b&&this.c===b.c},
gI:function(a){var u,t
u=this.c
if(u==null)t=H.ct(this.a)
else t=typeof u!=="object"?J.d2(u):H.ct(u)
return(t^H.ct(this.b))>>>0},
i:function(a){var u=this.c
if(u==null)u=this.a
return"Closure '"+H.m(this.d)+"' of "+("Instance of '"+H.bS(u)+"'")}}
H.ia.prototype={
i:function(a){return this.a}}
H.fe.prototype={
i:function(a){return this.a}}
H.hD.prototype={
i:function(a){return"RuntimeError: "+H.m(this.a)}}
H.aI.prototype={
gk:function(a){return this.a},
gaq:function(a){return new H.fS(this,[H.v(this,0)])},
bj:function(a,b){var u,t
if(typeof b==="string"){u=this.b
if(u==null)return!1
return this.dc(u,b)}else if(typeof b==="number"&&(b&0x3ffffff)===b){t=this.c
if(t==null)return!1
return this.dc(t,b)}else return this.jx(b)},
jx:function(a){var u=this.d
if(u==null)return!1
return this.cA(this.bP(u,this.cz(a)),a)>=0},
j:function(a,b){var u,t,s,r
if(typeof b==="string"){u=this.b
if(u==null)return
t=this.be(u,b)
s=t==null?null:t.b
return s}else if(typeof b==="number"&&(b&0x3ffffff)===b){r=this.c
if(r==null)return
t=this.be(r,b)
s=t==null?null:t.b
return s}else return this.jy(b)},
jy:function(a){var u,t,s
u=this.d
if(u==null)return
t=this.bP(u,this.cz(a))
s=this.cA(t,a)
if(s<0)return
return t[s].b},
l:function(a,b,c){var u,t
H.z(b,H.v(this,0))
H.z(c,H.v(this,1))
if(typeof b==="string"){u=this.b
if(u==null){u=this.bY()
this.b=u}this.d4(u,b,c)}else if(typeof b==="number"&&(b&0x3ffffff)===b){t=this.c
if(t==null){t=this.bY()
this.c=t}this.d4(t,b,c)}else this.jz(b,c)},
jz:function(a,b){var u,t,s,r
H.z(a,H.v(this,0))
H.z(b,H.v(this,1))
u=this.d
if(u==null){u=this.bY()
this.d=u}t=this.cz(a)
s=this.bP(u,t)
if(s==null)this.c5(u,t,[this.bZ(a,b)])
else{r=this.cA(s,a)
if(r>=0)s[r].b=b
else s.push(this.bZ(a,b))}},
L:function(a,b){var u,t
H.n(b,{func:1,ret:-1,args:[H.v(this,0),H.v(this,1)]})
u=this.e
t=this.r
for(;u!=null;){b.$2(u.a,u.b)
if(t!==this.r)throw H.c(P.bK(this))
u=u.c}},
d4:function(a,b,c){var u
H.z(b,H.v(this,0))
H.z(c,H.v(this,1))
u=this.be(a,b)
if(u==null)this.c5(a,b,this.bZ(b,c))
else u.b=c},
bZ:function(a,b){var u,t
u=new H.fR(H.z(a,H.v(this,0)),H.z(b,H.v(this,1)))
if(this.e==null){this.f=u
this.e=u}else{t=this.f
u.d=t
t.c=u
this.f=u}++this.a
this.r=this.r+1&67108863
return u},
cz:function(a){return J.d2(a)&0x3ffffff},
cA:function(a,b){var u,t
if(a==null)return-1
u=a.length
for(t=0;t<u;++t)if(J.R(a[t].a,b))return t
return-1},
i:function(a){return P.kv(this)},
be:function(a,b){return a[b]},
bP:function(a,b){return a[b]},
c5:function(a,b,c){a[b]=c},
fG:function(a,b){delete a[b]},
dc:function(a,b){return this.be(a,b)!=null},
bY:function(){var u=Object.create(null)
this.c5(u,"<non-identifier-key>",u)
this.fG(u,"<non-identifier-key>")
return u}}
H.fR.prototype={}
H.fS.prototype={
gk:function(a){return this.a.a},
ga0:function(a){var u,t
u=this.a
t=new H.fT(u,u.r,this.$ti)
t.c=u.e
return t}}
H.fT.prototype={
gS:function(a){return this.d},
J:function(){var u=this.a
if(this.b!==u.r)throw H.c(P.bK(u))
else{u=this.c
if(u==null){this.sd3(null)
return!1}else{this.sd3(u.a)
this.c=this.c.c
return!0}}},
sd3:function(a){this.d=H.z(a,H.v(this,0))},
$iaZ:1}
H.jV.prototype={
$1:function(a){return this.a(a)},
$S:17}
H.jW.prototype={
$2:function(a,b){return this.a(a,b)},
$S:43}
H.jX.prototype={
$1:function(a){return this.a(H.L(a))},
$S:28}
H.fM.prototype={
i:function(a){return"RegExp/"+this.a+"/"},
$ilb:1,
$inc:1}
H.co.prototype={$ico:1}
H.bx.prototype={$ibx:1}
H.dw.prototype={
gk:function(a){return a.length},
$iH:1,
$aH:function(){}}
H.cp.prototype={
j:function(a,b){H.bb(b,a,a.length)
return a[b]},
l:function(a,b,c){H.o1(c)
H.bb(b,a,a.length)
a[b]=c},
$abN:function(){return[P.q]},
$ay:function(){return[P.q]},
$ij:1,
$aj:function(){return[P.q]},
$ib:1,
$ab:function(){return[P.q]}}
H.dx.prototype={
l:function(a,b,c){H.af(c)
H.bb(b,a,a.length)
a[b]=c},
$abN:function(){return[P.o]},
$ay:function(){return[P.o]},
$ij:1,
$aj:function(){return[P.o]},
$ib:1,
$ab:function(){return[P.o]}}
H.hg.prototype={
j:function(a,b){H.bb(b,a,a.length)
return a[b]}}
H.hh.prototype={
j:function(a,b){H.bb(b,a,a.length)
return a[b]}}
H.hi.prototype={
j:function(a,b){H.bb(b,a,a.length)
return a[b]}}
H.hj.prototype={
j:function(a,b){H.bb(b,a,a.length)
return a[b]}}
H.hk.prototype={
j:function(a,b){H.bb(b,a,a.length)
return a[b]}}
H.dy.prototype={
gk:function(a){return a.length},
j:function(a,b){H.bb(b,a,a.length)
return a[b]}}
H.cq.prototype={
gk:function(a){return a.length},
j:function(a,b){H.bb(b,a,a.length)
return a[b]},
$icq:1,
$iQ:1}
H.cM.prototype={}
H.cN.prototype={}
H.cO.prototype={}
H.cP.prototype={}
P.iQ.prototype={
$1:function(a){var u,t
u=this.a
t=u.a
u.a=null
t.$0()},
$S:26}
P.iP.prototype={
$1:function(a){var u,t
this.a.a=H.n(a,{func:1,ret:-1})
u=this.b
t=this.c
u.firstChild?u.removeChild(t):u.appendChild(t)},
$S:31}
P.iR.prototype={
$0:function(){this.a.$0()},
$S:0}
P.iS.prototype={
$0:function(){this.a.$0()},
$S:0}
P.eI.prototype={
fn:function(a,b){if(self.setTimeout!=null)this.b=self.setTimeout(H.c0(new P.jq(this,b),0),a)
else throw H.c(P.E("`setTimeout()` not found."))},
fo:function(a,b){if(self.setTimeout!=null)this.b=self.setInterval(H.c0(new P.jp(this,a,Date.now(),b),0),a)
else throw H.c(P.E("Periodic timer."))},
$ib5:1}
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
if(r>(t+1)*s)t=C.f.f4(r,s)}u.c=t
this.d.$1(u)},
$S:0}
P.ba.prototype={
jD:function(a){if(this.c!==6)return!0
return this.b.b.cO(H.n(this.d,{func:1,ret:P.ac,args:[P.P]}),a.a,P.ac,P.P)},
jw:function(a){var u,t,s,r
u=this.e
t=P.P
s={futureOr:1,type:H.v(this,1)}
r=this.b.b
if(H.eY(u,{func:1,args:[P.P,P.aq]}))return H.kM(r.k6(u,a.a,a.b,null,t,P.aq),s)
else return H.kM(r.cO(H.n(u,{func:1,args:[P.P]}),a.a,null,t),s)}}
P.aB.prototype={
eG:function(a,b,c){var u,t,s,r
u=H.v(this,0)
H.n(a,{func:1,ret:{futureOr:1,type:c},args:[u]})
t=$.W
if(t!==C.k){t.toString
H.n(a,{func:1,ret:{futureOr:1,type:c},args:[u]})
if(b!=null)b=P.nR(b,t)}H.n(a,{func:1,ret:{futureOr:1,type:c},args:[u]})
s=new P.aB(0,$.W,[c])
r=b==null?1:3
this.d5(new P.ba(s,r,a,b,[u,c]))
return s},
k9:function(a,b){return this.eG(a,null,b)},
d5:function(a){var u,t
u=this.a
if(u<=1){a.a=H.f(this.c,"$iba")
this.c=a}else{if(u===2){t=H.f(this.c,"$iaB")
u=t.a
if(u<4){t.d5(a)
return}this.a=u
this.c=t.c}u=this.b
u.toString
P.jJ(null,null,u,H.n(new P.j_(this,a),{func:1,ret:-1}))}},
dz:function(a){var u,t,s,r,q,p
u={}
u.a=a
if(a==null)return
t=this.a
if(t<=1){s=H.f(this.c,"$iba")
this.c=a
if(s!=null){for(r=a;q=r.a,q!=null;r=q);r.a=s}}else{if(t===2){p=H.f(this.c,"$iaB")
t=p.a
if(t<4){p.dz(a)
return}this.a=t
this.c=p.c}u.a=this.bg(a)
t=this.b
t.toString
P.jJ(null,null,t,H.n(new P.j3(u,this),{func:1,ret:-1}))}},
c1:function(){var u=H.f(this.c,"$iba")
this.c=null
return this.bg(u)},
bg:function(a){var u,t,s
for(u=a,t=null;u!=null;t=u,u=s){s=u.a
u.a=t}return t},
d7:function(a){var u,t,s
u=H.v(this,0)
H.kM(a,{futureOr:1,type:u})
t=this.$ti
if(H.cZ(a,"$ici",t,"$aci"))if(H.cZ(a,"$iaB",t,null))P.lA(a,this)
else P.nv(a,this)
else{s=this.c1()
H.z(a,u)
this.a=4
this.c=a
P.cK(this,s)}},
d8:function(a,b){var u
H.f(b,"$iaq")
u=this.c1()
this.a=8
this.c=new P.ai(a,b)
P.cK(this,u)},
$ici:1}
P.j_.prototype={
$0:function(){P.cK(this.a,this.b)},
$S:0}
P.j3.prototype={
$0:function(){P.cK(this.b,this.a.a)},
$S:0}
P.j0.prototype={
$1:function(a){var u=this.a
u.a=0
u.d7(a)},
$S:26}
P.j1.prototype={
$2:function(a,b){H.f(b,"$iaq")
this.a.d8(a,b)},
$1:function(a){return this.$2(a,null)},
$S:44}
P.j2.prototype={
$0:function(){this.a.d8(this.b,this.c)},
$S:0}
P.j6.prototype={
$0:function(){var u,t,s,r,q,p,o
u=null
try{r=this.c
u=r.b.b.eE(H.n(r.d,{func:1}),null)}catch(q){t=H.aD(q)
s=H.c4(q)
if(this.d){r=H.f(this.a.a.c,"$iai").a
p=t
p=r==null?p==null:r===p
r=p}else r=!1
p=this.b
if(r)p.b=H.f(this.a.a.c,"$iai")
else p.b=new P.ai(t,s)
p.a=!0
return}if(!!J.X(u).$ici){if(u instanceof P.aB&&u.a>=4){if(u.a===8){r=this.b
r.b=H.f(u.c,"$iai")
r.a=!0}return}o=this.a.a
r=this.b
r.b=u.k9(new P.j7(o),null)
r.a=!1}},
$S:3}
P.j7.prototype={
$1:function(a){return this.a},
$S:50}
P.j5.prototype={
$0:function(){var u,t,s,r,q,p,o
try{s=this.b
r=H.v(s,0)
q=H.z(this.c,r)
p=H.v(s,1)
this.a.b=s.b.b.cO(H.n(s.d,{func:1,ret:{futureOr:1,type:p},args:[r]}),q,{futureOr:1,type:p},r)}catch(o){u=H.aD(o)
t=H.c4(o)
s=this.a
s.b=new P.ai(u,t)
s.a=!0}},
$S:3}
P.j4.prototype={
$0:function(){var u,t,s,r,q,p,o,n
try{u=H.f(this.a.a.c,"$iai")
r=this.c
if(r.jD(u)&&r.e!=null){q=this.b
q.b=r.jw(u)
q.a=!1}}catch(p){t=H.aD(p)
s=H.c4(p)
r=H.f(this.a.a.c,"$iai")
q=r.a
o=t
n=this.b
if(q==null?o==null:q===o)n.b=r
else n.b=new P.ai(t,s)
n.a=!0}},
$S:3}
P.e6.prototype={}
P.hT.prototype={
gk:function(a){var u,t,s,r
u={}
t=new P.aB(0,$.W,[P.o])
u.a=0
s=H.v(this,0)
r=H.n(new P.hV(u,this),{func:1,ret:-1,args:[s]})
H.n(new P.hW(u,t),{func:1,ret:-1})
W.ab(this.a,this.b,r,!1,s)
return t}}
P.hV.prototype={
$1:function(a){H.z(a,H.v(this.b,0));++this.a.a},
$S:function(){return{func:1,ret:P.I,args:[H.v(this.b,0)]}}}
P.hW.prototype={
$0:function(){this.b.d7(this.a.a)},
$S:0}
P.cx.prototype={}
P.hU.prototype={}
P.b5.prototype={}
P.ai.prototype={
i:function(a){return H.m(this.a)},
$ibu:1}
P.jA.prototype={$ioY:1}
P.jI.prototype={
$0:function(){var u,t,s
u=this.a
t=u.a
if(t==null){s=new P.dz()
u.a=s
u=s}else u=t
t=this.b
if(t==null)throw H.c(u)
s=H.c(u)
s.stack=t.i(0)
throw s},
$S:0}
P.je.prototype={
k7:function(a){var u,t,s
H.n(a,{func:1,ret:-1})
try{if(C.k===$.W){a.$0()
return}P.lM(null,null,this,a,-1)}catch(s){u=H.aD(s)
t=H.c4(s)
P.jH(null,null,this,u,H.f(t,"$iaq"))}},
k8:function(a,b,c){var u,t,s
H.n(a,{func:1,ret:-1,args:[c]})
H.z(b,c)
try{if(C.k===$.W){a.$1(b)
return}P.lN(null,null,this,a,b,-1,c)}catch(s){u=H.aD(s)
t=H.c4(s)
P.jH(null,null,this,u,H.f(t,"$iaq"))}},
j0:function(a,b){return new P.jg(this,H.n(a,{func:1,ret:b}),b)},
ce:function(a){return new P.jf(this,H.n(a,{func:1,ret:-1}))},
dL:function(a,b){return new P.jh(this,H.n(a,{func:1,ret:-1,args:[b]}),b)},
eE:function(a,b){H.n(a,{func:1,ret:b})
if($.W===C.k)return a.$0()
return P.lM(null,null,this,a,b)},
cO:function(a,b,c,d){H.n(a,{func:1,ret:c,args:[d]})
H.z(b,d)
if($.W===C.k)return a.$1(b)
return P.lN(null,null,this,a,b,c,d)},
k6:function(a,b,c,d,e,f){H.n(a,{func:1,ret:d,args:[e,f]})
H.z(b,e)
H.z(c,f)
if($.W===C.k)return a.$2(b,c)
return P.nS(null,null,this,a,b,c,d,e,f)}}
P.jg.prototype={
$0:function(){return this.a.eE(this.b,this.c)},
$S:function(){return{func:1,ret:this.c}}}
P.jf.prototype={
$0:function(){return this.a.k7(this.b)},
$S:3}
P.jh.prototype={
$1:function(a){var u=this.c
return this.a.k8(this.b,H.z(a,u),u)},
$S:function(){return{func:1,ret:-1,args:[this.c]}}}
P.jb.prototype={
ga0:function(a){return P.lC(this,this.r,H.v(this,0))},
gk:function(a){return this.a},
h:function(a,b){var u
H.z(b,H.v(this,0))
if(typeof b==="number"&&(b&1073741823)===b){u=this.c
if(u==null){u=P.lD()
this.c=u}return this.fC(u,b)}else return this.fq(0,b)},
fq:function(a,b){var u,t,s
H.z(b,H.v(this,0))
u=this.d
if(u==null){u=P.lD()
this.d=u}t=this.d9(b)
s=u[t]
if(s==null)u[t]=[this.bL(b)]
else{if(this.dh(s,b)>=0)return!1
s.push(this.bL(b))}return!0},
M:function(a,b){if(typeof b==="number"&&(b&1073741823)===b)return this.hX(this.c,b)
else return this.hW(0,b)},
hW:function(a,b){var u,t,s
u=this.d
if(u==null)return!1
t=this.fQ(u,b)
s=this.dh(t,b)
if(s<0)return!1
this.dF(t.splice(s,1)[0])
return!0},
fC:function(a,b){H.z(b,H.v(this,0))
if(H.f(a[b],"$icL")!=null)return!1
a[b]=this.bL(b)
return!0},
hX:function(a,b){var u
if(a==null)return!1
u=H.f(a[b],"$icL")
if(u==null)return!1
this.dF(u)
delete a[b]
return!0},
dn:function(){this.r=1073741823&this.r+1},
bL:function(a){var u,t
u=new P.cL(H.z(a,H.v(this,0)))
if(this.e==null){this.f=u
this.e=u}else{t=this.f
u.c=t
t.b=u
this.f=u}++this.a
this.dn()
return u},
dF:function(a){var u,t
u=a.c
t=a.b
if(u==null)this.e=t
else u.b=t
if(t==null)this.f=u
else t.c=u;--this.a
this.dn()},
d9:function(a){return J.d2(a)&1073741823},
fQ:function(a,b){return a[this.d9(b)]},
dh:function(a,b){var u,t
if(a==null)return-1
u=a.length
for(t=0;t<u;++t)if(a[t].a==b)return t
return-1}}
P.cL.prototype={}
P.jc.prototype={
gS:function(a){return this.d},
J:function(){var u=this.a
if(this.b!==u.r)throw H.c(P.bK(u))
else{u=this.c
if(u==null){this.sd6(null)
return!1}else{this.sd6(H.z(u.a,H.v(this,0)))
this.c=this.c.b
return!0}}},
sd6:function(a){this.d=H.z(a,H.v(this,0))},
$iaZ:1}
P.fU.prototype={
$2:function(a,b){this.a.l(0,H.z(a,this.b),H.z(b,this.c))},
$S:7}
P.fV.prototype={$ij:1,$ib:1}
P.y.prototype={
ga0:function(a){return new H.dq(a,this.gk(a),0,[H.bD(this,a,"y",0)])},
K:function(a,b){return this.j(a,b)},
kb:function(a,b){var u,t
u=H.d([],[H.bD(this,a,"y",0)])
C.a.sk(u,this.gk(a))
for(t=0;t<this.gk(a);++t)C.a.l(u,t,this.j(a,t))
return u},
ka:function(a){return this.kb(a,!0)},
n:function(a,b){var u,t
u=[H.bD(this,a,"y",0)]
H.l(b,"$ib",u,"$ab")
t=H.d([],u)
C.a.sk(t,C.f.n(this.gk(a),b.gk(b)))
C.a.bd(t,0,this.gk(a),a)
C.a.bd(t,this.gk(a),t.length,b)
return t},
jq:function(a,b,c,d){var u
H.z(d,H.bD(this,a,"y",0))
P.bk(b,c,this.gk(a),null,null,null)
for(u=b;u<c;++u)this.l(a,u,d)},
i:function(a){return P.kr(a,"[","]")}}
P.fY.prototype={}
P.fZ.prototype={
$2:function(a,b){var u,t
u=this.a
if(!u.a)this.b.a+=", "
u.a=!1
u=this.b
t=u.a+=H.m(a)
u.a=t+": "
u.a+=H.m(b)},
$S:7}
P.ag.prototype={
L:function(a,b){var u,t
H.n(b,{func:1,ret:-1,args:[H.bD(this,a,"ag",0),H.bD(this,a,"ag",1)]})
for(u=J.c8(this.gaq(a));u.J();){t=u.gS(u)
b.$2(t,this.j(a,t))}},
gk:function(a){return J.aE(this.gaq(a))},
i:function(a){return P.kv(a)},
$iD:1}
P.jr.prototype={
l:function(a,b,c){H.z(b,H.v(this,0))
H.z(c,H.v(this,1))
throw H.c(P.E("Cannot modify unmodifiable map"))}}
P.h_.prototype={
j:function(a,b){return J.kU(this.a,b)},
l:function(a,b,c){J.ki(this.a,H.z(b,H.v(this,0)),H.z(c,H.v(this,1)))},
L:function(a,b){J.kW(this.a,H.n(b,{func:1,ret:-1,args:[H.v(this,0),H.v(this,1)]}))},
gk:function(a){return J.aE(this.a)},
i:function(a){return J.as(this.a)},
$iD:1}
P.e_.prototype={}
P.ji.prototype={
i:function(a){return P.kr(this,"{","}")},
K:function(a,b){var u,t,s
if(b<0)H.t(P.aa(b,0,null,"index",null))
for(u=P.lC(this,this.r,H.v(this,0)),t=0;u.J();){s=u.d
if(b===t)return s;++t}throw H.c(P.V(b,this,"index",null,t))},
$ij:1,
$ilj:1}
P.el.prototype={}
P.eN.prototype={}
P.fa.prototype={
jF:function(a,b,c,a0){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
a0=P.bk(c,a0,b.length,null,null,null)
u=$.mq()
for(t=c,s=t,r=null,q=-1,p=-1,o=0;t<a0;t=n){n=t+1
m=C.c.G(b,t)
if(m===37){l=n+2
if(l<=a0){k=H.jU(C.c.G(b,n))
j=H.jU(C.c.G(b,n+1))
i=k*16+j-(j&256)
if(i===37)i=-1
n=l}else i=-1}else i=m
if(0<=i&&i<=127){if(i<0||i>=u.length)return H.e(u,i)
h=u[i]
if(h>=0){i=C.c.Y("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",h)
if(i===m)continue
m=i}else{if(h===-1){if(q<0){g=r==null?null:r.a.length
if(g==null)g=0
q=g+(t-s)
p=t}++o
if(m===61)continue}m=i}if(h!==-2){if(r==null)r=new P.al("")
g=r.a+=C.c.u(b,s,t)
r.a=g+H.dC(m)
s=n
continue}}throw H.c(P.a3("Invalid base64 data",b,t))}if(r!=null){g=r.a+=C.c.u(b,s,a0)
f=g.length
if(q>=0)P.kY(b,p,a0,q,o,f)
else{e=C.f.bb(f-1,4)+1
if(e===1)throw H.c(P.a3("Invalid base64 encoding length ",b,a0))
for(;e<4;){g+="="
r.a=g;++e}}g=r.a
return C.c.aR(b,c,a0,g.charCodeAt(0)==0?g:g)}d=a0-c
if(q>=0)P.kY(b,p,a0,q,o,d)
else{e=C.f.bb(d,4)
if(e===1)throw H.c(P.a3("Invalid base64 encoding length ",b,a0))
if(e>1)b=C.c.aR(b,a0,a0,e===2?"==":"=")}return b},
$abI:function(){return[[P.b,P.o],P.h]}}
P.fb.prototype={
$abM:function(){return[[P.b,P.o],P.h]}}
P.bI.prototype={}
P.bM.prototype={}
P.fw.prototype={
$abI:function(){return[P.h,[P.b,P.o]]}}
P.iw.prototype={
gjp:function(){return C.L}}
P.iy.prototype={
aX:function(a,b,c){var u,t,s
c=P.bk(b,c,a.length,null,null,null)
u=c-b
if(u===0)return new Uint8Array(0)
t=new Uint8Array(u*3)
s=new P.jz(t)
if(s.fP(a,b,c)!==c)s.dH(J.mx(a,c-1),0)
return new Uint8Array(t.subarray(0,H.nM(0,s.b,t.length)))},
cl:function(a){return this.aX(a,0,null)},
$abM:function(){return[P.h,[P.b,P.o]]}}
P.jz.prototype={
dH:function(a,b){var u,t,s,r,q
u=this.c
t=this.b
s=t+1
r=u.length
if((b&64512)===56320){q=65536+((a&1023)<<10)|b&1023
this.b=s
if(t>=r)return H.e(u,t)
u[t]=240|q>>>18
t=s+1
this.b=t
if(s>=r)return H.e(u,s)
u[s]=128|q>>>12&63
s=t+1
this.b=s
if(t>=r)return H.e(u,t)
u[t]=128|q>>>6&63
this.b=s+1
if(s>=r)return H.e(u,s)
u[s]=128|q&63
return!0}else{this.b=s
if(t>=r)return H.e(u,t)
u[t]=224|a>>>12
t=s+1
this.b=t
if(s>=r)return H.e(u,s)
u[s]=128|a>>>6&63
this.b=t+1
if(t>=r)return H.e(u,t)
u[t]=128|a&63
return!1}},
fP:function(a,b,c){var u,t,s,r,q,p,o
if(b!==c&&(C.c.Y(a,c-1)&64512)===55296)--c
for(u=this.c,t=u.length,s=b;s<c;++s){r=C.c.G(a,s)
if(r<=127){q=this.b
if(q>=t)break
this.b=q+1
u[q]=r}else if((r&64512)===55296){if(this.b+3>=t)break
p=s+1
if(this.dH(r,C.c.G(a,p)))s=p}else if(r<=2047){q=this.b
o=q+1
if(o>=t)break
this.b=o
if(q>=t)return H.e(u,q)
u[q]=192|r>>>6
this.b=o+1
u[o]=128|r&63}else{q=this.b
if(q+2>=t)break
o=q+1
this.b=o
if(q>=t)return H.e(u,q)
u[q]=224|r>>>12
q=o+1
this.b=q
if(o>=t)return H.e(u,o)
u[o]=128|r>>>6&63
this.b=q+1
if(q>=t)return H.e(u,q)
u[q]=128|r&63}}return s}}
P.ix.prototype={
aX:function(a,b,c){var u,t,s,r
H.l(a,"$ib",[P.o],"$ab")
u=P.nm(!1,a,b,c)
if(u!=null)return u
c=P.bk(b,c,J.aE(a),null,null,null)
t=new P.al("")
s=new P.jx(!1,t)
s.aX(a,b,c)
if(s.e>0){H.t(P.a3("Unfinished UTF-8 octet sequence",a,c))
t.a+=H.dC(65533)
s.d=0
s.e=0
s.f=0}r=t.a
return r.charCodeAt(0)==0?r:r},
cl:function(a){return this.aX(a,0,null)},
$abM:function(){return[[P.b,P.o],P.h]}}
P.jx.prototype={
aX:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k,j,i
H.l(a,"$ib",[P.o],"$ab")
u=this.d
t=this.e
s=this.f
this.d=0
this.e=0
this.f=0
r=new P.jy(this,b,c,a)
$label0$0:for(q=J.c3(a),p=this.b,o=b;!0;o=j){$label1$1:if(t>0){do{if(o===c)break $label0$0
n=q.j(a,o)
if(typeof n!=="number")return n.bE()
if((n&192)!==128){m=P.a3("Bad UTF-8 encoding 0x"+C.f.b8(n,16),a,o)
throw H.c(m)}else{u=(u<<6|n&63)>>>0;--t;++o}}while(t>0)
m=s-1
if(m<0||m>=4)return H.e(C.B,m)
if(u<=C.B[m]){m=P.a3("Overlong encoding of 0x"+C.f.b8(u,16),a,o-s-1)
throw H.c(m)}if(u>1114111){m=P.a3("Character outside valid Unicode range: 0x"+C.f.b8(u,16),a,o-s-1)
throw H.c(m)}if(!this.c||u!==65279)p.a+=H.dC(u)
this.c=!1}for(m=o<c;m;){l=P.nT(a,o,c)
if(l>0){this.c=!1
k=o+l
r.$2(o,k)
if(k===c)break}else k=o
j=k+1
n=q.j(a,k)
if(typeof n!=="number")return n.V()
if(n<0){i=P.a3("Negative UTF-8 code unit: -0x"+C.f.b8(-n,16),a,j-1)
throw H.c(i)}else{if((n&224)===192){u=n&31
t=1
s=1
continue $label0$0}if((n&240)===224){u=n&15
t=2
s=2
continue $label0$0}if((n&248)===240&&n<245){u=n&7
t=3
s=3
continue $label0$0}i=P.a3("Bad UTF-8 encoding 0x"+C.f.b8(n,16),a,j-1)
throw H.c(i)}}break $label0$0}if(t>0){this.d=u
this.e=t
this.f=s}}}
P.jy.prototype={
$2:function(a,b){this.a.b.a+=P.dM(this.d,a,b)},
$S:32}
P.ac.prototype={}
P.aj.prototype={
t:function(a,b){if(b==null)return!1
return b instanceof P.aj&&this.a===b.a&&!0},
gI:function(a){var u=this.a
return(u^C.f.aL(u,30))&1073741823},
i:function(a){var u,t,s,r,q,p,o,n
u=P.mG(H.n7(this))
t=P.db(H.n5(this))
s=P.db(H.n1(this))
r=P.db(H.n2(this))
q=P.db(H.n4(this))
p=P.db(H.n6(this))
o=P.mH(H.n3(this))
n=u+"-"+t+"-"+s+" "+r+":"+q+":"+p+"."+o
return n}}
P.q.prototype={}
P.aX.prototype={
n:function(a,b){return new P.aX(C.f.n(this.a,b.gfI()))},
p:function(a,b){return new P.aX(C.f.p(this.a,b.gfI()))},
t:function(a,b){if(b==null)return!1
return b instanceof P.aX&&this.a===b.a},
gI:function(a){return C.f.gI(this.a)},
i:function(a){var u,t,s,r,q
u=new P.fu()
t=this.a
if(t<0)return"-"+new P.aX(0-t).i(0)
s=u.$1(C.f.a2(t,6e7)%60)
r=u.$1(C.f.a2(t,1e6)%60)
q=new P.ft().$1(t%1e6)
return""+C.f.a2(t,36e8)+":"+H.m(s)+":"+H.m(r)+"."+H.m(q)}}
P.ft.prototype={
$1:function(a){if(a>=1e5)return""+a
if(a>=1e4)return"0"+a
if(a>=1000)return"00"+a
if(a>=100)return"000"+a
if(a>=10)return"0000"+a
return"00000"+a},
$S:25}
P.fu.prototype={
$1:function(a){if(a>=10)return""+a
return"0"+a},
$S:25}
P.bu.prototype={}
P.dz.prototype={
i:function(a){return"Throw of null."}}
P.aT.prototype={
gbN:function(){return"Invalid argument"+(!this.a?"(s)":"")},
gbM:function(){return""},
i:function(a){var u,t,s,r,q,p
u=this.c
t=u!=null?" ("+u+")":""
u=this.d
s=u==null?"":": "+u
r=this.gbN()+t+s
if(!this.a)return r
q=this.gbM()
p=P.fy(this.b)
return r+q+": "+p}}
P.bT.prototype={
gbN:function(){return"RangeError"},
gbM:function(){var u,t,s
u=this.e
if(u==null){u=this.f
t=u!=null?": Not less than or equal to "+H.m(u):""}else{s=this.f
if(s==null)t=": Not greater than or equal to "+H.m(u)
else if(s>u)t=": Not in range "+H.m(u)+".."+H.m(s)+", inclusive"
else t=s<u?": Valid value range is empty":": Only valid value is "+H.m(u)}return t}}
P.fI.prototype={
gbN:function(){return"RangeError"},
gbM:function(){var u,t
u=H.af(this.b)
if(typeof u!=="number")return u.V()
if(u<0)return": index must not be negative"
t=this.f
if(t===0)return": no indices are valid"
return": index should be less than "+H.m(t)},
gk:function(a){return this.f}}
P.ip.prototype={
i:function(a){return"Unsupported operation: "+this.a}}
P.il.prototype={
i:function(a){var u=this.a
return u!=null?"UnimplementedError: "+u:"UnimplementedError"}}
P.dK.prototype={
i:function(a){return"Bad state: "+this.a}}
P.fh.prototype={
i:function(a){var u=this.a
if(u==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+P.fy(u)+"."}}
P.hp.prototype={
i:function(a){return"Out of Memory"},
$ibu:1}
P.dJ.prototype={
i:function(a){return"Stack Overflow"},
$ibu:1}
P.fo.prototype={
i:function(a){var u=this.a
return u==null?"Reading static variable during its initialization":"Reading static variable '"+u+"' during its initialization"}}
P.ee.prototype={
i:function(a){return"Exception: "+this.a}}
P.fG.prototype={
i:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f
u=this.a
t=""!==u?"FormatException: "+u:"FormatException"
s=this.c
r=this.b
if(typeof r==="string"){if(s!=null)u=s<0||s>r.length
else u=!1
if(u)s=null
if(s==null){q=r.length>78?C.c.u(r,0,75)+"...":r
return t+"\n"+q}for(p=1,o=0,n=!1,m=0;m<s;++m){l=C.c.G(r,m)
if(l===10){if(o!==m||!n)++p
o=m+1
n=!1}else if(l===13){++p
o=m+1
n=!0}}t=p>1?t+(" (at line "+p+", character "+(s-o+1)+")\n"):t+(" (at character "+(s+1)+")\n")
k=r.length
for(m=s;m<k;++m){l=C.c.Y(r,m)
if(l===10||l===13){k=m
break}}if(k-o>78)if(s-o<75){j=o+75
i=o
h=""
g="..."}else{if(k-s<75){i=k-75
j=k
g=""}else{i=s-36
j=s+36
g="..."}h="..."}else{j=k
i=o
h=""
g=""}f=C.c.u(r,i,j)
return t+h+f+g+"\n"+C.c.m(" ",s-i+h.length)+"^\n"}else return s!=null?t+(" (at offset "+H.m(s)+")"):t}}
P.o.prototype={}
P.j.prototype={
gk:function(a){var u,t
u=this.ga0(this)
for(t=0;u.J();)++t
return t},
K:function(a,b){var u,t,s
if(b<0)H.t(P.aa(b,0,null,"index",null))
for(u=this.ga0(this),t=0;u.J();){s=u.gS(u)
if(b===t)return s;++t}throw H.c(P.V(b,this,"index",null,t))},
i:function(a){return P.mM(this,"(",")")}}
P.aZ.prototype={}
P.b.prototype={$ij:1}
P.D.prototype={}
P.I.prototype={
gI:function(a){return P.P.prototype.gI.call(this,this)},
i:function(a){return"null"}}
P.a0.prototype={}
P.P.prototype={constructor:P.P,$iP:1,
t:function(a,b){return this===b},
gI:function(a){return H.ct(this)},
i:function(a){return"Instance of '"+H.bS(this)+"'"},
toString:function(){return this.i(this)}}
P.aq.prototype={}
P.h.prototype={$ilb:1}
P.al.prototype={
gk:function(a){return this.a.length},
i:function(a){var u=this.a
return u.charCodeAt(0)==0?u:u},
$ioz:1}
P.iu.prototype={
$2:function(a,b){var u,t,s,r
u=P.h
H.l(a,"$iD",[u,u],"$aD")
H.L(b)
t=J.kN(b).ek(b,"=")
if(t===-1){if(b!=="")J.ki(a,P.kF(b,0,b.length,this.a,!0),"")}else if(t!==0){s=C.c.u(b,0,t)
r=C.c.aE(b,t+1)
u=this.a
J.ki(a,P.kF(s,0,s.length,u,!0),P.kF(r,0,r.length,u,!0))}return a},
$S:35}
P.ir.prototype={
$2:function(a,b){throw H.c(P.a3("Illegal IPv4 address, "+a,this.a,b))},
$S:40}
P.is.prototype={
$2:function(a,b){throw H.c(P.a3("Illegal IPv6 address, "+a,this.a,b))},
$1:function(a){return this.$2(a,null)},
$S:41}
P.it.prototype={
$2:function(a,b){var u
if(b-a>4)this.a.$2("an IPv6 part can only contain a maximum of 4 hex digits",a)
u=P.f_(C.c.u(this.b,a,b),null,16)
if(typeof u!=="number")return u.V()
if(u<0||u>65535)this.a.$2("each part must be in the range of `0x0..0xFFFF`",a)
return u},
$S:45}
P.bX.prototype={
geN:function(){return this.b},
gcw:function(a){var u=this.c
if(u==null)return""
if(C.c.a6(u,"["))return C.c.u(u,1,u.length-1)
return u},
gbA:function(a){var u=this.d
if(u==null)return P.lE(this.a)
return u},
gcI:function(a){var u=this.f
return u==null?"":u},
gef:function(){var u=this.r
return u==null?"":u},
cN:function(a,b,c,d,e,f,g,h,i,j){var u,t,s
H.l(h,"$iD",[P.h,null],"$aD")
i=this.a
u=i==="file"
j=this.b
f=this.d
t=this.c
if(t!=null)c=t
else if(j.length!==0||f!=null||u)c=""
d=this.e
if(!u)s=c!=null&&d.length!==0
else s=!0
if(s&&!C.c.a6(d,"/"))d="/"+d
g=P.kE(g,0,0,h)
return new P.bX(i,j,c,f,d,g,this.r)},
eB:function(a,b){return this.cN(a,null,null,null,null,null,null,b,null,null)},
gcJ:function(){var u,t
if(this.Q==null){u=this.f
t=P.h
this.shV(new P.e_(P.ls(u==null?"":u,C.m),[t,t]))}return this.Q},
geg:function(){return this.c!=null},
gej:function(){return this.f!=null},
geh:function(){return this.r!=null},
i:function(a){var u,t,s,r
u=this.y
if(u==null){u=this.a
t=u.length!==0?H.m(u)+":":""
s=this.c
r=s==null
if(!r||u==="file"){u=t+"//"
t=this.b
if(t.length!==0)u=u+H.m(t)+"@"
if(!r)u+=s
t=this.d
if(t!=null)u=u+":"+H.m(t)}else u=t
u+=this.e
t=this.f
if(t!=null)u=u+"?"+t
t=this.r
if(t!=null)u=u+"#"+t
u=u.charCodeAt(0)==0?u:u
this.y=u}return u},
t:function(a,b){var u,t
if(b==null)return!1
if(this===b)return!0
if(!!J.X(b).$ikA)if(this.a==b.gbH())if(this.c!=null===b.geg())if(this.b==b.geN())if(this.gcw(this)==b.gcw(b))if(this.gbA(this)==b.gbA(b))if(this.e===b.gew(b)){u=this.f
t=u==null
if(!t===b.gej()){if(t)u=""
if(u===b.gcI(b)){u=this.r
t=u==null
if(!t===b.geh()){if(t)u=""
u=u===b.gef()}else u=!1}else u=!1}else u=!1}else u=!1
else u=!1
else u=!1
else u=!1
else u=!1
else u=!1
else u=!1
return u},
gI:function(a){var u=this.z
if(u==null){u=C.c.gI(this.i(0))
this.z=u}return u},
shV:function(a){var u=P.h
this.Q=H.l(a,"$iD",[u,u],"$aD")},
$ikA:1,
gbH:function(){return this.a},
gew:function(a){return this.e}}
P.js.prototype={
$1:function(a){var u=this.b
if(typeof u!=="number")return u.n()
throw H.c(P.a3("Invalid port",this.a,u+1))},
$S:27}
P.jt.prototype={
$1:function(a){return P.jw(C.Z,a,C.m,!1)},
$S:42}
P.jv.prototype={
$2:function(a,b){var u,t
u=this.b
t=this.a
u.a+=t.a
t.a="&"
t=u.a+=H.m(P.jw(C.r,a,C.m,!0))
if(b!=null&&b.length!==0){u.a=t+"="
u.a+=H.m(P.jw(C.r,b,C.m,!0))}},
$S:18}
P.ju.prototype={
$2:function(a,b){var u,t
H.L(a)
if(b==null||typeof b==="string")this.a.$2(a,H.L(b))
else for(u=J.c8(H.m3(b,"$ij")),t=this.a;u.J();)t.$2(a,H.L(u.gS(u)))},
$S:48}
P.iq.prototype={
geL:function(){var u,t,s,r,q
u=this.c
if(u!=null)return u
u=this.b
if(0>=u.length)return H.e(u,0)
t=this.a
u=u[0]+1
s=C.c.el(t,"?",u)
r=t.length
if(s>=0){q=P.cV(t,s+1,r,C.p,!1)
r=s}else q=null
u=new P.iW(this,"data",null,null,null,P.cV(t,u,r,C.D,!1),q,null)
this.c=u
return u},
i:function(a){var u,t
u=this.b
if(0>=u.length)return H.e(u,0)
t=this.a
return u[0]===-1?"data:"+t:t}}
P.jE.prototype={
$1:function(a){return new Uint8Array(96)},
$S:46}
P.jD.prototype={
$2:function(a,b){var u=this.a
if(a>=u.length)return H.e(u,a)
u=u[a]
J.my(u,0,96,b)
return u},
$S:49}
P.jF.prototype={
$3:function(a,b,c){var u,t,s
for(u=b.length,t=0;t<u;++t){s=C.c.G(b,t)^96
if(s>=a.length)return H.e(a,s)
a[s]=c}}}
P.jG.prototype={
$3:function(a,b,c){var u,t,s
for(u=C.c.G(b,0),t=C.c.G(b,1);u<=t;++u){s=(u^96)>>>0
if(s>=a.length)return H.e(a,s)
a[s]=c}}}
P.jj.prototype={
geg:function(){return this.c>0},
gei:function(){var u,t
if(this.c>0){u=this.d
if(typeof u!=="number")return u.n()
t=this.e
if(typeof t!=="number")return H.u(t)
t=u+1<t
u=t}else u=!1
return u},
gej:function(){var u=this.f
if(typeof u!=="number")return u.V()
return u<this.r},
geh:function(){return this.r<this.a.length},
gdl:function(){return this.b===4&&C.c.a6(this.a,"http")},
gdm:function(){return this.b===5&&C.c.a6(this.a,"https")},
gbH:function(){var u,t
u=this.b
if(u<=0)return""
t=this.x
if(t!=null)return t
if(this.gdl()){this.x="http"
u="http"}else if(this.gdm()){this.x="https"
u="https"}else if(u===4&&C.c.a6(this.a,"file")){this.x="file"
u="file"}else if(u===7&&C.c.a6(this.a,"package")){this.x="package"
u="package"}else{u=C.c.u(this.a,0,u)
this.x=u}return u},
geN:function(){var u,t
u=this.c
t=this.b+3
return u>t?C.c.u(this.a,t,u-1):""},
gcw:function(a){var u=this.c
return u>0?C.c.u(this.a,u,this.d):""},
gbA:function(a){var u
if(this.gei()){u=this.d
if(typeof u!=="number")return u.n()
return P.f_(C.c.u(this.a,u+1,this.e),null,null)}if(this.gdl())return 80
if(this.gdm())return 443
return 0},
gew:function(a){return C.c.u(this.a,this.e,this.f)},
gcI:function(a){var u,t
u=this.f
t=this.r
if(typeof u!=="number")return u.V()
return u<t?C.c.u(this.a,u+1,t):""},
gef:function(){var u,t
u=this.r
t=this.a
return u<t.length?C.c.aE(t,u+1):""},
gcJ:function(){var u=this.f
if(typeof u!=="number")return u.V()
if(u>=this.r)return C.a_
u=P.h
return new P.e_(P.ls(this.gcI(this),C.m),[u,u])},
cN:function(a,b,c,d,e,f,g,h,i,j){var u,t,s
H.l(h,"$iD",[P.h,null],"$aD")
i=this.gbH()
u=i==="file"
t=this.c
j=t>0?C.c.u(this.a,this.b+3,t):""
f=this.gei()?this.gbA(this):null
t=this.c
if(t>0)c=C.c.u(this.a,t,this.d)
else if(j.length!==0||f!=null||u)c=""
t=this.a
d=C.c.u(t,this.e,this.f)
if(!u)s=c!=null&&d.length!==0
else s=!0
if(s&&!C.c.a6(d,"/"))d="/"+d
g=P.kE(g,0,0,h)
s=this.r
if(s<t.length)b=C.c.aE(t,s+1)
return new P.bX(i,j,c,f,d,g,b)},
eB:function(a,b){return this.cN(a,null,null,null,null,null,null,b,null,null)},
gI:function(a){var u=this.y
if(u==null){u=C.c.gI(this.a)
this.y=u}return u},
t:function(a,b){if(b==null)return!1
if(this===b)return!0
return!!J.X(b).$ikA&&this.a===b.i(0)},
i:function(a){return this.a},
$ikA:1}
P.iW.prototype={}
W.x.prototype={}
W.f0.prototype={
gk:function(a){return a.length}}
W.f2.prototype={
i:function(a){return String(a)}}
W.f3.prototype={
i:function(a){return String(a)}}
W.bG.prototype={$ibG:1}
W.d4.prototype={}
W.bH.prototype={
eS:function(a,b,c){var u=this.fR(a,b,P.nZ(c,null))
return u},
fR:function(a,b,c){return a.getContext(b,c)},
$ibH:1}
W.bt.prototype={
gk:function(a){return a.length}}
W.cc.prototype={$icc:1}
W.fk.prototype={
gk:function(a){return a.length}}
W.U.prototype={$iU:1}
W.cd.prototype={
gk:function(a){return a.length}}
W.fl.prototype={}
W.aV.prototype={}
W.aW.prototype={}
W.fm.prototype={
gk:function(a){return a.length}}
W.fn.prototype={
gk:function(a){return a.length}}
W.fp.prototype={
gk:function(a){return a.length}}
W.ce.prototype={$ice:1}
W.cf.prototype={
cT:function(a,b){return a.getElementById(b)}}
W.fq.prototype={
i:function(a){return String(a)}}
W.dc.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.V(b,a,null,null,null))
return a[b]},
l:function(a,b,c){H.l(c,"$ia8",[P.a0],"$aa8")
throw H.c(P.E("Cannot assign element of immutable List."))},
K:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$iH:1,
$aH:function(){return[[P.a8,P.a0]]},
$ay:function(){return[[P.a8,P.a0]]},
$ij:1,
$aj:function(){return[[P.a8,P.a0]]},
$ib:1,
$ab:function(){return[[P.a8,P.a0]]},
$aB:function(){return[[P.a8,P.a0]]}}
W.dd.prototype={
i:function(a){return"Rectangle ("+H.m(a.left)+", "+H.m(a.top)+") "+H.m(this.gaD(a))+" x "+H.m(this.gaB(a))},
t:function(a,b){var u
if(b==null)return!1
if(!H.cZ(b,"$ia8",[P.a0],"$aa8"))return!1
u=J.bm(b)
return a.left===u.gbz(b)&&a.top===u.gbC(b)&&this.gaD(a)===u.gaD(b)&&this.gaB(a)===u.gaB(b)},
gI:function(a){return W.lB(C.e.gI(a.left),C.e.gI(a.top),C.e.gI(this.gaD(a)),C.e.gI(this.gaB(a)))},
gdM:function(a){return a.bottom},
gaB:function(a){return a.height},
gbz:function(a){return a.left},
gbB:function(a){return a.right},
gbC:function(a){return a.top},
gaD:function(a){return a.width},
$ia8:1,
$aa8:function(){return[P.a0]}}
W.fr.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.V(b,a,null,null,null))
return a[b]},
l:function(a,b,c){H.L(c)
throw H.c(P.E("Cannot assign element of immutable List."))},
K:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$iH:1,
$aH:function(){return[P.h]},
$ay:function(){return[P.h]},
$ij:1,
$aj:function(){return[P.h]},
$ib:1,
$ab:function(){return[P.h]},
$aB:function(){return[P.h]}}
W.fs.prototype={
gk:function(a){return a.length}}
W.iU.prototype={
gk:function(a){return this.b.length},
j:function(a,b){var u=this.b
if(b<0||b>=u.length)return H.e(u,b)
return H.f(u[b],"$ia2")},
l:function(a,b,c){var u
H.f(c,"$ia2")
u=this.b
if(b<0||b>=u.length)return H.e(u,b)
J.kj(this.a,c,u[b])},
h:function(a,b){J.kV(this.a,b)
return b},
ga0:function(a){var u=this.ka(this)
return new J.at(u,u.length,0,[H.v(u,0)])},
$ay:function(){return[W.a2]},
$aj:function(){return[W.a2]},
$ab:function(){return[W.a2]}}
W.a2.prototype={
gck:function(a){return new W.iU(a,a.children)},
gdO:function(a){var u,t,s,r
u=a.clientLeft
t=a.clientTop
s=a.clientWidth
r=a.clientHeight
if(typeof s!=="number")return s.V()
if(s<0)s=-s*0
if(typeof r!=="number")return r.V()
if(r<0)r=-r*0
return new P.a8(u,t,s,r,[P.a0])},
i:function(a){return a.localName},
$ia2:1}
W.p.prototype={$ip:1}
W.i.prototype={
iT:function(a,b,c,d){H.n(c,{func:1,args:[W.p]})
if(c!=null)this.fs(a,b,c,!1)},
fs:function(a,b,c,d){return a.addEventListener(b,H.c0(H.n(c,{func:1,args:[W.p]}),1),!1)},
$ii:1}
W.ax.prototype={$iax:1}
W.ch.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.V(b,a,null,null,null))
return a[b]},
l:function(a,b,c){H.f(c,"$iax")
throw H.c(P.E("Cannot assign element of immutable List."))},
K:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$iH:1,
$aH:function(){return[W.ax]},
$ay:function(){return[W.ax]},
$ij:1,
$aj:function(){return[W.ax]},
$ib:1,
$ab:function(){return[W.ax]},
$ich:1,
$aB:function(){return[W.ax]}}
W.fB.prototype={
gk:function(a){return a.length}}
W.fF.prototype={
gk:function(a){return a.length}}
W.aG.prototype={$iaG:1}
W.dh.prototype={
i0:function(a,b,c,d){return a.replaceState(b,c,d)},
gk:function(a){return a.length}}
W.bO.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.V(b,a,null,null,null))
return a[b]},
l:function(a,b,c){H.f(c,"$iF")
throw H.c(P.E("Cannot assign element of immutable List."))},
K:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$iH:1,
$aH:function(){return[W.F]},
$ay:function(){return[W.F]},
$ij:1,
$aj:function(){return[W.F]},
$ib:1,
$ab:function(){return[W.F]},
$ibO:1,
$aB:function(){return[W.F]}}
W.di.prototype={}
W.ck.prototype={$ick:1}
W.cl.prototype={$icl:1}
W.b_.prototype={$ib_:1}
W.dn.prototype={}
W.fW.prototype={
i:function(a){return String(a)}}
W.h9.prototype={
gk:function(a){return a.length}}
W.ha.prototype={
j:function(a,b){return P.bl(a.get(H.L(b)))},
L:function(a,b){var u,t
H.n(b,{func:1,ret:-1,args:[P.h,,]})
u=a.entries()
for(;!0;){t=u.next()
if(t.done)return
b.$2(t.value[0],P.bl(t.value[1]))}},
gaq:function(a){var u=H.d([],[P.h])
this.L(a,new W.hb(u))
return u},
gk:function(a){return a.size},
l:function(a,b,c){throw H.c(P.E("Not supported"))},
$aag:function(){return[P.h,null]},
$iD:1,
$aD:function(){return[P.h,null]}}
W.hb.prototype={
$2:function(a,b){return C.a.h(this.a,a)},
$S:8}
W.hc.prototype={
j:function(a,b){return P.bl(a.get(H.L(b)))},
L:function(a,b){var u,t
H.n(b,{func:1,ret:-1,args:[P.h,,]})
u=a.entries()
for(;!0;){t=u.next()
if(t.done)return
b.$2(t.value[0],P.bl(t.value[1]))}},
gaq:function(a){var u=H.d([],[P.h])
this.L(a,new W.hd(u))
return u},
gk:function(a){return a.size},
l:function(a,b,c){throw H.c(P.E("Not supported"))},
$aag:function(){return[P.h,null]},
$iD:1,
$aD:function(){return[P.h,null]}}
W.hd.prototype={
$2:function(a,b){return C.a.h(this.a,a)},
$S:8}
W.aJ.prototype={$iaJ:1}
W.he.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.V(b,a,null,null,null))
return a[b]},
l:function(a,b,c){H.f(c,"$iaJ")
throw H.c(P.E("Cannot assign element of immutable List."))},
K:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$iH:1,
$aH:function(){return[W.aJ]},
$ay:function(){return[W.aJ]},
$ij:1,
$aj:function(){return[W.aJ]},
$ib:1,
$ab:function(){return[W.aJ]},
$aB:function(){return[W.aJ]}}
W.ad.prototype={$iad:1}
W.iT.prototype={
l:function(a,b,c){var u,t
H.f(c,"$iF")
u=this.a
t=u.childNodes
if(b<0||b>=t.length)return H.e(t,b)
J.kj(u,c,t[b])},
ga0:function(a){var u=this.a.childNodes
return new W.df(u,u.length,-1,[H.bD(C.a0,u,"B",0)])},
gk:function(a){return this.a.childNodes.length},
j:function(a,b){var u=this.a.childNodes
if(b<0||b>=u.length)return H.e(u,b)
return u[b]},
$ay:function(){return[W.F]},
$aj:function(){return[W.F]},
$ab:function(){return[W.F]}}
W.F.prototype={
k_:function(a,b){var u,t
try{u=a.parentNode
J.kj(u,b,a)}catch(t){H.aD(t)}return a},
i:function(a){var u=a.nodeValue
return u==null?this.f0(a):u},
X:function(a,b){return a.appendChild(b)},
i_:function(a,b,c){return a.replaceChild(b,c)},
$iF:1}
W.cr.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.V(b,a,null,null,null))
return a[b]},
l:function(a,b,c){H.f(c,"$iF")
throw H.c(P.E("Cannot assign element of immutable List."))},
K:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$iH:1,
$aH:function(){return[W.F]},
$ay:function(){return[W.F]},
$ij:1,
$aj:function(){return[W.F]},
$ib:1,
$ab:function(){return[W.F]},
$aB:function(){return[W.F]}}
W.aK.prototype={$iaK:1,
gk:function(a){return a.length}}
W.hr.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.V(b,a,null,null,null))
return a[b]},
l:function(a,b,c){H.f(c,"$iaK")
throw H.c(P.E("Cannot assign element of immutable List."))},
K:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$iH:1,
$aH:function(){return[W.aK]},
$ay:function(){return[W.aK]},
$ij:1,
$aj:function(){return[W.aK]},
$ib:1,
$ab:function(){return[W.aK]},
$aB:function(){return[W.aK]}}
W.hB.prototype={
j:function(a,b){return P.bl(a.get(H.L(b)))},
L:function(a,b){var u,t
H.n(b,{func:1,ret:-1,args:[P.h,,]})
u=a.entries()
for(;!0;){t=u.next()
if(t.done)return
b.$2(t.value[0],P.bl(t.value[1]))}},
gaq:function(a){var u=H.d([],[P.h])
this.L(a,new W.hC(u))
return u},
gk:function(a){return a.size},
l:function(a,b,c){throw H.c(P.E("Not supported"))},
$aag:function(){return[P.h,null]},
$iD:1,
$aD:function(){return[P.h,null]}}
W.hC.prototype={
$2:function(a,b){return C.a.h(this.a,a)},
$S:8}
W.hE.prototype={
gk:function(a){return a.length}}
W.aM.prototype={$iaM:1}
W.hN.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.V(b,a,null,null,null))
return a[b]},
l:function(a,b,c){H.f(c,"$iaM")
throw H.c(P.E("Cannot assign element of immutable List."))},
K:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$iH:1,
$aH:function(){return[W.aM]},
$ay:function(){return[W.aM]},
$ij:1,
$aj:function(){return[W.aM]},
$ib:1,
$ab:function(){return[W.aM]},
$aB:function(){return[W.aM]}}
W.aN.prototype={$iaN:1}
W.hO.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.V(b,a,null,null,null))
return a[b]},
l:function(a,b,c){H.f(c,"$iaN")
throw H.c(P.E("Cannot assign element of immutable List."))},
K:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$iH:1,
$aH:function(){return[W.aN]},
$ay:function(){return[W.aN]},
$ij:1,
$aj:function(){return[W.aN]},
$ib:1,
$ab:function(){return[W.aN]},
$aB:function(){return[W.aN]}}
W.aO.prototype={$iaO:1,
gk:function(a){return a.length}}
W.hR.prototype={
j:function(a,b){return this.di(a,H.L(b))},
l:function(a,b,c){this.i5(a,b,c)},
L:function(a,b){var u,t
H.n(b,{func:1,ret:-1,args:[P.h,P.h]})
for(u=0;!0;++u){t=this.fV(a,u)
if(t==null)return
b.$2(t,this.di(a,t))}},
gaq:function(a){var u=H.d([],[P.h])
this.L(a,new W.hS(u))
return u},
gk:function(a){return a.length},
di:function(a,b){return a.getItem(b)},
fV:function(a,b){return a.key(b)},
i5:function(a,b,c){return a.setItem(b,c)},
$aag:function(){return[P.h,P.h]},
$iD:1,
$aD:function(){return[P.h,P.h]}}
W.hS.prototype={
$2:function(a,b){return C.a.h(this.a,a)},
$S:18}
W.ay.prototype={$iay:1}
W.b4.prototype={$ib4:1}
W.dN.prototype={
fT:function(a,b){return a.insertRow(b)}}
W.dO.prototype={
dk:function(a,b){return a.insertCell(b)}}
W.aP.prototype={$iaP:1}
W.az.prototype={$iaz:1}
W.hZ.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.V(b,a,null,null,null))
return a[b]},
l:function(a,b,c){H.f(c,"$iaz")
throw H.c(P.E("Cannot assign element of immutable List."))},
K:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$iH:1,
$aH:function(){return[W.az]},
$ay:function(){return[W.az]},
$ij:1,
$aj:function(){return[W.az]},
$ib:1,
$ab:function(){return[W.az]},
$aB:function(){return[W.az]}}
W.i_.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.V(b,a,null,null,null))
return a[b]},
l:function(a,b,c){H.f(c,"$iaP")
throw H.c(P.E("Cannot assign element of immutable List."))},
K:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$iH:1,
$aH:function(){return[W.aP]},
$ay:function(){return[W.aP]},
$ij:1,
$aj:function(){return[W.aP]},
$ib:1,
$ab:function(){return[W.aP]},
$aB:function(){return[W.aP]}}
W.i2.prototype={
gk:function(a){return a.length}}
W.aQ.prototype={$iaQ:1}
W.aR.prototype={$iaR:1}
W.i5.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.V(b,a,null,null,null))
return a[b]},
l:function(a,b,c){H.f(c,"$iaQ")
throw H.c(P.E("Cannot assign element of immutable List."))},
K:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$iH:1,
$aH:function(){return[W.aQ]},
$ay:function(){return[W.aQ]},
$ij:1,
$aj:function(){return[W.aQ]},
$ib:1,
$ab:function(){return[W.aQ]},
$aB:function(){return[W.aQ]}}
W.i6.prototype={
gk:function(a){return a.length}}
W.bA.prototype={}
W.iv.prototype={
i:function(a){return String(a)}}
W.iL.prototype={
gk:function(a){return a.length}}
W.b9.prototype={
gjh:function(a){if(a.deltaY!==undefined)return a.deltaY
throw H.c(P.E("deltaY is not supported"))},
gjg:function(a){if(a.deltaX!==undefined)return a.deltaX
throw H.c(P.E("deltaX is not supported"))},
$ib9:1}
W.cJ.prototype={
i1:function(a,b){return a.requestAnimationFrame(H.c0(H.n(b,{func:1,ret:-1,args:[P.a0]}),1))},
fJ:function(a){if(!!(a.requestAnimationFrame&&a.cancelAnimationFrame))return;(function(b){var u=['ms','moz','webkit','o']
for(var t=0;t<u.length&&!b.requestAnimationFrame;++t){b.requestAnimationFrame=b[u[t]+'RequestAnimationFrame']
b.cancelAnimationFrame=b[u[t]+'CancelAnimationFrame']||b[u[t]+'CancelRequestAnimationFrame']}if(b.requestAnimationFrame&&b.cancelAnimationFrame)return
b.requestAnimationFrame=function(c){return window.setTimeout(function(){c(Date.now())},16)}
b.cancelAnimationFrame=function(c){clearTimeout(c)}})(a)}}
W.iV.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.V(b,a,null,null,null))
return a[b]},
l:function(a,b,c){H.f(c,"$iU")
throw H.c(P.E("Cannot assign element of immutable List."))},
K:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$iH:1,
$aH:function(){return[W.U]},
$ay:function(){return[W.U]},
$ij:1,
$aj:function(){return[W.U]},
$ib:1,
$ab:function(){return[W.U]},
$aB:function(){return[W.U]}}
W.e9.prototype={
i:function(a){return"Rectangle ("+H.m(a.left)+", "+H.m(a.top)+") "+H.m(a.width)+" x "+H.m(a.height)},
t:function(a,b){var u
if(b==null)return!1
if(!H.cZ(b,"$ia8",[P.a0],"$aa8"))return!1
u=J.bm(b)
return a.left===u.gbz(b)&&a.top===u.gbC(b)&&a.width===u.gaD(b)&&a.height===u.gaB(b)},
gI:function(a){return W.lB(C.e.gI(a.left),C.e.gI(a.top),C.e.gI(a.width),C.e.gI(a.height))},
gaB:function(a){return a.height},
gaD:function(a){return a.width}}
W.j8.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.V(b,a,null,null,null))
return a[b]},
l:function(a,b,c){H.f(c,"$iaG")
throw H.c(P.E("Cannot assign element of immutable List."))},
K:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$iH:1,
$aH:function(){return[W.aG]},
$ay:function(){return[W.aG]},
$ij:1,
$aj:function(){return[W.aG]},
$ib:1,
$ab:function(){return[W.aG]},
$aB:function(){return[W.aG]}}
W.eq.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.V(b,a,null,null,null))
return a[b]},
l:function(a,b,c){H.f(c,"$iF")
throw H.c(P.E("Cannot assign element of immutable List."))},
K:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$iH:1,
$aH:function(){return[W.F]},
$ay:function(){return[W.F]},
$ij:1,
$aj:function(){return[W.F]},
$ib:1,
$ab:function(){return[W.F]},
$aB:function(){return[W.F]}}
W.jk.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.V(b,a,null,null,null))
return a[b]},
l:function(a,b,c){H.f(c,"$iaO")
throw H.c(P.E("Cannot assign element of immutable List."))},
K:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$iH:1,
$aH:function(){return[W.aO]},
$ay:function(){return[W.aO]},
$ij:1,
$aj:function(){return[W.aO]},
$ib:1,
$ab:function(){return[W.aO]},
$aB:function(){return[W.aO]}}
W.jo.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.V(b,a,null,null,null))
return a[b]},
l:function(a,b,c){H.f(c,"$iay")
throw H.c(P.E("Cannot assign element of immutable List."))},
K:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$iH:1,
$aH:function(){return[W.ay]},
$ay:function(){return[W.ay]},
$ij:1,
$aj:function(){return[W.ay]},
$ib:1,
$ab:function(){return[W.ay]},
$aB:function(){return[W.ay]}}
W.iX.prototype={}
W.kD.prototype={}
W.iY.prototype={}
W.iZ.prototype={
$1:function(a){return this.a.$1(H.f(a,"$ip"))},
$S:39}
W.B.prototype={
ga0:function(a){return new W.df(a,this.gk(a),-1,[H.bD(this,a,"B",0)])}}
W.df.prototype={
J:function(){var u,t
u=this.c+1
t=this.b
if(u<t){this.sdj(J.kU(this.a,u))
this.c=u
return!0}this.sdj(null)
this.c=t
return!1},
gS:function(a){return this.d},
sdj:function(a){this.d=H.z(a,H.v(this,0))},
$iaZ:1}
W.e8.prototype={}
W.ea.prototype={}
W.eb.prototype={}
W.ec.prototype={}
W.ed.prototype={}
W.ef.prototype={}
W.eg.prototype={}
W.eh.prototype={}
W.ei.prototype={}
W.em.prototype={}
W.en.prototype={}
W.eo.prototype={}
W.ep.prototype={}
W.er.prototype={}
W.es.prototype={}
W.ev.prototype={}
W.ew.prototype={}
W.ex.prototype={}
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
P.jl.prototype={
ec:function(a){var u,t,s
u=this.a
t=u.length
for(s=0;s<t;++s)if(u[s]===a)return s
C.a.h(u,a)
C.a.h(this.b,null)
return t},
cR:function(a){var u,t,s,r,q
u={}
if(a==null)return a
if(typeof a==="boolean")return a
if(typeof a==="number")return a
if(typeof a==="string")return a
t=J.X(a)
if(!!t.$iaj)return new Date(a.a)
if(!!t.$inc)throw H.c(P.im("structured clone of RegExp"))
if(!!t.$iax)return a
if(!!t.$ibG)return a
if(!!t.$ich)return a
if(!!t.$ick)return a
if(!!t.$ico||!!t.$ibx)return a
if(!!t.$iD){s=this.ec(a)
r=this.b
if(s>=r.length)return H.e(r,s)
q=r[s]
u.a=q
if(q!=null)return q
q={}
u.a=q
C.a.l(r,s,q)
t.L(a,new P.jn(u,this))
return u.a}if(!!t.$ib){s=this.ec(a)
u=this.b
if(s>=u.length)return H.e(u,s)
q=u[s]
if(q!=null)return q
return this.jb(a,s)}throw H.c(P.im("structured clone of other type"))},
jb:function(a,b){var u,t,s,r
u=J.c3(a)
t=u.gk(a)
s=new Array(t)
C.a.l(this.b,b,s)
for(r=0;r<t;++r)C.a.l(s,r,this.cR(u.j(a,r)))
return s}}
P.jn.prototype={
$2:function(a,b){this.a.a[a]=this.b.cR(b)},
$S:7}
P.jK.prototype={
$2:function(a,b){this.a[a]=b},
$S:7}
P.jm.prototype={}
P.fC.prototype={
gbf:function(){var u,t,s
u=this.b
t=H.aw(u,"y",0)
s=W.a2
return new H.h0(new H.iN(u,H.n(new P.fD(),{func:1,ret:P.ac,args:[t]}),[t]),H.n(new P.fE(),{func:1,ret:s,args:[t]}),[t,s])},
l:function(a,b,c){var u
H.f(c,"$ia2")
u=this.gbf()
J.mz(u.b.$1(J.kk(u.a,b)),c)},
h:function(a,b){J.kV(this.b.a,b)},
gk:function(a){return J.aE(this.gbf().a)},
j:function(a,b){var u=this.gbf()
return u.b.$1(J.kk(u.a,b))},
ga0:function(a){var u=P.mW(this.gbf(),!1,W.a2)
return new J.at(u,u.length,0,[H.v(u,0)])},
$ay:function(){return[W.a2]},
$aj:function(){return[W.a2]},
$ab:function(){return[W.a2]}}
P.fD.prototype={
$1:function(a){return!!J.X(H.f(a,"$iF")).$ia2},
$S:38}
P.fE.prototype={
$1:function(a){return H.k(H.f(a,"$iF"),"$ia2")},
$S:33}
P.jd.prototype={
gbB:function(a){var u=this.a
if(typeof u!=="number")return u.n()
return H.z(u+this.c,H.v(this,0))},
gdM:function(a){var u=this.b
if(typeof u!=="number")return u.n()
return H.z(u+this.d,H.v(this,0))},
i:function(a){return"Rectangle ("+H.m(this.a)+", "+H.m(this.b)+") "+this.c+" x "+this.d},
t:function(a,b){var u,t,s,r
if(b==null)return!1
if(H.cZ(b,"$ia8",[P.a0],"$aa8")){u=this.a
t=J.bm(b)
if(u==t.gbz(b)){s=this.b
if(s==t.gbC(b)){if(typeof u!=="number")return u.n()
r=H.v(this,0)
if(H.z(u+this.c,r)===t.gbB(b)){if(typeof s!=="number")return s.n()
u=H.z(s+this.d,r)===t.gdM(b)}else u=!1}else u=!1}else u=!1}else u=!1
return u},
gI:function(a){var u,t,s,r,q
u=this.a
t=J.d2(u)
s=this.b
r=J.d2(s)
if(typeof u!=="number")return u.n()
q=H.v(this,0)
u=C.f.gI(H.z(u+this.c,q))
if(typeof s!=="number")return s.n()
q=C.f.gI(H.z(s+this.d,q))
return P.nw(P.ja(P.ja(P.ja(P.ja(0,t),r),u),q))}}
P.a8.prototype={
gbz:function(a){return this.a},
gbC:function(a){return this.b},
gaD:function(a){return this.c},
gaB:function(a){return this.d}}
P.b0.prototype={$ib0:1}
P.fP.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.V(b,a,null,null,null))
return this.as(a,b)},
l:function(a,b,c){H.f(c,"$ib0")
throw H.c(P.E("Cannot assign element of immutable List."))},
K:function(a,b){return this.j(a,b)},
as:function(a,b){return a.getItem(b)},
$ay:function(){return[P.b0]},
$ij:1,
$aj:function(){return[P.b0]},
$ib:1,
$ab:function(){return[P.b0]},
$aB:function(){return[P.b0]}}
P.b3.prototype={$ib3:1}
P.hn.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.V(b,a,null,null,null))
return this.as(a,b)},
l:function(a,b,c){H.f(c,"$ib3")
throw H.c(P.E("Cannot assign element of immutable List."))},
K:function(a,b){return this.j(a,b)},
as:function(a,b){return a.getItem(b)},
$ay:function(){return[P.b3]},
$ij:1,
$aj:function(){return[P.b3]},
$ib:1,
$ab:function(){return[P.b3]},
$aB:function(){return[P.b3]}}
P.ht.prototype={
gk:function(a){return a.length}}
P.hX.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.V(b,a,null,null,null))
return this.as(a,b)},
l:function(a,b,c){H.L(c)
throw H.c(P.E("Cannot assign element of immutable List."))},
K:function(a,b){return this.j(a,b)},
as:function(a,b){return a.getItem(b)},
$ay:function(){return[P.h]},
$ij:1,
$aj:function(){return[P.h]},
$ib:1,
$ab:function(){return[P.h]},
$aB:function(){return[P.h]}}
P.r.prototype={
gck:function(a){return new P.fC(a,new W.iT(a))}}
P.b6.prototype={$ib6:1}
P.i7.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.V(b,a,null,null,null))
return this.as(a,b)},
l:function(a,b,c){H.f(c,"$ib6")
throw H.c(P.E("Cannot assign element of immutable List."))},
K:function(a,b){return this.j(a,b)},
as:function(a,b){return a.getItem(b)},
$ay:function(){return[P.b6]},
$ij:1,
$aj:function(){return[P.b6]},
$ib:1,
$ab:function(){return[P.b6]},
$aB:function(){return[P.b6]}}
P.ej.prototype={}
P.ek.prototype={}
P.et.prototype={}
P.eu.prototype={}
P.eE.prototype={}
P.eF.prototype={}
P.eL.prototype={}
P.eM.prototype={}
P.Q.prototype={$ij:1,
$aj:function(){return[P.o]},
$ib:1,
$ab:function(){return[P.o]}}
P.f6.prototype={
gk:function(a){return a.length}}
P.f7.prototype={
j:function(a,b){return P.bl(a.get(H.L(b)))},
L:function(a,b){var u,t
H.n(b,{func:1,ret:-1,args:[P.h,,]})
u=a.entries()
for(;!0;){t=u.next()
if(t.done)return
b.$2(t.value[0],P.bl(t.value[1]))}},
gaq:function(a){var u=H.d([],[P.h])
this.L(a,new P.f8(u))
return u},
gk:function(a){return a.size},
l:function(a,b,c){throw H.c(P.E("Not supported"))},
$aag:function(){return[P.h,null]},
$iD:1,
$aD:function(){return[P.h,null]}}
P.f8.prototype={
$2:function(a,b){return C.a.h(this.a,a)},
$S:8}
P.f9.prototype={
gk:function(a){return a.length}}
P.bF.prototype={}
P.ho.prototype={
gk:function(a){return a.length}}
P.e7.prototype={}
P.d5.prototype={$id5:1}
P.dg.prototype={$idg:1}
P.dD.prototype={$idD:1}
P.bU.prototype={
dK:function(a,b,c){return a.attachShader(b,c)},
an:function(a,b,c){return a.bindBuffer(b,c)},
j1:function(a,b,c){return a.bindFramebuffer(b,c)},
j2:function(a,b,c){return a.blendFunc(b,c)},
dN:function(a,b,c,d){return a.bufferData(b,c,d)},
j5:function(a,b){return a.clear(b)},
j6:function(a,b,c,d,e){return a.clearColor(b,c,d,e)},
j7:function(a,b){return a.clearDepth(b)},
j9:function(a,b){return a.compileShader(b)},
jc:function(a,b){return a.createShader(b)},
je:function(a,b){return a.deleteProgram(b)},
jf:function(a,b){return a.deleteShader(b)},
ji:function(a,b){return a.depthFunc(b)},
jj:function(a,b){return a.disable(b)},
dP:function(a,b){return a.disableVertexAttribArray(b)},
jl:function(a,b,c,d,e){return a.drawElements(b,c,d,e)},
cp:function(a,b){return a.enable(b)},
dR:function(a,b){return a.enableVertexAttribArray(b)},
eP:function(a,b,c){return a.getActiveAttrib(b,c)},
eQ:function(a,b,c){return a.getActiveUniform(b,c)},
eR:function(a,b,c){return a.getAttribLocation(b,c)},
cU:function(a,b){return a.getParameter(b)},
eT:function(a,b){return a.getProgramInfoLog(b)},
bF:function(a,b,c){return a.getProgramParameter(b,c)},
eU:function(a,b){return a.getShaderInfoLog(b)},
eV:function(a,b,c){return a.getShaderParameter(b,c)},
eW:function(a,b,c){return a.getUniformLocation(b,c)},
jB:function(a,b){return a.linkProgram(b)},
eZ:function(a,b,c){return a.shaderSource(b,c)},
O:function(a,b,c){return a.uniform1f(b,c)},
T:function(a,b,c){return a.uniform1i(b,c)},
w:function(a,b,c,d,e){return a.uniform3f(b,c,d,e)},
eJ:function(a,b,c,d){return a.uniformMatrix3fv(b,!1,d)},
eK:function(a,b,c,d){return a.uniformMatrix4fv(b,!1,d)},
eM:function(a,b){return a.useProgram(b)},
kd:function(a,b,c,d,e,f,g){return a.vertexAttribPointer(b,c,d,!1,f,g)},
ke:function(a,b,c,d,e){return a.viewport(b,c,d,e)},
$ibU:1}
P.dH.prototype={$idH:1}
P.dY.prototype={$idY:1}
P.hP.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.V(b,a,null,null,null))
return P.bl(this.fU(a,b))},
l:function(a,b,c){H.f(c,"$iD")
throw H.c(P.E("Cannot assign element of immutable List."))},
K:function(a,b){return this.j(a,b)},
fU:function(a,b){return a.item(b)},
$ay:function(){return[[P.D,,,]]},
$ij:1,
$aj:function(){return[[P.D,,,]]},
$ib:1,
$ab:function(){return[[P.D,,,]]},
$aB:function(){return[[P.D,,,]]}}
P.eA.prototype={}
P.eB.prototype={}
O.a_.prototype={
bJ:function(a){this.sfZ(H.d([],[a]))
this.sdv(null)
this.sdr(null)
this.sdw(null)},
cW:function(a,b,c){var u=H.aw(this,"a_",0)
H.n(b,{func:1,ret:P.ac,args:[[P.j,u]]})
u={func:1,ret:-1,args:[P.o,[P.j,u]]}
H.n(a,u)
H.n(c,u)
this.sdv(b)
this.sdr(a)
this.sdw(c)},
bc:function(a,b){return this.cW(a,null,b)},
du:function(a){var u
H.l(a,"$ij",[H.aw(this,"a_",0)],"$aj")
u=this.b
if(u!=null)return u.$1(a)
return!0},
dq:function(a,b){var u
H.l(b,"$ij",[H.aw(this,"a_",0)],"$aj")
u=this.c
if(u!=null)u.$2(a,b)},
gk:function(a){return this.a.length},
ga0:function(a){var u=this.a
return new J.at(u,u.length,0,[H.v(u,0)])},
K:function(a,b){var u=this.a
if(b<0||b>=u.length)return H.e(u,b)
return u[b]},
h:function(a,b){var u,t,s
u=H.aw(this,"a_",0)
H.z(b,u)
u=[u]
if(this.du(H.d([b],u))){t=this.a
s=t.length
C.a.h(t,b)
this.dq(s,H.d([b],u))}},
l:function(a,b,c){var u,t,s,r
u=H.aw(this,"a_",0)
H.z(c,u)
t=this.a
if(b>=t.length)return H.e(t,b)
s=t[b]
if(!J.R(s,c)&&this.du(H.d([c],[u]))){C.a.l(this.a,b,c)
t=[u]
u=H.l(H.d([s],t),"$ij",[u],"$aj")
r=this.d
if(r!=null)r.$2(b,u)
this.dq(b,H.d([c],t))}},
sfZ:function(a){this.a=H.l(a,"$ib",[H.aw(this,"a_",0)],"$ab")},
sdv:function(a){this.b=H.n(a,{func:1,ret:P.ac,args:[[P.j,H.aw(this,"a_",0)]]})},
sdr:function(a){this.c=H.n(a,{func:1,ret:-1,args:[P.o,[P.j,H.aw(this,"a_",0)]]})},
sdw:function(a){this.d=H.n(a,{func:1,ret:-1,args:[P.o,[P.j,H.aw(this,"a_",0)]]})},
$ij:1}
O.cm.prototype={
gk:function(a){return this.a.length},
gB:function(){var u=this.b
if(u==null){u=D.S()
this.b=u}return u},
fa:function(a){var u=this.b
if(u!=null)u.H(a)},
aF:function(){return this.fa(null)},
ga_:function(a){var u=this.a
if(u.length>0)return C.a.gaC(u)
else return V.ap()},
ez:function(a){var u=this.a
if(a==null)C.a.h(u,V.ap())
else C.a.h(u,a)
this.aF()},
cH:function(){var u=this.a
if(u.length>0){u.pop()
this.aF()}},
sbQ:function(a){this.a=H.l(a,"$ib",[V.ak],"$ab")}}
E.fc.prototype={}
E.ao.prototype={
scX:function(a,b){var u,t,s
u=this.c
if(u!=b){this.c=b
this.d=b
this.e=null
if(u!=null)u.gB().M(0,this.geu())
t=this.c
if(t!=null)t.gB().h(0,this.geu())
s=new D.K("shape",u,this.c,this,[F.bV])
s.b=!0
this.ag(s)}},
sb3:function(a){var u,t
if(!J.R(this.r,a)){u=this.r
if(u!=null)u.gB().M(0,this.ger())
if(a!=null)a.gB().h(0,this.ger())
this.r=a
t=new D.K("mover",u,a,this,[U.a9])
t.b=!0
this.ag(t)}},
ar:function(a,b){var u,t,s,r
u=this.r
t=u!=null?u.a:null
if(!J.R(t,this.x)){s=this.x
this.x=t
r=new D.K("matrix",s,t,this,[V.ak])
r.b=!0
this.ag(r)}for(u=this.y.a,u=new J.at(u,u.length,0,[H.v(u,0)]);u.J();)u.d.ar(0,b)},
aQ:function(a){var u,t,s
u=a.dx
t=this.x
u.toString
if(t==null)C.a.h(u.a,u.ga_(u))
else C.a.h(u.a,t.m(0,u.ga_(u)))
u.aF()
a.eA(this.f)
u=a.dy
s=(u&&C.a).gaC(u)
if(s!=null&&this.d!=null)s.jZ(a,this)
for(u=this.y.a,u=new J.at(u,u.length,0,[H.v(u,0)]);u.J();)u.d.aQ(a)
a.ey()
a.dx.cH()},
gB:function(){var u=this.z
if(u==null){u=D.S()
this.z=u}return u},
ag:function(a){var u=this.z
if(u!=null)u.H(a)},
a1:function(){return this.ag(null)},
ev:function(a){H.f(a,"$iA")
this.e=null
this.ag(a)},
jM:function(){return this.ev(null)},
es:function(a){this.ag(H.f(a,"$iA"))},
jL:function(){return this.es(null)},
eq:function(a){this.ag(H.f(a,"$iA"))},
jI:function(){return this.eq(null)},
jH:function(a,b){var u,t,s,r,q,p,o
H.l(b,"$ij",[E.ao],"$aj")
for(u=b.length,t=this.gep(),s={func:1,ret:-1,args:[D.A]},r=[s],q=0;q<b.length;b.length===u||(0,H.C)(b),++q){p=b[q]
if(p!=null){o=p.z
if(o==null){o=new D.aY()
o.sa4(null)
o.say(null)
o.c=null
o.d=0
p.z=o}H.n(t,s)
if(o.a==null)o.sa4(H.d([],r))
o=o.a;(o&&C.a).h(o,t)}}this.a1()},
jK:function(a,b){var u,t,s,r,q
H.l(b,"$ij",[E.ao],"$aj")
for(u=b.length,t=this.gep(),s=0;s<b.length;b.length===u||(0,H.C)(b),++s){r=b[s]
if(r!=null){q=r.z
if(q==null){q=new D.aY()
q.sa4(null)
q.say(null)
q.c=null
q.d=0
r.z=q}q.M(0,t)}}this.a1()},
i:function(a){var u,t
u=this.a
t=u.length
if(t<=0)return"Unnamed entity"
return u},
sfB:function(a,b){this.y=H.l(b,"$ia_",[E.ao],"$aa_")},
$ibi:1}
E.hx.prototype={
f6:function(a,b){var u,t
this.c=512
this.d=512
this.e=0
u=new P.aj(Date.now(),!1)
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
u.sbQ(H.d([],t))
u.b=null
u.gB().h(0,new E.hy(this))
this.cy=u
u=new O.cm()
u.sbQ(H.d([],t))
u.b=null
u.gB().h(0,new E.hz(this))
this.db=u
u=new O.cm()
u.sbQ(H.d([],t))
u.b=null
u.gB().h(0,new E.hA(this))
this.dx=u
this.sih(H.d([],[O.bW]))
u=this.dy;(u&&C.a).h(u,null)
this.sib(new H.aI([P.h,A.cv]))},
gjV:function(){var u,t
u=this.z
if(u==null){u=this.cy
u=u.ga_(u)
t=this.db
t=u.m(0,t.ga_(t))
this.z=t
u=t}return u},
eA:function(a){var u,t
u=this.dy
t=a==null?(u&&C.a).gaC(u):a;(u&&C.a).h(u,t)},
ey:function(){var u=this.dy
if(u.length>1)u.pop()},
sih:function(a){this.dy=H.l(a,"$ib",[O.bW],"$ab")},
sib:function(a){this.fr=H.l(a,"$iD",[P.h,A.cv],"$aD")}}
E.hy.prototype={
$1:function(a){var u
H.f(a,"$iA")
u=this.a
u.z=null
u.ch=null},
$S:10}
E.hz.prototype={
$1:function(a){var u
H.f(a,"$iA")
u=this.a
u.z=null
u.Q=null
u.ch=null
u.cx=null},
$S:10}
E.hA.prototype={
$1:function(a){var u
H.f(a,"$iA")
u=this.a
u.ch=null
u.cx=null},
$S:10}
E.dL.prototype={}
E.dU.prototype={
d1:function(a){H.f(a,"$iA")
this.eC()},
d0:function(){return this.d1(null)},
gjv:function(){var u,t,s
u=Date.now()
t=C.f.a2(P.l2(0,0,0,u-this.cx.a,0,0).a,1000)/1000
if(t<=0)return 0
s=this.cy
this.cy=0
this.cx=new P.aj(u,!1)
return s/t},
dB:function(){var u,t,s,r
u=window.devicePixelRatio
t=this.b.clientWidth
if(typeof t!=="number")return t.m()
if(typeof u!=="number")return H.u(u)
s=C.e.ed(t*u)
t=this.b.clientHeight
if(typeof t!=="number")return t.m()
r=C.e.ed(t*u)
t=this.b
if(t.width!==s||t.height!==r){t.width=s
t.height=r
P.lm(C.u,this.gk0())}},
eC:function(){var u,t
if(!this.ch){this.ch=!0
u=window
t=H.n(new E.i1(this),{func:1,ret:-1,args:[P.a0]})
C.H.fJ(u)
C.H.i1(u,W.lR(t,P.a0))}},
jY:function(){var u,t,s,r,q
try{++this.cy
this.ch=!1
this.dB()
if(this.d!=null){s=this.e;++s.e
s.r=s.x
r=Date.now()
s.x=new P.aj(r,!1)
s.y=P.l2(0,0,0,r-s.r.a,0,0).a*0.000001
r=s.cy
C.a.sk(r.a,0)
r.aF()
r=s.db
C.a.sk(r.a,0)
r.aF()
r=s.dx
C.a.sk(r.a,0)
r.aF()
r=s.dy;(r&&C.a).sk(r,0)
s=s.dy;(s&&C.a).h(s,null)
this.d.aQ(this.e)}}catch(q){u=H.aD(q)
t=H.c4(q)
P.kQ("Error: "+H.m(u))
P.kQ("Stack: "+H.m(t))
throw H.c(u)}}}
E.i1.prototype={
$1:function(a){var u
H.oi(a)
u=this.a
if(u.ch){u.ch=!1
u.jY()}},
$S:29}
Z.e5.prototype={$ior:1}
Z.d6.prototype={
bi:function(a){var u,t,s
try{t=a.a
C.b.dR(t,this.e)
C.b.kd(t,this.e,this.b,5126,!1,this.d,this.c)}catch(s){u=H.aD(s)
t=P.w('Failed to bind buffer attribute "'+this.a.i(0)+'": '+H.m(u))
throw H.c(t)}},
i:function(a){return"["+this.a.i(0)+", Size: "+this.b+", Offset: "+this.c+", Stride: "+this.d+", Attr: "+H.m(this.e)+"]"}}
Z.iM.prototype={$ios:1}
Z.d7.prototype={
aO:function(a){var u,t,s,r
for(u=this.c,t=u.length,s=0;s<t;++s){r=u[s]
if((r.a.a&a.a)!==0)return r}return},
bi:function(a){var u,t
u=this.a
C.b.an(a.a,u.a,u.b)
for(u=this.c,t=u.length-1;t>=0;--t)u[t].bi(a)},
eI:function(a){var u,t,s
for(u=this.c,t=u.length-1,s=a.a;t>=0;--t)C.b.dP(s,u[t].e)
C.b.an(s,this.a.a,null)},
aQ:function(a){var u,t,s,r,q,p
u=this.b.length
for(t=a.a,s=0;s<u;++s){r=this.b
if(s>=r.length)return H.e(r,s)
q=r[s]
r=q.c
p=r.a
C.b.an(t,p,r.b)
C.b.jl(t,q.a,q.b,5123,0)
C.b.an(t,p,null)}},
i:function(a){var u,t,s,r,q,p
u=[P.h]
t=H.d([],u)
for(s=this.b,r=s.length,q=0;q<s.length;s.length===r||(0,H.C)(s),++q)C.a.h(t,s[q].i(0))
p=H.d([],u)
for(u=this.c,s=u.length,q=0;q<s;++q)C.a.h(p,J.as(u[q]))
return"Buffer:  ["+this.a.i(0)+"]\nIndices: "+C.a.D(t,", ")+"\nAttrs:   "+C.a.D(p,", ")},
sfS:function(a){this.b=H.l(a,"$ib",[Z.bv],"$ab")},
$ioA:1}
Z.bv.prototype={
i:function(a){return"Type: "+this.a+", Count: "+this.b+", ["+("Instance of '"+H.bS(this.c)+"'")+"]"}}
Z.b8.prototype={
gcY:function(a){var u,t
u=this.a
t=(u&$.bq().a)!==0?3:0
if((u&$.bp().a)!==0)t+=3
if((u&$.bo().a)!==0)t+=3
if((u&$.br().a)!==0)t+=2
if((u&$.bs().a)!==0)t+=3
if((u&$.d_().a)!==0)t+=3
if((u&$.d0().a)!==0)t+=4
if((u&$.c7().a)!==0)++t
return(u&$.bn().a)!==0?t+4:t},
j_:function(a){var u,t,s
u=$.bq()
t=this.a
if((t&u.a)!==0){if(0===a)return u
s=1}else s=0
u=$.bp()
if((t&u.a)!==0){if(s===a)return u;++s}u=$.bo()
if((t&u.a)!==0){if(s===a)return u;++s}u=$.br()
if((t&u.a)!==0){if(s===a)return u;++s}u=$.bs()
if((t&u.a)!==0){if(s===a)return u;++s}u=$.d_()
if((t&u.a)!==0){if(s===a)return u;++s}u=$.d0()
if((t&u.a)!==0){if(s===a)return u;++s}u=$.c7()
if((t&u.a)!==0){if(s===a)return u;++s}u=$.bn()
if((t&u.a)!==0)if(s===a)return u
return $.mp()},
t:function(a,b){if(b==null)return!1
if(!(b instanceof Z.b8))return!1
return this.a===b.a},
i:function(a){var u,t
u=H.d([],[P.h])
t=this.a
if((t&$.bq().a)!==0)C.a.h(u,"Pos")
if((t&$.bp().a)!==0)C.a.h(u,"Norm")
if((t&$.bo().a)!==0)C.a.h(u,"Binm")
if((t&$.br().a)!==0)C.a.h(u,"Txt2D")
if((t&$.bs().a)!==0)C.a.h(u,"TxtCube")
if((t&$.d_().a)!==0)C.a.h(u,"Clr3")
if((t&$.d0().a)!==0)C.a.h(u,"Clr4")
if((t&$.c7().a)!==0)C.a.h(u,"Weight")
if((t&$.bn().a)!==0)C.a.h(u,"Bending")
if(u.length<=0)return"None"
return C.a.D(u,"|")}}
D.ff.prototype={}
D.aY.prototype={
h:function(a,b){var u={func:1,ret:-1,args:[D.A]}
H.n(b,u)
if(this.a==null)this.sa4(H.d([],[u]))
u=this.a;(u&&C.a).h(u,b)},
M:function(a,b){var u,t
H.n(b,{func:1,ret:-1,args:[D.A]})
u=this.a
u=u==null?null:C.a.aW(u,b)
if(u===!0){u=this.a
t=(u&&C.a).M(u,b)||!1}else t=!1
return t},
H:function(a){var u,t,s,r
u={}
u.a=a
t=this.a
s=t==null
r=s?null:t.length===0
if(r!==!1)r=!0
else r=!1
if(r)return!1
if(a==null){a=new D.A(null)
a.b=!0
u.a=a
r=a}else r=a
if(this.d>0){if(this.c==null)this.c=r
return!0}if(!s)C.a.L(t,new D.fz(u))
return!0},
k5:function(a,b,c){var u,t
u=this.d
if(u>0){--u
this.d=u
if(u<=0)u=this.c!=null
else u=!1
if(u){t=this.c
this.c=null
this.H(t)}}},
ah:function(a){return this.k5(a,!0,!1)},
sa4:function(a){this.a=H.l(a,"$ib",[{func:1,ret:-1,args:[D.A]}],"$ab")},
say:function(a){this.b=H.l(a,"$ib",[{func:1,ret:-1,args:[D.A]}],"$ab")}}
D.fz.prototype={
$1:function(a){var u
H.n(a,{func:1,ret:-1,args:[D.A]})
u=this.a.a
u.b
a.$1(u)},
$S:30}
D.A.prototype={}
D.bP.prototype={}
D.bQ.prototype={}
D.K.prototype={
i:function(a){return"ValueChanged: "+this.c+", "+H.m(this.d)+" => "+H.m(this.e)}}
X.d8.prototype={
t:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.d8))return!1
if(this.a!=b.a)return!1
if(!this.b.t(0,b.b))return!1
return!0},
i:function(a){return this.b.i(0)+H.m(this.a)}}
X.dm.prototype={
t:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.dm))return!1
if(this.a!=b.a)return!1
if(!this.b.t(0,b.b))return!1
return!0},
i:function(a){return this.b.i(0)+H.m(this.a)}}
X.fO.prototype={
jS:function(a){this.c=a.b
this.d.h(0,a.a)
return!1},
jO:function(a){this.c=a.b
this.d.M(0,a.a)
return!1},
shU:function(a){this.d=H.l(a,"$ilj",[P.o],"$alj")}}
X.dr.prototype={}
X.fX.prototype={
aT:function(a,b){var u,t,s,r,q,p,o,n
u=new P.aj(Date.now(),!1)
t=this.x
s=b.a
r=this.Q
if(typeof s!=="number")return s.m()
q=b.b
p=this.ch
if(typeof q!=="number")return q.m()
o=new V.a7(t.a+s*r,t.b+q*p)
p=this.a.gaN()
n=new X.bh(a,V.bz(),this.x,this.y,this.z,p,o,u,this)
n.b=!0
this.z=u
this.x=o
return n},
cG:function(a,b){this.r=a.a
return!1},
b5:function(a,b){var u,t
u=this.r
t=a.a
if(typeof t!=="number")return t.eX()
if(typeof u!=="number")return u.bE()
this.r=(u&~t)>>>0
return!1},
b4:function(a,b){var u=this.d
if(u==null)return!1
u.H(this.aT(a,b))
return!0},
jT:function(a){var u,t,s,r,q,p,o,n
u=this.e
if(u==null)return!1
t=this.a.gaN()
s=this.x
r=Date.now()
q=a.a
p=this.cx
if(typeof q!=="number")return q.m()
o=a.b
n=this.cy
if(typeof o!=="number")return o.m()
r=new X.cn(new V.T(q*p,o*n),t,s,new P.aj(r,!1),this)
r.b=!0
u.H(r)
return!0},
hw:function(a,b,c){var u,t,s
if(this.f==null)return
u=new P.aj(Date.now(),!1)
t=this.f
s=new X.dr(c,a,this.a.gaN(),b,u,this)
s.b=!0
t.H(s)
this.y=u
this.x=V.bz()}}
X.au.prototype={
t:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.au))return!1
if(this.a!==b.a)return!1
if(this.b!=b.b)return!1
if(this.c!=b.c)return!1
return!0},
i:function(a){var u=this.a?"Ctrl+":""
u+=this.b?"Alt+":""
return u+(this.c?"Shift+":"")}}
X.bh.prototype={}
X.hf.prototype={
bO:function(a,b,c){var u,t,s
u=new P.aj(Date.now(),!1)
t=this.a.gaN()
s=new X.bh(a,this.r,this.x,this.y,this.z,t,b,u,this)
s.b=!0
if(c){this.y=u
this.r=b}this.z=u
this.x=b
return s},
cG:function(a,b){var u
this.f=a.a
u=this.b
if(u==null)return!1
u.H(this.bO(a,b,!0))
return!0},
b5:function(a,b){var u,t
u=this.f
t=a.a
if(typeof t!=="number")return t.eX()
if(typeof u!=="number")return u.bE()
this.f=(u&~t)>>>0
u=this.c
if(u==null)return!1
u.H(this.bO(a,b,!0))
return!0},
b4:function(a,b){var u=this.d
if(u==null)return!1
u.H(this.bO(a,b,!1))
return!0},
jU:function(a,b){var u,t,s,r,q,p,o
u=this.e
if(u==null)return!1
t=this.a.gaN()
s=Date.now()
r=a.a
q=this.Q
if(typeof r!=="number")return r.m()
p=a.b
o=this.ch
if(typeof p!=="number")return p.m()
s=new X.cn(new V.T(r*q,p*o),t,b,new P.aj(s,!1),this)
s.b=!0
u.H(s)
return!0},
gdQ:function(){var u=this.b
if(u==null){u=D.S()
this.b=u}return u},
gbD:function(){var u=this.c
if(u==null){u=D.S()
this.c=u}return u},
geo:function(){var u=this.d
if(u==null){u=D.S()
this.d=u}return u}}
X.cn.prototype={}
X.hs.prototype={}
X.dW.prototype={}
X.i4.prototype={
aT:function(a,b){var u,t,s,r
H.l(a,"$ib",[V.a7],"$ab")
u=new P.aj(Date.now(),!1)
t=a.length>0?a[0]:V.bz()
s=this.a.gaN()
r=new X.dW(a,this.f,this.r,this.x,this.y,s,t,u,this)
r.b=!0
if(b){this.x=u
this.f=t}this.y=u
this.r=t
return r},
jR:function(a){var u
H.l(a,"$ib",[V.a7],"$ab")
u=this.b
if(u==null)return!1
u.H(this.aT(a,!0))
return!0},
jP:function(a){var u
H.l(a,"$ib",[V.a7],"$ab")
u=this.c
if(u==null)return!1
u.H(this.aT(a,!0))
return!0},
jQ:function(a){var u
H.l(a,"$ib",[V.a7],"$ab")
u=this.d
if(u==null)return!1
u.H(this.aT(a,!1))
return!0}}
X.e0.prototype={
gaN:function(){var u=this.a
return V.lh(0,0,C.t.gdO(u).c,C.t.gdO(u).d)},
dd:function(a){var u,t
u=a.keyCode
t=a.ctrlKey||a.metaKey
return new X.dm(u,new X.au(t,a.altKey,a.shiftKey))},
aK:function(a){var u,t
u=this.b
t=a.ctrlKey||a.metaKey
u.c=new X.au(t,a.altKey,a.shiftKey)},
c6:function(a){var u,t
u=this.b
t=a.ctrlKey||a.metaKey
u.c=new X.au(t,a.altKey,a.shiftKey)},
az:function(a){var u,t,s,r,q
u=this.a.getBoundingClientRect()
t=a.pageX
s=a.pageY
r=u.left
if(typeof t!=="number")return t.p()
q=u.top
if(typeof s!=="number")return s.p()
return new V.a7(t-r,s-q)},
aU:function(a){return new V.T(a.movementX,a.movementY)},
c0:function(a){var u,t,s,r,q,p,o,n
u=this.a.getBoundingClientRect()
t=H.d([],[V.a7])
for(s=a.touches,r=s.length,q=0;q<s.length;s.length===r||(0,H.C)(s),++q){p=s[q]
o=C.e.ai(p.pageX)
C.e.ai(p.pageY)
n=u.left
C.e.ai(p.pageX)
C.a.h(t,new V.a7(o-n,C.e.ai(p.pageY)-u.top))}return t},
av:function(a){var u,t
u=a.buttons
t=a.ctrlKey||a.metaKey
return new X.d8(u,new X.au(t,a.altKey,a.shiftKey))},
bR:function(a){var u,t,s,r,q,p
u=this.a.getBoundingClientRect()
t=a.pageX
s=a.pageY
r=u.left
if(typeof t!=="number")return t.p()
q=t-r
if(q<0)return!1
t=u.top
if(typeof s!=="number")return s.p()
p=s-t
if(p<0)return!1
return q<u.width&&p<u.height},
hq:function(a){this.f=!0},
hc:function(a){this.f=!1},
hk:function(a){H.f(a,"$iad")
if(this.f&&this.bR(a))a.preventDefault()},
hu:function(a){var u
H.f(a,"$ib_")
if(!this.f)return
u=this.dd(a)
this.b.jS(u)},
hs:function(a){var u
H.f(a,"$ib_")
if(!this.f)return
u=this.dd(a)
this.b.jO(u)},
hy:function(a){var u,t,s,r
H.f(a,"$iad")
u=this.a
u.focus()
this.f=!0
this.aK(a)
if(this.x){t=this.av(a)
s=this.aU(a)
if(this.d.cG(t,s))a.preventDefault()
return}if(this.r){this.y=a
u.requestPointerLock()
return}t=this.av(a)
r=this.az(a)
if(this.c.cG(t,r))a.preventDefault()},
hC:function(a){var u,t,s
H.f(a,"$iad")
this.aK(a)
u=this.av(a)
if(this.x){t=this.aU(a)
if(this.d.b5(u,t))a.preventDefault()
return}if(this.r)return
s=this.az(a)
if(this.c.b5(u,s))a.preventDefault()},
ho:function(a){var u,t,s
H.f(a,"$iad")
if(!this.bR(a)){this.aK(a)
u=this.av(a)
if(this.x){t=this.aU(a)
if(this.d.b5(u,t))a.preventDefault()
return}if(this.r)return
s=this.az(a)
if(this.c.b5(u,s))a.preventDefault()}},
hA:function(a){var u,t,s
H.f(a,"$iad")
this.aK(a)
u=this.av(a)
if(this.x){t=this.aU(a)
if(this.d.b4(u,t))a.preventDefault()
return}if(this.r)return
s=this.az(a)
if(this.c.b4(u,s))a.preventDefault()},
hm:function(a){var u,t,s
H.f(a,"$iad")
if(!this.bR(a)){this.aK(a)
u=this.av(a)
if(this.x){t=this.aU(a)
if(this.d.b4(u,t))a.preventDefault()
return}if(this.r)return
s=this.az(a)
if(this.c.b4(u,s))a.preventDefault()}},
hE:function(a){var u,t
H.f(a,"$ib9")
this.aK(a)
u=new V.T((a&&C.G).gjg(a),C.G.gjh(a)).v(0,180)
if(this.x){if(this.d.jT(u))a.preventDefault()
return}if(this.r)return
t=this.az(a)
if(this.c.jU(u,t))a.preventDefault()},
hG:function(a){var u,t,s
u=document.pointerLockElement===this.a
if(u!==this.x){this.x=u
t=this.av(this.y)
s=this.az(this.y)
this.d.hw(t,s,u)}},
hS:function(a){var u
H.f(a,"$iaR")
this.a.focus()
this.f=!0
this.c6(a)
u=this.c0(a)
if(this.e.jR(u))a.preventDefault()},
hO:function(a){var u
H.f(a,"$iaR")
this.c6(a)
u=this.c0(a)
if(this.e.jP(u))a.preventDefault()},
hQ:function(a){var u
H.f(a,"$iaR")
this.c6(a)
u=this.c0(a)
if(this.e.jQ(u))a.preventDefault()},
sfK:function(a){this.z=H.l(a,"$ib",[[P.cx,P.P]],"$ab")}}
D.bc.prototype={
gB:function(){var u=this.d
if(u==null){u=D.S()
this.d=u}return u},
at:function(a){var u
H.f(a,"$iA")
u=this.d
if(u!=null)u.H(a)},
fc:function(){return this.at(null)},
$ia4:1,
$ibi:1}
D.a4.prototype={$ibi:1}
D.dp.prototype={
gB:function(){var u=this.Q
if(u==null){u=D.S()
this.Q=u}return u},
at:function(a){var u=this.Q
if(u!=null)u.H(a)},
dt:function(a){var u
H.f(a,"$iA")
u=this.ch
if(u!=null)u.H(a)},
hv:function(){return this.dt(null)},
hI:function(a){var u,t,s
H.l(a,"$ij",[D.a4],"$aj")
for(u=a.length,t=0;t<a.length;a.length===u||(0,H.C)(a),++t){s=a[t]
if(s==null||this.fD(s))return!1}return!0},
h6:function(a,b){var u,t,s,r,q,p,o,n
u=D.a4
H.l(b,"$ij",[u],"$aj")
for(t=b.length,s=this.gds(),r={func:1,ret:-1,args:[D.A]},q=[r],p=0;p<b.length;b.length===t||(0,H.C)(b),++p){o=H.f(b[p],"$ia4")
if(o instanceof D.bc)C.a.h(this.e,o)
n=o.d
if(n==null){n=new D.aY()
n.sa4(null)
n.say(null)
n.c=null
n.d=0
o.d=n}H.n(s,r)
if(n.a==null)n.sa4(H.d([],q))
n=n.a;(n&&C.a).h(n,s)}u=new D.bP(a,b,this,[u])
u.b=!0
this.at(u)},
hM:function(a,b){var u,t,s,r,q,p
u=D.a4
H.l(b,"$ij",[u],"$aj")
for(t=b.length,s=this.gds(),r=0;r<b.length;b.length===t||(0,H.C)(b),++r){q=H.f(b[r],"$ia4")
if(q instanceof D.bc)C.a.M(this.e,q)
p=q.d
if(p==null){p=new D.aY()
p.sa4(null)
p.say(null)
p.c=null
p.d=0
q.d=p}p.M(0,s)}u=new D.bQ(a,b,this,[u])
u.b=!0
this.at(u)},
fD:function(a){var u=C.a.aW(this.e,a)
return u},
sfH:function(a){this.e=H.l(a,"$ib",[D.bc],"$ab")},
shT:function(a){this.f=H.l(a,"$ib",[D.dB],"$ab")},
sie:function(a){this.r=H.l(a,"$ib",[D.dI],"$ab")},
sir:function(a){this.x=H.l(a,"$ib",[D.dR],"$ab")},
sis:function(a){this.y=H.l(a,"$ib",[D.dS],"$ab")},
sit:function(a){this.z=H.l(a,"$ib",[D.dT],"$ab")},
$aj:function(){return[D.a4]},
$aa_:function(){return[D.a4]}}
D.dB.prototype={$ia4:1,$ibi:1}
D.dI.prototype={$ia4:1,$ibi:1}
D.dR.prototype={$ia4:1,$ibi:1}
D.dS.prototype={$ia4:1,$ibi:1}
D.dT.prototype={$ia4:1,$ibi:1}
V.a1.prototype={
n:function(a,b){var u,t,s
u=C.e.n(this.a,b.gcK())
t=C.e.n(this.b,b.gbG())
s=C.e.n(this.c,b.gcf())
if(u<0)u=0
else if(u>1)u=1
if(t<0)t=0
else if(t>1)t=1
if(s<0)s=0
else if(s>1)s=1
return new V.a1(u,t,s)},
p:function(a,b){var u,t,s
u=C.e.p(this.a,b.gcK())
t=C.e.p(this.b,b.gbG())
s=C.e.p(this.c,b.gcf())
if(u<0)u=0
else if(u>1)u=1
if(t<0)t=0
else if(t>1)t=1
if(s<0)s=0
else if(s>1)s=1
return new V.a1(u,t,s)},
t:function(a,b){var u,t
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.a1))return!1
u=b.a
t=$.J().a
if(!(Math.abs(u-this.a)<t))return!1
if(!(Math.abs(b.b-this.b)<t))return!1
if(!(Math.abs(b.c-this.c)<t))return!1
return!0},
i:function(a){return"["+V.O(this.a,3,0)+", "+V.O(this.b,3,0)+", "+V.O(this.c,3,0)+"]"}}
V.aF.prototype={
n:function(a,b){var u,t,s,r
u=C.e.n(this.a,b.gcK())
t=C.e.n(this.b,b.gbG())
s=C.e.n(this.c,b.gcf())
r=C.e.n(this.d,b.giZ(b))
if(u<0)u=0
else if(u>1)u=1
if(t<0)t=0
else if(t>1)t=1
if(s<0)s=0
else if(s>1)s=1
if(r<0)r=0
else if(r>1)r=1
return new V.aF(u,t,s,r)},
p:function(a,b){var u,t,s,r
u=C.e.p(this.a,b.gcK())
t=C.e.p(this.b,b.gbG())
s=C.e.p(this.c,b.gcf())
r=C.e.p(this.d,b.giZ(b))
if(u<0)u=0
else if(u>1)u=1
if(t<0)t=0
else if(t>1)t=1
if(s<0)s=0
else if(s>1)s=1
if(r<0)r=0
else if(r>1)r=1
return new V.aF(u,t,s,r)},
t:function(a,b){var u,t
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.aF))return!1
u=b.a
t=$.J().a
if(!(Math.abs(u-this.a)<t))return!1
if(!(Math.abs(b.b-this.b)<t))return!1
if(!(Math.abs(b.c-this.c)<t))return!1
if(!(Math.abs(b.d-this.d)<t))return!1
return!0},
i:function(a){return"["+V.O(this.a,3,0)+", "+V.O(this.b,3,0)+", "+V.O(this.c,3,0)+", "+V.O(this.d,3,0)+"]"}}
V.fx.prototype={}
V.dv.prototype={
ac:function(a,b){var u=H.d([this.a,this.d,this.r,this.b,this.e,this.x,this.c,this.f,this.y],[P.q])
return u},
t:function(a,b){var u,t,s,r
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.dv))return!1
u=b.a
t=$.J()
s=t.a
if(!(Math.abs(u-this.a)<s))return!1
if(!(Math.abs(b.b-this.b)<s))return!1
if(!(Math.abs(b.c-this.c)<s))return!1
if(!(Math.abs(b.d-this.d)<s))return!1
if(!(Math.abs(b.e-this.e)<s))return!1
if(!(Math.abs(b.f-this.f)<s))return!1
u=b.r
r=this.r
t.toString
if(typeof u!=="number")return u.p()
if(typeof r!=="number")return H.u(r)
if(!(Math.abs(u-r)<s))return!1
u=b.x
t=this.x
if(typeof u!=="number")return u.p()
if(typeof t!=="number")return H.u(t)
if(!(Math.abs(u-t)<s))return!1
u=b.y
t=this.y
if(typeof u!=="number")return u.p()
if(typeof t!=="number")return H.u(t)
if(!(Math.abs(u-t)<s))return!1
return!0},
i:function(a){var u,t,s,r,q,p,o,n
u=[P.q]
t=V.c2(H.d([this.a,this.d,this.r],u),3,0)
s=V.c2(H.d([this.b,this.e,this.x],u),3,0)
r=V.c2(H.d([this.c,this.f,this.y],u),3,0)
u=t.length
if(0>=u)return H.e(t,0)
q="["+t[0]+", "
p=s.length
if(0>=p)return H.e(s,0)
q=q+s[0]+", "
o=r.length
if(0>=o)return H.e(r,0)
q=q+r[0]+",\n"
if(1>=u)return H.e(t,1)
n=" "+t[1]+", "
if(1>=p)return H.e(s,1)
n=n+s[1]+", "
if(1>=o)return H.e(r,1)
n=q+(n+r[1]+",\n")
if(2>=u)return H.e(t,2)
u=" "+t[2]+", "
if(2>=p)return H.e(s,2)
u=u+s[2]+", "
if(2>=o)return H.e(r,2)
return n+(u+r[2]+"]")}}
V.ak.prototype={
ac:function(a,b){var u=H.d([this.a,this.e,this.y,this.cx,this.b,this.f,this.z,this.cy,this.c,this.r,this.Q,this.db,this.d,this.x,this.ch,this.dx],[P.q])
return u},
em:function(b1){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0
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
if(typeof g!=="number")return g.m()
e=this.z
d=this.cx
if(typeof e!=="number")return e.m()
c=g*f-e*d
b=this.db
a=this.Q
if(typeof a!=="number")return a.m()
a0=g*b-a*d
a1=this.dx
a2=this.ch
a3=g*a1-a2*d
a4=e*b-a*f
a5=e*a1-a2*f
a6=a*a1-a2*b
a7=q*a6-n*a5+k*a4+j*a3-i*a0+h*c
if(Math.abs(a7-0)<$.J().a)return V.ap()
a8=1/a7
a9=-r
b0=-d
return V.b2((t*a6-p*a5+m*a4)*a8,(-s*a6+o*a5-l*a4)*a8,(f*h-b*i+a1*j)*a8,(-e*h+a*i-a2*j)*a8,(a9*a6+p*a3-m*a0)*a8,(u*a6-o*a3+l*a0)*a8,(b0*h+b*k-a1*n)*a8,(g*h-a*k+a2*n)*a8,(r*a5-t*a3+m*c)*a8,(-u*a5+s*a3-l*c)*a8,(d*i-f*k+a1*q)*a8,(-g*i+e*k-a2*q)*a8,(a9*a4+t*a0-p*c)*a8,(u*a4-s*a0+o*c)*a8,(b0*j+f*n-b*q)*a8,(g*j-e*n+a*q)*a8)},
m:function(b1,b2){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0
u=this.a
t=b2.a
s=this.b
r=b2.e
q=this.c
p=b2.y
if(typeof p!=="number")return H.u(p)
o=this.d
n=b2.cx
m=b2.b
l=b2.f
k=b2.z
if(typeof k!=="number")return H.u(k)
j=b2.cy
i=b2.c
h=b2.r
g=b2.Q
if(typeof g!=="number")return H.u(g)
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
if(typeof a3!=="number")return a3.m()
a4=this.z
if(typeof a4!=="number")return a4.m()
a5=this.Q
if(typeof a5!=="number")return a5.m()
a6=this.ch
a7=this.cx
a8=this.cy
a9=this.db
b0=this.dx
return V.b2(u*t+s*r+q*p+o*n,u*m+s*l+q*k+o*j,u*i+s*h+q*g+o*f,u*e+s*d+q*c+o*b,a*t+a0*r+a1*p+a2*n,a*m+a0*l+a1*k+a2*j,a*i+a0*h+a1*g+a2*f,a*e+a0*d+a1*c+a2*b,a3*t+a4*r+a5*p+a6*n,a3*m+a4*l+a5*k+a6*j,a3*i+a4*h+a5*g+a6*f,a3*e+a4*d+a5*c+a6*b,a7*t+a8*r+a9*p+b0*n,a7*m+a8*l+a9*k+b0*j,a7*i+a8*h+a9*g+b0*f,a7*e+a8*d+a9*c+b0*b)},
cQ:function(a){var u,t,s,r,q,p
u=a.a
t=a.b
s=a.c
if(typeof s!=="number")return H.u(s)
r=this.y
if(typeof r!=="number")return r.m()
q=this.z
if(typeof q!=="number")return q.m()
p=this.Q
if(typeof p!=="number")return p.m()
return new V.G(this.a*u+this.b*t+this.c*s,this.e*u+this.f*t+this.r*s,r*u+q*t+p*s)},
ba:function(a){var u,t,s,r,q,p
u=a.a
t=a.b
s=a.c
if(typeof s!=="number")return H.u(s)
r=this.y
if(typeof r!=="number")return r.m()
q=this.z
if(typeof q!=="number")return q.m()
p=this.Q
if(typeof p!=="number")return p.m()
return new V.Y(this.a*u+this.b*t+this.c*s+this.d,this.e*u+this.f*t+this.r*s+this.x,r*u+q*t+p*s+this.ch)},
t:function(a,b){var u,t,s,r
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.ak))return!1
u=b.a
t=$.J()
s=t.a
if(!(Math.abs(u-this.a)<s))return!1
if(!(Math.abs(b.b-this.b)<s))return!1
if(!(Math.abs(b.c-this.c)<s))return!1
if(!(Math.abs(b.d-this.d)<s))return!1
if(!(Math.abs(b.e-this.e)<s))return!1
if(!(Math.abs(b.f-this.f)<s))return!1
if(!(Math.abs(b.r-this.r)<s))return!1
if(!(Math.abs(b.x-this.x)<s))return!1
u=b.y
r=this.y
t.toString
if(typeof u!=="number")return u.p()
if(typeof r!=="number")return H.u(r)
if(!(Math.abs(u-r)<s))return!1
u=b.z
t=this.z
if(typeof u!=="number")return u.p()
if(typeof t!=="number")return H.u(t)
if(!(Math.abs(u-t)<s))return!1
u=b.Q
t=this.Q
if(typeof u!=="number")return u.p()
if(typeof t!=="number")return H.u(t)
if(!(Math.abs(u-t)<s))return!1
if(!(Math.abs(b.ch-this.ch)<s))return!1
if(!(Math.abs(b.cx-this.cx)<s))return!1
if(!(Math.abs(b.cy-this.cy)<s))return!1
if(!(Math.abs(b.db-this.db)<s))return!1
if(!(Math.abs(b.dx-this.dx)<s))return!1
return!0},
i:function(a){return this.N()},
ee:function(a,b,c){var u,t,s,r,q,p,o,n,m,l
u=[P.q]
t=V.c2(H.d([this.a,this.e,this.y,this.cx],u),b,c)
s=V.c2(H.d([this.b,this.f,this.z,this.cy],u),b,c)
r=V.c2(H.d([this.c,this.r,this.Q,this.db],u),b,c)
q=V.c2(H.d([this.d,this.x,this.ch,this.dx],u),b,c)
u=t.length
if(0>=u)return H.e(t,0)
p="["+t[0]+", "
o=s.length
if(0>=o)return H.e(s,0)
p=p+s[0]+", "
n=r.length
if(0>=n)return H.e(r,0)
p=p+r[0]+", "
m=q.length
if(0>=m)return H.e(q,0)
p=p+q[0]+",\n"
l=a+" "
if(1>=u)return H.e(t,1)
l=l+t[1]+", "
if(1>=o)return H.e(s,1)
l=l+s[1]+", "
if(1>=n)return H.e(r,1)
l=l+r[1]+", "
if(1>=m)return H.e(q,1)
l=p+(l+q[1]+",\n")
p=a+" "
if(2>=u)return H.e(t,2)
p=p+t[2]+", "
if(2>=o)return H.e(s,2)
p=p+s[2]+", "
if(2>=n)return H.e(r,2)
p=p+r[2]+", "
if(2>=m)return H.e(q,2)
p=l+(p+q[2]+",\n")
l=a+" "
if(3>=u)return H.e(t,3)
l=l+t[3]+", "
if(3>=o)return H.e(s,3)
l=l+s[3]+", "
if(3>=n)return H.e(r,3)
l=l+r[3]+", "
if(3>=m)return H.e(q,3)
return p+(l+q[3]+"]")},
N:function(){return this.ee("",3,0)},
C:function(a){return this.ee(a,3,0)}}
V.a7.prototype={
n:function(a,b){return new V.a7(this.a+b.a,this.b+b.b)},
p:function(a,b){return new V.a7(this.a-b.a,this.b-b.b)},
t:function(a,b){var u,t
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.a7))return!1
u=b.a
t=$.J().a
if(!(Math.abs(u-this.a)<t))return!1
if(!(Math.abs(b.b-this.b)<t))return!1
return!0},
i:function(a){return"["+V.O(this.a,3,0)+", "+V.O(this.b,3,0)+"]"}}
V.Y.prototype={
n:function(a,b){var u,t
u=this.c
t=b.c
if(typeof u!=="number")return u.n()
if(typeof t!=="number")return H.u(t)
return new V.Y(this.a+b.a,this.b+b.b,u+t)},
p:function(a,b){var u,t
u=this.c
t=b.c
if(typeof u!=="number")return u.p()
if(typeof t!=="number")return H.u(t)
return new V.Y(this.a-b.a,this.b-b.b,u-t)},
m:function(a,b){var u=this.c
if(typeof u!=="number")return u.m()
return new V.Y(this.a*b,this.b*b,u*b)},
t:function(a,b){var u,t,s,r
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.Y))return!1
u=b.a
t=$.J()
s=t.a
if(!(Math.abs(u-this.a)<s))return!1
if(!(Math.abs(b.b-this.b)<s))return!1
u=b.c
r=this.c
t.toString
if(typeof u!=="number")return u.p()
if(typeof r!=="number")return H.u(r)
if(!(Math.abs(u-r)<s))return!1
return!0},
i:function(a){return"["+V.O(this.a,3,0)+", "+V.O(this.b,3,0)+", "+V.O(this.c,3,0)+"]"}}
V.aL.prototype={
n:function(a,b){return new V.aL(C.e.n(this.a,b.gkg(b)),C.e.n(this.b,b.gkh(b)),C.e.n(this.c,b.gki(b)),C.e.n(this.d,b.gkf(b)))},
p:function(a,b){return new V.aL(C.e.p(this.a,b.gkg(b)),C.e.p(this.b,b.gkh(b)),C.e.p(this.c,b.gki(b)),C.e.p(this.d,b.gkf(b)))},
t:function(a,b){var u,t
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.aL))return!1
u=b.a
t=$.J().a
if(!(Math.abs(u-this.a)<t))return!1
if(!(Math.abs(b.b-this.b)<t))return!1
if(!(Math.abs(b.c-this.c)<t))return!1
if(!(Math.abs(b.d-this.d)<t))return!1
return!0},
i:function(a){return"["+V.O(this.a,3,0)+", "+V.O(this.b,3,0)+", "+V.O(this.c,3,0)+", "+V.O(this.d,3,0)+"]"}}
V.dF.prototype={
ga5:function(){var u,t
u=this.c
t=this.d
if(u>t)return t
else return u},
t:function(a,b){var u,t
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.dF))return!1
u=b.a
t=$.J().a
if(!(Math.abs(u-this.a)<t))return!1
if(!(Math.abs(b.b-this.b)<t))return!1
if(!(Math.abs(b.c-this.c)<t))return!1
if(!(Math.abs(b.d-this.d)<t))return!1
return!0},
i:function(a){return"["+V.O(this.a,3,0)+", "+V.O(this.b,3,0)+", "+V.O(this.c,3,0)+", "+V.O(this.d,3,0)+"]"}}
V.T.prototype={
cB:function(a){return Math.sqrt(this.E(this))},
E:function(a){var u,t,s,r
u=this.a
t=a.a
if(typeof u!=="number")return u.m()
if(typeof t!=="number")return H.u(t)
s=this.b
r=a.b
if(typeof s!=="number")return s.m()
if(typeof r!=="number")return H.u(r)
return u*t+s*r},
n:function(a,b){var u,t,s
u=this.a
t=b.gjm(b)
if(typeof u!=="number")return u.n()
t=C.e.n(u,t)
u=this.b
s=b.gjn(b)
if(typeof u!=="number")return u.n()
return new V.T(t,C.e.n(u,s))},
p:function(a,b){var u,t,s
u=this.a
t=b.gjm(b)
if(typeof u!=="number")return u.p()
t=C.e.p(u,t)
u=this.b
s=b.gjn(b)
if(typeof u!=="number")return u.p()
return new V.T(t,C.e.p(u,s))},
m:function(a,b){var u,t
u=this.a
if(typeof u!=="number")return u.m()
t=this.b
if(typeof t!=="number")return t.m()
return new V.T(u*b,t*b)},
v:function(a,b){var u,t
if(Math.abs(b-0)<$.J().a){u=$.lt
if(u==null){u=new V.T(0,0)
$.lt=u}return u}u=this.a
if(typeof u!=="number")return u.v()
t=this.b
if(typeof t!=="number")return t.v()
return new V.T(u/b,t/b)},
t:function(a,b){var u,t,s
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.T))return!1
u=b.a
t=this.a
s=$.J()
s.toString
if(typeof u!=="number")return u.p()
if(typeof t!=="number")return H.u(t)
s=s.a
if(!(Math.abs(u-t)<s))return!1
u=b.b
t=this.b
if(typeof u!=="number")return u.p()
if(typeof t!=="number")return H.u(t)
if(!(Math.abs(u-t)<s))return!1
return!0},
i:function(a){return"["+V.O(this.a,3,0)+", "+V.O(this.b,3,0)+"]"}}
V.G.prototype={
cB:function(a){return Math.sqrt(this.E(this))},
E:function(a){var u,t
u=this.c
t=a.c
if(typeof u!=="number")return u.m()
if(typeof t!=="number")return H.u(t)
return this.a*a.a+this.b*a.b+u*t},
cC:function(a,b){var u,t,s,r
u=this.a
t=this.b
s=this.c
r=a.c
if(typeof r!=="number")return r.p()
if(typeof s!=="number")return H.u(s)
return new V.G(u+b*(a.a-u),t+b*(a.b-t),s+b*(r-s))},
aA:function(a){var u,t,s,r,q,p
u=this.b
t=a.c
if(typeof t!=="number")return H.u(t)
s=this.c
r=a.b
if(typeof s!=="number")return s.m()
q=a.a
p=this.a
return new V.G(u*t-s*r,s*q-p*t,p*r-u*q)},
n:function(a,b){var u,t,s,r
u=b.a
t=b.b
s=this.c
r=b.c
if(typeof s!=="number")return s.n()
if(typeof r!=="number")return H.u(r)
return new V.G(this.a+u,this.b+t,s+r)},
p:function(a,b){var u,t
u=this.c
t=b.c
if(typeof u!=="number")return u.p()
if(typeof t!=="number")return H.u(t)
return new V.G(this.a-b.a,this.b-b.b,u-t)},
R:function(a){var u=this.c
if(typeof u!=="number")return u.R()
return new V.G(-this.a,-this.b,-u)},
m:function(a,b){var u=this.c
if(typeof u!=="number")return u.m()
return new V.G(this.a*b,this.b*b,u*b)},
v:function(a,b){var u
if(Math.abs(b-0)<$.J().a)return V.cI()
u=this.c
if(typeof u!=="number")return u.v()
return new V.G(this.a/b,this.b/b,u/b)},
en:function(){var u,t,s
u=$.J()
t=u.a
if(!(Math.abs(0-this.a)<t))return!1
if(!(Math.abs(0-this.b)<t))return!1
s=this.c
u.toString
if(typeof s!=="number")return H.u(s)
if(!(Math.abs(0-s)<t))return!1
return!0},
t:function(a,b){var u,t,s,r
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.G))return!1
u=b.a
t=$.J()
s=t.a
if(!(Math.abs(u-this.a)<s))return!1
if(!(Math.abs(b.b-this.b)<s))return!1
u=b.c
r=this.c
t.toString
if(typeof u!=="number")return u.p()
if(typeof r!=="number")return H.u(r)
if(!(Math.abs(u-r)<s))return!1
return!0},
i:function(a){return"["+V.O(this.a,3,0)+", "+V.O(this.b,3,0)+", "+V.O(this.c,3,0)+"]"}}
U.fg.prototype={
bK:function(a){var u=V.kh(a,this.c,this.b)
return u},
gB:function(){var u=this.y
if(u==null){u=D.S()
this.y=u}return u},
F:function(a){var u=this.y
if(u!=null)u.H(a)},
scS:function(a,b){},
scD:function(a){var u,t
u=this.b
if(!(Math.abs(u-a)<$.J().a)){this.b=a
if(a<this.c){this.c=a
this.d=a}else{t=this.d
if(a<t)this.d=this.bK(t)}u=new D.K("maximumLocation",u,this.b,this,[P.q])
u.b=!0
this.F(u)}},
scF:function(a){var u,t
u=this.c
if(!(Math.abs(u-a)<$.J().a)){this.c=a
if(this.b<a){this.b=a
this.d=a}else{t=this.d
if(a>t)this.d=this.bK(t)}u=new D.K("minimumLocation",u,this.c,this,[P.q])
u.b=!0
this.F(u)}},
sZ:function(a,b){var u
b=this.bK(b)
u=this.d
if(!(Math.abs(u-b)<$.J().a)){this.d=b
u=new D.K("location",u,b,this,[P.q])
u.b=!0
this.F(u)}},
scE:function(a){var u,t,s
u=this.e
if(!(Math.abs(u-a)<$.J().a)){this.e=a
t=this.f
s=-a
if(t<s)t=s
else if(t>a)t=a
this.f=t
u=new D.K("maximumVelocity",u,a,this,[P.q])
u.b=!0
this.F(u)}},
sU:function(a){var u,t
u=this.e
t=-u
if(a<t)a=t
else if(a>u)a=u
u=this.f
if(!(Math.abs(u-a)<$.J().a)){this.f=a
u=new D.K("velocity",u,a,this,[P.q])
u.b=!0
this.F(u)}},
scn:function(a){var u
if(a<0)a=0
else if(a>1)a=1
u=this.x
if(!(Math.abs(u-a)<$.J().a)){this.x=a
u=new D.K("dampening",u,a,this,[P.q])
u.b=!0
this.F(u)}},
ar:function(a,b){var u,t,s,r,q
u=this.f
t=$.J().a
if(!(Math.abs(u-0)<t)||!(Math.abs(this.r-0)<t)){s=u+this.r*b
u=this.e
r=-u
if(s<r)s=r
else if(s>u)s=u
this.sZ(0,this.d+s*b)
u=this.x
if(!(Math.abs(u-0)<$.J().a)){q=s*Math.pow(1-u,b)
if(s<0){if(q<s)q=s
else if(q>0)q=0}else if(q<0)q=0
else if(q>s)q=s
s=q}this.sU(s)}}}
U.da.prototype={
gB:function(){var u=this.b
if(u==null){u=D.S()
this.b=u}return u},
aj:function(a,b,c){return this.a},
t:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.da))return!1
return J.R(this.a,b.a)},
i:function(a){return"Constant: "+this.a.C("          ")}}
U.cj.prototype={
gB:function(){var u=this.e
if(u==null){u=D.S()
this.e=u}return u},
F:function(a){var u
H.f(a,"$iA")
u=this.e
if(u!=null)u.H(a)},
a3:function(){return this.F(null)},
fe:function(a,b){var u,t,s,r,q,p,o,n
u=U.a9
H.l(b,"$ij",[u],"$aj")
for(t=b.length,s=this.gaG(),r={func:1,ret:-1,args:[D.A]},q=[r],p=0;p<b.length;b.length===t||(0,H.C)(b),++p){o=b[p]
if(o!=null){n=o.gB()
n.toString
H.n(s,r)
if(n.a==null)n.sa4(H.d([],q))
n=n.a;(n&&C.a).h(n,s)}}u=new D.bP(a,b,this,[u])
u.b=!0
this.F(u)},
hK:function(a,b){var u,t,s,r,q
u=U.a9
H.l(b,"$ij",[u],"$aj")
for(t=b.length,s=this.gaG(),r=0;r<b.length;b.length===t||(0,H.C)(b),++r){q=b[r]
if(q!=null)q.gB().M(0,s)}u=new D.bQ(a,b,this,[u])
u.b=!0
this.F(u)},
aj:function(a,b,c){var u,t,s,r
u=this.r
t=b.e
if(typeof u!=="number")return u.V()
if(u<t){this.r=t
u=this.e
if(u!=null)++u.d
for(u=this.a,u=new J.at(u,u.length,0,[H.v(u,0)]),s=null;u.J();){t=u.d
if(t!=null){r=t.aj(0,b,c)
if(r!=null)s=s==null?r:r.m(0,s)}}this.f=s==null?V.ap():s
u=this.e
if(u!=null)u.ah(0)}return this.f},
t:function(a,b){var u,t,s,r
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.cj))return!1
u=this.a.length
for(t=0;t<u;++t){s=this.a
if(t>=s.length)return H.e(s,t)
s=s[t]
r=b.a
if(t>=r.length)return H.e(r,t)
if(!J.R(s,r[t]))return!1}return!0},
i:function(a){return"Group"},
$aj:function(){return[U.a9]},
$aa_:function(){return[U.a9]},
$ia9:1}
U.a9.prototype={}
U.dG.prototype={
gB:function(){var u=this.y
if(u==null){u=D.S()
this.y=u}return u},
F:function(a){var u=this.y
if(u!=null)u.H(a)},
seO:function(a){var u
a=V.kh(a,0,6.283185307179586)
u=this.a
if(!(Math.abs(u-a)<$.J().a)){this.a=a
u=new D.K("yaw",u,a,this,[P.q])
u.b=!0
this.F(u)}},
sex:function(a,b){var u
b=V.kh(b,0,6.283185307179586)
u=this.b
if(!(Math.abs(u-b)<$.J().a)){this.b=b
u=new D.K("pitch",u,b,this,[P.q])
u.b=!0
this.F(u)}},
seD:function(a){var u
a=V.kh(a,0,6.283185307179586)
u=this.c
if(!(Math.abs(u-a)<$.J().a)){this.c=a
u=new D.K("roll",u,a,this,[P.q])
u.b=!0
this.F(u)}},
aj:function(a,b,c){var u,t
u=this.r
t=b.e
if(u<t){this.r=t
u=this.y
if(u!=null)++u.d
this.seO(this.a+this.d*b.y)
this.sex(0,this.b+this.e*b.y)
this.seD(this.c+this.f*b.y)
this.x=V.l8(this.c).m(0,V.l7(this.b)).m(0,V.kw(this.a))
u=this.y
if(u!=null)u.ah(0)}return this.x},
t:function(a,b){var u,t,s
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.dG))return!1
u=this.a
t=b.a
s=$.J().a
if(!(Math.abs(u-t)<s))return!1
if(!(Math.abs(this.b-b.b)<s))return!1
if(!(Math.abs(this.c-b.c)<s))return!1
if(!(Math.abs(this.d-b.d)<s))return!1
if(!(Math.abs(this.e-b.e)<s))return!1
if(!(Math.abs(this.f-b.f)<s))return!1
return!0},
i:function(a){return"Rotater: ["+V.O(this.a,3,0)+", "+V.O(this.b,3,0)+", "+V.O(this.c,3,0)+"], ["+V.O(this.d,3,0)+", "+V.O(this.e,3,0)+", "+V.O(this.f,3,0)+"]"}}
U.e1.prototype={
gB:function(){var u=this.cy
if(u==null){u=D.S()
this.cy=u}return u},
F:function(a){var u
H.f(a,"$iA")
u=this.cy
if(u!=null)u.H(a)},
a3:function(){return this.F(null)},
aV:function(a){if(this.a!=null)return!1
this.a=a
a.c.gdQ().h(0,this.gbS())
this.a.c.geo().h(0,this.gbU())
this.a.c.gbD().h(0,this.gbW())
return!0},
bT:function(a){H.f(a,"$iA")
if(!J.R(this.c,this.a.b.c))return
this.y=!0
this.x=!0
this.z=this.b.d},
bV:function(a){var u,t,s,r,q,p,o
a=H.k(H.f(a,"$iA"),"$ibh")
if(!this.y)return
if(this.x){u=a.d.p(0,a.y)
u=new V.T(u.a,u.b)
u=u.E(u)
t=this.r
if(typeof t!=="number")return H.u(t)
if(u<t)return
this.x=!1}if(this.d){u=a.c
t=a.d.p(0,a.y)
u=new V.T(t.a,t.b).m(0,2).v(0,u.ga5())
this.Q=u
t=this.b
u=u.a
if(typeof u!=="number")return u.m()
s=this.e
if(typeof s!=="number")return H.u(s)
t.sU(u*10*s)}else{u=a.c
t=a.d
s=t.p(0,a.y)
r=new V.T(s.a,s.b).m(0,2).v(0,u.ga5())
s=this.b
q=r.a
if(typeof q!=="number")return q.R()
p=this.e
if(typeof p!=="number")return H.u(p)
o=this.z
if(typeof o!=="number")return H.u(o)
s.sZ(0,-q*p+o)
this.b.sU(0)
t=t.p(0,a.z)
this.Q=new V.T(t.a,t.b).m(0,2).v(0,u.ga5())}this.a3()},
bX:function(a){var u,t,s
H.f(a,"$iA")
if(!this.y)return
this.y=!1
if(this.x)return
u=this.Q
if(u.E(u)>0.0001){u=this.b
t=this.Q.a
if(typeof t!=="number")return t.m()
s=this.e
if(typeof s!=="number")return H.u(s)
u.sU(t*10*s)
this.a3()}},
aj:function(a,b,c){var u,t,s
u=this.ch
t=b.e
if(typeof u!=="number")return u.V()
if(u<t){this.ch=t
s=b.y
this.b.ar(0,s)
this.cx=V.l8(this.b.d)}return this.cx},
$ia9:1}
U.e2.prototype={
gB:function(){var u=this.fx
if(u==null){u=D.S()
this.fx=u}return u},
F:function(a){var u
H.f(a,"$iA")
u=this.fx
if(u!=null)u.H(a)},
a3:function(){return this.F(null)},
aV:function(a){var u,t
if(this.a!=null)return!1
this.a=a
a.c.gdQ().h(0,this.gbS())
this.a.c.geo().h(0,this.gbU())
this.a.c.gbD().h(0,this.gbW())
u=this.a.d
t=u.f
if(t==null){t=D.S()
u.f=t
u=t}else u=t
u.h(0,this.gh_())
u=this.a.d
t=u.d
if(t==null){t=D.S()
u.d=t
u=t}else u=t
u.h(0,this.gh1())
u=this.a.e
t=u.b
if(t==null){t=D.S()
u.b=t
u=t}else u=t
u.h(0,this.gio())
u=this.a.e
t=u.d
if(t==null){t=D.S()
u.d=t
u=t}else u=t
u.h(0,this.gil())
u=this.a.e
t=u.c
if(t==null){t=D.S()
u.c=t
u=t}else u=t
u.h(0,this.gij())
return!0},
am:function(a){var u,t
u=a.a
t=a.b
if(this.f){if(typeof u!=="number")return u.R()
u=-u}if(this.r){if(typeof t!=="number")return t.R()
t=-t}return new V.T(u,t)},
bT:function(a){a=H.k(H.f(a,"$iA"),"$ibh")
if(!J.R(this.d,a.x.b))return
this.cx=!0
this.ch=!0
this.cy=this.c.d
this.db=this.b.d},
bV:function(a){var u,t,s,r,q,p,o
a=H.k(H.f(a,"$iA"),"$ibh")
if(!this.cx)return
if(this.ch){u=a.d.p(0,a.y)
u=new V.T(u.a,u.b)
u=u.E(u)
t=this.Q
if(typeof t!=="number")return H.u(t)
if(u<t)return
this.ch=!1}if(this.e){u=a.c
t=a.d.p(0,a.y)
u=this.am(new V.T(t.a,t.b).m(0,2).v(0,u.ga5()))
this.dx=u
t=this.c
u=u.a
if(typeof u!=="number")return u.R()
s=this.y
if(typeof s!=="number")return H.u(s)
t.sU(-u*10*s)
s=this.b
u=this.dx.b
if(typeof u!=="number")return u.R()
t=this.x
if(typeof t!=="number")return H.u(t)
s.sU(-u*10*t)}else{u=a.c
t=a.d
s=t.p(0,a.y)
r=this.am(new V.T(s.a,s.b).m(0,2).v(0,u.ga5()))
s=this.c
q=r.a
if(typeof q!=="number")return q.R()
p=this.y
if(typeof p!=="number")return H.u(p)
o=this.cy
if(typeof o!=="number")return H.u(o)
s.sZ(0,-q*p+o)
o=this.b
p=r.b
if(typeof p!=="number")return p.R()
q=this.x
if(typeof q!=="number")return H.u(q)
s=this.db
if(typeof s!=="number")return H.u(s)
o.sZ(0,-p*q+s)
this.b.sU(0)
this.c.sU(0)
t=t.p(0,a.z)
this.dx=this.am(new V.T(t.a,t.b).m(0,2).v(0,u.ga5()))}this.a3()},
bX:function(a){var u,t,s
H.f(a,"$iA")
if(!this.cx)return
this.cx=!1
if(this.ch)return
u=this.dx
if(u.E(u)>0.0001){u=this.c
t=this.dx.a
if(typeof t!=="number")return t.R()
s=this.y
if(typeof s!=="number")return H.u(s)
u.sU(-t*10*s)
s=this.b
t=this.dx.b
if(typeof t!=="number")return t.R()
u=this.x
if(typeof u!=="number")return H.u(u)
s.sU(-t*10*u)
this.a3()}},
h0:function(a){if(H.k(H.f(a,"$iA"),"$idr").x){this.ch=!0
this.cy=this.c.d
this.db=this.b.d}},
h2:function(a){var u,t,s,r,q,p,o
a=H.k(H.f(a,"$iA"),"$ibh")
if(!J.R(this.d,a.x.b))return
u=a.c
t=a.d
s=t.p(0,a.y)
r=this.am(new V.T(s.a,s.b).m(0,2).v(0,u.ga5()))
s=this.c
q=r.a
if(typeof q!=="number")return q.R()
p=this.y
if(typeof p!=="number")return H.u(p)
o=this.cy
if(typeof o!=="number")return H.u(o)
s.sZ(0,-q*p+o)
o=this.b
p=r.b
if(typeof p!=="number")return p.R()
q=this.x
if(typeof q!=="number")return H.u(q)
s=this.db
if(typeof s!=="number")return H.u(s)
o.sZ(0,-p*q+s)
this.b.sU(0)
this.c.sU(0)
t=t.p(0,a.z)
this.dx=this.am(new V.T(t.a,t.b).m(0,2).v(0,u.ga5()))
this.a3()},
ip:function(a){H.f(a,"$iA")
this.cx=!0
this.ch=!0
this.cy=this.c.d
this.db=this.b.d},
im:function(a){var u,t,s,r,q,p,o
a=H.k(H.f(a,"$iA"),"$idW")
if(!this.cx)return
if(this.ch){u=a.d.p(0,a.y)
u=new V.T(u.a,u.b)
u=u.E(u)
t=this.Q
if(typeof t!=="number")return H.u(t)
if(u<t)return
this.ch=!1}if(this.e){u=a.c
t=a.d.p(0,a.y)
u=this.am(new V.T(t.a,t.b).m(0,2).v(0,u.ga5()))
this.dx=u
t=this.c
u=u.a
if(typeof u!=="number")return u.R()
s=this.y
if(typeof s!=="number")return H.u(s)
t.sU(-u*10*s)
s=this.b
u=this.dx.b
if(typeof u!=="number")return u.R()
t=this.x
if(typeof t!=="number")return H.u(t)
s.sU(-u*10*t)}else{u=a.c
t=a.d
s=t.p(0,a.y)
r=this.am(new V.T(s.a,s.b).m(0,2).v(0,u.ga5()))
s=this.c
q=r.a
if(typeof q!=="number")return q.R()
p=this.y
if(typeof p!=="number")return H.u(p)
o=this.cy
if(typeof o!=="number")return H.u(o)
s.sZ(0,-q*p+o)
o=this.b
p=r.b
if(typeof p!=="number")return p.R()
q=this.x
if(typeof q!=="number")return H.u(q)
s=this.db
if(typeof s!=="number")return H.u(s)
o.sZ(0,-p*q+s)
this.b.sU(0)
this.c.sU(0)
t=t.p(0,a.z)
this.dx=this.am(new V.T(t.a,t.b).m(0,2).v(0,u.ga5()))}this.a3()},
ik:function(a){var u,t,s
H.f(a,"$iA")
if(!this.cx)return
this.cx=!1
if(this.ch)return
u=this.dx
if(u.E(u)>0.0001){u=this.c
t=this.dx.a
if(typeof t!=="number")return t.R()
s=this.y
if(typeof s!=="number")return H.u(s)
u.sU(-t*10*s)
s=this.b
t=this.dx.b
if(typeof t!=="number")return t.R()
u=this.x
if(typeof u!=="number")return H.u(u)
s.sU(-t*10*u)
this.a3()}},
aj:function(a,b,c){var u,t,s
u=this.dy
t=b.e
if(typeof u!=="number")return u.V()
if(u<t){this.dy=t
s=b.y
this.c.ar(0,s)
this.b.ar(0,s)
this.fr=V.kw(this.b.d).m(0,V.l7(this.c.d))}return this.fr},
$ia9:1}
U.e3.prototype={
gB:function(){var u=this.r
if(u==null){u=D.S()
this.r=u}return u},
F:function(a){var u=this.r
if(u!=null)u.H(a)},
aV:function(a){var u,t,s
if(this.a!=null)return!1
this.a=a
u=a.c
t=u.e
if(t==null){t=D.S()
u.e=t
u=t}else u=t
t=this.gh3()
u.h(0,t)
u=this.a.d
s=u.e
if(s==null){s=D.S()
u.e=s
u=s}else u=s
u.h(0,t)
return!0},
h4:function(a){var u,t,s,r
H.f(a,"$iA")
if(!J.R(this.b,this.a.b.c))return
H.k(a,"$icn")
u=this.d
t=a.x.b
s=this.c
if(typeof t!=="number")return t.m()
r=u+t*s
if(u!==r){this.d=r
u=new D.K("zoom",u,r,this,[P.q])
u.b=!0
this.F(u)}},
aj:function(a,b,c){var u,t,s
u=this.e
t=b.e
if(u<t){this.e=t
s=Math.pow(10,this.d)
this.f=V.b2(s,0,0,0,0,s,0,0,0,0,s,0,0,0,0,1)}return this.f},
$ia9:1}
M.de.prototype={
au:function(a){var u
H.f(a,"$iA")
u=this.x
if(u!=null)u.H(a)},
fg:function(){return this.au(null)},
hg:function(a,b){var u,t,s,r,q,p,o,n
u=E.ao
H.l(b,"$ij",[u],"$aj")
for(t=b.length,s=this.gal(),r={func:1,ret:-1,args:[D.A]},q=[r],p=0;p<b.length;b.length===t||(0,H.C)(b),++p){o=b[p]
if(o!=null){n=o.z
if(n==null){n=new D.aY()
n.sa4(null)
n.say(null)
n.c=null
n.d=0
o.z=n}H.n(s,r)
if(n.a==null)n.sa4(H.d([],q))
n=n.a;(n&&C.a).h(n,s)}}u=new D.bP(a,b,this,[u])
u.b=!0
this.au(u)},
hi:function(a,b){var u,t,s,r,q,p
u=E.ao
H.l(b,"$ij",[u],"$aj")
for(t=b.length,s=this.gal(),r=0;r<b.length;b.length===t||(0,H.C)(b),++r){q=b[r]
if(q!=null){p=q.z
if(p==null){p=new D.aY()
p.sa4(null)
p.say(null)
p.c=null
p.d=0
q.z=p}p.M(0,s)}}u=new D.bQ(a,b,this,[u])
u.b=!0
this.au(u)},
seF:function(a){var u,t
u=this.c
if(u!=a){if(u!=null)u.gB().M(0,this.gal())
t=this.c
this.c=a
if(a!=null)a.gB().h(0,this.gal())
u=new D.K("technique",t,this.c,this,[O.bW])
u.b=!0
this.au(u)}},
gB:function(){var u=this.x
if(u==null){u=D.S()
this.x=u}return u},
aQ:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f
u=new E.dL(a,this)
u.b=!0
t=this.e
if(t!=null)t.H(u)
a.eA(this.c)
t=this.b
t.toString
s=a.a
C.b.j1(s,36160,null)
C.b.cp(s,2884)
C.b.cp(s,2929)
C.b.ji(s,513)
r=s.drawingBufferWidth
q=s.drawingBufferHeight
p=t.r
o=p.a
if(typeof r!=="number")return H.u(r)
n=C.e.ai(o*r)
o=p.b
if(typeof q!=="number")return H.u(q)
m=C.e.ai(o*q)
o=C.e.ai(p.c*r)
a.c=o
p=C.e.ai(p.d*q)
a.d=p
C.b.ke(s,n,m,o,p)
C.b.j7(s,t.c)
t=t.a
C.b.j6(s,t.a,t.b,t.c,t.d)
C.b.j5(s,16640)
t=this.a
s=a.c
p=a.d
o=t.c
l=t.d
k=t.e
j=k-l
i=1/Math.tan(o*0.5)
h=V.b2(-i/(s/p),0,0,0,0,i,0,0,0,0,k/j,-k*l/j,0,0,1,0)
t.a
a.cy.ez(h)
s=$.lc
if(s==null){s=V.le()
p=V.ly()
o=$.lu
if(o==null){o=new V.G(0,0,-1)
$.lu=o}o=V.l6(s,p,o)
$.lc=o
g=o}else g=s
s=t.b
if(s!=null){f=s.aj(0,a,t)
if(f!=null)g=f.m(0,g)}a.db.ez(g)
t=this.c
if(t!=null)t.ar(0,a)
for(t=this.d.a,t=new J.at(t,t.length,0,[H.v(t,0)]);t.J();)t.d.ar(0,a)
for(t=this.d.a,t=new J.at(t,t.length,0,[H.v(t,0)]);t.J();)t.d.aQ(a)
this.a.toString
a.cy.cH()
a.db.cH()
this.b.toString
a.ey()},
sff:function(a,b){this.d=H.l(b,"$ia_",[E.ao],"$aa_")},
$iox:1}
A.d3.prototype={}
A.f5.prototype={
j:function(a,b){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<t;++s){r=u[s]
if(r.b===b)return r}return},
jo:function(){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<u.length;u.length===t||(0,H.C)(u),++s){r=u[s]
C.b.dR(r.a,r.c)}},
jk:function(){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<u.length;u.length===t||(0,H.C)(u),++s){r=u[s]
C.b.dP(r.a,r.c)}}}
A.h2.prototype={
f5:function(a7,a8){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6
this.z=a7
u=new P.al("")
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
a7.ix(u)
a7.iE(u)
a7.iy(u)
a7.iM(u)
a7.iN(u)
a7.iG(u)
a7.iR(u)
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
u=new P.al("")
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
s.iB(u)
s.iw(u)
s.iz(u)
s.iC(u)
s.iK(u)
p=s.dy
if(p){m=u.a+="// === Enviromental ===\n"
m+="\n"
u.a=m
m+="uniform samplerCube envSampler;\n"
u.a=m
m+="uniform int nullEnvTxt;\n"
u.a=m
u.a=m+"\n"
s.iI(u)
s.iJ(u)}s.iF(u)
m=u.a+="// === Alpha ===\n"
m+="\n"
u.a=m
l=s.y
if(l!==C.d){m+="uniform float alpha;\n"
u.a=m
if(l!==C.j){m+="uniform int nullAlphaTxt;\n"
u.a=m
if(l===C.h){m+="uniform sampler2D alphaTxt;\n"
u.a=m}else if(l===C.i){m+="uniform samplerCube alphaTxt;\n"
u.a=m}}m+="\n"
u.a=m}m+="float alphaValue()\n"
u.a=m
m+="{\n"
u.a=m
switch(l){case C.d:m+="   return 1.0;\n"
u.a=m
break
case C.j:m+="   return alpha;\n"
u.a=m
break
case C.h:m+="   if(nullAlphaTxt > 0) return alpha;\n"
u.a=m
m+="   float a = alpha*texture2D(alphaTxt, txt2D).a;\n"
u.a=m
m+="   if (a <= 0.000001) discard;\n"
u.a=m
m+="   return a;\n"
u.a=m
break
case C.i:m+="   if(nullAlphaTxt > 0) return alpha;\n"
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
k=H.d([],[P.h])
if(s.b!==C.d)C.a.h(k,"ambient()")
if(s.c!==C.d)C.a.h(k,"diffuse(norm, litVec)")
if(s.d!==C.d)C.a.h(k,"invDiffuse(norm, litVec)")
if(s.e!==C.d)C.a.h(k,"specular(norm, litVec)")
m=u.a+="   return litClr*("+C.a.D(k," + ")+");\n"
m+="}\n"
u.a=m
u.a=m+"\n"
s.iA(u)
s.iH(u)
s.iL(u)
s.iO(u)
s.iP(u)
s.iQ(u)
s.iD(u)}m=u.a+="// === Main ===\n"
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
j=H.d([],[P.h])
if(l){u.a+="   vec3 lightAccum = vec3(0.0, 0.0, 0.0);\n"
C.a.h(j,"lightAccum")
if(s.c!==C.d)u.a+="   setDiffuseColor();\n"
if(s.d!==C.d)u.a+="   setInvDiffuseColor();\n"
if(s.e!==C.d)u.a+="   setSpecularColor();\n"
if(s.z>0)u.a+="   lightAccum += allDirLightValues(norm);\n"
if(s.Q>0)u.a+="   lightAccum += allPointLightValues(norm);\n"
if(s.ch>0)u.a+="   lightAccum += allSpotLightValues(norm);\n"
if(s.cx>0)u.a+="   lightAccum += allTxtDirLightValues(norm);\n"
if(s.cy>0)u.a+="   lightAccum += allTxtPointLightValues(norm);\n"
if(s.db>0)u.a+="   lightAccum += allTxtSpotLightValues(norm);\n"
if(s.dx<=0)u.a+="   lightAccum += nonLightValues(norm);\n"}if(s.a!==C.d)C.a.h(j,"emission()")
if(s.r!==C.d)C.a.h(j,"reflect(refl)")
if(s.x!==C.d)C.a.h(j,"refract(refl)")
if(j.length<=0)C.a.h(j,"vec3(0.0, 0.0, 0.0)")
i="vec4("+C.a.D(j," + ")+", alpha);"
s=u.a
if(o){s+="   gl_FragColor = colorMat*"+i+"\n"
u.a=s}else{s+="   gl_FragColor = "+i+"\n"
u.a=s}s+="}\n"
u.a=s
this.c=n
this.d=s.charCodeAt(0)==0?s:s
this.e=this.de(n,35633)
this.f=this.de(this.d,35632)
s=this.a
q=s.createProgram()
this.r=q
C.b.dK(s,q,this.e)
C.b.dK(s,this.r,this.f)
C.b.jB(s,this.r)
if(!H.lV(C.b.bF(s,this.r,35714))){h=C.b.eT(s,this.r)
C.b.je(s,this.r)
H.t(P.w("Failed to link shader: "+H.m(h)))}this.i8()
this.ia()
this.Q=this.x.j(0,"posAttr")
this.cx=this.x.j(0,"normAttr")
this.ch=this.x.j(0,"binmAttr")
this.cy=this.x.j(0,"txt2DAttr")
this.db=this.x.j(0,"txtCubeAttr")
this.dx=this.x.j(0,"bendAttr")
if(a7.fr)this.id=H.k(this.y.q(0,"invViewMat"),"$iav")
if(t)this.dy=H.k(this.y.q(0,"objMat"),"$iav")
if(r)this.fr=H.k(this.y.q(0,"viewObjMat"),"$iav")
this.fy=H.k(this.y.q(0,"projViewObjMat"),"$iav")
if(a7.x2)this.k1=H.k(this.y.q(0,"txt2DMat"),"$icB")
if(a7.y1)this.k2=H.k(this.y.q(0,"txtCubeMat"),"$iav")
if(a7.y2)this.k3=H.k(this.y.q(0,"colorMat"),"$iav")
this.sfv(H.d([],[A.av]))
t=a7.ap
if(t>0){this.k4=H.f(this.y.q(0,"bendMatCount"),"$iN")
for(g=0;g<t;++g){s=this.r1
r=this.y
q="bendValues["+g+"].mat"
f=r.j(0,q)
if(f==null)H.t(P.w("Required uniform value, "+q+", was not defined or used in shader."));(s&&C.a).h(s,H.k(f,"$iav"))}}t=a7.a
if(t!==C.d){this.r2=H.k(this.y.q(0,"emissionClr"),"$iM")
switch(t){case C.d:break
case C.j:break
case C.h:this.rx=H.k(this.y.q(0,"emissionTxt"),"$iam")
this.x1=H.k(this.y.q(0,"nullEmissionTxt"),"$iN")
break
case C.i:this.ry=H.k(this.y.q(0,"emissionTxt"),"$ian")
this.x1=H.k(this.y.q(0,"nullEmissionTxt"),"$iN")
break}}t=a7.b
if(t!==C.d){this.x2=H.k(this.y.q(0,"ambientClr"),"$iM")
switch(t){case C.d:break
case C.j:break
case C.h:this.y1=H.k(this.y.q(0,"ambientTxt"),"$iam")
this.ap=H.k(this.y.q(0,"nullAmbientTxt"),"$iN")
break
case C.i:this.y2=H.k(this.y.q(0,"ambientTxt"),"$ian")
this.ap=H.k(this.y.q(0,"nullAmbientTxt"),"$iN")
break}}t=a7.c
if(t!==C.d){this.af=H.k(this.y.q(0,"diffuseClr"),"$iM")
switch(t){case C.d:break
case C.j:break
case C.h:this.bk=H.k(this.y.q(0,"diffuseTxt"),"$iam")
this.bl=H.k(this.y.q(0,"nullDiffuseTxt"),"$iN")
break
case C.i:this.dS=H.k(this.y.q(0,"diffuseTxt"),"$ian")
this.bl=H.k(this.y.q(0,"nullDiffuseTxt"),"$iN")
break}}t=a7.d
if(t!==C.d){this.bm=H.k(this.y.q(0,"invDiffuseClr"),"$iM")
switch(t){case C.d:break
case C.j:break
case C.h:this.dT=H.k(this.y.q(0,"invDiffuseTxt"),"$iam")
this.bn=H.k(this.y.q(0,"nullInvDiffuseTxt"),"$iN")
break
case C.i:this.dU=H.k(this.y.q(0,"invDiffuseTxt"),"$ian")
this.bn=H.k(this.y.q(0,"nullInvDiffuseTxt"),"$iN")
break}}t=a7.e
if(t!==C.d){this.bq=H.k(this.y.q(0,"shininess"),"$iZ")
this.bo=H.k(this.y.q(0,"specularClr"),"$iM")
switch(t){case C.d:break
case C.j:break
case C.h:this.dV=H.k(this.y.q(0,"specularTxt"),"$iam")
this.bp=H.k(this.y.q(0,"nullSpecularTxt"),"$iN")
break
case C.i:this.dW=H.k(this.y.q(0,"specularTxt"),"$ian")
this.bp=H.k(this.y.q(0,"nullSpecularTxt"),"$iN")
break}}switch(a7.f){case C.d:break
case C.j:break
case C.h:this.dX=H.k(this.y.q(0,"bumpTxt"),"$iam")
this.br=H.k(this.y.q(0,"nullBumpTxt"),"$iN")
break
case C.i:this.dY=H.k(this.y.q(0,"bumpTxt"),"$ian")
this.br=H.k(this.y.q(0,"nullBumpTxt"),"$iN")
break}if(a7.dy){this.dZ=H.k(this.y.q(0,"envSampler"),"$ian")
this.e_=H.k(this.y.q(0,"nullEnvTxt"),"$iN")
t=a7.r
if(t!==C.d){this.bs=H.k(this.y.q(0,"reflectClr"),"$iM")
switch(t){case C.d:break
case C.j:break
case C.h:this.e0=H.k(this.y.q(0,"reflectTxt"),"$iam")
this.bt=H.k(this.y.q(0,"nullReflectTxt"),"$iN")
break
case C.i:this.e1=H.k(this.y.q(0,"reflectTxt"),"$ian")
this.bt=H.k(this.y.q(0,"nullReflectTxt"),"$iN")
break}}t=a7.x
if(t!==C.d){this.bu=H.k(this.y.q(0,"refraction"),"$iZ")
this.bv=H.k(this.y.q(0,"refractClr"),"$iM")
switch(t){case C.d:break
case C.j:break
case C.h:this.e2=H.k(this.y.q(0,"refractTxt"),"$iam")
this.bw=H.k(this.y.q(0,"nullRefractTxt"),"$iN")
break
case C.i:this.e3=H.k(this.y.q(0,"refractTxt"),"$ian")
this.bw=H.k(this.y.q(0,"nullRefractTxt"),"$iN")
break}}}t=a7.y
if(t!==C.d){this.bx=H.k(this.y.q(0,"alpha"),"$iZ")
switch(t){case C.d:break
case C.j:break
case C.h:this.e4=H.k(this.y.q(0,"alphaTxt"),"$iam")
this.by=H.k(this.y.q(0,"nullAlphaTxt"),"$iN")
break
case C.i:this.e5=H.k(this.y.q(0,"alphaTxt"),"$ian")
this.by=H.k(this.y.q(0,"nullAlphaTxt"),"$iN")
break}}this.sfh(H.d([],[A.cA]))
this.sfi(H.d([],[A.cC]))
this.sfj(H.d([],[A.cD]))
this.sfk(H.d([],[A.cE]))
this.sfl(H.d([],[A.cF]))
this.sfm(H.d([],[A.cG]))
if(a7.k2){t=a7.z
if(t>0){this.e6=H.f(this.y.q(0,"dirLightCount"),"$iN")
for(g=0;g<t;++g){s=this.y
r="dirLights["+g+"].viewDir"
f=s.j(0,r)
if(f==null)H.t(P.w("Required uniform value, "+r+", was not defined or used in shader."))
H.k(f,"$iM")
s=this.y
r="dirLights["+g+"].color"
e=s.j(0,r)
if(e==null)H.t(P.w("Required uniform value, "+r+", was not defined or used in shader."))
H.k(e,"$iM")
s=this.cq;(s&&C.a).h(s,new A.cA(g,f,e))}}t=a7.Q
if(t>0){this.e7=H.f(this.y.q(0,"pntLightCount"),"$iN")
for(g=0;g<t;++g){s=this.y
r="pntLights["+g+"].point"
f=s.j(0,r)
if(f==null)H.t(P.w("Required uniform value, "+r+", was not defined or used in shader."))
H.k(f,"$iM")
s=this.y
r="pntLights["+g+"].viewPnt"
e=s.j(0,r)
if(e==null)H.t(P.w("Required uniform value, "+r+", was not defined or used in shader."))
H.k(e,"$iM")
s=this.y
r="pntLights["+g+"].color"
d=s.j(0,r)
if(d==null)H.t(P.w("Required uniform value, "+r+", was not defined or used in shader."))
H.k(d,"$iM")
s=this.y
r="pntLights["+g+"].att0"
c=s.j(0,r)
if(c==null)H.t(P.w("Required uniform value, "+r+", was not defined or used in shader."))
H.k(c,"$iZ")
s=this.y
r="pntLights["+g+"].att1"
b=s.j(0,r)
if(b==null)H.t(P.w("Required uniform value, "+r+", was not defined or used in shader."))
H.k(b,"$iZ")
s=this.y
r="pntLights["+g+"].att2"
a=s.j(0,r)
if(a==null)H.t(P.w("Required uniform value, "+r+", was not defined or used in shader."))
H.k(a,"$iZ")
s=this.cr;(s&&C.a).h(s,new A.cC(g,f,e,d,c,b,a))}}t=a7.ch
if(t>0){this.e8=H.f(this.y.q(0,"spotLightCount"),"$iN")
for(g=0;g<t;++g){s=this.y
r="spotLights["+g+"].objPnt"
f=s.j(0,r)
if(f==null)H.t(P.w("Required uniform value, "+r+", was not defined or used in shader."))
H.k(f,"$iM")
s=this.y
r="spotLights["+g+"].objDir"
e=s.j(0,r)
if(e==null)H.t(P.w("Required uniform value, "+r+", was not defined or used in shader."))
H.k(e,"$iM")
s=this.y
r="spotLights["+g+"].viewPnt"
d=s.j(0,r)
if(d==null)H.t(P.w("Required uniform value, "+r+", was not defined or used in shader."))
H.k(d,"$iM")
s=this.y
r="spotLights["+g+"].color"
c=s.j(0,r)
if(c==null)H.t(P.w("Required uniform value, "+r+", was not defined or used in shader."))
H.k(c,"$iM")
s=this.y
r="spotLights["+g+"].cutoff"
b=s.j(0,r)
if(b==null)H.t(P.w("Required uniform value, "+r+", was not defined or used in shader."))
H.k(b,"$iZ")
s=this.y
r="spotLights["+g+"].coneAngle"
a=s.j(0,r)
if(a==null)H.t(P.w("Required uniform value, "+r+", was not defined or used in shader."))
H.k(a,"$iZ")
s=this.y
r="spotLights["+g+"].att0"
a0=s.j(0,r)
if(a0==null)H.t(P.w("Required uniform value, "+r+", was not defined or used in shader."))
H.k(a0,"$iZ")
s=this.y
r="spotLights["+g+"].att1"
a1=s.j(0,r)
if(a1==null)H.t(P.w("Required uniform value, "+r+", was not defined or used in shader."))
H.k(a1,"$iZ")
s=this.y
r="spotLights["+g+"].att2"
a2=s.j(0,r)
if(a2==null)H.t(P.w("Required uniform value, "+r+", was not defined or used in shader."))
H.k(a2,"$iZ")
s=this.cs;(s&&C.a).h(s,new A.cD(g,f,e,d,c,b,a,a0,a1,a2))}}t=a7.cx
if(t>0){this.e9=H.f(this.y.q(0,"txtDirLightCount"),"$iN")
for(g=0;g<t;++g){s=this.y
r="txtDirLights["+g+"].objUp"
f=s.j(0,r)
if(f==null)H.t(P.w("Required uniform value, "+r+", was not defined or used in shader."))
H.k(f,"$iM")
s=this.y
r="txtDirLights["+g+"].objRight"
e=s.j(0,r)
if(e==null)H.t(P.w("Required uniform value, "+r+", was not defined or used in shader."))
H.k(e,"$iM")
s=this.y
r="txtDirLights["+g+"].objDir"
d=s.j(0,r)
if(d==null)H.t(P.w("Required uniform value, "+r+", was not defined or used in shader."))
H.k(d,"$iM")
s=this.y
r="txtDirLights["+g+"].viewDir"
c=s.j(0,r)
if(c==null)H.t(P.w("Required uniform value, "+r+", was not defined or used in shader."))
H.k(c,"$iM")
s=this.y
r="txtDirLights["+g+"].color"
b=s.j(0,r)
if(b==null)H.t(P.w("Required uniform value, "+r+", was not defined or used in shader."))
H.k(b,"$iM")
s=this.y
r="txtDirLights["+g+"].nullTxt"
a=s.j(0,r)
if(a==null)H.t(P.w("Required uniform value, "+r+", was not defined or used in shader."))
H.k(a,"$iN")
s=this.y
r="txtDirLightsTxt2D"+g
a0=s.j(0,r)
if(a0==null)H.t(P.w("Required uniform value, "+r+", was not defined or used in shader."))
H.k(a0,"$iam")
s=this.ct;(s&&C.a).h(s,new A.cE(g,f,e,d,c,b,a0,a))}}t=a7.cy
if(t>0){this.ea=H.f(this.y.q(0,"txtPntLightCount"),"$iN")
for(g=0;g<t;++g){s=this.y
r="txtPntLights["+g+"].point"
f=s.j(0,r)
if(f==null)H.t(P.w("Required uniform value, "+r+", was not defined or used in shader."))
H.k(f,"$iM")
s=this.y
r="txtPntLights["+g+"].viewPnt"
e=s.j(0,r)
if(e==null)H.t(P.w("Required uniform value, "+r+", was not defined or used in shader."))
H.k(e,"$iM")
s=this.y
r="txtPntLights["+g+"].invViewRotMat"
d=s.j(0,r)
if(d==null)H.t(P.w("Required uniform value, "+r+", was not defined or used in shader."))
H.k(d,"$icB")
s=this.y
r="txtPntLights["+g+"].color"
c=s.j(0,r)
if(c==null)H.t(P.w("Required uniform value, "+r+", was not defined or used in shader."))
H.k(c,"$iM")
s=this.y
r="txtPntLights["+g+"].nullTxt"
b=s.j(0,r)
if(b==null)H.t(P.w("Required uniform value, "+r+", was not defined or used in shader."))
H.k(b,"$iN")
s=this.y
r="txtPntLights["+g+"].att0"
a=s.j(0,r)
if(a==null)H.t(P.w("Required uniform value, "+r+", was not defined or used in shader."))
H.k(a,"$iZ")
s=this.y
r="txtPntLights["+g+"].att1"
a0=s.j(0,r)
if(a0==null)H.t(P.w("Required uniform value, "+r+", was not defined or used in shader."))
H.k(a0,"$iZ")
s=this.y
r="txtPntLights["+g+"].att2"
a1=s.j(0,r)
if(a1==null)H.t(P.w("Required uniform value, "+r+", was not defined or used in shader."))
H.k(a1,"$iZ")
s=this.y
r="txtPntLightsTxtCube"+g
a2=s.j(0,r)
if(a2==null)H.t(P.w("Required uniform value, "+r+", was not defined or used in shader."))
H.k(a2,"$ian")
s=this.cu;(s&&C.a).h(s,new A.cF(g,f,e,d,c,a2,b,a,a0,a1))}}t=a7.db
if(t>0){this.eb=H.f(this.y.q(0,"txtSpotLightCount"),"$iN")
for(g=0;g<t;++g){s=this.y
r="txtSpotLights["+g+"].objPnt"
f=s.j(0,r)
if(f==null)H.t(P.w("Required uniform value, "+r+", was not defined or used in shader."))
H.k(f,"$iM")
s=this.y
r="txtSpotLights["+g+"].objDir"
e=s.j(0,r)
if(e==null)H.t(P.w("Required uniform value, "+r+", was not defined or used in shader."))
H.k(e,"$iM")
s=this.y
r="txtSpotLights["+g+"].objUp"
d=s.j(0,r)
if(d==null)H.t(P.w("Required uniform value, "+r+", was not defined or used in shader."))
H.k(d,"$iM")
s=this.y
r="txtSpotLights["+g+"].objRight"
c=s.j(0,r)
if(c==null)H.t(P.w("Required uniform value, "+r+", was not defined or used in shader."))
H.k(c,"$iM")
s=this.y
r="txtSpotLights["+g+"].viewPnt"
b=s.j(0,r)
if(b==null)H.t(P.w("Required uniform value, "+r+", was not defined or used in shader."))
H.k(b,"$iM")
s=this.y
r="txtSpotLights["+g+"].nullTxt"
a=s.j(0,r)
if(a==null)H.t(P.w("Required uniform value, "+r+", was not defined or used in shader."))
H.k(a,"$iN")
s=this.y
r="txtSpotLights["+g+"].color"
a0=s.j(0,r)
if(a0==null)H.t(P.w("Required uniform value, "+r+", was not defined or used in shader."))
H.k(a0,"$iM")
s=this.y
r="txtSpotLights["+g+"].tuScalar"
a1=s.j(0,r)
if(a1==null)H.t(P.w("Required uniform value, "+r+", was not defined or used in shader."))
H.k(a1,"$iZ")
s=this.y
r="txtSpotLights["+g+"].tvScalar"
a2=s.j(0,r)
if(a2==null)H.t(P.w("Required uniform value, "+r+", was not defined or used in shader."))
H.k(a2,"$iZ")
s=this.y
r="txtSpotLights["+g+"].att0"
a3=s.j(0,r)
if(a3==null)H.t(P.w("Required uniform value, "+r+", was not defined or used in shader."))
H.k(a3,"$iZ")
s=this.y
r="txtSpotLights["+g+"].att1"
a4=s.j(0,r)
if(a4==null)H.t(P.w("Required uniform value, "+r+", was not defined or used in shader."))
H.k(a4,"$iZ")
s=this.y
r="txtSpotLights["+g+"].att2"
a5=s.j(0,r)
if(a5==null)H.t(P.w("Required uniform value, "+r+", was not defined or used in shader."))
H.k(a5,"$iZ")
s=this.y
r="txtSpotLightsTxt2D"+g
a6=s.j(0,r)
if(a6==null)H.t(P.w("Required uniform value, "+r+", was not defined or used in shader."))
H.k(a6,"$iam")
s=this.cv;(s&&C.a).h(s,new A.cG(g,f,e,d,c,b,a6,a,a0,a1,a2,a3,a4,a5))}}}},
ad:function(a,b,c){C.b.T(b.a,b.d,1)},
a9:function(a,b,c){C.b.T(b.a,b.d,1)},
sfv:function(a){this.r1=H.l(a,"$ib",[A.av],"$ab")},
sfh:function(a){this.cq=H.l(a,"$ib",[A.cA],"$ab")},
sfi:function(a){this.cr=H.l(a,"$ib",[A.cC],"$ab")},
sfj:function(a){this.cs=H.l(a,"$ib",[A.cD],"$ab")},
sfk:function(a){this.ct=H.l(a,"$ib",[A.cE],"$ab")},
sfl:function(a){this.cu=H.l(a,"$ib",[A.cF],"$ab")},
sfm:function(a){this.cv=H.l(a,"$ib",[A.cG],"$ab")}}
A.h5.prototype={
ix:function(a){var u,t,s
if(!this.x1)return
u=a.a+="struct BendingValue\n"
u+="{\n"
a.a=u
u+="   mat4 mat;\n"
a.a=u
u+="};\n"
a.a=u
a.a=u+"uniform int bendMatCount;\n"
u=a.a+="uniform BendingValue bendValues["+this.ap+"];\n"
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
iE:function(a){var u
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
iy:function(a){var u
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
iM:function(a){var u,t
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
iN:function(a){var u,t
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
iG:function(a){var u
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
iR:function(a){var u
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
aw:function(a,b,c){var u
if(b===C.d)return
u=a.a+="uniform vec3 "+c+"Clr;\n"
if(b===C.j)return
if(0>=c.length)return H.e(c,0)
u+="uniform int null"+(c[0].toUpperCase()+C.c.aE(c,1))+"Txt;\n"
a.a=u
if(b===C.h)a.a=u+("uniform sampler2D "+c+"Txt;\n")
else if(b===C.i)a.a=u+("uniform samplerCube "+c+"Txt;\n")},
iB:function(a){var u,t
u=this.a
if(u===C.d)return
t=a.a+="// === Emission ===\n"
a.a=t+"\n"
this.aw(a,u,"emission")
t=a.a+="\n"
t+="vec3 emission()\n"
a.a=t
t+="{\n"
a.a=t
switch(u){case C.d:u=t
break
case C.j:u=t+"   return emissionClr;\n"
a.a=u
break
case C.h:u=t+"   if(nullEmissionTxt > 0) return emissionClr;\n"
a.a=u
u+="   return emissionClr*texture2D(emissionTxt, txt2D).rgb;\n"
a.a=u
break
case C.i:u=t+"   if(nullEmissionTxt > 0) return emissionClr;\n"
a.a=u
u+="   return emissionClr*textureCube(emissionTxt, txtCube).rgb;\n"
a.a=u
break
default:u=t}u+="}\n"
a.a=u
a.a=u+"\n"},
iw:function(a){var u,t
u=this.b
if(u===C.d)return
t=a.a+="// === Ambient ===\n"
a.a=t+"\n"
this.aw(a,u,"ambient")
t=a.a+="\n"
t+="vec3 ambient()\n"
a.a=t
t+="{\n"
a.a=t
switch(u){case C.d:u=t
break
case C.j:u=t+"   return ambientClr;\n"
a.a=u
break
case C.h:u=t+"   if(nullAmbientTxt > 0) return ambientClr;\n"
a.a=u
u+="   return ambientClr*texture2D(ambientTxt, txt2D).rgb;\n"
a.a=u
break
case C.i:u=t+"   if(nullAmbientTxt > 0) return ambientClr;\n"
a.a=u
u+="   return ambientClr*textureCube(ambientTxt, txtCube).rgb;\n"
a.a=u
break
default:u=t}u+="}\n"
a.a=u
a.a=u+"\n"},
iz:function(a){var u,t
u=this.c
if(u===C.d)return
t=a.a+="// === Diffuse ===\n"
a.a=t+"\n"
this.aw(a,u,"diffuse")
t=a.a+="vec3 diffuseColor;\n"
t+="\n"
a.a=t
t+="void setDiffuseColor()\n"
a.a=t
t+="{\n"
a.a=t
switch(u){case C.d:u=t
break
case C.j:u=t+"   diffuseColor = diffuseClr;\n"
a.a=u
break
case C.h:u=t+"   if(nullDiffuseTxt > 0) diffuseColor = diffuseClr;\n"
a.a=u
u+="   else diffuseColor = diffuseClr*texture2D(diffuseTxt, txt2D).rgb;\n"
a.a=u
break
case C.i:u=t+"   if(nullDiffuseTxt > 0) diffuseColor = diffuseClr;\n"
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
iC:function(a){var u,t
u=this.d
if(u===C.d)return
t=a.a+="// === Inverse Diffuse ===\n"
a.a=t+"\n"
this.aw(a,u,"invDiffuse")
t=a.a+="vec3 invDiffuseColor;\n"
t+="\n"
a.a=t
t+="void setInvDiffuseColor()\n"
a.a=t
t+="{\n"
a.a=t
switch(u){case C.d:u=t
break
case C.j:u=t+"   invDiffuseColor = invDiffuseClr;\n"
a.a=u
break
case C.h:u=t+"   if(nullInvDiffuseTxt > 0) invDiffuseColor = invDiffuseClr;\n"
a.a=u
u+="   else invDiffuseColor = invDiffuseClr*texture2D(invDiffuseTxt, txt2D).rgb;\n"
a.a=u
break
case C.i:u=t+"   if(nullInvDiffuseTxt > 0) invDiffuseColor = invDiffuseClr;\n"
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
iK:function(a){var u,t
u=this.e
if(u===C.d)return
t=a.a+="// === Specular ===\n"
a.a=t+"\n"
this.aw(a,u,"specular")
t=a.a+="uniform float shininess;\n"
t+="vec3 specularColor;\n"
a.a=t
t+="\n"
a.a=t
t+="void setSpecularColor()\n"
a.a=t
t+="{\n"
a.a=t
switch(u){case C.d:u=t
break
case C.j:u=t+"   specularColor = specularClr;\n"
a.a=u
break
case C.h:u=t+"   if(nullSpecularTxt > 0) specularColor = specularClr;\n"
a.a=u
u+="   else specularColor = specularClr*texture2D(specularTxt, txt2D).rgb;\n"
a.a=u
break
case C.i:u=t+"   if(nullSpecularTxt > 0) specularColor = specularClr;\n"
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
iF:function(a){var u,t
if(!this.r1)return
u=a.a+="// === Normal ===\n"
u+="\n"
a.a=u
t=this.f
switch(t){case C.d:break
case C.j:break
case C.h:u+="uniform sampler2D bumpTxt;\n"
a.a=u
u+="uniform int nullBumpTxt;\n"
a.a=u
u+="\n"
a.a=u
break
case C.i:u+="uniform samplerCube bumpTxt;\n"
a.a=u
u+="uniform int nullBumpTxt;\n"
a.a=u
u+="\n"
a.a=u
break}u+="vec3 normal()\n"
a.a=u
u+="{\n"
a.a=u
switch(t){case C.d:u+="   return normalize(normalVec);\n"
a.a=u
break
case C.j:u+="   return normalize(normalVec);\n"
a.a=u
break
case C.h:u+="   if(nullBumpTxt > 0) return normalVec;\n"
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
case C.i:u+="   if(nullBumpTxt > 0) return normalVec;\n"
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
iI:function(a){var u,t
u=this.r
if(u===C.d)return
t=a.a+="// === Reflection ===\n"
a.a=t+"\n"
this.aw(a,u,"reflect")
t=a.a+="\n"
t+="vec3 reflect(vec3 refl)\n"
a.a=t
t+="{\n"
a.a=t
t+="   if(nullEnvTxt > 0) return vec3(0.0, 0.0, 0.0);\n"
a.a=t
switch(u){case C.d:u=t
break
case C.j:u=t+"   vec3 scalar = reflectClr;\n"
a.a=u
break
case C.h:u=t+"   if(nullReflectTxt > 0) return vec3(0.0, 0.0, 0.0);\n"
a.a=u
u+="   vec3 scalar = reflectClr*texture2D(reflectTxt, txt2D).rgb;\n"
a.a=u
break
case C.i:u=t+"   if(nullReflectTxt > 0) return vec3(0.0, 0.0, 0.0);\n"
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
iJ:function(a){var u,t
u=this.x
if(u===C.d)return
t=a.a+="// === Refraction ===\n"
a.a=t+"\n"
this.aw(a,u,"refract")
t=a.a+="uniform float refraction;\n"
t+="\n"
a.a=t
t+="vec3 refract(vec3 refl)\n"
a.a=t
t+="{\n"
a.a=t
t+="   if(nullEnvTxt > 0) return vec3(0.0, 0.0, 0.0);\n"
a.a=t
switch(u){case C.d:u=t
break
case C.j:u=t+"   vec3 scalar = refractClr;\n"
a.a=u
break
case C.h:u=t+"   if(nullRefractTxt > 0) return vec3(0.0, 0.0, 0.0);\n"
a.a=u
u+="   vec3 scalar = refractClr*texture2D(refractTxt, txt2D).rgb;\n"
a.a=u
break
case C.i:u=t+"   if(nullRefractTxt > 0) return vec3(0.0, 0.0, 0.0);\n"
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
iA:function(a){var u,t
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
iH:function(a){var u,t
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
iL:function(a){var u,t
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
iO:function(a){var u,t,s
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
iP:function(a){var u,t,s
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
iQ:function(a){var u,t,s
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
iD:function(a){var u
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
i:function(a){return this.af}}
A.cA.prototype={}
A.cE.prototype={}
A.cC.prototype={}
A.cF.prototype={}
A.cD.prototype={}
A.cG.prototype={}
A.cv.prototype={
f8:function(a,b){this.c=null
this.d=null
this.e=null
this.f=null
this.r=null
this.x=null
this.y=null},
de:function(a,b){var u,t,s
u=this.a
t=C.b.jc(u,b)
C.b.eZ(u,t,a)
C.b.j9(u,t)
if(!H.lV(C.b.eV(u,t,35713))){s=C.b.eU(u,t)
C.b.jf(u,t)
throw H.c(P.w("Error compiling shader '"+H.m(t)+"': "+H.m(s)))}return t},
i8:function(){var u,t,s,r,q,p
u=H.d([],[A.d3])
t=this.a
s=H.af(C.b.bF(t,this.r,35721))
if(typeof s!=="number")return H.u(s)
r=0
for(;r<s;++r){q=C.b.eP(t,this.r,r)
p=C.b.eR(t,this.r,q.name)
C.a.h(u,new A.d3(t,q.name,p))}this.x=new A.f5(u)},
ia:function(){var u,t,s,r,q,p
u=H.d([],[A.dX])
t=this.a
s=H.af(C.b.bF(t,this.r,35718))
if(typeof s!=="number")return H.u(s)
r=0
for(;r<s;++r){q=C.b.eQ(t,this.r,r)
p=C.b.eW(t,this.r,q.name)
C.a.h(u,this.jd(q.type,q.size,q.name,p))}this.y=new A.ij(u)},
aI:function(a,b,c){var u,t
u=this.a
t=this.r
if(a===1)return new A.N(u,t,b,c)
else return A.kz(u,t,b,a,c)},
fE:function(a,b,c){var u,t
u=this.a
t=this.r
if(a===1)return new A.am(u,t,b,c)
else return A.kz(u,t,b,a,c)},
fF:function(a,b,c){var u,t
u=this.a
t=this.r
if(a===1)return new A.an(u,t,b,c)
else return A.kz(u,t,b,a,c)},
bh:function(a,b){return new P.ee(a+" uniform variables are unsupported by all browsers.\n"+("Please change the type of "+H.m(b)+"."))},
jd:function(a,b,c,d){switch(a){case 5120:return this.aI(b,c,d)
case 5121:return this.aI(b,c,d)
case 5122:return this.aI(b,c,d)
case 5123:return this.aI(b,c,d)
case 5124:return this.aI(b,c,d)
case 5125:return this.aI(b,c,d)
case 5126:return new A.Z(this.a,this.r,c,d)
case 35664:return new A.id(this.a,this.r,c,d)
case 35665:return new A.M(this.a,this.r,c,d)
case 35666:return new A.ih(this.a,this.r,c,d)
case 35667:return new A.ie(this.a,this.r,c,d)
case 35668:return new A.ig(this.a,this.r,c,d)
case 35669:return new A.ii(this.a,this.r,c,d)
case 35674:return new A.ik(this.a,this.r,c,d)
case 35675:return new A.cB(this.a,this.r,c,d)
case 35676:return new A.av(this.a,this.r,c,d)
case 35678:return this.fE(b,c,d)
case 35680:return this.fF(b,c,d)
case 35670:throw H.c(this.bh("BOOL",c))
case 35671:throw H.c(this.bh("BOOL_VEC2",c))
case 35672:throw H.c(this.bh("BOOL_VEC3",c))
case 35673:throw H.c(this.bh("BOOL_VEC4",c))
default:throw H.c(P.w("Unknown uniform variable type "+H.m(a)+" for "+H.m(c)+"."))}}}
A.bJ.prototype={
i:function(a){return this.b}}
A.dX.prototype={}
A.ij.prototype={
j:function(a,b){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<t;++s){r=u[s]
if(r.c===b)return r}return},
q:function(a,b){var u=this.j(0,b)
if(u==null)throw H.c(P.w("Required uniform value, "+b+", was not defined or used in shader."))
return u},
i:function(a){return this.N()},
ju:function(a){var u,t,s,r
for(u=this.a,t=u.length,s="",r=0;r<u.length;u.length===t||(0,H.C)(u),++r)s+=u[r].i(0)+a
return s},
N:function(){return this.ju("\n")}}
A.N.prototype={
i:function(a){return"Uniform1i: "+H.m(this.c)}}
A.ie.prototype={
i:function(a){return"Uniform2i: "+H.m(this.c)}}
A.ig.prototype={
i:function(a){return"Uniform3i: "+H.m(this.c)}}
A.ii.prototype={
i:function(a){return"Uniform4i: "+H.m(this.c)}}
A.ic.prototype={
i:function(a){return"Uniform1iv: "+H.m(this.c)},
siu:function(a){this.e=H.l(a,"$ib",[P.o],"$ab")}}
A.Z.prototype={
i:function(a){return"Uniform1f: "+H.m(this.c)}}
A.id.prototype={
i:function(a){return"Uniform2f: "+H.m(this.c)}}
A.M.prototype={
i:function(a){return"Uniform3f: "+H.m(this.c)}}
A.ih.prototype={
i:function(a){return"Uniform4f: "+H.m(this.c)}}
A.ik.prototype={
i:function(a){return"Uniform1Mat2 "+H.m(this.c)}}
A.cB.prototype={
ak:function(a){var u=new Float32Array(H.bY(H.l(a,"$ib",[P.q],"$ab")))
C.b.eJ(this.a,this.d,!1,u)},
i:function(a){return"UniformMat3: "+H.m(this.c)}}
A.av.prototype={
ak:function(a){var u=new Float32Array(H.bY(H.l(a,"$ib",[P.q],"$ab")))
C.b.eK(this.a,this.d,!1,u)},
i:function(a){return"UniformMat4: "+H.m(this.c)}}
A.am.prototype={
i:function(a){return"UniformSampler2D: "+H.m(this.c)}}
A.an.prototype={
i:function(a){return"UniformSamplerCube: "+H.m(this.c)}}
F.jB.prototype={
$3:function(a,b,c){var u,t,s
u=this.a
t=u.a.cC(u.b,b).cC(u.d.cC(u.c,b),c)
a.sZ(0,new V.Y(t.a,t.b,t.c))
a.scP(t.v(0,Math.sqrt(t.E(t))))
u=1-b
s=1-c
a.scd(new V.aL(this.b+b*c,this.c+u*c,this.d+b*s,this.e+u*s))
u=this.f
if(u!=null)u.$3(a,b,c)},
$S:5}
F.jL.prototype={
$2:function(a,b){var u=this.a
return u+b*(this.b-u)},
$S:11}
F.jN.prototype={
$3:function(a,b,c){var u,t,s,r,q,p
u=6.283185307179586*b
t=Math.sin(u)
s=Math.cos(u)
r=-1+c*2
q=this.a.$2(b,c)
if(typeof q!=="number")return H.u(q)
t=-t*q
p=s*q
a.sZ(0,new V.Y(t,p,r))
p=new V.G(t,p,r)
a.scP(p.v(0,Math.sqrt(p.E(p))))
a.scd(new V.aL(1-c,2+c,-1,-1))},
$S:5}
F.jO.prototype={
$1:function(a){return this.a.$2(a,1)},
$S:22}
F.jP.prototype={
$1:function(a){return this.a.$2(1-a,0)},
$S:22}
F.kc.prototype={
$2:function(a,b){return 0},
$S:11}
F.kd.prototype={
$3:function(a,b,c){var u,t,s
u=this.a.a.$2(b,c)
if(typeof u!=="number")return H.u(u)
t=a.f
s=new V.G(t.a,t.b,t.c)
u=s.v(0,Math.sqrt(s.E(s))).m(0,this.b+u)
a.sZ(0,new V.Y(u.a,u.b,u.c))},
$S:5}
F.kf.prototype={
$1:function(a){return new V.Y(Math.cos(a),Math.sin(a),0)},
$S:16}
F.jZ.prototype={
$1:function(a){var u,t,s
u=this.a*a
t=2+Math.cos(u)
s=this.b*a
return new V.Y(t*Math.cos(s)/2,t*Math.sin(s)/2,Math.sin(u)/2)},
$S:16}
F.jM.prototype={
$3:function(a,b,c){var u,t,s,r,q,p,o,n,m,l
u=b*6.283185307179586
t=this.a
s=this.b
r=J.kT(t.$1(u),s)
s=J.mu(J.kT(t.$1(u+3.141592653589793/this.c),s),r)
s=new V.G(s.a,s.b,s.c)
q=s.v(0,Math.sqrt(s.E(s)))
t=$.lv
if(t==null){t=new V.G(1,0,0)
$.lv=t
p=t}else p=t
t=q.aA(!J.R(q,p)?V.lz():p)
o=t.v(0,Math.sqrt(t.E(t)))
t=o.aA(q)
p=t.v(0,Math.sqrt(t.E(t)))
n=c*6.283185307179586
t=Math.cos(n)
s=this.d
m=Math.sin(n)
t=p.m(0,t*s)
s=o.m(0,m*s)
m=t.c
l=s.c
if(typeof m!=="number")return m.p()
if(typeof l!=="number")return H.u(l)
a.sZ(0,J.mt(r,new V.Y(t.a-s.a,t.b-s.b,m-l)))},
$S:5}
F.jS.prototype={
$2:function(a,b){return 0},
$S:11}
F.jT.prototype={
$3:function(a,b,c){var u,t,s,r
u=b*2-1
t=c*2-1
a.sZ(0,new V.Y(u,t,this.a.a.$2(b,c)))
s=new V.G(u,t,1)
a.scP(s.v(0,Math.sqrt(s.E(s))))
s=1-b
r=1-c
a.scd(new V.aL(b*c,2+s*c,4+b*r,6+s*r))},
$S:5}
F.a6.prototype={
aY:function(){if(!this.gaZ()){C.a.M(this.a.a.d.b,this)
this.a.a.a1()}this.c2()
this.c3()
this.hY()},
c7:function(a){this.a=a
C.a.h(a.d.b,this)},
c8:function(a){this.b=a
C.a.h(a.d.c,this)},
i7:function(a){this.c=a
C.a.h(a.d.d,this)},
c2:function(){var u=this.a
if(u!=null){C.a.M(u.d.b,this)
this.a=null}},
c3:function(){var u=this.b
if(u!=null){C.a.M(u.d.c,this)
this.b=null}},
hY:function(){var u=this.c
if(u!=null){C.a.M(u.d.d,this)
this.c=null}},
gaZ:function(){return this.a==null||this.b==null||this.c==null},
fu:function(){var u,t,s,r,q
u=this.a
t=u==null?null:u.r
u=this.b
s=u==null?null:u.r
u=this.c
r=u==null?null:u.r
q=V.cI()
if(t!=null)q=q.n(0,t)
if(s!=null)q=q.n(0,s)
if(r!=null)q=q.n(0,r)
if(q.en())return
return q.v(0,Math.sqrt(q.E(q)))},
fA:function(){var u,t,s,r,q
u=this.a
t=u==null?null:u.f
u=this.b
s=u==null?null:u.f
u=this.c
r=u==null?null:u.f
if(t==null||s==null||r==null)return
u=s.p(0,t)
u=new V.G(u.a,u.b,u.c)
q=u.v(0,Math.sqrt(u.E(u)))
u=r.p(0,t)
u=new V.G(u.a,u.b,u.c)
u=q.aA(u.v(0,Math.sqrt(u.E(u))))
return u.v(0,Math.sqrt(u.E(u)))},
cj:function(){if(this.d!=null)return!0
var u=this.fu()
if(u==null){u=this.fA()
if(u==null)return!1}this.d=u
this.a.a.a1()
return!0},
ft:function(){var u,t,s,r,q
u=this.a
t=u==null?null:u.x
u=this.b
s=u==null?null:u.x
u=this.c
r=u==null?null:u.x
q=V.cI()
if(t!=null)q=q.n(0,t)
if(s!=null)q=q.n(0,s)
if(r!=null)q=q.n(0,r)
if(q.en())return
return q.v(0,Math.sqrt(q.E(q)))},
fz:function(){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f
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
if(Math.abs(i-0)<$.J().a){u=m.p(0,p)
u=new V.G(u.a,u.b,u.c)
h=u.v(0,Math.sqrt(u.E(u)))
if(j.a-k.a<0)h=h.R(0)}else{g=(u-l.b)/i
u=m.p(0,p).m(0,g).n(0,p).p(0,s)
u=new V.G(u.a,u.b,u.c)
h=u.v(0,Math.sqrt(u.E(u)))
j=j.a
k=k.a
if((j-k)*g+k-l.a<0)h=h.R(0)}u=this.d
if(u!=null){f=u.v(0,Math.sqrt(u.E(u)))
u=f.aA(h)
u=u.v(0,Math.sqrt(u.E(u))).aA(f)
h=u.v(0,Math.sqrt(u.E(u)))}return h},
cg:function(){if(this.e!=null)return!0
var u=this.ft()
if(u==null){u=this.fz()
if(u==null)return!1}this.e=u
this.a.a.a1()
return!0},
gj8:function(a){if(J.R(this.a,this.b))return!0
if(J.R(this.b,this.c))return!0
if(J.R(this.c,this.a))return!0
return!1},
t:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.N()},
C:function(a){var u,t
if(this.gaZ())return a+"disposed"
u=a+C.c.ab(J.as(this.a.e),0)+", "+C.c.ab(J.as(this.b.e),0)+", "+C.c.ab(J.as(this.c.e),0)+" {"
t=this.d
u=t!=null?u+(t.i(0)+", "):u+"-, "
t=this.e
return t!=null?u+(t.i(0)+"}"):u+"-}"},
N:function(){return this.C("")}}
F.fA.prototype={}
F.hM.prototype={
b1:function(a,b,c){var u,t
u=b.a
u.a.a.A()
u=u.e
t=c.a
t.a.a.A()
if(u==t.e){u=b.b
u.a.a.A()
u=u.e
t=c.b
t.a.a.A()
if(u==t.e){u=b.c
u.a.a.A()
u=u.e
t=c.c
t.a.a.A()
t=u==t.e
u=t}else u=!1
return u}else{u=b.a
u.a.a.A()
u=u.e
t=c.b
t.a.a.A()
if(u==t.e){u=b.b
u.a.a.A()
u=u.e
t=c.c
t.a.a.A()
if(u==t.e){u=b.c
u.a.a.A()
u=u.e
t=c.a
t.a.a.A()
t=u==t.e
u=t}else u=!1
return u}else{u=b.a
u.a.a.A()
u=u.e
t=c.c
t.a.a.A()
if(u==t.e){u=b.b
u.a.a.A()
u=u.e
t=c.a
t.a.a.A()
if(u==t.e){u=b.c
u.a.a.A()
u=u.e
t=c.b
t.a.a.A()
t=u==t.e
u=t}else u=!1
return u}else return!1}}}}
F.bf.prototype={
aY:function(){if(!this.gaZ()){C.a.M(this.a.a.c.b,this)
this.a.a.a1()}this.c2()
this.c3()},
c7:function(a){this.a=a
C.a.h(a.c.b,this)},
c8:function(a){this.b=a
C.a.h(a.c.c,this)},
c2:function(){var u=this.a
if(u!=null){C.a.M(u.c.b,this)
this.a=null}},
c3:function(){var u=this.b
if(u!=null){C.a.M(u.c.c,this)
this.b=null}},
gaZ:function(){return this.a==null||this.b==null},
t:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.N()},
C:function(a){if(this.gaZ())return a+"disposed"
return a+C.c.ab(J.as(this.a.e),0)+", "+C.c.ab(J.as(this.b.e),0)},
N:function(){return this.C("")}}
F.fQ.prototype={}
F.ib.prototype={
b1:function(a,b,c){var u,t
u=b.a
u.a.a.A()
u=u.e
t=c.a
t.a.a.A()
if(u==t.e){u=b.b
u.a.a.A()
u=u.e
t=c.b
t.a.a.A()
return u==t.e}else{u=b.a
u.a.a.A()
u=u.e
t=c.b
t.a.a.A()
if(u==t.e){u=b.b
u.a.a.A()
u=u.e
t=c.a
t.a.a.A()
return u==t.e}else return!1}}}
F.by.prototype={
t:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.N()},
C:function(a){var u=this.a
if(u==null)return a+"disposed"
return a+C.c.ab(J.as(u.e),0)},
N:function(){return this.C("")}}
F.bV.prototype={
gB:function(){var u=this.e
if(u==null){u=D.S()
this.e=u}return u},
b2:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i,h
u=this.e
if(u!=null)++u.d
a.a.A()
t=this.a.c.length
for(u=a.a.c,s=u.length,r=0;r<u.length;u.length===s||(0,H.C)(u),++r){q=u[r]
this.a.h(0,q.ja())}this.a.A()
for(u=a.b.b,s=u.length,r=0;r<u.length;u.length===s||(0,H.C)(u),++r){p=u[r]
o=this.a
n=p.a
n.a.a.A()
n=n.e
if(typeof n!=="number")return n.n()
n+=t
o=o.c
if(n>=o.length)return H.e(o,n)
m=o[n]
this.b.a.a.h(0,m)
n=new F.by()
if(m.a==null)H.t(P.w("May not create a point with a vertex which is not attached to a shape."))
n.a=m
C.a.h(m.b.b,n)
C.a.h(n.a.a.b.b,n)
o=n.a.a.e
if(o!=null)o.H(null)}for(u=a.c.b,s=u.length,r=0;r<u.length;u.length===s||(0,H.C)(u),++r){l=u[r]
o=this.a
n=l.a
n.a.a.A()
n=n.e
if(typeof n!=="number")return n.n()
n+=t
o=o.c
if(n>=o.length)return H.e(o,n)
k=o[n]
n=this.a
o=l.b
o.a.a.A()
o=o.e
if(typeof o!=="number")return o.n()
o+=t
n=n.c
if(o>=n.length)return H.e(n,o)
j=n[o]
o=this.c.a
o.a.h(0,k)
o.a.h(0,j)
F.mQ(k,j)}for(u=a.d.b,s=u.length,r=0;r<u.length;u.length===s||(0,H.C)(u),++r){i=u[r]
o=this.a
n=i.a
n.a.a.A()
n=n.e
if(typeof n!=="number")return n.n()
n+=t
o=o.c
if(n>=o.length)return H.e(o,n)
k=o[n]
n=this.a
o=i.b
o.a.a.A()
o=o.e
if(typeof o!=="number")return o.n()
o+=t
n=n.c
if(o>=n.length)return H.e(n,o)
j=n[o]
o=this.a
n=i.c
n.a.a.A()
n=n.e
if(typeof n!=="number")return n.n()
n+=t
o=o.c
if(n>=o.length)return H.e(o,n)
h=o[n]
n=this.d.a
n.a.h(0,k)
n.a.h(0,j)
n.a.h(0,h)
F.cg(k,j,h)}u=this.e
if(u!=null)u.ah(0)},
ae:function(){var u,t
u=this.e
if(u!=null)++u.d
t=this.d.ae()||!1
if(!this.a.ae())t=!1
u=this.e
if(u!=null)u.ah(0)
return t},
jE:function(a,b){var u,t,s,r,q,p,o
u=this.e
if(u!=null)++u.d
u=this.a.c
t=H.d(u.slice(0),[H.v(u,0)])
for(u=[F.ae];t.length!==0;){s=C.a.gjs(t)
C.a.jW(t,0)
if(s!=null){r=H.d([],u)
C.a.h(r,s)
for(q=t.length,p=0;p<t.length;t.length===q||(0,H.C)(t),++p){o=t[p]
if(o!=null&&a.b1(0,s,o)){C.a.h(r,o)
C.a.M(t,o)}}if(r.length>1)b.b2(r)}}this.a.A()
this.c.cL()
this.d.cL()
this.b.jX()
this.c.cM(new F.ib())
this.d.cM(new F.hM())
u=this.e
if(u!=null)u.ah(0)},
iY:function(a){this.jE(new F.iF(),new F.hl())},
c9:function(){return this.iY(null)},
j3:function(a0,a1){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a
u=this.a.c.length
a1.toString
t=$.bq()
s=a1.a
r=(s&t.a)!==0?1:0
if((s&$.bp().a)!==0)++r
if((s&$.bo().a)!==0)++r
if((s&$.br().a)!==0)++r
if((s&$.bs().a)!==0)++r
if((s&$.d_().a)!==0)++r
if((s&$.d0().a)!==0)++r
if((s&$.c7().a)!==0)++r
if((s&$.bn().a)!==0)++r
q=a1.gcY(a1)
p=q*4
t=new Array(u*q)
t.fixed$length=Array
s=P.q
o=H.d(t,[s])
t=new Array(r)
t.fixed$length=Array
n=H.d(t,[Z.d6])
for(m=0,l=0;l<r;++l){k=a1.j_(l)
j=k.gcY(k)
C.a.l(n,l,new Z.d6(k,j,m*4,p,0))
for(i=0;i<u;++i){t=this.a.c
if(i>=t.length)return H.e(t,i)
h=t[i].jC(k)
g=m+i*q
for(f=0;f<h.length;++f){C.a.l(o,g,h[f]);++g}}m+=j}H.l(o,"$ib",[s],"$ab")
t=a0.a
e=t.createBuffer()
C.b.an(t,34962,e)
C.b.dN(t,34962,new Float32Array(H.bY(o)),35044)
C.b.an(t,34962,null)
d=new Z.d7(new Z.e5(34962,e),n,a1)
d.sfS(H.d([],[Z.bv]))
if(this.b.b.length!==0){s=P.o
c=H.d([],[s])
for(l=0;b=this.b.b,l<b.length;++l){b=b[l].a
b.a.a.A()
C.a.h(c,b.e)}a=Z.kC(t,34963,H.l(c,"$ib",[s],"$ab"))
C.a.h(d.b,new Z.bv(0,c.length,a))}if(this.c.b.length!==0){s=P.o
c=H.d([],[s])
for(l=0;b=this.c.b,l<b.length;++l){b=b[l].a
b.a.a.A()
C.a.h(c,b.e)
b=this.c.b
if(l>=b.length)return H.e(b,l)
b=b[l].b
b.a.a.A()
C.a.h(c,b.e)}a=Z.kC(t,34963,H.l(c,"$ib",[s],"$ab"))
C.a.h(d.b,new Z.bv(1,c.length,a))}if(this.d.b.length!==0){s=P.o
c=H.d([],[s])
for(l=0;b=this.d.b,l<b.length;++l){b=b[l].a
b.a.a.A()
C.a.h(c,b.e)
b=this.d.b
if(l>=b.length)return H.e(b,l)
b=b[l].b
b.a.a.A()
C.a.h(c,b.e)
b=this.d.b
if(l>=b.length)return H.e(b,l)
b=b[l].c
b.a.a.A()
C.a.h(c,b.e)}a=Z.kC(t,34963,H.l(c,"$ib",[s],"$ab"))
C.a.h(d.b,new Z.bv(4,c.length,a))}return d},
i:function(a){var u=H.d([],[P.h])
if(this.a.c.length!==0){C.a.h(u,"Vertices:")
C.a.h(u,this.a.C("   "))}if(this.b.b.length!==0){C.a.h(u,"Points:")
C.a.h(u,this.b.C("   "))}if(this.c.b.length!==0){C.a.h(u,"Lines:")
C.a.h(u,this.c.C("   "))}if(this.d.b.length!==0){C.a.h(u,"Faces:")
C.a.h(u,this.d.C("   "))}return C.a.D(u,"\n")},
ag:function(a){var u=this.e
if(u!=null)u.H(a)},
a1:function(){return this.ag(null)},
$ioy:1}
F.hG.prototype={
iU:function(a){var u,t,s,r,q,p,o
H.l(a,"$ib",[F.ae],"$ab")
u=H.d([],[F.a6])
t=a.length
if(t>0){s=a[0]
for(r=this.a,q=2;q<t;++q){p=q-1
o=a.length
if(p>=o)return H.e(a,p)
p=a[p]
if(q>=o)return H.e(a,q)
o=a[q]
r.a.h(0,s)
r.a.h(0,p)
r.a.h(0,o)
C.a.h(u,F.cg(s,p,o))}}return u},
iV:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k,j,i,h
H.l(c,"$ib",[F.ae],"$ab")
u=H.d([],[F.a6])
for(t=this.a,s=b,r=0,q=!1,p=1;p<a;++p,++r,++s){for(o=q,n=1;n<b;++n,s=j){m=c.length
if(r<0||r>=m)return H.e(c,r)
l=c[r];++r
if(r>=m)return H.e(c,r)
k=c[r]
j=s+1
if(j<0||j>=m)return H.e(c,j)
i=c[j]
if(s<0||s>=m)return H.e(c,s)
h=c[s]
m=t.a
if(o){m.h(0,l)
t.a.h(0,k)
t.a.h(0,i)
C.a.h(u,F.cg(l,k,i))
t.a.h(0,l)
t.a.h(0,i)
t.a.h(0,h)
C.a.h(u,F.cg(l,i,h))}else{m.h(0,k)
t.a.h(0,i)
t.a.h(0,h)
C.a.h(u,F.cg(k,i,h))
t.a.h(0,k)
t.a.h(0,h)
t.a.h(0,l)
C.a.h(u,F.cg(k,h,l))}o=!o}q=!q}return u},
gk:function(a){return this.b.length},
cM:function(a){var u,t,s,r,q,p,o,n
for(u=this.a,t=u.a.c.length-1;t>=0;--t){s=u.a.c
if(t>=s.length)return H.e(s,t)
r=s[t]
for(s=r.d,q=s.b.length+s.c.length+s.d.length-1;q>=0;--q){p=r.d.j(0,q)
for(o=q-1;o>=0;--o){n=r.d.j(0,o)
if(a.b1(0,p,n)){p.aY()
break}}}}},
cL:function(){var u,t,s
for(u=this.b.length-1;u>=0;--u){t=this.b
if(u>=t.length)return H.e(t,u)
s=t[u]
t=s.gj8(s)
if(t)s.aY()}},
ae:function(){var u,t,s,r
for(u=this.b,t=u.length,s=!0,r=0;r<u.length;u.length===t||(0,H.C)(u),++r)if(!u[r].cj())s=!1
return s},
ci:function(){var u,t,s,r
for(u=this.b,t=u.length,s=!0,r=0;r<u.length;u.length===t||(0,H.C)(u),++r)if(!u[r].cg())s=!1
return s},
i:function(a){return this.N()},
C:function(a){var u,t,s,r
u=H.d([],[P.h])
for(t=this.b,s=t.length,r=0;r<t.length;t.length===s||(0,H.C)(t),++r)C.a.h(u,t[r].C(a))
return C.a.D(u,"\n")},
N:function(){return this.C("")},
sfL:function(a){this.b=H.l(a,"$ib",[F.a6],"$ab")}}
F.hH.prototype={
gk:function(a){return this.b.length},
cM:function(a){var u,t,s,r,q,p,o,n
for(u=this.a,t=u.a.c.length-1;t>=0;--t){s=u.a.c
if(t>=s.length)return H.e(s,t)
r=s[t]
for(s=r.c,q=s.b.length+s.c.length-1;q>=0;--q){p=r.c.j(0,q)
for(o=q-1;o>=0;--o){n=r.c.j(0,o)
if(a.b1(0,p,n)){p.aY()
break}}}}},
cL:function(){var u,t,s
for(u=this.b.length-1;u>=0;--u){t=this.b
if(u>=t.length)return H.e(t,u)
s=t[u]
t=J.R(s.a,s.b)
if(t)s.aY()}},
i:function(a){return this.N()},
C:function(a){var u,t,s,r
u=H.d([],[P.h])
t=this.b.length
for(s=0;s<t;++s){r=this.b
if(s>=r.length)return H.e(r,s)
C.a.h(u,r[s].C(a+(""+s+". ")))}return C.a.D(u,"\n")},
N:function(){return this.C("")},
sfW:function(a){this.b=H.l(a,"$ib",[F.bf],"$ab")}}
F.hI.prototype={
gk:function(a){return this.b.length},
jX:function(){var u,t,s
for(u=this.b.length-1;u>=0;--u){t=this.b
if(u>=t.length)return H.e(t,u)
t=t[u]
s=t.a
if(s.b.b.length>1){if(s!=null){C.a.M(s.a.b.b,t)
s=t.a.a.e
if(s!=null)s.H(null)}s=t.a
if(s!=null){C.a.M(s.b.b,t)
t.a=null}}}},
i:function(a){return this.N()},
C:function(a){var u,t,s,r
u=H.d([],[P.h])
for(t=this.b,s=t.length,r=0;r<t.length;t.length===s||(0,H.C)(t),++r)C.a.h(u,t[r].C(a))
return C.a.D(u,"\n")},
N:function(){return this.C("")},
sc_:function(a){this.b=H.l(a,"$ib",[F.by],"$ab")}}
F.ae.prototype={
cm:function(a){var u,t,s,r,q,p,o
u=this.f
t=this.r
s=this.x
r=this.y
q=this.z
p=this.Q
o=this.ch
return F.e4(this.cx,s,p,u,t,r,q,a,o)},
ja:function(){return this.cm(null)},
sZ:function(a,b){var u
if(!J.R(this.f,b)){this.f=b
u=this.a
if(u!=null)u.a1()}},
scP:function(a){var u
if(!J.R(this.z,a)){this.z=a
u=this.a
if(u!=null)u.a1()}},
scd:function(a){var u
if(!J.R(this.cx,a)){this.cx=a
u=this.a
if(u!=null)u.a1()}},
jC:function(a){var u,t
if(a.t(0,$.bq())){u=this.f
t=[P.q]
if(u==null)return H.d([0,0,0],t)
else return H.d([u.a,u.b,u.c],t)}else if(a.t(0,$.bp())){u=this.r
t=[P.q]
if(u==null)return H.d([0,1,0],t)
else return H.d([u.a,u.b,u.c],t)}else if(a.t(0,$.bo())){u=this.x
t=[P.q]
if(u==null)return H.d([0,0,1],t)
else return H.d([u.a,u.b,u.c],t)}else if(a.t(0,$.br())){u=this.y
t=[P.q]
if(u==null)return H.d([0,0],t)
else return H.d([u.a,u.b],t)}else if(a.t(0,$.bs())){u=this.z
t=[P.q]
if(u==null)return H.d([0,0,0],t)
else return H.d([u.a,u.b,u.c],t)}else if(a.t(0,$.d_())){u=this.Q
t=[P.q]
if(u==null)return H.d([1,1,1],t)
else return H.d([u.a,u.b,u.c],t)}else if(a.t(0,$.d0())){u=this.Q
t=[P.q]
if(u==null)return H.d([1,1,1,1],t)
else return H.d([u.a,u.b,u.c,u.d],t)}else if(a.t(0,$.c7()))return H.d([this.ch],[P.q])
else if(a.t(0,$.bn())){u=this.cx
t=[P.q]
if(u==null)return H.d([-1,-1,-1,-1],t)
else return H.d([u.a,u.b,u.c,u.d],t)}else return H.d([],[P.q])},
cj:function(){var u,t
u={}
if(this.r!=null)return!0
t=this.a
if(t!=null){t=t.e
if(t!=null)++t.d}u.a=V.cI()
this.d.L(0,new F.iK(u))
u=u.a
this.r=u.v(0,Math.sqrt(u.E(u)))
u=this.a
if(u!=null){u.a1()
u=this.a.e
if(u!=null)u.ah(0)}return!0},
cg:function(){var u,t
u={}
if(this.x!=null)return!0
t=this.a
if(t!=null){t=t.e
if(t!=null)++t.d}u.a=V.cI()
this.d.L(0,new F.iJ(u))
u=u.a
this.x=u.v(0,Math.sqrt(u.E(u)))
u=this.a
if(u!=null){u.a1()
u=this.a.e
if(u!=null)u.ah(0)}return!0},
t:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.N()},
C:function(a){var u,t,s
u=H.d([],[P.h])
C.a.h(u,C.c.ab(J.as(this.e),0))
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
s=C.a.D(u,", ")
return a+"{"+s+"}"},
N:function(){return this.C("")}}
F.iK.prototype={
$1:function(a){var u,t
H.f(a,"$ia6")
u=a==null?null:a.d
if(u!=null){t=this.a
t.a=t.a.n(0,u)}},
$S:6}
F.iJ.prototype={
$1:function(a){var u,t
H.f(a,"$ia6")
u=a==null?null:a.e
if(u!=null){t=this.a
t.a=t.a.n(0,u)}},
$S:6}
F.iA.prototype={
A:function(){var u,t,s,r
if(this.b){u=this.c
t=u.length
for(s=0,r=0;r<t;++r){if(r>=u.length)return H.e(u,r)
u[r].e=s;++s}this.b=!1}},
h:function(a,b){var u,t
u=b.a
if(u!=null){if(u===this.a)return!1
throw H.c(P.w("May not add a vertex already attached to another shape to this shape."))}u=this.c
b.e=u.length
t=this.a
b.a=t
C.a.h(u,b)
t.a1()
return!0},
iX:function(a,b,c,d,e,f,g,h,i){var u=F.e4(a,b,c,d,e,f,g,h,i)
this.h(0,u)
return u},
iW:function(a,b,c,d,e,f){return this.iX(a,null,b,c,d,e,f,null,0)},
gk:function(a){return this.c.length},
ae:function(){var u,t,s
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.C)(u),++s)u[s].cj()
return!0},
ci:function(){var u,t,s
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.C)(u),++s)u[s].cg()
return!0},
j4:function(){var u,t,s,r,q,p,o,n
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.C)(u),++s){r=u[s]
if(r.z==null){q=r.r
p=q.a
o=q.b
n=q.c
if(typeof n!=="number")return n.m()
n=q.v(0,Math.sqrt(p*p+o*o+n*n))
if(!J.R(r.z,n)){r.z=n
q=r.a
if(q!=null){q=q.e
if(q!=null)q.H(null)}}}}return!0},
i:function(a){return this.N()},
C:function(a){var u,t,s,r
this.A()
u=H.d([],[P.h])
for(t=this.c,s=t.length,r=0;r<t.length;t.length===s||(0,H.C)(t),++r)C.a.h(u,t[r].C(a))
return C.a.D(u,"\n")},
N:function(){return this.C("")},
siv:function(a){this.c=H.l(a,"$ib",[F.ae],"$ab")}}
F.iB.prototype={
gk:function(a){return this.b.length+this.c.length+this.d.length},
j:function(a,b){var u,t,s
u=this.b
t=u.length
if(b<t){if(b<0)return H.e(u,b)
return u[b]}b-=t
u=this.c
s=u.length
if(b<s){if(b<0)return H.e(u,b)
return u[b]}b-=s
u=this.d
if(b<0||b>=u.length)return H.e(u,b)
return u[b]},
L:function(a,b){H.n(b,{func:1,ret:-1,args:[F.a6]})
C.a.L(this.b,b)
C.a.L(this.c,new F.iC(this,b))
C.a.L(this.d,new F.iD(this,b))},
i:function(a){return this.N()},
C:function(a){var u,t,s,r
u=H.d([],[P.h])
for(t=this.b,s=t.length,r=0;r<t.length;t.length===s||(0,H.C)(t),++r)C.a.h(u,t[r].C(a))
for(t=this.c,s=t.length,r=0;r<t.length;t.length===s||(0,H.C)(t),++r)C.a.h(u,t[r].C(a))
for(t=this.d,s=t.length,r=0;r<t.length;t.length===s||(0,H.C)(t),++r)C.a.h(u,t[r].C(a))
return C.a.D(u,"\n")},
N:function(){return this.C("")},
sfM:function(a){this.b=H.l(a,"$ib",[F.a6],"$ab")},
sfN:function(a){this.c=H.l(a,"$ib",[F.a6],"$ab")},
sfO:function(a){this.d=H.l(a,"$ib",[F.a6],"$ab")}}
F.iC.prototype={
$1:function(a){H.f(a,"$ia6")
if(!J.R(a.a,this.a))this.b.$1(a)},
$S:6}
F.iD.prototype={
$1:function(a){var u
H.f(a,"$ia6")
u=this.a
if(!J.R(a.a,u)&&!J.R(a.b,u))this.b.$1(a)},
$S:6}
F.iE.prototype={
gk:function(a){return this.b.length+this.c.length},
j:function(a,b){var u,t,s
u=this.b
t=u.length
if(b>=t){u=this.c
s=b-t
if(s<0||s>=u.length)return H.e(u,s)
return u[s]}else{if(b<0)return H.e(u,b)
return u[b]}},
i:function(a){return this.N()},
C:function(a){var u,t,s,r
u=H.d([],[P.h])
for(t=this.b,s=t.length,r=0;r<t.length;t.length===s||(0,H.C)(t),++r)C.a.h(u,t[r].C(a))
for(t=this.c,s=t.length,r=0;r<t.length;t.length===s||(0,H.C)(t),++r)C.a.h(u,t[r].C(a))
return C.a.D(u,"\n")},
N:function(){return this.C("")},
sfX:function(a){this.b=H.l(a,"$ib",[F.bf],"$ab")},
sfY:function(a){this.c=H.l(a,"$ib",[F.bf],"$ab")}}
F.iG.prototype={}
F.iF.prototype={
b1:function(a,b,c){return J.R(b.f,c.f)}}
F.iH.prototype={}
F.hl.prototype={
b2:function(a){var u,t,s,r,q,p,o,n,m,l,k
H.l(a,"$ib",[F.ae],"$ab")
u=V.cI()
for(t=a.length,s=0;s<t;++s){r=a[s].r
if(r!=null){q=u.a
p=r.a
o=u.b
n=r.b
m=u.c
r=r.c
if(typeof m!=="number")return m.n()
if(typeof r!=="number")return H.u(r)
u=new V.G(q+p,o+n,m+r)}}u=u.v(0,Math.sqrt(u.E(u)))
for(t=a.length,r=u==null,s=0;s<a.length;a.length===t||(0,H.C)(a),++s){l=a[s]
if(r)k=null
else{q=u.a
p=u.b
o=u.c
if(typeof o!=="number")return o.m()
k=u.v(0,Math.sqrt(q*q+p*p+o*o))}if(!J.R(l.r,k)){l.r=k
q=l.a
if(q!=null){q=q.e
if(q!=null)q.H(null)}}}return}}
F.iI.prototype={
gk:function(a){return this.b.length},
i:function(a){return this.N()},
C:function(a){var u,t,s,r
u=H.d([],[P.h])
for(t=this.b,s=t.length,r=0;r<t.length;t.length===s||(0,H.C)(t),++r)C.a.h(u,t[r].C(a))
return C.a.D(u,"\n")},
N:function(){return this.C("")},
sc_:function(a){this.b=H.l(a,"$ib",[F.by],"$ab")}}
O.dt.prototype={
gB:function(){var u=this.dy
if(u==null){u=D.S()
this.dy=u}return u},
a8:function(a){var u
H.f(a,"$iA")
u=this.dy
if(u!=null)u.H(a)},
he:function(){return this.a8(null)},
dA:function(a){H.f(a,"$iA")
this.a=null
this.a8(a)},
i3:function(){return this.dA(null)},
h8:function(a,b){var u=V.ak
u=new D.bP(a,H.l(b,"$ij",[u],"$aj"),this,[u])
u.b=!0
this.a8(u)},
ha:function(a,b){var u=V.ak
u=new D.bQ(a,H.l(b,"$ij",[u],"$aj"),this,[u])
u.b=!0
this.a8(u)},
da:function(){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7
u=this.dx
t=C.f.a2(u.e.length+3,4)*4
s=C.f.a2(u.f.length+3,4)*4
r=C.f.a2(u.r.length+3,4)*4
q=C.f.a2(u.x.length+3,4)*4
p=C.f.a2(u.y.length+3,4)*4
o=C.f.a2(u.z.length+3,4)*4
n=C.f.a2(this.e.a.length+3,4)*4
u=this.f.c
m=this.r.c
l=this.x.c
k=this.y.c
j=this.z.c
i=this.Q.c
h=this.cx.c
g=this.cy.c
f=this.db.c
e="MaterialLight_"+C.f.i(u.a)+C.f.i(m.a)+C.f.i(l.a)+C.f.i(k.a)+C.f.i(j.a)+C.f.i(i.a)+C.f.i(h.a)+C.f.i(g.a)+C.f.i(f.a)
e+"_"
e+"_0"
e+"_00"
e+"_000"
e=e+"_000_"+n+"_"+t+"_"+s+"_"+r+"_"+q+"_"+p+"_"+o
d=h!==C.d||g!==C.d
c=m!==C.d||l!==C.d||k!==C.d||j!==C.d
b=j===C.d
a=!b||d
a0=l!==C.d||k!==C.d||!b||i!==C.d||d
b=i===C.d
a1=!b
a2=u===C.h||m===C.h||l===C.h||k===C.h||j===C.h||i===C.h||h===C.h||g===C.h||f===C.h
a3=u===C.i||m===C.i||l===C.i||k===C.i||j===C.i||i===C.i||h===C.i||g===C.i||f===C.i
a4=s+p+q+r+o>0
a5=n>0
a6=a0||!b||a
a7=$.bq()
if(a0){b=$.bp()
a7=new Z.b8(a7.a|b.a)}if(a1){b=$.bo()
a7=new Z.b8(a7.a|b.a)}if(a2){b=$.br()
a7=new Z.b8(a7.a|b.a)}if(a3){b=$.bs()
a7=new Z.b8(a7.a|b.a)}if(a5){b=$.bn()
a7=new Z.b8(a7.a|b.a)}return new A.h5(u,m,l,k,j,i,h,g,f,t,s,r,q,p,o,t+s+r+q+p+o,d,d,a4,a6,!0,!1,!1,c,a4,a,a0,a1,a2,a3,a5,!1,!1,!1,n,e.charCodeAt(0)==0?e:e,a7)},
W:function(a,b){H.l(a,"$ib",[T.dQ],"$ab")},
ar:function(a,b){var u,t,s,r,q
for(u=this.dx.a,u=new J.at(u,u.length,0,[H.v(u,0)]);u.J();){t=u.d
t.toString
s=$.iz
if(s==null){s=new V.G(0,0,1)
$.iz=s}t.a=s
r=t.b
if(r!=null){q=r.a
if(q!=null)t.a=q.cQ(s)}}},
jZ:function(a4,a5){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3
u=this.a
if(u==null){u=this.da()
t=a4.fr.j(0,u.af)
if(t==null){t=A.mY(u,a4.a)
s=t.b
if(s.length===0)H.t(P.w("May not cache a shader with no name."))
if(a4.fr.bj(0,s))H.t(P.w('Shader cache already contains a shader by the name "'+s+'".'))
a4.fr.l(0,s,t)}this.a=t
a5.e=null
u=t}r=u.z
q=r.bk
u=a5.e
if(!(u instanceof Z.d7)){a5.e=null
u=null}if(u==null||!u.d.t(0,q)){u=r.r1
if(u)a5.d.ae()
p=r.r2
if(p){o=a5.d
n=o.e
if(n!=null)++n.d
o.d.ci()
o.a.ci()
o=o.e
if(o!=null)o.ah(0)}o=r.ry
if(o){n=a5.d
m=n.e
if(m!=null)++m.d
n.a.j4()
n=n.e
if(n!=null)n.ah(0)}l=a5.d.j3(new Z.iM(a4.a),q)
l.aO($.bq()).e=this.a.Q.c
if(u)l.aO($.bp()).e=this.a.cx.c
if(p)l.aO($.bo()).e=this.a.ch.c
if(r.rx)l.aO($.br()).e=this.a.cy.c
if(o)l.aO($.bs()).e=this.a.db.c
if(r.x1)l.aO($.bn()).e=this.a.dx.c
a5.e=l}u=T.dQ
k=H.d([],[u])
p=this.a
o=a4.a
C.b.eM(o,p.r)
p.x.jo()
if(r.fx){p=this.a
n=a4.dx
n=n.ga_(n)
p=p.dy
p.toString
p.ak(n.ac(0,!0))}if(r.fy){p=this.a
n=a4.cx
if(n==null){n=a4.db
n=n.ga_(n)
m=a4.dx
m=n.m(0,m.ga_(m))
a4.cx=m
n=m}p=p.fr
p.toString
p.ak(n.ac(0,!0))}p=this.a
n=a4.ch
if(n==null){n=a4.gjV()
m=a4.dx
m=n.m(0,m.ga_(m))
a4.ch=m
n=m}p=p.fy
p.toString
p.ak(n.ac(0,!0))
if(r.x2){p=this.a
n=this.b
p=p.k1
p.toString
p.ak(C.n.ac(n,!0))}if(r.y1){p=this.a
n=this.c
p=p.k2
p.toString
p.ak(C.n.ac(n,!0))}if(r.y2){p=this.a
n=this.d
p=p.k3
p.toString
p.ak(C.n.ac(n,!0))}if(r.ap>0){j=this.e.a.length
p=this.a.k4
C.b.T(p.a,p.d,j)
for(p=[P.q],i=0;i<j;++i){n=this.a
m=this.e.a
if(i>=m.length)return H.e(m,i)
m=m[i]
n.toString
H.f(m,"$iak")
n=n.r1
if(i>=n.length)return H.e(n,i)
n=n[i]
h=new Float32Array(H.bY(H.l(m.ac(0,!0),"$ib",p,"$ab")))
C.b.eK(n.a,n.d,!1,h)}}switch(r.a){case C.d:break
case C.j:p=this.a
n=this.f.f
p=p.r2
p.toString
m=n.a
g=n.b
n=n.c
C.b.w(p.a,p.d,m,g,n)
break
case C.h:this.W(k,this.f.d)
p=this.a
n=this.f.d
p.ad(p.rx,p.x1,n)
n=this.a
p=this.f.f
n=n.r2
n.toString
m=p.a
g=p.b
p=p.c
C.b.w(n.a,n.d,m,g,p)
break
case C.i:this.W(k,this.f.e)
p=this.a
n=this.f.e
p.a9(p.ry,p.x1,n)
n=this.a
p=this.f.f
n=n.r2
n.toString
m=p.a
g=p.b
p=p.c
C.b.w(n.a,n.d,m,g,p)
break}if(r.k2){switch(r.b){case C.d:break
case C.j:p=this.a
n=this.r.f
p=p.x2
p.toString
m=n.a
g=n.b
n=n.c
C.b.w(p.a,p.d,m,g,n)
break
case C.h:this.W(k,this.r.d)
p=this.a
n=this.r.d
p.ad(p.y1,p.ap,n)
n=this.a
p=this.r.f
n=n.x2
n.toString
m=p.a
g=p.b
p=p.c
C.b.w(n.a,n.d,m,g,p)
break
case C.i:this.W(k,this.r.e)
p=this.a
n=this.r.e
p.a9(p.y2,p.ap,n)
n=this.a
p=this.r.f
n=n.x2
n.toString
m=p.a
g=p.b
p=p.c
C.b.w(n.a,n.d,m,g,p)
break}switch(r.c){case C.d:break
case C.j:p=this.a
n=this.x.f
p=p.af
p.toString
m=n.a
g=n.b
n=n.c
C.b.w(p.a,p.d,m,g,n)
break
case C.h:this.W(k,this.x.d)
p=this.a
n=this.x.d
p.ad(p.bk,p.bl,n)
n=this.a
p=this.x.f
n=n.af
n.toString
m=p.a
g=p.b
p=p.c
C.b.w(n.a,n.d,m,g,p)
break
case C.i:this.W(k,this.x.e)
p=this.a
n=this.x.e
p.a9(p.dS,p.bl,n)
n=this.a
p=this.x.f
n=n.af
n.toString
m=p.a
g=p.b
p=p.c
C.b.w(n.a,n.d,m,g,p)
break}switch(r.d){case C.d:break
case C.j:p=this.a
n=this.y.f
p=p.bm
p.toString
m=n.a
g=n.b
n=n.c
C.b.w(p.a,p.d,m,g,n)
break
case C.h:this.W(k,this.y.d)
p=this.a
n=this.y.d
p.ad(p.dT,p.bn,n)
n=this.a
p=this.y.f
n=n.bm
n.toString
m=p.a
g=p.b
p=p.c
C.b.w(n.a,n.d,m,g,p)
break
case C.i:this.W(k,this.y.e)
p=this.a
n=this.y.e
p.a9(p.dU,p.bn,n)
n=this.a
p=this.y.f
n=n.bm
n.toString
m=p.a
g=p.b
p=p.c
C.b.w(n.a,n.d,m,g,p)
break}switch(r.e){case C.d:break
case C.j:p=this.a
n=this.z.f
p=p.bo
p.toString
m=n.a
g=n.b
n=n.c
C.b.w(p.a,p.d,m,g,n)
n=this.a
g=this.z.ch
n=n.bq
C.b.O(n.a,n.d,g)
break
case C.h:this.W(k,this.z.d)
p=this.a
n=this.z.d
p.ad(p.dV,p.bp,n)
n=this.a
p=this.z.f
n=n.bo
n.toString
m=p.a
g=p.b
p=p.c
C.b.w(n.a,n.d,m,g,p)
p=this.a
g=this.z.ch
p=p.bq
C.b.O(p.a,p.d,g)
break
case C.i:this.W(k,this.z.e)
p=this.a
n=this.z.e
p.a9(p.dW,p.bp,n)
n=this.a
p=this.z.f
n=n.bo
n.toString
m=p.a
g=p.b
p=p.c
C.b.w(n.a,n.d,m,g,p)
p=this.a
g=this.z.ch
p=p.bq
C.b.O(p.a,p.d,g)
break}if(r.z>0){j=this.dx.e.length
p=this.a.e6
C.b.T(p.a,p.d,j)
p=a4.db
f=p.ga_(p)
for(p=this.dx.e,n=p.length,e=0,d=0;d<p.length;p.length===n||(0,H.C)(p),++d){c=p[d]
m=this.a.cq
if(e>=m.length)return H.e(m,e)
b=m[e]
m=f.cQ(c.a)
g=m.a
a=m.b
a0=m.c
if(typeof a0!=="number")return a0.m()
a0=m.v(0,Math.sqrt(g*g+a*a+a0*a0))
a=b.b
g=a0.a
m=a0.b
a0=a0.c
C.b.w(a.a,a.d,g,m,a0)
a0=c.c
m=b.c
C.b.w(m.a,m.d,a0.a,a0.b,a0.c);++e}}if(r.Q>0){j=this.dx.f.length
p=this.a.e7
C.b.T(p.a,p.d,j)
p=a4.db
f=p.ga_(p)
for(p=this.dx.f,n=p.length,e=0,d=0;d<p.length;p.length===n||(0,H.C)(p),++d){c=p[d]
m=this.a.cr
if(e>=m.length)return H.e(m,e)
b=m[e]
m=c.gb6(c)
g=b.b
C.b.w(g.a,g.d,m.a,m.b,m.c)
m=f.ba(c.gb6(c))
g=b.c
C.b.w(g.a,g.d,m.a,m.b,m.c)
m=c.gao(c)
g=b.d
C.b.w(g.a,g.d,m.a,m.b,m.c)
m=c.gca()
g=b.e
C.b.O(g.a,g.d,m)
m=c.gcb()
g=b.f
C.b.O(g.a,g.d,m)
m=c.gcc()
g=b.r
C.b.O(g.a,g.d,m);++e}}if(r.ch>0){j=this.dx.r.length
p=this.a.e8
C.b.T(p.a,p.d,j)
p=a4.db
f=p.ga_(p)
for(p=this.dx.r,n=p.length,e=0,d=0;d<p.length;p.length===n||(0,H.C)(p),++d){c=p[d]
m=this.a.cs
if(e>=m.length)return H.e(m,e)
b=m[e]
m=c.gb6(c)
g=b.b
C.b.w(g.a,g.d,m.a,m.b,m.c)
m=c.gco(c).ko()
g=b.c
C.b.w(g.a,g.d,m.a,m.b,m.c)
m=f.ba(c.gb6(c))
g=b.d
C.b.w(g.a,g.d,m.a,m.b,m.c)
m=c.gao(c)
g=b.e
C.b.w(g.a,g.d,m.a,m.b,m.c)
m=c.gkm()
g=b.f
C.b.O(g.a,g.d,m)
m=c.gkl()
g=b.r
C.b.O(g.a,g.d,m)
m=c.gca()
g=b.x
C.b.O(g.a,g.d,m)
m=c.gcb()
g=b.y
C.b.O(g.a,g.d,m)
m=c.gcc()
g=b.z
C.b.O(g.a,g.d,m);++e}}if(r.cx>0){j=this.dx.x.length
p=this.a.e9
C.b.T(p.a,p.d,j)
p=a4.db
f=p.ga_(p)
for(p=this.dx.x,n=p.length,m=[u],e=0,d=0;d<p.length;p.length===n||(0,H.C)(p),++d){c=p[d]
g=this.a.ct
if(e>=g.length)return H.e(g,e)
b=g[e]
g=c.gb7()
H.l(k,"$ib",m,"$ab")
if(!C.a.aW(k,g)){g.sb_(0,k.length)
C.a.h(k,g)}g=c.gco(c)
a=b.d
C.b.w(a.a,a.d,g.a,g.b,g.c)
g=c.gbD()
a=b.b
C.b.w(a.a,a.d,g.a,g.b,g.c)
g=c.gbB(c)
a=b.c
C.b.w(a.a,a.d,g.a,g.b,g.c)
g=f.cQ(c.gco(c))
a=g.a
a0=g.b
a1=g.c
if(typeof a1!=="number")return a1.m()
a1=g.v(0,Math.sqrt(a*a+a0*a0+a1*a1))
a0=b.e
a=a1.a
g=a1.b
a1=a1.c
C.b.w(a0.a,a0.d,a,g,a1)
a1=c.gao(c)
g=b.f
C.b.w(g.a,g.d,a1.a,a1.b,a1.c)
a1=c.gb7()
g=a1.gb0(a1)
if(!g){g=b.x
C.b.T(g.a,g.d,1)}else{g=b.r
a=a1.gb0(a1)
a0=g.a
g=g.d
if(!a)C.b.T(a0,g,0)
else C.b.T(a0,g,a1.gb_(a1))
g=b.x
C.b.T(g.a,g.d,0)}++e}}if(r.cy>0){j=this.dx.y.length
p=this.a.ea
C.b.T(p.a,p.d,j)
p=a4.db
f=p.ga_(p)
for(p=this.dx.y,n=p.length,m=[P.q],g=[u],e=0,d=0;d<p.length;p.length===n||(0,H.C)(p),++d){c=p[d]
a=this.a.cu
if(e>=a.length)return H.e(a,e)
b=a[e]
a=c.gb7()
H.l(k,"$ib",g,"$ab")
if(!C.a.aW(k,a)){a.sb_(0,k.length)
C.a.h(k,a)}a2=f.m(0,c.ga_(c))
a=c.ga_(c)
a0=$.cs
if(a0==null){a0=new V.Y(0,0,0)
$.cs=a0}a0=a.ba(a0)
a=b.b
C.b.w(a.a,a.d,a0.a,a0.b,a0.c)
a=$.cs
if(a==null){a=new V.Y(0,0,0)
$.cs=a}a=a2.ba(a)
a0=b.c
C.b.w(a0.a,a0.d,a.a,a.b,a.c)
a=a2.em(0)
a0=b.d
h=new Float32Array(H.bY(H.l(new V.dv(a.a,a.b,a.c,a.e,a.f,a.r,a.y,a.z,a.Q).ac(0,!0),"$ib",m,"$ab")))
C.b.eJ(a0.a,a0.d,!1,h)
a0=c.gao(c)
a=b.e
C.b.w(a.a,a.d,a0.a,a0.b,a0.c)
a0=c.gb7()
a=a0.gb0(a0)
if(!a){a=b.r
C.b.T(a.a,a.d,1)}else{a=b.f
a1=a0.gb0(a0)
a3=a.a
a=a.d
if(!a1)C.b.T(a3,a,0)
else C.b.T(a3,a,a0.gb_(a0))
a=b.r
C.b.T(a.a,a.d,0)}a=c.gca()
a0=b.x
C.b.O(a0.a,a0.d,a)
a=c.gcb()
a0=b.y
C.b.O(a0.a,a0.d,a)
a=c.gcc()
a0=b.z
C.b.O(a0.a,a0.d,a);++e}}if(r.db>0){j=this.dx.z.length
p=this.a.eb
C.b.T(p.a,p.d,j)
p=a4.db
f=p.ga_(p)
for(p=this.dx.z,n=p.length,u=[u],e=0,d=0;d<p.length;p.length===n||(0,H.C)(p),++d){c=p[d]
m=this.a.cv
if(e>=m.length)return H.e(m,e)
b=m[e]
m=c.gb7()
H.l(k,"$ib",u,"$ab")
if(!C.a.aW(k,m)){m.sb_(0,k.length)
C.a.h(k,m)}m=c.gb6(c)
g=b.b
C.b.w(g.a,g.d,m.a,m.b,m.c)
m=c.gco(c)
g=b.c
C.b.w(g.a,g.d,m.a,m.b,m.c)
m=c.gbD()
g=b.d
C.b.w(g.a,g.d,m.a,m.b,m.c)
m=c.gbB(c)
g=b.e
C.b.w(g.a,g.d,m.a,m.b,m.c)
m=f.ba(c.gb6(c))
g=b.f
C.b.w(g.a,g.d,m.a,m.b,m.c)
m=c.gb7()
g=m.gb0(m)
if(!g){m=b.x
C.b.T(m.a,m.d,1)}else{g=b.r
a=m.gb0(m)
a0=g.a
g=g.d
if(!a)C.b.T(a0,g,0)
else C.b.T(a0,g,m.gb_(m))
m=b.x
C.b.T(m.a,m.d,0)}m=c.gao(c)
g=b.y
C.b.w(g.a,g.d,m.a,m.b,m.c)
m=c.gkp()
g=b.z
C.b.O(g.a,g.d,m)
m=c.gkq()
g=b.Q
C.b.O(g.a,g.d,m)
m=c.gca()
g=b.ch
C.b.O(g.a,g.d,m)
m=c.gcb()
g=b.cx
C.b.O(g.a,g.d,m)
m=c.gcc()
g=b.cy
C.b.O(g.a,g.d,m);++e}}}switch(r.f){case C.d:break
case C.j:break
case C.h:this.W(k,this.Q.d)
u=this.a
p=this.Q.d
u.ad(u.dX,u.br,p)
break
case C.i:this.W(k,this.Q.e)
u=this.a
p=this.Q.e
u.a9(u.dY,u.br,p)
break}if(r.fr){u=this.a
p=a4.Q
if(p==null){p=a4.db
p=p.ga_(p).em(0)
a4.Q=p}u=u.id
u.toString
u.ak(p.ac(0,!0))}if(r.dy){this.W(k,this.ch)
u=this.a
p=this.ch
u.a9(u.dZ,u.e_,p)
switch(r.r){case C.d:break
case C.j:u=this.a
p=this.cx.f
u=u.bs
u.toString
n=p.a
m=p.b
p=p.c
C.b.w(u.a,u.d,n,m,p)
break
case C.h:this.W(k,this.cx.d)
u=this.a
p=this.cx.d
u.ad(u.e0,u.bt,p)
p=this.a
u=this.cx.f
p=p.bs
p.toString
n=u.a
m=u.b
u=u.c
C.b.w(p.a,p.d,n,m,u)
break
case C.i:this.W(k,this.cx.e)
u=this.a
p=this.cx.e
u.a9(u.e1,u.bt,p)
p=this.a
u=this.cx.f
p=p.bs
p.toString
n=u.a
m=u.b
u=u.c
C.b.w(p.a,p.d,n,m,u)
break}switch(r.x){case C.d:break
case C.j:u=this.a
p=this.cy.f
u=u.bv
u.toString
n=p.a
m=p.b
p=p.c
C.b.w(u.a,u.d,n,m,p)
p=this.a
m=this.cy.ch
p=p.bu
C.b.O(p.a,p.d,m)
break
case C.h:this.W(k,this.cy.d)
u=this.a
p=this.cy.d
u.ad(u.e2,u.bw,p)
p=this.a
u=this.cy.f
p=p.bv
p.toString
n=u.a
m=u.b
u=u.c
C.b.w(p.a,p.d,n,m,u)
u=this.a
m=this.cy.ch
u=u.bu
C.b.O(u.a,u.d,m)
break
case C.i:this.W(k,this.cy.e)
u=this.a
p=this.cy.e
u.a9(u.e3,u.bw,p)
p=this.a
u=this.cy.f
p=p.bv
p.toString
n=u.a
m=u.b
u=u.c
C.b.w(p.a,p.d,n,m,u)
u=this.a
m=this.cy.ch
u=u.bu
C.b.O(u.a,u.d,m)
break}}u=r.y
p=u!==C.d
if(p){switch(u){case C.d:break
case C.j:u=this.a
n=this.db.f
u=u.bx
C.b.O(u.a,u.d,n)
break
case C.h:this.W(k,this.db.d)
u=this.a
n=this.db.d
u.ad(u.e4,u.by,n)
n=this.a
u=this.db.f
n=n.bx
C.b.O(n.a,n.d,u)
break
case C.i:this.W(k,this.db.e)
u=this.a
n=this.db.e
u.a9(u.e5,u.by,n)
n=this.a
u=this.db.f
n=n.bx
C.b.O(n.a,n.d,u)
break}C.b.cp(o,3042)
C.b.j2(o,770,771)}for(i=0;i<k.length;++i)k[i].bi(a4)
u=a5.e
u.bi(a4)
u.aQ(a4)
u.eI(a4)
if(p)C.b.jj(o,3042)
for(i=0;i<k.length;++i)k[i].eI(a4)
u=this.a
u.toString
C.b.eM(o,null)
u.x.jk()},
i:function(a){var u=this.a
if(u!=null)return u.b
else return this.da().af},
sfw:function(a){this.e=H.l(a,"$ia_",[V.ak],"$aa_")}}
O.h3.prototype={}
O.du.prototype={
aJ:function(){}}
O.h4.prototype={}
O.b1.prototype={
dC:function(a){var u,t
if(!J.R(this.f,a)){u=this.f
this.f=a
t=new D.K(this.b+".color",u,a,this,[V.a1])
t.b=!0
this.a.a8(t)}},
aJ:function(){this.f3()
this.dC(new V.a1(1,1,1))},
sao:function(a,b){var u
if(this.c===C.d){this.c=C.j
this.aJ()
u=this.a
u.a=null
u.a8(null)}this.dC(b)}}
O.h6.prototype={
i6:function(a){var u=this.ch
if(!(Math.abs(u-a)<$.J().a)){this.ch=a
u=new D.K(this.b+".refraction",u,a,this,[P.q])
u.b=!0
this.a.a8(u)}},
aJ:function(){this.bI()
this.i6(1)}}
O.h7.prototype={
c4:function(a){var u=this.ch
if(!(Math.abs(u-a)<$.J().a)){this.ch=a
u=new D.K(this.b+".shininess",u,a,this,[P.q])
u.b=!0
this.a.a8(u)}},
aJ:function(){this.bI()
this.c4(100)}}
O.bW.prototype={}
T.dQ.prototype={}
T.i0.prototype={}
V.f1.prototype={
aP:function(a,b){return!0},
i:function(a){return"all"},
$ibg:1}
V.bg.prototype={}
V.ds.prototype={
aP:function(a,b){var u,t,s
for(u=this.a,t=u.length,s=0;s<u.length;u.length===t||(0,H.C)(u),++s)if(u[s].aP(0,b))return!0
return!1},
i:function(a){var u,t,s,r,q
for(u=this.a,t=u.length,s="",r=0;r<u.length;u.length===t||(0,H.C)(u),++r){q=u[r]
if(s.length!==0)s+=", "
s+=q.i(0)}return s},
sax:function(a){this.a=H.l(a,"$ib",[V.bg],"$ab")},
$ibg:1}
V.bj.prototype={
aP:function(a,b){return!this.f2(0,b)},
i:function(a){return"!["+this.cZ(0)+"]"}}
V.hF.prototype={
f7:function(a){var u,t
if(a.a.length<=0)throw H.c(P.w("May not create a SetMatcher with zero characters."))
u=new H.aI([P.o,P.ac])
for(t=new H.dq(a,a.gk(a),0,[H.aw(a,"y",0)]);t.J();)u.l(0,t.d,!0)
this.si4(u)},
aP:function(a,b){return this.a.bj(0,b)},
i:function(a){var u=this.a
return P.dM(u.gaq(u),0,null)},
si4:function(a){this.a=H.l(a,"$iD",[P.o,P.ac],"$aD")},
$ibg:1}
V.cw.prototype={
D:function(a,b){var u,t,s,r
for(u=this.c,t=u.length,s=0;s<t;++s){r=u[s]
if(r.b.b===b)return r}r=new V.cz(this.a.P(0,b))
r.sax(H.d([],[V.bg]))
r.c=!1
C.a.h(this.c,r)
return r},
jr:function(a){var u,t,s,r
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.C)(u),++s){r=u[s]
if(r.aP(0,a))return r}return},
i:function(a){return this.b},
siq:function(a){this.c=H.l(a,"$ib",[V.cz],"$ab")}}
V.dV.prototype={
i:function(a){var u,t
u=H.m8(this.b,"\n","\\n")
t=H.m8(u,"\t","\\t")
return this.a+":"+this.c+':"'+t+'"'}}
V.cy.prototype={
i:function(a){return this.b},
shZ:function(a){var u=P.h
this.c=H.l(a,"$iD",[u,u],"$aD")}}
V.i3.prototype={
P:function(a,b){var u=this.a.j(0,b)
if(u==null){u=new V.cw(this,b)
u.siq(H.d([],[V.cz]))
u.d=null
this.a.l(0,b,u)}return u},
b9:function(a){var u,t
u=this.b.j(0,a)
if(u==null){u=new V.cy(this,a)
t=P.h
u.shZ(new H.aI([t,t]))
this.b.l(0,a,u)}return u},
kc:function(a){var u,t,s,r,q,p,o,n,m,l,k,j
u=H.d([],[V.dV])
t=this.c
s=[P.o]
r=H.d([],s)
for(q=a.length,p=null,o=0;!0;){if(o>=q){if(p!=null)C.a.h(u,p)
return u}n=C.c.G(a,o)
m=t.jr(n)
if(m==null){if(p==null){C.a.h(r,n)
l=P.dM(r,0,null)
throw H.c(P.w("Untokenizable string [state: "+t.b+", index "+o+']: "'+l+'"'))}C.a.h(u,p)
o=p.c+1
r=H.d([],s)
t=this.c
p=null}else{if(!m.c)C.a.h(r,n)
t=m.b
if(t.d!=null){l=P.dM(r,0,null)
k=t.d
j=k.c.j(0,l)
p=new V.dV(j==null?k.b:j,l,o)}++o}}},
sig:function(a){this.a=H.l(a,"$iD",[P.h,V.cw],"$aD")},
sii:function(a){this.b=H.l(a,"$iD",[P.h,V.cy],"$aD")}}
V.cz.prototype={
i:function(a){return this.b.b+": "+this.cZ(0)}}
X.d9.prototype={$ibi:1}
X.fH.prototype={
gB:function(){var u=this.x
if(u==null){u=D.S()
this.x=u}return u}}
X.dA.prototype={
gB:function(){var u=this.f
if(u==null){u=D.S()
this.f=u}return u},
aH:function(a){var u
H.f(a,"$iA")
u=this.f
if(u!=null)u.H(a)},
fp:function(){return this.aH(null)},
sb3:function(a){var u,t
if(!J.R(this.b,a)){u=this.b
if(u!=null)u.gB().M(0,this.gd2())
t=this.b
this.b=a
if(a!=null)a.gB().h(0,this.gd2())
u=new D.K("mover",t,this.b,this,[U.a9])
u.b=!0
this.aH(u)}},
$ibi:1,
$id9:1}
X.dP.prototype={}
V.kb.prototype={
$1:function(a){H.f(a,"$ib5")
P.kQ(C.e.eH(this.a.gjv(),2)+" fps")},
$S:47}
V.hu.prototype={
dI:function(a,b,c,d){var u,t,s,r,q,p,o,n
H.n(c,{func:1,ret:-1})
if(this.c==null)return
u=this.a
t=P.lq().gcJ().j(0,H.m(u))
if(t==null)if(d){c.$0()
this.dG(b)
s=!0}else s=!1
else if(t===b){c.$0()
s=!0}else s=!1
r=document
q=r.createElement("label")
p=q.style
p.whiteSpace="nowrap"
J.kX(this.c).h(0,q)
o=W.mL("radio")
o.checked=s
o.name=u
u=W.p
W.ab(o,"change",H.n(new V.hv(this,o,c,b),{func:1,ret:-1,args:[u]}),!1,u)
C.A.X(q,o)
n=r.createElement("span")
n.textContent=b
C.A.X(q,n)
J.kX(this.c).h(0,r.createElement("br"))},
aM:function(a,b,c){return this.dI(a,b,c,!1)},
dG:function(a){var u,t,s,r,q
u=P.lq()
t=P.h
s=P.mS(u.gcJ(),t,t)
s.l(0,this.a,a)
r=u.eB(0,s)
t=window.history
q=r.i(0)
t.toString;(t&&C.N).i0(t,new P.jm([],[]).cR(""),"",q)}}
V.hv.prototype={
$1:function(a){if(this.b.checked){this.c.$0()
this.a.dG(this.d)}},
$S:21}
V.hJ.prototype={
f9:function(a,b){var u,t,s,r,q,p,o
u=document
t=u.body
s=u.createElement("div")
s.className="scrollTop";(t&&C.w).X(t,s)
r=u.createElement("div")
r.className="scrollPage"
C.w.X(t,r)
q=u.createElement("div")
q.className="pageCenter"
C.l.X(r,q)
if(a.length!==0){u.title=a
p=u.createElement("div")
p.className="pageTitle"
p.textContent=a
C.l.X(q,p)}o=u.createElement("div")
this.a=o
C.l.X(q,o)
this.b=null
o=W.p
W.ab(u,"scroll",H.n(new V.hL(s),{func:1,ret:-1,args:[o]}),!1,o)},
dJ:function(a){var u,t,s,r,q,p,o,n,m,l,k
H.l(a,"$ib",[P.h],"$ab")
this.i9()
u=document
t=u.createElement("div")
t.className="textPar"
for(s=this.b.kc(C.a.jA(a)),r=s.length,q=0;q<s.length;s.length===r||(0,H.C)(s),++q){p=s[q]
switch(p.a){case"Bold":o=u.createElement("div")
o.className="boldPar"
o.textContent=p.b
C.l.X(t,o)
break
case"Italic":o=u.createElement("div")
o.className="italicPar"
o.textContent=p.b
C.l.X(t,o)
break
case"Code":o=u.createElement("div")
o.className="codePar"
o.textContent=p.b
C.l.X(t,o)
break
case"Link":n=p.b
if(H.oo(n,"|",0)){m=n.split("|")
l=u.createElement("a")
l.className="linkPar"
if(1>=m.length)return H.e(m,1)
l.href=H.L(m[1])
l.textContent=H.L(m[0])
C.l.X(t,l)}else{k=P.jw(C.Y,n,C.m,!1)
l=u.createElement("a")
l.className="linkPar"
l.href="#"+H.m(k)
l.textContent=n
C.l.X(t,l)}break
case"Other":o=u.createElement("div")
o.className="normalPar"
o.textContent=p.b
C.l.X(t,o)
break}}C.l.X(this.a,t)},
iS:function(a){var u,t,s,r,q,p,o
H.l(a,"$ib",[P.h],"$ab")
u=document
t=u.createElement("table")
t.id="shellTable"
s=t.style
s.width="100%"
s.padding="0px"
s.marginLeft="auto"
s.marginRight="auto"
C.l.X(this.a,t)
r=C.a2.fT(t,-1)
s=H.f((r&&C.F).dk(r,-1),"$ib4").style
s.textAlign="center"
s.verticalAlign="top"
s.marginLeft="auto"
s.marginRight="auto"
for(q=0;q<1;++q){p=u.createElement("div")
p.id=a[q]
s=p.style
s.textAlign="left"
s=p.style
s.verticalAlign="top"
o=H.f(C.F.dk(r,-1),"$ib4")
s=o.style
s.textAlign="center"
s.verticalAlign="top"
s.marginLeft="auto"
s.marginRight="auto";(o&&C.a1).X(o,p)}},
i9:function(){var u,t,s,r
if(this.b!=null)return
u=new V.i3()
t=P.h
u.sig(new H.aI([t,V.cw]))
u.sii(new H.aI([t,V.cy]))
u.c=null
u.c=u.P(0,"Start")
t=u.P(0,"Start").D(0,"Bold")
s=V.ah(new H.a5("*"))
C.a.h(t.a,s)
t.c=!0
t=u.P(0,"Bold").D(0,"Bold")
s=new V.bj()
r=[V.bg]
s.sax(H.d([],r))
C.a.h(t.a,s)
t=V.ah(new H.a5("*"))
C.a.h(s.a,t)
t=u.P(0,"Bold").D(0,"BoldEnd")
s=V.ah(new H.a5("*"))
C.a.h(t.a,s)
t.c=!0
t=u.P(0,"Start").D(0,"Italic")
s=V.ah(new H.a5("_"))
C.a.h(t.a,s)
t.c=!0
t=u.P(0,"Italic").D(0,"Italic")
s=new V.bj()
s.sax(H.d([],r))
C.a.h(t.a,s)
t=V.ah(new H.a5("_"))
C.a.h(s.a,t)
t=u.P(0,"Italic").D(0,"ItalicEnd")
s=V.ah(new H.a5("_"))
C.a.h(t.a,s)
t.c=!0
t=u.P(0,"Start").D(0,"Code")
s=V.ah(new H.a5("`"))
C.a.h(t.a,s)
t.c=!0
t=u.P(0,"Code").D(0,"Code")
s=new V.bj()
s.sax(H.d([],r))
C.a.h(t.a,s)
t=V.ah(new H.a5("`"))
C.a.h(s.a,t)
t=u.P(0,"Code").D(0,"CodeEnd")
s=V.ah(new H.a5("`"))
C.a.h(t.a,s)
t.c=!0
t=u.P(0,"Start").D(0,"LinkHead")
s=V.ah(new H.a5("["))
C.a.h(t.a,s)
t.c=!0
t=u.P(0,"LinkHead").D(0,"LinkTail")
s=V.ah(new H.a5("|"))
C.a.h(t.a,s)
s=u.P(0,"LinkHead").D(0,"LinkEnd")
t=V.ah(new H.a5("]"))
C.a.h(s.a,t)
s.c=!0
s=u.P(0,"LinkHead").D(0,"LinkHead")
t=new V.bj()
t.sax(H.d([],r))
C.a.h(s.a,t)
s=V.ah(new H.a5("|]"))
C.a.h(t.a,s)
s=u.P(0,"LinkTail").D(0,"LinkEnd")
t=V.ah(new H.a5("]"))
C.a.h(s.a,t)
s.c=!0
s=u.P(0,"LinkTail").D(0,"LinkTail")
t=new V.bj()
t.sax(H.d([],r))
C.a.h(s.a,t)
s=V.ah(new H.a5("|]"))
C.a.h(t.a,s)
C.a.h(u.P(0,"Start").D(0,"Other").a,new V.f1())
s=u.P(0,"Other").D(0,"Other")
t=new V.bj()
t.sax(H.d([],r))
C.a.h(s.a,t)
s=V.ah(new H.a5("*_`["))
C.a.h(t.a,s)
s=u.P(0,"BoldEnd")
s.d=s.a.b9("Bold")
s=u.P(0,"ItalicEnd")
s.d=s.a.b9("Italic")
s=u.P(0,"CodeEnd")
s.d=s.a.b9("Code")
s=u.P(0,"LinkEnd")
s.d=s.a.b9("Link")
s=u.P(0,"Other")
s.d=s.a.b9("Other")
this.b=u}}
V.hL.prototype={
$1:function(a){P.lm(C.u,new V.hK(this.a))},
$S:21}
V.hK.prototype={
$0:function(){var u,t,s
u=C.e.ai(document.documentElement.scrollTop)
t=this.a.style
s=H.m(-0.01*u)+"px"
t.top=s},
$S:0}
K.k0.prototype={
$1:function(a){var u,t,s,r
u=H.k(H.f(a,"$iA"),"$idL").c
t=this.a.aj(0,u,null)
s=this.b.aj(0,u,null)
r=this.c
r.e.l(0,0,t)
r.e.l(0,1,s)
r.e.l(0,2,t)
r.e.l(0,3,s)
r.e.l(0,4,t)
r.e.l(0,5,s)
r.e.l(0,6,t)
r.e.l(0,7,s)},
$S:10}
K.k8.prototype={
$1:function(a){a.ae()
this.a.scX(0,a)},
$S:37}
K.k1.prototype={
$0:function(){this.a.$1(F.lW(30,null,null,30))},
$S:0}
K.k2.prototype={
$0:function(){this.a.$1(F.lX(1,!0,!0,100,20,1))},
$S:0}
K.k3.prototype={
$0:function(){this.a.$1(F.lX(1,!0,!1,30,12,0))},
$S:0}
K.k4.prototype={
$0:function(){this.a.$1(F.on(20,null,1,20))},
$S:0}
K.k5.prototype={
$0:function(){this.a.$1(F.oq(30,1.5,15,0.25))},
$S:0}
K.k6.prototype={
$0:function(){this.a.$1(F.oe(120,1,2,12,0.1,3))},
$S:0}
K.k7.prototype={
$0:function(){this.a.$1(F.o8(4,null,4))},
$S:0};(function aliases(){var u=J.a.prototype
u.f0=u.i
u=J.dl.prototype
u.f1=u.i
u=O.du.prototype
u.f3=u.aJ
u=O.b1.prototype
u.bI=u.aJ
u=V.ds.prototype
u.f2=u.aP
u.cZ=u.i})();(function installTearOffs(){var u=hunkHelpers._static_1,t=hunkHelpers._static_0,s=hunkHelpers.installInstanceTearOff,r=hunkHelpers._instance_2u,q=hunkHelpers._instance_0u,p=hunkHelpers._instance_1u,o=hunkHelpers._instance_0i
u(P,"nW","ns",13)
u(P,"nX","nt",13)
u(P,"nY","nu",13)
t(P,"lU","nV",3)
var n
s(n=E.ao.prototype,"geu",0,0,null,["$1","$0"],["ev","jM"],1,0)
s(n,"ger",0,0,null,["$1","$0"],["es","jL"],1,0)
s(n,"gep",0,0,null,["$1","$0"],["eq","jI"],1,0)
r(n,"gjG","jH",9)
r(n,"gjJ","jK",9)
s(n=E.dU.prototype,"gd_",0,0,null,["$1","$0"],["d1","d0"],1,0)
q(n,"gk0","eC",3)
p(n=X.e0.prototype,"ghp","hq",12)
p(n,"ghb","hc",12)
p(n,"ghj","hk",4)
p(n,"ght","hu",15)
p(n,"ghr","hs",15)
p(n,"ghx","hy",4)
p(n,"ghB","hC",4)
p(n,"ghn","ho",4)
p(n,"ghz","hA",4)
p(n,"ghl","hm",4)
p(n,"ghD","hE",34)
p(n,"ghF","hG",12)
p(n,"ghR","hS",14)
p(n,"ghN","hO",14)
p(n,"ghP","hQ",14)
s(D.bc.prototype,"gfb",0,0,null,["$1","$0"],["at","fc"],1,0)
s(n=D.dp.prototype,"gds",0,0,null,["$1","$0"],["dt","hv"],1,0)
p(n,"ghH","hI",36)
r(n,"gh5","h6",19)
r(n,"ghL","hM",19)
o(V.T.prototype,"gk","cB",24)
o(V.G.prototype,"gk","cB",24)
s(n=U.cj.prototype,"gaG",0,0,null,["$1","$0"],["F","a3"],1,0)
r(n,"gfd","fe",23)
r(n,"ghJ","hK",23)
s(n=U.e1.prototype,"gaG",0,0,null,["$1","$0"],["F","a3"],1,0)
p(n,"gbS","bT",2)
p(n,"gbU","bV",2)
p(n,"gbW","bX",2)
s(n=U.e2.prototype,"gaG",0,0,null,["$1","$0"],["F","a3"],1,0)
p(n,"gbS","bT",2)
p(n,"gbU","bV",2)
p(n,"gbW","bX",2)
p(n,"gh_","h0",2)
p(n,"gh1","h2",2)
p(n,"gio","ip",2)
p(n,"gil","im",2)
p(n,"gij","ik",2)
p(U.e3.prototype,"gh3","h4",2)
s(n=M.de.prototype,"gal",0,0,null,["$1","$0"],["au","fg"],1,0)
r(n,"ghf","hg",9)
r(n,"ghh","hi",9)
s(n=O.dt.prototype,"ghd",0,0,null,["$1","$0"],["a8","he"],1,0)
s(n,"gi2",0,0,null,["$1","$0"],["dA","i3"],1,0)
r(n,"gh7","h8",20)
r(n,"gh9","ha",20)
s(X.dA.prototype,"gd2",0,0,null,["$1","$0"],["aH","fp"],1,0)})();(function inheritance(){var u=hunkHelpers.mixin,t=hunkHelpers.inherit,s=hunkHelpers.inheritMany
t(P.P,null)
s(P.P,[H.kt,J.a,J.at,P.el,P.j,H.dq,P.aZ,H.bN,H.cH,H.fi,H.hw,H.i8,P.bu,H.cb,H.eC,P.ag,H.fR,H.fT,H.fM,P.eI,P.ba,P.aB,P.e6,P.hT,P.cx,P.hU,P.b5,P.ai,P.jA,P.ji,P.cL,P.jc,P.y,P.jr,P.h_,P.bI,P.jz,P.jx,P.ac,P.aj,P.a0,P.aX,P.hp,P.dJ,P.ee,P.fG,P.b,P.D,P.I,P.aq,P.h,P.al,P.bX,P.iq,P.jj,W.fl,W.B,W.df,P.jl,P.jd,P.Q,O.a_,O.cm,E.fc,E.ao,E.hx,D.A,E.dU,Z.e5,Z.iM,Z.d7,Z.bv,Z.b8,D.ff,D.aY,X.d8,X.dm,X.fO,X.fX,X.au,X.hf,X.i4,X.e0,D.bc,D.a4,D.dB,D.dI,D.dR,D.dS,D.dT,V.a1,V.aF,V.fx,V.dv,V.ak,V.a7,V.Y,V.aL,V.dF,V.T,V.G,U.e1,U.e2,U.e3,M.de,A.d3,A.f5,A.h5,A.cA,A.cE,A.cC,A.cF,A.cD,A.cG,A.bJ,A.dX,A.ij,F.a6,F.fA,F.bf,F.fQ,F.by,F.bV,F.hG,F.hH,F.hI,F.ae,F.iA,F.iB,F.iE,F.iG,F.iH,F.iI,O.bW,O.du,T.i0,V.f1,V.bg,V.ds,V.hF,V.cw,V.dV,V.cy,V.i3,X.d9,X.dP,X.dA,V.hu,V.hJ])
s(J.a,[J.fK,J.dk,J.dl,J.aH,J.bw,J.bd,H.co,H.bx,W.i,W.f0,W.bG,W.aV,W.aW,W.U,W.e8,W.fp,W.fq,W.ea,W.dd,W.ec,W.fs,W.p,W.ef,W.aG,W.dh,W.eh,W.ck,W.fW,W.h9,W.em,W.en,W.aJ,W.eo,W.er,W.aK,W.ev,W.ex,W.aN,W.ey,W.aO,W.eD,W.ay,W.eG,W.i2,W.aQ,W.eJ,W.i6,W.iv,W.eO,W.eQ,W.eS,W.eU,W.eW,P.b0,P.ej,P.b3,P.et,P.ht,P.eE,P.b6,P.eL,P.f6,P.e7,P.d5,P.dg,P.dD,P.bU,P.dH,P.dY,P.eA])
s(J.dl,[J.hq,J.bB,J.be])
t(J.ks,J.aH)
s(J.bw,[J.dj,J.fL])
t(P.fV,P.el)
s(P.fV,[H.dZ,W.iU,W.iT,P.fC])
t(H.a5,H.dZ)
s(P.j,[H.fv,H.h0,H.iN])
s(P.aZ,[H.h1,H.iO])
t(H.fj,H.fi)
s(P.bu,[H.hm,H.fN,H.io,H.ia,H.fe,H.hD,P.dz,P.aT,P.ip,P.il,P.dK,P.fh,P.fo])
s(H.cb,[H.kg,H.hY,H.jV,H.jW,H.jX,P.iQ,P.iP,P.iR,P.iS,P.jq,P.jp,P.j_,P.j3,P.j0,P.j1,P.j2,P.j6,P.j7,P.j5,P.j4,P.hV,P.hW,P.jI,P.jg,P.jf,P.jh,P.fU,P.fZ,P.jy,P.ft,P.fu,P.iu,P.ir,P.is,P.it,P.js,P.jt,P.jv,P.ju,P.jE,P.jD,P.jF,P.jG,W.hb,W.hd,W.hC,W.hS,W.iZ,P.jn,P.jK,P.fD,P.fE,P.f8,E.hy,E.hz,E.hA,E.i1,D.fz,F.jB,F.jL,F.jN,F.jO,F.jP,F.kc,F.kd,F.kf,F.jZ,F.jM,F.jS,F.jT,F.iK,F.iJ,F.iC,F.iD,V.kb,V.hv,V.hL,V.hK,K.k0,K.k8,K.k1,K.k2,K.k3,K.k4,K.k5,K.k6,K.k7])
s(H.hY,[H.hQ,H.c9])
t(P.fY,P.ag)
t(H.aI,P.fY)
t(H.fS,H.fv)
t(H.dw,H.bx)
s(H.dw,[H.cM,H.cO])
t(H.cN,H.cM)
t(H.cp,H.cN)
t(H.cP,H.cO)
t(H.dx,H.cP)
s(H.dx,[H.hg,H.hh,H.hi,H.hj,H.hk,H.dy,H.cq])
t(P.je,P.jA)
t(P.jb,P.ji)
t(P.eN,P.h_)
t(P.e_,P.eN)
s(P.bI,[P.fa,P.fw])
t(P.bM,P.hU)
s(P.bM,[P.fb,P.iy,P.ix])
t(P.iw,P.fw)
s(P.a0,[P.q,P.o])
s(P.aT,[P.bT,P.fI])
t(P.iW,P.bX)
s(W.i,[W.F,W.fB,W.aM,W.cQ,W.aP,W.az,W.cS,W.iL,W.cJ,P.f9,P.bF])
s(W.F,[W.a2,W.bt,W.cf])
s(W.a2,[W.x,P.r])
s(W.x,[W.f2,W.f3,W.d4,W.bH,W.ce,W.fF,W.cl,W.dn,W.hE,W.b4,W.dN,W.dO])
s(W.aV,[W.cc,W.fm,W.fn])
t(W.fk,W.aW)
t(W.cd,W.e8)
t(W.eb,W.ea)
t(W.dc,W.eb)
t(W.ed,W.ec)
t(W.fr,W.ed)
t(W.ax,W.bG)
t(W.eg,W.ef)
t(W.ch,W.eg)
t(W.ei,W.eh)
t(W.bO,W.ei)
t(W.di,W.cf)
t(W.bA,W.p)
s(W.bA,[W.b_,W.ad,W.aR])
t(W.ha,W.em)
t(W.hc,W.en)
t(W.ep,W.eo)
t(W.he,W.ep)
t(W.es,W.er)
t(W.cr,W.es)
t(W.ew,W.ev)
t(W.hr,W.ew)
t(W.hB,W.ex)
t(W.cR,W.cQ)
t(W.hN,W.cR)
t(W.ez,W.ey)
t(W.hO,W.ez)
t(W.hR,W.eD)
t(W.eH,W.eG)
t(W.hZ,W.eH)
t(W.cT,W.cS)
t(W.i_,W.cT)
t(W.eK,W.eJ)
t(W.i5,W.eK)
t(W.b9,W.ad)
t(W.eP,W.eO)
t(W.iV,W.eP)
t(W.e9,W.dd)
t(W.eR,W.eQ)
t(W.j8,W.eR)
t(W.eT,W.eS)
t(W.eq,W.eT)
t(W.eV,W.eU)
t(W.jk,W.eV)
t(W.eX,W.eW)
t(W.jo,W.eX)
t(W.iX,P.hT)
t(W.kD,W.iX)
t(W.iY,P.cx)
t(P.jm,P.jl)
t(P.a8,P.jd)
t(P.ek,P.ej)
t(P.fP,P.ek)
t(P.eu,P.et)
t(P.hn,P.eu)
t(P.eF,P.eE)
t(P.hX,P.eF)
t(P.eM,P.eL)
t(P.i7,P.eM)
t(P.f7,P.e7)
t(P.ho,P.bF)
t(P.eB,P.eA)
t(P.hP,P.eB)
s(D.A,[E.dL,D.bP,D.bQ,D.K,X.hs])
s(E.fc,[Z.d6,A.cv,T.dQ])
s(X.hs,[X.dr,X.bh,X.cn,X.dW])
s(O.a_,[D.dp,U.cj])
s(D.ff,[U.fg,U.a9])
s(U.a9,[U.da,U.dG])
t(A.h2,A.cv)
s(A.dX,[A.N,A.ie,A.ig,A.ii,A.ic,A.Z,A.id,A.M,A.ih,A.ik,A.cB,A.av,A.am,A.an])
t(F.hM,F.fA)
t(F.ib,F.fQ)
t(F.iF,F.iG)
t(F.hl,F.iH)
t(O.dt,O.bW)
s(O.du,[O.h3,O.h4,O.b1])
s(O.b1,[O.h6,O.h7])
s(V.ds,[V.bj,V.cz])
t(X.fH,X.dP)
u(H.dZ,H.cH)
u(H.cM,P.y)
u(H.cN,H.bN)
u(H.cO,P.y)
u(H.cP,H.bN)
u(P.el,P.y)
u(P.eN,P.jr)
u(W.e8,W.fl)
u(W.ea,P.y)
u(W.eb,W.B)
u(W.ec,P.y)
u(W.ed,W.B)
u(W.ef,P.y)
u(W.eg,W.B)
u(W.eh,P.y)
u(W.ei,W.B)
u(W.em,P.ag)
u(W.en,P.ag)
u(W.eo,P.y)
u(W.ep,W.B)
u(W.er,P.y)
u(W.es,W.B)
u(W.ev,P.y)
u(W.ew,W.B)
u(W.ex,P.ag)
u(W.cQ,P.y)
u(W.cR,W.B)
u(W.ey,P.y)
u(W.ez,W.B)
u(W.eD,P.ag)
u(W.eG,P.y)
u(W.eH,W.B)
u(W.cS,P.y)
u(W.cT,W.B)
u(W.eJ,P.y)
u(W.eK,W.B)
u(W.eO,P.y)
u(W.eP,W.B)
u(W.eQ,P.y)
u(W.eR,W.B)
u(W.eS,P.y)
u(W.eT,W.B)
u(W.eU,P.y)
u(W.eV,W.B)
u(W.eW,P.y)
u(W.eX,W.B)
u(P.ej,P.y)
u(P.ek,W.B)
u(P.et,P.y)
u(P.eu,W.B)
u(P.eE,P.y)
u(P.eF,W.B)
u(P.eL,P.y)
u(P.eM,W.B)
u(P.e7,P.ag)
u(P.eA,P.y)
u(P.eB,W.B)})();(function constants(){var u=hunkHelpers.makeConstList
C.w=W.d4.prototype
C.t=W.bH.prototype
C.l=W.ce.prototype
C.N=W.dh.prototype
C.x=W.di.prototype
C.O=J.a.prototype
C.a=J.aH.prototype
C.f=J.dj.prototype
C.n=J.dk.prototype
C.e=J.bw.prototype
C.c=J.bd.prototype
C.V=J.be.prototype
C.A=W.dn.prototype
C.a0=W.cr.prototype
C.E=J.hq.prototype
C.b=P.bU.prototype
C.a1=W.b4.prototype
C.a2=W.dN.prototype
C.F=W.dO.prototype
C.v=J.bB.prototype
C.G=W.b9.prototype
C.H=W.cJ.prototype
C.J=new P.fb(!1)
C.I=new P.fa(C.J)
C.K=new P.hp()
C.L=new P.iy()
C.k=new P.je()
C.d=new A.bJ(0,"ColorSourceType.None")
C.j=new A.bJ(1,"ColorSourceType.Solid")
C.h=new A.bJ(2,"ColorSourceType.Texture2D")
C.i=new A.bJ(3,"ColorSourceType.TextureCube")
C.u=new P.aX(0)
C.M=new P.aX(5e6)
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
C.y=function(hooks) { return hooks; }

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
C.z=function getTagFallback(o) {
  var s = Object.prototype.toString.call(o);
  return s.substring(8, s.length - 1);
}
C.B=H.d(u([127,2047,65535,1114111]),[P.o])
C.o=H.d(u([0,0,32776,33792,1,10240,0,0]),[P.o])
C.p=H.d(u([0,0,65490,45055,65535,34815,65534,18431]),[P.o])
C.q=H.d(u([0,0,26624,1023,65534,2047,65534,2047]),[P.o])
C.X=H.d(u([0,0,32722,12287,65534,34815,65534,18431]),[P.o])
C.Y=H.d(u([0,0,65498,45055,65535,34815,65534,18431]),[P.o])
C.r=H.d(u([0,0,24576,1023,65534,34815,65534,18431]),[P.o])
C.C=H.d(u([0,0,32754,11263,65534,34815,65534,18431]),[P.o])
C.Z=H.d(u([0,0,32722,12287,65535,34815,65534,18431]),[P.o])
C.D=H.d(u([0,0,65490,12287,65535,34815,65534,18431]),[P.o])
C.W=H.d(u([]),[P.h])
C.a_=new H.fj(0,{},C.W,[P.h,P.h])
C.m=new P.iw(!1)})();(function staticFields(){$.aU=0
$.ca=null
$.kZ=null
$.kG=!1
$.m1=null
$.lS=null
$.m7=null
$.jQ=null
$.jY=null
$.kO=null
$.bZ=null
$.cX=null
$.cY=null
$.kH=!1
$.W=C.k
$.l9=null
$.ld=null
$.cs=null
$.li=null
$.lt=null
$.lx=null
$.lv=null
$.lw=null
$.iz=null
$.lu=null
$.lc=null})();(function lazyInitializers(){var u=hunkHelpers.lazy
u($,"ov","mb",function(){return H.m0("_$dart_dartClosure")})
u($,"ow","kR",function(){return H.m0("_$dart_js")})
u($,"oB","mc",function(){return H.b7(H.i9({
toString:function(){return"$receiver$"}}))})
u($,"oC","md",function(){return H.b7(H.i9({$method$:null,
toString:function(){return"$receiver$"}}))})
u($,"oD","me",function(){return H.b7(H.i9(null))})
u($,"oE","mf",function(){return H.b7(function(){var $argumentsExpr$='$arguments$'
try{null.$method$($argumentsExpr$)}catch(t){return t.message}}())})
u($,"oH","mi",function(){return H.b7(H.i9(void 0))})
u($,"oI","mj",function(){return H.b7(function(){var $argumentsExpr$='$arguments$'
try{(void 0).$method$($argumentsExpr$)}catch(t){return t.message}}())})
u($,"oG","mh",function(){return H.b7(H.lo(null))})
u($,"oF","mg",function(){return H.b7(function(){try{null.$method$}catch(t){return t.message}}())})
u($,"oK","ml",function(){return H.b7(H.lo(void 0))})
u($,"oJ","mk",function(){return H.b7(function(){try{(void 0).$method$}catch(t){return t.message}}())})
u($,"oZ","kS",function(){return P.nr()})
u($,"p2","d1",function(){return[]})
u($,"oL","mm",function(){return P.no()})
u($,"p_","mq",function(){return H.mZ(H.bY(H.d([-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-1,-2,-2,-2,-2,-2,62,-2,62,-2,63,52,53,54,55,56,57,58,59,60,61,-2,-2,-2,-1,-2,-2,-2,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,-2,-2,-2,-2,63,-2,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,-2,-2,-2,-2,-2],[P.o])))})
u($,"p0","mr",function(){return P.nd("^[\\-\\.0-9A-Z_a-z~]*$",!0,!1)})
u($,"p1","ms",function(){return P.nN()})
u($,"oS","mp",function(){return Z.aA(0)})
u($,"oM","mn",function(){return Z.aA(511)})
u($,"oU","bq",function(){return Z.aA(1)})
u($,"oT","bp",function(){return Z.aA(2)})
u($,"oO","bo",function(){return Z.aA(4)})
u($,"oV","br",function(){return Z.aA(8)})
u($,"oW","bs",function(){return Z.aA(16)})
u($,"oP","d_",function(){return Z.aA(32)})
u($,"oQ","d0",function(){return Z.aA(64)})
u($,"oR","mo",function(){return Z.aA(96)})
u($,"oX","c7",function(){return Z.aA(128)})
u($,"oN","bn",function(){return Z.aA(256)})
u($,"ou","ma",function(){return new V.fx(1e-9)})
u($,"ot","J",function(){return $.ma()})})()
var v={mangledGlobalNames:{o:"int",q:"double",a0:"num",h:"String",ac:"bool",I:"Null",b:"List"},mangledNames:{},getTypeFromName:getGlobalFromName,metadata:[],types:[{func:1,ret:P.I},{func:1,ret:-1,opt:[D.A]},{func:1,ret:-1,args:[D.A]},{func:1,ret:-1},{func:1,ret:-1,args:[W.ad]},{func:1,ret:P.I,args:[F.ae,P.q,P.q]},{func:1,ret:P.I,args:[F.a6]},{func:1,ret:P.I,args:[,,]},{func:1,ret:-1,args:[P.h,,]},{func:1,ret:-1,args:[P.o,[P.j,E.ao]]},{func:1,ret:P.I,args:[D.A]},{func:1,ret:P.q,args:[P.q,P.q]},{func:1,ret:-1,args:[W.p]},{func:1,ret:-1,args:[{func:1,ret:-1}]},{func:1,ret:-1,args:[W.aR]},{func:1,ret:-1,args:[W.b_]},{func:1,ret:V.Y,args:[P.q]},{func:1,args:[,]},{func:1,ret:-1,args:[P.h,P.h]},{func:1,ret:-1,args:[P.o,[P.j,D.a4]]},{func:1,ret:-1,args:[P.o,[P.j,V.ak]]},{func:1,ret:P.I,args:[W.p]},{func:1,ret:P.q,args:[P.q]},{func:1,ret:-1,args:[P.o,[P.j,U.a9]]},{func:1,ret:P.q},{func:1,ret:P.h,args:[P.o]},{func:1,ret:P.I,args:[,]},{func:1,ret:P.I,args:[P.h]},{func:1,args:[P.h]},{func:1,ret:P.I,args:[P.a0]},{func:1,ret:P.I,args:[{func:1,ret:-1,args:[D.A]}]},{func:1,ret:P.I,args:[{func:1,ret:-1}]},{func:1,ret:-1,args:[P.o,P.o]},{func:1,ret:W.a2,args:[W.F]},{func:1,ret:-1,args:[W.b9]},{func:1,ret:[P.D,P.h,P.h],args:[[P.D,P.h,P.h],P.h]},{func:1,ret:P.ac,args:[[P.j,D.a4]]},{func:1,ret:-1,args:[F.bV]},{func:1,ret:P.ac,args:[W.F]},{func:1,args:[W.p]},{func:1,ret:-1,args:[P.h,P.o]},{func:1,ret:-1,args:[P.h],opt:[,]},{func:1,ret:P.h,args:[P.h]},{func:1,args:[,P.h]},{func:1,ret:P.I,args:[,],opt:[P.aq]},{func:1,ret:P.o,args:[P.o,P.o]},{func:1,ret:P.Q,args:[P.o]},{func:1,ret:P.I,args:[P.b5]},{func:1,ret:P.I,args:[P.h,,]},{func:1,ret:P.Q,args:[,,]},{func:1,ret:[P.aB,,],args:[,]}],interceptorsByTag:null,leafTags:null};(function nativeSupport(){!function(){var u=function(a){var o={}
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
hunkHelpers.setOrUpdateInterceptorsByTag({AnimationEffectReadOnly:J.a,AnimationEffectTiming:J.a,AnimationEffectTimingReadOnly:J.a,AnimationTimeline:J.a,AnimationWorkletGlobalScope:J.a,AuthenticatorAssertionResponse:J.a,AuthenticatorAttestationResponse:J.a,AuthenticatorResponse:J.a,BackgroundFetchFetch:J.a,BackgroundFetchManager:J.a,BackgroundFetchSettledFetch:J.a,BarProp:J.a,BarcodeDetector:J.a,BluetoothRemoteGATTDescriptor:J.a,Body:J.a,BudgetState:J.a,CacheStorage:J.a,CanvasGradient:J.a,CanvasPattern:J.a,CanvasRenderingContext2D:J.a,Client:J.a,Clients:J.a,CookieStore:J.a,Coordinates:J.a,Credential:J.a,CredentialUserData:J.a,CredentialsContainer:J.a,Crypto:J.a,CryptoKey:J.a,CSS:J.a,CSSVariableReferenceValue:J.a,CustomElementRegistry:J.a,DataTransfer:J.a,DataTransferItem:J.a,DeprecatedStorageInfo:J.a,DeprecatedStorageQuota:J.a,DeprecationReport:J.a,DetectedBarcode:J.a,DetectedFace:J.a,DetectedText:J.a,DeviceAcceleration:J.a,DeviceRotationRate:J.a,DirectoryEntry:J.a,DirectoryReader:J.a,DocumentOrShadowRoot:J.a,DocumentTimeline:J.a,DOMError:J.a,DOMImplementation:J.a,Iterator:J.a,DOMMatrix:J.a,DOMMatrixReadOnly:J.a,DOMParser:J.a,DOMPoint:J.a,DOMPointReadOnly:J.a,DOMQuad:J.a,DOMStringMap:J.a,Entry:J.a,External:J.a,FaceDetector:J.a,FederatedCredential:J.a,FileEntry:J.a,DOMFileSystem:J.a,FontFace:J.a,FontFaceSource:J.a,FormData:J.a,GamepadButton:J.a,GamepadPose:J.a,Geolocation:J.a,Position:J.a,Headers:J.a,HTMLHyperlinkElementUtils:J.a,IdleDeadline:J.a,ImageBitmap:J.a,ImageBitmapRenderingContext:J.a,ImageCapture:J.a,InputDeviceCapabilities:J.a,IntersectionObserver:J.a,IntersectionObserverEntry:J.a,InterventionReport:J.a,KeyframeEffect:J.a,KeyframeEffectReadOnly:J.a,MediaCapabilities:J.a,MediaCapabilitiesInfo:J.a,MediaDeviceInfo:J.a,MediaError:J.a,MediaKeyStatusMap:J.a,MediaKeySystemAccess:J.a,MediaKeys:J.a,MediaKeysPolicy:J.a,MediaMetadata:J.a,MediaSession:J.a,MediaSettingsRange:J.a,MemoryInfo:J.a,MessageChannel:J.a,Metadata:J.a,MutationObserver:J.a,WebKitMutationObserver:J.a,MutationRecord:J.a,NavigationPreloadManager:J.a,Navigator:J.a,NavigatorAutomationInformation:J.a,NavigatorConcurrentHardware:J.a,NavigatorCookies:J.a,NavigatorUserMediaError:J.a,NodeFilter:J.a,NodeIterator:J.a,NonDocumentTypeChildNode:J.a,NonElementParentNode:J.a,NoncedElement:J.a,OffscreenCanvasRenderingContext2D:J.a,OverconstrainedError:J.a,PaintRenderingContext2D:J.a,PaintSize:J.a,PaintWorkletGlobalScope:J.a,PasswordCredential:J.a,Path2D:J.a,PaymentAddress:J.a,PaymentInstruments:J.a,PaymentManager:J.a,PaymentResponse:J.a,PerformanceEntry:J.a,PerformanceLongTaskTiming:J.a,PerformanceMark:J.a,PerformanceMeasure:J.a,PerformanceNavigation:J.a,PerformanceNavigationTiming:J.a,PerformanceObserver:J.a,PerformanceObserverEntryList:J.a,PerformancePaintTiming:J.a,PerformanceResourceTiming:J.a,PerformanceServerTiming:J.a,PerformanceTiming:J.a,Permissions:J.a,PhotoCapabilities:J.a,PositionError:J.a,Presentation:J.a,PresentationReceiver:J.a,PublicKeyCredential:J.a,PushManager:J.a,PushMessageData:J.a,PushSubscription:J.a,PushSubscriptionOptions:J.a,Range:J.a,RelatedApplication:J.a,ReportBody:J.a,ReportingObserver:J.a,ResizeObserver:J.a,ResizeObserverEntry:J.a,RTCCertificate:J.a,RTCIceCandidate:J.a,mozRTCIceCandidate:J.a,RTCLegacyStatsReport:J.a,RTCRtpContributingSource:J.a,RTCRtpReceiver:J.a,RTCRtpSender:J.a,RTCSessionDescription:J.a,mozRTCSessionDescription:J.a,RTCStatsResponse:J.a,Screen:J.a,ScrollState:J.a,ScrollTimeline:J.a,Selection:J.a,SharedArrayBuffer:J.a,SpeechRecognitionAlternative:J.a,SpeechSynthesisVoice:J.a,StaticRange:J.a,StorageManager:J.a,StyleMedia:J.a,StylePropertyMap:J.a,StylePropertyMapReadonly:J.a,SyncManager:J.a,TaskAttributionTiming:J.a,TextDetector:J.a,TextMetrics:J.a,TrackDefault:J.a,TreeWalker:J.a,TrustedHTML:J.a,TrustedScriptURL:J.a,TrustedURL:J.a,UnderlyingSourceBase:J.a,URLSearchParams:J.a,VRCoordinateSystem:J.a,VRDisplayCapabilities:J.a,VREyeParameters:J.a,VRFrameData:J.a,VRFrameOfReference:J.a,VRPose:J.a,VRStageBounds:J.a,VRStageBoundsPoint:J.a,VRStageParameters:J.a,ValidityState:J.a,VideoPlaybackQuality:J.a,VideoTrack:J.a,VTTRegion:J.a,WindowClient:J.a,WorkletAnimation:J.a,WorkletGlobalScope:J.a,XPathEvaluator:J.a,XPathExpression:J.a,XPathNSResolver:J.a,XPathResult:J.a,XMLSerializer:J.a,XSLTProcessor:J.a,Bluetooth:J.a,BluetoothCharacteristicProperties:J.a,BluetoothRemoteGATTServer:J.a,BluetoothRemoteGATTService:J.a,BluetoothUUID:J.a,BudgetService:J.a,Cache:J.a,DOMFileSystemSync:J.a,DirectoryEntrySync:J.a,DirectoryReaderSync:J.a,EntrySync:J.a,FileEntrySync:J.a,FileReaderSync:J.a,FileWriterSync:J.a,HTMLAllCollection:J.a,Mojo:J.a,MojoHandle:J.a,MojoWatcher:J.a,NFC:J.a,PagePopupController:J.a,Report:J.a,Request:J.a,Response:J.a,SubtleCrypto:J.a,USBAlternateInterface:J.a,USBConfiguration:J.a,USBDevice:J.a,USBEndpoint:J.a,USBInTransferResult:J.a,USBInterface:J.a,USBIsochronousInTransferPacket:J.a,USBIsochronousInTransferResult:J.a,USBIsochronousOutTransferPacket:J.a,USBIsochronousOutTransferResult:J.a,USBOutTransferResult:J.a,WorkerLocation:J.a,WorkerNavigator:J.a,Worklet:J.a,IDBCursor:J.a,IDBCursorWithValue:J.a,IDBFactory:J.a,IDBIndex:J.a,IDBKeyRange:J.a,IDBObjectStore:J.a,IDBObservation:J.a,IDBObserver:J.a,IDBObserverChanges:J.a,SVGAngle:J.a,SVGAnimatedAngle:J.a,SVGAnimatedBoolean:J.a,SVGAnimatedEnumeration:J.a,SVGAnimatedInteger:J.a,SVGAnimatedLength:J.a,SVGAnimatedLengthList:J.a,SVGAnimatedNumber:J.a,SVGAnimatedNumberList:J.a,SVGAnimatedPreserveAspectRatio:J.a,SVGAnimatedRect:J.a,SVGAnimatedString:J.a,SVGAnimatedTransformList:J.a,SVGMatrix:J.a,SVGPoint:J.a,SVGPreserveAspectRatio:J.a,SVGRect:J.a,SVGUnitTypes:J.a,AudioListener:J.a,AudioParam:J.a,AudioTrack:J.a,AudioWorkletGlobalScope:J.a,AudioWorkletProcessor:J.a,PeriodicWave:J.a,WebGLActiveInfo:J.a,ANGLEInstancedArrays:J.a,ANGLE_instanced_arrays:J.a,WebGLCanvas:J.a,WebGLColorBufferFloat:J.a,WebGLCompressedTextureASTC:J.a,WebGLCompressedTextureATC:J.a,WEBGL_compressed_texture_atc:J.a,WebGLCompressedTextureETC1:J.a,WEBGL_compressed_texture_etc1:J.a,WebGLCompressedTextureETC:J.a,WebGLCompressedTexturePVRTC:J.a,WEBGL_compressed_texture_pvrtc:J.a,WebGLCompressedTextureS3TC:J.a,WEBGL_compressed_texture_s3tc:J.a,WebGLCompressedTextureS3TCsRGB:J.a,WebGLDebugRendererInfo:J.a,WEBGL_debug_renderer_info:J.a,WebGLDebugShaders:J.a,WEBGL_debug_shaders:J.a,WebGLDepthTexture:J.a,WEBGL_depth_texture:J.a,WebGLDrawBuffers:J.a,WEBGL_draw_buffers:J.a,EXTsRGB:J.a,EXT_sRGB:J.a,EXTBlendMinMax:J.a,EXT_blend_minmax:J.a,EXTColorBufferFloat:J.a,EXTColorBufferHalfFloat:J.a,EXTDisjointTimerQuery:J.a,EXTDisjointTimerQueryWebGL2:J.a,EXTFragDepth:J.a,EXT_frag_depth:J.a,EXTShaderTextureLOD:J.a,EXT_shader_texture_lod:J.a,EXTTextureFilterAnisotropic:J.a,EXT_texture_filter_anisotropic:J.a,WebGLGetBufferSubDataAsync:J.a,WebGLLoseContext:J.a,WebGLExtensionLoseContext:J.a,WEBGL_lose_context:J.a,OESElementIndexUint:J.a,OES_element_index_uint:J.a,OESStandardDerivatives:J.a,OES_standard_derivatives:J.a,OESTextureFloat:J.a,OES_texture_float:J.a,OESTextureFloatLinear:J.a,OES_texture_float_linear:J.a,OESTextureHalfFloat:J.a,OES_texture_half_float:J.a,OESTextureHalfFloatLinear:J.a,OES_texture_half_float_linear:J.a,OESVertexArrayObject:J.a,OES_vertex_array_object:J.a,WebGLQuery:J.a,WebGLRenderbuffer:J.a,WebGLRenderingContext:J.a,WebGLSampler:J.a,WebGLShaderPrecisionFormat:J.a,WebGLSync:J.a,WebGLTexture:J.a,WebGLTimerQueryEXT:J.a,WebGLTransformFeedback:J.a,WebGLVertexArrayObject:J.a,WebGLVertexArrayObjectOES:J.a,WebGL:J.a,WebGL2RenderingContextBase:J.a,Database:J.a,SQLError:J.a,SQLResultSet:J.a,SQLTransaction:J.a,ArrayBuffer:H.co,DataView:H.bx,ArrayBufferView:H.bx,Float32Array:H.cp,Float64Array:H.cp,Int16Array:H.hg,Int32Array:H.hh,Int8Array:H.hi,Uint16Array:H.hj,Uint32Array:H.hk,Uint8ClampedArray:H.dy,CanvasPixelArray:H.dy,Uint8Array:H.cq,HTMLAudioElement:W.x,HTMLBRElement:W.x,HTMLBaseElement:W.x,HTMLButtonElement:W.x,HTMLContentElement:W.x,HTMLDListElement:W.x,HTMLDataElement:W.x,HTMLDataListElement:W.x,HTMLDetailsElement:W.x,HTMLDialogElement:W.x,HTMLEmbedElement:W.x,HTMLFieldSetElement:W.x,HTMLHRElement:W.x,HTMLHeadElement:W.x,HTMLHeadingElement:W.x,HTMLHtmlElement:W.x,HTMLIFrameElement:W.x,HTMLImageElement:W.x,HTMLLIElement:W.x,HTMLLegendElement:W.x,HTMLLinkElement:W.x,HTMLMapElement:W.x,HTMLMediaElement:W.x,HTMLMenuElement:W.x,HTMLMetaElement:W.x,HTMLMeterElement:W.x,HTMLModElement:W.x,HTMLOListElement:W.x,HTMLObjectElement:W.x,HTMLOptGroupElement:W.x,HTMLOptionElement:W.x,HTMLOutputElement:W.x,HTMLParagraphElement:W.x,HTMLParamElement:W.x,HTMLPictureElement:W.x,HTMLPreElement:W.x,HTMLProgressElement:W.x,HTMLQuoteElement:W.x,HTMLScriptElement:W.x,HTMLShadowElement:W.x,HTMLSlotElement:W.x,HTMLSourceElement:W.x,HTMLSpanElement:W.x,HTMLStyleElement:W.x,HTMLTableCaptionElement:W.x,HTMLTableColElement:W.x,HTMLTableSectionElement:W.x,HTMLTemplateElement:W.x,HTMLTextAreaElement:W.x,HTMLTimeElement:W.x,HTMLTitleElement:W.x,HTMLTrackElement:W.x,HTMLUListElement:W.x,HTMLUnknownElement:W.x,HTMLVideoElement:W.x,HTMLDirectoryElement:W.x,HTMLFontElement:W.x,HTMLFrameElement:W.x,HTMLFrameSetElement:W.x,HTMLMarqueeElement:W.x,HTMLElement:W.x,AccessibleNodeList:W.f0,HTMLAnchorElement:W.f2,HTMLAreaElement:W.f3,Blob:W.bG,HTMLBodyElement:W.d4,HTMLCanvasElement:W.bH,CDATASection:W.bt,CharacterData:W.bt,Comment:W.bt,ProcessingInstruction:W.bt,Text:W.bt,CSSNumericValue:W.cc,CSSUnitValue:W.cc,CSSPerspective:W.fk,CSSCharsetRule:W.U,CSSConditionRule:W.U,CSSFontFaceRule:W.U,CSSGroupingRule:W.U,CSSImportRule:W.U,CSSKeyframeRule:W.U,MozCSSKeyframeRule:W.U,WebKitCSSKeyframeRule:W.U,CSSKeyframesRule:W.U,MozCSSKeyframesRule:W.U,WebKitCSSKeyframesRule:W.U,CSSMediaRule:W.U,CSSNamespaceRule:W.U,CSSPageRule:W.U,CSSRule:W.U,CSSStyleRule:W.U,CSSSupportsRule:W.U,CSSViewportRule:W.U,CSSStyleDeclaration:W.cd,MSStyleCSSProperties:W.cd,CSS2Properties:W.cd,CSSImageValue:W.aV,CSSKeywordValue:W.aV,CSSPositionValue:W.aV,CSSResourceValue:W.aV,CSSURLImageValue:W.aV,CSSStyleValue:W.aV,CSSMatrixComponent:W.aW,CSSRotation:W.aW,CSSScale:W.aW,CSSSkew:W.aW,CSSTranslation:W.aW,CSSTransformComponent:W.aW,CSSTransformValue:W.fm,CSSUnparsedValue:W.fn,DataTransferItemList:W.fp,HTMLDivElement:W.ce,XMLDocument:W.cf,Document:W.cf,DOMException:W.fq,ClientRectList:W.dc,DOMRectList:W.dc,DOMRectReadOnly:W.dd,DOMStringList:W.fr,DOMTokenList:W.fs,Element:W.a2,AbortPaymentEvent:W.p,AnimationEvent:W.p,AnimationPlaybackEvent:W.p,ApplicationCacheErrorEvent:W.p,BackgroundFetchClickEvent:W.p,BackgroundFetchEvent:W.p,BackgroundFetchFailEvent:W.p,BackgroundFetchedEvent:W.p,BeforeInstallPromptEvent:W.p,BeforeUnloadEvent:W.p,BlobEvent:W.p,CanMakePaymentEvent:W.p,ClipboardEvent:W.p,CloseEvent:W.p,CustomEvent:W.p,DeviceMotionEvent:W.p,DeviceOrientationEvent:W.p,ErrorEvent:W.p,ExtendableEvent:W.p,ExtendableMessageEvent:W.p,FetchEvent:W.p,FontFaceSetLoadEvent:W.p,ForeignFetchEvent:W.p,GamepadEvent:W.p,HashChangeEvent:W.p,InstallEvent:W.p,MediaEncryptedEvent:W.p,MediaKeyMessageEvent:W.p,MediaQueryListEvent:W.p,MediaStreamEvent:W.p,MediaStreamTrackEvent:W.p,MessageEvent:W.p,MIDIConnectionEvent:W.p,MIDIMessageEvent:W.p,MutationEvent:W.p,NotificationEvent:W.p,PageTransitionEvent:W.p,PaymentRequestEvent:W.p,PaymentRequestUpdateEvent:W.p,PopStateEvent:W.p,PresentationConnectionAvailableEvent:W.p,PresentationConnectionCloseEvent:W.p,ProgressEvent:W.p,PromiseRejectionEvent:W.p,PushEvent:W.p,RTCDataChannelEvent:W.p,RTCDTMFToneChangeEvent:W.p,RTCPeerConnectionIceEvent:W.p,RTCTrackEvent:W.p,SecurityPolicyViolationEvent:W.p,SensorErrorEvent:W.p,SpeechRecognitionError:W.p,SpeechRecognitionEvent:W.p,SpeechSynthesisEvent:W.p,StorageEvent:W.p,SyncEvent:W.p,TrackEvent:W.p,TransitionEvent:W.p,WebKitTransitionEvent:W.p,VRDeviceEvent:W.p,VRDisplayEvent:W.p,VRSessionEvent:W.p,MojoInterfaceRequestEvent:W.p,ResourceProgressEvent:W.p,USBConnectionEvent:W.p,IDBVersionChangeEvent:W.p,AudioProcessingEvent:W.p,OfflineAudioCompletionEvent:W.p,WebGLContextEvent:W.p,Event:W.p,InputEvent:W.p,AbsoluteOrientationSensor:W.i,Accelerometer:W.i,AccessibleNode:W.i,AmbientLightSensor:W.i,Animation:W.i,ApplicationCache:W.i,DOMApplicationCache:W.i,OfflineResourceList:W.i,BackgroundFetchRegistration:W.i,BatteryManager:W.i,BroadcastChannel:W.i,CanvasCaptureMediaStreamTrack:W.i,DedicatedWorkerGlobalScope:W.i,EventSource:W.i,FileReader:W.i,FontFaceSet:W.i,Gyroscope:W.i,XMLHttpRequest:W.i,XMLHttpRequestEventTarget:W.i,XMLHttpRequestUpload:W.i,LinearAccelerationSensor:W.i,Magnetometer:W.i,MediaDevices:W.i,MediaKeySession:W.i,MediaQueryList:W.i,MediaRecorder:W.i,MediaSource:W.i,MediaStream:W.i,MediaStreamTrack:W.i,MessagePort:W.i,MIDIAccess:W.i,MIDIInput:W.i,MIDIOutput:W.i,MIDIPort:W.i,NetworkInformation:W.i,Notification:W.i,OffscreenCanvas:W.i,OrientationSensor:W.i,PaymentRequest:W.i,Performance:W.i,PermissionStatus:W.i,PresentationAvailability:W.i,PresentationConnection:W.i,PresentationConnectionList:W.i,PresentationRequest:W.i,RelativeOrientationSensor:W.i,RemotePlayback:W.i,RTCDataChannel:W.i,DataChannel:W.i,RTCDTMFSender:W.i,RTCPeerConnection:W.i,webkitRTCPeerConnection:W.i,mozRTCPeerConnection:W.i,ScreenOrientation:W.i,Sensor:W.i,ServiceWorker:W.i,ServiceWorkerContainer:W.i,ServiceWorkerGlobalScope:W.i,ServiceWorkerRegistration:W.i,SharedWorker:W.i,SharedWorkerGlobalScope:W.i,SpeechRecognition:W.i,SpeechSynthesis:W.i,SpeechSynthesisUtterance:W.i,VR:W.i,VRDevice:W.i,VRDisplay:W.i,VRSession:W.i,VisualViewport:W.i,WebSocket:W.i,Worker:W.i,WorkerGlobalScope:W.i,WorkerPerformance:W.i,BluetoothDevice:W.i,BluetoothRemoteGATTCharacteristic:W.i,Clipboard:W.i,MojoInterfaceInterceptor:W.i,USB:W.i,IDBDatabase:W.i,IDBOpenDBRequest:W.i,IDBVersionChangeRequest:W.i,IDBRequest:W.i,IDBTransaction:W.i,AnalyserNode:W.i,RealtimeAnalyserNode:W.i,AudioBufferSourceNode:W.i,AudioDestinationNode:W.i,AudioNode:W.i,AudioScheduledSourceNode:W.i,AudioWorkletNode:W.i,BiquadFilterNode:W.i,ChannelMergerNode:W.i,AudioChannelMerger:W.i,ChannelSplitterNode:W.i,AudioChannelSplitter:W.i,ConstantSourceNode:W.i,ConvolverNode:W.i,DelayNode:W.i,DynamicsCompressorNode:W.i,GainNode:W.i,AudioGainNode:W.i,IIRFilterNode:W.i,MediaElementAudioSourceNode:W.i,MediaStreamAudioDestinationNode:W.i,MediaStreamAudioSourceNode:W.i,OscillatorNode:W.i,Oscillator:W.i,PannerNode:W.i,AudioPannerNode:W.i,webkitAudioPannerNode:W.i,ScriptProcessorNode:W.i,JavaScriptAudioNode:W.i,StereoPannerNode:W.i,WaveShaperNode:W.i,EventTarget:W.i,File:W.ax,FileList:W.ch,FileWriter:W.fB,HTMLFormElement:W.fF,Gamepad:W.aG,History:W.dh,HTMLCollection:W.bO,HTMLFormControlsCollection:W.bO,HTMLOptionsCollection:W.bO,HTMLDocument:W.di,ImageData:W.ck,HTMLInputElement:W.cl,KeyboardEvent:W.b_,HTMLLabelElement:W.dn,Location:W.fW,MediaList:W.h9,MIDIInputMap:W.ha,MIDIOutputMap:W.hc,MimeType:W.aJ,MimeTypeArray:W.he,PointerEvent:W.ad,MouseEvent:W.ad,DragEvent:W.ad,DocumentFragment:W.F,ShadowRoot:W.F,Attr:W.F,DocumentType:W.F,Node:W.F,NodeList:W.cr,RadioNodeList:W.cr,Plugin:W.aK,PluginArray:W.hr,RTCStatsReport:W.hB,HTMLSelectElement:W.hE,SourceBuffer:W.aM,SourceBufferList:W.hN,SpeechGrammar:W.aN,SpeechGrammarList:W.hO,SpeechRecognitionResult:W.aO,Storage:W.hR,CSSStyleSheet:W.ay,StyleSheet:W.ay,HTMLTableCellElement:W.b4,HTMLTableDataCellElement:W.b4,HTMLTableHeaderCellElement:W.b4,HTMLTableElement:W.dN,HTMLTableRowElement:W.dO,TextTrack:W.aP,TextTrackCue:W.az,VTTCue:W.az,TextTrackCueList:W.hZ,TextTrackList:W.i_,TimeRanges:W.i2,Touch:W.aQ,TouchEvent:W.aR,TouchList:W.i5,TrackDefaultList:W.i6,CompositionEvent:W.bA,FocusEvent:W.bA,TextEvent:W.bA,UIEvent:W.bA,URL:W.iv,VideoTrackList:W.iL,WheelEvent:W.b9,Window:W.cJ,DOMWindow:W.cJ,CSSRuleList:W.iV,ClientRect:W.e9,DOMRect:W.e9,GamepadList:W.j8,NamedNodeMap:W.eq,MozNamedAttrMap:W.eq,SpeechRecognitionResultList:W.jk,StyleSheetList:W.jo,SVGLength:P.b0,SVGLengthList:P.fP,SVGNumber:P.b3,SVGNumberList:P.hn,SVGPointList:P.ht,SVGStringList:P.hX,SVGAElement:P.r,SVGAnimateElement:P.r,SVGAnimateMotionElement:P.r,SVGAnimateTransformElement:P.r,SVGAnimationElement:P.r,SVGCircleElement:P.r,SVGClipPathElement:P.r,SVGDefsElement:P.r,SVGDescElement:P.r,SVGDiscardElement:P.r,SVGEllipseElement:P.r,SVGFEBlendElement:P.r,SVGFEColorMatrixElement:P.r,SVGFEComponentTransferElement:P.r,SVGFECompositeElement:P.r,SVGFEConvolveMatrixElement:P.r,SVGFEDiffuseLightingElement:P.r,SVGFEDisplacementMapElement:P.r,SVGFEDistantLightElement:P.r,SVGFEFloodElement:P.r,SVGFEFuncAElement:P.r,SVGFEFuncBElement:P.r,SVGFEFuncGElement:P.r,SVGFEFuncRElement:P.r,SVGFEGaussianBlurElement:P.r,SVGFEImageElement:P.r,SVGFEMergeElement:P.r,SVGFEMergeNodeElement:P.r,SVGFEMorphologyElement:P.r,SVGFEOffsetElement:P.r,SVGFEPointLightElement:P.r,SVGFESpecularLightingElement:P.r,SVGFESpotLightElement:P.r,SVGFETileElement:P.r,SVGFETurbulenceElement:P.r,SVGFilterElement:P.r,SVGForeignObjectElement:P.r,SVGGElement:P.r,SVGGeometryElement:P.r,SVGGraphicsElement:P.r,SVGImageElement:P.r,SVGLineElement:P.r,SVGLinearGradientElement:P.r,SVGMarkerElement:P.r,SVGMaskElement:P.r,SVGMetadataElement:P.r,SVGPathElement:P.r,SVGPatternElement:P.r,SVGPolygonElement:P.r,SVGPolylineElement:P.r,SVGRadialGradientElement:P.r,SVGRectElement:P.r,SVGScriptElement:P.r,SVGSetElement:P.r,SVGStopElement:P.r,SVGStyleElement:P.r,SVGElement:P.r,SVGSVGElement:P.r,SVGSwitchElement:P.r,SVGSymbolElement:P.r,SVGTSpanElement:P.r,SVGTextContentElement:P.r,SVGTextElement:P.r,SVGTextPathElement:P.r,SVGTextPositioningElement:P.r,SVGTitleElement:P.r,SVGUseElement:P.r,SVGViewElement:P.r,SVGGradientElement:P.r,SVGComponentTransferFunctionElement:P.r,SVGFEDropShadowElement:P.r,SVGMPathElement:P.r,SVGTransform:P.b6,SVGTransformList:P.i7,AudioBuffer:P.f6,AudioParamMap:P.f7,AudioTrackList:P.f9,AudioContext:P.bF,webkitAudioContext:P.bF,BaseAudioContext:P.bF,OfflineAudioContext:P.ho,WebGLBuffer:P.d5,WebGLFramebuffer:P.dg,WebGLProgram:P.dD,WebGL2RenderingContext:P.bU,WebGLShader:P.dH,WebGLUniformLocation:P.dY,SQLResultSetRowList:P.hP})
hunkHelpers.setOrUpdateLeafTags({AnimationEffectReadOnly:true,AnimationEffectTiming:true,AnimationEffectTimingReadOnly:true,AnimationTimeline:true,AnimationWorkletGlobalScope:true,AuthenticatorAssertionResponse:true,AuthenticatorAttestationResponse:true,AuthenticatorResponse:true,BackgroundFetchFetch:true,BackgroundFetchManager:true,BackgroundFetchSettledFetch:true,BarProp:true,BarcodeDetector:true,BluetoothRemoteGATTDescriptor:true,Body:true,BudgetState:true,CacheStorage:true,CanvasGradient:true,CanvasPattern:true,CanvasRenderingContext2D:true,Client:true,Clients:true,CookieStore:true,Coordinates:true,Credential:true,CredentialUserData:true,CredentialsContainer:true,Crypto:true,CryptoKey:true,CSS:true,CSSVariableReferenceValue:true,CustomElementRegistry:true,DataTransfer:true,DataTransferItem:true,DeprecatedStorageInfo:true,DeprecatedStorageQuota:true,DeprecationReport:true,DetectedBarcode:true,DetectedFace:true,DetectedText:true,DeviceAcceleration:true,DeviceRotationRate:true,DirectoryEntry:true,DirectoryReader:true,DocumentOrShadowRoot:true,DocumentTimeline:true,DOMError:true,DOMImplementation:true,Iterator:true,DOMMatrix:true,DOMMatrixReadOnly:true,DOMParser:true,DOMPoint:true,DOMPointReadOnly:true,DOMQuad:true,DOMStringMap:true,Entry:true,External:true,FaceDetector:true,FederatedCredential:true,FileEntry:true,DOMFileSystem:true,FontFace:true,FontFaceSource:true,FormData:true,GamepadButton:true,GamepadPose:true,Geolocation:true,Position:true,Headers:true,HTMLHyperlinkElementUtils:true,IdleDeadline:true,ImageBitmap:true,ImageBitmapRenderingContext:true,ImageCapture:true,InputDeviceCapabilities:true,IntersectionObserver:true,IntersectionObserverEntry:true,InterventionReport:true,KeyframeEffect:true,KeyframeEffectReadOnly:true,MediaCapabilities:true,MediaCapabilitiesInfo:true,MediaDeviceInfo:true,MediaError:true,MediaKeyStatusMap:true,MediaKeySystemAccess:true,MediaKeys:true,MediaKeysPolicy:true,MediaMetadata:true,MediaSession:true,MediaSettingsRange:true,MemoryInfo:true,MessageChannel:true,Metadata:true,MutationObserver:true,WebKitMutationObserver:true,MutationRecord:true,NavigationPreloadManager:true,Navigator:true,NavigatorAutomationInformation:true,NavigatorConcurrentHardware:true,NavigatorCookies:true,NavigatorUserMediaError:true,NodeFilter:true,NodeIterator:true,NonDocumentTypeChildNode:true,NonElementParentNode:true,NoncedElement:true,OffscreenCanvasRenderingContext2D:true,OverconstrainedError:true,PaintRenderingContext2D:true,PaintSize:true,PaintWorkletGlobalScope:true,PasswordCredential:true,Path2D:true,PaymentAddress:true,PaymentInstruments:true,PaymentManager:true,PaymentResponse:true,PerformanceEntry:true,PerformanceLongTaskTiming:true,PerformanceMark:true,PerformanceMeasure:true,PerformanceNavigation:true,PerformanceNavigationTiming:true,PerformanceObserver:true,PerformanceObserverEntryList:true,PerformancePaintTiming:true,PerformanceResourceTiming:true,PerformanceServerTiming:true,PerformanceTiming:true,Permissions:true,PhotoCapabilities:true,PositionError:true,Presentation:true,PresentationReceiver:true,PublicKeyCredential:true,PushManager:true,PushMessageData:true,PushSubscription:true,PushSubscriptionOptions:true,Range:true,RelatedApplication:true,ReportBody:true,ReportingObserver:true,ResizeObserver:true,ResizeObserverEntry:true,RTCCertificate:true,RTCIceCandidate:true,mozRTCIceCandidate:true,RTCLegacyStatsReport:true,RTCRtpContributingSource:true,RTCRtpReceiver:true,RTCRtpSender:true,RTCSessionDescription:true,mozRTCSessionDescription:true,RTCStatsResponse:true,Screen:true,ScrollState:true,ScrollTimeline:true,Selection:true,SharedArrayBuffer:true,SpeechRecognitionAlternative:true,SpeechSynthesisVoice:true,StaticRange:true,StorageManager:true,StyleMedia:true,StylePropertyMap:true,StylePropertyMapReadonly:true,SyncManager:true,TaskAttributionTiming:true,TextDetector:true,TextMetrics:true,TrackDefault:true,TreeWalker:true,TrustedHTML:true,TrustedScriptURL:true,TrustedURL:true,UnderlyingSourceBase:true,URLSearchParams:true,VRCoordinateSystem:true,VRDisplayCapabilities:true,VREyeParameters:true,VRFrameData:true,VRFrameOfReference:true,VRPose:true,VRStageBounds:true,VRStageBoundsPoint:true,VRStageParameters:true,ValidityState:true,VideoPlaybackQuality:true,VideoTrack:true,VTTRegion:true,WindowClient:true,WorkletAnimation:true,WorkletGlobalScope:true,XPathEvaluator:true,XPathExpression:true,XPathNSResolver:true,XPathResult:true,XMLSerializer:true,XSLTProcessor:true,Bluetooth:true,BluetoothCharacteristicProperties:true,BluetoothRemoteGATTServer:true,BluetoothRemoteGATTService:true,BluetoothUUID:true,BudgetService:true,Cache:true,DOMFileSystemSync:true,DirectoryEntrySync:true,DirectoryReaderSync:true,EntrySync:true,FileEntrySync:true,FileReaderSync:true,FileWriterSync:true,HTMLAllCollection:true,Mojo:true,MojoHandle:true,MojoWatcher:true,NFC:true,PagePopupController:true,Report:true,Request:true,Response:true,SubtleCrypto:true,USBAlternateInterface:true,USBConfiguration:true,USBDevice:true,USBEndpoint:true,USBInTransferResult:true,USBInterface:true,USBIsochronousInTransferPacket:true,USBIsochronousInTransferResult:true,USBIsochronousOutTransferPacket:true,USBIsochronousOutTransferResult:true,USBOutTransferResult:true,WorkerLocation:true,WorkerNavigator:true,Worklet:true,IDBCursor:true,IDBCursorWithValue:true,IDBFactory:true,IDBIndex:true,IDBKeyRange:true,IDBObjectStore:true,IDBObservation:true,IDBObserver:true,IDBObserverChanges:true,SVGAngle:true,SVGAnimatedAngle:true,SVGAnimatedBoolean:true,SVGAnimatedEnumeration:true,SVGAnimatedInteger:true,SVGAnimatedLength:true,SVGAnimatedLengthList:true,SVGAnimatedNumber:true,SVGAnimatedNumberList:true,SVGAnimatedPreserveAspectRatio:true,SVGAnimatedRect:true,SVGAnimatedString:true,SVGAnimatedTransformList:true,SVGMatrix:true,SVGPoint:true,SVGPreserveAspectRatio:true,SVGRect:true,SVGUnitTypes:true,AudioListener:true,AudioParam:true,AudioTrack:true,AudioWorkletGlobalScope:true,AudioWorkletProcessor:true,PeriodicWave:true,WebGLActiveInfo:true,ANGLEInstancedArrays:true,ANGLE_instanced_arrays:true,WebGLCanvas:true,WebGLColorBufferFloat:true,WebGLCompressedTextureASTC:true,WebGLCompressedTextureATC:true,WEBGL_compressed_texture_atc:true,WebGLCompressedTextureETC1:true,WEBGL_compressed_texture_etc1:true,WebGLCompressedTextureETC:true,WebGLCompressedTexturePVRTC:true,WEBGL_compressed_texture_pvrtc:true,WebGLCompressedTextureS3TC:true,WEBGL_compressed_texture_s3tc:true,WebGLCompressedTextureS3TCsRGB:true,WebGLDebugRendererInfo:true,WEBGL_debug_renderer_info:true,WebGLDebugShaders:true,WEBGL_debug_shaders:true,WebGLDepthTexture:true,WEBGL_depth_texture:true,WebGLDrawBuffers:true,WEBGL_draw_buffers:true,EXTsRGB:true,EXT_sRGB:true,EXTBlendMinMax:true,EXT_blend_minmax:true,EXTColorBufferFloat:true,EXTColorBufferHalfFloat:true,EXTDisjointTimerQuery:true,EXTDisjointTimerQueryWebGL2:true,EXTFragDepth:true,EXT_frag_depth:true,EXTShaderTextureLOD:true,EXT_shader_texture_lod:true,EXTTextureFilterAnisotropic:true,EXT_texture_filter_anisotropic:true,WebGLGetBufferSubDataAsync:true,WebGLLoseContext:true,WebGLExtensionLoseContext:true,WEBGL_lose_context:true,OESElementIndexUint:true,OES_element_index_uint:true,OESStandardDerivatives:true,OES_standard_derivatives:true,OESTextureFloat:true,OES_texture_float:true,OESTextureFloatLinear:true,OES_texture_float_linear:true,OESTextureHalfFloat:true,OES_texture_half_float:true,OESTextureHalfFloatLinear:true,OES_texture_half_float_linear:true,OESVertexArrayObject:true,OES_vertex_array_object:true,WebGLQuery:true,WebGLRenderbuffer:true,WebGLRenderingContext:true,WebGLSampler:true,WebGLShaderPrecisionFormat:true,WebGLSync:true,WebGLTexture:true,WebGLTimerQueryEXT:true,WebGLTransformFeedback:true,WebGLVertexArrayObject:true,WebGLVertexArrayObjectOES:true,WebGL:true,WebGL2RenderingContextBase:true,Database:true,SQLError:true,SQLResultSet:true,SQLTransaction:true,ArrayBuffer:true,DataView:true,ArrayBufferView:false,Float32Array:true,Float64Array:true,Int16Array:true,Int32Array:true,Int8Array:true,Uint16Array:true,Uint32Array:true,Uint8ClampedArray:true,CanvasPixelArray:true,Uint8Array:false,HTMLAudioElement:true,HTMLBRElement:true,HTMLBaseElement:true,HTMLButtonElement:true,HTMLContentElement:true,HTMLDListElement:true,HTMLDataElement:true,HTMLDataListElement:true,HTMLDetailsElement:true,HTMLDialogElement:true,HTMLEmbedElement:true,HTMLFieldSetElement:true,HTMLHRElement:true,HTMLHeadElement:true,HTMLHeadingElement:true,HTMLHtmlElement:true,HTMLIFrameElement:true,HTMLImageElement:true,HTMLLIElement:true,HTMLLegendElement:true,HTMLLinkElement:true,HTMLMapElement:true,HTMLMediaElement:true,HTMLMenuElement:true,HTMLMetaElement:true,HTMLMeterElement:true,HTMLModElement:true,HTMLOListElement:true,HTMLObjectElement:true,HTMLOptGroupElement:true,HTMLOptionElement:true,HTMLOutputElement:true,HTMLParagraphElement:true,HTMLParamElement:true,HTMLPictureElement:true,HTMLPreElement:true,HTMLProgressElement:true,HTMLQuoteElement:true,HTMLScriptElement:true,HTMLShadowElement:true,HTMLSlotElement:true,HTMLSourceElement:true,HTMLSpanElement:true,HTMLStyleElement:true,HTMLTableCaptionElement:true,HTMLTableColElement:true,HTMLTableSectionElement:true,HTMLTemplateElement:true,HTMLTextAreaElement:true,HTMLTimeElement:true,HTMLTitleElement:true,HTMLTrackElement:true,HTMLUListElement:true,HTMLUnknownElement:true,HTMLVideoElement:true,HTMLDirectoryElement:true,HTMLFontElement:true,HTMLFrameElement:true,HTMLFrameSetElement:true,HTMLMarqueeElement:true,HTMLElement:false,AccessibleNodeList:true,HTMLAnchorElement:true,HTMLAreaElement:true,Blob:false,HTMLBodyElement:true,HTMLCanvasElement:true,CDATASection:true,CharacterData:true,Comment:true,ProcessingInstruction:true,Text:true,CSSNumericValue:true,CSSUnitValue:true,CSSPerspective:true,CSSCharsetRule:true,CSSConditionRule:true,CSSFontFaceRule:true,CSSGroupingRule:true,CSSImportRule:true,CSSKeyframeRule:true,MozCSSKeyframeRule:true,WebKitCSSKeyframeRule:true,CSSKeyframesRule:true,MozCSSKeyframesRule:true,WebKitCSSKeyframesRule:true,CSSMediaRule:true,CSSNamespaceRule:true,CSSPageRule:true,CSSRule:true,CSSStyleRule:true,CSSSupportsRule:true,CSSViewportRule:true,CSSStyleDeclaration:true,MSStyleCSSProperties:true,CSS2Properties:true,CSSImageValue:true,CSSKeywordValue:true,CSSPositionValue:true,CSSResourceValue:true,CSSURLImageValue:true,CSSStyleValue:false,CSSMatrixComponent:true,CSSRotation:true,CSSScale:true,CSSSkew:true,CSSTranslation:true,CSSTransformComponent:false,CSSTransformValue:true,CSSUnparsedValue:true,DataTransferItemList:true,HTMLDivElement:true,XMLDocument:true,Document:false,DOMException:true,ClientRectList:true,DOMRectList:true,DOMRectReadOnly:false,DOMStringList:true,DOMTokenList:true,Element:false,AbortPaymentEvent:true,AnimationEvent:true,AnimationPlaybackEvent:true,ApplicationCacheErrorEvent:true,BackgroundFetchClickEvent:true,BackgroundFetchEvent:true,BackgroundFetchFailEvent:true,BackgroundFetchedEvent:true,BeforeInstallPromptEvent:true,BeforeUnloadEvent:true,BlobEvent:true,CanMakePaymentEvent:true,ClipboardEvent:true,CloseEvent:true,CustomEvent:true,DeviceMotionEvent:true,DeviceOrientationEvent:true,ErrorEvent:true,ExtendableEvent:true,ExtendableMessageEvent:true,FetchEvent:true,FontFaceSetLoadEvent:true,ForeignFetchEvent:true,GamepadEvent:true,HashChangeEvent:true,InstallEvent:true,MediaEncryptedEvent:true,MediaKeyMessageEvent:true,MediaQueryListEvent:true,MediaStreamEvent:true,MediaStreamTrackEvent:true,MessageEvent:true,MIDIConnectionEvent:true,MIDIMessageEvent:true,MutationEvent:true,NotificationEvent:true,PageTransitionEvent:true,PaymentRequestEvent:true,PaymentRequestUpdateEvent:true,PopStateEvent:true,PresentationConnectionAvailableEvent:true,PresentationConnectionCloseEvent:true,ProgressEvent:true,PromiseRejectionEvent:true,PushEvent:true,RTCDataChannelEvent:true,RTCDTMFToneChangeEvent:true,RTCPeerConnectionIceEvent:true,RTCTrackEvent:true,SecurityPolicyViolationEvent:true,SensorErrorEvent:true,SpeechRecognitionError:true,SpeechRecognitionEvent:true,SpeechSynthesisEvent:true,StorageEvent:true,SyncEvent:true,TrackEvent:true,TransitionEvent:true,WebKitTransitionEvent:true,VRDeviceEvent:true,VRDisplayEvent:true,VRSessionEvent:true,MojoInterfaceRequestEvent:true,ResourceProgressEvent:true,USBConnectionEvent:true,IDBVersionChangeEvent:true,AudioProcessingEvent:true,OfflineAudioCompletionEvent:true,WebGLContextEvent:true,Event:false,InputEvent:false,AbsoluteOrientationSensor:true,Accelerometer:true,AccessibleNode:true,AmbientLightSensor:true,Animation:true,ApplicationCache:true,DOMApplicationCache:true,OfflineResourceList:true,BackgroundFetchRegistration:true,BatteryManager:true,BroadcastChannel:true,CanvasCaptureMediaStreamTrack:true,DedicatedWorkerGlobalScope:true,EventSource:true,FileReader:true,FontFaceSet:true,Gyroscope:true,XMLHttpRequest:true,XMLHttpRequestEventTarget:true,XMLHttpRequestUpload:true,LinearAccelerationSensor:true,Magnetometer:true,MediaDevices:true,MediaKeySession:true,MediaQueryList:true,MediaRecorder:true,MediaSource:true,MediaStream:true,MediaStreamTrack:true,MessagePort:true,MIDIAccess:true,MIDIInput:true,MIDIOutput:true,MIDIPort:true,NetworkInformation:true,Notification:true,OffscreenCanvas:true,OrientationSensor:true,PaymentRequest:true,Performance:true,PermissionStatus:true,PresentationAvailability:true,PresentationConnection:true,PresentationConnectionList:true,PresentationRequest:true,RelativeOrientationSensor:true,RemotePlayback:true,RTCDataChannel:true,DataChannel:true,RTCDTMFSender:true,RTCPeerConnection:true,webkitRTCPeerConnection:true,mozRTCPeerConnection:true,ScreenOrientation:true,Sensor:true,ServiceWorker:true,ServiceWorkerContainer:true,ServiceWorkerGlobalScope:true,ServiceWorkerRegistration:true,SharedWorker:true,SharedWorkerGlobalScope:true,SpeechRecognition:true,SpeechSynthesis:true,SpeechSynthesisUtterance:true,VR:true,VRDevice:true,VRDisplay:true,VRSession:true,VisualViewport:true,WebSocket:true,Worker:true,WorkerGlobalScope:true,WorkerPerformance:true,BluetoothDevice:true,BluetoothRemoteGATTCharacteristic:true,Clipboard:true,MojoInterfaceInterceptor:true,USB:true,IDBDatabase:true,IDBOpenDBRequest:true,IDBVersionChangeRequest:true,IDBRequest:true,IDBTransaction:true,AnalyserNode:true,RealtimeAnalyserNode:true,AudioBufferSourceNode:true,AudioDestinationNode:true,AudioNode:true,AudioScheduledSourceNode:true,AudioWorkletNode:true,BiquadFilterNode:true,ChannelMergerNode:true,AudioChannelMerger:true,ChannelSplitterNode:true,AudioChannelSplitter:true,ConstantSourceNode:true,ConvolverNode:true,DelayNode:true,DynamicsCompressorNode:true,GainNode:true,AudioGainNode:true,IIRFilterNode:true,MediaElementAudioSourceNode:true,MediaStreamAudioDestinationNode:true,MediaStreamAudioSourceNode:true,OscillatorNode:true,Oscillator:true,PannerNode:true,AudioPannerNode:true,webkitAudioPannerNode:true,ScriptProcessorNode:true,JavaScriptAudioNode:true,StereoPannerNode:true,WaveShaperNode:true,EventTarget:false,File:true,FileList:true,FileWriter:true,HTMLFormElement:true,Gamepad:true,History:true,HTMLCollection:true,HTMLFormControlsCollection:true,HTMLOptionsCollection:true,HTMLDocument:true,ImageData:true,HTMLInputElement:true,KeyboardEvent:true,HTMLLabelElement:true,Location:true,MediaList:true,MIDIInputMap:true,MIDIOutputMap:true,MimeType:true,MimeTypeArray:true,PointerEvent:true,MouseEvent:false,DragEvent:false,DocumentFragment:true,ShadowRoot:true,Attr:true,DocumentType:true,Node:false,NodeList:true,RadioNodeList:true,Plugin:true,PluginArray:true,RTCStatsReport:true,HTMLSelectElement:true,SourceBuffer:true,SourceBufferList:true,SpeechGrammar:true,SpeechGrammarList:true,SpeechRecognitionResult:true,Storage:true,CSSStyleSheet:true,StyleSheet:true,HTMLTableCellElement:true,HTMLTableDataCellElement:true,HTMLTableHeaderCellElement:true,HTMLTableElement:true,HTMLTableRowElement:true,TextTrack:true,TextTrackCue:true,VTTCue:true,TextTrackCueList:true,TextTrackList:true,TimeRanges:true,Touch:true,TouchEvent:true,TouchList:true,TrackDefaultList:true,CompositionEvent:true,FocusEvent:true,TextEvent:true,UIEvent:false,URL:true,VideoTrackList:true,WheelEvent:true,Window:true,DOMWindow:true,CSSRuleList:true,ClientRect:true,DOMRect:true,GamepadList:true,NamedNodeMap:true,MozNamedAttrMap:true,SpeechRecognitionResultList:true,StyleSheetList:true,SVGLength:true,SVGLengthList:true,SVGNumber:true,SVGNumberList:true,SVGPointList:true,SVGStringList:true,SVGAElement:true,SVGAnimateElement:true,SVGAnimateMotionElement:true,SVGAnimateTransformElement:true,SVGAnimationElement:true,SVGCircleElement:true,SVGClipPathElement:true,SVGDefsElement:true,SVGDescElement:true,SVGDiscardElement:true,SVGEllipseElement:true,SVGFEBlendElement:true,SVGFEColorMatrixElement:true,SVGFEComponentTransferElement:true,SVGFECompositeElement:true,SVGFEConvolveMatrixElement:true,SVGFEDiffuseLightingElement:true,SVGFEDisplacementMapElement:true,SVGFEDistantLightElement:true,SVGFEFloodElement:true,SVGFEFuncAElement:true,SVGFEFuncBElement:true,SVGFEFuncGElement:true,SVGFEFuncRElement:true,SVGFEGaussianBlurElement:true,SVGFEImageElement:true,SVGFEMergeElement:true,SVGFEMergeNodeElement:true,SVGFEMorphologyElement:true,SVGFEOffsetElement:true,SVGFEPointLightElement:true,SVGFESpecularLightingElement:true,SVGFESpotLightElement:true,SVGFETileElement:true,SVGFETurbulenceElement:true,SVGFilterElement:true,SVGForeignObjectElement:true,SVGGElement:true,SVGGeometryElement:true,SVGGraphicsElement:true,SVGImageElement:true,SVGLineElement:true,SVGLinearGradientElement:true,SVGMarkerElement:true,SVGMaskElement:true,SVGMetadataElement:true,SVGPathElement:true,SVGPatternElement:true,SVGPolygonElement:true,SVGPolylineElement:true,SVGRadialGradientElement:true,SVGRectElement:true,SVGScriptElement:true,SVGSetElement:true,SVGStopElement:true,SVGStyleElement:true,SVGElement:true,SVGSVGElement:true,SVGSwitchElement:true,SVGSymbolElement:true,SVGTSpanElement:true,SVGTextContentElement:true,SVGTextElement:true,SVGTextPathElement:true,SVGTextPositioningElement:true,SVGTitleElement:true,SVGUseElement:true,SVGViewElement:true,SVGGradientElement:true,SVGComponentTransferFunctionElement:true,SVGFEDropShadowElement:true,SVGMPathElement:true,SVGTransform:true,SVGTransformList:true,AudioBuffer:true,AudioParamMap:true,AudioTrackList:true,AudioContext:true,webkitAudioContext:true,BaseAudioContext:false,OfflineAudioContext:true,WebGLBuffer:true,WebGLFramebuffer:true,WebGLProgram:true,WebGL2RenderingContext:true,WebGLShader:true,WebGLUniformLocation:true,SQLResultSetRowList:true})
H.dw.$nativeSuperclassTag="ArrayBufferView"
H.cM.$nativeSuperclassTag="ArrayBufferView"
H.cN.$nativeSuperclassTag="ArrayBufferView"
H.cp.$nativeSuperclassTag="ArrayBufferView"
H.cO.$nativeSuperclassTag="ArrayBufferView"
H.cP.$nativeSuperclassTag="ArrayBufferView"
H.dx.$nativeSuperclassTag="ArrayBufferView"
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
if(typeof dartMainRunner==="function")dartMainRunner(K.m4,[])
else K.m4([])})})()
//# sourceMappingURL=test.dart.js.map
