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
a[c]=function(){a[c]=function(){H.mU(b)}
var t
var s=d
try{if(a[b]===u){t=a[b]=s
t=a[b]=d()}else t=a[b]}finally{if(t===s)a[b]=null
a[c]=function(){return this[b]}}return t}}function makeConstList(a){a.immutable$list=Array
a.fixed$length=Array
return a}function convertToFastObject(a){function t(){}t.prototype=a
new t()
return a}function convertAllToFastObject(a){for(var u=0;u<a.length;++u)convertToFastObject(a[u])}var y=0
function tearOffGetter(a,b,c,d,e){return e?new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+d+y+++"(receiver) {"+"if (c === null) c = "+"H.j9"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, true, name);"+"return new c(this, funcs[0], receiver, name);"+"}")(a,b,c,d,H,null):new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+d+y+++"() {"+"if (c === null) c = "+"H.j9"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, false, name);"+"return new c(this, funcs[0], null, name);"+"}")(a,b,c,d,H,null)}function tearOff(a,b,c,d,e,f){var u=null
return d?function(){if(u===null)u=H.j9(this,a,b,c,true,false,e).prototype
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
if(w[u][a])return w[u][a]}}var C={},H={iS:function iS(a){this.a=a},
im:function(a){var u,t
u=a^48
if(u<=9)return u
t=a|32
if(97<=t&&t<=102)return t-87
return-1},
iQ:function(){return new P.c3("No element")},
li:function(){return new P.c3("Too many elements")},
n:function n(a){this.a=a},
ek:function ek(){},
bm:function bm(){},
bU:function bU(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=null
_.$ti=d},
eR:function eR(a,b,c){this.a=a
this.b=b
this.$ti=c},
eS:function eS(a,b,c){var _=this
_.a=null
_.b=a
_.c=b
_.$ti=c},
eT:function eT(a,b,c){this.a=a
this.b=b
this.$ti=c},
cb:function cb(a,b,c){this.a=a
this.b=b
this.$ti=c},
hj:function hj(a,b,c){this.a=a
this.b=b
this.$ti=c},
bg:function bg(){},
c9:function c9(){},
dt:function dt(){},
l9:function(){throw H.c(P.S("Cannot modify unmodifiable Map"))},
bF:function(a){var u,t
u=H.z(v.mangledGlobalNames[a])
if(typeof u==="string")return u
t="minified:"+a
return t},
mB:function(a){return v.types[H.T(a)]},
mJ:function(a,b){var u
if(b!=null){u=b.x
if(u!=null)return u}return!!J.E(a).$iat},
f:function(a){var u
if(typeof a==="string")return a
if(typeof a==="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
u=J.ae(a)
if(typeof u!=="string")throw H.c(H.aq(a))
return u},
lC:function(a){var u,t,s
u=a.$reflectionInfo
if(u==null)return
u=J.eD(u)
t=u[0]
s=u[1]
return new H.fa(a,u,(t&2)===2,t>>2,s>>1,(s&1)===1,u[2])},
c_:function(a){var u=a.$identityHash
if(u==null){u=Math.random()*0x3fffffff|0
a.$identityHash=u}return u},
lz:function(a,b){var u,t,s,r,q,p
u=/^\s*[+-]?((0x[a-f0-9]+)|(\d+)|([a-z0-9]+))\s*$/i.exec(a)
if(u==null)return
if(3>=u.length)return H.h(u,3)
t=H.z(u[3])
if(b==null){if(t!=null)return parseInt(a,10)
if(u[2]!=null)return parseInt(a,16)
return}if(b<2||b>36)throw H.c(P.Z(b,2,36,"radix",null))
if(b===10&&t!=null)return parseInt(a,10)
if(b<10||t==null){s=b<=10?47+b:86+b
r=u[1]
for(q=r.length,p=0;p<q;++p)if((C.b.C(r,p)|32)>s)return}return parseInt(a,b)},
br:function(a){return H.lq(a)+H.j6(H.b9(a),0,null)},
lq:function(a){var u,t,s,r,q,p,o,n,m
u=J.E(a)
t=u.constructor
if(typeof t=="function"){s=t.name
r=typeof s==="string"?s:null}else r=null
q=r==null
if(q||u===C.U||!!u.$ic8){p=C.B(a)
if(q)r=p
if(p==="Object"){o=a.constructor
if(typeof o=="function"){n=String(o).match(/^\s*function\s*([\w$]*)\s*\(/)
m=n==null?null:n[1]
if(typeof m==="string"&&/^\w+$/.test(m))r=m}}return r}r=r
return H.bF(r.length>1&&C.b.C(r,0)===36?C.b.ag(r,1):r)},
lr:function(){if(!!self.location)return self.location.href
return},
jL:function(a){var u,t,s,r,q
H.dZ(a)
u=J.ar(a)
if(u<=500)return String.fromCharCode.apply(null,a)
for(t="",s=0;s<u;s=r){r=s+500
q=r<u?r:u
t+=String.fromCharCode.apply(null,a.slice(s,q))}return t},
lA:function(a){var u,t,s,r
u=H.a([],[P.k])
for(t=a.length,s=0;s<a.length;a.length===t||(0,H.D)(a),++s){r=a[s]
if(typeof r!=="number"||Math.floor(r)!==r)throw H.c(H.aq(r))
if(r<=65535)C.a.h(u,r)
else if(r<=1114111){C.a.h(u,55296+(C.d.au(r-65536,10)&1023))
C.a.h(u,56320+(r&1023))}else throw H.c(H.aq(r))}return H.jL(u)},
jM:function(a){var u,t,s
for(u=a.length,t=0;t<u;++t){s=a[t]
if(typeof s!=="number"||Math.floor(s)!==s)throw H.c(H.aq(s))
if(s<0)throw H.c(H.aq(s))
if(s>65535)return H.lA(a)}return H.jL(a)},
lB:function(a,b,c){var u,t,s,r
if(c<=500&&b===0&&c===a.length)return String.fromCharCode.apply(null,a)
for(u=b,t="";u<c;u=s){s=u+500
r=s<c?s:c
t+=String.fromCharCode.apply(null,a.subarray(u,r))}return t},
bs:function(a){var u
if(0<=a){if(a<=65535)return String.fromCharCode(a)
if(a<=1114111){u=a-65536
return String.fromCharCode((55296|C.d.au(u,10))>>>0,56320|u&1023)}}throw H.c(P.Z(a,0,1114111,null,null))},
bq:function(a){if(a.date===void 0)a.date=new Date(a.a)
return a.date},
ly:function(a){var u=H.bq(a).getFullYear()+0
return u},
lw:function(a){var u=H.bq(a).getMonth()+1
return u},
ls:function(a){var u=H.bq(a).getDate()+0
return u},
lt:function(a){var u=H.bq(a).getHours()+0
return u},
lv:function(a){var u=H.bq(a).getMinutes()+0
return u},
lx:function(a){var u=H.bq(a).getSeconds()+0
return u},
lu:function(a){var u=H.bq(a).getMilliseconds()+0
return u},
r:function(a){throw H.c(H.aq(a))},
h:function(a,b){if(a==null)J.ar(a)
throw H.c(H.bC(a,b))},
bC:function(a,b){var u,t
if(typeof b!=="number"||Math.floor(b)!==b)return new P.as(!0,b,"index",null)
u=H.T(J.ar(a))
if(!(b<0)){if(typeof u!=="number")return H.r(u)
t=b>=u}else t=!0
if(t)return P.bj(b,a,"index",null,u)
return P.f8(b,"index",null)},
mx:function(a,b,c){if(a>c)return new P.bt(0,c,!0,a,"start","Invalid value")
if(b!=null)if(b<a||b>c)return new P.bt(a,c,!0,b,"end","Invalid value")
return new P.as(!0,b,"end",null)},
aq:function(a){return new P.as(!0,a,null,null)},
mt:function(a){if(typeof a!=="number")throw H.c(H.aq(a))
return a},
c:function(a){var u
if(a==null)a=new P.d6()
u=new Error()
u.dartException=a
if("defineProperty" in Object){Object.defineProperty(u,"message",{get:H.kx})
u.name=""}else u.toString=H.kx
return u},
kx:function(){return J.ae(this.dartException)},
P:function(a){throw H.c(a)},
D:function(a){throw H.c(P.az(a))},
aF:function(a){var u,t,s,r,q,p
a=a.replace(String({}),'$receiver$').replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
u=a.match(/\\\$[a-zA-Z]+\\\$/g)
if(u==null)u=H.a([],[P.e])
t=u.indexOf("\\$arguments\\$")
s=u.indexOf("\\$argumentsExpr\\$")
r=u.indexOf("\\$expr\\$")
q=u.indexOf("\\$method\\$")
p=u.indexOf("\\$receiver\\$")
return new H.fI(a.replace(new RegExp('\\\\\\$arguments\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$argumentsExpr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$expr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$method\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$receiver\\\\\\$','g'),'((?:x|[^x])*)'),t,s,r,q,p)},
fJ:function(a){return function($expr$){var $argumentsExpr$='$arguments$'
try{$expr$.$method$($argumentsExpr$)}catch(u){return u.message}}(a)},
jV:function(a){return function($expr$){try{$expr$.$method$}catch(u){return u.message}}(a)},
jG:function(a,b){return new H.f1(a,b==null?null:b.method)},
iT:function(a,b){var u,t
u=b==null
t=u?null:b.method
return new H.eG(a,t,u?null:b.receiver)},
a3:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g
u=new H.iH(a)
if(a==null)return
if(typeof a!=="object")return a
if("dartException" in a)return u.$1(a.dartException)
else if(!("message" in a))return a
t=a.message
if("number" in a&&typeof a.number=="number"){s=a.number
r=s&65535
if((C.d.au(s,16)&8191)===10)switch(r){case 438:return u.$1(H.iT(H.f(t)+" (Error "+r+")",null))
case 445:case 5007:return u.$1(H.jG(H.f(t)+" (Error "+r+")",null))}}if(a instanceof TypeError){q=$.kA()
p=$.kB()
o=$.kC()
n=$.kD()
m=$.kG()
l=$.kH()
k=$.kF()
$.kE()
j=$.kJ()
i=$.kI()
h=q.a7(t)
if(h!=null)return u.$1(H.iT(H.z(t),h))
else{h=p.a7(t)
if(h!=null){h.method="call"
return u.$1(H.iT(H.z(t),h))}else{h=o.a7(t)
if(h==null){h=n.a7(t)
if(h==null){h=m.a7(t)
if(h==null){h=l.a7(t)
if(h==null){h=k.a7(t)
if(h==null){h=n.a7(t)
if(h==null){h=j.a7(t)
if(h==null){h=i.a7(t)
g=h!=null}else g=!0}else g=!0}else g=!0}else g=!0}else g=!0}else g=!0}else g=!0
if(g)return u.$1(H.jG(H.z(t),h))}}return u.$1(new H.fZ(typeof t==="string"?t:""))}if(a instanceof RangeError){if(typeof t==="string"&&t.indexOf("call stack")!==-1)return new P.de()
t=function(b){try{return String(b)}catch(f){}return null}(a)
return u.$1(new P.as(!1,null,null,typeof t==="string"?t.replace(/^RangeError:\s*/,""):t))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof t==="string"&&t==="too much recursion")return new P.de()
return a},
bD:function(a){var u
if(a==null)return new H.dN(a)
u=a.$cachedTrace
if(u!=null)return u
return a.$cachedTrace=new H.dN(a)},
mA:function(a,b){var u,t,s,r
u=a.length
for(t=0;t<u;t=r){s=t+1
r=s+1
b.m(0,a[t],a[s])}return b},
mI:function(a,b,c,d,e,f){H.d(a,"$ib0")
switch(H.T(b)){case 0:return a.$0()
case 1:return a.$1(c)
case 2:return a.$2(c,d)
case 3:return a.$3(c,d,e)
case 4:return a.$4(c,d,e,f)}throw H.c(P.a4("Unsupported number of arguments for wrapped closure"))},
bB:function(a,b){var u
H.T(b)
if(a==null)return
u=a.$identity
if(!!u)return u
u=function(c,d,e){return function(f,g,h,i){return e(c,d,f,g,h,i)}}(a,b,H.mI)
a.$identity=u
return u},
l8:function(a,b,c,d,e,f,g){var u,t,s,r,q,p,o,n,m,l,k,j,i
u=b[0]
t=u.$callName
if(!!J.E(d).$ib){u.$reflectionInfo=d
s=H.lC(u).r}else s=d
r=e?Object.create(new H.fp().constructor.prototype):Object.create(new H.bK(null,null,null,null).constructor.prototype)
r.$initialize=r.constructor
if(e)q=function static_tear_off(){this.$initialize()}
else{p=$.ay
if(typeof p!=="number")return p.H()
$.ay=p+1
p=new Function("a,b,c,d"+p,"this.$initialize(a,b,c,d"+p+")")
q=p}r.constructor=q
q.prototype=r
if(!e){o=H.jr(a,u,f)
o.$reflectionInfo=d}else{r.$static_name=g
o=u}if(typeof s=="number")n=function(h,a0){return function(){return h(a0)}}(H.mB,s)
else if(typeof s=="function")if(e)n=s
else{m=f?H.jp:H.iL
n=function(h,a0){return function(){return h.apply({$receiver:a0(this)},arguments)}}(s,m)}else throw H.c("Error in reflectionInfo.")
r.$S=n
r[t]=o
for(l=o,k=1;k<b.length;++k){j=b[k]
i=j.$callName
if(i!=null){j=e?j:H.jr(a,j,f)
r[i]=j}if(k===c){j.$reflectionInfo=d
l=j}}r.$C=l
r.$R=u.$R
r.$D=u.$D
return q},
l5:function(a,b,c,d){var u=H.iL
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,u)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,u)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,u)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,u)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,u)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,u)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,u)}},
jr:function(a,b,c){var u,t,s,r,q,p,o
if(c)return H.l7(a,b)
u=b.$stubName
t=b.length
s=a[u]
r=b==null?s==null:b===s
q=!r||t>=27
if(q)return H.l5(t,!r,u,b)
if(t===0){r=$.ay
if(typeof r!=="number")return r.H()
$.ay=r+1
p="self"+r
r="return function(){var "+p+" = this."
q=$.bL
if(q==null){q=H.e6("self")
$.bL=q}return new Function(r+H.f(q)+";return "+p+"."+H.f(u)+"();}")()}o="abcdefghijklmnopqrstuvwxyz".split("").splice(0,t).join(",")
r=$.ay
if(typeof r!=="number")return r.H()
$.ay=r+1
o+=r
r="return function("+o+"){return this."
q=$.bL
if(q==null){q=H.e6("self")
$.bL=q}return new Function(r+H.f(q)+"."+H.f(u)+"("+o+");}")()},
l6:function(a,b,c,d){var u,t
u=H.iL
t=H.jp
switch(b?-1:a){case 0:throw H.c(H.lG("Intercepted function with no arguments."))
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
u=$.bL
if(u==null){u=H.e6("self")
$.bL=u}t=$.jo
if(t==null){t=H.e6("receiver")
$.jo=t}s=b.$stubName
r=b.length
q=a[s]
p=b==null?q==null:b===q
o=!p||r>=28
if(o)return H.l6(r,!p,s,b)
if(r===1){u="return function(){return this."+H.f(u)+"."+H.f(s)+"(this."+H.f(t)+");"
t=$.ay
if(typeof t!=="number")return t.H()
$.ay=t+1
return new Function(u+t+"}")()}n="abcdefghijklmnopqrstuvwxyz".split("").splice(0,r-1).join(",")
u="return function("+n+"){return this."+H.f(u)+"."+H.f(s)+"(this."+H.f(t)+", "+n+");"
t=$.ay
if(typeof t!=="number")return t.H()
$.ay=t+1
return new Function(u+t+"}")()},
j9:function(a,b,c,d,e,f,g){return H.l8(a,b,H.T(c),d,!!e,!!f,g)},
iL:function(a){return a.a},
jp:function(a){return a.c},
e6:function(a){var u,t,s,r,q
u=new H.bK("self","target","receiver","name")
t=J.eD(Object.getOwnPropertyNames(u))
for(s=t.length,r=0;r<s;++r){q=t[r]
if(u[q]===a)return q}},
z:function(a){if(a==null)return a
if(typeof a==="string")return a
throw H.c(H.ax(a,"String"))},
my:function(a){if(a==null)return a
if(typeof a==="number")return a
throw H.c(H.ax(a,"double"))},
mN:function(a){if(a==null)return a
if(typeof a==="number")return a
throw H.c(H.ax(a,"num"))},
j7:function(a){if(a==null)return a
if(typeof a==="boolean")return a
throw H.c(H.ax(a,"bool"))},
T:function(a){if(a==null)return a
if(typeof a==="number"&&Math.floor(a)===a)return a
throw H.c(H.ax(a,"int"))},
kv:function(a,b){throw H.c(H.ax(a,H.bF(H.z(b).substring(2))))},
mP:function(a,b){throw H.c(H.l4(a,H.bF(H.z(b).substring(2))))},
d:function(a,b){if(a==null)return a
if((typeof a==="object"||typeof a==="function")&&J.E(a)[b])return a
H.kv(a,b)},
ak:function(a,b){var u
if(a!=null)u=(typeof a==="object"||typeof a==="function")&&J.E(a)[b]
else u=!0
if(u)return a
H.mP(a,b)},
dZ:function(a){if(a==null)return a
if(!!J.E(a).$ib)return a
throw H.c(H.ax(a,"List<dynamic>"))},
ks:function(a,b){var u
if(a==null)return a
u=J.E(a)
if(!!u.$ib)return a
if(u[b])return a
H.kv(a,b)},
ko:function(a){var u
if("$S" in a){u=a.$S
if(typeof u=="number")return v.types[H.T(u)]
else return a.$S()}return},
dY:function(a,b){var u
if(a==null)return!1
if(typeof a=="function")return!0
u=H.ko(J.E(a))
if(u==null)return!1
return H.ke(u,null,b,null)},
i:function(a,b){var u,t
if(a==null)return a
if($.j3)return a
$.j3=!0
try{if(H.dY(a,b))return a
u=H.iF(b)
t=H.ax(a,u)
throw H.c(t)}finally{$.j3=!1}},
ja:function(a,b){if(a!=null&&!H.j8(a,b))H.P(H.ax(a,H.iF(b)))
return a},
ax:function(a,b){return new H.fK("TypeError: "+P.eo(a)+": type '"+H.kj(a)+"' is not a subtype of type '"+b+"'")},
l4:function(a,b){return new H.e8("CastError: "+P.eo(a)+": type '"+H.kj(a)+"' is not a subtype of type '"+b+"'")},
kj:function(a){var u,t
u=J.E(a)
if(!!u.$ibM){t=H.ko(u)
if(t!=null)return H.iF(t)
return"Closure"}return H.br(a)},
mU:function(a){throw H.c(new P.ef(H.z(a)))},
lG:function(a){return new H.ff(a)},
kp:function(a){return v.getIsolateTag(a)},
a:function(a,b){a.$ti=b
return a},
b9:function(a){if(a==null)return
return a.$ti},
nF:function(a,b,c){return H.bE(a["$a"+H.f(c)],H.b9(b))},
cq:function(a,b,c,d){var u
H.z(c)
H.T(d)
u=H.bE(a["$a"+H.f(c)],H.b9(b))
return u==null?null:u[d]},
a2:function(a,b,c){var u
H.z(b)
H.T(c)
u=H.bE(a["$a"+H.f(b)],H.b9(a))
return u==null?null:u[c]},
p:function(a,b){var u
H.T(b)
u=H.b9(a)
return u==null?null:u[b]},
iF:function(a){return H.b8(a,null)},
b8:function(a,b){var u,t
H.l(b,"$ib",[P.e],"$ab")
if(a==null)return"dynamic"
if(a===-1)return"void"
if(typeof a==="object"&&a!==null&&a.constructor===Array)return H.bF(a[0].name)+H.j6(a,1,b)
if(typeof a=="function")return H.bF(a.name)
if(a===-2)return"dynamic"
if(typeof a==="number"){H.T(a)
if(b==null||a<0||a>=b.length)return"unexpected-generic-index:"+a
u=b.length
t=u-a-1
if(t<0||t>=u)return H.h(b,t)
return H.f(b[t])}if('func' in a)return H.mi(a,b)
if('futureOr' in a)return"FutureOr<"+H.b8("type" in a?a.type:null,b)+">"
return"unknown-reified-type"},
mi:function(a,b){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c
u=[P.e]
H.l(b,"$ib",u,"$ab")
if("bounds" in a){t=a.bounds
if(b==null){b=H.a([],u)
s=null}else s=b.length
r=b.length
for(q=t.length,p=q;p>0;--p)C.a.h(b,"T"+(r+p))
for(o="<",n="",p=0;p<q;++p,n=", "){o+=n
u=b.length
m=u-p-1
if(m<0)return H.h(b,m)
o=C.b.H(o,b[m])
l=t[p]
if(l!=null&&l!==P.F)o+=" extends "+H.b8(l,b)}o+=">"}else{o=""
s=null}k=!!a.v?"void":H.b8(a.ret,b)
if("args" in a){j=a.args
for(u=j.length,i="",h="",g=0;g<u;++g,h=", "){f=j[g]
i=i+h+H.b8(f,b)}}else{i=""
h=""}if("opt" in a){e=a.opt
i+=h+"["
for(u=e.length,h="",g=0;g<u;++g,h=", "){f=e[g]
i=i+h+H.b8(f,b)}i+="]"}if("named" in a){d=a.named
i+=h+"{"
for(u=H.mz(d),m=u.length,h="",g=0;g<m;++g,h=", "){c=H.z(u[g])
i=i+h+H.b8(d[c],b)+(" "+H.f(c))}i+="}"}if(s!=null)b.length=s
return o+"("+i+") => "+k},
j6:function(a,b,c){var u,t,s,r,q,p
H.l(c,"$ib",[P.e],"$ab")
if(a==null)return""
u=new P.ad("")
for(t=b,s="",r=!0,q="";t<a.length;++t,s=", "){u.a=q+s
p=a[t]
if(p!=null)r=!1
q=u.a+=H.b8(p,c)}return"<"+u.i(0)+">"},
bE:function(a,b){if(a==null)return b
a=a.apply(null,b)
if(a==null)return
if(typeof a==="object"&&a!==null&&a.constructor===Array)return a
if(typeof a=="function")return a.apply(null,b)
return b},
cn:function(a,b,c,d){var u,t
H.z(b)
H.dZ(c)
H.z(d)
if(a==null)return!1
u=H.b9(a)
t=J.E(a)
if(t[b]==null)return!1
return H.km(H.bE(t[d],u),null,c,null)},
l:function(a,b,c,d){H.z(b)
H.dZ(c)
H.z(d)
if(a==null)return a
if(H.cn(a,b,c,d))return a
throw H.c(H.ax(a,function(e,f){return e.replace(/[^<,> ]+/g,function(g){return f[g]||g})}(H.bF(b.substring(2))+H.j6(c,0,null),v.mangledGlobalNames)))},
km:function(a,b,c,d){var u,t
if(c==null)return!0
if(a==null){u=c.length
for(t=0;t<u;++t)if(!H.ap(null,null,c[t],d))return!1
return!0}u=a.length
for(t=0;t<u;++t)if(!H.ap(a[t],b,c[t],d))return!1
return!0},
nD:function(a,b,c){return a.apply(b,H.bE(J.E(b)["$a"+H.f(c)],H.b9(b)))},
kr:function(a){var u
if(typeof a==="number")return!1
if('futureOr' in a){u="type" in a?a.type:null
return a==null||a.name==="F"||a.name==="y"||a===-1||a===-2||H.kr(u)}return!1},
j8:function(a,b){var u,t
if(a==null)return b==null||b.name==="F"||b.name==="y"||b===-1||b===-2||H.kr(b)
if(b==null||b===-1||b.name==="F"||b===-2)return!0
if(typeof b=="object"){if('futureOr' in b)if(H.j8(a,"type" in b?b.type:null))return!0
if('func' in b)return H.dY(a,b)}u=J.E(a).constructor
t=H.b9(a)
if(t!=null){t=t.slice()
t.splice(0,0,u)
u=t}return H.ap(u,null,b,null)},
u:function(a,b){if(a!=null&&!H.j8(a,b))throw H.c(H.ax(a,H.iF(b)))
return a},
ap:function(a,b,c,d){var u,t,s,r,q,p,o,n,m
if(a===c)return!0
if(c==null||c===-1||c.name==="F"||c===-2)return!0
if(a===-2)return!0
if(a==null||a===-1||a.name==="F"||a===-2){if(typeof c==="number")return!1
if('futureOr' in c)return H.ap(a,b,"type" in c?c.type:null,d)
return!1}if(typeof a==="number")return!1
if(typeof c==="number")return!1
if(a.name==="y")return!0
if('func' in c)return H.ke(a,b,c,d)
if('func' in a)return c.name==="b0"
u=typeof a==="object"&&a!==null&&a.constructor===Array
t=u?a[0]:a
if('futureOr' in c){s="type" in c?c.type:null
if('futureOr' in a)return H.ap("type" in a?a.type:null,b,s,d)
else if(H.ap(a,b,s,d))return!0
else{if(!('$i'+"bR" in t.prototype))return!1
r=t.prototype["$a"+"bR"]
q=H.bE(r,u?a.slice(1):null)
return H.ap(typeof q==="object"&&q!==null&&q.constructor===Array?q[0]:null,b,s,d)}}p=typeof c==="object"&&c!==null&&c.constructor===Array
o=p?c[0]:c
if(o!==t){n=o.name
if(!('$i'+n in t.prototype))return!1
m=t.prototype["$a"+n]}else m=null
if(!p)return!0
u=u?a.slice(1):null
p=c.slice(1)
return H.km(H.bE(m,u),b,p,d)},
ke:function(a,b,c,d){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g
if(!('func' in a))return!1
if("bounds" in a){if(!("bounds" in c))return!1
u=a.bounds
t=c.bounds
if(u.length!==t.length)return!1}else if("bounds" in c)return!1
if(!H.ap(a.ret,b,c.ret,d))return!1
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
for(k=0;k<o;++k)if(!H.ap(r[k],d,s[k],b))return!1
for(j=k,i=0;j<n;++i,++j)if(!H.ap(r[j],d,q[i],b))return!1
for(j=0;j<l;++i,++j)if(!H.ap(p[j],d,q[i],b))return!1
h=a.named
g=c.named
if(g==null)return!0
if(h==null)return!1
return H.mM(h,b,g,d)},
mM:function(a,b,c,d){var u,t,s,r
u=Object.getOwnPropertyNames(c)
for(t=u.length,s=0;s<t;++s){r=u[s]
if(!Object.hasOwnProperty.call(a,r))return!1
if(!H.ap(c[r],d,a[r],b))return!1}return!0},
nE:function(a,b,c){Object.defineProperty(a,H.z(b),{value:c,enumerable:false,writable:true,configurable:true})},
mK:function(a){var u,t,s,r,q,p
u=H.z($.kq.$1(a))
t=$.ih[u]
if(t!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:t,enumerable:false,writable:true,configurable:true})
return t.i}s=$.ir[u]
if(s!=null)return s
r=v.interceptorsByTag[u]
if(r==null){u=H.z($.kl.$2(a,u))
if(u!=null){t=$.ih[u]
if(t!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:t,enumerable:false,writable:true,configurable:true})
return t.i}s=$.ir[u]
if(s!=null)return s
r=v.interceptorsByTag[u]}}if(r==null)return
s=r.prototype
q=u[0]
if(q==="!"){t=H.iE(s)
$.ih[u]=t
Object.defineProperty(a,v.dispatchPropertyName,{value:t,enumerable:false,writable:true,configurable:true})
return t.i}if(q==="~"){$.ir[u]=s
return s}if(q==="-"){p=H.iE(s)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}if(q==="+")return H.ku(a,s)
if(q==="*")throw H.c(P.fY(u))
if(v.leafTags[u]===true){p=H.iE(s)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}else return H.ku(a,s)},
ku:function(a,b){var u=Object.getPrototypeOf(a)
Object.defineProperty(u,v.dispatchPropertyName,{value:J.jd(b,u,null,null),enumerable:false,writable:true,configurable:true})
return b},
iE:function(a){return J.jd(a,!1,null,!!a.$iat)},
mL:function(a,b,c){var u=b.prototype
if(v.leafTags[a]===true)return H.iE(u)
else return J.jd(u,c,null,null)},
mG:function(){if(!0===$.jc)return
$.jc=!0
H.mH()},
mH:function(){var u,t,s,r,q,p,o,n
$.ih=Object.create(null)
$.ir=Object.create(null)
H.mF()
u=v.interceptorsByTag
t=Object.getOwnPropertyNames(u)
if(typeof window!="undefined"){window
s=function(){}
for(r=0;r<t.length;++r){q=t[r]
p=$.kw.$1(q)
if(p!=null){o=H.mL(q,u[q],p)
if(o!=null){Object.defineProperty(p,v.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
s.prototype=p}}}}for(r=0;r<t.length;++r){q=t[r]
if(/^[A-Za-z_]/.test(q)){n=u[q]
u["!"+q]=n
u["~"+q]=n
u["-"+q]=n
u["+"+q]=n
u["*"+q]=n}}},
mF:function(){var u,t,s,r,q,p,o
u=C.a_()
u=H.bA(C.X,H.bA(C.a1,H.bA(C.A,H.bA(C.A,H.bA(C.a0,H.bA(C.Y,H.bA(C.Z(C.B),u)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){t=dartNativeDispatchHooksTransformer
if(typeof t=="function")t=[t]
if(t.constructor==Array)for(s=0;s<t.length;++s){r=t[s]
if(typeof r=="function")u=r(u)||u}}q=u.getTag
p=u.getUnknownTag
o=u.prototypeForTag
$.kq=new H.io(q)
$.kl=new H.ip(p)
$.kw=new H.iq(o)},
bA:function(a,b){return a(b)||b},
lk:function(a,b,c,d){var u,t,s,r
u=b?"m":""
t=c?"":"i"
s=d?"g":""
r=function(e,f){try{return new RegExp(e,f)}catch(q){return q}}(a,u+t+s)
if(r instanceof RegExp)return r
throw H.c(P.Q("Illegal RegExp pattern ("+String(r)+")",a,null))},
mS:function(a,b,c){var u=a.indexOf(b,c)
return u>=0},
jg:function(a,b,c){var u,t,s
if(b==="")if(a==="")return c
else{u=a.length
for(t=c,s=0;s<u;++s)t=t+a[s]+c
return t.charCodeAt(0)==0?t:t}else return a.replace(new RegExp(b.replace(/[[\]{}()*+?.\\^$|]/g,"\\$&"),'g'),c.replace(/\$/g,"$$$$"))},
ec:function ec(){},
ed:function ed(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
fa:function fa(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.x=null},
fI:function fI(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
f1:function f1(a,b){this.a=a
this.b=b},
eG:function eG(a,b,c){this.a=a
this.b=b
this.c=c},
fZ:function fZ(a){this.a=a},
iH:function iH(a){this.a=a},
dN:function dN(a){this.a=a
this.b=null},
bM:function bM(){},
fv:function fv(){},
fp:function fp(){},
bK:function bK(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
fK:function fK(a){this.a=a},
e8:function e8(a){this.a=a},
ff:function ff(a){this.a=a},
au:function au(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
eI:function eI(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
eJ:function eJ(a,b){this.a=a
this.$ti=b},
eK:function eK(a,b,c){var _=this
_.a=a
_.b=b
_.d=_.c=null
_.$ti=c},
io:function io(a){this.a=a},
ip:function ip(a){this.a=a},
iq:function iq(a){this.a=a},
eF:function eF(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
ib:function(a){return a},
lp:function(a){return new Int8Array(a)},
aP:function(a,b,c){if(a>>>0!==a||a>=c)throw H.c(H.bC(b,a))},
mg:function(a,b,c){var u
if(!(a>>>0!==a))u=b>>>0!==b||a>b||b>c
else u=!0
if(u)throw H.c(H.mx(a,b,c))
return b},
bo:function bo(){},
d1:function d1(){},
d2:function d2(){},
d3:function d3(){},
eW:function eW(){},
eX:function eX(){},
eY:function eY(){},
eZ:function eZ(){},
d4:function d4(){},
bY:function bY(){},
cf:function cf(){},
cg:function cg(){},
ch:function ch(){},
ci:function ci(){},
mz:function(a){return J.jy(a?Object.keys(a):[],null)},
mO:function(a){if(typeof dartPrint=="function"){dartPrint(a)
return}if(typeof console=="object"&&typeof console.log!="undefined"){console.log(a)
return}if(typeof window=="object")return
if(typeof print=="function"){print(a)
return}throw"Unable to print message: "+String(a)}},J={
jd:function(a,b,c,d){return{i:a,p:b,e:c,x:d}},
ij:function(a){var u,t,s,r,q
u=a[v.dispatchPropertyName]
if(u==null)if($.jc==null){H.mG()
u=a[v.dispatchPropertyName]}if(u!=null){t=u.p
if(!1===t)return u.i
if(!0===t)return a
s=Object.getPrototypeOf(a)
if(t===s)return u.i
if(u.e===s)throw H.c(P.fY("Return interceptor for "+H.f(t(a,u))))}r=a.constructor
q=r==null?null:r[$.jh()]
if(q!=null)return q
q=H.mK(a)
if(q!=null)return q
if(typeof a=="function")return C.a2
t=Object.getPrototypeOf(a)
if(t==null)return C.I
if(t===Object.prototype)return C.I
if(typeof r=="function"){Object.defineProperty(r,$.jh(),{value:C.x,enumerable:false,writable:true,configurable:true})
return C.x}return C.x},
lj:function(a,b){if(typeof a!=="number"||Math.floor(a)!==a)throw H.c(P.iK(a,"length","is not an integer"))
if(a<0||a>4294967295)throw H.c(P.Z(a,0,4294967295,"length",null))
return J.jy(new Array(a),b)},
jy:function(a,b){return J.eD(H.a(a,[b]))},
eD:function(a){H.dZ(a)
a.fixed$length=Array
return a},
E:function(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.cS.prototype
return J.cR.prototype}if(typeof a=="string")return J.bl.prototype
if(a==null)return J.cT.prototype
if(typeof a=="boolean")return J.eE.prototype
if(a.constructor==Array)return J.aB.prototype
if(typeof a!="object"){if(typeof a=="function")return J.b1.prototype
return a}if(a instanceof P.F)return a
return J.ij(a)},
co:function(a){if(typeof a=="string")return J.bl.prototype
if(a==null)return a
if(a.constructor==Array)return J.aB.prototype
if(typeof a!="object"){if(typeof a=="function")return J.b1.prototype
return a}if(a instanceof P.F)return a
return J.ij(a)},
jb:function(a){if(a==null)return a
if(a.constructor==Array)return J.aB.prototype
if(typeof a!="object"){if(typeof a=="function")return J.b1.prototype
return a}if(a instanceof P.F)return a
return J.ij(a)},
cp:function(a){if(typeof a=="string")return J.bl.prototype
if(a==null)return a
if(!(a instanceof P.F))return J.c8.prototype
return a},
W:function(a){if(a==null)return a
if(typeof a!="object"){if(typeof a=="function")return J.b1.prototype
return a}if(a instanceof P.F)return a
return J.ij(a)},
U:function(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.E(a).t(a,b)},
kS:function(a,b){if(typeof b==="number")if(a.constructor==Array||typeof a=="string"||H.mJ(a,a[v.dispatchPropertyName]))if(b>>>0===b&&b<a.length)return a[b]
return J.co(a).n(a,b)},
kT:function(a,b,c,d){return J.W(a).em(a,b,c,d)},
kU:function(a,b){return J.cp(a).C(a,b)},
e_:function(a,b){return J.W(a).fE(a,b)},
iI:function(a,b,c){return J.W(a).fH(a,b,c)},
jk:function(a,b){return J.W(a).u(a,b)},
kV:function(a,b){return J.cp(a).U(a,b)},
e0:function(a,b){return J.jb(a).a_(a,b)},
kW:function(a,b,c,d){return J.W(a).hC(a,b,c,d)},
kX:function(a){return J.W(a).ghb(a)},
bI:function(a){return J.W(a).gbP(a)},
cv:function(a){return J.E(a).gE(a)},
ba:function(a){return J.jb(a).gP(a)},
ar:function(a){return J.co(a).gl(a)},
kY:function(a){return J.W(a).gim(a)},
iJ:function(a,b){return J.W(a).aE(a,b)},
jl:function(a){return J.jb(a).ib(a)},
kZ:function(a,b){return J.W(a).ig(a,b)},
l_:function(a,b,c){return J.W(a).dW(a,b,c)},
l0:function(a,b,c){return J.cp(a).p(a,b,c)},
l1:function(a){return J.cp(a).iu(a)},
ae:function(a){return J.E(a).i(a)},
a0:function a0(){},
eE:function eE(){},
cT:function cT(){},
cV:function cV(){},
f3:function f3(){},
c8:function c8(){},
b1:function b1(){},
aB:function aB(a){this.$ti=a},
iR:function iR(a){this.$ti=a},
af:function af(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=null
_.$ti=d},
cU:function cU(){},
cS:function cS(){},
cR:function cR(){},
bl:function bl(){}},P={
lT:function(){var u,t,s
u={}
if(self.scheduleImmediate!=null)return P.mq()
if(self.MutationObserver!=null&&self.document!=null){t=self.document.createElement("div")
s=self.document.createElement("span")
u.a=null
new self.MutationObserver(H.bB(new P.hl(u),1)).observe(t,{childList:true})
return new P.hk(u,t,s)}else if(self.setImmediate!=null)return P.mr()
return P.ms()},
lU:function(a){self.scheduleImmediate(H.bB(new P.hm(H.i(a,{func:1,ret:-1})),0))},
lV:function(a){self.setImmediate(H.bB(new P.hn(H.i(a,{func:1,ret:-1})),0))},
lW:function(a){P.iV(C.u,H.i(a,{func:1,ret:-1}))},
iV:function(a,b){var u
H.i(b,{func:1,ret:-1})
u=C.d.av(a.a,1000)
return P.m1(u<0?0:u,b)},
jU:function(a,b){var u
H.i(b,{func:1,ret:-1,args:[P.aE]})
u=C.d.av(a.a,1000)
return P.m2(u<0?0:u,b)},
m1:function(a,b){var u=new P.dP(!0)
u.eh(a,b)
return u},
m2:function(a,b){var u=new P.dP(!1)
u.ei(a,b)
return u},
lX:function(a,b){var u,t,s
b.a=1
try{a.dB(new P.hw(b),new P.hx(b),null)}catch(s){u=H.a3(s)
t=H.bD(s)
P.mQ(new P.hy(b,u,t))}},
k3:function(a,b){var u,t
for(;u=a.a,u===2;)a=H.d(a.c,"$iao")
if(u>=4){t=b.bG()
b.a=a.a
b.c=a.c
P.ce(b,t)}else{t=H.d(b.c,"$iaI")
b.a=2
b.c=a
a.cI(t)}},
ce:function(a,b){var u,t,s,r,q,p,o,n,m,l,k,j,i,h
u={}
u.a=a
for(t=a;!0;){s={}
r=t.a===8
if(b==null){if(r){q=H.d(t.c,"$ia7")
t=t.b
p=q.a
o=q.b
t.toString
P.ic(null,null,t,p,o)}return}for(;n=b.a,n!=null;b=n){b.a=null
P.ce(u.a,b)}t=u.a
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
P.ic(null,null,t,p,o)
return}j=$.N
if(j!=l)$.N=l
else j=null
t=b.c
if(t===8)new P.hC(u,s,b,r).$0()
else if(p){if((t&1)!==0)new P.hB(s,b,m).$0()}else if((t&2)!==0)new P.hA(u,s,b).$0()
if(j!=null)$.N=j
t=s.b
if(!!J.E(t).$ibR){if(t.a>=4){i=H.d(o.c,"$iaI")
o.c=null
b=o.b0(i)
o.a=t.a
o.c=t.c
u.a=t
continue}else P.k3(t,o)
return}}h=b.b
i=H.d(h.c,"$iaI")
h.c=null
b=h.b0(i)
t=s.a
p=s.b
if(!t){H.u(p,H.p(h,0))
h.a=4
h.c=p}else{H.d(p,"$ia7")
h.a=8
h.c=p}u.a=h
t=h}},
ml:function(a,b){if(H.dY(a,{func:1,args:[P.F,P.ac]}))return H.i(a,{func:1,ret:null,args:[P.F,P.ac]})
if(H.dY(a,{func:1,args:[P.F]}))return H.i(a,{func:1,ret:null,args:[P.F]})
throw H.c(P.iK(a,"onError","Error handler must accept one Object or one Object and a StackTrace as arguments, and return a a valid result"))},
mk:function(){var u,t
for(;u=$.bz,u!=null;){$.cm=null
t=u.b
$.bz=t
if(t==null)$.cl=null
u.a.$0()}},
mp:function(){$.j4=!0
try{P.mk()}finally{$.cm=null
$.j4=!1
if($.bz!=null)$.ji().$1(P.kn())}},
ki:function(a){var u=new P.dB(H.i(a,{func:1,ret:-1}))
if($.bz==null){$.cl=u
$.bz=u
if(!$.j4)$.ji().$1(P.kn())}else{$.cl.b=u
$.cl=u}},
mo:function(a){var u,t,s
H.i(a,{func:1,ret:-1})
u=$.bz
if(u==null){P.ki(a)
$.cm=$.cl
return}t=new P.dB(a)
s=$.cm
if(s==null){t.b=u
$.cm=t
$.bz=t}else{t.b=s.b
s.b=t
$.cm=t
if(t.b==null)$.cl=t}},
mQ:function(a){var u,t
u={func:1,ret:-1}
H.i(a,u)
t=$.N
if(C.h===t){P.ie(null,null,C.h,a)
return}t.toString
P.ie(null,null,t,H.i(t.bK(a),u))},
jT:function(a,b){var u,t
u={func:1,ret:-1}
H.i(b,u)
t=$.N
if(t===C.h){t.toString
return P.iV(a,b)}return P.iV(a,H.i(t.bK(b),u))},
lK:function(a,b){var u,t,s
u={func:1,ret:-1,args:[P.aE]}
H.i(b,u)
t=$.N
if(t===C.h){t.toString
return P.jU(a,b)}s=t.cW(b,P.aE)
$.N.toString
return P.jU(a,H.i(s,u))},
ic:function(a,b,c,d,e){var u={}
u.a=d
P.mo(new P.id(u,e))},
kf:function(a,b,c,d,e){var u,t
H.i(d,{func:1,ret:e})
t=$.N
if(t===c)return d.$0()
$.N=c
u=t
try{t=d.$0()
return t}finally{$.N=u}},
kg:function(a,b,c,d,e,f,g){var u,t
H.i(d,{func:1,ret:f,args:[g]})
H.u(e,g)
t=$.N
if(t===c)return d.$1(e)
$.N=c
u=t
try{t=d.$1(e)
return t}finally{$.N=u}},
mm:function(a,b,c,d,e,f,g,h,i){var u,t
H.i(d,{func:1,ret:g,args:[h,i]})
H.u(e,h)
H.u(f,i)
t=$.N
if(t===c)return d.$2(e,f)
$.N=c
u=t
try{t=d.$2(e,f)
return t}finally{$.N=u}},
ie:function(a,b,c,d){var u
H.i(d,{func:1,ret:-1})
u=C.h!==c
if(u)d=!(!u||!1)?c.bK(d):c.hc(d,-1)
P.ki(d)},
hl:function hl(a){this.a=a},
hk:function hk(a,b,c){this.a=a
this.b=b
this.c=c},
hm:function hm(a){this.a=a},
hn:function hn(a){this.a=a},
dP:function dP(a){this.a=a
this.b=null
this.c=0},
hX:function hX(a,b){this.a=a
this.b=b},
hW:function hW(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
aI:function aI(a,b,c,d,e){var _=this
_.a=null
_.b=a
_.c=b
_.d=c
_.e=d
_.$ti=e},
ao:function ao(a,b,c){var _=this
_.a=a
_.b=b
_.c=null
_.$ti=c},
hv:function hv(a,b){this.a=a
this.b=b},
hz:function hz(a,b){this.a=a
this.b=b},
hw:function hw(a){this.a=a},
hx:function hx(a){this.a=a},
hy:function hy(a,b,c){this.a=a
this.b=b
this.c=c},
hC:function hC(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
hD:function hD(a){this.a=a},
hB:function hB(a,b,c){this.a=a
this.b=b
this.c=c},
hA:function hA(a,b,c){this.a=a
this.b=b
this.c=c},
dB:function dB(a){this.a=a
this.b=null},
fq:function fq(){},
fs:function fs(a,b){this.a=a
this.b=b},
ft:function ft(a,b){this.a=a
this.b=b},
c4:function c4(){},
fr:function fr(){},
aE:function aE(){},
a7:function a7(a,b){this.a=a
this.b=b},
i6:function i6(){},
id:function id(a,b){this.a=a
this.b=b},
hI:function hI(){},
hK:function hK(a,b,c){this.a=a
this.b=b
this.c=c},
hJ:function hJ(a,b){this.a=a
this.b=b},
hL:function hL(a,b,c){this.a=a
this.b=b
this.c=c},
ll:function(a,b,c,d,e){return new H.au([d,e])},
lm:function(a,b,c){H.dZ(a)
return H.l(H.mA(a,new H.au([b,c])),"$ijz",[b,c],"$ajz")},
jA:function(a,b){return new H.au([a,b])},
cY:function(a,b,c,d){return new P.hG([d])},
j0:function(){var u=Object.create(null)
u["<non-identifier-key>"]=u
delete u["<non-identifier-key>"]
return u},
m0:function(a,b,c){var u=new P.dH(a,b,[c])
u.c=a.e
return u},
lh:function(a,b,c){var u,t
if(P.j5(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}u=H.a([],[P.e])
t=$.cu()
C.a.h(t,a)
try{P.mj(a,u)}finally{if(0>=t.length)return H.h(t,-1)
t.pop()}t=P.jR(b,H.ks(u,"$io"),", ")+c
return t.charCodeAt(0)==0?t:t},
iP:function(a,b,c){var u,t,s
if(P.j5(a))return b+"..."+c
u=new P.ad(b)
t=$.cu()
C.a.h(t,a)
try{s=u
s.a=P.jR(s.a,a,", ")}finally{if(0>=t.length)return H.h(t,-1)
t.pop()}u.a+=c
t=u.a
return t.charCodeAt(0)==0?t:t},
j5:function(a){var u,t
for(u=0;t=$.cu(),u<t.length;++u)if(a===t[u])return!0
return!1},
mj:function(a,b){var u,t,s,r,q,p,o,n,m,l
H.l(b,"$ib",[P.e],"$ab")
u=a.gP(a)
t=0
s=0
while(!0){if(!(t<80||s<3))break
if(!u.w())return
r=H.f(u.gF())
C.a.h(b,r)
t+=r.length+2;++s}if(!u.w()){if(s<=5)return
if(0>=b.length)return H.h(b,-1)
q=b.pop()
if(0>=b.length)return H.h(b,-1)
p=b.pop()}else{o=u.gF();++s
if(!u.w()){if(s<=4){C.a.h(b,H.f(o))
return}q=H.f(o)
if(0>=b.length)return H.h(b,-1)
p=b.pop()
t+=q.length+2}else{n=u.gF();++s
for(;u.w();o=n,n=m){m=u.gF();++s
if(s>100){while(!0){if(!(t>75&&s>3))break
if(0>=b.length)return H.h(b,-1)
t-=b.pop().length+2;--s}C.a.h(b,"...")
return}}p=H.f(o)
q=H.f(n)
t+=q.length+p.length+4}}if(s>b.length+2){t+=5
l="..."}else l=null
while(!0){if(!(t>80&&b.length>3))break
if(0>=b.length)return H.h(b,-1)
t-=b.pop().length+2
if(l==null){t+=5
l="..."}}if(l!=null)C.a.h(b,l)
C.a.h(b,p)
C.a.h(b,q)},
jB:function(a,b,c){var u=P.ll(null,null,null,b,c)
a.N(0,new P.eL(u,b,c))
return u},
jC:function(a,b){var u,t,s
u=P.cY(null,null,null,b)
for(t=a.length,s=0;s<a.length;a.length===t||(0,H.D)(a),++s)u.h(0,H.u(a[s],b))
return u},
iU:function(a){var u,t
u={}
if(P.j5(a))return"{...}"
t=new P.ad("")
try{C.a.h($.cu(),a)
t.a+="{"
u.a=!0
a.N(0,new P.eP(u,t))
t.a+="}"}finally{u=$.cu()
if(0>=u.length)return H.h(u,-1)
u.pop()}u=t.a
return u.charCodeAt(0)==0?u:u},
hG:function hG(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
bx:function bx(a){this.a=a
this.c=this.b=null},
dH:function dH(a,b,c){var _=this
_.a=a
_.b=b
_.d=_.c=null
_.$ti=c},
eL:function eL(a,b,c){this.a=a
this.b=b
this.c=c},
eM:function eM(){},
J:function J(){},
eO:function eO(){},
eP:function eP(a,b){this.a=a
this.b=b},
bn:function bn(){},
hY:function hY(){},
eQ:function eQ(){},
du:function du(a,b){this.a=a
this.$ti=b},
hN:function hN(){},
dI:function dI(){},
dT:function dT(){},
lO:function(a,b,c,d){H.l(b,"$ib",[P.k],"$ab")
if(b instanceof Uint8Array)return P.lP(!1,b,c,d)
return},
lP:function(a,b,c,d){var u,t,s
u=$.kK()
if(u==null)return
t=0===c
if(t&&!0)return P.iY(u,b)
s=b.length
d=P.b5(c,d,s,null,null,null)
if(t&&d===s)return P.iY(u,b)
return P.iY(u,b.subarray(c,d))},
iY:function(a,b){if(P.lR(b))return
return P.lS(a,b)},
lS:function(a,b){var u,t
try{u=a.decode(b)
return u}catch(t){H.a3(t)}return},
lR:function(a){var u,t
u=a.length-2
for(t=0;t<u;++t)if(a[t]===237)if((a[t+1]&224)===160)return!0
return!1},
lQ:function(){var u,t
try{u=new TextDecoder("utf-8",{fatal:true})
return u}catch(t){H.a3(t)}return},
mn:function(a,b,c){var u,t,s
H.l(a,"$ib",[P.k],"$ab")
for(u=J.co(a),t=b;t<c;++t){s=u.n(a,t)
if(typeof s!=="number")return s.be()
if((s&127)!==s)return t-b}return c-b},
jn:function(a,b,c,d,e,f){if(C.d.aX(f,4)!==0)throw H.c(P.Q("Invalid base64 padding, padded length must be multiple of four, is "+f,a,c))
if(d+e!==f)throw H.c(P.Q("Invalid base64 padding, '=' not at the end",a,b))
if(e>2)throw H.c(P.Q("Invalid base64 padding, more than two '=' characters",a,b))},
e3:function e3(a){this.a=a},
e4:function e4(a){this.a=a},
bd:function bd(){},
aY:function aY(){},
em:function em(){},
eB:function eB(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
eA:function eA(a){this.a=a},
h6:function h6(a){this.a=a},
h8:function h8(){},
i4:function i4(a){this.b=this.a=0
this.c=a},
h7:function h7(a){this.a=a},
i2:function i2(a,b){var _=this
_.a=a
_.b=b
_.c=!0
_.f=_.e=_.d=0},
i3:function i3(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
cr:function(a,b,c){var u
H.i(b,{func:1,ret:P.k,args:[P.e]})
u=H.lz(a,c)
if(u!=null)return u
if(b!=null)return b.$1(a)
throw H.c(P.Q(a,null,null))},
le:function(a){if(a instanceof H.bM)return a.i(0)
return"Instance of '"+H.br(a)+"'"},
ln:function(a,b,c,d){var u,t
H.u(b,d)
u=J.lj(a,d)
if(a!==0&&!0)for(t=0;t<u.length;++t)C.a.m(u,t,b)
return H.l(u,"$ib",[d],"$ab")},
jD:function(a,b,c){var u,t,s
u=[c]
t=H.a([],u)
for(s=a.gP(a);s.w();)C.a.h(t,H.u(s.gF(),c))
if(b)return t
return H.l(J.eD(t),"$ib",u,"$ab")},
df:function(a,b,c){var u,t
u=P.k
H.l(a,"$io",[u],"$ao")
if(typeof a==="object"&&a!==null&&a.constructor===Array){H.l(a,"$iaB",[u],"$aaB")
t=a.length
c=P.b5(b,c,t,null,null,null)
return H.jM(b>0||c<t?C.a.e0(a,b,c):a)}if(!!J.E(a).$ibY)return H.lB(a,b,P.b5(b,c,a.length,null,null,null))
return P.lI(a,b,c)},
lI:function(a,b,c){var u,t,s,r
H.l(a,"$io",[P.k],"$ao")
if(b<0)throw H.c(P.Z(b,0,J.ar(a),null,null))
u=c==null
if(!u&&c<b)throw H.c(P.Z(c,b,J.ar(a),null,null))
t=J.ba(a)
for(s=0;s<b;++s)if(!t.w())throw H.c(P.Z(b,0,s,null,null))
r=[]
if(u)for(;t.w();)r.push(t.gF())
else for(s=b;s<c;++s){if(!t.w())throw H.c(P.Z(c,b,s,null,null))
r.push(t.gF())}return H.jM(r)},
lE:function(a,b,c){return new H.eF(a,H.lk(a,!1,!0,!1))},
jR:function(a,b,c){var u=J.ba(b)
if(!u.w())return a
if(c.length===0){do a+=H.f(u.gF())
while(u.w())}else{a+=H.f(u.gF())
for(;u.w();)a=a+c+H.f(u.gF())}return a},
h2:function(){var u=H.lr()
if(u!=null)return P.lN(u,0,null)
throw H.c(P.S("'Uri.base' is not supported"))},
dU:function(a,b,c,d){var u,t,s,r,q,p
H.l(a,"$ib",[P.k],"$ab")
if(c===C.i){u=$.kQ().b
if(typeof b!=="string")H.P(H.aq(b))
u=u.test(b)}else u=!1
if(u)return b
H.u(b,H.a2(c,"bd",0))
t=c.ghB().bQ(b)
for(u=t.length,s=0,r="";s<u;++s){q=t[s]
if(q<128){p=q>>>4
if(p>=8)return H.h(a,p)
p=(a[p]&1<<(q&15))!==0}else p=!1
if(p)r+=H.bs(q)
else r=d&&q===32?r+"+":r+"%"+"0123456789ABCDEF"[q>>>4&15]+"0123456789ABCDEF"[q&15]}return r.charCodeAt(0)==0?r:r},
la:function(a){var u,t
u=Math.abs(a)
t=a<0?"-":""
if(u>=1000)return""+a
if(u>=100)return t+"0"+u
if(u>=10)return t+"00"+u
return t+"000"+u},
lb:function(a){if(a>=100)return""+a
if(a>=10)return"0"+a
return"00"+a},
cG:function(a){if(a>=10)return""+a
return"0"+a},
jt:function(a,b,c,d,e,f){return new P.aZ(864e8*a+36e8*b+6e7*e+1e6*f+1000*d+c)},
eo:function(a){if(typeof a==="number"||typeof a==="boolean"||null==a)return J.ae(a)
if(typeof a==="string")return JSON.stringify(a)
return P.le(a)},
cx:function(a){return new P.as(!1,null,null,a)},
iK:function(a,b,c){return new P.as(!0,a,b,c)},
f8:function(a,b,c){return new P.bt(null,null,!0,a,b,"Value not in range")},
Z:function(a,b,c,d,e){return new P.bt(b,c,!0,a,d,"Invalid value")},
b5:function(a,b,c,d,e,f){if(typeof a!=="number")return H.r(a)
if(0>a||a>c)throw H.c(P.Z(a,0,c,"start",f))
if(b!=null){if(a>b||b>c)throw H.c(P.Z(b,a,c,"end",f))
return b}return c},
bj:function(a,b,c,d,e){var u=H.T(e==null?J.ar(b):e)
return new P.eC(b,u,!0,a,c,"Index out of range")},
S:function(a){return new P.h_(a)},
fY:function(a){return new P.fX(a)},
jQ:function(a){return new P.c3(a)},
az:function(a){return new P.eb(a)},
a4:function(a){return new P.dE(a)},
Q:function(a,b,c){return new P.ew(a,b,c)},
lo:function(a,b,c,d){var u,t
H.i(b,{func:1,ret:d,args:[P.k]})
u=H.a([],[d])
C.a.sl(u,a)
for(t=0;t<a;++t)C.a.m(u,t,b.$1(t))
return u},
jf:function(a){H.mO(a)},
lN:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k,j,i,h
c=a.length
u=b+5
if(c>=u){t=((C.b.C(a,b+4)^58)*3|C.b.C(a,b)^100|C.b.C(a,b+1)^97|C.b.C(a,b+2)^116|C.b.C(a,b+3)^97)>>>0
if(t===0)return P.jW(b>0||c<c?C.b.p(a,b,c):a,5,null).gdG()
else if(t===32)return P.jW(C.b.p(a,u,c),0,null).gdG()}s=new Array(8)
s.fixed$length=Array
r=H.a(s,[P.k])
C.a.m(r,0,0)
s=b-1
C.a.m(r,1,s)
C.a.m(r,2,s)
C.a.m(r,7,s)
C.a.m(r,3,b)
C.a.m(r,4,b)
C.a.m(r,5,c)
C.a.m(r,6,c)
if(P.kh(a,b,c,0,r)>=14)C.a.m(r,7,c)
q=r[1]
if(typeof q!=="number")return q.iB()
if(q>=b)if(P.kh(a,b,q,20,r)===20)r[7]=q
s=r[2]
if(typeof s!=="number")return s.H()
p=s+1
o=r[3]
n=r[4]
m=r[5]
l=r[6]
if(typeof l!=="number")return l.T()
if(typeof m!=="number")return H.r(m)
if(l<m)m=l
if(typeof n!=="number")return n.T()
if(n<p)n=m
else if(n<=q)n=q+1
if(typeof o!=="number")return o.T()
if(o<p)o=n
s=r[7]
if(typeof s!=="number")return s.T()
k=s<b
if(k)if(p>q+3){j=null
k=!1}else{s=o>b
if(s&&o+1===n){j=null
k=!1}else{if(!(m<c&&m===n+2&&C.b.a5(a,"..",n)))i=m>n+2&&C.b.a5(a,"/..",m-3)
else i=!0
if(i){j=null
k=!1}else{if(q===b+4)if(C.b.a5(a,"file",b)){if(p<=b){if(!C.b.a5(a,"/",n)){h="file:///"
t=3}else{h="file://"
t=2}a=h+C.b.p(a,n,c)
q-=b
u=t-b
m+=u
l+=u
c=a.length
b=0
p=7
o=7
n=7}else if(n===m)if(b===0&&!0){a=C.b.aB(a,n,m,"/");++m;++l;++c}else{a=C.b.p(a,b,n)+"/"+C.b.p(a,m,c)
q-=b
p-=b
o-=b
n-=b
u=1-b
m+=u
l+=u
c=a.length
b=0}j="file"}else if(C.b.a5(a,"http",b)){if(s&&o+3===n&&C.b.a5(a,"80",o+1))if(b===0&&!0){a=C.b.aB(a,o,n,"")
n-=3
m-=3
l-=3
c-=3}else{a=C.b.p(a,b,o)+C.b.p(a,n,c)
q-=b
p-=b
o-=b
u=3+b
n-=u
m-=u
l-=u
c=a.length
b=0}j="http"}else j=null
else if(q===u&&C.b.a5(a,"https",b)){if(s&&o+4===n&&C.b.a5(a,"443",o+1))if(b===0&&!0){a=C.b.aB(a,o,n,"")
n-=4
m-=4
l-=4
c-=3}else{a=C.b.p(a,b,o)+C.b.p(a,n,c)
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
if(k){if(b>0||c<a.length){a=C.b.p(a,b,c)
q-=b
p-=b
o-=b
n-=b
m-=b
l-=b}return new P.hQ(a,q,p,o,n,m,l,j)}return P.m3(a,b,c,q,p,o,n,m,l,j)},
jY:function(a,b){var u=P.e
return C.a.hG(H.a(a.split("&"),[u]),P.jA(u,u),new P.h5(b),[P.B,P.e,P.e])},
lM:function(a,b,c){var u,t,s,r,q,p,o,n,m
u=new P.h1(a)
t=new Uint8Array(4)
for(s=t.length,r=b,q=r,p=0;r<c;++r){o=C.b.U(a,r)
if(o!==46){if((o^48)>9)u.$2("invalid character",r)}else{if(p===3)u.$2("IPv4 address should contain exactly 4 parts",r)
n=P.cr(C.b.p(a,q,r),null,null)
if(typeof n!=="number")return n.dT()
if(n>255)u.$2("each part must be in the range 0..255",q)
m=p+1
if(p>=s)return H.h(t,p)
t[p]=n
q=r+1
p=m}}if(p!==3)u.$2("IPv4 address should contain exactly 4 parts",c)
n=P.cr(C.b.p(a,q,c),null,null)
if(typeof n!=="number")return n.dT()
if(n>255)u.$2("each part must be in the range 0..255",q)
if(p>=s)return H.h(t,p)
t[p]=n
return t},
jX:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
if(c==null)c=a.length
u=new P.h3(a)
t=new P.h4(u,a)
if(a.length<2)u.$1("address is too short")
s=H.a([],[P.k])
for(r=b,q=r,p=!1,o=!1;r<c;++r){n=C.b.U(a,r)
if(n===58){if(r===b){++r
if(C.b.U(a,r)!==58)u.$2("invalid start colon.",r)
q=r}if(r===q){if(p)u.$2("only one wildcard `::` is allowed",r)
C.a.h(s,-1)
p=!0}else C.a.h(s,t.$2(q,r))
q=r+1}else if(n===46)o=!0}if(s.length===0)u.$1("too few parts")
m=q===c
l=C.a.gaf(s)
if(m&&l!==-1)u.$2("expected a part after last `:`",c)
if(!m)if(!o)C.a.h(s,t.$2(q,c))
else{k=P.lM(a,q,c)
C.a.h(s,(k[0]<<8|k[1])>>>0)
C.a.h(s,(k[2]<<8|k[3])>>>0)}if(p){if(s.length>7)u.$1("an address with a wildcard must have less than 7 parts")}else if(s.length!==8)u.$1("an address without a wildcard must contain exactly 8 parts")
j=new Uint8Array(16)
for(l=s.length,i=j.length,h=9-l,r=0,g=0;r<l;++r){f=s[r]
if(f===-1)for(e=0;e<h;++e){if(g<0||g>=i)return H.h(j,g)
j[g]=0
d=g+1
if(d>=i)return H.h(j,d)
j[d]=0
g+=2}else{d=C.d.au(f,8)
if(g<0||g>=i)return H.h(j,g)
j[g]=d
d=g+1
if(d>=i)return H.h(j,d)
j[d]=f&255
g+=2}}return j},
m3:function(a,b,c,d,e,f,g,h,i,j){var u,t,s,r,q,p,o
if(j==null)if(d>b)j=P.ma(a,b,d)
else{if(d===b)P.cj(a,b,"Invalid empty scheme")
j=""}if(e>b){u=d+3
t=u<e?P.mb(a,u,e-1):""
s=P.m7(a,e,f,!1)
if(typeof f!=="number")return f.H()
r=f+1
if(typeof g!=="number")return H.r(g)
q=r<g?P.m9(P.cr(C.b.p(a,r,g),new P.hZ(a,f),null),j):null}else{t=""
s=null
q=null}p=P.m8(a,g,h,null,j,s!=null)
if(typeof h!=="number")return h.T()
o=h<i?P.j1(a,h+1,i,null):null
return new P.by(j,t,s,q,p,o,i<c?P.m6(a,i+1,c):null)},
k7:function(a){if(a==="http")return 80
if(a==="https")return 443
return 0},
cj:function(a,b,c){throw H.c(P.Q(c,a,b))},
m9:function(a,b){if(a!=null&&a===P.k7(b))return
return a},
m7:function(a,b,c,d){var u,t
if(b===c)return""
if(C.b.U(a,b)===91){if(typeof c!=="number")return c.B()
u=c-1
if(C.b.U(a,u)!==93)P.cj(a,b,"Missing end `]` to match `[` in host")
P.jX(a,b+1,u)
return C.b.p(a,b,c).toLowerCase()}if(typeof c!=="number")return H.r(c)
t=b
for(;t<c;++t)if(C.b.U(a,t)===58){P.jX(a,b,c)
return"["+a+"]"}return P.md(a,b,c)},
md:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k
if(typeof c!=="number")return H.r(c)
u=b
t=u
s=null
r=!0
for(;u<c;){q=C.b.U(a,u)
if(q===37){p=P.kd(a,u,!0)
o=p==null
if(o&&r){u+=3
continue}if(s==null)s=new P.ad("")
n=C.b.p(a,t,u)
m=s.a+=!r?n.toLowerCase():n
if(o){p=C.b.p(a,u,u+3)
l=3}else if(p==="%"){p="%25"
l=1}else l=3
s.a=m+p
u+=l
t=u
r=!0}else{if(q<127){o=q>>>4
if(o>=8)return H.h(C.G,o)
o=(C.G[o]&1<<(q&15))!==0}else o=!1
if(o){if(r&&65<=q&&90>=q){if(s==null)s=new P.ad("")
if(t<u){s.a+=C.b.p(a,t,u)
t=u}r=!1}++u}else{if(q<=93){o=q>>>4
if(o>=8)return H.h(C.o,o)
o=(C.o[o]&1<<(q&15))!==0}else o=!1
if(o)P.cj(a,u,"Invalid character")
else{if((q&64512)===55296&&u+1<c){k=C.b.U(a,u+1)
if((k&64512)===56320){q=65536|(q&1023)<<10|k&1023
l=2}else l=1}else l=1
if(s==null)s=new P.ad("")
n=C.b.p(a,t,u)
s.a+=!r?n.toLowerCase():n
s.a+=P.k8(q)
u+=l
t=u}}}}if(s==null)return C.b.p(a,b,c)
if(t<c){n=C.b.p(a,t,c)
s.a+=!r?n.toLowerCase():n}o=s.a
return o.charCodeAt(0)==0?o:o},
ma:function(a,b,c){var u,t,s,r
if(b===c)return""
if(!P.ka(C.b.C(a,b)))P.cj(a,b,"Scheme not starting with alphabetic character")
for(u=b,t=!1;u<c;++u){s=C.b.C(a,u)
if(s<128){r=s>>>4
if(r>=8)return H.h(C.q,r)
r=(C.q[r]&1<<(s&15))!==0}else r=!1
if(!r)P.cj(a,u,"Illegal scheme character")
if(65<=s&&s<=90)t=!0}a=C.b.p(a,b,c)
return P.m4(t?a.toLowerCase():a)},
m4:function(a){if(a==="http")return"http"
if(a==="file")return"file"
if(a==="https")return"https"
if(a==="package")return"package"
return a},
mb:function(a,b,c){return P.ck(a,b,c,C.a5,!1)},
m8:function(a,b,c,d,e,f){var u,t,s,r
u=e==="file"
t=u||f
s=a==null
if(s&&!0)return u?"/":""
r=!s?P.ck(a,b,c,C.H,!0):C.W.iC(d,new P.i_(),P.e).k(0,"/")
if(r.length===0){if(u)return"/"}else if(t&&!C.b.W(r,"/"))r="/"+r
return P.mc(r,e,f)},
mc:function(a,b,c){var u=b.length===0
if(u&&!c&&!C.b.W(a,"/"))return P.me(a,!u||c)
return P.mf(a)},
j1:function(a,b,c,d){var u,t
u={}
H.l(d,"$iB",[P.e,null],"$aB")
if(a!=null){if(d!=null)throw H.c(P.cx("Both query and queryParameters specified"))
return P.ck(a,b,c,C.p,!0)}if(d==null)return
t=new P.ad("")
u.a=""
d.N(0,new P.i0(new P.i1(u,t)))
u=t.a
return u.charCodeAt(0)==0?u:u},
m6:function(a,b,c){return P.ck(a,b,c,C.p,!0)},
kd:function(a,b,c){var u,t,s,r,q,p
u=b+2
if(u>=a.length)return"%"
t=C.b.U(a,b+1)
s=C.b.U(a,u)
r=H.im(t)
q=H.im(s)
if(r<0||q<0)return"%"
p=r*16+q
if(p<127){u=C.d.au(p,4)
if(u>=8)return H.h(C.r,u)
u=(C.r[u]&1<<(p&15))!==0}else u=!1
if(u)return H.bs(c&&65<=p&&90>=p?(p|32)>>>0:p)
if(t>=97||s>=97)return C.b.p(a,b,b+3).toUpperCase()
return},
k8:function(a){var u,t,s,r,q,p
if(a<128){u=new Array(3)
u.fixed$length=Array
t=H.a(u,[P.k])
C.a.m(t,0,37)
C.a.m(t,1,C.b.C("0123456789ABCDEF",a>>>4))
C.a.m(t,2,C.b.C("0123456789ABCDEF",a&15))}else{if(a>2047)if(a>65535){s=240
r=4}else{s=224
r=3}else{s=192
r=2}u=new Array(3*r)
u.fixed$length=Array
t=H.a(u,[P.k])
for(q=0;--r,r>=0;s=128){p=C.d.fR(a,6*r)&63|s
C.a.m(t,q,37)
C.a.m(t,q+1,C.b.C("0123456789ABCDEF",p>>>4))
C.a.m(t,q+2,C.b.C("0123456789ABCDEF",p&15))
q+=3}}return P.df(t,0,null)},
ck:function(a,b,c,d,e){var u=P.kc(a,b,c,H.l(d,"$ib",[P.k],"$ab"),e)
return u==null?C.b.p(a,b,c):u},
kc:function(a,b,c,d,e){var u,t,s,r,q,p,o,n,m
H.l(d,"$ib",[P.k],"$ab")
u=!e
t=b
s=t
r=null
while(!0){if(typeof t!=="number")return t.T()
if(typeof c!=="number")return H.r(c)
if(!(t<c))break
c$0:{q=C.b.U(a,t)
if(q<127){p=q>>>4
if(p>=8)return H.h(d,p)
p=(d[p]&1<<(q&15))!==0}else p=!1
if(p)++t
else{if(q===37){o=P.kd(a,t,!1)
if(o==null){t+=3
break c$0}if("%"===o){o="%25"
n=1}else n=3}else{if(u)if(q<=93){p=q>>>4
if(p>=8)return H.h(C.o,p)
p=(C.o[p]&1<<(q&15))!==0}else p=!1
else p=!1
if(p){P.cj(a,t,"Invalid character")
o=null
n=null}else{if((q&64512)===55296){p=t+1
if(p<c){m=C.b.U(a,p)
if((m&64512)===56320){q=65536|(q&1023)<<10|m&1023
n=2}else n=1}else n=1}else n=1
o=P.k8(q)}}if(r==null)r=new P.ad("")
r.a+=C.b.p(a,s,t)
r.a+=H.f(o)
if(typeof n!=="number")return H.r(n)
t+=n
s=t}}}if(r==null)return
if(typeof s!=="number")return s.T()
if(s<c)r.a+=C.b.p(a,s,c)
u=r.a
return u.charCodeAt(0)==0?u:u},
kb:function(a){if(C.b.W(a,"."))return!0
return C.b.dc(a,"/.")!==-1},
mf:function(a){var u,t,s,r,q,p,o
if(!P.kb(a))return a
u=H.a([],[P.e])
for(t=a.split("/"),s=t.length,r=!1,q=0;q<s;++q){p=t[q]
if(J.U(p,"..")){o=u.length
if(o!==0){if(0>=o)return H.h(u,-1)
u.pop()
if(u.length===0)C.a.h(u,"")}r=!0}else if("."===p)r=!0
else{C.a.h(u,p)
r=!1}}if(r)C.a.h(u,"")
return C.a.k(u,"/")},
me:function(a,b){var u,t,s,r,q,p
if(!P.kb(a))return!b?P.k9(a):a
u=H.a([],[P.e])
for(t=a.split("/"),s=t.length,r=!1,q=0;q<s;++q){p=t[q]
if(".."===p)if(u.length!==0&&C.a.gaf(u)!==".."){if(0>=u.length)return H.h(u,-1)
u.pop()
r=!0}else{C.a.h(u,"..")
r=!1}else if("."===p)r=!0
else{C.a.h(u,p)
r=!1}}t=u.length
if(t!==0)if(t===1){if(0>=t)return H.h(u,0)
t=u[0].length===0}else t=!1
else t=!0
if(t)return"./"
if(r||C.a.gaf(u)==="..")C.a.h(u,"")
if(!b){if(0>=u.length)return H.h(u,0)
C.a.m(u,0,P.k9(u[0]))}return C.a.k(u,"/")},
k9:function(a){var u,t,s,r
u=a.length
if(u>=2&&P.ka(J.kU(a,0)))for(t=1;t<u;++t){s=C.b.C(a,t)
if(s===58)return C.b.p(a,0,t)+"%3A"+C.b.ag(a,t+1)
if(s<=127){r=s>>>4
if(r>=8)return H.h(C.q,r)
r=(C.q[r]&1<<(s&15))===0}else r=!0
if(r)break}return a},
m5:function(a,b){var u,t,s
for(u=0,t=0;t<2;++t){s=C.b.C(a,b+t)
if(48<=s&&s<=57)u=u*16+s-48
else{s|=32
if(97<=s&&s<=102)u=u*16+s-87
else throw H.c(P.cx("Invalid URL encoding"))}}return u},
j2:function(a,b,c,d,e){var u,t,s,r,q
t=b
while(!0){if(!(t<c)){u=!0
break}s=C.b.C(a,t)
if(s<=127)if(s!==37)r=s===43
else r=!0
else r=!0
if(r){u=!1
break}++t}if(u){if(C.i!==d)r=!1
else r=!0
if(r)return C.b.p(a,b,c)
else q=new H.n(C.b.p(a,b,c))}else{q=H.a([],[P.k])
for(r=a.length,t=b;t<c;++t){s=C.b.C(a,t)
if(s>127)throw H.c(P.cx("Illegal percent encoding in URI"))
if(s===37){if(t+3>r)throw H.c(P.cx("Truncated URI"))
C.a.h(q,P.m5(a,t+1))
t+=2}else if(s===43)C.a.h(q,32)
else C.a.h(q,s)}}H.l(q,"$ib",[P.k],"$ab")
return new P.h7(!1).bQ(q)},
ka:function(a){var u=a|32
return 97<=u&&u<=122},
jW:function(a,b,c){var u,t,s,r,q,p,o,n,m
u=H.a([b-1],[P.k])
for(t=a.length,s=b,r=-1,q=null;s<t;++s){q=C.b.C(a,s)
if(q===44||q===59)break
if(q===47){if(r<0){r=s
continue}throw H.c(P.Q("Invalid MIME type",a,s))}}if(r<0&&s>b)throw H.c(P.Q("Invalid MIME type",a,s))
for(;q!==44;){C.a.h(u,s);++s
for(p=-1;s<t;++s){q=C.b.C(a,s)
if(q===61){if(p<0)p=s}else if(q===59||q===44)break}if(p>=0)C.a.h(u,p)
else{o=C.a.gaf(u)
if(q!==44||s!==o+7||!C.b.a5(a,"base64",o+1))throw H.c(P.Q("Expecting '='",a,s))
break}}C.a.h(u,s)
n=s+1
if((u.length&1)===1)a=C.M.hU(a,n,t)
else{m=P.kc(a,n,t,C.p,!0)
if(m!=null)a=C.b.aB(a,n,t,m)}return new P.h0(a,u,c)},
mh:function(){var u,t,s,r,q
u=P.lo(22,new P.i8(),!0,P.C)
t=new P.i7(u)
s=new P.i9()
r=new P.ia()
q=H.d(t.$2(0,225),"$iC")
s.$3(q,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",1)
s.$3(q,".",14)
s.$3(q,":",34)
s.$3(q,"/",3)
s.$3(q,"?",172)
s.$3(q,"#",205)
q=H.d(t.$2(14,225),"$iC")
s.$3(q,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",1)
s.$3(q,".",15)
s.$3(q,":",34)
s.$3(q,"/",234)
s.$3(q,"?",172)
s.$3(q,"#",205)
q=H.d(t.$2(15,225),"$iC")
s.$3(q,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",1)
s.$3(q,"%",225)
s.$3(q,":",34)
s.$3(q,"/",9)
s.$3(q,"?",172)
s.$3(q,"#",205)
q=H.d(t.$2(1,225),"$iC")
s.$3(q,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",1)
s.$3(q,":",34)
s.$3(q,"/",10)
s.$3(q,"?",172)
s.$3(q,"#",205)
q=H.d(t.$2(2,235),"$iC")
s.$3(q,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",139)
s.$3(q,"/",131)
s.$3(q,".",146)
s.$3(q,"?",172)
s.$3(q,"#",205)
q=H.d(t.$2(3,235),"$iC")
s.$3(q,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",11)
s.$3(q,"/",68)
s.$3(q,".",18)
s.$3(q,"?",172)
s.$3(q,"#",205)
q=H.d(t.$2(4,229),"$iC")
s.$3(q,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",5)
r.$3(q,"AZ",229)
s.$3(q,":",102)
s.$3(q,"@",68)
s.$3(q,"[",232)
s.$3(q,"/",138)
s.$3(q,"?",172)
s.$3(q,"#",205)
q=H.d(t.$2(5,229),"$iC")
s.$3(q,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",5)
r.$3(q,"AZ",229)
s.$3(q,":",102)
s.$3(q,"@",68)
s.$3(q,"/",138)
s.$3(q,"?",172)
s.$3(q,"#",205)
q=H.d(t.$2(6,231),"$iC")
r.$3(q,"19",7)
s.$3(q,"@",68)
s.$3(q,"/",138)
s.$3(q,"?",172)
s.$3(q,"#",205)
q=H.d(t.$2(7,231),"$iC")
r.$3(q,"09",7)
s.$3(q,"@",68)
s.$3(q,"/",138)
s.$3(q,"?",172)
s.$3(q,"#",205)
s.$3(H.d(t.$2(8,8),"$iC"),"]",5)
q=H.d(t.$2(9,235),"$iC")
s.$3(q,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",11)
s.$3(q,".",16)
s.$3(q,"/",234)
s.$3(q,"?",172)
s.$3(q,"#",205)
q=H.d(t.$2(16,235),"$iC")
s.$3(q,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",11)
s.$3(q,".",17)
s.$3(q,"/",234)
s.$3(q,"?",172)
s.$3(q,"#",205)
q=H.d(t.$2(17,235),"$iC")
s.$3(q,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",11)
s.$3(q,"/",9)
s.$3(q,"?",172)
s.$3(q,"#",205)
q=H.d(t.$2(10,235),"$iC")
s.$3(q,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",11)
s.$3(q,".",18)
s.$3(q,"/",234)
s.$3(q,"?",172)
s.$3(q,"#",205)
q=H.d(t.$2(18,235),"$iC")
s.$3(q,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",11)
s.$3(q,".",19)
s.$3(q,"/",234)
s.$3(q,"?",172)
s.$3(q,"#",205)
q=H.d(t.$2(19,235),"$iC")
s.$3(q,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",11)
s.$3(q,"/",234)
s.$3(q,"?",172)
s.$3(q,"#",205)
q=H.d(t.$2(11,235),"$iC")
s.$3(q,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",11)
s.$3(q,"/",10)
s.$3(q,"?",172)
s.$3(q,"#",205)
q=H.d(t.$2(12,236),"$iC")
s.$3(q,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",12)
s.$3(q,"?",12)
s.$3(q,"#",205)
q=H.d(t.$2(13,237),"$iC")
s.$3(q,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",13)
s.$3(q,"?",13)
r.$3(H.d(t.$2(20,245),"$iC"),"az",21)
q=H.d(t.$2(21,245),"$iC")
r.$3(q,"az",21)
r.$3(q,"09",21)
s.$3(q,"+-.",21)
return u},
kh:function(a,b,c,d,e){var u,t,s,r,q
H.l(e,"$ib",[P.k],"$ab")
u=$.kR()
for(t=b;t<c;++t){if(d<0||d>=u.length)return H.h(u,d)
s=u[d]
r=C.b.C(a,t)^96
if(r>95)r=31
if(r>=s.length)return H.h(s,r)
q=s[r]
d=q&31
C.a.m(e,q>>>5,t)}return d},
G:function G(){},
a8:function a8(a,b){this.a=a
this.b=b},
w:function w(){},
aZ:function aZ(a){this.a=a},
ei:function ei(){},
ej:function ej(){},
b_:function b_(){},
d6:function d6(){},
as:function as(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
bt:function bt(a,b,c,d,e,f){var _=this
_.e=a
_.f=b
_.a=c
_.b=d
_.c=e
_.d=f},
eC:function eC(a,b,c,d,e,f){var _=this
_.e=a
_.f=b
_.a=c
_.b=d
_.c=e
_.d=f},
h_:function h_(a){this.a=a},
fX:function fX(a){this.a=a},
c3:function c3(a){this.a=a},
eb:function eb(a){this.a=a},
f2:function f2(){},
de:function de(){},
ef:function ef(a){this.a=a},
dE:function dE(a){this.a=a},
ew:function ew(a,b,c){this.a=a
this.b=b
this.c=c},
b0:function b0(){},
k:function k(){},
o:function o(){},
aA:function aA(){},
b:function b(){},
B:function B(){},
y:function y(){},
a6:function a6(){},
F:function F(){},
ac:function ac(){},
e:function e(){},
ad:function ad(a){this.a=a},
h5:function h5(a){this.a=a},
h1:function h1(a){this.a=a},
h3:function h3(a){this.a=a},
h4:function h4(a,b){this.a=a
this.b=b},
by:function by(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.ch=_.Q=_.z=_.y=_.x=null},
hZ:function hZ(a,b){this.a=a
this.b=b},
i_:function i_(){},
i1:function i1(a,b){this.a=a
this.b=b},
i0:function i0(a){this.a=a},
h0:function h0(a,b,c){this.a=a
this.b=b
this.c=c},
i8:function i8(){},
i7:function i7(a){this.a=a},
i9:function i9(){},
ia:function ia(){},
hQ:function hQ(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.x=h
_.y=null},
hq:function hq(a,b,c,d,e,f,g,h){var _=this
_.cx=a
_.a=b
_.b=c
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.ch=_.Q=_.z=_.y=_.x=null},
mw:function(a){var u,t
u=J.E(a)
if(!!u.$iaL){t=u.gd_(a)
if(t.constructor===Array)if(typeof CanvasPixelArray!=="undefined"){t.constructor=CanvasPixelArray
t.BYTES_PER_ELEMENT=1}return a}return new P.dS(a.data,a.height,a.width)},
mv:function(a){if(a instanceof P.dS)return{data:a.a,height:a.b,width:a.c}
return a},
mu:function(a,b){var u={}
a.N(0,new P.ig(u))
return u},
hR:function hR(){},
hS:function hS(a,b){this.a=a
this.b=b},
dS:function dS(a,b,c){this.a=a
this.b=b
this.c=c},
ig:function ig(a){this.a=a},
dO:function dO(a,b){this.a=a
this.b=b},
es:function es(a,b){this.a=a
this.b=b},
et:function et(){},
eu:function eu(){},
hF:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
m_:function(a){a=536870911&a+((67108863&a)<<3)
a^=a>>>11
return 536870911&a+((16383&a)<<15)},
hH:function hH(){},
am:function am(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=e},
c0:function c0(){},
m:function m(){},
C:function C(){},
cz:function cz(){},
cL:function cL(){},
d9:function d9(){},
bu:function bu(){},
dc:function dc(){},
dj:function dj(){},
dr:function dr(){}},W={
jm:function(a){var u=document.createElement("a")
return u},
iM:function(a,b){var u=document.createElement("canvas")
return u},
lc:function(a,b,c){var u,t
u=document.body
t=(u&&C.l).a6(u,a,b,c)
t.toString
u=W.x
u=new H.cb(new W.aa(t),H.i(new W.el(),{func:1,ret:P.G,args:[u]}),[u])
return H.d(u.gam(u),"$iA")},
ld:function(a){H.d(a,"$ibf")
return"wheel"},
bP:function(a){var u,t,s
u="element tag unavailable"
try{t=J.kY(a)
if(typeof t==="string")u=a.tagName}catch(s){H.a3(s)}return u},
jx:function(a,b,c){var u=document.createElement("img")
if(b!=null)u.src=b
return u},
lg:function(a){var u,t,s
t=document.createElement("input")
u=H.d(t,"$ibT")
try{u.type=a}catch(s){H.a3(s)}return u},
hE:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
k5:function(a,b,c,d){var u,t
u=W.hE(W.hE(W.hE(W.hE(0,a),b),c),d)
t=536870911&u+((67108863&u)<<3)
t^=t>>>11
return 536870911&t+((16383&t)<<15)},
V:function(a,b,c,d,e){var u,t
u=W.kk(new W.hu(c),W.j)
t=u!=null
if(t&&!0){H.i(u,{func:1,args:[W.j]})
if(t)J.kT(a,b,u,!1)}return new W.ht(a,b,u,!1,[e])},
k4:function(a){var u,t
u=W.jm(null)
t=window.location
u=new W.b7(new W.hM(u,t))
u.ee(a)
return u},
lY:function(a,b,c,d){H.d(a,"$iA")
H.z(b)
H.z(c)
H.d(d,"$ib7")
return!0},
lZ:function(a,b,c,d){var u,t,s
H.d(a,"$iA")
H.z(b)
H.z(c)
u=H.d(d,"$ib7").a
t=u.a
t.href=c
s=t.hostname
u=u.b
if(!(s==u.hostname&&t.port==u.port&&t.protocol==u.protocol))if(s==="")if(t.port===""){u=t.protocol
u=u===":"||u===""}else u=!1
else u=!1
else u=!0
return u},
k6:function(){var u,t,s,r,q
u=P.e
t=P.jC(C.v,u)
s=H.p(C.v,0)
r=H.i(new W.hV(),{func:1,ret:u,args:[s]})
q=H.a(["TEMPLATE"],[u])
t=new W.hU(t,P.cY(null,null,null,u),P.cY(null,null,null,u),P.cY(null,null,null,u),null)
t.eg(null,new H.eT(C.v,r,[s,u]),q,null)
return t},
kk:function(a,b){var u
H.i(a,{func:1,ret:-1,args:[b]})
u=$.N
if(u===C.h)return a
return u.cW(a,b)},
t:function t(){},
cw:function cw(){},
e1:function e1(){},
bJ:function bJ(){},
aV:function aV(){},
bb:function bb(){},
bc:function bc(){},
aW:function aW(){},
bN:function bN(){},
ee:function ee(){},
al:function al(){},
bO:function bO(){},
eh:function eh(){},
cH:function cH(){},
cI:function cI(){},
hp:function hp(a,b){this.a=a
this.b=b},
A:function A(){},
el:function el(){},
j:function j(){},
bf:function bf(){},
ev:function ev(){},
cM:function cM(){},
cN:function cN(){},
bh:function bh(){},
cO:function cO(){},
aL:function aL(){},
bi:function bi(){},
bT:function bT(){},
aC:function aC(){},
cX:function cX(){},
cZ:function cZ(){},
bW:function bW(){},
R:function R(){},
aa:function aa(a){this.a=a},
x:function x(){},
bZ:function bZ(){},
da:function da(){},
fg:function fg(){},
aD:function aD(){},
dg:function dg(){},
dh:function dh(){},
fu:function fu(){},
c5:function c5(){},
av:function av(){},
aw:function aw(){},
fH:function fH(){},
b6:function b6(){},
hh:function hh(){},
aH:function aH(){},
cc:function cc(){},
cd:function cd(){},
dD:function dD(){},
dJ:function dJ(){},
ho:function ho(){},
hr:function hr(a){this.a=a},
hs:function hs(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
j_:function j_(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
ht:function ht(a,b,c,d,e){var _=this
_.a=0
_.b=a
_.c=b
_.d=c
_.e=d
_.$ti=e},
hu:function hu(a){this.a=a},
b7:function b7(a){this.a=a},
ag:function ag(){},
d5:function d5(a){this.a=a},
f0:function f0(a){this.a=a},
f_:function f_(a,b,c){this.a=a
this.b=b
this.c=c},
dM:function dM(){},
hO:function hO(){},
hP:function hP(){},
hU:function hU(a,b,c,d,e){var _=this
_.e=a
_.a=b
_.b=c
_.c=d
_.d=e},
hV:function hV(){},
hT:function hT(){},
cK:function cK(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=null
_.$ti=d},
aj:function aj(){},
hM:function hM(a,b){this.a=a
this.b=b},
dV:function dV(a){this.a=a},
i5:function i5(a){this.a=a},
dC:function dC(){},
dF:function dF(){},
dG:function dG(){},
dK:function dK(){},
dL:function dL(){},
dQ:function dQ(){},
dR:function dR(){},
dW:function dW(){},
dX:function dX(){}},O={
js:function(a){var u=new O.X([a])
u.cd(a)
return u},
X:function X(a){var _=this
_.d=_.c=_.b=_.a=null
_.$ti=a},
bV:function bV(){this.b=this.a=null},
bv:function bv(){}},E={
jw:function(a,b,c,d,e,f){var u=new E.a9()
u.a=d
u.b=!0
u.sed(0,O.js(E.a9))
u.y.bj(u.ghV(),u.ghY())
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
u.sca(0,e)
u.sdA(f)
u.saR(c)
return u},
lF:function(a,b){var u=new E.fb(a,b)
u.e7(a,b)
return u},
lJ:function(a,b,c,d,e){var u,t,s,r
u=J.E(a)
if(!!u.$ibb)return E.jS(a,!0,!0,!0,!1)
t=W.iM(null,null)
s=t.style
s.width="100%"
s.height="100%"
u.gbP(a).h(0,t)
r=E.jS(t,!0,!0,!0,!1)
r.a=a
return r},
jS:function(a,b,c,d,e){var u,t,s,r,q,p,o,n,m,l,k,j
u=new E.dl()
t=P.lm(["alpha",!0,"depth",!0,"stencil",!1,"antialias",!0,"premultipliedAlpha",!0,"preserveDrawingBuffer",!1],P.e,null)
s=C.m.bf(a,"webgl",t)
s=H.d(s==null?C.m.bf(a,"experimental-webgl",t):s,"$ibu")
if(s==null)H.P(P.a4("Failed to get the rendering context for WebGL."))
u.b=a
u.a=a
u.c=s
u.e=E.lF(s,a)
r=new T.fB(s)
r.b=H.T((s&&C.c).c8(s,3379))
r.c=H.T(C.c.c8(s,34076))
r.d=0
r.e=0
u.f=r
r=new X.dv(a)
q=new X.eH()
q.c=new X.ai(!1,!1,!1)
q.sfA(P.cY(null,null,null,P.k))
r.b=q
q=new X.eV(r)
q.f=0
q.r=V.b3()
q.x=V.b3()
q.Q=1
q.ch=1
r.c=q
q=new X.eN(r)
q.r=0
q.x=V.b3()
q.Q=1
q.ch=1
q.cx=1
q.cy=1
r.d=q
q=new X.fG(r)
q.e=0
q.f=V.b3()
q.r=V.b3()
r.e=q
r.f=!1
r.r=!1
r.x=!1
r.y=null
r.sez(H.a([],[[P.c4,P.F]]))
q=r.z
p=document
o=W.R
n={func:1,ret:-1,args:[o]};(q&&C.a).h(q,W.V(p,"contextmenu",H.i(r.gf1(),n),!1,o))
q=r.z
m=W.j
l={func:1,ret:-1,args:[m]};(q&&C.a).h(q,W.V(a,"focus",H.i(r.gf7(),l),!1,m))
q=r.z;(q&&C.a).h(q,W.V(a,"blur",H.i(r.geW(),l),!1,m))
q=r.z
k=W.aC
j={func:1,ret:-1,args:[k]};(q&&C.a).h(q,W.V(p,"keyup",H.i(r.gfb(),j),!1,k))
q=r.z;(q&&C.a).h(q,W.V(p,"keydown",H.i(r.gf9(),j),!1,k))
k=r.z;(k&&C.a).h(k,W.V(a,"mousedown",H.i(r.gfe(),n),!1,o))
k=r.z;(k&&C.a).h(k,W.V(a,"mouseup",H.i(r.gfi(),n),!1,o))
k=r.z;(k&&C.a).h(k,W.V(a,"mousemove",H.i(r.gfg(),n),!1,o))
k=r.z
j=W.aH;(k&&C.a).h(k,W.V(a,H.z(W.ld(a)),H.i(r.gfk(),{func:1,ret:-1,args:[j]}),!1,j))
j=r.z;(j&&C.a).h(j,W.V(p,"mousemove",H.i(r.gf3(),n),!1,o))
j=r.z;(j&&C.a).h(j,W.V(p,"mouseup",H.i(r.gf5(),n),!1,o))
o=r.z;(o&&C.a).h(o,W.V(p,"pointerlockchange",H.i(r.gfm(),l),!1,m))
m=r.z
l=W.aw
p={func:1,ret:-1,args:[l]};(m&&C.a).h(m,W.V(a,"touchstart",H.i(r.gfw(),p),!1,l))
m=r.z;(m&&C.a).h(m,W.V(a,"touchend",H.i(r.gfs(),p),!1,l))
m=r.z;(m&&C.a).h(m,W.V(a,"touchmove",H.i(r.gfu(),p),!1,l))
u.r=r
u.Q=!0
u.ch=!1
u.cx=new P.a8(Date.now(),!1)
u.cy=0
u.cK()
return u},
e5:function e5(){},
a9:function a9(){var _=this
_.fx=_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
fb:function fb(a,b){var _=this
_.a=a
_.b=b
_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=null},
fc:function fc(a){this.a=a},
fd:function fd(a){this.a=a},
fe:function fe(a){this.a=a},
dl:function dl(){var _=this
_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
fD:function fD(a){this.a=a}},Z={
k2:function(a,b,c){var u
H.l(c,"$ib",[P.k],"$ab")
u=a.createBuffer()
C.c.ad(a,b,u)
C.c.cY(a,b,new Int16Array(H.ib(c)),35044)
C.c.ad(a,b,null)
return new Z.dA(b,u)},
an:function(a){return new Z.ca(a)},
dA:function dA(a,b){this.a=a
this.b=b},
cA:function cA(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
hi:function hi(a){this.a=a},
cB:function cB(a,b,c){var _=this
_.a=a
_.b=null
_.c=b
_.d=c},
bk:function bk(a,b,c){this.a=a
this.b=b
this.c=c},
ca:function ca(a){this.a=a}},D={
L:function(){var u=new D.bQ()
u.sai(null)
u.sb_(null)
u.c=null
u.d=0
return u},
e9:function e9(){},
bQ:function bQ(){var _=this
_.d=_.c=_.b=_.a=null},
ep:function ep(a){this.a=a},
eq:function eq(a){this.a=a},
v:function v(a){this.a=a
this.b=null},
cP:function cP(a,b,c,d){var _=this
_.c=a
_.d=b
_.a=c
_.b=null
_.$ti=d},
cQ:function cQ(a,b,c,d){var _=this
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
_.$ti=e}},X={cD:function cD(a,b){this.a=a
this.b=b},cW:function cW(a,b){this.a=a
this.b=b},eH:function eH(){var _=this
_.d=_.c=_.b=_.a=null},d_:function d_(a,b,c,d,e,f){var _=this
_.x=a
_.y=b
_.c=c
_.d=d
_.e=e
_.a=f
_.b=null},eN:function eN(a){var _=this
_.a=a
_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},ai:function ai(a,b,c){this.a=a
this.b=b
this.c=c},aO:function aO(a,b,c,d,e,f,g,h,i){var _=this
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
_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},bX:function bX(a,b,c,d,e){var _=this
_.x=a
_.c=b
_.d=c
_.e=d
_.a=e
_.b=null},f5:function f5(){},dn:function dn(a,b,c,d,e,f,g,h,i){var _=this
_.x=a
_.y=b
_.z=c
_.Q=d
_.ch=e
_.c=f
_.d=g
_.e=h
_.a=i
_.b=null},fG:function fG(a){var _=this
_.a=a
_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},dv:function dv(a){var _=this
_.a=a
_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},
lf:function(a,b,c,d,e,f,g){var u,t
u=new X.ex()
t=new V.be(0,0,0,1)
u.a=t
u.b=!0
u.c=e
u.d=!0
u.e=g
u.f=!1
t=$.jO
if(t==null){t=V.jN(0,0,1,1)
$.jO=t}u.r=t
return u},
cE:function cE(){},
ex:function ex(){var _=this
_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
d7:function d7(){var _=this
_.f=_.e=_.d=_.c=_.b=_.a=null},
di:function di(){}},V={
mV:function(a,b,c){var u
if(c<=b)return b
u=c-b
a=C.e.aX(a-b,u)
return(a<0?a+u:a)+b},
O:function(a,b,c){if(a==null)return C.b.a8("null",c)
return C.b.a8(C.e.dC(Math.abs(a-0)<$.K().a?0:a,b),c+b+1)},
ii:function(a,b,c){var u,t,s,r,q
H.l(a,"$ib",[P.w],"$ab")
u=H.a([],[P.e])
for(t=0,s=0;s<4;++s){r=V.O(a[s],b,c)
t=Math.max(t,r.length)
C.a.h(u,r)}for(q=u.length-1;q>=0;--q){if(q>=u.length)return H.h(u,q)
C.a.m(u,q,C.b.a8(u[q],t))}return u},
je:function(a,b){return C.e.ir(Math.pow(b,C.V.bT(Math.log(H.mt(a))/Math.log(b))))},
eU:function(){var u=$.jE
if(u==null){u=V.aN(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1)
$.jE=u}return u},
aN:function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){return new V.b2(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p)},
b3:function(){var u=$.jJ
if(u==null){u=new V.a5(0,0)
$.jJ=u}return u},
jN:function(a,b,c,d){if(c<0){a+=c
c=-c}if(d<0){b+=d
d=-d}return new V.db(a,b,c,d)},
dz:function(){var u=$.k1
if(u==null){u=new V.a_(0,0,0)
$.k1=u}return u},
be:function be(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
en:function en(a){this.a=a},
b2:function b2(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){var _=this
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
b4:function b4(a,b,c){this.a=a
this.b=b
this.c=c},
d8:function d8(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
db:function db(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
I:function I(a,b){this.a=a
this.b=b},
a_:function a_(a,b,c){this.a=a
this.b=b
this.c=c},
M:function(a,b){var u,t,s,r
if(a.length!==1||b.length!==1)throw H.c(P.a4("The given low and high character strings for a RangeMatcher must have one and only one characters."))
u=C.b.C(a,0)
t=C.b.C(b,0)
s=new V.f9()
if(u>t){r=t
t=u
u=r}s.a=u
s.b=t
return s},
q:function(a){var u=new V.fh()
u.e8(a)
return u},
fF:function(){var u,t
u=new V.fE()
t=P.e
u.sfS(new H.au([t,V.c2]))
u.sfX(new H.au([t,V.c6]))
u.c=null
return u},
aJ:function aJ(){},
ah:function ah(){},
d0:function d0(){},
ab:function ab(){this.a=null},
f9:function f9(){this.b=this.a=null},
fh:function fh(){this.a=null},
c2:function c2(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
dm:function dm(a,b,c){this.a=a
this.b=b
this.c=c},
c6:function c6(a,b){this.a=a
this.b=b
this.c=null},
fE:function fE(){this.c=this.b=this.a=null},
c7:function c7(a){this.b=a
this.a=this.c=null},
mR:function(a){P.lK(C.R,new V.iG(a))},
lH:function(a,b){var u=new V.fl()
u.ea(a,!0)
return u},
aX:function aX(){},
iG:function iG(a){this.a=a},
eg:function eg(a){var _=this
_.a=a
_.d=_.c=_.b=null},
ey:function ey(a){var _=this
_.a=a
_.d=_.c=_.b=null},
ez:function ez(a){var _=this
_.a=a
_.d=_.c=_.b=null},
f4:function f4(a){var _=this
_.a=a
_.d=_.c=_.b=null},
f6:function f6(a,b){this.a=a
this.b=b
this.c=null},
f7:function f7(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
fl:function fl(){this.b=this.a=null},
fn:function fn(a){this.a=a},
fm:function fm(a){this.a=a},
fo:function fo(a){this.a=a},
fx:function fx(a,b,c){var _=this
_.a=a
_.b=b
_.c=null
_.d=c},
fz:function fz(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
fy:function fy(){}},U={
iN:function(){var u=new U.ea()
u.a=!0
u.b=1e12
u.c=-1e12
u.d=0
u.e=100
u.f=0
u.x=0
u.r=0
return u},
ea:function ea(){var _=this
_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
cF:function cF(){this.b=this.a=null},
bS:function bS(){var _=this
_.d=_.c=_.b=_.a=_.r=_.f=_.e=null},
a1:function a1(){},
dw:function dw(){var _=this
_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
dx:function dx(){var _=this
_.fx=_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
dy:function dy(){var _=this
_.r=_.f=_.e=_.d=_.c=_.b=_.a=null}},M={cJ:function cJ(){var _=this
_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null}},A={
iW:function(a,b,c,d,e){var u=new A.fM(a,b,c,e)
u.f=d
u.sh4(P.ln(d,0,!1,P.k))
return u},
cy:function cy(a,b,c){this.a=a
this.b=b
this.c=c},
e2:function e2(a){this.a=a},
c1:function c1(){},
dp:function dp(){},
fT:function fT(a){this.a=a},
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
fQ:function fQ(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
fS:function fS(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
fM:function fM(a,b,c,d){var _=this
_.f=_.e=null
_.a=a
_.b=b
_.c=c
_.d=d},
dq:function dq(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
fN:function fN(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
fP:function fP(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
fR:function fR(a,b,c,d){var _=this
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
bw:function bw(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
ds:function ds(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
fW:function fW(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d}},F={
mC:function(a,b,c){var u={}
u.a=b
u.a=new F.ik()
return F.mT(c,a,new F.il(u),null)},
mT:function(a,b,c,d){var u,t,s,r,q,p,o,n,m,l,k,j,i,h
H.i(c,{func:1,ret:-1,args:[F.aG,P.w,P.w]})
if(a<1)return
if(b<1)return
u=new F.dd()
t=new F.h9(u)
t.b=!1
s=[F.aG]
t.sh5(H.a([],s))
u.a=t
t=new F.fk(u)
t.sbE(H.a([],[F.bp]))
u.b=t
t=new F.fj(u)
t.seK(H.a([],[F.aM]))
u.c=t
t=new F.fi(u)
t.seA(H.a([],[F.Y]))
u.d=t
u.e=null
r=H.a([],s)
for(q=0;q<=b;++q){p=q/b
t=u.a
if(p<0)s=0
else s=p>1?1:p
t.toString
o=F.iZ(null,null,new V.be(s,0,0,1),null,null,new V.a5(p,1),null,null,0)
t.h(0,o)
c.$3(o,p,0)
C.a.h(r,o.bR(d))}for(q=1;q<=a;++q){n=q/a
for(t=n>1,s=n<0,m=1-n,l=0;l<=b;++l){p=l/b
k=u.a
if(p<0)j=0
else j=p>1?1:p
if(s)i=0
else i=t?1:n
if(s)h=0
else h=t?1:n
k.toString
o=F.iZ(null,null,new V.be(j,i,h,1),null,null,new V.a5(p,m),null,null,0)
k.h(0,o)
c.$3(o,p,n)
C.a.h(r,o.bR(d))}}u.d.h7(a+1,b+1,r)
return u},
er:function(a,b,c){var u,t
u=new F.Y()
t=a.a
if(t==null)H.P(P.a4("May not create a face with a first vertex which is not attached to a shape."))
if(t!=b.a||t!=c.a)H.P(P.a4("May not create a face with vertices attached to different shapes."))
u.a=a
C.a.h(a.d.b,u)
u.b=b
C.a.h(b.d.c,u)
u.c=c
C.a.h(c.d.d,u)
C.a.h(u.a.a.d.b,u)
u.a.a.a0()
return u},
iZ:function(a,b,c,d,e,f,g,h,i){var u,t,s
u=new F.aG()
t=new F.he(u)
t.sbE(H.a([],[F.bp]))
u.b=t
t=new F.hd(u)
s=[F.aM]
t.seL(H.a([],s))
t.seM(H.a([],s))
u.c=t
t=new F.ha(u)
s=[F.Y]
t.seB(H.a([],s))
t.seC(H.a([],s))
t.seD(H.a([],s))
u.d=t
h=$.kL()
u.e=0
t=$.aS()
s=h.a
u.f=(s&t.a)!==0?d:null
u.r=(s&$.aR().a)!==0?e:null
u.x=(s&$.aQ().a)!==0?b:null
u.y=(s&$.aT().a)!==0?f:null
u.z=(s&$.bH().a)!==0?g:null
u.Q=(s&$.kM().a)!==0?c:null
u.ch=(s&$.aU().a)!==0?i:0
u.cx=(s&$.bG().a)!==0?a:null
return u},
ik:function ik(){},
il:function il(a){this.a=a},
Y:function Y(){var _=this
_.e=_.d=_.c=_.b=_.a=null},
aM:function aM(){this.b=this.a=null},
bp:function bp(){},
dd:function dd(){var _=this
_.e=_.d=_.c=_.b=_.a=null},
fi:function fi(a){this.a=a
this.b=null},
fj:function fj(a){this.a=a
this.b=null},
fk:function fk(a){this.a=a
this.b=null},
aG:function aG(){var _=this
_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
hg:function hg(a){this.a=a},
hf:function hf(a){this.a=a},
h9:function h9(a){this.a=a
this.c=this.b=null},
ha:function ha(a){var _=this
_.a=a
_.d=_.c=_.b=null},
hb:function hb(a,b){this.a=a
this.b=b},
hc:function hc(a,b){this.a=a
this.b=b},
hd:function hd(a){this.a=a
this.c=this.b=null},
he:function he(a){this.a=a
this.b=null}},T={fw:function fw(){},dk:function dk(){},fA:function fA(){var _=this
_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},fB:function fB(a){var _=this
_.a=a
_.e=_.d=_.c=_.b=null},fC:function fC(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},
kt:function(){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0
u=V.lH("Test 008",!0)
t=W.iM(null,null)
t.className="pageLargeCanvas"
t.id="testCanvas"
C.f.u(u.a,t)
s=[P.e]
u.cT(H.a(["A custom shader for testing and fixing the normal distortion ","equation used for bump maps. This displays the normal vectors ","across a surface."],s))
u.h6(H.a(["bumpMaps","scalars"],s))
u.cT(H.a(["\xab[Back to Tests|../]"],s))
s=document
r=C.n.bg(s,"testCanvas")
if(r==null)H.P(P.a4("Failed to find an element with the identifier, testCanvas."))
q=E.lJ(r,!0,!0,!0,!1)
p=F.mC(50,null,50)
o=p.e
if(o!=null)++o.d
p.d.bO()
p.a.bO()
o=p.e
if(o!=null)o.aV()
o=p.e
if(o!=null)++o.d
p.d.bM()
p.a.bM()
o=p.e
if(o!=null)o.aV()
p.d.ic()
for(n=p.a.c.length-1;n>=0;--n){o=p.a.c
if(n>=o.length)return H.h(o,n)
m=o[n]
if(m.ch!==0){m.ch=0
o=m.a
if(o!=null){o=o.e
if(o!=null)o.G(null)}}l=m.hj()
if(l.ch!==1){l.ch=1
o=l.a
if(o!=null){o=o.e
if(o!=null)o.G(null)}}p.a.h(0,l)
o=p.c.a
o.a.h(0,m)
o.a.h(0,l)
o=new F.aM()
k=m.a
if(k==null)H.P(P.a4("May not create a line with a start vertex which is not attached to a shape."))
if(k!=l.a)H.P(P.a4("May not create a line with vertices attached to different shapes."))
o.a=m
C.a.h(m.c.b,o)
o.b=l
C.a.h(l.c.c,o)
C.a.h(o.a.a.c.b,o)
o=o.a.a.e
if(o!=null)o.G(null)}j=new T.cC()
j.c=1
j.sa3(0.5)
i=E.jw(null,!0,null,"",null,null)
i.sca(0,p)
i.sdA(j)
h=E.jw(null,!0,null,"",null,null)
h.y.h(0,i)
o=new U.bS()
o.cd(U.a1)
o.bj(o.geU(),o.gfp())
o.e=null
o.f=V.eU()
o.r=0
k=q.r
g=new U.dx()
f=U.iN()
f.sc7(0,!0)
f.sbY(6.283185307179586)
f.sc_(0)
f.sa1(0,0)
f.sbZ(100)
f.sR(0)
f.sbS(0.5)
g.b=f
e=g.gas()
f.gv().h(0,e)
f=U.iN()
f.sc7(0,!0)
f.sbY(6.283185307179586)
f.sc_(0)
f.sa1(0,0)
f.sbZ(100)
f.sR(0)
f.sbS(0.5)
g.c=f
f.gv().h(0,e)
g.d=null
g.e=!1
g.f=!1
g.r=!1
g.x=2.5
g.y=2.5
g.z=2
g.Q=4
g.cx=!1
g.ch=!1
g.cy=0
g.db=0
g.dx=null
g.dy=0
g.fr=null
g.fx=null
d=new X.ai(!1,!1,!1)
c=g.d
g.d=d
f=[X.ai]
e=new D.H("modifiers",c,d,g,f)
e.b=!0
g.L(e)
e=g.f
if(e!==!1){g.f=!1
e=new D.H("invertX",e,!1,g,[P.G])
e.b=!0
g.L(e)}e=g.r
if(e!==!0){g.r=!0
e=new D.H("invertY",e,!0,g,[P.G])
e.b=!0
g.L(e)}g.aM(k)
o.h(0,g)
k=q.r
g=new U.dw()
e=U.iN()
e.sc7(0,!0)
e.sbY(6.283185307179586)
e.sc_(0)
e.sa1(0,0)
e.sbZ(100)
e.sR(0)
e.sbS(0.2)
g.b=e
e.gv().h(0,g.gas())
g.c=null
g.d=!1
g.e=2.5
g.f=2
g.r=4
g.y=!1
g.x=!1
g.z=0
g.Q=null
g.ch=0
g.cx=null
g.cy=null
d=new X.ai(!0,!1,!1)
c=g.c
g.c=d
e=new D.H("modifiers",c,d,g,f)
e.b=!0
g.L(e)
g.aM(k)
o.h(0,g)
k=q.r
g=new U.dy()
g.c=0.01
g.d=0
g.e=0
d=new X.ai(!1,!1,!1)
g.b=d
f=new D.H("modifiers",null,d,g,f)
f.b=!0
g.L(f)
g.aM(k)
o.h(0,g)
h.saR(o)
o=new M.cJ()
o.ser(0,O.js(E.a9))
o.d.bj(o.geY(),o.gf_())
o.e=null
o.f=null
o.r=null
o.x=null
b=X.lf(!0,!0,!1,null,2000,null,0)
a=new X.d7()
a.c=1.0471975511965976
a.d=0.1
a.e=2000
a.saR(null)
k=a.c
if(!(Math.abs(k-1.0471975511965976)<$.K().a)){a.c=1.0471975511965976
k=new D.H("fov",k,1.0471975511965976,a,[P.w])
k.b=!0
a.aq(k)}k=a.d
if(!(Math.abs(k-0.1)<$.K().a)){a.d=0.1
k=new D.H("near",k,0.1,a,[P.w])
k.b=!0
a.aq(k)}k=a.e
if(!(Math.abs(k-2000)<$.K().a)){a.e=2000
k=new D.H("far",k,2000,a,[P.w])
k.b=!0
a.aq(k)}k=o.a
if(k!==a){if(k!=null)k.gv().S(0,o.gao())
c=o.a
o.a=a
a.gv().h(0,o.gao())
k=new D.H("camera",c,o.a,o,[X.cE])
k.b=!0
o.ap(k)}k=o.b
if(k!==b){if(k!=null)k.gv().S(0,o.gao())
c=o.b
o.b=b
b.gv().h(0,o.gao())
k=new D.H("target",c,o.b,o,[X.di])
k.b=!0
o.ap(k)}o.d.h(0,h)
k=o.a
a0=V.aN(1,0,0,0,0,1,0,0,0,0,1,5,0,0,0,1)
g=new U.cF()
g.a=a0
k.saR(g)
k=q.d
if(k!==o){if(k!=null)k.gv().S(0,q.gce())
q.d=o
o.gv().h(0,q.gce())
q.cf()}o=new V.fx("bumpMaps",!0,new T.is(j,q))
k=C.n.bg(s,"bumpMaps")
o.c=k
if(k==null)H.P("Failed to find bumpMaps for Texture2DGroup")
o.Z(0,"../resources/BumpMap1.png",!0)
o.h(0,"../resources/BumpMap2.png")
o.h(0,"../resources/BumpMap3.png")
o.h(0,"../resources/BumpMap4.png")
o.h(0,"../resources/BumpMap5.png")
o.h(0,"../resources/ScrewBumpMap.png")
o.h(0,"../resources/CtrlPnlBumpMap.png")
o=new V.f6("scalars",!0)
s=C.n.bg(s,"scalars")
o.c=s
if(s==null)H.P("Failed to find scalars for RadioGroup")
o.Z(0,"0.1",new T.it(j))
o.Z(0,"0.2",new T.iu(j))
o.Z(0,"0.3",new T.iw(j))
o.Z(0,"0.4",new T.ix(j))
o.cR(0,"0.5",new T.iy(j),!0)
o.Z(0,"0.6",new T.iz(j))
o.Z(0,"0.7",new T.iA(j))
o.Z(0,"0.8",new T.iB(j))
o.Z(0,"0.9",new T.iC(j))
o.Z(0,"1.0",new T.iD(j))
s=q.z
if(s==null){s=D.L()
q.z=s}o={func:1,ret:-1,args:[D.v]}
k=H.i(new T.iv(u,j),o)
if(s.b==null)s.sb_(H.a([],[o]))
s=s.b;(s&&C.a).h(s,k)
V.mR(q)},
e7:function e7(a,b){var _=this
_.fx=_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=null
_.a=a
_.b=b
_.y=_.x=_.r=_.f=_.e=_.d=_.c=null},
cC:function cC(){var _=this
_.d=_.c=_.b=_.a=null},
is:function is(a,b){this.a=a
this.b=b},
it:function it(a){this.a=a},
iu:function iu(a){this.a=a},
iw:function iw(a){this.a=a},
ix:function ix(a){this.a=a},
iy:function iy(a){this.a=a},
iz:function iz(a){this.a=a},
iA:function iA(a){this.a=a},
iB:function iB(a){this.a=a},
iC:function iC(a){this.a=a},
iD:function iD(a){this.a=a},
iv:function iv(a,b){this.a=a
this.b=b}}
var w=[C,H,J,P,W,O,E,Z,D,X,V,U,M,A,F,T]
hunkHelpers.setFunctionNamesIfNecessary(w)
var $={}
H.iS.prototype={}
J.a0.prototype={
t:function(a,b){return a===b},
gE:function(a){return H.c_(a)},
i:function(a){return"Instance of '"+H.br(a)+"'"}}
J.eE.prototype={
i:function(a){return String(a)},
gE:function(a){return a?519018:218159},
$iG:1}
J.cT.prototype={
t:function(a,b){return null==b},
i:function(a){return"null"},
gE:function(a){return 0},
$iy:1}
J.cV.prototype={
gE:function(a){return 0},
i:function(a){return String(a)}}
J.f3.prototype={}
J.c8.prototype={}
J.b1.prototype={
i:function(a){var u=a[$.kz()]
if(u==null)return this.e3(a)
return"JavaScript function for "+H.f(J.ae(u))},
$S:function(){return{func:1,opt:[,,,,,,,,,,,,,,,,]}},
$ib0:1}
J.aB.prototype={
h:function(a,b){H.u(b,H.p(a,0))
if(!!a.fixed$length)H.P(P.S("add"))
a.push(b)},
S:function(a,b){var u
if(!!a.fixed$length)H.P(P.S("remove"))
for(u=0;u<a.length;++u)if(J.U(a[u],b)){a.splice(u,1)
return!0}return!1},
N:function(a,b){var u,t
H.i(b,{func:1,ret:-1,args:[H.p(a,0)]})
u=a.length
for(t=0;t<u;++t){b.$1(a[t])
if(a.length!==u)throw H.c(P.az(a))}},
k:function(a,b){var u,t
u=new Array(a.length)
u.fixed$length=Array
for(t=0;t<a.length;++t)this.m(u,t,H.f(a[t]))
return u.join(b)},
hO:function(a){return this.k(a,"")},
hG:function(a,b,c,d){var u,t,s
H.u(b,d)
H.i(c,{func:1,ret:d,args:[d,H.p(a,0)]})
u=a.length
for(t=b,s=0;s<u;++s){t=c.$2(t,a[s])
if(a.length!==u)throw H.c(P.az(a))}return t},
hF:function(a,b,c){var u,t,s
H.i(b,{func:1,ret:P.G,args:[H.p(a,0)]})
u=a.length
for(t=0;t<u;++t){s=a[t]
if(b.$1(s))return s
if(a.length!==u)throw H.c(P.az(a))}throw H.c(H.iQ())},
hE:function(a,b){return this.hF(a,b,null)},
a_:function(a,b){if(b<0||b>=a.length)return H.h(a,b)
return a[b]},
e0:function(a,b,c){if(b<0||b>a.length)throw H.c(P.Z(b,0,a.length,"start",null))
if(c<b||c>a.length)throw H.c(P.Z(c,b,a.length,"end",null))
if(b===c)return H.a([],[H.p(a,0)])
return H.a(a.slice(b,c),[H.p(a,0)])},
gaf:function(a){var u=a.length
if(u>0)return a[u-1]
throw H.c(H.iQ())},
cU:function(a,b){var u,t
H.i(b,{func:1,ret:P.G,args:[H.p(a,0)]})
u=a.length
for(t=0;t<u;++t){if(b.$1(a[t]))return!0
if(a.length!==u)throw H.c(P.az(a))}return!1},
V:function(a,b){var u
for(u=0;u<a.length;++u)if(J.U(a[u],b))return!0
return!1},
i:function(a){return P.iP(a,"[","]")},
gP:function(a){return new J.af(a,a.length,0,[H.p(a,0)])},
gE:function(a){return H.c_(a)},
gl:function(a){return a.length},
sl:function(a,b){if(!!a.fixed$length)H.P(P.S("set length"))
if(b<0)throw H.c(P.Z(b,0,null,"newLength",null))
a.length=b},
n:function(a,b){if(b>=a.length||b<0)throw H.c(H.bC(a,b))
return a[b]},
m:function(a,b,c){H.u(c,H.p(a,0))
if(!!a.immutable$list)H.P(P.S("indexed set"))
if(b>=a.length||b<0)throw H.c(H.bC(a,b))
a[b]=c},
$io:1,
$ib:1}
J.iR.prototype={}
J.af.prototype={
gF:function(){return this.d},
w:function(){var u,t,s
u=this.a
t=u.length
if(this.b!==t)throw H.c(H.D(u))
s=this.c
if(s>=t){this.scj(null)
return!1}this.scj(u[s]);++this.c
return!0},
scj:function(a){this.d=H.u(a,H.p(this,0))},
$iaA:1}
J.cU.prototype={
ir:function(a){var u
if(a>=-2147483648&&a<=2147483647)return a|0
if(isFinite(a)){u=a<0?Math.ceil(a):Math.floor(a)
return u+0}throw H.c(P.S(""+a+".toInt()"))},
bT:function(a){var u,t
if(a>=0){if(a<=2147483647)return a|0}else if(a>=-2147483648){u=a|0
return a===u?u:u-1}t=Math.floor(a)
if(isFinite(t))return t
throw H.c(P.S(""+a+".floor()"))},
a9:function(a){if(a>0){if(a!==1/0)return Math.round(a)}else if(a>-1/0)return 0-Math.round(0-a)
throw H.c(P.S(""+a+".round()"))},
dC:function(a,b){var u,t
if(b>20)throw H.c(P.Z(b,0,20,"fractionDigits",null))
u=a.toFixed(b)
if(a===0)t=1/a<0
else t=!1
if(t)return"-"+u
return u},
aW:function(a,b){var u,t,s,r
if(b<2||b>36)throw H.c(P.Z(b,2,36,"radix",null))
u=a.toString(b)
if(C.b.U(u,u.length-1)!==41)return u
t=/^([\da-z]+)(?:\.([\da-z]+))?\(e\+(\d+)\)$/.exec(u)
if(t==null)H.P(P.S("Unexpected toString result: "+u))
s=t.length
if(1>=s)return H.h(t,1)
u=t[1]
if(3>=s)return H.h(t,3)
r=+t[3]
s=t[2]
if(s!=null){u+=s
r-=s.length}return u+C.b.q("0",r)},
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
aX:function(a,b){var u=a%b
if(u===0)return 0
if(u>0)return u
if(b<0)return u-b
else return u+b},
e6:function(a,b){if((a|0)===a)if(b>=1||b<-1)return a/b|0
return this.cM(a,b)},
av:function(a,b){return(a|0)===a?a/b|0:this.cM(a,b)},
cM:function(a,b){var u=a/b
if(u>=-2147483648&&u<=2147483647)return u|0
if(u>0){if(u!==1/0)return Math.floor(u)}else if(u>-1/0)return Math.ceil(u)
throw H.c(P.S("Result of truncating division is "+H.f(u)+": "+H.f(a)+" ~/ "+b))},
au:function(a,b){var u
if(a>0)u=this.cL(a,b)
else{u=b>31?31:b
u=a>>u>>>0}return u},
fR:function(a,b){if(b<0)throw H.c(H.aq(b))
return this.cL(a,b)},
cL:function(a,b){return b>31?0:a>>>b},
$iw:1,
$ia6:1}
J.cS.prototype={$ik:1}
J.cR.prototype={}
J.bl.prototype={
U:function(a,b){if(b<0)throw H.c(H.bC(a,b))
if(b>=a.length)H.P(H.bC(a,b))
return a.charCodeAt(b)},
C:function(a,b){if(b>=a.length)throw H.c(H.bC(a,b))
return a.charCodeAt(b)},
H:function(a,b){if(typeof b!=="string")throw H.c(P.iK(b,null,null))
return a+b},
aB:function(a,b,c,d){var u,t
if(typeof b!=="number"||Math.floor(b)!==b)H.P(H.aq(b))
c=P.b5(b,c,a.length,null,null,null)
u=a.substring(0,b)
t=a.substring(c)
return u+d+t},
a5:function(a,b,c){var u
if(typeof c!=="number"||Math.floor(c)!==c)H.P(H.aq(c))
if(typeof c!=="number")return c.T()
if(c<0||c>a.length)throw H.c(P.Z(c,0,a.length,null,null))
u=c+b.length
if(u>a.length)return!1
return b===a.substring(c,u)},
W:function(a,b){return this.a5(a,b,0)},
p:function(a,b,c){if(typeof b!=="number"||Math.floor(b)!==b)H.P(H.aq(b))
if(c==null)c=a.length
if(typeof b!=="number")return b.T()
if(b<0)throw H.c(P.f8(b,null,null))
if(b>c)throw H.c(P.f8(b,null,null))
if(c>a.length)throw H.c(P.f8(c,null,null))
return a.substring(b,c)},
ag:function(a,b){return this.p(a,b,null)},
iu:function(a){return a.toLowerCase()},
q:function(a,b){var u,t
if(0>=b)return""
if(b===1||a.length===0)return a
if(b!==b>>>0)throw H.c(C.O)
for(u=a,t="";!0;){if((b&1)===1)t=u+t
b=b>>>1
if(b===0)break
u+=u}return t},
i2:function(a,b,c){var u=b-a.length
if(u<=0)return a
return this.q(c,u)+a},
a8:function(a,b){return this.i2(a,b," ")},
dd:function(a,b,c){var u
if(c<0||c>a.length)throw H.c(P.Z(c,0,a.length,null,null))
u=a.indexOf(b,c)
return u},
dc:function(a,b){return this.dd(a,b,0)},
i:function(a){return a},
gE:function(a){var u,t,s
for(u=a.length,t=0,s=0;s<u;++s){t=536870911&t+a.charCodeAt(s)
t=536870911&t+((524287&t)<<10)
t^=t>>6}t=536870911&t+((67108863&t)<<3)
t^=t>>11
return 536870911&t+((16383&t)<<15)},
gl:function(a){return a.length},
$ijH:1,
$ie:1}
H.n.prototype={
gl:function(a){return this.a.length},
n:function(a,b){return C.b.U(this.a,b)},
$ac9:function(){return[P.k]},
$aJ:function(){return[P.k]},
$ao:function(){return[P.k]},
$ab:function(){return[P.k]}}
H.ek.prototype={}
H.bm.prototype={
gP:function(a){return new H.bU(this,this.gl(this),0,[H.a2(this,"bm",0)])},
bc:function(a,b){return this.e2(0,H.i(b,{func:1,ret:P.G,args:[H.a2(this,"bm",0)]}))}}
H.bU.prototype={
gF:function(){return this.d},
w:function(){var u,t,s,r
u=this.a
t=J.co(u)
s=t.gl(u)
if(this.b!==s)throw H.c(P.az(u))
r=this.c
if(r>=s){this.saG(null)
return!1}this.saG(t.a_(u,r));++this.c
return!0},
saG:function(a){this.d=H.u(a,H.p(this,0))},
$iaA:1}
H.eR.prototype={
gP:function(a){return new H.eS(J.ba(this.a),this.b,this.$ti)},
gl:function(a){return J.ar(this.a)},
a_:function(a,b){return this.b.$1(J.e0(this.a,b))},
$ao:function(a,b){return[b]}}
H.eS.prototype={
w:function(){var u=this.b
if(u.w()){this.saG(this.c.$1(u.gF()))
return!0}this.saG(null)
return!1},
gF:function(){return this.a},
saG:function(a){this.a=H.u(a,H.p(this,1))},
$aaA:function(a,b){return[b]}}
H.eT.prototype={
gl:function(a){return J.ar(this.a)},
a_:function(a,b){return this.b.$1(J.e0(this.a,b))},
$abm:function(a,b){return[b]},
$ao:function(a,b){return[b]}}
H.cb.prototype={
gP:function(a){return new H.hj(J.ba(this.a),this.b,this.$ti)}}
H.hj.prototype={
w:function(){var u,t
for(u=this.a,t=this.b;u.w();)if(t.$1(u.gF()))return!0
return!1},
gF:function(){return this.a.gF()}}
H.bg.prototype={}
H.c9.prototype={
m:function(a,b,c){H.u(c,H.a2(this,"c9",0))
throw H.c(P.S("Cannot modify an unmodifiable list"))}}
H.dt.prototype={}
H.ec.prototype={
i:function(a){return P.iU(this)},
m:function(a,b,c){H.u(b,H.p(this,0))
H.u(c,H.p(this,1))
return H.l9()},
$iB:1}
H.ed.prototype={
gl:function(a){return this.a},
b3:function(a){if("__proto__"===a)return!1
return this.b.hasOwnProperty(a)},
n:function(a,b){if(!this.b3(b))return
return this.cw(b)},
cw:function(a){return this.b[H.z(a)]},
N:function(a,b){var u,t,s,r,q
u=H.p(this,1)
H.i(b,{func:1,ret:-1,args:[H.p(this,0),u]})
t=this.c
for(s=t.length,r=0;r<s;++r){q=t[r]
b.$2(q,H.u(this.cw(q),u))}}}
H.fa.prototype={}
H.fI.prototype={
a7:function(a){var u,t,s
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
H.f1.prototype={
i:function(a){var u=this.b
if(u==null)return"NoSuchMethodError: "+H.f(this.a)
return"NoSuchMethodError: method not found: '"+u+"' on null"}}
H.eG.prototype={
i:function(a){var u,t
u=this.b
if(u==null)return"NoSuchMethodError: "+H.f(this.a)
t=this.c
if(t==null)return"NoSuchMethodError: method not found: '"+u+"' ("+H.f(this.a)+")"
return"NoSuchMethodError: method not found: '"+u+"' on '"+t+"' ("+H.f(this.a)+")"}}
H.fZ.prototype={
i:function(a){var u=this.a
return u.length===0?"Error":"Error: "+u}}
H.iH.prototype={
$1:function(a){if(!!J.E(a).$ib_)if(a.$thrownJsError==null)a.$thrownJsError=this.a
return a},
$S:16}
H.dN.prototype={
i:function(a){var u,t
u=this.b
if(u!=null)return u
u=this.a
t=u!==null&&typeof u==="object"?u.stack:null
u=t==null?"":t
this.b=u
return u},
$iac:1}
H.bM.prototype={
i:function(a){return"Closure '"+H.br(this).trim()+"'"},
$ib0:1,
giA:function(){return this},
$C:"$1",
$R:1,
$D:null}
H.fv.prototype={}
H.fp.prototype={
i:function(a){var u=this.$static_name
if(u==null)return"Closure of unknown static method"
return"Closure '"+H.bF(u)+"'"}}
H.bK.prototype={
t:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof H.bK))return!1
return this.a===b.a&&this.b===b.b&&this.c===b.c},
gE:function(a){var u,t
u=this.c
if(u==null)t=H.c_(this.a)
else t=typeof u!=="object"?J.cv(u):H.c_(u)
return(t^H.c_(this.b))>>>0},
i:function(a){var u=this.c
if(u==null)u=this.a
return"Closure '"+H.f(this.d)+"' of "+("Instance of '"+H.br(u)+"'")}}
H.fK.prototype={
i:function(a){return this.a}}
H.e8.prototype={
i:function(a){return this.a}}
H.ff.prototype={
i:function(a){return"RuntimeError: "+H.f(this.a)}}
H.au.prototype={
gl:function(a){return this.a},
ghN:function(a){return this.a===0},
gae:function(){return new H.eJ(this,[H.p(this,0)])},
b3:function(a){var u,t
if(typeof a==="string"){u=this.b
if(u==null)return!1
return this.ct(u,a)}else if(typeof a==="number"&&(a&0x3ffffff)===a){t=this.c
if(t==null)return!1
return this.ct(t,a)}else return this.hK(a)},
hK:function(a){var u=this.d
if(u==null)return!1
return this.bW(this.bs(u,this.bV(a)),a)>=0},
n:function(a,b){var u,t,s,r
if(typeof b==="string"){u=this.b
if(u==null)return
t=this.aZ(u,b)
s=t==null?null:t.b
return s}else if(typeof b==="number"&&(b&0x3ffffff)===b){r=this.c
if(r==null)return
t=this.aZ(r,b)
s=t==null?null:t.b
return s}else return this.hL(b)},
hL:function(a){var u,t,s
u=this.d
if(u==null)return
t=this.bs(u,this.bV(a))
s=this.bW(t,a)
if(s<0)return
return t[s].b},
m:function(a,b,c){var u,t
H.u(b,H.p(this,0))
H.u(c,H.p(this,1))
if(typeof b==="string"){u=this.b
if(u==null){u=this.bC()
this.b=u}this.ck(u,b,c)}else if(typeof b==="number"&&(b&0x3ffffff)===b){t=this.c
if(t==null){t=this.bC()
this.c=t}this.ck(t,b,c)}else this.hM(b,c)},
hM:function(a,b){var u,t,s,r
H.u(a,H.p(this,0))
H.u(b,H.p(this,1))
u=this.d
if(u==null){u=this.bC()
this.d=u}t=this.bV(a)
s=this.bs(u,t)
if(s==null)this.bH(u,t,[this.bm(a,b)])
else{r=this.bW(s,a)
if(r>=0)s[r].b=b
else s.push(this.bm(a,b))}},
N:function(a,b){var u,t
H.i(b,{func:1,ret:-1,args:[H.p(this,0),H.p(this,1)]})
u=this.e
t=this.r
for(;u!=null;){b.$2(u.a,u.b)
if(t!==this.r)throw H.c(P.az(this))
u=u.c}},
ck:function(a,b,c){var u
H.u(b,H.p(this,0))
H.u(c,H.p(this,1))
u=this.aZ(a,b)
if(u==null)this.bH(a,b,this.bm(b,c))
else u.b=c},
ek:function(){this.r=this.r+1&67108863},
bm:function(a,b){var u,t
u=new H.eI(H.u(a,H.p(this,0)),H.u(b,H.p(this,1)))
if(this.e==null){this.f=u
this.e=u}else{t=this.f
u.d=t
t.c=u
this.f=u}++this.a
this.ek()
return u},
bV:function(a){return J.cv(a)&0x3ffffff},
bW:function(a,b){var u,t
if(a==null)return-1
u=a.length
for(t=0;t<u;++t)if(J.U(a[t].a,b))return t
return-1},
i:function(a){return P.iU(this)},
aZ:function(a,b){return a[b]},
bs:function(a,b){return a[b]},
bH:function(a,b,c){a[b]=c},
ex:function(a,b){delete a[b]},
ct:function(a,b){return this.aZ(a,b)!=null},
bC:function(){var u=Object.create(null)
this.bH(u,"<non-identifier-key>",u)
this.ex(u,"<non-identifier-key>")
return u},
$ijz:1}
H.eI.prototype={}
H.eJ.prototype={
gl:function(a){return this.a.a},
gP:function(a){var u,t
u=this.a
t=new H.eK(u,u.r,this.$ti)
t.c=u.e
return t}}
H.eK.prototype={
gF:function(){return this.d},
w:function(){var u=this.a
if(this.b!==u.r)throw H.c(P.az(u))
else{u=this.c
if(u==null){this.scl(null)
return!1}else{this.scl(u.a)
this.c=this.c.c
return!0}}},
scl:function(a){this.d=H.u(a,H.p(this,0))},
$iaA:1}
H.io.prototype={
$1:function(a){return this.a(a)},
$S:16}
H.ip.prototype={
$2:function(a,b){return this.a(a,b)},
$S:28}
H.iq.prototype={
$1:function(a){return this.a(H.z(a))},
$S:29}
H.eF.prototype={
i:function(a){return"RegExp/"+this.a+"/"},
$ijH:1,
$ilD:1}
H.bo.prototype={$ibo:1,$ilL:1}
H.d1.prototype={
gl:function(a){return a.length},
$iat:1,
$aat:function(){}}
H.d2.prototype={
n:function(a,b){H.aP(b,a,a.length)
return a[b]},
m:function(a,b,c){H.my(c)
H.aP(b,a,a.length)
a[b]=c},
$abg:function(){return[P.w]},
$aJ:function(){return[P.w]},
$io:1,
$ao:function(){return[P.w]},
$ib:1,
$ab:function(){return[P.w]}}
H.d3.prototype={
m:function(a,b,c){H.T(c)
H.aP(b,a,a.length)
a[b]=c},
$abg:function(){return[P.k]},
$aJ:function(){return[P.k]},
$io:1,
$ao:function(){return[P.k]},
$ib:1,
$ab:function(){return[P.k]}}
H.eW.prototype={
n:function(a,b){H.aP(b,a,a.length)
return a[b]}}
H.eX.prototype={
n:function(a,b){H.aP(b,a,a.length)
return a[b]}}
H.eY.prototype={
n:function(a,b){H.aP(b,a,a.length)
return a[b]}}
H.eZ.prototype={
n:function(a,b){H.aP(b,a,a.length)
return a[b]}}
H.d4.prototype={
gl:function(a){return a.length},
n:function(a,b){H.aP(b,a,a.length)
return a[b]},
$ing:1}
H.bY.prototype={
gl:function(a){return a.length},
n:function(a,b){H.aP(b,a,a.length)
return a[b]},
$ibY:1,
$iC:1}
H.cf.prototype={}
H.cg.prototype={}
H.ch.prototype={}
H.ci.prototype={}
P.hl.prototype={
$1:function(a){var u,t
u=this.a
t=u.a
u.a=null
t.$0()},
$S:21}
P.hk.prototype={
$1:function(a){var u,t
this.a.a=H.i(a,{func:1,ret:-1})
u=this.b
t=this.c
u.firstChild?u.removeChild(t):u.appendChild(t)},
$S:43}
P.hm.prototype={
$0:function(){this.a.$0()},
$S:0}
P.hn.prototype={
$0:function(){this.a.$0()},
$S:0}
P.dP.prototype={
eh:function(a,b){if(self.setTimeout!=null)this.b=self.setTimeout(H.bB(new P.hX(this,b),0),a)
else throw H.c(P.S("`setTimeout()` not found."))},
ei:function(a,b){if(self.setTimeout!=null)this.b=self.setInterval(H.bB(new P.hW(this,a,Date.now(),b),0),a)
else throw H.c(P.S("Periodic timer."))},
$iaE:1}
P.hX.prototype={
$0:function(){var u=this.a
u.b=null
u.c=1
this.b.$0()},
$S:3}
P.hW.prototype={
$0:function(){var u,t,s,r
u=this.a
t=u.c+1
s=this.b
if(s>0){r=Date.now()-this.c
if(r>(t+1)*s)t=C.d.e6(r,s)}u.c=t
this.d.$1(u)},
$S:0}
P.aI.prototype={
hT:function(a){if(this.c!==6)return!0
return this.b.b.c5(H.i(this.d,{func:1,ret:P.G,args:[P.F]}),a.a,P.G,P.F)},
hJ:function(a){var u,t,s,r
u=this.e
t=P.F
s={futureOr:1,type:H.p(this,1)}
r=this.b.b
if(H.dY(u,{func:1,args:[P.F,P.ac]}))return H.ja(r.ij(u,a.a,a.b,null,t,P.ac),s)
else return H.ja(r.c5(H.i(u,{func:1,args:[P.F]}),a.a,null,t),s)}}
P.ao.prototype={
dB:function(a,b,c){var u,t,s,r
u=H.p(this,0)
H.i(a,{func:1,ret:{futureOr:1,type:c},args:[u]})
t=$.N
if(t!==C.h){t.toString
H.i(a,{func:1,ret:{futureOr:1,type:c},args:[u]})
if(b!=null)b=P.ml(b,t)}H.i(a,{func:1,ret:{futureOr:1,type:c},args:[u]})
s=new P.ao(0,$.N,[c])
r=b==null?1:3
this.cn(new P.aI(s,r,a,b,[u,c]))
return s},
iq:function(a,b){return this.dB(a,null,b)},
cn:function(a){var u,t
u=this.a
if(u<=1){a.a=H.d(this.c,"$iaI")
this.c=a}else{if(u===2){t=H.d(this.c,"$iao")
u=t.a
if(u<4){t.cn(a)
return}this.a=u
this.c=t.c}u=this.b
u.toString
P.ie(null,null,u,H.i(new P.hv(this,a),{func:1,ret:-1}))}},
cI:function(a){var u,t,s,r,q,p
u={}
u.a=a
if(a==null)return
t=this.a
if(t<=1){s=H.d(this.c,"$iaI")
this.c=a
if(s!=null){for(r=a;q=r.a,q!=null;r=q);r.a=s}}else{if(t===2){p=H.d(this.c,"$iao")
t=p.a
if(t<4){p.cI(a)
return}this.a=t
this.c=p.c}u.a=this.b0(a)
t=this.b
t.toString
P.ie(null,null,t,H.i(new P.hz(u,this),{func:1,ret:-1}))}},
bG:function(){var u=H.d(this.c,"$iaI")
this.c=null
return this.b0(u)},
b0:function(a){var u,t,s
for(u=a,t=null;u!=null;t=u,u=s){s=u.a
u.a=t}return t},
cq:function(a){var u,t,s
u=H.p(this,0)
H.ja(a,{futureOr:1,type:u})
t=this.$ti
if(H.cn(a,"$ibR",t,"$abR"))if(H.cn(a,"$iao",t,null))P.k3(a,this)
else P.lX(a,this)
else{s=this.bG()
H.u(a,u)
this.a=4
this.c=a
P.ce(this,s)}},
cr:function(a,b){var u
H.d(b,"$iac")
u=this.bG()
this.a=8
this.c=new P.a7(a,b)
P.ce(this,u)},
$ibR:1}
P.hv.prototype={
$0:function(){P.ce(this.a,this.b)},
$S:0}
P.hz.prototype={
$0:function(){P.ce(this.b,this.a.a)},
$S:0}
P.hw.prototype={
$1:function(a){var u=this.a
u.a=0
u.cq(a)},
$S:21}
P.hx.prototype={
$2:function(a,b){H.d(b,"$iac")
this.a.cr(a,b)},
$1:function(a){return this.$2(a,null)},
$S:30}
P.hy.prototype={
$0:function(){this.a.cr(this.b,this.c)},
$S:0}
P.hC.prototype={
$0:function(){var u,t,s,r,q,p,o
u=null
try{r=this.c
u=r.b.b.dz(H.i(r.d,{func:1}),null)}catch(q){t=H.a3(q)
s=H.bD(q)
if(this.d){r=H.d(this.a.a.c,"$ia7").a
p=t
p=r==null?p==null:r===p
r=p}else r=!1
p=this.b
if(r)p.b=H.d(this.a.a.c,"$ia7")
else p.b=new P.a7(t,s)
p.a=!0
return}if(!!J.E(u).$ibR){if(u instanceof P.ao&&u.a>=4){if(u.a===8){r=this.b
r.b=H.d(u.c,"$ia7")
r.a=!0}return}o=this.a.a
r=this.b
r.b=u.iq(new P.hD(o),null)
r.a=!1}},
$S:3}
P.hD.prototype={
$1:function(a){return this.a},
$S:50}
P.hB.prototype={
$0:function(){var u,t,s,r,q,p,o
try{s=this.b
r=H.p(s,0)
q=H.u(this.c,r)
p=H.p(s,1)
this.a.b=s.b.b.c5(H.i(s.d,{func:1,ret:{futureOr:1,type:p},args:[r]}),q,{futureOr:1,type:p},r)}catch(o){u=H.a3(o)
t=H.bD(o)
s=this.a
s.b=new P.a7(u,t)
s.a=!0}},
$S:3}
P.hA.prototype={
$0:function(){var u,t,s,r,q,p,o,n
try{u=H.d(this.a.a.c,"$ia7")
r=this.c
if(r.hT(u)&&r.e!=null){q=this.b
q.b=r.hJ(u)
q.a=!1}}catch(p){t=H.a3(p)
s=H.bD(p)
r=H.d(this.a.a.c,"$ia7")
q=r.a
o=t
n=this.b
if(q==null?o==null:q===o)n.b=r
else n.b=new P.a7(t,s)
n.a=!0}},
$S:3}
P.dB.prototype={}
P.fq.prototype={
gl:function(a){var u,t,s,r
u={}
t=new P.ao(0,$.N,[P.k])
u.a=0
s=H.p(this,0)
r=H.i(new P.fs(u,this),{func:1,ret:-1,args:[s]})
H.i(new P.ft(u,t),{func:1,ret:-1})
W.V(this.a,this.b,r,!1,s)
return t}}
P.fs.prototype={
$1:function(a){H.u(a,H.p(this.b,0));++this.a.a},
$S:function(){return{func:1,ret:P.y,args:[H.p(this.b,0)]}}}
P.ft.prototype={
$0:function(){this.b.cq(this.a.a)},
$S:0}
P.c4.prototype={}
P.fr.prototype={}
P.aE.prototype={}
P.a7.prototype={
i:function(a){return H.f(this.a)},
$ib_:1}
P.i6.prototype={$inv:1}
P.id.prototype={
$0:function(){var u,t,s
u=this.a
t=u.a
if(t==null){s=new P.d6()
u.a=s
u=s}else u=t
t=this.b
if(t==null)throw H.c(u)
s=H.c(u)
s.stack=t.i(0)
throw s},
$S:0}
P.hI.prototype={
ik:function(a){var u,t,s
H.i(a,{func:1,ret:-1})
try{if(C.h===$.N){a.$0()
return}P.kf(null,null,this,a,-1)}catch(s){u=H.a3(s)
t=H.bD(s)
P.ic(null,null,this,u,H.d(t,"$iac"))}},
il:function(a,b,c){var u,t,s
H.i(a,{func:1,ret:-1,args:[c]})
H.u(b,c)
try{if(C.h===$.N){a.$1(b)
return}P.kg(null,null,this,a,b,-1,c)}catch(s){u=H.a3(s)
t=H.bD(s)
P.ic(null,null,this,u,H.d(t,"$iac"))}},
hc:function(a,b){return new P.hK(this,H.i(a,{func:1,ret:b}),b)},
bK:function(a){return new P.hJ(this,H.i(a,{func:1,ret:-1}))},
cW:function(a,b){return new P.hL(this,H.i(a,{func:1,ret:-1,args:[b]}),b)},
dz:function(a,b){H.i(a,{func:1,ret:b})
if($.N===C.h)return a.$0()
return P.kf(null,null,this,a,b)},
c5:function(a,b,c,d){H.i(a,{func:1,ret:c,args:[d]})
H.u(b,d)
if($.N===C.h)return a.$1(b)
return P.kg(null,null,this,a,b,c,d)},
ij:function(a,b,c,d,e,f){H.i(a,{func:1,ret:d,args:[e,f]})
H.u(b,e)
H.u(c,f)
if($.N===C.h)return a.$2(b,c)
return P.mm(null,null,this,a,b,c,d,e,f)}}
P.hK.prototype={
$0:function(){return this.a.dz(this.b,this.c)},
$S:function(){return{func:1,ret:this.c}}}
P.hJ.prototype={
$0:function(){return this.a.ik(this.b)},
$S:3}
P.hL.prototype={
$1:function(a){var u=this.c
return this.a.il(this.b,H.u(a,u),u)},
$S:function(){return{func:1,ret:-1,args:[this.c]}}}
P.hG.prototype={
gP:function(a){var u=new P.dH(this,this.r,this.$ti)
u.c=this.e
return u},
gl:function(a){return this.a},
V:function(a,b){var u,t
if(typeof b==="string"&&b!=="__proto__"){u=this.b
if(u==null)return!1
return H.d(u[b],"$ibx")!=null}else{t=this.es(b)
return t}},
es:function(a){var u=this.d
if(u==null)return!1
return this.bq(this.cz(u,a),a)>=0},
h:function(a,b){var u,t
H.u(b,H.p(this,0))
if(typeof b==="string"&&b!=="__proto__"){u=this.b
if(u==null){u=P.j0()
this.b=u}return this.cm(u,b)}else if(typeof b==="number"&&(b&1073741823)===b){t=this.c
if(t==null){t=P.j0()
this.c=t}return this.cm(t,b)}else return this.el(b)},
el:function(a){var u,t,s
H.u(a,H.p(this,0))
u=this.d
if(u==null){u=P.j0()
this.d=u}t=this.cs(a)
s=u[t]
if(s==null)u[t]=[this.bD(a)]
else{if(this.bq(s,a)>=0)return!1
s.push(this.bD(a))}return!0},
S:function(a,b){if(typeof b==="number"&&(b&1073741823)===b)return this.fF(this.c,b)
else return this.fC(b)},
fC:function(a){var u,t,s
u=this.d
if(u==null)return!1
t=this.cz(u,a)
s=this.bq(t,a)
if(s<0)return!1
this.cO(t.splice(s,1)[0])
return!0},
cm:function(a,b){H.u(b,H.p(this,0))
if(H.d(a[b],"$ibx")!=null)return!1
a[b]=this.bD(b)
return!0},
fF:function(a,b){var u
if(a==null)return!1
u=H.d(a[b],"$ibx")
if(u==null)return!1
this.cO(u)
delete a[b]
return!0},
cE:function(){this.r=1073741823&this.r+1},
bD:function(a){var u,t
u=new P.bx(H.u(a,H.p(this,0)))
if(this.e==null){this.f=u
this.e=u}else{t=this.f
u.c=t
t.b=u
this.f=u}++this.a
this.cE()
return u},
cO:function(a){var u,t
u=a.c
t=a.b
if(u==null)this.e=t
else u.b=t
if(t==null)this.f=u
else t.c=u;--this.a
this.cE()},
cs:function(a){return J.cv(a)&1073741823},
cz:function(a,b){return a[this.cs(b)]},
bq:function(a,b){var u,t
if(a==null)return-1
u=a.length
for(t=0;t<u;++t)if(J.U(a[t].a,b))return t
return-1}}
P.bx.prototype={}
P.dH.prototype={
gF:function(){return this.d},
w:function(){var u=this.a
if(this.b!==u.r)throw H.c(P.az(u))
else{u=this.c
if(u==null){this.scp(null)
return!1}else{this.scp(H.u(u.a,H.p(this,0)))
this.c=this.c.b
return!0}}},
scp:function(a){this.d=H.u(a,H.p(this,0))},
$iaA:1}
P.eL.prototype={
$2:function(a,b){this.a.m(0,H.u(a,this.b),H.u(b,this.c))},
$S:5}
P.eM.prototype={$io:1,$ib:1}
P.J.prototype={
gP:function(a){return new H.bU(a,this.gl(a),0,[H.cq(this,a,"J",0)])},
a_:function(a,b){return this.n(a,b)},
N:function(a,b){var u,t
H.i(b,{func:1,ret:-1,args:[H.cq(this,a,"J",0)]})
u=this.gl(a)
for(t=0;t<u;++t){b.$1(this.n(a,t))
if(u!==this.gl(a))throw H.c(P.az(a))}},
it:function(a,b){var u,t
u=H.a([],[H.cq(this,a,"J",0)])
C.a.sl(u,this.gl(a))
for(t=0;t<this.gl(a);++t)C.a.m(u,t,this.n(a,t))
return u},
is:function(a){return this.it(a,!0)},
hC:function(a,b,c,d){var u
H.u(d,H.cq(this,a,"J",0))
P.b5(b,c,this.gl(a),null,null,null)
for(u=b;u<c;++u)this.m(a,u,d)},
i:function(a){return P.iP(a,"[","]")}}
P.eO.prototype={}
P.eP.prototype={
$2:function(a,b){var u,t
u=this.a
if(!u.a)this.b.a+=", "
u.a=!1
u=this.b
t=u.a+=H.f(a)
u.a=t+": "
u.a+=H.f(b)},
$S:5}
P.bn.prototype={
N:function(a,b){var u,t
H.i(b,{func:1,ret:-1,args:[H.a2(this,"bn",0),H.a2(this,"bn",1)]})
for(u=J.ba(this.gae());u.w();){t=u.gF()
b.$2(t,this.n(0,t))}},
gl:function(a){return J.ar(this.gae())},
i:function(a){return P.iU(this)},
$iB:1}
P.hY.prototype={
m:function(a,b,c){H.u(b,H.p(this,0))
H.u(c,H.p(this,1))
throw H.c(P.S("Cannot modify unmodifiable map"))}}
P.eQ.prototype={
n:function(a,b){return this.a.n(0,b)},
m:function(a,b,c){this.a.m(0,H.u(b,H.p(this,0)),H.u(c,H.p(this,1)))},
N:function(a,b){this.a.N(0,H.i(b,{func:1,ret:-1,args:[H.p(this,0),H.p(this,1)]}))},
gl:function(a){var u=this.a
return u.gl(u)},
i:function(a){return J.ae(this.a)},
$iB:1}
P.du.prototype={}
P.hN.prototype={
ab:function(a,b){var u
for(u=J.ba(H.l(b,"$io",this.$ti,"$ao"));u.w();)this.h(0,u.gF())},
i:function(a){return P.iP(this,"{","}")},
a_:function(a,b){var u,t,s
if(b<0)H.P(P.Z(b,0,null,"index",null))
for(u=P.m0(this,this.r,H.p(this,0)),t=0;u.w();){s=u.d
if(b===t)return s;++t}throw H.c(P.bj(b,this,"index",null,t))},
$io:1,
$ijP:1}
P.dI.prototype={}
P.dT.prototype={}
P.e3.prototype={
hU:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
c=P.b5(b,c,a.length,null,null,null)
u=$.kO()
for(t=b,s=t,r=null,q=-1,p=-1,o=0;t<c;t=n){n=t+1
m=C.b.C(a,t)
if(m===37){l=n+2
if(l<=c){k=H.im(C.b.C(a,n))
j=H.im(C.b.C(a,n+1))
i=k*16+j-(j&256)
if(i===37)i=-1
n=l}else i=-1}else i=m
if(0<=i&&i<=127){if(i<0||i>=u.length)return H.h(u,i)
h=u[i]
if(h>=0){i=C.b.U("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",h)
if(i===m)continue
m=i}else{if(h===-1){if(q<0){g=r==null?null:r.a.length
if(g==null)g=0
q=g+(t-s)
p=t}++o
if(m===61)continue}m=i}if(h!==-2){if(r==null)r=new P.ad("")
g=r.a+=C.b.p(a,s,t)
r.a=g+H.bs(m)
s=n
continue}}throw H.c(P.Q("Invalid base64 data",a,t))}if(r!=null){g=r.a+=C.b.p(a,s,c)
f=g.length
if(q>=0)P.jn(a,p,c,q,o,f)
else{e=C.d.aX(f-1,4)+1
if(e===1)throw H.c(P.Q("Invalid base64 encoding length ",a,c))
for(;e<4;){g+="="
r.a=g;++e}}g=r.a
return C.b.aB(a,b,c,g.charCodeAt(0)==0?g:g)}d=c-b
if(q>=0)P.jn(a,p,c,q,o,d)
else{e=C.d.aX(d,4)
if(e===1)throw H.c(P.Q("Invalid base64 encoding length ",a,c))
if(e>1)a=C.b.aB(a,c,c,e===2?"==":"=")}return a},
$abd:function(){return[[P.b,P.k],P.e]}}
P.e4.prototype={
$aaY:function(){return[[P.b,P.k],P.e]}}
P.bd.prototype={}
P.aY.prototype={}
P.em.prototype={
$abd:function(){return[P.e,[P.b,P.k]]}}
P.eB.prototype={
i:function(a){return this.a}}
P.eA.prototype={
eu:function(a,b,c){var u,t,s,r,q,p
for(u=this.a,t=u.e,s=u.d,u=u.c,r=b,q=null;r<c;++r){if(r>=a.length)return H.h(a,r)
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
default:p=null}if(p!=null){if(q==null)q=new P.ad("")
if(r>b)q.a+=C.b.p(a,b,r)
q.a+=p
b=r+1}}if(q==null)return
if(c>b)q.a+=J.l0(a,b,c)
u=q.a
return u.charCodeAt(0)==0?u:u},
$aaY:function(){return[P.e,P.e]}}
P.h6.prototype={
ghB:function(){return C.P}}
P.h8.prototype={
aN:function(a,b,c){var u,t,s
c=P.b5(b,c,a.length,null,null,null)
u=c-b
if(u===0)return new Uint8Array(0)
t=new Uint8Array(u*3)
s=new P.i4(t)
if(s.eE(a,b,c)!==c)s.cP(J.kV(a,c-1),0)
return new Uint8Array(t.subarray(0,H.mg(0,s.b,t.length)))},
bQ:function(a){return this.aN(a,0,null)},
$aaY:function(){return[P.e,[P.b,P.k]]}}
P.i4.prototype={
cP:function(a,b){var u,t,s,r,q
u=this.c
t=this.b
s=t+1
r=u.length
if((b&64512)===56320){q=65536+((a&1023)<<10)|b&1023
this.b=s
if(t>=r)return H.h(u,t)
u[t]=240|q>>>18
t=s+1
this.b=t
if(s>=r)return H.h(u,s)
u[s]=128|q>>>12&63
s=t+1
this.b=s
if(t>=r)return H.h(u,t)
u[t]=128|q>>>6&63
this.b=s+1
if(s>=r)return H.h(u,s)
u[s]=128|q&63
return!0}else{this.b=s
if(t>=r)return H.h(u,t)
u[t]=224|a>>>12
t=s+1
this.b=t
if(s>=r)return H.h(u,s)
u[s]=128|a>>>6&63
this.b=t+1
if(t>=r)return H.h(u,t)
u[t]=128|a&63
return!1}},
eE:function(a,b,c){var u,t,s,r,q,p,o
if(b!==c&&(C.b.U(a,c-1)&64512)===55296)--c
for(u=this.c,t=u.length,s=b;s<c;++s){r=C.b.C(a,s)
if(r<=127){q=this.b
if(q>=t)break
this.b=q+1
u[q]=r}else if((r&64512)===55296){if(this.b+3>=t)break
p=s+1
if(this.cP(r,C.b.C(a,p)))s=p}else if(r<=2047){q=this.b
o=q+1
if(o>=t)break
this.b=o
if(q>=t)return H.h(u,q)
u[q]=192|r>>>6
this.b=o+1
u[o]=128|r&63}else{q=this.b
if(q+2>=t)break
o=q+1
this.b=o
if(q>=t)return H.h(u,q)
u[q]=224|r>>>12
q=o+1
this.b=q
if(o>=t)return H.h(u,o)
u[o]=128|r>>>6&63
this.b=q+1
if(q>=t)return H.h(u,q)
u[q]=128|r&63}}return s}}
P.h7.prototype={
aN:function(a,b,c){var u,t,s,r
H.l(a,"$ib",[P.k],"$ab")
u=P.lO(!1,a,b,c)
if(u!=null)return u
c=P.b5(b,c,J.ar(a),null,null,null)
t=new P.ad("")
s=new P.i2(!1,t)
s.aN(a,b,c)
if(s.e>0){H.P(P.Q("Unfinished UTF-8 octet sequence",a,c))
t.a+=H.bs(65533)
s.d=0
s.e=0
s.f=0}r=t.a
return r.charCodeAt(0)==0?r:r},
bQ:function(a){return this.aN(a,0,null)},
$aaY:function(){return[[P.b,P.k],P.e]}}
P.i2.prototype={
aN:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k,j,i
H.l(a,"$ib",[P.k],"$ab")
u=this.d
t=this.e
s=this.f
this.d=0
this.e=0
this.f=0
r=new P.i3(this,b,c,a)
$label0$0:for(q=J.co(a),p=this.b,o=b;!0;o=j){$label1$1:if(t>0){do{if(o===c)break $label0$0
n=q.n(a,o)
if(typeof n!=="number")return n.be()
if((n&192)!==128){m=P.Q("Bad UTF-8 encoding 0x"+C.d.aW(n,16),a,o)
throw H.c(m)}else{u=(u<<6|n&63)>>>0;--t;++o}}while(t>0)
m=s-1
if(m<0||m>=4)return H.h(C.D,m)
if(u<=C.D[m]){m=P.Q("Overlong encoding of 0x"+C.d.aW(u,16),a,o-s-1)
throw H.c(m)}if(u>1114111){m=P.Q("Character outside valid Unicode range: 0x"+C.d.aW(u,16),a,o-s-1)
throw H.c(m)}if(!this.c||u!==65279)p.a+=H.bs(u)
this.c=!1}for(m=o<c;m;){l=P.mn(a,o,c)
if(l>0){this.c=!1
k=o+l
r.$2(o,k)
if(k===c)break}else k=o
j=k+1
n=q.n(a,k)
if(typeof n!=="number")return n.T()
if(n<0){i=P.Q("Negative UTF-8 code unit: -0x"+C.d.aW(-n,16),a,j-1)
throw H.c(i)}else{if((n&224)===192){u=n&31
t=1
s=1
continue $label0$0}if((n&240)===224){u=n&15
t=2
s=2
continue $label0$0}if((n&248)===240&&n<245){u=n&7
t=3
s=3
continue $label0$0}i=P.Q("Bad UTF-8 encoding 0x"+C.d.aW(n,16),a,j-1)
throw H.c(i)}}break $label0$0}if(t>0){this.d=u
this.e=t
this.f=s}}}
P.i3.prototype={
$2:function(a,b){this.a.b.a+=P.df(this.d,a,b)},
$S:40}
P.G.prototype={}
P.a8.prototype={
t:function(a,b){if(b==null)return!1
return b instanceof P.a8&&this.a===b.a&&!0},
gE:function(a){var u=this.a
return(u^C.d.au(u,30))&1073741823},
i:function(a){var u,t,s,r,q,p,o,n
u=P.la(H.ly(this))
t=P.cG(H.lw(this))
s=P.cG(H.ls(this))
r=P.cG(H.lt(this))
q=P.cG(H.lv(this))
p=P.cG(H.lx(this))
o=P.lb(H.lu(this))
n=u+"-"+t+"-"+s+" "+r+":"+q+":"+p+"."+o
return n}}
P.w.prototype={}
P.aZ.prototype={
t:function(a,b){if(b==null)return!1
return b instanceof P.aZ&&this.a===b.a},
gE:function(a){return C.d.gE(this.a)},
i:function(a){var u,t,s,r,q
u=new P.ej()
t=this.a
if(t<0)return"-"+new P.aZ(0-t).i(0)
s=u.$1(C.d.av(t,6e7)%60)
r=u.$1(C.d.av(t,1e6)%60)
q=new P.ei().$1(t%1e6)
return""+C.d.av(t,36e8)+":"+H.f(s)+":"+H.f(r)+"."+H.f(q)}}
P.ei.prototype={
$1:function(a){if(a>=1e5)return""+a
if(a>=1e4)return"0"+a
if(a>=1000)return"00"+a
if(a>=100)return"000"+a
if(a>=10)return"0000"+a
return"00000"+a},
$S:14}
P.ej.prototype={
$1:function(a){if(a>=10)return""+a
return"0"+a},
$S:14}
P.b_.prototype={}
P.d6.prototype={
i:function(a){return"Throw of null."}}
P.as.prototype={
gbp:function(){return"Invalid argument"+(!this.a?"(s)":"")},
gbo:function(){return""},
i:function(a){var u,t,s,r,q,p
u=this.c
t=u!=null?" ("+u+")":""
u=this.d
s=u==null?"":": "+u
r=this.gbp()+t+s
if(!this.a)return r
q=this.gbo()
p=P.eo(this.b)
return r+q+": "+p}}
P.bt.prototype={
gbp:function(){return"RangeError"},
gbo:function(){var u,t,s
u=this.e
if(u==null){u=this.f
t=u!=null?": Not less than or equal to "+H.f(u):""}else{s=this.f
if(s==null)t=": Not greater than or equal to "+H.f(u)
else if(s>u)t=": Not in range "+H.f(u)+".."+H.f(s)+", inclusive"
else t=s<u?": Valid value range is empty":": Only valid value is "+H.f(u)}return t}}
P.eC.prototype={
gbp:function(){return"RangeError"},
gbo:function(){var u,t
u=H.T(this.b)
if(typeof u!=="number")return u.T()
if(u<0)return": index must not be negative"
t=this.f
if(t===0)return": no indices are valid"
return": index should be less than "+H.f(t)},
gl:function(a){return this.f}}
P.h_.prototype={
i:function(a){return"Unsupported operation: "+this.a}}
P.fX.prototype={
i:function(a){var u=this.a
return u!=null?"UnimplementedError: "+u:"UnimplementedError"}}
P.c3.prototype={
i:function(a){return"Bad state: "+this.a}}
P.eb.prototype={
i:function(a){var u=this.a
if(u==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+P.eo(u)+"."}}
P.f2.prototype={
i:function(a){return"Out of Memory"},
$ib_:1}
P.de.prototype={
i:function(a){return"Stack Overflow"},
$ib_:1}
P.ef.prototype={
i:function(a){var u=this.a
return u==null?"Reading static variable during its initialization":"Reading static variable '"+u+"' during its initialization"}}
P.dE.prototype={
i:function(a){return"Exception: "+this.a}}
P.ew.prototype={
i:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f
u=this.a
t=""!==u?"FormatException: "+u:"FormatException"
s=this.c
r=this.b
if(typeof r==="string"){if(s!=null)u=s<0||s>r.length
else u=!1
if(u)s=null
if(s==null){q=r.length>78?C.b.p(r,0,75)+"...":r
return t+"\n"+q}for(p=1,o=0,n=!1,m=0;m<s;++m){l=C.b.C(r,m)
if(l===10){if(o!==m||!n)++p
o=m+1
n=!1}else if(l===13){++p
o=m+1
n=!0}}t=p>1?t+(" (at line "+p+", character "+(s-o+1)+")\n"):t+(" (at character "+(s+1)+")\n")
k=r.length
for(m=s;m<k;++m){l=C.b.U(r,m)
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
g=""}f=C.b.p(r,i,j)
return t+h+f+g+"\n"+C.b.q(" ",s-i+h.length)+"^\n"}else return s!=null?t+(" (at offset "+H.f(s)+")"):t}}
P.b0.prototype={}
P.k.prototype={}
P.o.prototype={
bc:function(a,b){var u=H.a2(this,"o",0)
return new H.cb(this,H.i(b,{func:1,ret:P.G,args:[u]}),[u])},
gl:function(a){var u,t
u=this.gP(this)
for(t=0;u.w();)++t
return t},
gam:function(a){var u,t
u=this.gP(this)
if(!u.w())throw H.c(H.iQ())
t=u.gF()
if(u.w())throw H.c(H.li())
return t},
a_:function(a,b){var u,t,s
if(b<0)H.P(P.Z(b,0,null,"index",null))
for(u=this.gP(this),t=0;u.w();){s=u.gF()
if(b===t)return s;++t}throw H.c(P.bj(b,this,"index",null,t))},
i:function(a){return P.lh(this,"(",")")}}
P.aA.prototype={}
P.b.prototype={$io:1}
P.B.prototype={}
P.y.prototype={
gE:function(a){return P.F.prototype.gE.call(this,this)},
i:function(a){return"null"}}
P.a6.prototype={}
P.F.prototype={constructor:P.F,$iF:1,
t:function(a,b){return this===b},
gE:function(a){return H.c_(this)},
i:function(a){return"Instance of '"+H.br(this)+"'"},
toString:function(){return this.i(this)}}
P.ac.prototype={}
P.e.prototype={$ijH:1}
P.ad.prototype={
gl:function(a){return this.a.length},
i:function(a){var u=this.a
return u.charCodeAt(0)==0?u:u},
$in4:1}
P.h5.prototype={
$2:function(a,b){var u,t,s,r
u=P.e
H.l(a,"$iB",[u,u],"$aB")
H.z(b)
t=J.cp(b).dc(b,"=")
if(t===-1){if(b!=="")a.m(0,P.j2(b,0,b.length,this.a,!0),"")}else if(t!==0){s=C.b.p(b,0,t)
r=C.b.ag(b,t+1)
u=this.a
a.m(0,P.j2(s,0,s.length,u,!0),P.j2(r,0,r.length,u,!0))}return a},
$S:44}
P.h1.prototype={
$2:function(a,b){throw H.c(P.Q("Illegal IPv4 address, "+a,this.a,b))},
$S:37}
P.h3.prototype={
$2:function(a,b){throw H.c(P.Q("Illegal IPv6 address, "+a,this.a,b))},
$1:function(a){return this.$2(a,null)},
$S:32}
P.h4.prototype={
$2:function(a,b){var u
if(b-a>4)this.a.$2("an IPv6 part can only contain a maximum of 4 hex digits",a)
u=P.cr(C.b.p(this.b,a,b),null,16)
if(typeof u!=="number")return u.T()
if(u<0||u>65535)this.a.$2("each part must be in the range of `0x0..0xFFFF`",a)
return u},
$S:39}
P.by.prototype={
gdI:function(){return this.b},
gbU:function(a){var u=this.c
if(u==null)return""
if(C.b.W(u,"["))return C.b.p(u,1,u.length-1)
return u},
gb7:function(a){var u=this.d
if(u==null)return P.k7(this.a)
return u},
gc2:function(){var u=this.f
return u==null?"":u},
gd6:function(){var u=this.r
return u==null?"":u},
c4:function(a,b,c,d,e,f,g,h,i,j){var u,t,s
H.l(h,"$iB",[P.e,null],"$aB")
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
if(s&&!C.b.W(d,"/"))d="/"+d
g=P.j1(g,0,0,h)
return new P.by(i,j,c,f,d,g,this.r)},
c3:function(a,b){return this.c4(a,null,null,null,null,null,null,b,null,null)},
gaU:function(){var u,t
if(this.Q==null){u=this.f
t=P.e
this.sfB(new P.du(P.jY(u==null?"":u,C.i),[t,t]))}return this.Q},
gd7:function(){return this.c!=null},
gda:function(){return this.f!=null},
gd8:function(){return this.r!=null},
i:function(a){var u,t,s,r
u=this.y
if(u==null){u=this.a
t=u.length!==0?H.f(u)+":":""
s=this.c
r=s==null
if(!r||u==="file"){u=t+"//"
t=this.b
if(t.length!==0)u=u+H.f(t)+"@"
if(!r)u+=s
t=this.d
if(t!=null)u=u+":"+H.f(t)}else u=t
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
if(!!J.E(b).$iiX)if(this.a==b.gbi())if(this.c!=null===b.gd7())if(this.b==b.gdI())if(this.gbU(this)==b.gbU(b))if(this.gb7(this)==b.gb7(b))if(this.e===b.gdr(b)){u=this.f
t=u==null
if(!t===b.gda()){if(t)u=""
if(u===b.gc2()){u=this.r
t=u==null
if(!t===b.gd8()){if(t)u=""
u=u===b.gd6()}else u=!1}else u=!1}else u=!1}else u=!1
else u=!1
else u=!1
else u=!1
else u=!1
else u=!1
else u=!1
return u},
gE:function(a){var u=this.z
if(u==null){u=C.b.gE(this.i(0))
this.z=u}return u},
sfB:function(a){var u=P.e
this.Q=H.l(a,"$iB",[u,u],"$aB")},
$iiX:1,
gbi:function(){return this.a},
gdr:function(a){return this.e}}
P.hZ.prototype={
$1:function(a){var u=this.b
if(typeof u!=="number")return u.H()
throw H.c(P.Q("Invalid port",this.a,u+1))},
$S:15}
P.i_.prototype={
$1:function(a){return P.dU(C.a6,a,C.i,!1)},
$S:17}
P.i1.prototype={
$2:function(a,b){var u,t
u=this.b
t=this.a
u.a+=t.a
t.a="&"
t=u.a+=H.f(P.dU(C.r,a,C.i,!0))
if(b!=null&&b.length!==0){u.a=t+"="
u.a+=H.f(P.dU(C.r,b,C.i,!0))}},
$S:38}
P.i0.prototype={
$2:function(a,b){var u,t
H.z(a)
if(b==null||typeof b==="string")this.a.$2(a,H.z(b))
else for(u=J.ba(H.ks(b,"$io")),t=this.a;u.w();)t.$2(a,H.z(u.gF()))},
$S:35}
P.h0.prototype={
gdG:function(){var u,t,s,r,q
u=this.c
if(u!=null)return u
u=this.b
if(0>=u.length)return H.h(u,0)
t=this.a
u=u[0]+1
s=C.b.dd(t,"?",u)
r=t.length
if(s>=0){q=P.ck(t,s+1,r,C.p,!1)
r=s}else q=null
u=new P.hq(this,"data",null,null,null,P.ck(t,u,r,C.H,!1),q,null)
this.c=u
return u},
i:function(a){var u,t
u=this.b
if(0>=u.length)return H.h(u,0)
t=this.a
return u[0]===-1?"data:"+t:t}}
P.i8.prototype={
$1:function(a){return new Uint8Array(96)},
$S:31}
P.i7.prototype={
$2:function(a,b){var u=this.a
if(a>=u.length)return H.h(u,a)
u=u[a]
J.kW(u,0,96,b)
return u},
$S:34}
P.i9.prototype={
$3:function(a,b,c){var u,t,s
for(u=b.length,t=0;t<u;++t){s=C.b.C(b,t)^96
if(s>=a.length)return H.h(a,s)
a[s]=c}}}
P.ia.prototype={
$3:function(a,b,c){var u,t,s
for(u=C.b.C(b,0),t=C.b.C(b,1);u<=t;++u){s=(u^96)>>>0
if(s>=a.length)return H.h(a,s)
a[s]=c}}}
P.hQ.prototype={
gd7:function(){return this.c>0},
gd9:function(){var u,t
if(this.c>0){u=this.d
if(typeof u!=="number")return u.H()
t=this.e
if(typeof t!=="number")return H.r(t)
t=u+1<t
u=t}else u=!1
return u},
gda:function(){var u=this.f
if(typeof u!=="number")return u.T()
return u<this.r},
gd8:function(){return this.r<this.a.length},
gcC:function(){return this.b===4&&C.b.W(this.a,"http")},
gcD:function(){return this.b===5&&C.b.W(this.a,"https")},
gbi:function(){var u,t
u=this.b
if(u<=0)return""
t=this.x
if(t!=null)return t
if(this.gcC()){this.x="http"
u="http"}else if(this.gcD()){this.x="https"
u="https"}else if(u===4&&C.b.W(this.a,"file")){this.x="file"
u="file"}else if(u===7&&C.b.W(this.a,"package")){this.x="package"
u="package"}else{u=C.b.p(this.a,0,u)
this.x=u}return u},
gdI:function(){var u,t
u=this.c
t=this.b+3
return u>t?C.b.p(this.a,t,u-1):""},
gbU:function(a){var u=this.c
return u>0?C.b.p(this.a,u,this.d):""},
gb7:function(a){var u
if(this.gd9()){u=this.d
if(typeof u!=="number")return u.H()
return P.cr(C.b.p(this.a,u+1,this.e),null,null)}if(this.gcC())return 80
if(this.gcD())return 443
return 0},
gdr:function(a){return C.b.p(this.a,this.e,this.f)},
gc2:function(){var u,t
u=this.f
t=this.r
if(typeof u!=="number")return u.T()
return u<t?C.b.p(this.a,u+1,t):""},
gd6:function(){var u,t
u=this.r
t=this.a
return u<t.length?C.b.ag(t,u+1):""},
gaU:function(){var u=this.f
if(typeof u!=="number")return u.T()
if(u>=this.r)return C.a7
u=P.e
return new P.du(P.jY(this.gc2(),C.i),[u,u])},
c4:function(a,b,c,d,e,f,g,h,i,j){var u,t,s
H.l(h,"$iB",[P.e,null],"$aB")
i=this.gbi()
u=i==="file"
t=this.c
j=t>0?C.b.p(this.a,this.b+3,t):""
f=this.gd9()?this.gb7(this):null
t=this.c
if(t>0)c=C.b.p(this.a,t,this.d)
else if(j.length!==0||f!=null||u)c=""
t=this.a
d=C.b.p(t,this.e,this.f)
if(!u)s=c!=null&&d.length!==0
else s=!0
if(s&&!C.b.W(d,"/"))d="/"+d
g=P.j1(g,0,0,h)
s=this.r
if(s<t.length)b=C.b.ag(t,s+1)
return new P.by(i,j,c,f,d,g,b)},
c3:function(a,b){return this.c4(a,null,null,null,null,null,null,b,null,null)},
gE:function(a){var u=this.y
if(u==null){u=C.b.gE(this.a)
this.y=u}return u},
t:function(a,b){if(b==null)return!1
if(this===b)return!0
return!!J.E(b).$iiX&&this.a===b.i(0)},
i:function(a){return this.a},
$iiX:1}
P.hq.prototype={}
W.t.prototype={}
W.cw.prototype={
i:function(a){return String(a)},
$icw:1}
W.e1.prototype={
i:function(a){return String(a)}}
W.bJ.prototype={$ibJ:1}
W.aV.prototype={$iaV:1}
W.bb.prototype={
bf:function(a,b,c){if(c!=null)return this.eF(a,b,P.mu(c,null))
return this.eG(a,b)},
dO:function(a,b){return this.bf(a,b,null)},
eF:function(a,b,c){return a.getContext(b,c)},
eG:function(a,b){return a.getContext(b)},
$ibb:1,
$ijq:1}
W.bc.prototype={
eH:function(a,b,c,d,e){return a.getImageData(b,c,d,e)},
hy:function(a,b,c,d,e,f){return a.drawImage(b,c,d,e,f)},
$ibc:1}
W.aW.prototype={
gl:function(a){return a.length}}
W.bN.prototype={
gl:function(a){return a.length}}
W.ee.prototype={}
W.al.prototype={$ial:1}
W.bO.prototype={
h8:function(a,b){return a.adoptNode(b)},
bg:function(a,b){return a.getElementById(b)}}
W.eh.prototype={
i:function(a){return String(a)}}
W.cH.prototype={
hn:function(a,b){return a.createHTMLDocument(b)}}
W.cI.prototype={
i:function(a){return"Rectangle ("+H.f(a.left)+", "+H.f(a.top)+") "+H.f(a.width)+" x "+H.f(a.height)},
t:function(a,b){var u
if(b==null)return!1
if(!H.cn(b,"$iam",[P.a6],"$aam"))return!1
u=J.W(b)
return a.left===u.gb6(b)&&a.top===u.gba(b)&&a.width===u.gbd(b)&&a.height===u.gb5(b)},
gE:function(a){return W.k5(C.e.gE(a.left),C.e.gE(a.top),C.e.gE(a.width),C.e.gE(a.height))},
gcX:function(a){return a.bottom},
gb5:function(a){return a.height},
gb6:function(a){return a.left},
gdw:function(a){return a.right},
gba:function(a){return a.top},
gbd:function(a){return a.width},
$iam:1,
$aam:function(){return[P.a6]}}
W.hp.prototype={
gl:function(a){return this.b.length},
n:function(a,b){var u=this.b
if(b<0||b>=u.length)return H.h(u,b)
return H.d(u[b],"$iA")},
m:function(a,b,c){var u
H.d(c,"$iA")
u=this.b
if(b<0||b>=u.length)return H.h(u,b)
J.iI(this.a,c,u[b])},
h:function(a,b){J.jk(this.a,b)
return b},
gP:function(a){var u=this.is(this)
return new J.af(u,u.length,0,[H.p(u,0)])},
$aJ:function(){return[W.A]},
$ao:function(){return[W.A]},
$ab:function(){return[W.A]}}
W.A.prototype={
ghb:function(a){return new W.hr(a)},
gbP:function(a){return new W.hp(a,a.children)},
gcZ:function(a){var u,t,s,r
u=a.clientLeft
t=a.clientTop
s=a.clientWidth
r=a.clientHeight
if(typeof s!=="number")return s.T()
if(s<0)s=-s*0
if(typeof r!=="number")return r.T()
if(r<0)r=-r*0
return new P.am(u,t,s,r,[P.a6])},
i:function(a){return a.localName},
a6:function(a,b,c,d){var u,t,s,r
if(c==null){u=$.jv
if(u==null){u=H.a([],[W.aj])
t=new W.d5(u)
C.a.h(u,W.k4(null))
C.a.h(u,W.k6())
$.jv=t
d=t}else d=u
u=$.ju
if(u==null){u=new W.dV(d)
$.ju=u
c=u}else{u.a=d
c=u}}if($.aK==null){u=document
t=u.implementation
t=(t&&C.Q).hn(t,"")
$.aK=t
$.iO=t.createRange()
t=$.aK
t.toString
t=t.createElement("base")
H.d(t,"$ibJ")
t.href=u.baseURI
u=$.aK.head;(u&&C.S).u(u,t)}u=$.aK
if(u.body==null){u.toString
t=u.createElement("body")
u.body=H.d(t,"$iaV")}u=$.aK
if(!!this.$iaV)s=u.body
else{t=a.tagName
u.toString
s=u.createElement(t)
u=$.aK.body;(u&&C.l).u(u,s)}if("createContextualFragment" in window.Range.prototype&&!C.a.V(C.a4,a.tagName)){u=$.iO;(u&&C.J).dV(u,s)
u=$.iO
r=(u&&C.J).hl(u,b)}else{s.innerHTML=b
r=$.aK.createDocumentFragment()
for(u=J.W(r);t=s.firstChild,t!=null;)u.u(r,t)}u=$.aK.body
if(s==null?u!=null:s!==u)J.jl(s)
c.c9(r)
C.n.h8(document,r)
return r},
hm:function(a,b,c){return this.a6(a,b,c,null)},
dZ:function(a,b,c,d){a.textContent=null
this.u(a,this.a6(a,b,c,d))},
dY:function(a,b){return this.dZ(a,b,null,null)},
aE:function(a,b){return a.getAttribute(b)},
fD:function(a,b){return a.removeAttribute(b)},
dW:function(a,b,c){return a.setAttribute(b,c)},
$iA:1,
gim:function(a){return a.tagName}}
W.el.prototype={
$1:function(a){return!!J.E(H.d(a,"$ix")).$iA},
$S:18}
W.j.prototype={$ij:1}
W.bf.prototype={
em:function(a,b,c,d){return a.addEventListener(b,H.bB(H.i(c,{func:1,args:[W.j]}),1),!1)},
$ibf:1}
W.ev.prototype={
gl:function(a){return a.length}}
W.cM.prototype={}
W.cN.prototype={
cJ:function(a,b,c,d){return a.replaceState(b,c,d)},
gl:function(a){return a.length}}
W.bh.prototype={
gl:function(a){return a.length},
n:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.bj(b,a,null,null,null))
return a[b]},
m:function(a,b,c){H.d(c,"$ix")
throw H.c(P.S("Cannot assign element of immutable List."))},
a_:function(a,b){if(b<0||b>=a.length)return H.h(a,b)
return a[b]},
$iat:1,
$aat:function(){return[W.x]},
$aJ:function(){return[W.x]},
$io:1,
$ao:function(){return[W.x]},
$ib:1,
$ab:function(){return[W.x]},
$ibh:1,
$aag:function(){return[W.x]}}
W.cO.prototype={}
W.aL.prototype={$iaL:1,
gd_:function(a){return a.data}}
W.bi.prototype={$ibi:1,$ijq:1}
W.bT.prototype={$ibT:1}
W.aC.prototype={$iaC:1}
W.cX.prototype={}
W.cZ.prototype={
i:function(a){return String(a)},
$icZ:1}
W.bW.prototype={}
W.R.prototype={$iR:1}
W.aa.prototype={
gam:function(a){var u,t
u=this.a
t=u.childNodes.length
if(t===0)throw H.c(P.jQ("No elements"))
if(t>1)throw H.c(P.jQ("More than one element"))
return u.firstChild},
ab:function(a,b){var u,t,s,r,q
H.l(b,"$io",[W.x],"$ao")
u=b.a
t=this.a
if(u!==t)for(s=u.childNodes.length,r=J.W(t),q=0;q<s;++q)r.u(t,u.firstChild)
return},
m:function(a,b,c){var u,t
H.d(c,"$ix")
u=this.a
t=u.childNodes
if(b<0||b>=t.length)return H.h(t,b)
J.iI(u,c,t[b])},
gP:function(a){var u=this.a.childNodes
return new W.cK(u,u.length,-1,[H.cq(C.a8,u,"ag",0)])},
gl:function(a){return this.a.childNodes.length},
n:function(a,b){var u=this.a.childNodes
if(b<0||b>=u.length)return H.h(u,b)
return u[b]},
$aJ:function(){return[W.x]},
$ao:function(){return[W.x]},
$ab:function(){return[W.x]}}
W.x.prototype={
ib:function(a){var u=a.parentNode
if(u!=null)J.e_(u,a)},
ig:function(a,b){var u,t
try{u=a.parentNode
J.iI(u,b,a)}catch(t){H.a3(t)}return a},
i:function(a){var u=a.nodeValue
return u==null?this.e1(a):u},
u:function(a,b){return a.appendChild(H.d(b,"$ix"))},
fE:function(a,b){return a.removeChild(b)},
fH:function(a,b,c){return a.replaceChild(b,c)},
$ix:1}
W.bZ.prototype={
gl:function(a){return a.length},
n:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.bj(b,a,null,null,null))
return a[b]},
m:function(a,b,c){H.d(c,"$ix")
throw H.c(P.S("Cannot assign element of immutable List."))},
a_:function(a,b){if(b<0||b>=a.length)return H.h(a,b)
return a[b]},
$iat:1,
$aat:function(){return[W.x]},
$aJ:function(){return[W.x]},
$io:1,
$ao:function(){return[W.x]},
$ib:1,
$ab:function(){return[W.x]},
$aag:function(){return[W.x]}}
W.da.prototype={
hl:function(a,b){return a.createContextualFragment(b)},
dV:function(a,b){return a.selectNodeContents(b)}}
W.fg.prototype={
gl:function(a){return a.length}}
W.aD.prototype={$iaD:1}
W.dg.prototype={
a6:function(a,b,c,d){var u,t
if("createContextualFragment" in window.Range.prototype)return this.bl(a,b,c,d)
u=W.lc("<table>"+b+"</table>",c,d)
t=document.createDocumentFragment()
t.toString
u.toString
new W.aa(t).ab(0,new W.aa(u))
return t},
eJ:function(a,b){return a.insertRow(b)}}
W.dh.prototype={
a6:function(a,b,c,d){var u,t,s,r
if("createContextualFragment" in window.Range.prototype)return this.bl(a,b,c,d)
u=document
t=u.createDocumentFragment()
u=C.k.a6(u.createElement("table"),b,c,d)
u.toString
u=new W.aa(u)
s=u.gam(u)
s.toString
u=new W.aa(s)
r=u.gam(u)
t.toString
r.toString
new W.aa(t).ab(0,new W.aa(r))
return t},
cB:function(a,b){return a.insertCell(b)}}
W.fu.prototype={
a6:function(a,b,c,d){var u,t,s
if("createContextualFragment" in window.Range.prototype)return this.bl(a,b,c,d)
u=document
t=u.createDocumentFragment()
u=C.k.a6(u.createElement("table"),b,c,d)
u.toString
u=new W.aa(u)
s=u.gam(u)
t.toString
s.toString
new W.aa(t).ab(0,new W.aa(s))
return t}}
W.c5.prototype={$ic5:1}
W.av.prototype={$iav:1}
W.aw.prototype={$iaw:1}
W.fH.prototype={
gl:function(a){return a.length},
n:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.bj(b,a,null,null,null))
return a[b]},
m:function(a,b,c){H.d(c,"$iav")
throw H.c(P.S("Cannot assign element of immutable List."))},
a_:function(a,b){if(b<0||b>=a.length)return H.h(a,b)
return a[b]},
$iat:1,
$aat:function(){return[W.av]},
$aJ:function(){return[W.av]},
$io:1,
$ao:function(){return[W.av]},
$ib:1,
$ab:function(){return[W.av]},
$aag:function(){return[W.av]}}
W.b6.prototype={}
W.hh.prototype={$ijq:1}
W.aH.prototype={
ght:function(a){if(a.deltaY!==undefined)return a.deltaY
throw H.c(P.S("deltaY is not supported"))},
ghs:function(a){if(a.deltaX!==undefined)return a.deltaX
throw H.c(P.S("deltaX is not supported"))},
$iaH:1}
W.cc.prototype={
fI:function(a,b){return a.requestAnimationFrame(H.bB(H.i(b,{func:1,ret:-1,args:[P.a6]}),1))},
ey:function(a){if(!!(a.requestAnimationFrame&&a.cancelAnimationFrame))return;(function(b){var u=['ms','moz','webkit','o']
for(var t=0;t<u.length&&!b.requestAnimationFrame;++t){b.requestAnimationFrame=b[u[t]+'RequestAnimationFrame']
b.cancelAnimationFrame=b[u[t]+'CancelAnimationFrame']||b[u[t]+'CancelRequestAnimationFrame']}if(b.requestAnimationFrame&&b.cancelAnimationFrame)return
b.requestAnimationFrame=function(c){return window.setTimeout(function(){c(Date.now())},16)}
b.cancelAnimationFrame=function(c){clearTimeout(c)}})(a)}}
W.cd.prototype={$icd:1}
W.dD.prototype={
i:function(a){return"Rectangle ("+H.f(a.left)+", "+H.f(a.top)+") "+H.f(a.width)+" x "+H.f(a.height)},
t:function(a,b){var u
if(b==null)return!1
if(!H.cn(b,"$iam",[P.a6],"$aam"))return!1
u=J.W(b)
return a.left===u.gb6(b)&&a.top===u.gba(b)&&a.width===u.gbd(b)&&a.height===u.gb5(b)},
gE:function(a){return W.k5(C.e.gE(a.left),C.e.gE(a.top),C.e.gE(a.width),C.e.gE(a.height))},
gb5:function(a){return a.height},
gbd:function(a){return a.width}}
W.dJ.prototype={
gl:function(a){return a.length},
n:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.bj(b,a,null,null,null))
return a[b]},
m:function(a,b,c){H.d(c,"$ix")
throw H.c(P.S("Cannot assign element of immutable List."))},
a_:function(a,b){if(b<0||b>=a.length)return H.h(a,b)
return a[b]},
$iat:1,
$aat:function(){return[W.x]},
$aJ:function(){return[W.x]},
$io:1,
$ao:function(){return[W.x]},
$ib:1,
$ab:function(){return[W.x]},
$aag:function(){return[W.x]}}
W.ho.prototype={
N:function(a,b){var u,t,s,r,q,p
H.i(b,{func:1,ret:-1,args:[P.e,P.e]})
for(u=this.gae(),t=u.length,s=this.a,r=J.W(s),q=0;q<u.length;u.length===t||(0,H.D)(u),++q){p=u[q]
b.$2(p,r.aE(s,p))}},
gae:function(){var u,t,s,r,q
u=this.a.attributes
t=H.a([],[P.e])
for(s=u.length,r=0;r<s;++r){if(r>=u.length)return H.h(u,r)
q=H.d(u[r],"$icd")
if(q.namespaceURI==null)C.a.h(t,q.name)}return t},
$abn:function(){return[P.e,P.e]},
$aB:function(){return[P.e,P.e]}}
W.hr.prototype={
n:function(a,b){return J.iJ(this.a,H.z(b))},
m:function(a,b,c){J.l_(this.a,b,c)},
gl:function(a){return this.gae().length}}
W.hs.prototype={}
W.j_.prototype={}
W.ht.prototype={}
W.hu.prototype={
$1:function(a){return this.a.$1(H.d(a,"$ij"))},
$S:33}
W.b7.prototype={
ee:function(a){var u,t
u=$.jj()
if(u.ghN(u)){for(t=0;t<262;++t)u.m(0,C.a3[t],W.mD())
for(t=0;t<12;++t)u.m(0,C.w[t],W.mE())}},
ax:function(a){return $.kP().V(0,W.bP(a))},
ac:function(a,b,c){var u,t,s
u=W.bP(a)
t=$.jj()
s=t.n(0,H.f(u)+"::"+b)
if(s==null)s=t.n(0,"*::"+b)
if(s==null)return!1
return H.j7(s.$4(a,b,c,this))},
$iaj:1}
W.ag.prototype={
gP:function(a){return new W.cK(a,this.gl(a),-1,[H.cq(this,a,"ag",0)])}}
W.d5.prototype={
ax:function(a){return C.a.cU(this.a,new W.f0(a))},
ac:function(a,b,c){return C.a.cU(this.a,new W.f_(a,b,c))},
$iaj:1}
W.f0.prototype={
$1:function(a){return H.d(a,"$iaj").ax(this.a)},
$S:19}
W.f_.prototype={
$1:function(a){return H.d(a,"$iaj").ac(this.a,this.b,this.c)},
$S:19}
W.dM.prototype={
eg:function(a,b,c,d){var u,t,s
this.a.ab(0,c)
u=b.bc(0,new W.hO())
t=b.bc(0,new W.hP())
this.b.ab(0,u)
s=this.c
s.ab(0,C.E)
s.ab(0,t)},
ax:function(a){return this.a.V(0,W.bP(a))},
ac:function(a,b,c){var u,t
u=W.bP(a)
t=this.c
if(t.V(0,H.f(u)+"::"+b))return this.d.h9(c)
else if(t.V(0,"*::"+b))return this.d.h9(c)
else{t=this.b
if(t.V(0,H.f(u)+"::"+b))return!0
else if(t.V(0,"*::"+b))return!0
else if(t.V(0,H.f(u)+"::*"))return!0
else if(t.V(0,"*::*"))return!0}return!1},
$iaj:1}
W.hO.prototype={
$1:function(a){return!C.a.V(C.w,H.z(a))},
$S:13}
W.hP.prototype={
$1:function(a){return C.a.V(C.w,H.z(a))},
$S:13}
W.hU.prototype={
ac:function(a,b,c){if(this.e5(a,b,c))return!0
if(b==="template"&&c==="")return!0
if(J.iJ(a,"template")==="")return this.e.V(0,b)
return!1}}
W.hV.prototype={
$1:function(a){return"TEMPLATE::"+H.f(H.z(a))},
$S:17}
W.hT.prototype={
ax:function(a){var u=J.E(a)
if(!!u.$ic0)return!1
u=!!u.$im
if(u&&W.bP(a)==="foreignObject")return!1
if(u)return!0
return!1},
ac:function(a,b,c){if(b==="is"||C.b.W(b,"on"))return!1
return this.ax(a)},
$iaj:1}
W.cK.prototype={
w:function(){var u,t
u=this.c+1
t=this.b
if(u<t){this.scA(J.kS(this.a,u))
this.c=u
return!0}this.scA(null)
this.c=t
return!1},
gF:function(){return this.d},
scA:function(a){this.d=H.u(a,H.p(this,0))},
$iaA:1}
W.aj.prototype={}
W.hM.prototype={$inh:1}
W.dV.prototype={
c9:function(a){new W.i5(this).$2(a,null)},
aK:function(a,b){if(b==null)J.jl(a)
else J.e_(b,a)},
fL:function(a,b){var u,t,s,r,q,p,o,n
u=!0
t=null
s=null
try{t=J.kX(a)
s=J.iJ(t.a,"is")
r=function(c){if(!(c.attributes instanceof NamedNodeMap))return true
var m=c.childNodes
if(c.lastChild&&c.lastChild!==m[m.length-1])return true
if(c.children)if(!(c.children instanceof HTMLCollection||c.children instanceof NodeList))return true
var l=0
if(c.children)l=c.children.length
for(var k=0;k<l;k++){var j=c.children[k]
if(j.id=='attributes'||j.name=='attributes'||j.id=='lastChild'||j.name=='lastChild'||j.id=='children'||j.name=='children')return true}return false}(a)
u=r?!0:!(a.attributes instanceof NamedNodeMap)}catch(o){H.a3(o)}q="element unprintable"
try{q=J.ae(a)}catch(o){H.a3(o)}try{p=W.bP(a)
this.fK(H.d(a,"$iA"),b,u,q,p,H.d(t,"$iB"),H.z(s))}catch(o){if(H.a3(o) instanceof P.as)throw o
else{this.aK(a,b)
window
n="Removing corrupted element "+H.f(q)
if(typeof console!="undefined")window.console.warn(n)}}},
fK:function(a,b,c,d,e,f,g){var u,t,s,r,q,p
if(c){this.aK(a,b)
window
u="Removing element due to corrupted attributes on <"+d+">"
if(typeof console!="undefined")window.console.warn(u)
return}if(!this.a.ax(a)){this.aK(a,b)
window
u="Removing disallowed element <"+H.f(e)+"> from "+H.f(b)
if(typeof console!="undefined")window.console.warn(u)
return}if(g!=null)if(!this.a.ac(a,"is",g)){this.aK(a,b)
window
u="Removing disallowed type extension <"+H.f(e)+' is="'+g+'">'
if(typeof console!="undefined")window.console.warn(u)
return}u=f.gae()
t=H.a(u.slice(0),[H.p(u,0)])
for(s=f.gae().length-1,u=f.a,r=J.W(u);s>=0;--s){if(s>=t.length)return H.h(t,s)
q=t[s]
if(!this.a.ac(a,J.l1(q),r.aE(u,q))){window
p="Removing disallowed attribute <"+H.f(e)+" "+q+'="'+H.f(r.aE(u,q))+'">'
if(typeof console!="undefined")window.console.warn(p)
r.aE(u,q)
r.fD(u,q)}}if(!!J.E(a).$ic5)this.c9(a.content)},
$in1:1}
W.i5.prototype={
$2:function(a,b){var u,t,s,r,q,p
s=this.a
switch(a.nodeType){case 1:s.fL(a,b)
break
case 8:case 11:case 3:case 4:break
default:s.aK(a,b)}u=a.lastChild
for(s=a==null;null!=u;){t=null
try{t=u.previousSibling}catch(r){H.a3(r)
q=H.d(u,"$ix")
if(s){p=q.parentNode
if(p!=null)J.e_(p,q)}else J.e_(a,q)
u=null
t=a.lastChild}if(u!=null)this.$2(u,a)
u=H.d(t,"$ix")}},
$S:26}
W.dC.prototype={}
W.dF.prototype={}
W.dG.prototype={}
W.dK.prototype={}
W.dL.prototype={}
W.dQ.prototype={}
W.dR.prototype={}
W.dW.prototype={}
W.dX.prototype={}
P.hR.prototype={
d4:function(a){var u,t,s
u=this.a
t=u.length
for(s=0;s<t;++s)if(u[s]===a)return s
C.a.h(u,a)
C.a.h(this.b,null)
return t},
bb:function(a){var u,t,s,r
u={}
if(a==null)return a
if(typeof a==="boolean")return a
if(typeof a==="number")return a
if(typeof a==="string")return a
t=J.E(a)
if(!!t.$ia8)return new Date(a.a)
if(!!t.$ilD)throw H.c(P.fY("structured clone of RegExp"))
if(!!t.$iaL)return a
if(!!t.$ibo)return a
if(!!t.$iB){s=this.d4(a)
t=this.b
if(s>=t.length)return H.h(t,s)
r=t[s]
u.a=r
if(r!=null)return r
r={}
u.a=r
C.a.m(t,s,r)
a.N(0,new P.hS(u,this))
return u.a}if(!!t.$ib){s=this.d4(a)
u=this.b
if(s>=u.length)return H.h(u,s)
r=u[s]
if(r!=null)return r
return this.hk(a,s)}throw H.c(P.fY("structured clone of other type"))},
hk:function(a,b){var u,t,s,r
u=J.co(a)
t=u.gl(a)
s=new Array(t)
C.a.m(this.b,b,s)
for(r=0;r<t;++r)C.a.m(s,r,this.bb(u.n(a,r)))
return s}}
P.hS.prototype={
$2:function(a,b){this.a.a[a]=this.b.bb(b)},
$S:5}
P.dS.prototype={$iaL:1,
gd_:function(a){return this.a}}
P.ig.prototype={
$2:function(a,b){this.a[a]=b},
$S:5}
P.dO.prototype={}
P.es.prototype={
gaI:function(){var u,t,s
u=this.b
t=H.a2(u,"J",0)
s=W.A
return new H.eR(new H.cb(u,H.i(new P.et(),{func:1,ret:P.G,args:[t]}),[t]),H.i(new P.eu(),{func:1,ret:s,args:[t]}),[t,s])},
N:function(a,b){H.i(b,{func:1,ret:-1,args:[W.A]})
C.a.N(P.jD(this.gaI(),!1,W.A),b)},
m:function(a,b,c){var u
H.d(c,"$iA")
u=this.gaI()
J.kZ(u.b.$1(J.e0(u.a,b)),c)},
h:function(a,b){J.jk(this.b.a,b)},
gl:function(a){return J.ar(this.gaI().a)},
n:function(a,b){var u=this.gaI()
return u.b.$1(J.e0(u.a,b))},
gP:function(a){var u=P.jD(this.gaI(),!1,W.A)
return new J.af(u,u.length,0,[H.p(u,0)])},
$aJ:function(){return[W.A]},
$ao:function(){return[W.A]},
$ab:function(){return[W.A]}}
P.et.prototype={
$1:function(a){return!!J.E(H.d(a,"$ix")).$iA},
$S:18}
P.eu.prototype={
$1:function(a){return H.ak(H.d(a,"$ix"),"$iA")},
$S:27}
P.hH.prototype={
gdw:function(a){var u=this.a
if(typeof u!=="number")return u.H()
return H.u(u+this.c,H.p(this,0))},
gcX:function(a){var u=this.b
if(typeof u!=="number")return u.H()
return H.u(u+this.d,H.p(this,0))},
i:function(a){return"Rectangle ("+H.f(this.a)+", "+H.f(this.b)+") "+this.c+" x "+this.d},
t:function(a,b){var u,t,s,r
if(b==null)return!1
if(H.cn(b,"$iam",[P.a6],"$aam")){u=this.a
t=J.W(b)
if(u==t.gb6(b)){s=this.b
if(s==t.gba(b)){if(typeof u!=="number")return u.H()
r=H.p(this,0)
if(H.u(u+this.c,r)===t.gdw(b)){if(typeof s!=="number")return s.H()
u=H.u(s+this.d,r)===t.gcX(b)}else u=!1}else u=!1}else u=!1}else u=!1
return u},
gE:function(a){var u,t,s,r,q
u=this.a
t=J.cv(u)
s=this.b
r=J.cv(s)
if(typeof u!=="number")return u.H()
q=H.p(this,0)
u=C.d.gE(H.u(u+this.c,q))
if(typeof s!=="number")return s.H()
q=C.d.gE(H.u(s+this.d,q))
return P.m_(P.hF(P.hF(P.hF(P.hF(0,t),r),u),q))}}
P.am.prototype={
gb6:function(a){return this.a},
gba:function(a){return this.b},
gbd:function(a){return this.c},
gb5:function(a){return this.d}}
P.c0.prototype={$ic0:1}
P.m.prototype={
gbP:function(a){return new P.es(a,new W.aa(a))},
a6:function(a,b,c,d){var u,t,s,r,q,p
u=H.a([],[W.aj])
C.a.h(u,W.k4(null))
C.a.h(u,W.k6())
C.a.h(u,new W.hT())
c=new W.dV(new W.d5(u))
t='<svg version="1.1">'+b+"</svg>"
u=document
s=u.body
r=(s&&C.l).hm(s,t,c)
q=u.createDocumentFragment()
r.toString
u=new W.aa(r)
p=u.gam(u)
for(u=J.W(q);s=p.firstChild,s!=null;)u.u(q,s)
return q},
$im:1}
P.C.prototype={$io:1,
$ao:function(){return[P.k]},
$ib:1,
$ab:function(){return[P.k]},
$ilL:1}
P.cz.prototype={$icz:1}
P.cL.prototype={$icL:1}
P.d9.prototype={$id9:1}
P.bu.prototype={
cQ:function(a,b){return a.activeTexture(b)},
cV:function(a,b,c){return a.attachShader(b,c)},
ad:function(a,b,c){return a.bindBuffer(b,c)},
hd:function(a,b,c){return a.bindFramebuffer(b,c)},
ay:function(a,b,c){return a.bindTexture(b,c)},
cY:function(a,b,c,d){return a.bufferData(b,c,d)},
hf:function(a,b){return a.clear(b)},
hg:function(a,b,c,d,e){return a.clearColor(b,c,d,e)},
hh:function(a,b){return a.clearDepth(b)},
hi:function(a,b){return a.compileShader(b)},
ho:function(a,b){return a.createShader(b)},
hq:function(a,b){return a.deleteProgram(b)},
hr:function(a,b){return a.deleteShader(b)},
hu:function(a,b){return a.depthFunc(b)},
d0:function(a,b){return a.disableVertexAttribArray(b)},
hx:function(a,b,c,d,e){return a.drawElements(H.T(b),H.T(c),H.T(d),H.T(e))},
d2:function(a,b){return a.enable(b)},
d3:function(a,b){return a.enableVertexAttribArray(b)},
dJ:function(a,b){return a.generateMipmap(b)},
dK:function(a,b,c){return a.getActiveAttrib(b,c)},
dL:function(a,b,c){return a.getActiveUniform(b,c)},
dM:function(a,b,c){return a.getAttribLocation(b,c)},
c8:function(a,b){return a.getParameter(b)},
dP:function(a,b){return a.getProgramInfoLog(b)},
bh:function(a,b,c){return a.getProgramParameter(b,c)},
dQ:function(a,b){return a.getShaderInfoLog(b)},
dR:function(a,b,c){return a.getShaderParameter(b,c)},
dS:function(a,b,c){return a.getUniformLocation(b,c)},
hP:function(a,b){return a.linkProgram(b)},
ia:function(a,b,c){return a.pixelStorei(b,c)},
e_:function(a,b,c){return a.shaderSource(b,c)},
ip:function(a,b,c,d,e,f,g,h,i,j){var u,t
u=J.E(g)
if(!!u.$iaL)t=!0
else t=!1
if(t){this.fV(a,b,c,d,e,f,P.mv(g))
return}if(!!u.$ibi)u=!0
else u=!1
if(u){this.fW(a,b,c,d,e,f,g)
return}throw H.c(P.cx("Incorrect number or type of arguments"))},
io:function(a,b,c,d,e,f,g){return this.ip(a,b,c,d,e,f,g,null,null,null)},
fV:function(a,b,c,d,e,f,g){return a.texImage2D(b,c,d,e,f,g)},
fW:function(a,b,c,d,e,f,g){return a.texImage2D(b,c,d,e,f,g)},
b9:function(a,b,c,d){return a.texParameteri(b,c,d)},
iw:function(a,b,c){return a.uniform1f(b,c)},
dE:function(a,b,c){return a.uniform1i(b,c)},
ix:function(a,b,c,d){return a.uniformMatrix4fv(b,!1,d)},
dH:function(a,b){return a.useProgram(b)},
iy:function(a,b,c,d,e,f,g){return a.vertexAttribPointer(b,c,d,!1,f,g)},
iz:function(a,b,c,d,e){return a.viewport(b,c,d,e)},
$ibu:1}
P.dc.prototype={$idc:1}
P.dj.prototype={$idj:1}
P.dr.prototype={$idr:1}
O.X.prototype={
cd:function(a){this.seN(H.a([],[a]))
this.scG(null)
this.scF(null)
this.scH(null)},
dX:function(a,b,c){var u={func:1,ret:-1,args:[P.k,[P.o,H.a2(this,"X",0)]]}
H.i(a,u)
H.i(c,u)
this.scG(b)
this.scF(a)
this.scH(c)},
bj:function(a,b){return this.dX(a,null,b)},
fo:function(a){H.l(a,"$io",[H.a2(this,"X",0)],"$ao")
return!0},
eb:function(a,b){var u
H.l(b,"$io",[H.a2(this,"X",0)],"$ao")
u=this.c
if(u!=null)u.$2(a,b)},
gl:function(a){return this.a.length},
gP:function(a){var u=this.a
return new J.af(u,u.length,0,[H.p(u,0)])},
a_:function(a,b){var u=this.a
if(b<0||b>=u.length)return H.h(u,b)
return u[b]},
h:function(a,b){var u,t,s
u=H.a2(this,"X",0)
H.u(b,u)
u=[u]
if(this.fo(H.a([b],u))){t=this.a
s=t.length
C.a.h(t,b)
this.eb(s,H.a([b],u))}},
seN:function(a){this.a=H.l(a,"$ib",[H.a2(this,"X",0)],"$ab")},
scG:function(a){this.b=H.i(a,{func:1,ret:P.G,args:[[P.o,H.a2(this,"X",0)]]})},
scF:function(a){this.c=H.i(a,{func:1,ret:-1,args:[P.k,[P.o,H.a2(this,"X",0)]]})},
scH:function(a){this.d=H.i(a,{func:1,ret:-1,args:[P.k,[P.o,H.a2(this,"X",0)]]})},
$io:1}
O.bV.prototype={
gl:function(a){return this.a.length},
gv:function(){var u=this.b
if(u==null){u=D.L()
this.b=u}return u},
ec:function(a){var u=this.b
if(u!=null)u.G(a)},
an:function(){return this.ec(null)},
gaQ:function(){var u=this.a
if(u.length>0)return C.a.gaf(u)
else return V.eU()},
dt:function(a){var u=this.a
if(a==null)C.a.h(u,V.eU())
else C.a.h(u,a)
this.an()},
c1:function(){var u=this.a
if(u.length>0){u.pop()
this.an()}},
sbu:function(a){this.a=H.l(a,"$ib",[V.b2],"$ab")}}
E.e5.prototype={}
E.a9.prototype={
co:function(){var u,t
this.e=null
for(u=this.y.a,u=new J.af(u,u.length,0,[H.p(u,0)]);u.w();){t=u.d
if(t.f==null)t.co()}},
sca:function(a,b){var u,t,s
u=this.c
if(u!=b){this.c=b
this.d=b
this.e=null
if(u!=null)u.gv().S(0,this.gdk())
t=this.c
if(t!=null)t.gv().h(0,this.gdk())
s=new D.H("shape",u,this.c,this,[F.dd])
s.b=!0
this.a4(s)}},
sdA:function(a){var u,t,s
u=this.f
if(u!=a){if(u!=null)u.gv().S(0,this.gdm())
t=this.f
this.f=a
if(a!=null)a.gv().h(0,this.gdm())
this.co()
s=new D.H("technique",t,this.f,this,[O.bv])
s.b=!0
this.a4(s)}},
saR:function(a){var u,t
if(!J.U(this.r,a)){u=this.r
if(u!=null)u.gv().S(0,this.gdi())
if(a!=null)a.gv().h(0,this.gdi())
this.r=a
t=new D.H("mover",u,a,this,[U.a1])
t.b=!0
this.a4(t)}},
aC:function(a){var u,t,s,r
u=this.r
t=u!=null?u.aD(a,this):null
if(!J.U(t,this.x)){s=this.x
this.x=t
r=new D.H("matrix",s,t,this,[V.b2])
r.b=!0
this.a4(r)}for(u=this.y.a,u=new J.af(u,u.length,0,[H.p(u,0)]);u.w();)u.d.aC(a)},
aA:function(a){var u,t,s,r,q,p,o,n
u=a.dx
t=this.x
u.toString
if(t==null)C.a.h(u.a,u.gaQ())
else C.a.h(u.a,t.q(0,u.gaQ()))
u.an()
a.du(this.f)
u=a.dy
s=(u&&C.a).gaf(u)
if(s!=null&&this.d!=null){u=s.a
if(u==null){r=a.fr.n(0,"Bumpy Debugging Shader")
if(r==null){u=a.a
r=new T.e7(u,"Bumpy Debugging Shader")
r.e9(u,"Bumpy Debugging Shader")
t=$.l3
q=$.l2
r.c=t
r.d=q
r.e=r.cv(t,35633)
r.f=r.cv(r.d,35632)
t=u.createProgram()
r.r=t
C.c.cV(u,t,r.e)
C.c.cV(u,r.r,r.f)
C.c.hP(u,r.r)
if(!H.j7(C.c.bh(u,r.r,35714))){p=C.c.dP(u,r.r)
C.c.hq(u,r.r)
H.P(P.a4("Failed to link shader: "+H.f(p)))}r.fN()
r.fP()
r.z=r.x.n(0,"posAttr")
r.Q=r.x.n(0,"normAttr")
r.ch=r.x.n(0,"binmAttr")
r.cx=r.x.n(0,"txtAttr")
r.cy=r.x.n(0,"weightAttr")
r.db=H.ak(r.y.n(0,"bumpTxt"),"$ids")
r.dx=H.ak(r.y.n(0,"objMat"),"$ibw")
r.dy=H.ak(r.y.n(0,"viewMat"),"$ibw")
r.fr=H.ak(r.y.n(0,"projMat"),"$ibw")
r.fx=H.ak(r.y.n(0,"offsetScalar"),"$idq")
if(a.fr.b3("Bumpy Debugging Shader"))H.P(P.a4('Shader cache already contains a shader by the name "Bumpy Debugging Shader".'))
a.fr.m(0,"Bumpy Debugging Shader",r)}s.a=r
u=r}if(this.e==null){u=this.c
t=$.aS()
q=$.aR()
q=u.he(new Z.hi(a.a),new Z.ca(t.a|q.a|$.aQ().a|$.aT().a|$.aU().a))
q.aP($.aS()).e=s.a.z.c
q.aP($.aR()).e=s.a.Q.c
q.aP($.aQ()).e=s.a.ch.c
q.aP($.aT()).e=s.a.cx.c
t=q.aP($.aU())
u=s.a
t.e=u.cy.c
this.e=q}t=s.b
if(t!=null){t.a=0
t=a.a
C.c.dH(t,u.r)
u.x.hA()
q=s.b
if(q!=null){o=u.db
o.toString
n=q.d
if(!n)C.c.dE(o.a,o.d,0)
else{q=q.a
C.c.dE(o.a,o.d,q)}}q=a.cy.gaQ()
o=u.fr
o.toString
o.bk(q.c6(0,!0))
q=a.db.gaQ()
o=u.dy
o.toString
o.bk(q.c6(0,!0))
q=a.dx.gaQ()
o=u.dx
o.toString
o.bk(q.c6(0,!0))
q=s.c
u=u.fx
C.c.iw(u.a,u.d,q)
q=s.b
if(!q.c&&q.d){q.c=!0
C.c.cQ(t,33984+q.a)
C.c.ay(t,3553,q.b)}u=this.e
if(u instanceof Z.cB){u.bJ(a)
u.aA(a)
u.iv(a)}else this.e=null
u=s.a
u.toString
C.c.dH(t,null)
u.x.hv()
u=s.b
if(u.c){u.c=!1
C.c.cQ(t,33984+u.a)
C.c.ay(t,3553,null)}}}for(u=this.y.a,u=new J.af(u,u.length,0,[H.p(u,0)]);u.w();)u.d.aA(a)
a.ds()
a.dx.c1()},
gv:function(){var u=this.z
if(u==null){u=D.L()
this.z=u}return u},
a4:function(a){var u=this.z
if(u!=null)u.G(a)},
a0:function(){return this.a4(null)},
dl:function(a){H.d(a,"$iv")
this.e=null
this.a4(a)},
i0:function(){return this.dl(null)},
dn:function(a){this.a4(H.d(a,"$iv"))},
i1:function(){return this.dn(null)},
dj:function(a){this.a4(H.d(a,"$iv"))},
i_:function(){return this.dj(null)},
dh:function(a){this.a4(H.d(a,"$iv"))},
hX:function(){return this.dh(null)},
hW:function(a,b){var u,t,s,r,q,p,o
H.l(b,"$io",[E.a9],"$ao")
for(u=b.length,t=this.gdg(),s={func:1,ret:-1,args:[D.v]},r=[s],q=0;q<b.length;b.length===u||(0,H.D)(b),++q){p=b[q]
if(p!=null){o=p.z
if(o==null){o=new D.bQ()
o.sai(null)
o.sb_(null)
o.c=null
o.d=0
p.z=o}H.i(t,s)
if(o.a==null)o.sai(H.a([],r))
o=o.a;(o&&C.a).h(o,t)}}this.a0()},
hZ:function(a,b){var u,t
H.l(b,"$io",[E.a9],"$ao")
for(u=b.gP(b),t=this.gdg();u.w();)u.gF().gv().S(0,t)
this.a0()},
i:function(a){var u,t
u=this.a
t=u.length
if(t<=0)return"Unnamed entity"
return u},
sed:function(a,b){this.y=H.l(b,"$iX",[E.a9],"$aX")},
$ijF:1}
E.fb.prototype={
e7:function(a,b){var u,t
this.c=512
this.d=512
this.e=0
u=new P.a8(Date.now(),!1)
this.f=u
this.r=u
this.x=u
this.y=0
this.z=null
this.Q=null
this.ch=null
this.cx=null
u=new O.bV()
t=[V.b2]
u.sbu(H.a([],t))
u.b=null
u.gv().h(0,new E.fc(this))
this.cy=u
u=new O.bV()
u.sbu(H.a([],t))
u.b=null
u.gv().h(0,new E.fd(this))
this.db=u
u=new O.bV()
u.sbu(H.a([],t))
u.b=null
u.gv().h(0,new E.fe(this))
this.dx=u
this.sfT(H.a([],[O.bv]))
u=this.dy;(u&&C.a).h(u,null)
this.sfQ(new H.au([P.e,A.c1]))},
gaF:function(){return this.a},
du:function(a){var u,t
u=this.dy
t=a==null?(u&&C.a).gaf(u):a;(u&&C.a).h(u,t)},
ds:function(){var u=this.dy
if(u.length>1)u.pop()},
sfT:function(a){this.dy=H.l(a,"$ib",[O.bv],"$ab")},
sfQ:function(a){this.fr=H.l(a,"$iB",[P.e,A.c1],"$aB")}}
E.fc.prototype={
$1:function(a){var u
H.d(a,"$iv")
u=this.a
u.z=null
u.ch=null},
$S:7}
E.fd.prototype={
$1:function(a){var u
H.d(a,"$iv")
u=this.a
u.z=null
u.Q=null
u.ch=null
u.cx=null},
$S:7}
E.fe.prototype={
$1:function(a){var u
H.d(a,"$iv")
u=this.a
u.ch=null
u.cx=null},
$S:7}
E.dl.prototype={
cg:function(a){H.d(a,"$iv")
this.dv()},
cf:function(){return this.cg(null)},
ghI:function(){var u,t,s
u=Date.now()
t=C.d.av(P.jt(0,0,0,u-this.cx.a,0,0).a,1000)/1000
if(t<=0)return 0
s=this.cy
this.cy=0
this.cx=new P.a8(u,!1)
return s/t},
cK:function(){var u,t,s,r
u=window.devicePixelRatio
t=this.b.clientWidth
if(typeof t!=="number")return t.q()
if(typeof u!=="number")return H.r(u)
s=C.e.bT(t*u)
t=this.b.clientHeight
if(typeof t!=="number")return t.q()
r=C.e.bT(t*u)
t=this.b
if(t.width!==s||t.height!==r){t.width=s
t.height=r
P.jT(C.u,this.gih())}},
dv:function(){var u,t
if(!this.ch){this.ch=!0
u=window
t=H.i(new E.fD(this),{func:1,ret:-1,args:[P.a6]})
C.L.ey(u)
C.L.fI(u,W.kk(t,P.a6))}},
ie:function(){var u,t,s,r,q
try{++this.cy
this.ch=!1
this.cK()
if(this.d!=null){s=this.e;++s.e
s.r=s.x
r=Date.now()
s.x=new P.a8(r,!1)
s.y=P.jt(0,0,0,r-s.r.a,0,0).a*0.000001
r=s.cy
C.a.sl(r.a,0)
r.an()
r=s.db
C.a.sl(r.a,0)
r.an()
r=s.dx
C.a.sl(r.a,0)
r.an()
r=s.dy;(r&&C.a).sl(r,0)
s=s.dy;(s&&C.a).h(s,null)
this.d.aA(this.e)}s=this.z
if(s!=null)s.G(null)}catch(q){u=H.a3(q)
t=H.bD(q)
P.jf("Error: "+H.f(u))
P.jf("Stack: "+H.f(t))
throw H.c(u)}}}
E.fD.prototype={
$1:function(a){var u
H.mN(a)
u=this.a
if(u.ch){u.ch=!1
u.ie()}},
$S:49}
Z.dA.prototype={$imW:1}
Z.cA.prototype={
bJ:function(a){var u,t,s
try{t=a.a
C.c.d3(t,this.e)
C.c.iy(t,this.e,this.b,5126,!1,this.d,this.c)}catch(s){u=H.a3(s)
t=P.a4('Failed to bind buffer attribute "'+this.a.i(0)+'": '+H.f(u))
throw H.c(t)}},
i:function(a){return"["+this.a.i(0)+", Size: "+this.b+", Offset: "+this.c+", Stride: "+this.d+", Attr: "+H.f(this.e)+"]"}}
Z.hi.prototype={$imX:1}
Z.cB.prototype={
aP:function(a){var u,t,s,r
for(u=this.c,t=u.length,s=0;s<t;++s){r=u[s]
if((r.a.a&a.a)!==0)return r}return},
bJ:function(a){var u,t
u=this.a
C.c.ad(a.gaF(),u.a,u.b)
for(u=this.c,t=u.length-1;t>=0;--t)u[t].bJ(a)},
iv:function(a){var u,t,s
for(u=this.c,t=u.length-1,s=a.a;t>=0;--t)C.c.d0(s,u[t].e)
C.c.ad(a.gaF(),this.a.a,null)},
aA:function(a){var u,t,s,r,q
u=this.b.length
for(t=0;t<u;++t){s=this.b
if(t>=s.length)return H.h(s,t)
r=s[t]
s=r.c
q=s.a
C.c.ad(a.gaF(),q,s.b)
C.c.hx(a.gaF(),r.a,r.b,5123,0)
C.c.ad(a.gaF(),q,null)}},
i:function(a){var u,t,s,r,q,p
u=[P.e]
t=H.a([],u)
for(s=this.b,r=s.length,q=0;q<s.length;s.length===r||(0,H.D)(s),++q)C.a.h(t,s[q].i(0))
p=H.a([],u)
for(u=this.c,s=u.length,q=0;q<s;++q)C.a.h(p,J.ae(u[q]))
return"Buffer:  ["+this.a.i(0)+"]\nIndices: "+C.a.k(t,", ")+"\nAttrs:   "+C.a.k(p,", ")},
seI:function(a){this.b=H.l(a,"$ib",[Z.bk],"$ab")},
$in5:1}
Z.bk.prototype={
i:function(a){return"Type: "+this.a+", Count: "+this.b+", ["+("Instance of '"+H.br(this.c)+"'")+"]"}}
Z.ca.prototype={
gcb:function(a){var u,t
u=this.a
t=(u&$.aS().a)!==0?3:0
if((u&$.aR().a)!==0)t+=3
if((u&$.aQ().a)!==0)t+=3
if((u&$.aT().a)!==0)t+=2
if((u&$.bH().a)!==0)t+=3
if((u&$.cs().a)!==0)t+=3
if((u&$.ct().a)!==0)t+=4
if((u&$.aU().a)!==0)++t
return(u&$.bG().a)!==0?t+4:t},
ha:function(a){var u,t,s
u=$.aS()
t=this.a
if((t&u.a)!==0){if(0===a)return u
s=1}else s=0
u=$.aR()
if((t&u.a)!==0){if(s===a)return u;++s}u=$.aQ()
if((t&u.a)!==0){if(s===a)return u;++s}u=$.aT()
if((t&u.a)!==0){if(s===a)return u;++s}u=$.bH()
if((t&u.a)!==0){if(s===a)return u;++s}u=$.cs()
if((t&u.a)!==0){if(s===a)return u;++s}u=$.ct()
if((t&u.a)!==0){if(s===a)return u;++s}u=$.aU()
if((t&u.a)!==0){if(s===a)return u;++s}u=$.bG()
if((t&u.a)!==0)if(s===a)return u
return $.kN()},
t:function(a,b){if(b==null)return!1
if(!(b instanceof Z.ca))return!1
return this.a===b.a},
i:function(a){var u,t
u=H.a([],[P.e])
t=this.a
if((t&$.aS().a)!==0)C.a.h(u,"Pos")
if((t&$.aR().a)!==0)C.a.h(u,"Norm")
if((t&$.aQ().a)!==0)C.a.h(u,"Binm")
if((t&$.aT().a)!==0)C.a.h(u,"Txt2D")
if((t&$.bH().a)!==0)C.a.h(u,"TxtCube")
if((t&$.cs().a)!==0)C.a.h(u,"Clr3")
if((t&$.ct().a)!==0)C.a.h(u,"Clr4")
if((t&$.aU().a)!==0)C.a.h(u,"Weight")
if((t&$.bG().a)!==0)C.a.h(u,"Bending")
if(u.length<=0)return"None"
return C.a.k(u,"|")}}
D.e9.prototype={}
D.bQ.prototype={
h:function(a,b){var u={func:1,ret:-1,args:[D.v]}
H.i(b,u)
if(this.a==null)this.sai(H.a([],[u]))
u=this.a;(u&&C.a).h(u,b)},
S:function(a,b){var u,t
H.i(b,{func:1,ret:-1,args:[D.v]})
u=this.a
u=u==null?null:C.a.V(u,b)
if(u===!0){u=this.a
t=(u&&C.a).S(u,b)||!1}else t=!1
u=this.b
u=u==null?null:C.a.V(u,b)
if(u===!0){u=this.b
t=(u&&C.a).S(u,b)||t}return t},
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
if(a==null){a=new D.v(null)
a.b=!0
u.a=a
r=a}else r=a
if(this.d>0){if(this.c==null)this.c=r
return!0}if(!s)C.a.N(t,new D.ep(u))
t=this.b
if(t!=null)C.a.N(t,new D.eq(u))
u=this.b
if(u!=null)C.a.sl(u,0)
return!0},
hz:function(){return this.G(null)},
ii:function(a,b){var u,t
u=this.d
if(u>0){--u
this.d=u
if(u<=0)u=this.c!=null
else u=!1
if(u){t=this.c
this.c=null
this.G(t)}}},
aV:function(){return this.ii(!0,!1)},
sai:function(a){this.a=H.l(a,"$ib",[{func:1,ret:-1,args:[D.v]}],"$ab")},
sb_:function(a){this.b=H.l(a,"$ib",[{func:1,ret:-1,args:[D.v]}],"$ab")}}
D.ep.prototype={
$1:function(a){var u
H.i(a,{func:1,ret:-1,args:[D.v]})
u=this.a.a
u.b
a.$1(u)},
$S:25}
D.eq.prototype={
$1:function(a){var u
H.i(a,{func:1,ret:-1,args:[D.v]})
u=this.a.a
u.b
a.$1(u)},
$S:25}
D.v.prototype={}
D.cP.prototype={}
D.cQ.prototype={}
D.H.prototype={
i:function(a){return"ValueChanged: "+this.c+", "+H.f(this.d)+" => "+H.f(this.e)}}
X.cD.prototype={
t:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.cD))return!1
if(this.a!=b.a)return!1
if(!this.b.t(0,b.b))return!1
return!0},
i:function(a){return this.b.i(0)+H.f(this.a)}}
X.cW.prototype={
t:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.cW))return!1
if(this.a!=b.a)return!1
if(!this.b.t(0,b.b))return!1
return!0},
i:function(a){return this.b.i(0)+H.f(this.a)}}
X.eH.prototype={
i7:function(a){this.c=a.b
this.d.h(0,a.a)
return!1},
i3:function(a){this.c=a.b
this.d.S(0,a.a)
return!1},
sfA:function(a){this.d=H.l(a,"$ijP",[P.k],"$ajP")}}
X.d_.prototype={}
X.eN.prototype={
aH:function(a,b){var u,t,s,r,q,p,o,n
u=new P.a8(Date.now(),!1)
t=this.x
s=b.a
r=this.Q
if(typeof s!=="number")return s.q()
q=b.b
p=this.ch
if(typeof q!=="number")return q.q()
o=new V.a5(t.a+s*r,t.b+q*p)
p=this.a.gaz()
n=new X.aO(a,V.b3(),this.x,this.y,this.z,p,o,u,this)
n.b=!0
this.z=u
this.x=o
return n},
c0:function(a,b){this.r=a.a
return!1},
aT:function(a,b){var u,t
u=this.r
t=a.a
if(typeof t!=="number")return t.dU()
if(typeof u!=="number")return u.be()
this.r=(u&~t)>>>0
return!1},
aS:function(a,b){var u=this.d
if(u==null)return!1
u.G(this.aH(a,b))
return!0},
i8:function(a){var u,t,s,r,q,p,o,n
u=this.e
if(u==null)return!1
t=this.a.gaz()
s=this.x
r=Date.now()
q=a.a
p=this.cx
if(typeof q!=="number")return q.q()
o=a.b
n=this.cy
if(typeof o!=="number")return o.q()
r=new X.bX(new V.I(q*p,o*n),t,s,new P.a8(r,!1),this)
r.b=!0
u.G(r)
return!0},
fd:function(a,b,c){var u,t,s
if(this.f==null)return
u=new P.a8(Date.now(),!1)
t=this.f
s=new X.d_(c,a,this.a.gaz(),b,u,this)
s.b=!0
t.G(s)
this.y=u
this.x=V.b3()}}
X.ai.prototype={
t:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.ai))return!1
if(this.a!==b.a)return!1
if(this.b!=b.b)return!1
if(this.c!=b.c)return!1
return!0},
i:function(a){var u=this.a?"Ctrl+":""
u+=this.b?"Alt+":""
return u+(this.c?"Shift+":"")}}
X.aO.prototype={}
X.eV.prototype={
br:function(a,b,c){var u,t,s
u=new P.a8(Date.now(),!1)
t=this.a.gaz()
s=new X.aO(a,this.r,this.x,this.y,this.z,t,b,u,this)
s.b=!0
if(c){this.y=u
this.r=b}this.z=u
this.x=b
return s},
c0:function(a,b){var u
this.f=a.a
u=this.b
if(u==null)return!1
u.G(this.br(a,b,!0))
return!0},
aT:function(a,b){var u,t
u=this.f
t=a.a
if(typeof t!=="number")return t.dU()
if(typeof u!=="number")return u.be()
this.f=(u&~t)>>>0
u=this.c
if(u==null)return!1
u.G(this.br(a,b,!0))
return!0},
aS:function(a,b){var u=this.d
if(u==null)return!1
u.G(this.br(a,b,!1))
return!0},
i9:function(a,b){var u,t,s,r,q,p,o
u=this.e
if(u==null)return!1
t=this.a.gaz()
s=Date.now()
r=a.a
q=this.Q
if(typeof r!=="number")return r.q()
p=a.b
o=this.ch
if(typeof p!=="number")return p.q()
s=new X.bX(new V.I(r*q,p*o),t,b,new P.a8(s,!1),this)
s.b=!0
u.G(s)
return!0},
gd1:function(){var u=this.b
if(u==null){u=D.L()
this.b=u}return u},
gdF:function(){var u=this.c
if(u==null){u=D.L()
this.c=u}return u},
gdf:function(){var u=this.d
if(u==null){u=D.L()
this.d=u}return u}}
X.bX.prototype={}
X.f5.prototype={}
X.dn.prototype={}
X.fG.prototype={
aH:function(a,b){var u,t,s,r
H.l(a,"$ib",[V.a5],"$ab")
u=new P.a8(Date.now(),!1)
t=a.length>0?a[0]:V.b3()
s=this.a.gaz()
r=new X.dn(a,this.f,this.r,this.x,this.y,s,t,u,this)
r.b=!0
if(b){this.x=u
this.f=t}this.y=u
this.r=t
return r},
i6:function(a){var u
H.l(a,"$ib",[V.a5],"$ab")
u=this.b
if(u==null)return!1
u.G(this.aH(a,!0))
return!0},
i4:function(a){var u
H.l(a,"$ib",[V.a5],"$ab")
u=this.c
if(u==null)return!1
u.G(this.aH(a,!0))
return!0},
i5:function(a){var u
H.l(a,"$ib",[V.a5],"$ab")
u=this.d
if(u==null)return!1
u.G(this.aH(a,!1))
return!0}}
X.dv.prototype={
gaz:function(){var u=this.a
return V.jN(0,0,C.m.gcZ(u).c,C.m.gcZ(u).d)},
cu:function(a){var u,t
u=a.keyCode
t=a.ctrlKey||a.metaKey
return new X.cW(u,new X.ai(t,a.altKey,a.shiftKey))},
at:function(a){var u,t
u=this.b
t=a.ctrlKey||a.metaKey
u.c=new X.ai(t,a.altKey,a.shiftKey)},
bI:function(a){var u,t
u=this.b
t=a.ctrlKey||a.metaKey
u.c=new X.ai(t,a.altKey,a.shiftKey)},
aj:function(a){var u,t,s,r,q
u=this.a.getBoundingClientRect()
t=a.pageX
s=a.pageY
r=u.left
if(typeof t!=="number")return t.B()
q=u.top
if(typeof s!=="number")return s.B()
return new V.a5(t-r,s-q)},
aJ:function(a){return new V.I(a.movementX,a.movementY)},
bF:function(a){var u,t,s,r,q,p,o,n
u=this.a.getBoundingClientRect()
t=H.a([],[V.a5])
for(s=a.touches,r=s.length,q=0;q<s.length;s.length===r||(0,H.D)(s),++q){p=s[q]
o=C.e.a9(p.pageX)
C.e.a9(p.pageY)
n=u.left
C.e.a9(p.pageX)
C.a.h(t,new V.a5(o-n,C.e.a9(p.pageY)-u.top))}return t},
ah:function(a){var u,t
u=a.buttons
t=a.ctrlKey||a.metaKey
return new X.cD(u,new X.ai(t,a.altKey,a.shiftKey))},
bv:function(a){var u,t,s,r,q,p
u=this.a.getBoundingClientRect()
t=a.pageX
s=a.pageY
r=u.left
if(typeof t!=="number")return t.B()
q=t-r
if(q<0)return!1
t=u.top
if(typeof s!=="number")return s.B()
p=s-t
if(p<0)return!1
return q<u.width&&p<u.height},
f8:function(a){this.f=!0},
eX:function(a){this.f=!1},
f2:function(a){H.d(a,"$iR")
if(this.f&&this.bv(a))a.preventDefault()},
fc:function(a){var u
H.d(a,"$iaC")
if(!this.f)return
u=this.cu(a)
this.b.i7(u)},
fa:function(a){var u
H.d(a,"$iaC")
if(!this.f)return
u=this.cu(a)
this.b.i3(u)},
ff:function(a){var u,t,s,r
H.d(a,"$iR")
u=this.a
u.focus()
this.f=!0
this.at(a)
if(this.x){t=this.ah(a)
s=this.aJ(a)
if(this.d.c0(t,s))a.preventDefault()
return}if(this.r){this.y=a
u.requestPointerLock()
return}t=this.ah(a)
r=this.aj(a)
if(this.c.c0(t,r))a.preventDefault()},
fj:function(a){var u,t,s
H.d(a,"$iR")
this.at(a)
u=this.ah(a)
if(this.x){t=this.aJ(a)
if(this.d.aT(u,t))a.preventDefault()
return}if(this.r)return
s=this.aj(a)
if(this.c.aT(u,s))a.preventDefault()},
f6:function(a){var u,t,s
H.d(a,"$iR")
if(!this.bv(a)){this.at(a)
u=this.ah(a)
if(this.x){t=this.aJ(a)
if(this.d.aT(u,t))a.preventDefault()
return}if(this.r)return
s=this.aj(a)
if(this.c.aT(u,s))a.preventDefault()}},
fh:function(a){var u,t,s
H.d(a,"$iR")
this.at(a)
u=this.ah(a)
if(this.x){t=this.aJ(a)
if(this.d.aS(u,t))a.preventDefault()
return}if(this.r)return
s=this.aj(a)
if(this.c.aS(u,s))a.preventDefault()},
f4:function(a){var u,t,s
H.d(a,"$iR")
if(!this.bv(a)){this.at(a)
u=this.ah(a)
if(this.x){t=this.aJ(a)
if(this.d.aS(u,t))a.preventDefault()
return}if(this.r)return
s=this.aj(a)
if(this.c.aS(u,s))a.preventDefault()}},
fl:function(a){var u,t
H.d(a,"$iaH")
this.at(a)
u=new V.I((a&&C.K).ghs(a),C.K.ght(a)).D(0,180)
if(this.x){if(this.d.i8(u))a.preventDefault()
return}if(this.r)return
t=this.aj(a)
if(this.c.i9(u,t))a.preventDefault()},
fn:function(a){var u,t,s
u=document.pointerLockElement===this.a
if(u!==this.x){this.x=u
t=this.ah(this.y)
s=this.aj(this.y)
this.d.fd(t,s,u)}},
fz:function(a){var u
H.d(a,"$iaw")
this.a.focus()
this.f=!0
this.bI(a)
u=this.bF(a)
if(this.e.i6(u))a.preventDefault()},
ft:function(a){var u
H.d(a,"$iaw")
this.bI(a)
u=this.bF(a)
if(this.e.i4(u))a.preventDefault()},
fv:function(a){var u
H.d(a,"$iaw")
this.bI(a)
u=this.bF(a)
if(this.e.i5(u))a.preventDefault()},
sez:function(a){this.z=H.l(a,"$ib",[[P.c4,P.F]],"$ab")}}
V.be.prototype={
t:function(a,b){var u,t
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.be))return!1
u=b.a
t=$.K().a
if(!(Math.abs(u-this.a)<t))return!1
if(!(Math.abs(b.b-this.b)<t))return!1
if(!(Math.abs(b.c-this.c)<t))return!1
if(!(Math.abs(b.d-this.d)<t))return!1
return!0},
i:function(a){return"["+V.O(this.a,3,0)+", "+V.O(this.b,3,0)+", "+V.O(this.c,3,0)+", "+V.O(this.d,3,0)+"]"}}
V.en.prototype={}
V.b2.prototype={
c6:function(a,b){var u=H.a([this.a,this.e,this.y,this.cx,this.b,this.f,this.z,this.cy,this.c,this.r,this.Q,this.db,this.d,this.x,this.ch,this.dx],[P.w])
return u},
q:function(b1,b2){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0
u=this.a
t=b2.a
s=this.b
r=b2.e
q=this.c
p=b2.y
if(typeof p!=="number")return H.r(p)
o=this.d
n=b2.cx
m=b2.b
l=b2.f
k=b2.z
if(typeof k!=="number")return H.r(k)
j=b2.cy
i=b2.c
h=b2.r
g=b2.Q
if(typeof g!=="number")return H.r(g)
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
if(typeof a3!=="number")return a3.q()
a4=this.z
if(typeof a4!=="number")return a4.q()
a5=this.Q
if(typeof a5!=="number")return a5.q()
a6=this.ch
a7=this.cx
a8=this.cy
a9=this.db
b0=this.dx
return V.aN(u*t+s*r+q*p+o*n,u*m+s*l+q*k+o*j,u*i+s*h+q*g+o*f,u*e+s*d+q*c+o*b,a*t+a0*r+a1*p+a2*n,a*m+a0*l+a1*k+a2*j,a*i+a0*h+a1*g+a2*f,a*e+a0*d+a1*c+a2*b,a3*t+a4*r+a5*p+a6*n,a3*m+a4*l+a5*k+a6*j,a3*i+a4*h+a5*g+a6*f,a3*e+a4*d+a5*c+a6*b,a7*t+a8*r+a9*p+b0*n,a7*m+a8*l+a9*k+b0*j,a7*i+a8*h+a9*g+b0*f,a7*e+a8*d+a9*c+b0*b)},
t:function(a,b){var u,t,s,r
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.b2))return!1
u=b.a
t=$.K()
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
if(typeof u!=="number")return u.B()
if(typeof r!=="number")return H.r(r)
if(!(Math.abs(u-r)<s))return!1
u=b.z
t=this.z
if(typeof u!=="number")return u.B()
if(typeof t!=="number")return H.r(t)
if(!(Math.abs(u-t)<s))return!1
u=b.Q
t=this.Q
if(typeof u!=="number")return u.B()
if(typeof t!=="number")return H.r(t)
if(!(Math.abs(u-t)<s))return!1
if(!(Math.abs(b.ch-this.ch)<s))return!1
if(!(Math.abs(b.cx-this.cx)<s))return!1
if(!(Math.abs(b.cy-this.cy)<s))return!1
if(!(Math.abs(b.db-this.db)<s))return!1
if(!(Math.abs(b.dx-this.dx)<s))return!1
return!0},
i:function(a){return this.O()},
d5:function(a,b,c){var u,t,s,r,q,p,o,n,m,l
u=[P.w]
t=V.ii(H.a([this.a,this.e,this.y,this.cx],u),b,c)
s=V.ii(H.a([this.b,this.f,this.z,this.cy],u),b,c)
r=V.ii(H.a([this.c,this.r,this.Q,this.db],u),b,c)
q=V.ii(H.a([this.d,this.x,this.ch,this.dx],u),b,c)
u=t.length
if(0>=u)return H.h(t,0)
p="["+t[0]+", "
o=s.length
if(0>=o)return H.h(s,0)
p=p+s[0]+", "
n=r.length
if(0>=n)return H.h(r,0)
p=p+r[0]+", "
m=q.length
if(0>=m)return H.h(q,0)
p=p+q[0]+",\n"
l=a+" "
if(1>=u)return H.h(t,1)
l=l+t[1]+", "
if(1>=o)return H.h(s,1)
l=l+s[1]+", "
if(1>=n)return H.h(r,1)
l=l+r[1]+", "
if(1>=m)return H.h(q,1)
l=p+(l+q[1]+",\n")
p=a+" "
if(2>=u)return H.h(t,2)
p=p+t[2]+", "
if(2>=o)return H.h(s,2)
p=p+s[2]+", "
if(2>=n)return H.h(r,2)
p=p+r[2]+", "
if(2>=m)return H.h(q,2)
p=l+(p+q[2]+",\n")
l=a+" "
if(3>=u)return H.h(t,3)
l=l+t[3]+", "
if(3>=o)return H.h(s,3)
l=l+s[3]+", "
if(3>=n)return H.h(r,3)
l=l+r[3]+", "
if(3>=m)return H.h(q,3)
return p+(l+q[3]+"]")},
O:function(){return this.d5("",3,0)},
A:function(a){return this.d5(a,3,0)}}
V.a5.prototype={
B:function(a,b){return new V.a5(this.a-b.a,this.b-b.b)},
t:function(a,b){var u,t
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.a5))return!1
u=b.a
t=$.K().a
if(!(Math.abs(u-this.a)<t))return!1
if(!(Math.abs(b.b-this.b)<t))return!1
return!0},
i:function(a){return"["+V.O(this.a,3,0)+", "+V.O(this.b,3,0)+"]"}}
V.b4.prototype={
B:function(a,b){var u,t
u=this.c
t=b.c
if(typeof u!=="number")return u.B()
if(typeof t!=="number")return H.r(t)
return new V.b4(this.a-b.a,this.b-b.b,u-t)},
t:function(a,b){var u,t,s,r
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.b4))return!1
u=b.a
t=$.K()
s=t.a
if(!(Math.abs(u-this.a)<s))return!1
if(!(Math.abs(b.b-this.b)<s))return!1
u=b.c
r=this.c
t.toString
if(typeof u!=="number")return u.B()
if(typeof r!=="number")return H.r(r)
if(!(Math.abs(u-r)<s))return!1
return!0},
i:function(a){return"["+V.O(this.a,3,0)+", "+V.O(this.b,3,0)+", "+V.O(this.c,3,0)+"]"}}
V.d8.prototype={
t:function(a,b){var u,t
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.d8))return!1
u=b.a
t=$.K().a
if(!(Math.abs(u-this.a)<t))return!1
if(!(Math.abs(b.b-this.b)<t))return!1
if(!(Math.abs(b.c-this.c)<t))return!1
if(!(Math.abs(b.d-this.d)<t))return!1
return!0},
i:function(a){return"["+V.O(this.a,3,0)+", "+V.O(this.b,3,0)+", "+V.O(this.c,3,0)+", "+V.O(this.d,3,0)+"]"}}
V.db.prototype={
ga2:function(){var u,t
u=this.c
t=this.d
if(u>t)return t
else return u},
t:function(a,b){var u,t
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.db))return!1
u=b.a
t=$.K().a
if(!(Math.abs(u-this.a)<t))return!1
if(!(Math.abs(b.b-this.b)<t))return!1
if(!(Math.abs(b.c-this.c)<t))return!1
if(!(Math.abs(b.d-this.d)<t))return!1
return!0},
i:function(a){return"["+V.O(this.a,3,0)+", "+V.O(this.b,3,0)+", "+V.O(this.c,3,0)+", "+V.O(this.d,3,0)+"]"}}
V.I.prototype={
bX:function(a){return Math.sqrt(this.I(this))},
I:function(a){var u,t,s,r
u=this.a
t=a.a
if(typeof u!=="number")return u.q()
if(typeof t!=="number")return H.r(t)
s=this.b
r=a.b
if(typeof s!=="number")return s.q()
if(typeof r!=="number")return H.r(r)
return u*t+s*r},
q:function(a,b){var u,t
u=this.a
if(typeof u!=="number")return u.q()
t=this.b
if(typeof t!=="number")return t.q()
return new V.I(u*b,t*b)},
D:function(a,b){var u,t
if(Math.abs(b-0)<$.K().a){u=$.jZ
if(u==null){u=new V.I(0,0)
$.jZ=u}return u}u=this.a
if(typeof u!=="number")return u.D()
t=this.b
if(typeof t!=="number")return t.D()
return new V.I(u/b,t/b)},
t:function(a,b){var u,t,s
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.I))return!1
u=b.a
t=this.a
s=$.K()
s.toString
if(typeof u!=="number")return u.B()
if(typeof t!=="number")return H.r(t)
s=s.a
if(!(Math.abs(u-t)<s))return!1
u=b.b
t=this.b
if(typeof u!=="number")return u.B()
if(typeof t!=="number")return H.r(t)
if(!(Math.abs(u-t)<s))return!1
return!0},
i:function(a){return"["+V.O(this.a,3,0)+", "+V.O(this.b,3,0)+"]"}}
V.a_.prototype={
bX:function(a){return Math.sqrt(this.I(this))},
I:function(a){var u,t
u=this.c
t=a.c
if(typeof u!=="number")return u.q()
if(typeof t!=="number")return H.r(t)
return this.a*a.a+this.b*a.b+u*t},
aO:function(a){var u,t,s,r,q,p
u=this.b
t=a.c
if(typeof t!=="number")return H.r(t)
s=this.c
r=a.b
if(typeof s!=="number")return s.q()
q=a.a
p=this.a
return new V.a_(u*t-s*r,s*q-p*t,p*r-u*q)},
H:function(a,b){var u,t
u=this.c
t=b.c
if(typeof u!=="number")return u.H()
if(typeof t!=="number")return H.r(t)
return new V.a_(this.a+b.a,this.b+b.b,u+t)},
M:function(a){var u=this.c
if(typeof u!=="number")return u.M()
return new V.a_(-this.a,-this.b,-u)},
D:function(a,b){var u
if(Math.abs(b-0)<$.K().a)return V.dz()
u=this.c
if(typeof u!=="number")return u.D()
return new V.a_(this.a/b,this.b/b,u/b)},
de:function(){var u,t,s
u=$.K()
t=u.a
if(!(Math.abs(0-this.a)<t))return!1
if(!(Math.abs(0-this.b)<t))return!1
s=this.c
u.toString
if(typeof s!=="number")return H.r(s)
if(!(Math.abs(0-s)<t))return!1
return!0},
t:function(a,b){var u,t,s,r
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.a_))return!1
u=b.a
t=$.K()
s=t.a
if(!(Math.abs(u-this.a)<s))return!1
if(!(Math.abs(b.b-this.b)<s))return!1
u=b.c
r=this.c
t.toString
if(typeof u!=="number")return u.B()
if(typeof r!=="number")return H.r(r)
if(!(Math.abs(u-r)<s))return!1
return!0},
i:function(a){return"["+V.O(this.a,3,0)+", "+V.O(this.b,3,0)+", "+V.O(this.c,3,0)+"]"}}
U.ea.prototype={
bn:function(a){var u=V.mV(a,this.c,this.b)
return u},
gv:function(){var u=this.y
if(u==null){u=D.L()
this.y=u}return u},
L:function(a){var u=this.y
if(u!=null)u.G(a)},
sc7:function(a,b){},
sbY:function(a){var u,t
u=this.b
if(!(Math.abs(u-a)<$.K().a)){this.b=a
if(a<this.c){this.c=a
this.d=a}else{t=this.d
if(a<t)this.d=this.bn(t)}u=new D.H("maximumLocation",u,this.b,this,[P.w])
u.b=!0
this.L(u)}},
sc_:function(a){var u,t
u=this.c
if(!(Math.abs(u-a)<$.K().a)){this.c=a
if(this.b<a){this.b=a
this.d=a}else{t=this.d
if(a>t)this.d=this.bn(t)}u=new D.H("minimumLocation",u,this.c,this,[P.w])
u.b=!0
this.L(u)}},
sa1:function(a,b){var u
b=this.bn(b)
u=this.d
if(!(Math.abs(u-b)<$.K().a)){this.d=b
u=new D.H("location",u,b,this,[P.w])
u.b=!0
this.L(u)}},
sbZ:function(a){var u,t,s
u=this.e
if(!(Math.abs(u-a)<$.K().a)){this.e=a
t=this.f
s=-a
if(t<s)t=s
else if(t>a)t=a
this.f=t
u=new D.H("maximumVelocity",u,a,this,[P.w])
u.b=!0
this.L(u)}},
sR:function(a){var u,t
u=this.e
t=-u
if(a<t)a=t
else if(a>u)a=u
u=this.f
if(!(Math.abs(u-a)<$.K().a)){this.f=a
u=new D.H("velocity",u,a,this,[P.w])
u.b=!0
this.L(u)}},
sbS:function(a){var u
if(a<0)a=0
else if(a>1)a=1
u=this.x
if(!(Math.abs(u-a)<$.K().a)){this.x=a
u=new D.H("dampening",u,a,this,[P.w])
u.b=!0
this.L(u)}},
aC:function(a){var u,t,s,r,q
u=this.f
t=$.K().a
if(!(Math.abs(u-0)<t)||!(Math.abs(this.r-0)<t)){s=u+this.r*a
u=this.e
r=-u
if(s<r)s=r
else if(s>u)s=u
this.sa1(0,this.d+s*a)
u=this.x
if(!(Math.abs(u-0)<$.K().a)){q=s*Math.pow(1-u,a)
if(s<0){if(q<s)q=s
else if(q>0)q=0}else if(q<0)q=0
else if(q>s)q=s
s=q}this.sR(s)}}}
U.cF.prototype={
gv:function(){var u=this.b
if(u==null){u=D.L()
this.b=u}return u},
aD:function(a,b){return this.a},
t:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.cF))return!1
return J.U(this.a,b.a)},
i:function(a){return"Constant: "+this.a.A("          ")}}
U.bS.prototype={
gv:function(){var u=this.e
if(u==null){u=D.L()
this.e=u}return u},
L:function(a){var u
H.d(a,"$iv")
u=this.e
if(u!=null)u.G(a)},
Y:function(){return this.L(null)},
eV:function(a,b){var u,t,s,r,q,p,o,n
u=U.a1
H.l(b,"$io",[u],"$ao")
for(t=b.length,s=this.gas(),r={func:1,ret:-1,args:[D.v]},q=[r],p=0;p<b.length;b.length===t||(0,H.D)(b),++p){o=b[p]
if(o!=null){n=o.gv()
n.toString
H.i(s,r)
if(n.a==null)n.sai(H.a([],q))
n=n.a;(n&&C.a).h(n,s)}}u=new D.cP(a,b,this,[u])
u.b=!0
this.L(u)},
fq:function(a,b){var u,t,s
u=U.a1
H.l(b,"$io",[u],"$ao")
for(t=b.gP(b),s=this.gas();t.w();)t.gF().gv().S(0,s)
u=new D.cQ(a,b,this,[u])
u.b=!0
this.L(u)},
aD:function(a,b){var u,t,s,r
u=this.r
t=a.e
if(typeof u!=="number")return u.T()
if(u<t){this.r=t
u=this.e
if(u!=null)++u.d
for(u=this.a,u=new J.af(u,u.length,0,[H.p(u,0)]),s=null;u.w();){t=u.d
if(t!=null){r=t.aD(a,b)
if(r!=null)s=s==null?r:r.q(0,s)}}this.f=s==null?V.eU():s
u=this.e
if(u!=null)u.aV()}return this.f},
t:function(a,b){var u,t,s,r
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.bS))return!1
u=this.a.length
for(t=0;t<u;++t){s=this.a
if(t>=s.length)return H.h(s,t)
s=s[t]
r=b.a
if(t>=r.length)return H.h(r,t)
if(!J.U(s,r[t]))return!1}return!0},
i:function(a){return"Group"},
$ao:function(){return[U.a1]},
$aX:function(){return[U.a1]},
$ia1:1}
U.a1.prototype={}
U.dw.prototype={
gv:function(){var u=this.cy
if(u==null){u=D.L()
this.cy=u}return u},
L:function(a){var u
H.d(a,"$iv")
u=this.cy
if(u!=null)u.G(a)},
Y:function(){return this.L(null)},
aM:function(a){if(this.a!=null)return!1
this.a=a
a.c.gd1().h(0,this.gbw())
this.a.c.gdf().h(0,this.gby())
this.a.c.gdF().h(0,this.gbA())
return!0},
bx:function(a){H.d(a,"$iv")
if(!J.U(this.c,this.a.b.c))return
this.y=!0
this.x=!0
this.z=this.b.d},
bz:function(a){var u,t,s,r,q,p,o
a=H.ak(H.d(a,"$iv"),"$iaO")
if(!this.y)return
if(this.x){u=a.d.B(0,a.y)
u=new V.I(u.a,u.b)
u=u.I(u)
t=this.r
if(typeof t!=="number")return H.r(t)
if(u<t)return
this.x=!1}if(this.d){u=a.c
t=a.d.B(0,a.y)
u=new V.I(t.a,t.b).q(0,2).D(0,u.ga2())
this.Q=u
t=this.b
u=u.a
if(typeof u!=="number")return u.q()
s=this.e
if(typeof s!=="number")return H.r(s)
t.sR(u*10*s)}else{u=a.c
t=a.d
s=t.B(0,a.y)
r=new V.I(s.a,s.b).q(0,2).D(0,u.ga2())
s=this.b
q=r.a
if(typeof q!=="number")return q.M()
p=this.e
if(typeof p!=="number")return H.r(p)
o=this.z
if(typeof o!=="number")return H.r(o)
s.sa1(0,-q*p+o)
this.b.sR(0)
t=t.B(0,a.z)
this.Q=new V.I(t.a,t.b).q(0,2).D(0,u.ga2())}this.Y()},
bB:function(a){var u,t,s
H.d(a,"$iv")
if(!this.y)return
this.y=!1
if(this.x)return
u=this.Q
if(u.I(u)>0.0001){u=this.b
t=this.Q.a
if(typeof t!=="number")return t.q()
s=this.e
if(typeof s!=="number")return H.r(s)
u.sR(t*10*s)
this.Y()}},
aD:function(a,b){var u,t,s,r,q
u=this.ch
t=a.e
if(typeof u!=="number")return u.T()
if(u<t){this.ch=t
s=a.y
this.b.aC(s)
u=this.b.d
r=Math.cos(u)
q=Math.sin(u)
this.cx=V.aN(r,-q,0,0,q,r,0,0,0,0,1,0,0,0,0,1)}return this.cx},
$ia1:1}
U.dx.prototype={
gv:function(){var u=this.fx
if(u==null){u=D.L()
this.fx=u}return u},
L:function(a){var u
H.d(a,"$iv")
u=this.fx
if(u!=null)u.G(a)},
Y:function(){return this.L(null)},
aM:function(a){var u,t
if(this.a!=null)return!1
this.a=a
a.c.gd1().h(0,this.gbw())
this.a.c.gdf().h(0,this.gby())
this.a.c.gdF().h(0,this.gbA())
u=this.a.d
t=u.f
if(t==null){t=D.L()
u.f=t
u=t}else u=t
u.h(0,this.geO())
u=this.a.d
t=u.d
if(t==null){t=D.L()
u.d=t
u=t}else u=t
u.h(0,this.geQ())
u=this.a.e
t=u.b
if(t==null){t=D.L()
u.b=t
u=t}else u=t
u.h(0,this.gh1())
u=this.a.e
t=u.d
if(t==null){t=D.L()
u.d=t
u=t}else u=t
u.h(0,this.gh_())
u=this.a.e
t=u.c
if(t==null){t=D.L()
u.c=t
u=t}else u=t
u.h(0,this.gfY())
return!0},
aa:function(a){var u,t
u=a.a
t=a.b
if(this.f){if(typeof u!=="number")return u.M()
u=-u}if(this.r){if(typeof t!=="number")return t.M()
t=-t}return new V.I(u,t)},
bx:function(a){a=H.ak(H.d(a,"$iv"),"$iaO")
if(!J.U(this.d,a.x.b))return
this.cx=!0
this.ch=!0
this.cy=this.c.d
this.db=this.b.d},
bz:function(a){var u,t,s,r,q,p,o
a=H.ak(H.d(a,"$iv"),"$iaO")
if(!this.cx)return
if(this.ch){u=a.d.B(0,a.y)
u=new V.I(u.a,u.b)
u=u.I(u)
t=this.Q
if(typeof t!=="number")return H.r(t)
if(u<t)return
this.ch=!1}if(this.e){u=a.c
t=a.d.B(0,a.y)
u=this.aa(new V.I(t.a,t.b).q(0,2).D(0,u.ga2()))
this.dx=u
t=this.c
u=u.a
if(typeof u!=="number")return u.M()
s=this.y
if(typeof s!=="number")return H.r(s)
t.sR(-u*10*s)
s=this.b
u=this.dx.b
if(typeof u!=="number")return u.M()
t=this.x
if(typeof t!=="number")return H.r(t)
s.sR(-u*10*t)}else{u=a.c
t=a.d
s=t.B(0,a.y)
r=this.aa(new V.I(s.a,s.b).q(0,2).D(0,u.ga2()))
s=this.c
q=r.a
if(typeof q!=="number")return q.M()
p=this.y
if(typeof p!=="number")return H.r(p)
o=this.cy
if(typeof o!=="number")return H.r(o)
s.sa1(0,-q*p+o)
o=this.b
p=r.b
if(typeof p!=="number")return p.M()
q=this.x
if(typeof q!=="number")return H.r(q)
s=this.db
if(typeof s!=="number")return H.r(s)
o.sa1(0,-p*q+s)
this.b.sR(0)
this.c.sR(0)
t=t.B(0,a.z)
this.dx=this.aa(new V.I(t.a,t.b).q(0,2).D(0,u.ga2()))}this.Y()},
bB:function(a){var u,t,s
H.d(a,"$iv")
if(!this.cx)return
this.cx=!1
if(this.ch)return
u=this.dx
if(u.I(u)>0.0001){u=this.c
t=this.dx.a
if(typeof t!=="number")return t.M()
s=this.y
if(typeof s!=="number")return H.r(s)
u.sR(-t*10*s)
s=this.b
t=this.dx.b
if(typeof t!=="number")return t.M()
u=this.x
if(typeof u!=="number")return H.r(u)
s.sR(-t*10*u)
this.Y()}},
eP:function(a){if(H.ak(H.d(a,"$iv"),"$id_").x){this.ch=!0
this.cy=this.c.d
this.db=this.b.d}},
eR:function(a){var u,t,s,r,q,p,o
a=H.ak(H.d(a,"$iv"),"$iaO")
if(!J.U(this.d,a.x.b))return
u=a.c
t=a.d
s=t.B(0,a.y)
r=this.aa(new V.I(s.a,s.b).q(0,2).D(0,u.ga2()))
s=this.c
q=r.a
if(typeof q!=="number")return q.M()
p=this.y
if(typeof p!=="number")return H.r(p)
o=this.cy
if(typeof o!=="number")return H.r(o)
s.sa1(0,-q*p+o)
o=this.b
p=r.b
if(typeof p!=="number")return p.M()
q=this.x
if(typeof q!=="number")return H.r(q)
s=this.db
if(typeof s!=="number")return H.r(s)
o.sa1(0,-p*q+s)
this.b.sR(0)
this.c.sR(0)
t=t.B(0,a.z)
this.dx=this.aa(new V.I(t.a,t.b).q(0,2).D(0,u.ga2()))
this.Y()},
h2:function(a){H.d(a,"$iv")
this.cx=!0
this.ch=!0
this.cy=this.c.d
this.db=this.b.d},
h0:function(a){var u,t,s,r,q,p,o
a=H.ak(H.d(a,"$iv"),"$idn")
if(!this.cx)return
if(this.ch){u=a.d.B(0,a.y)
u=new V.I(u.a,u.b)
u=u.I(u)
t=this.Q
if(typeof t!=="number")return H.r(t)
if(u<t)return
this.ch=!1}if(this.e){u=a.c
t=a.d.B(0,a.y)
u=this.aa(new V.I(t.a,t.b).q(0,2).D(0,u.ga2()))
this.dx=u
t=this.c
u=u.a
if(typeof u!=="number")return u.M()
s=this.y
if(typeof s!=="number")return H.r(s)
t.sR(-u*10*s)
s=this.b
u=this.dx.b
if(typeof u!=="number")return u.M()
t=this.x
if(typeof t!=="number")return H.r(t)
s.sR(-u*10*t)}else{u=a.c
t=a.d
s=t.B(0,a.y)
r=this.aa(new V.I(s.a,s.b).q(0,2).D(0,u.ga2()))
s=this.c
q=r.a
if(typeof q!=="number")return q.M()
p=this.y
if(typeof p!=="number")return H.r(p)
o=this.cy
if(typeof o!=="number")return H.r(o)
s.sa1(0,-q*p+o)
o=this.b
p=r.b
if(typeof p!=="number")return p.M()
q=this.x
if(typeof q!=="number")return H.r(q)
s=this.db
if(typeof s!=="number")return H.r(s)
o.sa1(0,-p*q+s)
this.b.sR(0)
this.c.sR(0)
t=t.B(0,a.z)
this.dx=this.aa(new V.I(t.a,t.b).q(0,2).D(0,u.ga2()))}this.Y()},
fZ:function(a){var u,t,s
H.d(a,"$iv")
if(!this.cx)return
this.cx=!1
if(this.ch)return
u=this.dx
if(u.I(u)>0.0001){u=this.c
t=this.dx.a
if(typeof t!=="number")return t.M()
s=this.y
if(typeof s!=="number")return H.r(s)
u.sR(-t*10*s)
s=this.b
t=this.dx.b
if(typeof t!=="number")return t.M()
u=this.x
if(typeof u!=="number")return H.r(u)
s.sR(-t*10*u)
this.Y()}},
aD:function(a,b){var u,t,s,r,q
u=this.dy
t=a.e
if(typeof u!=="number")return u.T()
if(u<t){this.dy=t
s=a.y
this.c.aC(s)
this.b.aC(s)
u=this.b.d
r=Math.cos(u)
q=Math.sin(u)
u=V.aN(1,0,0,0,0,r,-q,0,0,q,r,0,0,0,0,1)
t=this.c.d
r=Math.cos(t)
q=Math.sin(t)
this.fr=u.q(0,V.aN(r,0,-q,0,0,1,0,0,q,0,r,0,0,0,0,1))}return this.fr},
$ia1:1}
U.dy.prototype={
gv:function(){var u=this.r
if(u==null){u=D.L()
this.r=u}return u},
L:function(a){var u=this.r
if(u!=null)u.G(a)},
aM:function(a){var u,t,s
if(this.a!=null)return!1
this.a=a
u=a.c
t=u.e
if(t==null){t=D.L()
u.e=t
u=t}else u=t
t=this.geS()
u.h(0,t)
u=this.a.d
s=u.e
if(s==null){s=D.L()
u.e=s
u=s}else u=s
u.h(0,t)
return!0},
eT:function(a){var u,t,s,r
H.d(a,"$iv")
if(!J.U(this.b,this.a.b.c))return
H.ak(a,"$ibX")
u=this.d
t=a.x.b
s=this.c
if(typeof t!=="number")return t.q()
r=u+t*s
if(u!==r){this.d=r
u=new D.H("zoom",u,r,this,[P.w])
u.b=!0
this.L(u)}},
aD:function(a,b){var u,t,s
u=this.e
t=a.e
if(u<t){this.e=t
s=Math.pow(10,this.d)
this.f=V.aN(s,0,0,0,0,s,0,0,0,0,s,0,0,0,0,1)}return this.f},
$ia1:1}
M.cJ.prototype={
ap:function(a){var u
H.d(a,"$iv")
u=this.x
if(u!=null)u.G(a)},
ef:function(){return this.ap(null)},
eZ:function(a,b){var u,t,s,r,q,p,o,n
u=E.a9
H.l(b,"$io",[u],"$ao")
for(t=b.length,s=this.gao(),r={func:1,ret:-1,args:[D.v]},q=[r],p=0;p<b.length;b.length===t||(0,H.D)(b),++p){o=b[p]
if(o!=null){n=o.z
if(n==null){n=new D.bQ()
n.sai(null)
n.sb_(null)
n.c=null
n.d=0
o.z=n}H.i(s,r)
if(n.a==null)n.sai(H.a([],q))
n=n.a;(n&&C.a).h(n,s)}}u=new D.cP(a,b,this,[u])
u.b=!0
this.ap(u)},
f0:function(a,b){var u,t,s
u=E.a9
H.l(b,"$io",[u],"$ao")
for(t=b.gP(b),s=this.gao();t.w();)t.gF().gv().S(0,s)
u=new D.cQ(a,b,this,[u])
u.b=!0
this.ap(u)},
gv:function(){var u=this.x
if(u==null){u=D.L()
this.x=u}return u},
aA:function(a1){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0
a1.du(this.c)
u=this.b
u.toString
t=a1.a
C.c.hd(t,36160,null)
C.c.d2(t,2884)
C.c.d2(t,2929)
C.c.hu(t,513)
s=t.drawingBufferWidth
r=t.drawingBufferHeight
q=u.r
p=q.a
if(typeof s!=="number")return H.r(s)
o=C.e.a9(p*s)
p=q.b
if(typeof r!=="number")return H.r(r)
n=C.e.a9(p*r)
p=C.e.a9(q.c*s)
a1.c=p
q=C.e.a9(q.d*r)
a1.d=q
C.c.iz(t,o,n,p,q)
C.c.hh(t,u.c)
u=u.a
C.c.hg(t,u.a,u.b,u.c,u.d)
C.c.hf(t,16640)
u=this.a
t=a1.c
q=a1.d
p=u.c
m=u.d
l=u.e
k=l-m
j=1/Math.tan(p*0.5)
i=V.aN(-j/(t/q),0,0,0,0,j,0,0,0,0,l/k,-l*m/k,0,0,1,0)
u.a
a1.cy.dt(i)
t=$.jI
if(t==null){t=$.jK
if(t==null){t=new V.b4(0,0,0)
$.jK=t}q=$.k0
if(q==null){q=new V.a_(0,1,0)
$.k0=q}p=$.k_
if(p==null){p=new V.a_(0,0,-1)
$.k_=p}h=p.D(0,Math.sqrt(p.I(p)))
q=q.aO(h)
g=q.D(0,Math.sqrt(q.I(q)))
f=h.aO(g)
e=new V.a_(t.a,t.b,t.c)
d=g.M(0).I(e)
c=f.M(0).I(e)
b=h.M(0).I(e)
t=V.aN(g.a,f.a,h.a,d,g.b,f.b,h.b,c,g.c,f.c,h.c,b,0,0,0,1)
$.jI=t
a=t}else a=t
u=u.b
if(u!=null){a0=u.a
if(a0!=null)a=a0.q(0,a)}a1.db.dt(a)
for(u=this.d.a,u=new J.af(u,u.length,0,[H.p(u,0)]);u.w();)u.d.aC(a1)
for(u=this.d.a,u=new J.af(u,u.length,0,[H.p(u,0)]);u.w();)u.d.aA(a1)
this.a.toString
a1.cy.c1()
a1.db.c1()
this.b.toString
a1.ds()},
ser:function(a,b){this.d=H.l(b,"$iX",[E.a9],"$aX")},
$in2:1}
A.cy.prototype={}
A.e2.prototype={
n:function(a,b){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<t;++s){r=u[s]
if(r.b===b)return r}return},
hA:function(){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<u.length;u.length===t||(0,H.D)(u),++s){r=u[s]
C.c.d3(r.a,r.c)}},
hv:function(){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<u.length;u.length===t||(0,H.D)(u),++s){r=u[s]
C.c.d0(r.a,r.c)}}}
A.c1.prototype={
e9:function(a,b){this.c=null
this.d=null
this.e=null
this.f=null
this.r=null
this.x=null
this.y=null},
cv:function(a,b){var u,t,s
u=this.a
t=C.c.ho(u,b)
C.c.e_(u,t,a)
C.c.hi(u,t)
if(!H.j7(C.c.dR(u,t,35713))){s=C.c.dQ(u,t)
C.c.hr(u,t)
throw H.c(P.a4("Error compiling shader '"+H.f(t)+"': "+H.f(s)))}return t},
fN:function(){var u,t,s,r,q,p
u=H.a([],[A.cy])
t=this.a
s=H.T(C.c.bh(t,this.r,35721))
if(typeof s!=="number")return H.r(s)
r=0
for(;r<s;++r){q=C.c.dK(t,this.r,r)
p=C.c.dM(t,this.r,q.name)
C.a.h(u,new A.cy(t,q.name,p))}this.x=new A.e2(u)},
fP:function(){var u,t,s,r,q,p
u=H.a([],[A.dp])
t=this.a
s=H.T(C.c.bh(t,this.r,35718))
if(typeof s!=="number")return H.r(s)
r=0
for(;r<s;++r){q=C.c.dL(t,this.r,r)
p=C.c.dS(t,this.r,q.name)
C.a.h(u,this.hp(q.type,q.size,q.name,p))}this.y=new A.fT(u)},
ar:function(a,b,c){var u,t
u=this.a
t=this.r
if(a===1)return new A.fL(u,t,b,c)
else return A.iW(u,t,b,a,c)},
ev:function(a,b,c){var u,t
u=this.a
t=this.r
if(a===1)return new A.ds(u,t,b,c)
else return A.iW(u,t,b,a,c)},
ew:function(a,b,c){var u,t
u=this.a
t=this.r
if(a===1)return new A.fW(u,t,b,c)
else return A.iW(u,t,b,a,c)},
b2:function(a,b){return new P.dE(a+" uniform variables are unsupported by all browsers.\n"+("Please change the type of "+H.f(b)+"."))},
hp:function(a,b,c,d){switch(a){case 5120:return this.ar(b,c,d)
case 5121:return this.ar(b,c,d)
case 5122:return this.ar(b,c,d)
case 5123:return this.ar(b,c,d)
case 5124:return this.ar(b,c,d)
case 5125:return this.ar(b,c,d)
case 5126:return new A.dq(this.a,this.r,c,d)
case 35664:return new A.fN(this.a,this.r,c,d)
case 35665:return new A.fP(this.a,this.r,c,d)
case 35666:return new A.fR(this.a,this.r,c,d)
case 35667:return new A.fO(this.a,this.r,c,d)
case 35668:return new A.fQ(this.a,this.r,c,d)
case 35669:return new A.fS(this.a,this.r,c,d)
case 35674:return new A.fU(this.a,this.r,c,d)
case 35675:return new A.fV(this.a,this.r,c,d)
case 35676:return new A.bw(this.a,this.r,c,d)
case 35678:return this.ev(b,c,d)
case 35680:return this.ew(b,c,d)
case 35670:throw H.c(this.b2("BOOL",c))
case 35671:throw H.c(this.b2("BOOL_VEC2",c))
case 35672:throw H.c(this.b2("BOOL_VEC3",c))
case 35673:throw H.c(this.b2("BOOL_VEC4",c))
default:throw H.c(P.a4("Unknown uniform variable type "+H.f(a)+" for "+H.f(c)+"."))}}}
A.dp.prototype={}
A.fT.prototype={
n:function(a,b){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<t;++s){r=u[s]
if(r.c===b)return r}return},
i:function(a){return this.O()},
hH:function(a){var u,t,s,r
for(u=this.a,t=u.length,s="",r=0;r<u.length;u.length===t||(0,H.D)(u),++r)s+=u[r].i(0)+a
return s},
O:function(){return this.hH("\n")}}
A.fL.prototype={
i:function(a){return"Uniform1i: "+H.f(this.c)}}
A.fO.prototype={
i:function(a){return"Uniform2i: "+H.f(this.c)}}
A.fQ.prototype={
i:function(a){return"Uniform3i: "+H.f(this.c)}}
A.fS.prototype={
i:function(a){return"Uniform4i: "+H.f(this.c)}}
A.fM.prototype={
i:function(a){return"Uniform1iv: "+H.f(this.c)},
sh4:function(a){this.e=H.l(a,"$ib",[P.k],"$ab")}}
A.dq.prototype={
i:function(a){return"Uniform1f: "+H.f(this.c)}}
A.fN.prototype={
i:function(a){return"Uniform2f: "+H.f(this.c)}}
A.fP.prototype={
i:function(a){return"Uniform3f: "+H.f(this.c)}}
A.fR.prototype={
i:function(a){return"Uniform4f: "+H.f(this.c)}}
A.fU.prototype={
i:function(a){return"Uniform1Mat2 "+H.f(this.c)}}
A.fV.prototype={
i:function(a){return"UniformMat3: "+H.f(this.c)}}
A.bw.prototype={
bk:function(a){var u=new Float32Array(H.ib(H.l(a,"$ib",[P.w],"$ab")))
C.c.ix(this.a,this.d,!1,u)},
i:function(a){return"UniformMat4: "+H.f(this.c)}}
A.ds.prototype={
i:function(a){return"UniformSampler2D: "+H.f(this.c)}}
A.fW.prototype={
i:function(a){return"UniformSamplerCube: "+H.f(this.c)}}
F.ik.prototype={
$2:function(a,b){return 0},
$S:41}
F.il.prototype={
$3:function(a,b,c){var u,t,s,r
u=b*2-1
t=c*2-1
s=new V.b4(u,t,this.a.a.$2(b,c))
if(!J.U(a.f,s)){a.f=s
s=a.a
if(s!=null)s.a0()}s=new V.a_(u,t,1)
s=s.D(0,Math.sqrt(s.I(s)))
if(!J.U(a.z,s)){a.z=s
s=a.a
if(s!=null)s.a0()}s=1-b
r=1-c
r=new V.d8(b*c,2+s*c,4+b*r,6+s*r)
if(!J.U(a.cx,r)){a.cx=r
s=a.a
if(s!=null)s.a0()}},
$S:42}
F.Y.prototype={
ghw:function(){return this.a==null||this.b==null||this.c==null},
eo:function(){var u,t,s,r,q
u=this.a
t=u==null?null:u.r
u=this.b
s=u==null?null:u.r
u=this.c
r=u==null?null:u.r
q=V.dz()
if(t!=null)q=q.H(0,t)
if(s!=null)q=q.H(0,s)
if(r!=null)q=q.H(0,r)
if(q.de())return
return q.D(0,Math.sqrt(q.I(q)))},
eq:function(){var u,t,s,r,q
u=this.a
t=u==null?null:u.f
u=this.b
s=u==null?null:u.f
u=this.c
r=u==null?null:u.f
if(t==null||s==null||r==null)return
u=s.B(0,t)
u=new V.a_(u.a,u.b,u.c)
q=u.D(0,Math.sqrt(u.I(u)))
u=r.B(0,t)
u=new V.a_(u.a,u.b,u.c)
u=q.aO(u.D(0,Math.sqrt(u.I(u))))
return u.D(0,Math.sqrt(u.I(u)))},
bN:function(){if(this.d!=null)return!0
var u=this.eo()
if(u==null){u=this.eq()
if(u==null)return!1}this.d=u
this.a.a.a0()
return!0},
en:function(){var u,t,s,r,q
u=this.a
t=u==null?null:u.x
u=this.b
s=u==null?null:u.x
u=this.c
r=u==null?null:u.x
q=V.dz()
if(t!=null)q=q.H(0,t)
if(s!=null)q=q.H(0,s)
if(r!=null)q=q.H(0,r)
if(q.de())return
return q.D(0,Math.sqrt(q.I(q)))},
ep:function(){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f
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
if(Math.abs(i-0)<$.K().a){u=m.B(0,p)
u=new V.a_(u.a,u.b,u.c)
h=u.D(0,Math.sqrt(u.I(u)))
if(j.a-k.a<0)h=h.M(0)}else{g=(u-l.b)/i
u=m.B(0,p)
t=u.c
if(typeof t!=="number")return t.q()
r=p.a
q=p.b
o=p.c
if(typeof o!=="number")return H.r(o)
o=new V.b4(u.a*g+r,u.b*g+q,t*g+o).B(0,s)
o=new V.a_(o.a,o.b,o.c)
h=o.D(0,Math.sqrt(o.I(o)))
j=j.a
k=k.a
if((j-k)*g+k-l.a<0)h=h.M(0)}u=this.d
if(u!=null){f=u.D(0,Math.sqrt(u.I(u)))
u=f.aO(h)
u=u.D(0,Math.sqrt(u.I(u))).aO(f)
h=u.D(0,Math.sqrt(u.I(u)))}return h},
bL:function(){if(this.e!=null)return!0
var u=this.en()
if(u==null){u=this.ep()
if(u==null)return!1}this.e=u
this.a.a.a0()
return!0},
t:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.O()},
A:function(a){var u,t
if(this.ghw())return a+"disposed"
u=a+C.b.a8(J.ae(this.a.e),0)+", "+C.b.a8(J.ae(this.b.e),0)+", "+C.b.a8(J.ae(this.c.e),0)+" {"
t=this.d
u=t!=null?u+(t.i(0)+", "):u+"-, "
t=this.e
return t!=null?u+(t.i(0)+"}"):u+"-}"},
O:function(){return this.A("")}}
F.aM.prototype={
t:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.O()},
A:function(a){var u=this.a
if(u==null||this.b==null)return a+"disposed"
return a+C.b.a8(J.ae(u.e),0)+", "+C.b.a8(J.ae(this.b.e),0)},
O:function(){return this.A("")}}
F.bp.prototype={}
F.dd.prototype={
gv:function(){var u=this.e
if(u==null){u=D.L()
this.e=u}return u},
he:function(a0,a1){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a
u=this.a.c.length
t=a1.a
s=(t&$.aS().a)!==0?1:0
if((t&$.aR().a)!==0)++s
if((t&$.aQ().a)!==0)++s
if((t&$.aT().a)!==0)++s
if((t&$.bH().a)!==0)++s
if((t&$.cs().a)!==0)++s
if((t&$.ct().a)!==0)++s
if((t&$.aU().a)!==0)++s
if((t&$.bG().a)!==0)++s
r=a1.gcb(a1)
q=r*4
t=new Array(u*r)
t.fixed$length=Array
p=P.w
o=H.a(t,[p])
t=new Array(s)
t.fixed$length=Array
n=H.a(t,[Z.cA])
for(m=0,l=0;l<s;++l){k=a1.ha(l)
j=k.gcb(k)
C.a.m(n,l,new Z.cA(k,j,m*4,q,0))
for(i=0;i<u;++i){t=this.a.c
if(i>=t.length)return H.h(t,i)
h=t[i].hQ(k)
g=m+i*r
for(f=0;f<h.length;++f){C.a.m(o,g,h[f]);++g}}m+=j}H.l(o,"$ib",[p],"$ab")
t=a0.a
e=t.createBuffer()
C.c.ad(t,34962,e)
C.c.cY(t,34962,new Float32Array(H.ib(o)),35044)
C.c.ad(t,34962,null)
d=new Z.cB(new Z.dA(34962,e),n,a1)
d.seI(H.a([],[Z.bk]))
this.b.b
if(this.c.b.length!==0){p=P.k
c=H.a([],[p])
for(l=0;b=this.c.b,l<b.length;++l){b=b[l].a
b.a.a.aw()
C.a.h(c,b.e)
b=this.c.b
if(l>=b.length)return H.h(b,l)
b=b[l].b
b.a.a.aw()
C.a.h(c,b.e)}a=Z.k2(t,34963,H.l(c,"$ib",[p],"$ab"))
C.a.h(d.b,new Z.bk(1,c.length,a))}if(this.d.b.length!==0){p=P.k
c=H.a([],[p])
for(l=0;b=this.d.b,l<b.length;++l){b=b[l].a
b.a.a.aw()
C.a.h(c,b.e)
b=this.d.b
if(l>=b.length)return H.h(b,l)
b=b[l].b
b.a.a.aw()
C.a.h(c,b.e)
b=this.d.b
if(l>=b.length)return H.h(b,l)
b=b[l].c
b.a.a.aw()
C.a.h(c,b.e)}a=Z.k2(t,34963,H.l(c,"$ib",[p],"$ab"))
C.a.h(d.b,new Z.bk(4,c.length,a))}return d},
i:function(a){var u=H.a([],[P.e])
if(this.a.c.length!==0){C.a.h(u,"Vertices:")
C.a.h(u,this.a.A("   "))}this.b.b
if(this.c.b.length!==0){C.a.h(u,"Lines:")
C.a.h(u,this.c.A("   "))}if(this.d.b.length!==0){C.a.h(u,"Faces:")
C.a.h(u,this.d.A("   "))}return C.a.k(u,"\n")},
a4:function(a){var u=this.e
if(u!=null)u.G(a)},
a0:function(){return this.a4(null)},
$in3:1}
F.fi.prototype={
h7:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k,j,i,h
H.l(c,"$ib",[F.aG],"$ab")
u=H.a([],[F.Y])
for(t=this.a,s=b,r=0,q=!1,p=1;p<a;++p,++r,++s){for(o=q,n=1;n<b;++n,s=j){m=c.length
if(r<0||r>=m)return H.h(c,r)
l=c[r];++r
if(r>=m)return H.h(c,r)
k=c[r]
j=s+1
if(j<0||j>=m)return H.h(c,j)
i=c[j]
if(s<0||s>=m)return H.h(c,s)
h=c[s]
m=t.a
if(o){m.h(0,l)
t.a.h(0,k)
t.a.h(0,i)
C.a.h(u,F.er(l,k,i))
t.a.h(0,l)
t.a.h(0,i)
t.a.h(0,h)
C.a.h(u,F.er(l,i,h))}else{m.h(0,k)
t.a.h(0,i)
t.a.h(0,h)
C.a.h(u,F.er(k,i,h))
t.a.h(0,k)
t.a.h(0,h)
t.a.h(0,l)
C.a.h(u,F.er(k,h,l))}o=!o}q=!q}return u},
gl:function(a){return this.b.length},
ic:function(){var u,t,s
for(u=this.b.length-1;u>=0;--u){t=this.b
if(u>=t.length)return H.h(t,u)
s=t[u]
t=s.a
if(!(t==null||s.b==null||s.c==null)){C.a.S(t.a.d.b,s)
t=s.a.a.e
if(t!=null)t.G(null)}t=s.a
if(t!=null){C.a.S(t.d.b,s)
s.a=null}t=s.b
if(t!=null){C.a.S(t.d.c,s)
s.b=null}t=s.c
if(t!=null){C.a.S(t.d.d,s)
s.c=null}}C.a.sl(this.b,0)},
bO:function(){var u,t,s,r
for(u=this.b,t=u.length,s=!0,r=0;r<u.length;u.length===t||(0,H.D)(u),++r)if(!u[r].bN())s=!1
return s},
bM:function(){var u,t,s,r
for(u=this.b,t=u.length,s=!0,r=0;r<u.length;u.length===t||(0,H.D)(u),++r)if(!u[r].bL())s=!1
return s},
i:function(a){return this.O()},
A:function(a){var u,t,s,r
u=H.a([],[P.e])
for(t=this.b,s=t.length,r=0;r<t.length;t.length===s||(0,H.D)(t),++r)C.a.h(u,t[r].A(a))
return C.a.k(u,"\n")},
O:function(){return this.A("")},
seA:function(a){this.b=H.l(a,"$ib",[F.Y],"$ab")}}
F.fj.prototype={
gl:function(a){return this.b.length},
i:function(a){return this.O()},
A:function(a){var u,t,s,r
u=H.a([],[P.e])
t=this.b.length
for(s=0;s<t;++s){r=this.b
if(s>=r.length)return H.h(r,s)
C.a.h(u,r[s].A(a+(""+s+". ")))}return C.a.k(u,"\n")},
O:function(){return this.A("")},
seK:function(a){this.b=H.l(a,"$ib",[F.aM],"$ab")}}
F.fk.prototype={
gl:function(a){return 0},
i:function(a){return this.O()},
A:function(a){var u,t,s
u=H.a([],[P.e])
for(t=this.b,s=0;!1;++s){if(s>=0)return H.h(t,s)
C.a.h(u,t[s].A(a))}return C.a.k(u,"\n")},
O:function(){return this.A("")},
sbE:function(a){this.b=H.l(a,"$ib",[F.bp],"$ab")}}
F.aG.prototype={
bR:function(a){var u,t,s,r,q,p,o
u=this.f
t=this.r
s=this.x
r=this.y
q=this.z
p=this.Q
o=this.ch
return F.iZ(this.cx,s,p,u,t,r,q,a,o)},
hj:function(){return this.bR(null)},
hQ:function(a){var u,t
if(a.t(0,$.aS())){u=this.f
t=[P.w]
if(u==null)return H.a([0,0,0],t)
else return H.a([u.a,u.b,u.c],t)}else if(a.t(0,$.aR())){u=this.r
t=[P.w]
if(u==null)return H.a([0,1,0],t)
else return H.a([u.a,u.b,u.c],t)}else if(a.t(0,$.aQ())){u=this.x
t=[P.w]
if(u==null)return H.a([0,0,1],t)
else return H.a([u.a,u.b,u.c],t)}else if(a.t(0,$.aT())){u=this.y
t=[P.w]
if(u==null)return H.a([0,0],t)
else return H.a([u.a,u.b],t)}else if(a.t(0,$.bH())){u=this.z
t=[P.w]
if(u==null)return H.a([0,0,0],t)
else return H.a([u.a,u.b,u.c],t)}else if(a.t(0,$.cs())){u=this.Q
t=[P.w]
if(u==null)return H.a([1,1,1],t)
else return H.a([u.a,u.b,u.c],t)}else if(a.t(0,$.ct())){u=this.Q
t=[P.w]
if(u==null)return H.a([1,1,1,1],t)
else return H.a([u.a,u.b,u.c,u.d],t)}else if(a.t(0,$.aU()))return H.a([this.ch],[P.w])
else if(a.t(0,$.bG())){u=this.cx
t=[P.w]
if(u==null)return H.a([-1,-1,-1,-1],t)
else return H.a([u.a,u.b,u.c,u.d],t)}else return H.a([],[P.w])},
bN:function(){var u,t
u={}
if(this.r!=null)return!0
t=this.a
if(t!=null){t=t.e
if(t!=null)++t.d}u.a=V.dz()
this.d.N(0,new F.hg(u))
u=u.a
this.r=u.D(0,Math.sqrt(u.I(u)))
u=this.a
if(u!=null){u.a0()
u=this.a.e
if(u!=null)u.aV()}return!0},
bL:function(){var u,t
u={}
if(this.x!=null)return!0
t=this.a
if(t!=null){t=t.e
if(t!=null)++t.d}u.a=V.dz()
this.d.N(0,new F.hf(u))
u=u.a
this.x=u.D(0,Math.sqrt(u.I(u)))
u=this.a
if(u!=null){u.a0()
u=this.a.e
if(u!=null)u.aV()}return!0},
t:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.O()},
A:function(a){var u,t,s
u=H.a([],[P.e])
C.a.h(u,C.b.a8(J.ae(this.e),0))
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
O:function(){return this.A("")}}
F.hg.prototype={
$1:function(a){var u,t
H.d(a,"$iY")
u=a==null?null:a.d
if(u!=null){t=this.a
t.a=t.a.H(0,u)}},
$S:8}
F.hf.prototype={
$1:function(a){var u,t
H.d(a,"$iY")
u=a==null?null:a.e
if(u!=null){t=this.a
t.a=t.a.H(0,u)}},
$S:8}
F.h9.prototype={
aw:function(){},
h:function(a,b){var u,t
u=b.a
if(u!=null){if(u===this.a)return!1
throw H.c(P.a4("May not add a vertex already attached to another shape to this shape."))}u=this.c
b.e=u.length
t=this.a
b.a=t
C.a.h(u,b)
t.a0()
return!0},
gl:function(a){return this.c.length},
bO:function(){var u,t,s
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.D)(u),++s)u[s].bN()
return!0},
bM:function(){var u,t,s
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.D)(u),++s)u[s].bL()
return!0},
i:function(a){return this.O()},
A:function(a){var u,t,s,r
this.aw()
u=H.a([],[P.e])
for(t=this.c,s=t.length,r=0;r<t.length;t.length===s||(0,H.D)(t),++r)C.a.h(u,t[r].A(a))
return C.a.k(u,"\n")},
O:function(){return this.A("")},
sh5:function(a){this.c=H.l(a,"$ib",[F.aG],"$ab")}}
F.ha.prototype={
gl:function(a){return this.b.length+this.c.length+this.d.length},
N:function(a,b){H.i(b,{func:1,ret:-1,args:[F.Y]})
C.a.N(this.b,b)
C.a.N(this.c,new F.hb(this,b))
C.a.N(this.d,new F.hc(this,b))},
i:function(a){return this.O()},
A:function(a){var u,t,s,r
u=H.a([],[P.e])
for(t=this.b,s=t.length,r=0;r<t.length;t.length===s||(0,H.D)(t),++r)C.a.h(u,t[r].A(a))
for(t=this.c,s=t.length,r=0;r<t.length;t.length===s||(0,H.D)(t),++r)C.a.h(u,t[r].A(a))
for(t=this.d,s=t.length,r=0;r<t.length;t.length===s||(0,H.D)(t),++r)C.a.h(u,t[r].A(a))
return C.a.k(u,"\n")},
O:function(){return this.A("")},
seB:function(a){this.b=H.l(a,"$ib",[F.Y],"$ab")},
seC:function(a){this.c=H.l(a,"$ib",[F.Y],"$ab")},
seD:function(a){this.d=H.l(a,"$ib",[F.Y],"$ab")}}
F.hb.prototype={
$1:function(a){H.d(a,"$iY")
if(!J.U(a.a,this.a))this.b.$1(a)},
$S:8}
F.hc.prototype={
$1:function(a){var u
H.d(a,"$iY")
u=this.a
if(!J.U(a.a,u)&&!J.U(a.b,u))this.b.$1(a)},
$S:8}
F.hd.prototype={
gl:function(a){return this.b.length+this.c.length},
i:function(a){return this.O()},
A:function(a){var u,t,s,r
u=H.a([],[P.e])
for(t=this.b,s=t.length,r=0;r<t.length;t.length===s||(0,H.D)(t),++r)C.a.h(u,t[r].A(a))
for(t=this.c,s=t.length,r=0;r<t.length;t.length===s||(0,H.D)(t),++r)C.a.h(u,t[r].A(a))
return C.a.k(u,"\n")},
O:function(){return this.A("")},
seL:function(a){this.b=H.l(a,"$ib",[F.aM],"$ab")},
seM:function(a){this.c=H.l(a,"$ib",[F.aM],"$ab")}}
F.he.prototype={
gl:function(a){return 0},
i:function(a){return this.O()},
A:function(a){var u,t,s
u=H.a([],[P.e])
for(t=this.b,s=0;!1;++s){if(s>=0)return H.h(t,s)
C.a.h(u,t[s].A(a))}return C.a.k(u,"\n")},
O:function(){return this.A("")},
sbE:function(a){this.b=H.l(a,"$ib",[F.bp],"$ab")}}
O.bv.prototype={}
T.fw.prototype={}
T.dk.prototype={}
T.fA.prototype={
gv:function(){var u=this.y
if(u==null){u=D.L()
this.y=u}return u}}
T.fB.prototype={
hS:function(a,b,c,d,e){var u,t,s,r
u=this.a
t=u.createTexture()
C.c.ay(u,3553,t)
C.c.b9(u,3553,10242,33071)
C.c.b9(u,3553,10243,33071)
C.c.b9(u,3553,10241,9729)
C.c.b9(u,3553,10240,9729)
C.c.ay(u,3553,null);++this.d
s=W.jx(null,a,null)
r=new T.fA()
r.a=0
r.b=t
r.c=!1
r.d=!1
r.e=0
r.f=0
r.r=0
r.x=0
u=W.j
W.V(s,"load",H.i(new T.fC(this,r,s,!1,t,!1,!1),{func:1,ret:-1,args:[u]}),!1,u)
return r},
hR:function(a){return this.hS(a,!1,!1,!1,!1)},
fJ:function(a,b,c){var u,t,s,r
b=V.je(b,2)
u=V.je(a.width,2)
t=V.je(a.height,2)
u=Math.min(u,b)
t=Math.min(t,b)
if(a.width===u&&a.height===t)return a
else{s=W.iM(null,null)
s.width=u
s.height=t
r=H.d(C.m.dO(s,"2d"),"$ibc")
r.imageSmoothingEnabled=!1;(r&&C.y).hy(r,a,0,0,s.width,s.height)
return P.mw(C.y.eH(r,0,0,s.width,s.height))}}}
T.fC.prototype={
$1:function(a){var u,t,s,r
u=this.b
t=this.c
u.e=t.width
u.f=t.height
s=this.a
r=s.fJ(t,s.b,this.d)
u.r=t.width
u.x=t.height
t=s.a
C.c.ay(t,3553,this.e)
C.c.ia(t,37440,this.f?1:0)
C.c.io(t,3553,0,6408,6408,5121,r)
if(this.r)C.c.dJ(t,3553)
C.c.ay(t,3553,null)
if(!u.d){u.d=!0
u=u.y
if(u!=null)u.hz()}++s.e},
$S:12}
V.aJ.prototype={
ak:function(a){return!0},
i:function(a){return"all"},
$iah:1}
V.ah.prototype={}
V.d0.prototype={
ak:function(a){var u,t,s
for(u=this.a,t=u.length,s=0;s<u.length;u.length===t||(0,H.D)(u),++s)if(u[s].ak(a))return!0
return!1},
i:function(a){var u,t,s,r,q
for(u=this.a,t=u.length,s="",r=0;r<u.length;u.length===t||(0,H.D)(u),++r){q=u[r]
if(s.length!==0)s+=", "
s+=q.i(0)}return s},
sX:function(a){this.a=H.l(a,"$ib",[V.ah],"$ab")},
$iah:1}
V.ab.prototype={
ak:function(a){return!this.e4(a)},
i:function(a){return"!["+this.cc(0)+"]"}}
V.f9.prototype={
ak:function(a){return this.a<=a&&this.b>=a},
i:function(a){var u,t
u=H.bs(this.a)
t=H.bs(this.b)
return u+".."+t},
$iah:1}
V.fh.prototype={
e8:function(a){var u,t
if(a.a.length<=0)throw H.c(P.a4("May not create a SetMatcher with zero characters."))
u=new H.au([P.k,P.G])
for(t=new H.bU(a,a.gl(a),0,[H.a2(a,"J",0)]);t.w();)u.m(0,t.d,!0)
this.sfM(u)},
ak:function(a){return this.a.b3(a)},
i:function(a){return P.df(this.a.gae(),0,null)},
sfM:function(a){this.a=H.l(a,"$iB",[P.k,P.G],"$aB")},
$iah:1}
V.c2.prototype={
k:function(a,b){var u,t,s,r
for(u=this.c,t=u.length,s=0;s<t;++s){r=u[s]
if(r.b.b===b)return r}r=new V.c7(this.a.j(0,b))
r.sX(H.a([],[V.ah]))
r.c=!1
C.a.h(this.c,r)
return r},
hD:function(a){var u,t,s,r
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.D)(u),++s){r=u[s]
if(r.ak(a))return r}return},
i:function(a){return this.b},
sh3:function(a){this.c=H.l(a,"$ib",[V.c7],"$ab")}}
V.dm.prototype={
i:function(a){var u,t
u=H.jg(this.b,"\n","\\n")
t=H.jg(u,"\t","\\t")
return this.a+":"+this.c+':"'+t+'"'}}
V.c6.prototype={
al:function(a,b,c){var u,t,s
H.l(c,"$ib",[P.e],"$ab")
for(u=c.length,t=0;t<c.length;c.length===u||(0,H.D)(c),++t){s=c[t]
this.c.m(0,s,b)}},
i:function(a){return this.b},
sfG:function(a){var u=P.e
this.c=H.l(a,"$iB",[u,u],"$aB")}}
V.fE.prototype={
j:function(a,b){var u=this.a.n(0,b)
if(u==null){u=new V.c2(this,b)
u.sh3(H.a([],[V.c7]))
u.d=null
this.a.m(0,b,u)}return u},
K:function(a){var u,t
u=this.b.n(0,a)
if(u==null){u=new V.c6(this,a)
t=P.e
u.sfG(new H.au([t,t]))
this.b.m(0,a,u)}return u},
dD:function(a){var u,t,s,r,q,p,o,n,m,l,k,j
u=H.a([],[V.dm])
t=this.c
s=[P.k]
r=H.a([],s)
for(q=a.length,p=null,o=0;!0;){if(o>=q){if(p!=null)C.a.h(u,p)
return u}n=C.b.C(a,o)
m=t.hD(n)
if(m==null){if(p==null){C.a.h(r,n)
l=P.df(r,0,null)
throw H.c(P.a4("Untokenizable string [state: "+t.b+", index "+o+']: "'+l+'"'))}C.a.h(u,p)
o=p.c+1
r=H.a([],s)
t=this.c
p=null}else{if(!m.c)C.a.h(r,n)
t=m.b
if(t.d!=null){l=P.df(r,0,null)
k=t.d
j=k.c.n(0,l)
p=new V.dm(j==null?k.b:j,l,o)}++o}}},
sfS:function(a){this.a=H.l(a,"$iB",[P.e,V.c2],"$aB")},
sfX:function(a){this.b=H.l(a,"$iB",[P.e,V.c6],"$aB")}}
V.c7.prototype={
i:function(a){return this.b.b+": "+this.cc(0)}}
X.cE.prototype={$ijF:1}
X.ex.prototype={
gv:function(){var u=this.x
if(u==null){u=D.L()
this.x=u}return u}}
X.d7.prototype={
gv:function(){var u=this.f
if(u==null){u=D.L()
this.f=u}return u},
aq:function(a){var u
H.d(a,"$iv")
u=this.f
if(u!=null)u.G(a)},
ej:function(){return this.aq(null)},
saR:function(a){var u,t
if(!J.U(this.b,a)){u=this.b
if(u!=null)u.gv().S(0,this.gci())
t=this.b
this.b=a
if(a!=null)a.gv().h(0,this.gci())
u=new D.H("mover",t,this.b,this,[U.a1])
u.b=!0
this.aq(u)}},
$ijF:1,
$icE:1}
X.di.prototype={}
V.aX.prototype={
aY:function(a){this.b=new P.eA(C.T)
this.c=null
this.sbt(H.a([],[[P.b,W.al]]))},
J:function(a,b){var u,t,s,r,q,p,o,n,m
u=this.d
if(u.length===0)C.a.h(u,H.a([],[W.al]))
t=a.split("\n")
for(u=t.length,s=[W.al],r=!0,q=0;q<u;++q){p=t[q]
if(r)r=!1
else C.a.h(this.d,H.a([],s))
o=document.createElement("div")
o.className="codePart"
H.z(p)
n=this.b.eu(p,0,p.length)
m=n==null?p:n
C.f.dY(o,H.jg(m," ","&nbsp;"))
m=o.style
m.color=b
C.a.h(C.a.gaf(this.d),o)}},
dq:function(a){var u,t,s,r
H.l(a,"$ib",[P.e],"$ab")
this.sbt(H.a([],[[P.b,W.al]]))
u=C.a.k(a,"\n")
t=this.c
if(t==null){t=this.b4()
this.c=t}for(t=t.dD(u),s=t.length,r=0;r<t.length;t.length===s||(0,H.D)(t),++r)this.b8(t[r])},
sbt:function(a){this.d=H.l(a,"$ib",[[P.b,W.al]],"$ab")}}
V.iG.prototype={
$1:function(a){H.d(a,"$iaE")
P.jf(C.e.dC(this.a.ghI(),2)+" fps")},
$S:45}
V.eg.prototype={
b8:function(a){switch(a.a){case"Class":this.J(a.b,"#551")
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
b4:function(){var u,t,s,r
u=V.fF()
u.c=u.j(0,"Start")
t=u.j(0,"Start").k(0,"Id")
s=V.q(new H.n("_"))
C.a.h(t.a,s)
s=V.M("a","z")
C.a.h(t.a,s)
s=V.M("A","Z")
C.a.h(t.a,s)
s=u.j(0,"Id").k(0,"Id")
t=V.q(new H.n("_"))
C.a.h(s.a,t)
t=V.M("0","9")
C.a.h(s.a,t)
t=V.M("a","z")
C.a.h(s.a,t)
t=V.M("A","Z")
C.a.h(s.a,t)
t=u.j(0,"Start").k(0,"Int")
s=V.M("0","9")
C.a.h(t.a,s)
s=u.j(0,"Int").k(0,"Int")
t=V.M("0","9")
C.a.h(s.a,t)
t=u.j(0,"Int").k(0,"FloatDot")
s=V.q(new H.n("."))
C.a.h(t.a,s)
s=u.j(0,"FloatDot").k(0,"Float")
t=V.M("0","9")
C.a.h(s.a,t)
t=u.j(0,"Float").k(0,"Float")
s=V.M("0","9")
C.a.h(t.a,s)
s=u.j(0,"Start").k(0,"Sym")
t=V.q(new H.n("<>{}()\\-+*%!&|=.,?:;"))
C.a.h(s.a,t)
t=u.j(0,"Sym").k(0,"Sym")
s=V.q(new H.n("<>{}()\\-+*%!&|=.,?:;"))
C.a.h(t.a,s)
s=u.j(0,"Start").k(0,"OpenDoubleStr")
t=V.q(new H.n('"'))
C.a.h(s.a,t)
t=u.j(0,"OpenDoubleStr").k(0,"CloseDoubleStr")
s=V.q(new H.n('"'))
C.a.h(t.a,s)
s=u.j(0,"OpenDoubleStr").k(0,"EscDoubleStr")
t=V.q(new H.n("\\"))
C.a.h(s.a,t)
t=u.j(0,"EscDoubleStr").k(0,"OpenDoubleStr")
s=V.q(new H.n('"'))
C.a.h(t.a,s)
C.a.h(u.j(0,"OpenDoubleStr").k(0,"OpenDoubleStr").a,new V.aJ())
s=u.j(0,"Start").k(0,"OpenSingleStr")
t=V.q(new H.n("'"))
C.a.h(s.a,t)
t=u.j(0,"OpenSingleStr").k(0,"CloseSingleStr")
s=V.q(new H.n("'"))
C.a.h(t.a,s)
s=u.j(0,"OpenSingleStr").k(0,"EscSingleStr")
t=V.q(new H.n("\\"))
C.a.h(s.a,t)
t=u.j(0,"EscSingleStr").k(0,"OpenSingleStr")
s=V.q(new H.n("'"))
C.a.h(t.a,s)
C.a.h(u.j(0,"OpenSingleStr").k(0,"OpenSingleStr").a,new V.aJ())
s=u.j(0,"Start").k(0,"Slash")
t=V.q(new H.n("/"))
C.a.h(s.a,t)
t=u.j(0,"Slash").k(0,"Comment")
s=V.q(new H.n("/"))
C.a.h(t.a,s)
s=u.j(0,"Comment").k(0,"EndComment")
t=V.q(new H.n("\n"))
C.a.h(s.a,t)
t=u.j(0,"Comment").k(0,"Comment")
s=new V.ab()
r=[V.ah]
s.sX(H.a([],r))
C.a.h(t.a,s)
t=V.q(new H.n("\n"))
C.a.h(s.a,t)
t=u.j(0,"Slash").k(0,"MLComment")
s=V.q(new H.n("*"))
C.a.h(t.a,s)
s=u.j(0,"MLComment").k(0,"MLCStar")
t=V.q(new H.n("*"))
C.a.h(s.a,t)
t=u.j(0,"MLCStar").k(0,"MLComment")
s=new V.ab()
s.sX(H.a([],r))
C.a.h(t.a,s)
t=V.q(new H.n("*"))
C.a.h(s.a,t)
t=u.j(0,"MLCStar").k(0,"EndComment")
s=V.q(new H.n("/"))
C.a.h(t.a,s)
s=u.j(0,"Start").k(0,"Whitespace")
t=V.q(new H.n(" \n\t"))
C.a.h(s.a,t)
t=u.j(0,"Whitespace").k(0,"Whitespace")
s=V.q(new H.n(" \n\t"))
C.a.h(t.a,s)
s=u.j(0,"Int")
s.d=s.a.K("Num")
s=u.j(0,"Float")
s.d=s.a.K("Num")
s=u.j(0,"Sym")
s.d=s.a.K("Symbol")
s=u.j(0,"CloseDoubleStr")
s.d=s.a.K("String")
s=u.j(0,"CloseSingleStr")
s.d=s.a.K("String")
s=u.j(0,"EndComment")
s.d=s.a.K("Comment")
s=u.j(0,"Whitespace")
s.d=s.a.K("Whitespace")
s=u.j(0,"Id")
t=s.a.K("Id")
s.d=t
s=[P.e]
t.al(0,"Class",H.a(["Constant","Depth","Entity","EntityPass","Math","Matrix4","Movers","Rotater","Scenes","Shapes","Techniques","ThreeDart"],s))
t.al(0,"Type",H.a(["bool","double","dynamic","false","int","List","Map","null","num","Object","String","this","true","var","void"],s))
t.al(0,"Reserved",H.a(["abstract","as","assert","async","await","break","case","catch","class","continue","const","default","deferred","do","else","enum","export","extends","external","factory","final","finally","for","get","if","implements","import","in","is","library","new","operator","part","rethrow","return","set","static","super","switch","sync","throw","try","typedef","with","while","yield"],s))
return u}}
V.ey.prototype={
b8:function(a){switch(a.a){case"Builtin":this.J(a.b,"#411")
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
b4:function(){var u,t,s,r
u=V.fF()
u.c=u.j(0,"Start")
t=u.j(0,"Start").k(0,"Id")
s=V.q(new H.n("_"))
C.a.h(t.a,s)
s=V.M("a","z")
C.a.h(t.a,s)
s=V.M("A","Z")
C.a.h(t.a,s)
s=u.j(0,"Id").k(0,"Id")
t=V.q(new H.n("_"))
C.a.h(s.a,t)
t=V.M("0","9")
C.a.h(s.a,t)
t=V.M("a","z")
C.a.h(s.a,t)
t=V.M("A","Z")
C.a.h(s.a,t)
t=u.j(0,"Start").k(0,"Int")
s=V.M("0","9")
C.a.h(t.a,s)
s=u.j(0,"Int").k(0,"Int")
t=V.M("0","9")
C.a.h(s.a,t)
t=u.j(0,"Int").k(0,"FloatDot")
s=V.q(new H.n("."))
C.a.h(t.a,s)
s=u.j(0,"FloatDot").k(0,"Float")
t=V.M("0","9")
C.a.h(s.a,t)
t=u.j(0,"Float").k(0,"Float")
s=V.M("0","9")
C.a.h(t.a,s)
s=u.j(0,"Start").k(0,"Sym")
t=V.q(new H.n("<>{}()[]\\-+*%!&|=.,?:;"))
C.a.h(s.a,t)
t=u.j(0,"Sym").k(0,"Sym")
s=V.q(new H.n("<>{}()[]\\-+*%!&|=.,?:;"))
C.a.h(t.a,s)
s=u.j(0,"Start").k(0,"Slash")
t=V.q(new H.n("/"))
C.a.h(s.a,t)
t=u.j(0,"Slash").k(0,"Comment")
s=V.q(new H.n("/"))
C.a.h(t.a,s)
C.a.h(u.j(0,"Slash").k(0,"Sym").a,new V.aJ())
s=u.j(0,"Comment").k(0,"EndComment")
t=V.q(new H.n("\n"))
C.a.h(s.a,t)
t=u.j(0,"Comment").k(0,"Comment")
s=new V.ab()
r=[V.ah]
s.sX(H.a([],r))
C.a.h(t.a,s)
t=V.q(new H.n("\n"))
C.a.h(s.a,t)
t=u.j(0,"Start").k(0,"Preprocess")
s=V.q(new H.n("#"))
C.a.h(t.a,s)
s=u.j(0,"Preprocess").k(0,"Preprocess")
t=new V.ab()
t.sX(H.a([],r))
C.a.h(s.a,t)
s=V.q(new H.n("\n"))
C.a.h(t.a,s)
s=u.j(0,"Preprocess").k(0,"EndPreprocess")
t=V.q(new H.n("\n"))
C.a.h(s.a,t)
t=u.j(0,"Start").k(0,"Whitespace")
s=V.q(new H.n(" \n\t"))
C.a.h(t.a,s)
s=u.j(0,"Whitespace").k(0,"Whitespace")
t=V.q(new H.n(" \n\t"))
C.a.h(s.a,t)
t=u.j(0,"Int")
t.d=t.a.K("Num")
t=u.j(0,"Float")
t.d=t.a.K("Num")
t=u.j(0,"Sym")
t.d=t.a.K("Symbol")
t=u.j(0,"EndComment")
t.d=t.a.K("Comment")
t=u.j(0,"EndPreprocess")
t.d=t.a.K("Preprocess")
t=u.j(0,"Whitespace")
t.d=t.a.K("Whitespace")
t=u.j(0,"Id")
s=t.a.K("Id")
t.d=s
t=[P.e]
s.al(0,"Type",H.a(["float","double","int","void","bool","true","false","mat2","mat3","mat4","dmat2","dmat3","dmat4","mat2x2","mat2x3","mat2x4","dmat2x2","dmat2x3","dmat2x4","mat3x2","mat3x3","mat3x4","dmat3x2","dmat3x3","dmat3x4","mat4x2","mat4x3","mat4x4","dmat4x2","dmat4x3","dmat4x4","vec2","vec3","vec4","ivec2","ivec3","ivec4","bvec2","bvec3","bvec4","dvec2","dvec3","dvec4","uint","uvec2","uvec3","uvec4","sampler1D","sampler2D","sampler3D","samplerCube","sampler1DShadow","sampler2DShadow","samplerCubeShadow","sampler1DArray","sampler2DArray","sampler1DArrayShadow","sampler2DArrayShadow","isampler1D","isampler2D","isampler3D","isamplerCube","isampler1DArray","isampler2DArray","usampler1D","usampler2D","usampler3D","usamplerCube","usampler1DArray","usampler2DArray","sampler2DRect","sampler2DRectShadow","isampler2DRect","usampler2DRect","samplerBuffer","isamplerBuffer","usamplerBuffer","sampler2DMS","isampler2DMS","usampler2DMS","sampler2DMSArray","isampler2DMSArray","usampler2DMSArray","samplerCubeArray","samplerCubeArrayShadow","isamplerCubeArray","usamplerCubeArray"],t))
s.al(0,"Reserved",H.a(["attribute","break","case","centroid","const","continue","default","discard","do","else","flat","for","highp","if","in","inout","invariant","layout","lowp","mediump","noperspective","out","patch","precision","return","sample","smooth","struct","subroutine","switch","uniform","varying","while"],t))
s.al(0,"Builtin",H.a(["gl_FragColor","gl_Position"],t))
return u}}
V.ez.prototype={
b8:function(a){switch(a.a){case"Attr":this.J(a.b,"#911")
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
b4:function(){var u,t,s
u=V.fF()
u.c=u.j(0,"Start")
t=u.j(0,"Start").k(0,"Id")
s=V.q(new H.n("_"))
C.a.h(t.a,s)
s=V.M("a","z")
C.a.h(t.a,s)
s=V.M("A","Z")
C.a.h(t.a,s)
s=u.j(0,"Id").k(0,"Id")
t=V.q(new H.n("_"))
C.a.h(s.a,t)
t=V.M("0","9")
C.a.h(s.a,t)
t=V.M("a","z")
C.a.h(s.a,t)
t=V.M("A","Z")
C.a.h(s.a,t)
t=u.j(0,"Id").k(0,"Attr")
s=V.q(new H.n("="))
C.a.h(t.a,s)
t.c=!0
t=u.j(0,"Start").k(0,"Sym")
s=V.q(new H.n("</\\-!>="))
C.a.h(t.a,s)
s=u.j(0,"Sym").k(0,"Sym")
t=V.q(new H.n("</\\-!>="))
C.a.h(s.a,t)
t=u.j(0,"Start").k(0,"OpenStr")
s=V.q(new H.n('"'))
C.a.h(t.a,s)
s=u.j(0,"OpenStr").k(0,"CloseStr")
t=V.q(new H.n('"'))
C.a.h(s.a,t)
t=u.j(0,"OpenStr").k(0,"EscStr")
s=V.q(new H.n("\\"))
C.a.h(t.a,s)
s=u.j(0,"EscStr").k(0,"OpenStr")
t=V.q(new H.n('"'))
C.a.h(s.a,t)
C.a.h(u.j(0,"OpenStr").k(0,"OpenStr").a,new V.aJ())
C.a.h(u.j(0,"Start").k(0,"Other").a,new V.aJ())
t=u.j(0,"Other").k(0,"Other")
s=new V.ab()
s.sX(H.a([],[V.ah]))
C.a.h(t.a,s)
t=V.q(new H.n('</\\-!>=_"'))
C.a.h(s.a,t)
t=V.M("a","z")
C.a.h(s.a,t)
t=V.M("A","Z")
C.a.h(s.a,t)
t=u.j(0,"Sym")
t.d=t.a.K("Symbol")
t=u.j(0,"CloseStr")
t.d=t.a.K("String")
t=u.j(0,"Id")
s=t.a.K("Id")
t.d=s
s.al(0,"Reserved",H.a(["DOCTYPE","html","head","meta","link","title","body","script"],[P.e]))
s=u.j(0,"Attr")
s.d=s.a.K("Attr")
s=u.j(0,"Other")
s.d=s.a.K("Other")
return u}}
V.f4.prototype={
dq:function(a){H.l(a,"$ib",[P.e],"$ab")
this.sbt(H.a([],[[P.b,W.al]]))
this.J(C.a.k(a,"\n"),"#111")},
b8:function(a){},
b4:function(){return}}
V.f6.prototype={
cR:function(a,b,c,d){var u,t,s,r,q,p,o,n
H.i(c,{func:1,ret:-1})
if(this.c==null)return
u=this.a
t=P.h2().gaU().n(0,H.f(u))
if(t==null)if(d){c.$0()
this.aL(b)
s=!0}else s=!1
else if(t===b){c.$0()
s=!0}else s=!1
r=document
q=r.createElement("label")
p=q.style
p.whiteSpace="nowrap"
J.bI(this.c).h(0,q)
o=W.lg("radio")
o.checked=s
o.name=u
u=W.j
W.V(o,"change",H.i(new V.f7(this,o,c,b),{func:1,ret:-1,args:[u]}),!1,u)
C.C.u(q,o)
n=r.createElement("span")
n.textContent=b
C.C.u(q,n)
J.bI(this.c).h(0,r.createElement("br"))},
Z:function(a,b,c){return this.cR(a,b,c,!1)},
aL:function(a){var u,t,s,r,q
u=P.h2()
t=P.e
s=P.jB(u.gaU(),t,t)
s.m(0,this.a,a)
r=u.c3(0,s)
t=window.history
q=r.i(0)
t.toString;(t&&C.z).cJ(t,new P.dO([],[]).bb(""),"",q)}}
V.f7.prototype={
$1:function(a){if(this.b.checked){this.c.$0()
this.a.aL(this.d)}},
$S:12}
V.fl.prototype={
ea:function(a,b){var u,t,s,r,q,p,o
u=document
t=u.body
s=u.createElement("div")
s.className="scrollTop";(t&&C.l).u(t,s)
r=u.createElement("div")
r.className="scrollPage"
C.l.u(t,r)
q=u.createElement("div")
q.className="pageCenter"
C.f.u(r,q)
if(a.length!==0){u.title=a
p=u.createElement("div")
p.className="pageTitle"
p.textContent=a
C.f.u(q,p)}o=u.createElement("div")
this.a=o
C.f.u(q,o)
this.b=null
o=W.j
W.V(u,"scroll",H.i(new V.fn(s),{func:1,ret:-1,args:[o]}),!1,o)},
cT:function(a){var u,t,s,r,q,p,o,n,m,l,k
H.l(a,"$ib",[P.e],"$ab")
this.fO()
u=document
t=u.createElement("div")
t.className="textPar"
for(s=this.b.dD(C.a.hO(a)),r=s.length,q=0;q<s.length;s.length===r||(0,H.D)(s),++q){p=s[q]
switch(p.a){case"Bold":o=u.createElement("div")
o.className="boldPar"
o.textContent=p.b
C.f.u(t,o)
break
case"Italic":o=u.createElement("div")
o.className="italicPar"
o.textContent=p.b
C.f.u(t,o)
break
case"Code":o=u.createElement("div")
o.className="codePar"
o.textContent=p.b
C.f.u(t,o)
break
case"Link":n=p.b
if(H.mS(n,"|",0)){m=n.split("|")
l=u.createElement("a")
l.className="linkPar"
if(1>=m.length)return H.h(m,1)
l.href=H.z(m[1])
l.textContent=H.z(m[0])
C.f.u(t,l)}else{k=P.dU(C.F,n,C.i,!1)
l=u.createElement("a")
l.className="linkPar"
l.href="#"+H.f(k)
l.textContent=n
C.f.u(t,l)}break
case"Other":o=u.createElement("div")
o.className="normalPar"
o.textContent=p.b
C.f.u(t,o)
break}}C.f.u(this.a,t)},
dN:function(a){var u,t,s,r
u=new V.eg("dart")
u.aY("dart")
t=new V.ey("glsl")
t.aY("glsl")
s=new V.ez("html")
s.aY("html")
r=C.a.hE(H.a([u,t,s],[V.aX]),new V.fo(a))
if(r!=null)return r
u=new V.f4("plain")
u.aY("plain")
return u},
cS:function(a4,a5,a6,a7){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3
H.l(a7,"$ib",[P.e],"$ab")
u=H.a([],[P.k])
for(t=!1,s=0;s<a7.length;++s){r=a7[s]
if(J.cp(r).W(r,"+")){C.a.m(a7,s,C.b.ag(r,1))
C.a.h(u,1)
t=!0}else if(C.b.W(r,"-")){C.a.m(a7,s,C.b.ag(r,1))
C.a.h(u,-1)
t=!0}else C.a.h(u,0)}q=this.dN(a5)
q.dq(a7)
p=document
o=p.createElement("div")
o.className="codeTableScroll"
n=p.createElement("table")
n.className="codeTable"
C.f.u(o,n)
C.f.u(this.a,o)
m=P.dU(C.F,a4,C.i,!1)
l=p.createElement("tr")
l.className="headerRow"
k=p.createElement("td")
k.className="headerCell"
k.colSpan=t?3:2
j=p.createElement("div")
j.className="tableHeader"
j.id=m
i=W.jm(null)
i.href="#"+H.f(m)
i.textContent=a4
C.f.u(j,i)
C.t.u(k,j)
C.j.u(l,k)
C.k.u(n,l)
if(t)for(h=a6,g=h,s=0;f=q.d,s<f.length;++s){r=f[s]
e=p.createElement("tr")
e.className="codeTableRow"
d=p.createElement("td")
d.className="codeLineNums codeLineLight"
c=p.createElement("td")
c.className="codeLineNums"
if(s>=u.length)return H.h(u,s)
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
for(f=r.length,a0=0;a0<r.length;r.length===f||(0,H.D)(r),++a0)C.t.u(a,r[a0])
C.j.u(e,d)
C.j.u(e,c)
C.j.u(e,a)
C.k.u(n,e)}else for(f=q.d,a1=f.length,a2=a6,a0=0;a0<f.length;f.length===a1||(0,H.D)(f),++a0){r=f[a0]
e=p.createElement("tr")
e.className="codeTableRow"
d=p.createElement("td")
d.className="codeLineNums";++a2
d.textContent=""+a2
c=p.createElement("td")
c.className="codeLineText"
for(a3=C.a.gP(r);a3.w();)C.t.u(c,a3.gF())
C.j.u(e,d)
C.j.u(e,c)
C.k.u(n,e)}},
h6:function(a){var u,t,s,r,q,p,o
H.l(a,"$ib",[P.e],"$ab")
u=document
t=u.createElement("table")
t.id="shellTable"
s=t.style
s.width="100%"
s.padding="0px"
s.marginLeft="auto"
s.marginRight="auto"
C.f.u(this.a,t)
r=C.k.eJ(t,-1)
s=H.d((r&&C.j).cB(r,-1),"$iaD").style
s.textAlign="center"
s.verticalAlign="top"
s.marginLeft="auto"
s.marginRight="auto"
for(q=0;q<2;++q){p=u.createElement("div")
p.id=a[q]
s=p.style
s.textAlign="left"
s=p.style
s.verticalAlign="top"
o=H.d(C.j.cB(r,-1),"$iaD")
s=o.style
s.textAlign="center"
s.verticalAlign="top"
s.marginLeft="auto"
s.marginRight="auto";(o&&C.t).u(o,p)}},
fO:function(){var u,t,s,r
if(this.b!=null)return
u=V.fF()
u.c=u.j(0,"Start")
t=u.j(0,"Start").k(0,"Bold")
s=V.q(new H.n("*"))
C.a.h(t.a,s)
t.c=!0
t=u.j(0,"Bold").k(0,"Bold")
s=new V.ab()
r=[V.ah]
s.sX(H.a([],r))
C.a.h(t.a,s)
t=V.q(new H.n("*"))
C.a.h(s.a,t)
t=u.j(0,"Bold").k(0,"BoldEnd")
s=V.q(new H.n("*"))
C.a.h(t.a,s)
t.c=!0
t=u.j(0,"Start").k(0,"Italic")
s=V.q(new H.n("_"))
C.a.h(t.a,s)
t.c=!0
t=u.j(0,"Italic").k(0,"Italic")
s=new V.ab()
s.sX(H.a([],r))
C.a.h(t.a,s)
t=V.q(new H.n("_"))
C.a.h(s.a,t)
t=u.j(0,"Italic").k(0,"ItalicEnd")
s=V.q(new H.n("_"))
C.a.h(t.a,s)
t.c=!0
t=u.j(0,"Start").k(0,"Code")
s=V.q(new H.n("`"))
C.a.h(t.a,s)
t.c=!0
t=u.j(0,"Code").k(0,"Code")
s=new V.ab()
s.sX(H.a([],r))
C.a.h(t.a,s)
t=V.q(new H.n("`"))
C.a.h(s.a,t)
t=u.j(0,"Code").k(0,"CodeEnd")
s=V.q(new H.n("`"))
C.a.h(t.a,s)
t.c=!0
t=u.j(0,"Start").k(0,"LinkHead")
s=V.q(new H.n("["))
C.a.h(t.a,s)
t.c=!0
t=u.j(0,"LinkHead").k(0,"LinkTail")
s=V.q(new H.n("|"))
C.a.h(t.a,s)
s=u.j(0,"LinkHead").k(0,"LinkEnd")
t=V.q(new H.n("]"))
C.a.h(s.a,t)
s.c=!0
s=u.j(0,"LinkHead").k(0,"LinkHead")
t=new V.ab()
t.sX(H.a([],r))
C.a.h(s.a,t)
s=V.q(new H.n("|]"))
C.a.h(t.a,s)
s=u.j(0,"LinkTail").k(0,"LinkEnd")
t=V.q(new H.n("]"))
C.a.h(s.a,t)
s.c=!0
s=u.j(0,"LinkTail").k(0,"LinkTail")
t=new V.ab()
t.sX(H.a([],r))
C.a.h(s.a,t)
s=V.q(new H.n("|]"))
C.a.h(t.a,s)
C.a.h(u.j(0,"Start").k(0,"Other").a,new V.aJ())
s=u.j(0,"Other").k(0,"Other")
t=new V.ab()
t.sX(H.a([],r))
C.a.h(s.a,t)
s=V.q(new H.n("*_`["))
C.a.h(t.a,s)
s=u.j(0,"BoldEnd")
s.d=s.a.K("Bold")
s=u.j(0,"ItalicEnd")
s.d=s.a.K("Italic")
s=u.j(0,"CodeEnd")
s.d=s.a.K("Code")
s=u.j(0,"LinkEnd")
s.d=s.a.K("Link")
s=u.j(0,"Other")
s.d=s.a.K("Other")
this.b=u}}
V.fn.prototype={
$1:function(a){P.jT(C.u,new V.fm(this.a))},
$S:12}
V.fm.prototype={
$0:function(){var u,t,s
u=C.e.a9(document.documentElement.scrollTop)
t=this.a.style
s=H.f(-0.01*u)+"px"
t.top=s},
$S:0}
V.fo.prototype={
$1:function(a){return H.d(a,"$iaX").a===this.a},
$S:46}
V.fx.prototype={
Z:function(a,b,c){var u,t,s,r,q
u=W.jx(null,null,null)
u.src=b
u.width=64
u.height=64
t=u.style
t.border="solid 2px white"
t=J.bI(this.c)
s=t.gl(t)
t=W.R
W.V(u,"click",H.i(new V.fz(this,u,b,s),{func:1,ret:-1,args:[t]}),!1,t)
J.bI(this.c).h(0,u)
J.bI(this.c).h(0,document.createElement("br"))
r=P.h2().gaU().n(0,H.f(this.a))
if(r==null){this.aL(s)
q=c}else q=P.cr(r,null,null)===s
if(q)u.click()},
h:function(a,b){return this.Z(a,b,!1)},
aL:function(a){var u,t,s,r,q
u=P.h2()
t=P.e
s=P.jB(u.gaU(),t,t)
s.m(0,this.a,""+a)
r=u.c3(0,s)
t=window.history
q=r.i(0)
t.toString;(t&&C.z).cJ(t,new P.dO([],[]).bb(""),"",q)}}
V.fz.prototype={
$1:function(a){var u,t
H.d(a,"$iR")
u=this.a
t=J.bI(u.c)
t.N(t,new V.fy())
t=this.b.style
t.border="solid 2px black"
u.d.$1(this.c)
u.aL(this.d)},
$S:47}
V.fy.prototype={
$1:function(a){var u
H.d(a,"$iA")
if(!!J.E(a).$ibi){u=a.style
u.border="solid 2px white"}},
$S:48}
T.e7.prototype={}
T.cC.prototype={
gv:function(){var u=this.d
if(u==null){u=D.L()
this.d=u}return u},
b1:function(a){var u
H.d(a,"$iv")
u=this.d
if(u!=null)u.G(a)},
fU:function(){return this.b1(null)},
sa3:function(a){var u=this.c
if(!(Math.abs(u-a)<$.K().a)){this.c=a
u=new D.H("offsetScalar",u,a,this,[P.w])
u.b=!0
this.b1(u)}}}
T.is.prototype={
$1:function(a){var u,t,s,r
u=this.a
t=this.b.f.hR(a)
s=u.b
if(s!==t){if(s!=null)s.gv().S(0,u.gcN())
r=u.b
u.b=t
t.gv().h(0,u.gcN())
t=new D.H("bumpyTexture",r,u.b,u,[T.dk])
t.b=!0
u.b1(t)}},
$S:15}
T.it.prototype={
$0:function(){this.a.sa3(0.1)},
$S:0}
T.iu.prototype={
$0:function(){this.a.sa3(0.2)},
$S:0}
T.iw.prototype={
$0:function(){this.a.sa3(0.3)},
$S:0}
T.ix.prototype={
$0:function(){this.a.sa3(0.4)},
$S:0}
T.iy.prototype={
$0:function(){this.a.sa3(0.5)},
$S:0}
T.iz.prototype={
$0:function(){this.a.sa3(0.6)},
$S:0}
T.iA.prototype={
$0:function(){this.a.sa3(0.7)},
$S:0}
T.iB.prototype={
$0:function(){this.a.sa3(0.8)},
$S:0}
T.iC.prototype={
$0:function(){this.a.sa3(0.9)},
$S:0}
T.iD.prototype={
$0:function(){this.a.sa3(1)},
$S:0}
T.iv.prototype={
$1:function(a){var u,t,s,r
H.d(a,"$iv")
u=this.a
t=this.b
s=t.a
r=[P.e]
u.cS("Vertex Shader","glsl",0,H.a((s==null?null:s.c).split("\n"),r))
t=t.a
u.cS("Fragment Shader","glsl",0,H.a((t==null?null:t.d).split("\n"),r))},
$S:7};(function aliases(){var u=J.a0.prototype
u.e1=u.i
u=J.cV.prototype
u.e3=u.i
u=P.o.prototype
u.e2=u.bc
u=W.A.prototype
u.bl=u.a6
u=W.dM.prototype
u.e5=u.ac
u=V.d0.prototype
u.e4=u.ak
u.cc=u.i})();(function installTearOffs(){var u=hunkHelpers._static_1,t=hunkHelpers._static_0,s=hunkHelpers.installStaticTearOff,r=hunkHelpers.installInstanceTearOff,q=hunkHelpers._instance_2u,p=hunkHelpers._instance_0u,o=hunkHelpers._instance_1u,n=hunkHelpers._instance_0i
u(P,"mq","lU",9)
u(P,"mr","lV",9)
u(P,"ms","lW",9)
t(P,"kn","mp",3)
s(W,"mD",4,null,["$4"],["lY"],23,0)
s(W,"mE",4,null,["$4"],["lZ"],23,0)
var m
r(m=E.a9.prototype,"gdk",0,0,null,["$1","$0"],["dl","i0"],2,0)
r(m,"gdm",0,0,null,["$1","$0"],["dn","i1"],2,0)
r(m,"gdi",0,0,null,["$1","$0"],["dj","i_"],2,0)
r(m,"gdg",0,0,null,["$1","$0"],["dh","hX"],2,0)
q(m,"ghV","hW",6)
q(m,"ghY","hZ",6)
r(m=E.dl.prototype,"gce",0,0,null,["$1","$0"],["cg","cf"],2,0)
p(m,"gih","dv",3)
o(m=X.dv.prototype,"gf7","f8",10)
o(m,"geW","eX",10)
o(m,"gf1","f2",4)
o(m,"gfb","fc",24)
o(m,"gf9","fa",24)
o(m,"gfe","ff",4)
o(m,"gfi","fj",4)
o(m,"gf5","f6",4)
o(m,"gfg","fh",4)
o(m,"gf3","f4",4)
o(m,"gfk","fl",36)
o(m,"gfm","fn",10)
o(m,"gfw","fz",11)
o(m,"gfs","ft",11)
o(m,"gfu","fv",11)
n(V.I.prototype,"gl","bX",22)
n(V.a_.prototype,"gl","bX",22)
r(m=U.bS.prototype,"gas",0,0,null,["$1","$0"],["L","Y"],2,0)
q(m,"geU","eV",20)
q(m,"gfp","fq",20)
r(m=U.dw.prototype,"gas",0,0,null,["$1","$0"],["L","Y"],2,0)
o(m,"gbw","bx",1)
o(m,"gby","bz",1)
o(m,"gbA","bB",1)
r(m=U.dx.prototype,"gas",0,0,null,["$1","$0"],["L","Y"],2,0)
o(m,"gbw","bx",1)
o(m,"gby","bz",1)
o(m,"gbA","bB",1)
o(m,"geO","eP",1)
o(m,"geQ","eR",1)
o(m,"gh1","h2",1)
o(m,"gh_","h0",1)
o(m,"gfY","fZ",1)
o(U.dy.prototype,"geS","eT",1)
r(m=M.cJ.prototype,"gao",0,0,null,["$1","$0"],["ap","ef"],2,0)
q(m,"geY","eZ",6)
q(m,"gf_","f0",6)
r(X.d7.prototype,"gci",0,0,null,["$1","$0"],["aq","ej"],2,0)
r(T.cC.prototype,"gcN",0,0,null,["$1","$0"],["b1","fU"],2,0)})();(function inheritance(){var u=hunkHelpers.mixin,t=hunkHelpers.inherit,s=hunkHelpers.inheritMany
t(P.F,null)
s(P.F,[H.iS,J.a0,J.af,P.dI,P.o,H.bU,P.aA,H.bg,H.c9,H.ec,H.fa,H.fI,P.b_,H.bM,H.dN,P.bn,H.eI,H.eK,H.eF,P.dP,P.aI,P.ao,P.dB,P.fq,P.c4,P.fr,P.aE,P.a7,P.i6,P.hN,P.bx,P.dH,P.J,P.hY,P.eQ,P.bd,P.eB,P.i4,P.i2,P.G,P.a8,P.a6,P.aZ,P.f2,P.de,P.dE,P.ew,P.b0,P.b,P.B,P.y,P.ac,P.e,P.ad,P.by,P.h0,P.hQ,W.ee,W.b7,W.ag,W.d5,W.dM,W.hT,W.cK,W.aj,W.hM,W.dV,P.hR,P.dS,P.hH,P.C,O.X,O.bV,E.e5,E.a9,E.fb,E.dl,Z.dA,Z.hi,Z.cB,Z.bk,Z.ca,D.e9,D.bQ,D.v,X.cD,X.cW,X.eH,X.eN,X.ai,X.eV,X.fG,X.dv,V.be,V.en,V.b2,V.a5,V.b4,V.d8,V.db,V.I,V.a_,U.dw,U.dx,U.dy,M.cJ,A.cy,A.e2,A.dp,A.fT,F.Y,F.aM,F.bp,F.dd,F.fi,F.fj,F.fk,F.aG,F.h9,F.ha,F.hd,F.he,O.bv,T.fB,V.aJ,V.ah,V.d0,V.f9,V.fh,V.c2,V.dm,V.c6,V.fE,X.cE,X.di,X.d7,V.aX,V.f6,V.fl,V.fx])
s(J.a0,[J.eE,J.cT,J.cV,J.aB,J.cU,J.bl,H.bo,W.bf,W.bc,W.dC,W.eh,W.cH,W.cI,W.j,W.cN,W.dF,W.aL,W.cZ,W.dK,W.da,W.av,W.dQ,W.dW,P.cz,P.cL,P.d9,P.bu,P.dc,P.dj,P.dr])
s(J.cV,[J.f3,J.c8,J.b1])
t(J.iR,J.aB)
s(J.cU,[J.cS,J.cR])
t(P.eM,P.dI)
s(P.eM,[H.dt,W.hp,W.aa,P.es])
t(H.n,H.dt)
s(P.o,[H.ek,H.eR,H.cb])
s(H.ek,[H.bm,H.eJ])
s(P.aA,[H.eS,H.hj])
t(H.eT,H.bm)
t(H.ed,H.ec)
s(P.b_,[H.f1,H.eG,H.fZ,H.fK,H.e8,H.ff,P.d6,P.as,P.h_,P.fX,P.c3,P.eb,P.ef])
s(H.bM,[H.iH,H.fv,H.io,H.ip,H.iq,P.hl,P.hk,P.hm,P.hn,P.hX,P.hW,P.hv,P.hz,P.hw,P.hx,P.hy,P.hC,P.hD,P.hB,P.hA,P.fs,P.ft,P.id,P.hK,P.hJ,P.hL,P.eL,P.eP,P.i3,P.ei,P.ej,P.h5,P.h1,P.h3,P.h4,P.hZ,P.i_,P.i1,P.i0,P.i8,P.i7,P.i9,P.ia,W.el,W.hu,W.f0,W.f_,W.hO,W.hP,W.hV,W.i5,P.hS,P.ig,P.et,P.eu,E.fc,E.fd,E.fe,E.fD,D.ep,D.eq,F.ik,F.il,F.hg,F.hf,F.hb,F.hc,T.fC,V.iG,V.f7,V.fn,V.fm,V.fo,V.fz,V.fy,T.is,T.it,T.iu,T.iw,T.ix,T.iy,T.iz,T.iA,T.iB,T.iC,T.iD,T.iv])
s(H.fv,[H.fp,H.bK])
t(P.eO,P.bn)
s(P.eO,[H.au,W.ho])
t(H.d1,H.bo)
s(H.d1,[H.cf,H.ch])
t(H.cg,H.cf)
t(H.d2,H.cg)
t(H.ci,H.ch)
t(H.d3,H.ci)
s(H.d3,[H.eW,H.eX,H.eY,H.eZ,H.d4,H.bY])
t(P.hI,P.i6)
t(P.hG,P.hN)
t(P.dT,P.eQ)
t(P.du,P.dT)
s(P.bd,[P.e3,P.em])
t(P.aY,P.fr)
s(P.aY,[P.e4,P.eA,P.h8,P.h7])
t(P.h6,P.em)
s(P.a6,[P.w,P.k])
s(P.as,[P.bt,P.eC])
t(P.hq,P.by)
s(W.bf,[W.x,W.cc])
s(W.x,[W.A,W.aW,W.bO,W.cd])
s(W.A,[W.t,P.m])
s(W.t,[W.cw,W.e1,W.bJ,W.aV,W.bb,W.al,W.ev,W.cM,W.bi,W.bT,W.cX,W.bW,W.fg,W.aD,W.dg,W.dh,W.fu,W.c5])
t(W.bN,W.dC)
t(W.dG,W.dF)
t(W.bh,W.dG)
t(W.cO,W.bO)
t(W.b6,W.j)
s(W.b6,[W.aC,W.R,W.aw])
t(W.dL,W.dK)
t(W.bZ,W.dL)
t(W.dR,W.dQ)
t(W.fH,W.dR)
t(W.hh,W.bW)
t(W.aH,W.R)
t(W.dD,W.cI)
t(W.dX,W.dW)
t(W.dJ,W.dX)
t(W.hr,W.ho)
t(W.hs,P.fq)
t(W.j_,W.hs)
t(W.ht,P.c4)
t(W.hU,W.dM)
t(P.dO,P.hR)
t(P.am,P.hH)
t(P.c0,P.m)
s(E.e5,[Z.cA,A.c1,T.fw])
s(D.v,[D.cP,D.cQ,D.H,X.f5])
s(X.f5,[X.d_,X.aO,X.bX,X.dn])
s(D.e9,[U.ea,U.a1])
t(U.cF,U.a1)
t(U.bS,O.X)
s(A.dp,[A.fL,A.fO,A.fQ,A.fS,A.fM,A.dq,A.fN,A.fP,A.fR,A.fU,A.fV,A.bw,A.ds,A.fW])
t(T.dk,T.fw)
t(T.fA,T.dk)
s(V.d0,[V.ab,V.c7])
t(X.ex,X.di)
s(V.aX,[V.eg,V.ey,V.ez,V.f4])
t(T.e7,A.c1)
t(T.cC,O.bv)
u(H.dt,H.c9)
u(H.cf,P.J)
u(H.cg,H.bg)
u(H.ch,P.J)
u(H.ci,H.bg)
u(P.dI,P.J)
u(P.dT,P.hY)
u(W.dC,W.ee)
u(W.dF,P.J)
u(W.dG,W.ag)
u(W.dK,P.J)
u(W.dL,W.ag)
u(W.dQ,P.J)
u(W.dR,W.ag)
u(W.dW,P.J)
u(W.dX,W.ag)})();(function constants(){var u=hunkHelpers.makeConstList
C.l=W.aV.prototype
C.m=W.bb.prototype
C.y=W.bc.prototype
C.f=W.al.prototype
C.Q=W.cH.prototype
C.S=W.cM.prototype
C.z=W.cN.prototype
C.n=W.cO.prototype
C.U=J.a0.prototype
C.a=J.aB.prototype
C.V=J.cR.prototype
C.d=J.cS.prototype
C.W=J.cT.prototype
C.e=J.cU.prototype
C.b=J.bl.prototype
C.a2=J.b1.prototype
C.C=W.cX.prototype
C.a8=W.bZ.prototype
C.I=J.f3.prototype
C.J=W.da.prototype
C.c=P.bu.prototype
C.t=W.aD.prototype
C.k=W.dg.prototype
C.j=W.dh.prototype
C.x=J.c8.prototype
C.K=W.aH.prototype
C.L=W.cc.prototype
C.N=new P.e4(!1)
C.M=new P.e3(C.N)
C.O=new P.f2()
C.P=new P.h8()
C.h=new P.hI()
C.u=new P.aZ(0)
C.R=new P.aZ(5e6)
C.T=new P.eB("element",!0,!1,!1,!1)
C.X=function(hooks) {
  if (typeof dartExperimentalFixupGetTag != "function") return hooks;
  hooks.getTag = dartExperimentalFixupGetTag(hooks.getTag);
}
C.Y=function(hooks) {
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

C.Z=function(getTagFallback) {
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
C.a_=function() {
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
C.a0=function(hooks) {
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
C.a1=function(hooks) {
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
C.D=H.a(u([127,2047,65535,1114111]),[P.k])
C.o=H.a(u([0,0,32776,33792,1,10240,0,0]),[P.k])
C.a3=H.a(u(["*::class","*::dir","*::draggable","*::hidden","*::id","*::inert","*::itemprop","*::itemref","*::itemscope","*::lang","*::spellcheck","*::title","*::translate","A::accesskey","A::coords","A::hreflang","A::name","A::shape","A::tabindex","A::target","A::type","AREA::accesskey","AREA::alt","AREA::coords","AREA::nohref","AREA::shape","AREA::tabindex","AREA::target","AUDIO::controls","AUDIO::loop","AUDIO::mediagroup","AUDIO::muted","AUDIO::preload","BDO::dir","BODY::alink","BODY::bgcolor","BODY::link","BODY::text","BODY::vlink","BR::clear","BUTTON::accesskey","BUTTON::disabled","BUTTON::name","BUTTON::tabindex","BUTTON::type","BUTTON::value","CANVAS::height","CANVAS::width","CAPTION::align","COL::align","COL::char","COL::charoff","COL::span","COL::valign","COL::width","COLGROUP::align","COLGROUP::char","COLGROUP::charoff","COLGROUP::span","COLGROUP::valign","COLGROUP::width","COMMAND::checked","COMMAND::command","COMMAND::disabled","COMMAND::label","COMMAND::radiogroup","COMMAND::type","DATA::value","DEL::datetime","DETAILS::open","DIR::compact","DIV::align","DL::compact","FIELDSET::disabled","FONT::color","FONT::face","FONT::size","FORM::accept","FORM::autocomplete","FORM::enctype","FORM::method","FORM::name","FORM::novalidate","FORM::target","FRAME::name","H1::align","H2::align","H3::align","H4::align","H5::align","H6::align","HR::align","HR::noshade","HR::size","HR::width","HTML::version","IFRAME::align","IFRAME::frameborder","IFRAME::height","IFRAME::marginheight","IFRAME::marginwidth","IFRAME::width","IMG::align","IMG::alt","IMG::border","IMG::height","IMG::hspace","IMG::ismap","IMG::name","IMG::usemap","IMG::vspace","IMG::width","INPUT::accept","INPUT::accesskey","INPUT::align","INPUT::alt","INPUT::autocomplete","INPUT::autofocus","INPUT::checked","INPUT::disabled","INPUT::inputmode","INPUT::ismap","INPUT::list","INPUT::max","INPUT::maxlength","INPUT::min","INPUT::multiple","INPUT::name","INPUT::placeholder","INPUT::readonly","INPUT::required","INPUT::size","INPUT::step","INPUT::tabindex","INPUT::type","INPUT::usemap","INPUT::value","INS::datetime","KEYGEN::disabled","KEYGEN::keytype","KEYGEN::name","LABEL::accesskey","LABEL::for","LEGEND::accesskey","LEGEND::align","LI::type","LI::value","LINK::sizes","MAP::name","MENU::compact","MENU::label","MENU::type","METER::high","METER::low","METER::max","METER::min","METER::value","OBJECT::typemustmatch","OL::compact","OL::reversed","OL::start","OL::type","OPTGROUP::disabled","OPTGROUP::label","OPTION::disabled","OPTION::label","OPTION::selected","OPTION::value","OUTPUT::for","OUTPUT::name","P::align","PRE::width","PROGRESS::max","PROGRESS::min","PROGRESS::value","SELECT::autocomplete","SELECT::disabled","SELECT::multiple","SELECT::name","SELECT::required","SELECT::size","SELECT::tabindex","SOURCE::type","TABLE::align","TABLE::bgcolor","TABLE::border","TABLE::cellpadding","TABLE::cellspacing","TABLE::frame","TABLE::rules","TABLE::summary","TABLE::width","TBODY::align","TBODY::char","TBODY::charoff","TBODY::valign","TD::abbr","TD::align","TD::axis","TD::bgcolor","TD::char","TD::charoff","TD::colspan","TD::headers","TD::height","TD::nowrap","TD::rowspan","TD::scope","TD::valign","TD::width","TEXTAREA::accesskey","TEXTAREA::autocomplete","TEXTAREA::cols","TEXTAREA::disabled","TEXTAREA::inputmode","TEXTAREA::name","TEXTAREA::placeholder","TEXTAREA::readonly","TEXTAREA::required","TEXTAREA::rows","TEXTAREA::tabindex","TEXTAREA::wrap","TFOOT::align","TFOOT::char","TFOOT::charoff","TFOOT::valign","TH::abbr","TH::align","TH::axis","TH::bgcolor","TH::char","TH::charoff","TH::colspan","TH::headers","TH::height","TH::nowrap","TH::rowspan","TH::scope","TH::valign","TH::width","THEAD::align","THEAD::char","THEAD::charoff","THEAD::valign","TR::align","TR::bgcolor","TR::char","TR::charoff","TR::valign","TRACK::default","TRACK::kind","TRACK::label","TRACK::srclang","UL::compact","UL::type","VIDEO::controls","VIDEO::height","VIDEO::loop","VIDEO::mediagroup","VIDEO::muted","VIDEO::preload","VIDEO::width"]),[P.e])
C.p=H.a(u([0,0,65490,45055,65535,34815,65534,18431]),[P.k])
C.q=H.a(u([0,0,26624,1023,65534,2047,65534,2047]),[P.k])
C.a4=H.a(u(["HEAD","AREA","BASE","BASEFONT","BR","COL","COLGROUP","EMBED","FRAME","FRAMESET","HR","IMAGE","IMG","INPUT","ISINDEX","LINK","META","PARAM","SOURCE","STYLE","TITLE","WBR"]),[P.e])
C.E=H.a(u([]),[P.e])
C.a5=H.a(u([0,0,32722,12287,65534,34815,65534,18431]),[P.k])
C.F=H.a(u([0,0,65498,45055,65535,34815,65534,18431]),[P.k])
C.r=H.a(u([0,0,24576,1023,65534,34815,65534,18431]),[P.k])
C.G=H.a(u([0,0,32754,11263,65534,34815,65534,18431]),[P.k])
C.a6=H.a(u([0,0,32722,12287,65535,34815,65534,18431]),[P.k])
C.H=H.a(u([0,0,65490,12287,65535,34815,65534,18431]),[P.k])
C.v=H.a(u(["bind","if","ref","repeat","syntax"]),[P.e])
C.w=H.a(u(["A::href","AREA::href","BLOCKQUOTE::cite","BODY::background","COMMAND::icon","DEL::cite","FORM::action","IMG::src","INPUT::src","INS::cite","Q::cite","VIDEO::poster"]),[P.e])
C.a7=new H.ed(0,{},C.E,[P.e,P.e])
C.i=new P.h6(!1)})();(function staticFields(){$.ay=0
$.bL=null
$.jo=null
$.j3=!1
$.kq=null
$.kl=null
$.kw=null
$.ih=null
$.ir=null
$.jc=null
$.bz=null
$.cl=null
$.cm=null
$.j4=!1
$.N=C.h
$.aK=null
$.iO=null
$.jv=null
$.ju=null
$.jE=null
$.jJ=null
$.jK=null
$.jO=null
$.jZ=null
$.k1=null
$.k0=null
$.k_=null
$.jI=null
$.l3="uniform mat4 objMat;                                     \nuniform mat4 viewMat;                                    \nuniform mat4 projMat;                                    \nuniform sampler2D bumpTxt;                               \nuniform float offsetScalar;                              \n                                                         \nattribute vec3 posAttr;                                  \nattribute vec3 normAttr;                                 \nattribute vec3 binmAttr;                                 \nattribute vec2 txtAttr;                                  \nattribute float weightAttr;                              \n                                                         \nvarying vec3 color;                                      \n                                                         \nvec3 bumpyNormal(vec3 color)                             \n{                                                        \n   vec3 n = normalize(objMat*vec4(normAttr, 0.0)).xyz;   \n   vec3 b = normalize(objMat*vec4(binmAttr, 0.0)).xyz;   \n   vec3 c = cross(b, n);                                 \n   b = cross(n, c);                                      \n   mat3 mat = mat3( b.x,  b.y,  b.z,                     \n                   -c.x, -c.y, -c.z,                     \n                    n.x,  n.y,  n.z);                    \n   return mat * normalize(2.0*color - 1.0);              \n}                                                        \n                                                         \nvoid main()                                              \n{                                                        \n   color = texture2D(bumpTxt, txtAttr).rgb;              \n   vec4 pnt = projMat*viewMat*objMat*vec4(posAttr, 1.0); \n   if (weightAttr > 0.5)                                 \n   {                                                     \n     pnt += vec4(bumpyNormal(color)*offsetScalar, 0.0);  \n   }                                                     \n   gl_Position = pnt;                                    \n}                                                        \n"
$.l2="precision mediump float;            \n                                    \nvarying vec3 color;                 \n                                    \nvoid main()                         \n{                                   \n   gl_FragColor = vec4(color, 1.0); \n}                                   \n"})();(function lazyInitializers(){var u=hunkHelpers.lazy
u($,"n_","kz",function(){return H.kp("_$dart_dartClosure")})
u($,"n0","jh",function(){return H.kp("_$dart_js")})
u($,"n6","kA",function(){return H.aF(H.fJ({
toString:function(){return"$receiver$"}}))})
u($,"n7","kB",function(){return H.aF(H.fJ({$method$:null,
toString:function(){return"$receiver$"}}))})
u($,"n8","kC",function(){return H.aF(H.fJ(null))})
u($,"n9","kD",function(){return H.aF(function(){var $argumentsExpr$='$arguments$'
try{null.$method$($argumentsExpr$)}catch(t){return t.message}}())})
u($,"nc","kG",function(){return H.aF(H.fJ(void 0))})
u($,"nd","kH",function(){return H.aF(function(){var $argumentsExpr$='$arguments$'
try{(void 0).$method$($argumentsExpr$)}catch(t){return t.message}}())})
u($,"nb","kF",function(){return H.aF(H.jV(null))})
u($,"na","kE",function(){return H.aF(function(){try{null.$method$}catch(t){return t.message}}())})
u($,"nf","kJ",function(){return H.aF(H.jV(void 0))})
u($,"ne","kI",function(){return H.aF(function(){try{(void 0).$method$}catch(t){return t.message}}())})
u($,"nw","ji",function(){return P.lT()})
u($,"nC","cu",function(){return[]})
u($,"ni","kK",function(){return P.lQ()})
u($,"nx","kO",function(){return H.lp(H.ib(H.a([-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-1,-2,-2,-2,-2,-2,62,-2,62,-2,63,52,53,54,55,56,57,58,59,60,61,-2,-2,-2,-1,-2,-2,-2,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,-2,-2,-2,-2,63,-2,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,-2,-2,-2,-2,-2],[P.k])))})
u($,"nA","kQ",function(){return P.lE("^[\\-\\.0-9A-Z_a-z~]*$",!0,!1)})
u($,"nB","kR",function(){return P.mh()})
u($,"ny","kP",function(){return P.jC(["A","ABBR","ACRONYM","ADDRESS","AREA","ARTICLE","ASIDE","AUDIO","B","BDI","BDO","BIG","BLOCKQUOTE","BR","BUTTON","CANVAS","CAPTION","CENTER","CITE","CODE","COL","COLGROUP","COMMAND","DATA","DATALIST","DD","DEL","DETAILS","DFN","DIR","DIV","DL","DT","EM","FIELDSET","FIGCAPTION","FIGURE","FONT","FOOTER","FORM","H1","H2","H3","H4","H5","H6","HEADER","HGROUP","HR","I","IFRAME","IMG","INPUT","INS","KBD","LABEL","LEGEND","LI","MAP","MARK","MENU","METER","NAV","NOBR","OL","OPTGROUP","OPTION","OUTPUT","P","PRE","PROGRESS","Q","S","SAMP","SECTION","SELECT","SMALL","SOURCE","SPAN","STRIKE","STRONG","SUB","SUMMARY","SUP","TABLE","TBODY","TD","TEXTAREA","TFOOT","TH","THEAD","TIME","TR","TRACK","TT","U","UL","VAR","VIDEO","WBR"],P.e)})
u($,"nz","jj",function(){return P.jA(P.e,P.b0)})
u($,"np","kN",function(){return Z.an(0)})
u($,"nj","kL",function(){return Z.an(511)})
u($,"nr","aS",function(){return Z.an(1)})
u($,"nq","aR",function(){return Z.an(2)})
u($,"nl","aQ",function(){return Z.an(4)})
u($,"ns","aT",function(){return Z.an(8)})
u($,"nt","bH",function(){return Z.an(16)})
u($,"nm","cs",function(){return Z.an(32)})
u($,"nn","ct",function(){return Z.an(64)})
u($,"no","kM",function(){return Z.an(96)})
u($,"nu","aU",function(){return Z.an(128)})
u($,"nk","bG",function(){return Z.an(256)})
u($,"mZ","ky",function(){return new V.en(1e-9)})
u($,"mY","K",function(){return $.ky()})})()
var v={mangledGlobalNames:{k:"int",w:"double",a6:"num",e:"String",G:"bool",y:"Null",b:"List"},mangledNames:{},getTypeFromName:getGlobalFromName,metadata:[],types:[{func:1,ret:P.y},{func:1,ret:-1,args:[D.v]},{func:1,ret:-1,opt:[D.v]},{func:1,ret:-1},{func:1,ret:-1,args:[W.R]},{func:1,ret:P.y,args:[,,]},{func:1,ret:-1,args:[P.k,[P.o,E.a9]]},{func:1,ret:P.y,args:[D.v]},{func:1,ret:P.y,args:[F.Y]},{func:1,ret:-1,args:[{func:1,ret:-1}]},{func:1,ret:-1,args:[W.j]},{func:1,ret:-1,args:[W.aw]},{func:1,ret:P.y,args:[W.j]},{func:1,ret:P.G,args:[P.e]},{func:1,ret:P.e,args:[P.k]},{func:1,ret:P.y,args:[P.e]},{func:1,args:[,]},{func:1,ret:P.e,args:[P.e]},{func:1,ret:P.G,args:[W.x]},{func:1,ret:P.G,args:[W.aj]},{func:1,ret:-1,args:[P.k,[P.o,U.a1]]},{func:1,ret:P.y,args:[,]},{func:1,ret:P.w},{func:1,ret:P.G,args:[W.A,P.e,P.e,W.b7]},{func:1,ret:-1,args:[W.aC]},{func:1,ret:P.y,args:[{func:1,ret:-1,args:[D.v]}]},{func:1,ret:-1,args:[W.x,W.x]},{func:1,ret:W.A,args:[W.x]},{func:1,args:[,P.e]},{func:1,args:[P.e]},{func:1,ret:P.y,args:[,],opt:[P.ac]},{func:1,ret:P.C,args:[P.k]},{func:1,ret:-1,args:[P.e],opt:[,]},{func:1,args:[W.j]},{func:1,ret:P.C,args:[,,]},{func:1,ret:P.y,args:[P.e,,]},{func:1,ret:-1,args:[W.aH]},{func:1,ret:-1,args:[P.e,P.k]},{func:1,ret:-1,args:[P.e,P.e]},{func:1,ret:P.k,args:[P.k,P.k]},{func:1,ret:-1,args:[P.k,P.k]},{func:1,ret:P.w,args:[P.w,P.w]},{func:1,ret:P.y,args:[F.aG,P.w,P.w]},{func:1,ret:P.y,args:[{func:1,ret:-1}]},{func:1,ret:[P.B,P.e,P.e],args:[[P.B,P.e,P.e],P.e]},{func:1,ret:P.y,args:[P.aE]},{func:1,ret:P.G,args:[V.aX]},{func:1,ret:P.y,args:[W.R]},{func:1,ret:P.y,args:[W.A]},{func:1,ret:P.y,args:[P.a6]},{func:1,ret:[P.ao,,],args:[,]}],interceptorsByTag:null,leafTags:null};(function nativeSupport(){!function(){var u=function(a){var o={}
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
hunkHelpers.setOrUpdateInterceptorsByTag({DOMError:J.a0,MediaError:J.a0,Navigator:J.a0,NavigatorConcurrentHardware:J.a0,NavigatorUserMediaError:J.a0,OverconstrainedError:J.a0,PositionError:J.a0,WebGLActiveInfo:J.a0,WebGLRenderbuffer:J.a0,WebGL2RenderingContext:J.a0,SQLError:J.a0,ArrayBufferView:H.bo,Float32Array:H.d2,Int16Array:H.eW,Int32Array:H.eX,Int8Array:H.eY,Uint32Array:H.eZ,Uint8ClampedArray:H.d4,CanvasPixelArray:H.d4,Uint8Array:H.bY,HTMLBRElement:W.t,HTMLButtonElement:W.t,HTMLContentElement:W.t,HTMLDListElement:W.t,HTMLDataElement:W.t,HTMLDataListElement:W.t,HTMLDetailsElement:W.t,HTMLDialogElement:W.t,HTMLEmbedElement:W.t,HTMLFieldSetElement:W.t,HTMLHRElement:W.t,HTMLHeadingElement:W.t,HTMLHtmlElement:W.t,HTMLIFrameElement:W.t,HTMLLIElement:W.t,HTMLLegendElement:W.t,HTMLLinkElement:W.t,HTMLMapElement:W.t,HTMLMenuElement:W.t,HTMLMetaElement:W.t,HTMLMeterElement:W.t,HTMLModElement:W.t,HTMLOListElement:W.t,HTMLObjectElement:W.t,HTMLOptGroupElement:W.t,HTMLOptionElement:W.t,HTMLOutputElement:W.t,HTMLParagraphElement:W.t,HTMLParamElement:W.t,HTMLPictureElement:W.t,HTMLPreElement:W.t,HTMLProgressElement:W.t,HTMLQuoteElement:W.t,HTMLScriptElement:W.t,HTMLShadowElement:W.t,HTMLSlotElement:W.t,HTMLSourceElement:W.t,HTMLSpanElement:W.t,HTMLStyleElement:W.t,HTMLTableCaptionElement:W.t,HTMLTableColElement:W.t,HTMLTextAreaElement:W.t,HTMLTimeElement:W.t,HTMLTitleElement:W.t,HTMLTrackElement:W.t,HTMLUListElement:W.t,HTMLUnknownElement:W.t,HTMLDirectoryElement:W.t,HTMLFontElement:W.t,HTMLFrameElement:W.t,HTMLFrameSetElement:W.t,HTMLMarqueeElement:W.t,HTMLElement:W.t,HTMLAnchorElement:W.cw,HTMLAreaElement:W.e1,HTMLBaseElement:W.bJ,HTMLBodyElement:W.aV,HTMLCanvasElement:W.bb,CanvasRenderingContext2D:W.bc,CDATASection:W.aW,CharacterData:W.aW,Comment:W.aW,ProcessingInstruction:W.aW,Text:W.aW,CSSStyleDeclaration:W.bN,MSStyleCSSProperties:W.bN,CSS2Properties:W.bN,HTMLDivElement:W.al,XMLDocument:W.bO,Document:W.bO,DOMException:W.eh,DOMImplementation:W.cH,DOMRectReadOnly:W.cI,Element:W.A,AbortPaymentEvent:W.j,AnimationEvent:W.j,AnimationPlaybackEvent:W.j,ApplicationCacheErrorEvent:W.j,BackgroundFetchClickEvent:W.j,BackgroundFetchEvent:W.j,BackgroundFetchFailEvent:W.j,BackgroundFetchedEvent:W.j,BeforeInstallPromptEvent:W.j,BeforeUnloadEvent:W.j,BlobEvent:W.j,CanMakePaymentEvent:W.j,ClipboardEvent:W.j,CloseEvent:W.j,CustomEvent:W.j,DeviceMotionEvent:W.j,DeviceOrientationEvent:W.j,ErrorEvent:W.j,ExtendableEvent:W.j,ExtendableMessageEvent:W.j,FetchEvent:W.j,FontFaceSetLoadEvent:W.j,ForeignFetchEvent:W.j,GamepadEvent:W.j,HashChangeEvent:W.j,InstallEvent:W.j,MediaEncryptedEvent:W.j,MediaKeyMessageEvent:W.j,MediaQueryListEvent:W.j,MediaStreamEvent:W.j,MediaStreamTrackEvent:W.j,MessageEvent:W.j,MIDIConnectionEvent:W.j,MIDIMessageEvent:W.j,MutationEvent:W.j,NotificationEvent:W.j,PageTransitionEvent:W.j,PaymentRequestEvent:W.j,PaymentRequestUpdateEvent:W.j,PopStateEvent:W.j,PresentationConnectionAvailableEvent:W.j,PresentationConnectionCloseEvent:W.j,ProgressEvent:W.j,PromiseRejectionEvent:W.j,PushEvent:W.j,RTCDataChannelEvent:W.j,RTCDTMFToneChangeEvent:W.j,RTCPeerConnectionIceEvent:W.j,RTCTrackEvent:W.j,SecurityPolicyViolationEvent:W.j,SensorErrorEvent:W.j,SpeechRecognitionError:W.j,SpeechRecognitionEvent:W.j,SpeechSynthesisEvent:W.j,StorageEvent:W.j,SyncEvent:W.j,TrackEvent:W.j,TransitionEvent:W.j,WebKitTransitionEvent:W.j,VRDeviceEvent:W.j,VRDisplayEvent:W.j,VRSessionEvent:W.j,MojoInterfaceRequestEvent:W.j,ResourceProgressEvent:W.j,USBConnectionEvent:W.j,IDBVersionChangeEvent:W.j,AudioProcessingEvent:W.j,OfflineAudioCompletionEvent:W.j,WebGLContextEvent:W.j,Event:W.j,InputEvent:W.j,EventTarget:W.bf,HTMLFormElement:W.ev,HTMLHeadElement:W.cM,History:W.cN,HTMLCollection:W.bh,HTMLFormControlsCollection:W.bh,HTMLOptionsCollection:W.bh,HTMLDocument:W.cO,ImageData:W.aL,HTMLImageElement:W.bi,HTMLInputElement:W.bT,KeyboardEvent:W.aC,HTMLLabelElement:W.cX,Location:W.cZ,HTMLAudioElement:W.bW,HTMLMediaElement:W.bW,PointerEvent:W.R,MouseEvent:W.R,DragEvent:W.R,DocumentFragment:W.x,ShadowRoot:W.x,DocumentType:W.x,Node:W.x,NodeList:W.bZ,RadioNodeList:W.bZ,Range:W.da,HTMLSelectElement:W.fg,HTMLTableCellElement:W.aD,HTMLTableDataCellElement:W.aD,HTMLTableHeaderCellElement:W.aD,HTMLTableElement:W.dg,HTMLTableRowElement:W.dh,HTMLTableSectionElement:W.fu,HTMLTemplateElement:W.c5,Touch:W.av,TouchEvent:W.aw,TouchList:W.fH,CompositionEvent:W.b6,FocusEvent:W.b6,TextEvent:W.b6,UIEvent:W.b6,HTMLVideoElement:W.hh,WheelEvent:W.aH,Window:W.cc,DOMWindow:W.cc,Attr:W.cd,ClientRect:W.dD,DOMRect:W.dD,NamedNodeMap:W.dJ,MozNamedAttrMap:W.dJ,SVGScriptElement:P.c0,SVGAElement:P.m,SVGAnimateElement:P.m,SVGAnimateMotionElement:P.m,SVGAnimateTransformElement:P.m,SVGAnimationElement:P.m,SVGCircleElement:P.m,SVGClipPathElement:P.m,SVGDefsElement:P.m,SVGDescElement:P.m,SVGDiscardElement:P.m,SVGEllipseElement:P.m,SVGFEBlendElement:P.m,SVGFEColorMatrixElement:P.m,SVGFEComponentTransferElement:P.m,SVGFECompositeElement:P.m,SVGFEConvolveMatrixElement:P.m,SVGFEDiffuseLightingElement:P.m,SVGFEDisplacementMapElement:P.m,SVGFEDistantLightElement:P.m,SVGFEFloodElement:P.m,SVGFEFuncAElement:P.m,SVGFEFuncBElement:P.m,SVGFEFuncGElement:P.m,SVGFEFuncRElement:P.m,SVGFEGaussianBlurElement:P.m,SVGFEImageElement:P.m,SVGFEMergeElement:P.m,SVGFEMergeNodeElement:P.m,SVGFEMorphologyElement:P.m,SVGFEOffsetElement:P.m,SVGFEPointLightElement:P.m,SVGFESpecularLightingElement:P.m,SVGFESpotLightElement:P.m,SVGFETileElement:P.m,SVGFETurbulenceElement:P.m,SVGFilterElement:P.m,SVGForeignObjectElement:P.m,SVGGElement:P.m,SVGGeometryElement:P.m,SVGGraphicsElement:P.m,SVGImageElement:P.m,SVGLineElement:P.m,SVGLinearGradientElement:P.m,SVGMarkerElement:P.m,SVGMaskElement:P.m,SVGMetadataElement:P.m,SVGPathElement:P.m,SVGPatternElement:P.m,SVGPolygonElement:P.m,SVGPolylineElement:P.m,SVGRadialGradientElement:P.m,SVGRectElement:P.m,SVGSetElement:P.m,SVGStopElement:P.m,SVGStyleElement:P.m,SVGSVGElement:P.m,SVGSwitchElement:P.m,SVGSymbolElement:P.m,SVGTSpanElement:P.m,SVGTextContentElement:P.m,SVGTextElement:P.m,SVGTextPathElement:P.m,SVGTextPositioningElement:P.m,SVGTitleElement:P.m,SVGUseElement:P.m,SVGViewElement:P.m,SVGGradientElement:P.m,SVGComponentTransferFunctionElement:P.m,SVGFEDropShadowElement:P.m,SVGMPathElement:P.m,SVGElement:P.m,WebGLBuffer:P.cz,WebGLFramebuffer:P.cL,WebGLProgram:P.d9,WebGLRenderingContext:P.bu,WebGLShader:P.dc,WebGLTexture:P.dj,WebGLUniformLocation:P.dr})
hunkHelpers.setOrUpdateLeafTags({DOMError:true,MediaError:true,Navigator:true,NavigatorConcurrentHardware:true,NavigatorUserMediaError:true,OverconstrainedError:true,PositionError:true,WebGLActiveInfo:true,WebGLRenderbuffer:true,WebGL2RenderingContext:true,SQLError:true,ArrayBufferView:false,Float32Array:true,Int16Array:true,Int32Array:true,Int8Array:true,Uint32Array:true,Uint8ClampedArray:true,CanvasPixelArray:true,Uint8Array:false,HTMLBRElement:true,HTMLButtonElement:true,HTMLContentElement:true,HTMLDListElement:true,HTMLDataElement:true,HTMLDataListElement:true,HTMLDetailsElement:true,HTMLDialogElement:true,HTMLEmbedElement:true,HTMLFieldSetElement:true,HTMLHRElement:true,HTMLHeadingElement:true,HTMLHtmlElement:true,HTMLIFrameElement:true,HTMLLIElement:true,HTMLLegendElement:true,HTMLLinkElement:true,HTMLMapElement:true,HTMLMenuElement:true,HTMLMetaElement:true,HTMLMeterElement:true,HTMLModElement:true,HTMLOListElement:true,HTMLObjectElement:true,HTMLOptGroupElement:true,HTMLOptionElement:true,HTMLOutputElement:true,HTMLParagraphElement:true,HTMLParamElement:true,HTMLPictureElement:true,HTMLPreElement:true,HTMLProgressElement:true,HTMLQuoteElement:true,HTMLScriptElement:true,HTMLShadowElement:true,HTMLSlotElement:true,HTMLSourceElement:true,HTMLSpanElement:true,HTMLStyleElement:true,HTMLTableCaptionElement:true,HTMLTableColElement:true,HTMLTextAreaElement:true,HTMLTimeElement:true,HTMLTitleElement:true,HTMLTrackElement:true,HTMLUListElement:true,HTMLUnknownElement:true,HTMLDirectoryElement:true,HTMLFontElement:true,HTMLFrameElement:true,HTMLFrameSetElement:true,HTMLMarqueeElement:true,HTMLElement:false,HTMLAnchorElement:true,HTMLAreaElement:true,HTMLBaseElement:true,HTMLBodyElement:true,HTMLCanvasElement:true,CanvasRenderingContext2D:true,CDATASection:true,CharacterData:true,Comment:true,ProcessingInstruction:true,Text:true,CSSStyleDeclaration:true,MSStyleCSSProperties:true,CSS2Properties:true,HTMLDivElement:true,XMLDocument:true,Document:false,DOMException:true,DOMImplementation:true,DOMRectReadOnly:false,Element:false,AbortPaymentEvent:true,AnimationEvent:true,AnimationPlaybackEvent:true,ApplicationCacheErrorEvent:true,BackgroundFetchClickEvent:true,BackgroundFetchEvent:true,BackgroundFetchFailEvent:true,BackgroundFetchedEvent:true,BeforeInstallPromptEvent:true,BeforeUnloadEvent:true,BlobEvent:true,CanMakePaymentEvent:true,ClipboardEvent:true,CloseEvent:true,CustomEvent:true,DeviceMotionEvent:true,DeviceOrientationEvent:true,ErrorEvent:true,ExtendableEvent:true,ExtendableMessageEvent:true,FetchEvent:true,FontFaceSetLoadEvent:true,ForeignFetchEvent:true,GamepadEvent:true,HashChangeEvent:true,InstallEvent:true,MediaEncryptedEvent:true,MediaKeyMessageEvent:true,MediaQueryListEvent:true,MediaStreamEvent:true,MediaStreamTrackEvent:true,MessageEvent:true,MIDIConnectionEvent:true,MIDIMessageEvent:true,MutationEvent:true,NotificationEvent:true,PageTransitionEvent:true,PaymentRequestEvent:true,PaymentRequestUpdateEvent:true,PopStateEvent:true,PresentationConnectionAvailableEvent:true,PresentationConnectionCloseEvent:true,ProgressEvent:true,PromiseRejectionEvent:true,PushEvent:true,RTCDataChannelEvent:true,RTCDTMFToneChangeEvent:true,RTCPeerConnectionIceEvent:true,RTCTrackEvent:true,SecurityPolicyViolationEvent:true,SensorErrorEvent:true,SpeechRecognitionError:true,SpeechRecognitionEvent:true,SpeechSynthesisEvent:true,StorageEvent:true,SyncEvent:true,TrackEvent:true,TransitionEvent:true,WebKitTransitionEvent:true,VRDeviceEvent:true,VRDisplayEvent:true,VRSessionEvent:true,MojoInterfaceRequestEvent:true,ResourceProgressEvent:true,USBConnectionEvent:true,IDBVersionChangeEvent:true,AudioProcessingEvent:true,OfflineAudioCompletionEvent:true,WebGLContextEvent:true,Event:false,InputEvent:false,EventTarget:false,HTMLFormElement:true,HTMLHeadElement:true,History:true,HTMLCollection:true,HTMLFormControlsCollection:true,HTMLOptionsCollection:true,HTMLDocument:true,ImageData:true,HTMLImageElement:true,HTMLInputElement:true,KeyboardEvent:true,HTMLLabelElement:true,Location:true,HTMLAudioElement:true,HTMLMediaElement:false,PointerEvent:true,MouseEvent:false,DragEvent:false,DocumentFragment:true,ShadowRoot:true,DocumentType:true,Node:false,NodeList:true,RadioNodeList:true,Range:true,HTMLSelectElement:true,HTMLTableCellElement:true,HTMLTableDataCellElement:true,HTMLTableHeaderCellElement:true,HTMLTableElement:true,HTMLTableRowElement:true,HTMLTableSectionElement:true,HTMLTemplateElement:true,Touch:true,TouchEvent:true,TouchList:true,CompositionEvent:true,FocusEvent:true,TextEvent:true,UIEvent:false,HTMLVideoElement:true,WheelEvent:true,Window:true,DOMWindow:true,Attr:true,ClientRect:true,DOMRect:true,NamedNodeMap:true,MozNamedAttrMap:true,SVGScriptElement:true,SVGAElement:true,SVGAnimateElement:true,SVGAnimateMotionElement:true,SVGAnimateTransformElement:true,SVGAnimationElement:true,SVGCircleElement:true,SVGClipPathElement:true,SVGDefsElement:true,SVGDescElement:true,SVGDiscardElement:true,SVGEllipseElement:true,SVGFEBlendElement:true,SVGFEColorMatrixElement:true,SVGFEComponentTransferElement:true,SVGFECompositeElement:true,SVGFEConvolveMatrixElement:true,SVGFEDiffuseLightingElement:true,SVGFEDisplacementMapElement:true,SVGFEDistantLightElement:true,SVGFEFloodElement:true,SVGFEFuncAElement:true,SVGFEFuncBElement:true,SVGFEFuncGElement:true,SVGFEFuncRElement:true,SVGFEGaussianBlurElement:true,SVGFEImageElement:true,SVGFEMergeElement:true,SVGFEMergeNodeElement:true,SVGFEMorphologyElement:true,SVGFEOffsetElement:true,SVGFEPointLightElement:true,SVGFESpecularLightingElement:true,SVGFESpotLightElement:true,SVGFETileElement:true,SVGFETurbulenceElement:true,SVGFilterElement:true,SVGForeignObjectElement:true,SVGGElement:true,SVGGeometryElement:true,SVGGraphicsElement:true,SVGImageElement:true,SVGLineElement:true,SVGLinearGradientElement:true,SVGMarkerElement:true,SVGMaskElement:true,SVGMetadataElement:true,SVGPathElement:true,SVGPatternElement:true,SVGPolygonElement:true,SVGPolylineElement:true,SVGRadialGradientElement:true,SVGRectElement:true,SVGSetElement:true,SVGStopElement:true,SVGStyleElement:true,SVGSVGElement:true,SVGSwitchElement:true,SVGSymbolElement:true,SVGTSpanElement:true,SVGTextContentElement:true,SVGTextElement:true,SVGTextPathElement:true,SVGTextPositioningElement:true,SVGTitleElement:true,SVGUseElement:true,SVGViewElement:true,SVGGradientElement:true,SVGComponentTransferFunctionElement:true,SVGFEDropShadowElement:true,SVGMPathElement:true,SVGElement:false,WebGLBuffer:true,WebGLFramebuffer:true,WebGLProgram:true,WebGLRenderingContext:true,WebGLShader:true,WebGLTexture:true,WebGLUniformLocation:true})
H.d1.$nativeSuperclassTag="ArrayBufferView"
H.cf.$nativeSuperclassTag="ArrayBufferView"
H.cg.$nativeSuperclassTag="ArrayBufferView"
H.d2.$nativeSuperclassTag="ArrayBufferView"
H.ch.$nativeSuperclassTag="ArrayBufferView"
H.ci.$nativeSuperclassTag="ArrayBufferView"
H.d3.$nativeSuperclassTag="ArrayBufferView"})()
convertAllToFastObject(w)
convertToFastObject($);(function(a){if(typeof document==="undefined"){a(null)
return}if(typeof document.currentScript!='undefined'){a(document.currentScript)
return}var u=document.scripts
function onLoad(b){for(var s=0;s<u.length;++s)u[s].removeEventListener("load",onLoad,false)
a(b.target)}for(var t=0;t<u.length;++t)u[t].addEventListener("load",onLoad,false)})(function(a){v.currentScript=a
if(typeof dartMainRunner==="function")dartMainRunner(T.kt,[])
else T.kt([])})})()
//# sourceMappingURL=test.dart.js.map
