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
a[c]=function(){a[c]=function(){H.oF(b)}
var t
var s=d
try{if(a[b]===u){t=a[b]=s
t=a[b]=d()}else t=a[b]}finally{if(t===s)a[b]=null
a[c]=function(){return this[b]}}return t}}function makeConstList(a){a.immutable$list=Array
a.fixed$length=Array
return a}function convertToFastObject(a){function t(){}t.prototype=a
new t()
return a}function convertAllToFastObject(a){for(var u=0;u<a.length;++u)convertToFastObject(a[u])}var y=0
function tearOffGetter(a,b,c,d,e){return e?new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+d+y+++"(receiver) {"+"if (c === null) c = "+"H.kX"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, true, name);"+"return new c(this, funcs[0], receiver, name);"+"}")(a,b,c,d,H,null):new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+d+y+++"() {"+"if (c === null) c = "+"H.kX"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, false, name);"+"return new c(this, funcs[0], null, name);"+"}")(a,b,c,d,H,null)}function tearOff(a,b,c,d,e,f){var u=null
return d?function(){if(u===null)u=H.kX(this,a,b,c,true,false,e).prototype
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
if(w[u][a])return w[u][a]}}var C={},H={kB:function kB(){},
jU:function(a){var u,t=a^48
if(t<=9)return t
u=a|32
if(97<=u&&u<=102)return u-87
return-1},
lj:function(){return new P.dK("No element")},
mZ:function(){return new P.dK("Too few elements")},
a5:function a5(a){this.a=a},
ft:function ft(){},
dq:function dq(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.d=null
_.$ti=c},
fY:function fY(a,b,c){this.a=a
this.b=b
this.$ti=c},
fZ:function fZ(a,b,c){var _=this
_.a=null
_.b=a
_.c=b
_.$ti=c},
iQ:function iQ(a,b,c){this.a=a
this.b=b
this.$ti=c},
iR:function iR(a,b,c){this.a=a
this.b=b
this.$ti=c},
bP:function bP(){},
cI:function cI(){},
dV:function dV(){},
mR:function(){throw H.c(P.E("Cannot modify unmodifiable Map"))},
c9:function(a){var u,t=H.K(v.mangledGlobalNames[a])
if(typeof t==="string")return t
u="minified:"+a
return u},
on:function(a){return v.types[H.ae(a)]},
os:function(a,b){var u
if(b!=null){u=b.x
if(u!=null)return u}return!!J.U(a).$iI},
n:function(a){var u
if(typeof a==="string")return a
if(typeof a==="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
u=J.at(a)
if(typeof u!=="string")throw H.c(H.as(a))
return u},
ct:function(a){var u=a.$identityHash
if(u==null){u=Math.random()*0x3fffffff|0
a.$identityHash=u}return u},
ni:function(a,b){var u,t,s,r,q,p=/^\s*[+-]?((0x[a-f0-9]+)|(\d+)|([a-z0-9]+))\s*$/i.exec(a)
if(p==null)return
if(3>=p.length)return H.d(p,3)
u=H.K(p[3])
if(b==null){if(u!=null)return parseInt(a,10)
if(p[2]!=null)return parseInt(a,16)
return}if(b<2||b>36)throw H.c(P.ad(b,2,36,"radix",null))
if(b===10&&u!=null)return parseInt(a,10)
if(b<10||u==null){t=b<=10?47+b:86+b
s=p[1]
for(r=s.length,q=0;q<r;++q)if((C.b.G(s,q)|32)>t)return}return parseInt(a,b)},
bV:function(a){return H.n9(a)+H.kU(H.bF(a),0,null)},
n9:function(a){var u,t,s,r,q,p,o,n=J.U(a),m=n.constructor
if(typeof m=="function"){u=m.name
t=typeof u==="string"?u:null}else t=null
s=t==null
if(s||n===C.N||!!n.$ibD){r=C.v(a)
if(s)t=r
if(r==="Object"){q=a.constructor
if(typeof q=="function"){p=String(q).match(/^\s*function\s*([\w$]*)\s*\(/)
o=p==null?null:p[1]
if(typeof o==="string"&&/^\w+$/.test(o))t=o}}return t}t=t
return H.c9(t.length>1&&C.b.G(t,0)===36?C.b.az(t,1):t)},
na:function(){if(!!self.location)return self.location.href
return},
lu:function(a){var u,t,s,r,q
H.k_(a)
u=J.aF(a)
if(u<=500)return String.fromCharCode.apply(null,a)
for(t="",s=0;s<u;s=r){r=s+500
q=r<u?r:u
t+=String.fromCharCode.apply(null,a.slice(s,q))}return t},
nj:function(a){var u,t,s,r=H.e([],[P.p])
for(u=a.length,t=0;t<a.length;a.length===u||(0,H.G)(a),++t){s=a[t]
if(typeof s!=="number"||Math.floor(s)!==s)throw H.c(H.as(s))
if(s<=65535)C.a.h(r,s)
else if(s<=1114111){C.a.h(r,55296+(C.f.aI(s-65536,10)&1023))
C.a.h(r,56320+(s&1023))}else throw H.c(H.as(s))}return H.lu(r)},
lv:function(a){var u,t,s
for(u=a.length,t=0;t<u;++t){s=a[t]
if(typeof s!=="number"||Math.floor(s)!==s)throw H.c(H.as(s))
if(s<0)throw H.c(H.as(s))
if(s>65535)return H.nj(a)}return H.lu(a)},
nk:function(a,b,c){var u,t,s,r
if(c<=500&&b===0&&c===a.length)return String.fromCharCode.apply(null,a)
for(u=b,t="";u<c;u=s){s=u+500
r=s<c?s:c
t+=String.fromCharCode.apply(null,a.subarray(u,r))}return t},
dD:function(a){var u
if(0<=a){if(a<=65535)return String.fromCharCode(a)
if(a<=1114111){u=a-65536
return String.fromCharCode((55296|C.f.aI(u,10))>>>0,56320|u&1023)}}throw H.c(P.ad(a,0,1114111,null,null))},
bU:function(a){if(a.date===void 0)a.date=new Date(a.a)
return a.date},
nh:function(a){var u=H.bU(a).getFullYear()+0
return u},
nf:function(a){var u=H.bU(a).getMonth()+1
return u},
nb:function(a){var u=H.bU(a).getDate()+0
return u},
nc:function(a){var u=H.bU(a).getHours()+0
return u},
ne:function(a){var u=H.bU(a).getMinutes()+0
return u},
ng:function(a){var u=H.bU(a).getSeconds()+0
return u},
nd:function(a){var u=H.bU(a).getMilliseconds()+0
return u},
q:function(a){throw H.c(H.as(a))},
d:function(a,b){if(a==null)J.aF(a)
throw H.c(H.c4(a,b))},
c4:function(a,b){var u,t,s="index"
if(typeof b!=="number"||Math.floor(b)!==b)return new P.aU(!0,b,s,null)
u=H.ae(J.aF(a))
if(!(b<0)){if(typeof u!=="number")return H.q(u)
t=b>=u}else t=!0
if(t)return P.Y(b,a,s,null,u)
return P.dF(b,s)},
of:function(a,b,c){var u="Invalid value"
if(a>c)return new P.bW(0,c,!0,a,"start",u)
if(b!=null)if(b<a||b>c)return new P.bW(a,c,!0,b,"end",u)
return new P.aU(!0,b,"end",null)},
as:function(a){return new P.aU(!0,a,null,null)},
o8:function(a){if(typeof a!=="number")throw H.c(H.as(a))
return a},
c:function(a){var u
if(a==null)a=new P.dA()
u=new Error()
u.dartException=a
if("defineProperty" in Object){Object.defineProperty(u,"message",{get:H.mm})
u.name=""}else u.toString=H.mm
return u},
mm:function(){return J.at(this.dartException)},
t:function(a){throw H.c(a)},
G:function(a){throw H.c(P.bu(a))},
b6:function(a){var u,t,s,r,q,p
a=H.mk(a.replace(String({}),'$receiver$'))
u=a.match(/\\\$[a-zA-Z]+\\\$/g)
if(u==null)u=H.e([],[P.h])
t=u.indexOf("\\$arguments\\$")
s=u.indexOf("\\$argumentsExpr\\$")
r=u.indexOf("\\$expr\\$")
q=u.indexOf("\\$method\\$")
p=u.indexOf("\\$receiver\\$")
return new H.ia(a.replace(new RegExp('\\\\\\$arguments\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$argumentsExpr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$expr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$method\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$receiver\\\\\\$','g'),'((?:x|[^x])*)'),t,s,r,q,p)},
ib:function(a){return function($expr$){var $argumentsExpr$='$arguments$'
try{$expr$.$method$($argumentsExpr$)}catch(u){return u.message}}(a)},
lE:function(a){return function($expr$){try{$expr$.$method$}catch(u){return u.message}}(a)},
lp:function(a,b){return new H.hi(a,b==null?null:b.method)},
kC:function(a,b){var u=b==null,t=u?null:b.method
return new H.fK(a,t,u?null:b.receiver)},
aE:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=null,f=new H.kp(a)
if(a==null)return
if(typeof a!=="object")return a
if("dartException" in a)return f.$1(a.dartException)
else if(!("message" in a))return a
u=a.message
if("number" in a&&typeof a.number=="number"){t=a.number
s=t&65535
if((C.f.aI(t,16)&8191)===10)switch(s){case 438:return f.$1(H.kC(H.n(u)+" (Error "+s+")",g))
case 445:case 5007:return f.$1(H.lp(H.n(u)+" (Error "+s+")",g))}}if(a instanceof TypeError){r=$.mp()
q=$.mq()
p=$.mr()
o=$.ms()
n=$.mv()
m=$.mw()
l=$.mu()
$.mt()
k=$.my()
j=$.mx()
i=r.ab(u)
if(i!=null)return f.$1(H.kC(H.K(u),i))
else{i=q.ab(u)
if(i!=null){i.method="call"
return f.$1(H.kC(H.K(u),i))}else{i=p.ab(u)
if(i==null){i=o.ab(u)
if(i==null){i=n.ab(u)
if(i==null){i=m.ab(u)
if(i==null){i=l.ab(u)
if(i==null){i=o.ab(u)
if(i==null){i=k.ab(u)
if(i==null){i=j.ab(u)
h=i!=null}else h=!0}else h=!0}else h=!0}else h=!0}else h=!0}else h=!0}else h=!0
if(h)return f.$1(H.lp(H.K(u),i))}}return f.$1(new H.iq(typeof u==="string"?u:""))}if(a instanceof RangeError){if(typeof u==="string"&&u.indexOf("call stack")!==-1)return new P.dJ()
u=function(b){try{return String(b)}catch(e){}return null}(a)
return f.$1(new P.aU(!1,g,g,typeof u==="string"?u.replace(/^RangeError:\s*/,""):u))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof u==="string"&&u==="too much recursion")return new P.dJ()
return a},
c7:function(a){var u
if(a==null)return new H.ex(a)
u=a.$cachedTrace
if(u!=null)return u
return a.$cachedTrace=new H.ex(a)},
oj:function(a,b){var u,t,s,r=a.length
for(u=0;u<r;u=s){t=u+1
s=t+1
b.l(0,a[u],a[t])}return b},
or:function(a,b,c,d,e,f){H.f(a,"$ikx")
switch(H.ae(b)){case 0:return a.$0()
case 1:return a.$1(c)
case 2:return a.$2(c,d)
case 3:return a.$3(c,d,e)
case 4:return a.$4(c,d,e,f)}throw H.c(P.x("Unsupported number of arguments for wrapped closure"))},
c3:function(a,b){var u
H.ae(b)
if(a==null)return
u=a.$identity
if(!!u)return u
u=function(c,d,e){return function(f,g,h,i){return e(c,d,f,g,h,i)}}(a,b,H.or)
a.$identity=u
return u},
mQ:function(a,b,c,d,e,f,g){var u,t,s,r,q,p,o,n,m,l=null,k=b[0],j=k.$callName,i=e?Object.create(new H.hL().constructor.prototype):Object.create(new H.cb(l,l,l,l).constructor.prototype)
i.$initialize=i.constructor
if(e)u=function static_tear_off(){this.$initialize()}
else{t=$.aV
if(typeof t!=="number")return t.n()
$.aV=t+1
t=new Function("a,b,c,d"+t,"this.$initialize(a,b,c,d"+t+")")
u=t}i.constructor=u
u.prototype=i
if(!e){s=H.le(a,k,f)
s.$reflectionInfo=d}else{i.$static_name=g
s=k}if(typeof d=="number")r=function(h,a0){return function(){return h(a0)}}(H.on,d)
else if(typeof d=="function")if(e)r=d
else{q=f?H.ld:H.kt
r=function(h,a0){return function(){return h.apply({$receiver:a0(this)},arguments)}}(d,q)}else throw H.c("Error in reflectionInfo.")
i.$S=r
i[j]=s
for(p=s,o=1;o<b.length;++o){n=b[o]
m=n.$callName
if(m!=null){n=e?n:H.le(a,n,f)
i[m]=n}if(o===c){n.$reflectionInfo=d
p=n}}i.$C=p
i.$R=k.$R
i.$D=k.$D
return u},
mN:function(a,b,c,d){var u=H.kt
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,u)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,u)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,u)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,u)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,u)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,u)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,u)}},
le:function(a,b,c){var u,t,s,r,q,p,o
if(c)return H.mP(a,b)
u=b.$stubName
t=b.length
s=a[u]
r=b==null?s==null:b===s
q=!r||t>=27
if(q)return H.mN(t,!r,u,b)
if(t===0){r=$.aV
if(typeof r!=="number")return r.n()
$.aV=r+1
p="self"+r
r="return function(){var "+p+" = this."
q=$.cc
return new Function(r+H.n(q==null?$.cc=H.fb("self"):q)+";return "+p+"."+H.n(u)+"();}")()}o="abcdefghijklmnopqrstuvwxyz".split("").splice(0,t).join(",")
r=$.aV
if(typeof r!=="number")return r.n()
$.aV=r+1
o+=r
r="return function("+o+"){return this."
q=$.cc
return new Function(r+H.n(q==null?$.cc=H.fb("self"):q)+"."+H.n(u)+"("+o+");}")()},
mO:function(a,b,c,d){var u=H.kt,t=H.ld
switch(b?-1:a){case 0:throw H.c(H.no("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,u,t)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,u,t)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,u,t)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,u,t)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,u,t)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,u,t)
default:return function(e,f,g,h){return function(){h=[g(this)]
Array.prototype.push.apply(h,arguments)
return e.apply(f(this),h)}}(d,u,t)}},
mP:function(a,b){var u,t,s,r,q,p,o,n=$.cc
if(n==null)n=$.cc=H.fb("self")
u=$.lc
if(u==null)u=$.lc=H.fb("receiver")
t=b.$stubName
s=b.length
r=a[t]
q=b==null?r==null:b===r
p=!q||s>=28
if(p)return H.mO(s,!q,t,b)
if(s===1){n="return function(){return this."+H.n(n)+"."+H.n(t)+"(this."+H.n(u)+");"
u=$.aV
if(typeof u!=="number")return u.n()
$.aV=u+1
return new Function(n+u+"}")()}o="abcdefghijklmnopqrstuvwxyz".split("").splice(0,s-1).join(",")
n="return function("+o+"){return this."+H.n(n)+"."+H.n(t)+"(this."+H.n(u)+", "+o+");"
u=$.aV
if(typeof u!=="number")return u.n()
$.aV=u+1
return new Function(n+u+"}")()},
kX:function(a,b,c,d,e,f,g){return H.mQ(a,b,H.ae(c),d,!!e,!!f,g)},
kt:function(a){return a.a},
ld:function(a){return a.c},
fb:function(a){var u,t,s,r=new H.cb("self","target","receiver","name"),q=J.kz(Object.getOwnPropertyNames(r))
for(u=q.length,t=0;t<u;++t){s=q[t]
if(r[s]===a)return s}},
C:function(a){if(a==null)H.o4("boolean expression must not be null")
return a},
K:function(a){if(a==null)return a
if(typeof a==="string")return a
throw H.c(H.aR(a,"String"))},
og:function(a){if(a==null)return a
if(typeof a==="number")return a
throw H.c(H.aR(a,"double"))},
ox:function(a){if(a==null)return a
if(typeof a==="number")return a
throw H.c(H.aR(a,"num"))},
m9:function(a){if(a==null)return a
if(typeof a==="boolean")return a
throw H.c(H.aR(a,"bool"))},
ae:function(a){if(a==null)return a
if(typeof a==="number"&&Math.floor(a)===a)return a
throw H.c(H.aR(a,"int"))},
mi:function(a,b){throw H.c(H.aR(a,H.c9(H.K(b).substring(2))))},
oz:function(a,b){throw H.c(H.mM(a,H.c9(H.K(b).substring(2))))},
f:function(a,b){if(a==null)return a
if((typeof a==="object"||typeof a==="function")&&J.U(a)[b])return a
H.mi(a,b)},
k:function(a,b){var u
if(a!=null)u=(typeof a==="object"||typeof a==="function")&&J.U(a)[b]
else u=!0
if(u)return a
H.oz(a,b)},
k_:function(a){if(a==null)return a
if(!!J.U(a).$ib)return a
throw H.c(H.aR(a,"List<dynamic>"))},
mf:function(a,b){var u
if(a==null)return a
u=J.U(a)
if(!!u.$ib)return a
if(u[b])return a
H.mi(a,b)},
mb:function(a){var u
if("$S" in a){u=a.$S
if(typeof u=="number")return v.types[H.ae(u)]
else return a.$S()}return},
eV:function(a,b){var u
if(typeof a=="function")return!0
u=H.mb(J.U(a))
if(u==null)return!1
return H.lZ(u,null,b,null)},
m:function(a,b){var u,t
if(a==null)return a
if($.kR)return a
$.kR=!0
try{if(H.eV(a,b))return a
u=H.kk(b)
t=H.aR(a,u)
throw H.c(t)}finally{$.kR=!1}},
kY:function(a,b){if(a!=null&&!H.kW(a,b))H.t(H.aR(a,H.kk(b)))
return a},
aR:function(a,b){return new H.ic("TypeError: "+P.dg(a)+": type '"+H.m4(a)+"' is not a subtype of type '"+b+"'")},
mM:function(a,b){return new H.fc("CastError: "+P.dg(a)+": type '"+H.m4(a)+"' is not a subtype of type '"+b+"'")},
m4:function(a){var u,t=J.U(a)
if(!!t.$ice){u=H.mb(t)
if(u!=null)return H.kk(u)
return"Closure"}return H.bV(a)},
o4:function(a){throw H.c(new H.iS(a))},
oF:function(a){throw H.c(new P.fm(H.K(a)))},
no:function(a){return new H.hy(a)},
mc:function(a){return v.getIsolateTag(a)},
e:function(a,b){a.$ti=b
return a},
bF:function(a){if(a==null)return
return a.$ti},
pm:function(a,b,c){return H.c8(a["$a"+H.n(c)],H.bF(b))},
bs:function(a,b,c,d){var u
H.K(c)
H.ae(d)
u=H.c8(a["$a"+H.n(c)],H.bF(b))
return u==null?null:u[d]},
aD:function(a,b,c){var u
H.K(b)
H.ae(c)
u=H.c8(a["$a"+H.n(b)],H.bF(a))
return u==null?null:u[c]},
w:function(a,b){var u
H.ae(b)
u=H.bF(a)
return u==null?null:u[b]},
kk:function(a){return H.bE(a,null)},
bE:function(a,b){var u,t
H.l(b,"$ib",[P.h],"$ab")
if(a==null)return"dynamic"
if(a===-1)return"void"
if(typeof a==="object"&&a!==null&&a.constructor===Array)return H.c9(a[0].name)+H.kU(a,1,b)
if(typeof a=="function")return H.c9(a.name)
if(a===-2)return"dynamic"
if(typeof a==="number"){H.ae(a)
if(b==null||a<0||a>=b.length)return"unexpected-generic-index:"+a
u=b.length
t=u-a-1
if(t<0||t>=u)return H.d(b,t)
return H.n(b[t])}if('func' in a)return H.nY(a,b)
if('futureOr' in a)return"FutureOr<"+H.bE("type" in a?a.type:null,b)+">"
return"unknown-reified-type"},
nY:function(a,a0){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c=", ",b=[P.h]
H.l(a0,"$ib",b,"$ab")
if("bounds" in a){u=a.bounds
if(a0==null){a0=H.e([],b)
t=null}else t=a0.length
s=a0.length
for(r=u.length,q=r;q>0;--q)C.a.h(a0,"T"+(s+q))
for(p="<",o="",q=0;q<r;++q,o=c){p+=o
b=a0.length
n=b-q-1
if(n<0)return H.d(a0,n)
p=C.b.n(p,a0[n])
m=u[q]
if(m!=null&&m!==P.N)p+=" extends "+H.bE(m,a0)}p+=">"}else{p=""
t=null}l=!!a.v?"void":H.bE(a.ret,a0)
if("args" in a){k=a.args
for(b=k.length,j="",i="",h=0;h<b;++h,i=c){g=k[h]
j=j+i+H.bE(g,a0)}}else{j=""
i=""}if("opt" in a){f=a.opt
j+=i+"["
for(b=f.length,i="",h=0;h<b;++h,i=c){g=f[h]
j=j+i+H.bE(g,a0)}j+="]"}if("named" in a){e=a.named
j+=i+"{"
for(b=H.oi(e),n=b.length,i="",h=0;h<n;++h,i=c){d=H.K(b[h])
j=j+i+H.bE(e[d],a0)+(" "+H.n(d))}j+="}"}if(t!=null)a0.length=t
return p+"("+j+") => "+l},
kU:function(a,b,c){var u,t,s,r,q,p
H.l(c,"$ib",[P.h],"$ab")
if(a==null)return""
u=new P.ai("")
for(t=b,s="",r=!0,q="";t<a.length;++t,s=", "){u.a=q+s
p=a[t]
if(p!=null)r=!1
q=u.a+=H.bE(p,c)}return"<"+u.i(0)+">"},
c8:function(a,b){if(a==null)return b
a=a.apply(null,b)
if(a==null)return
if(typeof a==="object"&&a!==null&&a.constructor===Array)return a
if(typeof a=="function")return a.apply(null,b)
return b},
kV:function(a,b,c,d){var u,t
H.K(b)
H.k_(c)
H.K(d)
if(a==null)return!1
u=H.bF(a)
t=J.U(a)
if(t[b]==null)return!1
return H.m7(H.c8(t[d],u),null,c,null)},
l:function(a,b,c,d){H.K(b)
H.k_(c)
H.K(d)
if(a==null)return a
if(H.kV(a,b,c,d))return a
throw H.c(H.aR(a,function(e,f){return e.replace(/[^<,> ]+/g,function(g){return f[g]||g})}(H.c9(b.substring(2))+H.kU(c,0,null),v.mangledGlobalNames)))},
m7:function(a,b,c,d){var u,t
if(c==null)return!0
if(a==null){u=c.length
for(t=0;t<u;++t)if(!H.aC(null,null,c[t],d))return!1
return!0}u=a.length
for(t=0;t<u;++t)if(!H.aC(a[t],b,c[t],d))return!1
return!0},
pk:function(a,b,c){return a.apply(b,H.c8(J.U(b)["$a"+H.n(c)],H.bF(b)))},
me:function(a){var u
if(typeof a==="number")return!1
if('futureOr' in a){u="type" in a?a.type:null
return a==null||a.name==="N"||a.name==="F"||a===-1||a===-2||H.me(u)}return!1},
kW:function(a,b){var u,t
if(a==null)return b==null||b.name==="N"||b.name==="F"||b===-1||b===-2||H.me(b)
if(b==null||b===-1||b.name==="N"||b===-2)return!0
if(typeof b=="object"){if('futureOr' in b)if(H.kW(a,"type" in b?b.type:null))return!0
if('func' in b)return H.eV(a,b)}u=J.U(a).constructor
t=H.bF(a)
if(t!=null){t=t.slice()
t.splice(0,0,u)
u=t}return H.aC(u,null,b,null)},
A:function(a,b){if(a!=null&&!H.kW(a,b))throw H.c(H.aR(a,H.kk(b)))
return a},
aC:function(a,b,c,d){var u,t,s,r,q,p,o,n,m,l=null
if(a===c)return!0
if(c==null||c===-1||c.name==="N"||c===-2)return!0
if(a===-2)return!0
if(a==null||a===-1||a.name==="N"||a===-2){if(typeof c==="number")return!1
if('futureOr' in c)return H.aC(a,b,"type" in c?c.type:l,d)
return!1}if(typeof a==="number")return!1
if(typeof c==="number")return!1
if(a.name==="F")return!0
if('func' in c)return H.lZ(a,b,c,d)
if('func' in a)return c.name==="kx"
u=typeof a==="object"&&a!==null&&a.constructor===Array
t=u?a[0]:a
if('futureOr' in c){s="type" in c?c.type:l
if('futureOr' in a)return H.aC("type" in a?a.type:l,b,s,d)
else if(H.aC(a,b,s,d))return!0
else{if(!('$i'+"ci" in t.prototype))return!1
r=t.prototype["$a"+"ci"]
q=H.c8(r,u?a.slice(1):l)
return H.aC(typeof q==="object"&&q!==null&&q.constructor===Array?q[0]:l,b,s,d)}}p=typeof c==="object"&&c!==null&&c.constructor===Array
o=p?c[0]:c
if(o!==t){n=o.name
if(!('$i'+n in t.prototype))return!1
m=t.prototype["$a"+n]}else m=l
if(!p)return!0
u=u?a.slice(1):l
p=c.slice(1)
return H.m7(H.c8(m,u),b,p,d)},
lZ:function(a,b,c,d){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g
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
return H.ow(h,b,g,d)},
ow:function(a,b,c,d){var u,t,s,r=Object.getOwnPropertyNames(c)
for(u=r.length,t=0;t<u;++t){s=r[t]
if(!Object.hasOwnProperty.call(a,s))return!1
if(!H.aC(c[s],d,a[s],b))return!1}return!0},
pl:function(a,b,c){Object.defineProperty(a,H.K(b),{value:c,enumerable:false,writable:true,configurable:true})},
ou:function(a){var u,t,s,r,q=H.K($.md.$1(a)),p=$.jQ[q]
if(p!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}u=$.jY[q]
if(u!=null)return u
t=v.interceptorsByTag[q]
if(t==null){q=H.K($.m6.$2(a,q))
if(q!=null){p=$.jQ[q]
if(p!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}u=$.jY[q]
if(u!=null)return u
t=v.interceptorsByTag[q]}}if(t==null)return
u=t.prototype
s=q[0]
if(s==="!"){p=H.kj(u)
$.jQ[q]=p
Object.defineProperty(a,v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}if(s==="~"){$.jY[q]=u
return u}if(s==="-"){r=H.kj(u)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:r,enumerable:false,writable:true,configurable:true})
return r.i}if(s==="+")return H.mh(a,u)
if(s==="*")throw H.c(P.ip(q))
if(v.leafTags[q]===true){r=H.kj(u)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:r,enumerable:false,writable:true,configurable:true})
return r.i}else return H.mh(a,u)},
mh:function(a,b){var u=Object.getPrototypeOf(a)
Object.defineProperty(u,v.dispatchPropertyName,{value:J.l1(b,u,null,null),enumerable:false,writable:true,configurable:true})
return b},
kj:function(a){return J.l1(a,!1,null,!!a.$iI)},
ov:function(a,b,c){var u=b.prototype
if(v.leafTags[a]===true)return H.kj(u)
else return J.l1(u,c,null,null)},
op:function(){if(!0===$.l0)return
$.l0=!0
H.oq()},
oq:function(){var u,t,s,r,q,p,o,n
$.jQ=Object.create(null)
$.jY=Object.create(null)
H.oo()
u=v.interceptorsByTag
t=Object.getOwnPropertyNames(u)
if(typeof window!="undefined"){window
s=function(){}
for(r=0;r<t.length;++r){q=t[r]
p=$.mj.$1(q)
if(p!=null){o=H.ov(q,u[q],p)
if(o!=null){Object.defineProperty(p,v.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
s.prototype=p}}}}for(r=0;r<t.length;++r){q=t[r]
if(/^[A-Za-z_]/.test(q)){n=u[q]
u["!"+q]=n
u["~"+q]=n
u["-"+q]=n
u["+"+q]=n
u["*"+q]=n}}},
oo:function(){var u,t,s,r,q,p,o=C.E()
o=H.c2(C.F,H.c2(C.G,H.c2(C.w,H.c2(C.w,H.c2(C.H,H.c2(C.I,H.c2(C.J(C.v),o)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){u=dartNativeDispatchHooksTransformer
if(typeof u=="function")u=[u]
if(u.constructor==Array)for(t=0;t<u.length;++t){s=u[t]
if(typeof s=="function")o=s(o)||o}}r=o.getTag
q=o.getUnknownTag
p=o.prototypeForTag
$.md=new H.jV(r)
$.m6=new H.jW(q)
$.mj=new H.jX(p)},
c2:function(a,b){return a(b)||b},
n0:function(a,b,c,d){var u=b?"m":"",t=c?"":"i",s=d?"g":"",r=function(e,f){try{return new RegExp(e,f)}catch(q){return q}}(a,u+t+s)
if(r instanceof RegExp)return r
throw H.c(P.a3("Illegal RegExp pattern ("+String(r)+")",a,null))},
oD:function(a,b,c){var u=a.indexOf(b,c)
return u>=0},
oh:function(a){if(a.indexOf("$",0)>=0)return a.replace(/\$/g,"$$$$")
return a},
mk:function(a){if(/[[\]{}()*+?.\\^$|]/.test(a))return a.replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
return a},
ml:function(a,b,c){var u=H.oE(a,b,c)
return u},
oE:function(a,b,c){var u,t,s,r
if(b===""){if(a==="")return c
u=a.length
for(t=c,s=0;s<u;++s)t=t+a[s]+c
return t.charCodeAt(0)==0?t:t}r=a.indexOf(b,0)
if(r<0)return a
if(a.length<500||c.indexOf("$",0)>=0)return a.split(b).join(c)
return a.replace(new RegExp(H.mk(b),'g'),H.oh(c))},
fg:function fg(){},
fh:function fh(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
ia:function ia(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
hi:function hi(a,b){this.a=a
this.b=b},
fK:function fK(a,b,c){this.a=a
this.b=b
this.c=c},
iq:function iq(a){this.a=a},
kp:function kp(a){this.a=a},
ex:function ex(a){this.a=a
this.b=null},
ce:function ce(){},
hT:function hT(){},
hL:function hL(){},
cb:function cb(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
ic:function ic(a){this.a=a},
fc:function fc(a){this.a=a},
hy:function hy(a){this.a=a},
iS:function iS(a){this.a=a},
aI:function aI(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
fO:function fO(a,b){this.a=a
this.b=b
this.c=null},
fP:function fP(a,b){this.a=a
this.$ti=b},
fQ:function fQ(a,b,c){var _=this
_.a=a
_.b=b
_.d=_.c=null
_.$ti=c},
jV:function jV(a){this.a=a},
jW:function jW(a){this.a=a},
jX:function jX(a){this.a=a},
fJ:function fJ(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
c0:function(a){return a},
n8:function(a){return new Int8Array(a)},
b9:function(a,b,c){if(a>>>0!==a||a>=c)throw H.c(H.c4(b,a))},
nW:function(a,b,c){var u
if(!(a>>>0!==a))u=b>>>0!==b||a>b||b>c
else u=!0
if(u)throw H.c(H.of(a,b,c))
return b},
co:function co(){},
bz:function bz(){},
dx:function dx(){},
cp:function cp(){},
dy:function dy(){},
hc:function hc(){},
hd:function hd(){},
he:function he(){},
hf:function hf(){},
hg:function hg(){},
dz:function dz(){},
cq:function cq(){},
cN:function cN(){},
cO:function cO(){},
cP:function cP(){},
cQ:function cQ(){},
oi:function(a){return J.lk(a?Object.keys(a):[],null)},
oy:function(a){if(typeof dartPrint=="function"){dartPrint(a)
return}if(typeof console=="object"&&typeof console.log!="undefined"){console.log(a)
return}if(typeof window=="object")return
if(typeof print=="function"){print(a)
return}throw"Unable to print message: "+String(a)}},J={
l1:function(a,b,c,d){return{i:a,p:b,e:c,x:d}},
eX:function(a){var u,t,s,r,q=a[v.dispatchPropertyName]
if(q==null)if($.l0==null){H.op()
q=a[v.dispatchPropertyName]}if(q!=null){u=q.p
if(!1===u)return q.i
if(!0===u)return a
t=Object.getPrototypeOf(a)
if(u===t)return q.i
if(q.e===t)throw H.c(P.ip("Return interceptor for "+H.n(u(a,q))))}s=a.constructor
r=s==null?null:s[$.l4()]
if(r!=null)return r
r=H.ou(a)
if(r!=null)return r
if(typeof a=="function")return C.P
u=Object.getPrototypeOf(a)
if(u==null)return C.A
if(u===Object.prototype)return C.A
if(typeof s=="function"){Object.defineProperty(s,$.l4(),{value:C.u,enumerable:false,writable:true,configurable:true})
return C.u}return C.u},
n_:function(a,b){if(typeof a!=="number"||Math.floor(a)!==a)throw H.c(P.ks(a,"length","is not an integer"))
if(a<0||a>4294967295)throw H.c(P.ad(a,0,4294967295,"length",null))
return J.lk(new Array(a),b)},
lk:function(a,b){return J.kz(H.e(a,[b]))},
kz:function(a){H.k_(a)
a.fixed$length=Array
return a},
U:function(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.dk.prototype
return J.dj.prototype}if(typeof a=="string")return J.bh.prototype
if(a==null)return J.dl.prototype
if(typeof a=="boolean")return J.fI.prototype
if(a.constructor==Array)return J.aH.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bi.prototype
return a}if(a instanceof P.N)return a
return J.eX(a)},
ok:function(a){if(typeof a=="number")return J.by.prototype
if(typeof a=="string")return J.bh.prototype
if(a==null)return a
if(a.constructor==Array)return J.aH.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bi.prototype
return a}if(a instanceof P.N)return a
return J.eX(a)},
c6:function(a){if(typeof a=="string")return J.bh.prototype
if(a==null)return a
if(a.constructor==Array)return J.aH.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bi.prototype
return a}if(a instanceof P.N)return a
return J.eX(a)},
jR:function(a){if(a==null)return a
if(a.constructor==Array)return J.aH.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bi.prototype
return a}if(a instanceof P.N)return a
return J.eX(a)},
ol:function(a){if(typeof a=="number")return J.by.prototype
if(a==null)return a
if(!(a instanceof P.N))return J.bD.prototype
return a},
om:function(a){if(typeof a=="number")return J.by.prototype
if(typeof a=="string")return J.bh.prototype
if(a==null)return a
if(!(a instanceof P.N))return J.bD.prototype
return a},
kZ:function(a){if(typeof a=="string")return J.bh.prototype
if(a==null)return a
if(!(a instanceof P.N))return J.bD.prototype
return a},
eW:function(a){if(a==null)return a
if(typeof a!="object"){if(typeof a=="function")return J.bi.prototype
return a}if(a instanceof P.N)return a
return J.eX(a)},
mE:function(a,b){if(typeof a=="number"&&typeof b=="number")return a+b
return J.ok(a).n(a,b)},
P:function(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.U(a).t(a,b)},
l8:function(a,b){if(typeof a=="number"&&typeof b=="number")return a*b
return J.om(a).m(a,b)},
mF:function(a,b){if(typeof a=="number"&&typeof b=="number")return a-b
return J.ol(a).p(a,b)},
l9:function(a,b){if(typeof b==="number")if(a.constructor==Array||typeof a=="string"||H.os(a,a[v.dispatchPropertyName]))if(b>>>0===b&&b<a.length)return a[b]
return J.c6(a).j(a,b)},
kq:function(a,b,c){return J.jR(a).l(a,b,c)},
mG:function(a,b){return J.kZ(a).G(a,b)},
mH:function(a,b,c){return J.eW(a).hy(a,b,c)},
mI:function(a,b,c,d){return J.eW(a).ir(a,b,c,d)},
mJ:function(a,b){return J.kZ(a).W(a,b)},
kr:function(a,b){return J.jR(a).K(a,b)},
mK:function(a,b,c,d){return J.eW(a).iM(a,b,c,d)},
la:function(a,b){return J.jR(a).I(a,b)},
ca:function(a){return J.eW(a).gcl(a)},
d2:function(a){return J.U(a).gJ(a)},
bH:function(a){return J.jR(a).gX(a)},
aF:function(a){return J.c6(a).gk(a)},
mL:function(a,b){return J.eW(a).jj(a,b)},
at:function(a){return J.U(a).i(a)},
a:function a(){},
fI:function fI(){},
dl:function dl(){},
dm:function dm(){},
hm:function hm(){},
bD:function bD(){},
bi:function bi(){},
aH:function aH(a){this.$ti=a},
kA:function kA(a){this.$ti=a},
ap:function ap(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.d=null
_.$ti=c},
by:function by(){},
dk:function dk(){},
dj:function dj(){},
bh:function bh(){}},P={
nB:function(){var u,t,s={}
if(self.scheduleImmediate!=null)return P.o5()
if(self.MutationObserver!=null&&self.document!=null){u=self.document.createElement("div")
t=self.document.createElement("span")
s.a=null
new self.MutationObserver(H.c3(new P.iU(s),1)).observe(u,{childList:true})
return new P.iT(s,u,t)}else if(self.setImmediate!=null)return P.o6()
return P.o7()},
nC:function(a){self.scheduleImmediate(H.c3(new P.iV(H.m(a,{func:1,ret:-1})),0))},
nD:function(a){self.setImmediate(H.c3(new P.iW(H.m(a,{func:1,ret:-1})),0))},
nE:function(a){P.kH(C.t,H.m(a,{func:1,ret:-1}))},
kH:function(a,b){var u
H.m(b,{func:1,ret:-1})
u=C.f.a2(a.a,1000)
return P.nH(u<0?0:u,b)},
lD:function(a,b){var u
H.m(b,{func:1,ret:-1,args:[P.b4]})
u=C.f.a2(a.a,1000)
return P.nI(u<0?0:u,b)},
nH:function(a,b){var u=new P.eE()
u.eY(a,b)
return u},
nI:function(a,b){var u=new P.eE()
u.eZ(a,b)
return u},
nF:function(a,b){var u,t,s
b.a=1
try{a.es(new P.j4(b),new P.j5(b),null)}catch(s){u=H.aE(s)
t=H.c7(s)
P.oA(new P.j6(b,u,t))}},
lP:function(a,b){var u,t
for(;u=a.a,u===2;)a=H.f(a.c,"$iaB")
if(u>=4){t=b.c2()
b.a=a.a
b.c=a.c
P.cL(b,t)}else{t=H.f(b.c,"$ib8")
b.a=2
b.c=a
a.dr(t)}},
cL:function(a,b){var u,t,s,r,q,p,o,n,m,l,k,j,i=null,h={},g=h.a=a
for(;!0;){u={}
t=g.a===8
if(b==null){if(t){s=H.f(g.c,"$iaj")
g=g.b
r=s.a
q=s.b
g.toString
P.jJ(i,i,g,r,q)}return}for(;p=b.a,p!=null;b=p){b.a=null
P.cL(h.a,b)}g=h.a
o=g.c
u.a=t
u.b=o
r=!t
if(r){q=b.c
q=(q&1)!==0||q===8}else q=!0
if(q){q=b.b
n=q.b
if(t){m=g.b
m.toString
m=m==n
if(!m)n.toString
else m=!0
m=!m}else m=!1
if(m){H.f(o,"$iaj")
g=g.b
r=o.a
q=o.b
g.toString
P.jJ(i,i,g,r,q)
return}l=$.Z
if(l!=n)$.Z=n
else l=i
g=b.c
if(g===8)new P.ja(h,u,b,t).$0()
else if(r){if((g&1)!==0)new P.j9(u,b,o).$0()}else if((g&2)!==0)new P.j8(h,u,b).$0()
if(l!=null)$.Z=l
g=u.b
if(!!J.U(g).$ici){if(g.a>=4){k=H.f(q.c,"$ib8")
q.c=null
b=q.be(k)
q.a=g.a
q.c=g.c
h.a=g
continue}else P.lP(g,q)
return}}j=b.b
k=H.f(j.c,"$ib8")
j.c=null
b=j.be(k)
g=u.a
r=u.b
if(!g){H.A(r,H.w(j,0))
j.a=4
j.c=r}else{H.f(r,"$iaj")
j.a=8
j.c=r}h.a=j
g=j}},
o0:function(a,b){if(H.eV(a,{func:1,args:[P.N,P.aq]}))return H.m(a,{func:1,ret:null,args:[P.N,P.aq]})
if(H.eV(a,{func:1,args:[P.N]}))return H.m(a,{func:1,ret:null,args:[P.N]})
throw H.c(P.ks(a,"onError","Error handler must accept one Object or one Object and a StackTrace as arguments, and return a a valid result"))},
o_:function(){var u,t
for(;u=$.c1,u!=null;){$.cZ=null
t=u.b
$.c1=t
if(t==null)$.cY=null
u.a.$0()}},
o3:function(){$.kS=!0
try{P.o_()}finally{$.cZ=null
$.kS=!1
if($.c1!=null)$.l7().$1(P.m8())}},
m3:function(a){var u=new P.e1(H.m(a,{func:1,ret:-1}))
if($.c1==null){$.c1=$.cY=u
if(!$.kS)$.l7().$1(P.m8())}else $.cY=$.cY.b=u},
o2:function(a){var u,t,s
H.m(a,{func:1,ret:-1})
u=$.c1
if(u==null){P.m3(a)
$.cZ=$.cY
return}t=new P.e1(a)
s=$.cZ
if(s==null){t.b=u
$.c1=$.cZ=t}else{t.b=s.b
$.cZ=s.b=t
if(t.b==null)$.cY=t}},
oA:function(a){var u,t=null,s={func:1,ret:-1}
H.m(a,s)
u=$.Z
if(C.k===u){P.jL(t,t,C.k,a)
return}u.toString
P.jL(t,t,u,H.m(u.cf(a),s))},
lC:function(a,b){var u,t={func:1,ret:-1}
H.m(b,t)
u=$.Z
if(u===C.k){u.toString
return P.kH(a,b)}return P.kH(a,H.m(u.cf(b),t))},
ns:function(a,b){var u,t,s={func:1,ret:-1,args:[P.b4]}
H.m(b,s)
u=$.Z
if(u===C.k){u.toString
return P.lD(a,b)}t=u.dC(b,P.b4)
$.Z.toString
return P.lD(a,H.m(t,s))},
jJ:function(a,b,c,d,e){var u={}
u.a=d
P.o2(new P.jK(u,e))},
m_:function(a,b,c,d,e){var u,t
H.m(d,{func:1,ret:e})
t=$.Z
if(t===c)return d.$0()
$.Z=c
u=t
try{t=d.$0()
return t}finally{$.Z=u}},
m0:function(a,b,c,d,e,f,g){var u,t
H.m(d,{func:1,ret:f,args:[g]})
H.A(e,g)
t=$.Z
if(t===c)return d.$1(e)
$.Z=c
u=t
try{t=d.$1(e)
return t}finally{$.Z=u}},
o1:function(a,b,c,d,e,f,g,h,i){var u,t
H.m(d,{func:1,ret:g,args:[h,i]})
H.A(e,h)
H.A(f,i)
t=$.Z
if(t===c)return d.$2(e,f)
$.Z=c
u=t
try{t=d.$2(e,f)
return t}finally{$.Z=u}},
jL:function(a,b,c,d){var u
H.m(d,{func:1,ret:-1})
u=C.k!==c
if(u)d=!(!u||!1)?c.cf(d):c.iw(d,-1)
P.m3(d)},
iU:function iU(a){this.a=a},
iT:function iT(a,b,c){this.a=a
this.b=b
this.c=c},
iV:function iV(a){this.a=a},
iW:function iW(a){this.a=a},
eE:function eE(){this.c=0},
jt:function jt(a,b){this.a=a
this.b=b},
js:function js(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
b8:function b8(a,b,c,d,e){var _=this
_.a=null
_.b=a
_.c=b
_.d=c
_.e=d
_.$ti=e},
aB:function aB(a,b){var _=this
_.a=0
_.b=a
_.c=null
_.$ti=b},
j3:function j3(a,b){this.a=a
this.b=b},
j7:function j7(a,b){this.a=a
this.b=b},
j4:function j4(a){this.a=a},
j5:function j5(a){this.a=a},
j6:function j6(a,b,c){this.a=a
this.b=b
this.c=c},
ja:function ja(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
jb:function jb(a){this.a=a},
j9:function j9(a,b,c){this.a=a
this.b=b
this.c=c},
j8:function j8(a,b,c){this.a=a
this.b=b
this.c=c},
e1:function e1(a){this.a=a
this.b=null},
hO:function hO(){},
hQ:function hQ(a,b){this.a=a
this.b=b},
hR:function hR(a,b){this.a=a
this.b=b},
cw:function cw(){},
hP:function hP(){},
b4:function b4(){},
aj:function aj(a,b){this.a=a
this.b=b},
jC:function jC(){},
jK:function jK(a,b){this.a=a
this.b=b},
ji:function ji(){},
jk:function jk(a,b,c){this.a=a
this.b=b
this.c=c},
jj:function jj(a,b){this.a=a
this.b=b},
jl:function jl(a,b,c){this.a=a
this.b=b
this.c=c},
n2:function(a,b){return new H.aI([a,b])},
ll:function(a,b){return new H.aI([a,b])},
n3:function(a){return H.oj(a,new H.aI([null,null]))},
n4:function(a){return new P.jf([a])},
kO:function(){var u=Object.create(null)
u["<non-identifier-key>"]=u
delete u["<non-identifier-key>"]
return u},
lR:function(a,b,c){var u=new P.jg(a,b,[c])
u.c=a.e
return u},
mY:function(a,b,c){var u,t
if(P.kT(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}u=H.e([],[P.h])
C.a.h($.ar,a)
try{P.nZ(a,u)}finally{if(0>=$.ar.length)return H.d($.ar,-1)
$.ar.pop()}t=P.lA(b,H.mf(u,"$ij"),", ")+c
return t.charCodeAt(0)==0?t:t},
ky:function(a,b,c){var u,t
if(P.kT(a))return b+"..."+c
u=new P.ai(b)
C.a.h($.ar,a)
try{t=u
t.a=P.lA(t.a,a,", ")}finally{if(0>=$.ar.length)return H.d($.ar,-1)
$.ar.pop()}u.a+=c
t=u.a
return t.charCodeAt(0)==0?t:t},
kT:function(a){var u,t
for(u=$.ar.length,t=0;t<u;++t)if(a===$.ar[t])return!0
return!1},
nZ:function(a,b){var u,t,s,r,q,p,o,n,m,l
H.l(b,"$ib",[P.h],"$ab")
u=a.gX(a)
t=0
s=0
while(!0){if(!(t<80||s<3))break
if(!u.D())return
r=H.n(u.gL(u))
C.a.h(b,r)
t+=r.length+2;++s}if(!u.D()){if(s<=5)return
if(0>=b.length)return H.d(b,-1)
q=b.pop()
if(0>=b.length)return H.d(b,-1)
p=b.pop()}else{o=u.gL(u);++s
if(!u.D()){if(s<=4){C.a.h(b,H.n(o))
return}q=H.n(o)
if(0>=b.length)return H.d(b,-1)
p=b.pop()
t+=q.length+2}else{n=u.gL(u);++s
for(;u.D();o=n,n=m){m=u.gL(u);++s
if(s>100){while(!0){if(!(t>75&&s>3))break
if(0>=b.length)return H.d(b,-1)
t-=b.pop().length+2;--s}C.a.h(b,"...")
return}}p=H.n(o)
q=H.n(n)
t+=q.length+p.length+4}}if(s>b.length+2){t+=5
l="..."}else l=null
while(!0){if(!(t>80&&b.length>3))break
if(0>=b.length)return H.d(b,-1)
t-=b.pop().length+2
if(l==null){t+=5
l="..."}}if(l!=null)C.a.h(b,l)
C.a.h(b,p)
C.a.h(b,q)},
lm:function(a,b,c){var u=P.n2(b,c)
a.I(0,new P.fR(u,b,c))
return u},
kE:function(a){var u,t={}
if(P.kT(a))return"{...}"
u=new P.ai("")
try{C.a.h($.ar,a)
u.a+="{"
t.a=!0
J.la(a,new P.fW(t,u))
u.a+="}"}finally{if(0>=$.ar.length)return H.d($.ar,-1)
$.ar.pop()}t=u.a
return t.charCodeAt(0)==0?t:t},
jf:function jf(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
cM:function cM(a){this.a=a
this.c=this.b=null},
jg:function jg(a,b,c){var _=this
_.a=a
_.b=b
_.d=_.c=null
_.$ti=c},
fR:function fR(a,b,c){this.a=a
this.b=b
this.c=c},
fS:function fS(){},
y:function y(){},
fV:function fV(){},
fW:function fW(a,b){this.a=a
this.b=b},
af:function af(){},
ju:function ju(){},
fX:function fX(){},
dW:function dW(a,b){this.a=a
this.$ti=b},
jm:function jm(){},
eg:function eg(){},
eK:function eK(){},
nw:function(a,b,c,d){H.l(b,"$ib",[P.p],"$ab")
if(b instanceof Uint8Array)return P.nx(!1,b,c,d)
return},
nx:function(a,b,c,d){var u,t,s=$.mz()
if(s==null)return
u=0===c
if(u&&!0)return P.kK(s,b)
t=b.length
d=P.bp(c,d,t)
if(u&&d===t)return P.kK(s,b)
return P.kK(s,b.subarray(c,d))},
kK:function(a,b){if(P.nz(b))return
return P.nA(a,b)},
nA:function(a,b){var u,t
try{u=a.decode(b)
return u}catch(t){H.aE(t)}return},
nz:function(a){var u,t=a.length-2
for(u=0;u<t;++u)if(a[u]===237)if((a[u+1]&224)===160)return!0
return!1},
ny:function(){var u,t
try{u=new TextDecoder("utf-8",{fatal:true})
return u}catch(t){H.aE(t)}return},
m2:function(a,b,c){var u,t,s
H.l(a,"$ib",[P.p],"$ab")
for(u=J.c6(a),t=b;t<c;++t){s=u.j(a,t)
if(typeof s!=="number")return s.bG()
if((s&127)!==s)return t-b}return c-b},
lb:function(a,b,c,d,e,f){if(C.f.aj(f,4)!==0)throw H.c(P.a3("Invalid base64 padding, padded length must be multiple of four, is "+f,a,c))
if(d+e!==f)throw H.c(P.a3("Invalid base64 padding, '=' not at the end",a,b))
if(e>2)throw H.c(P.a3("Invalid base64 padding, more than two '=' characters",a,b))},
f8:function f8(){},
f9:function f9(){},
bL:function bL(){},
bN:function bN(){},
fu:function fu(){},
iz:function iz(){},
iB:function iB(){},
jB:function jB(a){this.b=0
this.c=a},
iA:function iA(a){this.a=a},
jA:function jA(a,b){var _=this
_.a=a
_.b=b
_.c=!0
_.f=_.e=_.d=0},
d_:function(a,b,c){var u
H.m(b,{func:1,ret:P.p,args:[P.h]})
u=H.ni(a,c)
if(u!=null)return u
if(b!=null)return b.$1(a)
throw H.c(P.a3(a,null,null))},
mV:function(a){if(a instanceof H.ce)return a.i(0)
return"Instance of '"+H.bV(a)+"'"},
n5:function(a,b,c){var u,t
H.A(b,c)
u=J.n_(a,c)
if(a!==0&&!0)for(t=0;t<u.length;++t)C.a.l(u,t,b)
return H.l(u,"$ib",[c],"$ab")},
kD:function(a,b,c){var u,t=[c],s=H.e([],t)
for(u=J.bH(a);u.D();)C.a.h(s,H.A(u.gL(u),c))
if(b)return s
return H.l(J.kz(s),"$ib",t,"$ab")},
cx:function(a,b,c){var u,t=P.p
H.l(a,"$ij",[t],"$aj")
if(typeof a==="object"&&a!==null&&a.constructor===Array){H.l(a,"$iaH",[t],"$aaH")
u=a.length
c=P.bp(b,c,u)
return H.lv(b>0||c<u?C.a.eC(a,b,c):a)}if(!!J.U(a).$icq)return H.nk(a,b,P.bp(b,c,a.length))
return P.nq(a,b,c)},
nq:function(a,b,c){var u,t,s,r,q=null
H.l(a,"$ij",[P.p],"$aj")
if(b<0)throw H.c(P.ad(b,0,J.aF(a),q,q))
u=c==null
if(!u&&c<b)throw H.c(P.ad(c,b,J.aF(a),q,q))
t=J.bH(a)
for(s=0;s<b;++s)if(!t.D())throw H.c(P.ad(b,0,s,q,q))
r=[]
if(u)for(;t.D();)r.push(t.gL(t))
else for(s=b;s<c;++s){if(!t.D())throw H.c(P.ad(c,b,s,q,q))
r.push(t.gL(t))}return H.lv(r)},
nm:function(a){return new H.fJ(a,H.n0(a,!1,!0,!1))},
lA:function(a,b,c){var u=J.bH(b)
if(!u.D())return a
if(c.length===0){do a+=H.n(u.gL(u))
while(u.D())}else{a+=H.n(u.gL(u))
for(;u.D();)a=a+c+H.n(u.gL(u))}return a},
iu:function(){var u=H.na()
if(u!=null)return P.nv(u)
throw H.c(P.E("'Uri.base' is not supported"))},
jz:function(a,b,c,d){var u,t,s,r,q,p,o="0123456789ABCDEF"
H.l(a,"$ib",[P.p],"$ab")
if(c===C.l){u=$.mC().b
if(typeof b!=="string")H.t(H.as(b))
u=u.test(b)}else u=!1
if(u)return b
H.A(b,H.aD(c,"bL",0))
t=c.giL().cm(b)
for(u=t.length,s=0,r="";s<u;++s){q=t[s]
if(q<128){p=q>>>4
if(p>=8)return H.d(a,p)
p=(a[p]&1<<(q&15))!==0}else p=!1
if(p)r+=H.dD(q)
else r=d&&q===32?r+"+":r+"%"+o[q>>>4&15]+o[q&15]}return r.charCodeAt(0)==0?r:r},
mS:function(a){var u=Math.abs(a),t=a<0?"-":""
if(u>=1000)return""+a
if(u>=100)return t+"0"+u
if(u>=10)return t+"00"+u
return t+"000"+u},
mT:function(a){if(a>=100)return""+a
if(a>=10)return"0"+a
return"00"+a},
db:function(a){if(a>=10)return""+a
return"0"+a},
lg:function(a,b){return new P.aY(1e6*b+1000*a)},
dg:function(a){if(typeof a==="number"||typeof a==="boolean"||null==a)return J.at(a)
if(typeof a==="string")return JSON.stringify(a)
return P.mV(a)},
d3:function(a){return new P.aU(!1,null,null,a)},
ks:function(a,b,c){return new P.aU(!0,a,b,c)},
dF:function(a,b){return new P.bW(null,null,!0,a,b,"Value not in range")},
ad:function(a,b,c,d,e){return new P.bW(b,c,!0,a,d,"Invalid value")},
bp:function(a,b,c){if(0>a||a>c)throw H.c(P.ad(a,0,c,"start",null))
if(b!=null){if(a>b||b>c)throw H.c(P.ad(b,a,c,"end",null))
return b}return c},
kF:function(a,b){if(typeof a!=="number")return a.U()
if(a<0)throw H.c(P.ad(a,0,null,b,null))},
Y:function(a,b,c,d,e){var u=H.ae(e==null?J.aF(b):e)
return new P.fH(u,!0,a,c,"Index out of range")},
E:function(a){return new P.ir(a)},
ip:function(a){return new P.io(a)},
bu:function(a){return new P.ff(a)},
x:function(a){return new P.e9(a)},
a3:function(a,b,c){return new P.fE(a,b,c)},
n6:function(a,b,c){var u,t
H.m(b,{func:1,ret:c,args:[P.p]})
u=H.e([],[c])
C.a.sk(u,a)
for(t=0;t<a;++t)C.a.l(u,t,b.$1(t))
return u},
l3:function(a){H.oy(a)},
nv:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=null,e=a.length
if(e>=5){u=((C.b.G(a,4)^58)*3|C.b.G(a,0)^100|C.b.G(a,1)^97|C.b.G(a,2)^116|C.b.G(a,3)^97)>>>0
if(u===0)return P.lF(e<e?C.b.B(a,0,e):a,5,f).gey()
else if(u===32)return P.lF(C.b.B(a,5,e),0,f).gey()}t=new Array(8)
t.fixed$length=Array
s=H.e(t,[P.p])
C.a.l(s,0,0)
C.a.l(s,1,-1)
C.a.l(s,2,-1)
C.a.l(s,7,-1)
C.a.l(s,3,0)
C.a.l(s,4,0)
C.a.l(s,5,e)
C.a.l(s,6,e)
if(P.m1(a,0,e,0,s)>=14)C.a.l(s,7,e)
r=s[1]
if(typeof r!=="number")return r.jB()
if(r>=0)if(P.m1(a,0,r,20,s)===20)s[7]=r
t=s[2]
if(typeof t!=="number")return t.n()
q=t+1
p=s[3]
o=s[4]
n=s[5]
m=s[6]
if(typeof m!=="number")return m.U()
if(typeof n!=="number")return H.q(n)
if(m<n)n=m
if(typeof o!=="number")return o.U()
if(o<q)o=n
else if(o<=r)o=r+1
if(typeof p!=="number")return p.U()
if(p<q)p=o
t=s[7]
if(typeof t!=="number")return t.U()
l=t<0
if(l)if(q>r+3){k=f
l=!1}else{t=p>0
if(t&&p+1===o){k=f
l=!1}else{if(!(n<e&&n===o+2&&C.b.a8(a,"..",o)))j=n>o+2&&C.b.a8(a,"/..",n-3)
else j=!0
if(j){k=f
l=!1}else{if(r===4)if(C.b.a8(a,"file",0)){if(q<=0){if(!C.b.a8(a,"/",o)){i="file:///"
u=3}else{i="file://"
u=2}a=i+C.b.B(a,o,e)
r-=0
t=u-0
n+=t
m+=t
e=a.length
q=7
p=7
o=7}else if(o===n){h=n+1;++m
a=C.b.aO(a,o,n,"/");++e
n=h}k="file"}else if(C.b.a8(a,"http",0)){if(t&&p+3===o&&C.b.a8(a,"80",p+1)){g=o-3
n-=3
m-=3
a=C.b.aO(a,p,o,"")
e-=3
o=g}k="http"}else k=f
else if(r===5&&C.b.a8(a,"https",0)){if(t&&p+4===o&&C.b.a8(a,"443",p+1)){g=o-4
n-=4
m-=4
a=C.b.aO(a,p,o,"")
e-=3
o=g}k="https"}else k=f
l=!0}}}else k=f
if(l){if(e<a.length){a=C.b.B(a,0,e)
r-=0
q-=0
p-=0
o-=0
n-=0
m-=0}return new P.jn(a,r,q,p,o,n,m,k)}return P.nJ(a,0,e,r,q,p,o,n,m,k)},
lH:function(a){var u=P.h
return C.a.iP(H.e(a.split("&"),[u]),P.ll(u,u),new P.ix(C.l),[P.D,P.h,P.h])},
nu:function(a,b,c){var u,t,s,r,q,p,o,n=null,m="IPv4 address should contain exactly 4 parts",l="each part must be in the range 0..255",k=new P.it(a),j=new Uint8Array(4)
for(u=j.length,t=b,s=t,r=0;t<c;++t){q=C.b.W(a,t)
if(q!==46){if((q^48)>9)k.$2("invalid character",t)}else{if(r===3)k.$2(m,t)
p=P.d_(C.b.B(a,s,t),n,n)
if(typeof p!=="number")return p.cR()
if(p>255)k.$2(l,s)
o=r+1
if(r>=u)return H.d(j,r)
j[r]=p
s=t+1
r=o}}if(r!==3)k.$2(m,c)
p=P.d_(C.b.B(a,s,c),n,n)
if(typeof p!=="number")return p.cR()
if(p>255)k.$2(l,s)
if(r>=u)return H.d(j,r)
j[r]=p
return j},
lG:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
if(c==null)c=a.length
u=new P.iv(a)
t=new P.iw(u,a)
if(a.length<2)u.$1("address is too short")
s=H.e([],[P.p])
for(r=b,q=r,p=!1,o=!1;r<c;++r){n=C.b.W(a,r)
if(n===58){if(r===b){++r
if(C.b.W(a,r)!==58)u.$2("invalid start colon.",r)
q=r}if(r===q){if(p)u.$2("only one wildcard `::` is allowed",r)
C.a.h(s,-1)
p=!0}else C.a.h(s,t.$2(q,r))
q=r+1}else if(n===46)o=!0}if(s.length===0)u.$1("too few parts")
m=q===c
l=C.a.gax(s)
if(m&&l!==-1)u.$2("expected a part after last `:`",c)
if(!m)if(!o)C.a.h(s,t.$2(q,c))
else{k=P.nu(a,q,c)
C.a.h(s,(k[0]<<8|k[1])>>>0)
C.a.h(s,(k[2]<<8|k[3])>>>0)}if(p){if(s.length>7)u.$1("an address with a wildcard must have less than 7 parts")}else if(s.length!==8)u.$1("an address without a wildcard must contain exactly 8 parts")
j=new Uint8Array(16)
for(l=s.length,i=j.length,h=9-l,r=0,g=0;r<l;++r){f=s[r]
if(f===-1)for(e=0;e<h;++e){if(g<0||g>=i)return H.d(j,g)
j[g]=0
d=g+1
if(d>=i)return H.d(j,d)
j[d]=0
g+=2}else{d=C.f.aI(f,8)
if(g<0||g>=i)return H.d(j,g)
j[g]=d
d=g+1
if(d>=i)return H.d(j,d)
j[d]=f&255
g+=2}}return j},
nJ:function(a,b,c,d,e,f,g,h,i,j){var u,t,s,r,q,p,o,n=null
if(j==null)if(d>b)j=P.nQ(a,b,d)
else{if(d===b)P.cV(a,b,"Invalid empty scheme")
j=""}if(e>b){u=d+3
t=u<e?P.nR(a,u,e-1):""
s=P.nN(a,e,f,!1)
if(typeof f!=="number")return f.n()
r=f+1
if(typeof g!=="number")return H.q(g)
q=r<g?P.nP(P.d_(C.b.B(a,r,g),new P.jv(a,f),n),j):n}else{q=n
s=q
t=""}p=P.nO(a,g,h,n,j,s!=null)
if(typeof h!=="number")return h.U()
o=h<i?P.kP(a,h+1,i,n):n
return new P.c_(j,t,s,q,p,o,i<c?P.nM(a,i+1,c):n)},
lS:function(a){if(a==="http")return 80
if(a==="https")return 443
return 0},
cV:function(a,b,c){throw H.c(P.a3(c,a,b))},
nP:function(a,b){if(a!=null&&a===P.lS(b))return
return a},
nN:function(a,b,c,d){var u,t
if(b===c)return""
if(C.b.W(a,b)===91){if(typeof c!=="number")return c.p()
u=c-1
if(C.b.W(a,u)!==93)P.cV(a,b,"Missing end `]` to match `[` in host")
P.lG(a,b+1,u)
return C.b.B(a,b,c).toLowerCase()}if(typeof c!=="number")return H.q(c)
t=b
for(;t<c;++t)if(C.b.W(a,t)===58){P.lG(a,b,c)
return"["+a+"]"}return P.nT(a,b,c)},
nT:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k
if(typeof c!=="number")return H.q(c)
u=b
t=u
s=null
r=!0
for(;u<c;){q=C.b.W(a,u)
if(q===37){p=P.lY(a,u,!0)
o=p==null
if(o&&r){u+=3
continue}if(s==null)s=new P.ai("")
n=C.b.B(a,t,u)
m=s.a+=!r?n.toLowerCase():n
if(o){p=C.b.B(a,u,u+3)
l=3}else if(p==="%"){p="%25"
l=1}else l=3
s.a=m+p
u+=l
t=u
r=!0}else{if(q<127){o=q>>>4
if(o>=8)return H.d(C.y,o)
o=(C.y[o]&1<<(q&15))!==0}else o=!1
if(o){if(r&&65<=q&&90>=q){if(s==null)s=new P.ai("")
if(t<u){s.a+=C.b.B(a,t,u)
t=u}r=!1}++u}else{if(q<=93){o=q>>>4
if(o>=8)return H.d(C.o,o)
o=(C.o[o]&1<<(q&15))!==0}else o=!1
if(o)P.cV(a,u,"Invalid character")
else{if((q&64512)===55296&&u+1<c){k=C.b.W(a,u+1)
if((k&64512)===56320){q=65536|(q&1023)<<10|k&1023
l=2}else l=1}else l=1
if(s==null)s=new P.ai("")
n=C.b.B(a,t,u)
s.a+=!r?n.toLowerCase():n
s.a+=P.lT(q)
u+=l
t=u}}}}if(s==null)return C.b.B(a,b,c)
if(t<c){n=C.b.B(a,t,c)
s.a+=!r?n.toLowerCase():n}o=s.a
return o.charCodeAt(0)==0?o:o},
nQ:function(a,b,c){var u,t,s,r
if(b===c)return""
if(!P.lV(C.b.G(a,b)))P.cV(a,b,"Scheme not starting with alphabetic character")
for(u=b,t=!1;u<c;++u){s=C.b.G(a,u)
if(s<128){r=s>>>4
if(r>=8)return H.d(C.q,r)
r=(C.q[r]&1<<(s&15))!==0}else r=!1
if(!r)P.cV(a,u,"Illegal scheme character")
if(65<=s&&s<=90)t=!0}a=C.b.B(a,b,c)
return P.nK(t?a.toLowerCase():a)},
nK:function(a){if(a==="http")return"http"
if(a==="file")return"file"
if(a==="https")return"https"
if(a==="package")return"package"
return a},
nR:function(a,b,c){return P.cW(a,b,c,C.R,!1)},
nO:function(a,b,c,d,e,f){var u,t=e==="file",s=t||f,r=a==null
if(r&&!0)return t?"/":""
u=!r?P.cW(a,b,c,C.z,!0):C.n.jE(d,new P.jw(),P.h).C(0,"/")
if(u.length===0){if(t)return"/"}else if(s&&!C.b.a7(u,"/"))u="/"+u
return P.nS(u,e,f)},
nS:function(a,b,c){var u=b.length===0
if(u&&!c&&!C.b.a7(a,"/"))return P.nU(a,!u||c)
return P.nV(a)},
kP:function(a,b,c,d){var u,t={}
H.l(d,"$iD",[P.h,null],"$aD")
if(a!=null){if(d!=null)throw H.c(P.d3("Both query and queryParameters specified"))
return P.cW(a,b,c,C.p,!0)}if(d==null)return
u=new P.ai("")
t.a=""
d.I(0,new P.jx(new P.jy(t,u)))
t=u.a
return t.charCodeAt(0)==0?t:t},
nM:function(a,b,c){return P.cW(a,b,c,C.p,!0)},
lY:function(a,b,c){var u,t,s,r,q,p=b+2
if(p>=a.length)return"%"
u=C.b.W(a,b+1)
t=C.b.W(a,p)
s=H.jU(u)
r=H.jU(t)
if(s<0||r<0)return"%"
q=s*16+r
if(q<127){p=C.f.aI(q,4)
if(p>=8)return H.d(C.r,p)
p=(C.r[p]&1<<(q&15))!==0}else p=!1
if(p)return H.dD(c&&65<=q&&90>=q?(q|32)>>>0:q)
if(u>=97||t>=97)return C.b.B(a,b,b+3).toUpperCase()
return},
lT:function(a){var u,t,s,r,q,p,o="0123456789ABCDEF"
if(a<128){u=new Array(3)
u.fixed$length=Array
t=H.e(u,[P.p])
C.a.l(t,0,37)
C.a.l(t,1,C.b.G(o,a>>>4))
C.a.l(t,2,C.b.G(o,a&15))}else{if(a>2047)if(a>65535){s=240
r=4}else{s=224
r=3}else{s=192
r=2}u=new Array(3*r)
u.fixed$length=Array
t=H.e(u,[P.p])
for(q=0;--r,r>=0;s=128){p=C.f.hK(a,6*r)&63|s
C.a.l(t,q,37)
C.a.l(t,q+1,C.b.G(o,p>>>4))
C.a.l(t,q+2,C.b.G(o,p&15))
q+=3}}return P.cx(t,0,null)},
cW:function(a,b,c,d,e){var u=P.lX(a,b,c,H.l(d,"$ib",[P.p],"$ab"),e)
return u==null?C.b.B(a,b,c):u},
lX:function(a,b,c,d,e){var u,t,s,r,q,p,o,n,m
H.l(d,"$ib",[P.p],"$ab")
u=!e
t=b
s=t
r=null
while(!0){if(typeof t!=="number")return t.U()
if(typeof c!=="number")return H.q(c)
if(!(t<c))break
c$0:{q=C.b.W(a,t)
if(q<127){p=q>>>4
if(p>=8)return H.d(d,p)
p=(d[p]&1<<(q&15))!==0}else p=!1
if(p)++t
else{if(q===37){o=P.lY(a,t,!1)
if(o==null){t+=3
break c$0}if("%"===o){o="%25"
n=1}else n=3}else{if(u)if(q<=93){p=q>>>4
if(p>=8)return H.d(C.o,p)
p=(C.o[p]&1<<(q&15))!==0}else p=!1
else p=!1
if(p){P.cV(a,t,"Invalid character")
o=null
n=null}else{if((q&64512)===55296){p=t+1
if(p<c){m=C.b.W(a,p)
if((m&64512)===56320){q=65536|(q&1023)<<10|m&1023
n=2}else n=1}else n=1}else n=1
o=P.lT(q)}}if(r==null)r=new P.ai("")
r.a+=C.b.B(a,s,t)
r.a+=H.n(o)
if(typeof n!=="number")return H.q(n)
t+=n
s=t}}}if(r==null)return
if(typeof s!=="number")return s.U()
if(s<c)r.a+=C.b.B(a,s,c)
u=r.a
return u.charCodeAt(0)==0?u:u},
lW:function(a){if(C.b.a7(a,"."))return!0
return C.b.e7(a,"/.")!==-1},
nV:function(a){var u,t,s,r,q,p,o
if(!P.lW(a))return a
u=H.e([],[P.h])
for(t=a.split("/"),s=t.length,r=!1,q=0;q<s;++q){p=t[q]
if(J.P(p,"..")){o=u.length
if(o!==0){if(0>=o)return H.d(u,-1)
u.pop()
if(u.length===0)C.a.h(u,"")}r=!0}else if("."===p)r=!0
else{C.a.h(u,p)
r=!1}}if(r)C.a.h(u,"")
return C.a.C(u,"/")},
nU:function(a,b){var u,t,s,r,q,p
if(!P.lW(a))return!b?P.lU(a):a
u=H.e([],[P.h])
for(t=a.split("/"),s=t.length,r=!1,q=0;q<s;++q){p=t[q]
if(".."===p)if(u.length!==0&&C.a.gax(u)!==".."){if(0>=u.length)return H.d(u,-1)
u.pop()
r=!0}else{C.a.h(u,"..")
r=!1}else if("."===p)r=!0
else{C.a.h(u,p)
r=!1}}t=u.length
if(t!==0)if(t===1){if(0>=t)return H.d(u,0)
t=u[0].length===0}else t=!1
else t=!0
if(t)return"./"
if(r||C.a.gax(u)==="..")C.a.h(u,"")
if(!b){if(0>=u.length)return H.d(u,0)
C.a.l(u,0,P.lU(u[0]))}return C.a.C(u,"/")},
lU:function(a){var u,t,s,r=a.length
if(r>=2&&P.lV(J.mG(a,0)))for(u=1;u<r;++u){t=C.b.G(a,u)
if(t===58)return C.b.B(a,0,u)+"%3A"+C.b.az(a,u+1)
if(t<=127){s=t>>>4
if(s>=8)return H.d(C.q,s)
s=(C.q[s]&1<<(t&15))===0}else s=!0
if(s)break}return a},
nL:function(a,b){var u,t,s
for(u=0,t=0;t<2;++t){s=C.b.G(a,b+t)
if(48<=s&&s<=57)u=u*16+s-48
else{s|=32
if(97<=s&&s<=102)u=u*16+s-87
else throw H.c(P.d3("Invalid URL encoding"))}}return u},
kQ:function(a,b,c,d,e){var u,t,s,r,q=b
while(!0){if(!(q<c)){u=!0
break}t=C.b.G(a,q)
if(t<=127)if(t!==37)s=t===43
else s=!0
else s=!0
if(s){u=!1
break}++q}if(u){if(C.l!==d)s=!1
else s=!0
if(s)return C.b.B(a,b,c)
else r=new H.a5(C.b.B(a,b,c))}else{r=H.e([],[P.p])
for(s=a.length,q=b;q<c;++q){t=C.b.G(a,q)
if(t>127)throw H.c(P.d3("Illegal percent encoding in URI"))
if(t===37){if(q+3>s)throw H.c(P.d3("Truncated URI"))
C.a.h(r,P.nL(a,q+1))
q+=2}else if(t===43)C.a.h(r,32)
else C.a.h(r,t)}}H.l(r,"$ib",[P.p],"$ab")
return new P.iA(!1).cm(r)},
lV:function(a){var u=a|32
return 97<=u&&u<=122},
lF:function(a,b,c){var u,t,s,r,q,p,o,n,m="Invalid MIME type",l=H.e([b-1],[P.p])
for(u=a.length,t=b,s=-1,r=null;t<u;++t){r=C.b.G(a,t)
if(r===44||r===59)break
if(r===47){if(s<0){s=t
continue}throw H.c(P.a3(m,a,t))}}if(s<0&&t>b)throw H.c(P.a3(m,a,t))
for(;r!==44;){C.a.h(l,t);++t
for(q=-1;t<u;++t){r=C.b.G(a,t)
if(r===61){if(q<0)q=t}else if(r===59||r===44)break}if(q>=0)C.a.h(l,q)
else{p=C.a.gax(l)
if(r!==44||t!==p+7||!C.b.a8(a,"base64",p+1))throw H.c(P.a3("Expecting '='",a,t))
break}}C.a.h(l,t)
o=t+1
if((l.length&1)===1)a=C.D.j_(0,a,o,u)
else{n=P.lX(a,o,u,C.p,!0)
if(n!=null)a=C.b.aO(a,o,u,n)}return new P.is(a,l,c)},
nX:function(){var u="0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",t=".",s=":",r="/",q="?",p="#",o=P.n6(22,new P.jG(),P.O),n=new P.jF(o),m=new P.jH(),l=new P.jI(),k=H.f(n.$2(0,225),"$iO")
m.$3(k,u,1)
m.$3(k,t,14)
m.$3(k,s,34)
m.$3(k,r,3)
m.$3(k,q,172)
m.$3(k,p,205)
k=H.f(n.$2(14,225),"$iO")
m.$3(k,u,1)
m.$3(k,t,15)
m.$3(k,s,34)
m.$3(k,r,234)
m.$3(k,q,172)
m.$3(k,p,205)
k=H.f(n.$2(15,225),"$iO")
m.$3(k,u,1)
m.$3(k,"%",225)
m.$3(k,s,34)
m.$3(k,r,9)
m.$3(k,q,172)
m.$3(k,p,205)
k=H.f(n.$2(1,225),"$iO")
m.$3(k,u,1)
m.$3(k,s,34)
m.$3(k,r,10)
m.$3(k,q,172)
m.$3(k,p,205)
k=H.f(n.$2(2,235),"$iO")
m.$3(k,u,139)
m.$3(k,r,131)
m.$3(k,t,146)
m.$3(k,q,172)
m.$3(k,p,205)
k=H.f(n.$2(3,235),"$iO")
m.$3(k,u,11)
m.$3(k,r,68)
m.$3(k,t,18)
m.$3(k,q,172)
m.$3(k,p,205)
k=H.f(n.$2(4,229),"$iO")
m.$3(k,u,5)
l.$3(k,"AZ",229)
m.$3(k,s,102)
m.$3(k,"@",68)
m.$3(k,"[",232)
m.$3(k,r,138)
m.$3(k,q,172)
m.$3(k,p,205)
k=H.f(n.$2(5,229),"$iO")
m.$3(k,u,5)
l.$3(k,"AZ",229)
m.$3(k,s,102)
m.$3(k,"@",68)
m.$3(k,r,138)
m.$3(k,q,172)
m.$3(k,p,205)
k=H.f(n.$2(6,231),"$iO")
l.$3(k,"19",7)
m.$3(k,"@",68)
m.$3(k,r,138)
m.$3(k,q,172)
m.$3(k,p,205)
k=H.f(n.$2(7,231),"$iO")
l.$3(k,"09",7)
m.$3(k,"@",68)
m.$3(k,r,138)
m.$3(k,q,172)
m.$3(k,p,205)
m.$3(H.f(n.$2(8,8),"$iO"),"]",5)
k=H.f(n.$2(9,235),"$iO")
m.$3(k,u,11)
m.$3(k,t,16)
m.$3(k,r,234)
m.$3(k,q,172)
m.$3(k,p,205)
k=H.f(n.$2(16,235),"$iO")
m.$3(k,u,11)
m.$3(k,t,17)
m.$3(k,r,234)
m.$3(k,q,172)
m.$3(k,p,205)
k=H.f(n.$2(17,235),"$iO")
m.$3(k,u,11)
m.$3(k,r,9)
m.$3(k,q,172)
m.$3(k,p,205)
k=H.f(n.$2(10,235),"$iO")
m.$3(k,u,11)
m.$3(k,t,18)
m.$3(k,r,234)
m.$3(k,q,172)
m.$3(k,p,205)
k=H.f(n.$2(18,235),"$iO")
m.$3(k,u,11)
m.$3(k,t,19)
m.$3(k,r,234)
m.$3(k,q,172)
m.$3(k,p,205)
k=H.f(n.$2(19,235),"$iO")
m.$3(k,u,11)
m.$3(k,r,234)
m.$3(k,q,172)
m.$3(k,p,205)
k=H.f(n.$2(11,235),"$iO")
m.$3(k,u,11)
m.$3(k,r,10)
m.$3(k,q,172)
m.$3(k,p,205)
k=H.f(n.$2(12,236),"$iO")
m.$3(k,u,12)
m.$3(k,q,12)
m.$3(k,p,205)
k=H.f(n.$2(13,237),"$iO")
m.$3(k,u,13)
m.$3(k,q,13)
l.$3(H.f(n.$2(20,245),"$iO"),"az",21)
k=H.f(n.$2(21,245),"$iO")
l.$3(k,"az",21)
l.$3(k,"09",21)
m.$3(k,"+-.",21)
return o},
m1:function(a,b,c,d,e){var u,t,s,r,q
H.l(e,"$ib",[P.p],"$ab")
u=$.mD()
for(t=b;t<c;++t){if(d<0||d>=u.length)return H.d(u,d)
s=u[d]
r=C.b.G(a,t)^96
if(r>95)r=31
if(r>=s.length)return H.d(s,r)
q=s[r]
d=q&31
C.a.l(e,q>>>5,t)}return d},
ab:function ab(){},
au:function au(a,b){this.a=a
this.b=b},
v:function v(){},
aY:function aY(a){this.a=a},
fr:function fr(){},
fs:function fs(){},
bw:function bw(){},
f2:function f2(){},
dA:function dA(){},
aU:function aU(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
bW:function bW(a,b,c,d,e,f){var _=this
_.e=a
_.f=b
_.a=c
_.b=d
_.c=e
_.d=f},
fH:function fH(a,b,c,d,e){var _=this
_.f=a
_.a=b
_.b=c
_.c=d
_.d=e},
ir:function ir(a){this.a=a},
io:function io(a){this.a=a},
dK:function dK(a){this.a=a},
ff:function ff(a){this.a=a},
hl:function hl(){},
dJ:function dJ(){},
fm:function fm(a){this.a=a},
e9:function e9(a){this.a=a},
fE:function fE(a,b,c){this.a=a
this.b=b
this.c=c},
p:function p(){},
j:function j(){},
aZ:function aZ(){},
b:function b(){},
D:function D(){},
F:function F(){},
a8:function a8(){},
N:function N(){},
aq:function aq(){},
h:function h(){},
ai:function ai(a){this.a=a},
ix:function ix(a){this.a=a},
it:function it(a){this.a=a},
iv:function iv(a){this.a=a},
iw:function iw(a,b){this.a=a
this.b=b},
c_:function c_(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.Q=_.z=_.y=null},
jv:function jv(a,b){this.a=a
this.b=b},
jw:function jw(){},
jy:function jy(a,b){this.a=a
this.b=b},
jx:function jx(a){this.a=a},
is:function is(a,b,c){this.a=a
this.b=b
this.c=c},
jG:function jG(){},
jF:function jF(a){this.a=a},
jH:function jH(){},
jI:function jI(){},
jn:function jn(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.x=h
_.y=null},
j_:function j_(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.Q=_.z=_.y=null},
ob:function(a){var u,t=J.U(a)
if(!!t.$ibg){u=t.gdF(a)
if(u.constructor===Array)if(typeof CanvasPixelArray!=="undefined"){u.constructor=CanvasPixelArray
u.BYTES_PER_ELEMENT=1}return a}return new P.eJ(a.data,a.height,a.width)},
oa:function(a){if(a instanceof P.eJ)return{data:a.a,height:a.b,width:a.c}
return a},
br:function(a){var u,t,s,r,q
if(a==null)return
u=P.ll(P.h,null)
t=Object.getOwnPropertyNames(a)
for(s=t.length,r=0;r<t.length;t.length===s||(0,H.G)(t),++r){q=H.K(t[r])
u.l(0,q,a[q])}return u},
o9:function(a){var u={}
a.I(0,new P.jM(u))
return u},
jp:function jp(){},
jq:function jq(a,b){this.a=a
this.b=b},
eJ:function eJ(a,b,c){this.a=a
this.b=b
this.c=c},
jM:function jM(a){this.a=a},
eB:function eB(a,b){this.a=a
this.b=b},
fA:function fA(a,b){this.a=a
this.b=b},
fB:function fB(){},
fC:function fC(){},
je:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
nG:function(a){a=536870911&a+((67108863&a)<<3)
a^=a>>>11
return 536870911&a+((16383&a)<<15)},
jh:function jh(){},
ag:function ag(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=e},
b0:function b0(){},
fM:function fM(){},
b3:function b3(){},
hj:function hj(){},
hp:function hp(){},
hS:function hS(){},
r:function r(){},
b5:function b5(){},
i9:function i9(){},
ee:function ee(){},
ef:function ef(){},
eo:function eo(){},
ep:function ep(){},
ez:function ez(){},
eA:function eA(){},
eH:function eH(){},
eI:function eI(){},
O:function O(){},
f4:function f4(){},
f5:function f5(){},
f6:function f6(a){this.a=a},
f7:function f7(){},
bI:function bI(){},
hk:function hk(){},
e2:function e2(){},
d5:function d5(){},
dE:function dE(){},
bX:function bX(){},
dH:function dH(){},
dM:function dM(){},
dU:function dU(){},
hK:function hK(){},
ev:function ev(){},
ew:function ew(){}},W={
ku:function(){var u=document.createElement("canvas")
return u},
mU:function(a){H.f(a,"$ii")
return"wheel"},
li:function(a){var u=document.createElement("img")
if(a!=null)u.src=a
return u},
mX:function(a){var u,t=document.createElement("input"),s=H.f(t,"$ick")
try{s.type=a}catch(u){H.aE(u)}return s},
jd:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
lQ:function(a,b,c,d){var u=W.jd(W.jd(W.jd(W.jd(0,a),b),c),d),t=536870911&u+((67108863&u)<<3)
t^=t>>>11
return 536870911&t+((16383&t)<<15)},
a7:function(a,b,c,d,e){var u=W.m5(new W.j2(c),W.o)
if(u!=null&&!0)J.mI(a,b,u,!1)
return new W.j1(a,b,u,!1,[e])},
m5:function(a,b){var u
H.m(a,{func:1,ret:-1,args:[b]})
u=$.Z
if(u===C.k)return a
return u.dC(a,b)},
u:function u(){},
eZ:function eZ(){},
f0:function f0(){},
f1:function f1(){},
bJ:function bJ(){},
bK:function bK(){},
cd:function cd(){},
bt:function bt(){},
cf:function cf(){},
fi:function fi(){},
V:function V(){},
cg:function cg(){},
fj:function fj(){},
aW:function aW(){},
aX:function aX(){},
fk:function fk(){},
fl:function fl(){},
fn:function fn(){},
dc:function dc(){},
fo:function fo(){},
dd:function dd(){},
de:function de(){},
fp:function fp(){},
fq:function fq(){},
iY:function iY(a,b){this.a=a
this.b=b},
X:function X(){},
o:function o(){},
i:function i(){},
ax:function ax(){},
ch:function ch(){},
fz:function fz(){},
fD:function fD(){},
aG:function aG(){},
fG:function fG(){},
bQ:function bQ(){},
bg:function bg(){},
bR:function bR(){},
ck:function ck(){},
b_:function b_(){},
fT:function fT(){},
h5:function h5(){},
cm:function cm(){},
h6:function h6(){},
h7:function h7(a){this.a=a},
h8:function h8(){},
h9:function h9(a){this.a=a},
aJ:function aJ(){},
ha:function ha(){},
a4:function a4(){},
iX:function iX(a){this.a=a},
H:function H(){},
cr:function cr(){},
aK:function aK(){},
hn:function hn(){},
hw:function hw(){},
hx:function hx(a){this.a=a},
hz:function hz(){},
aL:function aL(){},
hI:function hI(){},
aM:function aM(){},
hJ:function hJ(){},
aN:function aN(){},
hM:function hM(){},
hN:function hN(a){this.a=a},
ay:function ay(){},
bq:function bq(){},
aO:function aO(){},
az:function az(){},
hU:function hU(){},
hV:function hV(){},
i4:function i4(){},
aP:function aP(){},
aQ:function aQ(){},
i7:function i7(){},
i8:function i8(){},
bC:function bC(){},
iy:function iy(){},
iO:function iO(){},
b7:function b7(){},
cK:function cK(){},
iZ:function iZ(){},
e4:function e4(){},
jc:function jc(){},
el:function el(){},
jo:function jo(){},
jr:function jr(){},
j0:function j0(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
kN:function kN(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
j1:function j1(a,b,c,d,e){var _=this
_.b=a
_.c=b
_.d=c
_.e=d
_.$ti=e},
j2:function j2(a){this.a=a},
B:function B(){},
di:function di(a,b,c){var _=this
_.a=a
_.b=b
_.c=-1
_.d=null
_.$ti=c},
e3:function e3(){},
e5:function e5(){},
e6:function e6(){},
e7:function e7(){},
e8:function e8(){},
ea:function ea(){},
eb:function eb(){},
ec:function ec(){},
ed:function ed(){},
eh:function eh(){},
ei:function ei(){},
ej:function ej(){},
ek:function ek(){},
em:function em(){},
en:function en(){},
eq:function eq(){},
er:function er(){},
es:function es(){},
cR:function cR(){},
cS:function cS(){},
et:function et(){},
eu:function eu(){},
ey:function ey(){},
eC:function eC(){},
eD:function eD(){},
cT:function cT(){},
cU:function cU(){},
eF:function eF(){},
eG:function eG(){},
eL:function eL(){},
eM:function eM(){},
eN:function eN(){},
eO:function eO(){},
eP:function eP(){},
eQ:function eQ(){},
eR:function eR(){},
eS:function eS(){},
eT:function eT(){},
eU:function eU(){}},O={
kv:function(a){var u=new O.a1([a])
u.bK(a)
return u},
a1:function a1(a){var _=this
_.c=_.b=_.a=null
_.$ti=a},
cl:function cl(){this.b=this.a=null},
dt:function dt(){var _=this
_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
h0:function h0(a,b){var _=this
_.f=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
du:function du(){},
h1:function h1(a,b){var _=this
_.a=a
_.b=b
_.e=_.d=_.c=null},
b1:function b1(a,b){var _=this
_.f=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
h3:function h3(a,b){var _=this
_.f=_.ch=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
h4:function h4(a,b){var _=this
_.f=_.ch=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
bZ:function bZ(){}},E={
lh:function(){var u=new E.ak()
u.a=""
u.b=!0
u.seO(0,O.kv(E.ak))
u.y.bb(u.gj0(),u.gj3())
u.dy=u.dx=u.db=u.cy=u.cx=u.ch=u.Q=u.z=null
u.scT(0,null)
u.ser(null)
u.sb2(null)
return u},
nn:function(a,b){var u=new E.hs(a)
u.eJ(a,b)
return u},
nr:function(a,b,c,d,e){var u,t,s=J.U(a)
if(!!s.$ibK)return E.lB(a,!0,!0,!0,!1)
u=W.ku()
t=u.style
t.width="100%"
t.height="100%"
s.gcl(a).h(0,u)
return E.lB(u,!0,!0,!0,!1)},
lB:function(a,b,c,d,e){var u,t,s,r,q,p,o,n,m,l="mousemove",k=new E.dQ(),j=H.f(C.m.cQ(a,"webgl2",P.n3(["alpha",!0,"depth",!0,"stencil",!1,"antialias",!0])),"$ibX")
if(j==null)H.t(P.x("Failed to get the rendering context for WebGL."))
k.b=a
k.c=j
k.e=E.nn(j,a)
u=new T.i0(j)
u.b=H.ae(j.getParameter(3379))
H.ae(j.getParameter(34076))
u.e=u.d=0
k.f=u
u=new X.dX(a)
t=new X.fL()
t.c=new X.av(!1,!1,!1)
t.shs(P.n4(P.p))
u.b=t
t=new X.hb(u)
t.f=0
t.r=V.bB()
t.x=V.bB()
t.ch=t.Q=1
u.c=t
t=new X.fU(u)
t.r=0
t.x=V.bB()
t.cy=t.cx=t.ch=t.Q=1
u.d=t
t=new X.i6(u)
t.f=V.bB()
t.r=V.bB()
u.e=t
u.x=u.r=u.f=!1
u.y=null
u.sfg(H.e([],[[P.cw,P.N]]))
t=u.z
s=document
r=W.a4
q={func:1,ret:-1,args:[r]};(t&&C.a).h(t,W.a7(s,"contextmenu",H.m(u.gfR(),q),!1,r))
t=u.z
p=W.o
o={func:1,ret:-1,args:[p]};(t&&C.a).h(t,W.a7(a,"focus",H.m(u.gfX(),o),!1,p))
t=u.z;(t&&C.a).h(t,W.a7(a,"blur",H.m(u.gfJ(),o),!1,p))
t=u.z
n=W.b_
m={func:1,ret:-1,args:[n]};(t&&C.a).h(t,W.a7(s,"keyup",H.m(u.gh0(),m),!1,n))
t=u.z;(t&&C.a).h(t,W.a7(s,"keydown",H.m(u.gfZ(),m),!1,n))
n=u.z;(n&&C.a).h(n,W.a7(a,"mousedown",H.m(u.gh4(),q),!1,r))
n=u.z;(n&&C.a).h(n,W.a7(a,"mouseup",H.m(u.gh8(),q),!1,r))
n=u.z;(n&&C.a).h(n,W.a7(a,l,H.m(u.gh6(),q),!1,r))
n=u.z
m=W.b7;(n&&C.a).h(n,W.a7(a,H.K(W.mU(a)),H.m(u.gha(),{func:1,ret:-1,args:[m]}),!1,m))
m=u.z;(m&&C.a).h(m,W.a7(s,l,H.m(u.gfT(),q),!1,r))
m=u.z;(m&&C.a).h(m,W.a7(s,"mouseup",H.m(u.gfV(),q),!1,r))
r=u.z;(r&&C.a).h(r,W.a7(s,"pointerlockchange",H.m(u.ghc(),o),!1,p))
p=u.z
o=W.aQ
s={func:1,ret:-1,args:[o]};(p&&C.a).h(p,W.a7(a,"touchstart",H.m(u.ghp(),s),!1,o))
p=u.z;(p&&C.a).h(p,W.a7(a,"touchend",H.m(u.ghl(),s),!1,o))
p=u.z;(p&&C.a).h(p,W.a7(a,"touchmove",H.m(u.ghn(),s),!1,o))
k.r=u
k.Q=!0
k.ch=!1
k.cx=new P.au(Date.now(),!1)
k.cy=0
k.dt()
return k},
fa:function fa(){},
ak:function ak(){var _=this
_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
hs:function hs(a){var _=this
_.a=a
_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=null},
ht:function ht(a){this.a=a},
hu:function hu(a){this.a=a},
hv:function hv(a){this.a=a},
dQ:function dQ(){var _=this
_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},
i3:function i3(a){this.a=a}},Z={
kM:function(a,b,c){var u
H.l(c,"$ib",[P.p],"$ab")
u=a.createBuffer()
a.bindBuffer(b,u)
a.bufferData(b,new Int16Array(H.c0(c)),35044)
a.bindBuffer(b,null)
return new Z.e0(b,u)},
aA:function(a){return new Z.aS(a)},
e0:function e0(a,b){this.a=a
this.b=b},
d6:function d6(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=0},
iP:function iP(a){this.a=a},
d7:function d7(a,b,c){var _=this
_.a=a
_.b=null
_.c=b
_.d=c},
bx:function bx(a,b,c){this.a=a
this.b=b
this.c=c},
aS:function aS(a){this.a=a}},D={
S:function(){var u=new D.bO()
u.sae(null)
u.saT(null)
u.c=null
u.d=0
return u},
fd:function fd(){},
bO:function bO(){var _=this
_.d=_.c=_.b=_.a=null},
fw:function fw(a){this.a=a},
fx:function fx(a){this.a=a},
z:function z(){this.b=null},
bS:function bS(a){this.b=null
this.$ti=a},
bT:function bT(a){this.b=null
this.$ti=a},
Q:function Q(a,b,c,d){var _=this
_.c=a
_.d=b
_.e=c
_.b=null
_.$ti=d},
bv:function bv(){var _=this
_.d=_.c=_.b=_.a=null},
a6:function a6(){},
dp:function dp(){var _=this
_.c=_.b=_.a=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=null},
dC:function dC(){},
dI:function dI(){},
dN:function dN(){},
dO:function dO(){},
dP:function dP(){}},X={d8:function d8(a,b){this.a=a
this.b=b},dn:function dn(a,b){this.a=a
this.b=b},fL:function fL(){var _=this
_.d=_.c=_.b=_.a=null},dr:function dr(a,b,c){var _=this
_.x=a
_.c=b
_.d=c
_.b=null},fU:function fU(a){var _=this
_.a=a
_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},av:function av(a,b,c){this.a=a
this.b=b
this.c=c},bl:function bl(a,b,c,d,e){var _=this
_.x=a
_.y=b
_.z=c
_.c=d
_.d=e
_.b=null},hb:function hb(a){var _=this
_.a=a
_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},cn:function cn(a,b,c){var _=this
_.x=a
_.c=b
_.d=c
_.b=null},ho:function ho(){},dS:function dS(a,b,c,d){var _=this
_.y=a
_.z=b
_.c=c
_.d=d
_.b=null},i6:function i6(a){var _=this
_.a=a
_.y=_.x=_.r=_.f=_.d=_.c=_.b=null},dX:function dX(a){var _=this
_.a=a
_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},
mW:function(a){var u=new X.fF(),t=new V.bf(0,0,0,1)
u.a=t
u.b=!0
u.c=2000
u.d=!0
u.e=0
u.f=!1
t=$.ly
if(t==null){t=V.lx(0,0,1,1)
$.ly=t}u.r=t
return u},
d9:function d9(){},
fF:function fF(){var _=this
_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
dB:function dB(){var _=this
_.f=_.e=_.d=_.c=_.b=_.a=null},
dL:function dL(){}},V={
oH:function(a,b,c){var u
if(c<=b)return b
u=c-b
a=C.e.aj(a-b,u)
return(a<0?a+u:a)+b},
W:function(a,b,c){if(a==null)return C.b.ac("null",c)
return C.b.ac(C.e.eu(Math.abs(a-0)<$.R().a?0:a,b),c+b+1)},
c5:function(a,b,c){var u,t,s,r,q,p
H.l(a,"$ib",[P.v],"$ab")
u=H.e([],[P.h])
for(t=a.length,s=0,r=0;r<a.length;a.length===t||(0,H.G)(a),++r){q=V.W(a[r],b,c)
s=Math.max(s,q.length)
C.a.h(u,q)}for(p=u.length-1;p>=0;--p){if(p>=u.length)return H.d(u,p)
C.a.l(u,p,C.b.ac(u[p],s))}return u},
l2:function(a){return C.e.jq(Math.pow(2,C.O.aZ(Math.log(H.o8(a))/Math.log(2))))},
dw:function(){var u=$.lo
return u==null?$.lo=V.b2(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1):u},
b2:function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){return new V.al(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p)},
ln:function(a,b,c){var u=c.v(0,Math.sqrt(c.E(c))),t=b.av(u),s=t.v(0,Math.sqrt(t.E(t))),r=u.av(s),q=new V.J(a.a,a.b,a.c),p=s.S(0).E(q),o=r.S(0).E(q),n=u.S(0).E(q)
return V.b2(s.a,r.a,u.a,p,s.b,r.b,u.b,o,s.c,r.c,u.c,n,0,0,0,1)},
bB:function(){var u=$.ls
return u==null?$.ls=new V.ac(0,0):u},
lt:function(){var u=$.cs
return u==null?$.cs=new V.a0(0,0,0):u},
lx:function(a,b,c,d){if(c<0){a+=c
c=-c}if(d<0){b+=d
d=-d}return new V.dG(a,b,c,d)},
cJ:function(){var u=$.lM
return u==null?$.lM=new V.J(0,0,0):u},
lN:function(){var u=$.lL
return u==null?$.lL=new V.J(0,1,0):u},
lO:function(){var u=$.iC
return u==null?$.iC=new V.J(0,0,1):u},
a2:function a2(a,b,c){this.a=a
this.b=b
this.c=c},
bf:function bf(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
fv:function fv(a){this.a=a},
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
al:function al(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){var _=this
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
ac:function ac(a,b){this.a=a
this.b=b},
a0:function a0(a,b,c){this.a=a
this.b=b
this.c=c},
bo:function bo(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
dG:function dG(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
T:function T(a,b){this.a=a
this.b=b},
J:function J(a,b,c){this.a=a
this.b=b
this.c=c},
ah:function(a){var u=new V.hA()
u.eK(a)
return u},
f_:function f_(){},
bk:function bk(){},
ds:function ds(){},
bn:function bn(){this.a=null},
hA:function hA(){this.a=null},
cv:function cv(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
dR:function dR(a,b,c){this.a=a
this.b=b
this.c=c},
cz:function cz(a){this.b=a
this.c=null},
i5:function i5(){this.c=this.b=this.a=null},
cA:function cA(a){this.b=a
this.a=this.c=null},
oB:function(a){P.ns(C.M,new V.kl(a))},
lw:function(a){var u=new V.hq(a),t=document.getElementById(a)
u.c=t
if(t==null)H.t("Failed to find "+a+" for RadioGroup")
return u},
np:function(a){var u=new V.hE()
u.eM(a,!0)
return u},
kl:function kl(a){this.a=a},
hq:function hq(a){this.a=a
this.c=null},
hr:function hr(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
hE:function hE(){this.b=this.a=null},
hG:function hG(a){this.a=a},
hF:function hF(a){this.a=a},
hX:function hX(a,b){this.a=a
this.c=null
this.d=b},
hZ:function hZ(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
hY:function hY(){}},U={
kw:function(){var u=new U.fe()
u.a=!0
u.b=1e12
u.c=-1e12
u.d=0
u.e=100
u.r=u.x=u.f=0
return u},
lf:function(a){var u=new U.da()
u.a=a
return u},
fe:function fe(){var _=this
_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
da:function da(){this.b=this.a=null},
cj:function cj(){var _=this
_.c=_.b=_.a=_.r=_.f=_.e=null},
aa:function aa(){},
dY:function dY(){var _=this
_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.e=_.d=_.c=_.b=_.a=null},
dZ:function dZ(){var _=this
_.fx=_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
e_:function e_(){var _=this
_.r=_.f=_.e=_.d=_.c=_.b=_.a=null}},M={df:function df(){var _=this
_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null}},A={
n7:function(a,b){var u=a.ag,t=new A.h_(b,u)
t.eL(b,u)
t.eI(a,b)
return t},
kI:function(a,b,c,d,e){var u=new A.ie(a,c,e)
u.f=d
u.si_(P.n5(d,0,P.p))
return u},
d4:function d4(a,b,c){this.a=a
this.b=b
this.c=c},
f3:function f3(a){this.a=a},
h_:function h_(a,b){var _=this
_.bk=_.dH=_.bj=_.ag=_.an=_.y2=_.y1=_.x2=_.x1=_.ry=_.rx=_.r2=_.r1=_.k4=_.k3=_.k2=_.k1=_.id=_.go=_.fy=_.fx=_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=null
_.dX=_.cq=_.dW=_.bx=_.dV=_.dU=_.bw=_.bv=_.dT=_.dS=_.bu=_.bt=_.bs=_.dR=_.dQ=_.br=_.dP=_.dO=_.bq=_.dN=_.dM=_.bp=_.bo=_.dL=_.dK=_.bn=_.bm=_.dJ=_.dI=_.bl=null
_.cv=_.e0=_.cu=_.e_=_.ct=_.dZ=_.cs=_.dY=_.cr=null
_.a=a
_.b=b
_.y=_.x=_.r=_.f=_.e=_.d=_.c=null},
h2:function h2(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5){var _=this
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
_.an=b3
_.ag=b4
_.bj=b5},
cB:function cB(a,b){this.b=a
this.c=b},
cF:function cF(a,b,c,d,e,f,g){var _=this
_.b=a
_.c=b
_.d=c
_.e=d
_.f=e
_.r=f
_.x=g},
cD:function cD(a,b,c,d,e,f){var _=this
_.b=a
_.c=b
_.d=c
_.e=d
_.f=e
_.r=f},
cG:function cG(a,b,c,d,e,f,g,h,i){var _=this
_.b=a
_.c=b
_.d=c
_.e=d
_.f=e
_.r=f
_.x=g
_.y=h
_.z=i},
cE:function cE(a,b,c,d,e,f,g,h,i){var _=this
_.b=a
_.c=b
_.d=c
_.e=d
_.f=e
_.r=f
_.x=g
_.y=h
_.z=i},
cH:function cH(a,b,c,d,e,f,g,h,i,j,k,l,m){var _=this
_.b=a
_.c=b
_.d=c
_.e=d
_.f=e
_.r=f
_.x=g
_.y=h
_.z=i
_.Q=j
_.ch=k
_.cx=l
_.cy=m},
cu:function cu(){},
bM:function bM(a,b){this.a=a
this.b=b},
dT:function dT(){},
il:function il(a){this.a=a},
M:function M(a,b,c){this.a=a
this.c=b
this.d=c},
ih:function ih(a,b,c){this.a=a
this.c=b
this.d=c},
ii:function ii(a,b,c){this.a=a
this.c=b
this.d=c},
ik:function ik(a,b,c){this.a=a
this.c=b
this.d=c},
ie:function ie(a,b,c){var _=this
_.f=null
_.a=a
_.c=b
_.d=c},
a_:function a_(a,b,c){this.a=a
this.c=b
this.d=c},
ig:function ig(a,b,c){this.a=a
this.c=b
this.d=c},
L:function L(a,b,c){this.a=a
this.c=b
this.d=c},
ij:function ij(a,b,c){this.a=a
this.c=b
this.d=c},
im:function im(a,b,c){this.a=a
this.c=b
this.d=c},
cC:function cC(a,b,c){this.a=a
this.c=b
this.d=c},
aw:function aw(a,b,c){this.a=a
this.c=b
this.d=c},
am:function am(a,b,c){this.a=a
this.c=b
this.d=c},
an:function an(a,b,c){this.a=a
this.c=b
this.d=c}},F={
ma:function(a,b,c){var u,t=null
H.m(b,{func:1,ret:-1,args:[F.ao,P.v,P.v]})
u=F.kG()
F.cX(u,t,b,c,a,1,0,0,1)
F.cX(u,t,b,c,a,0,1,0,3)
F.cX(u,t,b,c,a,0,0,1,2)
F.cX(u,t,b,c,a,-1,0,0,0)
F.cX(u,t,b,c,a,0,-1,0,0)
F.cX(u,t,b,c,a,0,0,-1,3)
u.a4()
return u},
jE:function(a){var u,t=a.a>0?1:0
if(a.b>0)t+=2
u=a.c
if(typeof u!=="number")return u.cR()
return(u>0?t+4:t)*2},
cX:function(a,b,c,d,a0,a1,a2,a3,a4){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e={}
H.m(c,{func:1,ret:-1,args:[F.ao,P.v,P.v]})
u=a1+a2
t=u+a3
s=a2+a3
r=a3+a1
q=new V.J(t,s+a1,r+a2)
e.a=q
p=a1-a2
o=a2-a3
n=a3-a1
m=e.b=new V.J(p+a3,o+a1,n+a2)
l=new V.J(p-a3,o-a1,n-a2)
e.c=l
k=e.d=new V.J(u-a3,s-a1,r-a2)
if(t>0){e.d=m
e.b=k
t=m
u=k}else{t=k
u=m}for(r=t,t=u,u=q,s=l,j=0;j<a4;++j,i=r,r=u,u=t,t=s,s=i){e.a=t
e.b=s
e.c=r
e.d=u}h=F.jE(u)
g=F.jE(e.b)
f=F.eY(d,a0,new F.jD(e,F.jE(e.c),F.jE(e.d),g,h,c),b)
if(f!=null)a.bz(f)},
oc:function(a,b,c,d){return F.od(!1,!1,c,new F.jN(1,1),d)},
od:function(a,b,c,d,e){var u
H.m(d,{func:1,ret:P.v,args:[P.v,P.v]})
if(e<3)return
if(c<1)return
u=F.eY(c,e,new F.jP(d),null)
if(u==null)return
u.a4()
u.bg()
return u},
ot:function(a,b){var u=F.eY(a,b,new F.jZ(),null)
u.d.bB()
u.a4()
u.bg()
return u},
oC:function(a,b){var u,t,s={}
s.a=u
s.a=null
s.a=new F.km()
t=F.ma(a,new F.kn(s,1),b)
t.bg()
return t},
oG:function(a,b){return F.oe(b,a,0.5,1,new F.ko())},
oe:function(a,b,c,d,e){var u=F.eY(a,b,new F.jO(H.m(e,{func:1,ret:V.a0,args:[P.v]}),d,b,c),null)
if(u==null)return
u.a4()
u.bg()
return u},
l_:function(a,b){var u,t={}
t.a=u
t.a=null
t.a=new F.jS()
return F.eY(b,a,new F.jT(t),null)},
eY:function(a,b,c,d){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=null
H.m(c,{func:1,ret:-1,args:[F.ao,P.v,P.v]})
if(a<1)return
if(b<1)return
u=F.kG()
t=H.e([],[F.ao])
for(s=0;s<=b;++s){r=s/b
q=u.a
if(r<0)p=0
else p=r>1?1:r
q.toString
o=F.kL(g,g,new V.bf(p,0,0,1),g,g,new V.ac(r,1),g,g,0)
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
o=F.kL(g,g,new V.bf(j,i,h,1),g,g,new V.ac(r,m),g,g,0)
k.h(0,o)
c.$3(o,r,n)
C.a.h(t,o.cn(d))}}u.d.is(a+1,b+1,t)
return u},
dh:function(a,b,c){var u=new F.a9(),t=a.a
if(t==null)H.t(P.x("May not create a face with a first vertex which is not attached to a shape."))
if(t!=b.a||t!=c.a)H.t(P.x("May not create a face with vertices attached to different shapes."))
u.c8(a)
u.c9(b)
u.hF(c)
C.a.h(u.a.a.d.b,u)
u.a.a.a0()
return u},
n1:function(a,b){var u=new F.bj(),t=a.a
if(t==null)H.t(P.x("May not create a line with a start vertex which is not attached to a shape."))
if(t!=b.a)H.t(P.x("May not create a line with vertices attached to different shapes."))
u.c8(a)
u.c9(b)
C.a.h(u.a.a.c.b,u)
u.a.a.a0()
return u},
kG:function(){var u=new F.bY(),t=new F.iD(u)
t.b=!1
t.si0(H.e([],[F.ao]))
u.a=t
t=new F.hD(u)
t.sc0(H.e([],[F.bA]))
u.b=t
t=new F.hC(u)
t.sfo(H.e([],[F.bj]))
u.c=t
t=new F.hB(u)
t.sfh(H.e([],[F.a9]))
u.d=t
u.e=null
return u},
kL:function(a,b,c,d,e,f,g,h,i){var u,t=null,s=new F.ao(),r=new F.iL()
r.sc0(H.e([],[F.bA]))
s.b=r
r=new F.iH()
u=[F.bj]
r.sfp(H.e([],u))
r.sfq(H.e([],u))
s.c=r
r=new F.iE()
u=[F.a9]
r.sfi(H.e([],u))
r.sfj(H.e([],u))
r.sfk(H.e([],u))
s.d=r
h=$.l5()
s.e=0
r=$.bc()
u=h.a
s.f=(u&r.a)!==0?d:t
s.r=(u&$.aT().a)!==0?e:t
s.x=(u&$.bb().a)!==0?b:t
s.y=(u&$.bd().a)!==0?f:t
s.z=(u&$.be().a)!==0?g:t
s.Q=(u&$.l6().a)!==0?c:t
s.ch=(u&$.bG().a)!==0?i:0
s.cx=(u&$.ba().a)!==0?a:t
return s},
jD:function jD(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
jN:function jN(a,b){this.a=a
this.b=b},
jP:function jP(a){this.a=a},
jZ:function jZ(){},
km:function km(){},
kn:function kn(a,b){this.a=a
this.b=b},
ko:function ko(){},
jO:function jO(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
jS:function jS(){},
jT:function jT(a){this.a=a},
a9:function a9(){var _=this
_.e=_.d=_.c=_.b=_.a=null},
fy:function fy(){},
hH:function hH(){},
bj:function bj(){this.b=this.a=null},
fN:function fN(){},
id:function id(){},
bA:function bA(){this.a=null},
bY:function bY(){var _=this
_.e=_.d=_.c=_.b=_.a=null},
hB:function hB(a){this.a=a
this.b=null},
hC:function hC(a){this.a=a
this.b=null},
hD:function hD(a){this.a=a
this.b=null},
ao:function ao(){var _=this
_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
iN:function iN(a){this.a=a},
iM:function iM(a){this.a=a},
iD:function iD(a){this.a=a
this.c=this.b=null},
iE:function iE(){this.d=this.c=this.b=null},
iF:function iF(a,b){this.a=a
this.b=b},
iG:function iG(a,b){this.a=a
this.b=b},
iH:function iH(){this.c=this.b=null},
iJ:function iJ(){},
iI:function iI(){},
iK:function iK(){},
hh:function hh(){},
iL:function iL(){this.b=null}},T={cy:function cy(){},hW:function hW(){},i_:function i_(){var _=this
_.y=_.x=_.r=_.d=_.c=_.b=_.a=null},i0:function i0(a){var _=this
_.a=a
_.e=_.d=_.b=null},i1:function i1(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},i2:function i2(a,b,c){this.a=a
this.b=b
this.c=c}},K={
mg:function(){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b="testCanvas",a=null,a0="heightMaps",a1="modifiers",a2={},a3=V.np("Test 037"),a4=W.ku()
a4.className="pageLargeCanvas"
a4.id=b
a3.a.appendChild(a4)
u=[P.h]
a3.dB(H.e(["A test of applying a height map to an image. ","Some shapes will take a bit to calculate depending on quality of mapping."],u))
a3.iq(H.e(["heightMaps","shapes","scalars"],u))
a3.dB(H.e(["\xab[Back to Tests|../]"],u))
u=document
t=u.getElementById(b)
if(t==null)H.t(P.x("Failed to find an element with the identifier, testCanvas."))
s=E.nr(t,!0,!0,!0,!1)
r=new O.dt()
r.sf5(O.kv(V.al))
r.e.bb(r.gfF(),r.gfH())
a3=new O.b1(r,"emission")
a3.c=C.d
a3.f=new V.a2(0,0,0)
r.f=a3
a3=new O.b1(r,"ambient")
a3.c=C.d
a3.f=new V.a2(0,0,0)
r.r=a3
a3=new O.b1(r,"diffuse")
a3.c=C.d
a3.f=new V.a2(0,0,0)
r.x=a3
a3=new O.b1(r,"invDiffuse")
a3.c=C.d
a3.f=new V.a2(0,0,0)
r.y=a3
a3=new O.h4(r,"specular")
a3.c=C.d
a3.f=new V.a2(0,0,0)
a3.ch=100
r.z=a3
a3=new O.h1(r,"bump")
a3.c=C.d
r.Q=a3
r.ch=null
a3=new O.b1(r,"reflect")
a3.c=C.d
a3.f=new V.a2(0,0,0)
r.cx=a3
a3=new O.h3(r,"refract")
a3.c=C.d
a3.f=new V.a2(0,0,0)
a3.ch=1
r.cy=a3
a3=new O.h0(r,"alpha")
a3.c=C.d
a3.f=1
r.db=a3
a3=new D.dp()
a3.bK(D.a6)
a3.sfd(H.e([],[D.bv]))
a3.shr(H.e([],[D.dC]))
a3.shL(H.e([],[D.dI]))
a3.shX(H.e([],[D.dN]))
a3.shY(H.e([],[D.dO]))
a3.shZ(H.e([],[D.dP]))
a3.ch=a3.Q=null
a3.cS(a3.gfD(),a3.ghf(),a3.ghj())
r.dx=a3
q=a3.Q
a3=q==null?a3.Q=D.S():q
a3.h(0,r.ghA())
a3=r.dx
q=a3.ch
a3=q==null?a3.ch=D.S():q
a3.h(0,r.gfL())
r.dy=null
a3=r.dx
p=V.lN()
q=U.lf(V.ln(V.lt(),p,new V.J(1,1,-3)))
o=new V.a2(1,1,1)
n=new D.bv()
n.c=new V.a2(1,1,1)
n.a=V.lO()
m=n.b
n.b=q
q.gA().h(0,n.geP())
q=new D.Q("mover",m,n.b,[U.aa])
q.b=!0
n.aq(q)
if(!n.c.t(0,o)){m=n.c
n.c=o
q=new D.Q("color",m,o,[V.a2])
q.b=!0
n.aq(q)}a3.h(0,n)
a3=r.r
a3.sam(0,new V.a2(0,0,1))
a3=r.x
a3.sam(0,new V.a2(0,1,0))
a3=r.z
a3.sam(0,new V.a2(1,0,0))
a3=r.z
if(a3.c===C.d){a3.c=C.j
a3.bJ()
a3.c5(100)
q=a3.a
q.a=null
q.a9(a)}a3.c5(10)
l=E.lh()
l.ser(r)
k=E.lh()
k.y.h(0,l)
a3=new U.cj()
a3.bK(U.aa)
a3.bb(a3.gfB(),a3.ghh())
a3.e=null
a3.f=V.dw()
a3.r=0
q=s.r
n=new U.dZ()
j=U.kw()
j.scP(0,!0)
j.scD(6.283185307179586)
j.scF(0)
j.sY(0,0)
j.scE(100)
j.sT(0)
j.sco(0.5)
n.b=j
i=n.gaB()
j.gA().h(0,i)
j=U.kw()
j.scP(0,!0)
j.scD(6.283185307179586)
j.scF(0)
j.sY(0,0)
j.scE(100)
j.sT(0)
j.sco(0.5)
n.c=j
j.gA().h(0,i)
n.d=null
n.r=n.f=n.e=!1
n.y=n.x=2.5
n.Q=4
n.ch=n.cx=!1
n.db=n.cy=0
n.dx=null
n.dy=0
n.fx=n.fr=null
h=new X.av(!1,!1,!1)
m=n.d
n.d=h
j=[X.av]
i=new D.Q(a1,m,h,j)
i.b=!0
n.R(i)
i=n.f
if(i!==!1){n.f=!1
i=new D.Q("invertX",i,!1,[P.ab])
i.b=!0
n.R(i)}i=n.r
if(i!==!1){n.r=!1
i=new D.Q("invertY",i,!1,[P.ab])
i.b=!0
n.R(i)}n.aW(q)
a3.h(0,n)
q=s.r
n=new U.dY()
i=U.kw()
i.scP(0,!0)
i.scD(6.283185307179586)
i.scF(0)
i.sY(0,0)
i.scE(100)
i.sT(0)
i.sco(0.2)
n.b=i
i.gA().h(0,n.gaB())
n.c=null
n.d=!1
n.e=2.5
n.r=4
n.x=n.y=!1
n.z=0
n.Q=null
n.ch=0
n.cy=n.cx=null
h=new X.av(!0,!1,!1)
m=n.c
n.c=h
i=new D.Q(a1,m,h,j)
i.b=!0
n.R(i)
n.aW(q)
a3.h(0,n)
q=s.r
n=new U.e_()
n.c=0.01
n.e=n.d=0
h=new X.av(!1,!1,!1)
n.b=h
j=new D.Q(a1,a,h,j)
j.b=!0
n.R(j)
n.aW(q)
a3.h(0,n)
k.sb2(a3)
a3=new M.df()
a3.sf8(0,O.kv(E.ak))
a3.d.bb(a3.gfN(),a3.gfP())
a3.x=a3.r=a3.f=a3.e=null
g=X.mW(a)
f=new X.dB()
f.c=1.0471975511965976
f.d=0.1
f.e=2000
f.sb2(a)
q=f.c
if(!(Math.abs(q-1.0471975511965976)<$.R().a)){f.c=1.0471975511965976
q=new D.Q("fov",q,1.0471975511965976,[P.v])
q.b=!0
f.aE(q)}q=f.d
if(!(Math.abs(q-0.1)<$.R().a)){f.d=0.1
q=new D.Q("near",q,0.1,[P.v])
q.b=!0
f.aE(q)}q=f.e
if(!(Math.abs(q-2000)<$.R().a)){f.e=2000
q=new D.Q("far",q,2000,[P.v])
q.b=!0
f.aE(q)}q=a3.a
if(q!==f){if(q!=null)q.gA().M(0,a3.gaC())
m=a3.a
a3.a=f
f.gA().h(0,a3.gaC())
q=new D.Q("camera",m,a3.a,[X.d9])
q.b=!0
a3.aD(q)}q=a3.b
if(q!==g){if(q!=null)q.gA().M(0,a3.gaC())
m=a3.b
a3.b=g
g.gA().h(0,a3.gaC())
q=new D.Q("target",m,a3.b,[X.dL])
q.b=!0
a3.aD(q)}a3.d.h(0,k)
a3.a.sb2(U.lf(V.b2(1,0,0,0,0,1,0,0,0,0,1,5,0,0,0,1)))
q=s.d
if(q!==a3){if(q!=null)q.gA().M(0,s.gcW())
s.d=a3
a3.gA().h(0,s.gcW())
s.cX()}a2.a=null
a2.b=""
a2.c=1
e=new K.k1(a2,s,l)
a3=new V.hX(a0,new K.k2(a2,e))
u=u.getElementById(a0)
a3.c=u
if(u==null)H.t("Failed to find heightMaps for Texture2DGroup")
a3.a_(0,"../resources/HeightMap1.png",!0)
a3.h(0,"../resources/HeightMap2.png")
a3.h(0,"../resources/HeightMap3.png")
a3.h(0,"../resources/ScrewHeightMap.png")
d=new K.k3(a2,e)
a3=V.lw("shapes")
a3.a_(0,"Cuboid",new K.kb(d))
a3.a_(0,"Cylinder",new K.kc(d))
a3.a_(0,"LatLonSphere",new K.kd(d))
a3.a_(0,"Sphere",new K.ke(d))
a3.a_(0,"Toroid",new K.kf(d))
a3.a_(0,"Grid Small",new K.kg(d))
a3.ca(0,"Grid Medium",new K.kh(d),!0)
a3.a_(0,"Grid Large",new K.ki(d))
c=new K.k4(a2,e)
a2=V.lw("scalars")
a2.a_(0,"0.1",new K.k5(c))
a2.a_(0,"0.2",new K.k6(c))
a2.a_(0,"0.4",new K.k7(c))
a2.ca(0,"0.6",new K.k8(c),!0)
a2.a_(0,"0.8",new K.k9(c))
a2.a_(0,"1.0",new K.ka(c))
V.oB(s)},
k1:function k1(a,b,c){this.a=a
this.b=b
this.c=c},
k0:function k0(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
k2:function k2(a,b){this.a=a
this.b=b},
k3:function k3(a,b){this.a=a
this.b=b},
kb:function kb(a){this.a=a},
kc:function kc(a){this.a=a},
kd:function kd(a){this.a=a},
ke:function ke(a){this.a=a},
kf:function kf(a){this.a=a},
kg:function kg(a){this.a=a},
kh:function kh(a){this.a=a},
ki:function ki(a){this.a=a},
k4:function k4(a,b){this.a=a
this.b=b},
k5:function k5(a){this.a=a},
k6:function k6(a){this.a=a},
k7:function k7(a){this.a=a},
k8:function k8(a){this.a=a},
k9:function k9(a){this.a=a},
ka:function ka(a){this.a=a}}
var w=[C,H,J,P,W,O,E,Z,D,X,V,U,M,A,F,T,K]
hunkHelpers.setFunctionNamesIfNecessary(w)
var $={}
H.kB.prototype={}
J.a.prototype={
t:function(a,b){return a===b},
gJ:function(a){return H.ct(a)},
i:function(a){return"Instance of '"+H.bV(a)+"'"}}
J.fI.prototype={
i:function(a){return String(a)},
gJ:function(a){return a?519018:218159},
$iab:1}
J.dl.prototype={
t:function(a,b){return null==b},
i:function(a){return"null"},
gJ:function(a){return 0}}
J.dm.prototype={
gJ:function(a){return 0},
i:function(a){return String(a)}}
J.hm.prototype={}
J.bD.prototype={}
J.bi.prototype={
i:function(a){var u=a[$.mo()]
if(u==null)return this.eE(a)
return"JavaScript function for "+H.n(J.at(u))},
$S:function(){return{func:1,opt:[,,,,,,,,,,,,,,,,]}},
$ikx:1}
J.aH.prototype={
h:function(a,b){H.A(b,H.w(a,0))
if(!!a.fixed$length)H.t(P.E("add"))
a.push(b)},
eo:function(a,b){if(!!a.fixed$length)H.t(P.E("removeAt"))
if(b<0||b>=a.length)throw H.c(P.dF(b,null))
return a.splice(b,1)[0]},
M:function(a,b){var u
if(!!a.fixed$length)H.t(P.E("remove"))
for(u=0;u<a.length;++u)if(J.P(a[u],b)){a.splice(u,1)
return!0}return!1},
I:function(a,b){var u,t
H.m(b,{func:1,ret:-1,args:[H.w(a,0)]})
u=a.length
for(t=0;t<u;++t){b.$1(a[t])
if(a.length!==u)throw H.c(P.bu(a))}},
C:function(a,b){var u,t=new Array(a.length)
t.fixed$length=Array
for(u=0;u<a.length;++u)this.l(t,u,H.n(a[u]))
return t.join(b)},
iV:function(a){return this.C(a,"")},
iP:function(a,b,c,d){var u,t,s
H.A(b,d)
H.m(c,{func:1,ret:d,args:[d,H.w(a,0)]})
u=a.length
for(t=b,s=0;s<u;++s){t=c.$2(t,a[s])
if(a.length!==u)throw H.c(P.bu(a))}return t},
K:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
eC:function(a,b,c){if(b<0||b>a.length)throw H.c(P.ad(b,0,a.length,"start",null))
if(c<b||c>a.length)throw H.c(P.ad(c,b,a.length,"end",null))
if(b===c)return H.e([],[H.w(a,0)])
return H.e(a.slice(b,c),[H.w(a,0)])},
giO:function(a){if(a.length>0)return a[0]
throw H.c(H.lj())},
gax:function(a){var u=a.length
if(u>0)return a[u-1]
throw H.c(H.lj())},
bc:function(a,b,c,d){var u,t,s=H.w(a,0)
H.l(d,"$ij",[s],"$aj")
if(!!a.immutable$list)H.t(P.E("setRange"))
P.bp(b,c,a.length)
u=c-b
if(u===0)return
P.kF(0,"skipCount")
H.l(d,"$ib",[s],"$ab")
s=J.c6(d)
if(u>s.gk(d))throw H.c(H.mZ())
if(0<b)for(t=u-1;t>=0;--t)a[b+t]=s.j(d,t)
else for(t=0;t<u;++t)a[b+t]=s.j(d,t)},
aK:function(a,b){var u
for(u=0;u<a.length;++u)if(J.P(a[u],b))return!0
return!1},
i:function(a){return P.ky(a,"[","]")},
gX:function(a){return new J.ap(a,a.length,[H.w(a,0)])},
gJ:function(a){return H.ct(a)},
gk:function(a){return a.length},
sk:function(a,b){if(!!a.fixed$length)H.t(P.E("set length"))
if(b<0)throw H.c(P.ad(b,0,null,"newLength",null))
a.length=b},
j:function(a,b){if(b>=a.length||b<0)throw H.c(H.c4(a,b))
return a[b]},
l:function(a,b,c){H.A(c,H.w(a,0))
if(!!a.immutable$list)H.t(P.E("indexed set"))
if(b>=a.length||b<0)throw H.c(H.c4(a,b))
a[b]=c},
n:function(a,b){var u,t=[H.w(a,0)]
H.l(b,"$ib",t,"$ab")
u=C.f.n(a.length,b.gk(b))
t=H.e([],t)
this.sk(t,u)
this.bc(t,0,a.length,a)
this.bc(t,a.length,u,b)
return t},
$ij:1,
$ib:1}
J.kA.prototype={}
J.ap.prototype={
gL:function(a){return this.d},
D:function(){var u,t=this,s=t.a,r=s.length
if(t.b!==r)throw H.c(H.G(s))
u=t.c
if(u>=r){t.sdd(null)
return!1}t.sdd(s[u]);++t.c
return!0},
sdd:function(a){this.d=H.A(a,H.w(this,0))},
$iaZ:1}
J.by.prototype={
jq:function(a){var u
if(a>=-2147483648&&a<=2147483647)return a|0
if(isFinite(a)){u=a<0?Math.ceil(a):Math.floor(a)
return u+0}throw H.c(P.E(""+a+".toInt()"))},
aZ:function(a){var u,t
if(a>=0){if(a<=2147483647)return a|0}else if(a>=-2147483648){u=a|0
return a===u?u:u-1}t=Math.floor(a)
if(isFinite(t))return t
throw H.c(P.E(""+a+".floor()"))},
ai:function(a){if(a>0){if(a!==1/0)return Math.round(a)}else if(a>-1/0)return 0-Math.round(0-a)
throw H.c(P.E(""+a+".round()"))},
eu:function(a,b){var u,t
if(b>20)throw H.c(P.ad(b,0,20,"fractionDigits",null))
u=a.toFixed(b)
if(a===0)t=1/a<0
else t=!1
if(t)return"-"+u
return u},
b8:function(a,b){var u,t,s,r
if(b<2||b>36)throw H.c(P.ad(b,2,36,"radix",null))
u=a.toString(b)
if(C.b.W(u,u.length-1)!==41)return u
t=/^([\da-z]+)(?:\.([\da-z]+))?\(e\+(\d+)\)$/.exec(u)
if(t==null)H.t(P.E("Unexpected toString result: "+u))
s=t.length
if(1>=s)return H.d(t,1)
u=t[1]
if(3>=s)return H.d(t,3)
r=+t[3]
s=t[2]
if(s!=null){u+=s
r-=s.length}return u+C.b.m("0",r)},
i:function(a){if(a===0&&1/a<0)return"-0.0"
else return""+a},
gJ:function(a){var u,t,s,r,q=a|0
if(a===q)return 536870911&q
u=Math.abs(a)
t=Math.log(u)/0.6931471805599453|0
s=Math.pow(2,t)
r=u<1?u/s:s/u
return 536870911&((r*9007199254740992|0)+(r*3542243181176521|0))*599197+t*1259},
n:function(a,b){if(typeof b!=="number")throw H.c(H.as(b))
return a+b},
p:function(a,b){if(typeof b!=="number")throw H.c(H.as(b))
return a-b},
m:function(a,b){if(typeof b!=="number")throw H.c(H.as(b))
return a*b},
aj:function(a,b){var u
if(typeof b!=="number")throw H.c(H.as(b))
u=a%b
if(u===0)return 0
if(u>0)return u
if(b<0)return u-b
else return u+b},
eH:function(a,b){if((a|0)===a)if(b>=1||b<-1)return a/b|0
return this.dw(a,b)},
a2:function(a,b){return(a|0)===a?a/b|0:this.dw(a,b)},
dw:function(a,b){var u=a/b
if(u>=-2147483648&&u<=2147483647)return u|0
if(u>0){if(u!==1/0)return Math.floor(u)}else if(u>-1/0)return Math.ceil(u)
throw H.c(P.E("Result of truncating division is "+H.n(u)+": "+H.n(a)+" ~/ "+b))},
aI:function(a,b){var u
if(a>0)u=this.dv(a,b)
else{u=b>31?31:b
u=a>>u>>>0}return u},
hK:function(a,b){if(b<0)throw H.c(H.as(b))
return this.dv(a,b)},
dv:function(a,b){return b>31?0:a>>>b},
$iv:1,
$ia8:1}
J.dk.prototype={$ip:1}
J.dj.prototype={}
J.bh.prototype={
W:function(a,b){if(b<0)throw H.c(H.c4(a,b))
if(b>=a.length)H.t(H.c4(a,b))
return a.charCodeAt(b)},
G:function(a,b){if(b>=a.length)throw H.c(H.c4(a,b))
return a.charCodeAt(b)},
n:function(a,b){if(typeof b!=="string")throw H.c(P.ks(b,null,null))
return a+b},
aO:function(a,b,c,d){var u,t
c=P.bp(b,c,a.length)
u=a.substring(0,b)
t=a.substring(c)
return u+d+t},
a8:function(a,b,c){var u
if(c<0||c>a.length)throw H.c(P.ad(c,0,a.length,null,null))
u=c+b.length
if(u>a.length)return!1
return b===a.substring(c,u)},
a7:function(a,b){return this.a8(a,b,0)},
B:function(a,b,c){if(typeof b!=="number"||Math.floor(b)!==b)H.t(H.as(b))
if(c==null)c=a.length
if(typeof b!=="number")return b.U()
if(b<0)throw H.c(P.dF(b,null))
if(b>c)throw H.c(P.dF(b,null))
if(c>a.length)throw H.c(P.dF(c,null))
return a.substring(b,c)},
az:function(a,b){return this.B(a,b,null)},
m:function(a,b){var u,t
if(0>=b)return""
if(b===1||a.length===0)return a
if(b!==b>>>0)throw H.c(C.K)
for(u=a,t="";!0;){if((b&1)===1)t=u+t
b=b>>>1
if(b===0)break
u+=u}return t},
ac:function(a,b){var u=b-a.length
if(u<=0)return a
return this.m(" ",u)+a},
e8:function(a,b,c){var u
if(c<0||c>a.length)throw H.c(P.ad(c,0,a.length,null,null))
u=a.indexOf(b,c)
return u},
e7:function(a,b){return this.e8(a,b,0)},
i:function(a){return a},
gJ:function(a){var u,t,s
for(u=a.length,t=0,s=0;s<u;++s){t=536870911&t+a.charCodeAt(s)
t=536870911&t+((524287&t)<<10)
t^=t>>6}t=536870911&t+((67108863&t)<<3)
t^=t>>11
return 536870911&t+((16383&t)<<15)},
gk:function(a){return a.length},
$ilq:1,
$ih:1}
H.a5.prototype={
gk:function(a){return this.a.length},
j:function(a,b){return C.b.W(this.a,b)},
$acI:function(){return[P.p]},
$ay:function(){return[P.p]},
$aj:function(){return[P.p]},
$ab:function(){return[P.p]}}
H.ft.prototype={}
H.dq.prototype={
gL:function(a){return this.d},
D:function(){var u,t=this,s=t.a,r=J.c6(s),q=r.gk(s)
if(t.b!==q)throw H.c(P.bu(s))
u=t.c
if(u>=q){t.saQ(null)
return!1}t.saQ(r.K(s,u));++t.c
return!0},
saQ:function(a){this.d=H.A(a,H.w(this,0))},
$iaZ:1}
H.fY.prototype={
gX:function(a){return new H.fZ(J.bH(this.a),this.b,this.$ti)},
gk:function(a){return J.aF(this.a)},
K:function(a,b){return this.b.$1(J.kr(this.a,b))},
$aj:function(a,b){return[b]}}
H.fZ.prototype={
D:function(){var u=this,t=u.b
if(t.D()){u.saQ(u.c.$1(t.gL(t)))
return!0}u.saQ(null)
return!1},
gL:function(a){return this.a},
saQ:function(a){this.a=H.A(a,H.w(this,1))},
$aaZ:function(a,b){return[b]}}
H.iQ.prototype={
gX:function(a){return new H.iR(J.bH(this.a),this.b,this.$ti)}}
H.iR.prototype={
D:function(){var u,t
for(u=this.a,t=this.b;u.D();)if(H.C(t.$1(u.gL(u))))return!0
return!1},
gL:function(a){var u=this.a
return u.gL(u)}}
H.bP.prototype={}
H.cI.prototype={
l:function(a,b,c){H.A(c,H.aD(this,"cI",0))
throw H.c(P.E("Cannot modify an unmodifiable list"))}}
H.dV.prototype={}
H.fg.prototype={
i:function(a){return P.kE(this)},
l:function(a,b,c){H.A(b,H.w(this,0))
H.A(c,H.w(this,1))
return H.mR()},
$iD:1}
H.fh.prototype={
gk:function(a){return this.a},
bi:function(a,b){if("__proto__"===b)return!1
return this.b.hasOwnProperty(b)},
j:function(a,b){if(!this.bi(0,b))return
return this.de(b)},
de:function(a){return this.b[H.K(a)]},
I:function(a,b){var u,t,s,r,q=this,p=H.w(q,1)
H.m(b,{func:1,ret:-1,args:[H.w(q,0),p]})
u=q.c
for(t=u.length,s=0;s<t;++s){r=u[s]
b.$2(r,H.A(q.de(r),p))}}}
H.ia.prototype={
ab:function(a){var u,t,s=this,r=new RegExp(s.a).exec(a)
if(r==null)return
u=Object.create(null)
t=s.b
if(t!==-1)u.arguments=r[t+1]
t=s.c
if(t!==-1)u.argumentsExpr=r[t+1]
t=s.d
if(t!==-1)u.expr=r[t+1]
t=s.e
if(t!==-1)u.method=r[t+1]
t=s.f
if(t!==-1)u.receiver=r[t+1]
return u}}
H.hi.prototype={
i:function(a){var u=this.b
if(u==null)return"NoSuchMethodError: "+H.n(this.a)
return"NoSuchMethodError: method not found: '"+u+"' on null"}}
H.fK.prototype={
i:function(a){var u,t=this,s="NoSuchMethodError: method not found: '",r=t.b
if(r==null)return"NoSuchMethodError: "+H.n(t.a)
u=t.c
if(u==null)return s+r+"' ("+H.n(t.a)+")"
return s+r+"' on '"+u+"' ("+H.n(t.a)+")"}}
H.iq.prototype={
i:function(a){var u=this.a
return u.length===0?"Error":"Error: "+u}}
H.kp.prototype={
$1:function(a){if(!!J.U(a).$ibw)if(a.$thrownJsError==null)a.$thrownJsError=this.a
return a},
$S:22}
H.ex.prototype={
i:function(a){var u,t=this.b
if(t!=null)return t
t=this.a
u=t!==null&&typeof t==="object"?t.stack:null
return this.b=u==null?"":u},
$iaq:1}
H.ce.prototype={
i:function(a){return"Closure '"+H.bV(this).trim()+"'"},
$ikx:1,
gjA:function(){return this},
$C:"$1",
$R:1,
$D:null}
H.hT.prototype={}
H.hL.prototype={
i:function(a){var u=this.$static_name
if(u==null)return"Closure of unknown static method"
return"Closure '"+H.c9(u)+"'"}}
H.cb.prototype={
t:function(a,b){var u=this
if(b==null)return!1
if(u===b)return!0
if(!(b instanceof H.cb))return!1
return u.a===b.a&&u.b===b.b&&u.c===b.c},
gJ:function(a){var u,t=this.c
if(t==null)u=H.ct(this.a)
else u=typeof t!=="object"?J.d2(t):H.ct(t)
return(u^H.ct(this.b))>>>0},
i:function(a){var u=this.c
if(u==null)u=this.a
return"Closure '"+H.n(this.d)+"' of "+("Instance of '"+H.bV(u)+"'")}}
H.ic.prototype={
i:function(a){return this.a}}
H.fc.prototype={
i:function(a){return this.a}}
H.hy.prototype={
i:function(a){return"RuntimeError: "+H.n(this.a)}}
H.iS.prototype={
i:function(a){return"Assertion failed: "+P.dg(this.a)}}
H.aI.prototype={
gk:function(a){return this.a},
gao:function(a){return new H.fP(this,[H.w(this,0)])},
bi:function(a,b){var u,t,s=this
if(typeof b==="string"){u=s.b
if(u==null)return!1
return s.d9(u,b)}else if(typeof b==="number"&&(b&0x3ffffff)===b){t=s.c
if(t==null)return!1
return s.d9(t,b)}else return s.iS(b)},
iS:function(a){var u=this,t=u.d
if(t==null)return!1
return u.cA(u.bQ(t,u.cz(a)),a)>=0},
j:function(a,b){var u,t,s,r,q=this
if(typeof b==="string"){u=q.b
if(u==null)return
t=q.bd(u,b)
s=t==null?null:t.b
return s}else if(typeof b==="number"&&(b&0x3ffffff)===b){r=q.c
if(r==null)return
t=q.bd(r,b)
s=t==null?null:t.b
return s}else return q.iT(b)},
iT:function(a){var u,t,s=this,r=s.d
if(r==null)return
u=s.bQ(r,s.cz(a))
t=s.cA(u,a)
if(t<0)return
return u[t].b},
l:function(a,b,c){var u,t,s=this
H.A(b,H.w(s,0))
H.A(c,H.w(s,1))
if(typeof b==="string"){u=s.b
s.d0(u==null?s.b=s.bZ():u,b,c)}else if(typeof b==="number"&&(b&0x3ffffff)===b){t=s.c
s.d0(t==null?s.c=s.bZ():t,b,c)}else s.iU(b,c)},
iU:function(a,b){var u,t,s,r,q=this
H.A(a,H.w(q,0))
H.A(b,H.w(q,1))
u=q.d
if(u==null)u=q.d=q.bZ()
t=q.cz(a)
s=q.bQ(u,t)
if(s==null)q.c6(u,t,[q.c_(a,b)])
else{r=q.cA(s,a)
if(r>=0)s[r].b=b
else s.push(q.c_(a,b))}},
I:function(a,b){var u,t,s=this
H.m(b,{func:1,ret:-1,args:[H.w(s,0),H.w(s,1)]})
u=s.e
t=s.r
for(;u!=null;){b.$2(u.a,u.b)
if(t!==s.r)throw H.c(P.bu(s))
u=u.c}},
d0:function(a,b,c){var u,t=this
H.A(b,H.w(t,0))
H.A(c,H.w(t,1))
u=t.bd(a,b)
if(u==null)t.c6(a,b,t.c_(b,c))
else u.b=c},
c_:function(a,b){var u=this,t=new H.fO(H.A(a,H.w(u,0)),H.A(b,H.w(u,1)))
if(u.e==null)u.e=u.f=t
else u.f=u.f.c=t;++u.a
u.r=u.r+1&67108863
return t},
cz:function(a){return J.d2(a)&0x3ffffff},
cA:function(a,b){var u,t
if(a==null)return-1
u=a.length
for(t=0;t<u;++t)if(J.P(a[t].a,b))return t
return-1},
i:function(a){return P.kE(this)},
bd:function(a,b){return a[b]},
bQ:function(a,b){return a[b]},
c6:function(a,b,c){a[b]=c},
fc:function(a,b){delete a[b]},
d9:function(a,b){return this.bd(a,b)!=null},
bZ:function(){var u="<non-identifier-key>",t=Object.create(null)
this.c6(t,u,t)
this.fc(t,u)
return t}}
H.fO.prototype={}
H.fP.prototype={
gk:function(a){return this.a.a},
gX:function(a){var u=this.a,t=new H.fQ(u,u.r,this.$ti)
t.c=u.e
return t}}
H.fQ.prototype={
gL:function(a){return this.d},
D:function(){var u=this,t=u.a
if(u.b!==t.r)throw H.c(P.bu(t))
else{t=u.c
if(t==null){u.sd_(null)
return!1}else{u.sd_(t.a)
u.c=u.c.c
return!0}}},
sd_:function(a){this.d=H.A(a,H.w(this,0))},
$iaZ:1}
H.jV.prototype={
$1:function(a){return this.a(a)},
$S:22}
H.jW.prototype={
$2:function(a,b){return this.a(a,b)},
$S:39}
H.jX.prototype={
$1:function(a){return this.a(H.K(a))},
$S:40}
H.fJ.prototype={
i:function(a){return"RegExp/"+this.a+"/"},
$ilq:1,
$inl:1}
H.co.prototype={$ico:1}
H.bz.prototype={$ibz:1,$int:1}
H.dx.prototype={
gk:function(a){return a.length},
$iI:1,
$aI:function(){}}
H.cp.prototype={
j:function(a,b){H.b9(b,a,a.length)
return a[b]},
l:function(a,b,c){H.og(c)
H.b9(b,a,a.length)
a[b]=c},
$abP:function(){return[P.v]},
$ay:function(){return[P.v]},
$ij:1,
$aj:function(){return[P.v]},
$ib:1,
$ab:function(){return[P.v]}}
H.dy.prototype={
l:function(a,b,c){H.ae(c)
H.b9(b,a,a.length)
a[b]=c},
$abP:function(){return[P.p]},
$ay:function(){return[P.p]},
$ij:1,
$aj:function(){return[P.p]},
$ib:1,
$ab:function(){return[P.p]}}
H.hc.prototype={
j:function(a,b){H.b9(b,a,a.length)
return a[b]}}
H.hd.prototype={
j:function(a,b){H.b9(b,a,a.length)
return a[b]}}
H.he.prototype={
j:function(a,b){H.b9(b,a,a.length)
return a[b]}}
H.hf.prototype={
j:function(a,b){H.b9(b,a,a.length)
return a[b]}}
H.hg.prototype={
j:function(a,b){H.b9(b,a,a.length)
return a[b]}}
H.dz.prototype={
gk:function(a){return a.length},
j:function(a,b){H.b9(b,a,a.length)
return a[b]},
$ip1:1}
H.cq.prototype={
gk:function(a){return a.length},
j:function(a,b){H.b9(b,a,a.length)
return a[b]},
$icq:1,
$iO:1}
H.cN.prototype={}
H.cO.prototype={}
H.cP.prototype={}
H.cQ.prototype={}
P.iU.prototype={
$1:function(a){var u=this.a,t=u.a
u.a=null
t.$0()},
$S:24}
P.iT.prototype={
$1:function(a){var u,t
this.a.a=H.m(a,{func:1,ret:-1})
u=this.b
t=this.c
u.firstChild?u.removeChild(t):u.appendChild(t)},
$S:31}
P.iV.prototype={
$0:function(){this.a.$0()},
$S:0}
P.iW.prototype={
$0:function(){this.a.$0()},
$S:0}
P.eE.prototype={
eY:function(a,b){if(self.setTimeout!=null)self.setTimeout(H.c3(new P.jt(this,b),0),a)
else throw H.c(P.E("`setTimeout()` not found."))},
eZ:function(a,b){if(self.setTimeout!=null)self.setInterval(H.c3(new P.js(this,a,Date.now(),b),0),a)
else throw H.c(P.E("Periodic timer."))},
$ib4:1}
P.jt.prototype={
$0:function(){this.a.c=1
this.b.$0()},
$S:3}
P.js.prototype={
$0:function(){var u,t=this,s=t.a,r=s.c+1,q=t.b
if(q>0){u=Date.now()-t.c
if(u>(r+1)*q)r=C.f.eH(u,q)}s.c=r
t.d.$1(s)},
$S:0}
P.b8.prototype={
iY:function(a){if(this.c!==6)return!0
return this.b.b.cM(H.m(this.d,{func:1,ret:P.ab,args:[P.N]}),a.a,P.ab,P.N)},
iR:function(a){var u=this.e,t=P.N,s={futureOr:1,type:H.w(this,1)},r=this.b.b
if(H.eV(u,{func:1,args:[P.N,P.aq]}))return H.kY(r.jl(u,a.a,a.b,null,t,P.aq),s)
else return H.kY(r.cM(H.m(u,{func:1,args:[P.N]}),a.a,null,t),s)}}
P.aB.prototype={
es:function(a,b,c){var u,t,s,r=H.w(this,0)
H.m(a,{func:1,ret:{futureOr:1,type:c},args:[r]})
u=$.Z
if(u!==C.k){u.toString
H.m(a,{func:1,ret:{futureOr:1,type:c},args:[r]})
if(b!=null)b=P.o0(b,u)}H.m(a,{func:1,ret:{futureOr:1,type:c},args:[r]})
t=new P.aB($.Z,[c])
s=b==null?1:3
this.d1(new P.b8(t,s,a,b,[r,c]))
return t},
jp:function(a,b){return this.es(a,null,b)},
d1:function(a){var u,t=this,s=t.a
if(s<=1){a.a=H.f(t.c,"$ib8")
t.c=a}else{if(s===2){u=H.f(t.c,"$iaB")
s=u.a
if(s<4){u.d1(a)
return}t.a=s
t.c=u.c}s=t.b
s.toString
P.jL(null,null,s,H.m(new P.j3(t,a),{func:1,ret:-1}))}},
dr:function(a){var u,t,s,r,q,p=this,o={}
o.a=a
if(a==null)return
u=p.a
if(u<=1){t=H.f(p.c,"$ib8")
s=p.c=a
if(t!=null){for(;r=s.a,r!=null;s=r);s.a=t}}else{if(u===2){q=H.f(p.c,"$iaB")
u=q.a
if(u<4){q.dr(a)
return}p.a=u
p.c=q.c}o.a=p.be(a)
u=p.b
u.toString
P.jL(null,null,u,H.m(new P.j7(o,p),{func:1,ret:-1}))}},
c2:function(){var u=H.f(this.c,"$ib8")
this.c=null
return this.be(u)},
be:function(a){var u,t,s
for(u=a,t=null;u!=null;t=u,u=s){s=u.a
u.a=t}return t},
d5:function(a){var u,t,s=this,r=H.w(s,0)
H.kY(a,{futureOr:1,type:r})
u=s.$ti
if(H.kV(a,"$ici",u,"$aci"))if(H.kV(a,"$iaB",u,null))P.lP(a,s)
else P.nF(a,s)
else{t=s.c2()
H.A(a,r)
s.a=4
s.c=a
P.cL(s,t)}},
d6:function(a,b){var u,t=this
H.f(b,"$iaq")
u=t.c2()
t.a=8
t.c=new P.aj(a,b)
P.cL(t,u)},
$ici:1}
P.j3.prototype={
$0:function(){P.cL(this.a,this.b)},
$S:0}
P.j7.prototype={
$0:function(){P.cL(this.b,this.a.a)},
$S:0}
P.j4.prototype={
$1:function(a){var u=this.a
u.a=0
u.d5(a)},
$S:24}
P.j5.prototype={
$2:function(a,b){H.f(b,"$iaq")
this.a.d6(a,b)},
$1:function(a){return this.$2(a,null)},
$S:45}
P.j6.prototype={
$0:function(){this.a.d6(this.b,this.c)},
$S:0}
P.ja.prototype={
$0:function(){var u,t,s,r,q,p,o=this,n=null
try{s=o.c
n=s.b.b.eq(H.m(s.d,{func:1}),null)}catch(r){u=H.aE(r)
t=H.c7(r)
if(o.d){s=H.f(o.a.a.c,"$iaj").a
q=u
q=s==null?q==null:s===q
s=q}else s=!1
q=o.b
if(s)q.b=H.f(o.a.a.c,"$iaj")
else q.b=new P.aj(u,t)
q.a=!0
return}if(!!J.U(n).$ici){if(n instanceof P.aB&&n.a>=4){if(n.a===8){s=o.b
s.b=H.f(n.c,"$iaj")
s.a=!0}return}p=o.a.a
s=o.b
s.b=n.jp(new P.jb(p),null)
s.a=!1}},
$S:3}
P.jb.prototype={
$1:function(a){return this.a},
$S:51}
P.j9.prototype={
$0:function(){var u,t,s,r,q,p,o,n=this
try{s=n.b
r=H.w(s,0)
q=H.A(n.c,r)
p=H.w(s,1)
n.a.b=s.b.b.cM(H.m(s.d,{func:1,ret:{futureOr:1,type:p},args:[r]}),q,{futureOr:1,type:p},r)}catch(o){u=H.aE(o)
t=H.c7(o)
s=n.a
s.b=new P.aj(u,t)
s.a=!0}},
$S:3}
P.j8.prototype={
$0:function(){var u,t,s,r,q,p,o,n,m=this
try{u=H.f(m.a.a.c,"$iaj")
r=m.c
if(H.C(r.iY(u))&&r.e!=null){q=m.b
q.b=r.iR(u)
q.a=!1}}catch(p){t=H.aE(p)
s=H.c7(p)
r=H.f(m.a.a.c,"$iaj")
q=r.a
o=t
n=m.b
if(q==null?o==null:q===o)n.b=r
else n.b=new P.aj(t,s)
n.a=!0}},
$S:3}
P.e1.prototype={}
P.hO.prototype={
gk:function(a){var u,t,s=this,r={},q=new P.aB($.Z,[P.p])
r.a=0
u=H.w(s,0)
t=H.m(new P.hQ(r,s),{func:1,ret:-1,args:[u]})
H.m(new P.hR(r,q),{func:1,ret:-1})
W.a7(s.a,s.b,t,!1,u)
return q}}
P.hQ.prototype={
$1:function(a){H.A(a,H.w(this.b,0));++this.a.a},
$S:function(){return{func:1,ret:P.F,args:[H.w(this.b,0)]}}}
P.hR.prototype={
$0:function(){this.b.d5(this.a.a)},
$S:0}
P.cw.prototype={}
P.hP.prototype={}
P.b4.prototype={}
P.aj.prototype={
i:function(a){return H.n(this.a)},
$ibw:1}
P.jC.prototype={$ipf:1}
P.jK.prototype={
$0:function(){var u,t=this.a,s=t.a
t=s==null?t.a=new P.dA():s
s=this.b
if(s==null)throw H.c(t)
u=H.c(t)
u.stack=s.i(0)
throw u},
$S:0}
P.ji.prototype={
jm:function(a){var u,t,s,r=null
H.m(a,{func:1,ret:-1})
try{if(C.k===$.Z){a.$0()
return}P.m_(r,r,this,a,-1)}catch(s){u=H.aE(s)
t=H.c7(s)
P.jJ(r,r,this,u,H.f(t,"$iaq"))}},
jn:function(a,b,c){var u,t,s,r=null
H.m(a,{func:1,ret:-1,args:[c]})
H.A(b,c)
try{if(C.k===$.Z){a.$1(b)
return}P.m0(r,r,this,a,b,-1,c)}catch(s){u=H.aE(s)
t=H.c7(s)
P.jJ(r,r,this,u,H.f(t,"$iaq"))}},
iw:function(a,b){return new P.jk(this,H.m(a,{func:1,ret:b}),b)},
cf:function(a){return new P.jj(this,H.m(a,{func:1,ret:-1}))},
dC:function(a,b){return new P.jl(this,H.m(a,{func:1,ret:-1,args:[b]}),b)},
eq:function(a,b){H.m(a,{func:1,ret:b})
if($.Z===C.k)return a.$0()
return P.m_(null,null,this,a,b)},
cM:function(a,b,c,d){H.m(a,{func:1,ret:c,args:[d]})
H.A(b,d)
if($.Z===C.k)return a.$1(b)
return P.m0(null,null,this,a,b,c,d)},
jl:function(a,b,c,d,e,f){H.m(a,{func:1,ret:d,args:[e,f]})
H.A(b,e)
H.A(c,f)
if($.Z===C.k)return a.$2(b,c)
return P.o1(null,null,this,a,b,c,d,e,f)}}
P.jk.prototype={
$0:function(){return this.a.eq(this.b,this.c)},
$S:function(){return{func:1,ret:this.c}}}
P.jj.prototype={
$0:function(){return this.a.jm(this.b)},
$S:3}
P.jl.prototype={
$1:function(a){var u=this.c
return this.a.jn(this.b,H.A(a,u),u)},
$S:function(){return{func:1,ret:-1,args:[this.c]}}}
P.jf.prototype={
gX:function(a){return P.lR(this,this.r,H.w(this,0))},
gk:function(a){return this.a},
h:function(a,b){var u,t,s=this
H.A(b,H.w(s,0))
if(typeof b==="string"&&b!=="__proto__"){u=s.b
return s.d3(u==null?s.b=P.kO():u,b)}else if(typeof b==="number"&&(b&1073741823)===b){t=s.c
return s.d3(t==null?s.c=P.kO():t,b)}else return s.f0(0,b)},
f0:function(a,b){var u,t,s,r=this
H.A(b,H.w(r,0))
u=r.d
if(u==null)u=r.d=P.kO()
t=r.d7(b)
s=u[t]
if(s==null)u[t]=[r.bM(b)]
else{if(r.df(s,b)>=0)return!1
s.push(r.bM(b))}return!0},
M:function(a,b){if(typeof b==="number"&&(b&1073741823)===b)return this.hv(this.c,b)
else return this.hu(0,b)},
hu:function(a,b){var u,t,s=this,r=s.d
if(r==null)return!1
u=s.fm(r,b)
t=s.df(u,b)
if(t<0)return!1
s.dz(u.splice(t,1)[0])
return!0},
d3:function(a,b){H.A(b,H.w(this,0))
if(H.f(a[b],"$icM")!=null)return!1
a[b]=this.bM(b)
return!0},
hv:function(a,b){var u
if(a==null)return!1
u=H.f(a[b],"$icM")
if(u==null)return!1
this.dz(u)
delete a[b]
return!0},
dj:function(){this.r=1073741823&this.r+1},
bM:function(a){var u,t=this,s=new P.cM(H.A(a,H.w(t,0)))
if(t.e==null)t.e=t.f=s
else{u=t.f
s.c=u
t.f=u.b=s}++t.a
t.dj()
return s},
dz:function(a){var u=this,t=a.c,s=a.b
if(t==null)u.e=s
else t.b=s
if(s==null)u.f=t
else s.c=t;--u.a
u.dj()},
d7:function(a){return J.d2(a)&1073741823},
fm:function(a,b){return a[this.d7(b)]},
df:function(a,b){var u,t
if(a==null)return-1
u=a.length
for(t=0;t<u;++t)if(J.P(a[t].a,b))return t
return-1}}
P.cM.prototype={}
P.jg.prototype={
gL:function(a){return this.d},
D:function(){var u=this,t=u.a
if(u.b!==t.r)throw H.c(P.bu(t))
else{t=u.c
if(t==null){u.sd4(null)
return!1}else{u.sd4(H.A(t.a,H.w(u,0)))
u.c=u.c.b
return!0}}},
sd4:function(a){this.d=H.A(a,H.w(this,0))},
$iaZ:1}
P.fR.prototype={
$2:function(a,b){this.a.l(0,H.A(a,this.b),H.A(b,this.c))},
$S:7}
P.fS.prototype={$ij:1,$ib:1}
P.y.prototype={
gX:function(a){return new H.dq(a,this.gk(a),[H.bs(this,a,"y",0)])},
K:function(a,b){return this.j(a,b)},
I:function(a,b){var u,t,s=this
H.m(b,{func:1,ret:-1,args:[H.bs(s,a,"y",0)]})
u=s.gk(a)
for(t=0;t<u;++t){b.$1(s.j(a,t))
if(u!==s.gk(a))throw H.c(P.bu(a))}},
js:function(a,b){var u,t=this,s=H.e([],[H.bs(t,a,"y",0)])
C.a.sk(s,t.gk(a))
for(u=0;u<t.gk(a);++u)C.a.l(s,u,t.j(a,u))
return s},
jr:function(a){return this.js(a,!0)},
n:function(a,b){var u,t=this,s=[H.bs(t,a,"y",0)]
H.l(b,"$ib",s,"$ab")
u=H.e([],s)
C.a.sk(u,C.f.n(t.gk(a),b.gk(b)))
C.a.bc(u,0,t.gk(a),a)
C.a.bc(u,t.gk(a),u.length,b)
return u},
iM:function(a,b,c,d){var u
H.A(d,H.bs(this,a,"y",0))
P.bp(b,c,this.gk(a))
for(u=b;u<c;++u)this.l(a,u,d)},
i:function(a){return P.ky(a,"[","]")}}
P.fV.prototype={}
P.fW.prototype={
$2:function(a,b){var u,t=this.a
if(!t.a)this.b.a+=", "
t.a=!1
t=this.b
u=t.a+=H.n(a)
t.a=u+": "
t.a+=H.n(b)},
$S:7}
P.af.prototype={
I:function(a,b){var u,t,s=this
H.m(b,{func:1,ret:-1,args:[H.bs(s,a,"af",0),H.bs(s,a,"af",1)]})
for(u=J.bH(s.gao(a));u.D();){t=u.gL(u)
b.$2(t,s.j(a,t))}},
gk:function(a){return J.aF(this.gao(a))},
i:function(a){return P.kE(a)},
$iD:1}
P.ju.prototype={
l:function(a,b,c){H.A(b,H.w(this,0))
H.A(c,H.w(this,1))
throw H.c(P.E("Cannot modify unmodifiable map"))}}
P.fX.prototype={
j:function(a,b){return J.l9(this.a,b)},
l:function(a,b,c){J.kq(this.a,H.A(b,H.w(this,0)),H.A(c,H.w(this,1)))},
I:function(a,b){J.la(this.a,H.m(b,{func:1,ret:-1,args:[H.w(this,0),H.w(this,1)]}))},
gk:function(a){return J.aF(this.a)},
i:function(a){return J.at(this.a)},
$iD:1}
P.dW.prototype={}
P.jm.prototype={
i:function(a){return P.ky(this,"{","}")},
K:function(a,b){var u,t,s,r=this
P.kF(b,"index")
for(u=P.lR(r,r.r,H.w(r,0)),t=0;u.D();){s=u.d
if(b===t)return s;++t}throw H.c(P.Y(b,r,"index",null,t))},
$ij:1,
$ilz:1}
P.eg.prototype={}
P.eK.prototype={}
P.f8.prototype={
j_:function(a,b,a0,a1){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c="Invalid base64 encoding length "
a1=P.bp(a0,a1,b.length)
u=$.mB()
for(t=a0,s=t,r=null,q=-1,p=-1,o=0;t<a1;t=n){n=t+1
m=C.b.G(b,t)
if(m===37){l=n+2
if(l<=a1){k=H.jU(C.b.G(b,n))
j=H.jU(C.b.G(b,n+1))
i=k*16+j-(j&256)
if(i===37)i=-1
n=l}else i=-1}else i=m
if(0<=i&&i<=127){if(i<0||i>=u.length)return H.d(u,i)
h=u[i]
if(h>=0){i=C.b.W("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",h)
if(i===m)continue
m=i}else{if(h===-1){if(q<0){g=r==null?null:r.a.length
if(g==null)g=0
q=g+(t-s)
p=t}++o
if(m===61)continue}m=i}if(h!==-2){if(r==null)r=new P.ai("")
g=r.a+=C.b.B(b,s,t)
r.a=g+H.dD(m)
s=n
continue}}throw H.c(P.a3("Invalid base64 data",b,t))}if(r!=null){g=r.a+=C.b.B(b,s,a1)
f=g.length
if(q>=0)P.lb(b,p,a1,q,o,f)
else{e=C.f.aj(f-1,4)+1
if(e===1)throw H.c(P.a3(c,b,a1))
for(;e<4;){g+="="
r.a=g;++e}}g=r.a
return C.b.aO(b,a0,a1,g.charCodeAt(0)==0?g:g)}d=a1-a0
if(q>=0)P.lb(b,p,a1,q,o,d)
else{e=C.f.aj(d,4)
if(e===1)throw H.c(P.a3(c,b,a1))
if(e>1)b=C.b.aO(b,a1,a1,e===2?"==":"=")}return b},
$abL:function(){return[[P.b,P.p],P.h]}}
P.f9.prototype={
$abN:function(){return[[P.b,P.p],P.h]}}
P.bL.prototype={}
P.bN.prototype={}
P.fu.prototype={
$abL:function(){return[P.h,[P.b,P.p]]}}
P.iz.prototype={
giL:function(){return C.L}}
P.iB.prototype={
cm:function(a){var u,t,s=P.bp(0,null,a.length),r=s-0
if(r===0)return new Uint8Array(0)
u=new Uint8Array(r*3)
t=new P.jB(u)
if(t.fl(a,0,s)!==s)t.dA(J.mJ(a,s-1),0)
return new Uint8Array(u.subarray(0,H.nW(0,t.b,u.length)))},
$abN:function(){return[P.h,[P.b,P.p]]}}
P.jB.prototype={
dA:function(a,b){var u,t=this,s=t.c,r=t.b,q=r+1,p=s.length
if((b&64512)===56320){u=65536+((a&1023)<<10)|b&1023
t.b=q
if(r>=p)return H.d(s,r)
s[r]=240|u>>>18
r=t.b=q+1
if(q>=p)return H.d(s,q)
s[q]=128|u>>>12&63
q=t.b=r+1
if(r>=p)return H.d(s,r)
s[r]=128|u>>>6&63
t.b=q+1
if(q>=p)return H.d(s,q)
s[q]=128|u&63
return!0}else{t.b=q
if(r>=p)return H.d(s,r)
s[r]=224|a>>>12
r=t.b=q+1
if(q>=p)return H.d(s,q)
s[q]=128|a>>>6&63
t.b=r+1
if(r>=p)return H.d(s,r)
s[r]=128|a&63
return!1}},
fl:function(a,b,c){var u,t,s,r,q,p,o,n=this
if(b!==c&&(C.b.W(a,c-1)&64512)===55296)--c
for(u=n.c,t=u.length,s=b;s<c;++s){r=C.b.G(a,s)
if(r<=127){q=n.b
if(q>=t)break
n.b=q+1
u[q]=r}else if((r&64512)===55296){if(n.b+3>=t)break
p=s+1
if(n.dA(r,C.b.G(a,p)))s=p}else if(r<=2047){q=n.b
o=q+1
if(o>=t)break
n.b=o
if(q>=t)return H.d(u,q)
u[q]=192|r>>>6
n.b=o+1
u[o]=128|r&63}else{q=n.b
if(q+2>=t)break
o=n.b=q+1
if(q>=t)return H.d(u,q)
u[q]=224|r>>>12
q=n.b=o+1
if(o>=t)return H.d(u,o)
u[o]=128|r>>>6&63
n.b=q+1
if(q>=t)return H.d(u,q)
u[q]=128|r&63}}return s}}
P.iA.prototype={
cm:function(a){var u,t,s,r,q,p,o,n,m
H.l(a,"$ib",[P.p],"$ab")
u=P.nw(!1,a,0,null)
if(u!=null)return u
t=P.bp(0,null,J.aF(a))
s=P.m2(a,0,t)
if(s>0){r=P.cx(a,0,s)
if(s===t)return r
q=new P.ai(r)
p=s
o=!1}else{p=0
q=null
o=!0}if(q==null)q=new P.ai("")
n=new P.jA(!1,q)
n.c=o
n.iA(a,p,t)
if(n.e>0){H.t(P.a3("Unfinished UTF-8 octet sequence",a,t))
q.a+=H.dD(65533)
n.f=n.e=n.d=0}m=q.a
return m.charCodeAt(0)==0?m:m},
$abN:function(){return[[P.b,P.p],P.h]}}
P.jA.prototype={
iA:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k,j,i=this,h="Bad UTF-8 encoding 0x"
H.l(a,"$ib",[P.p],"$ab")
u=i.d
t=i.e
s=i.f
i.f=i.e=i.d=0
$label0$0:for(r=J.c6(a),q=i.b,p=b;!0;p=k){$label1$1:if(t>0){do{if(p===c)break $label0$0
o=r.j(a,p)
if(typeof o!=="number")return o.bG()
if((o&192)!==128){n=P.a3(h+C.f.b8(o,16),a,p)
throw H.c(n)}else{u=(u<<6|o&63)>>>0;--t;++p}}while(t>0)
n=s-1
if(n<0||n>=4)return H.d(C.x,n)
if(u<=C.x[n]){n=P.a3("Overlong encoding of 0x"+C.f.b8(u,16),a,p-s-1)
throw H.c(n)}if(u>1114111){n=P.a3("Character outside valid Unicode range: 0x"+C.f.b8(u,16),a,p-s-1)
throw H.c(n)}if(!i.c||u!==65279)q.a+=H.dD(u)
i.c=!1}for(n=p<c;n;){m=P.m2(a,p,c)
if(m>0){i.c=!1
l=p+m
q.a+=P.cx(a,p,l)
if(l===c)break}else l=p
k=l+1
o=r.j(a,l)
if(typeof o!=="number")return o.U()
if(o<0){j=P.a3("Negative UTF-8 code unit: -0x"+C.f.b8(-o,16),a,k-1)
throw H.c(j)}else{if((o&224)===192){u=o&31
t=1
s=1
continue $label0$0}if((o&240)===224){u=o&15
t=2
s=2
continue $label0$0}if((o&248)===240&&o<245){u=o&7
t=3
s=3
continue $label0$0}j=P.a3(h+C.f.b8(o,16),a,k-1)
throw H.c(j)}}break $label0$0}if(t>0){i.d=u
i.e=t
i.f=s}}}
P.ab.prototype={}
P.au.prototype={
t:function(a,b){if(b==null)return!1
return b instanceof P.au&&this.a===b.a&&!0},
gJ:function(a){var u=this.a
return(u^C.f.aI(u,30))&1073741823},
i:function(a){var u=this,t=P.mS(H.nh(u)),s=P.db(H.nf(u)),r=P.db(H.nb(u)),q=P.db(H.nc(u)),p=P.db(H.ne(u)),o=P.db(H.ng(u)),n=P.mT(H.nd(u)),m=t+"-"+s+"-"+r+" "+q+":"+p+":"+o+"."+n
return m}}
P.v.prototype={}
P.aY.prototype={
n:function(a,b){return new P.aY(C.f.n(this.a,b.gfe()))},
p:function(a,b){return new P.aY(C.f.p(this.a,b.gfe()))},
t:function(a,b){if(b==null)return!1
return b instanceof P.aY&&this.a===b.a},
gJ:function(a){return C.f.gJ(this.a)},
i:function(a){var u,t,s,r=new P.fs(),q=this.a
if(q<0)return"-"+new P.aY(0-q).i(0)
u=r.$1(C.f.a2(q,6e7)%60)
t=r.$1(C.f.a2(q,1e6)%60)
s=new P.fr().$1(q%1e6)
return""+C.f.a2(q,36e8)+":"+H.n(u)+":"+H.n(t)+"."+H.n(s)}}
P.fr.prototype={
$1:function(a){if(a>=1e5)return""+a
if(a>=1e4)return"0"+a
if(a>=1000)return"00"+a
if(a>=100)return"000"+a
if(a>=10)return"0000"+a
return"00000"+a},
$S:16}
P.fs.prototype={
$1:function(a){if(a>=10)return""+a
return"0"+a},
$S:16}
P.bw.prototype={}
P.f2.prototype={
i:function(a){return"Assertion failed"}}
P.dA.prototype={
i:function(a){return"Throw of null."}}
P.aU.prototype={
gbO:function(){return"Invalid argument"+(!this.a?"(s)":"")},
gbN:function(){return""},
i:function(a){var u,t,s,r,q=this,p=q.c,o=p!=null?" ("+p+")":""
p=q.d
u=p==null?"":": "+p
t=q.gbO()+o+u
if(!q.a)return t
s=q.gbN()
r=P.dg(q.b)
return t+s+": "+r}}
P.bW.prototype={
gbO:function(){return"RangeError"},
gbN:function(){var u,t,s=this.e
if(s==null){s=this.f
u=s!=null?": Not less than or equal to "+H.n(s):""}else{t=this.f
if(t==null)u=": Not greater than or equal to "+H.n(s)
else if(t>s)u=": Not in range "+H.n(s)+".."+H.n(t)+", inclusive"
else u=t<s?": Valid value range is empty":": Only valid value is "+H.n(s)}return u}}
P.fH.prototype={
gbO:function(){return"RangeError"},
gbN:function(){var u,t=H.ae(this.b)
if(typeof t!=="number")return t.U()
if(t<0)return": index must not be negative"
u=this.f
if(u===0)return": no indices are valid"
return": index should be less than "+H.n(u)},
gk:function(a){return this.f}}
P.ir.prototype={
i:function(a){return"Unsupported operation: "+this.a}}
P.io.prototype={
i:function(a){var u=this.a
return u!=null?"UnimplementedError: "+u:"UnimplementedError"}}
P.dK.prototype={
i:function(a){return"Bad state: "+this.a}}
P.ff.prototype={
i:function(a){var u=this.a
if(u==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+P.dg(u)+"."}}
P.hl.prototype={
i:function(a){return"Out of Memory"},
$ibw:1}
P.dJ.prototype={
i:function(a){return"Stack Overflow"},
$ibw:1}
P.fm.prototype={
i:function(a){var u=this.a
return u==null?"Reading static variable during its initialization":"Reading static variable '"+u+"' during its initialization"}}
P.e9.prototype={
i:function(a){return"Exception: "+this.a}}
P.fE.prototype={
i:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i=this.a,h=""!==i?"FormatException: "+i:"FormatException",g=this.c,f=this.b
if(typeof f==="string"){if(g!=null)i=g<0||g>f.length
else i=!1
if(i)g=null
if(g==null){u=f.length>78?C.b.B(f,0,75)+"...":f
return h+"\n"+u}for(t=1,s=0,r=!1,q=0;q<g;++q){p=C.b.G(f,q)
if(p===10){if(s!==q||!r)++t
s=q+1
r=!1}else if(p===13){++t
s=q+1
r=!0}}h=t>1?h+(" (at line "+t+", character "+(g-s+1)+")\n"):h+(" (at character "+(g+1)+")\n")
o=f.length
for(q=g;q<o;++q){p=C.b.W(f,q)
if(p===10||p===13){o=q
break}}if(o-s>78)if(g-s<75){n=s+75
m=s
l=""
k="..."}else{if(o-g<75){m=o-75
n=o
k=""}else{m=g-36
n=g+36
k="..."}l="..."}else{n=o
m=s
l=""
k=""}j=C.b.B(f,m,n)
return h+l+j+k+"\n"+C.b.m(" ",g-m+l.length)+"^\n"}else return g!=null?h+(" (at offset "+H.n(g)+")"):h}}
P.p.prototype={}
P.j.prototype={
gk:function(a){var u,t=this.gX(this)
for(u=0;t.D();)++u
return u},
K:function(a,b){var u,t,s
P.kF(b,"index")
for(u=this.gX(this),t=0;u.D();){s=u.gL(u)
if(b===t)return s;++t}throw H.c(P.Y(b,this,"index",null,t))},
i:function(a){return P.mY(this,"(",")")}}
P.aZ.prototype={}
P.b.prototype={$ij:1}
P.D.prototype={}
P.F.prototype={
gJ:function(a){return P.N.prototype.gJ.call(this,this)},
i:function(a){return"null"}}
P.a8.prototype={}
P.N.prototype={constructor:P.N,$iN:1,
t:function(a,b){return this===b},
gJ:function(a){return H.ct(this)},
i:function(a){return"Instance of '"+H.bV(this)+"'"},
toString:function(){return this.i(this)}}
P.aq.prototype={}
P.h.prototype={$ilq:1}
P.ai.prototype={
gk:function(a){return this.a.length},
i:function(a){var u=this.a
return u.charCodeAt(0)==0?u:u},
$ioQ:1}
P.ix.prototype={
$2:function(a,b){var u,t,s,r=P.h
H.l(a,"$iD",[r,r],"$aD")
H.K(b)
u=J.kZ(b).e7(b,"=")
if(u===-1){if(b!=="")J.kq(a,P.kQ(b,0,b.length,this.a,!0),"")}else if(u!==0){t=C.b.B(b,0,u)
s=C.b.az(b,u+1)
r=this.a
J.kq(a,P.kQ(t,0,t.length,r,!0),P.kQ(s,0,s.length,r,!0))}return a},
$S:44}
P.it.prototype={
$2:function(a,b){throw H.c(P.a3("Illegal IPv4 address, "+a,this.a,b))},
$S:41}
P.iv.prototype={
$2:function(a,b){throw H.c(P.a3("Illegal IPv6 address, "+a,this.a,b))},
$1:function(a){return this.$2(a,null)},
$S:38}
P.iw.prototype={
$2:function(a,b){var u
if(b-a>4)this.a.$2("an IPv6 part can only contain a maximum of 4 hex digits",a)
u=P.d_(C.b.B(this.b,a,b),null,16)
if(typeof u!=="number")return u.U()
if(u<0||u>65535)this.a.$2("each part must be in the range of `0x0..0xFFFF`",a)
return u},
$S:37}
P.c_.prototype={
gez:function(){return this.b},
gcw:function(a){var u=this.c
if(u==null)return""
if(C.b.a7(u,"["))return C.b.B(u,1,u.length-1)
return u},
gbA:function(a){var u=this.d
if(u==null)return P.lS(this.a)
return u},
gcI:function(a){var u=this.f
return u==null?"":u},
ge2:function(){var u=this.r
return u==null?"":u},
cL:function(a,b){var u,t,s,r,q,p,o,n,m=this
H.l(b,"$iD",[P.h,null],"$aD")
u=m.a
t=u==="file"
s=m.b
r=m.d
q=m.c
if(!(q!=null))q=s.length!==0||r!=null||t?"":null
p=m.e
if(!t)o=q!=null&&p.length!==0
else o=!0
if(o&&!C.b.a7(p,"/"))p="/"+p
n=P.kP(null,0,0,b)
return new P.c_(u,s,q,r,p,n,m.r)},
gb6:function(){var u,t,s=this
if(s.Q==null){u=s.f
t=P.h
s.sht(new P.dW(P.lH(u==null?"":u),[t,t]))}return s.Q},
ge3:function(){return this.c!=null},
ge6:function(){return this.f!=null},
ge4:function(){return this.r!=null},
i:function(a){var u,t,s,r=this,q=r.y
if(q==null){q=r.a
u=q.length!==0?H.n(q)+":":""
t=r.c
s=t==null
if(!s||q==="file"){q=u+"//"
u=r.b
if(u.length!==0)q=q+H.n(u)+"@"
if(!s)q+=t
u=r.d
if(u!=null)q=q+":"+H.n(u)}else q=u
q+=r.e
u=r.f
if(u!=null)q=q+"?"+u
u=r.r
if(u!=null)q=q+"#"+u
q=r.y=q.charCodeAt(0)==0?q:q}return q},
t:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!!J.U(b).$ikJ)if(s.a==b.gbI())if(s.c!=null===b.ge3())if(s.b==b.gez())if(s.gcw(s)==b.gcw(b))if(s.gbA(s)==b.gbA(b))if(s.e===b.gek(b)){u=s.f
t=u==null
if(!t===b.ge6()){if(t)u=""
if(u===b.gcI(b)){u=s.r
t=u==null
if(!t===b.ge4()){if(t)u=""
u=u===b.ge2()}else u=!1}else u=!1}else u=!1}else u=!1
else u=!1
else u=!1
else u=!1
else u=!1
else u=!1
else u=!1
return u},
gJ:function(a){var u=this.z
return u==null?this.z=C.b.gJ(this.i(0)):u},
sht:function(a){var u=P.h
this.Q=H.l(a,"$iD",[u,u],"$aD")},
$ikJ:1,
gbI:function(){return this.a},
gek:function(a){return this.e}}
P.jv.prototype={
$1:function(a){throw H.c(P.a3("Invalid port",this.a,this.b+1))},
$S:20}
P.jw.prototype={
$1:function(a){return P.jz(C.T,a,C.l,!1)},
$S:36}
P.jy.prototype={
$2:function(a,b){var u=this.b,t=this.a
u.a+=t.a
t.a="&"
t=u.a+=H.n(P.jz(C.r,a,C.l,!0))
if(b!=null&&b.length!==0){u.a=t+"="
u.a+=H.n(P.jz(C.r,b,C.l,!0))}},
$S:26}
P.jx.prototype={
$2:function(a,b){var u,t
H.K(a)
if(b==null||typeof b==="string")this.a.$2(a,H.K(b))
else for(u=J.bH(H.mf(b,"$ij")),t=this.a;u.D();)t.$2(a,H.K(u.gL(u)))},
$S:34}
P.is.prototype={
gey:function(){var u,t,s,r,q=this,p=null,o=q.c
if(o!=null)return o
o=q.b
if(0>=o.length)return H.d(o,0)
u=q.a
o=o[0]+1
t=C.b.e8(u,"?",o)
s=u.length
if(t>=0){r=P.cW(u,t+1,s,C.p,!1)
s=t}else r=p
return q.c=new P.j_("data",p,p,p,P.cW(u,o,s,C.z,!1),r,p)},
i:function(a){var u,t=this.b
if(0>=t.length)return H.d(t,0)
u=this.a
return t[0]===-1?"data:"+u:u}}
P.jG.prototype={
$1:function(a){return new Uint8Array(96)},
$S:33}
P.jF.prototype={
$2:function(a,b){var u=this.a
if(a>=u.length)return H.d(u,a)
u=u[a]
J.mK(u,0,96,b)
return u},
$S:32}
P.jH.prototype={
$3:function(a,b,c){var u,t,s,r
for(u=b.length,t=a.length,s=0;s<u;++s){r=C.b.G(b,s)^96
if(r>=t)return H.d(a,r)
a[r]=c}}}
P.jI.prototype={
$3:function(a,b,c){var u,t,s,r
for(u=C.b.G(b,0),t=C.b.G(b,1),s=a.length;u<=t;++u){r=(u^96)>>>0
if(r>=s)return H.d(a,r)
a[r]=c}}}
P.jn.prototype={
ge3:function(){return this.c>0},
ge5:function(){var u,t
if(this.c>0){u=this.d
if(typeof u!=="number")return u.n()
t=this.e
if(typeof t!=="number")return H.q(t)
t=u+1<t
u=t}else u=!1
return u},
ge6:function(){var u=this.f
if(typeof u!=="number")return u.U()
return u<this.r},
ge4:function(){return this.r<this.a.length},
gdh:function(){return this.b===4&&C.b.a7(this.a,"http")},
gdi:function(){return this.b===5&&C.b.a7(this.a,"https")},
gbI:function(){var u,t=this,s="file",r="package",q=t.b
if(q<=0)return""
u=t.x
if(u!=null)return u
if(t.gdh())q=t.x="http"
else if(t.gdi()){t.x="https"
q="https"}else if(q===4&&C.b.a7(t.a,s)){t.x=s
q=s}else if(q===7&&C.b.a7(t.a,r)){t.x=r
q=r}else{q=C.b.B(t.a,0,q)
t.x=q}return q},
gez:function(){var u=this.c,t=this.b+3
return u>t?C.b.B(this.a,t,u-1):""},
gcw:function(a){var u=this.c
return u>0?C.b.B(this.a,u,this.d):""},
gbA:function(a){var u,t=this
if(t.ge5()){u=t.d
if(typeof u!=="number")return u.n()
return P.d_(C.b.B(t.a,u+1,t.e),null,null)}if(t.gdh())return 80
if(t.gdi())return 443
return 0},
gek:function(a){return C.b.B(this.a,this.e,this.f)},
gcI:function(a){var u=this.f,t=this.r
if(typeof u!=="number")return u.U()
return u<t?C.b.B(this.a,u+1,t):""},
ge2:function(){var u=this.r,t=this.a
return u<t.length?C.b.az(t,u+1):""},
gb6:function(){var u=this,t=u.f
if(typeof t!=="number")return t.U()
if(t>=u.r)return C.U
t=P.h
return new P.dW(P.lH(u.gcI(u)),[t,t])},
cL:function(a,b){var u,t,s,r,q,p,o,n,m,l,k=this,j=null
H.l(b,"$iD",[P.h,null],"$aD")
u=k.gbI()
t=u==="file"
s=k.c
r=s>0?C.b.B(k.a,k.b+3,s):""
q=k.ge5()?k.gbA(k):j
s=k.c
if(s>0)p=C.b.B(k.a,s,k.d)
else p=r.length!==0||q!=null||t?"":j
s=k.a
o=C.b.B(s,k.e,k.f)
if(!t)n=p!=null&&o.length!==0
else n=!0
if(n&&!C.b.a7(o,"/"))o="/"+o
m=P.kP(j,0,0,b)
n=k.r
l=n<s.length?C.b.az(s,n+1):j
return new P.c_(u,r,p,q,o,m,l)},
gJ:function(a){var u=this.y
return u==null?this.y=C.b.gJ(this.a):u},
t:function(a,b){if(b==null)return!1
if(this===b)return!0
return!!J.U(b).$ikJ&&this.a===b.i(0)},
i:function(a){return this.a},
$ikJ:1}
P.j_.prototype={}
W.u.prototype={}
W.eZ.prototype={
gk:function(a){return a.length}}
W.f0.prototype={
i:function(a){return String(a)}}
W.f1.prototype={
i:function(a){return String(a)}}
W.bJ.prototype={$ibJ:1}
W.bK.prototype={
cQ:function(a,b,c){if(c!=null)return a.getContext(b,P.o9(c))
return a.getContext(b)},
eA:function(a,b){return this.cQ(a,b,null)},
$ibK:1}
W.cd.prototype={$icd:1}
W.bt.prototype={
gk:function(a){return a.length}}
W.cf.prototype={$icf:1}
W.fi.prototype={
gk:function(a){return a.length}}
W.V.prototype={$iV:1}
W.cg.prototype={
gk:function(a){return a.length}}
W.fj.prototype={}
W.aW.prototype={}
W.aX.prototype={}
W.fk.prototype={
gk:function(a){return a.length}}
W.fl.prototype={
gk:function(a){return a.length}}
W.fn.prototype={
gk:function(a){return a.length}}
W.dc.prototype={$idc:1}
W.fo.prototype={
i:function(a){return String(a)}}
W.dd.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.Y(b,a,null,null,null))
return a[b]},
l:function(a,b,c){H.l(c,"$iag",[P.a8],"$aag")
throw H.c(P.E("Cannot assign element of immutable List."))},
K:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$iI:1,
$aI:function(){return[[P.ag,P.a8]]},
$ay:function(){return[[P.ag,P.a8]]},
$ij:1,
$aj:function(){return[[P.ag,P.a8]]},
$ib:1,
$ab:function(){return[[P.ag,P.a8]]},
$aB:function(){return[[P.ag,P.a8]]}}
W.de.prototype={
i:function(a){return"Rectangle ("+H.n(a.left)+", "+H.n(a.top)+") "+H.n(this.gay(a))+" x "+H.n(this.gaw(a))},
t:function(a,b){var u
if(b==null)return!1
u=J.U(b)
if(!u.$iag)return!1
return a.left===u.gby(b)&&a.top===u.gbD(b)&&this.gay(a)===u.gay(b)&&this.gaw(a)===u.gaw(b)},
gJ:function(a){return W.lQ(C.e.gJ(a.left),C.e.gJ(a.top),C.e.gJ(this.gay(a)),C.e.gJ(this.gaw(a)))},
gdD:function(a){return a.bottom},
gaw:function(a){return a.height},
gby:function(a){return a.left},
gbC:function(a){return a.right},
gbD:function(a){return a.top},
gay:function(a){return a.width},
$iag:1,
$aag:function(){return[P.a8]}}
W.fp.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.Y(b,a,null,null,null))
return a[b]},
l:function(a,b,c){H.K(c)
throw H.c(P.E("Cannot assign element of immutable List."))},
K:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$iI:1,
$aI:function(){return[P.h]},
$ay:function(){return[P.h]},
$ij:1,
$aj:function(){return[P.h]},
$ib:1,
$ab:function(){return[P.h]},
$aB:function(){return[P.h]}}
W.fq.prototype={
gk:function(a){return a.length}}
W.iY.prototype={
gk:function(a){return this.b.length},
j:function(a,b){var u=this.b
if(b<0||b>=u.length)return H.d(u,b)
return H.f(u[b],"$iX")},
l:function(a,b,c){var u
H.f(c,"$iX")
u=this.b
if(b<0||b>=u.length)return H.d(u,b)
this.a.replaceChild(c,u[b])},
h:function(a,b){this.a.appendChild(b)
return b},
gX:function(a){var u=this.jr(this)
return new J.ap(u,u.length,[H.w(u,0)])},
$ay:function(){return[W.X]},
$aj:function(){return[W.X]},
$ab:function(){return[W.X]}}
W.X.prototype={
gcl:function(a){return new W.iY(a,a.children)},
gdE:function(a){var u=a.clientLeft,t=a.clientTop,s=a.clientWidth,r=a.clientHeight
if(typeof s!=="number")return s.U()
if(s<0)s=-s*0
if(typeof r!=="number")return r.U()
if(r<0)r=-r*0
return new P.ag(u,t,s,r,[P.a8])},
i:function(a){return a.localName},
$iX:1}
W.o.prototype={$io:1}
W.i.prototype={
ir:function(a,b,c,d){H.m(c,{func:1,args:[W.o]})
if(c!=null)this.f1(a,b,c,!1)},
f1:function(a,b,c,d){return a.addEventListener(b,H.c3(H.m(c,{func:1,args:[W.o]}),1),!1)},
$ii:1}
W.ax.prototype={$iax:1}
W.ch.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.Y(b,a,null,null,null))
return a[b]},
l:function(a,b,c){H.f(c,"$iax")
throw H.c(P.E("Cannot assign element of immutable List."))},
K:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$iI:1,
$aI:function(){return[W.ax]},
$ay:function(){return[W.ax]},
$ij:1,
$aj:function(){return[W.ax]},
$ib:1,
$ab:function(){return[W.ax]},
$ich:1,
$aB:function(){return[W.ax]}}
W.fz.prototype={
gk:function(a){return a.length}}
W.fD.prototype={
gk:function(a){return a.length}}
W.aG.prototype={$iaG:1}
W.fG.prototype={
gk:function(a){return a.length}}
W.bQ.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.Y(b,a,null,null,null))
return a[b]},
l:function(a,b,c){H.f(c,"$iH")
throw H.c(P.E("Cannot assign element of immutable List."))},
K:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$iI:1,
$aI:function(){return[W.H]},
$ay:function(){return[W.H]},
$ij:1,
$aj:function(){return[W.H]},
$ib:1,
$ab:function(){return[W.H]},
$ibQ:1,
$aB:function(){return[W.H]}}
W.bg.prototype={$ibg:1,
gdF:function(a){return a.data}}
W.bR.prototype={$ibR:1}
W.ck.prototype={$ick:1}
W.b_.prototype={$ib_:1}
W.fT.prototype={
i:function(a){return String(a)}}
W.h5.prototype={
gk:function(a){return a.length}}
W.cm.prototype={$icm:1}
W.h6.prototype={
j:function(a,b){return P.br(a.get(H.K(b)))},
I:function(a,b){var u,t
H.m(b,{func:1,ret:-1,args:[P.h,,]})
u=a.entries()
for(;!0;){t=u.next()
if(t.done)return
b.$2(t.value[0],P.br(t.value[1]))}},
gao:function(a){var u=H.e([],[P.h])
this.I(a,new W.h7(u))
return u},
gk:function(a){return a.size},
l:function(a,b,c){throw H.c(P.E("Not supported"))},
$aaf:function(){return[P.h,null]},
$iD:1,
$aD:function(){return[P.h,null]}}
W.h7.prototype={
$2:function(a,b){return C.a.h(this.a,a)},
$S:8}
W.h8.prototype={
j:function(a,b){return P.br(a.get(H.K(b)))},
I:function(a,b){var u,t
H.m(b,{func:1,ret:-1,args:[P.h,,]})
u=a.entries()
for(;!0;){t=u.next()
if(t.done)return
b.$2(t.value[0],P.br(t.value[1]))}},
gao:function(a){var u=H.e([],[P.h])
this.I(a,new W.h9(u))
return u},
gk:function(a){return a.size},
l:function(a,b,c){throw H.c(P.E("Not supported"))},
$aaf:function(){return[P.h,null]},
$iD:1,
$aD:function(){return[P.h,null]}}
W.h9.prototype={
$2:function(a,b){return C.a.h(this.a,a)},
$S:8}
W.aJ.prototype={$iaJ:1}
W.ha.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.Y(b,a,null,null,null))
return a[b]},
l:function(a,b,c){H.f(c,"$iaJ")
throw H.c(P.E("Cannot assign element of immutable List."))},
K:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$iI:1,
$aI:function(){return[W.aJ]},
$ay:function(){return[W.aJ]},
$ij:1,
$aj:function(){return[W.aJ]},
$ib:1,
$ab:function(){return[W.aJ]},
$aB:function(){return[W.aJ]}}
W.a4.prototype={$ia4:1}
W.iX.prototype={
l:function(a,b,c){var u,t
H.f(c,"$iH")
u=this.a
t=u.childNodes
if(b<0||b>=t.length)return H.d(t,b)
u.replaceChild(c,t[b])},
gX:function(a){var u=this.a.childNodes
return new W.di(u,u.length,[H.bs(C.V,u,"B",0)])},
gk:function(a){return this.a.childNodes.length},
j:function(a,b){var u=this.a.childNodes
if(b<0||b>=u.length)return H.d(u,b)
return u[b]},
$ay:function(){return[W.H]},
$aj:function(){return[W.H]},
$ab:function(){return[W.H]}}
W.H.prototype={
jj:function(a,b){var u,t
try{u=a.parentNode
J.mH(u,b,a)}catch(t){H.aE(t)}return a},
i:function(a){var u=a.nodeValue
return u==null?this.eD(a):u},
hy:function(a,b,c){return a.replaceChild(b,c)},
$iH:1}
W.cr.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.Y(b,a,null,null,null))
return a[b]},
l:function(a,b,c){H.f(c,"$iH")
throw H.c(P.E("Cannot assign element of immutable List."))},
K:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$iI:1,
$aI:function(){return[W.H]},
$ay:function(){return[W.H]},
$ij:1,
$aj:function(){return[W.H]},
$ib:1,
$ab:function(){return[W.H]},
$aB:function(){return[W.H]}}
W.aK.prototype={$iaK:1,
gk:function(a){return a.length}}
W.hn.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.Y(b,a,null,null,null))
return a[b]},
l:function(a,b,c){H.f(c,"$iaK")
throw H.c(P.E("Cannot assign element of immutable List."))},
K:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$iI:1,
$aI:function(){return[W.aK]},
$ay:function(){return[W.aK]},
$ij:1,
$aj:function(){return[W.aK]},
$ib:1,
$ab:function(){return[W.aK]},
$aB:function(){return[W.aK]}}
W.hw.prototype={
j:function(a,b){return P.br(a.get(H.K(b)))},
I:function(a,b){var u,t
H.m(b,{func:1,ret:-1,args:[P.h,,]})
u=a.entries()
for(;!0;){t=u.next()
if(t.done)return
b.$2(t.value[0],P.br(t.value[1]))}},
gao:function(a){var u=H.e([],[P.h])
this.I(a,new W.hx(u))
return u},
gk:function(a){return a.size},
l:function(a,b,c){throw H.c(P.E("Not supported"))},
$aaf:function(){return[P.h,null]},
$iD:1,
$aD:function(){return[P.h,null]}}
W.hx.prototype={
$2:function(a,b){return C.a.h(this.a,a)},
$S:8}
W.hz.prototype={
gk:function(a){return a.length}}
W.aL.prototype={$iaL:1}
W.hI.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.Y(b,a,null,null,null))
return a[b]},
l:function(a,b,c){H.f(c,"$iaL")
throw H.c(P.E("Cannot assign element of immutable List."))},
K:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$iI:1,
$aI:function(){return[W.aL]},
$ay:function(){return[W.aL]},
$ij:1,
$aj:function(){return[W.aL]},
$ib:1,
$ab:function(){return[W.aL]},
$aB:function(){return[W.aL]}}
W.aM.prototype={$iaM:1}
W.hJ.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.Y(b,a,null,null,null))
return a[b]},
l:function(a,b,c){H.f(c,"$iaM")
throw H.c(P.E("Cannot assign element of immutable List."))},
K:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$iI:1,
$aI:function(){return[W.aM]},
$ay:function(){return[W.aM]},
$ij:1,
$aj:function(){return[W.aM]},
$ib:1,
$ab:function(){return[W.aM]},
$aB:function(){return[W.aM]}}
W.aN.prototype={$iaN:1,
gk:function(a){return a.length}}
W.hM.prototype={
j:function(a,b){return a.getItem(H.K(b))},
l:function(a,b,c){a.setItem(b,c)},
I:function(a,b){var u,t
H.m(b,{func:1,ret:-1,args:[P.h,P.h]})
for(u=0;!0;++u){t=a.key(u)
if(t==null)return
b.$2(t,a.getItem(t))}},
gao:function(a){var u=H.e([],[P.h])
this.I(a,new W.hN(u))
return u},
gk:function(a){return a.length},
$aaf:function(){return[P.h,P.h]},
$iD:1,
$aD:function(){return[P.h,P.h]}}
W.hN.prototype={
$2:function(a,b){return C.a.h(this.a,a)},
$S:26}
W.ay.prototype={$iay:1}
W.bq.prototype={$ibq:1}
W.aO.prototype={$iaO:1}
W.az.prototype={$iaz:1}
W.hU.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.Y(b,a,null,null,null))
return a[b]},
l:function(a,b,c){H.f(c,"$iaz")
throw H.c(P.E("Cannot assign element of immutable List."))},
K:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$iI:1,
$aI:function(){return[W.az]},
$ay:function(){return[W.az]},
$ij:1,
$aj:function(){return[W.az]},
$ib:1,
$ab:function(){return[W.az]},
$aB:function(){return[W.az]}}
W.hV.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.Y(b,a,null,null,null))
return a[b]},
l:function(a,b,c){H.f(c,"$iaO")
throw H.c(P.E("Cannot assign element of immutable List."))},
K:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$iI:1,
$aI:function(){return[W.aO]},
$ay:function(){return[W.aO]},
$ij:1,
$aj:function(){return[W.aO]},
$ib:1,
$ab:function(){return[W.aO]},
$aB:function(){return[W.aO]}}
W.i4.prototype={
gk:function(a){return a.length}}
W.aP.prototype={$iaP:1}
W.aQ.prototype={$iaQ:1}
W.i7.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.Y(b,a,null,null,null))
return a[b]},
l:function(a,b,c){H.f(c,"$iaP")
throw H.c(P.E("Cannot assign element of immutable List."))},
K:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$iI:1,
$aI:function(){return[W.aP]},
$ay:function(){return[W.aP]},
$ij:1,
$aj:function(){return[W.aP]},
$ib:1,
$ab:function(){return[W.aP]},
$aB:function(){return[W.aP]}}
W.i8.prototype={
gk:function(a){return a.length}}
W.bC.prototype={}
W.iy.prototype={
i:function(a){return String(a)}}
W.iO.prototype={
gk:function(a){return a.length}}
W.b7.prototype={
giF:function(a){if(a.deltaY!==undefined)return a.deltaY
throw H.c(P.E("deltaY is not supported"))},
giE:function(a){if(a.deltaX!==undefined)return a.deltaX
throw H.c(P.E("deltaX is not supported"))},
$ib7:1}
W.cK.prototype={
hz:function(a,b){return a.requestAnimationFrame(H.c3(H.m(b,{func:1,ret:-1,args:[P.a8]}),1))},
ff:function(a){if(!!(a.requestAnimationFrame&&a.cancelAnimationFrame))return;(function(b){var u=['ms','moz','webkit','o']
for(var t=0;t<u.length&&!b.requestAnimationFrame;++t){b.requestAnimationFrame=b[u[t]+'RequestAnimationFrame']
b.cancelAnimationFrame=b[u[t]+'CancelAnimationFrame']||b[u[t]+'CancelRequestAnimationFrame']}if(b.requestAnimationFrame&&b.cancelAnimationFrame)return
b.requestAnimationFrame=function(c){return window.setTimeout(function(){c(Date.now())},16)}
b.cancelAnimationFrame=function(c){clearTimeout(c)}})(a)}}
W.iZ.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.Y(b,a,null,null,null))
return a[b]},
l:function(a,b,c){H.f(c,"$iV")
throw H.c(P.E("Cannot assign element of immutable List."))},
K:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$iI:1,
$aI:function(){return[W.V]},
$ay:function(){return[W.V]},
$ij:1,
$aj:function(){return[W.V]},
$ib:1,
$ab:function(){return[W.V]},
$aB:function(){return[W.V]}}
W.e4.prototype={
i:function(a){return"Rectangle ("+H.n(a.left)+", "+H.n(a.top)+") "+H.n(a.width)+" x "+H.n(a.height)},
t:function(a,b){var u
if(b==null)return!1
u=J.U(b)
if(!u.$iag)return!1
return a.left===u.gby(b)&&a.top===u.gbD(b)&&a.width===u.gay(b)&&a.height===u.gaw(b)},
gJ:function(a){return W.lQ(C.e.gJ(a.left),C.e.gJ(a.top),C.e.gJ(a.width),C.e.gJ(a.height))},
gaw:function(a){return a.height},
gay:function(a){return a.width}}
W.jc.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.Y(b,a,null,null,null))
return a[b]},
l:function(a,b,c){H.f(c,"$iaG")
throw H.c(P.E("Cannot assign element of immutable List."))},
K:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$iI:1,
$aI:function(){return[W.aG]},
$ay:function(){return[W.aG]},
$ij:1,
$aj:function(){return[W.aG]},
$ib:1,
$ab:function(){return[W.aG]},
$aB:function(){return[W.aG]}}
W.el.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.Y(b,a,null,null,null))
return a[b]},
l:function(a,b,c){H.f(c,"$iH")
throw H.c(P.E("Cannot assign element of immutable List."))},
K:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$iI:1,
$aI:function(){return[W.H]},
$ay:function(){return[W.H]},
$ij:1,
$aj:function(){return[W.H]},
$ib:1,
$ab:function(){return[W.H]},
$aB:function(){return[W.H]}}
W.jo.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.Y(b,a,null,null,null))
return a[b]},
l:function(a,b,c){H.f(c,"$iaN")
throw H.c(P.E("Cannot assign element of immutable List."))},
K:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$iI:1,
$aI:function(){return[W.aN]},
$ay:function(){return[W.aN]},
$ij:1,
$aj:function(){return[W.aN]},
$ib:1,
$ab:function(){return[W.aN]},
$aB:function(){return[W.aN]}}
W.jr.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.Y(b,a,null,null,null))
return a[b]},
l:function(a,b,c){H.f(c,"$iay")
throw H.c(P.E("Cannot assign element of immutable List."))},
K:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$iI:1,
$aI:function(){return[W.ay]},
$ay:function(){return[W.ay]},
$ij:1,
$aj:function(){return[W.ay]},
$ib:1,
$ab:function(){return[W.ay]},
$aB:function(){return[W.ay]}}
W.j0.prototype={}
W.kN.prototype={}
W.j1.prototype={}
W.j2.prototype={
$1:function(a){return this.a.$1(H.f(a,"$io"))},
$S:30}
W.B.prototype={
gX:function(a){return new W.di(a,this.gk(a),[H.bs(this,a,"B",0)])}}
W.di.prototype={
D:function(){var u=this,t=u.c+1,s=u.b
if(t<s){u.sdg(J.l9(u.a,t))
u.c=t
return!0}u.sdg(null)
u.c=s
return!1},
gL:function(a){return this.d},
sdg:function(a){this.d=H.A(a,H.w(this,0))},
$iaZ:1}
W.e3.prototype={}
W.e5.prototype={}
W.e6.prototype={}
W.e7.prototype={}
W.e8.prototype={}
W.ea.prototype={}
W.eb.prototype={}
W.ec.prototype={}
W.ed.prototype={}
W.eh.prototype={}
W.ei.prototype={}
W.ej.prototype={}
W.ek.prototype={}
W.em.prototype={}
W.en.prototype={}
W.eq.prototype={}
W.er.prototype={}
W.es.prototype={}
W.cR.prototype={}
W.cS.prototype={}
W.et.prototype={}
W.eu.prototype={}
W.ey.prototype={}
W.eC.prototype={}
W.eD.prototype={}
W.cT.prototype={}
W.cU.prototype={}
W.eF.prototype={}
W.eG.prototype={}
W.eL.prototype={}
W.eM.prototype={}
W.eN.prototype={}
W.eO.prototype={}
W.eP.prototype={}
W.eQ.prototype={}
W.eR.prototype={}
W.eS.prototype={}
W.eT.prototype={}
W.eU.prototype={}
P.jp.prototype={
e1:function(a){var u,t=this.a,s=t.length
for(u=0;u<s;++u)if(t[u]===a)return u
C.a.h(t,a)
C.a.h(this.b,null)
return s},
bF:function(a){var u,t,s,r,q=this,p={}
if(a==null)return a
if(typeof a==="boolean")return a
if(typeof a==="number")return a
if(typeof a==="string")return a
u=J.U(a)
if(!!u.$iau)return new Date(a.a)
if(!!u.$inl)throw H.c(P.ip("structured clone of RegExp"))
if(!!u.$iax)return a
if(!!u.$ibJ)return a
if(!!u.$ich)return a
if(!!u.$ibg)return a
if(!!u.$ico||!!u.$ibz||!!u.$icm)return a
if(!!u.$iD){t=q.e1(a)
s=q.b
if(t>=s.length)return H.d(s,t)
r=p.a=s[t]
if(r!=null)return r
r={}
p.a=r
C.a.l(s,t,r)
u.I(a,new P.jq(p,q))
return p.a}if(!!u.$ib){t=q.e1(a)
p=q.b
if(t>=p.length)return H.d(p,t)
r=p[t]
if(r!=null)return r
return q.iC(a,t)}throw H.c(P.ip("structured clone of other type"))},
iC:function(a,b){var u,t=J.c6(a),s=t.gk(a),r=new Array(s)
C.a.l(this.b,b,r)
for(u=0;u<s;++u)C.a.l(r,u,this.bF(t.j(a,u)))
return r}}
P.jq.prototype={
$2:function(a,b){this.a.a[a]=this.b.bF(b)},
$S:7}
P.eJ.prototype={$ibg:1,
gdF:function(a){return this.a}}
P.jM.prototype={
$2:function(a,b){this.a[a]=b},
$S:7}
P.eB.prototype={}
P.fA.prototype={
gaS:function(){var u=this.b,t=H.aD(u,"y",0),s=W.X
return new H.fY(new H.iQ(u,H.m(new P.fB(),{func:1,ret:P.ab,args:[t]}),[t]),H.m(new P.fC(),{func:1,ret:s,args:[t]}),[t,s])},
I:function(a,b){H.m(b,{func:1,ret:-1,args:[W.X]})
C.a.I(P.kD(this.gaS(),!1,W.X),b)},
l:function(a,b,c){var u
H.f(c,"$iX")
u=this.gaS()
J.mL(u.b.$1(J.kr(u.a,b)),c)},
h:function(a,b){this.b.a.appendChild(b)},
gk:function(a){return J.aF(this.gaS().a)},
j:function(a,b){var u=this.gaS()
return u.b.$1(J.kr(u.a,b))},
gX:function(a){var u=P.kD(this.gaS(),!1,W.X)
return new J.ap(u,u.length,[H.w(u,0)])},
$ay:function(){return[W.X]},
$aj:function(){return[W.X]},
$ab:function(){return[W.X]}}
P.fB.prototype={
$1:function(a){return!!J.U(H.f(a,"$iH")).$iX},
$S:29}
P.fC.prototype={
$1:function(a){return H.k(H.f(a,"$iH"),"$iX")},
$S:27}
P.jh.prototype={
gbC:function(a){var u=this.a,t=this.c
if(typeof u!=="number")return u.n()
if(typeof t!=="number")return H.q(t)
return H.A(u+t,H.w(this,0))},
gdD:function(a){var u=this.b,t=this.d
if(typeof u!=="number")return u.n()
if(typeof t!=="number")return H.q(t)
return H.A(u+t,H.w(this,0))},
i:function(a){var u=this
return"Rectangle ("+H.n(u.a)+", "+H.n(u.b)+") "+H.n(u.c)+" x "+H.n(u.d)},
t:function(a,b){var u,t,s,r,q,p=this
if(b==null)return!1
u=J.U(b)
if(!!u.$iag){t=p.a
if(t==u.gby(b)){s=p.b
if(s==u.gbD(b)){r=p.c
if(typeof t!=="number")return t.n()
if(typeof r!=="number")return H.q(r)
q=H.w(p,0)
if(H.A(t+r,q)===u.gbC(b)){t=p.d
if(typeof s!=="number")return s.n()
if(typeof t!=="number")return H.q(t)
u=H.A(s+t,q)===u.gdD(b)}else u=!1}else u=!1}else u=!1}else u=!1
return u},
gJ:function(a){var u,t=this,s=t.a,r=J.d2(s),q=t.b,p=J.d2(q),o=t.c
if(typeof s!=="number")return s.n()
if(typeof o!=="number")return H.q(o)
u=H.w(t,0)
o=C.f.gJ(H.A(s+o,u))
s=t.d
if(typeof q!=="number")return q.n()
if(typeof s!=="number")return H.q(s)
u=C.f.gJ(H.A(q+s,u))
return P.nG(P.je(P.je(P.je(P.je(0,r),p),o),u))}}
P.ag.prototype={
gby:function(a){return this.a},
gbD:function(a){return this.b},
gay:function(a){return this.c},
gaw:function(a){return this.d}}
P.b0.prototype={$ib0:1}
P.fM.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.Y(b,a,null,null,null))
return a.getItem(b)},
l:function(a,b,c){H.f(c,"$ib0")
throw H.c(P.E("Cannot assign element of immutable List."))},
K:function(a,b){return this.j(a,b)},
$ay:function(){return[P.b0]},
$ij:1,
$aj:function(){return[P.b0]},
$ib:1,
$ab:function(){return[P.b0]},
$aB:function(){return[P.b0]}}
P.b3.prototype={$ib3:1}
P.hj.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.Y(b,a,null,null,null))
return a.getItem(b)},
l:function(a,b,c){H.f(c,"$ib3")
throw H.c(P.E("Cannot assign element of immutable List."))},
K:function(a,b){return this.j(a,b)},
$ay:function(){return[P.b3]},
$ij:1,
$aj:function(){return[P.b3]},
$ib:1,
$ab:function(){return[P.b3]},
$aB:function(){return[P.b3]}}
P.hp.prototype={
gk:function(a){return a.length}}
P.hS.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.Y(b,a,null,null,null))
return a.getItem(b)},
l:function(a,b,c){H.K(c)
throw H.c(P.E("Cannot assign element of immutable List."))},
K:function(a,b){return this.j(a,b)},
$ay:function(){return[P.h]},
$ij:1,
$aj:function(){return[P.h]},
$ib:1,
$ab:function(){return[P.h]},
$aB:function(){return[P.h]}}
P.r.prototype={
gcl:function(a){return new P.fA(a,new W.iX(a))}}
P.b5.prototype={$ib5:1}
P.i9.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.Y(b,a,null,null,null))
return a.getItem(b)},
l:function(a,b,c){H.f(c,"$ib5")
throw H.c(P.E("Cannot assign element of immutable List."))},
K:function(a,b){return this.j(a,b)},
$ay:function(){return[P.b5]},
$ij:1,
$aj:function(){return[P.b5]},
$ib:1,
$ab:function(){return[P.b5]},
$aB:function(){return[P.b5]}}
P.ee.prototype={}
P.ef.prototype={}
P.eo.prototype={}
P.ep.prototype={}
P.ez.prototype={}
P.eA.prototype={}
P.eH.prototype={}
P.eI.prototype={}
P.O.prototype={$ij:1,
$aj:function(){return[P.p]},
$ib:1,
$ab:function(){return[P.p]},
$int:1}
P.f4.prototype={
gk:function(a){return a.length}}
P.f5.prototype={
j:function(a,b){return P.br(a.get(H.K(b)))},
I:function(a,b){var u,t
H.m(b,{func:1,ret:-1,args:[P.h,,]})
u=a.entries()
for(;!0;){t=u.next()
if(t.done)return
b.$2(t.value[0],P.br(t.value[1]))}},
gao:function(a){var u=H.e([],[P.h])
this.I(a,new P.f6(u))
return u},
gk:function(a){return a.size},
l:function(a,b,c){throw H.c(P.E("Not supported"))},
$aaf:function(){return[P.h,null]},
$iD:1,
$aD:function(){return[P.h,null]}}
P.f6.prototype={
$2:function(a,b){return C.a.h(this.a,a)},
$S:8}
P.f7.prototype={
gk:function(a){return a.length}}
P.bI.prototype={}
P.hk.prototype={
gk:function(a){return a.length}}
P.e2.prototype={}
P.d5.prototype={$id5:1}
P.dE.prototype={$idE:1}
P.bX.prototype={
jo:function(a,b,c,d,e,f,g){var u,t=J.U(g)
if(!!t.$ibg)u=!0
else u=!1
if(u){a.texImage2D(b,c,d,e,f,P.oa(g))
return}if(!!t.$ibR)t=!0
else t=!1
if(t){this.hO(a,b,c,d,e,f,g)
return}throw H.c(P.d3("Incorrect number or type of arguments"))},
hO:function(a,b,c,d,e,f,g){return a.texImage2D(b,c,d,e,f,g)},
O:function(a,b,c){return a.uniform1f(b,c)},
a1:function(a,b,c){return a.uniform1i(b,c)},
u:function(a,b,c,d,e){return a.uniform3f(b,c,d,e)},
ew:function(a,b,c,d){return a.uniformMatrix3fv(b,!1,d)},
ex:function(a,b,c,d){return a.uniformMatrix4fv(b,!1,d)},
$ibX:1}
P.dH.prototype={$idH:1}
P.dM.prototype={$idM:1}
P.dU.prototype={$idU:1}
P.hK.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.Y(b,a,null,null,null))
return P.br(a.item(b))},
l:function(a,b,c){H.f(c,"$iD")
throw H.c(P.E("Cannot assign element of immutable List."))},
K:function(a,b){return this.j(a,b)},
$ay:function(){return[[P.D,,,]]},
$ij:1,
$aj:function(){return[[P.D,,,]]},
$ib:1,
$ab:function(){return[[P.D,,,]]},
$aB:function(){return[[P.D,,,]]}}
P.ev.prototype={}
P.ew.prototype={}
O.a1.prototype={
bK:function(a){var u=this
u.sfs(H.e([],[a]))
u.sdn(null)
u.sdk(null)
u.sdq(null)},
cS:function(a,b,c){var u=this,t=H.aD(u,"a1",0)
H.m(b,{func:1,ret:P.ab,args:[[P.j,t]]})
t={func:1,ret:-1,args:[P.p,[P.j,t]]}
H.m(a,t)
H.m(c,t)
u.sdn(b)
u.sdk(a)
u.sdq(c)},
bb:function(a,b){return this.cS(a,null,b)},
he:function(a){var u
H.l(a,"$ij",[H.aD(this,"a1",0)],"$aj")
u=this.b
if(u!=null)return u.$1(a)
return!0},
eN:function(a,b){var u
H.l(b,"$ij",[H.aD(this,"a1",0)],"$aj")
u=this.c
if(u!=null)u.$2(a,b)},
gk:function(a){return this.a.length},
gX:function(a){var u=this.a
return new J.ap(u,u.length,[H.w(u,0)])},
K:function(a,b){var u=this.a
if(b<0||b>=u.length)return H.d(u,b)
return u[b]},
h:function(a,b){var u,t,s=this,r=H.aD(s,"a1",0)
H.A(b,r)
r=[r]
if(H.C(s.he(H.e([b],r)))){u=s.a
t=u.length
C.a.h(u,b)
s.eN(t,H.e([b],r))}},
sfs:function(a){this.a=H.l(a,"$ib",[H.aD(this,"a1",0)],"$ab")},
sdn:function(a){this.b=H.m(a,{func:1,ret:P.ab,args:[[P.j,H.aD(this,"a1",0)]]})},
sdk:function(a){this.c=H.m(a,{func:1,ret:-1,args:[P.p,[P.j,H.aD(this,"a1",0)]]})},
sdq:function(a){H.m(a,{func:1,ret:-1,args:[P.p,[P.j,H.aD(this,"a1",0)]]})},
$ij:1}
O.cl.prototype={
gk:function(a){return this.a.length},
gA:function(){var u=this.b
return u==null?this.b=D.S():u},
aA:function(){var u=this.b
if(u!=null)u.H(null)},
gZ:function(a){var u=this.a
if(u.length>0)return C.a.gax(u)
else return V.dw()},
em:function(a){var u=this.a
if(a==null)C.a.h(u,V.dw())
else C.a.h(u,a)
this.aA()},
cH:function(){var u=this.a
if(u.length>0){u.pop()
this.aA()}},
sbR:function(a){this.a=H.l(a,"$ib",[V.al],"$ab")}}
E.fa.prototype={}
E.ak.prototype={
d2:function(){var u,t
this.e=null
for(u=this.y.a,u=new J.ap(u,u.length,[H.w(u,0)]);u.D();){t=u.d
if(t.f==null)t.d2()}},
scT:function(a,b){var u,t,s=this,r=s.c
if(r!=b){s.d=s.c=b
s.e=null
if(r!=null)r.gA().M(0,s.geg())
u=s.c
if(u!=null)u.gA().h(0,s.geg())
t=new D.Q("shape",r,s.c,[F.bY])
t.b=!0
s.ah(t)}},
ser:function(a){var u,t,s=this,r=s.f
if(r!=a){if(r!=null)r.gA().M(0,s.gei())
u=s.f
s.f=a
if(a!=null)a.gA().h(0,s.gei())
s.d2()
t=new D.Q("technique",u,s.f,[O.bZ])
t.b=!0
s.ah(t)}},
sb2:function(a){var u,t,s=this
if(!J.P(s.r,a)){u=s.r
if(u!=null)u.gA().M(0,s.gee())
if(a!=null)a.gA().h(0,s.gee())
s.r=a
t=new D.Q("mover",u,a,[U.aa])
t.b=!0
s.ah(t)}},
ap:function(a,b){var u,t,s=this,r=s.r,q=r!=null?r.aP(0,b,s):null
if(!J.P(q,s.x)){u=s.x
s.x=q
t=new D.Q("matrix",u,q,[V.al])
t.b=!0
s.ah(t)}r=s.f
if(r!=null)r.ap(0,b)
for(r=s.y.a,r=new J.ap(r,r.length,[H.w(r,0)]);r.D();)r.d.ap(0,b)},
aN:function(a){var u,t=this,s=a.dx,r=t.x
s.toString
if(r==null)C.a.h(s.a,s.gZ(s))
else C.a.h(s.a,r.m(0,s.gZ(s)))
s.aA()
a.en(t.f)
s=a.dy
u=(s&&C.a).gax(s)
if(u!=null&&t.d!=null)u.ji(a,t)
for(s=t.y.a,s=new J.ap(s,s.length,[H.w(s,0)]);s.D();)s.d.aN(a)
a.el()
a.dx.cH()},
gA:function(){var u=this.z
return u==null?this.z=D.S():u},
ah:function(a){var u=this.z
if(u!=null)u.H(a)},
a0:function(){return this.ah(null)},
eh:function(a){H.f(a,"$iz")
this.e=null
this.ah(a)},
j6:function(){return this.eh(null)},
ej:function(a){this.ah(H.f(a,"$iz"))},
j7:function(){return this.ej(null)},
ef:function(a){this.ah(H.f(a,"$iz"))},
j5:function(){return this.ef(null)},
ed:function(a){this.ah(H.f(a,"$iz"))},
j2:function(){return this.ed(null)},
j1:function(a,b){var u,t,s,r,q,p,o
H.l(b,"$ij",[E.ak],"$aj")
for(u=b.length,t=this.gec(),s={func:1,ret:-1,args:[D.z]},r=[s],q=0;q<b.length;b.length===u||(0,H.G)(b),++q){p=b[q]
if(p!=null){o=p.z
if(o==null){o=new D.bO()
o.sae(null)
o.saT(null)
o.c=null
o.d=0
p.z=o}H.m(t,s)
if(o.a==null)o.sae(H.e([],r))
o=o.a;(o&&C.a).h(o,t)}}this.a0()},
j4:function(a,b){var u,t
H.l(b,"$ij",[E.ak],"$aj")
for(u=b.gX(b),t=this.gec();u.D();)u.gL(u).gA().M(0,t)
this.a0()},
i:function(a){var u=this.a,t=u.length
if(t<=0)return"Unnamed entity"
return u},
seO:function(a,b){this.y=H.l(b,"$ia1",[E.ak],"$aa1")},
$ibm:1}
E.hs.prototype={
eJ:function(a,b){var u,t,s=this
s.d=s.c=512
s.e=0
s.x=s.r=s.f=new P.au(Date.now(),!1)
s.y=0
s.cx=s.ch=s.Q=s.z=null
u=new O.cl()
t=[V.al]
u.sbR(H.e([],t))
u.b=null
u.gA().h(0,new E.ht(s))
s.cy=u
u=new O.cl()
u.sbR(H.e([],t))
u.b=null
u.gA().h(0,new E.hu(s))
s.db=u
u=new O.cl()
u.sbR(H.e([],t))
u.b=null
u.gA().h(0,new E.hv(s))
s.dx=u
s.shN(H.e([],[O.bZ]))
u=s.dy;(u&&C.a).h(u,null)
s.shJ(new H.aI([P.h,A.cu]))},
gjf:function(){var u,t=this,s=t.z
if(s==null){s=t.cy
s=s.gZ(s)
u=t.db
u=t.z=s.m(0,u.gZ(u))
s=u}return s},
en:function(a){var u=this.dy,t=a==null?(u&&C.a).gax(u):a;(u&&C.a).h(u,t)},
el:function(){var u=this.dy
if(u.length>1)u.pop()},
shN:function(a){this.dy=H.l(a,"$ib",[O.bZ],"$ab")},
shJ:function(a){this.fr=H.l(a,"$iD",[P.h,A.cu],"$aD")}}
E.ht.prototype={
$1:function(a){var u
H.f(a,"$iz")
u=this.a
u.ch=u.z=null},
$S:10}
E.hu.prototype={
$1:function(a){var u
H.f(a,"$iz")
u=this.a
u.cx=u.ch=u.Q=u.z=null},
$S:10}
E.hv.prototype={
$1:function(a){var u
H.f(a,"$iz")
u=this.a
u.cx=u.ch=null},
$S:10}
E.dQ.prototype={
cY:function(a){H.f(a,"$iz")
this.ep()},
cX:function(){return this.cY(null)},
giQ:function(){var u,t=this,s=Date.now(),r=C.f.a2(P.lg(s-t.cx.a,0).a,1000)/1000
if(r<=0)return 0
u=t.cy
t.cy=0
t.cx=new P.au(s,!1)
return u/r},
dt:function(){var u,t,s=this,r=window.devicePixelRatio,q=s.b.clientWidth
if(typeof q!=="number")return q.m()
if(typeof r!=="number")return H.q(r)
u=C.e.aZ(q*r)
q=s.b.clientHeight
if(typeof q!=="number")return q.m()
t=C.e.aZ(q*r)
q=s.b
if(q.width!==u||q.height!==t){q.width=u
q.height=t
P.lC(C.t,s.gjk())}},
ep:function(){var u,t
if(!this.ch){this.ch=!0
u=window
t=H.m(new E.i3(this),{func:1,ret:-1,args:[P.a8]})
C.C.ff(u)
C.C.hz(u,W.m5(t,P.a8))}},
jh:function(){var u,t,s,r,q,p=this
try{++p.cy
p.ch=!1
p.dt()
if(p.d!=null){s=p.e;++s.e
s.r=s.x
r=Date.now()
s.x=new P.au(r,!1)
s.y=P.lg(r-s.r.a,0).a*0.000001
r=s.cy
C.a.sk(r.a,0)
r.aA()
r=s.db
C.a.sk(r.a,0)
r.aA()
r=s.dx
C.a.sk(r.a,0)
r.aA()
r=s.dy;(r&&C.a).sk(r,0)
s=s.dy;(s&&C.a).h(s,null)
p.d.aN(p.e)}}catch(q){u=H.aE(q)
t=H.c7(q)
P.l3("Error: "+H.n(u))
P.l3("Stack: "+H.n(t))
throw H.c(u)}}}
E.i3.prototype={
$1:function(a){var u
H.ox(a)
u=this.a
if(u.ch){u.ch=!1
u.jh()}},
$S:28}
Z.e0.prototype={$ioI:1}
Z.d6.prototype={
bh:function(a){var u,t,s,r=this
try{t=a.a
t.enableVertexAttribArray(r.e)
t.vertexAttribPointer(r.e,r.b,5126,!1,r.d,r.c)}catch(s){u=H.aE(s)
t=P.x('Failed to bind buffer attribute "'+r.a.i(0)+'": '+H.n(u))
throw H.c(t)}},
i:function(a){var u=this
return"["+u.a.i(0)+", Size: "+u.b+", Offset: "+u.c+", Stride: "+u.d+", Attr: "+H.n(u.e)+"]"}}
Z.iP.prototype={$ioJ:1}
Z.d7.prototype={
aL:function(a){var u,t,s,r
for(u=this.c,t=u.length,s=0;s<t;++s){r=u[s]
if((r.a.a&a.a)!==0)return r}return},
bh:function(a){var u,t=this.a
a.a.bindBuffer(t.a,t.b)
for(t=this.c,u=t.length-1;u>=0;--u)t[u].bh(a)},
ev:function(a){var u,t,s
for(u=this.c,t=u.length-1,s=a.a;t>=0;--t)s.disableVertexAttribArray(u[t].e)
s.bindBuffer(this.a.a,null)},
aN:function(a){var u,t,s,r,q,p=this.b.length
for(u=a.a,t=0;t<p;++t){s=this.b
if(t>=s.length)return H.d(s,t)
r=s[t]
s=r.c
q=s.a
u.bindBuffer(q,s.b)
u.drawElements(r.a,r.b,5123,0)
u.bindBuffer(q,null)}},
i:function(a){var u,t,s,r,q=[P.h],p=H.e([],q)
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.G)(u),++s)C.a.h(p,u[s].i(0))
r=H.e([],q)
for(q=this.c,u=q.length,s=0;s<u;++s)C.a.h(r,J.at(q[s]))
return"Buffer:  ["+this.a.i(0)+"]\nIndices: "+C.a.C(p,", ")+"\nAttrs:   "+C.a.C(r,", ")},
sfn:function(a){this.b=H.l(a,"$ib",[Z.bx],"$ab")},
$ioR:1}
Z.bx.prototype={
i:function(a){return"Type: "+this.a+", Count: "+this.b+", ["+("Instance of '"+H.bV(this.c)+"'")+"]"}}
Z.aS.prototype={
gcU:function(a){var u=this.a,t=(u&$.bc().a)!==0?3:0
if((u&$.aT().a)!==0)t+=3
if((u&$.bb().a)!==0)t+=3
if((u&$.bd().a)!==0)t+=2
if((u&$.be().a)!==0)t+=3
if((u&$.d0().a)!==0)t+=3
if((u&$.d1().a)!==0)t+=4
if((u&$.bG().a)!==0)++t
return(u&$.ba().a)!==0?t+4:t},
iv:function(a){var u,t=$.bc(),s=this.a
if((s&t.a)!==0){if(0===a)return t
u=1}else u=0
t=$.aT()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.bb()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.bd()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.be()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.d0()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.d1()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.bG()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.ba()
if((s&t.a)!==0)if(u===a)return t
return $.mA()},
t:function(a,b){if(b==null)return!1
if(!(b instanceof Z.aS))return!1
return this.a===b.a},
i:function(a){var u=H.e([],[P.h]),t=this.a
if((t&$.bc().a)!==0)C.a.h(u,"Pos")
if((t&$.aT().a)!==0)C.a.h(u,"Norm")
if((t&$.bb().a)!==0)C.a.h(u,"Binm")
if((t&$.bd().a)!==0)C.a.h(u,"Txt2D")
if((t&$.be().a)!==0)C.a.h(u,"TxtCube")
if((t&$.d0().a)!==0)C.a.h(u,"Clr3")
if((t&$.d1().a)!==0)C.a.h(u,"Clr4")
if((t&$.bG().a)!==0)C.a.h(u,"Weight")
if((t&$.ba().a)!==0)C.a.h(u,"Bending")
if(u.length<=0)return"None"
return C.a.C(u,"|")}}
D.fd.prototype={}
D.bO.prototype={
h:function(a,b){var u={func:1,ret:-1,args:[D.z]}
H.m(b,u)
if(this.a==null)this.sae(H.e([],[u]))
u=this.a;(u&&C.a).h(u,b)},
M:function(a,b){var u,t,s=this
H.m(b,{func:1,ret:-1,args:[D.z]})
u=s.a
u=u==null?null:C.a.aK(u,b)
if(u===!0){u=s.a
t=(u&&C.a).M(u,b)||!1}else t=!1
u=s.b
u=u==null?null:C.a.aK(u,b)
if(u===!0){u=s.b
t=(u&&C.a).M(u,b)||t}return t},
H:function(a){var u,t,s,r=this,q={}
q.a=a
u=r.a
t=u==null
s=t?null:u.length===0
if(s!==!1){s=r.b
s=s==null?null:s.length===0
s=s!==!1}else s=!1
if(s)return!1
if(a==null){a=new D.z()
a.b=!0
q.a=a
s=a}else s=a
if(r.d>0){if(r.c==null)r.c=s
return!0}if(!t)C.a.I(P.kD(u,!0,{func:1,ret:-1,args:[D.z]}),new D.fw(q))
u=r.b
if(u!=null){r.saT(H.e([],[{func:1,ret:-1,args:[D.z]}]))
C.a.I(u,new D.fx(q))}return!0},
iJ:function(){return this.H(null)},
a6:function(a){var u,t=this,s=t.d
if(s>0){--s
t.d=s
if(s<=0)s=t.c!=null
else s=!1
if(s){u=t.c
t.c=null
t.H(u)}}},
sae:function(a){this.a=H.l(a,"$ib",[{func:1,ret:-1,args:[D.z]}],"$ab")},
saT:function(a){this.b=H.l(a,"$ib",[{func:1,ret:-1,args:[D.z]}],"$ab")}}
D.fw.prototype={
$1:function(a){var u
H.m(a,{func:1,ret:-1,args:[D.z]})
u=this.a.a
u.b
a.$1(u)},
$S:25}
D.fx.prototype={
$1:function(a){var u
H.m(a,{func:1,ret:-1,args:[D.z]})
u=this.a.a
u.b
a.$1(u)},
$S:25}
D.z.prototype={}
D.bS.prototype={}
D.bT.prototype={}
D.Q.prototype={
i:function(a){return"ValueChanged: "+this.c+", "+H.n(this.d)+" => "+H.n(this.e)}}
X.d8.prototype={
t:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.d8))return!1
if(this.a!=b.a)return!1
if(!this.b.t(0,b.b))return!1
return!0},
i:function(a){return this.b.i(0)+H.n(this.a)}}
X.dn.prototype={
t:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.dn))return!1
if(this.a!=b.a)return!1
if(!this.b.t(0,b.b))return!1
return!0},
i:function(a){return this.b.i(0)+H.n(this.a)}}
X.fL.prototype={
jc:function(a){this.c=a.b
this.d.h(0,a.a)
return!1},
j8:function(a){this.c=a.b
this.d.M(0,a.a)
return!1},
shs:function(a){this.d=H.l(a,"$ilz",[P.p],"$alz")}}
X.dr.prototype={}
X.fU.prototype={
aR:function(a,b){var u,t,s,r,q=this,p=Date.now(),o=q.x,n=b.a,m=q.Q
if(typeof n!=="number")return n.m()
u=b.b
t=q.ch
if(typeof u!=="number")return u.m()
s=new V.ac(o.a+n*m,o.b+u*t)
t=q.a.gaJ()
r=new X.bl(a,V.bB(),q.x,t,s)
r.b=!0
q.z=new P.au(p,!1)
q.x=s
return r},
cG:function(a,b){this.r=a.a
return!1},
b4:function(a,b){var u=this.r,t=a.a
if(typeof t!=="number")return t.eB()
if(typeof u!=="number")return u.bG()
this.r=(u&~t)>>>0
return!1},
b3:function(a,b){var u=this.d
if(u==null)return!1
u.H(this.aR(a,b))
return!0},
jd:function(a){var u,t,s,r,q,p,o=this,n=o.e
if(n==null)return!1
u=o.a.gaJ()
t=o.x
Date.now()
s=a.a
r=o.cx
if(typeof s!=="number")return s.m()
q=a.b
p=o.cy
if(typeof q!=="number")return q.m()
t=new X.cn(new V.T(s*r,q*p),u,t)
t.b=!0
n.H(t)
return!0},
h3:function(a,b,c){var u,t,s,r=this
if(r.f==null)return
u=Date.now()
t=r.f
s=new X.dr(c,r.a.gaJ(),b)
s.b=!0
t.H(s)
r.y=new P.au(u,!1)
r.x=V.bB()}}
X.av.prototype={
t:function(a,b){var u=this
if(b==null)return!1
if(u===b)return!0
if(!(b instanceof X.av))return!1
if(u.a!==b.a)return!1
if(u.b!=b.b)return!1
if(u.c!=b.c)return!1
return!0},
i:function(a){var u=this.a?"Ctrl+":""
u+=H.C(this.b)?"Alt+":""
return u+(H.C(this.c)?"Shift+":"")}}
X.bl.prototype={}
X.hb.prototype={
bP:function(a,b,c){var u=this,t=new P.au(Date.now(),!1),s=u.a.gaJ(),r=new X.bl(a,u.r,u.x,s,b)
r.b=!0
if(c){u.y=t
u.r=b}u.z=t
u.x=b
return r},
cG:function(a,b){var u
this.f=a.a
u=this.b
if(u==null)return!1
u.H(this.bP(a,b,!0))
return!0},
b4:function(a,b){var u=this,t=u.f,s=a.a
if(typeof s!=="number")return s.eB()
if(typeof t!=="number")return t.bG()
u.f=(t&~s)>>>0
t=u.c
if(t==null)return!1
t.H(u.bP(a,b,!0))
return!0},
b3:function(a,b){var u=this.d
if(u==null)return!1
u.H(this.bP(a,b,!1))
return!0},
je:function(a,b){var u,t,s,r,q,p=this,o=p.e
if(o==null)return!1
u=p.a.gaJ()
Date.now()
t=a.a
s=p.Q
if(typeof t!=="number")return t.m()
r=a.b
q=p.ch
if(typeof r!=="number")return r.m()
u=new X.cn(new V.T(t*s,r*q),u,b)
u.b=!0
o.H(u)
return!0},
gdG:function(){var u=this.b
return u==null?this.b=D.S():u},
gbE:function(){var u=this.c
return u==null?this.c=D.S():u},
geb:function(){var u=this.d
return u==null?this.d=D.S():u}}
X.cn.prototype={}
X.ho.prototype={}
X.dS.prototype={}
X.i6.prototype={
aR:function(a,b){var u,t,s,r,q=this
H.l(a,"$ib",[V.ac],"$ab")
u=new P.au(Date.now(),!1)
t=a.length>0?a[0]:V.bB()
s=q.a.gaJ()
r=new X.dS(q.f,q.r,s,t)
r.b=!0
if(b){q.x=u
q.f=t}q.y=u
q.r=t
return r},
jb:function(a){var u
H.l(a,"$ib",[V.ac],"$ab")
u=this.b
if(u==null)return!1
u.H(this.aR(a,!0))
return!0},
j9:function(a){var u
H.l(a,"$ib",[V.ac],"$ab")
u=this.c
if(u==null)return!1
u.H(this.aR(a,!0))
return!0},
ja:function(a){var u
H.l(a,"$ib",[V.ac],"$ab")
u=this.d
if(u==null)return!1
u.H(this.aR(a,!1))
return!0}}
X.dX.prototype={
gaJ:function(){var u=this.a,t=C.m.gdE(u).c
t.toString
u=C.m.gdE(u).d
u.toString
return V.lx(0,0,t,u)},
da:function(a){var u=a.keyCode,t=H.C(a.ctrlKey)||H.C(a.metaKey)
return new X.dn(u,new X.av(t,a.altKey,a.shiftKey))},
aH:function(a){var u=this.b,t=H.C(a.ctrlKey)||H.C(a.metaKey)
u.c=new X.av(t,a.altKey,a.shiftKey)},
c7:function(a){var u=this.b,t=H.C(a.ctrlKey)||H.C(a.metaKey)
u.c=new X.av(t,a.altKey,a.shiftKey)},
au:function(a){var u,t=this.a.getBoundingClientRect(),s=a.pageX,r=a.pageY,q=t.left
if(typeof s!=="number")return s.p()
u=t.top
if(typeof r!=="number")return r.p()
return new V.ac(s-q,r-u)},
aU:function(a){return new V.T(a.movementX,a.movementY)},
c1:function(a){var u,t,s,r,q,p,o=this.a.getBoundingClientRect(),n=H.e([],[V.ac])
for(u=a.touches,t=u.length,s=0;s<u.length;u.length===t||(0,H.G)(u),++s){r=u[s]
q=C.e.ai(r.pageX)
C.e.ai(r.pageY)
p=o.left
C.e.ai(r.pageX)
C.a.h(n,new V.ac(q-p,C.e.ai(r.pageY)-o.top))}return n},
ar:function(a){var u=a.buttons,t=H.C(a.ctrlKey)||H.C(a.metaKey)
return new X.d8(u,new X.av(t,a.altKey,a.shiftKey))},
bS:function(a){var u,t,s=this.a.getBoundingClientRect(),r=a.pageX,q=a.pageY,p=s.left
if(typeof r!=="number")return r.p()
u=r-p
if(u<0)return!1
r=s.top
if(typeof q!=="number")return q.p()
t=q-r
if(t<0)return!1
return u<s.width&&t<s.height},
fY:function(a){this.f=!0},
fK:function(a){this.f=!1},
fS:function(a){H.f(a,"$ia4")
if(H.C(this.f)&&this.bS(a))a.preventDefault()},
h1:function(a){var u
H.f(a,"$ib_")
if(!H.C(this.f))return
u=this.da(a)
this.b.jc(u)},
h_:function(a){var u
H.f(a,"$ib_")
if(!H.C(this.f))return
u=this.da(a)
this.b.j8(u)},
h5:function(a){var u,t,s,r,q=this
H.f(a,"$ia4")
u=q.a
u.focus()
q.f=!0
q.aH(a)
if(H.C(q.x)){t=q.ar(a)
s=q.aU(a)
if(q.d.cG(t,s))a.preventDefault()
return}if(H.C(q.r)){q.y=a
u.requestPointerLock()
return}t=q.ar(a)
r=q.au(a)
if(q.c.cG(t,r))a.preventDefault()},
h9:function(a){var u,t,s,r=this
H.f(a,"$ia4")
r.aH(a)
u=r.ar(a)
if(H.C(r.x)){t=r.aU(a)
if(r.d.b4(u,t))a.preventDefault()
return}if(H.C(r.r))return
s=r.au(a)
if(r.c.b4(u,s))a.preventDefault()},
fW:function(a){var u,t,s,r=this
H.f(a,"$ia4")
if(!r.bS(a)){r.aH(a)
u=r.ar(a)
if(H.C(r.x)){t=r.aU(a)
if(r.d.b4(u,t))a.preventDefault()
return}if(H.C(r.r))return
s=r.au(a)
if(r.c.b4(u,s))a.preventDefault()}},
h7:function(a){var u,t,s,r=this
H.f(a,"$ia4")
r.aH(a)
u=r.ar(a)
if(H.C(r.x)){t=r.aU(a)
if(r.d.b3(u,t))a.preventDefault()
return}if(H.C(r.r))return
s=r.au(a)
if(r.c.b3(u,s))a.preventDefault()},
fU:function(a){var u,t,s,r=this
H.f(a,"$ia4")
if(!r.bS(a)){r.aH(a)
u=r.ar(a)
if(H.C(r.x)){t=r.aU(a)
if(r.d.b3(u,t))a.preventDefault()
return}if(H.C(r.r))return
s=r.au(a)
if(r.c.b3(u,s))a.preventDefault()}},
hb:function(a){var u,t,s=this
H.f(a,"$ib7")
s.aH(a)
u=new V.T((a&&C.B).giE(a),C.B.giF(a)).v(0,180)
if(H.C(s.x)){if(s.d.jd(u))a.preventDefault()
return}if(H.C(s.r))return
t=s.au(a)
if(s.c.je(u,t))a.preventDefault()},
hd:function(a){var u,t,s=this,r=document.pointerLockElement===s.a
if(r!==s.x){s.x=r
u=s.ar(s.y)
t=s.au(s.y)
s.d.h3(u,t,r)}},
hq:function(a){var u,t=this
H.f(a,"$iaQ")
t.a.focus()
t.f=!0
t.c7(a)
u=t.c1(a)
if(t.e.jb(u))a.preventDefault()},
hm:function(a){var u
H.f(a,"$iaQ")
this.c7(a)
u=this.c1(a)
if(this.e.j9(u))a.preventDefault()},
ho:function(a){var u
H.f(a,"$iaQ")
this.c7(a)
u=this.c1(a)
if(this.e.ja(u))a.preventDefault()},
sfg:function(a){this.z=H.l(a,"$ib",[[P.cw,P.N]],"$ab")}}
D.bv.prototype={
gA:function(){var u=this.d
return u==null?this.d=D.S():u},
aq:function(a){var u
H.f(a,"$iz")
u=this.d
if(u!=null)u.H(a)},
eQ:function(){return this.aq(null)},
$ia6:1,
$ibm:1}
D.a6.prototype={$ibm:1}
D.dp.prototype={
gA:function(){var u=this.Q
return u==null?this.Q=D.S():u},
aq:function(a){var u=this.Q
if(u!=null)u.H(a)},
dm:function(a){var u
H.f(a,"$iz")
u=this.ch
if(u!=null)u.H(a)},
h2:function(){return this.dm(null)},
hg:function(a){var u,t,s
H.l(a,"$ij",[D.a6],"$aj")
for(u=a.length,t=0;t<a.length;a.length===u||(0,H.G)(a),++t){s=a[t]
if(s==null||this.f9(s))return!1}return!0},
fE:function(a,b){var u,t,s,r,q,p,o,n=D.a6
H.l(b,"$ij",[n],"$aj")
for(u=b.length,t=this.gdl(),s={func:1,ret:-1,args:[D.z]},r=[s],q=0;q<b.length;b.length===u||(0,H.G)(b),++q){p=H.f(b[q],"$ia6")
if(p instanceof D.bv)C.a.h(this.e,p)
o=p.d
if(o==null){o=new D.bO()
o.sae(null)
o.saT(null)
o.c=null
o.d=0
p.d=o}H.m(t,s)
if(o.a==null)o.sae(H.e([],r))
o=o.a;(o&&C.a).h(o,t)}n=new D.bS([n])
n.b=!0
this.aq(n)},
hk:function(a,b){var u,t,s,r=D.a6
H.l(b,"$ij",[r],"$aj")
for(u=b.gX(b),t=this.gdl();u.D();){s=u.gL(u)
C.a.M(this.e,s)
s.gA().M(0,t)}r=new D.bT([r])
r.b=!0
this.aq(r)},
f9:function(a){var u=C.a.aK(this.e,a)
return u},
sfd:function(a){this.e=H.l(a,"$ib",[D.bv],"$ab")},
shr:function(a){this.f=H.l(a,"$ib",[D.dC],"$ab")},
shL:function(a){this.r=H.l(a,"$ib",[D.dI],"$ab")},
shX:function(a){this.x=H.l(a,"$ib",[D.dN],"$ab")},
shY:function(a){this.y=H.l(a,"$ib",[D.dO],"$ab")},
shZ:function(a){this.z=H.l(a,"$ib",[D.dP],"$ab")},
$aj:function(){return[D.a6]},
$aa1:function(){return[D.a6]}}
D.dC.prototype={$ia6:1,$ibm:1}
D.dI.prototype={$ia6:1,$ibm:1}
D.dN.prototype={$ia6:1,$ibm:1}
D.dO.prototype={$ia6:1,$ibm:1}
D.dP.prototype={$ia6:1,$ibm:1}
V.a2.prototype={
n:function(a,b){var u=C.e.n(this.a,b.gcJ()),t=C.e.n(this.b,b.gbH()),s=C.e.n(this.c,b.gcg())
if(u<0)u=0
else if(u>1)u=1
if(t<0)t=0
else if(t>1)t=1
if(s<0)s=0
else if(s>1)s=1
return new V.a2(u,t,s)},
p:function(a,b){var u=C.e.p(this.a,b.gcJ()),t=C.e.p(this.b,b.gbH()),s=C.e.p(this.c,b.gcg())
if(u<0)u=0
else if(u>1)u=1
if(t<0)t=0
else if(t>1)t=1
if(s<0)s=0
else if(s>1)s=1
return new V.a2(u,t,s)},
t:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.a2))return!1
u=b.a
t=$.R().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
return!0},
i:function(a){return"["+V.W(this.a,3,0)+", "+V.W(this.b,3,0)+", "+V.W(this.c,3,0)+"]"}}
V.bf.prototype={
n:function(a,b){var u=this,t=C.e.n(u.a,b.gcJ()),s=C.e.n(u.b,b.gbH()),r=C.e.n(u.c,b.gcg()),q=C.e.n(u.d,b.git(b))
if(t<0)t=0
else if(t>1)t=1
if(s<0)s=0
else if(s>1)s=1
if(r<0)r=0
else if(r>1)r=1
if(q<0)q=0
else if(q>1)q=1
return new V.bf(t,s,r,q)},
p:function(a,b){var u=this,t=C.e.p(u.a,b.gcJ()),s=C.e.p(u.b,b.gbH()),r=C.e.p(u.c,b.gcg()),q=C.e.p(u.d,b.git(b))
if(t<0)t=0
else if(t>1)t=1
if(s<0)s=0
else if(s>1)s=1
if(r<0)r=0
else if(r>1)r=1
if(q<0)q=0
else if(q>1)q=1
return new V.bf(t,s,r,q)},
t:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.bf))return!1
u=b.a
t=$.R().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
if(!(Math.abs(b.d-s.d)<t))return!1
return!0},
i:function(a){var u=this
return"["+V.W(u.a,3,0)+", "+V.W(u.b,3,0)+", "+V.W(u.c,3,0)+", "+V.W(u.d,3,0)+"]"}}
V.fv.prototype={}
V.dv.prototype={
ad:function(a,b){var u=this,t=H.e([u.a,u.d,u.r,u.b,u.e,u.x,u.c,u.f,u.y],[P.v])
return t},
t:function(a,b){var u,t,s,r,q=this
if(b==null)return!1
if(q===b)return!0
if(!(b instanceof V.dv))return!1
u=b.a
t=$.R()
s=t.a
if(!(Math.abs(u-q.a)<s))return!1
if(!(Math.abs(b.b-q.b)<s))return!1
if(!(Math.abs(b.c-q.c)<s))return!1
if(!(Math.abs(b.d-q.d)<s))return!1
if(!(Math.abs(b.e-q.e)<s))return!1
if(!(Math.abs(b.f-q.f)<s))return!1
u=b.r
r=q.r
t.toString
if(typeof u!=="number")return u.p()
if(typeof r!=="number")return H.q(r)
if(!(Math.abs(u-r)<s))return!1
u=b.x
t=q.x
if(typeof u!=="number")return u.p()
if(typeof t!=="number")return H.q(t)
if(!(Math.abs(u-t)<s))return!1
u=b.y
t=q.y
if(typeof u!=="number")return u.p()
if(typeof t!=="number")return H.q(t)
if(!(Math.abs(u-t)<s))return!1
return!0},
i:function(a){var u,t,s,r,q=this,p=[P.v],o=V.c5(H.e([q.a,q.d,q.r],p),3,0),n=V.c5(H.e([q.b,q.e,q.x],p),3,0),m=V.c5(H.e([q.c,q.f,q.y],p),3,0)
p=o.length
if(0>=p)return H.d(o,0)
u="["+o[0]+", "
t=n.length
if(0>=t)return H.d(n,0)
u=u+n[0]+", "
s=m.length
if(0>=s)return H.d(m,0)
u=u+m[0]+",\n"
if(1>=p)return H.d(o,1)
r=" "+o[1]+", "
if(1>=t)return H.d(n,1)
r=r+n[1]+", "
if(1>=s)return H.d(m,1)
r=u+(r+m[1]+",\n")
if(2>=p)return H.d(o,2)
p=" "+o[2]+", "
if(2>=t)return H.d(n,2)
p=p+n[2]+", "
if(2>=s)return H.d(m,2)
return r+(p+m[2]+"]")}}
V.al.prototype={
ad:function(a,b){var u=this,t=H.e([u.a,u.e,u.y,u.cx,u.b,u.f,u.z,u.cy,u.c,u.r,u.Q,u.db,u.d,u.x,u.ch,u.dx],[P.v])
return t},
e9:function(b2){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=this,d=e.a,c=e.f,b=e.b,a=e.e,a0=d*c-b*a,a1=e.r,a2=e.c,a3=d*a1-a2*a,a4=e.x,a5=e.d,a6=d*a4-a5*a,a7=b*a1-a2*c,a8=b*a4-a5*c,a9=a2*a4-a5*a1,b0=e.y,b1=e.cy
if(typeof b0!=="number")return b0.m()
u=e.z
t=e.cx
if(typeof u!=="number")return u.m()
s=b0*b1-u*t
r=e.db
q=e.Q
if(typeof q!=="number")return q.m()
p=b0*r-q*t
o=e.dx
n=e.ch
m=b0*o-n*t
l=u*r-q*b1
k=u*o-n*b1
j=q*o-n*r
i=a0*j-a3*k+a6*l+a7*m-a8*p+a9*s
if(Math.abs(i-0)<$.R().a)return V.dw()
h=1/i
g=-a
f=-t
return V.b2((c*j-a1*k+a4*l)*h,(-b*j+a2*k-a5*l)*h,(b1*a9-r*a8+o*a7)*h,(-u*a9+q*a8-n*a7)*h,(g*j+a1*m-a4*p)*h,(d*j-a2*m+a5*p)*h,(f*a9+r*a6-o*a3)*h,(b0*a9-q*a6+n*a3)*h,(a*k-c*m+a4*s)*h,(-d*k+b*m-a5*s)*h,(t*a8-b1*a6+o*a0)*h,(-b0*a8+u*a6-n*a0)*h,(g*l+c*p-a1*s)*h,(d*l-b*p+a2*s)*h,(f*a7+b1*a3-r*a0)*h,(b0*a7-u*a3+q*a0)*h)},
m:function(b2,b3){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5=this,a6=a5.a,a7=b3.a,a8=a5.b,a9=b3.e,b0=a5.c,b1=b3.y
if(typeof b1!=="number")return H.q(b1)
u=a5.d
t=b3.cx
s=b3.b
r=b3.f
q=b3.z
if(typeof q!=="number")return H.q(q)
p=b3.cy
o=b3.c
n=b3.r
m=b3.Q
if(typeof m!=="number")return H.q(m)
l=b3.db
k=b3.d
j=b3.x
i=b3.ch
h=b3.dx
g=a5.e
f=a5.f
e=a5.r
d=a5.x
c=a5.y
if(typeof c!=="number")return c.m()
b=a5.z
if(typeof b!=="number")return b.m()
a=a5.Q
if(typeof a!=="number")return a.m()
a0=a5.ch
a1=a5.cx
a2=a5.cy
a3=a5.db
a4=a5.dx
return V.b2(a6*a7+a8*a9+b0*b1+u*t,a6*s+a8*r+b0*q+u*p,a6*o+a8*n+b0*m+u*l,a6*k+a8*j+b0*i+u*h,g*a7+f*a9+e*b1+d*t,g*s+f*r+e*q+d*p,g*o+f*n+e*m+d*l,g*k+f*j+e*i+d*h,c*a7+b*a9+a*b1+a0*t,c*s+b*r+a*q+a0*p,c*o+b*n+a*m+a0*l,c*k+b*j+a*i+a0*h,a1*a7+a2*a9+a3*b1+a4*t,a1*s+a2*r+a3*q+a4*p,a1*o+a2*n+a3*m+a4*l,a1*k+a2*j+a3*i+a4*h)},
cO:function(a){var u,t,s,r=this,q=a.a,p=a.b,o=a.c
if(typeof o!=="number")return H.q(o)
u=r.y
if(typeof u!=="number")return u.m()
t=r.z
if(typeof t!=="number")return t.m()
s=r.Q
if(typeof s!=="number")return s.m()
return new V.J(r.a*q+r.b*p+r.c*o,r.e*q+r.f*p+r.r*o,u*q+t*p+s*o)},
ba:function(a){var u,t,s,r=this,q=a.a,p=a.b,o=a.c
if(typeof o!=="number")return H.q(o)
u=r.y
if(typeof u!=="number")return u.m()
t=r.z
if(typeof t!=="number")return t.m()
s=r.Q
if(typeof s!=="number")return s.m()
return new V.a0(r.a*q+r.b*p+r.c*o+r.d,r.e*q+r.f*p+r.r*o+r.x,u*q+t*p+s*o+r.ch)},
t:function(a,b){var u,t,s,r,q=this
if(b==null)return!1
if(q===b)return!0
if(!(b instanceof V.al))return!1
u=b.a
t=$.R()
s=t.a
if(!(Math.abs(u-q.a)<s))return!1
if(!(Math.abs(b.b-q.b)<s))return!1
if(!(Math.abs(b.c-q.c)<s))return!1
if(!(Math.abs(b.d-q.d)<s))return!1
if(!(Math.abs(b.e-q.e)<s))return!1
if(!(Math.abs(b.f-q.f)<s))return!1
if(!(Math.abs(b.r-q.r)<s))return!1
if(!(Math.abs(b.x-q.x)<s))return!1
u=b.y
r=q.y
t.toString
if(typeof u!=="number")return u.p()
if(typeof r!=="number")return H.q(r)
if(!(Math.abs(u-r)<s))return!1
u=b.z
t=q.z
if(typeof u!=="number")return u.p()
if(typeof t!=="number")return H.q(t)
if(!(Math.abs(u-t)<s))return!1
u=b.Q
t=q.Q
if(typeof u!=="number")return u.p()
if(typeof t!=="number")return H.q(t)
if(!(Math.abs(u-t)<s))return!1
if(!(Math.abs(b.ch-q.ch)<s))return!1
if(!(Math.abs(b.cx-q.cx)<s))return!1
if(!(Math.abs(b.cy-q.cy)<s))return!1
if(!(Math.abs(b.db-q.db)<s))return!1
if(!(Math.abs(b.dx-q.dx)<s))return!1
return!0},
i:function(a){return this.N()},
F:function(a){var u,t,s,r,q,p=this,o=[P.v],n=V.c5(H.e([p.a,p.e,p.y,p.cx],o),3,0),m=V.c5(H.e([p.b,p.f,p.z,p.cy],o),3,0),l=V.c5(H.e([p.c,p.r,p.Q,p.db],o),3,0),k=V.c5(H.e([p.d,p.x,p.ch,p.dx],o),3,0)
o=n.length
if(0>=o)return H.d(n,0)
u="["+n[0]+", "
t=m.length
if(0>=t)return H.d(m,0)
u=u+m[0]+", "
s=l.length
if(0>=s)return H.d(l,0)
u=u+l[0]+", "
r=k.length
if(0>=r)return H.d(k,0)
u=u+k[0]+",\n"
q=a+" "
if(1>=o)return H.d(n,1)
q=q+n[1]+", "
if(1>=t)return H.d(m,1)
q=q+m[1]+", "
if(1>=s)return H.d(l,1)
q=q+l[1]+", "
if(1>=r)return H.d(k,1)
q=u+(q+k[1]+",\n")
u=a+" "
if(2>=o)return H.d(n,2)
u=u+n[2]+", "
if(2>=t)return H.d(m,2)
u=u+m[2]+", "
if(2>=s)return H.d(l,2)
u=u+l[2]+", "
if(2>=r)return H.d(k,2)
u=q+(u+k[2]+",\n")
q=a+" "
if(3>=o)return H.d(n,3)
q=q+n[3]+", "
if(3>=t)return H.d(m,3)
q=q+m[3]+", "
if(3>=s)return H.d(l,3)
q=q+l[3]+", "
if(3>=r)return H.d(k,3)
return u+(q+k[3]+"]")},
N:function(){return this.F("")}}
V.ac.prototype={
n:function(a,b){return new V.ac(this.a+b.a,this.b+b.b)},
p:function(a,b){return new V.ac(this.a-b.a,this.b-b.b)},
t:function(a,b){var u,t
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.ac))return!1
u=b.a
t=$.R().a
if(!(Math.abs(u-this.a)<t))return!1
if(!(Math.abs(b.b-this.b)<t))return!1
return!0},
i:function(a){return"["+V.W(this.a,3,0)+", "+V.W(this.b,3,0)+"]"}}
V.a0.prototype={
n:function(a,b){var u=this.c,t=b.c
if(typeof u!=="number")return u.n()
if(typeof t!=="number")return H.q(t)
return new V.a0(this.a+b.a,this.b+b.b,u+t)},
p:function(a,b){var u=this.c,t=b.c
if(typeof u!=="number")return u.p()
if(typeof t!=="number")return H.q(t)
return new V.a0(this.a-b.a,this.b-b.b,u-t)},
m:function(a,b){var u=this.c
if(typeof u!=="number")return u.m()
return new V.a0(this.a*b,this.b*b,u*b)},
t:function(a,b){var u,t,s,r,q=this
if(b==null)return!1
if(q===b)return!0
if(!(b instanceof V.a0))return!1
u=b.a
t=$.R()
s=t.a
if(!(Math.abs(u-q.a)<s))return!1
if(!(Math.abs(b.b-q.b)<s))return!1
u=b.c
r=q.c
t.toString
if(typeof u!=="number")return u.p()
if(typeof r!=="number")return H.q(r)
if(!(Math.abs(u-r)<s))return!1
return!0},
i:function(a){return"["+V.W(this.a,3,0)+", "+V.W(this.b,3,0)+", "+V.W(this.c,3,0)+"]"}}
V.bo.prototype={
n:function(a,b){var u=this
return new V.bo(C.e.n(u.a,b.gjx(b)),C.e.n(u.b,b.gjy(b)),C.e.n(u.c,b.gjz(b)),C.e.n(u.d,b.gjw(b)))},
p:function(a,b){var u=this
return new V.bo(C.e.p(u.a,b.gjx(b)),C.e.p(u.b,b.gjy(b)),C.e.p(u.c,b.gjz(b)),C.e.p(u.d,b.gjw(b)))},
t:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.bo))return!1
u=b.a
t=$.R().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
if(!(Math.abs(b.d-s.d)<t))return!1
return!0},
i:function(a){var u=this
return"["+V.W(u.a,3,0)+", "+V.W(u.b,3,0)+", "+V.W(u.c,3,0)+", "+V.W(u.d,3,0)+"]"}}
V.dG.prototype={
ga5:function(){var u=this.c,t=this.d
if(u>t)return t
else return u},
t:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.dG))return!1
u=b.a
t=$.R().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
if(!(Math.abs(b.d-s.d)<t))return!1
return!0},
i:function(a){var u=this
return"["+V.W(u.a,3,0)+", "+V.W(u.b,3,0)+", "+V.W(u.c,3,0)+", "+V.W(u.d,3,0)+"]"}}
V.T.prototype={
cB:function(a){return Math.sqrt(this.E(this))},
E:function(a){var u,t,s=this.a,r=a.a
if(typeof s!=="number")return s.m()
if(typeof r!=="number")return H.q(r)
u=this.b
t=a.b
if(typeof u!=="number")return u.m()
if(typeof t!=="number")return H.q(t)
return s*r+u*t},
n:function(a,b){var u,t=this.a,s=b.giH(b)
if(typeof t!=="number")return t.n()
s=C.e.n(t,s)
t=this.b
u=b.giI(b)
if(typeof t!=="number")return t.n()
return new V.T(s,C.e.n(t,u))},
p:function(a,b){var u,t=this.a,s=b.giH(b)
if(typeof t!=="number")return t.p()
s=C.e.p(t,s)
t=this.b
u=b.giI(b)
if(typeof t!=="number")return t.p()
return new V.T(s,C.e.p(t,u))},
m:function(a,b){var u,t=this.a
if(typeof t!=="number")return t.m()
u=this.b
if(typeof u!=="number")return u.m()
return new V.T(t*b,u*b)},
v:function(a,b){var u,t
if(Math.abs(b-0)<$.R().a){u=$.lI
return u==null?$.lI=new V.T(0,0):u}u=this.a
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
s=$.R()
s.toString
if(typeof u!=="number")return u.p()
if(typeof t!=="number")return H.q(t)
s=s.a
if(!(Math.abs(u-t)<s))return!1
u=b.b
t=this.b
if(typeof u!=="number")return u.p()
if(typeof t!=="number")return H.q(t)
if(!(Math.abs(u-t)<s))return!1
return!0},
i:function(a){return"["+V.W(this.a,3,0)+", "+V.W(this.b,3,0)+"]"}}
V.J.prototype={
cB:function(a){return Math.sqrt(this.E(this))},
E:function(a){var u=this.c,t=a.c
if(typeof u!=="number")return u.m()
if(typeof t!=="number")return H.q(t)
return this.a*a.a+this.b*a.b+u*t},
cC:function(a,b){var u=this.a,t=this.b,s=this.c,r=a.c
if(typeof r!=="number")return r.p()
if(typeof s!=="number")return H.q(s)
return new V.J(u+b*(a.a-u),t+b*(a.b-t),s+b*(r-s))},
av:function(a){var u,t,s,r,q=this.b,p=a.c
if(typeof p!=="number")return H.q(p)
u=this.c
t=a.b
if(typeof u!=="number")return u.m()
s=a.a
r=this.a
return new V.J(q*p-u*t,u*s-r*p,r*t-q*s)},
n:function(a,b){var u=b.a,t=b.b,s=this.c,r=b.c
if(typeof s!=="number")return s.n()
if(typeof r!=="number")return H.q(r)
return new V.J(this.a+u,this.b+t,s+r)},
p:function(a,b){var u=this.c,t=b.c
if(typeof u!=="number")return u.p()
if(typeof t!=="number")return H.q(t)
return new V.J(this.a-b.a,this.b-b.b,u-t)},
S:function(a){var u=this.c
if(typeof u!=="number")return u.S()
return new V.J(-this.a,-this.b,-u)},
m:function(a,b){var u=this.c
if(typeof u!=="number")return u.m()
return new V.J(this.a*b,this.b*b,u*b)},
v:function(a,b){var u
if(Math.abs(b-0)<$.R().a)return V.cJ()
u=this.c
if(typeof u!=="number")return u.v()
return new V.J(this.a/b,this.b/b,u/b)},
ea:function(){var u,t=$.R(),s=t.a
if(!(Math.abs(0-this.a)<s))return!1
if(!(Math.abs(0-this.b)<s))return!1
u=this.c
t.toString
if(typeof u!=="number")return H.q(u)
if(!(Math.abs(0-u)<s))return!1
return!0},
t:function(a,b){var u,t,s,r,q=this
if(b==null)return!1
if(q===b)return!0
if(!(b instanceof V.J))return!1
u=b.a
t=$.R()
s=t.a
if(!(Math.abs(u-q.a)<s))return!1
if(!(Math.abs(b.b-q.b)<s))return!1
u=b.c
r=q.c
t.toString
if(typeof u!=="number")return u.p()
if(typeof r!=="number")return H.q(r)
if(!(Math.abs(u-r)<s))return!1
return!0},
i:function(a){return"["+V.W(this.a,3,0)+", "+V.W(this.b,3,0)+", "+V.W(this.c,3,0)+"]"}}
U.fe.prototype={
bL:function(a){var u=V.oH(a,this.c,this.b)
return u},
gA:function(){var u=this.y
return u==null?this.y=D.S():u},
R:function(a){var u=this.y
if(u!=null)u.H(a)},
scP:function(a,b){},
scD:function(a){var u,t=this,s=t.b
if(!(Math.abs(s-a)<$.R().a)){t.b=a
if(a<t.c)t.d=t.c=a
else{u=t.d
if(a<u)t.d=t.bL(u)}s=new D.Q("maximumLocation",s,t.b,[P.v])
s.b=!0
t.R(s)}},
scF:function(a){var u,t=this,s=t.c
if(!(Math.abs(s-a)<$.R().a)){t.c=a
if(t.b<a)t.d=t.b=a
else{u=t.d
if(a>u)t.d=t.bL(u)}s=new D.Q("minimumLocation",s,t.c,[P.v])
s.b=!0
t.R(s)}},
sY:function(a,b){var u,t=this
b=t.bL(b)
u=t.d
if(!(Math.abs(u-b)<$.R().a)){t.d=b
u=new D.Q("location",u,b,[P.v])
u.b=!0
t.R(u)}},
scE:function(a){var u,t,s=this,r=s.e
if(!(Math.abs(r-a)<$.R().a)){s.e=a
u=s.f
t=-a
if(u<t)u=t
else if(u>a)u=a
s.f=u
r=new D.Q("maximumVelocity",r,a,[P.v])
r.b=!0
s.R(r)}},
sT:function(a){var u=this,t=u.e,s=-t
if(a<s)a=s
else if(a>t)a=t
t=u.f
if(!(Math.abs(t-a)<$.R().a)){u.f=a
t=new D.Q("velocity",t,a,[P.v])
t.b=!0
u.R(t)}},
sco:function(a){var u
if(a<0)a=0
else if(a>1)a=1
u=this.x
if(!(Math.abs(u-a)<$.R().a)){this.x=a
u=new D.Q("dampening",u,a,[P.v])
u.b=!0
this.R(u)}},
ap:function(a,b){var u,t,s,r=this,q=r.f,p=$.R().a
if(!(Math.abs(q-0)<p)||!(Math.abs(r.r-0)<p)){u=q+r.r*b
q=r.e
t=-q
if(u<t)u=t
else if(u>q)u=q
r.sY(0,r.d+u*b)
q=r.x
if(!(Math.abs(q-0)<$.R().a)){s=u*Math.pow(1-q,b)
if(u<0){if(s<u)s=u
else if(s>0)s=0}else if(s<0)s=0
else if(s>u)s=u
u=s}r.sT(u)}}}
U.da.prototype={
gA:function(){var u=this.b
return u==null?this.b=D.S():u},
aP:function(a,b,c){return this.a},
t:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.da))return!1
return J.P(this.a,b.a)},
i:function(a){return"Constant: "+this.a.F("          ")}}
U.cj.prototype={
gA:function(){var u=this.e
return u==null?this.e=D.S():u},
R:function(a){var u
H.f(a,"$iz")
u=this.e
if(u!=null)u.H(a)},
a3:function(){return this.R(null)},
fC:function(a,b){var u,t,s,r,q,p,o,n=U.aa
H.l(b,"$ij",[n],"$aj")
for(u=b.length,t=this.gaB(),s={func:1,ret:-1,args:[D.z]},r=[s],q=0;q<b.length;b.length===u||(0,H.G)(b),++q){p=b[q]
if(p!=null){o=p.gA()
o.toString
H.m(t,s)
if(o.a==null)o.sae(H.e([],r))
o=o.a;(o&&C.a).h(o,t)}}n=new D.bS([n])
n.b=!0
this.R(n)},
hi:function(a,b){var u,t,s=U.aa
H.l(b,"$ij",[s],"$aj")
for(u=b.gX(b),t=this.gaB();u.D();)u.gL(u).gA().M(0,t)
s=new D.bT([s])
s.b=!0
this.R(s)},
aP:function(a,b,c){var u,t,s=this,r=s.r,q=b.e
if(typeof r!=="number")return r.U()
if(r<q){s.r=q
r=s.e
if(r!=null)++r.d
for(r=s.a,r=new J.ap(r,r.length,[H.w(r,0)]),u=null;r.D();){q=r.d
if(q!=null){t=q.aP(0,b,c)
if(t!=null)u=u==null?t:t.m(0,u)}}s.f=u==null?V.dw():u
r=s.e
if(r!=null)r.a6(0)}return s.f},
t:function(a,b){var u,t,s,r
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.cj))return!1
u=this.a.length
for(t=0;t<u;++t){s=this.a
if(t>=s.length)return H.d(s,t)
s=s[t]
r=b.a
if(t>=r.length)return H.d(r,t)
if(!J.P(s,r[t]))return!1}return!0},
i:function(a){return"Group"},
$aj:function(){return[U.aa]},
$aa1:function(){return[U.aa]},
$iaa:1}
U.aa.prototype={}
U.dY.prototype={
gA:function(){var u=this.cy
return u==null?this.cy=D.S():u},
R:function(a){var u
H.f(a,"$iz")
u=this.cy
if(u!=null)u.H(a)},
a3:function(){return this.R(null)},
aW:function(a){var u=this
if(u.a!=null)return!1
u.a=a
a.c.gdG().h(0,u.gbT())
u.a.c.geb().h(0,u.gbV())
u.a.c.gbE().h(0,u.gbX())
return!0},
bU:function(a){var u=this
H.f(a,"$iz")
if(!J.P(u.c,u.a.b.c))return
u.x=u.y=!0
u.z=u.b.d},
bW:function(a){var u,t,s,r,q,p,o,n=this
a=H.k(H.f(a,"$iz"),"$ibl")
if(!H.C(n.y))return
if(H.C(n.x)){u=a.d.p(0,a.y)
u=new V.T(u.a,u.b)
u=u.E(u)
t=n.r
if(typeof t!=="number")return H.q(t)
if(u<t)return
n.x=!1}if(H.C(n.d)){u=a.c
t=a.d.p(0,a.y)
u=new V.T(t.a,t.b).m(0,2).v(0,u.ga5())
n.Q=u
t=n.b
u=u.a
if(typeof u!=="number")return u.m()
s=n.e
if(typeof s!=="number")return H.q(s)
t.sT(u*10*s)}else{u=a.c
t=a.d
s=t.p(0,a.y)
r=new V.T(s.a,s.b).m(0,2).v(0,u.ga5())
s=n.b
q=r.a
if(typeof q!=="number")return q.S()
p=n.e
if(typeof p!=="number")return H.q(p)
o=n.z
if(typeof o!=="number")return H.q(o)
s.sY(0,-q*p+o)
n.b.sT(0)
t=t.p(0,a.z)
n.Q=new V.T(t.a,t.b).m(0,2).v(0,u.ga5())}n.a3()},
bY:function(a){var u,t,s,r=this
H.f(a,"$iz")
if(!H.C(r.y))return
r.y=!1
if(H.C(r.x))return
u=r.Q
if(u.E(u)>0.0001){u=r.b
t=r.Q.a
if(typeof t!=="number")return t.m()
s=r.e
if(typeof s!=="number")return H.q(s)
u.sT(t*10*s)
r.a3()}},
aP:function(a,b,c){var u,t,s,r=this,q=r.ch,p=b.e
if(typeof q!=="number")return q.U()
if(q<p){r.ch=p
u=b.y
r.b.ap(0,u)
q=r.b.d
t=Math.cos(q)
s=Math.sin(q)
r.cx=V.b2(t,-s,0,0,s,t,0,0,0,0,1,0,0,0,0,1)}return r.cx},
$iaa:1}
U.dZ.prototype={
gA:function(){var u=this.fx
return u==null?this.fx=D.S():u},
R:function(a){var u
H.f(a,"$iz")
u=this.fx
if(u!=null)u.H(a)},
a3:function(){return this.R(null)},
aW:function(a){var u,t,s=this
if(s.a!=null)return!1
s.a=a
a.c.gdG().h(0,s.gbT())
s.a.c.geb().h(0,s.gbV())
s.a.c.gbE().h(0,s.gbX())
u=s.a.d
t=u.f
u=t==null?u.f=D.S():t
u.h(0,s.gft())
u=s.a.d
t=u.d
u=t==null?u.d=D.S():t
u.h(0,s.gfv())
u=s.a.e
t=u.b
u=t==null?u.b=D.S():t
u.h(0,s.ghU())
u=s.a.e
t=u.d
u=t==null?u.d=D.S():t
u.h(0,s.ghS())
u=s.a.e
t=u.c
u=t==null?u.c=D.S():t
u.h(0,s.ghQ())
return!0},
al:function(a){var u=a.a,t=a.b
if(H.C(this.f)){if(typeof u!=="number")return u.S()
u=-u}if(H.C(this.r)){if(typeof t!=="number")return t.S()
t=-t}return new V.T(u,t)},
bU:function(a){var u=this
a=H.k(H.f(a,"$iz"),"$ibl")
if(!J.P(u.d,a.x.b))return
u.ch=u.cx=!0
u.cy=u.c.d
u.db=u.b.d},
bW:function(a){var u,t,s,r,q,p,o,n=this
a=H.k(H.f(a,"$iz"),"$ibl")
if(!H.C(n.cx))return
if(H.C(n.ch)){u=a.d.p(0,a.y)
u=new V.T(u.a,u.b)
u=u.E(u)
t=n.Q
if(typeof t!=="number")return H.q(t)
if(u<t)return
n.ch=!1}if(H.C(n.e)){u=a.c
t=a.d.p(0,a.y)
u=n.al(new V.T(t.a,t.b).m(0,2).v(0,u.ga5()))
n.dx=u
t=n.c
u=u.a
if(typeof u!=="number")return u.S()
s=n.y
if(typeof s!=="number")return H.q(s)
t.sT(-u*10*s)
s=n.b
u=n.dx.b
if(typeof u!=="number")return u.S()
t=n.x
if(typeof t!=="number")return H.q(t)
s.sT(-u*10*t)}else{u=a.c
t=a.d
s=t.p(0,a.y)
r=n.al(new V.T(s.a,s.b).m(0,2).v(0,u.ga5()))
s=n.c
q=r.a
if(typeof q!=="number")return q.S()
p=n.y
if(typeof p!=="number")return H.q(p)
o=n.cy
if(typeof o!=="number")return H.q(o)
s.sY(0,-q*p+o)
o=n.b
p=r.b
if(typeof p!=="number")return p.S()
q=n.x
if(typeof q!=="number")return H.q(q)
s=n.db
if(typeof s!=="number")return H.q(s)
o.sY(0,-p*q+s)
n.b.sT(0)
n.c.sT(0)
t=t.p(0,a.z)
n.dx=n.al(new V.T(t.a,t.b).m(0,2).v(0,u.ga5()))}n.a3()},
bY:function(a){var u,t,s,r=this
H.f(a,"$iz")
if(!H.C(r.cx))return
r.cx=!1
if(H.C(r.ch))return
u=r.dx
if(u.E(u)>0.0001){u=r.c
t=r.dx.a
if(typeof t!=="number")return t.S()
s=r.y
if(typeof s!=="number")return H.q(s)
u.sT(-t*10*s)
s=r.b
t=r.dx.b
if(typeof t!=="number")return t.S()
u=r.x
if(typeof u!=="number")return H.q(u)
s.sT(-t*10*u)
r.a3()}},
fu:function(a){var u=this
if(H.k(H.f(a,"$iz"),"$idr").x){u.ch=!0
u.cy=u.c.d
u.db=u.b.d}},
fw:function(a){var u,t,s,r,q,p,o,n=this
a=H.k(H.f(a,"$iz"),"$ibl")
if(!J.P(n.d,a.x.b))return
u=a.c
t=a.d
s=t.p(0,a.y)
r=n.al(new V.T(s.a,s.b).m(0,2).v(0,u.ga5()))
s=n.c
q=r.a
if(typeof q!=="number")return q.S()
p=n.y
if(typeof p!=="number")return H.q(p)
o=n.cy
if(typeof o!=="number")return H.q(o)
s.sY(0,-q*p+o)
o=n.b
p=r.b
if(typeof p!=="number")return p.S()
q=n.x
if(typeof q!=="number")return H.q(q)
s=n.db
if(typeof s!=="number")return H.q(s)
o.sY(0,-p*q+s)
n.b.sT(0)
n.c.sT(0)
t=t.p(0,a.z)
n.dx=n.al(new V.T(t.a,t.b).m(0,2).v(0,u.ga5()))
n.a3()},
hV:function(a){var u=this
H.f(a,"$iz")
u.ch=u.cx=!0
u.cy=u.c.d
u.db=u.b.d},
hT:function(a){var u,t,s,r,q,p,o,n=this
a=H.k(H.f(a,"$iz"),"$idS")
if(!H.C(n.cx))return
if(H.C(n.ch)){u=a.d.p(0,a.y)
u=new V.T(u.a,u.b)
u=u.E(u)
t=n.Q
if(typeof t!=="number")return H.q(t)
if(u<t)return
n.ch=!1}if(H.C(n.e)){u=a.c
t=a.d.p(0,a.y)
u=n.al(new V.T(t.a,t.b).m(0,2).v(0,u.ga5()))
n.dx=u
t=n.c
u=u.a
if(typeof u!=="number")return u.S()
s=n.y
if(typeof s!=="number")return H.q(s)
t.sT(-u*10*s)
s=n.b
u=n.dx.b
if(typeof u!=="number")return u.S()
t=n.x
if(typeof t!=="number")return H.q(t)
s.sT(-u*10*t)}else{u=a.c
t=a.d
s=t.p(0,a.y)
r=n.al(new V.T(s.a,s.b).m(0,2).v(0,u.ga5()))
s=n.c
q=r.a
if(typeof q!=="number")return q.S()
p=n.y
if(typeof p!=="number")return H.q(p)
o=n.cy
if(typeof o!=="number")return H.q(o)
s.sY(0,-q*p+o)
o=n.b
p=r.b
if(typeof p!=="number")return p.S()
q=n.x
if(typeof q!=="number")return H.q(q)
s=n.db
if(typeof s!=="number")return H.q(s)
o.sY(0,-p*q+s)
n.b.sT(0)
n.c.sT(0)
t=t.p(0,a.z)
n.dx=n.al(new V.T(t.a,t.b).m(0,2).v(0,u.ga5()))}n.a3()},
hR:function(a){var u,t,s,r=this
H.f(a,"$iz")
if(!H.C(r.cx))return
r.cx=!1
if(H.C(r.ch))return
u=r.dx
if(u.E(u)>0.0001){u=r.c
t=r.dx.a
if(typeof t!=="number")return t.S()
s=r.y
if(typeof s!=="number")return H.q(s)
u.sT(-t*10*s)
s=r.b
t=r.dx.b
if(typeof t!=="number")return t.S()
u=r.x
if(typeof u!=="number")return H.q(u)
s.sT(-t*10*u)
r.a3()}},
aP:function(a,b,c){var u,t,s,r=this,q=r.dy,p=b.e
if(typeof q!=="number")return q.U()
if(q<p){r.dy=p
u=b.y
r.c.ap(0,u)
r.b.ap(0,u)
q=r.b.d
t=Math.cos(q)
s=Math.sin(q)
q=V.b2(1,0,0,0,0,t,-s,0,0,s,t,0,0,0,0,1)
p=r.c.d
t=Math.cos(p)
s=Math.sin(p)
r.fr=q.m(0,V.b2(t,0,-s,0,0,1,0,0,s,0,t,0,0,0,0,1))}return r.fr},
$iaa:1}
U.e_.prototype={
gA:function(){var u=this.r
return u==null?this.r=D.S():u},
R:function(a){var u=this.r
if(u!=null)u.H(a)},
aW:function(a){var u,t,s,r=this
if(r.a!=null)return!1
r.a=a
u=a.c
t=u.e
u=t==null?u.e=D.S():t
t=r.gfz()
u.h(0,t)
u=r.a.d
s=u.e;(s==null?u.e=D.S():s).h(0,t)
return!0},
fA:function(a){var u,t,s,r,q=this
H.f(a,"$iz")
if(!J.P(q.b,q.a.b.c))return
H.k(a,"$icn")
u=q.d
t=a.x.b
s=q.c
if(typeof t!=="number")return t.m()
r=u+t*s
if(u!==r){q.d=r
u=new D.Q("zoom",u,r,[P.v])
u.b=!0
q.R(u)}},
aP:function(a,b,c){var u,t=this,s=t.e,r=b.e
if(s<r){t.e=r
u=Math.pow(10,t.d)
t.f=V.b2(u,0,0,0,0,u,0,0,0,0,u,0,0,0,0,1)}return t.f},
$iaa:1}
M.df.prototype={
aD:function(a){var u
H.f(a,"$iz")
u=this.x
if(u!=null)u.H(a)},
eR:function(){return this.aD(null)},
fO:function(a,b){var u,t,s,r,q,p,o,n=E.ak
H.l(b,"$ij",[n],"$aj")
for(u=b.length,t=this.gaC(),s={func:1,ret:-1,args:[D.z]},r=[s],q=0;q<b.length;b.length===u||(0,H.G)(b),++q){p=b[q]
if(p!=null){o=p.z
if(o==null){o=new D.bO()
o.sae(null)
o.saT(null)
o.c=null
o.d=0
p.z=o}H.m(t,s)
if(o.a==null)o.sae(H.e([],r))
o=o.a;(o&&C.a).h(o,t)}}n=new D.bS([n])
n.b=!0
this.aD(n)},
fQ:function(a,b){var u,t,s=E.ak
H.l(b,"$ij",[s],"$aj")
for(u=b.gX(b),t=this.gaC();u.D();)u.gL(u).gA().M(0,t)
s=new D.bT([s])
s.b=!0
this.aD(s)},
gA:function(){var u=this.x
return u==null?this.x=D.S():u},
aN:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=this
a.en(f.c)
u=f.b
u.toString
t=a.a
t.bindFramebuffer(36160,null)
t.enable(2884)
t.enable(2929)
t.depthFunc(513)
s=t.drawingBufferWidth
r=t.drawingBufferHeight
q=u.r
p=q.a
if(typeof s!=="number")return H.q(s)
o=C.e.ai(p*s)
p=q.b
if(typeof r!=="number")return H.q(r)
n=C.e.ai(p*r)
p=C.e.ai(q.c*s)
a.c=p
q=C.e.ai(q.d*r)
a.d=q
t.viewport(o,n,p,q)
t.clearDepth(u.c)
u=u.a
t.clearColor(u.a,u.b,u.c,u.d)
t.clear(16640)
u=f.a
t=a.c
q=a.d
p=u.c
m=u.d
l=u.e
k=l-m
j=1/Math.tan(p*0.5)
i=V.b2(-j/(t/q),0,0,0,0,j,0,0,0,0,l/k,-l*m/k,0,0,1,0)
u.a
a.cy.em(i)
t=$.lr
if(t==null){t=V.lt()
q=V.lN()
p=$.lJ
t=V.ln(t,q,p==null?$.lJ=new V.J(0,0,-1):p)
$.lr=t
h=t}else h=t
u=u.b
if(u!=null){g=u.a
if(g!=null)h=g.m(0,h)}a.db.em(h)
for(u=f.d.a,u=new J.ap(u,u.length,[H.w(u,0)]);u.D();)u.d.ap(0,a)
for(u=f.d.a,u=new J.ap(u,u.length,[H.w(u,0)]);u.D();)u.d.aN(a)
f.a.toString
a.cy.cH()
a.db.cH()
f.b.toString
a.el()},
sf8:function(a,b){this.d=H.l(b,"$ia1",[E.ak],"$aa1")},
$ioO:1}
A.d4.prototype={}
A.f3.prototype={
j:function(a,b){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<t;++s){r=u[s]
if(r.b===b)return r}return},
iK:function(){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<u.length;u.length===t||(0,H.G)(u),++s){r=u[s]
r.a.enableVertexAttribArray(r.c)}},
iG:function(){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<u.length;u.length===t||(0,H.G)(u),++s){r=u[s]
r.a.disableVertexAttribArray(r.c)}}}
A.h_.prototype={
eI:function(d2,d3){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7=this,a8="Required uniform value, ",a9=", was not defined or used in shader.",b0="emissionTxt",b1="nullEmissionTxt",b2="ambientTxt",b3="nullAmbientTxt",b4="diffuseTxt",b5="nullDiffuseTxt",b6="invDiffuseTxt",b7="nullInvDiffuseTxt",b8="specularTxt",b9="nullSpecularTxt",c0="nullBumpTxt",c1="reflectTxt",c2="nullReflectTxt",c3="refractTxt",c4="nullRefractTxt",c5="alphaTxt",c6="nullAlphaTxt",c7="uniform mat4 objMat;\n",c8="   if(nullAlphaTxt > 0) return alpha;\n",c9="   if (a <= 0.000001) discard;\n",d0="precision mediump float;\n\n",d1="precision mediump float;\n\nvarying vec3 normalVec;\n"
a7.z=d2
u=new P.ai("")
t=d2.fx
if(t){u.a=c7
s=c7}else s=""
r=d2.fy
s=(r?u.a=s+"uniform mat4 viewObjMat;\n":s)+"uniform mat4 projViewObjMat;\n"
u.a=s
s+="\n"
u.a=s
s=u.a=s+"attribute vec3 posAttr;\n"
q=d2.r1
if(q){s+="attribute vec3 normAttr;\n"
u.a=s}p=d2.r2
u.a=(p?u.a=s+"attribute vec3 binmAttr;\n":s)+"\n"
d2.i2(u)
d2.i9(u)
d2.i3(u)
d2.ij(u)
d2.ik(u)
d2.ib(u)
d2.ip(u)
s=u.a+="vec4 getPos()\n"
s+="{\n"
u.a=s
o=d2.x1
s+="   return projViewObjMat*vec4("+(o?"bendPos":"posAttr")+", 1.0);\n"
u.a=s
s+="}\n"
u.a=s
s+="\n"
u.a=s
s+="void main()\n"
u.a=s
s=u.a=s+"{\n"
if(o){s+="   setupBendData();\n"
u.a=s}if(q){s+="   normalVec = getNorm();\n"
u.a=s}if(p){s+="   binormalVec = getBinm();\n"
u.a=s}if(d2.rx){s+="   txt2D = getTxt2D();\n"
u.a=s}if(d2.ry){s+="   txtCube = getTxtCube();\n"
u.a=s}if(d2.k3){s+="   objPos = getObjPos();\n"
u.a=s}s=(d2.k4?u.a=s+"   viewPos = getViewPos();\n":s)+"   gl_Position = getPos();\n"
u.a=s
s+="}\n"
u.a=s
s=u.a=s+"\n"
n=s.charCodeAt(0)==0?s:s
s=a7.z
u=new P.ai("")
u.a="precision mediump float;\n"
u.a=d0
q=s.r1
if(q){u.a=d1
p=d1}else p=d0
if(s.r2){p+="varying vec3 binormalVec;\n"
u.a=p}if(s.rx){p+="varying vec2 txt2D;\n"
u.a=p}if(s.ry){p+="varying vec3 txtCube;\n"
u.a=p}if(s.k3){p+="varying vec3 objPos;\n"
u.a=p}p=u.a=(s.k4?u.a=p+"varying vec3 viewPos;\n":p)+"\n"
o=s.y2
if(o){p+="uniform mat4 colorMat;\n"
u.a=p}u.a=(s.fr?u.a=p+"uniform mat4 invViewMat;\n":p)+"\n"
s.i6(u)
s.i1(u)
s.i4(u)
s.i7(u)
s.ih(u)
p=s.dy
if(p){m=u.a+="// === Enviromental ===\n"
m+="\n"
u.a=m
m+="uniform samplerCube envSampler;\n"
u.a=m
m+="uniform int nullEnvTxt;\n"
u.a=m
u.a=m+"\n"
s.ie(u)
s.ig(u)}s.ia(u)
m=u.a+="// === Alpha ===\n"
m=u.a=m+"\n"
l=s.y
if(l!==C.d){m=u.a=m+"uniform float alpha;\n"
if(l!==C.j){m=u.a=m+"uniform int nullAlphaTxt;\n"
if(l===C.h){m+="uniform sampler2D alphaTxt;\n"
u.a=m}else if(l===C.i){m+="uniform samplerCube alphaTxt;\n"
u.a=m}}m=u.a=m+"\n"}m+="float alphaValue()\n"
u.a=m
m=u.a=m+"{\n"
switch(l){case C.d:m=u.a=m+"   return 1.0;\n"
break
case C.j:m=u.a=m+"   return alpha;\n"
break
case C.h:m+=c8
u.a=m
m+="   float a = alpha*texture2D(alphaTxt, txt2D).a;\n"
u.a=m
m+=c9
u.a=m
m=u.a=m+"   return a;\n"
break
case C.i:m+=c8
u.a=m
m+="   float a = alpha*textureCube(alphaTxt, txtCube).a;\n"
u.a=m
m+=c9
u.a=m
m=u.a=m+"   return a;\n"
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
k=H.e([],[P.h])
if(s.b!==C.d)C.a.h(k,"ambient()")
if(s.c!==C.d)C.a.h(k,"diffuse(norm, litVec)")
if(s.d!==C.d)C.a.h(k,"invDiffuse(norm, litVec)")
if(s.e!==C.d)C.a.h(k,"specular(norm, litVec)")
m=u.a+="   return litClr*("+C.a.C(k," + ")+");\n"
m+="}\n"
u.a=m
u.a=m+"\n"
s.i5(u)
s.ic(u)
s.ii(u)
s.il(u)
s.im(u)
s.io(u)
s.i8(u)}m=u.a+="// === Main ===\n"
m+="\n"
u.a=m
m+="void main()\n"
u.a=m
m+="{\n"
u.a=m
m=u.a=m+"   float alpha = alphaValue();\n"
q=q?u.a=m+"   vec3 norm = normal();\n":m
if(p)u.a=q+"   vec3 refl = reflect(normalize(viewPos), norm);\n"
j=H.e([],[P.h])
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
i="vec4("+C.a.C(j," + ")+", alpha);"
s=u.a
s=u.a=(o?u.a=s+("   gl_FragColor = colorMat*"+i+"\n"):u.a=s+("   gl_FragColor = "+i+"\n"))+"}\n"
a7.c=n
a7.d=s.charCodeAt(0)==0?s:s
a7.e=a7.dc(n,35633)
a7.f=a7.dc(a7.d,35632)
s=a7.a
q=s.createProgram()
a7.r=q
s.attachShader(q,a7.e)
s.attachShader(a7.r,a7.f)
s.linkProgram(a7.r)
if(!H.C(H.m9(s.getProgramParameter(a7.r,35714)))){h=s.getProgramInfoLog(a7.r)
s.deleteProgram(a7.r)
H.t(P.x("Failed to link shader: "+H.n(h)))}a7.hG()
a7.hI()
a7.Q=a7.x.j(0,"posAttr")
a7.cx=a7.x.j(0,"normAttr")
a7.ch=a7.x.j(0,"binmAttr")
a7.cy=a7.x.j(0,"txt2DAttr")
a7.db=a7.x.j(0,"txtCubeAttr")
a7.dx=a7.x.j(0,"bendAttr")
if(d2.fr)a7.id=H.k(a7.y.q(0,"invViewMat"),"$iaw")
if(t)a7.dy=H.k(a7.y.q(0,"objMat"),"$iaw")
if(r)a7.fr=H.k(a7.y.q(0,"viewObjMat"),"$iaw")
a7.fy=H.k(a7.y.q(0,"projViewObjMat"),"$iaw")
if(d2.x2)a7.k1=H.k(a7.y.q(0,"txt2DMat"),"$icC")
if(d2.y1)a7.k2=H.k(a7.y.q(0,"txtCubeMat"),"$iaw")
if(d2.y2)a7.k3=H.k(a7.y.q(0,"colorMat"),"$iaw")
a7.sf4(H.e([],[A.aw]))
t=d2.an
if(t>0){a7.k4=H.f(a7.y.q(0,"bendMatCount"),"$iM")
for(g=0;g<t;++g){s=a7.r1
r=a7.y
q="bendValues["+g+"].mat"
f=r.j(0,q)
if(f==null)H.t(P.x(a8+q+a9));(s&&C.a).h(s,H.k(f,"$iaw"))}}t=d2.a
if(t!==C.d){a7.r2=H.k(a7.y.q(0,"emissionClr"),"$iL")
switch(t){case C.d:break
case C.j:break
case C.h:a7.rx=H.k(a7.y.q(0,b0),"$iam")
a7.x1=H.k(a7.y.q(0,b1),"$iM")
break
case C.i:a7.ry=H.k(a7.y.q(0,b0),"$ian")
a7.x1=H.k(a7.y.q(0,b1),"$iM")
break}}t=d2.b
if(t!==C.d){a7.x2=H.k(a7.y.q(0,"ambientClr"),"$iL")
switch(t){case C.d:break
case C.j:break
case C.h:a7.y1=H.k(a7.y.q(0,b2),"$iam")
a7.an=H.k(a7.y.q(0,b3),"$iM")
break
case C.i:a7.y2=H.k(a7.y.q(0,b2),"$ian")
a7.an=H.k(a7.y.q(0,b3),"$iM")
break}}t=d2.c
if(t!==C.d){a7.ag=H.k(a7.y.q(0,"diffuseClr"),"$iL")
switch(t){case C.d:break
case C.j:break
case C.h:a7.bj=H.k(a7.y.q(0,b4),"$iam")
a7.bk=H.k(a7.y.q(0,b5),"$iM")
break
case C.i:a7.dH=H.k(a7.y.q(0,b4),"$ian")
a7.bk=H.k(a7.y.q(0,b5),"$iM")
break}}t=d2.d
if(t!==C.d){a7.bl=H.k(a7.y.q(0,"invDiffuseClr"),"$iL")
switch(t){case C.d:break
case C.j:break
case C.h:a7.dI=H.k(a7.y.q(0,b6),"$iam")
a7.bm=H.k(a7.y.q(0,b7),"$iM")
break
case C.i:a7.dJ=H.k(a7.y.q(0,b6),"$ian")
a7.bm=H.k(a7.y.q(0,b7),"$iM")
break}}t=d2.e
if(t!==C.d){a7.bp=H.k(a7.y.q(0,"shininess"),"$ia_")
a7.bn=H.k(a7.y.q(0,"specularClr"),"$iL")
switch(t){case C.d:break
case C.j:break
case C.h:a7.dK=H.k(a7.y.q(0,b8),"$iam")
a7.bo=H.k(a7.y.q(0,b9),"$iM")
break
case C.i:a7.dL=H.k(a7.y.q(0,b8),"$ian")
a7.bo=H.k(a7.y.q(0,b9),"$iM")
break}}switch(d2.f){case C.d:break
case C.j:break
case C.h:a7.dM=H.k(a7.y.q(0,"bumpTxt"),"$iam")
a7.bq=H.k(a7.y.q(0,c0),"$iM")
break
case C.i:a7.dN=H.k(a7.y.q(0,"bumpTxt"),"$ian")
a7.bq=H.k(a7.y.q(0,c0),"$iM")
break}if(d2.dy){a7.dO=H.k(a7.y.q(0,"envSampler"),"$ian")
a7.dP=H.k(a7.y.q(0,"nullEnvTxt"),"$iM")
t=d2.r
if(t!==C.d){a7.br=H.k(a7.y.q(0,"reflectClr"),"$iL")
switch(t){case C.d:break
case C.j:break
case C.h:a7.dQ=H.k(a7.y.q(0,c1),"$iam")
a7.bs=H.k(a7.y.q(0,c2),"$iM")
break
case C.i:a7.dR=H.k(a7.y.q(0,c1),"$ian")
a7.bs=H.k(a7.y.q(0,c2),"$iM")
break}}t=d2.x
if(t!==C.d){a7.bt=H.k(a7.y.q(0,"refraction"),"$ia_")
a7.bu=H.k(a7.y.q(0,"refractClr"),"$iL")
switch(t){case C.d:break
case C.j:break
case C.h:a7.dS=H.k(a7.y.q(0,c3),"$iam")
a7.bv=H.k(a7.y.q(0,c4),"$iM")
break
case C.i:a7.dT=H.k(a7.y.q(0,c3),"$ian")
a7.bv=H.k(a7.y.q(0,c4),"$iM")
break}}}t=d2.y
if(t!==C.d){a7.bw=H.k(a7.y.q(0,"alpha"),"$ia_")
switch(t){case C.d:break
case C.j:break
case C.h:a7.dU=H.k(a7.y.q(0,c5),"$iam")
a7.bx=H.k(a7.y.q(0,c6),"$iM")
break
case C.i:a7.dV=H.k(a7.y.q(0,c5),"$ian")
a7.bx=H.k(a7.y.q(0,c6),"$iM")
break}}a7.seS(H.e([],[A.cB]))
a7.seT(H.e([],[A.cD]))
a7.seU(H.e([],[A.cE]))
a7.seV(H.e([],[A.cF]))
a7.seW(H.e([],[A.cG]))
a7.seX(H.e([],[A.cH]))
if(d2.k2){t=d2.z
if(t>0){a7.dW=H.f(a7.y.q(0,"dirLightCount"),"$iM")
for(g=0;g<t;++g){s=a7.y
r="dirLights["+g+"].viewDir"
f=s.j(0,r)
if(f==null)H.t(P.x(a8+r+a9))
H.k(f,"$iL")
s=a7.y
r="dirLights["+g+"].color"
e=s.j(0,r)
if(e==null)H.t(P.x(a8+r+a9))
H.k(e,"$iL")
s=a7.cq;(s&&C.a).h(s,new A.cB(f,e))}}t=d2.Q
if(t>0){a7.dX=H.f(a7.y.q(0,"pntLightCount"),"$iM")
for(g=0;g<t;++g){s=a7.y
r="pntLights["+g+"].point"
f=s.j(0,r)
if(f==null)H.t(P.x(a8+r+a9))
H.k(f,"$iL")
s=a7.y
r="pntLights["+g+"].viewPnt"
e=s.j(0,r)
if(e==null)H.t(P.x(a8+r+a9))
H.k(e,"$iL")
s=a7.y
r="pntLights["+g+"].color"
d=s.j(0,r)
if(d==null)H.t(P.x(a8+r+a9))
H.k(d,"$iL")
s=a7.y
r="pntLights["+g+"].att0"
c=s.j(0,r)
if(c==null)H.t(P.x(a8+r+a9))
H.k(c,"$ia_")
s=a7.y
r="pntLights["+g+"].att1"
b=s.j(0,r)
if(b==null)H.t(P.x(a8+r+a9))
H.k(b,"$ia_")
s=a7.y
r="pntLights["+g+"].att2"
a=s.j(0,r)
if(a==null)H.t(P.x(a8+r+a9))
H.k(a,"$ia_")
s=a7.cr;(s&&C.a).h(s,new A.cD(f,e,d,c,b,a))}}t=d2.ch
if(t>0){a7.dY=H.f(a7.y.q(0,"spotLightCount"),"$iM")
for(g=0;g<t;++g){s=a7.y
r="spotLights["+g+"].objPnt"
f=s.j(0,r)
if(f==null)H.t(P.x(a8+r+a9))
H.k(f,"$iL")
s=a7.y
r="spotLights["+g+"].objDir"
e=s.j(0,r)
if(e==null)H.t(P.x(a8+r+a9))
H.k(e,"$iL")
s=a7.y
r="spotLights["+g+"].viewPnt"
d=s.j(0,r)
if(d==null)H.t(P.x(a8+r+a9))
H.k(d,"$iL")
s=a7.y
r="spotLights["+g+"].color"
c=s.j(0,r)
if(c==null)H.t(P.x(a8+r+a9))
H.k(c,"$iL")
s=a7.y
r="spotLights["+g+"].cutoff"
b=s.j(0,r)
if(b==null)H.t(P.x(a8+r+a9))
H.k(b,"$ia_")
s=a7.y
r="spotLights["+g+"].coneAngle"
a=s.j(0,r)
if(a==null)H.t(P.x(a8+r+a9))
H.k(a,"$ia_")
s=a7.y
r="spotLights["+g+"].att0"
a0=s.j(0,r)
if(a0==null)H.t(P.x(a8+r+a9))
H.k(a0,"$ia_")
s=a7.y
r="spotLights["+g+"].att1"
a1=s.j(0,r)
if(a1==null)H.t(P.x(a8+r+a9))
H.k(a1,"$ia_")
s=a7.y
r="spotLights["+g+"].att2"
a2=s.j(0,r)
if(a2==null)H.t(P.x(a8+r+a9))
H.k(a2,"$ia_")
s=a7.cs;(s&&C.a).h(s,new A.cE(f,e,d,c,b,a,a0,a1,a2))}}t=d2.cx
if(t>0){a7.dZ=H.f(a7.y.q(0,"txtDirLightCount"),"$iM")
for(g=0;g<t;++g){s=a7.y
r="txtDirLights["+g+"].objUp"
f=s.j(0,r)
if(f==null)H.t(P.x(a8+r+a9))
H.k(f,"$iL")
s=a7.y
r="txtDirLights["+g+"].objRight"
e=s.j(0,r)
if(e==null)H.t(P.x(a8+r+a9))
H.k(e,"$iL")
s=a7.y
r="txtDirLights["+g+"].objDir"
d=s.j(0,r)
if(d==null)H.t(P.x(a8+r+a9))
H.k(d,"$iL")
s=a7.y
r="txtDirLights["+g+"].viewDir"
c=s.j(0,r)
if(c==null)H.t(P.x(a8+r+a9))
H.k(c,"$iL")
s=a7.y
r="txtDirLights["+g+"].color"
b=s.j(0,r)
if(b==null)H.t(P.x(a8+r+a9))
H.k(b,"$iL")
s=a7.y
r="txtDirLights["+g+"].nullTxt"
a=s.j(0,r)
if(a==null)H.t(P.x(a8+r+a9))
H.k(a,"$iM")
s=a7.y
r="txtDirLightsTxt2D"+g
a0=s.j(0,r)
if(a0==null)H.t(P.x(a8+r+a9))
H.k(a0,"$iam")
s=a7.ct;(s&&C.a).h(s,new A.cF(f,e,d,c,b,a0,a))}}t=d2.cy
if(t>0){a7.e_=H.f(a7.y.q(0,"txtPntLightCount"),"$iM")
for(g=0;g<t;++g){s=a7.y
r="txtPntLights["+g+"].point"
f=s.j(0,r)
if(f==null)H.t(P.x(a8+r+a9))
H.k(f,"$iL")
s=a7.y
r="txtPntLights["+g+"].viewPnt"
e=s.j(0,r)
if(e==null)H.t(P.x(a8+r+a9))
H.k(e,"$iL")
s=a7.y
r="txtPntLights["+g+"].invViewRotMat"
d=s.j(0,r)
if(d==null)H.t(P.x(a8+r+a9))
H.k(d,"$icC")
s=a7.y
r="txtPntLights["+g+"].color"
c=s.j(0,r)
if(c==null)H.t(P.x(a8+r+a9))
H.k(c,"$iL")
s=a7.y
r="txtPntLights["+g+"].nullTxt"
b=s.j(0,r)
if(b==null)H.t(P.x(a8+r+a9))
H.k(b,"$iM")
s=a7.y
r="txtPntLights["+g+"].att0"
a=s.j(0,r)
if(a==null)H.t(P.x(a8+r+a9))
H.k(a,"$ia_")
s=a7.y
r="txtPntLights["+g+"].att1"
a0=s.j(0,r)
if(a0==null)H.t(P.x(a8+r+a9))
H.k(a0,"$ia_")
s=a7.y
r="txtPntLights["+g+"].att2"
a1=s.j(0,r)
if(a1==null)H.t(P.x(a8+r+a9))
H.k(a1,"$ia_")
s=a7.y
r="txtPntLightsTxtCube"+g
a2=s.j(0,r)
if(a2==null)H.t(P.x(a8+r+a9))
H.k(a2,"$ian")
s=a7.cu;(s&&C.a).h(s,new A.cG(f,e,d,c,a2,b,a,a0,a1))}}t=d2.db
if(t>0){a7.e0=H.f(a7.y.q(0,"txtSpotLightCount"),"$iM")
for(g=0;g<t;++g){s=a7.y
r="txtSpotLights["+g+"].objPnt"
f=s.j(0,r)
if(f==null)H.t(P.x(a8+r+a9))
H.k(f,"$iL")
s=a7.y
r="txtSpotLights["+g+"].objDir"
e=s.j(0,r)
if(e==null)H.t(P.x(a8+r+a9))
H.k(e,"$iL")
s=a7.y
r="txtSpotLights["+g+"].objUp"
d=s.j(0,r)
if(d==null)H.t(P.x(a8+r+a9))
H.k(d,"$iL")
s=a7.y
r="txtSpotLights["+g+"].objRight"
c=s.j(0,r)
if(c==null)H.t(P.x(a8+r+a9))
H.k(c,"$iL")
s=a7.y
r="txtSpotLights["+g+"].viewPnt"
b=s.j(0,r)
if(b==null)H.t(P.x(a8+r+a9))
H.k(b,"$iL")
s=a7.y
r="txtSpotLights["+g+"].nullTxt"
a=s.j(0,r)
if(a==null)H.t(P.x(a8+r+a9))
H.k(a,"$iM")
s=a7.y
r="txtSpotLights["+g+"].color"
a0=s.j(0,r)
if(a0==null)H.t(P.x(a8+r+a9))
H.k(a0,"$iL")
s=a7.y
r="txtSpotLights["+g+"].tuScalar"
a1=s.j(0,r)
if(a1==null)H.t(P.x(a8+r+a9))
H.k(a1,"$ia_")
s=a7.y
r="txtSpotLights["+g+"].tvScalar"
a2=s.j(0,r)
if(a2==null)H.t(P.x(a8+r+a9))
H.k(a2,"$ia_")
s=a7.y
r="txtSpotLights["+g+"].att0"
a3=s.j(0,r)
if(a3==null)H.t(P.x(a8+r+a9))
H.k(a3,"$ia_")
s=a7.y
r="txtSpotLights["+g+"].att1"
a4=s.j(0,r)
if(a4==null)H.t(P.x(a8+r+a9))
H.k(a4,"$ia_")
s=a7.y
r="txtSpotLights["+g+"].att2"
a5=s.j(0,r)
if(a5==null)H.t(P.x(a8+r+a9))
H.k(a5,"$ia_")
s=a7.y
r="txtSpotLightsTxt2D"+g
a6=s.j(0,r)
if(a6==null)H.t(P.x(a8+r+a9))
H.k(a6,"$iam")
s=a7.cv;(s&&C.a).h(s,new A.cH(f,e,d,c,b,a6,a,a0,a1,a2,a3,a4,a5))}}}},
af:function(a,b,c){C.c.a1(b.a,b.d,1)},
aa:function(a,b,c){C.c.a1(b.a,b.d,1)},
sf4:function(a){this.r1=H.l(a,"$ib",[A.aw],"$ab")},
seS:function(a){this.cq=H.l(a,"$ib",[A.cB],"$ab")},
seT:function(a){this.cr=H.l(a,"$ib",[A.cD],"$ab")},
seU:function(a){this.cs=H.l(a,"$ib",[A.cE],"$ab")},
seV:function(a){this.ct=H.l(a,"$ib",[A.cF],"$ab")},
seW:function(a){this.cu=H.l(a,"$ib",[A.cG],"$ab")},
seX:function(a){this.cv=H.l(a,"$ib",[A.cH],"$ab")}}
A.h2.prototype={
i2:function(a){var u,t,s,r=this
if(!r.x1)return
u=a.a+="struct BendingValue\n"
u+="{\n"
a.a=u
u+="   mat4 mat;\n"
a.a=u
u+="};\n"
a.a=u
a.a=u+"uniform int bendMatCount;\n"
u=a.a+="uniform BendingValue bendValues["+r.an+"];\n"
u+="attribute vec4 bendAttr;\n"
a.a=u
u+="\n"
a.a=u
u+="float weightSum;\n"
a.a=u
u=a.a=u+"vec3 bendPos;\n"
t=r.r1
if(t){u+="vec3 bendNorm;\n"
a.a=u}s=r.r2
u=(s?a.a=u+"vec3 bendBinm;\n":u)+"\n"
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
u=a.a=u+"         bendPos += (m*vec4(posAttr, 1.0)).xyz*weight;\n"
if(t){u+="         bendNorm += (m*vec4(normAttr, 0.0)).xyz*weight;\n"
a.a=u}u=(s?a.a=u+"         bendBinm += (m*vec4(binmAttr, 0.0)).xyz*weight;\n":u)+"      }\n"
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
u=a.a=u+"   bendPos = vec3(0.0, 0.0, 0.0);\n"
if(t){u+="   bendNorm = vec3(0.0, 0.0, 0.0);\n"
a.a=u}u=(s?a.a=u+"   bendBinm = vec3(0.0, 0.0, 0.0);\n":u)+"   weightSum = 0.0;\n"
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
u=a.a=u+"      bendPos += posAttr*weight;\n"
if(t){u+="      bendNorm += normAttr*weight;\n"
a.a=u}u=(s?a.a=u+"      bendBinm += binmAttr*weight;\n":u)+"   }\n"
a.a=u
u+="   else\n"
a.a=u
u+="   {\n"
a.a=u
u+="      bendPos = bendPos/weightSum;\n"
a.a=u
u=a.a=u+"   }\n"
if(t){u+="   bendNorm = normalize(bendNorm);\n"
a.a=u}u=(s?a.a=u+"   bendBinm = normalize(bendBinm);\n":u)+"}\n"
a.a=u
a.a=u+"\n"},
i9:function(a){var u
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
i3:function(a){var u
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
ij:function(a){var u,t
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
t=a.a=t+"{\n"
t=(u?a.a=t+"   return (txt2DMat*vec3(txt2DAttr, 1.0)).xy;\n":a.a=t+"   return vec3(txt2DAttr, 1.0).xy;\n")+"}\n"
a.a=t
a.a=t+"\n"},
ik:function(a){var u,t
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
t=a.a=t+"{\n"
t=(u?a.a=t+"   return (txtCubeMat*vec4(txtCubeAttr, 1.0)).xyz;\n":a.a=t+"   return vec4(txtCubeAttr, 1.0).xyz;\n")+"}\n"
a.a=t
a.a=t+"\n"},
ib:function(a){var u
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
ip:function(a){var u
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
as:function(a,b,c){var u
if(b===C.d)return
u=a.a+="uniform vec3 "+c+"Clr;\n"
if(b===C.j)return
if(0>=c.length)return H.d(c,0)
u=a.a=u+("uniform int null"+(c[0].toUpperCase()+C.b.az(c,1))+"Txt;\n")
if(b===C.h)a.a=u+("uniform sampler2D "+c+"Txt;\n")
else if(b===C.i)a.a=u+("uniform samplerCube "+c+"Txt;\n")},
i6:function(a){var u,t="   if(nullEmissionTxt > 0) return emissionClr;\n",s=this.a
if(s===C.d)return
u=a.a+="// === Emission ===\n"
a.a=u+"\n"
this.as(a,s,"emission")
u=a.a+="\n"
u+="vec3 emission()\n"
a.a=u
u=a.a=u+"{\n"
switch(s){case C.d:s=u
break
case C.j:s=a.a=u+"   return emissionClr;\n"
break
case C.h:s=u+t
a.a=s
s=a.a=s+"   return emissionClr*texture2D(emissionTxt, txt2D).rgb;\n"
break
case C.i:s=u+t
a.a=s
s=a.a=s+"   return emissionClr*textureCube(emissionTxt, txtCube).rgb;\n"
break
default:s=u}s+="}\n"
a.a=s
a.a=s+"\n"},
i1:function(a){var u,t="   if(nullAmbientTxt > 0) return ambientClr;\n",s=this.b
if(s===C.d)return
u=a.a+="// === Ambient ===\n"
a.a=u+"\n"
this.as(a,s,"ambient")
u=a.a+="\n"
u+="vec3 ambient()\n"
a.a=u
u=a.a=u+"{\n"
switch(s){case C.d:s=u
break
case C.j:s=a.a=u+"   return ambientClr;\n"
break
case C.h:s=u+t
a.a=s
s=a.a=s+"   return ambientClr*texture2D(ambientTxt, txt2D).rgb;\n"
break
case C.i:s=u+t
a.a=s
s=a.a=s+"   return ambientClr*textureCube(ambientTxt, txtCube).rgb;\n"
break
default:s=u}s+="}\n"
a.a=s
a.a=s+"\n"},
i4:function(a){var u,t="   if(nullDiffuseTxt > 0) diffuseColor = diffuseClr;\n",s=this.c
if(s===C.d)return
u=a.a+="// === Diffuse ===\n"
a.a=u+"\n"
this.as(a,s,"diffuse")
u=a.a+="vec3 diffuseColor;\n"
u+="\n"
a.a=u
u+="void setDiffuseColor()\n"
a.a=u
u=a.a=u+"{\n"
switch(s){case C.d:s=u
break
case C.j:s=a.a=u+"   diffuseColor = diffuseClr;\n"
break
case C.h:s=u+t
a.a=s
s=a.a=s+"   else diffuseColor = diffuseClr*texture2D(diffuseTxt, txt2D).rgb;\n"
break
case C.i:s=u+t
a.a=s
s=a.a=s+"   else diffuseColor = diffuseClr*textureCube(diffuseTxt, txtCube).rgb;\n"
break
default:s=u}s+="}\n"
a.a=s
s+="\n"
a.a=s
s+="vec3 diffuse(vec3 norm, vec3 litVec)\n"
a.a=s
s+="{\n"
a.a=s
s+="   float scalar = dot(norm, -litVec);\n"
a.a=s
s+="   if(scalar < 0.0) return vec3(0.0, 0.0, 0.0);\n"
a.a=s
s+="   return diffuseColor*scalar;\n"
a.a=s
s+="}\n"
a.a=s
a.a=s+"\n"},
i7:function(a){var u,t="   if(nullInvDiffuseTxt > 0) invDiffuseColor = invDiffuseClr;\n",s=this.d
if(s===C.d)return
u=a.a+="// === Inverse Diffuse ===\n"
a.a=u+"\n"
this.as(a,s,"invDiffuse")
u=a.a+="vec3 invDiffuseColor;\n"
u+="\n"
a.a=u
u+="void setInvDiffuseColor()\n"
a.a=u
u=a.a=u+"{\n"
switch(s){case C.d:s=u
break
case C.j:s=a.a=u+"   invDiffuseColor = invDiffuseClr;\n"
break
case C.h:s=u+t
a.a=s
s=a.a=s+"   else invDiffuseColor = invDiffuseClr*texture2D(invDiffuseTxt, txt2D).rgb;\n"
break
case C.i:s=u+t
a.a=s
s=a.a=s+"   else invDiffuseColor = invDiffuseClr*textureCube(invDiffuseTxt, txtCube).rgb;\n"
break
default:s=u}s+="}\n"
a.a=s
s+="\n"
a.a=s
s+="vec3 invDiffuse(vec3 norm, vec3 litVec)\n"
a.a=s
s+="{\n"
a.a=s
s+="   float scalar = 1.0 - clamp(dot(norm, -litVec), 0.0, 1.0);\n"
a.a=s
s+="   if(scalar < 0.0) return vec3(0.0, 0.0, 0.0);\n"
a.a=s
s+="   return invDiffuseColor*scalar;\n"
a.a=s
s+="}\n"
a.a=s
a.a=s+"\n"},
ih:function(a){var u,t="   if(nullSpecularTxt > 0) specularColor = specularClr;\n",s=this.e
if(s===C.d)return
u=a.a+="// === Specular ===\n"
a.a=u+"\n"
this.as(a,s,"specular")
u=a.a+="uniform float shininess;\n"
u+="vec3 specularColor;\n"
a.a=u
u+="\n"
a.a=u
u+="void setSpecularColor()\n"
a.a=u
u=a.a=u+"{\n"
switch(s){case C.d:s=u
break
case C.j:s=a.a=u+"   specularColor = specularClr;\n"
break
case C.h:s=u+t
a.a=s
s=a.a=s+"   else specularColor = specularClr*texture2D(specularTxt, txt2D).rgb;\n"
break
case C.i:s=u+t
a.a=s
s=a.a=s+"   else specularColor = specularClr*textureCube(specularTxt, txtCube).rgb;\n"
break
default:s=u}s+="}\n"
a.a=s
s+="\n"
a.a=s
s+="vec3 specular(vec3 norm, vec3 litVec)\n"
a.a=s
s+="{\n"
a.a=s
s+="   if(dot(norm, -litVec) < 0.0) return vec3(0.0, 0.0, 0.0);\n"
a.a=s
s+="   vec3 lightRef = normalize(reflect(litVec, norm));\n"
a.a=s
s+="   float scalar = dot(lightRef, -normalize(viewPos));\n"
a.a=s
s+="   if(scalar < 0.0) return vec3(0.0, 0.0, 0.0);\n"
a.a=s
s+="   return specularColor*pow(scalar, shininess);\n"
a.a=s
s+="}\n"
a.a=s
a.a=s+"\n"},
ia:function(a){var u,t,s="uniform int nullBumpTxt;\n",r="   return normalize(normalVec);\n",q="   if(nullBumpTxt > 0) return normalVec;\n",p="   vec3 n = normalize(normalVec);\n",o="   vec3 b = normalize(binormalVec);\n",n="   b = cross(n, c);\n",m="   mat3 mat = mat3( b.x,  b.y,  b.z,\n",l="                   -c.x, -c.y, -c.z,\n",k="                    n.x,  n.y,  n.z);\n",j="   return mat * normalize(2.0*color - 1.0);\n"
if(!this.r1)return
u=a.a+="// === Normal ===\n"
u=a.a=u+"\n"
t=this.f
switch(t){case C.d:break
case C.j:break
case C.h:u+="uniform sampler2D bumpTxt;\n"
a.a=u
u+=s
a.a=u
u=a.a=u+"\n"
break
case C.i:u+="uniform samplerCube bumpTxt;\n"
a.a=u
u+=s
a.a=u
u=a.a=u+"\n"
break}u+="vec3 normal()\n"
a.a=u
u=a.a=u+"{\n"
switch(t){case C.d:u=a.a=u+r
break
case C.j:u=a.a=u+r
break
case C.h:u+=q
a.a=u
u+="   vec3 color = texture2D(bumpTxt, txt2D).rgb;\n"
a.a=u
u+=p
a.a=u
u+=o
a.a=u
u+="   vec3 c = normalize(cross(b, n));\n"
a.a=u
u+=n
a.a=u
u+=m
a.a=u
u+=l
a.a=u
u+=k
a.a=u
u=a.a=u+j
break
case C.i:u+=q
a.a=u
u+="   vec3 color = textureCube(bumpTxt, txtCube).rgb;\n"
a.a=u
u+=p
a.a=u
u+=o
a.a=u
u+="   vec3 c = cross(b, n);\n"
a.a=u
u+=n
a.a=u
u+=m
a.a=u
u+=l
a.a=u
u+=k
a.a=u
u=a.a=u+j
break}u+="}\n"
a.a=u
a.a=u+"\n"},
ie:function(a){var u,t="   if(nullReflectTxt > 0) return vec3(0.0, 0.0, 0.0);\n",s=this.r
if(s===C.d)return
u=a.a+="// === Reflection ===\n"
a.a=u+"\n"
this.as(a,s,"reflect")
u=a.a+="\n"
u+="vec3 reflect(vec3 refl)\n"
a.a=u
u+="{\n"
a.a=u
u=a.a=u+"   if(nullEnvTxt > 0) return vec3(0.0, 0.0, 0.0);\n"
switch(s){case C.d:s=u
break
case C.j:s=a.a=u+"   vec3 scalar = reflectClr;\n"
break
case C.h:s=u+t
a.a=s
s=a.a=s+"   vec3 scalar = reflectClr*texture2D(reflectTxt, txt2D).rgb;\n"
break
case C.i:s=u+t
a.a=s
s=a.a=s+"   vec3 scalar = reflectClr*textureCube(reflectTxt, txtCube).rgb;\n"
break
default:s=u}s+="   vec3 invRefl = vec3(invViewMat*vec4(refl, 0.0));\n"
a.a=s
s+="   return scalar*textureCube(envSampler, invRefl).rgb;\n"
a.a=s
s+="}\n"
a.a=s
a.a=s+"\n"},
ig:function(a){var u,t="   if(nullRefractTxt > 0) return vec3(0.0, 0.0, 0.0);\n",s=this.x
if(s===C.d)return
u=a.a+="// === Refraction ===\n"
a.a=u+"\n"
this.as(a,s,"refract")
u=a.a+="uniform float refraction;\n"
u+="\n"
a.a=u
u+="vec3 refract(vec3 refl)\n"
a.a=u
u+="{\n"
a.a=u
u=a.a=u+"   if(nullEnvTxt > 0) return vec3(0.0, 0.0, 0.0);\n"
switch(s){case C.d:s=u
break
case C.j:s=a.a=u+"   vec3 scalar = refractClr;\n"
break
case C.h:s=u+t
a.a=s
s=a.a=s+"   vec3 scalar = refractClr*texture2D(refractTxt, txt2D).rgb;\n"
break
case C.i:s=u+t
a.a=s
s=a.a=s+"   vec3 scalar = refractClr*textureCube(refractTxt, txtCube).rgb;\n"
break
default:s=u}s+="   vec3 refr = mix(-refl, viewPos, refraction);\n"
a.a=s
s+="   vec3 invRefr = vec3(invViewMat*vec4(refr, 0.0));\n"
a.a=s
s+="   return scalar*textureCube(envSampler, invRefr).rgb;\n"
a.a=s
s+="}\n"
a.a=s
a.a=s+"\n"},
i5:function(a){var u,t=this.z
if(t<=0)return
u=a.a+="// === Directional Light ===\n"
u+="\n"
a.a=u
u+="struct DirLight\n"
a.a=u
u+="{\n"
a.a=u
u+="   vec3 viewDir;\n"
a.a=u
u+="   vec3 color;\n"
a.a=u
u+="};\n"
a.a=u
u+="\n"
a.a=u
a.a=u+"uniform int dirLightCount;\n"
u=a.a+="uniform DirLight dirLights["+t+"];\n"
u+="\n"
a.a=u
u+="vec3 allDirLightValues(vec3 norm)\n"
a.a=u
u+="{\n"
a.a=u
a.a=u+"   vec3 lightAccum = vec3(0.0, 0.0, 0.0);\n"
t=a.a+="   for(int i = 0; i < "+t+"; ++i)\n"
t+="   {\n"
a.a=t
t+="      if(i >= dirLightCount) break;\n"
a.a=t
t+="      DirLight lit = dirLights[i];\n"
a.a=t
t+="      lightAccum += lightValue(norm, lit.color, lit.viewDir);\n"
a.a=t
t+="   }\n"
a.a=t
t+="   return lightAccum;\n"
a.a=t
t+="}\n"
a.a=t
a.a=t+"\n"},
ic:function(a){var u,t=this.Q
if(t<=0)return
u=a.a+="// === Point Light ===\n"
u+="\n"
a.a=u
u+="struct PointLight\n"
a.a=u
u+="{\n"
a.a=u
u+="   vec3 point;\n"
a.a=u
u+="   vec3 viewPnt;\n"
a.a=u
u+="   vec3 color;\n"
a.a=u
u+="   float att0;\n"
a.a=u
u+="   float att1;\n"
a.a=u
u+="   float att2;\n"
a.a=u
u+="};\n"
a.a=u
u+="\n"
a.a=u
a.a=u+"uniform int pntLightCount;\n"
u=a.a+="uniform PointLight pntLights["+t+"];\n"
u+="\n"
a.a=u
u+="vec3 pointLightValue(vec3 norm, PointLight lit)\n"
a.a=u
u+="{\n"
a.a=u
u+="   float dist = length(objPos - lit.point);\n"
a.a=u
u+="   float attenuation = 1.0/(lit.att0 + (lit.att1 + lit.att2*dist)*dist);\n"
a.a=u
u+="   if(attenuation <= 0.005) return vec3(0.0, 0.0, 0.0);\n"
a.a=u
u+="   return lightValue(norm, lit.color*attenuation, normalize(viewPos - lit.viewPnt));\n"
a.a=u
u+="}\n"
a.a=u
u+="\n"
a.a=u
u+="vec3 allPointLightValues(vec3 norm)\n"
a.a=u
u+="{\n"
a.a=u
a.a=u+"   vec3 lightAccum = vec3(0.0, 0.0, 0.0);\n"
t=a.a+="   for(int i = 0; i < "+t+"; ++i)\n"
t+="   {\n"
a.a=t
t+="      if(i >= pntLightCount) break;\n"
a.a=t
t+="      lightAccum += pointLightValue(norm, pntLights[i]);\n"
a.a=t
t+="   }\n"
a.a=t
t+="   return lightAccum;\n"
a.a=t
t+="}\n"
a.a=t
a.a=t+"\n"},
ii:function(a){var u,t=this.ch
if(t<=0)return
u=a.a+="// === Spot Light ===\n"
u+="\n"
a.a=u
u+="struct SpotLight\n"
a.a=u
u+="{\n"
a.a=u
u+="   vec3 objPnt;\n"
a.a=u
u+="   vec3 objDir;\n"
a.a=u
u+="   vec3 viewPnt;\n"
a.a=u
u+="   vec3 color;\n"
a.a=u
u+="   float cutoff;\n"
a.a=u
u+="   float coneAngle;\n"
a.a=u
u+="   float att0;\n"
a.a=u
u+="   float att1;\n"
a.a=u
u+="   float att2;\n"
a.a=u
u+="};\n"
a.a=u
u+="\n"
a.a=u
a.a=u+"uniform int spotLightCount;\n"
u=a.a+="uniform SpotLight spotLights["+t+"];\n"
u+="\n"
a.a=u
u+="vec3 spotLightValue(vec3 norm, SpotLight lit)\n"
a.a=u
u+="{\n"
a.a=u
u+="   vec3 dir = objPos - lit.objPnt;\n"
a.a=u
u+="   float dist = length(dir);\n"
a.a=u
u+="   float attenuation = 1.0/(lit.att0 + (lit.att1 + lit.att2*dist)*dist);\n"
a.a=u
u+="   if(attenuation <= 0.005) return vec3(0.0, 0.0, 0.0);\n"
a.a=u
u+="   float angle = acos(dot(normalize(dir), lit.objDir));\n"
a.a=u
u+="   float scale = (lit.cutoff-angle)/(lit.cutoff-lit.coneAngle);\n"
a.a=u
u+="   if(scale <= 0.0) return vec3(0.0, 0.0, 0.0);\n"
a.a=u
u+="   if(scale > 1.0) scale = 1.0;\n"
a.a=u
u+="   return lightValue(norm, lit.color*attenuation*scale, normalize(viewPos - lit.viewPnt));\n"
a.a=u
u+="}\n"
a.a=u
u+="\n"
a.a=u
u+="vec3 allSpotLightValues(vec3 norm)\n"
a.a=u
u+="{\n"
a.a=u
a.a=u+"   vec3 lightAccum = vec3(0.0, 0.0, 0.0);\n"
t=a.a+="   for(int i = 0; i < "+t+"; ++i)\n"
t+="   {\n"
a.a=t
t+="      if(i >= spotLightCount) break;\n"
a.a=t
t+="      lightAccum += spotLightValue(norm, spotLights[i]);\n"
a.a=t
t+="   }\n"
a.a=t
t+="   return lightAccum;\n"
a.a=t
t+="}\n"
a.a=t
a.a=t+"\n"},
il:function(a){var u,t,s=this.cx
if(s<=0)return
u=a.a+="// === Texture Directional Light ===\n"
u+="\n"
a.a=u
u+="struct TexturedDirLight\n"
a.a=u
u+="{\n"
a.a=u
u+="   vec3 objUp;\n"
a.a=u
u+="   vec3 objRight;\n"
a.a=u
u+="   vec3 objDir;\n"
a.a=u
u+="   vec3 viewDir;\n"
a.a=u
u+="   vec3 color;\n"
a.a=u
u+="   int nullTxt;\n"
a.a=u
u+="};\n"
a.a=u
u+="\n"
a.a=u
a.a=u+"uniform int txtDirLightCount;\n"
u=a.a+="uniform TexturedDirLight txtDirLights["+s+"];\n"
for(t=0;t<s;++t)u=a.a+="uniform sampler2D txtDirLightsTxt2D"+t+";\n"
u+="\n"
a.a=u
u+="vec3 txtDirLightValue(vec3 norm, TexturedDirLight lit, sampler2D txt2D)\n"
a.a=u
u+="{\n"
a.a=u
u+="   vec3 color;\n"
a.a=u
u+="   if(lit.nullTxt > 0) color = lit.color;\n"
a.a=u
u+="   else\n"
a.a=u
u+="   {\n"
a.a=u
u+="      vec3 offset = objPos + lit.objDir*dot(objPos, lit.objDir);\n"
a.a=u
u+="      float tu = dot(offset, lit.objUp);\n"
a.a=u
u+="      float tv = dot(offset, lit.objRight);\n"
a.a=u
u+="      color = lit.color*texture2D(txt2D, vec2(tu, tv)).xyz;\n"
a.a=u
u+="   }\n"
a.a=u
u+="   return lightValue(norm, color, lit.viewDir);\n"
a.a=u
u+="}\n"
a.a=u
u+="\n"
a.a=u
u+="vec3 allTxtDirLightValues(vec3 norm)\n"
a.a=u
u+="{\n"
a.a=u
u=a.a=u+"   vec3 lightAccum = vec3(0.0, 0.0, 0.0);\n"
for(t=0;t<s;++t){a.a+="   if(txtDirLightCount <= "+t+") return lightAccum;\n"
u=a.a+="   lightAccum += txtDirLightValue(norm, txtDirLights["+t+"], txtDirLightsTxt2D"+t+");\n"}s=u+"   return lightAccum;\n"
a.a=s
s+="}\n"
a.a=s
a.a=s+"\n"},
im:function(a){var u,t,s=this.cy
if(s<=0)return
u=a.a+="// === Texture Point Light ===\n"
u+="\n"
a.a=u
u+="struct TexturedPointLight\n"
a.a=u
u+="{\n"
a.a=u
u+="   vec3 point;\n"
a.a=u
u+="   vec3 viewPnt;\n"
a.a=u
u+="   mat3 invViewRotMat;\n"
a.a=u
u+="   vec3 color;\n"
a.a=u
u+="   int nullTxt;\n"
a.a=u
u+="   float att0;\n"
a.a=u
u+="   float att1;\n"
a.a=u
u+="   float att2;\n"
a.a=u
u+="};\n"
a.a=u
u+="\n"
a.a=u
a.a=u+"uniform int txtPntLightCount;\n"
u=a.a+="uniform TexturedPointLight txtPntLights["+s+"];\n"
for(t=0;t<s;++t)u=a.a+="uniform samplerCube txtPntLightsTxtCube"+t+";\n"
u+="\n"
a.a=u
u+="vec3 txtPointLightValue(vec3 norm, TexturedPointLight lit, samplerCube txtCube)\n"
a.a=u
u+="{\n"
a.a=u
u+="   float dist = length(objPos - lit.point);\n"
a.a=u
u+="   float attenuation = 1.0/(lit.att0 + (lit.att1 + lit.att2*dist)*dist);\n"
a.a=u
u+="   if(attenuation <= 0.005) return vec3(0.0, 0.0, 0.0);\n"
a.a=u
u+="   vec3 normDir = normalize(viewPos - lit.viewPnt);\n"
a.a=u
u+="   vec3 color;\n"
a.a=u
u+="   if(lit.nullTxt > 0) color = lit.color;\n"
a.a=u
u+="   else\n"
a.a=u
u+="   {\n"
a.a=u
u+="      vec3 invNormDir = lit.invViewRotMat*normDir;\n"
a.a=u
u+="      color = lit.color*textureCube(txtCube, invNormDir).xyz;\n"
a.a=u
u+="   }\n"
a.a=u
u+="   return lightValue(norm, attenuation*color, normDir);\n"
a.a=u
u+="}\n"
a.a=u
u+="\n"
a.a=u
u+="vec3 allTxtPointLightValues(vec3 norm)\n"
a.a=u
u+="{\n"
a.a=u
u=a.a=u+"   vec3 lightAccum = vec3(0.0, 0.0, 0.0);\n"
for(t=0;t<s;++t){a.a+="   if(txtPntLightCount <= "+t+") return lightAccum;\n"
u=a.a+="   lightAccum += txtPointLightValue(norm, txtPntLights["+t+"], txtPntLightsTxtCube"+t+");\n"}s=u+"   return lightAccum;\n"
a.a=s
s+="}\n"
a.a=s
a.a=s+"\n"},
io:function(a){var u,t,s=this.db
if(s<=0)return
u=a.a+="// === Texture Spot Light ===\n"
u+="\n"
a.a=u
u+="struct TexturedSpotLight\n"
a.a=u
u+="{\n"
a.a=u
u+="   vec3 objPnt;\n"
a.a=u
u+="   vec3 objDir;\n"
a.a=u
u+="   vec3 objUp;\n"
a.a=u
u+="   vec3 objRight;\n"
a.a=u
u+="   vec3 viewPnt;\n"
a.a=u
u+="   int nullTxt;\n"
a.a=u
u+="   vec3 color;\n"
a.a=u
u+="   float tuScalar;\n"
a.a=u
u+="   float tvScalar;\n"
a.a=u
u+="   float att0;\n"
a.a=u
u+="   float att1;\n"
a.a=u
u+="   float att2;\n"
a.a=u
u+="};\n"
a.a=u
u+="\n"
a.a=u
a.a=u+"uniform int txtSpotLightCount;\n"
u=a.a+="uniform TexturedSpotLight txtSpotLights["+s+"];\n"
for(t=0;t<s;++t)u=a.a+="uniform sampler2D txtSpotLightsTxt2D"+t+";\n"
u+="\n"
a.a=u
u+="vec3 txtSpotLightValue(vec3 norm, TexturedSpotLight lit, sampler2D txt2D)\n"
a.a=u
u+="{\n"
a.a=u
u+="   vec3 dir = objPos - lit.objPnt;\n"
a.a=u
u+="   float dist = length(dir);\n"
a.a=u
u+="   float attenuation = 1.0/(lit.att0 + (lit.att1 + lit.att2*dist)*dist);\n"
a.a=u
u+="   if(attenuation <= 0.005) return vec3(0.0, 0.0, 0.0);\n"
a.a=u
u+="   vec3 normDir = normalize(dir);\n"
a.a=u
u+="   float zScale = dot(normDir, lit.objDir);\n"
a.a=u
u+="   if(zScale < 0.0) return vec3(0.0, 0.0, 0.0);\n"
a.a=u
u+="   normDir = normDir/zScale;\n"
a.a=u
u+="   vec3 color;\n"
a.a=u
u+="   if(lit.nullTxt > 0) color = lit.color;\n"
a.a=u
u+="   else\n"
a.a=u
u+="   {\n"
a.a=u
u+="      float tu = dot(normDir, lit.objUp)*lit.tuScalar+0.5;\n"
a.a=u
u+="      if((tu > 1.0) || (tu < 0.0)) return vec3(0.0, 0.0, 0.0);\n"
a.a=u
u+="      float tv = dot(normDir, lit.objRight)*lit.tvScalar+0.5;\n"
a.a=u
u+="      if((tv > 1.0) || (tv < 0.0)) return vec3(0.0, 0.0, 0.0);\n"
a.a=u
u+="      color = lit.color*texture2D(txt2D, vec2(tu, tv)).xyz;\n"
a.a=u
u+="   }\n"
a.a=u
u+="   return lightValue(norm, color*attenuation, normalize(viewPos - lit.viewPnt));\n"
a.a=u
u+="}\n"
a.a=u
u+="\n"
a.a=u
u+="vec3 allTxtSpotLightValues(vec3 norm)\n"
a.a=u
u+="{\n"
a.a=u
u=a.a=u+"   vec3 lightAccum = vec3(0.0, 0.0, 0.0);\n"
for(t=0;t<s;++t){a.a+="   if(txtSpotLightCount <= "+t+") return lightAccum;\n"
u=a.a+="   lightAccum += txtSpotLightValue(norm, txtSpotLights["+t+"], txtSpotLightsTxt2D"+t+");\n"}s=u+"   return lightAccum;\n"
a.a=s
s+="}\n"
a.a=s
a.a=s+"\n"},
i8:function(a){var u
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
i:function(a){return this.ag}}
A.cB.prototype={}
A.cF.prototype={}
A.cD.prototype={}
A.cG.prototype={}
A.cE.prototype={}
A.cH.prototype={}
A.cu.prototype={
eL:function(a,b){var u=this
u.y=u.x=u.r=u.f=u.e=u.d=u.c=null},
dc:function(a,b){var u,t=this.a,s=t.createShader(b)
t.shaderSource(s,a)
t.compileShader(s)
if(!H.C(H.m9(t.getShaderParameter(s,35713)))){u=t.getShaderInfoLog(s)
t.deleteShader(s)
throw H.c(P.x("Error compiling shader '"+H.n(s)+"': "+H.n(u)))}return s},
hG:function(){var u,t,s,r=this,q=H.e([],[A.d4]),p=r.a,o=H.ae(p.getProgramParameter(r.r,35721))
if(typeof o!=="number")return H.q(o)
u=0
for(;u<o;++u){t=p.getActiveAttrib(r.r,u)
s=p.getAttribLocation(r.r,t.name)
C.a.h(q,new A.d4(p,t.name,s))}r.x=new A.f3(q)},
hI:function(){var u,t,s,r=this,q=H.e([],[A.dT]),p=r.a,o=H.ae(p.getProgramParameter(r.r,35718))
if(typeof o!=="number")return H.q(o)
u=0
for(;u<o;++u){t=p.getActiveUniform(r.r,u)
s=p.getUniformLocation(r.r,t.name)
C.a.h(q,r.iD(t.type,t.size,t.name,s))}r.y=new A.il(q)},
aF:function(a,b,c){var u=this.a
if(a===1)return new A.M(u,b,c)
else return A.kI(u,this.r,b,a,c)},
fa:function(a,b,c){var u=this.a
if(a===1)return new A.am(u,b,c)
else return A.kI(u,this.r,b,a,c)},
fb:function(a,b,c){var u=this.a
if(a===1)return new A.an(u,b,c)
else return A.kI(u,this.r,b,a,c)},
bf:function(a,b){return new P.e9(a+" uniform variables are unsupported by all browsers.\n"+("Please change the type of "+H.n(b)+"."))},
iD:function(a,b,c,d){var u=this
switch(a){case 5120:return u.aF(b,c,d)
case 5121:return u.aF(b,c,d)
case 5122:return u.aF(b,c,d)
case 5123:return u.aF(b,c,d)
case 5124:return u.aF(b,c,d)
case 5125:return u.aF(b,c,d)
case 5126:return new A.a_(u.a,c,d)
case 35664:return new A.ig(u.a,c,d)
case 35665:return new A.L(u.a,c,d)
case 35666:return new A.ij(u.a,c,d)
case 35667:return new A.ih(u.a,c,d)
case 35668:return new A.ii(u.a,c,d)
case 35669:return new A.ik(u.a,c,d)
case 35674:return new A.im(u.a,c,d)
case 35675:return new A.cC(u.a,c,d)
case 35676:return new A.aw(u.a,c,d)
case 35678:return u.fa(b,c,d)
case 35680:return u.fb(b,c,d)
case 35670:throw H.c(u.bf("BOOL",c))
case 35671:throw H.c(u.bf("BOOL_VEC2",c))
case 35672:throw H.c(u.bf("BOOL_VEC3",c))
case 35673:throw H.c(u.bf("BOOL_VEC4",c))
default:throw H.c(P.x("Unknown uniform variable type "+H.n(a)+" for "+H.n(c)+"."))}}}
A.bM.prototype={
i:function(a){return this.b}}
A.dT.prototype={}
A.il.prototype={
j:function(a,b){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<t;++s){r=u[s]
if(r.c===b)return r}return},
q:function(a,b){var u=this.j(0,b)
if(u==null)throw H.c(P.x("Required uniform value, "+b+", was not defined or used in shader."))
return u},
i:function(a){return this.N()},
N:function(){var u,t,s,r
for(u=this.a,t=u.length,s="",r=0;r<u.length;u.length===t||(0,H.G)(u),++r)s+=u[r].i(0)+"\n"
return s}}
A.M.prototype={
i:function(a){return"Uniform1i: "+H.n(this.c)}}
A.ih.prototype={
i:function(a){return"Uniform2i: "+H.n(this.c)}}
A.ii.prototype={
i:function(a){return"Uniform3i: "+H.n(this.c)}}
A.ik.prototype={
i:function(a){return"Uniform4i: "+H.n(this.c)}}
A.ie.prototype={
i:function(a){return"Uniform1iv: "+H.n(this.c)},
si_:function(a){H.l(a,"$ib",[P.p],"$ab")}}
A.a_.prototype={
i:function(a){return"Uniform1f: "+H.n(this.c)}}
A.ig.prototype={
i:function(a){return"Uniform2f: "+H.n(this.c)}}
A.L.prototype={
i:function(a){return"Uniform3f: "+H.n(this.c)}}
A.ij.prototype={
i:function(a){return"Uniform4f: "+H.n(this.c)}}
A.im.prototype={
i:function(a){return"Uniform1Mat2 "+H.n(this.c)}}
A.cC.prototype={
ak:function(a){var u=new Float32Array(H.c0(H.l(a,"$ib",[P.v],"$ab")))
C.c.ew(this.a,this.d,!1,u)},
i:function(a){return"UniformMat3: "+H.n(this.c)}}
A.aw.prototype={
ak:function(a){var u=new Float32Array(H.c0(H.l(a,"$ib",[P.v],"$ab")))
C.c.ex(this.a,this.d,!1,u)},
i:function(a){return"UniformMat4: "+H.n(this.c)}}
A.am.prototype={
i:function(a){return"UniformSampler2D: "+H.n(this.c)}}
A.an.prototype={
i:function(a){return"UniformSamplerCube: "+H.n(this.c)}}
F.jD.prototype={
$3:function(a,b,c){var u,t=this,s=t.a,r=s.a.cC(s.b,b).cC(s.d.cC(s.c,b),c)
a.sY(0,new V.a0(r.a,r.b,r.c))
a.scN(r.v(0,Math.sqrt(r.E(r))))
s=1-b
u=1-c
a.sce(new V.bo(t.b+b*c,t.c+s*c,t.d+b*u,t.e+s*u))
s=t.f
if(s!=null)s.$3(a,b,c)},
$S:4}
F.jN.prototype={
$2:function(a,b){var u=this.a
return u+b*(this.b-u)},
$S:11}
F.jP.prototype={
$3:function(a,b,c){var u,t=6.283185307179586*b,s=Math.sin(t),r=Math.cos(t),q=-1+c*2,p=this.a.$2(b,c)
if(typeof p!=="number")return H.q(p)
s=-s*p
u=r*p
a.sY(0,new V.a0(s,u,q))
u=new V.J(s,u,q)
a.scN(u.v(0,Math.sqrt(u.E(u))))
a.sce(new V.bo(1-c,2+c,-1,-1))},
$S:4}
F.jZ.prototype={
$3:function(a,b,c){var u=c*3.141592653589793,t=Math.sin(u),s=b*6.283185307179586,r=new V.J(Math.cos(s)*t,Math.cos(u),Math.sin(s)*t)
s=r.v(0,Math.sqrt(r.E(r)))
a.sY(0,new V.a0(s.a,s.b,s.c))},
$S:4}
F.km.prototype={
$2:function(a,b){return 0},
$S:11}
F.kn.prototype={
$3:function(a,b,c){var u,t,s=this.a.a.$2(b,c)
if(typeof s!=="number")return H.q(s)
u=a.f
t=new V.J(u.a,u.b,u.c)
s=t.v(0,Math.sqrt(t.E(t))).m(0,this.b+s)
a.sY(0,new V.a0(s.a,s.b,s.c))},
$S:4}
F.ko.prototype={
$1:function(a){return new V.a0(Math.cos(a),Math.sin(a),0)},
$S:42}
F.jO.prototype={
$3:function(a,b,c){var u,t,s,r,q,p,o=this,n=b*6.283185307179586,m=o.a,l=o.b,k=J.l8(m.$1(n),l)
l=J.mF(J.l8(m.$1(n+3.141592653589793/o.c),l),k)
l=new V.J(l.a,l.b,l.c)
u=l.v(0,Math.sqrt(l.E(l)))
m=$.lK
if(m==null){m=new V.J(1,0,0)
$.lK=m
t=m}else t=m
m=u.av(!J.P(u,t)?V.lO():t)
s=m.v(0,Math.sqrt(m.E(m)))
m=s.av(u)
t=m.v(0,Math.sqrt(m.E(m)))
r=c*6.283185307179586
m=Math.cos(r)
l=o.d
q=Math.sin(r)
m=t.m(0,m*l)
l=s.m(0,q*l)
q=m.c
p=l.c
if(typeof q!=="number")return q.p()
if(typeof p!=="number")return H.q(p)
a.sY(0,J.mE(k,new V.a0(m.a-l.a,m.b-l.b,q-p)))},
$S:4}
F.jS.prototype={
$2:function(a,b){return 0},
$S:11}
F.jT.prototype={
$3:function(a,b,c){var u,t,s=b*2-1,r=c*2-1
a.sY(0,new V.a0(s,r,this.a.a.$2(b,c)))
u=new V.J(s,r,1)
a.scN(u.v(0,Math.sqrt(u.E(u))))
u=1-b
t=1-c
a.sce(new V.bo(b*c,2+u*c,4+b*t,6+u*t))},
$S:4}
F.a9.prototype={
aX:function(){var u=this
if(!u.gaY()){C.a.M(u.a.a.d.b,u)
u.a.a.a0()}u.c3()
u.c4()
u.hw()},
c8:function(a){this.a=a
C.a.h(a.d.b,this)},
c9:function(a){this.b=a
C.a.h(a.d.c,this)},
hF:function(a){this.c=a
C.a.h(a.d.d,this)},
c3:function(){var u=this.a
if(u!=null){C.a.M(u.d.b,this)
this.a=null}},
c4:function(){var u=this.b
if(u!=null){C.a.M(u.d.c,this)
this.b=null}},
hw:function(){var u=this.c
if(u!=null){C.a.M(u.d.d,this)
this.c=null}},
gaY:function(){return this.a==null||this.b==null||this.c==null},
f3:function(){var u,t,s,r=this.a,q=r==null?null:r.r
r=this.b
u=r==null?null:r.r
r=this.c
t=r==null?null:r.r
s=V.cJ()
if(q!=null)s=s.n(0,q)
if(u!=null)s=s.n(0,u)
if(t!=null)s=s.n(0,t)
if(s.ea())return
return s.v(0,Math.sqrt(s.E(s)))},
f7:function(){var u,t,s,r=this.a,q=r==null?null:r.f
r=this.b
u=r==null?null:r.f
r=this.c
t=r==null?null:r.f
if(q==null||u==null||t==null)return
r=u.p(0,q)
r=new V.J(r.a,r.b,r.c)
s=r.v(0,Math.sqrt(r.E(r)))
r=t.p(0,q)
r=new V.J(r.a,r.b,r.c)
r=s.av(r.v(0,Math.sqrt(r.E(r))))
return r.v(0,Math.sqrt(r.E(r)))},
ck:function(){var u,t=this
if(t.d!=null)return!0
u=t.f3()
if(u==null){u=t.f7()
if(u==null)return!1}t.d=u
t.a.a.a0()
return!0},
f2:function(){var u,t,s,r=this.a,q=r==null?null:r.x
r=this.b
u=r==null?null:r.x
r=this.c
t=r==null?null:r.x
s=V.cJ()
if(q!=null)s=s.n(0,q)
if(u!=null)s=s.n(0,u)
if(t!=null)s=s.n(0,t)
if(s.ea())return
return s.v(0,Math.sqrt(s.E(s)))},
f6:function(){var u,t,s,r,q,p,o,n=this,m=null,l=n.a,k=l==null,j=k?m:l.f,i=n.b,h=i==null,g=h?m:i.f,f=n.c,e=f==null,d=e?m:f.f
if(j==null||g==null||d==null)return
u=k?m:l.y
t=h?m:i.y
s=e?m:f.y
if(u==null||t==null||s==null)return
l=t.b
r=l-s.b
if(Math.abs(r-0)<$.R().a){l=d.p(0,g)
l=new V.J(l.a,l.b,l.c)
q=l.v(0,Math.sqrt(l.E(l)))
if(s.a-t.a<0)q=q.S(0)}else{p=(l-u.b)/r
l=d.p(0,g).m(0,p).n(0,g).p(0,j)
l=new V.J(l.a,l.b,l.c)
q=l.v(0,Math.sqrt(l.E(l)))
s=s.a
t=t.a
if((s-t)*p+t-u.a<0)q=q.S(0)}l=n.d
if(l!=null){o=l.v(0,Math.sqrt(l.E(l)))
l=o.av(q)
l=l.v(0,Math.sqrt(l.E(l))).av(o)
q=l.v(0,Math.sqrt(l.E(l)))}return q},
ci:function(){var u,t=this
if(t.e!=null)return!0
u=t.f2()
if(u==null){u=t.f6()
if(u==null)return!1}t.e=u
t.a.a.a0()
return!0},
giz:function(a){var u=this
if(J.P(u.a,u.b))return!0
if(J.P(u.b,u.c))return!0
if(J.P(u.c,u.a))return!0
return!1},
t:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.N()},
F:function(a){var u,t,s=this
if(s.gaY())return a+"disposed"
u=a+C.b.ac(J.at(s.a.e),0)+", "+C.b.ac(J.at(s.b.e),0)+", "+C.b.ac(J.at(s.c.e),0)+" {"
t=s.d
u=t!=null?u+(t.i(0)+", "):u+"-, "
t=s.e
return t!=null?u+(t.i(0)+"}"):u+"-}"},
N:function(){return this.F("")}}
F.fy.prototype={}
F.hH.prototype={
b1:function(a,b,c){var u,t=b.a
t.a.a.w()
t=t.e
u=c.a
u.a.a.w()
if(t==u.e){t=b.b
t.a.a.w()
t=t.e
u=c.b
u.a.a.w()
if(t==u.e){t=b.c
t.a.a.w()
t=t.e
u=c.c
u.a.a.w()
u=t==u.e
t=u}else t=!1
return t}else{t=b.a
t.a.a.w()
t=t.e
u=c.b
u.a.a.w()
if(t==u.e){t=b.b
t.a.a.w()
t=t.e
u=c.c
u.a.a.w()
if(t==u.e){t=b.c
t.a.a.w()
t=t.e
u=c.a
u.a.a.w()
u=t==u.e
t=u}else t=!1
return t}else{t=b.a
t.a.a.w()
t=t.e
u=c.c
u.a.a.w()
if(t==u.e){t=b.b
t.a.a.w()
t=t.e
u=c.a
u.a.a.w()
if(t==u.e){t=b.c
t.a.a.w()
t=t.e
u=c.b
u.a.a.w()
u=t==u.e
t=u}else t=!1
return t}else return!1}}}}
F.bj.prototype={
aX:function(){var u=this
if(!u.gaY()){C.a.M(u.a.a.c.b,u)
u.a.a.a0()}u.c3()
u.c4()},
c8:function(a){this.a=a
C.a.h(a.c.b,this)},
c9:function(a){this.b=a
C.a.h(a.c.c,this)},
c3:function(){var u=this.a
if(u!=null){C.a.M(u.c.b,this)
this.a=null}},
c4:function(){var u=this.b
if(u!=null){C.a.M(u.c.c,this)
this.b=null}},
gaY:function(){return this.a==null||this.b==null},
t:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.N()},
F:function(a){if(this.gaY())return a+"disposed"
return a+C.b.ac(J.at(this.a.e),0)+", "+C.b.ac(J.at(this.b.e),0)},
N:function(){return this.F("")}}
F.fN.prototype={}
F.id.prototype={
b1:function(a,b,c){var u,t=b.a
t.a.a.w()
t=t.e
u=c.a
u.a.a.w()
if(t==u.e){t=b.b
t.a.a.w()
t=t.e
u=c.b
u.a.a.w()
return t==u.e}else{t=b.a
t.a.a.w()
t=t.e
u=c.b
u.a.a.w()
if(t==u.e){t=b.b
t.a.a.w()
t=t.e
u=c.a
u.a.a.w()
return t==u.e}else return!1}}}
F.bA.prototype={
t:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.N()},
F:function(a){var u=this.a
if(u==null)return a+"disposed"
return a+C.b.ac(J.at(u.e),0)},
N:function(){return this.F("")}}
F.bY.prototype={
gA:function(){var u=this.e
return u==null?this.e=D.S():u},
bz:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i,h=this,g=h.e
if(g!=null)++g.d
a.a.w()
u=h.a.c.length
for(g=a.a.c,t=g.length,s=0;s<g.length;g.length===t||(0,H.G)(g),++s){r=g[s]
h.a.h(0,r.iB())}h.a.w()
for(g=a.b.b,t=g.length,s=0;s<g.length;g.length===t||(0,H.G)(g),++s){q=g[s]
p=h.a
o=q.a
o.a.a.w()
o=o.e
if(typeof o!=="number")return o.n()
o+=u
p=p.c
if(o>=p.length)return H.d(p,o)
n=p[o]
h.b.a.a.h(0,n)
o=new F.bA()
if(n.a==null)H.t(P.x("May not create a point with a vertex which is not attached to a shape."))
o.a=n
C.a.h(n.b.b,o)
C.a.h(o.a.a.b.b,o)
p=o.a.a.e
if(p!=null)p.H(null)}for(g=a.c.b,t=g.length,s=0;s<g.length;g.length===t||(0,H.G)(g),++s){m=g[s]
p=h.a
o=m.a
o.a.a.w()
o=o.e
if(typeof o!=="number")return o.n()
o+=u
p=p.c
if(o>=p.length)return H.d(p,o)
l=p[o]
o=h.a
p=m.b
p.a.a.w()
p=p.e
if(typeof p!=="number")return p.n()
p+=u
o=o.c
if(p>=o.length)return H.d(o,p)
k=o[p]
p=h.c.a
p.a.h(0,l)
p.a.h(0,k)
F.n1(l,k)}for(g=a.d.b,t=g.length,s=0;s<g.length;g.length===t||(0,H.G)(g),++s){j=g[s]
p=h.a
o=j.a
o.a.a.w()
o=o.e
if(typeof o!=="number")return o.n()
o+=u
p=p.c
if(o>=p.length)return H.d(p,o)
l=p[o]
o=h.a
p=j.b
p.a.a.w()
p=p.e
if(typeof p!=="number")return p.n()
p+=u
o=o.c
if(p>=o.length)return H.d(o,p)
k=o[p]
p=h.a
o=j.c
o.a.a.w()
o=o.e
if(typeof o!=="number")return o.n()
o+=u
p=p.c
if(o>=p.length)return H.d(p,o)
i=p[o]
o=h.d.a
o.a.h(0,l)
o.a.h(0,k)
o.a.h(0,i)
F.dh(l,k,i)}g=h.e
if(g!=null)g.a6(0)},
a4:function(){var u,t=this,s=t.e
if(s!=null)++s.d
u=t.d.a4()||!1
if(!t.a.a4())u=!1
s=t.e
if(s!=null)s.a6(0)
return u},
iu:function(a,b){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=this,c=d.e
if(c!=null)++c.d
for(u=d.a.c.length-1,c=a.b,t=a.a,s=t.length,r=a.c,q=c-1;u>=0;--u){p=d.a.c
if(u>=p.length)return H.d(p,u)
o=p[u]
p=o.y
n=C.e.aZ(p.a*q)
p=p.b
if(typeof r!=="number")return r.p()
m=C.e.aZ(p*(r-1))
n=n>=0?C.f.aj(n,c):c+C.f.aj(n,c)
l=(n+(m>=0?C.f.aj(m,r):r+C.f.aj(m,r))*c)*4
if(l<0||l>=s)return H.d(t,l)
p=t[l]/255
k=l+1
if(k>=s)return H.d(t,k)
k=t[k]/255
j=l+2
if(j>=s)return H.d(t,j)
j=t[j]/255
i=l+3
if(i>=s)return H.d(t,i)
i=t[i]/255
if(p<0)p=0
else if(p>1)p=1
if(k<0)k=0
else if(k>1)k=1
if(j<0)j=0
else if(j>1)j=1
if(!(i<0))if(i>1)i=1
h=(p+k+j)*b/3
p=o.f
k=o.r
j=k.a
i=k.b
k=k.c
if(typeof k!=="number")return k.m()
g=p.a
f=p.b
e=p.c
if(typeof e!=="number")return e.n()
k=new V.a0(g+j*h,f+i*h,e+k*h)
if(!J.P(p,k)){o.f=k
p=o.a
if(p!=null){p=p.e
if(p!=null)p.H(null)}}}c=d.e
if(c!=null)c.a6(0)},
jv:function(a){var u,t,s,r,q=this.e
if(q!=null)++q.d
for(q=this.a,u=q.c.length-1,t=a.a;u>=0;--u){s=q.c
if(u>=s.length)return H.d(s,u)
r=s[u]
if((t&$.bc().a)===0)r.f=null
if((t&$.aT().a)===0)r.r=null
if((t&$.bb().a)===0)r.x=null
if((t&$.bd().a)===0)r.y=null
if((t&$.be().a)===0)r.z=null
if((t&$.l6().a)===0)r.Q=null
if((t&$.bG().a)===0)r.ch=0
if((t&$.ba().a)===0)r.cx=null}q=this.e
if(q!=null)q.a6(0)},
ju:function(a){var u,t,s,r=this.e
if(r!=null)++r.d
for(r=this.d,u=r.b.length-1;u>=0;--u){t=r.b
if(u>=t.length)return H.d(t,u)
s=t[u]
s.d=null}r=this.e
if(r!=null)r.a6(0)},
iZ:function(a,b){var u,t,s,r,q,p=this,o=p.e
if(o!=null)++o.d
o=p.a.c
u=H.e(o.slice(0),[H.w(o,0)])
for(o=[F.ao];u.length!==0;){t=C.a.giO(u)
C.a.eo(u,0)
if(t!=null){s=H.e([],o)
C.a.h(s,t)
for(r=u.length-1;r>=0;--r){if(r>=u.length)return H.d(u,r)
q=u[r]
if(q!=null&&a.b1(0,t,q)){C.a.h(s,q)
C.a.eo(u,r)}}if(s.length>1)b.bz(s)}}p.a.w()
p.c.bB()
p.d.bB()
p.b.jg()
p.c.cK(new F.id())
p.d.cK(new F.hH())
o=p.e
if(o!=null)o.a6(0)},
bg:function(){this.iZ(new F.iI(),new F.hh())},
ix:function(a2,a3){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a=this,a0=34962,a1=a.a.c.length
a3.toString
u=$.bc()
t=a3.a
s=(t&u.a)!==0?1:0
if((t&$.aT().a)!==0)++s
if((t&$.bb().a)!==0)++s
if((t&$.bd().a)!==0)++s
if((t&$.be().a)!==0)++s
if((t&$.d0().a)!==0)++s
if((t&$.d1().a)!==0)++s
if((t&$.bG().a)!==0)++s
if((t&$.ba().a)!==0)++s
r=a3.gcU(a3)
q=r*4
u=new Array(a1*r)
u.fixed$length=Array
t=P.v
p=H.e(u,[t])
u=new Array(s)
u.fixed$length=Array
o=H.e(u,[Z.d6])
for(n=0,m=0;m<s;++m){l=a3.iv(m)
k=l.gcU(l)
C.a.l(o,m,new Z.d6(l,k,n*4,q))
for(j=0;j<a1;++j){u=a.a.c
if(j>=u.length)return H.d(u,j)
i=u[j].iW(l)
h=n+j*r
for(g=0;g<i.length;++g){C.a.l(p,h,i[g]);++h}}n+=k}H.l(p,"$ib",[t],"$ab")
u=a2.a
f=u.createBuffer()
u.bindBuffer(a0,f)
u.bufferData(a0,new Float32Array(H.c0(p)),35044)
u.bindBuffer(a0,null)
e=new Z.d7(new Z.e0(a0,f),o,a3)
e.sfn(H.e([],[Z.bx]))
if(a.b.b.length!==0){t=P.p
d=H.e([],[t])
for(m=0;c=a.b.b,m<c.length;++m){c=c[m].a
c.a.a.w()
C.a.h(d,c.e)}b=Z.kM(u,34963,H.l(d,"$ib",[t],"$ab"))
C.a.h(e.b,new Z.bx(0,d.length,b))}if(a.c.b.length!==0){t=P.p
d=H.e([],[t])
for(m=0;c=a.c.b,m<c.length;++m){c=c[m].a
c.a.a.w()
C.a.h(d,c.e)
c=a.c.b
if(m>=c.length)return H.d(c,m)
c=c[m].b
c.a.a.w()
C.a.h(d,c.e)}b=Z.kM(u,34963,H.l(d,"$ib",[t],"$ab"))
C.a.h(e.b,new Z.bx(1,d.length,b))}if(a.d.b.length!==0){t=P.p
d=H.e([],[t])
for(m=0;c=a.d.b,m<c.length;++m){c=c[m].a
c.a.a.w()
C.a.h(d,c.e)
c=a.d.b
if(m>=c.length)return H.d(c,m)
c=c[m].b
c.a.a.w()
C.a.h(d,c.e)
c=a.d.b
if(m>=c.length)return H.d(c,m)
c=c[m].c
c.a.a.w()
C.a.h(d,c.e)}b=Z.kM(u,34963,H.l(d,"$ib",[t],"$ab"))
C.a.h(e.b,new Z.bx(4,d.length,b))}return e},
i:function(a){var u=this,t="   ",s=H.e([],[P.h])
if(u.a.c.length!==0){C.a.h(s,"Vertices:")
C.a.h(s,u.a.F(t))}if(u.b.b.length!==0){C.a.h(s,"Points:")
C.a.h(s,u.b.F(t))}if(u.c.b.length!==0){C.a.h(s,"Lines:")
C.a.h(s,u.c.F(t))}if(u.d.b.length!==0){C.a.h(s,"Faces:")
C.a.h(s,u.d.F(t))}return C.a.C(s,"\n")},
a0:function(){var u=this.e
if(u!=null)u.H(null)},
$ioP:1}
F.hB.prototype={
is:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k,j,i,h
H.l(c,"$ib",[F.ao],"$ab")
u=H.e([],[F.a9])
for(t=this.a,s=b,r=0,q=!1,p=1;p<a;++p,++r,++s){for(o=q,n=1;n<b;++n,s=j){m=c.length
if(r<0||r>=m)return H.d(c,r)
l=c[r];++r
if(r>=m)return H.d(c,r)
k=c[r]
j=s+1
if(j<0||j>=m)return H.d(c,j)
i=c[j]
if(s<0||s>=m)return H.d(c,s)
h=c[s]
m=t.a
if(o){m.h(0,l)
t.a.h(0,k)
t.a.h(0,i)
C.a.h(u,F.dh(l,k,i))
t.a.h(0,l)
t.a.h(0,i)
t.a.h(0,h)
C.a.h(u,F.dh(l,i,h))}else{m.h(0,k)
t.a.h(0,i)
t.a.h(0,h)
C.a.h(u,F.dh(k,i,h))
t.a.h(0,k)
t.a.h(0,h)
t.a.h(0,l)
C.a.h(u,F.dh(k,h,l))}o=!o}q=!q}return u},
gk:function(a){return this.b.length},
cK:function(a){var u,t,s,r,q,p,o,n
for(u=this.a,t=u.a.c.length-1;t>=0;--t){s=u.a.c
if(t>=s.length)return H.d(s,t)
r=s[t]
for(s=r.d,q=s.b.length+s.c.length+s.d.length-1;q>=0;--q){p=r.d.j(0,q)
for(o=q-1;o>=0;--o){n=r.d.j(0,o)
if(a.b1(0,p,n)){p.aX()
break}}}}},
bB:function(){var u,t,s
for(u=this.b.length-1;u>=0;--u){t=this.b
if(u>=t.length)return H.d(t,u)
s=t[u]
t=s.giz(s)
if(t)s.aX()}},
a4:function(){var u,t,s,r
for(u=this.b,t=u.length,s=!0,r=0;r<u.length;u.length===t||(0,H.G)(u),++r)if(!u[r].ck())s=!1
return s},
cj:function(){var u,t,s,r
for(u=this.b,t=u.length,s=!0,r=0;r<u.length;u.length===t||(0,H.G)(u),++r)if(!u[r].ci())s=!1
return s},
i:function(a){return this.N()},
F:function(a){var u,t,s,r=H.e([],[P.h])
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.G)(u),++s)C.a.h(r,u[s].F(a))
return C.a.C(r,"\n")},
N:function(){return this.F("")},
sfh:function(a){this.b=H.l(a,"$ib",[F.a9],"$ab")}}
F.hC.prototype={
gk:function(a){return this.b.length},
cK:function(a){var u,t,s,r,q,p,o,n
for(u=this.a,t=u.a.c.length-1;t>=0;--t){s=u.a.c
if(t>=s.length)return H.d(s,t)
r=s[t]
for(s=r.c,q=s.b.length+s.c.length-1;q>=0;--q){p=r.c.j(0,q)
for(o=q-1;o>=0;--o){n=r.c.j(0,o)
if(a.b1(0,p,n)){p.aX()
break}}}}},
bB:function(){var u,t,s
for(u=this.b.length-1;u>=0;--u){t=this.b
if(u>=t.length)return H.d(t,u)
s=t[u]
t=J.P(s.a,s.b)
if(t)s.aX()}},
i:function(a){return this.N()},
F:function(a){var u,t,s=H.e([],[P.h]),r=this.b.length
for(u=0;u<r;++u){t=this.b
if(u>=t.length)return H.d(t,u)
C.a.h(s,t[u].F(a+(""+u+". ")))}return C.a.C(s,"\n")},
N:function(){return this.F("")},
sfo:function(a){this.b=H.l(a,"$ib",[F.bj],"$ab")}}
F.hD.prototype={
gk:function(a){return this.b.length},
jg:function(){var u,t,s
for(u=this.b.length-1;u>=0;--u){t=this.b
if(u>=t.length)return H.d(t,u)
t=t[u]
s=t.a
if(s.b.b.length>1){if(s!=null){C.a.M(s.a.b.b,t)
s=t.a.a.e
if(s!=null)s.H(null)}s=t.a
if(s!=null){C.a.M(s.b.b,t)
t.a=null}}}},
i:function(a){return this.N()},
F:function(a){var u,t,s,r=H.e([],[P.h])
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.G)(u),++s)C.a.h(r,u[s].F(a))
return C.a.C(r,"\n")},
N:function(){return this.F("")},
sc0:function(a){this.b=H.l(a,"$ib",[F.bA],"$ab")}}
F.ao.prototype={
cn:function(a){var u=this,t=u.f,s=u.r,r=u.x,q=u.y,p=u.z,o=u.Q,n=u.ch
return F.kL(u.cx,r,o,t,s,q,p,a,n)},
iB:function(){return this.cn(null)},
sY:function(a,b){var u
if(!J.P(this.f,b)){this.f=b
u=this.a
if(u!=null)u.a0()}},
scN:function(a){var u
if(!J.P(this.z,a)){this.z=a
u=this.a
if(u!=null)u.a0()}},
sce:function(a){var u
if(!J.P(this.cx,a)){this.cx=a
u=this.a
if(u!=null)u.a0()}},
iW:function(a){var u,t,s=this
if(a.t(0,$.bc())){u=s.f
t=[P.v]
if(u==null)return H.e([0,0,0],t)
else return H.e([u.a,u.b,u.c],t)}else if(a.t(0,$.aT())){u=s.r
t=[P.v]
if(u==null)return H.e([0,1,0],t)
else return H.e([u.a,u.b,u.c],t)}else if(a.t(0,$.bb())){u=s.x
t=[P.v]
if(u==null)return H.e([0,0,1],t)
else return H.e([u.a,u.b,u.c],t)}else if(a.t(0,$.bd())){u=s.y
t=[P.v]
if(u==null)return H.e([0,0],t)
else return H.e([u.a,u.b],t)}else if(a.t(0,$.be())){u=s.z
t=[P.v]
if(u==null)return H.e([0,0,0],t)
else return H.e([u.a,u.b,u.c],t)}else if(a.t(0,$.d0())){u=s.Q
t=[P.v]
if(u==null)return H.e([1,1,1],t)
else return H.e([u.a,u.b,u.c],t)}else if(a.t(0,$.d1())){u=s.Q
t=[P.v]
if(u==null)return H.e([1,1,1,1],t)
else return H.e([u.a,u.b,u.c,u.d],t)}else if(a.t(0,$.bG()))return H.e([s.ch],[P.v])
else if(a.t(0,$.ba())){u=s.cx
t=[P.v]
if(u==null)return H.e([-1,-1,-1,-1],t)
else return H.e([u.a,u.b,u.c,u.d],t)}else return H.e([],[P.v])},
ck:function(){var u,t=this,s={}
if(t.r!=null)return!0
u=t.a
if(u!=null){u=u.e
if(u!=null)++u.d}s.a=V.cJ()
t.d.I(0,new F.iN(s))
s=s.a
t.r=s.v(0,Math.sqrt(s.E(s)))
s=t.a
if(s!=null){s.a0()
s=t.a.e
if(s!=null)s.a6(0)}return!0},
ci:function(){var u,t=this,s={}
if(t.x!=null)return!0
u=t.a
if(u!=null){u=u.e
if(u!=null)++u.d}s.a=V.cJ()
t.d.I(0,new F.iM(s))
s=s.a
t.x=s.v(0,Math.sqrt(s.E(s)))
s=t.a
if(s!=null){s.a0()
s=t.a.e
if(s!=null)s.a6(0)}return!0},
t:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.N()},
F:function(a){var u,t,s=this,r="-",q=H.e([],[P.h])
C.a.h(q,C.b.ac(J.at(s.e),0))
u=s.f
if(u!=null)C.a.h(q,u.i(0))
else C.a.h(q,r)
u=s.r
if(u!=null)C.a.h(q,u.i(0))
else C.a.h(q,r)
u=s.x
if(u!=null)C.a.h(q,u.i(0))
else C.a.h(q,r)
u=s.y
if(u!=null)C.a.h(q,u.i(0))
else C.a.h(q,r)
u=s.z
if(u!=null)C.a.h(q,u.i(0))
else C.a.h(q,r)
u=s.Q
if(u!=null)C.a.h(q,u.i(0))
else C.a.h(q,r)
C.a.h(q,V.W(s.ch,3,0))
u=s.cx
if(u!=null)C.a.h(q,u.i(0))
else C.a.h(q,r)
t=C.a.C(q,", ")
return a+"{"+t+"}"},
N:function(){return this.F("")}}
F.iN.prototype={
$1:function(a){var u,t
H.f(a,"$ia9")
u=a==null?null:a.d
if(u!=null){t=this.a
t.a=t.a.n(0,u)}},
$S:6}
F.iM.prototype={
$1:function(a){var u,t
H.f(a,"$ia9")
u=a==null?null:a.e
if(u!=null){t=this.a
t.a=t.a.n(0,u)}},
$S:6}
F.iD.prototype={
w:function(){var u,t,s,r
if(this.b){u=this.c
t=u.length
for(s=0,r=0;r<t;++r){if(r>=u.length)return H.d(u,r)
u[r].e=s;++s}this.b=!1}},
h:function(a,b){var u,t=b.a
if(t!=null){if(t===this.a)return!1
throw H.c(P.x("May not add a vertex already attached to another shape to this shape."))}t=this.c
b.e=t.length
u=this.a
b.a=u
C.a.h(t,b)
u.a0()
return!0},
gk:function(a){return this.c.length},
a4:function(){var u,t,s
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.G)(u),++s)u[s].ck()
return!0},
cj:function(){var u,t,s
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.G)(u),++s)u[s].ci()
return!0},
iy:function(){var u,t,s,r,q,p,o,n
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.G)(u),++s){r=u[s]
if(r.z==null){q=r.r
p=q.a
o=q.b
n=q.c
if(typeof n!=="number")return n.m()
n=q.v(0,Math.sqrt(p*p+o*o+n*n))
if(!J.P(r.z,n)){r.z=n
q=r.a
if(q!=null){q=q.e
if(q!=null)q.H(null)}}}}return!0},
i:function(a){return this.N()},
F:function(a){var u,t,s,r
this.w()
u=H.e([],[P.h])
for(t=this.c,s=t.length,r=0;r<t.length;t.length===s||(0,H.G)(t),++r)C.a.h(u,t[r].F(a))
return C.a.C(u,"\n")},
N:function(){return this.F("")},
si0:function(a){this.c=H.l(a,"$ib",[F.ao],"$ab")}}
F.iE.prototype={
gk:function(a){return this.b.length+this.c.length+this.d.length},
j:function(a,b){var u,t=this.b,s=t.length
if(b<s){if(b<0)return H.d(t,b)
return t[b]}b-=s
t=this.c
u=t.length
if(b<u){if(b<0)return H.d(t,b)
return t[b]}b-=u
t=this.d
if(b<0||b>=t.length)return H.d(t,b)
return t[b]},
I:function(a,b){var u=this
H.m(b,{func:1,ret:-1,args:[F.a9]})
C.a.I(u.b,b)
C.a.I(u.c,new F.iF(u,b))
C.a.I(u.d,new F.iG(u,b))},
i:function(a){return this.N()},
N:function(){var u,t,s,r=H.e([],[P.h])
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.G)(u),++s)C.a.h(r,u[s].F(""))
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.G)(u),++s)C.a.h(r,u[s].F(""))
for(u=this.d,t=u.length,s=0;s<u.length;u.length===t||(0,H.G)(u),++s)C.a.h(r,u[s].F(""))
return C.a.C(r,"\n")},
sfi:function(a){this.b=H.l(a,"$ib",[F.a9],"$ab")},
sfj:function(a){this.c=H.l(a,"$ib",[F.a9],"$ab")},
sfk:function(a){this.d=H.l(a,"$ib",[F.a9],"$ab")}}
F.iF.prototype={
$1:function(a){H.f(a,"$ia9")
if(!J.P(a.a,this.a))this.b.$1(a)},
$S:6}
F.iG.prototype={
$1:function(a){var u
H.f(a,"$ia9")
u=this.a
if(!J.P(a.a,u)&&!J.P(a.b,u))this.b.$1(a)},
$S:6}
F.iH.prototype={
gk:function(a){return this.b.length+this.c.length},
j:function(a,b){var u,t=this.b,s=t.length
if(b>=s){t=this.c
u=b-s
if(u<0||u>=t.length)return H.d(t,u)
return t[u]}else{if(b<0)return H.d(t,b)
return t[b]}},
i:function(a){return this.N()},
N:function(){var u,t,s,r=H.e([],[P.h])
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.G)(u),++s)C.a.h(r,u[s].F(""))
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.G)(u),++s)C.a.h(r,u[s].F(""))
return C.a.C(r,"\n")},
sfp:function(a){this.b=H.l(a,"$ib",[F.bj],"$ab")},
sfq:function(a){this.c=H.l(a,"$ib",[F.bj],"$ab")}}
F.iJ.prototype={}
F.iI.prototype={
b1:function(a,b,c){return J.P(b.f,c.f)}}
F.iK.prototype={}
F.hh.prototype={
bz:function(a){var u,t,s,r,q,p,o,n,m,l,k
H.l(a,"$ib",[F.ao],"$ab")
u=V.cJ()
for(t=a.length,s=0;s<t;++s){r=a[s].r
if(r!=null){q=u.a
p=r.a
o=u.b
n=r.b
m=u.c
r=r.c
if(typeof m!=="number")return m.n()
if(typeof r!=="number")return H.q(r)
u=new V.J(q+p,o+n,m+r)}}u=u.v(0,Math.sqrt(u.E(u)))
for(t=a.length,r=u==null,s=0;s<a.length;a.length===t||(0,H.G)(a),++s){l=a[s]
if(r)k=null
else{q=u.a
p=u.b
o=u.c
if(typeof o!=="number")return o.m()
k=u.v(0,Math.sqrt(q*q+p*p+o*o))}if(!J.P(l.r,k)){l.r=k
q=l.a
if(q!=null){q=q.e
if(q!=null)q.H(null)}}}return}}
F.iL.prototype={
gk:function(a){return this.b.length},
i:function(a){return this.N()},
N:function(){var u,t,s,r=H.e([],[P.h])
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.G)(u),++s)C.a.h(r,u[s].F(""))
return C.a.C(r,"\n")},
sc0:function(a){this.b=H.l(a,"$ib",[F.bA],"$ab")}}
O.dt.prototype={
gA:function(){var u=this.dy
return u==null?this.dy=D.S():u},
a9:function(a){var u
H.f(a,"$iz")
u=this.dy
if(u!=null)u.H(a)},
fM:function(){return this.a9(null)},
ds:function(a){H.f(a,"$iz")
this.a=null
this.a9(a)},
hB:function(){return this.ds(null)},
fG:function(a,b){var u=V.al
H.l(b,"$ij",[u],"$aj")
u=new D.bS([u])
u.b=!0
this.a9(u)},
fI:function(a,b){var u=V.al
H.l(b,"$ij",[u],"$aj")
u=new D.bT([u])
u.b=!0
this.a9(u)},
d8:function(){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0=this,a1=a0.dx,a2=C.f.a2(a1.e.length+3,4)*4,a3=C.f.a2(a1.f.length+3,4)*4,a4=C.f.a2(a1.r.length+3,4)*4,a5=C.f.a2(a1.x.length+3,4)*4,a6=C.f.a2(a1.y.length+3,4)*4,a7=C.f.a2(a1.z.length+3,4)*4,a8=C.f.a2(a0.e.a.length+3,4)*4
a1=a0.f.c
u=a0.r.c
t=a0.x.c
s=a0.y.c
r=a0.z.c
q=a0.Q.c
p=a0.cx.c
o=a0.cy.c
n=a0.db.c
m="MaterialLight_"+C.f.i(a1.a)+C.f.i(u.a)+C.f.i(t.a)+C.f.i(s.a)+C.f.i(r.a)+C.f.i(q.a)+C.f.i(p.a)+C.f.i(o.a)+C.f.i(n.a)
m+"_"
m+"_0"
m+"_00"
m+"_000"
m=m+"_000_"+a8+"_"+a2+"_"+a3+"_"+a4+"_"+a5+"_"+a6+"_"+a7
l=p!==C.d||o!==C.d
k=u!==C.d||t!==C.d||s!==C.d||r!==C.d
j=r===C.d
i=!j||a3+a6>0||l
h=t!==C.d||s!==C.d||!j||q!==C.d||l
j=q===C.d
g=!j
f=a1===C.h||u===C.h||t===C.h||s===C.h||r===C.h||q===C.h||p===C.h||o===C.h||n===C.h
e=a1===C.i||u===C.i||t===C.i||s===C.i||r===C.i||q===C.i||p===C.i||o===C.i||n===C.i
d=a3+a6+a5+a4+a7>0
c=a8>0
b=h||!j||i
a=$.bc()
if(h){j=$.aT()
a=new Z.aS(a.a|j.a)}if(g){j=$.bb()
a=new Z.aS(a.a|j.a)}if(f){j=$.bd()
a=new Z.aS(a.a|j.a)}if(e){j=$.be()
a=new Z.aS(a.a|j.a)}if(c){j=$.ba()
a=new Z.aS(a.a|j.a)}return new A.h2(a1,u,t,s,r,q,p,o,n,a2,a3,a4,a5,a6,a7,a2+a3+a4+a5+a6+a7,l,l,d,b,!0,!1,!1,k,d,i,h,g,f,e,c,!1,!1,!1,a8,m.charCodeAt(0)==0?m:m,a)},
V:function(a,b){H.l(a,"$ib",[T.cy],"$ab")},
ap:function(a,b){var u,t,s,r,q
for(u=this.dx.a,u=new J.ap(u,u.length,[H.w(u,0)]);u.D();){t=u.d
t.toString
s=$.iC
if(s==null)s=$.iC=new V.J(0,0,1)
t.a=s
r=t.b
if(r!=null){q=r.a
if(q!=null)t.a=q.cO(s)}}},
ji:function(a5,a6){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3=this,a4=a3.a
if(a4==null){a4=a3.d8()
u=a5.fr.j(0,a4.ag)
if(u==null){u=A.n7(a4,a5.a)
t=u.b
if(t.length===0)H.t(P.x("May not cache a shader with no name."))
if(a5.fr.bi(0,t))H.t(P.x('Shader cache already contains a shader by the name "'+t+'".'))
a5.fr.l(0,t,u)}a4=a3.a=u
a6.e=null}s=a4.z
r=s.bj
a4=a6.e
if(!(a4 instanceof Z.d7))a4=a6.e=null
if(a4==null||!a4.d.t(0,r)){a4=s.r1
if(a4)a6.d.a4()
q=s.r2
if(q){p=a6.d
o=p.e
if(o!=null)++o.d
p.d.cj()
p.a.cj()
p=p.e
if(p!=null)p.a6(0)}p=s.ry
if(p){o=a6.d
n=o.e
if(n!=null)++n.d
o.a.iy()
o=o.e
if(o!=null)o.a6(0)}m=a6.d.ix(new Z.iP(a5.a),r)
m.aL($.bc()).e=a3.a.Q.c
if(a4)m.aL($.aT()).e=a3.a.cx.c
if(q)m.aL($.bb()).e=a3.a.ch.c
if(s.rx)m.aL($.bd()).e=a3.a.cy.c
if(p)m.aL($.be()).e=a3.a.db.c
if(s.x1)m.aL($.ba()).e=a3.a.dx.c
a6.e=m}a4=T.cy
l=H.e([],[a4])
q=a3.a
p=a5.a
p.useProgram(q.r)
q.x.iK()
if(s.fx){q=a3.a
o=a5.dx
o=o.gZ(o)
q=q.dy
q.toString
q.ak(o.ad(0,!0))}if(s.fy){q=a3.a
o=a5.cx
if(o==null){o=a5.db
o=o.gZ(o)
n=a5.dx
n=a5.cx=o.m(0,n.gZ(n))
o=n}q=q.fr
q.toString
q.ak(o.ad(0,!0))}q=a3.a
o=a5.ch
if(o==null){o=a5.gjf()
n=a5.dx
n=a5.ch=o.m(0,n.gZ(n))
o=n}q=q.fy
q.toString
q.ak(o.ad(0,!0))
if(s.x2){q=a3.a
o=a3.b
q=q.k1
q.toString
q.ak(C.n.ad(o,!0))}if(s.y1){q=a3.a
o=a3.c
q=q.k2
q.toString
q.ak(C.n.ad(o,!0))}if(s.y2){q=a3.a
o=a3.d
q=q.k3
q.toString
q.ak(C.n.ad(o,!0))}if(s.an>0){k=a3.e.a.length
q=a3.a.k4
C.c.a1(q.a,q.d,k)
for(q=[P.v],j=0;j<k;++j){o=a3.a
n=a3.e.a
if(j>=n.length)return H.d(n,j)
n=n[j]
o.toString
H.f(n,"$ial")
o=o.r1
if(j>=o.length)return H.d(o,j)
o=o[j]
i=new Float32Array(H.c0(H.l(n.ad(0,!0),"$ib",q,"$ab")))
C.c.ex(o.a,o.d,!1,i)}}switch(s.a){case C.d:break
case C.j:q=a3.a
o=a3.f.f
q=q.r2
q.toString
n=o.a
h=o.b
o=o.c
C.c.u(q.a,q.d,n,h,o)
break
case C.h:a3.V(l,a3.f.d)
q=a3.a
o=a3.f.d
q.af(q.rx,q.x1,o)
o=a3.a
q=a3.f.f
o=o.r2
o.toString
n=q.a
h=q.b
q=q.c
C.c.u(o.a,o.d,n,h,q)
break
case C.i:a3.V(l,a3.f.e)
q=a3.a
o=a3.f.e
q.aa(q.ry,q.x1,o)
o=a3.a
q=a3.f.f
o=o.r2
o.toString
n=q.a
h=q.b
q=q.c
C.c.u(o.a,o.d,n,h,q)
break}if(s.k2){switch(s.b){case C.d:break
case C.j:q=a3.a
o=a3.r.f
q=q.x2
q.toString
n=o.a
h=o.b
o=o.c
C.c.u(q.a,q.d,n,h,o)
break
case C.h:a3.V(l,a3.r.d)
q=a3.a
o=a3.r.d
q.af(q.y1,q.an,o)
o=a3.a
q=a3.r.f
o=o.x2
o.toString
n=q.a
h=q.b
q=q.c
C.c.u(o.a,o.d,n,h,q)
break
case C.i:a3.V(l,a3.r.e)
q=a3.a
o=a3.r.e
q.aa(q.y2,q.an,o)
o=a3.a
q=a3.r.f
o=o.x2
o.toString
n=q.a
h=q.b
q=q.c
C.c.u(o.a,o.d,n,h,q)
break}switch(s.c){case C.d:break
case C.j:q=a3.a
o=a3.x.f
q=q.ag
q.toString
n=o.a
h=o.b
o=o.c
C.c.u(q.a,q.d,n,h,o)
break
case C.h:a3.V(l,a3.x.d)
q=a3.a
o=a3.x.d
q.af(q.bj,q.bk,o)
o=a3.a
q=a3.x.f
o=o.ag
o.toString
n=q.a
h=q.b
q=q.c
C.c.u(o.a,o.d,n,h,q)
break
case C.i:a3.V(l,a3.x.e)
q=a3.a
o=a3.x.e
q.aa(q.dH,q.bk,o)
o=a3.a
q=a3.x.f
o=o.ag
o.toString
n=q.a
h=q.b
q=q.c
C.c.u(o.a,o.d,n,h,q)
break}switch(s.d){case C.d:break
case C.j:q=a3.a
o=a3.y.f
q=q.bl
q.toString
n=o.a
h=o.b
o=o.c
C.c.u(q.a,q.d,n,h,o)
break
case C.h:a3.V(l,a3.y.d)
q=a3.a
o=a3.y.d
q.af(q.dI,q.bm,o)
o=a3.a
q=a3.y.f
o=o.bl
o.toString
n=q.a
h=q.b
q=q.c
C.c.u(o.a,o.d,n,h,q)
break
case C.i:a3.V(l,a3.y.e)
q=a3.a
o=a3.y.e
q.aa(q.dJ,q.bm,o)
o=a3.a
q=a3.y.f
o=o.bl
o.toString
n=q.a
h=q.b
q=q.c
C.c.u(o.a,o.d,n,h,q)
break}switch(s.e){case C.d:break
case C.j:q=a3.a
o=a3.z.f
q=q.bn
q.toString
n=o.a
h=o.b
o=o.c
C.c.u(q.a,q.d,n,h,o)
o=a3.a
h=a3.z.ch
o=o.bp
C.c.O(o.a,o.d,h)
break
case C.h:a3.V(l,a3.z.d)
q=a3.a
o=a3.z.d
q.af(q.dK,q.bo,o)
o=a3.a
q=a3.z.f
o=o.bn
o.toString
n=q.a
h=q.b
q=q.c
C.c.u(o.a,o.d,n,h,q)
q=a3.a
h=a3.z.ch
q=q.bp
C.c.O(q.a,q.d,h)
break
case C.i:a3.V(l,a3.z.e)
q=a3.a
o=a3.z.e
q.aa(q.dL,q.bo,o)
o=a3.a
q=a3.z.f
o=o.bn
o.toString
n=q.a
h=q.b
q=q.c
C.c.u(o.a,o.d,n,h,q)
q=a3.a
h=a3.z.ch
q=q.bp
C.c.O(q.a,q.d,h)
break}if(s.z>0){k=a3.dx.e.length
q=a3.a.dW
C.c.a1(q.a,q.d,k)
q=a5.db
g=q.gZ(q)
for(q=a3.dx.e,o=q.length,f=0,e=0;e<q.length;q.length===o||(0,H.G)(q),++e){d=q[e]
n=a3.a.cq
if(f>=n.length)return H.d(n,f)
c=n[f]
n=g.cO(d.a)
h=n.a
b=n.b
a=n.c
if(typeof a!=="number")return a.m()
a=n.v(0,Math.sqrt(h*h+b*b+a*a))
b=c.b
h=a.a
n=a.b
a=a.c
C.c.u(b.a,b.d,h,n,a)
a=d.c
n=c.c
C.c.u(n.a,n.d,a.a,a.b,a.c);++f}}if(s.Q>0){k=a3.dx.f.length
q=a3.a.dX
C.c.a1(q.a,q.d,k)
q=a5.db
g=q.gZ(q)
for(q=a3.dx.f,o=q.length,f=0,e=0;e<q.length;q.length===o||(0,H.G)(q),++e){d=q[e]
n=a3.a.cr
if(f>=n.length)return H.d(n,f)
c=n[f]
n=d.gb5(d)
h=c.b
C.c.u(h.a,h.d,n.a,n.b,n.c)
n=g.ba(d.gb5(d))
h=c.c
C.c.u(h.a,h.d,n.a,n.b,n.c)
n=d.gam(d)
h=c.d
C.c.u(h.a,h.d,n.a,n.b,n.c)
n=d.gcb()
h=c.e
C.c.O(h.a,h.d,n)
n=d.gcc()
h=c.f
C.c.O(h.a,h.d,n)
n=d.gcd()
h=c.r
C.c.O(h.a,h.d,n);++f}}if(s.ch>0){k=a3.dx.r.length
q=a3.a.dY
C.c.a1(q.a,q.d,k)
q=a5.db
g=q.gZ(q)
for(q=a3.dx.r,o=q.length,f=0,e=0;e<q.length;q.length===o||(0,H.G)(q),++e){d=q[e]
n=a3.a.cs
if(f>=n.length)return H.d(n,f)
c=n[f]
n=d.gb5(d)
h=c.b
C.c.u(h.a,h.d,n.a,n.b,n.c)
n=d.gcp(d).jF()
h=c.c
C.c.u(h.a,h.d,n.a,n.b,n.c)
n=g.ba(d.gb5(d))
h=c.d
C.c.u(h.a,h.d,n.a,n.b,n.c)
n=d.gam(d)
h=c.e
C.c.u(h.a,h.d,n.a,n.b,n.c)
n=d.gjD()
h=c.f
C.c.O(h.a,h.d,n)
n=d.gjC()
h=c.r
C.c.O(h.a,h.d,n)
n=d.gcb()
h=c.x
C.c.O(h.a,h.d,n)
n=d.gcc()
h=c.y
C.c.O(h.a,h.d,n)
n=d.gcd()
h=c.z
C.c.O(h.a,h.d,n);++f}}if(s.cx>0){k=a3.dx.x.length
q=a3.a.dZ
C.c.a1(q.a,q.d,k)
q=a5.db
g=q.gZ(q)
for(q=a3.dx.x,o=q.length,n=[a4],f=0,e=0;e<q.length;q.length===o||(0,H.G)(q),++e){d=q[e]
h=a3.a.ct
if(f>=h.length)return H.d(h,f)
c=h[f]
h=d.gb7()
H.l(l,"$ib",n,"$ab")
if(!C.a.aK(l,h)){h.sb_(0,l.length)
C.a.h(l,h)}h=d.gcp(d)
b=c.d
C.c.u(b.a,b.d,h.a,h.b,h.c)
h=d.gbE()
b=c.b
C.c.u(b.a,b.d,h.a,h.b,h.c)
h=d.gbC(d)
b=c.c
C.c.u(b.a,b.d,h.a,h.b,h.c)
h=g.cO(d.gcp(d))
b=h.a
a=h.b
a0=h.c
if(typeof a0!=="number")return a0.m()
a0=h.v(0,Math.sqrt(b*b+a*a+a0*a0))
a=c.e
b=a0.a
h=a0.b
a0=a0.c
C.c.u(a.a,a.d,b,h,a0)
a0=d.gam(d)
h=c.f
C.c.u(h.a,h.d,a0.a,a0.b,a0.c)
a0=d.gb7()
h=a0.gb0(a0)
if(!h){h=c.x
C.c.a1(h.a,h.d,1)}else{h=c.r
b=a0.gb0(a0)
a=h.a
h=h.d
if(!b)a.uniform1i(h,0)
else a.uniform1i(h,a0.gb_(a0))
h=c.x
C.c.a1(h.a,h.d,0)}++f}}if(s.cy>0){k=a3.dx.y.length
q=a3.a.e_
C.c.a1(q.a,q.d,k)
q=a5.db
g=q.gZ(q)
for(q=a3.dx.y,o=q.length,n=[P.v],h=[a4],f=0,e=0;e<q.length;q.length===o||(0,H.G)(q),++e){d=q[e]
b=a3.a.cu
if(f>=b.length)return H.d(b,f)
c=b[f]
b=d.gb7()
H.l(l,"$ib",h,"$ab")
if(!C.a.aK(l,b)){b.sb_(0,l.length)
C.a.h(l,b)}a1=g.m(0,d.gZ(d))
b=d.gZ(d)
a=$.cs
b=b.ba(a==null?$.cs=new V.a0(0,0,0):a)
a=c.b
C.c.u(a.a,a.d,b.a,b.b,b.c)
b=$.cs
b=a1.ba(b==null?$.cs=new V.a0(0,0,0):b)
a=c.c
C.c.u(a.a,a.d,b.a,b.b,b.c)
b=a1.e9(0)
a=c.d
i=new Float32Array(H.c0(H.l(new V.dv(b.a,b.b,b.c,b.e,b.f,b.r,b.y,b.z,b.Q).ad(0,!0),"$ib",n,"$ab")))
C.c.ew(a.a,a.d,!1,i)
a=d.gam(d)
b=c.e
C.c.u(b.a,b.d,a.a,a.b,a.c)
a=d.gb7()
b=a.gb0(a)
if(!b){b=c.r
C.c.a1(b.a,b.d,1)}else{b=c.f
a0=a.gb0(a)
a2=b.a
b=b.d
if(!a0)a2.uniform1i(b,0)
else a2.uniform1i(b,a.gb_(a))
b=c.r
C.c.a1(b.a,b.d,0)}b=d.gcb()
a=c.x
C.c.O(a.a,a.d,b)
b=d.gcc()
a=c.y
C.c.O(a.a,a.d,b)
b=d.gcd()
a=c.z
C.c.O(a.a,a.d,b);++f}}if(s.db>0){k=a3.dx.z.length
q=a3.a.e0
C.c.a1(q.a,q.d,k)
q=a5.db
g=q.gZ(q)
for(q=a3.dx.z,o=q.length,a4=[a4],f=0,e=0;e<q.length;q.length===o||(0,H.G)(q),++e){d=q[e]
n=a3.a.cv
if(f>=n.length)return H.d(n,f)
c=n[f]
n=d.gb7()
H.l(l,"$ib",a4,"$ab")
if(!C.a.aK(l,n)){n.sb_(0,l.length)
C.a.h(l,n)}n=d.gb5(d)
h=c.b
C.c.u(h.a,h.d,n.a,n.b,n.c)
n=d.gcp(d)
h=c.c
C.c.u(h.a,h.d,n.a,n.b,n.c)
n=d.gbE()
h=c.d
C.c.u(h.a,h.d,n.a,n.b,n.c)
n=d.gbC(d)
h=c.e
C.c.u(h.a,h.d,n.a,n.b,n.c)
n=g.ba(d.gb5(d))
h=c.f
C.c.u(h.a,h.d,n.a,n.b,n.c)
n=d.gb7()
h=n.gb0(n)
if(!h){n=c.x
C.c.a1(n.a,n.d,1)}else{h=c.r
b=n.gb0(n)
a=h.a
h=h.d
if(!b)a.uniform1i(h,0)
else a.uniform1i(h,n.gb_(n))
n=c.x
C.c.a1(n.a,n.d,0)}n=d.gam(d)
h=c.y
C.c.u(h.a,h.d,n.a,n.b,n.c)
n=d.gjG()
h=c.z
C.c.O(h.a,h.d,n)
n=d.gjH()
h=c.Q
C.c.O(h.a,h.d,n)
n=d.gcb()
h=c.ch
C.c.O(h.a,h.d,n)
n=d.gcc()
h=c.cx
C.c.O(h.a,h.d,n)
n=d.gcd()
h=c.cy
C.c.O(h.a,h.d,n);++f}}}switch(s.f){case C.d:break
case C.j:break
case C.h:a3.V(l,a3.Q.d)
a4=a3.a
q=a3.Q.d
a4.af(a4.dM,a4.bq,q)
break
case C.i:a3.V(l,a3.Q.e)
a4=a3.a
q=a3.Q.e
a4.aa(a4.dN,a4.bq,q)
break}if(s.fr){a4=a3.a
q=a5.Q
if(q==null){q=a5.db
q=a5.Q=q.gZ(q).e9(0)}a4=a4.id
a4.toString
a4.ak(q.ad(0,!0))}if(s.dy){a3.V(l,a3.ch)
a4=a3.a
q=a3.ch
a4.aa(a4.dO,a4.dP,q)
switch(s.r){case C.d:break
case C.j:a4=a3.a
q=a3.cx.f
a4=a4.br
a4.toString
o=q.a
n=q.b
q=q.c
C.c.u(a4.a,a4.d,o,n,q)
break
case C.h:a3.V(l,a3.cx.d)
a4=a3.a
q=a3.cx.d
a4.af(a4.dQ,a4.bs,q)
q=a3.a
a4=a3.cx.f
q=q.br
q.toString
o=a4.a
n=a4.b
a4=a4.c
C.c.u(q.a,q.d,o,n,a4)
break
case C.i:a3.V(l,a3.cx.e)
a4=a3.a
q=a3.cx.e
a4.aa(a4.dR,a4.bs,q)
q=a3.a
a4=a3.cx.f
q=q.br
q.toString
o=a4.a
n=a4.b
a4=a4.c
C.c.u(q.a,q.d,o,n,a4)
break}switch(s.x){case C.d:break
case C.j:a4=a3.a
q=a3.cy.f
a4=a4.bu
a4.toString
o=q.a
n=q.b
q=q.c
C.c.u(a4.a,a4.d,o,n,q)
q=a3.a
n=a3.cy.ch
q=q.bt
C.c.O(q.a,q.d,n)
break
case C.h:a3.V(l,a3.cy.d)
a4=a3.a
q=a3.cy.d
a4.af(a4.dS,a4.bv,q)
q=a3.a
a4=a3.cy.f
q=q.bu
q.toString
o=a4.a
n=a4.b
a4=a4.c
C.c.u(q.a,q.d,o,n,a4)
a4=a3.a
n=a3.cy.ch
a4=a4.bt
C.c.O(a4.a,a4.d,n)
break
case C.i:a3.V(l,a3.cy.e)
a4=a3.a
q=a3.cy.e
a4.aa(a4.dT,a4.bv,q)
q=a3.a
a4=a3.cy.f
q=q.bu
q.toString
o=a4.a
n=a4.b
a4=a4.c
C.c.u(q.a,q.d,o,n,a4)
a4=a3.a
n=a3.cy.ch
a4=a4.bt
C.c.O(a4.a,a4.d,n)
break}}a4=s.y
q=a4!==C.d
if(q){switch(a4){case C.d:break
case C.j:a4=a3.a
o=a3.db.f
a4=a4.bw
C.c.O(a4.a,a4.d,o)
break
case C.h:a3.V(l,a3.db.d)
a4=a3.a
o=a3.db.d
a4.af(a4.dU,a4.bx,o)
o=a3.a
a4=a3.db.f
o=o.bw
C.c.O(o.a,o.d,a4)
break
case C.i:a3.V(l,a3.db.e)
a4=a3.a
o=a3.db.e
a4.aa(a4.dV,a4.bx,o)
o=a3.a
a4=a3.db.f
o=o.bw
C.c.O(o.a,o.d,a4)
break}p.enable(3042)
p.blendFunc(770,771)}for(j=0;j<l.length;++j)l[j].bh(a5)
a4=a6.e
a4.bh(a5)
a4.aN(a5)
a4.ev(a5)
if(q)p.disable(3042)
for(j=0;j<l.length;++j)l[j].ev(a5)
a4=a3.a
a4.toString
p.useProgram(null)
a4.x.iG()},
i:function(a){var u=this.a
if(u!=null)return u.b
else return this.d8().ag},
sf5:function(a){this.e=H.l(a,"$ia1",[V.al],"$aa1")}}
O.h0.prototype={}
O.du.prototype={
aG:function(){}}
O.h1.prototype={}
O.b1.prototype={
du:function(a){var u,t,s=this
if(!J.P(s.f,a)){u=s.f
s.f=a
t=new D.Q(s.b+".color",u,a,[V.a2])
t.b=!0
s.a.a9(t)}},
aG:function(){this.eG()
this.du(new V.a2(1,1,1))},
sam:function(a,b){var u,t=this
if(t.c===C.d){t.c=C.j
t.aG()
u=t.a
u.a=null
u.a9(null)}t.du(b)}}
O.h3.prototype={
hE:function(a){var u=this,t=u.ch
if(!(Math.abs(t-a)<$.R().a)){u.ch=a
t=new D.Q(u.b+".refraction",t,a,[P.v])
t.b=!0
u.a.a9(t)}},
aG:function(){this.bJ()
this.hE(1)}}
O.h4.prototype={
c5:function(a){var u=this,t=u.ch
if(!(Math.abs(t-a)<$.R().a)){u.ch=a
t=new D.Q(u.b+".shininess",t,a,[P.v])
t.b=!0
u.a.a9(t)}},
aG:function(){this.bJ()
this.c5(100)}}
O.bZ.prototype={}
T.cy.prototype={}
T.hW.prototype={}
T.i_.prototype={
gA:function(){var u=this.y
return u==null?this.y=D.S():u}}
T.i0.prototype={
iX:function(a){var u,t,s=3553,r=this.a,q=r.createTexture()
r.bindTexture(s,q)
r.texParameteri(s,10242,33071)
r.texParameteri(s,10243,33071)
r.texParameteri(s,10241,9729)
r.texParameteri(s,10240,9729)
r.bindTexture(s,null);++this.d
u=W.li(a)
t=new T.i_()
t.a=0
t.b=q
t.d=t.c=!1
t.x=t.r=0
r=W.o
W.a7(u,"load",H.m(new T.i1(this,t,u,!1,q,!1,!1),{func:1,ret:-1,args:[r]}),!1,r)
return t},
hC:function(a,b,c){var u,t,s,r
b=V.l2(b)
u=V.l2(a.width)
t=V.l2(a.height)
u=Math.min(u,b)
t=Math.min(t,b)
if(a.width===u&&a.height===t)return a
else{s=W.ku()
s.width=u
s.height=t
r=H.f(C.m.eA(s,"2d"),"$icd")
r.imageSmoothingEnabled=!1
r.drawImage(a,0,0,s.width,s.height)
return P.ob(r.getImageData(0,0,s.width,s.height))}}}
T.i1.prototype={
$1:function(a){var u=this,t=3553,s=u.a,r=u.c,q=s.hC(r,s.b,u.d),p=u.b
p.r=r.width
p.x=r.height
r=s.a
r.bindTexture(t,u.e)
r.pixelStorei(37440,u.f?1:0)
C.c.jo(r,t,0,6408,6408,5121,q)
if(u.r)r.generateMipmap(t)
r.bindTexture(t,null)
if(!p.d){p.d=!0
r=p.y
if(r!=null)r.iJ()}++s.e},
$S:15}
T.i2.prototype={}
V.f_.prototype={
aM:function(a,b){return!0},
i:function(a){return"all"},
$ibk:1}
V.bk.prototype={}
V.ds.prototype={
aM:function(a,b){var u,t,s
for(u=this.a,t=u.length,s=0;s<u.length;u.length===t||(0,H.G)(u),++s)if(u[s].aM(0,b))return!0
return!1},
i:function(a){var u,t,s,r,q
for(u=this.a,t=u.length,s="",r=0;r<u.length;u.length===t||(0,H.G)(u),++r){q=u[r]
if(s.length!==0)s+=", "
s+=q.i(0)}return s},
sat:function(a){this.a=H.l(a,"$ib",[V.bk],"$ab")},
$ibk:1}
V.bn.prototype={
aM:function(a,b){return!this.eF(0,b)},
i:function(a){return"!["+this.cV(0)+"]"}}
V.hA.prototype={
eK:function(a){var u,t
if(a.a.length<=0)throw H.c(P.x("May not create a SetMatcher with zero characters."))
u=new H.aI([P.p,P.ab])
for(t=new H.dq(a,a.gk(a),[H.aD(a,"y",0)]);t.D();)u.l(0,t.d,!0)
this.shD(u)},
aM:function(a,b){return this.a.bi(0,b)},
i:function(a){var u=this.a
return P.cx(u.gao(u),0,null)},
shD:function(a){this.a=H.l(a,"$iD",[P.p,P.ab],"$aD")},
$ibk:1}
V.cv.prototype={
C:function(a,b){var u,t,s,r
for(u=this.c,t=u.length,s=0;s<t;++s){r=u[s]
if(r.b.b===b)return r}r=new V.cA(this.a.P(0,b))
r.sat(H.e([],[V.bk]))
r.c=!1
C.a.h(this.c,r)
return r},
iN:function(a){var u,t,s,r
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.G)(u),++s){r=u[s]
if(r.aM(0,a))return r}return},
i:function(a){return this.b},
shW:function(a){this.c=H.l(a,"$ib",[V.cA],"$ab")}}
V.dR.prototype={
i:function(a){var u=H.ml(this.b,"\n","\\n"),t=H.ml(u,"\t","\\t")
return this.a+":"+this.c+':"'+t+'"'}}
V.cz.prototype={
i:function(a){return this.b},
shx:function(a){var u=P.h
this.c=H.l(a,"$iD",[u,u],"$aD")}}
V.i5.prototype={
P:function(a,b){var u=this.a.j(0,b)
if(u==null){u=new V.cv(this,b)
u.shW(H.e([],[V.cA]))
u.d=null
this.a.l(0,b,u)}return u},
b9:function(a){var u,t=this.b.j(0,a)
if(t==null){t=new V.cz(a)
u=P.h
t.shx(new H.aI([u,u]))
this.b.l(0,a,t)}return t},
jt:function(a){var u,t,s,r,q,p,o,n,m=null,l=H.e([],[V.dR]),k=this.c,j=[P.p],i=H.e([],j)
for(u=a.length,t=m,s=0;!0;){if(s>=u){if(t!=null)C.a.h(l,t)
return l}r=C.b.G(a,s)
q=k.iN(r)
if(q==null){if(t==null){C.a.h(i,r)
p=P.cx(i,0,m)
throw H.c(P.x("Untokenizable string [state: "+k.b+", index "+s+']: "'+p+'"'))}C.a.h(l,t)
s=t.c+1
i=H.e([],j)
k=this.c
t=m}else{if(!q.c)C.a.h(i,r)
k=q.b
if(k.d!=null){p=P.cx(i,0,m)
o=k.d
n=o.c.j(0,p)
t=new V.dR(n==null?o.b:n,p,s)}++s}}},
shM:function(a){this.a=H.l(a,"$iD",[P.h,V.cv],"$aD")},
shP:function(a){this.b=H.l(a,"$iD",[P.h,V.cz],"$aD")}}
V.cA.prototype={
i:function(a){return this.b.b+": "+this.cV(0)}}
X.d9.prototype={$ibm:1}
X.fF.prototype={
gA:function(){var u=this.x
return u==null?this.x=D.S():u}}
X.dB.prototype={
gA:function(){var u=this.f
return u==null?this.f=D.S():u},
aE:function(a){var u
H.f(a,"$iz")
u=this.f
if(u!=null)u.H(a)},
f_:function(){return this.aE(null)},
sb2:function(a){var u,t,s=this
if(!J.P(s.b,a)){u=s.b
if(u!=null)u.gA().M(0,s.gcZ())
t=s.b
s.b=a
if(a!=null)a.gA().h(0,s.gcZ())
u=new D.Q("mover",t,s.b,[U.aa])
u.b=!0
s.aE(u)}},
$ibm:1,
$id9:1}
X.dL.prototype={}
V.kl.prototype={
$1:function(a){H.f(a,"$ib4")
P.l3(C.e.eu(this.a.giQ(),2)+" fps")},
$S:46}
V.hq.prototype={
ca:function(a,b,c,d){var u,t,s,r,q,p,o,n,m=this
H.m(c,{func:1,ret:-1})
if(m.c==null)return
u=m.a
t=P.iu().gb6().j(0,H.n(u))
if(t==null)if(d){c.$0()
m.aV(b)
s=!0}else s=!1
else if(t===b){c.$0()
s=!0}else s=!1
r=document
q=r.createElement("label")
p=q.style
p.whiteSpace="nowrap"
J.ca(m.c).h(0,q)
o=W.mX("radio")
o.checked=s
o.name=u
u=W.o
W.a7(o,"change",H.m(new V.hr(m,o,c,b),{func:1,ret:-1,args:[u]}),!1,u)
q.appendChild(o)
n=r.createElement("span")
n.textContent=b
q.appendChild(n)
J.ca(m.c).h(0,r.createElement("br"))},
a_:function(a,b,c){return this.ca(a,b,c,!1)},
aV:function(a){var u,t,s=P.iu(),r=P.h,q=P.lm(s.gb6(),r,r)
q.l(0,this.a,a)
u=s.cL(0,q)
r=window.history
t=u.i(0)
r.toString
r.replaceState(new P.eB([],[]).bF(""),"",t)}}
V.hr.prototype={
$1:function(a){var u=this
if(H.C(u.b.checked)){u.c.$0()
u.a.aV(u.d)}},
$S:15}
V.hE.prototype={
eM:function(a,b){var u,t,s,r,q=document,p=q.body,o=q.createElement("div")
o.className="scrollTop"
p.appendChild(o)
u=q.createElement("div")
u.className="scrollPage"
p.appendChild(u)
t=q.createElement("div")
t.className="pageCenter"
u.appendChild(t)
if(a.length!==0){q.title=a
s=q.createElement("div")
s.className="pageTitle"
s.textContent=a
t.appendChild(s)}r=q.createElement("div")
this.a=r
t.appendChild(r)
this.b=null
r=W.o
W.a7(q,"scroll",H.m(new V.hG(o),{func:1,ret:-1,args:[r]}),!1,r)},
dB:function(a){var u,t,s,r,q,p,o,n,m,l,k
H.l(a,"$ib",[P.h],"$ab")
this.hH()
u=document
t=u.createElement("div")
t.className="textPar"
for(s=this.b.jt(C.a.iV(a)),r=s.length,q=0;q<s.length;s.length===r||(0,H.G)(s),++q){p=s[q]
switch(p.a){case"Bold":o=u.createElement("div")
o.className="boldPar"
o.textContent=p.b
t.appendChild(o)
break
case"Italic":o=u.createElement("div")
o.className="italicPar"
o.textContent=p.b
t.appendChild(o)
break
case"Code":o=u.createElement("div")
o.className="codePar"
o.textContent=p.b
t.appendChild(o)
break
case"Link":n=p.b
if(H.oD(n,"|",0)){m=n.split("|")
l=u.createElement("a")
l.className="linkPar"
if(1>=m.length)return H.d(m,1)
l.href=H.K(m[1])
l.textContent=H.K(m[0])
t.appendChild(l)}else{k=P.jz(C.S,n,C.l,!1)
l=u.createElement("a")
l.className="linkPar"
l.href="#"+H.n(k)
l.textContent=n
t.appendChild(l)}break
case"Other":o=u.createElement("div")
o.className="normalPar"
o.textContent=p.b
t.appendChild(o)
break}}this.a.appendChild(t)},
iq:function(a){var u,t,s,r,q,p,o,n="auto"
H.l(a,"$ib",[P.h],"$ab")
u=document
t=u.createElement("table")
t.id="shellTable"
s=t.style
s.width="100%"
s.padding="0px"
s.marginLeft=n
s.marginRight=n
this.a.appendChild(t)
r=t.insertRow(-1)
s=H.f(r.insertCell(-1),"$ibq").style
s.textAlign="center"
s.verticalAlign="top"
s.marginLeft=n
s.marginRight=n
for(q=0;q<3;++q){p=u.createElement("div")
p.id=a[q]
s=p.style
s.textAlign="left"
s=p.style
s.verticalAlign="top"
o=H.f(r.insertCell(-1),"$ibq")
s=o.style
s.textAlign="center"
s.verticalAlign="top"
s.marginLeft=n
s.marginRight=n
o.appendChild(p)}},
hH:function(){var u,t,s,r,q="Start",p="Bold",o="Italic",n="ItalicEnd",m="Code",l="LinkHead",k="LinkTail",j="LinkEnd",i="Other"
if(this.b!=null)return
u=new V.i5()
t=P.h
u.shM(new H.aI([t,V.cv]))
u.shP(new H.aI([t,V.cz]))
u.c=null
u.c=u.P(0,q)
t=u.P(0,q).C(0,p)
s=V.ah(new H.a5("*"))
C.a.h(t.a,s)
t.c=!0
t=u.P(0,p).C(0,p)
s=new V.bn()
r=[V.bk]
s.sat(H.e([],r))
C.a.h(t.a,s)
t=V.ah(new H.a5("*"))
C.a.h(s.a,t)
t=u.P(0,p).C(0,"BoldEnd")
s=V.ah(new H.a5("*"))
C.a.h(t.a,s)
t.c=!0
t=u.P(0,q).C(0,o)
s=V.ah(new H.a5("_"))
C.a.h(t.a,s)
t.c=!0
t=u.P(0,o).C(0,o)
s=new V.bn()
s.sat(H.e([],r))
C.a.h(t.a,s)
t=V.ah(new H.a5("_"))
C.a.h(s.a,t)
t=u.P(0,o).C(0,n)
s=V.ah(new H.a5("_"))
C.a.h(t.a,s)
t.c=!0
t=u.P(0,q).C(0,m)
s=V.ah(new H.a5("`"))
C.a.h(t.a,s)
t.c=!0
t=u.P(0,m).C(0,m)
s=new V.bn()
s.sat(H.e([],r))
C.a.h(t.a,s)
t=V.ah(new H.a5("`"))
C.a.h(s.a,t)
t=u.P(0,m).C(0,"CodeEnd")
s=V.ah(new H.a5("`"))
C.a.h(t.a,s)
t.c=!0
t=u.P(0,q).C(0,l)
s=V.ah(new H.a5("["))
C.a.h(t.a,s)
t.c=!0
t=u.P(0,l).C(0,k)
s=V.ah(new H.a5("|"))
C.a.h(t.a,s)
s=u.P(0,l).C(0,j)
t=V.ah(new H.a5("]"))
C.a.h(s.a,t)
s.c=!0
s=u.P(0,l).C(0,l)
t=new V.bn()
t.sat(H.e([],r))
C.a.h(s.a,t)
s=V.ah(new H.a5("|]"))
C.a.h(t.a,s)
s=u.P(0,k).C(0,j)
t=V.ah(new H.a5("]"))
C.a.h(s.a,t)
s.c=!0
s=u.P(0,k).C(0,k)
t=new V.bn()
t.sat(H.e([],r))
C.a.h(s.a,t)
s=V.ah(new H.a5("|]"))
C.a.h(t.a,s)
C.a.h(u.P(0,q).C(0,i).a,new V.f_())
s=u.P(0,i).C(0,i)
t=new V.bn()
t.sat(H.e([],r))
C.a.h(s.a,t)
s=V.ah(new H.a5("*_`["))
C.a.h(t.a,s)
s=u.P(0,"BoldEnd")
s.d=s.a.b9(p)
s=u.P(0,n)
s.d=s.a.b9(o)
s=u.P(0,"CodeEnd")
s.d=s.a.b9(m)
s=u.P(0,j)
s.d=s.a.b9("Link")
s=u.P(0,i)
s.d=s.a.b9(i)
this.b=u}}
V.hG.prototype={
$1:function(a){P.lC(C.t,new V.hF(this.a))},
$S:15}
V.hF.prototype={
$0:function(){var u=C.e.ai(document.documentElement.scrollTop),t=this.a.style,s=H.n(-0.01*u)+"px"
t.top=s},
$S:0}
V.hX.prototype={
a_:function(a,b,c){var u,t,s,r,q=this,p=W.li(null)
p.src=b
p.height=p.width=64
u=p.style
u.border="solid 2px white"
u=J.ca(q.c)
t=u.gk(u)
u=W.a4
W.a7(p,"click",H.m(new V.hZ(q,p,b,t),{func:1,ret:-1,args:[u]}),!1,u)
J.ca(q.c).h(0,p)
J.ca(q.c).h(0,document.createElement("br"))
s=P.iu().gb6().j(0,H.n(q.a))
if(s==null){q.aV(t)
r=c}else r=P.d_(s,null,null)===t
if(r)p.click()},
h:function(a,b){return this.a_(a,b,!1)},
aV:function(a){var u,t,s=P.iu(),r=P.h,q=P.lm(s.gb6(),r,r)
q.l(0,this.a,""+a)
u=s.cL(0,q)
r=window.history
t=u.i(0)
r.toString
r.replaceState(new P.eB([],[]).bF(""),"",t)}}
V.hZ.prototype={
$1:function(a){var u,t,s=this
H.f(a,"$ia4")
u=s.a
t=J.ca(u.c)
t.I(t,new V.hY())
t=s.b.style
t.border="solid 2px black"
u.d.$1(s.c)
u.aV(s.d)},
$S:47}
V.hY.prototype={
$1:function(a){var u
H.f(a,"$iX")
if(!!J.U(a).$ibR){u=a.style
u.border="solid 2px white"}},
$S:48}
K.k1.prototype={
$0:function(){var u,t,s,r=this.a
if(r.a!=null&&r.b.length!==0){u=this.b
t=u.f.iX(r.b)
s=t.y
if(s==null)s=t.y=D.S()
s.h(0,new K.k0(r,u,t,this.c))}},
$S:0}
K.k0.prototype={
$1:function(a){var u,t,s,r,q,p,o=this
H.f(a,"$iz")
u=o.b.f
t=o.c
s=t.r
r=t.x
u=u.a
u.bindFramebuffer(36160,u.createFramebuffer())
u.framebufferTexture2D(36160,36064,3553,t.b,0)
if(typeof s!=="number")return s.m()
if(typeof r!=="number")return H.q(r)
q=new Uint8Array(s*r*4)
u.readPixels(0,0,s,r,6408,5121,q)
u.bindFramebuffer(36160,null)
u=o.a
t=u.a
p=F.kG()
p.bz(t)
p.a4()
p.iu(new T.i2(q,s,r),u.c)
u=$.aT()
u.toString
p.jv(new Z.aS($.l5().a&~u.a))
p.ju(!1)
p.a4()
o.d.scT(0,p)},
$S:10}
K.k2.prototype={
$1:function(a){this.a.b=a
this.b.$0()},
$S:20}
K.k3.prototype={
$1:function(a){this.a.a=a
this.b.$0()},
$S:49}
K.kb.prototype={
$0:function(){this.a.$1(F.ma(50,null,50))},
$S:0}
K.kc.prototype={
$0:function(){this.a.$1(F.oc(!1,!1,80,80))},
$S:0}
K.kd.prototype={
$0:function(){this.a.$1(F.ot(80,80))},
$S:0}
K.ke.prototype={
$0:function(){this.a.$1(F.oC(50,50))},
$S:0}
K.kf.prototype={
$0:function(){this.a.$1(F.oG(50,50))},
$S:0}
K.kg.prototype={
$0:function(){this.a.$1(F.l_(50,50))},
$S:0}
K.kh.prototype={
$0:function(){this.a.$1(F.l_(100,100))},
$S:0}
K.ki.prototype={
$0:function(){this.a.$1(F.l_(150,150))},
$S:0}
K.k4.prototype={
$1:function(a){this.a.c=a
this.b.$0()},
$S:50}
K.k5.prototype={
$0:function(){this.a.$1(0.1)},
$S:0}
K.k6.prototype={
$0:function(){this.a.$1(0.2)},
$S:0}
K.k7.prototype={
$0:function(){this.a.$1(0.4)},
$S:0}
K.k8.prototype={
$0:function(){this.a.$1(0.6)},
$S:0}
K.k9.prototype={
$0:function(){this.a.$1(0.8)},
$S:0}
K.ka.prototype={
$0:function(){this.a.$1(1)},
$S:0};(function aliases(){var u=J.a.prototype
u.eD=u.i
u=J.dm.prototype
u.eE=u.i
u=O.du.prototype
u.eG=u.aG
u=O.b1.prototype
u.bJ=u.aG
u=V.ds.prototype
u.eF=u.aM
u.cV=u.i})();(function installTearOffs(){var u=hunkHelpers._static_1,t=hunkHelpers._static_0,s=hunkHelpers.installInstanceTearOff,r=hunkHelpers._instance_2u,q=hunkHelpers._instance_0u,p=hunkHelpers._instance_1u,o=hunkHelpers._instance_0i
u(P,"o5","nC",13)
u(P,"o6","nD",13)
u(P,"o7","nE",13)
t(P,"m8","o3",3)
var n
s(n=E.ak.prototype,"geg",0,0,null,["$1","$0"],["eh","j6"],1,0)
s(n,"gei",0,0,null,["$1","$0"],["ej","j7"],1,0)
s(n,"gee",0,0,null,["$1","$0"],["ef","j5"],1,0)
s(n,"gec",0,0,null,["$1","$0"],["ed","j2"],1,0)
r(n,"gj0","j1",9)
r(n,"gj3","j4",9)
s(n=E.dQ.prototype,"gcW",0,0,null,["$1","$0"],["cY","cX"],1,0)
q(n,"gjk","ep",3)
p(n=X.dX.prototype,"gfX","fY",14)
p(n,"gfJ","fK",14)
p(n,"gfR","fS",5)
p(n,"gh0","h1",23)
p(n,"gfZ","h_",23)
p(n,"gh4","h5",5)
p(n,"gh8","h9",5)
p(n,"gfV","fW",5)
p(n,"gh6","h7",5)
p(n,"gfT","fU",5)
p(n,"gha","hb",43)
p(n,"ghc","hd",14)
p(n,"ghp","hq",12)
p(n,"ghl","hm",12)
p(n,"ghn","ho",12)
s(D.bv.prototype,"geP",0,0,null,["$1","$0"],["aq","eQ"],1,0)
s(n=D.dp.prototype,"gdl",0,0,null,["$1","$0"],["dm","h2"],1,0)
p(n,"ghf","hg",35)
r(n,"gfD","fE",21)
r(n,"ghj","hk",21)
o(V.T.prototype,"gk","cB",19)
o(V.J.prototype,"gk","cB",19)
s(n=U.cj.prototype,"gaB",0,0,null,["$1","$0"],["R","a3"],1,0)
r(n,"gfB","fC",18)
r(n,"ghh","hi",18)
s(n=U.dY.prototype,"gaB",0,0,null,["$1","$0"],["R","a3"],1,0)
p(n,"gbT","bU",2)
p(n,"gbV","bW",2)
p(n,"gbX","bY",2)
s(n=U.dZ.prototype,"gaB",0,0,null,["$1","$0"],["R","a3"],1,0)
p(n,"gbT","bU",2)
p(n,"gbV","bW",2)
p(n,"gbX","bY",2)
p(n,"gft","fu",2)
p(n,"gfv","fw",2)
p(n,"ghU","hV",2)
p(n,"ghS","hT",2)
p(n,"ghQ","hR",2)
p(U.e_.prototype,"gfz","fA",2)
s(n=M.df.prototype,"gaC",0,0,null,["$1","$0"],["aD","eR"],1,0)
r(n,"gfN","fO",9)
r(n,"gfP","fQ",9)
s(n=O.dt.prototype,"gfL",0,0,null,["$1","$0"],["a9","fM"],1,0)
s(n,"ghA",0,0,null,["$1","$0"],["ds","hB"],1,0)
r(n,"gfF","fG",17)
r(n,"gfH","fI",17)
s(X.dB.prototype,"gcZ",0,0,null,["$1","$0"],["aE","f_"],1,0)})();(function inheritance(){var u=hunkHelpers.mixin,t=hunkHelpers.inherit,s=hunkHelpers.inheritMany
t(P.N,null)
s(P.N,[H.kB,J.a,J.ap,P.eg,P.j,H.dq,P.aZ,H.bP,H.cI,H.fg,H.ia,P.bw,H.ce,H.ex,P.af,H.fO,H.fQ,H.fJ,P.eE,P.b8,P.aB,P.e1,P.hO,P.cw,P.hP,P.b4,P.aj,P.jC,P.jm,P.cM,P.jg,P.y,P.ju,P.fX,P.bL,P.jB,P.jA,P.ab,P.au,P.a8,P.aY,P.hl,P.dJ,P.e9,P.fE,P.b,P.D,P.F,P.aq,P.h,P.ai,P.c_,P.is,P.jn,W.fj,W.B,W.di,P.jp,P.eJ,P.jh,P.O,O.a1,O.cl,E.fa,E.ak,E.hs,E.dQ,Z.e0,Z.iP,Z.d7,Z.bx,Z.aS,D.fd,D.bO,D.z,X.d8,X.dn,X.fL,X.fU,X.av,X.hb,X.i6,X.dX,D.bv,D.a6,D.dC,D.dI,D.dN,D.dO,D.dP,V.a2,V.bf,V.fv,V.dv,V.al,V.ac,V.a0,V.bo,V.dG,V.T,V.J,U.dY,U.dZ,U.e_,M.df,A.d4,A.f3,A.h2,A.cB,A.cF,A.cD,A.cG,A.cE,A.cH,A.bM,A.dT,A.il,F.a9,F.fy,F.bj,F.fN,F.bA,F.bY,F.hB,F.hC,F.hD,F.ao,F.iD,F.iE,F.iH,F.iJ,F.iK,F.iL,O.bZ,O.du,T.i0,T.i2,V.f_,V.bk,V.ds,V.hA,V.cv,V.dR,V.cz,V.i5,X.d9,X.dL,X.dB,V.hq,V.hE,V.hX])
s(J.a,[J.fI,J.dl,J.dm,J.aH,J.by,J.bh,H.co,H.bz,W.i,W.eZ,W.bJ,W.cd,W.aW,W.aX,W.V,W.e3,W.fn,W.fo,W.e5,W.de,W.e7,W.fq,W.o,W.ea,W.aG,W.fG,W.ec,W.bg,W.fT,W.h5,W.eh,W.ei,W.aJ,W.ej,W.em,W.aK,W.eq,W.es,W.aM,W.et,W.aN,W.ey,W.ay,W.eC,W.i4,W.aP,W.eF,W.i8,W.iy,W.eL,W.eN,W.eP,W.eR,W.eT,P.b0,P.ee,P.b3,P.eo,P.hp,P.ez,P.b5,P.eH,P.f4,P.e2,P.d5,P.dE,P.bX,P.dH,P.dM,P.dU,P.ev])
s(J.dm,[J.hm,J.bD,J.bi])
t(J.kA,J.aH)
s(J.by,[J.dk,J.dj])
t(P.fS,P.eg)
s(P.fS,[H.dV,W.iY,W.iX,P.fA])
t(H.a5,H.dV)
s(P.j,[H.ft,H.fY,H.iQ])
s(P.aZ,[H.fZ,H.iR])
t(H.fh,H.fg)
s(P.bw,[H.hi,H.fK,H.iq,H.ic,H.fc,H.hy,P.f2,P.dA,P.aU,P.ir,P.io,P.dK,P.ff,P.fm])
s(H.ce,[H.kp,H.hT,H.jV,H.jW,H.jX,P.iU,P.iT,P.iV,P.iW,P.jt,P.js,P.j3,P.j7,P.j4,P.j5,P.j6,P.ja,P.jb,P.j9,P.j8,P.hQ,P.hR,P.jK,P.jk,P.jj,P.jl,P.fR,P.fW,P.fr,P.fs,P.ix,P.it,P.iv,P.iw,P.jv,P.jw,P.jy,P.jx,P.jG,P.jF,P.jH,P.jI,W.h7,W.h9,W.hx,W.hN,W.j2,P.jq,P.jM,P.fB,P.fC,P.f6,E.ht,E.hu,E.hv,E.i3,D.fw,D.fx,F.jD,F.jN,F.jP,F.jZ,F.km,F.kn,F.ko,F.jO,F.jS,F.jT,F.iN,F.iM,F.iF,F.iG,T.i1,V.kl,V.hr,V.hG,V.hF,V.hZ,V.hY,K.k1,K.k0,K.k2,K.k3,K.kb,K.kc,K.kd,K.ke,K.kf,K.kg,K.kh,K.ki,K.k4,K.k5,K.k6,K.k7,K.k8,K.k9,K.ka])
s(H.hT,[H.hL,H.cb])
t(H.iS,P.f2)
t(P.fV,P.af)
t(H.aI,P.fV)
t(H.fP,H.ft)
t(H.dx,H.bz)
s(H.dx,[H.cN,H.cP])
t(H.cO,H.cN)
t(H.cp,H.cO)
t(H.cQ,H.cP)
t(H.dy,H.cQ)
s(H.dy,[H.hc,H.hd,H.he,H.hf,H.hg,H.dz,H.cq])
t(P.ji,P.jC)
t(P.jf,P.jm)
t(P.eK,P.fX)
t(P.dW,P.eK)
s(P.bL,[P.f8,P.fu])
t(P.bN,P.hP)
s(P.bN,[P.f9,P.iB,P.iA])
t(P.iz,P.fu)
s(P.a8,[P.v,P.p])
s(P.aU,[P.bW,P.fH])
t(P.j_,P.c_)
s(W.i,[W.H,W.fz,W.cm,W.aL,W.cR,W.aO,W.az,W.cT,W.iO,W.cK,P.f7,P.bI])
s(W.H,[W.X,W.bt])
s(W.X,[W.u,P.r])
s(W.u,[W.f0,W.f1,W.bK,W.dc,W.fD,W.bR,W.ck,W.hz,W.bq])
s(W.aW,[W.cf,W.fk,W.fl])
t(W.fi,W.aX)
t(W.cg,W.e3)
t(W.e6,W.e5)
t(W.dd,W.e6)
t(W.e8,W.e7)
t(W.fp,W.e8)
t(W.ax,W.bJ)
t(W.eb,W.ea)
t(W.ch,W.eb)
t(W.ed,W.ec)
t(W.bQ,W.ed)
t(W.bC,W.o)
s(W.bC,[W.b_,W.a4,W.aQ])
t(W.h6,W.eh)
t(W.h8,W.ei)
t(W.ek,W.ej)
t(W.ha,W.ek)
t(W.en,W.em)
t(W.cr,W.en)
t(W.er,W.eq)
t(W.hn,W.er)
t(W.hw,W.es)
t(W.cS,W.cR)
t(W.hI,W.cS)
t(W.eu,W.et)
t(W.hJ,W.eu)
t(W.hM,W.ey)
t(W.eD,W.eC)
t(W.hU,W.eD)
t(W.cU,W.cT)
t(W.hV,W.cU)
t(W.eG,W.eF)
t(W.i7,W.eG)
t(W.b7,W.a4)
t(W.eM,W.eL)
t(W.iZ,W.eM)
t(W.e4,W.de)
t(W.eO,W.eN)
t(W.jc,W.eO)
t(W.eQ,W.eP)
t(W.el,W.eQ)
t(W.eS,W.eR)
t(W.jo,W.eS)
t(W.eU,W.eT)
t(W.jr,W.eU)
t(W.j0,P.hO)
t(W.kN,W.j0)
t(W.j1,P.cw)
t(P.eB,P.jp)
t(P.ag,P.jh)
t(P.ef,P.ee)
t(P.fM,P.ef)
t(P.ep,P.eo)
t(P.hj,P.ep)
t(P.eA,P.ez)
t(P.hS,P.eA)
t(P.eI,P.eH)
t(P.i9,P.eI)
t(P.f5,P.e2)
t(P.hk,P.bI)
t(P.ew,P.ev)
t(P.hK,P.ew)
s(E.fa,[Z.d6,A.cu,T.cy])
s(D.z,[D.bS,D.bT,D.Q,X.ho])
s(X.ho,[X.dr,X.bl,X.cn,X.dS])
s(O.a1,[D.dp,U.cj])
s(D.fd,[U.fe,U.aa])
t(U.da,U.aa)
t(A.h_,A.cu)
s(A.dT,[A.M,A.ih,A.ii,A.ik,A.ie,A.a_,A.ig,A.L,A.ij,A.im,A.cC,A.aw,A.am,A.an])
t(F.hH,F.fy)
t(F.id,F.fN)
t(F.iI,F.iJ)
t(F.hh,F.iK)
t(O.dt,O.bZ)
s(O.du,[O.h0,O.h1,O.b1])
s(O.b1,[O.h3,O.h4])
t(T.hW,T.cy)
t(T.i_,T.hW)
s(V.ds,[V.bn,V.cA])
t(X.fF,X.dL)
u(H.dV,H.cI)
u(H.cN,P.y)
u(H.cO,H.bP)
u(H.cP,P.y)
u(H.cQ,H.bP)
u(P.eg,P.y)
u(P.eK,P.ju)
u(W.e3,W.fj)
u(W.e5,P.y)
u(W.e6,W.B)
u(W.e7,P.y)
u(W.e8,W.B)
u(W.ea,P.y)
u(W.eb,W.B)
u(W.ec,P.y)
u(W.ed,W.B)
u(W.eh,P.af)
u(W.ei,P.af)
u(W.ej,P.y)
u(W.ek,W.B)
u(W.em,P.y)
u(W.en,W.B)
u(W.eq,P.y)
u(W.er,W.B)
u(W.es,P.af)
u(W.cR,P.y)
u(W.cS,W.B)
u(W.et,P.y)
u(W.eu,W.B)
u(W.ey,P.af)
u(W.eC,P.y)
u(W.eD,W.B)
u(W.cT,P.y)
u(W.cU,W.B)
u(W.eF,P.y)
u(W.eG,W.B)
u(W.eL,P.y)
u(W.eM,W.B)
u(W.eN,P.y)
u(W.eO,W.B)
u(W.eP,P.y)
u(W.eQ,W.B)
u(W.eR,P.y)
u(W.eS,W.B)
u(W.eT,P.y)
u(W.eU,W.B)
u(P.ee,P.y)
u(P.ef,W.B)
u(P.eo,P.y)
u(P.ep,W.B)
u(P.ez,P.y)
u(P.eA,W.B)
u(P.eH,P.y)
u(P.eI,W.B)
u(P.e2,P.af)
u(P.ev,P.y)
u(P.ew,W.B)})();(function constants(){var u=hunkHelpers.makeConstList
C.m=W.bK.prototype
C.N=J.a.prototype
C.a=J.aH.prototype
C.O=J.dj.prototype
C.f=J.dk.prototype
C.n=J.dl.prototype
C.e=J.by.prototype
C.b=J.bh.prototype
C.P=J.bi.prototype
C.V=W.cr.prototype
C.A=J.hm.prototype
C.c=P.bX.prototype
C.u=J.bD.prototype
C.B=W.b7.prototype
C.C=W.cK.prototype
C.W=new P.f9()
C.D=new P.f8()
C.v=function getTagFallback(o) {
  var s = Object.prototype.toString.call(o);
  return s.substring(8, s.length - 1);
}
C.E=function() {
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
C.J=function(getTagFallback) {
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
C.F=function(hooks) {
  if (typeof dartExperimentalFixupGetTag != "function") return hooks;
  hooks.getTag = dartExperimentalFixupGetTag(hooks.getTag);
}
C.G=function(hooks) {
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
C.I=function(hooks) {
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
C.H=function(hooks) {
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
C.w=function(hooks) { return hooks; }

C.K=new P.hl()
C.l=new P.iz()
C.L=new P.iB()
C.k=new P.ji()
C.d=new A.bM(0,"ColorSourceType.None")
C.j=new A.bM(1,"ColorSourceType.Solid")
C.h=new A.bM(2,"ColorSourceType.Texture2D")
C.i=new A.bM(3,"ColorSourceType.TextureCube")
C.t=new P.aY(0)
C.M=new P.aY(5e6)
C.x=H.e(u([127,2047,65535,1114111]),[P.p])
C.o=H.e(u([0,0,32776,33792,1,10240,0,0]),[P.p])
C.p=H.e(u([0,0,65490,45055,65535,34815,65534,18431]),[P.p])
C.q=H.e(u([0,0,26624,1023,65534,2047,65534,2047]),[P.p])
C.R=H.e(u([0,0,32722,12287,65534,34815,65534,18431]),[P.p])
C.S=H.e(u([0,0,65498,45055,65535,34815,65534,18431]),[P.p])
C.r=H.e(u([0,0,24576,1023,65534,34815,65534,18431]),[P.p])
C.y=H.e(u([0,0,32754,11263,65534,34815,65534,18431]),[P.p])
C.T=H.e(u([0,0,32722,12287,65535,34815,65534,18431]),[P.p])
C.z=H.e(u([0,0,65490,12287,65535,34815,65534,18431]),[P.p])
C.Q=H.e(u([]),[P.h])
C.U=new H.fh(0,{},C.Q,[P.h,P.h])})()
var v={mangledGlobalNames:{p:"int",v:"double",a8:"num",h:"String",ab:"bool",F:"Null",b:"List"},mangledNames:{},getTypeFromName:getGlobalFromName,metadata:[],types:[{func:1,ret:P.F},{func:1,ret:-1,opt:[D.z]},{func:1,ret:-1,args:[D.z]},{func:1,ret:-1},{func:1,ret:P.F,args:[F.ao,P.v,P.v]},{func:1,ret:-1,args:[W.a4]},{func:1,ret:P.F,args:[F.a9]},{func:1,ret:P.F,args:[,,]},{func:1,ret:-1,args:[P.h,,]},{func:1,ret:-1,args:[P.p,[P.j,E.ak]]},{func:1,ret:P.F,args:[D.z]},{func:1,ret:P.v,args:[P.v,P.v]},{func:1,ret:-1,args:[W.aQ]},{func:1,ret:-1,args:[{func:1,ret:-1}]},{func:1,ret:-1,args:[W.o]},{func:1,ret:P.F,args:[W.o]},{func:1,ret:P.h,args:[P.p]},{func:1,ret:-1,args:[P.p,[P.j,V.al]]},{func:1,ret:-1,args:[P.p,[P.j,U.aa]]},{func:1,ret:P.v},{func:1,ret:P.F,args:[P.h]},{func:1,ret:-1,args:[P.p,[P.j,D.a6]]},{func:1,args:[,]},{func:1,ret:-1,args:[W.b_]},{func:1,ret:P.F,args:[,]},{func:1,ret:P.F,args:[{func:1,ret:-1,args:[D.z]}]},{func:1,ret:-1,args:[P.h,P.h]},{func:1,ret:W.X,args:[W.H]},{func:1,ret:P.F,args:[P.a8]},{func:1,ret:P.ab,args:[W.H]},{func:1,args:[W.o]},{func:1,ret:P.F,args:[{func:1,ret:-1}]},{func:1,ret:P.O,args:[,,]},{func:1,ret:P.O,args:[P.p]},{func:1,ret:P.F,args:[P.h,,]},{func:1,ret:P.ab,args:[[P.j,D.a6]]},{func:1,ret:P.h,args:[P.h]},{func:1,ret:P.p,args:[P.p,P.p]},{func:1,ret:-1,args:[P.h],opt:[,]},{func:1,args:[,P.h]},{func:1,args:[P.h]},{func:1,ret:-1,args:[P.h,P.p]},{func:1,ret:V.a0,args:[P.v]},{func:1,ret:-1,args:[W.b7]},{func:1,ret:[P.D,P.h,P.h],args:[[P.D,P.h,P.h],P.h]},{func:1,ret:P.F,args:[,],opt:[P.aq]},{func:1,ret:P.F,args:[P.b4]},{func:1,ret:P.F,args:[W.a4]},{func:1,ret:P.F,args:[W.X]},{func:1,ret:P.F,args:[F.bY]},{func:1,ret:P.F,args:[P.v]},{func:1,ret:[P.aB,,],args:[,]}],interceptorsByTag:null,leafTags:null};(function staticFields(){$.aV=0
$.cc=null
$.lc=null
$.kR=!1
$.md=null
$.m6=null
$.mj=null
$.jQ=null
$.jY=null
$.l0=null
$.c1=null
$.cY=null
$.cZ=null
$.kS=!1
$.Z=C.k
$.ar=[]
$.lo=null
$.ls=null
$.cs=null
$.ly=null
$.lI=null
$.lM=null
$.lK=null
$.lL=null
$.iC=null
$.lJ=null
$.lr=null})();(function lazyInitializers(){var u=hunkHelpers.lazy
u($,"oM","mo",function(){return H.mc("_$dart_dartClosure")})
u($,"oN","l4",function(){return H.mc("_$dart_js")})
u($,"oS","mp",function(){return H.b6(H.ib({
toString:function(){return"$receiver$"}}))})
u($,"oT","mq",function(){return H.b6(H.ib({$method$:null,
toString:function(){return"$receiver$"}}))})
u($,"oU","mr",function(){return H.b6(H.ib(null))})
u($,"oV","ms",function(){return H.b6(function(){var $argumentsExpr$='$arguments$'
try{null.$method$($argumentsExpr$)}catch(t){return t.message}}())})
u($,"oY","mv",function(){return H.b6(H.ib(void 0))})
u($,"oZ","mw",function(){return H.b6(function(){var $argumentsExpr$='$arguments$'
try{(void 0).$method$($argumentsExpr$)}catch(t){return t.message}}())})
u($,"oX","mu",function(){return H.b6(H.lE(null))})
u($,"oW","mt",function(){return H.b6(function(){try{null.$method$}catch(t){return t.message}}())})
u($,"p0","my",function(){return H.b6(H.lE(void 0))})
u($,"p_","mx",function(){return H.b6(function(){try{(void 0).$method$}catch(t){return t.message}}())})
u($,"pg","l7",function(){return P.nB()})
u($,"p2","mz",function(){return P.ny()})
u($,"ph","mB",function(){return H.n8(H.c0(H.e([-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-1,-2,-2,-2,-2,-2,62,-2,62,-2,63,52,53,54,55,56,57,58,59,60,61,-2,-2,-2,-1,-2,-2,-2,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,-2,-2,-2,-2,63,-2,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,-2,-2,-2,-2,-2],[P.p])))})
u($,"pi","mC",function(){return P.nm("^[\\-\\.0-9A-Z_a-z~]*$")})
u($,"pj","mD",function(){return P.nX()})
u($,"p9","mA",function(){return Z.aA(0)})
u($,"p3","l5",function(){return Z.aA(511)})
u($,"pb","bc",function(){return Z.aA(1)})
u($,"pa","aT",function(){return Z.aA(2)})
u($,"p5","bb",function(){return Z.aA(4)})
u($,"pc","bd",function(){return Z.aA(8)})
u($,"pd","be",function(){return Z.aA(16)})
u($,"p6","d0",function(){return Z.aA(32)})
u($,"p7","d1",function(){return Z.aA(64)})
u($,"p8","l6",function(){return Z.aA(96)})
u($,"pe","bG",function(){return Z.aA(128)})
u($,"p4","ba",function(){return Z.aA(256)})
u($,"oL","mn",function(){return new V.fv(1e-9)})
u($,"oK","R",function(){return $.mn()})})();(function nativeSupport(){!function(){var u=function(a){var o={}
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
hunkHelpers.setOrUpdateInterceptorsByTag({AnimationEffectReadOnly:J.a,AnimationEffectTiming:J.a,AnimationEffectTimingReadOnly:J.a,AnimationTimeline:J.a,AnimationWorkletGlobalScope:J.a,AuthenticatorAssertionResponse:J.a,AuthenticatorAttestationResponse:J.a,AuthenticatorResponse:J.a,BackgroundFetchFetch:J.a,BackgroundFetchManager:J.a,BackgroundFetchSettledFetch:J.a,BarProp:J.a,BarcodeDetector:J.a,BluetoothRemoteGATTDescriptor:J.a,Body:J.a,BudgetState:J.a,CacheStorage:J.a,CanvasGradient:J.a,CanvasPattern:J.a,Client:J.a,Clients:J.a,CookieStore:J.a,Coordinates:J.a,Credential:J.a,CredentialUserData:J.a,CredentialsContainer:J.a,Crypto:J.a,CryptoKey:J.a,CSS:J.a,CSSVariableReferenceValue:J.a,CustomElementRegistry:J.a,DataTransfer:J.a,DataTransferItem:J.a,DeprecatedStorageInfo:J.a,DeprecatedStorageQuota:J.a,DeprecationReport:J.a,DetectedBarcode:J.a,DetectedFace:J.a,DetectedText:J.a,DeviceAcceleration:J.a,DeviceRotationRate:J.a,DirectoryEntry:J.a,DirectoryReader:J.a,DocumentOrShadowRoot:J.a,DocumentTimeline:J.a,DOMError:J.a,DOMImplementation:J.a,Iterator:J.a,DOMMatrix:J.a,DOMMatrixReadOnly:J.a,DOMParser:J.a,DOMPoint:J.a,DOMPointReadOnly:J.a,DOMQuad:J.a,DOMStringMap:J.a,Entry:J.a,External:J.a,FaceDetector:J.a,FederatedCredential:J.a,FileEntry:J.a,DOMFileSystem:J.a,FontFace:J.a,FontFaceSource:J.a,FormData:J.a,GamepadButton:J.a,GamepadPose:J.a,Geolocation:J.a,Position:J.a,Headers:J.a,HTMLHyperlinkElementUtils:J.a,IdleDeadline:J.a,ImageBitmap:J.a,ImageBitmapRenderingContext:J.a,ImageCapture:J.a,InputDeviceCapabilities:J.a,IntersectionObserver:J.a,IntersectionObserverEntry:J.a,InterventionReport:J.a,KeyframeEffect:J.a,KeyframeEffectReadOnly:J.a,MediaCapabilities:J.a,MediaCapabilitiesInfo:J.a,MediaDeviceInfo:J.a,MediaError:J.a,MediaKeyStatusMap:J.a,MediaKeySystemAccess:J.a,MediaKeys:J.a,MediaKeysPolicy:J.a,MediaMetadata:J.a,MediaSession:J.a,MediaSettingsRange:J.a,MemoryInfo:J.a,MessageChannel:J.a,Metadata:J.a,MutationObserver:J.a,WebKitMutationObserver:J.a,MutationRecord:J.a,NavigationPreloadManager:J.a,Navigator:J.a,NavigatorAutomationInformation:J.a,NavigatorConcurrentHardware:J.a,NavigatorCookies:J.a,NavigatorUserMediaError:J.a,NodeFilter:J.a,NodeIterator:J.a,NonDocumentTypeChildNode:J.a,NonElementParentNode:J.a,NoncedElement:J.a,OffscreenCanvasRenderingContext2D:J.a,OverconstrainedError:J.a,PaintRenderingContext2D:J.a,PaintSize:J.a,PaintWorkletGlobalScope:J.a,PasswordCredential:J.a,Path2D:J.a,PaymentAddress:J.a,PaymentInstruments:J.a,PaymentManager:J.a,PaymentResponse:J.a,PerformanceEntry:J.a,PerformanceLongTaskTiming:J.a,PerformanceMark:J.a,PerformanceMeasure:J.a,PerformanceNavigation:J.a,PerformanceNavigationTiming:J.a,PerformanceObserver:J.a,PerformanceObserverEntryList:J.a,PerformancePaintTiming:J.a,PerformanceResourceTiming:J.a,PerformanceServerTiming:J.a,PerformanceTiming:J.a,Permissions:J.a,PhotoCapabilities:J.a,PositionError:J.a,Presentation:J.a,PresentationReceiver:J.a,PublicKeyCredential:J.a,PushManager:J.a,PushMessageData:J.a,PushSubscription:J.a,PushSubscriptionOptions:J.a,Range:J.a,RelatedApplication:J.a,ReportBody:J.a,ReportingObserver:J.a,ResizeObserver:J.a,ResizeObserverEntry:J.a,RTCCertificate:J.a,RTCIceCandidate:J.a,mozRTCIceCandidate:J.a,RTCLegacyStatsReport:J.a,RTCRtpContributingSource:J.a,RTCRtpReceiver:J.a,RTCRtpSender:J.a,RTCSessionDescription:J.a,mozRTCSessionDescription:J.a,RTCStatsResponse:J.a,Screen:J.a,ScrollState:J.a,ScrollTimeline:J.a,Selection:J.a,SharedArrayBuffer:J.a,SpeechRecognitionAlternative:J.a,SpeechSynthesisVoice:J.a,StaticRange:J.a,StorageManager:J.a,StyleMedia:J.a,StylePropertyMap:J.a,StylePropertyMapReadonly:J.a,SyncManager:J.a,TaskAttributionTiming:J.a,TextDetector:J.a,TextMetrics:J.a,TrackDefault:J.a,TreeWalker:J.a,TrustedHTML:J.a,TrustedScriptURL:J.a,TrustedURL:J.a,UnderlyingSourceBase:J.a,URLSearchParams:J.a,VRCoordinateSystem:J.a,VRDisplayCapabilities:J.a,VREyeParameters:J.a,VRFrameData:J.a,VRFrameOfReference:J.a,VRPose:J.a,VRStageBounds:J.a,VRStageBoundsPoint:J.a,VRStageParameters:J.a,ValidityState:J.a,VideoPlaybackQuality:J.a,VideoTrack:J.a,VTTRegion:J.a,WindowClient:J.a,WorkletAnimation:J.a,WorkletGlobalScope:J.a,XPathEvaluator:J.a,XPathExpression:J.a,XPathNSResolver:J.a,XPathResult:J.a,XMLSerializer:J.a,XSLTProcessor:J.a,Bluetooth:J.a,BluetoothCharacteristicProperties:J.a,BluetoothRemoteGATTServer:J.a,BluetoothRemoteGATTService:J.a,BluetoothUUID:J.a,BudgetService:J.a,Cache:J.a,DOMFileSystemSync:J.a,DirectoryEntrySync:J.a,DirectoryReaderSync:J.a,EntrySync:J.a,FileEntrySync:J.a,FileReaderSync:J.a,FileWriterSync:J.a,HTMLAllCollection:J.a,Mojo:J.a,MojoHandle:J.a,MojoWatcher:J.a,NFC:J.a,PagePopupController:J.a,Report:J.a,Request:J.a,Response:J.a,SubtleCrypto:J.a,USBAlternateInterface:J.a,USBConfiguration:J.a,USBDevice:J.a,USBEndpoint:J.a,USBInTransferResult:J.a,USBInterface:J.a,USBIsochronousInTransferPacket:J.a,USBIsochronousInTransferResult:J.a,USBIsochronousOutTransferPacket:J.a,USBIsochronousOutTransferResult:J.a,USBOutTransferResult:J.a,WorkerLocation:J.a,WorkerNavigator:J.a,Worklet:J.a,IDBCursor:J.a,IDBCursorWithValue:J.a,IDBFactory:J.a,IDBIndex:J.a,IDBKeyRange:J.a,IDBObjectStore:J.a,IDBObservation:J.a,IDBObserver:J.a,IDBObserverChanges:J.a,SVGAngle:J.a,SVGAnimatedAngle:J.a,SVGAnimatedBoolean:J.a,SVGAnimatedEnumeration:J.a,SVGAnimatedInteger:J.a,SVGAnimatedLength:J.a,SVGAnimatedLengthList:J.a,SVGAnimatedNumber:J.a,SVGAnimatedNumberList:J.a,SVGAnimatedPreserveAspectRatio:J.a,SVGAnimatedRect:J.a,SVGAnimatedString:J.a,SVGAnimatedTransformList:J.a,SVGMatrix:J.a,SVGPoint:J.a,SVGPreserveAspectRatio:J.a,SVGRect:J.a,SVGUnitTypes:J.a,AudioListener:J.a,AudioParam:J.a,AudioTrack:J.a,AudioWorkletGlobalScope:J.a,AudioWorkletProcessor:J.a,PeriodicWave:J.a,WebGLActiveInfo:J.a,ANGLEInstancedArrays:J.a,ANGLE_instanced_arrays:J.a,WebGLCanvas:J.a,WebGLColorBufferFloat:J.a,WebGLCompressedTextureASTC:J.a,WebGLCompressedTextureATC:J.a,WEBGL_compressed_texture_atc:J.a,WebGLCompressedTextureETC1:J.a,WEBGL_compressed_texture_etc1:J.a,WebGLCompressedTextureETC:J.a,WebGLCompressedTexturePVRTC:J.a,WEBGL_compressed_texture_pvrtc:J.a,WebGLCompressedTextureS3TC:J.a,WEBGL_compressed_texture_s3tc:J.a,WebGLCompressedTextureS3TCsRGB:J.a,WebGLDebugRendererInfo:J.a,WEBGL_debug_renderer_info:J.a,WebGLDebugShaders:J.a,WEBGL_debug_shaders:J.a,WebGLDepthTexture:J.a,WEBGL_depth_texture:J.a,WebGLDrawBuffers:J.a,WEBGL_draw_buffers:J.a,EXTsRGB:J.a,EXT_sRGB:J.a,EXTBlendMinMax:J.a,EXT_blend_minmax:J.a,EXTColorBufferFloat:J.a,EXTColorBufferHalfFloat:J.a,EXTDisjointTimerQuery:J.a,EXTDisjointTimerQueryWebGL2:J.a,EXTFragDepth:J.a,EXT_frag_depth:J.a,EXTShaderTextureLOD:J.a,EXT_shader_texture_lod:J.a,EXTTextureFilterAnisotropic:J.a,EXT_texture_filter_anisotropic:J.a,WebGLFramebuffer:J.a,WebGLGetBufferSubDataAsync:J.a,WebGLLoseContext:J.a,WebGLExtensionLoseContext:J.a,WEBGL_lose_context:J.a,OESElementIndexUint:J.a,OES_element_index_uint:J.a,OESStandardDerivatives:J.a,OES_standard_derivatives:J.a,OESTextureFloat:J.a,OES_texture_float:J.a,OESTextureFloatLinear:J.a,OES_texture_float_linear:J.a,OESTextureHalfFloat:J.a,OES_texture_half_float:J.a,OESTextureHalfFloatLinear:J.a,OES_texture_half_float_linear:J.a,OESVertexArrayObject:J.a,OES_vertex_array_object:J.a,WebGLQuery:J.a,WebGLRenderbuffer:J.a,WebGLRenderingContext:J.a,WebGLSampler:J.a,WebGLShaderPrecisionFormat:J.a,WebGLSync:J.a,WebGLTimerQueryEXT:J.a,WebGLTransformFeedback:J.a,WebGLVertexArrayObject:J.a,WebGLVertexArrayObjectOES:J.a,WebGL:J.a,WebGL2RenderingContextBase:J.a,Database:J.a,SQLError:J.a,SQLResultSet:J.a,SQLTransaction:J.a,ArrayBuffer:H.co,DataView:H.bz,ArrayBufferView:H.bz,Float32Array:H.cp,Float64Array:H.cp,Int16Array:H.hc,Int32Array:H.hd,Int8Array:H.he,Uint16Array:H.hf,Uint32Array:H.hg,Uint8ClampedArray:H.dz,CanvasPixelArray:H.dz,Uint8Array:H.cq,HTMLAudioElement:W.u,HTMLBRElement:W.u,HTMLBaseElement:W.u,HTMLBodyElement:W.u,HTMLButtonElement:W.u,HTMLContentElement:W.u,HTMLDListElement:W.u,HTMLDataElement:W.u,HTMLDataListElement:W.u,HTMLDetailsElement:W.u,HTMLDialogElement:W.u,HTMLEmbedElement:W.u,HTMLFieldSetElement:W.u,HTMLHRElement:W.u,HTMLHeadElement:W.u,HTMLHeadingElement:W.u,HTMLHtmlElement:W.u,HTMLIFrameElement:W.u,HTMLLIElement:W.u,HTMLLabelElement:W.u,HTMLLegendElement:W.u,HTMLLinkElement:W.u,HTMLMapElement:W.u,HTMLMediaElement:W.u,HTMLMenuElement:W.u,HTMLMetaElement:W.u,HTMLMeterElement:W.u,HTMLModElement:W.u,HTMLOListElement:W.u,HTMLObjectElement:W.u,HTMLOptGroupElement:W.u,HTMLOptionElement:W.u,HTMLOutputElement:W.u,HTMLParagraphElement:W.u,HTMLParamElement:W.u,HTMLPictureElement:W.u,HTMLPreElement:W.u,HTMLProgressElement:W.u,HTMLQuoteElement:W.u,HTMLScriptElement:W.u,HTMLShadowElement:W.u,HTMLSlotElement:W.u,HTMLSourceElement:W.u,HTMLSpanElement:W.u,HTMLStyleElement:W.u,HTMLTableCaptionElement:W.u,HTMLTableColElement:W.u,HTMLTableElement:W.u,HTMLTableRowElement:W.u,HTMLTableSectionElement:W.u,HTMLTemplateElement:W.u,HTMLTextAreaElement:W.u,HTMLTimeElement:W.u,HTMLTitleElement:W.u,HTMLTrackElement:W.u,HTMLUListElement:W.u,HTMLUnknownElement:W.u,HTMLVideoElement:W.u,HTMLDirectoryElement:W.u,HTMLFontElement:W.u,HTMLFrameElement:W.u,HTMLFrameSetElement:W.u,HTMLMarqueeElement:W.u,HTMLElement:W.u,AccessibleNodeList:W.eZ,HTMLAnchorElement:W.f0,HTMLAreaElement:W.f1,Blob:W.bJ,HTMLCanvasElement:W.bK,CanvasRenderingContext2D:W.cd,CDATASection:W.bt,CharacterData:W.bt,Comment:W.bt,ProcessingInstruction:W.bt,Text:W.bt,CSSNumericValue:W.cf,CSSUnitValue:W.cf,CSSPerspective:W.fi,CSSCharsetRule:W.V,CSSConditionRule:W.V,CSSFontFaceRule:W.V,CSSGroupingRule:W.V,CSSImportRule:W.V,CSSKeyframeRule:W.V,MozCSSKeyframeRule:W.V,WebKitCSSKeyframeRule:W.V,CSSKeyframesRule:W.V,MozCSSKeyframesRule:W.V,WebKitCSSKeyframesRule:W.V,CSSMediaRule:W.V,CSSNamespaceRule:W.V,CSSPageRule:W.V,CSSRule:W.V,CSSStyleRule:W.V,CSSSupportsRule:W.V,CSSViewportRule:W.V,CSSStyleDeclaration:W.cg,MSStyleCSSProperties:W.cg,CSS2Properties:W.cg,CSSImageValue:W.aW,CSSKeywordValue:W.aW,CSSPositionValue:W.aW,CSSResourceValue:W.aW,CSSURLImageValue:W.aW,CSSStyleValue:W.aW,CSSMatrixComponent:W.aX,CSSRotation:W.aX,CSSScale:W.aX,CSSSkew:W.aX,CSSTranslation:W.aX,CSSTransformComponent:W.aX,CSSTransformValue:W.fk,CSSUnparsedValue:W.fl,DataTransferItemList:W.fn,HTMLDivElement:W.dc,DOMException:W.fo,ClientRectList:W.dd,DOMRectList:W.dd,DOMRectReadOnly:W.de,DOMStringList:W.fp,DOMTokenList:W.fq,Element:W.X,AbortPaymentEvent:W.o,AnimationEvent:W.o,AnimationPlaybackEvent:W.o,ApplicationCacheErrorEvent:W.o,BackgroundFetchClickEvent:W.o,BackgroundFetchEvent:W.o,BackgroundFetchFailEvent:W.o,BackgroundFetchedEvent:W.o,BeforeInstallPromptEvent:W.o,BeforeUnloadEvent:W.o,BlobEvent:W.o,CanMakePaymentEvent:W.o,ClipboardEvent:W.o,CloseEvent:W.o,CustomEvent:W.o,DeviceMotionEvent:W.o,DeviceOrientationEvent:W.o,ErrorEvent:W.o,ExtendableEvent:W.o,ExtendableMessageEvent:W.o,FetchEvent:W.o,FontFaceSetLoadEvent:W.o,ForeignFetchEvent:W.o,GamepadEvent:W.o,HashChangeEvent:W.o,InstallEvent:W.o,MediaEncryptedEvent:W.o,MediaKeyMessageEvent:W.o,MediaQueryListEvent:W.o,MediaStreamEvent:W.o,MediaStreamTrackEvent:W.o,MessageEvent:W.o,MIDIConnectionEvent:W.o,MIDIMessageEvent:W.o,MutationEvent:W.o,NotificationEvent:W.o,PageTransitionEvent:W.o,PaymentRequestEvent:W.o,PaymentRequestUpdateEvent:W.o,PopStateEvent:W.o,PresentationConnectionAvailableEvent:W.o,PresentationConnectionCloseEvent:W.o,ProgressEvent:W.o,PromiseRejectionEvent:W.o,PushEvent:W.o,RTCDataChannelEvent:W.o,RTCDTMFToneChangeEvent:W.o,RTCPeerConnectionIceEvent:W.o,RTCTrackEvent:W.o,SecurityPolicyViolationEvent:W.o,SensorErrorEvent:W.o,SpeechRecognitionError:W.o,SpeechRecognitionEvent:W.o,SpeechSynthesisEvent:W.o,StorageEvent:W.o,SyncEvent:W.o,TrackEvent:W.o,TransitionEvent:W.o,WebKitTransitionEvent:W.o,VRDeviceEvent:W.o,VRDisplayEvent:W.o,VRSessionEvent:W.o,MojoInterfaceRequestEvent:W.o,ResourceProgressEvent:W.o,USBConnectionEvent:W.o,IDBVersionChangeEvent:W.o,AudioProcessingEvent:W.o,OfflineAudioCompletionEvent:W.o,WebGLContextEvent:W.o,Event:W.o,InputEvent:W.o,AbsoluteOrientationSensor:W.i,Accelerometer:W.i,AccessibleNode:W.i,AmbientLightSensor:W.i,Animation:W.i,ApplicationCache:W.i,DOMApplicationCache:W.i,OfflineResourceList:W.i,BackgroundFetchRegistration:W.i,BatteryManager:W.i,BroadcastChannel:W.i,CanvasCaptureMediaStreamTrack:W.i,DedicatedWorkerGlobalScope:W.i,EventSource:W.i,FileReader:W.i,FontFaceSet:W.i,Gyroscope:W.i,XMLHttpRequest:W.i,XMLHttpRequestEventTarget:W.i,XMLHttpRequestUpload:W.i,LinearAccelerationSensor:W.i,Magnetometer:W.i,MediaDevices:W.i,MediaKeySession:W.i,MediaQueryList:W.i,MediaRecorder:W.i,MediaSource:W.i,MediaStream:W.i,MediaStreamTrack:W.i,MIDIAccess:W.i,MIDIInput:W.i,MIDIOutput:W.i,MIDIPort:W.i,NetworkInformation:W.i,Notification:W.i,OffscreenCanvas:W.i,OrientationSensor:W.i,PaymentRequest:W.i,Performance:W.i,PermissionStatus:W.i,PresentationAvailability:W.i,PresentationConnection:W.i,PresentationConnectionList:W.i,PresentationRequest:W.i,RelativeOrientationSensor:W.i,RemotePlayback:W.i,RTCDataChannel:W.i,DataChannel:W.i,RTCDTMFSender:W.i,RTCPeerConnection:W.i,webkitRTCPeerConnection:W.i,mozRTCPeerConnection:W.i,ScreenOrientation:W.i,Sensor:W.i,ServiceWorker:W.i,ServiceWorkerContainer:W.i,ServiceWorkerGlobalScope:W.i,ServiceWorkerRegistration:W.i,SharedWorker:W.i,SharedWorkerGlobalScope:W.i,SpeechRecognition:W.i,SpeechSynthesis:W.i,SpeechSynthesisUtterance:W.i,VR:W.i,VRDevice:W.i,VRDisplay:W.i,VRSession:W.i,VisualViewport:W.i,WebSocket:W.i,Worker:W.i,WorkerGlobalScope:W.i,WorkerPerformance:W.i,BluetoothDevice:W.i,BluetoothRemoteGATTCharacteristic:W.i,Clipboard:W.i,MojoInterfaceInterceptor:W.i,USB:W.i,IDBDatabase:W.i,IDBOpenDBRequest:W.i,IDBVersionChangeRequest:W.i,IDBRequest:W.i,IDBTransaction:W.i,AnalyserNode:W.i,RealtimeAnalyserNode:W.i,AudioBufferSourceNode:W.i,AudioDestinationNode:W.i,AudioNode:W.i,AudioScheduledSourceNode:W.i,AudioWorkletNode:W.i,BiquadFilterNode:W.i,ChannelMergerNode:W.i,AudioChannelMerger:W.i,ChannelSplitterNode:W.i,AudioChannelSplitter:W.i,ConstantSourceNode:W.i,ConvolverNode:W.i,DelayNode:W.i,DynamicsCompressorNode:W.i,GainNode:W.i,AudioGainNode:W.i,IIRFilterNode:W.i,MediaElementAudioSourceNode:W.i,MediaStreamAudioDestinationNode:W.i,MediaStreamAudioSourceNode:W.i,OscillatorNode:W.i,Oscillator:W.i,PannerNode:W.i,AudioPannerNode:W.i,webkitAudioPannerNode:W.i,ScriptProcessorNode:W.i,JavaScriptAudioNode:W.i,StereoPannerNode:W.i,WaveShaperNode:W.i,EventTarget:W.i,File:W.ax,FileList:W.ch,FileWriter:W.fz,HTMLFormElement:W.fD,Gamepad:W.aG,History:W.fG,HTMLCollection:W.bQ,HTMLFormControlsCollection:W.bQ,HTMLOptionsCollection:W.bQ,ImageData:W.bg,HTMLImageElement:W.bR,HTMLInputElement:W.ck,KeyboardEvent:W.b_,Location:W.fT,MediaList:W.h5,MessagePort:W.cm,MIDIInputMap:W.h6,MIDIOutputMap:W.h8,MimeType:W.aJ,MimeTypeArray:W.ha,PointerEvent:W.a4,MouseEvent:W.a4,DragEvent:W.a4,Document:W.H,DocumentFragment:W.H,HTMLDocument:W.H,ShadowRoot:W.H,XMLDocument:W.H,Attr:W.H,DocumentType:W.H,Node:W.H,NodeList:W.cr,RadioNodeList:W.cr,Plugin:W.aK,PluginArray:W.hn,RTCStatsReport:W.hw,HTMLSelectElement:W.hz,SourceBuffer:W.aL,SourceBufferList:W.hI,SpeechGrammar:W.aM,SpeechGrammarList:W.hJ,SpeechRecognitionResult:W.aN,Storage:W.hM,CSSStyleSheet:W.ay,StyleSheet:W.ay,HTMLTableCellElement:W.bq,HTMLTableDataCellElement:W.bq,HTMLTableHeaderCellElement:W.bq,TextTrack:W.aO,TextTrackCue:W.az,VTTCue:W.az,TextTrackCueList:W.hU,TextTrackList:W.hV,TimeRanges:W.i4,Touch:W.aP,TouchEvent:W.aQ,TouchList:W.i7,TrackDefaultList:W.i8,CompositionEvent:W.bC,FocusEvent:W.bC,TextEvent:W.bC,UIEvent:W.bC,URL:W.iy,VideoTrackList:W.iO,WheelEvent:W.b7,Window:W.cK,DOMWindow:W.cK,CSSRuleList:W.iZ,ClientRect:W.e4,DOMRect:W.e4,GamepadList:W.jc,NamedNodeMap:W.el,MozNamedAttrMap:W.el,SpeechRecognitionResultList:W.jo,StyleSheetList:W.jr,SVGLength:P.b0,SVGLengthList:P.fM,SVGNumber:P.b3,SVGNumberList:P.hj,SVGPointList:P.hp,SVGStringList:P.hS,SVGAElement:P.r,SVGAnimateElement:P.r,SVGAnimateMotionElement:P.r,SVGAnimateTransformElement:P.r,SVGAnimationElement:P.r,SVGCircleElement:P.r,SVGClipPathElement:P.r,SVGDefsElement:P.r,SVGDescElement:P.r,SVGDiscardElement:P.r,SVGEllipseElement:P.r,SVGFEBlendElement:P.r,SVGFEColorMatrixElement:P.r,SVGFEComponentTransferElement:P.r,SVGFECompositeElement:P.r,SVGFEConvolveMatrixElement:P.r,SVGFEDiffuseLightingElement:P.r,SVGFEDisplacementMapElement:P.r,SVGFEDistantLightElement:P.r,SVGFEFloodElement:P.r,SVGFEFuncAElement:P.r,SVGFEFuncBElement:P.r,SVGFEFuncGElement:P.r,SVGFEFuncRElement:P.r,SVGFEGaussianBlurElement:P.r,SVGFEImageElement:P.r,SVGFEMergeElement:P.r,SVGFEMergeNodeElement:P.r,SVGFEMorphologyElement:P.r,SVGFEOffsetElement:P.r,SVGFEPointLightElement:P.r,SVGFESpecularLightingElement:P.r,SVGFESpotLightElement:P.r,SVGFETileElement:P.r,SVGFETurbulenceElement:P.r,SVGFilterElement:P.r,SVGForeignObjectElement:P.r,SVGGElement:P.r,SVGGeometryElement:P.r,SVGGraphicsElement:P.r,SVGImageElement:P.r,SVGLineElement:P.r,SVGLinearGradientElement:P.r,SVGMarkerElement:P.r,SVGMaskElement:P.r,SVGMetadataElement:P.r,SVGPathElement:P.r,SVGPatternElement:P.r,SVGPolygonElement:P.r,SVGPolylineElement:P.r,SVGRadialGradientElement:P.r,SVGRectElement:P.r,SVGScriptElement:P.r,SVGSetElement:P.r,SVGStopElement:P.r,SVGStyleElement:P.r,SVGElement:P.r,SVGSVGElement:P.r,SVGSwitchElement:P.r,SVGSymbolElement:P.r,SVGTSpanElement:P.r,SVGTextContentElement:P.r,SVGTextElement:P.r,SVGTextPathElement:P.r,SVGTextPositioningElement:P.r,SVGTitleElement:P.r,SVGUseElement:P.r,SVGViewElement:P.r,SVGGradientElement:P.r,SVGComponentTransferFunctionElement:P.r,SVGFEDropShadowElement:P.r,SVGMPathElement:P.r,SVGTransform:P.b5,SVGTransformList:P.i9,AudioBuffer:P.f4,AudioParamMap:P.f5,AudioTrackList:P.f7,AudioContext:P.bI,webkitAudioContext:P.bI,BaseAudioContext:P.bI,OfflineAudioContext:P.hk,WebGLBuffer:P.d5,WebGLProgram:P.dE,WebGL2RenderingContext:P.bX,WebGLShader:P.dH,WebGLTexture:P.dM,WebGLUniformLocation:P.dU,SQLResultSetRowList:P.hK})
hunkHelpers.setOrUpdateLeafTags({AnimationEffectReadOnly:true,AnimationEffectTiming:true,AnimationEffectTimingReadOnly:true,AnimationTimeline:true,AnimationWorkletGlobalScope:true,AuthenticatorAssertionResponse:true,AuthenticatorAttestationResponse:true,AuthenticatorResponse:true,BackgroundFetchFetch:true,BackgroundFetchManager:true,BackgroundFetchSettledFetch:true,BarProp:true,BarcodeDetector:true,BluetoothRemoteGATTDescriptor:true,Body:true,BudgetState:true,CacheStorage:true,CanvasGradient:true,CanvasPattern:true,Client:true,Clients:true,CookieStore:true,Coordinates:true,Credential:true,CredentialUserData:true,CredentialsContainer:true,Crypto:true,CryptoKey:true,CSS:true,CSSVariableReferenceValue:true,CustomElementRegistry:true,DataTransfer:true,DataTransferItem:true,DeprecatedStorageInfo:true,DeprecatedStorageQuota:true,DeprecationReport:true,DetectedBarcode:true,DetectedFace:true,DetectedText:true,DeviceAcceleration:true,DeviceRotationRate:true,DirectoryEntry:true,DirectoryReader:true,DocumentOrShadowRoot:true,DocumentTimeline:true,DOMError:true,DOMImplementation:true,Iterator:true,DOMMatrix:true,DOMMatrixReadOnly:true,DOMParser:true,DOMPoint:true,DOMPointReadOnly:true,DOMQuad:true,DOMStringMap:true,Entry:true,External:true,FaceDetector:true,FederatedCredential:true,FileEntry:true,DOMFileSystem:true,FontFace:true,FontFaceSource:true,FormData:true,GamepadButton:true,GamepadPose:true,Geolocation:true,Position:true,Headers:true,HTMLHyperlinkElementUtils:true,IdleDeadline:true,ImageBitmap:true,ImageBitmapRenderingContext:true,ImageCapture:true,InputDeviceCapabilities:true,IntersectionObserver:true,IntersectionObserverEntry:true,InterventionReport:true,KeyframeEffect:true,KeyframeEffectReadOnly:true,MediaCapabilities:true,MediaCapabilitiesInfo:true,MediaDeviceInfo:true,MediaError:true,MediaKeyStatusMap:true,MediaKeySystemAccess:true,MediaKeys:true,MediaKeysPolicy:true,MediaMetadata:true,MediaSession:true,MediaSettingsRange:true,MemoryInfo:true,MessageChannel:true,Metadata:true,MutationObserver:true,WebKitMutationObserver:true,MutationRecord:true,NavigationPreloadManager:true,Navigator:true,NavigatorAutomationInformation:true,NavigatorConcurrentHardware:true,NavigatorCookies:true,NavigatorUserMediaError:true,NodeFilter:true,NodeIterator:true,NonDocumentTypeChildNode:true,NonElementParentNode:true,NoncedElement:true,OffscreenCanvasRenderingContext2D:true,OverconstrainedError:true,PaintRenderingContext2D:true,PaintSize:true,PaintWorkletGlobalScope:true,PasswordCredential:true,Path2D:true,PaymentAddress:true,PaymentInstruments:true,PaymentManager:true,PaymentResponse:true,PerformanceEntry:true,PerformanceLongTaskTiming:true,PerformanceMark:true,PerformanceMeasure:true,PerformanceNavigation:true,PerformanceNavigationTiming:true,PerformanceObserver:true,PerformanceObserverEntryList:true,PerformancePaintTiming:true,PerformanceResourceTiming:true,PerformanceServerTiming:true,PerformanceTiming:true,Permissions:true,PhotoCapabilities:true,PositionError:true,Presentation:true,PresentationReceiver:true,PublicKeyCredential:true,PushManager:true,PushMessageData:true,PushSubscription:true,PushSubscriptionOptions:true,Range:true,RelatedApplication:true,ReportBody:true,ReportingObserver:true,ResizeObserver:true,ResizeObserverEntry:true,RTCCertificate:true,RTCIceCandidate:true,mozRTCIceCandidate:true,RTCLegacyStatsReport:true,RTCRtpContributingSource:true,RTCRtpReceiver:true,RTCRtpSender:true,RTCSessionDescription:true,mozRTCSessionDescription:true,RTCStatsResponse:true,Screen:true,ScrollState:true,ScrollTimeline:true,Selection:true,SharedArrayBuffer:true,SpeechRecognitionAlternative:true,SpeechSynthesisVoice:true,StaticRange:true,StorageManager:true,StyleMedia:true,StylePropertyMap:true,StylePropertyMapReadonly:true,SyncManager:true,TaskAttributionTiming:true,TextDetector:true,TextMetrics:true,TrackDefault:true,TreeWalker:true,TrustedHTML:true,TrustedScriptURL:true,TrustedURL:true,UnderlyingSourceBase:true,URLSearchParams:true,VRCoordinateSystem:true,VRDisplayCapabilities:true,VREyeParameters:true,VRFrameData:true,VRFrameOfReference:true,VRPose:true,VRStageBounds:true,VRStageBoundsPoint:true,VRStageParameters:true,ValidityState:true,VideoPlaybackQuality:true,VideoTrack:true,VTTRegion:true,WindowClient:true,WorkletAnimation:true,WorkletGlobalScope:true,XPathEvaluator:true,XPathExpression:true,XPathNSResolver:true,XPathResult:true,XMLSerializer:true,XSLTProcessor:true,Bluetooth:true,BluetoothCharacteristicProperties:true,BluetoothRemoteGATTServer:true,BluetoothRemoteGATTService:true,BluetoothUUID:true,BudgetService:true,Cache:true,DOMFileSystemSync:true,DirectoryEntrySync:true,DirectoryReaderSync:true,EntrySync:true,FileEntrySync:true,FileReaderSync:true,FileWriterSync:true,HTMLAllCollection:true,Mojo:true,MojoHandle:true,MojoWatcher:true,NFC:true,PagePopupController:true,Report:true,Request:true,Response:true,SubtleCrypto:true,USBAlternateInterface:true,USBConfiguration:true,USBDevice:true,USBEndpoint:true,USBInTransferResult:true,USBInterface:true,USBIsochronousInTransferPacket:true,USBIsochronousInTransferResult:true,USBIsochronousOutTransferPacket:true,USBIsochronousOutTransferResult:true,USBOutTransferResult:true,WorkerLocation:true,WorkerNavigator:true,Worklet:true,IDBCursor:true,IDBCursorWithValue:true,IDBFactory:true,IDBIndex:true,IDBKeyRange:true,IDBObjectStore:true,IDBObservation:true,IDBObserver:true,IDBObserverChanges:true,SVGAngle:true,SVGAnimatedAngle:true,SVGAnimatedBoolean:true,SVGAnimatedEnumeration:true,SVGAnimatedInteger:true,SVGAnimatedLength:true,SVGAnimatedLengthList:true,SVGAnimatedNumber:true,SVGAnimatedNumberList:true,SVGAnimatedPreserveAspectRatio:true,SVGAnimatedRect:true,SVGAnimatedString:true,SVGAnimatedTransformList:true,SVGMatrix:true,SVGPoint:true,SVGPreserveAspectRatio:true,SVGRect:true,SVGUnitTypes:true,AudioListener:true,AudioParam:true,AudioTrack:true,AudioWorkletGlobalScope:true,AudioWorkletProcessor:true,PeriodicWave:true,WebGLActiveInfo:true,ANGLEInstancedArrays:true,ANGLE_instanced_arrays:true,WebGLCanvas:true,WebGLColorBufferFloat:true,WebGLCompressedTextureASTC:true,WebGLCompressedTextureATC:true,WEBGL_compressed_texture_atc:true,WebGLCompressedTextureETC1:true,WEBGL_compressed_texture_etc1:true,WebGLCompressedTextureETC:true,WebGLCompressedTexturePVRTC:true,WEBGL_compressed_texture_pvrtc:true,WebGLCompressedTextureS3TC:true,WEBGL_compressed_texture_s3tc:true,WebGLCompressedTextureS3TCsRGB:true,WebGLDebugRendererInfo:true,WEBGL_debug_renderer_info:true,WebGLDebugShaders:true,WEBGL_debug_shaders:true,WebGLDepthTexture:true,WEBGL_depth_texture:true,WebGLDrawBuffers:true,WEBGL_draw_buffers:true,EXTsRGB:true,EXT_sRGB:true,EXTBlendMinMax:true,EXT_blend_minmax:true,EXTColorBufferFloat:true,EXTColorBufferHalfFloat:true,EXTDisjointTimerQuery:true,EXTDisjointTimerQueryWebGL2:true,EXTFragDepth:true,EXT_frag_depth:true,EXTShaderTextureLOD:true,EXT_shader_texture_lod:true,EXTTextureFilterAnisotropic:true,EXT_texture_filter_anisotropic:true,WebGLFramebuffer:true,WebGLGetBufferSubDataAsync:true,WebGLLoseContext:true,WebGLExtensionLoseContext:true,WEBGL_lose_context:true,OESElementIndexUint:true,OES_element_index_uint:true,OESStandardDerivatives:true,OES_standard_derivatives:true,OESTextureFloat:true,OES_texture_float:true,OESTextureFloatLinear:true,OES_texture_float_linear:true,OESTextureHalfFloat:true,OES_texture_half_float:true,OESTextureHalfFloatLinear:true,OES_texture_half_float_linear:true,OESVertexArrayObject:true,OES_vertex_array_object:true,WebGLQuery:true,WebGLRenderbuffer:true,WebGLRenderingContext:true,WebGLSampler:true,WebGLShaderPrecisionFormat:true,WebGLSync:true,WebGLTimerQueryEXT:true,WebGLTransformFeedback:true,WebGLVertexArrayObject:true,WebGLVertexArrayObjectOES:true,WebGL:true,WebGL2RenderingContextBase:true,Database:true,SQLError:true,SQLResultSet:true,SQLTransaction:true,ArrayBuffer:true,DataView:true,ArrayBufferView:false,Float32Array:true,Float64Array:true,Int16Array:true,Int32Array:true,Int8Array:true,Uint16Array:true,Uint32Array:true,Uint8ClampedArray:true,CanvasPixelArray:true,Uint8Array:false,HTMLAudioElement:true,HTMLBRElement:true,HTMLBaseElement:true,HTMLBodyElement:true,HTMLButtonElement:true,HTMLContentElement:true,HTMLDListElement:true,HTMLDataElement:true,HTMLDataListElement:true,HTMLDetailsElement:true,HTMLDialogElement:true,HTMLEmbedElement:true,HTMLFieldSetElement:true,HTMLHRElement:true,HTMLHeadElement:true,HTMLHeadingElement:true,HTMLHtmlElement:true,HTMLIFrameElement:true,HTMLLIElement:true,HTMLLabelElement:true,HTMLLegendElement:true,HTMLLinkElement:true,HTMLMapElement:true,HTMLMediaElement:true,HTMLMenuElement:true,HTMLMetaElement:true,HTMLMeterElement:true,HTMLModElement:true,HTMLOListElement:true,HTMLObjectElement:true,HTMLOptGroupElement:true,HTMLOptionElement:true,HTMLOutputElement:true,HTMLParagraphElement:true,HTMLParamElement:true,HTMLPictureElement:true,HTMLPreElement:true,HTMLProgressElement:true,HTMLQuoteElement:true,HTMLScriptElement:true,HTMLShadowElement:true,HTMLSlotElement:true,HTMLSourceElement:true,HTMLSpanElement:true,HTMLStyleElement:true,HTMLTableCaptionElement:true,HTMLTableColElement:true,HTMLTableElement:true,HTMLTableRowElement:true,HTMLTableSectionElement:true,HTMLTemplateElement:true,HTMLTextAreaElement:true,HTMLTimeElement:true,HTMLTitleElement:true,HTMLTrackElement:true,HTMLUListElement:true,HTMLUnknownElement:true,HTMLVideoElement:true,HTMLDirectoryElement:true,HTMLFontElement:true,HTMLFrameElement:true,HTMLFrameSetElement:true,HTMLMarqueeElement:true,HTMLElement:false,AccessibleNodeList:true,HTMLAnchorElement:true,HTMLAreaElement:true,Blob:false,HTMLCanvasElement:true,CanvasRenderingContext2D:true,CDATASection:true,CharacterData:true,Comment:true,ProcessingInstruction:true,Text:true,CSSNumericValue:true,CSSUnitValue:true,CSSPerspective:true,CSSCharsetRule:true,CSSConditionRule:true,CSSFontFaceRule:true,CSSGroupingRule:true,CSSImportRule:true,CSSKeyframeRule:true,MozCSSKeyframeRule:true,WebKitCSSKeyframeRule:true,CSSKeyframesRule:true,MozCSSKeyframesRule:true,WebKitCSSKeyframesRule:true,CSSMediaRule:true,CSSNamespaceRule:true,CSSPageRule:true,CSSRule:true,CSSStyleRule:true,CSSSupportsRule:true,CSSViewportRule:true,CSSStyleDeclaration:true,MSStyleCSSProperties:true,CSS2Properties:true,CSSImageValue:true,CSSKeywordValue:true,CSSPositionValue:true,CSSResourceValue:true,CSSURLImageValue:true,CSSStyleValue:false,CSSMatrixComponent:true,CSSRotation:true,CSSScale:true,CSSSkew:true,CSSTranslation:true,CSSTransformComponent:false,CSSTransformValue:true,CSSUnparsedValue:true,DataTransferItemList:true,HTMLDivElement:true,DOMException:true,ClientRectList:true,DOMRectList:true,DOMRectReadOnly:false,DOMStringList:true,DOMTokenList:true,Element:false,AbortPaymentEvent:true,AnimationEvent:true,AnimationPlaybackEvent:true,ApplicationCacheErrorEvent:true,BackgroundFetchClickEvent:true,BackgroundFetchEvent:true,BackgroundFetchFailEvent:true,BackgroundFetchedEvent:true,BeforeInstallPromptEvent:true,BeforeUnloadEvent:true,BlobEvent:true,CanMakePaymentEvent:true,ClipboardEvent:true,CloseEvent:true,CustomEvent:true,DeviceMotionEvent:true,DeviceOrientationEvent:true,ErrorEvent:true,ExtendableEvent:true,ExtendableMessageEvent:true,FetchEvent:true,FontFaceSetLoadEvent:true,ForeignFetchEvent:true,GamepadEvent:true,HashChangeEvent:true,InstallEvent:true,MediaEncryptedEvent:true,MediaKeyMessageEvent:true,MediaQueryListEvent:true,MediaStreamEvent:true,MediaStreamTrackEvent:true,MessageEvent:true,MIDIConnectionEvent:true,MIDIMessageEvent:true,MutationEvent:true,NotificationEvent:true,PageTransitionEvent:true,PaymentRequestEvent:true,PaymentRequestUpdateEvent:true,PopStateEvent:true,PresentationConnectionAvailableEvent:true,PresentationConnectionCloseEvent:true,ProgressEvent:true,PromiseRejectionEvent:true,PushEvent:true,RTCDataChannelEvent:true,RTCDTMFToneChangeEvent:true,RTCPeerConnectionIceEvent:true,RTCTrackEvent:true,SecurityPolicyViolationEvent:true,SensorErrorEvent:true,SpeechRecognitionError:true,SpeechRecognitionEvent:true,SpeechSynthesisEvent:true,StorageEvent:true,SyncEvent:true,TrackEvent:true,TransitionEvent:true,WebKitTransitionEvent:true,VRDeviceEvent:true,VRDisplayEvent:true,VRSessionEvent:true,MojoInterfaceRequestEvent:true,ResourceProgressEvent:true,USBConnectionEvent:true,IDBVersionChangeEvent:true,AudioProcessingEvent:true,OfflineAudioCompletionEvent:true,WebGLContextEvent:true,Event:false,InputEvent:false,AbsoluteOrientationSensor:true,Accelerometer:true,AccessibleNode:true,AmbientLightSensor:true,Animation:true,ApplicationCache:true,DOMApplicationCache:true,OfflineResourceList:true,BackgroundFetchRegistration:true,BatteryManager:true,BroadcastChannel:true,CanvasCaptureMediaStreamTrack:true,DedicatedWorkerGlobalScope:true,EventSource:true,FileReader:true,FontFaceSet:true,Gyroscope:true,XMLHttpRequest:true,XMLHttpRequestEventTarget:true,XMLHttpRequestUpload:true,LinearAccelerationSensor:true,Magnetometer:true,MediaDevices:true,MediaKeySession:true,MediaQueryList:true,MediaRecorder:true,MediaSource:true,MediaStream:true,MediaStreamTrack:true,MIDIAccess:true,MIDIInput:true,MIDIOutput:true,MIDIPort:true,NetworkInformation:true,Notification:true,OffscreenCanvas:true,OrientationSensor:true,PaymentRequest:true,Performance:true,PermissionStatus:true,PresentationAvailability:true,PresentationConnection:true,PresentationConnectionList:true,PresentationRequest:true,RelativeOrientationSensor:true,RemotePlayback:true,RTCDataChannel:true,DataChannel:true,RTCDTMFSender:true,RTCPeerConnection:true,webkitRTCPeerConnection:true,mozRTCPeerConnection:true,ScreenOrientation:true,Sensor:true,ServiceWorker:true,ServiceWorkerContainer:true,ServiceWorkerGlobalScope:true,ServiceWorkerRegistration:true,SharedWorker:true,SharedWorkerGlobalScope:true,SpeechRecognition:true,SpeechSynthesis:true,SpeechSynthesisUtterance:true,VR:true,VRDevice:true,VRDisplay:true,VRSession:true,VisualViewport:true,WebSocket:true,Worker:true,WorkerGlobalScope:true,WorkerPerformance:true,BluetoothDevice:true,BluetoothRemoteGATTCharacteristic:true,Clipboard:true,MojoInterfaceInterceptor:true,USB:true,IDBDatabase:true,IDBOpenDBRequest:true,IDBVersionChangeRequest:true,IDBRequest:true,IDBTransaction:true,AnalyserNode:true,RealtimeAnalyserNode:true,AudioBufferSourceNode:true,AudioDestinationNode:true,AudioNode:true,AudioScheduledSourceNode:true,AudioWorkletNode:true,BiquadFilterNode:true,ChannelMergerNode:true,AudioChannelMerger:true,ChannelSplitterNode:true,AudioChannelSplitter:true,ConstantSourceNode:true,ConvolverNode:true,DelayNode:true,DynamicsCompressorNode:true,GainNode:true,AudioGainNode:true,IIRFilterNode:true,MediaElementAudioSourceNode:true,MediaStreamAudioDestinationNode:true,MediaStreamAudioSourceNode:true,OscillatorNode:true,Oscillator:true,PannerNode:true,AudioPannerNode:true,webkitAudioPannerNode:true,ScriptProcessorNode:true,JavaScriptAudioNode:true,StereoPannerNode:true,WaveShaperNode:true,EventTarget:false,File:true,FileList:true,FileWriter:true,HTMLFormElement:true,Gamepad:true,History:true,HTMLCollection:true,HTMLFormControlsCollection:true,HTMLOptionsCollection:true,ImageData:true,HTMLImageElement:true,HTMLInputElement:true,KeyboardEvent:true,Location:true,MediaList:true,MessagePort:true,MIDIInputMap:true,MIDIOutputMap:true,MimeType:true,MimeTypeArray:true,PointerEvent:true,MouseEvent:false,DragEvent:false,Document:true,DocumentFragment:true,HTMLDocument:true,ShadowRoot:true,XMLDocument:true,Attr:true,DocumentType:true,Node:false,NodeList:true,RadioNodeList:true,Plugin:true,PluginArray:true,RTCStatsReport:true,HTMLSelectElement:true,SourceBuffer:true,SourceBufferList:true,SpeechGrammar:true,SpeechGrammarList:true,SpeechRecognitionResult:true,Storage:true,CSSStyleSheet:true,StyleSheet:true,HTMLTableCellElement:true,HTMLTableDataCellElement:true,HTMLTableHeaderCellElement:true,TextTrack:true,TextTrackCue:true,VTTCue:true,TextTrackCueList:true,TextTrackList:true,TimeRanges:true,Touch:true,TouchEvent:true,TouchList:true,TrackDefaultList:true,CompositionEvent:true,FocusEvent:true,TextEvent:true,UIEvent:false,URL:true,VideoTrackList:true,WheelEvent:true,Window:true,DOMWindow:true,CSSRuleList:true,ClientRect:true,DOMRect:true,GamepadList:true,NamedNodeMap:true,MozNamedAttrMap:true,SpeechRecognitionResultList:true,StyleSheetList:true,SVGLength:true,SVGLengthList:true,SVGNumber:true,SVGNumberList:true,SVGPointList:true,SVGStringList:true,SVGAElement:true,SVGAnimateElement:true,SVGAnimateMotionElement:true,SVGAnimateTransformElement:true,SVGAnimationElement:true,SVGCircleElement:true,SVGClipPathElement:true,SVGDefsElement:true,SVGDescElement:true,SVGDiscardElement:true,SVGEllipseElement:true,SVGFEBlendElement:true,SVGFEColorMatrixElement:true,SVGFEComponentTransferElement:true,SVGFECompositeElement:true,SVGFEConvolveMatrixElement:true,SVGFEDiffuseLightingElement:true,SVGFEDisplacementMapElement:true,SVGFEDistantLightElement:true,SVGFEFloodElement:true,SVGFEFuncAElement:true,SVGFEFuncBElement:true,SVGFEFuncGElement:true,SVGFEFuncRElement:true,SVGFEGaussianBlurElement:true,SVGFEImageElement:true,SVGFEMergeElement:true,SVGFEMergeNodeElement:true,SVGFEMorphologyElement:true,SVGFEOffsetElement:true,SVGFEPointLightElement:true,SVGFESpecularLightingElement:true,SVGFESpotLightElement:true,SVGFETileElement:true,SVGFETurbulenceElement:true,SVGFilterElement:true,SVGForeignObjectElement:true,SVGGElement:true,SVGGeometryElement:true,SVGGraphicsElement:true,SVGImageElement:true,SVGLineElement:true,SVGLinearGradientElement:true,SVGMarkerElement:true,SVGMaskElement:true,SVGMetadataElement:true,SVGPathElement:true,SVGPatternElement:true,SVGPolygonElement:true,SVGPolylineElement:true,SVGRadialGradientElement:true,SVGRectElement:true,SVGScriptElement:true,SVGSetElement:true,SVGStopElement:true,SVGStyleElement:true,SVGElement:true,SVGSVGElement:true,SVGSwitchElement:true,SVGSymbolElement:true,SVGTSpanElement:true,SVGTextContentElement:true,SVGTextElement:true,SVGTextPathElement:true,SVGTextPositioningElement:true,SVGTitleElement:true,SVGUseElement:true,SVGViewElement:true,SVGGradientElement:true,SVGComponentTransferFunctionElement:true,SVGFEDropShadowElement:true,SVGMPathElement:true,SVGTransform:true,SVGTransformList:true,AudioBuffer:true,AudioParamMap:true,AudioTrackList:true,AudioContext:true,webkitAudioContext:true,BaseAudioContext:false,OfflineAudioContext:true,WebGLBuffer:true,WebGLProgram:true,WebGL2RenderingContext:true,WebGLShader:true,WebGLTexture:true,WebGLUniformLocation:true,SQLResultSetRowList:true})
H.dx.$nativeSuperclassTag="ArrayBufferView"
H.cN.$nativeSuperclassTag="ArrayBufferView"
H.cO.$nativeSuperclassTag="ArrayBufferView"
H.cp.$nativeSuperclassTag="ArrayBufferView"
H.cP.$nativeSuperclassTag="ArrayBufferView"
H.cQ.$nativeSuperclassTag="ArrayBufferView"
H.dy.$nativeSuperclassTag="ArrayBufferView"
W.cR.$nativeSuperclassTag="EventTarget"
W.cS.$nativeSuperclassTag="EventTarget"
W.cT.$nativeSuperclassTag="EventTarget"
W.cU.$nativeSuperclassTag="EventTarget"})()
convertAllToFastObject(w)
convertToFastObject($);(function(a){if(typeof document==="undefined"){a(null)
return}if(typeof document.currentScript!='undefined'){a(document.currentScript)
return}var u=document.scripts
function onLoad(b){for(var s=0;s<u.length;++s)u[s].removeEventListener("load",onLoad,false)
a(b.target)}for(var t=0;t<u.length;++t)u[t].addEventListener("load",onLoad,false)})(function(a){v.currentScript=a
if(typeof dartMainRunner==="function")dartMainRunner(K.mg,[])
else K.mg([])})})()
//# sourceMappingURL=test.dart.js.map
