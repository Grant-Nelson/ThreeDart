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
a[c]=function(){a[c]=function(){H.lH(b)}
var t
var s=d
try{if(a[b]===u){t=a[b]=s
t=a[b]=d()}else t=a[b]}finally{if(t===s)a[b]=null
a[c]=function(){return this[b]}}return t}}function makeConstList(a){a.immutable$list=Array
a.fixed$length=Array
return a}function convertToFastObject(a){function t(){}t.prototype=a
new t()
return a}function convertAllToFastObject(a){for(var u=0;u<a.length;++u)convertToFastObject(a[u])}var y=0
function tearOffGetter(a,b,c,d,e){return e?new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+d+y+++"(receiver) {"+"if (c === null) c = "+"H.iF"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, true, name);"+"return new c(this, funcs[0], receiver, name);"+"}")(a,b,c,d,H,null):new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+d+y+++"() {"+"if (c === null) c = "+"H.iF"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, false, name);"+"return new c(this, funcs[0], null, name);"+"}")(a,b,c,d,H,null)}function tearOff(a,b,c,d,e,f){var u=null
return d?function(){if(u===null)u=H.iF(this,a,b,c,true,false,e).prototype
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
if(w[u][a])return w[u][a]}}var C={},H={ip:function ip(a){this.a=a},
im:function(){return new P.cg("No element")},
kt:function(){return new P.cg("Too many elements")},
o:function o(a){this.a=a},
ev:function ev(){},
bz:function bz(){},
c5:function c5(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=null
_.$ti=d},
eZ:function eZ(a,b,c){this.a=a
this.b=b
this.$ti=c},
f_:function f_(a,b,c){var _=this
_.a=null
_.b=a
_.c=b
_.$ti=c},
f0:function f0(a,b,c){this.a=a
this.b=b
this.$ti=c},
cv:function cv(a,b,c){this.a=a
this.b=b
this.$ti=c},
hf:function hf(a,b,c){this.a=a
this.b=b
this.$ti=c},
bv:function bv(){},
dO:function dO(){},
dN:function dN(){},
bP:function(a){var u,t
u=H.I(v.mangledGlobalNames[a])
if(typeof u==="string")return u
t="minified:"+a
return t},
lo:function(a){return v.types[H.a0(a)]},
lv:function(a,b){var u
if(b!=null){u=b.x
if(u!=null)return u}return!!J.S(a).$iaB},
e:function(a){var u
if(typeof a==="string")return a
if(typeof a==="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
u=J.aj(a)
if(typeof u!=="string")throw H.h(H.bK(a))
return u},
kL:function(a){var u,t,s
u=a.$reflectionInfo
if(u==null)return
u=J.eO(u)
t=u[0]
s=u[1]
return new H.fk(a,u,(t&2)===2,t>>2,s>>1,(s&1)===1,u[2])},
cc:function(a){var u=a.$identityHash
if(u==null){u=Math.random()*0x3fffffff|0
a.$identityHash=u}return u},
bD:function(a){return H.kC(a)+H.iC(H.bm(a),0,null)},
kC:function(a){var u,t,s,r,q,p,o,n,m
u=J.S(a)
t=u.constructor
if(typeof t=="function"){s=t.name
r=typeof s==="string"?s:null}else r=null
q=r==null
if(q||u===C.N||!!u.$icu){p=C.B(a)
if(q)r=p
if(p==="Object"){o=a.constructor
if(typeof o=="function"){n=String(o).match(/^\s*function\s*([\w$]*)\s*\(/)
m=n==null?null:n[1]
if(typeof m==="string"&&/^\w+$/.test(m))r=m}}return r}r=r
return H.bP(r.length>1&&C.i.aK(r,0)===36?C.i.bc(r,1):r)},
jg:function(a){var u,t,s,r,q
u=a.length
if(u<=500)return String.fromCharCode.apply(null,a)
for(t="",s=0;s<u;s=r){r=s+500
q=r<u?r:u
t+=String.fromCharCode.apply(null,a.slice(s,q))}return t},
kK:function(a){var u,t,s,r
u=H.b([],[P.y])
for(t=a.length,s=0;s<a.length;a.length===t||(0,H.x)(a),++s){r=a[s]
if(typeof r!=="number"||Math.floor(r)!==r)throw H.h(H.bK(r))
if(r<=65535)C.a.h(u,r)
else if(r<=1114111){C.a.h(u,55296+(C.h.bi(r-65536,10)&1023))
C.a.h(u,56320+(r&1023))}else throw H.h(H.bK(r))}return H.jg(u)},
jh:function(a){var u,t,s
for(u=a.length,t=0;t<u;++t){s=a[t]
if(typeof s!=="number"||Math.floor(s)!==s)throw H.h(H.bK(s))
if(s<0)throw H.h(H.bK(s))
if(s>65535)return H.kK(a)}return H.jg(a)},
ir:function(a){var u
if(a<=65535)return String.fromCharCode(a)
if(a<=1114111){u=a-65536
return String.fromCharCode((55296|C.h.bi(u,10))>>>0,56320|u&1023)}throw H.h(P.au(a,0,1114111,null,null))},
bC:function(a){if(a.date===void 0)a.date=new Date(a.a)
return a.date},
kJ:function(a){var u=H.bC(a).getFullYear()+0
return u},
kH:function(a){var u=H.bC(a).getMonth()+1
return u},
kD:function(a){var u=H.bC(a).getDate()+0
return u},
kE:function(a){var u=H.bC(a).getHours()+0
return u},
kG:function(a){var u=H.bC(a).getMinutes()+0
return u},
kI:function(a){var u=H.bC(a).getSeconds()+0
return u},
kF:function(a){var u=H.bC(a).getMilliseconds()+0
return u},
B:function(a){throw H.h(H.bK(a))},
l:function(a,b){if(a==null)J.bo(a)
throw H.h(H.cJ(a,b))},
cJ:function(a,b){var u,t
if(typeof b!=="number"||Math.floor(b)!==b)return new P.az(!0,b,"index",null)
u=H.a0(J.bo(a))
if(!(b<0)){if(typeof u!=="number")return H.B(u)
t=b>=u}else t=!0
if(t)return P.bx(b,a,"index",null,u)
return P.fi(b,"index",null)},
ll:function(a,b,c){if(a>c)return new P.bE(0,c,!0,a,"start","Invalid value")
if(b!=null)if(b<a||b>c)return new P.bE(a,c,!0,b,"end","Invalid value")
return new P.az(!0,b,"end",null)},
bK:function(a){return new P.az(!0,a,null,null)},
lh:function(a){if(typeof a!=="number")throw H.h(H.bK(a))
return a},
h:function(a){var u
if(a==null)a=new P.dn()
u=new Error()
u.dartException=a
if("defineProperty" in Object){Object.defineProperty(u,"message",{get:H.jU})
u.name=""}else u.toString=H.jU
return u},
jU:function(){return J.aj(this.dartException)},
q:function(a){throw H.h(a)},
x:function(a){throw H.h(P.b7(a))},
aP:function(a){var u,t,s,r,q,p
a=a.replace(String({}),'$receiver$').replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
u=a.match(/\\\$[a-zA-Z]+\\\$/g)
if(u==null)u=H.b([],[P.m])
t=u.indexOf("\\$arguments\\$")
s=u.indexOf("\\$argumentsExpr\\$")
r=u.indexOf("\\$expr\\$")
q=u.indexOf("\\$method\\$")
p=u.indexOf("\\$receiver\\$")
return new H.fP(a.replace(new RegExp('\\\\\\$arguments\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$argumentsExpr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$expr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$method\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$receiver\\\\\\$','g'),'((?:x|[^x])*)'),t,s,r,q,p)},
fQ:function(a){return function($expr$){var $argumentsExpr$='$arguments$'
try{$expr$.$method$($argumentsExpr$)}catch(u){return u.message}}(a)},
jr:function(a){return function($expr$){try{$expr$.$method$}catch(u){return u.message}}(a)},
ja:function(a,b){return new H.fd(a,b==null?null:b.method)},
iq:function(a,b){var u,t
u=b==null
t=u?null:b.method
return new H.eR(a,t,u?null:b.receiver)},
ar:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g
u=new H.ia(a)
if(a==null)return
if(typeof a!=="object")return a
if("dartException" in a)return u.$1(a.dartException)
else if(!("message" in a))return a
t=a.message
if("number" in a&&typeof a.number=="number"){s=a.number
r=s&65535
if((C.h.bi(s,16)&8191)===10)switch(r){case 438:return u.$1(H.iq(H.e(t)+" (Error "+r+")",null))
case 445:case 5007:return u.$1(H.ja(H.e(t)+" (Error "+r+")",null))}}if(a instanceof TypeError){q=$.jX()
p=$.jY()
o=$.jZ()
n=$.k_()
m=$.k2()
l=$.k3()
k=$.k1()
$.k0()
j=$.k5()
i=$.k4()
h=q.ag(t)
if(h!=null)return u.$1(H.iq(H.I(t),h))
else{h=p.ag(t)
if(h!=null){h.method="call"
return u.$1(H.iq(H.I(t),h))}else{h=o.ag(t)
if(h==null){h=n.ag(t)
if(h==null){h=m.ag(t)
if(h==null){h=l.ag(t)
if(h==null){h=k.ag(t)
if(h==null){h=n.ag(t)
if(h==null){h=j.ag(t)
if(h==null){h=i.ag(t)
g=h!=null}else g=!0}else g=!0}else g=!0}else g=!0}else g=!0}else g=!0}else g=!0
if(g)return u.$1(H.ja(H.I(t),h))}}return u.$1(new H.h0(typeof t==="string"?t:""))}if(a instanceof RangeError){if(typeof t==="string"&&t.indexOf("call stack")!==-1)return new P.dz()
t=function(b){try{return String(b)}catch(f){}return null}(a)
return u.$1(new P.az(!1,null,null,typeof t==="string"?t.replace(/^RangeError:\s*/,""):t))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof t==="string"&&t==="too much recursion")return new P.dz()
return a},
bN:function(a){var u
if(a==null)return new H.e7(a)
u=a.$cachedTrace
if(u!=null)return u
return a.$cachedTrace=new H.e7(a)},
ln:function(a,b){var u,t,s,r
u=a.length
for(t=0;t<u;t=r){s=t+1
r=s+1
b.Y(0,a[t],a[s])}return b},
lu:function(a,b,c,d,e,f){H.d(a,"$ibb")
switch(H.a0(b)){case 0:return a.$0()
case 1:return a.$1(c)
case 2:return a.$2(c,d)
case 3:return a.$3(c,d,e)
case 4:return a.$4(c,d,e,f)}throw H.h(P.p("Unsupported number of arguments for wrapped closure"))},
bL:function(a,b){var u
H.a0(b)
if(a==null)return
u=a.$identity
if(!!u)return u
u=function(c,d,e){return function(f,g,h,i){return e(c,d,f,g,h,i)}}(a,b,H.lu)
a.$identity=u
return u},
km:function(a,b,c,d,e,f,g){var u,t,s,r,q,p,o,n,m,l,k,j,i
u=b[0]
t=u.$callName
if(!!J.S(d).$ia){u.$reflectionInfo=d
s=H.kL(u).r}else s=d
r=e?Object.create(new H.fz().constructor.prototype):Object.create(new H.bT(null,null,null,null).constructor.prototype)
r.$initialize=r.constructor
if(e)q=function static_tear_off(){this.$initialize()}
else{p=$.aF
if(typeof p!=="number")return p.F()
$.aF=p+1
p=new Function("a,b,c,d"+p,"this.$initialize(a,b,c,d"+p+")")
q=p}r.constructor=q
q.prototype=r
if(!e){o=H.iY(a,u,f)
o.$reflectionInfo=d}else{r.$static_name=g
o=u}if(typeof s=="number")n=function(h,a0){return function(){return h(a0)}}(H.lo,s)
else if(typeof s=="function")if(e)n=s
else{m=f?H.iW:H.ie
n=function(h,a0){return function(){return h.apply({$receiver:a0(this)},arguments)}}(s,m)}else throw H.h("Error in reflectionInfo.")
r.$S=n
r[t]=o
for(l=o,k=1;k<b.length;++k){j=b[k]
i=j.$callName
if(i!=null){j=e?j:H.iY(a,j,f)
r[i]=j}if(k===c){j.$reflectionInfo=d
l=j}}r.$C=l
r.$R=u.$R
r.$D=u.$D
return q},
kj:function(a,b,c,d){var u=H.ie
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,u)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,u)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,u)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,u)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,u)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,u)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,u)}},
iY:function(a,b,c){var u,t,s,r,q,p,o
if(c)return H.kl(a,b)
u=b.$stubName
t=b.length
s=a[u]
r=b==null?s==null:b===s
q=!r||t>=27
if(q)return H.kj(t,!r,u,b)
if(t===0){r=$.aF
if(typeof r!=="number")return r.F()
$.aF=r+1
p="self"+r
r="return function(){var "+p+" = this."
q=$.bU
if(q==null){q=H.ek("self")
$.bU=q}return new Function(r+H.e(q)+";return "+p+"."+H.e(u)+"();}")()}o="abcdefghijklmnopqrstuvwxyz".split("").splice(0,t).join(",")
r=$.aF
if(typeof r!=="number")return r.F()
$.aF=r+1
o+=r
r="return function("+o+"){return this."
q=$.bU
if(q==null){q=H.ek("self")
$.bU=q}return new Function(r+H.e(q)+"."+H.e(u)+"("+o+");}")()},
kk:function(a,b,c,d){var u,t
u=H.ie
t=H.iW
switch(b?-1:a){case 0:throw H.h(H.kO("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,u,t)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,u,t)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,u,t)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,u,t)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,u,t)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,u,t)
default:return function(e,f,g,h){return function(){h=[g(this)]
Array.prototype.push.apply(h,arguments)
return e.apply(f(this),h)}}(d,u,t)}},
kl:function(a,b){var u,t,s,r,q,p,o,n
u=$.bU
if(u==null){u=H.ek("self")
$.bU=u}t=$.iV
if(t==null){t=H.ek("receiver")
$.iV=t}s=b.$stubName
r=b.length
q=a[s]
p=b==null?q==null:b===q
o=!p||r>=28
if(o)return H.kk(r,!p,s,b)
if(r===1){u="return function(){return this."+H.e(u)+"."+H.e(s)+"(this."+H.e(t)+");"
t=$.aF
if(typeof t!=="number")return t.F()
$.aF=t+1
return new Function(u+t+"}")()}n="abcdefghijklmnopqrstuvwxyz".split("").splice(0,r-1).join(",")
u="return function("+n+"){return this."+H.e(u)+"."+H.e(s)+"(this."+H.e(t)+", "+n+");"
t=$.aF
if(typeof t!=="number")return t.F()
$.aF=t+1
return new Function(u+t+"}")()},
iF:function(a,b,c,d,e,f,g){return H.km(a,b,H.a0(c),d,!!e,!!f,g)},
ie:function(a){return a.a},
iW:function(a){return a.c},
ek:function(a){var u,t,s,r,q
u=new H.bT("self","target","receiver","name")
t=J.eO(Object.getOwnPropertyNames(u))
for(s=t.length,r=0;r<s;++r){q=t[r]
if(u[q]===a)return q}},
I:function(a){if(a==null)return a
if(typeof a==="string")return a
throw H.h(H.aD(a,"String"))},
mo:function(a){if(a==null)return a
if(typeof a==="number")return a
throw H.h(H.aD(a,"double"))},
lA:function(a){if(a==null)return a
if(typeof a==="number")return a
throw H.h(H.aD(a,"num"))},
iD:function(a){if(a==null)return a
if(typeof a==="boolean")return a
throw H.h(H.aD(a,"bool"))},
a0:function(a){if(a==null)return a
if(typeof a==="number"&&Math.floor(a)===a)return a
throw H.h(H.aD(a,"int"))},
jS:function(a,b){throw H.h(H.aD(a,H.bP(H.I(b).substring(2))))},
lC:function(a,b){throw H.h(H.ki(a,H.bP(H.I(b).substring(2))))},
d:function(a,b){if(a==null)return a
if((typeof a==="object"||typeof a==="function")&&J.S(a)[b])return a
H.jS(a,b)},
c:function(a,b){var u
if(a!=null)u=(typeof a==="object"||typeof a==="function")&&J.S(a)[b]
else u=!0
if(u)return a
H.lC(a,b)},
i5:function(a){if(a==null)return a
if(!!J.S(a).$ia)return a
throw H.h(H.aD(a,"List<dynamic>"))},
lw:function(a,b){var u
if(a==null)return a
u=J.S(a)
if(!!u.$ia)return a
if(u[b])return a
H.jS(a,b)},
jM:function(a){var u
if("$S" in a){u=a.$S
if(typeof u=="number")return v.types[H.a0(u)]
else return a.$S()}return},
ef:function(a,b){var u
if(a==null)return!1
if(typeof a=="function")return!0
u=H.jM(J.S(a))
if(u==null)return!1
return H.jD(u,null,b,null)},
j:function(a,b){var u,t
if(a==null)return a
if($.iz)return a
$.iz=!0
try{if(H.ef(a,b))return a
u=H.i8(b)
t=H.aD(a,u)
throw H.h(t)}finally{$.iz=!1}},
iG:function(a,b){if(a!=null&&!H.iE(a,b))H.q(H.aD(a,H.i8(b)))
return a},
aD:function(a,b){return new H.fR("TypeError: "+P.ez(a)+": type '"+H.jH(a)+"' is not a subtype of type '"+b+"'")},
ki:function(a,b){return new H.el("CastError: "+P.ez(a)+": type '"+H.jH(a)+"' is not a subtype of type '"+b+"'")},
jH:function(a){var u,t
u=J.S(a)
if(!!u.$ibW){t=H.jM(u)
if(t!=null)return H.i8(t)
return"Closure"}return H.bD(a)},
lH:function(a){throw H.h(new P.eq(H.I(a)))},
kO:function(a){return new H.fp(a)},
jN:function(a){return v.getIsolateTag(a)},
b:function(a,b){a.$ti=b
return a},
bm:function(a){if(a==null)return
return a.$ti},
mp:function(a,b,c){return H.bO(a["$a"+H.e(c)],H.bm(b))},
i0:function(a,b,c,d){var u
H.I(c)
H.a0(d)
u=H.bO(a["$a"+H.e(c)],H.bm(b))
return u==null?null:u[d]},
a4:function(a,b,c){var u
H.I(b)
H.a0(c)
u=H.bO(a["$a"+H.e(b)],H.bm(a))
return u==null?null:u[c]},
v:function(a,b){var u
H.a0(b)
u=H.bm(a)
return u==null?null:u[b]},
i8:function(a){return H.bl(a,null)},
bl:function(a,b){var u,t
H.f(b,"$ia",[P.m],"$aa")
if(a==null)return"dynamic"
if(a===-1)return"void"
if(typeof a==="object"&&a!==null&&a.constructor===Array)return H.bP(a[0].name)+H.iC(a,1,b)
if(typeof a=="function")return H.bP(a.name)
if(a===-2)return"dynamic"
if(typeof a==="number"){H.a0(a)
if(b==null||a<0||a>=b.length)return"unexpected-generic-index:"+a
u=b.length
t=u-a-1
if(t<0||t>=u)return H.l(b,t)
return H.e(b[t])}if('func' in a)return H.l7(a,b)
if('futureOr' in a)return"FutureOr<"+H.bl("type" in a?a.type:null,b)+">"
return"unknown-reified-type"},
l7:function(a,b){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c
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
if(m<0)return H.l(b,m)
o=C.i.F(o,b[m])
l=t[p]
if(l!=null&&l!==P.L)o+=" extends "+H.bl(l,b)}o+=">"}else{o=""
s=null}k=!!a.v?"void":H.bl(a.ret,b)
if("args" in a){j=a.args
for(u=j.length,i="",h="",g=0;g<u;++g,h=", "){f=j[g]
i=i+h+H.bl(f,b)}}else{i=""
h=""}if("opt" in a){e=a.opt
i+=h+"["
for(u=e.length,h="",g=0;g<u;++g,h=", "){f=e[g]
i=i+h+H.bl(f,b)}i+="]"}if("named" in a){d=a.named
i+=h+"{"
for(u=H.lm(d),m=u.length,h="",g=0;g<m;++g,h=", "){c=H.I(u[g])
i=i+h+H.bl(d[c],b)+(" "+H.e(c))}i+="}"}if(s!=null)b.length=s
return o+"("+i+") => "+k},
iC:function(a,b,c){var u,t,s,r,q,p
H.f(c,"$ia",[P.m],"$aa")
if(a==null)return""
u=new P.aZ("")
for(t=b,s="",r=!0,q="";t<a.length;++t,s=", "){u.a=q+s
p=a[t]
if(p!=null)r=!1
q=u.a+=H.bl(p,c)}return"<"+u.i(0)+">"},
bO:function(a,b){if(a==null)return b
a=a.apply(null,b)
if(a==null)return
if(typeof a==="object"&&a!==null&&a.constructor===Array)return a
if(typeof a=="function")return a.apply(null,b)
return b},
cI:function(a,b,c,d){var u,t
H.I(b)
H.i5(c)
H.I(d)
if(a==null)return!1
u=H.bm(a)
t=J.S(a)
if(t[b]==null)return!1
return H.jK(H.bO(t[d],u),null,c,null)},
f:function(a,b,c,d){H.I(b)
H.i5(c)
H.I(d)
if(a==null)return a
if(H.cI(a,b,c,d))return a
throw H.h(H.aD(a,function(e,f){return e.replace(/[^<,> ]+/g,function(g){return f[g]||g})}(H.bP(b.substring(2))+H.iC(c,0,null),v.mangledGlobalNames)))},
jK:function(a,b,c,d){var u,t
if(c==null)return!0
if(a==null){u=c.length
for(t=0;t<u;++t)if(!H.ay(null,null,c[t],d))return!1
return!0}u=a.length
for(t=0;t<u;++t)if(!H.ay(a[t],b,c[t],d))return!1
return!0},
mm:function(a,b,c){return a.apply(b,H.bO(J.S(b)["$a"+H.e(c)],H.bm(b)))},
jP:function(a){var u
if(typeof a==="number")return!1
if('futureOr' in a){u="type" in a?a.type:null
return a==null||a.name==="L"||a.name==="F"||a===-1||a===-2||H.jP(u)}return!1},
iE:function(a,b){var u,t
if(a==null)return b==null||b.name==="L"||b.name==="F"||b===-1||b===-2||H.jP(b)
if(b==null||b===-1||b.name==="L"||b===-2)return!0
if(typeof b=="object"){if('futureOr' in b)if(H.iE(a,"type" in b?b.type:null))return!0
if('func' in b)return H.ef(a,b)}u=J.S(a).constructor
t=H.bm(a)
if(t!=null){t=t.slice()
t.splice(0,0,u)
u=t}return H.ay(u,null,b,null)},
A:function(a,b){if(a!=null&&!H.iE(a,b))throw H.h(H.aD(a,H.i8(b)))
return a},
ay:function(a,b,c,d){var u,t,s,r,q,p,o,n,m
if(a===c)return!0
if(c==null||c===-1||c.name==="L"||c===-2)return!0
if(a===-2)return!0
if(a==null||a===-1||a.name==="L"||a===-2){if(typeof c==="number")return!1
if('futureOr' in c)return H.ay(a,b,"type" in c?c.type:null,d)
return!1}if(typeof a==="number")return!1
if(typeof c==="number")return!1
if(a.name==="F")return!0
if('func' in c)return H.jD(a,b,c,d)
if('func' in a)return c.name==="bb"
u=typeof a==="object"&&a!==null&&a.constructor===Array
t=u?a[0]:a
if('futureOr' in c){s="type" in c?c.type:null
if('futureOr' in a)return H.ay("type" in a?a.type:null,b,s,d)
else if(H.ay(a,b,s,d))return!0
else{if(!('$i'+"c2" in t.prototype))return!1
r=t.prototype["$a"+"c2"]
q=H.bO(r,u?a.slice(1):null)
return H.ay(typeof q==="object"&&q!==null&&q.constructor===Array?q[0]:null,b,s,d)}}p=typeof c==="object"&&c!==null&&c.constructor===Array
o=p?c[0]:c
if(o!==t){n=o.name
if(!('$i'+n in t.prototype))return!1
m=t.prototype["$a"+n]}else m=null
if(!p)return!0
u=u?a.slice(1):null
p=c.slice(1)
return H.jK(H.bO(m,u),b,p,d)},
jD:function(a,b,c,d){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g
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
return H.lz(h,b,g,d)},
lz:function(a,b,c,d){var u,t,s,r
u=Object.getOwnPropertyNames(c)
for(t=u.length,s=0;s<t;++s){r=u[s]
if(!Object.hasOwnProperty.call(a,r))return!1
if(!H.ay(c[r],d,a[r],b))return!1}return!0},
mn:function(a,b,c){Object.defineProperty(a,H.I(b),{value:c,enumerable:false,writable:true,configurable:true})},
lx:function(a){var u,t,s,r,q,p
u=H.I($.jO.$1(a))
t=$.hZ[u]
if(t!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:t,enumerable:false,writable:true,configurable:true})
return t.i}s=$.i4[u]
if(s!=null)return s
r=v.interceptorsByTag[u]
if(r==null){u=H.I($.jJ.$2(a,u))
if(u!=null){t=$.hZ[u]
if(t!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:t,enumerable:false,writable:true,configurable:true})
return t.i}s=$.i4[u]
if(s!=null)return s
r=v.interceptorsByTag[u]}}if(r==null)return
s=r.prototype
q=u[0]
if(q==="!"){t=H.i7(s)
$.hZ[u]=t
Object.defineProperty(a,v.dispatchPropertyName,{value:t,enumerable:false,writable:true,configurable:true})
return t.i}if(q==="~"){$.i4[u]=s
return s}if(q==="-"){p=H.i7(s)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}if(q==="+")return H.jR(a,s)
if(q==="*")throw H.h(P.js(u))
if(v.leafTags[u]===true){p=H.i7(s)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}else return H.jR(a,s)},
jR:function(a,b){var u=Object.getPrototypeOf(a)
Object.defineProperty(u,v.dispatchPropertyName,{value:J.iL(b,u,null,null),enumerable:false,writable:true,configurable:true})
return b},
i7:function(a){return J.iL(a,!1,null,!!a.$iaB)},
ly:function(a,b,c){var u=b.prototype
if(v.leafTags[a]===true)return H.i7(u)
else return J.iL(u,c,null,null)},
ls:function(){if(!0===$.iK)return
$.iK=!0
H.lt()},
lt:function(){var u,t,s,r,q,p,o,n
$.hZ=Object.create(null)
$.i4=Object.create(null)
H.lr()
u=v.interceptorsByTag
t=Object.getOwnPropertyNames(u)
if(typeof window!="undefined"){window
s=function(){}
for(r=0;r<t.length;++r){q=t[r]
p=$.jT.$1(q)
if(p!=null){o=H.ly(q,u[q],p)
if(o!=null){Object.defineProperty(p,v.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
s.prototype=p}}}}for(r=0;r<t.length;++r){q=t[r]
if(/^[A-Za-z_]/.test(q)){n=u[q]
u["!"+q]=n
u["~"+q]=n
u["-"+q]=n
u["+"+q]=n
u["*"+q]=n}}},
lr:function(){var u,t,s,r,q,p,o
u=C.S()
u=H.bJ(C.P,H.bJ(C.U,H.bJ(C.A,H.bJ(C.A,H.bJ(C.T,H.bJ(C.Q,H.bJ(C.R(C.B),u)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){t=dartNativeDispatchHooksTransformer
if(typeof t=="function")t=[t]
if(t.constructor==Array)for(s=0;s<t.length;++s){r=t[s]
if(typeof r=="function")u=r(u)||u}}q=u.getTag
p=u.getUnknownTag
o=u.prototypeForTag
$.jO=new H.i1(q)
$.jJ=new H.i2(p)
$.jT=new H.i3(o)},
bJ:function(a,b){return a(b)||b},
kv:function(a,b,c,d){var u,t,s,r
u=b?"m":""
t=c?"":"i"
s=d?"g":""
r=function(e,f){try{return new RegExp(e,f)}catch(q){return q}}(a,u+t+s)
if(r instanceof RegExp)return r
throw H.h(new P.eG("Illegal RegExp pattern ("+String(r)+")",a,null))},
lF:function(a,b,c){var u=a.indexOf(b,c)
return u>=0},
iO:function(a,b,c){var u,t,s
if(b==="")if(a==="")return c
else{u=a.length
for(t=c,s=0;s<u;++s)t=t+a[s]+c
return t.charCodeAt(0)==0?t:t}else return a.replace(new RegExp(b.replace(/[[\]{}()*+?.\\^$|]/g,"\\$&"),'g'),c.replace(/\$/g,"$$$$"))},
fk:function fk(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.x=null},
fP:function fP(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
fd:function fd(a,b){this.a=a
this.b=b},
eR:function eR(a,b,c){this.a=a
this.b=b
this.c=c},
h0:function h0(a){this.a=a},
ia:function ia(a){this.a=a},
e7:function e7(a){this.a=a
this.b=null},
bW:function bW(){},
fF:function fF(){},
fz:function fz(){},
bT:function bT(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
fR:function fR(a){this.a=a},
el:function el(a){this.a=a},
fp:function fp(a){this.a=a},
aI:function aI(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
eT:function eT(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
d9:function d9(a,b){this.a=a
this.$ti=b},
eU:function eU(a,b,c){var _=this
_.a=a
_.b=b
_.d=_.c=null
_.$ti=c},
i1:function i1(a){this.a=a},
i2:function i2(a){this.a=a},
i3:function i3(a){this.a=a},
eQ:function eQ(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
cF:function(a){return a},
cE:function(a,b,c){if(a>>>0!==a||a>=c)throw H.h(H.cJ(b,a))},
l6:function(a,b,c){var u
if(!(a>>>0!==a))u=b>>>0!==b||a>b||b>c
else u=!0
if(u)throw H.h(H.ll(a,b,c))
return b},
dk:function dk(){},
dh:function dh(){},
di:function di(){},
dj:function dj(){},
f7:function f7(){},
f8:function f8(){},
f9:function f9(){},
dl:function dl(){},
fa:function fa(){},
cz:function cz(){},
cA:function cA(){},
cB:function cB(){},
cC:function cC(){},
lm:function(a){return J.j4(a?Object.keys(a):[],null)},
lB:function(a){if(typeof dartPrint=="function"){dartPrint(a)
return}if(typeof console=="object"&&typeof console.log!="undefined"){console.log(a)
return}if(typeof window=="object")return
if(typeof print=="function"){print(a)
return}throw"Unable to print message: "+String(a)}},J={
iL:function(a,b,c,d){return{i:a,p:b,e:c,x:d}},
i_:function(a){var u,t,s,r,q
u=a[v.dispatchPropertyName]
if(u==null)if($.iK==null){H.ls()
u=a[v.dispatchPropertyName]}if(u!=null){t=u.p
if(!1===t)return u.i
if(!0===t)return a
s=Object.getPrototypeOf(a)
if(t===s)return u.i
if(u.e===s)throw H.h(P.js("Return interceptor for "+H.e(t(a,u))))}r=a.constructor
q=r==null?null:r[$.iP()]
if(q!=null)return q
q=H.lx(a)
if(q!=null)return q
if(typeof a=="function")return C.V
t=Object.getPrototypeOf(a)
if(t==null)return C.D
if(t===Object.prototype)return C.D
if(typeof r=="function"){Object.defineProperty(r,$.iP(),{value:C.w,enumerable:false,writable:true,configurable:true})
return C.w}return C.w},
ku:function(a,b){if(typeof a!=="number"||Math.floor(a)!==a)throw H.h(P.id(a,"length","is not an integer"))
if(a<0||a>4294967295)throw H.h(P.au(a,0,4294967295,"length",null))
return J.j4(new Array(a),b)},
j4:function(a,b){return J.eO(H.b(a,[b]))},
eO:function(a){H.i5(a)
a.fixed$length=Array
return a},
S:function(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.d3.prototype
return J.d2.prototype}if(typeof a=="string")return J.by.prototype
if(a==null)return J.d4.prototype
if(typeof a=="boolean")return J.eP.prototype
if(a.constructor==Array)return J.aH.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bg.prototype
return a}if(a instanceof P.L)return a
return J.i_(a)},
iH:function(a){if(typeof a=="string")return J.by.prototype
if(a==null)return a
if(a.constructor==Array)return J.aH.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bg.prototype
return a}if(a instanceof P.L)return a
return J.i_(a)},
iI:function(a){if(a==null)return a
if(a.constructor==Array)return J.aH.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bg.prototype
return a}if(a instanceof P.L)return a
return J.i_(a)},
iJ:function(a){if(typeof a=="string")return J.by.prototype
if(a==null)return a
if(!(a instanceof P.L))return J.cu.prototype
return a},
ai:function(a){if(a==null)return a
if(typeof a!="object"){if(typeof a=="function")return J.bg.prototype
return a}if(a instanceof P.L)return a
return J.i_(a)},
a_:function(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.S(a).t(a,b)},
kb:function(a,b){if(typeof b==="number")if(a.constructor==Array||typeof a=="string"||H.lv(a,a[v.dispatchPropertyName]))if(b>>>0===b&&b<a.length)return a[b]
return J.iH(a).l(a,b)},
kc:function(a,b,c,d){return J.ai(a).fi(a,b,c,d)},
eg:function(a,b){return J.ai(a).hR(a,b)},
iS:function(a,b){return J.ai(a).B(a,b)},
ib:function(a,b){return J.iI(a).a8(a,b)},
kd:function(a){return J.ai(a).giW(a)},
bn:function(a){return J.S(a).gG(a)},
bR:function(a){return J.iI(a).gO(a)},
bo:function(a){return J.iH(a).gp(a)},
ke:function(a){return J.ai(a).gjW(a)},
ic:function(a,b){return J.ai(a).aS(a,b)},
iT:function(a){return J.iI(a).jP(a)},
kf:function(a,b,c){return J.iJ(a).bd(a,b,c)},
kg:function(a){return J.iJ(a).k6(a)},
aj:function(a){return J.S(a).i(a)},
a1:function a1(){},
eP:function eP(){},
d4:function d4(){},
d6:function d6(){},
ff:function ff(){},
cu:function cu(){},
bg:function bg(){},
aH:function aH(a){this.$ti=a},
io:function io(a){this.$ti=a},
ac:function ac(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=null
_.$ti=d},
d5:function d5(){},
d3:function d3(){},
d2:function d2(){},
by:function by(){}},P={
kW:function(){var u,t,s
u={}
if(self.scheduleImmediate!=null)return P.le()
if(self.MutationObserver!=null&&self.document!=null){t=self.document.createElement("div")
s=self.document.createElement("span")
u.a=null
new self.MutationObserver(H.bL(new P.hh(u),1)).observe(t,{childList:true})
return new P.hg(u,t,s)}else if(self.setImmediate!=null)return P.lf()
return P.lg()},
kX:function(a){self.scheduleImmediate(H.bL(new P.hi(H.j(a,{func:1,ret:-1})),0))},
kY:function(a){self.setImmediate(H.bL(new P.hj(H.j(a,{func:1,ret:-1})),0))},
kZ:function(a){P.iu(C.q,H.j(a,{func:1,ret:-1}))},
iu:function(a,b){var u
H.j(b,{func:1,ret:-1})
u=C.h.a1(a.a,1000)
return P.l4(u<0?0:u,b)},
jq:function(a,b){var u
H.j(b,{func:1,ret:-1,args:[P.aN]})
u=C.h.a1(a.a,1000)
return P.l5(u<0?0:u,b)},
l4:function(a,b){var u=new P.e8(!0)
u.fe(a,b)
return u},
l5:function(a,b){var u=new P.e8(!1)
u.ff(a,b)
return u},
l_:function(a,b){var u,t,s
b.a=1
try{a.eq(new P.hr(b),new P.hs(b),null)}catch(s){u=H.ar(s)
t=H.bN(s)
P.lD(new P.ht(b,u,t))}},
jy:function(a,b){var u,t
for(;u=a.a,u===2;)a=H.d(a.c,"$iax")
if(u>=4){t=b.cb()
b.a=a.a
b.c=a.c
P.cy(b,t)}else{t=H.d(b.c,"$iaS")
b.a=2
b.c=a
a.dn(t)}},
cy:function(a,b){var u,t,s,r,q,p,o,n,m,l,k,j,i,h
u={}
u.a=a
for(t=a;!0;){s={}
r=t.a===8
if(b==null){if(r){q=H.d(t.c,"$ia7")
t=t.b
p=q.a
o=q.b
t.toString
P.hV(null,null,t,p,o)}return}for(;n=b.a,n!=null;b=n){b.a=null
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
if(k){H.d(m,"$ia7")
t=t.b
p=m.a
o=m.b
t.toString
P.hV(null,null,t,p,o)
return}j=$.R
if(j!=l)$.R=l
else j=null
t=b.c
if(t===8)new P.hx(u,s,b,r).$0()
else if(p){if((t&1)!==0)new P.hw(s,b,m).$0()}else if((t&2)!==0)new P.hv(u,s,b).$0()
if(j!=null)$.R=j
t=s.b
if(!!J.S(t).$ic2){if(t.a>=4){i=H.d(o.c,"$iaS")
o.c=null
b=o.bh(i)
o.a=t.a
o.c=t.c
u.a=t
continue}else P.jy(t,o)
return}}h=b.b
i=H.d(h.c,"$iaS")
h.c=null
b=h.bh(i)
t=s.a
p=s.b
if(!t){H.A(p,H.v(h,0))
h.a=4
h.c=p}else{H.d(p,"$ia7")
h.a=8
h.c=p}u.a=h
t=h}},
la:function(a,b){if(H.ef(a,{func:1,args:[P.L,P.ag]}))return H.j(a,{func:1,ret:null,args:[P.L,P.ag]})
if(H.ef(a,{func:1,args:[P.L]}))return H.j(a,{func:1,ret:null,args:[P.L]})
throw H.h(P.id(a,"onError","Error handler must accept one Object or one Object and a StackTrace as arguments, and return a a valid result"))},
l9:function(){var u,t
for(;u=$.bI,u!=null;){$.cH=null
t=u.b
$.bI=t
if(t==null)$.cG=null
u.a.$0()}},
ld:function(){$.iA=!0
try{P.l9()}finally{$.cH=null
$.iA=!1
if($.bI!=null)$.iQ().$1(P.jL())}},
jG:function(a){var u=new P.dW(H.j(a,{func:1,ret:-1}))
if($.bI==null){$.cG=u
$.bI=u
if(!$.iA)$.iQ().$1(P.jL())}else{$.cG.b=u
$.cG=u}},
lc:function(a){var u,t,s
H.j(a,{func:1,ret:-1})
u=$.bI
if(u==null){P.jG(a)
$.cH=$.cG
return}t=new P.dW(a)
s=$.cH
if(s==null){t.b=u
$.cH=t
$.bI=t}else{t.b=s.b
s.b=t
$.cH=t
if(t.b==null)$.cG=t}},
lD:function(a){var u,t
u={func:1,ret:-1}
H.j(a,u)
t=$.R
if(C.l===t){P.hX(null,null,C.l,a)
return}t.toString
P.hX(null,null,t,H.j(t.ci(a),u))},
jp:function(a,b){var u,t
u={func:1,ret:-1}
H.j(b,u)
t=$.R
if(t===C.l){t.toString
return P.iu(a,b)}return P.iu(a,H.j(t.ci(b),u))},
kU:function(a,b){var u,t,s
u={func:1,ret:-1,args:[P.aN]}
H.j(b,u)
t=$.R
if(t===C.l){t.toString
return P.jq(a,b)}s=t.dE(b,P.aN)
$.R.toString
return P.jq(a,H.j(s,u))},
hV:function(a,b,c,d,e){var u={}
u.a=d
P.lc(new P.hW(u,e))},
jE:function(a,b,c,d,e){var u,t
H.j(d,{func:1,ret:e})
t=$.R
if(t===c)return d.$0()
$.R=c
u=t
try{t=d.$0()
return t}finally{$.R=u}},
jF:function(a,b,c,d,e,f,g){var u,t
H.j(d,{func:1,ret:f,args:[g]})
H.A(e,g)
t=$.R
if(t===c)return d.$1(e)
$.R=c
u=t
try{t=d.$1(e)
return t}finally{$.R=u}},
lb:function(a,b,c,d,e,f,g,h,i){var u,t
H.j(d,{func:1,ret:g,args:[h,i]})
H.A(e,h)
H.A(f,i)
t=$.R
if(t===c)return d.$2(e,f)
$.R=c
u=t
try{t=d.$2(e,f)
return t}finally{$.R=u}},
hX:function(a,b,c,d){var u
H.j(d,{func:1,ret:-1})
u=C.l!==c
if(u)d=!(!u||!1)?c.ci(d):c.iX(d,-1)
P.jG(d)},
hh:function hh(a){this.a=a},
hg:function hg(a,b,c){this.a=a
this.b=b
this.c=c},
hi:function hi(a){this.a=a},
hj:function hj(a){this.a=a},
e8:function e8(a){this.a=a
this.b=null
this.c=0},
hP:function hP(a,b){this.a=a
this.b=b},
hO:function hO(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
aS:function aS(a,b,c,d,e){var _=this
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
hq:function hq(a,b){this.a=a
this.b=b},
hu:function hu(a,b){this.a=a
this.b=b},
hr:function hr(a){this.a=a},
hs:function hs(a){this.a=a},
ht:function ht(a,b,c){this.a=a
this.b=b
this.c=c},
hx:function hx(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
hy:function hy(a){this.a=a},
hw:function hw(a,b,c){this.a=a
this.b=b
this.c=c},
hv:function hv(a,b,c){this.a=a
this.b=b
this.c=c},
dW:function dW(a){this.a=a
this.b=null},
fA:function fA(){},
fC:function fC(a,b){this.a=a
this.b=b},
fD:function fD(a,b){this.a=a
this.b=b},
ch:function ch(){},
fB:function fB(){},
aN:function aN(){},
a7:function a7(a,b){this.a=a
this.b=b},
hS:function hS(){},
hW:function hW(a,b){this.a=a
this.b=b},
hD:function hD(){},
hF:function hF(a,b,c){this.a=a
this.b=b
this.c=c},
hE:function hE(a,b){this.a=a
this.b=b},
hG:function hG(a,b,c){this.a=a
this.b=b
this.c=c},
ky:function(a,b,c){H.i5(a)
return H.f(H.ln(a,new H.aI([b,c])),"$ij5",[b,c],"$aj5")},
kx:function(a,b){return new H.aI([a,b])},
da:function(a,b,c,d){return new P.hB([d])},
iy:function(){var u=Object.create(null)
u["<non-identifier-key>"]=u
delete u["<non-identifier-key>"]
return u},
l3:function(a,b,c){var u=new P.e1(a,b,[c])
u.c=a.e
return u},
ks:function(a,b,c){var u,t
if(P.iB(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}u=H.b([],[P.m])
t=$.cM()
C.a.h(t,a)
try{P.l8(a,u)}finally{if(0>=t.length)return H.l(t,-1)
t.pop()}t=P.jn(b,H.lw(u,"$ii"),", ")+c
return t.charCodeAt(0)==0?t:t},
il:function(a,b,c){var u,t,s
if(P.iB(a))return b+"..."+c
u=new P.aZ(b)
t=$.cM()
C.a.h(t,a)
try{s=u
s.a=P.jn(s.a,a,", ")}finally{if(0>=t.length)return H.l(t,-1)
t.pop()}u.a+=c
t=u.a
return t.charCodeAt(0)==0?t:t},
iB:function(a){var u,t
for(u=0;t=$.cM(),u<t.length;++u)if(a===t[u])return!0
return!1},
l8:function(a,b){var u,t,s,r,q,p,o,n,m,l
H.f(b,"$ia",[P.m],"$aa")
u=a.gO(a)
t=0
s=0
while(!0){if(!(t<80||s<3))break
if(!u.u())return
r=H.e(u.gE())
C.a.h(b,r)
t+=r.length+2;++s}if(!u.u()){if(s<=5)return
if(0>=b.length)return H.l(b,-1)
q=b.pop()
if(0>=b.length)return H.l(b,-1)
p=b.pop()}else{o=u.gE();++s
if(!u.u()){if(s<=4){C.a.h(b,H.e(o))
return}q=H.e(o)
if(0>=b.length)return H.l(b,-1)
p=b.pop()
t+=q.length+2}else{n=u.gE();++s
for(;u.u();o=n,n=m){m=u.gE();++s
if(s>100){while(!0){if(!(t>75&&s>3))break
if(0>=b.length)return H.l(b,-1)
t-=b.pop().length+2;--s}C.a.h(b,"...")
return}}p=H.e(o)
q=H.e(n)
t+=q.length+p.length+4}}if(s>b.length+2){t+=5
l="..."}else l=null
while(!0){if(!(t>80&&b.length>3))break
if(0>=b.length)return H.l(b,-1)
t-=b.pop().length+2
if(l==null){t+=5
l="..."}}if(l!=null)C.a.h(b,l)
C.a.h(b,p)
C.a.h(b,q)},
j6:function(a,b){var u,t,s
u=P.da(null,null,null,b)
for(t=a.length,s=0;s<a.length;a.length===t||(0,H.x)(a),++s)u.h(0,H.A(a[s],b))
return u},
j7:function(a){var u,t
u={}
if(P.iB(a))return"{...}"
t=new P.aZ("")
try{C.a.h($.cM(),a)
t.a+="{"
u.a=!0
a.a2(0,new P.eY(u,t))
t.a+="}"}finally{u=$.cM()
if(0>=u.length)return H.l(u,-1)
u.pop()}u=t.a
return u.charCodeAt(0)==0?u:u},
hB:function hB(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
bH:function bH(a){this.a=a
this.c=this.b=null},
e1:function e1(a,b,c){var _=this
_.a=a
_.b=b
_.d=_.c=null
_.$ti=c},
eV:function eV(){},
T:function T(){},
eX:function eX(){},
eY:function eY(a,b){this.a=a
this.b=b},
bA:function bA(){},
hI:function hI(){},
e2:function e2(){},
bX:function bX(){},
bY:function bY(){},
ex:function ex(){},
eL:function eL(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
eK:function eK(a){this.a=a},
h2:function h2(a){this.a=a},
h3:function h3(){},
hQ:function hQ(a){this.b=this.a=0
this.c=a},
kr:function(a){if(a instanceof H.bW)return a.i(0)
return"Instance of '"+H.bD(a)+"'"},
kz:function(a,b,c,d){var u,t
H.A(b,d)
u=J.ku(a,d)
if(a!==0&&!0)for(t=0;t<u.length;++t)C.a.Y(u,t,b)
return H.f(u,"$ia",[d],"$aa")},
kA:function(a,b,c){var u,t,s
u=[c]
t=H.b([],u)
for(s=a.gO(a);s.u();)C.a.h(t,H.A(s.gE(),c))
if(b)return t
return H.f(J.eO(t),"$ia",u,"$aa")},
it:function(a,b,c){var u,t
u=P.y
H.f(a,"$ii",[u],"$ai")
if(a.constructor===Array){H.f(a,"$iaH",[u],"$aaH")
t=a.length
c=P.ji(b,c,t,null,null,null)
return H.jh(b>0||c<t?C.a.eR(a,b,c):a)}return P.kS(a,b,c)},
kS:function(a,b,c){var u,t,s
H.f(a,"$ii",[P.y],"$ai")
u=J.bR(a)
for(t=0;t<b;++t)if(!u.u())throw H.h(P.au(b,0,t,null,null))
s=[]
for(;u.u();)s.push(u.gE())
return H.jh(s)},
kM:function(a,b,c){return new H.eQ(a,H.kv(a,!1,!0,!1))},
jn:function(a,b,c){var u=J.bR(b)
if(!u.u())return a
if(c.length===0){do a+=H.e(u.gE())
while(u.u())}else{a+=H.e(u.gE())
for(;u.u();)a=a+c+H.e(u.gE())}return a},
jC:function(a,b,c,d){var u,t,s,r,q,p
H.f(a,"$ia",[P.y],"$aa")
if(c===C.x){u=$.ka().b
u=u.test(b)}else u=!1
if(u)return b
t=C.I.j4(H.A(b,H.a4(c,"bX",0)))
for(u=t.length,s=0,r="";s<u;++s){q=t[s]
if(q<128){p=q>>>4
if(p>=8)return H.l(a,p)
p=(a[p]&1<<(q&15))!==0}else p=!1
if(p)r+=H.ir(q)
else r=r+"%"+"0123456789ABCDEF"[q>>>4&15]+"0123456789ABCDEF"[q&15]}return r.charCodeAt(0)==0?r:r},
kn:function(a){var u,t
u=Math.abs(a)
t=a<0?"-":""
if(u>=1000)return""+a
if(u>=100)return t+"0"+u
if(u>=10)return t+"00"+u
return t+"000"+u},
ko:function(a){if(a>=100)return""+a
if(a>=10)return"0"+a
return"00"+a},
cV:function(a){if(a>=10)return""+a
return"0"+a},
j_:function(a,b,c,d,e,f){return new P.b9(864e8*a+36e8*b+6e7*e+1e6*f+1000*d+c)},
ez:function(a){if(typeof a==="number"||typeof a==="boolean"||null==a)return J.aj(a)
if(typeof a==="string")return JSON.stringify(a)
return P.kr(a)},
kh:function(a){return new P.az(!1,null,null,a)},
id:function(a,b,c){return new P.az(!0,a,b,c)},
fi:function(a,b,c){return new P.bE(null,null,!0,a,b,"Value not in range")},
au:function(a,b,c,d,e){return new P.bE(b,c,!0,a,d,"Invalid value")},
ji:function(a,b,c,d,e,f){if(0>a||a>c)throw H.h(P.au(a,0,c,"start",f))
if(b!=null){if(a>b||b>c)throw H.h(P.au(b,a,c,"end",f))
return b}return c},
bx:function(a,b,c,d,e){var u=H.a0(e==null?J.bo(b):e)
return new P.eN(b,u,!0,a,c,"Index out of range")},
ap:function(a){return new P.h1(a)},
js:function(a){return new P.h_(a)},
jm:function(a){return new P.cg(a)},
b7:function(a){return new P.eo(a)},
p:function(a){return new P.dZ(a)},
iN:function(a){H.lB(a)},
H:function H(){},
ad:function ad(a,b){this.a=a
this.b=b},
w:function w(){},
b9:function b9(a){this.a=a},
et:function et(){},
eu:function eu(){},
ba:function ba(){},
dn:function dn(){},
az:function az(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
bE:function bE(a,b,c,d,e,f){var _=this
_.e=a
_.f=b
_.a=c
_.b=d
_.c=e
_.d=f},
eN:function eN(a,b,c,d,e,f){var _=this
_.e=a
_.f=b
_.a=c
_.b=d
_.c=e
_.d=f},
h1:function h1(a){this.a=a},
h_:function h_(a){this.a=a},
cg:function cg(a){this.a=a},
eo:function eo(a){this.a=a},
fe:function fe(){},
dz:function dz(){},
eq:function eq(a){this.a=a},
dZ:function dZ(a){this.a=a},
eG:function eG(a,b,c){this.a=a
this.b=b
this.c=c},
bb:function bb(){},
y:function y(){},
i:function i(){},
aG:function aG(){},
a:function a(){},
F:function F(){},
a6:function a6(){},
L:function L(){},
ag:function ag(){},
m:function m(){},
aZ:function aZ(a){this.a=a},
lk:function(a){var u,t
u=J.S(a)
if(!!u.$ibc){t=u.gdL(a)
if(t.constructor===Array)if(typeof CanvasPixelArray!=="undefined"){t.constructor=CanvasPixelArray
t.BYTES_PER_ELEMENT=1}return a}return new P.eb(a.data,a.height,a.width)},
lj:function(a){if(a instanceof P.eb)return{data:a.a,height:a.b,width:a.c}
return a},
li:function(a,b){var u={}
a.a2(0,new P.hY(u))
return u},
eb:function eb(a,b,c){this.a=a
this.b=b
this.c=c},
hY:function hY(a){this.a=a},
eC:function eC(a,b){this.a=a
this.b=b},
eD:function eD(){},
eE:function eE(){},
hA:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
l2:function(a){a=536870911&a+((67108863&a)<<3)
a^=a>>>11
return 536870911&a+((16383&a)<<15)},
hC:function hC(){},
av:function av(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=e},
cd:function cd(){},
n:function n(){},
cP:function cP(){},
d_:function d_(){},
dr:function dr(){},
bF:function bF(){},
du:function du(){},
dC:function dC(){},
dM:function dM(){}},W={
iU:function(a){var u=document.createElement("a")
return u},
ig:function(a,b){var u=document.createElement("canvas")
return u},
kp:function(a,b,c){var u,t
u=document.body
t=(u&&C.n).af(u,a,b,c)
t.toString
u=W.z
u=new H.cv(new W.ab(t),H.j(new W.ew(),{func:1,ret:P.H,args:[u]}),[u])
return H.d(u.gaG(u),"$iM")},
kq:function(a){H.d(a,"$ibu")
return"wheel"},
c0:function(a){var u,t,s
u="element tag unavailable"
try{t=J.ke(a)
if(typeof t==="string")u=a.tagName}catch(s){H.ar(s)}return u},
j3:function(a,b,c){var u=document.createElement("img")
u.src=b
return u},
hz:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
jA:function(a,b,c,d){var u,t
u=W.hz(W.hz(W.hz(W.hz(0,a),b),c),d)
t=536870911&u+((67108863&u)<<3)
t^=t>>>11
return 536870911&t+((16383&t)<<15)},
Z:function(a,b,c,d,e){var u,t
u=W.jI(new W.hp(c),W.k)
t=u!=null
if(t&&!0){H.j(u,{func:1,args:[W.k]})
if(t)J.kc(a,b,u,!1)}return new W.ho(a,b,u,!1,[e])},
jz:function(a){var u,t
u=W.iU(null)
t=window.location
u=new W.bk(new W.hH(u,t))
u.f3(a)
return u},
l0:function(a,b,c,d){H.d(a,"$iM")
H.I(b)
H.I(c)
H.d(d,"$ibk")
return!0},
l1:function(a,b,c,d){var u,t,s
H.d(a,"$iM")
H.I(b)
H.I(c)
u=H.d(d,"$ibk").a
t=u.a
t.href=c
s=t.hostname
u=u.b
if(!(s==u.hostname&&t.port==u.port&&t.protocol==u.protocol))if(s==="")if(t.port===""){u=t.protocol
u=u===":"||u===""}else u=!1
else u=!1
else u=!0
return u},
jB:function(){var u,t,s,r,q
u=P.m
t=P.j6(C.t,u)
s=H.v(C.t,0)
r=H.j(new W.hN(),{func:1,ret:u,args:[s]})
q=H.b(["TEMPLATE"],[u])
t=new W.hM(t,P.da(null,null,null,u),P.da(null,null,null,u),P.da(null,null,null,u),null)
t.fd(null,new H.f0(C.t,r,[s,u]),q,null)
return t},
jI:function(a,b){var u
H.j(a,{func:1,ret:-1,args:[b]})
u=$.R
if(u===C.l)return a
return u.dE(a,b)},
t:function t(){},
cN:function cN(){},
eh:function eh(){},
bS:function bS(){},
b4:function b4(){},
bq:function bq(){},
br:function br(){},
b5:function b5(){},
bZ:function bZ(){},
ep:function ep(){},
as:function as(){},
c_:function c_(){},
es:function es(){},
cW:function cW(){},
cX:function cX(){},
hl:function hl(a,b){this.a=a
this.b=b},
M:function M(){},
ew:function ew(){},
k:function k(){},
bu:function bu(){},
eF:function eF(){},
d0:function d0(){},
bw:function bw(){},
d1:function d1(){},
bc:function bc(){},
c4:function c4(){},
aJ:function aJ(){},
db:function db(){},
c8:function c8(){},
a2:function a2(){},
ab:function ab(a){this.a=a},
z:function z(){},
ca:function ca(){},
ds:function ds(){},
fq:function fq(){},
bG:function bG(){},
dA:function dA(){},
dB:function dB(){},
fE:function fE(){},
cj:function cj(){},
aO:function aO(){},
aC:function aC(){},
fO:function fO(){},
bj:function bj(){},
he:function he(){},
aR:function aR(){},
cw:function cw(){},
cx:function cx(){},
dY:function dY(){},
e3:function e3(){},
hk:function hk(){},
hm:function hm(a){this.a=a},
hn:function hn(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
ix:function ix(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
ho:function ho(a,b,c,d,e){var _=this
_.a=0
_.b=a
_.c=b
_.d=c
_.e=d
_.$ti=e},
hp:function hp(a){this.a=a},
bk:function bk(a){this.a=a},
ak:function ak(){},
dm:function dm(a){this.a=a},
fc:function fc(a){this.a=a},
fb:function fb(a,b,c){this.a=a
this.b=b
this.c=c},
e6:function e6(){},
hJ:function hJ(){},
hK:function hK(){},
hM:function hM(a,b,c,d,e){var _=this
_.e=a
_.a=b
_.b=c
_.c=d
_.d=e},
hN:function hN(){},
hL:function hL(){},
cZ:function cZ(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=null
_.$ti=d},
an:function an(){},
hH:function hH(a,b){this.a=a
this.b=b},
ec:function ec(a){this.a=a},
hR:function hR(a){this.a=a},
dX:function dX(){},
e_:function e_(){},
e0:function e0(){},
e4:function e4(){},
e5:function e5(){},
e9:function e9(){},
ea:function ea(){},
ed:function ed(){},
ee:function ee(){}},O={
ih:function(a){var u=new O.U([a])
u.bf(a)
return u},
U:function U(a){var _=this
_.d=_.c=_.b=_.a=null
_.$ti=a},
c7:function c7(){this.b=this.a=null},
de:function de(){var _=this
_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
f1:function f1(a,b){var _=this
_.f=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
c6:function c6(){},
f2:function f2(a,b){var _=this
_.a=a
_.b=b
_.e=_.d=_.c=null},
aK:function aK(a,b){var _=this
_.f=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
f4:function f4(a,b){var _=this
_.f=_.ch=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
f5:function f5(a,b){var _=this
_.f=_.ch=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
dw:function dw(){var _=this
_.e=_.d=_.c=_.b=_.a=null},
bi:function bi(){}},E={
j2:function(a,b,c,d,e,f){var u=new E.a8()
u.a=d
u.b=!0
u.sf2(0,O.ih(E.a8))
u.y.aU(u.gjA(),u.gjD())
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
kN:function(a,b){var u=new E.fl(a,b)
u.eZ(a,b)
return u},
kT:function(a,b,c,d,e){var u,t,s,r
u=J.S(a)
if(!!u.$ibq)return E.jo(a,!0,!0,!0,!1)
t=W.ig(null,null)
s=t.style
s.width="100%"
s.height="100%"
u.gdI(a).h(0,t)
r=E.jo(t,!0,!0,!0,!1)
r.a=a
return r},
jo:function(a,b,c,d,e){var u,t,s,r,q,p,o,n,m,l,k,j
u=new E.dI()
t=P.ky(["alpha",!0,"depth",!0,"stencil",!1,"antialias",!0,"premultipliedAlpha",!0,"preserveDrawingBuffer",!1],P.m,null)
s=C.o.bM(a,"webgl",t)
s=H.d(s==null?C.o.bM(a,"experimental-webgl",t):s,"$ibF")
if(s==null)H.q(P.p("Failed to get the rendering context for WebGL."))
u.b=a
u.a=a
u.c=s
u.e=E.kN(s,a)
r=new T.fH(s)
r.b=H.a0((s&&C.b).cP(s,3379))
r.c=H.a0(C.b.cP(s,34076))
r.d=0
r.e=0
u.f=r
r=new X.dP(a)
q=new X.eS()
q.c=new X.am(!1,!1,!1)
q.shO(P.da(null,null,null,P.y))
r.b=q
q=new X.f6(r)
q.f=0
q.r=V.aX()
q.x=V.aX()
q.Q=1
q.ch=1
r.c=q
q=new X.eW(r)
q.r=0
q.x=V.aX()
q.Q=1
q.ch=1
q.cx=1
q.cy=1
r.d=q
q=new X.fN(r)
q.e=0
q.f=V.aX()
q.r=V.aX()
r.e=q
r.f=!1
r.r=!1
r.x=!1
r.y=null
r.sfA(H.b([],[[P.ch,P.L]]))
q=r.z
p=document
o=W.a2
n={func:1,ret:-1,args:[o]};(q&&C.a).h(q,W.Z(p,"contextmenu",H.j(r.gh9(),n),!1,o))
q=r.z
m=W.k
l={func:1,ret:-1,args:[m]};(q&&C.a).h(q,W.Z(a,"focus",H.j(r.ghf(),l),!1,m))
q=r.z;(q&&C.a).h(q,W.Z(a,"blur",H.j(r.gh1(),l),!1,m))
q=r.z
k=W.aJ
j={func:1,ret:-1,args:[k]};(q&&C.a).h(q,W.Z(p,"keyup",H.j(r.ghj(),j),!1,k))
q=r.z;(q&&C.a).h(q,W.Z(p,"keydown",H.j(r.ghh(),j),!1,k))
k=r.z;(k&&C.a).h(k,W.Z(a,"mousedown",H.j(r.ghn(),n),!1,o))
k=r.z;(k&&C.a).h(k,W.Z(a,"mouseup",H.j(r.ghr(),n),!1,o))
k=r.z;(k&&C.a).h(k,W.Z(a,"mousemove",H.j(r.ghp(),n),!1,o))
k=r.z
j=W.aR;(k&&C.a).h(k,W.Z(a,H.I(W.kq(a)),H.j(r.ght(),{func:1,ret:-1,args:[j]}),!1,j))
j=r.z;(j&&C.a).h(j,W.Z(p,"mousemove",H.j(r.ghb(),n),!1,o))
j=r.z;(j&&C.a).h(j,W.Z(p,"mouseup",H.j(r.ghd(),n),!1,o))
o=r.z;(o&&C.a).h(o,W.Z(p,"pointerlockchange",H.j(r.ghv(),l),!1,m))
m=r.z
l=W.aC
p={func:1,ret:-1,args:[l]};(m&&C.a).h(m,W.Z(a,"touchstart",H.j(r.ghL(),p),!1,l))
m=r.z;(m&&C.a).h(m,W.Z(a,"touchend",H.j(r.ghH(),p),!1,l))
m=r.z;(m&&C.a).h(m,W.Z(a,"touchmove",H.j(r.ghJ(),p),!1,l))
u.r=r
u.Q=!0
u.ch=!1
u.cx=new P.ad(Date.now(),!1)
u.cy=0
u.dr()
return u},
ej:function ej(){},
a8:function a8(){var _=this
_.fx=_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
fl:function fl(a,b){var _=this
_.a=a
_.b=b
_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=null},
fm:function fm(a){this.a=a},
fn:function fn(a){this.a=a},
fo:function fo(a){this.a=a},
dI:function dI(){var _=this
_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
fK:function fK(a){this.a=a}},Z={
iw:function(a,b,c){var u
H.f(c,"$ia",[P.y],"$aa")
u=a.createBuffer()
C.b.ar(a,b,u)
C.b.dG(a,b,new Int16Array(H.cF(c)),35044)
C.b.ar(a,b,null)
return new Z.dU(b,u)},
aw:function(a){return new Z.aQ(a)},
dU:function dU(a,b){this.a=a
this.b=b},
cQ:function cQ(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
dV:function dV(a){this.a=a},
bV:function bV(a,b,c){var _=this
_.a=a
_.b=null
_.c=b
_.d=c},
bd:function bd(a,b,c){this.a=a
this.b=b
this.c=c},
aQ:function aQ(a){this.a=a}},D={
E:function(){var u=new D.bt()
u.sad(null)
u.saZ(null)
u.c=null
u.d=0
return u},
em:function em(){},
bt:function bt(){var _=this
_.d=_.c=_.b=_.a=null},
eA:function eA(a){this.a=a},
eB:function eB(a){this.a=a},
u:function u(a){this.a=a
this.b=null},
be:function be(a,b,c,d){var _=this
_.c=a
_.d=b
_.a=c
_.b=null
_.$ti=d},
bf:function bf(a,b,c,d){var _=this
_.c=a
_.d=b
_.a=c
_.b=null
_.$ti=d},
D:function D(a,b,c,d,e){var _=this
_.c=a
_.d=b
_.e=c
_.a=d
_.b=null
_.$ti=e},
b8:function b8(){var _=this
_.d=_.c=_.b=_.a=null},
V:function V(){},
d8:function d8(){var _=this
_.d=_.c=_.b=_.a=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=null},
dq:function dq(){},
dy:function dy(){},
dF:function dF(){},
dG:function dG(){},
dH:function dH(){}},X={cR:function cR(a,b){this.a=a
this.b=b},d7:function d7(a,b){this.a=a
this.b=b},eS:function eS(){var _=this
_.d=_.c=_.b=_.a=null},dc:function dc(a,b,c,d,e,f){var _=this
_.x=a
_.y=b
_.c=c
_.d=d
_.e=e
_.a=f
_.b=null},eW:function eW(a){var _=this
_.a=a
_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},am:function am(a,b,c){this.a=a
this.b=b
this.c=c},aW:function aW(a,b,c,d,e,f,g,h,i){var _=this
_.x=a
_.y=b
_.z=c
_.Q=d
_.ch=e
_.c=f
_.d=g
_.e=h
_.a=i
_.b=null},f6:function f6(a){var _=this
_.a=a
_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},c9:function c9(a,b,c,d,e){var _=this
_.x=a
_.c=b
_.d=c
_.e=d
_.a=e
_.b=null},fh:function fh(){},dK:function dK(a,b,c,d,e,f,g,h,i){var _=this
_.x=a
_.y=b
_.z=c
_.Q=d
_.ch=e
_.c=f
_.d=g
_.e=h
_.a=i
_.b=null},fN:function fN(a){var _=this
_.a=a
_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},dP:function dP(a){var _=this
_.a=a
_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},
ik:function(a,b,c,d,e,f,g){var u,t
u=new X.eH()
t=new V.aA(0,0,0,1)
u.a=t
u.b=!0
u.c=e
u.d=!0
u.e=g
u.f=!1
t=$.jk
if(t==null){t=V.jj(0,0,1,1)
$.jk=t}u.r=t
return u},
jc:function(a,b,c,d,e){var u,t,s
u=new X.dp()
u.c=1.0471975511965976
u.d=0.1
u.e=2000
if(null!=c){t=u.b
u.b=c
if(c!=null)c.gn().h(0,u.gh3())
s=new D.D("mover",t,u.b,u,[U.a3])
s.b=!0
u.ao(s)}s=u.c
if(!(Math.abs(s-b)<$.J().a)){u.c=b
s=new D.D("fov",s,b,u,[P.w])
s.b=!0
u.ao(s)}s=u.d
if(!(Math.abs(s-d)<$.J().a)){u.d=d
s=new D.D("near",s,d,u,[P.w])
s.b=!0
u.ao(s)}s=u.e
if(!(Math.abs(s-a)<$.J().a)){u.e=a
s=new D.D("far",s,a,u,[P.w])
s.b=!0
u.ao(s)}return u},
bp:function bp(){},
eH:function eH(){var _=this
_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
eM:function eM(){this.b=this.a=null},
dp:function dp(){var _=this
_.f=_.e=_.d=_.c=_.b=_.a=null},
ci:function ci(){}},V={
lI:function(a,b,c){var u
if(c<=b)return b
u=c-b
a=C.j.eI(a-b,u)
return(a<0?a+u:a)+b},
O:function(a,b,c){if(a==null)return C.i.ah("null",c)
return C.i.ah(C.j.er(Math.abs(a-0)<$.J().a?0:a,b),c+b+1)},
bM:function(a,b,c){var u,t,s,r,q,p
H.f(a,"$ia",[P.w],"$aa")
u=H.b([],[P.m])
for(t=a.length,s=0,r=0;r<a.length;a.length===t||(0,H.x)(a),++r){q=V.O(a[r],b,c)
s=Math.max(s,q.length)
C.a.h(u,q)}for(p=u.length-1;p>=0;--p){if(p>=u.length)return H.l(u,p)
C.a.Y(u,p,C.i.ah(u[p],s))}return u},
iM:function(a,b){return C.j.k_(Math.pow(b,C.O.cz(Math.log(H.lh(a))/Math.log(b))))},
bB:function(){var u=$.j9
if(u==null){u=V.aL(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1)
$.j9=u}return u},
aL:function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){return new V.ae(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p)},
j8:function(a,b,c){var u,t,s,r,q,p,o,n
u=c.v(0,Math.sqrt(c.D(c)))
t=b.b3(u)
s=t.v(0,Math.sqrt(t.D(t)))
r=u.b3(s)
q=new V.K(a.a,a.b,a.c)
p=s.P(0).D(q)
o=r.P(0).D(q)
n=u.P(0).D(q)
return V.aL(s.a,r.a,u.a,p,s.b,r.b,u.b,o,s.c,r.c,u.c,n,0,0,0,1)},
aX:function(){var u=$.je
if(u==null){u=new V.Y(0,0)
$.je=u}return u},
jf:function(){var u=$.cb
if(u==null){u=new V.a9(0,0,0)
$.cb=u}return u},
jj:function(a,b,c,d){if(c<0){a+=c
c=-c}if(d<0){b+=d
d=-d}return new V.dt(a,b,c,d)},
dT:function(){var u=$.jw
if(u==null){u=new V.K(0,0,0)
$.jw=u}return u},
jx:function(){var u=$.jv
if(u==null){u=new V.K(0,1,0)
$.jv=u}return u},
kV:function(){var u=$.h4
if(u==null){u=new V.K(0,0,1)
$.h4=u}return u},
W:function W(a,b,c){this.a=a
this.b=b
this.c=c},
aA:function aA(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
ey:function ey(a){this.a=a},
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
ae:function ae(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){var _=this
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
Y:function Y(a,b){this.a=a
this.b=b},
a9:function a9(a,b,c){this.a=a
this.b=b
this.c=c},
aY:function aY(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
dt:function dt(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
N:function N(a,b){this.a=a
this.b=b},
K:function K(a,b,c){this.a=a
this.b=b
this.c=c},
P:function(a,b){var u,t,s,r
if(a.length!==1||b.length!==1)throw H.h(P.p("The given low and high character strings for a RangeMatcher must have one and only one characters."))
u=C.i.aK(a,0)
t=C.i.aK(b,0)
s=new V.fj()
if(u>t){r=t
t=u
u=r}s.a=u
s.b=t
return s},
r:function(a){var u=new V.fr()
u.f_(a)
return u},
fM:function(){var u,t
u=new V.fL()
t=P.m
u.sia(new H.aI([t,V.cf]))
u.sig(new H.aI([t,V.cl]))
u.c=null
return u},
aT:function aT(){},
al:function al(){},
dd:function dd(){},
af:function af(){this.a=null},
fj:function fj(){this.b=this.a=null},
fr:function fr(){this.a=null},
cf:function cf(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
dJ:function dJ(a,b,c){this.a=a
this.b=b
this.c=c},
cl:function cl(a,b){this.a=a
this.b=b
this.c=null},
fL:function fL(){this.c=this.b=this.a=null},
cm:function cm(a){this.b=a
this.a=this.c=null},
lE:function(a){P.kU(C.K,new V.i9(a))},
kP:function(a,b){var u=new V.fv()
u.f0(a,!0)
return u},
b6:function b6(){},
i9:function i9(a){this.a=a},
er:function er(a){var _=this
_.a=a
_.d=_.c=_.b=null},
eI:function eI(a){var _=this
_.a=a
_.d=_.c=_.b=null},
eJ:function eJ(a){var _=this
_.a=a
_.d=_.c=_.b=null},
fg:function fg(a){var _=this
_.a=a
_.d=_.c=_.b=null},
fv:function fv(){this.b=this.a=null},
fx:function fx(a){this.a=a},
fw:function fw(a){this.a=a},
fy:function fy(a){this.a=a}},U={
ii:function(){var u=new U.en()
u.a=!0
u.b=1e12
u.c=-1e12
u.d=0
u.e=100
u.f=0
u.x=0
u.r=0
return u},
iZ:function(a){var u=new U.cT()
u.a=a
return u},
en:function en(){var _=this
_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
cT:function cT(){this.b=this.a=null},
c3:function c3(){var _=this
_.d=_.c=_.b=_.a=_.r=_.f=_.e=null},
a3:function a3(){},
dQ:function dQ(){var _=this
_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
dR:function dR(){var _=this
_.fx=_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
dS:function dS(){var _=this
_.r=_.f=_.e=_.d=_.c=_.b=_.a=null}},M={cS:function cS(){var _=this
_.d=_.c=_.b=_.a=_.f=_.e=null},cU:function cU(){var _=this
_.f=_.e=_.d=_.c=_.b=_.a=null},cY:function cY(){var _=this
_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},ao:function ao(){}},A={
kB:function(a,b){var u,t
u=a.ak
t=new A.df(b,u)
t.cW(b,u)
t.eY(a,b)
return t},
iv:function(a,b,c,d,e){var u=new A.fS(a,b,c,e)
u.f=d
u.sis(P.kz(d,0,!1,P.y))
return u},
cO:function cO(a,b,c){this.a=a
this.b=b
this.c=c},
ei:function ei(a){this.a=a},
df:function df(a,b){var _=this
_.bo=_.dR=_.bn=_.ak=_.as=_.y2=_.y1=_.x2=_.x1=_.ry=_.rx=_.r2=_.r1=_.k4=_.k3=_.k2=_.k1=_.id=_.go=_.fy=_.fx=_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=null
_.e6=_.cr=_.e5=_.bB=_.e4=_.e3=_.bA=_.bz=_.e2=_.e1=_.by=_.bx=_.bw=_.e0=_.e_=_.bv=_.dZ=_.dY=_.bu=_.dX=_.dW=_.bt=_.bs=_.dV=_.dU=_.br=_.bq=_.dT=_.dS=_.bp=null
_.cw=_.ea=_.cv=_.e9=_.cu=_.e8=_.ct=_.e7=_.cs=null
_.a=a
_.b=b
_.y=_.x=_.r=_.f=_.e=_.d=_.c=null},
f3:function f3(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5){var _=this
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
_.as=b3
_.ak=b4
_.bn=b5},
cn:function cn(a,b,c){this.a=a
this.b=b
this.c=c},
cr:function cr(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.x=h},
cp:function cp(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},
cs:function cs(a,b,c,d,e,f,g,h,i,j){var _=this
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
cq:function cq(a,b,c,d,e,f,g,h,i,j){var _=this
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
ct:function ct(a,b,c,d,e,f,g,h,i,j,k,l,m,n){var _=this
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
ce:function ce(){},
bs:function bs(a,b){this.a=a
this.b=b},
dx:function dx(a,b){var _=this
_.db=_.cy=_.cx=_.ch=_.Q=_.z=null
_.a=a
_.b=b
_.y=_.x=_.r=_.f=_.e=_.d=_.c=null},
dL:function dL(){},
fY:function fY(a){this.a=a},
G:function G(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
fU:function fU(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
fV:function fV(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
fX:function fX(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
fS:function fS(a,b,c,d){var _=this
_.f=_.e=null
_.a=a
_.b=b
_.c=c
_.d=d},
Q:function Q(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
fT:function fT(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
C:function C(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
fW:function fW(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
fZ:function fZ(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
co:function co(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
ah:function ah(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
aa:function aa(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
a5:function a5(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d}},F={
hU:function(a){var u=a.a>0?1:0
if(a.b>0)u+=2
return(a.c>0?u+4:u)*2},
cD:function(a,b,c,d,a0,a1,a2,a3,a4){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e
u={}
t=a1+a2
s=t+a3
r=a2+a3
q=a3+a1
p=new V.K(s,r+a1,q+a2)
u.a=p
o=a1-a2
n=a2-a3
m=a3-a1
l=new V.K(o+a3,n+a1,m+a2)
u.b=l
k=new V.K(o-a3,n-a1,m-a2)
u.c=k
j=new V.K(t-a3,r-a1,q-a2)
u.d=j
if(s>0){u.d=l
u.b=j
s=l
t=j}else{s=j
t=l}for(q=s,s=t,t=p,r=k,i=0;i<a4;++i,h=q,q=t,t=s,s=r,r=h){u.a=s
u.b=r
u.c=q
u.d=t}g=F.hU(t)
f=F.hU(u.b)
e=F.lG(d,a0,new F.hT(u,F.hU(u.c),F.hU(u.d),f,g,c),b)
if(e!=null)a.jz(e)},
lG:function(a,b,c,d){var u,t,s,r,q,p,o,n,m,l,k,j,i,h
H.j(c,{func:1,ret:-1,args:[F.aq,P.w,P.w]})
if(a<1)return
if(b<1)return
u=F.is()
t=H.b([],[F.aq])
for(s=0;s<=b;++s){r=s/b
q=u.a
if(r<0)p=0
else p=r>1?1:r
q.toString
o=F.h5(null,null,new V.aA(p,0,0,1),null,null,new V.Y(r,1),null,null,0)
q.h(0,o)
c.$3(o,r,0)
C.a.h(t,o.cn(d))}for(s=1;s<=a;++s){n=s/a
for(q=n>1,p=n<0,m=1-n,l=0;l<=b;++l){r=l/b
k=u.a
if(r<0)j=0
else j=r>1?1:r
if(p)i=0
else i=q?1:n
if(p)h=0
else h=q?1:n
k.toString
o=F.h5(null,null,new V.aA(j,i,h,1),null,null,new V.Y(r,m),null,null,0)
k.h(0,o)
c.$3(o,r,n)
C.a.h(t,o.cn(d))}}u.d.iR(a+1,b+1,t)
return u},
c1:function(a,b,c){var u,t
u=new F.X()
t=a.a
if(t==null)H.q(P.p("May not create a face with a first vertex which is not attached to a shape."))
if(t!=b.a||t!=c.a)H.q(P.p("May not create a face with vertices attached to different shapes."))
u.a=a
C.a.h(a.d.b,u)
u.b=b
C.a.h(b.d.c,u)
u.c=c
C.a.h(c.d.d,u)
C.a.h(u.a.a.d.b,u)
u.a.a.a3()
return u},
kw:function(a,b){var u,t
u=new F.aV()
t=a.a
if(t==null)H.q(P.p("May not create a line with a start vertex which is not attached to a shape."))
if(t!=b.a)H.q(P.p("May not create a line with vertices attached to different shapes."))
u.a=a
C.a.h(a.c.b,u)
u.b=b
C.a.h(b.c.c,u)
C.a.h(u.a.a.c.b,u)
u.a.a.a3()
return u},
is:function(){var u,t
u=new F.dv()
t=new F.h6(u)
t.b=!1
t.sit(H.b([],[F.aq]))
u.a=t
t=new F.fu(u)
t.sc9(H.b([],[F.bh]))
u.b=t
t=new F.ft(u)
t.sfK(H.b([],[F.aV]))
u.c=t
t=new F.fs(u)
t.sfB(H.b([],[F.X]))
u.d=t
u.e=null
return u},
h5:function(a,b,c,d,e,f,g,h,i){var u,t,s
u=new F.aq()
t=new F.hb(u)
t.sc9(H.b([],[F.bh]))
u.b=t
t=new F.ha(u)
s=[F.aV]
t.sfL(H.b([],s))
t.sfM(H.b([],s))
u.c=t
t=new F.h7(u)
s=[F.X]
t.sfC(H.b([],s))
t.sfD(H.b([],s))
t.sfE(H.b([],s))
u.d=t
h=$.k6()
u.e=0
t=$.aE()
s=h.a
u.f=(s&t.a)!==0?d:null
u.r=(s&$.b1().a)!==0?e:null
u.x=(s&$.b0().a)!==0?b:null
u.y=(s&$.b2().a)!==0?f:null
u.z=(s&$.b3().a)!==0?g:null
u.Q=(s&$.k7().a)!==0?c:null
u.ch=(s&$.bQ().a)!==0?i:0
u.cx=(s&$.b_().a)!==0?a:null
return u},
hT:function hT(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
X:function X(){var _=this
_.e=_.d=_.c=_.b=_.a=null},
aV:function aV(){this.b=this.a=null},
bh:function bh(){this.a=null},
dv:function dv(){var _=this
_.e=_.d=_.c=_.b=_.a=null},
fs:function fs(a){this.a=a
this.b=null},
ft:function ft(a){this.a=a
this.b=null},
fu:function fu(a){this.a=a
this.b=null},
aq:function aq(){var _=this
_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
hd:function hd(a){this.a=a},
hc:function hc(a){this.a=a},
h6:function h6(a){this.a=a
this.c=this.b=null},
h7:function h7(a){var _=this
_.a=a
_.d=_.c=_.b=null},
h8:function h8(a,b){this.a=a
this.b=b},
h9:function h9(a,b){this.a=a
this.b=b},
ha:function ha(a){this.a=a
this.c=this.b=null},
hb:function hb(a){this.a=a
this.b=null}},T={ck:function ck(){},dD:function dD(){},fG:function fG(){var _=this
_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},dE:function dE(){var _=this
_.e=_.d=_.c=_.b=_.a=null},fH:function fH(a){var _=this
_.a=a
_.e=_.d=_.c=_.b=null},fJ:function fJ(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},fI:function fI(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g}},Q={
jQ:function(){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6
u=V.kP("Test 019",!0)
t=W.ig(null,null)
t.className="pageLargeCanvas"
t.id="testCanvas"
C.k.B(u.a,t)
s=[P.m]
u.dA(H.b(["A test of the Material Lighting shader with an alpha texture. ","There are no mapped reflections, this is actually transparent."],s))
u.dA(H.b(["\xab[Back to Tests|../]"],s))
r=C.z.eD(document,"testCanvas")
if(r==null)H.q(P.p("Failed to find an element with the identifier, testCanvas."))
q=E.kT(r,!0,!0,!0,!1)
p=E.j2(null,!0,null,"",null,null)
o=F.is()
F.cD(o,null,null,1,1,1,0,0,1)
F.cD(o,null,null,1,1,0,1,0,3)
F.cD(o,null,null,1,1,0,0,1,2)
F.cD(o,null,null,1,1,-1,0,0,0)
F.cD(o,null,null,1,1,0,-1,0,0)
F.cD(o,null,null,1,1,0,0,-1,3)
o.ay()
p.sbO(0,o)
n=X.ik(!0,!0,!1,null,2000,null,0)
if(n.b){n.b=!1
s=new D.D("clearColor",!0,!1,n,[P.H])
s.b=!0
n.ao(s)}s=q.f
m=s.a
l=m.createTexture()
C.b.a7(m,34067,l)
C.b.at(m,34067,10242,10497)
C.b.at(m,34067,10243,10497)
C.b.at(m,34067,10241,9729)
C.b.at(m,34067,10240,9729)
C.b.a7(m,34067,null)
k=new T.dE()
k.a=0
k.b=l
k.c=!1
k.d=0
s.aM(k,l,"../resources/maskonaive/posx.jpg",34069,!1,!1)
s.aM(k,l,"../resources/maskonaive/negx.jpg",34070,!1,!1)
s.aM(k,l,"../resources/maskonaive/posy.jpg",34071,!1,!1)
s.aM(k,l,"../resources/maskonaive/negy.jpg",34072,!1,!1)
s.aM(k,l,"../resources/maskonaive/posz.jpg",34073,!1,!1)
s.aM(k,l,"../resources/maskonaive/negz.jpg",34074,!1,!1)
j=q.f.jw("../resources/AlphaWeave.png")
i=new O.de()
i.sfm(O.ih(V.ae))
i.e.aU(i.gfY(),i.gh_())
s=new O.aK(i,"emission")
s.c=C.c
s.f=new V.W(0,0,0)
i.f=s
s=new O.aK(i,"ambient")
s.c=C.c
s.f=new V.W(0,0,0)
i.r=s
s=new O.aK(i,"diffuse")
s.c=C.c
s.f=new V.W(0,0,0)
i.x=s
s=new O.aK(i,"invDiffuse")
s.c=C.c
s.f=new V.W(0,0,0)
i.y=s
s=new O.f5(i,"specular")
s.c=C.c
s.f=new V.W(0,0,0)
s.ch=100
i.z=s
s=new O.f2(i,"bump")
s.c=C.c
i.Q=s
i.ch=null
s=new O.aK(i,"reflect")
s.c=C.c
s.f=new V.W(0,0,0)
i.cx=s
s=new O.f4(i,"refract")
s.c=C.c
s.f=new V.W(0,0,0)
s.ch=1
i.cy=s
s=new O.f1(i,"alpha")
s.c=C.c
s.f=1
i.db=s
s=new D.d8()
s.bf(D.V)
s.sfw(H.b([],[D.b8]))
s.shN(H.b([],[D.dq]))
s.si9(H.b([],[D.dy]))
s.sip(H.b([],[D.dF]))
s.siq(H.b([],[D.dG]))
s.sir(H.b([],[D.dH]))
s.Q=null
s.ch=null
s.cR(s.gfW(),s.ghx(),s.ghB())
i.dx=s
m=s.Q
if(m==null){m=D.E()
s.Q=m
s=m}else s=m
s.h(0,i.ghV())
s=i.dx
m=s.ch
if(m==null){m=D.E()
s.ch=m
s=m}else s=m
s.h(0,i.gaJ())
i.dy=null
s=i.dx
h=V.jx()
m=U.iZ(V.j8(V.jf(),h,new V.K(1,-2,-3)))
g=new V.W(1,1,1)
f=new D.b8()
f.c=new V.W(1,1,1)
f.a=V.kV()
e=f.b
f.b=m
m.gn().h(0,f.gf5())
m=new D.D("mover",e,f.b,f,[U.a3])
m.b=!0
f.au(m)
if(!f.c.t(0,g)){e=f.c
f.c=g
m=new D.D("color",e,g,f,[V.W])
m.b=!0
f.au(m)}s.h(0,f)
s=i.r
s.saz(0,new V.W(0.5,0.5,0.5))
s=i.x
s.saz(0,new V.W(0.6,0.6,0.6))
i.r.scL(j)
i.x.scL(j)
i.db.scL(j)
d=new U.c3()
d.bf(U.a3)
d.aU(d.gfU(),d.ghz())
d.e=null
d.f=V.bB()
d.r=0
s=q.r
m=new U.dR()
f=U.ii()
f.scO(0,!0)
f.scE(6.283185307179586)
f.scG(0)
f.sa9(0,0)
f.scF(100)
f.sR(0)
f.sco(0.5)
m.b=f
c=m.gaI()
f.gn().h(0,c)
f=U.ii()
f.scO(0,!0)
f.scE(6.283185307179586)
f.scG(0)
f.sa9(0,0)
f.scF(100)
f.sR(0)
f.sco(0.5)
m.c=f
f.gn().h(0,c)
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
b=new X.am(!1,!1,!1)
e=m.d
m.d=b
f=[X.am]
c=new D.D("modifiers",e,b,m,f)
c.b=!0
m.N(c)
c=m.f
if(c!==!1){m.f=!1
c=new D.D("invertX",c,!1,m,[P.H])
c.b=!0
m.N(c)}c=m.r
if(c!==!1){m.r=!1
c=new D.D("invertY",c,!1,m,[P.H])
c.b=!0
m.N(c)}m.b1(s)
d.h(0,m)
s=q.r
m=new U.dQ()
c=U.ii()
c.scO(0,!0)
c.scE(6.283185307179586)
c.scG(0)
c.sa9(0,0)
c.scF(100)
c.sR(0)
c.sco(0.2)
m.b=c
c.gn().h(0,m.gaI())
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
b=new X.am(!0,!1,!1)
e=m.c
m.c=b
c=new D.D("modifiers",e,b,m,f)
c.b=!0
m.N(c)
m.b1(s)
d.h(0,m)
s=q.r
m=new U.dS()
m.c=0.01
m.d=0
m.e=0
b=new X.am(!1,!1,!1)
m.b=b
f=new D.D("modifiers",null,b,m,f)
f.b=!0
m.N(f)
m.b1(s)
d.h(0,m)
d.h(0,U.iZ(V.aL(1,0,0,0,0,1,0,0,0,0,1,5,0,0,0,1)))
a=X.jc(2000,1.0471975511965976,d,0.1,null)
a0=new M.cU()
a0.sb2(null)
a0.sb7(0,null)
a0.sb8(null)
s=E.j2(null,!0,null,"",null,null)
o=F.is()
m=o.a
f=new V.K(-1,-1,1)
f=f.v(0,Math.sqrt(f.D(f)))
a1=m.bl(new V.aY(1,2,4,6),new V.aA(1,0,0,1),new V.a9(-1,-1,0),new V.Y(0,1),f,null)
m=o.a
f=new V.K(1,-1,1)
f=f.v(0,Math.sqrt(f.D(f)))
a2=m.bl(new V.aY(0,3,4,6),new V.aA(0,0,1,1),new V.a9(1,-1,0),new V.Y(1,1),f,null)
m=o.a
f=new V.K(1,1,1)
f=f.v(0,Math.sqrt(f.D(f)))
a3=m.bl(new V.aY(0,2,5,6),new V.aA(0,1,0,1),new V.a9(1,1,0),new V.Y(1,0),f,null)
m=o.a
f=V.aX()
c=new V.K(-1,1,1)
c=c.v(0,Math.sqrt(c.D(c)))
a4=m.bl(new V.aY(0,2,4,7),new V.aA(1,1,0,1),new V.a9(-1,1,0),f,c,null)
o.d.iQ(H.b([a1,a2,a3,a4],[F.aq]))
o.ay()
s.sbO(0,o)
a0.d=s
a0.e=null
s=new O.dw()
s.b=1.0471975511965976
s.d=new V.W(1,1,1)
e=s.c
s.c=k
k.gn().h(0,s.gaJ())
m=new D.D("boxTexture",e,s.c,s,[T.dE])
m.b=!0
s.S(m)
a0.sb8(s)
a0.sb7(0,n)
a0.sb2(a)
a5=new M.cY()
a5.sfp(0,O.ih(E.a8))
a5.d.aU(a5.gh5(),a5.gh7())
a5.e=null
a5.f=null
a5.r=null
a5.x=null
a6=X.ik(!0,!0,!1,null,2000,null,0)
a5.sb2(null)
a5.sb7(0,a6)
a5.sb8(null)
a5.sb2(a)
a5.sb8(i)
a5.sb7(0,n)
a5.d.h(0,p)
s=M.ao
m=H.b([a0,a5],[s])
f=new M.cS()
f.bf(s)
f.e=!1
f.f=null
f.aU(f.ghD(),f.ghF())
f.a6(0,m)
s=q.d
if(s!==f){if(s!=null)s.gn().U(0,q.gcY())
q.d=f
f.gn().h(0,q.gcY())
q.cZ()}s=q.z
if(s==null){s=D.E()
q.z=s}m={func:1,ret:-1,args:[D.u]}
f=H.j(new Q.i6(u,i),m)
if(s.b==null)s.saZ(H.b([],[m]))
s=s.b;(s&&C.a).h(s,f)
V.lE(q)},
i6:function i6(a,b){this.a=a
this.b=b}}
var w=[C,H,J,P,W,O,E,Z,D,X,V,U,M,A,F,T,Q]
hunkHelpers.setFunctionNamesIfNecessary(w)
var $={}
H.ip.prototype={}
J.a1.prototype={
t:function(a,b){return a===b},
gG:function(a){return H.cc(a)},
i:function(a){return"Instance of '"+H.bD(a)+"'"}}
J.eP.prototype={
i:function(a){return String(a)},
gG:function(a){return a?519018:218159},
$iH:1}
J.d4.prototype={
t:function(a,b){return null==b},
i:function(a){return"null"},
gG:function(a){return 0},
$iF:1}
J.d6.prototype={
gG:function(a){return 0},
i:function(a){return String(a)}}
J.ff.prototype={}
J.cu.prototype={}
J.bg.prototype={
i:function(a){var u=a[$.jW()]
if(u==null)return this.eU(a)
return"JavaScript function for "+H.e(J.aj(u))},
$S:function(){return{func:1,opt:[,,,,,,,,,,,,,,,,]}},
$ibb:1}
J.aH.prototype={
h:function(a,b){H.A(b,H.v(a,0))
if(!!a.fixed$length)H.q(P.ap("add"))
a.push(b)},
U:function(a,b){var u
if(!!a.fixed$length)H.q(P.ap("remove"))
for(u=0;u<a.length;++u)if(J.a_(a[u],b)){a.splice(u,1)
return!0}return!1},
a6:function(a,b){var u,t
H.f(b,"$ii",[H.v(a,0)],"$ai")
if(!!a.fixed$length)H.q(P.ap("addAll"))
for(u=b.length,t=0;t<b.length;b.length===u||(0,H.x)(b),++t)a.push(b[t])},
a2:function(a,b){var u,t
H.j(b,{func:1,ret:-1,args:[H.v(a,0)]})
u=a.length
for(t=0;t<u;++t){b.$1(a[t])
if(a.length!==u)throw H.h(P.b7(a))}},
k:function(a,b){var u,t
u=new Array(a.length)
u.fixed$length=Array
for(t=0;t<a.length;++t)this.Y(u,t,H.e(a[t]))
return u.join(b)},
jt:function(a){return this.k(a,"")},
jn:function(a,b,c){var u,t,s
H.j(b,{func:1,ret:P.H,args:[H.v(a,0)]})
u=a.length
for(t=0;t<u;++t){s=a[t]
if(b.$1(s))return s
if(a.length!==u)throw H.h(P.b7(a))}throw H.h(H.im())},
jm:function(a,b){return this.jn(a,b,null)},
a8:function(a,b){if(b<0||b>=a.length)return H.l(a,b)
return a[b]},
eR:function(a,b,c){var u=a.length
if(b>u)throw H.h(P.au(b,0,a.length,"start",null))
if(c<b||c>a.length)throw H.h(P.au(c,b,a.length,"end",null))
if(b===c)return H.b([],[H.v(a,0)])
return H.b(a.slice(b,c),[H.v(a,0)])},
gbD:function(a){var u=a.length
if(u>0)return a[u-1]
throw H.h(H.im())},
dC:function(a,b){var u,t
H.j(b,{func:1,ret:P.H,args:[H.v(a,0)]})
u=a.length
for(t=0;t<u;++t){if(b.$1(a[t]))return!0
if(a.length!==u)throw H.h(P.b7(a))}return!1},
T:function(a,b){var u
for(u=0;u<a.length;++u)if(J.a_(a[u],b))return!0
return!1},
i:function(a){return P.il(a,"[","]")},
gO:function(a){return new J.ac(a,a.length,0,[H.v(a,0)])},
gG:function(a){return H.cc(a)},
gp:function(a){return a.length},
sp:function(a,b){if(!!a.fixed$length)H.q(P.ap("set length"))
if(b<0)throw H.h(P.au(b,0,null,"newLength",null))
a.length=b},
Y:function(a,b,c){H.A(c,H.v(a,0))
if(!!a.immutable$list)H.q(P.ap("indexed set"))
if(b>=a.length||b<0)throw H.h(H.cJ(a,b))
a[b]=c},
$ii:1,
$ia:1}
J.io.prototype={}
J.ac.prototype={
gE:function(){return this.d},
u:function(){var u,t,s
u=this.a
t=u.length
if(this.b!==t)throw H.h(H.x(u))
s=this.c
if(s>=t){this.sdd(null)
return!1}this.sdd(u[s]);++this.c
return!0},
sdd:function(a){this.d=H.A(a,H.v(this,0))},
$iaG:1}
J.d5.prototype={
k_:function(a){var u
if(a>=-2147483648&&a<=2147483647)return a|0
if(isFinite(a)){u=a<0?Math.ceil(a):Math.floor(a)
return u+0}throw H.h(P.ap(""+a+".toInt()"))},
cz:function(a){var u,t
if(a>=0){if(a<=2147483647)return a|0}else if(a>=-2147483648){u=a|0
return a===u?u:u-1}t=Math.floor(a)
if(isFinite(t))return t
throw H.h(P.ap(""+a+".floor()"))},
al:function(a){if(a>0){if(a!==1/0)return Math.round(a)}else if(a>-1/0)return 0-Math.round(0-a)
throw H.h(P.ap(""+a+".round()"))},
er:function(a,b){var u,t
if(b>20)throw H.h(P.au(b,0,20,"fractionDigits",null))
u=a.toFixed(b)
if(a===0)t=1/a<0
else t=!1
if(t)return"-"+u
return u},
i:function(a){if(a===0&&1/a<0)return"-0.0"
else return""+a},
gG:function(a){var u,t,s,r,q
u=a|0
if(a===u)return 536870911&u
t=Math.abs(a)
s=Math.log(t)/0.6931471805599453|0
r=Math.pow(2,s)
q=t<1?t/r:r/t
return 536870911&((q*9007199254740992|0)+(q*3542243181176521|0))*599197+s*1259},
eI:function(a,b){var u=a%b
if(u===0)return 0
if(u>0)return u
if(b<0)return u-b
else return u+b},
eX:function(a,b){if((a|0)===a)if(b>=1||b<-1)return a/b|0
return this.du(a,b)},
a1:function(a,b){return(a|0)===a?a/b|0:this.du(a,b)},
du:function(a,b){var u=a/b
if(u>=-2147483648&&u<=2147483647)return u|0
if(u>0){if(u!==1/0)return Math.floor(u)}else if(u>-1/0)return Math.ceil(u)
throw H.h(P.ap("Result of truncating division is "+H.e(u)+": "+H.e(a)+" ~/ "+b))},
bi:function(a,b){var u
if(a>0)u=this.i8(a,b)
else{u=b>31?31:b
u=a>>u>>>0}return u},
i8:function(a,b){return b>31?0:a>>>b},
$iw:1,
$ia6:1}
J.d3.prototype={$iy:1}
J.d2.prototype={}
J.by.prototype={
cm:function(a,b){if(b<0)throw H.h(H.cJ(a,b))
if(b>=a.length)H.q(H.cJ(a,b))
return a.charCodeAt(b)},
aK:function(a,b){if(b>=a.length)throw H.h(H.cJ(a,b))
return a.charCodeAt(b)},
F:function(a,b){if(typeof b!=="string")throw H.h(P.id(b,null,null))
return a+b},
eQ:function(a,b,c){var u
if(c>a.length)throw H.h(P.au(c,0,a.length,null,null))
u=c+b.length
if(u>a.length)return!1
return b===a.substring(c,u)},
bP:function(a,b){return this.eQ(a,b,0)},
bd:function(a,b,c){if(c==null)c=a.length
if(b<0)throw H.h(P.fi(b,null,null))
if(b>c)throw H.h(P.fi(b,null,null))
if(c>a.length)throw H.h(P.fi(c,null,null))
return a.substring(b,c)},
bc:function(a,b){return this.bd(a,b,null)},
k6:function(a){return a.toLowerCase()},
A:function(a,b){var u,t
if(0>=b)return""
if(b===1||a.length===0)return a
if(b!==b>>>0)throw H.h(C.H)
for(u=a,t="";!0;){if((b&1)===1)t=u+t
b=b>>>1
if(b===0)break
u+=u}return t},
jG:function(a,b,c){var u=b-a.length
if(u<=0)return a
return this.A(c,u)+a},
ah:function(a,b){return this.jG(a,b," ")},
i:function(a){return a},
gG:function(a){var u,t,s
for(u=a.length,t=0,s=0;s<u;++s){t=536870911&t+a.charCodeAt(s)
t=536870911&t+((524287&t)<<10)
t^=t>>6}t=536870911&t+((67108863&t)<<3)
t^=t>>11
return 536870911&t+((16383&t)<<15)},
gp:function(a){return a.length},
$ijb:1,
$im:1}
H.o.prototype={
gp:function(a){return this.a.length},
l:function(a,b){return C.i.cm(this.a,b)},
$adO:function(){return[P.y]},
$aT:function(){return[P.y]},
$ai:function(){return[P.y]},
$aa:function(){return[P.y]}}
H.ev.prototype={}
H.bz.prototype={
gO:function(a){return new H.c5(this,this.gp(this),0,[H.a4(this,"bz",0)])},
bK:function(a,b){return this.eT(0,H.j(b,{func:1,ret:P.H,args:[H.a4(this,"bz",0)]}))}}
H.c5.prototype={
gE:function(){return this.d},
u:function(){var u,t,s,r
u=this.a
t=J.iH(u)
s=t.gp(u)
if(this.b!==s)throw H.h(P.b7(u))
r=this.c
if(r>=s){this.saX(null)
return!1}this.saX(t.a8(u,r));++this.c
return!0},
saX:function(a){this.d=H.A(a,H.v(this,0))},
$iaG:1}
H.eZ.prototype={
gO:function(a){return new H.f_(J.bR(this.a),this.b,this.$ti)},
gp:function(a){return J.bo(this.a)},
a8:function(a,b){return this.b.$1(J.ib(this.a,b))},
$ai:function(a,b){return[b]}}
H.f_.prototype={
u:function(){var u=this.b
if(u.u()){this.saX(this.c.$1(u.gE()))
return!0}this.saX(null)
return!1},
gE:function(){return this.a},
saX:function(a){this.a=H.A(a,H.v(this,1))},
$aaG:function(a,b){return[b]}}
H.f0.prototype={
gp:function(a){return J.bo(this.a)},
a8:function(a,b){return this.b.$1(J.ib(this.a,b))},
$abz:function(a,b){return[b]},
$ai:function(a,b){return[b]}}
H.cv.prototype={
gO:function(a){return new H.hf(J.bR(this.a),this.b,this.$ti)}}
H.hf.prototype={
u:function(){var u,t
for(u=this.a,t=this.b;u.u();)if(t.$1(u.gE()))return!0
return!1},
gE:function(){return this.a.gE()}}
H.bv.prototype={}
H.dO.prototype={}
H.dN.prototype={}
H.fk.prototype={}
H.fP.prototype={
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
H.fd.prototype={
i:function(a){var u=this.b
if(u==null)return"NoSuchMethodError: "+H.e(this.a)
return"NoSuchMethodError: method not found: '"+u+"' on null"}}
H.eR.prototype={
i:function(a){var u,t
u=this.b
if(u==null)return"NoSuchMethodError: "+H.e(this.a)
t=this.c
if(t==null)return"NoSuchMethodError: method not found: '"+u+"' ("+H.e(this.a)+")"
return"NoSuchMethodError: method not found: '"+u+"' on '"+t+"' ("+H.e(this.a)+")"}}
H.h0.prototype={
i:function(a){var u=this.a
return u.length===0?"Error":"Error: "+u}}
H.ia.prototype={
$1:function(a){if(!!J.S(a).$iba)if(a.$thrownJsError==null)a.$thrownJsError=this.a
return a},
$S:15}
H.e7.prototype={
i:function(a){var u,t
u=this.b
if(u!=null)return u
u=this.a
t=u!==null&&typeof u==="object"?u.stack:null
u=t==null?"":t
this.b=u
return u},
$iag:1}
H.bW.prototype={
i:function(a){return"Closure '"+H.bD(this).trim()+"'"},
$ibb:1,
gk9:function(){return this},
$C:"$1",
$R:1,
$D:null}
H.fF.prototype={}
H.fz.prototype={
i:function(a){var u=this.$static_name
if(u==null)return"Closure of unknown static method"
return"Closure '"+H.bP(u)+"'"}}
H.bT.prototype={
t:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof H.bT))return!1
return this.a===b.a&&this.b===b.b&&this.c===b.c},
gG:function(a){var u,t
u=this.c
if(u==null)t=H.cc(this.a)
else t=typeof u!=="object"?J.bn(u):H.cc(u)
return(t^H.cc(this.b))>>>0},
i:function(a){var u=this.c
if(u==null)u=this.a
return"Closure '"+H.e(this.d)+"' of "+("Instance of '"+H.bD(u)+"'")}}
H.fR.prototype={
i:function(a){return this.a}}
H.el.prototype={
i:function(a){return this.a}}
H.fp.prototype={
i:function(a){return"RuntimeError: "+H.e(this.a)}}
H.aI.prototype={
gp:function(a){return this.a},
gaB:function(){return new H.d9(this,[H.v(this,0)])},
dK:function(a){var u,t
if(typeof a==="string"){u=this.b
if(u==null)return!1
return this.d9(u,a)}else if(typeof a==="number"&&(a&0x3ffffff)===a){t=this.c
if(t==null)return!1
return this.d9(t,a)}else return this.jr(a)},
jr:function(a){var u=this.d
if(u==null)return!1
return this.cA(this.bX(u,J.bn(a)&0x3ffffff),a)>=0},
l:function(a,b){var u,t,s,r
if(typeof b==="string"){u=this.b
if(u==null)return
t=this.bg(u,b)
s=t==null?null:t.b
return s}else if(typeof b==="number"&&(b&0x3ffffff)===b){r=this.c
if(r==null)return
t=this.bg(r,b)
s=t==null?null:t.b
return s}else return this.js(b)},
js:function(a){var u,t,s
u=this.d
if(u==null)return
t=this.bX(u,J.bn(a)&0x3ffffff)
s=this.cA(t,a)
if(s<0)return
return t[s].b},
Y:function(a,b,c){var u,t,s,r,q,p
H.A(b,H.v(this,0))
H.A(c,H.v(this,1))
if(typeof b==="string"){u=this.b
if(u==null){u=this.c7()
this.b=u}this.d0(u,b,c)}else if(typeof b==="number"&&(b&0x3ffffff)===b){t=this.c
if(t==null){t=this.c7()
this.c=t}this.d0(t,b,c)}else{s=this.d
if(s==null){s=this.c7()
this.d=s}r=J.bn(b)&0x3ffffff
q=this.bX(s,r)
if(q==null)this.cc(s,r,[this.bR(b,c)])
else{p=this.cA(q,b)
if(p>=0)q[p].b=c
else q.push(this.bR(b,c))}}},
a2:function(a,b){var u,t
H.j(b,{func:1,ret:-1,args:[H.v(this,0),H.v(this,1)]})
u=this.e
t=this.r
for(;u!=null;){b.$2(u.a,u.b)
if(t!==this.r)throw H.h(P.b7(this))
u=u.c}},
d0:function(a,b,c){var u
H.A(b,H.v(this,0))
H.A(c,H.v(this,1))
u=this.bg(a,b)
if(u==null)this.cc(a,b,this.bR(b,c))
else u.b=c},
fg:function(){this.r=this.r+1&67108863},
bR:function(a,b){var u,t
u=new H.eT(H.A(a,H.v(this,0)),H.A(b,H.v(this,1)))
if(this.e==null){this.f=u
this.e=u}else{t=this.f
u.d=t
t.c=u
this.f=u}++this.a
this.fg()
return u},
cA:function(a,b){var u,t
if(a==null)return-1
u=a.length
for(t=0;t<u;++t)if(J.a_(a[t].a,b))return t
return-1},
i:function(a){return P.j7(this)},
bg:function(a,b){return a[b]},
bX:function(a,b){return a[b]},
cc:function(a,b,c){a[b]=c},
fv:function(a,b){delete a[b]},
d9:function(a,b){return this.bg(a,b)!=null},
c7:function(){var u=Object.create(null)
this.cc(u,"<non-identifier-key>",u)
this.fv(u,"<non-identifier-key>")
return u},
$ij5:1}
H.eT.prototype={}
H.d9.prototype={
gp:function(a){return this.a.a},
gO:function(a){var u,t
u=this.a
t=new H.eU(u,u.r,this.$ti)
t.c=u.e
return t}}
H.eU.prototype={
gE:function(){return this.d},
u:function(){var u=this.a
if(this.b!==u.r)throw H.h(P.b7(u))
else{u=this.c
if(u==null){this.sd1(null)
return!1}else{this.sd1(u.a)
this.c=this.c.c
return!0}}},
sd1:function(a){this.d=H.A(a,H.v(this,0))},
$iaG:1}
H.i1.prototype={
$1:function(a){return this.a(a)},
$S:15}
H.i2.prototype={
$2:function(a,b){return this.a(a,b)},
$S:32}
H.i3.prototype={
$1:function(a){return this.a(H.I(a))},
$S:34}
H.eQ.prototype={
i:function(a){return"RegExp/"+this.a+"/"},
$ijb:1}
H.dk.prototype={$im1:1}
H.dh.prototype={
gp:function(a){return a.length},
$iaB:1,
$aaB:function(){}}
H.di.prototype={
l:function(a,b){H.cE(b,a,a.length)
return a[b]},
$abv:function(){return[P.w]},
$aT:function(){return[P.w]},
$ii:1,
$ai:function(){return[P.w]},
$ia:1,
$aa:function(){return[P.w]}}
H.dj.prototype={
$abv:function(){return[P.y]},
$aT:function(){return[P.y]},
$ii:1,
$ai:function(){return[P.y]},
$ia:1,
$aa:function(){return[P.y]}}
H.f7.prototype={
l:function(a,b){H.cE(b,a,a.length)
return a[b]}}
H.f8.prototype={
l:function(a,b){H.cE(b,a,a.length)
return a[b]}}
H.f9.prototype={
l:function(a,b){H.cE(b,a,a.length)
return a[b]}}
H.dl.prototype={
gp:function(a){return a.length},
l:function(a,b){H.cE(b,a,a.length)
return a[b]},
$im2:1}
H.fa.prototype={
gp:function(a){return a.length},
l:function(a,b){H.cE(b,a,a.length)
return a[b]}}
H.cz.prototype={}
H.cA.prototype={}
H.cB.prototype={}
H.cC.prototype={}
P.hh.prototype={
$1:function(a){var u,t
u=this.a
t=u.a
u.a=null
t.$0()},
$S:24}
P.hg.prototype={
$1:function(a){var u,t
this.a.a=H.j(a,{func:1,ret:-1})
u=this.b
t=this.c
u.firstChild?u.removeChild(t):u.appendChild(t)},
$S:31}
P.hi.prototype={
$0:function(){this.a.$0()},
$S:2}
P.hj.prototype={
$0:function(){this.a.$0()},
$S:2}
P.e8.prototype={
fe:function(a,b){if(self.setTimeout!=null)this.b=self.setTimeout(H.bL(new P.hP(this,b),0),a)
else throw H.h(P.ap("`setTimeout()` not found."))},
ff:function(a,b){if(self.setTimeout!=null)this.b=self.setInterval(H.bL(new P.hO(this,a,Date.now(),b),0),a)
else throw H.h(P.ap("Periodic timer."))},
$iaN:1}
P.hP.prototype={
$0:function(){var u=this.a
u.b=null
u.c=1
this.b.$0()},
$S:3}
P.hO.prototype={
$0:function(){var u,t,s,r
u=this.a
t=u.c+1
s=this.b
if(s>0){r=Date.now()-this.c
if(r>(t+1)*s)t=C.h.eX(r,s)}u.c=t
this.d.$1(u)},
$S:2}
P.aS.prototype={
jy:function(a){if(this.c!==6)return!0
return this.b.b.cK(H.j(this.d,{func:1,ret:P.H,args:[P.L]}),a.a,P.H,P.L)},
jq:function(a){var u,t,s,r
u=this.e
t=P.L
s={futureOr:1,type:H.v(this,1)}
r=this.b.b
if(H.ef(u,{func:1,args:[P.L,P.ag]}))return H.iG(r.jT(u,a.a,a.b,null,t,P.ag),s)
else return H.iG(r.cK(H.j(u,{func:1,args:[P.L]}),a.a,null,t),s)}}
P.ax.prototype={
eq:function(a,b,c){var u,t,s,r
u=H.v(this,0)
H.j(a,{func:1,ret:{futureOr:1,type:c},args:[u]})
t=$.R
if(t!==C.l){t.toString
H.j(a,{func:1,ret:{futureOr:1,type:c},args:[u]})
if(b!=null)b=P.la(b,t)}H.j(a,{func:1,ret:{futureOr:1,type:c},args:[u]})
s=new P.ax(0,$.R,[c])
r=b==null?1:3
this.d3(new P.aS(s,r,a,b,[u,c]))
return s},
jZ:function(a,b){return this.eq(a,null,b)},
d3:function(a){var u,t
u=this.a
if(u<=1){a.a=H.d(this.c,"$iaS")
this.c=a}else{if(u===2){t=H.d(this.c,"$iax")
u=t.a
if(u<4){t.d3(a)
return}this.a=u
this.c=t.c}u=this.b
u.toString
P.hX(null,null,u,H.j(new P.hq(this,a),{func:1,ret:-1}))}},
dn:function(a){var u,t,s,r,q,p
u={}
u.a=a
if(a==null)return
t=this.a
if(t<=1){s=H.d(this.c,"$iaS")
this.c=a
if(s!=null){for(r=a;q=r.a,q!=null;r=q);r.a=s}}else{if(t===2){p=H.d(this.c,"$iax")
t=p.a
if(t<4){p.dn(a)
return}this.a=t
this.c=p.c}u.a=this.bh(a)
t=this.b
t.toString
P.hX(null,null,t,H.j(new P.hu(u,this),{func:1,ret:-1}))}},
cb:function(){var u=H.d(this.c,"$iaS")
this.c=null
return this.bh(u)},
bh:function(a){var u,t,s
for(u=a,t=null;u!=null;t=u,u=s){s=u.a
u.a=t}return t},
d5:function(a){var u,t,s
u=H.v(this,0)
H.iG(a,{futureOr:1,type:u})
t=this.$ti
if(H.cI(a,"$ic2",t,"$ac2"))if(H.cI(a,"$iax",t,null))P.jy(a,this)
else P.l_(a,this)
else{s=this.cb()
H.A(a,u)
this.a=4
this.c=a
P.cy(this,s)}},
d6:function(a,b){var u
H.d(b,"$iag")
u=this.cb()
this.a=8
this.c=new P.a7(a,b)
P.cy(this,u)},
$ic2:1}
P.hq.prototype={
$0:function(){P.cy(this.a,this.b)},
$S:2}
P.hu.prototype={
$0:function(){P.cy(this.b,this.a.a)},
$S:2}
P.hr.prototype={
$1:function(a){var u=this.a
u.a=0
u.d5(a)},
$S:24}
P.hs.prototype={
$2:function(a,b){H.d(b,"$iag")
this.a.d6(a,b)},
$1:function(a){return this.$2(a,null)},
$S:41}
P.ht.prototype={
$0:function(){this.a.d6(this.b,this.c)},
$S:2}
P.hx.prototype={
$0:function(){var u,t,s,r,q,p,o
u=null
try{r=this.c
u=r.b.b.eo(H.j(r.d,{func:1}),null)}catch(q){t=H.ar(q)
s=H.bN(q)
if(this.d){r=H.d(this.a.a.c,"$ia7").a
p=t
p=r==null?p==null:r===p
r=p}else r=!1
p=this.b
if(r)p.b=H.d(this.a.a.c,"$ia7")
else p.b=new P.a7(t,s)
p.a=!0
return}if(!!J.S(u).$ic2){if(u instanceof P.ax&&u.a>=4){if(u.a===8){r=this.b
r.b=H.d(u.c,"$ia7")
r.a=!0}return}o=this.a.a
r=this.b
r.b=u.jZ(new P.hy(o),null)
r.a=!1}},
$S:3}
P.hy.prototype={
$1:function(a){return this.a},
$S:38}
P.hw.prototype={
$0:function(){var u,t,s,r,q,p,o
try{s=this.b
r=H.v(s,0)
q=H.A(this.c,r)
p=H.v(s,1)
this.a.b=s.b.b.cK(H.j(s.d,{func:1,ret:{futureOr:1,type:p},args:[r]}),q,{futureOr:1,type:p},r)}catch(o){u=H.ar(o)
t=H.bN(o)
s=this.a
s.b=new P.a7(u,t)
s.a=!0}},
$S:3}
P.hv.prototype={
$0:function(){var u,t,s,r,q,p,o,n
try{u=H.d(this.a.a.c,"$ia7")
r=this.c
if(r.jy(u)&&r.e!=null){q=this.b
q.b=r.jq(u)
q.a=!1}}catch(p){t=H.ar(p)
s=H.bN(p)
r=H.d(this.a.a.c,"$ia7")
q=r.a
o=t
n=this.b
if(q==null?o==null:q===o)n.b=r
else n.b=new P.a7(t,s)
n.a=!0}},
$S:3}
P.dW.prototype={}
P.fA.prototype={
gp:function(a){var u,t,s,r
u={}
t=new P.ax(0,$.R,[P.y])
u.a=0
s=H.v(this,0)
r=H.j(new P.fC(u,this),{func:1,ret:-1,args:[s]})
H.j(new P.fD(u,t),{func:1,ret:-1})
W.Z(this.a,this.b,r,!1,s)
return t}}
P.fC.prototype={
$1:function(a){H.A(a,H.v(this.b,0));++this.a.a},
$S:function(){return{func:1,ret:P.F,args:[H.v(this.b,0)]}}}
P.fD.prototype={
$0:function(){this.b.d5(this.a.a)},
$S:2}
P.ch.prototype={}
P.fB.prototype={}
P.aN.prototype={}
P.a7.prototype={
i:function(a){return H.e(this.a)},
$iba:1}
P.hS.prototype={$img:1}
P.hW.prototype={
$0:function(){var u,t,s
u=this.a
t=u.a
if(t==null){s=new P.dn()
u.a=s
u=s}else u=t
t=this.b
if(t==null)throw H.h(u)
s=H.h(u)
s.stack=t.i(0)
throw s},
$S:2}
P.hD.prototype={
jU:function(a){var u,t,s
H.j(a,{func:1,ret:-1})
try{if(C.l===$.R){a.$0()
return}P.jE(null,null,this,a,-1)}catch(s){u=H.ar(s)
t=H.bN(s)
P.hV(null,null,this,u,H.d(t,"$iag"))}},
jV:function(a,b,c){var u,t,s
H.j(a,{func:1,ret:-1,args:[c]})
H.A(b,c)
try{if(C.l===$.R){a.$1(b)
return}P.jF(null,null,this,a,b,-1,c)}catch(s){u=H.ar(s)
t=H.bN(s)
P.hV(null,null,this,u,H.d(t,"$iag"))}},
iX:function(a,b){return new P.hF(this,H.j(a,{func:1,ret:b}),b)},
ci:function(a){return new P.hE(this,H.j(a,{func:1,ret:-1}))},
dE:function(a,b){return new P.hG(this,H.j(a,{func:1,ret:-1,args:[b]}),b)},
eo:function(a,b){H.j(a,{func:1,ret:b})
if($.R===C.l)return a.$0()
return P.jE(null,null,this,a,b)},
cK:function(a,b,c,d){H.j(a,{func:1,ret:c,args:[d]})
H.A(b,d)
if($.R===C.l)return a.$1(b)
return P.jF(null,null,this,a,b,c,d)},
jT:function(a,b,c,d,e,f){H.j(a,{func:1,ret:d,args:[e,f]})
H.A(b,e)
H.A(c,f)
if($.R===C.l)return a.$2(b,c)
return P.lb(null,null,this,a,b,c,d,e,f)}}
P.hF.prototype={
$0:function(){return this.a.eo(this.b,this.c)},
$S:function(){return{func:1,ret:this.c}}}
P.hE.prototype={
$0:function(){return this.a.jU(this.b)},
$S:3}
P.hG.prototype={
$1:function(a){var u=this.c
return this.a.jV(this.b,H.A(a,u),u)},
$S:function(){return{func:1,ret:-1,args:[this.c]}}}
P.hB.prototype={
gO:function(a){var u=new P.e1(this,this.r,this.$ti)
u.c=this.e
return u},
gp:function(a){return this.a},
T:function(a,b){var u,t
if(typeof b==="string"&&b!=="__proto__"){u=this.b
if(u==null)return!1
return H.d(u[b],"$ibH")!=null}else{t=this.fq(b)
return t}},
fq:function(a){var u=this.d
if(u==null)return!1
return this.bV(this.de(u,a),a)>=0},
h:function(a,b){var u,t
H.A(b,H.v(this,0))
if(typeof b==="string"&&b!=="__proto__"){u=this.b
if(u==null){u=P.iy()
this.b=u}return this.d2(u,b)}else if(typeof b==="number"&&(b&1073741823)===b){t=this.c
if(t==null){t=P.iy()
this.c=t}return this.d2(t,b)}else return this.fh(b)},
fh:function(a){var u,t,s
H.A(a,H.v(this,0))
u=this.d
if(u==null){u=P.iy()
this.d=u}t=this.d7(a)
s=u[t]
if(s==null)u[t]=[this.c8(a)]
else{if(this.bV(s,a)>=0)return!1
s.push(this.c8(a))}return!0},
U:function(a,b){if(typeof b==="number"&&(b&1073741823)===b)return this.hS(this.c,b)
else return this.hP(b)},
hP:function(a){var u,t,s
u=this.d
if(u==null)return!1
t=this.de(u,a)
s=this.bV(t,a)
if(s<0)return!1
this.dv(t.splice(s,1)[0])
return!0},
d2:function(a,b){H.A(b,H.v(this,0))
if(H.d(a[b],"$ibH")!=null)return!1
a[b]=this.c8(b)
return!0},
hS:function(a,b){var u
if(a==null)return!1
u=H.d(a[b],"$ibH")
if(u==null)return!1
this.dv(u)
delete a[b]
return!0},
dg:function(){this.r=1073741823&this.r+1},
c8:function(a){var u,t
u=new P.bH(H.A(a,H.v(this,0)))
if(this.e==null){this.f=u
this.e=u}else{t=this.f
u.c=t
t.b=u
this.f=u}++this.a
this.dg()
return u},
dv:function(a){var u,t
u=a.c
t=a.b
if(u==null)this.e=t
else u.b=t
if(t==null)this.f=u
else t.c=u;--this.a
this.dg()},
d7:function(a){return J.bn(a)&1073741823},
de:function(a,b){return a[this.d7(b)]},
bV:function(a,b){var u,t
if(a==null)return-1
u=a.length
for(t=0;t<u;++t)if(J.a_(a[t].a,b))return t
return-1}}
P.bH.prototype={}
P.e1.prototype={
gE:function(){return this.d},
u:function(){var u=this.a
if(this.b!==u.r)throw H.h(P.b7(u))
else{u=this.c
if(u==null){this.sd4(null)
return!1}else{this.sd4(H.A(u.a,H.v(this,0)))
this.c=this.c.b
return!0}}},
sd4:function(a){this.d=H.A(a,H.v(this,0))},
$iaG:1}
P.eV.prototype={$ii:1,$ia:1}
P.T.prototype={
gO:function(a){return new H.c5(a,this.gp(a),0,[H.i0(this,a,"T",0)])},
a8:function(a,b){return this.l(a,b)},
k5:function(a,b){var u,t
u=H.b([],[H.i0(this,a,"T",0)])
C.a.sp(u,this.gp(a))
for(t=0;t<this.gp(a);++t)C.a.Y(u,t,this.l(a,t))
return u},
k0:function(a){return this.k5(a,!0)},
i:function(a){return P.il(a,"[","]")}}
P.eX.prototype={}
P.eY.prototype={
$2:function(a,b){var u,t
u=this.a
if(!u.a)this.b.a+=", "
u.a=!1
u=this.b
t=u.a+=H.e(a)
u.a=t+": "
u.a+=H.e(b)},
$S:12}
P.bA.prototype={
a2:function(a,b){var u,t
H.j(b,{func:1,ret:-1,args:[H.a4(this,"bA",0),H.a4(this,"bA",1)]})
for(u=J.bR(this.gaB());u.u();){t=u.gE()
b.$2(t,this.l(0,t))}},
gp:function(a){return J.bo(this.gaB())},
i:function(a){return P.j7(this)},
$iat:1}
P.hI.prototype={
a6:function(a,b){var u
for(u=J.bR(H.f(b,"$ii",this.$ti,"$ai"));u.u();)this.h(0,u.gE())},
i:function(a){return P.il(this,"{","}")},
a8:function(a,b){var u,t,s
if(b<0)H.q(P.au(b,0,null,"index",null))
for(u=P.l3(this,this.r,H.v(this,0)),t=0;u.u();){s=u.d
if(b===t)return s;++t}throw H.h(P.bx(b,this,"index",null,t))},
$ii:1,
$ijl:1}
P.e2.prototype={}
P.bX.prototype={}
P.bY.prototype={}
P.ex.prototype={
$abX:function(){return[P.m,[P.a,P.y]]}}
P.eL.prototype={
i:function(a){return this.a}}
P.eK.prototype={
fs:function(a,b,c){var u,t,s,r,q,p
for(u=this.a,t=u.e,s=u.d,u=u.c,r=b,q=null;r<c;++r){if(r>=a.length)return H.l(a,r)
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
default:p=null}if(p!=null){if(q==null)q=new P.aZ("")
if(r>b)q.a+=C.i.bd(a,b,r)
q.a+=p
b=r+1}}if(q==null)return
if(c>b)q.a+=J.kf(a,b,c)
u=q.a
return u.charCodeAt(0)==0?u:u},
$abY:function(){return[P.m,P.m]}}
P.h2.prototype={}
P.h3.prototype={
j5:function(a,b,c){var u,t,s
c=P.ji(b,c,a.length,null,null,null)
u=c-b
if(u===0)return new Uint8Array(0)
t=new Uint8Array(u*3)
s=new P.hQ(t)
if(s.fF(a,b,c)!==c)s.dw(C.i.cm(a,c-1),0)
return new Uint8Array(t.subarray(0,H.l6(0,s.b,t.length)))},
j4:function(a){return this.j5(a,0,null)},
$abY:function(){return[P.m,[P.a,P.y]]}}
P.hQ.prototype={
dw:function(a,b){var u,t,s,r,q
u=this.c
t=this.b
s=t+1
r=u.length
if((b&64512)===56320){q=65536+((a&1023)<<10)|b&1023
this.b=s
if(t>=r)return H.l(u,t)
u[t]=240|q>>>18
t=s+1
this.b=t
if(s>=r)return H.l(u,s)
u[s]=128|q>>>12&63
s=t+1
this.b=s
if(t>=r)return H.l(u,t)
u[t]=128|q>>>6&63
this.b=s+1
if(s>=r)return H.l(u,s)
u[s]=128|q&63
return!0}else{this.b=s
if(t>=r)return H.l(u,t)
u[t]=224|a>>>12
t=s+1
this.b=t
if(s>=r)return H.l(u,s)
u[s]=128|a>>>6&63
this.b=t+1
if(t>=r)return H.l(u,t)
u[t]=128|a&63
return!1}},
fF:function(a,b,c){var u,t,s,r,q,p,o
if(b!==c&&(C.i.cm(a,c-1)&64512)===55296)--c
for(u=this.c,t=u.length,s=b;s<c;++s){r=C.i.aK(a,s)
if(r<=127){q=this.b
if(q>=t)break
this.b=q+1
u[q]=r}else if((r&64512)===55296){if(this.b+3>=t)break
p=s+1
if(this.dw(r,C.i.aK(a,p)))s=p}else if(r<=2047){q=this.b
o=q+1
if(o>=t)break
this.b=o
if(q>=t)return H.l(u,q)
u[q]=192|r>>>6
this.b=o+1
u[o]=128|r&63}else{q=this.b
if(q+2>=t)break
o=q+1
this.b=o
if(q>=t)return H.l(u,q)
u[q]=224|r>>>12
q=o+1
this.b=q
if(o>=t)return H.l(u,o)
u[o]=128|r>>>6&63
this.b=q+1
if(q>=t)return H.l(u,q)
u[q]=128|r&63}}return s}}
P.H.prototype={}
P.ad.prototype={
t:function(a,b){if(b==null)return!1
return b instanceof P.ad&&this.a===b.a&&!0},
gG:function(a){var u=this.a
return(u^C.h.bi(u,30))&1073741823},
i:function(a){var u,t,s,r,q,p,o,n
u=P.kn(H.kJ(this))
t=P.cV(H.kH(this))
s=P.cV(H.kD(this))
r=P.cV(H.kE(this))
q=P.cV(H.kG(this))
p=P.cV(H.kI(this))
o=P.ko(H.kF(this))
n=u+"-"+t+"-"+s+" "+r+":"+q+":"+p+"."+o
return n}}
P.w.prototype={}
P.b9.prototype={
t:function(a,b){if(b==null)return!1
return b instanceof P.b9&&this.a===b.a},
gG:function(a){return C.h.gG(this.a)},
i:function(a){var u,t,s,r,q
u=new P.eu()
t=this.a
if(t<0)return"-"+new P.b9(0-t).i(0)
s=u.$1(C.h.a1(t,6e7)%60)
r=u.$1(C.h.a1(t,1e6)%60)
q=new P.et().$1(t%1e6)
return""+C.h.a1(t,36e8)+":"+H.e(s)+":"+H.e(r)+"."+H.e(q)}}
P.et.prototype={
$1:function(a){if(a>=1e5)return""+a
if(a>=1e4)return"0"+a
if(a>=1000)return"00"+a
if(a>=100)return"000"+a
if(a>=10)return"0000"+a
return"00000"+a},
$S:13}
P.eu.prototype={
$1:function(a){if(a>=10)return""+a
return"0"+a},
$S:13}
P.ba.prototype={}
P.dn.prototype={
i:function(a){return"Throw of null."}}
P.az.prototype={
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
p=P.ez(this.b)
return r+q+": "+p}}
P.bE.prototype={
gbU:function(){return"RangeError"},
gbT:function(){var u,t,s
u=this.e
if(u==null){u=this.f
t=u!=null?": Not less than or equal to "+H.e(u):""}else{s=this.f
if(s==null)t=": Not greater than or equal to "+H.e(u)
else if(s>u)t=": Not in range "+H.e(u)+".."+H.e(s)+", inclusive"
else t=s<u?": Valid value range is empty":": Only valid value is "+H.e(u)}return t}}
P.eN.prototype={
gbU:function(){return"RangeError"},
gbT:function(){var u,t
u=H.a0(this.b)
if(typeof u!=="number")return u.aT()
if(u<0)return": index must not be negative"
t=this.f
if(t===0)return": no indices are valid"
return": index should be less than "+H.e(t)},
gp:function(a){return this.f}}
P.h1.prototype={
i:function(a){return"Unsupported operation: "+this.a}}
P.h_.prototype={
i:function(a){var u=this.a
return u!=null?"UnimplementedError: "+u:"UnimplementedError"}}
P.cg.prototype={
i:function(a){return"Bad state: "+this.a}}
P.eo.prototype={
i:function(a){var u=this.a
if(u==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+P.ez(u)+"."}}
P.fe.prototype={
i:function(a){return"Out of Memory"},
$iba:1}
P.dz.prototype={
i:function(a){return"Stack Overflow"},
$iba:1}
P.eq.prototype={
i:function(a){var u=this.a
return u==null?"Reading static variable during its initialization":"Reading static variable '"+u+"' during its initialization"}}
P.dZ.prototype={
i:function(a){return"Exception: "+this.a}}
P.eG.prototype={
i:function(a){var u,t,s,r
u=this.a
t=""!==u?"FormatException: "+u:"FormatException"
s=this.b
r=s.length>78?C.i.bd(s,0,75)+"...":s
return t+"\n"+r}}
P.bb.prototype={}
P.y.prototype={}
P.i.prototype={
bK:function(a,b){var u=H.a4(this,"i",0)
return new H.cv(this,H.j(b,{func:1,ret:P.H,args:[u]}),[u])},
gp:function(a){var u,t
u=this.gO(this)
for(t=0;u.u();)++t
return t},
gaG:function(a){var u,t
u=this.gO(this)
if(!u.u())throw H.h(H.im())
t=u.gE()
if(u.u())throw H.h(H.kt())
return t},
a8:function(a,b){var u,t,s
if(b<0)H.q(P.au(b,0,null,"index",null))
for(u=this.gO(this),t=0;u.u();){s=u.gE()
if(b===t)return s;++t}throw H.h(P.bx(b,this,"index",null,t))},
i:function(a){return P.ks(this,"(",")")}}
P.aG.prototype={}
P.a.prototype={$ii:1}
P.F.prototype={
gG:function(a){return P.L.prototype.gG.call(this,this)},
i:function(a){return"null"}}
P.a6.prototype={}
P.L.prototype={constructor:P.L,$iL:1,
t:function(a,b){return this===b},
gG:function(a){return H.cc(this)},
i:function(a){return"Instance of '"+H.bD(this)+"'"},
toString:function(){return this.i(this)}}
P.ag.prototype={}
P.m.prototype={$ijb:1}
P.aZ.prototype={
gp:function(a){return this.a.length},
i:function(a){var u=this.a
return u.charCodeAt(0)==0?u:u}}
W.t.prototype={}
W.cN.prototype={
i:function(a){return String(a)},
$icN:1}
W.eh.prototype={
i:function(a){return String(a)}}
W.bS.prototype={$ibS:1}
W.b4.prototype={$ib4:1}
W.bq.prototype={
bM:function(a,b,c){if(c!=null)return this.fG(a,b,P.li(c,null))
return this.fH(a,b)},
eC:function(a,b){return this.bM(a,b,null)},
fG:function(a,b,c){return a.getContext(b,c)},
fH:function(a,b){return a.getContext(b)},
$ibq:1,
$iiX:1}
W.br.prototype={
fI:function(a,b,c,d,e){return a.getImageData(b,c,d,e)},
jj:function(a,b,c,d,e,f){return a.drawImage(b,c,d,e,f)},
$ibr:1}
W.b5.prototype={
gp:function(a){return a.length}}
W.bZ.prototype={
gp:function(a){return a.length}}
W.ep.prototype={}
W.as.prototype={$ias:1}
W.c_.prototype={
iT:function(a,b){return a.adoptNode(b)},
eD:function(a,b){return a.getElementById(b)}}
W.es.prototype={
i:function(a){return String(a)}}
W.cW.prototype={
j9:function(a,b){return a.createHTMLDocument(b)}}
W.cX.prototype={
i:function(a){return"Rectangle ("+H.e(a.left)+", "+H.e(a.top)+") "+H.e(a.width)+" x "+H.e(a.height)},
t:function(a,b){var u
if(b==null)return!1
if(!H.cI(b,"$iav",[P.a6],"$aav"))return!1
u=J.ai(b)
return a.left===u.gbE(b)&&a.top===u.gbI(b)&&a.width===u.gbL(b)&&a.height===u.gbC(b)},
gG:function(a){return W.jA(C.j.gG(a.left),C.j.gG(a.top),C.j.gG(a.width),C.j.gG(a.height))},
gdF:function(a){return a.bottom},
gbC:function(a){return a.height},
gbE:function(a){return a.left},
gbH:function(a){return a.right},
gbI:function(a){return a.top},
gbL:function(a){return a.width},
$iav:1,
$aav:function(){return[P.a6]}}
W.hl.prototype={
gp:function(a){return this.b.length},
l:function(a,b){var u=this.b
if(b<0||b>=u.length)return H.l(u,b)
return H.d(u[b],"$iM")},
h:function(a,b){J.iS(this.a,b)
return b},
gO:function(a){var u=this.k0(this)
return new J.ac(u,u.length,0,[H.v(u,0)])},
$aT:function(){return[W.M]},
$ai:function(){return[W.M]},
$aa:function(){return[W.M]}}
W.M.prototype={
giW:function(a){return new W.hm(a)},
gdI:function(a){return new W.hl(a,a.children)},
gdJ:function(a){var u,t,s,r
u=a.clientLeft
t=a.clientTop
s=a.clientWidth
r=a.clientHeight
if(typeof s!=="number")return s.aT()
if(s<0)s=-s*0
if(typeof r!=="number")return r.aT()
if(r<0)r=-r*0
return new P.av(u,t,s,r,[P.a6])},
i:function(a){return a.localName},
af:function(a,b,c,d){var u,t,s,r
if(c==null){u=$.j1
if(u==null){u=H.b([],[W.an])
t=new W.dm(u)
C.a.h(u,W.jz(null))
C.a.h(u,W.jB())
$.j1=t
d=t}else d=u
u=$.j0
if(u==null){u=new W.ec(d)
$.j0=u
c=u}else{u.a=d
c=u}}if($.aU==null){u=document
t=u.implementation
t=(t&&C.J).j9(t,"")
$.aU=t
$.ij=t.createRange()
t=$.aU
t.toString
t=t.createElement("base")
H.d(t,"$ibS")
t.href=u.baseURI
u=$.aU.head;(u&&C.L).B(u,t)}u=$.aU
if(u.body==null){u.toString
t=u.createElement("body")
u.body=H.d(t,"$ib4")}u=$.aU
if(!!this.$ib4)s=u.body
else{t=a.tagName
u.toString
s=u.createElement(t)
u=$.aU.body;(u&&C.n).B(u,s)}if("createContextualFragment" in window.Range.prototype&&!C.a.T(C.X,a.tagName)){u=$.ij;(u&&C.E).eK(u,s)
u=$.ij
r=(u&&C.E).j7(u,b)}else{s.innerHTML=b
r=$.aU.createDocumentFragment()
for(u=J.ai(r);t=s.firstChild,t!=null;)u.B(r,t)}u=$.aU.body
if(s==null?u!=null:s!==u)J.iT(s)
c.cQ(r)
C.z.iT(document,r)
return r},
j8:function(a,b,c){return this.af(a,b,c,null)},
eM:function(a,b,c,d){a.textContent=null
this.B(a,this.af(a,b,c,d))},
eL:function(a,b){return this.eM(a,b,null,null)},
aS:function(a,b){return a.getAttribute(b)},
hQ:function(a,b){return a.removeAttribute(b)},
$iM:1,
gjW:function(a){return a.tagName}}
W.ew.prototype={
$1:function(a){return!!J.S(H.d(a,"$iz")).$iM},
$S:14}
W.k.prototype={$ik:1}
W.bu.prototype={
fi:function(a,b,c,d){return a.addEventListener(b,H.bL(H.j(c,{func:1,args:[W.k]}),1),!1)},
$ibu:1}
W.eF.prototype={
gp:function(a){return a.length}}
W.d0.prototype={}
W.bw.prototype={
gp:function(a){return a.length},
l:function(a,b){if(b>>>0!==b||b>=a.length)throw H.h(P.bx(b,a,null,null,null))
return a[b]},
a8:function(a,b){if(b<0||b>=a.length)return H.l(a,b)
return a[b]},
$iaB:1,
$aaB:function(){return[W.z]},
$aT:function(){return[W.z]},
$ii:1,
$ai:function(){return[W.z]},
$ia:1,
$aa:function(){return[W.z]},
$ibw:1,
$aak:function(){return[W.z]}}
W.d1.prototype={}
W.bc.prototype={$ibc:1,
gdL:function(a){return a.data}}
W.c4.prototype={$ic4:1,$iiX:1}
W.aJ.prototype={$iaJ:1}
W.db.prototype={
i:function(a){return String(a)},
$idb:1}
W.c8.prototype={}
W.a2.prototype={$ia2:1}
W.ab.prototype={
gaG:function(a){var u,t
u=this.a
t=u.childNodes.length
if(t===0)throw H.h(P.jm("No elements"))
if(t>1)throw H.h(P.jm("More than one element"))
return u.firstChild},
a6:function(a,b){var u,t,s,r,q
H.f(b,"$ii",[W.z],"$ai")
u=b.a
t=this.a
if(u!==t)for(s=u.childNodes.length,r=J.ai(t),q=0;q<s;++q)r.B(t,u.firstChild)
return},
gO:function(a){var u=this.a.childNodes
return new W.cZ(u,u.length,-1,[H.i0(C.Z,u,"ak",0)])},
gp:function(a){return this.a.childNodes.length},
l:function(a,b){var u=this.a.childNodes
if(b<0||b>=u.length)return H.l(u,b)
return u[b]},
$aT:function(){return[W.z]},
$ai:function(){return[W.z]},
$aa:function(){return[W.z]}}
W.z.prototype={
jP:function(a){var u=a.parentNode
if(u!=null)J.eg(u,a)},
i:function(a){var u=a.nodeValue
return u==null?this.eS(a):u},
B:function(a,b){return a.appendChild(b)},
hR:function(a,b){return a.removeChild(b)},
$iz:1}
W.ca.prototype={
gp:function(a){return a.length},
l:function(a,b){if(b>>>0!==b||b>=a.length)throw H.h(P.bx(b,a,null,null,null))
return a[b]},
a8:function(a,b){if(b<0||b>=a.length)return H.l(a,b)
return a[b]},
$iaB:1,
$aaB:function(){return[W.z]},
$aT:function(){return[W.z]},
$ii:1,
$ai:function(){return[W.z]},
$ia:1,
$aa:function(){return[W.z]},
$aak:function(){return[W.z]}}
W.ds.prototype={
j7:function(a,b){return a.createContextualFragment(b)},
eK:function(a,b){return a.selectNodeContents(b)}}
W.fq.prototype={
gp:function(a){return a.length}}
W.bG.prototype={}
W.dA.prototype={
af:function(a,b,c,d){var u,t
if("createContextualFragment" in window.Range.prototype)return this.bQ(a,b,c,d)
u=W.kp("<table>"+b+"</table>",c,d)
t=document.createDocumentFragment()
t.toString
u.toString
new W.ab(t).a6(0,new W.ab(u))
return t}}
W.dB.prototype={
af:function(a,b,c,d){var u,t,s,r
if("createContextualFragment" in window.Range.prototype)return this.bQ(a,b,c,d)
u=document
t=u.createDocumentFragment()
u=C.p.af(u.createElement("table"),b,c,d)
u.toString
u=new W.ab(u)
s=u.gaG(u)
s.toString
u=new W.ab(s)
r=u.gaG(u)
t.toString
r.toString
new W.ab(t).a6(0,new W.ab(r))
return t}}
W.fE.prototype={
af:function(a,b,c,d){var u,t,s
if("createContextualFragment" in window.Range.prototype)return this.bQ(a,b,c,d)
u=document
t=u.createDocumentFragment()
u=C.p.af(u.createElement("table"),b,c,d)
u.toString
u=new W.ab(u)
s=u.gaG(u)
t.toString
s.toString
new W.ab(t).a6(0,new W.ab(s))
return t}}
W.cj.prototype={$icj:1}
W.aO.prototype={$iaO:1}
W.aC.prototype={$iaC:1}
W.fO.prototype={
gp:function(a){return a.length},
l:function(a,b){if(b>>>0!==b||b>=a.length)throw H.h(P.bx(b,a,null,null,null))
return a[b]},
a8:function(a,b){if(b<0||b>=a.length)return H.l(a,b)
return a[b]},
$iaB:1,
$aaB:function(){return[W.aO]},
$aT:function(){return[W.aO]},
$ii:1,
$ai:function(){return[W.aO]},
$ia:1,
$aa:function(){return[W.aO]},
$aak:function(){return[W.aO]}}
W.bj.prototype={}
W.he.prototype={$iiX:1}
W.aR.prototype={
gjf:function(a){if(a.deltaY!==undefined)return a.deltaY
throw H.h(P.ap("deltaY is not supported"))},
gje:function(a){if(a.deltaX!==undefined)return a.deltaX
throw H.h(P.ap("deltaX is not supported"))},
$iaR:1}
W.cw.prototype={
hU:function(a,b){return a.requestAnimationFrame(H.bL(H.j(b,{func:1,ret:-1,args:[P.a6]}),1))},
fz:function(a){if(!!(a.requestAnimationFrame&&a.cancelAnimationFrame))return;(function(b){var u=['ms','moz','webkit','o']
for(var t=0;t<u.length&&!b.requestAnimationFrame;++t){b.requestAnimationFrame=b[u[t]+'RequestAnimationFrame']
b.cancelAnimationFrame=b[u[t]+'CancelAnimationFrame']||b[u[t]+'CancelRequestAnimationFrame']}if(b.requestAnimationFrame&&b.cancelAnimationFrame)return
b.requestAnimationFrame=function(c){return window.setTimeout(function(){c(Date.now())},16)}
b.cancelAnimationFrame=function(c){clearTimeout(c)}})(a)}}
W.cx.prototype={$icx:1}
W.dY.prototype={
i:function(a){return"Rectangle ("+H.e(a.left)+", "+H.e(a.top)+") "+H.e(a.width)+" x "+H.e(a.height)},
t:function(a,b){var u
if(b==null)return!1
if(!H.cI(b,"$iav",[P.a6],"$aav"))return!1
u=J.ai(b)
return a.left===u.gbE(b)&&a.top===u.gbI(b)&&a.width===u.gbL(b)&&a.height===u.gbC(b)},
gG:function(a){return W.jA(C.j.gG(a.left),C.j.gG(a.top),C.j.gG(a.width),C.j.gG(a.height))},
gbC:function(a){return a.height},
gbL:function(a){return a.width}}
W.e3.prototype={
gp:function(a){return a.length},
l:function(a,b){if(b>>>0!==b||b>=a.length)throw H.h(P.bx(b,a,null,null,null))
return a[b]},
a8:function(a,b){if(b<0||b>=a.length)return H.l(a,b)
return a[b]},
$iaB:1,
$aaB:function(){return[W.z]},
$aT:function(){return[W.z]},
$ii:1,
$ai:function(){return[W.z]},
$ia:1,
$aa:function(){return[W.z]},
$aak:function(){return[W.z]}}
W.hk.prototype={
a2:function(a,b){var u,t,s,r,q,p
H.j(b,{func:1,ret:-1,args:[P.m,P.m]})
for(u=this.gaB(),t=u.length,s=this.a,r=J.ai(s),q=0;q<u.length;u.length===t||(0,H.x)(u),++q){p=u[q]
b.$2(p,r.aS(s,p))}},
gaB:function(){var u,t,s,r,q
u=this.a.attributes
t=H.b([],[P.m])
for(s=u.length,r=0;r<s;++r){if(r>=u.length)return H.l(u,r)
q=H.d(u[r],"$icx")
if(q.namespaceURI==null)C.a.h(t,q.name)}return t},
$abA:function(){return[P.m,P.m]},
$aat:function(){return[P.m,P.m]}}
W.hm.prototype={
l:function(a,b){return J.ic(this.a,H.I(b))},
gp:function(a){return this.gaB().length}}
W.hn.prototype={}
W.ix.prototype={}
W.ho.prototype={}
W.hp.prototype={
$1:function(a){return this.a.$1(H.d(a,"$ik"))},
$S:27}
W.bk.prototype={
f3:function(a){var u,t
u=$.iR()
if(u.a===0){for(t=0;t<262;++t)u.Y(0,C.W[t],W.lp())
for(t=0;t<12;++t)u.Y(0,C.u[t],W.lq())}},
aO:function(a){return $.k9().T(0,W.c0(a))},
aq:function(a,b,c){var u,t,s
u=W.c0(a)
t=$.iR()
s=t.l(0,H.e(u)+"::"+b)
if(s==null)s=t.l(0,"*::"+b)
if(s==null)return!1
return H.iD(s.$4(a,b,c,this))},
$ian:1}
W.ak.prototype={
gO:function(a){return new W.cZ(a,this.gp(a),-1,[H.i0(this,a,"ak",0)])}}
W.dm.prototype={
aO:function(a){return C.a.dC(this.a,new W.fc(a))},
aq:function(a,b,c){return C.a.dC(this.a,new W.fb(a,b,c))},
$ian:1}
W.fc.prototype={
$1:function(a){return H.d(a,"$ian").aO(this.a)},
$S:17}
W.fb.prototype={
$1:function(a){return H.d(a,"$ian").aq(this.a,this.b,this.c)},
$S:17}
W.e6.prototype={
fd:function(a,b,c,d){var u,t,s
this.a.a6(0,c)
u=b.bK(0,new W.hJ())
t=b.bK(0,new W.hK())
this.b.a6(0,u)
s=this.c
s.a6(0,C.Y)
s.a6(0,t)},
aO:function(a){return this.a.T(0,W.c0(a))},
aq:function(a,b,c){var u,t
u=W.c0(a)
t=this.c
if(t.T(0,H.e(u)+"::"+b))return this.d.iU(c)
else if(t.T(0,"*::"+b))return this.d.iU(c)
else{t=this.b
if(t.T(0,H.e(u)+"::"+b))return!0
else if(t.T(0,"*::"+b))return!0
else if(t.T(0,H.e(u)+"::*"))return!0
else if(t.T(0,"*::*"))return!0}return!1},
$ian:1}
W.hJ.prototype={
$1:function(a){return!C.a.T(C.u,H.I(a))},
$S:16}
W.hK.prototype={
$1:function(a){return C.a.T(C.u,H.I(a))},
$S:16}
W.hM.prototype={
aq:function(a,b,c){if(this.eW(a,b,c))return!0
if(b==="template"&&c==="")return!0
if(J.ic(a,"template")==="")return this.e.T(0,b)
return!1}}
W.hN.prototype={
$1:function(a){return"TEMPLATE::"+H.e(H.I(a))},
$S:28}
W.hL.prototype={
aO:function(a){var u=J.S(a)
if(!!u.$icd)return!1
u=!!u.$in
if(u&&W.c0(a)==="foreignObject")return!1
if(u)return!0
return!1},
aq:function(a,b,c){if(b==="is"||C.i.bP(b,"on"))return!1
return this.aO(a)},
$ian:1}
W.cZ.prototype={
u:function(){var u,t
u=this.c+1
t=this.b
if(u<t){this.sdf(J.kb(this.a,u))
this.c=u
return!0}this.sdf(null)
this.c=t
return!1},
gE:function(){return this.d},
sdf:function(a){this.d=H.A(a,H.v(this,0))},
$iaG:1}
W.an.prototype={}
W.hH.prototype={$im3:1}
W.ec.prototype={
cQ:function(a){new W.hR(this).$2(a,null)},
b0:function(a,b){if(b==null)J.iT(a)
else J.eg(b,a)},
hY:function(a,b){var u,t,s,r,q,p,o,n
u=!0
t=null
s=null
try{t=J.kd(a)
s=J.ic(t.a,"is")
r=function(c){if(!(c.attributes instanceof NamedNodeMap))return true
var m=c.childNodes
if(c.lastChild&&c.lastChild!==m[m.length-1])return true
if(c.children)if(!(c.children instanceof HTMLCollection||c.children instanceof NodeList))return true
var l=0
if(c.children)l=c.children.length
for(var k=0;k<l;k++){var j=c.children[k]
if(j.id=='attributes'||j.name=='attributes'||j.id=='lastChild'||j.name=='lastChild'||j.id=='children'||j.name=='children')return true}return false}(a)
u=r?!0:!(a.attributes instanceof NamedNodeMap)}catch(o){H.ar(o)}q="element unprintable"
try{q=J.aj(a)}catch(o){H.ar(o)}try{p=W.c0(a)
this.hX(H.d(a,"$iM"),b,u,q,p,H.d(t,"$iat"),H.I(s))}catch(o){if(H.ar(o) instanceof P.az)throw o
else{this.b0(a,b)
window
n="Removing corrupted element "+H.e(q)
if(typeof console!="undefined")window.console.warn(n)}}},
hX:function(a,b,c,d,e,f,g){var u,t,s,r,q,p
if(c){this.b0(a,b)
window
u="Removing element due to corrupted attributes on <"+d+">"
if(typeof console!="undefined")window.console.warn(u)
return}if(!this.a.aO(a)){this.b0(a,b)
window
u="Removing disallowed element <"+H.e(e)+"> from "+H.e(b)
if(typeof console!="undefined")window.console.warn(u)
return}if(g!=null)if(!this.a.aq(a,"is",g)){this.b0(a,b)
window
u="Removing disallowed type extension <"+H.e(e)+' is="'+g+'">'
if(typeof console!="undefined")window.console.warn(u)
return}u=f.gaB()
t=H.b(u.slice(0),[H.v(u,0)])
for(s=f.gaB().length-1,u=f.a,r=J.ai(u);s>=0;--s){if(s>=t.length)return H.l(t,s)
q=t[s]
if(!this.a.aq(a,J.kg(q),r.aS(u,q))){window
p="Removing disallowed attribute <"+H.e(e)+" "+q+'="'+H.e(r.aS(u,q))+'">'
if(typeof console!="undefined")window.console.warn(p)
r.aS(u,q)
r.hQ(u,q)}}if(!!J.S(a).$icj)this.cQ(a.content)},
$ilP:1}
W.hR.prototype={
$2:function(a,b){var u,t,s,r,q,p
s=this.a
switch(a.nodeType){case 1:s.hY(a,b)
break
case 8:case 11:case 3:case 4:break
default:s.b0(a,b)}u=a.lastChild
for(s=a==null;null!=u;){t=null
try{t=u.previousSibling}catch(r){H.ar(r)
q=H.d(u,"$iz")
if(s){p=q.parentNode
if(p!=null)J.eg(p,q)}else J.eg(a,q)
u=null
t=a.lastChild}if(u!=null)this.$2(u,a)
u=H.d(t,"$iz")}},
$S:29}
W.dX.prototype={}
W.e_.prototype={}
W.e0.prototype={}
W.e4.prototype={}
W.e5.prototype={}
W.e9.prototype={}
W.ea.prototype={}
W.ed.prototype={}
W.ee.prototype={}
P.eb.prototype={$ibc:1,
gdL:function(a){return this.a}}
P.hY.prototype={
$2:function(a,b){this.a[a]=b},
$S:12}
P.eC.prototype={
gbY:function(){var u,t,s
u=this.b
t=H.a4(u,"T",0)
s=W.M
return new H.eZ(new H.cv(u,H.j(new P.eD(),{func:1,ret:P.H,args:[t]}),[t]),H.j(new P.eE(),{func:1,ret:s,args:[t]}),[t,s])},
h:function(a,b){J.iS(this.b.a,b)},
gp:function(a){return J.bo(this.gbY().a)},
l:function(a,b){var u=this.gbY()
return u.b.$1(J.ib(u.a,b))},
gO:function(a){var u=P.kA(this.gbY(),!1,W.M)
return new J.ac(u,u.length,0,[H.v(u,0)])},
$aT:function(){return[W.M]},
$ai:function(){return[W.M]},
$aa:function(){return[W.M]}}
P.eD.prototype={
$1:function(a){return!!J.S(H.d(a,"$iz")).$iM},
$S:14}
P.eE.prototype={
$1:function(a){return H.c(H.d(a,"$iz"),"$iM")},
$S:30}
P.hC.prototype={
gbH:function(a){var u=this.a
if(typeof u!=="number")return u.F()
return H.A(u+this.c,H.v(this,0))},
gdF:function(a){var u=this.b
if(typeof u!=="number")return u.F()
return H.A(u+this.d,H.v(this,0))},
i:function(a){return"Rectangle ("+H.e(this.a)+", "+H.e(this.b)+") "+this.c+" x "+this.d},
t:function(a,b){var u,t,s,r
if(b==null)return!1
if(H.cI(b,"$iav",[P.a6],"$aav")){u=this.a
t=J.ai(b)
if(u==t.gbE(b)){s=this.b
if(s==t.gbI(b)){if(typeof u!=="number")return u.F()
r=H.v(this,0)
if(H.A(u+this.c,r)===t.gbH(b)){if(typeof s!=="number")return s.F()
u=H.A(s+this.d,r)===t.gdF(b)}else u=!1}else u=!1}else u=!1}else u=!1
return u},
gG:function(a){var u,t,s,r,q
u=this.a
t=J.bn(u)
s=this.b
r=J.bn(s)
if(typeof u!=="number")return u.F()
q=H.v(this,0)
u=C.h.gG(H.A(u+this.c,q))
if(typeof s!=="number")return s.F()
q=C.h.gG(H.A(s+this.d,q))
return P.l2(P.hA(P.hA(P.hA(P.hA(0,t),r),u),q))}}
P.av.prototype={
gbE:function(a){return this.a},
gbI:function(a){return this.b},
gbL:function(a){return this.c},
gbC:function(a){return this.d}}
P.cd.prototype={$icd:1}
P.n.prototype={
gdI:function(a){return new P.eC(a,new W.ab(a))},
af:function(a,b,c,d){var u,t,s,r,q,p
u=H.b([],[W.an])
C.a.h(u,W.jz(null))
C.a.h(u,W.jB())
C.a.h(u,new W.hL())
c=new W.ec(new W.dm(u))
t='<svg version="1.1">'+b+"</svg>"
u=document
s=u.body
r=(s&&C.n).j8(s,t,c)
q=u.createDocumentFragment()
r.toString
u=new W.ab(r)
p=u.gaG(u)
for(u=J.ai(q);s=p.firstChild,s!=null;)u.B(q,s)
return q},
$in:1}
P.cP.prototype={$icP:1}
P.d_.prototype={$id_:1}
P.dr.prototype={$idr:1}
P.bF.prototype={
bk:function(a,b){return a.activeTexture(b)},
dD:function(a,b,c){return a.attachShader(b,c)},
ar:function(a,b,c){return a.bindBuffer(b,c)},
iY:function(a,b,c){return a.bindFramebuffer(b,c)},
a7:function(a,b,c){return a.bindTexture(b,c)},
iZ:function(a,b,c){return a.blendFunc(b,c)},
dG:function(a,b,c,d){return a.bufferData(b,c,d)},
j0:function(a,b){return a.clear(b)},
j1:function(a,b,c,d,e){return a.clearColor(b,c,d,e)},
j2:function(a,b){return a.clearDepth(b)},
j3:function(a,b){return a.compileShader(b)},
ja:function(a,b){return a.createShader(b)},
jc:function(a,b){return a.deleteProgram(b)},
jd:function(a,b){return a.deleteShader(b)},
jg:function(a,b){return a.depthFunc(b)},
jh:function(a,b){return a.disable(b)},
dN:function(a,b){return a.disableVertexAttribArray(b)},
ji:function(a,b,c,d,e){return a.drawElements(b,c,H.a0(d),H.a0(e))},
cq:function(a,b){return a.enable(b)},
dQ:function(a,b){return a.enableVertexAttribArray(b)},
ex:function(a,b){return a.generateMipmap(b)},
ey:function(a,b,c){return a.getActiveAttrib(b,c)},
ez:function(a,b,c){return a.getActiveUniform(b,c)},
eA:function(a,b,c){return a.getAttribLocation(b,c)},
cP:function(a,b){return a.getParameter(b)},
eE:function(a,b){return a.getProgramInfoLog(b)},
bN:function(a,b,c){return a.getProgramParameter(b,c)},
eF:function(a,b){return a.getShaderInfoLog(b)},
eG:function(a,b,c){return a.getShaderParameter(b,c)},
eH:function(a,b,c){return a.getUniformLocation(b,c)},
ju:function(a,b){return a.linkProgram(b)},
el:function(a,b,c){return a.pixelStorei(b,c)},
eP:function(a,b,c){return a.shaderSource(b,c)},
jX:function(a,b,c,d,e,f,g,h,i,j){var u,t
u=J.S(g)
if(!!u.$ibc)t=!0
else t=!1
if(t){this.ic(a,b,c,d,e,f,P.lj(g))
return}if(!!u.$ic4)u=!0
else u=!1
if(u){this.ie(a,b,c,d,e,f,g)
return}throw H.h(P.kh("Incorrect number or type of arguments"))},
ep:function(a,b,c,d,e,f,g){return this.jX(a,b,c,d,e,f,g,null,null,null)},
ic:function(a,b,c,d,e,f,g){return a.texImage2D(b,c,d,e,f,g)},
ie:function(a,b,c,d,e,f,g){return a.texImage2D(b,c,d,e,f,g)},
at:function(a,b,c,d){return a.texParameteri(b,c,d)},
H:function(a,b,c){return a.uniform1f(b,c)},
K:function(a,b,c){return a.uniform1i(b,c)},
q:function(a,b,c,d,e){return a.uniform3f(b,c,d,e)},
eu:function(a,b,c,d){return a.uniformMatrix3fv(b,!1,d)},
ev:function(a,b,c,d){return a.uniformMatrix4fv(b,!1,d)},
cN:function(a,b){return a.useProgram(b)},
k7:function(a,b,c,d,e,f,g){return a.vertexAttribPointer(b,c,d,!1,f,g)},
k8:function(a,b,c,d,e){return a.viewport(b,c,d,e)},
$ibF:1}
P.du.prototype={$idu:1}
P.dC.prototype={$idC:1}
P.dM.prototype={$idM:1}
O.U.prototype={
bf:function(a){this.sfN(H.b([],[a]))
this.sdl(null)
this.sdh(null)
this.sdm(null)},
cR:function(a,b,c){var u=H.a4(this,"U",0)
H.j(b,{func:1,ret:P.H,args:[[P.i,u]]})
u={func:1,ret:-1,args:[P.y,[P.i,u]]}
H.j(a,u)
H.j(c,u)
this.sdl(b)
this.sdh(a)
this.sdm(c)},
aU:function(a,b){return this.cR(a,null,b)},
dk:function(a){var u
H.f(a,"$ii",[H.a4(this,"U",0)],"$ai")
u=this.b
if(u!=null)return u.$1(a)
return!0},
cX:function(a,b){var u
H.f(b,"$ii",[H.a4(this,"U",0)],"$ai")
u=this.c
if(u!=null)u.$2(a,b)},
gp:function(a){return this.a.length},
gO:function(a){var u=this.a
return new J.ac(u,u.length,0,[H.v(u,0)])},
a8:function(a,b){var u=this.a
if(b<0||b>=u.length)return H.l(u,b)
return u[b]},
h:function(a,b){var u,t,s
u=H.a4(this,"U",0)
H.A(b,u)
u=[u]
if(this.dk(H.b([b],u))){t=this.a
s=t.length
C.a.h(t,b)
this.cX(s,H.b([b],u))}},
a6:function(a,b){var u,t
H.f(b,"$ii",[H.a4(this,"U",0)],"$ai")
if(this.dk(b)){u=this.a
t=u.length
C.a.a6(u,b)
this.cX(t,b)}},
sfN:function(a){this.a=H.f(a,"$ia",[H.a4(this,"U",0)],"$aa")},
sdl:function(a){this.b=H.j(a,{func:1,ret:P.H,args:[[P.i,H.a4(this,"U",0)]]})},
sdh:function(a){this.c=H.j(a,{func:1,ret:-1,args:[P.y,[P.i,H.a4(this,"U",0)]]})},
sdm:function(a){this.d=H.j(a,{func:1,ret:-1,args:[P.y,[P.i,H.a4(this,"U",0)]]})},
$ii:1}
O.c7.prototype={
gp:function(a){return this.a.length},
gn:function(){var u=this.b
if(u==null){u=D.E()
this.b=u}return u},
f1:function(a){var u=this.b
if(u!=null)u.C(a)},
aH:function(){return this.f1(null)},
gZ:function(){var u=this.a
if(u.length>0)return C.a.gbD(u)
else return V.bB()},
bG:function(a){var u=this.a
if(a==null)C.a.h(u,V.bB())
else C.a.h(u,a)
this.aH()},
aD:function(){var u=this.a
if(u.length>0){u.pop()
this.aH()}},
sc_:function(a){this.a=H.f(a,"$ia",[V.ae],"$aa")}}
E.ej.prototype={}
E.a8.prototype={
sbO:function(a,b){var u,t,s
u=this.c
if(u!=b){this.c=b
this.d=b
this.e=null
if(u!=null)u.gn().U(0,this.gei())
t=this.c
if(t!=null)t.gn().h(0,this.gei())
s=new D.D("shape",u,this.c,this,[F.dv])
s.b=!0
this.aQ(s)}},
am:function(a){var u
for(u=this.y.a,u=new J.ac(u,u.length,0,[H.v(u,0)]);u.u();)u.d.am(a)},
ab:function(a){var u,t
u=a.dx
C.a.h(u.a,u.gZ())
u.aH()
a.cJ(this.f)
u=a.dy
t=(u&&C.a).gbD(u)
if(t!=null&&this.d!=null)t.em(a,this)
for(u=this.y.a,u=new J.ac(u,u.length,0,[H.v(u,0)]);u.u();)u.d.ab(a)
a.cI()
a.dx.aD()},
gn:function(){var u=this.z
if(u==null){u=D.E()
this.z=u}return u},
aQ:function(a){var u=this.z
if(u!=null)u.C(a)},
a3:function(){return this.aQ(null)},
ej:function(a){H.d(a,"$iu")
this.e=null
this.aQ(a)},
jF:function(){return this.ej(null)},
eh:function(a){this.aQ(H.d(a,"$iu"))},
jC:function(){return this.eh(null)},
jB:function(a,b){var u,t,s,r,q,p,o
H.f(b,"$ii",[E.a8],"$ai")
for(u=b.length,t=this.geg(),s={func:1,ret:-1,args:[D.u]},r=[s],q=0;q<b.length;b.length===u||(0,H.x)(b),++q){p=b[q]
if(p!=null){o=p.z
if(o==null){o=new D.bt()
o.sad(null)
o.saZ(null)
o.c=null
o.d=0
p.z=o}H.j(t,s)
if(o.a==null)o.sad(H.b([],r))
o=o.a;(o&&C.a).h(o,t)}}this.a3()},
jE:function(a,b){var u,t
H.f(b,"$ii",[E.a8],"$ai")
for(u=b.gO(b),t=this.geg();u.u();)u.gE().gn().U(0,t)
this.a3()},
i:function(a){var u,t
u=this.a
t=u.length
if(t<=0)return"Unnamed entity"
return u},
sf2:function(a,b){this.y=H.f(b,"$iU",[E.a8],"$aU")},
$iaM:1}
E.fl.prototype={
eZ:function(a,b){var u,t
this.c=512
this.d=512
this.e=0
u=new P.ad(Date.now(),!1)
this.f=u
this.r=u
this.x=u
this.y=0
this.z=null
this.Q=null
this.ch=null
this.cx=null
u=new O.c7()
t=[V.ae]
u.sc_(H.b([],t))
u.b=null
u.gn().h(0,new E.fm(this))
this.cy=u
u=new O.c7()
u.sc_(H.b([],t))
u.b=null
u.gn().h(0,new E.fn(this))
this.db=u
u=new O.c7()
u.sc_(H.b([],t))
u.b=null
u.gn().h(0,new E.fo(this))
this.dx=u
this.sib(H.b([],[O.bi]))
u=this.dy;(u&&C.a).h(u,null)
this.si7(new H.aI([P.m,A.ce]))},
gjO:function(){var u=this.z
if(u==null){u=this.cy.gZ().A(0,this.db.gZ())
this.z=u}return u},
cJ:function(a){var u,t
u=this.dy
t=a==null?(u&&C.a).gbD(u):a;(u&&C.a).h(u,t)},
cI:function(){var u=this.dy
if(u.length>1)u.pop()},
dB:function(a){var u=a.b
if(u.length===0)throw H.h(P.p("May not cache a shader with no name."))
if(this.fr.dK(u))throw H.h(P.p('Shader cache already contains a shader by the name "'+u+'".'))
this.fr.Y(0,u,a)},
sib:function(a){this.dy=H.f(a,"$ia",[O.bi],"$aa")},
si7:function(a){this.fr=H.f(a,"$iat",[P.m,A.ce],"$aat")}}
E.fm.prototype={
$1:function(a){var u
H.d(a,"$iu")
u=this.a
u.z=null
u.ch=null},
$S:6}
E.fn.prototype={
$1:function(a){var u
H.d(a,"$iu")
u=this.a
u.z=null
u.Q=null
u.ch=null
u.cx=null},
$S:6}
E.fo.prototype={
$1:function(a){var u
H.d(a,"$iu")
u=this.a
u.ch=null
u.cx=null},
$S:6}
E.dI.prototype={
d_:function(a){H.d(a,"$iu")
this.en()},
cZ:function(){return this.d_(null)},
gjp:function(){var u,t,s
u=Date.now()
t=C.h.a1(P.j_(0,0,0,u-this.cx.a,0,0).a,1000)/1000
if(t<=0)return 0
s=this.cy
this.cy=0
this.cx=new P.ad(u,!1)
return s/t},
dr:function(){var u,t,s,r
u=window.devicePixelRatio
t=this.b.clientWidth
if(typeof t!=="number")return t.A()
if(typeof u!=="number")return H.B(u)
s=C.j.cz(t*u)
t=this.b.clientHeight
if(typeof t!=="number")return t.A()
r=C.j.cz(t*u)
t=this.b
if(t.width!==s||t.height!==r){t.width=s
t.height=r
P.jp(C.q,this.gjR())}},
en:function(){var u,t
if(!this.ch){this.ch=!0
u=window
t=H.j(new E.fK(this),{func:1,ret:-1,args:[P.a6]})
C.G.fz(u)
C.G.hU(u,W.jI(t,P.a6))}},
jQ:function(){var u,t,s,r,q
try{++this.cy
this.ch=!1
this.dr()
if(this.d!=null){s=this.e;++s.e
s.r=s.x
r=Date.now()
s.x=new P.ad(r,!1)
s.y=P.j_(0,0,0,r-s.r.a,0,0).a*0.000001
r=s.cy
C.a.sp(r.a,0)
r.aH()
r=s.db
C.a.sp(r.a,0)
r.aH()
r=s.dx
C.a.sp(r.a,0)
r.aH()
r=s.dy;(r&&C.a).sp(r,0)
s=s.dy;(s&&C.a).h(s,null)
this.d.ab(this.e)}s=this.z
if(s!=null)s.C(null)}catch(q){u=H.ar(q)
t=H.bN(q)
P.iN("Error: "+H.e(u))
P.iN("Stack: "+H.e(t))
throw H.h(u)}}}
E.fK.prototype={
$1:function(a){var u
H.lA(a)
u=this.a
if(u.ch){u.ch=!1
u.jQ()}},
$S:33}
Z.dU.prototype={$ilJ:1}
Z.cQ.prototype={
a0:function(a){var u,t,s
try{t=a.a
C.b.dQ(t,this.e)
C.b.k7(t,this.e,this.b,5126,!1,this.d,this.c)}catch(s){u=H.ar(s)
t=P.p('Failed to bind buffer attribute "'+this.a.i(0)+'": '+H.e(u))
throw H.h(t)}},
i:function(a){return"["+this.a.i(0)+", Size: "+this.b+", Offset: "+this.c+", Stride: "+this.d+", Attr: "+H.e(this.e)+"]"}}
Z.dV.prototype={$ilK:1}
Z.bV.prototype={
aA:function(a){var u,t,s,r
for(u=this.c,t=u.length,s=0;s<t;++s){r=u[s]
if((r.a.a&a.a)!==0)return r}return},
a0:function(a){var u,t
u=this.a
C.b.ar(a.a,u.a,u.b)
for(u=this.c,t=u.length-1;t>=0;--t)u[t].a0(a)},
bb:function(a){var u,t,s
for(u=this.c,t=u.length-1,s=a.a;t>=0;--t)C.b.dN(s,u[t].e)
C.b.ar(s,this.a.a,null)},
ab:function(a){var u,t,s,r,q,p
u=this.b.length
for(t=a.a,s=0;s<u;++s){r=this.b
if(s>=r.length)return H.l(r,s)
q=r[s]
r=q.c
p=r.a
C.b.ar(t,p,r.b)
C.b.ji(t,q.a,q.b,5123,0)
C.b.ar(t,p,null)}},
i:function(a){var u,t,s,r,q,p
u=[P.m]
t=H.b([],u)
for(s=this.b,r=s.length,q=0;q<s.length;s.length===r||(0,H.x)(s),++q)C.a.h(t,s[q].i(0))
p=H.b([],u)
for(u=this.c,s=u.length,q=0;q<s;++q)C.a.h(p,J.aj(u[q]))
return"Buffer:  ["+this.a.i(0)+"]\nIndices: "+C.a.k(t,", ")+"\nAttrs:   "+C.a.k(p,", ")},
sfJ:function(a){this.b=H.f(a,"$ia",[Z.bd],"$aa")},
$ilR:1}
Z.bd.prototype={
i:function(a){return"Type: "+this.a+", Count: "+this.b+", ["+("Instance of '"+H.bD(this.c)+"'")+"]"}}
Z.aQ.prototype={
gcS:function(a){var u,t
u=this.a
t=(u&$.aE().a)!==0?3:0
if((u&$.b1().a)!==0)t+=3
if((u&$.b0().a)!==0)t+=3
if((u&$.b2().a)!==0)t+=2
if((u&$.b3().a)!==0)t+=3
if((u&$.cK().a)!==0)t+=3
if((u&$.cL().a)!==0)t+=4
if((u&$.bQ().a)!==0)++t
return(u&$.b_().a)!==0?t+4:t},
iV:function(a){var u,t,s
u=$.aE()
t=this.a
if((t&u.a)!==0){if(0===a)return u
s=1}else s=0
u=$.b1()
if((t&u.a)!==0){if(s===a)return u;++s}u=$.b0()
if((t&u.a)!==0){if(s===a)return u;++s}u=$.b2()
if((t&u.a)!==0){if(s===a)return u;++s}u=$.b3()
if((t&u.a)!==0){if(s===a)return u;++s}u=$.cK()
if((t&u.a)!==0){if(s===a)return u;++s}u=$.cL()
if((t&u.a)!==0){if(s===a)return u;++s}u=$.bQ()
if((t&u.a)!==0){if(s===a)return u;++s}u=$.b_()
if((t&u.a)!==0)if(s===a)return u
return $.k8()},
t:function(a,b){if(b==null)return!1
if(!(b instanceof Z.aQ))return!1
return this.a===b.a},
i:function(a){var u,t
u=H.b([],[P.m])
t=this.a
if((t&$.aE().a)!==0)C.a.h(u,"Pos")
if((t&$.b1().a)!==0)C.a.h(u,"Norm")
if((t&$.b0().a)!==0)C.a.h(u,"Binm")
if((t&$.b2().a)!==0)C.a.h(u,"Txt2D")
if((t&$.b3().a)!==0)C.a.h(u,"TxtCube")
if((t&$.cK().a)!==0)C.a.h(u,"Clr3")
if((t&$.cL().a)!==0)C.a.h(u,"Clr4")
if((t&$.bQ().a)!==0)C.a.h(u,"Weight")
if((t&$.b_().a)!==0)C.a.h(u,"Bending")
if(u.length<=0)return"None"
return C.a.k(u,"|")}}
D.em.prototype={}
D.bt.prototype={
h:function(a,b){var u={func:1,ret:-1,args:[D.u]}
H.j(b,u)
if(this.a==null)this.sad(H.b([],[u]))
u=this.a;(u&&C.a).h(u,b)},
U:function(a,b){var u,t
H.j(b,{func:1,ret:-1,args:[D.u]})
u=this.a
u=u==null?null:C.a.T(u,b)
if(u===!0){u=this.a
t=(u&&C.a).U(u,b)||!1}else t=!1
u=this.b
u=u==null?null:C.a.T(u,b)
if(u===!0){u=this.b
t=(u&&C.a).U(u,b)||t}return t},
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
if(a==null){a=new D.u(null)
a.b=!0
u.a=a
r=a}else r=a
if(this.d>0){if(this.c==null)this.c=r
return!0}if(!s)C.a.a2(t,new D.eA(u))
t=this.b
if(t!=null)C.a.a2(t,new D.eB(u))
u=this.b
if(u!=null)C.a.sp(u,0)
return!0},
dP:function(){return this.C(null)},
jS:function(a,b){var u,t
u=this.d
if(u>0){--u
this.d=u
if(u<=0)u=this.c!=null
else u=!1
if(u){t=this.c
this.c=null
this.C(t)}}},
aF:function(){return this.jS(!0,!1)},
sad:function(a){this.a=H.f(a,"$ia",[{func:1,ret:-1,args:[D.u]}],"$aa")},
saZ:function(a){this.b=H.f(a,"$ia",[{func:1,ret:-1,args:[D.u]}],"$aa")}}
D.eA.prototype={
$1:function(a){var u
H.j(a,{func:1,ret:-1,args:[D.u]})
u=this.a.a
u.b
a.$1(u)},
$S:18}
D.eB.prototype={
$1:function(a){var u
H.j(a,{func:1,ret:-1,args:[D.u]})
u=this.a.a
u.b
a.$1(u)},
$S:18}
D.u.prototype={}
D.be.prototype={}
D.bf.prototype={}
D.D.prototype={
i:function(a){return"ValueChanged: "+this.c+", "+H.e(this.d)+" => "+H.e(this.e)}}
X.cR.prototype={
t:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.cR))return!1
if(this.a!=b.a)return!1
if(!this.b.t(0,b.b))return!1
return!0},
i:function(a){return this.b.i(0)+H.e(this.a)}}
X.d7.prototype={
t:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.d7))return!1
if(this.a!=b.a)return!1
if(!this.b.t(0,b.b))return!1
return!0},
i:function(a){return this.b.i(0)+H.e(this.a)}}
X.eS.prototype={
jL:function(a){this.c=a.b
this.d.h(0,a.a)
return!1},
jH:function(a){this.c=a.b
this.d.U(0,a.a)
return!1},
shO:function(a){this.d=H.f(a,"$ijl",[P.y],"$ajl")}}
X.dc.prototype={}
X.eW.prototype={
aY:function(a,b){var u,t,s,r,q,p,o,n
u=new P.ad(Date.now(),!1)
t=this.x
s=b.a
r=this.Q
if(typeof s!=="number")return s.A()
q=b.b
p=this.ch
if(typeof q!=="number")return q.A()
o=new V.Y(t.a+s*r,t.b+q*p)
p=this.a.gaP()
n=new X.aW(a,V.aX(),this.x,this.y,this.z,p,o,u,this)
n.b=!0
this.z=u
this.x=o
return n},
cH:function(a,b){this.r=a.a
return!1},
b5:function(a,b){var u,t
u=this.r
t=a.a
if(typeof t!=="number")return t.eJ()
if(typeof u!=="number")return u.ew()
this.r=(u&~t)>>>0
return!1},
b4:function(a,b){var u=this.d
if(u==null)return!1
u.C(this.aY(a,b))
return!0},
jM:function(a){var u,t,s,r,q,p,o,n
u=this.e
if(u==null)return!1
t=this.a.gaP()
s=this.x
r=Date.now()
q=a.a
p=this.cx
if(typeof q!=="number")return q.A()
o=a.b
n=this.cy
if(typeof o!=="number")return o.A()
r=new X.c9(new V.N(q*p,o*n),t,s,new P.ad(r,!1),this)
r.b=!0
u.C(r)
return!0},
hm:function(a,b,c){var u,t,s
if(this.f==null)return
u=new P.ad(Date.now(),!1)
t=this.f
s=new X.dc(c,a,this.a.gaP(),b,u,this)
s.b=!0
t.C(s)
this.y=u
this.x=V.aX()}}
X.am.prototype={
t:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.am))return!1
if(this.a!==b.a)return!1
if(this.b!=b.b)return!1
if(this.c!=b.c)return!1
return!0},
i:function(a){var u=this.a?"Ctrl+":""
u+=this.b?"Alt+":""
return u+(this.c?"Shift+":"")}}
X.aW.prototype={}
X.f6.prototype={
bW:function(a,b,c){var u,t,s
u=new P.ad(Date.now(),!1)
t=this.a.gaP()
s=new X.aW(a,this.r,this.x,this.y,this.z,t,b,u,this)
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
b5:function(a,b){var u,t
u=this.f
t=a.a
if(typeof t!=="number")return t.eJ()
if(typeof u!=="number")return u.ew()
this.f=(u&~t)>>>0
u=this.c
if(u==null)return!1
u.C(this.bW(a,b,!0))
return!0},
b4:function(a,b){var u=this.d
if(u==null)return!1
u.C(this.bW(a,b,!1))
return!0},
jN:function(a,b){var u,t,s,r,q,p,o
u=this.e
if(u==null)return!1
t=this.a.gaP()
s=Date.now()
r=a.a
q=this.Q
if(typeof r!=="number")return r.A()
p=a.b
o=this.ch
if(typeof p!=="number")return p.A()
s=new X.c9(new V.N(r*q,p*o),t,b,new P.ad(s,!1),this)
s.b=!0
u.C(s)
return!0},
gdO:function(){var u=this.b
if(u==null){u=D.E()
this.b=u}return u},
gbJ:function(){var u=this.c
if(u==null){u=D.E()
this.c=u}return u},
gef:function(){var u=this.d
if(u==null){u=D.E()
this.d=u}return u}}
X.c9.prototype={}
X.fh.prototype={}
X.dK.prototype={}
X.fN.prototype={
aY:function(a,b){var u,t,s,r
H.f(a,"$ia",[V.Y],"$aa")
u=new P.ad(Date.now(),!1)
t=a.length>0?a[0]:V.aX()
s=this.a.gaP()
r=new X.dK(a,this.f,this.r,this.x,this.y,s,t,u,this)
r.b=!0
if(b){this.x=u
this.f=t}this.y=u
this.r=t
return r},
jK:function(a){var u
H.f(a,"$ia",[V.Y],"$aa")
u=this.b
if(u==null)return!1
u.C(this.aY(a,!0))
return!0},
jI:function(a){var u
H.f(a,"$ia",[V.Y],"$aa")
u=this.c
if(u==null)return!1
u.C(this.aY(a,!0))
return!0},
jJ:function(a){var u
H.f(a,"$ia",[V.Y],"$aa")
u=this.d
if(u==null)return!1
u.C(this.aY(a,!1))
return!0}}
X.dP.prototype={
gaP:function(){var u=this.a
return V.jj(0,0,C.o.gdJ(u).c,C.o.gdJ(u).d)},
da:function(a){var u,t
u=a.keyCode
t=a.ctrlKey||a.metaKey
return new X.d7(u,new X.am(t,a.altKey,a.shiftKey))},
aN:function(a){var u,t
u=this.b
t=a.ctrlKey||a.metaKey
u.c=new X.am(t,a.altKey,a.shiftKey)},
cd:function(a){var u,t
u=this.b
t=a.ctrlKey||a.metaKey
u.c=new X.am(t,a.altKey,a.shiftKey)},
ax:function(a){var u,t,s,r,q
u=this.a.getBoundingClientRect()
t=a.pageX
s=a.pageY
r=u.left
if(typeof t!=="number")return t.I()
q=u.top
if(typeof s!=="number")return s.I()
return new V.Y(t-r,s-q)},
b_:function(a){return new V.N(a.movementX,a.movementY)},
ca:function(a){var u,t,s,r,q,p,o,n
u=this.a.getBoundingClientRect()
t=H.b([],[V.Y])
for(s=a.touches,r=s.length,q=0;q<s.length;s.length===r||(0,H.x)(s),++q){p=s[q]
o=C.j.al(p.pageX)
C.j.al(p.pageY)
n=u.left
C.j.al(p.pageX)
C.a.h(t,new V.Y(o-n,C.j.al(p.pageY)-u.top))}return t},
av:function(a){var u,t
u=a.buttons
t=a.ctrlKey||a.metaKey
return new X.cR(u,new X.am(t,a.altKey,a.shiftKey))},
c0:function(a){var u,t,s,r,q,p
u=this.a.getBoundingClientRect()
t=a.pageX
s=a.pageY
r=u.left
if(typeof t!=="number")return t.I()
q=t-r
if(q<0)return!1
t=u.top
if(typeof s!=="number")return s.I()
p=s-t
if(p<0)return!1
return q<u.width&&p<u.height},
hg:function(a){this.f=!0},
h2:function(a){this.f=!1},
ha:function(a){H.d(a,"$ia2")
if(this.f&&this.c0(a))a.preventDefault()},
hk:function(a){var u
H.d(a,"$iaJ")
if(!this.f)return
u=this.da(a)
this.b.jL(u)},
hi:function(a){var u
H.d(a,"$iaJ")
if(!this.f)return
u=this.da(a)
this.b.jH(u)},
ho:function(a){var u,t,s,r
H.d(a,"$ia2")
u=this.a
u.focus()
this.f=!0
this.aN(a)
if(this.x){t=this.av(a)
s=this.b_(a)
if(this.d.cH(t,s))a.preventDefault()
return}if(this.r){this.y=a
u.requestPointerLock()
return}t=this.av(a)
r=this.ax(a)
if(this.c.cH(t,r))a.preventDefault()},
hs:function(a){var u,t,s
H.d(a,"$ia2")
this.aN(a)
u=this.av(a)
if(this.x){t=this.b_(a)
if(this.d.b5(u,t))a.preventDefault()
return}if(this.r)return
s=this.ax(a)
if(this.c.b5(u,s))a.preventDefault()},
he:function(a){var u,t,s
H.d(a,"$ia2")
if(!this.c0(a)){this.aN(a)
u=this.av(a)
if(this.x){t=this.b_(a)
if(this.d.b5(u,t))a.preventDefault()
return}if(this.r)return
s=this.ax(a)
if(this.c.b5(u,s))a.preventDefault()}},
hq:function(a){var u,t,s
H.d(a,"$ia2")
this.aN(a)
u=this.av(a)
if(this.x){t=this.b_(a)
if(this.d.b4(u,t))a.preventDefault()
return}if(this.r)return
s=this.ax(a)
if(this.c.b4(u,s))a.preventDefault()},
hc:function(a){var u,t,s
H.d(a,"$ia2")
if(!this.c0(a)){this.aN(a)
u=this.av(a)
if(this.x){t=this.b_(a)
if(this.d.b4(u,t))a.preventDefault()
return}if(this.r)return
s=this.ax(a)
if(this.c.b4(u,s))a.preventDefault()}},
hu:function(a){var u,t
H.d(a,"$iaR")
this.aN(a)
u=new V.N((a&&C.F).gje(a),C.F.gjf(a)).v(0,180)
if(this.x){if(this.d.jM(u))a.preventDefault()
return}if(this.r)return
t=this.ax(a)
if(this.c.jN(u,t))a.preventDefault()},
hw:function(a){var u,t,s
u=document.pointerLockElement===this.a
if(u!==this.x){this.x=u
t=this.av(this.y)
s=this.ax(this.y)
this.d.hm(t,s,u)}},
hM:function(a){var u
H.d(a,"$iaC")
this.a.focus()
this.f=!0
this.cd(a)
u=this.ca(a)
if(this.e.jK(u))a.preventDefault()},
hI:function(a){var u
H.d(a,"$iaC")
this.cd(a)
u=this.ca(a)
if(this.e.jI(u))a.preventDefault()},
hK:function(a){var u
H.d(a,"$iaC")
this.cd(a)
u=this.ca(a)
if(this.e.jJ(u))a.preventDefault()},
sfA:function(a){this.z=H.f(a,"$ia",[[P.ch,P.L]],"$aa")}}
D.b8.prototype={
gn:function(){var u=this.d
if(u==null){u=D.E()
this.d=u}return u},
au:function(a){var u
H.d(a,"$iu")
u=this.d
if(u!=null)u.C(a)},
f6:function(){return this.au(null)},
$iV:1,
$iaM:1}
D.V.prototype={$iaM:1}
D.d8.prototype={
gn:function(){var u=this.Q
if(u==null){u=D.E()
this.Q=u}return u},
au:function(a){var u=this.Q
if(u!=null)u.C(a)},
dj:function(a){var u
H.d(a,"$iu")
u=this.ch
if(u!=null)u.C(a)},
hl:function(){return this.dj(null)},
hy:function(a){var u,t,s
H.f(a,"$ii",[D.V],"$ai")
for(u=a.length,t=0;t<a.length;a.length===u||(0,H.x)(a),++t){s=a[t]
if(s==null||this.f4(s))return!1}return!0},
fX:function(a,b){var u,t,s,r,q,p,o,n
u=D.V
H.f(b,"$ii",[u],"$ai")
for(t=b.length,s=this.gdi(),r={func:1,ret:-1,args:[D.u]},q=[r],p=0;p<b.length;b.length===t||(0,H.x)(b),++p){o=H.d(b[p],"$iV")
if(o instanceof D.b8)C.a.h(this.e,o)
n=o.d
if(n==null){n=new D.bt()
n.sad(null)
n.saZ(null)
n.c=null
n.d=0
o.d=n}H.j(s,r)
if(n.a==null)n.sad(H.b([],q))
n=n.a;(n&&C.a).h(n,s)}u=new D.be(a,b,this,[u])
u.b=!0
this.au(u)},
hC:function(a,b){var u,t,s,r
u=D.V
H.f(b,"$ii",[u],"$ai")
for(t=b.gO(b),s=this.gdi();t.u();){r=t.gE()
C.a.U(this.e,r)
r.gn().U(0,s)}u=new D.bf(a,b,this,[u])
u.b=!0
this.au(u)},
f4:function(a){var u=C.a.T(this.e,a)
return u},
sfw:function(a){this.e=H.f(a,"$ia",[D.b8],"$aa")},
shN:function(a){this.f=H.f(a,"$ia",[D.dq],"$aa")},
si9:function(a){this.r=H.f(a,"$ia",[D.dy],"$aa")},
sip:function(a){this.x=H.f(a,"$ia",[D.dF],"$aa")},
siq:function(a){this.y=H.f(a,"$ia",[D.dG],"$aa")},
sir:function(a){this.z=H.f(a,"$ia",[D.dH],"$aa")},
$ai:function(){return[D.V]},
$aU:function(){return[D.V]}}
D.dq.prototype={$iV:1,$iaM:1}
D.dy.prototype={$iV:1,$iaM:1}
D.dF.prototype={$iV:1,$iaM:1}
D.dG.prototype={$iV:1,$iaM:1}
D.dH.prototype={$iV:1,$iaM:1}
V.W.prototype={
t:function(a,b){var u,t
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.W))return!1
u=b.a
t=$.J().a
if(!(Math.abs(u-this.a)<t))return!1
if(!(Math.abs(b.b-this.b)<t))return!1
if(!(Math.abs(b.c-this.c)<t))return!1
return!0},
i:function(a){return"["+V.O(this.a,3,0)+", "+V.O(this.b,3,0)+", "+V.O(this.c,3,0)+"]"}}
V.aA.prototype={
t:function(a,b){var u,t
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.aA))return!1
u=b.a
t=$.J().a
if(!(Math.abs(u-this.a)<t))return!1
if(!(Math.abs(b.b-this.b)<t))return!1
if(!(Math.abs(b.c-this.c)<t))return!1
if(!(Math.abs(b.d-this.d)<t))return!1
return!0},
i:function(a){return"["+V.O(this.a,3,0)+", "+V.O(this.b,3,0)+", "+V.O(this.c,3,0)+", "+V.O(this.d,3,0)+"]"}}
V.ey.prototype={}
V.dg.prototype={
ac:function(a,b){var u=H.b([this.a,this.d,this.r,this.b,this.e,this.x,this.c,this.f,this.y],[P.w])
return u},
t:function(a,b){var u,t
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.dg))return!1
u=b.a
t=$.J().a
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
t=V.bM(H.b([this.a,this.d,this.r],u),3,0)
s=V.bM(H.b([this.b,this.e,this.x],u),3,0)
r=V.bM(H.b([this.c,this.f,this.y],u),3,0)
u=t.length
if(0>=u)return H.l(t,0)
q="["+t[0]+", "
p=s.length
if(0>=p)return H.l(s,0)
q=q+s[0]+", "
o=r.length
if(0>=o)return H.l(r,0)
q=q+r[0]+",\n"
if(1>=u)return H.l(t,1)
n=" "+t[1]+", "
if(1>=p)return H.l(s,1)
n=n+s[1]+", "
if(1>=o)return H.l(r,1)
n=q+(n+r[1]+",\n")
if(2>=u)return H.l(t,2)
u=" "+t[2]+", "
if(2>=p)return H.l(s,2)
u=u+s[2]+", "
if(2>=o)return H.l(r,2)
return n+(u+r[2]+"]")}}
V.ae.prototype={
ac:function(a,b){var u=H.b([this.a,this.e,this.y,this.cx,this.b,this.f,this.z,this.cy,this.c,this.r,this.Q,this.db,this.d,this.x,this.ch,this.dx],[P.w])
return u},
cB:function(){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0
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
if(Math.abs(a7-0)<$.J().a)return V.bB()
a8=1/a7
a9=-r
b0=-d
return V.aL((t*a6-p*a5+m*a4)*a8,(-s*a6+o*a5-l*a4)*a8,(f*h-b*i+a1*j)*a8,(-e*h+a*i-a2*j)*a8,(a9*a6+p*a3-m*a0)*a8,(u*a6-o*a3+l*a0)*a8,(b0*h+b*k-a1*n)*a8,(g*h-a*k+a2*n)*a8,(r*a5-t*a3+m*c)*a8,(-u*a5+s*a3-l*c)*a8,(d*i-f*k+a1*q)*a8,(-g*i+e*k-a2*q)*a8,(a9*a4+t*a0-p*c)*a8,(u*a4-s*a0+o*c)*a8,(b0*j+f*n-b*q)*a8,(g*j-e*n+a*q)*a8)},
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
return V.aL(u*t+s*r+q*p+o*n,u*m+s*l+q*k+o*j,u*i+s*h+q*g+o*f,u*e+s*d+q*c+o*b,a*t+a0*r+a1*p+a2*n,a*m+a0*l+a1*k+a2*j,a*i+a0*h+a1*g+a2*f,a*e+a0*d+a1*c+a2*b,a3*t+a4*r+a5*p+a6*n,a3*m+a4*l+a5*k+a6*j,a3*i+a4*h+a5*g+a6*f,a3*e+a4*d+a5*c+a6*b,a7*t+a8*r+a9*p+b0*n,a7*m+a8*l+a9*k+b0*j,a7*i+a8*h+a9*g+b0*f,a7*e+a8*d+a9*c+b0*b)},
cM:function(a){var u,t,s
u=a.a
t=a.b
s=a.c
return new V.K(this.a*u+this.b*t+this.c*s,this.e*u+this.f*t+this.r*s,this.y*u+this.z*t+this.Q*s)},
ba:function(a){var u,t,s
u=a.a
t=a.b
s=a.c
return new V.a9(this.a*u+this.b*t+this.c*s+this.d,this.e*u+this.f*t+this.r*s+this.x,this.y*u+this.z*t+this.Q*s+this.ch)},
t:function(a,b){var u,t
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.ae))return!1
u=b.a
t=$.J().a
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
i:function(a){return this.L()},
eb:function(a,b,c){var u,t,s,r,q,p,o,n,m,l
u=[P.w]
t=V.bM(H.b([this.a,this.e,this.y,this.cx],u),b,c)
s=V.bM(H.b([this.b,this.f,this.z,this.cy],u),b,c)
r=V.bM(H.b([this.c,this.r,this.Q,this.db],u),b,c)
q=V.bM(H.b([this.d,this.x,this.ch,this.dx],u),b,c)
u=t.length
if(0>=u)return H.l(t,0)
p="["+t[0]+", "
o=s.length
if(0>=o)return H.l(s,0)
p=p+s[0]+", "
n=r.length
if(0>=n)return H.l(r,0)
p=p+r[0]+", "
m=q.length
if(0>=m)return H.l(q,0)
p=p+q[0]+",\n"
l=a+" "
if(1>=u)return H.l(t,1)
l=l+t[1]+", "
if(1>=o)return H.l(s,1)
l=l+s[1]+", "
if(1>=n)return H.l(r,1)
l=l+r[1]+", "
if(1>=m)return H.l(q,1)
l=p+(l+q[1]+",\n")
p=a+" "
if(2>=u)return H.l(t,2)
p=p+t[2]+", "
if(2>=o)return H.l(s,2)
p=p+s[2]+", "
if(2>=n)return H.l(r,2)
p=p+r[2]+", "
if(2>=m)return H.l(q,2)
p=l+(p+q[2]+",\n")
l=a+" "
if(3>=u)return H.l(t,3)
l=l+t[3]+", "
if(3>=o)return H.l(s,3)
l=l+s[3]+", "
if(3>=n)return H.l(r,3)
l=l+r[3]+", "
if(3>=m)return H.l(q,3)
return p+(l+q[3]+"]")},
L:function(){return this.eb("",3,0)},
w:function(a){return this.eb(a,3,0)}}
V.Y.prototype={
I:function(a,b){return new V.Y(this.a-b.a,this.b-b.b)},
t:function(a,b){var u,t
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.Y))return!1
u=b.a
t=$.J().a
if(!(Math.abs(u-this.a)<t))return!1
if(!(Math.abs(b.b-this.b)<t))return!1
return!0},
i:function(a){return"["+V.O(this.a,3,0)+", "+V.O(this.b,3,0)+"]"}}
V.a9.prototype={
I:function(a,b){return new V.a9(this.a-b.a,this.b-b.b,this.c-b.c)},
t:function(a,b){var u,t
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.a9))return!1
u=b.a
t=$.J().a
if(!(Math.abs(u-this.a)<t))return!1
if(!(Math.abs(b.b-this.b)<t))return!1
if(!(Math.abs(b.c-this.c)<t))return!1
return!0},
i:function(a){return"["+V.O(this.a,3,0)+", "+V.O(this.b,3,0)+", "+V.O(this.c,3,0)+"]"}}
V.aY.prototype={
t:function(a,b){var u,t
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.aY))return!1
u=b.a
t=$.J().a
if(!(Math.abs(u-this.a)<t))return!1
if(!(Math.abs(b.b-this.b)<t))return!1
if(!(Math.abs(b.c-this.c)<t))return!1
if(!(Math.abs(b.d-this.d)<t))return!1
return!0},
i:function(a){return"["+V.O(this.a,3,0)+", "+V.O(this.b,3,0)+", "+V.O(this.c,3,0)+", "+V.O(this.d,3,0)+"]"}}
V.dt.prototype={
gaa:function(){var u,t
u=this.c
t=this.d
if(u>t)return t
else return u},
t:function(a,b){var u,t
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.dt))return!1
u=b.a
t=$.J().a
if(!(Math.abs(u-this.a)<t))return!1
if(!(Math.abs(b.b-this.b)<t))return!1
if(!(Math.abs(b.c-this.c)<t))return!1
if(!(Math.abs(b.d-this.d)<t))return!1
return!0},
i:function(a){return"["+V.O(this.a,3,0)+", "+V.O(this.b,3,0)+", "+V.O(this.c,3,0)+", "+V.O(this.d,3,0)+"]"}}
V.N.prototype={
cC:function(a){return Math.sqrt(this.D(this))},
D:function(a){var u,t,s,r
u=this.a
t=a.a
if(typeof u!=="number")return u.A()
if(typeof t!=="number")return H.B(t)
s=this.b
r=a.b
if(typeof s!=="number")return s.A()
if(typeof r!=="number")return H.B(r)
return u*t+s*r},
A:function(a,b){var u,t
u=this.a
if(typeof u!=="number")return u.A()
t=this.b
if(typeof t!=="number")return t.A()
return new V.N(u*b,t*b)},
v:function(a,b){var u,t
if(Math.abs(b-0)<$.J().a){u=$.jt
if(u==null){u=new V.N(0,0)
$.jt=u}return u}u=this.a
if(typeof u!=="number")return u.v()
t=this.b
if(typeof t!=="number")return t.v()
return new V.N(u/b,t/b)},
t:function(a,b){var u,t,s
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.N))return!1
u=b.a
t=this.a
s=$.J()
s.toString
if(typeof u!=="number")return u.I()
if(typeof t!=="number")return H.B(t)
s=s.a
if(!(Math.abs(u-t)<s))return!1
u=b.b
t=this.b
if(typeof u!=="number")return u.I()
if(typeof t!=="number")return H.B(t)
if(!(Math.abs(u-t)<s))return!1
return!0},
i:function(a){return"["+V.O(this.a,3,0)+", "+V.O(this.b,3,0)+"]"}}
V.K.prototype={
cC:function(a){return Math.sqrt(this.D(this))},
D:function(a){return this.a*a.a+this.b*a.b+this.c*a.c},
cD:function(a,b){var u,t,s
u=this.a
t=this.b
s=this.c
return new V.K(u+b*(a.a-u),t+b*(a.b-t),s+b*(a.c-s))},
b3:function(a){var u,t,s,r,q,p
u=this.b
t=a.c
s=this.c
r=a.b
q=a.a
p=this.a
return new V.K(u*t-s*r,s*q-p*t,p*r-u*q)},
F:function(a,b){return new V.K(this.a+b.a,this.b+b.b,this.c+b.c)},
P:function(a){return new V.K(-this.a,-this.b,-this.c)},
v:function(a,b){if(Math.abs(b-0)<$.J().a)return V.dT()
return new V.K(this.a/b,this.b/b,this.c/b)},
ed:function(){var u=$.J().a
if(!(Math.abs(0-this.a)<u))return!1
if(!(Math.abs(0-this.b)<u))return!1
if(!(Math.abs(0-this.c)<u))return!1
return!0},
t:function(a,b){var u,t
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.K))return!1
u=b.a
t=$.J().a
if(!(Math.abs(u-this.a)<t))return!1
if(!(Math.abs(b.b-this.b)<t))return!1
if(!(Math.abs(b.c-this.c)<t))return!1
return!0},
i:function(a){return"["+V.O(this.a,3,0)+", "+V.O(this.b,3,0)+", "+V.O(this.c,3,0)+"]"}}
U.en.prototype={
bS:function(a){var u=V.lI(a,this.c,this.b)
return u},
gn:function(){var u=this.y
if(u==null){u=D.E()
this.y=u}return u},
N:function(a){var u=this.y
if(u!=null)u.C(a)},
scO:function(a,b){},
scE:function(a){var u,t
u=this.b
if(!(Math.abs(u-a)<$.J().a)){this.b=a
if(a<this.c){this.c=a
this.d=a}else{t=this.d
if(a<t)this.d=this.bS(t)}u=new D.D("maximumLocation",u,this.b,this,[P.w])
u.b=!0
this.N(u)}},
scG:function(a){var u,t
u=this.c
if(!(Math.abs(u-a)<$.J().a)){this.c=a
if(this.b<a){this.b=a
this.d=a}else{t=this.d
if(a>t)this.d=this.bS(t)}u=new D.D("minimumLocation",u,this.c,this,[P.w])
u.b=!0
this.N(u)}},
sa9:function(a,b){var u
b=this.bS(b)
u=this.d
if(!(Math.abs(u-b)<$.J().a)){this.d=b
u=new D.D("location",u,b,this,[P.w])
u.b=!0
this.N(u)}},
scF:function(a){var u,t,s
u=this.e
if(!(Math.abs(u-a)<$.J().a)){this.e=a
t=this.f
s=-a
if(t<s)t=s
else if(t>a)t=a
this.f=t
u=new D.D("maximumVelocity",u,a,this,[P.w])
u.b=!0
this.N(u)}},
sR:function(a){var u,t
u=this.e
t=-u
if(a<t)a=t
else if(a>u)a=u
u=this.f
if(!(Math.abs(u-a)<$.J().a)){this.f=a
u=new D.D("velocity",u,a,this,[P.w])
u.b=!0
this.N(u)}},
sco:function(a){var u
if(a<0)a=0
else if(a>1)a=1
u=this.x
if(!(Math.abs(u-a)<$.J().a)){this.x=a
u=new D.D("dampening",u,a,this,[P.w])
u.b=!0
this.N(u)}},
am:function(a){var u,t,s,r,q
u=this.f
t=$.J().a
if(!(Math.abs(u-0)<t)||!(Math.abs(this.r-0)<t)){s=u+this.r*a
u=this.e
r=-u
if(s<r)s=r
else if(s>u)s=u
this.sa9(0,this.d+s*a)
u=this.x
if(!(Math.abs(u-0)<$.J().a)){q=s*Math.pow(1-u,a)
if(s<0){if(q<s)q=s
else if(q>0)q=0}else if(q<0)q=0
else if(q>s)q=s
s=q}this.sR(s)}}}
U.cT.prototype={
gn:function(){var u=this.b
if(u==null){u=D.E()
this.b=u}return u},
aR:function(a,b){return this.a},
t:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.cT))return!1
return J.a_(this.a,b.a)},
i:function(a){return"Constant: "+this.a.w("          ")}}
U.c3.prototype={
gn:function(){var u=this.e
if(u==null){u=D.E()
this.e=u}return u},
N:function(a){var u
H.d(a,"$iu")
u=this.e
if(u!=null)u.C(a)},
a4:function(){return this.N(null)},
fV:function(a,b){var u,t,s,r,q,p,o,n
u=U.a3
H.f(b,"$ii",[u],"$ai")
for(t=b.length,s=this.gaI(),r={func:1,ret:-1,args:[D.u]},q=[r],p=0;p<b.length;b.length===t||(0,H.x)(b),++p){o=b[p]
if(o!=null){n=o.gn()
n.toString
H.j(s,r)
if(n.a==null)n.sad(H.b([],q))
n=n.a;(n&&C.a).h(n,s)}}u=new D.be(a,b,this,[u])
u.b=!0
this.N(u)},
hA:function(a,b){var u,t,s
u=U.a3
H.f(b,"$ii",[u],"$ai")
for(t=b.gO(b),s=this.gaI();t.u();)t.gE().gn().U(0,s)
u=new D.bf(a,b,this,[u])
u.b=!0
this.N(u)},
aR:function(a,b){var u,t,s,r
u=this.r
t=a.e
if(typeof u!=="number")return u.aT()
if(u<t){this.r=t
u=this.e
if(u!=null)++u.d
for(u=this.a,u=new J.ac(u,u.length,0,[H.v(u,0)]),s=null;u.u();){t=u.d
if(t!=null){r=t.aR(a,b)
if(r!=null)s=s==null?r:r.A(0,s)}}this.f=s==null?V.bB():s
u=this.e
if(u!=null)u.aF()}return this.f},
t:function(a,b){var u,t,s,r
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.c3))return!1
u=this.a.length
for(t=0;t<u;++t){s=this.a
if(t>=s.length)return H.l(s,t)
s=s[t]
r=b.a
if(t>=r.length)return H.l(r,t)
if(!J.a_(s,r[t]))return!1}return!0},
i:function(a){return"Group"},
$ai:function(){return[U.a3]},
$aU:function(){return[U.a3]},
$ia3:1}
U.a3.prototype={}
U.dQ.prototype={
gn:function(){var u=this.cy
if(u==null){u=D.E()
this.cy=u}return u},
N:function(a){var u
H.d(a,"$iu")
u=this.cy
if(u!=null)u.C(a)},
a4:function(){return this.N(null)},
b1:function(a){if(this.a!=null)return!1
this.a=a
a.c.gdO().h(0,this.gc1())
this.a.c.gef().h(0,this.gc3())
this.a.c.gbJ().h(0,this.gc5())
return!0},
c2:function(a){H.d(a,"$iu")
if(!J.a_(this.c,this.a.b.c))return
this.y=!0
this.x=!0
this.z=this.b.d},
c4:function(a){var u,t,s,r,q,p,o
a=H.c(H.d(a,"$iu"),"$iaW")
if(!this.y)return
if(this.x){u=a.d.I(0,a.y)
u=new V.N(u.a,u.b)
u=u.D(u)
t=this.r
if(typeof t!=="number")return H.B(t)
if(u<t)return
this.x=!1}if(this.d){u=a.c
t=a.d.I(0,a.y)
u=new V.N(t.a,t.b).A(0,2).v(0,u.gaa())
this.Q=u
t=this.b
u=u.a
if(typeof u!=="number")return u.A()
s=this.e
if(typeof s!=="number")return H.B(s)
t.sR(u*10*s)}else{u=a.c
t=a.d
s=t.I(0,a.y)
r=new V.N(s.a,s.b).A(0,2).v(0,u.gaa())
s=this.b
q=r.a
if(typeof q!=="number")return q.P()
p=this.e
if(typeof p!=="number")return H.B(p)
o=this.z
if(typeof o!=="number")return H.B(o)
s.sa9(0,-q*p+o)
this.b.sR(0)
t=t.I(0,a.z)
this.Q=new V.N(t.a,t.b).A(0,2).v(0,u.gaa())}this.a4()},
c6:function(a){var u,t,s
H.d(a,"$iu")
if(!this.y)return
this.y=!1
if(this.x)return
u=this.Q
if(u.D(u)>0.0001){u=this.b
t=this.Q.a
if(typeof t!=="number")return t.A()
s=this.e
if(typeof s!=="number")return H.B(s)
u.sR(t*10*s)
this.a4()}},
aR:function(a,b){var u,t,s,r,q
u=this.ch
t=a.e
if(typeof u!=="number")return u.aT()
if(u<t){this.ch=t
s=a.y
this.b.am(s)
u=this.b.d
r=Math.cos(u)
q=Math.sin(u)
this.cx=V.aL(r,-q,0,0,q,r,0,0,0,0,1,0,0,0,0,1)}return this.cx},
$ia3:1}
U.dR.prototype={
gn:function(){var u=this.fx
if(u==null){u=D.E()
this.fx=u}return u},
N:function(a){var u
H.d(a,"$iu")
u=this.fx
if(u!=null)u.C(a)},
a4:function(){return this.N(null)},
b1:function(a){var u,t
if(this.a!=null)return!1
this.a=a
a.c.gdO().h(0,this.gc1())
this.a.c.gef().h(0,this.gc3())
this.a.c.gbJ().h(0,this.gc5())
u=this.a.d
t=u.f
if(t==null){t=D.E()
u.f=t
u=t}else u=t
u.h(0,this.gfO())
u=this.a.d
t=u.d
if(t==null){t=D.E()
u.d=t
u=t}else u=t
u.h(0,this.gfQ())
u=this.a.e
t=u.b
if(t==null){t=D.E()
u.b=t
u=t}else u=t
u.h(0,this.gil())
u=this.a.e
t=u.d
if(t==null){t=D.E()
u.d=t
u=t}else u=t
u.h(0,this.gij())
u=this.a.e
t=u.c
if(t==null){t=D.E()
u.c=t
u=t}else u=t
u.h(0,this.gih())
return!0},
an:function(a){var u,t
u=a.a
t=a.b
if(this.f){if(typeof u!=="number")return u.P()
u=-u}if(this.r){if(typeof t!=="number")return t.P()
t=-t}return new V.N(u,t)},
c2:function(a){a=H.c(H.d(a,"$iu"),"$iaW")
if(!J.a_(this.d,a.x.b))return
this.cx=!0
this.ch=!0
this.cy=this.c.d
this.db=this.b.d},
c4:function(a){var u,t,s,r,q,p,o
a=H.c(H.d(a,"$iu"),"$iaW")
if(!this.cx)return
if(this.ch){u=a.d.I(0,a.y)
u=new V.N(u.a,u.b)
u=u.D(u)
t=this.Q
if(typeof t!=="number")return H.B(t)
if(u<t)return
this.ch=!1}if(this.e){u=a.c
t=a.d.I(0,a.y)
u=this.an(new V.N(t.a,t.b).A(0,2).v(0,u.gaa()))
this.dx=u
t=this.c
u=u.a
if(typeof u!=="number")return u.P()
s=this.y
if(typeof s!=="number")return H.B(s)
t.sR(-u*10*s)
s=this.b
u=this.dx.b
if(typeof u!=="number")return u.P()
t=this.x
if(typeof t!=="number")return H.B(t)
s.sR(-u*10*t)}else{u=a.c
t=a.d
s=t.I(0,a.y)
r=this.an(new V.N(s.a,s.b).A(0,2).v(0,u.gaa()))
s=this.c
q=r.a
if(typeof q!=="number")return q.P()
p=this.y
if(typeof p!=="number")return H.B(p)
o=this.cy
if(typeof o!=="number")return H.B(o)
s.sa9(0,-q*p+o)
o=this.b
p=r.b
if(typeof p!=="number")return p.P()
q=this.x
if(typeof q!=="number")return H.B(q)
s=this.db
if(typeof s!=="number")return H.B(s)
o.sa9(0,-p*q+s)
this.b.sR(0)
this.c.sR(0)
t=t.I(0,a.z)
this.dx=this.an(new V.N(t.a,t.b).A(0,2).v(0,u.gaa()))}this.a4()},
c6:function(a){var u,t,s
H.d(a,"$iu")
if(!this.cx)return
this.cx=!1
if(this.ch)return
u=this.dx
if(u.D(u)>0.0001){u=this.c
t=this.dx.a
if(typeof t!=="number")return t.P()
s=this.y
if(typeof s!=="number")return H.B(s)
u.sR(-t*10*s)
s=this.b
t=this.dx.b
if(typeof t!=="number")return t.P()
u=this.x
if(typeof u!=="number")return H.B(u)
s.sR(-t*10*u)
this.a4()}},
fP:function(a){if(H.c(H.d(a,"$iu"),"$idc").x){this.ch=!0
this.cy=this.c.d
this.db=this.b.d}},
fR:function(a){var u,t,s,r,q,p,o
a=H.c(H.d(a,"$iu"),"$iaW")
if(!J.a_(this.d,a.x.b))return
u=a.c
t=a.d
s=t.I(0,a.y)
r=this.an(new V.N(s.a,s.b).A(0,2).v(0,u.gaa()))
s=this.c
q=r.a
if(typeof q!=="number")return q.P()
p=this.y
if(typeof p!=="number")return H.B(p)
o=this.cy
if(typeof o!=="number")return H.B(o)
s.sa9(0,-q*p+o)
o=this.b
p=r.b
if(typeof p!=="number")return p.P()
q=this.x
if(typeof q!=="number")return H.B(q)
s=this.db
if(typeof s!=="number")return H.B(s)
o.sa9(0,-p*q+s)
this.b.sR(0)
this.c.sR(0)
t=t.I(0,a.z)
this.dx=this.an(new V.N(t.a,t.b).A(0,2).v(0,u.gaa()))
this.a4()},
im:function(a){H.d(a,"$iu")
this.cx=!0
this.ch=!0
this.cy=this.c.d
this.db=this.b.d},
ik:function(a){var u,t,s,r,q,p,o
a=H.c(H.d(a,"$iu"),"$idK")
if(!this.cx)return
if(this.ch){u=a.d.I(0,a.y)
u=new V.N(u.a,u.b)
u=u.D(u)
t=this.Q
if(typeof t!=="number")return H.B(t)
if(u<t)return
this.ch=!1}if(this.e){u=a.c
t=a.d.I(0,a.y)
u=this.an(new V.N(t.a,t.b).A(0,2).v(0,u.gaa()))
this.dx=u
t=this.c
u=u.a
if(typeof u!=="number")return u.P()
s=this.y
if(typeof s!=="number")return H.B(s)
t.sR(-u*10*s)
s=this.b
u=this.dx.b
if(typeof u!=="number")return u.P()
t=this.x
if(typeof t!=="number")return H.B(t)
s.sR(-u*10*t)}else{u=a.c
t=a.d
s=t.I(0,a.y)
r=this.an(new V.N(s.a,s.b).A(0,2).v(0,u.gaa()))
s=this.c
q=r.a
if(typeof q!=="number")return q.P()
p=this.y
if(typeof p!=="number")return H.B(p)
o=this.cy
if(typeof o!=="number")return H.B(o)
s.sa9(0,-q*p+o)
o=this.b
p=r.b
if(typeof p!=="number")return p.P()
q=this.x
if(typeof q!=="number")return H.B(q)
s=this.db
if(typeof s!=="number")return H.B(s)
o.sa9(0,-p*q+s)
this.b.sR(0)
this.c.sR(0)
t=t.I(0,a.z)
this.dx=this.an(new V.N(t.a,t.b).A(0,2).v(0,u.gaa()))}this.a4()},
ii:function(a){var u,t,s
H.d(a,"$iu")
if(!this.cx)return
this.cx=!1
if(this.ch)return
u=this.dx
if(u.D(u)>0.0001){u=this.c
t=this.dx.a
if(typeof t!=="number")return t.P()
s=this.y
if(typeof s!=="number")return H.B(s)
u.sR(-t*10*s)
s=this.b
t=this.dx.b
if(typeof t!=="number")return t.P()
u=this.x
if(typeof u!=="number")return H.B(u)
s.sR(-t*10*u)
this.a4()}},
aR:function(a,b){var u,t,s,r,q
u=this.dy
t=a.e
if(typeof u!=="number")return u.aT()
if(u<t){this.dy=t
s=a.y
this.c.am(s)
this.b.am(s)
u=this.b.d
r=Math.cos(u)
q=Math.sin(u)
u=V.aL(1,0,0,0,0,r,-q,0,0,q,r,0,0,0,0,1)
t=this.c.d
r=Math.cos(t)
q=Math.sin(t)
this.fr=u.A(0,V.aL(r,0,-q,0,0,1,0,0,q,0,r,0,0,0,0,1))}return this.fr},
$ia3:1}
U.dS.prototype={
gn:function(){var u=this.r
if(u==null){u=D.E()
this.r=u}return u},
N:function(a){var u=this.r
if(u!=null)u.C(a)},
b1:function(a){var u,t,s
if(this.a!=null)return!1
this.a=a
u=a.c
t=u.e
if(t==null){t=D.E()
u.e=t
u=t}else u=t
t=this.gfS()
u.h(0,t)
u=this.a.d
s=u.e
if(s==null){s=D.E()
u.e=s
u=s}else u=s
u.h(0,t)
return!0},
fT:function(a){var u,t,s,r
H.d(a,"$iu")
if(!J.a_(this.b,this.a.b.c))return
H.c(a,"$ic9")
u=this.d
t=a.x.b
s=this.c
if(typeof t!=="number")return t.A()
r=u+t*s
if(u!==r){this.d=r
u=new D.D("zoom",u,r,this,[P.w])
u.b=!0
this.N(u)}},
aR:function(a,b){var u,t,s
u=this.e
t=a.e
if(u<t){this.e=t
s=Math.pow(10,this.d)
this.f=V.aL(s,0,0,0,0,s,0,0,0,0,s,0,0,0,0,1)}return this.f},
$ia3:1}
M.cS.prototype={
gn:function(){var u=this.f
if(u==null){u=D.E()
this.f=u}return u},
X:function(a){var u
H.d(a,"$iu")
u=this.f
if(u!=null)u.C(a)},
aV:function(){return this.X(null)},
hE:function(a,b){var u,t,s,r,q,p,o,n
u=M.ao
H.f(b,"$ii",[u],"$ai")
for(t=b.length,s=this.gW(),r={func:1,ret:-1,args:[D.u]},q=[r],p=0;p<b.length;b.length===t||(0,H.x)(b),++p){o=b[p]
if(o!=null){n=o.gn()
n.toString
H.j(s,r)
if(n.a==null)n.sad(H.b([],q))
n=n.a;(n&&C.a).h(n,s)}}u=new D.be(a,b,this,[u])
u.b=!0
this.X(u)},
hG:function(a,b){var u,t,s
u=M.ao
H.f(b,"$ii",[u],"$ai")
for(t=b.gO(b),s=this.gW();t.u();)t.gE().gn().U(0,s)
u=new D.bf(a,b,this,[u])
u.b=!0
this.X(u)},
ab:function(a){var u,t
if(this.e)return
this.e=!0
for(u=this.a,u=new J.ac(u,u.length,0,[H.v(u,0)]);u.u();){t=u.d
if(t!=null)t.ab(a)}this.e=!1},
$ai:function(){return[M.ao]},
$aU:function(){return[M.ao]},
$iao:1}
M.cU.prototype={
gn:function(){var u=this.f
if(u==null){u=D.E()
this.f=u}return u},
X:function(a){var u
H.d(a,"$iu")
u=this.f
if(u!=null)u.C(a)},
aV:function(){return this.X(null)},
sb2:function(a){var u,t
if(a==null)a=new X.eM()
u=this.a
if(u!==a){if(u!=null)u.gn().U(0,this.gW())
t=this.a
this.a=a
a.gn().h(0,this.gW())
u=new D.D("camera",t,this.a,this,[X.bp])
u.b=!0
this.X(u)}},
sb7:function(a,b){var u,t
if(b==null)b=X.ik(!0,!0,!1,null,2000,null,0)
u=this.b
if(u!==b){if(u!=null)u.gn().U(0,this.gW())
t=this.b
this.b=b
b.gn().h(0,this.gW())
u=new D.D("target",t,this.b,this,[X.ci])
u.b=!0
this.X(u)}},
sb8:function(a){var u,t
u=this.c
if(u!=a){if(u!=null)u.gn().U(0,this.gW())
t=this.c
this.c=a
if(a!=null)a.gn().h(0,this.gW())
u=new D.D("technique",t,this.c,this,[O.bi])
u.b=!0
this.X(u)}},
ab:function(a){a.cJ(this.c)
this.b.a0(a)
this.a.a0(a)
this.d.am(a)
this.d.ab(a)
this.a.bb(a)
this.b.toString
a.cI()},
$iao:1}
M.cY.prototype={
X:function(a){var u
H.d(a,"$iu")
u=this.x
if(u!=null)u.C(a)},
aV:function(){return this.X(null)},
h6:function(a,b){var u,t,s,r,q,p,o,n
u=E.a8
H.f(b,"$ii",[u],"$ai")
for(t=b.length,s=this.gW(),r={func:1,ret:-1,args:[D.u]},q=[r],p=0;p<b.length;b.length===t||(0,H.x)(b),++p){o=b[p]
if(o!=null){n=o.z
if(n==null){n=new D.bt()
n.sad(null)
n.saZ(null)
n.c=null
n.d=0
o.z=n}H.j(s,r)
if(n.a==null)n.sad(H.b([],q))
n=n.a;(n&&C.a).h(n,s)}}u=new D.be(a,b,this,[u])
u.b=!0
this.X(u)},
h8:function(a,b){var u,t,s
u=E.a8
H.f(b,"$ii",[u],"$ai")
for(t=b.gO(b),s=this.gW();t.u();)t.gE().gn().U(0,s)
u=new D.bf(a,b,this,[u])
u.b=!0
this.X(u)},
sb2:function(a){var u,t
if(a==null)a=X.jc(2000,1.0471975511965976,null,0.1,null)
u=this.a
if(u!==a){if(u!=null)u.gn().U(0,this.gW())
t=this.a
this.a=a
a.gn().h(0,this.gW())
u=new D.D("camera",t,this.a,this,[X.bp])
u.b=!0
this.X(u)}},
sb7:function(a,b){var u,t
u=this.b
if(u!==b){if(u!=null)u.gn().U(0,this.gW())
t=this.b
this.b=b
b.gn().h(0,this.gW())
u=new D.D("target",t,this.b,this,[X.ci])
u.b=!0
this.X(u)}},
sb8:function(a){var u,t
u=this.c
if(u!=a){if(u!=null)u.gn().U(0,this.gW())
t=this.c
this.c=a
if(a!=null)a.gn().h(0,this.gW())
u=new D.D("technique",t,this.c,this,[O.bi])
u.b=!0
this.X(u)}},
gn:function(){var u=this.x
if(u==null){u=D.E()
this.x=u}return u},
ab:function(a){var u
a.cJ(this.c)
this.b.a0(a)
this.a.a0(a)
u=this.c
if(u!=null)u.am(a)
for(u=this.d.a,u=new J.ac(u,u.length,0,[H.v(u,0)]);u.u();)u.d.am(a)
for(u=this.d.a,u=new J.ac(u,u.length,0,[H.v(u,0)]);u.u();)u.d.ab(a)
this.a.toString
a.cy.aD()
a.db.aD()
this.b.toString
a.cI()},
sfp:function(a,b){this.d=H.f(b,"$iU",[E.a8],"$aU")},
$iao:1}
M.ao.prototype={}
A.cO.prototype={}
A.ei.prototype={
l:function(a,b){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<t;++s){r=u[s]
if(r.b===b)return r}return},
jk:function(){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<u.length;u.length===t||(0,H.x)(u),++s){r=u[s]
C.b.dQ(r.a,r.c)}},
dM:function(){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<u.length;u.length===t||(0,H.x)(u),++s){r=u[s]
C.b.dN(r.a,r.c)}}}
A.df.prototype={
eY:function(a6,a7){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5
this.z=a6
u=new P.aZ("")
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
a6.iv(u)
a6.iC(u)
a6.iw(u)
a6.iK(u)
a6.iL(u)
a6.iE(u)
a6.iP(u)
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
u=new P.aZ("")
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
q.iz(u)
q.iu(u)
q.ix(u)
q.iA(u)
q.iI(u)
o=q.dy
if(o){m=u.a+="// === Enviromental ===\n"
m+="\n"
u.a=m
m+="uniform samplerCube envSampler;\n"
u.a=m
m+="uniform int nullEnvTxt;\n"
u.a=m
u.a=m+"\n"
q.iG(u)
q.iH(u)}q.iD(u)
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
k=H.b([],[P.m])
if(q.b!==C.c)C.a.h(k,"ambient()")
if(q.c!==C.c)C.a.h(k,"diffuse(norm, litVec)")
if(q.d!==C.c)C.a.h(k,"invDiffuse(norm, litVec)")
if(q.e!==C.c)C.a.h(k,"specular(norm, litVec)")
m=u.a+="   return litClr*("+C.a.k(k," + ")+");\n"
m+="}\n"
u.a=m
u.a=m+"\n"
q.iy(u)
q.iF(u)
q.iJ(u)
q.iM(u)
q.iN(u)
q.iO(u)
q.iB(u)}m=u.a+="// === Main ===\n"
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
i="vec4("+C.a.k(j," + ")+", alpha);"
q=u.a
if(n){q+="   gl_FragColor = colorMat*"+i+"\n"
u.a=q}else{q+="   gl_FragColor = "+i+"\n"
u.a=q}q+="}\n"
u.a=q
this.ec(s.charCodeAt(0)==0?s:s,q.charCodeAt(0)==0?q:q)
this.Q=this.x.l(0,"posAttr")
this.cx=this.x.l(0,"normAttr")
this.ch=this.x.l(0,"binmAttr")
this.cy=this.x.l(0,"txt2DAttr")
this.db=this.x.l(0,"txtCubeAttr")
this.dx=this.x.l(0,"bendAttr")
if(a6.fr)this.id=H.c(this.y.m(0,"invViewMat"),"$iah")
if(t)this.dy=H.c(this.y.m(0,"objMat"),"$iah")
if(r)this.fr=H.c(this.y.m(0,"viewObjMat"),"$iah")
this.fy=H.c(this.y.m(0,"projViewObjMat"),"$iah")
if(a6.x2)this.k1=H.c(this.y.m(0,"txt2DMat"),"$ico")
if(a6.y1)this.k2=H.c(this.y.m(0,"txtCubeMat"),"$iah")
if(a6.y2)this.k3=H.c(this.y.m(0,"colorMat"),"$iah")
this.sfl(H.b([],[A.ah]))
t=a6.as
if(t>0){this.k4=H.d(this.y.m(0,"bendMatCount"),"$iG")
for(h=0;h<t;++h){s=this.r1
r=this.y
q="bendValues["+h+"].mat"
g=r.l(0,q)
if(g==null)H.q(P.p("Required uniform value, "+q+", was not defined or used in shader."));(s&&C.a).h(s,H.c(g,"$iah"))}}t=a6.a
if(t!==C.c){this.r2=H.c(this.y.m(0,"emissionClr"),"$iC")
switch(t){case C.c:break
case C.f:break
case C.d:this.rx=H.c(this.y.m(0,"emissionTxt"),"$iaa")
this.x1=H.c(this.y.m(0,"nullEmissionTxt"),"$iG")
break
case C.e:this.ry=H.c(this.y.m(0,"emissionTxt"),"$ia5")
this.x1=H.c(this.y.m(0,"nullEmissionTxt"),"$iG")
break}}t=a6.b
if(t!==C.c){this.x2=H.c(this.y.m(0,"ambientClr"),"$iC")
switch(t){case C.c:break
case C.f:break
case C.d:this.y1=H.c(this.y.m(0,"ambientTxt"),"$iaa")
this.as=H.c(this.y.m(0,"nullAmbientTxt"),"$iG")
break
case C.e:this.y2=H.c(this.y.m(0,"ambientTxt"),"$ia5")
this.as=H.c(this.y.m(0,"nullAmbientTxt"),"$iG")
break}}t=a6.c
if(t!==C.c){this.ak=H.c(this.y.m(0,"diffuseClr"),"$iC")
switch(t){case C.c:break
case C.f:break
case C.d:this.bn=H.c(this.y.m(0,"diffuseTxt"),"$iaa")
this.bo=H.c(this.y.m(0,"nullDiffuseTxt"),"$iG")
break
case C.e:this.dR=H.c(this.y.m(0,"diffuseTxt"),"$ia5")
this.bo=H.c(this.y.m(0,"nullDiffuseTxt"),"$iG")
break}}t=a6.d
if(t!==C.c){this.bp=H.c(this.y.m(0,"invDiffuseClr"),"$iC")
switch(t){case C.c:break
case C.f:break
case C.d:this.dS=H.c(this.y.m(0,"invDiffuseTxt"),"$iaa")
this.bq=H.c(this.y.m(0,"nullInvDiffuseTxt"),"$iG")
break
case C.e:this.dT=H.c(this.y.m(0,"invDiffuseTxt"),"$ia5")
this.bq=H.c(this.y.m(0,"nullInvDiffuseTxt"),"$iG")
break}}t=a6.e
if(t!==C.c){this.bt=H.c(this.y.m(0,"shininess"),"$iQ")
this.br=H.c(this.y.m(0,"specularClr"),"$iC")
switch(t){case C.c:break
case C.f:break
case C.d:this.dU=H.c(this.y.m(0,"specularTxt"),"$iaa")
this.bs=H.c(this.y.m(0,"nullSpecularTxt"),"$iG")
break
case C.e:this.dV=H.c(this.y.m(0,"specularTxt"),"$ia5")
this.bs=H.c(this.y.m(0,"nullSpecularTxt"),"$iG")
break}}switch(a6.f){case C.c:break
case C.f:break
case C.d:this.dW=H.c(this.y.m(0,"bumpTxt"),"$iaa")
this.bu=H.c(this.y.m(0,"nullBumpTxt"),"$iG")
break
case C.e:this.dX=H.c(this.y.m(0,"bumpTxt"),"$ia5")
this.bu=H.c(this.y.m(0,"nullBumpTxt"),"$iG")
break}if(a6.dy){this.dY=H.c(this.y.m(0,"envSampler"),"$ia5")
this.dZ=H.c(this.y.m(0,"nullEnvTxt"),"$iG")
t=a6.r
if(t!==C.c){this.bv=H.c(this.y.m(0,"reflectClr"),"$iC")
switch(t){case C.c:break
case C.f:break
case C.d:this.e_=H.c(this.y.m(0,"reflectTxt"),"$iaa")
this.bw=H.c(this.y.m(0,"nullReflectTxt"),"$iG")
break
case C.e:this.e0=H.c(this.y.m(0,"reflectTxt"),"$ia5")
this.bw=H.c(this.y.m(0,"nullReflectTxt"),"$iG")
break}}t=a6.x
if(t!==C.c){this.bx=H.c(this.y.m(0,"refraction"),"$iQ")
this.by=H.c(this.y.m(0,"refractClr"),"$iC")
switch(t){case C.c:break
case C.f:break
case C.d:this.e1=H.c(this.y.m(0,"refractTxt"),"$iaa")
this.bz=H.c(this.y.m(0,"nullRefractTxt"),"$iG")
break
case C.e:this.e2=H.c(this.y.m(0,"refractTxt"),"$ia5")
this.bz=H.c(this.y.m(0,"nullRefractTxt"),"$iG")
break}}}t=a6.y
if(t!==C.c){this.bA=H.c(this.y.m(0,"alpha"),"$iQ")
switch(t){case C.c:break
case C.f:break
case C.d:this.e3=H.c(this.y.m(0,"alphaTxt"),"$iaa")
this.bB=H.c(this.y.m(0,"nullAlphaTxt"),"$iG")
break
case C.e:this.e4=H.c(this.y.m(0,"alphaTxt"),"$ia5")
this.bB=H.c(this.y.m(0,"nullAlphaTxt"),"$iG")
break}}this.sf7(H.b([],[A.cn]))
this.sf8(H.b([],[A.cp]))
this.sf9(H.b([],[A.cq]))
this.sfa(H.b([],[A.cr]))
this.sfb(H.b([],[A.cs]))
this.sfc(H.b([],[A.ct]))
if(a6.k2){t=a6.z
if(t>0){this.e5=H.d(this.y.m(0,"dirLightCount"),"$iG")
for(h=0;h<t;++h){s=this.y
r="dirLights["+h+"].viewDir"
g=s.l(0,r)
if(g==null)H.q(P.p("Required uniform value, "+r+", was not defined or used in shader."))
H.c(g,"$iC")
s=this.y
r="dirLights["+h+"].color"
f=s.l(0,r)
if(f==null)H.q(P.p("Required uniform value, "+r+", was not defined or used in shader."))
H.c(f,"$iC")
s=this.cr;(s&&C.a).h(s,new A.cn(h,g,f))}}t=a6.Q
if(t>0){this.e6=H.d(this.y.m(0,"pntLightCount"),"$iG")
for(h=0;h<t;++h){s=this.y
r="pntLights["+h+"].point"
g=s.l(0,r)
if(g==null)H.q(P.p("Required uniform value, "+r+", was not defined or used in shader."))
H.c(g,"$iC")
s=this.y
r="pntLights["+h+"].viewPnt"
f=s.l(0,r)
if(f==null)H.q(P.p("Required uniform value, "+r+", was not defined or used in shader."))
H.c(f,"$iC")
s=this.y
r="pntLights["+h+"].color"
e=s.l(0,r)
if(e==null)H.q(P.p("Required uniform value, "+r+", was not defined or used in shader."))
H.c(e,"$iC")
s=this.y
r="pntLights["+h+"].att0"
d=s.l(0,r)
if(d==null)H.q(P.p("Required uniform value, "+r+", was not defined or used in shader."))
H.c(d,"$iQ")
s=this.y
r="pntLights["+h+"].att1"
c=s.l(0,r)
if(c==null)H.q(P.p("Required uniform value, "+r+", was not defined or used in shader."))
H.c(c,"$iQ")
s=this.y
r="pntLights["+h+"].att2"
b=s.l(0,r)
if(b==null)H.q(P.p("Required uniform value, "+r+", was not defined or used in shader."))
H.c(b,"$iQ")
s=this.cs;(s&&C.a).h(s,new A.cp(h,g,f,e,d,c,b))}}t=a6.ch
if(t>0){this.e7=H.d(this.y.m(0,"spotLightCount"),"$iG")
for(h=0;h<t;++h){s=this.y
r="spotLights["+h+"].objPnt"
g=s.l(0,r)
if(g==null)H.q(P.p("Required uniform value, "+r+", was not defined or used in shader."))
H.c(g,"$iC")
s=this.y
r="spotLights["+h+"].objDir"
f=s.l(0,r)
if(f==null)H.q(P.p("Required uniform value, "+r+", was not defined or used in shader."))
H.c(f,"$iC")
s=this.y
r="spotLights["+h+"].viewPnt"
e=s.l(0,r)
if(e==null)H.q(P.p("Required uniform value, "+r+", was not defined or used in shader."))
H.c(e,"$iC")
s=this.y
r="spotLights["+h+"].color"
d=s.l(0,r)
if(d==null)H.q(P.p("Required uniform value, "+r+", was not defined or used in shader."))
H.c(d,"$iC")
s=this.y
r="spotLights["+h+"].cutoff"
c=s.l(0,r)
if(c==null)H.q(P.p("Required uniform value, "+r+", was not defined or used in shader."))
H.c(c,"$iQ")
s=this.y
r="spotLights["+h+"].coneAngle"
b=s.l(0,r)
if(b==null)H.q(P.p("Required uniform value, "+r+", was not defined or used in shader."))
H.c(b,"$iQ")
s=this.y
r="spotLights["+h+"].att0"
a=s.l(0,r)
if(a==null)H.q(P.p("Required uniform value, "+r+", was not defined or used in shader."))
H.c(a,"$iQ")
s=this.y
r="spotLights["+h+"].att1"
a0=s.l(0,r)
if(a0==null)H.q(P.p("Required uniform value, "+r+", was not defined or used in shader."))
H.c(a0,"$iQ")
s=this.y
r="spotLights["+h+"].att2"
a1=s.l(0,r)
if(a1==null)H.q(P.p("Required uniform value, "+r+", was not defined or used in shader."))
H.c(a1,"$iQ")
s=this.ct;(s&&C.a).h(s,new A.cq(h,g,f,e,d,c,b,a,a0,a1))}}t=a6.cx
if(t>0){this.e8=H.d(this.y.m(0,"txtDirLightCount"),"$iG")
for(h=0;h<t;++h){s=this.y
r="txtDirLights["+h+"].objUp"
g=s.l(0,r)
if(g==null)H.q(P.p("Required uniform value, "+r+", was not defined or used in shader."))
H.c(g,"$iC")
s=this.y
r="txtDirLights["+h+"].objRight"
f=s.l(0,r)
if(f==null)H.q(P.p("Required uniform value, "+r+", was not defined or used in shader."))
H.c(f,"$iC")
s=this.y
r="txtDirLights["+h+"].objDir"
e=s.l(0,r)
if(e==null)H.q(P.p("Required uniform value, "+r+", was not defined or used in shader."))
H.c(e,"$iC")
s=this.y
r="txtDirLights["+h+"].viewDir"
d=s.l(0,r)
if(d==null)H.q(P.p("Required uniform value, "+r+", was not defined or used in shader."))
H.c(d,"$iC")
s=this.y
r="txtDirLights["+h+"].color"
c=s.l(0,r)
if(c==null)H.q(P.p("Required uniform value, "+r+", was not defined or used in shader."))
H.c(c,"$iC")
s=this.y
r="txtDirLights["+h+"].nullTxt"
b=s.l(0,r)
if(b==null)H.q(P.p("Required uniform value, "+r+", was not defined or used in shader."))
H.c(b,"$iG")
s=this.y
r="txtDirLightsTxt2D"+h
a=s.l(0,r)
if(a==null)H.q(P.p("Required uniform value, "+r+", was not defined or used in shader."))
H.c(a,"$iaa")
s=this.cu;(s&&C.a).h(s,new A.cr(h,g,f,e,d,c,a,b))}}t=a6.cy
if(t>0){this.e9=H.d(this.y.m(0,"txtPntLightCount"),"$iG")
for(h=0;h<t;++h){s=this.y
r="txtPntLights["+h+"].point"
g=s.l(0,r)
if(g==null)H.q(P.p("Required uniform value, "+r+", was not defined or used in shader."))
H.c(g,"$iC")
s=this.y
r="txtPntLights["+h+"].viewPnt"
f=s.l(0,r)
if(f==null)H.q(P.p("Required uniform value, "+r+", was not defined or used in shader."))
H.c(f,"$iC")
s=this.y
r="txtPntLights["+h+"].invViewRotMat"
e=s.l(0,r)
if(e==null)H.q(P.p("Required uniform value, "+r+", was not defined or used in shader."))
H.c(e,"$ico")
s=this.y
r="txtPntLights["+h+"].color"
d=s.l(0,r)
if(d==null)H.q(P.p("Required uniform value, "+r+", was not defined or used in shader."))
H.c(d,"$iC")
s=this.y
r="txtPntLights["+h+"].nullTxt"
c=s.l(0,r)
if(c==null)H.q(P.p("Required uniform value, "+r+", was not defined or used in shader."))
H.c(c,"$iG")
s=this.y
r="txtPntLights["+h+"].att0"
b=s.l(0,r)
if(b==null)H.q(P.p("Required uniform value, "+r+", was not defined or used in shader."))
H.c(b,"$iQ")
s=this.y
r="txtPntLights["+h+"].att1"
a=s.l(0,r)
if(a==null)H.q(P.p("Required uniform value, "+r+", was not defined or used in shader."))
H.c(a,"$iQ")
s=this.y
r="txtPntLights["+h+"].att2"
a0=s.l(0,r)
if(a0==null)H.q(P.p("Required uniform value, "+r+", was not defined or used in shader."))
H.c(a0,"$iQ")
s=this.y
r="txtPntLightsTxtCube"+h
a1=s.l(0,r)
if(a1==null)H.q(P.p("Required uniform value, "+r+", was not defined or used in shader."))
H.c(a1,"$ia5")
s=this.cv;(s&&C.a).h(s,new A.cs(h,g,f,e,d,a1,c,b,a,a0))}}t=a6.db
if(t>0){this.ea=H.d(this.y.m(0,"txtSpotLightCount"),"$iG")
for(h=0;h<t;++h){s=this.y
r="txtSpotLights["+h+"].objPnt"
g=s.l(0,r)
if(g==null)H.q(P.p("Required uniform value, "+r+", was not defined or used in shader."))
H.c(g,"$iC")
s=this.y
r="txtSpotLights["+h+"].objDir"
f=s.l(0,r)
if(f==null)H.q(P.p("Required uniform value, "+r+", was not defined or used in shader."))
H.c(f,"$iC")
s=this.y
r="txtSpotLights["+h+"].objUp"
e=s.l(0,r)
if(e==null)H.q(P.p("Required uniform value, "+r+", was not defined or used in shader."))
H.c(e,"$iC")
s=this.y
r="txtSpotLights["+h+"].objRight"
d=s.l(0,r)
if(d==null)H.q(P.p("Required uniform value, "+r+", was not defined or used in shader."))
H.c(d,"$iC")
s=this.y
r="txtSpotLights["+h+"].viewPnt"
c=s.l(0,r)
if(c==null)H.q(P.p("Required uniform value, "+r+", was not defined or used in shader."))
H.c(c,"$iC")
s=this.y
r="txtSpotLights["+h+"].nullTxt"
b=s.l(0,r)
if(b==null)H.q(P.p("Required uniform value, "+r+", was not defined or used in shader."))
H.c(b,"$iG")
s=this.y
r="txtSpotLights["+h+"].color"
a=s.l(0,r)
if(a==null)H.q(P.p("Required uniform value, "+r+", was not defined or used in shader."))
H.c(a,"$iC")
s=this.y
r="txtSpotLights["+h+"].tuScalar"
a0=s.l(0,r)
if(a0==null)H.q(P.p("Required uniform value, "+r+", was not defined or used in shader."))
H.c(a0,"$iQ")
s=this.y
r="txtSpotLights["+h+"].tvScalar"
a1=s.l(0,r)
if(a1==null)H.q(P.p("Required uniform value, "+r+", was not defined or used in shader."))
H.c(a1,"$iQ")
s=this.y
r="txtSpotLights["+h+"].att0"
a2=s.l(0,r)
if(a2==null)H.q(P.p("Required uniform value, "+r+", was not defined or used in shader."))
H.c(a2,"$iQ")
s=this.y
r="txtSpotLights["+h+"].att1"
a3=s.l(0,r)
if(a3==null)H.q(P.p("Required uniform value, "+r+", was not defined or used in shader."))
H.c(a3,"$iQ")
s=this.y
r="txtSpotLights["+h+"].att2"
a4=s.l(0,r)
if(a4==null)H.q(P.p("Required uniform value, "+r+", was not defined or used in shader."))
H.c(a4,"$iQ")
s=this.y
r="txtSpotLightsTxt2D"+h
a5=s.l(0,r)
if(a5==null)H.q(P.p("Required uniform value, "+r+", was not defined or used in shader."))
H.c(a5,"$iaa")
s=this.cw;(s&&C.a).h(s,new A.ct(h,g,f,e,d,c,a5,b,a,a0,a1,a2,a3,a4))}}}},
aj:function(a,b,c){if(c==null||!c.d)C.b.K(b.a,b.d,1)
else{a.eN(c)
C.b.K(b.a,b.d,0)}},
ae:function(a,b,c){C.b.K(b.a,b.d,1)},
sfl:function(a){this.r1=H.f(a,"$ia",[A.ah],"$aa")},
sf7:function(a){this.cr=H.f(a,"$ia",[A.cn],"$aa")},
sf8:function(a){this.cs=H.f(a,"$ia",[A.cp],"$aa")},
sf9:function(a){this.ct=H.f(a,"$ia",[A.cq],"$aa")},
sfa:function(a){this.cu=H.f(a,"$ia",[A.cr],"$aa")},
sfb:function(a){this.cv=H.f(a,"$ia",[A.cs],"$aa")},
sfc:function(a){this.cw=H.f(a,"$ia",[A.ct],"$aa")}}
A.f3.prototype={
iv:function(a){var u,t,s
if(!this.x1)return
u=a.a+="struct BendingValue\n"
u+="{\n"
a.a=u
u+="   mat4 mat;\n"
a.a=u
u+="};\n"
a.a=u
a.a=u+"uniform int bendMatCount;\n"
u=a.a+="uniform BendingValue bendValues["+this.as+"];\n"
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
iC:function(a){var u
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
iw:function(a){var u
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
iK:function(a){var u,t
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
iL:function(a){var u,t
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
iE:function(a){var u
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
iP:function(a){var u
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
if(b===C.c)return
u=a.a+="uniform vec3 "+c+"Clr;\n"
if(b===C.f)return
if(0>=c.length)return H.l(c,0)
u+="uniform int null"+(c[0].toUpperCase()+C.i.bc(c,1))+"Txt;\n"
a.a=u
if(b===C.d)a.a=u+("uniform sampler2D "+c+"Txt;\n")
else if(b===C.e)a.a=u+("uniform samplerCube "+c+"Txt;\n")},
iz:function(a){var u,t
u=this.a
if(u===C.c)return
t=a.a+="// === Emission ===\n"
a.a=t+"\n"
this.aw(a,u,"emission")
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
iu:function(a){var u,t
u=this.b
if(u===C.c)return
t=a.a+="// === Ambient ===\n"
a.a=t+"\n"
this.aw(a,u,"ambient")
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
ix:function(a){var u,t
u=this.c
if(u===C.c)return
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
iA:function(a){var u,t
u=this.d
if(u===C.c)return
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
iI:function(a){var u,t
u=this.e
if(u===C.c)return
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
iD:function(a){var u,t
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
iG:function(a){var u,t
u=this.r
if(u===C.c)return
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
iH:function(a){var u,t
u=this.x
if(u===C.c)return
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
iy:function(a){var u,t
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
iF:function(a){var u,t
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
iJ:function(a){var u,t
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
iM:function(a){var u,t,s
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
iN:function(a){var u,t,s
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
iO:function(a){var u,t,s
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
iB:function(a){var u
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
i:function(a){return this.ak}}
A.cn.prototype={}
A.cr.prototype={}
A.cp.prototype={}
A.cs.prototype={}
A.cq.prototype={}
A.ct.prototype={}
A.ce.prototype={
cW:function(a,b){this.c=null
this.d=null
this.e=null
this.f=null
this.r=null
this.x=null
this.y=null},
ec:function(a,b){var u,t,s
this.c=a
this.d=b
this.e=this.dc(a,35633)
this.f=this.dc(this.d,35632)
u=this.a
t=u.createProgram()
this.r=t
C.b.dD(u,t,this.e)
C.b.dD(u,this.r,this.f)
C.b.ju(u,this.r)
if(!H.iD(C.b.bN(u,this.r,35714))){s=C.b.eE(u,this.r)
C.b.jc(u,this.r)
H.q(P.p("Failed to link shader: "+H.e(s)))}this.i4()
this.i6()},
a0:function(a){C.b.cN(a.a,this.r)
this.x.jk()},
dc:function(a,b){var u,t,s
u=this.a
t=C.b.ja(u,b)
C.b.eP(u,t,a)
C.b.j3(u,t)
if(!H.iD(C.b.eG(u,t,35713))){s=C.b.eF(u,t)
C.b.jd(u,t)
throw H.h(P.p("Error compiling shader '"+H.e(t)+"': "+H.e(s)))}return t},
i4:function(){var u,t,s,r,q,p
u=H.b([],[A.cO])
t=this.a
s=H.a0(C.b.bN(t,this.r,35721))
if(typeof s!=="number")return H.B(s)
r=0
for(;r<s;++r){q=C.b.ey(t,this.r,r)
p=C.b.eA(t,this.r,q.name)
C.a.h(u,new A.cO(t,q.name,p))}this.x=new A.ei(u)},
i6:function(){var u,t,s,r,q,p
u=H.b([],[A.dL])
t=this.a
s=H.a0(C.b.bN(t,this.r,35718))
if(typeof s!=="number")return H.B(s)
r=0
for(;r<s;++r){q=C.b.ez(t,this.r,r)
p=C.b.eH(t,this.r,q.name)
C.a.h(u,this.jb(q.type,q.size,q.name,p))}this.y=new A.fY(u)},
aL:function(a,b,c){var u,t
u=this.a
t=this.r
if(a===1)return new A.G(u,t,b,c)
else return A.iv(u,t,b,a,c)},
ft:function(a,b,c){var u,t
u=this.a
t=this.r
if(a===1)return new A.aa(u,t,b,c)
else return A.iv(u,t,b,a,c)},
fu:function(a,b,c){var u,t
u=this.a
t=this.r
if(a===1)return new A.a5(u,t,b,c)
else return A.iv(u,t,b,a,c)},
bj:function(a,b){return new P.dZ(a+" uniform variables are unsupported by all browsers.\n"+("Please change the type of "+H.e(b)+"."))},
jb:function(a,b,c,d){switch(a){case 5120:return this.aL(b,c,d)
case 5121:return this.aL(b,c,d)
case 5122:return this.aL(b,c,d)
case 5123:return this.aL(b,c,d)
case 5124:return this.aL(b,c,d)
case 5125:return this.aL(b,c,d)
case 5126:return new A.Q(this.a,this.r,c,d)
case 35664:return new A.fT(this.a,this.r,c,d)
case 35665:return new A.C(this.a,this.r,c,d)
case 35666:return new A.fW(this.a,this.r,c,d)
case 35667:return new A.fU(this.a,this.r,c,d)
case 35668:return new A.fV(this.a,this.r,c,d)
case 35669:return new A.fX(this.a,this.r,c,d)
case 35674:return new A.fZ(this.a,this.r,c,d)
case 35675:return new A.co(this.a,this.r,c,d)
case 35676:return new A.ah(this.a,this.r,c,d)
case 35678:return this.ft(b,c,d)
case 35680:return this.fu(b,c,d)
case 35670:throw H.h(this.bj("BOOL",c))
case 35671:throw H.h(this.bj("BOOL_VEC2",c))
case 35672:throw H.h(this.bj("BOOL_VEC3",c))
case 35673:throw H.h(this.bj("BOOL_VEC4",c))
default:throw H.h(P.p("Unknown uniform variable type "+H.e(a)+" for "+H.e(c)+"."))}}}
A.bs.prototype={
i:function(a){return this.b}}
A.dx.prototype={}
A.dL.prototype={}
A.fY.prototype={
l:function(a,b){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<t;++s){r=u[s]
if(r.c===b)return r}return},
m:function(a,b){var u=this.l(0,b)
if(u==null)throw H.h(P.p("Required uniform value, "+b+", was not defined or used in shader."))
return u},
i:function(a){return this.L()},
jo:function(a){var u,t,s,r
for(u=this.a,t=u.length,s="",r=0;r<u.length;u.length===t||(0,H.x)(u),++r)s+=u[r].i(0)+a
return s},
L:function(){return this.jo("\n")}}
A.G.prototype={
i:function(a){return"Uniform1i: "+H.e(this.c)}}
A.fU.prototype={
i:function(a){return"Uniform2i: "+H.e(this.c)}}
A.fV.prototype={
i:function(a){return"Uniform3i: "+H.e(this.c)}}
A.fX.prototype={
i:function(a){return"Uniform4i: "+H.e(this.c)}}
A.fS.prototype={
i:function(a){return"Uniform1iv: "+H.e(this.c)},
sis:function(a){this.e=H.f(a,"$ia",[P.y],"$aa")}}
A.Q.prototype={
i:function(a){return"Uniform1f: "+H.e(this.c)}}
A.fT.prototype={
i:function(a){return"Uniform2f: "+H.e(this.c)}}
A.C.prototype={
i:function(a){return"Uniform3f: "+H.e(this.c)}}
A.fW.prototype={
i:function(a){return"Uniform4f: "+H.e(this.c)}}
A.fZ.prototype={
i:function(a){return"Uniform1Mat2 "+H.e(this.c)}}
A.co.prototype={
ai:function(a){var u=new Float32Array(H.cF(H.f(a,"$ia",[P.w],"$aa")))
C.b.eu(this.a,this.d,!1,u)},
i:function(a){return"UniformMat3: "+H.e(this.c)}}
A.ah.prototype={
ai:function(a){var u=new Float32Array(H.cF(H.f(a,"$ia",[P.w],"$aa")))
C.b.ev(this.a,this.d,!1,u)},
i:function(a){return"UniformMat4: "+H.e(this.c)}}
A.aa.prototype={
eN:function(a){var u,t,s
u=a.d
t=this.a
s=this.d
if(!u)C.b.K(t,s,0)
else C.b.K(t,s,a.a)},
i:function(a){return"UniformSampler2D: "+H.e(this.c)}}
A.a5.prototype={
eO:function(a){var u,t,s
u=a==null||a.d<6
t=this.a
s=this.d
if(u)C.b.K(t,s,0)
else C.b.K(t,s,a.a)},
i:function(a){return"UniformSamplerCube: "+H.e(this.c)}}
F.hT.prototype={
$3:function(a,b,c){var u,t,s
u=this.a
t=u.a.cD(u.b,b).cD(u.d.cD(u.c,b),c)
u=new V.a9(t.a,t.b,t.c)
if(!J.a_(a.f,u)){a.f=u
u=a.a
if(u!=null)u.a3()}a.sjY(t.v(0,Math.sqrt(t.D(t))))
u=1-b
s=1-c
s=new V.aY(this.b+b*c,this.c+u*c,this.d+b*s,this.e+u*s)
if(!J.a_(a.cx,s)){a.cx=s
u=a.a
if(u!=null)u.a3()}},
$S:37}
F.X.prototype={
fk:function(){var u,t,s,r,q
u=this.a
t=u==null?null:u.r
u=this.b
s=u==null?null:u.r
u=this.c
r=u==null?null:u.r
q=V.dT()
if(t!=null)q=q.F(0,t)
if(s!=null)q=q.F(0,s)
if(r!=null)q=q.F(0,r)
if(q.ed())return
return q.v(0,Math.sqrt(q.D(q)))},
fo:function(){var u,t,s,r,q
u=this.a
t=u==null?null:u.f
u=this.b
s=u==null?null:u.f
u=this.c
r=u==null?null:u.f
if(t==null||s==null||r==null)return
u=s.I(0,t)
u=new V.K(u.a,u.b,u.c)
q=u.v(0,Math.sqrt(u.D(u)))
u=r.I(0,t)
u=new V.K(u.a,u.b,u.c)
u=q.b3(u.v(0,Math.sqrt(u.D(u))))
return u.v(0,Math.sqrt(u.D(u)))},
cl:function(){if(this.d!=null)return!0
var u=this.fk()
if(u==null){u=this.fo()
if(u==null)return!1}this.d=u
this.a.a.a3()
return!0},
fj:function(){var u,t,s,r,q
u=this.a
t=u==null?null:u.x
u=this.b
s=u==null?null:u.x
u=this.c
r=u==null?null:u.x
q=V.dT()
if(t!=null)q=q.F(0,t)
if(s!=null)q=q.F(0,s)
if(r!=null)q=q.F(0,r)
if(q.ed())return
return q.v(0,Math.sqrt(q.D(q)))},
fn:function(){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f
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
if(Math.abs(i-0)<$.J().a){u=m.I(0,p)
u=new V.K(u.a,u.b,u.c)
h=u.v(0,Math.sqrt(u.D(u)))
if(j.a-k.a<0)h=h.P(0)}else{g=(u-l.b)/i
u=m.I(0,p)
u=new V.a9(u.a*g+p.a,u.b*g+p.b,u.c*g+p.c).I(0,s)
u=new V.K(u.a,u.b,u.c)
h=u.v(0,Math.sqrt(u.D(u)))
j=j.a
k=k.a
if((j-k)*g+k-l.a<0)h=h.P(0)}u=this.d
if(u!=null){f=u.v(0,Math.sqrt(u.D(u)))
u=f.b3(h)
u=u.v(0,Math.sqrt(u.D(u))).b3(f)
h=u.v(0,Math.sqrt(u.D(u)))}return h},
cj:function(){if(this.e!=null)return!0
var u=this.fj()
if(u==null){u=this.fn()
if(u==null)return!1}this.e=u
this.a.a.a3()
return!0},
t:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.L()},
w:function(a){var u,t
u=this.a
if(u==null||this.b==null||this.c==null)return a+"disposed"
t=a+C.i.ah(J.aj(u.e),0)+", "+C.i.ah(J.aj(this.b.e),0)+", "+C.i.ah(J.aj(this.c.e),0)+" {"
u=this.d
t=u!=null?t+(u.i(0)+", "):t+"-, "
u=this.e
return u!=null?t+(u.i(0)+"}"):t+"-}"},
L:function(){return this.w("")}}
F.aV.prototype={
t:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.L()},
w:function(a){var u=this.a
if(u==null||this.b==null)return a+"disposed"
return a+C.i.ah(J.aj(u.e),0)+", "+C.i.ah(J.aj(this.b.e),0)},
L:function(){return this.w("")}}
F.bh.prototype={
t:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.L()},
w:function(a){var u=this.a
if(u==null)return a+"disposed"
return a+C.i.ah(J.aj(u.e),0)},
L:function(){return this.w("")}}
F.dv.prototype={
gn:function(){var u=this.e
if(u==null){u=D.E()
this.e=u}return u},
jz:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i,h
u=this.e
if(u!=null)++u.d
a.a.a_()
t=this.a.c.length
for(u=a.a.c,s=u.length,r=0;r<u.length;u.length===s||(0,H.x)(u),++r){q=u[r]
this.a.h(0,q.j6())}this.a.a_()
for(u=a.b.b,s=u.length,r=0;r<u.length;u.length===s||(0,H.x)(u),++r){p=u[r]
o=this.a
n=p.a
n.a.a.a_()
n=n.e
if(typeof n!=="number")return n.F()
n+=t
o=o.c
if(n>=o.length)return H.l(o,n)
m=o[n]
this.b.a.a.h(0,m)
n=new F.bh()
if(m.a==null)H.q(P.p("May not create a point with a vertex which is not attached to a shape."))
n.a=m
C.a.h(m.b.b,n)
C.a.h(n.a.a.b.b,n)
o=n.a.a.e
if(o!=null)o.C(null)}for(u=a.c.b,s=u.length,r=0;r<u.length;u.length===s||(0,H.x)(u),++r){l=u[r]
o=this.a
n=l.a
n.a.a.a_()
n=n.e
if(typeof n!=="number")return n.F()
n+=t
o=o.c
if(n>=o.length)return H.l(o,n)
k=o[n]
n=this.a
o=l.b
o.a.a.a_()
o=o.e
if(typeof o!=="number")return o.F()
o+=t
n=n.c
if(o>=n.length)return H.l(n,o)
j=n[o]
o=this.c.a
o.a.h(0,k)
o.a.h(0,j)
F.kw(k,j)}for(u=a.d.b,s=u.length,r=0;r<u.length;u.length===s||(0,H.x)(u),++r){i=u[r]
o=this.a
n=i.a
n.a.a.a_()
n=n.e
if(typeof n!=="number")return n.F()
n+=t
o=o.c
if(n>=o.length)return H.l(o,n)
k=o[n]
n=this.a
o=i.b
o.a.a.a_()
o=o.e
if(typeof o!=="number")return o.F()
o+=t
n=n.c
if(o>=n.length)return H.l(n,o)
j=n[o]
o=this.a
n=i.c
n.a.a.a_()
n=n.e
if(typeof n!=="number")return n.F()
n+=t
o=o.c
if(n>=o.length)return H.l(o,n)
h=o[n]
n=this.d.a
n.a.h(0,k)
n.a.h(0,j)
n.a.h(0,h)
F.c1(k,j,h)}u=this.e
if(u!=null)u.aF()},
ay:function(){var u,t
u=this.e
if(u!=null)++u.d
t=this.d.ay()||!1
if(!this.a.ay())t=!1
u=this.e
if(u!=null)u.aF()
return t},
dH:function(a0,a1){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a
u=this.a.c.length
a1.toString
t=$.aE()
s=a1.a
r=(s&t.a)!==0?1:0
if((s&$.b1().a)!==0)++r
if((s&$.b0().a)!==0)++r
if((s&$.b2().a)!==0)++r
if((s&$.b3().a)!==0)++r
if((s&$.cK().a)!==0)++r
if((s&$.cL().a)!==0)++r
if((s&$.bQ().a)!==0)++r
if((s&$.b_().a)!==0)++r
q=a1.gcS(a1)
p=q*4
t=new Array(u*q)
t.fixed$length=Array
s=P.w
o=H.b(t,[s])
t=new Array(r)
t.fixed$length=Array
n=H.b(t,[Z.cQ])
for(m=0,l=0;l<r;++l){k=a1.iV(l)
j=k.gcS(k)
C.a.Y(n,l,new Z.cQ(k,j,m*4,p,0))
for(i=0;i<u;++i){t=this.a.c
if(i>=t.length)return H.l(t,i)
h=t[i].jv(k)
g=m+i*q
for(f=0;f<h.length;++f){C.a.Y(o,g,h[f]);++g}}m+=j}H.f(o,"$ia",[s],"$aa")
t=a0.a
e=t.createBuffer()
C.b.ar(t,34962,e)
C.b.dG(t,34962,new Float32Array(H.cF(o)),35044)
C.b.ar(t,34962,null)
d=new Z.bV(new Z.dU(34962,e),n,a1)
d.sfJ(H.b([],[Z.bd]))
if(this.b.b.length!==0){s=P.y
c=H.b([],[s])
for(l=0;b=this.b.b,l<b.length;++l){b=b[l].a
b.a.a.a_()
C.a.h(c,b.e)}a=Z.iw(t,34963,H.f(c,"$ia",[s],"$aa"))
C.a.h(d.b,new Z.bd(0,c.length,a))}if(this.c.b.length!==0){s=P.y
c=H.b([],[s])
for(l=0;b=this.c.b,l<b.length;++l){b=b[l].a
b.a.a.a_()
C.a.h(c,b.e)
b=this.c.b
if(l>=b.length)return H.l(b,l)
b=b[l].b
b.a.a.a_()
C.a.h(c,b.e)}a=Z.iw(t,34963,H.f(c,"$ia",[s],"$aa"))
C.a.h(d.b,new Z.bd(1,c.length,a))}if(this.d.b.length!==0){s=P.y
c=H.b([],[s])
for(l=0;b=this.d.b,l<b.length;++l){b=b[l].a
b.a.a.a_()
C.a.h(c,b.e)
b=this.d.b
if(l>=b.length)return H.l(b,l)
b=b[l].b
b.a.a.a_()
C.a.h(c,b.e)
b=this.d.b
if(l>=b.length)return H.l(b,l)
b=b[l].c
b.a.a.a_()
C.a.h(c,b.e)}a=Z.iw(t,34963,H.f(c,"$ia",[s],"$aa"))
C.a.h(d.b,new Z.bd(4,c.length,a))}return d},
i:function(a){var u=H.b([],[P.m])
if(this.a.c.length!==0){C.a.h(u,"Vertices:")
C.a.h(u,this.a.w("   "))}if(this.b.b.length!==0){C.a.h(u,"Points:")
C.a.h(u,this.b.w("   "))}if(this.c.b.length!==0){C.a.h(u,"Lines:")
C.a.h(u,this.c.w("   "))}if(this.d.b.length!==0){C.a.h(u,"Faces:")
C.a.h(u,this.d.w("   "))}return C.a.k(u,"\n")},
aQ:function(a){var u=this.e
if(u!=null)u.C(a)},
a3:function(){return this.aQ(null)},
$ilQ:1}
F.fs.prototype={
iQ:function(a){var u,t,s,r,q,p
H.f(a,"$ia",[F.aq],"$aa")
u=H.b([],[F.X])
t=a[0]
for(s=this.a,r=2;r<4;++r){q=a[r-1]
p=a[r]
s.a.h(0,t)
s.a.h(0,q)
s.a.h(0,p)
C.a.h(u,F.c1(t,q,p))}return u},
iR:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k,j,i,h
H.f(c,"$ia",[F.aq],"$aa")
u=H.b([],[F.X])
for(t=this.a,s=b,r=0,q=!1,p=1;p<a;++p,++r,++s){for(o=q,n=1;n<b;++n,s=j){m=c.length
if(r<0||r>=m)return H.l(c,r)
l=c[r];++r
if(r>=m)return H.l(c,r)
k=c[r]
j=s+1
if(j<0||j>=m)return H.l(c,j)
i=c[j]
if(s<0||s>=m)return H.l(c,s)
h=c[s]
m=t.a
if(o){m.h(0,l)
t.a.h(0,k)
t.a.h(0,i)
C.a.h(u,F.c1(l,k,i))
t.a.h(0,l)
t.a.h(0,i)
t.a.h(0,h)
C.a.h(u,F.c1(l,i,h))}else{m.h(0,k)
t.a.h(0,i)
t.a.h(0,h)
C.a.h(u,F.c1(k,i,h))
t.a.h(0,k)
t.a.h(0,h)
t.a.h(0,l)
C.a.h(u,F.c1(k,h,l))}o=!o}q=!q}return u},
gp:function(a){return this.b.length},
ay:function(){var u,t,s,r
for(u=this.b,t=u.length,s=!0,r=0;r<u.length;u.length===t||(0,H.x)(u),++r)if(!u[r].cl())s=!1
return s},
ck:function(){var u,t,s,r
for(u=this.b,t=u.length,s=!0,r=0;r<u.length;u.length===t||(0,H.x)(u),++r)if(!u[r].cj())s=!1
return s},
i:function(a){return this.L()},
w:function(a){var u,t,s,r
u=H.b([],[P.m])
for(t=this.b,s=t.length,r=0;r<t.length;t.length===s||(0,H.x)(t),++r)C.a.h(u,t[r].w(a))
return C.a.k(u,"\n")},
L:function(){return this.w("")},
sfB:function(a){this.b=H.f(a,"$ia",[F.X],"$aa")}}
F.ft.prototype={
gp:function(a){return this.b.length},
i:function(a){return this.L()},
w:function(a){var u,t,s,r
u=H.b([],[P.m])
t=this.b.length
for(s=0;s<t;++s){r=this.b
if(s>=r.length)return H.l(r,s)
C.a.h(u,r[s].w(a+(""+s+". ")))}return C.a.k(u,"\n")},
L:function(){return this.w("")},
sfK:function(a){this.b=H.f(a,"$ia",[F.aV],"$aa")}}
F.fu.prototype={
gp:function(a){return this.b.length},
i:function(a){return this.L()},
w:function(a){var u,t,s,r
u=H.b([],[P.m])
for(t=this.b,s=t.length,r=0;r<t.length;t.length===s||(0,H.x)(t),++r)C.a.h(u,t[r].w(a))
return C.a.k(u,"\n")},
L:function(){return this.w("")},
sc9:function(a){this.b=H.f(a,"$ia",[F.bh],"$aa")}}
F.aq.prototype={
cn:function(a){var u,t,s,r,q,p,o
u=this.f
t=this.r
s=this.x
r=this.y
q=this.z
p=this.Q
o=this.ch
return F.h5(this.cx,s,p,u,t,r,q,a,o)},
j6:function(){return this.cn(null)},
sjY:function(a){var u
if(!J.a_(this.z,a)){this.z=a
u=this.a
if(u!=null)u.a3()}},
jv:function(a){var u,t
if(a.t(0,$.aE())){u=this.f
t=[P.w]
if(u==null)return H.b([0,0,0],t)
else return H.b([u.a,u.b,u.c],t)}else if(a.t(0,$.b1())){u=this.r
t=[P.w]
if(u==null)return H.b([0,1,0],t)
else return H.b([u.a,u.b,u.c],t)}else if(a.t(0,$.b0())){u=this.x
t=[P.w]
if(u==null)return H.b([0,0,1],t)
else return H.b([u.a,u.b,u.c],t)}else if(a.t(0,$.b2())){u=this.y
t=[P.w]
if(u==null)return H.b([0,0],t)
else return H.b([u.a,u.b],t)}else if(a.t(0,$.b3())){u=this.z
t=[P.w]
if(u==null)return H.b([0,0,0],t)
else return H.b([u.a,u.b,u.c],t)}else if(a.t(0,$.cK())){u=this.Q
t=[P.w]
if(u==null)return H.b([1,1,1],t)
else return H.b([u.a,u.b,u.c],t)}else if(a.t(0,$.cL())){u=this.Q
t=[P.w]
if(u==null)return H.b([1,1,1,1],t)
else return H.b([u.a,u.b,u.c,u.d],t)}else if(a.t(0,$.bQ()))return H.b([this.ch],[P.w])
else if(a.t(0,$.b_())){u=this.cx
t=[P.w]
if(u==null)return H.b([-1,-1,-1,-1],t)
else return H.b([u.a,u.b,u.c,u.d],t)}else return H.b([],[P.w])},
cl:function(){var u,t
u={}
if(this.r!=null)return!0
t=this.a
if(t!=null){t=t.e
if(t!=null)++t.d}u.a=V.dT()
this.d.a2(0,new F.hd(u))
u=u.a
this.r=u.v(0,Math.sqrt(u.D(u)))
u=this.a
if(u!=null){u.a3()
u=this.a.e
if(u!=null)u.aF()}return!0},
cj:function(){var u,t
u={}
if(this.x!=null)return!0
t=this.a
if(t!=null){t=t.e
if(t!=null)++t.d}u.a=V.dT()
this.d.a2(0,new F.hc(u))
u=u.a
this.x=u.v(0,Math.sqrt(u.D(u)))
u=this.a
if(u!=null){u.a3()
u=this.a.e
if(u!=null)u.aF()}return!0},
t:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.L()},
w:function(a){var u,t,s
u=H.b([],[P.m])
C.a.h(u,C.i.ah(J.aj(this.e),0))
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
s=C.a.k(u,", ")
return a+"{"+s+"}"},
L:function(){return this.w("")}}
F.hd.prototype={
$1:function(a){var u,t
H.d(a,"$iX")
u=a==null?null:a.d
if(u!=null){t=this.a
t.a=t.a.F(0,u)}},
$S:5}
F.hc.prototype={
$1:function(a){var u,t
H.d(a,"$iX")
u=a==null?null:a.e
if(u!=null){t=this.a
t.a=t.a.F(0,u)}},
$S:5}
F.h6.prototype={
a_:function(){},
h:function(a,b){var u,t
u=b.a
if(u!=null){if(u===this.a)return!1
throw H.h(P.p("May not add a vertex already attached to another shape to this shape."))}u=this.c
b.e=u.length
t=this.a
b.a=t
C.a.h(u,b)
t.a3()
return!0},
iS:function(a,b,c,d,e,f,g,h,i){var u=F.h5(a,b,c,d,e,f,g,h,i)
this.h(0,u)
return u},
bl:function(a,b,c,d,e,f){return this.iS(a,null,b,c,null,d,e,f,0)},
gp:function(a){return this.c.length},
ay:function(){var u,t,s
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.x)(u),++s)u[s].cl()
return!0},
ck:function(){var u,t,s
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.x)(u),++s)u[s].cj()
return!0},
j_:function(){var u,t,s,r,q,p,o,n
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.x)(u),++s){r=u[s]
if(r.z==null){q=r.r
p=q.a
o=q.b
n=q.c
n=q.v(0,Math.sqrt(p*p+o*o+n*n))
if(!J.a_(r.z,n)){r.z=n
q=r.a
if(q!=null){q=q.e
if(q!=null)q.C(null)}}}}return!0},
i:function(a){return this.L()},
w:function(a){var u,t,s,r
this.a_()
u=H.b([],[P.m])
for(t=this.c,s=t.length,r=0;r<t.length;t.length===s||(0,H.x)(t),++r)C.a.h(u,t[r].w(a))
return C.a.k(u,"\n")},
L:function(){return this.w("")},
sit:function(a){this.c=H.f(a,"$ia",[F.aq],"$aa")}}
F.h7.prototype={
gp:function(a){return this.b.length+this.c.length+this.d.length},
a2:function(a,b){H.j(b,{func:1,ret:-1,args:[F.X]})
C.a.a2(this.b,b)
C.a.a2(this.c,new F.h8(this,b))
C.a.a2(this.d,new F.h9(this,b))},
i:function(a){return this.L()},
w:function(a){var u,t,s,r
u=H.b([],[P.m])
for(t=this.b,s=t.length,r=0;r<t.length;t.length===s||(0,H.x)(t),++r)C.a.h(u,t[r].w(a))
for(t=this.c,s=t.length,r=0;r<t.length;t.length===s||(0,H.x)(t),++r)C.a.h(u,t[r].w(a))
for(t=this.d,s=t.length,r=0;r<t.length;t.length===s||(0,H.x)(t),++r)C.a.h(u,t[r].w(a))
return C.a.k(u,"\n")},
L:function(){return this.w("")},
sfC:function(a){this.b=H.f(a,"$ia",[F.X],"$aa")},
sfD:function(a){this.c=H.f(a,"$ia",[F.X],"$aa")},
sfE:function(a){this.d=H.f(a,"$ia",[F.X],"$aa")}}
F.h8.prototype={
$1:function(a){H.d(a,"$iX")
if(!J.a_(a.a,this.a))this.b.$1(a)},
$S:5}
F.h9.prototype={
$1:function(a){var u
H.d(a,"$iX")
u=this.a
if(!J.a_(a.a,u)&&!J.a_(a.b,u))this.b.$1(a)},
$S:5}
F.ha.prototype={
gp:function(a){return this.b.length+this.c.length},
i:function(a){return this.L()},
w:function(a){var u,t,s,r
u=H.b([],[P.m])
for(t=this.b,s=t.length,r=0;r<t.length;t.length===s||(0,H.x)(t),++r)C.a.h(u,t[r].w(a))
for(t=this.c,s=t.length,r=0;r<t.length;t.length===s||(0,H.x)(t),++r)C.a.h(u,t[r].w(a))
return C.a.k(u,"\n")},
L:function(){return this.w("")},
sfL:function(a){this.b=H.f(a,"$ia",[F.aV],"$aa")},
sfM:function(a){this.c=H.f(a,"$ia",[F.aV],"$aa")}}
F.hb.prototype={
gp:function(a){return this.b.length},
i:function(a){return this.L()},
w:function(a){var u,t,s,r
u=H.b([],[P.m])
for(t=this.b,s=t.length,r=0;r<t.length;t.length===s||(0,H.x)(t),++r)C.a.h(u,t[r].w(a))
return C.a.k(u,"\n")},
L:function(){return this.w("")},
sc9:function(a){this.b=H.f(a,"$ia",[F.bh],"$aa")}}
O.de.prototype={
gn:function(){var u=this.dy
if(u==null){u=D.E()
this.dy=u}return u},
S:function(a){var u
H.d(a,"$iu")
u=this.dy
if(u!=null)u.C(a)},
aW:function(){return this.S(null)},
dq:function(a){H.d(a,"$iu")
this.a=null
this.S(a)},
hW:function(){return this.dq(null)},
fZ:function(a,b){var u=V.ae
u=new D.be(a,H.f(b,"$ii",[u],"$ai"),this,[u])
u.b=!0
this.S(u)},
h0:function(a,b){var u=V.ae
u=new D.bf(a,H.f(b,"$ii",[u],"$ai"),this,[u])
u.b=!0
this.S(u)},
d8:function(){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7
u=this.dx
t=C.h.a1(u.e.length+3,4)*4
s=C.h.a1(u.f.length+3,4)*4
r=C.h.a1(u.r.length+3,4)*4
q=C.h.a1(u.x.length+3,4)*4
p=C.h.a1(u.y.length+3,4)*4
o=C.h.a1(u.z.length+3,4)*4
n=C.h.a1(this.e.a.length+3,4)*4
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
a7=$.aE()
if(a0){b=$.b1()
a7=new Z.aQ(a7.a|b.a)}if(a1){b=$.b0()
a7=new Z.aQ(a7.a|b.a)}if(a2){b=$.b2()
a7=new Z.aQ(a7.a|b.a)}if(a3){b=$.b3()
a7=new Z.aQ(a7.a|b.a)}if(a5){b=$.b_()
a7=new Z.aQ(a7.a|b.a)}return new A.f3(u,m,l,k,j,i,h,g,f,t,s,r,q,p,o,t+s+r+q+p+o,d,d,a4,a6,!0,!1,!1,c,a4,a,a0,a1,a2,a3,a5,!1,!1,!1,n,e.charCodeAt(0)==0?e:e,a7)},
V:function(a,b){H.f(a,"$ia",[T.ck],"$aa")
if(b!=null)if(!C.a.T(a,b)){b.a=a.length
C.a.h(a,b)}},
am:function(a){var u,t,s,r,q
for(u=this.dx.a,u=new J.ac(u,u.length,0,[H.v(u,0)]);u.u();){t=u.d
t.toString
s=$.h4
if(s==null){s=new V.K(0,0,1)
$.h4=s}t.a=s
r=t.b
if(r!=null){q=r.a
if(q!=null)t.a=q.cM(s)}}},
em:function(a2,a3){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1
u=this.a
if(u==null){u=this.d8()
t=H.d(a2.fr.l(0,u.ak),"$idf")
if(t==null){t=A.kB(u,a2.a)
a2.dB(t)}this.a=t
a3.e=null
u=t}s=u.z
r=s.bn
u=a3.e
if(!(u instanceof Z.bV)){a3.e=null
u=null}if(u==null||!u.d.t(0,r)){u=s.r1
if(u)a3.d.ay()
q=s.r2
if(q){p=a3.d
o=p.e
if(o!=null)++o.d
p.d.ck()
p.a.ck()
p=p.e
if(p!=null)p.aF()}p=s.ry
if(p){o=a3.d
n=o.e
if(n!=null)++n.d
o.a.j_()
o=o.e
if(o!=null)o.aF()}m=a3.d.dH(new Z.dV(a2.a),r)
m.aA($.aE()).e=this.a.Q.c
if(u)m.aA($.b1()).e=this.a.cx.c
if(q)m.aA($.b0()).e=this.a.ch.c
if(s.rx)m.aA($.b2()).e=this.a.cy.c
if(p)m.aA($.b3()).e=this.a.db.c
if(s.x1)m.aA($.b_()).e=this.a.dx.c
a3.e=m}u=T.ck
l=H.b([],[u])
this.a.a0(a2)
if(s.fx){q=this.a
p=a2.dx.gZ()
q=q.dy
q.toString
q.ai(p.ac(0,!0))}if(s.fy){q=this.a
p=a2.cx
if(p==null){p=a2.db.gZ().A(0,a2.dx.gZ())
a2.cx=p}q=q.fr
q.toString
q.ai(p.ac(0,!0))}q=this.a
p=a2.ch
if(p==null){p=a2.gjO().A(0,a2.dx.gZ())
a2.ch=p}q=q.fy
q.toString
q.ai(p.ac(0,!0))
if(s.x2){q=this.a
p=this.b
q=q.k1
q.toString
q.ai(C.r.ac(p,!0))}if(s.y1){q=this.a
p=this.c
q=q.k2
q.toString
q.ai(C.r.ac(p,!0))}if(s.y2){q=this.a
p=this.d
q=q.k3
q.toString
q.ai(C.r.ac(p,!0))}if(s.as>0){k=this.e.a.length
q=this.a.k4
C.b.K(q.a,q.d,k)
for(q=[P.w],j=0;j<k;++j){p=this.a
o=this.e.a
if(j>=o.length)return H.l(o,j)
o=o[j]
p.toString
H.d(o,"$iae")
p=p.r1
if(j>=p.length)return H.l(p,j)
p=p[j]
i=new Float32Array(H.cF(H.f(o.ac(0,!0),"$ia",q,"$aa")))
C.b.ev(p.a,p.d,!1,i)}}switch(s.a){case C.c:break
case C.f:q=this.a
p=this.f.f
q=q.r2
q.toString
o=p.a
n=p.b
p=p.c
C.b.q(q.a,q.d,o,n,p)
break
case C.d:this.V(l,this.f.d)
q=this.a
p=this.f.d
q.aj(q.rx,q.x1,p)
p=this.a
q=this.f.f
p=p.r2
p.toString
o=q.a
n=q.b
q=q.c
C.b.q(p.a,p.d,o,n,q)
break
case C.e:this.V(l,this.f.e)
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
case C.d:this.V(l,this.r.d)
q=this.a
p=this.r.d
q.aj(q.y1,q.as,p)
p=this.a
q=this.r.f
p=p.x2
p.toString
o=q.a
n=q.b
q=q.c
C.b.q(p.a,p.d,o,n,q)
break
case C.e:this.V(l,this.r.e)
q=this.a
p=this.r.e
q.ae(q.y2,q.as,p)
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
q=q.ak
q.toString
o=p.a
n=p.b
p=p.c
C.b.q(q.a,q.d,o,n,p)
break
case C.d:this.V(l,this.x.d)
q=this.a
p=this.x.d
q.aj(q.bn,q.bo,p)
p=this.a
q=this.x.f
p=p.ak
p.toString
o=q.a
n=q.b
q=q.c
C.b.q(p.a,p.d,o,n,q)
break
case C.e:this.V(l,this.x.e)
q=this.a
p=this.x.e
q.ae(q.dR,q.bo,p)
p=this.a
q=this.x.f
p=p.ak
p.toString
o=q.a
n=q.b
q=q.c
C.b.q(p.a,p.d,o,n,q)
break}switch(s.d){case C.c:break
case C.f:q=this.a
p=this.y.f
q=q.bp
q.toString
o=p.a
n=p.b
p=p.c
C.b.q(q.a,q.d,o,n,p)
break
case C.d:this.V(l,this.y.d)
q=this.a
p=this.y.d
q.aj(q.dS,q.bq,p)
p=this.a
q=this.y.f
p=p.bp
p.toString
o=q.a
n=q.b
q=q.c
C.b.q(p.a,p.d,o,n,q)
break
case C.e:this.V(l,this.y.e)
q=this.a
p=this.y.e
q.ae(q.dT,q.bq,p)
p=this.a
q=this.y.f
p=p.bp
p.toString
o=q.a
n=q.b
q=q.c
C.b.q(p.a,p.d,o,n,q)
break}switch(s.e){case C.c:break
case C.f:q=this.a
p=this.z.f
q=q.br
q.toString
o=p.a
n=p.b
p=p.c
C.b.q(q.a,q.d,o,n,p)
p=this.a
n=this.z.ch
p=p.bt
C.b.H(p.a,p.d,n)
break
case C.d:this.V(l,this.z.d)
q=this.a
p=this.z.d
q.aj(q.dU,q.bs,p)
p=this.a
q=this.z.f
p=p.br
p.toString
o=q.a
n=q.b
q=q.c
C.b.q(p.a,p.d,o,n,q)
q=this.a
n=this.z.ch
q=q.bt
C.b.H(q.a,q.d,n)
break
case C.e:this.V(l,this.z.e)
q=this.a
p=this.z.e
q.ae(q.dV,q.bs,p)
p=this.a
q=this.z.f
p=p.br
p.toString
o=q.a
n=q.b
q=q.c
C.b.q(p.a,p.d,o,n,q)
q=this.a
n=this.z.ch
q=q.bt
C.b.H(q.a,q.d,n)
break}if(s.z>0){k=this.dx.e.length
q=this.a.e5
C.b.K(q.a,q.d,k)
h=a2.db.gZ()
for(q=this.dx.e,p=q.length,g=0,f=0;f<q.length;q.length===p||(0,H.x)(q),++f){e=q[f]
o=this.a.cr
if(g>=o.length)return H.l(o,g)
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
q=this.a.e6
C.b.K(q.a,q.d,k)
h=a2.db.gZ()
for(q=this.dx.f,p=q.length,g=0,f=0;f<q.length;q.length===p||(0,H.x)(q),++f){e=q[f]
o=this.a.cs
if(g>=o.length)return H.l(o,g)
d=o[g]
o=e.gb6(e)
n=d.b
C.b.q(n.a,n.d,o.a,o.b,o.c)
o=h.ba(e.gb6(e))
n=d.c
C.b.q(n.a,n.d,o.a,o.b,o.c)
o=e.gaz(e)
n=d.d
C.b.q(n.a,n.d,o.a,o.b,o.c)
o=e.gce()
n=d.e
C.b.H(n.a,n.d,o)
o=e.gcf()
n=d.f
C.b.H(n.a,n.d,o)
o=e.gcg()
n=d.r
C.b.H(n.a,n.d,o);++g}}if(s.ch>0){k=this.dx.r.length
q=this.a.e7
C.b.K(q.a,q.d,k)
h=a2.db.gZ()
for(q=this.dx.r,p=q.length,g=0,f=0;f<q.length;q.length===p||(0,H.x)(q),++f){e=q[f]
o=this.a.ct
if(g>=o.length)return H.l(o,g)
d=o[g]
o=e.gb6(e)
n=d.b
C.b.q(n.a,n.d,o.a,o.b,o.c)
o=e.gcp(e).kc()
n=d.c
C.b.q(n.a,n.d,o.a,o.b,o.c)
o=h.ba(e.gb6(e))
n=d.d
C.b.q(n.a,n.d,o.a,o.b,o.c)
o=e.gaz(e)
n=d.e
C.b.q(n.a,n.d,o.a,o.b,o.c)
o=e.gkb()
n=d.f
C.b.H(n.a,n.d,o)
o=e.gka()
n=d.r
C.b.H(n.a,n.d,o)
o=e.gce()
n=d.x
C.b.H(n.a,n.d,o)
o=e.gcf()
n=d.y
C.b.H(n.a,n.d,o)
o=e.gcg()
n=d.z
C.b.H(n.a,n.d,o);++g}}if(s.cx>0){k=this.dx.x.length
q=this.a.e8
C.b.K(q.a,q.d,k)
h=a2.db.gZ()
for(q=this.dx.x,p=q.length,o=[u],g=0,f=0;f<q.length;q.length===p||(0,H.x)(q),++f){e=q[f]
n=this.a.cu
if(g>=n.length)return H.l(n,g)
d=n[g]
n=e.gb9()
H.f(l,"$ia",o,"$aa")
if(!C.a.T(l,n)){n.a=l.length
C.a.h(l,n)}n=e.gcp(e)
c=d.d
C.b.q(c.a,c.d,n.a,n.b,n.c)
n=e.gbJ()
c=d.b
C.b.q(c.a,c.d,n.a,n.b,n.c)
n=e.gbH(e)
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
a=e.gaz(e)
n=d.f
C.b.q(n.a,n.d,a.a,a.b,a.c)
a=e.gb9()
n=a.gee(a)
if(!n){n=d.x
C.b.K(n.a,n.d,1)}else{n=d.r
c=a.d
b=n.a
n=n.d
if(!c)C.b.K(b,n,0)
else C.b.K(b,n,a.a)
n=d.x
C.b.K(n.a,n.d,0)}++g}}if(s.cy>0){k=this.dx.y.length
q=this.a.e9
C.b.K(q.a,q.d,k)
h=a2.db.gZ()
for(q=this.dx.y,p=q.length,o=[P.w],n=[u],g=0,f=0;f<q.length;q.length===p||(0,H.x)(q),++f){e=q[f]
c=this.a.cv
if(g>=c.length)return H.l(c,g)
d=c[g]
c=e.gb9()
H.f(l,"$ia",n,"$aa")
if(!C.a.T(l,c)){c.a=l.length
C.a.h(l,c)}a0=h.A(0,e.gZ())
c=e.gZ()
b=$.cb
if(b==null){b=new V.a9(0,0,0)
$.cb=b}b=c.ba(b)
c=d.b
C.b.q(c.a,c.d,b.a,b.b,b.c)
c=$.cb
if(c==null){c=new V.a9(0,0,0)
$.cb=c}c=a0.ba(c)
b=d.c
C.b.q(b.a,b.d,c.a,c.b,c.c)
c=a0.cB()
b=d.d
i=new Float32Array(H.cF(H.f(new V.dg(c.a,c.b,c.c,c.e,c.f,c.r,c.y,c.z,c.Q).ac(0,!0),"$ia",o,"$aa")))
C.b.eu(b.a,b.d,!1,i)
b=e.gaz(e)
c=d.e
C.b.q(c.a,c.d,b.a,b.b,b.c)
b=e.gb9()
c=b.gee(b)
if(!c){c=d.r
C.b.K(c.a,c.d,1)}else{c=d.f
a=b.d
a1=c.a
c=c.d
if(a<6)C.b.K(a1,c,0)
else C.b.K(a1,c,b.a)
c=d.r
C.b.K(c.a,c.d,0)}c=e.gce()
b=d.x
C.b.H(b.a,b.d,c)
c=e.gcf()
b=d.y
C.b.H(b.a,b.d,c)
c=e.gcg()
b=d.z
C.b.H(b.a,b.d,c);++g}}if(s.db>0){k=this.dx.z.length
q=this.a.ea
C.b.K(q.a,q.d,k)
h=a2.db.gZ()
for(q=this.dx.z,p=q.length,u=[u],g=0,f=0;f<q.length;q.length===p||(0,H.x)(q),++f){e=q[f]
o=this.a.cw
if(g>=o.length)return H.l(o,g)
d=o[g]
o=e.gb9()
H.f(l,"$ia",u,"$aa")
if(!C.a.T(l,o)){o.a=l.length
C.a.h(l,o)}o=e.gb6(e)
n=d.b
C.b.q(n.a,n.d,o.a,o.b,o.c)
o=e.gcp(e)
n=d.c
C.b.q(n.a,n.d,o.a,o.b,o.c)
o=e.gbJ()
n=d.d
C.b.q(n.a,n.d,o.a,o.b,o.c)
o=e.gbH(e)
n=d.e
C.b.q(n.a,n.d,o.a,o.b,o.c)
o=h.ba(e.gb6(e))
n=d.f
C.b.q(n.a,n.d,o.a,o.b,o.c)
o=e.gb9()
n=o.gee(o)
if(!n){o=d.x
C.b.K(o.a,o.d,1)}else{n=d.r
c=o.d
b=n.a
n=n.d
if(!c)C.b.K(b,n,0)
else C.b.K(b,n,o.a)
o=d.x
C.b.K(o.a,o.d,0)}o=e.gaz(e)
n=d.y
C.b.q(n.a,n.d,o.a,o.b,o.c)
o=e.gkd()
n=d.z
C.b.H(n.a,n.d,o)
o=e.gke()
n=d.Q
C.b.H(n.a,n.d,o)
o=e.gce()
n=d.ch
C.b.H(n.a,n.d,o)
o=e.gcf()
n=d.cx
C.b.H(n.a,n.d,o)
o=e.gcg()
n=d.cy
C.b.H(n.a,n.d,o);++g}}}switch(s.f){case C.c:break
case C.f:break
case C.d:this.V(l,this.Q.d)
u=this.a
q=this.Q.d
u.aj(u.dW,u.bu,q)
break
case C.e:this.V(l,this.Q.e)
u=this.a
q=this.Q.e
u.ae(u.dX,u.bu,q)
break}if(s.fr){u=this.a
q=a2.Q
if(q==null){q=a2.db.gZ().cB()
a2.Q=q}u=u.id
u.toString
u.ai(q.ac(0,!0))}if(s.dy){this.V(l,this.ch)
u=this.a
q=this.ch
u.ae(u.dY,u.dZ,q)
switch(s.r){case C.c:break
case C.f:u=this.a
q=this.cx.f
u=u.bv
u.toString
p=q.a
o=q.b
q=q.c
C.b.q(u.a,u.d,p,o,q)
break
case C.d:this.V(l,this.cx.d)
u=this.a
q=this.cx.d
u.aj(u.e_,u.bw,q)
q=this.a
u=this.cx.f
q=q.bv
q.toString
p=u.a
o=u.b
u=u.c
C.b.q(q.a,q.d,p,o,u)
break
case C.e:this.V(l,this.cx.e)
u=this.a
q=this.cx.e
u.ae(u.e0,u.bw,q)
q=this.a
u=this.cx.f
q=q.bv
q.toString
p=u.a
o=u.b
u=u.c
C.b.q(q.a,q.d,p,o,u)
break}switch(s.x){case C.c:break
case C.f:u=this.a
q=this.cy.f
u=u.by
u.toString
p=q.a
o=q.b
q=q.c
C.b.q(u.a,u.d,p,o,q)
q=this.a
o=this.cy.ch
q=q.bx
C.b.H(q.a,q.d,o)
break
case C.d:this.V(l,this.cy.d)
u=this.a
q=this.cy.d
u.aj(u.e1,u.bz,q)
q=this.a
u=this.cy.f
q=q.by
q.toString
p=u.a
o=u.b
u=u.c
C.b.q(q.a,q.d,p,o,u)
u=this.a
o=this.cy.ch
u=u.bx
C.b.H(u.a,u.d,o)
break
case C.e:this.V(l,this.cy.e)
u=this.a
q=this.cy.e
u.ae(u.e2,u.bz,q)
q=this.a
u=this.cy.f
q=q.by
q.toString
p=u.a
o=u.b
u=u.c
C.b.q(q.a,q.d,p,o,u)
u=this.a
o=this.cy.ch
u=u.bx
C.b.H(u.a,u.d,o)
break}}u=s.y
q=u!==C.c
if(q){switch(u){case C.c:break
case C.f:u=this.a
p=this.db.f
u=u.bA
C.b.H(u.a,u.d,p)
break
case C.d:this.V(l,this.db.d)
u=this.a
p=this.db.d
u.aj(u.e3,u.bB,p)
p=this.a
u=this.db.f
p=p.bA
C.b.H(p.a,p.d,u)
break
case C.e:this.V(l,this.db.e)
u=this.a
p=this.db.e
u.ae(u.e4,u.bB,p)
p=this.a
u=this.db.f
p=p.bA
C.b.H(p.a,p.d,u)
break}u=a2.a
C.b.cq(u,3042)
C.b.iZ(u,770,771)}for(u=a2.a,j=0;j<l.length;++j){p=l[j]
if(!p.c&&p.d){p.c=!0
C.b.bk(u,33984+p.a)
C.b.a7(u,3553,p.b)}}p=a3.e
p.a0(a2)
p.ab(a2)
p.bb(a2)
if(q)C.b.jh(u,3042)
for(j=0;j<l.length;++j){q=l[j]
if(q.c){q.c=!1
C.b.bk(u,33984+q.a)
C.b.a7(u,3553,null)}}q=this.a
q.toString
C.b.cN(u,null)
q.x.dM()},
i:function(a){var u=this.a
if(u!=null)return u.b
else return this.d8().ak},
sfm:function(a){this.e=H.f(a,"$iU",[V.ae],"$aU")}}
O.f1.prototype={
i_:function(a){var u=this.f
if(!(Math.abs(u-a)<$.J().a)){this.f=a
u=new D.D(this.b,u,a,this,[P.w])
u.b=!0
this.a.S(u)}},
ap:function(){this.cU()
this.i_(1)}}
O.c6.prototype={
S:function(a){this.a.S(H.d(a,"$iu"))},
aW:function(){return this.S(null)},
ap:function(){},
i2:function(a){var u,t
u=this.d
if(u!=a){if(u!=null)u.gn().U(0,this.gaJ())
t=this.d
this.d=a
if(a!=null)a.gn().h(0,this.gaJ())
u=new D.D(this.b+".texture2D",t,this.d,this,[T.dD])
u.b=!0
this.a.S(u)}},
i3:function(a){},
scL:function(a){var u=this.c
if(u!==C.d){if(u===C.c)this.ap()
this.c=C.d
this.i3(null)
u=this.a
u.a=null
u.S(null)}this.i2(a)}}
O.f2.prototype={}
O.aK.prototype={
dt:function(a){var u,t
if(!J.a_(this.f,a)){u=this.f
this.f=a
t=new D.D(this.b+".color",u,a,this,[V.W])
t.b=!0
this.a.S(t)}},
ap:function(){this.cU()
this.dt(new V.W(1,1,1))},
saz:function(a,b){var u
if(this.c===C.c){this.c=C.f
this.ap()
u=this.a
u.a=null
u.S(null)}this.dt(b)}}
O.f4.prototype={
i0:function(a){var u=this.ch
if(!(Math.abs(u-a)<$.J().a)){this.ch=a
u=new D.D(this.b+".refraction",u,a,this,[P.w])
u.b=!0
this.a.S(u)}},
ap:function(){this.cV()
this.i0(1)}}
O.f5.prototype={
i1:function(a){var u=this.ch
if(!(Math.abs(u-a)<$.J().a)){this.ch=a
u=new D.D(this.b+".shininess",u,a,this,[P.w])
u.b=!0
this.a.S(u)}},
ap:function(){this.cV()
this.i1(100)}}
O.dw.prototype={
gn:function(){var u=this.e
if(u==null){u=D.E()
this.e=u}return u},
S:function(a){var u
H.d(a,"$iu")
u=this.e
if(u!=null)u.C(a)},
aW:function(){return this.S(null)},
em:function(a,b){var u,t,s,r,q,p
if(this.a==null){u=H.d(a.fr.l(0,"Skybox"),"$idx")
if(u==null){t=a.a
u=new A.dx(t,"Skybox")
u.cW(t,"Skybox")
u.ec($.kR,$.kQ)
u.z=u.x.l(0,"posAttr")
u.Q=H.c(u.y.l(0,"fov"),"$iQ")
u.ch=H.c(u.y.l(0,"ratio"),"$iQ")
u.cx=H.c(u.y.l(0,"boxClr"),"$iC")
u.cy=H.c(u.y.l(0,"boxTxt"),"$ia5")
u.db=H.c(u.y.l(0,"viewMat"),"$iah")
a.dB(u)}this.a=u}if(b.e==null){t=b.d.dH(new Z.dV(a.a),$.aE())
t.aA($.aE()).e=this.a.z.c
b.e=t}t=this.c
if(t!=null){t.a=1
if(!t.c&&t.d>=6){t.c=!0
s=a.a
C.b.bk(s,33985)
C.b.a7(s,34067,t.b)}}t=a.d
s=a.c
r=this.a
r.a0(a)
q=this.b
p=r.Q
C.b.H(p.a,p.d,q)
q=r.ch
C.b.H(q.a,q.d,t/s)
s=this.c
r.cy.eO(s)
s=this.d
t=r.cx
C.b.q(t.a,t.d,s.a,s.b,s.c)
s=a.db.gZ().cB()
r=r.db
r.toString
r.ai(s.ac(0,!0))
t=b.e
if(t instanceof Z.bV){t.a0(a)
t.ab(a)
t.bb(a)}else b.e=null
t=this.a
t.toString
s=a.a
C.b.cN(s,null)
t.x.dM()
t=this.c
if(t!=null)if(t.c){t.c=!1
C.b.bk(s,33984+t.a)
C.b.a7(s,34067,null)}}}
O.bi.prototype={}
T.ck.prototype={}
T.dD.prototype={}
T.fG.prototype={
gn:function(){var u=this.y
if(u==null){u=D.E()
this.y=u}return u}}
T.dE.prototype={
gn:function(){var u=this.e
if(u==null){u=D.E()
this.e=u}return u}}
T.fH.prototype={
jx:function(a,b,c,d,e){var u,t,s,r
u=this.a
t=u.createTexture()
C.b.a7(u,3553,t)
C.b.at(u,3553,10242,33071)
C.b.at(u,3553,10243,33071)
C.b.at(u,3553,10241,9729)
C.b.at(u,3553,10240,9729)
C.b.a7(u,3553,null);++this.d
s=W.j3(null,a,null)
r=new T.fG()
r.a=0
r.b=t
r.c=!1
r.d=!1
r.e=0
r.f=0
r.r=0
r.x=0
u=W.k
W.Z(s,"load",H.j(new T.fJ(this,r,s,!1,t,!1,!1),{func:1,ret:-1,args:[u]}),!1,u)
return r},
jw:function(a){return this.jx(a,!1,!1,!1,!1)},
aM:function(a,b,c,d,e,f){var u,t
u=W.j3(null,c,null);++this.d
t=W.k
W.Z(u,"load",H.j(new T.fI(this,u,!1,b,!1,d,a),{func:1,ret:-1,args:[t]}),!1,t)},
ds:function(a,b,c){var u,t,s,r
b=V.iM(b,2)
u=V.iM(a.width,2)
t=V.iM(a.height,2)
u=Math.min(u,b)
t=Math.min(t,b)
if(a.width===u&&a.height===t)return a
else{s=W.ig(null,null)
s.width=u
s.height=t
r=H.d(C.o.eC(s,"2d"),"$ibr")
r.imageSmoothingEnabled=!1;(r&&C.y).jj(r,a,0,0,s.width,s.height)
return P.lk(C.y.fI(r,0,0,s.width,s.height))}}}
T.fJ.prototype={
$1:function(a){var u,t,s,r
u=this.b
t=this.c
u.e=t.width
u.f=t.height
s=this.a
r=s.ds(t,s.b,this.d)
u.r=t.width
u.x=t.height
t=s.a
C.b.a7(t,3553,this.e)
C.b.el(t,37440,this.f?1:0)
C.b.ep(t,3553,0,6408,6408,5121,r)
if(this.r)C.b.ex(t,3553)
C.b.a7(t,3553,null)
if(!u.d){u.d=!0
u=u.y
if(u!=null)u.dP()}++s.e},
$S:10}
T.fI.prototype={
$1:function(a){var u,t,s
u=this.a
t=u.ds(this.b,u.c,this.c)
s=u.a
C.b.a7(s,34067,this.d)
C.b.el(s,37440,this.e?1:0)
C.b.ep(s,this.f,0,6408,6408,5121,t)
C.b.a7(s,34067,null)
s=this.r
if(++s.d>=6){s=s.e
if(s!=null)s.dP()}++u.e},
$S:10}
V.aT.prototype={
aC:function(a){return!0},
i:function(a){return"all"},
$ial:1}
V.al.prototype={}
V.dd.prototype={
aC:function(a){var u,t,s
for(u=this.a,t=u.length,s=0;s<u.length;u.length===t||(0,H.x)(u),++s)if(u[s].aC(a))return!0
return!1},
i:function(a){var u,t,s,r,q
for(u=this.a,t=u.length,s="",r=0;r<u.length;u.length===t||(0,H.x)(u),++r){q=u[r]
if(s.length!==0)s+=", "
s+=q.i(0)}return s},
sa5:function(a){this.a=H.f(a,"$ia",[V.al],"$aa")},
$ial:1}
V.af.prototype={
aC:function(a){return!this.eV(a)},
i:function(a){return"!["+this.cT(0)+"]"}}
V.fj.prototype={
aC:function(a){return this.a<=a&&this.b>=a},
i:function(a){var u,t
u=H.ir(this.a)
t=H.ir(this.b)
return u+".."+t},
$ial:1}
V.fr.prototype={
f_:function(a){var u,t
if(a.a.length<=0)throw H.h(P.p("May not create a SetMatcher with zero characters."))
u=new H.aI([P.y,P.H])
for(t=new H.c5(a,a.gp(a),0,[H.a4(a,"T",0)]);t.u();)u.Y(0,t.d,!0)
this.shZ(u)},
aC:function(a){return this.a.dK(a)},
i:function(a){var u=this.a
return P.it(new H.d9(u,[H.v(u,0)]),0,null)},
shZ:function(a){this.a=H.f(a,"$iat",[P.y,P.H],"$aat")},
$ial:1}
V.cf.prototype={
k:function(a,b){var u,t,s,r
for(u=this.c,t=u.length,s=0;s<t;++s){r=u[s]
if(r.b.b===b)return r}r=new V.cm(this.a.j(0,b))
r.sa5(H.b([],[V.al]))
r.c=!1
C.a.h(this.c,r)
return r},
jl:function(a){var u,t,s,r
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.x)(u),++s){r=u[s]
if(r.aC(a))return r}return},
i:function(a){return this.b},
sio:function(a){this.c=H.f(a,"$ia",[V.cm],"$aa")}}
V.dJ.prototype={
i:function(a){var u,t
u=H.iO(this.b,"\n","\\n")
t=H.iO(u,"\t","\\t")
return this.a+":"+this.c+':"'+t+'"'}}
V.cl.prototype={
aE:function(a,b,c){var u,t,s
H.f(c,"$ia",[P.m],"$aa")
for(u=c.length,t=0;t<c.length;c.length===u||(0,H.x)(c),++t){s=c[t]
this.c.Y(0,s,b)}},
i:function(a){return this.b},
shT:function(a){var u=P.m
this.c=H.f(a,"$iat",[u,u],"$aat")}}
V.fL.prototype={
j:function(a,b){var u=this.a.l(0,b)
if(u==null){u=new V.cf(this,b)
u.sio(H.b([],[V.cm]))
u.d=null
this.a.Y(0,b,u)}return u},
M:function(a){var u,t
u=this.b.l(0,a)
if(u==null){u=new V.cl(this,a)
t=P.m
u.shT(new H.aI([t,t]))
this.b.Y(0,a,u)}return u},
es:function(a){var u,t,s,r,q,p,o,n,m,l,k,j
u=H.b([],[V.dJ])
t=this.c
s=[P.y]
r=H.b([],s)
for(q=a.length,p=null,o=0;!0;){if(o>=q){if(p!=null)C.a.h(u,p)
return u}n=C.i.aK(a,o)
m=t.jl(n)
if(m==null){if(p==null){C.a.h(r,n)
l=P.it(r,0,null)
throw H.h(P.p("Untokenizable string [state: "+t.b+", index "+o+']: "'+l+'"'))}C.a.h(u,p)
o=p.c+1
r=H.b([],s)
t=this.c
p=null}else{if(!m.c)C.a.h(r,n)
t=m.b
if(t.d!=null){l=P.it(r,0,null)
k=t.d
j=k.c.l(0,l)
p=new V.dJ(j==null?k.b:j,l,o)}++o}}},
sia:function(a){this.a=H.f(a,"$iat",[P.m,V.cf],"$aat")},
sig:function(a){this.b=H.f(a,"$iat",[P.m,V.cl],"$aat")}}
V.cm.prototype={
i:function(a){return this.b.b+": "+this.cT(0)}}
X.bp.prototype={$iaM:1}
X.eH.prototype={
gn:function(){var u=this.x
if(u==null){u=D.E()
this.x=u}return u},
ao:function(a){var u=this.x
if(u!=null)u.C(a)},
a0:function(a){var u,t,s,r,q,p,o,n
u=a.a
C.b.iY(u,36160,null)
C.b.cq(u,2884)
C.b.cq(u,2929)
C.b.jg(u,513)
t=u.drawingBufferWidth
s=u.drawingBufferHeight
r=this.r
q=r.a
if(typeof t!=="number")return H.B(t)
p=C.j.al(q*t)
q=r.b
if(typeof s!=="number")return H.B(s)
o=C.j.al(q*s)
q=C.j.al(r.c*t)
a.c=q
r=C.j.al(r.d*s)
a.d=r
C.b.k8(u,p,o,q,r)
C.b.j2(u,this.c)
if(this.b){r=this.a
C.b.j1(u,r.a,r.b,r.c,r.d)
n=16640}else n=256
C.b.j0(u,n)}}
X.eM.prototype={
gn:function(){var u=this.b
if(u==null){u=D.E()
this.b=u}return u},
a0:function(a){var u
a.cy.bG(V.bB())
u=V.bB()
a.db.bG(u)},
bb:function(a){a.cy.aD()
a.db.aD()},
$iaM:1,
$ibp:1}
X.dp.prototype={
gn:function(){var u=this.f
if(u==null){u=D.E()
this.f=u}return u},
ao:function(a){var u
H.d(a,"$iu")
u=this.f
if(u!=null)u.C(a)},
h4:function(){return this.ao(null)},
a0:function(a){var u,t,s,r,q,p,o,n,m,l
u=a.c
t=a.d
s=this.c
r=this.d
q=this.e
p=q-r
o=1/Math.tan(s*0.5)
n=V.aL(-o/(u/t),0,0,0,0,o,0,0,0,0,q/p,-q*r/p,0,0,1,0)
a.cy.bG(n)
u=$.jd
if(u==null){u=V.jf()
t=V.jx()
s=$.ju
if(s==null){s=new V.K(0,0,-1)
$.ju=s}s=V.j8(u,t,s)
$.jd=s
m=s}else m=u
u=this.b
if(u!=null){l=u.aR(a,this)
if(l!=null)m=l.A(0,m)}a.db.bG(m)},
bb:function(a){a.cy.aD()
a.db.aD()},
$iaM:1,
$ibp:1}
X.ci.prototype={}
V.b6.prototype={
be:function(a){this.b=new P.eK(C.M)
this.c=null
this.sbZ(H.b([],[[P.a,W.as]]))},
J:function(a,b){var u,t,s,r,q,p,o,n,m
u=this.d
if(u.length===0)C.a.h(u,H.b([],[W.as]))
t=a.split("\n")
for(u=t.length,s=[W.as],r=!0,q=0;q<u;++q){p=t[q]
if(r)r=!1
else C.a.h(this.d,H.b([],s))
o=document.createElement("div")
o.className="codePart"
H.I(p)
n=this.b.fs(p,0,p.length)
m=n==null?p:n
C.k.eL(o,H.iO(m," ","&nbsp;"))
m=o.style
m.color=b
C.a.h(C.a.gbD(this.d),o)}},
ek:function(a){var u,t,s,r
H.f(a,"$ia",[P.m],"$aa")
this.sbZ(H.b([],[[P.a,W.as]]))
u=C.a.k(a,"\n")
t=this.c
if(t==null){t=this.bm()
this.c=t}for(t=t.es(u),s=t.length,r=0;r<t.length;t.length===s||(0,H.x)(t),++r)this.bF(t[r])},
sbZ:function(a){this.d=H.f(a,"$ia",[[P.a,W.as]],"$aa")}}
V.i9.prototype={
$1:function(a){H.d(a,"$iaN")
P.iN(C.j.er(this.a.gjp(),2)+" fps")},
$S:39}
V.er.prototype={
bF:function(a){switch(a.a){case"Class":this.J(a.b,"#551")
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
bm:function(){var u,t,s,r
u=V.fM()
u.c=u.j(0,"Start")
t=u.j(0,"Start").k(0,"Id")
s=V.r(new H.o("_"))
C.a.h(t.a,s)
s=V.P("a","z")
C.a.h(t.a,s)
s=V.P("A","Z")
C.a.h(t.a,s)
s=u.j(0,"Id").k(0,"Id")
t=V.r(new H.o("_"))
C.a.h(s.a,t)
t=V.P("0","9")
C.a.h(s.a,t)
t=V.P("a","z")
C.a.h(s.a,t)
t=V.P("A","Z")
C.a.h(s.a,t)
t=u.j(0,"Start").k(0,"Int")
s=V.P("0","9")
C.a.h(t.a,s)
s=u.j(0,"Int").k(0,"Int")
t=V.P("0","9")
C.a.h(s.a,t)
t=u.j(0,"Int").k(0,"FloatDot")
s=V.r(new H.o("."))
C.a.h(t.a,s)
s=u.j(0,"FloatDot").k(0,"Float")
t=V.P("0","9")
C.a.h(s.a,t)
t=u.j(0,"Float").k(0,"Float")
s=V.P("0","9")
C.a.h(t.a,s)
s=u.j(0,"Start").k(0,"Sym")
t=V.r(new H.o("<>{}()\\-+*%!&|=.,?:;"))
C.a.h(s.a,t)
t=u.j(0,"Sym").k(0,"Sym")
s=V.r(new H.o("<>{}()\\-+*%!&|=.,?:;"))
C.a.h(t.a,s)
s=u.j(0,"Start").k(0,"OpenDoubleStr")
t=V.r(new H.o('"'))
C.a.h(s.a,t)
t=u.j(0,"OpenDoubleStr").k(0,"CloseDoubleStr")
s=V.r(new H.o('"'))
C.a.h(t.a,s)
s=u.j(0,"OpenDoubleStr").k(0,"EscDoubleStr")
t=V.r(new H.o("\\"))
C.a.h(s.a,t)
t=u.j(0,"EscDoubleStr").k(0,"OpenDoubleStr")
s=V.r(new H.o('"'))
C.a.h(t.a,s)
C.a.h(u.j(0,"OpenDoubleStr").k(0,"OpenDoubleStr").a,new V.aT())
s=u.j(0,"Start").k(0,"OpenSingleStr")
t=V.r(new H.o("'"))
C.a.h(s.a,t)
t=u.j(0,"OpenSingleStr").k(0,"CloseSingleStr")
s=V.r(new H.o("'"))
C.a.h(t.a,s)
s=u.j(0,"OpenSingleStr").k(0,"EscSingleStr")
t=V.r(new H.o("\\"))
C.a.h(s.a,t)
t=u.j(0,"EscSingleStr").k(0,"OpenSingleStr")
s=V.r(new H.o("'"))
C.a.h(t.a,s)
C.a.h(u.j(0,"OpenSingleStr").k(0,"OpenSingleStr").a,new V.aT())
s=u.j(0,"Start").k(0,"Slash")
t=V.r(new H.o("/"))
C.a.h(s.a,t)
t=u.j(0,"Slash").k(0,"Comment")
s=V.r(new H.o("/"))
C.a.h(t.a,s)
s=u.j(0,"Comment").k(0,"EndComment")
t=V.r(new H.o("\n"))
C.a.h(s.a,t)
t=u.j(0,"Comment").k(0,"Comment")
s=new V.af()
r=[V.al]
s.sa5(H.b([],r))
C.a.h(t.a,s)
t=V.r(new H.o("\n"))
C.a.h(s.a,t)
t=u.j(0,"Slash").k(0,"MLComment")
s=V.r(new H.o("*"))
C.a.h(t.a,s)
s=u.j(0,"MLComment").k(0,"MLCStar")
t=V.r(new H.o("*"))
C.a.h(s.a,t)
t=u.j(0,"MLCStar").k(0,"MLComment")
s=new V.af()
s.sa5(H.b([],r))
C.a.h(t.a,s)
t=V.r(new H.o("*"))
C.a.h(s.a,t)
t=u.j(0,"MLCStar").k(0,"EndComment")
s=V.r(new H.o("/"))
C.a.h(t.a,s)
s=u.j(0,"Start").k(0,"Whitespace")
t=V.r(new H.o(" \n\t"))
C.a.h(s.a,t)
t=u.j(0,"Whitespace").k(0,"Whitespace")
s=V.r(new H.o(" \n\t"))
C.a.h(t.a,s)
s=u.j(0,"Int")
s.d=s.a.M("Num")
s=u.j(0,"Float")
s.d=s.a.M("Num")
s=u.j(0,"Sym")
s.d=s.a.M("Symbol")
s=u.j(0,"CloseDoubleStr")
s.d=s.a.M("String")
s=u.j(0,"CloseSingleStr")
s.d=s.a.M("String")
s=u.j(0,"EndComment")
s.d=s.a.M("Comment")
s=u.j(0,"Whitespace")
s.d=s.a.M("Whitespace")
s=u.j(0,"Id")
t=s.a.M("Id")
s.d=t
s=[P.m]
t.aE(0,"Class",H.b(["Constant","Depth","Entity","EntityPass","Math","Matrix4","Movers","Rotater","Scenes","Shapes","Techniques","ThreeDart"],s))
t.aE(0,"Type",H.b(["bool","double","dynamic","false","int","List","Map","null","num","Object","String","this","true","var","void"],s))
t.aE(0,"Reserved",H.b(["abstract","as","assert","async","await","break","case","catch","class","continue","const","default","deferred","do","else","enum","export","extends","external","factory","final","finally","for","get","if","implements","import","in","is","library","new","operator","part","rethrow","return","set","static","super","switch","sync","throw","try","typedef","with","while","yield"],s))
return u}}
V.eI.prototype={
bF:function(a){switch(a.a){case"Builtin":this.J(a.b,"#411")
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
bm:function(){var u,t,s,r
u=V.fM()
u.c=u.j(0,"Start")
t=u.j(0,"Start").k(0,"Id")
s=V.r(new H.o("_"))
C.a.h(t.a,s)
s=V.P("a","z")
C.a.h(t.a,s)
s=V.P("A","Z")
C.a.h(t.a,s)
s=u.j(0,"Id").k(0,"Id")
t=V.r(new H.o("_"))
C.a.h(s.a,t)
t=V.P("0","9")
C.a.h(s.a,t)
t=V.P("a","z")
C.a.h(s.a,t)
t=V.P("A","Z")
C.a.h(s.a,t)
t=u.j(0,"Start").k(0,"Int")
s=V.P("0","9")
C.a.h(t.a,s)
s=u.j(0,"Int").k(0,"Int")
t=V.P("0","9")
C.a.h(s.a,t)
t=u.j(0,"Int").k(0,"FloatDot")
s=V.r(new H.o("."))
C.a.h(t.a,s)
s=u.j(0,"FloatDot").k(0,"Float")
t=V.P("0","9")
C.a.h(s.a,t)
t=u.j(0,"Float").k(0,"Float")
s=V.P("0","9")
C.a.h(t.a,s)
s=u.j(0,"Start").k(0,"Sym")
t=V.r(new H.o("<>{}()[]\\-+*%!&|=.,?:;"))
C.a.h(s.a,t)
t=u.j(0,"Sym").k(0,"Sym")
s=V.r(new H.o("<>{}()[]\\-+*%!&|=.,?:;"))
C.a.h(t.a,s)
s=u.j(0,"Start").k(0,"Slash")
t=V.r(new H.o("/"))
C.a.h(s.a,t)
t=u.j(0,"Slash").k(0,"Comment")
s=V.r(new H.o("/"))
C.a.h(t.a,s)
C.a.h(u.j(0,"Slash").k(0,"Sym").a,new V.aT())
s=u.j(0,"Comment").k(0,"EndComment")
t=V.r(new H.o("\n"))
C.a.h(s.a,t)
t=u.j(0,"Comment").k(0,"Comment")
s=new V.af()
r=[V.al]
s.sa5(H.b([],r))
C.a.h(t.a,s)
t=V.r(new H.o("\n"))
C.a.h(s.a,t)
t=u.j(0,"Start").k(0,"Preprocess")
s=V.r(new H.o("#"))
C.a.h(t.a,s)
s=u.j(0,"Preprocess").k(0,"Preprocess")
t=new V.af()
t.sa5(H.b([],r))
C.a.h(s.a,t)
s=V.r(new H.o("\n"))
C.a.h(t.a,s)
s=u.j(0,"Preprocess").k(0,"EndPreprocess")
t=V.r(new H.o("\n"))
C.a.h(s.a,t)
t=u.j(0,"Start").k(0,"Whitespace")
s=V.r(new H.o(" \n\t"))
C.a.h(t.a,s)
s=u.j(0,"Whitespace").k(0,"Whitespace")
t=V.r(new H.o(" \n\t"))
C.a.h(s.a,t)
t=u.j(0,"Int")
t.d=t.a.M("Num")
t=u.j(0,"Float")
t.d=t.a.M("Num")
t=u.j(0,"Sym")
t.d=t.a.M("Symbol")
t=u.j(0,"EndComment")
t.d=t.a.M("Comment")
t=u.j(0,"EndPreprocess")
t.d=t.a.M("Preprocess")
t=u.j(0,"Whitespace")
t.d=t.a.M("Whitespace")
t=u.j(0,"Id")
s=t.a.M("Id")
t.d=s
t=[P.m]
s.aE(0,"Type",H.b(["float","double","int","void","bool","true","false","mat2","mat3","mat4","dmat2","dmat3","dmat4","mat2x2","mat2x3","mat2x4","dmat2x2","dmat2x3","dmat2x4","mat3x2","mat3x3","mat3x4","dmat3x2","dmat3x3","dmat3x4","mat4x2","mat4x3","mat4x4","dmat4x2","dmat4x3","dmat4x4","vec2","vec3","vec4","ivec2","ivec3","ivec4","bvec2","bvec3","bvec4","dvec2","dvec3","dvec4","uint","uvec2","uvec3","uvec4","sampler1D","sampler2D","sampler3D","samplerCube","sampler1DShadow","sampler2DShadow","samplerCubeShadow","sampler1DArray","sampler2DArray","sampler1DArrayShadow","sampler2DArrayShadow","isampler1D","isampler2D","isampler3D","isamplerCube","isampler1DArray","isampler2DArray","usampler1D","usampler2D","usampler3D","usamplerCube","usampler1DArray","usampler2DArray","sampler2DRect","sampler2DRectShadow","isampler2DRect","usampler2DRect","samplerBuffer","isamplerBuffer","usamplerBuffer","sampler2DMS","isampler2DMS","usampler2DMS","sampler2DMSArray","isampler2DMSArray","usampler2DMSArray","samplerCubeArray","samplerCubeArrayShadow","isamplerCubeArray","usamplerCubeArray"],t))
s.aE(0,"Reserved",H.b(["attribute","break","case","centroid","const","continue","default","discard","do","else","flat","for","highp","if","in","inout","invariant","layout","lowp","mediump","noperspective","out","patch","precision","return","sample","smooth","struct","subroutine","switch","uniform","varying","while"],t))
s.aE(0,"Builtin",H.b(["gl_FragColor","gl_Position"],t))
return u}}
V.eJ.prototype={
bF:function(a){switch(a.a){case"Attr":this.J(a.b,"#911")
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
bm:function(){var u,t,s
u=V.fM()
u.c=u.j(0,"Start")
t=u.j(0,"Start").k(0,"Id")
s=V.r(new H.o("_"))
C.a.h(t.a,s)
s=V.P("a","z")
C.a.h(t.a,s)
s=V.P("A","Z")
C.a.h(t.a,s)
s=u.j(0,"Id").k(0,"Id")
t=V.r(new H.o("_"))
C.a.h(s.a,t)
t=V.P("0","9")
C.a.h(s.a,t)
t=V.P("a","z")
C.a.h(s.a,t)
t=V.P("A","Z")
C.a.h(s.a,t)
t=u.j(0,"Id").k(0,"Attr")
s=V.r(new H.o("="))
C.a.h(t.a,s)
t.c=!0
t=u.j(0,"Start").k(0,"Sym")
s=V.r(new H.o("</\\-!>="))
C.a.h(t.a,s)
s=u.j(0,"Sym").k(0,"Sym")
t=V.r(new H.o("</\\-!>="))
C.a.h(s.a,t)
t=u.j(0,"Start").k(0,"OpenStr")
s=V.r(new H.o('"'))
C.a.h(t.a,s)
s=u.j(0,"OpenStr").k(0,"CloseStr")
t=V.r(new H.o('"'))
C.a.h(s.a,t)
t=u.j(0,"OpenStr").k(0,"EscStr")
s=V.r(new H.o("\\"))
C.a.h(t.a,s)
s=u.j(0,"EscStr").k(0,"OpenStr")
t=V.r(new H.o('"'))
C.a.h(s.a,t)
C.a.h(u.j(0,"OpenStr").k(0,"OpenStr").a,new V.aT())
C.a.h(u.j(0,"Start").k(0,"Other").a,new V.aT())
t=u.j(0,"Other").k(0,"Other")
s=new V.af()
s.sa5(H.b([],[V.al]))
C.a.h(t.a,s)
t=V.r(new H.o('</\\-!>=_"'))
C.a.h(s.a,t)
t=V.P("a","z")
C.a.h(s.a,t)
t=V.P("A","Z")
C.a.h(s.a,t)
t=u.j(0,"Sym")
t.d=t.a.M("Symbol")
t=u.j(0,"CloseStr")
t.d=t.a.M("String")
t=u.j(0,"Id")
s=t.a.M("Id")
t.d=s
s.aE(0,"Reserved",H.b(["DOCTYPE","html","head","meta","link","title","body","script"],[P.m]))
s=u.j(0,"Attr")
s.d=s.a.M("Attr")
s=u.j(0,"Other")
s.d=s.a.M("Other")
return u}}
V.fg.prototype={
ek:function(a){H.f(a,"$ia",[P.m],"$aa")
this.sbZ(H.b([],[[P.a,W.as]]))
this.J(C.a.k(a,"\n"),"#111")},
bF:function(a){},
bm:function(){return}}
V.fv.prototype={
f0:function(a,b){var u,t,s,r,q,p,o
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
o=W.k
W.Z(u,"scroll",H.j(new V.fx(s),{func:1,ret:-1,args:[o]}),!1,o)},
dA:function(a){var u,t,s,r,q,p,o,n,m,l,k
H.f(a,"$ia",[P.m],"$aa")
this.i5()
u=document
t=u.createElement("div")
t.className="textPar"
for(s=this.b.es(C.a.jt(a)),r=s.length,q=0;q<s.length;s.length===r||(0,H.x)(s),++q){p=s[q]
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
if(H.lF(n,"|",0)){m=n.split("|")
l=u.createElement("a")
l.className="linkPar"
if(1>=m.length)return H.l(m,1)
l.href=H.I(m[1])
l.textContent=H.I(m[0])
C.k.B(t,l)}else{k=P.jC(C.C,n,C.x,!1)
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
eB:function(a){var u,t,s,r
u=new V.er("dart")
u.be("dart")
t=new V.eI("glsl")
t.be("glsl")
s=new V.eJ("html")
s.be("html")
r=C.a.jm(H.b([u,t,s],[V.b6]),new V.fy(a))
if(r!=null)return r
u=new V.fg("plain")
u.be("plain")
return u},
dz:function(a4,a5,a6,a7){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3
H.f(a7,"$ia",[P.m],"$aa")
u=H.b([],[P.y])
for(t=!1,s=0;s<a7.length;++s){r=a7[s]
if(J.iJ(r).bP(r,"+")){C.a.Y(a7,s,C.i.bc(r,1))
C.a.h(u,1)
t=!0}else if(C.i.bP(r,"-")){C.a.Y(a7,s,C.i.bc(r,1))
C.a.h(u,-1)
t=!0}else C.a.h(u,0)}q=this.eB(a5)
q.ek(a7)
p=document
o=p.createElement("div")
o.className="codeTableScroll"
n=p.createElement("table")
n.className="codeTable"
C.k.B(o,n)
C.k.B(this.a,o)
m=P.jC(C.C,a4,C.x,!1)
l=p.createElement("tr")
l.className="headerRow"
k=p.createElement("td")
k.className="headerCell"
k.colSpan=t?3:2
j=p.createElement("div")
j.className="tableHeader"
j.id=m
i=W.iU(null)
i.href="#"+m
i.textContent=a4
C.k.B(j,i)
C.v.B(k,j)
C.m.B(l,k)
C.p.B(n,l)
if(t)for(h=a6,g=h,s=0;f=q.d,s<f.length;++s){r=f[s]
e=p.createElement("tr")
e.className="codeTableRow"
d=p.createElement("td")
d.className="codeLineNums codeLineLight"
c=p.createElement("td")
c.className="codeLineNums"
if(s>=u.length)return H.l(u,s)
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
for(f=r.length,a0=0;a0<r.length;r.length===f||(0,H.x)(r),++a0)C.v.B(a,r[a0])
C.m.B(e,d)
C.m.B(e,c)
C.m.B(e,a)
C.p.B(n,e)}else for(f=q.d,a1=f.length,a2=a6,a0=0;a0<f.length;f.length===a1||(0,H.x)(f),++a0){r=f[a0]
e=p.createElement("tr")
e.className="codeTableRow"
d=p.createElement("td")
d.className="codeLineNums";++a2
d.textContent=""+a2
c=p.createElement("td")
c.className="codeLineText"
for(a3=C.a.gO(r);a3.u();)C.v.B(c,a3.gE())
C.m.B(e,d)
C.m.B(e,c)
C.p.B(n,e)}},
i5:function(){var u,t,s,r
if(this.b!=null)return
u=V.fM()
u.c=u.j(0,"Start")
t=u.j(0,"Start").k(0,"Bold")
s=V.r(new H.o("*"))
C.a.h(t.a,s)
t.c=!0
t=u.j(0,"Bold").k(0,"Bold")
s=new V.af()
r=[V.al]
s.sa5(H.b([],r))
C.a.h(t.a,s)
t=V.r(new H.o("*"))
C.a.h(s.a,t)
t=u.j(0,"Bold").k(0,"BoldEnd")
s=V.r(new H.o("*"))
C.a.h(t.a,s)
t.c=!0
t=u.j(0,"Start").k(0,"Italic")
s=V.r(new H.o("_"))
C.a.h(t.a,s)
t.c=!0
t=u.j(0,"Italic").k(0,"Italic")
s=new V.af()
s.sa5(H.b([],r))
C.a.h(t.a,s)
t=V.r(new H.o("_"))
C.a.h(s.a,t)
t=u.j(0,"Italic").k(0,"ItalicEnd")
s=V.r(new H.o("_"))
C.a.h(t.a,s)
t.c=!0
t=u.j(0,"Start").k(0,"Code")
s=V.r(new H.o("`"))
C.a.h(t.a,s)
t.c=!0
t=u.j(0,"Code").k(0,"Code")
s=new V.af()
s.sa5(H.b([],r))
C.a.h(t.a,s)
t=V.r(new H.o("`"))
C.a.h(s.a,t)
t=u.j(0,"Code").k(0,"CodeEnd")
s=V.r(new H.o("`"))
C.a.h(t.a,s)
t.c=!0
t=u.j(0,"Start").k(0,"LinkHead")
s=V.r(new H.o("["))
C.a.h(t.a,s)
t.c=!0
t=u.j(0,"LinkHead").k(0,"LinkTail")
s=V.r(new H.o("|"))
C.a.h(t.a,s)
s=u.j(0,"LinkHead").k(0,"LinkEnd")
t=V.r(new H.o("]"))
C.a.h(s.a,t)
s.c=!0
s=u.j(0,"LinkHead").k(0,"LinkHead")
t=new V.af()
t.sa5(H.b([],r))
C.a.h(s.a,t)
s=V.r(new H.o("|]"))
C.a.h(t.a,s)
s=u.j(0,"LinkTail").k(0,"LinkEnd")
t=V.r(new H.o("]"))
C.a.h(s.a,t)
s.c=!0
s=u.j(0,"LinkTail").k(0,"LinkTail")
t=new V.af()
t.sa5(H.b([],r))
C.a.h(s.a,t)
s=V.r(new H.o("|]"))
C.a.h(t.a,s)
C.a.h(u.j(0,"Start").k(0,"Other").a,new V.aT())
s=u.j(0,"Other").k(0,"Other")
t=new V.af()
t.sa5(H.b([],r))
C.a.h(s.a,t)
s=V.r(new H.o("*_`["))
C.a.h(t.a,s)
s=u.j(0,"BoldEnd")
s.d=s.a.M("Bold")
s=u.j(0,"ItalicEnd")
s.d=s.a.M("Italic")
s=u.j(0,"CodeEnd")
s.d=s.a.M("Code")
s=u.j(0,"LinkEnd")
s.d=s.a.M("Link")
s=u.j(0,"Other")
s.d=s.a.M("Other")
this.b=u}}
V.fx.prototype={
$1:function(a){P.jp(C.q,new V.fw(this.a))},
$S:10}
V.fw.prototype={
$0:function(){var u,t,s
u=C.j.al(document.documentElement.scrollTop)
t=this.a.style
s=H.e(-0.01*u)+"px"
t.top=s},
$S:2}
V.fy.prototype={
$1:function(a){return H.d(a,"$ib6").a===this.a},
$S:40}
Q.i6.prototype={
$1:function(a){var u,t,s,r
H.d(a,"$iu")
u=this.a
t=this.b
s=t.a
r=[P.m]
u.dz("Vertex Shader","glsl",0,H.b((s==null?null:s.c).split("\n"),r))
t=t.a
u.dz("Fragment Shader","glsl",0,H.b((t==null?null:t.d).split("\n"),r))},
$S:6};(function aliases(){var u=J.a1.prototype
u.eS=u.i
u=J.d6.prototype
u.eU=u.i
u=P.i.prototype
u.eT=u.bK
u=W.M.prototype
u.bQ=u.af
u=W.e6.prototype
u.eW=u.aq
u=O.c6.prototype
u.cU=u.ap
u=O.aK.prototype
u.cV=u.ap
u=V.dd.prototype
u.eV=u.aC
u.cT=u.i})();(function installTearOffs(){var u=hunkHelpers._static_1,t=hunkHelpers._static_0,s=hunkHelpers.installStaticTearOff,r=hunkHelpers.installInstanceTearOff,q=hunkHelpers._instance_2u,p=hunkHelpers._instance_0u,o=hunkHelpers._instance_1u,n=hunkHelpers._instance_0i
u(P,"le","kX",11)
u(P,"lf","kY",11)
u(P,"lg","kZ",11)
t(P,"jL","ld",3)
s(W,"lp",4,null,["$4"],["l0"],20,0)
s(W,"lq",4,null,["$4"],["l1"],20,0)
var m
r(m=E.a8.prototype,"gei",0,0,null,["$1","$0"],["ej","jF"],0,0)
r(m,"geg",0,0,null,["$1","$0"],["eh","jC"],0,0)
q(m,"gjA","jB",7)
q(m,"gjD","jE",7)
r(m=E.dI.prototype,"gcY",0,0,null,["$1","$0"],["d_","cZ"],0,0)
p(m,"gjR","en",3)
o(m=X.dP.prototype,"ghf","hg",9)
o(m,"gh1","h2",9)
o(m,"gh9","ha",4)
o(m,"ghj","hk",19)
o(m,"ghh","hi",19)
o(m,"ghn","ho",4)
o(m,"ghr","hs",4)
o(m,"ghd","he",4)
o(m,"ghp","hq",4)
o(m,"ghb","hc",4)
o(m,"ght","hu",35)
o(m,"ghv","hw",9)
o(m,"ghL","hM",8)
o(m,"ghH","hI",8)
o(m,"ghJ","hK",8)
r(D.b8.prototype,"gf5",0,0,null,["$1","$0"],["au","f6"],0,0)
r(m=D.d8.prototype,"gdi",0,0,null,["$1","$0"],["dj","hl"],0,0)
o(m,"ghx","hy",36)
q(m,"gfW","fX",21)
q(m,"ghB","hC",21)
n(V.N.prototype,"gp","cC",22)
n(V.K.prototype,"gp","cC",22)
r(m=U.c3.prototype,"gaI",0,0,null,["$1","$0"],["N","a4"],0,0)
q(m,"gfU","fV",23)
q(m,"ghz","hA",23)
r(m=U.dQ.prototype,"gaI",0,0,null,["$1","$0"],["N","a4"],0,0)
o(m,"gc1","c2",1)
o(m,"gc3","c4",1)
o(m,"gc5","c6",1)
r(m=U.dR.prototype,"gaI",0,0,null,["$1","$0"],["N","a4"],0,0)
o(m,"gc1","c2",1)
o(m,"gc3","c4",1)
o(m,"gc5","c6",1)
o(m,"gfO","fP",1)
o(m,"gfQ","fR",1)
o(m,"gil","im",1)
o(m,"gij","ik",1)
o(m,"gih","ii",1)
o(U.dS.prototype,"gfS","fT",1)
r(m=M.cS.prototype,"gW",0,0,null,["$1","$0"],["X","aV"],0,0)
q(m,"ghD","hE",25)
q(m,"ghF","hG",25)
r(M.cU.prototype,"gW",0,0,null,["$1","$0"],["X","aV"],0,0)
r(m=M.cY.prototype,"gW",0,0,null,["$1","$0"],["X","aV"],0,0)
q(m,"gh5","h6",7)
q(m,"gh7","h8",7)
r(m=O.de.prototype,"gaJ",0,0,null,["$1","$0"],["S","aW"],0,0)
r(m,"ghV",0,0,null,["$1","$0"],["dq","hW"],0,0)
q(m,"gfY","fZ",26)
q(m,"gh_","h0",26)
r(O.c6.prototype,"gaJ",0,0,null,["$1","$0"],["S","aW"],0,0)
r(O.dw.prototype,"gaJ",0,0,null,["$1","$0"],["S","aW"],0,0)
r(X.dp.prototype,"gh3",0,0,null,["$1","$0"],["ao","h4"],0,0)})();(function inheritance(){var u=hunkHelpers.mixin,t=hunkHelpers.inherit,s=hunkHelpers.inheritMany
t(P.L,null)
s(P.L,[H.ip,J.a1,J.ac,P.e2,P.i,H.c5,P.aG,H.bv,H.dO,H.fk,H.fP,P.ba,H.bW,H.e7,P.bA,H.eT,H.eU,H.eQ,P.e8,P.aS,P.ax,P.dW,P.fA,P.ch,P.fB,P.aN,P.a7,P.hS,P.hI,P.bH,P.e1,P.T,P.bX,P.eL,P.hQ,P.H,P.ad,P.a6,P.b9,P.fe,P.dz,P.dZ,P.eG,P.bb,P.a,P.F,P.ag,P.m,P.aZ,W.ep,W.bk,W.ak,W.dm,W.e6,W.hL,W.cZ,W.an,W.hH,W.ec,P.eb,P.hC,O.U,O.c7,E.ej,E.a8,E.fl,E.dI,Z.dU,Z.dV,Z.bV,Z.bd,Z.aQ,D.em,D.bt,D.u,X.cR,X.d7,X.eS,X.eW,X.am,X.f6,X.fN,X.dP,D.b8,D.V,D.dq,D.dy,D.dF,D.dG,D.dH,V.W,V.aA,V.ey,V.dg,V.ae,V.Y,V.a9,V.aY,V.dt,V.N,V.K,U.dQ,U.dR,U.dS,M.cU,M.cY,M.ao,A.cO,A.ei,A.f3,A.cn,A.cr,A.cp,A.cs,A.cq,A.ct,A.bs,A.dL,A.fY,F.X,F.aV,F.bh,F.dv,F.fs,F.ft,F.fu,F.aq,F.h6,F.h7,F.ha,F.hb,O.bi,O.c6,T.fH,V.aT,V.al,V.dd,V.fj,V.fr,V.cf,V.dJ,V.cl,V.fL,X.bp,X.ci,X.eM,X.dp,V.b6,V.fv])
s(J.a1,[J.eP,J.d4,J.d6,J.aH,J.d5,J.by,H.dk,W.bu,W.br,W.dX,W.es,W.cW,W.cX,W.k,W.e_,W.bc,W.db,W.e4,W.ds,W.aO,W.e9,W.ed,P.cP,P.d_,P.dr,P.bF,P.du,P.dC,P.dM])
s(J.d6,[J.ff,J.cu,J.bg])
t(J.io,J.aH)
s(J.d5,[J.d3,J.d2])
t(P.eV,P.e2)
s(P.eV,[H.dN,W.hl,W.ab,P.eC])
t(H.o,H.dN)
s(P.i,[H.ev,H.eZ,H.cv])
s(H.ev,[H.bz,H.d9])
s(P.aG,[H.f_,H.hf])
t(H.f0,H.bz)
s(P.ba,[H.fd,H.eR,H.h0,H.fR,H.el,H.fp,P.dn,P.az,P.h1,P.h_,P.cg,P.eo,P.eq])
s(H.bW,[H.ia,H.fF,H.i1,H.i2,H.i3,P.hh,P.hg,P.hi,P.hj,P.hP,P.hO,P.hq,P.hu,P.hr,P.hs,P.ht,P.hx,P.hy,P.hw,P.hv,P.fC,P.fD,P.hW,P.hF,P.hE,P.hG,P.eY,P.et,P.eu,W.ew,W.hp,W.fc,W.fb,W.hJ,W.hK,W.hN,W.hR,P.hY,P.eD,P.eE,E.fm,E.fn,E.fo,E.fK,D.eA,D.eB,F.hT,F.hd,F.hc,F.h8,F.h9,T.fJ,T.fI,V.i9,V.fx,V.fw,V.fy,Q.i6])
s(H.fF,[H.fz,H.bT])
t(P.eX,P.bA)
s(P.eX,[H.aI,W.hk])
t(H.dh,H.dk)
s(H.dh,[H.cz,H.cB])
t(H.cA,H.cz)
t(H.di,H.cA)
t(H.cC,H.cB)
t(H.dj,H.cC)
s(H.dj,[H.f7,H.f8,H.f9,H.dl,H.fa])
t(P.hD,P.hS)
t(P.hB,P.hI)
t(P.bY,P.fB)
t(P.ex,P.bX)
s(P.bY,[P.eK,P.h3])
t(P.h2,P.ex)
s(P.a6,[P.w,P.y])
s(P.az,[P.bE,P.eN])
s(W.bu,[W.z,W.cw])
s(W.z,[W.M,W.b5,W.c_,W.cx])
s(W.M,[W.t,P.n])
s(W.t,[W.cN,W.eh,W.bS,W.b4,W.bq,W.as,W.eF,W.d0,W.c4,W.c8,W.fq,W.bG,W.dA,W.dB,W.fE,W.cj])
t(W.bZ,W.dX)
t(W.e0,W.e_)
t(W.bw,W.e0)
t(W.d1,W.c_)
t(W.bj,W.k)
s(W.bj,[W.aJ,W.a2,W.aC])
t(W.e5,W.e4)
t(W.ca,W.e5)
t(W.ea,W.e9)
t(W.fO,W.ea)
t(W.he,W.c8)
t(W.aR,W.a2)
t(W.dY,W.cX)
t(W.ee,W.ed)
t(W.e3,W.ee)
t(W.hm,W.hk)
t(W.hn,P.fA)
t(W.ix,W.hn)
t(W.ho,P.ch)
t(W.hM,W.e6)
t(P.av,P.hC)
t(P.cd,P.n)
s(E.ej,[Z.cQ,A.ce,T.ck])
s(D.u,[D.be,D.bf,D.D,X.fh])
s(X.fh,[X.dc,X.aW,X.c9,X.dK])
s(O.U,[D.d8,U.c3,M.cS])
s(D.em,[U.en,U.a3])
t(U.cT,U.a3)
s(A.ce,[A.df,A.dx])
s(A.dL,[A.G,A.fU,A.fV,A.fX,A.fS,A.Q,A.fT,A.C,A.fW,A.fZ,A.co,A.ah,A.aa,A.a5])
s(O.bi,[O.de,O.dw])
s(O.c6,[O.f1,O.f2,O.aK])
s(O.aK,[O.f4,O.f5])
s(T.ck,[T.dD,T.dE])
t(T.fG,T.dD)
s(V.dd,[V.af,V.cm])
t(X.eH,X.ci)
s(V.b6,[V.er,V.eI,V.eJ,V.fg])
u(H.dN,H.dO)
u(H.cz,P.T)
u(H.cA,H.bv)
u(H.cB,P.T)
u(H.cC,H.bv)
u(P.e2,P.T)
u(W.dX,W.ep)
u(W.e_,P.T)
u(W.e0,W.ak)
u(W.e4,P.T)
u(W.e5,W.ak)
u(W.e9,P.T)
u(W.ea,W.ak)
u(W.ed,P.T)
u(W.ee,W.ak)})();(function constants(){var u=hunkHelpers.makeConstList
C.n=W.b4.prototype
C.o=W.bq.prototype
C.y=W.br.prototype
C.k=W.as.prototype
C.J=W.cW.prototype
C.L=W.d0.prototype
C.z=W.d1.prototype
C.N=J.a1.prototype
C.a=J.aH.prototype
C.O=J.d2.prototype
C.h=J.d3.prototype
C.r=J.d4.prototype
C.j=J.d5.prototype
C.i=J.by.prototype
C.V=J.bg.prototype
C.Z=W.ca.prototype
C.D=J.ff.prototype
C.E=W.ds.prototype
C.b=P.bF.prototype
C.v=W.bG.prototype
C.p=W.dA.prototype
C.m=W.dB.prototype
C.w=J.cu.prototype
C.F=W.aR.prototype
C.G=W.cw.prototype
C.H=new P.fe()
C.I=new P.h3()
C.l=new P.hD()
C.c=new A.bs(0,"ColorSourceType.None")
C.f=new A.bs(1,"ColorSourceType.Solid")
C.d=new A.bs(2,"ColorSourceType.Texture2D")
C.e=new A.bs(3,"ColorSourceType.TextureCube")
C.q=new P.b9(0)
C.K=new P.b9(5e6)
C.M=new P.eL("element",!0,!1,!1,!1)
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
C.C=H.b(u([0,0,65498,45055,65535,34815,65534,18431]),[P.y])
C.t=H.b(u(["bind","if","ref","repeat","syntax"]),[P.m])
C.u=H.b(u(["A::href","AREA::href","BLOCKQUOTE::cite","BODY::background","COMMAND::icon","DEL::cite","FORM::action","IMG::src","INPUT::src","INS::cite","Q::cite","VIDEO::poster"]),[P.m])
C.x=new P.h2(!1)})();(function staticFields(){$.aF=0
$.bU=null
$.iV=null
$.iz=!1
$.jO=null
$.jJ=null
$.jT=null
$.hZ=null
$.i4=null
$.iK=null
$.bI=null
$.cG=null
$.cH=null
$.iA=!1
$.R=C.l
$.aU=null
$.ij=null
$.j1=null
$.j0=null
$.j9=null
$.je=null
$.cb=null
$.jk=null
$.jt=null
$.jw=null
$.jv=null
$.h4=null
$.ju=null
$.kR="uniform mat4 viewMat;                             \nuniform float fov;                                \nuniform float ratio;                              \n                                                  \nattribute vec3 posAttr;                           \n                                                  \nvarying vec3 cubeTxt;                             \n                                                  \nvoid main()                                       \n{                                                 \n  float t = 1.0 / (tan(fov * 0.5)*3.0);           \n  float x = -t * posAttr.x / ratio;               \n  float y = t * posAttr.y;                        \n  cubeTxt = (viewMat * vec4(x, y, 1.0, 0.0)).xyz; \n  gl_Position = vec4(posAttr, 1.0);               \n}                                                 \n"
$.kQ="precision mediump float;                                              \n                                                                      \nuniform samplerCube boxTxt;                                           \nuniform vec3 boxClr;                                                  \n                                                                      \nvarying vec3 cubeTxt;                                                 \n                                                                      \nvoid main()                                                           \n{                                                                     \n   vec3 txtCube = normalize(cubeTxt);                                 \n   gl_FragColor = vec4(boxClr*textureCube(boxTxt, txtCube).xyz, 1.0); \n}                                                                     \n"
$.jd=null})();(function lazyInitializers(){var u=hunkHelpers.lazy
u($,"lN","jW",function(){return H.jN("_$dart_dartClosure")})
u($,"lO","iP",function(){return H.jN("_$dart_js")})
u($,"lS","jX",function(){return H.aP(H.fQ({
toString:function(){return"$receiver$"}}))})
u($,"lT","jY",function(){return H.aP(H.fQ({$method$:null,
toString:function(){return"$receiver$"}}))})
u($,"lU","jZ",function(){return H.aP(H.fQ(null))})
u($,"lV","k_",function(){return H.aP(function(){var $argumentsExpr$='$arguments$'
try{null.$method$($argumentsExpr$)}catch(t){return t.message}}())})
u($,"lY","k2",function(){return H.aP(H.fQ(void 0))})
u($,"lZ","k3",function(){return H.aP(function(){var $argumentsExpr$='$arguments$'
try{(void 0).$method$($argumentsExpr$)}catch(t){return t.message}}())})
u($,"lX","k1",function(){return H.aP(H.jr(null))})
u($,"lW","k0",function(){return H.aP(function(){try{null.$method$}catch(t){return t.message}}())})
u($,"m0","k5",function(){return H.aP(H.jr(void 0))})
u($,"m_","k4",function(){return H.aP(function(){try{(void 0).$method$}catch(t){return t.message}}())})
u($,"mh","iQ",function(){return P.kW()})
u($,"ml","cM",function(){return[]})
u($,"mk","ka",function(){return P.kM("^[\\-\\.0-9A-Z_a-z~]*$",!0,!1)})
u($,"mi","k9",function(){return P.j6(["A","ABBR","ACRONYM","ADDRESS","AREA","ARTICLE","ASIDE","AUDIO","B","BDI","BDO","BIG","BLOCKQUOTE","BR","BUTTON","CANVAS","CAPTION","CENTER","CITE","CODE","COL","COLGROUP","COMMAND","DATA","DATALIST","DD","DEL","DETAILS","DFN","DIR","DIV","DL","DT","EM","FIELDSET","FIGCAPTION","FIGURE","FONT","FOOTER","FORM","H1","H2","H3","H4","H5","H6","HEADER","HGROUP","HR","I","IFRAME","IMG","INPUT","INS","KBD","LABEL","LEGEND","LI","MAP","MARK","MENU","METER","NAV","NOBR","OL","OPTGROUP","OPTION","OUTPUT","P","PRE","PROGRESS","Q","S","SAMP","SECTION","SELECT","SMALL","SOURCE","SPAN","STRIKE","STRONG","SUB","SUMMARY","SUP","TABLE","TBODY","TD","TEXTAREA","TFOOT","TH","THEAD","TIME","TR","TRACK","TT","U","UL","VAR","VIDEO","WBR"],P.m)})
u($,"mj","iR",function(){return P.kx(P.m,P.bb)})
u($,"ma","k8",function(){return Z.aw(0)})
u($,"m4","k6",function(){return Z.aw(511)})
u($,"mc","aE",function(){return Z.aw(1)})
u($,"mb","b1",function(){return Z.aw(2)})
u($,"m6","b0",function(){return Z.aw(4)})
u($,"md","b2",function(){return Z.aw(8)})
u($,"me","b3",function(){return Z.aw(16)})
u($,"m7","cK",function(){return Z.aw(32)})
u($,"m8","cL",function(){return Z.aw(64)})
u($,"m9","k7",function(){return Z.aw(96)})
u($,"mf","bQ",function(){return Z.aw(128)})
u($,"m5","b_",function(){return Z.aw(256)})
u($,"lM","jV",function(){return new V.ey(1e-9)})
u($,"lL","J",function(){return $.jV()})})()
var v={mangledGlobalNames:{y:"int",w:"double",a6:"num",m:"String",H:"bool",F:"Null",a:"List"},mangledNames:{},getTypeFromName:getGlobalFromName,metadata:[],types:[{func:1,ret:-1,opt:[D.u]},{func:1,ret:-1,args:[D.u]},{func:1,ret:P.F},{func:1,ret:-1},{func:1,ret:-1,args:[W.a2]},{func:1,ret:P.F,args:[F.X]},{func:1,ret:P.F,args:[D.u]},{func:1,ret:-1,args:[P.y,[P.i,E.a8]]},{func:1,ret:-1,args:[W.aC]},{func:1,ret:-1,args:[W.k]},{func:1,ret:P.F,args:[W.k]},{func:1,ret:-1,args:[{func:1,ret:-1}]},{func:1,ret:P.F,args:[,,]},{func:1,ret:P.m,args:[P.y]},{func:1,ret:P.H,args:[W.z]},{func:1,args:[,]},{func:1,ret:P.H,args:[P.m]},{func:1,ret:P.H,args:[W.an]},{func:1,ret:P.F,args:[{func:1,ret:-1,args:[D.u]}]},{func:1,ret:-1,args:[W.aJ]},{func:1,ret:P.H,args:[W.M,P.m,P.m,W.bk]},{func:1,ret:-1,args:[P.y,[P.i,D.V]]},{func:1,ret:P.w},{func:1,ret:-1,args:[P.y,[P.i,U.a3]]},{func:1,ret:P.F,args:[,]},{func:1,ret:-1,args:[P.y,[P.i,M.ao]]},{func:1,ret:-1,args:[P.y,[P.i,V.ae]]},{func:1,args:[W.k]},{func:1,ret:P.m,args:[P.m]},{func:1,ret:-1,args:[W.z,W.z]},{func:1,ret:W.M,args:[W.z]},{func:1,ret:P.F,args:[{func:1,ret:-1}]},{func:1,args:[,P.m]},{func:1,ret:P.F,args:[P.a6]},{func:1,args:[P.m]},{func:1,ret:-1,args:[W.aR]},{func:1,ret:P.H,args:[[P.i,D.V]]},{func:1,ret:P.F,args:[F.aq,P.w,P.w]},{func:1,ret:[P.ax,,],args:[,]},{func:1,ret:P.F,args:[P.aN]},{func:1,ret:P.H,args:[V.b6]},{func:1,ret:P.F,args:[,],opt:[P.ag]}],interceptorsByTag:null,leafTags:null};(function nativeSupport(){!function(){var u=function(a){var o={}
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
hunkHelpers.setOrUpdateInterceptorsByTag({DOMError:J.a1,MediaError:J.a1,Navigator:J.a1,NavigatorConcurrentHardware:J.a1,NavigatorUserMediaError:J.a1,OverconstrainedError:J.a1,PositionError:J.a1,WebGLActiveInfo:J.a1,WebGLRenderbuffer:J.a1,WebGL2RenderingContext:J.a1,SQLError:J.a1,ArrayBufferView:H.dk,Float32Array:H.di,Int16Array:H.f7,Int32Array:H.f8,Uint32Array:H.f9,Uint8ClampedArray:H.dl,CanvasPixelArray:H.dl,Uint8Array:H.fa,HTMLBRElement:W.t,HTMLButtonElement:W.t,HTMLContentElement:W.t,HTMLDListElement:W.t,HTMLDataElement:W.t,HTMLDataListElement:W.t,HTMLDetailsElement:W.t,HTMLDialogElement:W.t,HTMLEmbedElement:W.t,HTMLFieldSetElement:W.t,HTMLHRElement:W.t,HTMLHeadingElement:W.t,HTMLHtmlElement:W.t,HTMLIFrameElement:W.t,HTMLInputElement:W.t,HTMLLIElement:W.t,HTMLLabelElement:W.t,HTMLLegendElement:W.t,HTMLLinkElement:W.t,HTMLMapElement:W.t,HTMLMenuElement:W.t,HTMLMetaElement:W.t,HTMLMeterElement:W.t,HTMLModElement:W.t,HTMLOListElement:W.t,HTMLObjectElement:W.t,HTMLOptGroupElement:W.t,HTMLOptionElement:W.t,HTMLOutputElement:W.t,HTMLParagraphElement:W.t,HTMLParamElement:W.t,HTMLPictureElement:W.t,HTMLPreElement:W.t,HTMLProgressElement:W.t,HTMLQuoteElement:W.t,HTMLScriptElement:W.t,HTMLShadowElement:W.t,HTMLSlotElement:W.t,HTMLSourceElement:W.t,HTMLSpanElement:W.t,HTMLStyleElement:W.t,HTMLTableCaptionElement:W.t,HTMLTableColElement:W.t,HTMLTextAreaElement:W.t,HTMLTimeElement:W.t,HTMLTitleElement:W.t,HTMLTrackElement:W.t,HTMLUListElement:W.t,HTMLUnknownElement:W.t,HTMLDirectoryElement:W.t,HTMLFontElement:W.t,HTMLFrameElement:W.t,HTMLFrameSetElement:W.t,HTMLMarqueeElement:W.t,HTMLElement:W.t,HTMLAnchorElement:W.cN,HTMLAreaElement:W.eh,HTMLBaseElement:W.bS,HTMLBodyElement:W.b4,HTMLCanvasElement:W.bq,CanvasRenderingContext2D:W.br,CDATASection:W.b5,CharacterData:W.b5,Comment:W.b5,ProcessingInstruction:W.b5,Text:W.b5,CSSStyleDeclaration:W.bZ,MSStyleCSSProperties:W.bZ,CSS2Properties:W.bZ,HTMLDivElement:W.as,XMLDocument:W.c_,Document:W.c_,DOMException:W.es,DOMImplementation:W.cW,DOMRectReadOnly:W.cX,Element:W.M,AbortPaymentEvent:W.k,AnimationEvent:W.k,AnimationPlaybackEvent:W.k,ApplicationCacheErrorEvent:W.k,BackgroundFetchClickEvent:W.k,BackgroundFetchEvent:W.k,BackgroundFetchFailEvent:W.k,BackgroundFetchedEvent:W.k,BeforeInstallPromptEvent:W.k,BeforeUnloadEvent:W.k,BlobEvent:W.k,CanMakePaymentEvent:W.k,ClipboardEvent:W.k,CloseEvent:W.k,CustomEvent:W.k,DeviceMotionEvent:W.k,DeviceOrientationEvent:W.k,ErrorEvent:W.k,ExtendableEvent:W.k,ExtendableMessageEvent:W.k,FetchEvent:W.k,FontFaceSetLoadEvent:W.k,ForeignFetchEvent:W.k,GamepadEvent:W.k,HashChangeEvent:W.k,InstallEvent:W.k,MediaEncryptedEvent:W.k,MediaKeyMessageEvent:W.k,MediaQueryListEvent:W.k,MediaStreamEvent:W.k,MediaStreamTrackEvent:W.k,MessageEvent:W.k,MIDIConnectionEvent:W.k,MIDIMessageEvent:W.k,MutationEvent:W.k,NotificationEvent:W.k,PageTransitionEvent:W.k,PaymentRequestEvent:W.k,PaymentRequestUpdateEvent:W.k,PopStateEvent:W.k,PresentationConnectionAvailableEvent:W.k,PresentationConnectionCloseEvent:W.k,ProgressEvent:W.k,PromiseRejectionEvent:W.k,PushEvent:W.k,RTCDataChannelEvent:W.k,RTCDTMFToneChangeEvent:W.k,RTCPeerConnectionIceEvent:W.k,RTCTrackEvent:W.k,SecurityPolicyViolationEvent:W.k,SensorErrorEvent:W.k,SpeechRecognitionError:W.k,SpeechRecognitionEvent:W.k,SpeechSynthesisEvent:W.k,StorageEvent:W.k,SyncEvent:W.k,TrackEvent:W.k,TransitionEvent:W.k,WebKitTransitionEvent:W.k,VRDeviceEvent:W.k,VRDisplayEvent:W.k,VRSessionEvent:W.k,MojoInterfaceRequestEvent:W.k,ResourceProgressEvent:W.k,USBConnectionEvent:W.k,IDBVersionChangeEvent:W.k,AudioProcessingEvent:W.k,OfflineAudioCompletionEvent:W.k,WebGLContextEvent:W.k,Event:W.k,InputEvent:W.k,EventTarget:W.bu,HTMLFormElement:W.eF,HTMLHeadElement:W.d0,HTMLCollection:W.bw,HTMLFormControlsCollection:W.bw,HTMLOptionsCollection:W.bw,HTMLDocument:W.d1,ImageData:W.bc,HTMLImageElement:W.c4,KeyboardEvent:W.aJ,Location:W.db,HTMLAudioElement:W.c8,HTMLMediaElement:W.c8,PointerEvent:W.a2,MouseEvent:W.a2,DragEvent:W.a2,DocumentFragment:W.z,ShadowRoot:W.z,DocumentType:W.z,Node:W.z,NodeList:W.ca,RadioNodeList:W.ca,Range:W.ds,HTMLSelectElement:W.fq,HTMLTableCellElement:W.bG,HTMLTableDataCellElement:W.bG,HTMLTableHeaderCellElement:W.bG,HTMLTableElement:W.dA,HTMLTableRowElement:W.dB,HTMLTableSectionElement:W.fE,HTMLTemplateElement:W.cj,Touch:W.aO,TouchEvent:W.aC,TouchList:W.fO,CompositionEvent:W.bj,FocusEvent:W.bj,TextEvent:W.bj,UIEvent:W.bj,HTMLVideoElement:W.he,WheelEvent:W.aR,Window:W.cw,DOMWindow:W.cw,Attr:W.cx,ClientRect:W.dY,DOMRect:W.dY,NamedNodeMap:W.e3,MozNamedAttrMap:W.e3,SVGScriptElement:P.cd,SVGAElement:P.n,SVGAnimateElement:P.n,SVGAnimateMotionElement:P.n,SVGAnimateTransformElement:P.n,SVGAnimationElement:P.n,SVGCircleElement:P.n,SVGClipPathElement:P.n,SVGDefsElement:P.n,SVGDescElement:P.n,SVGDiscardElement:P.n,SVGEllipseElement:P.n,SVGFEBlendElement:P.n,SVGFEColorMatrixElement:P.n,SVGFEComponentTransferElement:P.n,SVGFECompositeElement:P.n,SVGFEConvolveMatrixElement:P.n,SVGFEDiffuseLightingElement:P.n,SVGFEDisplacementMapElement:P.n,SVGFEDistantLightElement:P.n,SVGFEFloodElement:P.n,SVGFEFuncAElement:P.n,SVGFEFuncBElement:P.n,SVGFEFuncGElement:P.n,SVGFEFuncRElement:P.n,SVGFEGaussianBlurElement:P.n,SVGFEImageElement:P.n,SVGFEMergeElement:P.n,SVGFEMergeNodeElement:P.n,SVGFEMorphologyElement:P.n,SVGFEOffsetElement:P.n,SVGFEPointLightElement:P.n,SVGFESpecularLightingElement:P.n,SVGFESpotLightElement:P.n,SVGFETileElement:P.n,SVGFETurbulenceElement:P.n,SVGFilterElement:P.n,SVGForeignObjectElement:P.n,SVGGElement:P.n,SVGGeometryElement:P.n,SVGGraphicsElement:P.n,SVGImageElement:P.n,SVGLineElement:P.n,SVGLinearGradientElement:P.n,SVGMarkerElement:P.n,SVGMaskElement:P.n,SVGMetadataElement:P.n,SVGPathElement:P.n,SVGPatternElement:P.n,SVGPolygonElement:P.n,SVGPolylineElement:P.n,SVGRadialGradientElement:P.n,SVGRectElement:P.n,SVGSetElement:P.n,SVGStopElement:P.n,SVGStyleElement:P.n,SVGSVGElement:P.n,SVGSwitchElement:P.n,SVGSymbolElement:P.n,SVGTSpanElement:P.n,SVGTextContentElement:P.n,SVGTextElement:P.n,SVGTextPathElement:P.n,SVGTextPositioningElement:P.n,SVGTitleElement:P.n,SVGUseElement:P.n,SVGViewElement:P.n,SVGGradientElement:P.n,SVGComponentTransferFunctionElement:P.n,SVGFEDropShadowElement:P.n,SVGMPathElement:P.n,SVGElement:P.n,WebGLBuffer:P.cP,WebGLFramebuffer:P.d_,WebGLProgram:P.dr,WebGLRenderingContext:P.bF,WebGLShader:P.du,WebGLTexture:P.dC,WebGLUniformLocation:P.dM})
hunkHelpers.setOrUpdateLeafTags({DOMError:true,MediaError:true,Navigator:true,NavigatorConcurrentHardware:true,NavigatorUserMediaError:true,OverconstrainedError:true,PositionError:true,WebGLActiveInfo:true,WebGLRenderbuffer:true,WebGL2RenderingContext:true,SQLError:true,ArrayBufferView:false,Float32Array:true,Int16Array:true,Int32Array:true,Uint32Array:true,Uint8ClampedArray:true,CanvasPixelArray:true,Uint8Array:false,HTMLBRElement:true,HTMLButtonElement:true,HTMLContentElement:true,HTMLDListElement:true,HTMLDataElement:true,HTMLDataListElement:true,HTMLDetailsElement:true,HTMLDialogElement:true,HTMLEmbedElement:true,HTMLFieldSetElement:true,HTMLHRElement:true,HTMLHeadingElement:true,HTMLHtmlElement:true,HTMLIFrameElement:true,HTMLInputElement:true,HTMLLIElement:true,HTMLLabelElement:true,HTMLLegendElement:true,HTMLLinkElement:true,HTMLMapElement:true,HTMLMenuElement:true,HTMLMetaElement:true,HTMLMeterElement:true,HTMLModElement:true,HTMLOListElement:true,HTMLObjectElement:true,HTMLOptGroupElement:true,HTMLOptionElement:true,HTMLOutputElement:true,HTMLParagraphElement:true,HTMLParamElement:true,HTMLPictureElement:true,HTMLPreElement:true,HTMLProgressElement:true,HTMLQuoteElement:true,HTMLScriptElement:true,HTMLShadowElement:true,HTMLSlotElement:true,HTMLSourceElement:true,HTMLSpanElement:true,HTMLStyleElement:true,HTMLTableCaptionElement:true,HTMLTableColElement:true,HTMLTextAreaElement:true,HTMLTimeElement:true,HTMLTitleElement:true,HTMLTrackElement:true,HTMLUListElement:true,HTMLUnknownElement:true,HTMLDirectoryElement:true,HTMLFontElement:true,HTMLFrameElement:true,HTMLFrameSetElement:true,HTMLMarqueeElement:true,HTMLElement:false,HTMLAnchorElement:true,HTMLAreaElement:true,HTMLBaseElement:true,HTMLBodyElement:true,HTMLCanvasElement:true,CanvasRenderingContext2D:true,CDATASection:true,CharacterData:true,Comment:true,ProcessingInstruction:true,Text:true,CSSStyleDeclaration:true,MSStyleCSSProperties:true,CSS2Properties:true,HTMLDivElement:true,XMLDocument:true,Document:false,DOMException:true,DOMImplementation:true,DOMRectReadOnly:false,Element:false,AbortPaymentEvent:true,AnimationEvent:true,AnimationPlaybackEvent:true,ApplicationCacheErrorEvent:true,BackgroundFetchClickEvent:true,BackgroundFetchEvent:true,BackgroundFetchFailEvent:true,BackgroundFetchedEvent:true,BeforeInstallPromptEvent:true,BeforeUnloadEvent:true,BlobEvent:true,CanMakePaymentEvent:true,ClipboardEvent:true,CloseEvent:true,CustomEvent:true,DeviceMotionEvent:true,DeviceOrientationEvent:true,ErrorEvent:true,ExtendableEvent:true,ExtendableMessageEvent:true,FetchEvent:true,FontFaceSetLoadEvent:true,ForeignFetchEvent:true,GamepadEvent:true,HashChangeEvent:true,InstallEvent:true,MediaEncryptedEvent:true,MediaKeyMessageEvent:true,MediaQueryListEvent:true,MediaStreamEvent:true,MediaStreamTrackEvent:true,MessageEvent:true,MIDIConnectionEvent:true,MIDIMessageEvent:true,MutationEvent:true,NotificationEvent:true,PageTransitionEvent:true,PaymentRequestEvent:true,PaymentRequestUpdateEvent:true,PopStateEvent:true,PresentationConnectionAvailableEvent:true,PresentationConnectionCloseEvent:true,ProgressEvent:true,PromiseRejectionEvent:true,PushEvent:true,RTCDataChannelEvent:true,RTCDTMFToneChangeEvent:true,RTCPeerConnectionIceEvent:true,RTCTrackEvent:true,SecurityPolicyViolationEvent:true,SensorErrorEvent:true,SpeechRecognitionError:true,SpeechRecognitionEvent:true,SpeechSynthesisEvent:true,StorageEvent:true,SyncEvent:true,TrackEvent:true,TransitionEvent:true,WebKitTransitionEvent:true,VRDeviceEvent:true,VRDisplayEvent:true,VRSessionEvent:true,MojoInterfaceRequestEvent:true,ResourceProgressEvent:true,USBConnectionEvent:true,IDBVersionChangeEvent:true,AudioProcessingEvent:true,OfflineAudioCompletionEvent:true,WebGLContextEvent:true,Event:false,InputEvent:false,EventTarget:false,HTMLFormElement:true,HTMLHeadElement:true,HTMLCollection:true,HTMLFormControlsCollection:true,HTMLOptionsCollection:true,HTMLDocument:true,ImageData:true,HTMLImageElement:true,KeyboardEvent:true,Location:true,HTMLAudioElement:true,HTMLMediaElement:false,PointerEvent:true,MouseEvent:false,DragEvent:false,DocumentFragment:true,ShadowRoot:true,DocumentType:true,Node:false,NodeList:true,RadioNodeList:true,Range:true,HTMLSelectElement:true,HTMLTableCellElement:true,HTMLTableDataCellElement:true,HTMLTableHeaderCellElement:true,HTMLTableElement:true,HTMLTableRowElement:true,HTMLTableSectionElement:true,HTMLTemplateElement:true,Touch:true,TouchEvent:true,TouchList:true,CompositionEvent:true,FocusEvent:true,TextEvent:true,UIEvent:false,HTMLVideoElement:true,WheelEvent:true,Window:true,DOMWindow:true,Attr:true,ClientRect:true,DOMRect:true,NamedNodeMap:true,MozNamedAttrMap:true,SVGScriptElement:true,SVGAElement:true,SVGAnimateElement:true,SVGAnimateMotionElement:true,SVGAnimateTransformElement:true,SVGAnimationElement:true,SVGCircleElement:true,SVGClipPathElement:true,SVGDefsElement:true,SVGDescElement:true,SVGDiscardElement:true,SVGEllipseElement:true,SVGFEBlendElement:true,SVGFEColorMatrixElement:true,SVGFEComponentTransferElement:true,SVGFECompositeElement:true,SVGFEConvolveMatrixElement:true,SVGFEDiffuseLightingElement:true,SVGFEDisplacementMapElement:true,SVGFEDistantLightElement:true,SVGFEFloodElement:true,SVGFEFuncAElement:true,SVGFEFuncBElement:true,SVGFEFuncGElement:true,SVGFEFuncRElement:true,SVGFEGaussianBlurElement:true,SVGFEImageElement:true,SVGFEMergeElement:true,SVGFEMergeNodeElement:true,SVGFEMorphologyElement:true,SVGFEOffsetElement:true,SVGFEPointLightElement:true,SVGFESpecularLightingElement:true,SVGFESpotLightElement:true,SVGFETileElement:true,SVGFETurbulenceElement:true,SVGFilterElement:true,SVGForeignObjectElement:true,SVGGElement:true,SVGGeometryElement:true,SVGGraphicsElement:true,SVGImageElement:true,SVGLineElement:true,SVGLinearGradientElement:true,SVGMarkerElement:true,SVGMaskElement:true,SVGMetadataElement:true,SVGPathElement:true,SVGPatternElement:true,SVGPolygonElement:true,SVGPolylineElement:true,SVGRadialGradientElement:true,SVGRectElement:true,SVGSetElement:true,SVGStopElement:true,SVGStyleElement:true,SVGSVGElement:true,SVGSwitchElement:true,SVGSymbolElement:true,SVGTSpanElement:true,SVGTextContentElement:true,SVGTextElement:true,SVGTextPathElement:true,SVGTextPositioningElement:true,SVGTitleElement:true,SVGUseElement:true,SVGViewElement:true,SVGGradientElement:true,SVGComponentTransferFunctionElement:true,SVGFEDropShadowElement:true,SVGMPathElement:true,SVGElement:false,WebGLBuffer:true,WebGLFramebuffer:true,WebGLProgram:true,WebGLRenderingContext:true,WebGLShader:true,WebGLTexture:true,WebGLUniformLocation:true})
H.dh.$nativeSuperclassTag="ArrayBufferView"
H.cz.$nativeSuperclassTag="ArrayBufferView"
H.cA.$nativeSuperclassTag="ArrayBufferView"
H.di.$nativeSuperclassTag="ArrayBufferView"
H.cB.$nativeSuperclassTag="ArrayBufferView"
H.cC.$nativeSuperclassTag="ArrayBufferView"
H.dj.$nativeSuperclassTag="ArrayBufferView"})()
convertAllToFastObject(w)
convertToFastObject($);(function(a){if(typeof document==="undefined"){a(null)
return}if(typeof document.currentScript!='undefined'){a(document.currentScript)
return}var u=document.scripts
function onLoad(b){for(var s=0;s<u.length;++s)u[s].removeEventListener("load",onLoad,false)
a(b.target)}for(var t=0;t<u.length;++t)u[t].addEventListener("load",onLoad,false)})(function(a){v.currentScript=a
if(typeof dartMainRunner==="function")dartMainRunner(Q.jQ,[])
else Q.jQ([])})})()
//# sourceMappingURL=test.dart.js.map
