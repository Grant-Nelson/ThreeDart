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
a[c]=function(){a[c]=function(){H.mX(b)}
var t
var s=d
try{if(a[b]===u){t=a[b]=s
t=a[b]=d()}else t=a[b]}finally{if(t===s)a[b]=null
a[c]=function(){return this[b]}}return t}}function makeConstList(a){a.immutable$list=Array
a.fixed$length=Array
return a}function convertToFastObject(a){function t(){}t.prototype=a
new t()
return a}function convertAllToFastObject(a){for(var u=0;u<a.length;++u)convertToFastObject(a[u])}var y=0
function tearOffGetter(a,b,c,d,e){return e?new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+d+y+++"(receiver) {"+"if (c === null) c = "+"H.jd"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, true, name);"+"return new c(this, funcs[0], receiver, name);"+"}")(a,b,c,d,H,null):new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+d+y+++"() {"+"if (c === null) c = "+"H.jd"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, false, name);"+"return new c(this, funcs[0], null, name);"+"}")(a,b,c,d,H,null)}function tearOff(a,b,c,d,e,f){var u=null
return d?function(){if(u===null)u=H.jd(this,a,b,c,true,false,e).prototype
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
if(w[u][a])return w[u][a]}}var C={},H={iW:function iW(a){this.a=a},
ie:function(a){var u,t
u=a^48
if(u<=9)return u
t=a|32
if(97<=t&&t<=102)return t-87
return-1},
jA:function(){return new P.dm("No element")},
lg:function(){return new P.dm("Too few elements")},
Z:function Z(a){this.a=a},
ek:function ek(){},
d1:function d1(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=null
_.$ti=d},
eN:function eN(a,b,c){this.a=a
this.b=b
this.$ti=c},
eO:function eO(a,b,c){var _=this
_.a=null
_.b=a
_.c=b
_.$ti=c},
hf:function hf(a,b,c){this.a=a
this.b=b
this.$ti=c},
hg:function hg(a,b,c){this.a=a
this.b=b
this.$ti=c},
br:function br(){},
cj:function cj(){},
dB:function dB(){},
l8:function(){throw H.d(P.U("Cannot modify unmodifiable Map"))},
bO:function(a){var u,t
u=H.O(v.mangledGlobalNames[a])
if(typeof u==="string")return u
t="minified:"+a
return t},
mG:function(a){return v.types[H.a7(a)]},
mL:function(a,b){var u
if(b!=null){u=b.x
if(u!=null)return u}return!!J.N(a).$iaY},
i:function(a){var u
if(typeof a==="string")return a
if(typeof a==="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
u=J.al(a)
if(typeof u!=="string")throw H.d(H.a9(a))
return u},
lE:function(a){var u,t,s
u=a.$reflectionInfo
if(u==null)return
u=J.ex(u)
t=u[0]
s=u[1]
return new H.f6(a,u,(t&2)===2,t>>2,s>>1,(s&1)===1,u[2])},
c5:function(a){var u=a.$identityHash
if(u==null){u=Math.random()*0x3fffffff|0
a.$identityHash=u}return u},
lB:function(a,b){var u,t,s,r,q,p
u=/^\s*[+-]?((0x[a-f0-9]+)|(\d+)|([a-z0-9]+))\s*$/i.exec(a)
if(u==null)return
if(3>=u.length)return H.c(u,3)
t=H.O(u[3])
if(b==null){if(t!=null)return parseInt(a,10)
if(u[2]!=null)return parseInt(a,16)
return}if(b<2||b>36)throw H.d(P.a3(b,2,36,"radix",null))
if(b===10&&t!=null)return parseInt(a,10)
if(b<10||t==null){s=b<=10?47+b:86+b
r=u[1]
for(q=r.length,p=0;p<q;++p)if((C.c.G(r,p)|32)>s)return}return parseInt(a,b)},
by:function(a){return H.ls(a)+H.jb(H.bi(a),0,null)},
ls:function(a){var u,t,s,r,q,p,o,n,m
u=J.N(a)
t=u.constructor
if(typeof t=="function"){s=t.name
r=typeof s==="string"?s:null}else r=null
q=r==null
if(q||u===C.P||!!u.$ibg){p=C.B(a)
if(q)r=p
if(p==="Object"){o=a.constructor
if(typeof o=="function"){n=String(o).match(/^\s*function\s*([\w$]*)\s*\(/)
m=n==null?null:n[1]
if(typeof m==="string"&&/^\w+$/.test(m))r=m}}return r}r=r
return H.bO(r.length>1&&C.c.G(r,0)===36?C.c.ay(r,1):r)},
lt:function(){if(!!self.location)return self.location.href
return},
jM:function(a){var u,t,s,r,q
H.e_(a)
u=J.aT(a)
if(u<=500)return String.fromCharCode.apply(null,a)
for(t="",s=0;s<u;s=r){r=s+500
q=r<u?r:u
t+=String.fromCharCode.apply(null,a.slice(s,q))}return t},
lC:function(a){var u,t,s,r
u=H.b([],[P.m])
for(t=a.length,s=0;s<a.length;a.length===t||(0,H.z)(a),++s){r=a[s]
if(typeof r!=="number"||Math.floor(r)!==r)throw H.d(H.a9(r))
if(r<=65535)C.a.h(u,r)
else if(r<=1114111){C.a.h(u,55296+(C.f.aH(r-65536,10)&1023))
C.a.h(u,56320+(r&1023))}else throw H.d(H.a9(r))}return H.jM(u)},
jN:function(a){var u,t,s
for(u=a.length,t=0;t<u;++t){s=a[t]
if(typeof s!=="number"||Math.floor(s)!==s)throw H.d(H.a9(s))
if(s<0)throw H.d(H.a9(s))
if(s>65535)return H.lC(a)}return H.jM(a)},
lD:function(a,b,c){var u,t,s,r
if(c<=500&&b===0&&c===a.length)return String.fromCharCode.apply(null,a)
for(u=b,t="";u<c;u=s){s=u+500
r=s<c?s:c
t+=String.fromCharCode.apply(null,a.subarray(u,r))}return t},
df:function(a){var u
if(0<=a){if(a<=65535)return String.fromCharCode(a)
if(a<=1114111){u=a-65536
return String.fromCharCode((55296|C.f.aH(u,10))>>>0,56320|u&1023)}}throw H.d(P.a3(a,0,1114111,null,null))},
bx:function(a){if(a.date===void 0)a.date=new Date(a.a)
return a.date},
lA:function(a){var u=H.bx(a).getFullYear()+0
return u},
ly:function(a){var u=H.bx(a).getMonth()+1
return u},
lu:function(a){var u=H.bx(a).getDate()+0
return u},
lv:function(a){var u=H.bx(a).getHours()+0
return u},
lx:function(a){var u=H.bx(a).getMinutes()+0
return u},
lz:function(a){var u=H.bx(a).getSeconds()+0
return u},
lw:function(a){var u=H.bx(a).getMilliseconds()+0
return u},
q:function(a){throw H.d(H.a9(a))},
c:function(a,b){if(a==null)J.aT(a)
throw H.d(H.bI(a,b))},
bI:function(a,b){var u,t
if(typeof b!=="number"||Math.floor(b)!==b)return new P.aC(!0,b,"index",null)
u=H.a7(J.aT(a))
if(!(b<0)){if(typeof u!=="number")return H.q(u)
t=b>=u}else t=!0
if(t)return P.bY(b,a,"index",null,u)
return P.dh(b,"index",null)},
mz:function(a,b,c){if(a>c)return new P.bz(0,c,!0,a,"start","Invalid value")
if(b!=null)if(b<a||b>c)return new P.bz(a,c,!0,b,"end","Invalid value")
return new P.aC(!0,b,"end",null)},
a9:function(a){return new P.aC(!0,a,null,null)},
ms:function(a){if(typeof a!=="number")throw H.d(H.a9(a))
return a},
d:function(a){var u
if(a==null)a=new P.dc()
u=new Error()
u.dartException=a
if("defineProperty" in Object){Object.defineProperty(u,"message",{get:H.kE})
u.name=""}else u.toString=H.kE
return u},
kE:function(){return J.al(this.dartException)},
p:function(a){throw H.d(a)},
z:function(a){throw H.d(P.b8(a))},
aL:function(a){var u,t,s,r,q,p
a=a.replace(String({}),'$receiver$').replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
u=a.match(/\\\$[a-zA-Z]+\\\$/g)
if(u==null)u=H.b([],[P.k])
t=u.indexOf("\\$arguments\\$")
s=u.indexOf("\\$argumentsExpr\\$")
r=u.indexOf("\\$expr\\$")
q=u.indexOf("\\$method\\$")
p=u.indexOf("\\$receiver\\$")
return new H.fD(a.replace(new RegExp('\\\\\\$arguments\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$argumentsExpr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$expr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$method\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$receiver\\\\\\$','g'),'((?:x|[^x])*)'),t,s,r,q,p)},
fE:function(a){return function($expr$){var $argumentsExpr$='$arguments$'
try{$expr$.$method$($argumentsExpr$)}catch(u){return u.message}}(a)},
jW:function(a){return function($expr$){try{$expr$.$method$}catch(u){return u.message}}(a)},
jH:function(a,b){return new H.f0(a,b==null?null:b.method)},
iX:function(a,b){var u,t
u=b==null
t=u?null:b.method
return new H.eA(a,t,u?null:b.receiver)},
at:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g
u=new H.iL(a)
if(a==null)return
if(typeof a!=="object")return a
if("dartException" in a)return u.$1(a.dartException)
else if(!("message" in a))return a
t=a.message
if("number" in a&&typeof a.number=="number"){s=a.number
r=s&65535
if((C.f.aH(s,16)&8191)===10)switch(r){case 438:return u.$1(H.iX(H.i(t)+" (Error "+r+")",null))
case 445:case 5007:return u.$1(H.jH(H.i(t)+" (Error "+r+")",null))}}if(a instanceof TypeError){q=$.kH()
p=$.kI()
o=$.kJ()
n=$.kK()
m=$.kN()
l=$.kO()
k=$.kM()
$.kL()
j=$.kQ()
i=$.kP()
h=q.ad(t)
if(h!=null)return u.$1(H.iX(H.O(t),h))
else{h=p.ad(t)
if(h!=null){h.method="call"
return u.$1(H.iX(H.O(t),h))}else{h=o.ad(t)
if(h==null){h=n.ad(t)
if(h==null){h=m.ad(t)
if(h==null){h=l.ad(t)
if(h==null){h=k.ad(t)
if(h==null){h=n.ad(t)
if(h==null){h=j.ad(t)
if(h==null){h=i.ad(t)
g=h!=null}else g=!0}else g=!0}else g=!0}else g=!0}else g=!0}else g=!0}else g=!0
if(g)return u.$1(H.jH(H.O(t),h))}}return u.$1(new H.fR(typeof t==="string"?t:""))}if(a instanceof RangeError){if(typeof t==="string"&&t.indexOf("call stack")!==-1)return new P.dl()
t=function(b){try{return String(b)}catch(f){}return null}(a)
return u.$1(new P.aC(!1,null,null,typeof t==="string"?t.replace(/^RangeError:\s*/,""):t))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof t==="string"&&t==="too much recursion")return new P.dl()
return a},
bM:function(a){var u
if(a==null)return new H.dR(a)
u=a.$cachedTrace
if(u!=null)return u
return a.$cachedTrace=new H.dR(a)},
mC:function(a,b){var u,t,s,r
u=a.length
for(t=0;t<u;t=r){s=t+1
r=s+1
b.q(0,a[t],a[s])}return b},
mK:function(a,b,c,d,e,f){H.e(a,"$iiT")
switch(H.a7(b)){case 0:return a.$0()
case 1:return a.$1(c)
case 2:return a.$2(c,d)
case 3:return a.$3(c,d,e)
case 4:return a.$4(c,d,e,f)}throw H.d(P.u("Unsupported number of arguments for wrapped closure"))},
bH:function(a,b){var u
H.a7(b)
if(a==null)return
u=a.$identity
if(!!u)return u
u=function(c,d,e){return function(f,g,h,i){return e(c,d,f,g,h,i)}}(a,b,H.mK)
a.$identity=u
return u},
l7:function(a,b,c,d,e,f,g){var u,t,s,r,q,p,o,n,m,l,k,j,i
u=b[0]
t=u.$callName
if(!!J.N(d).$ia){u.$reflectionInfo=d
s=H.lE(u).r}else s=d
r=e?Object.create(new H.fl().constructor.prototype):Object.create(new H.bQ(null,null,null,null).constructor.prototype)
r.$initialize=r.constructor
if(e)q=function static_tear_off(){this.$initialize()}
else{p=$.aD
if(typeof p!=="number")return p.m()
$.aD=p+1
p=new Function("a,b,c,d"+p,"this.$initialize(a,b,c,d"+p+")")
q=p}r.constructor=q
q.prototype=r
if(!e){o=H.jv(a,u,f)
o.$reflectionInfo=d}else{r.$static_name=g
o=u}if(typeof s=="number")n=function(h,a0){return function(){return h(a0)}}(H.mG,s)
else if(typeof s=="function")if(e)n=s
else{m=f?H.jt:H.iP
n=function(h,a0){return function(){return h.apply({$receiver:a0(this)},arguments)}}(s,m)}else throw H.d("Error in reflectionInfo.")
r.$S=n
r[t]=o
for(l=o,k=1;k<b.length;++k){j=b[k]
i=j.$callName
if(i!=null){j=e?j:H.jv(a,j,f)
r[i]=j}if(k===c){j.$reflectionInfo=d
l=j}}r.$C=l
r.$R=u.$R
r.$D=u.$D
return q},
l4:function(a,b,c,d){var u=H.iP
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,u)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,u)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,u)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,u)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,u)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,u)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,u)}},
jv:function(a,b,c){var u,t,s,r,q,p,o
if(c)return H.l6(a,b)
u=b.$stubName
t=b.length
s=a[u]
r=b==null?s==null:b===s
q=!r||t>=27
if(q)return H.l4(t,!r,u,b)
if(t===0){r=$.aD
if(typeof r!=="number")return r.m()
$.aD=r+1
p="self"+r
r="return function(){var "+p+" = this."
q=$.bR
if(q==null){q=H.e8("self")
$.bR=q}return new Function(r+H.i(q)+";return "+p+"."+H.i(u)+"();}")()}o="abcdefghijklmnopqrstuvwxyz".split("").splice(0,t).join(",")
r=$.aD
if(typeof r!=="number")return r.m()
$.aD=r+1
o+=r
r="return function("+o+"){return this."
q=$.bR
if(q==null){q=H.e8("self")
$.bR=q}return new Function(r+H.i(q)+"."+H.i(u)+"("+o+");}")()},
l5:function(a,b,c,d){var u,t
u=H.iP
t=H.jt
switch(b?-1:a){case 0:throw H.d(H.lI("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,u,t)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,u,t)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,u,t)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,u,t)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,u,t)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,u,t)
default:return function(e,f,g,h){return function(){h=[g(this)]
Array.prototype.push.apply(h,arguments)
return e.apply(f(this),h)}}(d,u,t)}},
l6:function(a,b){var u,t,s,r,q,p,o,n
u=$.bR
if(u==null){u=H.e8("self")
$.bR=u}t=$.js
if(t==null){t=H.e8("receiver")
$.js=t}s=b.$stubName
r=b.length
q=a[s]
p=b==null?q==null:b===q
o=!p||r>=28
if(o)return H.l5(r,!p,s,b)
if(r===1){u="return function(){return this."+H.i(u)+"."+H.i(s)+"(this."+H.i(t)+");"
t=$.aD
if(typeof t!=="number")return t.m()
$.aD=t+1
return new Function(u+t+"}")()}n="abcdefghijklmnopqrstuvwxyz".split("").splice(0,r-1).join(",")
u="return function("+n+"){return this."+H.i(u)+"."+H.i(s)+"(this."+H.i(t)+", "+n+");"
t=$.aD
if(typeof t!=="number")return t.m()
$.aD=t+1
return new Function(u+t+"}")()},
jd:function(a,b,c,d,e,f,g){return H.l7(a,b,H.a7(c),d,!!e,!!f,g)},
iP:function(a){return a.a},
jt:function(a){return a.c},
e8:function(a){var u,t,s,r,q
u=new H.bQ("self","target","receiver","name")
t=J.ex(Object.getOwnPropertyNames(u))
for(s=t.length,r=0;r<s;++r){q=t[r]
if(u[q]===a)return q}},
O:function(a){if(a==null)return a
if(typeof a==="string")return a
throw H.d(H.az(a,"String"))},
mA:function(a){if(a==null)return a
if(typeof a==="number")return a
throw H.d(H.az(a,"double"))},
mQ:function(a){if(a==null)return a
if(typeof a==="number")return a
throw H.d(H.az(a,"num"))},
kr:function(a){if(a==null)return a
if(typeof a==="boolean")return a
throw H.d(H.az(a,"bool"))},
a7:function(a){if(a==null)return a
if(typeof a==="number"&&Math.floor(a)===a)return a
throw H.d(H.az(a,"int"))},
kB:function(a,b){throw H.d(H.az(a,H.bO(H.O(b).substring(2))))},
mS:function(a,b){throw H.d(H.l3(a,H.bO(H.O(b).substring(2))))},
e:function(a,b){if(a==null)return a
if((typeof a==="object"||typeof a==="function")&&J.N(a)[b])return a
H.kB(a,b)},
f:function(a,b){var u
if(a!=null)u=(typeof a==="object"||typeof a==="function")&&J.N(a)[b]
else u=!0
if(u)return a
H.mS(a,b)},
e_:function(a){if(a==null)return a
if(!!J.N(a).$ia)return a
throw H.d(H.az(a,"List<dynamic>"))},
ky:function(a,b){var u
if(a==null)return a
u=J.N(a)
if(!!u.$ia)return a
if(u[b])return a
H.kB(a,b)},
kt:function(a){var u
if("$S" in a){u=a.$S
if(typeof u=="number")return v.types[H.a7(u)]
else return a.$S()}return},
dY:function(a,b){var u
if(a==null)return!1
if(typeof a=="function")return!0
u=H.kt(J.N(a))
if(u==null)return!1
return H.kh(u,null,b,null)},
j:function(a,b){var u,t
if(a==null)return a
if($.j8)return a
$.j8=!0
try{if(H.dY(a,b))return a
u=H.iG(b)
t=H.az(a,u)
throw H.d(t)}finally{$.j8=!1}},
je:function(a,b){if(a!=null&&!H.jc(a,b))H.p(H.az(a,H.iG(b)))
return a},
az:function(a,b){return new H.fF("TypeError: "+P.en(a)+": type '"+H.km(a)+"' is not a subtype of type '"+b+"'")},
l3:function(a,b){return new H.e9("CastError: "+P.en(a)+": type '"+H.km(a)+"' is not a subtype of type '"+b+"'")},
km:function(a){var u,t
u=J.N(a)
if(!!u.$ibS){t=H.kt(u)
if(t!=null)return H.iG(t)
return"Closure"}return H.by(a)},
mX:function(a){throw H.d(new P.eg(H.O(a)))},
lI:function(a){return new H.fb(a)},
kv:function(a){return v.getIsolateTag(a)},
b:function(a,b){a.$ti=b
return a},
bi:function(a){if(a==null)return
return a.$ti},
nF:function(a,b,c){return H.bN(a["$a"+H.i(c)],H.bi(b))},
bL:function(a,b,c,d){var u
H.O(c)
H.a7(d)
u=H.bN(a["$a"+H.i(c)],H.bi(b))
return u==null?null:u[d]},
as:function(a,b,c){var u
H.O(b)
H.a7(c)
u=H.bN(a["$a"+H.i(b)],H.bi(a))
return u==null?null:u[c]},
r:function(a,b){var u
H.a7(b)
u=H.bi(a)
return u==null?null:u[b]},
iG:function(a){return H.bh(a,null)},
bh:function(a,b){var u,t
H.h(b,"$ia",[P.k],"$aa")
if(a==null)return"dynamic"
if(a===-1)return"void"
if(typeof a==="object"&&a!==null&&a.constructor===Array)return H.bO(a[0].name)+H.jb(a,1,b)
if(typeof a=="function")return H.bO(a.name)
if(a===-2)return"dynamic"
if(typeof a==="number"){H.a7(a)
if(b==null||a<0||a>=b.length)return"unexpected-generic-index:"+a
u=b.length
t=u-a-1
if(t<0||t>=u)return H.c(b,t)
return H.i(b[t])}if('func' in a)return H.mh(a,b)
if('futureOr' in a)return"FutureOr<"+H.bh("type" in a?a.type:null,b)+">"
return"unknown-reified-type"},
mh:function(a,b){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c
u=[P.k]
H.h(b,"$ia",u,"$aa")
if("bounds" in a){t=a.bounds
if(b==null){b=H.b([],u)
s=null}else s=b.length
r=b.length
for(q=t.length,p=q;p>0;--p)C.a.h(b,"T"+(r+p))
for(o="<",n="",p=0;p<q;++p,n=", "){o+=n
u=b.length
m=u-p-1
if(m<0)return H.c(b,m)
o=C.c.m(o,b[m])
l=t[p]
if(l!=null&&l!==P.F)o+=" extends "+H.bh(l,b)}o+=">"}else{o=""
s=null}k=!!a.v?"void":H.bh(a.ret,b)
if("args" in a){j=a.args
for(u=j.length,i="",h="",g=0;g<u;++g,h=", "){f=j[g]
i=i+h+H.bh(f,b)}}else{i=""
h=""}if("opt" in a){e=a.opt
i+=h+"["
for(u=e.length,h="",g=0;g<u;++g,h=", "){f=e[g]
i=i+h+H.bh(f,b)}i+="]"}if("named" in a){d=a.named
i+=h+"{"
for(u=H.mB(d),m=u.length,h="",g=0;g<m;++g,h=", "){c=H.O(u[g])
i=i+h+H.bh(d[c],b)+(" "+H.i(c))}i+="}"}if(s!=null)b.length=s
return o+"("+i+") => "+k},
jb:function(a,b,c){var u,t,s,r,q,p
H.h(c,"$ia",[P.k],"$aa")
if(a==null)return""
u=new P.af("")
for(t=b,s="",r=!0,q="";t<a.length;++t,s=", "){u.a=q+s
p=a[t]
if(p!=null)r=!1
q=u.a+=H.bh(p,c)}return"<"+u.i(0)+">"},
bN:function(a,b){if(a==null)return b
a=a.apply(null,b)
if(a==null)return
if(typeof a==="object"&&a!==null&&a.constructor===Array)return a
if(typeof a=="function")return a.apply(null,b)
return b},
cx:function(a,b,c,d){var u,t
H.O(b)
H.e_(c)
H.O(d)
if(a==null)return!1
u=H.bi(a)
t=J.N(a)
if(t[b]==null)return!1
return H.kp(H.bN(t[d],u),null,c,null)},
h:function(a,b,c,d){H.O(b)
H.e_(c)
H.O(d)
if(a==null)return a
if(H.cx(a,b,c,d))return a
throw H.d(H.az(a,function(e,f){return e.replace(/[^<,> ]+/g,function(g){return f[g]||g})}(H.bO(b.substring(2))+H.jb(c,0,null),v.mangledGlobalNames)))},
kp:function(a,b,c,d){var u,t
if(c==null)return!0
if(a==null){u=c.length
for(t=0;t<u;++t)if(!H.ar(null,null,c[t],d))return!1
return!0}u=a.length
for(t=0;t<u;++t)if(!H.ar(a[t],b,c[t],d))return!1
return!0},
nD:function(a,b,c){return a.apply(b,H.bN(J.N(b)["$a"+H.i(c)],H.bi(b)))},
kx:function(a){var u
if(typeof a==="number")return!1
if('futureOr' in a){u="type" in a?a.type:null
return a==null||a.name==="F"||a.name==="y"||a===-1||a===-2||H.kx(u)}return!1},
jc:function(a,b){var u,t
if(a==null)return b==null||b.name==="F"||b.name==="y"||b===-1||b===-2||H.kx(b)
if(b==null||b===-1||b.name==="F"||b===-2)return!0
if(typeof b=="object"){if('futureOr' in b)if(H.jc(a,"type" in b?b.type:null))return!0
if('func' in b)return H.dY(a,b)}u=J.N(a).constructor
t=H.bi(a)
if(t!=null){t=t.slice()
t.splice(0,0,u)
u=t}return H.ar(u,null,b,null)},
w:function(a,b){if(a!=null&&!H.jc(a,b))throw H.d(H.az(a,H.iG(b)))
return a},
ar:function(a,b,c,d){var u,t,s,r,q,p,o,n,m
if(a===c)return!0
if(c==null||c===-1||c.name==="F"||c===-2)return!0
if(a===-2)return!0
if(a==null||a===-1||a.name==="F"||a===-2){if(typeof c==="number")return!1
if('futureOr' in c)return H.ar(a,b,"type" in c?c.type:null,d)
return!1}if(typeof a==="number")return!1
if(typeof c==="number")return!1
if(a.name==="y")return!0
if('func' in c)return H.kh(a,b,c,d)
if('func' in a)return c.name==="iT"
u=typeof a==="object"&&a!==null&&a.constructor===Array
t=u?a[0]:a
if('futureOr' in c){s="type" in c?c.type:null
if('futureOr' in a)return H.ar("type" in a?a.type:null,b,s,d)
else if(H.ar(a,b,s,d))return!0
else{if(!('$i'+"bW" in t.prototype))return!1
r=t.prototype["$a"+"bW"]
q=H.bN(r,u?a.slice(1):null)
return H.ar(typeof q==="object"&&q!==null&&q.constructor===Array?q[0]:null,b,s,d)}}p=typeof c==="object"&&c!==null&&c.constructor===Array
o=p?c[0]:c
if(o!==t){n=o.name
if(!('$i'+n in t.prototype))return!1
m=t.prototype["$a"+n]}else m=null
if(!p)return!0
u=u?a.slice(1):null
p=c.slice(1)
return H.kp(H.bN(m,u),b,p,d)},
kh:function(a,b,c,d){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g
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
return H.mP(h,b,g,d)},
mP:function(a,b,c,d){var u,t,s,r
u=Object.getOwnPropertyNames(c)
for(t=u.length,s=0;s<t;++s){r=u[s]
if(!Object.hasOwnProperty.call(a,r))return!1
if(!H.ar(c[r],d,a[r],b))return!1}return!0},
nE:function(a,b,c){Object.defineProperty(a,H.O(b),{value:c,enumerable:false,writable:true,configurable:true})},
mN:function(a){var u,t,s,r,q,p
u=H.O($.kw.$1(a))
t=$.ib[u]
if(t!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:t,enumerable:false,writable:true,configurable:true})
return t.i}s=$.ij[u]
if(s!=null)return s
r=v.interceptorsByTag[u]
if(r==null){u=H.O($.ko.$2(a,u))
if(u!=null){t=$.ib[u]
if(t!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:t,enumerable:false,writable:true,configurable:true})
return t.i}s=$.ij[u]
if(s!=null)return s
r=v.interceptorsByTag[u]}}if(r==null)return
s=r.prototype
q=u[0]
if(q==="!"){t=H.iF(s)
$.ib[u]=t
Object.defineProperty(a,v.dispatchPropertyName,{value:t,enumerable:false,writable:true,configurable:true})
return t.i}if(q==="~"){$.ij[u]=s
return s}if(q==="-"){p=H.iF(s)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}if(q==="+")return H.kA(a,s)
if(q==="*")throw H.d(P.fQ(u))
if(v.leafTags[u]===true){p=H.iF(s)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}else return H.kA(a,s)},
kA:function(a,b){var u=Object.getPrototypeOf(a)
Object.defineProperty(u,v.dispatchPropertyName,{value:J.ji(b,u,null,null),enumerable:false,writable:true,configurable:true})
return b},
iF:function(a){return J.ji(a,!1,null,!!a.$iaY)},
mO:function(a,b,c){var u=b.prototype
if(v.leafTags[a]===true)return H.iF(u)
else return J.ji(u,c,null,null)},
mI:function(){if(!0===$.jh)return
$.jh=!0
H.mJ()},
mJ:function(){var u,t,s,r,q,p,o,n
$.ib=Object.create(null)
$.ij=Object.create(null)
H.mH()
u=v.interceptorsByTag
t=Object.getOwnPropertyNames(u)
if(typeof window!="undefined"){window
s=function(){}
for(r=0;r<t.length;++r){q=t[r]
p=$.kC.$1(q)
if(p!=null){o=H.mO(q,u[q],p)
if(o!=null){Object.defineProperty(p,v.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
s.prototype=p}}}}for(r=0;r<t.length;++r){q=t[r]
if(/^[A-Za-z_]/.test(q)){n=u[q]
u["!"+q]=n
u["~"+q]=n
u["-"+q]=n
u["+"+q]=n
u["*"+q]=n}}},
mH:function(){var u,t,s,r,q,p,o
u=C.U()
u=H.bG(C.R,H.bG(C.W,H.bG(C.A,H.bG(C.A,H.bG(C.V,H.bG(C.S,H.bG(C.T(C.B),u)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){t=dartNativeDispatchHooksTransformer
if(typeof t=="function")t=[t]
if(t.constructor==Array)for(s=0;s<t.length;++s){r=t[s]
if(typeof r=="function")u=r(u)||u}}q=u.getTag
p=u.getUnknownTag
o=u.prototypeForTag
$.kw=new H.ig(q)
$.ko=new H.ih(p)
$.kC=new H.ii(o)},
bG:function(a,b){return a(b)||b},
li:function(a,b,c,d){var u,t,s,r
u=b?"m":""
t=c?"":"i"
s=d?"g":""
r=function(e,f){try{return new RegExp(e,f)}catch(q){return q}}(a,u+t+s)
if(r instanceof RegExp)return r
throw H.d(P.X("Illegal RegExp pattern ("+String(r)+")",a,null))},
mW:function(a,b,c){var u=a.indexOf(b,c)
return u>=0},
kD:function(a,b,c){var u,t,s
if(b==="")if(a==="")return c
else{u=a.length
for(t=c,s=0;s<u;++s)t=t+a[s]+c
return t.charCodeAt(0)==0?t:t}else return a.replace(new RegExp(b.replace(/[[\]{}()*+?.\\^$|]/g,"\\$&"),'g'),c.replace(/\$/g,"$$$$"))},
ed:function ed(){},
ee:function ee(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
f6:function f6(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.x=null},
fD:function fD(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
f0:function f0(a,b){this.a=a
this.b=b},
eA:function eA(a,b,c){this.a=a
this.b=b
this.c=c},
fR:function fR(a){this.a=a},
iL:function iL(a){this.a=a},
dR:function dR(a){this.a=a
this.b=null},
bS:function bS(){},
fq:function fq(){},
fl:function fl(){},
bQ:function bQ(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
fF:function fF(a){this.a=a},
e9:function e9(a){this.a=a},
fb:function fb(a){this.a=a},
aw:function aw(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
eD:function eD(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
eE:function eE(a,b){this.a=a
this.$ti=b},
eF:function eF(a,b,c){var _=this
_.a=a
_.b=b
_.d=_.c=null
_.$ti=c},
ig:function ig(a){this.a=a},
ih:function ih(a){this.a=a},
ii:function ii(a){this.a=a},
ez:function ez(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
bE:function(a){return a},
lr:function(a){return new Int8Array(a)},
b5:function(a,b,c){if(a>>>0!==a||a>=c)throw H.d(H.bI(b,a))},
mf:function(a,b,c){var u
if(!(a>>>0!==a))u=b>>>0!==b||a>b||b>c
else u=!0
if(u)throw H.d(H.mz(a,b,c))
return b},
bw:function bw(){},
d8:function d8(){},
d9:function d9(){},
da:function da(){},
eW:function eW(){},
eX:function eX(){},
eY:function eY(){},
eZ:function eZ(){},
db:function db(){},
c2:function c2(){},
co:function co(){},
cp:function cp(){},
cq:function cq(){},
cr:function cr(){},
mB:function(a){return J.jB(a?Object.keys(a):[],null)},
mR:function(a){if(typeof dartPrint=="function"){dartPrint(a)
return}if(typeof console=="object"&&typeof console.log!="undefined"){console.log(a)
return}if(typeof window=="object")return
if(typeof print=="function"){print(a)
return}throw"Unable to print message: "+String(a)}},J={
ji:function(a,b,c,d){return{i:a,p:b,e:c,x:d}},
dZ:function(a){var u,t,s,r,q
u=a[v.dispatchPropertyName]
if(u==null)if($.jh==null){H.mI()
u=a[v.dispatchPropertyName]}if(u!=null){t=u.p
if(!1===t)return u.i
if(!0===t)return a
s=Object.getPrototypeOf(a)
if(t===s)return u.i
if(u.e===s)throw H.d(P.fQ("Return interceptor for "+H.i(t(a,u))))}r=a.constructor
q=r==null?null:r[$.jl()]
if(q!=null)return q
q=H.mN(a)
if(q!=null)return q
if(typeof a=="function")return C.X
t=Object.getPrototypeOf(a)
if(t==null)return C.G
if(t===Object.prototype)return C.G
if(typeof r=="function"){Object.defineProperty(r,$.jl(),{value:C.w,enumerable:false,writable:true,configurable:true})
return C.w}return C.w},
lh:function(a,b){if(typeof a!=="number"||Math.floor(a)!==a)throw H.d(P.iO(a,"length","is not an integer"))
if(a<0||a>4294967295)throw H.d(P.a3(a,0,4294967295,"length",null))
return J.jB(new Array(a),b)},
jB:function(a,b){return J.ex(H.b(a,[b]))},
ex:function(a){H.e_(a)
a.fixed$length=Array
return a},
N:function(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.cW.prototype
return J.cV.prototype}if(typeof a=="string")return J.aW.prototype
if(a==null)return J.cX.prototype
if(typeof a=="boolean")return J.ey.prototype
if(a.constructor==Array)return J.av.prototype
if(typeof a!="object"){if(typeof a=="function")return J.aX.prototype
return a}if(a instanceof P.F)return a
return J.dZ(a)},
mD:function(a){if(typeof a=="number")return J.bc.prototype
if(typeof a=="string")return J.aW.prototype
if(a==null)return a
if(a.constructor==Array)return J.av.prototype
if(typeof a!="object"){if(typeof a=="function")return J.aX.prototype
return a}if(a instanceof P.F)return a
return J.dZ(a)},
bK:function(a){if(typeof a=="string")return J.aW.prototype
if(a==null)return a
if(a.constructor==Array)return J.av.prototype
if(typeof a!="object"){if(typeof a=="function")return J.aX.prototype
return a}if(a instanceof P.F)return a
return J.dZ(a)},
ku:function(a){if(a==null)return a
if(a.constructor==Array)return J.av.prototype
if(typeof a!="object"){if(typeof a=="function")return J.aX.prototype
return a}if(a instanceof P.F)return a
return J.dZ(a)},
mE:function(a){if(typeof a=="number")return J.bc.prototype
if(a==null)return a
if(!(a instanceof P.F))return J.bg.prototype
return a},
mF:function(a){if(typeof a=="number")return J.bc.prototype
if(typeof a=="string")return J.aW.prototype
if(a==null)return a
if(!(a instanceof P.F))return J.bg.prototype
return a},
jf:function(a){if(typeof a=="string")return J.aW.prototype
if(a==null)return a
if(!(a instanceof P.F))return J.bg.prototype
return a},
b6:function(a){if(a==null)return a
if(typeof a!="object"){if(typeof a=="function")return J.aX.prototype
return a}if(a instanceof P.F)return a
return J.dZ(a)},
kW:function(a,b){if(typeof a=="number"&&typeof b=="number")return a+b
return J.mD(a).m(a,b)},
J:function(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.N(a).u(a,b)},
jp:function(a,b){if(typeof a=="number"&&typeof b=="number")return a*b
return J.mF(a).k(a,b)},
kX:function(a,b){if(typeof a=="number"&&typeof b=="number")return a-b
return J.mE(a).n(a,b)},
kY:function(a,b){if(typeof b==="number")if(a.constructor==Array||typeof a=="string"||H.mL(a,a[v.dispatchPropertyName]))if(b>>>0===b&&b<a.length)return a[b]
return J.bK(a).j(a,b)},
kZ:function(a,b,c,d){return J.b6(a).fu(a,b,c,d)},
l_:function(a,b){return J.jf(a).G(a,b)},
iM:function(a,b,c){return J.b6(a).i5(a,b,c)},
jq:function(a,b){return J.b6(a).X(a,b)},
l0:function(a,b){return J.jf(a).Y(a,b)},
iN:function(a,b){return J.ku(a).ac(a,b)},
l1:function(a,b,c,d){return J.b6(a).jv(a,b,c,d)},
bP:function(a){return J.b6(a).gct(a)},
cC:function(a){return J.N(a).gI(a)},
cD:function(a){return J.ku(a).gU(a)},
aT:function(a){return J.bK(a).gl(a)},
l2:function(a,b){return J.b6(a).kd(a,b)},
al:function(a){return J.N(a).i(a)},
a5:function a5(){},
ey:function ey(){},
cX:function cX(){},
cY:function cY(){},
f2:function f2(){},
bg:function bg(){},
aX:function aX(){},
av:function av(a){this.$ti=a},
iV:function iV(a){this.$ti=a},
aj:function aj(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=null
_.$ti=d},
bc:function bc(){},
cW:function cW(){},
cV:function cV(){},
aW:function aW(){}},P={
lV:function(){var u,t,s
u={}
if(self.scheduleImmediate!=null)return P.mp()
if(self.MutationObserver!=null&&self.document!=null){t=self.document.createElement("div")
s=self.document.createElement("span")
u.a=null
new self.MutationObserver(H.bH(new P.hi(u),1)).observe(t,{childList:true})
return new P.hh(u,t,s)}else if(self.setImmediate!=null)return P.mq()
return P.mr()},
lW:function(a){self.scheduleImmediate(H.bH(new P.hj(H.j(a,{func:1,ret:-1})),0))},
lX:function(a){self.setImmediate(H.bH(new P.hk(H.j(a,{func:1,ret:-1})),0))},
lY:function(a){P.j_(C.u,H.j(a,{func:1,ret:-1}))},
j_:function(a,b){var u
H.j(b,{func:1,ret:-1})
u=C.f.a2(a.a,1000)
return P.m0(u<0?0:u,b)},
jV:function(a,b){var u
H.j(b,{func:1,ret:-1,args:[P.aK]})
u=C.f.a2(a.a,1000)
return P.m1(u<0?0:u,b)},
m0:function(a,b){var u=new P.dT(!0)
u.fp(a,b)
return u},
m1:function(a,b){var u=new P.dT(!1)
u.fq(a,b)
return u},
lZ:function(a,b){var u,t,s
b.a=1
try{a.eJ(new P.hs(b),new P.ht(b),null)}catch(s){u=H.at(s)
t=H.bM(s)
P.mT(new P.hu(b,u,t))}},
k6:function(a,b){var u,t
for(;u=a.a,u===2;)a=H.e(a.c,"$iaq")
if(u>=4){t=b.c9()
b.a=a.a
b.c=a.c
P.cm(b,t)}else{t=H.e(b.c,"$iaN")
b.a=2
b.c=a
a.dE(t)}},
cm:function(a,b){var u,t,s,r,q,p,o,n,m,l,k,j,i,h
u={}
u.a=a
for(t=a;!0;){s={}
r=t.a===8
if(b==null){if(r){q=H.e(t.c,"$iab")
t=t.b
p=q.a
o=q.b
t.toString
P.i4(null,null,t,p,o)}return}for(;n=b.a,n!=null;b=n){b.a=null
P.cm(u.a,b)}t=u.a
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
if(k){H.e(m,"$iab")
t=t.b
p=m.a
o=m.b
t.toString
P.i4(null,null,t,p,o)
return}j=$.R
if(j!=l)$.R=l
else j=null
t=b.c
if(t===8)new P.hy(u,s,b,r).$0()
else if(p){if((t&1)!==0)new P.hx(s,b,m).$0()}else if((t&2)!==0)new P.hw(u,s,b).$0()
if(j!=null)$.R=j
t=s.b
if(!!J.N(t).$ibW){if(t.a>=4){i=H.e(o.c,"$iaN")
o.c=null
b=o.be(i)
o.a=t.a
o.c=t.c
u.a=t
continue}else P.k6(t,o)
return}}h=b.b
i=H.e(h.c,"$iaN")
h.c=null
b=h.be(i)
t=s.a
p=s.b
if(!t){H.w(p,H.r(h,0))
h.a=4
h.c=p}else{H.e(p,"$iab")
h.a=8
h.c=p}u.a=h
t=h}},
mk:function(a,b){if(H.dY(a,{func:1,args:[P.F,P.ak]}))return H.j(a,{func:1,ret:null,args:[P.F,P.ak]})
if(H.dY(a,{func:1,args:[P.F]}))return H.j(a,{func:1,ret:null,args:[P.F]})
throw H.d(P.iO(a,"onError","Error handler must accept one Object or one Object and a StackTrace as arguments, and return a a valid result"))},
mj:function(){var u,t
for(;u=$.bF,u!=null;){$.cw=null
t=u.b
$.bF=t
if(t==null)$.cv=null
u.a.$0()}},
mo:function(){$.j9=!0
try{P.mj()}finally{$.cw=null
$.j9=!1
if($.bF!=null)$.jo().$1(P.kq())}},
kl:function(a){var u=new P.dI(H.j(a,{func:1,ret:-1}))
if($.bF==null){$.cv=u
$.bF=u
if(!$.j9)$.jo().$1(P.kq())}else{$.cv.b=u
$.cv=u}},
mn:function(a){var u,t,s
H.j(a,{func:1,ret:-1})
u=$.bF
if(u==null){P.kl(a)
$.cw=$.cv
return}t=new P.dI(a)
s=$.cw
if(s==null){t.b=u
$.cw=t
$.bF=t}else{t.b=s.b
s.b=t
$.cw=t
if(t.b==null)$.cv=t}},
mT:function(a){var u,t
u={func:1,ret:-1}
H.j(a,u)
t=$.R
if(C.k===t){P.i6(null,null,C.k,a)
return}t.toString
P.i6(null,null,t,H.j(t.cn(a),u))},
jU:function(a,b){var u,t
u={func:1,ret:-1}
H.j(b,u)
t=$.R
if(t===C.k){t.toString
return P.j_(a,b)}return P.j_(a,H.j(t.cn(b),u))},
lM:function(a,b){var u,t,s
u={func:1,ret:-1,args:[P.aK]}
H.j(b,u)
t=$.R
if(t===C.k){t.toString
return P.jV(a,b)}s=t.dP(b,P.aK)
$.R.toString
return P.jV(a,H.j(s,u))},
i4:function(a,b,c,d,e){var u={}
u.a=d
P.mn(new P.i5(u,e))},
ki:function(a,b,c,d,e){var u,t
H.j(d,{func:1,ret:e})
t=$.R
if(t===c)return d.$0()
$.R=c
u=t
try{t=d.$0()
return t}finally{$.R=u}},
kj:function(a,b,c,d,e,f,g){var u,t
H.j(d,{func:1,ret:f,args:[g]})
H.w(e,g)
t=$.R
if(t===c)return d.$1(e)
$.R=c
u=t
try{t=d.$1(e)
return t}finally{$.R=u}},
ml:function(a,b,c,d,e,f,g,h,i){var u,t
H.j(d,{func:1,ret:g,args:[h,i]})
H.w(e,h)
H.w(f,i)
t=$.R
if(t===c)return d.$2(e,f)
$.R=c
u=t
try{t=d.$2(e,f)
return t}finally{$.R=u}},
i6:function(a,b,c,d){var u
H.j(d,{func:1,ret:-1})
u=C.k!==c
if(u)d=!(!u||!1)?c.cn(d):c.j4(d,-1)
P.kl(d)},
hi:function hi(a){this.a=a},
hh:function hh(a,b,c){this.a=a
this.b=b
this.c=c},
hj:function hj(a){this.a=a},
hk:function hk(a){this.a=a},
dT:function dT(a){this.a=a
this.b=null
this.c=0},
hO:function hO(a,b){this.a=a
this.b=b},
hN:function hN(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
aN:function aN(a,b,c,d,e){var _=this
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
hr:function hr(a,b){this.a=a
this.b=b},
hv:function hv(a,b){this.a=a
this.b=b},
hs:function hs(a){this.a=a},
ht:function ht(a){this.a=a},
hu:function hu(a,b,c){this.a=a
this.b=b
this.c=c},
hy:function hy(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
hz:function hz(a){this.a=a},
hx:function hx(a,b,c){this.a=a
this.b=b
this.c=c},
hw:function hw(a,b,c){this.a=a
this.b=b
this.c=c},
dI:function dI(a){this.a=a
this.b=null},
fm:function fm(){},
fo:function fo(a,b){this.a=a
this.b=b},
fp:function fp(a,b){this.a=a
this.b=b},
c8:function c8(){},
fn:function fn(){},
aK:function aK(){},
ab:function ab(a,b){this.a=a
this.b=b},
hY:function hY(){},
i5:function i5(a,b){this.a=a
this.b=b},
hF:function hF(){},
hH:function hH(a,b,c){this.a=a
this.b=b
this.c=c},
hG:function hG(a,b){this.a=a
this.b=b},
hI:function hI(a,b,c){this.a=a
this.b=b
this.c=c},
lk:function(a,b,c,d,e){return new H.aw([d,e])},
lm:function(a,b,c){H.e_(a)
return H.h(H.mC(a,new H.aw([b,c])),"$ijC",[b,c],"$ajC")},
ll:function(a,b){return new H.aw([a,b])},
ln:function(a,b,c,d){return new P.hC([d])},
k9:function(){var u=Object.create(null)
u["<non-identifier-key>"]=u
delete u["<non-identifier-key>"]
return u},
k8:function(a,b,c){var u=new P.hD(a,b,[c])
u.c=a.e
return u},
lf:function(a,b,c){var u,t
if(P.ja(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}u=H.b([],[P.k])
t=$.cB()
C.a.h(t,a)
try{P.mi(a,u)}finally{if(0>=t.length)return H.c(t,-1)
t.pop()}t=P.jS(b,H.ky(u,"$in"),", ")+c
return t.charCodeAt(0)==0?t:t},
iU:function(a,b,c){var u,t,s
if(P.ja(a))return b+"..."+c
u=new P.af(b)
t=$.cB()
C.a.h(t,a)
try{s=u
s.a=P.jS(s.a,a,", ")}finally{if(0>=t.length)return H.c(t,-1)
t.pop()}u.a+=c
t=u.a
return t.charCodeAt(0)==0?t:t},
ja:function(a){var u,t
for(u=0;t=$.cB(),u<t.length;++u)if(a===t[u])return!0
return!1},
mi:function(a,b){var u,t,s,r,q,p,o,n,m,l
H.h(b,"$ia",[P.k],"$aa")
u=a.gU(a)
t=0
s=0
while(!0){if(!(t<80||s<3))break
if(!u.E())return
r=H.i(u.gJ())
C.a.h(b,r)
t+=r.length+2;++s}if(!u.E()){if(s<=5)return
if(0>=b.length)return H.c(b,-1)
q=b.pop()
if(0>=b.length)return H.c(b,-1)
p=b.pop()}else{o=u.gJ();++s
if(!u.E()){if(s<=4){C.a.h(b,H.i(o))
return}q=H.i(o)
if(0>=b.length)return H.c(b,-1)
p=b.pop()
t+=q.length+2}else{n=u.gJ();++s
for(;u.E();o=n,n=m){m=u.gJ();++s
if(s>100){while(!0){if(!(t>75&&s>3))break
if(0>=b.length)return H.c(b,-1)
t-=b.pop().length+2;--s}C.a.h(b,"...")
return}}p=H.i(o)
q=H.i(n)
t+=q.length+p.length+4}}if(s>b.length+2){t+=5
l="..."}else l=null
while(!0){if(!(t>80&&b.length>3))break
if(0>=b.length)return H.c(b,-1)
t-=b.pop().length+2
if(l==null){t+=5
l="..."}}if(l!=null)C.a.h(b,l)
C.a.h(b,p)
C.a.h(b,q)},
jD:function(a,b,c){var u=P.lk(null,null,null,b,c)
a.R(0,new P.eG(u,b,c))
return u},
iY:function(a){var u,t
u={}
if(P.ja(a))return"{...}"
t=new P.af("")
try{C.a.h($.cB(),a)
t.a+="{"
u.a=!0
a.R(0,new P.eK(u,t))
t.a+="}"}finally{u=$.cB()
if(0>=u.length)return H.c(u,-1)
u.pop()}u=t.a
return u.charCodeAt(0)==0?u:u},
hC:function hC(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
cn:function cn(a){this.a=a
this.c=this.b=null},
hD:function hD(a,b,c){var _=this
_.a=a
_.b=b
_.d=_.c=null
_.$ti=c},
eG:function eG(a,b,c){this.a=a
this.b=b
this.c=c},
eH:function eH(){},
Q:function Q(){},
eJ:function eJ(){},
eK:function eK(a,b){this.a=a
this.b=b},
eL:function eL(){},
hP:function hP(){},
eM:function eM(){},
dC:function dC(a,b){this.a=a
this.$ti=b},
hJ:function hJ(){},
dO:function dO(){},
dX:function dX(){},
lQ:function(a,b,c,d){H.h(b,"$ia",[P.m],"$aa")
if(b instanceof Uint8Array)return P.lR(!1,b,c,d)
return},
lR:function(a,b,c,d){var u,t,s
u=$.kR()
if(u==null)return
t=0===c
if(t&&!0)return P.j2(u,b)
s=b.length
d=P.b4(c,d,s,null,null,null)
if(t&&d===s)return P.j2(u,b)
return P.j2(u,b.subarray(c,d))},
j2:function(a,b){if(P.lT(b))return
return P.lU(a,b)},
lU:function(a,b){var u,t
try{u=a.decode(b)
return u}catch(t){H.at(t)}return},
lT:function(a){var u,t
u=a.length-2
for(t=0;t<u;++t)if(a[t]===237)if((a[t+1]&224)===160)return!0
return!1},
lS:function(){var u,t
try{u=new TextDecoder("utf-8",{fatal:true})
return u}catch(t){H.at(t)}return},
mm:function(a,b,c){var u,t,s
H.h(a,"$ia",[P.m],"$aa")
for(u=J.bK(a),t=b;t<c;++t){s=u.j(a,t)
if(typeof s!=="number")return s.bK()
if((s&127)!==s)return t-b}return c-b},
jr:function(a,b,c,d,e,f){if(C.f.ak(f,4)!==0)throw H.d(P.X("Invalid base64 padding, padded length must be multiple of four, is "+f,a,c))
if(d+e!==f)throw H.d(P.X("Invalid base64 padding, '=' not at the end",a,b))
if(e>2)throw H.d(P.X("Invalid base64 padding, more than two '=' characters",a,b))},
e5:function e5(a){this.a=a},
e6:function e6(a){this.a=a},
bm:function bm(){},
bo:function bo(){},
el:function el(){},
fZ:function fZ(a){this.a=a},
h0:function h0(){},
hX:function hX(a){this.b=this.a=0
this.c=a},
h_:function h_(a){this.a=a},
hV:function hV(a,b){var _=this
_.a=a
_.b=b
_.c=!0
_.f=_.e=_.d=0},
hW:function hW(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
cy:function(a,b,c){var u
H.j(b,{func:1,ret:P.m,args:[P.k]})
u=H.lB(a,c)
if(u!=null)return u
if(b!=null)return b.$1(a)
throw H.d(P.X(a,null,null))},
lc:function(a){if(a instanceof H.bS)return a.i(0)
return"Instance of '"+H.by(a)+"'"},
lo:function(a,b,c,d){var u,t
H.w(b,d)
u=J.lh(a,d)
if(a!==0&&!0)for(t=0;t<u.length;++t)C.a.q(u,t,b)
return H.h(u,"$ia",[d],"$aa")},
jE:function(a,b,c){var u,t,s
u=[c]
t=H.b([],u)
for(s=a.gU(a);s.E();)C.a.h(t,H.w(s.gJ(),c))
if(b)return t
return H.h(J.ex(t),"$ia",u,"$aa")},
dn:function(a,b,c){var u,t
u=P.m
H.h(a,"$in",[u],"$an")
if(typeof a==="object"&&a!==null&&a.constructor===Array){H.h(a,"$iav",[u],"$aav")
t=a.length
c=P.b4(b,c,t,null,null,null)
return H.jN(b>0||c<t?C.a.f2(a,b,c):a)}if(!!J.N(a).$ic2)return H.lD(a,b,P.b4(b,c,a.length,null,null,null))
return P.lK(a,b,c)},
lK:function(a,b,c){var u,t,s,r
H.h(a,"$in",[P.m],"$an")
if(b<0)throw H.d(P.a3(b,0,J.aT(a),null,null))
u=c==null
if(!u&&c<b)throw H.d(P.a3(c,b,J.aT(a),null,null))
t=J.cD(a)
for(s=0;s<b;++s)if(!t.E())throw H.d(P.a3(b,0,s,null,null))
r=[]
if(u)for(;t.E();)r.push(t.gJ())
else for(s=b;s<c;++s){if(!t.E())throw H.d(P.a3(c,b,s,null,null))
r.push(t.gJ())}return H.jN(r)},
lG:function(a,b,c){return new H.ez(a,H.li(a,!1,!0,!1))},
jS:function(a,b,c){var u=J.cD(b)
if(!u.E())return a
if(c.length===0){do a+=H.i(u.gJ())
while(u.E())}else{a+=H.i(u.gJ())
for(;u.E();)a=a+c+H.i(u.gJ())}return a},
fV:function(){var u=H.lt()
if(u!=null)return P.lP(u,0,null)
throw H.d(P.U("'Uri.base' is not supported"))},
hU:function(a,b,c,d){var u,t,s,r,q,p
H.h(a,"$ia",[P.m],"$aa")
if(c===C.m){u=$.kU().b
if(typeof b!=="string")H.p(H.a9(b))
u=u.test(b)}else u=!1
if(u)return b
H.w(b,H.as(c,"bm",0))
t=c.gju().cu(b)
for(u=t.length,s=0,r="";s<u;++s){q=t[s]
if(q<128){p=q>>>4
if(p>=8)return H.c(a,p)
p=(a[p]&1<<(q&15))!==0}else p=!1
if(p)r+=H.df(q)
else r=d&&q===32?r+"+":r+"%"+"0123456789ABCDEF"[q>>>4&15]+"0123456789ABCDEF"[q&15]}return r.charCodeAt(0)==0?r:r},
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
cN:function(a){if(a>=10)return""+a
return"0"+a},
jx:function(a,b,c,d,e,f){return new P.aE(864e8*a+36e8*b+6e7*e+1e6*f+1000*d+c)},
en:function(a){if(typeof a==="number"||typeof a==="boolean"||null==a)return J.al(a)
if(typeof a==="string")return JSON.stringify(a)
return P.lc(a)},
cE:function(a){return new P.aC(!1,null,null,a)},
iO:function(a,b,c){return new P.aC(!0,a,b,c)},
dh:function(a,b,c){return new P.bz(null,null,!0,a,b,"Value not in range")},
a3:function(a,b,c,d,e){return new P.bz(b,c,!0,a,d,"Invalid value")},
b4:function(a,b,c,d,e,f){if(typeof a!=="number")return H.q(a)
if(0>a||a>c)throw H.d(P.a3(a,0,c,"start",f))
if(b!=null){if(a>b||b>c)throw H.d(P.a3(b,a,c,"end",f))
return b}return c},
bY:function(a,b,c,d,e){var u=H.a7(e==null?J.aT(b):e)
return new P.ew(b,u,!0,a,c,"Index out of range")},
U:function(a){return new P.fS(a)},
fQ:function(a){return new P.fP(a)},
b8:function(a){return new P.ec(a)},
u:function(a){return new P.dL(a)},
X:function(a,b,c){return new P.eu(a,b,c)},
lp:function(a,b,c,d){var u,t
H.j(b,{func:1,ret:d,args:[P.m]})
u=H.b([],[d])
C.a.sl(u,a)
for(t=0;t<a;++t)C.a.q(u,t,b.$1(t))
return u},
jk:function(a){H.mR(a)},
lP:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k,j,i,h
c=a.length
u=b+5
if(c>=u){t=((C.c.G(a,b+4)^58)*3|C.c.G(a,b)^100|C.c.G(a,b+1)^97|C.c.G(a,b+2)^116|C.c.G(a,b+3)^97)>>>0
if(t===0)return P.jX(b>0||c<c?C.c.t(a,b,c):a,5,null).geO()
else if(t===32)return P.jX(C.c.t(a,u,c),0,null).geO()}s=new Array(8)
s.fixed$length=Array
r=H.b(s,[P.m])
C.a.q(r,0,0)
s=b-1
C.a.q(r,1,s)
C.a.q(r,2,s)
C.a.q(r,7,s)
C.a.q(r,3,b)
C.a.q(r,4,b)
C.a.q(r,5,c)
C.a.q(r,6,c)
if(P.kk(a,b,c,0,r)>=14)C.a.q(r,7,c)
q=r[1]
if(typeof q!=="number")return q.kA()
if(q>=b)if(P.kk(a,b,q,20,r)===20)r[7]=q
s=r[2]
if(typeof s!=="number")return s.m()
p=s+1
o=r[3]
n=r[4]
m=r[5]
l=r[6]
if(typeof l!=="number")return l.V()
if(typeof m!=="number")return H.q(m)
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
k=!1}else{if(!(m<c&&m===n+2&&C.c.a9(a,"..",n)))i=m>n+2&&C.c.a9(a,"/..",m-3)
else i=!0
if(i){j=null
k=!1}else{if(q===b+4)if(C.c.a9(a,"file",b)){if(p<=b){if(!C.c.a9(a,"/",n)){h="file:///"
t=3}else{h="file://"
t=2}a=h+C.c.t(a,n,c)
q-=b
u=t-b
m+=u
l+=u
c=a.length
b=0
p=7
o=7
n=7}else if(n===m)if(b===0&&!0){a=C.c.aM(a,n,m,"/");++m;++l;++c}else{a=C.c.t(a,b,n)+"/"+C.c.t(a,m,c)
q-=b
p-=b
o-=b
n-=b
u=1-b
m+=u
l+=u
c=a.length
b=0}j="file"}else if(C.c.a9(a,"http",b)){if(s&&o+3===n&&C.c.a9(a,"80",o+1))if(b===0&&!0){a=C.c.aM(a,o,n,"")
n-=3
m-=3
l-=3
c-=3}else{a=C.c.t(a,b,o)+C.c.t(a,n,c)
q-=b
p-=b
o-=b
u=3+b
n-=u
m-=u
l-=u
c=a.length
b=0}j="http"}else j=null
else if(q===u&&C.c.a9(a,"https",b)){if(s&&o+4===n&&C.c.a9(a,"443",o+1))if(b===0&&!0){a=C.c.aM(a,o,n,"")
n-=4
m-=4
l-=4
c-=3}else{a=C.c.t(a,b,o)+C.c.t(a,n,c)
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
if(k){if(b>0||c<a.length){a=C.c.t(a,b,c)
q-=b
p-=b
o-=b
n-=b
m-=b
l-=b}return new P.hK(a,q,p,o,n,m,l,j)}return P.m2(a,b,c,q,p,o,n,m,l,j)},
jZ:function(a,b){var u=P.k
return C.a.jy(H.b(a.split("&"),[u]),P.ll(u,u),new P.fY(b),[P.D,P.k,P.k])},
lO:function(a,b,c){var u,t,s,r,q,p,o,n,m
u=new P.fU(a)
t=new Uint8Array(4)
for(s=t.length,r=b,q=r,p=0;r<c;++r){o=C.c.Y(a,r)
if(o!==46){if((o^48)>9)u.$2("invalid character",r)}else{if(p===3)u.$2("IPv4 address should contain exactly 4 parts",r)
n=P.cy(C.c.t(a,q,r),null,null)
if(typeof n!=="number")return n.d1()
if(n>255)u.$2("each part must be in the range 0..255",q)
m=p+1
if(p>=s)return H.c(t,p)
t[p]=n
q=r+1
p=m}}if(p!==3)u.$2("IPv4 address should contain exactly 4 parts",c)
n=P.cy(C.c.t(a,q,c),null,null)
if(typeof n!=="number")return n.d1()
if(n>255)u.$2("each part must be in the range 0..255",q)
if(p>=s)return H.c(t,p)
t[p]=n
return t},
jY:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
if(c==null)c=a.length
u=new P.fW(a)
t=new P.fX(u,a)
if(a.length<2)u.$1("address is too short")
s=H.b([],[P.m])
for(r=b,q=r,p=!1,o=!1;r<c;++r){n=C.c.Y(a,r)
if(n===58){if(r===b){++r
if(C.c.Y(a,r)!==58)u.$2("invalid start colon.",r)
q=r}if(r===q){if(p)u.$2("only one wildcard `::` is allowed",r)
C.a.h(s,-1)
p=!0}else C.a.h(s,t.$2(q,r))
q=r+1}else if(n===46)o=!0}if(s.length===0)u.$1("too few parts")
m=q===c
l=C.a.gax(s)
if(m&&l!==-1)u.$2("expected a part after last `:`",c)
if(!m)if(!o)C.a.h(s,t.$2(q,c))
else{k=P.lO(a,q,c)
C.a.h(s,(k[0]<<8|k[1])>>>0)
C.a.h(s,(k[2]<<8|k[3])>>>0)}if(p){if(s.length>7)u.$1("an address with a wildcard must have less than 7 parts")}else if(s.length!==8)u.$1("an address without a wildcard must contain exactly 8 parts")
j=new Uint8Array(16)
for(l=s.length,i=j.length,h=9-l,r=0,g=0;r<l;++r){f=s[r]
if(f===-1)for(e=0;e<h;++e){if(g<0||g>=i)return H.c(j,g)
j[g]=0
d=g+1
if(d>=i)return H.c(j,d)
j[d]=0
g+=2}else{d=C.f.aH(f,8)
if(g<0||g>=i)return H.c(j,g)
j[g]=d
d=g+1
if(d>=i)return H.c(j,d)
j[d]=f&255
g+=2}}return j},
m2:function(a,b,c,d,e,f,g,h,i,j){var u,t,s,r,q,p,o
if(j==null)if(d>b)j=P.m9(a,b,d)
else{if(d===b)P.cs(a,b,"Invalid empty scheme")
j=""}if(e>b){u=d+3
t=u<e?P.ma(a,u,e-1):""
s=P.m6(a,e,f,!1)
if(typeof f!=="number")return f.m()
r=f+1
if(typeof g!=="number")return H.q(g)
q=r<g?P.m8(P.cy(C.c.t(a,r,g),new P.hQ(a,f),null),j):null}else{t=""
s=null
q=null}p=P.m7(a,g,h,null,j,s!=null)
if(typeof h!=="number")return h.V()
o=h<i?P.j6(a,h+1,i,null):null
return new P.bD(j,t,s,q,p,o,i<c?P.m5(a,i+1,c):null)},
ka:function(a){if(a==="http")return 80
if(a==="https")return 443
return 0},
cs:function(a,b,c){throw H.d(P.X(c,a,b))},
m8:function(a,b){if(a!=null&&a===P.ka(b))return
return a},
m6:function(a,b,c,d){var u,t
if(b===c)return""
if(C.c.Y(a,b)===91){if(typeof c!=="number")return c.n()
u=c-1
if(C.c.Y(a,u)!==93)P.cs(a,b,"Missing end `]` to match `[` in host")
P.jY(a,b+1,u)
return C.c.t(a,b,c).toLowerCase()}if(typeof c!=="number")return H.q(c)
t=b
for(;t<c;++t)if(C.c.Y(a,t)===58){P.jY(a,b,c)
return"["+a+"]"}return P.mc(a,b,c)},
mc:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k
if(typeof c!=="number")return H.q(c)
u=b
t=u
s=null
r=!0
for(;u<c;){q=C.c.Y(a,u)
if(q===37){p=P.kg(a,u,!0)
o=p==null
if(o&&r){u+=3
continue}if(s==null)s=new P.af("")
n=C.c.t(a,t,u)
m=s.a+=!r?n.toLowerCase():n
if(o){p=C.c.t(a,u,u+3)
l=3}else if(p==="%"){p="%25"
l=1}else l=3
s.a=m+p
u+=l
t=u
r=!0}else{if(q<127){o=q>>>4
if(o>=8)return H.c(C.E,o)
o=(C.E[o]&1<<(q&15))!==0}else o=!1
if(o){if(r&&65<=q&&90>=q){if(s==null)s=new P.af("")
if(t<u){s.a+=C.c.t(a,t,u)
t=u}r=!1}++u}else{if(q<=93){o=q>>>4
if(o>=8)return H.c(C.p,o)
o=(C.p[o]&1<<(q&15))!==0}else o=!1
if(o)P.cs(a,u,"Invalid character")
else{if((q&64512)===55296&&u+1<c){k=C.c.Y(a,u+1)
if((k&64512)===56320){q=65536|(q&1023)<<10|k&1023
l=2}else l=1}else l=1
if(s==null)s=new P.af("")
n=C.c.t(a,t,u)
s.a+=!r?n.toLowerCase():n
s.a+=P.kb(q)
u+=l
t=u}}}}if(s==null)return C.c.t(a,b,c)
if(t<c){n=C.c.t(a,t,c)
s.a+=!r?n.toLowerCase():n}o=s.a
return o.charCodeAt(0)==0?o:o},
m9:function(a,b,c){var u,t,s,r
if(b===c)return""
if(!P.kd(C.c.G(a,b)))P.cs(a,b,"Scheme not starting with alphabetic character")
for(u=b,t=!1;u<c;++u){s=C.c.G(a,u)
if(s<128){r=s>>>4
if(r>=8)return H.c(C.r,r)
r=(C.r[r]&1<<(s&15))!==0}else r=!1
if(!r)P.cs(a,u,"Illegal scheme character")
if(65<=s&&s<=90)t=!0}a=C.c.t(a,b,c)
return P.m3(t?a.toLowerCase():a)},
m3:function(a){if(a==="http")return"http"
if(a==="file")return"file"
if(a==="https")return"https"
if(a==="package")return"package"
return a},
ma:function(a,b,c){return P.ct(a,b,c,C.Z,!1)},
m7:function(a,b,c,d,e,f){var u,t,s,r
u=e==="file"
t=u||f
s=a==null
if(s&&!0)return u?"/":""
r=!s?P.ct(a,b,c,C.F,!0):C.o.kD(d,new P.hR(),P.k).D(0,"/")
if(r.length===0){if(u)return"/"}else if(t&&!C.c.a8(r,"/"))r="/"+r
return P.mb(r,e,f)},
mb:function(a,b,c){var u=b.length===0
if(u&&!c&&!C.c.a8(a,"/"))return P.md(a,!u||c)
return P.me(a)},
j6:function(a,b,c,d){var u,t
u={}
H.h(d,"$iD",[P.k,null],"$aD")
if(a!=null){if(d!=null)throw H.d(P.cE("Both query and queryParameters specified"))
return P.ct(a,b,c,C.q,!0)}if(d==null)return
t=new P.af("")
u.a=""
d.R(0,new P.hS(new P.hT(u,t)))
u=t.a
return u.charCodeAt(0)==0?u:u},
m5:function(a,b,c){return P.ct(a,b,c,C.q,!0)},
kg:function(a,b,c){var u,t,s,r,q,p
u=b+2
if(u>=a.length)return"%"
t=C.c.Y(a,b+1)
s=C.c.Y(a,u)
r=H.ie(t)
q=H.ie(s)
if(r<0||q<0)return"%"
p=r*16+q
if(p<127){u=C.f.aH(p,4)
if(u>=8)return H.c(C.t,u)
u=(C.t[u]&1<<(p&15))!==0}else u=!1
if(u)return H.df(c&&65<=p&&90>=p?(p|32)>>>0:p)
if(t>=97||s>=97)return C.c.t(a,b,b+3).toUpperCase()
return},
kb:function(a){var u,t,s,r,q,p
if(a<128){u=new Array(3)
u.fixed$length=Array
t=H.b(u,[P.m])
C.a.q(t,0,37)
C.a.q(t,1,C.c.G("0123456789ABCDEF",a>>>4))
C.a.q(t,2,C.c.G("0123456789ABCDEF",a&15))}else{if(a>2047)if(a>65535){s=240
r=4}else{s=224
r=3}else{s=192
r=2}u=new Array(3*r)
u.fixed$length=Array
t=H.b(u,[P.m])
for(q=0;--r,r>=0;s=128){p=C.f.ij(a,6*r)&63|s
C.a.q(t,q,37)
C.a.q(t,q+1,C.c.G("0123456789ABCDEF",p>>>4))
C.a.q(t,q+2,C.c.G("0123456789ABCDEF",p&15))
q+=3}}return P.dn(t,0,null)},
ct:function(a,b,c,d,e){var u=P.kf(a,b,c,H.h(d,"$ia",[P.m],"$aa"),e)
return u==null?C.c.t(a,b,c):u},
kf:function(a,b,c,d,e){var u,t,s,r,q,p,o,n,m
H.h(d,"$ia",[P.m],"$aa")
u=!e
t=b
s=t
r=null
while(!0){if(typeof t!=="number")return t.V()
if(typeof c!=="number")return H.q(c)
if(!(t<c))break
c$0:{q=C.c.Y(a,t)
if(q<127){p=q>>>4
if(p>=8)return H.c(d,p)
p=(d[p]&1<<(q&15))!==0}else p=!1
if(p)++t
else{if(q===37){o=P.kg(a,t,!1)
if(o==null){t+=3
break c$0}if("%"===o){o="%25"
n=1}else n=3}else{if(u)if(q<=93){p=q>>>4
if(p>=8)return H.c(C.p,p)
p=(C.p[p]&1<<(q&15))!==0}else p=!1
else p=!1
if(p){P.cs(a,t,"Invalid character")
o=null
n=null}else{if((q&64512)===55296){p=t+1
if(p<c){m=C.c.Y(a,p)
if((m&64512)===56320){q=65536|(q&1023)<<10|m&1023
n=2}else n=1}else n=1}else n=1
o=P.kb(q)}}if(r==null)r=new P.af("")
r.a+=C.c.t(a,s,t)
r.a+=H.i(o)
if(typeof n!=="number")return H.q(n)
t+=n
s=t}}}if(r==null)return
if(typeof s!=="number")return s.V()
if(s<c)r.a+=C.c.t(a,s,c)
u=r.a
return u.charCodeAt(0)==0?u:u},
ke:function(a){if(C.c.a8(a,"."))return!0
return C.c.eo(a,"/.")!==-1},
me:function(a){var u,t,s,r,q,p,o
if(!P.ke(a))return a
u=H.b([],[P.k])
for(t=a.split("/"),s=t.length,r=!1,q=0;q<s;++q){p=t[q]
if(J.J(p,"..")){o=u.length
if(o!==0){if(0>=o)return H.c(u,-1)
u.pop()
if(u.length===0)C.a.h(u,"")}r=!0}else if("."===p)r=!0
else{C.a.h(u,p)
r=!1}}if(r)C.a.h(u,"")
return C.a.D(u,"/")},
md:function(a,b){var u,t,s,r,q,p
if(!P.ke(a))return!b?P.kc(a):a
u=H.b([],[P.k])
for(t=a.split("/"),s=t.length,r=!1,q=0;q<s;++q){p=t[q]
if(".."===p)if(u.length!==0&&C.a.gax(u)!==".."){if(0>=u.length)return H.c(u,-1)
u.pop()
r=!0}else{C.a.h(u,"..")
r=!1}else if("."===p)r=!0
else{C.a.h(u,p)
r=!1}}t=u.length
if(t!==0)if(t===1){if(0>=t)return H.c(u,0)
t=u[0].length===0}else t=!1
else t=!0
if(t)return"./"
if(r||C.a.gax(u)==="..")C.a.h(u,"")
if(!b){if(0>=u.length)return H.c(u,0)
C.a.q(u,0,P.kc(u[0]))}return C.a.D(u,"/")},
kc:function(a){var u,t,s,r
u=a.length
if(u>=2&&P.kd(J.l_(a,0)))for(t=1;t<u;++t){s=C.c.G(a,t)
if(s===58)return C.c.t(a,0,t)+"%3A"+C.c.ay(a,t+1)
if(s<=127){r=s>>>4
if(r>=8)return H.c(C.r,r)
r=(C.r[r]&1<<(s&15))===0}else r=!0
if(r)break}return a},
m4:function(a,b){var u,t,s
for(u=0,t=0;t<2;++t){s=C.c.G(a,b+t)
if(48<=s&&s<=57)u=u*16+s-48
else{s|=32
if(97<=s&&s<=102)u=u*16+s-87
else throw H.d(P.cE("Invalid URL encoding"))}}return u},
j7:function(a,b,c,d,e){var u,t,s,r,q
t=b
while(!0){if(!(t<c)){u=!0
break}s=C.c.G(a,t)
if(s<=127)if(s!==37)r=s===43
else r=!0
else r=!0
if(r){u=!1
break}++t}if(u){if(C.m!==d)r=!1
else r=!0
if(r)return C.c.t(a,b,c)
else q=new H.Z(C.c.t(a,b,c))}else{q=H.b([],[P.m])
for(r=a.length,t=b;t<c;++t){s=C.c.G(a,t)
if(s>127)throw H.d(P.cE("Illegal percent encoding in URI"))
if(s===37){if(t+3>r)throw H.d(P.cE("Truncated URI"))
C.a.h(q,P.m4(a,t+1))
t+=2}else if(s===43)C.a.h(q,32)
else C.a.h(q,s)}}H.h(q,"$ia",[P.m],"$aa")
return new P.h_(!1).cu(q)},
kd:function(a){var u=a|32
return 97<=u&&u<=122},
jX:function(a,b,c){var u,t,s,r,q,p,o,n,m
u=H.b([b-1],[P.m])
for(t=a.length,s=b,r=-1,q=null;s<t;++s){q=C.c.G(a,s)
if(q===44||q===59)break
if(q===47){if(r<0){r=s
continue}throw H.d(P.X("Invalid MIME type",a,s))}}if(r<0&&s>b)throw H.d(P.X("Invalid MIME type",a,s))
for(;q!==44;){C.a.h(u,s);++s
for(p=-1;s<t;++s){q=C.c.G(a,s)
if(q===61){if(p<0)p=s}else if(q===59||q===44)break}if(p>=0)C.a.h(u,p)
else{o=C.a.gax(u)
if(q!==44||s!==o+7||!C.c.a9(a,"base64",o+1))throw H.d(P.X("Expecting '='",a,s))
break}}C.a.h(u,s)
n=s+1
if((u.length&1)===1)a=C.K.jN(a,n,t)
else{m=P.kf(a,n,t,C.q,!0)
if(m!=null)a=C.c.aM(a,n,t,m)}return new P.fT(a,u,c)},
mg:function(){var u,t,s,r,q
u=P.lp(22,new P.i1(),!0,P.G)
t=new P.i0(u)
s=new P.i2()
r=new P.i3()
q=H.e(t.$2(0,225),"$iG")
s.$3(q,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",1)
s.$3(q,".",14)
s.$3(q,":",34)
s.$3(q,"/",3)
s.$3(q,"?",172)
s.$3(q,"#",205)
q=H.e(t.$2(14,225),"$iG")
s.$3(q,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",1)
s.$3(q,".",15)
s.$3(q,":",34)
s.$3(q,"/",234)
s.$3(q,"?",172)
s.$3(q,"#",205)
q=H.e(t.$2(15,225),"$iG")
s.$3(q,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",1)
s.$3(q,"%",225)
s.$3(q,":",34)
s.$3(q,"/",9)
s.$3(q,"?",172)
s.$3(q,"#",205)
q=H.e(t.$2(1,225),"$iG")
s.$3(q,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",1)
s.$3(q,":",34)
s.$3(q,"/",10)
s.$3(q,"?",172)
s.$3(q,"#",205)
q=H.e(t.$2(2,235),"$iG")
s.$3(q,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",139)
s.$3(q,"/",131)
s.$3(q,".",146)
s.$3(q,"?",172)
s.$3(q,"#",205)
q=H.e(t.$2(3,235),"$iG")
s.$3(q,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",11)
s.$3(q,"/",68)
s.$3(q,".",18)
s.$3(q,"?",172)
s.$3(q,"#",205)
q=H.e(t.$2(4,229),"$iG")
s.$3(q,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",5)
r.$3(q,"AZ",229)
s.$3(q,":",102)
s.$3(q,"@",68)
s.$3(q,"[",232)
s.$3(q,"/",138)
s.$3(q,"?",172)
s.$3(q,"#",205)
q=H.e(t.$2(5,229),"$iG")
s.$3(q,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",5)
r.$3(q,"AZ",229)
s.$3(q,":",102)
s.$3(q,"@",68)
s.$3(q,"/",138)
s.$3(q,"?",172)
s.$3(q,"#",205)
q=H.e(t.$2(6,231),"$iG")
r.$3(q,"19",7)
s.$3(q,"@",68)
s.$3(q,"/",138)
s.$3(q,"?",172)
s.$3(q,"#",205)
q=H.e(t.$2(7,231),"$iG")
r.$3(q,"09",7)
s.$3(q,"@",68)
s.$3(q,"/",138)
s.$3(q,"?",172)
s.$3(q,"#",205)
s.$3(H.e(t.$2(8,8),"$iG"),"]",5)
q=H.e(t.$2(9,235),"$iG")
s.$3(q,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",11)
s.$3(q,".",16)
s.$3(q,"/",234)
s.$3(q,"?",172)
s.$3(q,"#",205)
q=H.e(t.$2(16,235),"$iG")
s.$3(q,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",11)
s.$3(q,".",17)
s.$3(q,"/",234)
s.$3(q,"?",172)
s.$3(q,"#",205)
q=H.e(t.$2(17,235),"$iG")
s.$3(q,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",11)
s.$3(q,"/",9)
s.$3(q,"?",172)
s.$3(q,"#",205)
q=H.e(t.$2(10,235),"$iG")
s.$3(q,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",11)
s.$3(q,".",18)
s.$3(q,"/",234)
s.$3(q,"?",172)
s.$3(q,"#",205)
q=H.e(t.$2(18,235),"$iG")
s.$3(q,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",11)
s.$3(q,".",19)
s.$3(q,"/",234)
s.$3(q,"?",172)
s.$3(q,"#",205)
q=H.e(t.$2(19,235),"$iG")
s.$3(q,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",11)
s.$3(q,"/",234)
s.$3(q,"?",172)
s.$3(q,"#",205)
q=H.e(t.$2(11,235),"$iG")
s.$3(q,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",11)
s.$3(q,"/",10)
s.$3(q,"?",172)
s.$3(q,"#",205)
q=H.e(t.$2(12,236),"$iG")
s.$3(q,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",12)
s.$3(q,"?",12)
s.$3(q,"#",205)
q=H.e(t.$2(13,237),"$iG")
s.$3(q,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",13)
s.$3(q,"?",13)
r.$3(H.e(t.$2(20,245),"$iG"),"az",21)
q=H.e(t.$2(21,245),"$iG")
r.$3(q,"az",21)
r.$3(q,"09",21)
s.$3(q,"+-.",21)
return u},
kk:function(a,b,c,d,e){var u,t,s,r,q
H.h(e,"$ia",[P.m],"$aa")
u=$.kV()
for(t=b;t<c;++t){if(d<0||d>=u.length)return H.c(u,d)
s=u[d]
r=C.c.G(a,t)^96
if(r>95)r=31
if(r>=s.length)return H.c(s,r)
q=s[r]
d=q&31
C.a.q(e,q>>>5,t)}return d},
a4:function a4(){},
ac:function ac(a,b){this.a=a
this.b=b},
t:function t(){},
aE:function aE(a){this.a=a},
ei:function ei(){},
ej:function ej(){},
ba:function ba(){},
dc:function dc(){},
aC:function aC(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
bz:function bz(a,b,c,d,e,f){var _=this
_.e=a
_.f=b
_.a=c
_.b=d
_.c=e
_.d=f},
ew:function ew(a,b,c,d,e,f){var _=this
_.e=a
_.f=b
_.a=c
_.b=d
_.c=e
_.d=f},
fS:function fS(a){this.a=a},
fP:function fP(a){this.a=a},
dm:function dm(a){this.a=a},
ec:function ec(a){this.a=a},
f1:function f1(){},
dl:function dl(){},
eg:function eg(a){this.a=a},
dL:function dL(a){this.a=a},
eu:function eu(a,b,c){this.a=a
this.b=b
this.c=c},
m:function m(){},
n:function n(){},
aF:function aF(){},
a:function a(){},
D:function D(){},
y:function y(){},
aa:function aa(){},
F:function F(){},
ak:function ak(){},
k:function k(){},
af:function af(a){this.a=a},
fY:function fY(a){this.a=a},
fU:function fU(a){this.a=a},
fW:function fW(a){this.a=a},
fX:function fX(a,b){this.a=a
this.b=b},
bD:function bD(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.ch=_.Q=_.z=_.y=_.x=null},
hQ:function hQ(a,b){this.a=a
this.b=b},
hR:function hR(){},
hT:function hT(a,b){this.a=a
this.b=b},
hS:function hS(a){this.a=a},
fT:function fT(a,b,c){this.a=a
this.b=b
this.c=c},
i1:function i1(){},
i0:function i0(a){this.a=a},
i2:function i2(){},
i3:function i3(){},
hK:function hK(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.x=h
_.y=null},
hn:function hn(a,b,c,d,e,f,g,h){var _=this
_.cx=a
_.a=b
_.b=c
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.ch=_.Q=_.z=_.y=_.x=null},
mv:function(a){var u,t
u=J.N(a)
if(!!u.$iaV){t=u.gdT(a)
if(t.constructor===Array)if(typeof CanvasPixelArray!=="undefined"){t.constructor=CanvasPixelArray
t.BYTES_PER_ELEMENT=1}return a}return new P.dW(a.data,a.height,a.width)},
mu:function(a){if(a instanceof P.dW)return{data:a.a,height:a.b,width:a.c}
return a},
mt:function(a,b){var u={}
a.R(0,new P.i7(u))
return u},
hL:function hL(){},
hM:function hM(a,b){this.a=a
this.b=b},
dW:function dW(a,b,c){this.a=a
this.b=b
this.c=c},
i7:function i7(a){this.a=a},
dS:function dS(a,b){this.a=a
this.b=b},
eq:function eq(a,b){this.a=a
this.b=b},
er:function er(){},
es:function es(){},
hB:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
m_:function(a){a=536870911&a+((67108863&a)<<3)
a^=a>>>11
return 536870911&a+((16383&a)<<15)},
hE:function hE(){},
ao:function ao(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=e},
o:function o(){},
G:function G(){},
cH:function cH(){},
cS:function cS(){},
dg:function dg(){},
bA:function bA(){},
dj:function dj(){},
ds:function ds(){},
dA:function dA(){}},W={
iQ:function(a,b){var u=document.createElement("canvas")
return u},
lb:function(a){H.e(a,"$ibq")
return"wheel"},
jz:function(a,b,c){var u=document.createElement("img")
if(b!=null)u.src=b
return u},
le:function(a){var u,t,s
t=document.createElement("input")
u=H.e(t,"$ibZ")
try{u.type=a}catch(s){H.at(s)}return u},
hA:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
k7:function(a,b,c,d){var u,t
u=W.hA(W.hA(W.hA(W.hA(0,a),b),c),d)
t=536870911&u+((67108863&u)<<3)
t^=t>>>11
return 536870911&t+((16383&t)<<15)},
a0:function(a,b,c,d,e){var u,t
u=W.kn(new W.hq(c),W.l)
t=u!=null
if(t&&!0){H.j(u,{func:1,args:[W.l]})
if(t)J.kZ(a,b,u,!1)}return new W.hp(a,b,u,!1,[e])},
kn:function(a,b){var u
H.j(a,{func:1,ret:-1,args:[b]})
u=$.R
if(u===C.k)return a
return u.dP(a,b)},
v:function v(){},
e2:function e2(){},
e3:function e3(){},
cG:function cG(){},
bk:function bk(){},
bl:function bl(){},
b7:function b7(){},
bT:function bT(){},
ef:function ef(){},
bU:function bU(){},
bV:function bV(){},
eh:function eh(){},
cO:function cO(){},
hm:function hm(a,b){this.a=a
this.b=b},
P:function P(){},
l:function l(){},
bq:function bq(){},
et:function et(){},
cT:function cT(){},
bs:function bs(){},
cU:function cU(){},
aV:function aV(){},
bt:function bt(){},
bZ:function bZ(){},
aG:function aG(){},
d_:function d_(){},
c0:function c0(){},
Y:function Y(){},
hl:function hl(a){this.a=a},
E:function E(){},
c3:function c3(){},
fc:function fc(){},
aJ:function aJ(){},
dp:function dp(){},
dq:function dq(){},
ax:function ax(){},
ay:function ay(){},
fC:function fC(){},
bf:function bf(){},
hd:function hd(){},
aM:function aM(){},
cl:function cl(){},
dK:function dK(){},
ho:function ho(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
j5:function j5(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
hp:function hp(a,b,c,d,e){var _=this
_.a=0
_.b=a
_.c=b
_.d=c
_.e=d
_.$ti=e},
hq:function hq(a){this.a=a},
au:function au(){},
cR:function cR(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=null
_.$ti=d},
dJ:function dJ(){},
dM:function dM(){},
dN:function dN(){},
dP:function dP(){},
dQ:function dQ(){},
dU:function dU(){},
dV:function dV(){}},O={
iR:function(a){var u=new O.V([a])
u.bR(a)
return u},
V:function V(a){var _=this
_.d=_.c=_.b=_.a=null
_.$ti=a},
c_:function c_(){this.b=this.a=null},
d4:function d4(){var _=this
_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
eQ:function eQ(a,b){var _=this
_.f=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
d5:function d5(){},
eR:function eR(a,b){var _=this
_.a=a
_.b=b
_.e=_.d=_.c=null},
aH:function aH(a,b){var _=this
_.f=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
eT:function eT(a,b){var _=this
_.f=_.ch=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
eU:function eU(a,b){var _=this
_.f=_.ch=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
bC:function bC(){}},E={
jy:function(a,b,c,d,e,f){var u=new E.ad()
u.a=d
u.b=!0
u.sff(0,O.iR(E.ad))
u.y.ba(u.gjO(),u.gjR())
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
u.sd3(0,e)
u.seI(f)
u.sb1(c)
return u},
lH:function(a,b){var u=new E.f7(a,b)
u.f9(a,b)
return u},
lL:function(a,b,c,d,e){var u,t,s,r
u=J.N(a)
if(!!u.$ibk)return E.jT(a,!0,!0,!0,!1)
t=W.iQ(null,null)
s=t.style
s.width="100%"
s.height="100%"
u.gct(a).h(0,t)
r=E.jT(t,!0,!0,!0,!1)
r.a=a
return r},
jT:function(a,b,c,d,e){var u,t,s,r,q,p,o,n,m,l,k,j
u=new E.dw()
t=P.lm(["alpha",!0,"depth",!0,"stencil",!1,"antialias",!0,"premultipliedAlpha",!0,"preserveDrawingBuffer",!1],P.k,null)
s=C.n.bL(a,"webgl",t)
s=H.e(s==null?C.n.bL(a,"experimental-webgl",t):s,"$ibA")
if(s==null)H.p(P.u("Failed to get the rendering context for WebGL."))
u.b=a
u.a=a
u.c=s
u.e=E.lH(s,a)
r=new T.fw(s)
r.b=H.a7((s&&C.b).d0(s,3379))
r.c=H.a7(C.b.d0(s,34076))
r.d=0
r.e=0
u.f=r
r=new X.dD(a)
q=new X.eB()
q.c=new X.am(!1,!1,!1)
q.shZ(P.ln(null,null,null,P.m))
r.b=q
q=new X.eV(r)
q.f=0
q.r=V.be()
q.x=V.be()
q.Q=1
q.ch=1
r.c=q
q=new X.eI(r)
q.r=0
q.x=V.be()
q.Q=1
q.ch=1
q.cx=1
q.cy=1
r.d=q
q=new X.fB(r)
q.e=0
q.f=V.be()
q.r=V.be()
r.e=q
r.f=!1
r.r=!1
r.x=!1
r.y=null
r.sfM(H.b([],[[P.c8,P.F]]))
q=r.z
p=document
o=W.Y
n={func:1,ret:-1,args:[o]};(q&&C.a).h(q,W.a0(p,"contextmenu",H.j(r.ghn(),n),!1,o))
q=r.z
m=W.l
l={func:1,ret:-1,args:[m]};(q&&C.a).h(q,W.a0(a,"focus",H.j(r.ght(),l),!1,m))
q=r.z;(q&&C.a).h(q,W.a0(a,"blur",H.j(r.ghf(),l),!1,m))
q=r.z
k=W.aG
j={func:1,ret:-1,args:[k]};(q&&C.a).h(q,W.a0(p,"keyup",H.j(r.ghx(),j),!1,k))
q=r.z;(q&&C.a).h(q,W.a0(p,"keydown",H.j(r.ghv(),j),!1,k))
k=r.z;(k&&C.a).h(k,W.a0(a,"mousedown",H.j(r.ghB(),n),!1,o))
k=r.z;(k&&C.a).h(k,W.a0(a,"mouseup",H.j(r.ghF(),n),!1,o))
k=r.z;(k&&C.a).h(k,W.a0(a,"mousemove",H.j(r.ghD(),n),!1,o))
k=r.z
j=W.aM;(k&&C.a).h(k,W.a0(a,H.O(W.lb(a)),H.j(r.ghH(),{func:1,ret:-1,args:[j]}),!1,j))
j=r.z;(j&&C.a).h(j,W.a0(p,"mousemove",H.j(r.ghp(),n),!1,o))
j=r.z;(j&&C.a).h(j,W.a0(p,"mouseup",H.j(r.ghr(),n),!1,o))
o=r.z;(o&&C.a).h(o,W.a0(p,"pointerlockchange",H.j(r.ghJ(),l),!1,m))
m=r.z
l=W.ay
p={func:1,ret:-1,args:[l]};(m&&C.a).h(m,W.a0(a,"touchstart",H.j(r.ghW(),p),!1,l))
m=r.z;(m&&C.a).h(m,W.a0(a,"touchend",H.j(r.ghS(),p),!1,l))
m=r.z;(m&&C.a).h(m,W.a0(a,"touchmove",H.j(r.ghU(),p),!1,l))
u.r=r
u.Q=!0
u.ch=!1
u.cx=new P.ac(Date.now(),!1)
u.cy=0
u.dH()
return u},
e7:function e7(){},
ad:function ad(){var _=this
_.fx=_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
f7:function f7(a,b){var _=this
_.a=a
_.b=b
_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=null},
f8:function f8(a){this.a=a},
f9:function f9(a){this.a=a},
fa:function fa(a){this.a=a},
dw:function dw(){var _=this
_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
fz:function fz(a){this.a=a}},Z={
j4:function(a,b,c){var u
H.h(c,"$ia",[P.m],"$aa")
u=a.createBuffer()
C.b.an(a,b,u)
C.b.dR(a,b,new Int16Array(H.bE(c)),35044)
C.b.an(a,b,null)
return new Z.dH(b,u)},
ap:function(a){return new Z.aA(a)},
dH:function dH(a,b){this.a=a
this.b=b},
cI:function cI(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
he:function he(a){this.a=a},
cJ:function cJ(a,b,c){var _=this
_.a=a
_.b=null
_.c=b
_.d=c},
bb:function bb(a,b,c){this.a=a
this.b=b
this.c=c},
aA:function aA(a){this.a=a}},D={
K:function(){var u=new D.bp()
u.sag(null)
u.sbd(null)
u.c=null
u.d=0
return u},
ea:function ea(){},
bp:function bp(){var _=this
_.d=_.c=_.b=_.a=null},
eo:function eo(a){this.a=a},
x:function x(a){this.a=a
this.b=null},
bu:function bu(a,b,c,d){var _=this
_.c=a
_.d=b
_.a=c
_.b=null
_.$ti=d},
bv:function bv(a,b,c,d){var _=this
_.c=a
_.d=b
_.a=c
_.b=null
_.$ti=d},
H:function H(a,b,c,d,e){var _=this
_.c=a
_.d=b
_.e=c
_.a=d
_.b=null
_.$ti=e},
b9:function b9(){var _=this
_.d=_.c=_.b=_.a=null},
a_:function a_(){},
d0:function d0(){var _=this
_.d=_.c=_.b=_.a=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=null},
de:function de(){},
dk:function dk(){},
dt:function dt(){},
du:function du(){},
dv:function dv(){}},X={cK:function cK(a,b){this.a=a
this.b=b},cZ:function cZ(a,b){this.a=a
this.b=b},eB:function eB(){var _=this
_.d=_.c=_.b=_.a=null},d2:function d2(a,b,c,d,e,f){var _=this
_.x=a
_.y=b
_.c=c
_.d=d
_.e=e
_.a=f
_.b=null},eI:function eI(a){var _=this
_.a=a
_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},am:function am(a,b,c){this.a=a
this.b=b
this.c=c},b0:function b0(a,b,c,d,e,f,g,h,i){var _=this
_.x=a
_.y=b
_.z=c
_.Q=d
_.ch=e
_.c=f
_.d=g
_.e=h
_.a=i
_.b=null},eV:function eV(a){var _=this
_.a=a
_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},c1:function c1(a,b,c,d,e){var _=this
_.x=a
_.c=b
_.d=c
_.e=d
_.a=e
_.b=null},f3:function f3(){},dy:function dy(a,b,c,d,e,f,g,h,i){var _=this
_.x=a
_.y=b
_.z=c
_.Q=d
_.ch=e
_.c=f
_.d=g
_.e=h
_.a=i
_.b=null},fB:function fB(a){var _=this
_.a=a
_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},dD:function dD(a){var _=this
_.a=a
_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},
ld:function(a,b,c,d,e,f,g){var u,t
u=new X.ev()
t=new V.aU(0,0,0,1)
u.a=t
u.b=!0
u.c=e
u.d=!0
u.e=g
u.f=!1
t=$.jQ
if(t==null){t=V.jP(0,0,1,1)
$.jQ=t}u.r=t
return u},
cL:function cL(){},
ev:function ev(){var _=this
_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
dd:function dd(){var _=this
_.f=_.e=_.d=_.c=_.b=_.a=null},
dr:function dr(){}},V={
mZ:function(a,b,c){var u
if(c<=b)return b
u=c-b
a=C.e.ak(a-b,u)
return(a<0?a+u:a)+b},
M:function(a,b,c){if(a==null)return C.c.ae("null",c)
return C.c.ae(C.e.eK(Math.abs(a-0)<$.I().a?0:a,b),c+b+1)},
bJ:function(a,b,c){var u,t,s,r,q,p
H.h(a,"$ia",[P.t],"$aa")
u=H.b([],[P.k])
for(t=a.length,s=0,r=0;r<a.length;a.length===t||(0,H.z)(a),++r){q=V.M(a[r],b,c)
s=Math.max(s,q.length)
C.a.h(u,q)}for(p=u.length-1;p>=0;--p){if(p>=u.length)return H.c(u,p)
C.a.q(u,p,C.c.ae(u[p],s))}return u},
jj:function(a,b){return C.e.km(Math.pow(b,C.Q.aY(Math.log(H.ms(a))/Math.log(b))))},
d7:function(){var u=$.jG
if(u==null){u=V.aI(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1)
$.jG=u}return u},
aI:function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){return new V.ae(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p)},
jF:function(a,b,c){var u,t,s,r,q,p,o,n
u=c.w(0,Math.sqrt(c.F(c)))
t=b.aw(u)
s=t.w(0,Math.sqrt(t.F(t)))
r=u.aw(s)
q=new V.A(a.a,a.b,a.c)
p=s.P(0).F(q)
o=r.P(0).F(q)
n=u.P(0).F(q)
return V.aI(s.a,r.a,u.a,p,s.b,r.b,u.b,o,s.c,r.c,u.c,n,0,0,0,1)},
be:function(){var u=$.jK
if(u==null){u=new V.a6(0,0)
$.jK=u}return u},
jL:function(){var u=$.c4
if(u==null){u=new V.T(0,0,0)
$.c4=u}return u},
jP:function(a,b,c,d){if(c<0){a+=c
c=-c}if(d<0){b+=d
d=-d}return new V.di(a,b,c,d)},
ck:function(){var u=$.k3
if(u==null){u=new V.A(0,0,0)
$.k3=u}return u},
k4:function(){var u=$.k2
if(u==null){u=new V.A(0,1,0)
$.k2=u}return u},
k5:function(){var u=$.h1
if(u==null){u=new V.A(0,0,1)
$.h1=u}return u},
W:function W(a,b,c){this.a=a
this.b=b
this.c=c},
aU:function aU(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
em:function em(a){this.a=a},
d6:function d6(a,b,c,d,e,f,g,h,i){var _=this
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
a6:function a6(a,b){this.a=a
this.b=b},
T:function T(a,b,c){this.a=a
this.b=b
this.c=c},
b3:function b3(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
di:function di(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
L:function L(a,b){this.a=a
this.b=b},
A:function A(a,b,c){this.a=a
this.b=b
this.c=c},
a8:function(a){var u=new V.fd()
u.fa(a)
return u},
e1:function e1(){},
b_:function b_(){},
d3:function d3(){},
b2:function b2(){this.a=null},
fd:function fd(){this.a=null},
c7:function c7(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
dx:function dx(a,b,c){this.a=a
this.b=b
this.c=c},
ca:function ca(a,b){this.a=a
this.b=b
this.c=null},
fA:function fA(){this.c=this.b=this.a=null},
cb:function cb(a){this.b=a
this.a=this.c=null},
mU:function(a){P.lM(C.O,new V.iH(a))},
jO:function(a,b){var u,t
u=new V.f4(a,!0)
t=C.v.bM(document,a)
u.c=t
if(t==null)H.p("Failed to find "+a+" for RadioGroup")
return u},
lJ:function(a,b){var u=new V.fh()
u.fc(a,!0)
return u},
iH:function iH(a){this.a=a},
f4:function f4(a,b){this.a=a
this.b=b
this.c=null},
f5:function f5(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
fh:function fh(){this.b=this.a=null},
fj:function fj(a){this.a=a},
fi:function fi(a){this.a=a},
fs:function fs(a,b,c){var _=this
_.a=a
_.b=b
_.c=null
_.d=c},
fu:function fu(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
ft:function ft(){}},U={
iS:function(){var u=new U.eb()
u.a=!0
u.b=1e12
u.c=-1e12
u.d=0
u.e=100
u.f=0
u.x=0
u.r=0
return u},
jw:function(a){var u=new U.cM()
u.a=a
return u},
eb:function eb(){var _=this
_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
cM:function cM(){this.b=this.a=null},
bX:function bX(){var _=this
_.d=_.c=_.b=_.a=_.r=_.f=_.e=null},
a2:function a2(){},
dE:function dE(){var _=this
_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
dF:function dF(){var _=this
_.fx=_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
dG:function dG(){var _=this
_.r=_.f=_.e=_.d=_.c=_.b=_.a=null}},M={cP:function cP(){var _=this
_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null}},A={
lq:function(a,b){var u,t
u=a.ai
t=new A.eP(b,u)
t.fb(b,u)
t.f8(a,b)
return t},
j0:function(a,b,c,d,e){var u=new A.fH(a,b,c,e)
u.f=d
u.siB(P.lo(d,0,!1,P.m))
return u},
cF:function cF(a,b,c){this.a=a
this.b=b
this.c=c},
e4:function e4(a){this.a=a},
eP:function eP(a,b){var _=this
_.bl=_.dX=_.bk=_.ai=_.ap=_.y2=_.y1=_.x2=_.x1=_.ry=_.rx=_.r2=_.r1=_.k4=_.k3=_.k2=_.k1=_.id=_.go=_.fy=_.fx=_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=null
_.ec=_.cB=_.eb=_.by=_.ea=_.e9=_.bx=_.bw=_.e8=_.e7=_.bv=_.bu=_.bt=_.e6=_.e5=_.bs=_.e4=_.e3=_.br=_.e2=_.e1=_.bq=_.bp=_.e0=_.e_=_.bo=_.bn=_.dZ=_.dY=_.bm=null
_.cG=_.eg=_.cF=_.ef=_.cE=_.ee=_.cD=_.ed=_.cC=null
_.a=a
_.b=b
_.y=_.x=_.r=_.f=_.e=_.d=_.c=null},
eS:function eS(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5){var _=this
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
_.ai=b4
_.bk=b5},
cc:function cc(a,b,c){this.a=a
this.b=b
this.c=c},
cg:function cg(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.x=h},
ce:function ce(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},
ch:function ch(a,b,c,d,e,f,g,h,i,j){var _=this
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
cf:function cf(a,b,c,d,e,f,g,h,i,j){var _=this
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
ci:function ci(a,b,c,d,e,f,g,h,i,j,k,l,m,n){var _=this
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
c6:function c6(){},
bn:function bn(a,b){this.a=a
this.b=b},
dz:function dz(){},
fN:function fN(a){this.a=a},
C:function C(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
fJ:function fJ(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
fK:function fK(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
fM:function fM(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
fH:function fH(a,b,c,d){var _=this
_.f=_.e=null
_.a=a
_.b=b
_.c=c
_.d=d},
S:function S(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
fI:function fI(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
B:function B(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
fL:function fL(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
fO:function fO(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
cd:function cd(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
an:function an(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
ag:function ag(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
ah:function ah(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d}},F={
ks:function(a,b,c,d){var u
H.j(c,{func:1,ret:-1,args:[F.ai,P.t,P.t]})
u=F.iZ()
F.cu(u,b,c,d,a,1,0,0,1)
F.cu(u,b,c,d,a,0,1,0,3)
F.cu(u,b,c,d,a,0,0,1,2)
F.cu(u,b,c,d,a,-1,0,0,0)
F.cu(u,b,c,d,a,0,-1,0,0)
F.cu(u,b,c,d,a,0,0,-1,3)
u.a4()
return u},
i_:function(a){var u,t
u=a.a>0?1:0
if(a.b>0)u+=2
t=a.c
if(typeof t!=="number")return t.d1()
return(t>0?u+4:u)*2},
cu:function(a,b,c,d,a0,a1,a2,a3,a4){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e
u={}
H.j(c,{func:1,ret:-1,args:[F.ai,P.t,P.t]})
t=a1+a2
s=t+a3
r=a2+a3
q=a3+a1
p=new V.A(s,r+a1,q+a2)
u.a=p
o=a1-a2
n=a2-a3
m=a3-a1
l=new V.A(o+a3,n+a1,m+a2)
u.b=l
k=new V.A(o-a3,n-a1,m-a2)
u.c=k
j=new V.A(t-a3,r-a1,q-a2)
u.d=j
if(s>0){u.d=l
u.b=j
s=l
t=j}else{s=j
t=l}for(q=s,s=t,t=p,r=k,i=0;i<a4;++i,h=q,q=t,t=s,s=r,r=h){u.a=s
u.b=r
u.c=q
u.d=t}g=F.i_(t)
f=F.i_(u.b)
e=F.e0(d,a0,new F.hZ(u,F.i_(u.c),F.i_(u.d),f,g,c),b)
if(e!=null)a.bB(e)},
mw:function(a,b,c,d,e,f){return F.mx(!1,!1,d,new F.i8(a,f),e)},
mx:function(a,b,c,d,e){var u
H.j(d,{func:1,ret:P.t,args:[P.t,P.t]})
if(e<3)return
if(c<1)return
u=F.e0(c,e,new F.ia(d),null)
if(u==null)return
u.a4()
u.bg()
return u},
mM:function(a,b){var u=F.e0(a,b,new F.ik(),null)
u.d.bD()
u.a4()
u.bg()
return u},
mV:function(a,b,c,d){var u,t
u={}
u.a=b
u.a=new F.iI()
t=F.ks(a,null,new F.iJ(u,c),d)
t.bg()
return t},
mY:function(a,b,c,d){return F.my(c,a,d,b,new F.iK())},
my:function(a,b,c,d,e){var u=F.e0(a,b,new F.i9(H.j(e,{func:1,ret:V.T,args:[P.t]}),d,b,c),null)
if(u==null)return
u.a4()
u.bg()
return u},
jg:function(a,b,c){var u={}
u.a=b
u.a=new F.ic()
return F.e0(c,a,new F.id(u),null)},
e0:function(a,b,c,d){var u,t,s,r,q,p,o,n,m,l,k,j,i,h
H.j(c,{func:1,ret:-1,args:[F.ai,P.t,P.t]})
if(a<1)return
if(b<1)return
u=F.iZ()
t=H.b([],[F.ai])
for(s=0;s<=b;++s){r=s/b
q=u.a
if(r<0)p=0
else p=r>1?1:r
q.toString
o=F.j3(null,null,new V.aU(p,0,0,1),null,null,new V.a6(r,1),null,null,0)
q.h(0,o)
c.$3(o,r,0)
C.a.h(t,o.cv(d))}for(s=1;s<=a;++s){n=s/a
for(q=n>1,p=n<0,m=1-n,l=0;l<=b;++l){r=l/b
k=u.a
if(r<0)j=0
else j=r>1?1:r
if(p)i=0
else i=q?1:n
if(p)h=0
else h=q?1:n
k.toString
o=F.j3(null,null,new V.aU(j,i,h,1),null,null,new V.a6(r,m),null,null,0)
k.h(0,o)
c.$3(o,r,n)
C.a.h(t,o.cv(d))}}u.d.j_(a+1,b+1,t)
return u},
cQ:function(a,b,c){var u,t
u=new F.a1()
t=a.a
if(t==null)H.p(P.u("May not create a face with a first vertex which is not attached to a shape."))
if(t!=b.a||t!=c.a)H.p(P.u("May not create a face with vertices attached to different shapes."))
u.cf(a)
u.cg(b)
u.ic(c)
C.a.h(u.a.a.d.b,u)
u.a.a.a1()
return u},
lj:function(a,b){var u,t
u=new F.aZ()
t=a.a
if(t==null)H.p(P.u("May not create a line with a start vertex which is not attached to a shape."))
if(t!=b.a)H.p(P.u("May not create a line with vertices attached to different shapes."))
u.cf(a)
u.cg(b)
C.a.h(u.a.a.c.b,u)
u.a.a.a1()
return u},
iZ:function(){var u,t
u=new F.bB()
t=new F.h2(u)
t.b=!1
t.siC(H.b([],[F.ai]))
u.a=t
t=new F.fg(u)
t.sc7(H.b([],[F.bd]))
u.b=t
t=new F.ff(u)
t.sfY(H.b([],[F.aZ]))
u.c=t
t=new F.fe(u)
t.sfN(H.b([],[F.a1]))
u.d=t
u.e=null
return u},
j3:function(a,b,c,d,e,f,g,h,i){var u,t,s
u=new F.ai()
t=new F.ha(u)
t.sc7(H.b([],[F.bd]))
u.b=t
t=new F.h6(u)
s=[F.aZ]
t.sfZ(H.b([],s))
t.sh_(H.b([],s))
u.c=t
t=new F.h3(u)
s=[F.a1]
t.sfO(H.b([],s))
t.sfP(H.b([],s))
t.sfQ(H.b([],s))
u.d=t
h=$.jm()
u.e=0
t=$.aQ()
s=h.a
u.f=(s&t.a)!==0?d:null
u.r=(s&$.aB().a)!==0?e:null
u.x=(s&$.aP().a)!==0?b:null
u.y=(s&$.aR().a)!==0?f:null
u.z=(s&$.aS().a)!==0?g:null
u.Q=(s&$.jn().a)!==0?c:null
u.ch=(s&$.bj().a)!==0?i:0
u.cx=(s&$.aO().a)!==0?a:null
return u},
hZ:function hZ(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
i8:function i8(a,b){this.a=a
this.b=b},
ia:function ia(a){this.a=a},
ik:function ik(){},
iI:function iI(){},
iJ:function iJ(a,b){this.a=a
this.b=b},
iK:function iK(){},
i9:function i9(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
ic:function ic(){},
id:function id(a){this.a=a},
a1:function a1(){var _=this
_.e=_.d=_.c=_.b=_.a=null},
ep:function ep(){},
fk:function fk(){},
aZ:function aZ(){this.b=this.a=null},
eC:function eC(){},
fG:function fG(){},
bd:function bd(){this.a=null},
bB:function bB(){var _=this
_.e=_.d=_.c=_.b=_.a=null},
fe:function fe(a){this.a=a
this.b=null},
ff:function ff(a){this.a=a
this.b=null},
fg:function fg(a){this.a=a
this.b=null},
ai:function ai(){var _=this
_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
hc:function hc(a){this.a=a},
hb:function hb(a){this.a=a},
h2:function h2(a){this.a=a
this.c=this.b=null},
h3:function h3(a){var _=this
_.a=a
_.d=_.c=_.b=null},
h4:function h4(a,b){this.a=a
this.b=b},
h5:function h5(a,b){this.a=a
this.b=b},
h6:function h6(a){this.a=a
this.c=this.b=null},
h8:function h8(){},
h7:function h7(){},
h9:function h9(){},
f_:function f_(){},
ha:function ha(a){this.a=a
this.b=null}},T={c9:function c9(){},fr:function fr(){},fv:function fv(){var _=this
_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},fw:function fw(a){var _=this
_.a=a
_.e=_.d=_.c=_.b=null},fx:function fx(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},fy:function fy(a,b,c){this.a=a
this.b=b
this.c=c}},K={
kz:function(){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0
u={}
t=V.lJ("Test 037",!0)
s=W.iQ(null,null)
s.className="pageLargeCanvas"
s.id="testCanvas"
C.l.X(t.a,s)
r=[P.k]
t.dN(H.b(["A test of applying a height map to an image. ","Some shapes will take a bit to calculate depending on quality of mapping."],r))
t.iZ(H.b(["heightMaps","shapes","scalars"],r))
t.dN(H.b(["\xab[Back to Tests|../]"],r))
r=document
q=C.v.bM(r,"testCanvas")
if(q==null)H.p(P.u("Failed to find an element with the identifier, testCanvas."))
p=E.lL(q,!0,!0,!0,!1)
o=new O.d4()
o.sfA(O.iR(V.ae))
o.e.ba(o.ghb(),o.ghd())
t=new O.aH(o,"emission")
t.c=C.d
t.f=new V.W(0,0,0)
o.f=t
t=new O.aH(o,"ambient")
t.c=C.d
t.f=new V.W(0,0,0)
o.r=t
t=new O.aH(o,"diffuse")
t.c=C.d
t.f=new V.W(0,0,0)
o.x=t
t=new O.aH(o,"invDiffuse")
t.c=C.d
t.f=new V.W(0,0,0)
o.y=t
t=new O.eU(o,"specular")
t.c=C.d
t.f=new V.W(0,0,0)
t.ch=100
o.z=t
t=new O.eR(o,"bump")
t.c=C.d
o.Q=t
o.ch=null
t=new O.aH(o,"reflect")
t.c=C.d
t.f=new V.W(0,0,0)
o.cx=t
t=new O.eT(o,"refract")
t.c=C.d
t.f=new V.W(0,0,0)
t.ch=1
o.cy=t
t=new O.eQ(o,"alpha")
t.c=C.d
t.f=1
o.db=t
t=new D.d0()
t.bR(D.a_)
t.sfJ(H.b([],[D.b9]))
t.shY(H.b([],[D.de]))
t.sik(H.b([],[D.dk]))
t.siy(H.b([],[D.dt]))
t.siz(H.b([],[D.du]))
t.siA(H.b([],[D.dv]))
t.Q=null
t.ch=null
t.d2(t.gh9(),t.ghM(),t.ghQ())
o.dx=t
n=t.Q
if(n==null){n=D.K()
t.Q=n
t=n}else t=n
t.h(0,o.gi7())
t=o.dx
n=t.ch
if(n==null){n=D.K()
t.ch=n
t=n}else t=n
t.h(0,o.ghh())
o.dy=null
t=o.dx
m=V.k4()
n=U.jw(V.jF(V.jL(),m,new V.A(1,1,-3)))
l=new V.W(1,1,1)
k=new D.b9()
k.c=new V.W(1,1,1)
k.a=V.k5()
j=k.b
k.b=n
n.gB().h(0,k.gfg())
n=new D.H("mover",j,k.b,k,[U.a2])
n.b=!0
k.ar(n)
if(!k.c.u(0,l)){j=k.c
k.c=l
n=new D.H("color",j,l,k,[V.W])
n.b=!0
k.ar(n)}t.h(0,k)
t=o.r
t.sao(0,new V.W(0,0,1))
t=o.x
t.sao(0,new V.W(0,1,0))
t=o.z
t.sao(0,new V.W(1,0,0))
t=o.z
if(t.c===C.d){t.c=C.j
t.bQ()
t.cc(100)
n=t.a
n.a=null
n.aa(null)}t.cc(10)
i=E.jy(null,!0,null,"",null,null)
i.seI(o)
h=E.jy(null,!0,null,"",null,null)
h.y.h(0,i)
t=new U.bX()
t.bR(U.a2)
t.ba(t.gh7(),t.ghO())
t.e=null
t.f=V.d7()
t.r=0
n=p.r
k=new U.dF()
g=U.iS()
g.sd_(0,!0)
g.scN(6.283185307179586)
g.scP(0)
g.sZ(0,0)
g.scO(100)
g.sT(0)
g.scw(0.5)
k.b=g
f=k.gaA()
g.gB().h(0,f)
g=U.iS()
g.sd_(0,!0)
g.scN(6.283185307179586)
g.scP(0)
g.sZ(0,0)
g.scO(100)
g.sT(0)
g.scw(0.5)
k.c=g
g.gB().h(0,f)
k.d=null
k.e=!1
k.f=!1
k.r=!1
k.x=2.5
k.y=2.5
k.z=2
k.Q=4
k.cx=!1
k.ch=!1
k.cy=0
k.db=0
k.dx=null
k.dy=0
k.fr=null
k.fx=null
e=new X.am(!1,!1,!1)
j=k.d
k.d=e
g=[X.am]
f=new D.H("modifiers",j,e,k,g)
f.b=!0
k.O(f)
f=k.f
if(f!==!1){k.f=!1
f=new D.H("invertX",f,!1,k,[P.a4])
f.b=!0
k.O(f)}f=k.r
if(f!==!1){k.r=!1
f=new D.H("invertY",f,!1,k,[P.a4])
f.b=!0
k.O(f)}k.aT(n)
t.h(0,k)
n=p.r
k=new U.dE()
f=U.iS()
f.sd_(0,!0)
f.scN(6.283185307179586)
f.scP(0)
f.sZ(0,0)
f.scO(100)
f.sT(0)
f.scw(0.2)
k.b=f
f.gB().h(0,k.gaA())
k.c=null
k.d=!1
k.e=2.5
k.f=2
k.r=4
k.y=!1
k.x=!1
k.z=0
k.Q=null
k.ch=0
k.cx=null
k.cy=null
e=new X.am(!0,!1,!1)
j=k.c
k.c=e
f=new D.H("modifiers",j,e,k,g)
f.b=!0
k.O(f)
k.aT(n)
t.h(0,k)
n=p.r
k=new U.dG()
k.c=0.01
k.d=0
k.e=0
e=new X.am(!1,!1,!1)
k.b=e
g=new D.H("modifiers",null,e,k,g)
g.b=!0
k.O(g)
k.aT(n)
t.h(0,k)
h.sb1(t)
t=new M.cP()
t.sfD(0,O.iR(E.ad))
t.d.ba(t.ghj(),t.ghl())
t.e=null
t.f=null
t.r=null
t.x=null
d=X.ld(!0,!0,!1,null,2000,null,0)
c=new X.dd()
c.c=1.0471975511965976
c.d=0.1
c.e=2000
c.sb1(null)
n=c.c
if(!(Math.abs(n-1.0471975511965976)<$.I().a)){c.c=1.0471975511965976
n=new D.H("fov",n,1.0471975511965976,c,[P.t])
n.b=!0
c.aD(n)}n=c.d
if(!(Math.abs(n-0.1)<$.I().a)){c.d=0.1
n=new D.H("near",n,0.1,c,[P.t])
n.b=!0
c.aD(n)}n=c.e
if(!(Math.abs(n-2000)<$.I().a)){c.e=2000
n=new D.H("far",n,2000,c,[P.t])
n.b=!0
c.aD(n)}n=t.a
if(n!==c){if(n!=null)n.gB().K(0,t.gaB())
j=t.a
t.a=c
c.gB().h(0,t.gaB())
n=new D.H("camera",j,t.a,t,[X.cL])
n.b=!0
t.aC(n)}n=t.b
if(n!==d){if(n!=null)n.gB().K(0,t.gaB())
j=t.b
t.b=d
d.gB().h(0,t.gaB())
n=new D.H("target",j,t.b,t,[X.dr])
n.b=!0
t.aC(n)}t.d.h(0,h)
t.a.sb1(U.jw(V.aI(1,0,0,0,0,1,0,0,0,0,1,5,0,0,0,1)))
n=p.d
if(n!==t){if(n!=null)n.gB().K(0,p.gd6())
p.d=t
t.gB().h(0,p.gd6())
p.d7()}u.a=null
u.b=""
u.c=1
b=new K.im(u,p,i)
t=new V.fs("heightMaps",!0,new K.io(u,b))
r=C.v.bM(r,"heightMaps")
t.c=r
if(r==null)H.p("Failed to find heightMaps for Texture2DGroup")
t.a0(0,"../resources/HeightMap1.png",!0)
t.h(0,"../resources/HeightMap2.png")
t.h(0,"../resources/HeightMap3.png")
t.h(0,"../resources/ScrewHeightMap.png")
a=new K.ip(u,b)
t=V.jO("shapes",!0)
t.a0(0,"Cuboid",new K.ix(a))
t.a0(0,"Cylinder",new K.iy(a))
t.a0(0,"LatLonSphere",new K.iz(a))
t.a0(0,"Sphere",new K.iA(a))
t.a0(0,"Toroid",new K.iB(a))
t.a0(0,"Grid Small",new K.iC(a))
t.ci(0,"Grid Medium",new K.iD(a),!0)
t.a0(0,"Grid Large",new K.iE(a))
a0=new K.iq(u,b)
u=V.jO("scalars",!0)
u.a0(0,"0.1",new K.ir(a0))
u.a0(0,"0.2",new K.is(a0))
u.a0(0,"0.4",new K.it(a0))
u.ci(0,"0.6",new K.iu(a0),!0)
u.a0(0,"0.8",new K.iv(a0))
u.a0(0,"1.0",new K.iw(a0))
V.mU(p)},
im:function im(a,b,c){this.a=a
this.b=b
this.c=c},
il:function il(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
io:function io(a,b){this.a=a
this.b=b},
ip:function ip(a,b){this.a=a
this.b=b},
ix:function ix(a){this.a=a},
iy:function iy(a){this.a=a},
iz:function iz(a){this.a=a},
iA:function iA(a){this.a=a},
iB:function iB(a){this.a=a},
iC:function iC(a){this.a=a},
iD:function iD(a){this.a=a},
iE:function iE(a){this.a=a},
iq:function iq(a,b){this.a=a
this.b=b},
ir:function ir(a){this.a=a},
is:function is(a){this.a=a},
it:function it(a){this.a=a},
iu:function iu(a){this.a=a},
iv:function iv(a){this.a=a},
iw:function iw(a){this.a=a}}
var w=[C,H,J,P,W,O,E,Z,D,X,V,U,M,A,F,T,K]
hunkHelpers.setFunctionNamesIfNecessary(w)
var $={}
H.iW.prototype={}
J.a5.prototype={
u:function(a,b){return a===b},
gI:function(a){return H.c5(a)},
i:function(a){return"Instance of '"+H.by(a)+"'"}}
J.ey.prototype={
i:function(a){return String(a)},
gI:function(a){return a?519018:218159},
$ia4:1}
J.cX.prototype={
u:function(a,b){return null==b},
i:function(a){return"null"},
gI:function(a){return 0},
$iy:1}
J.cY.prototype={
gI:function(a){return 0},
i:function(a){return String(a)}}
J.f2.prototype={}
J.bg.prototype={}
J.aX.prototype={
i:function(a){var u=a[$.kG()]
if(u==null)return this.f4(a)
return"JavaScript function for "+H.i(J.al(u))},
$S:function(){return{func:1,opt:[,,,,,,,,,,,,,,,,]}},
$iiT:1}
J.av.prototype={
h:function(a,b){H.w(b,H.r(a,0))
if(!!a.fixed$length)H.p(P.U("add"))
a.push(b)},
k9:function(a,b){var u
if(!!a.fixed$length)H.p(P.U("removeAt"))
u=a.length
if(b>=u)throw H.d(P.dh(b,null,null))
return a.splice(b,1)[0]},
K:function(a,b){var u
if(!!a.fixed$length)H.p(P.U("remove"))
for(u=0;u<a.length;++u)if(J.J(a[u],b)){a.splice(u,1)
return!0}return!1},
R:function(a,b){var u,t
H.j(b,{func:1,ret:-1,args:[H.r(a,0)]})
u=a.length
for(t=0;t<u;++t){b.$1(a[t])
if(a.length!==u)throw H.d(P.b8(a))}},
D:function(a,b){var u,t
u=new Array(a.length)
u.fixed$length=Array
for(t=0;t<a.length;++t)this.q(u,t,H.i(a[t]))
return u.join(b)},
jG:function(a){return this.D(a,"")},
jy:function(a,b,c,d){var u,t,s
H.w(b,d)
H.j(c,{func:1,ret:d,args:[d,H.r(a,0)]})
u=a.length
for(t=b,s=0;s<u;++s){t=c.$2(t,a[s])
if(a.length!==u)throw H.d(P.b8(a))}return t},
ac:function(a,b){if(b<0||b>=a.length)return H.c(a,b)
return a[b]},
f2:function(a,b,c){if(b<0||b>a.length)throw H.d(P.a3(b,0,a.length,"start",null))
if(c<b||c>a.length)throw H.d(P.a3(c,b,a.length,"end",null))
if(b===c)return H.b([],[H.r(a,0)])
return H.b(a.slice(b,c),[H.r(a,0)])},
gjx:function(a){if(a.length>0)return a[0]
throw H.d(H.jA())},
gax:function(a){var u=a.length
if(u>0)return a[u-1]
throw H.d(H.jA())},
f0:function(a,b,c,d,e){var u,t,s
u=H.r(a,0)
H.h(d,"$in",[u],"$an")
if(!!a.immutable$list)H.p(P.U("setRange"))
P.b4(b,c,a.length,null,null,null)
t=c-b
if(t===0)return
H.h(d,"$ia",[u],"$aa")
u=J.bK(d)
if(e+t>u.gl(d))throw H.d(H.lg())
if(e<b)for(s=t-1;s>=0;--s)a[b+s]=u.j(d,e+s)
else for(s=0;s<t;++s)a[b+s]=u.j(d,e+s)},
bb:function(a,b,c,d){return this.f0(a,b,c,d,0)},
aU:function(a,b){var u
for(u=0;u<a.length;++u)if(J.J(a[u],b))return!0
return!1},
i:function(a){return P.iU(a,"[","]")},
gU:function(a){return new J.aj(a,a.length,0,[H.r(a,0)])},
gI:function(a){return H.c5(a)},
gl:function(a){return a.length},
sl:function(a,b){if(!!a.fixed$length)H.p(P.U("set length"))
if(b<0)throw H.d(P.a3(b,0,null,"newLength",null))
a.length=b},
j:function(a,b){if(b>=a.length||b<0)throw H.d(H.bI(a,b))
return a[b]},
q:function(a,b,c){H.w(c,H.r(a,0))
if(!!a.immutable$list)H.p(P.U("indexed set"))
if(b>=a.length||b<0)throw H.d(H.bI(a,b))
a[b]=c},
m:function(a,b){var u,t
u=[H.r(a,0)]
H.h(b,"$ia",u,"$aa")
t=C.f.m(a.length,b.gl(b))
u=H.b([],u)
this.sl(u,t)
this.bb(u,0,a.length,a)
this.bb(u,a.length,t,b)
return u},
$in:1,
$ia:1}
J.iV.prototype={}
J.aj.prototype={
gJ:function(){return this.d},
E:function(){var u,t,s
u=this.a
t=u.length
if(this.b!==t)throw H.d(H.z(u))
s=this.c
if(s>=t){this.sdn(null)
return!1}this.sdn(u[s]);++this.c
return!0},
sdn:function(a){this.d=H.w(a,H.r(this,0))},
$iaF:1}
J.bc.prototype={
km:function(a){var u
if(a>=-2147483648&&a<=2147483647)return a|0
if(isFinite(a)){u=a<0?Math.ceil(a):Math.floor(a)
return u+0}throw H.d(P.U(""+a+".toInt()"))},
aY:function(a){var u,t
if(a>=0){if(a<=2147483647)return a|0}else if(a>=-2147483648){u=a|0
return a===u?u:u-1}t=Math.floor(a)
if(isFinite(t))return t
throw H.d(P.U(""+a+".floor()"))},
aj:function(a){if(a>0){if(a!==1/0)return Math.round(a)}else if(a>-1/0)return 0-Math.round(0-a)
throw H.d(P.U(""+a+".round()"))},
eK:function(a,b){var u,t
if(b>20)throw H.d(P.a3(b,0,20,"fractionDigits",null))
u=a.toFixed(b)
if(a===0)t=1/a<0
else t=!1
if(t)return"-"+u
return u},
b7:function(a,b){var u,t,s,r
if(b<2||b>36)throw H.d(P.a3(b,2,36,"radix",null))
u=a.toString(b)
if(C.c.Y(u,u.length-1)!==41)return u
t=/^([\da-z]+)(?:\.([\da-z]+))?\(e\+(\d+)\)$/.exec(u)
if(t==null)H.p(P.U("Unexpected toString result: "+u))
s=t.length
if(1>=s)return H.c(t,1)
u=t[1]
if(3>=s)return H.c(t,3)
r=+t[3]
s=t[2]
if(s!=null){u+=s
r-=s.length}return u+C.c.k("0",r)},
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
m:function(a,b){if(typeof b!=="number")throw H.d(H.a9(b))
return a+b},
n:function(a,b){if(typeof b!=="number")throw H.d(H.a9(b))
return a-b},
k:function(a,b){if(typeof b!=="number")throw H.d(H.a9(b))
return a*b},
ak:function(a,b){var u
if(typeof b!=="number")throw H.d(H.a9(b))
u=a%b
if(u===0)return 0
if(u>0)return u
if(b<0)return u-b
else return u+b},
f7:function(a,b){if((a|0)===a)if(b>=1||b<-1)return a/b|0
return this.dK(a,b)},
a2:function(a,b){return(a|0)===a?a/b|0:this.dK(a,b)},
dK:function(a,b){var u=a/b
if(u>=-2147483648&&u<=2147483647)return u|0
if(u>0){if(u!==1/0)return Math.floor(u)}else if(u>-1/0)return Math.ceil(u)
throw H.d(P.U("Result of truncating division is "+H.i(u)+": "+H.i(a)+" ~/ "+b))},
aH:function(a,b){var u
if(a>0)u=this.dJ(a,b)
else{u=b>31?31:b
u=a>>u>>>0}return u},
ij:function(a,b){if(b<0)throw H.d(H.a9(b))
return this.dJ(a,b)},
dJ:function(a,b){return b>31?0:a>>>b},
$it:1,
$iaa:1}
J.cW.prototype={$im:1}
J.cV.prototype={}
J.aW.prototype={
Y:function(a,b){if(b<0)throw H.d(H.bI(a,b))
if(b>=a.length)H.p(H.bI(a,b))
return a.charCodeAt(b)},
G:function(a,b){if(b>=a.length)throw H.d(H.bI(a,b))
return a.charCodeAt(b)},
m:function(a,b){if(typeof b!=="string")throw H.d(P.iO(b,null,null))
return a+b},
aM:function(a,b,c,d){var u,t
if(typeof b!=="number"||Math.floor(b)!==b)H.p(H.a9(b))
c=P.b4(b,c,a.length,null,null,null)
u=a.substring(0,b)
t=a.substring(c)
return u+d+t},
a9:function(a,b,c){var u
if(typeof c!=="number"||Math.floor(c)!==c)H.p(H.a9(c))
if(typeof c!=="number")return c.V()
if(c<0||c>a.length)throw H.d(P.a3(c,0,a.length,null,null))
u=c+b.length
if(u>a.length)return!1
return b===a.substring(c,u)},
a8:function(a,b){return this.a9(a,b,0)},
t:function(a,b,c){if(typeof b!=="number"||Math.floor(b)!==b)H.p(H.a9(b))
if(c==null)c=a.length
if(typeof b!=="number")return b.V()
if(b<0)throw H.d(P.dh(b,null,null))
if(b>c)throw H.d(P.dh(b,null,null))
if(c>a.length)throw H.d(P.dh(c,null,null))
return a.substring(b,c)},
ay:function(a,b){return this.t(a,b,null)},
k:function(a,b){var u,t
if(0>=b)return""
if(b===1||a.length===0)return a
if(b!==b>>>0)throw H.d(C.M)
for(u=a,t="";!0;){if((b&1)===1)t=u+t
b=b>>>1
if(b===0)break
u+=u}return t},
jW:function(a,b,c){var u=b-a.length
if(u<=0)return a
return this.k(c,u)+a},
ae:function(a,b){return this.jW(a,b," ")},
ep:function(a,b,c){var u
if(c<0||c>a.length)throw H.d(P.a3(c,0,a.length,null,null))
u=a.indexOf(b,c)
return u},
eo:function(a,b){return this.ep(a,b,0)},
i:function(a){return a},
gI:function(a){var u,t,s
for(u=a.length,t=0,s=0;s<u;++s){t=536870911&t+a.charCodeAt(s)
t=536870911&t+((524287&t)<<10)
t^=t>>6}t=536870911&t+((67108863&t)<<3)
t^=t>>11
return 536870911&t+((16383&t)<<15)},
gl:function(a){return a.length},
$ijI:1,
$ik:1}
H.Z.prototype={
gl:function(a){return this.a.length},
j:function(a,b){return C.c.Y(this.a,b)},
$acj:function(){return[P.m]},
$aQ:function(){return[P.m]},
$an:function(){return[P.m]},
$aa:function(){return[P.m]}}
H.ek.prototype={}
H.d1.prototype={
gJ:function(){return this.d},
E:function(){var u,t,s,r
u=this.a
t=J.bK(u)
s=t.gl(u)
if(this.b!==s)throw H.d(P.b8(u))
r=this.c
if(r>=s){this.saO(null)
return!1}this.saO(t.ac(u,r));++this.c
return!0},
saO:function(a){this.d=H.w(a,H.r(this,0))},
$iaF:1}
H.eN.prototype={
gU:function(a){return new H.eO(J.cD(this.a),this.b,this.$ti)},
gl:function(a){return J.aT(this.a)},
ac:function(a,b){return this.b.$1(J.iN(this.a,b))},
$an:function(a,b){return[b]}}
H.eO.prototype={
E:function(){var u=this.b
if(u.E()){this.saO(this.c.$1(u.gJ()))
return!0}this.saO(null)
return!1},
gJ:function(){return this.a},
saO:function(a){this.a=H.w(a,H.r(this,1))},
$aaF:function(a,b){return[b]}}
H.hf.prototype={
gU:function(a){return new H.hg(J.cD(this.a),this.b,this.$ti)}}
H.hg.prototype={
E:function(){var u,t
for(u=this.a,t=this.b;u.E();)if(t.$1(u.gJ()))return!0
return!1},
gJ:function(){return this.a.gJ()}}
H.br.prototype={}
H.cj.prototype={
q:function(a,b,c){H.w(c,H.as(this,"cj",0))
throw H.d(P.U("Cannot modify an unmodifiable list"))}}
H.dB.prototype={}
H.ed.prototype={
i:function(a){return P.iY(this)},
q:function(a,b,c){H.w(b,H.r(this,0))
H.w(c,H.r(this,1))
return H.l8()},
$iD:1}
H.ee.prototype={
gl:function(a){return this.a},
bj:function(a){if("__proto__"===a)return!1
return this.b.hasOwnProperty(a)},
j:function(a,b){if(!this.bj(b))return
return this.dq(b)},
dq:function(a){return this.b[H.O(a)]},
R:function(a,b){var u,t,s,r,q
u=H.r(this,1)
H.j(b,{func:1,ret:-1,args:[H.r(this,0),u]})
t=this.c
for(s=t.length,r=0;r<s;++r){q=t[r]
b.$2(q,H.w(this.dq(q),u))}}}
H.f6.prototype={}
H.fD.prototype={
ad:function(a){var u,t,s
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
H.f0.prototype={
i:function(a){var u=this.b
if(u==null)return"NoSuchMethodError: "+H.i(this.a)
return"NoSuchMethodError: method not found: '"+u+"' on null"}}
H.eA.prototype={
i:function(a){var u,t
u=this.b
if(u==null)return"NoSuchMethodError: "+H.i(this.a)
t=this.c
if(t==null)return"NoSuchMethodError: method not found: '"+u+"' ("+H.i(this.a)+")"
return"NoSuchMethodError: method not found: '"+u+"' on '"+t+"' ("+H.i(this.a)+")"}}
H.fR.prototype={
i:function(a){var u=this.a
return u.length===0?"Error":"Error: "+u}}
H.iL.prototype={
$1:function(a){if(!!J.N(a).$iba)if(a.$thrownJsError==null)a.$thrownJsError=this.a
return a},
$S:22}
H.dR.prototype={
i:function(a){var u,t
u=this.b
if(u!=null)return u
u=this.a
t=u!==null&&typeof u==="object"?u.stack:null
u=t==null?"":t
this.b=u
return u},
$iak:1}
H.bS.prototype={
i:function(a){return"Closure '"+H.by(this).trim()+"'"},
$iiT:1,
gkz:function(){return this},
$C:"$1",
$R:1,
$D:null}
H.fq.prototype={}
H.fl.prototype={
i:function(a){var u=this.$static_name
if(u==null)return"Closure of unknown static method"
return"Closure '"+H.bO(u)+"'"}}
H.bQ.prototype={
u:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof H.bQ))return!1
return this.a===b.a&&this.b===b.b&&this.c===b.c},
gI:function(a){var u,t
u=this.c
if(u==null)t=H.c5(this.a)
else t=typeof u!=="object"?J.cC(u):H.c5(u)
return(t^H.c5(this.b))>>>0},
i:function(a){var u=this.c
if(u==null)u=this.a
return"Closure '"+H.i(this.d)+"' of "+("Instance of '"+H.by(u)+"'")}}
H.fF.prototype={
i:function(a){return this.a}}
H.e9.prototype={
i:function(a){return this.a}}
H.fb.prototype={
i:function(a){return"RuntimeError: "+H.i(this.a)}}
H.aw.prototype={
gl:function(a){return this.a},
gcK:function(){return new H.eE(this,[H.r(this,0)])},
bj:function(a){var u,t
if(typeof a==="string"){u=this.b
if(u==null)return!1
return this.dk(u,a)}else if(typeof a==="number"&&(a&0x3ffffff)===a){t=this.c
if(t==null)return!1
return this.dk(t,a)}else return this.jD(a)},
jD:function(a){var u=this.d
if(u==null)return!1
return this.cJ(this.bX(u,this.cI(a)),a)>=0},
j:function(a,b){var u,t,s,r
if(typeof b==="string"){u=this.b
if(u==null)return
t=this.bc(u,b)
s=t==null?null:t.b
return s}else if(typeof b==="number"&&(b&0x3ffffff)===b){r=this.c
if(r==null)return
t=this.bc(r,b)
s=t==null?null:t.b
return s}else return this.jE(b)},
jE:function(a){var u,t,s
u=this.d
if(u==null)return
t=this.bX(u,this.cI(a))
s=this.cJ(t,a)
if(s<0)return
return t[s].b},
q:function(a,b,c){var u,t
H.w(b,H.r(this,0))
H.w(c,H.r(this,1))
if(typeof b==="string"){u=this.b
if(u==null){u=this.c5()
this.b=u}this.dc(u,b,c)}else if(typeof b==="number"&&(b&0x3ffffff)===b){t=this.c
if(t==null){t=this.c5()
this.c=t}this.dc(t,b,c)}else this.jF(b,c)},
jF:function(a,b){var u,t,s,r
H.w(a,H.r(this,0))
H.w(b,H.r(this,1))
u=this.d
if(u==null){u=this.c5()
this.d=u}t=this.cI(a)
s=this.bX(u,t)
if(s==null)this.cd(u,t,[this.c6(a,b)])
else{r=this.cJ(s,a)
if(r>=0)s[r].b=b
else s.push(this.c6(a,b))}},
R:function(a,b){var u,t
H.j(b,{func:1,ret:-1,args:[H.r(this,0),H.r(this,1)]})
u=this.e
t=this.r
for(;u!=null;){b.$2(u.a,u.b)
if(t!==this.r)throw H.d(P.b8(this))
u=u.c}},
dc:function(a,b,c){var u
H.w(b,H.r(this,0))
H.w(c,H.r(this,1))
u=this.bc(a,b)
if(u==null)this.cd(a,b,this.c6(b,c))
else u.b=c},
c6:function(a,b){var u,t
u=new H.eD(H.w(a,H.r(this,0)),H.w(b,H.r(this,1)))
if(this.e==null){this.f=u
this.e=u}else{t=this.f
u.d=t
t.c=u
this.f=u}++this.a
this.r=this.r+1&67108863
return u},
cI:function(a){return J.cC(a)&0x3ffffff},
cJ:function(a,b){var u,t
if(a==null)return-1
u=a.length
for(t=0;t<u;++t)if(J.J(a[t].a,b))return t
return-1},
i:function(a){return P.iY(this)},
bc:function(a,b){return a[b]},
bX:function(a,b){return a[b]},
cd:function(a,b,c){a[b]=c},
fI:function(a,b){delete a[b]},
dk:function(a,b){return this.bc(a,b)!=null},
c5:function(){var u=Object.create(null)
this.cd(u,"<non-identifier-key>",u)
this.fI(u,"<non-identifier-key>")
return u},
$ijC:1}
H.eD.prototype={}
H.eE.prototype={
gl:function(a){return this.a.a},
gU:function(a){var u,t
u=this.a
t=new H.eF(u,u.r,this.$ti)
t.c=u.e
return t}}
H.eF.prototype={
gJ:function(){return this.d},
E:function(){var u=this.a
if(this.b!==u.r)throw H.d(P.b8(u))
else{u=this.c
if(u==null){this.sda(null)
return!1}else{this.sda(u.a)
this.c=this.c.c
return!0}}},
sda:function(a){this.d=H.w(a,H.r(this,0))},
$iaF:1}
H.ig.prototype={
$1:function(a){return this.a(a)},
$S:22}
H.ih.prototype={
$2:function(a,b){return this.a(a,b)},
$S:39}
H.ii.prototype={
$1:function(a){return this.a(H.O(a))},
$S:40}
H.ez.prototype={
i:function(a){return"RegExp/"+this.a+"/"},
$ijI:1,
$ilF:1}
H.bw.prototype={$ibw:1,$ilN:1}
H.d8.prototype={
gl:function(a){return a.length},
$iaY:1,
$aaY:function(){}}
H.d9.prototype={
j:function(a,b){H.b5(b,a,a.length)
return a[b]},
q:function(a,b,c){H.mA(c)
H.b5(b,a,a.length)
a[b]=c},
$abr:function(){return[P.t]},
$aQ:function(){return[P.t]},
$in:1,
$an:function(){return[P.t]},
$ia:1,
$aa:function(){return[P.t]}}
H.da.prototype={
q:function(a,b,c){H.a7(c)
H.b5(b,a,a.length)
a[b]=c},
$abr:function(){return[P.m]},
$aQ:function(){return[P.m]},
$in:1,
$an:function(){return[P.m]},
$ia:1,
$aa:function(){return[P.m]}}
H.eW.prototype={
j:function(a,b){H.b5(b,a,a.length)
return a[b]}}
H.eX.prototype={
j:function(a,b){H.b5(b,a,a.length)
return a[b]}}
H.eY.prototype={
j:function(a,b){H.b5(b,a,a.length)
return a[b]}}
H.eZ.prototype={
j:function(a,b){H.b5(b,a,a.length)
return a[b]}}
H.db.prototype={
gl:function(a){return a.length},
j:function(a,b){H.b5(b,a,a.length)
return a[b]},
$inj:1}
H.c2.prototype={
gl:function(a){return a.length},
j:function(a,b){H.b5(b,a,a.length)
return a[b]},
$ic2:1,
$iG:1}
H.co.prototype={}
H.cp.prototype={}
H.cq.prototype={}
H.cr.prototype={}
P.hi.prototype={
$1:function(a){var u,t
u=this.a
t=u.a
u.a=null
t.$0()},
$S:15}
P.hh.prototype={
$1:function(a){var u,t
this.a.a=H.j(a,{func:1,ret:-1})
u=this.b
t=this.c
u.firstChild?u.removeChild(t):u.appendChild(t)},
$S:31}
P.hj.prototype={
$0:function(){this.a.$0()},
$S:0}
P.hk.prototype={
$0:function(){this.a.$0()},
$S:0}
P.dT.prototype={
fp:function(a,b){if(self.setTimeout!=null)this.b=self.setTimeout(H.bH(new P.hO(this,b),0),a)
else throw H.d(P.U("`setTimeout()` not found."))},
fq:function(a,b){if(self.setTimeout!=null)this.b=self.setInterval(H.bH(new P.hN(this,a,Date.now(),b),0),a)
else throw H.d(P.U("Periodic timer."))},
$iaK:1}
P.hO.prototype={
$0:function(){var u=this.a
u.b=null
u.c=1
this.b.$0()},
$S:3}
P.hN.prototype={
$0:function(){var u,t,s,r
u=this.a
t=u.c+1
s=this.b
if(s>0){r=Date.now()-this.c
if(r>(t+1)*s)t=C.f.f7(r,s)}u.c=t
this.d.$1(u)},
$S:0}
P.aN.prototype={
jL:function(a){if(this.c!==6)return!0
return this.b.b.cX(H.j(this.d,{func:1,ret:P.a4,args:[P.F]}),a.a,P.a4,P.F)},
jC:function(a){var u,t,s,r
u=this.e
t=P.F
s={futureOr:1,type:H.r(this,1)}
r=this.b.b
if(H.dY(u,{func:1,args:[P.F,P.ak]}))return H.je(r.kg(u,a.a,a.b,null,t,P.ak),s)
else return H.je(r.cX(H.j(u,{func:1,args:[P.F]}),a.a,null,t),s)}}
P.aq.prototype={
eJ:function(a,b,c){var u,t,s,r
u=H.r(this,0)
H.j(a,{func:1,ret:{futureOr:1,type:c},args:[u]})
t=$.R
if(t!==C.k){t.toString
H.j(a,{func:1,ret:{futureOr:1,type:c},args:[u]})
if(b!=null)b=P.mk(b,t)}H.j(a,{func:1,ret:{futureOr:1,type:c},args:[u]})
s=new P.aq(0,$.R,[c])
r=b==null?1:3
this.dd(new P.aN(s,r,a,b,[u,c]))
return s},
kl:function(a,b){return this.eJ(a,null,b)},
dd:function(a){var u,t
u=this.a
if(u<=1){a.a=H.e(this.c,"$iaN")
this.c=a}else{if(u===2){t=H.e(this.c,"$iaq")
u=t.a
if(u<4){t.dd(a)
return}this.a=u
this.c=t.c}u=this.b
u.toString
P.i6(null,null,u,H.j(new P.hr(this,a),{func:1,ret:-1}))}},
dE:function(a){var u,t,s,r,q,p
u={}
u.a=a
if(a==null)return
t=this.a
if(t<=1){s=H.e(this.c,"$iaN")
this.c=a
if(s!=null){for(r=a;q=r.a,q!=null;r=q);r.a=s}}else{if(t===2){p=H.e(this.c,"$iaq")
t=p.a
if(t<4){p.dE(a)
return}this.a=t
this.c=p.c}u.a=this.be(a)
t=this.b
t.toString
P.i6(null,null,t,H.j(new P.hv(u,this),{func:1,ret:-1}))}},
c9:function(){var u=H.e(this.c,"$iaN")
this.c=null
return this.be(u)},
be:function(a){var u,t,s
for(u=a,t=null;u!=null;t=u,u=s){s=u.a
u.a=t}return t},
dg:function(a){var u,t,s
u=H.r(this,0)
H.je(a,{futureOr:1,type:u})
t=this.$ti
if(H.cx(a,"$ibW",t,"$abW"))if(H.cx(a,"$iaq",t,null))P.k6(a,this)
else P.lZ(a,this)
else{s=this.c9()
H.w(a,u)
this.a=4
this.c=a
P.cm(this,s)}},
dh:function(a,b){var u
H.e(b,"$iak")
u=this.c9()
this.a=8
this.c=new P.ab(a,b)
P.cm(this,u)},
$ibW:1}
P.hr.prototype={
$0:function(){P.cm(this.a,this.b)},
$S:0}
P.hv.prototype={
$0:function(){P.cm(this.b,this.a.a)},
$S:0}
P.hs.prototype={
$1:function(a){var u=this.a
u.a=0
u.dg(a)},
$S:15}
P.ht.prototype={
$2:function(a,b){H.e(b,"$iak")
this.a.dh(a,b)},
$1:function(a){return this.$2(a,null)},
$S:45}
P.hu.prototype={
$0:function(){this.a.dh(this.b,this.c)},
$S:0}
P.hy.prototype={
$0:function(){var u,t,s,r,q,p,o
u=null
try{r=this.c
u=r.b.b.eH(H.j(r.d,{func:1}),null)}catch(q){t=H.at(q)
s=H.bM(q)
if(this.d){r=H.e(this.a.a.c,"$iab").a
p=t
p=r==null?p==null:r===p
r=p}else r=!1
p=this.b
if(r)p.b=H.e(this.a.a.c,"$iab")
else p.b=new P.ab(t,s)
p.a=!0
return}if(!!J.N(u).$ibW){if(u instanceof P.aq&&u.a>=4){if(u.a===8){r=this.b
r.b=H.e(u.c,"$iab")
r.a=!0}return}o=this.a.a
r=this.b
r.b=u.kl(new P.hz(o),null)
r.a=!1}},
$S:3}
P.hz.prototype={
$1:function(a){return this.a},
$S:51}
P.hx.prototype={
$0:function(){var u,t,s,r,q,p,o
try{s=this.b
r=H.r(s,0)
q=H.w(this.c,r)
p=H.r(s,1)
this.a.b=s.b.b.cX(H.j(s.d,{func:1,ret:{futureOr:1,type:p},args:[r]}),q,{futureOr:1,type:p},r)}catch(o){u=H.at(o)
t=H.bM(o)
s=this.a
s.b=new P.ab(u,t)
s.a=!0}},
$S:3}
P.hw.prototype={
$0:function(){var u,t,s,r,q,p,o,n
try{u=H.e(this.a.a.c,"$iab")
r=this.c
if(r.jL(u)&&r.e!=null){q=this.b
q.b=r.jC(u)
q.a=!1}}catch(p){t=H.at(p)
s=H.bM(p)
r=H.e(this.a.a.c,"$iab")
q=r.a
o=t
n=this.b
if(q==null?o==null:q===o)n.b=r
else n.b=new P.ab(t,s)
n.a=!0}},
$S:3}
P.dI.prototype={}
P.fm.prototype={
gl:function(a){var u,t,s,r
u={}
t=new P.aq(0,$.R,[P.m])
u.a=0
s=H.r(this,0)
r=H.j(new P.fo(u,this),{func:1,ret:-1,args:[s]})
H.j(new P.fp(u,t),{func:1,ret:-1})
W.a0(this.a,this.b,r,!1,s)
return t}}
P.fo.prototype={
$1:function(a){H.w(a,H.r(this.b,0));++this.a.a},
$S:function(){return{func:1,ret:P.y,args:[H.r(this.b,0)]}}}
P.fp.prototype={
$0:function(){this.b.dg(this.a.a)},
$S:0}
P.c8.prototype={}
P.fn.prototype={}
P.aK.prototype={}
P.ab.prototype={
i:function(a){return H.i(this.a)},
$iba:1}
P.hY.prototype={$inx:1}
P.i5.prototype={
$0:function(){var u,t,s
u=this.a
t=u.a
if(t==null){s=new P.dc()
u.a=s
u=s}else u=t
t=this.b
if(t==null)throw H.d(u)
s=H.d(u)
s.stack=t.i(0)
throw s},
$S:0}
P.hF.prototype={
kh:function(a){var u,t,s
H.j(a,{func:1,ret:-1})
try{if(C.k===$.R){a.$0()
return}P.ki(null,null,this,a,-1)}catch(s){u=H.at(s)
t=H.bM(s)
P.i4(null,null,this,u,H.e(t,"$iak"))}},
ki:function(a,b,c){var u,t,s
H.j(a,{func:1,ret:-1,args:[c]})
H.w(b,c)
try{if(C.k===$.R){a.$1(b)
return}P.kj(null,null,this,a,b,-1,c)}catch(s){u=H.at(s)
t=H.bM(s)
P.i4(null,null,this,u,H.e(t,"$iak"))}},
j4:function(a,b){return new P.hH(this,H.j(a,{func:1,ret:b}),b)},
cn:function(a){return new P.hG(this,H.j(a,{func:1,ret:-1}))},
dP:function(a,b){return new P.hI(this,H.j(a,{func:1,ret:-1,args:[b]}),b)},
eH:function(a,b){H.j(a,{func:1,ret:b})
if($.R===C.k)return a.$0()
return P.ki(null,null,this,a,b)},
cX:function(a,b,c,d){H.j(a,{func:1,ret:c,args:[d]})
H.w(b,d)
if($.R===C.k)return a.$1(b)
return P.kj(null,null,this,a,b,c,d)},
kg:function(a,b,c,d,e,f){H.j(a,{func:1,ret:d,args:[e,f]})
H.w(b,e)
H.w(c,f)
if($.R===C.k)return a.$2(b,c)
return P.ml(null,null,this,a,b,c,d,e,f)}}
P.hH.prototype={
$0:function(){return this.a.eH(this.b,this.c)},
$S:function(){return{func:1,ret:this.c}}}
P.hG.prototype={
$0:function(){return this.a.kh(this.b)},
$S:3}
P.hI.prototype={
$1:function(a){var u=this.c
return this.a.ki(this.b,H.w(a,u),u)},
$S:function(){return{func:1,ret:-1,args:[this.c]}}}
P.hC.prototype={
gU:function(a){return P.k8(this,this.r,H.r(this,0))},
gl:function(a){return this.a},
h:function(a,b){var u
H.w(b,H.r(this,0))
if(typeof b==="number"&&(b&1073741823)===b){u=this.c
if(u==null){u=P.k9()
this.c=u}return this.fE(u,b)}else return this.ft(b)},
ft:function(a){var u,t,s
H.w(a,H.r(this,0))
u=this.d
if(u==null){u=P.k9()
this.d=u}t=this.di(a)
s=u[t]
if(s==null)u[t]=[this.bT(a)]
else{if(this.dr(s,a)>=0)return!1
s.push(this.bT(a))}return!0},
K:function(a,b){if(typeof b==="number"&&(b&1073741823)===b)return this.i2(this.c,b)
else return this.i1(b)},
i1:function(a){var u,t,s
u=this.d
if(u==null)return!1
t=this.fS(u,a)
s=this.dr(t,a)
if(s<0)return!1
this.dL(t.splice(s,1)[0])
return!0},
fE:function(a,b){H.w(b,H.r(this,0))
if(H.e(a[b],"$icn")!=null)return!1
a[b]=this.bT(b)
return!0},
i2:function(a,b){var u
if(a==null)return!1
u=H.e(a[b],"$icn")
if(u==null)return!1
this.dL(u)
delete a[b]
return!0},
dw:function(){this.r=1073741823&this.r+1},
bT:function(a){var u,t
u=new P.cn(H.w(a,H.r(this,0)))
if(this.e==null){this.f=u
this.e=u}else{t=this.f
u.c=t
t.b=u
this.f=u}++this.a
this.dw()
return u},
dL:function(a){var u,t
u=a.c
t=a.b
if(u==null)this.e=t
else u.b=t
if(t==null)this.f=u
else t.c=u;--this.a
this.dw()},
di:function(a){return J.cC(a)&1073741823},
fS:function(a,b){return a[this.di(b)]},
dr:function(a,b){var u,t
if(a==null)return-1
u=a.length
for(t=0;t<u;++t)if(a[t].a==b)return t
return-1}}
P.cn.prototype={}
P.hD.prototype={
gJ:function(){return this.d},
E:function(){var u=this.a
if(this.b!==u.r)throw H.d(P.b8(u))
else{u=this.c
if(u==null){this.sdf(null)
return!1}else{this.sdf(H.w(u.a,H.r(this,0)))
this.c=this.c.b
return!0}}},
sdf:function(a){this.d=H.w(a,H.r(this,0))},
$iaF:1}
P.eG.prototype={
$2:function(a,b){this.a.q(0,H.w(a,this.b),H.w(b,this.c))},
$S:7}
P.eH.prototype={$in:1,$ia:1}
P.Q.prototype={
gU:function(a){return new H.d1(a,this.gl(a),0,[H.bL(this,a,"Q",0)])},
ac:function(a,b){return this.j(a,b)},
R:function(a,b){var u,t
H.j(b,{func:1,ret:-1,args:[H.bL(this,a,"Q",0)]})
u=this.gl(a)
for(t=0;t<u;++t){b.$1(this.j(a,t))
if(u!==this.gl(a))throw H.d(P.b8(a))}},
ko:function(a,b){var u,t
u=H.b([],[H.bL(this,a,"Q",0)])
C.a.sl(u,this.gl(a))
for(t=0;t<this.gl(a);++t)C.a.q(u,t,this.j(a,t))
return u},
kn:function(a){return this.ko(a,!0)},
m:function(a,b){var u,t
u=[H.bL(this,a,"Q",0)]
H.h(b,"$ia",u,"$aa")
t=H.b([],u)
C.a.sl(t,C.f.m(this.gl(a),b.gl(b)))
C.a.bb(t,0,this.gl(a),a)
C.a.bb(t,this.gl(a),t.length,b)
return t},
jv:function(a,b,c,d){var u
H.w(d,H.bL(this,a,"Q",0))
P.b4(b,c,this.gl(a),null,null,null)
for(u=b;u<c;++u)this.q(a,u,d)},
i:function(a){return P.iU(a,"[","]")}}
P.eJ.prototype={}
P.eK.prototype={
$2:function(a,b){var u,t
u=this.a
if(!u.a)this.b.a+=", "
u.a=!1
u=this.b
t=u.a+=H.i(a)
u.a=t+": "
u.a+=H.i(b)},
$S:7}
P.eL.prototype={
R:function(a,b){var u,t
H.j(b,{func:1,ret:-1,args:[H.r(this,0),H.r(this,1)]})
for(u=this.gcK(),u=u.gU(u);u.E();){t=u.gJ()
b.$2(t,this.j(0,t))}},
gl:function(a){var u=this.gcK()
return u.gl(u)},
i:function(a){return P.iY(this)},
$iD:1}
P.hP.prototype={
q:function(a,b,c){H.w(b,H.r(this,0))
H.w(c,H.r(this,1))
throw H.d(P.U("Cannot modify unmodifiable map"))}}
P.eM.prototype={
j:function(a,b){return this.a.j(0,b)},
q:function(a,b,c){this.a.q(0,H.w(b,H.r(this,0)),H.w(c,H.r(this,1)))},
R:function(a,b){this.a.R(0,H.j(b,{func:1,ret:-1,args:[H.r(this,0),H.r(this,1)]}))},
gl:function(a){var u=this.a
return u.gl(u)},
i:function(a){return J.al(this.a)},
$iD:1}
P.dC.prototype={}
P.hJ.prototype={
i:function(a){return P.iU(this,"{","}")},
ac:function(a,b){var u,t,s
if(b<0)H.p(P.a3(b,0,null,"index",null))
for(u=P.k8(this,this.r,H.r(this,0)),t=0;u.E();){s=u.d
if(b===t)return s;++t}throw H.d(P.bY(b,this,"index",null,t))},
$in:1,
$ijR:1}
P.dO.prototype={}
P.dX.prototype={}
P.e5.prototype={
jN:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
c=P.b4(b,c,a.length,null,null,null)
u=$.kT()
for(t=b,s=t,r=null,q=-1,p=-1,o=0;t<c;t=n){n=t+1
m=C.c.G(a,t)
if(m===37){l=n+2
if(l<=c){k=H.ie(C.c.G(a,n))
j=H.ie(C.c.G(a,n+1))
i=k*16+j-(j&256)
if(i===37)i=-1
n=l}else i=-1}else i=m
if(0<=i&&i<=127){if(i<0||i>=u.length)return H.c(u,i)
h=u[i]
if(h>=0){i=C.c.Y("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",h)
if(i===m)continue
m=i}else{if(h===-1){if(q<0){g=r==null?null:r.a.length
if(g==null)g=0
q=g+(t-s)
p=t}++o
if(m===61)continue}m=i}if(h!==-2){if(r==null)r=new P.af("")
g=r.a+=C.c.t(a,s,t)
r.a=g+H.df(m)
s=n
continue}}throw H.d(P.X("Invalid base64 data",a,t))}if(r!=null){g=r.a+=C.c.t(a,s,c)
f=g.length
if(q>=0)P.jr(a,p,c,q,o,f)
else{e=C.f.ak(f-1,4)+1
if(e===1)throw H.d(P.X("Invalid base64 encoding length ",a,c))
for(;e<4;){g+="="
r.a=g;++e}}g=r.a
return C.c.aM(a,b,c,g.charCodeAt(0)==0?g:g)}d=c-b
if(q>=0)P.jr(a,p,c,q,o,d)
else{e=C.f.ak(d,4)
if(e===1)throw H.d(P.X("Invalid base64 encoding length ",a,c))
if(e>1)a=C.c.aM(a,c,c,e===2?"==":"=")}return a},
$abm:function(){return[[P.a,P.m],P.k]}}
P.e6.prototype={
$abo:function(){return[[P.a,P.m],P.k]}}
P.bm.prototype={}
P.bo.prototype={}
P.el.prototype={
$abm:function(){return[P.k,[P.a,P.m]]}}
P.fZ.prototype={
gju:function(){return C.N}}
P.h0.prototype={
aV:function(a,b,c){var u,t,s
c=P.b4(b,c,a.length,null,null,null)
u=c-b
if(u===0)return new Uint8Array(0)
t=new Uint8Array(u*3)
s=new P.hX(t)
if(s.fR(a,b,c)!==c)s.dM(J.l0(a,c-1),0)
return new Uint8Array(t.subarray(0,H.mf(0,s.b,t.length)))},
cu:function(a){return this.aV(a,0,null)},
$abo:function(){return[P.k,[P.a,P.m]]}}
P.hX.prototype={
dM:function(a,b){var u,t,s,r,q
u=this.c
t=this.b
s=t+1
r=u.length
if((b&64512)===56320){q=65536+((a&1023)<<10)|b&1023
this.b=s
if(t>=r)return H.c(u,t)
u[t]=240|q>>>18
t=s+1
this.b=t
if(s>=r)return H.c(u,s)
u[s]=128|q>>>12&63
s=t+1
this.b=s
if(t>=r)return H.c(u,t)
u[t]=128|q>>>6&63
this.b=s+1
if(s>=r)return H.c(u,s)
u[s]=128|q&63
return!0}else{this.b=s
if(t>=r)return H.c(u,t)
u[t]=224|a>>>12
t=s+1
this.b=t
if(s>=r)return H.c(u,s)
u[s]=128|a>>>6&63
this.b=t+1
if(t>=r)return H.c(u,t)
u[t]=128|a&63
return!1}},
fR:function(a,b,c){var u,t,s,r,q,p,o
if(b!==c&&(C.c.Y(a,c-1)&64512)===55296)--c
for(u=this.c,t=u.length,s=b;s<c;++s){r=C.c.G(a,s)
if(r<=127){q=this.b
if(q>=t)break
this.b=q+1
u[q]=r}else if((r&64512)===55296){if(this.b+3>=t)break
p=s+1
if(this.dM(r,C.c.G(a,p)))s=p}else if(r<=2047){q=this.b
o=q+1
if(o>=t)break
this.b=o
if(q>=t)return H.c(u,q)
u[q]=192|r>>>6
this.b=o+1
u[o]=128|r&63}else{q=this.b
if(q+2>=t)break
o=q+1
this.b=o
if(q>=t)return H.c(u,q)
u[q]=224|r>>>12
q=o+1
this.b=q
if(o>=t)return H.c(u,o)
u[o]=128|r>>>6&63
this.b=q+1
if(q>=t)return H.c(u,q)
u[q]=128|r&63}}return s}}
P.h_.prototype={
aV:function(a,b,c){var u,t,s,r
H.h(a,"$ia",[P.m],"$aa")
u=P.lQ(!1,a,b,c)
if(u!=null)return u
c=P.b4(b,c,J.aT(a),null,null,null)
t=new P.af("")
s=new P.hV(!1,t)
s.aV(a,b,c)
if(s.e>0){H.p(P.X("Unfinished UTF-8 octet sequence",a,c))
t.a+=H.df(65533)
s.d=0
s.e=0
s.f=0}r=t.a
return r.charCodeAt(0)==0?r:r},
cu:function(a){return this.aV(a,0,null)},
$abo:function(){return[[P.a,P.m],P.k]}}
P.hV.prototype={
aV:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k,j,i
H.h(a,"$ia",[P.m],"$aa")
u=this.d
t=this.e
s=this.f
this.d=0
this.e=0
this.f=0
r=new P.hW(this,b,c,a)
$label0$0:for(q=J.bK(a),p=this.b,o=b;!0;o=j){$label1$1:if(t>0){do{if(o===c)break $label0$0
n=q.j(a,o)
if(typeof n!=="number")return n.bK()
if((n&192)!==128){m=P.X("Bad UTF-8 encoding 0x"+C.f.b7(n,16),a,o)
throw H.d(m)}else{u=(u<<6|n&63)>>>0;--t;++o}}while(t>0)
m=s-1
if(m<0||m>=4)return H.c(C.D,m)
if(u<=C.D[m]){m=P.X("Overlong encoding of 0x"+C.f.b7(u,16),a,o-s-1)
throw H.d(m)}if(u>1114111){m=P.X("Character outside valid Unicode range: 0x"+C.f.b7(u,16),a,o-s-1)
throw H.d(m)}if(!this.c||u!==65279)p.a+=H.df(u)
this.c=!1}for(m=o<c;m;){l=P.mm(a,o,c)
if(l>0){this.c=!1
k=o+l
r.$2(o,k)
if(k===c)break}else k=o
j=k+1
n=q.j(a,k)
if(typeof n!=="number")return n.V()
if(n<0){i=P.X("Negative UTF-8 code unit: -0x"+C.f.b7(-n,16),a,j-1)
throw H.d(i)}else{if((n&224)===192){u=n&31
t=1
s=1
continue $label0$0}if((n&240)===224){u=n&15
t=2
s=2
continue $label0$0}if((n&248)===240&&n<245){u=n&7
t=3
s=3
continue $label0$0}i=P.X("Bad UTF-8 encoding 0x"+C.f.b7(n,16),a,j-1)
throw H.d(i)}}break $label0$0}if(t>0){this.d=u
this.e=t
this.f=s}}}
P.hW.prototype={
$2:function(a,b){this.a.b.a+=P.dn(this.d,a,b)},
$S:44}
P.a4.prototype={}
P.ac.prototype={
u:function(a,b){if(b==null)return!1
return b instanceof P.ac&&this.a===b.a&&!0},
gI:function(a){var u=this.a
return(u^C.f.aH(u,30))&1073741823},
i:function(a){var u,t,s,r,q,p,o,n
u=P.l9(H.lA(this))
t=P.cN(H.ly(this))
s=P.cN(H.lu(this))
r=P.cN(H.lv(this))
q=P.cN(H.lx(this))
p=P.cN(H.lz(this))
o=P.la(H.lw(this))
n=u+"-"+t+"-"+s+" "+r+":"+q+":"+p+"."+o
return n}}
P.t.prototype={}
P.aE.prototype={
m:function(a,b){return new P.aE(C.f.m(this.a,b.gfK()))},
n:function(a,b){return new P.aE(C.f.n(this.a,b.gfK()))},
u:function(a,b){if(b==null)return!1
return b instanceof P.aE&&this.a===b.a},
gI:function(a){return C.f.gI(this.a)},
i:function(a){var u,t,s,r,q
u=new P.ej()
t=this.a
if(t<0)return"-"+new P.aE(0-t).i(0)
s=u.$1(C.f.a2(t,6e7)%60)
r=u.$1(C.f.a2(t,1e6)%60)
q=new P.ei().$1(t%1e6)
return""+C.f.a2(t,36e8)+":"+H.i(s)+":"+H.i(r)+"."+H.i(q)}}
P.ei.prototype={
$1:function(a){if(a>=1e5)return""+a
if(a>=1e4)return"0"+a
if(a>=1000)return"00"+a
if(a>=100)return"000"+a
if(a>=10)return"0000"+a
return"00000"+a},
$S:17}
P.ej.prototype={
$1:function(a){if(a>=10)return""+a
return"0"+a},
$S:17}
P.ba.prototype={}
P.dc.prototype={
i:function(a){return"Throw of null."}}
P.aC.prototype={
gbV:function(){return"Invalid argument"+(!this.a?"(s)":"")},
gbU:function(){return""},
i:function(a){var u,t,s,r,q,p
u=this.c
t=u!=null?" ("+u+")":""
u=this.d
s=u==null?"":": "+u
r=this.gbV()+t+s
if(!this.a)return r
q=this.gbU()
p=P.en(this.b)
return r+q+": "+p}}
P.bz.prototype={
gbV:function(){return"RangeError"},
gbU:function(){var u,t,s
u=this.e
if(u==null){u=this.f
t=u!=null?": Not less than or equal to "+H.i(u):""}else{s=this.f
if(s==null)t=": Not greater than or equal to "+H.i(u)
else if(s>u)t=": Not in range "+H.i(u)+".."+H.i(s)+", inclusive"
else t=s<u?": Valid value range is empty":": Only valid value is "+H.i(u)}return t}}
P.ew.prototype={
gbV:function(){return"RangeError"},
gbU:function(){var u,t
u=H.a7(this.b)
if(typeof u!=="number")return u.V()
if(u<0)return": index must not be negative"
t=this.f
if(t===0)return": no indices are valid"
return": index should be less than "+H.i(t)},
gl:function(a){return this.f}}
P.fS.prototype={
i:function(a){return"Unsupported operation: "+this.a}}
P.fP.prototype={
i:function(a){var u=this.a
return u!=null?"UnimplementedError: "+u:"UnimplementedError"}}
P.dm.prototype={
i:function(a){return"Bad state: "+this.a}}
P.ec.prototype={
i:function(a){var u=this.a
if(u==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+P.en(u)+"."}}
P.f1.prototype={
i:function(a){return"Out of Memory"},
$iba:1}
P.dl.prototype={
i:function(a){return"Stack Overflow"},
$iba:1}
P.eg.prototype={
i:function(a){var u=this.a
return u==null?"Reading static variable during its initialization":"Reading static variable '"+u+"' during its initialization"}}
P.dL.prototype={
i:function(a){return"Exception: "+this.a}}
P.eu.prototype={
i:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f
u=this.a
t=""!==u?"FormatException: "+u:"FormatException"
s=this.c
r=this.b
if(typeof r==="string"){if(s!=null)u=s<0||s>r.length
else u=!1
if(u)s=null
if(s==null){q=r.length>78?C.c.t(r,0,75)+"...":r
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
g=""}f=C.c.t(r,i,j)
return t+h+f+g+"\n"+C.c.k(" ",s-i+h.length)+"^\n"}else return s!=null?t+(" (at offset "+H.i(s)+")"):t}}
P.m.prototype={}
P.n.prototype={
gl:function(a){var u,t
u=this.gU(this)
for(t=0;u.E();)++t
return t},
ac:function(a,b){var u,t,s
if(b<0)H.p(P.a3(b,0,null,"index",null))
for(u=this.gU(this),t=0;u.E();){s=u.gJ()
if(b===t)return s;++t}throw H.d(P.bY(b,this,"index",null,t))},
i:function(a){return P.lf(this,"(",")")}}
P.aF.prototype={}
P.a.prototype={$in:1}
P.D.prototype={}
P.y.prototype={
gI:function(a){return P.F.prototype.gI.call(this,this)},
i:function(a){return"null"}}
P.aa.prototype={}
P.F.prototype={constructor:P.F,$iF:1,
u:function(a,b){return this===b},
gI:function(a){return H.c5(this)},
i:function(a){return"Instance of '"+H.by(this)+"'"},
toString:function(){return this.i(this)}}
P.ak.prototype={}
P.k.prototype={$ijI:1}
P.af.prototype={
gl:function(a){return this.a.length},
i:function(a){var u=this.a
return u.charCodeAt(0)==0?u:u},
$in7:1}
P.fY.prototype={
$2:function(a,b){var u,t,s,r
u=P.k
H.h(a,"$iD",[u,u],"$aD")
H.O(b)
t=J.jf(b).eo(b,"=")
if(t===-1){if(b!=="")a.q(0,P.j7(b,0,b.length,this.a,!0),"")}else if(t!==0){s=C.c.t(b,0,t)
r=C.c.ay(b,t+1)
u=this.a
a.q(0,P.j7(s,0,s.length,u,!0),P.j7(r,0,r.length,u,!0))}return a},
$S:41}
P.fU.prototype={
$2:function(a,b){throw H.d(P.X("Illegal IPv4 address, "+a,this.a,b))},
$S:38}
P.fW.prototype={
$2:function(a,b){throw H.d(P.X("Illegal IPv6 address, "+a,this.a,b))},
$1:function(a){return this.$2(a,null)},
$S:37}
P.fX.prototype={
$2:function(a,b){var u
if(b-a>4)this.a.$2("an IPv6 part can only contain a maximum of 4 hex digits",a)
u=P.cy(C.c.t(this.b,a,b),null,16)
if(typeof u!=="number")return u.V()
if(u<0||u>65535)this.a.$2("each part must be in the range of `0x0..0xFFFF`",a)
return u},
$S:36}
P.bD.prototype={
geQ:function(){return this.b},
gcH:function(a){var u=this.c
if(u==null)return""
if(C.c.a8(u,"["))return C.c.t(u,1,u.length-1)
return u},
gbC:function(a){var u=this.d
if(u==null)return P.ka(this.a)
return u},
gcS:function(){var u=this.f
return u==null?"":u},
gej:function(){var u=this.r
return u==null?"":u},
cW:function(a,b,c,d,e,f,g,h,i){var u,t,s
H.h(g,"$iD",[P.k,null],"$aD")
h=this.a
u=h==="file"
i=this.b
e=this.d
t=this.c
if(t!=null)b=t
else if(i.length!==0||e!=null||u)b=""
c=this.e
if(!u)s=b!=null&&c.length!==0
else s=!0
if(s&&!C.c.a8(c,"/"))c="/"+c
f=P.j6(f,0,0,g)
return new P.bD(h,i,b,e,c,f,this.r)},
cV:function(a){return this.cW(null,null,null,null,null,null,a,null,null)},
gb5:function(){var u,t
if(this.Q==null){u=this.f
t=P.k
this.si_(new P.dC(P.jZ(u==null?"":u,C.m),[t,t]))}return this.Q},
gek:function(){return this.c!=null},
gen:function(){return this.f!=null},
gel:function(){return this.r!=null},
i:function(a){var u,t,s,r
u=this.y
if(u==null){u=this.a
t=u.length!==0?H.i(u)+":":""
s=this.c
r=s==null
if(!r||u==="file"){u=t+"//"
t=this.b
if(t.length!==0)u=u+H.i(t)+"@"
if(!r)u+=s
t=this.d
if(t!=null)u=u+":"+H.i(t)}else u=t
u+=this.e
t=this.f
if(t!=null)u=u+"?"+t
t=this.r
if(t!=null)u=u+"#"+t
u=u.charCodeAt(0)==0?u:u
this.y=u}return u},
u:function(a,b){var u,t
if(b==null)return!1
if(this===b)return!0
if(!!J.N(b).$ij1)if(this.a==b.gbP())if(this.c!=null===b.gek())if(this.b==b.geQ())if(this.gcH(this)==b.gcH(b))if(this.gbC(this)==b.gbC(b))if(this.e===b.geC(b)){u=this.f
t=u==null
if(!t===b.gen()){if(t)u=""
if(u===b.gcS()){u=this.r
t=u==null
if(!t===b.gel()){if(t)u=""
u=u===b.gej()}else u=!1}else u=!1}else u=!1}else u=!1
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
si_:function(a){var u=P.k
this.Q=H.h(a,"$iD",[u,u],"$aD")},
$ij1:1,
gbP:function(){return this.a},
geC:function(a){return this.e}}
P.hQ.prototype={
$1:function(a){var u=this.b
if(typeof u!=="number")return u.m()
throw H.d(P.X("Invalid port",this.a,u+1))},
$S:21}
P.hR.prototype={
$1:function(a){return P.hU(C.a0,a,C.m,!1)},
$S:25}
P.hT.prototype={
$2:function(a,b){var u,t
u=this.b
t=this.a
u.a+=t.a
t.a="&"
t=u.a+=H.i(P.hU(C.t,a,C.m,!0))
if(b!=null&&b.length!==0){u.a=t+"="
u.a+=H.i(P.hU(C.t,b,C.m,!0))}},
$S:34}
P.hS.prototype={
$2:function(a,b){var u,t
H.O(a)
if(b==null||typeof b==="string")this.a.$2(a,H.O(b))
else for(u=J.cD(H.ky(b,"$in")),t=this.a;u.E();)t.$2(a,H.O(u.gJ()))},
$S:33}
P.fT.prototype={
geO:function(){var u,t,s,r,q
u=this.c
if(u!=null)return u
u=this.b
if(0>=u.length)return H.c(u,0)
t=this.a
u=u[0]+1
s=C.c.ep(t,"?",u)
r=t.length
if(s>=0){q=P.ct(t,s+1,r,C.q,!1)
r=s}else q=null
u=new P.hn(this,"data",null,null,null,P.ct(t,u,r,C.F,!1),q,null)
this.c=u
return u},
i:function(a){var u,t
u=this.b
if(0>=u.length)return H.c(u,0)
t=this.a
return u[0]===-1?"data:"+t:t}}
P.i1.prototype={
$1:function(a){return new Uint8Array(96)},
$S:32}
P.i0.prototype={
$2:function(a,b){var u=this.a
if(a>=u.length)return H.c(u,a)
u=u[a]
J.l1(u,0,96,b)
return u},
$S:30}
P.i2.prototype={
$3:function(a,b,c){var u,t,s
for(u=b.length,t=0;t<u;++t){s=C.c.G(b,t)^96
if(s>=a.length)return H.c(a,s)
a[s]=c}}}
P.i3.prototype={
$3:function(a,b,c){var u,t,s
for(u=C.c.G(b,0),t=C.c.G(b,1);u<=t;++u){s=(u^96)>>>0
if(s>=a.length)return H.c(a,s)
a[s]=c}}}
P.hK.prototype={
gek:function(){return this.c>0},
gem:function(){var u,t
if(this.c>0){u=this.d
if(typeof u!=="number")return u.m()
t=this.e
if(typeof t!=="number")return H.q(t)
t=u+1<t
u=t}else u=!1
return u},
gen:function(){var u=this.f
if(typeof u!=="number")return u.V()
return u<this.r},
gel:function(){return this.r<this.a.length},
gdu:function(){return this.b===4&&C.c.a8(this.a,"http")},
gdv:function(){return this.b===5&&C.c.a8(this.a,"https")},
gbP:function(){var u,t
u=this.b
if(u<=0)return""
t=this.x
if(t!=null)return t
if(this.gdu()){this.x="http"
u="http"}else if(this.gdv()){this.x="https"
u="https"}else if(u===4&&C.c.a8(this.a,"file")){this.x="file"
u="file"}else if(u===7&&C.c.a8(this.a,"package")){this.x="package"
u="package"}else{u=C.c.t(this.a,0,u)
this.x=u}return u},
geQ:function(){var u,t
u=this.c
t=this.b+3
return u>t?C.c.t(this.a,t,u-1):""},
gcH:function(a){var u=this.c
return u>0?C.c.t(this.a,u,this.d):""},
gbC:function(a){var u
if(this.gem()){u=this.d
if(typeof u!=="number")return u.m()
return P.cy(C.c.t(this.a,u+1,this.e),null,null)}if(this.gdu())return 80
if(this.gdv())return 443
return 0},
geC:function(a){return C.c.t(this.a,this.e,this.f)},
gcS:function(){var u,t
u=this.f
t=this.r
if(typeof u!=="number")return u.V()
return u<t?C.c.t(this.a,u+1,t):""},
gej:function(){var u,t
u=this.r
t=this.a
return u<t.length?C.c.ay(t,u+1):""},
gb5:function(){var u=this.f
if(typeof u!=="number")return u.V()
if(u>=this.r)return C.a1
u=P.k
return new P.dC(P.jZ(this.gcS(),C.m),[u,u])},
cW:function(a,b,c,d,e,f,g,h,i){var u,t,s
H.h(g,"$iD",[P.k,null],"$aD")
h=this.gbP()
u=h==="file"
t=this.c
i=t>0?C.c.t(this.a,this.b+3,t):""
e=this.gem()?this.gbC(this):null
t=this.c
if(t>0)b=C.c.t(this.a,t,this.d)
else if(i.length!==0||e!=null||u)b=""
t=this.a
c=C.c.t(t,this.e,this.f)
if(!u)s=b!=null&&c.length!==0
else s=!0
if(s&&!C.c.a8(c,"/"))c="/"+c
f=P.j6(f,0,0,g)
s=this.r
if(s<t.length)a=C.c.ay(t,s+1)
return new P.bD(h,i,b,e,c,f,a)},
cV:function(a){return this.cW(null,null,null,null,null,null,a,null,null)},
gI:function(a){var u=this.y
if(u==null){u=C.c.gI(this.a)
this.y=u}return u},
u:function(a,b){if(b==null)return!1
if(this===b)return!0
return!!J.N(b).$ij1&&this.a===b.i(0)},
i:function(a){return this.a},
$ij1:1}
P.hn.prototype={}
W.v.prototype={}
W.e2.prototype={
i:function(a){return String(a)}}
W.e3.prototype={
i:function(a){return String(a)}}
W.cG.prototype={}
W.bk.prototype={
bL:function(a,b,c){if(c!=null)return this.fT(a,b,P.mt(c,null))
return this.fU(a,b)},
eV:function(a,b){return this.bL(a,b,null)},
fT:function(a,b,c){return a.getContext(b,c)},
fU:function(a,b){return a.getContext(b)},
$ibk:1,
$iju:1}
W.bl.prototype={
fV:function(a,b,c,d,e){return a.getImageData(b,c,d,e)},
jp:function(a,b,c,d,e,f){return a.drawImage(b,c,d,e,f)},
$ibl:1}
W.b7.prototype={
gl:function(a){return a.length}}
W.bT.prototype={
gl:function(a){return a.length}}
W.ef.prototype={}
W.bU.prototype={$ibU:1}
W.bV.prototype={
bM:function(a,b){return a.getElementById(b)}}
W.eh.prototype={
i:function(a){return String(a)}}
W.cO.prototype={
i:function(a){return"Rectangle ("+H.i(a.left)+", "+H.i(a.top)+") "+H.i(a.width)+" x "+H.i(a.height)},
u:function(a,b){var u
if(b==null)return!1
if(!H.cx(b,"$iao",[P.aa],"$aao"))return!1
u=J.b6(b)
return a.left===u.gbA(b)&&a.top===u.gbG(b)&&a.width===u.gbJ(b)&&a.height===u.gbz(b)},
gI:function(a){return W.k7(C.e.gI(a.left),C.e.gI(a.top),C.e.gI(a.width),C.e.gI(a.height))},
gdQ:function(a){return a.bottom},
gbz:function(a){return a.height},
gbA:function(a){return a.left},
gbE:function(a){return a.right},
gbG:function(a){return a.top},
gbJ:function(a){return a.width},
$iao:1,
$aao:function(){return[P.aa]}}
W.hm.prototype={
gl:function(a){return this.b.length},
j:function(a,b){var u=this.b
if(b<0||b>=u.length)return H.c(u,b)
return H.e(u[b],"$iP")},
q:function(a,b,c){var u
H.e(c,"$iP")
u=this.b
if(b<0||b>=u.length)return H.c(u,b)
J.iM(this.a,c,u[b])},
h:function(a,b){J.jq(this.a,b)
return b},
gU:function(a){var u=this.kn(this)
return new J.aj(u,u.length,0,[H.r(u,0)])},
$aQ:function(){return[W.P]},
$an:function(){return[W.P]},
$aa:function(){return[W.P]}}
W.P.prototype={
gct:function(a){return new W.hm(a,a.children)},
gdS:function(a){var u,t,s,r
u=a.clientLeft
t=a.clientTop
s=a.clientWidth
r=a.clientHeight
if(typeof s!=="number")return s.V()
if(s<0)s=-s*0
if(typeof r!=="number")return r.V()
if(r<0)r=-r*0
return new P.ao(u,t,s,r,[P.aa])},
i:function(a){return a.localName},
$iP:1}
W.l.prototype={$il:1}
W.bq.prototype={
fu:function(a,b,c,d){return a.addEventListener(b,H.bH(H.j(c,{func:1,args:[W.l]}),1),!1)},
$ibq:1}
W.et.prototype={
gl:function(a){return a.length}}
W.cT.prototype={
dF:function(a,b,c,d){return a.replaceState(b,c,d)},
gl:function(a){return a.length}}
W.bs.prototype={
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.bY(b,a,null,null,null))
return a[b]},
q:function(a,b,c){H.e(c,"$iE")
throw H.d(P.U("Cannot assign element of immutable List."))},
ac:function(a,b){if(b<0||b>=a.length)return H.c(a,b)
return a[b]},
$iaY:1,
$aaY:function(){return[W.E]},
$aQ:function(){return[W.E]},
$in:1,
$an:function(){return[W.E]},
$ia:1,
$aa:function(){return[W.E]},
$ibs:1,
$aau:function(){return[W.E]}}
W.cU.prototype={}
W.aV.prototype={$iaV:1,
gdT:function(a){return a.data}}
W.bt.prototype={$ibt:1,$iju:1}
W.bZ.prototype={$ibZ:1}
W.aG.prototype={$iaG:1}
W.d_.prototype={}
W.c0.prototype={}
W.Y.prototype={$iY:1}
W.hl.prototype={
q:function(a,b,c){var u,t
H.e(c,"$iE")
u=this.a
t=u.childNodes
if(b<0||b>=t.length)return H.c(t,b)
J.iM(u,c,t[b])},
gU:function(a){var u=this.a.childNodes
return new W.cR(u,u.length,-1,[H.bL(C.a2,u,"au",0)])},
gl:function(a){return this.a.childNodes.length},
j:function(a,b){var u=this.a.childNodes
if(b<0||b>=u.length)return H.c(u,b)
return u[b]},
$aQ:function(){return[W.E]},
$an:function(){return[W.E]},
$aa:function(){return[W.E]}}
W.E.prototype={
kd:function(a,b){var u,t
try{u=a.parentNode
J.iM(u,b,a)}catch(t){H.at(t)}return a},
i:function(a){var u=a.nodeValue
return u==null?this.f3(a):u},
X:function(a,b){return a.appendChild(b)},
i5:function(a,b,c){return a.replaceChild(b,c)},
$iE:1}
W.c3.prototype={
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.bY(b,a,null,null,null))
return a[b]},
q:function(a,b,c){H.e(c,"$iE")
throw H.d(P.U("Cannot assign element of immutable List."))},
ac:function(a,b){if(b<0||b>=a.length)return H.c(a,b)
return a[b]},
$iaY:1,
$aaY:function(){return[W.E]},
$aQ:function(){return[W.E]},
$in:1,
$an:function(){return[W.E]},
$ia:1,
$aa:function(){return[W.E]},
$aau:function(){return[W.E]}}
W.fc.prototype={
gl:function(a){return a.length}}
W.aJ.prototype={$iaJ:1}
W.dp.prototype={
fX:function(a,b){return a.insertRow(b)}}
W.dq.prototype={
dt:function(a,b){return a.insertCell(b)}}
W.ax.prototype={$iax:1}
W.ay.prototype={$iay:1}
W.fC.prototype={
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.bY(b,a,null,null,null))
return a[b]},
q:function(a,b,c){H.e(c,"$iax")
throw H.d(P.U("Cannot assign element of immutable List."))},
ac:function(a,b){if(b<0||b>=a.length)return H.c(a,b)
return a[b]},
$iaY:1,
$aaY:function(){return[W.ax]},
$aQ:function(){return[W.ax]},
$in:1,
$an:function(){return[W.ax]},
$ia:1,
$aa:function(){return[W.ax]},
$aau:function(){return[W.ax]}}
W.bf.prototype={}
W.hd.prototype={$iju:1}
W.aM.prototype={
gjk:function(a){if(a.deltaY!==undefined)return a.deltaY
throw H.d(P.U("deltaY is not supported"))},
gjj:function(a){if(a.deltaX!==undefined)return a.deltaX
throw H.d(P.U("deltaX is not supported"))},
$iaM:1}
W.cl.prototype={
i6:function(a,b){return a.requestAnimationFrame(H.bH(H.j(b,{func:1,ret:-1,args:[P.aa]}),1))},
fL:function(a){if(!!(a.requestAnimationFrame&&a.cancelAnimationFrame))return;(function(b){var u=['ms','moz','webkit','o']
for(var t=0;t<u.length&&!b.requestAnimationFrame;++t){b.requestAnimationFrame=b[u[t]+'RequestAnimationFrame']
b.cancelAnimationFrame=b[u[t]+'CancelAnimationFrame']||b[u[t]+'CancelRequestAnimationFrame']}if(b.requestAnimationFrame&&b.cancelAnimationFrame)return
b.requestAnimationFrame=function(c){return window.setTimeout(function(){c(Date.now())},16)}
b.cancelAnimationFrame=function(c){clearTimeout(c)}})(a)}}
W.dK.prototype={
i:function(a){return"Rectangle ("+H.i(a.left)+", "+H.i(a.top)+") "+H.i(a.width)+" x "+H.i(a.height)},
u:function(a,b){var u
if(b==null)return!1
if(!H.cx(b,"$iao",[P.aa],"$aao"))return!1
u=J.b6(b)
return a.left===u.gbA(b)&&a.top===u.gbG(b)&&a.width===u.gbJ(b)&&a.height===u.gbz(b)},
gI:function(a){return W.k7(C.e.gI(a.left),C.e.gI(a.top),C.e.gI(a.width),C.e.gI(a.height))},
gbz:function(a){return a.height},
gbJ:function(a){return a.width}}
W.ho.prototype={}
W.j5.prototype={}
W.hp.prototype={}
W.hq.prototype={
$1:function(a){return this.a.$1(H.e(a,"$il"))},
$S:27}
W.au.prototype={
gU:function(a){return new W.cR(a,this.gl(a),-1,[H.bL(this,a,"au",0)])}}
W.cR.prototype={
E:function(){var u,t
u=this.c+1
t=this.b
if(u<t){this.sds(J.kY(this.a,u))
this.c=u
return!0}this.sds(null)
this.c=t
return!1},
gJ:function(){return this.d},
sds:function(a){this.d=H.w(a,H.r(this,0))},
$iaF:1}
W.dJ.prototype={}
W.dM.prototype={}
W.dN.prototype={}
W.dP.prototype={}
W.dQ.prototype={}
W.dU.prototype={}
W.dV.prototype={}
P.hL.prototype={
eh:function(a){var u,t,s
u=this.a
t=u.length
for(s=0;s<t;++s)if(u[s]===a)return s
C.a.h(u,a)
C.a.h(this.b,null)
return t},
bI:function(a){var u,t,s,r
u={}
if(a==null)return a
if(typeof a==="boolean")return a
if(typeof a==="number")return a
if(typeof a==="string")return a
t=J.N(a)
if(!!t.$iac)return new Date(a.a)
if(!!t.$ilF)throw H.d(P.fQ("structured clone of RegExp"))
if(!!t.$iaV)return a
if(!!t.$ibw)return a
if(!!t.$iD){s=this.eh(a)
t=this.b
if(s>=t.length)return H.c(t,s)
r=t[s]
u.a=r
if(r!=null)return r
r={}
u.a=r
C.a.q(t,s,r)
a.R(0,new P.hM(u,this))
return u.a}if(!!t.$ia){s=this.eh(a)
u=this.b
if(s>=u.length)return H.c(u,s)
r=u[s]
if(r!=null)return r
return this.je(a,s)}throw H.d(P.fQ("structured clone of other type"))},
je:function(a,b){var u,t,s,r
u=J.bK(a)
t=u.gl(a)
s=new Array(t)
C.a.q(this.b,b,s)
for(r=0;r<t;++r)C.a.q(s,r,this.bI(u.j(a,r)))
return s}}
P.hM.prototype={
$2:function(a,b){this.a.a[a]=this.b.bI(b)},
$S:7}
P.dW.prototype={$iaV:1,
gdT:function(a){return this.a}}
P.i7.prototype={
$2:function(a,b){this.a[a]=b},
$S:7}
P.dS.prototype={}
P.eq.prototype={
gaQ:function(){var u,t,s
u=this.b
t=H.as(u,"Q",0)
s=W.P
return new H.eN(new H.hf(u,H.j(new P.er(),{func:1,ret:P.a4,args:[t]}),[t]),H.j(new P.es(),{func:1,ret:s,args:[t]}),[t,s])},
R:function(a,b){H.j(b,{func:1,ret:-1,args:[W.P]})
C.a.R(P.jE(this.gaQ(),!1,W.P),b)},
q:function(a,b,c){var u
H.e(c,"$iP")
u=this.gaQ()
J.l2(u.b.$1(J.iN(u.a,b)),c)},
h:function(a,b){J.jq(this.b.a,b)},
gl:function(a){return J.aT(this.gaQ().a)},
j:function(a,b){var u=this.gaQ()
return u.b.$1(J.iN(u.a,b))},
gU:function(a){var u=P.jE(this.gaQ(),!1,W.P)
return new J.aj(u,u.length,0,[H.r(u,0)])},
$aQ:function(){return[W.P]},
$an:function(){return[W.P]},
$aa:function(){return[W.P]}}
P.er.prototype={
$1:function(a){return!!J.N(H.e(a,"$iE")).$iP},
$S:26}
P.es.prototype={
$1:function(a){return H.f(H.e(a,"$iE"),"$iP")},
$S:24}
P.hE.prototype={
gbE:function(a){var u=this.a
if(typeof u!=="number")return u.m()
return H.w(u+this.c,H.r(this,0))},
gdQ:function(a){var u=this.b
if(typeof u!=="number")return u.m()
return H.w(u+this.d,H.r(this,0))},
i:function(a){return"Rectangle ("+H.i(this.a)+", "+H.i(this.b)+") "+this.c+" x "+this.d},
u:function(a,b){var u,t,s,r
if(b==null)return!1
if(H.cx(b,"$iao",[P.aa],"$aao")){u=this.a
t=J.b6(b)
if(u==t.gbA(b)){s=this.b
if(s==t.gbG(b)){if(typeof u!=="number")return u.m()
r=H.r(this,0)
if(H.w(u+this.c,r)===t.gbE(b)){if(typeof s!=="number")return s.m()
u=H.w(s+this.d,r)===t.gdQ(b)}else u=!1}else u=!1}else u=!1}else u=!1
return u},
gI:function(a){var u,t,s,r,q
u=this.a
t=J.cC(u)
s=this.b
r=J.cC(s)
if(typeof u!=="number")return u.m()
q=H.r(this,0)
u=C.f.gI(H.w(u+this.c,q))
if(typeof s!=="number")return s.m()
q=C.f.gI(H.w(s+this.d,q))
return P.m_(P.hB(P.hB(P.hB(P.hB(0,t),r),u),q))}}
P.ao.prototype={
gbA:function(a){return this.a},
gbG:function(a){return this.b},
gbJ:function(a){return this.c},
gbz:function(a){return this.d}}
P.o.prototype={
gct:function(a){return new P.eq(a,new W.hl(a))}}
P.G.prototype={$in:1,
$an:function(){return[P.m]},
$ia:1,
$aa:function(){return[P.m]},
$ilN:1}
P.cH.prototype={$icH:1}
P.cS.prototype={$icS:1}
P.dg.prototype={$idg:1}
P.bA.prototype={
dO:function(a,b,c){return a.attachShader(b,c)},
an:function(a,b,c){return a.bindBuffer(b,c)},
co:function(a,b,c){return a.bindFramebuffer(b,c)},
bi:function(a,b,c){return a.bindTexture(b,c)},
j5:function(a,b,c){return a.blendFunc(b,c)},
dR:function(a,b,c,d){return a.bufferData(b,c,d)},
j8:function(a,b){return a.clear(b)},
j9:function(a,b,c,d,e){return a.clearColor(b,c,d,e)},
ja:function(a,b){return a.clearDepth(b)},
jc:function(a,b){return a.compileShader(b)},
jf:function(a,b){return a.createShader(b)},
jh:function(a,b){return a.deleteProgram(b)},
ji:function(a,b){return a.deleteShader(b)},
jl:function(a,b){return a.depthFunc(b)},
jm:function(a,b){return a.disable(b)},
dU:function(a,b){return a.disableVertexAttribArray(b)},
jo:function(a,b,c,d,e){return a.drawElements(b,c,d,e)},
cA:function(a,b){return a.enable(b)},
dW:function(a,b){return a.enableVertexAttribArray(b)},
jB:function(a,b,c,d,e,f){return a.framebufferTexture2D(b,c,d,e,f)},
eR:function(a,b){return a.generateMipmap(b)},
eS:function(a,b,c){return a.getActiveAttrib(b,c)},
eT:function(a,b,c){return a.getActiveUniform(b,c)},
eU:function(a,b,c){return a.getAttribLocation(b,c)},
d0:function(a,b){return a.getParameter(b)},
eW:function(a,b){return a.getProgramInfoLog(b)},
bN:function(a,b,c){return a.getProgramParameter(b,c)},
eX:function(a,b){return a.getShaderInfoLog(b)},
eY:function(a,b,c){return a.getShaderParameter(b,c)},
eZ:function(a,b,c){return a.getUniformLocation(b,c)},
jH:function(a,b){return a.linkProgram(b)},
k7:function(a,b,c){return a.pixelStorei(b,c)},
i0:function(a,b,c,d,e,f,g,h){return a.readPixels(b,c,d,e,f,g,h)},
f1:function(a,b,c){return a.shaderSource(b,c)},
kk:function(a,b,c,d,e,f,g,h,i,j){var u,t
u=J.N(g)
if(!!u.$iaV)t=!0
else t=!1
if(t){this.io(a,b,c,d,e,f,P.mu(g))
return}if(!!u.$ibt)u=!0
else u=!1
if(u){this.ip(a,b,c,d,e,f,g)
return}throw H.d(P.cE("Incorrect number or type of arguments"))},
kj:function(a,b,c,d,e,f,g){return this.kk(a,b,c,d,e,f,g,null,null,null)},
io:function(a,b,c,d,e,f,g){return a.texImage2D(b,c,d,e,f,g)},
ip:function(a,b,c,d,e,f,g){return a.texImage2D(b,c,d,e,f,g)},
bF:function(a,b,c,d){return a.texParameteri(b,c,d)},
M:function(a,b,c){return a.uniform1f(b,c)},
S:function(a,b,c){return a.uniform1i(b,c)},
v:function(a,b,c,d,e){return a.uniform3f(b,c,d,e)},
eM:function(a,b,c,d){return a.uniformMatrix3fv(b,!1,d)},
eN:function(a,b,c,d){return a.uniformMatrix4fv(b,!1,d)},
eP:function(a,b){return a.useProgram(b)},
kt:function(a,b,c,d,e,f,g){return a.vertexAttribPointer(b,c,d,!1,f,g)},
ku:function(a,b,c,d,e){return a.viewport(b,c,d,e)},
$ibA:1}
P.dj.prototype={$idj:1}
P.ds.prototype={$ids:1}
P.dA.prototype={$idA:1}
O.V.prototype={
bR:function(a){this.sh0(H.b([],[a]))
this.sdC(null)
this.sdz(null)
this.sdD(null)},
d2:function(a,b,c){var u=H.as(this,"V",0)
H.j(b,{func:1,ret:P.a4,args:[[P.n,u]]})
u={func:1,ret:-1,args:[P.m,[P.n,u]]}
H.j(a,u)
H.j(c,u)
this.sdC(b)
this.sdz(a)
this.sdD(c)},
ba:function(a,b){return this.d2(a,null,b)},
hL:function(a){var u
H.h(a,"$in",[H.as(this,"V",0)],"$an")
u=this.b
if(u!=null)return u.$1(a)
return!0},
fd:function(a,b){var u
H.h(b,"$in",[H.as(this,"V",0)],"$an")
u=this.c
if(u!=null)u.$2(a,b)},
gl:function(a){return this.a.length},
gU:function(a){var u=this.a
return new J.aj(u,u.length,0,[H.r(u,0)])},
ac:function(a,b){var u=this.a
if(b<0||b>=u.length)return H.c(u,b)
return u[b]},
h:function(a,b){var u,t,s
u=H.as(this,"V",0)
H.w(b,u)
u=[u]
if(this.hL(H.b([b],u))){t=this.a
s=t.length
C.a.h(t,b)
this.fd(s,H.b([b],u))}},
sh0:function(a){this.a=H.h(a,"$ia",[H.as(this,"V",0)],"$aa")},
sdC:function(a){this.b=H.j(a,{func:1,ret:P.a4,args:[[P.n,H.as(this,"V",0)]]})},
sdz:function(a){this.c=H.j(a,{func:1,ret:-1,args:[P.m,[P.n,H.as(this,"V",0)]]})},
sdD:function(a){this.d=H.j(a,{func:1,ret:-1,args:[P.m,[P.n,H.as(this,"V",0)]]})},
$in:1}
O.c_.prototype={
gl:function(a){return this.a.length},
gB:function(){var u=this.b
if(u==null){u=D.K()
this.b=u}return u},
fe:function(a){var u=this.b
if(u!=null)u.H(a)},
az:function(){return this.fe(null)},
ga_:function(){var u=this.a
if(u.length>0)return C.a.gax(u)
else return V.d7()},
eE:function(a){var u=this.a
if(a==null)C.a.h(u,V.d7())
else C.a.h(u,a)
this.az()},
cR:function(){var u=this.a
if(u.length>0){u.pop()
this.az()}},
sbY:function(a){this.a=H.h(a,"$ia",[V.ae],"$aa")}}
E.e7.prototype={}
E.ad.prototype={
de:function(){var u,t
this.e=null
for(u=this.y.a,u=new J.aj(u,u.length,0,[H.r(u,0)]);u.E();){t=u.d
if(t.f==null)t.de()}},
sd3:function(a,b){var u,t,s
u=this.c
if(u!=b){this.c=b
this.d=b
this.e=null
if(u!=null)u.gB().K(0,this.gey())
t=this.c
if(t!=null)t.gB().h(0,this.gey())
s=new D.H("shape",u,this.c,this,[F.bB])
s.b=!0
this.a6(s)}},
seI:function(a){var u,t,s
u=this.f
if(u!=a){if(u!=null)u.gB().K(0,this.geA())
t=this.f
this.f=a
if(a!=null)a.gB().h(0,this.geA())
this.de()
s=new D.H("technique",t,this.f,this,[O.bC])
s.b=!0
this.a6(s)}},
sb1:function(a){var u,t
if(!J.J(this.r,a)){u=this.r
if(u!=null)u.gB().K(0,this.gew())
if(a!=null)a.gB().h(0,this.gew())
this.r=a
t=new D.H("mover",u,a,this,[U.a2])
t.b=!0
this.a6(t)}},
aq:function(a){var u,t,s,r
u=this.r
t=u!=null?u.aN(a,this):null
if(!J.J(t,this.x)){s=this.x
this.x=t
r=new D.H("matrix",s,t,this,[V.ae])
r.b=!0
this.a6(r)}u=this.f
if(u!=null)u.aq(a)
for(u=this.y.a,u=new J.aj(u,u.length,0,[H.r(u,0)]);u.E();)u.d.aq(a)},
aL:function(a){var u,t,s
u=a.dx
t=this.x
u.toString
if(t==null)C.a.h(u.a,u.ga_())
else C.a.h(u.a,t.k(0,u.ga_()))
u.az()
a.eF(this.f)
u=a.dy
s=(u&&C.a).gax(u)
if(s!=null&&this.d!=null)s.kc(a,this)
for(u=this.y.a,u=new J.aj(u,u.length,0,[H.r(u,0)]);u.E();)u.d.aL(a)
a.eD()
a.dx.cR()},
gB:function(){var u=this.z
if(u==null){u=D.K()
this.z=u}return u},
a6:function(a){var u=this.z
if(u!=null)u.H(a)},
a1:function(){return this.a6(null)},
ez:function(a){H.e(a,"$ix")
this.e=null
this.a6(a)},
jU:function(){return this.ez(null)},
eB:function(a){this.a6(H.e(a,"$ix"))},
jV:function(){return this.eB(null)},
ex:function(a){this.a6(H.e(a,"$ix"))},
jT:function(){return this.ex(null)},
ev:function(a){this.a6(H.e(a,"$ix"))},
jQ:function(){return this.ev(null)},
jP:function(a,b){var u,t,s,r,q,p,o
H.h(b,"$in",[E.ad],"$an")
for(u=b.length,t=this.geu(),s={func:1,ret:-1,args:[D.x]},r=[s],q=0;q<b.length;b.length===u||(0,H.z)(b),++q){p=b[q]
if(p!=null){o=p.z
if(o==null){o=new D.bp()
o.sag(null)
o.sbd(null)
o.c=null
o.d=0
p.z=o}H.j(t,s)
if(o.a==null)o.sag(H.b([],r))
o=o.a;(o&&C.a).h(o,t)}}this.a1()},
jS:function(a,b){var u,t
H.h(b,"$in",[E.ad],"$an")
for(u=b.gU(b),t=this.geu();u.E();)u.gJ().gB().K(0,t)
this.a1()},
i:function(a){var u,t
u=this.a
t=u.length
if(t<=0)return"Unnamed entity"
return u},
sff:function(a,b){this.y=H.h(b,"$iV",[E.ad],"$aV")},
$ib1:1}
E.f7.prototype={
f9:function(a,b){var u,t
this.c=512
this.d=512
this.e=0
u=new P.ac(Date.now(),!1)
this.f=u
this.r=u
this.x=u
this.y=0
this.z=null
this.Q=null
this.ch=null
this.cx=null
u=new O.c_()
t=[V.ae]
u.sbY(H.b([],t))
u.b=null
u.gB().h(0,new E.f8(this))
this.cy=u
u=new O.c_()
u.sbY(H.b([],t))
u.b=null
u.gB().h(0,new E.f9(this))
this.db=u
u=new O.c_()
u.sbY(H.b([],t))
u.b=null
u.gB().h(0,new E.fa(this))
this.dx=u
this.sim(H.b([],[O.bC]))
u=this.dy;(u&&C.a).h(u,null)
this.sii(new H.aw([P.k,A.c6]))},
gk8:function(){var u=this.z
if(u==null){u=this.cy.ga_().k(0,this.db.ga_())
this.z=u}return u},
eF:function(a){var u,t
u=this.dy
t=a==null?(u&&C.a).gax(u):a;(u&&C.a).h(u,t)},
eD:function(){var u=this.dy
if(u.length>1)u.pop()},
sim:function(a){this.dy=H.h(a,"$ia",[O.bC],"$aa")},
sii:function(a){this.fr=H.h(a,"$iD",[P.k,A.c6],"$aD")}}
E.f8.prototype={
$1:function(a){var u
H.e(a,"$ix")
u=this.a
u.z=null
u.ch=null},
$S:8}
E.f9.prototype={
$1:function(a){var u
H.e(a,"$ix")
u=this.a
u.z=null
u.Q=null
u.ch=null
u.cx=null},
$S:8}
E.fa.prototype={
$1:function(a){var u
H.e(a,"$ix")
u=this.a
u.ch=null
u.cx=null},
$S:8}
E.dw.prototype={
d8:function(a){H.e(a,"$ix")
this.eG()},
d7:function(){return this.d8(null)},
gjA:function(){var u,t,s
u=Date.now()
t=C.f.a2(P.jx(0,0,0,u-this.cx.a,0,0).a,1000)/1000
if(t<=0)return 0
s=this.cy
this.cy=0
this.cx=new P.ac(u,!1)
return s/t},
dH:function(){var u,t,s,r
u=window.devicePixelRatio
t=this.b.clientWidth
if(typeof t!=="number")return t.k()
if(typeof u!=="number")return H.q(u)
s=C.e.aY(t*u)
t=this.b.clientHeight
if(typeof t!=="number")return t.k()
r=C.e.aY(t*u)
t=this.b
if(t.width!==s||t.height!==r){t.width=s
t.height=r
P.jU(C.u,this.gke())}},
eG:function(){var u,t
if(!this.ch){this.ch=!0
u=window
t=H.j(new E.fz(this),{func:1,ret:-1,args:[P.aa]})
C.J.fL(u)
C.J.i6(u,W.kn(t,P.aa))}},
kb:function(){var u,t,s,r,q
try{++this.cy
this.ch=!1
this.dH()
if(this.d!=null){s=this.e;++s.e
s.r=s.x
r=Date.now()
s.x=new P.ac(r,!1)
s.y=P.jx(0,0,0,r-s.r.a,0,0).a*0.000001
r=s.cy
C.a.sl(r.a,0)
r.az()
r=s.db
C.a.sl(r.a,0)
r.az()
r=s.dx
C.a.sl(r.a,0)
r.az()
r=s.dy;(r&&C.a).sl(r,0)
s=s.dy;(s&&C.a).h(s,null)
this.d.aL(this.e)}}catch(q){u=H.at(q)
t=H.bM(q)
P.jk("Error: "+H.i(u))
P.jk("Stack: "+H.i(t))
throw H.d(u)}}}
E.fz.prototype={
$1:function(a){var u
H.mQ(a)
u=this.a
if(u.ch){u.ch=!1
u.kb()}},
$S:28}
Z.dH.prototype={$in_:1}
Z.cI.prototype={
bh:function(a){var u,t,s
try{t=a.a
C.b.dW(t,this.e)
C.b.kt(t,this.e,this.b,5126,!1,this.d,this.c)}catch(s){u=H.at(s)
t=P.u('Failed to bind buffer attribute "'+this.a.i(0)+'": '+H.i(u))
throw H.d(t)}},
i:function(a){return"["+this.a.i(0)+", Size: "+this.b+", Offset: "+this.c+", Stride: "+this.d+", Attr: "+H.i(this.e)+"]"}}
Z.he.prototype={$in0:1}
Z.cJ.prototype={
aJ:function(a){var u,t,s,r
for(u=this.c,t=u.length,s=0;s<t;++s){r=u[s]
if((r.a.a&a.a)!==0)return r}return},
bh:function(a){var u,t
u=this.a
C.b.an(a.a,u.a,u.b)
for(u=this.c,t=u.length-1;t>=0;--t)u[t].bh(a)},
eL:function(a){var u,t,s
for(u=this.c,t=u.length-1,s=a.a;t>=0;--t)C.b.dU(s,u[t].e)
C.b.an(s,this.a.a,null)},
aL:function(a){var u,t,s,r,q,p
u=this.b.length
for(t=a.a,s=0;s<u;++s){r=this.b
if(s>=r.length)return H.c(r,s)
q=r[s]
r=q.c
p=r.a
C.b.an(t,p,r.b)
C.b.jo(t,q.a,q.b,5123,0)
C.b.an(t,p,null)}},
i:function(a){var u,t,s,r,q,p
u=[P.k]
t=H.b([],u)
for(s=this.b,r=s.length,q=0;q<s.length;s.length===r||(0,H.z)(s),++q)C.a.h(t,s[q].i(0))
p=H.b([],u)
for(u=this.c,s=u.length,q=0;q<s;++q)C.a.h(p,J.al(u[q]))
return"Buffer:  ["+this.a.i(0)+"]\nIndices: "+C.a.D(t,", ")+"\nAttrs:   "+C.a.D(p,", ")},
sfW:function(a){this.b=H.h(a,"$ia",[Z.bb],"$aa")},
$in8:1}
Z.bb.prototype={
i:function(a){return"Type: "+this.a+", Count: "+this.b+", ["+("Instance of '"+H.by(this.c)+"'")+"]"}}
Z.aA.prototype={
gd4:function(a){var u,t
u=this.a
t=(u&$.aQ().a)!==0?3:0
if((u&$.aB().a)!==0)t+=3
if((u&$.aP().a)!==0)t+=3
if((u&$.aR().a)!==0)t+=2
if((u&$.aS().a)!==0)t+=3
if((u&$.cz().a)!==0)t+=3
if((u&$.cA().a)!==0)t+=4
if((u&$.bj().a)!==0)++t
return(u&$.aO().a)!==0?t+4:t},
j3:function(a){var u,t,s
u=$.aQ()
t=this.a
if((t&u.a)!==0){if(0===a)return u
s=1}else s=0
u=$.aB()
if((t&u.a)!==0){if(s===a)return u;++s}u=$.aP()
if((t&u.a)!==0){if(s===a)return u;++s}u=$.aR()
if((t&u.a)!==0){if(s===a)return u;++s}u=$.aS()
if((t&u.a)!==0){if(s===a)return u;++s}u=$.cz()
if((t&u.a)!==0){if(s===a)return u;++s}u=$.cA()
if((t&u.a)!==0){if(s===a)return u;++s}u=$.bj()
if((t&u.a)!==0){if(s===a)return u;++s}u=$.aO()
if((t&u.a)!==0)if(s===a)return u
return $.kS()},
u:function(a,b){if(b==null)return!1
if(!(b instanceof Z.aA))return!1
return this.a===b.a},
i:function(a){var u,t
u=H.b([],[P.k])
t=this.a
if((t&$.aQ().a)!==0)C.a.h(u,"Pos")
if((t&$.aB().a)!==0)C.a.h(u,"Norm")
if((t&$.aP().a)!==0)C.a.h(u,"Binm")
if((t&$.aR().a)!==0)C.a.h(u,"Txt2D")
if((t&$.aS().a)!==0)C.a.h(u,"TxtCube")
if((t&$.cz().a)!==0)C.a.h(u,"Clr3")
if((t&$.cA().a)!==0)C.a.h(u,"Clr4")
if((t&$.bj().a)!==0)C.a.h(u,"Weight")
if((t&$.aO().a)!==0)C.a.h(u,"Bending")
if(u.length<=0)return"None"
return C.a.D(u,"|")}}
D.ea.prototype={}
D.bp.prototype={
h:function(a,b){var u={func:1,ret:-1,args:[D.x]}
H.j(b,u)
if(this.a==null)this.sag(H.b([],[u]))
u=this.a;(u&&C.a).h(u,b)},
K:function(a,b){var u,t
H.j(b,{func:1,ret:-1,args:[D.x]})
u=this.a
u=u==null?null:C.a.aU(u,b)
if(u===!0){u=this.a
t=(u&&C.a).K(u,b)||!1}else t=!1
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
if(a==null){a=new D.x(null)
a.b=!0
u.a=a
r=a}else r=a
if(this.d>0){if(this.c==null)this.c=r
return!0}if(!s)C.a.R(t,new D.eo(u))
return!0},
js:function(){return this.H(null)},
kf:function(a,b){var u,t
u=this.d
if(u>0){--u
this.d=u
if(u<=0)u=this.c!=null
else u=!1
if(u){t=this.c
this.c=null
this.H(t)}}},
a7:function(){return this.kf(!0,!1)},
sag:function(a){this.a=H.h(a,"$ia",[{func:1,ret:-1,args:[D.x]}],"$aa")},
sbd:function(a){this.b=H.h(a,"$ia",[{func:1,ret:-1,args:[D.x]}],"$aa")}}
D.eo.prototype={
$1:function(a){var u
H.j(a,{func:1,ret:-1,args:[D.x]})
u=this.a.a
u.b
a.$1(u)},
$S:29}
D.x.prototype={}
D.bu.prototype={}
D.bv.prototype={}
D.H.prototype={
i:function(a){return"ValueChanged: "+this.c+", "+H.i(this.d)+" => "+H.i(this.e)}}
X.cK.prototype={
u:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.cK))return!1
if(this.a!=b.a)return!1
if(!this.b.u(0,b.b))return!1
return!0},
i:function(a){return this.b.i(0)+H.i(this.a)}}
X.cZ.prototype={
u:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.cZ))return!1
if(this.a!=b.a)return!1
if(!this.b.u(0,b.b))return!1
return!0},
i:function(a){return this.b.i(0)+H.i(this.a)}}
X.eB.prototype={
k0:function(a){this.c=a.b
this.d.h(0,a.a)
return!1},
jX:function(a){this.c=a.b
this.d.K(0,a.a)
return!1},
shZ:function(a){this.d=H.h(a,"$ijR",[P.m],"$ajR")}}
X.d2.prototype={}
X.eI.prototype={
aP:function(a,b){var u,t,s,r,q,p,o,n
u=new P.ac(Date.now(),!1)
t=this.x
s=b.a
r=this.Q
if(typeof s!=="number")return s.k()
q=b.b
p=this.ch
if(typeof q!=="number")return q.k()
o=new V.a6(t.a+s*r,t.b+q*p)
p=this.a.gaI()
n=new X.b0(a,V.be(),this.x,this.y,this.z,p,o,u,this)
n.b=!0
this.z=u
this.x=o
return n},
cQ:function(a,b){this.r=a.a
return!1},
b3:function(a,b){var u,t
u=this.r
t=a.a
if(typeof t!=="number")return t.f_()
if(typeof u!=="number")return u.bK()
this.r=(u&~t)>>>0
return!1},
b2:function(a,b){var u=this.d
if(u==null)return!1
u.H(this.aP(a,b))
return!0},
k5:function(a){var u,t,s,r,q,p,o,n
u=this.e
if(u==null)return!1
t=this.a.gaI()
s=this.x
r=Date.now()
q=a.a
p=this.cx
if(typeof q!=="number")return q.k()
o=a.b
n=this.cy
if(typeof o!=="number")return o.k()
r=new X.c1(new V.L(q*p,o*n),t,s,new P.ac(r,!1),this)
r.b=!0
u.H(r)
return!0},
hA:function(a,b,c){var u,t,s
if(this.f==null)return
u=new P.ac(Date.now(),!1)
t=this.f
s=new X.d2(c,a,this.a.gaI(),b,u,this)
s.b=!0
t.H(s)
this.y=u
this.x=V.be()}}
X.am.prototype={
u:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.am))return!1
if(this.a!==b.a)return!1
if(this.b!=b.b)return!1
if(this.c!=b.c)return!1
return!0},
i:function(a){var u=this.a?"Ctrl+":""
u+=this.b?"Alt+":""
return u+(this.c?"Shift+":"")}}
X.b0.prototype={}
X.eV.prototype={
bW:function(a,b,c){var u,t,s
u=new P.ac(Date.now(),!1)
t=this.a.gaI()
s=new X.b0(a,this.r,this.x,this.y,this.z,t,b,u,this)
s.b=!0
if(c){this.y=u
this.r=b}this.z=u
this.x=b
return s},
cQ:function(a,b){var u
this.f=a.a
u=this.b
if(u==null)return!1
u.H(this.bW(a,b,!0))
return!0},
b3:function(a,b){var u,t
u=this.f
t=a.a
if(typeof t!=="number")return t.f_()
if(typeof u!=="number")return u.bK()
this.f=(u&~t)>>>0
u=this.c
if(u==null)return!1
u.H(this.bW(a,b,!0))
return!0},
b2:function(a,b){var u=this.d
if(u==null)return!1
u.H(this.bW(a,b,!1))
return!0},
k6:function(a,b){var u,t,s,r,q,p,o
u=this.e
if(u==null)return!1
t=this.a.gaI()
s=Date.now()
r=a.a
q=this.Q
if(typeof r!=="number")return r.k()
p=a.b
o=this.ch
if(typeof p!=="number")return p.k()
s=new X.c1(new V.L(r*q,p*o),t,b,new P.ac(s,!1),this)
s.b=!0
u.H(s)
return!0},
gdV:function(){var u=this.b
if(u==null){u=D.K()
this.b=u}return u},
gbH:function(){var u=this.c
if(u==null){u=D.K()
this.c=u}return u},
ges:function(){var u=this.d
if(u==null){u=D.K()
this.d=u}return u}}
X.c1.prototype={}
X.f3.prototype={}
X.dy.prototype={}
X.fB.prototype={
aP:function(a,b){var u,t,s,r
H.h(a,"$ia",[V.a6],"$aa")
u=new P.ac(Date.now(),!1)
t=a.length>0?a[0]:V.be()
s=this.a.gaI()
r=new X.dy(a,this.f,this.r,this.x,this.y,s,t,u,this)
r.b=!0
if(b){this.x=u
this.f=t}this.y=u
this.r=t
return r},
k_:function(a){var u
H.h(a,"$ia",[V.a6],"$aa")
u=this.b
if(u==null)return!1
u.H(this.aP(a,!0))
return!0},
jY:function(a){var u
H.h(a,"$ia",[V.a6],"$aa")
u=this.c
if(u==null)return!1
u.H(this.aP(a,!0))
return!0},
jZ:function(a){var u
H.h(a,"$ia",[V.a6],"$aa")
u=this.d
if(u==null)return!1
u.H(this.aP(a,!1))
return!0}}
X.dD.prototype={
gaI:function(){var u=this.a
return V.jP(0,0,C.n.gdS(u).c,C.n.gdS(u).d)},
dl:function(a){var u,t
u=a.keyCode
t=a.ctrlKey||a.metaKey
return new X.cZ(u,new X.am(t,a.altKey,a.shiftKey))},
aG:function(a){var u,t
u=this.b
t=a.ctrlKey||a.metaKey
u.c=new X.am(t,a.altKey,a.shiftKey)},
ce:function(a){var u,t
u=this.b
t=a.ctrlKey||a.metaKey
u.c=new X.am(t,a.altKey,a.shiftKey)},
av:function(a){var u,t,s,r,q
u=this.a.getBoundingClientRect()
t=a.pageX
s=a.pageY
r=u.left
if(typeof t!=="number")return t.n()
q=u.top
if(typeof s!=="number")return s.n()
return new V.a6(t-r,s-q)},
aR:function(a){return new V.L(a.movementX,a.movementY)},
c8:function(a){var u,t,s,r,q,p,o,n
u=this.a.getBoundingClientRect()
t=H.b([],[V.a6])
for(s=a.touches,r=s.length,q=0;q<s.length;s.length===r||(0,H.z)(s),++q){p=s[q]
o=C.e.aj(p.pageX)
C.e.aj(p.pageY)
n=u.left
C.e.aj(p.pageX)
C.a.h(t,new V.a6(o-n,C.e.aj(p.pageY)-u.top))}return t},
as:function(a){var u,t
u=a.buttons
t=a.ctrlKey||a.metaKey
return new X.cK(u,new X.am(t,a.altKey,a.shiftKey))},
bZ:function(a){var u,t,s,r,q,p
u=this.a.getBoundingClientRect()
t=a.pageX
s=a.pageY
r=u.left
if(typeof t!=="number")return t.n()
q=t-r
if(q<0)return!1
t=u.top
if(typeof s!=="number")return s.n()
p=s-t
if(p<0)return!1
return q<u.width&&p<u.height},
hu:function(a){this.f=!0},
hg:function(a){this.f=!1},
ho:function(a){H.e(a,"$iY")
if(this.f&&this.bZ(a))a.preventDefault()},
hy:function(a){var u
H.e(a,"$iaG")
if(!this.f)return
u=this.dl(a)
this.b.k0(u)},
hw:function(a){var u
H.e(a,"$iaG")
if(!this.f)return
u=this.dl(a)
this.b.jX(u)},
hC:function(a){var u,t,s,r
H.e(a,"$iY")
u=this.a
u.focus()
this.f=!0
this.aG(a)
if(this.x){t=this.as(a)
s=this.aR(a)
if(this.d.cQ(t,s))a.preventDefault()
return}if(this.r){this.y=a
u.requestPointerLock()
return}t=this.as(a)
r=this.av(a)
if(this.c.cQ(t,r))a.preventDefault()},
hG:function(a){var u,t,s
H.e(a,"$iY")
this.aG(a)
u=this.as(a)
if(this.x){t=this.aR(a)
if(this.d.b3(u,t))a.preventDefault()
return}if(this.r)return
s=this.av(a)
if(this.c.b3(u,s))a.preventDefault()},
hs:function(a){var u,t,s
H.e(a,"$iY")
if(!this.bZ(a)){this.aG(a)
u=this.as(a)
if(this.x){t=this.aR(a)
if(this.d.b3(u,t))a.preventDefault()
return}if(this.r)return
s=this.av(a)
if(this.c.b3(u,s))a.preventDefault()}},
hE:function(a){var u,t,s
H.e(a,"$iY")
this.aG(a)
u=this.as(a)
if(this.x){t=this.aR(a)
if(this.d.b2(u,t))a.preventDefault()
return}if(this.r)return
s=this.av(a)
if(this.c.b2(u,s))a.preventDefault()},
hq:function(a){var u,t,s
H.e(a,"$iY")
if(!this.bZ(a)){this.aG(a)
u=this.as(a)
if(this.x){t=this.aR(a)
if(this.d.b2(u,t))a.preventDefault()
return}if(this.r)return
s=this.av(a)
if(this.c.b2(u,s))a.preventDefault()}},
hI:function(a){var u,t
H.e(a,"$iaM")
this.aG(a)
u=new V.L((a&&C.I).gjj(a),C.I.gjk(a)).w(0,180)
if(this.x){if(this.d.k5(u))a.preventDefault()
return}if(this.r)return
t=this.av(a)
if(this.c.k6(u,t))a.preventDefault()},
hK:function(a){var u,t,s
u=document.pointerLockElement===this.a
if(u!==this.x){this.x=u
t=this.as(this.y)
s=this.av(this.y)
this.d.hA(t,s,u)}},
hX:function(a){var u
H.e(a,"$iay")
this.a.focus()
this.f=!0
this.ce(a)
u=this.c8(a)
if(this.e.k_(u))a.preventDefault()},
hT:function(a){var u
H.e(a,"$iay")
this.ce(a)
u=this.c8(a)
if(this.e.jY(u))a.preventDefault()},
hV:function(a){var u
H.e(a,"$iay")
this.ce(a)
u=this.c8(a)
if(this.e.jZ(u))a.preventDefault()},
sfM:function(a){this.z=H.h(a,"$ia",[[P.c8,P.F]],"$aa")}}
D.b9.prototype={
gB:function(){var u=this.d
if(u==null){u=D.K()
this.d=u}return u},
ar:function(a){var u
H.e(a,"$ix")
u=this.d
if(u!=null)u.H(a)},
fh:function(){return this.ar(null)},
$ia_:1,
$ib1:1}
D.a_.prototype={$ib1:1}
D.d0.prototype={
gB:function(){var u=this.Q
if(u==null){u=D.K()
this.Q=u}return u},
ar:function(a){var u=this.Q
if(u!=null)u.H(a)},
dB:function(a){var u
H.e(a,"$ix")
u=this.ch
if(u!=null)u.H(a)},
hz:function(){return this.dB(null)},
hN:function(a){var u,t,s
H.h(a,"$in",[D.a_],"$an")
for(u=a.length,t=0;t<a.length;a.length===u||(0,H.z)(a),++t){s=a[t]
if(s==null||this.fF(s))return!1}return!0},
ha:function(a,b){var u,t,s,r,q,p,o,n
u=D.a_
H.h(b,"$in",[u],"$an")
for(t=b.length,s=this.gdA(),r={func:1,ret:-1,args:[D.x]},q=[r],p=0;p<b.length;b.length===t||(0,H.z)(b),++p){o=H.e(b[p],"$ia_")
if(o instanceof D.b9)C.a.h(this.e,o)
n=o.d
if(n==null){n=new D.bp()
n.sag(null)
n.sbd(null)
n.c=null
n.d=0
o.d=n}H.j(s,r)
if(n.a==null)n.sag(H.b([],q))
n=n.a;(n&&C.a).h(n,s)}u=new D.bu(a,b,this,[u])
u.b=!0
this.ar(u)},
hR:function(a,b){var u,t,s,r
u=D.a_
H.h(b,"$in",[u],"$an")
for(t=b.gU(b),s=this.gdA();t.E();){r=t.gJ()
C.a.K(this.e,r)
r.gB().K(0,s)}u=new D.bv(a,b,this,[u])
u.b=!0
this.ar(u)},
fF:function(a){var u=C.a.aU(this.e,a)
return u},
sfJ:function(a){this.e=H.h(a,"$ia",[D.b9],"$aa")},
shY:function(a){this.f=H.h(a,"$ia",[D.de],"$aa")},
sik:function(a){this.r=H.h(a,"$ia",[D.dk],"$aa")},
siy:function(a){this.x=H.h(a,"$ia",[D.dt],"$aa")},
siz:function(a){this.y=H.h(a,"$ia",[D.du],"$aa")},
siA:function(a){this.z=H.h(a,"$ia",[D.dv],"$aa")},
$an:function(){return[D.a_]},
$aV:function(){return[D.a_]}}
D.de.prototype={$ia_:1,$ib1:1}
D.dk.prototype={$ia_:1,$ib1:1}
D.dt.prototype={$ia_:1,$ib1:1}
D.du.prototype={$ia_:1,$ib1:1}
D.dv.prototype={$ia_:1,$ib1:1}
V.W.prototype={
m:function(a,b){var u,t,s
u=C.e.m(this.a,b.gcT())
t=C.e.m(this.b,b.gbO())
s=C.e.m(this.c,b.gcp())
if(u<0)u=0
else if(u>1)u=1
if(t<0)t=0
else if(t>1)t=1
if(s<0)s=0
else if(s>1)s=1
return new V.W(u,t,s)},
n:function(a,b){var u,t,s
u=C.e.n(this.a,b.gcT())
t=C.e.n(this.b,b.gbO())
s=C.e.n(this.c,b.gcp())
if(u<0)u=0
else if(u>1)u=1
if(t<0)t=0
else if(t>1)t=1
if(s<0)s=0
else if(s>1)s=1
return new V.W(u,t,s)},
u:function(a,b){var u,t
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.W))return!1
u=b.a
t=$.I().a
if(!(Math.abs(u-this.a)<t))return!1
if(!(Math.abs(b.b-this.b)<t))return!1
if(!(Math.abs(b.c-this.c)<t))return!1
return!0},
i:function(a){return"["+V.M(this.a,3,0)+", "+V.M(this.b,3,0)+", "+V.M(this.c,3,0)+"]"}}
V.aU.prototype={
m:function(a,b){var u,t,s,r
u=C.e.m(this.a,b.gcT())
t=C.e.m(this.b,b.gbO())
s=C.e.m(this.c,b.gcp())
r=C.e.m(this.d,b.gj1(b))
if(u<0)u=0
else if(u>1)u=1
if(t<0)t=0
else if(t>1)t=1
if(s<0)s=0
else if(s>1)s=1
if(r<0)r=0
else if(r>1)r=1
return new V.aU(u,t,s,r)},
n:function(a,b){var u,t,s,r
u=C.e.n(this.a,b.gcT())
t=C.e.n(this.b,b.gbO())
s=C.e.n(this.c,b.gcp())
r=C.e.n(this.d,b.gj1(b))
if(u<0)u=0
else if(u>1)u=1
if(t<0)t=0
else if(t>1)t=1
if(s<0)s=0
else if(s>1)s=1
if(r<0)r=0
else if(r>1)r=1
return new V.aU(u,t,s,r)},
u:function(a,b){var u,t
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.aU))return!1
u=b.a
t=$.I().a
if(!(Math.abs(u-this.a)<t))return!1
if(!(Math.abs(b.b-this.b)<t))return!1
if(!(Math.abs(b.c-this.c)<t))return!1
if(!(Math.abs(b.d-this.d)<t))return!1
return!0},
i:function(a){return"["+V.M(this.a,3,0)+", "+V.M(this.b,3,0)+", "+V.M(this.c,3,0)+", "+V.M(this.d,3,0)+"]"}}
V.em.prototype={}
V.d6.prototype={
af:function(a,b){var u=H.b([this.a,this.d,this.r,this.b,this.e,this.x,this.c,this.f,this.y],[P.t])
return u},
u:function(a,b){var u,t,s,r
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.d6))return!1
u=b.a
t=$.I()
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
if(typeof u!=="number")return u.n()
if(typeof r!=="number")return H.q(r)
if(!(Math.abs(u-r)<s))return!1
u=b.x
t=this.x
if(typeof u!=="number")return u.n()
if(typeof t!=="number")return H.q(t)
if(!(Math.abs(u-t)<s))return!1
u=b.y
t=this.y
if(typeof u!=="number")return u.n()
if(typeof t!=="number")return H.q(t)
if(!(Math.abs(u-t)<s))return!1
return!0},
i:function(a){var u,t,s,r,q,p,o,n
u=[P.t]
t=V.bJ(H.b([this.a,this.d,this.r],u),3,0)
s=V.bJ(H.b([this.b,this.e,this.x],u),3,0)
r=V.bJ(H.b([this.c,this.f,this.y],u),3,0)
u=t.length
if(0>=u)return H.c(t,0)
q="["+t[0]+", "
p=s.length
if(0>=p)return H.c(s,0)
q=q+s[0]+", "
o=r.length
if(0>=o)return H.c(r,0)
q=q+r[0]+",\n"
if(1>=u)return H.c(t,1)
n=" "+t[1]+", "
if(1>=p)return H.c(s,1)
n=n+s[1]+", "
if(1>=o)return H.c(r,1)
n=q+(n+r[1]+",\n")
if(2>=u)return H.c(t,2)
u=" "+t[2]+", "
if(2>=p)return H.c(s,2)
u=u+s[2]+", "
if(2>=o)return H.c(r,2)
return n+(u+r[2]+"]")}}
V.ae.prototype={
af:function(a,b){var u=H.b([this.a,this.e,this.y,this.cx,this.b,this.f,this.z,this.cy,this.c,this.r,this.Q,this.db,this.d,this.x,this.ch,this.dx],[P.t])
return u},
eq:function(){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0
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
if(typeof g!=="number")return g.k()
e=this.z
d=this.cx
if(typeof e!=="number")return e.k()
c=g*f-e*d
b=this.db
a=this.Q
if(typeof a!=="number")return a.k()
a0=g*b-a*d
a1=this.dx
a2=this.ch
a3=g*a1-a2*d
a4=e*b-a*f
a5=e*a1-a2*f
a6=a*a1-a2*b
a7=q*a6-n*a5+k*a4+j*a3-i*a0+h*c
if(Math.abs(a7-0)<$.I().a)return V.d7()
a8=1/a7
a9=-r
b0=-d
return V.aI((t*a6-p*a5+m*a4)*a8,(-s*a6+o*a5-l*a4)*a8,(f*h-b*i+a1*j)*a8,(-e*h+a*i-a2*j)*a8,(a9*a6+p*a3-m*a0)*a8,(u*a6-o*a3+l*a0)*a8,(b0*h+b*k-a1*n)*a8,(g*h-a*k+a2*n)*a8,(r*a5-t*a3+m*c)*a8,(-u*a5+s*a3-l*c)*a8,(d*i-f*k+a1*q)*a8,(-g*i+e*k-a2*q)*a8,(a9*a4+t*a0-p*c)*a8,(u*a4-s*a0+o*c)*a8,(b0*j+f*n-b*q)*a8,(g*j-e*n+a*q)*a8)},
k:function(b1,b2){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0
u=this.a
t=b2.a
s=this.b
r=b2.e
q=this.c
p=b2.y
if(typeof p!=="number")return H.q(p)
o=this.d
n=b2.cx
m=b2.b
l=b2.f
k=b2.z
if(typeof k!=="number")return H.q(k)
j=b2.cy
i=b2.c
h=b2.r
g=b2.Q
if(typeof g!=="number")return H.q(g)
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
if(typeof a3!=="number")return a3.k()
a4=this.z
if(typeof a4!=="number")return a4.k()
a5=this.Q
if(typeof a5!=="number")return a5.k()
a6=this.ch
a7=this.cx
a8=this.cy
a9=this.db
b0=this.dx
return V.aI(u*t+s*r+q*p+o*n,u*m+s*l+q*k+o*j,u*i+s*h+q*g+o*f,u*e+s*d+q*c+o*b,a*t+a0*r+a1*p+a2*n,a*m+a0*l+a1*k+a2*j,a*i+a0*h+a1*g+a2*f,a*e+a0*d+a1*c+a2*b,a3*t+a4*r+a5*p+a6*n,a3*m+a4*l+a5*k+a6*j,a3*i+a4*h+a5*g+a6*f,a3*e+a4*d+a5*c+a6*b,a7*t+a8*r+a9*p+b0*n,a7*m+a8*l+a9*k+b0*j,a7*i+a8*h+a9*g+b0*f,a7*e+a8*d+a9*c+b0*b)},
cZ:function(a){var u,t,s,r,q,p
u=a.a
t=a.b
s=a.c
if(typeof s!=="number")return H.q(s)
r=this.y
if(typeof r!=="number")return r.k()
q=this.z
if(typeof q!=="number")return q.k()
p=this.Q
if(typeof p!=="number")return p.k()
return new V.A(this.a*u+this.b*t+this.c*s,this.e*u+this.f*t+this.r*s,r*u+q*t+p*s)},
b9:function(a){var u,t,s,r,q,p
u=a.a
t=a.b
s=a.c
if(typeof s!=="number")return H.q(s)
r=this.y
if(typeof r!=="number")return r.k()
q=this.z
if(typeof q!=="number")return q.k()
p=this.Q
if(typeof p!=="number")return p.k()
return new V.T(this.a*u+this.b*t+this.c*s+this.d,this.e*u+this.f*t+this.r*s+this.x,r*u+q*t+p*s+this.ch)},
u:function(a,b){var u,t,s,r
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.ae))return!1
u=b.a
t=$.I()
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
if(typeof u!=="number")return u.n()
if(typeof r!=="number")return H.q(r)
if(!(Math.abs(u-r)<s))return!1
u=b.z
t=this.z
if(typeof u!=="number")return u.n()
if(typeof t!=="number")return H.q(t)
if(!(Math.abs(u-t)<s))return!1
u=b.Q
t=this.Q
if(typeof u!=="number")return u.n()
if(typeof t!=="number")return H.q(t)
if(!(Math.abs(u-t)<s))return!1
if(!(Math.abs(b.ch-this.ch)<s))return!1
if(!(Math.abs(b.cx-this.cx)<s))return!1
if(!(Math.abs(b.cy-this.cy)<s))return!1
if(!(Math.abs(b.db-this.db)<s))return!1
if(!(Math.abs(b.dx-this.dx)<s))return!1
return!0},
i:function(a){return this.L()},
ei:function(a,b,c){var u,t,s,r,q,p,o,n,m,l
u=[P.t]
t=V.bJ(H.b([this.a,this.e,this.y,this.cx],u),b,c)
s=V.bJ(H.b([this.b,this.f,this.z,this.cy],u),b,c)
r=V.bJ(H.b([this.c,this.r,this.Q,this.db],u),b,c)
q=V.bJ(H.b([this.d,this.x,this.ch,this.dx],u),b,c)
u=t.length
if(0>=u)return H.c(t,0)
p="["+t[0]+", "
o=s.length
if(0>=o)return H.c(s,0)
p=p+s[0]+", "
n=r.length
if(0>=n)return H.c(r,0)
p=p+r[0]+", "
m=q.length
if(0>=m)return H.c(q,0)
p=p+q[0]+",\n"
l=a+" "
if(1>=u)return H.c(t,1)
l=l+t[1]+", "
if(1>=o)return H.c(s,1)
l=l+s[1]+", "
if(1>=n)return H.c(r,1)
l=l+r[1]+", "
if(1>=m)return H.c(q,1)
l=p+(l+q[1]+",\n")
p=a+" "
if(2>=u)return H.c(t,2)
p=p+t[2]+", "
if(2>=o)return H.c(s,2)
p=p+s[2]+", "
if(2>=n)return H.c(r,2)
p=p+r[2]+", "
if(2>=m)return H.c(q,2)
p=l+(p+q[2]+",\n")
l=a+" "
if(3>=u)return H.c(t,3)
l=l+t[3]+", "
if(3>=o)return H.c(s,3)
l=l+s[3]+", "
if(3>=n)return H.c(r,3)
l=l+r[3]+", "
if(3>=m)return H.c(q,3)
return p+(l+q[3]+"]")},
L:function(){return this.ei("",3,0)},
C:function(a){return this.ei(a,3,0)}}
V.a6.prototype={
m:function(a,b){return new V.a6(this.a+b.a,this.b+b.b)},
n:function(a,b){return new V.a6(this.a-b.a,this.b-b.b)},
u:function(a,b){var u,t
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.a6))return!1
u=b.a
t=$.I().a
if(!(Math.abs(u-this.a)<t))return!1
if(!(Math.abs(b.b-this.b)<t))return!1
return!0},
i:function(a){return"["+V.M(this.a,3,0)+", "+V.M(this.b,3,0)+"]"}}
V.T.prototype={
m:function(a,b){var u,t
u=this.c
t=b.c
if(typeof u!=="number")return u.m()
if(typeof t!=="number")return H.q(t)
return new V.T(this.a+b.a,this.b+b.b,u+t)},
n:function(a,b){var u,t
u=this.c
t=b.c
if(typeof u!=="number")return u.n()
if(typeof t!=="number")return H.q(t)
return new V.T(this.a-b.a,this.b-b.b,u-t)},
k:function(a,b){var u=this.c
if(typeof u!=="number")return u.k()
return new V.T(this.a*b,this.b*b,u*b)},
u:function(a,b){var u,t,s,r
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.T))return!1
u=b.a
t=$.I()
s=t.a
if(!(Math.abs(u-this.a)<s))return!1
if(!(Math.abs(b.b-this.b)<s))return!1
u=b.c
r=this.c
t.toString
if(typeof u!=="number")return u.n()
if(typeof r!=="number")return H.q(r)
if(!(Math.abs(u-r)<s))return!1
return!0},
i:function(a){return"["+V.M(this.a,3,0)+", "+V.M(this.b,3,0)+", "+V.M(this.c,3,0)+"]"}}
V.b3.prototype={
m:function(a,b){return new V.b3(C.e.m(this.a,b.gkw(b)),C.e.m(this.b,b.gkx(b)),C.e.m(this.c,b.gky(b)),C.e.m(this.d,b.gkv()))},
n:function(a,b){return new V.b3(C.e.n(this.a,b.gkw(b)),C.e.n(this.b,b.gkx(b)),C.e.n(this.c,b.gky(b)),C.e.n(this.d,b.gkv()))},
u:function(a,b){var u,t
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.b3))return!1
u=b.a
t=$.I().a
if(!(Math.abs(u-this.a)<t))return!1
if(!(Math.abs(b.b-this.b)<t))return!1
if(!(Math.abs(b.c-this.c)<t))return!1
if(!(Math.abs(b.d-this.d)<t))return!1
return!0},
i:function(a){return"["+V.M(this.a,3,0)+", "+V.M(this.b,3,0)+", "+V.M(this.c,3,0)+", "+V.M(this.d,3,0)+"]"}}
V.di.prototype={
ga5:function(){var u,t
u=this.c
t=this.d
if(u>t)return t
else return u},
u:function(a,b){var u,t
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.di))return!1
u=b.a
t=$.I().a
if(!(Math.abs(u-this.a)<t))return!1
if(!(Math.abs(b.b-this.b)<t))return!1
if(!(Math.abs(b.c-this.c)<t))return!1
if(!(Math.abs(b.d-this.d)<t))return!1
return!0},
i:function(a){return"["+V.M(this.a,3,0)+", "+V.M(this.b,3,0)+", "+V.M(this.c,3,0)+", "+V.M(this.d,3,0)+"]"}}
V.L.prototype={
cL:function(a){return Math.sqrt(this.F(this))},
F:function(a){var u,t,s,r
u=this.a
t=a.a
if(typeof u!=="number")return u.k()
if(typeof t!=="number")return H.q(t)
s=this.b
r=a.b
if(typeof s!=="number")return s.k()
if(typeof r!=="number")return H.q(r)
return u*t+s*r},
m:function(a,b){var u,t,s
u=this.a
t=b.gjq(b)
if(typeof u!=="number")return u.m()
t=C.e.m(u,t)
u=this.b
s=b.gjr(b)
if(typeof u!=="number")return u.m()
return new V.L(t,C.e.m(u,s))},
n:function(a,b){var u,t,s
u=this.a
t=b.gjq(b)
if(typeof u!=="number")return u.n()
t=C.e.n(u,t)
u=this.b
s=b.gjr(b)
if(typeof u!=="number")return u.n()
return new V.L(t,C.e.n(u,s))},
k:function(a,b){var u,t
u=this.a
if(typeof u!=="number")return u.k()
t=this.b
if(typeof t!=="number")return t.k()
return new V.L(u*b,t*b)},
w:function(a,b){var u,t
if(Math.abs(b-0)<$.I().a){u=$.k_
if(u==null){u=new V.L(0,0)
$.k_=u}return u}u=this.a
if(typeof u!=="number")return u.w()
t=this.b
if(typeof t!=="number")return t.w()
return new V.L(u/b,t/b)},
u:function(a,b){var u,t,s
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.L))return!1
u=b.a
t=this.a
s=$.I()
s.toString
if(typeof u!=="number")return u.n()
if(typeof t!=="number")return H.q(t)
s=s.a
if(!(Math.abs(u-t)<s))return!1
u=b.b
t=this.b
if(typeof u!=="number")return u.n()
if(typeof t!=="number")return H.q(t)
if(!(Math.abs(u-t)<s))return!1
return!0},
i:function(a){return"["+V.M(this.a,3,0)+", "+V.M(this.b,3,0)+"]"}}
V.A.prototype={
cL:function(a){return Math.sqrt(this.F(this))},
F:function(a){var u,t
u=this.c
t=a.c
if(typeof u!=="number")return u.k()
if(typeof t!=="number")return H.q(t)
return this.a*a.a+this.b*a.b+u*t},
cM:function(a,b){var u,t,s,r
u=this.a
t=this.b
s=this.c
r=a.c
if(typeof r!=="number")return r.n()
if(typeof s!=="number")return H.q(s)
return new V.A(u+b*(a.a-u),t+b*(a.b-t),s+b*(r-s))},
aw:function(a){var u,t,s,r,q,p
u=this.b
t=a.c
if(typeof t!=="number")return H.q(t)
s=this.c
r=a.b
if(typeof s!=="number")return s.k()
q=a.a
p=this.a
return new V.A(u*t-s*r,s*q-p*t,p*r-u*q)},
m:function(a,b){var u,t,s,r
u=b.a
t=b.b
s=this.c
r=b.c
if(typeof s!=="number")return s.m()
if(typeof r!=="number")return H.q(r)
return new V.A(this.a+u,this.b+t,s+r)},
n:function(a,b){var u,t
u=this.c
t=b.c
if(typeof u!=="number")return u.n()
if(typeof t!=="number")return H.q(t)
return new V.A(this.a-b.a,this.b-b.b,u-t)},
P:function(a){var u=this.c
if(typeof u!=="number")return u.P()
return new V.A(-this.a,-this.b,-u)},
k:function(a,b){var u=this.c
if(typeof u!=="number")return u.k()
return new V.A(this.a*b,this.b*b,u*b)},
w:function(a,b){var u
if(Math.abs(b-0)<$.I().a)return V.ck()
u=this.c
if(typeof u!=="number")return u.w()
return new V.A(this.a/b,this.b/b,u/b)},
er:function(){var u,t,s
u=$.I()
t=u.a
if(!(Math.abs(0-this.a)<t))return!1
if(!(Math.abs(0-this.b)<t))return!1
s=this.c
u.toString
if(typeof s!=="number")return H.q(s)
if(!(Math.abs(0-s)<t))return!1
return!0},
u:function(a,b){var u,t,s,r
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.A))return!1
u=b.a
t=$.I()
s=t.a
if(!(Math.abs(u-this.a)<s))return!1
if(!(Math.abs(b.b-this.b)<s))return!1
u=b.c
r=this.c
t.toString
if(typeof u!=="number")return u.n()
if(typeof r!=="number")return H.q(r)
if(!(Math.abs(u-r)<s))return!1
return!0},
i:function(a){return"["+V.M(this.a,3,0)+", "+V.M(this.b,3,0)+", "+V.M(this.c,3,0)+"]"}}
U.eb.prototype={
bS:function(a){var u=V.mZ(a,this.c,this.b)
return u},
gB:function(){var u=this.y
if(u==null){u=D.K()
this.y=u}return u},
O:function(a){var u=this.y
if(u!=null)u.H(a)},
sd_:function(a,b){},
scN:function(a){var u,t
u=this.b
if(!(Math.abs(u-a)<$.I().a)){this.b=a
if(a<this.c){this.c=a
this.d=a}else{t=this.d
if(a<t)this.d=this.bS(t)}u=new D.H("maximumLocation",u,this.b,this,[P.t])
u.b=!0
this.O(u)}},
scP:function(a){var u,t
u=this.c
if(!(Math.abs(u-a)<$.I().a)){this.c=a
if(this.b<a){this.b=a
this.d=a}else{t=this.d
if(a>t)this.d=this.bS(t)}u=new D.H("minimumLocation",u,this.c,this,[P.t])
u.b=!0
this.O(u)}},
sZ:function(a,b){var u
b=this.bS(b)
u=this.d
if(!(Math.abs(u-b)<$.I().a)){this.d=b
u=new D.H("location",u,b,this,[P.t])
u.b=!0
this.O(u)}},
scO:function(a){var u,t,s
u=this.e
if(!(Math.abs(u-a)<$.I().a)){this.e=a
t=this.f
s=-a
if(t<s)t=s
else if(t>a)t=a
this.f=t
u=new D.H("maximumVelocity",u,a,this,[P.t])
u.b=!0
this.O(u)}},
sT:function(a){var u,t
u=this.e
t=-u
if(a<t)a=t
else if(a>u)a=u
u=this.f
if(!(Math.abs(u-a)<$.I().a)){this.f=a
u=new D.H("velocity",u,a,this,[P.t])
u.b=!0
this.O(u)}},
scw:function(a){var u
if(a<0)a=0
else if(a>1)a=1
u=this.x
if(!(Math.abs(u-a)<$.I().a)){this.x=a
u=new D.H("dampening",u,a,this,[P.t])
u.b=!0
this.O(u)}},
aq:function(a){var u,t,s,r,q
u=this.f
t=$.I().a
if(!(Math.abs(u-0)<t)||!(Math.abs(this.r-0)<t)){s=u+this.r*a
u=this.e
r=-u
if(s<r)s=r
else if(s>u)s=u
this.sZ(0,this.d+s*a)
u=this.x
if(!(Math.abs(u-0)<$.I().a)){q=s*Math.pow(1-u,a)
if(s<0){if(q<s)q=s
else if(q>0)q=0}else if(q<0)q=0
else if(q>s)q=s
s=q}this.sT(s)}}}
U.cM.prototype={
gB:function(){var u=this.b
if(u==null){u=D.K()
this.b=u}return u},
aN:function(a,b){return this.a},
u:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.cM))return!1
return J.J(this.a,b.a)},
i:function(a){return"Constant: "+this.a.C("          ")}}
U.bX.prototype={
gB:function(){var u=this.e
if(u==null){u=D.K()
this.e=u}return u},
O:function(a){var u
H.e(a,"$ix")
u=this.e
if(u!=null)u.H(a)},
a3:function(){return this.O(null)},
h8:function(a,b){var u,t,s,r,q,p,o,n
u=U.a2
H.h(b,"$in",[u],"$an")
for(t=b.length,s=this.gaA(),r={func:1,ret:-1,args:[D.x]},q=[r],p=0;p<b.length;b.length===t||(0,H.z)(b),++p){o=b[p]
if(o!=null){n=o.gB()
n.toString
H.j(s,r)
if(n.a==null)n.sag(H.b([],q))
n=n.a;(n&&C.a).h(n,s)}}u=new D.bu(a,b,this,[u])
u.b=!0
this.O(u)},
hP:function(a,b){var u,t,s
u=U.a2
H.h(b,"$in",[u],"$an")
for(t=b.gU(b),s=this.gaA();t.E();)t.gJ().gB().K(0,s)
u=new D.bv(a,b,this,[u])
u.b=!0
this.O(u)},
aN:function(a,b){var u,t,s,r
u=this.r
t=a.e
if(typeof u!=="number")return u.V()
if(u<t){this.r=t
u=this.e
if(u!=null)++u.d
for(u=this.a,u=new J.aj(u,u.length,0,[H.r(u,0)]),s=null;u.E();){t=u.d
if(t!=null){r=t.aN(a,b)
if(r!=null)s=s==null?r:r.k(0,s)}}this.f=s==null?V.d7():s
u=this.e
if(u!=null)u.a7()}return this.f},
u:function(a,b){var u,t,s,r
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.bX))return!1
u=this.a.length
for(t=0;t<u;++t){s=this.a
if(t>=s.length)return H.c(s,t)
s=s[t]
r=b.a
if(t>=r.length)return H.c(r,t)
if(!J.J(s,r[t]))return!1}return!0},
i:function(a){return"Group"},
$an:function(){return[U.a2]},
$aV:function(){return[U.a2]},
$ia2:1}
U.a2.prototype={}
U.dE.prototype={
gB:function(){var u=this.cy
if(u==null){u=D.K()
this.cy=u}return u},
O:function(a){var u
H.e(a,"$ix")
u=this.cy
if(u!=null)u.H(a)},
a3:function(){return this.O(null)},
aT:function(a){if(this.a!=null)return!1
this.a=a
a.c.gdV().h(0,this.gc_())
this.a.c.ges().h(0,this.gc1())
this.a.c.gbH().h(0,this.gc3())
return!0},
c0:function(a){H.e(a,"$ix")
if(!J.J(this.c,this.a.b.c))return
this.y=!0
this.x=!0
this.z=this.b.d},
c2:function(a){var u,t,s,r,q,p,o
a=H.f(H.e(a,"$ix"),"$ib0")
if(!this.y)return
if(this.x){u=a.d.n(0,a.y)
u=new V.L(u.a,u.b)
u=u.F(u)
t=this.r
if(typeof t!=="number")return H.q(t)
if(u<t)return
this.x=!1}if(this.d){u=a.c
t=a.d.n(0,a.y)
u=new V.L(t.a,t.b).k(0,2).w(0,u.ga5())
this.Q=u
t=this.b
u=u.a
if(typeof u!=="number")return u.k()
s=this.e
if(typeof s!=="number")return H.q(s)
t.sT(u*10*s)}else{u=a.c
t=a.d
s=t.n(0,a.y)
r=new V.L(s.a,s.b).k(0,2).w(0,u.ga5())
s=this.b
q=r.a
if(typeof q!=="number")return q.P()
p=this.e
if(typeof p!=="number")return H.q(p)
o=this.z
if(typeof o!=="number")return H.q(o)
s.sZ(0,-q*p+o)
this.b.sT(0)
t=t.n(0,a.z)
this.Q=new V.L(t.a,t.b).k(0,2).w(0,u.ga5())}this.a3()},
c4:function(a){var u,t,s
H.e(a,"$ix")
if(!this.y)return
this.y=!1
if(this.x)return
u=this.Q
if(u.F(u)>0.0001){u=this.b
t=this.Q.a
if(typeof t!=="number")return t.k()
s=this.e
if(typeof s!=="number")return H.q(s)
u.sT(t*10*s)
this.a3()}},
aN:function(a,b){var u,t,s,r,q
u=this.ch
t=a.e
if(typeof u!=="number")return u.V()
if(u<t){this.ch=t
s=a.y
this.b.aq(s)
u=this.b.d
r=Math.cos(u)
q=Math.sin(u)
this.cx=V.aI(r,-q,0,0,q,r,0,0,0,0,1,0,0,0,0,1)}return this.cx},
$ia2:1}
U.dF.prototype={
gB:function(){var u=this.fx
if(u==null){u=D.K()
this.fx=u}return u},
O:function(a){var u
H.e(a,"$ix")
u=this.fx
if(u!=null)u.H(a)},
a3:function(){return this.O(null)},
aT:function(a){var u,t
if(this.a!=null)return!1
this.a=a
a.c.gdV().h(0,this.gc_())
this.a.c.ges().h(0,this.gc1())
this.a.c.gbH().h(0,this.gc3())
u=this.a.d
t=u.f
if(t==null){t=D.K()
u.f=t
u=t}else u=t
u.h(0,this.gh1())
u=this.a.d
t=u.d
if(t==null){t=D.K()
u.d=t
u=t}else u=t
u.h(0,this.gh3())
u=this.a.e
t=u.b
if(t==null){t=D.K()
u.b=t
u=t}else u=t
u.h(0,this.giv())
u=this.a.e
t=u.d
if(t==null){t=D.K()
u.d=t
u=t}else u=t
u.h(0,this.git())
u=this.a.e
t=u.c
if(t==null){t=D.K()
u.c=t
u=t}else u=t
u.h(0,this.gir())
return!0},
am:function(a){var u,t
u=a.a
t=a.b
if(this.f){if(typeof u!=="number")return u.P()
u=-u}if(this.r){if(typeof t!=="number")return t.P()
t=-t}return new V.L(u,t)},
c0:function(a){a=H.f(H.e(a,"$ix"),"$ib0")
if(!J.J(this.d,a.x.b))return
this.cx=!0
this.ch=!0
this.cy=this.c.d
this.db=this.b.d},
c2:function(a){var u,t,s,r,q,p,o
a=H.f(H.e(a,"$ix"),"$ib0")
if(!this.cx)return
if(this.ch){u=a.d.n(0,a.y)
u=new V.L(u.a,u.b)
u=u.F(u)
t=this.Q
if(typeof t!=="number")return H.q(t)
if(u<t)return
this.ch=!1}if(this.e){u=a.c
t=a.d.n(0,a.y)
u=this.am(new V.L(t.a,t.b).k(0,2).w(0,u.ga5()))
this.dx=u
t=this.c
u=u.a
if(typeof u!=="number")return u.P()
s=this.y
if(typeof s!=="number")return H.q(s)
t.sT(-u*10*s)
s=this.b
u=this.dx.b
if(typeof u!=="number")return u.P()
t=this.x
if(typeof t!=="number")return H.q(t)
s.sT(-u*10*t)}else{u=a.c
t=a.d
s=t.n(0,a.y)
r=this.am(new V.L(s.a,s.b).k(0,2).w(0,u.ga5()))
s=this.c
q=r.a
if(typeof q!=="number")return q.P()
p=this.y
if(typeof p!=="number")return H.q(p)
o=this.cy
if(typeof o!=="number")return H.q(o)
s.sZ(0,-q*p+o)
o=this.b
p=r.b
if(typeof p!=="number")return p.P()
q=this.x
if(typeof q!=="number")return H.q(q)
s=this.db
if(typeof s!=="number")return H.q(s)
o.sZ(0,-p*q+s)
this.b.sT(0)
this.c.sT(0)
t=t.n(0,a.z)
this.dx=this.am(new V.L(t.a,t.b).k(0,2).w(0,u.ga5()))}this.a3()},
c4:function(a){var u,t,s
H.e(a,"$ix")
if(!this.cx)return
this.cx=!1
if(this.ch)return
u=this.dx
if(u.F(u)>0.0001){u=this.c
t=this.dx.a
if(typeof t!=="number")return t.P()
s=this.y
if(typeof s!=="number")return H.q(s)
u.sT(-t*10*s)
s=this.b
t=this.dx.b
if(typeof t!=="number")return t.P()
u=this.x
if(typeof u!=="number")return H.q(u)
s.sT(-t*10*u)
this.a3()}},
h2:function(a){if(H.f(H.e(a,"$ix"),"$id2").x){this.ch=!0
this.cy=this.c.d
this.db=this.b.d}},
h4:function(a){var u,t,s,r,q,p,o
a=H.f(H.e(a,"$ix"),"$ib0")
if(!J.J(this.d,a.x.b))return
u=a.c
t=a.d
s=t.n(0,a.y)
r=this.am(new V.L(s.a,s.b).k(0,2).w(0,u.ga5()))
s=this.c
q=r.a
if(typeof q!=="number")return q.P()
p=this.y
if(typeof p!=="number")return H.q(p)
o=this.cy
if(typeof o!=="number")return H.q(o)
s.sZ(0,-q*p+o)
o=this.b
p=r.b
if(typeof p!=="number")return p.P()
q=this.x
if(typeof q!=="number")return H.q(q)
s=this.db
if(typeof s!=="number")return H.q(s)
o.sZ(0,-p*q+s)
this.b.sT(0)
this.c.sT(0)
t=t.n(0,a.z)
this.dx=this.am(new V.L(t.a,t.b).k(0,2).w(0,u.ga5()))
this.a3()},
iw:function(a){H.e(a,"$ix")
this.cx=!0
this.ch=!0
this.cy=this.c.d
this.db=this.b.d},
iu:function(a){var u,t,s,r,q,p,o
a=H.f(H.e(a,"$ix"),"$idy")
if(!this.cx)return
if(this.ch){u=a.d.n(0,a.y)
u=new V.L(u.a,u.b)
u=u.F(u)
t=this.Q
if(typeof t!=="number")return H.q(t)
if(u<t)return
this.ch=!1}if(this.e){u=a.c
t=a.d.n(0,a.y)
u=this.am(new V.L(t.a,t.b).k(0,2).w(0,u.ga5()))
this.dx=u
t=this.c
u=u.a
if(typeof u!=="number")return u.P()
s=this.y
if(typeof s!=="number")return H.q(s)
t.sT(-u*10*s)
s=this.b
u=this.dx.b
if(typeof u!=="number")return u.P()
t=this.x
if(typeof t!=="number")return H.q(t)
s.sT(-u*10*t)}else{u=a.c
t=a.d
s=t.n(0,a.y)
r=this.am(new V.L(s.a,s.b).k(0,2).w(0,u.ga5()))
s=this.c
q=r.a
if(typeof q!=="number")return q.P()
p=this.y
if(typeof p!=="number")return H.q(p)
o=this.cy
if(typeof o!=="number")return H.q(o)
s.sZ(0,-q*p+o)
o=this.b
p=r.b
if(typeof p!=="number")return p.P()
q=this.x
if(typeof q!=="number")return H.q(q)
s=this.db
if(typeof s!=="number")return H.q(s)
o.sZ(0,-p*q+s)
this.b.sT(0)
this.c.sT(0)
t=t.n(0,a.z)
this.dx=this.am(new V.L(t.a,t.b).k(0,2).w(0,u.ga5()))}this.a3()},
is:function(a){var u,t,s
H.e(a,"$ix")
if(!this.cx)return
this.cx=!1
if(this.ch)return
u=this.dx
if(u.F(u)>0.0001){u=this.c
t=this.dx.a
if(typeof t!=="number")return t.P()
s=this.y
if(typeof s!=="number")return H.q(s)
u.sT(-t*10*s)
s=this.b
t=this.dx.b
if(typeof t!=="number")return t.P()
u=this.x
if(typeof u!=="number")return H.q(u)
s.sT(-t*10*u)
this.a3()}},
aN:function(a,b){var u,t,s,r,q
u=this.dy
t=a.e
if(typeof u!=="number")return u.V()
if(u<t){this.dy=t
s=a.y
this.c.aq(s)
this.b.aq(s)
u=this.b.d
r=Math.cos(u)
q=Math.sin(u)
u=V.aI(1,0,0,0,0,r,-q,0,0,q,r,0,0,0,0,1)
t=this.c.d
r=Math.cos(t)
q=Math.sin(t)
this.fr=u.k(0,V.aI(r,0,-q,0,0,1,0,0,q,0,r,0,0,0,0,1))}return this.fr},
$ia2:1}
U.dG.prototype={
gB:function(){var u=this.r
if(u==null){u=D.K()
this.r=u}return u},
O:function(a){var u=this.r
if(u!=null)u.H(a)},
aT:function(a){var u,t,s
if(this.a!=null)return!1
this.a=a
u=a.c
t=u.e
if(t==null){t=D.K()
u.e=t
u=t}else u=t
t=this.gh5()
u.h(0,t)
u=this.a.d
s=u.e
if(s==null){s=D.K()
u.e=s
u=s}else u=s
u.h(0,t)
return!0},
h6:function(a){var u,t,s,r
H.e(a,"$ix")
if(!J.J(this.b,this.a.b.c))return
H.f(a,"$ic1")
u=this.d
t=a.x.b
s=this.c
if(typeof t!=="number")return t.k()
r=u+t*s
if(u!==r){this.d=r
u=new D.H("zoom",u,r,this,[P.t])
u.b=!0
this.O(u)}},
aN:function(a,b){var u,t,s
u=this.e
t=a.e
if(u<t){this.e=t
s=Math.pow(10,this.d)
this.f=V.aI(s,0,0,0,0,s,0,0,0,0,s,0,0,0,0,1)}return this.f},
$ia2:1}
M.cP.prototype={
aC:function(a){var u
H.e(a,"$ix")
u=this.x
if(u!=null)u.H(a)},
fi:function(){return this.aC(null)},
hk:function(a,b){var u,t,s,r,q,p,o,n
u=E.ad
H.h(b,"$in",[u],"$an")
for(t=b.length,s=this.gaB(),r={func:1,ret:-1,args:[D.x]},q=[r],p=0;p<b.length;b.length===t||(0,H.z)(b),++p){o=b[p]
if(o!=null){n=o.z
if(n==null){n=new D.bp()
n.sag(null)
n.sbd(null)
n.c=null
n.d=0
o.z=n}H.j(s,r)
if(n.a==null)n.sag(H.b([],q))
n=n.a;(n&&C.a).h(n,s)}}u=new D.bu(a,b,this,[u])
u.b=!0
this.aC(u)},
hm:function(a,b){var u,t,s
u=E.ad
H.h(b,"$in",[u],"$an")
for(t=b.gU(b),s=this.gaB();t.E();)t.gJ().gB().K(0,s)
u=new D.bv(a,b,this,[u])
u.b=!0
this.aC(u)},
gB:function(){var u=this.x
if(u==null){u=D.K()
this.x=u}return u},
aL:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g
a.eF(this.c)
u=this.b
u.toString
t=a.a
C.b.co(t,36160,null)
C.b.cA(t,2884)
C.b.cA(t,2929)
C.b.jl(t,513)
s=t.drawingBufferWidth
r=t.drawingBufferHeight
q=u.r
p=q.a
if(typeof s!=="number")return H.q(s)
o=C.e.aj(p*s)
p=q.b
if(typeof r!=="number")return H.q(r)
n=C.e.aj(p*r)
p=C.e.aj(q.c*s)
a.c=p
q=C.e.aj(q.d*r)
a.d=q
C.b.ku(t,o,n,p,q)
C.b.ja(t,u.c)
u=u.a
C.b.j9(t,u.a,u.b,u.c,u.d)
C.b.j8(t,16640)
u=this.a
t=a.c
q=a.d
p=u.c
m=u.d
l=u.e
k=l-m
j=1/Math.tan(p*0.5)
i=V.aI(-j/(t/q),0,0,0,0,j,0,0,0,0,l/k,-l*m/k,0,0,1,0)
u.a
a.cy.eE(i)
t=$.jJ
if(t==null){t=V.jL()
q=V.k4()
p=$.k0
if(p==null){p=new V.A(0,0,-1)
$.k0=p}p=V.jF(t,q,p)
$.jJ=p
h=p}else h=t
u=u.b
if(u!=null){g=u.a
if(g!=null)h=g.k(0,h)}a.db.eE(h)
for(u=this.d.a,u=new J.aj(u,u.length,0,[H.r(u,0)]);u.E();)u.d.aq(a)
for(u=this.d.a,u=new J.aj(u,u.length,0,[H.r(u,0)]);u.E();)u.d.aL(a)
this.a.toString
a.cy.cR()
a.db.cR()
this.b.toString
a.eD()},
sfD:function(a,b){this.d=H.h(b,"$iV",[E.ad],"$aV")},
$in5:1}
A.cF.prototype={}
A.e4.prototype={
j:function(a,b){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<t;++s){r=u[s]
if(r.b===b)return r}return},
jt:function(){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<u.length;u.length===t||(0,H.z)(u),++s){r=u[s]
C.b.dW(r.a,r.c)}},
jn:function(){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<u.length;u.length===t||(0,H.z)(u),++s){r=u[s]
C.b.dU(r.a,r.c)}}}
A.eP.prototype={
f8:function(a7,a8){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6
this.z=a7
u=new P.af("")
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
a7.iE(u)
a7.iL(u)
a7.iF(u)
a7.iT(u)
a7.iU(u)
a7.iN(u)
a7.iY(u)
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
u=new P.af("")
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
s.iI(u)
s.iD(u)
s.iG(u)
s.iJ(u)
s.iR(u)
p=s.dy
if(p){m=u.a+="// === Enviromental ===\n"
m+="\n"
u.a=m
m+="uniform samplerCube envSampler;\n"
u.a=m
m+="uniform int nullEnvTxt;\n"
u.a=m
u.a=m+"\n"
s.iP(u)
s.iQ(u)}s.iM(u)
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
k=H.b([],[P.k])
if(s.b!==C.d)C.a.h(k,"ambient()")
if(s.c!==C.d)C.a.h(k,"diffuse(norm, litVec)")
if(s.d!==C.d)C.a.h(k,"invDiffuse(norm, litVec)")
if(s.e!==C.d)C.a.h(k,"specular(norm, litVec)")
m=u.a+="   return litClr*("+C.a.D(k," + ")+");\n"
m+="}\n"
u.a=m
u.a=m+"\n"
s.iH(u)
s.iO(u)
s.iS(u)
s.iV(u)
s.iW(u)
s.iX(u)
s.iK(u)}m=u.a+="// === Main ===\n"
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
j=H.b([],[P.k])
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
this.e=this.dm(n,35633)
this.f=this.dm(this.d,35632)
s=this.a
q=s.createProgram()
this.r=q
C.b.dO(s,q,this.e)
C.b.dO(s,this.r,this.f)
C.b.jH(s,this.r)
if(!H.kr(C.b.bN(s,this.r,35714))){h=C.b.eW(s,this.r)
C.b.jh(s,this.r)
H.p(P.u("Failed to link shader: "+H.i(h)))}this.ie()
this.ih()
this.Q=this.x.j(0,"posAttr")
this.cx=this.x.j(0,"normAttr")
this.ch=this.x.j(0,"binmAttr")
this.cy=this.x.j(0,"txt2DAttr")
this.db=this.x.j(0,"txtCubeAttr")
this.dx=this.x.j(0,"bendAttr")
if(a7.fr)this.id=H.f(this.y.p(0,"invViewMat"),"$ian")
if(t)this.dy=H.f(this.y.p(0,"objMat"),"$ian")
if(r)this.fr=H.f(this.y.p(0,"viewObjMat"),"$ian")
this.fy=H.f(this.y.p(0,"projViewObjMat"),"$ian")
if(a7.x2)this.k1=H.f(this.y.p(0,"txt2DMat"),"$icd")
if(a7.y1)this.k2=H.f(this.y.p(0,"txtCubeMat"),"$ian")
if(a7.y2)this.k3=H.f(this.y.p(0,"colorMat"),"$ian")
this.sfz(H.b([],[A.an]))
t=a7.ap
if(t>0){this.k4=H.e(this.y.p(0,"bendMatCount"),"$iC")
for(g=0;g<t;++g){s=this.r1
r=this.y
q="bendValues["+g+"].mat"
f=r.j(0,q)
if(f==null)H.p(P.u("Required uniform value, "+q+", was not defined or used in shader."));(s&&C.a).h(s,H.f(f,"$ian"))}}t=a7.a
if(t!==C.d){this.r2=H.f(this.y.p(0,"emissionClr"),"$iB")
switch(t){case C.d:break
case C.j:break
case C.h:this.rx=H.f(this.y.p(0,"emissionTxt"),"$iag")
this.x1=H.f(this.y.p(0,"nullEmissionTxt"),"$iC")
break
case C.i:this.ry=H.f(this.y.p(0,"emissionTxt"),"$iah")
this.x1=H.f(this.y.p(0,"nullEmissionTxt"),"$iC")
break}}t=a7.b
if(t!==C.d){this.x2=H.f(this.y.p(0,"ambientClr"),"$iB")
switch(t){case C.d:break
case C.j:break
case C.h:this.y1=H.f(this.y.p(0,"ambientTxt"),"$iag")
this.ap=H.f(this.y.p(0,"nullAmbientTxt"),"$iC")
break
case C.i:this.y2=H.f(this.y.p(0,"ambientTxt"),"$iah")
this.ap=H.f(this.y.p(0,"nullAmbientTxt"),"$iC")
break}}t=a7.c
if(t!==C.d){this.ai=H.f(this.y.p(0,"diffuseClr"),"$iB")
switch(t){case C.d:break
case C.j:break
case C.h:this.bk=H.f(this.y.p(0,"diffuseTxt"),"$iag")
this.bl=H.f(this.y.p(0,"nullDiffuseTxt"),"$iC")
break
case C.i:this.dX=H.f(this.y.p(0,"diffuseTxt"),"$iah")
this.bl=H.f(this.y.p(0,"nullDiffuseTxt"),"$iC")
break}}t=a7.d
if(t!==C.d){this.bm=H.f(this.y.p(0,"invDiffuseClr"),"$iB")
switch(t){case C.d:break
case C.j:break
case C.h:this.dY=H.f(this.y.p(0,"invDiffuseTxt"),"$iag")
this.bn=H.f(this.y.p(0,"nullInvDiffuseTxt"),"$iC")
break
case C.i:this.dZ=H.f(this.y.p(0,"invDiffuseTxt"),"$iah")
this.bn=H.f(this.y.p(0,"nullInvDiffuseTxt"),"$iC")
break}}t=a7.e
if(t!==C.d){this.bq=H.f(this.y.p(0,"shininess"),"$iS")
this.bo=H.f(this.y.p(0,"specularClr"),"$iB")
switch(t){case C.d:break
case C.j:break
case C.h:this.e_=H.f(this.y.p(0,"specularTxt"),"$iag")
this.bp=H.f(this.y.p(0,"nullSpecularTxt"),"$iC")
break
case C.i:this.e0=H.f(this.y.p(0,"specularTxt"),"$iah")
this.bp=H.f(this.y.p(0,"nullSpecularTxt"),"$iC")
break}}switch(a7.f){case C.d:break
case C.j:break
case C.h:this.e1=H.f(this.y.p(0,"bumpTxt"),"$iag")
this.br=H.f(this.y.p(0,"nullBumpTxt"),"$iC")
break
case C.i:this.e2=H.f(this.y.p(0,"bumpTxt"),"$iah")
this.br=H.f(this.y.p(0,"nullBumpTxt"),"$iC")
break}if(a7.dy){this.e3=H.f(this.y.p(0,"envSampler"),"$iah")
this.e4=H.f(this.y.p(0,"nullEnvTxt"),"$iC")
t=a7.r
if(t!==C.d){this.bs=H.f(this.y.p(0,"reflectClr"),"$iB")
switch(t){case C.d:break
case C.j:break
case C.h:this.e5=H.f(this.y.p(0,"reflectTxt"),"$iag")
this.bt=H.f(this.y.p(0,"nullReflectTxt"),"$iC")
break
case C.i:this.e6=H.f(this.y.p(0,"reflectTxt"),"$iah")
this.bt=H.f(this.y.p(0,"nullReflectTxt"),"$iC")
break}}t=a7.x
if(t!==C.d){this.bu=H.f(this.y.p(0,"refraction"),"$iS")
this.bv=H.f(this.y.p(0,"refractClr"),"$iB")
switch(t){case C.d:break
case C.j:break
case C.h:this.e7=H.f(this.y.p(0,"refractTxt"),"$iag")
this.bw=H.f(this.y.p(0,"nullRefractTxt"),"$iC")
break
case C.i:this.e8=H.f(this.y.p(0,"refractTxt"),"$iah")
this.bw=H.f(this.y.p(0,"nullRefractTxt"),"$iC")
break}}}t=a7.y
if(t!==C.d){this.bx=H.f(this.y.p(0,"alpha"),"$iS")
switch(t){case C.d:break
case C.j:break
case C.h:this.e9=H.f(this.y.p(0,"alphaTxt"),"$iag")
this.by=H.f(this.y.p(0,"nullAlphaTxt"),"$iC")
break
case C.i:this.ea=H.f(this.y.p(0,"alphaTxt"),"$iah")
this.by=H.f(this.y.p(0,"nullAlphaTxt"),"$iC")
break}}this.sfj(H.b([],[A.cc]))
this.sfk(H.b([],[A.ce]))
this.sfl(H.b([],[A.cf]))
this.sfm(H.b([],[A.cg]))
this.sfn(H.b([],[A.ch]))
this.sfo(H.b([],[A.ci]))
if(a7.k2){t=a7.z
if(t>0){this.eb=H.e(this.y.p(0,"dirLightCount"),"$iC")
for(g=0;g<t;++g){s=this.y
r="dirLights["+g+"].viewDir"
f=s.j(0,r)
if(f==null)H.p(P.u("Required uniform value, "+r+", was not defined or used in shader."))
H.f(f,"$iB")
s=this.y
r="dirLights["+g+"].color"
e=s.j(0,r)
if(e==null)H.p(P.u("Required uniform value, "+r+", was not defined or used in shader."))
H.f(e,"$iB")
s=this.cB;(s&&C.a).h(s,new A.cc(g,f,e))}}t=a7.Q
if(t>0){this.ec=H.e(this.y.p(0,"pntLightCount"),"$iC")
for(g=0;g<t;++g){s=this.y
r="pntLights["+g+"].point"
f=s.j(0,r)
if(f==null)H.p(P.u("Required uniform value, "+r+", was not defined or used in shader."))
H.f(f,"$iB")
s=this.y
r="pntLights["+g+"].viewPnt"
e=s.j(0,r)
if(e==null)H.p(P.u("Required uniform value, "+r+", was not defined or used in shader."))
H.f(e,"$iB")
s=this.y
r="pntLights["+g+"].color"
d=s.j(0,r)
if(d==null)H.p(P.u("Required uniform value, "+r+", was not defined or used in shader."))
H.f(d,"$iB")
s=this.y
r="pntLights["+g+"].att0"
c=s.j(0,r)
if(c==null)H.p(P.u("Required uniform value, "+r+", was not defined or used in shader."))
H.f(c,"$iS")
s=this.y
r="pntLights["+g+"].att1"
b=s.j(0,r)
if(b==null)H.p(P.u("Required uniform value, "+r+", was not defined or used in shader."))
H.f(b,"$iS")
s=this.y
r="pntLights["+g+"].att2"
a=s.j(0,r)
if(a==null)H.p(P.u("Required uniform value, "+r+", was not defined or used in shader."))
H.f(a,"$iS")
s=this.cC;(s&&C.a).h(s,new A.ce(g,f,e,d,c,b,a))}}t=a7.ch
if(t>0){this.ed=H.e(this.y.p(0,"spotLightCount"),"$iC")
for(g=0;g<t;++g){s=this.y
r="spotLights["+g+"].objPnt"
f=s.j(0,r)
if(f==null)H.p(P.u("Required uniform value, "+r+", was not defined or used in shader."))
H.f(f,"$iB")
s=this.y
r="spotLights["+g+"].objDir"
e=s.j(0,r)
if(e==null)H.p(P.u("Required uniform value, "+r+", was not defined or used in shader."))
H.f(e,"$iB")
s=this.y
r="spotLights["+g+"].viewPnt"
d=s.j(0,r)
if(d==null)H.p(P.u("Required uniform value, "+r+", was not defined or used in shader."))
H.f(d,"$iB")
s=this.y
r="spotLights["+g+"].color"
c=s.j(0,r)
if(c==null)H.p(P.u("Required uniform value, "+r+", was not defined or used in shader."))
H.f(c,"$iB")
s=this.y
r="spotLights["+g+"].cutoff"
b=s.j(0,r)
if(b==null)H.p(P.u("Required uniform value, "+r+", was not defined or used in shader."))
H.f(b,"$iS")
s=this.y
r="spotLights["+g+"].coneAngle"
a=s.j(0,r)
if(a==null)H.p(P.u("Required uniform value, "+r+", was not defined or used in shader."))
H.f(a,"$iS")
s=this.y
r="spotLights["+g+"].att0"
a0=s.j(0,r)
if(a0==null)H.p(P.u("Required uniform value, "+r+", was not defined or used in shader."))
H.f(a0,"$iS")
s=this.y
r="spotLights["+g+"].att1"
a1=s.j(0,r)
if(a1==null)H.p(P.u("Required uniform value, "+r+", was not defined or used in shader."))
H.f(a1,"$iS")
s=this.y
r="spotLights["+g+"].att2"
a2=s.j(0,r)
if(a2==null)H.p(P.u("Required uniform value, "+r+", was not defined or used in shader."))
H.f(a2,"$iS")
s=this.cD;(s&&C.a).h(s,new A.cf(g,f,e,d,c,b,a,a0,a1,a2))}}t=a7.cx
if(t>0){this.ee=H.e(this.y.p(0,"txtDirLightCount"),"$iC")
for(g=0;g<t;++g){s=this.y
r="txtDirLights["+g+"].objUp"
f=s.j(0,r)
if(f==null)H.p(P.u("Required uniform value, "+r+", was not defined or used in shader."))
H.f(f,"$iB")
s=this.y
r="txtDirLights["+g+"].objRight"
e=s.j(0,r)
if(e==null)H.p(P.u("Required uniform value, "+r+", was not defined or used in shader."))
H.f(e,"$iB")
s=this.y
r="txtDirLights["+g+"].objDir"
d=s.j(0,r)
if(d==null)H.p(P.u("Required uniform value, "+r+", was not defined or used in shader."))
H.f(d,"$iB")
s=this.y
r="txtDirLights["+g+"].viewDir"
c=s.j(0,r)
if(c==null)H.p(P.u("Required uniform value, "+r+", was not defined or used in shader."))
H.f(c,"$iB")
s=this.y
r="txtDirLights["+g+"].color"
b=s.j(0,r)
if(b==null)H.p(P.u("Required uniform value, "+r+", was not defined or used in shader."))
H.f(b,"$iB")
s=this.y
r="txtDirLights["+g+"].nullTxt"
a=s.j(0,r)
if(a==null)H.p(P.u("Required uniform value, "+r+", was not defined or used in shader."))
H.f(a,"$iC")
s=this.y
r="txtDirLightsTxt2D"+g
a0=s.j(0,r)
if(a0==null)H.p(P.u("Required uniform value, "+r+", was not defined or used in shader."))
H.f(a0,"$iag")
s=this.cE;(s&&C.a).h(s,new A.cg(g,f,e,d,c,b,a0,a))}}t=a7.cy
if(t>0){this.ef=H.e(this.y.p(0,"txtPntLightCount"),"$iC")
for(g=0;g<t;++g){s=this.y
r="txtPntLights["+g+"].point"
f=s.j(0,r)
if(f==null)H.p(P.u("Required uniform value, "+r+", was not defined or used in shader."))
H.f(f,"$iB")
s=this.y
r="txtPntLights["+g+"].viewPnt"
e=s.j(0,r)
if(e==null)H.p(P.u("Required uniform value, "+r+", was not defined or used in shader."))
H.f(e,"$iB")
s=this.y
r="txtPntLights["+g+"].invViewRotMat"
d=s.j(0,r)
if(d==null)H.p(P.u("Required uniform value, "+r+", was not defined or used in shader."))
H.f(d,"$icd")
s=this.y
r="txtPntLights["+g+"].color"
c=s.j(0,r)
if(c==null)H.p(P.u("Required uniform value, "+r+", was not defined or used in shader."))
H.f(c,"$iB")
s=this.y
r="txtPntLights["+g+"].nullTxt"
b=s.j(0,r)
if(b==null)H.p(P.u("Required uniform value, "+r+", was not defined or used in shader."))
H.f(b,"$iC")
s=this.y
r="txtPntLights["+g+"].att0"
a=s.j(0,r)
if(a==null)H.p(P.u("Required uniform value, "+r+", was not defined or used in shader."))
H.f(a,"$iS")
s=this.y
r="txtPntLights["+g+"].att1"
a0=s.j(0,r)
if(a0==null)H.p(P.u("Required uniform value, "+r+", was not defined or used in shader."))
H.f(a0,"$iS")
s=this.y
r="txtPntLights["+g+"].att2"
a1=s.j(0,r)
if(a1==null)H.p(P.u("Required uniform value, "+r+", was not defined or used in shader."))
H.f(a1,"$iS")
s=this.y
r="txtPntLightsTxtCube"+g
a2=s.j(0,r)
if(a2==null)H.p(P.u("Required uniform value, "+r+", was not defined or used in shader."))
H.f(a2,"$iah")
s=this.cF;(s&&C.a).h(s,new A.ch(g,f,e,d,c,a2,b,a,a0,a1))}}t=a7.db
if(t>0){this.eg=H.e(this.y.p(0,"txtSpotLightCount"),"$iC")
for(g=0;g<t;++g){s=this.y
r="txtSpotLights["+g+"].objPnt"
f=s.j(0,r)
if(f==null)H.p(P.u("Required uniform value, "+r+", was not defined or used in shader."))
H.f(f,"$iB")
s=this.y
r="txtSpotLights["+g+"].objDir"
e=s.j(0,r)
if(e==null)H.p(P.u("Required uniform value, "+r+", was not defined or used in shader."))
H.f(e,"$iB")
s=this.y
r="txtSpotLights["+g+"].objUp"
d=s.j(0,r)
if(d==null)H.p(P.u("Required uniform value, "+r+", was not defined or used in shader."))
H.f(d,"$iB")
s=this.y
r="txtSpotLights["+g+"].objRight"
c=s.j(0,r)
if(c==null)H.p(P.u("Required uniform value, "+r+", was not defined or used in shader."))
H.f(c,"$iB")
s=this.y
r="txtSpotLights["+g+"].viewPnt"
b=s.j(0,r)
if(b==null)H.p(P.u("Required uniform value, "+r+", was not defined or used in shader."))
H.f(b,"$iB")
s=this.y
r="txtSpotLights["+g+"].nullTxt"
a=s.j(0,r)
if(a==null)H.p(P.u("Required uniform value, "+r+", was not defined or used in shader."))
H.f(a,"$iC")
s=this.y
r="txtSpotLights["+g+"].color"
a0=s.j(0,r)
if(a0==null)H.p(P.u("Required uniform value, "+r+", was not defined or used in shader."))
H.f(a0,"$iB")
s=this.y
r="txtSpotLights["+g+"].tuScalar"
a1=s.j(0,r)
if(a1==null)H.p(P.u("Required uniform value, "+r+", was not defined or used in shader."))
H.f(a1,"$iS")
s=this.y
r="txtSpotLights["+g+"].tvScalar"
a2=s.j(0,r)
if(a2==null)H.p(P.u("Required uniform value, "+r+", was not defined or used in shader."))
H.f(a2,"$iS")
s=this.y
r="txtSpotLights["+g+"].att0"
a3=s.j(0,r)
if(a3==null)H.p(P.u("Required uniform value, "+r+", was not defined or used in shader."))
H.f(a3,"$iS")
s=this.y
r="txtSpotLights["+g+"].att1"
a4=s.j(0,r)
if(a4==null)H.p(P.u("Required uniform value, "+r+", was not defined or used in shader."))
H.f(a4,"$iS")
s=this.y
r="txtSpotLights["+g+"].att2"
a5=s.j(0,r)
if(a5==null)H.p(P.u("Required uniform value, "+r+", was not defined or used in shader."))
H.f(a5,"$iS")
s=this.y
r="txtSpotLightsTxt2D"+g
a6=s.j(0,r)
if(a6==null)H.p(P.u("Required uniform value, "+r+", was not defined or used in shader."))
H.f(a6,"$iag")
s=this.cG;(s&&C.a).h(s,new A.ci(g,f,e,d,c,b,a6,a,a0,a1,a2,a3,a4,a5))}}}},
ah:function(a,b,c){C.b.S(b.a,b.d,1)},
ab:function(a,b,c){C.b.S(b.a,b.d,1)},
sfz:function(a){this.r1=H.h(a,"$ia",[A.an],"$aa")},
sfj:function(a){this.cB=H.h(a,"$ia",[A.cc],"$aa")},
sfk:function(a){this.cC=H.h(a,"$ia",[A.ce],"$aa")},
sfl:function(a){this.cD=H.h(a,"$ia",[A.cf],"$aa")},
sfm:function(a){this.cE=H.h(a,"$ia",[A.cg],"$aa")},
sfn:function(a){this.cF=H.h(a,"$ia",[A.ch],"$aa")},
sfo:function(a){this.cG=H.h(a,"$ia",[A.ci],"$aa")}}
A.eS.prototype={
iE:function(a){var u,t,s
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
iL:function(a){var u
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
iF:function(a){var u
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
iT:function(a){var u,t
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
iU:function(a){var u,t
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
iN:function(a){var u
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
iY:function(a){var u
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
if(b===C.d)return
u=a.a+="uniform vec3 "+c+"Clr;\n"
if(b===C.j)return
if(0>=c.length)return H.c(c,0)
u+="uniform int null"+(c[0].toUpperCase()+C.c.ay(c,1))+"Txt;\n"
a.a=u
if(b===C.h)a.a=u+("uniform sampler2D "+c+"Txt;\n")
else if(b===C.i)a.a=u+("uniform samplerCube "+c+"Txt;\n")},
iI:function(a){var u,t
u=this.a
if(u===C.d)return
t=a.a+="// === Emission ===\n"
a.a=t+"\n"
this.at(a,u,"emission")
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
iD:function(a){var u,t
u=this.b
if(u===C.d)return
t=a.a+="// === Ambient ===\n"
a.a=t+"\n"
this.at(a,u,"ambient")
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
iG:function(a){var u,t
u=this.c
if(u===C.d)return
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
iJ:function(a){var u,t
u=this.d
if(u===C.d)return
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
iR:function(a){var u,t
u=this.e
if(u===C.d)return
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
iM:function(a){var u,t
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
iP:function(a){var u,t
u=this.r
if(u===C.d)return
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
iQ:function(a){var u,t
u=this.x
if(u===C.d)return
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
iH:function(a){var u,t
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
iO:function(a){var u,t
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
iS:function(a){var u,t
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
iV:function(a){var u,t,s
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
iW:function(a){var u,t,s
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
iX:function(a){var u,t,s
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
iK:function(a){var u
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
A.cc.prototype={}
A.cg.prototype={}
A.ce.prototype={}
A.ch.prototype={}
A.cf.prototype={}
A.ci.prototype={}
A.c6.prototype={
fb:function(a,b){this.c=null
this.d=null
this.e=null
this.f=null
this.r=null
this.x=null
this.y=null},
dm:function(a,b){var u,t,s
u=this.a
t=C.b.jf(u,b)
C.b.f1(u,t,a)
C.b.jc(u,t)
if(!H.kr(C.b.eY(u,t,35713))){s=C.b.eX(u,t)
C.b.ji(u,t)
throw H.d(P.u("Error compiling shader '"+H.i(t)+"': "+H.i(s)))}return t},
ie:function(){var u,t,s,r,q,p
u=H.b([],[A.cF])
t=this.a
s=H.a7(C.b.bN(t,this.r,35721))
if(typeof s!=="number")return H.q(s)
r=0
for(;r<s;++r){q=C.b.eS(t,this.r,r)
p=C.b.eU(t,this.r,q.name)
C.a.h(u,new A.cF(t,q.name,p))}this.x=new A.e4(u)},
ih:function(){var u,t,s,r,q,p
u=H.b([],[A.dz])
t=this.a
s=H.a7(C.b.bN(t,this.r,35718))
if(typeof s!=="number")return H.q(s)
r=0
for(;r<s;++r){q=C.b.eT(t,this.r,r)
p=C.b.eZ(t,this.r,q.name)
C.a.h(u,this.jg(q.type,q.size,q.name,p))}this.y=new A.fN(u)},
aE:function(a,b,c){var u,t
u=this.a
t=this.r
if(a===1)return new A.C(u,t,b,c)
else return A.j0(u,t,b,a,c)},
fG:function(a,b,c){var u,t
u=this.a
t=this.r
if(a===1)return new A.ag(u,t,b,c)
else return A.j0(u,t,b,a,c)},
fH:function(a,b,c){var u,t
u=this.a
t=this.r
if(a===1)return new A.ah(u,t,b,c)
else return A.j0(u,t,b,a,c)},
bf:function(a,b){return new P.dL(a+" uniform variables are unsupported by all browsers.\n"+("Please change the type of "+H.i(b)+"."))},
jg:function(a,b,c,d){switch(a){case 5120:return this.aE(b,c,d)
case 5121:return this.aE(b,c,d)
case 5122:return this.aE(b,c,d)
case 5123:return this.aE(b,c,d)
case 5124:return this.aE(b,c,d)
case 5125:return this.aE(b,c,d)
case 5126:return new A.S(this.a,this.r,c,d)
case 35664:return new A.fI(this.a,this.r,c,d)
case 35665:return new A.B(this.a,this.r,c,d)
case 35666:return new A.fL(this.a,this.r,c,d)
case 35667:return new A.fJ(this.a,this.r,c,d)
case 35668:return new A.fK(this.a,this.r,c,d)
case 35669:return new A.fM(this.a,this.r,c,d)
case 35674:return new A.fO(this.a,this.r,c,d)
case 35675:return new A.cd(this.a,this.r,c,d)
case 35676:return new A.an(this.a,this.r,c,d)
case 35678:return this.fG(b,c,d)
case 35680:return this.fH(b,c,d)
case 35670:throw H.d(this.bf("BOOL",c))
case 35671:throw H.d(this.bf("BOOL_VEC2",c))
case 35672:throw H.d(this.bf("BOOL_VEC3",c))
case 35673:throw H.d(this.bf("BOOL_VEC4",c))
default:throw H.d(P.u("Unknown uniform variable type "+H.i(a)+" for "+H.i(c)+"."))}}}
A.bn.prototype={
i:function(a){return this.b}}
A.dz.prototype={}
A.fN.prototype={
j:function(a,b){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<t;++s){r=u[s]
if(r.c===b)return r}return},
p:function(a,b){var u=this.j(0,b)
if(u==null)throw H.d(P.u("Required uniform value, "+b+", was not defined or used in shader."))
return u},
i:function(a){return this.L()},
jz:function(a){var u,t,s,r
for(u=this.a,t=u.length,s="",r=0;r<u.length;u.length===t||(0,H.z)(u),++r)s+=u[r].i(0)+a
return s},
L:function(){return this.jz("\n")}}
A.C.prototype={
i:function(a){return"Uniform1i: "+H.i(this.c)}}
A.fJ.prototype={
i:function(a){return"Uniform2i: "+H.i(this.c)}}
A.fK.prototype={
i:function(a){return"Uniform3i: "+H.i(this.c)}}
A.fM.prototype={
i:function(a){return"Uniform4i: "+H.i(this.c)}}
A.fH.prototype={
i:function(a){return"Uniform1iv: "+H.i(this.c)},
siB:function(a){this.e=H.h(a,"$ia",[P.m],"$aa")}}
A.S.prototype={
i:function(a){return"Uniform1f: "+H.i(this.c)}}
A.fI.prototype={
i:function(a){return"Uniform2f: "+H.i(this.c)}}
A.B.prototype={
i:function(a){return"Uniform3f: "+H.i(this.c)}}
A.fL.prototype={
i:function(a){return"Uniform4f: "+H.i(this.c)}}
A.fO.prototype={
i:function(a){return"Uniform1Mat2 "+H.i(this.c)}}
A.cd.prototype={
al:function(a){var u=new Float32Array(H.bE(H.h(a,"$ia",[P.t],"$aa")))
C.b.eM(this.a,this.d,!1,u)},
i:function(a){return"UniformMat3: "+H.i(this.c)}}
A.an.prototype={
al:function(a){var u=new Float32Array(H.bE(H.h(a,"$ia",[P.t],"$aa")))
C.b.eN(this.a,this.d,!1,u)},
i:function(a){return"UniformMat4: "+H.i(this.c)}}
A.ag.prototype={
i:function(a){return"UniformSampler2D: "+H.i(this.c)}}
A.ah.prototype={
i:function(a){return"UniformSamplerCube: "+H.i(this.c)}}
F.hZ.prototype={
$3:function(a,b,c){var u,t,s
u=this.a
t=u.a.cM(u.b,b).cM(u.d.cM(u.c,b),c)
a.sZ(0,new V.T(t.a,t.b,t.c))
a.scY(t.w(0,Math.sqrt(t.F(t))))
u=1-b
s=1-c
a.scm(new V.b3(this.b+b*c,this.c+u*c,this.d+b*s,this.e+u*s))
u=this.f
if(u!=null)u.$3(a,b,c)},
$S:4}
F.i8.prototype={
$2:function(a,b){var u=this.a
return u+b*(this.b-u)},
$S:11}
F.ia.prototype={
$3:function(a,b,c){var u,t,s,r,q,p
u=6.283185307179586*b
t=Math.sin(u)
s=Math.cos(u)
r=-1+c*2
q=this.a.$2(b,c)
if(typeof q!=="number")return H.q(q)
t=-t*q
p=s*q
a.sZ(0,new V.T(t,p,r))
p=new V.A(t,p,r)
a.scY(p.w(0,Math.sqrt(p.F(p))))
a.scm(new V.b3(1-c,2+c,-1,-1))},
$S:4}
F.ik.prototype={
$3:function(a,b,c){var u,t,s,r
u=c*3.141592653589793
t=Math.sin(u)
s=b*6.283185307179586
r=new V.A(Math.cos(s)*t,Math.cos(u),Math.sin(s)*t)
s=r.w(0,Math.sqrt(r.F(r)))
a.sZ(0,new V.T(s.a,s.b,s.c))},
$S:4}
F.iI.prototype={
$2:function(a,b){return 0},
$S:11}
F.iJ.prototype={
$3:function(a,b,c){var u,t,s
u=this.a.a.$2(b,c)
if(typeof u!=="number")return H.q(u)
t=a.f
s=new V.A(t.a,t.b,t.c)
u=s.w(0,Math.sqrt(s.F(s))).k(0,this.b+u)
a.sZ(0,new V.T(u.a,u.b,u.c))},
$S:4}
F.iK.prototype={
$1:function(a){return new V.T(Math.cos(a),Math.sin(a),0)},
$S:42}
F.i9.prototype={
$3:function(a,b,c){var u,t,s,r,q,p,o,n,m,l
u=b*6.283185307179586
t=this.a
s=this.b
r=J.jp(t.$1(u),s)
s=J.kX(J.jp(t.$1(u+3.141592653589793/this.c),s),r)
s=new V.A(s.a,s.b,s.c)
q=s.w(0,Math.sqrt(s.F(s)))
t=$.k1
if(t==null){t=new V.A(1,0,0)
$.k1=t
p=t}else p=t
t=q.aw(!J.J(q,p)?V.k5():p)
o=t.w(0,Math.sqrt(t.F(t)))
t=o.aw(q)
p=t.w(0,Math.sqrt(t.F(t)))
n=c*6.283185307179586
t=Math.cos(n)
s=this.d
m=Math.sin(n)
t=p.k(0,t*s)
s=o.k(0,m*s)
m=t.c
l=s.c
if(typeof m!=="number")return m.n()
if(typeof l!=="number")return H.q(l)
a.sZ(0,J.kW(r,new V.T(t.a-s.a,t.b-s.b,m-l)))},
$S:4}
F.ic.prototype={
$2:function(a,b){return 0},
$S:11}
F.id.prototype={
$3:function(a,b,c){var u,t,s,r
u=b*2-1
t=c*2-1
a.sZ(0,new V.T(u,t,this.a.a.$2(b,c)))
s=new V.A(u,t,1)
a.scY(s.w(0,Math.sqrt(s.F(s))))
s=1-b
r=1-c
a.scm(new V.b3(b*c,2+s*c,4+b*r,6+s*r))},
$S:4}
F.a1.prototype={
aW:function(){if(!this.gaX()){C.a.K(this.a.a.d.b,this)
this.a.a.a1()}this.ca()
this.cb()
this.i3()},
cf:function(a){this.a=a
C.a.h(a.d.b,this)},
cg:function(a){this.b=a
C.a.h(a.d.c,this)},
ic:function(a){this.c=a
C.a.h(a.d.d,this)},
ca:function(){var u=this.a
if(u!=null){C.a.K(u.d.b,this)
this.a=null}},
cb:function(){var u=this.b
if(u!=null){C.a.K(u.d.c,this)
this.b=null}},
i3:function(){var u=this.c
if(u!=null){C.a.K(u.d.d,this)
this.c=null}},
gaX:function(){return this.a==null||this.b==null||this.c==null},
fw:function(){var u,t,s,r,q
u=this.a
t=u==null?null:u.r
u=this.b
s=u==null?null:u.r
u=this.c
r=u==null?null:u.r
q=V.ck()
if(t!=null)q=q.m(0,t)
if(s!=null)q=q.m(0,s)
if(r!=null)q=q.m(0,r)
if(q.er())return
return q.w(0,Math.sqrt(q.F(q)))},
fC:function(){var u,t,s,r,q
u=this.a
t=u==null?null:u.f
u=this.b
s=u==null?null:u.f
u=this.c
r=u==null?null:u.f
if(t==null||s==null||r==null)return
u=s.n(0,t)
u=new V.A(u.a,u.b,u.c)
q=u.w(0,Math.sqrt(u.F(u)))
u=r.n(0,t)
u=new V.A(u.a,u.b,u.c)
u=q.aw(u.w(0,Math.sqrt(u.F(u))))
return u.w(0,Math.sqrt(u.F(u)))},
cs:function(){if(this.d!=null)return!0
var u=this.fw()
if(u==null){u=this.fC()
if(u==null)return!1}this.d=u
this.a.a.a1()
return!0},
fv:function(){var u,t,s,r,q
u=this.a
t=u==null?null:u.x
u=this.b
s=u==null?null:u.x
u=this.c
r=u==null?null:u.x
q=V.ck()
if(t!=null)q=q.m(0,t)
if(s!=null)q=q.m(0,s)
if(r!=null)q=q.m(0,r)
if(q.er())return
return q.w(0,Math.sqrt(q.F(q)))},
fB:function(){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f
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
if(Math.abs(i-0)<$.I().a){u=m.n(0,p)
u=new V.A(u.a,u.b,u.c)
h=u.w(0,Math.sqrt(u.F(u)))
if(j.a-k.a<0)h=h.P(0)}else{g=(u-l.b)/i
u=m.n(0,p).k(0,g).m(0,p).n(0,s)
u=new V.A(u.a,u.b,u.c)
h=u.w(0,Math.sqrt(u.F(u)))
j=j.a
k=k.a
if((j-k)*g+k-l.a<0)h=h.P(0)}u=this.d
if(u!=null){f=u.w(0,Math.sqrt(u.F(u)))
u=f.aw(h)
u=u.w(0,Math.sqrt(u.F(u))).aw(f)
h=u.w(0,Math.sqrt(u.F(u)))}return h},
cq:function(){if(this.e!=null)return!0
var u=this.fv()
if(u==null){u=this.fB()
if(u==null)return!1}this.e=u
this.a.a.a1()
return!0},
gjb:function(){if(J.J(this.a,this.b))return!0
if(J.J(this.b,this.c))return!0
if(J.J(this.c,this.a))return!0
return!1},
u:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.L()},
C:function(a){var u,t
if(this.gaX())return a+"disposed"
u=a+C.c.ae(J.al(this.a.e),0)+", "+C.c.ae(J.al(this.b.e),0)+", "+C.c.ae(J.al(this.c.e),0)+" {"
t=this.d
u=t!=null?u+(t.i(0)+", "):u+"-, "
t=this.e
return t!=null?u+(t.i(0)+"}"):u+"-}"},
L:function(){return this.C("")}}
F.ep.prototype={}
F.fk.prototype={
b0:function(a,b,c){var u,t
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
F.aZ.prototype={
aW:function(){if(!this.gaX()){C.a.K(this.a.a.c.b,this)
this.a.a.a1()}this.ca()
this.cb()},
cf:function(a){this.a=a
C.a.h(a.c.b,this)},
cg:function(a){this.b=a
C.a.h(a.c.c,this)},
ca:function(){var u=this.a
if(u!=null){C.a.K(u.c.b,this)
this.a=null}},
cb:function(){var u=this.b
if(u!=null){C.a.K(u.c.c,this)
this.b=null}},
gaX:function(){return this.a==null||this.b==null},
u:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.L()},
C:function(a){if(this.gaX())return a+"disposed"
return a+C.c.ae(J.al(this.a.e),0)+", "+C.c.ae(J.al(this.b.e),0)},
L:function(){return this.C("")}}
F.eC.prototype={}
F.fG.prototype={
b0:function(a,b,c){var u,t
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
F.bd.prototype={
u:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.L()},
C:function(a){var u=this.a
if(u==null)return a+"disposed"
return a+C.c.ae(J.al(u.e),0)},
L:function(){return this.C("")}}
F.bB.prototype={
gB:function(){var u=this.e
if(u==null){u=D.K()
this.e=u}return u},
bB:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i,h
u=this.e
if(u!=null)++u.d
a.a.A()
t=this.a.c.length
for(u=a.a.c,s=u.length,r=0;r<u.length;u.length===s||(0,H.z)(u),++r){q=u[r]
this.a.h(0,q.jd())}this.a.A()
for(u=a.b.b,s=u.length,r=0;r<u.length;u.length===s||(0,H.z)(u),++r){p=u[r]
o=this.a
n=p.a
n.a.a.A()
n=n.e
if(typeof n!=="number")return n.m()
n+=t
o=o.c
if(n>=o.length)return H.c(o,n)
m=o[n]
this.b.a.a.h(0,m)
n=new F.bd()
if(m.a==null)H.p(P.u("May not create a point with a vertex which is not attached to a shape."))
n.a=m
C.a.h(m.b.b,n)
C.a.h(n.a.a.b.b,n)
o=n.a.a.e
if(o!=null)o.H(null)}for(u=a.c.b,s=u.length,r=0;r<u.length;u.length===s||(0,H.z)(u),++r){l=u[r]
o=this.a
n=l.a
n.a.a.A()
n=n.e
if(typeof n!=="number")return n.m()
n+=t
o=o.c
if(n>=o.length)return H.c(o,n)
k=o[n]
n=this.a
o=l.b
o.a.a.A()
o=o.e
if(typeof o!=="number")return o.m()
o+=t
n=n.c
if(o>=n.length)return H.c(n,o)
j=n[o]
o=this.c.a
o.a.h(0,k)
o.a.h(0,j)
F.lj(k,j)}for(u=a.d.b,s=u.length,r=0;r<u.length;u.length===s||(0,H.z)(u),++r){i=u[r]
o=this.a
n=i.a
n.a.a.A()
n=n.e
if(typeof n!=="number")return n.m()
n+=t
o=o.c
if(n>=o.length)return H.c(o,n)
k=o[n]
n=this.a
o=i.b
o.a.a.A()
o=o.e
if(typeof o!=="number")return o.m()
o+=t
n=n.c
if(o>=n.length)return H.c(n,o)
j=n[o]
o=this.a
n=i.c
n.a.a.A()
n=n.e
if(typeof n!=="number")return n.m()
n+=t
o=o.c
if(n>=o.length)return H.c(o,n)
h=o[n]
n=this.d.a
n.a.h(0,k)
n.a.h(0,j)
n.a.h(0,h)
F.cQ(k,j,h)}u=this.e
if(u!=null)u.a7()},
a4:function(){var u,t
u=this.e
if(u!=null)++u.d
t=this.d.a4()||!1
if(!this.a.a4())t=!1
u=this.e
if(u!=null)u.a7()
return t},
j2:function(a,b){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
u=this.e
if(u!=null)++u.d
for(t=this.a.c.length-1,u=a.b,s=a.a,r=s.length,q=a.c,p=u-1;t>=0;--t){o=this.a.c
if(t>=o.length)return H.c(o,t)
n=o[t]
o=n.y
m=C.e.aY(o.a*p)
o=o.b
if(typeof q!=="number")return q.n()
l=C.e.aY(o*(q-1))
m=m>=0?C.f.ak(m,u):u+C.f.ak(m,u)
k=(m+(l>=0?C.f.ak(l,q):q+C.f.ak(l,q))*u)*4
if(k<0||k>=r)return H.c(s,k)
o=s[k]/255
j=k+1
if(j>=r)return H.c(s,j)
j=s[j]/255
i=k+2
if(i>=r)return H.c(s,i)
i=s[i]/255
h=k+3
if(h>=r)return H.c(s,h)
h=s[h]/255
if(o<0)o=0
else if(o>1)o=1
if(j<0)j=0
else if(j>1)j=1
if(i<0)i=0
else if(i>1)i=1
if(!(h<0))if(h>1)h=1
g=(o+j+i)*b/3
o=n.f
j=n.r
i=j.a
h=j.b
j=j.c
if(typeof j!=="number")return j.k()
f=o.a
e=o.b
d=o.c
if(typeof d!=="number")return d.m()
j=new V.T(f+i*g,e+h*g,d+j*g)
if(!J.J(o,j)){n.f=j
o=n.a
if(o!=null){o=o.e
if(o!=null)o.H(null)}}}u=this.e
if(u!=null)u.a7()},
ks:function(a){var u,t,s,r,q
u=this.e
if(u!=null)++u.d
for(u=this.a,t=u.c.length-1,s=a.a;t>=0;--t){r=u.c
if(t>=r.length)return H.c(r,t)
q=r[t]
if((s&$.aQ().a)===0)q.f=null
if((s&$.aB().a)===0)q.r=null
if((s&$.aP().a)===0)q.x=null
if((s&$.aR().a)===0)q.y=null
if((s&$.aS().a)===0)q.z=null
if((s&$.jn().a)===0)q.Q=null
if((s&$.bj().a)===0)q.ch=0
if((s&$.aO().a)===0)q.cx=null}u=this.e
if(u!=null)u.a7()},
kr:function(a,b){var u,t,s,r
u=this.e
if(u!=null)++u.d
for(u=this.d,t=u.b.length-1;t>=0;--t){s=u.b
if(t>=s.length)return H.c(s,t)
r=s[t]
r.d=null}u=this.e
if(u!=null)u.a7()},
kq:function(a){return this.kr(!0,a)},
jM:function(a,b){var u,t,s,r,q,p,o
u=this.e
if(u!=null)++u.d
u=this.a.c
t=H.b(u.slice(0),[H.r(u,0)])
for(u=[F.ai];t.length!==0;){s=C.a.gjx(t)
C.a.k9(t,0)
if(s!=null){r=H.b([],u)
C.a.h(r,s)
for(q=t.length,p=0;p<t.length;t.length===q||(0,H.z)(t),++p){o=t[p]
if(o!=null&&a.b0(0,s,o)){C.a.h(r,o)
C.a.K(t,o)}}if(r.length>1)b.bB(r)}}this.a.A()
this.c.bD()
this.d.bD()
this.b.ka()
this.c.cU(new F.fG())
this.d.cU(new F.fk())
u=this.e
if(u!=null)u.a7()},
j0:function(a){this.jM(new F.h7(),new F.f_())},
bg:function(){return this.j0(null)},
j6:function(a0,a1){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a
u=this.a.c.length
a1.toString
t=$.aQ()
s=a1.a
r=(s&t.a)!==0?1:0
if((s&$.aB().a)!==0)++r
if((s&$.aP().a)!==0)++r
if((s&$.aR().a)!==0)++r
if((s&$.aS().a)!==0)++r
if((s&$.cz().a)!==0)++r
if((s&$.cA().a)!==0)++r
if((s&$.bj().a)!==0)++r
if((s&$.aO().a)!==0)++r
q=a1.gd4(a1)
p=q*4
t=new Array(u*q)
t.fixed$length=Array
s=P.t
o=H.b(t,[s])
t=new Array(r)
t.fixed$length=Array
n=H.b(t,[Z.cI])
for(m=0,l=0;l<r;++l){k=a1.j3(l)
j=k.gd4(k)
C.a.q(n,l,new Z.cI(k,j,m*4,p,0))
for(i=0;i<u;++i){t=this.a.c
if(i>=t.length)return H.c(t,i)
h=t[i].jI(k)
g=m+i*q
for(f=0;f<h.length;++f){C.a.q(o,g,h[f]);++g}}m+=j}H.h(o,"$ia",[s],"$aa")
t=a0.a
e=t.createBuffer()
C.b.an(t,34962,e)
C.b.dR(t,34962,new Float32Array(H.bE(o)),35044)
C.b.an(t,34962,null)
d=new Z.cJ(new Z.dH(34962,e),n,a1)
d.sfW(H.b([],[Z.bb]))
if(this.b.b.length!==0){s=P.m
c=H.b([],[s])
for(l=0;b=this.b.b,l<b.length;++l){b=b[l].a
b.a.a.A()
C.a.h(c,b.e)}a=Z.j4(t,34963,H.h(c,"$ia",[s],"$aa"))
C.a.h(d.b,new Z.bb(0,c.length,a))}if(this.c.b.length!==0){s=P.m
c=H.b([],[s])
for(l=0;b=this.c.b,l<b.length;++l){b=b[l].a
b.a.a.A()
C.a.h(c,b.e)
b=this.c.b
if(l>=b.length)return H.c(b,l)
b=b[l].b
b.a.a.A()
C.a.h(c,b.e)}a=Z.j4(t,34963,H.h(c,"$ia",[s],"$aa"))
C.a.h(d.b,new Z.bb(1,c.length,a))}if(this.d.b.length!==0){s=P.m
c=H.b([],[s])
for(l=0;b=this.d.b,l<b.length;++l){b=b[l].a
b.a.a.A()
C.a.h(c,b.e)
b=this.d.b
if(l>=b.length)return H.c(b,l)
b=b[l].b
b.a.a.A()
C.a.h(c,b.e)
b=this.d.b
if(l>=b.length)return H.c(b,l)
b=b[l].c
b.a.a.A()
C.a.h(c,b.e)}a=Z.j4(t,34963,H.h(c,"$ia",[s],"$aa"))
C.a.h(d.b,new Z.bb(4,c.length,a))}return d},
i:function(a){var u=H.b([],[P.k])
if(this.a.c.length!==0){C.a.h(u,"Vertices:")
C.a.h(u,this.a.C("   "))}if(this.b.b.length!==0){C.a.h(u,"Points:")
C.a.h(u,this.b.C("   "))}if(this.c.b.length!==0){C.a.h(u,"Lines:")
C.a.h(u,this.c.C("   "))}if(this.d.b.length!==0){C.a.h(u,"Faces:")
C.a.h(u,this.d.C("   "))}return C.a.D(u,"\n")},
a6:function(a){var u=this.e
if(u!=null)u.H(a)},
a1:function(){return this.a6(null)},
$in6:1}
F.fe.prototype={
j_:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k,j,i,h
H.h(c,"$ia",[F.ai],"$aa")
u=H.b([],[F.a1])
for(t=this.a,s=b,r=0,q=!1,p=1;p<a;++p,++r,++s){for(o=q,n=1;n<b;++n,s=j){m=c.length
if(r<0||r>=m)return H.c(c,r)
l=c[r];++r
if(r>=m)return H.c(c,r)
k=c[r]
j=s+1
if(j<0||j>=m)return H.c(c,j)
i=c[j]
if(s<0||s>=m)return H.c(c,s)
h=c[s]
m=t.a
if(o){m.h(0,l)
t.a.h(0,k)
t.a.h(0,i)
C.a.h(u,F.cQ(l,k,i))
t.a.h(0,l)
t.a.h(0,i)
t.a.h(0,h)
C.a.h(u,F.cQ(l,i,h))}else{m.h(0,k)
t.a.h(0,i)
t.a.h(0,h)
C.a.h(u,F.cQ(k,i,h))
t.a.h(0,k)
t.a.h(0,h)
t.a.h(0,l)
C.a.h(u,F.cQ(k,h,l))}o=!o}q=!q}return u},
gl:function(a){return this.b.length},
cU:function(a){var u,t,s,r,q,p,o,n
for(u=this.a,t=u.a.c.length-1;t>=0;--t){s=u.a.c
if(t>=s.length)return H.c(s,t)
r=s[t]
for(s=r.d,q=s.b.length+s.c.length+s.d.length-1;q>=0;--q){p=r.d.j(0,q)
for(o=q-1;o>=0;--o){n=r.d.j(0,o)
if(a.b0(0,p,n)){p.aW()
break}}}}},
bD:function(){var u,t,s
for(u=this.b.length-1;u>=0;--u){t=this.b
if(u>=t.length)return H.c(t,u)
s=t[u]
t=s.gjb()
if(t)s.aW()}},
a4:function(){var u,t,s,r
for(u=this.b,t=u.length,s=!0,r=0;r<u.length;u.length===t||(0,H.z)(u),++r)if(!u[r].cs())s=!1
return s},
cr:function(){var u,t,s,r
for(u=this.b,t=u.length,s=!0,r=0;r<u.length;u.length===t||(0,H.z)(u),++r)if(!u[r].cq())s=!1
return s},
i:function(a){return this.L()},
C:function(a){var u,t,s,r
u=H.b([],[P.k])
for(t=this.b,s=t.length,r=0;r<t.length;t.length===s||(0,H.z)(t),++r)C.a.h(u,t[r].C(a))
return C.a.D(u,"\n")},
L:function(){return this.C("")},
sfN:function(a){this.b=H.h(a,"$ia",[F.a1],"$aa")}}
F.ff.prototype={
gl:function(a){return this.b.length},
cU:function(a){var u,t,s,r,q,p,o,n
for(u=this.a,t=u.a.c.length-1;t>=0;--t){s=u.a.c
if(t>=s.length)return H.c(s,t)
r=s[t]
for(s=r.c,q=s.b.length+s.c.length-1;q>=0;--q){p=r.c.j(0,q)
for(o=q-1;o>=0;--o){n=r.c.j(0,o)
if(a.b0(0,p,n)){p.aW()
break}}}}},
bD:function(){var u,t,s
for(u=this.b.length-1;u>=0;--u){t=this.b
if(u>=t.length)return H.c(t,u)
s=t[u]
t=J.J(s.a,s.b)
if(t)s.aW()}},
i:function(a){return this.L()},
C:function(a){var u,t,s,r
u=H.b([],[P.k])
t=this.b.length
for(s=0;s<t;++s){r=this.b
if(s>=r.length)return H.c(r,s)
C.a.h(u,r[s].C(a+(""+s+". ")))}return C.a.D(u,"\n")},
L:function(){return this.C("")},
sfY:function(a){this.b=H.h(a,"$ia",[F.aZ],"$aa")}}
F.fg.prototype={
gl:function(a){return this.b.length},
ka:function(){var u,t,s
for(u=this.b.length-1;u>=0;--u){t=this.b
if(u>=t.length)return H.c(t,u)
t=t[u]
s=t.a
if(s.b.b.length>1){if(s!=null){C.a.K(s.a.b.b,t)
s=t.a.a.e
if(s!=null)s.H(null)}s=t.a
if(s!=null){C.a.K(s.b.b,t)
t.a=null}}}},
i:function(a){return this.L()},
C:function(a){var u,t,s,r
u=H.b([],[P.k])
for(t=this.b,s=t.length,r=0;r<t.length;t.length===s||(0,H.z)(t),++r)C.a.h(u,t[r].C(a))
return C.a.D(u,"\n")},
L:function(){return this.C("")},
sc7:function(a){this.b=H.h(a,"$ia",[F.bd],"$aa")}}
F.ai.prototype={
cv:function(a){var u,t,s,r,q,p,o
u=this.f
t=this.r
s=this.x
r=this.y
q=this.z
p=this.Q
o=this.ch
return F.j3(this.cx,s,p,u,t,r,q,a,o)},
jd:function(){return this.cv(null)},
sZ:function(a,b){var u
if(!J.J(this.f,b)){this.f=b
u=this.a
if(u!=null)u.a1()}},
scY:function(a){var u
if(!J.J(this.z,a)){this.z=a
u=this.a
if(u!=null)u.a1()}},
scm:function(a){var u
if(!J.J(this.cx,a)){this.cx=a
u=this.a
if(u!=null)u.a1()}},
jI:function(a){var u,t
if(a.u(0,$.aQ())){u=this.f
t=[P.t]
if(u==null)return H.b([0,0,0],t)
else return H.b([u.a,u.b,u.c],t)}else if(a.u(0,$.aB())){u=this.r
t=[P.t]
if(u==null)return H.b([0,1,0],t)
else return H.b([u.a,u.b,u.c],t)}else if(a.u(0,$.aP())){u=this.x
t=[P.t]
if(u==null)return H.b([0,0,1],t)
else return H.b([u.a,u.b,u.c],t)}else if(a.u(0,$.aR())){u=this.y
t=[P.t]
if(u==null)return H.b([0,0],t)
else return H.b([u.a,u.b],t)}else if(a.u(0,$.aS())){u=this.z
t=[P.t]
if(u==null)return H.b([0,0,0],t)
else return H.b([u.a,u.b,u.c],t)}else if(a.u(0,$.cz())){u=this.Q
t=[P.t]
if(u==null)return H.b([1,1,1],t)
else return H.b([u.a,u.b,u.c],t)}else if(a.u(0,$.cA())){u=this.Q
t=[P.t]
if(u==null)return H.b([1,1,1,1],t)
else return H.b([u.a,u.b,u.c,u.d],t)}else if(a.u(0,$.bj()))return H.b([this.ch],[P.t])
else if(a.u(0,$.aO())){u=this.cx
t=[P.t]
if(u==null)return H.b([-1,-1,-1,-1],t)
else return H.b([u.a,u.b,u.c,u.d],t)}else return H.b([],[P.t])},
cs:function(){var u,t
u={}
if(this.r!=null)return!0
t=this.a
if(t!=null){t=t.e
if(t!=null)++t.d}u.a=V.ck()
this.d.R(0,new F.hc(u))
u=u.a
this.r=u.w(0,Math.sqrt(u.F(u)))
u=this.a
if(u!=null){u.a1()
u=this.a.e
if(u!=null)u.a7()}return!0},
cq:function(){var u,t
u={}
if(this.x!=null)return!0
t=this.a
if(t!=null){t=t.e
if(t!=null)++t.d}u.a=V.ck()
this.d.R(0,new F.hb(u))
u=u.a
this.x=u.w(0,Math.sqrt(u.F(u)))
u=this.a
if(u!=null){u.a1()
u=this.a.e
if(u!=null)u.a7()}return!0},
u:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.L()},
C:function(a){var u,t,s
u=H.b([],[P.k])
C.a.h(u,C.c.ae(J.al(this.e),0))
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
s=C.a.D(u,", ")
return a+"{"+s+"}"},
L:function(){return this.C("")}}
F.hc.prototype={
$1:function(a){var u,t
H.e(a,"$ia1")
u=a==null?null:a.d
if(u!=null){t=this.a
t.a=t.a.m(0,u)}},
$S:6}
F.hb.prototype={
$1:function(a){var u,t
H.e(a,"$ia1")
u=a==null?null:a.e
if(u!=null){t=this.a
t.a=t.a.m(0,u)}},
$S:6}
F.h2.prototype={
A:function(){var u,t,s,r
if(this.b){u=this.c
t=u.length
for(s=0,r=0;r<t;++r){if(r>=u.length)return H.c(u,r)
u[r].e=s;++s}this.b=!1}},
h:function(a,b){var u,t
u=b.a
if(u!=null){if(u===this.a)return!1
throw H.d(P.u("May not add a vertex already attached to another shape to this shape."))}u=this.c
b.e=u.length
t=this.a
b.a=t
C.a.h(u,b)
t.a1()
return!0},
gl:function(a){return this.c.length},
a4:function(){var u,t,s
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.z)(u),++s)u[s].cs()
return!0},
cr:function(){var u,t,s
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.z)(u),++s)u[s].cq()
return!0},
j7:function(){var u,t,s,r,q,p,o,n
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.z)(u),++s){r=u[s]
if(r.z==null){q=r.r
p=q.a
o=q.b
n=q.c
if(typeof n!=="number")return n.k()
n=q.w(0,Math.sqrt(p*p+o*o+n*n))
if(!J.J(r.z,n)){r.z=n
q=r.a
if(q!=null){q=q.e
if(q!=null)q.H(null)}}}}return!0},
i:function(a){return this.L()},
C:function(a){var u,t,s,r
this.A()
u=H.b([],[P.k])
for(t=this.c,s=t.length,r=0;r<t.length;t.length===s||(0,H.z)(t),++r)C.a.h(u,t[r].C(a))
return C.a.D(u,"\n")},
L:function(){return this.C("")},
siC:function(a){this.c=H.h(a,"$ia",[F.ai],"$aa")}}
F.h3.prototype={
gl:function(a){return this.b.length+this.c.length+this.d.length},
j:function(a,b){var u,t,s
u=this.b
t=u.length
if(b<t){if(b<0)return H.c(u,b)
return u[b]}b-=t
u=this.c
s=u.length
if(b<s){if(b<0)return H.c(u,b)
return u[b]}b-=s
u=this.d
if(b<0||b>=u.length)return H.c(u,b)
return u[b]},
R:function(a,b){H.j(b,{func:1,ret:-1,args:[F.a1]})
C.a.R(this.b,b)
C.a.R(this.c,new F.h4(this,b))
C.a.R(this.d,new F.h5(this,b))},
i:function(a){return this.L()},
C:function(a){var u,t,s,r
u=H.b([],[P.k])
for(t=this.b,s=t.length,r=0;r<t.length;t.length===s||(0,H.z)(t),++r)C.a.h(u,t[r].C(a))
for(t=this.c,s=t.length,r=0;r<t.length;t.length===s||(0,H.z)(t),++r)C.a.h(u,t[r].C(a))
for(t=this.d,s=t.length,r=0;r<t.length;t.length===s||(0,H.z)(t),++r)C.a.h(u,t[r].C(a))
return C.a.D(u,"\n")},
L:function(){return this.C("")},
sfO:function(a){this.b=H.h(a,"$ia",[F.a1],"$aa")},
sfP:function(a){this.c=H.h(a,"$ia",[F.a1],"$aa")},
sfQ:function(a){this.d=H.h(a,"$ia",[F.a1],"$aa")}}
F.h4.prototype={
$1:function(a){H.e(a,"$ia1")
if(!J.J(a.a,this.a))this.b.$1(a)},
$S:6}
F.h5.prototype={
$1:function(a){var u
H.e(a,"$ia1")
u=this.a
if(!J.J(a.a,u)&&!J.J(a.b,u))this.b.$1(a)},
$S:6}
F.h6.prototype={
gl:function(a){return this.b.length+this.c.length},
j:function(a,b){var u,t,s
u=this.b
t=u.length
if(b>=t){u=this.c
s=b-t
if(s<0||s>=u.length)return H.c(u,s)
return u[s]}else{if(b<0)return H.c(u,b)
return u[b]}},
i:function(a){return this.L()},
C:function(a){var u,t,s,r
u=H.b([],[P.k])
for(t=this.b,s=t.length,r=0;r<t.length;t.length===s||(0,H.z)(t),++r)C.a.h(u,t[r].C(a))
for(t=this.c,s=t.length,r=0;r<t.length;t.length===s||(0,H.z)(t),++r)C.a.h(u,t[r].C(a))
return C.a.D(u,"\n")},
L:function(){return this.C("")},
sfZ:function(a){this.b=H.h(a,"$ia",[F.aZ],"$aa")},
sh_:function(a){this.c=H.h(a,"$ia",[F.aZ],"$aa")}}
F.h8.prototype={}
F.h7.prototype={
b0:function(a,b,c){return J.J(b.f,c.f)}}
F.h9.prototype={}
F.f_.prototype={
bB:function(a){var u,t,s,r,q,p,o,n,m,l,k
H.h(a,"$ia",[F.ai],"$aa")
u=V.ck()
for(t=a.length,s=0;s<t;++s){r=a[s].r
if(r!=null){q=u.a
p=r.a
o=u.b
n=r.b
m=u.c
r=r.c
if(typeof m!=="number")return m.m()
if(typeof r!=="number")return H.q(r)
u=new V.A(q+p,o+n,m+r)}}u=u.w(0,Math.sqrt(u.F(u)))
for(t=a.length,r=u==null,s=0;s<a.length;a.length===t||(0,H.z)(a),++s){l=a[s]
if(r)k=null
else{q=u.a
p=u.b
o=u.c
if(typeof o!=="number")return o.k()
k=u.w(0,Math.sqrt(q*q+p*p+o*o))}if(!J.J(l.r,k)){l.r=k
q=l.a
if(q!=null){q=q.e
if(q!=null)q.H(null)}}}return}}
F.ha.prototype={
gl:function(a){return this.b.length},
i:function(a){return this.L()},
C:function(a){var u,t,s,r
u=H.b([],[P.k])
for(t=this.b,s=t.length,r=0;r<t.length;t.length===s||(0,H.z)(t),++r)C.a.h(u,t[r].C(a))
return C.a.D(u,"\n")},
L:function(){return this.C("")},
sc7:function(a){this.b=H.h(a,"$ia",[F.bd],"$aa")}}
O.d4.prototype={
gB:function(){var u=this.dy
if(u==null){u=D.K()
this.dy=u}return u},
aa:function(a){var u
H.e(a,"$ix")
u=this.dy
if(u!=null)u.H(a)},
hi:function(){return this.aa(null)},
dG:function(a){H.e(a,"$ix")
this.a=null
this.aa(a)},
i8:function(){return this.dG(null)},
hc:function(a,b){var u=V.ae
u=new D.bu(a,H.h(b,"$in",[u],"$an"),this,[u])
u.b=!0
this.aa(u)},
he:function(a,b){var u=V.ae
u=new D.bv(a,H.h(b,"$in",[u],"$an"),this,[u])
u.b=!0
this.aa(u)},
dj:function(){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7
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
a7=$.aQ()
if(a0){b=$.aB()
a7=new Z.aA(a7.a|b.a)}if(a1){b=$.aP()
a7=new Z.aA(a7.a|b.a)}if(a2){b=$.aR()
a7=new Z.aA(a7.a|b.a)}if(a3){b=$.aS()
a7=new Z.aA(a7.a|b.a)}if(a5){b=$.aO()
a7=new Z.aA(a7.a|b.a)}return new A.eS(u,m,l,k,j,i,h,g,f,t,s,r,q,p,o,t+s+r+q+p+o,d,d,a4,a6,!0,!1,!1,c,a4,a,a0,a1,a2,a3,a5,!1,!1,!1,n,e.charCodeAt(0)==0?e:e,a7)},
W:function(a,b){H.h(a,"$ia",[T.c9],"$aa")},
aq:function(a){var u,t,s,r,q
for(u=this.dx.a,u=new J.aj(u,u.length,0,[H.r(u,0)]);u.E();){t=u.d
t.toString
s=$.h1
if(s==null){s=new V.A(0,0,1)
$.h1=s}t.a=s
r=t.b
if(r!=null){q=r.a
if(q!=null)t.a=q.cZ(s)}}},
kc:function(a4,a5){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3
u=this.a
if(u==null){u=this.dj()
t=a4.fr.j(0,u.ai)
if(t==null){t=A.lq(u,a4.a)
s=t.b
if(s.length===0)H.p(P.u("May not cache a shader with no name."))
if(a4.fr.bj(s))H.p(P.u('Shader cache already contains a shader by the name "'+s+'".'))
a4.fr.q(0,s,t)}this.a=t
a5.e=null
u=t}r=u.z
q=r.bk
u=a5.e
if(!(u instanceof Z.cJ)){a5.e=null
u=null}if(u==null||!u.d.u(0,q)){u=r.r1
if(u)a5.d.a4()
p=r.r2
if(p){o=a5.d
n=o.e
if(n!=null)++n.d
o.d.cr()
o.a.cr()
o=o.e
if(o!=null)o.a7()}o=r.ry
if(o){n=a5.d
m=n.e
if(m!=null)++m.d
n.a.j7()
n=n.e
if(n!=null)n.a7()}l=a5.d.j6(new Z.he(a4.a),q)
l.aJ($.aQ()).e=this.a.Q.c
if(u)l.aJ($.aB()).e=this.a.cx.c
if(p)l.aJ($.aP()).e=this.a.ch.c
if(r.rx)l.aJ($.aR()).e=this.a.cy.c
if(o)l.aJ($.aS()).e=this.a.db.c
if(r.x1)l.aJ($.aO()).e=this.a.dx.c
a5.e=l}u=T.c9
k=H.b([],[u])
p=this.a
o=a4.a
C.b.eP(o,p.r)
p.x.jt()
if(r.fx){p=this.a
n=a4.dx.ga_()
p=p.dy
p.toString
p.al(n.af(0,!0))}if(r.fy){p=this.a
n=a4.cx
if(n==null){n=a4.db.ga_().k(0,a4.dx.ga_())
a4.cx=n}p=p.fr
p.toString
p.al(n.af(0,!0))}p=this.a
n=a4.ch
if(n==null){n=a4.gk8().k(0,a4.dx.ga_())
a4.ch=n}p=p.fy
p.toString
p.al(n.af(0,!0))
if(r.x2){p=this.a
n=this.b
p=p.k1
p.toString
p.al(C.o.af(n,!0))}if(r.y1){p=this.a
n=this.c
p=p.k2
p.toString
p.al(C.o.af(n,!0))}if(r.y2){p=this.a
n=this.d
p=p.k3
p.toString
p.al(C.o.af(n,!0))}if(r.ap>0){j=this.e.a.length
p=this.a.k4
C.b.S(p.a,p.d,j)
for(p=[P.t],i=0;i<j;++i){n=this.a
m=this.e.a
if(i>=m.length)return H.c(m,i)
m=m[i]
n.toString
H.e(m,"$iae")
n=n.r1
if(i>=n.length)return H.c(n,i)
n=n[i]
h=new Float32Array(H.bE(H.h(m.af(0,!0),"$ia",p,"$aa")))
C.b.eN(n.a,n.d,!1,h)}}switch(r.a){case C.d:break
case C.j:p=this.a
n=this.f.f
p=p.r2
p.toString
m=n.a
g=n.b
n=n.c
C.b.v(p.a,p.d,m,g,n)
break
case C.h:this.W(k,this.f.d)
p=this.a
n=this.f.d
p.ah(p.rx,p.x1,n)
n=this.a
p=this.f.f
n=n.r2
n.toString
m=p.a
g=p.b
p=p.c
C.b.v(n.a,n.d,m,g,p)
break
case C.i:this.W(k,this.f.e)
p=this.a
n=this.f.e
p.ab(p.ry,p.x1,n)
n=this.a
p=this.f.f
n=n.r2
n.toString
m=p.a
g=p.b
p=p.c
C.b.v(n.a,n.d,m,g,p)
break}if(r.k2){switch(r.b){case C.d:break
case C.j:p=this.a
n=this.r.f
p=p.x2
p.toString
m=n.a
g=n.b
n=n.c
C.b.v(p.a,p.d,m,g,n)
break
case C.h:this.W(k,this.r.d)
p=this.a
n=this.r.d
p.ah(p.y1,p.ap,n)
n=this.a
p=this.r.f
n=n.x2
n.toString
m=p.a
g=p.b
p=p.c
C.b.v(n.a,n.d,m,g,p)
break
case C.i:this.W(k,this.r.e)
p=this.a
n=this.r.e
p.ab(p.y2,p.ap,n)
n=this.a
p=this.r.f
n=n.x2
n.toString
m=p.a
g=p.b
p=p.c
C.b.v(n.a,n.d,m,g,p)
break}switch(r.c){case C.d:break
case C.j:p=this.a
n=this.x.f
p=p.ai
p.toString
m=n.a
g=n.b
n=n.c
C.b.v(p.a,p.d,m,g,n)
break
case C.h:this.W(k,this.x.d)
p=this.a
n=this.x.d
p.ah(p.bk,p.bl,n)
n=this.a
p=this.x.f
n=n.ai
n.toString
m=p.a
g=p.b
p=p.c
C.b.v(n.a,n.d,m,g,p)
break
case C.i:this.W(k,this.x.e)
p=this.a
n=this.x.e
p.ab(p.dX,p.bl,n)
n=this.a
p=this.x.f
n=n.ai
n.toString
m=p.a
g=p.b
p=p.c
C.b.v(n.a,n.d,m,g,p)
break}switch(r.d){case C.d:break
case C.j:p=this.a
n=this.y.f
p=p.bm
p.toString
m=n.a
g=n.b
n=n.c
C.b.v(p.a,p.d,m,g,n)
break
case C.h:this.W(k,this.y.d)
p=this.a
n=this.y.d
p.ah(p.dY,p.bn,n)
n=this.a
p=this.y.f
n=n.bm
n.toString
m=p.a
g=p.b
p=p.c
C.b.v(n.a,n.d,m,g,p)
break
case C.i:this.W(k,this.y.e)
p=this.a
n=this.y.e
p.ab(p.dZ,p.bn,n)
n=this.a
p=this.y.f
n=n.bm
n.toString
m=p.a
g=p.b
p=p.c
C.b.v(n.a,n.d,m,g,p)
break}switch(r.e){case C.d:break
case C.j:p=this.a
n=this.z.f
p=p.bo
p.toString
m=n.a
g=n.b
n=n.c
C.b.v(p.a,p.d,m,g,n)
n=this.a
g=this.z.ch
n=n.bq
C.b.M(n.a,n.d,g)
break
case C.h:this.W(k,this.z.d)
p=this.a
n=this.z.d
p.ah(p.e_,p.bp,n)
n=this.a
p=this.z.f
n=n.bo
n.toString
m=p.a
g=p.b
p=p.c
C.b.v(n.a,n.d,m,g,p)
p=this.a
g=this.z.ch
p=p.bq
C.b.M(p.a,p.d,g)
break
case C.i:this.W(k,this.z.e)
p=this.a
n=this.z.e
p.ab(p.e0,p.bp,n)
n=this.a
p=this.z.f
n=n.bo
n.toString
m=p.a
g=p.b
p=p.c
C.b.v(n.a,n.d,m,g,p)
p=this.a
g=this.z.ch
p=p.bq
C.b.M(p.a,p.d,g)
break}if(r.z>0){j=this.dx.e.length
p=this.a.eb
C.b.S(p.a,p.d,j)
f=a4.db.ga_()
for(p=this.dx.e,n=p.length,e=0,d=0;d<p.length;p.length===n||(0,H.z)(p),++d){c=p[d]
m=this.a.cB
if(e>=m.length)return H.c(m,e)
b=m[e]
m=f.cZ(c.a)
g=m.a
a=m.b
a0=m.c
if(typeof a0!=="number")return a0.k()
a0=m.w(0,Math.sqrt(g*g+a*a+a0*a0))
a=b.b
g=a0.a
m=a0.b
a0=a0.c
C.b.v(a.a,a.d,g,m,a0)
a0=c.c
m=b.c
C.b.v(m.a,m.d,a0.a,a0.b,a0.c);++e}}if(r.Q>0){j=this.dx.f.length
p=this.a.ec
C.b.S(p.a,p.d,j)
f=a4.db.ga_()
for(p=this.dx.f,n=p.length,e=0,d=0;d<p.length;p.length===n||(0,H.z)(p),++d){c=p[d]
m=this.a.cC
if(e>=m.length)return H.c(m,e)
b=m[e]
m=c.gb4(c)
g=b.b
C.b.v(g.a,g.d,m.a,m.b,m.c)
m=f.b9(c.gb4(c))
g=b.c
C.b.v(g.a,g.d,m.a,m.b,m.c)
m=c.gao(c)
g=b.d
C.b.v(g.a,g.d,m.a,m.b,m.c)
m=c.gcj()
g=b.e
C.b.M(g.a,g.d,m)
m=c.gck()
g=b.f
C.b.M(g.a,g.d,m)
m=c.gcl()
g=b.r
C.b.M(g.a,g.d,m);++e}}if(r.ch>0){j=this.dx.r.length
p=this.a.ed
C.b.S(p.a,p.d,j)
f=a4.db.ga_()
for(p=this.dx.r,n=p.length,e=0,d=0;d<p.length;p.length===n||(0,H.z)(p),++d){c=p[d]
m=this.a.cD
if(e>=m.length)return H.c(m,e)
b=m[e]
m=c.gb4(c)
g=b.b
C.b.v(g.a,g.d,m.a,m.b,m.c)
m=c.gcz(c).kE()
g=b.c
C.b.v(g.a,g.d,m.a,m.b,m.c)
m=f.b9(c.gb4(c))
g=b.d
C.b.v(g.a,g.d,m.a,m.b,m.c)
m=c.gao(c)
g=b.e
C.b.v(g.a,g.d,m.a,m.b,m.c)
m=c.gkC()
g=b.f
C.b.M(g.a,g.d,m)
m=c.gkB()
g=b.r
C.b.M(g.a,g.d,m)
m=c.gcj()
g=b.x
C.b.M(g.a,g.d,m)
m=c.gck()
g=b.y
C.b.M(g.a,g.d,m)
m=c.gcl()
g=b.z
C.b.M(g.a,g.d,m);++e}}if(r.cx>0){j=this.dx.x.length
p=this.a.ee
C.b.S(p.a,p.d,j)
f=a4.db.ga_()
for(p=this.dx.x,n=p.length,m=[u],e=0,d=0;d<p.length;p.length===n||(0,H.z)(p),++d){c=p[d]
g=this.a.cE
if(e>=g.length)return H.c(g,e)
b=g[e]
g=c.gb6()
H.h(k,"$ia",m,"$aa")
if(!C.a.aU(k,g)){g.saZ(0,k.length)
C.a.h(k,g)}g=c.gcz(c)
a=b.d
C.b.v(a.a,a.d,g.a,g.b,g.c)
g=c.gbH()
a=b.b
C.b.v(a.a,a.d,g.a,g.b,g.c)
g=c.gbE(c)
a=b.c
C.b.v(a.a,a.d,g.a,g.b,g.c)
g=f.cZ(c.gcz(c))
a=g.a
a0=g.b
a1=g.c
if(typeof a1!=="number")return a1.k()
a1=g.w(0,Math.sqrt(a*a+a0*a0+a1*a1))
a0=b.e
a=a1.a
g=a1.b
a1=a1.c
C.b.v(a0.a,a0.d,a,g,a1)
a1=c.gao(c)
g=b.f
C.b.v(g.a,g.d,a1.a,a1.b,a1.c)
a1=c.gb6()
g=a1.gb_(a1)
if(!g){g=b.x
C.b.S(g.a,g.d,1)}else{g=b.r
a=a1.gb_(a1)
a0=g.a
g=g.d
if(!a)C.b.S(a0,g,0)
else C.b.S(a0,g,a1.gaZ(a1))
g=b.x
C.b.S(g.a,g.d,0)}++e}}if(r.cy>0){j=this.dx.y.length
p=this.a.ef
C.b.S(p.a,p.d,j)
f=a4.db.ga_()
for(p=this.dx.y,n=p.length,m=[P.t],g=[u],e=0,d=0;d<p.length;p.length===n||(0,H.z)(p),++d){c=p[d]
a=this.a.cF
if(e>=a.length)return H.c(a,e)
b=a[e]
a=c.gb6()
H.h(k,"$ia",g,"$aa")
if(!C.a.aU(k,a)){a.saZ(0,k.length)
C.a.h(k,a)}a2=f.k(0,c.ga_())
a=c.ga_()
a0=$.c4
if(a0==null){a0=new V.T(0,0,0)
$.c4=a0}a0=a.b9(a0)
a=b.b
C.b.v(a.a,a.d,a0.a,a0.b,a0.c)
a=$.c4
if(a==null){a=new V.T(0,0,0)
$.c4=a}a=a2.b9(a)
a0=b.c
C.b.v(a0.a,a0.d,a.a,a.b,a.c)
a=a2.eq()
a0=b.d
h=new Float32Array(H.bE(H.h(new V.d6(a.a,a.b,a.c,a.e,a.f,a.r,a.y,a.z,a.Q).af(0,!0),"$ia",m,"$aa")))
C.b.eM(a0.a,a0.d,!1,h)
a0=c.gao(c)
a=b.e
C.b.v(a.a,a.d,a0.a,a0.b,a0.c)
a0=c.gb6()
a=a0.gb_(a0)
if(!a){a=b.r
C.b.S(a.a,a.d,1)}else{a=b.f
a1=a0.gb_(a0)
a3=a.a
a=a.d
if(!a1)C.b.S(a3,a,0)
else C.b.S(a3,a,a0.gaZ(a0))
a=b.r
C.b.S(a.a,a.d,0)}a=c.gcj()
a0=b.x
C.b.M(a0.a,a0.d,a)
a=c.gck()
a0=b.y
C.b.M(a0.a,a0.d,a)
a=c.gcl()
a0=b.z
C.b.M(a0.a,a0.d,a);++e}}if(r.db>0){j=this.dx.z.length
p=this.a.eg
C.b.S(p.a,p.d,j)
f=a4.db.ga_()
for(p=this.dx.z,n=p.length,u=[u],e=0,d=0;d<p.length;p.length===n||(0,H.z)(p),++d){c=p[d]
m=this.a.cG
if(e>=m.length)return H.c(m,e)
b=m[e]
m=c.gb6()
H.h(k,"$ia",u,"$aa")
if(!C.a.aU(k,m)){m.saZ(0,k.length)
C.a.h(k,m)}m=c.gb4(c)
g=b.b
C.b.v(g.a,g.d,m.a,m.b,m.c)
m=c.gcz(c)
g=b.c
C.b.v(g.a,g.d,m.a,m.b,m.c)
m=c.gbH()
g=b.d
C.b.v(g.a,g.d,m.a,m.b,m.c)
m=c.gbE(c)
g=b.e
C.b.v(g.a,g.d,m.a,m.b,m.c)
m=f.b9(c.gb4(c))
g=b.f
C.b.v(g.a,g.d,m.a,m.b,m.c)
m=c.gb6()
g=m.gb_(m)
if(!g){m=b.x
C.b.S(m.a,m.d,1)}else{g=b.r
a=m.gb_(m)
a0=g.a
g=g.d
if(!a)C.b.S(a0,g,0)
else C.b.S(a0,g,m.gaZ(m))
m=b.x
C.b.S(m.a,m.d,0)}m=c.gao(c)
g=b.y
C.b.v(g.a,g.d,m.a,m.b,m.c)
m=c.gkF()
g=b.z
C.b.M(g.a,g.d,m)
m=c.gkG()
g=b.Q
C.b.M(g.a,g.d,m)
m=c.gcj()
g=b.ch
C.b.M(g.a,g.d,m)
m=c.gck()
g=b.cx
C.b.M(g.a,g.d,m)
m=c.gcl()
g=b.cy
C.b.M(g.a,g.d,m);++e}}}switch(r.f){case C.d:break
case C.j:break
case C.h:this.W(k,this.Q.d)
u=this.a
p=this.Q.d
u.ah(u.e1,u.br,p)
break
case C.i:this.W(k,this.Q.e)
u=this.a
p=this.Q.e
u.ab(u.e2,u.br,p)
break}if(r.fr){u=this.a
p=a4.Q
if(p==null){p=a4.db.ga_().eq()
a4.Q=p}u=u.id
u.toString
u.al(p.af(0,!0))}if(r.dy){this.W(k,this.ch)
u=this.a
p=this.ch
u.ab(u.e3,u.e4,p)
switch(r.r){case C.d:break
case C.j:u=this.a
p=this.cx.f
u=u.bs
u.toString
n=p.a
m=p.b
p=p.c
C.b.v(u.a,u.d,n,m,p)
break
case C.h:this.W(k,this.cx.d)
u=this.a
p=this.cx.d
u.ah(u.e5,u.bt,p)
p=this.a
u=this.cx.f
p=p.bs
p.toString
n=u.a
m=u.b
u=u.c
C.b.v(p.a,p.d,n,m,u)
break
case C.i:this.W(k,this.cx.e)
u=this.a
p=this.cx.e
u.ab(u.e6,u.bt,p)
p=this.a
u=this.cx.f
p=p.bs
p.toString
n=u.a
m=u.b
u=u.c
C.b.v(p.a,p.d,n,m,u)
break}switch(r.x){case C.d:break
case C.j:u=this.a
p=this.cy.f
u=u.bv
u.toString
n=p.a
m=p.b
p=p.c
C.b.v(u.a,u.d,n,m,p)
p=this.a
m=this.cy.ch
p=p.bu
C.b.M(p.a,p.d,m)
break
case C.h:this.W(k,this.cy.d)
u=this.a
p=this.cy.d
u.ah(u.e7,u.bw,p)
p=this.a
u=this.cy.f
p=p.bv
p.toString
n=u.a
m=u.b
u=u.c
C.b.v(p.a,p.d,n,m,u)
u=this.a
m=this.cy.ch
u=u.bu
C.b.M(u.a,u.d,m)
break
case C.i:this.W(k,this.cy.e)
u=this.a
p=this.cy.e
u.ab(u.e8,u.bw,p)
p=this.a
u=this.cy.f
p=p.bv
p.toString
n=u.a
m=u.b
u=u.c
C.b.v(p.a,p.d,n,m,u)
u=this.a
m=this.cy.ch
u=u.bu
C.b.M(u.a,u.d,m)
break}}u=r.y
p=u!==C.d
if(p){switch(u){case C.d:break
case C.j:u=this.a
n=this.db.f
u=u.bx
C.b.M(u.a,u.d,n)
break
case C.h:this.W(k,this.db.d)
u=this.a
n=this.db.d
u.ah(u.e9,u.by,n)
n=this.a
u=this.db.f
n=n.bx
C.b.M(n.a,n.d,u)
break
case C.i:this.W(k,this.db.e)
u=this.a
n=this.db.e
u.ab(u.ea,u.by,n)
n=this.a
u=this.db.f
n=n.bx
C.b.M(n.a,n.d,u)
break}C.b.cA(o,3042)
C.b.j5(o,770,771)}for(i=0;i<k.length;++i)k[i].bh(a4)
u=a5.e
u.bh(a4)
u.aL(a4)
u.eL(a4)
if(p)C.b.jm(o,3042)
for(i=0;i<k.length;++i)k[i].eL(a4)
u=this.a
u.toString
C.b.eP(o,null)
u.x.jn()},
i:function(a){var u=this.a
if(u!=null)return u.b
else return this.dj().ai},
sfA:function(a){this.e=H.h(a,"$iV",[V.ae],"$aV")}}
O.eQ.prototype={}
O.d5.prototype={
aF:function(){}}
O.eR.prototype={}
O.aH.prototype={
dI:function(a){var u,t
if(!J.J(this.f,a)){u=this.f
this.f=a
t=new D.H(this.b+".color",u,a,this,[V.W])
t.b=!0
this.a.aa(t)}},
aF:function(){this.f6()
this.dI(new V.W(1,1,1))},
sao:function(a,b){var u
if(this.c===C.d){this.c=C.j
this.aF()
u=this.a
u.a=null
u.aa(null)}this.dI(b)}}
O.eT.prototype={
ib:function(a){var u=this.ch
if(!(Math.abs(u-a)<$.I().a)){this.ch=a
u=new D.H(this.b+".refraction",u,a,this,[P.t])
u.b=!0
this.a.aa(u)}},
aF:function(){this.bQ()
this.ib(1)}}
O.eU.prototype={
cc:function(a){var u=this.ch
if(!(Math.abs(u-a)<$.I().a)){this.ch=a
u=new D.H(this.b+".shininess",u,a,this,[P.t])
u.b=!0
this.a.aa(u)}},
aF:function(){this.bQ()
this.cc(100)}}
O.bC.prototype={}
T.c9.prototype={}
T.fr.prototype={}
T.fv.prototype={
gB:function(){var u=this.y
if(u==null){u=D.K()
this.y=u}return u}}
T.fw.prototype={
jK:function(a,b,c,d,e){var u,t,s,r
u=this.a
t=u.createTexture()
C.b.bi(u,3553,t)
C.b.bF(u,3553,10242,33071)
C.b.bF(u,3553,10243,33071)
C.b.bF(u,3553,10241,9729)
C.b.bF(u,3553,10240,9729)
C.b.bi(u,3553,null);++this.d
s=W.jz(null,a,null)
r=new T.fv()
r.a=0
r.b=t
r.c=!1
r.d=!1
r.e=0
r.f=0
r.r=0
r.x=0
u=W.l
W.a0(s,"load",H.j(new T.fx(this,r,s,!1,t,!1,!1),{func:1,ret:-1,args:[u]}),!1,u)
return r},
jJ:function(a){return this.jK(a,!1,!1,!1,!1)},
i9:function(a,b,c){var u,t,s,r
b=V.jj(b,2)
u=V.jj(a.width,2)
t=V.jj(a.height,2)
u=Math.min(u,b)
t=Math.min(t,b)
if(a.width===u&&a.height===t)return a
else{s=W.iQ(null,null)
s.width=u
s.height=t
r=H.e(C.n.eV(s,"2d"),"$ibl")
r.imageSmoothingEnabled=!1;(r&&C.y).jp(r,a,0,0,s.width,s.height)
return P.mv(C.y.fV(r,0,0,s.width,s.height))}}}
T.fx.prototype={
$1:function(a){var u,t,s,r
u=this.b
t=this.c
u.e=t.width
u.f=t.height
s=this.a
r=s.i9(t,s.b,this.d)
u.r=t.width
u.x=t.height
t=s.a
C.b.bi(t,3553,this.e)
C.b.k7(t,37440,this.f?1:0)
C.b.kj(t,3553,0,6408,6408,5121,r)
if(this.r)C.b.eR(t,3553)
C.b.bi(t,3553,null)
if(!u.d){u.d=!0
u=u.y
if(u!=null)u.js()}++s.e},
$S:10}
T.fy.prototype={}
V.e1.prototype={
aK:function(a){return!0},
i:function(a){return"all"},
$ib_:1}
V.b_.prototype={}
V.d3.prototype={
aK:function(a){var u,t,s
for(u=this.a,t=u.length,s=0;s<u.length;u.length===t||(0,H.z)(u),++s)if(u[s].aK(a))return!0
return!1},
i:function(a){var u,t,s,r,q
for(u=this.a,t=u.length,s="",r=0;r<u.length;u.length===t||(0,H.z)(u),++r){q=u[r]
if(s.length!==0)s+=", "
s+=q.i(0)}return s},
sau:function(a){this.a=H.h(a,"$ia",[V.b_],"$aa")},
$ib_:1}
V.b2.prototype={
aK:function(a){return!this.f5(a)},
i:function(a){return"!["+this.d5(0)+"]"}}
V.fd.prototype={
fa:function(a){var u,t
if(a.a.length<=0)throw H.d(P.u("May not create a SetMatcher with zero characters."))
u=new H.aw([P.m,P.a4])
for(t=new H.d1(a,a.gl(a),0,[H.as(a,"Q",0)]);t.E();)u.q(0,t.d,!0)
this.sia(u)},
aK:function(a){return this.a.bj(a)},
i:function(a){return P.dn(this.a.gcK(),0,null)},
sia:function(a){this.a=H.h(a,"$iD",[P.m,P.a4],"$aD")},
$ib_:1}
V.c7.prototype={
D:function(a,b){var u,t,s,r
for(u=this.c,t=u.length,s=0;s<t;++s){r=u[s]
if(r.b.b===b)return r}r=new V.cb(this.a.N(0,b))
r.sau(H.b([],[V.b_]))
r.c=!1
C.a.h(this.c,r)
return r},
jw:function(a){var u,t,s,r
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.z)(u),++s){r=u[s]
if(r.aK(a))return r}return},
i:function(a){return this.b},
six:function(a){this.c=H.h(a,"$ia",[V.cb],"$aa")}}
V.dx.prototype={
i:function(a){var u,t
u=H.kD(this.b,"\n","\\n")
t=H.kD(u,"\t","\\t")
return this.a+":"+this.c+':"'+t+'"'}}
V.ca.prototype={
i:function(a){return this.b},
si4:function(a){var u=P.k
this.c=H.h(a,"$iD",[u,u],"$aD")}}
V.fA.prototype={
N:function(a,b){var u=this.a.j(0,b)
if(u==null){u=new V.c7(this,b)
u.six(H.b([],[V.cb]))
u.d=null
this.a.q(0,b,u)}return u},
b8:function(a){var u,t
u=this.b.j(0,a)
if(u==null){u=new V.ca(this,a)
t=P.k
u.si4(new H.aw([t,t]))
this.b.q(0,a,u)}return u},
kp:function(a){var u,t,s,r,q,p,o,n,m,l,k,j
u=H.b([],[V.dx])
t=this.c
s=[P.m]
r=H.b([],s)
for(q=a.length,p=null,o=0;!0;){if(o>=q){if(p!=null)C.a.h(u,p)
return u}n=C.c.G(a,o)
m=t.jw(n)
if(m==null){if(p==null){C.a.h(r,n)
l=P.dn(r,0,null)
throw H.d(P.u("Untokenizable string [state: "+t.b+", index "+o+']: "'+l+'"'))}C.a.h(u,p)
o=p.c+1
r=H.b([],s)
t=this.c
p=null}else{if(!m.c)C.a.h(r,n)
t=m.b
if(t.d!=null){l=P.dn(r,0,null)
k=t.d
j=k.c.j(0,l)
p=new V.dx(j==null?k.b:j,l,o)}++o}}},
sil:function(a){this.a=H.h(a,"$iD",[P.k,V.c7],"$aD")},
siq:function(a){this.b=H.h(a,"$iD",[P.k,V.ca],"$aD")}}
V.cb.prototype={
i:function(a){return this.b.b+": "+this.d5(0)}}
X.cL.prototype={$ib1:1}
X.ev.prototype={
gB:function(){var u=this.x
if(u==null){u=D.K()
this.x=u}return u}}
X.dd.prototype={
gB:function(){var u=this.f
if(u==null){u=D.K()
this.f=u}return u},
aD:function(a){var u
H.e(a,"$ix")
u=this.f
if(u!=null)u.H(a)},
fs:function(){return this.aD(null)},
sb1:function(a){var u,t
if(!J.J(this.b,a)){u=this.b
if(u!=null)u.gB().K(0,this.gd9())
t=this.b
this.b=a
if(a!=null)a.gB().h(0,this.gd9())
u=new D.H("mover",t,this.b,this,[U.a2])
u.b=!0
this.aD(u)}},
$ib1:1,
$icL:1}
X.dr.prototype={}
V.iH.prototype={
$1:function(a){H.e(a,"$iaK")
P.jk(C.e.eK(this.a.gjA(),2)+" fps")},
$S:46}
V.f4.prototype={
ci:function(a,b,c,d){var u,t,s,r,q,p,o,n
H.j(c,{func:1,ret:-1})
if(this.c==null)return
u=this.a
t=P.fV().gb5().j(0,H.i(u))
if(t==null)if(d){c.$0()
this.aS(b)
s=!0}else s=!1
else if(t===b){c.$0()
s=!0}else s=!1
r=document
q=r.createElement("label")
p=q.style
p.whiteSpace="nowrap"
J.bP(this.c).h(0,q)
o=W.le("radio")
o.checked=s
o.name=u
u=W.l
W.a0(o,"change",H.j(new V.f5(this,o,c,b),{func:1,ret:-1,args:[u]}),!1,u)
C.C.X(q,o)
n=r.createElement("span")
n.textContent=b
C.C.X(q,n)
J.bP(this.c).h(0,r.createElement("br"))},
a0:function(a,b,c){return this.ci(a,b,c,!1)},
aS:function(a){var u,t,s,r,q
u=P.fV()
t=P.k
s=P.jD(u.gb5(),t,t)
s.q(0,this.a,a)
r=u.cV(s)
t=window.history
q=r.i(0)
t.toString;(t&&C.z).dF(t,new P.dS([],[]).bI(""),"",q)}}
V.f5.prototype={
$1:function(a){if(this.b.checked){this.c.$0()
this.a.aS(this.d)}},
$S:10}
V.fh.prototype={
fc:function(a,b){var u,t,s,r,q,p,o
u=document
t=u.body
s=u.createElement("div")
s.className="scrollTop";(t&&C.x).X(t,s)
r=u.createElement("div")
r.className="scrollPage"
C.x.X(t,r)
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
o=W.l
W.a0(u,"scroll",H.j(new V.fj(s),{func:1,ret:-1,args:[o]}),!1,o)},
dN:function(a){var u,t,s,r,q,p,o,n,m,l,k
H.h(a,"$ia",[P.k],"$aa")
this.ig()
u=document
t=u.createElement("div")
t.className="textPar"
for(s=this.b.kp(C.a.jG(a)),r=s.length,q=0;q<s.length;s.length===r||(0,H.z)(s),++q){p=s[q]
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
if(H.mW(n,"|",0)){m=n.split("|")
l=u.createElement("a")
l.className="linkPar"
if(1>=m.length)return H.c(m,1)
l.href=H.O(m[1])
l.textContent=H.O(m[0])
C.l.X(t,l)}else{k=P.hU(C.a_,n,C.m,!1)
l=u.createElement("a")
l.className="linkPar"
l.href="#"+H.i(k)
l.textContent=n
C.l.X(t,l)}break
case"Other":o=u.createElement("div")
o.className="normalPar"
o.textContent=p.b
C.l.X(t,o)
break}}C.l.X(this.a,t)},
iZ:function(a){var u,t,s,r,q,p,o
H.h(a,"$ia",[P.k],"$aa")
u=document
t=u.createElement("table")
t.id="shellTable"
s=t.style
s.width="100%"
s.padding="0px"
s.marginLeft="auto"
s.marginRight="auto"
C.l.X(this.a,t)
r=C.a4.fX(t,-1)
s=H.e((r&&C.H).dt(r,-1),"$iaJ").style
s.textAlign="center"
s.verticalAlign="top"
s.marginLeft="auto"
s.marginRight="auto"
for(q=0;q<3;++q){p=u.createElement("div")
p.id=a[q]
s=p.style
s.textAlign="left"
s=p.style
s.verticalAlign="top"
o=H.e(C.H.dt(r,-1),"$iaJ")
s=o.style
s.textAlign="center"
s.verticalAlign="top"
s.marginLeft="auto"
s.marginRight="auto";(o&&C.a3).X(o,p)}},
ig:function(){var u,t,s,r
if(this.b!=null)return
u=new V.fA()
t=P.k
u.sil(new H.aw([t,V.c7]))
u.siq(new H.aw([t,V.ca]))
u.c=null
u.c=u.N(0,"Start")
t=u.N(0,"Start").D(0,"Bold")
s=V.a8(new H.Z("*"))
C.a.h(t.a,s)
t.c=!0
t=u.N(0,"Bold").D(0,"Bold")
s=new V.b2()
r=[V.b_]
s.sau(H.b([],r))
C.a.h(t.a,s)
t=V.a8(new H.Z("*"))
C.a.h(s.a,t)
t=u.N(0,"Bold").D(0,"BoldEnd")
s=V.a8(new H.Z("*"))
C.a.h(t.a,s)
t.c=!0
t=u.N(0,"Start").D(0,"Italic")
s=V.a8(new H.Z("_"))
C.a.h(t.a,s)
t.c=!0
t=u.N(0,"Italic").D(0,"Italic")
s=new V.b2()
s.sau(H.b([],r))
C.a.h(t.a,s)
t=V.a8(new H.Z("_"))
C.a.h(s.a,t)
t=u.N(0,"Italic").D(0,"ItalicEnd")
s=V.a8(new H.Z("_"))
C.a.h(t.a,s)
t.c=!0
t=u.N(0,"Start").D(0,"Code")
s=V.a8(new H.Z("`"))
C.a.h(t.a,s)
t.c=!0
t=u.N(0,"Code").D(0,"Code")
s=new V.b2()
s.sau(H.b([],r))
C.a.h(t.a,s)
t=V.a8(new H.Z("`"))
C.a.h(s.a,t)
t=u.N(0,"Code").D(0,"CodeEnd")
s=V.a8(new H.Z("`"))
C.a.h(t.a,s)
t.c=!0
t=u.N(0,"Start").D(0,"LinkHead")
s=V.a8(new H.Z("["))
C.a.h(t.a,s)
t.c=!0
t=u.N(0,"LinkHead").D(0,"LinkTail")
s=V.a8(new H.Z("|"))
C.a.h(t.a,s)
s=u.N(0,"LinkHead").D(0,"LinkEnd")
t=V.a8(new H.Z("]"))
C.a.h(s.a,t)
s.c=!0
s=u.N(0,"LinkHead").D(0,"LinkHead")
t=new V.b2()
t.sau(H.b([],r))
C.a.h(s.a,t)
s=V.a8(new H.Z("|]"))
C.a.h(t.a,s)
s=u.N(0,"LinkTail").D(0,"LinkEnd")
t=V.a8(new H.Z("]"))
C.a.h(s.a,t)
s.c=!0
s=u.N(0,"LinkTail").D(0,"LinkTail")
t=new V.b2()
t.sau(H.b([],r))
C.a.h(s.a,t)
s=V.a8(new H.Z("|]"))
C.a.h(t.a,s)
C.a.h(u.N(0,"Start").D(0,"Other").a,new V.e1())
s=u.N(0,"Other").D(0,"Other")
t=new V.b2()
t.sau(H.b([],r))
C.a.h(s.a,t)
s=V.a8(new H.Z("*_`["))
C.a.h(t.a,s)
s=u.N(0,"BoldEnd")
s.d=s.a.b8("Bold")
s=u.N(0,"ItalicEnd")
s.d=s.a.b8("Italic")
s=u.N(0,"CodeEnd")
s.d=s.a.b8("Code")
s=u.N(0,"LinkEnd")
s.d=s.a.b8("Link")
s=u.N(0,"Other")
s.d=s.a.b8("Other")
this.b=u}}
V.fj.prototype={
$1:function(a){P.jU(C.u,new V.fi(this.a))},
$S:10}
V.fi.prototype={
$0:function(){var u,t,s
u=C.e.aj(document.documentElement.scrollTop)
t=this.a.style
s=H.i(-0.01*u)+"px"
t.top=s},
$S:0}
V.fs.prototype={
a0:function(a,b,c){var u,t,s,r,q
u=W.jz(null,null,null)
u.src=b
u.width=64
u.height=64
t=u.style
t.border="solid 2px white"
t=J.bP(this.c)
s=t.gl(t)
t=W.Y
W.a0(u,"click",H.j(new V.fu(this,u,b,s),{func:1,ret:-1,args:[t]}),!1,t)
J.bP(this.c).h(0,u)
J.bP(this.c).h(0,document.createElement("br"))
r=P.fV().gb5().j(0,H.i(this.a))
if(r==null){this.aS(s)
q=c}else q=P.cy(r,null,null)===s
if(q)u.click()},
h:function(a,b){return this.a0(a,b,!1)},
aS:function(a){var u,t,s,r,q
u=P.fV()
t=P.k
s=P.jD(u.gb5(),t,t)
s.q(0,this.a,""+a)
r=u.cV(s)
t=window.history
q=r.i(0)
t.toString;(t&&C.z).dF(t,new P.dS([],[]).bI(""),"",q)}}
V.fu.prototype={
$1:function(a){var u,t
H.e(a,"$iY")
u=this.a
t=J.bP(u.c)
t.R(t,new V.ft())
t=this.b.style
t.border="solid 2px black"
u.d.$1(this.c)
u.aS(this.d)},
$S:47}
V.ft.prototype={
$1:function(a){var u
H.e(a,"$iP")
if(!!J.N(a).$ibt){u=a.style
u.border="solid 2px white"}},
$S:48}
K.im.prototype={
$0:function(){var u,t,s,r
u=this.a
if(u.a!=null&&u.b.length!==0){t=this.b
s=t.f.jJ(u.b)
r=s.y
if(r==null){r=D.K()
s.y=r}r.h(0,new K.il(u,t,s,this.c))}},
$S:0}
K.il.prototype={
$1:function(a){var u,t,s,r,q,p
H.e(a,"$ix")
u=this.b.f
t=this.c
s=t.r
r=t.x
u=u.a
C.b.co(u,36160,u.createFramebuffer())
C.b.jB(u,36160,36064,3553,t.b,0)
if(typeof s!=="number")return s.k()
if(typeof r!=="number")return H.q(r)
q=new Uint8Array(s*r*4)
C.b.i0(u,0,0,s,r,6408,5121,q)
C.b.co(u,36160,null)
u=this.a
t=u.a
p=F.iZ()
p.bB(t)
p.a4()
p.j2(new T.fy(q,s,r),u.c)
u=$.aB()
u.toString
p.ks(new Z.aA($.jm().a&~u.a))
p.kq(!1)
p.a4()
this.d.sd3(0,p)},
$S:8}
K.io.prototype={
$1:function(a){this.a.b=a
this.b.$0()},
$S:21}
K.ip.prototype={
$1:function(a){this.a.a=a
this.b.$0()},
$S:49}
K.ix.prototype={
$0:function(){this.a.$1(F.ks(50,null,null,50))},
$S:0}
K.iy.prototype={
$0:function(){this.a.$1(F.mw(1,!1,!1,80,80,1))},
$S:0}
K.iz.prototype={
$0:function(){this.a.$1(F.mM(80,80))},
$S:0}
K.iA.prototype={
$0:function(){this.a.$1(F.mV(50,null,1,50))},
$S:0}
K.iB.prototype={
$0:function(){this.a.$1(F.mY(50,1,50,0.5))},
$S:0}
K.iC.prototype={
$0:function(){this.a.$1(F.jg(50,null,50))},
$S:0}
K.iD.prototype={
$0:function(){this.a.$1(F.jg(100,null,100))},
$S:0}
K.iE.prototype={
$0:function(){this.a.$1(F.jg(150,null,150))},
$S:0}
K.iq.prototype={
$1:function(a){this.a.c=a
this.b.$0()},
$S:50}
K.ir.prototype={
$0:function(){this.a.$1(0.1)},
$S:0}
K.is.prototype={
$0:function(){this.a.$1(0.2)},
$S:0}
K.it.prototype={
$0:function(){this.a.$1(0.4)},
$S:0}
K.iu.prototype={
$0:function(){this.a.$1(0.6)},
$S:0}
K.iv.prototype={
$0:function(){this.a.$1(0.8)},
$S:0}
K.iw.prototype={
$0:function(){this.a.$1(1)},
$S:0};(function aliases(){var u=J.a5.prototype
u.f3=u.i
u=J.cY.prototype
u.f4=u.i
u=O.d5.prototype
u.f6=u.aF
u=O.aH.prototype
u.bQ=u.aF
u=V.d3.prototype
u.f5=u.aK
u.d5=u.i})();(function installTearOffs(){var u=hunkHelpers._static_1,t=hunkHelpers._static_0,s=hunkHelpers.installInstanceTearOff,r=hunkHelpers._instance_2u,q=hunkHelpers._instance_0u,p=hunkHelpers._instance_1u,o=hunkHelpers._instance_0i
u(P,"mp","lW",13)
u(P,"mq","lX",13)
u(P,"mr","lY",13)
t(P,"kq","mo",3)
var n
s(n=E.ad.prototype,"gey",0,0,null,["$1","$0"],["ez","jU"],1,0)
s(n,"geA",0,0,null,["$1","$0"],["eB","jV"],1,0)
s(n,"gew",0,0,null,["$1","$0"],["ex","jT"],1,0)
s(n,"geu",0,0,null,["$1","$0"],["ev","jQ"],1,0)
r(n,"gjO","jP",9)
r(n,"gjR","jS",9)
s(n=E.dw.prototype,"gd6",0,0,null,["$1","$0"],["d8","d7"],1,0)
q(n,"gke","eG",3)
p(n=X.dD.prototype,"ght","hu",14)
p(n,"ghf","hg",14)
p(n,"ghn","ho",5)
p(n,"ghx","hy",23)
p(n,"ghv","hw",23)
p(n,"ghB","hC",5)
p(n,"ghF","hG",5)
p(n,"ghr","hs",5)
p(n,"ghD","hE",5)
p(n,"ghp","hq",5)
p(n,"ghH","hI",43)
p(n,"ghJ","hK",14)
p(n,"ghW","hX",12)
p(n,"ghS","hT",12)
p(n,"ghU","hV",12)
s(D.b9.prototype,"gfg",0,0,null,["$1","$0"],["ar","fh"],1,0)
s(n=D.d0.prototype,"gdA",0,0,null,["$1","$0"],["dB","hz"],1,0)
p(n,"ghM","hN",35)
r(n,"gh9","ha",20)
r(n,"ghQ","hR",20)
o(V.L.prototype,"gl","cL",19)
o(V.A.prototype,"gl","cL",19)
s(n=U.bX.prototype,"gaA",0,0,null,["$1","$0"],["O","a3"],1,0)
r(n,"gh7","h8",18)
r(n,"ghO","hP",18)
s(n=U.dE.prototype,"gaA",0,0,null,["$1","$0"],["O","a3"],1,0)
p(n,"gc_","c0",2)
p(n,"gc1","c2",2)
p(n,"gc3","c4",2)
s(n=U.dF.prototype,"gaA",0,0,null,["$1","$0"],["O","a3"],1,0)
p(n,"gc_","c0",2)
p(n,"gc1","c2",2)
p(n,"gc3","c4",2)
p(n,"gh1","h2",2)
p(n,"gh3","h4",2)
p(n,"giv","iw",2)
p(n,"git","iu",2)
p(n,"gir","is",2)
p(U.dG.prototype,"gh5","h6",2)
s(n=M.cP.prototype,"gaB",0,0,null,["$1","$0"],["aC","fi"],1,0)
r(n,"ghj","hk",9)
r(n,"ghl","hm",9)
s(n=O.d4.prototype,"ghh",0,0,null,["$1","$0"],["aa","hi"],1,0)
s(n,"gi7",0,0,null,["$1","$0"],["dG","i8"],1,0)
r(n,"ghb","hc",16)
r(n,"ghd","he",16)
s(X.dd.prototype,"gd9",0,0,null,["$1","$0"],["aD","fs"],1,0)})();(function inheritance(){var u=hunkHelpers.mixin,t=hunkHelpers.inherit,s=hunkHelpers.inheritMany
t(P.F,null)
s(P.F,[H.iW,J.a5,J.aj,P.dO,P.n,H.d1,P.aF,H.br,H.cj,H.ed,H.f6,H.fD,P.ba,H.bS,H.dR,P.eL,H.eD,H.eF,H.ez,P.dT,P.aN,P.aq,P.dI,P.fm,P.c8,P.fn,P.aK,P.ab,P.hY,P.hJ,P.cn,P.hD,P.Q,P.hP,P.eM,P.bm,P.hX,P.hV,P.a4,P.ac,P.aa,P.aE,P.f1,P.dl,P.dL,P.eu,P.a,P.D,P.y,P.ak,P.k,P.af,P.bD,P.fT,P.hK,W.ef,W.au,W.cR,P.hL,P.dW,P.hE,P.G,O.V,O.c_,E.e7,E.ad,E.f7,E.dw,Z.dH,Z.he,Z.cJ,Z.bb,Z.aA,D.ea,D.bp,D.x,X.cK,X.cZ,X.eB,X.eI,X.am,X.eV,X.fB,X.dD,D.b9,D.a_,D.de,D.dk,D.dt,D.du,D.dv,V.W,V.aU,V.em,V.d6,V.ae,V.a6,V.T,V.b3,V.di,V.L,V.A,U.dE,U.dF,U.dG,M.cP,A.cF,A.e4,A.eS,A.cc,A.cg,A.ce,A.ch,A.cf,A.ci,A.bn,A.dz,A.fN,F.a1,F.ep,F.aZ,F.eC,F.bd,F.bB,F.fe,F.ff,F.fg,F.ai,F.h2,F.h3,F.h6,F.h8,F.h9,F.ha,O.bC,O.d5,T.fw,T.fy,V.e1,V.b_,V.d3,V.fd,V.c7,V.dx,V.ca,V.fA,X.cL,X.dr,X.dd,V.f4,V.fh,V.fs])
s(J.a5,[J.ey,J.cX,J.cY,J.av,J.bc,J.aW,H.bw,W.bq,W.bl,W.dJ,W.eh,W.cO,W.l,W.cT,W.dM,W.aV,W.dP,W.ax,W.dU,P.cH,P.cS,P.dg,P.bA,P.dj,P.ds,P.dA])
s(J.cY,[J.f2,J.bg,J.aX])
t(J.iV,J.av)
s(J.bc,[J.cW,J.cV])
t(P.eH,P.dO)
s(P.eH,[H.dB,W.hm,W.hl,P.eq])
t(H.Z,H.dB)
s(P.n,[H.ek,H.eN,H.hf])
s(P.aF,[H.eO,H.hg])
t(H.ee,H.ed)
s(P.ba,[H.f0,H.eA,H.fR,H.fF,H.e9,H.fb,P.dc,P.aC,P.fS,P.fP,P.dm,P.ec,P.eg])
s(H.bS,[H.iL,H.fq,H.ig,H.ih,H.ii,P.hi,P.hh,P.hj,P.hk,P.hO,P.hN,P.hr,P.hv,P.hs,P.ht,P.hu,P.hy,P.hz,P.hx,P.hw,P.fo,P.fp,P.i5,P.hH,P.hG,P.hI,P.eG,P.eK,P.hW,P.ei,P.ej,P.fY,P.fU,P.fW,P.fX,P.hQ,P.hR,P.hT,P.hS,P.i1,P.i0,P.i2,P.i3,W.hq,P.hM,P.i7,P.er,P.es,E.f8,E.f9,E.fa,E.fz,D.eo,F.hZ,F.i8,F.ia,F.ik,F.iI,F.iJ,F.iK,F.i9,F.ic,F.id,F.hc,F.hb,F.h4,F.h5,T.fx,V.iH,V.f5,V.fj,V.fi,V.fu,V.ft,K.im,K.il,K.io,K.ip,K.ix,K.iy,K.iz,K.iA,K.iB,K.iC,K.iD,K.iE,K.iq,K.ir,K.is,K.it,K.iu,K.iv,K.iw])
s(H.fq,[H.fl,H.bQ])
t(P.eJ,P.eL)
t(H.aw,P.eJ)
t(H.eE,H.ek)
t(H.d8,H.bw)
s(H.d8,[H.co,H.cq])
t(H.cp,H.co)
t(H.d9,H.cp)
t(H.cr,H.cq)
t(H.da,H.cr)
s(H.da,[H.eW,H.eX,H.eY,H.eZ,H.db,H.c2])
t(P.hF,P.hY)
t(P.hC,P.hJ)
t(P.dX,P.eM)
t(P.dC,P.dX)
s(P.bm,[P.e5,P.el])
t(P.bo,P.fn)
s(P.bo,[P.e6,P.h0,P.h_])
t(P.fZ,P.el)
s(P.aa,[P.t,P.m])
s(P.aC,[P.bz,P.ew])
t(P.hn,P.bD)
s(W.bq,[W.E,W.cl])
s(W.E,[W.P,W.b7,W.bV])
s(W.P,[W.v,P.o])
s(W.v,[W.e2,W.e3,W.cG,W.bk,W.bU,W.et,W.bt,W.bZ,W.d_,W.c0,W.fc,W.aJ,W.dp,W.dq])
t(W.bT,W.dJ)
t(W.dN,W.dM)
t(W.bs,W.dN)
t(W.cU,W.bV)
t(W.bf,W.l)
s(W.bf,[W.aG,W.Y,W.ay])
t(W.dQ,W.dP)
t(W.c3,W.dQ)
t(W.dV,W.dU)
t(W.fC,W.dV)
t(W.hd,W.c0)
t(W.aM,W.Y)
t(W.dK,W.cO)
t(W.ho,P.fm)
t(W.j5,W.ho)
t(W.hp,P.c8)
t(P.dS,P.hL)
t(P.ao,P.hE)
s(E.e7,[Z.cI,A.c6,T.c9])
s(D.x,[D.bu,D.bv,D.H,X.f3])
s(X.f3,[X.d2,X.b0,X.c1,X.dy])
s(O.V,[D.d0,U.bX])
s(D.ea,[U.eb,U.a2])
t(U.cM,U.a2)
t(A.eP,A.c6)
s(A.dz,[A.C,A.fJ,A.fK,A.fM,A.fH,A.S,A.fI,A.B,A.fL,A.fO,A.cd,A.an,A.ag,A.ah])
t(F.fk,F.ep)
t(F.fG,F.eC)
t(F.h7,F.h8)
t(F.f_,F.h9)
t(O.d4,O.bC)
s(O.d5,[O.eQ,O.eR,O.aH])
s(O.aH,[O.eT,O.eU])
t(T.fr,T.c9)
t(T.fv,T.fr)
s(V.d3,[V.b2,V.cb])
t(X.ev,X.dr)
u(H.dB,H.cj)
u(H.co,P.Q)
u(H.cp,H.br)
u(H.cq,P.Q)
u(H.cr,H.br)
u(P.dO,P.Q)
u(P.dX,P.hP)
u(W.dJ,W.ef)
u(W.dM,P.Q)
u(W.dN,W.au)
u(W.dP,P.Q)
u(W.dQ,W.au)
u(W.dU,P.Q)
u(W.dV,W.au)})();(function constants(){var u=hunkHelpers.makeConstList
C.x=W.cG.prototype
C.n=W.bk.prototype
C.y=W.bl.prototype
C.l=W.bU.prototype
C.z=W.cT.prototype
C.v=W.cU.prototype
C.P=J.a5.prototype
C.a=J.av.prototype
C.Q=J.cV.prototype
C.f=J.cW.prototype
C.o=J.cX.prototype
C.e=J.bc.prototype
C.c=J.aW.prototype
C.X=J.aX.prototype
C.C=W.d_.prototype
C.a2=W.c3.prototype
C.G=J.f2.prototype
C.b=P.bA.prototype
C.a3=W.aJ.prototype
C.a4=W.dp.prototype
C.H=W.dq.prototype
C.w=J.bg.prototype
C.I=W.aM.prototype
C.J=W.cl.prototype
C.L=new P.e6(!1)
C.K=new P.e5(C.L)
C.M=new P.f1()
C.N=new P.h0()
C.k=new P.hF()
C.d=new A.bn(0,"ColorSourceType.None")
C.j=new A.bn(1,"ColorSourceType.Solid")
C.h=new A.bn(2,"ColorSourceType.Texture2D")
C.i=new A.bn(3,"ColorSourceType.TextureCube")
C.u=new P.aE(0)
C.O=new P.aE(5e6)
C.R=function(hooks) {
  if (typeof dartExperimentalFixupGetTag != "function") return hooks;
  hooks.getTag = dartExperimentalFixupGetTag(hooks.getTag);
}
C.S=function(hooks) {
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

C.T=function(getTagFallback) {
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
C.U=function() {
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
C.V=function(hooks) {
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
C.W=function(hooks) {
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
C.D=H.b(u([127,2047,65535,1114111]),[P.m])
C.p=H.b(u([0,0,32776,33792,1,10240,0,0]),[P.m])
C.q=H.b(u([0,0,65490,45055,65535,34815,65534,18431]),[P.m])
C.r=H.b(u([0,0,26624,1023,65534,2047,65534,2047]),[P.m])
C.Z=H.b(u([0,0,32722,12287,65534,34815,65534,18431]),[P.m])
C.a_=H.b(u([0,0,65498,45055,65535,34815,65534,18431]),[P.m])
C.t=H.b(u([0,0,24576,1023,65534,34815,65534,18431]),[P.m])
C.E=H.b(u([0,0,32754,11263,65534,34815,65534,18431]),[P.m])
C.a0=H.b(u([0,0,32722,12287,65535,34815,65534,18431]),[P.m])
C.F=H.b(u([0,0,65490,12287,65535,34815,65534,18431]),[P.m])
C.Y=H.b(u([]),[P.k])
C.a1=new H.ee(0,{},C.Y,[P.k,P.k])
C.m=new P.fZ(!1)})();(function staticFields(){$.aD=0
$.bR=null
$.js=null
$.j8=!1
$.kw=null
$.ko=null
$.kC=null
$.ib=null
$.ij=null
$.jh=null
$.bF=null
$.cv=null
$.cw=null
$.j9=!1
$.R=C.k
$.jG=null
$.jK=null
$.c4=null
$.jQ=null
$.k_=null
$.k3=null
$.k1=null
$.k2=null
$.h1=null
$.k0=null
$.jJ=null})();(function lazyInitializers(){var u=hunkHelpers.lazy
u($,"n3","kG",function(){return H.kv("_$dart_dartClosure")})
u($,"n4","jl",function(){return H.kv("_$dart_js")})
u($,"n9","kH",function(){return H.aL(H.fE({
toString:function(){return"$receiver$"}}))})
u($,"na","kI",function(){return H.aL(H.fE({$method$:null,
toString:function(){return"$receiver$"}}))})
u($,"nb","kJ",function(){return H.aL(H.fE(null))})
u($,"nc","kK",function(){return H.aL(function(){var $argumentsExpr$='$arguments$'
try{null.$method$($argumentsExpr$)}catch(t){return t.message}}())})
u($,"nf","kN",function(){return H.aL(H.fE(void 0))})
u($,"ng","kO",function(){return H.aL(function(){var $argumentsExpr$='$arguments$'
try{(void 0).$method$($argumentsExpr$)}catch(t){return t.message}}())})
u($,"ne","kM",function(){return H.aL(H.jW(null))})
u($,"nd","kL",function(){return H.aL(function(){try{null.$method$}catch(t){return t.message}}())})
u($,"ni","kQ",function(){return H.aL(H.jW(void 0))})
u($,"nh","kP",function(){return H.aL(function(){try{(void 0).$method$}catch(t){return t.message}}())})
u($,"ny","jo",function(){return P.lV()})
u($,"nC","cB",function(){return[]})
u($,"nk","kR",function(){return P.lS()})
u($,"nz","kT",function(){return H.lr(H.bE(H.b([-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-1,-2,-2,-2,-2,-2,62,-2,62,-2,63,52,53,54,55,56,57,58,59,60,61,-2,-2,-2,-1,-2,-2,-2,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,-2,-2,-2,-2,63,-2,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,-2,-2,-2,-2,-2],[P.m])))})
u($,"nA","kU",function(){return P.lG("^[\\-\\.0-9A-Z_a-z~]*$",!0,!1)})
u($,"nB","kV",function(){return P.mg()})
u($,"nr","kS",function(){return Z.ap(0)})
u($,"nl","jm",function(){return Z.ap(511)})
u($,"nt","aQ",function(){return Z.ap(1)})
u($,"ns","aB",function(){return Z.ap(2)})
u($,"nn","aP",function(){return Z.ap(4)})
u($,"nu","aR",function(){return Z.ap(8)})
u($,"nv","aS",function(){return Z.ap(16)})
u($,"no","cz",function(){return Z.ap(32)})
u($,"np","cA",function(){return Z.ap(64)})
u($,"nq","jn",function(){return Z.ap(96)})
u($,"nw","bj",function(){return Z.ap(128)})
u($,"nm","aO",function(){return Z.ap(256)})
u($,"n2","kF",function(){return new V.em(1e-9)})
u($,"n1","I",function(){return $.kF()})})()
var v={mangledGlobalNames:{m:"int",t:"double",aa:"num",k:"String",a4:"bool",y:"Null",a:"List"},mangledNames:{},getTypeFromName:getGlobalFromName,metadata:[],types:[{func:1,ret:P.y},{func:1,ret:-1,opt:[D.x]},{func:1,ret:-1,args:[D.x]},{func:1,ret:-1},{func:1,ret:P.y,args:[F.ai,P.t,P.t]},{func:1,ret:-1,args:[W.Y]},{func:1,ret:P.y,args:[F.a1]},{func:1,ret:P.y,args:[,,]},{func:1,ret:P.y,args:[D.x]},{func:1,ret:-1,args:[P.m,[P.n,E.ad]]},{func:1,ret:P.y,args:[W.l]},{func:1,ret:P.t,args:[P.t,P.t]},{func:1,ret:-1,args:[W.ay]},{func:1,ret:-1,args:[{func:1,ret:-1}]},{func:1,ret:-1,args:[W.l]},{func:1,ret:P.y,args:[,]},{func:1,ret:-1,args:[P.m,[P.n,V.ae]]},{func:1,ret:P.k,args:[P.m]},{func:1,ret:-1,args:[P.m,[P.n,U.a2]]},{func:1,ret:P.t},{func:1,ret:-1,args:[P.m,[P.n,D.a_]]},{func:1,ret:P.y,args:[P.k]},{func:1,args:[,]},{func:1,ret:-1,args:[W.aG]},{func:1,ret:W.P,args:[W.E]},{func:1,ret:P.k,args:[P.k]},{func:1,ret:P.a4,args:[W.E]},{func:1,args:[W.l]},{func:1,ret:P.y,args:[P.aa]},{func:1,ret:P.y,args:[{func:1,ret:-1,args:[D.x]}]},{func:1,ret:P.G,args:[,,]},{func:1,ret:P.y,args:[{func:1,ret:-1}]},{func:1,ret:P.G,args:[P.m]},{func:1,ret:P.y,args:[P.k,,]},{func:1,ret:-1,args:[P.k,P.k]},{func:1,ret:P.a4,args:[[P.n,D.a_]]},{func:1,ret:P.m,args:[P.m,P.m]},{func:1,ret:-1,args:[P.k],opt:[,]},{func:1,ret:-1,args:[P.k,P.m]},{func:1,args:[,P.k]},{func:1,args:[P.k]},{func:1,ret:[P.D,P.k,P.k],args:[[P.D,P.k,P.k],P.k]},{func:1,ret:V.T,args:[P.t]},{func:1,ret:-1,args:[W.aM]},{func:1,ret:-1,args:[P.m,P.m]},{func:1,ret:P.y,args:[,],opt:[P.ak]},{func:1,ret:P.y,args:[P.aK]},{func:1,ret:P.y,args:[W.Y]},{func:1,ret:P.y,args:[W.P]},{func:1,ret:P.y,args:[F.bB]},{func:1,ret:P.y,args:[P.t]},{func:1,ret:[P.aq,,],args:[,]}],interceptorsByTag:null,leafTags:null};(function nativeSupport(){!function(){var u=function(a){var o={}
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
hunkHelpers.setOrUpdateInterceptorsByTag({DOMError:J.a5,MediaError:J.a5,Navigator:J.a5,NavigatorConcurrentHardware:J.a5,NavigatorUserMediaError:J.a5,OverconstrainedError:J.a5,PositionError:J.a5,WebGLActiveInfo:J.a5,WebGLRenderbuffer:J.a5,WebGL2RenderingContext:J.a5,SQLError:J.a5,ArrayBufferView:H.bw,Float32Array:H.d9,Int16Array:H.eW,Int32Array:H.eX,Int8Array:H.eY,Uint32Array:H.eZ,Uint8ClampedArray:H.db,CanvasPixelArray:H.db,Uint8Array:H.c2,HTMLBRElement:W.v,HTMLBaseElement:W.v,HTMLButtonElement:W.v,HTMLContentElement:W.v,HTMLDListElement:W.v,HTMLDataElement:W.v,HTMLDataListElement:W.v,HTMLDetailsElement:W.v,HTMLDialogElement:W.v,HTMLEmbedElement:W.v,HTMLFieldSetElement:W.v,HTMLHRElement:W.v,HTMLHeadElement:W.v,HTMLHeadingElement:W.v,HTMLHtmlElement:W.v,HTMLIFrameElement:W.v,HTMLLIElement:W.v,HTMLLegendElement:W.v,HTMLLinkElement:W.v,HTMLMapElement:W.v,HTMLMenuElement:W.v,HTMLMetaElement:W.v,HTMLMeterElement:W.v,HTMLModElement:W.v,HTMLOListElement:W.v,HTMLObjectElement:W.v,HTMLOptGroupElement:W.v,HTMLOptionElement:W.v,HTMLOutputElement:W.v,HTMLParagraphElement:W.v,HTMLParamElement:W.v,HTMLPictureElement:W.v,HTMLPreElement:W.v,HTMLProgressElement:W.v,HTMLQuoteElement:W.v,HTMLScriptElement:W.v,HTMLShadowElement:W.v,HTMLSlotElement:W.v,HTMLSourceElement:W.v,HTMLSpanElement:W.v,HTMLStyleElement:W.v,HTMLTableCaptionElement:W.v,HTMLTableColElement:W.v,HTMLTableSectionElement:W.v,HTMLTemplateElement:W.v,HTMLTextAreaElement:W.v,HTMLTimeElement:W.v,HTMLTitleElement:W.v,HTMLTrackElement:W.v,HTMLUListElement:W.v,HTMLUnknownElement:W.v,HTMLDirectoryElement:W.v,HTMLFontElement:W.v,HTMLFrameElement:W.v,HTMLFrameSetElement:W.v,HTMLMarqueeElement:W.v,HTMLElement:W.v,HTMLAnchorElement:W.e2,HTMLAreaElement:W.e3,HTMLBodyElement:W.cG,HTMLCanvasElement:W.bk,CanvasRenderingContext2D:W.bl,CDATASection:W.b7,CharacterData:W.b7,Comment:W.b7,ProcessingInstruction:W.b7,Text:W.b7,CSSStyleDeclaration:W.bT,MSStyleCSSProperties:W.bT,CSS2Properties:W.bT,HTMLDivElement:W.bU,XMLDocument:W.bV,Document:W.bV,DOMException:W.eh,DOMRectReadOnly:W.cO,Element:W.P,AbortPaymentEvent:W.l,AnimationEvent:W.l,AnimationPlaybackEvent:W.l,ApplicationCacheErrorEvent:W.l,BackgroundFetchClickEvent:W.l,BackgroundFetchEvent:W.l,BackgroundFetchFailEvent:W.l,BackgroundFetchedEvent:W.l,BeforeInstallPromptEvent:W.l,BeforeUnloadEvent:W.l,BlobEvent:W.l,CanMakePaymentEvent:W.l,ClipboardEvent:W.l,CloseEvent:W.l,CustomEvent:W.l,DeviceMotionEvent:W.l,DeviceOrientationEvent:W.l,ErrorEvent:W.l,ExtendableEvent:W.l,ExtendableMessageEvent:W.l,FetchEvent:W.l,FontFaceSetLoadEvent:W.l,ForeignFetchEvent:W.l,GamepadEvent:W.l,HashChangeEvent:W.l,InstallEvent:W.l,MediaEncryptedEvent:W.l,MediaKeyMessageEvent:W.l,MediaQueryListEvent:W.l,MediaStreamEvent:W.l,MediaStreamTrackEvent:W.l,MessageEvent:W.l,MIDIConnectionEvent:W.l,MIDIMessageEvent:W.l,MutationEvent:W.l,NotificationEvent:W.l,PageTransitionEvent:W.l,PaymentRequestEvent:W.l,PaymentRequestUpdateEvent:W.l,PopStateEvent:W.l,PresentationConnectionAvailableEvent:W.l,PresentationConnectionCloseEvent:W.l,ProgressEvent:W.l,PromiseRejectionEvent:W.l,PushEvent:W.l,RTCDataChannelEvent:W.l,RTCDTMFToneChangeEvent:W.l,RTCPeerConnectionIceEvent:W.l,RTCTrackEvent:W.l,SecurityPolicyViolationEvent:W.l,SensorErrorEvent:W.l,SpeechRecognitionError:W.l,SpeechRecognitionEvent:W.l,SpeechSynthesisEvent:W.l,StorageEvent:W.l,SyncEvent:W.l,TrackEvent:W.l,TransitionEvent:W.l,WebKitTransitionEvent:W.l,VRDeviceEvent:W.l,VRDisplayEvent:W.l,VRSessionEvent:W.l,MojoInterfaceRequestEvent:W.l,ResourceProgressEvent:W.l,USBConnectionEvent:W.l,IDBVersionChangeEvent:W.l,AudioProcessingEvent:W.l,OfflineAudioCompletionEvent:W.l,WebGLContextEvent:W.l,Event:W.l,InputEvent:W.l,EventTarget:W.bq,HTMLFormElement:W.et,History:W.cT,HTMLCollection:W.bs,HTMLFormControlsCollection:W.bs,HTMLOptionsCollection:W.bs,HTMLDocument:W.cU,ImageData:W.aV,HTMLImageElement:W.bt,HTMLInputElement:W.bZ,KeyboardEvent:W.aG,HTMLLabelElement:W.d_,HTMLAudioElement:W.c0,HTMLMediaElement:W.c0,PointerEvent:W.Y,MouseEvent:W.Y,DragEvent:W.Y,DocumentFragment:W.E,ShadowRoot:W.E,Attr:W.E,DocumentType:W.E,Node:W.E,NodeList:W.c3,RadioNodeList:W.c3,HTMLSelectElement:W.fc,HTMLTableCellElement:W.aJ,HTMLTableDataCellElement:W.aJ,HTMLTableHeaderCellElement:W.aJ,HTMLTableElement:W.dp,HTMLTableRowElement:W.dq,Touch:W.ax,TouchEvent:W.ay,TouchList:W.fC,CompositionEvent:W.bf,FocusEvent:W.bf,TextEvent:W.bf,UIEvent:W.bf,HTMLVideoElement:W.hd,WheelEvent:W.aM,Window:W.cl,DOMWindow:W.cl,ClientRect:W.dK,DOMRect:W.dK,SVGAElement:P.o,SVGAnimateElement:P.o,SVGAnimateMotionElement:P.o,SVGAnimateTransformElement:P.o,SVGAnimationElement:P.o,SVGCircleElement:P.o,SVGClipPathElement:P.o,SVGDefsElement:P.o,SVGDescElement:P.o,SVGDiscardElement:P.o,SVGEllipseElement:P.o,SVGFEBlendElement:P.o,SVGFEColorMatrixElement:P.o,SVGFEComponentTransferElement:P.o,SVGFECompositeElement:P.o,SVGFEConvolveMatrixElement:P.o,SVGFEDiffuseLightingElement:P.o,SVGFEDisplacementMapElement:P.o,SVGFEDistantLightElement:P.o,SVGFEFloodElement:P.o,SVGFEFuncAElement:P.o,SVGFEFuncBElement:P.o,SVGFEFuncGElement:P.o,SVGFEFuncRElement:P.o,SVGFEGaussianBlurElement:P.o,SVGFEImageElement:P.o,SVGFEMergeElement:P.o,SVGFEMergeNodeElement:P.o,SVGFEMorphologyElement:P.o,SVGFEOffsetElement:P.o,SVGFEPointLightElement:P.o,SVGFESpecularLightingElement:P.o,SVGFESpotLightElement:P.o,SVGFETileElement:P.o,SVGFETurbulenceElement:P.o,SVGFilterElement:P.o,SVGForeignObjectElement:P.o,SVGGElement:P.o,SVGGeometryElement:P.o,SVGGraphicsElement:P.o,SVGImageElement:P.o,SVGLineElement:P.o,SVGLinearGradientElement:P.o,SVGMarkerElement:P.o,SVGMaskElement:P.o,SVGMetadataElement:P.o,SVGPathElement:P.o,SVGPatternElement:P.o,SVGPolygonElement:P.o,SVGPolylineElement:P.o,SVGRadialGradientElement:P.o,SVGRectElement:P.o,SVGScriptElement:P.o,SVGSetElement:P.o,SVGStopElement:P.o,SVGStyleElement:P.o,SVGElement:P.o,SVGSVGElement:P.o,SVGSwitchElement:P.o,SVGSymbolElement:P.o,SVGTSpanElement:P.o,SVGTextContentElement:P.o,SVGTextElement:P.o,SVGTextPathElement:P.o,SVGTextPositioningElement:P.o,SVGTitleElement:P.o,SVGUseElement:P.o,SVGViewElement:P.o,SVGGradientElement:P.o,SVGComponentTransferFunctionElement:P.o,SVGFEDropShadowElement:P.o,SVGMPathElement:P.o,WebGLBuffer:P.cH,WebGLFramebuffer:P.cS,WebGLProgram:P.dg,WebGLRenderingContext:P.bA,WebGLShader:P.dj,WebGLTexture:P.ds,WebGLUniformLocation:P.dA})
hunkHelpers.setOrUpdateLeafTags({DOMError:true,MediaError:true,Navigator:true,NavigatorConcurrentHardware:true,NavigatorUserMediaError:true,OverconstrainedError:true,PositionError:true,WebGLActiveInfo:true,WebGLRenderbuffer:true,WebGL2RenderingContext:true,SQLError:true,ArrayBufferView:false,Float32Array:true,Int16Array:true,Int32Array:true,Int8Array:true,Uint32Array:true,Uint8ClampedArray:true,CanvasPixelArray:true,Uint8Array:false,HTMLBRElement:true,HTMLBaseElement:true,HTMLButtonElement:true,HTMLContentElement:true,HTMLDListElement:true,HTMLDataElement:true,HTMLDataListElement:true,HTMLDetailsElement:true,HTMLDialogElement:true,HTMLEmbedElement:true,HTMLFieldSetElement:true,HTMLHRElement:true,HTMLHeadElement:true,HTMLHeadingElement:true,HTMLHtmlElement:true,HTMLIFrameElement:true,HTMLLIElement:true,HTMLLegendElement:true,HTMLLinkElement:true,HTMLMapElement:true,HTMLMenuElement:true,HTMLMetaElement:true,HTMLMeterElement:true,HTMLModElement:true,HTMLOListElement:true,HTMLObjectElement:true,HTMLOptGroupElement:true,HTMLOptionElement:true,HTMLOutputElement:true,HTMLParagraphElement:true,HTMLParamElement:true,HTMLPictureElement:true,HTMLPreElement:true,HTMLProgressElement:true,HTMLQuoteElement:true,HTMLScriptElement:true,HTMLShadowElement:true,HTMLSlotElement:true,HTMLSourceElement:true,HTMLSpanElement:true,HTMLStyleElement:true,HTMLTableCaptionElement:true,HTMLTableColElement:true,HTMLTableSectionElement:true,HTMLTemplateElement:true,HTMLTextAreaElement:true,HTMLTimeElement:true,HTMLTitleElement:true,HTMLTrackElement:true,HTMLUListElement:true,HTMLUnknownElement:true,HTMLDirectoryElement:true,HTMLFontElement:true,HTMLFrameElement:true,HTMLFrameSetElement:true,HTMLMarqueeElement:true,HTMLElement:false,HTMLAnchorElement:true,HTMLAreaElement:true,HTMLBodyElement:true,HTMLCanvasElement:true,CanvasRenderingContext2D:true,CDATASection:true,CharacterData:true,Comment:true,ProcessingInstruction:true,Text:true,CSSStyleDeclaration:true,MSStyleCSSProperties:true,CSS2Properties:true,HTMLDivElement:true,XMLDocument:true,Document:false,DOMException:true,DOMRectReadOnly:false,Element:false,AbortPaymentEvent:true,AnimationEvent:true,AnimationPlaybackEvent:true,ApplicationCacheErrorEvent:true,BackgroundFetchClickEvent:true,BackgroundFetchEvent:true,BackgroundFetchFailEvent:true,BackgroundFetchedEvent:true,BeforeInstallPromptEvent:true,BeforeUnloadEvent:true,BlobEvent:true,CanMakePaymentEvent:true,ClipboardEvent:true,CloseEvent:true,CustomEvent:true,DeviceMotionEvent:true,DeviceOrientationEvent:true,ErrorEvent:true,ExtendableEvent:true,ExtendableMessageEvent:true,FetchEvent:true,FontFaceSetLoadEvent:true,ForeignFetchEvent:true,GamepadEvent:true,HashChangeEvent:true,InstallEvent:true,MediaEncryptedEvent:true,MediaKeyMessageEvent:true,MediaQueryListEvent:true,MediaStreamEvent:true,MediaStreamTrackEvent:true,MessageEvent:true,MIDIConnectionEvent:true,MIDIMessageEvent:true,MutationEvent:true,NotificationEvent:true,PageTransitionEvent:true,PaymentRequestEvent:true,PaymentRequestUpdateEvent:true,PopStateEvent:true,PresentationConnectionAvailableEvent:true,PresentationConnectionCloseEvent:true,ProgressEvent:true,PromiseRejectionEvent:true,PushEvent:true,RTCDataChannelEvent:true,RTCDTMFToneChangeEvent:true,RTCPeerConnectionIceEvent:true,RTCTrackEvent:true,SecurityPolicyViolationEvent:true,SensorErrorEvent:true,SpeechRecognitionError:true,SpeechRecognitionEvent:true,SpeechSynthesisEvent:true,StorageEvent:true,SyncEvent:true,TrackEvent:true,TransitionEvent:true,WebKitTransitionEvent:true,VRDeviceEvent:true,VRDisplayEvent:true,VRSessionEvent:true,MojoInterfaceRequestEvent:true,ResourceProgressEvent:true,USBConnectionEvent:true,IDBVersionChangeEvent:true,AudioProcessingEvent:true,OfflineAudioCompletionEvent:true,WebGLContextEvent:true,Event:false,InputEvent:false,EventTarget:false,HTMLFormElement:true,History:true,HTMLCollection:true,HTMLFormControlsCollection:true,HTMLOptionsCollection:true,HTMLDocument:true,ImageData:true,HTMLImageElement:true,HTMLInputElement:true,KeyboardEvent:true,HTMLLabelElement:true,HTMLAudioElement:true,HTMLMediaElement:false,PointerEvent:true,MouseEvent:false,DragEvent:false,DocumentFragment:true,ShadowRoot:true,Attr:true,DocumentType:true,Node:false,NodeList:true,RadioNodeList:true,HTMLSelectElement:true,HTMLTableCellElement:true,HTMLTableDataCellElement:true,HTMLTableHeaderCellElement:true,HTMLTableElement:true,HTMLTableRowElement:true,Touch:true,TouchEvent:true,TouchList:true,CompositionEvent:true,FocusEvent:true,TextEvent:true,UIEvent:false,HTMLVideoElement:true,WheelEvent:true,Window:true,DOMWindow:true,ClientRect:true,DOMRect:true,SVGAElement:true,SVGAnimateElement:true,SVGAnimateMotionElement:true,SVGAnimateTransformElement:true,SVGAnimationElement:true,SVGCircleElement:true,SVGClipPathElement:true,SVGDefsElement:true,SVGDescElement:true,SVGDiscardElement:true,SVGEllipseElement:true,SVGFEBlendElement:true,SVGFEColorMatrixElement:true,SVGFEComponentTransferElement:true,SVGFECompositeElement:true,SVGFEConvolveMatrixElement:true,SVGFEDiffuseLightingElement:true,SVGFEDisplacementMapElement:true,SVGFEDistantLightElement:true,SVGFEFloodElement:true,SVGFEFuncAElement:true,SVGFEFuncBElement:true,SVGFEFuncGElement:true,SVGFEFuncRElement:true,SVGFEGaussianBlurElement:true,SVGFEImageElement:true,SVGFEMergeElement:true,SVGFEMergeNodeElement:true,SVGFEMorphologyElement:true,SVGFEOffsetElement:true,SVGFEPointLightElement:true,SVGFESpecularLightingElement:true,SVGFESpotLightElement:true,SVGFETileElement:true,SVGFETurbulenceElement:true,SVGFilterElement:true,SVGForeignObjectElement:true,SVGGElement:true,SVGGeometryElement:true,SVGGraphicsElement:true,SVGImageElement:true,SVGLineElement:true,SVGLinearGradientElement:true,SVGMarkerElement:true,SVGMaskElement:true,SVGMetadataElement:true,SVGPathElement:true,SVGPatternElement:true,SVGPolygonElement:true,SVGPolylineElement:true,SVGRadialGradientElement:true,SVGRectElement:true,SVGScriptElement:true,SVGSetElement:true,SVGStopElement:true,SVGStyleElement:true,SVGElement:true,SVGSVGElement:true,SVGSwitchElement:true,SVGSymbolElement:true,SVGTSpanElement:true,SVGTextContentElement:true,SVGTextElement:true,SVGTextPathElement:true,SVGTextPositioningElement:true,SVGTitleElement:true,SVGUseElement:true,SVGViewElement:true,SVGGradientElement:true,SVGComponentTransferFunctionElement:true,SVGFEDropShadowElement:true,SVGMPathElement:true,WebGLBuffer:true,WebGLFramebuffer:true,WebGLProgram:true,WebGLRenderingContext:true,WebGLShader:true,WebGLTexture:true,WebGLUniformLocation:true})
H.d8.$nativeSuperclassTag="ArrayBufferView"
H.co.$nativeSuperclassTag="ArrayBufferView"
H.cp.$nativeSuperclassTag="ArrayBufferView"
H.d9.$nativeSuperclassTag="ArrayBufferView"
H.cq.$nativeSuperclassTag="ArrayBufferView"
H.cr.$nativeSuperclassTag="ArrayBufferView"
H.da.$nativeSuperclassTag="ArrayBufferView"})()
convertAllToFastObject(w)
convertToFastObject($);(function(a){if(typeof document==="undefined"){a(null)
return}if(typeof document.currentScript!='undefined'){a(document.currentScript)
return}var u=document.scripts
function onLoad(b){for(var s=0;s<u.length;++s)u[s].removeEventListener("load",onLoad,false)
a(b.target)}for(var t=0;t<u.length;++t)u[t].addEventListener("load",onLoad,false)})(function(a){v.currentScript=a
if(typeof dartMainRunner==="function")dartMainRunner(K.kz,[])
else K.kz([])})})()
//# sourceMappingURL=test.dart.js.map
