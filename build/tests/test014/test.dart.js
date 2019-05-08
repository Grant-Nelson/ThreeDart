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
a[c]=function(){a[c]=function(){H.o9(b)}
var t
var s=d
try{if(a[b]===u){t=a[b]=s
t=a[b]=d()}else t=a[b]}finally{if(t===s)a[b]=null
a[c]=function(){return this[b]}}return t}}function makeConstList(a){a.immutable$list=Array
a.fixed$length=Array
return a}function convertToFastObject(a){function t(){}t.prototype=a
new t()
return a}function convertAllToFastObject(a){for(var u=0;u<a.length;++u)convertToFastObject(a[u])}var y=0
function tearOffGetter(a,b,c,d,e){return e?new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+d+y+++"(receiver) {"+"if (c === null) c = "+"H.k5"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, true, name);"+"return new c(this, funcs[0], receiver, name);"+"}")(a,b,c,d,H,null):new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+d+y+++"() {"+"if (c === null) c = "+"H.k5"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, false, name);"+"return new c(this, funcs[0], null, name);"+"}")(a,b,c,d,H,null)}function tearOff(a,b,c,d,e,f){var u=null
return d?function(){if(u===null)u=H.k5(this,a,b,c,true,false,e).prototype
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
if(w[u][a])return w[u][a]}}var C={},H={jO:function jO(a){this.a=a},
j4:function(a){var u,t
u=a^48
if(u<=9)return u
t=a|32
if(97<=t&&t<=102)return t-87
return-1},
ff:function(){return new P.bS("No element")},
mq:function(){return new P.bS("Too many elements")},
mp:function(){return new P.bS("Too few elements")},
u:function u(a){this.a=a},
eW:function eW(){},
bJ:function bJ(){},
ci:function ci(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=null
_.$ti=d},
fv:function fv(a,b,c){this.a=a
this.b=b
this.$ti=c},
fw:function fw(a,b,c){var _=this
_.a=null
_.b=a
_.c=b
_.$ti=c},
fx:function fx(a,b,c){this.a=a
this.b=b
this.$ti=c},
cJ:function cJ(a,b,c){this.a=a
this.b=b
this.$ti=c},
hY:function hY(a,b,c){this.a=a
this.b=b
this.$ti=c},
bG:function bG(){},
cH:function cH(){},
e3:function e3(){},
mh:function(){throw H.c(P.Z("Cannot modify unmodifiable Map"))},
c3:function(a){var u,t
u=H.F(v.mangledGlobalNames[a])
if(typeof u==="string")return u
t="minified:"+a
return t},
nS:function(a){return v.types[H.a6(a)]},
nZ:function(a,b){var u
if(b!=null){u=b.x
if(u!=null)return u}return!!J.R(a).$iaI},
j:function(a){var u
if(typeof a==="string")return a
if(typeof a==="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
u=J.ao(a)
if(typeof u!=="string")throw H.c(H.an(a))
return u},
mO:function(a){var u,t,s
u=a.$reflectionInfo
if(u==null)return
u=J.fg(u)
t=u[0]
s=u[1]
return new H.fT(a,u,(t&2)===2,t>>2,s>>1,(s&1)===1,u[2])},
cp:function(a){var u=a.$identityHash
if(u==null){u=Math.random()*0x3fffffff|0
a.$identityHash=u}return u},
mL:function(a,b){var u,t,s,r,q,p
u=/^\s*[+-]?((0x[a-f0-9]+)|(\d+)|([a-z0-9]+))\s*$/i.exec(a)
if(u==null)return
if(3>=u.length)return H.e(u,3)
t=H.F(u[3])
if(b==null){if(t!=null)return parseInt(a,10)
if(u[2]!=null)return parseInt(a,16)
return}if(b<2||b>36)throw H.c(P.a7(b,2,36,"radix",null))
if(b===10&&t!=null)return parseInt(a,10)
if(b<10||t==null){s=b<=10?47+b:86+b
r=u[1]
for(q=r.length,p=0;p<q;++p)if((C.c.K(r,p)|32)>s)return}return parseInt(a,b)},
bO:function(a){return H.mC(a)+H.k2(H.bx(a),0,null)},
mC:function(a){var u,t,s,r,q,p,o,n,m
u=J.R(a)
t=u.constructor
if(typeof t=="function"){s=t.name
r=typeof s==="string"?s:null}else r=null
q=r==null
if(q||u===C.Z||!!u.$ibu){p=C.F(a)
if(q)r=p
if(p==="Object"){o=a.constructor
if(typeof o=="function"){n=String(o).match(/^\s*function\s*([\w$]*)\s*\(/)
m=n==null?null:n[1]
if(typeof m==="string"&&/^\w+$/.test(m))r=m}}return r}r=r
return H.c3(r.length>1&&C.c.K(r,0)===36?C.c.aw(r,1):r)},
mD:function(){if(!!self.location)return self.location.href
return},
kJ:function(a){var u,t,s,r,q
H.eB(a)
u=J.aF(a)
if(u<=500)return String.fromCharCode.apply(null,a)
for(t="",s=0;s<u;s=r){r=s+500
q=r<u?r:u
t+=String.fromCharCode.apply(null,a.slice(s,q))}return t},
mM:function(a){var u,t,s,r
u=H.b([],[P.m])
for(t=a.length,s=0;s<a.length;a.length===t||(0,H.A)(a),++s){r=a[s]
if(typeof r!=="number"||Math.floor(r)!==r)throw H.c(H.an(r))
if(r<=65535)C.a.h(u,r)
else if(r<=1114111){C.a.h(u,55296+(C.f.aZ(r-65536,10)&1023))
C.a.h(u,56320+(r&1023))}else throw H.c(H.an(r))}return H.kJ(u)},
kK:function(a){var u,t,s
for(u=a.length,t=0;t<u;++t){s=a[t]
if(typeof s!=="number"||Math.floor(s)!==s)throw H.c(H.an(s))
if(s<0)throw H.c(H.an(s))
if(s>65535)return H.mM(a)}return H.kJ(a)},
mN:function(a,b,c){var u,t,s,r
if(c<=500&&b===0&&c===a.length)return String.fromCharCode.apply(null,a)
for(u=b,t="";u<c;u=s){s=u+500
r=s<c?s:c
t+=String.fromCharCode.apply(null,a.subarray(u,r))}return t},
bP:function(a){var u
if(0<=a){if(a<=65535)return String.fromCharCode(a)
if(a<=1114111){u=a-65536
return String.fromCharCode((55296|C.f.aZ(u,10))>>>0,56320|u&1023)}}throw H.c(P.a7(a,0,1114111,null,null))},
bN:function(a){if(a.date===void 0)a.date=new Date(a.a)
return a.date},
mK:function(a){var u=H.bN(a).getFullYear()+0
return u},
mI:function(a){var u=H.bN(a).getMonth()+1
return u},
mE:function(a){var u=H.bN(a).getDate()+0
return u},
mF:function(a){var u=H.bN(a).getHours()+0
return u},
mH:function(a){var u=H.bN(a).getMinutes()+0
return u},
mJ:function(a){var u=H.bN(a).getSeconds()+0
return u},
mG:function(a){var u=H.bN(a).getMilliseconds()+0
return u},
B:function(a){throw H.c(H.an(a))},
e:function(a,b){if(a==null)J.aF(a)
throw H.c(H.bZ(a,b))},
bZ:function(a,b){var u,t
if(typeof b!=="number"||Math.floor(b)!==b)return new P.aG(!0,b,"index",null)
u=H.a6(J.aF(a))
if(!(b<0)){if(typeof u!=="number")return H.B(u)
t=b>=u}else t=!0
if(t)return P.bI(b,a,"index",null,u)
return P.dK(b,"index",null)},
nL:function(a,b,c){if(a>c)return new P.bQ(0,c,!0,a,"start","Invalid value")
if(b!=null)if(b<a||b>c)return new P.bQ(a,c,!0,b,"end","Invalid value")
return new P.aG(!0,b,"end",null)},
an:function(a){return new P.aG(!0,a,null,null)},
nH:function(a){if(typeof a!=="number")throw H.c(H.an(a))
return a},
c:function(a){var u
if(a==null)a=new P.dF()
u=new Error()
u.dartException=a
if("defineProperty" in Object){Object.defineProperty(u,"message",{get:H.lE})
u.name=""}else u.toString=H.lE
return u},
lE:function(){return J.ao(this.dartException)},
q:function(a){throw H.c(a)},
A:function(a){throw H.c(P.b1(a))},
aX:function(a){var u,t,s,r,q,p
a=a.replace(String({}),'$receiver$').replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
u=a.match(/\\\$[a-zA-Z]+\\\$/g)
if(u==null)u=H.b([],[P.f])
t=u.indexOf("\\$arguments\\$")
s=u.indexOf("\\$argumentsExpr\\$")
r=u.indexOf("\\$expr\\$")
q=u.indexOf("\\$method\\$")
p=u.indexOf("\\$receiver\\$")
return new H.hn(a.replace(new RegExp('\\\\\\$arguments\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$argumentsExpr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$expr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$method\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$receiver\\\\\\$','g'),'((?:x|[^x])*)'),t,s,r,q,p)},
ho:function(a){return function($expr$){var $argumentsExpr$='$arguments$'
try{$expr$.$method$($argumentsExpr$)}catch(u){return u.message}}(a)},
kU:function(a){return function($expr$){try{$expr$.$method$}catch(u){return u.message}}(a)},
kD:function(a,b){return new H.fL(a,b==null?null:b.method)},
jP:function(a,b){var u,t
u=b==null
t=u?null:b.method
return new H.fj(a,t,u?null:b.receiver)},
ad:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g
u=new H.jC(a)
if(a==null)return
if(typeof a!=="object")return a
if("dartException" in a)return u.$1(a.dartException)
else if(!("message" in a))return a
t=a.message
if("number" in a&&typeof a.number=="number"){s=a.number
r=s&65535
if((C.f.aZ(s,16)&8191)===10)switch(r){case 438:return u.$1(H.jP(H.j(t)+" (Error "+r+")",null))
case 445:case 5007:return u.$1(H.kD(H.j(t)+" (Error "+r+")",null))}}if(a instanceof TypeError){q=$.lI()
p=$.lJ()
o=$.lK()
n=$.lL()
m=$.lO()
l=$.lP()
k=$.lN()
$.lM()
j=$.lR()
i=$.lQ()
h=q.ao(t)
if(h!=null)return u.$1(H.jP(H.F(t),h))
else{h=p.ao(t)
if(h!=null){h.method="call"
return u.$1(H.jP(H.F(t),h))}else{h=o.ao(t)
if(h==null){h=n.ao(t)
if(h==null){h=m.ao(t)
if(h==null){h=l.ao(t)
if(h==null){h=k.ao(t)
if(h==null){h=n.ao(t)
if(h==null){h=j.ao(t)
if(h==null){h=i.ao(t)
g=h!=null}else g=!0}else g=!0}else g=!0}else g=!0}else g=!0}else g=!0}else g=!0
if(g)return u.$1(H.kD(H.F(t),h))}}return u.$1(new H.hB(typeof t==="string"?t:""))}if(a instanceof RangeError){if(typeof t==="string"&&t.indexOf("call stack")!==-1)return new P.dR()
t=function(b){try{return String(b)}catch(f){}return null}(a)
return u.$1(new P.aG(!1,null,null,typeof t==="string"?t.replace(/^RangeError:\s*/,""):t))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof t==="string"&&t==="too much recursion")return new P.dR()
return a},
c1:function(a){var u
if(a==null)return new H.eo(a)
u=a.$cachedTrace
if(u!=null)return u
return a.$cachedTrace=new H.eo(a)},
nO:function(a,b){var u,t,s,r
u=a.length
for(t=0;t<u;t=r){s=t+1
r=s+1
b.q(0,a[t],a[s])}return b},
nY:function(a,b,c,d,e,f){H.d(a,"$ibm")
switch(H.a6(b)){case 0:return a.$0()
case 1:return a.$1(c)
case 2:return a.$2(c,d)
case 3:return a.$3(c,d,e)
case 4:return a.$4(c,d,e,f)}throw H.c(P.v("Unsupported number of arguments for wrapped closure"))},
bY:function(a,b){var u
H.a6(b)
if(a==null)return
u=a.$identity
if(!!u)return u
u=function(c,d,e){return function(f,g,h,i){return e(c,d,f,g,h,i)}}(a,b,H.nY)
a.$identity=u
return u},
mg:function(a,b,c,d,e,f,g){var u,t,s,r,q,p,o,n,m,l,k,j,i
u=b[0]
t=u.$callName
if(!!J.R(d).$ia){u.$reflectionInfo=d
s=H.mO(u).r}else s=d
r=e?Object.create(new H.h9().constructor.prototype):Object.create(new H.c6(null,null,null,null).constructor.prototype)
r.$initialize=r.constructor
if(e)q=function static_tear_off(){this.$initialize()}
else{p=$.aO
if(typeof p!=="number")return p.n()
$.aO=p+1
p=new Function("a,b,c,d"+p,"this.$initialize(a,b,c,d"+p+")")
q=p}r.constructor=q
q.prototype=r
if(!e){o=H.kr(a,u,f)
o.$reflectionInfo=d}else{r.$static_name=g
o=u}if(typeof s=="number")n=function(h,a0){return function(){return h(a0)}}(H.nS,s)
else if(typeof s=="function")if(e)n=s
else{m=f?H.kp:H.jG
n=function(h,a0){return function(){return h.apply({$receiver:a0(this)},arguments)}}(s,m)}else throw H.c("Error in reflectionInfo.")
r.$S=n
r[t]=o
for(l=o,k=1;k<b.length;++k){j=b[k]
i=j.$callName
if(i!=null){j=e?j:H.kr(a,j,f)
r[i]=j}if(k===c){j.$reflectionInfo=d
l=j}}r.$C=l
r.$R=u.$R
r.$D=u.$D
return q},
md:function(a,b,c,d){var u=H.jG
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,u)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,u)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,u)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,u)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,u)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,u)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,u)}},
kr:function(a,b,c){var u,t,s,r,q,p,o
if(c)return H.mf(a,b)
u=b.$stubName
t=b.length
s=a[u]
r=b==null?s==null:b===s
q=!r||t>=27
if(q)return H.md(t,!r,u,b)
if(t===0){r=$.aO
if(typeof r!=="number")return r.n()
$.aO=r+1
p="self"+r
r="return function(){var "+p+" = this."
q=$.c7
if(q==null){q=H.eJ("self")
$.c7=q}return new Function(r+H.j(q)+";return "+p+"."+H.j(u)+"();}")()}o="abcdefghijklmnopqrstuvwxyz".split("").splice(0,t).join(",")
r=$.aO
if(typeof r!=="number")return r.n()
$.aO=r+1
o+=r
r="return function("+o+"){return this."
q=$.c7
if(q==null){q=H.eJ("self")
$.c7=q}return new Function(r+H.j(q)+"."+H.j(u)+"("+o+");}")()},
me:function(a,b,c,d){var u,t
u=H.jG
t=H.kp
switch(b?-1:a){case 0:throw H.c(H.mS("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,u,t)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,u,t)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,u,t)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,u,t)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,u,t)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,u,t)
default:return function(e,f,g,h){return function(){h=[g(this)]
Array.prototype.push.apply(h,arguments)
return e.apply(f(this),h)}}(d,u,t)}},
mf:function(a,b){var u,t,s,r,q,p,o,n
u=$.c7
if(u==null){u=H.eJ("self")
$.c7=u}t=$.ko
if(t==null){t=H.eJ("receiver")
$.ko=t}s=b.$stubName
r=b.length
q=a[s]
p=b==null?q==null:b===q
o=!p||r>=28
if(o)return H.me(r,!p,s,b)
if(r===1){u="return function(){return this."+H.j(u)+"."+H.j(s)+"(this."+H.j(t)+");"
t=$.aO
if(typeof t!=="number")return t.n()
$.aO=t+1
return new Function(u+t+"}")()}n="abcdefghijklmnopqrstuvwxyz".split("").splice(0,r-1).join(",")
u="return function("+n+"){return this."+H.j(u)+"."+H.j(s)+"(this."+H.j(t)+", "+n+");"
t=$.aO
if(typeof t!=="number")return t.n()
$.aO=t+1
return new Function(u+t+"}")()},
k5:function(a,b,c,d,e,f,g){return H.mg(a,b,H.a6(c),d,!!e,!!f,g)},
jG:function(a){return a.a},
kp:function(a){return a.c},
eJ:function(a){var u,t,s,r,q
u=new H.c6("self","target","receiver","name")
t=J.fg(Object.getOwnPropertyNames(u))
for(s=t.length,r=0;r<s;++r){q=t[r]
if(u[q]===a)return q}},
F:function(a){if(a==null)return a
if(typeof a==="string")return a
throw H.c(H.aM(a,"String"))},
nM:function(a){if(a==null)return a
if(typeof a==="number")return a
throw H.c(H.aM(a,"double"))},
o3:function(a){if(a==null)return a
if(typeof a==="number")return a
throw H.c(H.aM(a,"num"))},
k3:function(a){if(a==null)return a
if(typeof a==="boolean")return a
throw H.c(H.aM(a,"bool"))},
a6:function(a){if(a==null)return a
if(typeof a==="number"&&Math.floor(a)===a)return a
throw H.c(H.aM(a,"int"))},
lB:function(a,b){throw H.c(H.aM(a,H.c3(H.F(b).substring(2))))},
o5:function(a,b){throw H.c(H.mc(a,H.c3(H.F(b).substring(2))))},
d:function(a,b){if(a==null)return a
if((typeof a==="object"||typeof a==="function")&&J.R(a)[b])return a
H.lB(a,b)},
i:function(a,b){var u
if(a!=null)u=(typeof a==="object"||typeof a==="function")&&J.R(a)[b]
else u=!0
if(u)return a
H.o5(a,b)},
eB:function(a){if(a==null)return a
if(!!J.R(a).$ia)return a
throw H.c(H.aM(a,"List<dynamic>"))},
ly:function(a,b){var u
if(a==null)return a
u=J.R(a)
if(!!u.$ia)return a
if(u[b])return a
H.lB(a,b)},
lu:function(a){var u
if("$S" in a){u=a.$S
if(typeof u=="number")return v.types[H.a6(u)]
else return a.$S()}return},
ey:function(a,b){var u
if(a==null)return!1
if(typeof a=="function")return!0
u=H.lu(J.R(a))
if(u==null)return!1
return H.lg(u,null,b,null)},
k:function(a,b){var u,t
if(a==null)return a
if($.k_)return a
$.k_=!0
try{if(H.ey(a,b))return a
u=H.jx(b)
t=H.aM(a,u)
throw H.c(t)}finally{$.k_=!1}},
k7:function(a,b){if(a!=null&&!H.k4(a,b))H.q(H.aM(a,H.jx(b)))
return a},
aM:function(a,b){return new H.hp("TypeError: "+P.f_(a)+": type '"+H.ll(a)+"' is not a subtype of type '"+b+"'")},
mc:function(a,b){return new H.eK("CastError: "+P.f_(a)+": type '"+H.ll(a)+"' is not a subtype of type '"+b+"'")},
ll:function(a){var u,t
u=J.R(a)
if(!!u.$ic9){t=H.lu(u)
if(t!=null)return H.jx(t)
return"Closure"}return H.bO(a)},
o9:function(a){throw H.c(new P.eR(H.F(a)))},
mS:function(a){return new H.fY(a)},
lv:function(a){return v.getIsolateTag(a)},
b:function(a,b){a.$ti=b
return a},
bx:function(a){if(a==null)return
return a.$ti},
oU:function(a,b,c){return H.c2(a["$a"+H.j(c)],H.bx(b))},
cY:function(a,b,c,d){var u
H.F(c)
H.a6(d)
u=H.c2(a["$a"+H.j(c)],H.bx(b))
return u==null?null:u[d]},
a9:function(a,b,c){var u
H.F(b)
H.a6(c)
u=H.c2(a["$a"+H.j(b)],H.bx(a))
return u==null?null:u[c]},
r:function(a,b){var u
H.a6(b)
u=H.bx(a)
return u==null?null:u[b]},
jx:function(a){return H.bw(a,null)},
bw:function(a,b){var u,t
H.h(b,"$ia",[P.f],"$aa")
if(a==null)return"dynamic"
if(a===-1)return"void"
if(typeof a==="object"&&a!==null&&a.constructor===Array)return H.c3(a[0].name)+H.k2(a,1,b)
if(typeof a=="function")return H.c3(a.name)
if(a===-2)return"dynamic"
if(typeof a==="number"){H.a6(a)
if(b==null||a<0||a>=b.length)return"unexpected-generic-index:"+a
u=b.length
t=u-a-1
if(t<0||t>=u)return H.e(b,t)
return H.j(b[t])}if('func' in a)return H.nw(a,b)
if('futureOr' in a)return"FutureOr<"+H.bw("type" in a?a.type:null,b)+">"
return"unknown-reified-type"},
nw:function(a,b){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c
u=[P.f]
H.h(b,"$ia",u,"$aa")
if("bounds" in a){t=a.bounds
if(b==null){b=H.b([],u)
s=null}else s=b.length
r=b.length
for(q=t.length,p=q;p>0;--p)C.a.h(b,"T"+(r+p))
for(o="<",n="",p=0;p<q;++p,n=", "){o+=n
u=b.length
m=u-p-1
if(m<0)return H.e(b,m)
o=C.c.n(o,b[m])
l=t[p]
if(l!=null&&l!==P.L)o+=" extends "+H.bw(l,b)}o+=">"}else{o=""
s=null}k=!!a.v?"void":H.bw(a.ret,b)
if("args" in a){j=a.args
for(u=j.length,i="",h="",g=0;g<u;++g,h=", "){f=j[g]
i=i+h+H.bw(f,b)}}else{i=""
h=""}if("opt" in a){e=a.opt
i+=h+"["
for(u=e.length,h="",g=0;g<u;++g,h=", "){f=e[g]
i=i+h+H.bw(f,b)}i+="]"}if("named" in a){d=a.named
i+=h+"{"
for(u=H.nN(d),m=u.length,h="",g=0;g<m;++g,h=", "){c=H.F(u[g])
i=i+h+H.bw(d[c],b)+(" "+H.j(c))}i+="}"}if(s!=null)b.length=s
return o+"("+i+") => "+k},
k2:function(a,b,c){var u,t,s,r,q,p
H.h(c,"$ia",[P.f],"$aa")
if(a==null)return""
u=new P.ae("")
for(t=b,s="",r=!0,q="";t<a.length;++t,s=", "){u.a=q+s
p=a[t]
if(p!=null)r=!1
q=u.a+=H.bw(p,c)}return"<"+u.i(0)+">"},
c2:function(a,b){if(a==null)return b
a=a.apply(null,b)
if(a==null)return
if(typeof a==="object"&&a!==null&&a.constructor===Array)return a
if(typeof a=="function")return a.apply(null,b)
return b},
cW:function(a,b,c,d){var u,t
H.F(b)
H.eB(c)
H.F(d)
if(a==null)return!1
u=H.bx(a)
t=J.R(a)
if(t[b]==null)return!1
return H.lo(H.c2(t[d],u),null,c,null)},
h:function(a,b,c,d){H.F(b)
H.eB(c)
H.F(d)
if(a==null)return a
if(H.cW(a,b,c,d))return a
throw H.c(H.aM(a,function(e,f){return e.replace(/[^<,> ]+/g,function(g){return f[g]||g})}(H.c3(b.substring(2))+H.k2(c,0,null),v.mangledGlobalNames)))},
lo:function(a,b,c,d){var u,t
if(c==null)return!0
if(a==null){u=c.length
for(t=0;t<u;++t)if(!H.aE(null,null,c[t],d))return!1
return!0}u=a.length
for(t=0;t<u;++t)if(!H.aE(a[t],b,c[t],d))return!1
return!0},
oS:function(a,b,c){return a.apply(b,H.c2(J.R(b)["$a"+H.j(c)],H.bx(b)))},
lx:function(a){var u
if(typeof a==="number")return!1
if('futureOr' in a){u="type" in a?a.type:null
return a==null||a.name==="L"||a.name==="E"||a===-1||a===-2||H.lx(u)}return!1},
k4:function(a,b){var u,t
if(a==null)return b==null||b.name==="L"||b.name==="E"||b===-1||b===-2||H.lx(b)
if(b==null||b===-1||b.name==="L"||b===-2)return!0
if(typeof b=="object"){if('futureOr' in b)if(H.k4(a,"type" in b?b.type:null))return!0
if('func' in b)return H.ey(a,b)}u=J.R(a).constructor
t=H.bx(a)
if(t!=null){t=t.slice()
t.splice(0,0,u)
u=t}return H.aE(u,null,b,null)},
z:function(a,b){if(a!=null&&!H.k4(a,b))throw H.c(H.aM(a,H.jx(b)))
return a},
aE:function(a,b,c,d){var u,t,s,r,q,p,o,n,m
if(a===c)return!0
if(c==null||c===-1||c.name==="L"||c===-2)return!0
if(a===-2)return!0
if(a==null||a===-1||a.name==="L"||a===-2){if(typeof c==="number")return!1
if('futureOr' in c)return H.aE(a,b,"type" in c?c.type:null,d)
return!1}if(typeof a==="number")return!1
if(typeof c==="number")return!1
if(a.name==="E")return!0
if('func' in c)return H.lg(a,b,c,d)
if('func' in a)return c.name==="bm"
u=typeof a==="object"&&a!==null&&a.constructor===Array
t=u?a[0]:a
if('futureOr' in c){s="type" in c?c.type:null
if('futureOr' in a)return H.aE("type" in a?a.type:null,b,s,d)
else if(H.aE(a,b,s,d))return!0
else{if(!('$i'+"ce" in t.prototype))return!1
r=t.prototype["$a"+"ce"]
q=H.c2(r,u?a.slice(1):null)
return H.aE(typeof q==="object"&&q!==null&&q.constructor===Array?q[0]:null,b,s,d)}}p=typeof c==="object"&&c!==null&&c.constructor===Array
o=p?c[0]:c
if(o!==t){n=o.name
if(!('$i'+n in t.prototype))return!1
m=t.prototype["$a"+n]}else m=null
if(!p)return!0
u=u?a.slice(1):null
p=c.slice(1)
return H.lo(H.c2(m,u),b,p,d)},
lg:function(a,b,c,d){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g
if(!('func' in a))return!1
if("bounds" in a){if(!("bounds" in c))return!1
u=a.bounds
t=c.bounds
if(u.length!==t.length)return!1}else if("bounds" in c)return!1
if(!H.aE(a.ret,b,c.ret,d))return!1
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
for(k=0;k<o;++k)if(!H.aE(r[k],d,s[k],b))return!1
for(j=k,i=0;j<n;++i,++j)if(!H.aE(r[j],d,q[i],b))return!1
for(j=0;j<l;++i,++j)if(!H.aE(p[j],d,q[i],b))return!1
h=a.named
g=c.named
if(g==null)return!0
if(h==null)return!1
return H.o2(h,b,g,d)},
o2:function(a,b,c,d){var u,t,s,r
u=Object.getOwnPropertyNames(c)
for(t=u.length,s=0;s<t;++s){r=u[s]
if(!Object.hasOwnProperty.call(a,r))return!1
if(!H.aE(c[r],d,a[r],b))return!1}return!0},
oT:function(a,b,c){Object.defineProperty(a,H.F(b),{value:c,enumerable:false,writable:true,configurable:true})},
o0:function(a){var u,t,s,r,q,p
u=H.F($.lw.$1(a))
t=$.j3[u]
if(t!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:t,enumerable:false,writable:true,configurable:true})
return t.i}s=$.j8[u]
if(s!=null)return s
r=v.interceptorsByTag[u]
if(r==null){u=H.F($.ln.$2(a,u))
if(u!=null){t=$.j3[u]
if(t!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:t,enumerable:false,writable:true,configurable:true})
return t.i}s=$.j8[u]
if(s!=null)return s
r=v.interceptorsByTag[u]}}if(r==null)return
s=r.prototype
q=u[0]
if(q==="!"){t=H.jw(s)
$.j3[u]=t
Object.defineProperty(a,v.dispatchPropertyName,{value:t,enumerable:false,writable:true,configurable:true})
return t.i}if(q==="~"){$.j8[u]=s
return s}if(q==="-"){p=H.jw(s)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}if(q==="+")return H.lA(a,s)
if(q==="*")throw H.c(P.hA(u))
if(v.leafTags[u]===true){p=H.jw(s)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}else return H.lA(a,s)},
lA:function(a,b){var u=Object.getPrototypeOf(a)
Object.defineProperty(u,v.dispatchPropertyName,{value:J.ka(b,u,null,null),enumerable:false,writable:true,configurable:true})
return b},
jw:function(a){return J.ka(a,!1,null,!!a.$iaI)},
o1:function(a,b,c){var u=b.prototype
if(v.leafTags[a]===true)return H.jw(u)
else return J.ka(u,c,null,null)},
nW:function(){if(!0===$.k9)return
$.k9=!0
H.nX()},
nX:function(){var u,t,s,r,q,p,o,n
$.j3=Object.create(null)
$.j8=Object.create(null)
H.nV()
u=v.interceptorsByTag
t=Object.getOwnPropertyNames(u)
if(typeof window!="undefined"){window
s=function(){}
for(r=0;r<t.length;++r){q=t[r]
p=$.lC.$1(q)
if(p!=null){o=H.o1(q,u[q],p)
if(o!=null){Object.defineProperty(p,v.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
s.prototype=p}}}}for(r=0;r<t.length;++r){q=t[r]
if(/^[A-Za-z_]/.test(q)){n=u[q]
u["!"+q]=n
u["~"+q]=n
u["-"+q]=n
u["+"+q]=n
u["*"+q]=n}}},
nV:function(){var u,t,s,r,q,p,o
u=C.a3()
u=H.bX(C.a0,H.bX(C.a5,H.bX(C.E,H.bX(C.E,H.bX(C.a4,H.bX(C.a1,H.bX(C.a2(C.F),u)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){t=dartNativeDispatchHooksTransformer
if(typeof t=="function")t=[t]
if(t.constructor==Array)for(s=0;s<t.length;++s){r=t[s]
if(typeof r=="function")u=r(u)||u}}q=u.getTag
p=u.getUnknownTag
o=u.prototypeForTag
$.lw=new H.j5(q)
$.ln=new H.j6(p)
$.lC=new H.j7(o)},
bX:function(a,b){return a(b)||b},
ms:function(a,b,c,d){var u,t,s,r
u=b?"m":""
t=c?"":"i"
s=d?"g":""
r=function(e,f){try{return new RegExp(e,f)}catch(q){return q}}(a,u+t+s)
if(r instanceof RegExp)return r
throw H.c(P.a1("Illegal RegExp pattern ("+String(r)+")",a,null))},
o8:function(a,b,c){var u=a.indexOf(b,c)
return u>=0},
kd:function(a,b,c){var u,t,s
if(b==="")if(a==="")return c
else{u=a.length
for(t=c,s=0;s<u;++s)t=t+a[s]+c
return t.charCodeAt(0)==0?t:t}else return a.replace(new RegExp(b.replace(/[[\]{}()*+?.\\^$|]/g,"\\$&"),'g'),c.replace(/\$/g,"$$$$"))},
eO:function eO(){},
eP:function eP(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
fT:function fT(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.x=null},
hn:function hn(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
fL:function fL(a,b){this.a=a
this.b=b},
fj:function fj(a,b,c){this.a=a
this.b=b
this.c=c},
hB:function hB(a){this.a=a},
jC:function jC(a){this.a=a},
eo:function eo(a){this.a=a
this.b=null},
c9:function c9(){},
hf:function hf(){},
h9:function h9(){},
c6:function c6(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
hp:function hp(a){this.a=a},
eK:function eK(a){this.a=a},
fY:function fY(a){this.a=a},
aJ:function aJ(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
fm:function fm(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
fn:function fn(a,b){this.a=a
this.$ti=b},
fo:function fo(a,b,c){var _=this
_.a=a
_.b=b
_.d=_.c=null
_.$ti=c},
j5:function j5(a){this.a=a},
j6:function j6(a){this.a=a},
j7:function j7(a){this.a=a},
fi:function fi(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
bV:function(a){return a},
mB:function(a){return new Int8Array(a)},
ba:function(a,b,c){if(a>>>0!==a||a>=c)throw H.c(H.bZ(b,a))},
nu:function(a,b,c){var u
if(!(a>>>0!==a))u=b>>>0!==b||a>b||b>c
else u=!0
if(u)throw H.c(H.nL(a,b,c))
return b},
bM:function bM(){},
dA:function dA(){},
dB:function dB(){},
dC:function dC(){},
fE:function fE(){},
fF:function fF(){},
fG:function fG(){},
fH:function fH(){},
dD:function dD(){},
cm:function cm(){},
cN:function cN(){},
cO:function cO(){},
cP:function cP(){},
cQ:function cQ(){},
nN:function(a){return J.kx(a?Object.keys(a):[],null)},
o4:function(a){if(typeof dartPrint=="function"){dartPrint(a)
return}if(typeof console=="object"&&typeof console.log!="undefined"){console.log(a)
return}if(typeof window=="object")return
if(typeof print=="function"){print(a)
return}throw"Unable to print message: "+String(a)}},J={
ka:function(a,b,c,d){return{i:a,p:b,e:c,x:d}},
ez:function(a){var u,t,s,r,q
u=a[v.dispatchPropertyName]
if(u==null)if($.k9==null){H.nW()
u=a[v.dispatchPropertyName]}if(u!=null){t=u.p
if(!1===t)return u.i
if(!0===t)return a
s=Object.getPrototypeOf(a)
if(t===s)return u.i
if(u.e===s)throw H.c(P.hA("Return interceptor for "+H.j(t(a,u))))}r=a.constructor
q=r==null?null:r[$.kf()]
if(q!=null)return q
q=H.o0(a)
if(q!=null)return q
if(typeof a=="function")return C.a6
t=Object.getPrototypeOf(a)
if(t==null)return C.M
if(t===Object.prototype)return C.M
if(typeof r=="function"){Object.defineProperty(r,$.kf(),{value:C.C,enumerable:false,writable:true,configurable:true})
return C.C}return C.C},
mr:function(a,b){if(typeof a!=="number"||Math.floor(a)!==a)throw H.c(P.jF(a,"length","is not an integer"))
if(a<0||a>4294967295)throw H.c(P.a7(a,0,4294967295,"length",null))
return J.kx(new Array(a),b)},
kx:function(a,b){return J.fg(H.b(a,[b]))},
fg:function(a){H.eB(a)
a.fixed$length=Array
return a},
R:function(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.dl.prototype
return J.dk.prototype}if(typeof a=="string")return J.b4.prototype
if(a==null)return J.dm.prototype
if(typeof a=="boolean")return J.fh.prototype
if(a.constructor==Array)return J.aH.prototype
if(typeof a!="object"){if(typeof a=="function")return J.b5.prototype
return a}if(a instanceof P.L)return a
return J.ez(a)},
nP:function(a){if(typeof a=="number")return J.bq.prototype
if(typeof a=="string")return J.b4.prototype
if(a==null)return a
if(a.constructor==Array)return J.aH.prototype
if(typeof a!="object"){if(typeof a=="function")return J.b5.prototype
return a}if(a instanceof P.L)return a
return J.ez(a)},
c0:function(a){if(typeof a=="string")return J.b4.prototype
if(a==null)return a
if(a.constructor==Array)return J.aH.prototype
if(typeof a!="object"){if(typeof a=="function")return J.b5.prototype
return a}if(a instanceof P.L)return a
return J.ez(a)},
k8:function(a){if(a==null)return a
if(a.constructor==Array)return J.aH.prototype
if(typeof a!="object"){if(typeof a=="function")return J.b5.prototype
return a}if(a instanceof P.L)return a
return J.ez(a)},
nQ:function(a){if(typeof a=="number")return J.bq.prototype
if(a==null)return a
if(!(a instanceof P.L))return J.bu.prototype
return a},
nR:function(a){if(typeof a=="number")return J.bq.prototype
if(typeof a=="string")return J.b4.prototype
if(a==null)return a
if(!(a instanceof P.L))return J.bu.prototype
return a},
cX:function(a){if(typeof a=="string")return J.b4.prototype
if(a==null)return a
if(!(a instanceof P.L))return J.bu.prototype
return a},
a5:function(a){if(a==null)return a
if(typeof a!="object"){if(typeof a=="function")return J.b5.prototype
return a}if(a instanceof P.L)return a
return J.ez(a)},
m_:function(a,b){if(typeof a=="number"&&typeof b=="number")return a+b
return J.nP(a).n(a,b)},
U:function(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.R(a).D(a,b)},
ki:function(a,b){if(typeof a=="number"&&typeof b=="number")return a*b
return J.nR(a).A(a,b)},
m0:function(a,b){if(typeof a=="number"&&typeof b=="number")return a-b
return J.nQ(a).v(a,b)},
m1:function(a,b){if(typeof b==="number")if(a.constructor==Array||typeof a=="string"||H.nZ(a,a[v.dispatchPropertyName]))if(b>>>0===b&&b<a.length)return a[b]
return J.c0(a).k(a,b)},
m2:function(a,b,c,d){return J.a5(a).he(a,b,c,d)},
m3:function(a,b){return J.cX(a).K(a,b)},
eC:function(a,b){return J.a5(a).iO(a,b)},
jD:function(a,b,c){return J.a5(a).iS(a,b,c)},
kj:function(a,b){return J.a5(a).G(a,b)},
m4:function(a,b){return J.cX(a).a4(a,b)},
eD:function(a,b){return J.k8(a).ag(a,b)},
m5:function(a,b,c,d){return J.a5(a).kq(a,b,c,d)},
m6:function(a){return J.a5(a).gjS(a)},
kk:function(a){return J.a5(a).gcT(a)},
d1:function(a){return J.R(a).gL(a)},
by:function(a){return J.k8(a).gV(a)},
aF:function(a){return J.c0(a).gm(a)},
m7:function(a){return J.a5(a).gl9(a)},
jE:function(a,b){return J.a5(a).b4(a,b)},
kl:function(a){return J.k8(a).l_(a)},
m8:function(a,b){return J.a5(a).l3(a,b)},
m9:function(a,b,c){return J.a5(a).fF(a,b,c)},
ma:function(a,b,c){return J.cX(a).B(a,b,c)},
mb:function(a){return J.cX(a).lg(a)},
ao:function(a){return J.R(a).i(a)},
aa:function aa(){},
fh:function fh(){},
dm:function dm(){},
dn:function dn(){},
fN:function fN(){},
bu:function bu(){},
b5:function b5(){},
aH:function aH(a){this.$ti=a},
jN:function jN(a){this.$ti=a},
ap:function ap(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=null
_.$ti=d},
bq:function bq(){},
dl:function dl(){},
dk:function dk(){},
b4:function b4(){}},P={
n6:function(){var u,t,s
u={}
if(self.scheduleImmediate!=null)return P.nE()
if(self.MutationObserver!=null&&self.document!=null){t=self.document.createElement("div")
s=self.document.createElement("span")
u.a=null
new self.MutationObserver(H.bY(new P.i_(u),1)).observe(t,{childList:true})
return new P.hZ(u,t,s)}else if(self.setImmediate!=null)return P.nF()
return P.nG()},
n7:function(a){self.scheduleImmediate(H.bY(new P.i0(H.k(a,{func:1,ret:-1})),0))},
n8:function(a){self.setImmediate(H.bY(new P.i1(H.k(a,{func:1,ret:-1})),0))},
n9:function(a){P.jR(C.y,H.k(a,{func:1,ret:-1}))},
jR:function(a,b){var u
H.k(b,{func:1,ret:-1})
u=C.f.ab(a.a,1000)
return P.nf(u<0?0:u,b)},
kT:function(a,b){var u
H.k(b,{func:1,ret:-1,args:[P.aW]})
u=C.f.ab(a.a,1000)
return P.ng(u<0?0:u,b)},
nf:function(a,b){var u=new P.ep(!0)
u.h8(a,b)
return u},
ng:function(a,b){var u=new P.ep(!1)
u.h9(a,b)
return u},
na:function(a,b){var u,t,s
b.a=1
try{a.fj(new P.ia(b),new P.ib(b),null)}catch(s){u=H.ad(s)
t=H.c1(s)
P.o6(new P.ic(b,u,t))}},
l5:function(a,b){var u,t
for(;u=a.a,u===2;)a=H.d(a.c,"$iaD")
if(u>=4){t=b.cA()
b.a=a.a
b.c=a.c
P.cM(b,t)}else{t=H.d(b.c,"$ib_")
b.a=2
b.c=a
a.ea(t)}},
cM:function(a,b){var u,t,s,r,q,p,o,n,m,l,k,j,i,h
u={}
u.a=a
for(t=a;!0;){s={}
r=t.a===8
if(b==null){if(r){q=H.d(t.c,"$iah")
t=t.b
p=q.a
o=q.b
t.toString
P.iV(null,null,t,p,o)}return}for(;n=b.a,n!=null;b=n){b.a=null
P.cM(u.a,b)}t=u.a
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
if(k){H.d(m,"$iah")
t=t.b
p=m.a
o=m.b
t.toString
P.iV(null,null,t,p,o)
return}j=$.Y
if(j!=l)$.Y=l
else j=null
t=b.c
if(t===8)new P.ih(u,s,b,r).$0()
else if(p){if((t&1)!==0)new P.ig(s,b,m).$0()}else if((t&2)!==0)new P.ie(u,s,b).$0()
if(j!=null)$.Y=j
t=s.b
if(!!J.R(t).$ice){if(t.a>=4){i=H.d(o.c,"$ib_")
o.c=null
b=o.by(i)
o.a=t.a
o.c=t.c
u.a=t
continue}else P.l5(t,o)
return}}h=b.b
i=H.d(h.c,"$ib_")
h.c=null
b=h.by(i)
t=s.a
p=s.b
if(!t){H.z(p,H.r(h,0))
h.a=4
h.c=p}else{H.d(p,"$iah")
h.a=8
h.c=p}u.a=h
t=h}},
nz:function(a,b){if(H.ey(a,{func:1,args:[P.L,P.at]}))return H.k(a,{func:1,ret:null,args:[P.L,P.at]})
if(H.ey(a,{func:1,args:[P.L]}))return H.k(a,{func:1,ret:null,args:[P.L]})
throw H.c(P.jF(a,"onError","Error handler must accept one Object or one Object and a StackTrace as arguments, and return a a valid result"))},
ny:function(){var u,t
for(;u=$.bW,u!=null;){$.cV=null
t=u.b
$.bW=t
if(t==null)$.cU=null
u.a.$0()}},
nD:function(){$.k0=!0
try{P.ny()}finally{$.cV=null
$.k0=!1
if($.bW!=null)$.kg().$1(P.lp())}},
lk:function(a){var u=new P.ec(H.k(a,{func:1,ret:-1}))
if($.bW==null){$.cU=u
$.bW=u
if(!$.k0)$.kg().$1(P.lp())}else{$.cU.b=u
$.cU=u}},
nC:function(a){var u,t,s
H.k(a,{func:1,ret:-1})
u=$.bW
if(u==null){P.lk(a)
$.cV=$.cU
return}t=new P.ec(a)
s=$.cV
if(s==null){t.b=u
$.cV=t
$.bW=t}else{t.b=s.b
s.b=t
$.cV=t
if(t.b==null)$.cU=t}},
o6:function(a){var u,t
u={func:1,ret:-1}
H.k(a,u)
t=$.Y
if(C.l===t){P.iX(null,null,C.l,a)
return}t.toString
P.iX(null,null,t,H.k(t.cO(a),u))},
kS:function(a,b){var u,t
u={func:1,ret:-1}
H.k(b,u)
t=$.Y
if(t===C.l){t.toString
return P.jR(a,b)}return P.jR(a,H.k(t.cO(b),u))},
mY:function(a,b){var u,t,s
u={func:1,ret:-1,args:[P.aW]}
H.k(b,u)
t=$.Y
if(t===C.l){t.toString
return P.kT(a,b)}s=t.eq(b,P.aW)
$.Y.toString
return P.kT(a,H.k(s,u))},
iV:function(a,b,c,d,e){var u={}
u.a=d
P.nC(new P.iW(u,e))},
lh:function(a,b,c,d,e){var u,t
H.k(d,{func:1,ret:e})
t=$.Y
if(t===c)return d.$0()
$.Y=c
u=t
try{t=d.$0()
return t}finally{$.Y=u}},
li:function(a,b,c,d,e,f,g){var u,t
H.k(d,{func:1,ret:f,args:[g]})
H.z(e,g)
t=$.Y
if(t===c)return d.$1(e)
$.Y=c
u=t
try{t=d.$1(e)
return t}finally{$.Y=u}},
nA:function(a,b,c,d,e,f,g,h,i){var u,t
H.k(d,{func:1,ret:g,args:[h,i]})
H.z(e,h)
H.z(f,i)
t=$.Y
if(t===c)return d.$2(e,f)
$.Y=c
u=t
try{t=d.$2(e,f)
return t}finally{$.Y=u}},
iX:function(a,b,c,d){var u
H.k(d,{func:1,ret:-1})
u=C.l!==c
if(u)d=!(!u||!1)?c.cO(d):c.jT(d,-1)
P.lk(d)},
i_:function i_(a){this.a=a},
hZ:function hZ(a,b,c){this.a=a
this.b=b
this.c=c},
i0:function i0(a){this.a=a},
i1:function i1(a){this.a=a},
ep:function ep(a){this.a=a
this.b=null
this.c=0},
iE:function iE(a,b){this.a=a
this.b=b},
iD:function iD(a,b,c,d){var _=this
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
aD:function aD(a,b,c){var _=this
_.a=a
_.b=b
_.c=null
_.$ti=c},
i9:function i9(a,b){this.a=a
this.b=b},
id:function id(a,b){this.a=a
this.b=b},
ia:function ia(a){this.a=a},
ib:function ib(a){this.a=a},
ic:function ic(a,b,c){this.a=a
this.b=b
this.c=c},
ih:function ih(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
ii:function ii(a){this.a=a},
ig:function ig(a,b,c){this.a=a
this.b=b
this.c=c},
ie:function ie(a,b,c){this.a=a
this.b=b
this.c=c},
ec:function ec(a){this.a=a
this.b=null},
ha:function ha(){},
hc:function hc(a,b){this.a=a
this.b=b},
hd:function hd(a,b){this.a=a
this.b=b},
ct:function ct(){},
hb:function hb(){},
aW:function aW(){},
ah:function ah(a,b){this.a=a
this.b=b},
iO:function iO(){},
iW:function iW(a,b){this.a=a
this.b=b},
io:function io(){},
iq:function iq(a,b,c){this.a=a
this.b=b
this.c=c},
ip:function ip(a,b){this.a=a
this.b=b},
ir:function ir(a,b,c){this.a=a
this.b=b
this.c=c},
mu:function(a,b,c,d,e){return new H.aJ([d,e])},
mv:function(a,b,c){H.eB(a)
return H.h(H.nO(a,new H.aJ([b,c])),"$iky",[b,c],"$aky")},
kz:function(a,b){return new H.aJ([a,b])},
ds:function(a,b,c,d){return new P.il([d])},
jX:function(){var u=Object.create(null)
u["<non-identifier-key>"]=u
delete u["<non-identifier-key>"]
return u},
ne:function(a,b,c){var u=new P.ei(a,b,[c])
u.c=a.e
return u},
mo:function(a,b,c){var u,t
if(P.k1(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}u=H.b([],[P.f])
t=$.d0()
C.a.h(t,a)
try{P.nx(a,u)}finally{if(0>=t.length)return H.e(t,-1)
t.pop()}t=P.kQ(b,H.ly(u,"$il"),", ")+c
return t.charCodeAt(0)==0?t:t},
jM:function(a,b,c){var u,t,s
if(P.k1(a))return b+"..."+c
u=new P.ae(b)
t=$.d0()
C.a.h(t,a)
try{s=u
s.a=P.kQ(s.a,a,", ")}finally{if(0>=t.length)return H.e(t,-1)
t.pop()}u.a+=c
t=u.a
return t.charCodeAt(0)==0?t:t},
k1:function(a){var u,t
for(u=0;t=$.d0(),u<t.length;++u)if(a===t[u])return!0
return!1},
nx:function(a,b){var u,t,s,r,q,p,o,n,m,l
H.h(b,"$ia",[P.f],"$aa")
u=a.gV(a)
t=0
s=0
while(!0){if(!(t<80||s<3))break
if(!u.F())return
r=H.j(u.gM())
C.a.h(b,r)
t+=r.length+2;++s}if(!u.F()){if(s<=5)return
if(0>=b.length)return H.e(b,-1)
q=b.pop()
if(0>=b.length)return H.e(b,-1)
p=b.pop()}else{o=u.gM();++s
if(!u.F()){if(s<=4){C.a.h(b,H.j(o))
return}q=H.j(o)
if(0>=b.length)return H.e(b,-1)
p=b.pop()
t+=q.length+2}else{n=u.gM();++s
for(;u.F();o=n,n=m){m=u.gM();++s
if(s>100){while(!0){if(!(t>75&&s>3))break
if(0>=b.length)return H.e(b,-1)
t-=b.pop().length+2;--s}C.a.h(b,"...")
return}}p=H.j(o)
q=H.j(n)
t+=q.length+p.length+4}}if(s>b.length+2){t+=5
l="..."}else l=null
while(!0){if(!(t>80&&b.length>3))break
if(0>=b.length)return H.e(b,-1)
t-=b.pop().length+2
if(l==null){t+=5
l="..."}}if(l!=null)C.a.h(b,l)
C.a.h(b,p)
C.a.h(b,q)},
mw:function(a,b,c){var u=P.mu(null,null,null,b,c)
a.a1(0,new P.fp(u,b,c))
return u},
kA:function(a,b){var u,t,s
u=P.ds(null,null,null,b)
for(t=a.length,s=0;s<a.length;a.length===t||(0,H.A)(a),++s)u.h(0,H.z(a[s],b))
return u},
jQ:function(a){var u,t
u={}
if(P.k1(a))return"{...}"
t=new P.ae("")
try{C.a.h($.d0(),a)
t.a+="{"
u.a=!0
a.a1(0,new P.ft(u,t))
t.a+="}"}finally{u=$.d0()
if(0>=u.length)return H.e(u,-1)
u.pop()}u=t.a
return u.charCodeAt(0)==0?u:u},
il:function il(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
bT:function bT(a){this.a=a
this.c=this.b=null},
ei:function ei(a,b,c){var _=this
_.a=a
_.b=b
_.d=_.c=null
_.$ti=c},
fp:function fp(a,b,c){this.a=a
this.b=b
this.c=c},
fq:function fq(){},
V:function V(){},
fs:function fs(){},
ft:function ft(a,b){this.a=a
this.b=b},
bK:function bK(){},
iF:function iF(){},
fu:function fu(){},
e4:function e4(a,b){this.a=a
this.$ti=b},
it:function it(){},
ej:function ej(){},
et:function et(){},
n1:function(a,b,c,d){H.h(b,"$ia",[P.m],"$aa")
if(b instanceof Uint8Array)return P.n2(!1,b,c,d)
return},
n2:function(a,b,c,d){var u,t,s
u=$.lS()
if(u==null)return
t=0===c
if(t&&!0)return P.jU(u,b)
s=b.length
d=P.b9(c,d,s,null,null,null)
if(t&&d===s)return P.jU(u,b)
return P.jU(u,b.subarray(c,d))},
jU:function(a,b){if(P.n4(b))return
return P.n5(a,b)},
n5:function(a,b){var u,t
try{u=a.decode(b)
return u}catch(t){H.ad(t)}return},
n4:function(a){var u,t
u=a.length-2
for(t=0;t<u;++t)if(a[t]===237)if((a[t+1]&224)===160)return!0
return!1},
n3:function(){var u,t
try{u=new TextDecoder("utf-8",{fatal:true})
return u}catch(t){H.ad(t)}return},
nB:function(a,b,c){var u,t,s
H.h(a,"$ia",[P.m],"$aa")
for(u=J.c0(a),t=b;t<c;++t){s=u.k(a,t)
if(typeof s!=="number")return s.c5()
if((s&127)!==s)return t-b}return c-b},
kn:function(a,b,c,d,e,f){if(C.f.br(f,4)!==0)throw H.c(P.a1("Invalid base64 padding, padded length must be multiple of four, is "+f,a,c))
if(d+e!==f)throw H.c(P.a1("Invalid base64 padding, '=' not at the end",a,b))
if(e>2)throw H.c(P.a1("Invalid base64 padding, more than two '=' characters",a,b))},
eG:function eG(a){this.a=a},
eH:function eH(a){this.a=a},
bC:function bC(){},
bj:function bj(){},
eY:function eY(){},
fc:function fc(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
fb:function fb(a){this.a=a},
hI:function hI(a){this.a=a},
hK:function hK(){},
iM:function iM(a){this.b=this.a=0
this.c=a},
hJ:function hJ(a){this.a=a},
iK:function iK(a,b){var _=this
_.a=a
_.b=b
_.c=!0
_.f=_.e=_.d=0},
iL:function iL(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
eA:function(a,b,c){var u
H.k(b,{func:1,ret:P.m,args:[P.f]})
u=H.mL(a,c)
if(u!=null)return u
if(b!=null)return b.$1(a)
throw H.c(P.a1(a,null,null))},
mm:function(a){if(a instanceof H.c9)return a.i(0)
return"Instance of '"+H.bO(a)+"'"},
mx:function(a,b,c,d){var u,t
H.z(b,d)
u=J.mr(a,d)
if(a!==0&&!0)for(t=0;t<u.length;++t)C.a.q(u,t,b)
return H.h(u,"$ia",[d],"$aa")},
my:function(a,b,c){var u,t,s
u=[c]
t=H.b([],u)
for(s=a.gV(a);s.F();)C.a.h(t,H.z(s.gM(),c))
if(b)return t
return H.h(J.fg(t),"$ia",u,"$aa")},
dS:function(a,b,c){var u,t
u=P.m
H.h(a,"$il",[u],"$al")
if(typeof a==="object"&&a!==null&&a.constructor===Array){H.h(a,"$iaH",[u],"$aaH")
t=a.length
c=P.b9(b,c,t,null,null,null)
return H.kK(b>0||c<t?C.a.fK(a,b,c):a)}if(!!J.R(a).$icm)return H.mN(a,b,P.b9(b,c,a.length,null,null,null))
return P.mW(a,b,c)},
mW:function(a,b,c){var u,t,s,r
H.h(a,"$il",[P.m],"$al")
if(b<0)throw H.c(P.a7(b,0,J.aF(a),null,null))
u=c==null
if(!u&&c<b)throw H.c(P.a7(c,b,J.aF(a),null,null))
t=J.by(a)
for(s=0;s<b;++s)if(!t.F())throw H.c(P.a7(b,0,s,null,null))
r=[]
if(u)for(;t.F();)r.push(t.gM())
else for(s=b;s<c;++s){if(!t.F())throw H.c(P.a7(c,b,s,null,null))
r.push(t.gM())}return H.kK(r)},
mQ:function(a,b,c){return new H.fi(a,H.ms(a,!1,!0,!1))},
kQ:function(a,b,c){var u=J.by(b)
if(!u.F())return a
if(c.length===0){do a+=H.j(u.gM())
while(u.F())}else{a+=H.j(u.gM())
for(;u.F();)a=a+c+H.j(u.gM())}return a},
kW:function(){var u=H.mD()
if(u!=null)return P.n0(u,0,null)
throw H.c(P.Z("'Uri.base' is not supported"))},
eu:function(a,b,c,d){var u,t,s,r,q,p
H.h(a,"$ia",[P.m],"$aa")
if(c===C.m){u=$.lY().b
if(typeof b!=="string")H.q(H.an(b))
u=u.test(b)}else u=!1
if(u)return b
H.z(b,H.a9(c,"bC",0))
t=c.gkp().cU(b)
for(u=t.length,s=0,r="";s<u;++s){q=t[s]
if(q<128){p=q>>>4
if(p>=8)return H.e(a,p)
p=(a[p]&1<<(q&15))!==0}else p=!1
if(p)r+=H.bP(q)
else r=d&&q===32?r+"+":r+"%"+"0123456789ABCDEF"[q>>>4&15]+"0123456789ABCDEF"[q&15]}return r.charCodeAt(0)==0?r:r},
mi:function(a){var u,t
u=Math.abs(a)
t=a<0?"-":""
if(u>=1000)return""+a
if(u>=100)return t+"0"+u
if(u>=10)return t+"00"+u
return t+"000"+u},
mj:function(a){if(a>=100)return""+a
if(a>=10)return"0"+a
return"00"+a},
db:function(a){if(a>=10)return""+a
return"0"+a},
kt:function(a,b,c,d,e,f){return new P.aP(864e8*a+36e8*b+6e7*e+1e6*f+1000*d+c)},
f_:function(a){if(typeof a==="number"||typeof a==="boolean"||null==a)return J.ao(a)
if(typeof a==="string")return JSON.stringify(a)
return P.mm(a)},
d3:function(a){return new P.aG(!1,null,null,a)},
jF:function(a,b,c){return new P.aG(!0,a,b,c)},
dK:function(a,b,c){return new P.bQ(null,null,!0,a,b,"Value not in range")},
a7:function(a,b,c,d,e){return new P.bQ(b,c,!0,a,d,"Invalid value")},
b9:function(a,b,c,d,e,f){if(typeof a!=="number")return H.B(a)
if(0>a||a>c)throw H.c(P.a7(a,0,c,"start",f))
if(b!=null){if(a>b||b>c)throw H.c(P.a7(b,a,c,"end",f))
return b}return c},
bI:function(a,b,c,d,e){var u=H.a6(e==null?J.aF(b):e)
return new P.fe(b,u,!0,a,c,"Index out of range")},
Z:function(a){return new P.hC(a)},
hA:function(a){return new P.hz(a)},
kP:function(a){return new P.bS(a)},
b1:function(a){return new P.eN(a)},
v:function(a){return new P.ef(a)},
a1:function(a,b,c){return new P.f7(a,b,c)},
mz:function(a,b,c,d){var u,t
H.k(b,{func:1,ret:d,args:[P.m]})
u=H.b([],[d])
C.a.sm(u,a)
for(t=0;t<a;++t)C.a.q(u,t,b.$1(t))
return u},
kc:function(a){H.o4(a)},
n0:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k,j,i,h
c=a.length
u=b+5
if(c>=u){t=((C.c.K(a,b+4)^58)*3|C.c.K(a,b)^100|C.c.K(a,b+1)^97|C.c.K(a,b+2)^116|C.c.K(a,b+3)^97)>>>0
if(t===0)return P.kV(b>0||c<c?C.c.B(a,b,c):a,5,null).gfo()
else if(t===32)return P.kV(C.c.B(a,u,c),0,null).gfo()}s=new Array(8)
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
if(P.lj(a,b,c,0,r)>=14)C.a.q(r,7,c)
q=r[1]
if(typeof q!=="number")return q.lo()
if(q>=b)if(P.lj(a,b,q,20,r)===20)r[7]=q
s=r[2]
if(typeof s!=="number")return s.n()
p=s+1
o=r[3]
n=r[4]
m=r[5]
l=r[6]
if(typeof l!=="number")return l.Z()
if(typeof m!=="number")return H.B(m)
if(l<m)m=l
if(typeof n!=="number")return n.Z()
if(n<p)n=m
else if(n<=q)n=q+1
if(typeof o!=="number")return o.Z()
if(o<p)o=n
s=r[7]
if(typeof s!=="number")return s.Z()
k=s<b
if(k)if(p>q+3){j=null
k=!1}else{s=o>b
if(s&&o+1===n){j=null
k=!1}else{if(!(m<c&&m===n+2&&C.c.ak(a,"..",n)))i=m>n+2&&C.c.ak(a,"/..",m-3)
else i=!0
if(i){j=null
k=!1}else{if(q===b+4)if(C.c.ak(a,"file",b)){if(p<=b){if(!C.c.ak(a,"/",n)){h="file:///"
t=3}else{h="file://"
t=2}a=h+C.c.B(a,n,c)
q-=b
u=t-b
m+=u
l+=u
c=a.length
b=0
p=7
o=7
n=7}else if(n===m)if(b===0&&!0){a=C.c.b2(a,n,m,"/");++m;++l;++c}else{a=C.c.B(a,b,n)+"/"+C.c.B(a,m,c)
q-=b
p-=b
o-=b
n-=b
u=1-b
m+=u
l+=u
c=a.length
b=0}j="file"}else if(C.c.ak(a,"http",b)){if(s&&o+3===n&&C.c.ak(a,"80",o+1))if(b===0&&!0){a=C.c.b2(a,o,n,"")
n-=3
m-=3
l-=3
c-=3}else{a=C.c.B(a,b,o)+C.c.B(a,n,c)
q-=b
p-=b
o-=b
u=3+b
n-=u
m-=u
l-=u
c=a.length
b=0}j="http"}else j=null
else if(q===u&&C.c.ak(a,"https",b)){if(s&&o+4===n&&C.c.ak(a,"443",o+1))if(b===0&&!0){a=C.c.b2(a,o,n,"")
n-=4
m-=4
l-=4
c-=3}else{a=C.c.B(a,b,o)+C.c.B(a,n,c)
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
if(k){if(b>0||c<a.length){a=C.c.B(a,b,c)
q-=b
p-=b
o-=b
n-=b
m-=b
l-=b}return new P.iw(a,q,p,o,n,m,l,j)}return P.nh(a,b,c,q,p,o,n,m,l,j)},
kY:function(a,b){var u=P.f
return C.a.kv(H.b(a.split("&"),[u]),P.kz(u,u),new P.hH(b),[P.I,P.f,P.f])},
n_:function(a,b,c){var u,t,s,r,q,p,o,n,m
u=new P.hE(a)
t=new Uint8Array(4)
for(s=t.length,r=b,q=r,p=0;r<c;++r){o=C.c.a4(a,r)
if(o!==46){if((o^48)>9)u.$2("invalid character",r)}else{if(p===3)u.$2("IPv4 address should contain exactly 4 parts",r)
n=P.eA(C.c.B(a,q,r),null,null)
if(typeof n!=="number")return n.fC()
if(n>255)u.$2("each part must be in the range 0..255",q)
m=p+1
if(p>=s)return H.e(t,p)
t[p]=n
q=r+1
p=m}}if(p!==3)u.$2("IPv4 address should contain exactly 4 parts",c)
n=P.eA(C.c.B(a,q,c),null,null)
if(typeof n!=="number")return n.fC()
if(n>255)u.$2("each part must be in the range 0..255",q)
if(p>=s)return H.e(t,p)
t[p]=n
return t},
kX:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
if(c==null)c=a.length
u=new P.hF(a)
t=new P.hG(u,a)
if(a.length<2)u.$1("address is too short")
s=H.b([],[P.m])
for(r=b,q=r,p=!1,o=!1;r<c;++r){n=C.c.a4(a,r)
if(n===58){if(r===b){++r
if(C.c.a4(a,r)!==58)u.$2("invalid start colon.",r)
q=r}if(r===q){if(p)u.$2("only one wildcard `::` is allowed",r)
C.a.h(s,-1)
p=!0}else C.a.h(s,t.$2(q,r))
q=r+1}else if(n===46)o=!0}if(s.length===0)u.$1("too few parts")
m=q===c
l=C.a.gaD(s)
if(m&&l!==-1)u.$2("expected a part after last `:`",c)
if(!m)if(!o)C.a.h(s,t.$2(q,c))
else{k=P.n_(a,q,c)
C.a.h(s,(k[0]<<8|k[1])>>>0)
C.a.h(s,(k[2]<<8|k[3])>>>0)}if(p){if(s.length>7)u.$1("an address with a wildcard must have less than 7 parts")}else if(s.length!==8)u.$1("an address without a wildcard must contain exactly 8 parts")
j=new Uint8Array(16)
for(l=s.length,i=j.length,h=9-l,r=0,g=0;r<l;++r){f=s[r]
if(f===-1)for(e=0;e<h;++e){if(g<0||g>=i)return H.e(j,g)
j[g]=0
d=g+1
if(d>=i)return H.e(j,d)
j[d]=0
g+=2}else{d=C.f.aZ(f,8)
if(g<0||g>=i)return H.e(j,g)
j[g]=d
d=g+1
if(d>=i)return H.e(j,d)
j[d]=f&255
g+=2}}return j},
nh:function(a,b,c,d,e,f,g,h,i,j){var u,t,s,r,q,p,o
if(j==null)if(d>b)j=P.no(a,b,d)
else{if(d===b)P.cR(a,b,"Invalid empty scheme")
j=""}if(e>b){u=d+3
t=u<e?P.np(a,u,e-1):""
s=P.nl(a,e,f,!1)
if(typeof f!=="number")return f.n()
r=f+1
if(typeof g!=="number")return H.B(g)
q=r<g?P.nn(P.eA(C.c.B(a,r,g),new P.iG(a,f),null),j):null}else{t=""
s=null
q=null}p=P.nm(a,g,h,null,j,s!=null)
if(typeof h!=="number")return h.Z()
o=h<i?P.jY(a,h+1,i,null):null
return new P.bU(j,t,s,q,p,o,i<c?P.nk(a,i+1,c):null)},
l9:function(a){if(a==="http")return 80
if(a==="https")return 443
return 0},
cR:function(a,b,c){throw H.c(P.a1(c,a,b))},
nn:function(a,b){if(a!=null&&a===P.l9(b))return
return a},
nl:function(a,b,c,d){var u,t
if(b===c)return""
if(C.c.a4(a,b)===91){if(typeof c!=="number")return c.v()
u=c-1
if(C.c.a4(a,u)!==93)P.cR(a,b,"Missing end `]` to match `[` in host")
P.kX(a,b+1,u)
return C.c.B(a,b,c).toLowerCase()}if(typeof c!=="number")return H.B(c)
t=b
for(;t<c;++t)if(C.c.a4(a,t)===58){P.kX(a,b,c)
return"["+a+"]"}return P.nr(a,b,c)},
nr:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k
if(typeof c!=="number")return H.B(c)
u=b
t=u
s=null
r=!0
for(;u<c;){q=C.c.a4(a,u)
if(q===37){p=P.lf(a,u,!0)
o=p==null
if(o&&r){u+=3
continue}if(s==null)s=new P.ae("")
n=C.c.B(a,t,u)
m=s.a+=!r?n.toLowerCase():n
if(o){p=C.c.B(a,u,u+3)
l=3}else if(p==="%"){p="%25"
l=1}else l=3
s.a=m+p
u+=l
t=u
r=!0}else{if(q<127){o=q>>>4
if(o>=8)return H.e(C.K,o)
o=(C.K[o]&1<<(q&15))!==0}else o=!1
if(o){if(r&&65<=q&&90>=q){if(s==null)s=new P.ae("")
if(t<u){s.a+=C.c.B(a,t,u)
t=u}r=!1}++u}else{if(q<=93){o=q>>>4
if(o>=8)return H.e(C.t,o)
o=(C.t[o]&1<<(q&15))!==0}else o=!1
if(o)P.cR(a,u,"Invalid character")
else{if((q&64512)===55296&&u+1<c){k=C.c.a4(a,u+1)
if((k&64512)===56320){q=65536|(q&1023)<<10|k&1023
l=2}else l=1}else l=1
if(s==null)s=new P.ae("")
n=C.c.B(a,t,u)
s.a+=!r?n.toLowerCase():n
s.a+=P.la(q)
u+=l
t=u}}}}if(s==null)return C.c.B(a,b,c)
if(t<c){n=C.c.B(a,t,c)
s.a+=!r?n.toLowerCase():n}o=s.a
return o.charCodeAt(0)==0?o:o},
no:function(a,b,c){var u,t,s,r
if(b===c)return""
if(!P.lc(C.c.K(a,b)))P.cR(a,b,"Scheme not starting with alphabetic character")
for(u=b,t=!1;u<c;++u){s=C.c.K(a,u)
if(s<128){r=s>>>4
if(r>=8)return H.e(C.v,r)
r=(C.v[r]&1<<(s&15))!==0}else r=!1
if(!r)P.cR(a,u,"Illegal scheme character")
if(65<=s&&s<=90)t=!0}a=C.c.B(a,b,c)
return P.ni(t?a.toLowerCase():a)},
ni:function(a){if(a==="http")return"http"
if(a==="file")return"file"
if(a==="https")return"https"
if(a==="package")return"package"
return a},
np:function(a,b,c){return P.cS(a,b,c,C.a9,!1)},
nm:function(a,b,c,d,e,f){var u,t,s,r
u=e==="file"
t=u||f
s=a==null
if(s&&!0)return u?"/":""
r=!s?P.cS(a,b,c,C.L,!0):C.r.lr(d,new P.iH(),P.f).l(0,"/")
if(r.length===0){if(u)return"/"}else if(t&&!C.c.aa(r,"/"))r="/"+r
return P.nq(r,e,f)},
nq:function(a,b,c){var u=b.length===0
if(u&&!c&&!C.c.aa(a,"/"))return P.ns(a,!u||c)
return P.nt(a)},
jY:function(a,b,c,d){var u,t
u={}
H.h(d,"$iI",[P.f,null],"$aI")
if(a!=null){if(d!=null)throw H.c(P.d3("Both query and queryParameters specified"))
return P.cS(a,b,c,C.u,!0)}if(d==null)return
t=new P.ae("")
u.a=""
d.a1(0,new P.iI(new P.iJ(u,t)))
u=t.a
return u.charCodeAt(0)==0?u:u},
nk:function(a,b,c){return P.cS(a,b,c,C.u,!0)},
lf:function(a,b,c){var u,t,s,r,q,p
u=b+2
if(u>=a.length)return"%"
t=C.c.a4(a,b+1)
s=C.c.a4(a,u)
r=H.j4(t)
q=H.j4(s)
if(r<0||q<0)return"%"
p=r*16+q
if(p<127){u=C.f.aZ(p,4)
if(u>=8)return H.e(C.w,u)
u=(C.w[u]&1<<(p&15))!==0}else u=!1
if(u)return H.bP(c&&65<=p&&90>=p?(p|32)>>>0:p)
if(t>=97||s>=97)return C.c.B(a,b,b+3).toUpperCase()
return},
la:function(a){var u,t,s,r,q,p
if(a<128){u=new Array(3)
u.fixed$length=Array
t=H.b(u,[P.m])
C.a.q(t,0,37)
C.a.q(t,1,C.c.K("0123456789ABCDEF",a>>>4))
C.a.q(t,2,C.c.K("0123456789ABCDEF",a&15))}else{if(a>2047)if(a>65535){s=240
r=4}else{s=224
r=3}else{s=192
r=2}u=new Array(3*r)
u.fixed$length=Array
t=H.b(u,[P.m])
for(q=0;--r,r>=0;s=128){p=C.f.j5(a,6*r)&63|s
C.a.q(t,q,37)
C.a.q(t,q+1,C.c.K("0123456789ABCDEF",p>>>4))
C.a.q(t,q+2,C.c.K("0123456789ABCDEF",p&15))
q+=3}}return P.dS(t,0,null)},
cS:function(a,b,c,d,e){var u=P.le(a,b,c,H.h(d,"$ia",[P.m],"$aa"),e)
return u==null?C.c.B(a,b,c):u},
le:function(a,b,c,d,e){var u,t,s,r,q,p,o,n,m
H.h(d,"$ia",[P.m],"$aa")
u=!e
t=b
s=t
r=null
while(!0){if(typeof t!=="number")return t.Z()
if(typeof c!=="number")return H.B(c)
if(!(t<c))break
c$0:{q=C.c.a4(a,t)
if(q<127){p=q>>>4
if(p>=8)return H.e(d,p)
p=(d[p]&1<<(q&15))!==0}else p=!1
if(p)++t
else{if(q===37){o=P.lf(a,t,!1)
if(o==null){t+=3
break c$0}if("%"===o){o="%25"
n=1}else n=3}else{if(u)if(q<=93){p=q>>>4
if(p>=8)return H.e(C.t,p)
p=(C.t[p]&1<<(q&15))!==0}else p=!1
else p=!1
if(p){P.cR(a,t,"Invalid character")
o=null
n=null}else{if((q&64512)===55296){p=t+1
if(p<c){m=C.c.a4(a,p)
if((m&64512)===56320){q=65536|(q&1023)<<10|m&1023
n=2}else n=1}else n=1}else n=1
o=P.la(q)}}if(r==null)r=new P.ae("")
r.a+=C.c.B(a,s,t)
r.a+=H.j(o)
if(typeof n!=="number")return H.B(n)
t+=n
s=t}}}if(r==null)return
if(typeof s!=="number")return s.Z()
if(s<c)r.a+=C.c.B(a,s,c)
u=r.a
return u.charCodeAt(0)==0?u:u},
ld:function(a){if(C.c.aa(a,"."))return!0
return C.c.f3(a,"/.")!==-1},
nt:function(a){var u,t,s,r,q,p,o
if(!P.ld(a))return a
u=H.b([],[P.f])
for(t=a.split("/"),s=t.length,r=!1,q=0;q<s;++q){p=t[q]
if(J.U(p,"..")){o=u.length
if(o!==0){if(0>=o)return H.e(u,-1)
u.pop()
if(u.length===0)C.a.h(u,"")}r=!0}else if("."===p)r=!0
else{C.a.h(u,p)
r=!1}}if(r)C.a.h(u,"")
return C.a.l(u,"/")},
ns:function(a,b){var u,t,s,r,q,p
if(!P.ld(a))return!b?P.lb(a):a
u=H.b([],[P.f])
for(t=a.split("/"),s=t.length,r=!1,q=0;q<s;++q){p=t[q]
if(".."===p)if(u.length!==0&&C.a.gaD(u)!==".."){if(0>=u.length)return H.e(u,-1)
u.pop()
r=!0}else{C.a.h(u,"..")
r=!1}else if("."===p)r=!0
else{C.a.h(u,p)
r=!1}}t=u.length
if(t!==0)if(t===1){if(0>=t)return H.e(u,0)
t=u[0].length===0}else t=!1
else t=!0
if(t)return"./"
if(r||C.a.gaD(u)==="..")C.a.h(u,"")
if(!b){if(0>=u.length)return H.e(u,0)
C.a.q(u,0,P.lb(u[0]))}return C.a.l(u,"/")},
lb:function(a){var u,t,s,r
u=a.length
if(u>=2&&P.lc(J.m3(a,0)))for(t=1;t<u;++t){s=C.c.K(a,t)
if(s===58)return C.c.B(a,0,t)+"%3A"+C.c.aw(a,t+1)
if(s<=127){r=s>>>4
if(r>=8)return H.e(C.v,r)
r=(C.v[r]&1<<(s&15))===0}else r=!0
if(r)break}return a},
nj:function(a,b){var u,t,s
for(u=0,t=0;t<2;++t){s=C.c.K(a,b+t)
if(48<=s&&s<=57)u=u*16+s-48
else{s|=32
if(97<=s&&s<=102)u=u*16+s-87
else throw H.c(P.d3("Invalid URL encoding"))}}return u},
jZ:function(a,b,c,d,e){var u,t,s,r,q
t=b
while(!0){if(!(t<c)){u=!0
break}s=C.c.K(a,t)
if(s<=127)if(s!==37)r=s===43
else r=!0
else r=!0
if(r){u=!1
break}++t}if(u){if(C.m!==d)r=!1
else r=!0
if(r)return C.c.B(a,b,c)
else q=new H.u(C.c.B(a,b,c))}else{q=H.b([],[P.m])
for(r=a.length,t=b;t<c;++t){s=C.c.K(a,t)
if(s>127)throw H.c(P.d3("Illegal percent encoding in URI"))
if(s===37){if(t+3>r)throw H.c(P.d3("Truncated URI"))
C.a.h(q,P.nj(a,t+1))
t+=2}else if(s===43)C.a.h(q,32)
else C.a.h(q,s)}}H.h(q,"$ia",[P.m],"$aa")
return new P.hJ(!1).cU(q)},
lc:function(a){var u=a|32
return 97<=u&&u<=122},
kV:function(a,b,c){var u,t,s,r,q,p,o,n,m
u=H.b([b-1],[P.m])
for(t=a.length,s=b,r=-1,q=null;s<t;++s){q=C.c.K(a,s)
if(q===44||q===59)break
if(q===47){if(r<0){r=s
continue}throw H.c(P.a1("Invalid MIME type",a,s))}}if(r<0&&s>b)throw H.c(P.a1("Invalid MIME type",a,s))
for(;q!==44;){C.a.h(u,s);++s
for(p=-1;s<t;++s){q=C.c.K(a,s)
if(q===61){if(p<0)p=s}else if(q===59||q===44)break}if(p>=0)C.a.h(u,p)
else{o=C.a.gaD(u)
if(q!==44||s!==o+7||!C.c.ak(a,"base64",o+1))throw H.c(P.a1("Expecting '='",a,s))
break}}C.a.h(u,s)
n=s+1
if((u.length&1)===1)a=C.Q.kJ(a,n,t)
else{m=P.le(a,n,t,C.u,!0)
if(m!=null)a=C.c.b2(a,n,t,m)}return new P.hD(a,u,c)},
nv:function(){var u,t,s,r,q
u=P.mz(22,new P.iS(),!0,P.N)
t=new P.iR(u)
s=new P.iT()
r=new P.iU()
q=H.d(t.$2(0,225),"$iN")
s.$3(q,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",1)
s.$3(q,".",14)
s.$3(q,":",34)
s.$3(q,"/",3)
s.$3(q,"?",172)
s.$3(q,"#",205)
q=H.d(t.$2(14,225),"$iN")
s.$3(q,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",1)
s.$3(q,".",15)
s.$3(q,":",34)
s.$3(q,"/",234)
s.$3(q,"?",172)
s.$3(q,"#",205)
q=H.d(t.$2(15,225),"$iN")
s.$3(q,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",1)
s.$3(q,"%",225)
s.$3(q,":",34)
s.$3(q,"/",9)
s.$3(q,"?",172)
s.$3(q,"#",205)
q=H.d(t.$2(1,225),"$iN")
s.$3(q,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",1)
s.$3(q,":",34)
s.$3(q,"/",10)
s.$3(q,"?",172)
s.$3(q,"#",205)
q=H.d(t.$2(2,235),"$iN")
s.$3(q,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",139)
s.$3(q,"/",131)
s.$3(q,".",146)
s.$3(q,"?",172)
s.$3(q,"#",205)
q=H.d(t.$2(3,235),"$iN")
s.$3(q,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",11)
s.$3(q,"/",68)
s.$3(q,".",18)
s.$3(q,"?",172)
s.$3(q,"#",205)
q=H.d(t.$2(4,229),"$iN")
s.$3(q,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",5)
r.$3(q,"AZ",229)
s.$3(q,":",102)
s.$3(q,"@",68)
s.$3(q,"[",232)
s.$3(q,"/",138)
s.$3(q,"?",172)
s.$3(q,"#",205)
q=H.d(t.$2(5,229),"$iN")
s.$3(q,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",5)
r.$3(q,"AZ",229)
s.$3(q,":",102)
s.$3(q,"@",68)
s.$3(q,"/",138)
s.$3(q,"?",172)
s.$3(q,"#",205)
q=H.d(t.$2(6,231),"$iN")
r.$3(q,"19",7)
s.$3(q,"@",68)
s.$3(q,"/",138)
s.$3(q,"?",172)
s.$3(q,"#",205)
q=H.d(t.$2(7,231),"$iN")
r.$3(q,"09",7)
s.$3(q,"@",68)
s.$3(q,"/",138)
s.$3(q,"?",172)
s.$3(q,"#",205)
s.$3(H.d(t.$2(8,8),"$iN"),"]",5)
q=H.d(t.$2(9,235),"$iN")
s.$3(q,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",11)
s.$3(q,".",16)
s.$3(q,"/",234)
s.$3(q,"?",172)
s.$3(q,"#",205)
q=H.d(t.$2(16,235),"$iN")
s.$3(q,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",11)
s.$3(q,".",17)
s.$3(q,"/",234)
s.$3(q,"?",172)
s.$3(q,"#",205)
q=H.d(t.$2(17,235),"$iN")
s.$3(q,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",11)
s.$3(q,"/",9)
s.$3(q,"?",172)
s.$3(q,"#",205)
q=H.d(t.$2(10,235),"$iN")
s.$3(q,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",11)
s.$3(q,".",18)
s.$3(q,"/",234)
s.$3(q,"?",172)
s.$3(q,"#",205)
q=H.d(t.$2(18,235),"$iN")
s.$3(q,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",11)
s.$3(q,".",19)
s.$3(q,"/",234)
s.$3(q,"?",172)
s.$3(q,"#",205)
q=H.d(t.$2(19,235),"$iN")
s.$3(q,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",11)
s.$3(q,"/",234)
s.$3(q,"?",172)
s.$3(q,"#",205)
q=H.d(t.$2(11,235),"$iN")
s.$3(q,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",11)
s.$3(q,"/",10)
s.$3(q,"?",172)
s.$3(q,"#",205)
q=H.d(t.$2(12,236),"$iN")
s.$3(q,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",12)
s.$3(q,"?",12)
s.$3(q,"#",205)
q=H.d(t.$2(13,237),"$iN")
s.$3(q,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",13)
s.$3(q,"?",13)
r.$3(H.d(t.$2(20,245),"$iN"),"az",21)
q=H.d(t.$2(21,245),"$iN")
r.$3(q,"az",21)
r.$3(q,"09",21)
s.$3(q,"+-.",21)
return u},
lj:function(a,b,c,d,e){var u,t,s,r,q
H.h(e,"$ia",[P.m],"$aa")
u=$.lZ()
for(t=b;t<c;++t){if(d<0||d>=u.length)return H.e(u,d)
s=u[d]
r=C.c.K(a,t)^96
if(r>95)r=31
if(r>=s.length)return H.e(s,r)
q=s[r]
d=q&31
C.a.q(e,q>>>5,t)}return d},
M:function M(){},
aj:function aj(a,b){this.a=a
this.b=b},
p:function p(){},
aP:function aP(a){this.a=a},
eU:function eU(){},
eV:function eV(){},
bl:function bl(){},
dF:function dF(){},
aG:function aG(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
bQ:function bQ(a,b,c,d,e,f){var _=this
_.e=a
_.f=b
_.a=c
_.b=d
_.c=e
_.d=f},
fe:function fe(a,b,c,d,e,f){var _=this
_.e=a
_.f=b
_.a=c
_.b=d
_.c=e
_.d=f},
hC:function hC(a){this.a=a},
hz:function hz(a){this.a=a},
bS:function bS(a){this.a=a},
eN:function eN(a){this.a=a},
fM:function fM(){},
dR:function dR(){},
eR:function eR(a){this.a=a},
ef:function ef(a){this.a=a},
f7:function f7(a,b,c){this.a=a
this.b=b
this.c=c},
bm:function bm(){},
m:function m(){},
l:function l(){},
aQ:function aQ(){},
a:function a(){},
I:function I(){},
E:function E(){},
ag:function ag(){},
L:function L(){},
at:function at(){},
f:function f(){},
ae:function ae(a){this.a=a},
hH:function hH(a){this.a=a},
hE:function hE(a){this.a=a},
hF:function hF(a){this.a=a},
hG:function hG(a,b){this.a=a
this.b=b},
bU:function bU(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.ch=_.Q=_.z=_.y=_.x=null},
iG:function iG(a,b){this.a=a
this.b=b},
iH:function iH(){},
iJ:function iJ(a,b){this.a=a
this.b=b},
iI:function iI(a){this.a=a},
hD:function hD(a,b,c){this.a=a
this.b=b
this.c=c},
iS:function iS(){},
iR:function iR(a){this.a=a},
iT:function iT(){},
iU:function iU(){},
iw:function iw(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.x=h
_.y=null},
i4:function i4(a,b,c,d,e,f,g,h){var _=this
_.cx=a
_.a=b
_.b=c
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.ch=_.Q=_.z=_.y=_.x=null},
nK:function(a){var u,t
u=J.R(a)
if(!!u.$ib3){t=u.gex(a)
if(t.constructor===Array)if(typeof CanvasPixelArray!=="undefined"){t.constructor=CanvasPixelArray
t.BYTES_PER_ELEMENT=1}return a}return new P.es(a.data,a.height,a.width)},
nJ:function(a){if(a instanceof P.es)return{data:a.a,height:a.b,width:a.c}
return a},
nI:function(a,b){var u={}
a.a1(0,new P.iY(u))
return u},
ix:function ix(){},
iz:function iz(a,b){this.a=a
this.b=b},
es:function es(a,b,c){this.a=a
this.b=b
this.c=c},
iY:function iY(a){this.a=a},
iy:function iy(a,b){this.a=a
this.b=b},
f3:function f3(a,b){this.a=a
this.b=b},
f4:function f4(){},
f5:function f5(){},
ik:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
nd:function(a){a=536870911&a+((67108863&a)<<3)
a^=a>>>11
return 536870911&a+((16383&a)<<15)},
im:function im(){},
aB:function aB(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=e},
cq:function cq(){},
o:function o(){},
N:function N(){},
d5:function d5(){},
dg:function dg(){},
dI:function dI(){},
bR:function bR(){},
dM:function dM(){},
dV:function dV(){},
e2:function e2(){}},W={
km:function(a){var u=document.createElement("a")
return u},
jH:function(a,b){var u=document.createElement("canvas")
return u},
mk:function(a,b,c){var u,t
u=document.body
t=(u&&C.p).an(u,a,b,c)
t.toString
u=W.C
u=new H.cJ(new W.am(t),H.k(new W.eX(),{func:1,ret:P.M,args:[u]}),[u])
return H.d(u.gaS(u),"$iP")},
ml:function(a){H.d(a,"$ibF")
return"wheel"},
cc:function(a){var u,t,s
u="element tag unavailable"
try{t=J.m7(a)
if(typeof t==="string")u=a.tagName}catch(s){H.ad(s)}return u},
mn:function(a){var u,t,s
t=document.createElement("input")
u=H.d(t,"$ich")
try{u.type=a}catch(s){H.ad(s)}return u},
ij:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
l7:function(a,b,c,d){var u,t
u=W.ij(W.ij(W.ij(W.ij(0,a),b),c),d)
t=536870911&u+((67108863&u)<<3)
t^=t>>>11
return 536870911&t+((16383&t)<<15)},
a4:function(a,b,c,d,e){var u,t
u=W.lm(new W.i8(c),W.n)
t=u!=null
if(t&&!0){H.k(u,{func:1,args:[W.n]})
if(t)J.m2(a,b,u,!1)}return new W.i7(a,b,u,!1,[e])},
l6:function(a){var u,t
u=W.km(null)
t=window.location
u=new W.bv(new W.is(u,t))
u.fY(a)
return u},
nb:function(a,b,c,d){H.d(a,"$iP")
H.F(b)
H.F(c)
H.d(d,"$ibv")
return!0},
nc:function(a,b,c,d){var u,t,s
H.d(a,"$iP")
H.F(b)
H.F(c)
u=H.d(d,"$ibv").a
t=u.a
t.href=c
s=t.hostname
u=u.b
if(!(s==u.hostname&&t.port==u.port&&t.protocol==u.protocol))if(s==="")if(t.port===""){u=t.protocol
u=u===":"||u===""}else u=!1
else u=!1
else u=!0
return u},
l8:function(){var u,t,s,r,q
u=P.f
t=P.kA(C.A,u)
s=H.r(C.A,0)
r=H.k(new W.iC(),{func:1,ret:u,args:[s]})
q=H.b(["TEMPLATE"],[u])
t=new W.iB(t,P.ds(null,null,null,u),P.ds(null,null,null,u),P.ds(null,null,null,u),null)
t.h7(null,new H.fx(C.A,r,[s,u]),q,null)
return t},
lm:function(a,b){var u
H.k(a,{func:1,ret:-1,args:[b]})
u=$.Y
if(u===C.l)return a
return u.eq(a,b)},
x:function x(){},
d2:function d2(){},
eE:function eE(){},
c5:function c5(){},
bg:function bg(){},
bA:function bA(){},
bB:function bB(){},
bh:function bh(){},
ca:function ca(){},
eQ:function eQ(){},
aA:function aA(){},
cb:function cb(){},
eT:function eT(){},
dc:function dc(){},
dd:function dd(){},
i3:function i3(a,b){this.a=a
this.b=b},
P:function P(){},
eX:function eX(){},
n:function n(){},
bF:function bF(){},
f6:function f6(){},
dh:function dh(){},
di:function di(){},
bH:function bH(){},
dj:function dj(){},
b3:function b3(){},
cg:function cg(){},
ch:function ch(){},
aR:function aR(){},
dq:function dq(){},
dt:function dt(){},
ck:function ck(){},
ab:function ab(){},
am:function am(a){this.a=a},
C:function C(){},
cn:function cn(){},
dJ:function dJ(){},
fZ:function fZ(){},
aV:function aV(){},
dT:function dT(){},
dU:function dU(){},
he:function he(){},
cv:function cv(){},
aK:function aK(){},
aL:function aL(){},
hm:function hm(){},
bt:function bt(){},
hX:function hX(){},
aZ:function aZ(){},
cK:function cK(){},
cL:function cL(){},
ee:function ee(){},
ek:function ek(){},
i2:function i2(){},
i5:function i5(a){this.a=a},
i6:function i6(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
jW:function jW(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
i7:function i7(a,b,c,d,e){var _=this
_.a=0
_.b=a
_.c=b
_.d=c
_.e=d
_.$ti=e},
i8:function i8(a){this.a=a},
bv:function bv(a){this.a=a},
av:function av(){},
dE:function dE(a){this.a=a},
fJ:function fJ(a){this.a=a},
fI:function fI(a,b,c){this.a=a
this.b=b
this.c=c},
en:function en(){},
iu:function iu(){},
iv:function iv(){},
iB:function iB(a,b,c,d,e){var _=this
_.e=a
_.a=b
_.b=c
_.c=d
_.d=e},
iC:function iC(){},
iA:function iA(){},
df:function df(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=null
_.$ti=d},
ay:function ay(){},
is:function is(a,b){this.a=a
this.b=b},
ev:function ev(a){this.a=a},
iN:function iN(a){this.a=a},
ed:function ed(){},
eg:function eg(){},
eh:function eh(){},
el:function el(){},
em:function em(){},
eq:function eq(){},
er:function er(){},
ew:function ew(){},
ex:function ex(){}},O={
jI:function(a){var u=new O.a_([a])
u.bv(a)
return u},
a_:function a_(a){var _=this
_.d=_.c=_.b=_.a=null
_.$ti=a},
cj:function cj(){this.b=this.a=null},
dw:function dw(){var _=this
_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
fy:function fy(a,b){var _=this
_.f=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
dy:function dy(){},
fz:function fz(a,b){var _=this
_.a=a
_.b=b
_.e=_.d=_.c=null},
aS:function aS(a,b){var _=this
_.f=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
fB:function fB(a,b){var _=this
_.f=_.ch=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
fC:function fC(a,b){var _=this
_.f=_.ch=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
dO:function dO(){var _=this
_.e=_.d=_.c=_.b=_.a=null},
bs:function bs(){}},E={
kw:function(a,b,c,d,e,f){var u=new E.ak()
u.a=d
u.b=!0
u.sfX(0,O.jI(E.ak))
u.y.b5(u.gkK(),u.gkN())
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
u.sac(0,e)
return u},
mR:function(a,b){var u=new E.fU(a,b)
u.fT(a,b)
return u},
mX:function(a,b,c,d,e){var u,t,s,r
u=J.R(a)
if(!!u.$ibA)return E.kR(a,!0,!0,!0,!1)
t=W.jH(null,null)
s=t.style
s.width="100%"
s.height="100%"
u.gcT(a).h(0,t)
r=E.kR(t,!0,!0,!0,!1)
r.a=a
return r},
kR:function(a,b,c,d,e){var u,t,s,r,q,p,o,n,m,l,k,j
u=new E.dZ()
t=P.mv(["alpha",!0,"depth",!0,"stencil",!1,"antialias",!0,"premultipliedAlpha",!0,"preserveDrawingBuffer",!1],P.f,null)
s=C.q.c6(a,"webgl",t)
s=H.d(s==null?C.q.c6(a,"experimental-webgl",t):s,"$ibR")
if(s==null)H.q(P.v("Failed to get the rendering context for WebGL."))
u.b=a
u.a=a
u.c=s
u.e=E.mR(s,a)
r=new T.hg(s)
r.b=H.a6((s&&C.b).dw(s,3379))
r.c=H.a6(C.b.dw(s,34076))
r.d=0
r.e=0
u.f=r
r=new X.e5(a)
q=new X.fk()
q.c=new X.ax(!1,!1,!1)
q.siK(P.ds(null,null,null,P.m))
r.b=q
q=new X.fD(r)
q.f=0
q.r=V.b8()
q.x=V.b8()
q.Q=1
q.ch=1
r.c=q
q=new X.fr(r)
q.r=0
q.x=V.b8()
q.Q=1
q.ch=1
q.cx=1
q.cy=1
r.d=q
q=new X.hl(r)
q.e=0
q.f=V.b8()
q.r=V.b8()
r.e=q
r.f=!1
r.r=!1
r.x=!1
r.y=null
r.shu(H.b([],[[P.ct,P.L]]))
q=r.z
p=document
o=W.ab
n={func:1,ret:-1,args:[o]};(q&&C.a).h(q,W.a4(p,"contextmenu",H.k(r.gi2(),n),!1,o))
q=r.z
m=W.n
l={func:1,ret:-1,args:[m]};(q&&C.a).h(q,W.a4(a,"focus",H.k(r.gi8(),l),!1,m))
q=r.z;(q&&C.a).h(q,W.a4(a,"blur",H.k(r.ghX(),l),!1,m))
q=r.z
k=W.aR
j={func:1,ret:-1,args:[k]};(q&&C.a).h(q,W.a4(p,"keyup",H.k(r.gic(),j),!1,k))
q=r.z;(q&&C.a).h(q,W.a4(p,"keydown",H.k(r.gia(),j),!1,k))
k=r.z;(k&&C.a).h(k,W.a4(a,"mousedown",H.k(r.gii(),n),!1,o))
k=r.z;(k&&C.a).h(k,W.a4(a,"mouseup",H.k(r.gim(),n),!1,o))
k=r.z;(k&&C.a).h(k,W.a4(a,"mousemove",H.k(r.gik(),n),!1,o))
k=r.z
j=W.aZ;(k&&C.a).h(k,W.a4(a,H.F(W.ml(a)),H.k(r.gip(),{func:1,ret:-1,args:[j]}),!1,j))
j=r.z;(j&&C.a).h(j,W.a4(p,"mousemove",H.k(r.gi4(),n),!1,o))
j=r.z;(j&&C.a).h(j,W.a4(p,"mouseup",H.k(r.gi6(),n),!1,o))
o=r.z;(o&&C.a).h(o,W.a4(p,"pointerlockchange",H.k(r.gir(),l),!1,m))
m=r.z
l=W.aL
p={func:1,ret:-1,args:[l]};(m&&C.a).h(m,W.a4(a,"touchstart",H.k(r.giH(),p),!1,l))
m=r.z;(m&&C.a).h(m,W.a4(a,"touchend",H.k(r.giD(),p),!1,l))
m=r.z;(m&&C.a).h(m,W.a4(a,"touchmove",H.k(r.giF(),p),!1,l))
u.r=r
u.Q=!0
u.ch=!1
u.cx=new P.aj(Date.now(),!1)
u.cy=0
u.ec()
return u},
eI:function eI(){},
ak:function ak(){var _=this
_.fx=_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
fU:function fU(a,b){var _=this
_.a=a
_.b=b
_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=null},
fV:function fV(a){this.a=a},
fW:function fW(a){this.a=a},
fX:function fX(a){this.a=a},
dZ:function dZ(){var _=this
_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
hi:function hi(a){this.a=a}},Z={
jV:function(a,b,c){var u
H.h(c,"$ia",[P.m],"$aa")
u=a.createBuffer()
C.b.aA(a,b,u)
C.b.es(a,b,new Int16Array(H.bV(c)),35044)
C.b.aA(a,b,null)
return new Z.ea(b,u)},
aC:function(a){return new Z.aY(a)},
ea:function ea(a,b){this.a=a
this.b=b},
d6:function d6(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
eb:function eb(a){this.a=a},
c8:function c8(a,b,c){var _=this
_.a=a
_.b=null
_.c=b
_.d=c},
bn:function bn(a,b,c){this.a=a
this.b=b
this.c=c},
aY:function aY(a){this.a=a}},D={
J:function(){var u=new D.bE()
u.sal(null)
u.sb9(null)
u.c=null
u.d=0
return u},
eL:function eL(){},
bE:function bE(){var _=this
_.d=_.c=_.b=_.a=null},
f0:function f0(a){this.a=a},
f1:function f1(a){this.a=a},
y:function y(a){this.a=a
this.b=null},
bo:function bo(a,b,c,d){var _=this
_.c=a
_.d=b
_.a=c
_.b=null
_.$ti=d},
bp:function bp(a,b,c,d){var _=this
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
bk:function bk(){var _=this
_.d=_.c=_.b=_.a=null},
a2:function a2(){},
dr:function dr(){var _=this
_.d=_.c=_.b=_.a=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=null},
dH:function dH(){},
dQ:function dQ(){},
dW:function dW(){},
dX:function dX(){},
dY:function dY(){},
lz:function(){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5
u=V.mT("Test 014",!0)
t=W.jH(null,null)
t.className="pageLargeCanvas"
t.id="testCanvas"
C.k.G(u.a,t)
s=[P.f]
u.el(H.b(["Test of Material Lighting shader with different reflections and refractions. No alpha is being used. The background cube maps is being painted onto the object."],s))
u.jK(H.b(["controls","shapes"],s))
u.el(H.b(["\xab[Back to Tests|../]"],s))
r=C.z.dv(document,"testCanvas")
if(r==null)H.q(P.v("Failed to find an element with the identifier, testCanvas."))
q=E.mX(r,!0,!0,!0,!1)
p=X.jL(!0,!0,!1,null,2000,null,0)
p.sev(0,!1)
o=E.kw(null,!0,null,"",null,null)
o.sac(0,F.lF(30,1,15,0.5))
s=q.f
n=s.a
m=n.createTexture()
C.b.aK(n,34067,m)
C.b.c0(n,34067,10242,10497)
C.b.c0(n,34067,10243,10497)
C.b.c0(n,34067,10241,9729)
C.b.c0(n,34067,10240,9729)
C.b.aK(n,34067,null)
l=new T.cx()
l.a=0
l.b=m
l.c=!1
l.d=0
s.aW(l,m,"../resources/maskonaive/posx.jpg",34069,!1,!1)
s.aW(l,m,"../resources/maskonaive/negx.jpg",34070,!1,!1)
s.aW(l,m,"../resources/maskonaive/posy.jpg",34071,!1,!1)
s.aW(l,m,"../resources/maskonaive/negy.jpg",34072,!1,!1)
s.aW(l,m,"../resources/maskonaive/posz.jpg",34073,!1,!1)
s.aW(l,m,"../resources/maskonaive/negz.jpg",34074,!1,!1)
k=new O.dw()
k.shi(O.jI(V.aq))
k.e.b5(k.ghT(),k.ghV())
s=new O.aS(k,"emission")
s.c=C.d
s.f=new V.t(0,0,0)
k.f=s
s=new O.aS(k,"ambient")
s.c=C.d
s.f=new V.t(0,0,0)
k.r=s
s=new O.aS(k,"diffuse")
s.c=C.d
s.f=new V.t(0,0,0)
k.x=s
s=new O.aS(k,"invDiffuse")
s.c=C.d
s.f=new V.t(0,0,0)
k.y=s
s=new O.fC(k,"specular")
s.c=C.d
s.f=new V.t(0,0,0)
s.ch=100
k.z=s
s=new O.fz(k,"bump")
s.c=C.d
k.Q=s
k.ch=null
s=new O.aS(k,"reflect")
s.c=C.d
s.f=new V.t(0,0,0)
k.cx=s
s=new O.fB(k,"refract")
s.c=C.d
s.f=new V.t(0,0,0)
s.ch=1
k.cy=s
s=new O.fy(k,"alpha")
s.c=C.d
s.f=1
k.db=s
s=new D.dr()
s.bv(D.a2)
s.shr(H.b([],[D.bk]))
s.siJ(H.b([],[D.dH]))
s.sj6(H.b([],[D.dQ]))
s.sjj(H.b([],[D.dW]))
s.sjk(H.b([],[D.dX]))
s.sjl(H.b([],[D.dY]))
s.Q=null
s.ch=null
s.dA(s.ghR(),s.git(),s.gix())
k.dx=s
n=s.Q
if(n==null){n=D.J()
s.Q=n
s=n}else s=n
s.h(0,k.giV())
s=k.dx
n=s.ch
if(n==null){n=D.J()
s.ch=n
s=n}else s=n
n=k.gcu()
s.h(0,n)
k.dy=null
s=k.dx
j=V.l3()
i=U.ks(V.kB(V.kI(),j,new V.D(-1,-1,-1)))
h=new V.t(1,1,1)
g=new D.bk()
g.c=new V.t(1,1,1)
g.a=V.l4()
f=g.b
g.b=i
i.gu().h(0,g.gh_())
i=new D.H("mover",f,g.b,g,[U.ac])
i.b=!0
g.aF(i)
if(!g.c.D(0,h)){f=g.c
g.c=h
i=new D.H("color",f,h,g,[V.t])
i.b=!0
g.aF(i)}s.h(0,g)
s=k.r
s.st(0,new V.t(0.1,0.1,0.1))
s=k.x
s.st(0,new V.t(0.1,0.1,0.1))
s=k.z
s.st(0,new V.t(1,1,1))
s=k.z
if(s.c===C.d){s.c=C.j
s.bt()
s.bA(100)
i=s.a
i.a=null
i.a0(null)}s.bA(10)
s=k.ch
if(s!==l){if(s!=null)s.gu().N(0,n)
f=k.ch
k.ch=l
l.gu().h(0,n)
s=new D.H("environment",f,k.ch,k,[T.cx])
s.b=!0
k.a0(s)}k.cy.saM(0.6)
s=k.cy
s.st(0,new V.t(0.2,0.3,1))
s=k.cx
s.st(0,new V.t(0.6,0.6,0.6))
e=new U.cf()
e.bv(U.ac)
e.b5(e.ghP(),e.giv())
e.e=null
e.f=V.bL()
e.r=0
s=q.r
n=new U.e7()
i=U.jJ()
i.sdu(0,!0)
i.sdc(6.283185307179586)
i.sde(0)
i.sa6(0,0)
i.sdd(100)
i.sX(0)
i.scW(0.5)
n.b=i
g=n.gaU()
i.gu().h(0,g)
i=U.jJ()
i.sdu(0,!0)
i.sdc(6.283185307179586)
i.sde(0)
i.sa6(0,0)
i.sdd(100)
i.sX(0)
i.scW(0.5)
n.c=i
i.gu().h(0,g)
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
d=new X.ax(!1,!1,!1)
f=n.d
n.d=d
i=[X.ax]
g=new D.H("modifiers",f,d,n,i)
g.b=!0
n.T(g)
g=n.f
if(g!==!1){n.f=!1
g=new D.H("invertX",g,!1,n,[P.M])
g.b=!0
n.T(g)}g=n.r
if(g!==!1){n.r=!1
g=new D.H("invertY",g,!1,n,[P.M])
g.b=!0
n.T(g)}n.bc(s)
e.h(0,n)
s=q.r
n=new U.e6()
g=U.jJ()
g.sdu(0,!0)
g.sdc(6.283185307179586)
g.sde(0)
g.sa6(0,0)
g.sdd(100)
g.sX(0)
g.scW(0.2)
n.b=g
g.gu().h(0,n.gaU())
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
d=new X.ax(!0,!1,!1)
f=n.c
n.c=d
g=new D.H("modifiers",f,d,n,i)
g.b=!0
n.T(g)
n.bc(s)
e.h(0,n)
s=q.r
n=new U.e8()
n.c=0.01
n.d=0
n.e=0
d=new X.ax(!1,!1,!1)
n.b=d
i=new D.H("modifiers",null,d,n,i)
i.b=!0
n.T(i)
n.bc(s)
e.h(0,n)
e.h(0,U.ks(V.aT(1,0,0,0,0,1,0,0,0,0,1,5,0,0,0,1)))
c=X.kF(2000,1.0471975511965976,e,0.1,null)
b=new M.da()
b.sbd(null)
b.sbm(0,null)
b.sbn(null)
s=E.kw(null,!0,null,"",null,null)
a=F.h0()
n=a.a
i=new V.D(-1,-1,1)
i=i.w(0,Math.sqrt(i.H(i)))
a0=n.bC(new V.as(1,2,4,6),new V.ai(1,0,0,1),new V.S(-1,-1,0),new V.a0(0,1),i,null)
n=a.a
i=new V.D(1,-1,1)
i=i.w(0,Math.sqrt(i.H(i)))
a1=n.bC(new V.as(0,3,4,6),new V.ai(0,0,1,1),new V.S(1,-1,0),new V.a0(1,1),i,null)
n=a.a
i=new V.D(1,1,1)
i=i.w(0,Math.sqrt(i.H(i)))
a2=n.bC(new V.as(0,2,5,6),new V.ai(0,1,0,1),new V.S(1,1,0),new V.a0(1,0),i,null)
n=a.a
i=V.b8()
g=new V.D(-1,1,1)
g=g.w(0,Math.sqrt(g.H(g)))
a3=n.bC(new V.as(0,2,4,7),new V.ai(1,1,0,1),new V.S(-1,1,0),i,g,null)
a.d.ej(H.b([a0,a1,a2,a3],[F.a8]))
a.as()
s.sac(0,a)
b.d=s
b.e=null
s=new O.dO()
s.b=1.0471975511965976
s.d=new V.t(1,1,1)
f=s.c
s.c=l
l.gu().h(0,s.gcu())
n=new D.H("boxTexture",f,s.c,s,[T.cx])
n.b=!0
s.a0(n)
b.sbn(s)
b.sbm(0,p)
b.sbd(c)
a4=new M.de()
a4.shl(0,O.jI(E.ak))
a4.d.b5(a4.ghZ(),a4.gi0())
a4.e=null
a4.f=null
a4.r=null
a4.x=null
a5=X.jL(!0,!0,!1,null,2000,null,0)
a4.sbd(null)
a4.sbm(0,a5)
a4.sbn(null)
a4.sbd(c)
a4.sbn(k)
a4.sbm(0,p)
a4.d.h(0,o)
a4.b.sev(0,!1)
s=M.az
n=H.b([b,a4],[s])
i=new M.d8()
i.bv(s)
i.e=!1
i.f=null
i.b5(i.giz(),i.giB())
i.af(0,n)
s=q.d
if(s!==i){if(s!=null)s.gu().N(0,q.gdI())
q.d=i
i.gu().h(0,q.gdI())
q.dJ()}s=V.kL("controls",!0)
s.cJ(0,"Silver",new D.jd(k),!0)
s.a8(0,"Gold",new D.je(k))
s.a8(0,"Glass",new D.jf(k))
s.a8(0,"Blue Glass",new D.jo(k))
s.a8(0,"Water Bubble",new D.jp(k))
s.a8(0,"No Reflection",new D.jq(k))
s.a8(0,"Pink Distort",new D.jr(k))
s.a8(0,"Cloak",new D.js(k))
s.a8(0,"White and Shiny",new D.jt(k))
s=V.kL("shapes",!0)
s.a8(0,"Cube",new D.ju(o))
s.a8(0,"Cuboid",new D.jv(o))
s.a8(0,"Cylinder",new D.jg(o))
s.a8(0,"Cone",new D.jh(o))
s.a8(0,"Cylindrical",new D.ji(o))
s.a8(0,"Sphere",new D.jj(o))
s.a8(0,"Spherical",new D.jk(o))
s.cJ(0,"Toroid",new D.jl(o),!0)
s.a8(0,"Knot",new D.jm(o))
s=q.z
if(s==null){s=D.J()
q.z=s}n={func:1,ret:-1,args:[D.y]}
i=H.k(new D.jn(u,k),n)
if(s.b==null)s.sb9(H.b([],[n]))
s=s.b;(s&&C.a).h(s,i)
V.o7(q)},
jd:function jd(a){this.a=a},
je:function je(a){this.a=a},
jf:function jf(a){this.a=a},
jo:function jo(a){this.a=a},
jp:function jp(a){this.a=a},
jq:function jq(a){this.a=a},
jr:function jr(a){this.a=a},
js:function js(a){this.a=a},
jt:function jt(a){this.a=a},
ju:function ju(a){this.a=a},
jv:function jv(a){this.a=a},
jc:function jc(){},
jg:function jg(a){this.a=a},
jh:function jh(a){this.a=a},
ji:function ji(a){this.a=a},
jb:function jb(){},
jj:function jj(a){this.a=a},
jk:function jk(a){this.a=a},
ja:function ja(){},
jl:function jl(a){this.a=a},
jm:function jm(a){this.a=a},
jn:function jn(a,b){this.a=a
this.b=b}},X={d7:function d7(a,b){this.a=a
this.b=b},dp:function dp(a,b){this.a=a
this.b=b},fk:function fk(){var _=this
_.d=_.c=_.b=_.a=null},du:function du(a,b,c,d,e,f){var _=this
_.x=a
_.y=b
_.c=c
_.d=d
_.e=e
_.a=f
_.b=null},fr:function fr(a){var _=this
_.a=a
_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},ax:function ax(a,b,c){this.a=a
this.b=b
this.c=c},b7:function b7(a,b,c,d,e,f,g,h,i){var _=this
_.x=a
_.y=b
_.z=c
_.Q=d
_.ch=e
_.c=f
_.d=g
_.e=h
_.a=i
_.b=null},fD:function fD(a){var _=this
_.a=a
_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},cl:function cl(a,b,c,d,e){var _=this
_.x=a
_.c=b
_.d=c
_.e=d
_.a=e
_.b=null},fP:function fP(){},e0:function e0(a,b,c,d,e,f,g,h,i){var _=this
_.x=a
_.y=b
_.z=c
_.Q=d
_.ch=e
_.c=f
_.d=g
_.e=h
_.a=i
_.b=null},hl:function hl(a){var _=this
_.a=a
_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},e5:function e5(a){var _=this
_.a=a
_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},
jL:function(a,b,c,d,e,f,g){var u,t
u=new X.f8()
t=new V.ai(0,0,0,1)
u.a=t
u.b=!0
u.c=e
u.d=!0
u.e=g
u.f=!1
t=$.kN
if(t==null){t=V.kM(0,0,1,1)
$.kN=t}u.r=t
return u},
kF:function(a,b,c,d,e){var u,t,s
u=new X.dG()
u.c=1.0471975511965976
u.d=0.1
u.e=2000
if(null!=c){t=u.b
u.b=c
if(c!=null)c.gu().h(0,u.gha())
s=new D.H("mover",t,u.b,u,[U.ac])
s.b=!0
u.ax(s)}s=u.c
if(!(Math.abs(s-b)<$.O().a)){u.c=b
s=new D.H("fov",s,b,u,[P.p])
s.b=!0
u.ax(s)}s=u.d
if(!(Math.abs(s-d)<$.O().a)){u.d=d
s=new D.H("near",s,d,u,[P.p])
s.b=!0
u.ax(s)}s=u.e
if(!(Math.abs(s-a)<$.O().a)){u.e=a
s=new D.H("far",s,a,u,[P.p])
s.b=!0
u.ax(s)}return u},
bz:function bz(){},
f8:function f8(){var _=this
_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
fd:function fd(){this.b=this.a=null},
dG:function dG(){var _=this
_.f=_.e=_.d=_.c=_.b=_.a=null},
cu:function cu(){}},V={
oa:function(a,b,c){var u
if(c<=b)return b
u=c-b
a=C.e.br(a-b,u)
return(a<0?a+u:a)+b},
T:function(a,b,c){if(a==null)return C.c.ap("null",c)
return C.c.ap(C.e.fk(Math.abs(a-0)<$.O().a?0:a,b),c+b+1)},
c_:function(a,b,c){var u,t,s,r,q,p
H.h(a,"$ia",[P.p],"$aa")
u=H.b([],[P.f])
for(t=a.length,s=0,r=0;r<a.length;a.length===t||(0,H.A)(a),++r){q=V.T(a[r],b,c)
s=Math.max(s,q.length)
C.a.h(u,q)}for(p=u.length-1;p>=0;--p){if(p>=u.length)return H.e(u,p)
C.a.q(u,p,C.c.ap(u[p],s))}return u},
kb:function(a,b){return C.e.ld(Math.pow(b,C.a_.d4(Math.log(H.nH(a))/Math.log(b))))},
bL:function(){var u=$.kC
if(u==null){u=V.aT(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1)
$.kC=u}return u},
aT:function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){return new V.aq(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p)},
kB:function(a,b,c){var u,t,s,r,q,p,o,n
u=c.w(0,Math.sqrt(c.H(c)))
t=b.aL(u)
s=t.w(0,Math.sqrt(t.H(t)))
r=u.aL(s)
q=new V.D(a.a,a.b,a.c)
p=s.W(0).H(q)
o=r.W(0).H(q)
n=u.W(0).H(q)
return V.aT(s.a,r.a,u.a,p,s.b,r.b,u.b,o,s.c,r.c,u.c,n,0,0,0,1)},
b8:function(){var u=$.kH
if(u==null){u=new V.a0(0,0)
$.kH=u}return u},
kI:function(){var u=$.co
if(u==null){u=new V.S(0,0,0)
$.co=u}return u},
kM:function(a,b,c,d){if(c<0){a+=c
c=-c}if(d<0){b+=d
d=-d}return new V.dL(a,b,c,d)},
cI:function(){var u=$.l2
if(u==null){u=new V.D(0,0,0)
$.l2=u}return u},
l3:function(){var u=$.l1
if(u==null){u=new V.D(0,1,0)
$.l1=u}return u},
l4:function(){var u=$.hL
if(u==null){u=new V.D(0,0,1)
$.hL=u}return u},
t:function t(a,b,c){this.a=a
this.b=b
this.c=c},
ai:function ai(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
eZ:function eZ(a){this.a=a},
dz:function dz(a,b,c,d,e,f,g,h,i){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.x=h
_.y=i},
aq:function aq(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){var _=this
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
a0:function a0(a,b){this.a=a
this.b=b},
S:function S(a,b,c){this.a=a
this.b=b
this.c=c},
as:function as(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
dL:function dL(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
Q:function Q(a,b){this.a=a
this.b=b},
D:function D(a,b,c){this.a=a
this.b=b
this.c=c},
W:function(a,b){var u,t,s,r
if(a.length!==1||b.length!==1)throw H.c(P.v("The given low and high character strings for a RangeMatcher must have one and only one characters."))
u=C.c.K(a,0)
t=C.c.K(b,0)
s=new V.fS()
if(u>t){r=t
t=u
u=r}s.a=u
s.b=t
return s},
w:function(a){var u=new V.h_()
u.fU(a)
return u},
hk:function(){var u,t
u=new V.hj()
t=P.f
u.sj7(new H.aJ([t,V.cs]))
u.sjb(new H.aJ([t,V.cy]))
u.c=null
return u},
b0:function b0(){},
aw:function aw(){},
dv:function dv(){},
ar:function ar(){this.a=null},
fS:function fS(){this.b=this.a=null},
h_:function h_(){this.a=null},
cs:function cs(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
e_:function e_(a,b,c){this.a=a
this.b=b
this.c=c},
cy:function cy(a,b){this.a=a
this.b=b
this.c=null},
hj:function hj(){this.c=this.b=this.a=null},
cz:function cz(a){this.b=a
this.a=this.c=null},
o7:function(a){P.mY(C.V,new V.jy(a))},
kL:function(a,b){var u,t
u=new V.fQ(a,!0)
t=C.z.dv(document,a)
u.c=t
if(t==null)H.q("Failed to find "+a+" for RadioGroup")
return u},
mT:function(a,b){var u=new V.h4()
u.fV(a,!0)
return u},
bi:function bi(){},
jy:function jy(a){this.a=a},
eS:function eS(a){var _=this
_.a=a
_.d=_.c=_.b=null},
f9:function f9(a){var _=this
_.a=a
_.d=_.c=_.b=null},
fa:function fa(a){var _=this
_.a=a
_.d=_.c=_.b=null},
fO:function fO(a){var _=this
_.a=a
_.d=_.c=_.b=null},
fQ:function fQ(a,b){this.a=a
this.b=b
this.c=null},
fR:function fR(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
h4:function h4(){this.b=this.a=null},
h6:function h6(a){this.a=a},
h5:function h5(a){this.a=a},
h7:function h7(a){this.a=a}},U={
jJ:function(){var u=new U.eM()
u.a=!0
u.b=1e12
u.c=-1e12
u.d=0
u.e=100
u.f=0
u.x=0
u.r=0
return u},
ks:function(a){var u=new U.d9()
u.a=a
return u},
eM:function eM(){var _=this
_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
d9:function d9(){this.b=this.a=null},
cf:function cf(){var _=this
_.d=_.c=_.b=_.a=_.r=_.f=_.e=null},
ac:function ac(){},
e6:function e6(){var _=this
_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
e7:function e7(){var _=this
_.fx=_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
e8:function e8(){var _=this
_.r=_.f=_.e=_.d=_.c=_.b=_.a=null}},M={d8:function d8(){var _=this
_.d=_.c=_.b=_.a=_.f=_.e=null},da:function da(){var _=this
_.f=_.e=_.d=_.c=_.b=_.a=null},de:function de(){var _=this
_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},az:function az(){}},A={
mA:function(a,b){var u,t
u=a.at
t=new A.dx(b,u)
t.dG(b,u)
t.fS(a,b)
return t},
jS:function(a,b,c,d,e){var u=new A.hr(a,b,c,e)
u.f=d
u.sjm(P.mx(d,0,!1,P.m))
return u},
d4:function d4(a,b,c){this.a=a
this.b=b
this.c=c},
eF:function eF(a){this.a=a},
dx:function dx(a,b){var _=this
_.bG=_.eC=_.bF=_.at=_.aB=_.y2=_.y1=_.x2=_.x1=_.ry=_.rx=_.r2=_.r1=_.k4=_.k3=_.k2=_.k1=_.id=_.go=_.fy=_.fx=_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=null
_.eS=_.cZ=_.eR=_.bT=_.eQ=_.eP=_.bS=_.bR=_.eO=_.eN=_.bQ=_.bP=_.bO=_.eM=_.eL=_.bN=_.eK=_.eJ=_.bM=_.eI=_.eH=_.bL=_.bK=_.eG=_.eF=_.bJ=_.bI=_.eE=_.eD=_.bH=null
_.d3=_.eW=_.d2=_.eV=_.d1=_.eU=_.d0=_.eT=_.d_=null
_.a=a
_.b=b
_.y=_.x=_.r=_.f=_.e=_.d=_.c=null},
fA:function fA(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5){var _=this
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
_.bF=b5},
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
cr:function cr(){},
bD:function bD(a,b){this.a=a
this.b=b},
dP:function dP(a,b){var _=this
_.db=_.cy=_.cx=_.ch=_.Q=_.z=null
_.a=a
_.b=b
_.y=_.x=_.r=_.f=_.e=_.d=_.c=null},
e1:function e1(){},
hx:function hx(a){this.a=a},
K:function K(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
ht:function ht(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
hu:function hu(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
hw:function hw(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
hr:function hr(a,b,c,d){var _=this
_.f=_.e=null
_.a=a
_.b=b
_.c=c
_.d=d},
X:function X(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
hs:function hs(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
G:function G(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
hv:function hv(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
hy:function hy(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
cB:function cB(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
au:function au(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
al:function al(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
af:function af(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d}},F={
k6:function(a,b,c,d){var u
H.k(c,{func:1,ret:-1,args:[F.a8,P.p,P.p]})
u=F.h0()
F.cT(u,b,c,d,a,1,0,0,1)
F.cT(u,b,c,d,a,0,1,0,3)
F.cT(u,b,c,d,a,0,0,1,2)
F.cT(u,b,c,d,a,-1,0,0,0)
F.cT(u,b,c,d,a,0,-1,0,0)
F.cT(u,b,c,d,a,0,0,-1,3)
u.as()
return u},
iQ:function(a){var u=a.a>0?1:0
if(a.b>0)u+=2
return(a.c>0?u+4:u)*2},
cT:function(a,b,c,d,a0,a1,a2,a3,a4){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e
u={}
H.k(c,{func:1,ret:-1,args:[F.a8,P.p,P.p]})
t=a1+a2
s=t+a3
r=a2+a3
q=a3+a1
p=new V.D(s,r+a1,q+a2)
u.a=p
o=a1-a2
n=a2-a3
m=a3-a1
l=new V.D(o+a3,n+a1,m+a2)
u.b=l
k=new V.D(o-a3,n-a1,m-a2)
u.c=k
j=new V.D(t-a3,r-a1,q-a2)
u.d=j
if(s>0){u.d=l
u.b=j
s=l
t=j}else{s=j
t=l}for(q=s,s=t,t=p,r=k,i=0;i<a4;++i,h=q,q=t,t=s,s=r,r=h){u.a=s
u.b=r
u.c=q
u.d=t}g=F.iQ(t)
f=F.iQ(u.b)
e=F.ke(d,a0,new F.iP(u,F.iQ(u.c),F.iQ(u.d),f,g,c),b)
if(e!=null)a.bi(e)},
lt:function(a,b,c,d,e,a0){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f
H.k(e,{func:1,ret:P.p,args:[P.p]})
if(a0<3)return
u=F.h0()
t=b?-1:1
s=-6.283185307179586/a0
r=H.b([],[F.a8])
q=u.a
p=new V.D(0,0,t)
p=p.w(0,Math.sqrt(p.H(p)))
C.a.h(r,q.jM(new V.as(a,-1,-1,-1),new V.ai(1,1,1,1),new V.S(0,0,d),new V.D(0,0,t),new V.a0(0.5,0.5),p))
for(q=t*t,o=0;o<=a0;++o){n=s*o
m=t*Math.sin(n)
l=Math.cos(n)
k=e.$1(o/a0)
p=u.a
if(typeof k!=="number")return H.B(k)
j=new V.D(m,l,t).w(0,Math.sqrt(m*m+l*l+q))
if(m<0)i=0
else i=m>1?1:m
h=l<0
if(h)g=0
else g=l>1?1:l
if(h)h=0
else h=l>1?1:l
p.toString
f=F.e9(new V.as(a,-1,-1,-1),null,new V.ai(i,g,h,1),new V.S(m*k,l*k,d),new V.D(0,0,t),new V.a0(m*0.5+0.5,l*0.5+0.5),j,null,0)
p.h(0,f)
C.a.h(r,f)}u.d.ej(r)
return u},
lq:function(a,b,c,d,e,f){return F.lr(!0,c,d,new F.iZ(a,f),e)},
lr:function(a,b,c,d,e){var u
H.k(d,{func:1,ret:P.p,args:[P.p,P.p]})
if(e<3)return
if(c<1)return
u=F.ke(c,e,new F.j0(d),null)
if(u==null)return
u.as()
u.cK()
if(b)u.bi(F.lt(3,!1,!1,1,new F.j1(d),e))
u.bi(F.lt(1,!0,!1,-1,new F.j2(d),e))
return u},
lD:function(a,b,c,d){var u,t
u={}
u.a=b
if(H.k(b,{func:1,ret:P.p,args:[P.p,P.p]})==null)u.a=new F.jz()
t=F.k6(a,null,new F.jA(u,c),d)
t.cK()
return t},
lF:function(a,b,c,d){return F.ls(c,a,d,b,new F.jB())},
o_:function(a,b,c,d,e,f){return F.ls(d,a,e,b,new F.j9(f,c))},
ls:function(a,b,c,d,e){var u=F.ke(a,b,new F.j_(H.k(e,{func:1,ret:V.S,args:[P.p]}),d,b,c),null)
if(u==null)return
u.as()
u.cK()
return u},
ke:function(a,b,c,d){var u,t,s,r,q,p,o,n,m,l,k,j,i,h
H.k(c,{func:1,ret:-1,args:[F.a8,P.p,P.p]})
if(a<1)return
if(b<1)return
u=F.h0()
t=H.b([],[F.a8])
for(s=0;s<=b;++s){r=s/b
q=u.a
if(r<0)p=0
else p=r>1?1:r
q.toString
o=F.e9(null,null,new V.ai(p,0,0,1),null,null,new V.a0(r,1),null,null,0)
q.h(0,o)
c.$3(o,r,0)
C.a.h(t,o.cV(d))}for(s=1;s<=a;++s){n=s/a
for(q=n>1,p=n<0,m=1-n,l=0;l<=b;++l){r=l/b
k=u.a
if(r<0)j=0
else j=r>1?1:r
if(p)i=0
else i=q?1:n
if(p)h=0
else h=q?1:n
k.toString
o=F.e9(null,null,new V.ai(j,i,h,1),null,null,new V.a0(r,m),null,null,0)
k.h(0,o)
c.$3(o,r,n)
C.a.h(t,o.cV(d))}}u.d.jL(a+1,b+1,t)
return u},
cd:function(a,b,c){var u,t
u=new F.a3()
t=a.a
if(t==null)H.q(P.v("May not create a face with a first vertex which is not attached to a shape."))
if(t!=b.a||t!=c.a)H.q(P.v("May not create a face with vertices attached to different shapes."))
u.cG(a)
u.cH(b)
u.j0(c)
C.a.h(u.a.a.d.b,u)
u.a.a.a9()
return u},
mt:function(a,b){var u,t
u=new F.b6()
t=a.a
if(t==null)H.q(P.v("May not create a line with a start vertex which is not attached to a shape."))
if(t!=b.a)H.q(P.v("May not create a line with vertices attached to different shapes."))
u.cG(a)
u.cH(b)
C.a.h(u.a.a.c.b,u)
u.a.a.a9()
return u},
h0:function(){var u,t
u=new F.dN()
t=new F.hM(u)
t.b=!1
t.sjn(H.b([],[F.a8]))
u.a=t
t=new F.h3(u)
t.scw(H.b([],[F.br]))
u.b=t
t=new F.h2(u)
t.shF(H.b([],[F.b6]))
u.c=t
t=new F.h1(u)
t.shv(H.b([],[F.a3]))
u.d=t
u.e=null
return u},
e9:function(a,b,c,d,e,f,g,h,i){var u,t,s
u=new F.a8()
t=new F.hU(u)
t.scw(H.b([],[F.br]))
u.b=t
t=new F.hQ(u)
s=[F.b6]
t.shG(H.b([],s))
t.shH(H.b([],s))
u.c=t
t=new F.hN(u)
s=[F.a3]
t.shw(H.b([],s))
t.shx(H.b([],s))
t.shy(H.b([],s))
u.d=t
h=$.lT()
u.e=0
t=$.aN()
s=h.a
u.f=(s&t.a)!==0?d:null
u.r=(s&$.bd().a)!==0?e:null
u.x=(s&$.bc().a)!==0?b:null
u.y=(s&$.be().a)!==0?f:null
u.z=(s&$.bf().a)!==0?g:null
u.Q=(s&$.lU().a)!==0?c:null
u.ch=(s&$.c4().a)!==0?i:0
u.cx=(s&$.bb().a)!==0?a:null
return u},
iP:function iP(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
iZ:function iZ(a,b){this.a=a
this.b=b},
j0:function j0(a){this.a=a},
j1:function j1(a){this.a=a},
j2:function j2(a){this.a=a},
jz:function jz(){},
jA:function jA(a,b){this.a=a
this.b=b},
jB:function jB(){},
j9:function j9(a,b){this.a=a
this.b=b},
j_:function j_(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
a3:function a3(){var _=this
_.e=_.d=_.c=_.b=_.a=null},
f2:function f2(){},
h8:function h8(){},
b6:function b6(){this.b=this.a=null},
fl:function fl(){},
hq:function hq(){},
br:function br(){this.a=null},
dN:function dN(){var _=this
_.e=_.d=_.c=_.b=_.a=null},
h1:function h1(a){this.a=a
this.b=null},
h2:function h2(a){this.a=a
this.b=null},
h3:function h3(a){this.a=a
this.b=null},
a8:function a8(){var _=this
_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
hW:function hW(a){this.a=a},
hV:function hV(a){this.a=a},
hM:function hM(a){this.a=a
this.c=this.b=null},
hN:function hN(a){var _=this
_.a=a
_.d=_.c=_.b=null},
hO:function hO(a,b){this.a=a
this.b=b},
hP:function hP(a,b){this.a=a
this.b=b},
hQ:function hQ(a){this.a=a
this.c=this.b=null},
hS:function hS(){},
hR:function hR(){},
hT:function hT(){},
fK:function fK(){},
hU:function hU(a){this.a=a
this.b=null}},T={cw:function cw(){},cx:function cx(){var _=this
_.e=_.d=_.c=_.b=_.a=null},hg:function hg(a){var _=this
_.a=a
_.e=_.d=_.c=_.b=null},hh:function hh(a,b,c,d,e,f,g){var _=this
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
H.jO.prototype={}
J.aa.prototype={
D:function(a,b){return a===b},
gL:function(a){return H.cp(a)},
i:function(a){return"Instance of '"+H.bO(a)+"'"}}
J.fh.prototype={
i:function(a){return String(a)},
gL:function(a){return a?519018:218159},
$iM:1}
J.dm.prototype={
D:function(a,b){return null==b},
i:function(a){return"null"},
gL:function(a){return 0},
$iE:1}
J.dn.prototype={
gL:function(a){return 0},
i:function(a){return String(a)}}
J.fN.prototype={}
J.bu.prototype={}
J.b5.prototype={
i:function(a){var u=a[$.lH()]
if(u==null)return this.fN(a)
return"JavaScript function for "+H.j(J.ao(u))},
$S:function(){return{func:1,opt:[,,,,,,,,,,,,,,,,]}},
$ibm:1}
J.aH.prototype={
h:function(a,b){H.z(b,H.r(a,0))
if(!!a.fixed$length)H.q(P.Z("add"))
a.push(b)},
l0:function(a,b){var u
if(!!a.fixed$length)H.q(P.Z("removeAt"))
u=a.length
if(b>=u)throw H.c(P.dK(b,null,null))
return a.splice(b,1)[0]},
N:function(a,b){var u
if(!!a.fixed$length)H.q(P.Z("remove"))
for(u=0;u<a.length;++u)if(J.U(a[u],b)){a.splice(u,1)
return!0}return!1},
af:function(a,b){var u,t
H.h(b,"$il",[H.r(a,0)],"$al")
if(!!a.fixed$length)H.q(P.Z("addAll"))
for(u=b.length,t=0;t<b.length;b.length===u||(0,H.A)(b),++t)a.push(b[t])},
a1:function(a,b){var u,t
H.k(b,{func:1,ret:-1,args:[H.r(a,0)]})
u=a.length
for(t=0;t<u;++t){b.$1(a[t])
if(a.length!==u)throw H.c(P.b1(a))}},
l:function(a,b){var u,t
u=new Array(a.length)
u.fixed$length=Array
for(t=0;t<a.length;++t)this.q(u,t,H.j(a[t]))
return u.join(b)},
kE:function(a){return this.l(a,"")},
kv:function(a,b,c,d){var u,t,s
H.z(b,d)
H.k(c,{func:1,ret:d,args:[d,H.r(a,0)]})
u=a.length
for(t=b,s=0;s<u;++s){t=c.$2(t,a[s])
if(a.length!==u)throw H.c(P.b1(a))}return t},
ku:function(a,b,c){var u,t,s
H.k(b,{func:1,ret:P.M,args:[H.r(a,0)]})
u=a.length
for(t=0;t<u;++t){s=a[t]
if(b.$1(s))return s
if(a.length!==u)throw H.c(P.b1(a))}throw H.c(H.ff())},
kt:function(a,b){return this.ku(a,b,null)},
ag:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
fK:function(a,b,c){if(b<0||b>a.length)throw H.c(P.a7(b,0,a.length,"start",null))
if(c<b||c>a.length)throw H.c(P.a7(c,b,a.length,"end",null))
if(b===c)return H.b([],[H.r(a,0)])
return H.b(a.slice(b,c),[H.r(a,0)])},
gks:function(a){if(a.length>0)return a[0]
throw H.c(H.ff())},
gaD:function(a){var u=a.length
if(u>0)return a[u-1]
throw H.c(H.ff())},
fI:function(a,b,c,d,e){var u,t,s
u=H.r(a,0)
H.h(d,"$il",[u],"$al")
if(!!a.immutable$list)H.q(P.Z("setRange"))
P.b9(b,c,a.length,null,null,null)
t=c-b
if(t===0)return
H.h(d,"$ia",[u],"$aa")
u=J.c0(d)
if(e+t>u.gm(d))throw H.c(H.mp())
if(e<b)for(s=t-1;s>=0;--s)a[b+s]=u.k(d,e+s)
else for(s=0;s<t;++s)a[b+s]=u.k(d,e+s)},
bs:function(a,b,c,d){return this.fI(a,b,c,d,0)},
en:function(a,b){var u,t
H.k(b,{func:1,ret:P.M,args:[H.r(a,0)]})
u=a.length
for(t=0;t<u;++t){if(b.$1(a[t]))return!0
if(a.length!==u)throw H.c(P.b1(a))}return!1},
Y:function(a,b){var u
for(u=0;u<a.length;++u)if(J.U(a[u],b))return!0
return!1},
i:function(a){return P.jM(a,"[","]")},
gV:function(a){return new J.ap(a,a.length,0,[H.r(a,0)])},
gL:function(a){return H.cp(a)},
gm:function(a){return a.length},
sm:function(a,b){if(!!a.fixed$length)H.q(P.Z("set length"))
if(b<0)throw H.c(P.a7(b,0,null,"newLength",null))
a.length=b},
k:function(a,b){if(b>=a.length||b<0)throw H.c(H.bZ(a,b))
return a[b]},
q:function(a,b,c){H.z(c,H.r(a,0))
if(!!a.immutable$list)H.q(P.Z("indexed set"))
if(b>=a.length||b<0)throw H.c(H.bZ(a,b))
a[b]=c},
n:function(a,b){var u,t
u=[H.r(a,0)]
H.h(b,"$ia",u,"$aa")
t=C.f.n(a.length,b.gm(b))
u=H.b([],u)
this.sm(u,t)
this.bs(u,0,a.length,a)
this.bs(u,a.length,t,b)
return u},
$il:1,
$ia:1}
J.jN.prototype={}
J.ap.prototype={
gM:function(){return this.d},
F:function(){var u,t,s
u=this.a
t=u.length
if(this.b!==t)throw H.c(H.A(u))
s=this.c
if(s>=t){this.sdX(null)
return!1}this.sdX(u[s]);++this.c
return!0},
sdX:function(a){this.d=H.z(a,H.r(this,0))},
$iaQ:1}
J.bq.prototype={
ld:function(a){var u
if(a>=-2147483648&&a<=2147483647)return a|0
if(isFinite(a)){u=a<0?Math.ceil(a):Math.floor(a)
return u+0}throw H.c(P.Z(""+a+".toInt()"))},
d4:function(a){var u,t
if(a>=0){if(a<=2147483647)return a|0}else if(a>=-2147483648){u=a|0
return a===u?u:u-1}t=Math.floor(a)
if(isFinite(t))return t
throw H.c(P.Z(""+a+".floor()"))},
au:function(a){if(a>0){if(a!==1/0)return Math.round(a)}else if(a>-1/0)return 0-Math.round(0-a)
throw H.c(P.Z(""+a+".round()"))},
fk:function(a,b){var u,t
if(b>20)throw H.c(P.a7(b,0,20,"fractionDigits",null))
u=a.toFixed(b)
if(a===0)t=1/a<0
else t=!1
if(t)return"-"+u
return u},
bp:function(a,b){var u,t,s,r
if(b<2||b>36)throw H.c(P.a7(b,2,36,"radix",null))
u=a.toString(b)
if(C.c.a4(u,u.length-1)!==41)return u
t=/^([\da-z]+)(?:\.([\da-z]+))?\(e\+(\d+)\)$/.exec(u)
if(t==null)H.q(P.Z("Unexpected toString result: "+u))
s=t.length
if(1>=s)return H.e(t,1)
u=t[1]
if(3>=s)return H.e(t,3)
r=+t[3]
s=t[2]
if(s!=null){u+=s
r-=s.length}return u+C.c.A("0",r)},
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
n:function(a,b){if(typeof b!=="number")throw H.c(H.an(b))
return a+b},
v:function(a,b){if(typeof b!=="number")throw H.c(H.an(b))
return a-b},
A:function(a,b){if(typeof b!=="number")throw H.c(H.an(b))
return a*b},
br:function(a,b){var u=a%b
if(u===0)return 0
if(u>0)return u
if(b<0)return u-b
else return u+b},
fR:function(a,b){if((a|0)===a)if(b>=1||b<-1)return a/b|0
return this.ee(a,b)},
ab:function(a,b){return(a|0)===a?a/b|0:this.ee(a,b)},
ee:function(a,b){var u=a/b
if(u>=-2147483648&&u<=2147483647)return u|0
if(u>0){if(u!==1/0)return Math.floor(u)}else if(u>-1/0)return Math.ceil(u)
throw H.c(P.Z("Result of truncating division is "+H.j(u)+": "+H.j(a)+" ~/ "+b))},
aZ:function(a,b){var u
if(a>0)u=this.ed(a,b)
else{u=b>31?31:b
u=a>>u>>>0}return u},
j5:function(a,b){if(b<0)throw H.c(H.an(b))
return this.ed(a,b)},
ed:function(a,b){return b>31?0:a>>>b},
$ip:1,
$iag:1}
J.dl.prototype={$im:1}
J.dk.prototype={}
J.b4.prototype={
a4:function(a,b){if(b<0)throw H.c(H.bZ(a,b))
if(b>=a.length)H.q(H.bZ(a,b))
return a.charCodeAt(b)},
K:function(a,b){if(b>=a.length)throw H.c(H.bZ(a,b))
return a.charCodeAt(b)},
n:function(a,b){if(typeof b!=="string")throw H.c(P.jF(b,null,null))
return a+b},
b2:function(a,b,c,d){var u,t
if(typeof b!=="number"||Math.floor(b)!==b)H.q(H.an(b))
c=P.b9(b,c,a.length,null,null,null)
u=a.substring(0,b)
t=a.substring(c)
return u+d+t},
ak:function(a,b,c){var u
if(typeof c!=="number"||Math.floor(c)!==c)H.q(H.an(c))
if(typeof c!=="number")return c.Z()
if(c<0||c>a.length)throw H.c(P.a7(c,0,a.length,null,null))
u=c+b.length
if(u>a.length)return!1
return b===a.substring(c,u)},
aa:function(a,b){return this.ak(a,b,0)},
B:function(a,b,c){if(typeof b!=="number"||Math.floor(b)!==b)H.q(H.an(b))
if(c==null)c=a.length
if(typeof b!=="number")return b.Z()
if(b<0)throw H.c(P.dK(b,null,null))
if(b>c)throw H.c(P.dK(b,null,null))
if(c>a.length)throw H.c(P.dK(c,null,null))
return a.substring(b,c)},
aw:function(a,b){return this.B(a,b,null)},
lg:function(a){return a.toLowerCase()},
A:function(a,b){var u,t
if(0>=b)return""
if(b===1||a.length===0)return a
if(b!==b>>>0)throw H.c(C.S)
for(u=a,t="";!0;){if((b&1)===1)t=u+t
b=b>>>1
if(b===0)break
u+=u}return t},
kQ:function(a,b,c){var u=b-a.length
if(u<=0)return a
return this.A(c,u)+a},
ap:function(a,b){return this.kQ(a,b," ")},
f4:function(a,b,c){var u
if(c<0||c>a.length)throw H.c(P.a7(c,0,a.length,null,null))
u=a.indexOf(b,c)
return u},
f3:function(a,b){return this.f4(a,b,0)},
i:function(a){return a},
gL:function(a){var u,t,s
for(u=a.length,t=0,s=0;s<u;++s){t=536870911&t+a.charCodeAt(s)
t=536870911&t+((524287&t)<<10)
t^=t>>6}t=536870911&t+((67108863&t)<<3)
t^=t>>11
return 536870911&t+((16383&t)<<15)},
gm:function(a){return a.length},
$ikE:1,
$if:1}
H.u.prototype={
gm:function(a){return this.a.length},
k:function(a,b){return C.c.a4(this.a,b)},
$acH:function(){return[P.m]},
$aV:function(){return[P.m]},
$al:function(){return[P.m]},
$aa:function(){return[P.m]}}
H.eW.prototype={}
H.bJ.prototype={
gV:function(a){return new H.ci(this,this.gm(this),0,[H.a9(this,"bJ",0)])},
c3:function(a,b){return this.fM(0,H.k(b,{func:1,ret:P.M,args:[H.a9(this,"bJ",0)]}))}}
H.ci.prototype={
gM:function(){return this.d},
F:function(){var u,t,s,r
u=this.a
t=J.c0(u)
s=t.gm(u)
if(this.b!==s)throw H.c(P.b1(u))
r=this.c
if(r>=s){this.sb7(null)
return!1}this.sb7(t.ag(u,r));++this.c
return!0},
sb7:function(a){this.d=H.z(a,H.r(this,0))},
$iaQ:1}
H.fv.prototype={
gV:function(a){return new H.fw(J.by(this.a),this.b,this.$ti)},
gm:function(a){return J.aF(this.a)},
ag:function(a,b){return this.b.$1(J.eD(this.a,b))},
$al:function(a,b){return[b]}}
H.fw.prototype={
F:function(){var u=this.b
if(u.F()){this.sb7(this.c.$1(u.gM()))
return!0}this.sb7(null)
return!1},
gM:function(){return this.a},
sb7:function(a){this.a=H.z(a,H.r(this,1))},
$aaQ:function(a,b){return[b]}}
H.fx.prototype={
gm:function(a){return J.aF(this.a)},
ag:function(a,b){return this.b.$1(J.eD(this.a,b))},
$abJ:function(a,b){return[b]},
$al:function(a,b){return[b]}}
H.cJ.prototype={
gV:function(a){return new H.hY(J.by(this.a),this.b,this.$ti)}}
H.hY.prototype={
F:function(){var u,t
for(u=this.a,t=this.b;u.F();)if(t.$1(u.gM()))return!0
return!1},
gM:function(){return this.a.gM()}}
H.bG.prototype={}
H.cH.prototype={
q:function(a,b,c){H.z(c,H.a9(this,"cH",0))
throw H.c(P.Z("Cannot modify an unmodifiable list"))}}
H.e3.prototype={}
H.eO.prototype={
i:function(a){return P.jQ(this)},
q:function(a,b,c){H.z(b,H.r(this,0))
H.z(c,H.r(this,1))
return H.mh()},
$iI:1}
H.eP.prototype={
gm:function(a){return this.a},
bD:function(a){if("__proto__"===a)return!1
return this.b.hasOwnProperty(a)},
k:function(a,b){if(!this.bD(b))return
return this.dY(b)},
dY:function(a){return this.b[H.F(a)]},
a1:function(a,b){var u,t,s,r,q
u=H.r(this,1)
H.k(b,{func:1,ret:-1,args:[H.r(this,0),u]})
t=this.c
for(s=t.length,r=0;r<s;++r){q=t[r]
b.$2(q,H.z(this.dY(q),u))}}}
H.fT.prototype={}
H.hn.prototype={
ao:function(a){var u,t,s
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
H.fL.prototype={
i:function(a){var u=this.b
if(u==null)return"NoSuchMethodError: "+H.j(this.a)
return"NoSuchMethodError: method not found: '"+u+"' on null"}}
H.fj.prototype={
i:function(a){var u,t
u=this.b
if(u==null)return"NoSuchMethodError: "+H.j(this.a)
t=this.c
if(t==null)return"NoSuchMethodError: method not found: '"+u+"' ("+H.j(this.a)+")"
return"NoSuchMethodError: method not found: '"+u+"' on '"+t+"' ("+H.j(this.a)+")"}}
H.hB.prototype={
i:function(a){var u=this.a
return u.length===0?"Error":"Error: "+u}}
H.jC.prototype={
$1:function(a){if(!!J.R(a).$ibl)if(a.$thrownJsError==null)a.$thrownJsError=this.a
return a},
$S:22}
H.eo.prototype={
i:function(a){var u,t
u=this.b
if(u!=null)return u
u=this.a
t=u!==null&&typeof u==="object"?u.stack:null
u=t==null?"":t
this.b=u
return u},
$iat:1}
H.c9.prototype={
i:function(a){return"Closure '"+H.bO(this).trim()+"'"},
$ibm:1,
gln:function(){return this},
$C:"$1",
$R:1,
$D:null}
H.hf.prototype={}
H.h9.prototype={
i:function(a){var u=this.$static_name
if(u==null)return"Closure of unknown static method"
return"Closure '"+H.c3(u)+"'"}}
H.c6.prototype={
D:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof H.c6))return!1
return this.a===b.a&&this.b===b.b&&this.c===b.c},
gL:function(a){var u,t
u=this.c
if(u==null)t=H.cp(this.a)
else t=typeof u!=="object"?J.d1(u):H.cp(u)
return(t^H.cp(this.b))>>>0},
i:function(a){var u=this.c
if(u==null)u=this.a
return"Closure '"+H.j(this.d)+"' of "+("Instance of '"+H.bO(u)+"'")}}
H.hp.prototype={
i:function(a){return this.a}}
H.eK.prototype={
i:function(a){return this.a}}
H.fY.prototype={
i:function(a){return"RuntimeError: "+H.j(this.a)}}
H.aJ.prototype={
gm:function(a){return this.a},
gkD:function(a){return this.a===0},
gaC:function(){return new H.fn(this,[H.r(this,0)])},
bD:function(a){var u,t
if(typeof a==="string"){u=this.b
if(u==null)return!1
return this.dU(u,a)}else if(typeof a==="number"&&(a&0x3ffffff)===a){t=this.c
if(t==null)return!1
return this.dU(t,a)}else return this.kA(a)},
kA:function(a){var u=this.d
if(u==null)return!1
return this.d7(this.ci(u,this.d6(a)),a)>=0},
k:function(a,b){var u,t,s,r
if(typeof b==="string"){u=this.b
if(u==null)return
t=this.bw(u,b)
s=t==null?null:t.b
return s}else if(typeof b==="number"&&(b&0x3ffffff)===b){r=this.c
if(r==null)return
t=this.bw(r,b)
s=t==null?null:t.b
return s}else return this.kB(b)},
kB:function(a){var u,t,s
u=this.d
if(u==null)return
t=this.ci(u,this.d6(a))
s=this.d7(t,a)
if(s<0)return
return t[s].b},
q:function(a,b,c){var u,t
H.z(b,H.r(this,0))
H.z(c,H.r(this,1))
if(typeof b==="string"){u=this.b
if(u==null){u=this.cs()
this.b=u}this.dL(u,b,c)}else if(typeof b==="number"&&(b&0x3ffffff)===b){t=this.c
if(t==null){t=this.cs()
this.c=t}this.dL(t,b,c)}else this.kC(b,c)},
kC:function(a,b){var u,t,s,r
H.z(a,H.r(this,0))
H.z(b,H.r(this,1))
u=this.d
if(u==null){u=this.cs()
this.d=u}t=this.d6(a)
s=this.ci(u,t)
if(s==null)this.cE(u,t,[this.cb(a,b)])
else{r=this.d7(s,a)
if(r>=0)s[r].b=b
else s.push(this.cb(a,b))}},
a1:function(a,b){var u,t
H.k(b,{func:1,ret:-1,args:[H.r(this,0),H.r(this,1)]})
u=this.e
t=this.r
for(;u!=null;){b.$2(u.a,u.b)
if(t!==this.r)throw H.c(P.b1(this))
u=u.c}},
dL:function(a,b,c){var u
H.z(b,H.r(this,0))
H.z(c,H.r(this,1))
u=this.bw(a,b)
if(u==null)this.cE(a,b,this.cb(b,c))
else u.b=c},
hc:function(){this.r=this.r+1&67108863},
cb:function(a,b){var u,t
u=new H.fm(H.z(a,H.r(this,0)),H.z(b,H.r(this,1)))
if(this.e==null){this.f=u
this.e=u}else{t=this.f
u.d=t
t.c=u
this.f=u}++this.a
this.hc()
return u},
d6:function(a){return J.d1(a)&0x3ffffff},
d7:function(a,b){var u,t
if(a==null)return-1
u=a.length
for(t=0;t<u;++t)if(J.U(a[t].a,b))return t
return-1},
i:function(a){return P.jQ(this)},
bw:function(a,b){return a[b]},
ci:function(a,b){return a[b]},
cE:function(a,b,c){a[b]=c},
hq:function(a,b){delete a[b]},
dU:function(a,b){return this.bw(a,b)!=null},
cs:function(){var u=Object.create(null)
this.cE(u,"<non-identifier-key>",u)
this.hq(u,"<non-identifier-key>")
return u},
$iky:1}
H.fm.prototype={}
H.fn.prototype={
gm:function(a){return this.a.a},
gV:function(a){var u,t
u=this.a
t=new H.fo(u,u.r,this.$ti)
t.c=u.e
return t}}
H.fo.prototype={
gM:function(){return this.d},
F:function(){var u=this.a
if(this.b!==u.r)throw H.c(P.b1(u))
else{u=this.c
if(u==null){this.sdM(null)
return!1}else{this.sdM(u.a)
this.c=this.c.c
return!0}}},
sdM:function(a){this.d=H.z(a,H.r(this,0))},
$iaQ:1}
H.j5.prototype={
$1:function(a){return this.a(a)},
$S:22}
H.j6.prototype={
$2:function(a,b){return this.a(a,b)},
$S:42}
H.j7.prototype={
$1:function(a){return this.a(H.F(a))},
$S:44}
H.fi.prototype={
i:function(a){return"RegExp/"+this.a+"/"},
$ikE:1,
$imP:1}
H.bM.prototype={$ibM:1,$imZ:1}
H.dA.prototype={
gm:function(a){return a.length},
$iaI:1,
$aaI:function(){}}
H.dB.prototype={
k:function(a,b){H.ba(b,a,a.length)
return a[b]},
q:function(a,b,c){H.nM(c)
H.ba(b,a,a.length)
a[b]=c},
$abG:function(){return[P.p]},
$aV:function(){return[P.p]},
$il:1,
$al:function(){return[P.p]},
$ia:1,
$aa:function(){return[P.p]}}
H.dC.prototype={
q:function(a,b,c){H.a6(c)
H.ba(b,a,a.length)
a[b]=c},
$abG:function(){return[P.m]},
$aV:function(){return[P.m]},
$il:1,
$al:function(){return[P.m]},
$ia:1,
$aa:function(){return[P.m]}}
H.fE.prototype={
k:function(a,b){H.ba(b,a,a.length)
return a[b]}}
H.fF.prototype={
k:function(a,b){H.ba(b,a,a.length)
return a[b]}}
H.fG.prototype={
k:function(a,b){H.ba(b,a,a.length)
return a[b]}}
H.fH.prototype={
k:function(a,b){H.ba(b,a,a.length)
return a[b]}}
H.dD.prototype={
gm:function(a){return a.length},
k:function(a,b){H.ba(b,a,a.length)
return a[b]},
$iov:1}
H.cm.prototype={
gm:function(a){return a.length},
k:function(a,b){H.ba(b,a,a.length)
return a[b]},
$icm:1,
$iN:1}
H.cN.prototype={}
H.cO.prototype={}
H.cP.prototype={}
H.cQ.prototype={}
P.i_.prototype={
$1:function(a){var u,t
u=this.a
t=u.a
u.a=null
t.$0()},
$S:30}
P.hZ.prototype={
$1:function(a){var u,t
this.a.a=H.k(a,{func:1,ret:-1})
u=this.b
t=this.c
u.firstChild?u.removeChild(t):u.appendChild(t)},
$S:34}
P.i0.prototype={
$0:function(){this.a.$0()},
$S:0}
P.i1.prototype={
$0:function(){this.a.$0()},
$S:0}
P.ep.prototype={
h8:function(a,b){if(self.setTimeout!=null)this.b=self.setTimeout(H.bY(new P.iE(this,b),0),a)
else throw H.c(P.Z("`setTimeout()` not found."))},
h9:function(a,b){if(self.setTimeout!=null)this.b=self.setInterval(H.bY(new P.iD(this,a,Date.now(),b),0),a)
else throw H.c(P.Z("Periodic timer."))},
$iaW:1}
P.iE.prototype={
$0:function(){var u=this.a
u.b=null
u.c=1
this.b.$0()},
$S:3}
P.iD.prototype={
$0:function(){var u,t,s,r
u=this.a
t=u.c+1
s=this.b
if(s>0){r=Date.now()-this.c
if(r>(t+1)*s)t=C.f.fR(r,s)}u.c=t
this.d.$1(u)},
$S:0}
P.b_.prototype={
kH:function(a){if(this.c!==6)return!0
return this.b.b.dq(H.k(this.d,{func:1,ret:P.M,args:[P.L]}),a.a,P.M,P.L)},
ky:function(a){var u,t,s,r
u=this.e
t=P.L
s={futureOr:1,type:H.r(this,1)}
r=this.b.b
if(H.ey(u,{func:1,args:[P.L,P.at]}))return H.k7(r.l6(u,a.a,a.b,null,t,P.at),s)
else return H.k7(r.dq(H.k(u,{func:1,args:[P.L]}),a.a,null,t),s)}}
P.aD.prototype={
fj:function(a,b,c){var u,t,s,r
u=H.r(this,0)
H.k(a,{func:1,ret:{futureOr:1,type:c},args:[u]})
t=$.Y
if(t!==C.l){t.toString
H.k(a,{func:1,ret:{futureOr:1,type:c},args:[u]})
if(b!=null)b=P.nz(b,t)}H.k(a,{func:1,ret:{futureOr:1,type:c},args:[u]})
s=new P.aD(0,$.Y,[c])
r=b==null?1:3
this.dO(new P.b_(s,r,a,b,[u,c]))
return s},
lc:function(a,b){return this.fj(a,null,b)},
dO:function(a){var u,t
u=this.a
if(u<=1){a.a=H.d(this.c,"$ib_")
this.c=a}else{if(u===2){t=H.d(this.c,"$iaD")
u=t.a
if(u<4){t.dO(a)
return}this.a=u
this.c=t.c}u=this.b
u.toString
P.iX(null,null,u,H.k(new P.i9(this,a),{func:1,ret:-1}))}},
ea:function(a){var u,t,s,r,q,p
u={}
u.a=a
if(a==null)return
t=this.a
if(t<=1){s=H.d(this.c,"$ib_")
this.c=a
if(s!=null){for(r=a;q=r.a,q!=null;r=q);r.a=s}}else{if(t===2){p=H.d(this.c,"$iaD")
t=p.a
if(t<4){p.ea(a)
return}this.a=t
this.c=p.c}u.a=this.by(a)
t=this.b
t.toString
P.iX(null,null,t,H.k(new P.id(u,this),{func:1,ret:-1}))}},
cA:function(){var u=H.d(this.c,"$ib_")
this.c=null
return this.by(u)},
by:function(a){var u,t,s
for(u=a,t=null;u!=null;t=u,u=s){s=u.a
u.a=t}return t},
dQ:function(a){var u,t,s
u=H.r(this,0)
H.k7(a,{futureOr:1,type:u})
t=this.$ti
if(H.cW(a,"$ice",t,"$ace"))if(H.cW(a,"$iaD",t,null))P.l5(a,this)
else P.na(a,this)
else{s=this.cA()
H.z(a,u)
this.a=4
this.c=a
P.cM(this,s)}},
dR:function(a,b){var u
H.d(b,"$iat")
u=this.cA()
this.a=8
this.c=new P.ah(a,b)
P.cM(this,u)},
$ice:1}
P.i9.prototype={
$0:function(){P.cM(this.a,this.b)},
$S:0}
P.id.prototype={
$0:function(){P.cM(this.b,this.a.a)},
$S:0}
P.ia.prototype={
$1:function(a){var u=this.a
u.a=0
u.dQ(a)},
$S:30}
P.ib.prototype={
$2:function(a,b){H.d(b,"$iat")
this.a.dR(a,b)},
$1:function(a){return this.$2(a,null)},
$S:53}
P.ic.prototype={
$0:function(){this.a.dR(this.b,this.c)},
$S:0}
P.ih.prototype={
$0:function(){var u,t,s,r,q,p,o
u=null
try{r=this.c
u=r.b.b.fh(H.k(r.d,{func:1}),null)}catch(q){t=H.ad(q)
s=H.c1(q)
if(this.d){r=H.d(this.a.a.c,"$iah").a
p=t
p=r==null?p==null:r===p
r=p}else r=!1
p=this.b
if(r)p.b=H.d(this.a.a.c,"$iah")
else p.b=new P.ah(t,s)
p.a=!0
return}if(!!J.R(u).$ice){if(u instanceof P.aD&&u.a>=4){if(u.a===8){r=this.b
r.b=H.d(u.c,"$iah")
r.a=!0}return}o=this.a.a
r=this.b
r.b=u.lc(new P.ii(o),null)
r.a=!1}},
$S:3}
P.ii.prototype={
$1:function(a){return this.a},
$S:50}
P.ig.prototype={
$0:function(){var u,t,s,r,q,p,o
try{s=this.b
r=H.r(s,0)
q=H.z(this.c,r)
p=H.r(s,1)
this.a.b=s.b.b.dq(H.k(s.d,{func:1,ret:{futureOr:1,type:p},args:[r]}),q,{futureOr:1,type:p},r)}catch(o){u=H.ad(o)
t=H.c1(o)
s=this.a
s.b=new P.ah(u,t)
s.a=!0}},
$S:3}
P.ie.prototype={
$0:function(){var u,t,s,r,q,p,o,n
try{u=H.d(this.a.a.c,"$iah")
r=this.c
if(r.kH(u)&&r.e!=null){q=this.b
q.b=r.ky(u)
q.a=!1}}catch(p){t=H.ad(p)
s=H.c1(p)
r=H.d(this.a.a.c,"$iah")
q=r.a
o=t
n=this.b
if(q==null?o==null:q===o)n.b=r
else n.b=new P.ah(t,s)
n.a=!0}},
$S:3}
P.ec.prototype={}
P.ha.prototype={
gm:function(a){var u,t,s,r
u={}
t=new P.aD(0,$.Y,[P.m])
u.a=0
s=H.r(this,0)
r=H.k(new P.hc(u,this),{func:1,ret:-1,args:[s]})
H.k(new P.hd(u,t),{func:1,ret:-1})
W.a4(this.a,this.b,r,!1,s)
return t}}
P.hc.prototype={
$1:function(a){H.z(a,H.r(this.b,0));++this.a.a},
$S:function(){return{func:1,ret:P.E,args:[H.r(this.b,0)]}}}
P.hd.prototype={
$0:function(){this.b.dQ(this.a.a)},
$S:0}
P.ct.prototype={}
P.hb.prototype={}
P.aW.prototype={}
P.ah.prototype={
i:function(a){return H.j(this.a)},
$ibl:1}
P.iO.prototype={$ioK:1}
P.iW.prototype={
$0:function(){var u,t,s
u=this.a
t=u.a
if(t==null){s=new P.dF()
u.a=s
u=s}else u=t
t=this.b
if(t==null)throw H.c(u)
s=H.c(u)
s.stack=t.i(0)
throw s},
$S:0}
P.io.prototype={
l7:function(a){var u,t,s
H.k(a,{func:1,ret:-1})
try{if(C.l===$.Y){a.$0()
return}P.lh(null,null,this,a,-1)}catch(s){u=H.ad(s)
t=H.c1(s)
P.iV(null,null,this,u,H.d(t,"$iat"))}},
l8:function(a,b,c){var u,t,s
H.k(a,{func:1,ret:-1,args:[c]})
H.z(b,c)
try{if(C.l===$.Y){a.$1(b)
return}P.li(null,null,this,a,b,-1,c)}catch(s){u=H.ad(s)
t=H.c1(s)
P.iV(null,null,this,u,H.d(t,"$iat"))}},
jT:function(a,b){return new P.iq(this,H.k(a,{func:1,ret:b}),b)},
cO:function(a){return new P.ip(this,H.k(a,{func:1,ret:-1}))},
eq:function(a,b){return new P.ir(this,H.k(a,{func:1,ret:-1,args:[b]}),b)},
fh:function(a,b){H.k(a,{func:1,ret:b})
if($.Y===C.l)return a.$0()
return P.lh(null,null,this,a,b)},
dq:function(a,b,c,d){H.k(a,{func:1,ret:c,args:[d]})
H.z(b,d)
if($.Y===C.l)return a.$1(b)
return P.li(null,null,this,a,b,c,d)},
l6:function(a,b,c,d,e,f){H.k(a,{func:1,ret:d,args:[e,f]})
H.z(b,e)
H.z(c,f)
if($.Y===C.l)return a.$2(b,c)
return P.nA(null,null,this,a,b,c,d,e,f)}}
P.iq.prototype={
$0:function(){return this.a.fh(this.b,this.c)},
$S:function(){return{func:1,ret:this.c}}}
P.ip.prototype={
$0:function(){return this.a.l7(this.b)},
$S:3}
P.ir.prototype={
$1:function(a){var u=this.c
return this.a.l8(this.b,H.z(a,u),u)},
$S:function(){return{func:1,ret:-1,args:[this.c]}}}
P.il.prototype={
gV:function(a){var u=new P.ei(this,this.r,this.$ti)
u.c=this.e
return u},
gm:function(a){return this.a},
Y:function(a,b){var u,t
if(typeof b==="string"&&b!=="__proto__"){u=this.b
if(u==null)return!1
return H.d(u[b],"$ibT")!=null}else{t=this.hm(b)
return t}},
hm:function(a){var u=this.d
if(u==null)return!1
return this.cf(this.dZ(u,a),a)>=0},
h:function(a,b){var u,t
H.z(b,H.r(this,0))
if(typeof b==="string"&&b!=="__proto__"){u=this.b
if(u==null){u=P.jX()
this.b=u}return this.dN(u,b)}else if(typeof b==="number"&&(b&1073741823)===b){t=this.c
if(t==null){t=P.jX()
this.c=t}return this.dN(t,b)}else return this.hd(b)},
hd:function(a){var u,t,s
H.z(a,H.r(this,0))
u=this.d
if(u==null){u=P.jX()
this.d=u}t=this.dS(a)
s=u[t]
if(s==null)u[t]=[this.ct(a)]
else{if(this.cf(s,a)>=0)return!1
s.push(this.ct(a))}return!0},
N:function(a,b){if(typeof b==="number"&&(b&1073741823)===b)return this.iP(this.c,b)
else return this.iM(b)},
iM:function(a){var u,t,s
u=this.d
if(u==null)return!1
t=this.dZ(u,a)
s=this.cf(t,a)
if(s<0)return!1
this.ef(t.splice(s,1)[0])
return!0},
dN:function(a,b){H.z(b,H.r(this,0))
if(H.d(a[b],"$ibT")!=null)return!1
a[b]=this.ct(b)
return!0},
iP:function(a,b){var u
if(a==null)return!1
u=H.d(a[b],"$ibT")
if(u==null)return!1
this.ef(u)
delete a[b]
return!0},
e3:function(){this.r=1073741823&this.r+1},
ct:function(a){var u,t
u=new P.bT(H.z(a,H.r(this,0)))
if(this.e==null){this.f=u
this.e=u}else{t=this.f
u.c=t
t.b=u
this.f=u}++this.a
this.e3()
return u},
ef:function(a){var u,t
u=a.c
t=a.b
if(u==null)this.e=t
else u.b=t
if(t==null)this.f=u
else t.c=u;--this.a
this.e3()},
dS:function(a){return J.d1(a)&1073741823},
dZ:function(a,b){return a[this.dS(b)]},
cf:function(a,b){var u,t
if(a==null)return-1
u=a.length
for(t=0;t<u;++t)if(J.U(a[t].a,b))return t
return-1}}
P.bT.prototype={}
P.ei.prototype={
gM:function(){return this.d},
F:function(){var u=this.a
if(this.b!==u.r)throw H.c(P.b1(u))
else{u=this.c
if(u==null){this.sdP(null)
return!1}else{this.sdP(H.z(u.a,H.r(this,0)))
this.c=this.c.b
return!0}}},
sdP:function(a){this.d=H.z(a,H.r(this,0))},
$iaQ:1}
P.fp.prototype={
$2:function(a,b){this.a.q(0,H.z(a,this.b),H.z(b,this.c))},
$S:7}
P.fq.prototype={$il:1,$ia:1}
P.V.prototype={
gV:function(a){return new H.ci(a,this.gm(a),0,[H.cY(this,a,"V",0)])},
ag:function(a,b){return this.k(a,b)},
lf:function(a,b){var u,t
u=H.b([],[H.cY(this,a,"V",0)])
C.a.sm(u,this.gm(a))
for(t=0;t<this.gm(a);++t)C.a.q(u,t,this.k(a,t))
return u},
le:function(a){return this.lf(a,!0)},
n:function(a,b){var u,t
u=[H.cY(this,a,"V",0)]
H.h(b,"$ia",u,"$aa")
t=H.b([],u)
C.a.sm(t,C.f.n(this.gm(a),b.gm(b)))
C.a.bs(t,0,this.gm(a),a)
C.a.bs(t,this.gm(a),t.length,b)
return t},
kq:function(a,b,c,d){var u
H.z(d,H.cY(this,a,"V",0))
P.b9(b,c,this.gm(a),null,null,null)
for(u=b;u<c;++u)this.q(a,u,d)},
i:function(a){return P.jM(a,"[","]")}}
P.fs.prototype={}
P.ft.prototype={
$2:function(a,b){var u,t
u=this.a
if(!u.a)this.b.a+=", "
u.a=!1
u=this.b
t=u.a+=H.j(a)
u.a=t+": "
u.a+=H.j(b)},
$S:7}
P.bK.prototype={
a1:function(a,b){var u,t
H.k(b,{func:1,ret:-1,args:[H.a9(this,"bK",0),H.a9(this,"bK",1)]})
for(u=J.by(this.gaC());u.F();){t=u.gM()
b.$2(t,this.k(0,t))}},
gm:function(a){return J.aF(this.gaC())},
i:function(a){return P.jQ(this)},
$iI:1}
P.iF.prototype={
q:function(a,b,c){H.z(b,H.r(this,0))
H.z(c,H.r(this,1))
throw H.c(P.Z("Cannot modify unmodifiable map"))}}
P.fu.prototype={
k:function(a,b){return this.a.k(0,b)},
q:function(a,b,c){this.a.q(0,H.z(b,H.r(this,0)),H.z(c,H.r(this,1)))},
a1:function(a,b){this.a.a1(0,H.k(b,{func:1,ret:-1,args:[H.r(this,0),H.r(this,1)]}))},
gm:function(a){var u=this.a
return u.gm(u)},
i:function(a){return J.ao(this.a)},
$iI:1}
P.e4.prototype={}
P.it.prototype={
af:function(a,b){var u
for(u=J.by(H.h(b,"$il",this.$ti,"$al"));u.F();)this.h(0,u.gM())},
i:function(a){return P.jM(this,"{","}")},
ag:function(a,b){var u,t,s
if(b<0)H.q(P.a7(b,0,null,"index",null))
for(u=P.ne(this,this.r,H.r(this,0)),t=0;u.F();){s=u.d
if(b===t)return s;++t}throw H.c(P.bI(b,this,"index",null,t))},
$il:1,
$ikO:1}
P.ej.prototype={}
P.et.prototype={}
P.eG.prototype={
kJ:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
c=P.b9(b,c,a.length,null,null,null)
u=$.lW()
for(t=b,s=t,r=null,q=-1,p=-1,o=0;t<c;t=n){n=t+1
m=C.c.K(a,t)
if(m===37){l=n+2
if(l<=c){k=H.j4(C.c.K(a,n))
j=H.j4(C.c.K(a,n+1))
i=k*16+j-(j&256)
if(i===37)i=-1
n=l}else i=-1}else i=m
if(0<=i&&i<=127){if(i<0||i>=u.length)return H.e(u,i)
h=u[i]
if(h>=0){i=C.c.a4("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",h)
if(i===m)continue
m=i}else{if(h===-1){if(q<0){g=r==null?null:r.a.length
if(g==null)g=0
q=g+(t-s)
p=t}++o
if(m===61)continue}m=i}if(h!==-2){if(r==null)r=new P.ae("")
g=r.a+=C.c.B(a,s,t)
r.a=g+H.bP(m)
s=n
continue}}throw H.c(P.a1("Invalid base64 data",a,t))}if(r!=null){g=r.a+=C.c.B(a,s,c)
f=g.length
if(q>=0)P.kn(a,p,c,q,o,f)
else{e=C.f.br(f-1,4)+1
if(e===1)throw H.c(P.a1("Invalid base64 encoding length ",a,c))
for(;e<4;){g+="="
r.a=g;++e}}g=r.a
return C.c.b2(a,b,c,g.charCodeAt(0)==0?g:g)}d=c-b
if(q>=0)P.kn(a,p,c,q,o,d)
else{e=C.f.br(d,4)
if(e===1)throw H.c(P.a1("Invalid base64 encoding length ",a,c))
if(e>1)a=C.c.b2(a,c,c,e===2?"==":"=")}return a},
$abC:function(){return[[P.a,P.m],P.f]}}
P.eH.prototype={
$abj:function(){return[[P.a,P.m],P.f]}}
P.bC.prototype={}
P.bj.prototype={}
P.eY.prototype={
$abC:function(){return[P.f,[P.a,P.m]]}}
P.fc.prototype={
i:function(a){return this.a}}
P.fb.prototype={
hn:function(a,b,c){var u,t,s,r,q,p
for(u=this.a,t=u.e,s=u.d,u=u.c,r=b,q=null;r<c;++r){if(r>=a.length)return H.e(a,r)
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
default:p=null}if(p!=null){if(q==null)q=new P.ae("")
if(r>b)q.a+=C.c.B(a,b,r)
q.a+=p
b=r+1}}if(q==null)return
if(c>b)q.a+=J.ma(a,b,c)
u=q.a
return u.charCodeAt(0)==0?u:u},
$abj:function(){return[P.f,P.f]}}
P.hI.prototype={
gkp:function(){return C.T}}
P.hK.prototype={
be:function(a,b,c){var u,t,s
c=P.b9(b,c,a.length,null,null,null)
u=c-b
if(u===0)return new Uint8Array(0)
t=new Uint8Array(u*3)
s=new P.iM(t)
if(s.hz(a,b,c)!==c)s.eh(J.m4(a,c-1),0)
return new Uint8Array(t.subarray(0,H.nu(0,s.b,t.length)))},
cU:function(a){return this.be(a,0,null)},
$abj:function(){return[P.f,[P.a,P.m]]}}
P.iM.prototype={
eh:function(a,b){var u,t,s,r,q
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
hz:function(a,b,c){var u,t,s,r,q,p,o
if(b!==c&&(C.c.a4(a,c-1)&64512)===55296)--c
for(u=this.c,t=u.length,s=b;s<c;++s){r=C.c.K(a,s)
if(r<=127){q=this.b
if(q>=t)break
this.b=q+1
u[q]=r}else if((r&64512)===55296){if(this.b+3>=t)break
p=s+1
if(this.eh(r,C.c.K(a,p)))s=p}else if(r<=2047){q=this.b
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
P.hJ.prototype={
be:function(a,b,c){var u,t,s,r
H.h(a,"$ia",[P.m],"$aa")
u=P.n1(!1,a,b,c)
if(u!=null)return u
c=P.b9(b,c,J.aF(a),null,null,null)
t=new P.ae("")
s=new P.iK(!1,t)
s.be(a,b,c)
if(s.e>0){H.q(P.a1("Unfinished UTF-8 octet sequence",a,c))
t.a+=H.bP(65533)
s.d=0
s.e=0
s.f=0}r=t.a
return r.charCodeAt(0)==0?r:r},
cU:function(a){return this.be(a,0,null)},
$abj:function(){return[[P.a,P.m],P.f]}}
P.iK.prototype={
be:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k,j,i
H.h(a,"$ia",[P.m],"$aa")
u=this.d
t=this.e
s=this.f
this.d=0
this.e=0
this.f=0
r=new P.iL(this,b,c,a)
$label0$0:for(q=J.c0(a),p=this.b,o=b;!0;o=j){$label1$1:if(t>0){do{if(o===c)break $label0$0
n=q.k(a,o)
if(typeof n!=="number")return n.c5()
if((n&192)!==128){m=P.a1("Bad UTF-8 encoding 0x"+C.f.bp(n,16),a,o)
throw H.c(m)}else{u=(u<<6|n&63)>>>0;--t;++o}}while(t>0)
m=s-1
if(m<0||m>=4)return H.e(C.H,m)
if(u<=C.H[m]){m=P.a1("Overlong encoding of 0x"+C.f.bp(u,16),a,o-s-1)
throw H.c(m)}if(u>1114111){m=P.a1("Character outside valid Unicode range: 0x"+C.f.bp(u,16),a,o-s-1)
throw H.c(m)}if(!this.c||u!==65279)p.a+=H.bP(u)
this.c=!1}for(m=o<c;m;){l=P.nB(a,o,c)
if(l>0){this.c=!1
k=o+l
r.$2(o,k)
if(k===c)break}else k=o
j=k+1
n=q.k(a,k)
if(typeof n!=="number")return n.Z()
if(n<0){i=P.a1("Negative UTF-8 code unit: -0x"+C.f.bp(-n,16),a,j-1)
throw H.c(i)}else{if((n&224)===192){u=n&31
t=1
s=1
continue $label0$0}if((n&240)===224){u=n&15
t=2
s=2
continue $label0$0}if((n&248)===240&&n<245){u=n&7
t=3
s=3
continue $label0$0}i=P.a1("Bad UTF-8 encoding 0x"+C.f.bp(n,16),a,j-1)
throw H.c(i)}}break $label0$0}if(t>0){this.d=u
this.e=t
this.f=s}}}
P.iL.prototype={
$2:function(a,b){this.a.b.a+=P.dS(this.d,a,b)},
$S:49}
P.M.prototype={}
P.aj.prototype={
D:function(a,b){if(b==null)return!1
return b instanceof P.aj&&this.a===b.a&&!0},
gL:function(a){var u=this.a
return(u^C.f.aZ(u,30))&1073741823},
i:function(a){var u,t,s,r,q,p,o,n
u=P.mi(H.mK(this))
t=P.db(H.mI(this))
s=P.db(H.mE(this))
r=P.db(H.mF(this))
q=P.db(H.mH(this))
p=P.db(H.mJ(this))
o=P.mj(H.mG(this))
n=u+"-"+t+"-"+s+" "+r+":"+q+":"+p+"."+o
return n}}
P.p.prototype={}
P.aP.prototype={
n:function(a,b){return new P.aP(C.f.n(this.a,b.ghs()))},
v:function(a,b){return new P.aP(C.f.v(this.a,b.ghs()))},
D:function(a,b){if(b==null)return!1
return b instanceof P.aP&&this.a===b.a},
gL:function(a){return C.f.gL(this.a)},
i:function(a){var u,t,s,r,q
u=new P.eV()
t=this.a
if(t<0)return"-"+new P.aP(0-t).i(0)
s=u.$1(C.f.ab(t,6e7)%60)
r=u.$1(C.f.ab(t,1e6)%60)
q=new P.eU().$1(t%1e6)
return""+C.f.ab(t,36e8)+":"+H.j(s)+":"+H.j(r)+"."+H.j(q)}}
P.eU.prototype={
$1:function(a){if(a>=1e5)return""+a
if(a>=1e4)return"0"+a
if(a>=1000)return"00"+a
if(a>=100)return"000"+a
if(a>=10)return"0000"+a
return"00000"+a},
$S:16}
P.eV.prototype={
$1:function(a){if(a>=10)return""+a
return"0"+a},
$S:16}
P.bl.prototype={}
P.dF.prototype={
i:function(a){return"Throw of null."}}
P.aG.prototype={
gce:function(){return"Invalid argument"+(!this.a?"(s)":"")},
gcd:function(){return""},
i:function(a){var u,t,s,r,q,p
u=this.c
t=u!=null?" ("+u+")":""
u=this.d
s=u==null?"":": "+u
r=this.gce()+t+s
if(!this.a)return r
q=this.gcd()
p=P.f_(this.b)
return r+q+": "+p}}
P.bQ.prototype={
gce:function(){return"RangeError"},
gcd:function(){var u,t,s
u=this.e
if(u==null){u=this.f
t=u!=null?": Not less than or equal to "+H.j(u):""}else{s=this.f
if(s==null)t=": Not greater than or equal to "+H.j(u)
else if(s>u)t=": Not in range "+H.j(u)+".."+H.j(s)+", inclusive"
else t=s<u?": Valid value range is empty":": Only valid value is "+H.j(u)}return t}}
P.fe.prototype={
gce:function(){return"RangeError"},
gcd:function(){var u,t
u=H.a6(this.b)
if(typeof u!=="number")return u.Z()
if(u<0)return": index must not be negative"
t=this.f
if(t===0)return": no indices are valid"
return": index should be less than "+H.j(t)},
gm:function(a){return this.f}}
P.hC.prototype={
i:function(a){return"Unsupported operation: "+this.a}}
P.hz.prototype={
i:function(a){var u=this.a
return u!=null?"UnimplementedError: "+u:"UnimplementedError"}}
P.bS.prototype={
i:function(a){return"Bad state: "+this.a}}
P.eN.prototype={
i:function(a){var u=this.a
if(u==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+P.f_(u)+"."}}
P.fM.prototype={
i:function(a){return"Out of Memory"},
$ibl:1}
P.dR.prototype={
i:function(a){return"Stack Overflow"},
$ibl:1}
P.eR.prototype={
i:function(a){var u=this.a
return u==null?"Reading static variable during its initialization":"Reading static variable '"+u+"' during its initialization"}}
P.ef.prototype={
i:function(a){return"Exception: "+this.a}}
P.f7.prototype={
i:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f
u=this.a
t=""!==u?"FormatException: "+u:"FormatException"
s=this.c
r=this.b
if(typeof r==="string"){if(s!=null)u=s<0||s>r.length
else u=!1
if(u)s=null
if(s==null){q=r.length>78?C.c.B(r,0,75)+"...":r
return t+"\n"+q}for(p=1,o=0,n=!1,m=0;m<s;++m){l=C.c.K(r,m)
if(l===10){if(o!==m||!n)++p
o=m+1
n=!1}else if(l===13){++p
o=m+1
n=!0}}t=p>1?t+(" (at line "+p+", character "+(s-o+1)+")\n"):t+(" (at character "+(s+1)+")\n")
k=r.length
for(m=s;m<k;++m){l=C.c.a4(r,m)
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
g=""}f=C.c.B(r,i,j)
return t+h+f+g+"\n"+C.c.A(" ",s-i+h.length)+"^\n"}else return s!=null?t+(" (at offset "+H.j(s)+")"):t}}
P.bm.prototype={}
P.m.prototype={}
P.l.prototype={
c3:function(a,b){var u=H.a9(this,"l",0)
return new H.cJ(this,H.k(b,{func:1,ret:P.M,args:[u]}),[u])},
gm:function(a){var u,t
u=this.gV(this)
for(t=0;u.F();)++t
return t},
gaS:function(a){var u,t
u=this.gV(this)
if(!u.F())throw H.c(H.ff())
t=u.gM()
if(u.F())throw H.c(H.mq())
return t},
ag:function(a,b){var u,t,s
if(b<0)H.q(P.a7(b,0,null,"index",null))
for(u=this.gV(this),t=0;u.F();){s=u.gM()
if(b===t)return s;++t}throw H.c(P.bI(b,this,"index",null,t))},
i:function(a){return P.mo(this,"(",")")}}
P.aQ.prototype={}
P.a.prototype={$il:1}
P.I.prototype={}
P.E.prototype={
gL:function(a){return P.L.prototype.gL.call(this,this)},
i:function(a){return"null"}}
P.ag.prototype={}
P.L.prototype={constructor:P.L,$iL:1,
D:function(a,b){return this===b},
gL:function(a){return H.cp(this)},
i:function(a){return"Instance of '"+H.bO(this)+"'"},
toString:function(){return this.i(this)}}
P.at.prototype={}
P.f.prototype={$ikE:1}
P.ae.prototype={
gm:function(a){return this.a.length},
i:function(a){var u=this.a
return u.charCodeAt(0)==0?u:u},
$ioj:1}
P.hH.prototype={
$2:function(a,b){var u,t,s,r
u=P.f
H.h(a,"$iI",[u,u],"$aI")
H.F(b)
t=J.cX(b).f3(b,"=")
if(t===-1){if(b!=="")a.q(0,P.jZ(b,0,b.length,this.a,!0),"")}else if(t!==0){s=C.c.B(b,0,t)
r=C.c.aw(b,t+1)
u=this.a
a.q(0,P.jZ(s,0,s.length,u,!0),P.jZ(r,0,r.length,u,!0))}return a},
$S:48}
P.hE.prototype={
$2:function(a,b){throw H.c(P.a1("Illegal IPv4 address, "+a,this.a,b))},
$S:47}
P.hF.prototype={
$2:function(a,b){throw H.c(P.a1("Illegal IPv6 address, "+a,this.a,b))},
$1:function(a){return this.$2(a,null)},
$S:46}
P.hG.prototype={
$2:function(a,b){var u
if(b-a>4)this.a.$2("an IPv6 part can only contain a maximum of 4 hex digits",a)
u=P.eA(C.c.B(this.b,a,b),null,16)
if(typeof u!=="number")return u.Z()
if(u<0||u>65535)this.a.$2("each part must be in the range of `0x0..0xFFFF`",a)
return u},
$S:43}
P.bU.prototype={
gfp:function(){return this.b},
gd5:function(a){var u=this.c
if(u==null)return""
if(C.c.aa(u,"["))return C.c.B(u,1,u.length-1)
return u},
gbX:function(a){var u=this.d
if(u==null)return P.l9(this.a)
return u},
gdi:function(){var u=this.f
return u==null?"":u},
geZ:function(){var u=this.r
return u==null?"":u},
dn:function(a,b,c,d,e,f,g,h,i,j){var u,t,s
H.h(h,"$iI",[P.f,null],"$aI")
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
if(s&&!C.c.aa(d,"/"))d="/"+d
g=P.jY(g,0,0,h)
return new P.bU(i,j,c,f,d,g,this.r)},
ff:function(a,b){return this.dn(a,null,null,null,null,null,null,b,null,null)},
gdj:function(){var u,t
if(this.Q==null){u=this.f
t=P.f
this.siL(new P.e4(P.kY(u==null?"":u,C.m),[t,t]))}return this.Q},
gf_:function(){return this.c!=null},
gf2:function(){return this.f!=null},
gf0:function(){return this.r!=null},
i:function(a){var u,t,s,r
u=this.y
if(u==null){u=this.a
t=u.length!==0?H.j(u)+":":""
s=this.c
r=s==null
if(!r||u==="file"){u=t+"//"
t=this.b
if(t.length!==0)u=u+H.j(t)+"@"
if(!r)u+=s
t=this.d
if(t!=null)u=u+":"+H.j(t)}else u=t
u+=this.e
t=this.f
if(t!=null)u=u+"?"+t
t=this.r
if(t!=null)u=u+"#"+t
u=u.charCodeAt(0)==0?u:u
this.y=u}return u},
D:function(a,b){var u,t
if(b==null)return!1
if(this===b)return!0
if(!!J.R(b).$ijT)if(this.a==b.gc9())if(this.c!=null===b.gf_())if(this.b==b.gfp())if(this.gd5(this)==b.gd5(b))if(this.gbX(this)==b.gbX(b))if(this.e===b.gfd(b)){u=this.f
t=u==null
if(!t===b.gf2()){if(t)u=""
if(u===b.gdi()){u=this.r
t=u==null
if(!t===b.gf0()){if(t)u=""
u=u===b.geZ()}else u=!1}else u=!1}else u=!1}else u=!1
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
siL:function(a){var u=P.f
this.Q=H.h(a,"$iI",[u,u],"$aI")},
$ijT:1,
gc9:function(){return this.a},
gfd:function(a){return this.e}}
P.iG.prototype={
$1:function(a){var u=this.b
if(typeof u!=="number")return u.n()
throw H.c(P.a1("Invalid port",this.a,u+1))},
$S:41}
P.iH.prototype={
$1:function(a){return P.eu(C.aa,a,C.m,!1)},
$S:21}
P.iJ.prototype={
$2:function(a,b){var u,t
u=this.b
t=this.a
u.a+=t.a
t.a="&"
t=u.a+=H.j(P.eu(C.w,a,C.m,!0))
if(b!=null&&b.length!==0){u.a=t+"="
u.a+=H.j(P.eu(C.w,b,C.m,!0))}},
$S:33}
P.iI.prototype={
$2:function(a,b){var u,t
H.F(a)
if(b==null||typeof b==="string")this.a.$2(a,H.F(b))
else for(u=J.by(H.ly(b,"$il")),t=this.a;u.F();)t.$2(a,H.F(u.gM()))},
$S:40}
P.hD.prototype={
gfo:function(){var u,t,s,r,q
u=this.c
if(u!=null)return u
u=this.b
if(0>=u.length)return H.e(u,0)
t=this.a
u=u[0]+1
s=C.c.f4(t,"?",u)
r=t.length
if(s>=0){q=P.cS(t,s+1,r,C.u,!1)
r=s}else q=null
u=new P.i4(this,"data",null,null,null,P.cS(t,u,r,C.L,!1),q,null)
this.c=u
return u},
i:function(a){var u,t
u=this.b
if(0>=u.length)return H.e(u,0)
t=this.a
return u[0]===-1?"data:"+t:t}}
P.iS.prototype={
$1:function(a){return new Uint8Array(96)},
$S:39}
P.iR.prototype={
$2:function(a,b){var u=this.a
if(a>=u.length)return H.e(u,a)
u=u[a]
J.m5(u,0,96,b)
return u},
$S:37}
P.iT.prototype={
$3:function(a,b,c){var u,t,s
for(u=b.length,t=0;t<u;++t){s=C.c.K(b,t)^96
if(s>=a.length)return H.e(a,s)
a[s]=c}}}
P.iU.prototype={
$3:function(a,b,c){var u,t,s
for(u=C.c.K(b,0),t=C.c.K(b,1);u<=t;++u){s=(u^96)>>>0
if(s>=a.length)return H.e(a,s)
a[s]=c}}}
P.iw.prototype={
gf_:function(){return this.c>0},
gf1:function(){var u,t
if(this.c>0){u=this.d
if(typeof u!=="number")return u.n()
t=this.e
if(typeof t!=="number")return H.B(t)
t=u+1<t
u=t}else u=!1
return u},
gf2:function(){var u=this.f
if(typeof u!=="number")return u.Z()
return u<this.r},
gf0:function(){return this.r<this.a.length},
ge1:function(){return this.b===4&&C.c.aa(this.a,"http")},
ge2:function(){return this.b===5&&C.c.aa(this.a,"https")},
gc9:function(){var u,t
u=this.b
if(u<=0)return""
t=this.x
if(t!=null)return t
if(this.ge1()){this.x="http"
u="http"}else if(this.ge2()){this.x="https"
u="https"}else if(u===4&&C.c.aa(this.a,"file")){this.x="file"
u="file"}else if(u===7&&C.c.aa(this.a,"package")){this.x="package"
u="package"}else{u=C.c.B(this.a,0,u)
this.x=u}return u},
gfp:function(){var u,t
u=this.c
t=this.b+3
return u>t?C.c.B(this.a,t,u-1):""},
gd5:function(a){var u=this.c
return u>0?C.c.B(this.a,u,this.d):""},
gbX:function(a){var u
if(this.gf1()){u=this.d
if(typeof u!=="number")return u.n()
return P.eA(C.c.B(this.a,u+1,this.e),null,null)}if(this.ge1())return 80
if(this.ge2())return 443
return 0},
gfd:function(a){return C.c.B(this.a,this.e,this.f)},
gdi:function(){var u,t
u=this.f
t=this.r
if(typeof u!=="number")return u.Z()
return u<t?C.c.B(this.a,u+1,t):""},
geZ:function(){var u,t
u=this.r
t=this.a
return u<t.length?C.c.aw(t,u+1):""},
gdj:function(){var u=this.f
if(typeof u!=="number")return u.Z()
if(u>=this.r)return C.ab
u=P.f
return new P.e4(P.kY(this.gdi(),C.m),[u,u])},
dn:function(a,b,c,d,e,f,g,h,i,j){var u,t,s
H.h(h,"$iI",[P.f,null],"$aI")
i=this.gc9()
u=i==="file"
t=this.c
j=t>0?C.c.B(this.a,this.b+3,t):""
f=this.gf1()?this.gbX(this):null
t=this.c
if(t>0)c=C.c.B(this.a,t,this.d)
else if(j.length!==0||f!=null||u)c=""
t=this.a
d=C.c.B(t,this.e,this.f)
if(!u)s=c!=null&&d.length!==0
else s=!0
if(s&&!C.c.aa(d,"/"))d="/"+d
g=P.jY(g,0,0,h)
s=this.r
if(s<t.length)b=C.c.aw(t,s+1)
return new P.bU(i,j,c,f,d,g,b)},
ff:function(a,b){return this.dn(a,null,null,null,null,null,null,b,null,null)},
gL:function(a){var u=this.y
if(u==null){u=C.c.gL(this.a)
this.y=u}return u},
D:function(a,b){if(b==null)return!1
if(this===b)return!0
return!!J.R(b).$ijT&&this.a===b.i(0)},
i:function(a){return this.a},
$ijT:1}
P.i4.prototype={}
W.x.prototype={}
W.d2.prototype={
i:function(a){return String(a)},
$id2:1}
W.eE.prototype={
i:function(a){return String(a)}}
W.c5.prototype={$ic5:1}
W.bg.prototype={$ibg:1}
W.bA.prototype={
c6:function(a,b,c){if(c!=null)return this.hA(a,b,P.nI(c,null))
return this.hB(a,b)},
fv:function(a,b){return this.c6(a,b,null)},
hA:function(a,b,c){return a.getContext(b,c)},
hB:function(a,b){return a.getContext(b)},
$ibA:1,
$ikq:1}
W.bB.prototype={
hC:function(a,b,c,d,e){return a.getImageData(b,c,d,e)},
kk:function(a,b,c,d,e,f){return a.drawImage(b,c,d,e,f)},
$ibB:1}
W.bh.prototype={
gm:function(a){return a.length}}
W.ca.prototype={
gm:function(a){return a.length}}
W.eQ.prototype={}
W.aA.prototype={$iaA:1}
W.cb.prototype={
jO:function(a,b){return a.adoptNode(b)},
dv:function(a,b){return a.getElementById(b)}}
W.eT.prototype={
i:function(a){return String(a)}}
W.dc.prototype={
ka:function(a,b){return a.createHTMLDocument(b)}}
W.dd.prototype={
i:function(a){return"Rectangle ("+H.j(a.left)+", "+H.j(a.top)+") "+H.j(a.width)+" x "+H.j(a.height)},
D:function(a,b){var u
if(b==null)return!1
if(!H.cW(b,"$iaB",[P.ag],"$aaB"))return!1
u=J.a5(b)
return a.left===u.gbV(b)&&a.top===u.gc1(b)&&a.width===u.gc4(b)&&a.height===u.gbU(b)},
gL:function(a){return W.l7(C.e.gL(a.left),C.e.gL(a.top),C.e.gL(a.width),C.e.gL(a.height))},
ger:function(a){return a.bottom},
gbU:function(a){return a.height},
gbV:function(a){return a.left},
gc_:function(a){return a.right},
gc1:function(a){return a.top},
gc4:function(a){return a.width},
$iaB:1,
$aaB:function(){return[P.ag]}}
W.i3.prototype={
gm:function(a){return this.b.length},
k:function(a,b){var u=this.b
if(b<0||b>=u.length)return H.e(u,b)
return H.d(u[b],"$iP")},
q:function(a,b,c){var u
H.d(c,"$iP")
u=this.b
if(b<0||b>=u.length)return H.e(u,b)
J.jD(this.a,c,u[b])},
h:function(a,b){J.kj(this.a,b)
return b},
gV:function(a){var u=this.le(this)
return new J.ap(u,u.length,0,[H.r(u,0)])},
$aV:function(){return[W.P]},
$al:function(){return[W.P]},
$aa:function(){return[W.P]}}
W.P.prototype={
gjS:function(a){return new W.i5(a)},
gcT:function(a){return new W.i3(a,a.children)},
gew:function(a){var u,t,s,r
u=a.clientLeft
t=a.clientTop
s=a.clientWidth
r=a.clientHeight
if(typeof s!=="number")return s.Z()
if(s<0)s=-s*0
if(typeof r!=="number")return r.Z()
if(r<0)r=-r*0
return new P.aB(u,t,s,r,[P.ag])},
i:function(a){return a.localName},
an:function(a,b,c,d){var u,t,s,r
if(c==null){u=$.kv
if(u==null){u=H.b([],[W.ay])
t=new W.dE(u)
C.a.h(u,W.l6(null))
C.a.h(u,W.l8())
$.kv=t
d=t}else d=u
u=$.ku
if(u==null){u=new W.ev(d)
$.ku=u
c=u}else{u.a=d
c=u}}if($.b2==null){u=document
t=u.implementation
t=(t&&C.U).ka(t,"")
$.b2=t
$.jK=t.createRange()
t=$.b2
t.toString
t=t.createElement("base")
H.d(t,"$ic5")
t.href=u.baseURI
u=$.b2.head;(u&&C.W).G(u,t)}u=$.b2
if(u.body==null){u.toString
t=u.createElement("body")
u.body=H.d(t,"$ibg")}u=$.b2
if(!!this.$ibg)s=u.body
else{t=a.tagName
u.toString
s=u.createElement(t)
u=$.b2.body;(u&&C.p).G(u,s)}if("createContextualFragment" in window.Range.prototype&&!C.a.Y(C.a8,a.tagName)){u=$.jK;(u&&C.N).fE(u,s)
u=$.jK
r=(u&&C.N).k8(u,b)}else{s.innerHTML=b
r=$.b2.createDocumentFragment()
for(u=J.a5(r);t=s.firstChild,t!=null;)u.G(r,t)}u=$.b2.body
if(s==null?u!=null:s!==u)J.kl(s)
c.dz(r)
C.z.jO(document,r)
return r},
k9:function(a,b,c){return this.an(a,b,c,null)},
fH:function(a,b,c,d){a.textContent=null
this.G(a,this.an(a,b,c,d))},
fG:function(a,b){return this.fH(a,b,null,null)},
b4:function(a,b){return a.getAttribute(b)},
iN:function(a,b){return a.removeAttribute(b)},
fF:function(a,b,c){return a.setAttribute(b,c)},
$iP:1,
gl9:function(a){return a.tagName}}
W.eX.prototype={
$1:function(a){return!!J.R(H.d(a,"$iC")).$iP},
$S:25}
W.n.prototype={$in:1}
W.bF.prototype={
he:function(a,b,c,d){return a.addEventListener(b,H.bY(H.k(c,{func:1,args:[W.n]}),1),!1)},
$ibF:1}
W.f6.prototype={
gm:function(a){return a.length}}
W.dh.prototype={}
W.di.prototype={
iT:function(a,b,c,d){return a.replaceState(b,c,d)},
gm:function(a){return a.length}}
W.bH.prototype={
gm:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.bI(b,a,null,null,null))
return a[b]},
q:function(a,b,c){H.d(c,"$iC")
throw H.c(P.Z("Cannot assign element of immutable List."))},
ag:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$iaI:1,
$aaI:function(){return[W.C]},
$aV:function(){return[W.C]},
$il:1,
$al:function(){return[W.C]},
$ia:1,
$aa:function(){return[W.C]},
$ibH:1,
$aav:function(){return[W.C]}}
W.dj.prototype={}
W.b3.prototype={$ib3:1,
gex:function(a){return a.data}}
W.cg.prototype={$icg:1,$ikq:1}
W.ch.prototype={$ich:1}
W.aR.prototype={$iaR:1}
W.dq.prototype={}
W.dt.prototype={
i:function(a){return String(a)},
$idt:1}
W.ck.prototype={}
W.ab.prototype={$iab:1}
W.am.prototype={
gaS:function(a){var u,t
u=this.a
t=u.childNodes.length
if(t===0)throw H.c(P.kP("No elements"))
if(t>1)throw H.c(P.kP("More than one element"))
return u.firstChild},
af:function(a,b){var u,t,s,r,q
H.h(b,"$il",[W.C],"$al")
u=b.a
t=this.a
if(u!==t)for(s=u.childNodes.length,r=J.a5(t),q=0;q<s;++q)r.G(t,u.firstChild)
return},
q:function(a,b,c){var u,t
H.d(c,"$iC")
u=this.a
t=u.childNodes
if(b<0||b>=t.length)return H.e(t,b)
J.jD(u,c,t[b])},
gV:function(a){var u=this.a.childNodes
return new W.df(u,u.length,-1,[H.cY(C.ac,u,"av",0)])},
gm:function(a){return this.a.childNodes.length},
k:function(a,b){var u=this.a.childNodes
if(b<0||b>=u.length)return H.e(u,b)
return u[b]},
$aV:function(){return[W.C]},
$al:function(){return[W.C]},
$aa:function(){return[W.C]}}
W.C.prototype={
l_:function(a){var u=a.parentNode
if(u!=null)J.eC(u,a)},
l3:function(a,b){var u,t
try{u=a.parentNode
J.jD(u,b,a)}catch(t){H.ad(t)}return a},
i:function(a){var u=a.nodeValue
return u==null?this.fL(a):u},
G:function(a,b){return a.appendChild(H.d(b,"$iC"))},
iO:function(a,b){return a.removeChild(b)},
iS:function(a,b,c){return a.replaceChild(b,c)},
$iC:1}
W.cn.prototype={
gm:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.bI(b,a,null,null,null))
return a[b]},
q:function(a,b,c){H.d(c,"$iC")
throw H.c(P.Z("Cannot assign element of immutable List."))},
ag:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$iaI:1,
$aaI:function(){return[W.C]},
$aV:function(){return[W.C]},
$il:1,
$al:function(){return[W.C]},
$ia:1,
$aa:function(){return[W.C]},
$aav:function(){return[W.C]}}
W.dJ.prototype={
k8:function(a,b){return a.createContextualFragment(b)},
fE:function(a,b){return a.selectNodeContents(b)}}
W.fZ.prototype={
gm:function(a){return a.length}}
W.aV.prototype={$iaV:1}
W.dT.prototype={
an:function(a,b,c,d){var u,t
if("createContextualFragment" in window.Range.prototype)return this.ca(a,b,c,d)
u=W.mk("<table>"+b+"</table>",c,d)
t=document.createDocumentFragment()
t.toString
u.toString
new W.am(t).af(0,new W.am(u))
return t},
hE:function(a,b){return a.insertRow(b)}}
W.dU.prototype={
an:function(a,b,c,d){var u,t,s,r
if("createContextualFragment" in window.Range.prototype)return this.ca(a,b,c,d)
u=document
t=u.createDocumentFragment()
u=C.o.an(u.createElement("table"),b,c,d)
u.toString
u=new W.am(u)
s=u.gaS(u)
s.toString
u=new W.am(s)
r=u.gaS(u)
t.toString
r.toString
new W.am(t).af(0,new W.am(r))
return t},
e0:function(a,b){return a.insertCell(b)}}
W.he.prototype={
an:function(a,b,c,d){var u,t,s
if("createContextualFragment" in window.Range.prototype)return this.ca(a,b,c,d)
u=document
t=u.createDocumentFragment()
u=C.o.an(u.createElement("table"),b,c,d)
u.toString
u=new W.am(u)
s=u.gaS(u)
t.toString
s.toString
new W.am(t).af(0,new W.am(s))
return t}}
W.cv.prototype={$icv:1}
W.aK.prototype={$iaK:1}
W.aL.prototype={$iaL:1}
W.hm.prototype={
gm:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.bI(b,a,null,null,null))
return a[b]},
q:function(a,b,c){H.d(c,"$iaK")
throw H.c(P.Z("Cannot assign element of immutable List."))},
ag:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$iaI:1,
$aaI:function(){return[W.aK]},
$aV:function(){return[W.aK]},
$il:1,
$al:function(){return[W.aK]},
$ia:1,
$aa:function(){return[W.aK]},
$aav:function(){return[W.aK]}}
W.bt.prototype={}
W.hX.prototype={$ikq:1}
W.aZ.prototype={
gkg:function(a){if(a.deltaY!==undefined)return a.deltaY
throw H.c(P.Z("deltaY is not supported"))},
gkf:function(a){if(a.deltaX!==undefined)return a.deltaX
throw H.c(P.Z("deltaX is not supported"))},
$iaZ:1}
W.cK.prototype={
iU:function(a,b){return a.requestAnimationFrame(H.bY(H.k(b,{func:1,ret:-1,args:[P.ag]}),1))},
ht:function(a){if(!!(a.requestAnimationFrame&&a.cancelAnimationFrame))return;(function(b){var u=['ms','moz','webkit','o']
for(var t=0;t<u.length&&!b.requestAnimationFrame;++t){b.requestAnimationFrame=b[u[t]+'RequestAnimationFrame']
b.cancelAnimationFrame=b[u[t]+'CancelAnimationFrame']||b[u[t]+'CancelRequestAnimationFrame']}if(b.requestAnimationFrame&&b.cancelAnimationFrame)return
b.requestAnimationFrame=function(c){return window.setTimeout(function(){c(Date.now())},16)}
b.cancelAnimationFrame=function(c){clearTimeout(c)}})(a)}}
W.cL.prototype={$icL:1}
W.ee.prototype={
i:function(a){return"Rectangle ("+H.j(a.left)+", "+H.j(a.top)+") "+H.j(a.width)+" x "+H.j(a.height)},
D:function(a,b){var u
if(b==null)return!1
if(!H.cW(b,"$iaB",[P.ag],"$aaB"))return!1
u=J.a5(b)
return a.left===u.gbV(b)&&a.top===u.gc1(b)&&a.width===u.gc4(b)&&a.height===u.gbU(b)},
gL:function(a){return W.l7(C.e.gL(a.left),C.e.gL(a.top),C.e.gL(a.width),C.e.gL(a.height))},
gbU:function(a){return a.height},
gc4:function(a){return a.width}}
W.ek.prototype={
gm:function(a){return a.length},
k:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.bI(b,a,null,null,null))
return a[b]},
q:function(a,b,c){H.d(c,"$iC")
throw H.c(P.Z("Cannot assign element of immutable List."))},
ag:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$iaI:1,
$aaI:function(){return[W.C]},
$aV:function(){return[W.C]},
$il:1,
$al:function(){return[W.C]},
$ia:1,
$aa:function(){return[W.C]},
$aav:function(){return[W.C]}}
W.i2.prototype={
a1:function(a,b){var u,t,s,r,q,p
H.k(b,{func:1,ret:-1,args:[P.f,P.f]})
for(u=this.gaC(),t=u.length,s=this.a,r=J.a5(s),q=0;q<u.length;u.length===t||(0,H.A)(u),++q){p=u[q]
b.$2(p,r.b4(s,p))}},
gaC:function(){var u,t,s,r,q
u=this.a.attributes
t=H.b([],[P.f])
for(s=u.length,r=0;r<s;++r){if(r>=u.length)return H.e(u,r)
q=H.d(u[r],"$icL")
if(q.namespaceURI==null)C.a.h(t,q.name)}return t},
$abK:function(){return[P.f,P.f]},
$aI:function(){return[P.f,P.f]}}
W.i5.prototype={
k:function(a,b){return J.jE(this.a,H.F(b))},
q:function(a,b,c){J.m9(this.a,b,c)},
gm:function(a){return this.gaC().length}}
W.i6.prototype={}
W.jW.prototype={}
W.i7.prototype={}
W.i8.prototype={
$1:function(a){return this.a.$1(H.d(a,"$in"))},
$S:36}
W.bv.prototype={
fY:function(a){var u,t
u=$.kh()
if(u.gkD(u)){for(t=0;t<262;++t)u.q(0,C.a7[t],W.nT())
for(t=0;t<12;++t)u.q(0,C.B[t],W.nU())}},
b_:function(a){return $.lX().Y(0,W.cc(a))},
az:function(a,b,c){var u,t,s
u=W.cc(a)
t=$.kh()
s=t.k(0,H.j(u)+"::"+b)
if(s==null)s=t.k(0,"*::"+b)
if(s==null)return!1
return H.k3(s.$4(a,b,c,this))},
$iay:1}
W.av.prototype={
gV:function(a){return new W.df(a,this.gm(a),-1,[H.cY(this,a,"av",0)])}}
W.dE.prototype={
b_:function(a){return C.a.en(this.a,new W.fJ(a))},
az:function(a,b,c){return C.a.en(this.a,new W.fI(a,b,c))},
$iay:1}
W.fJ.prototype={
$1:function(a){return H.d(a,"$iay").b_(this.a)},
$S:27}
W.fI.prototype={
$1:function(a){return H.d(a,"$iay").az(this.a,this.b,this.c)},
$S:27}
W.en.prototype={
h7:function(a,b,c,d){var u,t,s
this.a.af(0,c)
u=b.c3(0,new W.iu())
t=b.c3(0,new W.iv())
this.b.af(0,u)
s=this.c
s.af(0,C.I)
s.af(0,t)},
b_:function(a){return this.a.Y(0,W.cc(a))},
az:function(a,b,c){var u,t
u=W.cc(a)
t=this.c
if(t.Y(0,H.j(u)+"::"+b))return this.d.jP(c)
else if(t.Y(0,"*::"+b))return this.d.jP(c)
else{t=this.b
if(t.Y(0,H.j(u)+"::"+b))return!0
else if(t.Y(0,"*::"+b))return!0
else if(t.Y(0,H.j(u)+"::*"))return!0
else if(t.Y(0,"*::*"))return!0}return!1},
$iay:1}
W.iu.prototype={
$1:function(a){return!C.a.Y(C.B,H.F(a))},
$S:28}
W.iv.prototype={
$1:function(a){return C.a.Y(C.B,H.F(a))},
$S:28}
W.iB.prototype={
az:function(a,b,c){if(this.fQ(a,b,c))return!0
if(b==="template"&&c==="")return!0
if(J.jE(a,"template")==="")return this.e.Y(0,b)
return!1}}
W.iC.prototype={
$1:function(a){return"TEMPLATE::"+H.j(H.F(a))},
$S:21}
W.iA.prototype={
b_:function(a){var u=J.R(a)
if(!!u.$icq)return!1
u=!!u.$io
if(u&&W.cc(a)==="foreignObject")return!1
if(u)return!0
return!1},
az:function(a,b,c){if(b==="is"||C.c.aa(b,"on"))return!1
return this.b_(a)},
$iay:1}
W.df.prototype={
F:function(){var u,t
u=this.c+1
t=this.b
if(u<t){this.se_(J.m1(this.a,u))
this.c=u
return!0}this.se_(null)
this.c=t
return!1},
gM:function(){return this.d},
se_:function(a){this.d=H.z(a,H.r(this,0))},
$iaQ:1}
W.ay.prototype={}
W.is.prototype={$iow:1}
W.ev.prototype={
dz:function(a){new W.iN(this).$2(a,null)},
bb:function(a,b){if(b==null)J.kl(a)
else J.eC(b,a)},
iZ:function(a,b){var u,t,s,r,q,p,o,n
u=!0
t=null
s=null
try{t=J.m6(a)
s=J.jE(t.a,"is")
r=function(c){if(!(c.attributes instanceof NamedNodeMap))return true
var m=c.childNodes
if(c.lastChild&&c.lastChild!==m[m.length-1])return true
if(c.children)if(!(c.children instanceof HTMLCollection||c.children instanceof NodeList))return true
var l=0
if(c.children)l=c.children.length
for(var k=0;k<l;k++){var j=c.children[k]
if(j.id=='attributes'||j.name=='attributes'||j.id=='lastChild'||j.name=='lastChild'||j.id=='children'||j.name=='children')return true}return false}(a)
u=r?!0:!(a.attributes instanceof NamedNodeMap)}catch(o){H.ad(o)}q="element unprintable"
try{q=J.ao(a)}catch(o){H.ad(o)}try{p=W.cc(a)
this.iY(H.d(a,"$iP"),b,u,q,p,H.d(t,"$iI"),H.F(s))}catch(o){if(H.ad(o) instanceof P.aG)throw o
else{this.bb(a,b)
window
n="Removing corrupted element "+H.j(q)
if(typeof console!="undefined")window.console.warn(n)}}},
iY:function(a,b,c,d,e,f,g){var u,t,s,r,q,p
if(c){this.bb(a,b)
window
u="Removing element due to corrupted attributes on <"+d+">"
if(typeof console!="undefined")window.console.warn(u)
return}if(!this.a.b_(a)){this.bb(a,b)
window
u="Removing disallowed element <"+H.j(e)+"> from "+H.j(b)
if(typeof console!="undefined")window.console.warn(u)
return}if(g!=null)if(!this.a.az(a,"is",g)){this.bb(a,b)
window
u="Removing disallowed type extension <"+H.j(e)+' is="'+g+'">'
if(typeof console!="undefined")window.console.warn(u)
return}u=f.gaC()
t=H.b(u.slice(0),[H.r(u,0)])
for(s=f.gaC().length-1,u=f.a,r=J.a5(u);s>=0;--s){if(s>=t.length)return H.e(t,s)
q=t[s]
if(!this.a.az(a,J.mb(q),r.b4(u,q))){window
p="Removing disallowed attribute <"+H.j(e)+" "+q+'="'+H.j(r.b4(u,q))+'">'
if(typeof console!="undefined")window.console.warn(p)
r.b4(u,q)
r.iN(u,q)}}if(!!J.R(a).$icv)this.dz(a.content)},
$ioh:1}
W.iN.prototype={
$2:function(a,b){var u,t,s,r,q,p
s=this.a
switch(a.nodeType){case 1:s.iZ(a,b)
break
case 8:case 11:case 3:case 4:break
default:s.bb(a,b)}u=a.lastChild
for(s=a==null;null!=u;){t=null
try{t=u.previousSibling}catch(r){H.ad(r)
q=H.d(u,"$iC")
if(s){p=q.parentNode
if(p!=null)J.eC(p,q)}else J.eC(a,q)
u=null
t=a.lastChild}if(u!=null)this.$2(u,a)
u=H.d(t,"$iC")}},
$S:35}
W.ed.prototype={}
W.eg.prototype={}
W.eh.prototype={}
W.el.prototype={}
W.em.prototype={}
W.eq.prototype={}
W.er.prototype={}
W.ew.prototype={}
W.ex.prototype={}
P.ix.prototype={
eX:function(a){var u,t,s
u=this.a
t=u.length
for(s=0;s<t;++s)if(u[s]===a)return s
C.a.h(u,a)
C.a.h(this.b,null)
return t},
dt:function(a){var u,t,s,r
u={}
if(a==null)return a
if(typeof a==="boolean")return a
if(typeof a==="number")return a
if(typeof a==="string")return a
t=J.R(a)
if(!!t.$iaj)return new Date(a.a)
if(!!t.$imP)throw H.c(P.hA("structured clone of RegExp"))
if(!!t.$ib3)return a
if(!!t.$ibM)return a
if(!!t.$iI){s=this.eX(a)
t=this.b
if(s>=t.length)return H.e(t,s)
r=t[s]
u.a=r
if(r!=null)return r
r={}
u.a=r
C.a.q(t,s,r)
a.a1(0,new P.iz(u,this))
return u.a}if(!!t.$ia){s=this.eX(a)
u=this.b
if(s>=u.length)return H.e(u,s)
r=u[s]
if(r!=null)return r
return this.k7(a,s)}throw H.c(P.hA("structured clone of other type"))},
k7:function(a,b){var u,t,s,r
u=J.c0(a)
t=u.gm(a)
s=new Array(t)
C.a.q(this.b,b,s)
for(r=0;r<t;++r)C.a.q(s,r,this.dt(u.k(a,r)))
return s}}
P.iz.prototype={
$2:function(a,b){this.a.a[a]=this.b.dt(b)},
$S:7}
P.es.prototype={$ib3:1,
gex:function(a){return this.a}}
P.iY.prototype={
$2:function(a,b){this.a[a]=b},
$S:7}
P.iy.prototype={}
P.f3.prototype={
gbx:function(){var u,t,s
u=this.b
t=H.a9(u,"V",0)
s=W.P
return new H.fv(new H.cJ(u,H.k(new P.f4(),{func:1,ret:P.M,args:[t]}),[t]),H.k(new P.f5(),{func:1,ret:s,args:[t]}),[t,s])},
q:function(a,b,c){var u
H.d(c,"$iP")
u=this.gbx()
J.m8(u.b.$1(J.eD(u.a,b)),c)},
h:function(a,b){J.kj(this.b.a,b)},
gm:function(a){return J.aF(this.gbx().a)},
k:function(a,b){var u=this.gbx()
return u.b.$1(J.eD(u.a,b))},
gV:function(a){var u=P.my(this.gbx(),!1,W.P)
return new J.ap(u,u.length,0,[H.r(u,0)])},
$aV:function(){return[W.P]},
$al:function(){return[W.P]},
$aa:function(){return[W.P]}}
P.f4.prototype={
$1:function(a){return!!J.R(H.d(a,"$iC")).$iP},
$S:25}
P.f5.prototype={
$1:function(a){return H.i(H.d(a,"$iC"),"$iP")},
$S:54}
P.im.prototype={
gc_:function(a){var u=this.a
if(typeof u!=="number")return u.n()
return H.z(u+this.c,H.r(this,0))},
ger:function(a){var u=this.b
if(typeof u!=="number")return u.n()
return H.z(u+this.d,H.r(this,0))},
i:function(a){return"Rectangle ("+H.j(this.a)+", "+H.j(this.b)+") "+this.c+" x "+this.d},
D:function(a,b){var u,t,s,r
if(b==null)return!1
if(H.cW(b,"$iaB",[P.ag],"$aaB")){u=this.a
t=J.a5(b)
if(u==t.gbV(b)){s=this.b
if(s==t.gc1(b)){if(typeof u!=="number")return u.n()
r=H.r(this,0)
if(H.z(u+this.c,r)===t.gc_(b)){if(typeof s!=="number")return s.n()
u=H.z(s+this.d,r)===t.ger(b)}else u=!1}else u=!1}else u=!1}else u=!1
return u},
gL:function(a){var u,t,s,r,q
u=this.a
t=J.d1(u)
s=this.b
r=J.d1(s)
if(typeof u!=="number")return u.n()
q=H.r(this,0)
u=C.f.gL(H.z(u+this.c,q))
if(typeof s!=="number")return s.n()
q=C.f.gL(H.z(s+this.d,q))
return P.nd(P.ik(P.ik(P.ik(P.ik(0,t),r),u),q))}}
P.aB.prototype={
gbV:function(a){return this.a},
gc1:function(a){return this.b},
gc4:function(a){return this.c},
gbU:function(a){return this.d}}
P.cq.prototype={$icq:1}
P.o.prototype={
gcT:function(a){return new P.f3(a,new W.am(a))},
an:function(a,b,c,d){var u,t,s,r,q,p
u=H.b([],[W.ay])
C.a.h(u,W.l6(null))
C.a.h(u,W.l8())
C.a.h(u,new W.iA())
c=new W.ev(new W.dE(u))
t='<svg version="1.1">'+b+"</svg>"
u=document
s=u.body
r=(s&&C.p).k9(s,t,c)
q=u.createDocumentFragment()
r.toString
u=new W.am(r)
p=u.gaS(u)
for(u=J.a5(q);s=p.firstChild,s!=null;)u.G(q,s)
return q},
$io:1}
P.N.prototype={$il:1,
$al:function(){return[P.m]},
$ia:1,
$aa:function(){return[P.m]},
$imZ:1}
P.d5.prototype={$id5:1}
P.dg.prototype={$idg:1}
P.dI.prototype={$idI:1}
P.bR.prototype={
cI:function(a,b){return a.activeTexture(b)},
eo:function(a,b,c){return a.attachShader(b,c)},
aA:function(a,b,c){return a.bindBuffer(b,c)},
jU:function(a,b,c){return a.bindFramebuffer(b,c)},
aK:function(a,b,c){return a.bindTexture(b,c)},
jV:function(a,b,c){return a.blendFunc(b,c)},
es:function(a,b,c,d){return a.bufferData(b,c,d)},
jY:function(a,b){return a.clear(b)},
jZ:function(a,b,c,d,e){return a.clearColor(b,c,d,e)},
k_:function(a,b){return a.clearDepth(b)},
k5:function(a,b){return a.compileShader(b)},
kb:function(a,b){return a.createShader(b)},
kd:function(a,b){return a.deleteProgram(b)},
ke:function(a,b){return a.deleteShader(b)},
kh:function(a,b){return a.depthFunc(b)},
ki:function(a,b){return a.disable(b)},
ez:function(a,b){return a.disableVertexAttribArray(b)},
kj:function(a,b,c,d,e){return a.drawElements(b,c,H.a6(d),H.a6(e))},
cY:function(a,b){return a.enable(b)},
eB:function(a,b){return a.enableVertexAttribArray(b)},
fq:function(a,b,c){return a.getActiveAttrib(b,c)},
fs:function(a,b,c){return a.getActiveUniform(b,c)},
ft:function(a,b,c){return a.getAttribLocation(b,c)},
dw:function(a,b){return a.getParameter(b)},
fw:function(a,b){return a.getProgramInfoLog(b)},
c7:function(a,b,c){return a.getProgramParameter(b,c)},
fz:function(a,b){return a.getShaderInfoLog(b)},
fA:function(a,b,c){return a.getShaderParameter(b,c)},
fB:function(a,b,c){return a.getUniformLocation(b,c)},
kF:function(a,b){return a.linkProgram(b)},
kY:function(a,b,c){return a.pixelStorei(b,c)},
fJ:function(a,b,c){return a.shaderSource(b,c)},
lb:function(a,b,c,d,e,f,g,h,i,j){var u,t
u=J.R(g)
if(!!u.$ib3)t=!0
else t=!1
if(t){this.j9(a,b,c,d,e,f,P.nJ(g))
return}if(!!u.$icg)u=!0
else u=!1
if(u){this.ja(a,b,c,d,e,f,g)
return}throw H.c(P.d3("Incorrect number or type of arguments"))},
la:function(a,b,c,d,e,f,g){return this.lb(a,b,c,d,e,f,g,null,null,null)},
j9:function(a,b,c,d,e,f,g){return a.texImage2D(b,c,d,e,f,g)},
ja:function(a,b,c,d,e,f,g){return a.texImage2D(b,c,d,e,f,g)},
c0:function(a,b,c,d){return a.texParameteri(b,c,d)},
O:function(a,b,c){return a.uniform1f(b,c)},
U:function(a,b,c){return a.uniform1i(b,c)},
C:function(a,b,c,d,e){return a.uniform3f(b,c,d,e)},
fm:function(a,b,c,d){return a.uniformMatrix3fv(b,!1,d)},
fn:function(a,b,c,d){return a.uniformMatrix4fv(b,!1,d)},
ds:function(a,b){return a.useProgram(b)},
lh:function(a,b,c,d,e,f,g){return a.vertexAttribPointer(b,c,d,!1,f,g)},
li:function(a,b,c,d,e){return a.viewport(b,c,d,e)},
$ibR:1}
P.dM.prototype={$idM:1}
P.dV.prototype={$idV:1}
P.e2.prototype={$ie2:1}
O.a_.prototype={
bv:function(a){this.shI(H.b([],[a]))
this.se8(null)
this.se4(null)
this.se9(null)},
dA:function(a,b,c){var u=H.a9(this,"a_",0)
H.k(b,{func:1,ret:P.M,args:[[P.l,u]]})
u={func:1,ret:-1,args:[P.m,[P.l,u]]}
H.k(a,u)
H.k(c,u)
this.se8(b)
this.se4(a)
this.se9(c)},
b5:function(a,b){return this.dA(a,null,b)},
e7:function(a){var u
H.h(a,"$il",[H.a9(this,"a_",0)],"$al")
u=this.b
if(u!=null)return u.$1(a)
return!0},
dH:function(a,b){var u
H.h(b,"$il",[H.a9(this,"a_",0)],"$al")
u=this.c
if(u!=null)u.$2(a,b)},
gm:function(a){return this.a.length},
gV:function(a){var u=this.a
return new J.ap(u,u.length,0,[H.r(u,0)])},
ag:function(a,b){var u=this.a
if(b<0||b>=u.length)return H.e(u,b)
return u[b]},
h:function(a,b){var u,t,s
u=H.a9(this,"a_",0)
H.z(b,u)
u=[u]
if(this.e7(H.b([b],u))){t=this.a
s=t.length
C.a.h(t,b)
this.dH(s,H.b([b],u))}},
af:function(a,b){var u,t
H.h(b,"$il",[H.a9(this,"a_",0)],"$al")
if(this.e7(b)){u=this.a
t=u.length
C.a.af(u,b)
this.dH(t,b)}},
shI:function(a){this.a=H.h(a,"$ia",[H.a9(this,"a_",0)],"$aa")},
se8:function(a){this.b=H.k(a,{func:1,ret:P.M,args:[[P.l,H.a9(this,"a_",0)]]})},
se4:function(a){this.c=H.k(a,{func:1,ret:-1,args:[P.m,[P.l,H.a9(this,"a_",0)]]})},
se9:function(a){this.d=H.k(a,{func:1,ret:-1,args:[P.m,[P.l,H.a9(this,"a_",0)]]})},
$il:1}
O.cj.prototype={
gm:function(a){return this.a.length},
gu:function(){var u=this.b
if(u==null){u=D.J()
this.b=u}return u},
fW:function(a){var u=this.b
if(u!=null)u.J(a)},
aT:function(){return this.fW(null)},
ga7:function(){var u=this.a
if(u.length>0)return C.a.gaD(u)
else return V.bL()},
bZ:function(a){var u=this.a
if(a==null)C.a.h(u,V.bL())
else C.a.h(u,a)
this.aT()},
aP:function(){var u=this.a
if(u.length>0){u.pop()
this.aT()}},
sck:function(a){this.a=H.h(a,"$ia",[V.aq],"$aa")}}
E.eI.prototype={}
E.ak.prototype={
sac:function(a,b){var u,t,s
u=this.c
if(u!=b){this.c=b
this.d=b
this.e=null
if(u!=null)u.gu().N(0,this.gfa())
t=this.c
if(t!=null)t.gu().h(0,this.gfa())
s=new D.H("shape",u,this.c,this,[F.dN])
s.b=!0
this.b1(s)}},
av:function(a){var u
for(u=this.y.a,u=new J.ap(u,u.length,0,[H.r(u,0)]);u.F();)u.d.av(a)},
ai:function(a){var u,t
u=a.dx
C.a.h(u.a,u.ga7())
u.aT()
a.dh(this.f)
u=a.dy
t=(u&&C.a).gaD(u)
if(t!=null&&this.d!=null)t.fe(a,this)
for(u=this.y.a,u=new J.ap(u,u.length,0,[H.r(u,0)]);u.F();)u.d.ai(a)
a.dg()
a.dx.aP()},
gu:function(){var u=this.z
if(u==null){u=D.J()
this.z=u}return u},
b1:function(a){var u=this.z
if(u!=null)u.J(a)},
a9:function(){return this.b1(null)},
fb:function(a){H.d(a,"$iy")
this.e=null
this.b1(a)},
kP:function(){return this.fb(null)},
f9:function(a){this.b1(H.d(a,"$iy"))},
kM:function(){return this.f9(null)},
kL:function(a,b){var u,t,s,r,q,p,o
H.h(b,"$il",[E.ak],"$al")
for(u=b.length,t=this.gf8(),s={func:1,ret:-1,args:[D.y]},r=[s],q=0;q<b.length;b.length===u||(0,H.A)(b),++q){p=b[q]
if(p!=null){o=p.z
if(o==null){o=new D.bE()
o.sal(null)
o.sb9(null)
o.c=null
o.d=0
p.z=o}H.k(t,s)
if(o.a==null)o.sal(H.b([],r))
o=o.a;(o&&C.a).h(o,t)}}this.a9()},
kO:function(a,b){var u,t
H.h(b,"$il",[E.ak],"$al")
for(u=b.gV(b),t=this.gf8();u.F();)u.gM().gu().N(0,t)
this.a9()},
i:function(a){var u,t
u=this.a
t=u.length
if(t<=0)return"Unnamed entity"
return u},
sfX:function(a,b){this.y=H.h(b,"$ia_",[E.ak],"$aa_")},
$iaU:1}
E.fU.prototype={
fT:function(a,b){var u,t
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
u=new O.cj()
t=[V.aq]
u.sck(H.b([],t))
u.b=null
u.gu().h(0,new E.fV(this))
this.cy=u
u=new O.cj()
u.sck(H.b([],t))
u.b=null
u.gu().h(0,new E.fW(this))
this.db=u
u=new O.cj()
u.sck(H.b([],t))
u.b=null
u.gu().h(0,new E.fX(this))
this.dx=u
this.sj8(H.b([],[O.bs]))
u=this.dy;(u&&C.a).h(u,null)
this.sj4(new H.aJ([P.f,A.cr]))},
gkZ:function(){var u=this.z
if(u==null){u=this.cy.ga7().A(0,this.db.ga7())
this.z=u}return u},
dh:function(a){var u,t
u=this.dy
t=a==null?(u&&C.a).gaD(u):a;(u&&C.a).h(u,t)},
dg:function(){var u=this.dy
if(u.length>1)u.pop()},
em:function(a){var u=a.b
if(u.length===0)throw H.c(P.v("May not cache a shader with no name."))
if(this.fr.bD(u))throw H.c(P.v('Shader cache already contains a shader by the name "'+u+'".'))
this.fr.q(0,u,a)},
sj8:function(a){this.dy=H.h(a,"$ia",[O.bs],"$aa")},
sj4:function(a){this.fr=H.h(a,"$iI",[P.f,A.cr],"$aI")}}
E.fV.prototype={
$1:function(a){var u
H.d(a,"$iy")
u=this.a
u.z=null
u.ch=null},
$S:9}
E.fW.prototype={
$1:function(a){var u
H.d(a,"$iy")
u=this.a
u.z=null
u.Q=null
u.ch=null
u.cx=null},
$S:9}
E.fX.prototype={
$1:function(a){var u
H.d(a,"$iy")
u=this.a
u.ch=null
u.cx=null},
$S:9}
E.dZ.prototype={
dK:function(a){H.d(a,"$iy")
this.fg()},
dJ:function(){return this.dK(null)},
gkx:function(){var u,t,s
u=Date.now()
t=C.f.ab(P.kt(0,0,0,u-this.cx.a,0,0).a,1000)/1000
if(t<=0)return 0
s=this.cy
this.cy=0
this.cx=new P.aj(u,!1)
return s/t},
ec:function(){var u,t,s,r
u=window.devicePixelRatio
t=this.b.clientWidth
if(typeof t!=="number")return t.A()
if(typeof u!=="number")return H.B(u)
s=C.e.d4(t*u)
t=this.b.clientHeight
if(typeof t!=="number")return t.A()
r=C.e.d4(t*u)
t=this.b
if(t.width!==s||t.height!==r){t.width=s
t.height=r
P.kS(C.y,this.gl4())}},
fg:function(){var u,t
if(!this.ch){this.ch=!0
u=window
t=H.k(new E.hi(this),{func:1,ret:-1,args:[P.ag]})
C.P.ht(u)
C.P.iU(u,W.lm(t,P.ag))}},
l2:function(){var u,t,s,r,q
try{++this.cy
this.ch=!1
this.ec()
if(this.d!=null){s=this.e;++s.e
s.r=s.x
r=Date.now()
s.x=new P.aj(r,!1)
s.y=P.kt(0,0,0,r-s.r.a,0,0).a*0.000001
r=s.cy
C.a.sm(r.a,0)
r.aT()
r=s.db
C.a.sm(r.a,0)
r.aT()
r=s.dx
C.a.sm(r.a,0)
r.aT()
r=s.dy;(r&&C.a).sm(r,0)
s=s.dy;(s&&C.a).h(s,null)
this.d.ai(this.e)}s=this.z
if(s!=null)s.J(null)}catch(q){u=H.ad(q)
t=H.c1(q)
P.kc("Error: "+H.j(u))
P.kc("Stack: "+H.j(t))
throw H.c(u)}}}
E.hi.prototype={
$1:function(a){var u
H.o3(a)
u=this.a
if(u.ch){u.ch=!1
u.l2()}},
$S:32}
Z.ea.prototype={$iob:1}
Z.d6.prototype={
a5:function(a){var u,t,s
try{t=a.a
C.b.eB(t,this.e)
C.b.lh(t,this.e,this.b,5126,!1,this.d,this.c)}catch(s){u=H.ad(s)
t=P.v('Failed to bind buffer attribute "'+this.a.i(0)+'": '+H.j(u))
throw H.c(t)}},
i:function(a){return"["+this.a.i(0)+", Size: "+this.b+", Offset: "+this.c+", Stride: "+this.d+", Attr: "+H.j(this.e)+"]"}}
Z.eb.prototype={$ioc:1}
Z.c8.prototype={
aN:function(a){var u,t,s,r
for(u=this.c,t=u.length,s=0;s<t;++s){r=u[s]
if((r.a.a&a.a)!==0)return r}return},
a5:function(a){var u,t
u=this.a
C.b.aA(a.a,u.a,u.b)
for(u=this.c,t=u.length-1;t>=0;--t)u[t].a5(a)},
aR:function(a){var u,t,s
for(u=this.c,t=u.length-1,s=a.a;t>=0;--t)C.b.ez(s,u[t].e)
C.b.aA(s,this.a.a,null)},
ai:function(a){var u,t,s,r,q,p
u=this.b.length
for(t=a.a,s=0;s<u;++s){r=this.b
if(s>=r.length)return H.e(r,s)
q=r[s]
r=q.c
p=r.a
C.b.aA(t,p,r.b)
C.b.kj(t,q.a,q.b,5123,0)
C.b.aA(t,p,null)}},
i:function(a){var u,t,s,r,q,p
u=[P.f]
t=H.b([],u)
for(s=this.b,r=s.length,q=0;q<s.length;s.length===r||(0,H.A)(s),++q)C.a.h(t,s[q].i(0))
p=H.b([],u)
for(u=this.c,s=u.length,q=0;q<s;++q)C.a.h(p,J.ao(u[q]))
return"Buffer:  ["+this.a.i(0)+"]\nIndices: "+C.a.l(t,", ")+"\nAttrs:   "+C.a.l(p,", ")},
shD:function(a){this.b=H.h(a,"$ia",[Z.bn],"$aa")},
$iok:1}
Z.bn.prototype={
i:function(a){return"Type: "+this.a+", Count: "+this.b+", ["+("Instance of '"+H.bO(this.c)+"'")+"]"}}
Z.aY.prototype={
gdC:function(a){var u,t
u=this.a
t=(u&$.aN().a)!==0?3:0
if((u&$.bd().a)!==0)t+=3
if((u&$.bc().a)!==0)t+=3
if((u&$.be().a)!==0)t+=2
if((u&$.bf().a)!==0)t+=3
if((u&$.cZ().a)!==0)t+=3
if((u&$.d_().a)!==0)t+=4
if((u&$.c4().a)!==0)++t
return(u&$.bb().a)!==0?t+4:t},
jR:function(a){var u,t,s
u=$.aN()
t=this.a
if((t&u.a)!==0){if(0===a)return u
s=1}else s=0
u=$.bd()
if((t&u.a)!==0){if(s===a)return u;++s}u=$.bc()
if((t&u.a)!==0){if(s===a)return u;++s}u=$.be()
if((t&u.a)!==0){if(s===a)return u;++s}u=$.bf()
if((t&u.a)!==0){if(s===a)return u;++s}u=$.cZ()
if((t&u.a)!==0){if(s===a)return u;++s}u=$.d_()
if((t&u.a)!==0){if(s===a)return u;++s}u=$.c4()
if((t&u.a)!==0){if(s===a)return u;++s}u=$.bb()
if((t&u.a)!==0)if(s===a)return u
return $.lV()},
D:function(a,b){if(b==null)return!1
if(!(b instanceof Z.aY))return!1
return this.a===b.a},
i:function(a){var u,t
u=H.b([],[P.f])
t=this.a
if((t&$.aN().a)!==0)C.a.h(u,"Pos")
if((t&$.bd().a)!==0)C.a.h(u,"Norm")
if((t&$.bc().a)!==0)C.a.h(u,"Binm")
if((t&$.be().a)!==0)C.a.h(u,"Txt2D")
if((t&$.bf().a)!==0)C.a.h(u,"TxtCube")
if((t&$.cZ().a)!==0)C.a.h(u,"Clr3")
if((t&$.d_().a)!==0)C.a.h(u,"Clr4")
if((t&$.c4().a)!==0)C.a.h(u,"Weight")
if((t&$.bb().a)!==0)C.a.h(u,"Bending")
if(u.length<=0)return"None"
return C.a.l(u,"|")}}
D.eL.prototype={}
D.bE.prototype={
h:function(a,b){var u={func:1,ret:-1,args:[D.y]}
H.k(b,u)
if(this.a==null)this.sal(H.b([],[u]))
u=this.a;(u&&C.a).h(u,b)},
N:function(a,b){var u,t
H.k(b,{func:1,ret:-1,args:[D.y]})
u=this.a
u=u==null?null:C.a.Y(u,b)
if(u===!0){u=this.a
t=(u&&C.a).N(u,b)||!1}else t=!1
u=this.b
u=u==null?null:C.a.Y(u,b)
if(u===!0){u=this.b
t=(u&&C.a).N(u,b)||t}return t},
J:function(a){var u,t,s,r
u={}
u.a=a
t=this.a
s=t==null
r=s?null:t.length===0
if(r!==!1){r=this.b
r=r==null?null:r.length===0
r=r!==!1}else r=!1
if(r)return!1
if(a==null){a=new D.y(null)
a.b=!0
u.a=a
r=a}else r=a
if(this.d>0){if(this.c==null)this.c=r
return!0}if(!s)C.a.a1(t,new D.f0(u))
t=this.b
if(t!=null)C.a.a1(t,new D.f1(u))
u=this.b
if(u!=null)C.a.sm(u,0)
return!0},
kn:function(){return this.J(null)},
l5:function(a,b){var u,t
u=this.d
if(u>0){--u
this.d=u
if(u<=0)u=this.c!=null
else u=!1
if(u){t=this.c
this.c=null
this.J(t)}}},
aE:function(){return this.l5(!0,!1)},
sal:function(a){this.a=H.h(a,"$ia",[{func:1,ret:-1,args:[D.y]}],"$aa")},
sb9:function(a){this.b=H.h(a,"$ia",[{func:1,ret:-1,args:[D.y]}],"$aa")}}
D.f0.prototype={
$1:function(a){var u
H.k(a,{func:1,ret:-1,args:[D.y]})
u=this.a.a
u.b
a.$1(u)},
$S:31}
D.f1.prototype={
$1:function(a){var u
H.k(a,{func:1,ret:-1,args:[D.y]})
u=this.a.a
u.b
a.$1(u)},
$S:31}
D.y.prototype={}
D.bo.prototype={}
D.bp.prototype={}
D.H.prototype={
i:function(a){return"ValueChanged: "+this.c+", "+H.j(this.d)+" => "+H.j(this.e)}}
X.d7.prototype={
D:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.d7))return!1
if(this.a!=b.a)return!1
if(!this.b.D(0,b.b))return!1
return!0},
i:function(a){return this.b.i(0)+H.j(this.a)}}
X.dp.prototype={
D:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.dp))return!1
if(this.a!=b.a)return!1
if(!this.b.D(0,b.b))return!1
return!0},
i:function(a){return this.b.i(0)+H.j(this.a)}}
X.fk.prototype={
kV:function(a){this.c=a.b
this.d.h(0,a.a)
return!1},
kR:function(a){this.c=a.b
this.d.N(0,a.a)
return!1},
siK:function(a){this.d=H.h(a,"$ikO",[P.m],"$akO")}}
X.du.prototype={}
X.fr.prototype={
b8:function(a,b){var u,t,s,r,q,p,o,n
u=new P.aj(Date.now(),!1)
t=this.x
s=b.a
r=this.Q
if(typeof s!=="number")return s.A()
q=b.b
p=this.ch
if(typeof q!=="number")return q.A()
o=new V.a0(t.a+s*r,t.b+q*p)
p=this.a.gb0()
n=new X.b7(a,V.b8(),this.x,this.y,this.z,p,o,u,this)
n.b=!0
this.z=u
this.x=o
return n},
df:function(a,b){this.r=a.a
return!1},
bk:function(a,b){var u,t
u=this.r
t=a.a
if(typeof t!=="number")return t.fD()
if(typeof u!=="number")return u.c5()
this.r=(u&~t)>>>0
return!1},
bj:function(a,b){var u=this.d
if(u==null)return!1
u.J(this.b8(a,b))
return!0},
kW:function(a){var u,t,s,r,q,p,o,n
u=this.e
if(u==null)return!1
t=this.a.gb0()
s=this.x
r=Date.now()
q=a.a
p=this.cx
if(typeof q!=="number")return q.A()
o=a.b
n=this.cy
if(typeof o!=="number")return o.A()
r=new X.cl(new V.Q(q*p,o*n),t,s,new P.aj(r,!1),this)
r.b=!0
u.J(r)
return!0},
ih:function(a,b,c){var u,t,s
if(this.f==null)return
u=new P.aj(Date.now(),!1)
t=this.f
s=new X.du(c,a,this.a.gb0(),b,u,this)
s.b=!0
t.J(s)
this.y=u
this.x=V.b8()}}
X.ax.prototype={
D:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.ax))return!1
if(this.a!==b.a)return!1
if(this.b!=b.b)return!1
if(this.c!=b.c)return!1
return!0},
i:function(a){var u=this.a?"Ctrl+":""
u+=this.b?"Alt+":""
return u+(this.c?"Shift+":"")}}
X.b7.prototype={}
X.fD.prototype={
cg:function(a,b,c){var u,t,s
u=new P.aj(Date.now(),!1)
t=this.a.gb0()
s=new X.b7(a,this.r,this.x,this.y,this.z,t,b,u,this)
s.b=!0
if(c){this.y=u
this.r=b}this.z=u
this.x=b
return s},
df:function(a,b){var u
this.f=a.a
u=this.b
if(u==null)return!1
u.J(this.cg(a,b,!0))
return!0},
bk:function(a,b){var u,t
u=this.f
t=a.a
if(typeof t!=="number")return t.fD()
if(typeof u!=="number")return u.c5()
this.f=(u&~t)>>>0
u=this.c
if(u==null)return!1
u.J(this.cg(a,b,!0))
return!0},
bj:function(a,b){var u=this.d
if(u==null)return!1
u.J(this.cg(a,b,!1))
return!0},
kX:function(a,b){var u,t,s,r,q,p,o
u=this.e
if(u==null)return!1
t=this.a.gb0()
s=Date.now()
r=a.a
q=this.Q
if(typeof r!=="number")return r.A()
p=a.b
o=this.ch
if(typeof p!=="number")return p.A()
s=new X.cl(new V.Q(r*q,p*o),t,b,new P.aj(s,!1),this)
s.b=!0
u.J(s)
return!0},
geA:function(){var u=this.b
if(u==null){u=D.J()
this.b=u}return u},
gc2:function(){var u=this.c
if(u==null){u=D.J()
this.c=u}return u},
gf7:function(){var u=this.d
if(u==null){u=D.J()
this.d=u}return u}}
X.cl.prototype={}
X.fP.prototype={}
X.e0.prototype={}
X.hl.prototype={
b8:function(a,b){var u,t,s,r
H.h(a,"$ia",[V.a0],"$aa")
u=new P.aj(Date.now(),!1)
t=a.length>0?a[0]:V.b8()
s=this.a.gb0()
r=new X.e0(a,this.f,this.r,this.x,this.y,s,t,u,this)
r.b=!0
if(b){this.x=u
this.f=t}this.y=u
this.r=t
return r},
kU:function(a){var u
H.h(a,"$ia",[V.a0],"$aa")
u=this.b
if(u==null)return!1
u.J(this.b8(a,!0))
return!0},
kS:function(a){var u
H.h(a,"$ia",[V.a0],"$aa")
u=this.c
if(u==null)return!1
u.J(this.b8(a,!0))
return!0},
kT:function(a){var u
H.h(a,"$ia",[V.a0],"$aa")
u=this.d
if(u==null)return!1
u.J(this.b8(a,!1))
return!0}}
X.e5.prototype={
gb0:function(){var u=this.a
return V.kM(0,0,C.q.gew(u).c,C.q.gew(u).d)},
dV:function(a){var u,t
u=a.keyCode
t=a.ctrlKey||a.metaKey
return new X.dp(u,new X.ax(t,a.altKey,a.shiftKey))},
aY:function(a){var u,t
u=this.b
t=a.ctrlKey||a.metaKey
u.c=new X.ax(t,a.altKey,a.shiftKey)},
cF:function(a){var u,t
u=this.b
t=a.ctrlKey||a.metaKey
u.c=new X.ax(t,a.altKey,a.shiftKey)},
aJ:function(a){var u,t,s,r,q
u=this.a.getBoundingClientRect()
t=a.pageX
s=a.pageY
r=u.left
if(typeof t!=="number")return t.v()
q=u.top
if(typeof s!=="number")return s.v()
return new V.a0(t-r,s-q)},
ba:function(a){return new V.Q(a.movementX,a.movementY)},
cz:function(a){var u,t,s,r,q,p,o,n
u=this.a.getBoundingClientRect()
t=H.b([],[V.a0])
for(s=a.touches,r=s.length,q=0;q<s.length;s.length===r||(0,H.A)(s),++q){p=s[q]
o=C.e.au(p.pageX)
C.e.au(p.pageY)
n=u.left
C.e.au(p.pageX)
C.a.h(t,new V.a0(o-n,C.e.au(p.pageY)-u.top))}return t},
aG:function(a){var u,t
u=a.buttons
t=a.ctrlKey||a.metaKey
return new X.d7(u,new X.ax(t,a.altKey,a.shiftKey))},
cl:function(a){var u,t,s,r,q,p
u=this.a.getBoundingClientRect()
t=a.pageX
s=a.pageY
r=u.left
if(typeof t!=="number")return t.v()
q=t-r
if(q<0)return!1
t=u.top
if(typeof s!=="number")return s.v()
p=s-t
if(p<0)return!1
return q<u.width&&p<u.height},
i9:function(a){this.f=!0},
hY:function(a){this.f=!1},
i3:function(a){H.d(a,"$iab")
if(this.f&&this.cl(a))a.preventDefault()},
ie:function(a){var u
H.d(a,"$iaR")
if(!this.f)return
u=this.dV(a)
this.b.kV(u)},
ib:function(a){var u
H.d(a,"$iaR")
if(!this.f)return
u=this.dV(a)
this.b.kR(u)},
ij:function(a){var u,t,s,r
H.d(a,"$iab")
u=this.a
u.focus()
this.f=!0
this.aY(a)
if(this.x){t=this.aG(a)
s=this.ba(a)
if(this.d.df(t,s))a.preventDefault()
return}if(this.r){this.y=a
u.requestPointerLock()
return}t=this.aG(a)
r=this.aJ(a)
if(this.c.df(t,r))a.preventDefault()},
io:function(a){var u,t,s
H.d(a,"$iab")
this.aY(a)
u=this.aG(a)
if(this.x){t=this.ba(a)
if(this.d.bk(u,t))a.preventDefault()
return}if(this.r)return
s=this.aJ(a)
if(this.c.bk(u,s))a.preventDefault()},
i7:function(a){var u,t,s
H.d(a,"$iab")
if(!this.cl(a)){this.aY(a)
u=this.aG(a)
if(this.x){t=this.ba(a)
if(this.d.bk(u,t))a.preventDefault()
return}if(this.r)return
s=this.aJ(a)
if(this.c.bk(u,s))a.preventDefault()}},
il:function(a){var u,t,s
H.d(a,"$iab")
this.aY(a)
u=this.aG(a)
if(this.x){t=this.ba(a)
if(this.d.bj(u,t))a.preventDefault()
return}if(this.r)return
s=this.aJ(a)
if(this.c.bj(u,s))a.preventDefault()},
i5:function(a){var u,t,s
H.d(a,"$iab")
if(!this.cl(a)){this.aY(a)
u=this.aG(a)
if(this.x){t=this.ba(a)
if(this.d.bj(u,t))a.preventDefault()
return}if(this.r)return
s=this.aJ(a)
if(this.c.bj(u,s))a.preventDefault()}},
iq:function(a){var u,t
H.d(a,"$iaZ")
this.aY(a)
u=new V.Q((a&&C.O).gkf(a),C.O.gkg(a)).w(0,180)
if(this.x){if(this.d.kW(u))a.preventDefault()
return}if(this.r)return
t=this.aJ(a)
if(this.c.kX(u,t))a.preventDefault()},
is:function(a){var u,t,s
u=document.pointerLockElement===this.a
if(u!==this.x){this.x=u
t=this.aG(this.y)
s=this.aJ(this.y)
this.d.ih(t,s,u)}},
iI:function(a){var u
H.d(a,"$iaL")
this.a.focus()
this.f=!0
this.cF(a)
u=this.cz(a)
if(this.e.kU(u))a.preventDefault()},
iE:function(a){var u
H.d(a,"$iaL")
this.cF(a)
u=this.cz(a)
if(this.e.kS(u))a.preventDefault()},
iG:function(a){var u
H.d(a,"$iaL")
this.cF(a)
u=this.cz(a)
if(this.e.kT(u))a.preventDefault()},
shu:function(a){this.z=H.h(a,"$ia",[[P.ct,P.L]],"$aa")}}
D.bk.prototype={
gu:function(){var u=this.d
if(u==null){u=D.J()
this.d=u}return u},
aF:function(a){var u
H.d(a,"$iy")
u=this.d
if(u!=null)u.J(a)},
h0:function(){return this.aF(null)},
$ia2:1,
$iaU:1}
D.a2.prototype={$iaU:1}
D.dr.prototype={
gu:function(){var u=this.Q
if(u==null){u=D.J()
this.Q=u}return u},
aF:function(a){var u=this.Q
if(u!=null)u.J(a)},
e6:function(a){var u
H.d(a,"$iy")
u=this.ch
if(u!=null)u.J(a)},
ig:function(){return this.e6(null)},
iu:function(a){var u,t,s
H.h(a,"$il",[D.a2],"$al")
for(u=a.length,t=0;t<a.length;a.length===u||(0,H.A)(a),++t){s=a[t]
if(s==null||this.fZ(s))return!1}return!0},
hS:function(a,b){var u,t,s,r,q,p,o,n
u=D.a2
H.h(b,"$il",[u],"$al")
for(t=b.length,s=this.ge5(),r={func:1,ret:-1,args:[D.y]},q=[r],p=0;p<b.length;b.length===t||(0,H.A)(b),++p){o=H.d(b[p],"$ia2")
if(o instanceof D.bk)C.a.h(this.e,o)
n=o.d
if(n==null){n=new D.bE()
n.sal(null)
n.sb9(null)
n.c=null
n.d=0
o.d=n}H.k(s,r)
if(n.a==null)n.sal(H.b([],q))
n=n.a;(n&&C.a).h(n,s)}u=new D.bo(a,b,this,[u])
u.b=!0
this.aF(u)},
iy:function(a,b){var u,t,s,r
u=D.a2
H.h(b,"$il",[u],"$al")
for(t=b.gV(b),s=this.ge5();t.F();){r=t.gM()
C.a.N(this.e,r)
r.gu().N(0,s)}u=new D.bp(a,b,this,[u])
u.b=!0
this.aF(u)},
fZ:function(a){var u=C.a.Y(this.e,a)
return u},
shr:function(a){this.e=H.h(a,"$ia",[D.bk],"$aa")},
siJ:function(a){this.f=H.h(a,"$ia",[D.dH],"$aa")},
sj6:function(a){this.r=H.h(a,"$ia",[D.dQ],"$aa")},
sjj:function(a){this.x=H.h(a,"$ia",[D.dW],"$aa")},
sjk:function(a){this.y=H.h(a,"$ia",[D.dX],"$aa")},
sjl:function(a){this.z=H.h(a,"$ia",[D.dY],"$aa")},
$al:function(){return[D.a2]},
$aa_:function(){return[D.a2]}}
D.dH.prototype={$ia2:1,$iaU:1}
D.dQ.prototype={$ia2:1,$iaU:1}
D.dW.prototype={$ia2:1,$iaU:1}
D.dX.prototype={$ia2:1,$iaU:1}
D.dY.prototype={$ia2:1,$iaU:1}
V.t.prototype={
n:function(a,b){var u,t,s
u=C.e.n(this.a,b.gdk())
t=C.e.n(this.b,b.gc8())
s=C.e.n(this.c,b.gcP())
if(u<0)u=0
else if(u>1)u=1
if(t<0)t=0
else if(t>1)t=1
if(s<0)s=0
else if(s>1)s=1
return new V.t(u,t,s)},
v:function(a,b){var u,t,s
u=C.e.v(this.a,b.gdk())
t=C.e.v(this.b,b.gc8())
s=C.e.v(this.c,b.gcP())
if(u<0)u=0
else if(u>1)u=1
if(t<0)t=0
else if(t>1)t=1
if(s<0)s=0
else if(s>1)s=1
return new V.t(u,t,s)},
D:function(a,b){var u,t
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.t))return!1
u=b.a
t=$.O().a
if(!(Math.abs(u-this.a)<t))return!1
if(!(Math.abs(b.b-this.b)<t))return!1
if(!(Math.abs(b.c-this.c)<t))return!1
return!0},
i:function(a){return"["+V.T(this.a,3,0)+", "+V.T(this.b,3,0)+", "+V.T(this.c,3,0)+"]"}}
V.ai.prototype={
n:function(a,b){var u,t,s,r
u=C.e.n(this.a,b.gdk())
t=C.e.n(this.b,b.gc8())
s=C.e.n(this.c,b.gcP())
r=C.e.n(this.d,b.gjQ(b))
if(u<0)u=0
else if(u>1)u=1
if(t<0)t=0
else if(t>1)t=1
if(s<0)s=0
else if(s>1)s=1
if(r<0)r=0
else if(r>1)r=1
return new V.ai(u,t,s,r)},
v:function(a,b){var u,t,s,r
u=C.e.v(this.a,b.gdk())
t=C.e.v(this.b,b.gc8())
s=C.e.v(this.c,b.gcP())
r=C.e.v(this.d,b.gjQ(b))
if(u<0)u=0
else if(u>1)u=1
if(t<0)t=0
else if(t>1)t=1
if(s<0)s=0
else if(s>1)s=1
if(r<0)r=0
else if(r>1)r=1
return new V.ai(u,t,s,r)},
D:function(a,b){var u,t
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.ai))return!1
u=b.a
t=$.O().a
if(!(Math.abs(u-this.a)<t))return!1
if(!(Math.abs(b.b-this.b)<t))return!1
if(!(Math.abs(b.c-this.c)<t))return!1
if(!(Math.abs(b.d-this.d)<t))return!1
return!0},
i:function(a){return"["+V.T(this.a,3,0)+", "+V.T(this.b,3,0)+", "+V.T(this.c,3,0)+", "+V.T(this.d,3,0)+"]"}}
V.eZ.prototype={}
V.dz.prototype={
aj:function(a,b){var u=H.b([this.a,this.d,this.r,this.b,this.e,this.x,this.c,this.f,this.y],[P.p])
return u},
D:function(a,b){var u,t
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.dz))return!1
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
return!0},
i:function(a){var u,t,s,r,q,p,o,n
u=[P.p]
t=V.c_(H.b([this.a,this.d,this.r],u),3,0)
s=V.c_(H.b([this.b,this.e,this.x],u),3,0)
r=V.c_(H.b([this.c,this.f,this.y],u),3,0)
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
V.aq.prototype={
aj:function(a,b){var u=H.b([this.a,this.e,this.y,this.cx,this.b,this.f,this.z,this.cy,this.c,this.r,this.Q,this.db,this.d,this.x,this.ch,this.dx],[P.p])
return u},
d8:function(){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0
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
if(Math.abs(a7-0)<$.O().a)return V.bL()
a8=1/a7
a9=-r
b0=-d
return V.aT((t*a6-p*a5+m*a4)*a8,(-s*a6+o*a5-l*a4)*a8,(f*h-b*i+a1*j)*a8,(-e*h+a*i-a2*j)*a8,(a9*a6+p*a3-m*a0)*a8,(u*a6-o*a3+l*a0)*a8,(b0*h+b*k-a1*n)*a8,(g*h-a*k+a2*n)*a8,(r*a5-t*a3+m*c)*a8,(-u*a5+s*a3-l*c)*a8,(d*i-f*k+a1*q)*a8,(-g*i+e*k-a2*q)*a8,(a9*a4+t*a0-p*c)*a8,(u*a4-s*a0+o*c)*a8,(b0*j+f*n-b*q)*a8,(g*j-e*n+a*q)*a8)},
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
return V.aT(u*t+s*r+q*p+o*n,u*m+s*l+q*k+o*j,u*i+s*h+q*g+o*f,u*e+s*d+q*c+o*b,a*t+a0*r+a1*p+a2*n,a*m+a0*l+a1*k+a2*j,a*i+a0*h+a1*g+a2*f,a*e+a0*d+a1*c+a2*b,a3*t+a4*r+a5*p+a6*n,a3*m+a4*l+a5*k+a6*j,a3*i+a4*h+a5*g+a6*f,a3*e+a4*d+a5*c+a6*b,a7*t+a8*r+a9*p+b0*n,a7*m+a8*l+a9*k+b0*j,a7*i+a8*h+a9*g+b0*f,a7*e+a8*d+a9*c+b0*b)},
dr:function(a){var u,t,s
u=a.a
t=a.b
s=a.c
return new V.D(this.a*u+this.b*t+this.c*s,this.e*u+this.f*t+this.r*s,this.y*u+this.z*t+this.Q*s)},
bq:function(a){var u,t,s
u=a.a
t=a.b
s=a.c
return new V.S(this.a*u+this.b*t+this.c*s+this.d,this.e*u+this.f*t+this.r*s+this.x,this.y*u+this.z*t+this.Q*s+this.ch)},
D:function(a,b){var u,t
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.aq))return!1
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
i:function(a){return this.R()},
eY:function(a,b,c){var u,t,s,r,q,p,o,n,m,l
u=[P.p]
t=V.c_(H.b([this.a,this.e,this.y,this.cx],u),b,c)
s=V.c_(H.b([this.b,this.f,this.z,this.cy],u),b,c)
r=V.c_(H.b([this.c,this.r,this.Q,this.db],u),b,c)
q=V.c_(H.b([this.d,this.x,this.ch,this.dx],u),b,c)
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
R:function(){return this.eY("",3,0)},
I:function(a){return this.eY(a,3,0)}}
V.a0.prototype={
n:function(a,b){return new V.a0(this.a+b.a,this.b+b.b)},
v:function(a,b){return new V.a0(this.a-b.a,this.b-b.b)},
D:function(a,b){var u,t
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.a0))return!1
u=b.a
t=$.O().a
if(!(Math.abs(u-this.a)<t))return!1
if(!(Math.abs(b.b-this.b)<t))return!1
return!0},
i:function(a){return"["+V.T(this.a,3,0)+", "+V.T(this.b,3,0)+"]"}}
V.S.prototype={
n:function(a,b){return new V.S(this.a+b.a,this.b+b.b,this.c+b.c)},
v:function(a,b){return new V.S(this.a-b.a,this.b-b.b,this.c-b.c)},
A:function(a,b){return new V.S(this.a*b,this.b*b,this.c*b)},
D:function(a,b){var u,t
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.S))return!1
u=b.a
t=$.O().a
if(!(Math.abs(u-this.a)<t))return!1
if(!(Math.abs(b.b-this.b)<t))return!1
if(!(Math.abs(b.c-this.c)<t))return!1
return!0},
i:function(a){return"["+V.T(this.a,3,0)+", "+V.T(this.b,3,0)+", "+V.T(this.c,3,0)+"]"}}
V.as.prototype={
n:function(a,b){return new V.as(C.e.n(this.a,b.glk(b)),C.e.n(this.b,b.gll(b)),C.e.n(this.c,b.glm(b)),C.e.n(this.d,b.glj()))},
v:function(a,b){return new V.as(C.e.v(this.a,b.glk(b)),C.e.v(this.b,b.gll(b)),C.e.v(this.c,b.glm(b)),C.e.v(this.d,b.glj()))},
D:function(a,b){var u,t
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.as))return!1
u=b.a
t=$.O().a
if(!(Math.abs(u-this.a)<t))return!1
if(!(Math.abs(b.b-this.b)<t))return!1
if(!(Math.abs(b.c-this.c)<t))return!1
if(!(Math.abs(b.d-this.d)<t))return!1
return!0},
i:function(a){return"["+V.T(this.a,3,0)+", "+V.T(this.b,3,0)+", "+V.T(this.c,3,0)+", "+V.T(this.d,3,0)+"]"}}
V.dL.prototype={
gah:function(){var u,t
u=this.c
t=this.d
if(u>t)return t
else return u},
D:function(a,b){var u,t
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.dL))return!1
u=b.a
t=$.O().a
if(!(Math.abs(u-this.a)<t))return!1
if(!(Math.abs(b.b-this.b)<t))return!1
if(!(Math.abs(b.c-this.c)<t))return!1
if(!(Math.abs(b.d-this.d)<t))return!1
return!0},
i:function(a){return"["+V.T(this.a,3,0)+", "+V.T(this.b,3,0)+", "+V.T(this.c,3,0)+", "+V.T(this.d,3,0)+"]"}}
V.Q.prototype={
d9:function(a){return Math.sqrt(this.H(this))},
H:function(a){var u,t,s,r
u=this.a
t=a.a
if(typeof u!=="number")return u.A()
if(typeof t!=="number")return H.B(t)
s=this.b
r=a.b
if(typeof s!=="number")return s.A()
if(typeof r!=="number")return H.B(r)
return u*t+s*r},
n:function(a,b){var u,t,s
u=this.a
t=b.gkl(b)
if(typeof u!=="number")return u.n()
t=C.e.n(u,t)
u=this.b
s=b.gkm(b)
if(typeof u!=="number")return u.n()
return new V.Q(t,C.e.n(u,s))},
v:function(a,b){var u,t,s
u=this.a
t=b.gkl(b)
if(typeof u!=="number")return u.v()
t=C.e.v(u,t)
u=this.b
s=b.gkm(b)
if(typeof u!=="number")return u.v()
return new V.Q(t,C.e.v(u,s))},
A:function(a,b){var u,t
u=this.a
if(typeof u!=="number")return u.A()
t=this.b
if(typeof t!=="number")return t.A()
return new V.Q(u*b,t*b)},
w:function(a,b){var u,t
if(Math.abs(b-0)<$.O().a){u=$.kZ
if(u==null){u=new V.Q(0,0)
$.kZ=u}return u}u=this.a
if(typeof u!=="number")return u.w()
t=this.b
if(typeof t!=="number")return t.w()
return new V.Q(u/b,t/b)},
D:function(a,b){var u,t,s
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.Q))return!1
u=b.a
t=this.a
s=$.O()
s.toString
if(typeof u!=="number")return u.v()
if(typeof t!=="number")return H.B(t)
s=s.a
if(!(Math.abs(u-t)<s))return!1
u=b.b
t=this.b
if(typeof u!=="number")return u.v()
if(typeof t!=="number")return H.B(t)
if(!(Math.abs(u-t)<s))return!1
return!0},
i:function(a){return"["+V.T(this.a,3,0)+", "+V.T(this.b,3,0)+"]"}}
V.D.prototype={
d9:function(a){return Math.sqrt(this.H(this))},
H:function(a){return this.a*a.a+this.b*a.b+this.c*a.c},
da:function(a,b){var u,t,s
u=this.a
t=this.b
s=this.c
return new V.D(u+b*(a.a-u),t+b*(a.b-t),s+b*(a.c-s))},
aL:function(a){var u,t,s,r,q,p
u=this.b
t=a.c
s=this.c
r=a.b
q=a.a
p=this.a
return new V.D(u*t-s*r,s*q-p*t,p*r-u*q)},
n:function(a,b){return new V.D(this.a+b.a,this.b+b.b,this.c+b.c)},
v:function(a,b){return new V.D(this.a-b.a,this.b-b.b,this.c-b.c)},
W:function(a){return new V.D(-this.a,-this.b,-this.c)},
A:function(a,b){return new V.D(this.a*b,this.b*b,this.c*b)},
w:function(a,b){if(Math.abs(b-0)<$.O().a)return V.cI()
return new V.D(this.a/b,this.b/b,this.c/b)},
f6:function(){var u=$.O().a
if(!(Math.abs(0-this.a)<u))return!1
if(!(Math.abs(0-this.b)<u))return!1
if(!(Math.abs(0-this.c)<u))return!1
return!0},
D:function(a,b){var u,t
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.D))return!1
u=b.a
t=$.O().a
if(!(Math.abs(u-this.a)<t))return!1
if(!(Math.abs(b.b-this.b)<t))return!1
if(!(Math.abs(b.c-this.c)<t))return!1
return!0},
i:function(a){return"["+V.T(this.a,3,0)+", "+V.T(this.b,3,0)+", "+V.T(this.c,3,0)+"]"}}
U.eM.prototype={
cc:function(a){var u=V.oa(a,this.c,this.b)
return u},
gu:function(){var u=this.y
if(u==null){u=D.J()
this.y=u}return u},
T:function(a){var u=this.y
if(u!=null)u.J(a)},
sdu:function(a,b){},
sdc:function(a){var u,t
u=this.b
if(!(Math.abs(u-a)<$.O().a)){this.b=a
if(a<this.c){this.c=a
this.d=a}else{t=this.d
if(a<t)this.d=this.cc(t)}u=new D.H("maximumLocation",u,this.b,this,[P.p])
u.b=!0
this.T(u)}},
sde:function(a){var u,t
u=this.c
if(!(Math.abs(u-a)<$.O().a)){this.c=a
if(this.b<a){this.b=a
this.d=a}else{t=this.d
if(a>t)this.d=this.cc(t)}u=new D.H("minimumLocation",u,this.c,this,[P.p])
u.b=!0
this.T(u)}},
sa6:function(a,b){var u
b=this.cc(b)
u=this.d
if(!(Math.abs(u-b)<$.O().a)){this.d=b
u=new D.H("location",u,b,this,[P.p])
u.b=!0
this.T(u)}},
sdd:function(a){var u,t,s
u=this.e
if(!(Math.abs(u-a)<$.O().a)){this.e=a
t=this.f
s=-a
if(t<s)t=s
else if(t>a)t=a
this.f=t
u=new D.H("maximumVelocity",u,a,this,[P.p])
u.b=!0
this.T(u)}},
sX:function(a){var u,t
u=this.e
t=-u
if(a<t)a=t
else if(a>u)a=u
u=this.f
if(!(Math.abs(u-a)<$.O().a)){this.f=a
u=new D.H("velocity",u,a,this,[P.p])
u.b=!0
this.T(u)}},
scW:function(a){var u
if(a<0)a=0
else if(a>1)a=1
u=this.x
if(!(Math.abs(u-a)<$.O().a)){this.x=a
u=new D.H("dampening",u,a,this,[P.p])
u.b=!0
this.T(u)}},
av:function(a){var u,t,s,r,q
u=this.f
t=$.O().a
if(!(Math.abs(u-0)<t)||!(Math.abs(this.r-0)<t)){s=u+this.r*a
u=this.e
r=-u
if(s<r)s=r
else if(s>u)s=u
this.sa6(0,this.d+s*a)
u=this.x
if(!(Math.abs(u-0)<$.O().a)){q=s*Math.pow(1-u,a)
if(s<0){if(q<s)q=s
else if(q>0)q=0}else if(q<0)q=0
else if(q>s)q=s
s=q}this.sX(s)}}}
U.d9.prototype={
gu:function(){var u=this.b
if(u==null){u=D.J()
this.b=u}return u},
b3:function(a,b){return this.a},
D:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.d9))return!1
return J.U(this.a,b.a)},
i:function(a){return"Constant: "+this.a.I("          ")}}
U.cf.prototype={
gu:function(){var u=this.e
if(u==null){u=D.J()
this.e=u}return u},
T:function(a){var u
H.d(a,"$iy")
u=this.e
if(u!=null)u.J(a)},
ad:function(){return this.T(null)},
hQ:function(a,b){var u,t,s,r,q,p,o,n
u=U.ac
H.h(b,"$il",[u],"$al")
for(t=b.length,s=this.gaU(),r={func:1,ret:-1,args:[D.y]},q=[r],p=0;p<b.length;b.length===t||(0,H.A)(b),++p){o=b[p]
if(o!=null){n=o.gu()
n.toString
H.k(s,r)
if(n.a==null)n.sal(H.b([],q))
n=n.a;(n&&C.a).h(n,s)}}u=new D.bo(a,b,this,[u])
u.b=!0
this.T(u)},
iw:function(a,b){var u,t,s
u=U.ac
H.h(b,"$il",[u],"$al")
for(t=b.gV(b),s=this.gaU();t.F();)t.gM().gu().N(0,s)
u=new D.bp(a,b,this,[u])
u.b=!0
this.T(u)},
b3:function(a,b){var u,t,s,r
u=this.r
t=a.e
if(typeof u!=="number")return u.Z()
if(u<t){this.r=t
u=this.e
if(u!=null)++u.d
for(u=this.a,u=new J.ap(u,u.length,0,[H.r(u,0)]),s=null;u.F();){t=u.d
if(t!=null){r=t.b3(a,b)
if(r!=null)s=s==null?r:r.A(0,s)}}this.f=s==null?V.bL():s
u=this.e
if(u!=null)u.aE()}return this.f},
D:function(a,b){var u,t,s,r
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.cf))return!1
u=this.a.length
for(t=0;t<u;++t){s=this.a
if(t>=s.length)return H.e(s,t)
s=s[t]
r=b.a
if(t>=r.length)return H.e(r,t)
if(!J.U(s,r[t]))return!1}return!0},
i:function(a){return"Group"},
$al:function(){return[U.ac]},
$aa_:function(){return[U.ac]},
$iac:1}
U.ac.prototype={}
U.e6.prototype={
gu:function(){var u=this.cy
if(u==null){u=D.J()
this.cy=u}return u},
T:function(a){var u
H.d(a,"$iy")
u=this.cy
if(u!=null)u.J(a)},
ad:function(){return this.T(null)},
bc:function(a){if(this.a!=null)return!1
this.a=a
a.c.geA().h(0,this.gcm())
this.a.c.gf7().h(0,this.gco())
this.a.c.gc2().h(0,this.gcq())
return!0},
cn:function(a){H.d(a,"$iy")
if(!J.U(this.c,this.a.b.c))return
this.y=!0
this.x=!0
this.z=this.b.d},
cp:function(a){var u,t,s,r,q,p,o
a=H.i(H.d(a,"$iy"),"$ib7")
if(!this.y)return
if(this.x){u=a.d.v(0,a.y)
u=new V.Q(u.a,u.b)
u=u.H(u)
t=this.r
if(typeof t!=="number")return H.B(t)
if(u<t)return
this.x=!1}if(this.d){u=a.c
t=a.d.v(0,a.y)
u=new V.Q(t.a,t.b).A(0,2).w(0,u.gah())
this.Q=u
t=this.b
u=u.a
if(typeof u!=="number")return u.A()
s=this.e
if(typeof s!=="number")return H.B(s)
t.sX(u*10*s)}else{u=a.c
t=a.d
s=t.v(0,a.y)
r=new V.Q(s.a,s.b).A(0,2).w(0,u.gah())
s=this.b
q=r.a
if(typeof q!=="number")return q.W()
p=this.e
if(typeof p!=="number")return H.B(p)
o=this.z
if(typeof o!=="number")return H.B(o)
s.sa6(0,-q*p+o)
this.b.sX(0)
t=t.v(0,a.z)
this.Q=new V.Q(t.a,t.b).A(0,2).w(0,u.gah())}this.ad()},
cr:function(a){var u,t,s
H.d(a,"$iy")
if(!this.y)return
this.y=!1
if(this.x)return
u=this.Q
if(u.H(u)>0.0001){u=this.b
t=this.Q.a
if(typeof t!=="number")return t.A()
s=this.e
if(typeof s!=="number")return H.B(s)
u.sX(t*10*s)
this.ad()}},
b3:function(a,b){var u,t,s,r,q
u=this.ch
t=a.e
if(typeof u!=="number")return u.Z()
if(u<t){this.ch=t
s=a.y
this.b.av(s)
u=this.b.d
r=Math.cos(u)
q=Math.sin(u)
this.cx=V.aT(r,-q,0,0,q,r,0,0,0,0,1,0,0,0,0,1)}return this.cx},
$iac:1}
U.e7.prototype={
gu:function(){var u=this.fx
if(u==null){u=D.J()
this.fx=u}return u},
T:function(a){var u
H.d(a,"$iy")
u=this.fx
if(u!=null)u.J(a)},
ad:function(){return this.T(null)},
bc:function(a){var u,t
if(this.a!=null)return!1
this.a=a
a.c.geA().h(0,this.gcm())
this.a.c.gf7().h(0,this.gco())
this.a.c.gc2().h(0,this.gcq())
u=this.a.d
t=u.f
if(t==null){t=D.J()
u.f=t
u=t}else u=t
u.h(0,this.ghJ())
u=this.a.d
t=u.d
if(t==null){t=D.J()
u.d=t
u=t}else u=t
u.h(0,this.ghL())
u=this.a.e
t=u.b
if(t==null){t=D.J()
u.b=t
u=t}else u=t
u.h(0,this.gjg())
u=this.a.e
t=u.d
if(t==null){t=D.J()
u.d=t
u=t}else u=t
u.h(0,this.gje())
u=this.a.e
t=u.c
if(t==null){t=D.J()
u.c=t
u=t}else u=t
u.h(0,this.gjc())
return!0},
ay:function(a){var u,t
u=a.a
t=a.b
if(this.f){if(typeof u!=="number")return u.W()
u=-u}if(this.r){if(typeof t!=="number")return t.W()
t=-t}return new V.Q(u,t)},
cn:function(a){a=H.i(H.d(a,"$iy"),"$ib7")
if(!J.U(this.d,a.x.b))return
this.cx=!0
this.ch=!0
this.cy=this.c.d
this.db=this.b.d},
cp:function(a){var u,t,s,r,q,p,o
a=H.i(H.d(a,"$iy"),"$ib7")
if(!this.cx)return
if(this.ch){u=a.d.v(0,a.y)
u=new V.Q(u.a,u.b)
u=u.H(u)
t=this.Q
if(typeof t!=="number")return H.B(t)
if(u<t)return
this.ch=!1}if(this.e){u=a.c
t=a.d.v(0,a.y)
u=this.ay(new V.Q(t.a,t.b).A(0,2).w(0,u.gah()))
this.dx=u
t=this.c
u=u.a
if(typeof u!=="number")return u.W()
s=this.y
if(typeof s!=="number")return H.B(s)
t.sX(-u*10*s)
s=this.b
u=this.dx.b
if(typeof u!=="number")return u.W()
t=this.x
if(typeof t!=="number")return H.B(t)
s.sX(-u*10*t)}else{u=a.c
t=a.d
s=t.v(0,a.y)
r=this.ay(new V.Q(s.a,s.b).A(0,2).w(0,u.gah()))
s=this.c
q=r.a
if(typeof q!=="number")return q.W()
p=this.y
if(typeof p!=="number")return H.B(p)
o=this.cy
if(typeof o!=="number")return H.B(o)
s.sa6(0,-q*p+o)
o=this.b
p=r.b
if(typeof p!=="number")return p.W()
q=this.x
if(typeof q!=="number")return H.B(q)
s=this.db
if(typeof s!=="number")return H.B(s)
o.sa6(0,-p*q+s)
this.b.sX(0)
this.c.sX(0)
t=t.v(0,a.z)
this.dx=this.ay(new V.Q(t.a,t.b).A(0,2).w(0,u.gah()))}this.ad()},
cr:function(a){var u,t,s
H.d(a,"$iy")
if(!this.cx)return
this.cx=!1
if(this.ch)return
u=this.dx
if(u.H(u)>0.0001){u=this.c
t=this.dx.a
if(typeof t!=="number")return t.W()
s=this.y
if(typeof s!=="number")return H.B(s)
u.sX(-t*10*s)
s=this.b
t=this.dx.b
if(typeof t!=="number")return t.W()
u=this.x
if(typeof u!=="number")return H.B(u)
s.sX(-t*10*u)
this.ad()}},
hK:function(a){if(H.i(H.d(a,"$iy"),"$idu").x){this.ch=!0
this.cy=this.c.d
this.db=this.b.d}},
hM:function(a){var u,t,s,r,q,p,o
a=H.i(H.d(a,"$iy"),"$ib7")
if(!J.U(this.d,a.x.b))return
u=a.c
t=a.d
s=t.v(0,a.y)
r=this.ay(new V.Q(s.a,s.b).A(0,2).w(0,u.gah()))
s=this.c
q=r.a
if(typeof q!=="number")return q.W()
p=this.y
if(typeof p!=="number")return H.B(p)
o=this.cy
if(typeof o!=="number")return H.B(o)
s.sa6(0,-q*p+o)
o=this.b
p=r.b
if(typeof p!=="number")return p.W()
q=this.x
if(typeof q!=="number")return H.B(q)
s=this.db
if(typeof s!=="number")return H.B(s)
o.sa6(0,-p*q+s)
this.b.sX(0)
this.c.sX(0)
t=t.v(0,a.z)
this.dx=this.ay(new V.Q(t.a,t.b).A(0,2).w(0,u.gah()))
this.ad()},
jh:function(a){H.d(a,"$iy")
this.cx=!0
this.ch=!0
this.cy=this.c.d
this.db=this.b.d},
jf:function(a){var u,t,s,r,q,p,o
a=H.i(H.d(a,"$iy"),"$ie0")
if(!this.cx)return
if(this.ch){u=a.d.v(0,a.y)
u=new V.Q(u.a,u.b)
u=u.H(u)
t=this.Q
if(typeof t!=="number")return H.B(t)
if(u<t)return
this.ch=!1}if(this.e){u=a.c
t=a.d.v(0,a.y)
u=this.ay(new V.Q(t.a,t.b).A(0,2).w(0,u.gah()))
this.dx=u
t=this.c
u=u.a
if(typeof u!=="number")return u.W()
s=this.y
if(typeof s!=="number")return H.B(s)
t.sX(-u*10*s)
s=this.b
u=this.dx.b
if(typeof u!=="number")return u.W()
t=this.x
if(typeof t!=="number")return H.B(t)
s.sX(-u*10*t)}else{u=a.c
t=a.d
s=t.v(0,a.y)
r=this.ay(new V.Q(s.a,s.b).A(0,2).w(0,u.gah()))
s=this.c
q=r.a
if(typeof q!=="number")return q.W()
p=this.y
if(typeof p!=="number")return H.B(p)
o=this.cy
if(typeof o!=="number")return H.B(o)
s.sa6(0,-q*p+o)
o=this.b
p=r.b
if(typeof p!=="number")return p.W()
q=this.x
if(typeof q!=="number")return H.B(q)
s=this.db
if(typeof s!=="number")return H.B(s)
o.sa6(0,-p*q+s)
this.b.sX(0)
this.c.sX(0)
t=t.v(0,a.z)
this.dx=this.ay(new V.Q(t.a,t.b).A(0,2).w(0,u.gah()))}this.ad()},
jd:function(a){var u,t,s
H.d(a,"$iy")
if(!this.cx)return
this.cx=!1
if(this.ch)return
u=this.dx
if(u.H(u)>0.0001){u=this.c
t=this.dx.a
if(typeof t!=="number")return t.W()
s=this.y
if(typeof s!=="number")return H.B(s)
u.sX(-t*10*s)
s=this.b
t=this.dx.b
if(typeof t!=="number")return t.W()
u=this.x
if(typeof u!=="number")return H.B(u)
s.sX(-t*10*u)
this.ad()}},
b3:function(a,b){var u,t,s,r,q
u=this.dy
t=a.e
if(typeof u!=="number")return u.Z()
if(u<t){this.dy=t
s=a.y
this.c.av(s)
this.b.av(s)
u=this.b.d
r=Math.cos(u)
q=Math.sin(u)
u=V.aT(1,0,0,0,0,r,-q,0,0,q,r,0,0,0,0,1)
t=this.c.d
r=Math.cos(t)
q=Math.sin(t)
this.fr=u.A(0,V.aT(r,0,-q,0,0,1,0,0,q,0,r,0,0,0,0,1))}return this.fr},
$iac:1}
U.e8.prototype={
gu:function(){var u=this.r
if(u==null){u=D.J()
this.r=u}return u},
T:function(a){var u=this.r
if(u!=null)u.J(a)},
bc:function(a){var u,t,s
if(this.a!=null)return!1
this.a=a
u=a.c
t=u.e
if(t==null){t=D.J()
u.e=t
u=t}else u=t
t=this.ghN()
u.h(0,t)
u=this.a.d
s=u.e
if(s==null){s=D.J()
u.e=s
u=s}else u=s
u.h(0,t)
return!0},
hO:function(a){var u,t,s,r
H.d(a,"$iy")
if(!J.U(this.b,this.a.b.c))return
H.i(a,"$icl")
u=this.d
t=a.x.b
s=this.c
if(typeof t!=="number")return t.A()
r=u+t*s
if(u!==r){this.d=r
u=new D.H("zoom",u,r,this,[P.p])
u.b=!0
this.T(u)}},
b3:function(a,b){var u,t,s
u=this.e
t=a.e
if(u<t){this.e=t
s=Math.pow(10,this.d)
this.f=V.aT(s,0,0,0,0,s,0,0,0,0,s,0,0,0,0,1)}return this.f},
$iac:1}
M.d8.prototype={
gu:function(){var u=this.f
if(u==null){u=D.J()
this.f=u}return u},
a3:function(a){var u
H.d(a,"$iy")
u=this.f
if(u!=null)u.J(a)},
b6:function(){return this.a3(null)},
iA:function(a,b){var u,t,s,r,q,p,o,n
u=M.az
H.h(b,"$il",[u],"$al")
for(t=b.length,s=this.ga2(),r={func:1,ret:-1,args:[D.y]},q=[r],p=0;p<b.length;b.length===t||(0,H.A)(b),++p){o=b[p]
if(o!=null){n=o.gu()
n.toString
H.k(s,r)
if(n.a==null)n.sal(H.b([],q))
n=n.a;(n&&C.a).h(n,s)}}u=new D.bo(a,b,this,[u])
u.b=!0
this.a3(u)},
iC:function(a,b){var u,t,s
u=M.az
H.h(b,"$il",[u],"$al")
for(t=b.gV(b),s=this.ga2();t.F();)t.gM().gu().N(0,s)
u=new D.bp(a,b,this,[u])
u.b=!0
this.a3(u)},
ai:function(a){var u,t
if(this.e)return
this.e=!0
for(u=this.a,u=new J.ap(u,u.length,0,[H.r(u,0)]);u.F();){t=u.d
if(t!=null)t.ai(a)}this.e=!1},
$al:function(){return[M.az]},
$aa_:function(){return[M.az]},
$iaz:1}
M.da.prototype={
gu:function(){var u=this.f
if(u==null){u=D.J()
this.f=u}return u},
a3:function(a){var u
H.d(a,"$iy")
u=this.f
if(u!=null)u.J(a)},
b6:function(){return this.a3(null)},
sbd:function(a){var u,t
if(a==null)a=new X.fd()
u=this.a
if(u!==a){if(u!=null)u.gu().N(0,this.ga2())
t=this.a
this.a=a
a.gu().h(0,this.ga2())
u=new D.H("camera",t,this.a,this,[X.bz])
u.b=!0
this.a3(u)}},
sbm:function(a,b){var u,t
if(b==null)b=X.jL(!0,!0,!1,null,2000,null,0)
u=this.b
if(u!==b){if(u!=null)u.gu().N(0,this.ga2())
t=this.b
this.b=b
b.gu().h(0,this.ga2())
u=new D.H("target",t,this.b,this,[X.cu])
u.b=!0
this.a3(u)}},
sbn:function(a){var u,t
u=this.c
if(u!=a){if(u!=null)u.gu().N(0,this.ga2())
t=this.c
this.c=a
if(a!=null)a.gu().h(0,this.ga2())
u=new D.H("technique",t,this.c,this,[O.bs])
u.b=!0
this.a3(u)}},
ai:function(a){a.dh(this.c)
this.b.a5(a)
this.a.a5(a)
this.d.av(a)
this.d.ai(a)
this.a.aR(a)
this.b.toString
a.dg()},
$iaz:1}
M.de.prototype={
a3:function(a){var u
H.d(a,"$iy")
u=this.x
if(u!=null)u.J(a)},
b6:function(){return this.a3(null)},
i_:function(a,b){var u,t,s,r,q,p,o,n
u=E.ak
H.h(b,"$il",[u],"$al")
for(t=b.length,s=this.ga2(),r={func:1,ret:-1,args:[D.y]},q=[r],p=0;p<b.length;b.length===t||(0,H.A)(b),++p){o=b[p]
if(o!=null){n=o.z
if(n==null){n=new D.bE()
n.sal(null)
n.sb9(null)
n.c=null
n.d=0
o.z=n}H.k(s,r)
if(n.a==null)n.sal(H.b([],q))
n=n.a;(n&&C.a).h(n,s)}}u=new D.bo(a,b,this,[u])
u.b=!0
this.a3(u)},
i1:function(a,b){var u,t,s
u=E.ak
H.h(b,"$il",[u],"$al")
for(t=b.gV(b),s=this.ga2();t.F();)t.gM().gu().N(0,s)
u=new D.bp(a,b,this,[u])
u.b=!0
this.a3(u)},
sbd:function(a){var u,t
if(a==null)a=X.kF(2000,1.0471975511965976,null,0.1,null)
u=this.a
if(u!==a){if(u!=null)u.gu().N(0,this.ga2())
t=this.a
this.a=a
a.gu().h(0,this.ga2())
u=new D.H("camera",t,this.a,this,[X.bz])
u.b=!0
this.a3(u)}},
sbm:function(a,b){var u,t
u=this.b
if(u!==b){if(u!=null)u.gu().N(0,this.ga2())
t=this.b
this.b=b
b.gu().h(0,this.ga2())
u=new D.H("target",t,this.b,this,[X.cu])
u.b=!0
this.a3(u)}},
sbn:function(a){var u,t
u=this.c
if(u!=a){if(u!=null)u.gu().N(0,this.ga2())
t=this.c
this.c=a
if(a!=null)a.gu().h(0,this.ga2())
u=new D.H("technique",t,this.c,this,[O.bs])
u.b=!0
this.a3(u)}},
gu:function(){var u=this.x
if(u==null){u=D.J()
this.x=u}return u},
ai:function(a){var u
a.dh(this.c)
this.b.a5(a)
this.a.a5(a)
u=this.c
if(u!=null)u.av(a)
for(u=this.d.a,u=new J.ap(u,u.length,0,[H.r(u,0)]);u.F();)u.d.av(a)
for(u=this.d.a,u=new J.ap(u,u.length,0,[H.r(u,0)]);u.F();)u.d.ai(a)
this.a.toString
a.cy.aP()
a.db.aP()
this.b.toString
a.dg()},
shl:function(a,b){this.d=H.h(b,"$ia_",[E.ak],"$aa_")},
$iaz:1}
M.az.prototype={}
A.d4.prototype={}
A.eF.prototype={
k:function(a,b){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<t;++s){r=u[s]
if(r.b===b)return r}return},
ko:function(){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<u.length;u.length===t||(0,H.A)(u),++s){r=u[s]
C.b.eB(r.a,r.c)}},
ey:function(){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<u.length;u.length===t||(0,H.A)(u),++s){r=u[s]
C.b.ez(r.a,r.c)}}}
A.dx.prototype={
fS:function(a6,a7){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5
this.z=a6
u=new P.ae("")
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
a6.jp(u)
a6.jw(u)
a6.jq(u)
a6.jE(u)
a6.jF(u)
a6.jy(u)
a6.jJ(u)
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
u=new P.ae("")
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
q.jt(u)
q.jo(u)
q.jr(u)
q.ju(u)
q.jC(u)
o=q.dy
if(o){m=u.a+="// === Enviromental ===\n"
m+="\n"
u.a=m
m+="uniform samplerCube envSampler;\n"
u.a=m
m+="uniform int nullEnvTxt;\n"
u.a=m
u.a=m+"\n"
q.jA(u)
q.jB(u)}q.jx(u)
m=u.a+="// === Alpha ===\n"
m+="\n"
u.a=m
l=q.y
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
k=H.b([],[P.f])
if(q.b!==C.d)C.a.h(k,"ambient()")
if(q.c!==C.d)C.a.h(k,"diffuse(norm, litVec)")
if(q.d!==C.d)C.a.h(k,"invDiffuse(norm, litVec)")
if(q.e!==C.d)C.a.h(k,"specular(norm, litVec)")
m=u.a+="   return litClr*("+C.a.l(k," + ")+");\n"
m+="}\n"
u.a=m
u.a=m+"\n"
q.js(u)
q.jz(u)
q.jD(u)
q.jG(u)
q.jH(u)
q.jI(u)
q.jv(u)}m=u.a+="// === Main ===\n"
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
j=H.b([],[P.f])
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
i="vec4("+C.a.l(j," + ")+", alpha);"
q=u.a
if(n){q+="   gl_FragColor = colorMat*"+i+"\n"
u.a=q}else{q+="   gl_FragColor = "+i+"\n"
u.a=q}q+="}\n"
u.a=q
this.f5(s.charCodeAt(0)==0?s:s,q.charCodeAt(0)==0?q:q)
this.Q=this.x.k(0,"posAttr")
this.cx=this.x.k(0,"normAttr")
this.ch=this.x.k(0,"binmAttr")
this.cy=this.x.k(0,"txt2DAttr")
this.db=this.x.k(0,"txtCubeAttr")
this.dx=this.x.k(0,"bendAttr")
if(a6.fr)this.id=H.i(this.y.p(0,"invViewMat"),"$iau")
if(t)this.dy=H.i(this.y.p(0,"objMat"),"$iau")
if(r)this.fr=H.i(this.y.p(0,"viewObjMat"),"$iau")
this.fy=H.i(this.y.p(0,"projViewObjMat"),"$iau")
if(a6.x2)this.k1=H.i(this.y.p(0,"txt2DMat"),"$icB")
if(a6.y1)this.k2=H.i(this.y.p(0,"txtCubeMat"),"$iau")
if(a6.y2)this.k3=H.i(this.y.p(0,"colorMat"),"$iau")
this.shh(H.b([],[A.au]))
t=a6.aB
if(t>0){this.k4=H.d(this.y.p(0,"bendMatCount"),"$iK")
for(h=0;h<t;++h){s=this.r1
r=this.y
q="bendValues["+h+"].mat"
g=r.k(0,q)
if(g==null)H.q(P.v("Required uniform value, "+q+", was not defined or used in shader."));(s&&C.a).h(s,H.i(g,"$iau"))}}t=a6.a
if(t!==C.d){this.r2=H.i(this.y.p(0,"emissionClr"),"$iG")
switch(t){case C.d:break
case C.j:break
case C.h:this.rx=H.i(this.y.p(0,"emissionTxt"),"$ial")
this.x1=H.i(this.y.p(0,"nullEmissionTxt"),"$iK")
break
case C.i:this.ry=H.i(this.y.p(0,"emissionTxt"),"$iaf")
this.x1=H.i(this.y.p(0,"nullEmissionTxt"),"$iK")
break}}t=a6.b
if(t!==C.d){this.x2=H.i(this.y.p(0,"ambientClr"),"$iG")
switch(t){case C.d:break
case C.j:break
case C.h:this.y1=H.i(this.y.p(0,"ambientTxt"),"$ial")
this.aB=H.i(this.y.p(0,"nullAmbientTxt"),"$iK")
break
case C.i:this.y2=H.i(this.y.p(0,"ambientTxt"),"$iaf")
this.aB=H.i(this.y.p(0,"nullAmbientTxt"),"$iK")
break}}t=a6.c
if(t!==C.d){this.at=H.i(this.y.p(0,"diffuseClr"),"$iG")
switch(t){case C.d:break
case C.j:break
case C.h:this.bF=H.i(this.y.p(0,"diffuseTxt"),"$ial")
this.bG=H.i(this.y.p(0,"nullDiffuseTxt"),"$iK")
break
case C.i:this.eC=H.i(this.y.p(0,"diffuseTxt"),"$iaf")
this.bG=H.i(this.y.p(0,"nullDiffuseTxt"),"$iK")
break}}t=a6.d
if(t!==C.d){this.bH=H.i(this.y.p(0,"invDiffuseClr"),"$iG")
switch(t){case C.d:break
case C.j:break
case C.h:this.eD=H.i(this.y.p(0,"invDiffuseTxt"),"$ial")
this.bI=H.i(this.y.p(0,"nullInvDiffuseTxt"),"$iK")
break
case C.i:this.eE=H.i(this.y.p(0,"invDiffuseTxt"),"$iaf")
this.bI=H.i(this.y.p(0,"nullInvDiffuseTxt"),"$iK")
break}}t=a6.e
if(t!==C.d){this.bL=H.i(this.y.p(0,"shininess"),"$iX")
this.bJ=H.i(this.y.p(0,"specularClr"),"$iG")
switch(t){case C.d:break
case C.j:break
case C.h:this.eF=H.i(this.y.p(0,"specularTxt"),"$ial")
this.bK=H.i(this.y.p(0,"nullSpecularTxt"),"$iK")
break
case C.i:this.eG=H.i(this.y.p(0,"specularTxt"),"$iaf")
this.bK=H.i(this.y.p(0,"nullSpecularTxt"),"$iK")
break}}switch(a6.f){case C.d:break
case C.j:break
case C.h:this.eH=H.i(this.y.p(0,"bumpTxt"),"$ial")
this.bM=H.i(this.y.p(0,"nullBumpTxt"),"$iK")
break
case C.i:this.eI=H.i(this.y.p(0,"bumpTxt"),"$iaf")
this.bM=H.i(this.y.p(0,"nullBumpTxt"),"$iK")
break}if(a6.dy){this.eJ=H.i(this.y.p(0,"envSampler"),"$iaf")
this.eK=H.i(this.y.p(0,"nullEnvTxt"),"$iK")
t=a6.r
if(t!==C.d){this.bN=H.i(this.y.p(0,"reflectClr"),"$iG")
switch(t){case C.d:break
case C.j:break
case C.h:this.eL=H.i(this.y.p(0,"reflectTxt"),"$ial")
this.bO=H.i(this.y.p(0,"nullReflectTxt"),"$iK")
break
case C.i:this.eM=H.i(this.y.p(0,"reflectTxt"),"$iaf")
this.bO=H.i(this.y.p(0,"nullReflectTxt"),"$iK")
break}}t=a6.x
if(t!==C.d){this.bP=H.i(this.y.p(0,"refraction"),"$iX")
this.bQ=H.i(this.y.p(0,"refractClr"),"$iG")
switch(t){case C.d:break
case C.j:break
case C.h:this.eN=H.i(this.y.p(0,"refractTxt"),"$ial")
this.bR=H.i(this.y.p(0,"nullRefractTxt"),"$iK")
break
case C.i:this.eO=H.i(this.y.p(0,"refractTxt"),"$iaf")
this.bR=H.i(this.y.p(0,"nullRefractTxt"),"$iK")
break}}}t=a6.y
if(t!==C.d){this.bS=H.i(this.y.p(0,"alpha"),"$iX")
switch(t){case C.d:break
case C.j:break
case C.h:this.eP=H.i(this.y.p(0,"alphaTxt"),"$ial")
this.bT=H.i(this.y.p(0,"nullAlphaTxt"),"$iK")
break
case C.i:this.eQ=H.i(this.y.p(0,"alphaTxt"),"$iaf")
this.bT=H.i(this.y.p(0,"nullAlphaTxt"),"$iK")
break}}this.sh1(H.b([],[A.cA]))
this.sh2(H.b([],[A.cC]))
this.sh3(H.b([],[A.cD]))
this.sh4(H.b([],[A.cE]))
this.sh5(H.b([],[A.cF]))
this.sh6(H.b([],[A.cG]))
if(a6.k2){t=a6.z
if(t>0){this.eR=H.d(this.y.p(0,"dirLightCount"),"$iK")
for(h=0;h<t;++h){s=this.y
r="dirLights["+h+"].viewDir"
g=s.k(0,r)
if(g==null)H.q(P.v("Required uniform value, "+r+", was not defined or used in shader."))
H.i(g,"$iG")
s=this.y
r="dirLights["+h+"].color"
f=s.k(0,r)
if(f==null)H.q(P.v("Required uniform value, "+r+", was not defined or used in shader."))
H.i(f,"$iG")
s=this.cZ;(s&&C.a).h(s,new A.cA(h,g,f))}}t=a6.Q
if(t>0){this.eS=H.d(this.y.p(0,"pntLightCount"),"$iK")
for(h=0;h<t;++h){s=this.y
r="pntLights["+h+"].point"
g=s.k(0,r)
if(g==null)H.q(P.v("Required uniform value, "+r+", was not defined or used in shader."))
H.i(g,"$iG")
s=this.y
r="pntLights["+h+"].viewPnt"
f=s.k(0,r)
if(f==null)H.q(P.v("Required uniform value, "+r+", was not defined or used in shader."))
H.i(f,"$iG")
s=this.y
r="pntLights["+h+"].color"
e=s.k(0,r)
if(e==null)H.q(P.v("Required uniform value, "+r+", was not defined or used in shader."))
H.i(e,"$iG")
s=this.y
r="pntLights["+h+"].att0"
d=s.k(0,r)
if(d==null)H.q(P.v("Required uniform value, "+r+", was not defined or used in shader."))
H.i(d,"$iX")
s=this.y
r="pntLights["+h+"].att1"
c=s.k(0,r)
if(c==null)H.q(P.v("Required uniform value, "+r+", was not defined or used in shader."))
H.i(c,"$iX")
s=this.y
r="pntLights["+h+"].att2"
b=s.k(0,r)
if(b==null)H.q(P.v("Required uniform value, "+r+", was not defined or used in shader."))
H.i(b,"$iX")
s=this.d_;(s&&C.a).h(s,new A.cC(h,g,f,e,d,c,b))}}t=a6.ch
if(t>0){this.eT=H.d(this.y.p(0,"spotLightCount"),"$iK")
for(h=0;h<t;++h){s=this.y
r="spotLights["+h+"].objPnt"
g=s.k(0,r)
if(g==null)H.q(P.v("Required uniform value, "+r+", was not defined or used in shader."))
H.i(g,"$iG")
s=this.y
r="spotLights["+h+"].objDir"
f=s.k(0,r)
if(f==null)H.q(P.v("Required uniform value, "+r+", was not defined or used in shader."))
H.i(f,"$iG")
s=this.y
r="spotLights["+h+"].viewPnt"
e=s.k(0,r)
if(e==null)H.q(P.v("Required uniform value, "+r+", was not defined or used in shader."))
H.i(e,"$iG")
s=this.y
r="spotLights["+h+"].color"
d=s.k(0,r)
if(d==null)H.q(P.v("Required uniform value, "+r+", was not defined or used in shader."))
H.i(d,"$iG")
s=this.y
r="spotLights["+h+"].cutoff"
c=s.k(0,r)
if(c==null)H.q(P.v("Required uniform value, "+r+", was not defined or used in shader."))
H.i(c,"$iX")
s=this.y
r="spotLights["+h+"].coneAngle"
b=s.k(0,r)
if(b==null)H.q(P.v("Required uniform value, "+r+", was not defined or used in shader."))
H.i(b,"$iX")
s=this.y
r="spotLights["+h+"].att0"
a=s.k(0,r)
if(a==null)H.q(P.v("Required uniform value, "+r+", was not defined or used in shader."))
H.i(a,"$iX")
s=this.y
r="spotLights["+h+"].att1"
a0=s.k(0,r)
if(a0==null)H.q(P.v("Required uniform value, "+r+", was not defined or used in shader."))
H.i(a0,"$iX")
s=this.y
r="spotLights["+h+"].att2"
a1=s.k(0,r)
if(a1==null)H.q(P.v("Required uniform value, "+r+", was not defined or used in shader."))
H.i(a1,"$iX")
s=this.d0;(s&&C.a).h(s,new A.cD(h,g,f,e,d,c,b,a,a0,a1))}}t=a6.cx
if(t>0){this.eU=H.d(this.y.p(0,"txtDirLightCount"),"$iK")
for(h=0;h<t;++h){s=this.y
r="txtDirLights["+h+"].objUp"
g=s.k(0,r)
if(g==null)H.q(P.v("Required uniform value, "+r+", was not defined or used in shader."))
H.i(g,"$iG")
s=this.y
r="txtDirLights["+h+"].objRight"
f=s.k(0,r)
if(f==null)H.q(P.v("Required uniform value, "+r+", was not defined or used in shader."))
H.i(f,"$iG")
s=this.y
r="txtDirLights["+h+"].objDir"
e=s.k(0,r)
if(e==null)H.q(P.v("Required uniform value, "+r+", was not defined or used in shader."))
H.i(e,"$iG")
s=this.y
r="txtDirLights["+h+"].viewDir"
d=s.k(0,r)
if(d==null)H.q(P.v("Required uniform value, "+r+", was not defined or used in shader."))
H.i(d,"$iG")
s=this.y
r="txtDirLights["+h+"].color"
c=s.k(0,r)
if(c==null)H.q(P.v("Required uniform value, "+r+", was not defined or used in shader."))
H.i(c,"$iG")
s=this.y
r="txtDirLights["+h+"].nullTxt"
b=s.k(0,r)
if(b==null)H.q(P.v("Required uniform value, "+r+", was not defined or used in shader."))
H.i(b,"$iK")
s=this.y
r="txtDirLightsTxt2D"+h
a=s.k(0,r)
if(a==null)H.q(P.v("Required uniform value, "+r+", was not defined or used in shader."))
H.i(a,"$ial")
s=this.d1;(s&&C.a).h(s,new A.cE(h,g,f,e,d,c,a,b))}}t=a6.cy
if(t>0){this.eV=H.d(this.y.p(0,"txtPntLightCount"),"$iK")
for(h=0;h<t;++h){s=this.y
r="txtPntLights["+h+"].point"
g=s.k(0,r)
if(g==null)H.q(P.v("Required uniform value, "+r+", was not defined or used in shader."))
H.i(g,"$iG")
s=this.y
r="txtPntLights["+h+"].viewPnt"
f=s.k(0,r)
if(f==null)H.q(P.v("Required uniform value, "+r+", was not defined or used in shader."))
H.i(f,"$iG")
s=this.y
r="txtPntLights["+h+"].invViewRotMat"
e=s.k(0,r)
if(e==null)H.q(P.v("Required uniform value, "+r+", was not defined or used in shader."))
H.i(e,"$icB")
s=this.y
r="txtPntLights["+h+"].color"
d=s.k(0,r)
if(d==null)H.q(P.v("Required uniform value, "+r+", was not defined or used in shader."))
H.i(d,"$iG")
s=this.y
r="txtPntLights["+h+"].nullTxt"
c=s.k(0,r)
if(c==null)H.q(P.v("Required uniform value, "+r+", was not defined or used in shader."))
H.i(c,"$iK")
s=this.y
r="txtPntLights["+h+"].att0"
b=s.k(0,r)
if(b==null)H.q(P.v("Required uniform value, "+r+", was not defined or used in shader."))
H.i(b,"$iX")
s=this.y
r="txtPntLights["+h+"].att1"
a=s.k(0,r)
if(a==null)H.q(P.v("Required uniform value, "+r+", was not defined or used in shader."))
H.i(a,"$iX")
s=this.y
r="txtPntLights["+h+"].att2"
a0=s.k(0,r)
if(a0==null)H.q(P.v("Required uniform value, "+r+", was not defined or used in shader."))
H.i(a0,"$iX")
s=this.y
r="txtPntLightsTxtCube"+h
a1=s.k(0,r)
if(a1==null)H.q(P.v("Required uniform value, "+r+", was not defined or used in shader."))
H.i(a1,"$iaf")
s=this.d2;(s&&C.a).h(s,new A.cF(h,g,f,e,d,a1,c,b,a,a0))}}t=a6.db
if(t>0){this.eW=H.d(this.y.p(0,"txtSpotLightCount"),"$iK")
for(h=0;h<t;++h){s=this.y
r="txtSpotLights["+h+"].objPnt"
g=s.k(0,r)
if(g==null)H.q(P.v("Required uniform value, "+r+", was not defined or used in shader."))
H.i(g,"$iG")
s=this.y
r="txtSpotLights["+h+"].objDir"
f=s.k(0,r)
if(f==null)H.q(P.v("Required uniform value, "+r+", was not defined or used in shader."))
H.i(f,"$iG")
s=this.y
r="txtSpotLights["+h+"].objUp"
e=s.k(0,r)
if(e==null)H.q(P.v("Required uniform value, "+r+", was not defined or used in shader."))
H.i(e,"$iG")
s=this.y
r="txtSpotLights["+h+"].objRight"
d=s.k(0,r)
if(d==null)H.q(P.v("Required uniform value, "+r+", was not defined or used in shader."))
H.i(d,"$iG")
s=this.y
r="txtSpotLights["+h+"].viewPnt"
c=s.k(0,r)
if(c==null)H.q(P.v("Required uniform value, "+r+", was not defined or used in shader."))
H.i(c,"$iG")
s=this.y
r="txtSpotLights["+h+"].nullTxt"
b=s.k(0,r)
if(b==null)H.q(P.v("Required uniform value, "+r+", was not defined or used in shader."))
H.i(b,"$iK")
s=this.y
r="txtSpotLights["+h+"].color"
a=s.k(0,r)
if(a==null)H.q(P.v("Required uniform value, "+r+", was not defined or used in shader."))
H.i(a,"$iG")
s=this.y
r="txtSpotLights["+h+"].tuScalar"
a0=s.k(0,r)
if(a0==null)H.q(P.v("Required uniform value, "+r+", was not defined or used in shader."))
H.i(a0,"$iX")
s=this.y
r="txtSpotLights["+h+"].tvScalar"
a1=s.k(0,r)
if(a1==null)H.q(P.v("Required uniform value, "+r+", was not defined or used in shader."))
H.i(a1,"$iX")
s=this.y
r="txtSpotLights["+h+"].att0"
a2=s.k(0,r)
if(a2==null)H.q(P.v("Required uniform value, "+r+", was not defined or used in shader."))
H.i(a2,"$iX")
s=this.y
r="txtSpotLights["+h+"].att1"
a3=s.k(0,r)
if(a3==null)H.q(P.v("Required uniform value, "+r+", was not defined or used in shader."))
H.i(a3,"$iX")
s=this.y
r="txtSpotLights["+h+"].att2"
a4=s.k(0,r)
if(a4==null)H.q(P.v("Required uniform value, "+r+", was not defined or used in shader."))
H.i(a4,"$iX")
s=this.y
r="txtSpotLightsTxt2D"+h
a5=s.k(0,r)
if(a5==null)H.q(P.v("Required uniform value, "+r+", was not defined or used in shader."))
H.i(a5,"$ial")
s=this.d3;(s&&C.a).h(s,new A.cG(h,g,f,e,d,c,a5,b,a,a0,a1,a2,a3,a4))}}}},
ar:function(a,b,c){C.b.U(b.a,b.d,1)},
am:function(a,b,c){if(c==null||c.d<6)C.b.U(b.a,b.d,1)
else{a.dB(c)
C.b.U(b.a,b.d,0)}},
shh:function(a){this.r1=H.h(a,"$ia",[A.au],"$aa")},
sh1:function(a){this.cZ=H.h(a,"$ia",[A.cA],"$aa")},
sh2:function(a){this.d_=H.h(a,"$ia",[A.cC],"$aa")},
sh3:function(a){this.d0=H.h(a,"$ia",[A.cD],"$aa")},
sh4:function(a){this.d1=H.h(a,"$ia",[A.cE],"$aa")},
sh5:function(a){this.d2=H.h(a,"$ia",[A.cF],"$aa")},
sh6:function(a){this.d3=H.h(a,"$ia",[A.cG],"$aa")}}
A.fA.prototype={
jp:function(a){var u,t,s
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
jw:function(a){var u
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
jq:function(a){var u
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
jE:function(a){var u,t
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
jF:function(a){var u,t
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
jy:function(a){var u
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
jJ:function(a){var u
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
if(0>=c.length)return H.e(c,0)
u+="uniform int null"+(c[0].toUpperCase()+C.c.aw(c,1))+"Txt;\n"
a.a=u
if(b===C.h)a.a=u+("uniform sampler2D "+c+"Txt;\n")
else if(b===C.i)a.a=u+("uniform samplerCube "+c+"Txt;\n")},
jt:function(a){var u,t
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
jo:function(a){var u,t
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
jr:function(a){var u,t
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
ju:function(a){var u,t
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
jC:function(a){var u,t
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
jx:function(a){var u,t
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
jA:function(a){var u,t
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
jB:function(a){var u,t
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
js:function(a){var u,t
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
jz:function(a){var u,t
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
jD:function(a){var u,t
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
jG:function(a){var u,t,s
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
jH:function(a){var u,t,s
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
jI:function(a){var u,t,s
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
jv:function(a){var u
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
A.cA.prototype={}
A.cE.prototype={}
A.cC.prototype={}
A.cF.prototype={}
A.cD.prototype={}
A.cG.prototype={}
A.cr.prototype={
dG:function(a,b){this.c=null
this.d=null
this.e=null
this.f=null
this.r=null
this.x=null
this.y=null},
f5:function(a,b){var u,t,s
this.c=a
this.d=b
this.e=this.dW(a,35633)
this.f=this.dW(this.d,35632)
u=this.a
t=u.createProgram()
this.r=t
C.b.eo(u,t,this.e)
C.b.eo(u,this.r,this.f)
C.b.kF(u,this.r)
if(!H.k3(C.b.c7(u,this.r,35714))){s=C.b.fw(u,this.r)
C.b.kd(u,this.r)
H.q(P.v("Failed to link shader: "+H.j(s)))}this.j1()
this.j3()},
a5:function(a){C.b.ds(a.a,this.r)
this.x.ko()},
dW:function(a,b){var u,t,s
u=this.a
t=C.b.kb(u,b)
C.b.fJ(u,t,a)
C.b.k5(u,t)
if(!H.k3(C.b.fA(u,t,35713))){s=C.b.fz(u,t)
C.b.ke(u,t)
throw H.c(P.v("Error compiling shader '"+H.j(t)+"': "+H.j(s)))}return t},
j1:function(){var u,t,s,r,q,p
u=H.b([],[A.d4])
t=this.a
s=H.a6(C.b.c7(t,this.r,35721))
if(typeof s!=="number")return H.B(s)
r=0
for(;r<s;++r){q=C.b.fq(t,this.r,r)
p=C.b.ft(t,this.r,q.name)
C.a.h(u,new A.d4(t,q.name,p))}this.x=new A.eF(u)},
j3:function(){var u,t,s,r,q,p
u=H.b([],[A.e1])
t=this.a
s=H.a6(C.b.c7(t,this.r,35718))
if(typeof s!=="number")return H.B(s)
r=0
for(;r<s;++r){q=C.b.fs(t,this.r,r)
p=C.b.fB(t,this.r,q.name)
C.a.h(u,this.kc(q.type,q.size,q.name,p))}this.y=new A.hx(u)},
aV:function(a,b,c){var u,t
u=this.a
t=this.r
if(a===1)return new A.K(u,t,b,c)
else return A.jS(u,t,b,a,c)},
ho:function(a,b,c){var u,t
u=this.a
t=this.r
if(a===1)return new A.al(u,t,b,c)
else return A.jS(u,t,b,a,c)},
hp:function(a,b,c){var u,t
u=this.a
t=this.r
if(a===1)return new A.af(u,t,b,c)
else return A.jS(u,t,b,a,c)},
bB:function(a,b){return new P.ef(a+" uniform variables are unsupported by all browsers.\n"+("Please change the type of "+H.j(b)+"."))},
kc:function(a,b,c,d){switch(a){case 5120:return this.aV(b,c,d)
case 5121:return this.aV(b,c,d)
case 5122:return this.aV(b,c,d)
case 5123:return this.aV(b,c,d)
case 5124:return this.aV(b,c,d)
case 5125:return this.aV(b,c,d)
case 5126:return new A.X(this.a,this.r,c,d)
case 35664:return new A.hs(this.a,this.r,c,d)
case 35665:return new A.G(this.a,this.r,c,d)
case 35666:return new A.hv(this.a,this.r,c,d)
case 35667:return new A.ht(this.a,this.r,c,d)
case 35668:return new A.hu(this.a,this.r,c,d)
case 35669:return new A.hw(this.a,this.r,c,d)
case 35674:return new A.hy(this.a,this.r,c,d)
case 35675:return new A.cB(this.a,this.r,c,d)
case 35676:return new A.au(this.a,this.r,c,d)
case 35678:return this.ho(b,c,d)
case 35680:return this.hp(b,c,d)
case 35670:throw H.c(this.bB("BOOL",c))
case 35671:throw H.c(this.bB("BOOL_VEC2",c))
case 35672:throw H.c(this.bB("BOOL_VEC3",c))
case 35673:throw H.c(this.bB("BOOL_VEC4",c))
default:throw H.c(P.v("Unknown uniform variable type "+H.j(a)+" for "+H.j(c)+"."))}}}
A.bD.prototype={
i:function(a){return this.b}}
A.dP.prototype={}
A.e1.prototype={}
A.hx.prototype={
k:function(a,b){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<t;++s){r=u[s]
if(r.c===b)return r}return},
p:function(a,b){var u=this.k(0,b)
if(u==null)throw H.c(P.v("Required uniform value, "+b+", was not defined or used in shader."))
return u},
i:function(a){return this.R()},
kw:function(a){var u,t,s,r
for(u=this.a,t=u.length,s="",r=0;r<u.length;u.length===t||(0,H.A)(u),++r)s+=u[r].i(0)+a
return s},
R:function(){return this.kw("\n")}}
A.K.prototype={
i:function(a){return"Uniform1i: "+H.j(this.c)}}
A.ht.prototype={
i:function(a){return"Uniform2i: "+H.j(this.c)}}
A.hu.prototype={
i:function(a){return"Uniform3i: "+H.j(this.c)}}
A.hw.prototype={
i:function(a){return"Uniform4i: "+H.j(this.c)}}
A.hr.prototype={
i:function(a){return"Uniform1iv: "+H.j(this.c)},
sjm:function(a){this.e=H.h(a,"$ia",[P.m],"$aa")}}
A.X.prototype={
i:function(a){return"Uniform1f: "+H.j(this.c)}}
A.hs.prototype={
i:function(a){return"Uniform2f: "+H.j(this.c)}}
A.G.prototype={
i:function(a){return"Uniform3f: "+H.j(this.c)}}
A.hv.prototype={
i:function(a){return"Uniform4f: "+H.j(this.c)}}
A.hy.prototype={
i:function(a){return"Uniform1Mat2 "+H.j(this.c)}}
A.cB.prototype={
aq:function(a){var u=new Float32Array(H.bV(H.h(a,"$ia",[P.p],"$aa")))
C.b.fm(this.a,this.d,!1,u)},
i:function(a){return"UniformMat3: "+H.j(this.c)}}
A.au.prototype={
aq:function(a){var u=new Float32Array(H.bV(H.h(a,"$ia",[P.p],"$aa")))
C.b.fn(this.a,this.d,!1,u)},
i:function(a){return"UniformMat4: "+H.j(this.c)}}
A.al.prototype={
i:function(a){return"UniformSampler2D: "+H.j(this.c)}}
A.af.prototype={
dB:function(a){var u,t,s
u=a==null||a.d<6
t=this.a
s=this.d
if(u)C.b.U(t,s,0)
else C.b.U(t,s,a.a)},
i:function(a){return"UniformSamplerCube: "+H.j(this.c)}}
F.iP.prototype={
$3:function(a,b,c){var u,t,s
u=this.a
t=u.a.da(u.b,b).da(u.d.da(u.c,b),c)
a.sa6(0,new V.S(t.a,t.b,t.c))
a.sfi(t.w(0,Math.sqrt(t.H(t))))
u=1-b
s=1-c
a.sep(new V.as(this.b+b*c,this.c+u*c,this.d+b*s,this.e+u*s))
u=this.f
if(u!=null)u.$3(a,b,c)},
$S:5}
F.iZ.prototype={
$2:function(a,b){var u=this.a
return u+b*(this.b-u)},
$S:6}
F.j0.prototype={
$3:function(a,b,c){var u,t,s,r,q,p
u=6.283185307179586*b
t=Math.sin(u)
s=Math.cos(u)
r=-1+c*2
q=this.a.$2(b,c)
if(typeof q!=="number")return H.B(q)
t=-t*q
p=s*q
a.sa6(0,new V.S(t,p,r))
p=new V.D(t,p,r)
a.sfi(p.w(0,Math.sqrt(p.H(p))))
a.sep(new V.as(1-c,2+c,-1,-1))},
$S:5}
F.j1.prototype={
$1:function(a){return this.a.$2(a,1)},
$S:18}
F.j2.prototype={
$1:function(a){return this.a.$2(1-a,0)},
$S:18}
F.jz.prototype={
$2:function(a,b){return 0},
$S:6}
F.jA.prototype={
$3:function(a,b,c){var u,t,s
u=this.a.a.$2(b,c)
if(typeof u!=="number")return H.B(u)
t=a.f
s=new V.D(t.a,t.b,t.c)
u=s.w(0,Math.sqrt(s.H(s))).A(0,this.b+u)
a.sa6(0,new V.S(u.a,u.b,u.c))},
$S:5}
F.jB.prototype={
$1:function(a){return new V.S(Math.cos(a),Math.sin(a),0)},
$S:17}
F.j9.prototype={
$1:function(a){var u,t,s
u=this.a*a
t=2+Math.cos(u)
s=this.b*a
return new V.S(t*Math.cos(s)/2,t*Math.sin(s)/2,Math.sin(u)/2)},
$S:17}
F.j_.prototype={
$3:function(a,b,c){var u,t,s,r,q,p,o,n,m
u=b*6.283185307179586
t=this.a
s=this.b
r=J.ki(t.$1(u),s)
s=J.m0(J.ki(t.$1(u+3.141592653589793/this.c),s),r)
s=new V.D(s.a,s.b,s.c)
q=s.w(0,Math.sqrt(s.H(s)))
t=$.l0
if(t==null){t=new V.D(1,0,0)
$.l0=t
p=t}else p=t
t=q.aL(!J.U(q,p)?V.l4():p)
o=t.w(0,Math.sqrt(t.H(t)))
t=o.aL(q)
p=t.w(0,Math.sqrt(t.H(t)))
n=c*6.283185307179586
t=Math.cos(n)
s=this.d
m=Math.sin(n)
t=p.A(0,t*s)
s=o.A(0,m*s)
a.sa6(0,J.m_(r,new V.S(t.a-s.a,t.b-s.b,t.c-s.c)))},
$S:5}
F.a3.prototype={
bf:function(){if(!this.gbg()){C.a.N(this.a.a.d.b,this)
this.a.a.a9()}this.cB()
this.cC()
this.iQ()},
cG:function(a){this.a=a
C.a.h(a.d.b,this)},
cH:function(a){this.b=a
C.a.h(a.d.c,this)},
j0:function(a){this.c=a
C.a.h(a.d.d,this)},
cB:function(){var u=this.a
if(u!=null){C.a.N(u.d.b,this)
this.a=null}},
cC:function(){var u=this.b
if(u!=null){C.a.N(u.d.c,this)
this.b=null}},
iQ:function(){var u=this.c
if(u!=null){C.a.N(u.d.d,this)
this.c=null}},
gbg:function(){return this.a==null||this.b==null||this.c==null},
hg:function(){var u,t,s,r,q
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
if(q.f6())return
return q.w(0,Math.sqrt(q.H(q)))},
hk:function(){var u,t,s,r,q
u=this.a
t=u==null?null:u.f
u=this.b
s=u==null?null:u.f
u=this.c
r=u==null?null:u.f
if(t==null||s==null||r==null)return
u=s.v(0,t)
u=new V.D(u.a,u.b,u.c)
q=u.w(0,Math.sqrt(u.H(u)))
u=r.v(0,t)
u=new V.D(u.a,u.b,u.c)
u=q.aL(u.w(0,Math.sqrt(u.H(u))))
return u.w(0,Math.sqrt(u.H(u)))},
cS:function(){if(this.d!=null)return!0
var u=this.hg()
if(u==null){u=this.hk()
if(u==null)return!1}this.d=u
this.a.a.a9()
return!0},
hf:function(){var u,t,s,r,q
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
if(q.f6())return
return q.w(0,Math.sqrt(q.H(q)))},
hj:function(){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f
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
if(Math.abs(i-0)<$.O().a){u=m.v(0,p)
u=new V.D(u.a,u.b,u.c)
h=u.w(0,Math.sqrt(u.H(u)))
if(j.a-k.a<0)h=h.W(0)}else{g=(u-l.b)/i
u=m.v(0,p).A(0,g).n(0,p).v(0,s)
u=new V.D(u.a,u.b,u.c)
h=u.w(0,Math.sqrt(u.H(u)))
j=j.a
k=k.a
if((j-k)*g+k-l.a<0)h=h.W(0)}u=this.d
if(u!=null){f=u.w(0,Math.sqrt(u.H(u)))
u=f.aL(h)
u=u.w(0,Math.sqrt(u.H(u))).aL(f)
h=u.w(0,Math.sqrt(u.H(u)))}return h},
cQ:function(){if(this.e!=null)return!0
var u=this.hf()
if(u==null){u=this.hj()
if(u==null)return!1}this.e=u
this.a.a.a9()
return!0},
gk0:function(a){if(J.U(this.a,this.b))return!0
if(J.U(this.b,this.c))return!0
if(J.U(this.c,this.a))return!0
return!1},
D:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.R()},
I:function(a){var u,t
if(this.gbg())return a+"disposed"
u=a+C.c.ap(J.ao(this.a.e),0)+", "+C.c.ap(J.ao(this.b.e),0)+", "+C.c.ap(J.ao(this.c.e),0)+" {"
t=this.d
u=t!=null?u+(t.i(0)+", "):u+"-, "
t=this.e
return t!=null?u+(t.i(0)+"}"):u+"-}"},
R:function(){return this.I("")}}
F.f2.prototype={}
F.h8.prototype={
bh:function(a,b,c){var u,t
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
F.b6.prototype={
bf:function(){if(!this.gbg()){C.a.N(this.a.a.c.b,this)
this.a.a.a9()}this.cB()
this.cC()},
cG:function(a){this.a=a
C.a.h(a.c.b,this)},
cH:function(a){this.b=a
C.a.h(a.c.c,this)},
cB:function(){var u=this.a
if(u!=null){C.a.N(u.c.b,this)
this.a=null}},
cC:function(){var u=this.b
if(u!=null){C.a.N(u.c.c,this)
this.b=null}},
gbg:function(){return this.a==null||this.b==null},
D:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.R()},
I:function(a){if(this.gbg())return a+"disposed"
return a+C.c.ap(J.ao(this.a.e),0)+", "+C.c.ap(J.ao(this.b.e),0)},
R:function(){return this.I("")}}
F.fl.prototype={}
F.hq.prototype={
bh:function(a,b,c){var u,t
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
F.br.prototype={
D:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.R()},
I:function(a){var u=this.a
if(u==null)return a+"disposed"
return a+C.c.ap(J.ao(u.e),0)},
R:function(){return this.I("")}}
F.dN.prototype={
gu:function(){var u=this.e
if(u==null){u=D.J()
this.e=u}return u},
bi:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i,h
u=this.e
if(u!=null)++u.d
a.a.E()
t=this.a.c.length
for(u=a.a.c,s=u.length,r=0;r<u.length;u.length===s||(0,H.A)(u),++r){q=u[r]
this.a.h(0,q.k6())}this.a.E()
for(u=a.b.b,s=u.length,r=0;r<u.length;u.length===s||(0,H.A)(u),++r){p=u[r]
o=this.a
n=p.a
n.a.a.E()
n=n.e
if(typeof n!=="number")return n.n()
n+=t
o=o.c
if(n>=o.length)return H.e(o,n)
m=o[n]
this.b.a.a.h(0,m)
n=new F.br()
if(m.a==null)H.q(P.v("May not create a point with a vertex which is not attached to a shape."))
n.a=m
C.a.h(m.b.b,n)
C.a.h(n.a.a.b.b,n)
o=n.a.a.e
if(o!=null)o.J(null)}for(u=a.c.b,s=u.length,r=0;r<u.length;u.length===s||(0,H.A)(u),++r){l=u[r]
o=this.a
n=l.a
n.a.a.E()
n=n.e
if(typeof n!=="number")return n.n()
n+=t
o=o.c
if(n>=o.length)return H.e(o,n)
k=o[n]
n=this.a
o=l.b
o.a.a.E()
o=o.e
if(typeof o!=="number")return o.n()
o+=t
n=n.c
if(o>=n.length)return H.e(n,o)
j=n[o]
o=this.c.a
o.a.h(0,k)
o.a.h(0,j)
F.mt(k,j)}for(u=a.d.b,s=u.length,r=0;r<u.length;u.length===s||(0,H.A)(u),++r){i=u[r]
o=this.a
n=i.a
n.a.a.E()
n=n.e
if(typeof n!=="number")return n.n()
n+=t
o=o.c
if(n>=o.length)return H.e(o,n)
k=o[n]
n=this.a
o=i.b
o.a.a.E()
o=o.e
if(typeof o!=="number")return o.n()
o+=t
n=n.c
if(o>=n.length)return H.e(n,o)
j=n[o]
o=this.a
n=i.c
n.a.a.E()
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
F.cd(k,j,h)}u=this.e
if(u!=null)u.aE()},
as:function(){var u,t
u=this.e
if(u!=null)++u.d
t=this.d.as()||!1
if(!this.a.as())t=!1
u=this.e
if(u!=null)u.aE()
return t},
kI:function(a,b){var u,t,s,r,q,p,o
u=this.e
if(u!=null)++u.d
u=this.a.c
t=H.b(u.slice(0),[H.r(u,0)])
for(u=[F.a8];t.length!==0;){s=C.a.gks(t)
C.a.l0(t,0)
if(s!=null){r=H.b([],u)
C.a.h(r,s)
for(q=t.length,p=0;p<t.length;t.length===q||(0,H.A)(t),++p){o=t[p]
if(o!=null&&a.bh(0,s,o)){C.a.h(r,o)
C.a.N(t,o)}}if(r.length>1)b.bi(r)}}this.a.E()
this.c.dl()
this.d.dl()
this.b.l1()
this.c.dm(new F.hq())
this.d.dm(new F.h8())
u=this.e
if(u!=null)u.aE()},
jN:function(a){this.kI(new F.hR(),new F.fK())},
cK:function(){return this.jN(null)},
eu:function(a0,a1){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a
u=this.a.c.length
a1.toString
t=$.aN()
s=a1.a
r=(s&t.a)!==0?1:0
if((s&$.bd().a)!==0)++r
if((s&$.bc().a)!==0)++r
if((s&$.be().a)!==0)++r
if((s&$.bf().a)!==0)++r
if((s&$.cZ().a)!==0)++r
if((s&$.d_().a)!==0)++r
if((s&$.c4().a)!==0)++r
if((s&$.bb().a)!==0)++r
q=a1.gdC(a1)
p=q*4
t=new Array(u*q)
t.fixed$length=Array
s=P.p
o=H.b(t,[s])
t=new Array(r)
t.fixed$length=Array
n=H.b(t,[Z.d6])
for(m=0,l=0;l<r;++l){k=a1.jR(l)
j=k.gdC(k)
C.a.q(n,l,new Z.d6(k,j,m*4,p,0))
for(i=0;i<u;++i){t=this.a.c
if(i>=t.length)return H.e(t,i)
h=t[i].kG(k)
g=m+i*q
for(f=0;f<h.length;++f){C.a.q(o,g,h[f]);++g}}m+=j}H.h(o,"$ia",[s],"$aa")
t=a0.a
e=t.createBuffer()
C.b.aA(t,34962,e)
C.b.es(t,34962,new Float32Array(H.bV(o)),35044)
C.b.aA(t,34962,null)
d=new Z.c8(new Z.ea(34962,e),n,a1)
d.shD(H.b([],[Z.bn]))
if(this.b.b.length!==0){s=P.m
c=H.b([],[s])
for(l=0;b=this.b.b,l<b.length;++l){b=b[l].a
b.a.a.E()
C.a.h(c,b.e)}a=Z.jV(t,34963,H.h(c,"$ia",[s],"$aa"))
C.a.h(d.b,new Z.bn(0,c.length,a))}if(this.c.b.length!==0){s=P.m
c=H.b([],[s])
for(l=0;b=this.c.b,l<b.length;++l){b=b[l].a
b.a.a.E()
C.a.h(c,b.e)
b=this.c.b
if(l>=b.length)return H.e(b,l)
b=b[l].b
b.a.a.E()
C.a.h(c,b.e)}a=Z.jV(t,34963,H.h(c,"$ia",[s],"$aa"))
C.a.h(d.b,new Z.bn(1,c.length,a))}if(this.d.b.length!==0){s=P.m
c=H.b([],[s])
for(l=0;b=this.d.b,l<b.length;++l){b=b[l].a
b.a.a.E()
C.a.h(c,b.e)
b=this.d.b
if(l>=b.length)return H.e(b,l)
b=b[l].b
b.a.a.E()
C.a.h(c,b.e)
b=this.d.b
if(l>=b.length)return H.e(b,l)
b=b[l].c
b.a.a.E()
C.a.h(c,b.e)}a=Z.jV(t,34963,H.h(c,"$ia",[s],"$aa"))
C.a.h(d.b,new Z.bn(4,c.length,a))}return d},
i:function(a){var u=H.b([],[P.f])
if(this.a.c.length!==0){C.a.h(u,"Vertices:")
C.a.h(u,this.a.I("   "))}if(this.b.b.length!==0){C.a.h(u,"Points:")
C.a.h(u,this.b.I("   "))}if(this.c.b.length!==0){C.a.h(u,"Lines:")
C.a.h(u,this.c.I("   "))}if(this.d.b.length!==0){C.a.h(u,"Faces:")
C.a.h(u,this.d.I("   "))}return C.a.l(u,"\n")},
b1:function(a){var u=this.e
if(u!=null)u.J(a)},
a9:function(){return this.b1(null)},
$ioi:1}
F.h1.prototype={
ej:function(a){var u,t,s,r,q,p,o
H.h(a,"$ia",[F.a8],"$aa")
u=H.b([],[F.a3])
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
C.a.h(u,F.cd(s,p,o))}}return u},
jL:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k,j,i,h
H.h(c,"$ia",[F.a8],"$aa")
u=H.b([],[F.a3])
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
C.a.h(u,F.cd(l,k,i))
t.a.h(0,l)
t.a.h(0,i)
t.a.h(0,h)
C.a.h(u,F.cd(l,i,h))}else{m.h(0,k)
t.a.h(0,i)
t.a.h(0,h)
C.a.h(u,F.cd(k,i,h))
t.a.h(0,k)
t.a.h(0,h)
t.a.h(0,l)
C.a.h(u,F.cd(k,h,l))}o=!o}q=!q}return u},
gm:function(a){return this.b.length},
dm:function(a){var u,t,s,r,q,p,o,n
for(u=this.a,t=u.a.c.length-1;t>=0;--t){s=u.a.c
if(t>=s.length)return H.e(s,t)
r=s[t]
for(s=r.d,q=s.b.length+s.c.length+s.d.length-1;q>=0;--q){p=r.d.k(0,q)
for(o=q-1;o>=0;--o){n=r.d.k(0,o)
if(a.bh(0,p,n)){p.bf()
break}}}}},
dl:function(){var u,t,s
for(u=this.b.length-1;u>=0;--u){t=this.b
if(u>=t.length)return H.e(t,u)
s=t[u]
t=s.gk0(s)
if(t)s.bf()}},
as:function(){var u,t,s,r
for(u=this.b,t=u.length,s=!0,r=0;r<u.length;u.length===t||(0,H.A)(u),++r)if(!u[r].cS())s=!1
return s},
cR:function(){var u,t,s,r
for(u=this.b,t=u.length,s=!0,r=0;r<u.length;u.length===t||(0,H.A)(u),++r)if(!u[r].cQ())s=!1
return s},
i:function(a){return this.R()},
I:function(a){var u,t,s,r
u=H.b([],[P.f])
for(t=this.b,s=t.length,r=0;r<t.length;t.length===s||(0,H.A)(t),++r)C.a.h(u,t[r].I(a))
return C.a.l(u,"\n")},
R:function(){return this.I("")},
shv:function(a){this.b=H.h(a,"$ia",[F.a3],"$aa")}}
F.h2.prototype={
gm:function(a){return this.b.length},
dm:function(a){var u,t,s,r,q,p,o,n
for(u=this.a,t=u.a.c.length-1;t>=0;--t){s=u.a.c
if(t>=s.length)return H.e(s,t)
r=s[t]
for(s=r.c,q=s.b.length+s.c.length-1;q>=0;--q){p=r.c.k(0,q)
for(o=q-1;o>=0;--o){n=r.c.k(0,o)
if(a.bh(0,p,n)){p.bf()
break}}}}},
dl:function(){var u,t,s
for(u=this.b.length-1;u>=0;--u){t=this.b
if(u>=t.length)return H.e(t,u)
s=t[u]
t=J.U(s.a,s.b)
if(t)s.bf()}},
i:function(a){return this.R()},
I:function(a){var u,t,s,r
u=H.b([],[P.f])
t=this.b.length
for(s=0;s<t;++s){r=this.b
if(s>=r.length)return H.e(r,s)
C.a.h(u,r[s].I(a+(""+s+". ")))}return C.a.l(u,"\n")},
R:function(){return this.I("")},
shF:function(a){this.b=H.h(a,"$ia",[F.b6],"$aa")}}
F.h3.prototype={
gm:function(a){return this.b.length},
l1:function(){var u,t,s
for(u=this.b.length-1;u>=0;--u){t=this.b
if(u>=t.length)return H.e(t,u)
t=t[u]
s=t.a
if(s.b.b.length>1){if(s!=null){C.a.N(s.a.b.b,t)
s=t.a.a.e
if(s!=null)s.J(null)}s=t.a
if(s!=null){C.a.N(s.b.b,t)
t.a=null}}}},
i:function(a){return this.R()},
I:function(a){var u,t,s,r
u=H.b([],[P.f])
for(t=this.b,s=t.length,r=0;r<t.length;t.length===s||(0,H.A)(t),++r)C.a.h(u,t[r].I(a))
return C.a.l(u,"\n")},
R:function(){return this.I("")},
scw:function(a){this.b=H.h(a,"$ia",[F.br],"$aa")}}
F.a8.prototype={
cV:function(a){var u,t,s,r,q,p,o
u=this.f
t=this.r
s=this.x
r=this.y
q=this.z
p=this.Q
o=this.ch
return F.e9(this.cx,s,p,u,t,r,q,a,o)},
k6:function(){return this.cV(null)},
sa6:function(a,b){var u
if(!J.U(this.f,b)){this.f=b
u=this.a
if(u!=null)u.a9()}},
sfi:function(a){var u
if(!J.U(this.z,a)){this.z=a
u=this.a
if(u!=null)u.a9()}},
sep:function(a){var u
if(!J.U(this.cx,a)){this.cx=a
u=this.a
if(u!=null)u.a9()}},
kG:function(a){var u,t
if(a.D(0,$.aN())){u=this.f
t=[P.p]
if(u==null)return H.b([0,0,0],t)
else return H.b([u.a,u.b,u.c],t)}else if(a.D(0,$.bd())){u=this.r
t=[P.p]
if(u==null)return H.b([0,1,0],t)
else return H.b([u.a,u.b,u.c],t)}else if(a.D(0,$.bc())){u=this.x
t=[P.p]
if(u==null)return H.b([0,0,1],t)
else return H.b([u.a,u.b,u.c],t)}else if(a.D(0,$.be())){u=this.y
t=[P.p]
if(u==null)return H.b([0,0],t)
else return H.b([u.a,u.b],t)}else if(a.D(0,$.bf())){u=this.z
t=[P.p]
if(u==null)return H.b([0,0,0],t)
else return H.b([u.a,u.b,u.c],t)}else if(a.D(0,$.cZ())){u=this.Q
t=[P.p]
if(u==null)return H.b([1,1,1],t)
else return H.b([u.a,u.b,u.c],t)}else if(a.D(0,$.d_())){u=this.Q
t=[P.p]
if(u==null)return H.b([1,1,1,1],t)
else return H.b([u.a,u.b,u.c,u.d],t)}else if(a.D(0,$.c4()))return H.b([this.ch],[P.p])
else if(a.D(0,$.bb())){u=this.cx
t=[P.p]
if(u==null)return H.b([-1,-1,-1,-1],t)
else return H.b([u.a,u.b,u.c,u.d],t)}else return H.b([],[P.p])},
cS:function(){var u,t
u={}
if(this.r!=null)return!0
t=this.a
if(t!=null){t=t.e
if(t!=null)++t.d}u.a=V.cI()
this.d.a1(0,new F.hW(u))
u=u.a
this.r=u.w(0,Math.sqrt(u.H(u)))
u=this.a
if(u!=null){u.a9()
u=this.a.e
if(u!=null)u.aE()}return!0},
cQ:function(){var u,t
u={}
if(this.x!=null)return!0
t=this.a
if(t!=null){t=t.e
if(t!=null)++t.d}u.a=V.cI()
this.d.a1(0,new F.hV(u))
u=u.a
this.x=u.w(0,Math.sqrt(u.H(u)))
u=this.a
if(u!=null){u.a9()
u=this.a.e
if(u!=null)u.aE()}return!0},
D:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.R()},
I:function(a){var u,t,s
u=H.b([],[P.f])
C.a.h(u,C.c.ap(J.ao(this.e),0))
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
R:function(){return this.I("")}}
F.hW.prototype={
$1:function(a){var u,t
H.d(a,"$ia3")
u=a==null?null:a.d
if(u!=null){t=this.a
t.a=t.a.n(0,u)}},
$S:10}
F.hV.prototype={
$1:function(a){var u,t
H.d(a,"$ia3")
u=a==null?null:a.e
if(u!=null){t=this.a
t.a=t.a.n(0,u)}},
$S:10}
F.hM.prototype={
E:function(){var u,t,s,r
if(this.b){u=this.c
t=u.length
for(s=0,r=0;r<t;++r){if(r>=u.length)return H.e(u,r)
u[r].e=s;++s}this.b=!1}},
h:function(a,b){var u,t
u=b.a
if(u!=null){if(u===this.a)return!1
throw H.c(P.v("May not add a vertex already attached to another shape to this shape."))}u=this.c
b.e=u.length
t=this.a
b.a=t
C.a.h(u,b)
t.a9()
return!0},
ek:function(a,b,c,d,e,f,g,h,i){var u=F.e9(a,b,c,d,e,f,g,h,i)
this.h(0,u)
return u},
bC:function(a,b,c,d,e,f){return this.ek(a,null,b,c,null,d,e,f,0)},
jM:function(a,b,c,d,e,f){return this.ek(a,null,b,c,d,e,f,null,0)},
gm:function(a){return this.c.length},
as:function(){var u,t,s
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.A)(u),++s)u[s].cS()
return!0},
cR:function(){var u,t,s
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.A)(u),++s)u[s].cQ()
return!0},
jW:function(){var u,t,s,r,q,p,o,n
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.A)(u),++s){r=u[s]
if(r.z==null){q=r.r
p=q.a
o=q.b
n=q.c
n=q.w(0,Math.sqrt(p*p+o*o+n*n))
if(!J.U(r.z,n)){r.z=n
q=r.a
if(q!=null){q=q.e
if(q!=null)q.J(null)}}}}return!0},
i:function(a){return this.R()},
I:function(a){var u,t,s,r
this.E()
u=H.b([],[P.f])
for(t=this.c,s=t.length,r=0;r<t.length;t.length===s||(0,H.A)(t),++r)C.a.h(u,t[r].I(a))
return C.a.l(u,"\n")},
R:function(){return this.I("")},
sjn:function(a){this.c=H.h(a,"$ia",[F.a8],"$aa")}}
F.hN.prototype={
gm:function(a){return this.b.length+this.c.length+this.d.length},
k:function(a,b){var u,t,s
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
a1:function(a,b){H.k(b,{func:1,ret:-1,args:[F.a3]})
C.a.a1(this.b,b)
C.a.a1(this.c,new F.hO(this,b))
C.a.a1(this.d,new F.hP(this,b))},
i:function(a){return this.R()},
I:function(a){var u,t,s,r
u=H.b([],[P.f])
for(t=this.b,s=t.length,r=0;r<t.length;t.length===s||(0,H.A)(t),++r)C.a.h(u,t[r].I(a))
for(t=this.c,s=t.length,r=0;r<t.length;t.length===s||(0,H.A)(t),++r)C.a.h(u,t[r].I(a))
for(t=this.d,s=t.length,r=0;r<t.length;t.length===s||(0,H.A)(t),++r)C.a.h(u,t[r].I(a))
return C.a.l(u,"\n")},
R:function(){return this.I("")},
shw:function(a){this.b=H.h(a,"$ia",[F.a3],"$aa")},
shx:function(a){this.c=H.h(a,"$ia",[F.a3],"$aa")},
shy:function(a){this.d=H.h(a,"$ia",[F.a3],"$aa")}}
F.hO.prototype={
$1:function(a){H.d(a,"$ia3")
if(!J.U(a.a,this.a))this.b.$1(a)},
$S:10}
F.hP.prototype={
$1:function(a){var u
H.d(a,"$ia3")
u=this.a
if(!J.U(a.a,u)&&!J.U(a.b,u))this.b.$1(a)},
$S:10}
F.hQ.prototype={
gm:function(a){return this.b.length+this.c.length},
k:function(a,b){var u,t,s
u=this.b
t=u.length
if(b>=t){u=this.c
s=b-t
if(s<0||s>=u.length)return H.e(u,s)
return u[s]}else{if(b<0)return H.e(u,b)
return u[b]}},
i:function(a){return this.R()},
I:function(a){var u,t,s,r
u=H.b([],[P.f])
for(t=this.b,s=t.length,r=0;r<t.length;t.length===s||(0,H.A)(t),++r)C.a.h(u,t[r].I(a))
for(t=this.c,s=t.length,r=0;r<t.length;t.length===s||(0,H.A)(t),++r)C.a.h(u,t[r].I(a))
return C.a.l(u,"\n")},
R:function(){return this.I("")},
shG:function(a){this.b=H.h(a,"$ia",[F.b6],"$aa")},
shH:function(a){this.c=H.h(a,"$ia",[F.b6],"$aa")}}
F.hS.prototype={}
F.hR.prototype={
bh:function(a,b,c){return J.U(b.f,c.f)}}
F.hT.prototype={}
F.fK.prototype={
bi:function(a){var u,t,s,r,q,p,o,n,m
H.h(a,"$ia",[F.a8],"$aa")
u=V.cI()
for(t=a.length,s=0;s<t;++s){r=a[s].r
if(r!=null)u=new V.D(u.a+r.a,u.b+r.b,u.c+r.c)}u=u.w(0,Math.sqrt(u.H(u)))
for(t=a.length,r=u==null,s=0;s<a.length;a.length===t||(0,H.A)(a),++s){q=a[s]
if(r)p=null
else{o=u.a
n=u.b
m=u.c
p=u.w(0,Math.sqrt(o*o+n*n+m*m))}if(!J.U(q.r,p)){q.r=p
o=q.a
if(o!=null){o=o.e
if(o!=null)o.J(null)}}}return}}
F.hU.prototype={
gm:function(a){return this.b.length},
i:function(a){return this.R()},
I:function(a){var u,t,s,r
u=H.b([],[P.f])
for(t=this.b,s=t.length,r=0;r<t.length;t.length===s||(0,H.A)(t),++r)C.a.h(u,t[r].I(a))
return C.a.l(u,"\n")},
R:function(){return this.I("")},
scw:function(a){this.b=H.h(a,"$ia",[F.br],"$aa")}}
O.dw.prototype={
gu:function(){var u=this.dy
if(u==null){u=D.J()
this.dy=u}return u},
a0:function(a){var u
H.d(a,"$iy")
u=this.dy
if(u!=null)u.J(a)},
cv:function(){return this.a0(null)},
eb:function(a){H.d(a,"$iy")
this.a=null
this.a0(a)},
iW:function(){return this.eb(null)},
hU:function(a,b){var u=V.aq
u=new D.bo(a,H.h(b,"$il",[u],"$al"),this,[u])
u.b=!0
this.a0(u)},
hW:function(a,b){var u=V.aq
u=new D.bp(a,H.h(b,"$il",[u],"$al"),this,[u])
u.b=!0
this.a0(u)},
dT:function(){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7
u=this.dx
t=C.f.ab(u.e.length+3,4)*4
s=C.f.ab(u.f.length+3,4)*4
r=C.f.ab(u.r.length+3,4)*4
q=C.f.ab(u.x.length+3,4)*4
p=C.f.ab(u.y.length+3,4)*4
o=C.f.ab(u.z.length+3,4)*4
n=C.f.ab(this.e.a.length+3,4)*4
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
a7=$.aN()
if(a0){b=$.bd()
a7=new Z.aY(a7.a|b.a)}if(a1){b=$.bc()
a7=new Z.aY(a7.a|b.a)}if(a2){b=$.be()
a7=new Z.aY(a7.a|b.a)}if(a3){b=$.bf()
a7=new Z.aY(a7.a|b.a)}if(a5){b=$.bb()
a7=new Z.aY(a7.a|b.a)}return new A.fA(u,m,l,k,j,i,h,g,f,t,s,r,q,p,o,t+s+r+q+p+o,d,d,a4,a6,!0,!1,!1,c,a4,a,a0,a1,a2,a3,a5,!1,!1,!1,n,e.charCodeAt(0)==0?e:e,a7)},
a_:function(a,b){H.h(a,"$ia",[T.cw],"$aa")
if(b!=null)if(!C.a.Y(a,b)){b.a=a.length
C.a.h(a,b)}},
av:function(a){var u,t,s,r,q
for(u=this.dx.a,u=new J.ap(u,u.length,0,[H.r(u,0)]);u.F();){t=u.d
t.toString
s=$.hL
if(s==null){s=new V.D(0,0,1)
$.hL=s}t.a=s
r=t.b
if(r!=null){q=r.a
if(q!=null)t.a=q.dr(s)}}},
fe:function(a2,a3){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1
u=this.a
if(u==null){u=this.dT()
t=H.d(a2.fr.k(0,u.at),"$idx")
if(t==null){t=A.mA(u,a2.a)
a2.em(t)}this.a=t
a3.e=null
u=t}s=u.z
r=s.bF
u=a3.e
if(!(u instanceof Z.c8)){a3.e=null
u=null}if(u==null||!u.d.D(0,r)){u=s.r1
if(u)a3.d.as()
q=s.r2
if(q){p=a3.d
o=p.e
if(o!=null)++o.d
p.d.cR()
p.a.cR()
p=p.e
if(p!=null)p.aE()}p=s.ry
if(p){o=a3.d
n=o.e
if(n!=null)++n.d
o.a.jW()
o=o.e
if(o!=null)o.aE()}m=a3.d.eu(new Z.eb(a2.a),r)
m.aN($.aN()).e=this.a.Q.c
if(u)m.aN($.bd()).e=this.a.cx.c
if(q)m.aN($.bc()).e=this.a.ch.c
if(s.rx)m.aN($.be()).e=this.a.cy.c
if(p)m.aN($.bf()).e=this.a.db.c
if(s.x1)m.aN($.bb()).e=this.a.dx.c
a3.e=m}u=T.cw
l=H.b([],[u])
this.a.a5(a2)
if(s.fx){q=this.a
p=a2.dx.ga7()
q=q.dy
q.toString
q.aq(p.aj(0,!0))}if(s.fy){q=this.a
p=a2.cx
if(p==null){p=a2.db.ga7().A(0,a2.dx.ga7())
a2.cx=p}q=q.fr
q.toString
q.aq(p.aj(0,!0))}q=this.a
p=a2.ch
if(p==null){p=a2.gkZ().A(0,a2.dx.ga7())
a2.ch=p}q=q.fy
q.toString
q.aq(p.aj(0,!0))
if(s.x2){q=this.a
p=this.b
q=q.k1
q.toString
q.aq(C.r.aj(p,!0))}if(s.y1){q=this.a
p=this.c
q=q.k2
q.toString
q.aq(C.r.aj(p,!0))}if(s.y2){q=this.a
p=this.d
q=q.k3
q.toString
q.aq(C.r.aj(p,!0))}if(s.aB>0){k=this.e.a.length
q=this.a.k4
C.b.U(q.a,q.d,k)
for(q=[P.p],j=0;j<k;++j){p=this.a
o=this.e.a
if(j>=o.length)return H.e(o,j)
o=o[j]
p.toString
H.d(o,"$iaq")
p=p.r1
if(j>=p.length)return H.e(p,j)
p=p[j]
i=new Float32Array(H.bV(H.h(o.aj(0,!0),"$ia",q,"$aa")))
C.b.fn(p.a,p.d,!1,i)}}switch(s.a){case C.d:break
case C.j:q=this.a
p=this.f.f
q=q.r2
q.toString
o=p.a
n=p.b
p=p.c
C.b.C(q.a,q.d,o,n,p)
break
case C.h:this.a_(l,this.f.d)
q=this.a
p=this.f.d
q.ar(q.rx,q.x1,p)
p=this.a
q=this.f.f
p=p.r2
p.toString
o=q.a
n=q.b
q=q.c
C.b.C(p.a,p.d,o,n,q)
break
case C.i:this.a_(l,this.f.e)
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
C.b.C(p.a,p.d,o,n,q)
break}if(s.k2){switch(s.b){case C.d:break
case C.j:q=this.a
p=this.r.f
q=q.x2
q.toString
o=p.a
n=p.b
p=p.c
C.b.C(q.a,q.d,o,n,p)
break
case C.h:this.a_(l,this.r.d)
q=this.a
p=this.r.d
q.ar(q.y1,q.aB,p)
p=this.a
q=this.r.f
p=p.x2
p.toString
o=q.a
n=q.b
q=q.c
C.b.C(p.a,p.d,o,n,q)
break
case C.i:this.a_(l,this.r.e)
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
C.b.C(p.a,p.d,o,n,q)
break}switch(s.c){case C.d:break
case C.j:q=this.a
p=this.x.f
q=q.at
q.toString
o=p.a
n=p.b
p=p.c
C.b.C(q.a,q.d,o,n,p)
break
case C.h:this.a_(l,this.x.d)
q=this.a
p=this.x.d
q.ar(q.bF,q.bG,p)
p=this.a
q=this.x.f
p=p.at
p.toString
o=q.a
n=q.b
q=q.c
C.b.C(p.a,p.d,o,n,q)
break
case C.i:this.a_(l,this.x.e)
q=this.a
p=this.x.e
q.am(q.eC,q.bG,p)
p=this.a
q=this.x.f
p=p.at
p.toString
o=q.a
n=q.b
q=q.c
C.b.C(p.a,p.d,o,n,q)
break}switch(s.d){case C.d:break
case C.j:q=this.a
p=this.y.f
q=q.bH
q.toString
o=p.a
n=p.b
p=p.c
C.b.C(q.a,q.d,o,n,p)
break
case C.h:this.a_(l,this.y.d)
q=this.a
p=this.y.d
q.ar(q.eD,q.bI,p)
p=this.a
q=this.y.f
p=p.bH
p.toString
o=q.a
n=q.b
q=q.c
C.b.C(p.a,p.d,o,n,q)
break
case C.i:this.a_(l,this.y.e)
q=this.a
p=this.y.e
q.am(q.eE,q.bI,p)
p=this.a
q=this.y.f
p=p.bH
p.toString
o=q.a
n=q.b
q=q.c
C.b.C(p.a,p.d,o,n,q)
break}switch(s.e){case C.d:break
case C.j:q=this.a
p=this.z.f
q=q.bJ
q.toString
o=p.a
n=p.b
p=p.c
C.b.C(q.a,q.d,o,n,p)
p=this.a
n=this.z.ch
p=p.bL
C.b.O(p.a,p.d,n)
break
case C.h:this.a_(l,this.z.d)
q=this.a
p=this.z.d
q.ar(q.eF,q.bK,p)
p=this.a
q=this.z.f
p=p.bJ
p.toString
o=q.a
n=q.b
q=q.c
C.b.C(p.a,p.d,o,n,q)
q=this.a
n=this.z.ch
q=q.bL
C.b.O(q.a,q.d,n)
break
case C.i:this.a_(l,this.z.e)
q=this.a
p=this.z.e
q.am(q.eG,q.bK,p)
p=this.a
q=this.z.f
p=p.bJ
p.toString
o=q.a
n=q.b
q=q.c
C.b.C(p.a,p.d,o,n,q)
q=this.a
n=this.z.ch
q=q.bL
C.b.O(q.a,q.d,n)
break}if(s.z>0){k=this.dx.e.length
q=this.a.eR
C.b.U(q.a,q.d,k)
h=a2.db.ga7()
for(q=this.dx.e,p=q.length,g=0,f=0;f<q.length;q.length===p||(0,H.A)(q),++f){e=q[f]
o=this.a.cZ
if(g>=o.length)return H.e(o,g)
d=o[g]
o=h.dr(e.a)
n=o.a
c=o.b
b=o.c
b=o.w(0,Math.sqrt(n*n+c*c+b*b))
c=d.b
n=b.a
o=b.b
b=b.c
C.b.C(c.a,c.d,n,o,b)
b=e.c
o=d.c
C.b.C(o.a,o.d,b.a,b.b,b.c);++g}}if(s.Q>0){k=this.dx.f.length
q=this.a.eS
C.b.U(q.a,q.d,k)
h=a2.db.ga7()
for(q=this.dx.f,p=q.length,g=0,f=0;f<q.length;q.length===p||(0,H.A)(q),++f){e=q[f]
o=this.a.d_
if(g>=o.length)return H.e(o,g)
d=o[g]
o=e.gbl(e)
n=d.b
C.b.C(n.a,n.d,o.a,o.b,o.c)
o=h.bq(e.gbl(e))
n=d.c
C.b.C(n.a,n.d,o.a,o.b,o.c)
o=e.gt(e)
n=d.d
C.b.C(n.a,n.d,o.a,o.b,o.c)
o=e.gcL()
n=d.e
C.b.O(n.a,n.d,o)
o=e.gcM()
n=d.f
C.b.O(n.a,n.d,o)
o=e.gcN()
n=d.r
C.b.O(n.a,n.d,o);++g}}if(s.ch>0){k=this.dx.r.length
q=this.a.eT
C.b.U(q.a,q.d,k)
h=a2.db.ga7()
for(q=this.dx.r,p=q.length,g=0,f=0;f<q.length;q.length===p||(0,H.A)(q),++f){e=q[f]
o=this.a.d0
if(g>=o.length)return H.e(o,g)
d=o[g]
o=e.gbl(e)
n=d.b
C.b.C(n.a,n.d,o.a,o.b,o.c)
o=e.gcX(e).ls()
n=d.c
C.b.C(n.a,n.d,o.a,o.b,o.c)
o=h.bq(e.gbl(e))
n=d.d
C.b.C(n.a,n.d,o.a,o.b,o.c)
o=e.gt(e)
n=d.e
C.b.C(n.a,n.d,o.a,o.b,o.c)
o=e.glq()
n=d.f
C.b.O(n.a,n.d,o)
o=e.glp()
n=d.r
C.b.O(n.a,n.d,o)
o=e.gcL()
n=d.x
C.b.O(n.a,n.d,o)
o=e.gcM()
n=d.y
C.b.O(n.a,n.d,o)
o=e.gcN()
n=d.z
C.b.O(n.a,n.d,o);++g}}if(s.cx>0){k=this.dx.x.length
q=this.a.eU
C.b.U(q.a,q.d,k)
h=a2.db.ga7()
for(q=this.dx.x,p=q.length,o=[u],g=0,f=0;f<q.length;q.length===p||(0,H.A)(q),++f){e=q[f]
n=this.a.d1
if(g>=n.length)return H.e(n,g)
d=n[g]
n=e.gbo()
H.h(l,"$ia",o,"$aa")
if(!C.a.Y(l,n)){n.a=l.length
C.a.h(l,n)}n=e.gcX(e)
c=d.d
C.b.C(c.a,c.d,n.a,n.b,n.c)
n=e.gc2()
c=d.b
C.b.C(c.a,c.d,n.a,n.b,n.c)
n=e.gc_(e)
c=d.c
C.b.C(c.a,c.d,n.a,n.b,n.c)
n=h.dr(e.gcX(e))
c=n.a
b=n.b
a=n.c
a=n.w(0,Math.sqrt(c*c+b*b+a*a))
b=d.e
c=a.a
n=a.b
a=a.c
C.b.C(b.a,b.d,c,n,a)
a=e.gt(e)
n=d.f
C.b.C(n.a,n.d,a.a,a.b,a.c)
a=e.gbo()
n=a.gbW(a)
if(!n){n=d.x
C.b.U(n.a,n.d,1)}else{n=d.r
c=a.gbW(a)
b=n.a
n=n.d
if(!c)C.b.U(b,n,0)
else C.b.U(b,n,a.gkz(a))
n=d.x
C.b.U(n.a,n.d,0)}++g}}if(s.cy>0){k=this.dx.y.length
q=this.a.eV
C.b.U(q.a,q.d,k)
h=a2.db.ga7()
for(q=this.dx.y,p=q.length,o=[P.p],n=[u],g=0,f=0;f<q.length;q.length===p||(0,H.A)(q),++f){e=q[f]
c=this.a.d2
if(g>=c.length)return H.e(c,g)
d=c[g]
c=e.gbo()
H.h(l,"$ia",n,"$aa")
if(!C.a.Y(l,c)){c.a=l.length
C.a.h(l,c)}a0=h.A(0,e.ga7())
c=e.ga7()
b=$.co
if(b==null){b=new V.S(0,0,0)
$.co=b}b=c.bq(b)
c=d.b
C.b.C(c.a,c.d,b.a,b.b,b.c)
c=$.co
if(c==null){c=new V.S(0,0,0)
$.co=c}c=a0.bq(c)
b=d.c
C.b.C(b.a,b.d,c.a,c.b,c.c)
c=a0.d8()
b=d.d
i=new Float32Array(H.bV(H.h(new V.dz(c.a,c.b,c.c,c.e,c.f,c.r,c.y,c.z,c.Q).aj(0,!0),"$ia",o,"$aa")))
C.b.fm(b.a,b.d,!1,i)
b=e.gt(e)
c=d.e
C.b.C(c.a,c.d,b.a,b.b,b.c)
b=e.gbo()
c=b.gbW(b)
if(!c){c=d.r
C.b.U(c.a,c.d,1)}else{c=d.f
a=b.d
a1=c.a
c=c.d
if(a<6)C.b.U(a1,c,0)
else C.b.U(a1,c,b.a)
c=d.r
C.b.U(c.a,c.d,0)}c=e.gcL()
b=d.x
C.b.O(b.a,b.d,c)
c=e.gcM()
b=d.y
C.b.O(b.a,b.d,c)
c=e.gcN()
b=d.z
C.b.O(b.a,b.d,c);++g}}if(s.db>0){k=this.dx.z.length
q=this.a.eW
C.b.U(q.a,q.d,k)
h=a2.db.ga7()
for(q=this.dx.z,p=q.length,u=[u],g=0,f=0;f<q.length;q.length===p||(0,H.A)(q),++f){e=q[f]
o=this.a.d3
if(g>=o.length)return H.e(o,g)
d=o[g]
o=e.gbo()
H.h(l,"$ia",u,"$aa")
if(!C.a.Y(l,o)){o.a=l.length
C.a.h(l,o)}o=e.gbl(e)
n=d.b
C.b.C(n.a,n.d,o.a,o.b,o.c)
o=e.gcX(e)
n=d.c
C.b.C(n.a,n.d,o.a,o.b,o.c)
o=e.gc2()
n=d.d
C.b.C(n.a,n.d,o.a,o.b,o.c)
o=e.gc_(e)
n=d.e
C.b.C(n.a,n.d,o.a,o.b,o.c)
o=h.bq(e.gbl(e))
n=d.f
C.b.C(n.a,n.d,o.a,o.b,o.c)
o=e.gbo()
n=o.gbW(o)
if(!n){o=d.x
C.b.U(o.a,o.d,1)}else{n=d.r
c=o.gbW(o)
b=n.a
n=n.d
if(!c)C.b.U(b,n,0)
else C.b.U(b,n,o.gkz(o))
o=d.x
C.b.U(o.a,o.d,0)}o=e.gt(e)
n=d.y
C.b.C(n.a,n.d,o.a,o.b,o.c)
o=e.glt()
n=d.z
C.b.O(n.a,n.d,o)
o=e.glu()
n=d.Q
C.b.O(n.a,n.d,o)
o=e.gcL()
n=d.ch
C.b.O(n.a,n.d,o)
o=e.gcM()
n=d.cx
C.b.O(n.a,n.d,o)
o=e.gcN()
n=d.cy
C.b.O(n.a,n.d,o);++g}}}switch(s.f){case C.d:break
case C.j:break
case C.h:this.a_(l,this.Q.d)
u=this.a
q=this.Q.d
u.ar(u.eH,u.bM,q)
break
case C.i:this.a_(l,this.Q.e)
u=this.a
q=this.Q.e
u.am(u.eI,u.bM,q)
break}if(s.fr){u=this.a
q=a2.Q
if(q==null){q=a2.db.ga7().d8()
a2.Q=q}u=u.id
u.toString
u.aq(q.aj(0,!0))}if(s.dy){this.a_(l,this.ch)
u=this.a
q=this.ch
u.am(u.eJ,u.eK,q)
switch(s.r){case C.d:break
case C.j:u=this.a
q=this.cx.f
u=u.bN
u.toString
p=q.a
o=q.b
q=q.c
C.b.C(u.a,u.d,p,o,q)
break
case C.h:this.a_(l,this.cx.d)
u=this.a
q=this.cx.d
u.ar(u.eL,u.bO,q)
q=this.a
u=this.cx.f
q=q.bN
q.toString
p=u.a
o=u.b
u=u.c
C.b.C(q.a,q.d,p,o,u)
break
case C.i:this.a_(l,this.cx.e)
u=this.a
q=this.cx.e
u.am(u.eM,u.bO,q)
q=this.a
u=this.cx.f
q=q.bN
q.toString
p=u.a
o=u.b
u=u.c
C.b.C(q.a,q.d,p,o,u)
break}switch(s.x){case C.d:break
case C.j:u=this.a
q=this.cy.f
u=u.bQ
u.toString
p=q.a
o=q.b
q=q.c
C.b.C(u.a,u.d,p,o,q)
q=this.a
o=this.cy.ch
q=q.bP
C.b.O(q.a,q.d,o)
break
case C.h:this.a_(l,this.cy.d)
u=this.a
q=this.cy.d
u.ar(u.eN,u.bR,q)
q=this.a
u=this.cy.f
q=q.bQ
q.toString
p=u.a
o=u.b
u=u.c
C.b.C(q.a,q.d,p,o,u)
u=this.a
o=this.cy.ch
u=u.bP
C.b.O(u.a,u.d,o)
break
case C.i:this.a_(l,this.cy.e)
u=this.a
q=this.cy.e
u.am(u.eO,u.bR,q)
q=this.a
u=this.cy.f
q=q.bQ
q.toString
p=u.a
o=u.b
u=u.c
C.b.C(q.a,q.d,p,o,u)
u=this.a
o=this.cy.ch
u=u.bP
C.b.O(u.a,u.d,o)
break}}u=s.y
q=u!==C.d
if(q){switch(u){case C.d:break
case C.j:u=this.a
p=this.db.f
u=u.bS
C.b.O(u.a,u.d,p)
break
case C.h:this.a_(l,this.db.d)
u=this.a
p=this.db.d
u.ar(u.eP,u.bT,p)
p=this.a
u=this.db.f
p=p.bS
C.b.O(p.a,p.d,u)
break
case C.i:this.a_(l,this.db.e)
u=this.a
p=this.db.e
u.am(u.eQ,u.bT,p)
p=this.a
u=this.db.f
p=p.bS
C.b.O(p.a,p.d,u)
break}u=a2.a
C.b.cY(u,3042)
C.b.jV(u,770,771)}for(j=0;j<l.length;++j)l[j].a5(a2)
u=a3.e
u.a5(a2)
u.ai(a2)
u.aR(a2)
if(q)C.b.ki(a2.a,3042)
for(u=a2.a,j=0;j<l.length;++j){q=l[j]
if(q.c){q.c=!1
C.b.cI(u,33984+q.a)
C.b.aK(u,34067,null)}}q=this.a
q.toString
C.b.ds(u,null)
q.x.ey()},
i:function(a){var u=this.a
if(u!=null)return u.b
else return this.dT().at},
shi:function(a){this.e=H.h(a,"$ia_",[V.aq],"$aa_")}}
O.fy.prototype={
aI:function(){this.dE()
var u=this.f
if(!(Math.abs(u-1)<$.O().a)){this.f=1
u=new D.H(this.b,u,1,this,[P.p])
u.b=!0
this.a.a0(u)}}}
O.dy.prototype={
aI:function(){},
aX:function(){},
jX:function(a){var u
if(this.c!==C.d){this.c=C.d
u=this.a
u.a=null
u.a0(null)}this.aI()
this.a.a0(null)}}
O.fz.prototype={}
O.aS.prototype={
cD:function(a){var u,t
if(!J.U(this.f,a)){u=this.f
this.f=a
t=new D.H(this.b+".color",u,a,this,[V.t])
t.b=!0
this.a.a0(t)}},
aI:function(){this.dE()
this.cD(new V.t(0,0,0))},
aX:function(){this.fP()
this.cD(new V.t(1,1,1))},
st:function(a,b){var u
if(this.c===C.d){this.c=C.j
this.aX()
u=this.a
u.a=null
u.a0(null)}this.cD(b)}}
O.fB.prototype={
bz:function(a){var u=this.ch
if(!(Math.abs(u-a)<$.O().a)){this.ch=a
u=new D.H(this.b+".refraction",u,a,this,[P.p])
u.b=!0
this.a.a0(u)}},
aI:function(){this.dF()
this.bz(1)},
aX:function(){this.bt()
this.bz(1)},
saM:function(a){var u
if(a<=0)this.jX(0)
else if(this.c===C.d){this.c=C.j
this.bt()
this.bz(1)
u=this.a
u.a=null
u.a0(null)}this.bz(a)}}
O.fC.prototype={
bA:function(a){var u=this.ch
if(!(Math.abs(u-a)<$.O().a)){this.ch=a
u=new D.H(this.b+".shininess",u,a,this,[P.p])
u.b=!0
this.a.a0(u)}},
aI:function(){this.dF()
this.bA(100)},
aX:function(){this.bt()
this.bA(100)}}
O.dO.prototype={
gu:function(){var u=this.e
if(u==null){u=D.J()
this.e=u}return u},
a0:function(a){var u
H.d(a,"$iy")
u=this.e
if(u!=null)u.J(a)},
cv:function(){return this.a0(null)},
fe:function(a,b){var u,t,s,r,q,p
if(this.a==null){u=H.d(a.fr.k(0,"Skybox"),"$idP")
if(u==null){t=a.a
u=new A.dP(t,"Skybox")
u.dG(t,"Skybox")
u.f5($.mV,$.mU)
u.z=u.x.k(0,"posAttr")
u.Q=H.i(u.y.k(0,"fov"),"$iX")
u.ch=H.i(u.y.k(0,"ratio"),"$iX")
u.cx=H.i(u.y.k(0,"boxClr"),"$iG")
u.cy=H.i(u.y.k(0,"boxTxt"),"$iaf")
u.db=H.i(u.y.k(0,"viewMat"),"$iau")
a.em(u)}this.a=u}if(b.e==null){t=b.d.eu(new Z.eb(a.a),$.aN())
t.aN($.aN()).e=this.a.z.c
b.e=t}t=this.c
if(t!=null){t.a=1
t.a5(a)}t=a.d
s=a.c
r=this.a
r.a5(a)
q=this.b
p=r.Q
C.b.O(p.a,p.d,q)
q=r.ch
C.b.O(q.a,q.d,t/s)
s=this.c
r.cy.dB(s)
s=this.d
t=r.cx
C.b.C(t.a,t.d,s.a,s.b,s.c)
s=a.db.ga7().d8()
r=r.db
r.toString
r.aq(s.aj(0,!0))
t=b.e
if(t instanceof Z.c8){t.a5(a)
t.ai(a)
t.aR(a)}else b.e=null
t=this.a
t.toString
C.b.ds(a.a,null)
t.x.ey()
t=this.c
if(t!=null)t.aR(a)}}
O.bs.prototype={}
T.cw.prototype={}
T.cx.prototype={
gu:function(){var u=this.e
if(u==null){u=D.J()
this.e=u}return u},
a5:function(a){var u
if(!this.c&&this.d>=6){this.c=!0
u=a.a
C.b.cI(u,33984+this.a)
C.b.aK(u,34067,this.b)}},
aR:function(a){var u
if(this.c){this.c=!1
u=a.a
C.b.cI(u,33984+this.a)
C.b.aK(u,34067,null)}}}
T.hg.prototype={
aW:function(a,b,c,d,e,f){var u,t
u=document.createElement("img")
u.src=c;++this.d
t=W.n
W.a4(u,"load",H.k(new T.hh(this,u,!1,b,!1,d,a),{func:1,ret:-1,args:[t]}),!1,t)},
iX:function(a,b,c){var u,t,s,r
b=V.kb(b,2)
u=V.kb(a.width,2)
t=V.kb(a.height,2)
u=Math.min(u,b)
t=Math.min(t,b)
if(a.width===u&&a.height===t)return a
else{s=W.jH(null,null)
s.width=u
s.height=t
r=H.d(C.q.fv(s,"2d"),"$ibB")
r.imageSmoothingEnabled=!1;(r&&C.D).kk(r,a,0,0,s.width,s.height)
return P.nK(C.D.hC(r,0,0,s.width,s.height))}}}
T.hh.prototype={
$1:function(a){var u,t,s
u=this.a
t=u.iX(this.b,u.c,this.c)
s=u.a
C.b.aK(s,34067,this.d)
C.b.kY(s,37440,this.e?1:0)
C.b.la(s,this.f,0,6408,6408,5121,t)
C.b.aK(s,34067,null)
s=this.r
if(++s.d>=6){s=s.e
if(s!=null)s.kn()}++u.e},
$S:13}
V.b0.prototype={
aO:function(a){return!0},
i:function(a){return"all"},
$iaw:1}
V.aw.prototype={}
V.dv.prototype={
aO:function(a){var u,t,s
for(u=this.a,t=u.length,s=0;s<u.length;u.length===t||(0,H.A)(u),++s)if(u[s].aO(a))return!0
return!1},
i:function(a){var u,t,s,r,q
for(u=this.a,t=u.length,s="",r=0;r<u.length;u.length===t||(0,H.A)(u),++r){q=u[r]
if(s.length!==0)s+=", "
s+=q.i(0)}return s},
sae:function(a){this.a=H.h(a,"$ia",[V.aw],"$aa")},
$iaw:1}
V.ar.prototype={
aO:function(a){return!this.fO(a)},
i:function(a){return"!["+this.dD(0)+"]"}}
V.fS.prototype={
aO:function(a){return this.a<=a&&this.b>=a},
i:function(a){var u,t
u=H.bP(this.a)
t=H.bP(this.b)
return u+".."+t},
$iaw:1}
V.h_.prototype={
fU:function(a){var u,t
if(a.a.length<=0)throw H.c(P.v("May not create a SetMatcher with zero characters."))
u=new H.aJ([P.m,P.M])
for(t=new H.ci(a,a.gm(a),0,[H.a9(a,"V",0)]);t.F();)u.q(0,t.d,!0)
this.sj_(u)},
aO:function(a){return this.a.bD(a)},
i:function(a){return P.dS(this.a.gaC(),0,null)},
sj_:function(a){this.a=H.h(a,"$iI",[P.m,P.M],"$aI")},
$iaw:1}
V.cs.prototype={
l:function(a,b){var u,t,s,r
for(u=this.c,t=u.length,s=0;s<t;++s){r=u[s]
if(r.b.b===b)return r}r=new V.cz(this.a.j(0,b))
r.sae(H.b([],[V.aw]))
r.c=!1
C.a.h(this.c,r)
return r},
kr:function(a){var u,t,s,r
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.A)(u),++s){r=u[s]
if(r.aO(a))return r}return},
i:function(a){return this.b},
sji:function(a){this.c=H.h(a,"$ia",[V.cz],"$aa")}}
V.e_.prototype={
i:function(a){var u,t
u=H.kd(this.b,"\n","\\n")
t=H.kd(u,"\t","\\t")
return this.a+":"+this.c+':"'+t+'"'}}
V.cy.prototype={
aQ:function(a,b,c){var u,t,s
H.h(c,"$ia",[P.f],"$aa")
for(u=c.length,t=0;t<c.length;c.length===u||(0,H.A)(c),++t){s=c[t]
this.c.q(0,s,b)}},
i:function(a){return this.b},
siR:function(a){var u=P.f
this.c=H.h(a,"$iI",[u,u],"$aI")}}
V.hj.prototype={
j:function(a,b){var u=this.a.k(0,b)
if(u==null){u=new V.cs(this,b)
u.sji(H.b([],[V.cz]))
u.d=null
this.a.q(0,b,u)}return u},
S:function(a){var u,t
u=this.b.k(0,a)
if(u==null){u=new V.cy(this,a)
t=P.f
u.siR(new H.aJ([t,t]))
this.b.q(0,a,u)}return u},
fl:function(a){var u,t,s,r,q,p,o,n,m,l,k,j
u=H.b([],[V.e_])
t=this.c
s=[P.m]
r=H.b([],s)
for(q=a.length,p=null,o=0;!0;){if(o>=q){if(p!=null)C.a.h(u,p)
return u}n=C.c.K(a,o)
m=t.kr(n)
if(m==null){if(p==null){C.a.h(r,n)
l=P.dS(r,0,null)
throw H.c(P.v("Untokenizable string [state: "+t.b+", index "+o+']: "'+l+'"'))}C.a.h(u,p)
o=p.c+1
r=H.b([],s)
t=this.c
p=null}else{if(!m.c)C.a.h(r,n)
t=m.b
if(t.d!=null){l=P.dS(r,0,null)
k=t.d
j=k.c.k(0,l)
p=new V.e_(j==null?k.b:j,l,o)}++o}}},
sj7:function(a){this.a=H.h(a,"$iI",[P.f,V.cs],"$aI")},
sjb:function(a){this.b=H.h(a,"$iI",[P.f,V.cy],"$aI")}}
V.cz.prototype={
i:function(a){return this.b.b+": "+this.dD(0)}}
X.bz.prototype={$iaU:1}
X.f8.prototype={
gu:function(){var u=this.x
if(u==null){u=D.J()
this.x=u}return u},
ax:function(a){var u=this.x
if(u!=null)u.J(a)},
sev:function(a,b){var u
if(this.b){this.b=!1
u=new D.H("clearColor",!0,!1,this,[P.M])
u.b=!0
this.ax(u)}},
a5:function(a){var u,t,s,r,q,p,o,n
u=a.a
C.b.jU(u,36160,null)
C.b.cY(u,2884)
C.b.cY(u,2929)
C.b.kh(u,513)
t=u.drawingBufferWidth
s=u.drawingBufferHeight
r=this.r
q=r.a
if(typeof t!=="number")return H.B(t)
p=C.e.au(q*t)
q=r.b
if(typeof s!=="number")return H.B(s)
o=C.e.au(q*s)
q=C.e.au(r.c*t)
a.c=q
r=C.e.au(r.d*s)
a.d=r
C.b.li(u,p,o,q,r)
C.b.k_(u,this.c)
if(this.b){r=this.a
C.b.jZ(u,r.a,r.b,r.c,r.d)
n=16640}else n=256
C.b.jY(u,n)}}
X.fd.prototype={
gu:function(){var u=this.b
if(u==null){u=D.J()
this.b=u}return u},
a5:function(a){var u
a.cy.bZ(V.bL())
u=V.bL()
a.db.bZ(u)},
aR:function(a){a.cy.aP()
a.db.aP()},
$iaU:1,
$ibz:1}
X.dG.prototype={
gu:function(){var u=this.f
if(u==null){u=D.J()
this.f=u}return u},
ax:function(a){var u
H.d(a,"$iy")
u=this.f
if(u!=null)u.J(a)},
hb:function(){return this.ax(null)},
a5:function(a){var u,t,s,r,q,p,o,n,m,l
u=a.c
t=a.d
s=this.c
r=this.d
q=this.e
p=q-r
o=1/Math.tan(s*0.5)
n=V.aT(-o/(u/t),0,0,0,0,o,0,0,0,0,q/p,-q*r/p,0,0,1,0)
a.cy.bZ(n)
u=$.kG
if(u==null){u=V.kI()
t=V.l3()
s=$.l_
if(s==null){s=new V.D(0,0,-1)
$.l_=s}s=V.kB(u,t,s)
$.kG=s
m=s}else m=u
u=this.b
if(u!=null){l=u.b3(a,this)
if(l!=null)m=l.A(0,m)}a.db.bZ(m)},
aR:function(a){a.cy.aP()
a.db.aP()},
$iaU:1,
$ibz:1}
X.cu.prototype={}
V.bi.prototype={
bu:function(a){this.b=new P.fb(C.Y)
this.c=null
this.scj(H.b([],[[P.a,W.aA]]))},
P:function(a,b){var u,t,s,r,q,p,o,n,m
u=this.d
if(u.length===0)C.a.h(u,H.b([],[W.aA]))
t=a.split("\n")
for(u=t.length,s=[W.aA],r=!0,q=0;q<u;++q){p=t[q]
if(r)r=!1
else C.a.h(this.d,H.b([],s))
o=document.createElement("div")
o.className="codePart"
H.F(p)
n=this.b.hn(p,0,p.length)
m=n==null?p:n
C.k.fG(o,H.kd(m," ","&nbsp;"))
m=o.style
m.color=b
C.a.h(C.a.gaD(this.d),o)}},
fc:function(a){var u,t,s,r
H.h(a,"$ia",[P.f],"$aa")
this.scj(H.b([],[[P.a,W.aA]]))
u=C.a.l(a,"\n")
t=this.c
if(t==null){t=this.bE()
this.c=t}for(t=t.fl(u),s=t.length,r=0;r<t.length;t.length===s||(0,H.A)(t),++r)this.bY(t[r])},
scj:function(a){this.d=H.h(a,"$ia",[[P.a,W.aA]],"$aa")}}
V.jy.prototype={
$1:function(a){H.d(a,"$iaW")
P.kc(C.e.fk(this.a.gkx(),2)+" fps")},
$S:51}
V.eS.prototype={
bY:function(a){switch(a.a){case"Class":this.P(a.b,"#551")
break
case"Comment":this.P(a.b,"#777")
break
case"Id":this.P(a.b,"#111")
break
case"Num":this.P(a.b,"#191")
break
case"Reserved":this.P(a.b,"#119")
break
case"String":this.P(a.b,"#171")
break
case"Symbol":this.P(a.b,"#616")
break
case"Type":this.P(a.b,"#B11")
break
case"Whitespace":this.P(a.b,"#111")
break}},
bE:function(){var u,t,s,r
u=V.hk()
u.c=u.j(0,"Start")
t=u.j(0,"Start").l(0,"Id")
s=V.w(new H.u("_"))
C.a.h(t.a,s)
s=V.W("a","z")
C.a.h(t.a,s)
s=V.W("A","Z")
C.a.h(t.a,s)
s=u.j(0,"Id").l(0,"Id")
t=V.w(new H.u("_"))
C.a.h(s.a,t)
t=V.W("0","9")
C.a.h(s.a,t)
t=V.W("a","z")
C.a.h(s.a,t)
t=V.W("A","Z")
C.a.h(s.a,t)
t=u.j(0,"Start").l(0,"Int")
s=V.W("0","9")
C.a.h(t.a,s)
s=u.j(0,"Int").l(0,"Int")
t=V.W("0","9")
C.a.h(s.a,t)
t=u.j(0,"Int").l(0,"FloatDot")
s=V.w(new H.u("."))
C.a.h(t.a,s)
s=u.j(0,"FloatDot").l(0,"Float")
t=V.W("0","9")
C.a.h(s.a,t)
t=u.j(0,"Float").l(0,"Float")
s=V.W("0","9")
C.a.h(t.a,s)
s=u.j(0,"Start").l(0,"Sym")
t=V.w(new H.u("<>{}()\\-+*%!&|=.,?:;"))
C.a.h(s.a,t)
t=u.j(0,"Sym").l(0,"Sym")
s=V.w(new H.u("<>{}()\\-+*%!&|=.,?:;"))
C.a.h(t.a,s)
s=u.j(0,"Start").l(0,"OpenDoubleStr")
t=V.w(new H.u('"'))
C.a.h(s.a,t)
t=u.j(0,"OpenDoubleStr").l(0,"CloseDoubleStr")
s=V.w(new H.u('"'))
C.a.h(t.a,s)
s=u.j(0,"OpenDoubleStr").l(0,"EscDoubleStr")
t=V.w(new H.u("\\"))
C.a.h(s.a,t)
t=u.j(0,"EscDoubleStr").l(0,"OpenDoubleStr")
s=V.w(new H.u('"'))
C.a.h(t.a,s)
C.a.h(u.j(0,"OpenDoubleStr").l(0,"OpenDoubleStr").a,new V.b0())
s=u.j(0,"Start").l(0,"OpenSingleStr")
t=V.w(new H.u("'"))
C.a.h(s.a,t)
t=u.j(0,"OpenSingleStr").l(0,"CloseSingleStr")
s=V.w(new H.u("'"))
C.a.h(t.a,s)
s=u.j(0,"OpenSingleStr").l(0,"EscSingleStr")
t=V.w(new H.u("\\"))
C.a.h(s.a,t)
t=u.j(0,"EscSingleStr").l(0,"OpenSingleStr")
s=V.w(new H.u("'"))
C.a.h(t.a,s)
C.a.h(u.j(0,"OpenSingleStr").l(0,"OpenSingleStr").a,new V.b0())
s=u.j(0,"Start").l(0,"Slash")
t=V.w(new H.u("/"))
C.a.h(s.a,t)
t=u.j(0,"Slash").l(0,"Comment")
s=V.w(new H.u("/"))
C.a.h(t.a,s)
s=u.j(0,"Comment").l(0,"EndComment")
t=V.w(new H.u("\n"))
C.a.h(s.a,t)
t=u.j(0,"Comment").l(0,"Comment")
s=new V.ar()
r=[V.aw]
s.sae(H.b([],r))
C.a.h(t.a,s)
t=V.w(new H.u("\n"))
C.a.h(s.a,t)
t=u.j(0,"Slash").l(0,"MLComment")
s=V.w(new H.u("*"))
C.a.h(t.a,s)
s=u.j(0,"MLComment").l(0,"MLCStar")
t=V.w(new H.u("*"))
C.a.h(s.a,t)
t=u.j(0,"MLCStar").l(0,"MLComment")
s=new V.ar()
s.sae(H.b([],r))
C.a.h(t.a,s)
t=V.w(new H.u("*"))
C.a.h(s.a,t)
t=u.j(0,"MLCStar").l(0,"EndComment")
s=V.w(new H.u("/"))
C.a.h(t.a,s)
s=u.j(0,"Start").l(0,"Whitespace")
t=V.w(new H.u(" \n\t"))
C.a.h(s.a,t)
t=u.j(0,"Whitespace").l(0,"Whitespace")
s=V.w(new H.u(" \n\t"))
C.a.h(t.a,s)
s=u.j(0,"Int")
s.d=s.a.S("Num")
s=u.j(0,"Float")
s.d=s.a.S("Num")
s=u.j(0,"Sym")
s.d=s.a.S("Symbol")
s=u.j(0,"CloseDoubleStr")
s.d=s.a.S("String")
s=u.j(0,"CloseSingleStr")
s.d=s.a.S("String")
s=u.j(0,"EndComment")
s.d=s.a.S("Comment")
s=u.j(0,"Whitespace")
s.d=s.a.S("Whitespace")
s=u.j(0,"Id")
t=s.a.S("Id")
s.d=t
s=[P.f]
t.aQ(0,"Class",H.b(["Constant","Depth","Entity","EntityPass","Math","Matrix4","Movers","Rotater","Scenes","Shapes","Techniques","ThreeDart"],s))
t.aQ(0,"Type",H.b(["bool","double","dynamic","false","int","List","Map","null","num","Object","String","this","true","var","void"],s))
t.aQ(0,"Reserved",H.b(["abstract","as","assert","async","await","break","case","catch","class","continue","const","default","deferred","do","else","enum","export","extends","external","factory","final","finally","for","get","if","implements","import","in","is","library","new","operator","part","rethrow","return","set","static","super","switch","sync","throw","try","typedef","with","while","yield"],s))
return u}}
V.f9.prototype={
bY:function(a){switch(a.a){case"Builtin":this.P(a.b,"#411")
break
case"Comment":this.P(a.b,"#777")
break
case"Id":this.P(a.b,"#111")
break
case"Num":this.P(a.b,"#191")
break
case"Preprocess":this.P(a.b,"#737")
break
case"Reserved":this.P(a.b,"#119")
break
case"Symbol":this.P(a.b,"#611")
break
case"Type":this.P(a.b,"#171")
break
case"Whitespace":this.P(a.b,"#111")
break}},
bE:function(){var u,t,s,r
u=V.hk()
u.c=u.j(0,"Start")
t=u.j(0,"Start").l(0,"Id")
s=V.w(new H.u("_"))
C.a.h(t.a,s)
s=V.W("a","z")
C.a.h(t.a,s)
s=V.W("A","Z")
C.a.h(t.a,s)
s=u.j(0,"Id").l(0,"Id")
t=V.w(new H.u("_"))
C.a.h(s.a,t)
t=V.W("0","9")
C.a.h(s.a,t)
t=V.W("a","z")
C.a.h(s.a,t)
t=V.W("A","Z")
C.a.h(s.a,t)
t=u.j(0,"Start").l(0,"Int")
s=V.W("0","9")
C.a.h(t.a,s)
s=u.j(0,"Int").l(0,"Int")
t=V.W("0","9")
C.a.h(s.a,t)
t=u.j(0,"Int").l(0,"FloatDot")
s=V.w(new H.u("."))
C.a.h(t.a,s)
s=u.j(0,"FloatDot").l(0,"Float")
t=V.W("0","9")
C.a.h(s.a,t)
t=u.j(0,"Float").l(0,"Float")
s=V.W("0","9")
C.a.h(t.a,s)
s=u.j(0,"Start").l(0,"Sym")
t=V.w(new H.u("<>{}()[]\\-+*%!&|=.,?:;"))
C.a.h(s.a,t)
t=u.j(0,"Sym").l(0,"Sym")
s=V.w(new H.u("<>{}()[]\\-+*%!&|=.,?:;"))
C.a.h(t.a,s)
s=u.j(0,"Start").l(0,"Slash")
t=V.w(new H.u("/"))
C.a.h(s.a,t)
t=u.j(0,"Slash").l(0,"Comment")
s=V.w(new H.u("/"))
C.a.h(t.a,s)
C.a.h(u.j(0,"Slash").l(0,"Sym").a,new V.b0())
s=u.j(0,"Comment").l(0,"EndComment")
t=V.w(new H.u("\n"))
C.a.h(s.a,t)
t=u.j(0,"Comment").l(0,"Comment")
s=new V.ar()
r=[V.aw]
s.sae(H.b([],r))
C.a.h(t.a,s)
t=V.w(new H.u("\n"))
C.a.h(s.a,t)
t=u.j(0,"Start").l(0,"Preprocess")
s=V.w(new H.u("#"))
C.a.h(t.a,s)
s=u.j(0,"Preprocess").l(0,"Preprocess")
t=new V.ar()
t.sae(H.b([],r))
C.a.h(s.a,t)
s=V.w(new H.u("\n"))
C.a.h(t.a,s)
s=u.j(0,"Preprocess").l(0,"EndPreprocess")
t=V.w(new H.u("\n"))
C.a.h(s.a,t)
t=u.j(0,"Start").l(0,"Whitespace")
s=V.w(new H.u(" \n\t"))
C.a.h(t.a,s)
s=u.j(0,"Whitespace").l(0,"Whitespace")
t=V.w(new H.u(" \n\t"))
C.a.h(s.a,t)
t=u.j(0,"Int")
t.d=t.a.S("Num")
t=u.j(0,"Float")
t.d=t.a.S("Num")
t=u.j(0,"Sym")
t.d=t.a.S("Symbol")
t=u.j(0,"EndComment")
t.d=t.a.S("Comment")
t=u.j(0,"EndPreprocess")
t.d=t.a.S("Preprocess")
t=u.j(0,"Whitespace")
t.d=t.a.S("Whitespace")
t=u.j(0,"Id")
s=t.a.S("Id")
t.d=s
t=[P.f]
s.aQ(0,"Type",H.b(["float","double","int","void","bool","true","false","mat2","mat3","mat4","dmat2","dmat3","dmat4","mat2x2","mat2x3","mat2x4","dmat2x2","dmat2x3","dmat2x4","mat3x2","mat3x3","mat3x4","dmat3x2","dmat3x3","dmat3x4","mat4x2","mat4x3","mat4x4","dmat4x2","dmat4x3","dmat4x4","vec2","vec3","vec4","ivec2","ivec3","ivec4","bvec2","bvec3","bvec4","dvec2","dvec3","dvec4","uint","uvec2","uvec3","uvec4","sampler1D","sampler2D","sampler3D","samplerCube","sampler1DShadow","sampler2DShadow","samplerCubeShadow","sampler1DArray","sampler2DArray","sampler1DArrayShadow","sampler2DArrayShadow","isampler1D","isampler2D","isampler3D","isamplerCube","isampler1DArray","isampler2DArray","usampler1D","usampler2D","usampler3D","usamplerCube","usampler1DArray","usampler2DArray","sampler2DRect","sampler2DRectShadow","isampler2DRect","usampler2DRect","samplerBuffer","isamplerBuffer","usamplerBuffer","sampler2DMS","isampler2DMS","usampler2DMS","sampler2DMSArray","isampler2DMSArray","usampler2DMSArray","samplerCubeArray","samplerCubeArrayShadow","isamplerCubeArray","usamplerCubeArray"],t))
s.aQ(0,"Reserved",H.b(["attribute","break","case","centroid","const","continue","default","discard","do","else","flat","for","highp","if","in","inout","invariant","layout","lowp","mediump","noperspective","out","patch","precision","return","sample","smooth","struct","subroutine","switch","uniform","varying","while"],t))
s.aQ(0,"Builtin",H.b(["gl_FragColor","gl_Position"],t))
return u}}
V.fa.prototype={
bY:function(a){switch(a.a){case"Attr":this.P(a.b,"#911")
this.P("=","#111")
break
case"Id":this.P(a.b,"#111")
break
case"Other":this.P(a.b,"#111")
break
case"Reserved":this.P(a.b,"#119")
break
case"String":this.P(a.b,"#171")
break
case"Symbol":this.P(a.b,"#616")
break}},
bE:function(){var u,t,s
u=V.hk()
u.c=u.j(0,"Start")
t=u.j(0,"Start").l(0,"Id")
s=V.w(new H.u("_"))
C.a.h(t.a,s)
s=V.W("a","z")
C.a.h(t.a,s)
s=V.W("A","Z")
C.a.h(t.a,s)
s=u.j(0,"Id").l(0,"Id")
t=V.w(new H.u("_"))
C.a.h(s.a,t)
t=V.W("0","9")
C.a.h(s.a,t)
t=V.W("a","z")
C.a.h(s.a,t)
t=V.W("A","Z")
C.a.h(s.a,t)
t=u.j(0,"Id").l(0,"Attr")
s=V.w(new H.u("="))
C.a.h(t.a,s)
t.c=!0
t=u.j(0,"Start").l(0,"Sym")
s=V.w(new H.u("</\\-!>="))
C.a.h(t.a,s)
s=u.j(0,"Sym").l(0,"Sym")
t=V.w(new H.u("</\\-!>="))
C.a.h(s.a,t)
t=u.j(0,"Start").l(0,"OpenStr")
s=V.w(new H.u('"'))
C.a.h(t.a,s)
s=u.j(0,"OpenStr").l(0,"CloseStr")
t=V.w(new H.u('"'))
C.a.h(s.a,t)
t=u.j(0,"OpenStr").l(0,"EscStr")
s=V.w(new H.u("\\"))
C.a.h(t.a,s)
s=u.j(0,"EscStr").l(0,"OpenStr")
t=V.w(new H.u('"'))
C.a.h(s.a,t)
C.a.h(u.j(0,"OpenStr").l(0,"OpenStr").a,new V.b0())
C.a.h(u.j(0,"Start").l(0,"Other").a,new V.b0())
t=u.j(0,"Other").l(0,"Other")
s=new V.ar()
s.sae(H.b([],[V.aw]))
C.a.h(t.a,s)
t=V.w(new H.u('</\\-!>=_"'))
C.a.h(s.a,t)
t=V.W("a","z")
C.a.h(s.a,t)
t=V.W("A","Z")
C.a.h(s.a,t)
t=u.j(0,"Sym")
t.d=t.a.S("Symbol")
t=u.j(0,"CloseStr")
t.d=t.a.S("String")
t=u.j(0,"Id")
s=t.a.S("Id")
t.d=s
s.aQ(0,"Reserved",H.b(["DOCTYPE","html","head","meta","link","title","body","script"],[P.f]))
s=u.j(0,"Attr")
s.d=s.a.S("Attr")
s=u.j(0,"Other")
s.d=s.a.S("Other")
return u}}
V.fO.prototype={
fc:function(a){H.h(a,"$ia",[P.f],"$aa")
this.scj(H.b([],[[P.a,W.aA]]))
this.P(C.a.l(a,"\n"),"#111")},
bY:function(a){},
bE:function(){return}}
V.fQ.prototype={
cJ:function(a,b,c,d){var u,t,s,r,q,p,o,n
H.k(c,{func:1,ret:-1})
if(this.c==null)return
u=this.a
t=P.kW().gdj().k(0,H.j(u))
if(t==null)if(d){c.$0()
this.eg(b)
s=!0}else s=!1
else if(t===b){c.$0()
s=!0}else s=!1
r=document
q=r.createElement("label")
p=q.style
p.whiteSpace="nowrap"
J.kk(this.c).h(0,q)
o=W.mn("radio")
o.checked=s
o.name=u
u=W.n
W.a4(o,"change",H.k(new V.fR(this,o,c,b),{func:1,ret:-1,args:[u]}),!1,u)
C.G.G(q,o)
n=r.createElement("span")
n.textContent=b
C.G.G(q,n)
J.kk(this.c).h(0,r.createElement("br"))},
a8:function(a,b,c){return this.cJ(a,b,c,!1)},
eg:function(a){var u,t,s,r,q
u=P.kW()
t=P.f
s=P.mw(u.gdj(),t,t)
s.q(0,this.a,a)
r=u.ff(0,s)
t=window.history
q=r.i(0)
t.toString;(t&&C.X).iT(t,new P.iy([],[]).dt(""),"",q)}}
V.fR.prototype={
$1:function(a){if(this.b.checked){this.c.$0()
this.a.eg(this.d)}},
$S:13}
V.h4.prototype={
fV:function(a,b){var u,t,s,r,q,p,o
u=document
t=u.body
s=u.createElement("div")
s.className="scrollTop";(t&&C.p).G(t,s)
r=u.createElement("div")
r.className="scrollPage"
C.p.G(t,r)
q=u.createElement("div")
q.className="pageCenter"
C.k.G(r,q)
if(a.length!==0){u.title=a
p=u.createElement("div")
p.className="pageTitle"
p.textContent=a
C.k.G(q,p)}o=u.createElement("div")
this.a=o
C.k.G(q,o)
this.b=null
o=W.n
W.a4(u,"scroll",H.k(new V.h6(s),{func:1,ret:-1,args:[o]}),!1,o)},
el:function(a){var u,t,s,r,q,p,o,n,m,l,k
H.h(a,"$ia",[P.f],"$aa")
this.j2()
u=document
t=u.createElement("div")
t.className="textPar"
for(s=this.b.fl(C.a.kE(a)),r=s.length,q=0;q<s.length;s.length===r||(0,H.A)(s),++q){p=s[q]
switch(p.a){case"Bold":o=u.createElement("div")
o.className="boldPar"
o.textContent=p.b
C.k.G(t,o)
break
case"Italic":o=u.createElement("div")
o.className="italicPar"
o.textContent=p.b
C.k.G(t,o)
break
case"Code":o=u.createElement("div")
o.className="codePar"
o.textContent=p.b
C.k.G(t,o)
break
case"Link":n=p.b
if(H.o8(n,"|",0)){m=n.split("|")
l=u.createElement("a")
l.className="linkPar"
if(1>=m.length)return H.e(m,1)
l.href=H.F(m[1])
l.textContent=H.F(m[0])
C.k.G(t,l)}else{k=P.eu(C.J,n,C.m,!1)
l=u.createElement("a")
l.className="linkPar"
l.href="#"+H.j(k)
l.textContent=n
C.k.G(t,l)}break
case"Other":o=u.createElement("div")
o.className="normalPar"
o.textContent=p.b
C.k.G(t,o)
break}}C.k.G(this.a,t)},
fu:function(a){var u,t,s,r
u=new V.eS("dart")
u.bu("dart")
t=new V.f9("glsl")
t.bu("glsl")
s=new V.fa("html")
s.bu("html")
r=C.a.kt(H.b([u,t,s],[V.bi]),new V.h7(a))
if(r!=null)return r
u=new V.fO("plain")
u.bu("plain")
return u},
ei:function(a4,a5,a6,a7){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3
H.h(a7,"$ia",[P.f],"$aa")
u=H.b([],[P.m])
for(t=!1,s=0;s<a7.length;++s){r=a7[s]
if(J.cX(r).aa(r,"+")){C.a.q(a7,s,C.c.aw(r,1))
C.a.h(u,1)
t=!0}else if(C.c.aa(r,"-")){C.a.q(a7,s,C.c.aw(r,1))
C.a.h(u,-1)
t=!0}else C.a.h(u,0)}q=this.fu(a5)
q.fc(a7)
p=document
o=p.createElement("div")
o.className="codeTableScroll"
n=p.createElement("table")
n.className="codeTable"
C.k.G(o,n)
C.k.G(this.a,o)
m=P.eu(C.J,a4,C.m,!1)
l=p.createElement("tr")
l.className="headerRow"
k=p.createElement("td")
k.className="headerCell"
k.colSpan=t?3:2
j=p.createElement("div")
j.className="tableHeader"
j.id=m
i=W.km(null)
i.href="#"+H.j(m)
i.textContent=a4
C.k.G(j,i)
C.x.G(k,j)
C.n.G(l,k)
C.o.G(n,l)
if(t)for(h=a6,g=h,s=0;f=q.d,s<f.length;++s){r=f[s]
e=p.createElement("tr")
e.className="codeTableRow"
d=p.createElement("td")
d.className="codeLineNums codeLineLight"
c=p.createElement("td")
c.className="codeLineNums"
if(s>=u.length)return H.e(u,s)
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
for(f=r.length,a0=0;a0<r.length;r.length===f||(0,H.A)(r),++a0)C.x.G(a,r[a0])
C.n.G(e,d)
C.n.G(e,c)
C.n.G(e,a)
C.o.G(n,e)}else for(f=q.d,a1=f.length,a2=a6,a0=0;a0<f.length;f.length===a1||(0,H.A)(f),++a0){r=f[a0]
e=p.createElement("tr")
e.className="codeTableRow"
d=p.createElement("td")
d.className="codeLineNums";++a2
d.textContent=""+a2
c=p.createElement("td")
c.className="codeLineText"
for(a3=C.a.gV(r);a3.F();)C.x.G(c,a3.gM())
C.n.G(e,d)
C.n.G(e,c)
C.o.G(n,e)}},
jK:function(a){var u,t,s,r,q,p,o
H.h(a,"$ia",[P.f],"$aa")
u=document
t=u.createElement("table")
t.id="shellTable"
s=t.style
s.width="100%"
s.padding="0px"
s.marginLeft="auto"
s.marginRight="auto"
C.k.G(this.a,t)
r=C.o.hE(t,-1)
s=H.d((r&&C.n).e0(r,-1),"$iaV").style
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
o=H.d(C.n.e0(r,-1),"$iaV")
s=o.style
s.textAlign="center"
s.verticalAlign="top"
s.marginLeft="auto"
s.marginRight="auto";(o&&C.x).G(o,p)}},
j2:function(){var u,t,s,r
if(this.b!=null)return
u=V.hk()
u.c=u.j(0,"Start")
t=u.j(0,"Start").l(0,"Bold")
s=V.w(new H.u("*"))
C.a.h(t.a,s)
t.c=!0
t=u.j(0,"Bold").l(0,"Bold")
s=new V.ar()
r=[V.aw]
s.sae(H.b([],r))
C.a.h(t.a,s)
t=V.w(new H.u("*"))
C.a.h(s.a,t)
t=u.j(0,"Bold").l(0,"BoldEnd")
s=V.w(new H.u("*"))
C.a.h(t.a,s)
t.c=!0
t=u.j(0,"Start").l(0,"Italic")
s=V.w(new H.u("_"))
C.a.h(t.a,s)
t.c=!0
t=u.j(0,"Italic").l(0,"Italic")
s=new V.ar()
s.sae(H.b([],r))
C.a.h(t.a,s)
t=V.w(new H.u("_"))
C.a.h(s.a,t)
t=u.j(0,"Italic").l(0,"ItalicEnd")
s=V.w(new H.u("_"))
C.a.h(t.a,s)
t.c=!0
t=u.j(0,"Start").l(0,"Code")
s=V.w(new H.u("`"))
C.a.h(t.a,s)
t.c=!0
t=u.j(0,"Code").l(0,"Code")
s=new V.ar()
s.sae(H.b([],r))
C.a.h(t.a,s)
t=V.w(new H.u("`"))
C.a.h(s.a,t)
t=u.j(0,"Code").l(0,"CodeEnd")
s=V.w(new H.u("`"))
C.a.h(t.a,s)
t.c=!0
t=u.j(0,"Start").l(0,"LinkHead")
s=V.w(new H.u("["))
C.a.h(t.a,s)
t.c=!0
t=u.j(0,"LinkHead").l(0,"LinkTail")
s=V.w(new H.u("|"))
C.a.h(t.a,s)
s=u.j(0,"LinkHead").l(0,"LinkEnd")
t=V.w(new H.u("]"))
C.a.h(s.a,t)
s.c=!0
s=u.j(0,"LinkHead").l(0,"LinkHead")
t=new V.ar()
t.sae(H.b([],r))
C.a.h(s.a,t)
s=V.w(new H.u("|]"))
C.a.h(t.a,s)
s=u.j(0,"LinkTail").l(0,"LinkEnd")
t=V.w(new H.u("]"))
C.a.h(s.a,t)
s.c=!0
s=u.j(0,"LinkTail").l(0,"LinkTail")
t=new V.ar()
t.sae(H.b([],r))
C.a.h(s.a,t)
s=V.w(new H.u("|]"))
C.a.h(t.a,s)
C.a.h(u.j(0,"Start").l(0,"Other").a,new V.b0())
s=u.j(0,"Other").l(0,"Other")
t=new V.ar()
t.sae(H.b([],r))
C.a.h(s.a,t)
s=V.w(new H.u("*_`["))
C.a.h(t.a,s)
s=u.j(0,"BoldEnd")
s.d=s.a.S("Bold")
s=u.j(0,"ItalicEnd")
s.d=s.a.S("Italic")
s=u.j(0,"CodeEnd")
s.d=s.a.S("Code")
s=u.j(0,"LinkEnd")
s.d=s.a.S("Link")
s=u.j(0,"Other")
s.d=s.a.S("Other")
this.b=u}}
V.h6.prototype={
$1:function(a){P.kS(C.y,new V.h5(this.a))},
$S:13}
V.h5.prototype={
$0:function(){var u,t,s
u=C.e.au(document.documentElement.scrollTop)
t=this.a.style
s=H.j(-0.01*u)+"px"
t.top=s},
$S:0}
V.h7.prototype={
$1:function(a){return H.d(a,"$ibi").a===this.a},
$S:52}
D.jd.prototype={
$0:function(){var u,t
u=this.a
t=u.r
t.st(0,new V.t(0.1,0.1,0.1))
t=u.x
t.st(0,new V.t(0.2,0.2,0.2))
t=u.z
t.st(0,new V.t(1,1,1))
u.cy.st(0,new V.t(0,0,0))
u=u.cx
u.st(0,new V.t(1,1,1))},
$S:0}
D.je.prototype={
$0:function(){var u,t
u=this.a
t=u.r
t.st(0,new V.t(0.11,0.11,0.1))
t=u.x
t.st(0,new V.t(0.21,0.21,0.2))
t=u.z
t.st(0,new V.t(1,1,1))
u.cy.st(0,new V.t(0,0,0))
u=u.cx
u.st(0,new V.t(1,0.9,0.5))},
$S:0}
D.jf.prototype={
$0:function(){var u,t
u=this.a
t=u.r
t.st(0,new V.t(0.1,0.1,0.1))
t=u.x
t.st(0,new V.t(0.1,0.1,0.1))
t=u.z
t.st(0,new V.t(1,1,1))
u.cy.saM(0.4)
t=u.cy
t.st(0,new V.t(0.6,0.6,0.6))
u=u.cx
u.st(0,new V.t(0.4,0.4,0.4))},
$S:0}
D.jo.prototype={
$0:function(){var u,t
u=this.a
t=u.r
t.st(0,new V.t(0.1,0.1,0.1))
t=u.x
t.st(0,new V.t(0.1,0.1,0.1))
t=u.z
t.st(0,new V.t(1,1,1))
u.cy.saM(0.4)
t=u.cy
t.st(0,new V.t(0.2,0.3,1))
u=u.cx
u.st(0,new V.t(0.3,0.3,0.3))},
$S:0}
D.jp.prototype={
$0:function(){var u,t
u=this.a
t=u.r
t.st(0,new V.t(0.1,0.1,0.1))
t=u.x
t.st(0,new V.t(0.1,0.1,0.1))
t=u.z
t.st(0,new V.t(1,1,1))
u.cy.saM(0.6)
t=u.cy
t.st(0,new V.t(0.8,0.8,0.8))
u=u.cx
u.st(0,new V.t(0.2,0.2,0.2))},
$S:0}
D.jq.prototype={
$0:function(){var u,t
u=this.a
t=u.r
t.st(0,new V.t(0.1,0.1,0.1))
t=u.x
t.st(0,new V.t(0.1,0.1,0.1))
t=u.z
t.st(0,new V.t(1,1,1))
u.cy.saM(0.6)
t=u.cy
t.st(0,new V.t(1,1,1))
u.cx.st(0,new V.t(0,0,0))},
$S:0}
D.jr.prototype={
$0:function(){var u,t
u=this.a
t=u.r
t.st(0,new V.t(0.1,0.1,0.1))
t=u.x
t.st(0,new V.t(0.1,0.1,0.1))
t=u.z
t.st(0,new V.t(1,1,1))
u.cy.saM(0.9)
t=u.cy
t.st(0,new V.t(1,0.8,0.8))
u.cx.st(0,new V.t(0,0,0))},
$S:0}
D.js.prototype={
$0:function(){var u,t
u=this.a
t=u.r
t.st(0,new V.t(0,0,0))
t=u.x
t.st(0,new V.t(0.1,0.1,0.1))
t=u.z
t.st(0,new V.t(0.1,0.1,0.1))
u.cy.saM(0.99)
t=u.cy
t.st(0,new V.t(0.95,0.95,0.95))
u.cx.st(0,new V.t(0,0,0))},
$S:0}
D.jt.prototype={
$0:function(){var u,t
u=this.a
t=u.r
t.st(0,new V.t(0.3,0.3,0.3))
t=u.x
t.st(0,new V.t(0.5,0.5,0.5))
t=u.z
t.st(0,new V.t(1,1,1))
u.cy.st(0,new V.t(0,0,0))
u=u.cx
u.st(0,new V.t(0.3,0.3,0.3))},
$S:0}
D.ju.prototype={
$0:function(){this.a.sac(0,F.k6(1,null,null,1))},
$S:0}
D.jv.prototype={
$0:function(){this.a.sac(0,F.k6(15,null,new D.jc(),15))},
$S:0}
D.jc.prototype={
$3:function(a,b,c){var u,t,s,r
u=Math.cos(c*4*3.141592653589793+3.141592653589793)
t=Math.cos(b*4*3.141592653589793+3.141592653589793)
s=a.f
s=new V.D(s.a,s.b,s.c)
r=s.w(0,Math.sqrt(s.H(s)))
s=a.f
t=r.A(0,u*0.1+t*0.1)
a.sa6(0,s.n(0,new V.S(t.a,t.b,t.c)))},
$S:5}
D.jg.prototype={
$0:function(){this.a.sac(0,F.lq(1,!0,!0,1,30,1))},
$S:0}
D.jh.prototype={
$0:function(){this.a.sac(0,F.lq(1,!0,!1,1,30,0))},
$S:0}
D.ji.prototype={
$0:function(){this.a.sac(0,F.lr(!0,!0,25,new D.jb(),50))},
$S:0}
D.jb.prototype={
$2:function(a,b){return Math.cos(b*4*3.141592653589793+3.141592653589793)*0.2+Math.cos(a*6*3.141592653589793)*0.3+0.8},
$S:6}
D.jj.prototype={
$0:function(){this.a.sac(0,F.lD(6,null,1,6))},
$S:0}
D.jk.prototype={
$0:function(){this.a.sac(0,F.lD(10,new D.ja(),1,10))},
$S:0}
D.ja.prototype={
$2:function(a,b){var u,t
u=a-0.5
t=b-0.5
return Math.cos(Math.sqrt(u*u+t*t)*3.141592653589793)*0.3},
$S:6}
D.jl.prototype={
$0:function(){this.a.sac(0,F.lF(30,1,15,0.5))},
$S:0}
D.jm.prototype={
$0:function(){this.a.sac(0,F.o_(120,1,2,12,0.3,3))},
$S:0}
D.jn.prototype={
$1:function(a){var u,t,s,r
H.d(a,"$iy")
u=this.a
t=this.b
s=t.a
r=[P.f]
u.ei("Vertex Shader","glsl",0,H.b((s==null?null:s.c).split("\n"),r))
t=t.a
u.ei("Fragment Shader","glsl",0,H.b((t==null?null:t.d).split("\n"),r))},
$S:9};(function aliases(){var u=J.aa.prototype
u.fL=u.i
u=J.dn.prototype
u.fN=u.i
u=P.l.prototype
u.fM=u.c3
u=W.P.prototype
u.ca=u.an
u=W.en.prototype
u.fQ=u.az
u=O.dy.prototype
u.dE=u.aI
u.fP=u.aX
u=O.aS.prototype
u.dF=u.aI
u.bt=u.aX
u=V.dv.prototype
u.fO=u.aO
u.dD=u.i})();(function installTearOffs(){var u=hunkHelpers._static_1,t=hunkHelpers._static_0,s=hunkHelpers.installStaticTearOff,r=hunkHelpers.installInstanceTearOff,q=hunkHelpers._instance_2u,p=hunkHelpers._instance_0u,o=hunkHelpers._instance_1u,n=hunkHelpers._instance_0i
u(P,"nE","n7",14)
u(P,"nF","n8",14)
u(P,"nG","n9",14)
t(P,"lp","nD",3)
s(W,"nT",4,null,["$4"],["nb"],26,0)
s(W,"nU",4,null,["$4"],["nc"],26,0)
var m
r(m=E.ak.prototype,"gfa",0,0,null,["$1","$0"],["fb","kP"],1,0)
r(m,"gf8",0,0,null,["$1","$0"],["f9","kM"],1,0)
q(m,"gkK","kL",8)
q(m,"gkN","kO",8)
r(m=E.dZ.prototype,"gdI",0,0,null,["$1","$0"],["dK","dJ"],1,0)
p(m,"gl4","fg",3)
o(m=X.e5.prototype,"gi8","i9",12)
o(m,"ghX","hY",12)
o(m,"gi2","i3",4)
o(m,"gic","ie",29)
o(m,"gia","ib",29)
o(m,"gii","ij",4)
o(m,"gim","io",4)
o(m,"gi6","i7",4)
o(m,"gik","il",4)
o(m,"gi4","i5",4)
o(m,"gip","iq",45)
o(m,"gir","is",12)
o(m,"giH","iI",11)
o(m,"giD","iE",11)
o(m,"giF","iG",11)
r(D.bk.prototype,"gh_",0,0,null,["$1","$0"],["aF","h0"],1,0)
r(m=D.dr.prototype,"ge5",0,0,null,["$1","$0"],["e6","ig"],1,0)
o(m,"git","iu",38)
q(m,"ghR","hS",24)
q(m,"gix","iy",24)
n(V.Q.prototype,"gm","d9",23)
n(V.D.prototype,"gm","d9",23)
r(m=U.cf.prototype,"gaU",0,0,null,["$1","$0"],["T","ad"],1,0)
q(m,"ghP","hQ",20)
q(m,"giv","iw",20)
r(m=U.e6.prototype,"gaU",0,0,null,["$1","$0"],["T","ad"],1,0)
o(m,"gcm","cn",2)
o(m,"gco","cp",2)
o(m,"gcq","cr",2)
r(m=U.e7.prototype,"gaU",0,0,null,["$1","$0"],["T","ad"],1,0)
o(m,"gcm","cn",2)
o(m,"gco","cp",2)
o(m,"gcq","cr",2)
o(m,"ghJ","hK",2)
o(m,"ghL","hM",2)
o(m,"gjg","jh",2)
o(m,"gje","jf",2)
o(m,"gjc","jd",2)
o(U.e8.prototype,"ghN","hO",2)
r(m=M.d8.prototype,"ga2",0,0,null,["$1","$0"],["a3","b6"],1,0)
q(m,"giz","iA",19)
q(m,"giB","iC",19)
r(M.da.prototype,"ga2",0,0,null,["$1","$0"],["a3","b6"],1,0)
r(m=M.de.prototype,"ga2",0,0,null,["$1","$0"],["a3","b6"],1,0)
q(m,"ghZ","i_",8)
q(m,"gi0","i1",8)
r(m=O.dw.prototype,"gcu",0,0,null,["$1","$0"],["a0","cv"],1,0)
r(m,"giV",0,0,null,["$1","$0"],["eb","iW"],1,0)
q(m,"ghT","hU",15)
q(m,"ghV","hW",15)
r(O.dO.prototype,"gcu",0,0,null,["$1","$0"],["a0","cv"],1,0)
r(X.dG.prototype,"gha",0,0,null,["$1","$0"],["ax","hb"],1,0)})();(function inheritance(){var u=hunkHelpers.mixin,t=hunkHelpers.inherit,s=hunkHelpers.inheritMany
t(P.L,null)
s(P.L,[H.jO,J.aa,J.ap,P.ej,P.l,H.ci,P.aQ,H.bG,H.cH,H.eO,H.fT,H.hn,P.bl,H.c9,H.eo,P.bK,H.fm,H.fo,H.fi,P.ep,P.b_,P.aD,P.ec,P.ha,P.ct,P.hb,P.aW,P.ah,P.iO,P.it,P.bT,P.ei,P.V,P.iF,P.fu,P.bC,P.fc,P.iM,P.iK,P.M,P.aj,P.ag,P.aP,P.fM,P.dR,P.ef,P.f7,P.bm,P.a,P.I,P.E,P.at,P.f,P.ae,P.bU,P.hD,P.iw,W.eQ,W.bv,W.av,W.dE,W.en,W.iA,W.df,W.ay,W.is,W.ev,P.ix,P.es,P.im,P.N,O.a_,O.cj,E.eI,E.ak,E.fU,E.dZ,Z.ea,Z.eb,Z.c8,Z.bn,Z.aY,D.eL,D.bE,D.y,X.d7,X.dp,X.fk,X.fr,X.ax,X.fD,X.hl,X.e5,D.bk,D.a2,D.dH,D.dQ,D.dW,D.dX,D.dY,V.t,V.ai,V.eZ,V.dz,V.aq,V.a0,V.S,V.as,V.dL,V.Q,V.D,U.e6,U.e7,U.e8,M.da,M.de,M.az,A.d4,A.eF,A.fA,A.cA,A.cE,A.cC,A.cF,A.cD,A.cG,A.bD,A.e1,A.hx,F.a3,F.f2,F.b6,F.fl,F.br,F.dN,F.h1,F.h2,F.h3,F.a8,F.hM,F.hN,F.hQ,F.hS,F.hT,F.hU,O.bs,O.dy,T.hg,V.b0,V.aw,V.dv,V.fS,V.h_,V.cs,V.e_,V.cy,V.hj,X.bz,X.cu,X.fd,X.dG,V.bi,V.fQ,V.h4])
s(J.aa,[J.fh,J.dm,J.dn,J.aH,J.bq,J.b4,H.bM,W.bF,W.bB,W.ed,W.eT,W.dc,W.dd,W.n,W.di,W.eg,W.b3,W.dt,W.el,W.dJ,W.aK,W.eq,W.ew,P.d5,P.dg,P.dI,P.bR,P.dM,P.dV,P.e2])
s(J.dn,[J.fN,J.bu,J.b5])
t(J.jN,J.aH)
s(J.bq,[J.dl,J.dk])
t(P.fq,P.ej)
s(P.fq,[H.e3,W.i3,W.am,P.f3])
t(H.u,H.e3)
s(P.l,[H.eW,H.fv,H.cJ])
s(H.eW,[H.bJ,H.fn])
s(P.aQ,[H.fw,H.hY])
t(H.fx,H.bJ)
t(H.eP,H.eO)
s(P.bl,[H.fL,H.fj,H.hB,H.hp,H.eK,H.fY,P.dF,P.aG,P.hC,P.hz,P.bS,P.eN,P.eR])
s(H.c9,[H.jC,H.hf,H.j5,H.j6,H.j7,P.i_,P.hZ,P.i0,P.i1,P.iE,P.iD,P.i9,P.id,P.ia,P.ib,P.ic,P.ih,P.ii,P.ig,P.ie,P.hc,P.hd,P.iW,P.iq,P.ip,P.ir,P.fp,P.ft,P.iL,P.eU,P.eV,P.hH,P.hE,P.hF,P.hG,P.iG,P.iH,P.iJ,P.iI,P.iS,P.iR,P.iT,P.iU,W.eX,W.i8,W.fJ,W.fI,W.iu,W.iv,W.iC,W.iN,P.iz,P.iY,P.f4,P.f5,E.fV,E.fW,E.fX,E.hi,D.f0,D.f1,F.iP,F.iZ,F.j0,F.j1,F.j2,F.jz,F.jA,F.jB,F.j9,F.j_,F.hW,F.hV,F.hO,F.hP,T.hh,V.jy,V.fR,V.h6,V.h5,V.h7,D.jd,D.je,D.jf,D.jo,D.jp,D.jq,D.jr,D.js,D.jt,D.ju,D.jv,D.jc,D.jg,D.jh,D.ji,D.jb,D.jj,D.jk,D.ja,D.jl,D.jm,D.jn])
s(H.hf,[H.h9,H.c6])
t(P.fs,P.bK)
s(P.fs,[H.aJ,W.i2])
t(H.dA,H.bM)
s(H.dA,[H.cN,H.cP])
t(H.cO,H.cN)
t(H.dB,H.cO)
t(H.cQ,H.cP)
t(H.dC,H.cQ)
s(H.dC,[H.fE,H.fF,H.fG,H.fH,H.dD,H.cm])
t(P.io,P.iO)
t(P.il,P.it)
t(P.et,P.fu)
t(P.e4,P.et)
s(P.bC,[P.eG,P.eY])
t(P.bj,P.hb)
s(P.bj,[P.eH,P.fb,P.hK,P.hJ])
t(P.hI,P.eY)
s(P.ag,[P.p,P.m])
s(P.aG,[P.bQ,P.fe])
t(P.i4,P.bU)
s(W.bF,[W.C,W.cK])
s(W.C,[W.P,W.bh,W.cb,W.cL])
s(W.P,[W.x,P.o])
s(W.x,[W.d2,W.eE,W.c5,W.bg,W.bA,W.aA,W.f6,W.dh,W.cg,W.ch,W.dq,W.ck,W.fZ,W.aV,W.dT,W.dU,W.he,W.cv])
t(W.ca,W.ed)
t(W.eh,W.eg)
t(W.bH,W.eh)
t(W.dj,W.cb)
t(W.bt,W.n)
s(W.bt,[W.aR,W.ab,W.aL])
t(W.em,W.el)
t(W.cn,W.em)
t(W.er,W.eq)
t(W.hm,W.er)
t(W.hX,W.ck)
t(W.aZ,W.ab)
t(W.ee,W.dd)
t(W.ex,W.ew)
t(W.ek,W.ex)
t(W.i5,W.i2)
t(W.i6,P.ha)
t(W.jW,W.i6)
t(W.i7,P.ct)
t(W.iB,W.en)
t(P.iy,P.ix)
t(P.aB,P.im)
t(P.cq,P.o)
s(E.eI,[Z.d6,A.cr,T.cw])
s(D.y,[D.bo,D.bp,D.H,X.fP])
s(X.fP,[X.du,X.b7,X.cl,X.e0])
s(O.a_,[D.dr,U.cf,M.d8])
s(D.eL,[U.eM,U.ac])
t(U.d9,U.ac)
s(A.cr,[A.dx,A.dP])
s(A.e1,[A.K,A.ht,A.hu,A.hw,A.hr,A.X,A.hs,A.G,A.hv,A.hy,A.cB,A.au,A.al,A.af])
t(F.h8,F.f2)
t(F.hq,F.fl)
t(F.hR,F.hS)
t(F.fK,F.hT)
s(O.bs,[O.dw,O.dO])
s(O.dy,[O.fy,O.fz,O.aS])
s(O.aS,[O.fB,O.fC])
t(T.cx,T.cw)
s(V.dv,[V.ar,V.cz])
t(X.f8,X.cu)
s(V.bi,[V.eS,V.f9,V.fa,V.fO])
u(H.e3,H.cH)
u(H.cN,P.V)
u(H.cO,H.bG)
u(H.cP,P.V)
u(H.cQ,H.bG)
u(P.ej,P.V)
u(P.et,P.iF)
u(W.ed,W.eQ)
u(W.eg,P.V)
u(W.eh,W.av)
u(W.el,P.V)
u(W.em,W.av)
u(W.eq,P.V)
u(W.er,W.av)
u(W.ew,P.V)
u(W.ex,W.av)})();(function constants(){var u=hunkHelpers.makeConstList
C.p=W.bg.prototype
C.q=W.bA.prototype
C.D=W.bB.prototype
C.k=W.aA.prototype
C.U=W.dc.prototype
C.W=W.dh.prototype
C.X=W.di.prototype
C.z=W.dj.prototype
C.Z=J.aa.prototype
C.a=J.aH.prototype
C.a_=J.dk.prototype
C.f=J.dl.prototype
C.r=J.dm.prototype
C.e=J.bq.prototype
C.c=J.b4.prototype
C.a6=J.b5.prototype
C.G=W.dq.prototype
C.ac=W.cn.prototype
C.M=J.fN.prototype
C.N=W.dJ.prototype
C.b=P.bR.prototype
C.x=W.aV.prototype
C.o=W.dT.prototype
C.n=W.dU.prototype
C.C=J.bu.prototype
C.O=W.aZ.prototype
C.P=W.cK.prototype
C.R=new P.eH(!1)
C.Q=new P.eG(C.R)
C.S=new P.fM()
C.T=new P.hK()
C.l=new P.io()
C.d=new A.bD(0,"ColorSourceType.None")
C.j=new A.bD(1,"ColorSourceType.Solid")
C.h=new A.bD(2,"ColorSourceType.Texture2D")
C.i=new A.bD(3,"ColorSourceType.TextureCube")
C.y=new P.aP(0)
C.V=new P.aP(5e6)
C.Y=new P.fc("element",!0,!1,!1,!1)
C.a0=function(hooks) {
  if (typeof dartExperimentalFixupGetTag != "function") return hooks;
  hooks.getTag = dartExperimentalFixupGetTag(hooks.getTag);
}
C.a1=function(hooks) {
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
C.E=function(hooks) { return hooks; }

C.a2=function(getTagFallback) {
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
C.a3=function() {
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
C.a4=function(hooks) {
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
C.a5=function(hooks) {
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
C.F=function getTagFallback(o) {
  var s = Object.prototype.toString.call(o);
  return s.substring(8, s.length - 1);
}
C.H=H.b(u([127,2047,65535,1114111]),[P.m])
C.t=H.b(u([0,0,32776,33792,1,10240,0,0]),[P.m])
C.a7=H.b(u(["*::class","*::dir","*::draggable","*::hidden","*::id","*::inert","*::itemprop","*::itemref","*::itemscope","*::lang","*::spellcheck","*::title","*::translate","A::accesskey","A::coords","A::hreflang","A::name","A::shape","A::tabindex","A::target","A::type","AREA::accesskey","AREA::alt","AREA::coords","AREA::nohref","AREA::shape","AREA::tabindex","AREA::target","AUDIO::controls","AUDIO::loop","AUDIO::mediagroup","AUDIO::muted","AUDIO::preload","BDO::dir","BODY::alink","BODY::bgcolor","BODY::link","BODY::text","BODY::vlink","BR::clear","BUTTON::accesskey","BUTTON::disabled","BUTTON::name","BUTTON::tabindex","BUTTON::type","BUTTON::value","CANVAS::height","CANVAS::width","CAPTION::align","COL::align","COL::char","COL::charoff","COL::span","COL::valign","COL::width","COLGROUP::align","COLGROUP::char","COLGROUP::charoff","COLGROUP::span","COLGROUP::valign","COLGROUP::width","COMMAND::checked","COMMAND::command","COMMAND::disabled","COMMAND::label","COMMAND::radiogroup","COMMAND::type","DATA::value","DEL::datetime","DETAILS::open","DIR::compact","DIV::align","DL::compact","FIELDSET::disabled","FONT::color","FONT::face","FONT::size","FORM::accept","FORM::autocomplete","FORM::enctype","FORM::method","FORM::name","FORM::novalidate","FORM::target","FRAME::name","H1::align","H2::align","H3::align","H4::align","H5::align","H6::align","HR::align","HR::noshade","HR::size","HR::width","HTML::version","IFRAME::align","IFRAME::frameborder","IFRAME::height","IFRAME::marginheight","IFRAME::marginwidth","IFRAME::width","IMG::align","IMG::alt","IMG::border","IMG::height","IMG::hspace","IMG::ismap","IMG::name","IMG::usemap","IMG::vspace","IMG::width","INPUT::accept","INPUT::accesskey","INPUT::align","INPUT::alt","INPUT::autocomplete","INPUT::autofocus","INPUT::checked","INPUT::disabled","INPUT::inputmode","INPUT::ismap","INPUT::list","INPUT::max","INPUT::maxlength","INPUT::min","INPUT::multiple","INPUT::name","INPUT::placeholder","INPUT::readonly","INPUT::required","INPUT::size","INPUT::step","INPUT::tabindex","INPUT::type","INPUT::usemap","INPUT::value","INS::datetime","KEYGEN::disabled","KEYGEN::keytype","KEYGEN::name","LABEL::accesskey","LABEL::for","LEGEND::accesskey","LEGEND::align","LI::type","LI::value","LINK::sizes","MAP::name","MENU::compact","MENU::label","MENU::type","METER::high","METER::low","METER::max","METER::min","METER::value","OBJECT::typemustmatch","OL::compact","OL::reversed","OL::start","OL::type","OPTGROUP::disabled","OPTGROUP::label","OPTION::disabled","OPTION::label","OPTION::selected","OPTION::value","OUTPUT::for","OUTPUT::name","P::align","PRE::width","PROGRESS::max","PROGRESS::min","PROGRESS::value","SELECT::autocomplete","SELECT::disabled","SELECT::multiple","SELECT::name","SELECT::required","SELECT::size","SELECT::tabindex","SOURCE::type","TABLE::align","TABLE::bgcolor","TABLE::border","TABLE::cellpadding","TABLE::cellspacing","TABLE::frame","TABLE::rules","TABLE::summary","TABLE::width","TBODY::align","TBODY::char","TBODY::charoff","TBODY::valign","TD::abbr","TD::align","TD::axis","TD::bgcolor","TD::char","TD::charoff","TD::colspan","TD::headers","TD::height","TD::nowrap","TD::rowspan","TD::scope","TD::valign","TD::width","TEXTAREA::accesskey","TEXTAREA::autocomplete","TEXTAREA::cols","TEXTAREA::disabled","TEXTAREA::inputmode","TEXTAREA::name","TEXTAREA::placeholder","TEXTAREA::readonly","TEXTAREA::required","TEXTAREA::rows","TEXTAREA::tabindex","TEXTAREA::wrap","TFOOT::align","TFOOT::char","TFOOT::charoff","TFOOT::valign","TH::abbr","TH::align","TH::axis","TH::bgcolor","TH::char","TH::charoff","TH::colspan","TH::headers","TH::height","TH::nowrap","TH::rowspan","TH::scope","TH::valign","TH::width","THEAD::align","THEAD::char","THEAD::charoff","THEAD::valign","TR::align","TR::bgcolor","TR::char","TR::charoff","TR::valign","TRACK::default","TRACK::kind","TRACK::label","TRACK::srclang","UL::compact","UL::type","VIDEO::controls","VIDEO::height","VIDEO::loop","VIDEO::mediagroup","VIDEO::muted","VIDEO::preload","VIDEO::width"]),[P.f])
C.u=H.b(u([0,0,65490,45055,65535,34815,65534,18431]),[P.m])
C.v=H.b(u([0,0,26624,1023,65534,2047,65534,2047]),[P.m])
C.a8=H.b(u(["HEAD","AREA","BASE","BASEFONT","BR","COL","COLGROUP","EMBED","FRAME","FRAMESET","HR","IMAGE","IMG","INPUT","ISINDEX","LINK","META","PARAM","SOURCE","STYLE","TITLE","WBR"]),[P.f])
C.I=H.b(u([]),[P.f])
C.a9=H.b(u([0,0,32722,12287,65534,34815,65534,18431]),[P.m])
C.J=H.b(u([0,0,65498,45055,65535,34815,65534,18431]),[P.m])
C.w=H.b(u([0,0,24576,1023,65534,34815,65534,18431]),[P.m])
C.K=H.b(u([0,0,32754,11263,65534,34815,65534,18431]),[P.m])
C.aa=H.b(u([0,0,32722,12287,65535,34815,65534,18431]),[P.m])
C.L=H.b(u([0,0,65490,12287,65535,34815,65534,18431]),[P.m])
C.A=H.b(u(["bind","if","ref","repeat","syntax"]),[P.f])
C.B=H.b(u(["A::href","AREA::href","BLOCKQUOTE::cite","BODY::background","COMMAND::icon","DEL::cite","FORM::action","IMG::src","INPUT::src","INS::cite","Q::cite","VIDEO::poster"]),[P.f])
C.ab=new H.eP(0,{},C.I,[P.f,P.f])
C.m=new P.hI(!1)})();(function staticFields(){$.aO=0
$.c7=null
$.ko=null
$.k_=!1
$.lw=null
$.ln=null
$.lC=null
$.j3=null
$.j8=null
$.k9=null
$.bW=null
$.cU=null
$.cV=null
$.k0=!1
$.Y=C.l
$.b2=null
$.jK=null
$.kv=null
$.ku=null
$.kC=null
$.kH=null
$.co=null
$.kN=null
$.kZ=null
$.l2=null
$.l0=null
$.l1=null
$.hL=null
$.l_=null
$.mV="uniform mat4 viewMat;                             \nuniform float fov;                                \nuniform float ratio;                              \n                                                  \nattribute vec3 posAttr;                           \n                                                  \nvarying vec3 cubeTxt;                             \n                                                  \nvoid main()                                       \n{                                                 \n  float t = 1.0 / (tan(fov * 0.5)*3.0);           \n  float x = -t * posAttr.x / ratio;               \n  float y = t * posAttr.y;                        \n  cubeTxt = (viewMat * vec4(x, y, 1.0, 0.0)).xyz; \n  gl_Position = vec4(posAttr, 1.0);               \n}                                                 \n"
$.mU="precision mediump float;                                              \n                                                                      \nuniform samplerCube boxTxt;                                           \nuniform vec3 boxClr;                                                  \n                                                                      \nvarying vec3 cubeTxt;                                                 \n                                                                      \nvoid main()                                                           \n{                                                                     \n   vec3 txtCube = normalize(cubeTxt);                                 \n   gl_FragColor = vec4(boxClr*textureCube(boxTxt, txtCube).xyz, 1.0); \n}                                                                     \n"
$.kG=null})();(function lazyInitializers(){var u=hunkHelpers.lazy
u($,"of","lH",function(){return H.lv("_$dart_dartClosure")})
u($,"og","kf",function(){return H.lv("_$dart_js")})
u($,"ol","lI",function(){return H.aX(H.ho({
toString:function(){return"$receiver$"}}))})
u($,"om","lJ",function(){return H.aX(H.ho({$method$:null,
toString:function(){return"$receiver$"}}))})
u($,"on","lK",function(){return H.aX(H.ho(null))})
u($,"oo","lL",function(){return H.aX(function(){var $argumentsExpr$='$arguments$'
try{null.$method$($argumentsExpr$)}catch(t){return t.message}}())})
u($,"or","lO",function(){return H.aX(H.ho(void 0))})
u($,"os","lP",function(){return H.aX(function(){var $argumentsExpr$='$arguments$'
try{(void 0).$method$($argumentsExpr$)}catch(t){return t.message}}())})
u($,"oq","lN",function(){return H.aX(H.kU(null))})
u($,"op","lM",function(){return H.aX(function(){try{null.$method$}catch(t){return t.message}}())})
u($,"ou","lR",function(){return H.aX(H.kU(void 0))})
u($,"ot","lQ",function(){return H.aX(function(){try{(void 0).$method$}catch(t){return t.message}}())})
u($,"oL","kg",function(){return P.n6()})
u($,"oR","d0",function(){return[]})
u($,"ox","lS",function(){return P.n3()})
u($,"oM","lW",function(){return H.mB(H.bV(H.b([-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-1,-2,-2,-2,-2,-2,62,-2,62,-2,63,52,53,54,55,56,57,58,59,60,61,-2,-2,-2,-1,-2,-2,-2,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,-2,-2,-2,-2,63,-2,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,-2,-2,-2,-2,-2],[P.m])))})
u($,"oP","lY",function(){return P.mQ("^[\\-\\.0-9A-Z_a-z~]*$",!0,!1)})
u($,"oQ","lZ",function(){return P.nv()})
u($,"oN","lX",function(){return P.kA(["A","ABBR","ACRONYM","ADDRESS","AREA","ARTICLE","ASIDE","AUDIO","B","BDI","BDO","BIG","BLOCKQUOTE","BR","BUTTON","CANVAS","CAPTION","CENTER","CITE","CODE","COL","COLGROUP","COMMAND","DATA","DATALIST","DD","DEL","DETAILS","DFN","DIR","DIV","DL","DT","EM","FIELDSET","FIGCAPTION","FIGURE","FONT","FOOTER","FORM","H1","H2","H3","H4","H5","H6","HEADER","HGROUP","HR","I","IFRAME","IMG","INPUT","INS","KBD","LABEL","LEGEND","LI","MAP","MARK","MENU","METER","NAV","NOBR","OL","OPTGROUP","OPTION","OUTPUT","P","PRE","PROGRESS","Q","S","SAMP","SECTION","SELECT","SMALL","SOURCE","SPAN","STRIKE","STRONG","SUB","SUMMARY","SUP","TABLE","TBODY","TD","TEXTAREA","TFOOT","TH","THEAD","TIME","TR","TRACK","TT","U","UL","VAR","VIDEO","WBR"],P.f)})
u($,"oO","kh",function(){return P.kz(P.f,P.bm)})
u($,"oE","lV",function(){return Z.aC(0)})
u($,"oy","lT",function(){return Z.aC(511)})
u($,"oG","aN",function(){return Z.aC(1)})
u($,"oF","bd",function(){return Z.aC(2)})
u($,"oA","bc",function(){return Z.aC(4)})
u($,"oH","be",function(){return Z.aC(8)})
u($,"oI","bf",function(){return Z.aC(16)})
u($,"oB","cZ",function(){return Z.aC(32)})
u($,"oC","d_",function(){return Z.aC(64)})
u($,"oD","lU",function(){return Z.aC(96)})
u($,"oJ","c4",function(){return Z.aC(128)})
u($,"oz","bb",function(){return Z.aC(256)})
u($,"oe","lG",function(){return new V.eZ(1e-9)})
u($,"od","O",function(){return $.lG()})})()
var v={mangledGlobalNames:{m:"int",p:"double",ag:"num",f:"String",M:"bool",E:"Null",a:"List"},mangledNames:{},getTypeFromName:getGlobalFromName,metadata:[],types:[{func:1,ret:P.E},{func:1,ret:-1,opt:[D.y]},{func:1,ret:-1,args:[D.y]},{func:1,ret:-1},{func:1,ret:-1,args:[W.ab]},{func:1,ret:P.E,args:[F.a8,P.p,P.p]},{func:1,ret:P.p,args:[P.p,P.p]},{func:1,ret:P.E,args:[,,]},{func:1,ret:-1,args:[P.m,[P.l,E.ak]]},{func:1,ret:P.E,args:[D.y]},{func:1,ret:P.E,args:[F.a3]},{func:1,ret:-1,args:[W.aL]},{func:1,ret:-1,args:[W.n]},{func:1,ret:P.E,args:[W.n]},{func:1,ret:-1,args:[{func:1,ret:-1}]},{func:1,ret:-1,args:[P.m,[P.l,V.aq]]},{func:1,ret:P.f,args:[P.m]},{func:1,ret:V.S,args:[P.p]},{func:1,ret:P.p,args:[P.p]},{func:1,ret:-1,args:[P.m,[P.l,M.az]]},{func:1,ret:-1,args:[P.m,[P.l,U.ac]]},{func:1,ret:P.f,args:[P.f]},{func:1,args:[,]},{func:1,ret:P.p},{func:1,ret:-1,args:[P.m,[P.l,D.a2]]},{func:1,ret:P.M,args:[W.C]},{func:1,ret:P.M,args:[W.P,P.f,P.f,W.bv]},{func:1,ret:P.M,args:[W.ay]},{func:1,ret:P.M,args:[P.f]},{func:1,ret:-1,args:[W.aR]},{func:1,ret:P.E,args:[,]},{func:1,ret:P.E,args:[{func:1,ret:-1,args:[D.y]}]},{func:1,ret:P.E,args:[P.ag]},{func:1,ret:-1,args:[P.f,P.f]},{func:1,ret:P.E,args:[{func:1,ret:-1}]},{func:1,ret:-1,args:[W.C,W.C]},{func:1,args:[W.n]},{func:1,ret:P.N,args:[,,]},{func:1,ret:P.M,args:[[P.l,D.a2]]},{func:1,ret:P.N,args:[P.m]},{func:1,ret:P.E,args:[P.f,,]},{func:1,ret:P.E,args:[P.f]},{func:1,args:[,P.f]},{func:1,ret:P.m,args:[P.m,P.m]},{func:1,args:[P.f]},{func:1,ret:-1,args:[W.aZ]},{func:1,ret:-1,args:[P.f],opt:[,]},{func:1,ret:-1,args:[P.f,P.m]},{func:1,ret:[P.I,P.f,P.f],args:[[P.I,P.f,P.f],P.f]},{func:1,ret:-1,args:[P.m,P.m]},{func:1,ret:[P.aD,,],args:[,]},{func:1,ret:P.E,args:[P.aW]},{func:1,ret:P.M,args:[V.bi]},{func:1,ret:P.E,args:[,],opt:[P.at]},{func:1,ret:W.P,args:[W.C]}],interceptorsByTag:null,leafTags:null};(function nativeSupport(){!function(){var u=function(a){var o={}
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
hunkHelpers.setOrUpdateInterceptorsByTag({DOMError:J.aa,MediaError:J.aa,Navigator:J.aa,NavigatorConcurrentHardware:J.aa,NavigatorUserMediaError:J.aa,OverconstrainedError:J.aa,PositionError:J.aa,WebGLActiveInfo:J.aa,WebGLRenderbuffer:J.aa,WebGL2RenderingContext:J.aa,SQLError:J.aa,ArrayBufferView:H.bM,Float32Array:H.dB,Int16Array:H.fE,Int32Array:H.fF,Int8Array:H.fG,Uint32Array:H.fH,Uint8ClampedArray:H.dD,CanvasPixelArray:H.dD,Uint8Array:H.cm,HTMLBRElement:W.x,HTMLButtonElement:W.x,HTMLContentElement:W.x,HTMLDListElement:W.x,HTMLDataElement:W.x,HTMLDataListElement:W.x,HTMLDetailsElement:W.x,HTMLDialogElement:W.x,HTMLEmbedElement:W.x,HTMLFieldSetElement:W.x,HTMLHRElement:W.x,HTMLHeadingElement:W.x,HTMLHtmlElement:W.x,HTMLIFrameElement:W.x,HTMLLIElement:W.x,HTMLLegendElement:W.x,HTMLLinkElement:W.x,HTMLMapElement:W.x,HTMLMenuElement:W.x,HTMLMetaElement:W.x,HTMLMeterElement:W.x,HTMLModElement:W.x,HTMLOListElement:W.x,HTMLObjectElement:W.x,HTMLOptGroupElement:W.x,HTMLOptionElement:W.x,HTMLOutputElement:W.x,HTMLParagraphElement:W.x,HTMLParamElement:W.x,HTMLPictureElement:W.x,HTMLPreElement:W.x,HTMLProgressElement:W.x,HTMLQuoteElement:W.x,HTMLScriptElement:W.x,HTMLShadowElement:W.x,HTMLSlotElement:W.x,HTMLSourceElement:W.x,HTMLSpanElement:W.x,HTMLStyleElement:W.x,HTMLTableCaptionElement:W.x,HTMLTableColElement:W.x,HTMLTextAreaElement:W.x,HTMLTimeElement:W.x,HTMLTitleElement:W.x,HTMLTrackElement:W.x,HTMLUListElement:W.x,HTMLUnknownElement:W.x,HTMLDirectoryElement:W.x,HTMLFontElement:W.x,HTMLFrameElement:W.x,HTMLFrameSetElement:W.x,HTMLMarqueeElement:W.x,HTMLElement:W.x,HTMLAnchorElement:W.d2,HTMLAreaElement:W.eE,HTMLBaseElement:W.c5,HTMLBodyElement:W.bg,HTMLCanvasElement:W.bA,CanvasRenderingContext2D:W.bB,CDATASection:W.bh,CharacterData:W.bh,Comment:W.bh,ProcessingInstruction:W.bh,Text:W.bh,CSSStyleDeclaration:W.ca,MSStyleCSSProperties:W.ca,CSS2Properties:W.ca,HTMLDivElement:W.aA,XMLDocument:W.cb,Document:W.cb,DOMException:W.eT,DOMImplementation:W.dc,DOMRectReadOnly:W.dd,Element:W.P,AbortPaymentEvent:W.n,AnimationEvent:W.n,AnimationPlaybackEvent:W.n,ApplicationCacheErrorEvent:W.n,BackgroundFetchClickEvent:W.n,BackgroundFetchEvent:W.n,BackgroundFetchFailEvent:W.n,BackgroundFetchedEvent:W.n,BeforeInstallPromptEvent:W.n,BeforeUnloadEvent:W.n,BlobEvent:W.n,CanMakePaymentEvent:W.n,ClipboardEvent:W.n,CloseEvent:W.n,CustomEvent:W.n,DeviceMotionEvent:W.n,DeviceOrientationEvent:W.n,ErrorEvent:W.n,ExtendableEvent:W.n,ExtendableMessageEvent:W.n,FetchEvent:W.n,FontFaceSetLoadEvent:W.n,ForeignFetchEvent:W.n,GamepadEvent:W.n,HashChangeEvent:W.n,InstallEvent:W.n,MediaEncryptedEvent:W.n,MediaKeyMessageEvent:W.n,MediaQueryListEvent:W.n,MediaStreamEvent:W.n,MediaStreamTrackEvent:W.n,MessageEvent:W.n,MIDIConnectionEvent:W.n,MIDIMessageEvent:W.n,MutationEvent:W.n,NotificationEvent:W.n,PageTransitionEvent:W.n,PaymentRequestEvent:W.n,PaymentRequestUpdateEvent:W.n,PopStateEvent:W.n,PresentationConnectionAvailableEvent:W.n,PresentationConnectionCloseEvent:W.n,ProgressEvent:W.n,PromiseRejectionEvent:W.n,PushEvent:W.n,RTCDataChannelEvent:W.n,RTCDTMFToneChangeEvent:W.n,RTCPeerConnectionIceEvent:W.n,RTCTrackEvent:W.n,SecurityPolicyViolationEvent:W.n,SensorErrorEvent:W.n,SpeechRecognitionError:W.n,SpeechRecognitionEvent:W.n,SpeechSynthesisEvent:W.n,StorageEvent:W.n,SyncEvent:W.n,TrackEvent:W.n,TransitionEvent:W.n,WebKitTransitionEvent:W.n,VRDeviceEvent:W.n,VRDisplayEvent:W.n,VRSessionEvent:W.n,MojoInterfaceRequestEvent:W.n,ResourceProgressEvent:W.n,USBConnectionEvent:W.n,IDBVersionChangeEvent:W.n,AudioProcessingEvent:W.n,OfflineAudioCompletionEvent:W.n,WebGLContextEvent:W.n,Event:W.n,InputEvent:W.n,EventTarget:W.bF,HTMLFormElement:W.f6,HTMLHeadElement:W.dh,History:W.di,HTMLCollection:W.bH,HTMLFormControlsCollection:W.bH,HTMLOptionsCollection:W.bH,HTMLDocument:W.dj,ImageData:W.b3,HTMLImageElement:W.cg,HTMLInputElement:W.ch,KeyboardEvent:W.aR,HTMLLabelElement:W.dq,Location:W.dt,HTMLAudioElement:W.ck,HTMLMediaElement:W.ck,PointerEvent:W.ab,MouseEvent:W.ab,DragEvent:W.ab,DocumentFragment:W.C,ShadowRoot:W.C,DocumentType:W.C,Node:W.C,NodeList:W.cn,RadioNodeList:W.cn,Range:W.dJ,HTMLSelectElement:W.fZ,HTMLTableCellElement:W.aV,HTMLTableDataCellElement:W.aV,HTMLTableHeaderCellElement:W.aV,HTMLTableElement:W.dT,HTMLTableRowElement:W.dU,HTMLTableSectionElement:W.he,HTMLTemplateElement:W.cv,Touch:W.aK,TouchEvent:W.aL,TouchList:W.hm,CompositionEvent:W.bt,FocusEvent:W.bt,TextEvent:W.bt,UIEvent:W.bt,HTMLVideoElement:W.hX,WheelEvent:W.aZ,Window:W.cK,DOMWindow:W.cK,Attr:W.cL,ClientRect:W.ee,DOMRect:W.ee,NamedNodeMap:W.ek,MozNamedAttrMap:W.ek,SVGScriptElement:P.cq,SVGAElement:P.o,SVGAnimateElement:P.o,SVGAnimateMotionElement:P.o,SVGAnimateTransformElement:P.o,SVGAnimationElement:P.o,SVGCircleElement:P.o,SVGClipPathElement:P.o,SVGDefsElement:P.o,SVGDescElement:P.o,SVGDiscardElement:P.o,SVGEllipseElement:P.o,SVGFEBlendElement:P.o,SVGFEColorMatrixElement:P.o,SVGFEComponentTransferElement:P.o,SVGFECompositeElement:P.o,SVGFEConvolveMatrixElement:P.o,SVGFEDiffuseLightingElement:P.o,SVGFEDisplacementMapElement:P.o,SVGFEDistantLightElement:P.o,SVGFEFloodElement:P.o,SVGFEFuncAElement:P.o,SVGFEFuncBElement:P.o,SVGFEFuncGElement:P.o,SVGFEFuncRElement:P.o,SVGFEGaussianBlurElement:P.o,SVGFEImageElement:P.o,SVGFEMergeElement:P.o,SVGFEMergeNodeElement:P.o,SVGFEMorphologyElement:P.o,SVGFEOffsetElement:P.o,SVGFEPointLightElement:P.o,SVGFESpecularLightingElement:P.o,SVGFESpotLightElement:P.o,SVGFETileElement:P.o,SVGFETurbulenceElement:P.o,SVGFilterElement:P.o,SVGForeignObjectElement:P.o,SVGGElement:P.o,SVGGeometryElement:P.o,SVGGraphicsElement:P.o,SVGImageElement:P.o,SVGLineElement:P.o,SVGLinearGradientElement:P.o,SVGMarkerElement:P.o,SVGMaskElement:P.o,SVGMetadataElement:P.o,SVGPathElement:P.o,SVGPatternElement:P.o,SVGPolygonElement:P.o,SVGPolylineElement:P.o,SVGRadialGradientElement:P.o,SVGRectElement:P.o,SVGSetElement:P.o,SVGStopElement:P.o,SVGStyleElement:P.o,SVGSVGElement:P.o,SVGSwitchElement:P.o,SVGSymbolElement:P.o,SVGTSpanElement:P.o,SVGTextContentElement:P.o,SVGTextElement:P.o,SVGTextPathElement:P.o,SVGTextPositioningElement:P.o,SVGTitleElement:P.o,SVGUseElement:P.o,SVGViewElement:P.o,SVGGradientElement:P.o,SVGComponentTransferFunctionElement:P.o,SVGFEDropShadowElement:P.o,SVGMPathElement:P.o,SVGElement:P.o,WebGLBuffer:P.d5,WebGLFramebuffer:P.dg,WebGLProgram:P.dI,WebGLRenderingContext:P.bR,WebGLShader:P.dM,WebGLTexture:P.dV,WebGLUniformLocation:P.e2})
hunkHelpers.setOrUpdateLeafTags({DOMError:true,MediaError:true,Navigator:true,NavigatorConcurrentHardware:true,NavigatorUserMediaError:true,OverconstrainedError:true,PositionError:true,WebGLActiveInfo:true,WebGLRenderbuffer:true,WebGL2RenderingContext:true,SQLError:true,ArrayBufferView:false,Float32Array:true,Int16Array:true,Int32Array:true,Int8Array:true,Uint32Array:true,Uint8ClampedArray:true,CanvasPixelArray:true,Uint8Array:false,HTMLBRElement:true,HTMLButtonElement:true,HTMLContentElement:true,HTMLDListElement:true,HTMLDataElement:true,HTMLDataListElement:true,HTMLDetailsElement:true,HTMLDialogElement:true,HTMLEmbedElement:true,HTMLFieldSetElement:true,HTMLHRElement:true,HTMLHeadingElement:true,HTMLHtmlElement:true,HTMLIFrameElement:true,HTMLLIElement:true,HTMLLegendElement:true,HTMLLinkElement:true,HTMLMapElement:true,HTMLMenuElement:true,HTMLMetaElement:true,HTMLMeterElement:true,HTMLModElement:true,HTMLOListElement:true,HTMLObjectElement:true,HTMLOptGroupElement:true,HTMLOptionElement:true,HTMLOutputElement:true,HTMLParagraphElement:true,HTMLParamElement:true,HTMLPictureElement:true,HTMLPreElement:true,HTMLProgressElement:true,HTMLQuoteElement:true,HTMLScriptElement:true,HTMLShadowElement:true,HTMLSlotElement:true,HTMLSourceElement:true,HTMLSpanElement:true,HTMLStyleElement:true,HTMLTableCaptionElement:true,HTMLTableColElement:true,HTMLTextAreaElement:true,HTMLTimeElement:true,HTMLTitleElement:true,HTMLTrackElement:true,HTMLUListElement:true,HTMLUnknownElement:true,HTMLDirectoryElement:true,HTMLFontElement:true,HTMLFrameElement:true,HTMLFrameSetElement:true,HTMLMarqueeElement:true,HTMLElement:false,HTMLAnchorElement:true,HTMLAreaElement:true,HTMLBaseElement:true,HTMLBodyElement:true,HTMLCanvasElement:true,CanvasRenderingContext2D:true,CDATASection:true,CharacterData:true,Comment:true,ProcessingInstruction:true,Text:true,CSSStyleDeclaration:true,MSStyleCSSProperties:true,CSS2Properties:true,HTMLDivElement:true,XMLDocument:true,Document:false,DOMException:true,DOMImplementation:true,DOMRectReadOnly:false,Element:false,AbortPaymentEvent:true,AnimationEvent:true,AnimationPlaybackEvent:true,ApplicationCacheErrorEvent:true,BackgroundFetchClickEvent:true,BackgroundFetchEvent:true,BackgroundFetchFailEvent:true,BackgroundFetchedEvent:true,BeforeInstallPromptEvent:true,BeforeUnloadEvent:true,BlobEvent:true,CanMakePaymentEvent:true,ClipboardEvent:true,CloseEvent:true,CustomEvent:true,DeviceMotionEvent:true,DeviceOrientationEvent:true,ErrorEvent:true,ExtendableEvent:true,ExtendableMessageEvent:true,FetchEvent:true,FontFaceSetLoadEvent:true,ForeignFetchEvent:true,GamepadEvent:true,HashChangeEvent:true,InstallEvent:true,MediaEncryptedEvent:true,MediaKeyMessageEvent:true,MediaQueryListEvent:true,MediaStreamEvent:true,MediaStreamTrackEvent:true,MessageEvent:true,MIDIConnectionEvent:true,MIDIMessageEvent:true,MutationEvent:true,NotificationEvent:true,PageTransitionEvent:true,PaymentRequestEvent:true,PaymentRequestUpdateEvent:true,PopStateEvent:true,PresentationConnectionAvailableEvent:true,PresentationConnectionCloseEvent:true,ProgressEvent:true,PromiseRejectionEvent:true,PushEvent:true,RTCDataChannelEvent:true,RTCDTMFToneChangeEvent:true,RTCPeerConnectionIceEvent:true,RTCTrackEvent:true,SecurityPolicyViolationEvent:true,SensorErrorEvent:true,SpeechRecognitionError:true,SpeechRecognitionEvent:true,SpeechSynthesisEvent:true,StorageEvent:true,SyncEvent:true,TrackEvent:true,TransitionEvent:true,WebKitTransitionEvent:true,VRDeviceEvent:true,VRDisplayEvent:true,VRSessionEvent:true,MojoInterfaceRequestEvent:true,ResourceProgressEvent:true,USBConnectionEvent:true,IDBVersionChangeEvent:true,AudioProcessingEvent:true,OfflineAudioCompletionEvent:true,WebGLContextEvent:true,Event:false,InputEvent:false,EventTarget:false,HTMLFormElement:true,HTMLHeadElement:true,History:true,HTMLCollection:true,HTMLFormControlsCollection:true,HTMLOptionsCollection:true,HTMLDocument:true,ImageData:true,HTMLImageElement:true,HTMLInputElement:true,KeyboardEvent:true,HTMLLabelElement:true,Location:true,HTMLAudioElement:true,HTMLMediaElement:false,PointerEvent:true,MouseEvent:false,DragEvent:false,DocumentFragment:true,ShadowRoot:true,DocumentType:true,Node:false,NodeList:true,RadioNodeList:true,Range:true,HTMLSelectElement:true,HTMLTableCellElement:true,HTMLTableDataCellElement:true,HTMLTableHeaderCellElement:true,HTMLTableElement:true,HTMLTableRowElement:true,HTMLTableSectionElement:true,HTMLTemplateElement:true,Touch:true,TouchEvent:true,TouchList:true,CompositionEvent:true,FocusEvent:true,TextEvent:true,UIEvent:false,HTMLVideoElement:true,WheelEvent:true,Window:true,DOMWindow:true,Attr:true,ClientRect:true,DOMRect:true,NamedNodeMap:true,MozNamedAttrMap:true,SVGScriptElement:true,SVGAElement:true,SVGAnimateElement:true,SVGAnimateMotionElement:true,SVGAnimateTransformElement:true,SVGAnimationElement:true,SVGCircleElement:true,SVGClipPathElement:true,SVGDefsElement:true,SVGDescElement:true,SVGDiscardElement:true,SVGEllipseElement:true,SVGFEBlendElement:true,SVGFEColorMatrixElement:true,SVGFEComponentTransferElement:true,SVGFECompositeElement:true,SVGFEConvolveMatrixElement:true,SVGFEDiffuseLightingElement:true,SVGFEDisplacementMapElement:true,SVGFEDistantLightElement:true,SVGFEFloodElement:true,SVGFEFuncAElement:true,SVGFEFuncBElement:true,SVGFEFuncGElement:true,SVGFEFuncRElement:true,SVGFEGaussianBlurElement:true,SVGFEImageElement:true,SVGFEMergeElement:true,SVGFEMergeNodeElement:true,SVGFEMorphologyElement:true,SVGFEOffsetElement:true,SVGFEPointLightElement:true,SVGFESpecularLightingElement:true,SVGFESpotLightElement:true,SVGFETileElement:true,SVGFETurbulenceElement:true,SVGFilterElement:true,SVGForeignObjectElement:true,SVGGElement:true,SVGGeometryElement:true,SVGGraphicsElement:true,SVGImageElement:true,SVGLineElement:true,SVGLinearGradientElement:true,SVGMarkerElement:true,SVGMaskElement:true,SVGMetadataElement:true,SVGPathElement:true,SVGPatternElement:true,SVGPolygonElement:true,SVGPolylineElement:true,SVGRadialGradientElement:true,SVGRectElement:true,SVGSetElement:true,SVGStopElement:true,SVGStyleElement:true,SVGSVGElement:true,SVGSwitchElement:true,SVGSymbolElement:true,SVGTSpanElement:true,SVGTextContentElement:true,SVGTextElement:true,SVGTextPathElement:true,SVGTextPositioningElement:true,SVGTitleElement:true,SVGUseElement:true,SVGViewElement:true,SVGGradientElement:true,SVGComponentTransferFunctionElement:true,SVGFEDropShadowElement:true,SVGMPathElement:true,SVGElement:false,WebGLBuffer:true,WebGLFramebuffer:true,WebGLProgram:true,WebGLRenderingContext:true,WebGLShader:true,WebGLTexture:true,WebGLUniformLocation:true})
H.dA.$nativeSuperclassTag="ArrayBufferView"
H.cN.$nativeSuperclassTag="ArrayBufferView"
H.cO.$nativeSuperclassTag="ArrayBufferView"
H.dB.$nativeSuperclassTag="ArrayBufferView"
H.cP.$nativeSuperclassTag="ArrayBufferView"
H.cQ.$nativeSuperclassTag="ArrayBufferView"
H.dC.$nativeSuperclassTag="ArrayBufferView"})()
convertAllToFastObject(w)
convertToFastObject($);(function(a){if(typeof document==="undefined"){a(null)
return}if(typeof document.currentScript!='undefined'){a(document.currentScript)
return}var u=document.scripts
function onLoad(b){for(var s=0;s<u.length;++s)u[s].removeEventListener("load",onLoad,false)
a(b.target)}for(var t=0;t<u.length;++t)u[t].addEventListener("load",onLoad,false)})(function(a){v.currentScript=a
if(typeof dartMainRunner==="function")dartMainRunner(D.lz,[])
else D.lz([])})})()
//# sourceMappingURL=test.dart.js.map
