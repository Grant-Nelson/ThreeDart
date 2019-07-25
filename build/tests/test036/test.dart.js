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
a[c]=function(){a[c]=function(){H.od(b)}
var t
var s=d
try{if(a[b]===u){t=a[b]=s
t=a[b]=d()}else t=a[b]}finally{if(t===s)a[b]=null
a[c]=function(){return this[b]}}return t}}function makeConstList(a){a.immutable$list=Array
a.fixed$length=Array
return a}function convertToFastObject(a){function t(){}t.prototype=a
new t()
return a}function convertAllToFastObject(a){for(var u=0;u<a.length;++u)convertToFastObject(a[u])}var y=0
function tearOffGetter(a,b,c,d,e){return e?new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+d+y+++"(receiver) {"+"if (c === null) c = "+"H.ky"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, true, name);"+"return new c(this, funcs[0], receiver, name);"+"}")(a,b,c,d,H,null):new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+d+y+++"() {"+"if (c === null) c = "+"H.ky"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, false, name);"+"return new c(this, funcs[0], null, name);"+"}")(a,b,c,d,H,null)}function tearOff(a,b,c,d,e,f){var u=null
return d?function(){if(u===null)u=H.ky(this,a,b,c,true,false,e).prototype
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
if(w[u][a])return w[u][a]}}var C={},H={kg:function kg(){},
jS:function(a){var u,t=a^48
if(t<=9)return t
u=a|32
if(97<=u&&u<=102)return u-87
return-1},
kT:function(){return new P.dR("No element")},
mA:function(){return new P.dR("Too few elements")},
a4:function a4(a){this.a=a},
fF:function fF(){},
du:function du(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.d=null
_.$ti=c},
ha:function ha(a,b,c){this.a=a
this.b=b
this.$ti=c},
hb:function hb(a,b,c){var _=this
_.a=null
_.b=a
_.c=b
_.$ti=c},
iT:function iT(a,b,c){this.a=a
this.b=b
this.$ti=c},
iU:function iU(a,b,c){this.a=a
this.b=b
this.$ti=c},
bW:function bW(){},
cO:function cO(){},
e4:function e4(){},
mt:function(){throw H.c(P.E("Cannot modify unmodifiable Map"))},
cd:function(a){var u,t=H.L(v.mangledGlobalNames[a])
if(typeof t==="string")return t
u="minified:"+a
return u},
nX:function(a){return v.types[H.ad(a)]},
o1:function(a,b){var u
if(b!=null){u=b.x
if(u!=null)return u}return!!J.W(a).$iI},
m:function(a){var u
if(typeof a==="string")return a
if(typeof a==="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
u=J.aX(a)
if(typeof u!=="string")throw H.c(H.ay(a))
return u},
cy:function(a){var u=a.$identityHash
if(u==null){u=Math.random()*0x3fffffff|0
a.$identityHash=u}return u},
mU:function(a,b){var u,t,s,r,q,p=/^\s*[+-]?((0x[a-f0-9]+)|(\d+)|([a-z0-9]+))\s*$/i.exec(a)
if(p==null)return
if(3>=p.length)return H.e(p,3)
u=H.L(p[3])
if(b==null){if(u!=null)return parseInt(a,10)
if(p[2]!=null)return parseInt(a,16)
return}if(b<2||b>36)throw H.c(P.af(b,2,36,"radix",null))
if(b===10&&u!=null)return parseInt(a,10)
if(b<10||u==null){t=b<=10?47+b:86+b
s=p[1]
for(r=s.length,q=0;q<r;++q)if((C.b.G(s,q)|32)>t)return}return parseInt(a,b)},
c0:function(a){return H.mL(a)+H.kv(H.bM(a),0,null)},
mL:function(a){var u,t,s,r,q,p,o,n=J.W(a),m=n.constructor
if(typeof m=="function"){u=m.name
t=typeof u==="string"?u:null}else t=null
s=t==null
if(s||n===C.R||!!n.$ibI){r=C.x(a)
if(s)t=r
if(r==="Object"){q=a.constructor
if(typeof q=="function"){p=String(q).match(/^\s*function\s*([\w$]*)\s*\(/)
o=p==null?null:p[1]
if(typeof o==="string"&&/^\w+$/.test(o))t=o}}return t}t=t
return H.cd(t.length>1&&C.b.G(t,0)===36?C.b.aH(t,1):t)},
mM:function(){if(!!self.location)return self.location.href
return},
l3:function(a){var u,t,s,r,q
H.jX(a)
u=J.aH(a)
if(u<=500)return String.fromCharCode.apply(null,a)
for(t="",s=0;s<u;s=r){r=s+500
q=r<u?r:u
t+=String.fromCharCode.apply(null,a.slice(s,q))}return t},
mV:function(a){var u,t,s,r=H.d([],[P.o])
for(u=a.length,t=0;t<a.length;a.length===u||(0,H.H)(a),++t){s=a[t]
if(typeof s!=="number"||Math.floor(s)!==s)throw H.c(H.ay(s))
if(s<=65535)C.a.h(r,s)
else if(s<=1114111){C.a.h(r,55296+(C.e.aO(s-65536,10)&1023))
C.a.h(r,56320+(s&1023))}else throw H.c(H.ay(s))}return H.l3(r)},
l4:function(a){var u,t,s
for(u=a.length,t=0;t<u;++t){s=a[t]
if(typeof s!=="number"||Math.floor(s)!==s)throw H.c(H.ay(s))
if(s<0)throw H.c(H.ay(s))
if(s>65535)return H.mV(a)}return H.l3(a)},
mW:function(a,b,c){var u,t,s,r
if(c<=500&&b===0&&c===a.length)return String.fromCharCode.apply(null,a)
for(u=b,t="";u<c;u=s){s=u+500
r=s<c?s:c
t+=String.fromCharCode.apply(null,a.subarray(u,r))}return t},
dH:function(a){var u
if(0<=a){if(a<=65535)return String.fromCharCode(a)
if(a<=1114111){u=a-65536
return String.fromCharCode((55296|C.e.aO(u,10))>>>0,56320|u&1023)}}throw H.c(P.af(a,0,1114111,null,null))},
c_:function(a){if(a.date===void 0)a.date=new Date(a.a)
return a.date},
mT:function(a){var u=H.c_(a).getFullYear()+0
return u},
mR:function(a){var u=H.c_(a).getMonth()+1
return u},
mN:function(a){var u=H.c_(a).getDate()+0
return u},
mO:function(a){var u=H.c_(a).getHours()+0
return u},
mQ:function(a){var u=H.c_(a).getMinutes()+0
return u},
mS:function(a){var u=H.c_(a).getSeconds()+0
return u},
mP:function(a){var u=H.c_(a).getMilliseconds()+0
return u},
B:function(a){throw H.c(H.ay(a))},
e:function(a,b){if(a==null)J.aH(a)
throw H.c(H.c8(a,b))},
c8:function(a,b){var u,t,s="index"
if(typeof b!=="number"||Math.floor(b)!==b)return new P.aY(!0,b,s,null)
u=H.ad(J.aH(a))
if(!(b<0)){if(typeof u!=="number")return H.B(u)
t=b>=u}else t=!0
if(t)return P.Y(b,a,s,null,u)
return P.dJ(b,s)},
nP:function(a,b,c){var u="Invalid value"
if(a>c)return new P.c1(0,c,!0,a,"start",u)
if(b!=null)if(b<a||b>c)return new P.c1(a,c,!0,b,"end",u)
return new P.aY(!0,b,"end",null)},
ay:function(a){return new P.aY(!0,a,null,null)},
nM:function(a){if(typeof a!=="number")throw H.c(H.ay(a))
return a},
c:function(a){var u
if(a==null)a=new P.dE()
u=new Error()
u.dartException=a
if("defineProperty" in Object){Object.defineProperty(u,"message",{get:H.lX})
u.name=""}else u.toString=H.lX
return u},
lX:function(){return J.aX(this.dartException)},
r:function(a){throw H.c(a)},
H:function(a){throw H.c(P.bU(a))},
bb:function(a){var u,t,s,r,q,p
a=H.lV(a.replace(String({}),'$receiver$'))
u=a.match(/\\\$[a-zA-Z]+\\\$/g)
if(u==null)u=H.d([],[P.i])
t=u.indexOf("\\$arguments\\$")
s=u.indexOf("\\$argumentsExpr\\$")
r=u.indexOf("\\$expr\\$")
q=u.indexOf("\\$method\\$")
p=u.indexOf("\\$receiver\\$")
return new H.ih(a.replace(new RegExp('\\\\\\$arguments\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$argumentsExpr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$expr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$method\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$receiver\\\\\\$','g'),'((?:x|[^x])*)'),t,s,r,q,p)},
ii:function(a){return function($expr$){var $argumentsExpr$='$arguments$'
try{$expr$.$method$($argumentsExpr$)}catch(u){return u.message}}(a)},
ld:function(a){return function($expr$){try{$expr$.$method$}catch(u){return u.message}}(a)},
kY:function(a,b){return new H.hv(a,b==null?null:b.method)},
kh:function(a,b){var u=b==null,t=u?null:b.method
return new H.fX(a,t,u?null:b.receiver)},
aG:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=null,f=new H.k5(a)
if(a==null)return
if(typeof a!=="object")return a
if("dartException" in a)return f.$1(a.dartException)
else if(!("message" in a))return a
u=a.message
if("number" in a&&typeof a.number=="number"){t=a.number
s=t&65535
if((C.e.aO(t,16)&8191)===10)switch(s){case 438:return f.$1(H.kh(H.m(u)+" (Error "+s+")",g))
case 445:case 5007:return f.$1(H.kY(H.m(u)+" (Error "+s+")",g))}}if(a instanceof TypeError){r=$.m_()
q=$.m0()
p=$.m1()
o=$.m2()
n=$.m5()
m=$.m6()
l=$.m4()
$.m3()
k=$.m8()
j=$.m7()
i=r.ah(u)
if(i!=null)return f.$1(H.kh(H.L(u),i))
else{i=q.ah(u)
if(i!=null){i.method="call"
return f.$1(H.kh(H.L(u),i))}else{i=p.ah(u)
if(i==null){i=o.ah(u)
if(i==null){i=n.ah(u)
if(i==null){i=m.ah(u)
if(i==null){i=l.ah(u)
if(i==null){i=o.ah(u)
if(i==null){i=k.ah(u)
if(i==null){i=j.ah(u)
h=i!=null}else h=!0}else h=!0}else h=!0}else h=!0}else h=!0}else h=!0}else h=!0
if(h)return f.$1(H.kY(H.L(u),i))}}return f.$1(new H.iu(typeof u==="string"?u:""))}if(a instanceof RangeError){if(typeof u==="string"&&u.indexOf("call stack")!==-1)return new P.dQ()
u=function(b){try{return String(b)}catch(e){}return null}(a)
return f.$1(new P.aY(!1,g,g,typeof u==="string"?u.replace(/^RangeError:\s*/,""):u))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof u==="string"&&u==="too much recursion")return new P.dQ()
return a},
cb:function(a){var u
if(a==null)return new H.eI(a)
u=a.$cachedTrace
if(u!=null)return u
return a.$cachedTrace=new H.eI(a)},
nT:function(a,b){var u,t,s,r=a.length
for(u=0;u<r;u=s){t=u+1
s=t+1
b.l(0,a[u],a[t])}return b},
o0:function(a,b,c,d,e,f){H.f(a,"$ikc")
switch(H.ad(b)){case 0:return a.$0()
case 1:return a.$1(c)
case 2:return a.$2(c,d)
case 3:return a.$3(c,d,e)
case 4:return a.$4(c,d,e,f)}throw H.c(P.t("Unsupported number of arguments for wrapped closure"))},
c7:function(a,b){var u
H.ad(b)
if(a==null)return
u=a.$identity
if(!!u)return u
u=function(c,d,e){return function(f,g,h,i){return e(c,d,f,g,h,i)}}(a,b,H.o0)
a.$identity=u
return u},
ms:function(a,b,c,d,e,f,g){var u,t,s,r,q,p,o,n,m,l=null,k=b[0],j=k.$callName,i=e?Object.create(new H.hY().constructor.prototype):Object.create(new H.cf(l,l,l,l).constructor.prototype)
i.$initialize=i.constructor
if(e)u=function static_tear_off(){this.$initialize()}
else{t=$.aZ
if(typeof t!=="number")return t.n()
$.aZ=t+1
t=new Function("a,b,c,d"+t,"this.$initialize(a,b,c,d"+t+")")
u=t}i.constructor=u
u.prototype=i
if(!e){s=H.kP(a,k,f)
s.$reflectionInfo=d}else{i.$static_name=g
s=k}if(typeof d=="number")r=function(h,a0){return function(){return h(a0)}}(H.nX,d)
else if(typeof d=="function")if(e)r=d
else{q=f?H.kN:H.k9
r=function(h,a0){return function(){return h.apply({$receiver:a0(this)},arguments)}}(d,q)}else throw H.c("Error in reflectionInfo.")
i.$S=r
i[j]=s
for(p=s,o=1;o<b.length;++o){n=b[o]
m=n.$callName
if(m!=null){n=e?n:H.kP(a,n,f)
i[m]=n}if(o===c){n.$reflectionInfo=d
p=n}}i.$C=p
i.$R=k.$R
i.$D=k.$D
return u},
mp:function(a,b,c,d){var u=H.k9
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,u)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,u)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,u)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,u)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,u)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,u)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,u)}},
kP:function(a,b,c){var u,t,s,r,q,p,o
if(c)return H.mr(a,b)
u=b.$stubName
t=b.length
s=a[u]
r=b==null?s==null:b===s
q=!r||t>=27
if(q)return H.mp(t,!r,u,b)
if(t===0){r=$.aZ
if(typeof r!=="number")return r.n()
$.aZ=r+1
p="self"+r
r="return function(){var "+p+" = this."
q=$.cg
return new Function(r+H.m(q==null?$.cg=H.fm("self"):q)+";return "+p+"."+H.m(u)+"();}")()}o="abcdefghijklmnopqrstuvwxyz".split("").splice(0,t).join(",")
r=$.aZ
if(typeof r!=="number")return r.n()
$.aZ=r+1
o+=r
r="return function("+o+"){return this."
q=$.cg
return new Function(r+H.m(q==null?$.cg=H.fm("self"):q)+"."+H.m(u)+"("+o+");}")()},
mq:function(a,b,c,d){var u=H.k9,t=H.kN
switch(b?-1:a){case 0:throw H.c(H.n_("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,u,t)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,u,t)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,u,t)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,u,t)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,u,t)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,u,t)
default:return function(e,f,g,h){return function(){h=[g(this)]
Array.prototype.push.apply(h,arguments)
return e.apply(f(this),h)}}(d,u,t)}},
mr:function(a,b){var u,t,s,r,q,p,o,n=$.cg
if(n==null)n=$.cg=H.fm("self")
u=$.kM
if(u==null)u=$.kM=H.fm("receiver")
t=b.$stubName
s=b.length
r=a[t]
q=b==null?r==null:b===r
p=!q||s>=28
if(p)return H.mq(s,!q,t,b)
if(s===1){n="return function(){return this."+H.m(n)+"."+H.m(t)+"(this."+H.m(u)+");"
u=$.aZ
if(typeof u!=="number")return u.n()
$.aZ=u+1
return new Function(n+u+"}")()}o="abcdefghijklmnopqrstuvwxyz".split("").splice(0,s-1).join(",")
n="return function("+o+"){return this."+H.m(n)+"."+H.m(t)+"(this."+H.m(u)+", "+o+");"
u=$.aZ
if(typeof u!=="number")return u.n()
$.aZ=u+1
return new Function(n+u+"}")()},
ky:function(a,b,c,d,e,f,g){return H.ms(a,b,H.ad(c),d,!!e,!!f,g)},
k9:function(a){return a.a},
kN:function(a){return a.c},
fm:function(a){var u,t,s,r=new H.cf("self","target","receiver","name"),q=J.ke(Object.getOwnPropertyNames(r))
for(u=q.length,t=0;t<u;++t){s=q[t]
if(r[s]===a)return s}},
A:function(a){if(a==null)H.nI("boolean expression must not be null")
return a},
L:function(a){if(a==null)return a
if(typeof a==="string")return a
throw H.c(H.aV(a,"String"))},
nQ:function(a){if(a==null)return a
if(typeof a==="number")return a
throw H.c(H.aV(a,"double"))},
o5:function(a){if(a==null)return a
if(typeof a==="number")return a
throw H.c(H.aV(a,"num"))},
lL:function(a){if(a==null)return a
if(typeof a==="boolean")return a
throw H.c(H.aV(a,"bool"))},
ad:function(a){if(a==null)return a
if(typeof a==="number"&&Math.floor(a)===a)return a
throw H.c(H.aV(a,"int"))},
lT:function(a,b){throw H.c(H.aV(a,H.cd(H.L(b).substring(2))))},
o7:function(a,b){throw H.c(H.mo(a,H.cd(H.L(b).substring(2))))},
f:function(a,b){if(a==null)return a
if((typeof a==="object"||typeof a==="function")&&J.W(a)[b])return a
H.lT(a,b)},
l:function(a,b){var u
if(a!=null)u=(typeof a==="object"||typeof a==="function")&&J.W(a)[b]
else u=!0
if(u)return a
H.o7(a,b)},
jX:function(a){if(a==null)return a
if(!!J.W(a).$ib)return a
throw H.c(H.aV(a,"List<dynamic>"))},
lQ:function(a,b){var u
if(a==null)return a
u=J.W(a)
if(!!u.$ib)return a
if(u[b])return a
H.lT(a,b)},
lM:function(a){var u
if("$S" in a){u=a.$S
if(typeof u=="number")return v.types[H.ad(u)]
else return a.$S()}return},
f3:function(a,b){var u
if(typeof a=="function")return!0
u=H.lM(J.W(a))
if(u==null)return!1
return H.lA(u,null,b,null)},
n:function(a,b){var u,t
if(a==null)return a
if($.ks)return a
$.ks=!0
try{if(H.f3(a,b))return a
u=H.k2(b)
t=H.aV(a,u)
throw H.c(t)}finally{$.ks=!1}},
kz:function(a,b){if(a!=null&&!H.kx(a,b))H.r(H.aV(a,H.k2(b)))
return a},
aV:function(a,b){return new H.ij("TypeError: "+P.dj(a)+": type '"+H.lG(a)+"' is not a subtype of type '"+b+"'")},
mo:function(a,b){return new H.fn("CastError: "+P.dj(a)+": type '"+H.lG(a)+"' is not a subtype of type '"+b+"'")},
lG:function(a){var u,t=J.W(a)
if(!!t.$ici){u=H.lM(t)
if(u!=null)return H.k2(u)
return"Closure"}return H.c0(a)},
nI:function(a){throw H.c(new H.iV(a))},
od:function(a){throw H.c(new P.fy(H.L(a)))},
n_:function(a){return new H.hL(a)},
lN:function(a){return v.getIsolateTag(a)},
d:function(a,b){a.$ti=b
return a},
bM:function(a){if(a==null)return
return a.$ti},
oT:function(a,b,c){return H.cc(a["$a"+H.m(c)],H.bM(b))},
bL:function(a,b,c,d){var u
H.L(c)
H.ad(d)
u=H.cc(a["$a"+H.m(c)],H.bM(b))
return u==null?null:u[d]},
az:function(a,b,c){var u
H.L(b)
H.ad(c)
u=H.cc(a["$a"+H.m(b)],H.bM(a))
return u==null?null:u[c]},
v:function(a,b){var u
H.ad(b)
u=H.bM(a)
return u==null?null:u[b]},
k2:function(a){return H.bK(a,null)},
bK:function(a,b){var u,t
H.j(b,"$ib",[P.i],"$ab")
if(a==null)return"dynamic"
if(a===-1)return"void"
if(typeof a==="object"&&a!==null&&a.constructor===Array)return H.cd(a[0].name)+H.kv(a,1,b)
if(typeof a=="function")return H.cd(a.name)
if(a===-2)return"dynamic"
if(typeof a==="number"){H.ad(a)
if(b==null||a<0||a>=b.length)return"unexpected-generic-index:"+a
u=b.length
t=u-a-1
if(t<0||t>=u)return H.e(b,t)
return H.m(b[t])}if('func' in a)return H.nB(a,b)
if('futureOr' in a)return"FutureOr<"+H.bK("type" in a?a.type:null,b)+">"
return"unknown-reified-type"},
nB:function(a,a0){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c=", ",b=[P.i]
H.j(a0,"$ib",b,"$ab")
if("bounds" in a){u=a.bounds
if(a0==null){a0=H.d([],b)
t=null}else t=a0.length
s=a0.length
for(r=u.length,q=r;q>0;--q)C.a.h(a0,"T"+(s+q))
for(p="<",o="",q=0;q<r;++q,o=c){p+=o
b=a0.length
n=b-q-1
if(n<0)return H.e(a0,n)
p=C.b.n(p,a0[n])
m=u[q]
if(m!=null&&m!==P.P)p+=" extends "+H.bK(m,a0)}p+=">"}else{p=""
t=null}l=!!a.v?"void":H.bK(a.ret,a0)
if("args" in a){k=a.args
for(b=k.length,j="",i="",h=0;h<b;++h,i=c){g=k[h]
j=j+i+H.bK(g,a0)}}else{j=""
i=""}if("opt" in a){f=a.opt
j+=i+"["
for(b=f.length,i="",h=0;h<b;++h,i=c){g=f[h]
j=j+i+H.bK(g,a0)}j+="]"}if("named" in a){e=a.named
j+=i+"{"
for(b=H.nS(e),n=b.length,i="",h=0;h<n;++h,i=c){d=H.L(b[h])
j=j+i+H.bK(e[d],a0)+(" "+H.m(d))}j+="}"}if(t!=null)a0.length=t
return p+"("+j+") => "+l},
kv:function(a,b,c){var u,t,s,r,q,p
H.j(c,"$ib",[P.i],"$ab")
if(a==null)return""
u=new P.al("")
for(t=b,s="",r=!0,q="";t<a.length;++t,s=", "){u.a=q+s
p=a[t]
if(p!=null)r=!1
q=u.a+=H.bK(p,c)}return"<"+u.i(0)+">"},
cc:function(a,b){if(a==null)return b
a=a.apply(null,b)
if(a==null)return
if(typeof a==="object"&&a!==null&&a.constructor===Array)return a
if(typeof a=="function")return a.apply(null,b)
return b},
kw:function(a,b,c,d){var u,t
H.L(b)
H.jX(c)
H.L(d)
if(a==null)return!1
u=H.bM(a)
t=J.W(a)
if(t[b]==null)return!1
return H.lJ(H.cc(t[d],u),null,c,null)},
j:function(a,b,c,d){H.L(b)
H.jX(c)
H.L(d)
if(a==null)return a
if(H.kw(a,b,c,d))return a
throw H.c(H.aV(a,function(e,f){return e.replace(/[^<,> ]+/g,function(g){return f[g]||g})}(H.cd(b.substring(2))+H.kv(c,0,null),v.mangledGlobalNames)))},
lJ:function(a,b,c,d){var u,t
if(c==null)return!0
if(a==null){u=c.length
for(t=0;t<u;++t)if(!H.aF(null,null,c[t],d))return!1
return!0}u=a.length
for(t=0;t<u;++t)if(!H.aF(a[t],b,c[t],d))return!1
return!0},
oR:function(a,b,c){return a.apply(b,H.cc(J.W(b)["$a"+H.m(c)],H.bM(b)))},
lP:function(a){var u
if(typeof a==="number")return!1
if('futureOr' in a){u="type" in a?a.type:null
return a==null||a.name==="P"||a.name==="K"||a===-1||a===-2||H.lP(u)}return!1},
kx:function(a,b){var u,t
if(a==null)return b==null||b.name==="P"||b.name==="K"||b===-1||b===-2||H.lP(b)
if(b==null||b===-1||b.name==="P"||b===-2)return!0
if(typeof b=="object"){if('futureOr' in b)if(H.kx(a,"type" in b?b.type:null))return!0
if('func' in b)return H.f3(a,b)}u=J.W(a).constructor
t=H.bM(a)
if(t!=null){t=t.slice()
t.splice(0,0,u)
u=t}return H.aF(u,null,b,null)},
y:function(a,b){if(a!=null&&!H.kx(a,b))throw H.c(H.aV(a,H.k2(b)))
return a},
aF:function(a,b,c,d){var u,t,s,r,q,p,o,n,m,l=null
if(a===c)return!0
if(c==null||c===-1||c.name==="P"||c===-2)return!0
if(a===-2)return!0
if(a==null||a===-1||a.name==="P"||a===-2){if(typeof c==="number")return!1
if('futureOr' in c)return H.aF(a,b,"type" in c?c.type:l,d)
return!1}if(typeof a==="number")return!1
if(typeof c==="number")return!1
if(a.name==="K")return!0
if('func' in c)return H.lA(a,b,c,d)
if('func' in a)return c.name==="kc"
u=typeof a==="object"&&a!==null&&a.constructor===Array
t=u?a[0]:a
if('futureOr' in c){s="type" in c?c.type:l
if('futureOr' in a)return H.aF("type" in a?a.type:l,b,s,d)
else if(H.aF(a,b,s,d))return!0
else{if(!('$i'+"cm" in t.prototype))return!1
r=t.prototype["$a"+"cm"]
q=H.cc(r,u?a.slice(1):l)
return H.aF(typeof q==="object"&&q!==null&&q.constructor===Array?q[0]:l,b,s,d)}}p=typeof c==="object"&&c!==null&&c.constructor===Array
o=p?c[0]:c
if(o!==t){n=o.name
if(!('$i'+n in t.prototype))return!1
m=t.prototype["$a"+n]}else m=l
if(!p)return!0
u=u?a.slice(1):l
p=c.slice(1)
return H.lJ(H.cc(m,u),b,p,d)},
lA:function(a,b,c,d){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g
if(!('func' in a))return!1
if("bounds" in a){if(!("bounds" in c))return!1
u=a.bounds
t=c.bounds
if(u.length!==t.length)return!1}else if("bounds" in c)return!1
if(!H.aF(a.ret,b,c.ret,d))return!1
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
for(k=0;k<o;++k)if(!H.aF(r[k],d,s[k],b))return!1
for(j=k,i=0;j<n;++i,++j)if(!H.aF(r[j],d,q[i],b))return!1
for(j=0;j<l;++i,++j)if(!H.aF(p[j],d,q[i],b))return!1
h=a.named
g=c.named
if(g==null)return!0
if(h==null)return!1
return H.o4(h,b,g,d)},
o4:function(a,b,c,d){var u,t,s,r=Object.getOwnPropertyNames(c)
for(u=r.length,t=0;t<u;++t){s=r[t]
if(!Object.hasOwnProperty.call(a,s))return!1
if(!H.aF(c[s],d,a[s],b))return!1}return!0},
oS:function(a,b,c){Object.defineProperty(a,H.L(b),{value:c,enumerable:false,writable:true,configurable:true})},
o2:function(a){var u,t,s,r,q=H.L($.lO.$1(a)),p=$.jQ[q]
if(p!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}u=$.jW[q]
if(u!=null)return u
t=v.interceptorsByTag[q]
if(t==null){q=H.L($.lI.$2(a,q))
if(q!=null){p=$.jQ[q]
if(p!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}u=$.jW[q]
if(u!=null)return u
t=v.interceptorsByTag[q]}}if(t==null)return
u=t.prototype
s=q[0]
if(s==="!"){p=H.k1(u)
$.jQ[q]=p
Object.defineProperty(a,v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}if(s==="~"){$.jW[q]=u
return u}if(s==="-"){r=H.k1(u)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:r,enumerable:false,writable:true,configurable:true})
return r.i}if(s==="+")return H.lS(a,u)
if(s==="*")throw H.c(P.it(q))
if(v.leafTags[q]===true){r=H.k1(u)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:r,enumerable:false,writable:true,configurable:true})
return r.i}else return H.lS(a,u)},
lS:function(a,b){var u=Object.getPrototypeOf(a)
Object.defineProperty(u,v.dispatchPropertyName,{value:J.kC(b,u,null,null),enumerable:false,writable:true,configurable:true})
return b},
k1:function(a){return J.kC(a,!1,null,!!a.$iI)},
o3:function(a,b,c){var u=b.prototype
if(v.leafTags[a]===true)return H.k1(u)
else return J.kC(u,c,null,null)},
nZ:function(){if(!0===$.kB)return
$.kB=!0
H.o_()},
o_:function(){var u,t,s,r,q,p,o,n
$.jQ=Object.create(null)
$.jW=Object.create(null)
H.nY()
u=v.interceptorsByTag
t=Object.getOwnPropertyNames(u)
if(typeof window!="undefined"){window
s=function(){}
for(r=0;r<t.length;++r){q=t[r]
p=$.lU.$1(q)
if(p!=null){o=H.o3(q,u[q],p)
if(o!=null){Object.defineProperty(p,v.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
s.prototype=p}}}}for(r=0;r<t.length;++r){q=t[r]
if(/^[A-Za-z_]/.test(q)){n=u[q]
u["!"+q]=n
u["~"+q]=n
u["-"+q]=n
u["+"+q]=n
u["*"+q]=n}}},
nY:function(){var u,t,s,r,q,p,o=C.I()
o=H.c6(C.J,H.c6(C.K,H.c6(C.y,H.c6(C.y,H.c6(C.L,H.c6(C.M,H.c6(C.N(C.x),o)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){u=dartNativeDispatchHooksTransformer
if(typeof u=="function")u=[u]
if(u.constructor==Array)for(t=0;t<u.length;++t){s=u[t]
if(typeof s=="function")o=s(o)||o}}r=o.getTag
q=o.getUnknownTag
p=o.prototypeForTag
$.lO=new H.jT(r)
$.lI=new H.jU(q)
$.lU=new H.jV(p)},
c6:function(a,b){return a(b)||b},
mC:function(a,b,c,d){var u=b?"m":"",t=c?"":"i",s=d?"g":"",r=function(e,f){try{return new RegExp(e,f)}catch(q){return q}}(a,u+t+s)
if(r instanceof RegExp)return r
throw H.c(P.a2("Illegal RegExp pattern ("+String(r)+")",a,null))},
oa:function(a,b,c){var u=a.indexOf(b,c)
return u>=0},
nR:function(a){if(a.indexOf("$",0)>=0)return a.replace(/\$/g,"$$$$")
return a},
lV:function(a){if(/[[\]{}()*+?.\\^$|]/.test(a))return a.replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
return a},
lW:function(a,b,c){var u=H.ob(a,b,c)
return u},
ob:function(a,b,c){var u,t,s,r
if(b===""){if(a==="")return c
u=a.length
for(t=c,s=0;s<u;++s)t=t+a[s]+c
return t.charCodeAt(0)==0?t:t}r=a.indexOf(b,0)
if(r<0)return a
if(a.length<500||c.indexOf("$",0)>=0)return a.split(b).join(c)
return a.replace(new RegExp(H.lV(b),'g'),H.nR(c))},
fs:function fs(){},
ft:function ft(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
ih:function ih(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
hv:function hv(a,b){this.a=a
this.b=b},
fX:function fX(a,b,c){this.a=a
this.b=b
this.c=c},
iu:function iu(a){this.a=a},
k5:function k5(a){this.a=a},
eI:function eI(a){this.a=a
this.b=null},
ci:function ci(){},
i5:function i5(){},
hY:function hY(){},
cf:function cf(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
ij:function ij(a){this.a=a},
fn:function fn(a){this.a=a},
hL:function hL(a){this.a=a},
iV:function iV(a){this.a=a},
aK:function aK(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
h0:function h0(a,b){this.a=a
this.b=b
this.c=null},
h1:function h1(a,b){this.a=a
this.$ti=b},
h2:function h2(a,b,c){var _=this
_.a=a
_.b=b
_.d=_.c=null
_.$ti=c},
jT:function jT(a){this.a=a},
jU:function jU(a){this.a=a},
jV:function jV(a){this.a=a},
fW:function fW(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
bJ:function(a){return a},
mK:function(a){return new Int8Array(a)},
bf:function(a,b,c){if(a>>>0!==a||a>=c)throw H.c(H.c8(b,a))},
nz:function(a,b,c){var u
if(!(a>>>0!==a))u=b>>>0!==b||a>b||b>c
else u=!0
if(u)throw H.c(H.nP(a,b,c))
return b},
ct:function ct(){},
bE:function bE(){},
dB:function dB(){},
cu:function cu(){},
dC:function dC(){},
hp:function hp(){},
hq:function hq(){},
hr:function hr(){},
hs:function hs(){},
ht:function ht(){},
dD:function dD(){},
cv:function cv(){},
cT:function cT(){},
cU:function cU(){},
cV:function cV(){},
cW:function cW(){},
nS:function(a){return J.kU(a?Object.keys(a):[],null)},
o6:function(a){if(typeof dartPrint=="function"){dartPrint(a)
return}if(typeof console=="object"&&typeof console.log!="undefined"){console.log(a)
return}if(typeof window=="object")return
if(typeof print=="function"){print(a)
return}throw"Unable to print message: "+String(a)}},J={
kC:function(a,b,c,d){return{i:a,p:b,e:c,x:d}},
f5:function(a){var u,t,s,r,q=a[v.dispatchPropertyName]
if(q==null)if($.kB==null){H.nZ()
q=a[v.dispatchPropertyName]}if(q!=null){u=q.p
if(!1===u)return q.i
if(!0===u)return a
t=Object.getPrototypeOf(a)
if(u===t)return q.i
if(q.e===t)throw H.c(P.it("Return interceptor for "+H.m(u(a,q))))}s=a.constructor
r=s==null?null:s[$.kF()]
if(r!=null)return r
r=H.o2(a)
if(r!=null)return r
if(typeof a=="function")return C.T
u=Object.getPrototypeOf(a)
if(u==null)return C.E
if(u===Object.prototype)return C.E
if(typeof s=="function"){Object.defineProperty(s,$.kF(),{value:C.w,enumerable:false,writable:true,configurable:true})
return C.w}return C.w},
mB:function(a,b){if(typeof a!=="number"||Math.floor(a)!==a)throw H.c(P.k8(a,"length","is not an integer"))
if(a<0||a>4294967295)throw H.c(P.af(a,0,4294967295,"length",null))
return J.kU(new Array(a),b)},
kU:function(a,b){return J.ke(H.d(a,[b]))},
ke:function(a){H.jX(a)
a.fixed$length=Array
return a},
W:function(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.dp.prototype
return J.dn.prototype}if(typeof a=="string")return J.bg.prototype
if(a==null)return J.dq.prototype
if(typeof a=="boolean")return J.fV.prototype
if(a.constructor==Array)return J.aJ.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bh.prototype
return a}if(a instanceof P.P)return a
return J.f5(a)},
nU:function(a){if(typeof a=="number")return J.bB.prototype
if(typeof a=="string")return J.bg.prototype
if(a==null)return a
if(a.constructor==Array)return J.aJ.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bh.prototype
return a}if(a instanceof P.P)return a
return J.f5(a)},
ca:function(a){if(typeof a=="string")return J.bg.prototype
if(a==null)return a
if(a.constructor==Array)return J.aJ.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bh.prototype
return a}if(a instanceof P.P)return a
return J.f5(a)},
jR:function(a){if(a==null)return a
if(a.constructor==Array)return J.aJ.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bh.prototype
return a}if(a instanceof P.P)return a
return J.f5(a)},
nV:function(a){if(typeof a=="number")return J.bB.prototype
if(a==null)return a
if(!(a instanceof P.P))return J.bI.prototype
return a},
nW:function(a){if(typeof a=="number")return J.bB.prototype
if(typeof a=="string")return J.bg.prototype
if(a==null)return a
if(!(a instanceof P.P))return J.bI.prototype
return a},
kA:function(a){if(typeof a=="string")return J.bg.prototype
if(a==null)return a
if(!(a instanceof P.P))return J.bI.prototype
return a},
f4:function(a){if(a==null)return a
if(typeof a!="object"){if(typeof a=="function")return J.bh.prototype
return a}if(a instanceof P.P)return a
return J.f5(a)},
mg:function(a,b){if(typeof a=="number"&&typeof b=="number")return a+b
return J.nU(a).n(a,b)},
T:function(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.W(a).u(a,b)},
kH:function(a,b){if(typeof a=="number"&&typeof b=="number")return a*b
return J.nW(a).t(a,b)},
mh:function(a,b){if(typeof a=="number"&&typeof b=="number")return a-b
return J.nV(a).q(a,b)},
kI:function(a,b){if(typeof b==="number")if(a.constructor==Array||typeof a=="string"||H.o1(a,a[v.dispatchPropertyName]))if(b>>>0===b&&b<a.length)return a[b]
return J.ca(a).j(a,b)},
k6:function(a,b,c){return J.jR(a).l(a,b,c)},
mi:function(a,b){return J.kA(a).G(a,b)},
mj:function(a,b,c){return J.f4(a).hL(a,b,c)},
mk:function(a,b,c,d){return J.f4(a).iH(a,b,c,d)},
ml:function(a,b){return J.kA(a).Z(a,b)},
k7:function(a,b){return J.jR(a).I(a,b)},
mm:function(a,b,c,d){return J.f4(a).iY(a,b,c,d)},
kJ:function(a,b){return J.jR(a).K(a,b)},
kK:function(a){return J.f4(a).gci(a)},
d6:function(a){return J.W(a).gH(a)},
bN:function(a){return J.jR(a).gV(a)},
aH:function(a){return J.ca(a).gk(a)},
mn:function(a,b){return J.f4(a).js(a,b)},
aX:function(a){return J.W(a).i(a)},
a:function a(){},
fV:function fV(){},
dq:function dq(){},
dr:function dr(){},
hz:function hz(){},
bI:function bI(){},
bh:function bh(){},
aJ:function aJ(a){this.$ti=a},
kf:function kf(a){this.$ti=a},
ar:function ar(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.d=null
_.$ti=c},
bB:function bB(){},
dp:function dp(){},
dn:function dn(){},
bg:function bg(){}},P={
ne:function(){var u,t,s={}
if(self.scheduleImmediate!=null)return P.nJ()
if(self.MutationObserver!=null&&self.document!=null){u=self.document.createElement("div")
t=self.document.createElement("span")
s.a=null
new self.MutationObserver(H.c7(new P.iX(s),1)).observe(u,{childList:true})
return new P.iW(s,u,t)}else if(self.setImmediate!=null)return P.nK()
return P.nL()},
nf:function(a){self.scheduleImmediate(H.c7(new P.iY(H.n(a,{func:1,ret:-1})),0))},
ng:function(a){self.setImmediate(H.c7(new P.iZ(H.n(a,{func:1,ret:-1})),0))},
nh:function(a){P.kk(C.v,H.n(a,{func:1,ret:-1}))},
kk:function(a,b){var u
H.n(b,{func:1,ret:-1})
u=C.e.a4(a.a,1000)
return P.nk(u<0?0:u,b)},
lc:function(a,b){var u
H.n(b,{func:1,ret:-1,args:[P.b9]})
u=C.e.a4(a.a,1000)
return P.nl(u<0?0:u,b)},
nk:function(a,b){var u=new P.eO()
u.eX(a,b)
return u},
nl:function(a,b){var u=new P.eO()
u.eY(a,b)
return u},
ni:function(a,b){var u,t,s
b.a=1
try{a.ew(new P.j7(b),new P.j8(b),null)}catch(s){u=H.aG(s)
t=H.cb(s)
P.o8(new P.j9(b,u,t))}},
lq:function(a,b){var u,t
for(;u=a.a,u===2;)a=H.f(a.c,"$iaE")
if(u>=4){t=b.c3()
b.a=a.a
b.c=a.c
P.cR(b,t)}else{t=H.f(b.c,"$ibe")
b.a=2
b.c=a
a.dq(t)}},
cR:function(a,b){var u,t,s,r,q,p,o,n,m,l,k,j,i=null,h={},g=h.a=a
for(;!0;){u={}
t=g.a===8
if(b==null){if(t){s=H.f(g.c,"$ian")
g=g.b
r=s.a
q=s.b
g.toString
P.jL(i,i,g,r,q)}return}for(;p=b.a,p!=null;b=p){b.a=null
P.cR(h.a,b)}g=h.a
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
if(m){H.f(o,"$ian")
g=g.b
r=o.a
q=o.b
g.toString
P.jL(i,i,g,r,q)
return}l=$.Z
if(l!=n)$.Z=n
else l=i
g=b.c
if(g===8)new P.jd(h,u,b,t).$0()
else if(r){if((g&1)!==0)new P.jc(u,b,o).$0()}else if((g&2)!==0)new P.jb(h,u,b).$0()
if(l!=null)$.Z=l
g=u.b
if(!!J.W(g).$icm){if(g.a>=4){k=H.f(q.c,"$ibe")
q.c=null
b=q.bf(k)
q.a=g.a
q.c=g.c
h.a=g
continue}else P.lq(g,q)
return}}j=b.b
k=H.f(j.c,"$ibe")
j.c=null
b=j.bf(k)
g=u.a
r=u.b
if(!g){H.y(r,H.v(j,0))
j.a=4
j.c=r}else{H.f(r,"$ian")
j.a=8
j.c=r}h.a=j
g=j}},
nE:function(a,b){if(H.f3(a,{func:1,args:[P.P,P.as]}))return H.n(a,{func:1,ret:null,args:[P.P,P.as]})
if(H.f3(a,{func:1,args:[P.P]}))return H.n(a,{func:1,ret:null,args:[P.P]})
throw H.c(P.k8(a,"onError","Error handler must accept one Object or one Object and a StackTrace as arguments, and return a a valid result"))},
nD:function(){var u,t
for(;u=$.c5,u!=null;){$.d3=null
t=u.b
$.c5=t
if(t==null)$.d2=null
u.a.$0()}},
nH:function(){$.kt=!0
try{P.nD()}finally{$.d3=null
$.kt=!1
if($.c5!=null)$.kG().$1(P.lK())}},
lF:function(a){var u=new P.ec(H.n(a,{func:1,ret:-1}))
if($.c5==null){$.c5=$.d2=u
if(!$.kt)$.kG().$1(P.lK())}else $.d2=$.d2.b=u},
nG:function(a){var u,t,s
H.n(a,{func:1,ret:-1})
u=$.c5
if(u==null){P.lF(a)
$.d3=$.d2
return}t=new P.ec(a)
s=$.d3
if(s==null){t.b=u
$.c5=$.d3=t}else{t.b=s.b
$.d3=s.b=t
if(t.b==null)$.d2=t}},
o8:function(a){var u,t=null,s={func:1,ret:-1}
H.n(a,s)
u=$.Z
if(C.k===u){P.jN(t,t,C.k,a)
return}u.toString
P.jN(t,t,u,H.n(u.cc(a),s))},
lb:function(a,b){var u,t={func:1,ret:-1}
H.n(b,t)
u=$.Z
if(u===C.k){u.toString
return P.kk(a,b)}return P.kk(a,H.n(u.cc(b),t))},
n5:function(a,b){var u,t,s={func:1,ret:-1,args:[P.b9]}
H.n(b,s)
u=$.Z
if(u===C.k){u.toString
return P.lc(a,b)}t=u.dE(b,P.b9)
$.Z.toString
return P.lc(a,H.n(t,s))},
jL:function(a,b,c,d,e){var u={}
u.a=d
P.nG(new P.jM(u,e))},
lB:function(a,b,c,d,e){var u,t
H.n(d,{func:1,ret:e})
t=$.Z
if(t===c)return d.$0()
$.Z=c
u=t
try{t=d.$0()
return t}finally{$.Z=u}},
lC:function(a,b,c,d,e,f,g){var u,t
H.n(d,{func:1,ret:f,args:[g]})
H.y(e,g)
t=$.Z
if(t===c)return d.$1(e)
$.Z=c
u=t
try{t=d.$1(e)
return t}finally{$.Z=u}},
nF:function(a,b,c,d,e,f,g,h,i){var u,t
H.n(d,{func:1,ret:g,args:[h,i]})
H.y(e,h)
H.y(f,i)
t=$.Z
if(t===c)return d.$2(e,f)
$.Z=c
u=t
try{t=d.$2(e,f)
return t}finally{$.Z=u}},
jN:function(a,b,c,d){var u
H.n(d,{func:1,ret:-1})
u=C.k!==c
if(u)d=!(!u||!1)?c.cc(d):c.iM(d,-1)
P.lF(d)},
iX:function iX(a){this.a=a},
iW:function iW(a,b,c){this.a=a
this.b=b
this.c=c},
iY:function iY(a){this.a=a},
iZ:function iZ(a){this.a=a},
eO:function eO(){this.c=0},
jx:function jx(a,b){this.a=a
this.b=b},
jw:function jw(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
be:function be(a,b,c,d,e){var _=this
_.a=null
_.b=a
_.c=b
_.d=c
_.e=d
_.$ti=e},
aE:function aE(a,b){var _=this
_.a=0
_.b=a
_.c=null
_.$ti=b},
j6:function j6(a,b){this.a=a
this.b=b},
ja:function ja(a,b){this.a=a
this.b=b},
j7:function j7(a){this.a=a},
j8:function j8(a){this.a=a},
j9:function j9(a,b,c){this.a=a
this.b=b
this.c=c},
jd:function jd(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
je:function je(a){this.a=a},
jc:function jc(a,b,c){this.a=a
this.b=b
this.c=c},
jb:function jb(a,b,c){this.a=a
this.b=b
this.c=c},
ec:function ec(a){this.a=a
this.b=null},
i0:function i0(){},
i2:function i2(a,b){this.a=a
this.b=b},
i3:function i3(a,b){this.a=a
this.b=b},
cC:function cC(){},
i1:function i1(){},
b9:function b9(){},
an:function an(a,b){this.a=a
this.b=b},
jG:function jG(){},
jM:function jM(a,b){this.a=a
this.b=b},
jl:function jl(){},
jn:function jn(a,b,c){this.a=a
this.b=b
this.c=c},
jm:function jm(a,b){this.a=a
this.b=b},
jo:function jo(a,b,c){this.a=a
this.b=b
this.c=c},
mD:function(a,b){return new H.aK([a,b])},
kV:function(a,b){return new H.aK([a,b])},
mF:function(a){return H.nT(a,new H.aK([null,null]))},
mG:function(a){return new P.ji([a])},
kp:function(){var u=Object.create(null)
u["<non-identifier-key>"]=u
delete u["<non-identifier-key>"]
return u},
ls:function(a,b,c){var u=new P.jj(a,b,[c])
u.c=a.e
return u},
mz:function(a,b,c){var u,t
if(P.ku(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}u=H.d([],[P.i])
C.a.h($.at,a)
try{P.nC(a,u)}finally{if(0>=$.at.length)return H.e($.at,-1)
$.at.pop()}t=P.l7(b,H.lQ(u,"$ih"),", ")+c
return t.charCodeAt(0)==0?t:t},
kd:function(a,b,c){var u,t
if(P.ku(a))return b+"..."+c
u=new P.al(b)
C.a.h($.at,a)
try{t=u
t.a=P.l7(t.a,a,", ")}finally{if(0>=$.at.length)return H.e($.at,-1)
$.at.pop()}u.a+=c
t=u.a
return t.charCodeAt(0)==0?t:t},
ku:function(a){var u,t
for(u=$.at.length,t=0;t<u;++t)if(a===$.at[t])return!0
return!1},
nC:function(a,b){var u,t,s,r,q,p,o,n,m,l
H.j(b,"$ib",[P.i],"$ab")
u=a.gV(a)
t=0
s=0
while(!0){if(!(t<80||s<3))break
if(!u.B())return
r=H.m(u.gJ(u))
C.a.h(b,r)
t+=r.length+2;++s}if(!u.B()){if(s<=5)return
if(0>=b.length)return H.e(b,-1)
q=b.pop()
if(0>=b.length)return H.e(b,-1)
p=b.pop()}else{o=u.gJ(u);++s
if(!u.B()){if(s<=4){C.a.h(b,H.m(o))
return}q=H.m(o)
if(0>=b.length)return H.e(b,-1)
p=b.pop()
t+=q.length+2}else{n=u.gJ(u);++s
for(;u.B();o=n,n=m){m=u.gJ(u);++s
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
mE:function(a,b,c){var u=P.mD(b,c)
a.K(0,new P.h3(u,b,c))
return u},
ki:function(a){var u,t={}
if(P.ku(a))return"{...}"
u=new P.al("")
try{C.a.h($.at,a)
u.a+="{"
t.a=!0
J.kJ(a,new P.h8(t,u))
u.a+="}"}finally{if(0>=$.at.length)return H.e($.at,-1)
$.at.pop()}t=u.a
return t.charCodeAt(0)==0?t:t},
ji:function ji(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
cS:function cS(a){this.a=a
this.c=this.b=null},
jj:function jj(a,b,c){var _=this
_.a=a
_.b=b
_.d=_.c=null
_.$ti=c},
h3:function h3(a,b,c){this.a=a
this.b=b
this.c=c},
h4:function h4(){},
w:function w(){},
h7:function h7(){},
h8:function h8(a,b){this.a=a
this.b=b},
ag:function ag(){},
jy:function jy(){},
h9:function h9(){},
e5:function e5(a,b){this.a=a
this.$ti=b},
jp:function jp(){},
er:function er(){},
eT:function eT(){},
n9:function(a,b,c,d){H.j(b,"$ib",[P.o],"$ab")
if(b instanceof Uint8Array)return P.na(!1,b,c,d)
return},
na:function(a,b,c,d){var u,t,s=$.m9()
if(s==null)return
u=0===c
if(u&&!0)return P.kn(s,b)
t=b.length
d=P.bm(c,d,t)
if(u&&d===t)return P.kn(s,b)
return P.kn(s,b.subarray(c,d))},
kn:function(a,b){if(P.nc(b))return
return P.nd(a,b)},
nd:function(a,b){var u,t
try{u=a.decode(b)
return u}catch(t){H.aG(t)}return},
nc:function(a){var u,t=a.length-2
for(u=0;u<t;++u)if(a[u]===237)if((a[u+1]&224)===160)return!0
return!1},
nb:function(){var u,t
try{u=new TextDecoder("utf-8",{fatal:true})
return u}catch(t){H.aG(t)}return},
lE:function(a,b,c){var u,t,s
H.j(a,"$ib",[P.o],"$ab")
for(u=J.ca(a),t=b;t<c;++t){s=u.j(a,t)
if(typeof s!=="number")return s.bG()
if((s&127)!==s)return t-b}return c-b},
kL:function(a,b,c,d,e,f){if(C.e.ba(f,4)!==0)throw H.c(P.a2("Invalid base64 padding, padded length must be multiple of four, is "+f,a,c))
if(d+e!==f)throw H.c(P.a2("Invalid base64 padding, '=' not at the end",a,b))
if(e>2)throw H.c(P.a2("Invalid base64 padding, more than two '=' characters",a,b))},
fj:function fj(){},
fk:function fk(){},
bS:function bS(){},
bV:function bV(){},
fG:function fG(){},
iC:function iC(){},
iE:function iE(){},
jF:function jF(a){this.b=0
this.c=a},
iD:function iD(a){this.a=a},
jE:function jE(a,b){var _=this
_.a=a
_.b=b
_.c=!0
_.f=_.e=_.d=0},
f6:function(a,b,c){var u
H.n(b,{func:1,ret:P.o,args:[P.i]})
u=H.mU(a,c)
if(u!=null)return u
if(b!=null)return b.$1(a)
throw H.c(P.a2(a,null,null))},
mx:function(a){if(a instanceof H.ci)return a.i(0)
return"Instance of '"+H.c0(a)+"'"},
mH:function(a,b,c){var u,t
H.y(b,c)
u=J.mB(a,c)
if(a!==0&&!0)for(t=0;t<u.length;++t)C.a.l(u,t,b)
return H.j(u,"$ib",[c],"$ab")},
kW:function(a,b,c){var u,t=[c],s=H.d([],t)
for(u=J.bN(a);u.B();)C.a.h(s,H.y(u.gJ(u),c))
if(b)return s
return H.j(J.ke(s),"$ib",t,"$ab")},
cD:function(a,b,c){var u,t=P.o
H.j(a,"$ih",[t],"$ah")
if(typeof a==="object"&&a!==null&&a.constructor===Array){H.j(a,"$iaJ",[t],"$aaJ")
u=a.length
c=P.bm(b,c,u)
return H.l4(b>0||c<u?C.a.eD(a,b,c):a)}if(!!J.W(a).$icv)return H.mW(a,b,P.bm(b,c,a.length))
return P.n1(a,b,c)},
n1:function(a,b,c){var u,t,s,r,q=null
H.j(a,"$ih",[P.o],"$ah")
if(b<0)throw H.c(P.af(b,0,J.aH(a),q,q))
u=c==null
if(!u&&c<b)throw H.c(P.af(c,b,J.aH(a),q,q))
t=J.bN(a)
for(s=0;s<b;++s)if(!t.B())throw H.c(P.af(b,0,s,q,q))
r=[]
if(u)for(;t.B();)r.push(t.gJ(t))
else for(s=b;s<c;++s){if(!t.B())throw H.c(P.af(c,b,s,q,q))
r.push(t.gJ(t))}return H.l4(r)},
mY:function(a){return new H.fW(a,H.mC(a,!1,!0,!1))},
l7:function(a,b,c){var u=J.bN(b)
if(!u.B())return a
if(c.length===0){do a+=H.m(u.gJ(u))
while(u.B())}else{a+=H.m(u.gJ(u))
for(;u.B();)a=a+c+H.m(u.gJ(u))}return a},
lf:function(){var u=H.mM()
if(u!=null)return P.n8(u)
throw H.c(P.E("'Uri.base' is not supported"))},
jD:function(a,b,c,d){var u,t,s,r,q,p,o="0123456789ABCDEF"
H.j(a,"$ib",[P.o],"$ab")
if(c===C.l){u=$.me().b
if(typeof b!=="string")H.r(H.ay(b))
u=u.test(b)}else u=!1
if(u)return b
H.y(b,H.az(c,"bS",0))
t=c.giX().cj(b)
for(u=t.length,s=0,r="";s<u;++s){q=t[s]
if(q<128){p=q>>>4
if(p>=8)return H.e(a,p)
p=(a[p]&1<<(q&15))!==0}else p=!1
if(p)r+=H.dH(q)
else r=d&&q===32?r+"+":r+"%"+o[q>>>4&15]+o[q&15]}return r.charCodeAt(0)==0?r:r},
mu:function(a){var u=Math.abs(a),t=a<0?"-":""
if(u>=1000)return""+a
if(u>=100)return t+"0"+u
if(u>=10)return t+"00"+u
return t+"000"+u},
mv:function(a){if(a>=100)return""+a
if(a>=10)return"0"+a
return"00"+a},
de:function(a){if(a>=10)return""+a
return"0"+a},
kR:function(a,b){return new P.b1(1e6*b+1000*a)},
dj:function(a){if(typeof a==="number"||typeof a==="boolean"||null==a)return J.aX(a)
if(typeof a==="string")return JSON.stringify(a)
return P.mx(a)},
fb:function(a){return new P.aY(!1,null,null,a)},
k8:function(a,b,c){return new P.aY(!0,a,b,c)},
dJ:function(a,b){return new P.c1(null,null,!0,a,b,"Value not in range")},
af:function(a,b,c,d,e){return new P.c1(b,c,!0,a,d,"Invalid value")},
bm:function(a,b,c){if(0>a||a>c)throw H.c(P.af(a,0,c,"start",null))
if(b!=null){if(a>b||b>c)throw H.c(P.af(b,a,c,"end",null))
return b}return c},
kj:function(a,b){if(typeof a!=="number")return a.W()
if(a<0)throw H.c(P.af(a,0,null,b,null))},
Y:function(a,b,c,d,e){var u=H.ad(e==null?J.aH(b):e)
return new P.fU(u,!0,a,c,"Index out of range")},
E:function(a){return new P.iv(a)},
it:function(a){return new P.is(a)},
bU:function(a){return new P.fr(a)},
t:function(a){return new P.ek(a)},
a2:function(a,b,c){return new P.fQ(a,b,c)},
mI:function(a,b,c){var u,t
H.n(b,{func:1,ret:c,args:[P.o]})
u=H.d([],[c])
C.a.sk(u,a)
for(t=0;t<a;++t)C.a.l(u,t,b.$1(t))
return u},
kE:function(a){H.o6(a)},
n8:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=null,e=a.length
if(e>=5){u=((C.b.G(a,4)^58)*3|C.b.G(a,0)^100|C.b.G(a,1)^97|C.b.G(a,2)^116|C.b.G(a,3)^97)>>>0
if(u===0)return P.le(e<e?C.b.A(a,0,e):a,5,f).gez()
else if(u===32)return P.le(C.b.A(a,5,e),0,f).gez()}t=new Array(8)
t.fixed$length=Array
s=H.d(t,[P.o])
C.a.l(s,0,0)
C.a.l(s,1,-1)
C.a.l(s,2,-1)
C.a.l(s,7,-1)
C.a.l(s,3,0)
C.a.l(s,4,0)
C.a.l(s,5,e)
C.a.l(s,6,e)
if(P.lD(a,0,e,0,s)>=14)C.a.l(s,7,e)
r=s[1]
if(typeof r!=="number")return r.jJ()
if(r>=0)if(P.lD(a,0,r,20,s)===20)s[7]=r
t=s[2]
if(typeof t!=="number")return t.n()
q=t+1
p=s[3]
o=s[4]
n=s[5]
m=s[6]
if(typeof m!=="number")return m.W()
if(typeof n!=="number")return H.B(n)
if(m<n)n=m
if(typeof o!=="number")return o.W()
if(o<q)o=n
else if(o<=r)o=r+1
if(typeof p!=="number")return p.W()
if(p<q)p=o
t=s[7]
if(typeof t!=="number")return t.W()
l=t<0
if(l)if(q>r+3){k=f
l=!1}else{t=p>0
if(t&&p+1===o){k=f
l=!1}else{if(!(n<e&&n===o+2&&C.b.ae(a,"..",o)))j=n>o+2&&C.b.ae(a,"/..",n-3)
else j=!0
if(j){k=f
l=!1}else{if(r===4)if(C.b.ae(a,"file",0)){if(q<=0){if(!C.b.ae(a,"/",o)){i="file:///"
u=3}else{i="file://"
u=2}a=i+C.b.A(a,o,e)
r-=0
t=u-0
n+=t
m+=t
e=a.length
q=7
p=7
o=7}else if(o===n){h=n+1;++m
a=C.b.aR(a,o,n,"/");++e
n=h}k="file"}else if(C.b.ae(a,"http",0)){if(t&&p+3===o&&C.b.ae(a,"80",p+1)){g=o-3
n-=3
m-=3
a=C.b.aR(a,p,o,"")
e-=3
o=g}k="http"}else k=f
else if(r===5&&C.b.ae(a,"https",0)){if(t&&p+4===o&&C.b.ae(a,"443",p+1)){g=o-4
n-=4
m-=4
a=C.b.aR(a,p,o,"")
e-=3
o=g}k="https"}else k=f
l=!0}}}else k=f
if(l){if(e<a.length){a=C.b.A(a,0,e)
r-=0
q-=0
p-=0
o-=0
n-=0
m-=0}return new P.jq(a,r,q,p,o,n,m,k)}return P.nm(a,0,e,r,q,p,o,n,m,k)},
lh:function(a){var u=P.i
return C.a.j0(H.d(a.split("&"),[u]),P.kV(u,u),new P.iA(C.l),[P.D,P.i,P.i])},
n7:function(a,b,c){var u,t,s,r,q,p,o,n=null,m="IPv4 address should contain exactly 4 parts",l="each part must be in the range 0..255",k=new P.ix(a),j=new Uint8Array(4)
for(u=j.length,t=b,s=t,r=0;t<c;++t){q=C.b.Z(a,t)
if(q!==46){if((q^48)>9)k.$2("invalid character",t)}else{if(r===3)k.$2(m,t)
p=P.f6(C.b.A(a,s,t),n,n)
if(typeof p!=="number")return p.cR()
if(p>255)k.$2(l,s)
o=r+1
if(r>=u)return H.e(j,r)
j[r]=p
s=t+1
r=o}}if(r!==3)k.$2(m,c)
p=P.f6(C.b.A(a,s,c),n,n)
if(typeof p!=="number")return p.cR()
if(p>255)k.$2(l,s)
if(r>=u)return H.e(j,r)
j[r]=p
return j},
lg:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
if(c==null)c=a.length
u=new P.iy(a)
t=new P.iz(u,a)
if(a.length<2)u.$1("address is too short")
s=H.d([],[P.o])
for(r=b,q=r,p=!1,o=!1;r<c;++r){n=C.b.Z(a,r)
if(n===58){if(r===b){++r
if(C.b.Z(a,r)!==58)u.$2("invalid start colon.",r)
q=r}if(r===q){if(p)u.$2("only one wildcard `::` is allowed",r)
C.a.h(s,-1)
p=!0}else C.a.h(s,t.$2(q,r))
q=r+1}else if(n===46)o=!0}if(s.length===0)u.$1("too few parts")
m=q===c
l=C.a.gaD(s)
if(m&&l!==-1)u.$2("expected a part after last `:`",c)
if(!m)if(!o)C.a.h(s,t.$2(q,c))
else{k=P.n7(a,q,c)
C.a.h(s,(k[0]<<8|k[1])>>>0)
C.a.h(s,(k[2]<<8|k[3])>>>0)}if(p){if(s.length>7)u.$1("an address with a wildcard must have less than 7 parts")}else if(s.length!==8)u.$1("an address without a wildcard must contain exactly 8 parts")
j=new Uint8Array(16)
for(l=s.length,i=j.length,h=9-l,r=0,g=0;r<l;++r){f=s[r]
if(f===-1)for(e=0;e<h;++e){if(g<0||g>=i)return H.e(j,g)
j[g]=0
d=g+1
if(d>=i)return H.e(j,d)
j[d]=0
g+=2}else{d=C.e.aO(f,8)
if(g<0||g>=i)return H.e(j,g)
j[g]=d
d=g+1
if(d>=i)return H.e(j,d)
j[d]=f&255
g+=2}}return j},
nm:function(a,b,c,d,e,f,g,h,i,j){var u,t,s,r,q,p,o,n=null
if(j==null)if(d>b)j=P.nt(a,b,d)
else{if(d===b)P.d0(a,b,"Invalid empty scheme")
j=""}if(e>b){u=d+3
t=u<e?P.nu(a,u,e-1):""
s=P.nq(a,e,f,!1)
if(typeof f!=="number")return f.n()
r=f+1
if(typeof g!=="number")return H.B(g)
q=r<g?P.ns(P.f6(C.b.A(a,r,g),new P.jz(a,f),n),j):n}else{q=n
s=q
t=""}p=P.nr(a,g,h,n,j,s!=null)
if(typeof h!=="number")return h.W()
o=h<i?P.kq(a,h+1,i,n):n
return new P.c4(j,t,s,q,p,o,i<c?P.np(a,i+1,c):n)},
lt:function(a){if(a==="http")return 80
if(a==="https")return 443
return 0},
d0:function(a,b,c){throw H.c(P.a2(c,a,b))},
ns:function(a,b){if(a!=null&&a===P.lt(b))return
return a},
nq:function(a,b,c,d){var u,t
if(b===c)return""
if(C.b.Z(a,b)===91){if(typeof c!=="number")return c.q()
u=c-1
if(C.b.Z(a,u)!==93)P.d0(a,b,"Missing end `]` to match `[` in host")
P.lg(a,b+1,u)
return C.b.A(a,b,c).toLowerCase()}if(typeof c!=="number")return H.B(c)
t=b
for(;t<c;++t)if(C.b.Z(a,t)===58){P.lg(a,b,c)
return"["+a+"]"}return P.nw(a,b,c)},
nw:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k
if(typeof c!=="number")return H.B(c)
u=b
t=u
s=null
r=!0
for(;u<c;){q=C.b.Z(a,u)
if(q===37){p=P.lz(a,u,!0)
o=p==null
if(o&&r){u+=3
continue}if(s==null)s=new P.al("")
n=C.b.A(a,t,u)
m=s.a+=!r?n.toLowerCase():n
if(o){p=C.b.A(a,u,u+3)
l=3}else if(p==="%"){p="%25"
l=1}else l=3
s.a=m+p
u+=l
t=u
r=!0}else{if(q<127){o=q>>>4
if(o>=8)return H.e(C.C,o)
o=(C.C[o]&1<<(q&15))!==0}else o=!1
if(o){if(r&&65<=q&&90>=q){if(s==null)s=new P.al("")
if(t<u){s.a+=C.b.A(a,t,u)
t=u}r=!1}++u}else{if(q<=93){o=q>>>4
if(o>=8)return H.e(C.o,o)
o=(C.o[o]&1<<(q&15))!==0}else o=!1
if(o)P.d0(a,u,"Invalid character")
else{if((q&64512)===55296&&u+1<c){k=C.b.Z(a,u+1)
if((k&64512)===56320){q=65536|(q&1023)<<10|k&1023
l=2}else l=1}else l=1
if(s==null)s=new P.al("")
n=C.b.A(a,t,u)
s.a+=!r?n.toLowerCase():n
s.a+=P.lu(q)
u+=l
t=u}}}}if(s==null)return C.b.A(a,b,c)
if(t<c){n=C.b.A(a,t,c)
s.a+=!r?n.toLowerCase():n}o=s.a
return o.charCodeAt(0)==0?o:o},
nt:function(a,b,c){var u,t,s,r
if(b===c)return""
if(!P.lw(C.b.G(a,b)))P.d0(a,b,"Scheme not starting with alphabetic character")
for(u=b,t=!1;u<c;++u){s=C.b.G(a,u)
if(s<128){r=s>>>4
if(r>=8)return H.e(C.q,r)
r=(C.q[r]&1<<(s&15))!==0}else r=!1
if(!r)P.d0(a,u,"Illegal scheme character")
if(65<=s&&s<=90)t=!0}a=C.b.A(a,b,c)
return P.nn(t?a.toLowerCase():a)},
nn:function(a){if(a==="http")return"http"
if(a==="file")return"file"
if(a==="https")return"https"
if(a==="package")return"package"
return a},
nu:function(a,b,c){return P.d1(a,b,c,C.V,!1)},
nr:function(a,b,c,d,e,f){var u,t=e==="file",s=t||f,r=a==null
if(r&&!0)return t?"/":""
u=!r?P.d1(a,b,c,C.D,!0):C.n.jM(d,new P.jA(),P.i).C(0,"/")
if(u.length===0){if(t)return"/"}else if(s&&!C.b.ad(u,"/"))u="/"+u
return P.nv(u,e,f)},
nv:function(a,b,c){var u=b.length===0
if(u&&!c&&!C.b.ad(a,"/"))return P.nx(a,!u||c)
return P.ny(a)},
kq:function(a,b,c,d){var u,t={}
H.j(d,"$iD",[P.i,null],"$aD")
if(a!=null){if(d!=null)throw H.c(P.fb("Both query and queryParameters specified"))
return P.d1(a,b,c,C.p,!0)}if(d==null)return
u=new P.al("")
t.a=""
d.K(0,new P.jB(new P.jC(t,u)))
t=u.a
return t.charCodeAt(0)==0?t:t},
np:function(a,b,c){return P.d1(a,b,c,C.p,!0)},
lz:function(a,b,c){var u,t,s,r,q,p=b+2
if(p>=a.length)return"%"
u=C.b.Z(a,b+1)
t=C.b.Z(a,p)
s=H.jS(u)
r=H.jS(t)
if(s<0||r<0)return"%"
q=s*16+r
if(q<127){p=C.e.aO(q,4)
if(p>=8)return H.e(C.r,p)
p=(C.r[p]&1<<(q&15))!==0}else p=!1
if(p)return H.dH(c&&65<=q&&90>=q?(q|32)>>>0:q)
if(u>=97||t>=97)return C.b.A(a,b,b+3).toUpperCase()
return},
lu:function(a){var u,t,s,r,q,p,o="0123456789ABCDEF"
if(a<128){u=new Array(3)
u.fixed$length=Array
t=H.d(u,[P.o])
C.a.l(t,0,37)
C.a.l(t,1,C.b.G(o,a>>>4))
C.a.l(t,2,C.b.G(o,a&15))}else{if(a>2047)if(a>65535){s=240
r=4}else{s=224
r=3}else{s=192
r=2}u=new Array(3*r)
u.fixed$length=Array
t=H.d(u,[P.o])
for(q=0;--r,r>=0;s=128){p=C.e.hY(a,6*r)&63|s
C.a.l(t,q,37)
C.a.l(t,q+1,C.b.G(o,p>>>4))
C.a.l(t,q+2,C.b.G(o,p&15))
q+=3}}return P.cD(t,0,null)},
d1:function(a,b,c,d,e){var u=P.ly(a,b,c,H.j(d,"$ib",[P.o],"$ab"),e)
return u==null?C.b.A(a,b,c):u},
ly:function(a,b,c,d,e){var u,t,s,r,q,p,o,n,m
H.j(d,"$ib",[P.o],"$ab")
u=!e
t=b
s=t
r=null
while(!0){if(typeof t!=="number")return t.W()
if(typeof c!=="number")return H.B(c)
if(!(t<c))break
c$0:{q=C.b.Z(a,t)
if(q<127){p=q>>>4
if(p>=8)return H.e(d,p)
p=(d[p]&1<<(q&15))!==0}else p=!1
if(p)++t
else{if(q===37){o=P.lz(a,t,!1)
if(o==null){t+=3
break c$0}if("%"===o){o="%25"
n=1}else n=3}else{if(u)if(q<=93){p=q>>>4
if(p>=8)return H.e(C.o,p)
p=(C.o[p]&1<<(q&15))!==0}else p=!1
else p=!1
if(p){P.d0(a,t,"Invalid character")
o=null
n=null}else{if((q&64512)===55296){p=t+1
if(p<c){m=C.b.Z(a,p)
if((m&64512)===56320){q=65536|(q&1023)<<10|m&1023
n=2}else n=1}else n=1}else n=1
o=P.lu(q)}}if(r==null)r=new P.al("")
r.a+=C.b.A(a,s,t)
r.a+=H.m(o)
if(typeof n!=="number")return H.B(n)
t+=n
s=t}}}if(r==null)return
if(typeof s!=="number")return s.W()
if(s<c)r.a+=C.b.A(a,s,c)
u=r.a
return u.charCodeAt(0)==0?u:u},
lx:function(a){if(C.b.ad(a,"."))return!0
return C.b.ef(a,"/.")!==-1},
ny:function(a){var u,t,s,r,q,p,o
if(!P.lx(a))return a
u=H.d([],[P.i])
for(t=a.split("/"),s=t.length,r=!1,q=0;q<s;++q){p=t[q]
if(J.T(p,"..")){o=u.length
if(o!==0){if(0>=o)return H.e(u,-1)
u.pop()
if(u.length===0)C.a.h(u,"")}r=!0}else if("."===p)r=!0
else{C.a.h(u,p)
r=!1}}if(r)C.a.h(u,"")
return C.a.C(u,"/")},
nx:function(a,b){var u,t,s,r,q,p
if(!P.lx(a))return!b?P.lv(a):a
u=H.d([],[P.i])
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
C.a.l(u,0,P.lv(u[0]))}return C.a.C(u,"/")},
lv:function(a){var u,t,s,r=a.length
if(r>=2&&P.lw(J.mi(a,0)))for(u=1;u<r;++u){t=C.b.G(a,u)
if(t===58)return C.b.A(a,0,u)+"%3A"+C.b.aH(a,u+1)
if(t<=127){s=t>>>4
if(s>=8)return H.e(C.q,s)
s=(C.q[s]&1<<(t&15))===0}else s=!0
if(s)break}return a},
no:function(a,b){var u,t,s
for(u=0,t=0;t<2;++t){s=C.b.G(a,b+t)
if(48<=s&&s<=57)u=u*16+s-48
else{s|=32
if(97<=s&&s<=102)u=u*16+s-87
else throw H.c(P.fb("Invalid URL encoding"))}}return u},
kr:function(a,b,c,d,e){var u,t,s,r,q=b
while(!0){if(!(q<c)){u=!0
break}t=C.b.G(a,q)
if(t<=127)if(t!==37)s=t===43
else s=!0
else s=!0
if(s){u=!1
break}++q}if(u){if(C.l!==d)s=!1
else s=!0
if(s)return C.b.A(a,b,c)
else r=new H.a4(C.b.A(a,b,c))}else{r=H.d([],[P.o])
for(s=a.length,q=b;q<c;++q){t=C.b.G(a,q)
if(t>127)throw H.c(P.fb("Illegal percent encoding in URI"))
if(t===37){if(q+3>s)throw H.c(P.fb("Truncated URI"))
C.a.h(r,P.no(a,q+1))
q+=2}else if(t===43)C.a.h(r,32)
else C.a.h(r,t)}}H.j(r,"$ib",[P.o],"$ab")
return new P.iD(!1).cj(r)},
lw:function(a){var u=a|32
return 97<=u&&u<=122},
le:function(a,b,c){var u,t,s,r,q,p,o,n,m="Invalid MIME type",l=H.d([b-1],[P.o])
for(u=a.length,t=b,s=-1,r=null;t<u;++t){r=C.b.G(a,t)
if(r===44||r===59)break
if(r===47){if(s<0){s=t
continue}throw H.c(P.a2(m,a,t))}}if(s<0&&t>b)throw H.c(P.a2(m,a,t))
for(;r!==44;){C.a.h(l,t);++t
for(q=-1;t<u;++t){r=C.b.G(a,t)
if(r===61){if(q<0)q=t}else if(r===59||r===44)break}if(q>=0)C.a.h(l,q)
else{p=C.a.gaD(l)
if(r!==44||t!==p+7||!C.b.ae(a,"base64",p+1))throw H.c(P.a2("Expecting '='",a,t))
break}}C.a.h(l,t)
o=t+1
if((l.length&1)===1)a=C.H.jb(0,a,o,u)
else{n=P.ly(a,o,u,C.p,!0)
if(n!=null)a=C.b.aR(a,o,u,n)}return new P.iw(a,l,c)},
nA:function(){var u="0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",t=".",s=":",r="/",q="?",p="#",o=P.mI(22,new P.jI(),P.Q),n=new P.jH(o),m=new P.jJ(),l=new P.jK(),k=H.f(n.$2(0,225),"$iQ")
m.$3(k,u,1)
m.$3(k,t,14)
m.$3(k,s,34)
m.$3(k,r,3)
m.$3(k,q,172)
m.$3(k,p,205)
k=H.f(n.$2(14,225),"$iQ")
m.$3(k,u,1)
m.$3(k,t,15)
m.$3(k,s,34)
m.$3(k,r,234)
m.$3(k,q,172)
m.$3(k,p,205)
k=H.f(n.$2(15,225),"$iQ")
m.$3(k,u,1)
m.$3(k,"%",225)
m.$3(k,s,34)
m.$3(k,r,9)
m.$3(k,q,172)
m.$3(k,p,205)
k=H.f(n.$2(1,225),"$iQ")
m.$3(k,u,1)
m.$3(k,s,34)
m.$3(k,r,10)
m.$3(k,q,172)
m.$3(k,p,205)
k=H.f(n.$2(2,235),"$iQ")
m.$3(k,u,139)
m.$3(k,r,131)
m.$3(k,t,146)
m.$3(k,q,172)
m.$3(k,p,205)
k=H.f(n.$2(3,235),"$iQ")
m.$3(k,u,11)
m.$3(k,r,68)
m.$3(k,t,18)
m.$3(k,q,172)
m.$3(k,p,205)
k=H.f(n.$2(4,229),"$iQ")
m.$3(k,u,5)
l.$3(k,"AZ",229)
m.$3(k,s,102)
m.$3(k,"@",68)
m.$3(k,"[",232)
m.$3(k,r,138)
m.$3(k,q,172)
m.$3(k,p,205)
k=H.f(n.$2(5,229),"$iQ")
m.$3(k,u,5)
l.$3(k,"AZ",229)
m.$3(k,s,102)
m.$3(k,"@",68)
m.$3(k,r,138)
m.$3(k,q,172)
m.$3(k,p,205)
k=H.f(n.$2(6,231),"$iQ")
l.$3(k,"19",7)
m.$3(k,"@",68)
m.$3(k,r,138)
m.$3(k,q,172)
m.$3(k,p,205)
k=H.f(n.$2(7,231),"$iQ")
l.$3(k,"09",7)
m.$3(k,"@",68)
m.$3(k,r,138)
m.$3(k,q,172)
m.$3(k,p,205)
m.$3(H.f(n.$2(8,8),"$iQ"),"]",5)
k=H.f(n.$2(9,235),"$iQ")
m.$3(k,u,11)
m.$3(k,t,16)
m.$3(k,r,234)
m.$3(k,q,172)
m.$3(k,p,205)
k=H.f(n.$2(16,235),"$iQ")
m.$3(k,u,11)
m.$3(k,t,17)
m.$3(k,r,234)
m.$3(k,q,172)
m.$3(k,p,205)
k=H.f(n.$2(17,235),"$iQ")
m.$3(k,u,11)
m.$3(k,r,9)
m.$3(k,q,172)
m.$3(k,p,205)
k=H.f(n.$2(10,235),"$iQ")
m.$3(k,u,11)
m.$3(k,t,18)
m.$3(k,r,234)
m.$3(k,q,172)
m.$3(k,p,205)
k=H.f(n.$2(18,235),"$iQ")
m.$3(k,u,11)
m.$3(k,t,19)
m.$3(k,r,234)
m.$3(k,q,172)
m.$3(k,p,205)
k=H.f(n.$2(19,235),"$iQ")
m.$3(k,u,11)
m.$3(k,r,234)
m.$3(k,q,172)
m.$3(k,p,205)
k=H.f(n.$2(11,235),"$iQ")
m.$3(k,u,11)
m.$3(k,r,10)
m.$3(k,q,172)
m.$3(k,p,205)
k=H.f(n.$2(12,236),"$iQ")
m.$3(k,u,12)
m.$3(k,q,12)
m.$3(k,p,205)
k=H.f(n.$2(13,237),"$iQ")
m.$3(k,u,13)
m.$3(k,q,13)
l.$3(H.f(n.$2(20,245),"$iQ"),"az",21)
k=H.f(n.$2(21,245),"$iQ")
l.$3(k,"az",21)
l.$3(k,"09",21)
m.$3(k,"+-.",21)
return o},
lD:function(a,b,c,d,e){var u,t,s,r,q
H.j(e,"$ib",[P.o],"$ab")
u=$.mf()
for(t=b;t<c;++t){if(d<0||d>=u.length)return H.e(u,d)
s=u[d]
r=C.b.G(a,t)^96
if(r>95)r=31
if(r>=s.length)return H.e(s,r)
q=s[r]
d=q&31
C.a.l(e,q>>>5,t)}return d},
a8:function a8(){},
au:function au(a,b){this.a=a
this.b=b},
z:function z(){},
b1:function b1(a){this.a=a},
fD:function fD(){},
fE:function fE(){},
bx:function bx(){},
fc:function fc(){},
dE:function dE(){},
aY:function aY(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
c1:function c1(a,b,c,d,e,f){var _=this
_.e=a
_.f=b
_.a=c
_.b=d
_.c=e
_.d=f},
fU:function fU(a,b,c,d,e){var _=this
_.f=a
_.a=b
_.b=c
_.c=d
_.d=e},
iv:function iv(a){this.a=a},
is:function is(a){this.a=a},
dR:function dR(a){this.a=a},
fr:function fr(a){this.a=a},
hy:function hy(){},
dQ:function dQ(){},
fy:function fy(a){this.a=a},
ek:function ek(a){this.a=a},
fQ:function fQ(a,b,c){this.a=a
this.b=b
this.c=c},
o:function o(){},
h:function h(){},
b2:function b2(){},
b:function b(){},
D:function D(){},
K:function K(){},
aa:function aa(){},
P:function P(){},
as:function as(){},
i:function i(){},
al:function al(a){this.a=a},
iA:function iA(a){this.a=a},
ix:function ix(a){this.a=a},
iy:function iy(a){this.a=a},
iz:function iz(a,b){this.a=a
this.b=b},
c4:function c4(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.Q=_.z=_.y=null},
jz:function jz(a,b){this.a=a
this.b=b},
jA:function jA(){},
jC:function jC(a,b){this.a=a
this.b=b},
jB:function jB(a){this.a=a},
iw:function iw(a,b,c){this.a=a
this.b=b
this.c=c},
jI:function jI(){},
jH:function jH(a){this.a=a},
jJ:function jJ(){},
jK:function jK(){},
jq:function jq(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.x=h
_.y=null},
j2:function j2(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.Q=_.z=_.y=null},
bo:function(a){var u,t,s,r,q
if(a==null)return
u=P.kV(P.i,null)
t=Object.getOwnPropertyNames(a)
for(s=t.length,r=0;r<t.length;t.length===s||(0,H.H)(t),++r){q=H.L(t[r])
u.l(0,q,a[q])}return u},
nN:function(a){var u={}
a.K(0,new P.jO(u))
return u},
js:function js(){},
ju:function ju(a,b){this.a=a
this.b=b},
jO:function jO(a){this.a=a},
jt:function jt(a,b){this.a=a
this.b=b},
fM:function fM(a,b){this.a=a
this.b=b},
fN:function fN(){},
fO:function fO(){},
jh:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
nj:function(a){a=536870911&a+((67108863&a)<<3)
a^=a>>>11
return 536870911&a+((16383&a)<<15)},
jk:function jk(){},
aj:function aj(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=e},
b4:function b4(){},
fZ:function fZ(){},
b7:function b7(){},
hw:function hw(){},
hC:function hC(){},
i4:function i4(){},
q:function q(){},
ba:function ba(){},
ig:function ig(){},
ep:function ep(){},
eq:function eq(){},
ez:function ez(){},
eA:function eA(){},
eK:function eK(){},
eL:function eL(){},
eR:function eR(){},
eS:function eS(){},
Q:function Q(){},
fe:function fe(){},
ff:function ff(){},
fg:function fg(a){this.a=a},
fh:function fh(){},
bO:function bO(){},
hx:function hx(){},
ed:function ed(){},
d8:function d8(){},
dm:function dm(){},
dI:function dI(){},
dM:function dM(){},
c2:function c2(){},
dN:function dN(){},
dS:function dS(){},
e3:function e3(){},
hX:function hX(){},
eG:function eG(){},
eH:function eH(){}},W={
kO:function(){var u=document.createElement("canvas")
return u},
mw:function(a){H.f(a,"$ik")
return"wheel"},
my:function(a){var u,t=document.createElement("input"),s=H.f(t,"$icp")
try{s.type=a}catch(u){H.aG(u)}return s},
jg:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
lr:function(a,b,c,d){var u=W.jg(W.jg(W.jg(W.jg(0,a),b),c),d),t=536870911&u+((67108863&u)<<3)
t^=t>>>11
return 536870911&t+((16383&t)<<15)},
ac:function(a,b,c,d,e){var u=W.lH(new W.j5(c),W.p)
if(u!=null&&!0)J.mk(a,b,u,!1)
return new W.j4(a,b,u,!1,[e])},
lH:function(a,b){var u
H.n(a,{func:1,ret:-1,args:[b]})
u=$.Z
if(u===C.k)return a
return u.dE(a,b)},
u:function u(){},
f7:function f7(){},
f9:function f9(){},
fa:function fa(){},
bP:function bP(){},
bR:function bR(){},
bu:function bu(){},
cj:function cj(){},
fu:function fu(){},
U:function U(){},
ck:function ck(){},
fv:function fv(){},
b_:function b_(){},
b0:function b0(){},
fw:function fw(){},
fx:function fx(){},
fz:function fz(){},
df:function df(){},
fA:function fA(){},
dg:function dg(){},
dh:function dh(){},
fB:function fB(){},
fC:function fC(){},
j0:function j0(a,b){this.a=a
this.b=b},
a1:function a1(){},
p:function p(){},
k:function k(){},
aA:function aA(){},
cl:function cl(){},
fL:function fL(){},
fP:function fP(){},
aI:function aI(){},
fS:function fS(){},
bX:function bX(){},
co:function co(){},
cp:function cp(){},
b3:function b3(){},
h5:function h5(){},
hi:function hi(){},
cr:function cr(){},
hj:function hj(){},
hk:function hk(a){this.a=a},
hl:function hl(){},
hm:function hm(a){this.a=a},
aM:function aM(){},
hn:function hn(){},
ae:function ae(){},
j_:function j_(a){this.a=a},
G:function G(){},
cw:function cw(){},
aN:function aN(){},
hA:function hA(){},
hJ:function hJ(){},
hK:function hK(a){this.a=a},
hM:function hM(){},
aO:function aO(){},
hV:function hV(){},
aP:function aP(){},
hW:function hW(){},
aQ:function aQ(){},
hZ:function hZ(){},
i_:function i_(a){this.a=a},
aB:function aB(){},
bn:function bn(){},
aR:function aR(){},
aC:function aC(){},
i6:function i6(){},
i7:function i7(){},
ia:function ia(){},
aT:function aT(){},
aU:function aU(){},
id:function id(){},
ie:function ie(){},
bH:function bH(){},
iB:function iB(){},
iS:function iS(){},
bd:function bd(){},
cQ:function cQ(){},
j1:function j1(){},
ef:function ef(){},
jf:function jf(){},
ew:function ew(){},
jr:function jr(){},
jv:function jv(){},
j3:function j3(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
ko:function ko(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
j4:function j4(a,b,c,d,e){var _=this
_.b=a
_.c=b
_.d=c
_.e=d
_.$ti=e},
j5:function j5(a){this.a=a},
C:function C(){},
dl:function dl(a,b,c){var _=this
_.a=a
_.b=b
_.c=-1
_.d=null
_.$ti=c},
ee:function ee(){},
eg:function eg(){},
eh:function eh(){},
ei:function ei(){},
ej:function ej(){},
el:function el(){},
em:function em(){},
en:function en(){},
eo:function eo(){},
es:function es(){},
et:function et(){},
eu:function eu(){},
ev:function ev(){},
ex:function ex(){},
ey:function ey(){},
eB:function eB(){},
eC:function eC(){},
eD:function eD(){},
cX:function cX(){},
cY:function cY(){},
eE:function eE(){},
eF:function eF(){},
eJ:function eJ(){},
eM:function eM(){},
eN:function eN(){},
cZ:function cZ(){},
d_:function d_(){},
eP:function eP(){},
eQ:function eQ(){},
eU:function eU(){},
eV:function eV(){},
eW:function eW(){},
eX:function eX(){},
eY:function eY(){},
eZ:function eZ(){},
f_:function f_(){},
f0:function f0(){},
f1:function f1(){},
f2:function f2(){}},O={
fp:function(a){var u=new O.X([a])
u.bc(a)
return u},
X:function X(a){var _=this
_.c=_.b=_.a=null
_.$ti=a},
cq:function cq(){this.b=this.a=null},
l9:function(a,b){var u,t,s,r,q=new O.aS()
q.sar(b)
q.sdJ(null)
u=V.dL()
if(!J.T(q.c,u)){t=q.c
q.c=u
s=new D.F("source",t,u,[V.bF])
s.b=!0
q.R(s)}r=a==null?V.dL():a
if(!J.T(q.d,r)){t=q.d
q.d=r
s=new D.F("destination",t,r,[V.bF])
s.b=!0
q.R(s)}if(q.e!==!1){q.e=!1
s=new D.F("flip",!0,!1,[P.a8])
s.b=!0
q.R(s)}q.f=null
return q},
dx:function dx(){var _=this
_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
hc:function hc(a,b){var _=this
_.f=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
dz:function dz(){},
hd:function hd(a,b){var _=this
_.a=a
_.b=b
_.e=_.d=_.c=null},
b5:function b5(a,b){var _=this
_.f=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
hf:function hf(a,b){var _=this
_.f=_.ch=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
hg:function hg(a,b){var _=this
_.f=_.ch=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
bG:function bG(){},
dU:function dU(){var _=this
_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
aS:function aS(){var _=this
_.f=_.e=_.d=_.c=_.b=_.a=null}},E={
kS:function(){var u=new E.ao()
u.a=""
u.b=!0
u.seO(0,O.fp(E.ao))
u.y.aG(u.gjc(),u.gjf())
u.dy=u.dx=u.db=u.cy=u.cx=u.ch=u.Q=u.z=null
u.sbJ(0,null)
return u},
mZ:function(a,b){var u=new E.hF(a)
u.eK(a,b)
return u},
n4:function(a,b,c,d,e){var u,t,s=J.W(a)
if(!!s.$ibR)return E.la(a,!0,!0,!0,!1)
u=W.kO()
t=u.style
t.width="100%"
t.height="100%"
s.gci(a).h(0,u)
return E.la(u,!0,!0,!0,!1)},
la:function(a,b,c,d,e){var u,t,s,r,q,p,o,n,m,l="mousemove",k=new E.dZ(),j=H.f(C.t.eB(a,"webgl2",P.mF(["alpha",!0,"depth",!0,"stencil",!1,"antialias",!0])),"$ic2")
if(j==null)H.r(P.t("Failed to get the rendering context for WebGL."))
k.b=a
k.c=j
k.e=E.mZ(j,a)
H.ad(j.getParameter(3379))
H.ad(j.getParameter(34076))
u=new X.e6(a)
t=new X.fY()
t.c=new X.av(!1,!1,!1)
t.shD(P.mG(P.o))
u.b=t
t=new X.ho(u)
t.f=0
t.r=V.bl()
t.x=V.bl()
t.ch=t.Q=1
u.c=t
t=new X.h6(u)
t.r=0
t.x=V.bl()
t.cy=t.cx=t.ch=t.Q=1
u.d=t
t=new X.ic(u)
t.f=V.bl()
t.r=V.bl()
u.e=t
u.x=u.r=u.f=!1
u.y=null
u.sfk(H.d([],[[P.cC,P.P]]))
t=u.z
s=document
r=W.ae
q={func:1,ret:-1,args:[r]};(t&&C.a).h(t,W.ac(s,"contextmenu",H.n(u.gfV(),q),!1,r))
t=u.z
p=W.p
o={func:1,ret:-1,args:[p]};(t&&C.a).h(t,W.ac(a,"focus",H.n(u.gh4(),o),!1,p))
t=u.z;(t&&C.a).h(t,W.ac(a,"blur",H.n(u.gfP(),o),!1,p))
t=u.z
n=W.b3
m={func:1,ret:-1,args:[n]};(t&&C.a).h(t,W.ac(s,"keyup",H.n(u.gh8(),m),!1,n))
t=u.z;(t&&C.a).h(t,W.ac(s,"keydown",H.n(u.gh6(),m),!1,n))
n=u.z;(n&&C.a).h(n,W.ac(a,"mousedown",H.n(u.ghc(),q),!1,r))
n=u.z;(n&&C.a).h(n,W.ac(a,"mouseup",H.n(u.ghg(),q),!1,r))
n=u.z;(n&&C.a).h(n,W.ac(a,l,H.n(u.ghe(),q),!1,r))
n=u.z
m=W.bd;(n&&C.a).h(n,W.ac(a,H.L(W.mw(a)),H.n(u.ghi(),{func:1,ret:-1,args:[m]}),!1,m))
m=u.z;(m&&C.a).h(m,W.ac(s,l,H.n(u.gfX(),q),!1,r))
m=u.z;(m&&C.a).h(m,W.ac(s,"mouseup",H.n(u.gfZ(),q),!1,r))
r=u.z;(r&&C.a).h(r,W.ac(s,"pointerlockchange",H.n(u.ghk(),o),!1,p))
p=u.z
o=W.aU
s={func:1,ret:-1,args:[o]};(p&&C.a).h(p,W.ac(a,"touchstart",H.n(u.ghA(),s),!1,o))
p=u.z;(p&&C.a).h(p,W.ac(a,"touchend",H.n(u.ghw(),s),!1,o))
p=u.z;(p&&C.a).h(p,W.ac(a,"touchmove",H.n(u.ghy(),s),!1,o))
k.r=u
k.Q=!0
k.ch=!1
k.cx=new P.au(Date.now(),!1)
k.cy=0
k.ds()
return k},
fl:function fl(){},
ao:function ao(){var _=this
_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
hF:function hF(a){var _=this
_.a=a
_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=null},
hG:function hG(a){this.a=a},
hH:function hH(a){this.a=a},
hI:function hI(a){this.a=a},
dZ:function dZ(){var _=this
_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.e=_.d=_.c=_.b=null},
i9:function i9(a){this.a=a}},Z={
lp:function(a,b,c){var u
H.j(c,"$ib",[P.o],"$ab")
u=a.createBuffer()
a.bindBuffer(b,u)
a.bufferData(b,new Int16Array(H.bJ(c)),35044)
a.bindBuffer(b,null)
return new Z.ea(b,u)},
aD:function(a){return new Z.bc(a)},
ea:function ea(a,b){this.a=a
this.b=b},
d9:function d9(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=0},
eb:function eb(a){this.a=a},
ch:function ch(a,b,c){var _=this
_.a=a
_.b=null
_.c=b
_.d=c},
bY:function bY(a,b,c){this.a=a
this.b=b
this.c=c},
bc:function bc(a){this.a=a}},D={
M:function(){var u=new D.by()
u.sa5(null)
u.saM(null)
u.c=null
u.d=0
return u},
fo:function fo(){},
by:function by(){var _=this
_.d=_.c=_.b=_.a=null},
fI:function fI(a){this.a=a},
fJ:function fJ(a){this.a=a},
x:function x(){this.b=null},
bz:function bz(a){this.b=null
this.$ti=a},
bA:function bA(a){this.b=null
this.$ti=a},
F:function F(a,b,c,d){var _=this
_.c=a
_.d=b
_.e=c
_.b=null
_.$ti=d},
bw:function bw(){var _=this
_.d=_.c=_.b=_.a=null},
a6:function a6(){},
dt:function dt(){var _=this
_.c=_.b=_.a=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=null},
dG:function dG(){},
dP:function dP(){},
dW:function dW(){},
dX:function dX(){},
dY:function dY(){}},X={da:function da(a,b){this.a=a
this.b=b},ds:function ds(a,b){this.a=a
this.b=b},fY:function fY(){var _=this
_.d=_.c=_.b=_.a=null},dv:function dv(a,b,c){var _=this
_.x=a
_.c=b
_.d=c
_.b=null},h6:function h6(a){var _=this
_.a=a
_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},av:function av(a,b,c){this.a=a
this.b=b
this.c=c},bj:function bj(a,b,c,d,e){var _=this
_.x=a
_.y=b
_.z=c
_.c=d
_.d=e
_.b=null},ho:function ho(a){var _=this
_.a=a
_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},cs:function cs(a,b,c){var _=this
_.x=a
_.c=b
_.d=c
_.b=null},hB:function hB(){},e0:function e0(a,b,c,d){var _=this
_.y=a
_.z=b
_.c=c
_.d=d
_.b=null},ic:function ic(a){var _=this
_.a=a
_.y=_.x=_.r=_.f=_.d=_.c=_.b=null},e6:function e6(a){var _=this
_.a=a
_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},
kb:function(a){var u,t=new X.fR()
if(a==null)u=new V.a5(0,0,0,1)
else u=a
t.a=u
t.b=!0
t.c=2000
t.d=!0
t.e=0
t.f=!1
u=V.dL()
t.r=u
return t},
l_:function(a){var u,t,s=new X.dF()
s.c=1.0471975511965976
s.d=0.1
s.e=2000
if(null!=a){u=s.b
s.b=a
if(a!=null)a.gp().h(0,s.geZ())
t=new D.F("mover",u,s.b,[U.ai])
t.b=!0
s.a3(t)}t=s.c
if(!(Math.abs(t-1.0471975511965976)<$.O().a)){s.c=1.0471975511965976
t=new D.F("fov",t,1.0471975511965976,[P.z])
t.b=!0
s.a3(t)}t=s.d
if(!(Math.abs(t-0.1)<$.O().a)){s.d=0.1
t=new D.F("near",t,0.1,[P.z])
t.b=!0
s.a3(t)}t=s.e
if(!(Math.abs(t-2000)<$.O().a)){s.e=2000
t=new D.F("far",t,2000,[P.z])
t.b=!0
s.a3(t)}return s},
fi:function fi(){var _=this
_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
bQ:function bQ(){},
fR:function fR(){var _=this
_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
fT:function fT(){this.b=this.a=null},
dF:function dF(){var _=this
_.f=_.e=_.d=_.c=_.b=_.a=null},
cE:function cE(){}},V={
of:function(a,b,c){var u
if(c<=b)return b
u=c-b
a=C.f.ba(a-b,u)
return(a<0?a+u:a)+b},
V:function(a,b,c){if(a==null)return C.b.aE("null",c)
return C.b.aE(C.f.ex(Math.abs(a-0)<$.O().a?0:a,b),c+b+1)},
c9:function(a,b,c){var u,t,s,r,q,p
H.j(a,"$ib",[P.z],"$ab")
u=H.d([],[P.i])
for(t=a.length,s=0,r=0;r<a.length;a.length===t||(0,H.H)(a),++r){q=V.V(a[r],b,c)
s=Math.max(s,q.length)
C.a.h(u,q)}for(p=u.length-1;p>=0;--p){if(p>=u.length)return H.e(u,p)
C.a.l(u,p,C.b.aE(u[p],s))}return u},
kD:function(a){return C.f.jz(Math.pow(2,C.S.cs(Math.log(H.nM(a))/Math.log(2))))},
bD:function(){var u=$.hh
return u==null?$.hh=V.aL(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1):u},
aL:function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){return new V.ah(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p)},
kX:function(a,b,c){var u=c.w(0,Math.sqrt(c.D(c))),t=b.aB(u),s=t.w(0,Math.sqrt(t.D(t))),r=u.aB(s),q=new V.R(a.a,a.b,a.c),p=s.S(0).D(q),o=r.S(0).D(q),n=u.S(0).D(q)
return V.aL(s.a,r.a,u.a,p,s.b,r.b,u.b,o,s.c,r.c,u.c,n,0,0,0,1)},
bl:function(){var u=$.l1
return u==null?$.l1=new V.a7(0,0):u},
l2:function(){var u=$.cx
return u==null?$.cx=new V.a3(0,0,0):u},
dL:function(){var u=$.cz
return u==null?$.cz=V.dK(0,0,1,1):u},
dK:function(a,b,c,d){if(c<0){a+=c
c=-c}if(d<0){b+=d
d=-d}return new V.bF(a,b,c,d)},
cP:function(){var u=$.lm
return u==null?$.lm=new V.R(0,0,0):u},
ln:function(){var u=$.ll
return u==null?$.ll=new V.R(0,1,0):u},
lo:function(){var u=$.iF
return u==null?$.iF=new V.R(0,0,1):u},
a0:function a0(a,b,c){this.a=a
this.b=b
this.c=c},
a5:function a5(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
fH:function fH(a){this.a=a},
dA:function dA(a,b,c,d,e,f,g,h,i){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.x=h
_.y=i},
ah:function ah(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){var _=this
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
a3:function a3(a,b,c){this.a=a
this.b=b
this.c=c},
b8:function b8(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
bF:function bF(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
S:function S(a,b){this.a=a
this.b=b},
R:function R(a,b,c){this.a=a
this.b=b
this.c=c},
ak:function(a){var u=new V.hN()
u.eL(a)
return u},
f8:function f8(){},
bi:function bi(){},
dw:function dw(){},
bk:function bk(){this.a=null},
hN:function hN(){this.a=null},
cB:function cB(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
e_:function e_(a,b,c){this.a=a
this.b=b
this.c=c},
cF:function cF(a){this.b=a
this.c=null},
ib:function ib(){this.c=this.b=this.a=null},
cG:function cG(a){this.b=a
this.a=this.c=null},
o9:function(a){P.n5(C.Q,new V.k3(a))},
n0:function(a){var u=new V.hR()
u.eM(a,!0)
return u},
k3:function k3(a){this.a=a},
hD:function hD(a){this.a=a
this.c=null},
hE:function hE(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
hR:function hR(){this.b=this.a=null},
hT:function hT(a){this.a=a},
hS:function hS(a){this.a=a}},U={
ka:function(){var u=new U.fq()
u.a=!0
u.b=1e12
u.c=-1e12
u.d=0
u.e=100
u.r=u.x=u.f=0
return u},
kQ:function(a){var u=new U.dc()
u.a=a
return u},
fq:function fq(){var _=this
_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
dc:function dc(){this.b=this.a=null},
cn:function cn(){var _=this
_.c=_.b=_.a=_.r=_.f=_.e=null},
ai:function ai(){},
e7:function e7(){var _=this
_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.e=_.d=_.c=_.b=_.a=null},
e8:function e8(){var _=this
_.fx=_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
e9:function e9(){var _=this
_.r=_.f=_.e=_.d=_.c=_.b=_.a=null}},M={db:function db(){var _=this
_.c=_.b=_.a=_.r=_.f=_.e=null},dd:function dd(){var _=this
_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},di:function di(){var _=this
_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},aw:function aw(){}},A={
mJ:function(a,b){var u=a.ak,t=new A.dy(b,u)
t.cV(b,u)
t.eJ(a,b)
return t},
n3:function(a,b){var u,t,s,r
for(u=0,t="precision mediump float;\n\nuniform vec4 backClr;\n\nvarying vec2 pos;\n\nuniform int txtCount;\n";u<a;++u)t=t+("uniform sampler2D txt"+u+";\n")+("uniform mat4 clrMat"+u+";\n")+("uniform vec2 srcLoc"+u+";\n")+("uniform vec2 srcSize"+u+";\n")+("uniform vec2 destLoc"+u+";\n")+("uniform vec2 destSize"+u+";\n")+("uniform int flip"+u+";\n")
t+="\nvec4 clrAccum;\n"
s=b===C.A
t=(s||b===C.u?t+"float colorCount;\n":t)+"\nvoid layout(sampler2D txt, mat4 clrMat,\n            vec2 srcLoc, vec2 srcSize, vec2 destLoc, vec2 destSize, int flip)\n{\n   vec2 txtPnt = (pos - destLoc)*srcSize/destSize;\n   if((txtPnt.x >= 0.0) && (txtPnt.x <= srcSize.x) &&\n      (txtPnt.y >= 0.0) && (txtPnt.y <= srcSize.y))\n   {\n      if(flip != 0) txtPnt.y = srcSize.y - txtPnt.y;\n      vec4 color = clrMat*texture2D(txt, txtPnt + srcLoc);\n      color = clamp(color, vec4(0.0), vec4(1.0));\n"
if(b===C.z)t+="      clrAccum += color;\n"
else if(b===C.m)t+="      clrAccum = mix(clrAccum, color, color.a);\n"
else t=s?t+"      clrAccum += color;\n      colorCount += 1.0;\n":t+"      clrAccum = color;\n      colorCount = 1.0;\n"
t+="   }\n}\n\nvoid layoutAll()\n{\n"
r=b===C.u
if(r)for(u=a-1;u>=0;--u)t=t+("   if(txtCount > "+u+")\n")+"   {\n"+("     layout(txt"+u+", clrMat"+u+", srcLoc"+u+", srcSize"+u+", destLoc"+u+", destSize"+u+", flip"+u+");\n")+"     if(colorCount > 0.0) return;\n   }\n"
else for(u=0;u<a;++u)t=t+("   if(txtCount <= "+u+") return;\n")+("   layout(txt"+u+", clrMat"+u+", srcLoc"+u+", srcSize"+u+", destLoc"+u+", destSize"+u+", flip"+u+");\n")
t+="}\n\nvoid main()\n{\n   clrAccum = backClr;\n"
if(s)t+="   colorCount = 1.0;\n"
else if(r)t+="   colorCount = 0.0;\n"
t+="   layoutAll();\n"
t=(s?t+"   clrAccum = clrAccum/colorCount;\n":t)+"   if(clrAccum.a <= 0.0) discard;\n   gl_FragColor = clrAccum;\n}\n"
return t.charCodeAt(0)==0?t:t},
n2:function(a,b,c){var u="TextureLayout_"+a+"_"+C.e.i(b.a),t=new A.dV(c,u)
t.cV(c,u)
t.eN(a,b,c)
return t},
kl:function(a,b,c,d,e){var u=new A.il(a,c,e)
u.f=d
u.sih(P.mH(d,0,P.o))
return u},
d7:function d7(a,b,c){this.a=a
this.b=b
this.c=c},
fd:function fd(a){this.a=a},
dy:function dy(a,b){var _=this
_.bk=_.dP=_.bj=_.ak=_.ap=_.y2=_.y1=_.x2=_.x1=_.ry=_.rx=_.r2=_.r1=_.k4=_.k3=_.k2=_.k1=_.id=_.go=_.fy=_.fx=_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=null
_.e4=_.cm=_.e3=_.bx=_.e2=_.e1=_.bw=_.bv=_.e0=_.e_=_.bu=_.bt=_.bs=_.dZ=_.dY=_.br=_.dX=_.dW=_.bq=_.dV=_.dU=_.bp=_.bo=_.dT=_.dS=_.bn=_.bm=_.dR=_.dQ=_.bl=null
_.cr=_.e8=_.cq=_.e7=_.cp=_.e6=_.co=_.e5=_.cn=null
_.a=a
_.b=b
_.y=_.x=_.r=_.f=_.e=_.d=_.c=null},
he:function he(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5){var _=this
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
_.ak=b4
_.bj=b5},
cH:function cH(a,b){this.b=a
this.c=b},
cL:function cL(a,b,c,d,e,f,g){var _=this
_.b=a
_.c=b
_.d=c
_.e=d
_.f=e
_.r=f
_.x=g},
cJ:function cJ(a,b,c,d,e,f){var _=this
_.b=a
_.c=b
_.d=c
_.e=d
_.f=e
_.r=f},
cM:function cM(a,b,c,d,e,f,g,h,i){var _=this
_.b=a
_.c=b
_.d=c
_.e=d
_.f=e
_.r=f
_.x=g
_.y=h
_.z=i},
cK:function cK(a,b,c,d,e,f,g,h,i){var _=this
_.b=a
_.c=b
_.d=c
_.e=d
_.f=e
_.r=f
_.x=g
_.y=h
_.z=i},
cN:function cN(a,b,c,d,e,f,g,h,i,j,k,l,m){var _=this
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
cA:function cA(){},
bT:function bT(a,b){this.a=a
this.b=b},
bv:function bv(a,b){this.a=a
this.b=b},
dV:function dV(a,b){var _=this
_.fx=_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=null
_.a=a
_.b=b
_.y=_.x=_.r=_.f=_.e=_.d=_.c=null},
e1:function e1(){},
iq:function iq(a){this.a=a},
J:function J(a,b,c){this.a=a
this.c=b
this.d=c},
im:function im(a,b,c){this.a=a
this.c=b
this.d=c},
io:function io(a,b,c){this.a=a
this.c=b
this.d=c},
ip:function ip(a,b,c){this.a=a
this.c=b
this.d=c},
il:function il(a,b,c){var _=this
_.f=null
_.a=a
_.c=b
_.d=c},
a_:function a_(a,b,c){this.a=a
this.c=b
this.d=c},
ax:function ax(a,b,c){this.a=a
this.c=b
this.d=c},
N:function N(a,b,c){this.a=a
this.c=b
this.d=c},
e2:function e2(a,b,c){this.a=a
this.c=b
this.d=c},
ir:function ir(a,b,c){this.a=a
this.c=b
this.d=c},
cI:function cI(a,b,c){this.a=a
this.c=b
this.d=c},
am:function am(a,b,c){this.a=a
this.c=b
this.d=c},
ab:function ab(a,b,c){this.a=a
this.c=b
this.d=c},
ap:function ap(a,b,c){this.a=a
this.c=b
this.d=c}},F={
oe:function(){return F.nO(15,30,0.5,1,new F.k4())},
nO:function(a,b,c,d,e){var u=F.oc(a,b,new F.jP(H.n(e,{func:1,ret:V.a3,args:[P.z]}),d,b,c))
if(u==null)return
u.az()
u.ja(new F.iM(),new F.hu())
return u},
oc:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=null
H.n(c,{func:1,ret:-1,args:[F.aq,P.z,P.z]})
if(a<1)return
if(b<1)return
u=F.l6()
t=H.d([],[F.aq])
for(s=0;s<=b;++s){r=s/b
q=u.a
if(r<0)p=0
else p=r>1?1:r
q.toString
o=F.iG(g,g,new V.a5(p,0,0,1),g,g,new V.a7(r,1),g,g,0)
q.h(0,o)
c.$3(o,r,0)
C.a.h(t,o.dK(g))}for(s=1;s<=a;++s){n=s/a
for(q=n>1,p=n<0,m=1-n,l=0;l<=b;++l){r=l/b
k=u.a
if(r<0)j=0
else j=r>1?1:r
if(p)i=0
else i=q?1:n
if(p)h=0
else h=q?1:n
k.toString
o=F.iG(g,g,new V.a5(j,i,h,1),g,g,new V.a7(r,m),g,g,0)
k.h(0,o)
c.$3(o,r,n)
C.a.h(t,o.dK(g))}}u.d.iJ(a+1,b+1,t)
return u},
dk:function(a,b,c){var u=new F.a9(),t=a.a
if(t==null)H.r(P.t("May not create a face with a first vertex which is not attached to a shape."))
if(t!=b.a||t!=c.a)H.r(P.t("May not create a face with vertices attached to different shapes."))
u.hR(a)
u.hS(b)
u.hT(c)
C.a.h(u.a.a.d.b,u)
u.a.a.aa()
return u},
l6:function(){var u=new F.dO(),t=new F.iH(u)
t.b=!1
t.sii(H.d([],[F.aq]))
u.a=t
t=new F.hQ()
t.sc1(H.d([],[F.bZ]))
u.b=t
t=new F.hP(u)
t.sfv(H.d([],[F.bC]))
u.c=t
t=new F.hO(u)
t.sfl(H.d([],[F.a9]))
u.d=t
u.e=null
return u},
iG:function(a,b,c,d,e,f,g,h,i){var u,t=null,s=new F.aq(),r=new F.iP()
r.sc1(H.d([],[F.bZ]))
s.b=r
r=new F.iL()
u=[F.bC]
r.sfw(H.d([],u))
r.sfz(H.d([],u))
s.c=r
r=new F.iI()
u=[F.a9]
r.sfm(H.d([],u))
r.sfn(H.d([],u))
r.sfo(H.d([],u))
s.d=r
h=$.ma()
s.e=0
r=$.aW()
u=h.a
s.f=(u&r.a)!==0?d:t
s.r=(u&$.br().a)!==0?e:t
s.x=(u&$.bq().a)!==0?b:t
s.y=(u&$.bs().a)!==0?f:t
s.z=(u&$.bt().a)!==0?g:t
s.Q=(u&$.mb().a)!==0?c:t
s.ch=(u&$.ce().a)!==0?i:0
s.cx=(u&$.bp().a)!==0?a:t
return s},
k4:function k4(){},
jP:function jP(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
a9:function a9(){var _=this
_.e=_.d=_.c=_.b=_.a=null},
fK:function fK(){},
hU:function hU(){},
bC:function bC(){},
h_:function h_(){},
ik:function ik(){},
bZ:function bZ(){},
dO:function dO(){var _=this
_.e=_.d=_.c=_.b=_.a=null},
hO:function hO(a){this.a=a
this.b=null},
hP:function hP(a){this.a=a
this.b=null},
hQ:function hQ(){this.b=null},
aq:function aq(){var _=this
_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
iR:function iR(a){this.a=a},
iQ:function iQ(a){this.a=a},
iH:function iH(a){this.a=a
this.c=this.b=null},
iI:function iI(){this.d=this.c=this.b=null},
iJ:function iJ(a,b){this.a=a
this.b=b},
iK:function iK(a,b){this.a=a
this.b=b},
iL:function iL(){this.c=this.b=null},
iN:function iN(){},
iM:function iM(){},
iO:function iO(){},
hu:function hu(){},
iP:function iP(){this.b=null}},T={
l8:function(a){var u=new T.i8()
u.a=0
u.b=a
u.d=u.c=!1
u.x=u.r=u.f=u.e=0
return u},
c3:function c3(){},
dT:function dT(){},
i8:function i8(){var _=this
_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null}},S={
lR:function(){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2="testCanvas",b3=null,b4="modifiers",b5=V.n0("Test 036"),b6=W.kO()
b6.className="pageLargeCanvas"
b6.id=b2
b5.a.appendChild(b6)
u=[P.i]
b5.dC(H.d(["Test of the texture layout cover technique."],u))
b5.iG(H.d(["blends"],u))
b5.dC(H.d(["\xab[Back to Tests|../]"],u))
u=document
t=u.getElementById(b2)
if(t==null)H.r(P.t("Failed to find an element with the identifier, testCanvas."))
s=E.n4(t,!0,!0,!0,!1)
r=new U.cn()
b5=U.ai
r.bc(b5)
r.aG(r.gfH(),r.gho())
r.e=null
r.f=V.bD()
r.r=0
q=s.r
p=new U.e8()
o=U.ka()
o.scQ(0,!0)
o.scB(6.283185307179586)
o.scD(0)
o.sa8(0,0)
o.scC(100)
o.sU(0)
o.sck(0.5)
p.b=o
n=p.gaK()
o.gp().h(0,n)
o=U.ka()
o.scQ(0,!0)
o.scB(6.283185307179586)
o.scD(0)
o.sa8(0,0)
o.scC(100)
o.sU(0)
o.sck(0.5)
p.c=o
o.gp().h(0,n)
p.d=null
p.r=p.f=p.e=!1
p.y=p.x=2.5
p.Q=4
p.ch=p.cx=!1
p.db=p.cy=0
p.dx=null
p.dy=0
p.fx=p.fr=null
m=new X.av(!1,!1,!1)
l=p.d
p.d=m
o=[X.av]
n=new D.F(b4,l,m,o)
n.b=!0
p.O(n)
n=p.f
if(n!==!1){p.f=!1
n=new D.F("invertX",n,!1,[P.a8])
n.b=!0
p.O(n)}n=p.r
if(n!==!1){p.r=!1
n=new D.F("invertY",n,!1,[P.a8])
n.b=!0
p.O(n)}p.aY(q)
r.h(0,p)
q=s.r
p=new U.e7()
n=U.ka()
n.scQ(0,!0)
n.scB(6.283185307179586)
n.scD(0)
n.sa8(0,0)
n.scC(100)
n.sU(0)
n.sck(0.2)
p.b=n
n.gp().h(0,p.gaK())
p.c=null
p.d=!1
p.e=2.5
p.r=4
p.x=p.y=!1
p.z=0
p.Q=null
p.ch=0
p.cy=p.cx=null
m=new X.av(!0,!1,!1)
l=p.c
p.c=m
n=new D.F(b4,l,m,o)
n.b=!0
p.O(n)
p.aY(q)
r.h(0,p)
q=s.r
p=new U.e9()
p.c=0.01
p.e=p.d=0
m=new X.av(!1,!1,!1)
p.b=m
o=new D.F(b4,b3,m,o)
o.b=!0
p.O(o)
p.aY(q)
r.h(0,p)
r.h(0,U.kQ(V.aL(1,0,0,0,0,1,0,0,0,0,1,5,0,0,0,1)))
k=X.l_(r)
j=new V.a5(0,0,0,0)
i=new X.fi()
i.d=i.c=i.b=i.a=512
i.e=!0
i.f=!1
i.x=i.r=1
i.ch=T.l8(b3)
i.cx=new V.a5(0,0,0,1)
i.cy=!0
i.db=2000
i.dx=!0
i.dy=V.dL()
i.sai(0,512)
i.sag(0,512)
if(!i.cx.u(0,j)){l=i.cx
i.cx=j
q=new D.F("color",l,j,[V.a5])
q.b=!0
i.a3(q)}q=i.db
if(!(Math.abs(q-2000)<$.O().a)){i.db=2000
q=new D.F("depth",q,2000,[P.z])
q.b=!0
i.a3(q)}if(!i.f){i.f=!0
q=new D.F("autoResize",!1,!0,[P.a8])
q.b=!0
i.a3(q)}q=i.r
if(!(Math.abs(q-1)<$.O().a)){i.r=1
q=new D.F("autoResizeScalarX",q,1,[P.z])
q.b=!0
i.a3(q)}q=i.x
if(!(Math.abs(q-1)<$.O().a)){i.x=1
q=new D.F("autoResizeScalarY",q,1,[P.z])
q.b=!0
i.a3(q)}h=V.dL()
if(!J.T(i.dy,h)){l=i.dy
i.dy=h
q=new D.F("region",l,h,[V.bF])
q.b=!0
i.a3(q)}g=E.kS()
g.sbJ(0,F.oe())
f=new O.dx()
f.sf5(O.fp(V.ah))
f.e.aG(f.gfL(),f.gfN())
q=new O.b5(f,"emission")
q.c=C.d
q.f=new V.a0(0,0,0)
f.f=q
q=new O.b5(f,"ambient")
q.c=C.d
q.f=new V.a0(0,0,0)
f.r=q
q=new O.b5(f,"diffuse")
q.c=C.d
q.f=new V.a0(0,0,0)
f.x=q
q=new O.b5(f,"invDiffuse")
q.c=C.d
q.f=new V.a0(0,0,0)
f.y=q
q=new O.hg(f,"specular")
q.c=C.d
q.f=new V.a0(0,0,0)
q.ch=100
f.z=q
q=new O.hd(f,"bump")
q.c=C.d
f.Q=q
f.ch=null
q=new O.b5(f,"reflect")
q.c=C.d
q.f=new V.a0(0,0,0)
f.cx=q
q=new O.hf(f,"refract")
q.c=C.d
q.f=new V.a0(0,0,0)
q.ch=1
f.cy=q
q=new O.hc(f,"alpha")
q.c=C.d
q.f=1
f.db=q
q=new D.dt()
q.bc(D.a6)
q.sfg(H.d([],[D.bw]))
q.shC(H.d([],[D.dG]))
q.shZ(H.d([],[D.dP]))
q.sib(H.d([],[D.dW]))
q.sic(H.d([],[D.dX]))
q.sie(H.d([],[D.dY]))
q.ch=q.Q=null
q.cS(q.gfJ(),q.ghm(),q.ghq())
f.dx=q
p=q.Q
q=p==null?q.Q=D.M():p
q.h(0,f.ghN())
q=f.dx
p=q.ch
q=p==null?q.ch=D.M():p
q.h(0,f.gat())
f.dy=null
q=f.dx
e=V.ln()
p=U.kQ(V.kX(V.l2(),e,new V.R(0,-1,-1)))
j=new V.a0(1,1,1)
o=new D.bw()
o.c=new V.a0(1,1,1)
o.a=V.lo()
l=o.b
o.b=p
p.gp().h(0,o.geP())
b5=new D.F("mover",l,o.b,[b5])
b5.b=!0
o.as(b5)
if(!o.c.u(0,j)){l=o.c
o.c=j
b5=new D.F("color",l,j,[V.a0])
b5.b=!0
o.as(b5)}q.h(0,o)
b5=f.r
b5.sao(0,new V.a0(0,0,1))
b5=f.x
b5.sao(0,new V.a0(0,1,0))
b5=f.z
b5.sao(0,new V.a0(1,0,0))
b5=f.z
if(b5.c===C.d){b5.c=C.j
b5.bK()
b5.c4(100)
q=b5.a
q.a=null
q.R(b3)}b5.c4(10)
d=new M.di()
d.a=!0
d.sf8(0,O.fp(E.ao))
d.e.aG(d.gfR(),d.gfT())
d.y=d.x=d.r=d.f=null
c=X.kb(b3)
d.sdH(b3)
d.sb5(0,c)
d.sb6(b3)
d.sdH(k)
d.sb6(f)
d.sb5(0,i)
d.e.h(0,g)
b=new V.a5(0,0,0,1)
a=new O.dU()
a.a=new V.a5(0,0,0,0)
a.sfj(O.fp(O.aS))
a.c.aG(a.gh0(),a.gh2())
a.d=0
a.e=null
a.r=a.f=C.m
if(!a.a.u(0,b)){l=a.a
a.a=b
b5=new D.F("backColor",l,b,[V.a5])
b5.b=!0
a.R(b5)}a.saZ(C.m)
for(a0=0;a0<3;++a0){a1=a0*0.3333333333333333
for(a2=0;a2<3;++a2){b5=a.c
q=i.ch
p=H.v(b5,0)
q=H.y(O.l9(V.dK(a1,a2*0.3333333333333333,0.3333333333333333,0.3333333333333333),q),p)
o=[p]
if(H.A(b5.c0(H.d([q],o)))){n=b5.a
a3=n.length
C.a.h(n,q)
p=H.j(H.d([q],o),"$ih",[p],"$ah")
b5=b5.c
if(b5!=null)b5.$2(a3,p)}}}b5=a.c
q=O.l9(b3,b3)
q.sar(i.ch)
q.sdJ(V.aL(0,1,0,0,0,0,1,0,1,0,0,0,0,0,0,1))
b5.h(0,q)
a4=X.kb(new V.a5(0,0,0,1))
a5=new M.dd()
a5.a=!0
b5=E.kS()
a6=F.l6()
q=a6.a
p=new V.R(-1,-1,1)
p=p.w(0,Math.sqrt(p.D(p)))
a7=q.bh(new V.b8(1,2,4,6),new V.a5(1,0,0,1),new V.a3(-1,-1,0),new V.a7(0,1),p,b3)
q=a6.a
p=new V.R(1,-1,1)
p=p.w(0,Math.sqrt(p.D(p)))
a8=q.bh(new V.b8(0,3,4,6),new V.a5(0,0,1,1),new V.a3(1,-1,0),new V.a7(1,1),p,b3)
q=a6.a
p=new V.R(1,1,1)
p=p.w(0,Math.sqrt(p.D(p)))
a9=q.bh(new V.b8(0,2,5,6),new V.a5(0,1,0,1),new V.a3(1,1,0),new V.a7(1,0),p,b3)
q=a6.a
p=V.bl()
o=new V.R(-1,1,1)
o=o.w(0,Math.sqrt(o.D(o)))
b0=q.bh(new V.b8(0,2,4,7),new V.a5(1,1,0,1),new V.a3(-1,1,0),p,o,b3)
a6.d.iI(H.d([a7,a8,a9,b0],[F.aq]))
a6.az()
b5.sbJ(0,a6)
a5.e=b5
b1=new X.fT()
l=a5.b
a5.b=b1
b1.gp().h(0,a5.ga_())
b5=new D.F("camera",l,a5.b,[X.bQ])
b5.b=!0
a5.Y(b5)
a5.sb5(0,b3)
a5.sb6(b3)
a5.sb6(a)
a5.sb5(0,a4)
b5=M.aw
q=H.d([d,a5],[b5])
p=new M.db()
p.bc(b5)
p.e=!0
p.f=!1
p.r=null
p.aG(p.ghs(),p.ghu())
p.c8(0,q)
b5=s.d
if(b5!==p){if(b5!=null)b5.gp().P(0,s.gcX())
s.d=p
p.gp().h(0,s.gcX())
s.cY()}b5=new V.hD("blends")
u=u.getElementById("blends")
b5.c=u
if(u==null)H.r("Failed to find blends for RadioGroup")
b5.c7(0,"Additive",new S.jY(a))
b5.dB(0,"AlphaBlend",new S.jZ(a),!0)
b5.c7(0,"Average",new S.k_(a))
b5.c7(0,"Overwrite",new S.k0(a))
V.o9(s)},
jY:function jY(a){this.a=a},
jZ:function jZ(a){this.a=a},
k_:function k_(a){this.a=a},
k0:function k0(a){this.a=a}}
var w=[C,H,J,P,W,O,E,Z,D,X,V,U,M,A,F,T,S]
hunkHelpers.setFunctionNamesIfNecessary(w)
var $={}
H.kg.prototype={}
J.a.prototype={
u:function(a,b){return a===b},
gH:function(a){return H.cy(a)},
i:function(a){return"Instance of '"+H.c0(a)+"'"}}
J.fV.prototype={
i:function(a){return String(a)},
gH:function(a){return a?519018:218159},
$ia8:1}
J.dq.prototype={
u:function(a,b){return null==b},
i:function(a){return"null"},
gH:function(a){return 0}}
J.dr.prototype={
gH:function(a){return 0},
i:function(a){return String(a)}}
J.hz.prototype={}
J.bI.prototype={}
J.bh.prototype={
i:function(a){var u=a[$.lZ()]
if(u==null)return this.eF(a)
return"JavaScript function for "+H.m(J.aX(u))},
$S:function(){return{func:1,opt:[,,,,,,,,,,,,,,,,]}},
$ikc:1}
J.aJ.prototype={
h:function(a,b){H.y(b,H.v(a,0))
if(!!a.fixed$length)H.r(P.E("add"))
a.push(b)},
eq:function(a,b){if(!!a.fixed$length)H.r(P.E("removeAt"))
if(b<0||b>=a.length)throw H.c(P.dJ(b,null))
return a.splice(b,1)[0]},
P:function(a,b){var u
if(!!a.fixed$length)H.r(P.E("remove"))
for(u=0;u<a.length;++u)if(J.T(a[u],b)){a.splice(u,1)
return!0}return!1},
c8:function(a,b){var u,t
H.j(b,"$ih",[H.v(a,0)],"$ah")
if(!!a.fixed$length)H.r(P.E("addAll"))
for(u=b.length,t=0;t<b.length;b.length===u||(0,H.H)(b),++t)a.push(b[t])},
K:function(a,b){var u,t
H.n(b,{func:1,ret:-1,args:[H.v(a,0)]})
u=a.length
for(t=0;t<u;++t){b.$1(a[t])
if(a.length!==u)throw H.c(P.bU(a))}},
C:function(a,b){var u,t=new Array(a.length)
t.fixed$length=Array
for(u=0;u<a.length;++u)this.l(t,u,H.m(a[u]))
return t.join(b)},
j6:function(a){return this.C(a,"")},
j0:function(a,b,c,d){var u,t,s
H.y(b,d)
H.n(c,{func:1,ret:d,args:[d,H.v(a,0)]})
u=a.length
for(t=b,s=0;s<u;++s){t=c.$2(t,a[s])
if(a.length!==u)throw H.c(P.bU(a))}return t},
I:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
eD:function(a,b,c){if(b<0||b>a.length)throw H.c(P.af(b,0,a.length,"start",null))
if(c<b||c>a.length)throw H.c(P.af(c,b,a.length,"end",null))
if(b===c)return H.d([],[H.v(a,0)])
return H.d(a.slice(b,c),[H.v(a,0)])},
gj_:function(a){if(a.length>0)return a[0]
throw H.c(H.kT())},
gaD:function(a){var u=a.length
if(u>0)return a[u-1]
throw H.c(H.kT())},
bb:function(a,b,c,d){var u,t,s=H.v(a,0)
H.j(d,"$ih",[s],"$ah")
if(!!a.immutable$list)H.r(P.E("setRange"))
P.bm(b,c,a.length)
u=c-b
if(u===0)return
P.kj(0,"skipCount")
H.j(d,"$ib",[s],"$ab")
s=J.ca(d)
if(u>s.gk(d))throw H.c(H.mA())
if(0<b)for(t=u-1;t>=0;--t)a[b+t]=s.j(d,t)
else for(t=0;t<u;++t)a[b+t]=s.j(d,t)},
aA:function(a,b){var u
for(u=0;u<a.length;++u)if(J.T(a[u],b))return!0
return!1},
i:function(a){return P.kd(a,"[","]")},
gV:function(a){return new J.ar(a,a.length,[H.v(a,0)])},
gH:function(a){return H.cy(a)},
gk:function(a){return a.length},
sk:function(a,b){if(!!a.fixed$length)H.r(P.E("set length"))
if(b<0)throw H.c(P.af(b,0,null,"newLength",null))
a.length=b},
j:function(a,b){if(b>=a.length||b<0)throw H.c(H.c8(a,b))
return a[b]},
l:function(a,b,c){H.y(c,H.v(a,0))
if(!!a.immutable$list)H.r(P.E("indexed set"))
if(b>=a.length||b<0)throw H.c(H.c8(a,b))
a[b]=c},
n:function(a,b){var u,t=[H.v(a,0)]
H.j(b,"$ib",t,"$ab")
u=C.e.n(a.length,b.gk(b))
t=H.d([],t)
this.sk(t,u)
this.bb(t,0,a.length,a)
this.bb(t,a.length,u,b)
return t},
$ih:1,
$ib:1}
J.kf.prototype={}
J.ar.prototype={
gJ:function(a){return this.d},
B:function(){var u,t=this,s=t.a,r=s.length
if(t.b!==r)throw H.c(H.H(s))
u=t.c
if(u>=r){t.sdc(null)
return!1}t.sdc(s[u]);++t.c
return!0},
sdc:function(a){this.d=H.y(a,H.v(this,0))},
$ib2:1}
J.bB.prototype={
jz:function(a){var u
if(a>=-2147483648&&a<=2147483647)return a|0
if(isFinite(a)){u=a<0?Math.ceil(a):Math.floor(a)
return u+0}throw H.c(P.E(""+a+".toInt()"))},
cs:function(a){var u,t
if(a>=0){if(a<=2147483647)return a|0}else if(a>=-2147483648){u=a|0
return a===u?u:u-1}t=Math.floor(a)
if(isFinite(t))return t
throw H.c(P.E(""+a+".floor()"))},
a0:function(a){if(a>0){if(a!==1/0)return Math.round(a)}else if(a>-1/0)return 0-Math.round(0-a)
throw H.c(P.E(""+a+".round()"))},
ex:function(a,b){var u,t
if(b>20)throw H.c(P.af(b,0,20,"fractionDigits",null))
u=a.toFixed(b)
if(a===0)t=1/a<0
else t=!1
if(t)return"-"+u
return u},
b7:function(a,b){var u,t,s,r
if(b<2||b>36)throw H.c(P.af(b,2,36,"radix",null))
u=a.toString(b)
if(C.b.Z(u,u.length-1)!==41)return u
t=/^([\da-z]+)(?:\.([\da-z]+))?\(e\+(\d+)\)$/.exec(u)
if(t==null)H.r(P.E("Unexpected toString result: "+u))
s=t.length
if(1>=s)return H.e(t,1)
u=t[1]
if(3>=s)return H.e(t,3)
r=+t[3]
s=t[2]
if(s!=null){u+=s
r-=s.length}return u+C.b.t("0",r)},
i:function(a){if(a===0&&1/a<0)return"-0.0"
else return""+a},
gH:function(a){var u,t,s,r,q=a|0
if(a===q)return 536870911&q
u=Math.abs(a)
t=Math.log(u)/0.6931471805599453|0
s=Math.pow(2,t)
r=u<1?u/s:s/u
return 536870911&((r*9007199254740992|0)+(r*3542243181176521|0))*599197+t*1259},
n:function(a,b){if(typeof b!=="number")throw H.c(H.ay(b))
return a+b},
q:function(a,b){if(typeof b!=="number")throw H.c(H.ay(b))
return a-b},
t:function(a,b){if(typeof b!=="number")throw H.c(H.ay(b))
return a*b},
ba:function(a,b){var u=a%b
if(u===0)return 0
if(u>0)return u
if(b<0)return u-b
else return u+b},
eI:function(a,b){if((a|0)===a)if(b>=1||b<-1)return a/b|0
return this.dv(a,b)},
a4:function(a,b){return(a|0)===a?a/b|0:this.dv(a,b)},
dv:function(a,b){var u=a/b
if(u>=-2147483648&&u<=2147483647)return u|0
if(u>0){if(u!==1/0)return Math.floor(u)}else if(u>-1/0)return Math.ceil(u)
throw H.c(P.E("Result of truncating division is "+H.m(u)+": "+H.m(a)+" ~/ "+b))},
aO:function(a,b){var u
if(a>0)u=this.du(a,b)
else{u=b>31?31:b
u=a>>u>>>0}return u},
hY:function(a,b){if(b<0)throw H.c(H.ay(b))
return this.du(a,b)},
du:function(a,b){return b>31?0:a>>>b},
$iz:1,
$iaa:1}
J.dp.prototype={$io:1}
J.dn.prototype={}
J.bg.prototype={
Z:function(a,b){if(b<0)throw H.c(H.c8(a,b))
if(b>=a.length)H.r(H.c8(a,b))
return a.charCodeAt(b)},
G:function(a,b){if(b>=a.length)throw H.c(H.c8(a,b))
return a.charCodeAt(b)},
n:function(a,b){if(typeof b!=="string")throw H.c(P.k8(b,null,null))
return a+b},
aR:function(a,b,c,d){var u,t
c=P.bm(b,c,a.length)
u=a.substring(0,b)
t=a.substring(c)
return u+d+t},
ae:function(a,b,c){var u
if(c<0||c>a.length)throw H.c(P.af(c,0,a.length,null,null))
u=c+b.length
if(u>a.length)return!1
return b===a.substring(c,u)},
ad:function(a,b){return this.ae(a,b,0)},
A:function(a,b,c){if(typeof b!=="number"||Math.floor(b)!==b)H.r(H.ay(b))
if(c==null)c=a.length
if(typeof b!=="number")return b.W()
if(b<0)throw H.c(P.dJ(b,null))
if(b>c)throw H.c(P.dJ(b,null))
if(c>a.length)throw H.c(P.dJ(c,null))
return a.substring(b,c)},
aH:function(a,b){return this.A(a,b,null)},
t:function(a,b){var u,t
if(0>=b)return""
if(b===1||a.length===0)return a
if(b!==b>>>0)throw H.c(C.O)
for(u=a,t="";!0;){if((b&1)===1)t=u+t
b=b>>>1
if(b===0)break
u+=u}return t},
aE:function(a,b){var u=b-a.length
if(u<=0)return a
return this.t(" ",u)+a},
eg:function(a,b,c){var u
if(c<0||c>a.length)throw H.c(P.af(c,0,a.length,null,null))
u=a.indexOf(b,c)
return u},
ef:function(a,b){return this.eg(a,b,0)},
i:function(a){return a},
gH:function(a){var u,t,s
for(u=a.length,t=0,s=0;s<u;++s){t=536870911&t+a.charCodeAt(s)
t=536870911&t+((524287&t)<<10)
t^=t>>6}t=536870911&t+((67108863&t)<<3)
t^=t>>11
return 536870911&t+((16383&t)<<15)},
gk:function(a){return a.length},
$ikZ:1,
$ii:1}
H.a4.prototype={
gk:function(a){return this.a.length},
j:function(a,b){return C.b.Z(this.a,b)},
$acO:function(){return[P.o]},
$aw:function(){return[P.o]},
$ah:function(){return[P.o]},
$ab:function(){return[P.o]}}
H.fF.prototype={}
H.du.prototype={
gJ:function(a){return this.d},
B:function(){var u,t=this,s=t.a,r=J.ca(s),q=r.gk(s)
if(t.b!==q)throw H.c(P.bU(s))
u=t.c
if(u>=q){t.saV(null)
return!1}t.saV(r.I(s,u));++t.c
return!0},
saV:function(a){this.d=H.y(a,H.v(this,0))},
$ib2:1}
H.ha.prototype={
gV:function(a){return new H.hb(J.bN(this.a),this.b,this.$ti)},
gk:function(a){return J.aH(this.a)},
I:function(a,b){return this.b.$1(J.k7(this.a,b))},
$ah:function(a,b){return[b]}}
H.hb.prototype={
B:function(){var u=this,t=u.b
if(t.B()){u.saV(u.c.$1(t.gJ(t)))
return!0}u.saV(null)
return!1},
gJ:function(a){return this.a},
saV:function(a){this.a=H.y(a,H.v(this,1))},
$ab2:function(a,b){return[b]}}
H.iT.prototype={
gV:function(a){return new H.iU(J.bN(this.a),this.b,this.$ti)}}
H.iU.prototype={
B:function(){var u,t
for(u=this.a,t=this.b;u.B();)if(H.A(t.$1(u.gJ(u))))return!0
return!1},
gJ:function(a){var u=this.a
return u.gJ(u)}}
H.bW.prototype={}
H.cO.prototype={
l:function(a,b,c){H.y(c,H.az(this,"cO",0))
throw H.c(P.E("Cannot modify an unmodifiable list"))}}
H.e4.prototype={}
H.fs.prototype={
i:function(a){return P.ki(this)},
l:function(a,b,c){H.y(b,H.v(this,0))
H.y(c,H.v(this,1))
return H.mt()},
$iD:1}
H.ft.prototype={
gk:function(a){return this.a},
bi:function(a,b){if("__proto__"===b)return!1
return this.b.hasOwnProperty(b)},
j:function(a,b){if(!this.bi(0,b))return
return this.dd(b)},
dd:function(a){return this.b[H.L(a)]},
K:function(a,b){var u,t,s,r,q=this,p=H.v(q,1)
H.n(b,{func:1,ret:-1,args:[H.v(q,0),p]})
u=q.c
for(t=u.length,s=0;s<t;++s){r=u[s]
b.$2(r,H.y(q.dd(r),p))}}}
H.ih.prototype={
ah:function(a){var u,t,s=this,r=new RegExp(s.a).exec(a)
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
H.hv.prototype={
i:function(a){var u=this.b
if(u==null)return"NoSuchMethodError: "+H.m(this.a)
return"NoSuchMethodError: method not found: '"+u+"' on null"}}
H.fX.prototype={
i:function(a){var u,t=this,s="NoSuchMethodError: method not found: '",r=t.b
if(r==null)return"NoSuchMethodError: "+H.m(t.a)
u=t.c
if(u==null)return s+r+"' ("+H.m(t.a)+")"
return s+r+"' on '"+u+"' ("+H.m(t.a)+")"}}
H.iu.prototype={
i:function(a){var u=this.a
return u.length===0?"Error":"Error: "+u}}
H.k5.prototype={
$1:function(a){if(!!J.W(a).$ibx)if(a.$thrownJsError==null)a.$thrownJsError=this.a
return a},
$S:15}
H.eI.prototype={
i:function(a){var u,t=this.b
if(t!=null)return t
t=this.a
u=t!==null&&typeof t==="object"?t.stack:null
return this.b=u==null?"":u},
$ias:1}
H.ci.prototype={
i:function(a){return"Closure '"+H.c0(this).trim()+"'"},
$ikc:1,
gjI:function(){return this},
$C:"$1",
$R:1,
$D:null}
H.i5.prototype={}
H.hY.prototype={
i:function(a){var u=this.$static_name
if(u==null)return"Closure of unknown static method"
return"Closure '"+H.cd(u)+"'"}}
H.cf.prototype={
u:function(a,b){var u=this
if(b==null)return!1
if(u===b)return!0
if(!(b instanceof H.cf))return!1
return u.a===b.a&&u.b===b.b&&u.c===b.c},
gH:function(a){var u,t=this.c
if(t==null)u=H.cy(this.a)
else u=typeof t!=="object"?J.d6(t):H.cy(t)
return(u^H.cy(this.b))>>>0},
i:function(a){var u=this.c
if(u==null)u=this.a
return"Closure '"+H.m(this.d)+"' of "+("Instance of '"+H.c0(u)+"'")}}
H.ij.prototype={
i:function(a){return this.a}}
H.fn.prototype={
i:function(a){return this.a}}
H.hL.prototype={
i:function(a){return"RuntimeError: "+H.m(this.a)}}
H.iV.prototype={
i:function(a){return"Assertion failed: "+P.dj(this.a)}}
H.aK.prototype={
gk:function(a){return this.a},
gaq:function(a){return new H.h1(this,[H.v(this,0)])},
bi:function(a,b){var u,t,s=this
if(typeof b==="string"){u=s.b
if(u==null)return!1
return s.d8(u,b)}else if(typeof b==="number"&&(b&0x3ffffff)===b){t=s.c
if(t==null)return!1
return s.d8(t,b)}else return s.j3(b)},
j3:function(a){var u=this,t=u.d
if(t==null)return!1
return u.cw(u.bQ(t,u.cv(a)),a)>=0},
j:function(a,b){var u,t,s,r,q=this
if(typeof b==="string"){u=q.b
if(u==null)return
t=q.bd(u,b)
s=t==null?null:t.b
return s}else if(typeof b==="number"&&(b&0x3ffffff)===b){r=q.c
if(r==null)return
t=q.bd(r,b)
s=t==null?null:t.b
return s}else return q.j4(b)},
j4:function(a){var u,t,s=this,r=s.d
if(r==null)return
u=s.bQ(r,s.cv(a))
t=s.cw(u,a)
if(t<0)return
return u[t].b},
l:function(a,b,c){var u,t,s=this
H.y(b,H.v(s,0))
H.y(c,H.v(s,1))
if(typeof b==="string"){u=s.b
s.d0(u==null?s.b=s.bZ():u,b,c)}else if(typeof b==="number"&&(b&0x3ffffff)===b){t=s.c
s.d0(t==null?s.c=s.bZ():t,b,c)}else s.j5(b,c)},
j5:function(a,b){var u,t,s,r,q=this
H.y(a,H.v(q,0))
H.y(b,H.v(q,1))
u=q.d
if(u==null)u=q.d=q.bZ()
t=q.cv(a)
s=q.bQ(u,t)
if(s==null)q.c5(u,t,[q.c_(a,b)])
else{r=q.cw(s,a)
if(r>=0)s[r].b=b
else s.push(q.c_(a,b))}},
K:function(a,b){var u,t,s=this
H.n(b,{func:1,ret:-1,args:[H.v(s,0),H.v(s,1)]})
u=s.e
t=s.r
for(;u!=null;){b.$2(u.a,u.b)
if(t!==s.r)throw H.c(P.bU(s))
u=u.c}},
d0:function(a,b,c){var u,t=this
H.y(b,H.v(t,0))
H.y(c,H.v(t,1))
u=t.bd(a,b)
if(u==null)t.c5(a,b,t.c_(b,c))
else u.b=c},
c_:function(a,b){var u=this,t=new H.h0(H.y(a,H.v(u,0)),H.y(b,H.v(u,1)))
if(u.e==null)u.e=u.f=t
else u.f=u.f.c=t;++u.a
u.r=u.r+1&67108863
return t},
cv:function(a){return J.d6(a)&0x3ffffff},
cw:function(a,b){var u,t
if(a==null)return-1
u=a.length
for(t=0;t<u;++t)if(J.T(a[t].a,b))return t
return-1},
i:function(a){return P.ki(this)},
bd:function(a,b){return a[b]},
bQ:function(a,b){return a[b]},
c5:function(a,b,c){a[b]=c},
fd:function(a,b){delete a[b]},
d8:function(a,b){return this.bd(a,b)!=null},
bZ:function(){var u="<non-identifier-key>",t=Object.create(null)
this.c5(t,u,t)
this.fd(t,u)
return t}}
H.h0.prototype={}
H.h1.prototype={
gk:function(a){return this.a.a},
gV:function(a){var u=this.a,t=new H.h2(u,u.r,this.$ti)
t.c=u.e
return t}}
H.h2.prototype={
gJ:function(a){return this.d},
B:function(){var u=this,t=u.a
if(u.b!==t.r)throw H.c(P.bU(t))
else{t=u.c
if(t==null){u.sd_(null)
return!1}else{u.sd_(t.a)
u.c=u.c.c
return!0}}},
sd_:function(a){this.d=H.y(a,H.v(this,0))},
$ib2:1}
H.jT.prototype={
$1:function(a){return this.a(a)},
$S:15}
H.jU.prototype={
$2:function(a,b){return this.a(a,b)},
$S:26}
H.jV.prototype={
$1:function(a){return this.a(H.L(a))},
$S:45}
H.fW.prototype={
i:function(a){return"RegExp/"+this.a+"/"},
$ikZ:1,
$imX:1}
H.ct.prototype={$ict:1}
H.bE.prototype={$ibE:1,$in6:1}
H.dB.prototype={
gk:function(a){return a.length},
$iI:1,
$aI:function(){}}
H.cu.prototype={
j:function(a,b){H.bf(b,a,a.length)
return a[b]},
l:function(a,b,c){H.nQ(c)
H.bf(b,a,a.length)
a[b]=c},
$abW:function(){return[P.z]},
$aw:function(){return[P.z]},
$ih:1,
$ah:function(){return[P.z]},
$ib:1,
$ab:function(){return[P.z]}}
H.dC.prototype={
l:function(a,b,c){H.ad(c)
H.bf(b,a,a.length)
a[b]=c},
$abW:function(){return[P.o]},
$aw:function(){return[P.o]},
$ih:1,
$ah:function(){return[P.o]},
$ib:1,
$ab:function(){return[P.o]}}
H.hp.prototype={
j:function(a,b){H.bf(b,a,a.length)
return a[b]}}
H.hq.prototype={
j:function(a,b){H.bf(b,a,a.length)
return a[b]}}
H.hr.prototype={
j:function(a,b){H.bf(b,a,a.length)
return a[b]}}
H.hs.prototype={
j:function(a,b){H.bf(b,a,a.length)
return a[b]}}
H.ht.prototype={
j:function(a,b){H.bf(b,a,a.length)
return a[b]}}
H.dD.prototype={
gk:function(a){return a.length},
j:function(a,b){H.bf(b,a,a.length)
return a[b]}}
H.cv.prototype={
gk:function(a){return a.length},
j:function(a,b){H.bf(b,a,a.length)
return a[b]},
$icv:1,
$iQ:1}
H.cT.prototype={}
H.cU.prototype={}
H.cV.prototype={}
H.cW.prototype={}
P.iX.prototype={
$1:function(a){var u=this.a,t=u.a
u.a=null
t.$0()},
$S:19}
P.iW.prototype={
$1:function(a){var u,t
this.a.a=H.n(a,{func:1,ret:-1})
u=this.b
t=this.c
u.firstChild?u.removeChild(t):u.appendChild(t)},
$S:35}
P.iY.prototype={
$0:function(){this.a.$0()},
$S:1}
P.iZ.prototype={
$0:function(){this.a.$0()},
$S:1}
P.eO.prototype={
eX:function(a,b){if(self.setTimeout!=null)self.setTimeout(H.c7(new P.jx(this,b),0),a)
else throw H.c(P.E("`setTimeout()` not found."))},
eY:function(a,b){if(self.setTimeout!=null)self.setInterval(H.c7(new P.jw(this,a,Date.now(),b),0),a)
else throw H.c(P.E("Periodic timer."))},
$ib9:1}
P.jx.prototype={
$0:function(){this.a.c=1
this.b.$0()},
$S:3}
P.jw.prototype={
$0:function(){var u,t=this,s=t.a,r=s.c+1,q=t.b
if(q>0){u=Date.now()-t.c
if(u>(r+1)*q)r=C.e.eI(u,q)}s.c=r
t.d.$1(s)},
$S:1}
P.be.prototype={
j8:function(a){if(this.c!==6)return!0
return this.b.b.cM(H.n(this.d,{func:1,ret:P.a8,args:[P.P]}),a.a,P.a8,P.P)},
j2:function(a){var u=this.e,t=P.P,s={futureOr:1,type:H.v(this,1)},r=this.b.b
if(H.f3(u,{func:1,args:[P.P,P.as]}))return H.kz(r.ju(u,a.a,a.b,null,t,P.as),s)
else return H.kz(r.cM(H.n(u,{func:1,args:[P.P]}),a.a,null,t),s)}}
P.aE.prototype={
ew:function(a,b,c){var u,t,s,r=H.v(this,0)
H.n(a,{func:1,ret:{futureOr:1,type:c},args:[r]})
u=$.Z
if(u!==C.k){u.toString
H.n(a,{func:1,ret:{futureOr:1,type:c},args:[r]})
if(b!=null)b=P.nE(b,u)}H.n(a,{func:1,ret:{futureOr:1,type:c},args:[r]})
t=new P.aE($.Z,[c])
s=b==null?1:3
this.d1(new P.be(t,s,a,b,[r,c]))
return t},
jy:function(a,b){return this.ew(a,null,b)},
d1:function(a){var u,t=this,s=t.a
if(s<=1){a.a=H.f(t.c,"$ibe")
t.c=a}else{if(s===2){u=H.f(t.c,"$iaE")
s=u.a
if(s<4){u.d1(a)
return}t.a=s
t.c=u.c}s=t.b
s.toString
P.jN(null,null,s,H.n(new P.j6(t,a),{func:1,ret:-1}))}},
dq:function(a){var u,t,s,r,q,p=this,o={}
o.a=a
if(a==null)return
u=p.a
if(u<=1){t=H.f(p.c,"$ibe")
s=p.c=a
if(t!=null){for(;r=s.a,r!=null;s=r);s.a=t}}else{if(u===2){q=H.f(p.c,"$iaE")
u=q.a
if(u<4){q.dq(a)
return}p.a=u
p.c=q.c}o.a=p.bf(a)
u=p.b
u.toString
P.jN(null,null,u,H.n(new P.ja(o,p),{func:1,ret:-1}))}},
c3:function(){var u=H.f(this.c,"$ibe")
this.c=null
return this.bf(u)},
bf:function(a){var u,t,s
for(u=a,t=null;u!=null;t=u,u=s){s=u.a
u.a=t}return t},
d4:function(a){var u,t,s=this,r=H.v(s,0)
H.kz(a,{futureOr:1,type:r})
u=s.$ti
if(H.kw(a,"$icm",u,"$acm"))if(H.kw(a,"$iaE",u,null))P.lq(a,s)
else P.ni(a,s)
else{t=s.c3()
H.y(a,r)
s.a=4
s.c=a
P.cR(s,t)}},
d5:function(a,b){var u,t=this
H.f(b,"$ias")
u=t.c3()
t.a=8
t.c=new P.an(a,b)
P.cR(t,u)},
$icm:1}
P.j6.prototype={
$0:function(){P.cR(this.a,this.b)},
$S:1}
P.ja.prototype={
$0:function(){P.cR(this.b,this.a.a)},
$S:1}
P.j7.prototype={
$1:function(a){var u=this.a
u.a=0
u.d4(a)},
$S:19}
P.j8.prototype={
$2:function(a,b){H.f(b,"$ias")
this.a.d5(a,b)},
$1:function(a){return this.$2(a,null)},
$S:27}
P.j9.prototype={
$0:function(){this.a.d5(this.b,this.c)},
$S:1}
P.jd.prototype={
$0:function(){var u,t,s,r,q,p,o=this,n=null
try{s=o.c
n=s.b.b.ev(H.n(s.d,{func:1}),null)}catch(r){u=H.aG(r)
t=H.cb(r)
if(o.d){s=H.f(o.a.a.c,"$ian").a
q=u
q=s==null?q==null:s===q
s=q}else s=!1
q=o.b
if(s)q.b=H.f(o.a.a.c,"$ian")
else q.b=new P.an(u,t)
q.a=!0
return}if(!!J.W(n).$icm){if(n instanceof P.aE&&n.a>=4){if(n.a===8){s=o.b
s.b=H.f(n.c,"$ian")
s.a=!0}return}p=o.a.a
s=o.b
s.b=n.jy(new P.je(p),null)
s.a=!1}},
$S:3}
P.je.prototype={
$1:function(a){return this.a},
$S:48}
P.jc.prototype={
$0:function(){var u,t,s,r,q,p,o,n=this
try{s=n.b
r=H.v(s,0)
q=H.y(n.c,r)
p=H.v(s,1)
n.a.b=s.b.b.cM(H.n(s.d,{func:1,ret:{futureOr:1,type:p},args:[r]}),q,{futureOr:1,type:p},r)}catch(o){u=H.aG(o)
t=H.cb(o)
s=n.a
s.b=new P.an(u,t)
s.a=!0}},
$S:3}
P.jb.prototype={
$0:function(){var u,t,s,r,q,p,o,n,m=this
try{u=H.f(m.a.a.c,"$ian")
r=m.c
if(H.A(r.j8(u))&&r.e!=null){q=m.b
q.b=r.j2(u)
q.a=!1}}catch(p){t=H.aG(p)
s=H.cb(p)
r=H.f(m.a.a.c,"$ian")
q=r.a
o=t
n=m.b
if(q==null?o==null:q===o)n.b=r
else n.b=new P.an(t,s)
n.a=!0}},
$S:3}
P.ec.prototype={}
P.i0.prototype={
gk:function(a){var u,t,s=this,r={},q=new P.aE($.Z,[P.o])
r.a=0
u=H.v(s,0)
t=H.n(new P.i2(r,s),{func:1,ret:-1,args:[u]})
H.n(new P.i3(r,q),{func:1,ret:-1})
W.ac(s.a,s.b,t,!1,u)
return q}}
P.i2.prototype={
$1:function(a){H.y(a,H.v(this.b,0));++this.a.a},
$S:function(){return{func:1,ret:P.K,args:[H.v(this.b,0)]}}}
P.i3.prototype={
$0:function(){this.b.d4(this.a.a)},
$S:1}
P.cC.prototype={}
P.i1.prototype={}
P.b9.prototype={}
P.an.prototype={
i:function(a){return H.m(this.a)},
$ibx:1}
P.jG.prototype={$ioM:1}
P.jM.prototype={
$0:function(){var u,t=this.a,s=t.a
t=s==null?t.a=new P.dE():s
s=this.b
if(s==null)throw H.c(t)
u=H.c(t)
u.stack=s.i(0)
throw u},
$S:1}
P.jl.prototype={
jv:function(a){var u,t,s,r=null
H.n(a,{func:1,ret:-1})
try{if(C.k===$.Z){a.$0()
return}P.lB(r,r,this,a,-1)}catch(s){u=H.aG(s)
t=H.cb(s)
P.jL(r,r,this,u,H.f(t,"$ias"))}},
jw:function(a,b,c){var u,t,s,r=null
H.n(a,{func:1,ret:-1,args:[c]})
H.y(b,c)
try{if(C.k===$.Z){a.$1(b)
return}P.lC(r,r,this,a,b,-1,c)}catch(s){u=H.aG(s)
t=H.cb(s)
P.jL(r,r,this,u,H.f(t,"$ias"))}},
iM:function(a,b){return new P.jn(this,H.n(a,{func:1,ret:b}),b)},
cc:function(a){return new P.jm(this,H.n(a,{func:1,ret:-1}))},
dE:function(a,b){return new P.jo(this,H.n(a,{func:1,ret:-1,args:[b]}),b)},
ev:function(a,b){H.n(a,{func:1,ret:b})
if($.Z===C.k)return a.$0()
return P.lB(null,null,this,a,b)},
cM:function(a,b,c,d){H.n(a,{func:1,ret:c,args:[d]})
H.y(b,d)
if($.Z===C.k)return a.$1(b)
return P.lC(null,null,this,a,b,c,d)},
ju:function(a,b,c,d,e,f){H.n(a,{func:1,ret:d,args:[e,f]})
H.y(b,e)
H.y(c,f)
if($.Z===C.k)return a.$2(b,c)
return P.nF(null,null,this,a,b,c,d,e,f)}}
P.jn.prototype={
$0:function(){return this.a.ev(this.b,this.c)},
$S:function(){return{func:1,ret:this.c}}}
P.jm.prototype={
$0:function(){return this.a.jv(this.b)},
$S:3}
P.jo.prototype={
$1:function(a){var u=this.c
return this.a.jw(this.b,H.y(a,u),u)},
$S:function(){return{func:1,ret:-1,args:[this.c]}}}
P.ji.prototype={
gV:function(a){return P.ls(this,this.r,H.v(this,0))},
gk:function(a){return this.a},
h:function(a,b){var u,t,s=this
H.y(b,H.v(s,0))
if(typeof b==="string"&&b!=="__proto__"){u=s.b
return s.d2(u==null?s.b=P.kp():u,b)}else if(typeof b==="number"&&(b&1073741823)===b){t=s.c
return s.d2(t==null?s.c=P.kp():t,b)}else return s.f0(0,b)},
f0:function(a,b){var u,t,s,r=this
H.y(b,H.v(r,0))
u=r.d
if(u==null)u=r.d=P.kp()
t=r.d6(b)
s=u[t]
if(s==null)u[t]=[r.bM(b)]
else{if(r.de(s,b)>=0)return!1
s.push(r.bM(b))}return!0},
P:function(a,b){if(typeof b==="number"&&(b&1073741823)===b)return this.hG(this.c,b)
else return this.hF(0,b)},
hF:function(a,b){var u,t,s=this,r=s.d
if(r==null)return!1
u=s.fs(r,b)
t=s.de(u,b)
if(t<0)return!1
s.dw(u.splice(t,1)[0])
return!0},
d2:function(a,b){H.y(b,H.v(this,0))
if(H.f(a[b],"$icS")!=null)return!1
a[b]=this.bM(b)
return!0},
hG:function(a,b){var u
if(a==null)return!1
u=H.f(a[b],"$icS")
if(u==null)return!1
this.dw(u)
delete a[b]
return!0},
di:function(){this.r=1073741823&this.r+1},
bM:function(a){var u,t=this,s=new P.cS(H.y(a,H.v(t,0)))
if(t.e==null)t.e=t.f=s
else{u=t.f
s.c=u
t.f=u.b=s}++t.a
t.di()
return s},
dw:function(a){var u=this,t=a.c,s=a.b
if(t==null)u.e=s
else t.b=s
if(s==null)u.f=t
else s.c=t;--u.a
u.di()},
d6:function(a){return J.d6(a)&1073741823},
fs:function(a,b){return a[this.d6(b)]},
de:function(a,b){var u,t
if(a==null)return-1
u=a.length
for(t=0;t<u;++t)if(J.T(a[t].a,b))return t
return-1}}
P.cS.prototype={}
P.jj.prototype={
gJ:function(a){return this.d},
B:function(){var u=this,t=u.a
if(u.b!==t.r)throw H.c(P.bU(t))
else{t=u.c
if(t==null){u.sd3(null)
return!1}else{u.sd3(H.y(t.a,H.v(u,0)))
u.c=u.c.b
return!0}}},
sd3:function(a){this.d=H.y(a,H.v(this,0))},
$ib2:1}
P.h3.prototype={
$2:function(a,b){this.a.l(0,H.y(a,this.b),H.y(b,this.c))},
$S:6}
P.h4.prototype={$ih:1,$ib:1}
P.w.prototype={
gV:function(a){return new H.du(a,this.gk(a),[H.bL(this,a,"w",0)])},
I:function(a,b){return this.j(a,b)},
jB:function(a,b){var u,t=this,s=H.d([],[H.bL(t,a,"w",0)])
C.a.sk(s,t.gk(a))
for(u=0;u<t.gk(a);++u)C.a.l(s,u,t.j(a,u))
return s},
jA:function(a){return this.jB(a,!0)},
n:function(a,b){var u,t=this,s=[H.bL(t,a,"w",0)]
H.j(b,"$ib",s,"$ab")
u=H.d([],s)
C.a.sk(u,C.e.n(t.gk(a),b.gk(b)))
C.a.bb(u,0,t.gk(a),a)
C.a.bb(u,t.gk(a),u.length,b)
return u},
iY:function(a,b,c,d){var u
H.y(d,H.bL(this,a,"w",0))
P.bm(b,c,this.gk(a))
for(u=b;u<c;++u)this.l(a,u,d)},
i:function(a){return P.kd(a,"[","]")}}
P.h7.prototype={}
P.h8.prototype={
$2:function(a,b){var u,t=this.a
if(!t.a)this.b.a+=", "
t.a=!1
t=this.b
u=t.a+=H.m(a)
t.a=u+": "
t.a+=H.m(b)},
$S:6}
P.ag.prototype={
K:function(a,b){var u,t,s=this
H.n(b,{func:1,ret:-1,args:[H.bL(s,a,"ag",0),H.bL(s,a,"ag",1)]})
for(u=J.bN(s.gaq(a));u.B();){t=u.gJ(u)
b.$2(t,s.j(a,t))}},
gk:function(a){return J.aH(this.gaq(a))},
i:function(a){return P.ki(a)},
$iD:1}
P.jy.prototype={
l:function(a,b,c){H.y(b,H.v(this,0))
H.y(c,H.v(this,1))
throw H.c(P.E("Cannot modify unmodifiable map"))}}
P.h9.prototype={
j:function(a,b){return J.kI(this.a,b)},
l:function(a,b,c){J.k6(this.a,H.y(b,H.v(this,0)),H.y(c,H.v(this,1)))},
K:function(a,b){J.kJ(this.a,H.n(b,{func:1,ret:-1,args:[H.v(this,0),H.v(this,1)]}))},
gk:function(a){return J.aH(this.a)},
i:function(a){return J.aX(this.a)},
$iD:1}
P.e5.prototype={}
P.jp.prototype={
i:function(a){return P.kd(this,"{","}")},
I:function(a,b){var u,t,s,r=this
P.kj(b,"index")
for(u=P.ls(r,r.r,H.v(r,0)),t=0;u.B();){s=u.d
if(b===t)return s;++t}throw H.c(P.Y(b,r,"index",null,t))},
$ih:1,
$il5:1}
P.er.prototype={}
P.eT.prototype={}
P.fj.prototype={
jb:function(a,b,a0,a1){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c="Invalid base64 encoding length "
a1=P.bm(a0,a1,b.length)
u=$.md()
for(t=a0,s=t,r=null,q=-1,p=-1,o=0;t<a1;t=n){n=t+1
m=C.b.G(b,t)
if(m===37){l=n+2
if(l<=a1){k=H.jS(C.b.G(b,n))
j=H.jS(C.b.G(b,n+1))
i=k*16+j-(j&256)
if(i===37)i=-1
n=l}else i=-1}else i=m
if(0<=i&&i<=127){if(i<0||i>=u.length)return H.e(u,i)
h=u[i]
if(h>=0){i=C.b.Z("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",h)
if(i===m)continue
m=i}else{if(h===-1){if(q<0){g=r==null?null:r.a.length
if(g==null)g=0
q=g+(t-s)
p=t}++o
if(m===61)continue}m=i}if(h!==-2){if(r==null)r=new P.al("")
g=r.a+=C.b.A(b,s,t)
r.a=g+H.dH(m)
s=n
continue}}throw H.c(P.a2("Invalid base64 data",b,t))}if(r!=null){g=r.a+=C.b.A(b,s,a1)
f=g.length
if(q>=0)P.kL(b,p,a1,q,o,f)
else{e=C.e.ba(f-1,4)+1
if(e===1)throw H.c(P.a2(c,b,a1))
for(;e<4;){g+="="
r.a=g;++e}}g=r.a
return C.b.aR(b,a0,a1,g.charCodeAt(0)==0?g:g)}d=a1-a0
if(q>=0)P.kL(b,p,a1,q,o,d)
else{e=C.e.ba(d,4)
if(e===1)throw H.c(P.a2(c,b,a1))
if(e>1)b=C.b.aR(b,a1,a1,e===2?"==":"=")}return b},
$abS:function(){return[[P.b,P.o],P.i]}}
P.fk.prototype={
$abV:function(){return[[P.b,P.o],P.i]}}
P.bS.prototype={}
P.bV.prototype={}
P.fG.prototype={
$abS:function(){return[P.i,[P.b,P.o]]}}
P.iC.prototype={
giX:function(){return C.P}}
P.iE.prototype={
cj:function(a){var u,t,s=P.bm(0,null,a.length),r=s-0
if(r===0)return new Uint8Array(0)
u=new Uint8Array(r*3)
t=new P.jF(u)
if(t.fp(a,0,s)!==s)t.dA(J.ml(a,s-1),0)
return new Uint8Array(u.subarray(0,H.nz(0,t.b,u.length)))},
$abV:function(){return[P.i,[P.b,P.o]]}}
P.jF.prototype={
dA:function(a,b){var u,t=this,s=t.c,r=t.b,q=r+1,p=s.length
if((b&64512)===56320){u=65536+((a&1023)<<10)|b&1023
t.b=q
if(r>=p)return H.e(s,r)
s[r]=240|u>>>18
r=t.b=q+1
if(q>=p)return H.e(s,q)
s[q]=128|u>>>12&63
q=t.b=r+1
if(r>=p)return H.e(s,r)
s[r]=128|u>>>6&63
t.b=q+1
if(q>=p)return H.e(s,q)
s[q]=128|u&63
return!0}else{t.b=q
if(r>=p)return H.e(s,r)
s[r]=224|a>>>12
r=t.b=q+1
if(q>=p)return H.e(s,q)
s[q]=128|a>>>6&63
t.b=r+1
if(r>=p)return H.e(s,r)
s[r]=128|a&63
return!1}},
fp:function(a,b,c){var u,t,s,r,q,p,o,n=this
if(b!==c&&(C.b.Z(a,c-1)&64512)===55296)--c
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
if(q>=t)return H.e(u,q)
u[q]=192|r>>>6
n.b=o+1
u[o]=128|r&63}else{q=n.b
if(q+2>=t)break
o=n.b=q+1
if(q>=t)return H.e(u,q)
u[q]=224|r>>>12
q=n.b=o+1
if(o>=t)return H.e(u,o)
u[o]=128|r>>>6&63
n.b=q+1
if(q>=t)return H.e(u,q)
u[q]=128|r&63}}return s}}
P.iD.prototype={
cj:function(a){var u,t,s,r,q,p,o,n,m
H.j(a,"$ib",[P.o],"$ab")
u=P.n9(!1,a,0,null)
if(u!=null)return u
t=P.bm(0,null,J.aH(a))
s=P.lE(a,0,t)
if(s>0){r=P.cD(a,0,s)
if(s===t)return r
q=new P.al(r)
p=s
o=!1}else{p=0
q=null
o=!0}if(q==null)q=new P.al("")
n=new P.jE(!1,q)
n.c=o
n.iP(a,p,t)
if(n.e>0){H.r(P.a2("Unfinished UTF-8 octet sequence",a,t))
q.a+=H.dH(65533)
n.f=n.e=n.d=0}m=q.a
return m.charCodeAt(0)==0?m:m},
$abV:function(){return[[P.b,P.o],P.i]}}
P.jE.prototype={
iP:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k,j,i=this,h="Bad UTF-8 encoding 0x"
H.j(a,"$ib",[P.o],"$ab")
u=i.d
t=i.e
s=i.f
i.f=i.e=i.d=0
$label0$0:for(r=J.ca(a),q=i.b,p=b;!0;p=k){$label1$1:if(t>0){do{if(p===c)break $label0$0
o=r.j(a,p)
if(typeof o!=="number")return o.bG()
if((o&192)!==128){n=P.a2(h+C.e.b7(o,16),a,p)
throw H.c(n)}else{u=(u<<6|o&63)>>>0;--t;++p}}while(t>0)
n=s-1
if(n<0||n>=4)return H.e(C.B,n)
if(u<=C.B[n]){n=P.a2("Overlong encoding of 0x"+C.e.b7(u,16),a,p-s-1)
throw H.c(n)}if(u>1114111){n=P.a2("Character outside valid Unicode range: 0x"+C.e.b7(u,16),a,p-s-1)
throw H.c(n)}if(!i.c||u!==65279)q.a+=H.dH(u)
i.c=!1}for(n=p<c;n;){m=P.lE(a,p,c)
if(m>0){i.c=!1
l=p+m
q.a+=P.cD(a,p,l)
if(l===c)break}else l=p
k=l+1
o=r.j(a,l)
if(typeof o!=="number")return o.W()
if(o<0){j=P.a2("Negative UTF-8 code unit: -0x"+C.e.b7(-o,16),a,k-1)
throw H.c(j)}else{if((o&224)===192){u=o&31
t=1
s=1
continue $label0$0}if((o&240)===224){u=o&15
t=2
s=2
continue $label0$0}if((o&248)===240&&o<245){u=o&7
t=3
s=3
continue $label0$0}j=P.a2(h+C.e.b7(o,16),a,k-1)
throw H.c(j)}}break $label0$0}if(t>0){i.d=u
i.e=t
i.f=s}}}
P.a8.prototype={}
P.au.prototype={
u:function(a,b){if(b==null)return!1
return b instanceof P.au&&this.a===b.a&&!0},
gH:function(a){var u=this.a
return(u^C.e.aO(u,30))&1073741823},
i:function(a){var u=this,t=P.mu(H.mT(u)),s=P.de(H.mR(u)),r=P.de(H.mN(u)),q=P.de(H.mO(u)),p=P.de(H.mQ(u)),o=P.de(H.mS(u)),n=P.mv(H.mP(u)),m=t+"-"+s+"-"+r+" "+q+":"+p+":"+o+"."+n
return m}}
P.z.prototype={}
P.b1.prototype={
n:function(a,b){return new P.b1(C.e.n(this.a,b.gfh()))},
q:function(a,b){return new P.b1(C.e.q(this.a,b.gfh()))},
u:function(a,b){if(b==null)return!1
return b instanceof P.b1&&this.a===b.a},
gH:function(a){return C.e.gH(this.a)},
i:function(a){var u,t,s,r=new P.fE(),q=this.a
if(q<0)return"-"+new P.b1(0-q).i(0)
u=r.$1(C.e.a4(q,6e7)%60)
t=r.$1(C.e.a4(q,1e6)%60)
s=new P.fD().$1(q%1e6)
return""+C.e.a4(q,36e8)+":"+H.m(u)+":"+H.m(t)+"."+H.m(s)}}
P.fD.prototype={
$1:function(a){if(a>=1e5)return""+a
if(a>=1e4)return"0"+a
if(a>=1000)return"00"+a
if(a>=100)return"000"+a
if(a>=10)return"0000"+a
return"00000"+a},
$S:20}
P.fE.prototype={
$1:function(a){if(a>=10)return""+a
return"0"+a},
$S:20}
P.bx.prototype={}
P.fc.prototype={
i:function(a){return"Assertion failed"}}
P.dE.prototype={
i:function(a){return"Throw of null."}}
P.aY.prototype={
gbO:function(){return"Invalid argument"+(!this.a?"(s)":"")},
gbN:function(){return""},
i:function(a){var u,t,s,r,q=this,p=q.c,o=p!=null?" ("+p+")":""
p=q.d
u=p==null?"":": "+p
t=q.gbO()+o+u
if(!q.a)return t
s=q.gbN()
r=P.dj(q.b)
return t+s+": "+r}}
P.c1.prototype={
gbO:function(){return"RangeError"},
gbN:function(){var u,t,s=this.e
if(s==null){s=this.f
u=s!=null?": Not less than or equal to "+H.m(s):""}else{t=this.f
if(t==null)u=": Not greater than or equal to "+H.m(s)
else if(t>s)u=": Not in range "+H.m(s)+".."+H.m(t)+", inclusive"
else u=t<s?": Valid value range is empty":": Only valid value is "+H.m(s)}return u}}
P.fU.prototype={
gbO:function(){return"RangeError"},
gbN:function(){var u,t=H.ad(this.b)
if(typeof t!=="number")return t.W()
if(t<0)return": index must not be negative"
u=this.f
if(u===0)return": no indices are valid"
return": index should be less than "+H.m(u)},
gk:function(a){return this.f}}
P.iv.prototype={
i:function(a){return"Unsupported operation: "+this.a}}
P.is.prototype={
i:function(a){var u=this.a
return u!=null?"UnimplementedError: "+u:"UnimplementedError"}}
P.dR.prototype={
i:function(a){return"Bad state: "+this.a}}
P.fr.prototype={
i:function(a){var u=this.a
if(u==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+P.dj(u)+"."}}
P.hy.prototype={
i:function(a){return"Out of Memory"},
$ibx:1}
P.dQ.prototype={
i:function(a){return"Stack Overflow"},
$ibx:1}
P.fy.prototype={
i:function(a){var u=this.a
return u==null?"Reading static variable during its initialization":"Reading static variable '"+u+"' during its initialization"}}
P.ek.prototype={
i:function(a){return"Exception: "+this.a}}
P.fQ.prototype={
i:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i=this.a,h=""!==i?"FormatException: "+i:"FormatException",g=this.c,f=this.b
if(typeof f==="string"){if(g!=null)i=g<0||g>f.length
else i=!1
if(i)g=null
if(g==null){u=f.length>78?C.b.A(f,0,75)+"...":f
return h+"\n"+u}for(t=1,s=0,r=!1,q=0;q<g;++q){p=C.b.G(f,q)
if(p===10){if(s!==q||!r)++t
s=q+1
r=!1}else if(p===13){++t
s=q+1
r=!0}}h=t>1?h+(" (at line "+t+", character "+(g-s+1)+")\n"):h+(" (at character "+(g+1)+")\n")
o=f.length
for(q=g;q<o;++q){p=C.b.Z(f,q)
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
k=""}j=C.b.A(f,m,n)
return h+l+j+k+"\n"+C.b.t(" ",g-m+l.length)+"^\n"}else return g!=null?h+(" (at offset "+H.m(g)+")"):h}}
P.o.prototype={}
P.h.prototype={
gk:function(a){var u,t=this.gV(this)
for(u=0;t.B();)++u
return u},
I:function(a,b){var u,t,s
P.kj(b,"index")
for(u=this.gV(this),t=0;u.B();){s=u.gJ(u)
if(b===t)return s;++t}throw H.c(P.Y(b,this,"index",null,t))},
i:function(a){return P.mz(this,"(",")")}}
P.b2.prototype={}
P.b.prototype={$ih:1}
P.D.prototype={}
P.K.prototype={
gH:function(a){return P.P.prototype.gH.call(this,this)},
i:function(a){return"null"}}
P.aa.prototype={}
P.P.prototype={constructor:P.P,$iP:1,
u:function(a,b){return this===b},
gH:function(a){return H.cy(this)},
i:function(a){return"Instance of '"+H.c0(this)+"'"},
toString:function(){return this.i(this)}}
P.as.prototype={}
P.i.prototype={$ikZ:1}
P.al.prototype={
gk:function(a){return this.a.length},
i:function(a){var u=this.a
return u.charCodeAt(0)==0?u:u},
$ion:1}
P.iA.prototype={
$2:function(a,b){var u,t,s,r=P.i
H.j(a,"$iD",[r,r],"$aD")
H.L(b)
u=J.kA(b).ef(b,"=")
if(u===-1){if(b!=="")J.k6(a,P.kr(b,0,b.length,this.a,!0),"")}else if(u!==0){t=C.b.A(b,0,u)
s=C.b.aH(b,u+1)
r=this.a
J.k6(a,P.kr(t,0,t.length,r,!0),P.kr(s,0,s.length,r,!0))}return a},
$S:34}
P.ix.prototype={
$2:function(a,b){throw H.c(P.a2("Illegal IPv4 address, "+a,this.a,b))},
$S:39}
P.iy.prototype={
$2:function(a,b){throw H.c(P.a2("Illegal IPv6 address, "+a,this.a,b))},
$1:function(a){return this.$2(a,null)},
$S:43}
P.iz.prototype={
$2:function(a,b){var u
if(b-a>4)this.a.$2("an IPv6 part can only contain a maximum of 4 hex digits",a)
u=P.f6(C.b.A(this.b,a,b),null,16)
if(typeof u!=="number")return u.W()
if(u<0||u>65535)this.a.$2("each part must be in the range of `0x0..0xFFFF`",a)
return u},
$S:44}
P.c4.prototype={
geA:function(){return this.b},
gct:function(a){var u=this.c
if(u==null)return""
if(C.b.ad(u,"["))return C.b.A(u,1,u.length-1)
return u},
gbA:function(a){var u=this.d
if(u==null)return P.lt(this.a)
return u},
gcH:function(a){var u=this.f
return u==null?"":u},
gea:function(){var u=this.r
return u==null?"":u},
es:function(a,b){var u,t,s,r,q,p,o,n,m=this
H.j(b,"$iD",[P.i,null],"$aD")
u=m.a
t=u==="file"
s=m.b
r=m.d
q=m.c
if(!(q!=null))q=s.length!==0||r!=null||t?"":null
p=m.e
if(!t)o=q!=null&&p.length!==0
else o=!0
if(o&&!C.b.ad(p,"/"))p="/"+p
n=P.kq(null,0,0,b)
return new P.c4(u,s,q,r,p,n,m.r)},
gcI:function(){var u,t,s=this
if(s.Q==null){u=s.f
t=P.i
s.shE(new P.e5(P.lh(u==null?"":u),[t,t]))}return s.Q},
geb:function(){return this.c!=null},
gee:function(){return this.f!=null},
gec:function(){return this.r!=null},
i:function(a){var u,t,s,r=this,q=r.y
if(q==null){q=r.a
u=q.length!==0?H.m(q)+":":""
t=r.c
s=t==null
if(!s||q==="file"){q=u+"//"
u=r.b
if(u.length!==0)q=q+H.m(u)+"@"
if(!s)q+=t
u=r.d
if(u!=null)q=q+":"+H.m(u)}else q=u
q+=r.e
u=r.f
if(u!=null)q=q+"?"+u
u=r.r
if(u!=null)q=q+"#"+u
q=r.y=q.charCodeAt(0)==0?q:q}return q},
u:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!!J.W(b).$ikm)if(s.a==b.gbI())if(s.c!=null===b.geb())if(s.b==b.geA())if(s.gct(s)==b.gct(b))if(s.gbA(s)==b.gbA(b))if(s.e===b.gep(b)){u=s.f
t=u==null
if(!t===b.gee()){if(t)u=""
if(u===b.gcH(b)){u=s.r
t=u==null
if(!t===b.gec()){if(t)u=""
u=u===b.gea()}else u=!1}else u=!1}else u=!1}else u=!1
else u=!1
else u=!1
else u=!1
else u=!1
else u=!1
else u=!1
return u},
gH:function(a){var u=this.z
return u==null?this.z=C.b.gH(this.i(0)):u},
shE:function(a){var u=P.i
this.Q=H.j(a,"$iD",[u,u],"$aD")},
$ikm:1,
gbI:function(){return this.a},
gep:function(a){return this.e}}
P.jz.prototype={
$1:function(a){throw H.c(P.a2("Invalid port",this.a,this.b+1))},
$S:31}
P.jA.prototype={
$1:function(a){return P.jD(C.X,a,C.l,!1)},
$S:40}
P.jC.prototype={
$2:function(a,b){var u=this.b,t=this.a
u.a+=t.a
t.a="&"
t=u.a+=H.m(P.jD(C.r,a,C.l,!0))
if(b!=null&&b.length!==0){u.a=t+"="
u.a+=H.m(P.jD(C.r,b,C.l,!0))}},
$S:16}
P.jB.prototype={
$2:function(a,b){var u,t
H.L(a)
if(b==null||typeof b==="string")this.a.$2(a,H.L(b))
else for(u=J.bN(H.lQ(b,"$ih")),t=this.a;u.B();)t.$2(a,H.L(u.gJ(u)))},
$S:29}
P.iw.prototype={
gez:function(){var u,t,s,r,q=this,p=null,o=q.c
if(o!=null)return o
o=q.b
if(0>=o.length)return H.e(o,0)
u=q.a
o=o[0]+1
t=C.b.eg(u,"?",o)
s=u.length
if(t>=0){r=P.d1(u,t+1,s,C.p,!1)
s=t}else r=p
return q.c=new P.j2("data",p,p,p,P.d1(u,o,s,C.D,!1),r,p)},
i:function(a){var u,t=this.b
if(0>=t.length)return H.e(t,0)
u=this.a
return t[0]===-1?"data:"+u:u}}
P.jI.prototype={
$1:function(a){return new Uint8Array(96)},
$S:30}
P.jH.prototype={
$2:function(a,b){var u=this.a
if(a>=u.length)return H.e(u,a)
u=u[a]
J.mm(u,0,96,b)
return u},
$S:32}
P.jJ.prototype={
$3:function(a,b,c){var u,t,s,r
for(u=b.length,t=a.length,s=0;s<u;++s){r=C.b.G(b,s)^96
if(r>=t)return H.e(a,r)
a[r]=c}}}
P.jK.prototype={
$3:function(a,b,c){var u,t,s,r
for(u=C.b.G(b,0),t=C.b.G(b,1),s=a.length;u<=t;++u){r=(u^96)>>>0
if(r>=s)return H.e(a,r)
a[r]=c}}}
P.jq.prototype={
geb:function(){return this.c>0},
ged:function(){var u,t
if(this.c>0){u=this.d
if(typeof u!=="number")return u.n()
t=this.e
if(typeof t!=="number")return H.B(t)
t=u+1<t
u=t}else u=!1
return u},
gee:function(){var u=this.f
if(typeof u!=="number")return u.W()
return u<this.r},
gec:function(){return this.r<this.a.length},
gdg:function(){return this.b===4&&C.b.ad(this.a,"http")},
gdh:function(){return this.b===5&&C.b.ad(this.a,"https")},
gbI:function(){var u,t=this,s="file",r="package",q=t.b
if(q<=0)return""
u=t.x
if(u!=null)return u
if(t.gdg())q=t.x="http"
else if(t.gdh()){t.x="https"
q="https"}else if(q===4&&C.b.ad(t.a,s)){t.x=s
q=s}else if(q===7&&C.b.ad(t.a,r)){t.x=r
q=r}else{q=C.b.A(t.a,0,q)
t.x=q}return q},
geA:function(){var u=this.c,t=this.b+3
return u>t?C.b.A(this.a,t,u-1):""},
gct:function(a){var u=this.c
return u>0?C.b.A(this.a,u,this.d):""},
gbA:function(a){var u,t=this
if(t.ged()){u=t.d
if(typeof u!=="number")return u.n()
return P.f6(C.b.A(t.a,u+1,t.e),null,null)}if(t.gdg())return 80
if(t.gdh())return 443
return 0},
gep:function(a){return C.b.A(this.a,this.e,this.f)},
gcH:function(a){var u=this.f,t=this.r
if(typeof u!=="number")return u.W()
return u<t?C.b.A(this.a,u+1,t):""},
gea:function(){var u=this.r,t=this.a
return u<t.length?C.b.aH(t,u+1):""},
gcI:function(){var u=this,t=u.f
if(typeof t!=="number")return t.W()
if(t>=u.r)return C.Y
t=P.i
return new P.e5(P.lh(u.gcH(u)),[t,t])},
es:function(a,b){var u,t,s,r,q,p,o,n,m,l,k=this,j=null
H.j(b,"$iD",[P.i,null],"$aD")
u=k.gbI()
t=u==="file"
s=k.c
r=s>0?C.b.A(k.a,k.b+3,s):""
q=k.ged()?k.gbA(k):j
s=k.c
if(s>0)p=C.b.A(k.a,s,k.d)
else p=r.length!==0||q!=null||t?"":j
s=k.a
o=C.b.A(s,k.e,k.f)
if(!t)n=p!=null&&o.length!==0
else n=!0
if(n&&!C.b.ad(o,"/"))o="/"+o
m=P.kq(j,0,0,b)
n=k.r
l=n<s.length?C.b.aH(s,n+1):j
return new P.c4(u,r,p,q,o,m,l)},
gH:function(a){var u=this.y
return u==null?this.y=C.b.gH(this.a):u},
u:function(a,b){if(b==null)return!1
if(this===b)return!0
return!!J.W(b).$ikm&&this.a===b.i(0)},
i:function(a){return this.a},
$ikm:1}
P.j2.prototype={}
W.u.prototype={}
W.f7.prototype={
gk:function(a){return a.length}}
W.f9.prototype={
i:function(a){return String(a)}}
W.fa.prototype={
i:function(a){return String(a)}}
W.bP.prototype={$ibP:1}
W.bR.prototype={
eB:function(a,b,c){var u=a.getContext(b,P.nN(c))
return u},
$ibR:1}
W.bu.prototype={
gk:function(a){return a.length}}
W.cj.prototype={$icj:1}
W.fu.prototype={
gk:function(a){return a.length}}
W.U.prototype={$iU:1}
W.ck.prototype={
gk:function(a){return a.length}}
W.fv.prototype={}
W.b_.prototype={}
W.b0.prototype={}
W.fw.prototype={
gk:function(a){return a.length}}
W.fx.prototype={
gk:function(a){return a.length}}
W.fz.prototype={
gk:function(a){return a.length}}
W.df.prototype={$idf:1}
W.fA.prototype={
i:function(a){return String(a)}}
W.dg.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.Y(b,a,null,null,null))
return a[b]},
l:function(a,b,c){H.j(c,"$iaj",[P.aa],"$aaj")
throw H.c(P.E("Cannot assign element of immutable List."))},
I:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$iI:1,
$aI:function(){return[[P.aj,P.aa]]},
$aw:function(){return[[P.aj,P.aa]]},
$ih:1,
$ah:function(){return[[P.aj,P.aa]]},
$ib:1,
$ab:function(){return[[P.aj,P.aa]]},
$aC:function(){return[[P.aj,P.aa]]}}
W.dh.prototype={
i:function(a){return"Rectangle ("+H.m(a.left)+", "+H.m(a.top)+") "+H.m(this.gai(a))+" x "+H.m(this.gag(a))},
u:function(a,b){var u
if(b==null)return!1
u=J.W(b)
if(!u.$iaj)return!1
return a.left===u.gby(b)&&a.top===u.gbD(b)&&this.gai(a)===u.gai(b)&&this.gag(a)===u.gag(b)},
gH:function(a){return W.lr(C.f.gH(a.left),C.f.gH(a.top),C.f.gH(this.gai(a)),C.f.gH(this.gag(a)))},
gdF:function(a){return a.bottom},
gag:function(a){return a.height},
gby:function(a){return a.left},
gbC:function(a){return a.right},
gbD:function(a){return a.top},
gai:function(a){return a.width},
$iaj:1,
$aaj:function(){return[P.aa]}}
W.fB.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.Y(b,a,null,null,null))
return a[b]},
l:function(a,b,c){H.L(c)
throw H.c(P.E("Cannot assign element of immutable List."))},
I:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$iI:1,
$aI:function(){return[P.i]},
$aw:function(){return[P.i]},
$ih:1,
$ah:function(){return[P.i]},
$ib:1,
$ab:function(){return[P.i]},
$aC:function(){return[P.i]}}
W.fC.prototype={
gk:function(a){return a.length}}
W.j0.prototype={
gk:function(a){return this.b.length},
j:function(a,b){var u=this.b
if(b<0||b>=u.length)return H.e(u,b)
return H.f(u[b],"$ia1")},
l:function(a,b,c){var u
H.f(c,"$ia1")
u=this.b
if(b<0||b>=u.length)return H.e(u,b)
this.a.replaceChild(c,u[b])},
h:function(a,b){this.a.appendChild(b)
return b},
gV:function(a){var u=this.jA(this)
return new J.ar(u,u.length,[H.v(u,0)])},
$aw:function(){return[W.a1]},
$ah:function(){return[W.a1]},
$ab:function(){return[W.a1]}}
W.a1.prototype={
gci:function(a){return new W.j0(a,a.children)},
gdI:function(a){var u=a.clientLeft,t=a.clientTop,s=a.clientWidth,r=a.clientHeight
if(typeof s!=="number")return s.W()
if(s<0)s=-s*0
if(typeof r!=="number")return r.W()
if(r<0)r=-r*0
return new P.aj(u,t,s,r,[P.aa])},
i:function(a){return a.localName},
$ia1:1}
W.p.prototype={$ip:1}
W.k.prototype={
iH:function(a,b,c,d){H.n(c,{func:1,args:[W.p]})
if(c!=null)this.f1(a,b,c,!1)},
f1:function(a,b,c,d){return a.addEventListener(b,H.c7(H.n(c,{func:1,args:[W.p]}),1),!1)},
$ik:1}
W.aA.prototype={$iaA:1}
W.cl.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.Y(b,a,null,null,null))
return a[b]},
l:function(a,b,c){H.f(c,"$iaA")
throw H.c(P.E("Cannot assign element of immutable List."))},
I:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$iI:1,
$aI:function(){return[W.aA]},
$aw:function(){return[W.aA]},
$ih:1,
$ah:function(){return[W.aA]},
$ib:1,
$ab:function(){return[W.aA]},
$icl:1,
$aC:function(){return[W.aA]}}
W.fL.prototype={
gk:function(a){return a.length}}
W.fP.prototype={
gk:function(a){return a.length}}
W.aI.prototype={$iaI:1}
W.fS.prototype={
gk:function(a){return a.length}}
W.bX.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.Y(b,a,null,null,null))
return a[b]},
l:function(a,b,c){H.f(c,"$iG")
throw H.c(P.E("Cannot assign element of immutable List."))},
I:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$iI:1,
$aI:function(){return[W.G]},
$aw:function(){return[W.G]},
$ih:1,
$ah:function(){return[W.G]},
$ib:1,
$ab:function(){return[W.G]},
$ibX:1,
$aC:function(){return[W.G]}}
W.co.prototype={$ico:1}
W.cp.prototype={$icp:1}
W.b3.prototype={$ib3:1}
W.h5.prototype={
i:function(a){return String(a)}}
W.hi.prototype={
gk:function(a){return a.length}}
W.cr.prototype={$icr:1}
W.hj.prototype={
j:function(a,b){return P.bo(a.get(H.L(b)))},
K:function(a,b){var u,t
H.n(b,{func:1,ret:-1,args:[P.i,,]})
u=a.entries()
for(;!0;){t=u.next()
if(t.done)return
b.$2(t.value[0],P.bo(t.value[1]))}},
gaq:function(a){var u=H.d([],[P.i])
this.K(a,new W.hk(u))
return u},
gk:function(a){return a.size},
l:function(a,b,c){throw H.c(P.E("Not supported"))},
$aag:function(){return[P.i,null]},
$iD:1,
$aD:function(){return[P.i,null]}}
W.hk.prototype={
$2:function(a,b){return C.a.h(this.a,a)},
$S:7}
W.hl.prototype={
j:function(a,b){return P.bo(a.get(H.L(b)))},
K:function(a,b){var u,t
H.n(b,{func:1,ret:-1,args:[P.i,,]})
u=a.entries()
for(;!0;){t=u.next()
if(t.done)return
b.$2(t.value[0],P.bo(t.value[1]))}},
gaq:function(a){var u=H.d([],[P.i])
this.K(a,new W.hm(u))
return u},
gk:function(a){return a.size},
l:function(a,b,c){throw H.c(P.E("Not supported"))},
$aag:function(){return[P.i,null]},
$iD:1,
$aD:function(){return[P.i,null]}}
W.hm.prototype={
$2:function(a,b){return C.a.h(this.a,a)},
$S:7}
W.aM.prototype={$iaM:1}
W.hn.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.Y(b,a,null,null,null))
return a[b]},
l:function(a,b,c){H.f(c,"$iaM")
throw H.c(P.E("Cannot assign element of immutable List."))},
I:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$iI:1,
$aI:function(){return[W.aM]},
$aw:function(){return[W.aM]},
$ih:1,
$ah:function(){return[W.aM]},
$ib:1,
$ab:function(){return[W.aM]},
$aC:function(){return[W.aM]}}
W.ae.prototype={$iae:1}
W.j_.prototype={
l:function(a,b,c){var u,t
H.f(c,"$iG")
u=this.a
t=u.childNodes
if(b<0||b>=t.length)return H.e(t,b)
u.replaceChild(c,t[b])},
gV:function(a){var u=this.a.childNodes
return new W.dl(u,u.length,[H.bL(C.Z,u,"C",0)])},
gk:function(a){return this.a.childNodes.length},
j:function(a,b){var u=this.a.childNodes
if(b<0||b>=u.length)return H.e(u,b)
return u[b]},
$aw:function(){return[W.G]},
$ah:function(){return[W.G]},
$ab:function(){return[W.G]}}
W.G.prototype={
js:function(a,b){var u,t
try{u=a.parentNode
J.mj(u,b,a)}catch(t){H.aG(t)}return a},
i:function(a){var u=a.nodeValue
return u==null?this.eE(a):u},
hL:function(a,b,c){return a.replaceChild(b,c)},
$iG:1}
W.cw.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.Y(b,a,null,null,null))
return a[b]},
l:function(a,b,c){H.f(c,"$iG")
throw H.c(P.E("Cannot assign element of immutable List."))},
I:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$iI:1,
$aI:function(){return[W.G]},
$aw:function(){return[W.G]},
$ih:1,
$ah:function(){return[W.G]},
$ib:1,
$ab:function(){return[W.G]},
$aC:function(){return[W.G]}}
W.aN.prototype={$iaN:1,
gk:function(a){return a.length}}
W.hA.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.Y(b,a,null,null,null))
return a[b]},
l:function(a,b,c){H.f(c,"$iaN")
throw H.c(P.E("Cannot assign element of immutable List."))},
I:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$iI:1,
$aI:function(){return[W.aN]},
$aw:function(){return[W.aN]},
$ih:1,
$ah:function(){return[W.aN]},
$ib:1,
$ab:function(){return[W.aN]},
$aC:function(){return[W.aN]}}
W.hJ.prototype={
j:function(a,b){return P.bo(a.get(H.L(b)))},
K:function(a,b){var u,t
H.n(b,{func:1,ret:-1,args:[P.i,,]})
u=a.entries()
for(;!0;){t=u.next()
if(t.done)return
b.$2(t.value[0],P.bo(t.value[1]))}},
gaq:function(a){var u=H.d([],[P.i])
this.K(a,new W.hK(u))
return u},
gk:function(a){return a.size},
l:function(a,b,c){throw H.c(P.E("Not supported"))},
$aag:function(){return[P.i,null]},
$iD:1,
$aD:function(){return[P.i,null]}}
W.hK.prototype={
$2:function(a,b){return C.a.h(this.a,a)},
$S:7}
W.hM.prototype={
gk:function(a){return a.length}}
W.aO.prototype={$iaO:1}
W.hV.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.Y(b,a,null,null,null))
return a[b]},
l:function(a,b,c){H.f(c,"$iaO")
throw H.c(P.E("Cannot assign element of immutable List."))},
I:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$iI:1,
$aI:function(){return[W.aO]},
$aw:function(){return[W.aO]},
$ih:1,
$ah:function(){return[W.aO]},
$ib:1,
$ab:function(){return[W.aO]},
$aC:function(){return[W.aO]}}
W.aP.prototype={$iaP:1}
W.hW.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.Y(b,a,null,null,null))
return a[b]},
l:function(a,b,c){H.f(c,"$iaP")
throw H.c(P.E("Cannot assign element of immutable List."))},
I:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$iI:1,
$aI:function(){return[W.aP]},
$aw:function(){return[W.aP]},
$ih:1,
$ah:function(){return[W.aP]},
$ib:1,
$ab:function(){return[W.aP]},
$aC:function(){return[W.aP]}}
W.aQ.prototype={$iaQ:1,
gk:function(a){return a.length}}
W.hZ.prototype={
j:function(a,b){return a.getItem(H.L(b))},
l:function(a,b,c){a.setItem(b,c)},
K:function(a,b){var u,t
H.n(b,{func:1,ret:-1,args:[P.i,P.i]})
for(u=0;!0;++u){t=a.key(u)
if(t==null)return
b.$2(t,a.getItem(t))}},
gaq:function(a){var u=H.d([],[P.i])
this.K(a,new W.i_(u))
return u},
gk:function(a){return a.length},
$aag:function(){return[P.i,P.i]},
$iD:1,
$aD:function(){return[P.i,P.i]}}
W.i_.prototype={
$2:function(a,b){return C.a.h(this.a,a)},
$S:16}
W.aB.prototype={$iaB:1}
W.bn.prototype={$ibn:1}
W.aR.prototype={$iaR:1}
W.aC.prototype={$iaC:1}
W.i6.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.Y(b,a,null,null,null))
return a[b]},
l:function(a,b,c){H.f(c,"$iaC")
throw H.c(P.E("Cannot assign element of immutable List."))},
I:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$iI:1,
$aI:function(){return[W.aC]},
$aw:function(){return[W.aC]},
$ih:1,
$ah:function(){return[W.aC]},
$ib:1,
$ab:function(){return[W.aC]},
$aC:function(){return[W.aC]}}
W.i7.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.Y(b,a,null,null,null))
return a[b]},
l:function(a,b,c){H.f(c,"$iaR")
throw H.c(P.E("Cannot assign element of immutable List."))},
I:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$iI:1,
$aI:function(){return[W.aR]},
$aw:function(){return[W.aR]},
$ih:1,
$ah:function(){return[W.aR]},
$ib:1,
$ab:function(){return[W.aR]},
$aC:function(){return[W.aR]}}
W.ia.prototype={
gk:function(a){return a.length}}
W.aT.prototype={$iaT:1}
W.aU.prototype={$iaU:1}
W.id.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.Y(b,a,null,null,null))
return a[b]},
l:function(a,b,c){H.f(c,"$iaT")
throw H.c(P.E("Cannot assign element of immutable List."))},
I:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$iI:1,
$aI:function(){return[W.aT]},
$aw:function(){return[W.aT]},
$ih:1,
$ah:function(){return[W.aT]},
$ib:1,
$ab:function(){return[W.aT]},
$aC:function(){return[W.aT]}}
W.ie.prototype={
gk:function(a){return a.length}}
W.bH.prototype={}
W.iB.prototype={
i:function(a){return String(a)}}
W.iS.prototype={
gk:function(a){return a.length}}
W.bd.prototype={
giT:function(a){if(a.deltaY!==undefined)return a.deltaY
throw H.c(P.E("deltaY is not supported"))},
giS:function(a){if(a.deltaX!==undefined)return a.deltaX
throw H.c(P.E("deltaX is not supported"))},
$ibd:1}
W.cQ.prototype={
hM:function(a,b){return a.requestAnimationFrame(H.c7(H.n(b,{func:1,ret:-1,args:[P.aa]}),1))},
fi:function(a){if(!!(a.requestAnimationFrame&&a.cancelAnimationFrame))return;(function(b){var u=['ms','moz','webkit','o']
for(var t=0;t<u.length&&!b.requestAnimationFrame;++t){b.requestAnimationFrame=b[u[t]+'RequestAnimationFrame']
b.cancelAnimationFrame=b[u[t]+'CancelAnimationFrame']||b[u[t]+'CancelRequestAnimationFrame']}if(b.requestAnimationFrame&&b.cancelAnimationFrame)return
b.requestAnimationFrame=function(c){return window.setTimeout(function(){c(Date.now())},16)}
b.cancelAnimationFrame=function(c){clearTimeout(c)}})(a)}}
W.j1.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.Y(b,a,null,null,null))
return a[b]},
l:function(a,b,c){H.f(c,"$iU")
throw H.c(P.E("Cannot assign element of immutable List."))},
I:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$iI:1,
$aI:function(){return[W.U]},
$aw:function(){return[W.U]},
$ih:1,
$ah:function(){return[W.U]},
$ib:1,
$ab:function(){return[W.U]},
$aC:function(){return[W.U]}}
W.ef.prototype={
i:function(a){return"Rectangle ("+H.m(a.left)+", "+H.m(a.top)+") "+H.m(a.width)+" x "+H.m(a.height)},
u:function(a,b){var u
if(b==null)return!1
u=J.W(b)
if(!u.$iaj)return!1
return a.left===u.gby(b)&&a.top===u.gbD(b)&&a.width===u.gai(b)&&a.height===u.gag(b)},
gH:function(a){return W.lr(C.f.gH(a.left),C.f.gH(a.top),C.f.gH(a.width),C.f.gH(a.height))},
gag:function(a){return a.height},
gai:function(a){return a.width}}
W.jf.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.Y(b,a,null,null,null))
return a[b]},
l:function(a,b,c){H.f(c,"$iaI")
throw H.c(P.E("Cannot assign element of immutable List."))},
I:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$iI:1,
$aI:function(){return[W.aI]},
$aw:function(){return[W.aI]},
$ih:1,
$ah:function(){return[W.aI]},
$ib:1,
$ab:function(){return[W.aI]},
$aC:function(){return[W.aI]}}
W.ew.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.Y(b,a,null,null,null))
return a[b]},
l:function(a,b,c){H.f(c,"$iG")
throw H.c(P.E("Cannot assign element of immutable List."))},
I:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$iI:1,
$aI:function(){return[W.G]},
$aw:function(){return[W.G]},
$ih:1,
$ah:function(){return[W.G]},
$ib:1,
$ab:function(){return[W.G]},
$aC:function(){return[W.G]}}
W.jr.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.Y(b,a,null,null,null))
return a[b]},
l:function(a,b,c){H.f(c,"$iaQ")
throw H.c(P.E("Cannot assign element of immutable List."))},
I:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$iI:1,
$aI:function(){return[W.aQ]},
$aw:function(){return[W.aQ]},
$ih:1,
$ah:function(){return[W.aQ]},
$ib:1,
$ab:function(){return[W.aQ]},
$aC:function(){return[W.aQ]}}
W.jv.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.Y(b,a,null,null,null))
return a[b]},
l:function(a,b,c){H.f(c,"$iaB")
throw H.c(P.E("Cannot assign element of immutable List."))},
I:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$iI:1,
$aI:function(){return[W.aB]},
$aw:function(){return[W.aB]},
$ih:1,
$ah:function(){return[W.aB]},
$ib:1,
$ab:function(){return[W.aB]},
$aC:function(){return[W.aB]}}
W.j3.prototype={}
W.ko.prototype={}
W.j4.prototype={}
W.j5.prototype={
$1:function(a){return this.a.$1(H.f(a,"$ip"))},
$S:36}
W.C.prototype={
gV:function(a){return new W.dl(a,this.gk(a),[H.bL(this,a,"C",0)])}}
W.dl.prototype={
B:function(){var u=this,t=u.c+1,s=u.b
if(t<s){u.sdf(J.kI(u.a,t))
u.c=t
return!0}u.sdf(null)
u.c=s
return!1},
gJ:function(a){return this.d},
sdf:function(a){this.d=H.y(a,H.v(this,0))},
$ib2:1}
W.ee.prototype={}
W.eg.prototype={}
W.eh.prototype={}
W.ei.prototype={}
W.ej.prototype={}
W.el.prototype={}
W.em.prototype={}
W.en.prototype={}
W.eo.prototype={}
W.es.prototype={}
W.et.prototype={}
W.eu.prototype={}
W.ev.prototype={}
W.ex.prototype={}
W.ey.prototype={}
W.eB.prototype={}
W.eC.prototype={}
W.eD.prototype={}
W.cX.prototype={}
W.cY.prototype={}
W.eE.prototype={}
W.eF.prototype={}
W.eJ.prototype={}
W.eM.prototype={}
W.eN.prototype={}
W.cZ.prototype={}
W.d_.prototype={}
W.eP.prototype={}
W.eQ.prototype={}
W.eU.prototype={}
W.eV.prototype={}
W.eW.prototype={}
W.eX.prototype={}
W.eY.prototype={}
W.eZ.prototype={}
W.f_.prototype={}
W.f0.prototype={}
W.f1.prototype={}
W.f2.prototype={}
P.js.prototype={
e9:function(a){var u,t=this.a,s=t.length
for(u=0;u<s;++u)if(t[u]===a)return u
C.a.h(t,a)
C.a.h(this.b,null)
return s},
cP:function(a){var u,t,s,r,q=this,p={}
if(a==null)return a
if(typeof a==="boolean")return a
if(typeof a==="number")return a
if(typeof a==="string")return a
u=J.W(a)
if(!!u.$iau)return new Date(a.a)
if(!!u.$imX)throw H.c(P.it("structured clone of RegExp"))
if(!!u.$iaA)return a
if(!!u.$ibP)return a
if(!!u.$icl)return a
if(!!u.$ico)return a
if(!!u.$ict||!!u.$ibE||!!u.$icr)return a
if(!!u.$iD){t=q.e9(a)
s=q.b
if(t>=s.length)return H.e(s,t)
r=p.a=s[t]
if(r!=null)return r
r={}
p.a=r
C.a.l(s,t,r)
u.K(a,new P.ju(p,q))
return p.a}if(!!u.$ib){t=q.e9(a)
p=q.b
if(t>=p.length)return H.e(p,t)
r=p[t]
if(r!=null)return r
return q.iQ(a,t)}throw H.c(P.it("structured clone of other type"))},
iQ:function(a,b){var u,t=J.ca(a),s=t.gk(a),r=new Array(s)
C.a.l(this.b,b,r)
for(u=0;u<s;++u)C.a.l(r,u,this.cP(t.j(a,u)))
return r}}
P.ju.prototype={
$2:function(a,b){this.a.a[a]=this.b.cP(b)},
$S:6}
P.jO.prototype={
$2:function(a,b){this.a[a]=b},
$S:6}
P.jt.prototype={}
P.fM.prototype={
gbe:function(){var u=this.b,t=H.az(u,"w",0),s=W.a1
return new H.ha(new H.iT(u,H.n(new P.fN(),{func:1,ret:P.a8,args:[t]}),[t]),H.n(new P.fO(),{func:1,ret:s,args:[t]}),[t,s])},
l:function(a,b,c){var u
H.f(c,"$ia1")
u=this.gbe()
J.mn(u.b.$1(J.k7(u.a,b)),c)},
h:function(a,b){this.b.a.appendChild(b)},
gk:function(a){return J.aH(this.gbe().a)},
j:function(a,b){var u=this.gbe()
return u.b.$1(J.k7(u.a,b))},
gV:function(a){var u=P.kW(this.gbe(),!1,W.a1)
return new J.ar(u,u.length,[H.v(u,0)])},
$aw:function(){return[W.a1]},
$ah:function(){return[W.a1]},
$ab:function(){return[W.a1]}}
P.fN.prototype={
$1:function(a){return!!J.W(H.f(a,"$iG")).$ia1},
$S:37}
P.fO.prototype={
$1:function(a){return H.l(H.f(a,"$iG"),"$ia1")},
$S:38}
P.jk.prototype={
gbC:function(a){var u=this.a,t=this.c
if(typeof u!=="number")return u.n()
if(typeof t!=="number")return H.B(t)
return H.y(u+t,H.v(this,0))},
gdF:function(a){var u=this.b,t=this.d
if(typeof u!=="number")return u.n()
if(typeof t!=="number")return H.B(t)
return H.y(u+t,H.v(this,0))},
i:function(a){var u=this
return"Rectangle ("+H.m(u.a)+", "+H.m(u.b)+") "+H.m(u.c)+" x "+H.m(u.d)},
u:function(a,b){var u,t,s,r,q,p=this
if(b==null)return!1
u=J.W(b)
if(!!u.$iaj){t=p.a
if(t==u.gby(b)){s=p.b
if(s==u.gbD(b)){r=p.c
if(typeof t!=="number")return t.n()
if(typeof r!=="number")return H.B(r)
q=H.v(p,0)
if(H.y(t+r,q)===u.gbC(b)){t=p.d
if(typeof s!=="number")return s.n()
if(typeof t!=="number")return H.B(t)
u=H.y(s+t,q)===u.gdF(b)}else u=!1}else u=!1}else u=!1}else u=!1
return u},
gH:function(a){var u,t=this,s=t.a,r=J.d6(s),q=t.b,p=J.d6(q),o=t.c
if(typeof s!=="number")return s.n()
if(typeof o!=="number")return H.B(o)
u=H.v(t,0)
o=C.e.gH(H.y(s+o,u))
s=t.d
if(typeof q!=="number")return q.n()
if(typeof s!=="number")return H.B(s)
u=C.e.gH(H.y(q+s,u))
return P.nj(P.jh(P.jh(P.jh(P.jh(0,r),p),o),u))}}
P.aj.prototype={
gby:function(a){return this.a},
gbD:function(a){return this.b},
gai:function(a){return this.c},
gag:function(a){return this.d}}
P.b4.prototype={$ib4:1}
P.fZ.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.Y(b,a,null,null,null))
return a.getItem(b)},
l:function(a,b,c){H.f(c,"$ib4")
throw H.c(P.E("Cannot assign element of immutable List."))},
I:function(a,b){return this.j(a,b)},
$aw:function(){return[P.b4]},
$ih:1,
$ah:function(){return[P.b4]},
$ib:1,
$ab:function(){return[P.b4]},
$aC:function(){return[P.b4]}}
P.b7.prototype={$ib7:1}
P.hw.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.Y(b,a,null,null,null))
return a.getItem(b)},
l:function(a,b,c){H.f(c,"$ib7")
throw H.c(P.E("Cannot assign element of immutable List."))},
I:function(a,b){return this.j(a,b)},
$aw:function(){return[P.b7]},
$ih:1,
$ah:function(){return[P.b7]},
$ib:1,
$ab:function(){return[P.b7]},
$aC:function(){return[P.b7]}}
P.hC.prototype={
gk:function(a){return a.length}}
P.i4.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.Y(b,a,null,null,null))
return a.getItem(b)},
l:function(a,b,c){H.L(c)
throw H.c(P.E("Cannot assign element of immutable List."))},
I:function(a,b){return this.j(a,b)},
$aw:function(){return[P.i]},
$ih:1,
$ah:function(){return[P.i]},
$ib:1,
$ab:function(){return[P.i]},
$aC:function(){return[P.i]}}
P.q.prototype={
gci:function(a){return new P.fM(a,new W.j_(a))}}
P.ba.prototype={$iba:1}
P.ig.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.Y(b,a,null,null,null))
return a.getItem(b)},
l:function(a,b,c){H.f(c,"$iba")
throw H.c(P.E("Cannot assign element of immutable List."))},
I:function(a,b){return this.j(a,b)},
$aw:function(){return[P.ba]},
$ih:1,
$ah:function(){return[P.ba]},
$ib:1,
$ab:function(){return[P.ba]},
$aC:function(){return[P.ba]}}
P.ep.prototype={}
P.eq.prototype={}
P.ez.prototype={}
P.eA.prototype={}
P.eK.prototype={}
P.eL.prototype={}
P.eR.prototype={}
P.eS.prototype={}
P.Q.prototype={$ih:1,
$ah:function(){return[P.o]},
$ib:1,
$ab:function(){return[P.o]},
$in6:1}
P.fe.prototype={
gk:function(a){return a.length}}
P.ff.prototype={
j:function(a,b){return P.bo(a.get(H.L(b)))},
K:function(a,b){var u,t
H.n(b,{func:1,ret:-1,args:[P.i,,]})
u=a.entries()
for(;!0;){t=u.next()
if(t.done)return
b.$2(t.value[0],P.bo(t.value[1]))}},
gaq:function(a){var u=H.d([],[P.i])
this.K(a,new P.fg(u))
return u},
gk:function(a){return a.size},
l:function(a,b,c){throw H.c(P.E("Not supported"))},
$aag:function(){return[P.i,null]},
$iD:1,
$aD:function(){return[P.i,null]}}
P.fg.prototype={
$2:function(a,b){return C.a.h(this.a,a)},
$S:7}
P.fh.prototype={
gk:function(a){return a.length}}
P.bO.prototype={}
P.hx.prototype={
gk:function(a){return a.length}}
P.ed.prototype={}
P.d8.prototype={$id8:1}
P.dm.prototype={$idm:1}
P.dI.prototype={$idI:1}
P.dM.prototype={$idM:1}
P.c2.prototype={
jx:function(a,b,c,d,e,f,g,h,i,j){a.texImage2D(b,c,d,e,f,g,h,i,j)
return},
M:function(a,b,c){return a.uniform1f(b,c)},
a1:function(a,b,c){return a.uniform1i(b,c)},
bE:function(a,b,c,d){return a.uniform2f(b,c,d)},
v:function(a,b,c,d,e){return a.uniform3f(b,c,d,e)},
jD:function(a,b,c,d,e,f){return a.uniform4f(b,c,d,e,f)},
ey:function(a,b,c,d){return a.uniformMatrix3fv(b,!1,d)},
cO:function(a,b,c,d){return a.uniformMatrix4fv(b,!1,d)},
$ic2:1}
P.dN.prototype={$idN:1}
P.dS.prototype={$idS:1}
P.e3.prototype={$ie3:1}
P.hX.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.Y(b,a,null,null,null))
return P.bo(a.item(b))},
l:function(a,b,c){H.f(c,"$iD")
throw H.c(P.E("Cannot assign element of immutable List."))},
I:function(a,b){return this.j(a,b)},
$aw:function(){return[[P.D,,,]]},
$ih:1,
$ah:function(){return[[P.D,,,]]},
$ib:1,
$ab:function(){return[[P.D,,,]]},
$aC:function(){return[[P.D,,,]]}}
P.eG.prototype={}
P.eH.prototype={}
O.X.prototype={
bc:function(a){var u=this
u.sfA(H.d([],[a]))
u.sdm(null)
u.sdj(null)
u.sdn(null)},
cS:function(a,b,c){var u=this,t=H.az(u,"X",0)
H.n(b,{func:1,ret:P.a8,args:[[P.h,t]]})
t={func:1,ret:-1,args:[P.o,[P.h,t]]}
H.n(a,t)
H.n(c,t)
u.sdm(b)
u.sdj(a)
u.sdn(c)},
aG:function(a,b){return this.cS(a,null,b)},
c0:function(a){var u
H.j(a,"$ih",[H.az(this,"X",0)],"$ah")
u=this.b
if(u!=null)return u.$1(a)
return!0},
cW:function(a,b){var u
H.j(b,"$ih",[H.az(this,"X",0)],"$ah")
u=this.c
if(u!=null)u.$2(a,b)},
gk:function(a){return this.a.length},
gV:function(a){var u=this.a
return new J.ar(u,u.length,[H.v(u,0)])},
I:function(a,b){var u=this.a
if(b<0||b>=u.length)return H.e(u,b)
return u[b]},
h:function(a,b){var u,t,s=this,r=H.az(s,"X",0)
H.y(b,r)
r=[r]
if(H.A(s.c0(H.d([b],r)))){u=s.a
t=u.length
C.a.h(u,b)
s.cW(t,H.d([b],r))}},
c8:function(a,b){var u,t,s=this
H.j(b,"$ih",[H.az(s,"X",0)],"$ah")
if(H.A(s.c0(b))){u=s.a
t=u.length
C.a.c8(u,b)
s.cW(t,b)}},
sfA:function(a){this.a=H.j(a,"$ib",[H.az(this,"X",0)],"$ab")},
sdm:function(a){this.b=H.n(a,{func:1,ret:P.a8,args:[[P.h,H.az(this,"X",0)]]})},
sdj:function(a){this.c=H.n(a,{func:1,ret:-1,args:[P.o,[P.h,H.az(this,"X",0)]]})},
sdn:function(a){H.n(a,{func:1,ret:-1,args:[P.o,[P.h,H.az(this,"X",0)]]})},
$ih:1}
O.cq.prototype={
gk:function(a){return this.a.length},
gp:function(){var u=this.b
return u==null?this.b=D.M():u},
aI:function(){var u=this.b
if(u!=null)u.F(null)},
ga2:function(a){var u=this.a
if(u.length>0)return C.a.gaD(u)
else return V.bD()},
bB:function(a){var u=this.a
if(a==null)C.a.h(u,V.bD())
else C.a.h(u,a)
this.aI()},
b3:function(){var u=this.a
if(u.length>0){u.pop()
this.aI()}},
sbR:function(a){this.a=H.j(a,"$ib",[V.ah],"$ab")}}
E.fl.prototype={}
E.ao.prototype={
sbJ:function(a,b){var u,t,s=this,r=s.c
if(r!=b){s.d=s.c=b
s.e=null
if(r!=null)r.gp().P(0,s.gen())
u=s.c
if(u!=null)u.gp().h(0,s.gen())
t=new D.F("shape",r,s.c,[F.dO])
t.b=!0
s.bz(t)}},
al:function(a,b){var u
for(u=this.y.a,u=new J.ar(u,u.length,[H.v(u,0)]);u.B();)u.d.al(0,b)},
ab:function(a){var u,t=this,s=a.dx
C.a.h(s.a,s.ga2(s))
s.aI()
a.cG(t.f)
s=a.dy
u=(s&&C.a).gaD(s)
if(u!=null&&t.d!=null)u.er(a,t)
for(s=t.y.a,s=new J.ar(s,s.length,[H.v(s,0)]);s.B();)s.d.ab(a)
a.cF()
a.dx.b3()},
gp:function(){var u=this.z
return u==null?this.z=D.M():u},
bz:function(a){var u=this.z
if(u!=null)u.F(a)},
aa:function(){return this.bz(null)},
eo:function(a){H.f(a,"$ix")
this.e=null
this.bz(a)},
jh:function(){return this.eo(null)},
em:function(a){this.bz(H.f(a,"$ix"))},
je:function(){return this.em(null)},
jd:function(a,b){var u,t,s,r,q,p,o
H.j(b,"$ih",[E.ao],"$ah")
for(u=b.length,t=this.gel(),s={func:1,ret:-1,args:[D.x]},r=[s],q=0;q<b.length;b.length===u||(0,H.H)(b),++q){p=b[q]
if(p!=null){o=p.z
if(o==null){o=new D.by()
o.sa5(null)
o.saM(null)
o.c=null
o.d=0
p.z=o}H.n(t,s)
if(o.a==null)o.sa5(H.d([],r))
o=o.a;(o&&C.a).h(o,t)}}this.aa()},
jg:function(a,b){var u,t
H.j(b,"$ih",[E.ao],"$ah")
for(u=b.gV(b),t=this.gel();u.B();)u.gJ(u).gp().P(0,t)
this.aa()},
i:function(a){var u=this.a,t=u.length
if(t<=0)return"Unnamed entity"
return u},
seO:function(a,b){this.y=H.j(b,"$iX",[E.ao],"$aX")},
$ib6:1}
E.hF.prototype={
eK:function(a,b){var u,t,s=this
s.d=s.c=512
s.e=0
s.x=s.r=s.f=new P.au(Date.now(),!1)
s.y=0
s.cx=s.ch=s.Q=s.z=null
u=new O.cq()
t=[V.ah]
u.sbR(H.d([],t))
u.b=null
u.gp().h(0,new E.hG(s))
s.cy=u
u=new O.cq()
u.sbR(H.d([],t))
u.b=null
u.gp().h(0,new E.hH(s))
s.db=u
u=new O.cq()
u.sbR(H.d([],t))
u.b=null
u.gp().h(0,new E.hI(s))
s.dx=u
s.si2(H.d([],[O.bG]))
u=s.dy;(u&&C.a).h(u,null)
s.shX(new H.aK([P.i,A.cA]))},
gjp:function(){var u,t=this,s=t.z
if(s==null){s=t.cy
s=s.ga2(s)
u=t.db
u=t.z=s.t(0,u.ga2(u))
s=u}return s},
cG:function(a){var u=this.dy,t=a==null?(u&&C.a).gaD(u):a;(u&&C.a).h(u,t)},
cF:function(){var u=this.dy
if(u.length>1)u.pop()},
dD:function(a){var u=a.b
if(u.length===0)throw H.c(P.t("May not cache a shader with no name."))
if(this.fr.bi(0,u))throw H.c(P.t('Shader cache already contains a shader by the name "'+u+'".'))
this.fr.l(0,u,a)},
si2:function(a){this.dy=H.j(a,"$ib",[O.bG],"$ab")},
shX:function(a){this.fr=H.j(a,"$iD",[P.i,A.cA],"$aD")}}
E.hG.prototype={
$1:function(a){var u
H.f(a,"$ix")
u=this.a
u.ch=u.z=null},
$S:9}
E.hH.prototype={
$1:function(a){var u
H.f(a,"$ix")
u=this.a
u.cx=u.ch=u.Q=u.z=null},
$S:9}
E.hI.prototype={
$1:function(a){var u
H.f(a,"$ix")
u=this.a
u.cx=u.ch=null},
$S:9}
E.dZ.prototype={
cZ:function(a){H.f(a,"$ix")
this.eu()},
cY:function(){return this.cZ(null)},
gj1:function(){var u,t=this,s=Date.now(),r=C.e.a4(P.kR(s-t.cx.a,0).a,1000)/1000
if(r<=0)return 0
u=t.cy
t.cy=0
t.cx=new P.au(s,!1)
return u/r},
ds:function(){var u,t,s=this,r=window.devicePixelRatio,q=s.b.clientWidth
if(typeof q!=="number")return q.t()
if(typeof r!=="number")return H.B(r)
u=C.f.cs(q*r)
q=s.b.clientHeight
if(typeof q!=="number")return q.t()
t=C.f.cs(q*r)
q=s.b
if(q.width!==u||q.height!==t){q.width=u
q.height=t
P.lb(C.v,s.gjt())}},
eu:function(){var u,t
if(!this.ch){this.ch=!0
u=window
t=H.n(new E.i9(this),{func:1,ret:-1,args:[P.aa]})
C.G.fi(u)
C.G.hM(u,W.lH(t,P.aa))}},
jr:function(){var u,t,s,r,q,p=this,o=null
try{++p.cy
p.ch=!1
p.ds()
if(o==null)o=p.d
if(o!=null){s=p.e;++s.e
s.r=s.x
r=Date.now()
s.x=new P.au(r,!1)
s.y=P.kR(r-s.r.a,0).a*0.000001
r=s.cy
C.a.sk(r.a,0)
r.aI()
r=s.db
C.a.sk(r.a,0)
r.aI()
r=s.dx
C.a.sk(r.a,0)
r.aI()
r=s.dy;(r&&C.a).sk(r,0)
s=s.dy;(s&&C.a).h(s,null)
o.ab(p.e)}}catch(q){u=H.aG(q)
t=H.cb(q)
P.kE("Error: "+H.m(u))
P.kE("Stack: "+H.m(t))
throw H.c(u)}}}
E.i9.prototype={
$1:function(a){var u
H.o5(a)
u=this.a
if(u.ch){u.ch=!1
u.jr()}},
$S:28}
Z.ea.prototype={$iog:1}
Z.d9.prototype={
a7:function(a){var u,t,s,r=this
try{t=a.a
t.enableVertexAttribArray(r.e)
t.vertexAttribPointer(r.e,r.b,5126,!1,r.d,r.c)}catch(s){u=H.aG(s)
t=P.t('Failed to bind buffer attribute "'+r.a.i(0)+'": '+H.m(u))
throw H.c(t)}},
i:function(a){var u=this
return"["+u.a.i(0)+", Size: "+u.b+", Offset: "+u.c+", Stride: "+u.d+", Attr: "+H.m(u.e)+"]"}}
Z.eb.prototype={$ioh:1}
Z.ch.prototype={
aC:function(a){var u,t,s,r
for(u=this.c,t=u.length,s=0;s<t;++s){r=u[s]
if((r.a.a&a.a)!==0)return r}return},
a7:function(a){var u,t=this.a
a.a.bindBuffer(t.a,t.b)
for(t=this.c,u=t.length-1;u>=0;--u)t[u].a7(a)},
aS:function(a){var u,t,s
for(u=this.c,t=u.length-1,s=a.a;t>=0;--t)s.disableVertexAttribArray(u[t].e)
s.bindBuffer(this.a.a,null)},
ab:function(a){var u,t,s,r,q,p=this.b.length
for(u=a.a,t=0;t<p;++t){s=this.b
if(t>=s.length)return H.e(s,t)
r=s[t]
s=r.c
q=s.a
u.bindBuffer(q,s.b)
u.drawElements(r.a,r.b,5123,0)
u.bindBuffer(q,null)}},
i:function(a){var u,t,s,r,q=[P.i],p=H.d([],q)
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.H)(u),++s)C.a.h(p,u[s].i(0))
r=H.d([],q)
for(q=this.c,u=q.length,s=0;s<u;++s)C.a.h(r,J.aX(q[s]))
return"Buffer:  ["+this.a.i(0)+"]\nIndices: "+C.a.C(p,", ")+"\nAttrs:   "+C.a.C(r,", ")},
sft:function(a){this.b=H.j(a,"$ib",[Z.bY],"$ab")},
$ioo:1}
Z.bY.prototype={
i:function(a){return"Type: "+this.a+", Count: "+this.b+", ["+("Instance of '"+H.c0(this.c)+"'")+"]"}}
Z.bc.prototype={
gcT:function(a){var u=this.a,t=(u&$.aW().a)!==0?3:0
if((u&$.br().a)!==0)t+=3
if((u&$.bq().a)!==0)t+=3
if((u&$.bs().a)!==0)t+=2
if((u&$.bt().a)!==0)t+=3
if((u&$.d4().a)!==0)t+=3
if((u&$.d5().a)!==0)t+=4
if((u&$.ce().a)!==0)++t
return(u&$.bp().a)!==0?t+4:t},
iL:function(a){var u,t=$.aW(),s=this.a
if((s&t.a)!==0){if(0===a)return t
u=1}else u=0
t=$.br()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.bq()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.bs()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.bt()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.d4()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.d5()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.ce()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.bp()
if((s&t.a)!==0)if(u===a)return t
return $.mc()},
u:function(a,b){if(b==null)return!1
if(!(b instanceof Z.bc))return!1
return this.a===b.a},
i:function(a){var u=H.d([],[P.i]),t=this.a
if((t&$.aW().a)!==0)C.a.h(u,"Pos")
if((t&$.br().a)!==0)C.a.h(u,"Norm")
if((t&$.bq().a)!==0)C.a.h(u,"Binm")
if((t&$.bs().a)!==0)C.a.h(u,"Txt2D")
if((t&$.bt().a)!==0)C.a.h(u,"TxtCube")
if((t&$.d4().a)!==0)C.a.h(u,"Clr3")
if((t&$.d5().a)!==0)C.a.h(u,"Clr4")
if((t&$.ce().a)!==0)C.a.h(u,"Weight")
if((t&$.bp().a)!==0)C.a.h(u,"Bending")
if(u.length<=0)return"None"
return C.a.C(u,"|")}}
D.fo.prototype={}
D.by.prototype={
h:function(a,b){var u={func:1,ret:-1,args:[D.x]}
H.n(b,u)
if(this.a==null)this.sa5(H.d([],[u]))
u=this.a;(u&&C.a).h(u,b)},
P:function(a,b){var u,t,s=this
H.n(b,{func:1,ret:-1,args:[D.x]})
u=s.a
u=u==null?null:C.a.aA(u,b)
if(u===!0){u=s.a
t=(u&&C.a).P(u,b)||!1}else t=!1
u=s.b
u=u==null?null:C.a.aA(u,b)
if(u===!0){u=s.b
t=(u&&C.a).P(u,b)||t}return t},
F:function(a){var u,t,s,r=this,q={}
q.a=a
u=r.a
t=u==null
s=t?null:u.length===0
if(s!==!1){s=r.b
s=s==null?null:s.length===0
s=s!==!1}else s=!1
if(s)return!1
if(a==null){a=new D.x()
a.b=!0
q.a=a
s=a}else s=a
if(r.d>0){if(r.c==null)r.c=s
return!0}if(!t)C.a.K(P.kW(u,!0,{func:1,ret:-1,args:[D.x]}),new D.fI(q))
u=r.b
if(u!=null){r.saM(H.d([],[{func:1,ret:-1,args:[D.x]}]))
C.a.K(u,new D.fJ(q))}return!0},
dO:function(){return this.F(null)},
aF:function(a){var u,t=this,s=t.d
if(s>0){--s
t.d=s
if(s<=0)s=t.c!=null
else s=!1
if(s){u=t.c
t.c=null
t.F(u)}}},
sa5:function(a){this.a=H.j(a,"$ib",[{func:1,ret:-1,args:[D.x]}],"$ab")},
saM:function(a){this.b=H.j(a,"$ib",[{func:1,ret:-1,args:[D.x]}],"$ab")}}
D.fI.prototype={
$1:function(a){var u
H.n(a,{func:1,ret:-1,args:[D.x]})
u=this.a.a
u.b
a.$1(u)},
$S:18}
D.fJ.prototype={
$1:function(a){var u
H.n(a,{func:1,ret:-1,args:[D.x]})
u=this.a.a
u.b
a.$1(u)},
$S:18}
D.x.prototype={}
D.bz.prototype={}
D.bA.prototype={}
D.F.prototype={
i:function(a){return"ValueChanged: "+this.c+", "+H.m(this.d)+" => "+H.m(this.e)}}
X.da.prototype={
u:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.da))return!1
if(this.a!=b.a)return!1
if(!this.b.u(0,b.b))return!1
return!0},
i:function(a){return this.b.i(0)+H.m(this.a)}}
X.ds.prototype={
u:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.ds))return!1
if(this.a!=b.a)return!1
if(!this.b.u(0,b.b))return!1
return!0},
i:function(a){return this.b.i(0)+H.m(this.a)}}
X.fY.prototype={
jm:function(a){this.c=a.b
this.d.h(0,a.a)
return!1},
ji:function(a){this.c=a.b
this.d.P(0,a.a)
return!1},
shD:function(a){this.d=H.j(a,"$il5",[P.o],"$al5")}}
X.dv.prototype={}
X.h6.prototype={
aW:function(a,b){var u,t,s,r,q=this,p=Date.now(),o=q.x,n=b.a,m=q.Q
if(typeof n!=="number")return n.t()
u=b.b
t=q.ch
if(typeof u!=="number")return u.t()
s=new V.a7(o.a+n*m,o.b+u*t)
t=q.a.gaP()
r=new X.bj(a,V.bl(),q.x,t,s)
r.b=!0
q.z=new P.au(p,!1)
q.x=s
return r},
cE:function(a,b){this.r=a.a
return!1},
b2:function(a,b){var u=this.r,t=a.a
if(typeof t!=="number")return t.eC()
if(typeof u!=="number")return u.bG()
this.r=(u&~t)>>>0
return!1},
b1:function(a,b){var u=this.d
if(u==null)return!1
u.F(this.aW(a,b))
return!0},
jn:function(a){var u,t,s,r,q,p,o=this,n=o.e
if(n==null)return!1
u=o.a.gaP()
t=o.x
Date.now()
s=a.a
r=o.cx
if(typeof s!=="number")return s.t()
q=a.b
p=o.cy
if(typeof q!=="number")return q.t()
t=new X.cs(new V.S(s*r,q*p),u,t)
t.b=!0
n.F(t)
return!0},
hb:function(a,b,c){var u,t,s,r=this
if(r.f==null)return
u=Date.now()
t=r.f
s=new X.dv(c,r.a.gaP(),b)
s.b=!0
t.F(s)
r.y=new P.au(u,!1)
r.x=V.bl()}}
X.av.prototype={
u:function(a,b){var u=this
if(b==null)return!1
if(u===b)return!0
if(!(b instanceof X.av))return!1
if(u.a!==b.a)return!1
if(u.b!=b.b)return!1
if(u.c!=b.c)return!1
return!0},
i:function(a){var u=this.a?"Ctrl+":""
u+=H.A(this.b)?"Alt+":""
return u+(H.A(this.c)?"Shift+":"")}}
X.bj.prototype={}
X.ho.prototype={
bP:function(a,b,c){var u=this,t=new P.au(Date.now(),!1),s=u.a.gaP(),r=new X.bj(a,u.r,u.x,s,b)
r.b=!0
if(c){u.y=t
u.r=b}u.z=t
u.x=b
return r},
cE:function(a,b){var u
this.f=a.a
u=this.b
if(u==null)return!1
u.F(this.bP(a,b,!0))
return!0},
b2:function(a,b){var u=this,t=u.f,s=a.a
if(typeof s!=="number")return s.eC()
if(typeof t!=="number")return t.bG()
u.f=(t&~s)>>>0
t=u.c
if(t==null)return!1
t.F(u.bP(a,b,!0))
return!0},
b1:function(a,b){var u=this.d
if(u==null)return!1
u.F(this.bP(a,b,!1))
return!0},
jo:function(a,b){var u,t,s,r,q,p=this,o=p.e
if(o==null)return!1
u=p.a.gaP()
Date.now()
t=a.a
s=p.Q
if(typeof t!=="number")return t.t()
r=a.b
q=p.ch
if(typeof r!=="number")return r.t()
u=new X.cs(new V.S(t*s,r*q),u,b)
u.b=!0
o.F(u)
return!0},
gdN:function(){var u=this.b
return u==null?this.b=D.M():u},
gbF:function(){var u=this.c
return u==null?this.c=D.M():u},
gek:function(){var u=this.d
return u==null?this.d=D.M():u}}
X.cs.prototype={}
X.hB.prototype={}
X.e0.prototype={}
X.ic.prototype={
aW:function(a,b){var u,t,s,r,q=this
H.j(a,"$ib",[V.a7],"$ab")
u=new P.au(Date.now(),!1)
t=a.length>0?a[0]:V.bl()
s=q.a.gaP()
r=new X.e0(q.f,q.r,s,t)
r.b=!0
if(b){q.x=u
q.f=t}q.y=u
q.r=t
return r},
jl:function(a){var u
H.j(a,"$ib",[V.a7],"$ab")
u=this.b
if(u==null)return!1
u.F(this.aW(a,!0))
return!0},
jj:function(a){var u
H.j(a,"$ib",[V.a7],"$ab")
u=this.c
if(u==null)return!1
u.F(this.aW(a,!0))
return!0},
jk:function(a){var u
H.j(a,"$ib",[V.a7],"$ab")
u=this.d
if(u==null)return!1
u.F(this.aW(a,!1))
return!0}}
X.e6.prototype={
gaP:function(){var u=this.a,t=C.t.gdI(u).c
t.toString
u=C.t.gdI(u).d
u.toString
return V.dK(0,0,t,u)},
d9:function(a){var u=a.keyCode,t=H.A(a.ctrlKey)||H.A(a.metaKey)
return new X.ds(u,new X.av(t,a.altKey,a.shiftKey))},
aN:function(a){var u=this.b,t=H.A(a.ctrlKey)||H.A(a.metaKey)
u.c=new X.av(t,a.altKey,a.shiftKey)},
c6:function(a){var u=this.b,t=H.A(a.ctrlKey)||H.A(a.metaKey)
u.c=new X.av(t,a.altKey,a.shiftKey)},
ay:function(a){var u,t=this.a.getBoundingClientRect(),s=a.pageX,r=a.pageY,q=t.left
if(typeof s!=="number")return s.q()
u=t.top
if(typeof r!=="number")return r.q()
return new V.a7(s-q,r-u)},
aX:function(a){return new V.S(a.movementX,a.movementY)},
c2:function(a){var u,t,s,r,q,p,o=this.a.getBoundingClientRect(),n=H.d([],[V.a7])
for(u=a.touches,t=u.length,s=0;s<u.length;u.length===t||(0,H.H)(u),++s){r=u[s]
q=C.f.a0(r.pageX)
C.f.a0(r.pageY)
p=o.left
C.f.a0(r.pageX)
C.a.h(n,new V.a7(q-p,C.f.a0(r.pageY)-o.top))}return n},
av:function(a){var u=a.buttons,t=H.A(a.ctrlKey)||H.A(a.metaKey)
return new X.da(u,new X.av(t,a.altKey,a.shiftKey))},
bS:function(a){var u,t,s=this.a.getBoundingClientRect(),r=a.pageX,q=a.pageY,p=s.left
if(typeof r!=="number")return r.q()
u=r-p
if(u<0)return!1
r=s.top
if(typeof q!=="number")return q.q()
t=q-r
if(t<0)return!1
return u<s.width&&t<s.height},
h5:function(a){this.f=!0},
fQ:function(a){this.f=!1},
fW:function(a){H.f(a,"$iae")
if(H.A(this.f)&&this.bS(a))a.preventDefault()},
h9:function(a){var u
H.f(a,"$ib3")
if(!H.A(this.f))return
u=this.d9(a)
this.b.jm(u)},
h7:function(a){var u
H.f(a,"$ib3")
if(!H.A(this.f))return
u=this.d9(a)
this.b.ji(u)},
hd:function(a){var u,t,s,r,q=this
H.f(a,"$iae")
u=q.a
u.focus()
q.f=!0
q.aN(a)
if(H.A(q.x)){t=q.av(a)
s=q.aX(a)
if(q.d.cE(t,s))a.preventDefault()
return}if(H.A(q.r)){q.y=a
u.requestPointerLock()
return}t=q.av(a)
r=q.ay(a)
if(q.c.cE(t,r))a.preventDefault()},
hh:function(a){var u,t,s,r=this
H.f(a,"$iae")
r.aN(a)
u=r.av(a)
if(H.A(r.x)){t=r.aX(a)
if(r.d.b2(u,t))a.preventDefault()
return}if(H.A(r.r))return
s=r.ay(a)
if(r.c.b2(u,s))a.preventDefault()},
h_:function(a){var u,t,s,r=this
H.f(a,"$iae")
if(!r.bS(a)){r.aN(a)
u=r.av(a)
if(H.A(r.x)){t=r.aX(a)
if(r.d.b2(u,t))a.preventDefault()
return}if(H.A(r.r))return
s=r.ay(a)
if(r.c.b2(u,s))a.preventDefault()}},
hf:function(a){var u,t,s,r=this
H.f(a,"$iae")
r.aN(a)
u=r.av(a)
if(H.A(r.x)){t=r.aX(a)
if(r.d.b1(u,t))a.preventDefault()
return}if(H.A(r.r))return
s=r.ay(a)
if(r.c.b1(u,s))a.preventDefault()},
fY:function(a){var u,t,s,r=this
H.f(a,"$iae")
if(!r.bS(a)){r.aN(a)
u=r.av(a)
if(H.A(r.x)){t=r.aX(a)
if(r.d.b1(u,t))a.preventDefault()
return}if(H.A(r.r))return
s=r.ay(a)
if(r.c.b1(u,s))a.preventDefault()}},
hj:function(a){var u,t,s=this
H.f(a,"$ibd")
s.aN(a)
u=new V.S((a&&C.F).giS(a),C.F.giT(a)).w(0,180)
if(H.A(s.x)){if(s.d.jn(u))a.preventDefault()
return}if(H.A(s.r))return
t=s.ay(a)
if(s.c.jo(u,t))a.preventDefault()},
hl:function(a){var u,t,s=this,r=document.pointerLockElement===s.a
if(r!==s.x){s.x=r
u=s.av(s.y)
t=s.ay(s.y)
s.d.hb(u,t,r)}},
hB:function(a){var u,t=this
H.f(a,"$iaU")
t.a.focus()
t.f=!0
t.c6(a)
u=t.c2(a)
if(t.e.jl(u))a.preventDefault()},
hx:function(a){var u
H.f(a,"$iaU")
this.c6(a)
u=this.c2(a)
if(this.e.jj(u))a.preventDefault()},
hz:function(a){var u
H.f(a,"$iaU")
this.c6(a)
u=this.c2(a)
if(this.e.jk(u))a.preventDefault()},
sfk:function(a){this.z=H.j(a,"$ib",[[P.cC,P.P]],"$ab")}}
D.bw.prototype={
gp:function(){var u=this.d
return u==null?this.d=D.M():u},
as:function(a){var u
H.f(a,"$ix")
u=this.d
if(u!=null)u.F(a)},
eQ:function(){return this.as(null)},
$ia6:1,
$ib6:1}
D.a6.prototype={$ib6:1}
D.dt.prototype={
gp:function(){var u=this.Q
return u==null?this.Q=D.M():u},
as:function(a){var u=this.Q
if(u!=null)u.F(a)},
dl:function(a){var u
H.f(a,"$ix")
u=this.ch
if(u!=null)u.F(a)},
ha:function(){return this.dl(null)},
hn:function(a){var u,t,s
H.j(a,"$ih",[D.a6],"$ah")
for(u=a.length,t=0;t<a.length;a.length===u||(0,H.H)(a),++t){s=a[t]
if(s==null||this.fa(s))return!1}return!0},
fK:function(a,b){var u,t,s,r,q,p,o,n=D.a6
H.j(b,"$ih",[n],"$ah")
for(u=b.length,t=this.gdk(),s={func:1,ret:-1,args:[D.x]},r=[s],q=0;q<b.length;b.length===u||(0,H.H)(b),++q){p=H.f(b[q],"$ia6")
if(p instanceof D.bw)C.a.h(this.e,p)
o=p.d
if(o==null){o=new D.by()
o.sa5(null)
o.saM(null)
o.c=null
o.d=0
p.d=o}H.n(t,s)
if(o.a==null)o.sa5(H.d([],r))
o=o.a;(o&&C.a).h(o,t)}n=new D.bz([n])
n.b=!0
this.as(n)},
hr:function(a,b){var u,t,s,r=D.a6
H.j(b,"$ih",[r],"$ah")
for(u=b.gV(b),t=this.gdk();u.B();){s=u.gJ(u)
C.a.P(this.e,s)
s.gp().P(0,t)}r=new D.bA([r])
r.b=!0
this.as(r)},
fa:function(a){var u=C.a.aA(this.e,a)
return u},
sfg:function(a){this.e=H.j(a,"$ib",[D.bw],"$ab")},
shC:function(a){this.f=H.j(a,"$ib",[D.dG],"$ab")},
shZ:function(a){this.r=H.j(a,"$ib",[D.dP],"$ab")},
sib:function(a){this.x=H.j(a,"$ib",[D.dW],"$ab")},
sic:function(a){this.y=H.j(a,"$ib",[D.dX],"$ab")},
sie:function(a){this.z=H.j(a,"$ib",[D.dY],"$ab")},
$ah:function(){return[D.a6]},
$aX:function(){return[D.a6]}}
D.dG.prototype={$ia6:1,$ib6:1}
D.dP.prototype={$ia6:1,$ib6:1}
D.dW.prototype={$ia6:1,$ib6:1}
D.dX.prototype={$ia6:1,$ib6:1}
D.dY.prototype={$ia6:1,$ib6:1}
V.a0.prototype={
n:function(a,b){var u=C.f.n(this.a,b.gcJ()),t=C.f.n(this.b,b.gbH()),s=C.f.n(this.c,b.gcd())
if(u<0)u=0
else if(u>1)u=1
if(t<0)t=0
else if(t>1)t=1
if(s<0)s=0
else if(s>1)s=1
return new V.a0(u,t,s)},
q:function(a,b){var u=C.f.q(this.a,b.gcJ()),t=C.f.q(this.b,b.gbH()),s=C.f.q(this.c,b.gcd())
if(u<0)u=0
else if(u>1)u=1
if(t<0)t=0
else if(t>1)t=1
if(s<0)s=0
else if(s>1)s=1
return new V.a0(u,t,s)},
u:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.a0))return!1
u=b.a
t=$.O().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
return!0},
i:function(a){return"["+V.V(this.a,3,0)+", "+V.V(this.b,3,0)+", "+V.V(this.c,3,0)+"]"}}
V.a5.prototype={
n:function(a,b){var u=this,t=C.f.n(u.a,b.gcJ()),s=C.f.n(u.b,b.gbH()),r=C.f.n(u.c,b.gcd()),q=C.f.n(u.d,b.giK(b))
if(t<0)t=0
else if(t>1)t=1
if(s<0)s=0
else if(s>1)s=1
if(r<0)r=0
else if(r>1)r=1
if(q<0)q=0
else if(q>1)q=1
return new V.a5(t,s,r,q)},
q:function(a,b){var u=this,t=C.f.q(u.a,b.gcJ()),s=C.f.q(u.b,b.gbH()),r=C.f.q(u.c,b.gcd()),q=C.f.q(u.d,b.giK(b))
if(t<0)t=0
else if(t>1)t=1
if(s<0)s=0
else if(s>1)s=1
if(r<0)r=0
else if(r>1)r=1
if(q<0)q=0
else if(q>1)q=1
return new V.a5(t,s,r,q)},
u:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.a5))return!1
u=b.a
t=$.O().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
if(!(Math.abs(b.d-s.d)<t))return!1
return!0},
i:function(a){var u=this
return"["+V.V(u.a,3,0)+", "+V.V(u.b,3,0)+", "+V.V(u.c,3,0)+", "+V.V(u.d,3,0)+"]"}}
V.fH.prototype={}
V.dA.prototype={
ac:function(a,b){var u=this,t=H.d([u.a,u.d,u.r,u.b,u.e,u.x,u.c,u.f,u.y],[P.z])
return t},
u:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.dA))return!1
u=b.a
t=$.O().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
if(!(Math.abs(b.d-s.d)<t))return!1
if(!(Math.abs(b.e-s.e)<t))return!1
if(!(Math.abs(b.f-s.f)<t))return!1
if(!(Math.abs(b.r-s.r)<t))return!1
if(!(Math.abs(b.x-s.x)<t))return!1
if(!(Math.abs(b.y-s.y)<t))return!1
return!0},
i:function(a){var u,t,s,r,q=this,p=[P.z],o=V.c9(H.d([q.a,q.d,q.r],p),3,0),n=V.c9(H.d([q.b,q.e,q.x],p),3,0),m=V.c9(H.d([q.c,q.f,q.y],p),3,0)
p=o.length
if(0>=p)return H.e(o,0)
u="["+o[0]+", "
t=n.length
if(0>=t)return H.e(n,0)
u=u+n[0]+", "
s=m.length
if(0>=s)return H.e(m,0)
u=u+m[0]+",\n"
if(1>=p)return H.e(o,1)
r=" "+o[1]+", "
if(1>=t)return H.e(n,1)
r=r+n[1]+", "
if(1>=s)return H.e(m,1)
r=u+(r+m[1]+",\n")
if(2>=p)return H.e(o,2)
p=" "+o[2]+", "
if(2>=t)return H.e(n,2)
p=p+n[2]+", "
if(2>=s)return H.e(m,2)
return r+(p+m[2]+"]")}}
V.ah.prototype={
ac:function(a,b){var u=this,t=H.d([u.a,u.e,u.y,u.cx,u.b,u.f,u.z,u.cy,u.c,u.r,u.Q,u.db,u.d,u.x,u.ch,u.dx],[P.z])
return t},
ei:function(b2){var u,t,s,r=this,q=r.a,p=r.f,o=r.b,n=r.e,m=q*p-o*n,l=r.r,k=r.c,j=q*l-k*n,i=r.x,h=r.d,g=q*i-h*n,f=o*l-k*p,e=o*i-h*p,d=k*i-h*l,c=r.y,b=r.cy,a=r.z,a0=r.cx,a1=c*b-a*a0,a2=r.db,a3=r.Q,a4=c*a2-a3*a0,a5=r.dx,a6=r.ch,a7=c*a5-a6*a0,a8=a*a2-a3*b,a9=a*a5-a6*b,b0=a3*a5-a6*a2,b1=m*b0-j*a9+g*a8+f*a7-e*a4+d*a1
if(Math.abs(b1-0)<$.O().a)return V.bD()
u=1/b1
t=-n
s=-a0
return V.aL((p*b0-l*a9+i*a8)*u,(-o*b0+k*a9-h*a8)*u,(b*d-a2*e+a5*f)*u,(-a*d+a3*e-a6*f)*u,(t*b0+l*a7-i*a4)*u,(q*b0-k*a7+h*a4)*u,(s*d+a2*g-a5*j)*u,(c*d-a3*g+a6*j)*u,(n*a9-p*a7+i*a1)*u,(-q*a9+o*a7-h*a1)*u,(a0*e-b*g+a5*m)*u,(-c*e+a*g-a6*m)*u,(t*a8+p*a4-l*a1)*u,(q*a8-o*a4+k*a1)*u,(s*f+b*j-a2*m)*u,(c*f-a*j+a3*m)*u)},
t:function(b2,b3){var u=this,t=u.a,s=b3.a,r=u.b,q=b3.e,p=u.c,o=b3.y,n=u.d,m=b3.cx,l=b3.b,k=b3.f,j=b3.z,i=b3.cy,h=b3.c,g=b3.r,f=b3.Q,e=b3.db,d=b3.d,c=b3.x,b=b3.ch,a=b3.dx,a0=u.e,a1=u.f,a2=u.r,a3=u.x,a4=u.y,a5=u.z,a6=u.Q,a7=u.ch,a8=u.cx,a9=u.cy,b0=u.db,b1=u.dx
return V.aL(t*s+r*q+p*o+n*m,t*l+r*k+p*j+n*i,t*h+r*g+p*f+n*e,t*d+r*c+p*b+n*a,a0*s+a1*q+a2*o+a3*m,a0*l+a1*k+a2*j+a3*i,a0*h+a1*g+a2*f+a3*e,a0*d+a1*c+a2*b+a3*a,a4*s+a5*q+a6*o+a7*m,a4*l+a5*k+a6*j+a7*i,a4*h+a5*g+a6*f+a7*e,a4*d+a5*c+a6*b+a7*a,a8*s+a9*q+b0*o+b1*m,a8*l+a9*k+b0*j+b1*i,a8*h+a9*g+b0*f+b1*e,a8*d+a9*c+b0*b+b1*a)},
cN:function(a){var u=this,t=a.a,s=a.b,r=a.c
return new V.R(u.a*t+u.b*s+u.c*r,u.e*t+u.f*s+u.r*r,u.y*t+u.z*s+u.Q*r)},
b9:function(a){var u=this,t=a.a,s=a.b,r=a.c
return new V.a3(u.a*t+u.b*s+u.c*r+u.d,u.e*t+u.f*s+u.r*r+u.x,u.y*t+u.z*s+u.Q*r+u.ch)},
u:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.ah))return!1
u=b.a
t=$.O().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
if(!(Math.abs(b.d-s.d)<t))return!1
if(!(Math.abs(b.e-s.e)<t))return!1
if(!(Math.abs(b.f-s.f)<t))return!1
if(!(Math.abs(b.r-s.r)<t))return!1
if(!(Math.abs(b.x-s.x)<t))return!1
if(!(Math.abs(b.y-s.y)<t))return!1
if(!(Math.abs(b.z-s.z)<t))return!1
if(!(Math.abs(b.Q-s.Q)<t))return!1
if(!(Math.abs(b.ch-s.ch)<t))return!1
if(!(Math.abs(b.cx-s.cx)<t))return!1
if(!(Math.abs(b.cy-s.cy)<t))return!1
if(!(Math.abs(b.db-s.db)<t))return!1
if(!(Math.abs(b.dx-s.dx)<t))return!1
return!0},
i:function(a){return this.T()},
L:function(a){var u,t,s,r,q,p=this,o=[P.z],n=V.c9(H.d([p.a,p.e,p.y,p.cx],o),3,0),m=V.c9(H.d([p.b,p.f,p.z,p.cy],o),3,0),l=V.c9(H.d([p.c,p.r,p.Q,p.db],o),3,0),k=V.c9(H.d([p.d,p.x,p.ch,p.dx],o),3,0)
o=n.length
if(0>=o)return H.e(n,0)
u="["+n[0]+", "
t=m.length
if(0>=t)return H.e(m,0)
u=u+m[0]+", "
s=l.length
if(0>=s)return H.e(l,0)
u=u+l[0]+", "
r=k.length
if(0>=r)return H.e(k,0)
u=u+k[0]+",\n"
q=a+" "
if(1>=o)return H.e(n,1)
q=q+n[1]+", "
if(1>=t)return H.e(m,1)
q=q+m[1]+", "
if(1>=s)return H.e(l,1)
q=q+l[1]+", "
if(1>=r)return H.e(k,1)
q=u+(q+k[1]+",\n")
u=a+" "
if(2>=o)return H.e(n,2)
u=u+n[2]+", "
if(2>=t)return H.e(m,2)
u=u+m[2]+", "
if(2>=s)return H.e(l,2)
u=u+l[2]+", "
if(2>=r)return H.e(k,2)
u=q+(u+k[2]+",\n")
q=a+" "
if(3>=o)return H.e(n,3)
q=q+n[3]+", "
if(3>=t)return H.e(m,3)
q=q+m[3]+", "
if(3>=s)return H.e(l,3)
q=q+l[3]+", "
if(3>=r)return H.e(k,3)
return u+(q+k[3]+"]")},
T:function(){return this.L("")}}
V.a7.prototype={
n:function(a,b){return new V.a7(this.a+b.a,this.b+b.b)},
q:function(a,b){return new V.a7(this.a-b.a,this.b-b.b)},
u:function(a,b){var u,t
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.a7))return!1
u=b.a
t=$.O().a
if(!(Math.abs(u-this.a)<t))return!1
if(!(Math.abs(b.b-this.b)<t))return!1
return!0},
i:function(a){return"["+V.V(this.a,3,0)+", "+V.V(this.b,3,0)+"]"}}
V.a3.prototype={
n:function(a,b){return new V.a3(this.a+b.a,this.b+b.b,this.c+b.c)},
q:function(a,b){return new V.a3(this.a-b.a,this.b-b.b,this.c-b.c)},
t:function(a,b){return new V.a3(this.a*b,this.b*b,this.c*b)},
u:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.a3))return!1
u=b.a
t=$.O().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
return!0},
i:function(a){return"["+V.V(this.a,3,0)+", "+V.V(this.b,3,0)+", "+V.V(this.c,3,0)+"]"}}
V.b8.prototype={
n:function(a,b){var u=this
return new V.b8(C.e.n(u.a,b.gjF(b)),C.e.n(u.b,b.gjG(b)),C.e.n(u.c,b.gjH(b)),C.e.n(u.d,b.gjE(b)))},
q:function(a,b){var u=this
return new V.b8(C.e.q(u.a,b.gjF(b)),C.e.q(u.b,b.gjG(b)),C.e.q(u.c,b.gjH(b)),C.e.q(u.d,b.gjE(b)))},
u:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.b8))return!1
u=b.a
t=$.O().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
if(!(Math.abs(b.d-s.d)<t))return!1
return!0},
i:function(a){var u=this
return"["+V.V(u.a,3,0)+", "+V.V(u.b,3,0)+", "+V.V(u.c,3,0)+", "+V.V(u.d,3,0)+"]"}}
V.bF.prototype={
ga9:function(){var u=this.c,t=this.d
if(u>t)return t
else return u},
u:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.bF))return!1
u=b.a
t=$.O().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
if(!(Math.abs(b.d-s.d)<t))return!1
return!0},
i:function(a){var u=this
return"["+V.V(u.a,3,0)+", "+V.V(u.b,3,0)+", "+V.V(u.c,3,0)+", "+V.V(u.d,3,0)+"]"}}
V.S.prototype={
cz:function(a){return Math.sqrt(this.D(this))},
D:function(a){var u,t,s=this.a,r=a.a
if(typeof s!=="number")return s.t()
if(typeof r!=="number")return H.B(r)
u=this.b
t=a.b
if(typeof u!=="number")return u.t()
if(typeof t!=="number")return H.B(t)
return s*r+u*t},
n:function(a,b){var u,t=this.a,s=b.giU(b)
if(typeof t!=="number")return t.n()
s=C.f.n(t,s)
t=this.b
u=b.giV(b)
if(typeof t!=="number")return t.n()
return new V.S(s,C.f.n(t,u))},
q:function(a,b){var u,t=this.a,s=b.giU(b)
if(typeof t!=="number")return t.q()
s=C.f.q(t,s)
t=this.b
u=b.giV(b)
if(typeof t!=="number")return t.q()
return new V.S(s,C.f.q(t,u))},
t:function(a,b){var u,t=this.a
if(typeof t!=="number")return t.t()
u=this.b
if(typeof u!=="number")return u.t()
return new V.S(t*b,u*b)},
w:function(a,b){var u,t
if(Math.abs(b-0)<$.O().a){u=$.li
return u==null?$.li=new V.S(0,0):u}u=this.a
if(typeof u!=="number")return u.w()
t=this.b
if(typeof t!=="number")return t.w()
return new V.S(u/b,t/b)},
u:function(a,b){var u,t,s
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.S))return!1
u=b.a
t=this.a
s=$.O()
s.toString
if(typeof u!=="number")return u.q()
if(typeof t!=="number")return H.B(t)
s=s.a
if(!(Math.abs(u-t)<s))return!1
u=b.b
t=this.b
if(typeof u!=="number")return u.q()
if(typeof t!=="number")return H.B(t)
if(!(Math.abs(u-t)<s))return!1
return!0},
i:function(a){return"["+V.V(this.a,3,0)+", "+V.V(this.b,3,0)+"]"}}
V.R.prototype={
cz:function(a){return Math.sqrt(this.D(this))},
D:function(a){return this.a*a.a+this.b*a.b+this.c*a.c},
aB:function(a){var u=this.b,t=a.c,s=this.c,r=a.b,q=a.a,p=this.a
return new V.R(u*t-s*r,s*q-p*t,p*r-u*q)},
n:function(a,b){return new V.R(this.a+b.a,this.b+b.b,this.c+b.c)},
q:function(a,b){return new V.R(this.a-b.a,this.b-b.b,this.c-b.c)},
S:function(a){return new V.R(-this.a,-this.b,-this.c)},
t:function(a,b){return new V.R(this.a*b,this.b*b,this.c*b)},
w:function(a,b){if(Math.abs(b-0)<$.O().a)return V.cP()
return new V.R(this.a/b,this.b/b,this.c/b)},
ej:function(){var u=$.O().a
if(!(Math.abs(0-this.a)<u))return!1
if(!(Math.abs(0-this.b)<u))return!1
if(!(Math.abs(0-this.c)<u))return!1
return!0},
u:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.R))return!1
u=b.a
t=$.O().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
return!0},
i:function(a){return"["+V.V(this.a,3,0)+", "+V.V(this.b,3,0)+", "+V.V(this.c,3,0)+"]"}}
U.fq.prototype={
bL:function(a){var u=V.of(a,this.c,this.b)
return u},
gp:function(){var u=this.y
return u==null?this.y=D.M():u},
O:function(a){var u=this.y
if(u!=null)u.F(a)},
scQ:function(a,b){},
scB:function(a){var u,t=this,s=t.b
if(!(Math.abs(s-a)<$.O().a)){t.b=a
if(a<t.c)t.d=t.c=a
else{u=t.d
if(a<u)t.d=t.bL(u)}s=new D.F("maximumLocation",s,t.b,[P.z])
s.b=!0
t.O(s)}},
scD:function(a){var u,t=this,s=t.c
if(!(Math.abs(s-a)<$.O().a)){t.c=a
if(t.b<a)t.d=t.b=a
else{u=t.d
if(a>u)t.d=t.bL(u)}s=new D.F("minimumLocation",s,t.c,[P.z])
s.b=!0
t.O(s)}},
sa8:function(a,b){var u,t=this
b=t.bL(b)
u=t.d
if(!(Math.abs(u-b)<$.O().a)){t.d=b
u=new D.F("location",u,b,[P.z])
u.b=!0
t.O(u)}},
scC:function(a){var u,t,s=this,r=s.e
if(!(Math.abs(r-a)<$.O().a)){s.e=a
u=s.f
t=-a
if(u<t)u=t
else if(u>a)u=a
s.f=u
r=new D.F("maximumVelocity",r,a,[P.z])
r.b=!0
s.O(r)}},
sU:function(a){var u=this,t=u.e,s=-t
if(a<s)a=s
else if(a>t)a=t
t=u.f
if(!(Math.abs(t-a)<$.O().a)){u.f=a
t=new D.F("velocity",t,a,[P.z])
t.b=!0
u.O(t)}},
sck:function(a){var u
if(a<0)a=0
else if(a>1)a=1
u=this.x
if(!(Math.abs(u-a)<$.O().a)){this.x=a
u=new D.F("dampening",u,a,[P.z])
u.b=!0
this.O(u)}},
al:function(a,b){var u,t,s,r=this,q=r.f,p=$.O().a
if(!(Math.abs(q-0)<p)||!(Math.abs(r.r-0)<p)){u=q+r.r*b
q=r.e
t=-q
if(u<t)u=t
else if(u>q)u=q
r.sa8(0,r.d+u*b)
q=r.x
if(!(Math.abs(q-0)<$.O().a)){s=u*Math.pow(1-q,b)
if(u<0){if(s<u)s=u
else if(s>0)s=0}else if(s<0)s=0
else if(s>u)s=u
u=s}r.sU(u)}}}
U.dc.prototype={
gp:function(){var u=this.b
return u==null?this.b=D.M():u},
aT:function(a,b,c){return this.a},
u:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.dc))return!1
return J.T(this.a,b.a)},
i:function(a){return"Constant: "+this.a.L("          ")}}
U.cn.prototype={
gp:function(){var u=this.e
return u==null?this.e=D.M():u},
O:function(a){var u
H.f(a,"$ix")
u=this.e
if(u!=null)u.F(a)},
a6:function(){return this.O(null)},
fI:function(a,b){var u,t,s,r,q,p,o,n=U.ai
H.j(b,"$ih",[n],"$ah")
for(u=b.length,t=this.gaK(),s={func:1,ret:-1,args:[D.x]},r=[s],q=0;q<b.length;b.length===u||(0,H.H)(b),++q){p=b[q]
if(p!=null){o=p.gp()
o.toString
H.n(t,s)
if(o.a==null)o.sa5(H.d([],r))
o=o.a;(o&&C.a).h(o,t)}}n=new D.bz([n])
n.b=!0
this.O(n)},
hp:function(a,b){var u,t,s=U.ai
H.j(b,"$ih",[s],"$ah")
for(u=b.gV(b),t=this.gaK();u.B();)u.gJ(u).gp().P(0,t)
s=new D.bA([s])
s.b=!0
this.O(s)},
aT:function(a,b,c){var u,t,s=this,r=s.r,q=b.e
if(typeof r!=="number")return r.W()
if(r<q){s.r=q
r=s.e
if(r!=null)++r.d
for(r=s.a,r=new J.ar(r,r.length,[H.v(r,0)]),u=null;r.B();){q=r.d
if(q!=null){t=q.aT(0,b,c)
if(t!=null)u=u==null?t:t.t(0,u)}}s.f=u==null?V.bD():u
r=s.e
if(r!=null)r.aF(0)}return s.f},
u:function(a,b){var u,t,s,r
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.cn))return!1
u=this.a.length
for(t=0;t<u;++t){s=this.a
if(t>=s.length)return H.e(s,t)
s=s[t]
r=b.a
if(t>=r.length)return H.e(r,t)
if(!J.T(s,r[t]))return!1}return!0},
i:function(a){return"Group"},
$ah:function(){return[U.ai]},
$aX:function(){return[U.ai]},
$iai:1}
U.ai.prototype={}
U.e7.prototype={
gp:function(){var u=this.cy
return u==null?this.cy=D.M():u},
O:function(a){var u
H.f(a,"$ix")
u=this.cy
if(u!=null)u.F(a)},
a6:function(){return this.O(null)},
aY:function(a){var u=this
if(u.a!=null)return!1
u.a=a
a.c.gdN().h(0,u.gbT())
u.a.c.gek().h(0,u.gbV())
u.a.c.gbF().h(0,u.gbX())
return!0},
bU:function(a){var u=this
H.f(a,"$ix")
if(!J.T(u.c,u.a.b.c))return
u.x=u.y=!0
u.z=u.b.d},
bW:function(a){var u,t,s,r,q,p,o,n=this
a=H.l(H.f(a,"$ix"),"$ibj")
if(!H.A(n.y))return
if(H.A(n.x)){u=a.d.q(0,a.y)
u=new V.S(u.a,u.b)
u=u.D(u)
t=n.r
if(typeof t!=="number")return H.B(t)
if(u<t)return
n.x=!1}if(H.A(n.d)){u=a.c
t=a.d.q(0,a.y)
u=new V.S(t.a,t.b).t(0,2).w(0,u.ga9())
n.Q=u
t=n.b
u=u.a
if(typeof u!=="number")return u.t()
s=n.e
if(typeof s!=="number")return H.B(s)
t.sU(u*10*s)}else{u=a.c
t=a.d
s=t.q(0,a.y)
r=new V.S(s.a,s.b).t(0,2).w(0,u.ga9())
s=n.b
q=r.a
if(typeof q!=="number")return q.S()
p=n.e
if(typeof p!=="number")return H.B(p)
o=n.z
if(typeof o!=="number")return H.B(o)
s.sa8(0,-q*p+o)
n.b.sU(0)
t=t.q(0,a.z)
n.Q=new V.S(t.a,t.b).t(0,2).w(0,u.ga9())}n.a6()},
bY:function(a){var u,t,s,r=this
H.f(a,"$ix")
if(!H.A(r.y))return
r.y=!1
if(H.A(r.x))return
u=r.Q
if(u.D(u)>0.0001){u=r.b
t=r.Q.a
if(typeof t!=="number")return t.t()
s=r.e
if(typeof s!=="number")return H.B(s)
u.sU(t*10*s)
r.a6()}},
aT:function(a,b,c){var u,t,s,r=this,q=r.ch,p=b.e
if(typeof q!=="number")return q.W()
if(q<p){r.ch=p
u=b.y
r.b.al(0,u)
q=r.b.d
t=Math.cos(q)
s=Math.sin(q)
r.cx=V.aL(t,-s,0,0,s,t,0,0,0,0,1,0,0,0,0,1)}return r.cx},
$iai:1}
U.e8.prototype={
gp:function(){var u=this.fx
return u==null?this.fx=D.M():u},
O:function(a){var u
H.f(a,"$ix")
u=this.fx
if(u!=null)u.F(a)},
a6:function(){return this.O(null)},
aY:function(a){var u,t,s=this
if(s.a!=null)return!1
s.a=a
a.c.gdN().h(0,s.gbT())
s.a.c.gek().h(0,s.gbV())
s.a.c.gbF().h(0,s.gbX())
u=s.a.d
t=u.f
u=t==null?u.f=D.M():t
u.h(0,s.gfB())
u=s.a.d
t=u.d
u=t==null?u.d=D.M():t
u.h(0,s.gfD())
u=s.a.e
t=u.b
u=t==null?u.b=D.M():t
u.h(0,s.gi8())
u=s.a.e
t=u.d
u=t==null?u.d=D.M():t
u.h(0,s.gi6())
u=s.a.e
t=u.c
u=t==null?u.c=D.M():t
u.h(0,s.gi4())
return!0},
an:function(a){var u=a.a,t=a.b
if(H.A(this.f)){if(typeof u!=="number")return u.S()
u=-u}if(H.A(this.r)){if(typeof t!=="number")return t.S()
t=-t}return new V.S(u,t)},
bU:function(a){var u=this
a=H.l(H.f(a,"$ix"),"$ibj")
if(!J.T(u.d,a.x.b))return
u.ch=u.cx=!0
u.cy=u.c.d
u.db=u.b.d},
bW:function(a){var u,t,s,r,q,p,o,n=this
a=H.l(H.f(a,"$ix"),"$ibj")
if(!H.A(n.cx))return
if(H.A(n.ch)){u=a.d.q(0,a.y)
u=new V.S(u.a,u.b)
u=u.D(u)
t=n.Q
if(typeof t!=="number")return H.B(t)
if(u<t)return
n.ch=!1}if(H.A(n.e)){u=a.c
t=a.d.q(0,a.y)
u=n.an(new V.S(t.a,t.b).t(0,2).w(0,u.ga9()))
n.dx=u
t=n.c
u=u.a
if(typeof u!=="number")return u.S()
s=n.y
if(typeof s!=="number")return H.B(s)
t.sU(-u*10*s)
s=n.b
u=n.dx.b
if(typeof u!=="number")return u.S()
t=n.x
if(typeof t!=="number")return H.B(t)
s.sU(-u*10*t)}else{u=a.c
t=a.d
s=t.q(0,a.y)
r=n.an(new V.S(s.a,s.b).t(0,2).w(0,u.ga9()))
s=n.c
q=r.a
if(typeof q!=="number")return q.S()
p=n.y
if(typeof p!=="number")return H.B(p)
o=n.cy
if(typeof o!=="number")return H.B(o)
s.sa8(0,-q*p+o)
o=n.b
p=r.b
if(typeof p!=="number")return p.S()
q=n.x
if(typeof q!=="number")return H.B(q)
s=n.db
if(typeof s!=="number")return H.B(s)
o.sa8(0,-p*q+s)
n.b.sU(0)
n.c.sU(0)
t=t.q(0,a.z)
n.dx=n.an(new V.S(t.a,t.b).t(0,2).w(0,u.ga9()))}n.a6()},
bY:function(a){var u,t,s,r=this
H.f(a,"$ix")
if(!H.A(r.cx))return
r.cx=!1
if(H.A(r.ch))return
u=r.dx
if(u.D(u)>0.0001){u=r.c
t=r.dx.a
if(typeof t!=="number")return t.S()
s=r.y
if(typeof s!=="number")return H.B(s)
u.sU(-t*10*s)
s=r.b
t=r.dx.b
if(typeof t!=="number")return t.S()
u=r.x
if(typeof u!=="number")return H.B(u)
s.sU(-t*10*u)
r.a6()}},
fC:function(a){var u=this
if(H.l(H.f(a,"$ix"),"$idv").x){u.ch=!0
u.cy=u.c.d
u.db=u.b.d}},
fE:function(a){var u,t,s,r,q,p,o,n=this
a=H.l(H.f(a,"$ix"),"$ibj")
if(!J.T(n.d,a.x.b))return
u=a.c
t=a.d
s=t.q(0,a.y)
r=n.an(new V.S(s.a,s.b).t(0,2).w(0,u.ga9()))
s=n.c
q=r.a
if(typeof q!=="number")return q.S()
p=n.y
if(typeof p!=="number")return H.B(p)
o=n.cy
if(typeof o!=="number")return H.B(o)
s.sa8(0,-q*p+o)
o=n.b
p=r.b
if(typeof p!=="number")return p.S()
q=n.x
if(typeof q!=="number")return H.B(q)
s=n.db
if(typeof s!=="number")return H.B(s)
o.sa8(0,-p*q+s)
n.b.sU(0)
n.c.sU(0)
t=t.q(0,a.z)
n.dx=n.an(new V.S(t.a,t.b).t(0,2).w(0,u.ga9()))
n.a6()},
i9:function(a){var u=this
H.f(a,"$ix")
u.ch=u.cx=!0
u.cy=u.c.d
u.db=u.b.d},
i7:function(a){var u,t,s,r,q,p,o,n=this
a=H.l(H.f(a,"$ix"),"$ie0")
if(!H.A(n.cx))return
if(H.A(n.ch)){u=a.d.q(0,a.y)
u=new V.S(u.a,u.b)
u=u.D(u)
t=n.Q
if(typeof t!=="number")return H.B(t)
if(u<t)return
n.ch=!1}if(H.A(n.e)){u=a.c
t=a.d.q(0,a.y)
u=n.an(new V.S(t.a,t.b).t(0,2).w(0,u.ga9()))
n.dx=u
t=n.c
u=u.a
if(typeof u!=="number")return u.S()
s=n.y
if(typeof s!=="number")return H.B(s)
t.sU(-u*10*s)
s=n.b
u=n.dx.b
if(typeof u!=="number")return u.S()
t=n.x
if(typeof t!=="number")return H.B(t)
s.sU(-u*10*t)}else{u=a.c
t=a.d
s=t.q(0,a.y)
r=n.an(new V.S(s.a,s.b).t(0,2).w(0,u.ga9()))
s=n.c
q=r.a
if(typeof q!=="number")return q.S()
p=n.y
if(typeof p!=="number")return H.B(p)
o=n.cy
if(typeof o!=="number")return H.B(o)
s.sa8(0,-q*p+o)
o=n.b
p=r.b
if(typeof p!=="number")return p.S()
q=n.x
if(typeof q!=="number")return H.B(q)
s=n.db
if(typeof s!=="number")return H.B(s)
o.sa8(0,-p*q+s)
n.b.sU(0)
n.c.sU(0)
t=t.q(0,a.z)
n.dx=n.an(new V.S(t.a,t.b).t(0,2).w(0,u.ga9()))}n.a6()},
i5:function(a){var u,t,s,r=this
H.f(a,"$ix")
if(!H.A(r.cx))return
r.cx=!1
if(H.A(r.ch))return
u=r.dx
if(u.D(u)>0.0001){u=r.c
t=r.dx.a
if(typeof t!=="number")return t.S()
s=r.y
if(typeof s!=="number")return H.B(s)
u.sU(-t*10*s)
s=r.b
t=r.dx.b
if(typeof t!=="number")return t.S()
u=r.x
if(typeof u!=="number")return H.B(u)
s.sU(-t*10*u)
r.a6()}},
aT:function(a,b,c){var u,t,s,r=this,q=r.dy,p=b.e
if(typeof q!=="number")return q.W()
if(q<p){r.dy=p
u=b.y
r.c.al(0,u)
r.b.al(0,u)
q=r.b.d
t=Math.cos(q)
s=Math.sin(q)
q=V.aL(1,0,0,0,0,t,-s,0,0,s,t,0,0,0,0,1)
p=r.c.d
t=Math.cos(p)
s=Math.sin(p)
r.fr=q.t(0,V.aL(t,0,-s,0,0,1,0,0,s,0,t,0,0,0,0,1))}return r.fr},
$iai:1}
U.e9.prototype={
gp:function(){var u=this.r
return u==null?this.r=D.M():u},
O:function(a){var u=this.r
if(u!=null)u.F(a)},
aY:function(a){var u,t,s,r=this
if(r.a!=null)return!1
r.a=a
u=a.c
t=u.e
u=t==null?u.e=D.M():t
t=r.gfF()
u.h(0,t)
u=r.a.d
s=u.e;(s==null?u.e=D.M():s).h(0,t)
return!0},
fG:function(a){var u,t,s,r,q=this
H.f(a,"$ix")
if(!J.T(q.b,q.a.b.c))return
H.l(a,"$ics")
u=q.d
t=a.x.b
s=q.c
if(typeof t!=="number")return t.t()
r=u+t*s
if(u!==r){q.d=r
u=new D.F("zoom",u,r,[P.z])
u.b=!0
q.O(u)}},
aT:function(a,b,c){var u,t=this,s=t.e,r=b.e
if(s<r){t.e=r
u=Math.pow(10,t.d)
t.f=V.aL(u,0,0,0,0,u,0,0,0,0,u,0,0,0,0,1)}return t.f},
$iai:1}
M.db.prototype={
gp:function(){var u=this.r
return u==null?this.r=D.M():u},
Y:function(a){var u
H.f(a,"$ix")
u=this.r
if(u!=null)u.F(a)},
aU:function(){return this.Y(null)},
ht:function(a,b){var u,t,s,r,q,p,o,n=M.aw
H.j(b,"$ih",[n],"$ah")
for(u=b.length,t=this.ga_(),s={func:1,ret:-1,args:[D.x]},r=[s],q=0;q<b.length;b.length===u||(0,H.H)(b),++q){p=b[q]
if(p!=null){o=p.gp()
o.toString
H.n(t,s)
if(o.a==null)o.sa5(H.d([],r))
o=o.a;(o&&C.a).h(o,t)}}n=new D.bz([n])
n.b=!0
this.Y(n)},
hv:function(a,b){var u,t,s=M.aw
H.j(b,"$ih",[s],"$ah")
for(u=b.gV(b),t=this.ga_();u.B();)u.gJ(u).gp().P(0,t)
s=new D.bA([s])
s.b=!0
this.Y(s)},
ab:function(a){var u,t,s=this
if(s.f)return
s.f=!0
for(u=s.a,u=new J.ar(u,u.length,[H.v(u,0)]);u.B();){t=u.d
if(t!=null)t.ab(a)}s.f=!1},
$ah:function(){return[M.aw]},
$aX:function(){return[M.aw]},
$iaw:1}
M.dd.prototype={
gp:function(){var u=this.r
return u==null?this.r=D.M():u},
Y:function(a){var u
H.f(a,"$ix")
u=this.r
if(u!=null)u.F(a)},
aU:function(){return this.Y(null)},
sb5:function(a,b){var u,t,s=this
if(b==null)b=X.kb(null)
u=s.c
if(u!==b){if(u!=null)u.gp().P(0,s.ga_())
t=s.c
s.c=b
b.gp().h(0,s.ga_())
u=new D.F("target",t,s.c,[X.cE])
u.b=!0
s.Y(u)}},
sb6:function(a){var u,t=this,s=t.d
if(s!=a){if(s!=null)s.gp().P(0,t.ga_())
u=t.d
t.d=a
if(a!=null)a.gp().h(0,t.ga_())
s=new D.F("technique",u,t.d,[O.bG])
s.b=!0
t.Y(s)}},
ab:function(a){var u,t,s=this
a.cG(s.d)
s.c.a7(a)
u=s.b
u.toString
a.cy.bB(V.bD())
t=V.bD()
u.a
a.db.bB(t)
s.e.al(0,a)
s.e.ab(a)
s.b.toString
a.cy.b3()
a.db.b3()
s.c.toString
a.cF()},
$iaw:1}
M.di.prototype={
Y:function(a){var u
H.f(a,"$ix")
u=this.y
if(u!=null)u.F(a)},
aU:function(){return this.Y(null)},
fS:function(a,b){var u,t,s,r,q,p,o,n=E.ao
H.j(b,"$ih",[n],"$ah")
for(u=b.length,t=this.ga_(),s={func:1,ret:-1,args:[D.x]},r=[s],q=0;q<b.length;b.length===u||(0,H.H)(b),++q){p=b[q]
if(p!=null){o=p.z
if(o==null){o=new D.by()
o.sa5(null)
o.saM(null)
o.c=null
o.d=0
p.z=o}H.n(t,s)
if(o.a==null)o.sa5(H.d([],r))
o=o.a;(o&&C.a).h(o,t)}}n=new D.bz([n])
n.b=!0
this.Y(n)},
fU:function(a,b){var u,t,s=E.ao
H.j(b,"$ih",[s],"$ah")
for(u=b.gV(b),t=this.ga_();u.B();)u.gJ(u).gp().P(0,t)
s=new D.bA([s])
s.b=!0
this.Y(s)},
sdH:function(a){var u,t,s=this
if(a==null)a=X.l_(null)
u=s.b
if(u!==a){if(u!=null)u.gp().P(0,s.ga_())
t=s.b
s.b=a
a.gp().h(0,s.ga_())
u=new D.F("camera",t,s.b,[X.bQ])
u.b=!0
s.Y(u)}},
sb5:function(a,b){var u,t=this,s=t.c
if(s!==b){if(s!=null)s.gp().P(0,t.ga_())
u=t.c
t.c=b
b.gp().h(0,t.ga_())
s=new D.F("target",u,t.c,[X.cE])
s.b=!0
t.Y(s)}},
sb6:function(a){var u,t=this,s=t.d
if(s!=a){if(s!=null)s.gp().P(0,t.ga_())
u=t.d
t.d=a
if(a!=null)a.gp().h(0,t.ga_())
s=new D.F("technique",u,t.d,[O.bG])
s.b=!0
t.Y(s)}},
gp:function(){var u=this.y
return u==null?this.y=D.M():u},
ab:function(a){var u,t,s,r,q,p,o,n,m,l,k,j=this
a.cG(j.d)
j.c.a7(a)
u=j.b
t=a.c
s=a.d
r=u.c
q=u.d
p=u.e
o=p-q
n=1/Math.tan(r*0.5)
m=V.aL(-n/(t/s),0,0,0,0,n,0,0,0,0,p/o,-p*q/o,0,0,1,0)
u.a
a.cy.bB(m)
t=$.l0
if(t==null){t=V.l2()
s=V.ln()
r=$.lj
t=V.kX(t,s,r==null?$.lj=new V.R(0,0,-1):r)
$.l0=t
l=t}else l=t
t=u.b
if(t!=null){k=t.aT(0,a,u)
if(k!=null)l=k.t(0,l)}a.db.bB(l)
u=j.d
if(u!=null)u.al(0,a)
for(u=j.e.a,u=new J.ar(u,u.length,[H.v(u,0)]);u.B();)u.d.al(0,a)
for(u=j.e.a,u=new J.ar(u,u.length,[H.v(u,0)]);u.B();)u.d.ab(a)
j.b.toString
a.cy.b3()
a.db.b3()
j.c.aS(a)
a.cF()},
sf8:function(a,b){this.e=H.j(b,"$iX",[E.ao],"$aX")},
$iaw:1}
M.aw.prototype={}
A.d7.prototype={}
A.fd.prototype={
j:function(a,b){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<t;++s){r=u[s]
if(r.b===b)return r}return},
iW:function(){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<u.length;u.length===t||(0,H.H)(u),++s){r=u[s]
r.a.enableVertexAttribArray(r.c)}},
dL:function(){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<u.length;u.length===t||(0,H.H)(u),++s){r=u[s]
r.a.disableVertexAttribArray(r.c)}}}
A.dy.prototype={
eJ:function(d1,d2){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6=this,a7="Required uniform value, ",a8=", was not defined or used in shader.",a9="emissionTxt",b0="nullEmissionTxt",b1="ambientTxt",b2="nullAmbientTxt",b3="diffuseTxt",b4="nullDiffuseTxt",b5="invDiffuseTxt",b6="nullInvDiffuseTxt",b7="specularTxt",b8="nullSpecularTxt",b9="nullBumpTxt",c0="reflectTxt",c1="nullReflectTxt",c2="refractTxt",c3="nullRefractTxt",c4="alphaTxt",c5="nullAlphaTxt",c6="uniform mat4 objMat;\n",c7="   if(nullAlphaTxt > 0) return alpha;\n",c8="   if (a <= 0.000001) discard;\n",c9="precision mediump float;\n\n",d0="precision mediump float;\n\nvarying vec3 normalVec;\n"
a6.z=d1
u=new P.al("")
t=d1.fx
if(t){u.a=c6
s=c6}else s=""
r=d1.fy
s=(r?u.a=s+"uniform mat4 viewObjMat;\n":s)+"uniform mat4 projViewObjMat;\n"
u.a=s
s+="\n"
u.a=s
s=u.a=s+"attribute vec3 posAttr;\n"
q=d1.r1
if(q){s+="attribute vec3 normAttr;\n"
u.a=s}p=d1.r2
u.a=(p?u.a=s+"attribute vec3 binmAttr;\n":s)+"\n"
d1.ik(u)
d1.is(u)
d1.il(u)
d1.iA(u)
d1.iB(u)
d1.iu(u)
d1.iF(u)
s=u.a+="vec4 getPos()\n"
s+="{\n"
u.a=s
o=d1.x1
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
u.a=s}if(d1.rx){s+="   txt2D = getTxt2D();\n"
u.a=s}if(d1.ry){s+="   txtCube = getTxtCube();\n"
u.a=s}if(d1.k3){s+="   objPos = getObjPos();\n"
u.a=s}s=(d1.k4?u.a=s+"   viewPos = getViewPos();\n":s)+"   gl_Position = getPos();\n"
u.a=s
s+="}\n"
u.a=s
s=u.a=s+"\n"
q=a6.z
u=new P.al("")
u.a="precision mediump float;\n"
u.a=c9
p=q.r1
if(p){u.a=d0
o=d0}else o=c9
if(q.r2){o+="varying vec3 binormalVec;\n"
u.a=o}if(q.rx){o+="varying vec2 txt2D;\n"
u.a=o}if(q.ry){o+="varying vec3 txtCube;\n"
u.a=o}if(q.k3){o+="varying vec3 objPos;\n"
u.a=o}o=u.a=(q.k4?u.a=o+"varying vec3 viewPos;\n":o)+"\n"
n=q.y2
if(n){o+="uniform mat4 colorMat;\n"
u.a=o}u.a=(q.fr?u.a=o+"uniform mat4 invViewMat;\n":o)+"\n"
q.ip(u)
q.ij(u)
q.im(u)
q.iq(u)
q.iy(u)
o=q.dy
if(o){m=u.a+="// === Enviromental ===\n"
m+="\n"
u.a=m
m+="uniform samplerCube envSampler;\n"
u.a=m
m+="uniform int nullEnvTxt;\n"
u.a=m
u.a=m+"\n"
q.iw(u)
q.ix(u)}q.it(u)
m=u.a+="// === Alpha ===\n"
m=u.a=m+"\n"
l=q.y
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
case C.h:m+=c7
u.a=m
m+="   float a = alpha*texture2D(alphaTxt, txt2D).a;\n"
u.a=m
m+=c8
u.a=m
m=u.a=m+"   return a;\n"
break
case C.i:m+=c7
u.a=m
m+="   float a = alpha*textureCube(alphaTxt, txtCube).a;\n"
u.a=m
m+=c8
u.a=m
m=u.a=m+"   return a;\n"
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
k=H.d([],[P.i])
if(q.b!==C.d)C.a.h(k,"ambient()")
if(q.c!==C.d)C.a.h(k,"diffuse(norm, litVec)")
if(q.d!==C.d)C.a.h(k,"invDiffuse(norm, litVec)")
if(q.e!==C.d)C.a.h(k,"specular(norm, litVec)")
m=u.a+="   return litClr*("+C.a.C(k," + ")+");\n"
m+="}\n"
u.a=m
u.a=m+"\n"
q.io(u)
q.iv(u)
q.iz(u)
q.iC(u)
q.iD(u)
q.iE(u)
q.ir(u)}m=u.a+="// === Main ===\n"
m+="\n"
u.a=m
m+="void main()\n"
u.a=m
m+="{\n"
u.a=m
m=u.a=m+"   float alpha = alphaValue();\n"
p=p?u.a=m+"   vec3 norm = normal();\n":m
if(o)u.a=p+"   vec3 refl = reflect(normalize(viewPos), norm);\n"
j=H.d([],[P.i])
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
i="vec4("+C.a.C(j," + ")+", alpha);"
q=u.a
q=u.a=(n?u.a=q+("   gl_FragColor = colorMat*"+i+"\n"):u.a=q+("   gl_FragColor = "+i+"\n"))+"}\n"
a6.eh(0,s.charCodeAt(0)==0?s:s,q.charCodeAt(0)==0?q:q)
a6.Q=a6.x.j(0,"posAttr")
a6.cx=a6.x.j(0,"normAttr")
a6.ch=a6.x.j(0,"binmAttr")
a6.cy=a6.x.j(0,"txt2DAttr")
a6.db=a6.x.j(0,"txtCubeAttr")
a6.dx=a6.x.j(0,"bendAttr")
if(d1.fr)a6.id=H.l(a6.y.m(0,"invViewMat"),"$iam")
if(t)a6.dy=H.l(a6.y.m(0,"objMat"),"$iam")
if(r)a6.fr=H.l(a6.y.m(0,"viewObjMat"),"$iam")
a6.fy=H.l(a6.y.m(0,"projViewObjMat"),"$iam")
if(d1.x2)a6.k1=H.l(a6.y.m(0,"txt2DMat"),"$icI")
if(d1.y1)a6.k2=H.l(a6.y.m(0,"txtCubeMat"),"$iam")
if(d1.y2)a6.k3=H.l(a6.y.m(0,"colorMat"),"$iam")
a6.sf4(H.d([],[A.am]))
t=d1.ap
if(t>0){a6.k4=H.f(a6.y.m(0,"bendMatCount"),"$iJ")
for(h=0;h<t;++h){s=a6.r1
r=a6.y
q="bendValues["+h+"].mat"
g=r.j(0,q)
if(g==null)H.r(P.t(a7+q+a8));(s&&C.a).h(s,H.l(g,"$iam"))}}t=d1.a
if(t!==C.d){a6.r2=H.l(a6.y.m(0,"emissionClr"),"$iN")
switch(t){case C.d:break
case C.j:break
case C.h:a6.rx=H.l(a6.y.m(0,a9),"$iab")
a6.x1=H.l(a6.y.m(0,b0),"$iJ")
break
case C.i:a6.ry=H.l(a6.y.m(0,a9),"$iap")
a6.x1=H.l(a6.y.m(0,b0),"$iJ")
break}}t=d1.b
if(t!==C.d){a6.x2=H.l(a6.y.m(0,"ambientClr"),"$iN")
switch(t){case C.d:break
case C.j:break
case C.h:a6.y1=H.l(a6.y.m(0,b1),"$iab")
a6.ap=H.l(a6.y.m(0,b2),"$iJ")
break
case C.i:a6.y2=H.l(a6.y.m(0,b1),"$iap")
a6.ap=H.l(a6.y.m(0,b2),"$iJ")
break}}t=d1.c
if(t!==C.d){a6.ak=H.l(a6.y.m(0,"diffuseClr"),"$iN")
switch(t){case C.d:break
case C.j:break
case C.h:a6.bj=H.l(a6.y.m(0,b3),"$iab")
a6.bk=H.l(a6.y.m(0,b4),"$iJ")
break
case C.i:a6.dP=H.l(a6.y.m(0,b3),"$iap")
a6.bk=H.l(a6.y.m(0,b4),"$iJ")
break}}t=d1.d
if(t!==C.d){a6.bl=H.l(a6.y.m(0,"invDiffuseClr"),"$iN")
switch(t){case C.d:break
case C.j:break
case C.h:a6.dQ=H.l(a6.y.m(0,b5),"$iab")
a6.bm=H.l(a6.y.m(0,b6),"$iJ")
break
case C.i:a6.dR=H.l(a6.y.m(0,b5),"$iap")
a6.bm=H.l(a6.y.m(0,b6),"$iJ")
break}}t=d1.e
if(t!==C.d){a6.bp=H.l(a6.y.m(0,"shininess"),"$ia_")
a6.bn=H.l(a6.y.m(0,"specularClr"),"$iN")
switch(t){case C.d:break
case C.j:break
case C.h:a6.dS=H.l(a6.y.m(0,b7),"$iab")
a6.bo=H.l(a6.y.m(0,b8),"$iJ")
break
case C.i:a6.dT=H.l(a6.y.m(0,b7),"$iap")
a6.bo=H.l(a6.y.m(0,b8),"$iJ")
break}}switch(d1.f){case C.d:break
case C.j:break
case C.h:a6.dU=H.l(a6.y.m(0,"bumpTxt"),"$iab")
a6.bq=H.l(a6.y.m(0,b9),"$iJ")
break
case C.i:a6.dV=H.l(a6.y.m(0,"bumpTxt"),"$iap")
a6.bq=H.l(a6.y.m(0,b9),"$iJ")
break}if(d1.dy){a6.dW=H.l(a6.y.m(0,"envSampler"),"$iap")
a6.dX=H.l(a6.y.m(0,"nullEnvTxt"),"$iJ")
t=d1.r
if(t!==C.d){a6.br=H.l(a6.y.m(0,"reflectClr"),"$iN")
switch(t){case C.d:break
case C.j:break
case C.h:a6.dY=H.l(a6.y.m(0,c0),"$iab")
a6.bs=H.l(a6.y.m(0,c1),"$iJ")
break
case C.i:a6.dZ=H.l(a6.y.m(0,c0),"$iap")
a6.bs=H.l(a6.y.m(0,c1),"$iJ")
break}}t=d1.x
if(t!==C.d){a6.bt=H.l(a6.y.m(0,"refraction"),"$ia_")
a6.bu=H.l(a6.y.m(0,"refractClr"),"$iN")
switch(t){case C.d:break
case C.j:break
case C.h:a6.e_=H.l(a6.y.m(0,c2),"$iab")
a6.bv=H.l(a6.y.m(0,c3),"$iJ")
break
case C.i:a6.e0=H.l(a6.y.m(0,c2),"$iap")
a6.bv=H.l(a6.y.m(0,c3),"$iJ")
break}}}t=d1.y
if(t!==C.d){a6.bw=H.l(a6.y.m(0,"alpha"),"$ia_")
switch(t){case C.d:break
case C.j:break
case C.h:a6.e1=H.l(a6.y.m(0,c4),"$iab")
a6.bx=H.l(a6.y.m(0,c5),"$iJ")
break
case C.i:a6.e2=H.l(a6.y.m(0,c4),"$iap")
a6.bx=H.l(a6.y.m(0,c5),"$iJ")
break}}a6.seR(H.d([],[A.cH]))
a6.seS(H.d([],[A.cJ]))
a6.seT(H.d([],[A.cK]))
a6.seU(H.d([],[A.cL]))
a6.seV(H.d([],[A.cM]))
a6.seW(H.d([],[A.cN]))
if(d1.k2){t=d1.z
if(t>0){a6.e3=H.f(a6.y.m(0,"dirLightCount"),"$iJ")
for(h=0;h<t;++h){s=a6.y
r="dirLights["+h+"].viewDir"
g=s.j(0,r)
if(g==null)H.r(P.t(a7+r+a8))
H.l(g,"$iN")
s=a6.y
r="dirLights["+h+"].color"
f=s.j(0,r)
if(f==null)H.r(P.t(a7+r+a8))
H.l(f,"$iN")
s=a6.cm;(s&&C.a).h(s,new A.cH(g,f))}}t=d1.Q
if(t>0){a6.e4=H.f(a6.y.m(0,"pntLightCount"),"$iJ")
for(h=0;h<t;++h){s=a6.y
r="pntLights["+h+"].point"
g=s.j(0,r)
if(g==null)H.r(P.t(a7+r+a8))
H.l(g,"$iN")
s=a6.y
r="pntLights["+h+"].viewPnt"
f=s.j(0,r)
if(f==null)H.r(P.t(a7+r+a8))
H.l(f,"$iN")
s=a6.y
r="pntLights["+h+"].color"
e=s.j(0,r)
if(e==null)H.r(P.t(a7+r+a8))
H.l(e,"$iN")
s=a6.y
r="pntLights["+h+"].att0"
d=s.j(0,r)
if(d==null)H.r(P.t(a7+r+a8))
H.l(d,"$ia_")
s=a6.y
r="pntLights["+h+"].att1"
c=s.j(0,r)
if(c==null)H.r(P.t(a7+r+a8))
H.l(c,"$ia_")
s=a6.y
r="pntLights["+h+"].att2"
b=s.j(0,r)
if(b==null)H.r(P.t(a7+r+a8))
H.l(b,"$ia_")
s=a6.cn;(s&&C.a).h(s,new A.cJ(g,f,e,d,c,b))}}t=d1.ch
if(t>0){a6.e5=H.f(a6.y.m(0,"spotLightCount"),"$iJ")
for(h=0;h<t;++h){s=a6.y
r="spotLights["+h+"].objPnt"
g=s.j(0,r)
if(g==null)H.r(P.t(a7+r+a8))
H.l(g,"$iN")
s=a6.y
r="spotLights["+h+"].objDir"
f=s.j(0,r)
if(f==null)H.r(P.t(a7+r+a8))
H.l(f,"$iN")
s=a6.y
r="spotLights["+h+"].viewPnt"
e=s.j(0,r)
if(e==null)H.r(P.t(a7+r+a8))
H.l(e,"$iN")
s=a6.y
r="spotLights["+h+"].color"
d=s.j(0,r)
if(d==null)H.r(P.t(a7+r+a8))
H.l(d,"$iN")
s=a6.y
r="spotLights["+h+"].cutoff"
c=s.j(0,r)
if(c==null)H.r(P.t(a7+r+a8))
H.l(c,"$ia_")
s=a6.y
r="spotLights["+h+"].coneAngle"
b=s.j(0,r)
if(b==null)H.r(P.t(a7+r+a8))
H.l(b,"$ia_")
s=a6.y
r="spotLights["+h+"].att0"
a=s.j(0,r)
if(a==null)H.r(P.t(a7+r+a8))
H.l(a,"$ia_")
s=a6.y
r="spotLights["+h+"].att1"
a0=s.j(0,r)
if(a0==null)H.r(P.t(a7+r+a8))
H.l(a0,"$ia_")
s=a6.y
r="spotLights["+h+"].att2"
a1=s.j(0,r)
if(a1==null)H.r(P.t(a7+r+a8))
H.l(a1,"$ia_")
s=a6.co;(s&&C.a).h(s,new A.cK(g,f,e,d,c,b,a,a0,a1))}}t=d1.cx
if(t>0){a6.e6=H.f(a6.y.m(0,"txtDirLightCount"),"$iJ")
for(h=0;h<t;++h){s=a6.y
r="txtDirLights["+h+"].objUp"
g=s.j(0,r)
if(g==null)H.r(P.t(a7+r+a8))
H.l(g,"$iN")
s=a6.y
r="txtDirLights["+h+"].objRight"
f=s.j(0,r)
if(f==null)H.r(P.t(a7+r+a8))
H.l(f,"$iN")
s=a6.y
r="txtDirLights["+h+"].objDir"
e=s.j(0,r)
if(e==null)H.r(P.t(a7+r+a8))
H.l(e,"$iN")
s=a6.y
r="txtDirLights["+h+"].viewDir"
d=s.j(0,r)
if(d==null)H.r(P.t(a7+r+a8))
H.l(d,"$iN")
s=a6.y
r="txtDirLights["+h+"].color"
c=s.j(0,r)
if(c==null)H.r(P.t(a7+r+a8))
H.l(c,"$iN")
s=a6.y
r="txtDirLights["+h+"].nullTxt"
b=s.j(0,r)
if(b==null)H.r(P.t(a7+r+a8))
H.l(b,"$iJ")
s=a6.y
r="txtDirLightsTxt2D"+h
a=s.j(0,r)
if(a==null)H.r(P.t(a7+r+a8))
H.l(a,"$iab")
s=a6.cp;(s&&C.a).h(s,new A.cL(g,f,e,d,c,a,b))}}t=d1.cy
if(t>0){a6.e7=H.f(a6.y.m(0,"txtPntLightCount"),"$iJ")
for(h=0;h<t;++h){s=a6.y
r="txtPntLights["+h+"].point"
g=s.j(0,r)
if(g==null)H.r(P.t(a7+r+a8))
H.l(g,"$iN")
s=a6.y
r="txtPntLights["+h+"].viewPnt"
f=s.j(0,r)
if(f==null)H.r(P.t(a7+r+a8))
H.l(f,"$iN")
s=a6.y
r="txtPntLights["+h+"].invViewRotMat"
e=s.j(0,r)
if(e==null)H.r(P.t(a7+r+a8))
H.l(e,"$icI")
s=a6.y
r="txtPntLights["+h+"].color"
d=s.j(0,r)
if(d==null)H.r(P.t(a7+r+a8))
H.l(d,"$iN")
s=a6.y
r="txtPntLights["+h+"].nullTxt"
c=s.j(0,r)
if(c==null)H.r(P.t(a7+r+a8))
H.l(c,"$iJ")
s=a6.y
r="txtPntLights["+h+"].att0"
b=s.j(0,r)
if(b==null)H.r(P.t(a7+r+a8))
H.l(b,"$ia_")
s=a6.y
r="txtPntLights["+h+"].att1"
a=s.j(0,r)
if(a==null)H.r(P.t(a7+r+a8))
H.l(a,"$ia_")
s=a6.y
r="txtPntLights["+h+"].att2"
a0=s.j(0,r)
if(a0==null)H.r(P.t(a7+r+a8))
H.l(a0,"$ia_")
s=a6.y
r="txtPntLightsTxtCube"+h
a1=s.j(0,r)
if(a1==null)H.r(P.t(a7+r+a8))
H.l(a1,"$iap")
s=a6.cq;(s&&C.a).h(s,new A.cM(g,f,e,d,a1,c,b,a,a0))}}t=d1.db
if(t>0){a6.e8=H.f(a6.y.m(0,"txtSpotLightCount"),"$iJ")
for(h=0;h<t;++h){s=a6.y
r="txtSpotLights["+h+"].objPnt"
g=s.j(0,r)
if(g==null)H.r(P.t(a7+r+a8))
H.l(g,"$iN")
s=a6.y
r="txtSpotLights["+h+"].objDir"
f=s.j(0,r)
if(f==null)H.r(P.t(a7+r+a8))
H.l(f,"$iN")
s=a6.y
r="txtSpotLights["+h+"].objUp"
e=s.j(0,r)
if(e==null)H.r(P.t(a7+r+a8))
H.l(e,"$iN")
s=a6.y
r="txtSpotLights["+h+"].objRight"
d=s.j(0,r)
if(d==null)H.r(P.t(a7+r+a8))
H.l(d,"$iN")
s=a6.y
r="txtSpotLights["+h+"].viewPnt"
c=s.j(0,r)
if(c==null)H.r(P.t(a7+r+a8))
H.l(c,"$iN")
s=a6.y
r="txtSpotLights["+h+"].nullTxt"
b=s.j(0,r)
if(b==null)H.r(P.t(a7+r+a8))
H.l(b,"$iJ")
s=a6.y
r="txtSpotLights["+h+"].color"
a=s.j(0,r)
if(a==null)H.r(P.t(a7+r+a8))
H.l(a,"$iN")
s=a6.y
r="txtSpotLights["+h+"].tuScalar"
a0=s.j(0,r)
if(a0==null)H.r(P.t(a7+r+a8))
H.l(a0,"$ia_")
s=a6.y
r="txtSpotLights["+h+"].tvScalar"
a1=s.j(0,r)
if(a1==null)H.r(P.t(a7+r+a8))
H.l(a1,"$ia_")
s=a6.y
r="txtSpotLights["+h+"].att0"
a2=s.j(0,r)
if(a2==null)H.r(P.t(a7+r+a8))
H.l(a2,"$ia_")
s=a6.y
r="txtSpotLights["+h+"].att1"
a3=s.j(0,r)
if(a3==null)H.r(P.t(a7+r+a8))
H.l(a3,"$ia_")
s=a6.y
r="txtSpotLights["+h+"].att2"
a4=s.j(0,r)
if(a4==null)H.r(P.t(a7+r+a8))
H.l(a4,"$ia_")
s=a6.y
r="txtSpotLightsTxt2D"+h
a5=s.j(0,r)
if(a5==null)H.r(P.t(a7+r+a8))
H.l(a5,"$iab")
s=a6.cr;(s&&C.a).h(s,new A.cN(g,f,e,d,c,a5,b,a,a0,a1,a2,a3,a4))}}}},
aj:function(a,b,c){C.c.a1(b.a,b.d,1)},
af:function(a,b,c){C.c.a1(b.a,b.d,1)},
sf4:function(a){this.r1=H.j(a,"$ib",[A.am],"$ab")},
seR:function(a){this.cm=H.j(a,"$ib",[A.cH],"$ab")},
seS:function(a){this.cn=H.j(a,"$ib",[A.cJ],"$ab")},
seT:function(a){this.co=H.j(a,"$ib",[A.cK],"$ab")},
seU:function(a){this.cp=H.j(a,"$ib",[A.cL],"$ab")},
seV:function(a){this.cq=H.j(a,"$ib",[A.cM],"$ab")},
seW:function(a){this.cr=H.j(a,"$ib",[A.cN],"$ab")}}
A.he.prototype={
ik:function(a){var u,t,s,r=this
if(!r.x1)return
u=a.a+="struct BendingValue\n"
u+="{\n"
a.a=u
u+="   mat4 mat;\n"
a.a=u
u+="};\n"
a.a=u
a.a=u+"uniform int bendMatCount;\n"
u=a.a+="uniform BendingValue bendValues["+r.ap+"];\n"
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
is:function(a){var u
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
il:function(a){var u
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
iA:function(a){var u,t
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
iB:function(a){var u,t
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
iu:function(a){var u
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
iF:function(a){var u
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
u=a.a=u+("uniform int null"+(c[0].toUpperCase()+C.b.aH(c,1))+"Txt;\n")
if(b===C.h)a.a=u+("uniform sampler2D "+c+"Txt;\n")
else if(b===C.i)a.a=u+("uniform samplerCube "+c+"Txt;\n")},
ip:function(a){var u,t="   if(nullEmissionTxt > 0) return emissionClr;\n",s=this.a
if(s===C.d)return
u=a.a+="// === Emission ===\n"
a.a=u+"\n"
this.aw(a,s,"emission")
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
ij:function(a){var u,t="   if(nullAmbientTxt > 0) return ambientClr;\n",s=this.b
if(s===C.d)return
u=a.a+="// === Ambient ===\n"
a.a=u+"\n"
this.aw(a,s,"ambient")
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
im:function(a){var u,t="   if(nullDiffuseTxt > 0) diffuseColor = diffuseClr;\n",s=this.c
if(s===C.d)return
u=a.a+="// === Diffuse ===\n"
a.a=u+"\n"
this.aw(a,s,"diffuse")
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
iq:function(a){var u,t="   if(nullInvDiffuseTxt > 0) invDiffuseColor = invDiffuseClr;\n",s=this.d
if(s===C.d)return
u=a.a+="// === Inverse Diffuse ===\n"
a.a=u+"\n"
this.aw(a,s,"invDiffuse")
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
iy:function(a){var u,t="   if(nullSpecularTxt > 0) specularColor = specularClr;\n",s=this.e
if(s===C.d)return
u=a.a+="// === Specular ===\n"
a.a=u+"\n"
this.aw(a,s,"specular")
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
it:function(a){var u,t,s="uniform int nullBumpTxt;\n",r="   return normalize(normalVec);\n",q="   if(nullBumpTxt > 0) return normalVec;\n",p="   vec3 n = normalize(normalVec);\n",o="   vec3 b = normalize(binormalVec);\n",n="   b = cross(n, c);\n",m="   mat3 mat = mat3( b.x,  b.y,  b.z,\n",l="                   -c.x, -c.y, -c.z,\n",k="                    n.x,  n.y,  n.z);\n",j="   return mat * normalize(2.0*color - 1.0);\n"
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
iw:function(a){var u,t="   if(nullReflectTxt > 0) return vec3(0.0, 0.0, 0.0);\n",s=this.r
if(s===C.d)return
u=a.a+="// === Reflection ===\n"
a.a=u+"\n"
this.aw(a,s,"reflect")
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
ix:function(a){var u,t="   if(nullRefractTxt > 0) return vec3(0.0, 0.0, 0.0);\n",s=this.x
if(s===C.d)return
u=a.a+="// === Refraction ===\n"
a.a=u+"\n"
this.aw(a,s,"refract")
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
io:function(a){var u,t=this.z
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
iv:function(a){var u,t=this.Q
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
iz:function(a){var u,t=this.ch
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
iC:function(a){var u,t,s=this.cx
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
iD:function(a){var u,t,s=this.cy
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
iE:function(a){var u,t,s=this.db
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
ir:function(a){var u
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
A.cH.prototype={}
A.cL.prototype={}
A.cJ.prototype={}
A.cM.prototype={}
A.cK.prototype={}
A.cN.prototype={}
A.cA.prototype={
cV:function(a,b){var u=this
u.y=u.x=u.r=u.f=u.e=u.d=u.c=null},
eh:function(a,b,c){var u,t,s,r=this
r.c=b
r.d=c
r.e=r.da(b,35633)
r.f=r.da(r.d,35632)
u=r.a
t=u.createProgram()
r.r=t
u.attachShader(t,r.e)
u.attachShader(r.r,r.f)
u.linkProgram(r.r)
if(!H.A(H.lL(u.getProgramParameter(r.r,35714)))){s=u.getProgramInfoLog(r.r)
u.deleteProgram(r.r)
H.r(P.t("Failed to link shader: "+H.m(s)))}r.hU()
r.hW()},
a7:function(a){a.a.useProgram(this.r)
this.x.iW()},
da:function(a,b){var u,t=this.a,s=t.createShader(b)
t.shaderSource(s,a)
t.compileShader(s)
if(!H.A(H.lL(t.getShaderParameter(s,35713)))){u=t.getShaderInfoLog(s)
t.deleteShader(s)
throw H.c(P.t("Error compiling shader '"+H.m(s)+"': "+H.m(u)))}return s},
hU:function(){var u,t,s,r=this,q=H.d([],[A.d7]),p=r.a,o=H.ad(p.getProgramParameter(r.r,35721))
if(typeof o!=="number")return H.B(o)
u=0
for(;u<o;++u){t=p.getActiveAttrib(r.r,u)
s=p.getAttribLocation(r.r,t.name)
C.a.h(q,new A.d7(p,t.name,s))}r.x=new A.fd(q)},
hW:function(){var u,t,s,r=this,q=H.d([],[A.e1]),p=r.a,o=H.ad(p.getProgramParameter(r.r,35718))
if(typeof o!=="number")return H.B(o)
u=0
for(;u<o;++u){t=p.getActiveUniform(r.r,u)
s=p.getUniformLocation(r.r,t.name)
C.a.h(q,r.iR(t.type,t.size,t.name,s))}r.y=new A.iq(q)},
aJ:function(a,b,c){var u=this.a
if(a===1)return new A.J(u,b,c)
else return A.kl(u,this.r,b,a,c)},
fb:function(a,b,c){var u=this.a
if(a===1)return new A.ab(u,b,c)
else return A.kl(u,this.r,b,a,c)},
fc:function(a,b,c){var u=this.a
if(a===1)return new A.ap(u,b,c)
else return A.kl(u,this.r,b,a,c)},
bg:function(a,b){return new P.ek(a+" uniform variables are unsupported by all browsers.\n"+("Please change the type of "+H.m(b)+"."))},
iR:function(a,b,c,d){var u=this
switch(a){case 5120:return u.aJ(b,c,d)
case 5121:return u.aJ(b,c,d)
case 5122:return u.aJ(b,c,d)
case 5123:return u.aJ(b,c,d)
case 5124:return u.aJ(b,c,d)
case 5125:return u.aJ(b,c,d)
case 5126:return new A.a_(u.a,c,d)
case 35664:return new A.ax(u.a,c,d)
case 35665:return new A.N(u.a,c,d)
case 35666:return new A.e2(u.a,c,d)
case 35667:return new A.im(u.a,c,d)
case 35668:return new A.io(u.a,c,d)
case 35669:return new A.ip(u.a,c,d)
case 35674:return new A.ir(u.a,c,d)
case 35675:return new A.cI(u.a,c,d)
case 35676:return new A.am(u.a,c,d)
case 35678:return u.fb(b,c,d)
case 35680:return u.fc(b,c,d)
case 35670:throw H.c(u.bg("BOOL",c))
case 35671:throw H.c(u.bg("BOOL_VEC2",c))
case 35672:throw H.c(u.bg("BOOL_VEC3",c))
case 35673:throw H.c(u.bg("BOOL_VEC4",c))
default:throw H.c(P.t("Unknown uniform variable type "+H.m(a)+" for "+H.m(c)+"."))}}}
A.bT.prototype={
i:function(a){return this.b}}
A.bv.prototype={
i:function(a){return this.b}}
A.dV.prototype={
eN:function(a,b,c){var u,t,s,r,q,p=this,o="Required uniform value, ",n=", was not defined or used in shader."
p.eh(0,"attribute vec3 posAttr;\n\nvarying vec2 pos;\n\nvoid main()\n{\n  pos = posAttr.xy*0.5 + 0.5;\n  gl_Position = vec4(posAttr, 1.0);\n}\n".charCodeAt(0)==0?"attribute vec3 posAttr;\n\nvarying vec2 pos;\n\nvoid main()\n{\n  pos = posAttr.xy*0.5 + 0.5;\n  gl_Position = vec4(posAttr, 1.0);\n}\n":"attribute vec3 posAttr;\n\nvarying vec2 pos;\n\nvoid main()\n{\n  pos = posAttr.xy*0.5 + 0.5;\n  gl_Position = vec4(posAttr, 1.0);\n}\n",A.n3(a,b))
p.z=p.x.j(0,"posAttr")
p.Q=H.l(p.y.m(0,"txtCount"),"$iJ")
p.ch=H.l(p.y.m(0,"backClr"),"$ie2")
p.sig(H.d([],[A.ab]))
p.sf9(H.d([],[A.am]))
u=[A.ax]
p.si_(H.d([],u))
p.si0(H.d([],u))
p.sfe(H.d([],u))
p.sff(H.d([],u))
p.sfq(H.d([],[A.J]))
for(t=0;t<a;++t){u=p.cx
s=p.y
r="txt"+t
q=s.j(0,r)
if(q==null)H.r(P.t(o+r+n));(u&&C.a).h(u,H.l(q,"$iab"))
u=p.cy
s=p.y
r="clrMat"+t
q=s.j(0,r)
if(q==null)H.r(P.t(o+r+n));(u&&C.a).h(u,H.l(q,"$iam"))
u=p.db
s=p.y
r="srcLoc"+t
q=s.j(0,r)
if(q==null)H.r(P.t(o+r+n));(u&&C.a).h(u,H.l(q,"$iax"))
u=p.dx
s=p.y
r="srcSize"+t
q=s.j(0,r)
if(q==null)H.r(P.t(o+r+n));(u&&C.a).h(u,H.l(q,"$iax"))
u=p.dy
s=p.y
r="destLoc"+t
q=s.j(0,r)
if(q==null)H.r(P.t(o+r+n));(u&&C.a).h(u,H.l(q,"$iax"))
u=p.fr
s=p.y
r="destSize"+t
q=s.j(0,r)
if(q==null)H.r(P.t(o+r+n));(u&&C.a).h(u,H.l(q,"$iax"))
u=p.fx
s=p.y
r="flip"+t
q=s.j(0,r)
if(q==null)H.r(P.t(o+r+n));(u&&C.a).h(u,H.l(q,"$iJ"))}},
sig:function(a){this.cx=H.j(a,"$ib",[A.ab],"$ab")},
sf9:function(a){this.cy=H.j(a,"$ib",[A.am],"$ab")},
si_:function(a){this.db=H.j(a,"$ib",[A.ax],"$ab")},
si0:function(a){this.dx=H.j(a,"$ib",[A.ax],"$ab")},
sfe:function(a){this.dy=H.j(a,"$ib",[A.ax],"$ab")},
sff:function(a){this.fr=H.j(a,"$ib",[A.ax],"$ab")},
sfq:function(a){this.fx=H.j(a,"$ib",[A.J],"$ab")}}
A.e1.prototype={}
A.iq.prototype={
j:function(a,b){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<t;++s){r=u[s]
if(r.c===b)return r}return},
m:function(a,b){var u=this.j(0,b)
if(u==null)throw H.c(P.t("Required uniform value, "+b+", was not defined or used in shader."))
return u},
i:function(a){return this.T()},
T:function(){var u,t,s,r
for(u=this.a,t=u.length,s="",r=0;r<u.length;u.length===t||(0,H.H)(u),++r)s+=u[r].i(0)+"\n"
return s}}
A.J.prototype={
i:function(a){return"Uniform1i: "+H.m(this.c)}}
A.im.prototype={
i:function(a){return"Uniform2i: "+H.m(this.c)}}
A.io.prototype={
i:function(a){return"Uniform3i: "+H.m(this.c)}}
A.ip.prototype={
i:function(a){return"Uniform4i: "+H.m(this.c)}}
A.il.prototype={
i:function(a){return"Uniform1iv: "+H.m(this.c)},
sih:function(a){H.j(a,"$ib",[P.o],"$ab")}}
A.a_.prototype={
i:function(a){return"Uniform1f: "+H.m(this.c)}}
A.ax.prototype={
i:function(a){return"Uniform2f: "+H.m(this.c)}}
A.N.prototype={
i:function(a){return"Uniform3f: "+H.m(this.c)}}
A.e2.prototype={
i:function(a){return"Uniform4f: "+H.m(this.c)}}
A.ir.prototype={
i:function(a){return"Uniform1Mat2 "+H.m(this.c)}}
A.cI.prototype={
am:function(a){var u=new Float32Array(H.bJ(H.j(a,"$ib",[P.z],"$ab")))
C.c.ey(this.a,this.d,!1,u)},
i:function(a){return"UniformMat3: "+H.m(this.c)}}
A.am.prototype={
am:function(a){var u=new Float32Array(H.bJ(H.j(a,"$ib",[P.z],"$ab")))
C.c.cO(this.a,this.d,!1,u)},
i:function(a){return"UniformMat4: "+H.m(this.c)}}
A.ab.prototype={
i:function(a){return"UniformSampler2D: "+H.m(this.c)}}
A.ap.prototype={
i:function(a){return"UniformSamplerCube: "+H.m(this.c)}}
F.k4.prototype={
$1:function(a){return new V.a3(Math.cos(a),Math.sin(a),0)},
$S:41}
F.jP.prototype={
$3:function(a,b,c){var u,t,s,r,q,p=this,o=b*6.283185307179586,n=p.a,m=p.b,l=J.kH(n.$1(o),m)
m=J.mh(J.kH(n.$1(o+3.141592653589793/p.c),m),l)
m=new V.R(m.a,m.b,m.c)
u=m.w(0,Math.sqrt(m.D(m)))
n=$.lk
if(n==null){n=new V.R(1,0,0)
$.lk=n
t=n}else t=n
n=u.aB(!J.T(u,t)?V.lo():t)
s=n.w(0,Math.sqrt(n.D(n)))
n=s.aB(u)
t=n.w(0,Math.sqrt(n.D(n)))
r=c*6.283185307179586
n=Math.cos(r)
m=p.d
q=Math.sin(r)
n=t.t(0,n*m)
m=s.t(0,q*m)
m=J.mg(l,new V.a3(n.a-m.a,n.b-m.b,n.c-m.c))
if(!J.T(a.f,m)){a.f=H.f(m,"$ia3")
n=a.a
if(n!=null)n.aa()}},
$S:42}
F.a9.prototype={
b_:function(){var u=this
if(!u.gdM()){C.a.P(u.a.a.d.b,u)
u.a.a.aa()}u.hH()
u.hI()
u.hJ()},
hR:function(a){this.a=a
C.a.h(a.d.b,this)},
hS:function(a){this.b=a
C.a.h(a.d.c,this)},
hT:function(a){this.c=a
C.a.h(a.d.d,this)},
hH:function(){var u=this.a
if(u!=null){C.a.P(u.d.b,this)
this.a=null}},
hI:function(){var u=this.b
if(u!=null){C.a.P(u.d.c,this)
this.b=null}},
hJ:function(){var u=this.c
if(u!=null){C.a.P(u.d.d,this)
this.c=null}},
gdM:function(){return this.a==null||this.b==null||this.c==null},
f3:function(){var u,t,s,r=this.a,q=r==null?null:r.r
r=this.b
u=r==null?null:r.r
r=this.c
t=r==null?null:r.r
s=V.cP()
if(q!=null)s=s.n(0,q)
if(u!=null)s=s.n(0,u)
if(t!=null)s=s.n(0,t)
if(s.ej())return
return s.w(0,Math.sqrt(s.D(s)))},
f7:function(){var u,t,s,r=this.a,q=r==null?null:r.f
r=this.b
u=r==null?null:r.f
r=this.c
t=r==null?null:r.f
if(q==null||u==null||t==null)return
r=u.q(0,q)
r=new V.R(r.a,r.b,r.c)
s=r.w(0,Math.sqrt(r.D(r)))
r=t.q(0,q)
r=new V.R(r.a,r.b,r.c)
r=s.aB(r.w(0,Math.sqrt(r.D(r))))
return r.w(0,Math.sqrt(r.D(r)))},
cg:function(){var u,t=this
if(t.d!=null)return!0
u=t.f3()
if(u==null){u=t.f7()
if(u==null)return!1}t.d=u
t.a.a.aa()
return!0},
f2:function(){var u,t,s,r=this.a,q=r==null?null:r.x
r=this.b
u=r==null?null:r.x
r=this.c
t=r==null?null:r.x
s=V.cP()
if(q!=null)s=s.n(0,q)
if(u!=null)s=s.n(0,u)
if(t!=null)s=s.n(0,t)
if(s.ej())return
return s.w(0,Math.sqrt(s.D(s)))},
f6:function(){var u,t,s,r,q,p,o,n=this,m=null,l=n.a,k=l==null,j=k?m:l.f,i=n.b,h=i==null,g=h?m:i.f,f=n.c,e=f==null,d=e?m:f.f
if(j==null||g==null||d==null)return
u=k?m:l.y
t=h?m:i.y
s=e?m:f.y
if(u==null||t==null||s==null)return
l=t.b
r=l-s.b
if(Math.abs(r-0)<$.O().a){l=d.q(0,g)
l=new V.R(l.a,l.b,l.c)
q=l.w(0,Math.sqrt(l.D(l)))
if(s.a-t.a<0)q=q.S(0)}else{p=(l-u.b)/r
l=d.q(0,g).t(0,p).n(0,g).q(0,j)
l=new V.R(l.a,l.b,l.c)
q=l.w(0,Math.sqrt(l.D(l)))
s=s.a
t=t.a
if((s-t)*p+t-u.a<0)q=q.S(0)}l=n.d
if(l!=null){o=l.w(0,Math.sqrt(l.D(l)))
l=o.aB(q)
l=l.w(0,Math.sqrt(l.D(l))).aB(o)
q=l.w(0,Math.sqrt(l.D(l)))}return q},
ce:function(){var u,t=this
if(t.e!=null)return!0
u=t.f2()
if(u==null){u=t.f6()
if(u==null)return!1}t.e=u
t.a.a.aa()
return!0},
giO:function(a){var u=this
if(J.T(u.a,u.b))return!0
if(J.T(u.b,u.c))return!0
if(J.T(u.c,u.a))return!0
return!1},
u:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.T()},
L:function(a){var u,t,s=this
if(s.gdM())return a+"disposed"
u=a+C.b.aE(J.aX(s.a.e),0)+", "+C.b.aE(J.aX(s.b.e),0)+", "+C.b.aE(J.aX(s.c.e),0)+" {"
t=s.d
u=t!=null?u+(t.i(0)+", "):u+"-, "
t=s.e
return t!=null?u+(t.i(0)+"}"):u+"-}"},
T:function(){return this.L("")}}
F.fK.prototype={}
F.hU.prototype={
b0:function(a,b,c){var u,t=b.a
t.a.a.E()
t=t.e
u=c.a
u.a.a.E()
if(t==u.e){t=b.b
t.a.a.E()
t=t.e
u=c.b
u.a.a.E()
if(t==u.e){t=b.c
t.a.a.E()
t=t.e
u=c.c
u.a.a.E()
u=t==u.e
t=u}else t=!1
return t}else{t=b.a
t.a.a.E()
t=t.e
u=c.b
u.a.a.E()
if(t==u.e){t=b.b
t.a.a.E()
t=t.e
u=c.c
u.a.a.E()
if(t==u.e){t=b.c
t.a.a.E()
t=t.e
u=c.a
u.a.a.E()
u=t==u.e
t=u}else t=!1
return t}else{t=b.a
t.a.a.E()
t=t.e
u=c.c
u.a.a.E()
if(t==u.e){t=b.b
t.a.a.E()
t=t.e
u=c.a
u.a.a.E()
if(t==u.e){t=b.c
t.a.a.E()
t=t.e
u=c.b
u.a.a.E()
u=t==u.e
t=u}else t=!1
return t}else return!1}}}}
F.bC.prototype={}
F.h_.prototype={}
F.ik.prototype={
b0:function(a,b,c){var u,t=b.a
t.a.a.E()
t=t.e
u=c.a
u.a.a.E()
if(t==u.e){t=b.b
t.a.a.E()
t=t.e
u=c.b
u.a.a.E()
return t==u.e}else{t=b.a
t.a.a.E()
t=t.e
u=c.b
u.a.a.E()
if(t==u.e){t=b.b
t.a.a.E()
t=t.e
u=c.a
u.a.a.E()
return t==u.e}else return!1}}}
F.bZ.prototype={}
F.dO.prototype={
gp:function(){var u=this.e
return u==null?this.e=D.M():u},
az:function(){var u,t=this,s=t.e
if(s!=null)++s.d
u=t.d.az()||!1
if(!t.a.az())u=!1
s=t.e
if(s!=null)s.aF(0)
return u},
ja:function(a,b){var u,t,s,r,q,p=this,o=p.e
if(o!=null)++o.d
o=p.a.c
u=H.d(o.slice(0),[H.v(o,0)])
for(o=[F.aq];u.length!==0;){t=C.a.gj_(u)
C.a.eq(u,0)
if(t!=null){s=H.d([],o)
C.a.h(s,t)
for(r=u.length-1;r>=0;--r){if(r>=u.length)return H.e(u,r)
q=u[r]
if(q!=null&&a.b0(0,t,q)){C.a.h(s,q)
C.a.eq(u,r)}}if(s.length>1)b.j9(s)}}p.a.E()
p.c.cK()
p.d.cK()
p.b.jq()
p.c.cL(new F.ik())
p.d.cL(new F.hU())
o=p.e
if(o!=null)o.aF(0)},
dG:function(a2,a3){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a=this,a0=34962,a1=a.a.c.length
a3.toString
u=$.aW()
t=a3.a
s=(t&u.a)!==0?1:0
if((t&$.br().a)!==0)++s
if((t&$.bq().a)!==0)++s
if((t&$.bs().a)!==0)++s
if((t&$.bt().a)!==0)++s
if((t&$.d4().a)!==0)++s
if((t&$.d5().a)!==0)++s
if((t&$.ce().a)!==0)++s
if((t&$.bp().a)!==0)++s
r=a3.gcT(a3)
q=r*4
u=new Array(a1*r)
u.fixed$length=Array
t=P.z
p=H.d(u,[t])
u=new Array(s)
u.fixed$length=Array
o=H.d(u,[Z.d9])
for(n=0,m=0;m<s;++m){l=a3.iL(m)
k=l.gcT(l)
C.a.l(o,m,new Z.d9(l,k,n*4,q))
for(j=0;j<a1;++j){u=a.a.c
if(j>=u.length)return H.e(u,j)
i=u[j].j7(l)
h=n+j*r
for(g=0;g<i.length;++g){C.a.l(p,h,i[g]);++h}}n+=k}H.j(p,"$ib",[t],"$ab")
u=a2.a
f=u.createBuffer()
u.bindBuffer(a0,f)
u.bufferData(a0,new Float32Array(H.bJ(p)),35044)
u.bindBuffer(a0,null)
e=new Z.ch(new Z.ea(a0,f),o,a3)
e.sft(H.d([],[Z.bY]))
a.b.b
if(a.c.b.length!==0){t=P.o
d=H.d([],[t])
for(m=0;c=a.c.b,m<c.length;++m){c=c[m].a
c.a.a.E()
C.a.h(d,c.e)
c=a.c.b
if(m>=c.length)return H.e(c,m)
c=c[m].b
c.a.a.E()
C.a.h(d,c.e)}b=Z.lp(u,34963,H.j(d,"$ib",[t],"$ab"))
C.a.h(e.b,new Z.bY(1,d.length,b))}if(a.d.b.length!==0){t=P.o
d=H.d([],[t])
for(m=0;c=a.d.b,m<c.length;++m){c=c[m].a
c.a.a.E()
C.a.h(d,c.e)
c=a.d.b
if(m>=c.length)return H.e(c,m)
c=c[m].b
c.a.a.E()
C.a.h(d,c.e)
c=a.d.b
if(m>=c.length)return H.e(c,m)
c=c[m].c
c.a.a.E()
C.a.h(d,c.e)}b=Z.lp(u,34963,H.j(d,"$ib",[t],"$ab"))
C.a.h(e.b,new Z.bY(4,d.length,b))}return e},
i:function(a){var u=this,t=H.d([],[P.i])
if(u.a.c.length!==0){C.a.h(t,"Vertices:")
C.a.h(t,u.a.L("   "))}u.b.b
if(u.c.b.length!==0){C.a.h(t,"Lines:")
C.a.h(t,u.c.L("   "))}if(u.d.b.length!==0){C.a.h(t,"Faces:")
C.a.h(t,u.d.L("   "))}return C.a.C(t,"\n")},
aa:function(){var u=this.e
if(u!=null)u.F(null)},
$iom:1}
F.hO.prototype={
iI:function(a){var u,t,s,r,q,p
H.j(a,"$ib",[F.aq],"$ab")
u=H.d([],[F.a9])
t=a[0]
for(s=this.a,r=2;r<4;++r){q=a[r-1]
p=a[r]
s.a.h(0,t)
s.a.h(0,q)
s.a.h(0,p)
C.a.h(u,F.dk(t,q,p))}return u},
iJ:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k,j,i,h
H.j(c,"$ib",[F.aq],"$ab")
u=H.d([],[F.a9])
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
C.a.h(u,F.dk(l,k,i))
t.a.h(0,l)
t.a.h(0,i)
t.a.h(0,h)
C.a.h(u,F.dk(l,i,h))}else{m.h(0,k)
t.a.h(0,i)
t.a.h(0,h)
C.a.h(u,F.dk(k,i,h))
t.a.h(0,k)
t.a.h(0,h)
t.a.h(0,l)
C.a.h(u,F.dk(k,h,l))}o=!o}q=!q}return u},
gk:function(a){return this.b.length},
cL:function(a){var u,t,s,r,q,p,o,n
for(u=this.a,t=u.a.c.length-1;t>=0;--t){s=u.a.c
if(t>=s.length)return H.e(s,t)
r=s[t]
for(s=r.d,q=s.b.length+s.c.length+s.d.length-1;q>=0;--q){p=r.d.j(0,q)
for(o=q-1;o>=0;--o){n=r.d.j(0,o)
if(a.b0(0,p,n)){p.b_()
break}}}}},
cK:function(){var u,t,s
for(u=this.b.length-1;u>=0;--u){t=this.b
if(u>=t.length)return H.e(t,u)
s=t[u]
t=s.giO(s)
if(t)s.b_()}},
az:function(){var u,t,s,r
for(u=this.b,t=u.length,s=!0,r=0;r<u.length;u.length===t||(0,H.H)(u),++r)if(!u[r].cg())s=!1
return s},
cf:function(){var u,t,s,r
for(u=this.b,t=u.length,s=!0,r=0;r<u.length;u.length===t||(0,H.H)(u),++r)if(!u[r].ce())s=!1
return s},
i:function(a){return this.T()},
L:function(a){var u,t,s,r=H.d([],[P.i])
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.H)(u),++s)C.a.h(r,u[s].L(a))
return C.a.C(r,"\n")},
T:function(){return this.L("")},
sfl:function(a){this.b=H.j(a,"$ib",[F.a9],"$ab")}}
F.hP.prototype={
gk:function(a){return this.b.length},
cL:function(a){var u,t,s,r,q,p,o,n
for(u=this.a,t=u.a.c.length-1;t>=0;--t){s=u.a.c
if(t>=s.length)return H.e(s,t)
r=s[t]
for(s=r.c,q=s.b.length+s.c.length-1;q>=0;--q){p=r.c.j(0,q)
for(o=q-1;o>=0;--o){n=r.c.j(0,o)
if(a.b0(0,p,n)){p.b_()
break}}}}},
cK:function(){var u,t,s
for(u=this.b.length-1;u>=0;--u){t=this.b
if(u>=t.length)return H.e(t,u)
s=t[u]
t=J.T(s.a,s.b)
if(t)s.b_()}},
i:function(a){return this.T()},
L:function(a){var u,t,s=H.d([],[P.i]),r=this.b.length
for(u=0;u<r;++u){t=this.b
if(u>=t.length)return H.e(t,u)
C.a.h(s,t[u].L(a+(""+u+". ")))}return C.a.C(s,"\n")},
T:function(){return this.L("")},
sfv:function(a){this.b=H.j(a,"$ib",[F.bC],"$ab")}}
F.hQ.prototype={
gk:function(a){return 0},
jq:function(){var u,t
for(u=-1;!1;--u){t=this.b
return H.e(t,u)
t=t[u].gjR()
t=t.gjO(t)
if(t.gk(t).cR(0,1)){t=this.b
return H.e(t,u)
t[u].b_()}}},
i:function(a){return this.T()},
L:function(a){var u,t,s=H.d([],[P.i])
for(u=this.b,t=0;!1;++t){if(t>=0)return H.e(u,t)
C.a.h(s,u[t].L(a))}return C.a.C(s,"\n")},
T:function(){return this.L("")},
sc1:function(a){this.b=H.j(a,"$ib",[F.bZ],"$ab")}}
F.aq.prototype={
dK:function(a){var u=this,t=u.f,s=u.r,r=u.x,q=u.y,p=u.z,o=u.Q,n=u.ch
return F.iG(u.cx,r,o,t,s,q,p,a,n)},
j7:function(a){var u,t,s=this
if(a.u(0,$.aW())){u=s.f
t=[P.z]
if(u==null)return H.d([0,0,0],t)
else return H.d([u.a,u.b,u.c],t)}else if(a.u(0,$.br())){u=s.r
t=[P.z]
if(u==null)return H.d([0,1,0],t)
else return H.d([u.a,u.b,u.c],t)}else if(a.u(0,$.bq())){u=s.x
t=[P.z]
if(u==null)return H.d([0,0,1],t)
else return H.d([u.a,u.b,u.c],t)}else if(a.u(0,$.bs())){u=s.y
t=[P.z]
if(u==null)return H.d([0,0],t)
else return H.d([u.a,u.b],t)}else if(a.u(0,$.bt())){u=s.z
t=[P.z]
if(u==null)return H.d([0,0,0],t)
else return H.d([u.a,u.b,u.c],t)}else if(a.u(0,$.d4())){u=s.Q
t=[P.z]
if(u==null)return H.d([1,1,1],t)
else return H.d([u.a,u.b,u.c],t)}else if(a.u(0,$.d5())){u=s.Q
t=[P.z]
if(u==null)return H.d([1,1,1,1],t)
else return H.d([u.a,u.b,u.c,u.d],t)}else if(a.u(0,$.ce()))return H.d([s.ch],[P.z])
else if(a.u(0,$.bp())){u=s.cx
t=[P.z]
if(u==null)return H.d([-1,-1,-1,-1],t)
else return H.d([u.a,u.b,u.c,u.d],t)}else return H.d([],[P.z])},
cg:function(){var u,t=this,s={}
if(t.r!=null)return!0
u=t.a
if(u!=null){u=u.e
if(u!=null)++u.d}s.a=V.cP()
t.d.K(0,new F.iR(s))
s=s.a
t.r=s.w(0,Math.sqrt(s.D(s)))
s=t.a
if(s!=null){s.aa()
s=t.a.e
if(s!=null)s.aF(0)}return!0},
ce:function(){var u,t=this,s={}
if(t.x!=null)return!0
u=t.a
if(u!=null){u=u.e
if(u!=null)++u.d}s.a=V.cP()
t.d.K(0,new F.iQ(s))
s=s.a
t.x=s.w(0,Math.sqrt(s.D(s)))
s=t.a
if(s!=null){s.aa()
s=t.a.e
if(s!=null)s.aF(0)}return!0},
u:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.T()},
L:function(a){var u,t,s=this,r="-",q=H.d([],[P.i])
C.a.h(q,C.b.aE(J.aX(s.e),0))
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
C.a.h(q,V.V(s.ch,3,0))
u=s.cx
if(u!=null)C.a.h(q,u.i(0))
else C.a.h(q,r)
t=C.a.C(q,", ")
return a+"{"+t+"}"},
T:function(){return this.L("")}}
F.iR.prototype={
$1:function(a){var u,t
H.f(a,"$ia9")
u=a==null?null:a.d
if(u!=null){t=this.a
t.a=t.a.n(0,u)}},
$S:5}
F.iQ.prototype={
$1:function(a){var u,t
H.f(a,"$ia9")
u=a==null?null:a.e
if(u!=null){t=this.a
t.a=t.a.n(0,u)}},
$S:5}
F.iH.prototype={
E:function(){var u,t,s,r
if(this.b){u=this.c
t=u.length
for(s=0,r=0;r<t;++r){if(r>=u.length)return H.e(u,r)
u[r].e=s;++s}this.b=!1}},
h:function(a,b){var u,t=b.a
if(t!=null){if(t===this.a)return!1
throw H.c(P.t("May not add a vertex already attached to another shape to this shape."))}t=this.c
b.e=t.length
u=this.a
b.a=u
C.a.h(t,b)
u.aa()
return!0},
bh:function(a,b,c,d,e,f){var u=F.iG(a,null,b,c,null,d,e,f,0)
this.h(0,u)
return u},
gk:function(a){return this.c.length},
az:function(){var u,t,s
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.H)(u),++s)u[s].cg()
return!0},
cf:function(){var u,t,s
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.H)(u),++s)u[s].ce()
return!0},
iN:function(){var u,t,s,r,q,p,o,n
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.H)(u),++s){r=u[s]
if(r.z==null){q=r.r
p=q.a
o=q.b
n=q.c
n=q.w(0,Math.sqrt(p*p+o*o+n*n))
if(!J.T(r.z,n)){r.z=n
q=r.a
if(q!=null){q=q.e
if(q!=null)q.F(null)}}}}return!0},
i:function(a){return this.T()},
L:function(a){var u,t,s,r
this.E()
u=H.d([],[P.i])
for(t=this.c,s=t.length,r=0;r<t.length;t.length===s||(0,H.H)(t),++r)C.a.h(u,t[r].L(a))
return C.a.C(u,"\n")},
T:function(){return this.L("")},
sii:function(a){this.c=H.j(a,"$ib",[F.aq],"$ab")}}
F.iI.prototype={
gk:function(a){return this.b.length+this.c.length+this.d.length},
j:function(a,b){var u,t=this.b,s=t.length
if(b<s){if(b<0)return H.e(t,b)
return t[b]}b-=s
t=this.c
u=t.length
if(b<u){if(b<0)return H.e(t,b)
return t[b]}b-=u
t=this.d
if(b<0||b>=t.length)return H.e(t,b)
return t[b]},
K:function(a,b){var u=this
H.n(b,{func:1,ret:-1,args:[F.a9]})
C.a.K(u.b,b)
C.a.K(u.c,new F.iJ(u,b))
C.a.K(u.d,new F.iK(u,b))},
i:function(a){return this.T()},
T:function(){var u,t,s,r=H.d([],[P.i])
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.H)(u),++s)C.a.h(r,u[s].L(""))
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.H)(u),++s)C.a.h(r,u[s].L(""))
for(u=this.d,t=u.length,s=0;s<u.length;u.length===t||(0,H.H)(u),++s)C.a.h(r,u[s].L(""))
return C.a.C(r,"\n")},
sfm:function(a){this.b=H.j(a,"$ib",[F.a9],"$ab")},
sfn:function(a){this.c=H.j(a,"$ib",[F.a9],"$ab")},
sfo:function(a){this.d=H.j(a,"$ib",[F.a9],"$ab")}}
F.iJ.prototype={
$1:function(a){H.f(a,"$ia9")
if(!J.T(a.a,this.a))this.b.$1(a)},
$S:5}
F.iK.prototype={
$1:function(a){var u
H.f(a,"$ia9")
u=this.a
if(!J.T(a.a,u)&&!J.T(a.b,u))this.b.$1(a)},
$S:5}
F.iL.prototype={
gk:function(a){return this.b.length+this.c.length},
j:function(a,b){var u,t=this.b,s=t.length
if(b>=s){t=this.c
u=b-s
if(u<0||u>=t.length)return H.e(t,u)
return t[u]}else{if(b<0)return H.e(t,b)
return t[b]}},
i:function(a){return this.T()},
T:function(){var u,t,s,r=H.d([],[P.i])
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.H)(u),++s)C.a.h(r,u[s].L(""))
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.H)(u),++s)C.a.h(r,u[s].L(""))
return C.a.C(r,"\n")},
sfw:function(a){this.b=H.j(a,"$ib",[F.bC],"$ab")},
sfz:function(a){this.c=H.j(a,"$ib",[F.bC],"$ab")}}
F.iN.prototype={}
F.iM.prototype={
b0:function(a,b,c){return J.T(b.f,c.f)}}
F.iO.prototype={}
F.hu.prototype={
j9:function(a){var u,t,s,r,q,p,o,n,m
H.j(a,"$ib",[F.aq],"$ab")
u=V.cP()
for(t=a.length,s=0;s<t;++s){r=a[s].r
if(r!=null)u=new V.R(u.a+r.a,u.b+r.b,u.c+r.c)}u=u.w(0,Math.sqrt(u.D(u)))
for(t=a.length,r=u==null,s=0;s<a.length;a.length===t||(0,H.H)(a),++s){q=a[s]
if(r)p=null
else{o=u.a
n=u.b
m=u.c
p=u.w(0,Math.sqrt(o*o+n*n+m*m))}if(!J.T(q.r,p)){q.r=p
o=q.a
if(o!=null){o=o.e
if(o!=null)o.F(null)}}}return}}
F.iP.prototype={
gk:function(a){return 0},
i:function(a){return this.T()},
T:function(){var u,t,s=H.d([],[P.i])
for(u=this.b,t=0;!1;++t){if(t>=0)return H.e(u,t)
C.a.h(s,u[t].L(""))}return C.a.C(s,"\n")},
sc1:function(a){this.b=H.j(a,"$ib",[F.bZ],"$ab")}}
O.dx.prototype={
gp:function(){var u=this.dy
return u==null?this.dy=D.M():u},
R:function(a){var u
H.f(a,"$ix")
u=this.dy
if(u!=null)u.F(a)},
au:function(){return this.R(null)},
dr:function(a){H.f(a,"$ix")
this.a=null
this.R(a)},
hO:function(){return this.dr(null)},
fM:function(a,b){var u=V.ah
H.j(b,"$ih",[u],"$ah")
u=new D.bz([u])
u.b=!0
this.R(u)},
fO:function(a,b){var u=V.ah
H.j(b,"$ih",[u],"$ah")
u=new D.bA([u])
u.b=!0
this.R(u)},
d7:function(){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0=this,a1=a0.dx,a2=C.e.a4(a1.e.length+3,4)*4,a3=C.e.a4(a1.f.length+3,4)*4,a4=C.e.a4(a1.r.length+3,4)*4,a5=C.e.a4(a1.x.length+3,4)*4,a6=C.e.a4(a1.y.length+3,4)*4,a7=C.e.a4(a1.z.length+3,4)*4,a8=C.e.a4(a0.e.a.length+3,4)*4
a1=a0.f.c
u=a0.r.c
t=a0.x.c
s=a0.y.c
r=a0.z.c
q=a0.Q.c
p=a0.cx.c
o=a0.cy.c
n=a0.db.c
m="MaterialLight_"+C.e.i(a1.a)+C.e.i(u.a)+C.e.i(t.a)+C.e.i(s.a)+C.e.i(r.a)+C.e.i(q.a)+C.e.i(p.a)+C.e.i(o.a)+C.e.i(n.a)
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
a=$.aW()
if(h){j=$.br()
a=new Z.bc(a.a|j.a)}if(g){j=$.bq()
a=new Z.bc(a.a|j.a)}if(f){j=$.bs()
a=new Z.bc(a.a|j.a)}if(e){j=$.bt()
a=new Z.bc(a.a|j.a)}if(c){j=$.bp()
a=new Z.bc(a.a|j.a)}return new A.he(a1,u,t,s,r,q,p,o,n,a2,a3,a4,a5,a6,a7,a2+a3+a4+a5+a6+a7,l,l,d,b,!0,!1,!1,k,d,i,h,g,f,e,c,!1,!1,!1,a8,m.charCodeAt(0)==0?m:m,a)},
X:function(a,b){H.j(a,"$ib",[T.c3],"$ab")},
al:function(a,b){var u,t,s,r,q
for(u=this.dx.a,u=new J.ar(u,u.length,[H.v(u,0)]);u.B();){t=u.d
t.toString
s=$.iF
if(s==null)s=$.iF=new V.R(0,0,1)
t.a=s
r=t.b
if(r!=null){q=r.a
if(q!=null)t.a=q.cN(s)}}},
er:function(a3,a4){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1=this,a2=a1.a
if(a2==null){a2=a1.d7()
u=H.f(a3.fr.j(0,a2.ak),"$idy")
if(u==null){u=A.mJ(a2,a3.a)
a3.dD(u)}a2=a1.a=u
a4.e=null}t=a2.z
s=t.bj
a2=a4.e
if(!(a2 instanceof Z.ch))a2=a4.e=null
if(a2==null||!a2.d.u(0,s)){a2=t.r1
if(a2)a4.d.az()
r=t.r2
if(r){q=a4.d
p=q.e
if(p!=null)++p.d
q.d.cf()
q.a.cf()
q=q.e
if(q!=null)q.aF(0)}q=t.ry
if(q){p=a4.d
o=p.e
if(o!=null)++o.d
p.a.iN()
p=p.e
if(p!=null)p.aF(0)}n=a4.d.dG(new Z.eb(a3.a),s)
n.aC($.aW()).e=a1.a.Q.c
if(a2)n.aC($.br()).e=a1.a.cx.c
if(r)n.aC($.bq()).e=a1.a.ch.c
if(t.rx)n.aC($.bs()).e=a1.a.cy.c
if(q)n.aC($.bt()).e=a1.a.db.c
if(t.x1)n.aC($.bp()).e=a1.a.dx.c
a4.e=n}a2=T.c3
m=H.d([],[a2])
a1.a.a7(a3)
if(t.fx){r=a1.a
q=a3.dx
q=q.ga2(q)
r=r.dy
r.toString
r.am(q.ac(0,!0))}if(t.fy){r=a1.a
q=a3.cx
if(q==null){q=a3.db
q=q.ga2(q)
p=a3.dx
p=a3.cx=q.t(0,p.ga2(p))
q=p}r=r.fr
r.toString
r.am(q.ac(0,!0))}r=a1.a
q=a3.ch
if(q==null){q=a3.gjp()
p=a3.dx
p=a3.ch=q.t(0,p.ga2(p))
q=p}r=r.fy
r.toString
r.am(q.ac(0,!0))
if(t.x2){r=a1.a
q=a1.b
r=r.k1
r.toString
r.am(C.n.ac(q,!0))}if(t.y1){r=a1.a
q=a1.c
r=r.k2
r.toString
r.am(C.n.ac(q,!0))}if(t.y2){r=a1.a
q=a1.d
r=r.k3
r.toString
r.am(C.n.ac(q,!0))}if(t.ap>0){l=a1.e.a.length
r=a1.a.k4
C.c.a1(r.a,r.d,l)
for(r=[P.z],k=0;k<l;++k){q=a1.a
p=a1.e.a
if(k>=p.length)return H.e(p,k)
p=p[k]
q.toString
H.f(p,"$iah")
q=q.r1
if(k>=q.length)return H.e(q,k)
q=q[k]
j=new Float32Array(H.bJ(H.j(p.ac(0,!0),"$ib",r,"$ab")))
C.c.cO(q.a,q.d,!1,j)}}switch(t.a){case C.d:break
case C.j:r=a1.a
q=a1.f.f
r=r.r2
r.toString
p=q.a
o=q.b
q=q.c
C.c.v(r.a,r.d,p,o,q)
break
case C.h:a1.X(m,a1.f.d)
r=a1.a
q=a1.f.d
r.aj(r.rx,r.x1,q)
q=a1.a
r=a1.f.f
q=q.r2
q.toString
p=r.a
o=r.b
r=r.c
C.c.v(q.a,q.d,p,o,r)
break
case C.i:a1.X(m,a1.f.e)
r=a1.a
q=a1.f.e
r.af(r.ry,r.x1,q)
q=a1.a
r=a1.f.f
q=q.r2
q.toString
p=r.a
o=r.b
r=r.c
C.c.v(q.a,q.d,p,o,r)
break}if(t.k2){switch(t.b){case C.d:break
case C.j:r=a1.a
q=a1.r.f
r=r.x2
r.toString
p=q.a
o=q.b
q=q.c
C.c.v(r.a,r.d,p,o,q)
break
case C.h:a1.X(m,a1.r.d)
r=a1.a
q=a1.r.d
r.aj(r.y1,r.ap,q)
q=a1.a
r=a1.r.f
q=q.x2
q.toString
p=r.a
o=r.b
r=r.c
C.c.v(q.a,q.d,p,o,r)
break
case C.i:a1.X(m,a1.r.e)
r=a1.a
q=a1.r.e
r.af(r.y2,r.ap,q)
q=a1.a
r=a1.r.f
q=q.x2
q.toString
p=r.a
o=r.b
r=r.c
C.c.v(q.a,q.d,p,o,r)
break}switch(t.c){case C.d:break
case C.j:r=a1.a
q=a1.x.f
r=r.ak
r.toString
p=q.a
o=q.b
q=q.c
C.c.v(r.a,r.d,p,o,q)
break
case C.h:a1.X(m,a1.x.d)
r=a1.a
q=a1.x.d
r.aj(r.bj,r.bk,q)
q=a1.a
r=a1.x.f
q=q.ak
q.toString
p=r.a
o=r.b
r=r.c
C.c.v(q.a,q.d,p,o,r)
break
case C.i:a1.X(m,a1.x.e)
r=a1.a
q=a1.x.e
r.af(r.dP,r.bk,q)
q=a1.a
r=a1.x.f
q=q.ak
q.toString
p=r.a
o=r.b
r=r.c
C.c.v(q.a,q.d,p,o,r)
break}switch(t.d){case C.d:break
case C.j:r=a1.a
q=a1.y.f
r=r.bl
r.toString
p=q.a
o=q.b
q=q.c
C.c.v(r.a,r.d,p,o,q)
break
case C.h:a1.X(m,a1.y.d)
r=a1.a
q=a1.y.d
r.aj(r.dQ,r.bm,q)
q=a1.a
r=a1.y.f
q=q.bl
q.toString
p=r.a
o=r.b
r=r.c
C.c.v(q.a,q.d,p,o,r)
break
case C.i:a1.X(m,a1.y.e)
r=a1.a
q=a1.y.e
r.af(r.dR,r.bm,q)
q=a1.a
r=a1.y.f
q=q.bl
q.toString
p=r.a
o=r.b
r=r.c
C.c.v(q.a,q.d,p,o,r)
break}switch(t.e){case C.d:break
case C.j:r=a1.a
q=a1.z.f
r=r.bn
r.toString
p=q.a
o=q.b
q=q.c
C.c.v(r.a,r.d,p,o,q)
q=a1.a
o=a1.z.ch
q=q.bp
C.c.M(q.a,q.d,o)
break
case C.h:a1.X(m,a1.z.d)
r=a1.a
q=a1.z.d
r.aj(r.dS,r.bo,q)
q=a1.a
r=a1.z.f
q=q.bn
q.toString
p=r.a
o=r.b
r=r.c
C.c.v(q.a,q.d,p,o,r)
r=a1.a
o=a1.z.ch
r=r.bp
C.c.M(r.a,r.d,o)
break
case C.i:a1.X(m,a1.z.e)
r=a1.a
q=a1.z.e
r.af(r.dT,r.bo,q)
q=a1.a
r=a1.z.f
q=q.bn
q.toString
p=r.a
o=r.b
r=r.c
C.c.v(q.a,q.d,p,o,r)
r=a1.a
o=a1.z.ch
r=r.bp
C.c.M(r.a,r.d,o)
break}if(t.z>0){l=a1.dx.e.length
r=a1.a.e3
C.c.a1(r.a,r.d,l)
r=a3.db
i=r.ga2(r)
for(r=a1.dx.e,q=r.length,h=0,g=0;g<r.length;r.length===q||(0,H.H)(r),++g){f=r[g]
p=a1.a.cm
if(h>=p.length)return H.e(p,h)
e=p[h]
p=i.cN(f.a)
o=p.a
d=p.b
c=p.c
c=p.w(0,Math.sqrt(o*o+d*d+c*c))
d=e.b
o=c.a
p=c.b
c=c.c
C.c.v(d.a,d.d,o,p,c)
c=f.c
p=e.c
C.c.v(p.a,p.d,c.a,c.b,c.c);++h}}if(t.Q>0){l=a1.dx.f.length
r=a1.a.e4
C.c.a1(r.a,r.d,l)
r=a3.db
i=r.ga2(r)
for(r=a1.dx.f,q=r.length,h=0,g=0;g<r.length;r.length===q||(0,H.H)(r),++g){f=r[g]
p=a1.a.cn
if(h>=p.length)return H.e(p,h)
e=p[h]
p=f.gb4(f)
o=e.b
C.c.v(o.a,o.d,p.a,p.b,p.c)
p=i.b9(f.gb4(f))
o=e.c
C.c.v(o.a,o.d,p.a,p.b,p.c)
p=f.gao(f)
o=e.d
C.c.v(o.a,o.d,p.a,p.b,p.c)
p=f.gc9()
o=e.e
C.c.M(o.a,o.d,p)
p=f.gca()
o=e.f
C.c.M(o.a,o.d,p)
p=f.gcb()
o=e.r
C.c.M(o.a,o.d,p);++h}}if(t.ch>0){l=a1.dx.r.length
r=a1.a.e5
C.c.a1(r.a,r.d,l)
r=a3.db
i=r.ga2(r)
for(r=a1.dx.r,q=r.length,h=0,g=0;g<r.length;r.length===q||(0,H.H)(r),++g){f=r[g]
p=a1.a.co
if(h>=p.length)return H.e(p,h)
e=p[h]
p=f.gb4(f)
o=e.b
C.c.v(o.a,o.d,p.a,p.b,p.c)
p=f.gcl(f).jN()
o=e.c
C.c.v(o.a,o.d,p.a,p.b,p.c)
p=i.b9(f.gb4(f))
o=e.d
C.c.v(o.a,o.d,p.a,p.b,p.c)
p=f.gao(f)
o=e.e
C.c.v(o.a,o.d,p.a,p.b,p.c)
p=f.gjL()
o=e.f
C.c.M(o.a,o.d,p)
p=f.gjK()
o=e.r
C.c.M(o.a,o.d,p)
p=f.gc9()
o=e.x
C.c.M(o.a,o.d,p)
p=f.gca()
o=e.y
C.c.M(o.a,o.d,p)
p=f.gcb()
o=e.z
C.c.M(o.a,o.d,p);++h}}if(t.cx>0){l=a1.dx.x.length
r=a1.a.e6
C.c.a1(r.a,r.d,l)
r=a3.db
i=r.ga2(r)
for(r=a1.dx.x,q=r.length,p=[a2],h=0,g=0;g<r.length;r.length===q||(0,H.H)(r),++g){f=r[g]
o=a1.a.cp
if(h>=o.length)return H.e(o,h)
e=o[h]
o=f.gar()
H.j(m,"$ib",p,"$ab")
if(!C.a.aA(m,o)){o.scu(0,m.length)
C.a.h(m,o)}o=f.gcl(f)
d=e.d
C.c.v(d.a,d.d,o.a,o.b,o.c)
o=f.gbF()
d=e.b
C.c.v(d.a,d.d,o.a,o.b,o.c)
o=f.gbC(f)
d=e.c
C.c.v(d.a,d.d,o.a,o.b,o.c)
o=i.cN(f.gcl(f))
d=o.a
c=o.b
b=o.c
b=o.w(0,Math.sqrt(d*d+c*c+b*b))
c=e.e
d=b.a
o=b.b
b=b.c
C.c.v(c.a,c.d,d,o,b)
b=f.gao(f)
o=e.f
C.c.v(o.a,o.d,b.a,b.b,b.c)
b=f.gar()
o=b.gcA(b)
if(!o){o=e.x
C.c.a1(o.a,o.d,1)}else{o=e.r
d=b.d
c=o.a
o=o.d
if(!d)c.uniform1i(o,0)
else c.uniform1i(o,b.a)
o=e.x
C.c.a1(o.a,o.d,0)}++h}}if(t.cy>0){l=a1.dx.y.length
r=a1.a.e7
C.c.a1(r.a,r.d,l)
r=a3.db
i=r.ga2(r)
for(r=a1.dx.y,q=r.length,p=[P.z],o=[a2],h=0,g=0;g<r.length;r.length===q||(0,H.H)(r),++g){f=r[g]
d=a1.a.cq
if(h>=d.length)return H.e(d,h)
e=d[h]
d=f.gar()
H.j(m,"$ib",o,"$ab")
if(!C.a.aA(m,d)){d.scu(0,m.length)
C.a.h(m,d)}a=i.t(0,f.ga2(f))
d=f.ga2(f)
c=$.cx
d=d.b9(c==null?$.cx=new V.a3(0,0,0):c)
c=e.b
C.c.v(c.a,c.d,d.a,d.b,d.c)
d=$.cx
d=a.b9(d==null?$.cx=new V.a3(0,0,0):d)
c=e.c
C.c.v(c.a,c.d,d.a,d.b,d.c)
d=a.ei(0)
c=e.d
j=new Float32Array(H.bJ(H.j(new V.dA(d.a,d.b,d.c,d.e,d.f,d.r,d.y,d.z,d.Q).ac(0,!0),"$ib",p,"$ab")))
C.c.ey(c.a,c.d,!1,j)
c=f.gao(f)
d=e.e
C.c.v(d.a,d.d,c.a,c.b,c.c)
c=f.gar()
d=c.gcA(c)
if(!d){d=e.r
C.c.a1(d.a,d.d,1)}else{d=e.f
b=c.gcA(c)
a0=d.a
d=d.d
if(!b)a0.uniform1i(d,0)
else a0.uniform1i(d,c.gcu(c))
d=e.r
C.c.a1(d.a,d.d,0)}d=f.gc9()
c=e.x
C.c.M(c.a,c.d,d)
d=f.gca()
c=e.y
C.c.M(c.a,c.d,d)
d=f.gcb()
c=e.z
C.c.M(c.a,c.d,d);++h}}if(t.db>0){l=a1.dx.z.length
r=a1.a.e8
C.c.a1(r.a,r.d,l)
r=a3.db
i=r.ga2(r)
for(r=a1.dx.z,q=r.length,a2=[a2],h=0,g=0;g<r.length;r.length===q||(0,H.H)(r),++g){f=r[g]
p=a1.a.cr
if(h>=p.length)return H.e(p,h)
e=p[h]
p=f.gar()
H.j(m,"$ib",a2,"$ab")
if(!C.a.aA(m,p)){p.scu(0,m.length)
C.a.h(m,p)}p=f.gb4(f)
o=e.b
C.c.v(o.a,o.d,p.a,p.b,p.c)
p=f.gcl(f)
o=e.c
C.c.v(o.a,o.d,p.a,p.b,p.c)
p=f.gbF()
o=e.d
C.c.v(o.a,o.d,p.a,p.b,p.c)
p=f.gbC(f)
o=e.e
C.c.v(o.a,o.d,p.a,p.b,p.c)
p=i.b9(f.gb4(f))
o=e.f
C.c.v(o.a,o.d,p.a,p.b,p.c)
p=f.gar()
o=p.gcA(p)
if(!o){p=e.x
C.c.a1(p.a,p.d,1)}else{o=e.r
d=p.d
c=o.a
o=o.d
if(!d)c.uniform1i(o,0)
else c.uniform1i(o,p.a)
p=e.x
C.c.a1(p.a,p.d,0)}p=f.gao(f)
o=e.y
C.c.v(o.a,o.d,p.a,p.b,p.c)
p=f.gjP()
o=e.z
C.c.M(o.a,o.d,p)
p=f.gjQ()
o=e.Q
C.c.M(o.a,o.d,p)
p=f.gc9()
o=e.ch
C.c.M(o.a,o.d,p)
p=f.gca()
o=e.cx
C.c.M(o.a,o.d,p)
p=f.gcb()
o=e.cy
C.c.M(o.a,o.d,p);++h}}}switch(t.f){case C.d:break
case C.j:break
case C.h:a1.X(m,a1.Q.d)
a2=a1.a
r=a1.Q.d
a2.aj(a2.dU,a2.bq,r)
break
case C.i:a1.X(m,a1.Q.e)
a2=a1.a
r=a1.Q.e
a2.af(a2.dV,a2.bq,r)
break}if(t.fr){a2=a1.a
r=a3.Q
if(r==null){r=a3.db
r=a3.Q=r.ga2(r).ei(0)}a2=a2.id
a2.toString
a2.am(r.ac(0,!0))}if(t.dy){a1.X(m,a1.ch)
a2=a1.a
r=a1.ch
a2.af(a2.dW,a2.dX,r)
switch(t.r){case C.d:break
case C.j:a2=a1.a
r=a1.cx.f
a2=a2.br
a2.toString
q=r.a
p=r.b
r=r.c
C.c.v(a2.a,a2.d,q,p,r)
break
case C.h:a1.X(m,a1.cx.d)
a2=a1.a
r=a1.cx.d
a2.aj(a2.dY,a2.bs,r)
r=a1.a
a2=a1.cx.f
r=r.br
r.toString
q=a2.a
p=a2.b
a2=a2.c
C.c.v(r.a,r.d,q,p,a2)
break
case C.i:a1.X(m,a1.cx.e)
a2=a1.a
r=a1.cx.e
a2.af(a2.dZ,a2.bs,r)
r=a1.a
a2=a1.cx.f
r=r.br
r.toString
q=a2.a
p=a2.b
a2=a2.c
C.c.v(r.a,r.d,q,p,a2)
break}switch(t.x){case C.d:break
case C.j:a2=a1.a
r=a1.cy.f
a2=a2.bu
a2.toString
q=r.a
p=r.b
r=r.c
C.c.v(a2.a,a2.d,q,p,r)
r=a1.a
p=a1.cy.ch
r=r.bt
C.c.M(r.a,r.d,p)
break
case C.h:a1.X(m,a1.cy.d)
a2=a1.a
r=a1.cy.d
a2.aj(a2.e_,a2.bv,r)
r=a1.a
a2=a1.cy.f
r=r.bu
r.toString
q=a2.a
p=a2.b
a2=a2.c
C.c.v(r.a,r.d,q,p,a2)
a2=a1.a
p=a1.cy.ch
a2=a2.bt
C.c.M(a2.a,a2.d,p)
break
case C.i:a1.X(m,a1.cy.e)
a2=a1.a
r=a1.cy.e
a2.af(a2.e0,a2.bv,r)
r=a1.a
a2=a1.cy.f
r=r.bu
r.toString
q=a2.a
p=a2.b
a2=a2.c
C.c.v(r.a,r.d,q,p,a2)
a2=a1.a
p=a1.cy.ch
a2=a2.bt
C.c.M(a2.a,a2.d,p)
break}}a2=t.y
r=a2!==C.d
if(r){switch(a2){case C.d:break
case C.j:a2=a1.a
q=a1.db.f
a2=a2.bw
C.c.M(a2.a,a2.d,q)
break
case C.h:a1.X(m,a1.db.d)
a2=a1.a
q=a1.db.d
a2.aj(a2.e1,a2.bx,q)
q=a1.a
a2=a1.db.f
q=q.bw
C.c.M(q.a,q.d,a2)
break
case C.i:a1.X(m,a1.db.e)
a2=a1.a
q=a1.db.e
a2.af(a2.e2,a2.bx,q)
q=a1.a
a2=a1.db.f
q=q.bw
C.c.M(q.a,q.d,a2)
break}a2=a3.a
a2.enable(3042)
a2.blendFunc(770,771)}for(k=0;k<m.length;++k)m[k].a7(a3)
a2=a4.e
a2.a7(a3)
a2.ab(a3)
a2.aS(a3)
if(r)a3.a.disable(3042)
for(k=0;k<m.length;++k)m[k].aS(a3)
a2=a1.a
a2.toString
a3.a.useProgram(null)
a2.x.dL()},
i:function(a){var u=this.a
if(u!=null)return u.b
else return this.d7().ak},
sf5:function(a){this.e=H.j(a,"$iX",[V.ah],"$aX")}}
O.hc.prototype={}
O.dz.prototype={
aL:function(){}}
O.hd.prototype={}
O.b5.prototype={
dt:function(a){var u,t,s=this
if(!J.T(s.f,a)){u=s.f
s.f=a
t=new D.F(s.b+".color",u,a,[V.a0])
t.b=!0
s.a.R(t)}},
aL:function(){this.eH()
this.dt(new V.a0(1,1,1))},
sao:function(a,b){var u,t=this
if(t.c===C.d){t.c=C.j
t.aL()
u=t.a
u.a=null
u.R(null)}t.dt(b)}}
O.hf.prototype={
hQ:function(a){var u=this,t=u.ch
if(!(Math.abs(t-a)<$.O().a)){u.ch=a
t=new D.F(u.b+".refraction",t,a,[P.z])
t.b=!0
u.a.R(t)}},
aL:function(){this.bK()
this.hQ(1)}}
O.hg.prototype={
c4:function(a){var u=this,t=u.ch
if(!(Math.abs(t-a)<$.O().a)){u.ch=a
t=new D.F(u.b+".shininess",t,a,[P.z])
t.b=!0
u.a.R(t)}},
aL:function(){this.bK()
this.c4(100)}}
O.bG.prototype={}
O.dU.prototype={
gp:function(){var u=this.e
return u==null?this.e=D.M():u},
R:function(a){var u
H.f(a,"$ix")
u=this.e
if(u!=null)u.F(a)},
au:function(){return this.R(null)},
h1:function(a,b){var u,t,s,r,q,p,o
H.j(b,"$ih",[O.aS],"$ah")
for(u=b.length,t=this.gat(),s={func:1,ret:-1,args:[D.x]},r=[s],q=0;q<b.length;b.length===u||(0,H.H)(b),++q){p=b[q]
if(p!=null){o=p.f
if(o==null){o=new D.by()
o.sa5(null)
o.saM(null)
o.c=null
o.d=0
p.f=o}H.n(t,s)
if(o.a==null)o.sa5(H.d([],r))
o=o.a;(o&&C.a).h(o,t)}}this.au()},
h3:function(a,b){var u,t
H.j(b,"$ih",[O.aS],"$ah")
for(u=b.gV(b),t=this.gat();u.B();)u.gJ(u).gp().P(0,t)
this.au()},
saZ:function(a){var u=this.f
if(u!==a){this.f=a
u=new D.F("blend",u,a,[A.bv])
u.b=!0
this.R(u)}},
fu:function(a){a=C.e.a4(a+3,4)*4
if(a<=0)return 4
return a},
er:function(a,b){var u,t,s,r,q,p,o,n,m,l,k,j,i,h=this,g=h.fu(h.c.a.length)
if(g!==h.d||h.f!=h.r){h.d=g
h.r=h.f
h.b=null}u=h.b
if(u==null){u=h.f
t="TextureLayout_"+g+"_"+C.e.i(u.a)
s=H.f(a.fr.j(0,t),"$idV")
if(s==null){s=A.n2(g,u,a.a)
a.dD(s)}h.b=s
u=s}if(b.e==null){u=b.d.dG(new Z.eb(a.a),$.aW())
t=u.aC($.aW())
r=h.b
t.e=r.z.c
b.e=u
u=r}u.a7(a)
u=T.c3
q=H.d([],[u])
for(t=[P.z],u=[u],p=0,o=0;r=h.c.a,o<r.length;++o){n=r[o]
if(n!=null&&n.a!=null){r=n.a
H.j(q,"$ib",u,"$ab")
if(r!=null)if(!C.a.aA(q,r)){r.a=q.length
C.a.h(q,r)}r=h.b
m=n.a
r=r.cx
if(p>=r.length)return H.e(r,p)
r=r[p]
l=m==null||!m.d
k=r.a
r=r.d
if(l)k.uniform1i(r,0)
else k.uniform1i(r,m.a)
r=h.b
m=n.b
r=r.cy
if(p>=r.length)return H.e(r,p)
r=r[p]
if(m==null){m=$.hh
if(m==null){m=new V.ah(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1)
$.hh=m}}j=new Float32Array(H.bJ(H.j(m.ac(0,!0),"$ib",t,"$ab")))
C.c.cO(r.a,r.d,!1,j)
r=h.b
i=n.c
r.toString
if(i==null){m=$.cz
if(m==null){m=V.dK(0,0,1,1)
$.cz=m
i=m}else i=m}m=r.db
if(p>=m.length)return H.e(m,p)
m=m[p]
C.c.bE(m.a,m.d,i.a,i.b)
r=r.dx
if(p>=r.length)return H.e(r,p)
r=r[p]
C.c.bE(r.a,r.d,i.c,i.d)
r=h.b
i=n.d
r.toString
if(i==null){m=$.cz
if(m==null){m=V.dK(0,0,1,1)
$.cz=m
i=m}else i=m}m=r.dy
if(p>=m.length)return H.e(m,p)
m=m[p]
C.c.bE(m.a,m.d,i.a,i.b)
r=r.fr
if(p>=r.length)return H.e(r,p)
r=r[p]
C.c.bE(r.a,r.d,i.c,i.d)
r=h.b
m=n.e
r=r.fx
if(p>=r.length)return H.e(r,p)
r=r[p]
m=H.A(m)?1:0
C.c.a1(r.a,r.d,m);++p}}u=h.b.Q
C.c.a1(u.a,u.d,p)
u=h.b
t=h.a
u=u.ch
C.c.jD(u.a,u.d,t.a,t.b,t.c,t.d)
for(u=a.a,o=0;o<q.length;++o){t=q[o]
if(!t.c&&t.d){t.c=!0
u.activeTexture(33984+t.a)
u.bindTexture(3553,t.b)}}t=b.e
if(t instanceof Z.ch){t.a7(a)
t.ab(a)
t.aS(a)}else b.e=null
t=h.b
t.toString
u.useProgram(null)
t.x.dL()
for(o=0;o<q.length;++o){t=q[o]
if(t.c){t.c=!1
u.activeTexture(33984+t.a)
u.bindTexture(3553,null)}}},
sfj:function(a){this.c=H.j(a,"$iX",[O.aS],"$aX")}}
O.aS.prototype={
gp:function(){var u=this.f
return u==null?this.f=D.M():u},
R:function(a){var u
H.f(a,"$ix")
u=this.f
if(u!=null)u.F(a)},
au:function(){return this.R(null)},
sar:function(a){var u,t=this,s=t.a
if(s!=a){if(s!=null)s.gp().P(0,t.gat())
u=t.a
t.a=a
if(a!=null)a.gp().h(0,t.gat())
s=new D.F("texture",u,t.a,[T.dT])
s.b=!0
t.R(s)}},
sdJ:function(a){var u,t,s=this
if(a==null)a=V.bD()
if(!J.T(s.b,a)){u=s.b
s.b=a
t=new D.F("colorMatrix",u,a,[V.ah])
t.b=!0
s.R(t)}}}
T.c3.prototype={}
T.dT.prototype={}
T.i8.prototype={
gp:function(){var u=this.y
return u==null?this.y=D.M():u}}
V.f8.prototype={
aQ:function(a,b){return!0},
i:function(a){return"all"},
$ibi:1}
V.bi.prototype={}
V.dw.prototype={
aQ:function(a,b){var u,t,s
for(u=this.a,t=u.length,s=0;s<u.length;u.length===t||(0,H.H)(u),++s)if(u[s].aQ(0,b))return!0
return!1},
i:function(a){var u,t,s,r,q
for(u=this.a,t=u.length,s="",r=0;r<u.length;u.length===t||(0,H.H)(u),++r){q=u[r]
if(s.length!==0)s+=", "
s+=q.i(0)}return s},
sax:function(a){this.a=H.j(a,"$ib",[V.bi],"$ab")},
$ibi:1}
V.bk.prototype={
aQ:function(a,b){return!this.eG(0,b)},
i:function(a){return"!["+this.cU(0)+"]"}}
V.hN.prototype={
eL:function(a){var u,t
if(a.a.length<=0)throw H.c(P.t("May not create a SetMatcher with zero characters."))
u=new H.aK([P.o,P.a8])
for(t=new H.du(a,a.gk(a),[H.az(a,"w",0)]);t.B();)u.l(0,t.d,!0)
this.shP(u)},
aQ:function(a,b){return this.a.bi(0,b)},
i:function(a){var u=this.a
return P.cD(u.gaq(u),0,null)},
shP:function(a){this.a=H.j(a,"$iD",[P.o,P.a8],"$aD")},
$ibi:1}
V.cB.prototype={
C:function(a,b){var u,t,s,r
for(u=this.c,t=u.length,s=0;s<t;++s){r=u[s]
if(r.b.b===b)return r}r=new V.cG(this.a.N(0,b))
r.sax(H.d([],[V.bi]))
r.c=!1
C.a.h(this.c,r)
return r},
iZ:function(a){var u,t,s,r
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.H)(u),++s){r=u[s]
if(r.aQ(0,a))return r}return},
i:function(a){return this.b},
sia:function(a){this.c=H.j(a,"$ib",[V.cG],"$ab")}}
V.e_.prototype={
i:function(a){var u=H.lW(this.b,"\n","\\n"),t=H.lW(u,"\t","\\t")
return this.a+":"+this.c+':"'+t+'"'}}
V.cF.prototype={
i:function(a){return this.b},
shK:function(a){var u=P.i
this.c=H.j(a,"$iD",[u,u],"$aD")}}
V.ib.prototype={
N:function(a,b){var u=this.a.j(0,b)
if(u==null){u=new V.cB(this,b)
u.sia(H.d([],[V.cG]))
u.d=null
this.a.l(0,b,u)}return u},
b8:function(a){var u,t=this.b.j(0,a)
if(t==null){t=new V.cF(a)
u=P.i
t.shK(new H.aK([u,u]))
this.b.l(0,a,t)}return t},
jC:function(a){var u,t,s,r,q,p,o,n,m=null,l=H.d([],[V.e_]),k=this.c,j=[P.o],i=H.d([],j)
for(u=a.length,t=m,s=0;!0;){if(s>=u){if(t!=null)C.a.h(l,t)
return l}r=C.b.G(a,s)
q=k.iZ(r)
if(q==null){if(t==null){C.a.h(i,r)
p=P.cD(i,0,m)
throw H.c(P.t("Untokenizable string [state: "+k.b+", index "+s+']: "'+p+'"'))}C.a.h(l,t)
s=t.c+1
i=H.d([],j)
k=this.c
t=m}else{if(!q.c)C.a.h(i,r)
k=q.b
if(k.d!=null){p=P.cD(i,0,m)
o=k.d
n=o.c.j(0,p)
t=new V.e_(n==null?o.b:n,p,s)}++s}}},
si1:function(a){this.a=H.j(a,"$iD",[P.i,V.cB],"$aD")},
si3:function(a){this.b=H.j(a,"$iD",[P.i,V.cF],"$aD")}}
V.cG.prototype={
i:function(a){return this.b.b+": "+this.cU(0)}}
X.fi.prototype={
gp:function(){var u=this.fr
return u==null?this.fr=D.M():u},
a3:function(a){var u=this.fr
if(u!=null)u.F(a)},
sai:function(a,b){var u,t=this
if(b<1)b=1
u=t.a
if(u!==b){t.y=null
t.c=t.a=b
u=new D.F("width",u,b,[P.o])
u.b=!0
t.a3(u)}},
sag:function(a,b){var u,t=this
if(b<1)b=1
u=t.b
if(u!==b){t.y=null
t.d=t.b=b
u=new D.F("height",u,b,[P.o])
u.b=!0
t.a3(u)}},
a7:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=null,g=3553,f=36161,e=36160
if(i.f){u=a.a
t=u.drawingBufferWidth
s=i.r
if(typeof t!=="number")return t.t()
i.sai(0,C.e.a0(t*s))
u=u.drawingBufferHeight
s=i.x
if(typeof u!=="number")return u.t()
i.sag(0,C.e.a0(u*s))}if(i.y==null){u=a.a
t=i.ch
s=i.a
r=i.b
q=H.ad(u.getParameter(3379))
p=V.kD(s)
o=V.kD(r)
q=V.kD(q)
p=Math.min(p,q)
o=Math.min(o,q)
n=u.createTexture()
u.bindTexture(g,n)
u.texParameteri(g,10242,33071)
u.texParameteri(g,10243,33071)
u.texParameteri(g,10241,9729)
u.texParameteri(g,10240,9729)
C.c.jx(u,g,0,6408,p,o,0,6408,5121,h)
u.bindTexture(g,h)
m=T.l8(n)
m.e=s
m.f=r
m.r=p
m.x=o
if(!m.d){m.d=!0
s=m.y
if(s!=null)s.dO()}t.b=m.b
t.c=m.c
t.d=m.d
t.e=m.e
t.f=m.f
t.r=m.r
t.x=m.x
t=t.y
if(t!=null)t.dO()
t=i.ch
s=t.b
i.z=s
i.c=t.r
i.d=t.x
u.bindTexture(g,s)
t=u.createRenderbuffer()
i.Q=t
u.bindRenderbuffer(f,t)
u.renderbufferStorage(f,33189,i.c,i.d)
t=u.createFramebuffer()
i.y=t
u.bindFramebuffer(e,t)
u.framebufferTexture2D(e,36064,g,i.z,0)
u.framebufferRenderbuffer(e,36096,f,i.Q)
u.bindTexture(g,h)
u.bindRenderbuffer(f,h)
u.bindFramebuffer(e,h)}u=a.a
u.bindFramebuffer(e,i.y)
u.enable(2884)
u.enable(2929)
u.depthFunc(513)
t=i.dy
s=t.c
a.c=C.f.a0(s*i.a)
r=t.d
a.d=C.f.a0(r*i.b)
l=t.a
k=i.c
j=C.f.a0(l*k)
t=t.b
l=i.d
u.viewport(j,C.f.a0(t*l),C.f.a0(s*k),C.f.a0(r*l))
u.clearDepth(i.db)
t=i.cx
u.clearColor(t.a,t.b,t.c,t.d)
u.clear(16640)},
aS:function(a){a.a.bindFramebuffer(36160,null)}}
X.bQ.prototype={$ib6:1}
X.fR.prototype={
gp:function(){var u=this.x
return u==null?this.x=D.M():u},
a7:function(a){var u,t,s,r,q,p,o=a.a
o.bindFramebuffer(36160,null)
o.enable(2884)
o.enable(2929)
o.depthFunc(513)
u=o.drawingBufferWidth
t=o.drawingBufferHeight
s=this.r
r=s.a
if(typeof u!=="number")return H.B(u)
q=C.f.a0(r*u)
r=s.b
if(typeof t!=="number")return H.B(t)
p=C.f.a0(r*t)
r=C.f.a0(s.c*u)
a.c=r
s=C.f.a0(s.d*t)
a.d=s
o.viewport(q,p,r,s)
o.clearDepth(this.c)
s=this.a
o.clearColor(s.a,s.b,s.c,s.d)
o.clear(16640)},
aS:function(a){}}
X.fT.prototype={
gp:function(){var u=this.b
return u==null?this.b=D.M():u},
$ib6:1,
$ibQ:1}
X.dF.prototype={
gp:function(){var u=this.f
return u==null?this.f=D.M():u},
a3:function(a){var u
H.f(a,"$ix")
u=this.f
if(u!=null)u.F(a)},
f_:function(){return this.a3(null)},
$ib6:1,
$ibQ:1}
X.cE.prototype={}
V.k3.prototype={
$1:function(a){var u
H.f(a,"$ib9")
u=C.f.ex(this.a.gj1(),2)
if(u!=="0.00")P.kE(u+" fps")},
$S:46}
V.hD.prototype={
dB:function(a,b,c,d){var u,t,s,r,q,p,o,n,m=this
H.n(c,{func:1,ret:-1})
if(m.c==null)return
u=m.a
t=P.lf().gcI().j(0,H.m(u))
if(t==null)if(d){c.$0()
m.dz(b)
s=!0}else s=!1
else if(t===b){c.$0()
s=!0}else s=!1
r=document
q=r.createElement("label")
p=q.style
p.whiteSpace="nowrap"
J.kK(m.c).h(0,q)
o=W.my("radio")
o.checked=s
o.name=u
u=W.p
W.ac(o,"change",H.n(new V.hE(m,o,c,b),{func:1,ret:-1,args:[u]}),!1,u)
q.appendChild(o)
n=r.createElement("span")
n.textContent=b
q.appendChild(n)
J.kK(m.c).h(0,r.createElement("br"))},
c7:function(a,b,c){return this.dB(a,b,c,!1)},
dz:function(a){var u,t,s=P.lf(),r=P.i,q=P.mE(s.gcI(),r,r)
q.l(0,this.a,a)
u=s.es(0,q)
r=window.history
t=u.i(0)
r.toString
r.replaceState(new P.jt([],[]).cP(""),"",t)}}
V.hE.prototype={
$1:function(a){var u=this
if(H.A(u.b.checked)){u.c.$0()
u.a.dz(u.d)}},
$S:21}
V.hR.prototype={
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
r=W.p
W.ac(q,"scroll",H.n(new V.hT(o),{func:1,ret:-1,args:[r]}),!1,r)},
dC:function(a){var u,t,s,r,q,p,o,n,m,l,k
H.j(a,"$ib",[P.i],"$ab")
this.hV()
u=document
t=u.createElement("div")
t.className="textPar"
for(s=this.b.jC(C.a.j6(a)),r=s.length,q=0;q<s.length;s.length===r||(0,H.H)(s),++q){p=s[q]
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
if(H.oa(n,"|",0)){m=n.split("|")
l=u.createElement("a")
l.className="linkPar"
if(1>=m.length)return H.e(m,1)
l.href=H.L(m[1])
l.textContent=H.L(m[0])
t.appendChild(l)}else{k=P.jD(C.W,n,C.l,!1)
l=u.createElement("a")
l.className="linkPar"
l.href="#"+H.m(k)
l.textContent=n
t.appendChild(l)}break
case"Other":o=u.createElement("div")
o.className="normalPar"
o.textContent=p.b
t.appendChild(o)
break}}this.a.appendChild(t)},
iG:function(a){var u,t,s,r,q,p,o,n="auto"
H.j(a,"$ib",[P.i],"$ab")
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
s=H.f(r.insertCell(-1),"$ibn").style
s.textAlign="center"
s.verticalAlign="top"
s.marginLeft=n
s.marginRight=n
for(q=0;q<1;++q){p=u.createElement("div")
p.id=a[q]
s=p.style
s.textAlign="left"
s=p.style
s.verticalAlign="top"
o=H.f(r.insertCell(-1),"$ibn")
s=o.style
s.textAlign="center"
s.verticalAlign="top"
s.marginLeft=n
s.marginRight=n
o.appendChild(p)}},
hV:function(){var u,t,s,r,q="Start",p="Bold",o="Italic",n="ItalicEnd",m="Code",l="LinkHead",k="LinkTail",j="LinkEnd",i="Other"
if(this.b!=null)return
u=new V.ib()
t=P.i
u.si1(new H.aK([t,V.cB]))
u.si3(new H.aK([t,V.cF]))
u.c=null
u.c=u.N(0,q)
t=u.N(0,q).C(0,p)
s=V.ak(new H.a4("*"))
C.a.h(t.a,s)
t.c=!0
t=u.N(0,p).C(0,p)
s=new V.bk()
r=[V.bi]
s.sax(H.d([],r))
C.a.h(t.a,s)
t=V.ak(new H.a4("*"))
C.a.h(s.a,t)
t=u.N(0,p).C(0,"BoldEnd")
s=V.ak(new H.a4("*"))
C.a.h(t.a,s)
t.c=!0
t=u.N(0,q).C(0,o)
s=V.ak(new H.a4("_"))
C.a.h(t.a,s)
t.c=!0
t=u.N(0,o).C(0,o)
s=new V.bk()
s.sax(H.d([],r))
C.a.h(t.a,s)
t=V.ak(new H.a4("_"))
C.a.h(s.a,t)
t=u.N(0,o).C(0,n)
s=V.ak(new H.a4("_"))
C.a.h(t.a,s)
t.c=!0
t=u.N(0,q).C(0,m)
s=V.ak(new H.a4("`"))
C.a.h(t.a,s)
t.c=!0
t=u.N(0,m).C(0,m)
s=new V.bk()
s.sax(H.d([],r))
C.a.h(t.a,s)
t=V.ak(new H.a4("`"))
C.a.h(s.a,t)
t=u.N(0,m).C(0,"CodeEnd")
s=V.ak(new H.a4("`"))
C.a.h(t.a,s)
t.c=!0
t=u.N(0,q).C(0,l)
s=V.ak(new H.a4("["))
C.a.h(t.a,s)
t.c=!0
t=u.N(0,l).C(0,k)
s=V.ak(new H.a4("|"))
C.a.h(t.a,s)
s=u.N(0,l).C(0,j)
t=V.ak(new H.a4("]"))
C.a.h(s.a,t)
s.c=!0
s=u.N(0,l).C(0,l)
t=new V.bk()
t.sax(H.d([],r))
C.a.h(s.a,t)
s=V.ak(new H.a4("|]"))
C.a.h(t.a,s)
s=u.N(0,k).C(0,j)
t=V.ak(new H.a4("]"))
C.a.h(s.a,t)
s.c=!0
s=u.N(0,k).C(0,k)
t=new V.bk()
t.sax(H.d([],r))
C.a.h(s.a,t)
s=V.ak(new H.a4("|]"))
C.a.h(t.a,s)
C.a.h(u.N(0,q).C(0,i).a,new V.f8())
s=u.N(0,i).C(0,i)
t=new V.bk()
t.sax(H.d([],r))
C.a.h(s.a,t)
s=V.ak(new H.a4("*_`["))
C.a.h(t.a,s)
s=u.N(0,"BoldEnd")
s.d=s.a.b8(p)
s=u.N(0,n)
s.d=s.a.b8(o)
s=u.N(0,"CodeEnd")
s.d=s.a.b8(m)
s=u.N(0,j)
s.d=s.a.b8("Link")
s=u.N(0,i)
s.d=s.a.b8(i)
this.b=u}}
V.hT.prototype={
$1:function(a){P.lb(C.v,new V.hS(this.a))},
$S:21}
V.hS.prototype={
$0:function(){var u=C.f.a0(document.documentElement.scrollTop),t=this.a.style,s=H.m(-0.01*u)+"px"
t.top=s},
$S:1}
S.jY.prototype={
$0:function(){this.a.saZ(C.z)},
$S:1}
S.jZ.prototype={
$0:function(){this.a.saZ(C.m)},
$S:1}
S.k_.prototype={
$0:function(){this.a.saZ(C.A)},
$S:1}
S.k0.prototype={
$0:function(){this.a.saZ(C.u)},
$S:1};(function aliases(){var u=J.a.prototype
u.eE=u.i
u=J.dr.prototype
u.eF=u.i
u=O.dz.prototype
u.eH=u.aL
u=O.b5.prototype
u.bK=u.aL
u=V.dw.prototype
u.eG=u.aQ
u.cU=u.i})();(function installTearOffs(){var u=hunkHelpers._static_1,t=hunkHelpers._static_0,s=hunkHelpers.installInstanceTearOff,r=hunkHelpers._instance_2u,q=hunkHelpers._instance_0u,p=hunkHelpers._instance_1u,o=hunkHelpers._instance_0i
u(P,"nJ","nf",11)
u(P,"nK","ng",11)
u(P,"nL","nh",11)
t(P,"lK","nH",3)
var n
s(n=E.ao.prototype,"gen",0,0,null,["$1","$0"],["eo","jh"],0,0)
s(n,"gel",0,0,null,["$1","$0"],["em","je"],0,0)
r(n,"gjc","jd",8)
r(n,"gjf","jg",8)
s(n=E.dZ.prototype,"gcX",0,0,null,["$1","$0"],["cZ","cY"],0,0)
q(n,"gjt","eu",3)
p(n=X.e6.prototype,"gh4","h5",10)
p(n,"gfP","fQ",10)
p(n,"gfV","fW",4)
p(n,"gh8","h9",17)
p(n,"gh6","h7",17)
p(n,"ghc","hd",4)
p(n,"ghg","hh",4)
p(n,"gfZ","h_",4)
p(n,"ghe","hf",4)
p(n,"gfX","fY",4)
p(n,"ghi","hj",33)
p(n,"ghk","hl",10)
p(n,"ghA","hB",12)
p(n,"ghw","hx",12)
p(n,"ghy","hz",12)
s(D.bw.prototype,"geP",0,0,null,["$1","$0"],["as","eQ"],0,0)
s(n=D.dt.prototype,"gdk",0,0,null,["$1","$0"],["dl","ha"],0,0)
p(n,"ghm","hn",47)
r(n,"gfJ","fK",22)
r(n,"ghq","hr",22)
o(V.S.prototype,"gk","cz",23)
o(V.R.prototype,"gk","cz",23)
s(n=U.cn.prototype,"gaK",0,0,null,["$1","$0"],["O","a6"],0,0)
r(n,"gfH","fI",24)
r(n,"gho","hp",24)
s(n=U.e7.prototype,"gaK",0,0,null,["$1","$0"],["O","a6"],0,0)
p(n,"gbT","bU",2)
p(n,"gbV","bW",2)
p(n,"gbX","bY",2)
s(n=U.e8.prototype,"gaK",0,0,null,["$1","$0"],["O","a6"],0,0)
p(n,"gbT","bU",2)
p(n,"gbV","bW",2)
p(n,"gbX","bY",2)
p(n,"gfB","fC",2)
p(n,"gfD","fE",2)
p(n,"gi8","i9",2)
p(n,"gi6","i7",2)
p(n,"gi4","i5",2)
p(U.e9.prototype,"gfF","fG",2)
s(n=M.db.prototype,"ga_",0,0,null,["$1","$0"],["Y","aU"],0,0)
r(n,"ghs","ht",13)
r(n,"ghu","hv",13)
s(M.dd.prototype,"ga_",0,0,null,["$1","$0"],["Y","aU"],0,0)
s(n=M.di.prototype,"ga_",0,0,null,["$1","$0"],["Y","aU"],0,0)
r(n,"gfR","fS",8)
r(n,"gfT","fU",8)
s(n=O.dx.prototype,"gat",0,0,null,["$1","$0"],["R","au"],0,0)
s(n,"ghN",0,0,null,["$1","$0"],["dr","hO"],0,0)
r(n,"gfL","fM",25)
r(n,"gfN","fO",25)
s(n=O.dU.prototype,"gat",0,0,null,["$1","$0"],["R","au"],0,0)
r(n,"gh0","h1",14)
r(n,"gh2","h3",14)
s(O.aS.prototype,"gat",0,0,null,["$1","$0"],["R","au"],0,0)
s(X.dF.prototype,"geZ",0,0,null,["$1","$0"],["a3","f_"],0,0)})();(function inheritance(){var u=hunkHelpers.mixin,t=hunkHelpers.inherit,s=hunkHelpers.inheritMany
t(P.P,null)
s(P.P,[H.kg,J.a,J.ar,P.er,P.h,H.du,P.b2,H.bW,H.cO,H.fs,H.ih,P.bx,H.ci,H.eI,P.ag,H.h0,H.h2,H.fW,P.eO,P.be,P.aE,P.ec,P.i0,P.cC,P.i1,P.b9,P.an,P.jG,P.jp,P.cS,P.jj,P.w,P.jy,P.h9,P.bS,P.jF,P.jE,P.a8,P.au,P.aa,P.b1,P.hy,P.dQ,P.ek,P.fQ,P.b,P.D,P.K,P.as,P.i,P.al,P.c4,P.iw,P.jq,W.fv,W.C,W.dl,P.js,P.jk,P.Q,O.X,O.cq,E.fl,E.ao,E.hF,E.dZ,Z.ea,Z.eb,Z.ch,Z.bY,Z.bc,D.fo,D.by,D.x,X.da,X.ds,X.fY,X.h6,X.av,X.ho,X.ic,X.e6,D.bw,D.a6,D.dG,D.dP,D.dW,D.dX,D.dY,V.a0,V.a5,V.fH,V.dA,V.ah,V.a7,V.a3,V.b8,V.bF,V.S,V.R,U.e7,U.e8,U.e9,M.dd,M.di,M.aw,A.d7,A.fd,A.he,A.cH,A.cL,A.cJ,A.cM,A.cK,A.cN,A.bT,A.bv,A.e1,A.iq,F.a9,F.fK,F.bC,F.h_,F.bZ,F.dO,F.hO,F.hP,F.hQ,F.aq,F.iH,F.iI,F.iL,F.iN,F.iO,F.iP,O.bG,O.dz,O.aS,V.f8,V.bi,V.dw,V.hN,V.cB,V.e_,V.cF,V.ib,X.cE,X.bQ,X.fT,X.dF,V.hD,V.hR])
s(J.a,[J.fV,J.dq,J.dr,J.aJ,J.bB,J.bg,H.ct,H.bE,W.k,W.f7,W.bP,W.b_,W.b0,W.U,W.ee,W.fz,W.fA,W.eg,W.dh,W.ei,W.fC,W.p,W.el,W.aI,W.fS,W.en,W.co,W.h5,W.hi,W.es,W.et,W.aM,W.eu,W.ex,W.aN,W.eB,W.eD,W.aP,W.eE,W.aQ,W.eJ,W.aB,W.eM,W.ia,W.aT,W.eP,W.ie,W.iB,W.eU,W.eW,W.eY,W.f_,W.f1,P.b4,P.ep,P.b7,P.ez,P.hC,P.eK,P.ba,P.eR,P.fe,P.ed,P.d8,P.dm,P.dI,P.dM,P.c2,P.dN,P.dS,P.e3,P.eG])
s(J.dr,[J.hz,J.bI,J.bh])
t(J.kf,J.aJ)
s(J.bB,[J.dp,J.dn])
t(P.h4,P.er)
s(P.h4,[H.e4,W.j0,W.j_,P.fM])
t(H.a4,H.e4)
s(P.h,[H.fF,H.ha,H.iT])
s(P.b2,[H.hb,H.iU])
t(H.ft,H.fs)
s(P.bx,[H.hv,H.fX,H.iu,H.ij,H.fn,H.hL,P.fc,P.dE,P.aY,P.iv,P.is,P.dR,P.fr,P.fy])
s(H.ci,[H.k5,H.i5,H.jT,H.jU,H.jV,P.iX,P.iW,P.iY,P.iZ,P.jx,P.jw,P.j6,P.ja,P.j7,P.j8,P.j9,P.jd,P.je,P.jc,P.jb,P.i2,P.i3,P.jM,P.jn,P.jm,P.jo,P.h3,P.h8,P.fD,P.fE,P.iA,P.ix,P.iy,P.iz,P.jz,P.jA,P.jC,P.jB,P.jI,P.jH,P.jJ,P.jK,W.hk,W.hm,W.hK,W.i_,W.j5,P.ju,P.jO,P.fN,P.fO,P.fg,E.hG,E.hH,E.hI,E.i9,D.fI,D.fJ,F.k4,F.jP,F.iR,F.iQ,F.iJ,F.iK,V.k3,V.hE,V.hT,V.hS,S.jY,S.jZ,S.k_,S.k0])
s(H.i5,[H.hY,H.cf])
t(H.iV,P.fc)
t(P.h7,P.ag)
t(H.aK,P.h7)
t(H.h1,H.fF)
t(H.dB,H.bE)
s(H.dB,[H.cT,H.cV])
t(H.cU,H.cT)
t(H.cu,H.cU)
t(H.cW,H.cV)
t(H.dC,H.cW)
s(H.dC,[H.hp,H.hq,H.hr,H.hs,H.ht,H.dD,H.cv])
t(P.jl,P.jG)
t(P.ji,P.jp)
t(P.eT,P.h9)
t(P.e5,P.eT)
s(P.bS,[P.fj,P.fG])
t(P.bV,P.i1)
s(P.bV,[P.fk,P.iE,P.iD])
t(P.iC,P.fG)
s(P.aa,[P.z,P.o])
s(P.aY,[P.c1,P.fU])
t(P.j2,P.c4)
s(W.k,[W.G,W.fL,W.cr,W.aO,W.cX,W.aR,W.aC,W.cZ,W.iS,W.cQ,P.fh,P.bO])
s(W.G,[W.a1,W.bu])
s(W.a1,[W.u,P.q])
s(W.u,[W.f9,W.fa,W.bR,W.df,W.fP,W.cp,W.hM,W.bn])
s(W.b_,[W.cj,W.fw,W.fx])
t(W.fu,W.b0)
t(W.ck,W.ee)
t(W.eh,W.eg)
t(W.dg,W.eh)
t(W.ej,W.ei)
t(W.fB,W.ej)
t(W.aA,W.bP)
t(W.em,W.el)
t(W.cl,W.em)
t(W.eo,W.en)
t(W.bX,W.eo)
t(W.bH,W.p)
s(W.bH,[W.b3,W.ae,W.aU])
t(W.hj,W.es)
t(W.hl,W.et)
t(W.ev,W.eu)
t(W.hn,W.ev)
t(W.ey,W.ex)
t(W.cw,W.ey)
t(W.eC,W.eB)
t(W.hA,W.eC)
t(W.hJ,W.eD)
t(W.cY,W.cX)
t(W.hV,W.cY)
t(W.eF,W.eE)
t(W.hW,W.eF)
t(W.hZ,W.eJ)
t(W.eN,W.eM)
t(W.i6,W.eN)
t(W.d_,W.cZ)
t(W.i7,W.d_)
t(W.eQ,W.eP)
t(W.id,W.eQ)
t(W.bd,W.ae)
t(W.eV,W.eU)
t(W.j1,W.eV)
t(W.ef,W.dh)
t(W.eX,W.eW)
t(W.jf,W.eX)
t(W.eZ,W.eY)
t(W.ew,W.eZ)
t(W.f0,W.f_)
t(W.jr,W.f0)
t(W.f2,W.f1)
t(W.jv,W.f2)
t(W.j3,P.i0)
t(W.ko,W.j3)
t(W.j4,P.cC)
t(P.jt,P.js)
t(P.aj,P.jk)
t(P.eq,P.ep)
t(P.fZ,P.eq)
t(P.eA,P.ez)
t(P.hw,P.eA)
t(P.eL,P.eK)
t(P.i4,P.eL)
t(P.eS,P.eR)
t(P.ig,P.eS)
t(P.ff,P.ed)
t(P.hx,P.bO)
t(P.eH,P.eG)
t(P.hX,P.eH)
s(E.fl,[Z.d9,A.cA,T.c3])
s(D.x,[D.bz,D.bA,D.F,X.hB])
s(X.hB,[X.dv,X.bj,X.cs,X.e0])
s(O.X,[D.dt,U.cn,M.db])
s(D.fo,[U.fq,U.ai])
t(U.dc,U.ai)
s(A.cA,[A.dy,A.dV])
s(A.e1,[A.J,A.im,A.io,A.ip,A.il,A.a_,A.ax,A.N,A.e2,A.ir,A.cI,A.am,A.ab,A.ap])
t(F.hU,F.fK)
t(F.ik,F.h_)
t(F.iM,F.iN)
t(F.hu,F.iO)
s(O.bG,[O.dx,O.dU])
s(O.dz,[O.hc,O.hd,O.b5])
s(O.b5,[O.hf,O.hg])
t(T.dT,T.c3)
t(T.i8,T.dT)
s(V.dw,[V.bk,V.cG])
s(X.cE,[X.fi,X.fR])
u(H.e4,H.cO)
u(H.cT,P.w)
u(H.cU,H.bW)
u(H.cV,P.w)
u(H.cW,H.bW)
u(P.er,P.w)
u(P.eT,P.jy)
u(W.ee,W.fv)
u(W.eg,P.w)
u(W.eh,W.C)
u(W.ei,P.w)
u(W.ej,W.C)
u(W.el,P.w)
u(W.em,W.C)
u(W.en,P.w)
u(W.eo,W.C)
u(W.es,P.ag)
u(W.et,P.ag)
u(W.eu,P.w)
u(W.ev,W.C)
u(W.ex,P.w)
u(W.ey,W.C)
u(W.eB,P.w)
u(W.eC,W.C)
u(W.eD,P.ag)
u(W.cX,P.w)
u(W.cY,W.C)
u(W.eE,P.w)
u(W.eF,W.C)
u(W.eJ,P.ag)
u(W.eM,P.w)
u(W.eN,W.C)
u(W.cZ,P.w)
u(W.d_,W.C)
u(W.eP,P.w)
u(W.eQ,W.C)
u(W.eU,P.w)
u(W.eV,W.C)
u(W.eW,P.w)
u(W.eX,W.C)
u(W.eY,P.w)
u(W.eZ,W.C)
u(W.f_,P.w)
u(W.f0,W.C)
u(W.f1,P.w)
u(W.f2,W.C)
u(P.ep,P.w)
u(P.eq,W.C)
u(P.ez,P.w)
u(P.eA,W.C)
u(P.eK,P.w)
u(P.eL,W.C)
u(P.eR,P.w)
u(P.eS,W.C)
u(P.ed,P.ag)
u(P.eG,P.w)
u(P.eH,W.C)})();(function constants(){var u=hunkHelpers.makeConstList
C.t=W.bR.prototype
C.R=J.a.prototype
C.a=J.aJ.prototype
C.S=J.dn.prototype
C.e=J.dp.prototype
C.n=J.dq.prototype
C.f=J.bB.prototype
C.b=J.bg.prototype
C.T=J.bh.prototype
C.Z=W.cw.prototype
C.E=J.hz.prototype
C.c=P.c2.prototype
C.w=J.bI.prototype
C.F=W.bd.prototype
C.G=W.cQ.prototype
C.a_=new P.fk()
C.H=new P.fj()
C.x=function getTagFallback(o) {
  var s = Object.prototype.toString.call(o);
  return s.substring(8, s.length - 1);
}
C.I=function() {
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
C.N=function(getTagFallback) {
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
C.J=function(hooks) {
  if (typeof dartExperimentalFixupGetTag != "function") return hooks;
  hooks.getTag = dartExperimentalFixupGetTag(hooks.getTag);
}
C.K=function(hooks) {
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
C.M=function(hooks) {
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
C.L=function(hooks) {
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
C.y=function(hooks) { return hooks; }

C.O=new P.hy()
C.l=new P.iC()
C.P=new P.iE()
C.k=new P.jl()
C.u=new A.bv(0,"ColorBlendType.Overwrite")
C.z=new A.bv(1,"ColorBlendType.Additive")
C.A=new A.bv(2,"ColorBlendType.Average")
C.m=new A.bv(3,"ColorBlendType.AlphaBlend")
C.d=new A.bT(0,"ColorSourceType.None")
C.j=new A.bT(1,"ColorSourceType.Solid")
C.h=new A.bT(2,"ColorSourceType.Texture2D")
C.i=new A.bT(3,"ColorSourceType.TextureCube")
C.v=new P.b1(0)
C.Q=new P.b1(5e6)
C.B=H.d(u([127,2047,65535,1114111]),[P.o])
C.o=H.d(u([0,0,32776,33792,1,10240,0,0]),[P.o])
C.p=H.d(u([0,0,65490,45055,65535,34815,65534,18431]),[P.o])
C.q=H.d(u([0,0,26624,1023,65534,2047,65534,2047]),[P.o])
C.V=H.d(u([0,0,32722,12287,65534,34815,65534,18431]),[P.o])
C.W=H.d(u([0,0,65498,45055,65535,34815,65534,18431]),[P.o])
C.r=H.d(u([0,0,24576,1023,65534,34815,65534,18431]),[P.o])
C.C=H.d(u([0,0,32754,11263,65534,34815,65534,18431]),[P.o])
C.X=H.d(u([0,0,32722,12287,65535,34815,65534,18431]),[P.o])
C.D=H.d(u([0,0,65490,12287,65535,34815,65534,18431]),[P.o])
C.U=H.d(u([]),[P.i])
C.Y=new H.ft(0,{},C.U,[P.i,P.i])})()
var v={mangledGlobalNames:{o:"int",z:"double",aa:"num",i:"String",a8:"bool",K:"Null",b:"List"},mangledNames:{},getTypeFromName:getGlobalFromName,metadata:[],types:[{func:1,ret:-1,opt:[D.x]},{func:1,ret:P.K},{func:1,ret:-1,args:[D.x]},{func:1,ret:-1},{func:1,ret:-1,args:[W.ae]},{func:1,ret:P.K,args:[F.a9]},{func:1,ret:P.K,args:[,,]},{func:1,ret:-1,args:[P.i,,]},{func:1,ret:-1,args:[P.o,[P.h,E.ao]]},{func:1,ret:P.K,args:[D.x]},{func:1,ret:-1,args:[W.p]},{func:1,ret:-1,args:[{func:1,ret:-1}]},{func:1,ret:-1,args:[W.aU]},{func:1,ret:-1,args:[P.o,[P.h,M.aw]]},{func:1,ret:-1,args:[P.o,[P.h,O.aS]]},{func:1,args:[,]},{func:1,ret:-1,args:[P.i,P.i]},{func:1,ret:-1,args:[W.b3]},{func:1,ret:P.K,args:[{func:1,ret:-1,args:[D.x]}]},{func:1,ret:P.K,args:[,]},{func:1,ret:P.i,args:[P.o]},{func:1,ret:P.K,args:[W.p]},{func:1,ret:-1,args:[P.o,[P.h,D.a6]]},{func:1,ret:P.z},{func:1,ret:-1,args:[P.o,[P.h,U.ai]]},{func:1,ret:-1,args:[P.o,[P.h,V.ah]]},{func:1,args:[,P.i]},{func:1,ret:P.K,args:[,],opt:[P.as]},{func:1,ret:P.K,args:[P.aa]},{func:1,ret:P.K,args:[P.i,,]},{func:1,ret:P.Q,args:[P.o]},{func:1,ret:P.K,args:[P.i]},{func:1,ret:P.Q,args:[,,]},{func:1,ret:-1,args:[W.bd]},{func:1,ret:[P.D,P.i,P.i],args:[[P.D,P.i,P.i],P.i]},{func:1,ret:P.K,args:[{func:1,ret:-1}]},{func:1,args:[W.p]},{func:1,ret:P.a8,args:[W.G]},{func:1,ret:W.a1,args:[W.G]},{func:1,ret:-1,args:[P.i,P.o]},{func:1,ret:P.i,args:[P.i]},{func:1,ret:V.a3,args:[P.z]},{func:1,ret:P.K,args:[F.aq,P.z,P.z]},{func:1,ret:-1,args:[P.i],opt:[,]},{func:1,ret:P.o,args:[P.o,P.o]},{func:1,args:[P.i]},{func:1,ret:P.K,args:[P.b9]},{func:1,ret:P.a8,args:[[P.h,D.a6]]},{func:1,ret:[P.aE,,],args:[,]}],interceptorsByTag:null,leafTags:null};(function staticFields(){$.aZ=0
$.cg=null
$.kM=null
$.ks=!1
$.lO=null
$.lI=null
$.lU=null
$.jQ=null
$.jW=null
$.kB=null
$.c5=null
$.d2=null
$.d3=null
$.kt=!1
$.Z=C.k
$.at=[]
$.hh=null
$.l1=null
$.cx=null
$.cz=null
$.li=null
$.lm=null
$.lk=null
$.ll=null
$.iF=null
$.lj=null
$.l0=null})();(function lazyInitializers(){var u=hunkHelpers.lazy
u($,"ok","lZ",function(){return H.lN("_$dart_dartClosure")})
u($,"ol","kF",function(){return H.lN("_$dart_js")})
u($,"op","m_",function(){return H.bb(H.ii({
toString:function(){return"$receiver$"}}))})
u($,"oq","m0",function(){return H.bb(H.ii({$method$:null,
toString:function(){return"$receiver$"}}))})
u($,"or","m1",function(){return H.bb(H.ii(null))})
u($,"os","m2",function(){return H.bb(function(){var $argumentsExpr$='$arguments$'
try{null.$method$($argumentsExpr$)}catch(t){return t.message}}())})
u($,"ov","m5",function(){return H.bb(H.ii(void 0))})
u($,"ow","m6",function(){return H.bb(function(){var $argumentsExpr$='$arguments$'
try{(void 0).$method$($argumentsExpr$)}catch(t){return t.message}}())})
u($,"ou","m4",function(){return H.bb(H.ld(null))})
u($,"ot","m3",function(){return H.bb(function(){try{null.$method$}catch(t){return t.message}}())})
u($,"oy","m8",function(){return H.bb(H.ld(void 0))})
u($,"ox","m7",function(){return H.bb(function(){try{(void 0).$method$}catch(t){return t.message}}())})
u($,"oN","kG",function(){return P.ne()})
u($,"oz","m9",function(){return P.nb()})
u($,"oO","md",function(){return H.mK(H.bJ(H.d([-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-1,-2,-2,-2,-2,-2,62,-2,62,-2,63,52,53,54,55,56,57,58,59,60,61,-2,-2,-2,-1,-2,-2,-2,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,-2,-2,-2,-2,63,-2,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,-2,-2,-2,-2,-2],[P.o])))})
u($,"oP","me",function(){return P.mY("^[\\-\\.0-9A-Z_a-z~]*$")})
u($,"oQ","mf",function(){return P.nA()})
u($,"oG","mc",function(){return Z.aD(0)})
u($,"oA","ma",function(){return Z.aD(511)})
u($,"oI","aW",function(){return Z.aD(1)})
u($,"oH","br",function(){return Z.aD(2)})
u($,"oC","bq",function(){return Z.aD(4)})
u($,"oJ","bs",function(){return Z.aD(8)})
u($,"oK","bt",function(){return Z.aD(16)})
u($,"oD","d4",function(){return Z.aD(32)})
u($,"oE","d5",function(){return Z.aD(64)})
u($,"oF","mb",function(){return Z.aD(96)})
u($,"oL","ce",function(){return Z.aD(128)})
u($,"oB","bp",function(){return Z.aD(256)})
u($,"oj","lY",function(){return new V.fH(1e-9)})
u($,"oi","O",function(){return $.lY()})})();(function nativeSupport(){!function(){var u=function(a){var o={}
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
hunkHelpers.setOrUpdateInterceptorsByTag({AnimationEffectReadOnly:J.a,AnimationEffectTiming:J.a,AnimationEffectTimingReadOnly:J.a,AnimationTimeline:J.a,AnimationWorkletGlobalScope:J.a,AuthenticatorAssertionResponse:J.a,AuthenticatorAttestationResponse:J.a,AuthenticatorResponse:J.a,BackgroundFetchFetch:J.a,BackgroundFetchManager:J.a,BackgroundFetchSettledFetch:J.a,BarProp:J.a,BarcodeDetector:J.a,BluetoothRemoteGATTDescriptor:J.a,Body:J.a,BudgetState:J.a,CacheStorage:J.a,CanvasGradient:J.a,CanvasPattern:J.a,CanvasRenderingContext2D:J.a,Client:J.a,Clients:J.a,CookieStore:J.a,Coordinates:J.a,Credential:J.a,CredentialUserData:J.a,CredentialsContainer:J.a,Crypto:J.a,CryptoKey:J.a,CSS:J.a,CSSVariableReferenceValue:J.a,CustomElementRegistry:J.a,DataTransfer:J.a,DataTransferItem:J.a,DeprecatedStorageInfo:J.a,DeprecatedStorageQuota:J.a,DeprecationReport:J.a,DetectedBarcode:J.a,DetectedFace:J.a,DetectedText:J.a,DeviceAcceleration:J.a,DeviceRotationRate:J.a,DirectoryEntry:J.a,DirectoryReader:J.a,DocumentOrShadowRoot:J.a,DocumentTimeline:J.a,DOMError:J.a,DOMImplementation:J.a,Iterator:J.a,DOMMatrix:J.a,DOMMatrixReadOnly:J.a,DOMParser:J.a,DOMPoint:J.a,DOMPointReadOnly:J.a,DOMQuad:J.a,DOMStringMap:J.a,Entry:J.a,External:J.a,FaceDetector:J.a,FederatedCredential:J.a,FileEntry:J.a,DOMFileSystem:J.a,FontFace:J.a,FontFaceSource:J.a,FormData:J.a,GamepadButton:J.a,GamepadPose:J.a,Geolocation:J.a,Position:J.a,Headers:J.a,HTMLHyperlinkElementUtils:J.a,IdleDeadline:J.a,ImageBitmap:J.a,ImageBitmapRenderingContext:J.a,ImageCapture:J.a,InputDeviceCapabilities:J.a,IntersectionObserver:J.a,IntersectionObserverEntry:J.a,InterventionReport:J.a,KeyframeEffect:J.a,KeyframeEffectReadOnly:J.a,MediaCapabilities:J.a,MediaCapabilitiesInfo:J.a,MediaDeviceInfo:J.a,MediaError:J.a,MediaKeyStatusMap:J.a,MediaKeySystemAccess:J.a,MediaKeys:J.a,MediaKeysPolicy:J.a,MediaMetadata:J.a,MediaSession:J.a,MediaSettingsRange:J.a,MemoryInfo:J.a,MessageChannel:J.a,Metadata:J.a,MutationObserver:J.a,WebKitMutationObserver:J.a,MutationRecord:J.a,NavigationPreloadManager:J.a,Navigator:J.a,NavigatorAutomationInformation:J.a,NavigatorConcurrentHardware:J.a,NavigatorCookies:J.a,NavigatorUserMediaError:J.a,NodeFilter:J.a,NodeIterator:J.a,NonDocumentTypeChildNode:J.a,NonElementParentNode:J.a,NoncedElement:J.a,OffscreenCanvasRenderingContext2D:J.a,OverconstrainedError:J.a,PaintRenderingContext2D:J.a,PaintSize:J.a,PaintWorkletGlobalScope:J.a,PasswordCredential:J.a,Path2D:J.a,PaymentAddress:J.a,PaymentInstruments:J.a,PaymentManager:J.a,PaymentResponse:J.a,PerformanceEntry:J.a,PerformanceLongTaskTiming:J.a,PerformanceMark:J.a,PerformanceMeasure:J.a,PerformanceNavigation:J.a,PerformanceNavigationTiming:J.a,PerformanceObserver:J.a,PerformanceObserverEntryList:J.a,PerformancePaintTiming:J.a,PerformanceResourceTiming:J.a,PerformanceServerTiming:J.a,PerformanceTiming:J.a,Permissions:J.a,PhotoCapabilities:J.a,PositionError:J.a,Presentation:J.a,PresentationReceiver:J.a,PublicKeyCredential:J.a,PushManager:J.a,PushMessageData:J.a,PushSubscription:J.a,PushSubscriptionOptions:J.a,Range:J.a,RelatedApplication:J.a,ReportBody:J.a,ReportingObserver:J.a,ResizeObserver:J.a,ResizeObserverEntry:J.a,RTCCertificate:J.a,RTCIceCandidate:J.a,mozRTCIceCandidate:J.a,RTCLegacyStatsReport:J.a,RTCRtpContributingSource:J.a,RTCRtpReceiver:J.a,RTCRtpSender:J.a,RTCSessionDescription:J.a,mozRTCSessionDescription:J.a,RTCStatsResponse:J.a,Screen:J.a,ScrollState:J.a,ScrollTimeline:J.a,Selection:J.a,SharedArrayBuffer:J.a,SpeechRecognitionAlternative:J.a,SpeechSynthesisVoice:J.a,StaticRange:J.a,StorageManager:J.a,StyleMedia:J.a,StylePropertyMap:J.a,StylePropertyMapReadonly:J.a,SyncManager:J.a,TaskAttributionTiming:J.a,TextDetector:J.a,TextMetrics:J.a,TrackDefault:J.a,TreeWalker:J.a,TrustedHTML:J.a,TrustedScriptURL:J.a,TrustedURL:J.a,UnderlyingSourceBase:J.a,URLSearchParams:J.a,VRCoordinateSystem:J.a,VRDisplayCapabilities:J.a,VREyeParameters:J.a,VRFrameData:J.a,VRFrameOfReference:J.a,VRPose:J.a,VRStageBounds:J.a,VRStageBoundsPoint:J.a,VRStageParameters:J.a,ValidityState:J.a,VideoPlaybackQuality:J.a,VideoTrack:J.a,VTTRegion:J.a,WindowClient:J.a,WorkletAnimation:J.a,WorkletGlobalScope:J.a,XPathEvaluator:J.a,XPathExpression:J.a,XPathNSResolver:J.a,XPathResult:J.a,XMLSerializer:J.a,XSLTProcessor:J.a,Bluetooth:J.a,BluetoothCharacteristicProperties:J.a,BluetoothRemoteGATTServer:J.a,BluetoothRemoteGATTService:J.a,BluetoothUUID:J.a,BudgetService:J.a,Cache:J.a,DOMFileSystemSync:J.a,DirectoryEntrySync:J.a,DirectoryReaderSync:J.a,EntrySync:J.a,FileEntrySync:J.a,FileReaderSync:J.a,FileWriterSync:J.a,HTMLAllCollection:J.a,Mojo:J.a,MojoHandle:J.a,MojoWatcher:J.a,NFC:J.a,PagePopupController:J.a,Report:J.a,Request:J.a,Response:J.a,SubtleCrypto:J.a,USBAlternateInterface:J.a,USBConfiguration:J.a,USBDevice:J.a,USBEndpoint:J.a,USBInTransferResult:J.a,USBInterface:J.a,USBIsochronousInTransferPacket:J.a,USBIsochronousInTransferResult:J.a,USBIsochronousOutTransferPacket:J.a,USBIsochronousOutTransferResult:J.a,USBOutTransferResult:J.a,WorkerLocation:J.a,WorkerNavigator:J.a,Worklet:J.a,IDBCursor:J.a,IDBCursorWithValue:J.a,IDBFactory:J.a,IDBIndex:J.a,IDBKeyRange:J.a,IDBObjectStore:J.a,IDBObservation:J.a,IDBObserver:J.a,IDBObserverChanges:J.a,SVGAngle:J.a,SVGAnimatedAngle:J.a,SVGAnimatedBoolean:J.a,SVGAnimatedEnumeration:J.a,SVGAnimatedInteger:J.a,SVGAnimatedLength:J.a,SVGAnimatedLengthList:J.a,SVGAnimatedNumber:J.a,SVGAnimatedNumberList:J.a,SVGAnimatedPreserveAspectRatio:J.a,SVGAnimatedRect:J.a,SVGAnimatedString:J.a,SVGAnimatedTransformList:J.a,SVGMatrix:J.a,SVGPoint:J.a,SVGPreserveAspectRatio:J.a,SVGRect:J.a,SVGUnitTypes:J.a,AudioListener:J.a,AudioParam:J.a,AudioTrack:J.a,AudioWorkletGlobalScope:J.a,AudioWorkletProcessor:J.a,PeriodicWave:J.a,WebGLActiveInfo:J.a,ANGLEInstancedArrays:J.a,ANGLE_instanced_arrays:J.a,WebGLCanvas:J.a,WebGLColorBufferFloat:J.a,WebGLCompressedTextureASTC:J.a,WebGLCompressedTextureATC:J.a,WEBGL_compressed_texture_atc:J.a,WebGLCompressedTextureETC1:J.a,WEBGL_compressed_texture_etc1:J.a,WebGLCompressedTextureETC:J.a,WebGLCompressedTexturePVRTC:J.a,WEBGL_compressed_texture_pvrtc:J.a,WebGLCompressedTextureS3TC:J.a,WEBGL_compressed_texture_s3tc:J.a,WebGLCompressedTextureS3TCsRGB:J.a,WebGLDebugRendererInfo:J.a,WEBGL_debug_renderer_info:J.a,WebGLDebugShaders:J.a,WEBGL_debug_shaders:J.a,WebGLDepthTexture:J.a,WEBGL_depth_texture:J.a,WebGLDrawBuffers:J.a,WEBGL_draw_buffers:J.a,EXTsRGB:J.a,EXT_sRGB:J.a,EXTBlendMinMax:J.a,EXT_blend_minmax:J.a,EXTColorBufferFloat:J.a,EXTColorBufferHalfFloat:J.a,EXTDisjointTimerQuery:J.a,EXTDisjointTimerQueryWebGL2:J.a,EXTFragDepth:J.a,EXT_frag_depth:J.a,EXTShaderTextureLOD:J.a,EXT_shader_texture_lod:J.a,EXTTextureFilterAnisotropic:J.a,EXT_texture_filter_anisotropic:J.a,WebGLGetBufferSubDataAsync:J.a,WebGLLoseContext:J.a,WebGLExtensionLoseContext:J.a,WEBGL_lose_context:J.a,OESElementIndexUint:J.a,OES_element_index_uint:J.a,OESStandardDerivatives:J.a,OES_standard_derivatives:J.a,OESTextureFloat:J.a,OES_texture_float:J.a,OESTextureFloatLinear:J.a,OES_texture_float_linear:J.a,OESTextureHalfFloat:J.a,OES_texture_half_float:J.a,OESTextureHalfFloatLinear:J.a,OES_texture_half_float_linear:J.a,OESVertexArrayObject:J.a,OES_vertex_array_object:J.a,WebGLQuery:J.a,WebGLRenderingContext:J.a,WebGLSampler:J.a,WebGLShaderPrecisionFormat:J.a,WebGLSync:J.a,WebGLTimerQueryEXT:J.a,WebGLTransformFeedback:J.a,WebGLVertexArrayObject:J.a,WebGLVertexArrayObjectOES:J.a,WebGL:J.a,WebGL2RenderingContextBase:J.a,Database:J.a,SQLError:J.a,SQLResultSet:J.a,SQLTransaction:J.a,ArrayBuffer:H.ct,DataView:H.bE,ArrayBufferView:H.bE,Float32Array:H.cu,Float64Array:H.cu,Int16Array:H.hp,Int32Array:H.hq,Int8Array:H.hr,Uint16Array:H.hs,Uint32Array:H.ht,Uint8ClampedArray:H.dD,CanvasPixelArray:H.dD,Uint8Array:H.cv,HTMLAudioElement:W.u,HTMLBRElement:W.u,HTMLBaseElement:W.u,HTMLBodyElement:W.u,HTMLButtonElement:W.u,HTMLContentElement:W.u,HTMLDListElement:W.u,HTMLDataElement:W.u,HTMLDataListElement:W.u,HTMLDetailsElement:W.u,HTMLDialogElement:W.u,HTMLEmbedElement:W.u,HTMLFieldSetElement:W.u,HTMLHRElement:W.u,HTMLHeadElement:W.u,HTMLHeadingElement:W.u,HTMLHtmlElement:W.u,HTMLIFrameElement:W.u,HTMLImageElement:W.u,HTMLLIElement:W.u,HTMLLabelElement:W.u,HTMLLegendElement:W.u,HTMLLinkElement:W.u,HTMLMapElement:W.u,HTMLMediaElement:W.u,HTMLMenuElement:W.u,HTMLMetaElement:W.u,HTMLMeterElement:W.u,HTMLModElement:W.u,HTMLOListElement:W.u,HTMLObjectElement:W.u,HTMLOptGroupElement:W.u,HTMLOptionElement:W.u,HTMLOutputElement:W.u,HTMLParagraphElement:W.u,HTMLParamElement:W.u,HTMLPictureElement:W.u,HTMLPreElement:W.u,HTMLProgressElement:W.u,HTMLQuoteElement:W.u,HTMLScriptElement:W.u,HTMLShadowElement:W.u,HTMLSlotElement:W.u,HTMLSourceElement:W.u,HTMLSpanElement:W.u,HTMLStyleElement:W.u,HTMLTableCaptionElement:W.u,HTMLTableColElement:W.u,HTMLTableElement:W.u,HTMLTableRowElement:W.u,HTMLTableSectionElement:W.u,HTMLTemplateElement:W.u,HTMLTextAreaElement:W.u,HTMLTimeElement:W.u,HTMLTitleElement:W.u,HTMLTrackElement:W.u,HTMLUListElement:W.u,HTMLUnknownElement:W.u,HTMLVideoElement:W.u,HTMLDirectoryElement:W.u,HTMLFontElement:W.u,HTMLFrameElement:W.u,HTMLFrameSetElement:W.u,HTMLMarqueeElement:W.u,HTMLElement:W.u,AccessibleNodeList:W.f7,HTMLAnchorElement:W.f9,HTMLAreaElement:W.fa,Blob:W.bP,HTMLCanvasElement:W.bR,CDATASection:W.bu,CharacterData:W.bu,Comment:W.bu,ProcessingInstruction:W.bu,Text:W.bu,CSSNumericValue:W.cj,CSSUnitValue:W.cj,CSSPerspective:W.fu,CSSCharsetRule:W.U,CSSConditionRule:W.U,CSSFontFaceRule:W.U,CSSGroupingRule:W.U,CSSImportRule:W.U,CSSKeyframeRule:W.U,MozCSSKeyframeRule:W.U,WebKitCSSKeyframeRule:W.U,CSSKeyframesRule:W.U,MozCSSKeyframesRule:W.U,WebKitCSSKeyframesRule:W.U,CSSMediaRule:W.U,CSSNamespaceRule:W.U,CSSPageRule:W.U,CSSRule:W.U,CSSStyleRule:W.U,CSSSupportsRule:W.U,CSSViewportRule:W.U,CSSStyleDeclaration:W.ck,MSStyleCSSProperties:W.ck,CSS2Properties:W.ck,CSSImageValue:W.b_,CSSKeywordValue:W.b_,CSSPositionValue:W.b_,CSSResourceValue:W.b_,CSSURLImageValue:W.b_,CSSStyleValue:W.b_,CSSMatrixComponent:W.b0,CSSRotation:W.b0,CSSScale:W.b0,CSSSkew:W.b0,CSSTranslation:W.b0,CSSTransformComponent:W.b0,CSSTransformValue:W.fw,CSSUnparsedValue:W.fx,DataTransferItemList:W.fz,HTMLDivElement:W.df,DOMException:W.fA,ClientRectList:W.dg,DOMRectList:W.dg,DOMRectReadOnly:W.dh,DOMStringList:W.fB,DOMTokenList:W.fC,Element:W.a1,AbortPaymentEvent:W.p,AnimationEvent:W.p,AnimationPlaybackEvent:W.p,ApplicationCacheErrorEvent:W.p,BackgroundFetchClickEvent:W.p,BackgroundFetchEvent:W.p,BackgroundFetchFailEvent:W.p,BackgroundFetchedEvent:W.p,BeforeInstallPromptEvent:W.p,BeforeUnloadEvent:W.p,BlobEvent:W.p,CanMakePaymentEvent:W.p,ClipboardEvent:W.p,CloseEvent:W.p,CustomEvent:W.p,DeviceMotionEvent:W.p,DeviceOrientationEvent:W.p,ErrorEvent:W.p,ExtendableEvent:W.p,ExtendableMessageEvent:W.p,FetchEvent:W.p,FontFaceSetLoadEvent:W.p,ForeignFetchEvent:W.p,GamepadEvent:W.p,HashChangeEvent:W.p,InstallEvent:W.p,MediaEncryptedEvent:W.p,MediaKeyMessageEvent:W.p,MediaQueryListEvent:W.p,MediaStreamEvent:W.p,MediaStreamTrackEvent:W.p,MessageEvent:W.p,MIDIConnectionEvent:W.p,MIDIMessageEvent:W.p,MutationEvent:W.p,NotificationEvent:W.p,PageTransitionEvent:W.p,PaymentRequestEvent:W.p,PaymentRequestUpdateEvent:W.p,PopStateEvent:W.p,PresentationConnectionAvailableEvent:W.p,PresentationConnectionCloseEvent:W.p,ProgressEvent:W.p,PromiseRejectionEvent:W.p,PushEvent:W.p,RTCDataChannelEvent:W.p,RTCDTMFToneChangeEvent:W.p,RTCPeerConnectionIceEvent:W.p,RTCTrackEvent:W.p,SecurityPolicyViolationEvent:W.p,SensorErrorEvent:W.p,SpeechRecognitionError:W.p,SpeechRecognitionEvent:W.p,SpeechSynthesisEvent:W.p,StorageEvent:W.p,SyncEvent:W.p,TrackEvent:W.p,TransitionEvent:W.p,WebKitTransitionEvent:W.p,VRDeviceEvent:W.p,VRDisplayEvent:W.p,VRSessionEvent:W.p,MojoInterfaceRequestEvent:W.p,ResourceProgressEvent:W.p,USBConnectionEvent:W.p,IDBVersionChangeEvent:W.p,AudioProcessingEvent:W.p,OfflineAudioCompletionEvent:W.p,WebGLContextEvent:W.p,Event:W.p,InputEvent:W.p,AbsoluteOrientationSensor:W.k,Accelerometer:W.k,AccessibleNode:W.k,AmbientLightSensor:W.k,Animation:W.k,ApplicationCache:W.k,DOMApplicationCache:W.k,OfflineResourceList:W.k,BackgroundFetchRegistration:W.k,BatteryManager:W.k,BroadcastChannel:W.k,CanvasCaptureMediaStreamTrack:W.k,DedicatedWorkerGlobalScope:W.k,EventSource:W.k,FileReader:W.k,FontFaceSet:W.k,Gyroscope:W.k,XMLHttpRequest:W.k,XMLHttpRequestEventTarget:W.k,XMLHttpRequestUpload:W.k,LinearAccelerationSensor:W.k,Magnetometer:W.k,MediaDevices:W.k,MediaKeySession:W.k,MediaQueryList:W.k,MediaRecorder:W.k,MediaSource:W.k,MediaStream:W.k,MediaStreamTrack:W.k,MIDIAccess:W.k,MIDIInput:W.k,MIDIOutput:W.k,MIDIPort:W.k,NetworkInformation:W.k,Notification:W.k,OffscreenCanvas:W.k,OrientationSensor:W.k,PaymentRequest:W.k,Performance:W.k,PermissionStatus:W.k,PresentationAvailability:W.k,PresentationConnection:W.k,PresentationConnectionList:W.k,PresentationRequest:W.k,RelativeOrientationSensor:W.k,RemotePlayback:W.k,RTCDataChannel:W.k,DataChannel:W.k,RTCDTMFSender:W.k,RTCPeerConnection:W.k,webkitRTCPeerConnection:W.k,mozRTCPeerConnection:W.k,ScreenOrientation:W.k,Sensor:W.k,ServiceWorker:W.k,ServiceWorkerContainer:W.k,ServiceWorkerGlobalScope:W.k,ServiceWorkerRegistration:W.k,SharedWorker:W.k,SharedWorkerGlobalScope:W.k,SpeechRecognition:W.k,SpeechSynthesis:W.k,SpeechSynthesisUtterance:W.k,VR:W.k,VRDevice:W.k,VRDisplay:W.k,VRSession:W.k,VisualViewport:W.k,WebSocket:W.k,Worker:W.k,WorkerGlobalScope:W.k,WorkerPerformance:W.k,BluetoothDevice:W.k,BluetoothRemoteGATTCharacteristic:W.k,Clipboard:W.k,MojoInterfaceInterceptor:W.k,USB:W.k,IDBDatabase:W.k,IDBOpenDBRequest:W.k,IDBVersionChangeRequest:W.k,IDBRequest:W.k,IDBTransaction:W.k,AnalyserNode:W.k,RealtimeAnalyserNode:W.k,AudioBufferSourceNode:W.k,AudioDestinationNode:W.k,AudioNode:W.k,AudioScheduledSourceNode:W.k,AudioWorkletNode:W.k,BiquadFilterNode:W.k,ChannelMergerNode:W.k,AudioChannelMerger:W.k,ChannelSplitterNode:W.k,AudioChannelSplitter:W.k,ConstantSourceNode:W.k,ConvolverNode:W.k,DelayNode:W.k,DynamicsCompressorNode:W.k,GainNode:W.k,AudioGainNode:W.k,IIRFilterNode:W.k,MediaElementAudioSourceNode:W.k,MediaStreamAudioDestinationNode:W.k,MediaStreamAudioSourceNode:W.k,OscillatorNode:W.k,Oscillator:W.k,PannerNode:W.k,AudioPannerNode:W.k,webkitAudioPannerNode:W.k,ScriptProcessorNode:W.k,JavaScriptAudioNode:W.k,StereoPannerNode:W.k,WaveShaperNode:W.k,EventTarget:W.k,File:W.aA,FileList:W.cl,FileWriter:W.fL,HTMLFormElement:W.fP,Gamepad:W.aI,History:W.fS,HTMLCollection:W.bX,HTMLFormControlsCollection:W.bX,HTMLOptionsCollection:W.bX,ImageData:W.co,HTMLInputElement:W.cp,KeyboardEvent:W.b3,Location:W.h5,MediaList:W.hi,MessagePort:W.cr,MIDIInputMap:W.hj,MIDIOutputMap:W.hl,MimeType:W.aM,MimeTypeArray:W.hn,PointerEvent:W.ae,MouseEvent:W.ae,DragEvent:W.ae,Document:W.G,DocumentFragment:W.G,HTMLDocument:W.G,ShadowRoot:W.G,XMLDocument:W.G,Attr:W.G,DocumentType:W.G,Node:W.G,NodeList:W.cw,RadioNodeList:W.cw,Plugin:W.aN,PluginArray:W.hA,RTCStatsReport:W.hJ,HTMLSelectElement:W.hM,SourceBuffer:W.aO,SourceBufferList:W.hV,SpeechGrammar:W.aP,SpeechGrammarList:W.hW,SpeechRecognitionResult:W.aQ,Storage:W.hZ,CSSStyleSheet:W.aB,StyleSheet:W.aB,HTMLTableCellElement:W.bn,HTMLTableDataCellElement:W.bn,HTMLTableHeaderCellElement:W.bn,TextTrack:W.aR,TextTrackCue:W.aC,VTTCue:W.aC,TextTrackCueList:W.i6,TextTrackList:W.i7,TimeRanges:W.ia,Touch:W.aT,TouchEvent:W.aU,TouchList:W.id,TrackDefaultList:W.ie,CompositionEvent:W.bH,FocusEvent:W.bH,TextEvent:W.bH,UIEvent:W.bH,URL:W.iB,VideoTrackList:W.iS,WheelEvent:W.bd,Window:W.cQ,DOMWindow:W.cQ,CSSRuleList:W.j1,ClientRect:W.ef,DOMRect:W.ef,GamepadList:W.jf,NamedNodeMap:W.ew,MozNamedAttrMap:W.ew,SpeechRecognitionResultList:W.jr,StyleSheetList:W.jv,SVGLength:P.b4,SVGLengthList:P.fZ,SVGNumber:P.b7,SVGNumberList:P.hw,SVGPointList:P.hC,SVGStringList:P.i4,SVGAElement:P.q,SVGAnimateElement:P.q,SVGAnimateMotionElement:P.q,SVGAnimateTransformElement:P.q,SVGAnimationElement:P.q,SVGCircleElement:P.q,SVGClipPathElement:P.q,SVGDefsElement:P.q,SVGDescElement:P.q,SVGDiscardElement:P.q,SVGEllipseElement:P.q,SVGFEBlendElement:P.q,SVGFEColorMatrixElement:P.q,SVGFEComponentTransferElement:P.q,SVGFECompositeElement:P.q,SVGFEConvolveMatrixElement:P.q,SVGFEDiffuseLightingElement:P.q,SVGFEDisplacementMapElement:P.q,SVGFEDistantLightElement:P.q,SVGFEFloodElement:P.q,SVGFEFuncAElement:P.q,SVGFEFuncBElement:P.q,SVGFEFuncGElement:P.q,SVGFEFuncRElement:P.q,SVGFEGaussianBlurElement:P.q,SVGFEImageElement:P.q,SVGFEMergeElement:P.q,SVGFEMergeNodeElement:P.q,SVGFEMorphologyElement:P.q,SVGFEOffsetElement:P.q,SVGFEPointLightElement:P.q,SVGFESpecularLightingElement:P.q,SVGFESpotLightElement:P.q,SVGFETileElement:P.q,SVGFETurbulenceElement:P.q,SVGFilterElement:P.q,SVGForeignObjectElement:P.q,SVGGElement:P.q,SVGGeometryElement:P.q,SVGGraphicsElement:P.q,SVGImageElement:P.q,SVGLineElement:P.q,SVGLinearGradientElement:P.q,SVGMarkerElement:P.q,SVGMaskElement:P.q,SVGMetadataElement:P.q,SVGPathElement:P.q,SVGPatternElement:P.q,SVGPolygonElement:P.q,SVGPolylineElement:P.q,SVGRadialGradientElement:P.q,SVGRectElement:P.q,SVGScriptElement:P.q,SVGSetElement:P.q,SVGStopElement:P.q,SVGStyleElement:P.q,SVGElement:P.q,SVGSVGElement:P.q,SVGSwitchElement:P.q,SVGSymbolElement:P.q,SVGTSpanElement:P.q,SVGTextContentElement:P.q,SVGTextElement:P.q,SVGTextPathElement:P.q,SVGTextPositioningElement:P.q,SVGTitleElement:P.q,SVGUseElement:P.q,SVGViewElement:P.q,SVGGradientElement:P.q,SVGComponentTransferFunctionElement:P.q,SVGFEDropShadowElement:P.q,SVGMPathElement:P.q,SVGTransform:P.ba,SVGTransformList:P.ig,AudioBuffer:P.fe,AudioParamMap:P.ff,AudioTrackList:P.fh,AudioContext:P.bO,webkitAudioContext:P.bO,BaseAudioContext:P.bO,OfflineAudioContext:P.hx,WebGLBuffer:P.d8,WebGLFramebuffer:P.dm,WebGLProgram:P.dI,WebGLRenderbuffer:P.dM,WebGL2RenderingContext:P.c2,WebGLShader:P.dN,WebGLTexture:P.dS,WebGLUniformLocation:P.e3,SQLResultSetRowList:P.hX})
hunkHelpers.setOrUpdateLeafTags({AnimationEffectReadOnly:true,AnimationEffectTiming:true,AnimationEffectTimingReadOnly:true,AnimationTimeline:true,AnimationWorkletGlobalScope:true,AuthenticatorAssertionResponse:true,AuthenticatorAttestationResponse:true,AuthenticatorResponse:true,BackgroundFetchFetch:true,BackgroundFetchManager:true,BackgroundFetchSettledFetch:true,BarProp:true,BarcodeDetector:true,BluetoothRemoteGATTDescriptor:true,Body:true,BudgetState:true,CacheStorage:true,CanvasGradient:true,CanvasPattern:true,CanvasRenderingContext2D:true,Client:true,Clients:true,CookieStore:true,Coordinates:true,Credential:true,CredentialUserData:true,CredentialsContainer:true,Crypto:true,CryptoKey:true,CSS:true,CSSVariableReferenceValue:true,CustomElementRegistry:true,DataTransfer:true,DataTransferItem:true,DeprecatedStorageInfo:true,DeprecatedStorageQuota:true,DeprecationReport:true,DetectedBarcode:true,DetectedFace:true,DetectedText:true,DeviceAcceleration:true,DeviceRotationRate:true,DirectoryEntry:true,DirectoryReader:true,DocumentOrShadowRoot:true,DocumentTimeline:true,DOMError:true,DOMImplementation:true,Iterator:true,DOMMatrix:true,DOMMatrixReadOnly:true,DOMParser:true,DOMPoint:true,DOMPointReadOnly:true,DOMQuad:true,DOMStringMap:true,Entry:true,External:true,FaceDetector:true,FederatedCredential:true,FileEntry:true,DOMFileSystem:true,FontFace:true,FontFaceSource:true,FormData:true,GamepadButton:true,GamepadPose:true,Geolocation:true,Position:true,Headers:true,HTMLHyperlinkElementUtils:true,IdleDeadline:true,ImageBitmap:true,ImageBitmapRenderingContext:true,ImageCapture:true,InputDeviceCapabilities:true,IntersectionObserver:true,IntersectionObserverEntry:true,InterventionReport:true,KeyframeEffect:true,KeyframeEffectReadOnly:true,MediaCapabilities:true,MediaCapabilitiesInfo:true,MediaDeviceInfo:true,MediaError:true,MediaKeyStatusMap:true,MediaKeySystemAccess:true,MediaKeys:true,MediaKeysPolicy:true,MediaMetadata:true,MediaSession:true,MediaSettingsRange:true,MemoryInfo:true,MessageChannel:true,Metadata:true,MutationObserver:true,WebKitMutationObserver:true,MutationRecord:true,NavigationPreloadManager:true,Navigator:true,NavigatorAutomationInformation:true,NavigatorConcurrentHardware:true,NavigatorCookies:true,NavigatorUserMediaError:true,NodeFilter:true,NodeIterator:true,NonDocumentTypeChildNode:true,NonElementParentNode:true,NoncedElement:true,OffscreenCanvasRenderingContext2D:true,OverconstrainedError:true,PaintRenderingContext2D:true,PaintSize:true,PaintWorkletGlobalScope:true,PasswordCredential:true,Path2D:true,PaymentAddress:true,PaymentInstruments:true,PaymentManager:true,PaymentResponse:true,PerformanceEntry:true,PerformanceLongTaskTiming:true,PerformanceMark:true,PerformanceMeasure:true,PerformanceNavigation:true,PerformanceNavigationTiming:true,PerformanceObserver:true,PerformanceObserverEntryList:true,PerformancePaintTiming:true,PerformanceResourceTiming:true,PerformanceServerTiming:true,PerformanceTiming:true,Permissions:true,PhotoCapabilities:true,PositionError:true,Presentation:true,PresentationReceiver:true,PublicKeyCredential:true,PushManager:true,PushMessageData:true,PushSubscription:true,PushSubscriptionOptions:true,Range:true,RelatedApplication:true,ReportBody:true,ReportingObserver:true,ResizeObserver:true,ResizeObserverEntry:true,RTCCertificate:true,RTCIceCandidate:true,mozRTCIceCandidate:true,RTCLegacyStatsReport:true,RTCRtpContributingSource:true,RTCRtpReceiver:true,RTCRtpSender:true,RTCSessionDescription:true,mozRTCSessionDescription:true,RTCStatsResponse:true,Screen:true,ScrollState:true,ScrollTimeline:true,Selection:true,SharedArrayBuffer:true,SpeechRecognitionAlternative:true,SpeechSynthesisVoice:true,StaticRange:true,StorageManager:true,StyleMedia:true,StylePropertyMap:true,StylePropertyMapReadonly:true,SyncManager:true,TaskAttributionTiming:true,TextDetector:true,TextMetrics:true,TrackDefault:true,TreeWalker:true,TrustedHTML:true,TrustedScriptURL:true,TrustedURL:true,UnderlyingSourceBase:true,URLSearchParams:true,VRCoordinateSystem:true,VRDisplayCapabilities:true,VREyeParameters:true,VRFrameData:true,VRFrameOfReference:true,VRPose:true,VRStageBounds:true,VRStageBoundsPoint:true,VRStageParameters:true,ValidityState:true,VideoPlaybackQuality:true,VideoTrack:true,VTTRegion:true,WindowClient:true,WorkletAnimation:true,WorkletGlobalScope:true,XPathEvaluator:true,XPathExpression:true,XPathNSResolver:true,XPathResult:true,XMLSerializer:true,XSLTProcessor:true,Bluetooth:true,BluetoothCharacteristicProperties:true,BluetoothRemoteGATTServer:true,BluetoothRemoteGATTService:true,BluetoothUUID:true,BudgetService:true,Cache:true,DOMFileSystemSync:true,DirectoryEntrySync:true,DirectoryReaderSync:true,EntrySync:true,FileEntrySync:true,FileReaderSync:true,FileWriterSync:true,HTMLAllCollection:true,Mojo:true,MojoHandle:true,MojoWatcher:true,NFC:true,PagePopupController:true,Report:true,Request:true,Response:true,SubtleCrypto:true,USBAlternateInterface:true,USBConfiguration:true,USBDevice:true,USBEndpoint:true,USBInTransferResult:true,USBInterface:true,USBIsochronousInTransferPacket:true,USBIsochronousInTransferResult:true,USBIsochronousOutTransferPacket:true,USBIsochronousOutTransferResult:true,USBOutTransferResult:true,WorkerLocation:true,WorkerNavigator:true,Worklet:true,IDBCursor:true,IDBCursorWithValue:true,IDBFactory:true,IDBIndex:true,IDBKeyRange:true,IDBObjectStore:true,IDBObservation:true,IDBObserver:true,IDBObserverChanges:true,SVGAngle:true,SVGAnimatedAngle:true,SVGAnimatedBoolean:true,SVGAnimatedEnumeration:true,SVGAnimatedInteger:true,SVGAnimatedLength:true,SVGAnimatedLengthList:true,SVGAnimatedNumber:true,SVGAnimatedNumberList:true,SVGAnimatedPreserveAspectRatio:true,SVGAnimatedRect:true,SVGAnimatedString:true,SVGAnimatedTransformList:true,SVGMatrix:true,SVGPoint:true,SVGPreserveAspectRatio:true,SVGRect:true,SVGUnitTypes:true,AudioListener:true,AudioParam:true,AudioTrack:true,AudioWorkletGlobalScope:true,AudioWorkletProcessor:true,PeriodicWave:true,WebGLActiveInfo:true,ANGLEInstancedArrays:true,ANGLE_instanced_arrays:true,WebGLCanvas:true,WebGLColorBufferFloat:true,WebGLCompressedTextureASTC:true,WebGLCompressedTextureATC:true,WEBGL_compressed_texture_atc:true,WebGLCompressedTextureETC1:true,WEBGL_compressed_texture_etc1:true,WebGLCompressedTextureETC:true,WebGLCompressedTexturePVRTC:true,WEBGL_compressed_texture_pvrtc:true,WebGLCompressedTextureS3TC:true,WEBGL_compressed_texture_s3tc:true,WebGLCompressedTextureS3TCsRGB:true,WebGLDebugRendererInfo:true,WEBGL_debug_renderer_info:true,WebGLDebugShaders:true,WEBGL_debug_shaders:true,WebGLDepthTexture:true,WEBGL_depth_texture:true,WebGLDrawBuffers:true,WEBGL_draw_buffers:true,EXTsRGB:true,EXT_sRGB:true,EXTBlendMinMax:true,EXT_blend_minmax:true,EXTColorBufferFloat:true,EXTColorBufferHalfFloat:true,EXTDisjointTimerQuery:true,EXTDisjointTimerQueryWebGL2:true,EXTFragDepth:true,EXT_frag_depth:true,EXTShaderTextureLOD:true,EXT_shader_texture_lod:true,EXTTextureFilterAnisotropic:true,EXT_texture_filter_anisotropic:true,WebGLGetBufferSubDataAsync:true,WebGLLoseContext:true,WebGLExtensionLoseContext:true,WEBGL_lose_context:true,OESElementIndexUint:true,OES_element_index_uint:true,OESStandardDerivatives:true,OES_standard_derivatives:true,OESTextureFloat:true,OES_texture_float:true,OESTextureFloatLinear:true,OES_texture_float_linear:true,OESTextureHalfFloat:true,OES_texture_half_float:true,OESTextureHalfFloatLinear:true,OES_texture_half_float_linear:true,OESVertexArrayObject:true,OES_vertex_array_object:true,WebGLQuery:true,WebGLRenderingContext:true,WebGLSampler:true,WebGLShaderPrecisionFormat:true,WebGLSync:true,WebGLTimerQueryEXT:true,WebGLTransformFeedback:true,WebGLVertexArrayObject:true,WebGLVertexArrayObjectOES:true,WebGL:true,WebGL2RenderingContextBase:true,Database:true,SQLError:true,SQLResultSet:true,SQLTransaction:true,ArrayBuffer:true,DataView:true,ArrayBufferView:false,Float32Array:true,Float64Array:true,Int16Array:true,Int32Array:true,Int8Array:true,Uint16Array:true,Uint32Array:true,Uint8ClampedArray:true,CanvasPixelArray:true,Uint8Array:false,HTMLAudioElement:true,HTMLBRElement:true,HTMLBaseElement:true,HTMLBodyElement:true,HTMLButtonElement:true,HTMLContentElement:true,HTMLDListElement:true,HTMLDataElement:true,HTMLDataListElement:true,HTMLDetailsElement:true,HTMLDialogElement:true,HTMLEmbedElement:true,HTMLFieldSetElement:true,HTMLHRElement:true,HTMLHeadElement:true,HTMLHeadingElement:true,HTMLHtmlElement:true,HTMLIFrameElement:true,HTMLImageElement:true,HTMLLIElement:true,HTMLLabelElement:true,HTMLLegendElement:true,HTMLLinkElement:true,HTMLMapElement:true,HTMLMediaElement:true,HTMLMenuElement:true,HTMLMetaElement:true,HTMLMeterElement:true,HTMLModElement:true,HTMLOListElement:true,HTMLObjectElement:true,HTMLOptGroupElement:true,HTMLOptionElement:true,HTMLOutputElement:true,HTMLParagraphElement:true,HTMLParamElement:true,HTMLPictureElement:true,HTMLPreElement:true,HTMLProgressElement:true,HTMLQuoteElement:true,HTMLScriptElement:true,HTMLShadowElement:true,HTMLSlotElement:true,HTMLSourceElement:true,HTMLSpanElement:true,HTMLStyleElement:true,HTMLTableCaptionElement:true,HTMLTableColElement:true,HTMLTableElement:true,HTMLTableRowElement:true,HTMLTableSectionElement:true,HTMLTemplateElement:true,HTMLTextAreaElement:true,HTMLTimeElement:true,HTMLTitleElement:true,HTMLTrackElement:true,HTMLUListElement:true,HTMLUnknownElement:true,HTMLVideoElement:true,HTMLDirectoryElement:true,HTMLFontElement:true,HTMLFrameElement:true,HTMLFrameSetElement:true,HTMLMarqueeElement:true,HTMLElement:false,AccessibleNodeList:true,HTMLAnchorElement:true,HTMLAreaElement:true,Blob:false,HTMLCanvasElement:true,CDATASection:true,CharacterData:true,Comment:true,ProcessingInstruction:true,Text:true,CSSNumericValue:true,CSSUnitValue:true,CSSPerspective:true,CSSCharsetRule:true,CSSConditionRule:true,CSSFontFaceRule:true,CSSGroupingRule:true,CSSImportRule:true,CSSKeyframeRule:true,MozCSSKeyframeRule:true,WebKitCSSKeyframeRule:true,CSSKeyframesRule:true,MozCSSKeyframesRule:true,WebKitCSSKeyframesRule:true,CSSMediaRule:true,CSSNamespaceRule:true,CSSPageRule:true,CSSRule:true,CSSStyleRule:true,CSSSupportsRule:true,CSSViewportRule:true,CSSStyleDeclaration:true,MSStyleCSSProperties:true,CSS2Properties:true,CSSImageValue:true,CSSKeywordValue:true,CSSPositionValue:true,CSSResourceValue:true,CSSURLImageValue:true,CSSStyleValue:false,CSSMatrixComponent:true,CSSRotation:true,CSSScale:true,CSSSkew:true,CSSTranslation:true,CSSTransformComponent:false,CSSTransformValue:true,CSSUnparsedValue:true,DataTransferItemList:true,HTMLDivElement:true,DOMException:true,ClientRectList:true,DOMRectList:true,DOMRectReadOnly:false,DOMStringList:true,DOMTokenList:true,Element:false,AbortPaymentEvent:true,AnimationEvent:true,AnimationPlaybackEvent:true,ApplicationCacheErrorEvent:true,BackgroundFetchClickEvent:true,BackgroundFetchEvent:true,BackgroundFetchFailEvent:true,BackgroundFetchedEvent:true,BeforeInstallPromptEvent:true,BeforeUnloadEvent:true,BlobEvent:true,CanMakePaymentEvent:true,ClipboardEvent:true,CloseEvent:true,CustomEvent:true,DeviceMotionEvent:true,DeviceOrientationEvent:true,ErrorEvent:true,ExtendableEvent:true,ExtendableMessageEvent:true,FetchEvent:true,FontFaceSetLoadEvent:true,ForeignFetchEvent:true,GamepadEvent:true,HashChangeEvent:true,InstallEvent:true,MediaEncryptedEvent:true,MediaKeyMessageEvent:true,MediaQueryListEvent:true,MediaStreamEvent:true,MediaStreamTrackEvent:true,MessageEvent:true,MIDIConnectionEvent:true,MIDIMessageEvent:true,MutationEvent:true,NotificationEvent:true,PageTransitionEvent:true,PaymentRequestEvent:true,PaymentRequestUpdateEvent:true,PopStateEvent:true,PresentationConnectionAvailableEvent:true,PresentationConnectionCloseEvent:true,ProgressEvent:true,PromiseRejectionEvent:true,PushEvent:true,RTCDataChannelEvent:true,RTCDTMFToneChangeEvent:true,RTCPeerConnectionIceEvent:true,RTCTrackEvent:true,SecurityPolicyViolationEvent:true,SensorErrorEvent:true,SpeechRecognitionError:true,SpeechRecognitionEvent:true,SpeechSynthesisEvent:true,StorageEvent:true,SyncEvent:true,TrackEvent:true,TransitionEvent:true,WebKitTransitionEvent:true,VRDeviceEvent:true,VRDisplayEvent:true,VRSessionEvent:true,MojoInterfaceRequestEvent:true,ResourceProgressEvent:true,USBConnectionEvent:true,IDBVersionChangeEvent:true,AudioProcessingEvent:true,OfflineAudioCompletionEvent:true,WebGLContextEvent:true,Event:false,InputEvent:false,AbsoluteOrientationSensor:true,Accelerometer:true,AccessibleNode:true,AmbientLightSensor:true,Animation:true,ApplicationCache:true,DOMApplicationCache:true,OfflineResourceList:true,BackgroundFetchRegistration:true,BatteryManager:true,BroadcastChannel:true,CanvasCaptureMediaStreamTrack:true,DedicatedWorkerGlobalScope:true,EventSource:true,FileReader:true,FontFaceSet:true,Gyroscope:true,XMLHttpRequest:true,XMLHttpRequestEventTarget:true,XMLHttpRequestUpload:true,LinearAccelerationSensor:true,Magnetometer:true,MediaDevices:true,MediaKeySession:true,MediaQueryList:true,MediaRecorder:true,MediaSource:true,MediaStream:true,MediaStreamTrack:true,MIDIAccess:true,MIDIInput:true,MIDIOutput:true,MIDIPort:true,NetworkInformation:true,Notification:true,OffscreenCanvas:true,OrientationSensor:true,PaymentRequest:true,Performance:true,PermissionStatus:true,PresentationAvailability:true,PresentationConnection:true,PresentationConnectionList:true,PresentationRequest:true,RelativeOrientationSensor:true,RemotePlayback:true,RTCDataChannel:true,DataChannel:true,RTCDTMFSender:true,RTCPeerConnection:true,webkitRTCPeerConnection:true,mozRTCPeerConnection:true,ScreenOrientation:true,Sensor:true,ServiceWorker:true,ServiceWorkerContainer:true,ServiceWorkerGlobalScope:true,ServiceWorkerRegistration:true,SharedWorker:true,SharedWorkerGlobalScope:true,SpeechRecognition:true,SpeechSynthesis:true,SpeechSynthesisUtterance:true,VR:true,VRDevice:true,VRDisplay:true,VRSession:true,VisualViewport:true,WebSocket:true,Worker:true,WorkerGlobalScope:true,WorkerPerformance:true,BluetoothDevice:true,BluetoothRemoteGATTCharacteristic:true,Clipboard:true,MojoInterfaceInterceptor:true,USB:true,IDBDatabase:true,IDBOpenDBRequest:true,IDBVersionChangeRequest:true,IDBRequest:true,IDBTransaction:true,AnalyserNode:true,RealtimeAnalyserNode:true,AudioBufferSourceNode:true,AudioDestinationNode:true,AudioNode:true,AudioScheduledSourceNode:true,AudioWorkletNode:true,BiquadFilterNode:true,ChannelMergerNode:true,AudioChannelMerger:true,ChannelSplitterNode:true,AudioChannelSplitter:true,ConstantSourceNode:true,ConvolverNode:true,DelayNode:true,DynamicsCompressorNode:true,GainNode:true,AudioGainNode:true,IIRFilterNode:true,MediaElementAudioSourceNode:true,MediaStreamAudioDestinationNode:true,MediaStreamAudioSourceNode:true,OscillatorNode:true,Oscillator:true,PannerNode:true,AudioPannerNode:true,webkitAudioPannerNode:true,ScriptProcessorNode:true,JavaScriptAudioNode:true,StereoPannerNode:true,WaveShaperNode:true,EventTarget:false,File:true,FileList:true,FileWriter:true,HTMLFormElement:true,Gamepad:true,History:true,HTMLCollection:true,HTMLFormControlsCollection:true,HTMLOptionsCollection:true,ImageData:true,HTMLInputElement:true,KeyboardEvent:true,Location:true,MediaList:true,MessagePort:true,MIDIInputMap:true,MIDIOutputMap:true,MimeType:true,MimeTypeArray:true,PointerEvent:true,MouseEvent:false,DragEvent:false,Document:true,DocumentFragment:true,HTMLDocument:true,ShadowRoot:true,XMLDocument:true,Attr:true,DocumentType:true,Node:false,NodeList:true,RadioNodeList:true,Plugin:true,PluginArray:true,RTCStatsReport:true,HTMLSelectElement:true,SourceBuffer:true,SourceBufferList:true,SpeechGrammar:true,SpeechGrammarList:true,SpeechRecognitionResult:true,Storage:true,CSSStyleSheet:true,StyleSheet:true,HTMLTableCellElement:true,HTMLTableDataCellElement:true,HTMLTableHeaderCellElement:true,TextTrack:true,TextTrackCue:true,VTTCue:true,TextTrackCueList:true,TextTrackList:true,TimeRanges:true,Touch:true,TouchEvent:true,TouchList:true,TrackDefaultList:true,CompositionEvent:true,FocusEvent:true,TextEvent:true,UIEvent:false,URL:true,VideoTrackList:true,WheelEvent:true,Window:true,DOMWindow:true,CSSRuleList:true,ClientRect:true,DOMRect:true,GamepadList:true,NamedNodeMap:true,MozNamedAttrMap:true,SpeechRecognitionResultList:true,StyleSheetList:true,SVGLength:true,SVGLengthList:true,SVGNumber:true,SVGNumberList:true,SVGPointList:true,SVGStringList:true,SVGAElement:true,SVGAnimateElement:true,SVGAnimateMotionElement:true,SVGAnimateTransformElement:true,SVGAnimationElement:true,SVGCircleElement:true,SVGClipPathElement:true,SVGDefsElement:true,SVGDescElement:true,SVGDiscardElement:true,SVGEllipseElement:true,SVGFEBlendElement:true,SVGFEColorMatrixElement:true,SVGFEComponentTransferElement:true,SVGFECompositeElement:true,SVGFEConvolveMatrixElement:true,SVGFEDiffuseLightingElement:true,SVGFEDisplacementMapElement:true,SVGFEDistantLightElement:true,SVGFEFloodElement:true,SVGFEFuncAElement:true,SVGFEFuncBElement:true,SVGFEFuncGElement:true,SVGFEFuncRElement:true,SVGFEGaussianBlurElement:true,SVGFEImageElement:true,SVGFEMergeElement:true,SVGFEMergeNodeElement:true,SVGFEMorphologyElement:true,SVGFEOffsetElement:true,SVGFEPointLightElement:true,SVGFESpecularLightingElement:true,SVGFESpotLightElement:true,SVGFETileElement:true,SVGFETurbulenceElement:true,SVGFilterElement:true,SVGForeignObjectElement:true,SVGGElement:true,SVGGeometryElement:true,SVGGraphicsElement:true,SVGImageElement:true,SVGLineElement:true,SVGLinearGradientElement:true,SVGMarkerElement:true,SVGMaskElement:true,SVGMetadataElement:true,SVGPathElement:true,SVGPatternElement:true,SVGPolygonElement:true,SVGPolylineElement:true,SVGRadialGradientElement:true,SVGRectElement:true,SVGScriptElement:true,SVGSetElement:true,SVGStopElement:true,SVGStyleElement:true,SVGElement:true,SVGSVGElement:true,SVGSwitchElement:true,SVGSymbolElement:true,SVGTSpanElement:true,SVGTextContentElement:true,SVGTextElement:true,SVGTextPathElement:true,SVGTextPositioningElement:true,SVGTitleElement:true,SVGUseElement:true,SVGViewElement:true,SVGGradientElement:true,SVGComponentTransferFunctionElement:true,SVGFEDropShadowElement:true,SVGMPathElement:true,SVGTransform:true,SVGTransformList:true,AudioBuffer:true,AudioParamMap:true,AudioTrackList:true,AudioContext:true,webkitAudioContext:true,BaseAudioContext:false,OfflineAudioContext:true,WebGLBuffer:true,WebGLFramebuffer:true,WebGLProgram:true,WebGLRenderbuffer:true,WebGL2RenderingContext:true,WebGLShader:true,WebGLTexture:true,WebGLUniformLocation:true,SQLResultSetRowList:true})
H.dB.$nativeSuperclassTag="ArrayBufferView"
H.cT.$nativeSuperclassTag="ArrayBufferView"
H.cU.$nativeSuperclassTag="ArrayBufferView"
H.cu.$nativeSuperclassTag="ArrayBufferView"
H.cV.$nativeSuperclassTag="ArrayBufferView"
H.cW.$nativeSuperclassTag="ArrayBufferView"
H.dC.$nativeSuperclassTag="ArrayBufferView"
W.cX.$nativeSuperclassTag="EventTarget"
W.cY.$nativeSuperclassTag="EventTarget"
W.cZ.$nativeSuperclassTag="EventTarget"
W.d_.$nativeSuperclassTag="EventTarget"})()
convertAllToFastObject(w)
convertToFastObject($);(function(a){if(typeof document==="undefined"){a(null)
return}if(typeof document.currentScript!='undefined'){a(document.currentScript)
return}var u=document.scripts
function onLoad(b){for(var s=0;s<u.length;++s)u[s].removeEventListener("load",onLoad,false)
a(b.target)}for(var t=0;t<u.length;++t)u[t].addEventListener("load",onLoad,false)})(function(a){v.currentScript=a
if(typeof dartMainRunner==="function")dartMainRunner(S.lR,[])
else S.lR([])})})()
//# sourceMappingURL=test.dart.js.map
