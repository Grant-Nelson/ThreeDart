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
a[c]=function(){a[c]=function(){H.mT(b)}
var t
var s=d
try{if(a[b]===u){t=a[b]=s
t=a[b]=d()}else t=a[b]}finally{if(t===s)a[b]=null
a[c]=function(){return this[b]}}return t}}function makeConstList(a){a.immutable$list=Array
a.fixed$length=Array
return a}function convertToFastObject(a){function t(){}t.prototype=a
new t()
return a}function convertAllToFastObject(a){for(var u=0;u<a.length;++u)convertToFastObject(a[u])}var y=0
function tearOffGetter(a,b,c,d,e){return e?new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+d+y+++"(receiver) {"+"if (c === null) c = "+"H.jc"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, true, name);"+"return new c(this, funcs[0], receiver, name);"+"}")(a,b,c,d,H,null):new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+d+y+++"() {"+"if (c === null) c = "+"H.jc"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, false, name);"+"return new c(this, funcs[0], null, name);"+"}")(a,b,c,d,H,null)}function tearOff(a,b,c,d,e,f){var u=null
return d?function(){if(u===null)u=H.jc(this,a,b,c,true,false,e).prototype
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
if(w[u][a])return w[u][a]}}var C={},H={iT:function iT(a){this.a=a},
iq:function(a){var u,t
u=a^48
if(u<=9)return u
t=a|32
if(97<=t&&t<=102)return t-87
return-1},
jA:function(){return new P.fD("No element")},
Y:function Y(a){this.a=a},
eD:function eD(){},
dh:function dh(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=null
_.$ti=d},
f6:function f6(a,b,c){this.a=a
this.b=b
this.$ti=c},
f7:function f7(a,b,c){var _=this
_.a=null
_.b=a
_.c=b
_.$ti=c},
hq:function hq(a,b,c){this.a=a
this.b=b
this.$ti=c},
hr:function hr(a,b,c){this.a=a
this.b=b
this.$ti=c},
bB:function bB(){},
cu:function cu(){},
dR:function dR(){},
l4:function(){throw H.e(P.V("Cannot modify unmodifiable Map"))},
bU:function(a){var u,t
u=H.N(v.mangledGlobalNames[a])
if(typeof u==="string")return u
t="minified:"+a
return t},
mC:function(a){return v.types[H.a6(a)]},
mI:function(a,b){var u
if(b!=null){u=b.x
if(u!=null)return u}return!!J.O(a).$ib_},
i:function(a){var u
if(typeof a==="string")return a
if(typeof a==="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
u=J.ao(a)
if(typeof u!=="string")throw H.e(H.an(a))
return u},
lE:function(a){var u,t,s
u=a.$reflectionInfo
if(u==null)return
u=J.eR(u)
t=u[0]
s=u[1]
return new H.fo(a,u,(t&2)===2,t>>2,s>>1,(s&1)===1,u[2])},
ce:function(a){var u=a.$identityHash
if(u==null){u=Math.random()*0x3fffffff|0
a.$identityHash=u}return u},
lB:function(a,b){var u,t,s,r,q,p
u=/^\s*[+-]?((0x[a-f0-9]+)|(\d+)|([a-z0-9]+))\s*$/i.exec(a)
if(u==null)return
if(3>=u.length)return H.c(u,3)
t=H.N(u[3])
if(b==null){if(t!=null)return parseInt(a,10)
if(u[2]!=null)return parseInt(a,16)
return}if(b<2||b>36)throw H.e(P.a5(b,2,36,"radix",null))
if(b===10&&t!=null)return parseInt(a,10)
if(b<10||t==null){s=b<=10?47+b:86+b
r=u[1]
for(q=r.length,p=0;p<q;++p)if((C.c.K(r,p)|32)>s)return}return parseInt(a,b)},
bG:function(a){return H.ls(a)+H.ja(H.bs(a),0,null)},
ls:function(a){var u,t,s,r,q,p,o,n,m
u=J.O(a)
t=u.constructor
if(typeof t=="function"){s=t.name
r=typeof s==="string"?s:null}else r=null
q=r==null
if(q||u===C.P||!!u.$ict){p=C.A(a)
if(q)r=p
if(p==="Object"){o=a.constructor
if(typeof o=="function"){n=String(o).match(/^\s*function\s*([\w$]*)\s*\(/)
m=n==null?null:n[1]
if(typeof m==="string"&&/^\w+$/.test(m))r=m}}return r}r=r
return H.bU(r.length>1&&C.c.K(r,0)===36?C.c.aF(r,1):r)},
lt:function(){if(!!self.location)return self.location.href
return},
jO:function(a){var u,t,s,r,q
H.ee(a)
u=J.aY(a)
if(u<=500)return String.fromCharCode.apply(null,a)
for(t="",s=0;s<u;s=r){r=s+500
q=r<u?r:u
t+=String.fromCharCode.apply(null,a.slice(s,q))}return t},
lC:function(a){var u,t,s,r
u=H.b([],[P.j])
for(t=a.length,s=0;s<a.length;a.length===t||(0,H.z)(a),++s){r=a[s]
if(typeof r!=="number"||Math.floor(r)!==r)throw H.e(H.an(r))
if(r<=65535)C.a.h(u,r)
else if(r<=1114111){C.a.h(u,55296+(C.e.aT(r-65536,10)&1023))
C.a.h(u,56320+(r&1023))}else throw H.e(H.an(r))}return H.jO(u)},
jP:function(a){var u,t,s
for(u=a.length,t=0;t<u;++t){s=a[t]
if(typeof s!=="number"||Math.floor(s)!==s)throw H.e(H.an(s))
if(s<0)throw H.e(H.an(s))
if(s>65535)return H.lC(a)}return H.jO(a)},
lD:function(a,b,c){var u,t,s,r
if(c<=500&&b===0&&c===a.length)return String.fromCharCode.apply(null,a)
for(u=b,t="";u<c;u=s){s=u+500
r=s<c?s:c
t+=String.fromCharCode.apply(null,a.subarray(u,r))}return t},
dt:function(a){var u
if(0<=a){if(a<=65535)return String.fromCharCode(a)
if(a<=1114111){u=a-65536
return String.fromCharCode((55296|C.e.aT(u,10))>>>0,56320|u&1023)}}throw H.e(P.a5(a,0,1114111,null,null))},
bF:function(a){if(a.date===void 0)a.date=new Date(a.a)
return a.date},
lA:function(a){var u=H.bF(a).getFullYear()+0
return u},
ly:function(a){var u=H.bF(a).getMonth()+1
return u},
lu:function(a){var u=H.bF(a).getDate()+0
return u},
lv:function(a){var u=H.bF(a).getHours()+0
return u},
lx:function(a){var u=H.bF(a).getMinutes()+0
return u},
lz:function(a){var u=H.bF(a).getSeconds()+0
return u},
lw:function(a){var u=H.bF(a).getMilliseconds()+0
return u},
u:function(a){throw H.e(H.an(a))},
c:function(a,b){if(a==null)J.aY(a)
throw H.e(H.bQ(a,b))},
bQ:function(a,b){var u,t
if(typeof b!=="number"||Math.floor(b)!==b)return new P.aH(!0,b,"index",null)
u=H.a6(J.aY(a))
if(!(b<0)){if(typeof u!=="number")return H.u(u)
t=b>=u}else t=!0
if(t)return P.c5(b,a,"index",null,u)
return P.dv(b,"index",null)},
my:function(a,b,c){if(a>c)return new P.bH(0,c,!0,a,"start","Invalid value")
if(b!=null)if(b<a||b>c)return new P.bH(a,c,!0,b,"end","Invalid value")
return new P.aH(!0,b,"end",null)},
an:function(a){return new P.aH(!0,a,null,null)},
mu:function(a){if(typeof a!=="number")throw H.e(H.an(a))
return a},
e:function(a){var u
if(a==null)a=new P.dr()
u=new Error()
u.dartException=a
if("defineProperty" in Object){Object.defineProperty(u,"message",{get:H.kC})
u.name=""}else u.toString=H.kC
return u},
kC:function(){return J.ao(this.dartException)},
o:function(a){throw H.e(a)},
z:function(a){throw H.e(P.bz(a))},
aS:function(a){var u,t,s,r,q,p
a=a.replace(String({}),'$receiver$').replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
u=a.match(/\\\$[a-zA-Z]+\\\$/g)
if(u==null)u=H.b([],[P.l])
t=u.indexOf("\\$arguments\\$")
s=u.indexOf("\\$argumentsExpr\\$")
r=u.indexOf("\\$expr\\$")
q=u.indexOf("\\$method\\$")
p=u.indexOf("\\$receiver\\$")
return new H.fS(a.replace(new RegExp('\\\\\\$arguments\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$argumentsExpr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$expr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$method\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$receiver\\\\\\$','g'),'((?:x|[^x])*)'),t,s,r,q,p)},
fT:function(a){return function($expr$){var $argumentsExpr$='$arguments$'
try{$expr$.$method$($argumentsExpr$)}catch(u){return u.message}}(a)},
jW:function(a){return function($expr$){try{$expr$.$method$}catch(u){return u.message}}(a)},
jI:function(a,b){return new H.fk(a,b==null?null:b.method)},
iU:function(a,b){var u,t
u=b==null
t=u?null:b.method
return new H.eU(a,t,u?null:b.receiver)},
ay:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g
u=new H.iH(a)
if(a==null)return
if(typeof a!=="object")return a
if("dartException" in a)return u.$1(a.dartException)
else if(!("message" in a))return a
t=a.message
if("number" in a&&typeof a.number=="number"){s=a.number
r=s&65535
if((C.e.aT(s,16)&8191)===10)switch(r){case 438:return u.$1(H.iU(H.i(t)+" (Error "+r+")",null))
case 445:case 5007:return u.$1(H.jI(H.i(t)+" (Error "+r+")",null))}}if(a instanceof TypeError){q=$.kF()
p=$.kG()
o=$.kH()
n=$.kI()
m=$.kL()
l=$.kM()
k=$.kK()
$.kJ()
j=$.kO()
i=$.kN()
h=q.ap(t)
if(h!=null)return u.$1(H.iU(H.N(t),h))
else{h=p.ap(t)
if(h!=null){h.method="call"
return u.$1(H.iU(H.N(t),h))}else{h=o.ap(t)
if(h==null){h=n.ap(t)
if(h==null){h=m.ap(t)
if(h==null){h=l.ap(t)
if(h==null){h=k.ap(t)
if(h==null){h=n.ap(t)
if(h==null){h=j.ap(t)
if(h==null){h=i.ap(t)
g=h!=null}else g=!0}else g=!0}else g=!0}else g=!0}else g=!0}else g=!0}else g=!0
if(g)return u.$1(H.jI(H.N(t),h))}}return u.$1(new H.h3(typeof t==="string"?t:""))}if(a instanceof RangeError){if(typeof t==="string"&&t.indexOf("call stack")!==-1)return new P.dB()
t=function(b){try{return String(b)}catch(f){}return null}(a)
return u.$1(new P.aH(!1,null,null,typeof t==="string"?t.replace(/^RangeError:\s*/,""):t))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof t==="string"&&t==="too much recursion")return new P.dB()
return a},
bS:function(a){var u
if(a==null)return new H.e5(a)
u=a.$cachedTrace
if(u!=null)return u
return a.$cachedTrace=new H.e5(a)},
mB:function(a,b){var u,t,s,r
u=a.length
for(t=0;t<u;t=r){s=t+1
r=s+1
b.p(0,a[t],a[s])}return b},
mH:function(a,b,c,d,e,f){H.f(a,"$iiQ")
switch(H.a6(b)){case 0:return a.$0()
case 1:return a.$1(c)
case 2:return a.$2(c,d)
case 3:return a.$3(c,d,e)
case 4:return a.$4(c,d,e,f)}throw H.e(P.r("Unsupported number of arguments for wrapped closure"))},
bP:function(a,b){var u
H.a6(b)
if(a==null)return
u=a.$identity
if(!!u)return u
u=function(c,d,e){return function(f,g,h,i){return e(c,d,f,g,h,i)}}(a,b,H.mH)
a.$identity=u
return u},
l3:function(a,b,c,d,e,f,g){var u,t,s,r,q,p,o,n,m,l,k,j,i
u=b[0]
t=u.$callName
if(!!J.O(d).$ia){u.$reflectionInfo=d
s=H.lE(u).r}else s=d
r=e?Object.create(new H.fE().constructor.prototype):Object.create(new H.bV(null,null,null,null).constructor.prototype)
r.$initialize=r.constructor
if(e)q=function static_tear_off(){this.$initialize()}
else{p=$.aI
if(typeof p!=="number")return p.C()
$.aI=p+1
p=new Function("a,b,c,d"+p,"this.$initialize(a,b,c,d"+p+")")
q=p}r.constructor=q
q.prototype=r
if(!e){o=H.jt(a,u,f)
o.$reflectionInfo=d}else{r.$static_name=g
o=u}if(typeof s=="number")n=function(h,a0){return function(){return h(a0)}}(H.mC,s)
else if(typeof s=="function")if(e)n=s
else{m=f?H.jr:H.iM
n=function(h,a0){return function(){return h.apply({$receiver:a0(this)},arguments)}}(s,m)}else throw H.e("Error in reflectionInfo.")
r.$S=n
r[t]=o
for(l=o,k=1;k<b.length;++k){j=b[k]
i=j.$callName
if(i!=null){j=e?j:H.jt(a,j,f)
r[i]=j}if(k===c){j.$reflectionInfo=d
l=j}}r.$C=l
r.$R=u.$R
r.$D=u.$D
return q},
l0:function(a,b,c,d){var u=H.iM
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,u)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,u)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,u)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,u)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,u)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,u)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,u)}},
jt:function(a,b,c){var u,t,s,r,q,p,o
if(c)return H.l2(a,b)
u=b.$stubName
t=b.length
s=a[u]
r=b==null?s==null:b===s
q=!r||t>=27
if(q)return H.l0(t,!r,u,b)
if(t===0){r=$.aI
if(typeof r!=="number")return r.C()
$.aI=r+1
p="self"+r
r="return function(){var "+p+" = this."
q=$.bW
if(q==null){q=H.en("self")
$.bW=q}return new Function(r+H.i(q)+";return "+p+"."+H.i(u)+"();}")()}o="abcdefghijklmnopqrstuvwxyz".split("").splice(0,t).join(",")
r=$.aI
if(typeof r!=="number")return r.C()
$.aI=r+1
o+=r
r="return function("+o+"){return this."
q=$.bW
if(q==null){q=H.en("self")
$.bW=q}return new Function(r+H.i(q)+"."+H.i(u)+"("+o+");}")()},
l1:function(a,b,c,d){var u,t
u=H.iM
t=H.jr
switch(b?-1:a){case 0:throw H.e(H.lI("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,u,t)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,u,t)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,u,t)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,u,t)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,u,t)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,u,t)
default:return function(e,f,g,h){return function(){h=[g(this)]
Array.prototype.push.apply(h,arguments)
return e.apply(f(this),h)}}(d,u,t)}},
l2:function(a,b){var u,t,s,r,q,p,o,n
u=$.bW
if(u==null){u=H.en("self")
$.bW=u}t=$.jq
if(t==null){t=H.en("receiver")
$.jq=t}s=b.$stubName
r=b.length
q=a[s]
p=b==null?q==null:b===q
o=!p||r>=28
if(o)return H.l1(r,!p,s,b)
if(r===1){u="return function(){return this."+H.i(u)+"."+H.i(s)+"(this."+H.i(t)+");"
t=$.aI
if(typeof t!=="number")return t.C()
$.aI=t+1
return new Function(u+t+"}")()}n="abcdefghijklmnopqrstuvwxyz".split("").splice(0,r-1).join(",")
u="return function("+n+"){return this."+H.i(u)+"."+H.i(s)+"(this."+H.i(t)+", "+n+");"
t=$.aI
if(typeof t!=="number")return t.C()
$.aI=t+1
return new Function(u+t+"}")()},
jc:function(a,b,c,d,e,f,g){return H.l3(a,b,H.a6(c),d,!!e,!!f,g)},
iM:function(a){return a.a},
jr:function(a){return a.c},
en:function(a){var u,t,s,r,q
u=new H.bV("self","target","receiver","name")
t=J.eR(Object.getOwnPropertyNames(u))
for(s=t.length,r=0;r<s;++r){q=t[r]
if(u[q]===a)return q}},
N:function(a){if(a==null)return a
if(typeof a==="string")return a
throw H.e(H.aF(a,"String"))},
mz:function(a){if(a==null)return a
if(typeof a==="number")return a
throw H.e(H.aF(a,"double"))},
mM:function(a){if(a==null)return a
if(typeof a==="number")return a
throw H.e(H.aF(a,"num"))},
ko:function(a){if(a==null)return a
if(typeof a==="boolean")return a
throw H.e(H.aF(a,"bool"))},
a6:function(a){if(a==null)return a
if(typeof a==="number"&&Math.floor(a)===a)return a
throw H.e(H.aF(a,"int"))},
kx:function(a,b){throw H.e(H.aF(a,H.bU(H.N(b).substring(2))))},
mO:function(a,b){throw H.e(H.l_(a,H.bU(H.N(b).substring(2))))},
f:function(a,b){if(a==null)return a
if((typeof a==="object"||typeof a==="function")&&J.O(a)[b])return a
H.kx(a,b)},
d:function(a,b){var u
if(a!=null)u=(typeof a==="object"||typeof a==="function")&&J.O(a)[b]
else u=!0
if(u)return a
H.mO(a,b)},
ee:function(a){if(a==null)return a
if(!!J.O(a).$ia)return a
throw H.e(H.aF(a,"List<dynamic>"))},
ku:function(a,b){var u
if(a==null)return a
u=J.O(a)
if(!!u.$ia)return a
if(u[b])return a
H.kx(a,b)},
kp:function(a){var u
if("$S" in a){u=a.$S
if(typeof u=="number")return v.types[H.a6(u)]
else return a.$S()}return},
eb:function(a,b){var u
if(a==null)return!1
if(typeof a=="function")return!0
u=H.kp(J.O(a))
if(u==null)return!1
return H.ke(u,null,b,null)},
m:function(a,b){var u,t
if(a==null)return a
if($.j7)return a
$.j7=!0
try{if(H.eb(a,b))return a
u=H.iD(b)
t=H.aF(a,u)
throw H.e(t)}finally{$.j7=!1}},
jd:function(a,b){if(a!=null&&!H.jb(a,b))H.o(H.aF(a,H.iD(b)))
return a},
aF:function(a,b){return new H.fU("TypeError: "+P.eG(a)+": type '"+H.kj(a)+"' is not a subtype of type '"+b+"'")},
l_:function(a,b){return new H.eo("CastError: "+P.eG(a)+": type '"+H.kj(a)+"' is not a subtype of type '"+b+"'")},
kj:function(a){var u,t
u=J.O(a)
if(!!u.$ibY){t=H.kp(u)
if(t!=null)return H.iD(t)
return"Closure"}return H.bG(a)},
mT:function(a){throw H.e(new P.ey(H.N(a)))},
lI:function(a){return new H.ft(a)},
kr:function(a){return v.getIsolateTag(a)},
b:function(a,b){a.$ti=b
return a},
bs:function(a){if(a==null)return
return a.$ti},
ny:function(a,b,c){return H.bT(a["$a"+H.i(c)],H.bs(b))},
ec:function(a,b,c,d){var u
H.N(c)
H.a6(d)
u=H.bT(a["$a"+H.i(c)],H.bs(b))
return u==null?null:u[d]},
ar:function(a,b,c){var u
H.N(b)
H.a6(c)
u=H.bT(a["$a"+H.i(b)],H.bs(a))
return u==null?null:u[c]},
t:function(a,b){var u
H.a6(b)
u=H.bs(a)
return u==null?null:u[b]},
iD:function(a){return H.br(a,null)},
br:function(a,b){var u,t
H.h(b,"$ia",[P.l],"$aa")
if(a==null)return"dynamic"
if(a===-1)return"void"
if(typeof a==="object"&&a!==null&&a.constructor===Array)return H.bU(a[0].name)+H.ja(a,1,b)
if(typeof a=="function")return H.bU(a.name)
if(a===-2)return"dynamic"
if(typeof a==="number"){H.a6(a)
if(b==null||a<0||a>=b.length)return"unexpected-generic-index:"+a
u=b.length
t=u-a-1
if(t<0||t>=u)return H.c(b,t)
return H.i(b[t])}if('func' in a)return H.mj(a,b)
if('futureOr' in a)return"FutureOr<"+H.br("type" in a?a.type:null,b)+">"
return"unknown-reified-type"},
mj:function(a,b){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c
u=[P.l]
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
o=C.c.C(o,b[m])
l=t[p]
if(l!=null&&l!==P.L)o+=" extends "+H.br(l,b)}o+=">"}else{o=""
s=null}k=!!a.v?"void":H.br(a.ret,b)
if("args" in a){j=a.args
for(u=j.length,i="",h="",g=0;g<u;++g,h=", "){f=j[g]
i=i+h+H.br(f,b)}}else{i=""
h=""}if("opt" in a){e=a.opt
i+=h+"["
for(u=e.length,h="",g=0;g<u;++g,h=", "){f=e[g]
i=i+h+H.br(f,b)}i+="]"}if("named" in a){d=a.named
i+=h+"{"
for(u=H.mA(d),m=u.length,h="",g=0;g<m;++g,h=", "){c=H.N(u[g])
i=i+h+H.br(d[c],b)+(" "+H.i(c))}i+="}"}if(s!=null)b.length=s
return o+"("+i+") => "+k},
ja:function(a,b,c){var u,t,s,r,q,p
H.h(c,"$ia",[P.l],"$aa")
if(a==null)return""
u=new P.aj("")
for(t=b,s="",r=!0,q="";t<a.length;++t,s=", "){u.a=q+s
p=a[t]
if(p!=null)r=!1
q=u.a+=H.br(p,c)}return"<"+u.i(0)+">"},
bT:function(a,b){if(a==null)return b
a=a.apply(null,b)
if(a==null)return
if(typeof a==="object"&&a!==null&&a.constructor===Array)return a
if(typeof a=="function")return a.apply(null,b)
return b},
cI:function(a,b,c,d){var u,t
H.N(b)
H.ee(c)
H.N(d)
if(a==null)return!1
u=H.bs(a)
t=J.O(a)
if(t[b]==null)return!1
return H.km(H.bT(t[d],u),null,c,null)},
h:function(a,b,c,d){H.N(b)
H.ee(c)
H.N(d)
if(a==null)return a
if(H.cI(a,b,c,d))return a
throw H.e(H.aF(a,function(e,f){return e.replace(/[^<,> ]+/g,function(g){return f[g]||g})}(H.bU(b.substring(2))+H.ja(c,0,null),v.mangledGlobalNames)))},
km:function(a,b,c,d){var u,t
if(c==null)return!0
if(a==null){u=c.length
for(t=0;t<u;++t)if(!H.ax(null,null,c[t],d))return!1
return!0}u=a.length
for(t=0;t<u;++t)if(!H.ax(a[t],b,c[t],d))return!1
return!0},
nw:function(a,b,c){return a.apply(b,H.bT(J.O(b)["$a"+H.i(c)],H.bs(b)))},
kt:function(a){var u
if(typeof a==="number")return!1
if('futureOr' in a){u="type" in a?a.type:null
return a==null||a.name==="L"||a.name==="B"||a===-1||a===-2||H.kt(u)}return!1},
jb:function(a,b){var u,t
if(a==null)return b==null||b.name==="L"||b.name==="B"||b===-1||b===-2||H.kt(b)
if(b==null||b===-1||b.name==="L"||b===-2)return!0
if(typeof b=="object"){if('futureOr' in b)if(H.jb(a,"type" in b?b.type:null))return!0
if('func' in b)return H.eb(a,b)}u=J.O(a).constructor
t=H.bs(a)
if(t!=null){t=t.slice()
t.splice(0,0,u)
u=t}return H.ax(u,null,b,null)},
y:function(a,b){if(a!=null&&!H.jb(a,b))throw H.e(H.aF(a,H.iD(b)))
return a},
ax:function(a,b,c,d){var u,t,s,r,q,p,o,n,m
if(a===c)return!0
if(c==null||c===-1||c.name==="L"||c===-2)return!0
if(a===-2)return!0
if(a==null||a===-1||a.name==="L"||a===-2){if(typeof c==="number")return!1
if('futureOr' in c)return H.ax(a,b,"type" in c?c.type:null,d)
return!1}if(typeof a==="number")return!1
if(typeof c==="number")return!1
if(a.name==="B")return!0
if('func' in c)return H.ke(a,b,c,d)
if('func' in a)return c.name==="iQ"
u=typeof a==="object"&&a!==null&&a.constructor===Array
t=u?a[0]:a
if('futureOr' in c){s="type" in c?c.type:null
if('futureOr' in a)return H.ax("type" in a?a.type:null,b,s,d)
else if(H.ax(a,b,s,d))return!0
else{if(!('$i'+"c2" in t.prototype))return!1
r=t.prototype["$a"+"c2"]
q=H.bT(r,u?a.slice(1):null)
return H.ax(typeof q==="object"&&q!==null&&q.constructor===Array?q[0]:null,b,s,d)}}p=typeof c==="object"&&c!==null&&c.constructor===Array
o=p?c[0]:c
if(o!==t){n=o.name
if(!('$i'+n in t.prototype))return!1
m=t.prototype["$a"+n]}else m=null
if(!p)return!0
u=u?a.slice(1):null
p=c.slice(1)
return H.km(H.bT(m,u),b,p,d)},
ke:function(a,b,c,d){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g
if(!('func' in a))return!1
if("bounds" in a){if(!("bounds" in c))return!1
u=a.bounds
t=c.bounds
if(u.length!==t.length)return!1}else if("bounds" in c)return!1
if(!H.ax(a.ret,b,c.ret,d))return!1
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
for(k=0;k<o;++k)if(!H.ax(r[k],d,s[k],b))return!1
for(j=k,i=0;j<n;++i,++j)if(!H.ax(r[j],d,q[i],b))return!1
for(j=0;j<l;++i,++j)if(!H.ax(p[j],d,q[i],b))return!1
h=a.named
g=c.named
if(g==null)return!0
if(h==null)return!1
return H.mL(h,b,g,d)},
mL:function(a,b,c,d){var u,t,s,r
u=Object.getOwnPropertyNames(c)
for(t=u.length,s=0;s<t;++s){r=u[s]
if(!Object.hasOwnProperty.call(a,r))return!1
if(!H.ax(c[r],d,a[r],b))return!1}return!0},
nx:function(a,b,c){Object.defineProperty(a,H.N(b),{value:c,enumerable:false,writable:true,configurable:true})},
mJ:function(a){var u,t,s,r,q,p
u=H.N($.ks.$1(a))
t=$.il[u]
if(t!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:t,enumerable:false,writable:true,configurable:true})
return t.i}s=$.iu[u]
if(s!=null)return s
r=v.interceptorsByTag[u]
if(r==null){u=H.N($.kl.$2(a,u))
if(u!=null){t=$.il[u]
if(t!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:t,enumerable:false,writable:true,configurable:true})
return t.i}s=$.iu[u]
if(s!=null)return s
r=v.interceptorsByTag[u]}}if(r==null)return
s=r.prototype
q=u[0]
if(q==="!"){t=H.iC(s)
$.il[u]=t
Object.defineProperty(a,v.dispatchPropertyName,{value:t,enumerable:false,writable:true,configurable:true})
return t.i}if(q==="~"){$.iu[u]=s
return s}if(q==="-"){p=H.iC(s)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}if(q==="+")return H.kw(a,s)
if(q==="*")throw H.e(P.h2(u))
if(v.leafTags[u]===true){p=H.iC(s)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}else return H.kw(a,s)},
kw:function(a,b){var u=Object.getPrototypeOf(a)
Object.defineProperty(u,v.dispatchPropertyName,{value:J.jg(b,u,null,null),enumerable:false,writable:true,configurable:true})
return b},
iC:function(a){return J.jg(a,!1,null,!!a.$ib_)},
mK:function(a,b,c){var u=b.prototype
if(v.leafTags[a]===true)return H.iC(u)
else return J.jg(u,c,null,null)},
mF:function(){if(!0===$.jf)return
$.jf=!0
H.mG()},
mG:function(){var u,t,s,r,q,p,o,n
$.il=Object.create(null)
$.iu=Object.create(null)
H.mE()
u=v.interceptorsByTag
t=Object.getOwnPropertyNames(u)
if(typeof window!="undefined"){window
s=function(){}
for(r=0;r<t.length;++r){q=t[r]
p=$.ky.$1(q)
if(p!=null){o=H.mK(q,u[q],p)
if(o!=null){Object.defineProperty(p,v.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
s.prototype=p}}}}for(r=0;r<t.length;++r){q=t[r]
if(/^[A-Za-z_]/.test(q)){n=u[q]
u["!"+q]=n
u["~"+q]=n
u["-"+q]=n
u["+"+q]=n
u["*"+q]=n}}},
mE:function(){var u,t,s,r,q,p,o
u=C.U()
u=H.bO(C.R,H.bO(C.W,H.bO(C.z,H.bO(C.z,H.bO(C.V,H.bO(C.S,H.bO(C.T(C.A),u)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){t=dartNativeDispatchHooksTransformer
if(typeof t=="function")t=[t]
if(t.constructor==Array)for(s=0;s<t.length;++s){r=t[s]
if(typeof r=="function")u=r(u)||u}}q=u.getTag
p=u.getUnknownTag
o=u.prototypeForTag
$.ks=new H.ir(q)
$.kl=new H.is(p)
$.ky=new H.it(o)},
bO:function(a,b){return a(b)||b},
lg:function(a,b,c,d){var u,t,s,r
u=b?"m":""
t=c?"":"i"
s=d?"g":""
r=function(e,f){try{return new RegExp(e,f)}catch(q){return q}}(a,u+t+s)
if(r instanceof RegExp)return r
throw H.e(P.X("Illegal RegExp pattern ("+String(r)+")",a,null))},
mS:function(a,b,c){var u=a.indexOf(b,c)
return u>=0},
kA:function(a,b,c){var u,t,s
if(b==="")if(a==="")return c
else{u=a.length
for(t=c,s=0;s<u;++s)t=t+a[s]+c
return t.charCodeAt(0)==0?t:t}else return a.replace(new RegExp(b.replace(/[[\]{}()*+?.\\^$|]/g,"\\$&"),'g'),c.replace(/\$/g,"$$$$"))},
ev:function ev(){},
ew:function ew(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
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
fk:function fk(a,b){this.a=a
this.b=b},
eU:function eU(a,b,c){this.a=a
this.b=b
this.c=c},
h3:function h3(a){this.a=a},
iH:function iH(a){this.a=a},
e5:function e5(a){this.a=a
this.b=null},
bY:function bY(){},
fJ:function fJ(){},
fE:function fE(){},
bV:function bV(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
fU:function fU(a){this.a=a},
eo:function eo(a){this.a=a},
ft:function ft(a){this.a=a},
aB:function aB(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
eX:function eX(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
eY:function eY(a,b){this.a=a
this.$ti=b},
eZ:function eZ(a,b,c){var _=this
_.a=a
_.b=b
_.d=_.c=null
_.$ti=c},
ir:function ir(a){this.a=a},
is:function is(a){this.a=a},
it:function it(a){this.a=a},
eT:function eT(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
bq:function(a){return a},
lr:function(a){return new Int8Array(a)},
b6:function(a,b,c){if(a>>>0!==a||a>=c)throw H.e(H.bQ(b,a))},
mh:function(a,b,c){var u
if(!(a>>>0!==a))u=b>>>0!==b||a>b||b>c
else u=!0
if(u)throw H.e(H.my(a,b,c))
return b},
bE:function bE(){},
dm:function dm(){},
dn:function dn(){},
dp:function dp(){},
ff:function ff(){},
fg:function fg(){},
fh:function fh(){},
fi:function fi(){},
dq:function dq(){},
cc:function cc(){},
cz:function cz(){},
cA:function cA(){},
cB:function cB(){},
cC:function cC(){},
mA:function(a){return J.jB(a?Object.keys(a):[],null)},
mN:function(a){if(typeof dartPrint=="function"){dartPrint(a)
return}if(typeof console=="object"&&typeof console.log!="undefined"){console.log(a)
return}if(typeof window=="object")return
if(typeof print=="function"){print(a)
return}throw"Unable to print message: "+String(a)}},J={
jg:function(a,b,c,d){return{i:a,p:b,e:c,x:d}},
im:function(a){var u,t,s,r,q
u=a[v.dispatchPropertyName]
if(u==null)if($.jf==null){H.mF()
u=a[v.dispatchPropertyName]}if(u!=null){t=u.p
if(!1===t)return u.i
if(!0===t)return a
s=Object.getPrototypeOf(a)
if(t===s)return u.i
if(u.e===s)throw H.e(P.h2("Return interceptor for "+H.i(t(a,u))))}r=a.constructor
q=r==null?null:r[$.ji()]
if(q!=null)return q
q=H.mJ(a)
if(q!=null)return q
if(typeof a=="function")return C.X
t=Object.getPrototypeOf(a)
if(t==null)return C.F
if(t===Object.prototype)return C.F
if(typeof r=="function"){Object.defineProperty(r,$.ji(),{value:C.v,enumerable:false,writable:true,configurable:true})
return C.v}return C.v},
lf:function(a,b){if(typeof a!=="number"||Math.floor(a)!==a)throw H.e(P.iL(a,"length","is not an integer"))
if(a<0||a>4294967295)throw H.e(P.a5(a,0,4294967295,"length",null))
return J.jB(new Array(a),b)},
jB:function(a,b){return J.eR(H.b(a,[b]))},
eR:function(a){H.ee(a)
a.fixed$length=Array
return a},
O:function(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.da.prototype
return J.d9.prototype}if(typeof a=="string")return J.bD.prototype
if(a==null)return J.db.prototype
if(typeof a=="boolean")return J.eS.prototype
if(a.constructor==Array)return J.aK.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bh.prototype
return a}if(a instanceof P.L)return a
return J.im(a)},
cJ:function(a){if(typeof a=="string")return J.bD.prototype
if(a==null)return a
if(a.constructor==Array)return J.aK.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bh.prototype
return a}if(a instanceof P.L)return a
return J.im(a)},
kq:function(a){if(a==null)return a
if(a.constructor==Array)return J.aK.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bh.prototype
return a}if(a instanceof P.L)return a
return J.im(a)},
je:function(a){if(typeof a=="string")return J.bD.prototype
if(a==null)return a
if(!(a instanceof P.L))return J.ct.prototype
return a},
b7:function(a){if(a==null)return a
if(typeof a!="object"){if(typeof a=="function")return J.bh.prototype
return a}if(a instanceof P.L)return a
return J.im(a)},
I:function(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.O(a).u(a,b)},
kU:function(a,b){if(typeof b==="number")if(a.constructor==Array||typeof a=="string"||H.mI(a,a[v.dispatchPropertyName]))if(b>>>0===b&&b<a.length)return a[b]
return J.cJ(a).j(a,b)},
kV:function(a,b,c,d){return J.b7(a).fR(a,b,c,d)},
kW:function(a,b){return J.je(a).K(a,b)},
iJ:function(a,b,c){return J.b7(a).iH(a,b,c)},
jm:function(a,b){return J.b7(a).Y(a,b)},
kX:function(a,b){return J.je(a).Z(a,b)},
iK:function(a,b){return J.kq(a).an(a,b)},
kY:function(a,b,c,d){return J.b7(a).k6(a,b,c,d)},
jn:function(a){return J.b7(a).gcv(a)},
cO:function(a){return J.O(a).gL(a)},
cP:function(a){return J.kq(a).gU(a)},
aY:function(a){return J.cJ(a).gn(a)},
kZ:function(a,b){return J.b7(a).kL(a,b)},
ao:function(a){return J.O(a).i(a)},
ab:function ab(){},
eS:function eS(){},
db:function db(){},
dd:function dd(){},
fm:function fm(){},
ct:function ct(){},
bh:function bh(){},
aK:function aK(a){this.$ti=a},
iS:function iS(a){this.$ti=a},
ag:function ag(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=null
_.$ti=d},
dc:function dc(){},
da:function da(){},
d9:function d9(){},
bD:function bD(){}},P={
lX:function(){var u,t,s
u={}
if(self.scheduleImmediate!=null)return P.mr()
if(self.MutationObserver!=null&&self.document!=null){t=self.document.createElement("div")
s=self.document.createElement("span")
u.a=null
new self.MutationObserver(H.bP(new P.ht(u),1)).observe(t,{childList:true})
return new P.hs(u,t,s)}else if(self.setImmediate!=null)return P.ms()
return P.mt()},
lY:function(a){self.scheduleImmediate(H.bP(new P.hu(H.m(a,{func:1,ret:-1})),0))},
lZ:function(a){self.setImmediate(H.bP(new P.hv(H.m(a,{func:1,ret:-1})),0))},
m_:function(a){P.iZ(C.u,H.m(a,{func:1,ret:-1}))},
iZ:function(a,b){var u
H.m(b,{func:1,ret:-1})
u=C.e.a7(a.a,1000)
return P.m2(u<0?0:u,b)},
jV:function(a,b){var u
H.m(b,{func:1,ret:-1,args:[P.aR]})
u=C.e.a7(a.a,1000)
return P.m3(u<0?0:u,b)},
m2:function(a,b){var u=new P.e6(!0)
u.fN(a,b)
return u},
m3:function(a,b){var u=new P.e6(!1)
u.fO(a,b)
return u},
m0:function(a,b){var u,t,s
b.a=1
try{a.f3(new P.hD(b),new P.hE(b),null)}catch(s){u=H.ay(s)
t=H.bS(s)
P.mP(new P.hF(b,u,t))}},
k3:function(a,b){var u,t
for(;u=a.a,u===2;)a=H.f(a.c,"$iaw")
if(u>=4){t=b.cg()
b.a=a.a
b.c=a.c
P.cx(b,t)}else{t=H.f(b.c,"$iaU")
b.a=2
b.c=a
a.dF(t)}},
cx:function(a,b){var u,t,s,r,q,p,o,n,m,l,k,j,i,h
u={}
u.a=a
for(t=a;!0;){s={}
r=t.a===8
if(b==null){if(r){q=H.f(t.c,"$iah")
t=t.b
p=q.a
o=q.b
t.toString
P.ih(null,null,t,p,o)}return}for(;n=b.a,n!=null;b=n){b.a=null
P.cx(u.a,b)}t=u.a
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
if(k){H.f(m,"$iah")
t=t.b
p=m.a
o=m.b
t.toString
P.ih(null,null,t,p,o)
return}j=$.Q
if(j!=l)$.Q=l
else j=null
t=b.c
if(t===8)new P.hJ(u,s,b,r).$0()
else if(p){if((t&1)!==0)new P.hI(s,b,m).$0()}else if((t&2)!==0)new P.hH(u,s,b).$0()
if(j!=null)$.Q=j
t=s.b
if(!!J.O(t).$ic2){if(t.a>=4){i=H.f(o.c,"$iaU")
o.c=null
b=o.bp(i)
o.a=t.a
o.c=t.c
u.a=t
continue}else P.k3(t,o)
return}}h=b.b
i=H.f(h.c,"$iaU")
h.c=null
b=h.bp(i)
t=s.a
p=s.b
if(!t){H.y(p,H.t(h,0))
h.a=4
h.c=p}else{H.f(p,"$iah")
h.a=8
h.c=p}u.a=h
t=h}},
mm:function(a,b){if(H.eb(a,{func:1,args:[P.L,P.am]}))return H.m(a,{func:1,ret:null,args:[P.L,P.am]})
if(H.eb(a,{func:1,args:[P.L]}))return H.m(a,{func:1,ret:null,args:[P.L]})
throw H.e(P.iL(a,"onError","Error handler must accept one Object or one Object and a StackTrace as arguments, and return a a valid result"))},
ml:function(){var u,t
for(;u=$.bN,u!=null;){$.cH=null
t=u.b
$.bN=t
if(t==null)$.cG=null
u.a.$0()}},
mq:function(){$.j8=!0
try{P.ml()}finally{$.cH=null
$.j8=!1
if($.bN!=null)$.jl().$1(P.kn())}},
ki:function(a){var u=new P.dX(H.m(a,{func:1,ret:-1}))
if($.bN==null){$.cG=u
$.bN=u
if(!$.j8)$.jl().$1(P.kn())}else{$.cG.b=u
$.cG=u}},
mp:function(a){var u,t,s
H.m(a,{func:1,ret:-1})
u=$.bN
if(u==null){P.ki(a)
$.cH=$.cG
return}t=new P.dX(a)
s=$.cH
if(s==null){t.b=u
$.cH=t
$.bN=t}else{t.b=s.b
s.b=t
$.cH=t
if(t.b==null)$.cG=t}},
mP:function(a){var u,t
u={func:1,ret:-1}
H.m(a,u)
t=$.Q
if(C.k===t){P.ij(null,null,C.k,a)
return}t.toString
P.ij(null,null,t,H.m(t.cq(a),u))},
jU:function(a,b){var u,t
u={func:1,ret:-1}
H.m(b,u)
t=$.Q
if(t===C.k){t.toString
return P.iZ(a,b)}return P.iZ(a,H.m(t.cq(b),u))},
lO:function(a,b){var u,t,s
u={func:1,ret:-1,args:[P.aR]}
H.m(b,u)
t=$.Q
if(t===C.k){t.toString
return P.jV(a,b)}s=t.dW(b,P.aR)
$.Q.toString
return P.jV(a,H.m(s,u))},
ih:function(a,b,c,d,e){var u={}
u.a=d
P.mp(new P.ii(u,e))},
kf:function(a,b,c,d,e){var u,t
H.m(d,{func:1,ret:e})
t=$.Q
if(t===c)return d.$0()
$.Q=c
u=t
try{t=d.$0()
return t}finally{$.Q=u}},
kg:function(a,b,c,d,e,f,g){var u,t
H.m(d,{func:1,ret:f,args:[g]})
H.y(e,g)
t=$.Q
if(t===c)return d.$1(e)
$.Q=c
u=t
try{t=d.$1(e)
return t}finally{$.Q=u}},
mn:function(a,b,c,d,e,f,g,h,i){var u,t
H.m(d,{func:1,ret:g,args:[h,i]})
H.y(e,h)
H.y(f,i)
t=$.Q
if(t===c)return d.$2(e,f)
$.Q=c
u=t
try{t=d.$2(e,f)
return t}finally{$.Q=u}},
ij:function(a,b,c,d){var u
H.m(d,{func:1,ret:-1})
u=C.k!==c
if(u)d=!(!u||!1)?c.cq(d):c.jL(d,-1)
P.ki(d)},
ht:function ht(a){this.a=a},
hs:function hs(a,b,c){this.a=a
this.b=b
this.c=c},
hu:function hu(a){this.a=a},
hv:function hv(a){this.a=a},
e6:function e6(a){this.a=a
this.b=null
this.c=0},
i_:function i_(a,b){this.a=a
this.b=b},
hZ:function hZ(a,b,c,d){var _=this
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
aw:function aw(a,b,c){var _=this
_.a=a
_.b=b
_.c=null
_.$ti=c},
hC:function hC(a,b){this.a=a
this.b=b},
hG:function hG(a,b){this.a=a
this.b=b},
hD:function hD(a){this.a=a},
hE:function hE(a){this.a=a},
hF:function hF(a,b,c){this.a=a
this.b=b
this.c=c},
hJ:function hJ(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
hK:function hK(a){this.a=a},
hI:function hI(a,b,c){this.a=a
this.b=b
this.c=c},
hH:function hH(a,b,c){this.a=a
this.b=b
this.c=c},
dX:function dX(a){this.a=a
this.b=null},
fF:function fF(){},
fH:function fH(a,b){this.a=a
this.b=b},
fI:function fI(a,b){this.a=a
this.b=b},
cj:function cj(){},
fG:function fG(){},
aR:function aR(){},
ah:function ah(a,b){this.a=a
this.b=b},
i9:function i9(){},
ii:function ii(a,b){this.a=a
this.b=b},
hQ:function hQ(){},
hS:function hS(a,b,c){this.a=a
this.b=b
this.c=c},
hR:function hR(a,b){this.a=a
this.b=b},
hT:function hT(a,b,c){this.a=a
this.b=b
this.c=c},
li:function(a,b,c,d,e){return new H.aB([d,e])},
lk:function(a,b,c){H.ee(a)
return H.h(H.mB(a,new H.aB([b,c])),"$ijC",[b,c],"$ajC")},
lj:function(a,b){return new H.aB([a,b])},
lm:function(a,b,c,d){return new P.hN([d])},
k6:function(){var u=Object.create(null)
u["<non-identifier-key>"]=u
delete u["<non-identifier-key>"]
return u},
k5:function(a,b,c){var u=new P.hO(a,b,[c])
u.c=a.e
return u},
le:function(a,b,c){var u,t
if(P.j9(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}u=H.b([],[P.l])
t=$.cN()
C.a.h(t,a)
try{P.mk(a,u)}finally{if(0>=t.length)return H.c(t,-1)
t.pop()}t=P.jR(b,H.ku(u,"$ik"),", ")+c
return t.charCodeAt(0)==0?t:t},
iR:function(a,b,c){var u,t,s
if(P.j9(a))return b+"..."+c
u=new P.aj(b)
t=$.cN()
C.a.h(t,a)
try{s=u
s.a=P.jR(s.a,a,", ")}finally{if(0>=t.length)return H.c(t,-1)
t.pop()}u.a+=c
t=u.a
return t.charCodeAt(0)==0?t:t},
j9:function(a){var u,t
for(u=0;t=$.cN(),u<t.length;++u)if(a===t[u])return!0
return!1},
mk:function(a,b){var u,t,s,r,q,p,o,n,m,l
H.h(b,"$ia",[P.l],"$aa")
u=a.gU(a)
t=0
s=0
while(!0){if(!(t<80||s<3))break
if(!u.B())return
r=H.i(u.gN())
C.a.h(b,r)
t+=r.length+2;++s}if(!u.B()){if(s<=5)return
if(0>=b.length)return H.c(b,-1)
q=b.pop()
if(0>=b.length)return H.c(b,-1)
p=b.pop()}else{o=u.gN();++s
if(!u.B()){if(s<=4){C.a.h(b,H.i(o))
return}q=H.i(o)
if(0>=b.length)return H.c(b,-1)
p=b.pop()
t+=q.length+2}else{n=u.gN();++s
for(;u.B();o=n,n=m){m=u.gN();++s
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
ll:function(a,b,c){var u=P.li(null,null,null,b,c)
a.a1(0,new P.f_(u,b,c))
return u},
iV:function(a){var u,t
u={}
if(P.j9(a))return"{...}"
t=new P.aj("")
try{C.a.h($.cN(),a)
t.a+="{"
u.a=!0
a.a1(0,new P.f3(u,t))
t.a+="}"}finally{u=$.cN()
if(0>=u.length)return H.c(u,-1)
u.pop()}u=t.a
return u.charCodeAt(0)==0?u:u},
hN:function hN(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
cy:function cy(a){this.a=a
this.c=this.b=null},
hO:function hO(a,b,c){var _=this
_.a=a
_.b=b
_.d=_.c=null
_.$ti=c},
f_:function f_(a,b,c){this.a=a
this.b=b
this.c=c},
f0:function f0(){},
R:function R(){},
f2:function f2(){},
f3:function f3(a,b){this.a=a
this.b=b},
f4:function f4(){},
i0:function i0(){},
f5:function f5(){},
dS:function dS(a,b){this.a=a
this.$ti=b},
hU:function hU(){},
e2:function e2(){},
ea:function ea(){},
lS:function(a,b,c,d){H.h(b,"$ia",[P.j],"$aa")
if(b instanceof Uint8Array)return P.lT(!1,b,c,d)
return},
lT:function(a,b,c,d){var u,t,s
u=$.kP()
if(u==null)return
t=0===c
if(t&&!0)return P.j2(u,b)
s=b.length
d=P.bn(c,d,s,null,null,null)
if(t&&d===s)return P.j2(u,b)
return P.j2(u,b.subarray(c,d))},
j2:function(a,b){if(P.lV(b))return
return P.lW(a,b)},
lW:function(a,b){var u,t
try{u=a.decode(b)
return u}catch(t){H.ay(t)}return},
lV:function(a){var u,t
u=a.length-2
for(t=0;t<u;++t)if(a[t]===237)if((a[t+1]&224)===160)return!0
return!1},
lU:function(){var u,t
try{u=new TextDecoder("utf-8",{fatal:true})
return u}catch(t){H.ay(t)}return},
mo:function(a,b,c){var u,t,s
H.h(a,"$ia",[P.j],"$aa")
for(u=J.cJ(a),t=b;t<c;++t){s=u.j(a,t)
if(typeof s!=="number")return s.bY()
if((s&127)!==s)return t-b}return c-b},
jp:function(a,b,c,d,e,f){if(C.e.au(f,4)!==0)throw H.e(P.X("Invalid base64 padding, padded length must be multiple of four, is "+f,a,c))
if(d+e!==f)throw H.e(P.X("Invalid base64 padding, '=' not at the end",a,b))
if(e>2)throw H.e(P.X("Invalid base64 padding, more than two '=' characters",a,b))},
ek:function ek(a){this.a=a},
el:function el(a){this.a=a},
bx:function bx(){},
bA:function bA(){},
eE:function eE(){},
ha:function ha(a){this.a=a},
hc:function hc(){},
i8:function i8(a){this.b=this.a=0
this.c=a},
hb:function hb(a){this.a=a},
i6:function i6(a,b){var _=this
_.a=a
_.b=b
_.c=!0
_.f=_.e=_.d=0},
i7:function i7(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
ed:function(a,b,c){var u
H.m(b,{func:1,ret:P.j,args:[P.l]})
u=H.lB(a,c)
if(u!=null)return u
if(b!=null)return b.$1(a)
throw H.e(P.X(a,null,null))},
la:function(a){if(a instanceof H.bY)return a.i(0)
return"Instance of '"+H.bG(a)+"'"},
ln:function(a,b,c,d){var u,t
H.y(b,d)
u=J.lf(a,d)
if(a!==0&&!0)for(t=0;t<u.length;++t)C.a.p(u,t,b)
return H.h(u,"$ia",[d],"$aa")},
lo:function(a,b,c){var u,t,s
u=[c]
t=H.b([],u)
for(s=a.gU(a);s.B();)C.a.h(t,H.y(s.gN(),c))
if(b)return t
return H.h(J.eR(t),"$ia",u,"$aa")},
dC:function(a,b,c){var u,t
u=P.j
H.h(a,"$ik",[u],"$ak")
if(typeof a==="object"&&a!==null&&a.constructor===Array){H.h(a,"$iaK",[u],"$aaK")
t=a.length
c=P.bn(b,c,t,null,null,null)
return H.jP(b>0||c<t?C.a.fo(a,b,c):a)}if(!!J.O(a).$icc)return H.lD(a,b,P.bn(b,c,a.length,null,null,null))
return P.lK(a,b,c)},
lK:function(a,b,c){var u,t,s,r
H.h(a,"$ik",[P.j],"$ak")
if(b<0)throw H.e(P.a5(b,0,J.aY(a),null,null))
u=c==null
if(!u&&c<b)throw H.e(P.a5(c,b,J.aY(a),null,null))
t=J.cP(a)
for(s=0;s<b;++s)if(!t.B())throw H.e(P.a5(b,0,s,null,null))
r=[]
if(u)for(;t.B();)r.push(t.gN())
else for(s=b;s<c;++s){if(!t.B())throw H.e(P.a5(c,b,s,null,null))
r.push(t.gN())}return H.jP(r)},
lG:function(a,b,c){return new H.eT(a,H.lg(a,!1,!0,!1))},
jR:function(a,b,c){var u=J.cP(b)
if(!u.B())return a
if(c.length===0){do a+=H.i(u.gN())
while(u.B())}else{a+=H.i(u.gN())
for(;u.B();)a=a+c+H.i(u.gN())}return a},
j1:function(){var u=H.lt()
if(u!=null)return P.lR(u,0,null)
throw H.e(P.V("'Uri.base' is not supported"))},
i5:function(a,b,c,d){var u,t,s,r,q,p
H.h(a,"$ia",[P.j],"$aa")
if(c===C.m){u=$.kS().b
if(typeof b!=="string")H.o(H.an(b))
u=u.test(b)}else u=!1
if(u)return b
H.y(b,H.ar(c,"bx",0))
t=c.gk5().cw(b)
for(u=t.length,s=0,r="";s<u;++s){q=t[s]
if(q<128){p=q>>>4
if(p>=8)return H.c(a,p)
p=(a[p]&1<<(q&15))!==0}else p=!1
if(p)r+=H.dt(q)
else r=d&&q===32?r+"+":r+"%"+"0123456789ABCDEF"[q>>>4&15]+"0123456789ABCDEF"[q&15]}return r.charCodeAt(0)==0?r:r},
l5:function(a){var u,t
u=Math.abs(a)
t=a<0?"-":""
if(u>=1000)return""+a
if(u>=100)return t+"0"+u
if(u>=10)return t+"00"+u
return t+"000"+u},
l6:function(a){if(a>=100)return""+a
if(a>=10)return"0"+a
return"00"+a},
cZ:function(a){if(a>=10)return""+a
return"0"+a},
jx:function(a,b,c,d,e,f){return new P.ba(864e8*a+36e8*b+6e7*e+1e6*f+1000*d+c)},
eG:function(a){if(typeof a==="number"||typeof a==="boolean"||null==a)return J.ao(a)
if(typeof a==="string")return JSON.stringify(a)
return P.la(a)},
cQ:function(a){return new P.aH(!1,null,null,a)},
iL:function(a,b,c){return new P.aH(!0,a,b,c)},
dv:function(a,b,c){return new P.bH(null,null,!0,a,b,"Value not in range")},
a5:function(a,b,c,d,e){return new P.bH(b,c,!0,a,d,"Invalid value")},
bn:function(a,b,c,d,e,f){if(typeof a!=="number")return H.u(a)
if(0>a||a>c)throw H.e(P.a5(a,0,c,"start",f))
if(b!=null){if(a>b||b>c)throw H.e(P.a5(b,a,c,"end",f))
return b}return c},
c5:function(a,b,c,d,e){var u=H.a6(e==null?J.aY(b):e)
return new P.eQ(b,u,!0,a,c,"Index out of range")},
V:function(a){return new P.h4(a)},
h2:function(a){return new P.h1(a)},
bz:function(a){return new P.eu(a)},
r:function(a){return new P.e_(a)},
X:function(a,b,c){return new P.eN(a,b,c)},
lp:function(a,b,c,d){var u,t
H.m(b,{func:1,ret:d,args:[P.j]})
u=H.b([],[d])
C.a.sn(u,a)
for(t=0;t<a;++t)C.a.p(u,t,b.$1(t))
return u},
jh:function(a){H.mN(a)},
lR:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k,j,i,h
c=a.length
u=b+5
if(c>=u){t=((C.c.K(a,b+4)^58)*3|C.c.K(a,b)^100|C.c.K(a,b+1)^97|C.c.K(a,b+2)^116|C.c.K(a,b+3)^97)>>>0
if(t===0)return P.jX(b>0||c<c?C.c.q(a,b,c):a,5,null).gf7()
else if(t===32)return P.jX(C.c.q(a,u,c),0,null).gf7()}s=new Array(8)
s.fixed$length=Array
r=H.b(s,[P.j])
C.a.p(r,0,0)
s=b-1
C.a.p(r,1,s)
C.a.p(r,2,s)
C.a.p(r,7,s)
C.a.p(r,3,b)
C.a.p(r,4,b)
C.a.p(r,5,c)
C.a.p(r,6,c)
if(P.kh(a,b,c,0,r)>=14)C.a.p(r,7,c)
q=r[1]
if(typeof q!=="number")return q.l3()
if(q>=b)if(P.kh(a,b,q,20,r)===20)r[7]=q
s=r[2]
if(typeof s!=="number")return s.C()
p=s+1
o=r[3]
n=r[4]
m=r[5]
l=r[6]
if(typeof l!=="number")return l.W()
if(typeof m!=="number")return H.u(m)
if(l<m)m=l
if(typeof n!=="number")return n.W()
if(n<p)n=m
else if(n<=q)n=q+1
if(typeof o!=="number")return o.W()
if(o<p)o=n
s=r[7]
if(typeof s!=="number")return s.W()
k=s<b
if(k)if(p>q+3){j=null
k=!1}else{s=o>b
if(s&&o+1===n){j=null
k=!1}else{if(!(m<c&&m===n+2&&C.c.ak(a,"..",n)))i=m>n+2&&C.c.ak(a,"/..",m-3)
else i=!0
if(i){j=null
k=!1}else{if(q===b+4)if(C.c.ak(a,"file",b)){if(p<=b){if(!C.c.ak(a,"/",n)){h="file:///"
t=3}else{h="file://"
t=2}a=h+C.c.q(a,n,c)
q-=b
u=t-b
m+=u
l+=u
c=a.length
b=0
p=7
o=7
n=7}else if(n===m)if(b===0&&!0){a=C.c.aX(a,n,m,"/");++m;++l;++c}else{a=C.c.q(a,b,n)+"/"+C.c.q(a,m,c)
q-=b
p-=b
o-=b
n-=b
u=1-b
m+=u
l+=u
c=a.length
b=0}j="file"}else if(C.c.ak(a,"http",b)){if(s&&o+3===n&&C.c.ak(a,"80",o+1))if(b===0&&!0){a=C.c.aX(a,o,n,"")
n-=3
m-=3
l-=3
c-=3}else{a=C.c.q(a,b,o)+C.c.q(a,n,c)
q-=b
p-=b
o-=b
u=3+b
n-=u
m-=u
l-=u
c=a.length
b=0}j="http"}else j=null
else if(q===u&&C.c.ak(a,"https",b)){if(s&&o+4===n&&C.c.ak(a,"443",o+1))if(b===0&&!0){a=C.c.aX(a,o,n,"")
n-=4
m-=4
l-=4
c-=3}else{a=C.c.q(a,b,o)+C.c.q(a,n,c)
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
if(k){if(b>0||c<a.length){a=C.c.q(a,b,c)
q-=b
p-=b
o-=b
n-=b
m-=b
l-=b}return new P.hV(a,q,p,o,n,m,l,j)}return P.m4(a,b,c,q,p,o,n,m,l,j)},
jZ:function(a,b){var u=P.l
return C.a.k9(H.b(a.split("&"),[u]),P.lj(u,u),new P.h9(b),[P.H,P.l,P.l])},
lQ:function(a,b,c){var u,t,s,r,q,p,o,n,m
u=new P.h6(a)
t=new Uint8Array(4)
for(s=t.length,r=b,q=r,p=0;r<c;++r){o=C.c.Z(a,r)
if(o!==46){if((o^48)>9)u.$2("invalid character",r)}else{if(p===3)u.$2("IPv4 address should contain exactly 4 parts",r)
n=P.ed(C.c.q(a,q,r),null,null)
if(typeof n!=="number")return n.d_()
if(n>255)u.$2("each part must be in the range 0..255",q)
m=p+1
if(p>=s)return H.c(t,p)
t[p]=n
q=r+1
p=m}}if(p!==3)u.$2("IPv4 address should contain exactly 4 parts",c)
n=P.ed(C.c.q(a,q,c),null,null)
if(typeof n!=="number")return n.d_()
if(n>255)u.$2("each part must be in the range 0..255",q)
if(p>=s)return H.c(t,p)
t[p]=n
return t},
jY:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
if(c==null)c=a.length
u=new P.h7(a)
t=new P.h8(u,a)
if(a.length<2)u.$1("address is too short")
s=H.b([],[P.j])
for(r=b,q=r,p=!1,o=!1;r<c;++r){n=C.c.Z(a,r)
if(n===58){if(r===b){++r
if(C.c.Z(a,r)!==58)u.$2("invalid start colon.",r)
q=r}if(r===q){if(p)u.$2("only one wildcard `::` is allowed",r)
C.a.h(s,-1)
p=!0}else C.a.h(s,t.$2(q,r))
q=r+1}else if(n===46)o=!0}if(s.length===0)u.$1("too few parts")
m=q===c
l=C.a.gaM(s)
if(m&&l!==-1)u.$2("expected a part after last `:`",c)
if(!m)if(!o)C.a.h(s,t.$2(q,c))
else{k=P.lQ(a,q,c)
C.a.h(s,(k[0]<<8|k[1])>>>0)
C.a.h(s,(k[2]<<8|k[3])>>>0)}if(p){if(s.length>7)u.$1("an address with a wildcard must have less than 7 parts")}else if(s.length!==8)u.$1("an address without a wildcard must contain exactly 8 parts")
j=new Uint8Array(16)
for(l=s.length,i=j.length,h=9-l,r=0,g=0;r<l;++r){f=s[r]
if(f===-1)for(e=0;e<h;++e){if(g<0||g>=i)return H.c(j,g)
j[g]=0
d=g+1
if(d>=i)return H.c(j,d)
j[d]=0
g+=2}else{d=C.e.aT(f,8)
if(g<0||g>=i)return H.c(j,g)
j[g]=d
d=g+1
if(d>=i)return H.c(j,d)
j[d]=f&255
g+=2}}return j},
m4:function(a,b,c,d,e,f,g,h,i,j){var u,t,s,r,q,p,o
if(j==null)if(d>b)j=P.mb(a,b,d)
else{if(d===b)P.cD(a,b,"Invalid empty scheme")
j=""}if(e>b){u=d+3
t=u<e?P.mc(a,u,e-1):""
s=P.m8(a,e,f,!1)
if(typeof f!=="number")return f.C()
r=f+1
if(typeof g!=="number")return H.u(g)
q=r<g?P.ma(P.ed(C.c.q(a,r,g),new P.i1(a,f),null),j):null}else{t=""
s=null
q=null}p=P.m9(a,g,h,null,j,s!=null)
if(typeof h!=="number")return h.W()
o=h<i?P.j5(a,h+1,i,null):null
return new P.bM(j,t,s,q,p,o,i<c?P.m7(a,i+1,c):null)},
k7:function(a){if(a==="http")return 80
if(a==="https")return 443
return 0},
cD:function(a,b,c){throw H.e(P.X(c,a,b))},
ma:function(a,b){if(a!=null&&a===P.k7(b))return
return a},
m8:function(a,b,c,d){var u,t
if(b===c)return""
if(C.c.Z(a,b)===91){if(typeof c!=="number")return c.G()
u=c-1
if(C.c.Z(a,u)!==93)P.cD(a,b,"Missing end `]` to match `[` in host")
P.jY(a,b+1,u)
return C.c.q(a,b,c).toLowerCase()}if(typeof c!=="number")return H.u(c)
t=b
for(;t<c;++t)if(C.c.Z(a,t)===58){P.jY(a,b,c)
return"["+a+"]"}return P.me(a,b,c)},
me:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k
if(typeof c!=="number")return H.u(c)
u=b
t=u
s=null
r=!0
for(;u<c;){q=C.c.Z(a,u)
if(q===37){p=P.kd(a,u,!0)
o=p==null
if(o&&r){u+=3
continue}if(s==null)s=new P.aj("")
n=C.c.q(a,t,u)
m=s.a+=!r?n.toLowerCase():n
if(o){p=C.c.q(a,u,u+3)
l=3}else if(p==="%"){p="%25"
l=1}else l=3
s.a=m+p
u+=l
t=u
r=!0}else{if(q<127){o=q>>>4
if(o>=8)return H.c(C.D,o)
o=(C.D[o]&1<<(q&15))!==0}else o=!1
if(o){if(r&&65<=q&&90>=q){if(s==null)s=new P.aj("")
if(t<u){s.a+=C.c.q(a,t,u)
t=u}r=!1}++u}else{if(q<=93){o=q>>>4
if(o>=8)return H.c(C.p,o)
o=(C.p[o]&1<<(q&15))!==0}else o=!1
if(o)P.cD(a,u,"Invalid character")
else{if((q&64512)===55296&&u+1<c){k=C.c.Z(a,u+1)
if((k&64512)===56320){q=65536|(q&1023)<<10|k&1023
l=2}else l=1}else l=1
if(s==null)s=new P.aj("")
n=C.c.q(a,t,u)
s.a+=!r?n.toLowerCase():n
s.a+=P.k8(q)
u+=l
t=u}}}}if(s==null)return C.c.q(a,b,c)
if(t<c){n=C.c.q(a,t,c)
s.a+=!r?n.toLowerCase():n}o=s.a
return o.charCodeAt(0)==0?o:o},
mb:function(a,b,c){var u,t,s,r
if(b===c)return""
if(!P.ka(C.c.K(a,b)))P.cD(a,b,"Scheme not starting with alphabetic character")
for(u=b,t=!1;u<c;++u){s=C.c.K(a,u)
if(s<128){r=s>>>4
if(r>=8)return H.c(C.r,r)
r=(C.r[r]&1<<(s&15))!==0}else r=!1
if(!r)P.cD(a,u,"Illegal scheme character")
if(65<=s&&s<=90)t=!0}a=C.c.q(a,b,c)
return P.m5(t?a.toLowerCase():a)},
m5:function(a){if(a==="http")return"http"
if(a==="file")return"file"
if(a==="https")return"https"
if(a==="package")return"package"
return a},
mc:function(a,b,c){return P.cE(a,b,c,C.Z,!1)},
m9:function(a,b,c,d,e,f){var u,t,s,r
u=e==="file"
t=u||f
s=a==null
if(s&&!0)return u?"/":""
r=!s?P.cE(a,b,c,C.E,!0):C.o.l7(d,new P.i2(),P.l).F(0,"/")
if(r.length===0){if(u)return"/"}else if(t&&!C.c.aj(r,"/"))r="/"+r
return P.md(r,e,f)},
md:function(a,b,c){var u=b.length===0
if(u&&!c&&!C.c.aj(a,"/"))return P.mf(a,!u||c)
return P.mg(a)},
j5:function(a,b,c,d){var u,t
u={}
H.h(d,"$iH",[P.l,null],"$aH")
if(a!=null){if(d!=null)throw H.e(P.cQ("Both query and queryParameters specified"))
return P.cE(a,b,c,C.q,!0)}if(d==null)return
t=new P.aj("")
u.a=""
d.a1(0,new P.i3(new P.i4(u,t)))
u=t.a
return u.charCodeAt(0)==0?u:u},
m7:function(a,b,c){return P.cE(a,b,c,C.q,!0)},
kd:function(a,b,c){var u,t,s,r,q,p
u=b+2
if(u>=a.length)return"%"
t=C.c.Z(a,b+1)
s=C.c.Z(a,u)
r=H.iq(t)
q=H.iq(s)
if(r<0||q<0)return"%"
p=r*16+q
if(p<127){u=C.e.aT(p,4)
if(u>=8)return H.c(C.t,u)
u=(C.t[u]&1<<(p&15))!==0}else u=!1
if(u)return H.dt(c&&65<=p&&90>=p?(p|32)>>>0:p)
if(t>=97||s>=97)return C.c.q(a,b,b+3).toUpperCase()
return},
k8:function(a){var u,t,s,r,q,p
if(a<128){u=new Array(3)
u.fixed$length=Array
t=H.b(u,[P.j])
C.a.p(t,0,37)
C.a.p(t,1,C.c.K("0123456789ABCDEF",a>>>4))
C.a.p(t,2,C.c.K("0123456789ABCDEF",a&15))}else{if(a>2047)if(a>65535){s=240
r=4}else{s=224
r=3}else{s=192
r=2}u=new Array(3*r)
u.fixed$length=Array
t=H.b(u,[P.j])
for(q=0;--r,r>=0;s=128){p=C.e.iX(a,6*r)&63|s
C.a.p(t,q,37)
C.a.p(t,q+1,C.c.K("0123456789ABCDEF",p>>>4))
C.a.p(t,q+2,C.c.K("0123456789ABCDEF",p&15))
q+=3}}return P.dC(t,0,null)},
cE:function(a,b,c,d,e){var u=P.kc(a,b,c,H.h(d,"$ia",[P.j],"$aa"),e)
return u==null?C.c.q(a,b,c):u},
kc:function(a,b,c,d,e){var u,t,s,r,q,p,o,n,m
H.h(d,"$ia",[P.j],"$aa")
u=!e
t=b
s=t
r=null
while(!0){if(typeof t!=="number")return t.W()
if(typeof c!=="number")return H.u(c)
if(!(t<c))break
c$0:{q=C.c.Z(a,t)
if(q<127){p=q>>>4
if(p>=8)return H.c(d,p)
p=(d[p]&1<<(q&15))!==0}else p=!1
if(p)++t
else{if(q===37){o=P.kd(a,t,!1)
if(o==null){t+=3
break c$0}if("%"===o){o="%25"
n=1}else n=3}else{if(u)if(q<=93){p=q>>>4
if(p>=8)return H.c(C.p,p)
p=(C.p[p]&1<<(q&15))!==0}else p=!1
else p=!1
if(p){P.cD(a,t,"Invalid character")
o=null
n=null}else{if((q&64512)===55296){p=t+1
if(p<c){m=C.c.Z(a,p)
if((m&64512)===56320){q=65536|(q&1023)<<10|m&1023
n=2}else n=1}else n=1}else n=1
o=P.k8(q)}}if(r==null)r=new P.aj("")
r.a+=C.c.q(a,s,t)
r.a+=H.i(o)
if(typeof n!=="number")return H.u(n)
t+=n
s=t}}}if(r==null)return
if(typeof s!=="number")return s.W()
if(s<c)r.a+=C.c.q(a,s,c)
u=r.a
return u.charCodeAt(0)==0?u:u},
kb:function(a){if(C.c.aj(a,"."))return!0
return C.c.eG(a,"/.")!==-1},
mg:function(a){var u,t,s,r,q,p,o
if(!P.kb(a))return a
u=H.b([],[P.l])
for(t=a.split("/"),s=t.length,r=!1,q=0;q<s;++q){p=t[q]
if(J.I(p,"..")){o=u.length
if(o!==0){if(0>=o)return H.c(u,-1)
u.pop()
if(u.length===0)C.a.h(u,"")}r=!0}else if("."===p)r=!0
else{C.a.h(u,p)
r=!1}}if(r)C.a.h(u,"")
return C.a.F(u,"/")},
mf:function(a,b){var u,t,s,r,q,p
if(!P.kb(a))return!b?P.k9(a):a
u=H.b([],[P.l])
for(t=a.split("/"),s=t.length,r=!1,q=0;q<s;++q){p=t[q]
if(".."===p)if(u.length!==0&&C.a.gaM(u)!==".."){if(0>=u.length)return H.c(u,-1)
u.pop()
r=!0}else{C.a.h(u,"..")
r=!1}else if("."===p)r=!0
else{C.a.h(u,p)
r=!1}}t=u.length
if(t!==0)if(t===1){if(0>=t)return H.c(u,0)
t=u[0].length===0}else t=!1
else t=!0
if(t)return"./"
if(r||C.a.gaM(u)==="..")C.a.h(u,"")
if(!b){if(0>=u.length)return H.c(u,0)
C.a.p(u,0,P.k9(u[0]))}return C.a.F(u,"/")},
k9:function(a){var u,t,s,r
u=a.length
if(u>=2&&P.ka(J.kW(a,0)))for(t=1;t<u;++t){s=C.c.K(a,t)
if(s===58)return C.c.q(a,0,t)+"%3A"+C.c.aF(a,t+1)
if(s<=127){r=s>>>4
if(r>=8)return H.c(C.r,r)
r=(C.r[r]&1<<(s&15))===0}else r=!0
if(r)break}return a},
m6:function(a,b){var u,t,s
for(u=0,t=0;t<2;++t){s=C.c.K(a,b+t)
if(48<=s&&s<=57)u=u*16+s-48
else{s|=32
if(97<=s&&s<=102)u=u*16+s-87
else throw H.e(P.cQ("Invalid URL encoding"))}}return u},
j6:function(a,b,c,d,e){var u,t,s,r,q
t=b
while(!0){if(!(t<c)){u=!0
break}s=C.c.K(a,t)
if(s<=127)if(s!==37)r=s===43
else r=!0
else r=!0
if(r){u=!1
break}++t}if(u){if(C.m!==d)r=!1
else r=!0
if(r)return C.c.q(a,b,c)
else q=new H.Y(C.c.q(a,b,c))}else{q=H.b([],[P.j])
for(r=a.length,t=b;t<c;++t){s=C.c.K(a,t)
if(s>127)throw H.e(P.cQ("Illegal percent encoding in URI"))
if(s===37){if(t+3>r)throw H.e(P.cQ("Truncated URI"))
C.a.h(q,P.m6(a,t+1))
t+=2}else if(s===43)C.a.h(q,32)
else C.a.h(q,s)}}H.h(q,"$ia",[P.j],"$aa")
return new P.hb(!1).cw(q)},
ka:function(a){var u=a|32
return 97<=u&&u<=122},
jX:function(a,b,c){var u,t,s,r,q,p,o,n,m
u=H.b([b-1],[P.j])
for(t=a.length,s=b,r=-1,q=null;s<t;++s){q=C.c.K(a,s)
if(q===44||q===59)break
if(q===47){if(r<0){r=s
continue}throw H.e(P.X("Invalid MIME type",a,s))}}if(r<0&&s>b)throw H.e(P.X("Invalid MIME type",a,s))
for(;q!==44;){C.a.h(u,s);++s
for(p=-1;s<t;++s){q=C.c.K(a,s)
if(q===61){if(p<0)p=s}else if(q===59||q===44)break}if(p>=0)C.a.h(u,p)
else{o=C.a.gaM(u)
if(q!==44||s!==o+7||!C.c.ak(a,"base64",o+1))throw H.e(P.X("Expecting '='",a,s))
break}}C.a.h(u,s)
n=s+1
if((u.length&1)===1)a=C.J.kn(a,n,t)
else{m=P.kc(a,n,t,C.q,!0)
if(m!=null)a=C.c.aX(a,n,t,m)}return new P.h5(a,u,c)},
mi:function(){var u,t,s,r,q
u=P.lp(22,new P.id(),!0,P.J)
t=new P.ic(u)
s=new P.ie()
r=new P.ig()
q=H.f(t.$2(0,225),"$iJ")
s.$3(q,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",1)
s.$3(q,".",14)
s.$3(q,":",34)
s.$3(q,"/",3)
s.$3(q,"?",172)
s.$3(q,"#",205)
q=H.f(t.$2(14,225),"$iJ")
s.$3(q,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",1)
s.$3(q,".",15)
s.$3(q,":",34)
s.$3(q,"/",234)
s.$3(q,"?",172)
s.$3(q,"#",205)
q=H.f(t.$2(15,225),"$iJ")
s.$3(q,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",1)
s.$3(q,"%",225)
s.$3(q,":",34)
s.$3(q,"/",9)
s.$3(q,"?",172)
s.$3(q,"#",205)
q=H.f(t.$2(1,225),"$iJ")
s.$3(q,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",1)
s.$3(q,":",34)
s.$3(q,"/",10)
s.$3(q,"?",172)
s.$3(q,"#",205)
q=H.f(t.$2(2,235),"$iJ")
s.$3(q,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",139)
s.$3(q,"/",131)
s.$3(q,".",146)
s.$3(q,"?",172)
s.$3(q,"#",205)
q=H.f(t.$2(3,235),"$iJ")
s.$3(q,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",11)
s.$3(q,"/",68)
s.$3(q,".",18)
s.$3(q,"?",172)
s.$3(q,"#",205)
q=H.f(t.$2(4,229),"$iJ")
s.$3(q,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",5)
r.$3(q,"AZ",229)
s.$3(q,":",102)
s.$3(q,"@",68)
s.$3(q,"[",232)
s.$3(q,"/",138)
s.$3(q,"?",172)
s.$3(q,"#",205)
q=H.f(t.$2(5,229),"$iJ")
s.$3(q,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",5)
r.$3(q,"AZ",229)
s.$3(q,":",102)
s.$3(q,"@",68)
s.$3(q,"/",138)
s.$3(q,"?",172)
s.$3(q,"#",205)
q=H.f(t.$2(6,231),"$iJ")
r.$3(q,"19",7)
s.$3(q,"@",68)
s.$3(q,"/",138)
s.$3(q,"?",172)
s.$3(q,"#",205)
q=H.f(t.$2(7,231),"$iJ")
r.$3(q,"09",7)
s.$3(q,"@",68)
s.$3(q,"/",138)
s.$3(q,"?",172)
s.$3(q,"#",205)
s.$3(H.f(t.$2(8,8),"$iJ"),"]",5)
q=H.f(t.$2(9,235),"$iJ")
s.$3(q,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",11)
s.$3(q,".",16)
s.$3(q,"/",234)
s.$3(q,"?",172)
s.$3(q,"#",205)
q=H.f(t.$2(16,235),"$iJ")
s.$3(q,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",11)
s.$3(q,".",17)
s.$3(q,"/",234)
s.$3(q,"?",172)
s.$3(q,"#",205)
q=H.f(t.$2(17,235),"$iJ")
s.$3(q,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",11)
s.$3(q,"/",9)
s.$3(q,"?",172)
s.$3(q,"#",205)
q=H.f(t.$2(10,235),"$iJ")
s.$3(q,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",11)
s.$3(q,".",18)
s.$3(q,"/",234)
s.$3(q,"?",172)
s.$3(q,"#",205)
q=H.f(t.$2(18,235),"$iJ")
s.$3(q,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",11)
s.$3(q,".",19)
s.$3(q,"/",234)
s.$3(q,"?",172)
s.$3(q,"#",205)
q=H.f(t.$2(19,235),"$iJ")
s.$3(q,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",11)
s.$3(q,"/",234)
s.$3(q,"?",172)
s.$3(q,"#",205)
q=H.f(t.$2(11,235),"$iJ")
s.$3(q,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",11)
s.$3(q,"/",10)
s.$3(q,"?",172)
s.$3(q,"#",205)
q=H.f(t.$2(12,236),"$iJ")
s.$3(q,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",12)
s.$3(q,"?",12)
s.$3(q,"#",205)
q=H.f(t.$2(13,237),"$iJ")
s.$3(q,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",13)
s.$3(q,"?",13)
r.$3(H.f(t.$2(20,245),"$iJ"),"az",21)
q=H.f(t.$2(21,245),"$iJ")
r.$3(q,"az",21)
r.$3(q,"09",21)
s.$3(q,"+-.",21)
return u},
kh:function(a,b,c,d,e){var u,t,s,r,q
H.h(e,"$ia",[P.j],"$aa")
u=$.kT()
for(t=b;t<c;++t){if(d<0||d>=u.length)return H.c(u,d)
s=u[d]
r=C.c.K(a,t)^96
if(r>95)r=31
if(r>=s.length)return H.c(s,r)
q=s[r]
d=q&31
C.a.p(e,q>>>5,t)}return d},
W:function W(){},
ai:function ai(a,b){this.a=a
this.b=b},
q:function q(){},
ba:function ba(a){this.a=a},
eB:function eB(){},
eC:function eC(){},
bb:function bb(){},
dr:function dr(){},
aH:function aH(a,b,c,d){var _=this
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
eQ:function eQ(a,b,c,d,e,f){var _=this
_.e=a
_.f=b
_.a=c
_.b=d
_.c=e
_.d=f},
h4:function h4(a){this.a=a},
h1:function h1(a){this.a=a},
fD:function fD(a){this.a=a},
eu:function eu(a){this.a=a},
fl:function fl(){},
dB:function dB(){},
ey:function ey(a){this.a=a},
e_:function e_(a){this.a=a},
eN:function eN(a,b,c){this.a=a
this.b=b
this.c=c},
j:function j(){},
k:function k(){},
aJ:function aJ(){},
a:function a(){},
H:function H(){},
B:function B(){},
ae:function ae(){},
L:function L(){},
am:function am(){},
l:function l(){},
aj:function aj(a){this.a=a},
h9:function h9(a){this.a=a},
h6:function h6(a){this.a=a},
h7:function h7(a){this.a=a},
h8:function h8(a,b){this.a=a
this.b=b},
bM:function bM(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.ch=_.Q=_.z=_.y=_.x=null},
i1:function i1(a,b){this.a=a
this.b=b},
i2:function i2(){},
i4:function i4(a,b){this.a=a
this.b=b},
i3:function i3(a){this.a=a},
h5:function h5(a,b,c){this.a=a
this.b=b
this.c=c},
id:function id(){},
ic:function ic(a){this.a=a},
ie:function ie(){},
ig:function ig(){},
hV:function hV(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.x=h
_.y=null},
hy:function hy(a,b,c,d,e,f,g,h){var _=this
_.cx=a
_.a=b
_.b=c
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.ch=_.Q=_.z=_.y=_.x=null},
mx:function(a){var u,t
u=J.O(a)
if(!!u.$iaZ){t=u.ge3(a)
if(t.constructor===Array)if(typeof CanvasPixelArray!=="undefined"){t.constructor=CanvasPixelArray
t.BYTES_PER_ELEMENT=1}return a}return new P.e9(a.data,a.height,a.width)},
mw:function(a){if(a instanceof P.e9)return{data:a.a,height:a.b,width:a.c}
return a},
mv:function(a,b){var u={}
a.a1(0,new P.ik(u))
return u},
hW:function hW(){},
hY:function hY(a,b){this.a=a
this.b=b},
e9:function e9(a,b,c){this.a=a
this.b=b
this.c=c},
ik:function ik(a){this.a=a},
hX:function hX(a,b){this.a=a
this.b=b},
eJ:function eJ(a,b){this.a=a
this.b=b},
eK:function eK(){},
eL:function eL(){},
hM:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
m1:function(a){a=536870911&a+((67108863&a)<<3)
a^=a>>>11
return 536870911&a+((16383&a)<<15)},
hP:function hP(){},
at:function at(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=e},
p:function p(){},
J:function J(){},
cT:function cT(){},
d4:function d4(){},
du:function du(){},
dw:function dw(){},
bJ:function bJ(){},
dy:function dy(){},
dF:function dF(){},
dQ:function dQ(){}},W={
iN:function(a,b){var u=document.createElement("canvas")
return u},
l9:function(a){H.f(a,"$ibd")
return"wheel"},
ld:function(a){var u,t,s
t=document.createElement("input")
u=H.f(t,"$ic6")
try{u.type=a}catch(s){H.ay(s)}return u},
hL:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
k4:function(a,b,c,d){var u,t
u=W.hL(W.hL(W.hL(W.hL(0,a),b),c),d)
t=536870911&u+((67108863&u)<<3)
t^=t>>>11
return 536870911&t+((16383&t)<<15)},
a4:function(a,b,c,d,e){var u,t
u=W.kk(new W.hB(c),W.n)
t=u!=null
if(t&&!0){H.m(u,{func:1,args:[W.n]})
if(t)J.kV(a,b,u,!1)}return new W.hA(a,b,u,!1,[e])},
kk:function(a,b){var u
H.m(a,{func:1,ret:-1,args:[b]})
u=$.Q
if(u===C.k)return a
return u.dW(a,b)},
w:function w(){},
eg:function eg(){},
eh:function eh(){},
cS:function cS(){},
bv:function bv(){},
bw:function bw(){},
b9:function b9(){},
bZ:function bZ(){},
ex:function ex(){},
c_:function c_(){},
c0:function c0(){},
eA:function eA(){},
d1:function d1(){},
hx:function hx(a,b){this.a=a
this.b=b},
U:function U(){},
n:function n(){},
bd:function bd(){},
eM:function eM(){},
d7:function d7(){},
bC:function bC(){},
d8:function d8(){},
aZ:function aZ(){},
c4:function c4(){},
c6:function c6(){},
bX:function bX(){},
aL:function aL(){},
df:function df(){},
ca:function ca(){},
a8:function a8(){},
hw:function hw(a){this.a=a},
F:function F(){},
cd:function cd(){},
fu:function fu(){},
aQ:function aQ(){},
dD:function dD(){},
dE:function dE(){},
aD:function aD(){},
aE:function aE(){},
fR:function fR(){},
bp:function bp(){},
hp:function hp(){},
aT:function aT(){},
cw:function cw(){},
dZ:function dZ(){},
hz:function hz(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
j4:function j4(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
hA:function hA(a,b,c,d,e){var _=this
_.a=0
_.b=a
_.c=b
_.d=c
_.e=d
_.$ti=e},
hB:function hB(a){this.a=a},
aA:function aA(){},
d3:function d3(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=null
_.$ti=d},
dY:function dY(){},
e0:function e0(){},
e1:function e1(){},
e3:function e3(){},
e4:function e4(){},
e7:function e7(){},
e8:function e8(){}},O={
es:function(a){var u=new O.P([a])
u.bk(a)
return u},
P:function P(a){var _=this
_.d=_.c=_.b=_.a=null
_.$ti=a},
c9:function c9(){this.b=this.a=null},
jD:function(){var u,t,s
u=new O.dl()
u.sfV(O.es(V.a7))
u.e.aP(u.ghF(),u.ghH())
t=new O.aM(u,"emission")
t.c=C.d
t.f=new V.T(0,0,0)
u.f=t
t=new O.aM(u,"ambient")
t.c=C.d
t.f=new V.T(0,0,0)
u.r=t
t=new O.aM(u,"diffuse")
t.c=C.d
t.f=new V.T(0,0,0)
u.x=t
t=new O.aM(u,"invDiffuse")
t.c=C.d
t.f=new V.T(0,0,0)
u.y=t
t=new O.fc(u,"specular")
t.c=C.d
t.f=new V.T(0,0,0)
t.ch=100
u.z=t
t=new O.f9(u,"bump")
t.c=C.d
u.Q=t
u.ch=null
t=new O.aM(u,"reflect")
t.c=C.d
t.f=new V.T(0,0,0)
u.cx=t
t=new O.fb(u,"refract")
t.c=C.d
t.f=new V.T(0,0,0)
t.ch=1
u.cy=t
t=new O.f8(u,"alpha")
t.c=C.d
t.f=1
u.db=t
t=new D.dg()
t.bk(D.Z)
t.sfD(H.b([],[D.d0]))
t.sfG(H.b([],[D.bk]))
t.sfH(H.b([],[D.dA]))
t.sfI(H.b([],[D.dI]))
t.sfJ(H.b([],[D.dJ]))
t.sfK(H.b([],[D.dK]))
t.Q=null
t.ch=null
t.d0(t.ghD(),t.gii(),t.gim())
u.dx=t
s=t.Q
if(s==null){s=D.D()
t.Q=s
t=s}else t=s
t.h(0,u.giK())
t=u.dx
s=t.ch
if(s==null){s=D.D()
t.ch=s
t=s}else t=s
t.h(0,u.ga6())
u.dy=null
return u},
jS:function(a,b,c,d,e){var u,t,s,r,q
u=new O.aC()
t=u.a
u.a=e
e.gl().h(0,u.ga6())
s=new D.v("texture",t,u.a,u,[T.bo])
s.b=!0
u.v(s)
r=V.bi()
if(!J.I(u.b,r)){t=u.b
u.b=r
s=new D.v("colorMatrix",t,r,u,[V.a7])
s.b=!0
u.v(s)}q=V.iW()
if(!J.I(u.c,q)){t=u.c
u.c=q
s=new D.v("source",t,q,u,[V.bI])
s.b=!0
u.v(s)}if(!J.I(u.d,b)){t=u.d
u.d=b
s=new D.v("destination",t,b,u,[V.bI])
s.b=!0
u.v(s)}if(u.e!==!1){u.e=!1
s=new D.v("flip",!0,!1,u,[P.W])
s.b=!0
u.v(s)}u.f=null
return u},
ez:function ez(){var _=this
_.f=_.e=_.d=_.c=_.b=_.a=null},
d5:function d5(){var _=this
_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
dl:function dl(){var _=this
_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
f8:function f8(a,b){var _=this
_.f=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
c7:function c7(){},
f9:function f9(a,b){var _=this
_.a=a
_.b=b
_.e=_.d=_.c=null},
aM:function aM(a,b){var _=this
_.f=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
fb:function fb(a,b){var _=this
_.f=_.ch=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
fc:function fc(a,b){var _=this
_.f=_.ch=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
b4:function b4(){},
dG:function dG(){var _=this
_.e=_.d=_.c=_.b=_.a=null},
aC:function aC(){var _=this
_.f=_.e=_.d=_.c=_.b=_.a=null}},E={
iO:function(a,b,c,d,e,f){var u=new E.aa()
u.a=d
u.b=!0
u.sfC(0,O.es(E.aa))
u.y.aP(u.gko(),u.gkr())
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
u.sc2(0,e)
u.sai(f)
u.sbc(c)
return u},
lH:function(a,b){var u=new E.fp(a,b)
u.fv(a,b)
return u},
lN:function(a,b,c,d,e){var u,t,s,r
u=J.O(a)
if(!!u.$ibv)return E.jT(a,!0,!0,!0,!1)
t=W.iN(null,null)
s=t.style
s.width="100%"
s.height="100%"
u.gcv(a).h(0,t)
r=E.jT(t,!0,!0,!0,!1)
r.a=a
return r},
jT:function(a,b,c,d,e){var u,t,s,r,q,p,o,n,m,l,k,j
u=new E.dL()
t=P.lk(["alpha",!0,"depth",!0,"stencil",!1,"antialias",!0,"premultipliedAlpha",!0,"preserveDrawingBuffer",!1],P.l,null)
s=C.n.bZ(a,"webgl",t)
s=H.f(s==null?C.n.bZ(a,"experimental-webgl",t):s,"$ibJ")
if(s==null)H.o(P.r("Failed to get the rendering context for WebGL."))
u.b=a
u.a=a
u.c=s
u.e=E.lH(s,a)
r=new T.fL(s)
r.b=H.a6((s&&C.b).c_(s,3379))
r.c=H.a6(C.b.c_(s,34076))
r.d=0
r.e=0
u.f=r
r=new X.dT(a)
q=new X.eV()
q.c=new X.as(!1,!1,!1)
q.siA(P.lm(null,null,null,P.j))
r.b=q
q=new X.fe(r)
q.f=0
q.r=V.b3()
q.x=V.b3()
q.Q=1
q.ch=1
r.c=q
q=new X.f1(r)
q.r=0
q.x=V.b3()
q.Q=1
q.ch=1
q.cx=1
q.cy=1
r.d=q
q=new X.fQ(r)
q.e=0
q.f=V.b3()
q.r=V.b3()
r.e=q
r.f=!1
r.r=!1
r.x=!1
r.y=null
r.sha(H.b([],[[P.cj,P.L]]))
q=r.z
p=document
o=W.a8
n={func:1,ret:-1,args:[o]};(q&&C.a).h(q,W.a4(p,"contextmenu",H.m(r.ghP(),n),!1,o))
q=r.z
m=W.n
l={func:1,ret:-1,args:[m]};(q&&C.a).h(q,W.a4(a,"focus",H.m(r.ghZ(),l),!1,m))
q=r.z;(q&&C.a).h(q,W.a4(a,"blur",H.m(r.ghJ(),l),!1,m))
q=r.z
k=W.aL
j={func:1,ret:-1,args:[k]};(q&&C.a).h(q,W.a4(p,"keyup",H.m(r.gi2(),j),!1,k))
q=r.z;(q&&C.a).h(q,W.a4(p,"keydown",H.m(r.gi0(),j),!1,k))
k=r.z;(k&&C.a).h(k,W.a4(a,"mousedown",H.m(r.gi6(),n),!1,o))
k=r.z;(k&&C.a).h(k,W.a4(a,"mouseup",H.m(r.gia(),n),!1,o))
k=r.z;(k&&C.a).h(k,W.a4(a,"mousemove",H.m(r.gi8(),n),!1,o))
k=r.z
j=W.aT;(k&&C.a).h(k,W.a4(a,H.N(W.l9(a)),H.m(r.gic(),{func:1,ret:-1,args:[j]}),!1,j))
j=r.z;(j&&C.a).h(j,W.a4(p,"mousemove",H.m(r.ghR(),n),!1,o))
j=r.z;(j&&C.a).h(j,W.a4(p,"mouseup",H.m(r.ghT(),n),!1,o))
o=r.z;(o&&C.a).h(o,W.a4(p,"pointerlockchange",H.m(r.gig(),l),!1,m))
m=r.z
l=W.aE
p={func:1,ret:-1,args:[l]};(m&&C.a).h(m,W.a4(a,"touchstart",H.m(r.gix(),p),!1,l))
m=r.z;(m&&C.a).h(m,W.a4(a,"touchend",H.m(r.git(),p),!1,l))
m=r.z;(m&&C.a).h(m,W.a4(a,"touchmove",H.m(r.giv(),p),!1,l))
u.r=r
u.Q=!0
u.ch=!1
u.cx=new P.ai(Date.now(),!1)
u.cy=0
u.dH()
return u},
em:function em(){},
aa:function aa(){var _=this
_.fx=_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
fp:function fp(a,b){var _=this
_.a=a
_.b=b
_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=null},
fq:function fq(a){this.a=a},
fr:function fr(a){this.a=a},
fs:function fs(a){this.a=a},
dL:function dL(){var _=this
_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
fO:function fO(a){this.a=a}},Z={
j3:function(a,b,c){var u
H.h(c,"$ia",[P.j],"$aa")
u=a.createBuffer()
C.b.ay(a,b,u)
C.b.dY(a,b,new Int16Array(H.bq(c)),35044)
C.b.ay(a,b,null)
return new Z.dW(b,u)},
av:function(a){return new Z.au(a)},
dW:function dW(a,b){this.a=a
this.b=b},
cU:function cU(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
bL:function bL(a){this.a=a},
b8:function b8(a,b,c){var _=this
_.a=a
_.b=null
_.c=b
_.d=c},
be:function be(a,b,c){this.a=a
this.b=b
this.c=c},
au:function au(a){this.a=a}},D={
D:function(){var u=new D.bc()
u.sac(null)
u.sb2(null)
u.c=null
u.d=0
return u},
ep:function ep(){},
bc:function bc(){var _=this
_.d=_.c=_.b=_.a=null},
eH:function eH(a){this.a=a},
x:function x(a){this.a=a
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
v:function v(a,b,c,d,e){var _=this
_.c=a
_.d=b
_.e=c
_.a=d
_.b=null
_.$ti=e},
d0:function d0(){},
Z:function Z(){},
dg:function dg(){var _=this
_.d=_.c=_.b=_.a=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=null},
bk:function bk(){var _=this
_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
dA:function dA(){},
dI:function dI(){},
dJ:function dJ(){},
dK:function dK(){}},X={cV:function cV(a,b){this.a=a
this.b=b},de:function de(a,b){this.a=a
this.b=b},eV:function eV(){var _=this
_.d=_.c=_.b=_.a=null},di:function di(a,b,c,d,e,f){var _=this
_.x=a
_.y=b
_.c=c
_.d=d
_.e=e
_.a=f
_.b=null},f1:function f1(a){var _=this
_.a=a
_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},as:function as(a,b,c){this.a=a
this.b=b
this.c=c},bj:function bj(a,b,c,d,e,f,g,h,i){var _=this
_.x=a
_.y=b
_.z=c
_.Q=d
_.ch=e
_.c=f
_.d=g
_.e=h
_.a=i
_.b=null},fe:function fe(a){var _=this
_.a=a
_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},cb:function cb(a,b,c,d,e){var _=this
_.x=a
_.c=b
_.d=c
_.e=d
_.a=e
_.b=null},fn:function fn(){},dN:function dN(a,b,c,d,e,f,g,h,i){var _=this
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
_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},dT:function dT(a){var _=this
_.a=a
_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},
jo:function(a,b,c,d,e,f){var u=new X.ej()
u.a=512
u.b=512
u.c=512
u.d=512
u.e=!0
u.f=!0
u.r=d
u.x=e
u.ch=T.iY(0,null)
u.cx=new V.al(0,0,0,1)
u.cy=!0
u.db=2000
u.dx=!0
u.dy=V.iW()
u.saO(0,a)
u.saL(0,b)
return u},
iP:function(a,b,c,d,e,f,g){var u,t
u=new X.eO()
t=new V.al(0,0,0,1)
u.a=t
u.b=a
u.c=e
u.d=!0
u.e=g
u.f=!1
t=V.iW()
u.r=t
return u},
jK:function(a,b,c,d,e){var u,t
u=new X.ds()
u.c=1.0471975511965976
u.d=0.1
u.e=2000
u.sbc(c)
t=u.c
if(!(Math.abs(t-b)<$.A().a)){u.c=b
t=new D.v("fov",t,b,u,[P.q])
t.b=!0
u.ar(t)}t=u.d
if(!(Math.abs(t-d)<$.A().a)){u.d=d
t=new D.v("near",t,d,u,[P.q])
t.b=!0
u.ar(t)}t=u.e
if(!(Math.abs(t-a)<$.A().a)){u.e=a
t=new D.v("far",t,a,u,[P.q])
t.b=!0
u.ar(t)}return u},
ej:function ej(){var _=this
_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
bu:function bu(){},
eO:function eO(){var _=this
_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
eP:function eP(){this.b=this.a=null},
ds:function ds(){var _=this
_.f=_.e=_.d=_.c=_.b=_.a=null},
ck:function ck(){}},V={
iI:function(a,b,c){var u
if(c<=b)return b
u=c-b
a=C.h.au(a-b,u)
return(a<0?a+u:a)+b},
G:function(a,b,c){if(a==null)return C.c.aq("null",c)
return C.c.aq(C.h.f4(Math.abs(a-0)<$.A().a?0:a,b),c+b+1)},
bR:function(a,b,c){var u,t,s,r,q,p
H.h(a,"$ia",[P.q],"$aa")
u=H.b([],[P.l])
for(t=a.length,s=0,r=0;r<a.length;a.length===t||(0,H.z)(a),++r){q=V.G(a[r],b,c)
s=Math.max(s,q.length)
C.a.h(u,q)}for(p=u.length-1;p>=0;--p){if(p>=u.length)return H.c(u,p)
C.a.p(u,p,C.c.aq(u[p],s))}return u},
cK:function(a,b){return C.h.kT(Math.pow(b,C.Q.ba(Math.log(H.mu(a))/Math.log(b))))},
bi:function(){var u=$.fd
if(u==null){u=V.aN(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1)
$.fd=u}return u},
aN:function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){return new V.a7(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p)},
jH:function(a,b,c){return V.aN(1,0,0,a,0,1,0,b,0,0,1,c,0,0,0,1)},
jF:function(a){var u,t
u=Math.cos(a)
t=Math.sin(a)
return V.aN(1,0,0,0,0,u,-t,0,0,t,u,0,0,0,0,1)},
jG:function(a){var u,t
u=Math.cos(a)
t=Math.sin(a)
return V.aN(u,0,-t,0,0,1,0,0,t,0,u,0,0,0,0,1)},
b3:function(){var u=$.jM
if(u==null){u=new V.a2(0,0)
$.jM=u}return u},
jN:function(){var u=$.bm
if(u==null){u=new V.a_(0,0,0)
$.bm=u}return u},
iW:function(){var u=$.cg
if(u==null){u=V.cf(0,0,1,1)
$.cg=u}return u},
cf:function(a,b,c,d){if(c<0){a+=c
c=-c}if(d<0){b+=d
d=-d}return new V.bI(a,b,c,d)},
cv:function(){var u=$.k2
if(u==null){u=new V.K(0,0,0)
$.k2=u}return u},
T:function T(a,b,c){this.a=a
this.b=b
this.c=c},
al:function al(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
eF:function eF(a){this.a=a},
c8:function c8(a,b,c,d,e,f,g,h,i){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.x=h
_.y=i},
a7:function a7(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){var _=this
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
a2:function a2(a,b){this.a=a
this.b=b},
a_:function a_(a,b,c){this.a=a
this.b=b
this.c=c},
aP:function aP(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
bI:function bI(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
S:function S(a,b){this.a=a
this.b=b},
K:function K(a,b,c){this.a=a
this.b=b
this.c=c},
ac:function(a){var u=new V.fv()
u.fw(a)
return u},
ef:function ef(){},
b1:function b1(){},
dj:function dj(){},
b2:function b2(){this.a=null},
fv:function fv(){this.a=null},
ci:function ci(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
dM:function dM(a,b,c){this.a=a
this.b=b
this.c=c},
cl:function cl(a,b){this.a=a
this.b=b
this.c=null},
fP:function fP(){this.c=this.b=this.a=null},
cm:function cm(a){this.b=a
this.a=this.c=null},
mQ:function(a){P.lO(C.N,new V.iE(a))},
lJ:function(a,b){var u=new V.fz()
u.fz(a,!0)
return u},
eq:function eq(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
er:function er(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
iE:function iE(a){this.a=a},
fz:function fz(){this.b=this.a=null},
fB:function fB(a){this.a=a},
fA:function fA(a){this.a=a}},U={
ju:function(){var u=new U.et()
u.a=!0
u.b=1e12
u.c=-1e12
u.d=0
u.e=100
u.f=0
u.x=0
u.r=0
return u},
jv:function(a){var u=new U.cX()
u.a=a
return u},
jz:function(a){var u=new U.c3()
u.bk(U.a9)
u.aP(u.gfL(),u.gik())
u.b4(0,a)
u.e=null
u.f=V.bi()
u.r=0
return u},
et:function et(){var _=this
_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
cX:function cX(){this.b=this.a=null},
c3:function c3(){var _=this
_.d=_.c=_.b=_.a=_.r=_.f=_.e=null},
a9:function a9(){},
dx:function dx(){var _=this
_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
dU:function dU(){var _=this
_.fx=_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
dV:function dV(){var _=this
_.r=_.f=_.e=_.d=_.c=_.b=_.a=null}},M={
jw:function(a,b,c){var u,t,s
u=new M.cY()
a=new X.eP()
t=u.a
u.a=a
a.gl().h(0,u.ga0())
s=new D.v("camera",t,u.a,u,[X.bu])
s.b=!0
u.X(s)
u.saY(0,b)
u.sai(c)
s=E.iO(null,!0,null,"",null,null)
s.sc2(0,F.kz(!1,2,null,2,0))
u.d=s
u.e=null
return u},
jy:function(a,b,c,d,e){var u=new M.d2()
u.sfZ(0,O.es(E.aa))
u.d.aP(u.ghL(),u.ghN())
u.e=null
u.f=null
u.r=null
u.x=null
d=X.iP(!0,!0,!1,c,2000,null,0)
u.scu(a)
u.saY(0,d)
u.sai(e)
u.d.b4(0,b)
return u},
cW:function cW(){var _=this
_.d=_.c=_.b=_.a=_.f=_.e=null},
cY:function cY(){var _=this
_.f=_.e=_.d=_.c=_.b=_.a=null},
d2:function d2(){var _=this
_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
ap:function ap(){}},A={
lq:function(a,b){var u,t
u=a.at
t=new A.dk(b,u)
t.bl(b,u)
t.fu(a,b)
return t},
lM:function(a){var u,t
for(u=0,t="precision mediump float;\n\nuniform vec4 backClr;\n\nvarying vec2 pos;\n\nuniform int txtCount;\n";u<a;++u)t=t+("uniform sampler2D txt"+u+";\n")+("uniform mat4 clrMat"+u+";\n")+("uniform vec2 srcLoc"+u+";\n")+("uniform vec2 srcSize"+u+";\n")+("uniform vec2 destLoc"+u+";\n")+("uniform vec2 destSize"+u+";\n")+("uniform int flip"+u+";\n")
t+"\n"
t+"\nvec4 layout(vec4 clrAccum, sampler2D txt, mat4 clrMat,\n"
t+"\nvec4 layout(vec4 clrAccum, sampler2D txt, mat4 clrMat,\n            vec2 srcLoc, vec2 srcSize, vec2 destLoc, vec2 destSize, int flip)\n"
t+"\nvec4 layout(vec4 clrAccum, sampler2D txt, mat4 clrMat,\n            vec2 srcLoc, vec2 srcSize, vec2 destLoc, vec2 destSize, int flip)\n{\n"
t+"\nvec4 layout(vec4 clrAccum, sampler2D txt, mat4 clrMat,\n            vec2 srcLoc, vec2 srcSize, vec2 destLoc, vec2 destSize, int flip)\n{\n   vec2 txtPnt = (pos - destLoc)*srcSize/destSize;\n"
t+"\nvec4 layout(vec4 clrAccum, sampler2D txt, mat4 clrMat,\n            vec2 srcLoc, vec2 srcSize, vec2 destLoc, vec2 destSize, int flip)\n{\n   vec2 txtPnt = (pos - destLoc)*srcSize/destSize;\n   if((txtPnt.x >= 0.0) && (txtPnt.x <= srcSize.x) &&\n"
t+"\nvec4 layout(vec4 clrAccum, sampler2D txt, mat4 clrMat,\n            vec2 srcLoc, vec2 srcSize, vec2 destLoc, vec2 destSize, int flip)\n{\n   vec2 txtPnt = (pos - destLoc)*srcSize/destSize;\n   if((txtPnt.x >= 0.0) && (txtPnt.x <= srcSize.x) &&\n      (txtPnt.y >= 0.0) && (txtPnt.y <= srcSize.y))\n"
t+"\nvec4 layout(vec4 clrAccum, sampler2D txt, mat4 clrMat,\n            vec2 srcLoc, vec2 srcSize, vec2 destLoc, vec2 destSize, int flip)\n{\n   vec2 txtPnt = (pos - destLoc)*srcSize/destSize;\n   if((txtPnt.x >= 0.0) && (txtPnt.x <= srcSize.x) &&\n      (txtPnt.y >= 0.0) && (txtPnt.y <= srcSize.y))\n   {\n"
t+"\nvec4 layout(vec4 clrAccum, sampler2D txt, mat4 clrMat,\n            vec2 srcLoc, vec2 srcSize, vec2 destLoc, vec2 destSize, int flip)\n{\n   vec2 txtPnt = (pos - destLoc)*srcSize/destSize;\n   if((txtPnt.x >= 0.0) && (txtPnt.x <= srcSize.x) &&\n      (txtPnt.y >= 0.0) && (txtPnt.y <= srcSize.y))\n   {\n      if(flip != 0) txtPnt.y = srcSize.y - txtPnt.y;\n"
t+"\nvec4 layout(vec4 clrAccum, sampler2D txt, mat4 clrMat,\n            vec2 srcLoc, vec2 srcSize, vec2 destLoc, vec2 destSize, int flip)\n{\n   vec2 txtPnt = (pos - destLoc)*srcSize/destSize;\n   if((txtPnt.x >= 0.0) && (txtPnt.x <= srcSize.x) &&\n      (txtPnt.y >= 0.0) && (txtPnt.y <= srcSize.y))\n   {\n      if(flip != 0) txtPnt.y = srcSize.y - txtPnt.y;\n      vec4 color = clrMat*texture2D(txt, txtPnt + srcLoc);\n"
t+"\nvec4 layout(vec4 clrAccum, sampler2D txt, mat4 clrMat,\n            vec2 srcLoc, vec2 srcSize, vec2 destLoc, vec2 destSize, int flip)\n{\n   vec2 txtPnt = (pos - destLoc)*srcSize/destSize;\n   if((txtPnt.x >= 0.0) && (txtPnt.x <= srcSize.x) &&\n      (txtPnt.y >= 0.0) && (txtPnt.y <= srcSize.y))\n   {\n      if(flip != 0) txtPnt.y = srcSize.y - txtPnt.y;\n      vec4 color = clrMat*texture2D(txt, txtPnt + srcLoc);\n      clrAccum = mix(clrAccum, color, color.a);\n"
t+"\nvec4 layout(vec4 clrAccum, sampler2D txt, mat4 clrMat,\n            vec2 srcLoc, vec2 srcSize, vec2 destLoc, vec2 destSize, int flip)\n{\n   vec2 txtPnt = (pos - destLoc)*srcSize/destSize;\n   if((txtPnt.x >= 0.0) && (txtPnt.x <= srcSize.x) &&\n      (txtPnt.y >= 0.0) && (txtPnt.y <= srcSize.y))\n   {\n      if(flip != 0) txtPnt.y = srcSize.y - txtPnt.y;\n      vec4 color = clrMat*texture2D(txt, txtPnt + srcLoc);\n      clrAccum = mix(clrAccum, color, color.a);\n   }\n"
t+"\nvec4 layout(vec4 clrAccum, sampler2D txt, mat4 clrMat,\n            vec2 srcLoc, vec2 srcSize, vec2 destLoc, vec2 destSize, int flip)\n{\n   vec2 txtPnt = (pos - destLoc)*srcSize/destSize;\n   if((txtPnt.x >= 0.0) && (txtPnt.x <= srcSize.x) &&\n      (txtPnt.y >= 0.0) && (txtPnt.y <= srcSize.y))\n   {\n      if(flip != 0) txtPnt.y = srcSize.y - txtPnt.y;\n      vec4 color = clrMat*texture2D(txt, txtPnt + srcLoc);\n      clrAccum = mix(clrAccum, color, color.a);\n   }\n   return clrAccum;\n"
t+"\nvec4 layout(vec4 clrAccum, sampler2D txt, mat4 clrMat,\n            vec2 srcLoc, vec2 srcSize, vec2 destLoc, vec2 destSize, int flip)\n{\n   vec2 txtPnt = (pos - destLoc)*srcSize/destSize;\n   if((txtPnt.x >= 0.0) && (txtPnt.x <= srcSize.x) &&\n      (txtPnt.y >= 0.0) && (txtPnt.y <= srcSize.y))\n   {\n      if(flip != 0) txtPnt.y = srcSize.y - txtPnt.y;\n      vec4 color = clrMat*texture2D(txt, txtPnt + srcLoc);\n      clrAccum = mix(clrAccum, color, color.a);\n   }\n   return clrAccum;\n}\n"
t+"\nvec4 layout(vec4 clrAccum, sampler2D txt, mat4 clrMat,\n            vec2 srcLoc, vec2 srcSize, vec2 destLoc, vec2 destSize, int flip)\n{\n   vec2 txtPnt = (pos - destLoc)*srcSize/destSize;\n   if((txtPnt.x >= 0.0) && (txtPnt.x <= srcSize.x) &&\n      (txtPnt.y >= 0.0) && (txtPnt.y <= srcSize.y))\n   {\n      if(flip != 0) txtPnt.y = srcSize.y - txtPnt.y;\n      vec4 color = clrMat*texture2D(txt, txtPnt + srcLoc);\n      clrAccum = mix(clrAccum, color, color.a);\n   }\n   return clrAccum;\n}\n\n"
t+"\nvec4 layout(vec4 clrAccum, sampler2D txt, mat4 clrMat,\n            vec2 srcLoc, vec2 srcSize, vec2 destLoc, vec2 destSize, int flip)\n{\n   vec2 txtPnt = (pos - destLoc)*srcSize/destSize;\n   if((txtPnt.x >= 0.0) && (txtPnt.x <= srcSize.x) &&\n      (txtPnt.y >= 0.0) && (txtPnt.y <= srcSize.y))\n   {\n      if(flip != 0) txtPnt.y = srcSize.y - txtPnt.y;\n      vec4 color = clrMat*texture2D(txt, txtPnt + srcLoc);\n      clrAccum = mix(clrAccum, color, color.a);\n   }\n   return clrAccum;\n}\n\nvec4 layoutAll()\n"
t+"\nvec4 layout(vec4 clrAccum, sampler2D txt, mat4 clrMat,\n            vec2 srcLoc, vec2 srcSize, vec2 destLoc, vec2 destSize, int flip)\n{\n   vec2 txtPnt = (pos - destLoc)*srcSize/destSize;\n   if((txtPnt.x >= 0.0) && (txtPnt.x <= srcSize.x) &&\n      (txtPnt.y >= 0.0) && (txtPnt.y <= srcSize.y))\n   {\n      if(flip != 0) txtPnt.y = srcSize.y - txtPnt.y;\n      vec4 color = clrMat*texture2D(txt, txtPnt + srcLoc);\n      clrAccum = mix(clrAccum, color, color.a);\n   }\n   return clrAccum;\n}\n\nvec4 layoutAll()\n{\n"
t+="\nvec4 layout(vec4 clrAccum, sampler2D txt, mat4 clrMat,\n            vec2 srcLoc, vec2 srcSize, vec2 destLoc, vec2 destSize, int flip)\n{\n   vec2 txtPnt = (pos - destLoc)*srcSize/destSize;\n   if((txtPnt.x >= 0.0) && (txtPnt.x <= srcSize.x) &&\n      (txtPnt.y >= 0.0) && (txtPnt.y <= srcSize.y))\n   {\n      if(flip != 0) txtPnt.y = srcSize.y - txtPnt.y;\n      vec4 color = clrMat*texture2D(txt, txtPnt + srcLoc);\n      clrAccum = mix(clrAccum, color, color.a);\n   }\n   return clrAccum;\n}\n\nvec4 layoutAll()\n{\n   vec4 clrAccum = backClr;\n"
for(u=0;u<a;++u)t=t+("   if(txtCount <= "+u+") return clrAccum;\n")+("   clrAccum = layout(clrAccum, txt"+u+", clrMat"+u+", srcLoc"+u+", srcSize"+u+", destLoc"+u+", destSize"+u+", flip"+u+");\n")
t+"   return clrAccum;\n"
t+"   return clrAccum;\n}\n"
t+"   return clrAccum;\n}\n\n"
t+"   return clrAccum;\n}\n\nvoid main()\n"
t+"   return clrAccum;\n}\n\nvoid main()\n{\n"
t+"   return clrAccum;\n}\n\nvoid main()\n{\n   vec4 color = layoutAll();\n"
t+"   return clrAccum;\n}\n\nvoid main()\n{\n   vec4 color = layoutAll();\n   if(color.a <= 0.0) discard;\n"
t+"   return clrAccum;\n}\n\nvoid main()\n{\n   vec4 color = layoutAll();\n   if(color.a <= 0.0) discard;\n   gl_FragColor = color;\n"
t+="   return clrAccum;\n}\n\nvoid main()\n{\n   vec4 color = layoutAll();\n   if(color.a <= 0.0) discard;\n   gl_FragColor = color;\n}\n"
return t.charCodeAt(0)==0?t:t},
lL:function(a,b){var u,t
u="TextureLayout_"+a
t=new A.dH(b,u)
t.bl(b,u)
t.fA(a,b)
return t},
j_:function(a,b,c,d,e){var u=new A.fW(a,b,c,e)
u.f=d
u.sjh(P.ln(d,0,!1,P.j))
return u},
cR:function cR(a,b,c){this.a=a
this.b=b
this.c=c},
ei:function ei(a){this.a=a},
d_:function d_(a,b){var _=this
_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=null
_.a=a
_.b=b
_.y=_.x=_.r=_.f=_.e=_.d=_.c=null},
d6:function d6(a,b){var _=this
_.id=_.go=_.fy=_.fx=_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=null
_.a=a
_.b=b
_.y=_.x=_.r=_.f=_.e=_.d=_.c=null},
dk:function dk(a,b){var _=this
_.bz=_.ec=_.by=_.at=_.aB=_.y2=_.y1=_.x2=_.x1=_.ry=_.rx=_.r2=_.r1=_.k4=_.k3=_.k2=_.k1=_.id=_.go=_.fy=_.fx=_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=null
_.es=_.cA=_.er=_.bM=_.eq=_.ep=_.bL=_.bK=_.eo=_.en=_.bJ=_.bI=_.bH=_.em=_.el=_.bG=_.ek=_.ej=_.bF=_.ei=_.eh=_.bE=_.bD=_.eg=_.ef=_.bC=_.bB=_.ee=_.ed=_.bA=null
_.cF=_.ex=_.cE=_.ew=_.cD=_.ev=_.cC=_.eu=_.cB=null
_.a=a
_.b=b
_.y=_.x=_.r=_.f=_.e=_.d=_.c=null},
fa:function fa(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5){var _=this
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
_.aB=b3
_.at=b4
_.by=b5},
cn:function cn(a,b,c){this.a=a
this.b=b
this.c=c},
cq:function cq(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.x=h},
co:function co(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},
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
cp:function cp(a,b,c,d,e,f,g,h,i,j){var _=this
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
cs:function cs(a,b,c,d,e,f,g,h,i,j,k,l,m,n){var _=this
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
ch:function ch(){},
by:function by(a,b){this.a=a
this.b=b},
dH:function dH(a,b){var _=this
_.fx=_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=null
_.a=a
_.b=b
_.y=_.x=_.r=_.f=_.e=_.d=_.c=null},
dO:function dO(){},
h_:function h_(a){this.a=a},
C:function C(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
fX:function fX(a,b,c,d){var _=this
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
fW:function fW(a,b,c,d){var _=this
_.f=_.e=null
_.a=a
_.b=b
_.c=c
_.d=d},
M:function M(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
aq:function aq(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
E:function E(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
dP:function dP(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
h0:function h0(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
bK:function bK(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
a3:function a3(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
a0:function a0(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
ak:function ak(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d}},F={
kz:function(a,b,c,d,e){var u,t,s,r,q,p,o,n,m,l
u=F.iX()
t=u.a
s=-d*0.5
r=-b*0.5
q=new V.K(-1,-1,1)
q=q.A(0,Math.sqrt(q.I(q)))
p=t.bs(new V.aP(1,2,4,6),new V.al(1,0,0,1),new V.a_(s,r,e),new V.a2(0,1),q,c)
t=u.a
q=d*0.5
o=new V.K(1,-1,1)
o=o.A(0,Math.sqrt(o.I(o)))
n=t.bs(new V.aP(0,3,4,6),new V.al(0,0,1,1),new V.a_(q,r,e),new V.a2(1,1),o,c)
t=u.a
r=b*0.5
o=new V.K(1,1,1)
o=o.A(0,Math.sqrt(o.I(o)))
m=t.bs(new V.aP(0,2,5,6),new V.al(0,1,0,1),new V.a_(q,r,e),new V.a2(1,0),o,c)
t=u.a
q=V.b3()
o=new V.K(-1,1,1)
o=o.A(0,Math.sqrt(o.I(o)))
l=t.bs(new V.aP(0,2,4,7),new V.al(1,1,0,1),new V.a_(s,r,e),q,o,c)
u.d.jG(H.b([p,n,m,l],[F.ad]))
u.as()
return u},
ib:function(a){var u,t
u=a.a>0?1:0
if(a.b>0)u+=2
t=a.c
if(typeof t!=="number")return t.d_()
return(t>0?u+4:u)*2},
cF:function(a,b,c,d,a0,a1,a2,a3,a4){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e
u={}
H.m(c,{func:1,ret:-1,args:[F.ad,P.q,P.q]})
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
u.d=t}g=F.ib(t)
f=F.ib(u.b)
e=F.kB(d,a0,new F.ia(u,F.ib(u.c),F.ib(u.d),f,g,c),b)
if(e!=null)a.cN(e)},
mR:function(a,b,c,d){var u,t
u={}
u.a=b
u.a=new F.iF()
u=new F.iG(u,c)
t=F.iX()
F.cF(t,null,u,d,a,1,0,0,1)
F.cF(t,null,u,d,a,0,1,0,3)
F.cF(t,null,u,d,a,0,0,1,2)
F.cF(t,null,u,d,a,-1,0,0,0)
F.cF(t,null,u,d,a,0,-1,0,0)
F.cF(t,null,u,d,a,0,0,-1,3)
t.as()
t.km(new F.hj(),new F.fj())
return t},
mD:function(a,b,c){var u={}
u.a=b
u.a=new F.io()
return F.kB(c,a,new F.ip(u),null)},
kB:function(a,b,c,d){var u,t,s,r,q,p,o,n,m,l,k,j,i,h
H.m(c,{func:1,ret:-1,args:[F.ad,P.q,P.q]})
if(a<1)return
if(b<1)return
u=F.iX()
t=H.b([],[F.ad])
for(s=0;s<=b;++s){r=s/b
q=u.a
if(r<0)p=0
else p=r>1?1:r
q.toString
o=F.hd(null,null,new V.al(p,0,0,1),null,null,new V.a2(r,1),null,null,0)
q.h(0,o)
c.$3(o,r,0)
C.a.h(t,o.cz(d))}for(s=1;s<=a;++s){n=s/a
for(q=n>1,p=n<0,m=1-n,l=0;l<=b;++l){r=l/b
k=u.a
if(r<0)j=0
else j=r>1?1:r
if(p)i=0
else i=q?1:n
if(p)h=0
else h=q?1:n
k.toString
o=F.hd(null,null,new V.al(j,i,h,1),null,null,new V.a2(r,m),null,null,0)
k.h(0,o)
c.$3(o,r,n)
C.a.h(t,o.cz(d))}}u.d.jH(a+1,b+1,t)
return u},
c1:function(a,b,c){var u,t
u=new F.a1()
t=a.a
if(t==null)H.o(P.r("May not create a face with a first vertex which is not attached to a shape."))
if(t!=b.a||t!=c.a)H.o(P.r("May not create a face with vertices attached to different shapes."))
u.cn(a)
u.co(b)
u.iS(c)
C.a.h(u.a.a.d.b,u)
u.a.a.a4()
return u},
lh:function(a,b){var u,t
u=new F.b0()
t=a.a
if(t==null)H.o(P.r("May not create a line with a start vertex which is not attached to a shape."))
if(t!=b.a)H.o(P.r("May not create a line with vertices attached to different shapes."))
u.cn(a)
u.co(b)
C.a.h(u.a.a.c.b,u)
u.a.a.a4()
return u},
iX:function(){var u,t
u=new F.dz()
t=new F.he(u)
t.b=!1
t.sji(H.b([],[F.ad]))
u.a=t
t=new F.fy(u)
t.sce(H.b([],[F.bl]))
u.b=t
t=new F.fx(u)
t.shn(H.b([],[F.b0]))
u.c=t
t=new F.fw(u)
t.shb(H.b([],[F.a1]))
u.d=t
u.e=null
return u},
hd:function(a,b,c,d,e,f,g,h,i){var u,t,s
u=new F.ad()
t=new F.hm(u)
t.sce(H.b([],[F.bl]))
u.b=t
t=new F.hi(u)
s=[F.b0]
t.sho(H.b([],s))
t.shp(H.b([],s))
u.c=t
t=new F.hf(u)
s=[F.a1]
t.shc(H.b([],s))
t.shd(H.b([],s))
t.she(H.b([],s))
u.d=t
h=$.jj()
u.e=0
t=$.af()
s=h.a
u.f=(s&t.a)!==0?d:null
u.r=(s&$.aG().a)!==0?e:null
u.x=(s&$.aW().a)!==0?b:null
u.y=(s&$.az().a)!==0?f:null
u.z=(s&$.aX().a)!==0?g:null
u.Q=(s&$.jk().a)!==0?c:null
u.ch=(s&$.bt().a)!==0?i:0
u.cx=(s&$.aV().a)!==0?a:null
return u},
ia:function ia(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
iF:function iF(){},
iG:function iG(a,b){this.a=a
this.b=b},
io:function io(){},
ip:function ip(a){this.a=a},
a1:function a1(){var _=this
_.e=_.d=_.c=_.b=_.a=null},
eI:function eI(){},
fC:function fC(){},
b0:function b0(){this.b=this.a=null},
eW:function eW(){},
fV:function fV(){},
bl:function bl(){this.a=null},
dz:function dz(){var _=this
_.e=_.d=_.c=_.b=_.a=null},
fw:function fw(a){this.a=a
this.b=null},
fx:function fx(a){this.a=a
this.b=null},
fy:function fy(a){this.a=a
this.b=null},
ad:function ad(){var _=this
_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
ho:function ho(a){this.a=a},
hn:function hn(a){this.a=a},
he:function he(a){this.a=a
this.c=this.b=null},
hf:function hf(a){var _=this
_.a=a
_.d=_.c=_.b=null},
hg:function hg(a,b){this.a=a
this.b=b},
hh:function hh(a,b){this.a=a
this.b=b},
hi:function hi(a){this.a=a
this.c=this.b=null},
hk:function hk(){},
hj:function hj(){},
hl:function hl(){},
fj:function fj(){},
hm:function hm(a){this.a=a
this.b=null}},T={
iY:function(a,b){var u=new T.fK()
u.a=a
u.b=b
u.c=!1
u.d=!1
u.e=0
u.f=0
u.r=0
u.x=0
return u},
b5:function b5(){},
bo:function bo(){},
fK:function fK(){var _=this
_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
fL:function fL(a){var _=this
_.a=a
_.e=_.d=_.c=_.b=null},
fM:function fM(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},
fN:function fN(a,b,c){this.a=a
this.b=b
this.c=c}},K={
kv:function(){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1
u={}
t=V.lJ("Test 040",!0)
s=W.iN(null,null)
s.className="pageLargeCanvas"
s.id="testCanvas"
C.l.Y(t.a,s)
r=[P.l]
t.dP(H.b(["A combination of bump mapping with height map and specular map."],r))
t.jF(H.b(["controls"],r))
t.dP(H.b(["\xab[Back to Tests|../]"],r))
r=document
q=C.y.cZ(r,"testCanvas")
if(q==null)H.o(P.r("Failed to find an element with the identifier, testCanvas."))
p=E.lN(q,!0,!0,!0,!1)
o=p.f.bP("../resources/gravel/colorLarge.png")
n=p.f.bP("../resources/gravel/bumpLarge.png")
m=p.f.bP("../resources/gravel/specularSmall.png")
l=p.f.bP("../resources/gravel/heightSmall.png")
t=U.jv(V.jH(0,0,2))
k=new U.dx()
k.a=0
k.b=0
k.c=0
k.d=0
k.e=0
k.f=0
k.r=0
k.sfc(0)
k.seW(0)
k.sf_(0)
j=k.d
if(!(Math.abs(j-0.6)<$.A().a)){k.d=0.6
j=new D.v("deltaYaw",j,0.6,k,[P.q])
j.b=!0
k.O(j)}j=k.e
if(!(Math.abs(j-0.1)<$.A().a)){k.e=0.1
j=new D.v("deltaPitch",j,0.1,k,[P.q])
j.b=!0
k.O(j)}j=k.f
if(!(Math.abs(j-0)<$.A().a)){k.f=0
j=new D.v("deltaRoll",j,0,k,[P.q])
j.b=!0
k.O(j)}j=U.a9
i=[j]
h=U.jz(H.b([t,k],i))
g=E.iO(null,!0,null,"",F.mR(8,null,0.03,8),null)
g.sbc(h)
k=O.jD()
t=k.f
t.saz(0,new V.T(1,1,1))
g.sai(k)
t=new V.T(1,1,1)
f=new D.bk()
f.c=new V.T(1,1,1)
f.d=1
f.e=0
f.f=0
f.a=V.jN()
e=f.b
f.b=h
h.gl().h(0,f.gfE())
k=new D.v("mover",e,f.b,f,[j])
k.b=!0
f.al(k)
f.c=t
if(!t.u(0,t)){e=f.c
f.c=t
t=new D.v("color",e,t,f,[V.T])
t.b=!0
f.al(t)}t=f.d
if(!(Math.abs(t-0.5)<$.A().a)){f.d=0.5
t=new D.v("attenuation0",t,0.5,f,[P.q])
t.b=!0
f.al(t)}t=f.e
if(!(Math.abs(t-0.1)<$.A().a)){f.e=0.1
t=new D.v("attenuation1",t,0.1,f,[P.q])
t.b=!0
f.al(t)}t=f.f
if(!(Math.abs(t-0)<$.A().a)){f.f=0
t=new D.v("attenuation2",t,0,f,[P.q])
t.b=!0
f.al(t)}d=F.kz(!1,2,null,2,0)
c=E.iO(null,!0,null,"",d,null)
u.a=null
l.gl().h(0,new K.iv(u,p,l))
b=X.jK(2000,1.0471975511965976,null,0.1,null)
t=p.r
k=new U.dU()
j=U.ju()
j.sfb(0,!0)
j.seK(6.283185307179586)
j.seM(0)
j.sa8(0,0)
j.seL(100)
j.sa3(0)
j.se2(0.5)
k.b=j
a=k.gbo()
j.gl().h(0,a)
j=U.ju()
j.sfb(0,!0)
j.seK(6.283185307179586)
j.seM(0)
j.sa8(0,0)
j.seL(100)
j.sa3(0)
j.se2(0.5)
k.c=j
j.gl().h(0,a)
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
a0=new X.as(!1,!1,!1)
e=k.d
k.d=a0
j=[X.as]
a=new D.v("modifiers",e,a0,k,j)
a.b=!0
k.O(a)
a=k.f
if(a!==!1){k.f=!1
a=new D.v("invertX",a,!1,k,[P.W])
a.b=!0
k.O(a)}a=k.r
if(a!==!1){k.r=!1
a=new D.v("invertY",a,!1,k,[P.W])
a.b=!0
k.O(a)}k.cp(t)
t=p.r
a=new U.dV()
a.c=0.01
a.d=0
a.e=0
a0=new X.as(!1,!1,!1)
a.b=a0
j=new D.v("modifiers",null,a0,a,j)
j.b=!0
a.O(j)
a.cp(t)
b.sbc(U.jz(H.b([k,a,U.jv(V.jH(0,0,5))],i)))
a1=O.jD()
a1.dx.h(0,f)
t=a1.r
t.saz(0,new V.T(0.3,0.3,0.3))
a1.x.saz(0,new V.T(1,1,1))
t=a1.z
if(t.c===C.d){t.c=C.j
t.c3()
t.ck(100)
k=t.a
k.a=null
k.v(null)}t.ck(40)
a2=X.jo(800,600,!0,1,1,!0)
t=[E.aa]
a3=M.jy(null,H.b([c,g],t),null,null,null)
a3.sai(a1)
a3.scu(b)
a3.saY(0,a2)
a4=X.jo(400,300,!0,0.5,0.5,!0)
a5=M.jy(null,H.b([c,g],t),null,null,null)
a5.scu(b)
a5.saY(0,a4)
t=new O.ez()
t.d=1
t.e=10
a6=new V.T(1,1,1)
t.b=a6
k=[V.T]
j=new D.v("objectColor",null,a6,t,k)
j.b=!0
t.v(j)
a6=new V.T(0,0,0)
if(!J.I(t.c,a6)){e=t.c
t.c=a6
k=new D.v("fogColor",e,a6,t,k)
k.b=!0
t.v(k)}k=t.d
if(!(Math.abs(k-1)<$.A().a)){t.d=1
k=new D.v("fogStart",k,1,t,[P.q])
k.b=!0
t.v(k)}k=t.e
if(!(Math.abs(k-4)<$.A().a)){t.e=4
k=new D.v("fogStop",k,4,t,[P.q])
k.b=!0
t.v(k)}a5.sai(t)
t=a2.ch
k=a4.ch
a7=new O.d5()
a7.e=0
a7.f=4
a7.r=0.001
j=$.jE
if(j==null){j=new V.c8(1,0,0,0,1,0,0,0,1)
$.jE=j
a8=j}else a8=j
a7.b=a8
j=new D.v("textureMatrix",null,null,a7,[P.L])
j.b=!0
a7.v(j)
j=a7.c
if(j!==t){if(j!=null)j.gl().H(0,a7.ga6())
e=a7.c
a7.c=t
t.gl().h(0,a7.ga6())
t=new D.v("colorTexture",e,a7.c,a7,[T.bo])
t.b=!0
a7.v(t)}a7.se5(k)
t=a7.e
if(!(Math.abs(t-0)<$.A().a)){a7.e=0
t=new D.v("highOffset",t,0,a7,[P.q])
t.b=!0
a7.v(t)}t=a7.f
if(!(Math.abs(t-3)<$.A().a)){a7.f=3
t=new D.v("lowOffset",t,3,a7,[P.q])
t.b=!0
a7.v(t)}t=a7.r
if(!(Math.abs(t-0.001)<$.A().a)){a7.r=0.001
t=new D.v("depthLimit",t,0.001,a7,[P.q])
t.b=!0
a7.v(t)}a9=M.jw(null,null,null)
a9.sai(a7)
b0=new O.dG()
a6=new V.al(0,0,0,0)
b0.a=a6
t=new D.v("backColor",null,a6,b0,[V.al])
t.b=!0
b0.v(t)
b0.b=null
b0.sh9(O.es(O.aC))
b0.c.aP(b0.ghV(),b0.ghX())
b0.d=0
b0.e=null
t=b0.c
k=a4.ch
t.h(0,O.jS(null,V.cf(0,0.8,0.2,0.2),!1,null,k))
k=b0.c
t=a2.ch
k.h(0,O.jS(null,V.cf(0,0.6,0.2,0.2),!1,null,t))
b1=M.jw(null,null,null)
b1.saY(0,X.iP(!1,!0,!1,null,2000,null,0))
b1.sai(b0)
t=M.ap
k=H.b([a3,a5,a9,b1],[t])
j=new M.cW()
j.bk(t)
j.e=!1
j.f=null
j.aP(j.gip(),j.gir())
j.b4(0,k)
t=p.d
if(t!==j){if(t!=null)t.gl().H(0,p.gd5())
p.d=j
j.gl().h(0,p.gd5())
p.d6()}t=new V.eq("controls",!0)
r=C.y.cZ(r,"controls")
t.c=r
if(r==null)H.o("Failed to find controls for CheckGroup")
t.sfY(H.b([],[W.bX]))
t.aU(0,"Color",new K.iw(a1,o),!0)
t.aU(0,"Specular",new K.ix(a1,m),!1)
t.aU(0,"Bump",new K.iy(a1,n),!1)
t.aU(0,"Height",new K.iz(u,c,d),!1)
t.aU(0,"Blur",new K.iA(a7,a4),!1)
t.aU(0,"Passes",new K.iB(b1,b0),!1)
V.mQ(p)},
iv:function iv(a,b,c){this.a=a
this.b=b
this.c=c},
iw:function iw(a,b){this.a=a
this.b=b},
ix:function ix(a,b){this.a=a
this.b=b},
iy:function iy(a,b){this.a=a
this.b=b},
iz:function iz(a,b,c){this.a=a
this.b=b
this.c=c},
iA:function iA(a,b){this.a=a
this.b=b},
iB:function iB(a,b){this.a=a
this.b=b}}
var w=[C,H,J,P,W,O,E,Z,D,X,V,U,M,A,F,T,K]
hunkHelpers.setFunctionNamesIfNecessary(w)
var $={}
H.iT.prototype={}
J.ab.prototype={
u:function(a,b){return a===b},
gL:function(a){return H.ce(a)},
i:function(a){return"Instance of '"+H.bG(a)+"'"}}
J.eS.prototype={
i:function(a){return String(a)},
gL:function(a){return a?519018:218159},
$iW:1}
J.db.prototype={
u:function(a,b){return null==b},
i:function(a){return"null"},
gL:function(a){return 0},
$iB:1}
J.dd.prototype={
gL:function(a){return 0},
i:function(a){return String(a)}}
J.fm.prototype={}
J.ct.prototype={}
J.bh.prototype={
i:function(a){var u=a[$.kE()]
if(u==null)return this.fq(a)
return"JavaScript function for "+H.i(J.ao(u))},
$S:function(){return{func:1,opt:[,,,,,,,,,,,,,,,,]}},
$iiQ:1}
J.aK.prototype={
h:function(a,b){H.y(b,H.t(a,0))
if(!!a.fixed$length)H.o(P.V("add"))
a.push(b)},
kH:function(a,b){var u
if(!!a.fixed$length)H.o(P.V("removeAt"))
u=a.length
if(b>=u)throw H.e(P.dv(b,null,null))
return a.splice(b,1)[0]},
H:function(a,b){var u
if(!!a.fixed$length)H.o(P.V("remove"))
for(u=0;u<a.length;++u)if(J.I(a[u],b)){a.splice(u,1)
return!0}return!1},
b4:function(a,b){var u,t
H.h(b,"$ik",[H.t(a,0)],"$ak")
if(!!a.fixed$length)H.o(P.V("addAll"))
for(u=b.length,t=0;t<b.length;b.length===u||(0,H.z)(b),++t)a.push(b[t])},
a1:function(a,b){var u,t
H.m(b,{func:1,ret:-1,args:[H.t(a,0)]})
u=a.length
for(t=0;t<u;++t){b.$1(a[t])
if(a.length!==u)throw H.e(P.bz(a))}},
F:function(a,b){var u,t
u=new Array(a.length)
u.fixed$length=Array
for(t=0;t<a.length;++t)this.p(u,t,H.i(a[t]))
return u.join(b)},
kh:function(a){return this.F(a,"")},
k9:function(a,b,c,d){var u,t,s
H.y(b,d)
H.m(c,{func:1,ret:d,args:[d,H.t(a,0)]})
u=a.length
for(t=b,s=0;s<u;++s){t=c.$2(t,a[s])
if(a.length!==u)throw H.e(P.bz(a))}return t},
an:function(a,b){if(b<0||b>=a.length)return H.c(a,b)
return a[b]},
fo:function(a,b,c){if(b<0||b>a.length)throw H.e(P.a5(b,0,a.length,"start",null))
if(c<b||c>a.length)throw H.e(P.a5(c,b,a.length,"end",null))
if(b===c)return H.b([],[H.t(a,0)])
return H.b(a.slice(b,c),[H.t(a,0)])},
gk8:function(a){if(a.length>0)return a[0]
throw H.e(H.jA())},
gaM:function(a){var u=a.length
if(u>0)return a[u-1]
throw H.e(H.jA())},
aA:function(a,b){var u
for(u=0;u<a.length;++u)if(J.I(a[u],b))return!0
return!1},
i:function(a){return P.iR(a,"[","]")},
gU:function(a){return new J.ag(a,a.length,0,[H.t(a,0)])},
gL:function(a){return H.ce(a)},
gn:function(a){return a.length},
sn:function(a,b){if(!!a.fixed$length)H.o(P.V("set length"))
if(b<0)throw H.e(P.a5(b,0,null,"newLength",null))
a.length=b},
j:function(a,b){if(b>=a.length||b<0)throw H.e(H.bQ(a,b))
return a[b]},
p:function(a,b,c){H.y(c,H.t(a,0))
if(!!a.immutable$list)H.o(P.V("indexed set"))
if(b>=a.length||b<0)throw H.e(H.bQ(a,b))
a[b]=c},
$ik:1,
$ia:1}
J.iS.prototype={}
J.ag.prototype={
gN:function(){return this.d},
B:function(){var u,t,s
u=this.a
t=u.length
if(this.b!==t)throw H.e(H.z(u))
s=this.c
if(s>=t){this.sdm(null)
return!1}this.sdm(u[s]);++this.c
return!0},
sdm:function(a){this.d=H.y(a,H.t(this,0))},
$iaJ:1}
J.dc.prototype={
kT:function(a){var u
if(a>=-2147483648&&a<=2147483647)return a|0
if(isFinite(a)){u=a<0?Math.ceil(a):Math.floor(a)
return u+0}throw H.e(P.V(""+a+".toInt()"))},
ba:function(a){var u,t
if(a>=0){if(a<=2147483647)return a|0}else if(a>=-2147483648){u=a|0
return a===u?u:u-1}t=Math.floor(a)
if(isFinite(t))return t
throw H.e(P.V(""+a+".floor()"))},
a2:function(a){if(a>0){if(a!==1/0)return Math.round(a)}else if(a>-1/0)return 0-Math.round(0-a)
throw H.e(P.V(""+a+".round()"))},
f4:function(a,b){var u,t
if(b>20)throw H.e(P.a5(b,0,20,"fractionDigits",null))
u=a.toFixed(b)
if(a===0)t=1/a<0
else t=!1
if(t)return"-"+u
return u},
bh:function(a,b){var u,t,s,r
if(b<2||b>36)throw H.e(P.a5(b,2,36,"radix",null))
u=a.toString(b)
if(C.c.Z(u,u.length-1)!==41)return u
t=/^([\da-z]+)(?:\.([\da-z]+))?\(e\+(\d+)\)$/.exec(u)
if(t==null)H.o(P.V("Unexpected toString result: "+u))
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
gL:function(a){var u,t,s,r,q
u=a|0
if(a===u)return 536870911&u
t=Math.abs(a)
s=Math.log(t)/0.6931471805599453|0
r=Math.pow(2,s)
q=t<1?t/r:r/t
return 536870911&((q*9007199254740992|0)+(q*3542243181176521|0))*599197+s*1259},
k:function(a,b){if(typeof b!=="number")throw H.e(H.an(b))
return a*b},
au:function(a,b){var u
if(typeof b!=="number")throw H.e(H.an(b))
u=a%b
if(u===0)return 0
if(u>0)return u
if(b<0)return u-b
else return u+b},
ft:function(a,b){if((a|0)===a)if(b>=1||b<-1)return a/b|0
return this.dL(a,b)},
a7:function(a,b){return(a|0)===a?a/b|0:this.dL(a,b)},
dL:function(a,b){var u=a/b
if(u>=-2147483648&&u<=2147483647)return u|0
if(u>0){if(u!==1/0)return Math.floor(u)}else if(u>-1/0)return Math.ceil(u)
throw H.e(P.V("Result of truncating division is "+H.i(u)+": "+H.i(a)+" ~/ "+b))},
aT:function(a,b){var u
if(a>0)u=this.dK(a,b)
else{u=b>31?31:b
u=a>>u>>>0}return u},
iX:function(a,b){if(b<0)throw H.e(H.an(b))
return this.dK(a,b)},
dK:function(a,b){return b>31?0:a>>>b},
$iq:1,
$iae:1}
J.da.prototype={$ij:1}
J.d9.prototype={}
J.bD.prototype={
Z:function(a,b){if(b<0)throw H.e(H.bQ(a,b))
if(b>=a.length)H.o(H.bQ(a,b))
return a.charCodeAt(b)},
K:function(a,b){if(b>=a.length)throw H.e(H.bQ(a,b))
return a.charCodeAt(b)},
C:function(a,b){if(typeof b!=="string")throw H.e(P.iL(b,null,null))
return a+b},
aX:function(a,b,c,d){var u,t
if(typeof b!=="number"||Math.floor(b)!==b)H.o(H.an(b))
c=P.bn(b,c,a.length,null,null,null)
u=a.substring(0,b)
t=a.substring(c)
return u+d+t},
ak:function(a,b,c){var u
if(typeof c!=="number"||Math.floor(c)!==c)H.o(H.an(c))
if(typeof c!=="number")return c.W()
if(c<0||c>a.length)throw H.e(P.a5(c,0,a.length,null,null))
u=c+b.length
if(u>a.length)return!1
return b===a.substring(c,u)},
aj:function(a,b){return this.ak(a,b,0)},
q:function(a,b,c){if(typeof b!=="number"||Math.floor(b)!==b)H.o(H.an(b))
if(c==null)c=a.length
if(typeof b!=="number")return b.W()
if(b<0)throw H.e(P.dv(b,null,null))
if(b>c)throw H.e(P.dv(b,null,null))
if(c>a.length)throw H.e(P.dv(c,null,null))
return a.substring(b,c)},
aF:function(a,b){return this.q(a,b,null)},
k:function(a,b){var u,t
if(0>=b)return""
if(b===1||a.length===0)return a
if(b!==b>>>0)throw H.e(C.L)
for(u=a,t="";!0;){if((b&1)===1)t=u+t
b=b>>>1
if(b===0)break
u+=u}return t},
kw:function(a,b,c){var u=b-a.length
if(u<=0)return a
return this.k(c,u)+a},
aq:function(a,b){return this.kw(a,b," ")},
kx:function(a,b,c){var u=b-a.length
if(u<=0)return a
return a+this.k(c,u)},
eH:function(a,b,c){var u
if(c<0||c>a.length)throw H.e(P.a5(c,0,a.length,null,null))
u=a.indexOf(b,c)
return u},
eG:function(a,b){return this.eH(a,b,0)},
i:function(a){return a},
gL:function(a){var u,t,s
for(u=a.length,t=0,s=0;s<u;++s){t=536870911&t+a.charCodeAt(s)
t=536870911&t+((524287&t)<<10)
t^=t>>6}t=536870911&t+((67108863&t)<<3)
t^=t>>11
return 536870911&t+((16383&t)<<15)},
gn:function(a){return a.length},
$ijJ:1,
$il:1}
H.Y.prototype={
gn:function(a){return this.a.length},
j:function(a,b){return C.c.Z(this.a,b)},
$acu:function(){return[P.j]},
$aR:function(){return[P.j]},
$ak:function(){return[P.j]},
$aa:function(){return[P.j]}}
H.eD.prototype={}
H.dh.prototype={
gN:function(){return this.d},
B:function(){var u,t,s,r
u=this.a
t=J.cJ(u)
s=t.gn(u)
if(this.b!==s)throw H.e(P.bz(u))
r=this.c
if(r>=s){this.sb0(null)
return!1}this.sb0(t.an(u,r));++this.c
return!0},
sb0:function(a){this.d=H.y(a,H.t(this,0))},
$iaJ:1}
H.f6.prototype={
gU:function(a){return new H.f7(J.cP(this.a),this.b,this.$ti)},
gn:function(a){return J.aY(this.a)},
an:function(a,b){return this.b.$1(J.iK(this.a,b))},
$ak:function(a,b){return[b]}}
H.f7.prototype={
B:function(){var u=this.b
if(u.B()){this.sb0(this.c.$1(u.gN()))
return!0}this.sb0(null)
return!1},
gN:function(){return this.a},
sb0:function(a){this.a=H.y(a,H.t(this,1))},
$aaJ:function(a,b){return[b]}}
H.hq.prototype={
gU:function(a){return new H.hr(J.cP(this.a),this.b,this.$ti)}}
H.hr.prototype={
B:function(){var u,t
for(u=this.a,t=this.b;u.B();)if(t.$1(u.gN()))return!0
return!1},
gN:function(){return this.a.gN()}}
H.bB.prototype={}
H.cu.prototype={
p:function(a,b,c){H.y(c,H.ar(this,"cu",0))
throw H.e(P.V("Cannot modify an unmodifiable list"))}}
H.dR.prototype={}
H.ev.prototype={
i:function(a){return P.iV(this)},
p:function(a,b,c){H.y(b,H.t(this,0))
H.y(c,H.t(this,1))
return H.l4()},
$iH:1}
H.ew.prototype={
gn:function(a){return this.a},
bv:function(a){if(typeof a!=="string")return!1
if("__proto__"===a)return!1
return this.b.hasOwnProperty(a)},
j:function(a,b){if(!this.bv(b))return
return this.dn(b)},
dn:function(a){return this.b[H.N(a)]},
a1:function(a,b){var u,t,s,r,q
u=H.t(this,1)
H.m(b,{func:1,ret:-1,args:[H.t(this,0),u]})
t=this.c
for(s=t.length,r=0;r<s;++r){q=t[r]
b.$2(q,H.y(this.dn(q),u))}}}
H.fo.prototype={}
H.fS.prototype={
ap:function(a){var u,t,s
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
H.fk.prototype={
i:function(a){var u=this.b
if(u==null)return"NoSuchMethodError: "+H.i(this.a)
return"NoSuchMethodError: method not found: '"+u+"' on null"}}
H.eU.prototype={
i:function(a){var u,t
u=this.b
if(u==null)return"NoSuchMethodError: "+H.i(this.a)
t=this.c
if(t==null)return"NoSuchMethodError: method not found: '"+u+"' ("+H.i(this.a)+")"
return"NoSuchMethodError: method not found: '"+u+"' on '"+t+"' ("+H.i(this.a)+")"}}
H.h3.prototype={
i:function(a){var u=this.a
return u.length===0?"Error":"Error: "+u}}
H.iH.prototype={
$1:function(a){if(!!J.O(a).$ibb)if(a.$thrownJsError==null)a.$thrownJsError=this.a
return a},
$S:16}
H.e5.prototype={
i:function(a){var u,t
u=this.b
if(u!=null)return u
u=this.a
t=u!==null&&typeof u==="object"?u.stack:null
u=t==null?"":t
this.b=u
return u},
$iam:1}
H.bY.prototype={
i:function(a){return"Closure '"+H.bG(this).trim()+"'"},
$iiQ:1,
gl2:function(){return this},
$C:"$1",
$R:1,
$D:null}
H.fJ.prototype={}
H.fE.prototype={
i:function(a){var u=this.$static_name
if(u==null)return"Closure of unknown static method"
return"Closure '"+H.bU(u)+"'"}}
H.bV.prototype={
u:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof H.bV))return!1
return this.a===b.a&&this.b===b.b&&this.c===b.c},
gL:function(a){var u,t
u=this.c
if(u==null)t=H.ce(this.a)
else t=typeof u!=="object"?J.cO(u):H.ce(u)
return(t^H.ce(this.b))>>>0},
i:function(a){var u=this.c
if(u==null)u=this.a
return"Closure '"+H.i(this.d)+"' of "+("Instance of '"+H.bG(u)+"'")}}
H.fU.prototype={
i:function(a){return this.a}}
H.eo.prototype={
i:function(a){return this.a}}
H.ft.prototype={
i:function(a){return"RuntimeError: "+H.i(this.a)}}
H.aB.prototype={
gn:function(a){return this.a},
gcJ:function(){return new H.eY(this,[H.t(this,0)])},
bv:function(a){var u,t
if(typeof a==="string"){u=this.b
if(u==null)return!1
return this.dj(u,a)}else if(typeof a==="number"&&(a&0x3ffffff)===a){t=this.c
if(t==null)return!1
return this.dj(t,a)}else return this.ke(a)},
ke:function(a){var u=this.d
if(u==null)return!1
return this.cI(this.c9(u,this.cH(a)),a)>=0},
j:function(a,b){var u,t,s,r
if(typeof b==="string"){u=this.b
if(u==null)return
t=this.bm(u,b)
s=t==null?null:t.b
return s}else if(typeof b==="number"&&(b&0x3ffffff)===b){r=this.c
if(r==null)return
t=this.bm(r,b)
s=t==null?null:t.b
return s}else return this.kf(b)},
kf:function(a){var u,t,s
u=this.d
if(u==null)return
t=this.c9(u,this.cH(a))
s=this.cI(t,a)
if(s<0)return
return t[s].b},
p:function(a,b,c){var u,t
H.y(b,H.t(this,0))
H.y(c,H.t(this,1))
if(typeof b==="string"){u=this.b
if(u==null){u=this.cc()
this.b=u}this.da(u,b,c)}else if(typeof b==="number"&&(b&0x3ffffff)===b){t=this.c
if(t==null){t=this.cc()
this.c=t}this.da(t,b,c)}else this.kg(b,c)},
kg:function(a,b){var u,t,s,r
H.y(a,H.t(this,0))
H.y(b,H.t(this,1))
u=this.d
if(u==null){u=this.cc()
this.d=u}t=this.cH(a)
s=this.c9(u,t)
if(s==null)this.cl(u,t,[this.cd(a,b)])
else{r=this.cI(s,a)
if(r>=0)s[r].b=b
else s.push(this.cd(a,b))}},
a1:function(a,b){var u,t
H.m(b,{func:1,ret:-1,args:[H.t(this,0),H.t(this,1)]})
u=this.e
t=this.r
for(;u!=null;){b.$2(u.a,u.b)
if(t!==this.r)throw H.e(P.bz(this))
u=u.c}},
da:function(a,b,c){var u
H.y(b,H.t(this,0))
H.y(c,H.t(this,1))
u=this.bm(a,b)
if(u==null)this.cl(a,b,this.cd(b,c))
else u.b=c},
cd:function(a,b){var u,t
u=new H.eX(H.y(a,H.t(this,0)),H.y(b,H.t(this,1)))
if(this.e==null){this.f=u
this.e=u}else{t=this.f
u.d=t
t.c=u
this.f=u}++this.a
this.r=this.r+1&67108863
return u},
cH:function(a){return J.cO(a)&0x3ffffff},
cI:function(a,b){var u,t
if(a==null)return-1
u=a.length
for(t=0;t<u;++t)if(J.I(a[t].a,b))return t
return-1},
i:function(a){return P.iV(this)},
bm:function(a,b){return a[b]},
c9:function(a,b){return a[b]},
cl:function(a,b,c){a[b]=c},
h4:function(a,b){delete a[b]},
dj:function(a,b){return this.bm(a,b)!=null},
cc:function(){var u=Object.create(null)
this.cl(u,"<non-identifier-key>",u)
this.h4(u,"<non-identifier-key>")
return u},
$ijC:1}
H.eX.prototype={}
H.eY.prototype={
gn:function(a){return this.a.a},
gU:function(a){var u,t
u=this.a
t=new H.eZ(u,u.r,this.$ti)
t.c=u.e
return t}}
H.eZ.prototype={
gN:function(){return this.d},
B:function(){var u=this.a
if(this.b!==u.r)throw H.e(P.bz(u))
else{u=this.c
if(u==null){this.sd9(null)
return!1}else{this.sd9(u.a)
this.c=this.c.c
return!0}}},
sd9:function(a){this.d=H.y(a,H.t(this,0))},
$iaJ:1}
H.ir.prototype={
$1:function(a){return this.a(a)},
$S:16}
H.is.prototype={
$2:function(a,b){return this.a(a,b)},
$S:34}
H.it.prototype={
$1:function(a){return this.a(H.N(a))},
$S:35}
H.eT.prototype={
i:function(a){return"RegExp/"+this.a+"/"},
$ijJ:1,
$ilF:1}
H.bE.prototype={$ibE:1,$ilP:1}
H.dm.prototype={
gn:function(a){return a.length},
$ib_:1,
$ab_:function(){}}
H.dn.prototype={
j:function(a,b){H.b6(b,a,a.length)
return a[b]},
p:function(a,b,c){H.mz(c)
H.b6(b,a,a.length)
a[b]=c},
$abB:function(){return[P.q]},
$aR:function(){return[P.q]},
$ik:1,
$ak:function(){return[P.q]},
$ia:1,
$aa:function(){return[P.q]}}
H.dp.prototype={
p:function(a,b,c){H.a6(c)
H.b6(b,a,a.length)
a[b]=c},
$abB:function(){return[P.j]},
$aR:function(){return[P.j]},
$ik:1,
$ak:function(){return[P.j]},
$ia:1,
$aa:function(){return[P.j]}}
H.ff.prototype={
j:function(a,b){H.b6(b,a,a.length)
return a[b]}}
H.fg.prototype={
j:function(a,b){H.b6(b,a,a.length)
return a[b]}}
H.fh.prototype={
j:function(a,b){H.b6(b,a,a.length)
return a[b]}}
H.fi.prototype={
j:function(a,b){H.b6(b,a,a.length)
return a[b]}}
H.dq.prototype={
gn:function(a){return a.length},
j:function(a,b){H.b6(b,a,a.length)
return a[b]},
$inc:1}
H.cc.prototype={
gn:function(a){return a.length},
j:function(a,b){H.b6(b,a,a.length)
return a[b]},
$icc:1,
$iJ:1}
H.cz.prototype={}
H.cA.prototype={}
H.cB.prototype={}
H.cC.prototype={}
P.ht.prototype={
$1:function(a){var u,t
u=this.a
t=u.a
u.a=null
t.$0()},
$S:17}
P.hs.prototype={
$1:function(a){var u,t
this.a.a=H.m(a,{func:1,ret:-1})
u=this.b
t=this.c
u.firstChild?u.removeChild(t):u.appendChild(t)},
$S:39}
P.hu.prototype={
$0:function(){this.a.$0()},
$S:1}
P.hv.prototype={
$0:function(){this.a.$0()},
$S:1}
P.e6.prototype={
fN:function(a,b){if(self.setTimeout!=null)this.b=self.setTimeout(H.bP(new P.i_(this,b),0),a)
else throw H.e(P.V("`setTimeout()` not found."))},
fO:function(a,b){if(self.setTimeout!=null)this.b=self.setInterval(H.bP(new P.hZ(this,a,Date.now(),b),0),a)
else throw H.e(P.V("Periodic timer."))},
$iaR:1}
P.i_.prototype={
$0:function(){var u=this.a
u.b=null
u.c=1
this.b.$0()},
$S:3}
P.hZ.prototype={
$0:function(){var u,t,s,r
u=this.a
t=u.c+1
s=this.b
if(s>0){r=Date.now()-this.c
if(r>(t+1)*s)t=C.e.ft(r,s)}u.c=t
this.d.$1(u)},
$S:1}
P.aU.prototype={
kl:function(a){if(this.c!==6)return!0
return this.b.b.cW(H.m(this.d,{func:1,ret:P.W,args:[P.L]}),a.a,P.W,P.L)},
kd:function(a){var u,t,s,r
u=this.e
t=P.L
s={futureOr:1,type:H.t(this,1)}
r=this.b.b
if(H.eb(u,{func:1,args:[P.L,P.am]}))return H.jd(r.kO(u,a.a,a.b,null,t,P.am),s)
else return H.jd(r.cW(H.m(u,{func:1,args:[P.L]}),a.a,null,t),s)}}
P.aw.prototype={
f3:function(a,b,c){var u,t,s,r
u=H.t(this,0)
H.m(a,{func:1,ret:{futureOr:1,type:c},args:[u]})
t=$.Q
if(t!==C.k){t.toString
H.m(a,{func:1,ret:{futureOr:1,type:c},args:[u]})
if(b!=null)b=P.mm(b,t)}H.m(a,{func:1,ret:{futureOr:1,type:c},args:[u]})
s=new P.aw(0,$.Q,[c])
r=b==null?1:3
this.dc(new P.aU(s,r,a,b,[u,c]))
return s},
kS:function(a,b){return this.f3(a,null,b)},
dc:function(a){var u,t
u=this.a
if(u<=1){a.a=H.f(this.c,"$iaU")
this.c=a}else{if(u===2){t=H.f(this.c,"$iaw")
u=t.a
if(u<4){t.dc(a)
return}this.a=u
this.c=t.c}u=this.b
u.toString
P.ij(null,null,u,H.m(new P.hC(this,a),{func:1,ret:-1}))}},
dF:function(a){var u,t,s,r,q,p
u={}
u.a=a
if(a==null)return
t=this.a
if(t<=1){s=H.f(this.c,"$iaU")
this.c=a
if(s!=null){for(r=a;q=r.a,q!=null;r=q);r.a=s}}else{if(t===2){p=H.f(this.c,"$iaw")
t=p.a
if(t<4){p.dF(a)
return}this.a=t
this.c=p.c}u.a=this.bp(a)
t=this.b
t.toString
P.ij(null,null,t,H.m(new P.hG(u,this),{func:1,ret:-1}))}},
cg:function(){var u=H.f(this.c,"$iaU")
this.c=null
return this.bp(u)},
bp:function(a){var u,t,s
for(u=a,t=null;u!=null;t=u,u=s){s=u.a
u.a=t}return t},
df:function(a){var u,t,s
u=H.t(this,0)
H.jd(a,{futureOr:1,type:u})
t=this.$ti
if(H.cI(a,"$ic2",t,"$ac2"))if(H.cI(a,"$iaw",t,null))P.k3(a,this)
else P.m0(a,this)
else{s=this.cg()
H.y(a,u)
this.a=4
this.c=a
P.cx(this,s)}},
dg:function(a,b){var u
H.f(b,"$iam")
u=this.cg()
this.a=8
this.c=new P.ah(a,b)
P.cx(this,u)},
$ic2:1}
P.hC.prototype={
$0:function(){P.cx(this.a,this.b)},
$S:1}
P.hG.prototype={
$0:function(){P.cx(this.b,this.a.a)},
$S:1}
P.hD.prototype={
$1:function(a){var u=this.a
u.a=0
u.df(a)},
$S:17}
P.hE.prototype={
$2:function(a,b){H.f(b,"$iam")
this.a.dg(a,b)},
$1:function(a){return this.$2(a,null)},
$S:36}
P.hF.prototype={
$0:function(){this.a.dg(this.b,this.c)},
$S:1}
P.hJ.prototype={
$0:function(){var u,t,s,r,q,p,o
u=null
try{r=this.c
u=r.b.b.f0(H.m(r.d,{func:1}),null)}catch(q){t=H.ay(q)
s=H.bS(q)
if(this.d){r=H.f(this.a.a.c,"$iah").a
p=t
p=r==null?p==null:r===p
r=p}else r=!1
p=this.b
if(r)p.b=H.f(this.a.a.c,"$iah")
else p.b=new P.ah(t,s)
p.a=!0
return}if(!!J.O(u).$ic2){if(u instanceof P.aw&&u.a>=4){if(u.a===8){r=this.b
r.b=H.f(u.c,"$iah")
r.a=!0}return}o=this.a.a
r=this.b
r.b=u.kS(new P.hK(o),null)
r.a=!1}},
$S:3}
P.hK.prototype={
$1:function(a){return this.a},
$S:49}
P.hI.prototype={
$0:function(){var u,t,s,r,q,p,o
try{s=this.b
r=H.t(s,0)
q=H.y(this.c,r)
p=H.t(s,1)
this.a.b=s.b.b.cW(H.m(s.d,{func:1,ret:{futureOr:1,type:p},args:[r]}),q,{futureOr:1,type:p},r)}catch(o){u=H.ay(o)
t=H.bS(o)
s=this.a
s.b=new P.ah(u,t)
s.a=!0}},
$S:3}
P.hH.prototype={
$0:function(){var u,t,s,r,q,p,o,n
try{u=H.f(this.a.a.c,"$iah")
r=this.c
if(r.kl(u)&&r.e!=null){q=this.b
q.b=r.kd(u)
q.a=!1}}catch(p){t=H.ay(p)
s=H.bS(p)
r=H.f(this.a.a.c,"$iah")
q=r.a
o=t
n=this.b
if(q==null?o==null:q===o)n.b=r
else n.b=new P.ah(t,s)
n.a=!0}},
$S:3}
P.dX.prototype={}
P.fF.prototype={
gn:function(a){var u,t,s,r
u={}
t=new P.aw(0,$.Q,[P.j])
u.a=0
s=H.t(this,0)
r=H.m(new P.fH(u,this),{func:1,ret:-1,args:[s]})
H.m(new P.fI(u,t),{func:1,ret:-1})
W.a4(this.a,this.b,r,!1,s)
return t}}
P.fH.prototype={
$1:function(a){H.y(a,H.t(this.b,0));++this.a.a},
$S:function(){return{func:1,ret:P.B,args:[H.t(this.b,0)]}}}
P.fI.prototype={
$0:function(){this.b.df(this.a.a)},
$S:1}
P.cj.prototype={}
P.fG.prototype={}
P.aR.prototype={}
P.ah.prototype={
i:function(a){return H.i(this.a)},
$ibb:1}
P.i9.prototype={$inq:1}
P.ii.prototype={
$0:function(){var u,t,s
u=this.a
t=u.a
if(t==null){s=new P.dr()
u.a=s
u=s}else u=t
t=this.b
if(t==null)throw H.e(u)
s=H.e(u)
s.stack=t.i(0)
throw s},
$S:1}
P.hQ.prototype={
kP:function(a){var u,t,s
H.m(a,{func:1,ret:-1})
try{if(C.k===$.Q){a.$0()
return}P.kf(null,null,this,a,-1)}catch(s){u=H.ay(s)
t=H.bS(s)
P.ih(null,null,this,u,H.f(t,"$iam"))}},
kQ:function(a,b,c){var u,t,s
H.m(a,{func:1,ret:-1,args:[c]})
H.y(b,c)
try{if(C.k===$.Q){a.$1(b)
return}P.kg(null,null,this,a,b,-1,c)}catch(s){u=H.ay(s)
t=H.bS(s)
P.ih(null,null,this,u,H.f(t,"$iam"))}},
jL:function(a,b){return new P.hS(this,H.m(a,{func:1,ret:b}),b)},
cq:function(a){return new P.hR(this,H.m(a,{func:1,ret:-1}))},
dW:function(a,b){return new P.hT(this,H.m(a,{func:1,ret:-1,args:[b]}),b)},
f0:function(a,b){H.m(a,{func:1,ret:b})
if($.Q===C.k)return a.$0()
return P.kf(null,null,this,a,b)},
cW:function(a,b,c,d){H.m(a,{func:1,ret:c,args:[d]})
H.y(b,d)
if($.Q===C.k)return a.$1(b)
return P.kg(null,null,this,a,b,c,d)},
kO:function(a,b,c,d,e,f){H.m(a,{func:1,ret:d,args:[e,f]})
H.y(b,e)
H.y(c,f)
if($.Q===C.k)return a.$2(b,c)
return P.mn(null,null,this,a,b,c,d,e,f)}}
P.hS.prototype={
$0:function(){return this.a.f0(this.b,this.c)},
$S:function(){return{func:1,ret:this.c}}}
P.hR.prototype={
$0:function(){return this.a.kP(this.b)},
$S:3}
P.hT.prototype={
$1:function(a){var u=this.c
return this.a.kQ(this.b,H.y(a,u),u)},
$S:function(){return{func:1,ret:-1,args:[this.c]}}}
P.hN.prototype={
gU:function(a){return P.k5(this,this.r,H.t(this,0))},
gn:function(a){return this.a},
h:function(a,b){var u
H.y(b,H.t(this,0))
if(typeof b==="number"&&(b&1073741823)===b){u=this.c
if(u==null){u=P.k6()
this.c=u}return this.h0(u,b)}else return this.fQ(b)},
fQ:function(a){var u,t,s
H.y(a,H.t(this,0))
u=this.d
if(u==null){u=P.k6()
this.d=u}t=this.dh(a)
s=u[t]
if(s==null)u[t]=[this.c5(a)]
else{if(this.dq(s,a)>=0)return!1
s.push(this.c5(a))}return!0},
H:function(a,b){if(typeof b==="number"&&(b&1073741823)===b)return this.iE(this.c,b)
else return this.iD(b)},
iD:function(a){var u,t,s
u=this.d
if(u==null)return!1
t=this.hh(u,a)
s=this.dq(t,a)
if(s<0)return!1
this.dM(t.splice(s,1)[0])
return!0},
h0:function(a,b){H.y(b,H.t(this,0))
if(H.f(a[b],"$icy")!=null)return!1
a[b]=this.c5(b)
return!0},
iE:function(a,b){var u
if(a==null)return!1
u=H.f(a[b],"$icy")
if(u==null)return!1
this.dM(u)
delete a[b]
return!0},
dv:function(){this.r=1073741823&this.r+1},
c5:function(a){var u,t
u=new P.cy(H.y(a,H.t(this,0)))
if(this.e==null){this.f=u
this.e=u}else{t=this.f
u.c=t
t.b=u
this.f=u}++this.a
this.dv()
return u},
dM:function(a){var u,t
u=a.c
t=a.b
if(u==null)this.e=t
else u.b=t
if(t==null)this.f=u
else t.c=u;--this.a
this.dv()},
dh:function(a){return J.cO(a)&1073741823},
hh:function(a,b){return a[this.dh(b)]},
dq:function(a,b){var u,t
if(a==null)return-1
u=a.length
for(t=0;t<u;++t)if(a[t].a==b)return t
return-1}}
P.cy.prototype={}
P.hO.prototype={
gN:function(){return this.d},
B:function(){var u=this.a
if(this.b!==u.r)throw H.e(P.bz(u))
else{u=this.c
if(u==null){this.sde(null)
return!1}else{this.sde(H.y(u.a,H.t(this,0)))
this.c=this.c.b
return!0}}},
sde:function(a){this.d=H.y(a,H.t(this,0))},
$iaJ:1}
P.f_.prototype={
$2:function(a,b){this.a.p(0,H.y(a,this.b),H.y(b,this.c))},
$S:6}
P.f0.prototype={$ik:1,$ia:1}
P.R.prototype={
gU:function(a){return new H.dh(a,this.gn(a),0,[H.ec(this,a,"R",0)])},
an:function(a,b){return this.j(a,b)},
kV:function(a,b){var u,t
u=H.b([],[H.ec(this,a,"R",0)])
C.a.sn(u,this.gn(a))
for(t=0;t<this.gn(a);++t)C.a.p(u,t,this.j(a,t))
return u},
kU:function(a){return this.kV(a,!0)},
k6:function(a,b,c,d){var u
H.y(d,H.ec(this,a,"R",0))
P.bn(b,c,this.gn(a),null,null,null)
for(u=b;u<c;++u)this.p(a,u,d)},
i:function(a){return P.iR(a,"[","]")}}
P.f2.prototype={}
P.f3.prototype={
$2:function(a,b){var u,t
u=this.a
if(!u.a)this.b.a+=", "
u.a=!1
u=this.b
t=u.a+=H.i(a)
u.a=t+": "
u.a+=H.i(b)},
$S:6}
P.f4.prototype={
a1:function(a,b){var u,t
H.m(b,{func:1,ret:-1,args:[H.t(this,0),H.t(this,1)]})
for(u=this.gcJ(),u=u.gU(u);u.B();){t=u.gN()
b.$2(t,this.j(0,t))}},
gn:function(a){var u=this.gcJ()
return u.gn(u)},
i:function(a){return P.iV(this)},
$iH:1}
P.i0.prototype={
p:function(a,b,c){H.y(b,H.t(this,0))
H.y(c,H.t(this,1))
throw H.e(P.V("Cannot modify unmodifiable map"))}}
P.f5.prototype={
j:function(a,b){return this.a.j(0,b)},
p:function(a,b,c){this.a.p(0,H.y(b,H.t(this,0)),H.y(c,H.t(this,1)))},
a1:function(a,b){this.a.a1(0,H.m(b,{func:1,ret:-1,args:[H.t(this,0),H.t(this,1)]}))},
gn:function(a){var u=this.a
return u.gn(u)},
i:function(a){return J.ao(this.a)},
$iH:1}
P.dS.prototype={}
P.hU.prototype={
i:function(a){return P.iR(this,"{","}")},
an:function(a,b){var u,t,s
if(b<0)H.o(P.a5(b,0,null,"index",null))
for(u=P.k5(this,this.r,H.t(this,0)),t=0;u.B();){s=u.d
if(b===t)return s;++t}throw H.e(P.c5(b,this,"index",null,t))},
$ik:1,
$ijQ:1}
P.e2.prototype={}
P.ea.prototype={}
P.ek.prototype={
kn:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
c=P.bn(b,c,a.length,null,null,null)
u=$.kR()
for(t=b,s=t,r=null,q=-1,p=-1,o=0;t<c;t=n){n=t+1
m=C.c.K(a,t)
if(m===37){l=n+2
if(l<=c){k=H.iq(C.c.K(a,n))
j=H.iq(C.c.K(a,n+1))
i=k*16+j-(j&256)
if(i===37)i=-1
n=l}else i=-1}else i=m
if(0<=i&&i<=127){if(i<0||i>=u.length)return H.c(u,i)
h=u[i]
if(h>=0){i=C.c.Z("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",h)
if(i===m)continue
m=i}else{if(h===-1){if(q<0){g=r==null?null:r.a.length
if(g==null)g=0
q=g+(t-s)
p=t}++o
if(m===61)continue}m=i}if(h!==-2){if(r==null)r=new P.aj("")
g=r.a+=C.c.q(a,s,t)
r.a=g+H.dt(m)
s=n
continue}}throw H.e(P.X("Invalid base64 data",a,t))}if(r!=null){g=r.a+=C.c.q(a,s,c)
f=g.length
if(q>=0)P.jp(a,p,c,q,o,f)
else{e=C.e.au(f-1,4)+1
if(e===1)throw H.e(P.X("Invalid base64 encoding length ",a,c))
for(;e<4;){g+="="
r.a=g;++e}}g=r.a
return C.c.aX(a,b,c,g.charCodeAt(0)==0?g:g)}d=c-b
if(q>=0)P.jp(a,p,c,q,o,d)
else{e=C.e.au(d,4)
if(e===1)throw H.e(P.X("Invalid base64 encoding length ",a,c))
if(e>1)a=C.c.aX(a,c,c,e===2?"==":"=")}return a},
$abx:function(){return[[P.a,P.j],P.l]}}
P.el.prototype={
$abA:function(){return[[P.a,P.j],P.l]}}
P.bx.prototype={}
P.bA.prototype={}
P.eE.prototype={
$abx:function(){return[P.l,[P.a,P.j]]}}
P.ha.prototype={
gk5:function(){return C.M}}
P.hc.prototype={
b5:function(a,b,c){var u,t,s
c=P.bn(b,c,a.length,null,null,null)
u=c-b
if(u===0)return new Uint8Array(0)
t=new Uint8Array(u*3)
s=new P.i8(t)
if(s.hf(a,b,c)!==c)s.dO(J.kX(a,c-1),0)
return new Uint8Array(t.subarray(0,H.mh(0,s.b,t.length)))},
cw:function(a){return this.b5(a,0,null)},
$abA:function(){return[P.l,[P.a,P.j]]}}
P.i8.prototype={
dO:function(a,b){var u,t,s,r,q
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
hf:function(a,b,c){var u,t,s,r,q,p,o
if(b!==c&&(C.c.Z(a,c-1)&64512)===55296)--c
for(u=this.c,t=u.length,s=b;s<c;++s){r=C.c.K(a,s)
if(r<=127){q=this.b
if(q>=t)break
this.b=q+1
u[q]=r}else if((r&64512)===55296){if(this.b+3>=t)break
p=s+1
if(this.dO(r,C.c.K(a,p)))s=p}else if(r<=2047){q=this.b
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
P.hb.prototype={
b5:function(a,b,c){var u,t,s,r
H.h(a,"$ia",[P.j],"$aa")
u=P.lS(!1,a,b,c)
if(u!=null)return u
c=P.bn(b,c,J.aY(a),null,null,null)
t=new P.aj("")
s=new P.i6(!1,t)
s.b5(a,b,c)
if(s.e>0){H.o(P.X("Unfinished UTF-8 octet sequence",a,c))
t.a+=H.dt(65533)
s.d=0
s.e=0
s.f=0}r=t.a
return r.charCodeAt(0)==0?r:r},
cw:function(a){return this.b5(a,0,null)},
$abA:function(){return[[P.a,P.j],P.l]}}
P.i6.prototype={
b5:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k,j,i
H.h(a,"$ia",[P.j],"$aa")
u=this.d
t=this.e
s=this.f
this.d=0
this.e=0
this.f=0
r=new P.i7(this,b,c,a)
$label0$0:for(q=J.cJ(a),p=this.b,o=b;!0;o=j){$label1$1:if(t>0){do{if(o===c)break $label0$0
n=q.j(a,o)
if(typeof n!=="number")return n.bY()
if((n&192)!==128){m=P.X("Bad UTF-8 encoding 0x"+C.e.bh(n,16),a,o)
throw H.e(m)}else{u=(u<<6|n&63)>>>0;--t;++o}}while(t>0)
m=s-1
if(m<0||m>=4)return H.c(C.C,m)
if(u<=C.C[m]){m=P.X("Overlong encoding of 0x"+C.e.bh(u,16),a,o-s-1)
throw H.e(m)}if(u>1114111){m=P.X("Character outside valid Unicode range: 0x"+C.e.bh(u,16),a,o-s-1)
throw H.e(m)}if(!this.c||u!==65279)p.a+=H.dt(u)
this.c=!1}for(m=o<c;m;){l=P.mo(a,o,c)
if(l>0){this.c=!1
k=o+l
r.$2(o,k)
if(k===c)break}else k=o
j=k+1
n=q.j(a,k)
if(typeof n!=="number")return n.W()
if(n<0){i=P.X("Negative UTF-8 code unit: -0x"+C.e.bh(-n,16),a,j-1)
throw H.e(i)}else{if((n&224)===192){u=n&31
t=1
s=1
continue $label0$0}if((n&240)===224){u=n&15
t=2
s=2
continue $label0$0}if((n&248)===240&&n<245){u=n&7
t=3
s=3
continue $label0$0}i=P.X("Bad UTF-8 encoding 0x"+C.e.bh(n,16),a,j-1)
throw H.e(i)}}break $label0$0}if(t>0){this.d=u
this.e=t
this.f=s}}}
P.i7.prototype={
$2:function(a,b){this.a.b.a+=P.dC(this.d,a,b)},
$S:40}
P.W.prototype={}
P.ai.prototype={
u:function(a,b){if(b==null)return!1
return b instanceof P.ai&&this.a===b.a&&!0},
gL:function(a){var u=this.a
return(u^C.e.aT(u,30))&1073741823},
i:function(a){var u,t,s,r,q,p,o,n
u=P.l5(H.lA(this))
t=P.cZ(H.ly(this))
s=P.cZ(H.lu(this))
r=P.cZ(H.lv(this))
q=P.cZ(H.lx(this))
p=P.cZ(H.lz(this))
o=P.l6(H.lw(this))
n=u+"-"+t+"-"+s+" "+r+":"+q+":"+p+"."+o
return n}}
P.q.prototype={}
P.ba.prototype={
u:function(a,b){if(b==null)return!1
return b instanceof P.ba&&this.a===b.a},
gL:function(a){return C.e.gL(this.a)},
i:function(a){var u,t,s,r,q
u=new P.eC()
t=this.a
if(t<0)return"-"+new P.ba(0-t).i(0)
s=u.$1(C.e.a7(t,6e7)%60)
r=u.$1(C.e.a7(t,1e6)%60)
q=new P.eB().$1(t%1e6)
return""+C.e.a7(t,36e8)+":"+H.i(s)+":"+H.i(r)+"."+H.i(q)}}
P.eB.prototype={
$1:function(a){if(a>=1e5)return""+a
if(a>=1e4)return"0"+a
if(a>=1000)return"00"+a
if(a>=100)return"000"+a
if(a>=10)return"0000"+a
return"00000"+a},
$S:18}
P.eC.prototype={
$1:function(a){if(a>=10)return""+a
return"0"+a},
$S:18}
P.bb.prototype={}
P.dr.prototype={
i:function(a){return"Throw of null."}}
P.aH.prototype={
gc7:function(){return"Invalid argument"+(!this.a?"(s)":"")},
gc6:function(){return""},
i:function(a){var u,t,s,r,q,p
u=this.c
t=u!=null?" ("+u+")":""
u=this.d
s=u==null?"":": "+u
r=this.gc7()+t+s
if(!this.a)return r
q=this.gc6()
p=P.eG(this.b)
return r+q+": "+p}}
P.bH.prototype={
gc7:function(){return"RangeError"},
gc6:function(){var u,t,s
u=this.e
if(u==null){u=this.f
t=u!=null?": Not less than or equal to "+H.i(u):""}else{s=this.f
if(s==null)t=": Not greater than or equal to "+H.i(u)
else if(s>u)t=": Not in range "+H.i(u)+".."+H.i(s)+", inclusive"
else t=s<u?": Valid value range is empty":": Only valid value is "+H.i(u)}return t}}
P.eQ.prototype={
gc7:function(){return"RangeError"},
gc6:function(){var u,t
u=H.a6(this.b)
if(typeof u!=="number")return u.W()
if(u<0)return": index must not be negative"
t=this.f
if(t===0)return": no indices are valid"
return": index should be less than "+H.i(t)},
gn:function(a){return this.f}}
P.h4.prototype={
i:function(a){return"Unsupported operation: "+this.a}}
P.h1.prototype={
i:function(a){var u=this.a
return u!=null?"UnimplementedError: "+u:"UnimplementedError"}}
P.fD.prototype={
i:function(a){return"Bad state: "+this.a}}
P.eu.prototype={
i:function(a){var u=this.a
if(u==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+P.eG(u)+"."}}
P.fl.prototype={
i:function(a){return"Out of Memory"},
$ibb:1}
P.dB.prototype={
i:function(a){return"Stack Overflow"},
$ibb:1}
P.ey.prototype={
i:function(a){var u=this.a
return u==null?"Reading static variable during its initialization":"Reading static variable '"+u+"' during its initialization"}}
P.e_.prototype={
i:function(a){return"Exception: "+this.a}}
P.eN.prototype={
i:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f
u=this.a
t=""!==u?"FormatException: "+u:"FormatException"
s=this.c
r=this.b
if(typeof r==="string"){if(s!=null)u=s<0||s>r.length
else u=!1
if(u)s=null
if(s==null){q=r.length>78?C.c.q(r,0,75)+"...":r
return t+"\n"+q}for(p=1,o=0,n=!1,m=0;m<s;++m){l=C.c.K(r,m)
if(l===10){if(o!==m||!n)++p
o=m+1
n=!1}else if(l===13){++p
o=m+1
n=!0}}t=p>1?t+(" (at line "+p+", character "+(s-o+1)+")\n"):t+(" (at character "+(s+1)+")\n")
k=r.length
for(m=s;m<k;++m){l=C.c.Z(r,m)
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
g=""}f=C.c.q(r,i,j)
return t+h+f+g+"\n"+C.c.k(" ",s-i+h.length)+"^\n"}else return s!=null?t+(" (at offset "+H.i(s)+")"):t}}
P.j.prototype={}
P.k.prototype={
gn:function(a){var u,t
u=this.gU(this)
for(t=0;u.B();)++t
return t},
an:function(a,b){var u,t,s
if(b<0)H.o(P.a5(b,0,null,"index",null))
for(u=this.gU(this),t=0;u.B();){s=u.gN()
if(b===t)return s;++t}throw H.e(P.c5(b,this,"index",null,t))},
i:function(a){return P.le(this,"(",")")}}
P.aJ.prototype={}
P.a.prototype={$ik:1}
P.H.prototype={}
P.B.prototype={
gL:function(a){return P.L.prototype.gL.call(this,this)},
i:function(a){return"null"}}
P.ae.prototype={}
P.L.prototype={constructor:P.L,$iL:1,
u:function(a,b){return this===b},
gL:function(a){return H.ce(this)},
i:function(a){return"Instance of '"+H.bG(this)+"'"},
toString:function(){return this.i(this)}}
P.am.prototype={}
P.l.prototype={$ijJ:1}
P.aj.prototype={
gn:function(a){return this.a.length},
i:function(a){var u=this.a
return u.charCodeAt(0)==0?u:u},
$in0:1}
P.h9.prototype={
$2:function(a,b){var u,t,s,r
u=P.l
H.h(a,"$iH",[u,u],"$aH")
H.N(b)
t=J.je(b).eG(b,"=")
if(t===-1){if(b!=="")a.p(0,P.j6(b,0,b.length,this.a,!0),"")}else if(t!==0){s=C.c.q(b,0,t)
r=C.c.aF(b,t+1)
u=this.a
a.p(0,P.j6(s,0,s.length,u,!0),P.j6(r,0,r.length,u,!0))}return a},
$S:43}
P.h6.prototype={
$2:function(a,b){throw H.e(P.X("Illegal IPv4 address, "+a,this.a,b))},
$S:45}
P.h7.prototype={
$2:function(a,b){throw H.e(P.X("Illegal IPv6 address, "+a,this.a,b))},
$1:function(a){return this.$2(a,null)},
$S:46}
P.h8.prototype={
$2:function(a,b){var u
if(b-a>4)this.a.$2("an IPv6 part can only contain a maximum of 4 hex digits",a)
u=P.ed(C.c.q(this.b,a,b),null,16)
if(typeof u!=="number")return u.W()
if(u<0||u>65535)this.a.$2("each part must be in the range of `0x0..0xFFFF`",a)
return u},
$S:48}
P.bM.prototype={
gf8:function(){return this.b},
gcG:function(a){var u=this.c
if(u==null)return""
if(C.c.aj(u,"["))return C.c.q(u,1,u.length-1)
return u},
gbQ:function(a){var u=this.d
if(u==null)return P.k7(this.a)
return u},
gcS:function(){var u=this.f
return u==null?"":u},
geA:function(){var u=this.r
return u==null?"":u},
cV:function(a,b,c,d,e,f,g,h,i){var u,t,s
H.h(g,"$iH",[P.l,null],"$aH")
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
if(s&&!C.c.aj(c,"/"))c="/"+c
f=P.j5(f,0,0,g)
return new P.bM(h,i,b,e,c,f,this.r)},
eY:function(a){return this.cV(null,null,null,null,null,null,a,null,null)},
gbS:function(){var u,t
if(this.Q==null){u=this.f
t=P.l
this.siB(new P.dS(P.jZ(u==null?"":u,C.m),[t,t]))}return this.Q},
geC:function(){return this.c!=null},
geF:function(){return this.f!=null},
geD:function(){return this.r!=null},
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
if(!!J.O(b).$ij0)if(this.a==b.gc1())if(this.c!=null===b.geC())if(this.b==b.gf8())if(this.gcG(this)==b.gcG(b))if(this.gbQ(this)==b.gbQ(b))if(this.e===b.geV(b)){u=this.f
t=u==null
if(!t===b.geF()){if(t)u=""
if(u===b.gcS()){u=this.r
t=u==null
if(!t===b.geD()){if(t)u=""
u=u===b.geA()}else u=!1}else u=!1}else u=!1}else u=!1
else u=!1
else u=!1
else u=!1
else u=!1
else u=!1
else u=!1
return u},
gL:function(a){var u=this.z
if(u==null){u=C.c.gL(this.i(0))
this.z=u}return u},
siB:function(a){var u=P.l
this.Q=H.h(a,"$iH",[u,u],"$aH")},
$ij0:1,
gc1:function(){return this.a},
geV:function(a){return this.e}}
P.i1.prototype={
$1:function(a){var u=this.b
if(typeof u!=="number")return u.C()
throw H.e(P.X("Invalid port",this.a,u+1))},
$S:44}
P.i2.prototype={
$1:function(a){return P.i5(C.a0,a,C.m,!1)},
$S:26}
P.i4.prototype={
$2:function(a,b){var u,t
u=this.b
t=this.a
u.a+=t.a
t.a="&"
t=u.a+=H.i(P.i5(C.t,a,C.m,!0))
if(b!=null&&b.length!==0){u.a=t+"="
u.a+=H.i(P.i5(C.t,b,C.m,!0))}},
$S:27}
P.i3.prototype={
$2:function(a,b){var u,t
H.N(a)
if(b==null||typeof b==="string")this.a.$2(a,H.N(b))
else for(u=J.cP(H.ku(b,"$ik")),t=this.a;u.B();)t.$2(a,H.N(u.gN()))},
$S:28}
P.h5.prototype={
gf7:function(){var u,t,s,r,q
u=this.c
if(u!=null)return u
u=this.b
if(0>=u.length)return H.c(u,0)
t=this.a
u=u[0]+1
s=C.c.eH(t,"?",u)
r=t.length
if(s>=0){q=P.cE(t,s+1,r,C.q,!1)
r=s}else q=null
u=new P.hy(this,"data",null,null,null,P.cE(t,u,r,C.E,!1),q,null)
this.c=u
return u},
i:function(a){var u,t
u=this.b
if(0>=u.length)return H.c(u,0)
t=this.a
return u[0]===-1?"data:"+t:t}}
P.id.prototype={
$1:function(a){return new Uint8Array(96)},
$S:29}
P.ic.prototype={
$2:function(a,b){var u=this.a
if(a>=u.length)return H.c(u,a)
u=u[a]
J.kY(u,0,96,b)
return u},
$S:30}
P.ie.prototype={
$3:function(a,b,c){var u,t,s
for(u=b.length,t=0;t<u;++t){s=C.c.K(b,t)^96
if(s>=a.length)return H.c(a,s)
a[s]=c}}}
P.ig.prototype={
$3:function(a,b,c){var u,t,s
for(u=C.c.K(b,0),t=C.c.K(b,1);u<=t;++u){s=(u^96)>>>0
if(s>=a.length)return H.c(a,s)
a[s]=c}}}
P.hV.prototype={
geC:function(){return this.c>0},
geE:function(){var u,t
if(this.c>0){u=this.d
if(typeof u!=="number")return u.C()
t=this.e
if(typeof t!=="number")return H.u(t)
t=u+1<t
u=t}else u=!1
return u},
geF:function(){var u=this.f
if(typeof u!=="number")return u.W()
return u<this.r},
geD:function(){return this.r<this.a.length},
gdt:function(){return this.b===4&&C.c.aj(this.a,"http")},
gdu:function(){return this.b===5&&C.c.aj(this.a,"https")},
gc1:function(){var u,t
u=this.b
if(u<=0)return""
t=this.x
if(t!=null)return t
if(this.gdt()){this.x="http"
u="http"}else if(this.gdu()){this.x="https"
u="https"}else if(u===4&&C.c.aj(this.a,"file")){this.x="file"
u="file"}else if(u===7&&C.c.aj(this.a,"package")){this.x="package"
u="package"}else{u=C.c.q(this.a,0,u)
this.x=u}return u},
gf8:function(){var u,t
u=this.c
t=this.b+3
return u>t?C.c.q(this.a,t,u-1):""},
gcG:function(a){var u=this.c
return u>0?C.c.q(this.a,u,this.d):""},
gbQ:function(a){var u
if(this.geE()){u=this.d
if(typeof u!=="number")return u.C()
return P.ed(C.c.q(this.a,u+1,this.e),null,null)}if(this.gdt())return 80
if(this.gdu())return 443
return 0},
geV:function(a){return C.c.q(this.a,this.e,this.f)},
gcS:function(){var u,t
u=this.f
t=this.r
if(typeof u!=="number")return u.W()
return u<t?C.c.q(this.a,u+1,t):""},
geA:function(){var u,t
u=this.r
t=this.a
return u<t.length?C.c.aF(t,u+1):""},
gbS:function(){var u=this.f
if(typeof u!=="number")return u.W()
if(u>=this.r)return C.a1
u=P.l
return new P.dS(P.jZ(this.gcS(),C.m),[u,u])},
cV:function(a,b,c,d,e,f,g,h,i){var u,t,s
H.h(g,"$iH",[P.l,null],"$aH")
h=this.gc1()
u=h==="file"
t=this.c
i=t>0?C.c.q(this.a,this.b+3,t):""
e=this.geE()?this.gbQ(this):null
t=this.c
if(t>0)b=C.c.q(this.a,t,this.d)
else if(i.length!==0||e!=null||u)b=""
t=this.a
c=C.c.q(t,this.e,this.f)
if(!u)s=b!=null&&c.length!==0
else s=!0
if(s&&!C.c.aj(c,"/"))c="/"+c
f=P.j5(f,0,0,g)
s=this.r
if(s<t.length)a=C.c.aF(t,s+1)
return new P.bM(h,i,b,e,c,f,a)},
eY:function(a){return this.cV(null,null,null,null,null,null,a,null,null)},
gL:function(a){var u=this.y
if(u==null){u=C.c.gL(this.a)
this.y=u}return u},
u:function(a,b){if(b==null)return!1
if(this===b)return!0
return!!J.O(b).$ij0&&this.a===b.i(0)},
i:function(a){return this.a},
$ij0:1}
P.hy.prototype={}
W.w.prototype={}
W.eg.prototype={
i:function(a){return String(a)}}
W.eh.prototype={
i:function(a){return String(a)}}
W.cS.prototype={}
W.bv.prototype={
bZ:function(a,b,c){if(c!=null)return this.hi(a,b,P.mv(c,null))
return this.hj(a,b)},
fh:function(a,b){return this.bZ(a,b,null)},
hi:function(a,b,c){return a.getContext(b,c)},
hj:function(a,b){return a.getContext(b)},
$ibv:1,
$ijs:1}
W.bw.prototype={
hk:function(a,b,c,d,e){return a.getImageData(b,c,d,e)},
k_:function(a,b,c,d,e,f){return a.drawImage(b,c,d,e,f)},
$ibw:1}
W.b9.prototype={
gn:function(a){return a.length}}
W.bZ.prototype={
gn:function(a){return a.length}}
W.ex.prototype={}
W.c_.prototype={$ic_:1}
W.c0.prototype={
cZ:function(a,b){return a.getElementById(b)}}
W.eA.prototype={
i:function(a){return String(a)}}
W.d1.prototype={
i:function(a){return"Rectangle ("+H.i(a.left)+", "+H.i(a.top)+") "+H.i(a.width)+" x "+H.i(a.height)},
u:function(a,b){var u
if(b==null)return!1
if(!H.cI(b,"$iat",[P.ae],"$aat"))return!1
u=J.b7(b)
return a.left===u.gbO(b)&&a.top===u.gbW(b)&&a.width===u.gaO(b)&&a.height===u.gaL(b)},
gL:function(a){return W.k4(C.h.gL(a.left),C.h.gL(a.top),C.h.gL(a.width),C.h.gL(a.height))},
gdX:function(a){return a.bottom},
gaL:function(a){return a.height},
gbO:function(a){return a.left},
gbU:function(a){return a.right},
gbW:function(a){return a.top},
gaO:function(a){return a.width},
$iat:1,
$aat:function(){return[P.ae]}}
W.hx.prototype={
gn:function(a){return this.b.length},
j:function(a,b){var u=this.b
if(b<0||b>=u.length)return H.c(u,b)
return H.f(u[b],"$iU")},
p:function(a,b,c){var u
H.f(c,"$iU")
u=this.b
if(b<0||b>=u.length)return H.c(u,b)
J.iJ(this.a,c,u[b])},
h:function(a,b){J.jm(this.a,b)
return b},
gU:function(a){var u=this.kU(this)
return new J.ag(u,u.length,0,[H.t(u,0)])},
$aR:function(){return[W.U]},
$ak:function(){return[W.U]},
$aa:function(){return[W.U]}}
W.U.prototype={
gcv:function(a){return new W.hx(a,a.children)},
ge1:function(a){var u,t,s,r
u=a.clientLeft
t=a.clientTop
s=a.clientWidth
r=a.clientHeight
if(typeof s!=="number")return s.W()
if(s<0)s=-s*0
if(typeof r!=="number")return r.W()
if(r<0)r=-r*0
return new P.at(u,t,s,r,[P.ae])},
i:function(a){return a.localName},
$iU:1}
W.n.prototype={$in:1}
W.bd.prototype={
fR:function(a,b,c,d){return a.addEventListener(b,H.bP(H.m(c,{func:1,args:[W.n]}),1),!1)},
$ibd:1}
W.eM.prototype={
gn:function(a){return a.length}}
W.d7.prototype={
iI:function(a,b,c,d){return a.replaceState(b,c,d)},
gn:function(a){return a.length}}
W.bC.prototype={
gn:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.c5(b,a,null,null,null))
return a[b]},
p:function(a,b,c){H.f(c,"$iF")
throw H.e(P.V("Cannot assign element of immutable List."))},
an:function(a,b){if(b<0||b>=a.length)return H.c(a,b)
return a[b]},
$ib_:1,
$ab_:function(){return[W.F]},
$aR:function(){return[W.F]},
$ik:1,
$ak:function(){return[W.F]},
$ia:1,
$aa:function(){return[W.F]},
$ibC:1,
$aaA:function(){return[W.F]}}
W.d8.prototype={}
W.aZ.prototype={$iaZ:1,
ge3:function(a){return a.data}}
W.c4.prototype={$ic4:1,$ijs:1}
W.c6.prototype={$ic6:1,$ibX:1}
W.bX.prototype={$iU:1,$ibd:1,$iF:1}
W.aL.prototype={$iaL:1}
W.df.prototype={}
W.ca.prototype={}
W.a8.prototype={$ia8:1}
W.hw.prototype={
p:function(a,b,c){var u,t
H.f(c,"$iF")
u=this.a
t=u.childNodes
if(b<0||b>=t.length)return H.c(t,b)
J.iJ(u,c,t[b])},
gU:function(a){var u=this.a.childNodes
return new W.d3(u,u.length,-1,[H.ec(C.a2,u,"aA",0)])},
gn:function(a){return this.a.childNodes.length},
j:function(a,b){var u=this.a.childNodes
if(b<0||b>=u.length)return H.c(u,b)
return u[b]},
$aR:function(){return[W.F]},
$ak:function(){return[W.F]},
$aa:function(){return[W.F]}}
W.F.prototype={
kL:function(a,b){var u,t
try{u=a.parentNode
J.iJ(u,b,a)}catch(t){H.ay(t)}return a},
i:function(a){var u=a.nodeValue
return u==null?this.fp(a):u},
Y:function(a,b){return a.appendChild(b)},
iH:function(a,b,c){return a.replaceChild(b,c)},
$iF:1}
W.cd.prototype={
gn:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.c5(b,a,null,null,null))
return a[b]},
p:function(a,b,c){H.f(c,"$iF")
throw H.e(P.V("Cannot assign element of immutable List."))},
an:function(a,b){if(b<0||b>=a.length)return H.c(a,b)
return a[b]},
$ib_:1,
$ab_:function(){return[W.F]},
$aR:function(){return[W.F]},
$ik:1,
$ak:function(){return[W.F]},
$ia:1,
$aa:function(){return[W.F]},
$aaA:function(){return[W.F]}}
W.fu.prototype={
gn:function(a){return a.length}}
W.aQ.prototype={$iaQ:1}
W.dD.prototype={
hm:function(a,b){return a.insertRow(b)}}
W.dE.prototype={
ds:function(a,b){return a.insertCell(b)}}
W.aD.prototype={$iaD:1}
W.aE.prototype={$iaE:1}
W.fR.prototype={
gn:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.c5(b,a,null,null,null))
return a[b]},
p:function(a,b,c){H.f(c,"$iaD")
throw H.e(P.V("Cannot assign element of immutable List."))},
an:function(a,b){if(b<0||b>=a.length)return H.c(a,b)
return a[b]},
$ib_:1,
$ab_:function(){return[W.aD]},
$aR:function(){return[W.aD]},
$ik:1,
$ak:function(){return[W.aD]},
$ia:1,
$aa:function(){return[W.aD]},
$aaA:function(){return[W.aD]}}
W.bp.prototype={}
W.hp.prototype={$ijs:1}
W.aT.prototype={
gjX:function(a){if(a.deltaY!==undefined)return a.deltaY
throw H.e(P.V("deltaY is not supported"))},
gjW:function(a){if(a.deltaX!==undefined)return a.deltaX
throw H.e(P.V("deltaX is not supported"))},
$iaT:1}
W.cw.prototype={
iJ:function(a,b){return a.requestAnimationFrame(H.bP(H.m(b,{func:1,ret:-1,args:[P.ae]}),1))},
h8:function(a){if(!!(a.requestAnimationFrame&&a.cancelAnimationFrame))return;(function(b){var u=['ms','moz','webkit','o']
for(var t=0;t<u.length&&!b.requestAnimationFrame;++t){b.requestAnimationFrame=b[u[t]+'RequestAnimationFrame']
b.cancelAnimationFrame=b[u[t]+'CancelAnimationFrame']||b[u[t]+'CancelRequestAnimationFrame']}if(b.requestAnimationFrame&&b.cancelAnimationFrame)return
b.requestAnimationFrame=function(c){return window.setTimeout(function(){c(Date.now())},16)}
b.cancelAnimationFrame=function(c){clearTimeout(c)}})(a)}}
W.dZ.prototype={
i:function(a){return"Rectangle ("+H.i(a.left)+", "+H.i(a.top)+") "+H.i(a.width)+" x "+H.i(a.height)},
u:function(a,b){var u
if(b==null)return!1
if(!H.cI(b,"$iat",[P.ae],"$aat"))return!1
u=J.b7(b)
return a.left===u.gbO(b)&&a.top===u.gbW(b)&&a.width===u.gaO(b)&&a.height===u.gaL(b)},
gL:function(a){return W.k4(C.h.gL(a.left),C.h.gL(a.top),C.h.gL(a.width),C.h.gL(a.height))},
gaL:function(a){return a.height},
gaO:function(a){return a.width}}
W.hz.prototype={}
W.j4.prototype={}
W.hA.prototype={}
W.hB.prototype={
$1:function(a){return this.a.$1(H.f(a,"$in"))},
$S:31}
W.aA.prototype={
gU:function(a){return new W.d3(a,this.gn(a),-1,[H.ec(this,a,"aA",0)])}}
W.d3.prototype={
B:function(){var u,t
u=this.c+1
t=this.b
if(u<t){this.sdr(J.kU(this.a,u))
this.c=u
return!0}this.sdr(null)
this.c=t
return!1},
gN:function(){return this.d},
sdr:function(a){this.d=H.y(a,H.t(this,0))},
$iaJ:1}
W.dY.prototype={}
W.e0.prototype={}
W.e1.prototype={}
W.e3.prototype={}
W.e4.prototype={}
W.e7.prototype={}
W.e8.prototype={}
P.hW.prototype={
ey:function(a){var u,t,s
u=this.a
t=u.length
for(s=0;s<t;++s)if(u[s]===a)return s
C.a.h(u,a)
C.a.h(this.b,null)
return t},
cY:function(a){var u,t,s,r
u={}
if(a==null)return a
if(typeof a==="boolean")return a
if(typeof a==="number")return a
if(typeof a==="string")return a
t=J.O(a)
if(!!t.$iai)return new Date(a.a)
if(!!t.$ilF)throw H.e(P.h2("structured clone of RegExp"))
if(!!t.$iaZ)return a
if(!!t.$ibE)return a
if(!!t.$iH){s=this.ey(a)
t=this.b
if(s>=t.length)return H.c(t,s)
r=t[s]
u.a=r
if(r!=null)return r
r={}
u.a=r
C.a.p(t,s,r)
a.a1(0,new P.hY(u,this))
return u.a}if(!!t.$ia){s=this.ey(a)
u=this.b
if(s>=u.length)return H.c(u,s)
r=u[s]
if(r!=null)return r
return this.jR(a,s)}throw H.e(P.h2("structured clone of other type"))},
jR:function(a,b){var u,t,s,r
u=J.cJ(a)
t=u.gn(a)
s=new Array(t)
C.a.p(this.b,b,s)
for(r=0;r<t;++r)C.a.p(s,r,this.cY(u.j(a,r)))
return s}}
P.hY.prototype={
$2:function(a,b){this.a.a[a]=this.b.cY(b)},
$S:6}
P.e9.prototype={$iaZ:1,
ge3:function(a){return this.a}}
P.ik.prototype={
$2:function(a,b){this.a[a]=b},
$S:6}
P.hX.prototype={}
P.eJ.prototype={
gbn:function(){var u,t,s
u=this.b
t=H.ar(u,"R",0)
s=W.U
return new H.f6(new H.hq(u,H.m(new P.eK(),{func:1,ret:P.W,args:[t]}),[t]),H.m(new P.eL(),{func:1,ret:s,args:[t]}),[t,s])},
p:function(a,b,c){var u
H.f(c,"$iU")
u=this.gbn()
J.kZ(u.b.$1(J.iK(u.a,b)),c)},
h:function(a,b){J.jm(this.b.a,b)},
gn:function(a){return J.aY(this.gbn().a)},
j:function(a,b){var u=this.gbn()
return u.b.$1(J.iK(u.a,b))},
gU:function(a){var u=P.lo(this.gbn(),!1,W.U)
return new J.ag(u,u.length,0,[H.t(u,0)])},
$aR:function(){return[W.U]},
$ak:function(){return[W.U]},
$aa:function(){return[W.U]}}
P.eK.prototype={
$1:function(a){return!!J.O(H.f(a,"$iF")).$iU},
$S:32}
P.eL.prototype={
$1:function(a){return H.d(H.f(a,"$iF"),"$iU")},
$S:33}
P.hP.prototype={
gbU:function(a){var u=this.a
if(typeof u!=="number")return u.C()
return H.y(u+this.c,H.t(this,0))},
gdX:function(a){var u=this.b
if(typeof u!=="number")return u.C()
return H.y(u+this.d,H.t(this,0))},
i:function(a){return"Rectangle ("+H.i(this.a)+", "+H.i(this.b)+") "+this.c+" x "+this.d},
u:function(a,b){var u,t,s,r
if(b==null)return!1
if(H.cI(b,"$iat",[P.ae],"$aat")){u=this.a
t=J.b7(b)
if(u==t.gbO(b)){s=this.b
if(s==t.gbW(b)){if(typeof u!=="number")return u.C()
r=H.t(this,0)
if(H.y(u+this.c,r)===t.gbU(b)){if(typeof s!=="number")return s.C()
u=H.y(s+this.d,r)===t.gdX(b)}else u=!1}else u=!1}else u=!1}else u=!1
return u},
gL:function(a){var u,t,s,r,q
u=this.a
t=J.cO(u)
s=this.b
r=J.cO(s)
if(typeof u!=="number")return u.C()
q=H.t(this,0)
u=C.e.gL(H.y(u+this.c,q))
if(typeof s!=="number")return s.C()
q=C.e.gL(H.y(s+this.d,q))
return P.m1(P.hM(P.hM(P.hM(P.hM(0,t),r),u),q))}}
P.at.prototype={
gbO:function(a){return this.a},
gbW:function(a){return this.b},
gaO:function(a){return this.c},
gaL:function(a){return this.d}}
P.p.prototype={
gcv:function(a){return new P.eJ(a,new W.hw(a))}}
P.J.prototype={$ik:1,
$ak:function(){return[P.j]},
$ia:1,
$aa:function(){return[P.j]},
$ilP:1}
P.cT.prototype={$icT:1}
P.d4.prototype={$id4:1}
P.du.prototype={$idu:1}
P.dw.prototype={$idw:1}
P.bJ.prototype={
br:function(a,b){return a.activeTexture(b)},
dQ:function(a,b,c){return a.attachShader(b,c)},
ay:function(a,b,c){return a.bindBuffer(b,c)},
aK:function(a,b,c){return a.bindFramebuffer(b,c)},
dV:function(a,b,c){return a.bindRenderbuffer(b,c)},
ae:function(a,b,c){return a.bindTexture(b,c)},
jM:function(a,b,c){return a.blendFunc(b,c)},
dY:function(a,b,c,d){return a.bufferData(b,c,d)},
dZ:function(a,b){return a.clear(b)},
e_:function(a,b,c,d,e){return a.clearColor(b,c,d,e)},
e0:function(a,b){return a.clearDepth(b)},
jP:function(a,b){return a.compileShader(b)},
jS:function(a,b){return a.createShader(b)},
jU:function(a,b){return a.deleteProgram(b)},
jV:function(a,b){return a.deleteShader(b)},
e4:function(a,b){return a.depthFunc(b)},
jY:function(a,b){return a.disable(b)},
e6:function(a,b){return a.disableVertexAttribArray(b)},
jZ:function(a,b,c,d,e){return a.drawElements(b,c,d,e)},
b9:function(a,b){return a.enable(b)},
eb:function(a,b){return a.enableVertexAttribArray(b)},
kc:function(a,b,c,d,e){return a.framebufferRenderbuffer(b,c,d,e)},
eB:function(a,b,c,d,e,f){return a.framebufferTexture2D(b,c,d,e,f)},
fd:function(a,b){return a.generateMipmap(b)},
fe:function(a,b,c){return a.getActiveAttrib(b,c)},
ff:function(a,b,c){return a.getActiveUniform(b,c)},
fg:function(a,b,c){return a.getAttribLocation(b,c)},
c_:function(a,b){return a.getParameter(b)},
fi:function(a,b){return a.getProgramInfoLog(b)},
c0:function(a,b,c){return a.getProgramParameter(b,c)},
fj:function(a,b){return a.getShaderInfoLog(b)},
fk:function(a,b,c){return a.getShaderParameter(b,c)},
fl:function(a,b,c){return a.getUniformLocation(b,c)},
ki:function(a,b){return a.linkProgram(b)},
kF:function(a,b,c){return a.pixelStorei(b,c)},
iC:function(a,b,c,d,e,f,g,h){return a.readPixels(b,c,d,e,f,g,h)},
kK:function(a,b,c,d,e){return a.renderbufferStorage(b,c,d,e)},
fn:function(a,b,c){return a.shaderSource(b,c)},
f1:function(a,b,c,d,e,f,g,h,i,j){var u,t
u=i==null
if(!u&&h!=null&&typeof g==="number"&&Math.floor(g)===g){this.j2(a,b,c,d,e,f,g,h,i,j)
return}t=J.O(g)
if(!!t.$iaZ&&h==null&&u&&!0){this.j3(a,b,c,d,e,f,P.mw(g))
return}if(!!t.$ic4&&h==null&&u&&!0){this.j4(a,b,c,d,e,f,g)
return}throw H.e(P.cQ("Incorrect number or type of arguments"))},
kR:function(a,b,c,d,e,f,g){return this.f1(a,b,c,d,e,f,g,null,null,null)},
j2:function(a,b,c,d,e,f,g,h,i,j){return a.texImage2D(b,c,d,e,f,g,h,i,j)},
j3:function(a,b,c,d,e,f,g){return a.texImage2D(b,c,d,e,f,g)},
j4:function(a,b,c,d,e,f,g){return a.texImage2D(b,c,d,e,f,g)},
aD:function(a,b,c,d){return a.texParameteri(b,c,d)},
J:function(a,b,c){return a.uniform1f(b,c)},
M:function(a,b,c){return a.uniform1i(b,c)},
bX:function(a,b,c,d){return a.uniform2f(b,c,d)},
t:function(a,b,c,d,e){return a.uniform3f(b,c,d,e)},
l_:function(a,b,c,d,e,f){return a.uniform4f(b,c,d,e,f)},
f6:function(a,b,c,d){return a.uniformMatrix3fv(b,!1,d)},
cX:function(a,b,c,d){return a.uniformMatrix4fv(b,!1,d)},
bj:function(a,b){return a.useProgram(b)},
l1:function(a,b,c,d,e,f,g){return a.vertexAttribPointer(b,c,d,!1,f,g)},
fa:function(a,b,c,d,e){return a.viewport(b,c,d,e)},
$ibJ:1}
P.dy.prototype={$idy:1}
P.dF.prototype={$idF:1}
P.dQ.prototype={$idQ:1}
O.P.prototype={
bk:function(a){this.shq(H.b([],[a]))
this.sdD(null)
this.sdz(null)
this.sdE(null)},
d0:function(a,b,c){var u=H.ar(this,"P",0)
H.m(b,{func:1,ret:P.W,args:[[P.k,u]]})
u={func:1,ret:-1,args:[P.j,[P.k,u]]}
H.m(a,u)
H.m(c,u)
this.sdD(b)
this.sdz(a)
this.sdE(c)},
aP:function(a,b){return this.d0(a,null,b)},
dC:function(a){var u
H.h(a,"$ik",[H.ar(this,"P",0)],"$ak")
u=this.b
if(u!=null)return u.$1(a)
return!0},
dw:function(a,b){var u
H.h(b,"$ik",[H.ar(this,"P",0)],"$ak")
u=this.c
if(u!=null)u.$2(a,b)},
gn:function(a){return this.a.length},
gU:function(a){var u=this.a
return new J.ag(u,u.length,0,[H.t(u,0)])},
an:function(a,b){var u=this.a
if(b<0||b>=u.length)return H.c(u,b)
return u[b]},
h:function(a,b){var u,t,s
u=H.ar(this,"P",0)
H.y(b,u)
u=[u]
if(this.dC(H.b([b],u))){t=this.a
s=t.length
C.a.h(t,b)
this.dw(s,H.b([b],u))}},
b4:function(a,b){var u,t
H.h(b,"$ik",[H.ar(this,"P",0)],"$ak")
if(this.dC(b)){u=this.a
t=u.length
C.a.b4(u,b)
this.dw(t,b)}},
shq:function(a){this.a=H.h(a,"$ia",[H.ar(this,"P",0)],"$aa")},
sdD:function(a){this.b=H.m(a,{func:1,ret:P.W,args:[[P.k,H.ar(this,"P",0)]]})},
sdz:function(a){this.c=H.m(a,{func:1,ret:-1,args:[P.j,[P.k,H.ar(this,"P",0)]]})},
sdE:function(a){this.d=H.m(a,{func:1,ret:-1,args:[P.j,[P.k,H.ar(this,"P",0)]]})},
$ik:1}
O.c9.prototype={
gn:function(a){return this.a.length},
gl:function(){var u=this.b
if(u==null){u=D.D()
this.b=u}return u},
fB:function(a){var u=this.b
if(u!=null)u.D(a)},
aQ:function(){return this.fB(null)},
ga_:function(){var u=this.a
if(u.length>0)return C.a.gaM(u)
else return V.bi()},
bR:function(a){var u=this.a
if(a==null)C.a.h(u,V.bi())
else C.a.h(u,a)
this.aQ()},
bf:function(){var u=this.a
if(u.length>0){u.pop()
this.aQ()}},
sca:function(a){this.a=H.h(a,"$ia",[V.a7],"$aa")}}
E.em.prototype={}
E.aa.prototype={
dd:function(){var u,t
this.e=null
for(u=this.y.a,u=new J.ag(u,u.length,0,[H.t(u,0)]);u.B();){t=u.d
if(t.f==null)t.dd()}},
sc2:function(a,b){var u,t,s
u=this.c
if(u!=b){this.c=b
this.d=b
this.e=null
if(u!=null)u.gl().H(0,this.geR())
t=this.c
if(t!=null)t.gl().h(0,this.geR())
s=new D.v("shape",u,this.c,this,[F.dz])
s.b=!0
this.ah(s)}},
sai:function(a){var u,t,s
u=this.f
if(u!=a){if(u!=null)u.gl().H(0,this.geT())
t=this.f
this.f=a
if(a!=null)a.gl().h(0,this.geT())
this.dd()
s=new D.v("technique",t,this.f,this,[O.b4])
s.b=!0
this.ah(s)}},
sbc:function(a){var u,t
if(!J.I(this.r,a)){u=this.r
if(u!=null)u.gl().H(0,this.geP())
if(a!=null)a.gl().h(0,this.geP())
this.r=a
t=new D.v("mover",u,a,this,[U.a9])
t.b=!0
this.ah(t)}},
aa:function(a){var u,t,s,r
u=this.r
t=u!=null?u.aE(a,this):null
if(!J.I(t,this.x)){s=this.x
this.x=t
r=new D.v("matrix",s,t,this,[V.a7])
r.b=!0
this.ah(r)}u=this.f
if(u!=null)u.aa(a)
for(u=this.y.a,u=new J.ag(u,u.length,0,[H.t(u,0)]);u.B();)u.d.aa(a)},
a9:function(a){var u,t,s
u=a.dx
t=this.x
u.toString
if(t==null)C.a.h(u.a,u.ga_())
else C.a.h(u.a,t.k(0,u.ga_()))
u.aQ()
a.cR(this.f)
u=a.dy
s=(u&&C.a).gaM(u)
if(s!=null&&this.d!=null)s.bT(a,this)
for(u=this.y.a,u=new J.ag(u,u.length,0,[H.t(u,0)]);u.B();)u.d.a9(a)
a.cP()
a.dx.bf()},
gl:function(){var u=this.z
if(u==null){u=D.D()
this.z=u}return u},
ah:function(a){var u=this.z
if(u!=null)u.D(a)},
a4:function(){return this.ah(null)},
eS:function(a){H.f(a,"$ix")
this.e=null
this.ah(a)},
ku:function(){return this.eS(null)},
eU:function(a){this.ah(H.f(a,"$ix"))},
kv:function(){return this.eU(null)},
eQ:function(a){this.ah(H.f(a,"$ix"))},
kt:function(){return this.eQ(null)},
eO:function(a){this.ah(H.f(a,"$ix"))},
kq:function(){return this.eO(null)},
kp:function(a,b){var u,t,s,r,q,p,o
H.h(b,"$ik",[E.aa],"$ak")
for(u=b.length,t=this.geN(),s={func:1,ret:-1,args:[D.x]},r=[s],q=0;q<b.length;b.length===u||(0,H.z)(b),++q){p=b[q]
if(p!=null){o=p.z
if(o==null){o=new D.bc()
o.sac(null)
o.sb2(null)
o.c=null
o.d=0
p.z=o}H.m(t,s)
if(o.a==null)o.sac(H.b([],r))
o=o.a;(o&&C.a).h(o,t)}}this.a4()},
ks:function(a,b){var u,t
H.h(b,"$ik",[E.aa],"$ak")
for(u=b.gU(b),t=this.geN();u.B();)u.gN().gl().H(0,t)
this.a4()},
i:function(a){var u,t
u=this.a
t=u.length
if(t<=0)return"Unnamed entity"
return u},
sfC:function(a,b){this.y=H.h(b,"$iP",[E.aa],"$aP")},
$iaO:1}
E.fp.prototype={
fv:function(a,b){var u,t
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
u=new O.c9()
t=[V.a7]
u.sca(H.b([],t))
u.b=null
u.gl().h(0,new E.fq(this))
this.cy=u
u=new O.c9()
u.sca(H.b([],t))
u.b=null
u.gl().h(0,new E.fr(this))
this.db=u
u=new O.c9()
u.sca(H.b([],t))
u.b=null
u.gl().h(0,new E.fs(this))
this.dx=u
this.sj1(H.b([],[O.b4]))
u=this.dy;(u&&C.a).h(u,null)
this.siW(new H.aB([P.l,A.ch]))},
gkG:function(){var u=this.z
if(u==null){u=this.cy.ga_().k(0,this.db.ga_())
this.z=u}return u},
geX:function(){var u=this.ch
if(u==null){u=this.gkG().k(0,this.dx.ga_())
this.ch=u}return u},
gf9:function(){var u=this.cx
if(u==null){u=this.db.ga_().k(0,this.dx.ga_())
this.cx=u}return u},
cR:function(a){var u,t
u=this.dy
t=a==null?(u&&C.a).gaM(u):a;(u&&C.a).h(u,t)},
cP:function(){var u=this.dy
if(u.length>1)u.pop()},
bt:function(a){var u=a.b
if(u.length===0)throw H.e(P.r("May not cache a shader with no name."))
if(this.fr.bv(u))throw H.e(P.r('Shader cache already contains a shader by the name "'+u+'".'))
this.fr.p(0,u,a)},
sj1:function(a){this.dy=H.h(a,"$ia",[O.b4],"$aa")},
siW:function(a){this.fr=H.h(a,"$iH",[P.l,A.ch],"$aH")}}
E.fq.prototype={
$1:function(a){var u
H.f(a,"$ix")
u=this.a
u.z=null
u.ch=null},
$S:8}
E.fr.prototype={
$1:function(a){var u
H.f(a,"$ix")
u=this.a
u.z=null
u.Q=null
u.ch=null
u.cx=null},
$S:8}
E.fs.prototype={
$1:function(a){var u
H.f(a,"$ix")
u=this.a
u.ch=null
u.cx=null},
$S:8}
E.dL.prototype={
d7:function(a){H.f(a,"$ix")
this.eZ()},
d6:function(){return this.d7(null)},
gkb:function(){var u,t,s
u=Date.now()
t=C.e.a7(P.jx(0,0,0,u-this.cx.a,0,0).a,1000)/1000
if(t<=0)return 0
s=this.cy
this.cy=0
this.cx=new P.ai(u,!1)
return s/t},
dH:function(){var u,t,s,r
u=window.devicePixelRatio
t=this.b.clientWidth
if(typeof t!=="number")return t.k()
if(typeof u!=="number")return H.u(u)
s=C.h.ba(t*u)
t=this.b.clientHeight
if(typeof t!=="number")return t.k()
r=C.h.ba(t*u)
t=this.b
if(t.width!==s||t.height!==r){t.width=s
t.height=r
P.jU(C.u,this.gkM())}},
eZ:function(){var u,t
if(!this.ch){this.ch=!0
u=window
t=H.m(new E.fO(this),{func:1,ret:-1,args:[P.ae]})
C.I.h8(u)
C.I.iJ(u,W.kk(t,P.ae))}},
kJ:function(){var u,t,s,r,q
try{++this.cy
this.ch=!1
this.dH()
if(this.d!=null){s=this.e;++s.e
s.r=s.x
r=Date.now()
s.x=new P.ai(r,!1)
s.y=P.jx(0,0,0,r-s.r.a,0,0).a*0.000001
r=s.cy
C.a.sn(r.a,0)
r.aQ()
r=s.db
C.a.sn(r.a,0)
r.aQ()
r=s.dx
C.a.sn(r.a,0)
r.aQ()
r=s.dy;(r&&C.a).sn(r,0)
s=s.dy;(s&&C.a).h(s,null)
this.d.a9(this.e)}}catch(q){u=H.ay(q)
t=H.bS(q)
P.jh("Error: "+H.i(u))
P.jh("Stack: "+H.i(t))
throw H.e(u)}}}
E.fO.prototype={
$1:function(a){var u
H.mM(a)
u=this.a
if(u.ch){u.ch=!1
u.kJ()}},
$S:37}
Z.dW.prototype={$imU:1}
Z.cU.prototype={
V:function(a){var u,t,s
try{t=a.a
C.b.eb(t,this.e)
C.b.l1(t,this.e,this.b,5126,!1,this.d,this.c)}catch(s){u=H.ay(s)
t=P.r('Failed to bind buffer attribute "'+this.a.i(0)+'": '+H.i(u))
throw H.e(t)}},
i:function(a){return"["+this.a.i(0)+", Size: "+this.b+", Offset: "+this.c+", Stride: "+this.d+", Attr: "+H.i(this.e)+"]"}}
Z.bL.prototype={$imV:1}
Z.b8.prototype={
ao:function(a){var u,t,s,r
for(u=this.c,t=u.length,s=0;s<t;++s){r=u[s]
if((r.a.a&a.a)!==0)return r}return},
V:function(a){var u,t
u=this.a
C.b.ay(a.a,u.a,u.b)
for(u=this.c,t=u.length-1;t>=0;--t)u[t].V(a)},
aN:function(a){var u,t,s
for(u=this.c,t=u.length-1,s=a.a;t>=0;--t)C.b.e6(s,u[t].e)
C.b.ay(s,this.a.a,null)},
a9:function(a){var u,t,s,r,q,p
u=this.b.length
for(t=a.a,s=0;s<u;++s){r=this.b
if(s>=r.length)return H.c(r,s)
q=r[s]
r=q.c
p=r.a
C.b.ay(t,p,r.b)
C.b.jZ(t,q.a,q.b,5123,0)
C.b.ay(t,p,null)}},
i:function(a){var u,t,s,r,q,p
u=[P.l]
t=H.b([],u)
for(s=this.b,r=s.length,q=0;q<s.length;s.length===r||(0,H.z)(s),++q)C.a.h(t,s[q].i(0))
p=H.b([],u)
for(u=this.c,s=u.length,q=0;q<s;++q)C.a.h(p,J.ao(u[q]))
return"Buffer:  ["+this.a.i(0)+"]\nIndices: "+C.a.F(t,", ")+"\nAttrs:   "+C.a.F(p,", ")},
shl:function(a){this.b=H.h(a,"$ia",[Z.be],"$aa")},
$in1:1}
Z.be.prototype={
i:function(a){return"Type: "+this.a+", Count: "+this.b+", ["+("Instance of '"+H.bG(this.c)+"'")+"]"}}
Z.au.prototype={
gd2:function(a){var u,t
u=this.a
t=(u&$.af().a)!==0?3:0
if((u&$.aG().a)!==0)t+=3
if((u&$.aW().a)!==0)t+=3
if((u&$.az().a)!==0)t+=2
if((u&$.aX().a)!==0)t+=3
if((u&$.cL().a)!==0)t+=3
if((u&$.cM().a)!==0)t+=4
if((u&$.bt().a)!==0)++t
return(u&$.aV().a)!==0?t+4:t},
jK:function(a){var u,t,s
u=$.af()
t=this.a
if((t&u.a)!==0){if(0===a)return u
s=1}else s=0
u=$.aG()
if((t&u.a)!==0){if(s===a)return u;++s}u=$.aW()
if((t&u.a)!==0){if(s===a)return u;++s}u=$.az()
if((t&u.a)!==0){if(s===a)return u;++s}u=$.aX()
if((t&u.a)!==0){if(s===a)return u;++s}u=$.cL()
if((t&u.a)!==0){if(s===a)return u;++s}u=$.cM()
if((t&u.a)!==0){if(s===a)return u;++s}u=$.bt()
if((t&u.a)!==0){if(s===a)return u;++s}u=$.aV()
if((t&u.a)!==0)if(s===a)return u
return $.kQ()},
u:function(a,b){if(b==null)return!1
if(!(b instanceof Z.au))return!1
return this.a===b.a},
i:function(a){var u,t
u=H.b([],[P.l])
t=this.a
if((t&$.af().a)!==0)C.a.h(u,"Pos")
if((t&$.aG().a)!==0)C.a.h(u,"Norm")
if((t&$.aW().a)!==0)C.a.h(u,"Binm")
if((t&$.az().a)!==0)C.a.h(u,"Txt2D")
if((t&$.aX().a)!==0)C.a.h(u,"TxtCube")
if((t&$.cL().a)!==0)C.a.h(u,"Clr3")
if((t&$.cM().a)!==0)C.a.h(u,"Clr4")
if((t&$.bt().a)!==0)C.a.h(u,"Weight")
if((t&$.aV().a)!==0)C.a.h(u,"Bending")
if(u.length<=0)return"None"
return C.a.F(u,"|")}}
D.ep.prototype={}
D.bc.prototype={
h:function(a,b){var u={func:1,ret:-1,args:[D.x]}
H.m(b,u)
if(this.a==null)this.sac(H.b([],[u]))
u=this.a;(u&&C.a).h(u,b)},
H:function(a,b){var u,t
H.m(b,{func:1,ret:-1,args:[D.x]})
u=this.a
u=u==null?null:C.a.aA(u,b)
if(u===!0){u=this.a
t=(u&&C.a).H(u,b)||!1}else t=!1
return t},
D:function(a){var u,t,s,r
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
return!0}if(!s)C.a.a1(t,new D.eH(u))
return!0},
ea:function(){return this.D(null)},
kN:function(a,b){var u,t
u=this.d
if(u>0){--u
this.d=u
if(u<=0)u=this.c!=null
else u=!1
if(u){t=this.c
this.c=null
this.D(t)}}},
af:function(){return this.kN(!0,!1)},
sac:function(a){this.a=H.h(a,"$ia",[{func:1,ret:-1,args:[D.x]}],"$aa")},
sb2:function(a){this.b=H.h(a,"$ia",[{func:1,ret:-1,args:[D.x]}],"$aa")}}
D.eH.prototype={
$1:function(a){var u
H.m(a,{func:1,ret:-1,args:[D.x]})
u=this.a.a
u.b
a.$1(u)},
$S:38}
D.x.prototype={}
D.bf.prototype={}
D.bg.prototype={}
D.v.prototype={
i:function(a){return"ValueChanged: "+this.c+", "+H.i(this.d)+" => "+H.i(this.e)}}
X.cV.prototype={
u:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.cV))return!1
if(this.a!=b.a)return!1
if(!this.b.u(0,b.b))return!1
return!0},
i:function(a){return this.b.i(0)+H.i(this.a)}}
X.de.prototype={
u:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.de))return!1
if(this.a!=b.a)return!1
if(!this.b.u(0,b.b))return!1
return!0},
i:function(a){return this.b.i(0)+H.i(this.a)}}
X.eV.prototype={
kC:function(a){this.c=a.b
this.d.h(0,a.a)
return!1},
ky:function(a){this.c=a.b
this.d.H(0,a.a)
return!1},
siA:function(a){this.d=H.h(a,"$ijQ",[P.j],"$ajQ")}}
X.di.prototype={}
X.f1.prototype={
b1:function(a,b){var u,t,s,r,q,p,o,n
u=new P.ai(Date.now(),!1)
t=this.x
s=b.a
r=this.Q
if(typeof s!=="number")return s.k()
q=b.b
p=this.ch
if(typeof q!=="number")return q.k()
o=new V.a2(t.a+s*r,t.b+q*p)
p=this.a.gaV()
n=new X.bj(a,V.b3(),this.x,this.y,this.z,p,o,u,this)
n.b=!0
this.z=u
this.x=o
return n},
cO:function(a,b){this.r=a.a
return!1},
be:function(a,b){var u,t
u=this.r
t=a.a
if(typeof t!=="number")return t.fm()
if(typeof u!=="number")return u.bY()
this.r=(u&~t)>>>0
return!1},
bd:function(a,b){var u=this.d
if(u==null)return!1
u.D(this.b1(a,b))
return!0},
kD:function(a){var u,t,s,r,q,p,o,n
u=this.e
if(u==null)return!1
t=this.a.gaV()
s=this.x
r=Date.now()
q=a.a
p=this.cx
if(typeof q!=="number")return q.k()
o=a.b
n=this.cy
if(typeof o!=="number")return o.k()
r=new X.cb(new V.S(q*p,o*n),t,s,new P.ai(r,!1),this)
r.b=!0
u.D(r)
return!0},
i5:function(a,b,c){var u,t,s
if(this.f==null)return
u=new P.ai(Date.now(),!1)
t=this.f
s=new X.di(c,a,this.a.gaV(),b,u,this)
s.b=!0
t.D(s)
this.y=u
this.x=V.b3()}}
X.as.prototype={
u:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.as))return!1
if(this.a!==b.a)return!1
if(this.b!=b.b)return!1
if(this.c!=b.c)return!1
return!0},
i:function(a){var u=this.a?"Ctrl+":""
u+=this.b?"Alt+":""
return u+(this.c?"Shift+":"")}}
X.bj.prototype={}
X.fe.prototype={
c8:function(a,b,c){var u,t,s
u=new P.ai(Date.now(),!1)
t=this.a.gaV()
s=new X.bj(a,this.r,this.x,this.y,this.z,t,b,u,this)
s.b=!0
if(c){this.y=u
this.r=b}this.z=u
this.x=b
return s},
cO:function(a,b){var u
this.f=a.a
u=this.b
if(u==null)return!1
u.D(this.c8(a,b,!0))
return!0},
be:function(a,b){var u,t
u=this.f
t=a.a
if(typeof t!=="number")return t.fm()
if(typeof u!=="number")return u.bY()
this.f=(u&~t)>>>0
u=this.c
if(u==null)return!1
u.D(this.c8(a,b,!0))
return!0},
bd:function(a,b){var u=this.d
if(u==null)return!1
u.D(this.c8(a,b,!1))
return!0},
kE:function(a,b){var u,t,s,r,q,p,o
u=this.e
if(u==null)return!1
t=this.a.gaV()
s=Date.now()
r=a.a
q=this.Q
if(typeof r!=="number")return r.k()
p=a.b
o=this.ch
if(typeof p!=="number")return p.k()
s=new X.cb(new V.S(r*q,p*o),t,b,new P.ai(s,!1),this)
s.b=!0
u.D(s)
return!0}}
X.cb.prototype={}
X.fn.prototype={}
X.dN.prototype={}
X.fQ.prototype={
b1:function(a,b){var u,t,s,r
H.h(a,"$ia",[V.a2],"$aa")
u=new P.ai(Date.now(),!1)
t=a.length>0?a[0]:V.b3()
s=this.a.gaV()
r=new X.dN(a,this.f,this.r,this.x,this.y,s,t,u,this)
r.b=!0
if(b){this.x=u
this.f=t}this.y=u
this.r=t
return r},
kB:function(a){var u
H.h(a,"$ia",[V.a2],"$aa")
u=this.b
if(u==null)return!1
u.D(this.b1(a,!0))
return!0},
kz:function(a){var u
H.h(a,"$ia",[V.a2],"$aa")
u=this.c
if(u==null)return!1
u.D(this.b1(a,!0))
return!0},
kA:function(a){var u
H.h(a,"$ia",[V.a2],"$aa")
u=this.d
if(u==null)return!1
u.D(this.b1(a,!1))
return!0}}
X.dT.prototype={
gaV:function(){var u=this.a
return V.cf(0,0,C.n.ge1(u).c,C.n.ge1(u).d)},
dk:function(a){var u,t
u=a.keyCode
t=a.ctrlKey||a.metaKey
return new X.de(u,new X.as(t,a.altKey,a.shiftKey))},
aS:function(a){var u,t
u=this.b
t=a.ctrlKey||a.metaKey
u.c=new X.as(t,a.altKey,a.shiftKey)},
cm:function(a){var u,t
u=this.b
t=a.ctrlKey||a.metaKey
u.c=new X.as(t,a.altKey,a.shiftKey)},
aJ:function(a){var u,t,s,r,q
u=this.a.getBoundingClientRect()
t=a.pageX
s=a.pageY
r=u.left
if(typeof t!=="number")return t.G()
q=u.top
if(typeof s!=="number")return s.G()
return new V.a2(t-r,s-q)},
b3:function(a){return new V.S(a.movementX,a.movementY)},
cf:function(a){var u,t,s,r,q,p,o,n
u=this.a.getBoundingClientRect()
t=H.b([],[V.a2])
for(s=a.touches,r=s.length,q=0;q<s.length;s.length===r||(0,H.z)(s),++q){p=s[q]
o=C.h.a2(p.pageX)
C.h.a2(p.pageY)
n=u.left
C.h.a2(p.pageX)
C.a.h(t,new V.a2(o-n,C.h.a2(p.pageY)-u.top))}return t},
aG:function(a){var u,t
u=a.buttons
t=a.ctrlKey||a.metaKey
return new X.cV(u,new X.as(t,a.altKey,a.shiftKey))},
cb:function(a){var u,t,s,r,q,p
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
i_:function(a){this.f=!0},
hK:function(a){this.f=!1},
hQ:function(a){H.f(a,"$ia8")
if(this.f&&this.cb(a))a.preventDefault()},
i3:function(a){var u
H.f(a,"$iaL")
if(!this.f)return
u=this.dk(a)
this.b.kC(u)},
i1:function(a){var u
H.f(a,"$iaL")
if(!this.f)return
u=this.dk(a)
this.b.ky(u)},
i7:function(a){var u,t,s,r
H.f(a,"$ia8")
u=this.a
u.focus()
this.f=!0
this.aS(a)
if(this.x){t=this.aG(a)
s=this.b3(a)
if(this.d.cO(t,s))a.preventDefault()
return}if(this.r){this.y=a
u.requestPointerLock()
return}t=this.aG(a)
r=this.aJ(a)
if(this.c.cO(t,r))a.preventDefault()},
ib:function(a){var u,t,s
H.f(a,"$ia8")
this.aS(a)
u=this.aG(a)
if(this.x){t=this.b3(a)
if(this.d.be(u,t))a.preventDefault()
return}if(this.r)return
s=this.aJ(a)
if(this.c.be(u,s))a.preventDefault()},
hU:function(a){var u,t,s
H.f(a,"$ia8")
if(!this.cb(a)){this.aS(a)
u=this.aG(a)
if(this.x){t=this.b3(a)
if(this.d.be(u,t))a.preventDefault()
return}if(this.r)return
s=this.aJ(a)
if(this.c.be(u,s))a.preventDefault()}},
i9:function(a){var u,t,s
H.f(a,"$ia8")
this.aS(a)
u=this.aG(a)
if(this.x){t=this.b3(a)
if(this.d.bd(u,t))a.preventDefault()
return}if(this.r)return
s=this.aJ(a)
if(this.c.bd(u,s))a.preventDefault()},
hS:function(a){var u,t,s
H.f(a,"$ia8")
if(!this.cb(a)){this.aS(a)
u=this.aG(a)
if(this.x){t=this.b3(a)
if(this.d.bd(u,t))a.preventDefault()
return}if(this.r)return
s=this.aJ(a)
if(this.c.bd(u,s))a.preventDefault()}},
ie:function(a){var u,t
H.f(a,"$iaT")
this.aS(a)
u=new V.S((a&&C.H).gjW(a),C.H.gjX(a)).A(0,180)
if(this.x){if(this.d.kD(u))a.preventDefault()
return}if(this.r)return
t=this.aJ(a)
if(this.c.kE(u,t))a.preventDefault()},
ih:function(a){var u,t,s
u=document.pointerLockElement===this.a
if(u!==this.x){this.x=u
t=this.aG(this.y)
s=this.aJ(this.y)
this.d.i5(t,s,u)}},
iy:function(a){var u
H.f(a,"$iaE")
this.a.focus()
this.f=!0
this.cm(a)
u=this.cf(a)
if(this.e.kB(u))a.preventDefault()},
iu:function(a){var u
H.f(a,"$iaE")
this.cm(a)
u=this.cf(a)
if(this.e.kz(u))a.preventDefault()},
iw:function(a){var u
H.f(a,"$iaE")
this.cm(a)
u=this.cf(a)
if(this.e.kA(u))a.preventDefault()},
sha:function(a){this.z=H.h(a,"$ia",[[P.cj,P.L]],"$aa")}}
D.d0.prototype={$iZ:1,$iaO:1}
D.Z.prototype={$iaO:1}
D.dg.prototype={
gl:function(){var u=this.Q
if(u==null){u=D.D()
this.Q=u}return u},
al:function(a){var u=this.Q
if(u!=null)u.D(a)},
dB:function(a){var u
H.f(a,"$ix")
u=this.ch
if(u!=null)u.D(a)},
i4:function(){return this.dB(null)},
ij:function(a){var u,t,s
H.h(a,"$ik",[D.Z],"$ak")
for(u=a.length,t=0;t<a.length;a.length===u||(0,H.z)(a),++t){s=a[t]
if(s==null||this.h1(s))return!1}return!0},
hE:function(a,b){var u,t,s,r,q,p,o,n
u=D.Z
H.h(b,"$ik",[u],"$ak")
for(t=b.length,s=this.gdA(),r={func:1,ret:-1,args:[D.x]},q=[r],p=0;p<b.length;b.length===t||(0,H.z)(b),++p){o=H.f(b[p],"$iZ")
if(o instanceof D.bk)C.a.h(this.f,o)
n=o.r
if(n==null){n=new D.bc()
n.sac(null)
n.sb2(null)
n.c=null
n.d=0
o.r=n}H.m(s,r)
if(n.a==null)n.sac(H.b([],q))
n=n.a;(n&&C.a).h(n,s)}u=new D.bf(a,b,this,[u])
u.b=!0
this.al(u)},
io:function(a,b){var u,t,s,r
u=D.Z
H.h(b,"$ik",[u],"$ak")
for(t=b.gU(b),s=this.gdA();t.B();){r=t.gN()
C.a.H(this.e,r)
r.gl().H(0,s)}u=new D.bg(a,b,this,[u])
u.b=!0
this.al(u)},
h1:function(a){var u=C.a.aA(this.f,a)
return u},
sfD:function(a){this.e=H.h(a,"$ia",[D.d0],"$aa")},
sfG:function(a){this.f=H.h(a,"$ia",[D.bk],"$aa")},
sfH:function(a){this.r=H.h(a,"$ia",[D.dA],"$aa")},
sfI:function(a){this.x=H.h(a,"$ia",[D.dI],"$aa")},
sfJ:function(a){this.y=H.h(a,"$ia",[D.dJ],"$aa")},
sfK:function(a){this.z=H.h(a,"$ia",[D.dK],"$aa")},
$ak:function(){return[D.Z]},
$aP:function(){return[D.Z]}}
D.bk.prototype={
gl:function(){var u=this.r
if(u==null){u=D.D()
this.r=u}return u},
al:function(a){var u
H.f(a,"$ix")
u=this.r
if(u!=null)u.D(a)},
fF:function(){return this.al(null)},
$iZ:1,
$iaO:1}
D.dA.prototype={$iZ:1,$iaO:1}
D.dI.prototype={$iZ:1,$iaO:1}
D.dJ.prototype={$iZ:1,$iaO:1}
D.dK.prototype={$iZ:1,$iaO:1}
V.T.prototype={
u:function(a,b){var u,t
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.T))return!1
u=b.a
t=$.A().a
if(!(Math.abs(u-this.a)<t))return!1
if(!(Math.abs(b.b-this.b)<t))return!1
if(!(Math.abs(b.c-this.c)<t))return!1
return!0},
i:function(a){return"["+V.G(this.a,3,0)+", "+V.G(this.b,3,0)+", "+V.G(this.c,3,0)+"]"}}
V.al.prototype={
u:function(a,b){var u,t
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.al))return!1
u=b.a
t=$.A().a
if(!(Math.abs(u-this.a)<t))return!1
if(!(Math.abs(b.b-this.b)<t))return!1
if(!(Math.abs(b.c-this.c)<t))return!1
if(!(Math.abs(b.d-this.d)<t))return!1
return!0},
i:function(a){return"["+V.G(this.a,3,0)+", "+V.G(this.b,3,0)+", "+V.G(this.c,3,0)+", "+V.G(this.d,3,0)+"]"}}
V.eF.prototype={}
V.c8.prototype={
a5:function(a,b){var u=H.b([this.a,this.d,this.r,this.b,this.e,this.x,this.c,this.f,this.y],[P.q])
return u},
u:function(a,b){var u,t,s,r
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.c8))return!1
u=b.a
t=$.A()
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
if(typeof u!=="number")return u.G()
if(typeof r!=="number")return H.u(r)
if(!(Math.abs(u-r)<s))return!1
u=b.x
t=this.x
if(typeof u!=="number")return u.G()
if(typeof t!=="number")return H.u(t)
if(!(Math.abs(u-t)<s))return!1
u=b.y
t=this.y
if(typeof u!=="number")return u.G()
if(typeof t!=="number")return H.u(t)
if(!(Math.abs(u-t)<s))return!1
return!0},
i:function(a){var u,t,s,r,q,p,o,n
u=[P.q]
t=V.bR(H.b([this.a,this.d,this.r],u),3,0)
s=V.bR(H.b([this.b,this.e,this.x],u),3,0)
r=V.bR(H.b([this.c,this.f,this.y],u),3,0)
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
V.a7.prototype={
a5:function(a,b){var u=H.b([this.a,this.e,this.y,this.cx,this.b,this.f,this.z,this.cy,this.c,this.r,this.Q,this.db,this.d,this.x,this.ch,this.dx],[P.q])
return u},
eI:function(){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0
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
if(Math.abs(a7-0)<$.A().a)return V.bi()
a8=1/a7
a9=-r
b0=-d
return V.aN((t*a6-p*a5+m*a4)*a8,(-s*a6+o*a5-l*a4)*a8,(f*h-b*i+a1*j)*a8,(-e*h+a*i-a2*j)*a8,(a9*a6+p*a3-m*a0)*a8,(u*a6-o*a3+l*a0)*a8,(b0*h+b*k-a1*n)*a8,(g*h-a*k+a2*n)*a8,(r*a5-t*a3+m*c)*a8,(-u*a5+s*a3-l*c)*a8,(d*i-f*k+a1*q)*a8,(-g*i+e*k-a2*q)*a8,(a9*a4+t*a0-p*c)*a8,(u*a4-s*a0+o*c)*a8,(b0*j+f*n-b*q)*a8,(g*j-e*n+a*q)*a8)},
k:function(b1,b2){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0
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
return V.aN(u*t+s*r+q*p+o*n,u*m+s*l+q*k+o*j,u*i+s*h+q*g+o*f,u*e+s*d+q*c+o*b,a*t+a0*r+a1*p+a2*n,a*m+a0*l+a1*k+a2*j,a*i+a0*h+a1*g+a2*f,a*e+a0*d+a1*c+a2*b,a3*t+a4*r+a5*p+a6*n,a3*m+a4*l+a5*k+a6*j,a3*i+a4*h+a5*g+a6*f,a3*e+a4*d+a5*c+a6*b,a7*t+a8*r+a9*p+b0*n,a7*m+a8*l+a9*k+b0*j,a7*i+a8*h+a9*g+b0*f,a7*e+a8*d+a9*c+b0*b)},
f5:function(a){var u,t,s,r,q,p,o,n,m,l
u=C.h.k(this.a,a.ge7(a))
t=C.h.k(this.b,a.ge8(a))
s=C.h.k(this.c,a.ge9())
r=C.h.k(this.e,a.ge7(a))
q=C.h.k(this.f,a.ge8(a))
p=C.h.k(this.r,a.ge9())
o=this.y
n=a.ge7(a)
if(typeof o!=="number")return o.k()
n=C.h.k(o,n)
o=this.z
m=a.ge8(a)
if(typeof o!=="number")return o.k()
m=C.h.k(o,m)
o=this.Q
l=a.ge9()
if(typeof o!=="number")return o.k()
return new V.K(u+t+s,r+q+p,n+m+C.h.k(o,l))},
aZ:function(a){var u,t,s,r,q,p
u=a.a
t=a.b
s=a.c
if(typeof s!=="number")return H.u(s)
r=this.y
if(typeof r!=="number")return r.k()
q=this.z
if(typeof q!=="number")return q.k()
p=this.Q
if(typeof p!=="number")return p.k()
return new V.a_(this.a*u+this.b*t+this.c*s+this.d,this.e*u+this.f*t+this.r*s+this.x,r*u+q*t+p*s+this.ch)},
u:function(a,b){var u,t,s,r
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.a7))return!1
u=b.a
t=$.A()
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
if(typeof u!=="number")return u.G()
if(typeof r!=="number")return H.u(r)
if(!(Math.abs(u-r)<s))return!1
u=b.z
t=this.z
if(typeof u!=="number")return u.G()
if(typeof t!=="number")return H.u(t)
if(!(Math.abs(u-t)<s))return!1
u=b.Q
t=this.Q
if(typeof u!=="number")return u.G()
if(typeof t!=="number")return H.u(t)
if(!(Math.abs(u-t)<s))return!1
if(!(Math.abs(b.ch-this.ch)<s))return!1
if(!(Math.abs(b.cx-this.cx)<s))return!1
if(!(Math.abs(b.cy-this.cy)<s))return!1
if(!(Math.abs(b.db-this.db)<s))return!1
if(!(Math.abs(b.dx-this.dx)<s))return!1
return!0},
i:function(a){return this.P()},
ez:function(a,b,c){var u,t,s,r,q,p,o,n,m,l
u=[P.q]
t=V.bR(H.b([this.a,this.e,this.y,this.cx],u),b,c)
s=V.bR(H.b([this.b,this.f,this.z,this.cy],u),b,c)
r=V.bR(H.b([this.c,this.r,this.Q,this.db],u),b,c)
q=V.bR(H.b([this.d,this.x,this.ch,this.dx],u),b,c)
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
P:function(){return this.ez("",3,0)},
E:function(a){return this.ez(a,3,0)}}
V.a2.prototype={
G:function(a,b){return new V.a2(this.a-b.a,this.b-b.b)},
u:function(a,b){var u,t
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.a2))return!1
u=b.a
t=$.A().a
if(!(Math.abs(u-this.a)<t))return!1
if(!(Math.abs(b.b-this.b)<t))return!1
return!0},
i:function(a){return"["+V.G(this.a,3,0)+", "+V.G(this.b,3,0)+"]"}}
V.a_.prototype={
C:function(a,b){var u,t
u=this.c
t=b.c
if(typeof u!=="number")return u.C()
if(typeof t!=="number")return H.u(t)
return new V.a_(this.a+b.a,this.b+b.b,u+t)},
G:function(a,b){var u,t
u=this.c
t=b.c
if(typeof u!=="number")return u.G()
if(typeof t!=="number")return H.u(t)
return new V.a_(this.a-b.a,this.b-b.b,u-t)},
u:function(a,b){var u,t,s,r
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.a_))return!1
u=b.a
t=$.A()
s=t.a
if(!(Math.abs(u-this.a)<s))return!1
if(!(Math.abs(b.b-this.b)<s))return!1
u=b.c
r=this.c
t.toString
if(typeof u!=="number")return u.G()
if(typeof r!=="number")return H.u(r)
if(!(Math.abs(u-r)<s))return!1
return!0},
i:function(a){return"["+V.G(this.a,3,0)+", "+V.G(this.b,3,0)+", "+V.G(this.c,3,0)+"]"}}
V.aP.prototype={
u:function(a,b){var u,t
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.aP))return!1
u=b.a
t=$.A().a
if(!(Math.abs(u-this.a)<t))return!1
if(!(Math.abs(b.b-this.b)<t))return!1
if(!(Math.abs(b.c-this.c)<t))return!1
if(!(Math.abs(b.d-this.d)<t))return!1
return!0},
i:function(a){return"["+V.G(this.a,3,0)+", "+V.G(this.b,3,0)+", "+V.G(this.c,3,0)+", "+V.G(this.d,3,0)+"]"}}
V.bI.prototype={
gaC:function(){var u,t
u=this.c
t=this.d
if(u>t)return t
else return u},
u:function(a,b){var u,t
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.bI))return!1
u=b.a
t=$.A().a
if(!(Math.abs(u-this.a)<t))return!1
if(!(Math.abs(b.b-this.b)<t))return!1
if(!(Math.abs(b.c-this.c)<t))return!1
if(!(Math.abs(b.d-this.d)<t))return!1
return!0},
i:function(a){return"["+V.G(this.a,3,0)+", "+V.G(this.b,3,0)+", "+V.G(this.c,3,0)+", "+V.G(this.d,3,0)+"]"}}
V.S.prototype={
cK:function(a){return Math.sqrt(this.I(this))},
I:function(a){var u,t,s,r
u=this.a
t=a.a
if(typeof u!=="number")return u.k()
if(typeof t!=="number")return H.u(t)
s=this.b
r=a.b
if(typeof s!=="number")return s.k()
if(typeof r!=="number")return H.u(r)
return u*t+s*r},
k:function(a,b){var u,t
u=this.a
if(typeof u!=="number")return u.k()
t=this.b
if(typeof t!=="number")return t.k()
return new V.S(u*b,t*b)},
A:function(a,b){var u,t
if(Math.abs(b-0)<$.A().a){u=$.k_
if(u==null){u=new V.S(0,0)
$.k_=u}return u}u=this.a
if(typeof u!=="number")return u.A()
t=this.b
if(typeof t!=="number")return t.A()
return new V.S(u/b,t/b)},
u:function(a,b){var u,t,s
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.S))return!1
u=b.a
t=this.a
s=$.A()
s.toString
if(typeof u!=="number")return u.G()
if(typeof t!=="number")return H.u(t)
s=s.a
if(!(Math.abs(u-t)<s))return!1
u=b.b
t=this.b
if(typeof u!=="number")return u.G()
if(typeof t!=="number")return H.u(t)
if(!(Math.abs(u-t)<s))return!1
return!0},
i:function(a){return"["+V.G(this.a,3,0)+", "+V.G(this.b,3,0)+"]"}}
V.K.prototype={
cK:function(a){return Math.sqrt(this.I(this))},
I:function(a){var u,t
u=this.c
t=a.c
if(typeof u!=="number")return u.k()
if(typeof t!=="number")return H.u(t)
return this.a*a.a+this.b*a.b+u*t},
cL:function(a,b){var u,t,s,r
u=this.a
t=this.b
s=this.c
r=a.c
if(typeof r!=="number")return r.G()
if(typeof s!=="number")return H.u(s)
return new V.K(u+b*(a.a-u),t+b*(a.b-t),s+b*(r-s))},
b6:function(a){var u,t,s,r,q,p
u=this.b
t=a.c
if(typeof t!=="number")return H.u(t)
s=this.c
r=a.b
if(typeof s!=="number")return s.k()
q=a.a
p=this.a
return new V.K(u*t-s*r,s*q-p*t,p*r-u*q)},
C:function(a,b){var u,t,s,r
u=b.a
t=b.b
s=this.c
r=b.c
if(typeof s!=="number")return s.C()
if(typeof r!=="number")return H.u(r)
return new V.K(this.a+u,this.b+t,s+r)},
S:function(a){var u=this.c
if(typeof u!=="number")return u.S()
return new V.K(-this.a,-this.b,-u)},
k:function(a,b){var u=this.c
if(typeof u!=="number")return u.k()
return new V.K(this.a*b,this.b*b,u*b)},
A:function(a,b){var u
if(Math.abs(b-0)<$.A().a)return V.cv()
u=this.c
if(typeof u!=="number")return u.A()
return new V.K(this.a/b,this.b/b,u/b)},
eJ:function(){var u,t,s
u=$.A()
t=u.a
if(!(Math.abs(0-this.a)<t))return!1
if(!(Math.abs(0-this.b)<t))return!1
s=this.c
u.toString
if(typeof s!=="number")return H.u(s)
if(!(Math.abs(0-s)<t))return!1
return!0},
u:function(a,b){var u,t,s,r
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.K))return!1
u=b.a
t=$.A()
s=t.a
if(!(Math.abs(u-this.a)<s))return!1
if(!(Math.abs(b.b-this.b)<s))return!1
u=b.c
r=this.c
t.toString
if(typeof u!=="number")return u.G()
if(typeof r!=="number")return H.u(r)
if(!(Math.abs(u-r)<s))return!1
return!0},
i:function(a){return"["+V.G(this.a,3,0)+", "+V.G(this.b,3,0)+", "+V.G(this.c,3,0)+"]"}}
U.et.prototype={
c4:function(a){var u=V.iI(a,this.c,this.b)
return u},
gl:function(){var u=this.y
if(u==null){u=D.D()
this.y=u}return u},
O:function(a){var u=this.y
if(u!=null)u.D(a)},
sfb:function(a,b){},
seK:function(a){var u,t
u=this.b
if(!(Math.abs(u-a)<$.A().a)){this.b=a
if(a<this.c){this.c=a
this.d=a}else{t=this.d
if(a<t)this.d=this.c4(t)}u=new D.v("maximumLocation",u,this.b,this,[P.q])
u.b=!0
this.O(u)}},
seM:function(a){var u,t
u=this.c
if(!(Math.abs(u-a)<$.A().a)){this.c=a
if(this.b<a){this.b=a
this.d=a}else{t=this.d
if(a>t)this.d=this.c4(t)}u=new D.v("minimumLocation",u,this.c,this,[P.q])
u.b=!0
this.O(u)}},
sa8:function(a,b){var u
b=this.c4(b)
u=this.d
if(!(Math.abs(u-b)<$.A().a)){this.d=b
u=new D.v("location",u,b,this,[P.q])
u.b=!0
this.O(u)}},
seL:function(a){var u,t,s
u=this.e
if(!(Math.abs(u-a)<$.A().a)){this.e=a
t=this.f
s=-a
if(t<s)t=s
else if(t>a)t=a
this.f=t
u=new D.v("maximumVelocity",u,a,this,[P.q])
u.b=!0
this.O(u)}},
sa3:function(a){var u,t
u=this.e
t=-u
if(a<t)a=t
else if(a>u)a=u
u=this.f
if(!(Math.abs(u-a)<$.A().a)){this.f=a
u=new D.v("velocity",u,a,this,[P.q])
u.b=!0
this.O(u)}},
se2:function(a){var u
if(a<0)a=0
else if(a>1)a=1
u=this.x
if(!(Math.abs(u-a)<$.A().a)){this.x=a
u=new D.v("dampening",u,a,this,[P.q])
u.b=!0
this.O(u)}},
aa:function(a){var u,t,s,r,q
u=this.f
t=$.A().a
if(!(Math.abs(u-0)<t)||!(Math.abs(this.r-0)<t)){s=u+this.r*a
u=this.e
r=-u
if(s<r)s=r
else if(s>u)s=u
this.sa8(0,this.d+s*a)
u=this.x
if(!(Math.abs(u-0)<$.A().a)){q=s*Math.pow(1-u,a)
if(s<0){if(q<s)q=s
else if(q>0)q=0}else if(q<0)q=0
else if(q>s)q=s
s=q}this.sa3(s)}}}
U.cX.prototype={
gl:function(){var u=this.b
if(u==null){u=D.D()
this.b=u}return u},
aE:function(a,b){return this.a},
u:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.cX))return!1
return J.I(this.a,b.a)},
i:function(a){return"Constant: "+this.a.E("          ")}}
U.c3.prototype={
gl:function(){var u=this.e
if(u==null){u=D.D()
this.e=u}return u},
O:function(a){var u
H.f(a,"$ix")
u=this.e
if(u!=null)u.D(a)},
aw:function(){return this.O(null)},
fM:function(a,b){var u,t,s,r,q,p,o,n
u=U.a9
H.h(b,"$ik",[u],"$ak")
for(t=b.length,s=this.gbo(),r={func:1,ret:-1,args:[D.x]},q=[r],p=0;p<b.length;b.length===t||(0,H.z)(b),++p){o=b[p]
if(o!=null){n=o.gl()
n.toString
H.m(s,r)
if(n.a==null)n.sac(H.b([],q))
n=n.a;(n&&C.a).h(n,s)}}u=new D.bf(a,b,this,[u])
u.b=!0
this.O(u)},
il:function(a,b){var u,t,s
u=U.a9
H.h(b,"$ik",[u],"$ak")
for(t=b.gU(b),s=this.gbo();t.B();)t.gN().gl().H(0,s)
u=new D.bg(a,b,this,[u])
u.b=!0
this.O(u)},
aE:function(a,b){var u,t,s,r
u=this.r
t=a.e
if(typeof u!=="number")return u.W()
if(u<t){this.r=t
u=this.e
if(u!=null)++u.d
for(u=this.a,u=new J.ag(u,u.length,0,[H.t(u,0)]),s=null;u.B();){t=u.d
if(t!=null){r=t.aE(a,b)
if(r!=null)s=s==null?r:r.k(0,s)}}this.f=s==null?V.bi():s
u=this.e
if(u!=null)u.af()}return this.f},
u:function(a,b){var u,t,s,r
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.c3))return!1
u=this.a.length
for(t=0;t<u;++t){s=this.a
if(t>=s.length)return H.c(s,t)
s=s[t]
r=b.a
if(t>=r.length)return H.c(r,t)
if(!J.I(s,r[t]))return!1}return!0},
i:function(a){return"Group"},
$ak:function(){return[U.a9]},
$aP:function(){return[U.a9]},
$ia9:1}
U.a9.prototype={}
U.dx.prototype={
gl:function(){var u=this.y
if(u==null){u=D.D()
this.y=u}return u},
O:function(a){var u=this.y
if(u!=null)u.D(a)},
sfc:function(a){var u
a=V.iI(a,0,6.283185307179586)
u=this.a
if(!(Math.abs(u-a)<$.A().a)){this.a=a
u=new D.v("yaw",u,a,this,[P.q])
u.b=!0
this.O(u)}},
seW:function(a){var u
a=V.iI(a,0,6.283185307179586)
u=this.b
if(!(Math.abs(u-a)<$.A().a)){this.b=a
u=new D.v("pitch",u,a,this,[P.q])
u.b=!0
this.O(u)}},
sf_:function(a){var u
a=V.iI(a,0,6.283185307179586)
u=this.c
if(!(Math.abs(u-a)<$.A().a)){this.c=a
u=new D.v("roll",u,a,this,[P.q])
u.b=!0
this.O(u)}},
aE:function(a,b){var u,t,s,r
u=this.r
t=a.e
if(u<t){this.r=t
u=this.y
if(u!=null)++u.d
this.sfc(this.a+this.d*a.y)
this.seW(this.b+this.e*a.y)
this.sf_(this.c+this.f*a.y)
u=this.c
s=Math.cos(u)
r=Math.sin(u)
this.x=V.aN(s,-r,0,0,r,s,0,0,0,0,1,0,0,0,0,1).k(0,V.jG(this.b)).k(0,V.jF(this.a))
u=this.y
if(u!=null)u.af()}return this.x},
u:function(a,b){var u,t,s
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.dx))return!1
u=this.a
t=b.a
s=$.A().a
if(!(Math.abs(u-t)<s))return!1
if(!(Math.abs(this.b-b.b)<s))return!1
if(!(Math.abs(this.c-b.c)<s))return!1
if(!(Math.abs(this.d-b.d)<s))return!1
if(!(Math.abs(this.e-b.e)<s))return!1
if(!(Math.abs(this.f-b.f)<s))return!1
return!0},
i:function(a){return"Rotater: ["+V.G(this.a,3,0)+", "+V.G(this.b,3,0)+", "+V.G(this.c,3,0)+"], ["+V.G(this.d,3,0)+", "+V.G(this.e,3,0)+", "+V.G(this.f,3,0)+"]"}}
U.dU.prototype={
gl:function(){var u=this.fx
if(u==null){u=D.D()
this.fx=u}return u},
O:function(a){var u
H.f(a,"$ix")
u=this.fx
if(u!=null)u.D(a)},
aw:function(){return this.O(null)},
cp:function(a){var u,t
if(this.a!=null)return!1
this.a=a
u=a.c
t=u.b
if(t==null){t=D.D()
u.b=t
u=t}else u=t
u.h(0,this.ghv())
u=this.a.c
t=u.d
if(t==null){t=D.D()
u.d=t
u=t}else u=t
u.h(0,this.ghx())
u=this.a.c
t=u.c
if(t==null){t=D.D()
u.c=t
u=t}else u=t
u.h(0,this.ghz())
u=this.a.d
t=u.f
if(t==null){t=D.D()
u.f=t
u=t}else u=t
u.h(0,this.ghr())
u=this.a.d
t=u.d
if(t==null){t=D.D()
u.d=t
u=t}else u=t
u.h(0,this.ght())
u=this.a.e
t=u.b
if(t==null){t=D.D()
u.b=t
u=t}else u=t
u.h(0,this.gja())
u=this.a.e
t=u.d
if(t==null){t=D.D()
u.d=t
u=t}else u=t
u.h(0,this.gj8())
u=this.a.e
t=u.c
if(t==null){t=D.D()
u.c=t
u=t}else u=t
u.h(0,this.gj6())
return!0},
av:function(a){var u,t
u=a.a
t=a.b
if(this.f){if(typeof u!=="number")return u.S()
u=-u}if(this.r){if(typeof t!=="number")return t.S()
t=-t}return new V.S(u,t)},
hw:function(a){a=H.d(H.f(a,"$ix"),"$ibj")
if(!J.I(this.d,a.x.b))return
this.cx=!0
this.ch=!0
this.cy=this.c.d
this.db=this.b.d},
hy:function(a){var u,t,s,r,q,p,o
a=H.d(H.f(a,"$ix"),"$ibj")
if(!this.cx)return
if(this.ch){u=a.d.G(0,a.y)
u=new V.S(u.a,u.b)
u=u.I(u)
t=this.Q
if(typeof t!=="number")return H.u(t)
if(u<t)return
this.ch=!1}if(this.e){u=a.c
t=a.d.G(0,a.y)
u=this.av(new V.S(t.a,t.b).k(0,2).A(0,u.gaC()))
this.dx=u
t=this.c
u=u.a
if(typeof u!=="number")return u.S()
s=this.y
if(typeof s!=="number")return H.u(s)
t.sa3(-u*10*s)
s=this.b
u=this.dx.b
if(typeof u!=="number")return u.S()
t=this.x
if(typeof t!=="number")return H.u(t)
s.sa3(-u*10*t)}else{u=a.c
t=a.d
s=t.G(0,a.y)
r=this.av(new V.S(s.a,s.b).k(0,2).A(0,u.gaC()))
s=this.c
q=r.a
if(typeof q!=="number")return q.S()
p=this.y
if(typeof p!=="number")return H.u(p)
o=this.cy
if(typeof o!=="number")return H.u(o)
s.sa8(0,-q*p+o)
o=this.b
p=r.b
if(typeof p!=="number")return p.S()
q=this.x
if(typeof q!=="number")return H.u(q)
s=this.db
if(typeof s!=="number")return H.u(s)
o.sa8(0,-p*q+s)
this.b.sa3(0)
this.c.sa3(0)
t=t.G(0,a.z)
this.dx=this.av(new V.S(t.a,t.b).k(0,2).A(0,u.gaC()))}this.aw()},
hA:function(a){var u,t,s
H.f(a,"$ix")
if(!this.cx)return
this.cx=!1
if(this.ch)return
u=this.dx
if(u.I(u)>0.0001){u=this.c
t=this.dx.a
if(typeof t!=="number")return t.S()
s=this.y
if(typeof s!=="number")return H.u(s)
u.sa3(-t*10*s)
s=this.b
t=this.dx.b
if(typeof t!=="number")return t.S()
u=this.x
if(typeof u!=="number")return H.u(u)
s.sa3(-t*10*u)
this.aw()}},
hs:function(a){if(H.d(H.f(a,"$ix"),"$idi").x){this.ch=!0
this.cy=this.c.d
this.db=this.b.d}},
hu:function(a){var u,t,s,r,q,p,o
a=H.d(H.f(a,"$ix"),"$ibj")
if(!J.I(this.d,a.x.b))return
u=a.c
t=a.d
s=t.G(0,a.y)
r=this.av(new V.S(s.a,s.b).k(0,2).A(0,u.gaC()))
s=this.c
q=r.a
if(typeof q!=="number")return q.S()
p=this.y
if(typeof p!=="number")return H.u(p)
o=this.cy
if(typeof o!=="number")return H.u(o)
s.sa8(0,-q*p+o)
o=this.b
p=r.b
if(typeof p!=="number")return p.S()
q=this.x
if(typeof q!=="number")return H.u(q)
s=this.db
if(typeof s!=="number")return H.u(s)
o.sa8(0,-p*q+s)
this.b.sa3(0)
this.c.sa3(0)
t=t.G(0,a.z)
this.dx=this.av(new V.S(t.a,t.b).k(0,2).A(0,u.gaC()))
this.aw()},
jb:function(a){H.f(a,"$ix")
this.cx=!0
this.ch=!0
this.cy=this.c.d
this.db=this.b.d},
j9:function(a){var u,t,s,r,q,p,o
a=H.d(H.f(a,"$ix"),"$idN")
if(!this.cx)return
if(this.ch){u=a.d.G(0,a.y)
u=new V.S(u.a,u.b)
u=u.I(u)
t=this.Q
if(typeof t!=="number")return H.u(t)
if(u<t)return
this.ch=!1}if(this.e){u=a.c
t=a.d.G(0,a.y)
u=this.av(new V.S(t.a,t.b).k(0,2).A(0,u.gaC()))
this.dx=u
t=this.c
u=u.a
if(typeof u!=="number")return u.S()
s=this.y
if(typeof s!=="number")return H.u(s)
t.sa3(-u*10*s)
s=this.b
u=this.dx.b
if(typeof u!=="number")return u.S()
t=this.x
if(typeof t!=="number")return H.u(t)
s.sa3(-u*10*t)}else{u=a.c
t=a.d
s=t.G(0,a.y)
r=this.av(new V.S(s.a,s.b).k(0,2).A(0,u.gaC()))
s=this.c
q=r.a
if(typeof q!=="number")return q.S()
p=this.y
if(typeof p!=="number")return H.u(p)
o=this.cy
if(typeof o!=="number")return H.u(o)
s.sa8(0,-q*p+o)
o=this.b
p=r.b
if(typeof p!=="number")return p.S()
q=this.x
if(typeof q!=="number")return H.u(q)
s=this.db
if(typeof s!=="number")return H.u(s)
o.sa8(0,-p*q+s)
this.b.sa3(0)
this.c.sa3(0)
t=t.G(0,a.z)
this.dx=this.av(new V.S(t.a,t.b).k(0,2).A(0,u.gaC()))}this.aw()},
j7:function(a){var u,t,s
H.f(a,"$ix")
if(!this.cx)return
this.cx=!1
if(this.ch)return
u=this.dx
if(u.I(u)>0.0001){u=this.c
t=this.dx.a
if(typeof t!=="number")return t.S()
s=this.y
if(typeof s!=="number")return H.u(s)
u.sa3(-t*10*s)
s=this.b
t=this.dx.b
if(typeof t!=="number")return t.S()
u=this.x
if(typeof u!=="number")return H.u(u)
s.sa3(-t*10*u)
this.aw()}},
aE:function(a,b){var u,t,s
u=this.dy
t=a.e
if(typeof u!=="number")return u.W()
if(u<t){this.dy=t
s=a.y
this.c.aa(s)
this.b.aa(s)
this.fr=V.jF(this.b.d).k(0,V.jG(this.c.d))}return this.fr},
$ia9:1}
U.dV.prototype={
gl:function(){var u=this.r
if(u==null){u=D.D()
this.r=u}return u},
O:function(a){var u=this.r
if(u!=null)u.D(a)},
cp:function(a){var u,t,s
if(this.a!=null)return!1
this.a=a
u=a.c
t=u.e
if(t==null){t=D.D()
u.e=t
u=t}else u=t
t=this.ghB()
u.h(0,t)
u=this.a.d
s=u.e
if(s==null){s=D.D()
u.e=s
u=s}else u=s
u.h(0,t)
return!0},
hC:function(a){var u,t,s,r
H.f(a,"$ix")
if(!J.I(this.b,this.a.b.c))return
H.d(a,"$icb")
u=this.d
t=a.x.b
s=this.c
if(typeof t!=="number")return t.k()
r=u+t*s
if(u!==r){this.d=r
u=new D.v("zoom",u,r,this,[P.q])
u.b=!0
this.O(u)}},
aE:function(a,b){var u,t,s
u=this.e
t=a.e
if(u<t){this.e=t
s=Math.pow(10,this.d)
this.f=V.aN(s,0,0,0,0,s,0,0,0,0,s,0,0,0,0,1)}return this.f},
$ia9:1}
M.cW.prototype={
gl:function(){var u=this.f
if(u==null){u=D.D()
this.f=u}return u},
X:function(a){var u
H.f(a,"$ix")
u=this.f
if(u!=null)u.D(a)},
b_:function(){return this.X(null)},
iq:function(a,b){var u,t,s,r,q,p,o,n
u=M.ap
H.h(b,"$ik",[u],"$ak")
for(t=b.length,s=this.ga0(),r={func:1,ret:-1,args:[D.x]},q=[r],p=0;p<b.length;b.length===t||(0,H.z)(b),++p){o=b[p]
if(o!=null){n=o.gl()
n.toString
H.m(s,r)
if(n.a==null)n.sac(H.b([],q))
n=n.a;(n&&C.a).h(n,s)}}u=new D.bf(a,b,this,[u])
u.b=!0
this.X(u)},
is:function(a,b){var u,t,s
u=M.ap
H.h(b,"$ik",[u],"$ak")
for(t=b.gU(b),s=this.ga0();t.B();)t.gN().gl().H(0,s)
u=new D.bg(a,b,this,[u])
u.b=!0
this.X(u)},
a9:function(a){var u,t
if(this.e)return
this.e=!0
for(u=this.a,u=new J.ag(u,u.length,0,[H.t(u,0)]);u.B();){t=u.d
if(t!=null)t.a9(a)}this.e=!1},
$ak:function(){return[M.ap]},
$aP:function(){return[M.ap]},
$iap:1}
M.cY.prototype={
gl:function(){var u=this.f
if(u==null){u=D.D()
this.f=u}return u},
X:function(a){var u
H.f(a,"$ix")
u=this.f
if(u!=null)u.D(a)},
b_:function(){return this.X(null)},
saY:function(a,b){var u,t
if(b==null)b=X.iP(!0,!0,!1,null,2000,null,0)
u=this.b
if(u!==b){if(u!=null)u.gl().H(0,this.ga0())
t=this.b
this.b=b
b.gl().h(0,this.ga0())
u=new D.v("target",t,this.b,this,[X.ck])
u.b=!0
this.X(u)}},
sai:function(a){var u,t
u=this.c
if(u!=a){if(u!=null)u.gl().H(0,this.ga0())
t=this.c
this.c=a
if(a!=null)a.gl().h(0,this.ga0())
u=new D.v("technique",t,this.c,this,[O.b4])
u.b=!0
this.X(u)}},
a9:function(a){var u,t
a.cR(this.c)
this.b.V(a)
u=this.a
u.toString
a.cy.bR(V.bi())
t=V.bi()
u.a
a.db.bR(t)
u=this.c
if(u!=null)u.aa(a)
this.d.aa(a)
this.d.a9(a)
this.a.toString
a.cy.bf()
a.db.bf()
this.b.toString
a.cP()},
$iap:1}
M.d2.prototype={
X:function(a){var u
H.f(a,"$ix")
u=this.x
if(u!=null)u.D(a)},
b_:function(){return this.X(null)},
hM:function(a,b){var u,t,s,r,q,p,o,n
u=E.aa
H.h(b,"$ik",[u],"$ak")
for(t=b.length,s=this.ga0(),r={func:1,ret:-1,args:[D.x]},q=[r],p=0;p<b.length;b.length===t||(0,H.z)(b),++p){o=b[p]
if(o!=null){n=o.z
if(n==null){n=new D.bc()
n.sac(null)
n.sb2(null)
n.c=null
n.d=0
o.z=n}H.m(s,r)
if(n.a==null)n.sac(H.b([],q))
n=n.a;(n&&C.a).h(n,s)}}u=new D.bf(a,b,this,[u])
u.b=!0
this.X(u)},
hO:function(a,b){var u,t,s
u=E.aa
H.h(b,"$ik",[u],"$ak")
for(t=b.gU(b),s=this.ga0();t.B();)t.gN().gl().H(0,s)
u=new D.bg(a,b,this,[u])
u.b=!0
this.X(u)},
scu:function(a){var u,t
if(a==null)a=X.jK(2000,1.0471975511965976,null,0.1,null)
u=this.a
if(u!==a){if(u!=null)u.gl().H(0,this.ga0())
t=this.a
this.a=a
a.gl().h(0,this.ga0())
u=new D.v("camera",t,this.a,this,[X.bu])
u.b=!0
this.X(u)}},
saY:function(a,b){var u,t
u=this.b
if(u!==b){if(u!=null)u.gl().H(0,this.ga0())
t=this.b
this.b=b
b.gl().h(0,this.ga0())
u=new D.v("target",t,this.b,this,[X.ck])
u.b=!0
this.X(u)}},
sai:function(a){var u,t
u=this.c
if(u!=a){if(u!=null)u.gl().H(0,this.ga0())
t=this.c
this.c=a
if(a!=null)a.gl().h(0,this.ga0())
u=new D.v("technique",t,this.c,this,[O.b4])
u.b=!0
this.X(u)}},
gl:function(){var u=this.x
if(u==null){u=D.D()
this.x=u}return u},
a9:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
a.cR(this.c)
this.b.V(a)
u=this.a
t=a.c
s=a.d
r=u.c
q=u.d
p=u.e
o=p-q
n=1/Math.tan(r*0.5)
m=V.aN(-n/(t/s),0,0,0,0,n,0,0,0,0,p/o,-p*q/o,0,0,1,0)
u.a
a.cy.bR(m)
t=$.jL
if(t==null){t=V.jN()
s=$.k1
if(s==null){s=new V.K(0,1,0)
$.k1=s}r=$.k0
if(r==null){r=new V.K(0,0,-1)
$.k0=r}l=r.A(0,Math.sqrt(r.I(r)))
s=s.b6(l)
k=s.A(0,Math.sqrt(s.I(s)))
j=l.b6(k)
i=new V.K(t.a,t.b,t.c)
h=k.S(0).I(i)
g=j.S(0).I(i)
f=l.S(0).I(i)
t=V.aN(k.a,j.a,l.a,h,k.b,j.b,l.b,g,k.c,j.c,l.c,f,0,0,0,1)
$.jL=t
e=t}else e=t
t=u.b
if(t!=null){d=t.aE(a,u)
if(d!=null)e=d.k(0,e)}a.db.bR(e)
u=this.c
if(u!=null)u.aa(a)
for(u=this.d.a,u=new J.ag(u,u.length,0,[H.t(u,0)]);u.B();)u.d.aa(a)
for(u=this.d.a,u=new J.ag(u,u.length,0,[H.t(u,0)]);u.B();)u.d.a9(a)
this.a.toString
a.cy.bf()
a.db.bf()
this.b.aN(a)
a.cP()},
sfZ:function(a,b){this.d=H.h(b,"$iP",[E.aa],"$aP")},
$iap:1}
M.ap.prototype={}
A.cR.prototype={}
A.ei.prototype={
j:function(a,b){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<t;++s){r=u[s]
if(r.b===b)return r}return},
k0:function(){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<u.length;u.length===t||(0,H.z)(u),++s){r=u[s]
C.b.eb(r.a,r.c)}},
bx:function(){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<u.length;u.length===t||(0,H.z)(u),++s){r=u[s]
C.b.e6(r.a,r.c)}}}
A.d_.prototype={}
A.d6.prototype={
ad:function(a,b,c){if(c==null||!c.d)C.b.M(b.a,b.d,1)
else{a.d1(c)
C.b.M(b.a,b.d,0)}}}
A.dk.prototype={
fu:function(a6,a7){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5
this.z=a6
u=new P.aj("")
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
a6.jk(u)
a6.jr(u)
a6.jl(u)
a6.jz(u)
a6.jA(u)
a6.jt(u)
a6.jE(u)
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
u=new P.aj("")
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
q.jo(u)
q.jj(u)
q.jm(u)
q.jp(u)
q.jx(u)
o=q.dy
if(o){m=u.a+="// === Enviromental ===\n"
m+="\n"
u.a=m
m+="uniform samplerCube envSampler;\n"
u.a=m
m+="uniform int nullEnvTxt;\n"
u.a=m
u.a=m+"\n"
q.jv(u)
q.jw(u)}q.js(u)
m=u.a+="// === Alpha ===\n"
m+="\n"
u.a=m
l=q.y
if(l!==C.d){m+="uniform float alpha;\n"
u.a=m
if(l!==C.j){m+="uniform int nullAlphaTxt;\n"
u.a=m
if(l===C.f){m+="uniform sampler2D alphaTxt;\n"
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
case C.f:m+="   if(nullAlphaTxt > 0) return alpha;\n"
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
k=H.b([],[P.l])
if(q.b!==C.d)C.a.h(k,"ambient()")
if(q.c!==C.d)C.a.h(k,"diffuse(norm, litVec)")
if(q.d!==C.d)C.a.h(k,"invDiffuse(norm, litVec)")
if(q.e!==C.d)C.a.h(k,"specular(norm, litVec)")
m=u.a+="   return litClr*("+C.a.F(k," + ")+");\n"
m+="}\n"
u.a=m
u.a=m+"\n"
q.jn(u)
q.ju(u)
q.jy(u)
q.jB(u)
q.jC(u)
q.jD(u)
q.jq(u)}m=u.a+="// === Main ===\n"
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
j=H.b([],[P.l])
if(l){u.a+="   vec3 lightAccum = vec3(0.0, 0.0, 0.0);\n"
C.a.h(j,"lightAccum")
if(q.c!==C.d)u.a+="   setDiffuseColor();\n"
if(q.d!==C.d)u.a+="   setInvDiffuseColor();\n"
if(q.e!==C.d)u.a+="   setSpecularColor();\n"
if(q.z>0)u.a+="   lightAccum += allDirLightValues(norm);\n"
if(q.Q>0)u.a+="   lightAccum += allPointLightValues(norm);\n"
if(q.ch>0)u.a+="   lightAccum += allSpotLightValues(norm);\n"
if(q.cx>0)u.a+="   lightAccum += allTxtDirLightValues(norm);\n"
if(q.cy>0)u.a+="   lightAccum += allTxtPointLightValues(norm);\n"
if(q.db>0)u.a+="   lightAccum += allTxtSpotLightValues(norm);\n"
if(q.dx<=0)u.a+="   lightAccum += nonLightValues(norm);\n"}if(q.a!==C.d)C.a.h(j,"emission()")
if(q.r!==C.d)C.a.h(j,"reflect(refl)")
if(q.x!==C.d)C.a.h(j,"refract(refl)")
if(j.length<=0)C.a.h(j,"vec3(0.0, 0.0, 0.0)")
i="vec4("+C.a.F(j," + ")+", alpha);"
q=u.a
if(n){q+="   gl_FragColor = colorMat*"+i+"\n"
u.a=q}else{q+="   gl_FragColor = "+i+"\n"
u.a=q}q+="}\n"
u.a=q
this.bN(s.charCodeAt(0)==0?s:s,q.charCodeAt(0)==0?q:q)
this.Q=this.x.j(0,"posAttr")
this.cx=this.x.j(0,"normAttr")
this.ch=this.x.j(0,"binmAttr")
this.cy=this.x.j(0,"txt2DAttr")
this.db=this.x.j(0,"txtCubeAttr")
this.dx=this.x.j(0,"bendAttr")
if(a6.fr)this.id=H.d(this.y.m(0,"invViewMat"),"$ia3")
if(t)this.dy=H.d(this.y.m(0,"objMat"),"$ia3")
if(r)this.fr=H.d(this.y.m(0,"viewObjMat"),"$ia3")
this.fy=H.d(this.y.m(0,"projViewObjMat"),"$ia3")
if(a6.x2)this.k1=H.d(this.y.m(0,"txt2DMat"),"$ibK")
if(a6.y1)this.k2=H.d(this.y.m(0,"txtCubeMat"),"$ia3")
if(a6.y2)this.k3=H.d(this.y.m(0,"colorMat"),"$ia3")
this.sfU(H.b([],[A.a3]))
t=a6.aB
if(t>0){this.k4=H.f(this.y.m(0,"bendMatCount"),"$iC")
for(h=0;h<t;++h){s=this.r1
r=this.y
q="bendValues["+h+"].mat"
g=r.j(0,q)
if(g==null)H.o(P.r("Required uniform value, "+q+", was not defined or used in shader."));(s&&C.a).h(s,H.d(g,"$ia3"))}}t=a6.a
if(t!==C.d){this.r2=H.d(this.y.m(0,"emissionClr"),"$iE")
switch(t){case C.d:break
case C.j:break
case C.f:this.rx=H.d(this.y.m(0,"emissionTxt"),"$ia0")
this.x1=H.d(this.y.m(0,"nullEmissionTxt"),"$iC")
break
case C.i:this.ry=H.d(this.y.m(0,"emissionTxt"),"$iak")
this.x1=H.d(this.y.m(0,"nullEmissionTxt"),"$iC")
break}}t=a6.b
if(t!==C.d){this.x2=H.d(this.y.m(0,"ambientClr"),"$iE")
switch(t){case C.d:break
case C.j:break
case C.f:this.y1=H.d(this.y.m(0,"ambientTxt"),"$ia0")
this.aB=H.d(this.y.m(0,"nullAmbientTxt"),"$iC")
break
case C.i:this.y2=H.d(this.y.m(0,"ambientTxt"),"$iak")
this.aB=H.d(this.y.m(0,"nullAmbientTxt"),"$iC")
break}}t=a6.c
if(t!==C.d){this.at=H.d(this.y.m(0,"diffuseClr"),"$iE")
switch(t){case C.d:break
case C.j:break
case C.f:this.by=H.d(this.y.m(0,"diffuseTxt"),"$ia0")
this.bz=H.d(this.y.m(0,"nullDiffuseTxt"),"$iC")
break
case C.i:this.ec=H.d(this.y.m(0,"diffuseTxt"),"$iak")
this.bz=H.d(this.y.m(0,"nullDiffuseTxt"),"$iC")
break}}t=a6.d
if(t!==C.d){this.bA=H.d(this.y.m(0,"invDiffuseClr"),"$iE")
switch(t){case C.d:break
case C.j:break
case C.f:this.ed=H.d(this.y.m(0,"invDiffuseTxt"),"$ia0")
this.bB=H.d(this.y.m(0,"nullInvDiffuseTxt"),"$iC")
break
case C.i:this.ee=H.d(this.y.m(0,"invDiffuseTxt"),"$iak")
this.bB=H.d(this.y.m(0,"nullInvDiffuseTxt"),"$iC")
break}}t=a6.e
if(t!==C.d){this.bE=H.d(this.y.m(0,"shininess"),"$iM")
this.bC=H.d(this.y.m(0,"specularClr"),"$iE")
switch(t){case C.d:break
case C.j:break
case C.f:this.ef=H.d(this.y.m(0,"specularTxt"),"$ia0")
this.bD=H.d(this.y.m(0,"nullSpecularTxt"),"$iC")
break
case C.i:this.eg=H.d(this.y.m(0,"specularTxt"),"$iak")
this.bD=H.d(this.y.m(0,"nullSpecularTxt"),"$iC")
break}}switch(a6.f){case C.d:break
case C.j:break
case C.f:this.eh=H.d(this.y.m(0,"bumpTxt"),"$ia0")
this.bF=H.d(this.y.m(0,"nullBumpTxt"),"$iC")
break
case C.i:this.ei=H.d(this.y.m(0,"bumpTxt"),"$iak")
this.bF=H.d(this.y.m(0,"nullBumpTxt"),"$iC")
break}if(a6.dy){this.ej=H.d(this.y.m(0,"envSampler"),"$iak")
this.ek=H.d(this.y.m(0,"nullEnvTxt"),"$iC")
t=a6.r
if(t!==C.d){this.bG=H.d(this.y.m(0,"reflectClr"),"$iE")
switch(t){case C.d:break
case C.j:break
case C.f:this.el=H.d(this.y.m(0,"reflectTxt"),"$ia0")
this.bH=H.d(this.y.m(0,"nullReflectTxt"),"$iC")
break
case C.i:this.em=H.d(this.y.m(0,"reflectTxt"),"$iak")
this.bH=H.d(this.y.m(0,"nullReflectTxt"),"$iC")
break}}t=a6.x
if(t!==C.d){this.bI=H.d(this.y.m(0,"refraction"),"$iM")
this.bJ=H.d(this.y.m(0,"refractClr"),"$iE")
switch(t){case C.d:break
case C.j:break
case C.f:this.en=H.d(this.y.m(0,"refractTxt"),"$ia0")
this.bK=H.d(this.y.m(0,"nullRefractTxt"),"$iC")
break
case C.i:this.eo=H.d(this.y.m(0,"refractTxt"),"$iak")
this.bK=H.d(this.y.m(0,"nullRefractTxt"),"$iC")
break}}}t=a6.y
if(t!==C.d){this.bL=H.d(this.y.m(0,"alpha"),"$iM")
switch(t){case C.d:break
case C.j:break
case C.f:this.ep=H.d(this.y.m(0,"alphaTxt"),"$ia0")
this.bM=H.d(this.y.m(0,"nullAlphaTxt"),"$iC")
break
case C.i:this.eq=H.d(this.y.m(0,"alphaTxt"),"$iak")
this.bM=H.d(this.y.m(0,"nullAlphaTxt"),"$iC")
break}}this.sh7(H.b([],[A.cn]))
this.siz(H.b([],[A.co]))
this.siY(H.b([],[A.cp]))
this.sjd(H.b([],[A.cq]))
this.sje(H.b([],[A.cr]))
this.sjf(H.b([],[A.cs]))
if(a6.k2){t=a6.z
if(t>0){this.er=H.f(this.y.m(0,"dirLightCount"),"$iC")
for(h=0;h<t;++h){s=this.y
r="dirLights["+h+"].viewDir"
g=s.j(0,r)
if(g==null)H.o(P.r("Required uniform value, "+r+", was not defined or used in shader."))
H.d(g,"$iE")
s=this.y
r="dirLights["+h+"].color"
f=s.j(0,r)
if(f==null)H.o(P.r("Required uniform value, "+r+", was not defined or used in shader."))
H.d(f,"$iE")
s=this.cA;(s&&C.a).h(s,new A.cn(h,g,f))}}t=a6.Q
if(t>0){this.es=H.f(this.y.m(0,"pntLightCount"),"$iC")
for(h=0;h<t;++h){s=this.y
r="pntLights["+h+"].point"
g=s.j(0,r)
if(g==null)H.o(P.r("Required uniform value, "+r+", was not defined or used in shader."))
H.d(g,"$iE")
s=this.y
r="pntLights["+h+"].viewPnt"
f=s.j(0,r)
if(f==null)H.o(P.r("Required uniform value, "+r+", was not defined or used in shader."))
H.d(f,"$iE")
s=this.y
r="pntLights["+h+"].color"
e=s.j(0,r)
if(e==null)H.o(P.r("Required uniform value, "+r+", was not defined or used in shader."))
H.d(e,"$iE")
s=this.y
r="pntLights["+h+"].att0"
d=s.j(0,r)
if(d==null)H.o(P.r("Required uniform value, "+r+", was not defined or used in shader."))
H.d(d,"$iM")
s=this.y
r="pntLights["+h+"].att1"
c=s.j(0,r)
if(c==null)H.o(P.r("Required uniform value, "+r+", was not defined or used in shader."))
H.d(c,"$iM")
s=this.y
r="pntLights["+h+"].att2"
b=s.j(0,r)
if(b==null)H.o(P.r("Required uniform value, "+r+", was not defined or used in shader."))
H.d(b,"$iM")
s=this.cB;(s&&C.a).h(s,new A.co(h,g,f,e,d,c,b))}}t=a6.ch
if(t>0){this.eu=H.f(this.y.m(0,"spotLightCount"),"$iC")
for(h=0;h<t;++h){s=this.y
r="spotLights["+h+"].objPnt"
g=s.j(0,r)
if(g==null)H.o(P.r("Required uniform value, "+r+", was not defined or used in shader."))
H.d(g,"$iE")
s=this.y
r="spotLights["+h+"].objDir"
f=s.j(0,r)
if(f==null)H.o(P.r("Required uniform value, "+r+", was not defined or used in shader."))
H.d(f,"$iE")
s=this.y
r="spotLights["+h+"].viewPnt"
e=s.j(0,r)
if(e==null)H.o(P.r("Required uniform value, "+r+", was not defined or used in shader."))
H.d(e,"$iE")
s=this.y
r="spotLights["+h+"].color"
d=s.j(0,r)
if(d==null)H.o(P.r("Required uniform value, "+r+", was not defined or used in shader."))
H.d(d,"$iE")
s=this.y
r="spotLights["+h+"].cutoff"
c=s.j(0,r)
if(c==null)H.o(P.r("Required uniform value, "+r+", was not defined or used in shader."))
H.d(c,"$iM")
s=this.y
r="spotLights["+h+"].coneAngle"
b=s.j(0,r)
if(b==null)H.o(P.r("Required uniform value, "+r+", was not defined or used in shader."))
H.d(b,"$iM")
s=this.y
r="spotLights["+h+"].att0"
a=s.j(0,r)
if(a==null)H.o(P.r("Required uniform value, "+r+", was not defined or used in shader."))
H.d(a,"$iM")
s=this.y
r="spotLights["+h+"].att1"
a0=s.j(0,r)
if(a0==null)H.o(P.r("Required uniform value, "+r+", was not defined or used in shader."))
H.d(a0,"$iM")
s=this.y
r="spotLights["+h+"].att2"
a1=s.j(0,r)
if(a1==null)H.o(P.r("Required uniform value, "+r+", was not defined or used in shader."))
H.d(a1,"$iM")
s=this.cC;(s&&C.a).h(s,new A.cp(h,g,f,e,d,c,b,a,a0,a1))}}t=a6.cx
if(t>0){this.ev=H.f(this.y.m(0,"txtDirLightCount"),"$iC")
for(h=0;h<t;++h){s=this.y
r="txtDirLights["+h+"].objUp"
g=s.j(0,r)
if(g==null)H.o(P.r("Required uniform value, "+r+", was not defined or used in shader."))
H.d(g,"$iE")
s=this.y
r="txtDirLights["+h+"].objRight"
f=s.j(0,r)
if(f==null)H.o(P.r("Required uniform value, "+r+", was not defined or used in shader."))
H.d(f,"$iE")
s=this.y
r="txtDirLights["+h+"].objDir"
e=s.j(0,r)
if(e==null)H.o(P.r("Required uniform value, "+r+", was not defined or used in shader."))
H.d(e,"$iE")
s=this.y
r="txtDirLights["+h+"].viewDir"
d=s.j(0,r)
if(d==null)H.o(P.r("Required uniform value, "+r+", was not defined or used in shader."))
H.d(d,"$iE")
s=this.y
r="txtDirLights["+h+"].color"
c=s.j(0,r)
if(c==null)H.o(P.r("Required uniform value, "+r+", was not defined or used in shader."))
H.d(c,"$iE")
s=this.y
r="txtDirLights["+h+"].nullTxt"
b=s.j(0,r)
if(b==null)H.o(P.r("Required uniform value, "+r+", was not defined or used in shader."))
H.d(b,"$iC")
s=this.y
r="txtDirLightsTxt2D"+h
a=s.j(0,r)
if(a==null)H.o(P.r("Required uniform value, "+r+", was not defined or used in shader."))
H.d(a,"$ia0")
s=this.cD;(s&&C.a).h(s,new A.cq(h,g,f,e,d,c,a,b))}}t=a6.cy
if(t>0){this.ew=H.f(this.y.m(0,"txtPntLightCount"),"$iC")
for(h=0;h<t;++h){s=this.y
r="txtPntLights["+h+"].point"
g=s.j(0,r)
if(g==null)H.o(P.r("Required uniform value, "+r+", was not defined or used in shader."))
H.d(g,"$iE")
s=this.y
r="txtPntLights["+h+"].viewPnt"
f=s.j(0,r)
if(f==null)H.o(P.r("Required uniform value, "+r+", was not defined or used in shader."))
H.d(f,"$iE")
s=this.y
r="txtPntLights["+h+"].invViewRotMat"
e=s.j(0,r)
if(e==null)H.o(P.r("Required uniform value, "+r+", was not defined or used in shader."))
H.d(e,"$ibK")
s=this.y
r="txtPntLights["+h+"].color"
d=s.j(0,r)
if(d==null)H.o(P.r("Required uniform value, "+r+", was not defined or used in shader."))
H.d(d,"$iE")
s=this.y
r="txtPntLights["+h+"].nullTxt"
c=s.j(0,r)
if(c==null)H.o(P.r("Required uniform value, "+r+", was not defined or used in shader."))
H.d(c,"$iC")
s=this.y
r="txtPntLights["+h+"].att0"
b=s.j(0,r)
if(b==null)H.o(P.r("Required uniform value, "+r+", was not defined or used in shader."))
H.d(b,"$iM")
s=this.y
r="txtPntLights["+h+"].att1"
a=s.j(0,r)
if(a==null)H.o(P.r("Required uniform value, "+r+", was not defined or used in shader."))
H.d(a,"$iM")
s=this.y
r="txtPntLights["+h+"].att2"
a0=s.j(0,r)
if(a0==null)H.o(P.r("Required uniform value, "+r+", was not defined or used in shader."))
H.d(a0,"$iM")
s=this.y
r="txtPntLightsTxtCube"+h
a1=s.j(0,r)
if(a1==null)H.o(P.r("Required uniform value, "+r+", was not defined or used in shader."))
H.d(a1,"$iak")
s=this.cE;(s&&C.a).h(s,new A.cr(h,g,f,e,d,a1,c,b,a,a0))}}t=a6.db
if(t>0){this.ex=H.f(this.y.m(0,"txtSpotLightCount"),"$iC")
for(h=0;h<t;++h){s=this.y
r="txtSpotLights["+h+"].objPnt"
g=s.j(0,r)
if(g==null)H.o(P.r("Required uniform value, "+r+", was not defined or used in shader."))
H.d(g,"$iE")
s=this.y
r="txtSpotLights["+h+"].objDir"
f=s.j(0,r)
if(f==null)H.o(P.r("Required uniform value, "+r+", was not defined or used in shader."))
H.d(f,"$iE")
s=this.y
r="txtSpotLights["+h+"].objUp"
e=s.j(0,r)
if(e==null)H.o(P.r("Required uniform value, "+r+", was not defined or used in shader."))
H.d(e,"$iE")
s=this.y
r="txtSpotLights["+h+"].objRight"
d=s.j(0,r)
if(d==null)H.o(P.r("Required uniform value, "+r+", was not defined or used in shader."))
H.d(d,"$iE")
s=this.y
r="txtSpotLights["+h+"].viewPnt"
c=s.j(0,r)
if(c==null)H.o(P.r("Required uniform value, "+r+", was not defined or used in shader."))
H.d(c,"$iE")
s=this.y
r="txtSpotLights["+h+"].nullTxt"
b=s.j(0,r)
if(b==null)H.o(P.r("Required uniform value, "+r+", was not defined or used in shader."))
H.d(b,"$iC")
s=this.y
r="txtSpotLights["+h+"].color"
a=s.j(0,r)
if(a==null)H.o(P.r("Required uniform value, "+r+", was not defined or used in shader."))
H.d(a,"$iE")
s=this.y
r="txtSpotLights["+h+"].tuScalar"
a0=s.j(0,r)
if(a0==null)H.o(P.r("Required uniform value, "+r+", was not defined or used in shader."))
H.d(a0,"$iM")
s=this.y
r="txtSpotLights["+h+"].tvScalar"
a1=s.j(0,r)
if(a1==null)H.o(P.r("Required uniform value, "+r+", was not defined or used in shader."))
H.d(a1,"$iM")
s=this.y
r="txtSpotLights["+h+"].att0"
a2=s.j(0,r)
if(a2==null)H.o(P.r("Required uniform value, "+r+", was not defined or used in shader."))
H.d(a2,"$iM")
s=this.y
r="txtSpotLights["+h+"].att1"
a3=s.j(0,r)
if(a3==null)H.o(P.r("Required uniform value, "+r+", was not defined or used in shader."))
H.d(a3,"$iM")
s=this.y
r="txtSpotLights["+h+"].att2"
a4=s.j(0,r)
if(a4==null)H.o(P.r("Required uniform value, "+r+", was not defined or used in shader."))
H.d(a4,"$iM")
s=this.y
r="txtSpotLightsTxt2D"+h
a5=s.j(0,r)
if(a5==null)H.o(P.r("Required uniform value, "+r+", was not defined or used in shader."))
H.d(a5,"$ia0")
s=this.cF;(s&&C.a).h(s,new A.cs(h,g,f,e,d,c,a5,b,a,a0,a1,a2,a3,a4))}}}},
ad:function(a,b,c){if(c==null||!c.d)C.b.M(b.a,b.d,1)
else{a.d1(c)
C.b.M(b.a,b.d,0)}},
am:function(a,b,c){C.b.M(b.a,b.d,1)},
sfU:function(a){this.r1=H.h(a,"$ia",[A.a3],"$aa")},
sh7:function(a){this.cA=H.h(a,"$ia",[A.cn],"$aa")},
siz:function(a){this.cB=H.h(a,"$ia",[A.co],"$aa")},
siY:function(a){this.cC=H.h(a,"$ia",[A.cp],"$aa")},
sjd:function(a){this.cD=H.h(a,"$ia",[A.cq],"$aa")},
sje:function(a){this.cE=H.h(a,"$ia",[A.cr],"$aa")},
sjf:function(a){this.cF=H.h(a,"$ia",[A.cs],"$aa")}}
A.fa.prototype={
jk:function(a){var u,t,s
if(!this.x1)return
u=a.a+="struct BendingValue\n"
u+="{\n"
a.a=u
u+="   mat4 mat;\n"
a.a=u
u+="};\n"
a.a=u
a.a=u+"uniform int bendMatCount;\n"
u=a.a+="uniform BendingValue bendValues["+this.aB+"];\n"
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
jr:function(a){var u
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
jl:function(a){var u
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
jz:function(a){var u,t
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
jA:function(a){var u,t
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
jt:function(a){var u
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
jE:function(a){var u
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
aH:function(a,b,c){var u
if(b===C.d)return
u=a.a+="uniform vec3 "+c+"Clr;\n"
if(b===C.j)return
if(0>=c.length)return H.c(c,0)
u+="uniform int null"+(c[0].toUpperCase()+C.c.aF(c,1))+"Txt;\n"
a.a=u
if(b===C.f)a.a=u+("uniform sampler2D "+c+"Txt;\n")
else if(b===C.i)a.a=u+("uniform samplerCube "+c+"Txt;\n")},
jo:function(a){var u,t
u=this.a
if(u===C.d)return
t=a.a+="// === Emission ===\n"
a.a=t+"\n"
this.aH(a,u,"emission")
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
case C.f:u=t+"   if(nullEmissionTxt > 0) return emissionClr;\n"
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
jj:function(a){var u,t
u=this.b
if(u===C.d)return
t=a.a+="// === Ambient ===\n"
a.a=t+"\n"
this.aH(a,u,"ambient")
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
case C.f:u=t+"   if(nullAmbientTxt > 0) return ambientClr;\n"
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
jm:function(a){var u,t
u=this.c
if(u===C.d)return
t=a.a+="// === Diffuse ===\n"
a.a=t+"\n"
this.aH(a,u,"diffuse")
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
case C.f:u=t+"   if(nullDiffuseTxt > 0) diffuseColor = diffuseClr;\n"
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
jp:function(a){var u,t
u=this.d
if(u===C.d)return
t=a.a+="// === Inverse Diffuse ===\n"
a.a=t+"\n"
this.aH(a,u,"invDiffuse")
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
case C.f:u=t+"   if(nullInvDiffuseTxt > 0) invDiffuseColor = invDiffuseClr;\n"
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
jx:function(a){var u,t
u=this.e
if(u===C.d)return
t=a.a+="// === Specular ===\n"
a.a=t+"\n"
this.aH(a,u,"specular")
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
case C.f:u=t+"   if(nullSpecularTxt > 0) specularColor = specularClr;\n"
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
js:function(a){var u,t
if(!this.r1)return
u=a.a+="// === Normal ===\n"
u+="\n"
a.a=u
t=this.f
switch(t){case C.d:break
case C.j:break
case C.f:u+="uniform sampler2D bumpTxt;\n"
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
jv:function(a){var u,t
u=this.r
if(u===C.d)return
t=a.a+="// === Reflection ===\n"
a.a=t+"\n"
this.aH(a,u,"reflect")
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
case C.f:u=t+"   if(nullReflectTxt > 0) return vec3(0.0, 0.0, 0.0);\n"
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
jw:function(a){var u,t
u=this.x
if(u===C.d)return
t=a.a+="// === Refraction ===\n"
a.a=t+"\n"
this.aH(a,u,"refract")
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
case C.f:u=t+"   if(nullRefractTxt > 0) return vec3(0.0, 0.0, 0.0);\n"
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
jn:function(a){var u,t
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
ju:function(a){var u,t
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
jy:function(a){var u,t
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
jB:function(a){var u,t,s
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
jC:function(a){var u,t,s
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
jD:function(a){var u,t,s
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
jq:function(a){var u
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
i:function(a){return this.at}}
A.cn.prototype={}
A.cq.prototype={}
A.co.prototype={}
A.cr.prototype={}
A.cp.prototype={}
A.cs.prototype={}
A.ch.prototype={
bl:function(a,b){this.c=null
this.d=null
this.e=null
this.f=null
this.r=null
this.x=null
this.y=null},
bN:function(a,b){var u,t,s
this.c=a
this.d=b
this.e=this.dl(a,35633)
this.f=this.dl(this.d,35632)
u=this.a
t=u.createProgram()
this.r=t
C.b.dQ(u,t,this.e)
C.b.dQ(u,this.r,this.f)
C.b.ki(u,this.r)
if(!H.ko(C.b.c0(u,this.r,35714))){s=C.b.fi(u,this.r)
C.b.jU(u,this.r)
H.o(P.r("Failed to link shader: "+H.i(s)))}this.iT()
this.iV()},
V:function(a){C.b.bj(a.a,this.r)
this.x.k0()},
dl:function(a,b){var u,t,s
u=this.a
t=C.b.jS(u,b)
C.b.fn(u,t,a)
C.b.jP(u,t)
if(!H.ko(C.b.fk(u,t,35713))){s=C.b.fj(u,t)
C.b.jV(u,t)
throw H.e(P.r("Error compiling shader '"+H.i(t)+"': "+H.i(s)))}return t},
iT:function(){var u,t,s,r,q,p
u=H.b([],[A.cR])
t=this.a
s=H.a6(C.b.c0(t,this.r,35721))
if(typeof s!=="number")return H.u(s)
r=0
for(;r<s;++r){q=C.b.fe(t,this.r,r)
p=C.b.fg(t,this.r,q.name)
C.a.h(u,new A.cR(t,q.name,p))}this.x=new A.ei(u)},
iV:function(){var u,t,s,r,q,p
u=H.b([],[A.dO])
t=this.a
s=H.a6(C.b.c0(t,this.r,35718))
if(typeof s!=="number")return H.u(s)
r=0
for(;r<s;++r){q=C.b.ff(t,this.r,r)
p=C.b.fl(t,this.r,q.name)
C.a.h(u,this.jT(q.type,q.size,q.name,p))}this.y=new A.h_(u)},
aR:function(a,b,c){var u,t
u=this.a
t=this.r
if(a===1)return new A.C(u,t,b,c)
else return A.j_(u,t,b,a,c)},
h2:function(a,b,c){var u,t
u=this.a
t=this.r
if(a===1)return new A.a0(u,t,b,c)
else return A.j_(u,t,b,a,c)},
h3:function(a,b,c){var u,t
u=this.a
t=this.r
if(a===1)return new A.ak(u,t,b,c)
else return A.j_(u,t,b,a,c)},
bq:function(a,b){return new P.e_(a+" uniform variables are unsupported by all browsers.\n"+("Please change the type of "+H.i(b)+"."))},
jT:function(a,b,c,d){switch(a){case 5120:return this.aR(b,c,d)
case 5121:return this.aR(b,c,d)
case 5122:return this.aR(b,c,d)
case 5123:return this.aR(b,c,d)
case 5124:return this.aR(b,c,d)
case 5125:return this.aR(b,c,d)
case 5126:return new A.M(this.a,this.r,c,d)
case 35664:return new A.aq(this.a,this.r,c,d)
case 35665:return new A.E(this.a,this.r,c,d)
case 35666:return new A.dP(this.a,this.r,c,d)
case 35667:return new A.fX(this.a,this.r,c,d)
case 35668:return new A.fY(this.a,this.r,c,d)
case 35669:return new A.fZ(this.a,this.r,c,d)
case 35674:return new A.h0(this.a,this.r,c,d)
case 35675:return new A.bK(this.a,this.r,c,d)
case 35676:return new A.a3(this.a,this.r,c,d)
case 35678:return this.h2(b,c,d)
case 35680:return this.h3(b,c,d)
case 35670:throw H.e(this.bq("BOOL",c))
case 35671:throw H.e(this.bq("BOOL_VEC2",c))
case 35672:throw H.e(this.bq("BOOL_VEC3",c))
case 35673:throw H.e(this.bq("BOOL_VEC4",c))
default:throw H.e(P.r("Unknown uniform variable type "+H.i(a)+" for "+H.i(c)+"."))}}}
A.by.prototype={
i:function(a){return this.b}}
A.dH.prototype={
fA:function(a,b){var u,t,s,r,q
this.bN("attribute vec3 posAttr;\n\nvarying vec2 pos;\n\nvoid main()\n{\n  pos = posAttr.xy*0.5 + 0.5;\n  gl_Position = vec4(posAttr, 1.0);\n}\n".charCodeAt(0)==0?"attribute vec3 posAttr;\n\nvarying vec2 pos;\n\nvoid main()\n{\n  pos = posAttr.xy*0.5 + 0.5;\n  gl_Position = vec4(posAttr, 1.0);\n}\n":"attribute vec3 posAttr;\n\nvarying vec2 pos;\n\nvoid main()\n{\n  pos = posAttr.xy*0.5 + 0.5;\n  gl_Position = vec4(posAttr, 1.0);\n}\n",A.lM(a))
this.z=this.x.j(0,"posAttr")
this.Q=H.d(this.y.m(0,"txtCount"),"$iC")
this.ch=H.d(this.y.m(0,"backClr"),"$idP")
this.sjg(H.b([],[A.a0]))
this.sh_(H.b([],[A.a3]))
u=[A.aq]
this.siZ(H.b([],u))
this.sj_(H.b([],u))
this.sh5(H.b([],u))
this.sh6(H.b([],u))
this.shg(H.b([],[A.C]))
for(t=0;t<a;++t){u=this.cx
s=this.y
r="txt"+t
q=s.j(0,r)
if(q==null)H.o(P.r("Required uniform value, "+r+", was not defined or used in shader."));(u&&C.a).h(u,H.d(q,"$ia0"))
u=this.cy
s=this.y
r="clrMat"+t
q=s.j(0,r)
if(q==null)H.o(P.r("Required uniform value, "+r+", was not defined or used in shader."));(u&&C.a).h(u,H.d(q,"$ia3"))
u=this.db
s=this.y
r="srcLoc"+t
q=s.j(0,r)
if(q==null)H.o(P.r("Required uniform value, "+r+", was not defined or used in shader."));(u&&C.a).h(u,H.d(q,"$iaq"))
u=this.dx
s=this.y
r="srcSize"+t
q=s.j(0,r)
if(q==null)H.o(P.r("Required uniform value, "+r+", was not defined or used in shader."));(u&&C.a).h(u,H.d(q,"$iaq"))
u=this.dy
s=this.y
r="destLoc"+t
q=s.j(0,r)
if(q==null)H.o(P.r("Required uniform value, "+r+", was not defined or used in shader."));(u&&C.a).h(u,H.d(q,"$iaq"))
u=this.fr
s=this.y
r="destSize"+t
q=s.j(0,r)
if(q==null)H.o(P.r("Required uniform value, "+r+", was not defined or used in shader."));(u&&C.a).h(u,H.d(q,"$iaq"))
u=this.fx
s=this.y
r="flip"+t
q=s.j(0,r)
if(q==null)H.o(P.r("Required uniform value, "+r+", was not defined or used in shader."));(u&&C.a).h(u,H.d(q,"$iC"))}},
sjg:function(a){this.cx=H.h(a,"$ia",[A.a0],"$aa")},
sh_:function(a){this.cy=H.h(a,"$ia",[A.a3],"$aa")},
siZ:function(a){this.db=H.h(a,"$ia",[A.aq],"$aa")},
sj_:function(a){this.dx=H.h(a,"$ia",[A.aq],"$aa")},
sh5:function(a){this.dy=H.h(a,"$ia",[A.aq],"$aa")},
sh6:function(a){this.fr=H.h(a,"$ia",[A.aq],"$aa")},
shg:function(a){this.fx=H.h(a,"$ia",[A.C],"$aa")}}
A.dO.prototype={}
A.h_.prototype={
j:function(a,b){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<t;++s){r=u[s]
if(r.c===b)return r}return},
m:function(a,b){var u=this.j(0,b)
if(u==null)throw H.e(P.r("Required uniform value, "+b+", was not defined or used in shader."))
return u},
i:function(a){return this.P()},
ka:function(a){var u,t,s,r
for(u=this.a,t=u.length,s="",r=0;r<u.length;u.length===t||(0,H.z)(u),++r)s+=u[r].i(0)+a
return s},
P:function(){return this.ka("\n")}}
A.C.prototype={
i:function(a){return"Uniform1i: "+H.i(this.c)}}
A.fX.prototype={
i:function(a){return"Uniform2i: "+H.i(this.c)}}
A.fY.prototype={
i:function(a){return"Uniform3i: "+H.i(this.c)}}
A.fZ.prototype={
i:function(a){return"Uniform4i: "+H.i(this.c)}}
A.fW.prototype={
i:function(a){return"Uniform1iv: "+H.i(this.c)},
sjh:function(a){this.e=H.h(a,"$ia",[P.j],"$aa")}}
A.M.prototype={
i:function(a){return"Uniform1f: "+H.i(this.c)}}
A.aq.prototype={
i:function(a){return"Uniform2f: "+H.i(this.c)}}
A.E.prototype={
i:function(a){return"Uniform3f: "+H.i(this.c)}}
A.dP.prototype={
i:function(a){return"Uniform4f: "+H.i(this.c)}}
A.h0.prototype={
i:function(a){return"Uniform1Mat2 "+H.i(this.c)}}
A.bK.prototype={
ab:function(a){var u=new Float32Array(H.bq(H.h(a,"$ia",[P.q],"$aa")))
C.b.f6(this.a,this.d,!1,u)},
i:function(a){return"UniformMat3: "+H.i(this.c)}}
A.a3.prototype={
ab:function(a){var u=new Float32Array(H.bq(H.h(a,"$ia",[P.q],"$aa")))
C.b.cX(this.a,this.d,!1,u)},
i:function(a){return"UniformMat4: "+H.i(this.c)}}
A.a0.prototype={
d1:function(a){var u,t,s
u=a==null||!a.d
t=this.a
s=this.d
if(u)C.b.M(t,s,0)
else C.b.M(t,s,a.a)},
i:function(a){return"UniformSampler2D: "+H.i(this.c)}}
A.ak.prototype={
i:function(a){return"UniformSamplerCube: "+H.i(this.c)}}
F.ia.prototype={
$3:function(a,b,c){var u,t,s
u=this.a
t=u.a.cL(u.b,b).cL(u.d.cL(u.c,b),c)
a.sa8(0,new V.a_(t.a,t.b,t.c))
a.sf2(t.A(0,Math.sqrt(t.I(t))))
u=1-b
s=1-c
a.sdU(new V.aP(this.b+b*c,this.c+u*c,this.d+b*s,this.e+u*s))
this.f.$3(a,b,c)},
$S:10}
F.iF.prototype={
$2:function(a,b){return 0},
$S:23}
F.iG.prototype={
$3:function(a,b,c){var u,t,s
u=this.a.a.$2(b,c)
if(typeof u!=="number")return H.u(u)
t=a.f
s=new V.K(t.a,t.b,t.c)
u=s.A(0,Math.sqrt(s.I(s))).k(0,this.b+u)
a.sa8(0,new V.a_(u.a,u.b,u.c))},
$S:10}
F.io.prototype={
$2:function(a,b){return 0},
$S:23}
F.ip.prototype={
$3:function(a,b,c){var u,t,s,r
u=b*2-1
t=c*2-1
a.sa8(0,new V.a_(u,t,this.a.a.$2(b,c)))
s=new V.K(u,t,1)
a.sf2(s.A(0,Math.sqrt(s.I(s))))
s=1-b
r=1-c
a.sdU(new V.aP(b*c,2+s*c,4+b*r,6+s*r))},
$S:10}
F.a1.prototype={
b7:function(){if(!this.gb8()){C.a.H(this.a.a.d.b,this)
this.a.a.a4()}this.ci()
this.cj()
this.iF()},
cn:function(a){this.a=a
C.a.h(a.d.b,this)},
co:function(a){this.b=a
C.a.h(a.d.c,this)},
iS:function(a){this.c=a
C.a.h(a.d.d,this)},
ci:function(){var u=this.a
if(u!=null){C.a.H(u.d.b,this)
this.a=null}},
cj:function(){var u=this.b
if(u!=null){C.a.H(u.d.c,this)
this.b=null}},
iF:function(){var u=this.c
if(u!=null){C.a.H(u.d.d,this)
this.c=null}},
gb8:function(){return this.a==null||this.b==null||this.c==null},
fT:function(){var u,t,s,r,q
u=this.a
t=u==null?null:u.r
u=this.b
s=u==null?null:u.r
u=this.c
r=u==null?null:u.r
q=V.cv()
if(t!=null)q=q.C(0,t)
if(s!=null)q=q.C(0,s)
if(r!=null)q=q.C(0,r)
if(q.eJ())return
return q.A(0,Math.sqrt(q.I(q)))},
fX:function(){var u,t,s,r,q
u=this.a
t=u==null?null:u.f
u=this.b
s=u==null?null:u.f
u=this.c
r=u==null?null:u.f
if(t==null||s==null||r==null)return
u=s.G(0,t)
u=new V.K(u.a,u.b,u.c)
q=u.A(0,Math.sqrt(u.I(u)))
u=r.G(0,t)
u=new V.K(u.a,u.b,u.c)
u=q.b6(u.A(0,Math.sqrt(u.I(u))))
return u.A(0,Math.sqrt(u.I(u)))},
ct:function(){if(this.d!=null)return!0
var u=this.fT()
if(u==null){u=this.fX()
if(u==null)return!1}this.d=u
this.a.a.a4()
return!0},
fS:function(){var u,t,s,r,q
u=this.a
t=u==null?null:u.x
u=this.b
s=u==null?null:u.x
u=this.c
r=u==null?null:u.x
q=V.cv()
if(t!=null)q=q.C(0,t)
if(s!=null)q=q.C(0,s)
if(r!=null)q=q.C(0,r)
if(q.eJ())return
return q.A(0,Math.sqrt(q.I(q)))},
fW:function(){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f
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
if(Math.abs(i-0)<$.A().a){u=m.G(0,p)
u=new V.K(u.a,u.b,u.c)
h=u.A(0,Math.sqrt(u.I(u)))
if(j.a-k.a<0)h=h.S(0)}else{g=(u-l.b)/i
u=m.G(0,p)
t=u.c
if(typeof t!=="number")return t.k()
t=new V.a_(u.a*g,u.b*g,t*g).C(0,p).G(0,s)
t=new V.K(t.a,t.b,t.c)
h=t.A(0,Math.sqrt(t.I(t)))
j=j.a
k=k.a
if((j-k)*g+k-l.a<0)h=h.S(0)}u=this.d
if(u!=null){f=u.A(0,Math.sqrt(u.I(u)))
u=f.b6(h)
u=u.A(0,Math.sqrt(u.I(u))).b6(f)
h=u.A(0,Math.sqrt(u.I(u)))}return h},
cr:function(){if(this.e!=null)return!0
var u=this.fS()
if(u==null){u=this.fW()
if(u==null)return!1}this.e=u
this.a.a.a4()
return!0},
gjO:function(){if(J.I(this.a,this.b))return!0
if(J.I(this.b,this.c))return!0
if(J.I(this.c,this.a))return!0
return!1},
u:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.P()},
E:function(a){var u,t
if(this.gb8())return a+"disposed"
u=a+C.c.aq(J.ao(this.a.e),0)+", "+C.c.aq(J.ao(this.b.e),0)+", "+C.c.aq(J.ao(this.c.e),0)+" {"
t=this.d
u=t!=null?u+(t.i(0)+", "):u+"-, "
t=this.e
return t!=null?u+(t.i(0)+"}"):u+"-}"},
P:function(){return this.E("")}}
F.eI.prototype={}
F.fC.prototype={
bb:function(a,b,c){var u,t
u=b.a
u.a.a.w()
u=u.e
t=c.a
t.a.a.w()
if(u==t.e){u=b.b
u.a.a.w()
u=u.e
t=c.b
t.a.a.w()
if(u==t.e){u=b.c
u.a.a.w()
u=u.e
t=c.c
t.a.a.w()
t=u==t.e
u=t}else u=!1
return u}else{u=b.a
u.a.a.w()
u=u.e
t=c.b
t.a.a.w()
if(u==t.e){u=b.b
u.a.a.w()
u=u.e
t=c.c
t.a.a.w()
if(u==t.e){u=b.c
u.a.a.w()
u=u.e
t=c.a
t.a.a.w()
t=u==t.e
u=t}else u=!1
return u}else{u=b.a
u.a.a.w()
u=u.e
t=c.c
t.a.a.w()
if(u==t.e){u=b.b
u.a.a.w()
u=u.e
t=c.a
t.a.a.w()
if(u==t.e){u=b.c
u.a.a.w()
u=u.e
t=c.b
t.a.a.w()
t=u==t.e
u=t}else u=!1
return u}else return!1}}}}
F.b0.prototype={
b7:function(){if(!this.gb8()){C.a.H(this.a.a.c.b,this)
this.a.a.a4()}this.ci()
this.cj()},
cn:function(a){this.a=a
C.a.h(a.c.b,this)},
co:function(a){this.b=a
C.a.h(a.c.c,this)},
ci:function(){var u=this.a
if(u!=null){C.a.H(u.c.b,this)
this.a=null}},
cj:function(){var u=this.b
if(u!=null){C.a.H(u.c.c,this)
this.b=null}},
gb8:function(){return this.a==null||this.b==null},
u:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.P()},
E:function(a){if(this.gb8())return a+"disposed"
return a+C.c.aq(J.ao(this.a.e),0)+", "+C.c.aq(J.ao(this.b.e),0)},
P:function(){return this.E("")}}
F.eW.prototype={}
F.fV.prototype={
bb:function(a,b,c){var u,t
u=b.a
u.a.a.w()
u=u.e
t=c.a
t.a.a.w()
if(u==t.e){u=b.b
u.a.a.w()
u=u.e
t=c.b
t.a.a.w()
return u==t.e}else{u=b.a
u.a.a.w()
u=u.e
t=c.b
t.a.a.w()
if(u==t.e){u=b.b
u.a.a.w()
u=u.e
t=c.a
t.a.a.w()
return u==t.e}else return!1}}}
F.bl.prototype={
u:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.P()},
E:function(a){var u=this.a
if(u==null)return a+"disposed"
return a+C.c.aq(J.ao(u.e),0)},
P:function(){return this.E("")}}
F.dz.prototype={
gl:function(){var u=this.e
if(u==null){u=D.D()
this.e=u}return u},
cN:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i,h
u=this.e
if(u!=null)++u.d
a.a.w()
t=this.a.c.length
for(u=a.a.c,s=u.length,r=0;r<u.length;u.length===s||(0,H.z)(u),++r){q=u[r]
this.a.h(0,q.jQ())}this.a.w()
for(u=a.b.b,s=u.length,r=0;r<u.length;u.length===s||(0,H.z)(u),++r){p=u[r]
o=this.a
n=p.a
n.a.a.w()
n=n.e
if(typeof n!=="number")return n.C()
n+=t
o=o.c
if(n>=o.length)return H.c(o,n)
m=o[n]
this.b.a.a.h(0,m)
n=new F.bl()
if(m.a==null)H.o(P.r("May not create a point with a vertex which is not attached to a shape."))
n.a=m
C.a.h(m.b.b,n)
C.a.h(n.a.a.b.b,n)
o=n.a.a.e
if(o!=null)o.D(null)}for(u=a.c.b,s=u.length,r=0;r<u.length;u.length===s||(0,H.z)(u),++r){l=u[r]
o=this.a
n=l.a
n.a.a.w()
n=n.e
if(typeof n!=="number")return n.C()
n+=t
o=o.c
if(n>=o.length)return H.c(o,n)
k=o[n]
n=this.a
o=l.b
o.a.a.w()
o=o.e
if(typeof o!=="number")return o.C()
o+=t
n=n.c
if(o>=n.length)return H.c(n,o)
j=n[o]
o=this.c.a
o.a.h(0,k)
o.a.h(0,j)
F.lh(k,j)}for(u=a.d.b,s=u.length,r=0;r<u.length;u.length===s||(0,H.z)(u),++r){i=u[r]
o=this.a
n=i.a
n.a.a.w()
n=n.e
if(typeof n!=="number")return n.C()
n+=t
o=o.c
if(n>=o.length)return H.c(o,n)
k=o[n]
n=this.a
o=i.b
o.a.a.w()
o=o.e
if(typeof o!=="number")return o.C()
o+=t
n=n.c
if(o>=n.length)return H.c(n,o)
j=n[o]
o=this.a
n=i.c
n.a.a.w()
n=n.e
if(typeof n!=="number")return n.C()
n+=t
o=o.c
if(n>=o.length)return H.c(o,n)
h=o[n]
n=this.d.a
n.a.h(0,k)
n.a.h(0,j)
n.a.h(0,h)
F.c1(k,j,h)}u=this.e
if(u!=null)u.af()},
as:function(){var u,t
u=this.e
if(u!=null)++u.d
t=this.d.as()||!1
if(!this.a.as())t=!1
u=this.e
if(u!=null)u.af()
return t},
jJ:function(a,b){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
u=this.e
if(u!=null)++u.d
for(t=this.a.c.length-1,u=a.b,s=a.a,r=s.length,q=a.c,p=u-1;t>=0;--t){o=this.a.c
if(t>=o.length)return H.c(o,t)
n=o[t]
o=n.y
m=C.h.ba(o.a*p)
o=o.b
if(typeof q!=="number")return q.G()
l=C.h.ba(o*(q-1))
m=m>=0?C.e.au(m,u):u+C.e.au(m,u)
k=(m+(l>=0?C.e.au(l,q):q+C.e.au(l,q))*u)*4
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
if(typeof d!=="number")return d.C()
j=new V.a_(f+i*g,e+h*g,d+j*g)
if(!J.I(o,j)){n.f=j
o=n.a
if(o!=null){o=o.e
if(o!=null)o.D(null)}}}u=this.e
if(u!=null)u.af()},
kZ:function(a){var u,t,s,r,q
u=this.e
if(u!=null)++u.d
for(u=this.a,t=u.c.length-1,s=a.a;t>=0;--t){r=u.c
if(t>=r.length)return H.c(r,t)
q=r[t]
if((s&$.af().a)===0)q.f=null
if((s&$.aG().a)===0)q.r=null
if((s&$.aW().a)===0)q.x=null
if((s&$.az().a)===0)q.y=null
if((s&$.aX().a)===0)q.z=null
if((s&$.jk().a)===0)q.Q=null
if((s&$.bt().a)===0)q.ch=0
if((s&$.aV().a)===0)q.cx=null}u=this.e
if(u!=null)u.af()},
kY:function(a,b){var u,t,s,r
u=this.e
if(u!=null)++u.d
for(u=this.d,t=u.b.length-1;t>=0;--t){s=u.b
if(t>=s.length)return H.c(s,t)
r=s[t]
r.d=null}u=this.e
if(u!=null)u.af()},
kX:function(a){return this.kY(!0,a)},
km:function(a,b){var u,t,s,r,q,p,o
u=this.e
if(u!=null)++u.d
u=this.a.c
t=H.b(u.slice(0),[H.t(u,0)])
for(u=[F.ad];t.length!==0;){s=C.a.gk8(t)
C.a.kH(t,0)
if(s!=null){r=H.b([],u)
C.a.h(r,s)
for(q=t.length,p=0;p<t.length;t.length===q||(0,H.z)(t),++p){o=t[p]
if(o!=null&&a.bb(0,s,o)){C.a.h(r,o)
C.a.H(t,o)}}if(r.length>1)b.cN(r)}}this.a.w()
this.c.cT()
this.d.cT()
this.b.kI()
this.c.cU(new F.fV())
this.d.cU(new F.fC())
u=this.e
if(u!=null)u.af()},
bu:function(a0,a1){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a
u=this.a.c.length
a1.toString
t=$.af()
s=a1.a
r=(s&t.a)!==0?1:0
if((s&$.aG().a)!==0)++r
if((s&$.aW().a)!==0)++r
if((s&$.az().a)!==0)++r
if((s&$.aX().a)!==0)++r
if((s&$.cL().a)!==0)++r
if((s&$.cM().a)!==0)++r
if((s&$.bt().a)!==0)++r
if((s&$.aV().a)!==0)++r
q=a1.gd2(a1)
p=q*4
t=new Array(u*q)
t.fixed$length=Array
s=P.q
o=H.b(t,[s])
t=new Array(r)
t.fixed$length=Array
n=H.b(t,[Z.cU])
for(m=0,l=0;l<r;++l){k=a1.jK(l)
j=k.gd2(k)
C.a.p(n,l,new Z.cU(k,j,m*4,p,0))
for(i=0;i<u;++i){t=this.a.c
if(i>=t.length)return H.c(t,i)
h=t[i].kj(k)
g=m+i*q
for(f=0;f<h.length;++f){C.a.p(o,g,h[f]);++g}}m+=j}H.h(o,"$ia",[s],"$aa")
t=a0.a
e=t.createBuffer()
C.b.ay(t,34962,e)
C.b.dY(t,34962,new Float32Array(H.bq(o)),35044)
C.b.ay(t,34962,null)
d=new Z.b8(new Z.dW(34962,e),n,a1)
d.shl(H.b([],[Z.be]))
if(this.b.b.length!==0){s=P.j
c=H.b([],[s])
for(l=0;b=this.b.b,l<b.length;++l){b=b[l].a
b.a.a.w()
C.a.h(c,b.e)}a=Z.j3(t,34963,H.h(c,"$ia",[s],"$aa"))
C.a.h(d.b,new Z.be(0,c.length,a))}if(this.c.b.length!==0){s=P.j
c=H.b([],[s])
for(l=0;b=this.c.b,l<b.length;++l){b=b[l].a
b.a.a.w()
C.a.h(c,b.e)
b=this.c.b
if(l>=b.length)return H.c(b,l)
b=b[l].b
b.a.a.w()
C.a.h(c,b.e)}a=Z.j3(t,34963,H.h(c,"$ia",[s],"$aa"))
C.a.h(d.b,new Z.be(1,c.length,a))}if(this.d.b.length!==0){s=P.j
c=H.b([],[s])
for(l=0;b=this.d.b,l<b.length;++l){b=b[l].a
b.a.a.w()
C.a.h(c,b.e)
b=this.d.b
if(l>=b.length)return H.c(b,l)
b=b[l].b
b.a.a.w()
C.a.h(c,b.e)
b=this.d.b
if(l>=b.length)return H.c(b,l)
b=b[l].c
b.a.a.w()
C.a.h(c,b.e)}a=Z.j3(t,34963,H.h(c,"$ia",[s],"$aa"))
C.a.h(d.b,new Z.be(4,c.length,a))}return d},
i:function(a){var u=H.b([],[P.l])
if(this.a.c.length!==0){C.a.h(u,"Vertices:")
C.a.h(u,this.a.E("   "))}if(this.b.b.length!==0){C.a.h(u,"Points:")
C.a.h(u,this.b.E("   "))}if(this.c.b.length!==0){C.a.h(u,"Lines:")
C.a.h(u,this.c.E("   "))}if(this.d.b.length!==0){C.a.h(u,"Faces:")
C.a.h(u,this.d.E("   "))}return C.a.F(u,"\n")},
ah:function(a){var u=this.e
if(u!=null)u.D(a)},
a4:function(){return this.ah(null)},
$in_:1}
F.fw.prototype={
jG:function(a){var u,t,s,r,q,p
H.h(a,"$ia",[F.ad],"$aa")
u=H.b([],[F.a1])
t=a[0]
for(s=this.a,r=2;r<4;++r){q=a[r-1]
p=a[r]
s.a.h(0,t)
s.a.h(0,q)
s.a.h(0,p)
C.a.h(u,F.c1(t,q,p))}return u},
jH:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k,j,i,h
H.h(c,"$ia",[F.ad],"$aa")
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
gn:function(a){return this.b.length},
cU:function(a){var u,t,s,r,q,p,o,n
for(u=this.a,t=u.a.c.length-1;t>=0;--t){s=u.a.c
if(t>=s.length)return H.c(s,t)
r=s[t]
for(s=r.d,q=s.b.length+s.c.length+s.d.length-1;q>=0;--q){p=r.d.j(0,q)
for(o=q-1;o>=0;--o){n=r.d.j(0,o)
if(a.bb(0,p,n)){p.b7()
break}}}}},
cT:function(){var u,t,s
for(u=this.b.length-1;u>=0;--u){t=this.b
if(u>=t.length)return H.c(t,u)
s=t[u]
t=s.gjO()
if(t)s.b7()}},
as:function(){var u,t,s,r
for(u=this.b,t=u.length,s=!0,r=0;r<u.length;u.length===t||(0,H.z)(u),++r)if(!u[r].ct())s=!1
return s},
cs:function(){var u,t,s,r
for(u=this.b,t=u.length,s=!0,r=0;r<u.length;u.length===t||(0,H.z)(u),++r)if(!u[r].cr())s=!1
return s},
i:function(a){return this.P()},
E:function(a){var u,t,s,r
u=H.b([],[P.l])
for(t=this.b,s=t.length,r=0;r<t.length;t.length===s||(0,H.z)(t),++r)C.a.h(u,t[r].E(a))
return C.a.F(u,"\n")},
P:function(){return this.E("")},
shb:function(a){this.b=H.h(a,"$ia",[F.a1],"$aa")}}
F.fx.prototype={
gn:function(a){return this.b.length},
cU:function(a){var u,t,s,r,q,p,o,n
for(u=this.a,t=u.a.c.length-1;t>=0;--t){s=u.a.c
if(t>=s.length)return H.c(s,t)
r=s[t]
for(s=r.c,q=s.b.length+s.c.length-1;q>=0;--q){p=r.c.j(0,q)
for(o=q-1;o>=0;--o){n=r.c.j(0,o)
if(a.bb(0,p,n)){p.b7()
break}}}}},
cT:function(){var u,t,s
for(u=this.b.length-1;u>=0;--u){t=this.b
if(u>=t.length)return H.c(t,u)
s=t[u]
t=J.I(s.a,s.b)
if(t)s.b7()}},
i:function(a){return this.P()},
E:function(a){var u,t,s,r
u=H.b([],[P.l])
t=this.b.length
for(s=0;s<t;++s){r=this.b
if(s>=r.length)return H.c(r,s)
C.a.h(u,r[s].E(a+(""+s+". ")))}return C.a.F(u,"\n")},
P:function(){return this.E("")},
shn:function(a){this.b=H.h(a,"$ia",[F.b0],"$aa")}}
F.fy.prototype={
gn:function(a){return this.b.length},
kI:function(){var u,t,s
for(u=this.b.length-1;u>=0;--u){t=this.b
if(u>=t.length)return H.c(t,u)
t=t[u]
s=t.a
if(s.b.b.length>1){if(s!=null){C.a.H(s.a.b.b,t)
s=t.a.a.e
if(s!=null)s.D(null)}s=t.a
if(s!=null){C.a.H(s.b.b,t)
t.a=null}}}},
i:function(a){return this.P()},
E:function(a){var u,t,s,r
u=H.b([],[P.l])
for(t=this.b,s=t.length,r=0;r<t.length;t.length===s||(0,H.z)(t),++r)C.a.h(u,t[r].E(a))
return C.a.F(u,"\n")},
P:function(){return this.E("")},
sce:function(a){this.b=H.h(a,"$ia",[F.bl],"$aa")}}
F.ad.prototype={
cz:function(a){var u,t,s,r,q,p,o
u=this.f
t=this.r
s=this.x
r=this.y
q=this.z
p=this.Q
o=this.ch
return F.hd(this.cx,s,p,u,t,r,q,a,o)},
jQ:function(){return this.cz(null)},
sa8:function(a,b){var u
if(!J.I(this.f,b)){this.f=b
u=this.a
if(u!=null)u.a4()}},
sf2:function(a){var u
if(!J.I(this.z,a)){this.z=a
u=this.a
if(u!=null)u.a4()}},
sdU:function(a){var u
if(!J.I(this.cx,a)){this.cx=a
u=this.a
if(u!=null)u.a4()}},
kj:function(a){var u,t
if(a.u(0,$.af())){u=this.f
t=[P.q]
if(u==null)return H.b([0,0,0],t)
else return H.b([u.a,u.b,u.c],t)}else if(a.u(0,$.aG())){u=this.r
t=[P.q]
if(u==null)return H.b([0,1,0],t)
else return H.b([u.a,u.b,u.c],t)}else if(a.u(0,$.aW())){u=this.x
t=[P.q]
if(u==null)return H.b([0,0,1],t)
else return H.b([u.a,u.b,u.c],t)}else if(a.u(0,$.az())){u=this.y
t=[P.q]
if(u==null)return H.b([0,0],t)
else return H.b([u.a,u.b],t)}else if(a.u(0,$.aX())){u=this.z
t=[P.q]
if(u==null)return H.b([0,0,0],t)
else return H.b([u.a,u.b,u.c],t)}else if(a.u(0,$.cL())){u=this.Q
t=[P.q]
if(u==null)return H.b([1,1,1],t)
else return H.b([u.a,u.b,u.c],t)}else if(a.u(0,$.cM())){u=this.Q
t=[P.q]
if(u==null)return H.b([1,1,1,1],t)
else return H.b([u.a,u.b,u.c,u.d],t)}else if(a.u(0,$.bt()))return H.b([this.ch],[P.q])
else if(a.u(0,$.aV())){u=this.cx
t=[P.q]
if(u==null)return H.b([-1,-1,-1,-1],t)
else return H.b([u.a,u.b,u.c,u.d],t)}else return H.b([],[P.q])},
ct:function(){var u,t
u={}
if(this.r!=null)return!0
t=this.a
if(t!=null){t=t.e
if(t!=null)++t.d}u.a=V.cv()
this.d.a1(0,new F.ho(u))
u=u.a
this.r=u.A(0,Math.sqrt(u.I(u)))
u=this.a
if(u!=null){u.a4()
u=this.a.e
if(u!=null)u.af()}return!0},
cr:function(){var u,t
u={}
if(this.x!=null)return!0
t=this.a
if(t!=null){t=t.e
if(t!=null)++t.d}u.a=V.cv()
this.d.a1(0,new F.hn(u))
u=u.a
this.x=u.A(0,Math.sqrt(u.I(u)))
u=this.a
if(u!=null){u.a4()
u=this.a.e
if(u!=null)u.af()}return!0},
u:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.P()},
E:function(a){var u,t,s
u=H.b([],[P.l])
C.a.h(u,C.c.aq(J.ao(this.e),0))
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
C.a.h(u,V.G(this.ch,3,0))
t=this.cx
if(t!=null)C.a.h(u,t.i(0))
else C.a.h(u,"-")
s=C.a.F(u,", ")
return a+"{"+s+"}"},
P:function(){return this.E("")}}
F.ho.prototype={
$1:function(a){var u,t
H.f(a,"$ia1")
u=a==null?null:a.d
if(u!=null){t=this.a
t.a=t.a.C(0,u)}},
$S:9}
F.hn.prototype={
$1:function(a){var u,t
H.f(a,"$ia1")
u=a==null?null:a.e
if(u!=null){t=this.a
t.a=t.a.C(0,u)}},
$S:9}
F.he.prototype={
w:function(){var u,t,s,r
if(this.b){u=this.c
t=u.length
for(s=0,r=0;r<t;++r){if(r>=u.length)return H.c(u,r)
u[r].e=s;++s}this.b=!1}},
h:function(a,b){var u,t
u=b.a
if(u!=null){if(u===this.a)return!1
throw H.e(P.r("May not add a vertex already attached to another shape to this shape."))}u=this.c
b.e=u.length
t=this.a
b.a=t
C.a.h(u,b)
t.a4()
return!0},
jI:function(a,b,c,d,e,f,g,h,i){var u=F.hd(a,b,c,d,e,f,g,h,i)
this.h(0,u)
return u},
bs:function(a,b,c,d,e,f){return this.jI(a,null,b,c,null,d,e,f,0)},
gn:function(a){return this.c.length},
as:function(){var u,t,s
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.z)(u),++s)u[s].ct()
return!0},
cs:function(){var u,t,s
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.z)(u),++s)u[s].cr()
return!0},
jN:function(){var u,t,s,r,q,p,o,n
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.z)(u),++s){r=u[s]
if(r.z==null){q=r.r
p=q.a
o=q.b
n=q.c
if(typeof n!=="number")return n.k()
n=q.A(0,Math.sqrt(p*p+o*o+n*n))
if(!J.I(r.z,n)){r.z=n
q=r.a
if(q!=null){q=q.e
if(q!=null)q.D(null)}}}}return!0},
i:function(a){return this.P()},
E:function(a){var u,t,s,r
this.w()
u=H.b([],[P.l])
for(t=this.c,s=t.length,r=0;r<t.length;t.length===s||(0,H.z)(t),++r)C.a.h(u,t[r].E(a))
return C.a.F(u,"\n")},
P:function(){return this.E("")},
sji:function(a){this.c=H.h(a,"$ia",[F.ad],"$aa")}}
F.hf.prototype={
gn:function(a){return this.b.length+this.c.length+this.d.length},
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
a1:function(a,b){H.m(b,{func:1,ret:-1,args:[F.a1]})
C.a.a1(this.b,b)
C.a.a1(this.c,new F.hg(this,b))
C.a.a1(this.d,new F.hh(this,b))},
i:function(a){return this.P()},
E:function(a){var u,t,s,r
u=H.b([],[P.l])
for(t=this.b,s=t.length,r=0;r<t.length;t.length===s||(0,H.z)(t),++r)C.a.h(u,t[r].E(a))
for(t=this.c,s=t.length,r=0;r<t.length;t.length===s||(0,H.z)(t),++r)C.a.h(u,t[r].E(a))
for(t=this.d,s=t.length,r=0;r<t.length;t.length===s||(0,H.z)(t),++r)C.a.h(u,t[r].E(a))
return C.a.F(u,"\n")},
P:function(){return this.E("")},
shc:function(a){this.b=H.h(a,"$ia",[F.a1],"$aa")},
shd:function(a){this.c=H.h(a,"$ia",[F.a1],"$aa")},
she:function(a){this.d=H.h(a,"$ia",[F.a1],"$aa")}}
F.hg.prototype={
$1:function(a){H.f(a,"$ia1")
if(!J.I(a.a,this.a))this.b.$1(a)},
$S:9}
F.hh.prototype={
$1:function(a){var u
H.f(a,"$ia1")
u=this.a
if(!J.I(a.a,u)&&!J.I(a.b,u))this.b.$1(a)},
$S:9}
F.hi.prototype={
gn:function(a){return this.b.length+this.c.length},
j:function(a,b){var u,t,s
u=this.b
t=u.length
if(b>=t){u=this.c
s=b-t
if(s<0||s>=u.length)return H.c(u,s)
return u[s]}else{if(b<0)return H.c(u,b)
return u[b]}},
i:function(a){return this.P()},
E:function(a){var u,t,s,r
u=H.b([],[P.l])
for(t=this.b,s=t.length,r=0;r<t.length;t.length===s||(0,H.z)(t),++r)C.a.h(u,t[r].E(a))
for(t=this.c,s=t.length,r=0;r<t.length;t.length===s||(0,H.z)(t),++r)C.a.h(u,t[r].E(a))
return C.a.F(u,"\n")},
P:function(){return this.E("")},
sho:function(a){this.b=H.h(a,"$ia",[F.b0],"$aa")},
shp:function(a){this.c=H.h(a,"$ia",[F.b0],"$aa")}}
F.hk.prototype={}
F.hj.prototype={
bb:function(a,b,c){return J.I(b.f,c.f)}}
F.hl.prototype={}
F.fj.prototype={
cN:function(a){var u,t,s,r,q,p,o,n,m,l,k
H.h(a,"$ia",[F.ad],"$aa")
u=V.cv()
for(t=a.length,s=0;s<t;++s){r=a[s].r
if(r!=null){q=u.a
p=r.a
o=u.b
n=r.b
m=u.c
r=r.c
if(typeof m!=="number")return m.C()
if(typeof r!=="number")return H.u(r)
u=new V.K(q+p,o+n,m+r)}}u=u.A(0,Math.sqrt(u.I(u)))
for(t=a.length,r=u==null,s=0;s<a.length;a.length===t||(0,H.z)(a),++s){l=a[s]
if(r)k=null
else{q=u.a
p=u.b
o=u.c
if(typeof o!=="number")return o.k()
k=u.A(0,Math.sqrt(q*q+p*p+o*o))}if(!J.I(l.r,k)){l.r=k
q=l.a
if(q!=null){q=q.e
if(q!=null)q.D(null)}}}return}}
F.hm.prototype={
gn:function(a){return this.b.length},
i:function(a){return this.P()},
E:function(a){var u,t,s,r
u=H.b([],[P.l])
for(t=this.b,s=t.length,r=0;r<t.length;t.length===s||(0,H.z)(t),++r)C.a.h(u,t[r].E(a))
return C.a.F(u,"\n")},
P:function(){return this.E("")},
sce:function(a){this.b=H.h(a,"$ia",[F.bl],"$aa")}}
O.ez.prototype={
gl:function(){var u=this.f
if(u==null){u=D.D()
this.f=u}return u},
v:function(a){var u=this.f
if(u!=null)u.D(a)},
aa:function(a){},
bT:function(a,b){var u,t,s,r,q,p
u=this.a
if(u==null){t=H.f(a.fr.j(0,"Depth"),"$id_")
if(t==null){u=a.a
t=new A.d_(u,"Depth")
t.bl(u,"Depth")
t.bN($.l8,$.l7)
t.z=t.x.j(0,"posAttr")
t.Q=H.d(t.y.j(0,"objClr"),"$iE")
t.ch=H.d(t.y.j(0,"fogClr"),"$iE")
t.cx=H.d(t.y.j(0,"fogStart"),"$iM")
t.cy=H.d(t.y.j(0,"fogStop"),"$iM")
t.db=H.d(t.y.j(0,"viewObjMat"),"$ia3")
t.dx=H.d(t.y.j(0,"projMat"),"$ia3")
a.bt(t)}this.a=t
u=t}s=b.e
if(!(s instanceof Z.b8)){b.e=null
s=null}if(s==null){u=b.d.bu(new Z.bL(a.a),$.af())
s=u.ao($.af())
r=this.a
s.e=r.z.c
b.e=u
u=r}u.V(a)
s=this.b
r=u.Q
r.toString
q=s.a
p=s.b
s=s.c
C.b.t(r.a,r.d,q,p,s)
s=this.c
p=u.ch
p.toString
q=s.a
r=s.b
s=s.c
C.b.t(p.a,p.d,q,r,s)
s=this.d
r=u.cx
C.b.J(r.a,r.d,s)
s=this.e
r=u.cy
C.b.J(r.a,r.d,s)
s=a.cy.ga_()
r=u.dx
r.toString
r.ab(s.a5(0,!0))
s=a.gf9()
u=u.db
u.toString
u.ab(s.a5(0,!0))
s=b.e
s.V(a)
s.a9(a)
s.aN(a)
s=this.a
s.toString
C.b.bj(a.a,null)
s.x.bx()}}
O.d5.prototype={
gl:function(){var u=this.x
if(u==null){u=D.D()
this.x=u}return u},
v:function(a){var u
H.f(a,"$ix")
u=this.x
if(u!=null)u.D(a)},
ag:function(){return this.v(null)},
se5:function(a){var u,t
u=this.d
if(u!=a){if(u!=null)u.gl().H(0,this.ga6())
t=this.d
this.d=a
if(a!=null)a.gl().h(0,this.ga6())
u=new D.v("depthTexture",t,this.d,this,[T.bo])
u.b=!0
this.v(u)}},
aa:function(a){},
T:function(a,b){H.h(a,"$ia",[T.b5],"$aa")
if(b!=null)if(!C.a.aA(a,b)){b.a=a.length
C.a.h(a,b)}},
bT:function(a,b){var u,t,s,r,q,p
if(this.a==null){u=H.f(a.fr.j(0,"GaussianBlur"),"$id6")
if(u==null){t=a.a
u=new A.d6(t,"GaussianBlur")
u.bl(t,"GaussianBlur")
u.bN($.lc,$.lb)
u.z=u.x.j(0,"posAttr")
u.Q=u.x.j(0,"txtAttr")
u.ch=H.d(u.y.j(0,"projViewObjMat"),"$ia3")
u.cx=H.d(u.y.j(0,"txt2DMat"),"$ibK")
u.cy=H.d(u.y.j(0,"colorTxt"),"$ia0")
u.db=H.d(u.y.j(0,"depthTxt"),"$ia0")
u.dx=H.d(u.y.j(0,"nullColorTxt"),"$iC")
u.dy=H.d(u.y.j(0,"nullDepthTxt"),"$iC")
u.fr=H.d(u.y.j(0,"width"),"$iM")
u.fx=H.d(u.y.j(0,"height"),"$iM")
u.fy=H.d(u.y.j(0,"highOffset"),"$iM")
u.go=H.d(u.y.j(0,"lowOffset"),"$iM")
u.id=H.d(u.y.j(0,"depthLimit"),"$iM")
a.bt(u)}this.a=u}if(b.e==null){t=b.d
s=$.af()
r=$.az()
r=t.bu(new Z.bL(a.a),new Z.au(s.a|r.a))
r.ao($.af()).e=this.a.z.c
r.ao($.az()).e=this.a.Q.c
b.e=r}q=H.b([],[T.b5])
this.T(q,this.c)
this.T(q,this.d)
for(p=0;p<q.length;++p)q[p].V(a)
t=this.a
t.V(a)
s=this.c
t.ad(t.cy,t.dx,s)
s=this.d
t.ad(t.db,t.dy,s)
s=this.b
r=t.cx
r.toString
r.ab(s.a5(0,!0))
s=a.geX()
r=t.ch
r.toString
r.ab(s.a5(0,!0))
s=a.c
r=t.fr
C.b.J(r.a,r.d,s)
s=a.d
r=t.fx
C.b.J(r.a,r.d,s)
s=this.e
r=t.fy
C.b.J(r.a,r.d,s)
s=this.f
r=t.go
C.b.J(r.a,r.d,s)
s=this.r
t=t.id
C.b.J(t.a,t.d,s)
t=b.e
if(t instanceof Z.b8){t.V(a)
t.a9(a)
t.aN(a)}else b.e=null
t=this.a
t.toString
s=a.a
C.b.bj(s,null)
t.x.bx()
for(p=0;p<q.length;++p){t=q[p]
if(t.c){t.c=!1
C.b.br(s,33984+t.a)
C.b.ae(s,3553,null)}}}}
O.dl.prototype={
gl:function(){var u=this.dy
if(u==null){u=D.D()
this.dy=u}return u},
v:function(a){var u
H.f(a,"$ix")
u=this.dy
if(u!=null)u.D(a)},
ag:function(){return this.v(null)},
dG:function(a){H.f(a,"$ix")
this.a=null
this.v(a)},
iL:function(){return this.dG(null)},
hG:function(a,b){var u=V.a7
u=new D.bf(a,H.h(b,"$ik",[u],"$ak"),this,[u])
u.b=!0
this.v(u)},
hI:function(a,b){var u=V.a7
u=new D.bg(a,H.h(b,"$ik",[u],"$ak"),this,[u])
u.b=!0
this.v(u)},
di:function(){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7
u=this.dx
t=C.e.a7(u.e.length+3,4)*4
s=C.e.a7(u.f.length+3,4)*4
r=C.e.a7(u.r.length+3,4)*4
q=C.e.a7(u.x.length+3,4)*4
p=C.e.a7(u.y.length+3,4)*4
o=C.e.a7(u.z.length+3,4)*4
n=C.e.a7(this.e.a.length+3,4)*4
u=this.f.c
m=this.r.c
l=this.x.c
k=this.y.c
j=this.z.c
i=this.Q.c
h=this.cx.c
g=this.cy.c
f=this.db.c
e="MaterialLight_"+C.e.i(u.a)+C.e.i(m.a)+C.e.i(l.a)+C.e.i(k.a)+C.e.i(j.a)+C.e.i(i.a)+C.e.i(h.a)+C.e.i(g.a)+C.e.i(f.a)
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
a2=u===C.f||m===C.f||l===C.f||k===C.f||j===C.f||i===C.f||h===C.f||g===C.f||f===C.f
a3=u===C.i||m===C.i||l===C.i||k===C.i||j===C.i||i===C.i||h===C.i||g===C.i||f===C.i
a4=s+p+q+r+o>0
a5=n>0
a6=a0||!b||a
a7=$.af()
if(a0){b=$.aG()
a7=new Z.au(a7.a|b.a)}if(a1){b=$.aW()
a7=new Z.au(a7.a|b.a)}if(a2){b=$.az()
a7=new Z.au(a7.a|b.a)}if(a3){b=$.aX()
a7=new Z.au(a7.a|b.a)}if(a5){b=$.aV()
a7=new Z.au(a7.a|b.a)}return new A.fa(u,m,l,k,j,i,h,g,f,t,s,r,q,p,o,t+s+r+q+p+o,d,d,a4,a6,!0,!1,!1,c,a4,a,a0,a1,a2,a3,a5,!1,!1,!1,n,e.charCodeAt(0)==0?e:e,a7)},
T:function(a,b){H.h(a,"$ia",[T.b5],"$aa")
if(b!=null)if(!C.a.aA(a,b)){b.a=a.length
C.a.h(a,b)}},
aa:function(a){var u,t,s,r
for(u=this.dx.a,u=new J.ag(u,u.length,0,[H.t(u,0)]);u.B();){t=u.d
t.toString
s=$.bm
if(s==null){s=new V.a_(0,0,0)
$.bm=s}t.a=s
s=t.b
if(s!=null){r=s.aE(a,t)
if(r!=null)t.a=r.aZ(t.a)}}},
bT:function(a2,a3){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1
u=this.a
if(u==null){u=this.di()
t=H.f(a2.fr.j(0,u.at),"$idk")
if(t==null){t=A.lq(u,a2.a)
a2.bt(t)}this.a=t
a3.e=null
u=t}s=u.z
r=s.by
u=a3.e
if(!(u instanceof Z.b8)){a3.e=null
u=null}if(u==null||!u.d.u(0,r)){u=s.r1
if(u)a3.d.as()
q=s.r2
if(q){p=a3.d
o=p.e
if(o!=null)++o.d
p.d.cs()
p.a.cs()
p=p.e
if(p!=null)p.af()}p=s.ry
if(p){o=a3.d
n=o.e
if(n!=null)++n.d
o.a.jN()
o=o.e
if(o!=null)o.af()}m=a3.d.bu(new Z.bL(a2.a),r)
m.ao($.af()).e=this.a.Q.c
if(u)m.ao($.aG()).e=this.a.cx.c
if(q)m.ao($.aW()).e=this.a.ch.c
if(s.rx)m.ao($.az()).e=this.a.cy.c
if(p)m.ao($.aX()).e=this.a.db.c
if(s.x1)m.ao($.aV()).e=this.a.dx.c
a3.e=m}u=T.b5
l=H.b([],[u])
this.a.V(a2)
if(s.fx){q=this.a
p=a2.dx.ga_()
q=q.dy
q.toString
q.ab(p.a5(0,!0))}if(s.fy){q=this.a
p=a2.gf9()
q=q.fr
q.toString
q.ab(p.a5(0,!0))}q=this.a
p=a2.geX()
q=q.fy
q.toString
q.ab(p.a5(0,!0))
if(s.x2){q=this.a
p=this.b
q=q.k1
q.toString
q.ab(C.o.a5(p,!0))}if(s.y1){q=this.a
p=this.c
q=q.k2
q.toString
q.ab(C.o.a5(p,!0))}if(s.y2){q=this.a
p=this.d
q=q.k3
q.toString
q.ab(C.o.a5(p,!0))}if(s.aB>0){k=this.e.a.length
q=this.a.k4
C.b.M(q.a,q.d,k)
for(q=[P.q],j=0;j<k;++j){p=this.a
o=this.e.a
if(j>=o.length)return H.c(o,j)
o=o[j]
p.toString
H.f(o,"$ia7")
p=p.r1
if(j>=p.length)return H.c(p,j)
p=p[j]
i=new Float32Array(H.bq(H.h(o.a5(0,!0),"$ia",q,"$aa")))
C.b.cX(p.a,p.d,!1,i)}}switch(s.a){case C.d:break
case C.j:q=this.a
p=this.f.f
q=q.r2
q.toString
o=p.a
n=p.b
p=p.c
C.b.t(q.a,q.d,o,n,p)
break
case C.f:this.T(l,this.f.d)
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
C.b.t(p.a,p.d,o,n,q)
break
case C.i:this.T(l,this.f.e)
q=this.a
p=this.f.e
q.am(q.ry,q.x1,p)
p=this.a
q=this.f.f
p=p.r2
p.toString
o=q.a
n=q.b
q=q.c
C.b.t(p.a,p.d,o,n,q)
break}if(s.k2){switch(s.b){case C.d:break
case C.j:q=this.a
p=this.r.f
q=q.x2
q.toString
o=p.a
n=p.b
p=p.c
C.b.t(q.a,q.d,o,n,p)
break
case C.f:this.T(l,this.r.d)
q=this.a
p=this.r.d
q.ad(q.y1,q.aB,p)
p=this.a
q=this.r.f
p=p.x2
p.toString
o=q.a
n=q.b
q=q.c
C.b.t(p.a,p.d,o,n,q)
break
case C.i:this.T(l,this.r.e)
q=this.a
p=this.r.e
q.am(q.y2,q.aB,p)
p=this.a
q=this.r.f
p=p.x2
p.toString
o=q.a
n=q.b
q=q.c
C.b.t(p.a,p.d,o,n,q)
break}switch(s.c){case C.d:break
case C.j:q=this.a
p=this.x.f
q=q.at
q.toString
o=p.a
n=p.b
p=p.c
C.b.t(q.a,q.d,o,n,p)
break
case C.f:this.T(l,this.x.d)
q=this.a
p=this.x.d
q.ad(q.by,q.bz,p)
p=this.a
q=this.x.f
p=p.at
p.toString
o=q.a
n=q.b
q=q.c
C.b.t(p.a,p.d,o,n,q)
break
case C.i:this.T(l,this.x.e)
q=this.a
p=this.x.e
q.am(q.ec,q.bz,p)
p=this.a
q=this.x.f
p=p.at
p.toString
o=q.a
n=q.b
q=q.c
C.b.t(p.a,p.d,o,n,q)
break}switch(s.d){case C.d:break
case C.j:q=this.a
p=this.y.f
q=q.bA
q.toString
o=p.a
n=p.b
p=p.c
C.b.t(q.a,q.d,o,n,p)
break
case C.f:this.T(l,this.y.d)
q=this.a
p=this.y.d
q.ad(q.ed,q.bB,p)
p=this.a
q=this.y.f
p=p.bA
p.toString
o=q.a
n=q.b
q=q.c
C.b.t(p.a,p.d,o,n,q)
break
case C.i:this.T(l,this.y.e)
q=this.a
p=this.y.e
q.am(q.ee,q.bB,p)
p=this.a
q=this.y.f
p=p.bA
p.toString
o=q.a
n=q.b
q=q.c
C.b.t(p.a,p.d,o,n,q)
break}switch(s.e){case C.d:break
case C.j:q=this.a
p=this.z.f
q=q.bC
q.toString
o=p.a
n=p.b
p=p.c
C.b.t(q.a,q.d,o,n,p)
p=this.a
n=this.z.ch
p=p.bE
C.b.J(p.a,p.d,n)
break
case C.f:this.T(l,this.z.d)
q=this.a
p=this.z.d
q.ad(q.ef,q.bD,p)
p=this.a
q=this.z.f
p=p.bC
p.toString
o=q.a
n=q.b
q=q.c
C.b.t(p.a,p.d,o,n,q)
q=this.a
n=this.z.ch
q=q.bE
C.b.J(q.a,q.d,n)
break
case C.i:this.T(l,this.z.e)
q=this.a
p=this.z.e
q.am(q.eg,q.bD,p)
p=this.a
q=this.z.f
p=p.bC
p.toString
o=q.a
n=q.b
q=q.c
C.b.t(p.a,p.d,o,n,q)
q=this.a
n=this.z.ch
q=q.bE
C.b.J(q.a,q.d,n)
break}if(s.z>0){k=this.dx.e.length
q=this.a.er
C.b.M(q.a,q.d,k)
h=a2.db.ga_()
for(q=this.dx.e,p=q.length,g=0,f=0;f<q.length;q.length===p||(0,H.z)(q),++f){e=q[f]
o=this.a.cA
if(g>=o.length)return H.c(o,g)
d=o[g]
o=h.f5(e.gbw(e))
n=o.a
c=o.b
b=o.c
if(typeof b!=="number")return b.k()
b=o.A(0,Math.sqrt(n*n+c*c+b*b))
c=d.b
n=b.a
o=b.b
b=b.c
C.b.t(c.a,c.d,n,o,b)
b=e.gaz(e)
o=d.c
C.b.t(o.a,o.d,b.a,b.b,b.c);++g}}if(s.Q>0){k=this.dx.f.length
q=this.a.es
C.b.M(q.a,q.d,k)
h=a2.db.ga_()
for(q=this.dx.f,p=q.length,g=0,f=0;f<q.length;q.length===p||(0,H.z)(q),++f){e=q[f]
o=this.a.cB
if(g>=o.length)return H.c(o,g)
d=o[g]
o=e.a
n=d.b
c=o.a
b=o.b
o=o.c
C.b.t(n.a,n.d,c,b,o)
o=h.aZ(e.a)
b=d.c
C.b.t(b.a,b.d,o.a,o.b,o.c)
o=e.c
b=d.d
C.b.t(b.a,b.d,o.a,o.b,o.c)
o=e.d
b=d.e
C.b.J(b.a,b.d,o)
o=e.e
b=d.f
C.b.J(b.a,b.d,o)
o=e.f
b=d.r
C.b.J(b.a,b.d,o);++g}}if(s.ch>0){k=this.dx.r.length
q=this.a.eu
C.b.M(q.a,q.d,k)
h=a2.db.ga_()
for(q=this.dx.r,p=q.length,g=0,f=0;f<q.length;q.length===p||(0,H.z)(q),++f){e=q[f]
o=this.a.cC
if(g>=o.length)return H.c(o,g)
d=o[g]
o=e.gcQ(e)
n=d.b
C.b.t(n.a,n.d,o.a,o.b,o.c)
o=e.gbw(e).l8()
n=d.c
C.b.t(n.a,n.d,o.a,o.b,o.c)
o=h.aZ(e.gcQ(e))
n=d.d
C.b.t(n.a,n.d,o.a,o.b,o.c)
o=e.gaz(e)
n=d.e
C.b.t(n.a,n.d,o.a,o.b,o.c)
o=e.gl5()
n=d.f
C.b.J(n.a,n.d,o)
o=e.gl4()
n=d.r
C.b.J(n.a,n.d,o)
o=e.gdR()
n=d.x
C.b.J(n.a,n.d,o)
o=e.gdS()
n=d.y
C.b.J(n.a,n.d,o)
o=e.gdT()
n=d.z
C.b.J(n.a,n.d,o);++g}}if(s.cx>0){k=this.dx.x.length
q=this.a.ev
C.b.M(q.a,q.d,k)
h=a2.db.ga_()
for(q=this.dx.x,p=q.length,o=[u],g=0,f=0;f<q.length;q.length===p||(0,H.z)(q),++f){e=q[f]
n=this.a.cD
if(g>=n.length)return H.c(n,g)
d=n[g]
n=e.gbg()
H.h(l,"$ia",o,"$aa")
if(!C.a.aA(l,n)){n.a=l.length
C.a.h(l,n)}n=e.gbw(e)
c=d.d
C.b.t(c.a,c.d,n.a,n.b,n.c)
n=e.gl0()
c=d.b
C.b.t(c.a,c.d,n.a,n.b,n.c)
n=e.gbU(e)
c=d.c
C.b.t(c.a,c.d,n.a,n.b,n.c)
n=h.f5(e.gbw(e))
c=n.a
b=n.b
a=n.c
if(typeof a!=="number")return a.k()
a=n.A(0,Math.sqrt(c*c+b*b+a*a))
b=d.e
c=a.a
n=a.b
a=a.c
C.b.t(b.a,b.d,c,n,a)
a=e.gaz(e)
n=d.f
C.b.t(n.a,n.d,a.a,a.b,a.c)
a=e.gbg()
n=a.gcM(a)
if(!n){n=d.x
C.b.M(n.a,n.d,1)}else{n=d.r
c=a.d
b=n.a
n=n.d
if(!c)C.b.M(b,n,0)
else C.b.M(b,n,a.a)
n=d.x
C.b.M(n.a,n.d,0)}++g}}if(s.cy>0){k=this.dx.y.length
q=this.a.ew
C.b.M(q.a,q.d,k)
h=a2.db.ga_()
for(q=this.dx.y,p=q.length,o=[P.q],n=[u],g=0,f=0;f<q.length;q.length===p||(0,H.z)(q),++f){e=q[f]
c=this.a.cE
if(g>=c.length)return H.c(c,g)
d=c[g]
c=e.gbg()
H.h(l,"$ia",n,"$aa")
if(!C.a.aA(l,c)){c.a=l.length
C.a.h(l,c)}a0=h.k(0,e.ga_())
c=e.ga_()
b=$.bm
if(b==null){b=new V.a_(0,0,0)
$.bm=b}b=c.aZ(b)
c=d.b
C.b.t(c.a,c.d,b.a,b.b,b.c)
c=$.bm
if(c==null){c=new V.a_(0,0,0)
$.bm=c}c=a0.aZ(c)
b=d.c
C.b.t(b.a,b.d,c.a,c.b,c.c)
c=a0.eI()
b=d.d
i=new Float32Array(H.bq(H.h(new V.c8(c.a,c.b,c.c,c.e,c.f,c.r,c.y,c.z,c.Q).a5(0,!0),"$ia",o,"$aa")))
C.b.f6(b.a,b.d,!1,i)
b=e.gaz(e)
c=d.e
C.b.t(c.a,c.d,b.a,b.b,b.c)
b=e.gbg()
c=b.gcM(b)
if(!c){c=d.r
C.b.M(c.a,c.d,1)}else{c=d.f
a=b.gcM(b)
a1=c.a
c=c.d
if(!a)C.b.M(a1,c,0)
else C.b.M(a1,c,b.gl6(b))
c=d.r
C.b.M(c.a,c.d,0)}c=e.gdR()
b=d.x
C.b.J(b.a,b.d,c)
c=e.gdS()
b=d.y
C.b.J(b.a,b.d,c)
c=e.gdT()
b=d.z
C.b.J(b.a,b.d,c);++g}}if(s.db>0){k=this.dx.z.length
q=this.a.ex
C.b.M(q.a,q.d,k)
h=a2.db.ga_()
for(q=this.dx.z,p=q.length,u=[u],g=0,f=0;f<q.length;q.length===p||(0,H.z)(q),++f){e=q[f]
o=this.a.cF
if(g>=o.length)return H.c(o,g)
d=o[g]
o=e.gbg()
H.h(l,"$ia",u,"$aa")
if(!C.a.aA(l,o)){o.a=l.length
C.a.h(l,o)}o=e.gcQ(e)
n=d.b
C.b.t(n.a,n.d,o.a,o.b,o.c)
o=e.gbw(e)
n=d.c
C.b.t(n.a,n.d,o.a,o.b,o.c)
o=e.gl0()
n=d.d
C.b.t(n.a,n.d,o.a,o.b,o.c)
o=e.gbU(e)
n=d.e
C.b.t(n.a,n.d,o.a,o.b,o.c)
o=h.aZ(e.gcQ(e))
n=d.f
C.b.t(n.a,n.d,o.a,o.b,o.c)
o=e.gbg()
n=o.gcM(o)
if(!n){o=d.x
C.b.M(o.a,o.d,1)}else{n=d.r
c=o.d
b=n.a
n=n.d
if(!c)C.b.M(b,n,0)
else C.b.M(b,n,o.a)
o=d.x
C.b.M(o.a,o.d,0)}o=e.gaz(e)
n=d.y
C.b.t(n.a,n.d,o.a,o.b,o.c)
o=e.gl9()
n=d.z
C.b.J(n.a,n.d,o)
o=e.gla()
n=d.Q
C.b.J(n.a,n.d,o)
o=e.gdR()
n=d.ch
C.b.J(n.a,n.d,o)
o=e.gdS()
n=d.cx
C.b.J(n.a,n.d,o)
o=e.gdT()
n=d.cy
C.b.J(n.a,n.d,o);++g}}}switch(s.f){case C.d:break
case C.j:break
case C.f:this.T(l,this.Q.d)
u=this.a
q=this.Q.d
u.ad(u.eh,u.bF,q)
break
case C.i:this.T(l,this.Q.e)
u=this.a
q=this.Q.e
u.am(u.ei,u.bF,q)
break}if(s.fr){u=this.a
q=a2.Q
if(q==null){q=a2.db.ga_().eI()
a2.Q=q}u=u.id
u.toString
u.ab(q.a5(0,!0))}if(s.dy){this.T(l,this.ch)
u=this.a
q=this.ch
u.am(u.ej,u.ek,q)
switch(s.r){case C.d:break
case C.j:u=this.a
q=this.cx.f
u=u.bG
u.toString
p=q.a
o=q.b
q=q.c
C.b.t(u.a,u.d,p,o,q)
break
case C.f:this.T(l,this.cx.d)
u=this.a
q=this.cx.d
u.ad(u.el,u.bH,q)
q=this.a
u=this.cx.f
q=q.bG
q.toString
p=u.a
o=u.b
u=u.c
C.b.t(q.a,q.d,p,o,u)
break
case C.i:this.T(l,this.cx.e)
u=this.a
q=this.cx.e
u.am(u.em,u.bH,q)
q=this.a
u=this.cx.f
q=q.bG
q.toString
p=u.a
o=u.b
u=u.c
C.b.t(q.a,q.d,p,o,u)
break}switch(s.x){case C.d:break
case C.j:u=this.a
q=this.cy.f
u=u.bJ
u.toString
p=q.a
o=q.b
q=q.c
C.b.t(u.a,u.d,p,o,q)
q=this.a
o=this.cy.ch
q=q.bI
C.b.J(q.a,q.d,o)
break
case C.f:this.T(l,this.cy.d)
u=this.a
q=this.cy.d
u.ad(u.en,u.bK,q)
q=this.a
u=this.cy.f
q=q.bJ
q.toString
p=u.a
o=u.b
u=u.c
C.b.t(q.a,q.d,p,o,u)
u=this.a
o=this.cy.ch
u=u.bI
C.b.J(u.a,u.d,o)
break
case C.i:this.T(l,this.cy.e)
u=this.a
q=this.cy.e
u.am(u.eo,u.bK,q)
q=this.a
u=this.cy.f
q=q.bJ
q.toString
p=u.a
o=u.b
u=u.c
C.b.t(q.a,q.d,p,o,u)
u=this.a
o=this.cy.ch
u=u.bI
C.b.J(u.a,u.d,o)
break}}u=s.y
q=u!==C.d
if(q){switch(u){case C.d:break
case C.j:u=this.a
p=this.db.f
u=u.bL
C.b.J(u.a,u.d,p)
break
case C.f:this.T(l,this.db.d)
u=this.a
p=this.db.d
u.ad(u.ep,u.bM,p)
p=this.a
u=this.db.f
p=p.bL
C.b.J(p.a,p.d,u)
break
case C.i:this.T(l,this.db.e)
u=this.a
p=this.db.e
u.am(u.eq,u.bM,p)
p=this.a
u=this.db.f
p=p.bL
C.b.J(p.a,p.d,u)
break}u=a2.a
C.b.b9(u,3042)
C.b.jM(u,770,771)}for(j=0;j<l.length;++j)l[j].V(a2)
u=a3.e
u.V(a2)
u.a9(a2)
u.aN(a2)
if(q)C.b.jY(a2.a,3042)
for(u=a2.a,j=0;j<l.length;++j){q=l[j]
if(q.c){q.c=!1
C.b.br(u,33984+q.a)
C.b.ae(u,3553,null)}}q=this.a
q.toString
C.b.bj(u,null)
q.x.bx()},
i:function(a){var u=this.a
if(u!=null)return u.b
else return this.di().at},
sfV:function(a){this.e=H.h(a,"$iP",[V.a7],"$aP")}}
O.f8.prototype={
iO:function(a){var u=this.f
if(!(Math.abs(u-a)<$.A().a)){this.f=a
u=new D.v(this.b,u,a,this,[P.q])
u.b=!0
this.a.v(u)}},
ax:function(){this.d4()
this.iO(1)}}
O.c7.prototype={
v:function(a){this.a.v(H.f(a,"$ix"))},
ag:function(){return this.v(null)},
ax:function(){},
iQ:function(a){var u,t
u=this.d
if(u!=a){if(u!=null)u.gl().H(0,this.ga6())
t=this.d
this.d=a
if(a!=null)a.gl().h(0,this.ga6())
u=new D.v(this.b+".texture2D",t,this.d,this,[T.bo])
u.b=!0
this.a.v(u)}},
iR:function(a){},
sbV:function(a){var u
if(a==null){if(this.c===C.f){this.c=C.j
u=this.a
u.a=null
u.v(null)}}else{u=this.c
if(u!==C.f){if(u===C.d)this.ax()
this.c=C.f
this.iR(null)
u=this.a
u.a=null
u.v(null)}}this.iQ(a)}}
O.f9.prototype={}
O.aM.prototype={
dI:function(a){var u,t
if(!J.I(this.f,a)){u=this.f
this.f=a
t=new D.v(this.b+".color",u,a,this,[V.T])
t.b=!0
this.a.v(t)}},
ax:function(){this.d4()
this.dI(new V.T(1,1,1))},
saz:function(a,b){var u
if(this.c===C.d){this.c=C.j
this.ax()
u=this.a
u.a=null
u.v(null)}this.dI(b)}}
O.fb.prototype={
iP:function(a){var u=this.ch
if(!(Math.abs(u-a)<$.A().a)){this.ch=a
u=new D.v(this.b+".refraction",u,a,this,[P.q])
u.b=!0
this.a.v(u)}},
ax:function(){this.c3()
this.iP(1)}}
O.fc.prototype={
ck:function(a){var u=this.ch
if(!(Math.abs(u-a)<$.A().a)){this.ch=a
u=new D.v(this.b+".shininess",u,a,this,[P.q])
u.b=!0
this.a.v(u)}},
ax:function(){this.c3()
this.ck(100)}}
O.b4.prototype={}
O.dG.prototype={
gl:function(){var u=this.e
if(u==null){u=D.D()
this.e=u}return u},
v:function(a){var u
H.f(a,"$ix")
u=this.e
if(u!=null)u.D(a)},
ag:function(){return this.v(null)},
hW:function(a,b){var u,t,s,r,q,p,o
H.h(b,"$ik",[O.aC],"$ak")
for(u=b.length,t=this.ga6(),s={func:1,ret:-1,args:[D.x]},r=[s],q=0;q<b.length;b.length===u||(0,H.z)(b),++q){p=b[q]
if(p!=null){o=p.f
if(o==null){o=new D.bc()
o.sac(null)
o.sb2(null)
o.c=null
o.d=0
p.f=o}H.m(t,s)
if(o.a==null)o.sac(H.b([],r))
o=o.a;(o&&C.a).h(o,t)}}this.ag()},
hY:function(a,b){var u,t
H.h(b,"$ik",[O.aC],"$ak")
for(u=b.gU(b),t=this.ga6();u.B();)u.gN().gl().H(0,t)
this.ag()},
aa:function(a){},
bT:function(a,b){var u,t,s,r,q,p,o,n,m,l,k,j,i,h
u=C.e.a7(this.c.a.length+3,4)*4
if(u!==this.d){this.d=u
this.b=null}t=this.b
if(t==null){t="TextureLayout_"+u
s=H.f(a.fr.j(0,t),"$idH")
if(s==null){s=A.lL(u,a.a)
a.bt(s)}this.b=s
t=s}if(b.e==null){t=b.d.bu(new Z.bL(a.a),$.af())
r=t.ao($.af())
q=this.b
r.e=q.z.c
b.e=t
t=q}t.V(a)
t=T.b5
p=H.b([],[t])
for(r=[P.q],t=[t],o=0,n=0;q=this.c.a,n<q.length;++n){m=q[n]
if(m!=null&&m.a!=null){q=m.a
H.h(p,"$ia",t,"$aa")
if(q!=null)if(!C.a.aA(p,q)){q.a=p.length
C.a.h(p,q)}q=this.b
l=m.a
q=q.cx
if(o>=q.length)return H.c(q,o)
q=q[o]
k=l==null||!l.d
j=q.a
q=q.d
if(k)C.b.M(j,q,0)
else C.b.M(j,q,l.a)
q=this.b
l=m.b
q=q.cy
if(o>=q.length)return H.c(q,o)
q=q[o]
if(l==null){l=$.fd
if(l==null){l=new V.a7(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1)
$.fd=l}}i=new Float32Array(H.bq(H.h(l.a5(0,!0),"$ia",r,"$aa")))
C.b.cX(q.a,q.d,!1,i)
q=this.b
h=m.c
q.toString
if(h==null){l=$.cg
if(l==null){l=V.cf(0,0,1,1)
$.cg=l
h=l}else h=l}l=q.db
if(o>=l.length)return H.c(l,o)
l=l[o]
C.b.bX(l.a,l.d,h.a,h.b)
q=q.dx
if(o>=q.length)return H.c(q,o)
q=q[o]
C.b.bX(q.a,q.d,h.c,h.d)
q=this.b
h=m.d
q.toString
if(h==null){l=$.cg
if(l==null){l=V.cf(0,0,1,1)
$.cg=l
h=l}else h=l}l=q.dy
if(o>=l.length)return H.c(l,o)
l=l[o]
C.b.bX(l.a,l.d,h.a,h.b)
q=q.fr
if(o>=q.length)return H.c(q,o)
q=q[o]
C.b.bX(q.a,q.d,h.c,h.d)
q=this.b
l=m.e
q=q.fx
if(o>=q.length)return H.c(q,o)
q=q[o]
l=l?1:0
C.b.M(q.a,q.d,l);++o}}t=this.b.Q
C.b.M(t.a,t.d,o)
t=this.b
r=this.a
t=t.ch
t.toString
q=r.a
l=r.b
k=r.c
r=r.d
C.b.l_(t.a,t.d,q,l,k,r)
for(n=0;n<p.length;++n)p[n].V(a)
t=b.e
if(t instanceof Z.b8){t.V(a)
t.a9(a)
t.aN(a)}else b.e=null
t=this.b
t.toString
r=a.a
C.b.bj(r,null)
t.x.bx()
for(n=0;n<p.length;++n){t=p[n]
if(t.c){t.c=!1
C.b.br(r,33984+t.a)
C.b.ae(r,3553,null)}}},
sh9:function(a){this.c=H.h(a,"$iP",[O.aC],"$aP")}}
O.aC.prototype={
gl:function(){var u=this.f
if(u==null){u=D.D()
this.f=u}return u},
v:function(a){var u
H.f(a,"$ix")
u=this.f
if(u!=null)u.D(a)},
ag:function(){return this.v(null)}}
T.b5.prototype={}
T.bo.prototype={}
T.fK.prototype={
dJ:function(){if(!this.d){this.d=!0
var u=this.y
if(u!=null)u.ea()}},
gl:function(){var u=this.y
if(u==null){u=D.D()
this.y=u}return u},
V:function(a){var u
if(!this.c&&this.d){this.c=!0
u=a.a
C.b.br(u,33984+this.a)
C.b.ae(u,3553,this.b)}}}
T.fL.prototype={
kk:function(a,b,c,d,e){var u,t,s,r
u=this.a
t=u.createTexture()
C.b.ae(u,3553,t)
C.b.aD(u,3553,10242,33071)
C.b.aD(u,3553,10243,33071)
C.b.aD(u,3553,10241,9729)
C.b.aD(u,3553,10240,9729)
C.b.ae(u,3553,null);++this.d
s=document.createElement("img")
s.src=a
r=T.iY(0,t)
u=W.n
W.a4(s,"load",H.m(new T.fM(this,r,s,!1,t,!1,!1),{func:1,ret:-1,args:[u]}),!1,u)
return r},
bP:function(a){return this.kk(a,!1,!1,!1,!1)},
iM:function(a,b,c){var u,t,s,r
b=V.cK(b,2)
u=V.cK(a.width,2)
t=V.cK(a.height,2)
u=Math.min(u,b)
t=Math.min(t,b)
if(a.width===u&&a.height===t)return a
else{s=W.iN(null,null)
s.width=u
s.height=t
r=H.f(C.n.fh(s,"2d"),"$ibw")
r.imageSmoothingEnabled=!1;(r&&C.x).k_(r,a,0,0,s.width,s.height)
return P.mx(C.x.hk(r,0,0,s.width,s.height))}}}
T.fM.prototype={
$1:function(a){var u,t,s,r
u=this.b
t=this.c
u.e=t.width
u.f=t.height
s=this.a
r=s.iM(t,s.b,this.d)
u.r=t.width
u.x=t.height
t=s.a
C.b.ae(t,3553,this.e)
C.b.kF(t,37440,this.f?1:0)
C.b.kR(t,3553,0,6408,6408,5121,r)
if(this.r)C.b.fd(t,3553)
C.b.ae(t,3553,null)
u.dJ();++s.e},
$S:14}
T.fN.prototype={}
V.ef.prototype={
aW:function(a){return!0},
i:function(a){return"all"},
$ib1:1}
V.b1.prototype={}
V.dj.prototype={
aW:function(a){var u,t,s
for(u=this.a,t=u.length,s=0;s<u.length;u.length===t||(0,H.z)(u),++s)if(u[s].aW(a))return!0
return!1},
i:function(a){var u,t,s,r,q
for(u=this.a,t=u.length,s="",r=0;r<u.length;u.length===t||(0,H.z)(u),++r){q=u[r]
if(s.length!==0)s+=", "
s+=q.i(0)}return s},
saI:function(a){this.a=H.h(a,"$ia",[V.b1],"$aa")},
$ib1:1}
V.b2.prototype={
aW:function(a){return!this.fs(a)},
i:function(a){return"!["+this.d3(0)+"]"}}
V.fv.prototype={
fw:function(a){var u,t
if(a.a.length<=0)throw H.e(P.r("May not create a SetMatcher with zero characters."))
u=new H.aB([P.j,P.W])
for(t=new H.dh(a,a.gn(a),0,[H.ar(a,"R",0)]);t.B();)u.p(0,t.d,!0)
this.siN(u)},
aW:function(a){return this.a.bv(a)},
i:function(a){return P.dC(this.a.gcJ(),0,null)},
siN:function(a){this.a=H.h(a,"$iH",[P.j,P.W],"$aH")},
$ib1:1}
V.ci.prototype={
F:function(a,b){var u,t,s,r
for(u=this.c,t=u.length,s=0;s<t;++s){r=u[s]
if(r.b.b===b)return r}r=new V.cm(this.a.R(0,b))
r.saI(H.b([],[V.b1]))
r.c=!1
C.a.h(this.c,r)
return r},
k7:function(a){var u,t,s,r
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.z)(u),++s){r=u[s]
if(r.aW(a))return r}return},
i:function(a){return this.b},
sjc:function(a){this.c=H.h(a,"$ia",[V.cm],"$aa")}}
V.dM.prototype={
i:function(a){var u,t
u=H.kA(this.b,"\n","\\n")
t=H.kA(u,"\t","\\t")
return this.a+":"+this.c+':"'+t+'"'}}
V.cl.prototype={
i:function(a){return this.b},
siG:function(a){var u=P.l
this.c=H.h(a,"$iH",[u,u],"$aH")}}
V.fP.prototype={
R:function(a,b){var u=this.a.j(0,b)
if(u==null){u=new V.ci(this,b)
u.sjc(H.b([],[V.cm]))
u.d=null
this.a.p(0,b,u)}return u},
bi:function(a){var u,t
u=this.b.j(0,a)
if(u==null){u=new V.cl(this,a)
t=P.l
u.siG(new H.aB([t,t]))
this.b.p(0,a,u)}return u},
kW:function(a){var u,t,s,r,q,p,o,n,m,l,k,j
u=H.b([],[V.dM])
t=this.c
s=[P.j]
r=H.b([],s)
for(q=a.length,p=null,o=0;!0;){if(o>=q){if(p!=null)C.a.h(u,p)
return u}n=C.c.K(a,o)
m=t.k7(n)
if(m==null){if(p==null){C.a.h(r,n)
l=P.dC(r,0,null)
throw H.e(P.r("Untokenizable string [state: "+t.b+", index "+o+']: "'+l+'"'))}C.a.h(u,p)
o=p.c+1
r=H.b([],s)
t=this.c
p=null}else{if(!m.c)C.a.h(r,n)
t=m.b
if(t.d!=null){l=P.dC(r,0,null)
k=t.d
j=k.c.j(0,l)
p=new V.dM(j==null?k.b:j,l,o)}++o}}},
sj0:function(a){this.a=H.h(a,"$iH",[P.l,V.ci],"$aH")},
sj5:function(a){this.b=H.h(a,"$iH",[P.l,V.cl],"$aH")}}
V.cm.prototype={
i:function(a){return this.b.b+": "+this.d3(0)}}
X.ej.prototype={
gl:function(){var u=this.fr
if(u==null){u=D.D()
this.fr=u}return u},
ar:function(a){var u=this.fr
if(u!=null)u.D(a)},
saO:function(a,b){var u
if(b<1)b=1
u=this.a
if(u!==b){this.y=null
this.a=b
this.c=b
u=new D.v("width",u,b,this,[P.j])
u.b=!0
this.ar(u)}},
saL:function(a,b){var u
if(b<1)b=1
u=this.b
if(u!==b){this.y=null
this.b=b
this.d=b
u=new D.v("height",u,b,this,[P.j])
u.b=!0
this.ar(u)}},
V:function(a){var u,t,s,r,q,p,o,n,m,l,k,j
if(this.f){u=a.a
t=u.drawingBufferWidth
s=this.r
if(typeof t!=="number")return t.k()
this.saO(0,C.h.a2(t*s))
u=u.drawingBufferHeight
s=this.x
if(typeof u!=="number")return u.k()
this.saL(0,C.h.a2(u*s))}if(this.y==null){u=a.a
t=this.ch
s=this.a
r=this.b
q=H.a6(C.b.c_(u,3379))
p=V.cK(s,2)
o=V.cK(r,2)
q=V.cK(q,2)
p=Math.min(p,q)
o=Math.min(o,q)
n=u.createTexture()
C.b.ae(u,3553,n)
C.b.aD(u,3553,10242,33071)
C.b.aD(u,3553,10243,33071)
C.b.aD(u,3553,10241,9729)
C.b.aD(u,3553,10240,9729)
C.b.f1(u,3553,0,6408,p,o,0,6408,5121,null)
C.b.ae(u,3553,null)
m=T.iY(0,n)
m.e=s
m.f=r
m.r=p
m.x=o
m.dJ()
t.b=m.b
t.c=m.c
t.d=m.d
t.e=m.e
t.f=m.f
t.r=m.r
t.x=m.x
t=t.y
if(t!=null)t.ea()
t=this.ch
s=t.b
this.z=s
this.c=t.r
this.d=t.x
C.b.ae(u,3553,s)
t=u.createRenderbuffer()
this.Q=t
C.b.dV(u,36161,t)
C.b.kK(u,36161,33189,this.c,this.d)
t=u.createFramebuffer()
this.y=t
C.b.aK(u,36160,t)
C.b.eB(u,36160,36064,3553,this.z,0)
C.b.kc(u,36160,36096,36161,this.Q)
C.b.ae(u,3553,null)
C.b.dV(u,36161,null)
C.b.aK(u,36160,null)}u=a.a
C.b.aK(u,36160,this.y)
C.b.b9(u,2884)
C.b.b9(u,2929)
C.b.e4(u,513)
t=this.dy
s=t.c
a.c=C.h.a2(s*this.a)
r=t.d
a.d=C.h.a2(r*this.b)
l=t.a
k=this.c
if(typeof k!=="number")return H.u(k)
j=C.h.a2(l*k)
t=t.b
l=this.d
if(typeof l!=="number")return H.u(l)
C.b.fa(u,j,C.h.a2(t*l),C.h.a2(s*k),C.h.a2(r*l))
C.b.e0(u,this.db)
t=this.cx
C.b.e_(u,t.a,t.b,t.c,t.d)
C.b.dZ(u,16640)},
aN:function(a){C.b.aK(a.a,36160,null)}}
X.bu.prototype={$iaO:1}
X.eO.prototype={
gl:function(){var u=this.x
if(u==null){u=D.D()
this.x=u}return u},
V:function(a){var u,t,s,r,q,p,o,n
u=a.a
C.b.aK(u,36160,null)
C.b.b9(u,2884)
C.b.b9(u,2929)
C.b.e4(u,513)
t=u.drawingBufferWidth
s=u.drawingBufferHeight
r=this.r
q=r.a
if(typeof t!=="number")return H.u(t)
p=C.h.a2(q*t)
q=r.b
if(typeof s!=="number")return H.u(s)
o=C.h.a2(q*s)
q=C.h.a2(r.c*t)
a.c=q
r=C.h.a2(r.d*s)
a.d=r
C.b.fa(u,p,o,q,r)
C.b.e0(u,this.c)
if(this.b){r=this.a
C.b.e_(u,r.a,r.b,r.c,r.d)
n=16640}else n=256
C.b.dZ(u,n)},
aN:function(a){}}
X.eP.prototype={
gl:function(){var u=this.b
if(u==null){u=D.D()
this.b=u}return u},
$iaO:1,
$ibu:1}
X.ds.prototype={
gl:function(){var u=this.f
if(u==null){u=D.D()
this.f=u}return u},
ar:function(a){var u
H.f(a,"$ix")
u=this.f
if(u!=null)u.D(a)},
fP:function(){return this.ar(null)},
sbc:function(a){var u,t
if(!J.I(this.b,a)){u=this.b
if(u!=null)u.gl().H(0,this.gd8())
t=this.b
this.b=a
if(a!=null)a.gl().h(0,this.gd8())
u=new D.v("mover",t,this.b,this,[U.a9])
u.b=!0
this.ar(u)}},
$iaO:1,
$ibu:1}
X.ck.prototype={}
V.eq.prototype={
aU:function(a,b,c,d){var u,t,s,r,q,p,o,n,m
H.m(c,{func:1,ret:-1,args:[P.W]})
if(this.c==null)return
u=this.d.length
t=P.j1().gbS().j(0,this.a)
if(t==null||t.length<=u){s=d
r=!0}else{if(u>=t.length)return H.c(t,u)
s=t[u]==="1"
r=!1}c.$1(s)
q=document
p=q.createElement("label")
o=p.style
o.whiteSpace="nowrap"
J.jn(this.c).h(0,p)
n=W.ld("checkbox")
n.checked=s
o=W.n
W.a4(n,"change",H.m(new V.er(this,c,n,u),{func:1,ret:-1,args:[o]}),!1,o)
C.B.Y(p,n)
m=q.createElement("span")
m.textContent=b
C.B.Y(p,m)
J.jn(this.c).h(0,q.createElement("br"))
C.a.h(this.d,n)
if(r)this.dN(u,s)},
dN:function(a,b){var u,t,s,r,q,p,o
u=this.a
t=P.j1().gbS().j(0,u)
if(t==null)t=""
s=t.length
if(s<a)t=C.c.kx(t,a-s+1,"0")
r=a>0?C.c.q(t,0,a):""
r+=b?"1":"0"
s=a+1
if(s<t.length)r+=C.c.aF(t,s)
q=P.j1()
s=P.l
p=P.ll(q.gbS(),s,s)
p.p(0,u,r)
o=q.eY(p)
u=window.history
s=o.i(0)
u.toString;(u&&C.O).iI(u,new P.hX([],[]).cY(""),"",s)},
sfY:function(a){this.d=H.h(a,"$ia",[W.bX],"$aa")}}
V.er.prototype={
$1:function(a){var u=this.c
this.b.$1(u.checked)
this.a.dN(this.d,u.checked)},
$S:14}
V.iE.prototype={
$1:function(a){H.f(a,"$iaR")
P.jh(C.h.f4(this.a.gkb(),2)+" fps")},
$S:47}
V.fz.prototype={
fz:function(a,b){var u,t,s,r,q,p,o
u=document
t=u.body
s=u.createElement("div")
s.className="scrollTop";(t&&C.w).Y(t,s)
r=u.createElement("div")
r.className="scrollPage"
C.w.Y(t,r)
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
o=W.n
W.a4(u,"scroll",H.m(new V.fB(s),{func:1,ret:-1,args:[o]}),!1,o)},
dP:function(a){var u,t,s,r,q,p,o,n,m,l,k
H.h(a,"$ia",[P.l],"$aa")
this.iU()
u=document
t=u.createElement("div")
t.className="textPar"
for(s=this.b.kW(C.a.kh(a)),r=s.length,q=0;q<s.length;s.length===r||(0,H.z)(s),++q){p=s[q]
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
if(H.mS(n,"|",0)){m=n.split("|")
l=u.createElement("a")
l.className="linkPar"
if(1>=m.length)return H.c(m,1)
l.href=H.N(m[1])
l.textContent=H.N(m[0])
C.l.Y(t,l)}else{k=P.i5(C.a_,n,C.m,!1)
l=u.createElement("a")
l.className="linkPar"
l.href="#"+H.i(k)
l.textContent=n
C.l.Y(t,l)}break
case"Other":o=u.createElement("div")
o.className="normalPar"
o.textContent=p.b
C.l.Y(t,o)
break}}C.l.Y(this.a,t)},
jF:function(a){var u,t,s,r,q,p,o
H.h(a,"$ia",[P.l],"$aa")
u=document
t=u.createElement("table")
t.id="shellTable"
s=t.style
s.width="100%"
s.padding="0px"
s.marginLeft="auto"
s.marginRight="auto"
C.l.Y(this.a,t)
r=C.a4.hm(t,-1)
s=H.f((r&&C.G).ds(r,-1),"$iaQ").style
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
o=H.f(C.G.ds(r,-1),"$iaQ")
s=o.style
s.textAlign="center"
s.verticalAlign="top"
s.marginLeft="auto"
s.marginRight="auto";(o&&C.a3).Y(o,p)}},
iU:function(){var u,t,s,r
if(this.b!=null)return
u=new V.fP()
t=P.l
u.sj0(new H.aB([t,V.ci]))
u.sj5(new H.aB([t,V.cl]))
u.c=null
u.c=u.R(0,"Start")
t=u.R(0,"Start").F(0,"Bold")
s=V.ac(new H.Y("*"))
C.a.h(t.a,s)
t.c=!0
t=u.R(0,"Bold").F(0,"Bold")
s=new V.b2()
r=[V.b1]
s.saI(H.b([],r))
C.a.h(t.a,s)
t=V.ac(new H.Y("*"))
C.a.h(s.a,t)
t=u.R(0,"Bold").F(0,"BoldEnd")
s=V.ac(new H.Y("*"))
C.a.h(t.a,s)
t.c=!0
t=u.R(0,"Start").F(0,"Italic")
s=V.ac(new H.Y("_"))
C.a.h(t.a,s)
t.c=!0
t=u.R(0,"Italic").F(0,"Italic")
s=new V.b2()
s.saI(H.b([],r))
C.a.h(t.a,s)
t=V.ac(new H.Y("_"))
C.a.h(s.a,t)
t=u.R(0,"Italic").F(0,"ItalicEnd")
s=V.ac(new H.Y("_"))
C.a.h(t.a,s)
t.c=!0
t=u.R(0,"Start").F(0,"Code")
s=V.ac(new H.Y("`"))
C.a.h(t.a,s)
t.c=!0
t=u.R(0,"Code").F(0,"Code")
s=new V.b2()
s.saI(H.b([],r))
C.a.h(t.a,s)
t=V.ac(new H.Y("`"))
C.a.h(s.a,t)
t=u.R(0,"Code").F(0,"CodeEnd")
s=V.ac(new H.Y("`"))
C.a.h(t.a,s)
t.c=!0
t=u.R(0,"Start").F(0,"LinkHead")
s=V.ac(new H.Y("["))
C.a.h(t.a,s)
t.c=!0
t=u.R(0,"LinkHead").F(0,"LinkTail")
s=V.ac(new H.Y("|"))
C.a.h(t.a,s)
s=u.R(0,"LinkHead").F(0,"LinkEnd")
t=V.ac(new H.Y("]"))
C.a.h(s.a,t)
s.c=!0
s=u.R(0,"LinkHead").F(0,"LinkHead")
t=new V.b2()
t.saI(H.b([],r))
C.a.h(s.a,t)
s=V.ac(new H.Y("|]"))
C.a.h(t.a,s)
s=u.R(0,"LinkTail").F(0,"LinkEnd")
t=V.ac(new H.Y("]"))
C.a.h(s.a,t)
s.c=!0
s=u.R(0,"LinkTail").F(0,"LinkTail")
t=new V.b2()
t.saI(H.b([],r))
C.a.h(s.a,t)
s=V.ac(new H.Y("|]"))
C.a.h(t.a,s)
C.a.h(u.R(0,"Start").F(0,"Other").a,new V.ef())
s=u.R(0,"Other").F(0,"Other")
t=new V.b2()
t.saI(H.b([],r))
C.a.h(s.a,t)
s=V.ac(new H.Y("*_`["))
C.a.h(t.a,s)
s=u.R(0,"BoldEnd")
s.d=s.a.bi("Bold")
s=u.R(0,"ItalicEnd")
s.d=s.a.bi("Italic")
s=u.R(0,"CodeEnd")
s.d=s.a.bi("Code")
s=u.R(0,"LinkEnd")
s.d=s.a.bi("Link")
s=u.R(0,"Other")
s.d=s.a.bi("Other")
this.b=u}}
V.fB.prototype={
$1:function(a){P.jU(C.u,new V.fA(this.a))},
$S:14}
V.fA.prototype={
$0:function(){var u,t,s
u=C.h.a2(document.documentElement.scrollTop)
t=this.a.style
s=H.i(-0.01*u)+"px"
t.top=s},
$S:1}
K.iv.prototype={
$1:function(a){var u,t,s,r,q,p
H.f(a,"$ix")
u=this.b.f
t=this.c
s=t.r
r=t.x
u=u.a
C.b.aK(u,36160,u.createFramebuffer())
C.b.eB(u,36160,36064,3553,t.b,0)
if(typeof s!=="number")return s.k()
if(typeof r!=="number")return H.u(r)
q=new Uint8Array(s*r*4)
C.b.iC(u,0,0,s,r,6408,5121,q)
C.b.aK(u,36160,null)
p=F.mD(150,null,150)
u=this.a
u.a=p
p.as()
u.a.jJ(new T.fN(q,s,r),0.05)
r=u.a
s=$.aG()
s.toString
r.kZ(new Z.au($.jj().a&~s.a))
u.a.kX(!1)
u.a.as()},
$S:8}
K.iw.prototype={
$1:function(a){var u,t
u=this.a
t=u.r
t.sbV(a?this.b:null)
u=u.x
u.sbV(a?this.b:null)},
$S:4}
K.ix.prototype={
$1:function(a){var u=this.a.z
u.sbV(a?this.b:null)},
$S:4}
K.iy.prototype={
$1:function(a){var u=this.a.Q
u.sbV(a?this.b:null)},
$S:4}
K.iz.prototype={
$1:function(a){var u=a?this.a.a:this.c
this.b.sc2(0,u)},
$S:4}
K.iA.prototype={
$1:function(a){var u=a?this.b.ch:null
this.a.se5(u)},
$S:4}
K.iB.prototype={
$1:function(a){var u=a?this.b:null
this.a.sai(u)},
$S:4};(function aliases(){var u=J.ab.prototype
u.fp=u.i
u=J.dd.prototype
u.fq=u.i
u=O.c7.prototype
u.d4=u.ax
u=O.aM.prototype
u.c3=u.ax
u=V.dj.prototype
u.fs=u.aW
u.d3=u.i})();(function installTearOffs(){var u=hunkHelpers._static_1,t=hunkHelpers._static_0,s=hunkHelpers.installInstanceTearOff,r=hunkHelpers._instance_2u,q=hunkHelpers._instance_0u,p=hunkHelpers._instance_1u,o=hunkHelpers._instance_0i
u(P,"mr","lY",12)
u(P,"ms","lZ",12)
u(P,"mt","m_",12)
t(P,"kn","mq",3)
var n
s(n=E.aa.prototype,"geR",0,0,null,["$1","$0"],["eS","ku"],0,0)
s(n,"geT",0,0,null,["$1","$0"],["eU","kv"],0,0)
s(n,"geP",0,0,null,["$1","$0"],["eQ","kt"],0,0)
s(n,"geN",0,0,null,["$1","$0"],["eO","kq"],0,0)
r(n,"gko","kp",7)
r(n,"gkr","ks",7)
s(n=E.dL.prototype,"gd5",0,0,null,["$1","$0"],["d7","d6"],0,0)
q(n,"gkM","eZ",3)
p(n=X.dT.prototype,"ghZ","i_",11)
p(n,"ghJ","hK",11)
p(n,"ghP","hQ",5)
p(n,"gi2","i3",15)
p(n,"gi0","i1",15)
p(n,"gi6","i7",5)
p(n,"gia","ib",5)
p(n,"ghT","hU",5)
p(n,"gi8","i9",5)
p(n,"ghR","hS",5)
p(n,"gic","ie",41)
p(n,"gig","ih",11)
p(n,"gix","iy",13)
p(n,"git","iu",13)
p(n,"giv","iw",13)
s(n=D.dg.prototype,"gdA",0,0,null,["$1","$0"],["dB","i4"],0,0)
p(n,"gii","ij",42)
r(n,"ghD","hE",19)
r(n,"gim","io",19)
s(D.bk.prototype,"gfE",0,0,null,["$1","$0"],["al","fF"],0,0)
o(V.S.prototype,"gn","cK",20)
o(V.K.prototype,"gn","cK",20)
s(n=U.c3.prototype,"gbo",0,0,null,["$1","$0"],["O","aw"],0,0)
r(n,"gfL","fM",21)
r(n,"gik","il",21)
s(n=U.dU.prototype,"gbo",0,0,null,["$1","$0"],["O","aw"],0,0)
p(n,"ghv","hw",2)
p(n,"ghx","hy",2)
p(n,"ghz","hA",2)
p(n,"ghr","hs",2)
p(n,"ght","hu",2)
p(n,"gja","jb",2)
p(n,"gj8","j9",2)
p(n,"gj6","j7",2)
p(U.dV.prototype,"ghB","hC",2)
s(n=M.cW.prototype,"ga0",0,0,null,["$1","$0"],["X","b_"],0,0)
r(n,"gip","iq",22)
r(n,"gir","is",22)
s(M.cY.prototype,"ga0",0,0,null,["$1","$0"],["X","b_"],0,0)
s(n=M.d2.prototype,"ga0",0,0,null,["$1","$0"],["X","b_"],0,0)
r(n,"ghL","hM",7)
r(n,"ghN","hO",7)
s(O.d5.prototype,"ga6",0,0,null,["$1","$0"],["v","ag"],0,0)
s(n=O.dl.prototype,"ga6",0,0,null,["$1","$0"],["v","ag"],0,0)
s(n,"giK",0,0,null,["$1","$0"],["dG","iL"],0,0)
r(n,"ghF","hG",24)
r(n,"ghH","hI",24)
s(O.c7.prototype,"ga6",0,0,null,["$1","$0"],["v","ag"],0,0)
s(n=O.dG.prototype,"ga6",0,0,null,["$1","$0"],["v","ag"],0,0)
r(n,"ghV","hW",25)
r(n,"ghX","hY",25)
s(O.aC.prototype,"ga6",0,0,null,["$1","$0"],["v","ag"],0,0)
s(X.ds.prototype,"gd8",0,0,null,["$1","$0"],["ar","fP"],0,0)})();(function inheritance(){var u=hunkHelpers.mixin,t=hunkHelpers.inherit,s=hunkHelpers.inheritMany
t(P.L,null)
s(P.L,[H.iT,J.ab,J.ag,P.e2,P.k,H.dh,P.aJ,H.bB,H.cu,H.ev,H.fo,H.fS,P.bb,H.bY,H.e5,P.f4,H.eX,H.eZ,H.eT,P.e6,P.aU,P.aw,P.dX,P.fF,P.cj,P.fG,P.aR,P.ah,P.i9,P.hU,P.cy,P.hO,P.R,P.i0,P.f5,P.bx,P.i8,P.i6,P.W,P.ai,P.ae,P.ba,P.fl,P.dB,P.e_,P.eN,P.a,P.H,P.B,P.am,P.l,P.aj,P.bM,P.h5,P.hV,W.ex,W.bX,W.aA,W.d3,P.hW,P.e9,P.hP,P.J,O.P,O.c9,E.em,E.aa,E.fp,E.dL,Z.dW,Z.bL,Z.b8,Z.be,Z.au,D.ep,D.bc,D.x,X.cV,X.de,X.eV,X.f1,X.as,X.fe,X.fQ,X.dT,D.d0,D.Z,D.bk,D.dA,D.dI,D.dJ,D.dK,V.T,V.al,V.eF,V.c8,V.a7,V.a2,V.a_,V.aP,V.bI,V.S,V.K,U.dU,U.dV,M.cY,M.d2,M.ap,A.cR,A.ei,A.fa,A.cn,A.cq,A.co,A.cr,A.cp,A.cs,A.by,A.dO,A.h_,F.a1,F.eI,F.b0,F.eW,F.bl,F.dz,F.fw,F.fx,F.fy,F.ad,F.he,F.hf,F.hi,F.hk,F.hl,F.hm,O.b4,O.c7,O.aC,T.fL,T.fN,V.ef,V.b1,V.dj,V.fv,V.ci,V.dM,V.cl,V.fP,X.ck,X.bu,X.eP,X.ds,V.eq,V.fz])
s(J.ab,[J.eS,J.db,J.dd,J.aK,J.dc,J.bD,H.bE,W.bd,W.bw,W.dY,W.eA,W.d1,W.n,W.d7,W.e0,W.aZ,W.e3,W.aD,W.e7,P.cT,P.d4,P.du,P.dw,P.bJ,P.dy,P.dF,P.dQ])
s(J.dd,[J.fm,J.ct,J.bh])
t(J.iS,J.aK)
s(J.dc,[J.da,J.d9])
t(P.f0,P.e2)
s(P.f0,[H.dR,W.hx,W.hw,P.eJ])
t(H.Y,H.dR)
s(P.k,[H.eD,H.f6,H.hq])
s(P.aJ,[H.f7,H.hr])
t(H.ew,H.ev)
s(P.bb,[H.fk,H.eU,H.h3,H.fU,H.eo,H.ft,P.dr,P.aH,P.h4,P.h1,P.fD,P.eu,P.ey])
s(H.bY,[H.iH,H.fJ,H.ir,H.is,H.it,P.ht,P.hs,P.hu,P.hv,P.i_,P.hZ,P.hC,P.hG,P.hD,P.hE,P.hF,P.hJ,P.hK,P.hI,P.hH,P.fH,P.fI,P.ii,P.hS,P.hR,P.hT,P.f_,P.f3,P.i7,P.eB,P.eC,P.h9,P.h6,P.h7,P.h8,P.i1,P.i2,P.i4,P.i3,P.id,P.ic,P.ie,P.ig,W.hB,P.hY,P.ik,P.eK,P.eL,E.fq,E.fr,E.fs,E.fO,D.eH,F.ia,F.iF,F.iG,F.io,F.ip,F.ho,F.hn,F.hg,F.hh,T.fM,V.er,V.iE,V.fB,V.fA,K.iv,K.iw,K.ix,K.iy,K.iz,K.iA,K.iB])
s(H.fJ,[H.fE,H.bV])
t(P.f2,P.f4)
t(H.aB,P.f2)
t(H.eY,H.eD)
t(H.dm,H.bE)
s(H.dm,[H.cz,H.cB])
t(H.cA,H.cz)
t(H.dn,H.cA)
t(H.cC,H.cB)
t(H.dp,H.cC)
s(H.dp,[H.ff,H.fg,H.fh,H.fi,H.dq,H.cc])
t(P.hQ,P.i9)
t(P.hN,P.hU)
t(P.ea,P.f5)
t(P.dS,P.ea)
s(P.bx,[P.ek,P.eE])
t(P.bA,P.fG)
s(P.bA,[P.el,P.hc,P.hb])
t(P.ha,P.eE)
s(P.ae,[P.q,P.j])
s(P.aH,[P.bH,P.eQ])
t(P.hy,P.bM)
s(W.bd,[W.F,W.cw])
s(W.F,[W.U,W.b9,W.c0])
s(W.U,[W.w,P.p])
s(W.w,[W.eg,W.eh,W.cS,W.bv,W.c_,W.eM,W.c4,W.c6,W.df,W.ca,W.fu,W.aQ,W.dD,W.dE])
t(W.bZ,W.dY)
t(W.e1,W.e0)
t(W.bC,W.e1)
t(W.d8,W.c0)
t(W.bp,W.n)
s(W.bp,[W.aL,W.a8,W.aE])
t(W.e4,W.e3)
t(W.cd,W.e4)
t(W.e8,W.e7)
t(W.fR,W.e8)
t(W.hp,W.ca)
t(W.aT,W.a8)
t(W.dZ,W.d1)
t(W.hz,P.fF)
t(W.j4,W.hz)
t(W.hA,P.cj)
t(P.hX,P.hW)
t(P.at,P.hP)
s(E.em,[Z.cU,A.ch,T.b5])
s(D.x,[D.bf,D.bg,D.v,X.fn])
s(X.fn,[X.di,X.bj,X.cb,X.dN])
s(O.P,[D.dg,U.c3,M.cW])
s(D.ep,[U.et,U.a9])
s(U.a9,[U.cX,U.dx])
s(A.ch,[A.d_,A.d6,A.dk,A.dH])
s(A.dO,[A.C,A.fX,A.fY,A.fZ,A.fW,A.M,A.aq,A.E,A.dP,A.h0,A.bK,A.a3,A.a0,A.ak])
t(F.fC,F.eI)
t(F.fV,F.eW)
t(F.hj,F.hk)
t(F.fj,F.hl)
s(O.b4,[O.ez,O.d5,O.dl,O.dG])
s(O.c7,[O.f8,O.f9,O.aM])
s(O.aM,[O.fb,O.fc])
t(T.bo,T.b5)
t(T.fK,T.bo)
s(V.dj,[V.b2,V.cm])
s(X.ck,[X.ej,X.eO])
u(H.dR,H.cu)
u(H.cz,P.R)
u(H.cA,H.bB)
u(H.cB,P.R)
u(H.cC,H.bB)
u(P.e2,P.R)
u(P.ea,P.i0)
u(W.dY,W.ex)
u(W.e0,P.R)
u(W.e1,W.aA)
u(W.e3,P.R)
u(W.e4,W.aA)
u(W.e7,P.R)
u(W.e8,W.aA)})();(function constants(){var u=hunkHelpers.makeConstList
C.w=W.cS.prototype
C.n=W.bv.prototype
C.x=W.bw.prototype
C.l=W.c_.prototype
C.O=W.d7.prototype
C.y=W.d8.prototype
C.P=J.ab.prototype
C.a=J.aK.prototype
C.Q=J.d9.prototype
C.e=J.da.prototype
C.o=J.db.prototype
C.h=J.dc.prototype
C.c=J.bD.prototype
C.X=J.bh.prototype
C.B=W.df.prototype
C.a2=W.cd.prototype
C.F=J.fm.prototype
C.b=P.bJ.prototype
C.a3=W.aQ.prototype
C.a4=W.dD.prototype
C.G=W.dE.prototype
C.v=J.ct.prototype
C.H=W.aT.prototype
C.I=W.cw.prototype
C.K=new P.el(!1)
C.J=new P.ek(C.K)
C.L=new P.fl()
C.M=new P.hc()
C.k=new P.hQ()
C.d=new A.by(0,"ColorSourceType.None")
C.j=new A.by(1,"ColorSourceType.Solid")
C.f=new A.by(2,"ColorSourceType.Texture2D")
C.i=new A.by(3,"ColorSourceType.TextureCube")
C.u=new P.ba(0)
C.N=new P.ba(5e6)
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
C.z=function(hooks) { return hooks; }

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
C.A=function getTagFallback(o) {
  var s = Object.prototype.toString.call(o);
  return s.substring(8, s.length - 1);
}
C.C=H.b(u([127,2047,65535,1114111]),[P.j])
C.p=H.b(u([0,0,32776,33792,1,10240,0,0]),[P.j])
C.q=H.b(u([0,0,65490,45055,65535,34815,65534,18431]),[P.j])
C.r=H.b(u([0,0,26624,1023,65534,2047,65534,2047]),[P.j])
C.Z=H.b(u([0,0,32722,12287,65534,34815,65534,18431]),[P.j])
C.a_=H.b(u([0,0,65498,45055,65535,34815,65534,18431]),[P.j])
C.t=H.b(u([0,0,24576,1023,65534,34815,65534,18431]),[P.j])
C.D=H.b(u([0,0,32754,11263,65534,34815,65534,18431]),[P.j])
C.a0=H.b(u([0,0,32722,12287,65535,34815,65534,18431]),[P.j])
C.E=H.b(u([0,0,65490,12287,65535,34815,65534,18431]),[P.j])
C.Y=H.b(u([]),[P.l])
C.a1=new H.ew(0,{},C.Y,[P.l,P.l])
C.m=new P.ha(!1)})();(function staticFields(){$.aI=0
$.bW=null
$.jq=null
$.j7=!1
$.ks=null
$.kl=null
$.ky=null
$.il=null
$.iu=null
$.jf=null
$.bN=null
$.cG=null
$.cH=null
$.j8=!1
$.Q=C.k
$.jE=null
$.fd=null
$.jM=null
$.bm=null
$.cg=null
$.k_=null
$.k2=null
$.k1=null
$.k0=null
$.l8="uniform mat4 viewObjMat;                    \nuniform mat4 projMat;                       \n                                            \nattribute vec3 posAttr;                     \n                                            \nvarying float depth;                        \n                                            \nvoid main()                                 \n{                                           \n  vec4 pos = viewObjMat*vec4(posAttr, 1.0); \n  depth = pos.z;                            \n  gl_Position = projMat*pos;                \n}                                           \n"
$.l7="precision mediump float;                                  \n                                                          \nuniform vec3 objClr;                                      \nuniform vec3 fogClr;                                      \nuniform float fogStart;                                   \nuniform float fogStop;                                    \n                                                          \nvarying float depth;                                      \n                                                          \nvoid main()                                               \n{                                                         \n   float factor = (depth-fogStop)/(fogStart-fogStop);     \n   factor = clamp(factor, 0.0, 1.0);                      \n   gl_FragColor = vec4(mix(fogClr, objClr, factor), 1.0); \n}                                                         \n"
$.lc="uniform mat4 projViewObjMat;                                 \nuniform mat3 txt2DMat;                                       \n                                                             \nattribute vec3 posAttr;                                      \nattribute vec2 txtAttr;                                      \n                                                             \nvarying vec2 txt2D;                                          \n                                                             \nvoid main()                                                  \n{                                                            \n  txt2D = (txt2DMat*vec3(txtAttr.x, 1.0-txtAttr.y, 1.0)).xy; \n  gl_Position = projViewObjMat*vec4(posAttr, 1.0);           \n}                                                            \n"
$.lb="precision mediump float;                                  \n                                                          \n#define MAX_BLUR_RANGE 10.0                               \n#define BLUR_STEP 0.3333                                  \n                                                          \nuniform sampler2D colorTxt;                               \nuniform sampler2D depthTxt;                               \nuniform int nullColorTxt;                                 \nuniform int nullDepthTxt;                                 \nuniform float width;                                      \nuniform float height;                                     \nuniform float highOffset;                                 \nuniform float lowOffset;                                  \nuniform float depthLimit;                                 \n                                                          \nvarying vec2 txt2D;                                       \n                                                          \nfloat div;                                                \nvec4 color;                                               \n                                                          \nvoid offsetColor(float baseDepth, float tu, float tv)     \n{                                                         \n   vec2 txtOffset = vec2(txt2D.x + tu/width,              \n                         txt2D.y + tv/height);            \n   float depth = texture2D(depthTxt, txtOffset).r;        \n   if (depth - depthLimit > baseDepth) return;            \n   div += 1.0;                                            \n   color += texture2D(colorTxt, txtOffset);               \n}                                                         \n                                                          \nvoid main()                                               \n{                                                         \n   if(nullColorTxt > 0)                                   \n   {                                                      \n      gl_FragColor = vec4(1.0);                           \n      return;                                             \n   }                                                      \n   color = texture2D(colorTxt, txt2D);                    \n   float baseDepth;                                       \n   if(nullDepthTxt > 0) baseDepth = 1.0;                  \n   else baseDepth = texture2D(depthTxt, txt2D).r;         \n   float offset = mix(lowOffset, highOffset, baseDepth);  \n   offset = abs(offset);                                  \n   div = 1.0;                                             \n   if(offset >= 1.0)                                      \n   {                                                      \n      for(float x=0.0; x<MAX_BLUR_RANGE; x+=BLUR_STEP)    \n      {                                                   \n         if(x > offset) break;                            \n         for(float y=0.0; y<MAX_BLUR_RANGE; y+=BLUR_STEP) \n         {                                                \n            if(y > offset) break;                         \n            offsetColor(baseDepth,  x,  y);               \n            offsetColor(baseDepth,  x, -y);               \n            offsetColor(baseDepth, -x,  y);               \n            offsetColor(baseDepth, -x, -y);               \n         }                                                \n      }                                                   \n   }                                                      \n   gl_FragColor = color / div;                            \n}                                                         \n"
$.jL=null})();(function lazyInitializers(){var u=hunkHelpers.lazy
u($,"mY","kE",function(){return H.kr("_$dart_dartClosure")})
u($,"mZ","ji",function(){return H.kr("_$dart_js")})
u($,"n2","kF",function(){return H.aS(H.fT({
toString:function(){return"$receiver$"}}))})
u($,"n3","kG",function(){return H.aS(H.fT({$method$:null,
toString:function(){return"$receiver$"}}))})
u($,"n4","kH",function(){return H.aS(H.fT(null))})
u($,"n5","kI",function(){return H.aS(function(){var $argumentsExpr$='$arguments$'
try{null.$method$($argumentsExpr$)}catch(t){return t.message}}())})
u($,"n8","kL",function(){return H.aS(H.fT(void 0))})
u($,"n9","kM",function(){return H.aS(function(){var $argumentsExpr$='$arguments$'
try{(void 0).$method$($argumentsExpr$)}catch(t){return t.message}}())})
u($,"n7","kK",function(){return H.aS(H.jW(null))})
u($,"n6","kJ",function(){return H.aS(function(){try{null.$method$}catch(t){return t.message}}())})
u($,"nb","kO",function(){return H.aS(H.jW(void 0))})
u($,"na","kN",function(){return H.aS(function(){try{(void 0).$method$}catch(t){return t.message}}())})
u($,"nr","jl",function(){return P.lX()})
u($,"nv","cN",function(){return[]})
u($,"nd","kP",function(){return P.lU()})
u($,"ns","kR",function(){return H.lr(H.bq(H.b([-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-1,-2,-2,-2,-2,-2,62,-2,62,-2,63,52,53,54,55,56,57,58,59,60,61,-2,-2,-2,-1,-2,-2,-2,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,-2,-2,-2,-2,63,-2,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,-2,-2,-2,-2,-2],[P.j])))})
u($,"nt","kS",function(){return P.lG("^[\\-\\.0-9A-Z_a-z~]*$",!0,!1)})
u($,"nu","kT",function(){return P.mi()})
u($,"nk","kQ",function(){return Z.av(0)})
u($,"ne","jj",function(){return Z.av(511)})
u($,"nm","af",function(){return Z.av(1)})
u($,"nl","aG",function(){return Z.av(2)})
u($,"ng","aW",function(){return Z.av(4)})
u($,"nn","az",function(){return Z.av(8)})
u($,"no","aX",function(){return Z.av(16)})
u($,"nh","cL",function(){return Z.av(32)})
u($,"ni","cM",function(){return Z.av(64)})
u($,"nj","jk",function(){return Z.av(96)})
u($,"np","bt",function(){return Z.av(128)})
u($,"nf","aV",function(){return Z.av(256)})
u($,"mX","kD",function(){return new V.eF(1e-9)})
u($,"mW","A",function(){return $.kD()})})()
var v={mangledGlobalNames:{j:"int",q:"double",ae:"num",l:"String",W:"bool",B:"Null",a:"List"},mangledNames:{},getTypeFromName:getGlobalFromName,metadata:[],types:[{func:1,ret:-1,opt:[D.x]},{func:1,ret:P.B},{func:1,ret:-1,args:[D.x]},{func:1,ret:-1},{func:1,ret:P.B,args:[P.W]},{func:1,ret:-1,args:[W.a8]},{func:1,ret:P.B,args:[,,]},{func:1,ret:-1,args:[P.j,[P.k,E.aa]]},{func:1,ret:P.B,args:[D.x]},{func:1,ret:P.B,args:[F.a1]},{func:1,ret:P.B,args:[F.ad,P.q,P.q]},{func:1,ret:-1,args:[W.n]},{func:1,ret:-1,args:[{func:1,ret:-1}]},{func:1,ret:-1,args:[W.aE]},{func:1,ret:P.B,args:[W.n]},{func:1,ret:-1,args:[W.aL]},{func:1,args:[,]},{func:1,ret:P.B,args:[,]},{func:1,ret:P.l,args:[P.j]},{func:1,ret:-1,args:[P.j,[P.k,D.Z]]},{func:1,ret:P.q},{func:1,ret:-1,args:[P.j,[P.k,U.a9]]},{func:1,ret:-1,args:[P.j,[P.k,M.ap]]},{func:1,ret:P.q,args:[P.q,P.q]},{func:1,ret:-1,args:[P.j,[P.k,V.a7]]},{func:1,ret:-1,args:[P.j,[P.k,O.aC]]},{func:1,ret:P.l,args:[P.l]},{func:1,ret:-1,args:[P.l,P.l]},{func:1,ret:P.B,args:[P.l,,]},{func:1,ret:P.J,args:[P.j]},{func:1,ret:P.J,args:[,,]},{func:1,args:[W.n]},{func:1,ret:P.W,args:[W.F]},{func:1,ret:W.U,args:[W.F]},{func:1,args:[,P.l]},{func:1,args:[P.l]},{func:1,ret:P.B,args:[,],opt:[P.am]},{func:1,ret:P.B,args:[P.ae]},{func:1,ret:P.B,args:[{func:1,ret:-1,args:[D.x]}]},{func:1,ret:P.B,args:[{func:1,ret:-1}]},{func:1,ret:-1,args:[P.j,P.j]},{func:1,ret:-1,args:[W.aT]},{func:1,ret:P.W,args:[[P.k,D.Z]]},{func:1,ret:[P.H,P.l,P.l],args:[[P.H,P.l,P.l],P.l]},{func:1,ret:P.B,args:[P.l]},{func:1,ret:-1,args:[P.l,P.j]},{func:1,ret:-1,args:[P.l],opt:[,]},{func:1,ret:P.B,args:[P.aR]},{func:1,ret:P.j,args:[P.j,P.j]},{func:1,ret:[P.aw,,],args:[,]}],interceptorsByTag:null,leafTags:null};(function nativeSupport(){!function(){var u=function(a){var o={}
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
hunkHelpers.setOrUpdateInterceptorsByTag({DOMError:J.ab,MediaError:J.ab,Navigator:J.ab,NavigatorConcurrentHardware:J.ab,NavigatorUserMediaError:J.ab,OverconstrainedError:J.ab,PositionError:J.ab,WebGLActiveInfo:J.ab,WebGL2RenderingContext:J.ab,SQLError:J.ab,ArrayBufferView:H.bE,Float32Array:H.dn,Int16Array:H.ff,Int32Array:H.fg,Int8Array:H.fh,Uint32Array:H.fi,Uint8ClampedArray:H.dq,CanvasPixelArray:H.dq,Uint8Array:H.cc,HTMLBRElement:W.w,HTMLBaseElement:W.w,HTMLButtonElement:W.w,HTMLContentElement:W.w,HTMLDListElement:W.w,HTMLDataElement:W.w,HTMLDataListElement:W.w,HTMLDetailsElement:W.w,HTMLDialogElement:W.w,HTMLEmbedElement:W.w,HTMLFieldSetElement:W.w,HTMLHRElement:W.w,HTMLHeadElement:W.w,HTMLHeadingElement:W.w,HTMLHtmlElement:W.w,HTMLIFrameElement:W.w,HTMLLIElement:W.w,HTMLLegendElement:W.w,HTMLLinkElement:W.w,HTMLMapElement:W.w,HTMLMenuElement:W.w,HTMLMetaElement:W.w,HTMLMeterElement:W.w,HTMLModElement:W.w,HTMLOListElement:W.w,HTMLObjectElement:W.w,HTMLOptGroupElement:W.w,HTMLOptionElement:W.w,HTMLOutputElement:W.w,HTMLParagraphElement:W.w,HTMLParamElement:W.w,HTMLPictureElement:W.w,HTMLPreElement:W.w,HTMLProgressElement:W.w,HTMLQuoteElement:W.w,HTMLScriptElement:W.w,HTMLShadowElement:W.w,HTMLSlotElement:W.w,HTMLSourceElement:W.w,HTMLSpanElement:W.w,HTMLStyleElement:W.w,HTMLTableCaptionElement:W.w,HTMLTableColElement:W.w,HTMLTableSectionElement:W.w,HTMLTemplateElement:W.w,HTMLTextAreaElement:W.w,HTMLTimeElement:W.w,HTMLTitleElement:W.w,HTMLTrackElement:W.w,HTMLUListElement:W.w,HTMLUnknownElement:W.w,HTMLDirectoryElement:W.w,HTMLFontElement:W.w,HTMLFrameElement:W.w,HTMLFrameSetElement:W.w,HTMLMarqueeElement:W.w,HTMLElement:W.w,HTMLAnchorElement:W.eg,HTMLAreaElement:W.eh,HTMLBodyElement:W.cS,HTMLCanvasElement:W.bv,CanvasRenderingContext2D:W.bw,CDATASection:W.b9,CharacterData:W.b9,Comment:W.b9,ProcessingInstruction:W.b9,Text:W.b9,CSSStyleDeclaration:W.bZ,MSStyleCSSProperties:W.bZ,CSS2Properties:W.bZ,HTMLDivElement:W.c_,XMLDocument:W.c0,Document:W.c0,DOMException:W.eA,DOMRectReadOnly:W.d1,Element:W.U,AbortPaymentEvent:W.n,AnimationEvent:W.n,AnimationPlaybackEvent:W.n,ApplicationCacheErrorEvent:W.n,BackgroundFetchClickEvent:W.n,BackgroundFetchEvent:W.n,BackgroundFetchFailEvent:W.n,BackgroundFetchedEvent:W.n,BeforeInstallPromptEvent:W.n,BeforeUnloadEvent:W.n,BlobEvent:W.n,CanMakePaymentEvent:W.n,ClipboardEvent:W.n,CloseEvent:W.n,CustomEvent:W.n,DeviceMotionEvent:W.n,DeviceOrientationEvent:W.n,ErrorEvent:W.n,ExtendableEvent:W.n,ExtendableMessageEvent:W.n,FetchEvent:W.n,FontFaceSetLoadEvent:W.n,ForeignFetchEvent:W.n,GamepadEvent:W.n,HashChangeEvent:W.n,InstallEvent:W.n,MediaEncryptedEvent:W.n,MediaKeyMessageEvent:W.n,MediaQueryListEvent:W.n,MediaStreamEvent:W.n,MediaStreamTrackEvent:W.n,MessageEvent:W.n,MIDIConnectionEvent:W.n,MIDIMessageEvent:W.n,MutationEvent:W.n,NotificationEvent:W.n,PageTransitionEvent:W.n,PaymentRequestEvent:W.n,PaymentRequestUpdateEvent:W.n,PopStateEvent:W.n,PresentationConnectionAvailableEvent:W.n,PresentationConnectionCloseEvent:W.n,ProgressEvent:W.n,PromiseRejectionEvent:W.n,PushEvent:W.n,RTCDataChannelEvent:W.n,RTCDTMFToneChangeEvent:W.n,RTCPeerConnectionIceEvent:W.n,RTCTrackEvent:W.n,SecurityPolicyViolationEvent:W.n,SensorErrorEvent:W.n,SpeechRecognitionError:W.n,SpeechRecognitionEvent:W.n,SpeechSynthesisEvent:W.n,StorageEvent:W.n,SyncEvent:W.n,TrackEvent:W.n,TransitionEvent:W.n,WebKitTransitionEvent:W.n,VRDeviceEvent:W.n,VRDisplayEvent:W.n,VRSessionEvent:W.n,MojoInterfaceRequestEvent:W.n,ResourceProgressEvent:W.n,USBConnectionEvent:W.n,IDBVersionChangeEvent:W.n,AudioProcessingEvent:W.n,OfflineAudioCompletionEvent:W.n,WebGLContextEvent:W.n,Event:W.n,InputEvent:W.n,EventTarget:W.bd,HTMLFormElement:W.eM,History:W.d7,HTMLCollection:W.bC,HTMLFormControlsCollection:W.bC,HTMLOptionsCollection:W.bC,HTMLDocument:W.d8,ImageData:W.aZ,HTMLImageElement:W.c4,HTMLInputElement:W.c6,KeyboardEvent:W.aL,HTMLLabelElement:W.df,HTMLAudioElement:W.ca,HTMLMediaElement:W.ca,PointerEvent:W.a8,MouseEvent:W.a8,DragEvent:W.a8,DocumentFragment:W.F,ShadowRoot:W.F,Attr:W.F,DocumentType:W.F,Node:W.F,NodeList:W.cd,RadioNodeList:W.cd,HTMLSelectElement:W.fu,HTMLTableCellElement:W.aQ,HTMLTableDataCellElement:W.aQ,HTMLTableHeaderCellElement:W.aQ,HTMLTableElement:W.dD,HTMLTableRowElement:W.dE,Touch:W.aD,TouchEvent:W.aE,TouchList:W.fR,CompositionEvent:W.bp,FocusEvent:W.bp,TextEvent:W.bp,UIEvent:W.bp,HTMLVideoElement:W.hp,WheelEvent:W.aT,Window:W.cw,DOMWindow:W.cw,ClientRect:W.dZ,DOMRect:W.dZ,SVGAElement:P.p,SVGAnimateElement:P.p,SVGAnimateMotionElement:P.p,SVGAnimateTransformElement:P.p,SVGAnimationElement:P.p,SVGCircleElement:P.p,SVGClipPathElement:P.p,SVGDefsElement:P.p,SVGDescElement:P.p,SVGDiscardElement:P.p,SVGEllipseElement:P.p,SVGFEBlendElement:P.p,SVGFEColorMatrixElement:P.p,SVGFEComponentTransferElement:P.p,SVGFECompositeElement:P.p,SVGFEConvolveMatrixElement:P.p,SVGFEDiffuseLightingElement:P.p,SVGFEDisplacementMapElement:P.p,SVGFEDistantLightElement:P.p,SVGFEFloodElement:P.p,SVGFEFuncAElement:P.p,SVGFEFuncBElement:P.p,SVGFEFuncGElement:P.p,SVGFEFuncRElement:P.p,SVGFEGaussianBlurElement:P.p,SVGFEImageElement:P.p,SVGFEMergeElement:P.p,SVGFEMergeNodeElement:P.p,SVGFEMorphologyElement:P.p,SVGFEOffsetElement:P.p,SVGFEPointLightElement:P.p,SVGFESpecularLightingElement:P.p,SVGFESpotLightElement:P.p,SVGFETileElement:P.p,SVGFETurbulenceElement:P.p,SVGFilterElement:P.p,SVGForeignObjectElement:P.p,SVGGElement:P.p,SVGGeometryElement:P.p,SVGGraphicsElement:P.p,SVGImageElement:P.p,SVGLineElement:P.p,SVGLinearGradientElement:P.p,SVGMarkerElement:P.p,SVGMaskElement:P.p,SVGMetadataElement:P.p,SVGPathElement:P.p,SVGPatternElement:P.p,SVGPolygonElement:P.p,SVGPolylineElement:P.p,SVGRadialGradientElement:P.p,SVGRectElement:P.p,SVGScriptElement:P.p,SVGSetElement:P.p,SVGStopElement:P.p,SVGStyleElement:P.p,SVGElement:P.p,SVGSVGElement:P.p,SVGSwitchElement:P.p,SVGSymbolElement:P.p,SVGTSpanElement:P.p,SVGTextContentElement:P.p,SVGTextElement:P.p,SVGTextPathElement:P.p,SVGTextPositioningElement:P.p,SVGTitleElement:P.p,SVGUseElement:P.p,SVGViewElement:P.p,SVGGradientElement:P.p,SVGComponentTransferFunctionElement:P.p,SVGFEDropShadowElement:P.p,SVGMPathElement:P.p,WebGLBuffer:P.cT,WebGLFramebuffer:P.d4,WebGLProgram:P.du,WebGLRenderbuffer:P.dw,WebGLRenderingContext:P.bJ,WebGLShader:P.dy,WebGLTexture:P.dF,WebGLUniformLocation:P.dQ})
hunkHelpers.setOrUpdateLeafTags({DOMError:true,MediaError:true,Navigator:true,NavigatorConcurrentHardware:true,NavigatorUserMediaError:true,OverconstrainedError:true,PositionError:true,WebGLActiveInfo:true,WebGL2RenderingContext:true,SQLError:true,ArrayBufferView:false,Float32Array:true,Int16Array:true,Int32Array:true,Int8Array:true,Uint32Array:true,Uint8ClampedArray:true,CanvasPixelArray:true,Uint8Array:false,HTMLBRElement:true,HTMLBaseElement:true,HTMLButtonElement:true,HTMLContentElement:true,HTMLDListElement:true,HTMLDataElement:true,HTMLDataListElement:true,HTMLDetailsElement:true,HTMLDialogElement:true,HTMLEmbedElement:true,HTMLFieldSetElement:true,HTMLHRElement:true,HTMLHeadElement:true,HTMLHeadingElement:true,HTMLHtmlElement:true,HTMLIFrameElement:true,HTMLLIElement:true,HTMLLegendElement:true,HTMLLinkElement:true,HTMLMapElement:true,HTMLMenuElement:true,HTMLMetaElement:true,HTMLMeterElement:true,HTMLModElement:true,HTMLOListElement:true,HTMLObjectElement:true,HTMLOptGroupElement:true,HTMLOptionElement:true,HTMLOutputElement:true,HTMLParagraphElement:true,HTMLParamElement:true,HTMLPictureElement:true,HTMLPreElement:true,HTMLProgressElement:true,HTMLQuoteElement:true,HTMLScriptElement:true,HTMLShadowElement:true,HTMLSlotElement:true,HTMLSourceElement:true,HTMLSpanElement:true,HTMLStyleElement:true,HTMLTableCaptionElement:true,HTMLTableColElement:true,HTMLTableSectionElement:true,HTMLTemplateElement:true,HTMLTextAreaElement:true,HTMLTimeElement:true,HTMLTitleElement:true,HTMLTrackElement:true,HTMLUListElement:true,HTMLUnknownElement:true,HTMLDirectoryElement:true,HTMLFontElement:true,HTMLFrameElement:true,HTMLFrameSetElement:true,HTMLMarqueeElement:true,HTMLElement:false,HTMLAnchorElement:true,HTMLAreaElement:true,HTMLBodyElement:true,HTMLCanvasElement:true,CanvasRenderingContext2D:true,CDATASection:true,CharacterData:true,Comment:true,ProcessingInstruction:true,Text:true,CSSStyleDeclaration:true,MSStyleCSSProperties:true,CSS2Properties:true,HTMLDivElement:true,XMLDocument:true,Document:false,DOMException:true,DOMRectReadOnly:false,Element:false,AbortPaymentEvent:true,AnimationEvent:true,AnimationPlaybackEvent:true,ApplicationCacheErrorEvent:true,BackgroundFetchClickEvent:true,BackgroundFetchEvent:true,BackgroundFetchFailEvent:true,BackgroundFetchedEvent:true,BeforeInstallPromptEvent:true,BeforeUnloadEvent:true,BlobEvent:true,CanMakePaymentEvent:true,ClipboardEvent:true,CloseEvent:true,CustomEvent:true,DeviceMotionEvent:true,DeviceOrientationEvent:true,ErrorEvent:true,ExtendableEvent:true,ExtendableMessageEvent:true,FetchEvent:true,FontFaceSetLoadEvent:true,ForeignFetchEvent:true,GamepadEvent:true,HashChangeEvent:true,InstallEvent:true,MediaEncryptedEvent:true,MediaKeyMessageEvent:true,MediaQueryListEvent:true,MediaStreamEvent:true,MediaStreamTrackEvent:true,MessageEvent:true,MIDIConnectionEvent:true,MIDIMessageEvent:true,MutationEvent:true,NotificationEvent:true,PageTransitionEvent:true,PaymentRequestEvent:true,PaymentRequestUpdateEvent:true,PopStateEvent:true,PresentationConnectionAvailableEvent:true,PresentationConnectionCloseEvent:true,ProgressEvent:true,PromiseRejectionEvent:true,PushEvent:true,RTCDataChannelEvent:true,RTCDTMFToneChangeEvent:true,RTCPeerConnectionIceEvent:true,RTCTrackEvent:true,SecurityPolicyViolationEvent:true,SensorErrorEvent:true,SpeechRecognitionError:true,SpeechRecognitionEvent:true,SpeechSynthesisEvent:true,StorageEvent:true,SyncEvent:true,TrackEvent:true,TransitionEvent:true,WebKitTransitionEvent:true,VRDeviceEvent:true,VRDisplayEvent:true,VRSessionEvent:true,MojoInterfaceRequestEvent:true,ResourceProgressEvent:true,USBConnectionEvent:true,IDBVersionChangeEvent:true,AudioProcessingEvent:true,OfflineAudioCompletionEvent:true,WebGLContextEvent:true,Event:false,InputEvent:false,EventTarget:false,HTMLFormElement:true,History:true,HTMLCollection:true,HTMLFormControlsCollection:true,HTMLOptionsCollection:true,HTMLDocument:true,ImageData:true,HTMLImageElement:true,HTMLInputElement:true,KeyboardEvent:true,HTMLLabelElement:true,HTMLAudioElement:true,HTMLMediaElement:false,PointerEvent:true,MouseEvent:false,DragEvent:false,DocumentFragment:true,ShadowRoot:true,Attr:true,DocumentType:true,Node:false,NodeList:true,RadioNodeList:true,HTMLSelectElement:true,HTMLTableCellElement:true,HTMLTableDataCellElement:true,HTMLTableHeaderCellElement:true,HTMLTableElement:true,HTMLTableRowElement:true,Touch:true,TouchEvent:true,TouchList:true,CompositionEvent:true,FocusEvent:true,TextEvent:true,UIEvent:false,HTMLVideoElement:true,WheelEvent:true,Window:true,DOMWindow:true,ClientRect:true,DOMRect:true,SVGAElement:true,SVGAnimateElement:true,SVGAnimateMotionElement:true,SVGAnimateTransformElement:true,SVGAnimationElement:true,SVGCircleElement:true,SVGClipPathElement:true,SVGDefsElement:true,SVGDescElement:true,SVGDiscardElement:true,SVGEllipseElement:true,SVGFEBlendElement:true,SVGFEColorMatrixElement:true,SVGFEComponentTransferElement:true,SVGFECompositeElement:true,SVGFEConvolveMatrixElement:true,SVGFEDiffuseLightingElement:true,SVGFEDisplacementMapElement:true,SVGFEDistantLightElement:true,SVGFEFloodElement:true,SVGFEFuncAElement:true,SVGFEFuncBElement:true,SVGFEFuncGElement:true,SVGFEFuncRElement:true,SVGFEGaussianBlurElement:true,SVGFEImageElement:true,SVGFEMergeElement:true,SVGFEMergeNodeElement:true,SVGFEMorphologyElement:true,SVGFEOffsetElement:true,SVGFEPointLightElement:true,SVGFESpecularLightingElement:true,SVGFESpotLightElement:true,SVGFETileElement:true,SVGFETurbulenceElement:true,SVGFilterElement:true,SVGForeignObjectElement:true,SVGGElement:true,SVGGeometryElement:true,SVGGraphicsElement:true,SVGImageElement:true,SVGLineElement:true,SVGLinearGradientElement:true,SVGMarkerElement:true,SVGMaskElement:true,SVGMetadataElement:true,SVGPathElement:true,SVGPatternElement:true,SVGPolygonElement:true,SVGPolylineElement:true,SVGRadialGradientElement:true,SVGRectElement:true,SVGScriptElement:true,SVGSetElement:true,SVGStopElement:true,SVGStyleElement:true,SVGElement:true,SVGSVGElement:true,SVGSwitchElement:true,SVGSymbolElement:true,SVGTSpanElement:true,SVGTextContentElement:true,SVGTextElement:true,SVGTextPathElement:true,SVGTextPositioningElement:true,SVGTitleElement:true,SVGUseElement:true,SVGViewElement:true,SVGGradientElement:true,SVGComponentTransferFunctionElement:true,SVGFEDropShadowElement:true,SVGMPathElement:true,WebGLBuffer:true,WebGLFramebuffer:true,WebGLProgram:true,WebGLRenderbuffer:true,WebGLRenderingContext:true,WebGLShader:true,WebGLTexture:true,WebGLUniformLocation:true})
H.dm.$nativeSuperclassTag="ArrayBufferView"
H.cz.$nativeSuperclassTag="ArrayBufferView"
H.cA.$nativeSuperclassTag="ArrayBufferView"
H.dn.$nativeSuperclassTag="ArrayBufferView"
H.cB.$nativeSuperclassTag="ArrayBufferView"
H.cC.$nativeSuperclassTag="ArrayBufferView"
H.dp.$nativeSuperclassTag="ArrayBufferView"})()
convertAllToFastObject(w)
convertToFastObject($);(function(a){if(typeof document==="undefined"){a(null)
return}if(typeof document.currentScript!='undefined'){a(document.currentScript)
return}var u=document.scripts
function onLoad(b){for(var s=0;s<u.length;++s)u[s].removeEventListener("load",onLoad,false)
a(b.target)}for(var t=0;t<u.length;++t)u[t].addEventListener("load",onLoad,false)})(function(a){v.currentScript=a
if(typeof dartMainRunner==="function")dartMainRunner(K.kv,[])
else K.kv([])})})()
//# sourceMappingURL=test.dart.js.map
