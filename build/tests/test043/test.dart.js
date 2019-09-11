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
a[c]=function(){a[c]=function(){H.om(b)}
var t
var s=d
try{if(a[b]===u){t=a[b]=s
t=a[b]=d()}else t=a[b]}finally{if(t===s)a[b]=null
a[c]=function(){return this[b]}}return t}}function makeConstList(a){a.immutable$list=Array
a.fixed$length=Array
return a}function convertToFastObject(a){function t(){}t.prototype=a
new t()
return a}function convertAllToFastObject(a){for(var u=0;u<a.length;++u)convertToFastObject(a[u])}var y=0
function tearOffGetter(a,b,c,d,e){return e?new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+d+y+++"(receiver) {"+"if (c === null) c = "+"H.kO"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, true, name);"+"return new c(this, funcs[0], receiver, name);"+"}")(a,b,c,d,H,null):new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+d+y+++"() {"+"if (c === null) c = "+"H.kO"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, false, name);"+"return new c(this, funcs[0], null, name);"+"}")(a,b,c,d,H,null)}function tearOff(a,b,c,d,e,f){var u=null
return d?function(){if(u===null)u=H.kO(this,a,b,c,true,false,e).prototype
return u}:tearOffGetter(a,b,c,e,f)}var x=0
function installTearOff(a,b,c,d,e,f,g,h,i,j){var u=[]
for(var t=0;t<h.length;t++){var s=h[t]
if(typeof s=='string')s=a[s]
s.$callName=g[t]
u.push(s)}var s=u[0]
s.$R=e
s.$D=f
var r=i
if(typeof r=="number")r+=x
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
if(w[u][a])return w[u][a]}}var C={},H={ku:function ku(){},
n4:function(a,b,c,d){P.i0(b,"start")
return new H.iv(a,b,c,[d])},
l8:function(){return new P.c9("No element")},
mE:function(){return new P.c9("Too many elements")},
mD:function(){return new P.c9("Too few elements")},
eb:function(a,b,c,d,e){if(c-b<=32)H.n2(a,b,c,d,e)
else H.n1(a,b,c,d,e)},
n2:function(a,b,c,d,e){var u,t,s,r,q
for(u=b+1;u<=c;++u){if(u<0||u>=a.length)return H.h(a,u)
t=a[u]
s=u
while(!0){if(s>b){r=s-1
if(r<0||r>=a.length)return H.h(a,r)
r=d.$2(a[r],t)
if(typeof r!=="number")return r.a6()
r=r>0}else r=!1
if(!r)break
q=s-1
if(q<0||q>=a.length)return H.h(a,q)
C.a.l(a,s,a[q])
s=q}C.a.l(a,s,t)}},
n1:function(a2,a3,a4,a5,a6){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=C.d.a1(a4-a3+1,6),d=a3+e,c=a4-e,b=C.d.a1(a3+a4,2),a=b-e,a0=b+e,a1=a2.length
if(d<0||d>=a1)return H.h(a2,d)
u=a2[d]
if(a<0||a>=a1)return H.h(a2,a)
t=a2[a]
if(b<0||b>=a1)return H.h(a2,b)
s=a2[b]
if(a0<0||a0>=a1)return H.h(a2,a0)
r=a2[a0]
if(c<0||c>=a1)return H.h(a2,c)
q=a2[c]
a1=a5.$2(u,t)
if(typeof a1!=="number")return a1.a6()
if(a1>0){p=t
t=u
u=p}a1=a5.$2(r,q)
if(typeof a1!=="number")return a1.a6()
if(a1>0){p=q
q=r
r=p}a1=a5.$2(u,s)
if(typeof a1!=="number")return a1.a6()
if(a1>0){p=s
s=u
u=p}a1=a5.$2(t,s)
if(typeof a1!=="number")return a1.a6()
if(a1>0){p=s
s=t
t=p}a1=a5.$2(u,r)
if(typeof a1!=="number")return a1.a6()
if(a1>0){p=r
r=u
u=p}a1=a5.$2(s,r)
if(typeof a1!=="number")return a1.a6()
if(a1>0){p=r
r=s
s=p}a1=a5.$2(t,q)
if(typeof a1!=="number")return a1.a6()
if(a1>0){p=q
q=t
t=p}a1=a5.$2(t,s)
if(typeof a1!=="number")return a1.a6()
if(a1>0){p=s
s=t
t=p}a1=a5.$2(r,q)
if(typeof a1!=="number")return a1.a6()
if(a1>0){p=q
q=r
r=p}C.a.l(a2,d,u)
C.a.l(a2,b,s)
C.a.l(a2,c,q)
if(a3<0||a3>=a2.length)return H.h(a2,a3)
C.a.l(a2,a,a2[a3])
if(a4<0||a4>=a2.length)return H.h(a2,a4)
C.a.l(a2,a0,a2[a4])
o=a3+1
n=a4-1
if(J.V(a5.$2(t,r),0)){for(m=o;m<=n;++m){if(m>=a2.length)return H.h(a2,m)
l=a2[m]
k=a5.$2(l,t)
if(k===0)continue
if(typeof k!=="number")return k.ag()
if(k<0){if(m!==o){if(o>=a2.length)return H.h(a2,o)
C.a.l(a2,m,a2[o])
C.a.l(a2,o,l)}++o}else for(;!0;){if(n<0||n>=a2.length)return H.h(a2,n)
k=a5.$2(a2[n],t)
if(typeof k!=="number")return k.a6()
if(k>0){--n
continue}else{j=n-1
a1=a2.length
if(k<0){if(o>=a1)return H.h(a2,o)
C.a.l(a2,m,a2[o])
i=o+1
if(n>=a2.length)return H.h(a2,n)
C.a.l(a2,o,a2[n])
C.a.l(a2,n,l)
n=j
o=i
break}else{if(n>=a1)return H.h(a2,n)
C.a.l(a2,m,a2[n])
C.a.l(a2,n,l)
n=j
break}}}}h=!0}else{for(m=o;m<=n;++m){if(m>=a2.length)return H.h(a2,m)
l=a2[m]
g=a5.$2(l,t)
if(typeof g!=="number")return g.ag()
if(g<0){if(m!==o){if(o>=a2.length)return H.h(a2,o)
C.a.l(a2,m,a2[o])
C.a.l(a2,o,l)}++o}else{f=a5.$2(l,r)
if(typeof f!=="number")return f.a6()
if(f>0)for(;!0;){if(n<0||n>=a2.length)return H.h(a2,n)
k=a5.$2(a2[n],r)
if(typeof k!=="number")return k.a6()
if(k>0){--n
if(n<m)break
continue}else{if(n>=a2.length)return H.h(a2,n)
k=a5.$2(a2[n],t)
if(typeof k!=="number")return k.ag()
j=n-1
a1=a2.length
if(k<0){if(o>=a1)return H.h(a2,o)
C.a.l(a2,m,a2[o])
i=o+1
if(n>=a2.length)return H.h(a2,n)
C.a.l(a2,o,a2[n])
C.a.l(a2,n,l)
o=i}else{if(n>=a1)return H.h(a2,n)
C.a.l(a2,m,a2[n])
C.a.l(a2,n,l)}n=j
break}}}}h=!1}a1=o-1
if(a1>=a2.length)return H.h(a2,a1)
C.a.l(a2,a3,a2[a1])
C.a.l(a2,a1,t)
a1=n+1
if(a1<0||a1>=a2.length)return H.h(a2,a1)
C.a.l(a2,a4,a2[a1])
C.a.l(a2,a1,r)
H.eb(a2,a3,o-2,a5,a6)
H.eb(a2,n+2,a4,a5,a6)
if(h)return
if(o<d&&n>c){while(!0){if(o>=a2.length)return H.h(a2,o)
if(!J.V(a5.$2(a2[o],t),0))break;++o}while(!0){if(n<0||n>=a2.length)return H.h(a2,n)
if(!J.V(a5.$2(a2[n],r),0))break;--n}for(m=o;m<=n;++m){if(m>=a2.length)return H.h(a2,m)
l=a2[m]
if(a5.$2(l,t)===0){if(m!==o){if(o>=a2.length)return H.h(a2,o)
C.a.l(a2,m,a2[o])
C.a.l(a2,o,l)}++o}else if(a5.$2(l,r)===0)for(;!0;){if(n<0||n>=a2.length)return H.h(a2,n)
if(a5.$2(a2[n],r)===0){--n
if(n<m)break
continue}else{if(n>=a2.length)return H.h(a2,n)
k=a5.$2(a2[n],t)
if(typeof k!=="number")return k.ag()
j=n-1
a1=a2.length
if(k<0){if(o>=a1)return H.h(a2,o)
C.a.l(a2,m,a2[o])
i=o+1
if(n>=a2.length)return H.h(a2,n)
C.a.l(a2,o,a2[n])
C.a.l(a2,n,l)
o=i}else{if(n>=a1)return H.h(a2,n)
C.a.l(a2,m,a2[n])
C.a.l(a2,n,l)}n=j
break}}}H.eb(a2,o,n,a5,a6)}else H.eb(a2,o,n,a5,a6)},
a2:function a2(a){this.a=a},
fW:function fW(){},
c3:function c3(){},
iv:function iv(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
cI:function cI(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.d=null
_.$ti=c},
hn:function hn(a,b,c){this.a=a
this.b=b
this.$ti=c},
ho:function ho(a,b,c){var _=this
_.a=null
_.b=a
_.c=b
_.$ti=c},
hp:function hp(a,b,c){this.a=a
this.b=b
this.$ti=c},
d6:function d6(a,b,c){this.a=a
this.b=b
this.$ti=c},
jd:function jd(a,b,c){this.a=a
this.b=b
this.$ti=c},
c1:function c1(){},
cf:function cf(){},
em:function em(){},
cr:function(a){var u,t=H.on(a)
if(typeof t==="string")return t
u="minified:"+a
return u},
o1:function(a){return v.types[H.a9(a)]},
o8:function(a,b){var u
if(b!=null){u=b.x
if(u!=null)return u}return!!J.T(a).$iJ},
j:function(a){var u
if(typeof a==="string")return a
if(typeof a==="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
u=J.av(a)
if(typeof u!=="string")throw H.f(H.bU(a))
return u},
cR:function(a){var u=a.$identityHash
if(u==null){u=Math.random()*0x3fffffff|0
a.$identityHash=u}return u},
cS:function(a){return H.mO(a)+H.kL(H.bV(a),0,null)},
mO:function(a){var u,t,s,r,q,p,o,n=J.T(a),m=n.constructor
if(typeof m=="function"){u=m.name
t=typeof u==="string"?u:null}else t=null
s=t==null
if(s||n===C.M||!!n.$ice){r=C.q(a)
if(s)t=r
if(r==="Object"){q=a.constructor
if(typeof q=="function"){p=String(q).match(/^\s*function\s*([\w$]*)\s*\(/)
o=p==null?null:p[1]
if(typeof o==="string"&&/^\w+$/.test(o))t=o}}return t}t=t
return H.cr(t.length>1&&C.e.bg(t,0)===36?C.e.b_(t,1):t)},
lp:function(a){var u,t,s,r,q=a.length
if(q<=500)return String.fromCharCode.apply(null,a)
for(u="",t=0;t<q;t=s){s=t+500
r=s<q?s:q
u+=String.fromCharCode.apply(null,a.slice(t,r))}return u},
mX:function(a){var u,t,s,r=H.c([],[P.r])
for(u=a.length,t=0;t<a.length;a.length===u||(0,H.v)(a),++t){s=a[t]
if(typeof s!=="number"||Math.floor(s)!==s)throw H.f(H.bU(s))
if(s<=65535)C.a.h(r,s)
else if(s<=1114111){C.a.h(r,55296+(C.d.bk(s-65536,10)&1023))
C.a.h(r,56320+(s&1023))}else throw H.f(H.bU(s))}return H.lp(r)},
lq:function(a){var u,t,s
for(u=a.length,t=0;t<u;++t){s=a[t]
if(typeof s!=="number"||Math.floor(s)!==s)throw H.f(H.bU(s))
if(s<0)throw H.f(H.bU(s))
if(s>65535)return H.mX(a)}return H.lp(a)},
mW:function(a){var u
if(a<=65535)return String.fromCharCode(a)
if(a<=1114111){u=a-65536
return String.fromCharCode((55296|C.d.bk(u,10))>>>0,56320|u&1023)}throw H.f(P.aC(a,0,1114111,null,null))},
c6:function(a){if(a.date===void 0)a.date=new Date(a.a)
return a.date},
mV:function(a){var u=H.c6(a).getFullYear()+0
return u},
mT:function(a){var u=H.c6(a).getMonth()+1
return u},
mP:function(a){var u=H.c6(a).getDate()+0
return u},
mQ:function(a){var u=H.c6(a).getHours()+0
return u},
mS:function(a){var u=H.c6(a).getMinutes()+0
return u},
mU:function(a){var u=H.c6(a).getSeconds()+0
return u},
mR:function(a){var u=H.c6(a).getMilliseconds()+0
return u},
F:function(a){throw H.f(H.bU(a))},
h:function(a,b){if(a==null)J.aY(a)
throw H.f(H.cm(a,b))},
cm:function(a,b){var u,t,s="index"
if(typeof b!=="number"||Math.floor(b)!==b)return new P.aJ(!0,b,s,null)
u=H.a9(J.aY(a))
if(!(b<0)){if(typeof u!=="number")return H.F(u)
t=b>=u}else t=!0
if(t)return P.Y(b,a,s,null,u)
return P.i_(b,s)},
nV:function(a,b,c){var u="Invalid value"
if(a>c)return new P.c7(0,c,!0,a,"start",u)
if(b!=null)if(b<a||b>c)return new P.c7(a,c,!0,b,"end",u)
return new P.aJ(!0,b,"end",null)},
bU:function(a){return new P.aJ(!0,a,null,null)},
nT:function(a){if(typeof a!=="number")throw H.f(H.bU(a))
return a},
f:function(a){var u
if(a==null)a=new P.e_()
u=new Error()
u.dartException=a
if("defineProperty" in Object){Object.defineProperty(u,"message",{get:H.m1})
u.name=""}else u.toString=H.m1
return u},
m1:function(){return J.av(this.dartException)},
z:function(a){throw H.f(a)},
v:function(a){throw H.f(P.bz(a))},
b9:function(a){var u,t,s,r,q,p
a=H.m_(a.replace(String({}),'$receiver$'))
u=a.match(/\\\$[a-zA-Z]+\\\$/g)
if(u==null)u=H.c([],[P.l])
t=u.indexOf("\\$arguments\\$")
s=u.indexOf("\\$argumentsExpr\\$")
r=u.indexOf("\\$expr\\$")
q=u.indexOf("\\$method\\$")
p=u.indexOf("\\$receiver\\$")
return new H.iM(a.replace(new RegExp('\\\\\\$arguments\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$argumentsExpr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$expr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$method\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$receiver\\\\\\$','g'),'((?:x|[^x])*)'),t,s,r,q,p)},
iN:function(a){return function($expr$){var $argumentsExpr$='$arguments$'
try{$expr$.$method$($argumentsExpr$)}catch(u){return u.message}}(a)},
ly:function(a){return function($expr$){try{$expr$.$method$}catch(u){return u.message}}(a)},
lj:function(a,b){return new H.hS(a,b==null?null:b.method)},
kv:function(a,b){var u=b==null,t=u?null:b.method
return new H.he(a,t,u?null:b.receiver)},
au:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=null,f=new H.ki(a)
if(a==null)return
if(typeof a!=="object")return a
if("dartException" in a)return f.$1(a.dartException)
else if(!("message" in a))return a
u=a.message
if("number" in a&&typeof a.number=="number"){t=a.number
s=t&65535
if((C.d.bk(t,16)&8191)===10)switch(s){case 438:return f.$1(H.kv(H.j(u)+" (Error "+s+")",g))
case 445:case 5007:return f.$1(H.lj(H.j(u)+" (Error "+s+")",g))}}if(a instanceof TypeError){r=$.m4()
q=$.m5()
p=$.m6()
o=$.m7()
n=$.ma()
m=$.mb()
l=$.m9()
$.m8()
k=$.md()
j=$.mc()
i=r.am(u)
if(i!=null)return f.$1(H.kv(H.S(u),i))
else{i=q.am(u)
if(i!=null){i.method="call"
return f.$1(H.kv(H.S(u),i))}else{i=p.am(u)
if(i==null){i=o.am(u)
if(i==null){i=n.am(u)
if(i==null){i=m.am(u)
if(i==null){i=l.am(u)
if(i==null){i=o.am(u)
if(i==null){i=k.am(u)
if(i==null){i=j.am(u)
h=i!=null}else h=!0}else h=!0}else h=!0}else h=!0}else h=!0}else h=!0}else h=!0
if(h)return f.$1(H.lj(H.S(u),i))}}return f.$1(new H.iW(typeof u==="string"?u:""))}if(a instanceof RangeError){if(typeof u==="string"&&u.indexOf("call stack")!==-1)return new P.ed()
u=function(b){try{return String(b)}catch(e){}return null}(a)
return f.$1(new P.aJ(!1,g,g,typeof u==="string"?u.replace(/^RangeError:\s*/,""):u))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof u==="string"&&u==="too much recursion")return new P.ed()
return a},
cp:function(a){var u
if(a==null)return new H.f1(a)
u=a.$cachedTrace
if(u!=null)return u
return a.$cachedTrace=new H.f1(a)},
nZ:function(a,b){var u,t,s,r=a.length
for(u=0;u<r;u=s){t=u+1
s=t+1
b.l(0,a[u],a[t])}return b},
o7:function(a,b,c,d,e,f){H.e(a,"$ibE")
switch(H.a9(b)){case 0:return a.$0()
case 1:return a.$1(c)
case 2:return a.$2(c,d)
case 3:return a.$3(c,d,e)
case 4:return a.$4(c,d,e,f)}throw H.f(P.w("Unsupported number of arguments for wrapped closure"))},
cl:function(a,b){var u
if(a==null)return
u=a.$identity
if(!!u)return u
u=function(c,d,e){return function(f,g,h,i){return e(c,d,f,g,h,i)}}(a,b,H.o7)
a.$identity=u
return u},
mw:function(a,b,c,d,e,f,g){var u,t,s,r,q,p,o,n,m=null,l=b[0],k=l.$callName,j=e?Object.create(new H.il().constructor.prototype):Object.create(new H.cu(m,m,m,m).constructor.prototype)
j.$initialize=j.constructor
if(e)u=function static_tear_off(){this.$initialize()}
else{t=$.aZ
if(typeof t!=="number")return t.D()
$.aZ=t+1
t=new Function("a,b,c,d"+t,"this.$initialize(a,b,c,d"+t+")")
u=t}j.constructor=u
u.prototype=j
if(!e){s=H.l_(a,l,f)
s.$reflectionInfo=d}else{j.$static_name=g
s=l}r=H.ms(d,e,f)
j.$S=r
j[k]=s
for(q=s,p=1;p<b.length;++p){o=b[p]
n=o.$callName
if(n!=null){o=e?o:H.l_(a,o,f)
j[n]=o}if(p===c){o.$reflectionInfo=d
q=o}}j.$C=q
j.$R=l.$R
j.$D=l.$D
return u},
ms:function(a,b,c){var u
if(typeof a=="number")return function(d,e){return function(){return d(e)}}(H.o1,a)
if(typeof a=="function")if(b)return a
else{u=c?H.kZ:H.km
return function(d,e){return function(){return d.apply({$receiver:e(this)},arguments)}}(a,u)}throw H.f("Error in functionType of tearoff")},
mt:function(a,b,c,d){var u=H.km
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,u)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,u)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,u)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,u)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,u)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,u)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,u)}},
l_:function(a,b,c){var u,t,s,r,q,p,o
if(c)return H.mv(a,b)
u=b.$stubName
t=b.length
s=a[u]
r=b==null?s==null:b===s
q=!r||t>=27
if(q)return H.mt(t,!r,u,b)
if(t===0){r=$.aZ
if(typeof r!=="number")return r.D()
$.aZ=r+1
p="self"+r
r="return function(){var "+p+" = this."
q=$.cv
return new Function(r+H.j(q==null?$.cv=H.fC("self"):q)+";return "+p+"."+H.j(u)+"();}")()}o="abcdefghijklmnopqrstuvwxyz".split("").splice(0,t).join(",")
r=$.aZ
if(typeof r!=="number")return r.D()
$.aZ=r+1
o+=r
r="return function("+o+"){return this."
q=$.cv
return new Function(r+H.j(q==null?$.cv=H.fC("self"):q)+"."+H.j(u)+"("+o+");}")()},
mu:function(a,b,c,d){var u=H.km,t=H.kZ
switch(b?-1:a){case 0:throw H.f(H.n_("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,u,t)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,u,t)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,u,t)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,u,t)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,u,t)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,u,t)
default:return function(e,f,g,h){return function(){h=[g(this)]
Array.prototype.push.apply(h,arguments)
return e.apply(f(this),h)}}(d,u,t)}},
mv:function(a,b){var u,t,s,r,q,p,o,n=$.cv
if(n==null)n=$.cv=H.fC("self")
u=$.kY
if(u==null)u=$.kY=H.fC("receiver")
t=b.$stubName
s=b.length
r=a[t]
q=b==null?r==null:b===r
p=!q||s>=28
if(p)return H.mu(s,!q,t,b)
if(s===1){n="return function(){return this."+H.j(n)+"."+H.j(t)+"(this."+H.j(u)+");"
u=$.aZ
if(typeof u!=="number")return u.D()
$.aZ=u+1
return new Function(n+u+"}")()}o="abcdefghijklmnopqrstuvwxyz".split("").splice(0,s-1).join(",")
n="return function("+o+"){return this."+H.j(n)+"."+H.j(t)+"(this."+H.j(u)+", "+o+");"
u=$.aZ
if(typeof u!=="number")return u.D()
$.aZ=u+1
return new Function(n+u+"}")()},
kO:function(a,b,c,d,e,f,g){return H.mw(a,b,c,d,!!e,!!f,g)},
km:function(a){return a.a},
kZ:function(a){return a.c},
fC:function(a){var u,t,s,r=new H.cu("self","target","receiver","name"),q=J.ks(Object.getOwnPropertyNames(r))
for(u=q.length,t=0;t<u;++t){s=q[t]
if(r[s]===a)return s}},
A:function(a){if(a==null)H.nP("boolean expression must not be null")
return a},
S:function(a){if(a==null)return a
if(typeof a==="string")return a
throw H.f(H.ba(a,"String"))},
nW:function(a){if(a==null)return a
if(typeof a==="number")return a
throw H.f(H.ba(a,"double"))},
lW:function(a){if(a==null)return a
if(typeof a==="number")return a
throw H.f(H.ba(a,"num"))},
kM:function(a){if(a==null)return a
if(typeof a==="boolean")return a
throw H.f(H.ba(a,"bool"))},
a9:function(a){if(a==null)return a
if(typeof a==="number"&&Math.floor(a)===a)return a
throw H.f(H.ba(a,"int"))},
lY:function(a,b){throw H.f(H.ba(a,H.cr(H.S(b).substring(2))))},
oe:function(a,b){throw H.f(H.mr(a,H.cr(H.S(b).substring(2))))},
e:function(a,b){if(a==null)return a
if((typeof a==="object"||typeof a==="function")&&J.T(a)[b])return a
H.lY(a,b)},
n:function(a,b){var u
if(a!=null)u=(typeof a==="object"||typeof a==="function")&&J.T(a)[b]
else u=!0
if(u)return a
H.oe(a,b)},
o9:function(a,b){var u
if(a==null)return a
u=J.T(a)
if(!!u.$ib)return a
if(u[b])return a
H.lY(a,b)},
lR:function(a){var u
if("$S" in a){u=a.$S
if(typeof u=="number")return v.types[H.a9(u)]
else return a.$S()}return},
fo:function(a,b){var u
if(typeof a=="function")return!0
u=H.lR(J.T(a))
if(u==null)return!1
return H.lG(u,null,b,null)},
o:function(a,b){var u,t
if(a==null)return a
if($.kI)return a
$.kI=!0
try{if(H.fo(a,b))return a
u=H.kf(b)
t=H.ba(a,u)
throw H.f(t)}finally{$.kI=!1}},
kP:function(a,b){if(a!=null&&!H.kN(a,b))H.z(H.ba(a,H.kf(b)))
return a},
ba:function(a,b){return new H.iO("TypeError: "+P.dG(a)+": type '"+H.j(H.lK(a))+"' is not a subtype of type '"+b+"'")},
mr:function(a,b){return new H.fG("CastError: "+P.dG(a)+": type '"+H.j(H.lK(a))+"' is not a subtype of type '"+b+"'")},
lK:function(a){var u,t=J.T(a)
if(!!t.$icw){u=H.lR(t)
if(u!=null)return H.kf(u)
return"Closure"}return H.cS(a)},
nP:function(a){throw H.f(new H.je(a))},
om:function(a){throw H.f(new P.fP(a))},
n_:function(a){return new H.i7(a)},
lS:function(a){return v.getIsolateTag(a)},
c:function(a,b){a.$ti=b
return a},
bV:function(a){if(a==null)return
return a.$ti},
p2:function(a,b,c){return H.cq(a["$a"+H.j(c)],H.bV(b))},
bf:function(a,b,c,d){var u=H.cq(a["$a"+H.j(c)],H.bV(b))
return u==null?null:u[d]},
ad:function(a,b,c){var u=H.cq(a["$a"+H.j(b)],H.bV(a))
return u==null?null:u[c]},
x:function(a,b){var u=H.bV(a)
return u==null?null:u[b]},
kf:function(a){return H.bT(a,null)},
bT:function(a,b){var u,t
if(a==null)return"dynamic"
if(a===-1)return"void"
if(typeof a==="object"&&a!==null&&a.constructor===Array)return H.cr(a[0].name)+H.kL(a,1,b)
if(typeof a=="function")return H.cr(a.name)
if(a===-2)return"dynamic"
if(typeof a==="number"){H.a9(a)
if(b==null||a<0||a>=b.length)return"unexpected-generic-index:"+a
u=b.length
t=u-a-1
if(t<0||t>=u)return H.h(b,t)
return H.j(b[t])}if('func' in a)return H.no(a,b)
if('futureOr' in a)return"FutureOr<"+H.bT("type" in a?a.type:null,b)+">"
return"unknown-reified-type"},
no:function(a,a0){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b=", "
if("bounds" in a){u=a.bounds
if(a0==null){a0=H.c([],[P.l])
t=null}else t=a0.length
s=a0.length
for(r=u.length,q=r;q>0;--q)C.a.h(a0,"T"+(s+q))
for(p="<",o="",q=0;q<r;++q,o=b){p+=o
n=a0.length
m=n-q-1
if(m<0)return H.h(a0,m)
p=C.e.D(p,a0[m])
l=u[q]
if(l!=null&&l!==P.P)p+=" extends "+H.bT(l,a0)}p+=">"}else{p=""
t=null}k=!!a.v?"void":H.bT(a.ret,a0)
if("args" in a){j=a.args
for(n=j.length,i="",h="",g=0;g<n;++g,h=b){f=j[g]
i=i+h+H.bT(f,a0)}}else{i=""
h=""}if("opt" in a){e=a.opt
i+=h+"["
for(n=e.length,h="",g=0;g<n;++g,h=b){f=e[g]
i=i+h+H.bT(f,a0)}i+="]"}if("named" in a){d=a.named
i+=h+"{"
for(n=H.nY(d),m=n.length,h="",g=0;g<m;++g,h=b){c=H.S(n[g])
i=i+h+H.bT(d[c],a0)+(" "+H.j(c))}i+="}"}if(t!=null)a0.length=t
return p+"("+i+") => "+k},
kL:function(a,b,c){var u,t,s,r,q,p
if(a==null)return""
u=new P.bO("")
for(t=b,s="",r=!0,q="";t<a.length;++t,s=", "){u.a=q+s
p=a[t]
if(p!=null)r=!1
q=u.a+=H.bT(p,c)}return"<"+u.i(0)+">"},
cq:function(a,b){if(a==null)return b
a=a.apply(null,b)
if(a==null)return
if(typeof a==="object"&&a!==null&&a.constructor===Array)return a
if(typeof a=="function")return a.apply(null,b)
return b},
k2:function(a,b,c,d){var u,t
if(a==null)return!1
u=H.bV(a)
t=J.T(a)
if(t[b]==null)return!1
return H.lN(H.cq(t[d],u),null,c,null)},
k:function(a,b,c,d){if(a==null)return a
if(H.k2(a,b,c,d))return a
throw H.f(H.ba(a,function(e,f){return e.replace(/[^<,> ]+/g,function(g){return f[g]||g})}(H.cr(b.substring(2))+H.kL(c,0,null),v.mangledGlobalNames)))},
lN:function(a,b,c,d){var u,t
if(c==null)return!0
if(a==null){u=c.length
for(t=0;t<u;++t)if(!H.aI(null,null,c[t],d))return!1
return!0}u=a.length
for(t=0;t<u;++t)if(!H.aI(a[t],b,c[t],d))return!1
return!0},
p0:function(a,b,c){return a.apply(b,H.cq(J.T(b)["$a"+H.j(c)],H.bV(b)))},
lU:function(a){var u
if(typeof a==="number")return!1
if('futureOr' in a){u="type" in a?a.type:null
return a==null||a.name==="P"||a.name==="O"||a===-1||a===-2||H.lU(u)}return!1},
kN:function(a,b){var u,t
if(a==null)return b==null||b.name==="P"||b.name==="O"||b===-1||b===-2||H.lU(b)
if(b==null||b===-1||b.name==="P"||b===-2)return!0
if(typeof b=="object"){if('futureOr' in b)if(H.kN(a,"type" in b?b.type:null))return!0
if('func' in b)return H.fo(a,b)}u=J.T(a).constructor
t=H.bV(a)
if(t!=null){t=t.slice()
t.splice(0,0,u)
u=t}return H.aI(u,null,b,null)},
E:function(a,b){if(a!=null&&!H.kN(a,b))throw H.f(H.ba(a,H.kf(b)))
return a},
aI:function(a,b,c,d){var u,t,s,r,q,p,o,n,m,l=null
if(a===c)return!0
if(c==null||c===-1||c.name==="P"||c===-2)return!0
if(a===-2)return!0
if(a==null||a===-1||a.name==="P"||a===-2){if(typeof c==="number")return!1
if('futureOr' in c)return H.aI(a,b,"type" in c?c.type:l,d)
return!1}if(typeof a==="number")return!1
if(typeof c==="number")return!1
if(a.name==="O")return!0
u=typeof a==="object"&&a!==null&&a.constructor===Array
t=u?a[0]:a
if('futureOr' in c){s="type" in c?c.type:l
if('futureOr' in a)return H.aI("type" in a?a.type:l,b,s,d)
else if(H.aI(a,b,s,d))return!0
else{if(!('$i'+"cE" in t.prototype))return!1
r=t.prototype["$a"+"cE"]
q=H.cq(r,u?a.slice(1):l)
return H.aI(typeof q==="object"&&q!==null&&q.constructor===Array?q[0]:l,b,s,d)}}if('func' in c)return H.lG(a,b,c,d)
if('func' in a)return c.name==="bE"
p=typeof c==="object"&&c!==null&&c.constructor===Array
o=p?c[0]:c
if(o!==t){n=o.name
if(!('$i'+n in t.prototype))return!1
m=t.prototype["$a"+n]}else m=l
if(!p)return!0
u=u?a.slice(1):l
p=c.slice(1)
return H.lN(H.cq(m,u),b,p,d)},
lG:function(a,b,c,d){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g
if(!('func' in a))return!1
if("bounds" in a){if(!("bounds" in c))return!1
u=a.bounds
t=c.bounds
if(u.length!==t.length)return!1}else if("bounds" in c)return!1
if(!H.aI(a.ret,b,c.ret,d))return!1
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
for(k=0;k<o;++k)if(!H.aI(r[k],d,s[k],b))return!1
for(j=k,i=0;j<n;++i,++j)if(!H.aI(r[j],d,q[i],b))return!1
for(j=0;j<l;++i,++j)if(!H.aI(p[j],d,q[i],b))return!1
h=a.named
g=c.named
if(g==null)return!0
if(h==null)return!1
return H.oc(h,b,g,d)},
oc:function(a,b,c,d){var u,t,s,r=Object.getOwnPropertyNames(c)
for(u=r.length,t=0;t<u;++t){s=r[t]
if(!Object.hasOwnProperty.call(a,s))return!1
if(!H.aI(c[s],d,a[s],b))return!1}return!0},
p1:function(a,b,c){Object.defineProperty(a,b,{value:c,enumerable:false,writable:true,configurable:true})},
oa:function(a){var u,t,s,r,q=H.S($.lT.$1(a)),p=$.k4[q]
if(p!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}u=$.ka[q]
if(u!=null)return u
t=v.interceptorsByTag[q]
if(t==null){q=H.S($.lM.$2(a,q))
if(q!=null){p=$.k4[q]
if(p!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}u=$.ka[q]
if(u!=null)return u
t=v.interceptorsByTag[q]}}if(t==null)return
u=t.prototype
s=q[0]
if(s==="!"){p=H.ke(u)
$.k4[q]=p
Object.defineProperty(a,v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}if(s==="~"){$.ka[q]=u
return u}if(s==="-"){r=H.ke(u)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:r,enumerable:false,writable:true,configurable:true})
return r.i}if(s==="+")return H.lX(a,u)
if(s==="*")throw H.f(P.kC(q))
if(v.leafTags[q]===true){r=H.ke(u)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:r,enumerable:false,writable:true,configurable:true})
return r.i}else return H.lX(a,u)},
lX:function(a,b){var u=Object.getPrototypeOf(a)
Object.defineProperty(u,v.dispatchPropertyName,{value:J.kR(b,u,null,null),enumerable:false,writable:true,configurable:true})
return b},
ke:function(a){return J.kR(a,!1,null,!!a.$iJ)},
ob:function(a,b,c){var u=b.prototype
if(v.leafTags[a]===true)return H.ke(u)
else return J.kR(u,c,null,null)},
o5:function(){if(!0===$.kQ)return
$.kQ=!0
H.o6()},
o6:function(){var u,t,s,r,q,p,o,n
$.k4=Object.create(null)
$.ka=Object.create(null)
H.o4()
u=v.interceptorsByTag
t=Object.getOwnPropertyNames(u)
if(typeof window!="undefined"){window
s=function(){}
for(r=0;r<t.length;++r){q=t[r]
p=$.lZ.$1(q)
if(p!=null){o=H.ob(q,u[q],p)
if(o!=null){Object.defineProperty(p,v.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
s.prototype=p}}}}for(r=0;r<t.length;++r){q=t[r]
if(/^[A-Za-z_]/.test(q)){n=u[q]
u["!"+q]=n
u["~"+q]=n
u["-"+q]=n
u["+"+q]=n
u["*"+q]=n}}},
o4:function(){var u,t,s,r,q,p,o=C.B()
o=H.ck(C.C,H.ck(C.D,H.ck(C.r,H.ck(C.r,H.ck(C.E,H.ck(C.F,H.ck(C.G(C.q),o)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){u=dartNativeDispatchHooksTransformer
if(typeof u=="function")u=[u]
if(u.constructor==Array)for(t=0;t<u.length;++t){s=u[t]
if(typeof s=="function")o=s(o)||o}}r=o.getTag
q=o.getUnknownTag
p=o.prototypeForTag
$.lT=new H.k7(r)
$.lM=new H.k8(q)
$.lZ=new H.k9(p)},
ck:function(a,b){return a(b)||b},
mG:function(a,b,c,d,e,f){var u=b?"m":"",t=c?"":"i",s=d?"u":"",r=e?"s":"",q=f?"g":"",p=function(g,h){try{return new RegExp(g,h)}catch(o){return o}}(a,u+t+s+r+q)
if(p instanceof RegExp)return p
throw H.f(new P.h7("Illegal RegExp pattern ("+String(p)+")",a))},
oh:function(a,b,c){var u=a.indexOf(b,c)
return u>=0},
nX:function(a){if(a.indexOf("$",0)>=0)return a.replace(/\$/g,"$$$$")
return a},
m_:function(a){if(/[[\]{}()*+?.\\^$|]/.test(a))return a.replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
return a},
m0:function(a,b,c){var u=H.oi(a,b,c)
return u},
oi:function(a,b,c){var u,t,s,r
if(b===""){if(a==="")return c
u=a.length
for(t=c,s=0;s<u;++s)t=t+a[s]+c
return t.charCodeAt(0)==0?t:t}r=a.indexOf(b,0)
if(r<0)return a
if(a.length<500||c.indexOf("$",0)>=0)return a.split(b).join(c)
return a.replace(new RegExp(H.m_(b),'g'),H.nX(c))},
oj:function(a,b,c,d){var u=a.indexOf(b,d)
if(u<0)return a
return H.ok(a,u,u+b.length,c)},
ok:function(a,b,c,d){var u=a.substring(0,b),t=a.substring(c)
return u+d+t},
iM:function iM(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
hS:function hS(a,b){this.a=a
this.b=b},
he:function he(a,b,c){this.a=a
this.b=b
this.c=c},
iW:function iW(a){this.a=a},
ki:function ki(a){this.a=a},
f1:function f1(a){this.a=a
this.b=null},
cw:function cw(){},
iy:function iy(){},
il:function il(){},
cu:function cu(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
iO:function iO(a){this.a=a},
fG:function fG(a){this.a=a},
i7:function i7(a){this.a=a},
je:function je(a){this.a=a},
a0:function a0(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
hh:function hh(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
dP:function dP(a,b){this.a=a
this.$ti=b},
hi:function hi(a,b,c){var _=this
_.a=a
_.b=b
_.d=_.c=null
_.$ti=c},
k7:function k7(a){this.a=a},
k8:function k8(a){this.a=a},
k9:function k9(a){this.a=a},
hd:function hd(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
iu:function iu(a,b){this.a=a
this.c=b},
kH:function kH(a,b,c){var _=this
_.a=a
_.b=b
_.c=c
_.d=null},
ci:function(a){return a},
be:function(a,b,c){if(a>>>0!==a||a>=c)throw H.f(H.cm(b,a))},
nn:function(a,b,c){var u
if(!(a>>>0!==a))u=b>>>0!==b||a>b||b>c
else u=!0
if(u)throw H.f(H.nV(a,b,c))
return b},
cN:function cN(){},
dY:function dY(){},
c5:function c5(){},
cM:function cM(){},
hK:function hK(){},
hL:function hL(){},
hM:function hM(){},
hN:function hN(){},
hO:function hO(){},
cO:function cO(){},
hP:function hP(){},
da:function da(){},
db:function db(){},
dc:function dc(){},
dd:function dd(){},
nY:function(a){return J.l9(a?Object.keys(a):[],null)},
on:function(a){return v.mangledGlobalNames[a]},
od:function(a){if(typeof dartPrint=="function"){dartPrint(a)
return}if(typeof console=="object"&&typeof console.log!="undefined"){console.log(a)
return}if(typeof window=="object")return
if(typeof print=="function"){print(a)
return}throw"Unable to print message: "+String(a)}},J={
kR:function(a,b,c,d){return{i:a,p:b,e:c,x:d}},
k6:function(a){var u,t,s,r,q=a[v.dispatchPropertyName]
if(q==null)if($.kQ==null){H.o5()
q=a[v.dispatchPropertyName]}if(q!=null){u=q.p
if(!1===u)return q.i
if(!0===u)return a
t=Object.getPrototypeOf(a)
if(u===t)return q.i
if(q.e===t)throw H.f(P.kC("Return interceptor for "+H.j(u(a,q))))}s=a.constructor
r=s==null?null:s[$.kT()]
if(r!=null)return r
r=H.oa(a)
if(r!=null)return r
if(typeof a=="function")return C.N
u=Object.getPrototypeOf(a)
if(u==null)return C.w
if(u===Object.prototype)return C.w
if(typeof s=="function"){Object.defineProperty(s,$.kT(),{value:C.o,enumerable:false,writable:true,configurable:true})
return C.o}return C.o},
mF:function(a,b){if(typeof a!=="number"||Math.floor(a)!==a)throw H.f(P.kl(a,"length","is not an integer"))
if(a<0||a>4294967295)throw H.f(P.aC(a,0,4294967295,"length",null))
return J.l9(new Array(a),b)},
l9:function(a,b){return J.ks(H.c(a,[b]))},
ks:function(a){a.fixed$length=Array
return a},
T:function(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.dK.prototype
return J.dJ.prototype}if(typeof a=="string")return J.bJ.prototype
if(a==null)return J.dL.prototype
if(typeof a=="boolean")return J.hc.prototype
if(a.constructor==Array)return J.b1.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bK.prototype
return a}if(a instanceof P.P)return a
return J.k6(a)},
fp:function(a){if(typeof a=="string")return J.bJ.prototype
if(a==null)return a
if(a.constructor==Array)return J.b1.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bK.prototype
return a}if(a instanceof P.P)return a
return J.k6(a)},
k5:function(a){if(a==null)return a
if(a.constructor==Array)return J.b1.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bK.prototype
return a}if(a instanceof P.P)return a
return J.k6(a)},
o_:function(a){if(typeof a=="number")return J.cH.prototype
if(typeof a=="string")return J.bJ.prototype
if(a==null)return a
if(!(a instanceof P.P))return J.ce.prototype
return a},
o0:function(a){if(typeof a=="string")return J.bJ.prototype
if(a==null)return a
if(!(a instanceof P.P))return J.ce.prototype
return a},
co:function(a){if(a==null)return a
if(typeof a!="object"){if(typeof a=="function")return J.bK.prototype
return a}if(a instanceof P.P)return a
return J.k6(a)},
V:function(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.T(a).n(a,b)},
fq:function(a,b){if(typeof b==="number")if(a.constructor==Array||typeof a=="string"||H.o8(a,a[v.dispatchPropertyName]))if(b>>>0===b&&b<a.length)return a[b]
return J.fp(a).j(a,b)},
mj:function(a,b,c){return J.co(a).hK(a,b,c)},
mk:function(a,b,c,d){return J.co(a).ij(a,b,c,d)},
kk:function(a,b){return J.o_(a).iv(a,b)},
dp:function(a,b){return J.k5(a).B(a,b)},
ml:function(a,b){return J.k5(a).J(a,b)},
mm:function(a){return J.co(a).gis(a)},
kV:function(a){return J.co(a).gc4(a)},
mn:function(a){return J.co(a).gc8(a)},
bX:function(a){return J.T(a).gI(a)},
bY:function(a){return J.k5(a).gR(a)},
aY:function(a){return J.fp(a).gk(a)},
kW:function(a){return J.k5(a).j9(a)},
mo:function(a,b){return J.co(a).jb(a,b)},
mp:function(a){return J.o0(a).jk(a)},
av:function(a){return J.T(a).i(a)},
a:function a(){},
hc:function hc(){},
dL:function dL(){},
dM:function dM(){},
hW:function hW(){},
ce:function ce(){},
bK:function bK(){},
b1:function b1(a){this.$ti=a},
kt:function kt(a){this.$ti=a},
al:function al(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.d=null
_.$ti=c},
cH:function cH(){},
dK:function dK(){},
dJ:function dJ(){},
bJ:function bJ(){}},P={
nb:function(){var u,t,s={}
if(self.scheduleImmediate!=null)return P.nQ()
if(self.MutationObserver!=null&&self.document!=null){u=self.document.createElement("div")
t=self.document.createElement("span")
s.a=null
new self.MutationObserver(H.cl(new P.jg(s),1)).observe(u,{childList:true})
return new P.jf(s,u,t)}else if(self.setImmediate!=null)return P.nR()
return P.nS()},
nc:function(a){self.scheduleImmediate(H.cl(new P.jh(H.o(a,{func:1,ret:-1})),0))},
nd:function(a){self.setImmediate(H.cl(new P.ji(H.o(a,{func:1,ret:-1})),0))},
ne:function(a){P.kA(C.j,H.o(a,{func:1,ret:-1}))},
kA:function(a,b){var u=C.d.a1(a.a,1000)
return P.nk(u<0?0:u,b)},
lx:function(a,b){var u=C.d.a1(a.a,1000)
return P.nl(u<0?0:u,b)},
nk:function(a,b){var u=new P.f7()
u.eP(a,b)
return u},
nl:function(a,b){var u=new P.f7()
u.eQ(a,b)
return u},
nf:function(a,b){var u,t,s
b.a=1
try{a.ed(new P.jr(b),new P.js(b),null)}catch(s){u=H.au(s)
t=H.cp(s)
P.of(new P.jt(b,u,t))}},
lC:function(a,b){var u,t
for(;u=a.a,u===2;)a=H.e(a.c,"$iaH")
if(u>=4){t=b.bX()
b.a=a.a
b.c=a.c
P.d9(b,t)}else{t=H.e(b.c,"$ibd")
b.a=2
b.c=a
a.dn(t)}},
d9:function(a,b){var u,t,s,r,q,p,o,n,m,l,k,j,i=null,h={},g=h.a=a
for(;!0;){u={}
t=g.a===8
if(b==null){if(t){s=H.e(g.c,"$iam")
P.k_(i,i,g.b,s.a,s.b)}return}for(;r=b.a,r!=null;b=r){b.a=null
P.d9(h.a,b)}g=h.a
q=g.c
u.a=t
u.b=q
p=!t
if(p){o=b.c
o=(o&1)!==0||(o&15)===8}else o=!0
if(o){o=b.b
n=o.b
if(t){m=g.b===n
m=!(m||m)}else m=!1
if(m){H.e(q,"$iam")
P.k_(i,i,g.b,q.a,q.b)
return}l=$.a_
if(l!==n)$.a_=n
else l=i
g=b.c
if((g&15)===8)new P.jx(h,u,b,t).$0()
else if(p){if((g&1)!==0)new P.jw(u,b,q).$0()}else if((g&2)!==0)new P.jv(h,u,b).$0()
if(l!=null)$.a_=l
g=u.b
if(!!J.T(g).$icE){if(g.a>=4){k=H.e(o.c,"$ibd")
o.c=null
b=o.bj(k)
o.a=g.a
o.c=g.c
h.a=g
continue}else P.lC(g,o)
return}}j=b.b
k=H.e(j.c,"$ibd")
j.c=null
b=j.bj(k)
g=u.a
p=u.b
if(!g){H.E(p,H.x(j,0))
j.a=4
j.c=p}else{H.e(p,"$iam")
j.a=8
j.c=p}h.a=j
g=j}},
nL:function(a,b){if(H.fo(a,{func:1,args:[P.P,P.as]}))return H.o(a,{func:1,ret:null,args:[P.P,P.as]})
if(H.fo(a,{func:1,args:[P.P]}))return H.o(a,{func:1,ret:null,args:[P.P]})
throw H.f(P.kl(a,"onError","Error handler must accept one Object or one Object and a StackTrace as arguments, and return a a valid result"))},
nK:function(){var u,t
for(;u=$.cj,u!=null;){$.dk=null
t=u.b
$.cj=t
if(t==null)$.dj=null
u.a.$0()}},
nO:function(){$.kJ=!0
try{P.nK()}finally{$.dk=null
$.kJ=!1
if($.cj!=null)$.kU().$1(P.lO())}},
lJ:function(a){var u=new P.et(a)
if($.cj==null){$.cj=$.dj=u
if(!$.kJ)$.kU().$1(P.lO())}else $.dj=$.dj.b=u},
nN:function(a){var u,t,s=$.cj
if(s==null){P.lJ(a)
$.dk=$.dj
return}u=new P.et(a)
t=$.dk
if(t==null){u.b=s
$.cj=$.dk=u}else{u.b=t.b
$.dk=t.b=u
if(u.b==null)$.dj=u}},
of:function(a){var u=null,t=$.a_
if(C.f===t){P.k1(u,u,C.f,a)
return}P.k1(u,u,t,H.o(t.c0(a),{func:1,ret:-1}))},
lw:function(a,b){var u=$.a_
if(u===C.f)return P.kA(a,H.o(b,{func:1,ret:-1}))
return P.kA(a,H.o(u.c0(b),{func:1,ret:-1}))},
n8:function(a,b){var u=$.a_
if(u===C.f)return P.lx(a,H.o(b,{func:1,ret:-1,args:[P.b7]}))
return P.lx(a,H.o(u.dC(b,P.b7),{func:1,ret:-1,args:[P.b7]}))},
k_:function(a,b,c,d,e){var u={}
u.a=d
P.nN(new P.k0(u,e))},
lH:function(a,b,c,d,e){var u,t=$.a_
if(t===c)return d.$0()
$.a_=c
u=t
try{t=d.$0()
return t}finally{$.a_=u}},
lI:function(a,b,c,d,e,f,g){var u,t=$.a_
if(t===c)return d.$1(e)
$.a_=c
u=t
try{t=d.$1(e)
return t}finally{$.a_=u}},
nM:function(a,b,c,d,e,f,g,h,i){var u,t=$.a_
if(t===c)return d.$2(e,f)
$.a_=c
u=t
try{t=d.$2(e,f)
return t}finally{$.a_=u}},
k1:function(a,b,c,d){var u
H.o(d,{func:1,ret:-1})
u=C.f!==c
if(u)d=!(!u||!1)?c.c0(d):c.it(d,-1)
P.lJ(d)},
jg:function jg(a){this.a=a},
jf:function jf(a,b,c){this.a=a
this.b=b
this.c=c},
jh:function jh(a){this.a=a},
ji:function ji(a){this.a=a},
f7:function f7(){this.c=0},
jS:function jS(a,b){this.a=a
this.b=b},
jR:function jR(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
bd:function bd(a,b,c,d,e){var _=this
_.a=null
_.b=a
_.c=b
_.d=c
_.e=d
_.$ti=e},
aH:function aH(a,b){var _=this
_.a=0
_.b=a
_.c=null
_.$ti=b},
jq:function jq(a,b){this.a=a
this.b=b},
ju:function ju(a,b){this.a=a
this.b=b},
jr:function jr(a){this.a=a},
js:function js(a){this.a=a},
jt:function jt(a,b,c){this.a=a
this.b=b
this.c=c},
jx:function jx(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
jy:function jy(a){this.a=a},
jw:function jw(a,b,c){this.a=a
this.b=b
this.c=c},
jv:function jv(a,b,c){this.a=a
this.b=b
this.c=c},
et:function et(a){this.a=a
this.b=null},
ip:function ip(){},
ir:function ir(a,b){this.a=a
this.b=b},
is:function is(a,b){this.a=a
this.b=b},
cY:function cY(){},
iq:function iq(){},
b7:function b7(){},
am:function am(a,b){this.a=a
this.b=b},
jV:function jV(){},
k0:function k0(a,b){this.a=a
this.b=b},
jE:function jE(){},
jG:function jG(a,b,c){this.a=a
this.b=b
this.c=c},
jF:function jF(a,b){this.a=a
this.b=b},
jH:function jH(a,b,c){this.a=a
this.b=b
this.c=c},
la:function(a,b){return new H.a0([a,b])},
mI:function(a){return H.nZ(a,new H.a0([null,null]))},
dQ:function(a){return new P.jC([a])},
kG:function(){var u=Object.create(null)
u["<non-identifier-key>"]=u
delete u["<non-identifier-key>"]
return u},
nj:function(a,b,c){var u=new P.eJ(a,b,[c])
u.c=a.e
return u},
mC:function(a,b,c){var u,t
if(P.kK(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}u=H.c([],[P.l])
C.a.h($.at,a)
try{P.np(a,u)}finally{if(0>=$.at.length)return H.h($.at,-1)
$.at.pop()}t=P.ls(b,H.o9(u,"$id"),", ")+c
return t.charCodeAt(0)==0?t:t},
kr:function(a,b,c){var u,t
if(P.kK(a))return b+"..."+c
u=new P.bO(b)
C.a.h($.at,a)
try{t=u
t.a=P.ls(t.a,a,", ")}finally{if(0>=$.at.length)return H.h($.at,-1)
$.at.pop()}u.a+=c
t=u.a
return t.charCodeAt(0)==0?t:t},
kK:function(a){var u,t
for(u=$.at.length,t=0;t<u;++t)if(a===$.at[t])return!0
return!1},
np:function(a,b){var u,t,s,r,q,p,o,n=a.gR(a),m=0,l=0
while(!0){if(!(m<80||l<3))break
if(!n.t())return
u=H.j(n.gG(n))
C.a.h(b,u)
m+=u.length+2;++l}if(!n.t()){if(l<=5)return
if(0>=b.length)return H.h(b,-1)
t=b.pop()
if(0>=b.length)return H.h(b,-1)
s=b.pop()}else{r=n.gG(n);++l
if(!n.t()){if(l<=4){C.a.h(b,H.j(r))
return}t=H.j(r)
if(0>=b.length)return H.h(b,-1)
s=b.pop()
m+=t.length+2}else{q=n.gG(n);++l
for(;n.t();r=q,q=p){p=n.gG(n);++l
if(l>100){while(!0){if(!(m>75&&l>3))break
if(0>=b.length)return H.h(b,-1)
m-=b.pop().length+2;--l}C.a.h(b,"...")
return}}s=H.j(r)
t=H.j(q)
m+=t.length+s.length+4}}if(l>b.length+2){m+=5
o="..."}else o=null
while(!0){if(!(m>80&&b.length>3))break
if(0>=b.length)return H.h(b,-1)
m-=b.pop().length+2
if(o==null){m+=5
o="..."}}if(o!=null)C.a.h(b,o)
C.a.h(b,s)
C.a.h(b,t)},
lb:function(a,b){var u,t,s=P.dQ(b)
for(u=a.length,t=0;t<a.length;a.length===u||(0,H.v)(a),++t)s.h(0,H.E(a[t],b))
return s},
ld:function(a){var u,t={}
if(P.kK(a))return"{...}"
u=new P.bO("")
try{C.a.h($.at,a)
u.a+="{"
t.a=!0
J.ml(a,new P.hm(t,u))
u.a+="}"}finally{if(0>=$.at.length)return H.h($.at,-1)
$.at.pop()}t=u.a
return t.charCodeAt(0)==0?t:t},
jC:function jC(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
ch:function ch(a){this.a=a
this.c=this.b=null},
eJ:function eJ(a,b,c){var _=this
_.a=a
_.b=b
_.d=_.c=null
_.$ti=c},
hj:function hj(){},
t:function t(){},
hl:function hl(){},
hm:function hm(a,b){this.a=a
this.b=b},
af:function af(){},
jJ:function jJ(){},
eK:function eK(){},
cx:function cx(){},
dz:function dz(){},
fY:function fY(){},
iZ:function iZ(){},
j_:function j_(){},
jT:function jT(a){this.b=0
this.c=a},
mB:function(a){if(a instanceof H.cw)return a.i(0)
return"Instance of '"+H.j(H.cS(a))+"'"},
mJ:function(a,b,c){var u,t=J.mF(a,c)
if(a!==0&&!0)for(u=0;u<t.length;++u)C.a.l(t,u,b)
return H.k(t,"$ib",[c],"$ab")},
lc:function(a,b,c){var u,t=[c],s=H.c([],t)
for(u=J.bY(a);u.t();)C.a.h(s,H.E(u.gG(u),c))
if(b)return s
return H.k(J.ks(s),"$ib",t,"$ab")},
kz:function(a){var u,t
if(a.constructor===Array){H.k(a,"$ib1",[P.r],"$ab1")
u=a.length
t=P.kw(0,null,u)
return H.lq(t<u?C.a.em(a,0,t):a)}return P.n3(a,0,null)},
n3:function(a,b,c){var u,t,s=J.bY(a)
for(u=0;u<b;++u)if(!s.t())throw H.f(P.aC(b,0,u,null,null))
t=[]
for(;s.t();)t.push(s.gG(s))
return H.lq(t)},
mY:function(a){return new H.hd(a,H.mG(a,!1,!0,!1,!1,!1))},
ls:function(a,b,c){var u=J.bY(b)
if(!u.t())return a
if(c.length===0){do a+=H.j(u.gG(u))
while(u.t())}else{a+=H.j(u.gG(u))
for(;u.t();)a=a+c+H.j(u.gG(u))}return a},
nm:function(a,b,c,d){var u,t,s,r,q,p,o="0123456789ABCDEF"
if(c===C.t){u=$.mi().b
u=u.test(b)}else u=!1
if(u)return b
t=C.I.iw(H.E(b,H.ad(c,"cx",0)))
for(u=t.length,s=0,r="";s<u;++s){q=t[s]
if(q<128){p=q>>>4
if(p>=8)return H.h(a,p)
p=(a[p]&1<<(q&15))!==0}else p=!1
if(p)r+=H.mW(q)
else r=r+"%"+o[q>>>4&15]+o[q&15]}return r.charCodeAt(0)==0?r:r},
my:function(a){var u=Math.abs(a),t=a<0?"-":""
if(u>=1000)return""+a
if(u>=100)return t+"0"+u
if(u>=10)return t+"00"+u
return t+"000"+u},
mz:function(a){if(a>=100)return""+a
if(a>=10)return"0"+a
return"00"+a},
dB:function(a){if(a>=10)return""+a
return"0"+a},
l2:function(a){return new P.bB(1000*a)},
dG:function(a){if(typeof a==="number"||typeof a==="boolean"||null==a)return J.av(a)
if(typeof a==="string")return JSON.stringify(a)
return P.mB(a)},
mq:function(a){return new P.aJ(!1,null,null,a)},
kl:function(a,b,c){return new P.aJ(!0,a,b,c)},
i_:function(a,b){return new P.c7(null,null,!0,a,b,"Value not in range")},
aC:function(a,b,c,d,e){return new P.c7(b,c,!0,a,d,"Invalid value")},
kw:function(a,b,c){if(0>a||a>c)throw H.f(P.aC(a,0,c,"start",null))
if(b!=null){if(a>b||b>c)throw H.f(P.aC(b,a,c,"end",null))
return b}return c},
i0:function(a,b){if(typeof a!=="number")return a.ag()
if(a<0)throw H.f(P.aC(a,0,null,b,null))},
Y:function(a,b,c,d,e){var u=H.a9(e==null?J.aY(b):e)
return new P.hb(u,!0,a,c,"Index out of range")},
H:function(a){return new P.iX(a)},
kC:function(a){return new P.iV(a)},
ky:function(a){return new P.c9(a)},
bz:function(a){return new P.fK(a)},
w:function(a){return new P.eB(a)},
kS:function(a){H.od(a)},
R:function R(){},
az:function az(a,b){this.a=a
this.b=b},
B:function B(){},
bB:function bB(a){this.a=a},
fU:function fU(){},
fV:function fV(){},
bC:function bC(){},
fu:function fu(){},
e_:function e_(){},
aJ:function aJ(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
c7:function c7(a,b,c,d,e,f){var _=this
_.e=a
_.f=b
_.a=c
_.b=d
_.c=e
_.d=f},
hb:function hb(a,b,c,d,e){var _=this
_.f=a
_.a=b
_.b=c
_.c=d
_.d=e},
iX:function iX(a){this.a=a},
iV:function iV(a){this.a=a},
c9:function c9(a){this.a=a},
fK:function fK(a){this.a=a},
hV:function hV(){},
ed:function ed(){},
fP:function fP(a){this.a=a},
eB:function eB(a){this.a=a},
h7:function h7(a,b){this.a=a
this.b=b},
bE:function bE(){},
r:function r(){},
d:function d(){},
aA:function aA(){},
b:function b(){},
G:function G(){},
O:function O(){},
aa:function aa(){},
P:function P(){},
dT:function dT(){},
as:function as(){},
l:function l(){},
bO:function bO(a){this.a=a},
lQ:function(a){var u,t=J.T(a)
if(!!t.$ibF){u=t.gc8(a)
if(u.constructor===Array)if(typeof CanvasPixelArray!=="undefined"){u.constructor=CanvasPixelArray
u.BYTES_PER_ELEMENT=1}return a}return new P.fc(a.data,a.height,a.width)},
lP:function(a){if(a instanceof P.fc)return{data:a.a,height:a.b,width:a.c}
return a},
bo:function(a){var u,t,s,r,q
if(a==null)return
u=P.la(P.l,null)
t=Object.getOwnPropertyNames(a)
for(s=t.length,r=0;r<t.length;t.length===s||(0,H.v)(t),++r){q=H.S(t[r])
u.l(0,q,a[q])}return u},
nU:function(a){var u={}
a.J(0,new P.k3(u))
return u},
fc:function fc(a,b,c){this.a=a
this.b=b
this.c=c},
k3:function k3(a){this.a=a},
h3:function h3(a,b){this.a=a
this.b=b},
h4:function h4(){},
h5:function h5(){},
jB:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
ni:function(a){a=536870911&a+((67108863&a)<<3)
a^=a>>>11
return 536870911&a+((16383&a)<<15)},
jD:function jD(){},
ai:function ai(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=e},
b3:function b3(){},
hg:function hg(){},
b6:function b6(){},
hT:function hT(){},
hZ:function hZ(){},
cV:function cV(){},
it:function it(){},
p:function p(){},
b8:function b8(){},
iL:function iL(){},
eH:function eH(){},
eI:function eI(){},
eS:function eS(){},
eT:function eT(){},
f3:function f3(){},
f4:function f4(){},
fa:function fa(){},
fb:function fb(){},
fw:function fw(){},
fx:function fx(){},
fy:function fy(a){this.a=a},
fz:function fz(){},
bZ:function bZ(){},
hU:function hU(){},
eu:function eu(){},
dt:function dt(){},
dI:function dI(){},
e2:function e2(){},
e5:function e5(){},
c8:function c8(){},
e6:function e6(){},
ef:function ef(){},
el:function el(){},
ik:function ik(){},
f_:function f_(){},
f0:function f0(){}},W={
kX:function(){var u=document.createElement("a")
return u},
fF:function(){var u=document.createElement("canvas")
return u},
mA:function(a,b,c){var u=document.body,t=(u&&C.p).ak(u,a,b,c)
t.toString
u=W.D
u=new H.d6(new W.ap(t),H.o(new W.fX(),{func:1,ret:P.R,args:[u]}),[u])
return H.e(u.gaL(u),"$iN")},
l5:function(a){H.e(a,"$ii")
return"wheel"},
cB:function(a){var u,t,s,r="element tag unavailable"
try{u=J.co(a)
t=u.geb(a)
if(typeof t==="string")r=u.geb(a)}catch(s){H.au(s)}return r},
jA:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
lE:function(a,b,c,d){var u=W.jA(W.jA(W.jA(W.jA(0,a),b),c),d),t=536870911&u+((67108863&u)<<3)
t^=t>>>11
return 536870911&t+((16383&t)<<15)},
a8:function(a,b,c,d,e){var u=W.lL(new W.jp(c),W.m)
if(u!=null&&!0)J.mk(a,b,u,!1)
return new W.jo(a,b,u,!1,[e])},
lD:function(a){var u=W.kX(),t=window.location
u=new W.bS(new W.jI(u,t))
u.eA(a)
return u},
ng:function(a,b,c,d){H.e(a,"$iN")
H.S(b)
H.S(c)
H.e(d,"$ibS")
return!0},
nh:function(a,b,c,d){var u,t,s
H.e(a,"$iN")
H.S(b)
H.S(c)
u=H.e(d,"$ibS").a
t=u.a
t.href=c
s=t.hostname
u=u.b
if(!(s==u.hostname&&t.port==u.port&&t.protocol==u.protocol))if(s==="")if(t.port===""){u=t.protocol
u=u===":"||u===""}else u=!1
else u=!1
else u=!0
return u},
lF:function(){var u=P.l,t=P.lb(C.m,u),s=H.x(C.m,0),r=H.o(new W.jQ(),{func:1,ret:u,args:[s]}),q=H.c(["TEMPLATE"],[u])
t=new W.jP(t,P.dQ(u),P.dQ(u),P.dQ(u),null)
t.eN(null,new H.hp(C.m,r,[s,u]),q,null)
return t},
lL:function(a,b){var u=$.a_
if(u===C.f)return a
return u.dC(a,b)},
u:function u(){},
fr:function fr(){},
dq:function dq(){},
ft:function ft(){},
ct:function ct(){},
ds:function ds(){},
bt:function bt(){},
bv:function bv(){},
c0:function c0(){},
bw:function bw(){},
bx:function bx(){},
cz:function cz(){},
fL:function fL(){},
U:function U(){},
cA:function cA(){},
fM:function fM(){},
b_:function b_(){},
b0:function b0(){},
fN:function fN(){},
fO:function fO(){},
fQ:function fQ(){},
dC:function dC(){},
fR:function fR(){},
dD:function dD(){},
dE:function dE(){},
fS:function fS(){},
fT:function fT(){},
jk:function jk(a,b){this.a=a
this.b=b},
N:function N(){},
fX:function fX(){},
m:function m(){},
i:function i(){},
aL:function aL(){},
h1:function h1(){},
h2:function h2(){},
h6:function h6(){},
aM:function aM(){},
h9:function h9(){},
c2:function c2(){},
bF:function bF(){},
cG:function cG(){},
b2:function b2(){},
dR:function dR(){},
hD:function hD(){},
hE:function hE(){},
hF:function hF(a){this.a=a},
hG:function hG(){},
hH:function hH(a){this.a=a},
aN:function aN(){},
hI:function hI(){},
a5:function a5(){},
ap:function ap(a){this.a=a},
D:function D(){},
cP:function cP(){},
aO:function aO(){},
hX:function hX(){},
i5:function i5(){},
i6:function i6(a){this.a=a},
i8:function i8(){},
aQ:function aQ(){},
ii:function ii(){},
aR:function aR(){},
ij:function ij(){},
aS:function aS(){},
im:function im(){},
io:function io(a){this.a=a},
aD:function aD(){},
bm:function bm(){},
ee:function ee(){},
iw:function iw(){},
ix:function ix(){},
d_:function d_(){},
aU:function aU(){},
aE:function aE(){},
iz:function iz(){},
iA:function iA(){},
iG:function iG(){},
aW:function aW(){},
aX:function aX(){},
iJ:function iJ(){},
iK:function iK(){},
bQ:function bQ(){},
iY:function iY(){},
jc:function jc(){},
bc:function bc(){},
d7:function d7(){},
d8:function d8(){},
jl:function jl(){},
ew:function ew(){},
jz:function jz(){},
eP:function eP(){},
jM:function jM(){},
jN:function jN(){},
jj:function jj(){},
jm:function jm(a){this.a=a},
jn:function jn(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
kF:function kF(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
jo:function jo(a,b,c,d,e){var _=this
_.b=a
_.c=b
_.d=c
_.e=d
_.$ti=e},
jp:function jp(a){this.a=a},
bS:function bS(a){this.a=a},
C:function C(){},
dZ:function dZ(a){this.a=a},
hR:function hR(a){this.a=a},
hQ:function hQ(a,b,c){this.a=a
this.b=b
this.c=c},
eX:function eX(){},
jK:function jK(){},
jL:function jL(){},
jP:function jP(a,b,c,d,e){var _=this
_.e=a
_.a=b
_.b=c
_.c=d
_.d=e},
jQ:function jQ(){},
jO:function jO(){},
dH:function dH(a,b,c){var _=this
_.a=a
_.b=b
_.c=-1
_.d=null
_.$ti=c},
aw:function aw(){},
jI:function jI(a,b){this.a=a
this.b=b},
fd:function fd(a){this.a=a},
jU:function jU(a){this.a=a},
ev:function ev(){},
ex:function ex(){},
ey:function ey(){},
ez:function ez(){},
eA:function eA(){},
eC:function eC(){},
eD:function eD(){},
eF:function eF(){},
eG:function eG(){},
eL:function eL(){},
eM:function eM(){},
eN:function eN(){},
eO:function eO(){},
eQ:function eQ(){},
eR:function eR(){},
eU:function eU(){},
eV:function eV(){},
eW:function eW(){},
de:function de(){},
df:function df(){},
eY:function eY(){},
eZ:function eZ(){},
f2:function f2(){},
f5:function f5(){},
f6:function f6(){},
dg:function dg(){},
dh:function dh(){},
f8:function f8(){},
f9:function f9(){},
fe:function fe(){},
ff:function ff(){},
fg:function fg(){},
fh:function fh(){},
fi:function fi(){},
fj:function fj(){},
fk:function fk(){},
fl:function fl(){},
fm:function fm(){},
fn:function fn(){}},O={
fI:function(a){var u=new O.X([a])
u.bd(a)
return u},
X:function X(a){var _=this
_.c=_.b=_.a=null
_.$ti=a},
cK:function cK(){this.b=this.a=null},
dV:function dV(){var _=this
_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
hw:function hw(a,b){this.a=a
this.b=b},
hx:function hx(){},
hy:function hy(a,b){this.a=a
this.b=b},
hz:function hz(){},
hA:function hA(a,b){this.a=a
this.b=b},
hB:function hB(){},
hq:function hq(a,b){var _=this
_.f=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
cJ:function cJ(){},
hr:function hr(a,b){var _=this
_.a=a
_.b=b
_.e=_.d=_.c=null},
b4:function b4(a,b){var _=this
_.f=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
ht:function ht(){var _=this
_.e=_.d=_.c=_.b=null},
hu:function hu(a,b){var _=this
_.f=_.ch=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
hv:function hv(a,b){var _=this
_.f=_.ch=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
e8:function e8(){var _=this
_.e=_.d=_.c=_.b=_.a=null},
ih:function ih(){this.c=this.b=this.a=null},
bP:function bP(){},
eg:function eg(){var _=this
_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
aV:function aV(){var _=this
_.f=_.e=_.d=_.c=_.b=_.a=null}},E={
cC:function(a){var u=new E.an()
u.a=""
u.b=!0
u.sez(0,O.fI(E.an))
u.y.aK(u.giS(),u.giV())
u.dy=u.dx=u.db=u.cy=u.cx=u.ch=u.Q=u.z=null
u.scM(0,a)
u.saJ(null)
u.sct(null)
return u},
mZ:function(a,b){var u=new E.i1(a)
u.ev(a,b)
return u},
n7:function(a,b,c,d,e){var u,t,s=J.T(a)
if(!!s.$ic0)return E.lv(a,!0,!0,!0,!1)
u=W.fF()
t=u.style
t.width="100%"
t.height="100%"
s.gc4(a).h(0,u)
return E.lv(u,!0,!0,!0,!1)},
lv:function(a,b,c,d,e){var u,t,s,r,q,p,o,n,m,l="mousemove",k=new E.ei(),j=H.e(C.h.cH(a,"webgl2",P.mI(["alpha",!0,"depth",!0,"stencil",!1,"antialias",!0])),"$ic8")
if(j==null)H.z(P.w("Failed to get the rendering context for WebGL."))
k.b=a
k.c=j
k.e=E.mZ(j,a)
u=new T.iC(j)
H.a9(j.getParameter(3379))
u.c=H.a9(j.getParameter(34076))
u.e=u.d=0
k.f=u
u=new X.en(a)
t=new X.hf()
t.c=new X.ar(!1,!1,!1)
t.shG(P.dQ(P.r))
u.b=t
t=new X.hJ(u)
t.f=0
t.r=V.bk()
t.x=V.bk()
t.ch=t.Q=1
u.c=t
t=new X.hk(u)
t.r=0
t.x=V.bk()
t.cy=t.cx=t.ch=t.Q=1
u.d=t
t=new X.iI(u)
t.f=V.bk()
t.r=V.bk()
u.e=t
u.x=u.r=u.f=!1
u.y=null
u.sff(H.c([],[[P.cY,P.P]]))
t=u.z
s=document
r=W.a5
q={func:1,ret:-1,args:[r]};(t&&C.a).h(t,W.a8(s,"contextmenu",H.o(u.gfW(),q),!1,r))
t=u.z
p=W.m
o={func:1,ret:-1,args:[p]};(t&&C.a).h(t,W.a8(a,"focus",H.o(u.gh5(),o),!1,p))
t=u.z;(t&&C.a).h(t,W.a8(a,"blur",H.o(u.gfQ(),o),!1,p))
t=u.z
n=W.b2
m={func:1,ret:-1,args:[n]};(t&&C.a).h(t,W.a8(s,"keyup",H.o(u.gh9(),m),!1,n))
t=u.z;(t&&C.a).h(t,W.a8(s,"keydown",H.o(u.gh7(),m),!1,n))
n=u.z;(n&&C.a).h(n,W.a8(a,"mousedown",H.o(u.ghd(),q),!1,r))
n=u.z;(n&&C.a).h(n,W.a8(a,"mouseup",H.o(u.ghh(),q),!1,r))
n=u.z;(n&&C.a).h(n,W.a8(a,l,H.o(u.ghf(),q),!1,r))
n=u.z
W.l5(a)
m=W.bc;(n&&C.a).h(n,W.a8(a,H.S(W.l5(a)),H.o(u.ghj(),{func:1,ret:-1,args:[m]}),!1,m))
m=u.z;(m&&C.a).h(m,W.a8(s,l,H.o(u.gfY(),q),!1,r))
m=u.z;(m&&C.a).h(m,W.a8(s,"mouseup",H.o(u.gh_(),q),!1,r))
r=u.z;(r&&C.a).h(r,W.a8(s,"pointerlockchange",H.o(u.ghl(),o),!1,p))
p=u.z
o=W.aX
s={func:1,ret:-1,args:[o]};(p&&C.a).h(p,W.a8(a,"touchstart",H.o(u.ghB(),s),!1,o))
p=u.z;(p&&C.a).h(p,W.a8(a,"touchend",H.o(u.ghx(),s),!1,o))
p=u.z;(p&&C.a).h(p,W.a8(a,"touchmove",H.o(u.ghz(),s),!1,o))
k.r=u
k.Q=!0
k.ch=!1
k.cx=new P.az(Date.now(),!1)
k.cy=0
k.dr()
return k},
fB:function fB(){},
an:function an(){var _=this
_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
i1:function i1(a){var _=this
_.a=a
_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=null},
i2:function i2(a){this.a=a},
i3:function i3(a){this.a=a},
i4:function i4(a){this.a=a},
ei:function ei(){var _=this
_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},
iF:function iF(a){this.a=a}},Z={
kE:function(a,b,c){var u=a.createBuffer()
a.bindBuffer(b,u)
a.bufferData(b,new Int16Array(H.ci(c)),35044)
a.bindBuffer(b,null)
return new Z.es(b,u)},
aG:function(a){return new Z.bn(a)},
es:function es(a,b){this.a=a
this.b=b},
du:function du(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=0},
cg:function cg(a){this.a=a},
bu:function bu(a,b,c){var _=this
_.a=a
_.b=null
_.c=b
_.d=c},
bG:function bG(a,b,c){this.a=a
this.b=b
this.c=c},
bn:function bn(a){this.a=a}},D={
K:function(){var u=new D.bD()
u.sa8(null)
u.saQ(null)
u.c=null
u.d=0
return u},
fH:function fH(){},
bD:function bD(){var _=this
_.d=_.c=_.b=_.a=null},
h_:function h_(a){this.a=a},
h0:function h0(a){this.a=a},
q:function q(){this.b=null},
bH:function bH(a){this.b=null
this.$ti=a},
bI:function bI(a){this.b=null
this.$ti=a},
y:function y(a,b,c,d){var _=this
_.c=a
_.d=b
_.e=c
_.b=null
_.$ti=d},
l1:function(a,b){var u,t,s=new D.bA()
s.c=new V.W(1,1,1)
s.a=V.na()
s.d=V.kD()
s.e=V.n9()
u=s.b
s.b=b
b.gm().h(0,s.geB())
t=new D.y("mover",u,s.b,[U.ab])
t.b=!0
s.aA(t)
if(!s.c.n(0,a)){u=s.c
s.c=a
t=new D.y("color",u,a,[V.W])
t.b=!0
s.aA(t)}return s},
bA:function bA(){var _=this
_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
ae:function ae(){},
dO:function dO(){var _=this
_.c=_.b=_.a=_.y=_.x=_.r=_.f=_.e=null},
e1:function e1(){},
ec:function ec(){}},X={dv:function dv(a,b){this.a=a
this.b=b},dN:function dN(a,b){this.a=a
this.b=b},hf:function hf(){var _=this
_.d=_.c=_.b=_.a=null},dS:function dS(a,b,c){var _=this
_.x=a
_.c=b
_.d=c
_.b=null},hk:function hk(a){var _=this
_.a=a
_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},ar:function ar(a,b,c){this.a=a
this.b=b
this.c=c},aB:function aB(a,b,c,d,e){var _=this
_.x=a
_.y=b
_.z=c
_.c=d
_.d=e
_.b=null},hJ:function hJ(a){var _=this
_.a=a
_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},cL:function cL(a,b,c){var _=this
_.x=a
_.c=b
_.d=c
_.b=null},hY:function hY(){},d3:function d3(a,b,c,d){var _=this
_.y=a
_.z=b
_.c=c
_.d=d
_.b=null},iI:function iI(a){var _=this
_.a=a
_.y=_.x=_.r=_.f=_.d=_.c=_.b=null},en:function en(a){var _=this
_.a=a
_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},
kq:function(a,b){var u=new X.h8(),t=new V.a1(0,0,0,1)
u.a=t
u.b=a
u.c=2000
u.d=!0
u.e=0
u.f=!1
t=V.e4()
u.r=t
return u},
ll:function(a){var u,t,s=new X.e0()
s.c=1.0471975511965976
s.d=0.1
s.e=2000
if(null!=a){u=s.b
s.b=a
if(a!=null)a.gm().h(0,s.geR())
t=new D.y("mover",u,s.b,[U.ab])
t.b=!0
s.Z(t)}t=s.c
if(!(Math.abs(t-1.0471975511965976)<$.I().a)){s.c=1.0471975511965976
t=new D.y("fov",t,1.0471975511965976,[P.B])
t.b=!0
s.Z(t)}t=s.d
if(!(Math.abs(t-0.1)<$.I().a)){s.d=0.1
t=new D.y("near",t,0.1,[P.B])
t.b=!0
s.Z(t)}t=s.e
if(!(Math.abs(t-2000)<$.I().a)){s.e=2000
t=new D.y("far",t,2000,[P.B])
t.b=!0
s.Z(t)}return s},
fA:function fA(){var _=this
_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
c_:function c_(){},
h8:function h8(){var _=this
_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
ha:function ha(){this.b=this.a=null},
e0:function e0(){var _=this
_.f=_.e=_.d=_.c=_.b=_.a=null},
cZ:function cZ(){}},V={
mx:function(a,b,c){var u,t,s,r,q,p,o,n
a*=6
u=C.c.aV(a)
t=a-u
s=b*(1-c)
r=b*(1-c*t)
q=b*(1-c*(1-t))
switch(u){case 0:p=b>1?1:b
if(q<0)o=0
else o=q>1?1:q
if(s<0)n=0
else n=s>1?1:s
return new V.W(p,o,n)
case 1:if(r<0)p=0
else p=r>1?1:r
o=b>1?1:b
if(s<0)n=0
else n=s>1?1:s
return new V.W(p,o,n)
case 2:if(s<0)p=0
else p=s>1?1:s
o=b>1?1:b
if(q<0)n=0
else n=q>1?1:q
return new V.W(p,o,n)
case 3:if(s<0)p=0
else p=s>1?1:s
if(r<0)o=0
else o=r>1?1:r
n=b>1?1:b
return new V.W(p,o,n)
case 4:if(q<0)p=0
else p=q>1?1:q
if(s<0)o=0
else o=s>1?1:s
n=b>1?1:b
return new V.W(p,o,n)
default:p=b>1?1:b
if(s<0)o=0
else o=s>1?1:s
if(r<0)n=0
else n=r>1?1:r
return new V.W(p,o,n)}},
kj:function(a,b,c){var u
if(c<=b)return b
u=c-b
a=C.c.bB(a-b,u)
return(a<0?a+u:a)+b},
M:function(a,b,c){if(a==null)return C.e.an("null",c)
return C.e.an(C.c.ee(Math.abs(a-0)<$.I().a?0:a,b),c+b+1)},
cn:function(a,b,c){var u,t,s,r,q,p=H.c([],[P.l])
for(u=a.length,t=0,s=0;s<a.length;a.length===u||(0,H.v)(a),++s){r=V.M(a[s],b,c)
t=Math.max(t,r.length)
C.a.h(p,r)}for(q=p.length-1;q>=0;--q){if(q>=p.length)return H.h(p,q)
C.a.l(p,q,C.e.an(p[q],t))}return p},
dl:function(a){return C.c.ji(Math.pow(2,C.k.aV(Math.log(H.nT(a))/Math.log(2))))},
bL:function(){var u=$.hC
return u==null?$.hC=V.b5(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1):u},
b5:function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){return new V.a4(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p)},
mN:function(a,b,c){return V.b5(1,0,0,a,0,1,0,b,0,0,1,c,0,0,0,1)},
mM:function(a,b,c){return V.b5(a,0,0,0,0,b,0,0,0,0,c,0,0,0,0,1)},
lf:function(a){var u=Math.cos(a),t=Math.sin(a)
return V.b5(1,0,0,0,0,u,-t,0,0,t,u,0,0,0,0,1)},
lg:function(a){var u=Math.cos(a),t=Math.sin(a)
return V.b5(u,0,-t,0,0,1,0,0,t,0,u,0,0,0,0,1)},
lh:function(a){var u=Math.cos(a),t=Math.sin(a)
return V.b5(u,-t,0,0,t,u,0,0,0,0,1,0,0,0,0,1)},
li:function(a,b,c,d){d=V.kD()
return V.le(V.lo(),d,new V.L(a,b,c))},
le:function(a,b,c){var u=c.u(0,Math.sqrt(c.w(c))),t=b.b7(u),s=t.u(0,Math.sqrt(t.w(t))),r=u.b7(s),q=new V.L(a.a,a.b,a.c),p=s.N(0).w(q),o=r.N(0).w(q),n=u.N(0).w(q)
return V.b5(s.a,r.a,u.a,p,s.b,r.b,u.b,o,s.c,r.c,u.c,n,0,0,0,1)},
bk:function(){var u=$.ln
return u==null?$.ln=new V.a6(0,0):u},
lo:function(){var u=$.cQ
return u==null?$.cQ=new V.ao(0,0,0):u},
e4:function(){var u=$.cT
return u==null?$.cT=V.e3(0,0,1,1):u},
e3:function(a,b,c,d){if(c<0){a+=c
c=-c}if(d<0){b+=d
d=-d}return new V.bN(a,b,c,d)},
er:function(){var u=$.lB
return u==null?$.lB=new V.L(0,0,0):u},
n9:function(){var u=$.j0
return u==null?$.j0=new V.L(-1,0,0):u},
kD:function(){var u=$.j1
return u==null?$.j1=new V.L(0,1,0):u},
na:function(){var u=$.j2
return u==null?$.j2=new V.L(0,0,1):u},
W:function W(a,b,c){this.a=a
this.b=b
this.c=c},
a1:function a1(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
fZ:function fZ(a){this.a=a},
dX:function dX(a,b,c,d,e,f,g,h,i){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.x=h
_.y=i},
a4:function a4(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){var _=this
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
ao:function ao(a,b,c){this.a=a
this.b=b
this.c=c},
bl:function bl(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
bN:function bN(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
Q:function Q(a,b){this.a=a
this.b=b},
L:function L(a,b,c){this.a=a
this.b=b
this.c=c},
aj:function(a){var u=new V.i9()
u.ew(a)
return u},
fs:function fs(){},
bi:function bi(){},
dU:function dU(){},
bj:function bj(){this.a=null},
i9:function i9(){this.a=null},
cX:function cX(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
ej:function ej(a,b,c){this.a=a
this.b=b
this.c=c},
d2:function d2(a){this.b=a
this.c=null},
iH:function iH(){this.c=this.b=this.a=null},
d4:function d4(a){this.b=a
this.a=this.c=null},
og:function(a){P.n8(C.L,new V.kg(a))},
n0:function(a){var u=new V.id()
u.ex(a,!0)
return u},
fD:function fD(a){this.a=a
this.c=this.b=null},
fE:function fE(a){this.a=a},
kg:function kg(a){this.a=a},
id:function id(){this.b=this.a=null},
ig:function ig(a){this.a=a},
ie:function ie(a){this.a=a}},U={
kn:function(){var u=new U.fJ()
u.a=!0
u.b=1e12
u.c=-1e12
u.d=0
u.e=100
u.r=u.x=u.f=0
return u},
ko:function(a){var u=new U.cy()
u.a=a
return u},
l7:function(){var u=new U.cF()
u.bd(U.ab)
u.aK(u.geD(),u.ghp())
u.e=null
u.f=V.bL()
u.r=0
return u},
fJ:function fJ(){var _=this
_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
cy:function cy(){this.b=this.a=null},
cF:function cF(){var _=this
_.c=_.b=_.a=_.r=_.f=_.e=null},
ab:function ab(){},
cU:function cU(){var _=this
_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
eo:function eo(){var _=this
_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.e=_.d=_.c=_.b=_.a=null},
ep:function ep(){var _=this
_.fx=_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
eq:function eq(){var _=this
_.r=_.f=_.e=_.d=_.c=_.b=_.a=null}},M={
l0:function(){var u,t,s,r,q,p,o,n,m,l=null,k=new M.dA()
k.a=!0
u=E.cC(l)
t=F.kx()
s=t.a
r=new V.L(-1,-1,1)
r=r.u(0,Math.sqrt(r.w(r)))
q=s.bm(new V.bl(1,2,4,6),new V.a1(1,0,0,1),new V.ao(-1,-1,0),new V.a6(0,1),r,l)
s=t.a
r=new V.L(1,-1,1)
r=r.u(0,Math.sqrt(r.w(r)))
p=s.bm(new V.bl(0,3,4,6),new V.a1(0,0,1,1),new V.ao(1,-1,0),new V.a6(1,1),r,l)
s=t.a
r=new V.L(1,1,1)
r=r.u(0,Math.sqrt(r.w(r)))
o=s.bm(new V.bl(0,2,5,6),new V.a1(0,1,0,1),new V.ao(1,1,0),new V.a6(1,0),r,l)
s=t.a
r=V.bk()
n=new V.L(-1,1,1)
n=n.u(0,Math.sqrt(n.w(n)))
m=s.bm(new V.bl(0,2,4,7),new V.a1(1,1,0,1),new V.ao(-1,1,0),r,n,l)
t.d.ik(H.c([q,p,o,m],[F.aF]))
t.aG()
u.scM(0,t)
k.e=u
k.saT(l)
k.saI(0,l)
k.saJ(l)
return k},
l6:function(){var u,t=new M.dF()
t.a=!0
t.sf1(0,O.fI(E.an))
t.e.aK(t.gfS(),t.gfU())
t.y=t.x=t.r=t.f=null
u=X.kq(!0,null)
t.saT(null)
t.saI(0,u)
return t},
dy:function dy(){var _=this
_.c=_.b=_.a=_.r=_.f=_.e=null},
dA:function dA(){var _=this
_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
dF:function dF(){var _=this
_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
ax:function ax(){},
lV:function(){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9="testCanvas",c0=null,c1="modifiers",c2=V.n0("Test 043"),c3=W.fF()
c3.className="pageLargeCanvas"
c3.id=b9
c2.a.appendChild(c3)
u=[P.l]
c2.dA(H.c(["Test of the color picker, used to read the color of a pixel from a texture. It uses a back buffer with solid colored entities to pick which one to move. Also testing out the ability to screen shot a back buffer."],u))
c2.ii(H.c(["buttons"],u))
c2.dA(H.c(["\xab[Back to Tests|../]"],u))
u=document
t=u.getElementById(b9)
if(t==null)H.z(P.w("Failed to find an element with the identifier, testCanvas."))
s=E.n7(t,!0,!0,!0,!1)
r=U.l7()
c2=s.r
q=new U.ep()
p=U.kn()
p.scF(0,!0)
p.scq(6.283185307179586)
p.scs(0)
p.sae(0,0)
p.scr(100)
p.sS(0)
p.sc7(0.5)
q.b=p
o=q.gaP()
p.gm().h(0,o)
p=U.kn()
p.scF(0,!0)
p.scq(6.283185307179586)
p.scs(0)
p.sae(0,0)
p.scr(100)
p.sS(0)
p.sc7(0.5)
q.c=p
p.gm().h(0,o)
q.d=null
q.r=q.f=q.e=!1
q.y=q.x=2.5
q.Q=4
q.ch=q.cx=!1
q.db=q.cy=0
q.dx=null
q.dy=0
q.fx=q.fr=null
n=new X.ar(!1,!1,!1)
m=q.d
q.d=n
p=[X.ar]
o=new D.y(c1,m,n,p)
o.b=!0
q.E(o)
o=q.f
if(o!==!1){q.f=!1
o=new D.y("invertX",o,!1,[P.R])
o.b=!0
q.E(o)}o=q.r
if(o!==!1){q.r=!1
o=new D.y("invertY",o,!1,[P.R])
o.b=!0
q.E(o)}q.aF(c2)
r.h(0,q)
c2=s.r
q=new U.eo()
o=U.kn()
o.scF(0,!0)
o.scq(6.283185307179586)
o.scs(0)
o.sae(0,0)
o.scr(100)
o.sS(0)
o.sc7(0.2)
q.b=o
o.gm().h(0,q.gaP())
q.c=null
q.d=!1
q.e=2.5
q.r=4
q.x=q.y=!1
q.z=0
q.Q=null
q.ch=0
q.cy=q.cx=null
n=new X.ar(!0,!1,!1)
m=q.c
q.c=n
o=new D.y(c1,m,n,p)
o.b=!0
q.E(o)
q.aF(c2)
r.h(0,q)
c2=s.r
q=new U.eq()
q.c=0.01
q.e=q.d=0
n=new X.ar(!1,!1,!1)
q.b=n
o=new D.y(c1,c0,n,p)
o.b=!0
q.E(o)
q.aF(c2)
r.h(0,q)
r.h(0,U.ko(V.mN(0,0,5)))
l=X.ll(r)
k=s.f.dX("../resources/diceColor")
j=new O.dV()
c2=V.a4
j.seY(O.fI(c2))
j.e.aK(j.gfM(),j.gfO())
q=new O.b4(j,"emission")
q.c=new A.ah(!1,!1,!1)
q.f=new V.W(0,0,0)
j.f=q
q=new O.b4(j,"ambient")
q.c=new A.ah(!1,!1,!1)
q.f=new V.W(0,0,0)
j.r=q
q=new O.b4(j,"diffuse")
q.c=new A.ah(!1,!1,!1)
q.f=new V.W(0,0,0)
j.x=q
q=new O.b4(j,"invDiffuse")
q.c=new A.ah(!1,!1,!1)
q.f=new V.W(0,0,0)
j.y=q
q=new O.hv(j,"specular")
q.c=new A.ah(!1,!1,!1)
q.f=new V.W(0,0,0)
q.ch=100
j.z=q
q=new O.hr(j,"bump")
q.c=new A.ah(!1,!1,!1)
j.Q=q
j.ch=null
q=new O.b4(j,"reflect")
q.c=new A.ah(!1,!1,!1)
q.f=new V.W(0,0,0)
j.cx=q
q=new O.hu(j,"refract")
q.c=new A.ah(!1,!1,!1)
q.f=new V.W(0,0,0)
q.ch=1
j.cy=q
q=new O.hq(j,"alpha")
q.c=new A.ah(!1,!1,!1)
q.f=1
j.db=q
q=new D.dO()
q.bd(D.ae)
q.sfb(H.c([],[D.bA]))
q.shD(H.c([],[D.e1]))
q.shY(H.c([],[D.ec]))
q.y=q.x=null
q.cK(q.gfK(),q.ghn(),q.ghr())
j.dx=q
o=new O.ht()
o.b=new V.a1(0,0,0,0)
o.c=1
o.d=10
o.e=!1
j.dy=o
o=q.x
q=o==null?q.x=D.K():o
q.h(0,j.ghM())
q=j.dx
o=q.y
q=o==null?q.y=D.K():o
q.h(0,j.ga7())
j.fr=null
q=j.dx
o=U.ko(V.li(-1,-1,-1,c0))
q.h(0,D.l1(new V.W(1,0.9,0.9),o))
q=j.dx
o=U.ko(V.li(1,1,2,c0))
q.h(0,D.l1(new V.W(0.2,0.2,0.35),o))
q=j.r
q.sb5(0,new V.W(0.2,0.2,0.2))
j.r.sbb(k)
q=j.x
q.sb5(0,new V.W(0.8,0.8,0.8))
j.x.sbb(k)
q=j.z
q.sb5(0,new V.W(0.7,0.7,0.7))
q=j.z
q.bY(new A.ah(!0,!1,q.c.c))
q.du(10)
j.Q.sbb(s.f.dX("../resources/diceBumpMap"))
i=H.c([],[U.cU])
q=V.a1
h=H.c([],[q])
g=F.kx()
F.di(g,c0,c0,1,1,1,0,0,1)
F.di(g,c0,c0,1,1,0,1,0,3)
F.di(g,c0,c0,1,1,0,0,1,2)
F.di(g,c0,c0,1,1,-1,0,0,0)
F.di(g,c0,c0,1,1,0,-1,0,0)
F.di(g,c0,c0,1,1,0,0,-1,3)
g.aG()
f=E.cC(g)
e=E.cC(c0)
d=E.cC(c0)
for(o=[P.B],q=[q],c=-1.6;c<=1.7;c+=0.8)for(b=-1.6;b<=1.7;b+=0.8)for(a=-1.6;a<=1.7;a+=0.8){a0=new V.a4(1,0,0,c,0,1,0,b,0,0,1,a,0,0,0,1).p(0,new V.a4(0.2,0,0,0,0,0.2,0,0,0,0,0.2,0,0,0,0,1))
r=new U.cU()
r.r=r.f=r.e=r.d=r.c=r.b=r.a=0
r.seg(0)
r.se6(0,0)
r.se9(0)
a1=r.d
if(!(Math.abs(a1-0)<$.I().a)){r.d=0
a1=new D.y("deltaYaw",a1,0,o)
a1.b=!0
a2=r.y
if(a2!=null)a2.v(a1)}r.sc9(0)
r.sca(0)
C.a.h(i,r)
a3=U.l7()
a1=H.ad(a3,"X",0)
H.E(r,a1)
a2=[a1]
if(H.A(a3.av(H.c([r],a2)))){a4=a3.a
a5=a4.length
C.a.h(a4,r)
a4=H.k(H.c([r],a2),"$id",[a1],"$ad")
a6=a3.c
if(a6!=null)a6.$2(a5,a4)}a4=new U.cy()
a4.sV(0,a0)
H.E(a4,a1)
if(H.A(a3.av(H.c([a4],a2)))){a6=a3.a
a5=a6.length
C.a.h(a6,a4)
a1=H.k(H.c([a4],a2),"$id",[a1],"$ad")
a2=a3.c
if(a2!=null)a2.$2(a5,a1)}a7=E.cC(c0)
a7.saJ(j)
a7.sct(a3)
a1=a7.y
a2=H.x(a1,0)
H.E(f,a2)
a4=[a2]
if(H.A(a1.av(H.c([f],a4)))){a6=a1.a
a5=a6.length
C.a.h(a6,f)
a2=H.k(H.c([f],a4),"$id",[a2],"$ad")
a1=a1.c
if(a1!=null)a1.$2(a5,a2)}a1=e.y
a2=H.x(a1,0)
H.E(a7,a2)
a4=[a2]
if(H.A(a1.av(H.c([a7],a4)))){a6=a1.a
a5=a6.length
C.a.h(a6,a7)
a2=H.k(H.c([a7],a4),"$id",[a2],"$ad")
a1=a1.c
if(a1!=null)a1.$2(a5,a2)}a1=V.mx(h.length/125,1,1)
k=new V.a1(Math.floor(a1.a*255)/255,Math.floor(a1.b*255)/255,Math.floor(a1.c*255)/255,Math.floor(255)/255)
C.a.h(h,k)
a8=E.cC(c0)
a1=new O.ih()
a1.b=k
a8.saJ(a1)
a8.sct(a3)
a1=a8.y
a2=H.x(a1,0)
H.E(f,a2)
a4=[a2]
if(H.A(a1.av(H.c([f],a4)))){a6=a1.a
a5=a6.length
C.a.h(a6,f)
a2=H.k(H.c([f],a4),"$id",[a2],"$ad")
a1=a1.c
if(a1!=null)a1.$2(a5,a2)}a1=d.y
a2=H.x(a1,0)
H.E(a8,a2)
a4=[a2]
if(H.A(a1.av(H.c([a8],a4)))){a6=a1.a
a5=a6.length
C.a.h(a6,a8)
a2=H.k(H.c([a8],a4),"$id",[a2],"$ad")
a1=a1.c
if(a1!=null)a1.$2(a5,a2)}}a9=new X.fA()
a9.d=a9.c=a9.b=a9.a=512
a9.e=!0
a9.f=!1
a9.x=a9.r=1
a9.ch=T.lt(c0)
a9.cx=new V.a1(0,0,0,1)
a9.cy=!0
a9.db=2000
a9.dx=!0
a9.dy=V.e4()
a9.sap(0,512)
a9.sal(0,512)
k=new V.a1(0,0,0,1)
if(!a9.cx.n(0,k)){m=a9.cx
a9.cx=k
a1=new D.y("color",m,k,q)
a1.b=!0
a9.Z(a1)}a1=a9.db
if(!(Math.abs(a1-2000)<$.I().a)){a9.db=2000
a1=new D.y("depth",a1,2000,o)
a1.b=!0
a9.Z(a1)}if(!a9.f){a9.f=!0
a1=new D.y("autoResize",!1,!0,[P.R])
a1.b=!0
a9.Z(a1)}a1=a9.r
if(!(Math.abs(a1-0.5)<$.I().a)){a9.r=0.5
a1=new D.y("autoResizeScalarX",a1,0.5,o)
a1.b=!0
a9.Z(a1)}a1=a9.x
if(!(Math.abs(a1-0.5)<$.I().a)){a9.x=0.5
o=new D.y("autoResizeScalarY",a1,0.5,o)
o.b=!0
a9.Z(o)}b0=V.e4()
if(!J.V(a9.dy,b0)){m=a9.dy
a9.dy=b0
o=new D.y("region",m,b0,[V.bN])
o.b=!0
a9.Z(o)}b1=M.l6()
b1.e.h(0,d)
b1.saI(0,a9)
b1.saT(l)
b2=X.kq(!1,c0)
b3=M.l6()
b3.e.h(0,e)
b3.saI(0,b2)
b3.saT(l)
o=s.f.dY("../resources/maskonaive",".jpg")
b4=M.l0()
a1=new O.e8()
a1.b=1.0471975511965976
a1.d=new V.W(1,1,1)
m=a1.c
a1.c=o
o.gm().h(0,a1.ga7())
o=new D.y("boxTexture",m,a1.c,[T.d1])
o.b=!0
a1.A(o)
b4.saJ(a1)
b4.saI(0,b2)
b4.saT(l)
b5=new O.eg()
b5.a=new V.a1(0,0,0,0)
b5.sfe(O.fI(O.aV))
b5.c.aK(b5.gh1(),b5.gh3())
b5.d=0
b5.e=null
b5.r=b5.f=C.i
b6=new V.a1(0,0,0,0)
if(!b5.a.n(0,b6)){m=b5.a
b5.a=b6
q=new D.y("backColor",m,b6,q)
q.b=!0
b5.A(q)}q=b5.f
if(q!==C.i){b5.f=C.i
q=new D.y("blend",q,C.i,[A.by])
q.b=!0
b5.A(q)}q=b5.c
o=new O.aV()
o.sao(c0)
a0=V.bL()
if(!J.V(o.b,a0)){m=o.b
o.b=a0
c2=new D.y("colorMatrix",m,a0,[c2])
c2.b=!0
o.A(c2)}b7=V.e4()
if(!J.V(o.c,b7)){m=o.c
o.c=b7
c2=new D.y("source",m,b7,[V.bN])
c2.b=!0
o.A(c2)}o.sdG(0,c0)
if(o.e!==!1){o.e=!1
c2=new D.y("flip",!0,!1,[P.R])
c2.b=!0
o.A(c2)}o.f=null
o.sdG(0,V.e3(0,0.75,0.25,0.25))
o.sao(a9.ch)
q.h(0,o)
b8=M.l0()
b8.saJ(b5)
b8.saI(0,b2)
c2=s.y
if(c2==null)c2=s.y=D.K()
c2.h(0,new M.kb(i))
c2=s.f
q=s.r
o=a9.ch
a1=new T.dw()
a1.a=c2
a1.z=4
a1.ch=a1.Q=!1
n=new X.ar(!1,!1,!1)
a1.c=n
c2=new D.y(c1,c0,n,p)
c2.b=!0
a1.bf(c2)
c2=a1.d
if(c2!==o){if(c2!=null)c2.gm().M(0,a1.gcX())
m=a1.d
a1.d=o
o.gm().h(0,a1.gcX())
c2=new D.y("texture",m,a1.d,[T.d0])
c2.b=!0
a1.bf(c2)}a1.aF(q)
c2=a1.x
if(c2==null)c2=a1.x=D.K()
c2.h(0,new M.kc(h,i))
c2=M.ax
q=H.c([b1,b4,b3,b8],[c2])
p=new M.dy()
p.bd(c2)
p.e=!0
p.f=!1
p.r=null
p.aK(p.ght(),p.ghv())
p.aa(0,q)
c2=s.d
if(c2!==p){if(c2!=null)c2.gm().M(0,s.gcU())
s.d=p
p.gm().h(0,s.gcU())
s.cV()}c2=new V.fD("buttons")
u=u.getElementById("buttons")
c2.b=u
if(u==null)H.z("Failed to find buttons for ButtonGroup")
c2.seZ(H.c([],[W.bv]))
c2.ih(0,"Back target snapshot",new M.kd(s,a9))
V.og(s)},
kb:function kb(a){this.a=a},
kc:function kc(a,b){this.a=a
this.b=b},
kd:function kd(a,b){this.a=a
this.b=b}},A={
mK:function(a,b){var u=a.b8,t=new A.dW(b,u)
t.be(b,u)
t.eu(a,b)
return t},
mL:function(a,b,c,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e="MaterialLight_"+a1.gas(a1)+a2.gas(a2)+a3.gas(a3)+a4.gas(a4)+a5.gas(a5)+a6.gas(a6)+a7.gas(a7)+a8.gas(a8)+a9.gas(a9)+"_"
e+=a?"1":"0"
e+=b?"1":"0"
e+=c?"1":"0"
e=e+"0_"+a0
u=b0.length
if(u>0){e+="_Dir"
for(t=0;t<b0.length;b0.length===u||(0,H.v)(b0),++t)e+="_"+H.j(b0[t].a)}u=b1.length
if(u>0){e+="_Point"
for(t=0;t<b1.length;b1.length===u||(0,H.v)(b1),++t)e+="_"+H.j(b1[t].a)}u=b2.length
if(u>0){e+="_Spot"
for(t=0;t<b2.length;b2.length===u||(0,H.v)(b2),++t)e+="_"+H.j(b2[t].a)}for(u=b0.length,s=0,r=!1,t=0;t<u;++t,r=!0)s+=b0[t].b
for(u=b1.length,t=0;t<u;++t,r=!0)s+=b1[t].b
for(q=b2.length,t=0;t<q;++t,r=!0)s+=b2[t].b
if(!a7.a)q=a7.c
else q=!0
if(!q)if(!a8.a){q=a8.c
p=q}else p=!0
else p=!0
if(!a2.a)q=a2.c
else q=!0
if(!q){if(!a3.a)q=a3.c
else q=!0
if(!q){if(!a4.a)q=a4.c
else q=!0
if(!q)if(!a5.a)q=a5.c
else q=!0
else q=!0
o=q}else o=!0}else o=!0
q=!a5.a
if(q)n=a5.c
else n=!0
m=n||u>0||p
if(!a3.a)u=a3.c
else u=!0
if(!u){if(!a4.a)u=a4.c
else u=!0
if(!u){if(q)u=a5.c
else u=!0
l=u}else l=!0}else l=!0
if(!l){if(!a6.a)u=a6.c
else u=!0
k=u||p}else k=!0
if(!a6.a)j=a6.c
else j=!0
i=a1.c||a2.c||a3.c||a4.c||a5.c||a6.c||a7.c||a8.c||a9.c
h=a0>0
g=k||j||m||!1
b=b&&i
f=$.aq()
if(k){u=$.br()
f=new Z.bn(f.a|u.a)}if(j){u=$.bq()
f=new Z.bn(f.a|u.a)}if(i){u=$.bs()
f=new Z.bn(f.a|u.a)}if(h){u=$.bp()
f=new Z.bn(f.a|u.a)}return new A.hs(a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,s,p,l,p,r,g,!0,!1,!1,o,r,m,k,j,!1,i,h,!1,b,c,!1,a0,e.charCodeAt(0)==0?e:e,f)},
jY:function(a,b,c){if(b.a)a.a+="uniform vec3 "+c+"Clr;\n"
if(b.c)a.a+="uniform samplerCube "+c+"Txt;\n"},
jZ:function(a,b,c){var u,t="Txt, txtCube).rgb;\n"
A.jY(a,b,c)
u=a.a+="\n"
u+="vec3 "+c+"Color;\n"
a.a=u
a.a=u+"\n"
u=a.a+="void set"+A.kh(c)+"Color()\n"
u=a.a=u+"{\n"
if(b.a)if(b.c){u+="   "+c+"Color = "+c+"Clr*textureCube("+c+t
a.a=u}else{u+="   "+c+"Color = "+c+"Clr;\n"
a.a=u}else if(b.c){u+="   "+c+"Color = textureCube("+c+t
a.a=u}a.a=u+"}\n"},
nt:function(a,b){var u,t=a.a,s=t.a
if(!s)u=t.c
else u=!0
if(!u)return
u=b.a+="// === Emission ===\n"
b.a=u+"\n"
A.jY(b,t,"emission")
u=b.a+="\n"
u+="vec3 emissionColor()\n"
b.a=u
u=b.a=u+"{\n"
if(s)if(t.c){t=u+"   return emissionClr*textureCube(emissionTxt, txtCube).rgb;\n"
b.a=t}else{t=u+"   return emissionClr;\n"
b.a=t}else if(t.c){t=u+"   return textureCube(emissionTxt, txtCube).rgb;\n"
b.a=t}else t=u
t+="}\n"
b.a=t
b.a=t+"\n"},
nq:function(a,b){var u,t=a.b
if(!t.a)u=t.c
else u=!0
if(!u)return
u=b.a+="// === Ambient ===\n"
b.a=u+"\n"
A.jZ(b,t,"ambient")
b.a+="\n"},
nr:function(a,b){var u,t=a.c
if(!t.a)u=t.c
else u=!0
if(!u)return
u=b.a+="// === Diffuse ===\n"
b.a=u+"\n"
A.jZ(b,t,"diffuse")
t=b.a+="\n"
t+="vec3 diffuse(vec3 norm, vec3 litVec)\n"
b.a=t
t+="{\n"
b.a=t
t+="   float scalar = dot(norm, -litVec);\n"
b.a=t
t+="   if(scalar < 0.0) return vec3(0.0, 0.0, 0.0);\n"
b.a=t
t+="   return diffuseColor*scalar;\n"
b.a=t
t+="}\n"
b.a=t
b.a=t+"\n"},
nu:function(a,b){var u,t=a.d
if(!t.a)u=t.c
else u=!0
if(!u)return
u=b.a+="// === Inverse Diffuse ===\n"
b.a=u+"\n"
A.jZ(b,t,"invDiffuse")
t=b.a+="\n"
t+="vec3 invDiffuse(vec3 norm, vec3 litVec)\n"
b.a=t
t+="{\n"
b.a=t
t+="   float scalar = 1.0 - clamp(dot(norm, -litVec), 0.0, 1.0);\n"
b.a=t
t+="   if(scalar < 0.0) return vec3(0.0, 0.0, 0.0);\n"
b.a=t
t+="   return invDiffuseColor*scalar;\n"
b.a=t
t+="}\n"
b.a=t
b.a=t+"\n"},
nA:function(a,b){var u,t=a.e
if(!t.a)u=t.c
else u=!0
if(!u)return
u=b.a+="// === Specular ===\n"
u+="\n"
b.a=u
b.a=u+"uniform float shininess;\n"
A.jZ(b,t,"specular")
t=b.a+="\n"
t+="vec3 specular(vec3 norm, vec3 litVec)\n"
b.a=t
t+="{\n"
b.a=t
t+="   if(dot(norm, -litVec) < 0.0) return vec3(0.0, 0.0, 0.0);\n"
b.a=t
t+="   vec3 lightRef = normalize(reflect(litVec, norm));\n"
b.a=t
t+="   float scalar = dot(lightRef, -normalize(viewPos));\n"
b.a=t
t+="   if(scalar < 0.0) return vec3(0.0, 0.0, 0.0);\n"
b.a=t
t+="   return specularColor*pow(scalar, shininess);\n"
b.a=t
t+="}\n"
b.a=t
b.a=t+"\n"},
nw:function(a,b){var u,t,s
if(!a.k3)return
u=b.a+="// === Normal ===\n"
u=b.a=u+"\n"
if(a.f.c){u+="uniform samplerCube bumpTxt;\n"
b.a=u
u+="\n"
b.a=u}u+="vec3 normal()\n"
b.a=u
u=b.a=u+"{\n"
t=a.f
s=t.a
if(!s)t=t.c
else t=!0
if(!t||s)u=b.a=u+"   return normalize(normalVec);\n"
else{u+="   vec3 color = textureCube(bumpTxt, txtCube).rgb;\n"
b.a=u
u+="   vec3 n = normalize(normalVec);\n"
b.a=u
u+="   vec3 b = normalize(binormalVec);\n"
b.a=u
u+="   vec3 c = normalize(cross(b, n));\n"
b.a=u
u+="   b = cross(n, c);\n"
b.a=u
u+="   mat3 mat = mat3( b.x,  b.y,  b.z,\n"
b.a=u
u+="                   -c.x, -c.y, -c.z,\n"
b.a=u
u+="                    n.x,  n.y,  n.z);\n"
b.a=u
u=b.a=u+"   return mat * normalize(2.0*color - 1.0);\n"}u+="}\n"
b.a=u
b.a=u+"\n"},
ny:function(a,b){var u,t=a.r,s=t.a
if(!s)u=t.c
else u=!0
if(!u)return
u=b.a+="// === Reflection ===\n"
b.a=u+"\n"
A.jY(b,t,"reflect")
u=b.a+="\n"
u+="vec3 reflect(vec3 refl)\n"
b.a=u
u=b.a=u+"{\n"
if(s)if(t.c){t=u+"   vec3 scalar = reflectClr*textureCube(reflectTxt, txtCube).rgb;\n"
b.a=t}else{t=u+"   vec3 scalar = reflectClr;\n"
b.a=t}else if(t.c){t=u+"   vec3 scalar = textureCube(reflectTxt, txtCube).rgb;\n"
b.a=t}else t=u
t+="   vec3 invRefl = vec3(invViewMat*vec4(refl, 0.0));\n"
b.a=t
t+="   return scalar*textureCube(envSampler, invRefl).rgb;\n"
b.a=t
t+="}\n"
b.a=t
b.a=t+"\n"},
nz:function(a,b){var u,t=a.x,s=t.a
if(!s)u=t.c
else u=!0
if(!u)return
u=b.a+="// === Refraction ===\n"
b.a=u+"\n"
A.jY(b,t,"refract")
u=b.a+="uniform float refraction;\n"
u+="\n"
b.a=u
u+="vec3 refract(vec3 refl)\n"
b.a=u
u=b.a=u+"{\n"
if(s)if(t.c){t=u+"   vec3 scalar = refractClr*textureCube(refractTxt, txtCube).rgb;\n"
b.a=t}else{t=u+"   vec3 scalar = refractClr;\n"
b.a=t}else if(t.c){t=u+"   vec3 scalar = textureCube(refractTxt, txtCube).rgb;\n"
b.a=t}else t=u
t+="   vec3 refr = mix(-refl, viewPos, refraction);\n"
b.a=t
t+="   vec3 invRefr = vec3(invViewMat*vec4(refr, 0.0));\n"
b.a=t
t+="   return scalar*textureCube(envSampler, invRefr).rgb;\n"
b.a=t
t+="}\n"
b.a=t
b.a=t+"\n"},
ns:function(a,b,c){var u,t,s,r,q,p,o,n,m,l=b.b
if(l<=0)return
u=b.a
t="dirLight"+H.j(u)
s=A.kh(t)
r=c.a+="// === "+s+" ===\n"
r+="\n"
c.a=r
r+="struct "+s+"\n"
c.a=r
r=c.a=r+"{\n"
if(typeof u!=="number")return u.az()
u=(u&1)!==0
if(u){r+="   vec3 objUp;\n"
c.a=r
r+="   vec3 objRight;\n"
c.a=r
r=c.a=r+"   vec3 objDir;\n"}r+="   vec3 viewDir;\n"
c.a=r
r+="   vec3 color;\n"
c.a=r
r+="};\n"
c.a=r
r+="\n"
c.a=r
c.a=r+("uniform int "+t+"Count;\n")
r=c.a+="uniform "+s+" "+t+"s["+l+"];\n"
if(u)for(q=0;q<l;++q)r=c.a+="uniform sampler2D "+t+"sTexture2D"+q+";\n"
r+="\n"
c.a=r
p=u?", sampler2D txt2D":""
r+="vec3 "+t+"Value(vec3 norm, "+s+" lit"+p+")\n"
c.a=r
c.a=r+"{\n"
r=[P.l]
o=H.c([],r)
n=a.b
if(!n.a)n=n.c
else n=!0
if(n)C.a.h(o,"ambientColor")
if(a.db){c.a+="   vec3 highLight = vec3(0.0, 0.0, 0.0);\n"
m=H.c([],r)
r=a.c
if(!r.a)r=r.c
else r=!0
if(r)C.a.h(m,"diffuse(norm, lit.viewDir)")
r=a.d
if(!r.a)r=r.c
else r=!0
if(r)C.a.h(m,"invDiffuse(norm, lit.viewDir)")
r=a.e
if(!r.a)r=r.c
else r=!0
if(r)C.a.h(m,"specular(norm, lit.viewDir)")
if(u){r=c.a+="   vec3 offset = objPos + lit.objDir*dot(objPos, lit.objDir);\n"
r+="   float tu = dot(offset, lit.objUp);\n"
c.a=r
r+="   float tv = dot(offset, lit.objRight);\n"
c.a=r
r+="   vec2 txtLoc = vec2(tu, tv);\n"
c.a=r
r+="   vec3 intensity = texture2D(txt2D, txtLoc).xyz;\n"
c.a=r
c.a=r+"   if(length(intensity) > 0.0001)\n"
c.a+="      highLight = intensity*("+C.a.q(m," + ")+");\n"}else c.a+="   highLight = "+C.a.q(m," + ")+";\n"
C.a.h(o,"highLight")}r=c.a+="   return lit.color*("+C.a.q(o," + ")+");\n"
r+="}\n"
c.a=r
r+="\n"
c.a=r
r+="vec3 all"+s+"Values(vec3 norm)\n"
c.a=r
r+="{\n"
c.a=r
r+="   vec3 lightAccum = vec3(0.0, 0.0, 0.0);\n"
c.a=r
if(u){for(u=r,q=0;q<l;++q){c.a+="   if("+t+"Count <= "+q+") return lightAccum;\n"
u=c.a+="   lightAccum += "+t+"Value(norm, "+t+"s["+q+"], "+t+"sTexture2D"+q+");\n"}l=u}else{l=c.a+="   for(int i = 0; i < "+l+"; ++i)\n"
l+="   {\n"
c.a=l
l+="      if(i >= "+t+"Count) break;\n"
c.a=l
l+="      lightAccum += "+t+"Value(norm, "+t+"s[i]);\n"
c.a=l
l=c.a=l+"   }\n"}l+="   return lightAccum;\n"
c.a=l
l+="}\n"
c.a=l
c.a=l+"\n"},
nx:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k,j=b.b
if(j<=0)return
u=b.a
t="pointLight"+H.j(u)
s=A.kh(t)
r=c.a+="// === "+s+" ===\n"
r+="\n"
c.a=r
r+="struct "+s+"\n"
c.a=r
r+="{\n"
c.a=r
r+="   vec3 point;\n"
c.a=r
r+="   vec3 viewPnt;\n"
c.a=r
r=c.a=r+"   vec3 color;\n"
if(typeof u!=="number")return u.az()
q=(u&3)!==0
if(q){r+="   mat3 invViewRotMat;\n"
c.a=r}p=(u&2)!==0
if(p){r+="   vec4 shadowAdj;\n"
c.a=r}o=(u&4)!==0
if(o){r+="   float att0;\n"
c.a=r
r+="   float att1;\n"
c.a=r
r=c.a=r+"   float att2;\n"}r+="};\n"
c.a=r
r+="\n"
c.a=r
c.a=r+("uniform int "+t+"Count;\n")
r=c.a+="uniform "+s+" "+t+"s["+j+"];\n"
u=(u&1)!==0
if(u)for(n=0;n<j;++n)r=c.a+="uniform samplerCube "+t+"sTextureCube"+n+";\n"
r+="\n"
c.a=r
m=u?", samplerCube txtCube":""
if(p)m+=", samplerCube shadowCube"
r+="vec3 "+t+"Intensity(vec3 normDir, "+s+" lit"+m+")\n"
c.a=r
r+="{\n"
c.a=r
r=c.a=r+"   float dist = length(objPos - lit.point);\n"
if(o){r+="   float attenuation = 1.0/(lit.att0 + (lit.att1 + lit.att2*dist)*dist);\n"
c.a=r
r+="   if(attenuation <= 0.005) return vec3(0.0, 0.0, 0.0);\n"
c.a=r
r+="\n"
c.a=r}if(q)r=c.a=r+"   vec3 invNormDir = lit.invViewRotMat*normDir;\n"
if(p){r+="   float depth = dot(textureCube(shadowCube, invNormDir), lit.shadowAdj);\n"
c.a=r
r+="   float dist2 = (dist - 20.0) / (1.0 - 20.0);\n"
c.a=r
r+="   if(depth > dist2) return vec3(0.0, 0.0, 0.0);\n"
c.a=r
c.a=r+"\n"}r=[P.l]
l=H.c([],r)
C.a.h(l,"lit.color")
if(o)C.a.h(l,"attenuation")
if(u)C.a.h(l,"textureCube(txtCube, invNormDir).rgb")
o=c.a+="   return "+C.a.q(l," * ")+";\n"
o+="}\n"
c.a=o
o+="\n"
c.a=o
o+="vec3 "+t+"Value(vec3 norm, "+s+" lit"+m+")\n"
c.a=o
c.a=o+"{\n"
l=H.c([],r)
o=a.b
if(!o.a)o=o.c
else o=!0
if(o)C.a.h(l,"ambientColor")
if(a.db){c.a+="   vec3 highLight = vec3(0.0, 0.0, 0.0);\n"
C.a.h(l,"highLight")
m=u?", txtCube":""
if(p)m+=", shadowCube"
o=c.a+="   vec3 normDir = normalize(viewPos - lit.viewPnt);\n"
o+="   vec3 intensity = "+t+"Intensity(normDir, lit"+m+");\n"
c.a=o
c.a=o+"   if(length(intensity) > 0.0001) {\n"
k=H.c([],r)
r=a.c
if(!r.a)r=r.c
else r=!0
if(r)C.a.h(k,"diffuse(norm, normDir)")
r=a.d
if(!r.a)r=r.c
else r=!0
if(r)C.a.h(k,"invDiffuse(norm, normDir)")
r=a.e
if(!r.a)r=r.c
else r=!0
if(r)C.a.h(k,"specular(norm, normDir)")
r=c.a+="      highLight = intensity*("+C.a.q(k," + ")+");\n"
c.a=r+"   }\n"}r=c.a+="   return lit.color*("+C.a.q(l," + ")+");\n"
r+="}\n"
c.a=r
r+="\n"
c.a=r
r+="vec3 all"+s+"Values(vec3 norm)\n"
c.a=r
r+="{\n"
c.a=r
r+="   vec3 lightAccum = vec3(0.0, 0.0, 0.0);\n"
c.a=r
if(q){for(n=0;n<j;++n){c.a+="   if("+t+"Count <= "+n+") return lightAccum;\n"
m=u?", "+t+"sTextureCube"+n:""
if(p)m+=", "+t+"sShadowCube"+n
r=c.a+="   lightAccum += "+t+"Value(norm, "+t+"s["+n+"]"+m+");\n"}j=r}else{j=c.a+="   for(int i = 0; i < "+j+"; ++i)\n"
j+="   {\n"
c.a=j
j+="      if(i >= "+t+"Count) break;\n"
c.a=j
j+="      lightAccum += "+t+"Value(norm, "+t+"s[i]);\n"
c.a=j
j=c.a=j+"   }\n"}j+="   return lightAccum;\n"
c.a=j
j+="}\n"
c.a=j
c.a=j+"\n"},
nB:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k,j,i,h="uniform sampler2D ",g=b.b
if(g<=0)return
u=b.a
t="spotLight"+H.j(u)
s=A.kh(t)
r=c.a+="// === "+s+" ===\n"
r+="\n"
c.a=r
r+="struct "+s+"\n"
c.a=r
r+="{\n"
c.a=r
r+="   vec3 objPnt;\n"
c.a=r
r+="   vec3 objDir;\n"
c.a=r
r+="   vec3 viewPnt;\n"
c.a=r
r=c.a=r+"   vec3 color;\n"
if(typeof u!=="number")return u.az()
q=(u&3)!==0
if(q){r+="   vec3 objUp;\n"
c.a=r
r+="   vec3 objRight;\n"
c.a=r
r+="   float tuScalar;\n"
c.a=r
r+="   float tvScalar;\n"
c.a=r}p=(u&2)!==0
if(p){r+="   vec4 shadowAdj;\n"
c.a=r}o=(u&8)!==0
if(o){r+="   float cutoff;\n"
c.a=r
r+="   float coneAngle;\n"
c.a=r}n=(u&4)!==0
if(n){r+="   float att0;\n"
c.a=r
r+="   float att1;\n"
c.a=r
r=c.a=r+"   float att2;\n"}r+="};\n"
c.a=r
r+="\n"
c.a=r
c.a=r+("uniform int "+t+"Count;\n")
r=c.a+="uniform "+s+" "+t+"s["+g+"];\n"
m=(u&1)!==0
if(m)for(l=0;l<g;++l)r=c.a+=h+t+"sTexture2D"+l+";\n"
if(p)for(l=0;l<g;++l)r=c.a+=h+t+"sShadow2D"+l+";\n"
r+="\n"
c.a=r
k=m?", sampler2D txt2D":""
if(p)k+=", sampler2D shadow2D"
r+="vec3 "+t+"Intensity("+s+" lit"+k+")\n"
c.a=r
r+="{\n"
c.a=r
r=c.a=r+"   vec3 dir = objPos - lit.objPnt;\n"
if((u&6)!==0){u=r+"   float dist = length(dir);\n"
c.a=u}else u=r
if(n){u+="   float attenuation = 1.0/(lit.att0 + (lit.att1 + lit.att2*dist)*dist);\n"
c.a=u
u+="   if(attenuation <= 0.005) return vec3(0.0, 0.0, 0.0);\n"
c.a=u
u=c.a=u+"\n"}u+="   vec3 normDir = normalize(dir);\n"
c.a=u
u+="   float zScale = dot(normDir, lit.objDir);\n"
c.a=u
u=c.a=u+"   if(zScale < 0.0) return vec3(0.0, 0.0, 0.0);\n"
if(o){u+="   float angle = acos(zScale);\n"
c.a=u
u+="   float scale = (lit.cutoff-angle) / (lit.cutoff-lit.coneAngle);\n"
c.a=u
u+="   if(scale <= 0.0) return vec3(0.0, 0.0, 0.0);\n"
c.a=u
u+="   if(scale >= 1.0) scale = 1.0;\n"
c.a=u
u+="\n"
c.a=u}if(q){u+="   normDir = normDir / zScale;\n"
c.a=u
u+="   float tu = 0.5 - dot(normDir, lit.objRight)*lit.tuScalar;\n"
c.a=u
u+="   if((tu < 0.0) || (tu > 1.0)) return vec3(0.0, 0.0, 0.0);\n"
c.a=u
u+="   float tv = dot(normDir, lit.objUp)*lit.tvScalar + 0.5;\n"
c.a=u
u+="   if((tv < 0.0) || (tv > 1.0)) return vec3(0.0, 0.0, 0.0);\n"
c.a=u
u+="   vec2 txtLoc = vec2(tu, tv);\n"
c.a=u
u=c.a=u+"\n"}if(p){u+="   float depth = dot(texture2D(shadow2D, vec2(txtLoc.x, 1.0-txtLoc.y)), lit.shadowAdj);\n"
c.a=u
u+="   float dist2 = (dist - 20.0) / (1.0 - 20.0);\n"
c.a=u
u+="   if(depth > dist2) return vec3(0.0, 0.0, 0.0);\n"
c.a=u
c.a=u+"\n"}u=[P.l]
j=H.c([],u)
if(n)C.a.h(j,"attenuation")
if(o)C.a.h(j,"scale")
if(m)C.a.h(j,"texture2D(txt2D, txtLoc).rgb")
else C.a.h(j,"vec3(1.0, 1.0, 1.0)")
r=c.a+="   return "+C.a.q(j," * ")+";\n"
r+="}\n"
c.a=r
r+="\n"
c.a=r
r+="vec3 "+t+"Value(vec3 norm, "+s+" lit"+k+")\n"
c.a=r
c.a=r+"{\n"
j=H.c([],u)
r=a.b
if(!r.a)r=r.c
else r=!0
if(r)C.a.h(j,"ambientColor")
if(a.db){c.a+="   vec3 highLight = vec3(0.0, 0.0, 0.0);\n"
C.a.h(j,"highLight")
k=m?", txt2D":""
if(p)k+=", shadow2D"
r=c.a+="   vec3 intensity = "+t+"Intensity(lit"+k+");\n"
r+="   if(length(intensity) > 0.0001) {\n"
c.a=r
c.a=r+"      vec3 litVec = normalize(viewPos - lit.viewPnt);\n"
i=H.c([],u)
u=a.c
if(!u.a)u=u.c
else u=!0
if(u)C.a.h(i,"diffuse(norm, litVec)")
u=a.d
if(!u.a)u=u.c
else u=!0
if(u)C.a.h(i,"invDiffuse(norm, litVec)")
u=a.e
if(!u.a)u=u.c
else u=!0
if(u)C.a.h(i,"specular(norm, litVec)")
u=c.a+="      highLight = intensity*("+C.a.q(i," + ")+");\n"
c.a=u+"   }\n"}u=c.a+="   return lit.color*("+C.a.q(j," + ")+");\n"
u+="}\n"
c.a=u
u+="\n"
c.a=u
u+="vec3 all"+s+"Values(vec3 norm)\n"
c.a=u
u+="{\n"
c.a=u
u+="   vec3 lightAccum = vec3(0.0, 0.0, 0.0);\n"
c.a=u
if(q){for(l=0;l<g;++l){c.a+="   if("+t+"Count <= "+l+") return lightAccum;\n"
k=m?", "+t+"sTexture2D"+l:""
if(p)k+=", "+t+"sShadow2D"+l
u=c.a+="   lightAccum += "+t+"Value(norm, "+t+"s["+l+"]"+k+");\n"}g=u}else{g=c.a+="   for(int i = 0; i < "+g+"; ++i)\n"
g+="   {\n"
c.a=g
g+="      if(i >= "+t+"Count) break;\n"
c.a=g
g+="      lightAccum += "+t+"Value(norm, "+t+"s[i]);\n"
c.a=g
g=c.a=g+"   }\n"}g+="   return lightAccum;\n"
c.a=g
g+="}\n"
c.a=g
c.a=g+"\n"},
nv:function(a,b){var u,t
if(a.cx>0)return
u=b.a+="// === No Lights ===\n"
u+="\n"
b.a=u
u+="vec3 nonLightValues(vec3 norm)\n"
b.a=u
u+="{\n"
b.a=u
if(a.db)b.a=u+"   vec3 litVec = vec3(0.0, 0.0, 1.0);\n"
t=H.c([],[P.l])
u=a.b
if(!u.a)u=u.c
else u=!0
if(u)C.a.h(t,"ambientColor")
u=a.c
if(!u.a)u=u.c
else u=!0
if(u)C.a.h(t,"diffuse(norm, litVec)")
u=a.d
if(!u.a)u=u.c
else u=!0
if(u)C.a.h(t,"invDiffuse(norm, litVec)")
u=a.e
if(!u.a)u=u.c
else u=!0
if(u)C.a.h(t,"specular(norm, litVec)")
u=b.a+="   return "+C.a.q(t," + ")+";\n"
u+="}\n"
b.a=u
b.a=u+"\n"},
nC:function(a){var u,t,s,r,q,p,o,n,m,l="   lightAccum += all",k="precision mediump float;\n\n",j="precision mediump float;\n\nvarying vec3 normalVec;\n",i=new P.bO("")
i.a="precision mediump float;\n"
i.a=k
u=a.k3
if(u){i.a=j
t=j}else t=k
if(a.k4){t+="varying vec3 binormalVec;\n"
i.a=t}if(a.r1){t+="varying vec2 txt2D;\n"
i.a=t}if(a.r2){t+="varying vec3 txtCube;\n"
i.a=t}if(a.k1){t+="varying vec3 objPos;\n"
i.a=t}t=i.a=(a.k2?i.a=t+"varying vec3 viewPos;\n":t)+"\n"
s=a.x2
if(s){t+="uniform mat4 colorMat;\n"
i.a=t}if(a.dx)t=i.a=t+"uniform mat4 invViewMat;\n"
i.a=t+"\n"
A.nt(a,i)
A.nq(a,i)
A.nr(a,i)
A.nu(a,i)
A.nA(a,i)
t=a.cy
if(t){r=i.a+="// === Enviromental ===\n"
r+="\n"
i.a=r
r+="uniform samplerCube envSampler;\n"
i.a=r
i.a=r+"\n"
A.ny(a,i)
A.nz(a,i)}A.nw(a,i)
r=i.a+="// === Alpha ===\n"
r=i.a=r+"\n"
q=a.y
p=q.a
if(p){r+="uniform float alpha;\n"
i.a=r}q=q.c
r=(q?i.a=r+"uniform samplerCube alphaTxt;\n":r)+"float alphaValue()\n"
i.a=r
r=i.a=r+"{\n"
if(!p)o=q
else o=!0
if(!o)r=i.a=r+"   return 1.0;\n"
else if(q){if(p){r+="   float a = alpha*textureCube(alphaTxt, txtCube).a;\n"
i.a=r}else{r+="   float a = textureCube(alphaTxt, txtCube).a;\n"
i.a=r}r+="   if (a <= 0.000001) discard;\n"
i.a=r
r+="   return a;\n"
i.a=r}else if(p){r+="   return alpha;\n"
i.a=r}r+="}\n"
i.a=r
i.a=r+"\n"
r=a.id
if(r){for(q=a.z,p=q.length,n=0;n<q.length;q.length===p||(0,H.v)(q),++n)A.ns(a,q[n],i)
for(q=a.Q,p=q.length,n=0;n<q.length;q.length===p||(0,H.v)(q),++n)A.nx(a,q[n],i)
for(q=a.ch,p=q.length,n=0;n<q.length;q.length===p||(0,H.v)(q),++n)A.nB(a,q[n],i)
A.nv(a,i)}q=i.a+="// === Main ===\n"
q+="\n"
i.a=q
q+="void main()\n"
i.a=q
q+="{\n"
i.a=q
q=i.a=q+"   float alpha = alphaValue();\n"
u=u?i.a=q+"   vec3 norm = normal();\n":q
if(t)i.a=u+"   vec3 refl = reflect(normalize(viewPos), norm);\n"
m=H.c([],[P.l])
if(r){i.a+="   vec3 lightAccum = vec3(0.0, 0.0, 0.0);\n"
C.a.h(m,"lightAccum")
u=a.b
if(!u.a)u=u.c
else u=!0
if(u)i.a+="   setAmbientColor();\n"
u=a.c
if(!u.a)u=u.c
else u=!0
if(u)i.a+="   setDiffuseColor();\n"
u=a.d
if(!u.a)u=u.c
else u=!0
if(u)i.a+="   setInvDiffuseColor();\n"
u=a.e
if(!u.a)u=u.c
else u=!0
if(u)i.a+="   setSpecularColor();\n"
for(u=a.z,t=u.length,n=0;n<u.length;u.length===t||(0,H.v)(u),++n){r=u[n].i(0)
if(0>=r.length)return H.h(r,0)
i.a+=l+(r[0].toUpperCase()+C.e.b_(r,1))+"Values(norm);\n"}for(u=a.Q,t=u.length,n=0;n<u.length;u.length===t||(0,H.v)(u),++n){r=u[n].i(0)
if(0>=r.length)return H.h(r,0)
i.a+=l+(r[0].toUpperCase()+C.e.b_(r,1))+"Values(norm);\n"}for(u=a.ch,t=u.length,n=0;n<u.length;u.length===t||(0,H.v)(u),++n){r=u[n].i(0)
if(0>=r.length)return H.h(r,0)
i.a+=l+(r[0].toUpperCase()+C.e.b_(r,1))+"Values(norm);\n"}if(a.cx<=0)i.a+="   lightAccum += nonLightValues(norm);\n"}u=a.a
if(!u.a)u=u.c
else u=!0
if(u)C.a.h(m,"emissionColor()")
u=a.r
if(!u.a)u=u.c
else u=!0
if(u)C.a.h(m,"reflect(refl)")
u=a.x
if(!u.a)u=u.c
else u=!0
if(u)C.a.h(m,"refract(refl)")
if(m.length<=0)C.a.h(m,"vec3(0.0, 0.0, 0.0)")
u=i.a+="   vec4 objClr = vec4("+C.a.q(m," + ")+", alpha);\n"
if(s)u=i.a=u+"   objClr = colorMat*objClr;\n"
u+="   gl_FragColor = objClr;\n"
i.a=u
u=i.a=u+"}\n"
return u.charCodeAt(0)==0?u:u},
nD:function(a,b){var u,t,s
if(!a.rx)return
u=b.a+="struct BendingValue\n"
u+="{\n"
b.a=u
u+="   mat4 mat;\n"
b.a=u
u+="};\n"
b.a=u
b.a=u+"uniform int bendMatCount;\n"
u=b.a+="uniform BendingValue bendValues["+a.y2+"];\n"
u+="attribute vec4 bendAttr;\n"
b.a=u
u+="\n"
b.a=u
u+="float weightSum;\n"
b.a=u
u=b.a=u+"vec3 bendPos;\n"
t=a.k3
if(t){u+="vec3 bendNorm;\n"
b.a=u}s=a.k4
u=(s?b.a=u+"vec3 bendBinm;\n":u)+"\n"
b.a=u
u+="void adjustBend(float bendVal)\n"
b.a=u
u+="{\n"
b.a=u
u+="   if(bendVal >= 0.0)\n"
b.a=u
u+="   {\n"
b.a=u
u+="      int index = int(floor((bendVal + 0.5)*0.5));\n"
b.a=u
u+="      if(index < bendMatCount)\n"
b.a=u
u+="      {\n"
b.a=u
u+="         float weight = clamp(bendVal - float(index)*2.0, 0.0, 1.0);\n"
b.a=u
u+="         mat4 m = bendValues[index].mat;\n"
b.a=u
u+="         weightSum += weight;\n"
b.a=u
u=b.a=u+"         bendPos += (m*vec4(posAttr, 1.0)).xyz*weight;\n"
if(t){u+="         bendNorm += (m*vec4(normAttr, 0.0)).xyz*weight;\n"
b.a=u}u=(s?b.a=u+"         bendBinm += (m*vec4(binmAttr, 0.0)).xyz*weight;\n":u)+"      }\n"
b.a=u
u+="   }\n"
b.a=u
u+="}\n"
b.a=u
u+="\n"
b.a=u
u+="void setupBendData()\n"
b.a=u
u+="{\n"
b.a=u
u=b.a=u+"   bendPos = vec3(0.0, 0.0, 0.0);\n"
if(t){u+="   bendNorm = vec3(0.0, 0.0, 0.0);\n"
b.a=u}u=(s?b.a=u+"   bendBinm = vec3(0.0, 0.0, 0.0);\n":u)+"   weightSum = 0.0;\n"
b.a=u
u+="   adjustBend(bendAttr.x);\n"
b.a=u
u+="   adjustBend(bendAttr.y);\n"
b.a=u
u+="   adjustBend(bendAttr.z);\n"
b.a=u
u+="   adjustBend(bendAttr.w);\n"
b.a=u
u+="   if(weightSum < 1.0)\n"
b.a=u
u+="   {\n"
b.a=u
u+="      float weight = 1.0 - weightSum;\n"
b.a=u
u=b.a=u+"      bendPos += posAttr*weight;\n"
if(t){u+="      bendNorm += normAttr*weight;\n"
b.a=u}u=(s?b.a=u+"      bendBinm += binmAttr*weight;\n":u)+"   }\n"
b.a=u
u+="   else\n"
b.a=u
u+="   {\n"
b.a=u
u+="      bendPos = bendPos/weightSum;\n"
b.a=u
u=b.a=u+"   }\n"
if(t){u+="   bendNorm = normalize(bendNorm);\n"
b.a=u}u=(s?b.a=u+"   bendBinm = normalize(bendBinm);\n":u)+"}\n"
b.a=u
b.a=u+"\n"},
nF:function(a,b){var u
if(!a.k3)return
u=b.a+="varying vec3 normalVec;\n"
u+="\n"
b.a=u
u+="vec3 getNorm()\n"
b.a=u
u+="{\n"
b.a=u
u+="   return normalize((viewObjMat*vec4("+(a.rx?"bendNorm":"normAttr")+", 0.0)).xyz);\n"
b.a=u
u+="}\n"
b.a=u
b.a=u+"\n"},
nE:function(a,b){var u
if(!a.k4)return
u=b.a+="varying vec3 binormalVec;\n"
u+="\n"
b.a=u
u+="vec3 getBinm()\n"
b.a=u
u+="{\n"
b.a=u
u+="   return normalize((viewObjMat*vec4("+(a.rx?"bendBinm":"binmAttr")+", 0.0)).xyz);\n"
b.a=u
u+="}\n"
b.a=u
b.a=u+"\n"},
nH:function(a,b){var u,t
if(!a.r1)return
u=a.ry
if(u)b.a+="uniform mat3 txt2DMat;\n"
t=b.a+="attribute vec2 txt2DAttr;\n"
t+="varying vec2 txt2D;\n"
b.a=t
t+="\n"
b.a=t
t+="vec2 getTxt2D()\n"
b.a=t
t=b.a=t+"{\n"
t=(u?b.a=t+"   return (txt2DMat*vec3(txt2DAttr, 1.0)).xy;\n":b.a=t+"   return txt2DAttr;\n")+"}\n"
b.a=t
b.a=t+"\n"},
nI:function(a,b){var u,t
if(!a.r2)return
u=a.x1
if(u)b.a+="uniform mat4 txtCubeMat;\n"
t=b.a+="attribute vec3 txtCubeAttr;\n"
t+="varying vec3 txtCube;\n"
b.a=t
t+="\n"
b.a=t
t+="vec3 getTxtCube()\n"
b.a=t
t=b.a=t+"{\n"
t=(u?b.a=t+"   return (txtCubeMat*vec4(txtCubeAttr, 1.0)).xyz;\n":b.a=t+"   return txtCubeAttr;\n")+"}\n"
b.a=t
b.a=t+"\n"},
nG:function(a,b){var u
if(!a.k1)return
u=b.a+="varying vec3 objPos;\n"
u+="\n"
b.a=u
u+="vec3 getObjPos()\n"
b.a=u
u+="{\n"
b.a=u
u+="   return (objMat*vec4("+(a.rx?"bendPos":"posAttr")+", 1.0)).xyz;\n"
b.a=u
u+="}\n"
b.a=u
b.a=u+"\n"},
nJ:function(a,b){var u
if(!a.k2)return
u=b.a+="varying vec3 viewPos;\n"
u+="\n"
b.a=u
u+="vec3 getViewPos()\n"
b.a=u
u+="{\n"
b.a=u
u+="   return (viewObjMat*vec4("+(a.rx?"bendPos":"posAttr")+", 1.0)).xyz;\n"
b.a=u
u+="}\n"
b.a=u
b.a=u+"\n"},
kh:function(a){if(0>=a.length)return H.h(a,0)
return a[0].toUpperCase()+C.e.b_(a,1)},
n6:function(a,b){var u,t,s,r
for(u=0,t="precision mediump float;\n\nuniform vec4 backClr;\n\nvarying vec2 pos;\n\nuniform int txtCount;\n";u<a;++u)t=t+("uniform sampler2D txt"+u+";\n")+("uniform mat4 clrMat"+u+";\n")+("uniform vec2 srcLoc"+u+";\n")+("uniform vec2 srcSize"+u+";\n")+("uniform vec2 destLoc"+u+";\n")+("uniform vec2 destSize"+u+";\n")+("uniform int flip"+u+";\n")
t+="\nvec4 clrAccum;\n"
s=b===C.K
t=(s||b===C.v?t+"float colorCount;\n":t)+"\nvoid layout(sampler2D txt, mat4 clrMat,\n            vec2 srcLoc, vec2 srcSize, vec2 destLoc, vec2 destSize, int flip)\n{\n   vec2 txtPnt = (pos - destLoc)*srcSize/destSize;\n   if((txtPnt.x >= 0.0) && (txtPnt.x <= srcSize.x) &&\n      (txtPnt.y >= 0.0) && (txtPnt.y <= srcSize.y))\n   {\n      if(flip != 0) txtPnt.y = srcSize.y - txtPnt.y;\n      vec4 color = clrMat*texture2D(txt, txtPnt + srcLoc);\n      color = clamp(color, vec4(0.0), vec4(1.0));\n"
if(b===C.J)t+="      clrAccum += color;\n"
else if(b===C.i)t+="      clrAccum = mix(clrAccum, color, color.a);\n"
else t=s?t+"      clrAccum += color;\n      colorCount += 1.0;\n":t+"      clrAccum = color;\n      colorCount = 1.0;\n"
t+="   }\n}\n\nvoid layoutAll()\n{\n"
r=b===C.v
if(r)for(u=a-1;u>=0;--u)t=t+("   if(txtCount > "+u+")\n")+"   {\n"+("     layout(txt"+u+", clrMat"+u+", srcLoc"+u+", srcSize"+u+", destLoc"+u+", destSize"+u+", flip"+u+");\n")+"     if(colorCount > 0.0) return;\n   }\n"
else for(u=0;u<a;++u)t=t+("   if(txtCount <= "+u+") return;\n")+("   layout(txt"+u+", clrMat"+u+", srcLoc"+u+", srcSize"+u+", destLoc"+u+", destSize"+u+", flip"+u+");\n")
t+="}\n\nvoid main()\n{\n   clrAccum = backClr;\n"
if(s)t+="   colorCount = 1.0;\n"
else if(r)t+="   colorCount = 0.0;\n"
t+="   layoutAll();\n"
t=(s?t+"   clrAccum = clrAccum/colorCount;\n":t)+"   if(clrAccum.a <= 0.0) discard;\n   gl_FragColor = clrAccum;\n}\n"
return t.charCodeAt(0)==0?t:t},
n5:function(a,b,c){var u="TextureLayout_"+a+"_"+C.d.i(b.a),t=new A.eh(c,u)
t.be(c,u)
t.ey(a,b,c)
return t},
kB:function(a,b,c,d,e){var u=new A.iP(a,c,e)
u.f=d
u.sie(P.mJ(d,0,P.r))
return u},
dr:function dr(a,b,c){this.a=a
this.b=b
this.c=c},
fv:function fv(a){this.a=a},
ah:function ah(a,b,c){this.a=a
this.b=b
this.c=c},
dW:function dW(a,b){var _=this
_.dJ=_.js=_.dI=_.bq=_.b8=_.y2=_.y1=_.x2=_.x1=_.ry=_.rx=_.r2=_.r1=_.k4=_.k3=_.k2=_.k1=_.id=_.go=_.fy=_.fx=_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=null
_.jA=_.jz=_.jy=_.cj=_.ci=_.cg=_.cf=_.ce=_.cd=_.dV=_.jx=_.dU=_.dT=_.jw=_.dS=_.dR=_.dQ=_.jv=_.dP=_.dO=_.dN=_.ju=_.dM=_.dL=_.jt=_.dK=null
_.a=a
_.b=b
_.y=_.x=_.r=_.f=_.e=_.d=_.c=null},
aK:function aK(a,b){this.a=a
this.b=b},
aP:function aP(a,b){this.a=a
this.b=b},
aT:function aT(a,b){this.a=a
this.b=b},
hs:function hs(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4){var _=this
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
_.b8=b3
_.bq=b4},
cb:function cb(a,b,c,d,e,f){var _=this
_.b=a
_.c=b
_.d=c
_.e=d
_.f=e
_.r=f},
cc:function cc(a,b,c,d,e,f,g,h,i,j){var _=this
_.b=a
_.c=b
_.d=c
_.e=d
_.f=e
_.r=f
_.x=g
_.y=h
_.z=i
_.Q=j},
cd:function cd(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){var _=this
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
_.cy=m
_.db=n
_.dx=o
_.dy=p},
cW:function cW(){},
by:function by(a,b){this.a=a
this.b=b},
e9:function e9(a,b){var _=this
_.db=_.cy=_.cx=_.ch=_.Q=_.z=null
_.a=a
_.b=b
_.y=_.x=_.r=_.f=_.e=_.d=_.c=null},
ea:function ea(a,b){var _=this
_.ch=_.Q=_.z=null
_.a=a
_.b=b
_.y=_.x=_.r=_.f=_.e=_.d=_.c=null},
eh:function eh(a,b){var _=this
_.fx=_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=null
_.a=a
_.b=b
_.y=_.x=_.r=_.f=_.e=_.d=_.c=null},
ek:function ek(){},
iT:function iT(a){this.a=a},
ak:function ak(a,b,c){this.a=a
this.c=b
this.d=c},
iQ:function iQ(a,b,c){this.a=a
this.c=b
this.d=c},
iR:function iR(a,b,c){this.a=a
this.c=b
this.d=c},
iS:function iS(a,b,c){this.a=a
this.c=b
this.d=c},
iP:function iP(a,b,c){var _=this
_.f=null
_.a=a
_.c=b
_.d=c},
a7:function a7(a,b,c){this.a=a
this.c=b
this.d=c},
ay:function ay(a,b,c){this.a=a
this.c=b
this.d=c},
Z:function Z(a,b,c){this.a=a
this.c=b
this.d=c},
bR:function bR(a,b,c){this.a=a
this.c=b
this.d=c},
iU:function iU(a,b,c){this.a=a
this.c=b
this.d=c},
d5:function d5(a,b,c){this.a=a
this.c=b
this.d=c},
ac:function ac(a,b,c){this.a=a
this.c=b
this.d=c},
bb:function bb(a,b,c){this.a=a
this.c=b
this.d=c},
ag:function ag(a,b,c){this.a=a
this.c=b
this.d=c}},F={
jX:function(a){var u=a.a>0?1:0
if(a.b>0)u+=2
return(a.c>0?u+4:u)*2},
di:function(a,b,c,d,a0,a1,a2,a3,a4){var u,t,s,r,q,p,o,n,m,l,k,j={},i=a1+a2,h=i+a3,g=a2+a3,f=a3+a1,e=new V.L(h,g+a1,f+a2)
j.a=e
u=a1-a2
t=a2-a3
s=a3-a1
r=j.b=new V.L(u+a3,t+a1,s+a2)
q=new V.L(u-a3,t-a1,s-a2)
j.c=q
p=j.d=new V.L(i-a3,g-a1,f-a2)
if(h>0){j.d=r
j.b=p
h=r
i=p}else{h=p
i=r}for(f=h,h=i,i=e,g=q,o=0;o<a4;++o,n=f,f=i,i=h,h=g,g=n){j.a=h
j.b=g
j.c=f
j.d=i}m=F.jX(i)
l=F.jX(j.b)
k=F.ol(d,a0,new F.jW(j,F.jX(j.c),F.jX(j.d),l,m,c),b)
if(k!=null)a.iR(k)},
ol:function(a,b,c,d){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=null
if(a<1)return
if(b<1)return
u=F.kx()
t=H.c([],[F.aF])
for(s=0;s<=b;++s){r=s/b
q=u.a
if(r<0)p=0
else p=r>1?1:r
q.toString
o=F.j3(g,g,new V.a1(p,0,0,1),g,g,new V.a6(r,1),g,g,0)
q.h(0,o)
c.$3(o,r,0)
C.a.h(t,o.c6(d))}for(s=1;s<=a;++s){n=s/a
for(q=n>1,p=n<0,m=1-n,l=0;l<=b;++l){r=l/b
k=u.a
if(r<0)j=0
else j=r>1?1:r
if(p)i=0
else i=q?1:n
if(p)h=0
else h=q?1:n
k.toString
o=F.j3(g,g,new V.a1(j,i,h,1),g,g,new V.a6(r,m),g,g,0)
k.h(0,o)
c.$3(o,r,n)
C.a.h(t,o.c6(d))}}u.d.il(a+1,b+1,t)
return u},
cD:function(a,b,c){var u=new F.a3(),t=a.a
if(t==null)H.z(P.w("May not create a face with a first vertex which is not attached to a shape."))
if(t!=b.a||t!=c.a)H.z(P.w("May not create a face with vertices attached to different shapes."))
u.a=a
C.a.h(a.d.b,u)
u.b=b
C.a.h(b.d.c,u)
u.c=c
C.a.h(c.d.d,u)
C.a.h(u.a.a.d.b,u)
u.a.a.a2()
return u},
mH:function(a,b){var u=new F.bh(),t=a.a
if(t==null)H.z(P.w("May not create a line with a start vertex which is not attached to a shape."))
if(t!=b.a)H.z(P.w("May not create a line with vertices attached to different shapes."))
u.a=a
C.a.h(a.c.b,u)
u.b=b
C.a.h(b.c.c,u)
C.a.h(u.a.a.c.b,u)
u.a.a.a2()
return u},
kx:function(){var u=new F.e7(),t=new F.j4(u)
t.b=!1
t.sig(H.c([],[F.aF]))
u.a=t
t=new F.ic(u)
t.sbV(H.c([],[F.bM]))
u.b=t
t=new F.ib(u)
t.sfq(H.c([],[F.bh]))
u.c=t
t=new F.ia(u)
t.sfg(H.c([],[F.a3]))
u.d=t
u.e=null
return u},
j3:function(a,b,c,d,e,f,g,h,i){var u,t=null,s=new F.aF(),r=new F.j9()
r.sbV(H.c([],[F.bM]))
s.b=r
r=new F.j8()
u=[F.bh]
r.sfs(H.c([],u))
r.sft(H.c([],u))
s.c=r
r=new F.j5()
u=[F.a3]
r.sfh(H.c([],u))
r.sfi(H.c([],u))
r.sfj(H.c([],u))
s.d=r
h=$.me()
s.e=0
r=$.aq()
u=h.a
s.f=(u&r.a)!==0?d:t
s.r=(u&$.br().a)!==0?e:t
s.x=(u&$.bq().a)!==0?b:t
s.y=(u&$.bW().a)!==0?f:t
s.z=(u&$.bs().a)!==0?g:t
s.Q=(u&$.mf().a)!==0?c:t
s.ch=(u&$.cs().a)!==0?i:0
s.cx=(u&$.bp().a)!==0?a:t
return s},
jW:function jW(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
a3:function a3(){var _=this
_.e=_.d=_.c=_.b=_.a=null},
bh:function bh(){this.b=this.a=null},
bM:function bM(){this.a=null},
e7:function e7(){var _=this
_.e=_.d=_.c=_.b=_.a=null},
ia:function ia(a){this.a=a
this.b=null},
ib:function ib(a){this.a=a
this.b=null},
ic:function ic(a){this.a=a
this.b=null},
aF:function aF(){var _=this
_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
jb:function jb(a){this.a=a},
ja:function ja(a){this.a=a},
j4:function j4(a){this.a=a
this.c=this.b=null},
j5:function j5(){this.d=this.c=this.b=null},
j6:function j6(a,b){this.a=a
this.b=b},
j7:function j7(a,b){this.a=a
this.b=b},
j8:function j8(){this.c=this.b=null},
j9:function j9(){this.b=null}},T={
lt:function(a){var u=new T.iB()
u.a=0
u.b=a
u.d=u.c=!1
u.x=u.r=u.f=u.e=0
return u},
lu:function(a,b,c,d,e,f,g){var u,t,s
if(f==null)f=0
if(g==null)g=0
if(e==null)e=b.r
if(d==null)d=b.x
u=b.x
a.bindFramebuffer(36160,a.createFramebuffer())
a.readBuffer(36064)
a.framebufferTexture2D(36160,36064,3553,b.b,0)
t=new Uint8Array(e*d*4)
a.readPixels(f,u-d-g,e,d,6408,5121,t)
a.bindFramebuffer(36160,null)
s=new T.iE(t,e,d)
s.fl()
return s},
dw:function dw(){var _=this
_.ch=_.Q=_.z=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
dx:function dx(a,b){this.c=a
this.d=b
this.b=null},
ca:function ca(){},
d0:function d0(){},
iB:function iB(){var _=this
_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
d1:function d1(){var _=this
_.e=_.d=_.c=_.b=_.a=null},
iC:function iC(a){var _=this
_.a=a
_.e=_.d=_.c=null},
iD:function iD(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},
iE:function iE(a,b,c){this.a=a
this.b=b
this.c=c}}
var w=[C,H,J,P,W,O,E,Z,D,X,V,U,M,A,F,T]
hunkHelpers.setFunctionNamesIfNecessary(w)
var $={}
H.ku.prototype={}
J.a.prototype={
n:function(a,b){return a===b},
gI:function(a){return H.cR(a)},
i:function(a){return"Instance of '"+H.j(H.cS(a))+"'"}}
J.hc.prototype={
i:function(a){return String(a)},
gI:function(a){return a?519018:218159},
$iR:1}
J.dL.prototype={
n:function(a,b){return null==b},
i:function(a){return"null"},
gI:function(a){return 0}}
J.dM.prototype={
gI:function(a){return 0},
i:function(a){return String(a)}}
J.hW.prototype={}
J.ce.prototype={}
J.bK.prototype={
i:function(a){var u=a[$.m3()]
if(u==null)return this.ep(a)
return"JavaScript function for "+H.j(J.av(u))},
$S:function(){return{func:1,opt:[,,,,,,,,,,,,,,,,]}},
$ibE:1}
J.b1.prototype={
h:function(a,b){H.E(b,H.x(a,0))
if(!!a.fixed$length)H.z(P.H("add"))
a.push(b)},
M:function(a,b){var u
if(!!a.fixed$length)H.z(P.H("remove"))
for(u=0;u<a.length;++u)if(J.V(a[u],b)){a.splice(u,1)
return!0}return!1},
aa:function(a,b){var u,t
H.k(b,"$id",[H.x(a,0)],"$ad")
if(!!a.fixed$length)H.z(P.H("addAll"))
for(u=b.length,t=0;t<b.length;b.length===u||(0,H.v)(b),++t)a.push(b[t])},
J:function(a,b){var u,t
H.o(b,{func:1,ret:-1,args:[H.x(a,0)]})
u=a.length
for(t=0;t<u;++t){b.$1(a[t])
if(a.length!==u)throw H.f(P.bz(a))}},
q:function(a,b){var u,t=new Array(a.length)
t.fixed$length=Array
for(u=0;u<a.length;++u)this.l(t,u,H.j(a[u]))
return t.join(b)},
iO:function(a){return this.q(a,"")},
B:function(a,b){if(b<0||b>=a.length)return H.h(a,b)
return a[b]},
em:function(a,b,c){var u=a.length
if(b>u)throw H.f(P.aC(b,0,a.length,"start",null))
if(c<b||c>a.length)throw H.f(P.aC(c,b,a.length,"end",null))
if(b===c)return H.c([],[H.x(a,0)])
return H.c(a.slice(b,c),[H.x(a,0)])},
gcm:function(a){var u=a.length
if(u>0)return a[u-1]
throw H.f(H.l8())},
dB:function(a,b){var u,t
H.o(b,{func:1,ret:P.R,args:[H.x(a,0)]})
u=a.length
for(t=0;t<u;++t){if(H.A(b.$1(a[t])))return!0
if(a.length!==u)throw H.f(P.bz(a))}return!1},
bC:function(a,b){var u=H.x(a,0)
H.o(b,{func:1,ret:P.r,args:[u,u]})
if(!!a.immutable$list)H.z(P.H("sort"))
H.eb(a,0,a.length-1,b,u)},
P:function(a,b){var u
for(u=0;u<a.length;++u)if(J.V(a[u],b))return!0
return!1},
i:function(a){return P.kr(a,"[","]")},
gR:function(a){return new J.al(a,a.length,[H.x(a,0)])},
gI:function(a){return H.cR(a)},
gk:function(a){return a.length},
sk:function(a,b){if(!!a.fixed$length)H.z(P.H("set length"))
if(b<0)throw H.f(P.aC(b,0,null,"newLength",null))
a.length=b},
j:function(a,b){if(b>=a.length||b<0)throw H.f(H.cm(a,b))
return a[b]},
l:function(a,b,c){H.E(c,H.x(a,0))
if(!!a.immutable$list)H.z(P.H("indexed set"))
if(b>=a.length||b<0)throw H.f(H.cm(a,b))
a[b]=c},
$id:1,
$ib:1}
J.kt.prototype={}
J.al.prototype={
gG:function(a){return this.d},
t:function(){var u,t=this,s=t.a,r=s.length
if(t.b!==r)throw H.f(H.v(s))
u=t.c
if(u>=r){t.sdd(null)
return!1}t.sdd(s[u]);++t.c
return!0},
sdd:function(a){this.d=H.E(a,H.x(this,0))},
$iaA:1}
J.cH.prototype={
iv:function(a,b){var u
H.lW(b)
if(typeof b!=="number")throw H.f(H.bU(b))
if(a<b)return-1
else if(a>b)return 1
else if(a===b){if(a===0){u=this.gbs(b)
if(this.gbs(a)===u)return 0
if(this.gbs(a))return-1
return 1}return 0}else if(isNaN(a)){if(isNaN(b))return 0
return 1}else return-1},
gbs:function(a){return a===0?1/a<0:a<0},
ji:function(a){var u
if(a>=-2147483648&&a<=2147483647)return a|0
if(isFinite(a)){u=a<0?Math.ceil(a):Math.floor(a)
return u+0}throw H.f(P.H(""+a+".toInt()"))},
aV:function(a){var u,t
if(a>=0){if(a<=2147483647)return a|0}else if(a>=-2147483648){u=a|0
return a===u?u:u-1}t=Math.floor(a)
if(isFinite(t))return t
throw H.f(P.H(""+a+".floor()"))},
W:function(a){if(a>0){if(a!==1/0)return Math.round(a)}else if(a>-1/0)return 0-Math.round(0-a)
throw H.f(P.H(""+a+".round()"))},
ee:function(a,b){var u
if(b>20)throw H.f(P.aC(b,0,20,"fractionDigits",null))
u=a.toFixed(b)
if(a===0&&this.gbs(a))return"-"+u
return u},
i:function(a){if(a===0&&1/a<0)return"-0.0"
else return""+a},
gI:function(a){var u,t,s,r,q=a|0
if(a===q)return 536870911&q
u=Math.abs(a)
t=Math.log(u)/0.6931471805599453|0
s=Math.pow(2,t)
r=u<1?u/s:s/u
return 536870911&((r*9007199254740992|0)+(r*3542243181176521|0))*599197+t*1259},
bB:function(a,b){var u=a%b
if(u===0)return 0
if(u>0)return u
if(b<0)return u-b
else return u+b},
es:function(a,b){if((a|0)===a)if(b>=1||b<-1)return a/b|0
return this.dv(a,b)},
a1:function(a,b){return(a|0)===a?a/b|0:this.dv(a,b)},
dv:function(a,b){var u=a/b
if(u>=-2147483648&&u<=2147483647)return u|0
if(u>0){if(u!==1/0)return Math.floor(u)}else if(u>-1/0)return Math.ceil(u)
throw H.f(P.H("Result of truncating division is "+H.j(u)+": "+H.j(a)+" ~/ "+b))},
bk:function(a,b){var u
if(a>0)u=this.hW(a,b)
else{u=b>31?31:b
u=a>>u>>>0}return u},
hW:function(a,b){return b>31?0:a>>>b},
$iB:1,
$iaa:1}
J.dK.prototype={$ir:1}
J.dJ.prototype={}
J.bJ.prototype={
c5:function(a,b){if(b<0)throw H.f(H.cm(a,b))
if(b>=a.length)H.z(H.cm(a,b))
return a.charCodeAt(b)},
bg:function(a,b){if(b>=a.length)throw H.f(H.cm(a,b))
return a.charCodeAt(b)},
D:function(a,b){if(typeof b!=="string")throw H.f(P.kl(b,null,null))
return a+b},
el:function(a,b){var u=b.length
if(u>a.length)return!1
return b===a.substring(0,u)},
cP:function(a,b,c){if(c==null)c=a.length
if(b<0)throw H.f(P.i_(b,null))
if(b>c)throw H.f(P.i_(b,null))
if(c>a.length)throw H.f(P.i_(c,null))
return a.substring(b,c)},
b_:function(a,b){return this.cP(a,b,null)},
jk:function(a){return a.toLowerCase()},
p:function(a,b){var u,t
if(0>=b)return""
if(b===1||a.length===0)return a
if(b!==b>>>0)throw H.f(C.H)
for(u=a,t="";!0;){if((b&1)===1)t=u+t
b=b>>>1
if(b===0)break
u+=u}return t},
an:function(a,b){var u=b-a.length
if(u<=0)return a
return this.p(" ",u)+a},
i:function(a){return a},
gI:function(a){var u,t,s
for(u=a.length,t=0,s=0;s<u;++s){t=536870911&t+a.charCodeAt(s)
t=536870911&t+((524287&t)<<10)
t^=t>>6}t=536870911&t+((67108863&t)<<3)
t^=t>>11
return 536870911&t+((16383&t)<<15)},
gk:function(a){return a.length},
$ilk:1,
$il:1}
H.a2.prototype={
gk:function(a){return this.a.length},
j:function(a,b){return C.e.c5(this.a,b)},
$acf:function(){return[P.r]},
$at:function(){return[P.r]},
$ad:function(){return[P.r]},
$ab:function(){return[P.r]}}
H.fW.prototype={}
H.c3.prototype={
gR:function(a){var u=this
return new H.cI(u,u.gk(u),[H.ad(u,"c3",0)])},
bA:function(a,b){return this.eo(0,H.o(b,{func:1,ret:P.R,args:[H.ad(this,"c3",0)]}))}}
H.iv.prototype={
gfc:function(){var u=J.aY(this.a)
return u},
gi0:function(){var u=J.aY(this.a),t=this.b
if(t>u)return u
return t},
gk:function(a){var u=J.aY(this.a),t=this.b
if(t>=u)return 0
return u-t},
B:function(a,b){var u,t=this,s=t.gi0()+b
if(b>=0){u=t.gfc()
if(typeof u!=="number")return H.F(u)
u=s>=u}else u=!0
if(u)throw H.f(P.Y(b,t,"index",null,null))
return J.dp(t.a,s)},
cB:function(a,b){var u,t,s,r=this,q=r.b,p=r.a,o=J.fp(p),n=o.gk(p),m=n-q
if(m<0)m=0
u=new Array(m)
u.fixed$length=Array
t=H.c(u,r.$ti)
for(s=0;s<m;++s){C.a.l(t,s,o.B(p,q+s))
if(o.gk(p)<n)throw H.f(P.bz(r))}return t}}
H.cI.prototype={
gG:function(a){return this.d},
t:function(){var u,t=this,s=t.a,r=J.fp(s),q=r.gk(s)
if(t.b!==q)throw H.f(P.bz(s))
u=t.c
if(u>=q){t.sb1(null)
return!1}t.sb1(r.B(s,u));++t.c
return!0},
sb1:function(a){this.d=H.E(a,H.x(this,0))},
$iaA:1}
H.hn.prototype={
gR:function(a){return new H.ho(J.bY(this.a),this.b,this.$ti)},
gk:function(a){return J.aY(this.a)},
B:function(a,b){return this.b.$1(J.dp(this.a,b))},
$ad:function(a,b){return[b]}}
H.ho.prototype={
t:function(){var u=this,t=u.b
if(t.t()){u.sb1(u.c.$1(t.gG(t)))
return!0}u.sb1(null)
return!1},
gG:function(a){return this.a},
sb1:function(a){this.a=H.E(a,H.x(this,1))},
$aaA:function(a,b){return[b]}}
H.hp.prototype={
gk:function(a){return J.aY(this.a)},
B:function(a,b){return this.b.$1(J.dp(this.a,b))},
$ac3:function(a,b){return[b]},
$ad:function(a,b){return[b]}}
H.d6.prototype={
gR:function(a){return new H.jd(J.bY(this.a),this.b,this.$ti)}}
H.jd.prototype={
t:function(){var u,t
for(u=this.a,t=this.b;u.t();)if(H.A(t.$1(u.gG(u))))return!0
return!1},
gG:function(a){var u=this.a
return u.gG(u)}}
H.c1.prototype={}
H.cf.prototype={
l:function(a,b,c){H.E(c,H.ad(this,"cf",0))
throw H.f(P.H("Cannot modify an unmodifiable list"))},
X:function(a,b,c,d,e){H.k(d,"$id",[H.ad(this,"cf",0)],"$ad")
throw H.f(P.H("Cannot modify an unmodifiable list"))},
at:function(a,b,c,d){return this.X(a,b,c,d,0)}}
H.em.prototype={}
H.iM.prototype={
am:function(a){var u,t,s=this,r=new RegExp(s.a).exec(a)
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
H.hS.prototype={
i:function(a){var u=this.b
if(u==null)return"NoSuchMethodError: "+H.j(this.a)
return"NoSuchMethodError: method not found: '"+u+"' on null"}}
H.he.prototype={
i:function(a){var u,t=this,s="NoSuchMethodError: method not found: '",r=t.b
if(r==null)return"NoSuchMethodError: "+H.j(t.a)
u=t.c
if(u==null)return s+r+"' ("+H.j(t.a)+")"
return s+r+"' on '"+u+"' ("+H.j(t.a)+")"}}
H.iW.prototype={
i:function(a){var u=this.a
return u.length===0?"Error":"Error: "+u}}
H.ki.prototype={
$1:function(a){if(!!J.T(a).$ibC)if(a.$thrownJsError==null)a.$thrownJsError=this.a
return a},
$S:14}
H.f1.prototype={
i:function(a){var u,t=this.b
if(t!=null)return t
t=this.a
u=t!==null&&typeof t==="object"?t.stack:null
return this.b=u==null?"":u},
$ias:1}
H.cw.prototype={
i:function(a){var u=this.constructor,t=u==null?null:u.name
return"Closure '"+(t==null?"unknown":t)+"'"},
$ibE:1,
gjn:function(){return this},
$C:"$1",
$R:1,
$D:null}
H.iy.prototype={}
H.il.prototype={
i:function(a){var u=this.$static_name
if(u==null)return"Closure of unknown static method"
return"Closure '"+H.cr(u)+"'"}}
H.cu.prototype={
n:function(a,b){var u=this
if(b==null)return!1
if(u===b)return!0
if(!(b instanceof H.cu))return!1
return u.a===b.a&&u.b===b.b&&u.c===b.c},
gI:function(a){var u,t=this.c
if(t==null)u=H.cR(this.a)
else u=typeof t!=="object"?J.bX(t):H.cR(t)
return(u^H.cR(this.b))>>>0},
i:function(a){var u=this.c
if(u==null)u=this.a
return"Closure '"+H.j(this.d)+"' of "+("Instance of '"+H.j(H.cS(u))+"'")}}
H.iO.prototype={
i:function(a){return this.a}}
H.fG.prototype={
i:function(a){return this.a}}
H.i7.prototype={
i:function(a){return"RuntimeError: "+H.j(this.a)}}
H.je.prototype={
i:function(a){return"Assertion failed: "+P.dG(this.a)}}
H.a0.prototype={
gk:function(a){return this.a},
gab:function(a){return new H.dP(this,[H.x(this,0)])},
dF:function(a,b){var u,t,s=this
if(typeof b==="string"){u=s.b
if(u==null)return!1
return s.d9(u,b)}else if(typeof b==="number"&&(b&0x3ffffff)===b){t=s.c
if(t==null)return!1
return s.d9(t,b)}else return s.iM(b)},
iM:function(a){var u=this.d
if(u==null)return!1
return this.ck(this.bQ(u,J.bX(a)&0x3ffffff),a)>=0},
j:function(a,b){var u,t,s,r,q=this
if(typeof b==="string"){u=q.b
if(u==null)return
t=q.bh(u,b)
s=t==null?null:t.b
return s}else if(typeof b==="number"&&(b&0x3ffffff)===b){r=q.c
if(r==null)return
t=q.bh(r,b)
s=t==null?null:t.b
return s}else return q.iN(b)},
iN:function(a){var u,t,s=this.d
if(s==null)return
u=this.bQ(s,J.bX(a)&0x3ffffff)
t=this.ck(u,a)
if(t<0)return
return u[t].b},
l:function(a,b,c){var u,t,s,r,q,p,o=this
H.E(b,H.x(o,0))
H.E(c,H.x(o,1))
if(typeof b==="string"){u=o.b
o.cZ(u==null?o.b=o.bT():u,b,c)}else if(typeof b==="number"&&(b&0x3ffffff)===b){t=o.c
o.cZ(t==null?o.c=o.bT():t,b,c)}else{s=o.d
if(s==null)s=o.d=o.bT()
r=J.bX(b)&0x3ffffff
q=o.bQ(s,r)
if(q==null)o.bZ(s,r,[o.bU(b,c)])
else{p=o.ck(q,b)
if(p>=0)q[p].b=c
else q.push(o.bU(b,c))}}},
J:function(a,b){var u,t,s=this
H.o(b,{func:1,ret:-1,args:[H.x(s,0),H.x(s,1)]})
u=s.e
t=s.r
for(;u!=null;){b.$2(u.a,u.b)
if(t!==s.r)throw H.f(P.bz(s))
u=u.c}},
cZ:function(a,b,c){var u,t=this
H.E(b,H.x(t,0))
H.E(c,H.x(t,1))
u=t.bh(a,b)
if(u==null)t.bZ(a,b,t.bU(b,c))
else u.b=c},
fB:function(){this.r=this.r+1&67108863},
bU:function(a,b){var u,t=this,s=new H.hh(H.E(a,H.x(t,0)),H.E(b,H.x(t,1)))
if(t.e==null)t.e=t.f=s
else{u=t.f
s.d=u
t.f=u.c=s}++t.a
t.fB()
return s},
ck:function(a,b){var u,t
if(a==null)return-1
u=a.length
for(t=0;t<u;++t)if(J.V(a[t].a,b))return t
return-1},
i:function(a){return P.ld(this)},
bh:function(a,b){return a[b]},
bQ:function(a,b){return a[b]},
bZ:function(a,b,c){a[b]=c},
f7:function(a,b){delete a[b]},
d9:function(a,b){return this.bh(a,b)!=null},
bT:function(){var u="<non-identifier-key>",t=Object.create(null)
this.bZ(t,u,t)
this.f7(t,u)
return t}}
H.hh.prototype={}
H.dP.prototype={
gk:function(a){return this.a.a},
gR:function(a){var u=this.a,t=new H.hi(u,u.r,this.$ti)
t.c=u.e
return t}}
H.hi.prototype={
gG:function(a){return this.d},
t:function(){var u=this,t=u.a
if(u.b!==t.r)throw H.f(P.bz(t))
else{t=u.c
if(t==null){u.scY(null)
return!1}else{u.scY(t.a)
u.c=u.c.c
return!0}}},
scY:function(a){this.d=H.E(a,H.x(this,0))},
$iaA:1}
H.k7.prototype={
$1:function(a){return this.a(a)},
$S:14}
H.k8.prototype={
$2:function(a,b){return this.a(a,b)},
$S:34}
H.k9.prototype={
$1:function(a){return this.a(H.S(a))},
$S:35}
H.hd.prototype={
i:function(a){return"RegExp/"+this.a+"/"+this.b.flags},
$ilk:1}
H.iu.prototype={$idT:1}
H.kH.prototype={
t:function(){var u,t,s=this,r=s.c,q=s.b,p=q.length,o=s.a,n=o.length
if(r+p>n){s.d=null
return!1}u=o.indexOf(q,r)
if(u<0){s.c=n+1
s.d=null
return!1}t=u+p
s.d=new H.iu(u,q)
s.c=t===s.c?t+1:t
return!0},
gG:function(a){return this.d},
$iaA:1,
$aaA:function(){return[P.dT]}}
H.cN.prototype={
fo:function(a,b,c,d){var u=P.aC(b,0,c,d,null)
throw H.f(u)},
d1:function(a,b,c,d){if(b>>>0!==b||b>c)this.fo(a,b,c,d)},
$ioH:1}
H.dY.prototype={
gk:function(a){return a.length},
dt:function(a,b,c,d,e){var u,t,s=a.length
this.d1(a,b,s,"start")
this.d1(a,c,s,"end")
if(b>c)throw H.f(P.aC(b,0,c,null,null))
u=c-b
t=d.length
if(t-e<u)throw H.f(P.ky("Not enough elements"))
if(e!==0||t!==u)d=d.subarray(e,e+u)
a.set(d,b)},
$iJ:1,
$aJ:function(){}}
H.c5.prototype={
j:function(a,b){H.be(b,a,a.length)
return a[b]},
l:function(a,b,c){H.nW(c)
H.be(b,a,a.length)
a[b]=c},
X:function(a,b,c,d,e){H.k(d,"$id",[P.B],"$ad")
if(!!J.T(d).$ic5){this.dt(a,b,c,d,e)
return}this.cQ(a,b,c,d,e)},
at:function(a,b,c,d){return this.X(a,b,c,d,0)},
$ac1:function(){return[P.B]},
$at:function(){return[P.B]},
$id:1,
$ad:function(){return[P.B]},
$ib:1,
$ab:function(){return[P.B]}}
H.cM.prototype={
l:function(a,b,c){H.a9(c)
H.be(b,a,a.length)
a[b]=c},
X:function(a,b,c,d,e){H.k(d,"$id",[P.r],"$ad")
if(!!J.T(d).$icM){this.dt(a,b,c,d,e)
return}this.cQ(a,b,c,d,e)},
at:function(a,b,c,d){return this.X(a,b,c,d,0)},
$ac1:function(){return[P.r]},
$at:function(){return[P.r]},
$id:1,
$ad:function(){return[P.r]},
$ib:1,
$ab:function(){return[P.r]}}
H.hK.prototype={
j:function(a,b){H.be(b,a,a.length)
return a[b]}}
H.hL.prototype={
j:function(a,b){H.be(b,a,a.length)
return a[b]}}
H.hM.prototype={
j:function(a,b){H.be(b,a,a.length)
return a[b]}}
H.hN.prototype={
j:function(a,b){H.be(b,a,a.length)
return a[b]}}
H.hO.prototype={
j:function(a,b){H.be(b,a,a.length)
return a[b]}}
H.cO.prototype={
gk:function(a){return a.length},
j:function(a,b){H.be(b,a,a.length)
return a[b]},
$ioI:1}
H.hP.prototype={
gk:function(a){return a.length},
j:function(a,b){H.be(b,a,a.length)
return a[b]},
$ioJ:1}
H.da.prototype={}
H.db.prototype={}
H.dc.prototype={}
H.dd.prototype={}
P.jg.prototype={
$1:function(a){var u=this.a,t=u.a
u.a=null
t.$0()},
$S:18}
P.jf.prototype={
$1:function(a){var u,t
this.a.a=H.o(a,{func:1,ret:-1})
u=this.b
t=this.c
u.firstChild?u.removeChild(t):u.appendChild(t)},
$S:40}
P.jh.prototype={
$0:function(){this.a.$0()},
$S:2}
P.ji.prototype={
$0:function(){this.a.$0()},
$S:2}
P.f7.prototype={
eP:function(a,b){if(self.setTimeout!=null)self.setTimeout(H.cl(new P.jS(this,b),0),a)
else throw H.f(P.H("`setTimeout()` not found."))},
eQ:function(a,b){if(self.setTimeout!=null)self.setInterval(H.cl(new P.jR(this,a,Date.now(),b),0),a)
else throw H.f(P.H("Periodic timer."))},
$ib7:1}
P.jS.prototype={
$0:function(){this.a.c=1
this.b.$0()},
$S:3}
P.jR.prototype={
$0:function(){var u,t=this,s=t.a,r=s.c+1,q=t.b
if(q>0){u=Date.now()-t.c
if(u>(r+1)*q)r=C.d.es(u,q)}s.c=r
t.d.$1(s)},
$S:2}
P.bd.prototype={
iQ:function(a){if((this.c&15)!==6)return!0
return this.b.b.cA(H.o(this.d,{func:1,ret:P.R,args:[P.P]}),a.a,P.R,P.P)},
iL:function(a){var u=this.e,t=P.P,s={futureOr:1,type:H.x(this,1)},r=this.b.b
if(H.fo(u,{func:1,args:[P.P,P.as]}))return H.kP(r.jd(u,a.a,a.b,null,t,P.as),s)
else return H.kP(r.cA(H.o(u,{func:1,args:[P.P]}),a.a,null,t),s)}}
P.aH.prototype={
ed:function(a,b,c){var u,t,s,r=H.x(this,0)
H.o(a,{func:1,ret:{futureOr:1,type:c},args:[r]})
u=$.a_
if(u!==C.f){H.o(a,{func:1,ret:{futureOr:1,type:c},args:[r]})
if(b!=null)b=P.nL(b,u)}t=new P.aH($.a_,[c])
s=b==null?1:3
this.d_(new P.bd(t,s,a,b,[r,c]))
return t},
jh:function(a,b){return this.ed(a,null,b)},
d_:function(a){var u,t=this,s=t.a
if(s<=1){a.a=H.e(t.c,"$ibd")
t.c=a}else{if(s===2){u=H.e(t.c,"$iaH")
s=u.a
if(s<4){u.d_(a)
return}t.a=s
t.c=u.c}P.k1(null,null,t.b,H.o(new P.jq(t,a),{func:1,ret:-1}))}},
dn:function(a){var u,t,s,r,q,p=this,o={}
o.a=a
if(a==null)return
u=p.a
if(u<=1){t=H.e(p.c,"$ibd")
s=p.c=a
if(t!=null){for(;r=s.a,r!=null;s=r);s.a=t}}else{if(u===2){q=H.e(p.c,"$iaH")
u=q.a
if(u<4){q.dn(a)
return}p.a=u
p.c=q.c}o.a=p.bj(a)
P.k1(null,null,p.b,H.o(new P.ju(o,p),{func:1,ret:-1}))}},
bX:function(){var u=H.e(this.c,"$ibd")
this.c=null
return this.bj(u)},
bj:function(a){var u,t,s
for(u=a,t=null;u!=null;t=u,u=s){s=u.a
u.a=t}return t},
d5:function(a){var u,t,s=this,r=H.x(s,0)
H.kP(a,{futureOr:1,type:r})
u=s.$ti
if(H.k2(a,"$icE",u,"$acE"))if(H.k2(a,"$iaH",u,null))P.lC(a,s)
else P.nf(a,s)
else{t=s.bX()
H.E(a,r)
s.a=4
s.c=a
P.d9(s,t)}},
d6:function(a,b){var u,t=this
H.e(b,"$ias")
u=t.bX()
t.a=8
t.c=new P.am(a,b)
P.d9(t,u)},
$icE:1}
P.jq.prototype={
$0:function(){P.d9(this.a,this.b)},
$S:2}
P.ju.prototype={
$0:function(){P.d9(this.b,this.a.a)},
$S:2}
P.jr.prototype={
$1:function(a){var u=this.a
u.a=0
u.d5(a)},
$S:18}
P.js.prototype={
$2:function(a,b){H.e(b,"$ias")
this.a.d6(a,b)},
$1:function(a){return this.$2(a,null)},
$S:36}
P.jt.prototype={
$0:function(){this.a.d6(this.b,this.c)},
$S:2}
P.jx.prototype={
$0:function(){var u,t,s,r,q,p,o=this,n=null
try{s=o.c
n=s.b.b.ea(H.o(s.d,{func:1}),null)}catch(r){u=H.au(r)
t=H.cp(r)
if(o.d){s=H.e(o.a.a.c,"$iam").a
q=u
q=s==null?q==null:s===q
s=q}else s=!1
q=o.b
if(s)q.b=H.e(o.a.a.c,"$iam")
else q.b=new P.am(u,t)
q.a=!0
return}if(!!J.T(n).$icE){if(n instanceof P.aH&&n.a>=4){if(n.a===8){s=o.b
s.b=H.e(n.c,"$iam")
s.a=!0}return}p=o.a.a
s=o.b
s.b=n.jh(new P.jy(p),null)
s.a=!1}},
$S:3}
P.jy.prototype={
$1:function(a){return this.a},
$S:41}
P.jw.prototype={
$0:function(){var u,t,s,r,q,p,o,n=this
try{s=n.b
r=H.x(s,0)
q=H.E(n.c,r)
p=H.x(s,1)
n.a.b=s.b.b.cA(H.o(s.d,{func:1,ret:{futureOr:1,type:p},args:[r]}),q,{futureOr:1,type:p},r)}catch(o){u=H.au(o)
t=H.cp(o)
s=n.a
s.b=new P.am(u,t)
s.a=!0}},
$S:3}
P.jv.prototype={
$0:function(){var u,t,s,r,q,p,o,n,m=this
try{u=H.e(m.a.a.c,"$iam")
r=m.c
if(H.A(r.iQ(u))&&r.e!=null){q=m.b
q.b=r.iL(u)
q.a=!1}}catch(p){t=H.au(p)
s=H.cp(p)
r=H.e(m.a.a.c,"$iam")
q=r.a
o=t
n=m.b
if(q==null?o==null:q===o)n.b=r
else n.b=new P.am(t,s)
n.a=!0}},
$S:3}
P.et.prototype={}
P.ip.prototype={
gk:function(a){var u,t,s=this,r={},q=new P.aH($.a_,[P.r])
r.a=0
u=H.x(s,0)
t=H.o(new P.ir(r,s),{func:1,ret:-1,args:[u]})
H.o(new P.is(r,q),{func:1,ret:-1})
W.a8(s.a,s.b,t,!1,u)
return q}}
P.ir.prototype={
$1:function(a){H.E(a,H.x(this.b,0));++this.a.a},
$S:function(){return{func:1,ret:P.O,args:[H.x(this.b,0)]}}}
P.is.prototype={
$0:function(){this.b.d5(this.a.a)},
$S:2}
P.cY.prototype={}
P.iq.prototype={}
P.b7.prototype={}
P.am.prototype={
i:function(a){return H.j(this.a)},
$ibC:1}
P.jV.prototype={$ioX:1}
P.k0.prototype={
$0:function(){var u,t=this.a,s=t.a
t=s==null?t.a=new P.e_():s
s=this.b
if(s==null)throw H.f(t)
u=H.f(t)
u.stack=s.i(0)
throw u},
$S:2}
P.jE.prototype={
je:function(a){var u,t,s,r=null
H.o(a,{func:1,ret:-1})
try{if(C.f===$.a_){a.$0()
return}P.lH(r,r,this,a,-1)}catch(s){u=H.au(s)
t=H.cp(s)
P.k_(r,r,this,u,H.e(t,"$ias"))}},
jf:function(a,b,c){var u,t,s,r=null
H.o(a,{func:1,ret:-1,args:[c]})
H.E(b,c)
try{if(C.f===$.a_){a.$1(b)
return}P.lI(r,r,this,a,b,-1,c)}catch(s){u=H.au(s)
t=H.cp(s)
P.k_(r,r,this,u,H.e(t,"$ias"))}},
it:function(a,b){return new P.jG(this,H.o(a,{func:1,ret:b}),b)},
c0:function(a){return new P.jF(this,H.o(a,{func:1,ret:-1}))},
dC:function(a,b){return new P.jH(this,H.o(a,{func:1,ret:-1,args:[b]}),b)},
ea:function(a,b){H.o(a,{func:1,ret:b})
if($.a_===C.f)return a.$0()
return P.lH(null,null,this,a,b)},
cA:function(a,b,c,d){H.o(a,{func:1,ret:c,args:[d]})
H.E(b,d)
if($.a_===C.f)return a.$1(b)
return P.lI(null,null,this,a,b,c,d)},
jd:function(a,b,c,d,e,f){H.o(a,{func:1,ret:d,args:[e,f]})
H.E(b,e)
H.E(c,f)
if($.a_===C.f)return a.$2(b,c)
return P.nM(null,null,this,a,b,c,d,e,f)}}
P.jG.prototype={
$0:function(){return this.a.ea(this.b,this.c)},
$S:function(){return{func:1,ret:this.c}}}
P.jF.prototype={
$0:function(){return this.a.je(this.b)},
$S:3}
P.jH.prototype={
$1:function(a){var u=this.c
return this.a.jf(this.b,H.E(a,u),u)},
$S:function(){return{func:1,ret:-1,args:[this.c]}}}
P.jC.prototype={
gR:function(a){var u=this,t=new P.eJ(u,u.r,u.$ti)
t.c=u.e
return t},
gk:function(a){return this.a},
P:function(a,b){var u,t
if(typeof b==="string"&&b!=="__proto__"){u=this.b
if(u==null)return!1
return H.e(u[b],"$ich")!=null}else{t=this.f3(b)
return t}},
f3:function(a){var u=this.d
if(u==null)return!1
return this.bO(this.de(u,a),a)>=0},
h:function(a,b){var u,t,s=this
H.E(b,H.x(s,0))
if(typeof b==="string"&&b!=="__proto__"){u=s.b
return s.d2(u==null?s.b=P.kG():u,b)}else if(typeof b==="number"&&(b&1073741823)===b){t=s.c
return s.d2(t==null?s.c=P.kG():t,b)}else return s.eT(0,b)},
eT:function(a,b){var u,t,s,r=this
H.E(b,H.x(r,0))
u=r.d
if(u==null)u=r.d=P.kG()
t=r.d7(b)
s=u[t]
if(s==null)u[t]=[r.bL(b)]
else{if(r.bO(s,b)>=0)return!1
s.push(r.bL(b))}return!0},
M:function(a,b){if(typeof b==="number"&&(b&1073741823)===b)return this.hI(this.c,b)
else return this.hH(0,b)},
hH:function(a,b){var u,t,s=this,r=s.d
if(r==null)return!1
u=s.de(r,b)
t=s.bO(u,b)
if(t<0)return!1
s.dw(u.splice(t,1)[0])
return!0},
d2:function(a,b){H.E(b,H.x(this,0))
if(H.e(a[b],"$ich")!=null)return!1
a[b]=this.bL(b)
return!0},
hI:function(a,b){var u
if(a==null)return!1
u=H.e(a[b],"$ich")
if(u==null)return!1
this.dw(u)
delete a[b]
return!0},
d4:function(){this.r=1073741823&this.r+1},
bL:function(a){var u,t=this,s=new P.ch(H.E(a,H.x(t,0)))
if(t.e==null)t.e=t.f=s
else{u=t.f
s.c=u
t.f=u.b=s}++t.a
t.d4()
return s},
dw:function(a){var u=this,t=a.c,s=a.b
if(t==null)u.e=s
else t.b=s
if(s==null)u.f=t
else s.c=t;--u.a
u.d4()},
d7:function(a){return J.bX(a)&1073741823},
de:function(a,b){return a[this.d7(b)]},
bO:function(a,b){var u,t
if(a==null)return-1
u=a.length
for(t=0;t<u;++t)if(J.V(a[t].a,b))return t
return-1}}
P.ch.prototype={}
P.eJ.prototype={
gG:function(a){return this.d},
t:function(){var u=this,t=u.a
if(u.b!==t.r)throw H.f(P.bz(t))
else{t=u.c
if(t==null){u.sd3(null)
return!1}else{u.sd3(H.E(t.a,H.x(u,0)))
u.c=u.c.b
return!0}}},
sd3:function(a){this.d=H.E(a,H.x(this,0))},
$iaA:1}
P.hj.prototype={$id:1,$ib:1}
P.t.prototype={
gR:function(a){return new H.cI(a,this.gk(a),[H.bf(this,a,"t",0)])},
B:function(a,b){return this.j(a,b)},
cB:function(a,b){var u,t=this,s=H.c([],[H.bf(t,a,"t",0)])
C.a.sk(s,t.gk(a))
for(u=0;u<t.gk(a);++u)C.a.l(s,u,t.j(a,u))
return s},
jj:function(a){return this.cB(a,!0)},
X:function(a,b,c,d,e){var u,t,s,r,q=this,p=H.bf(q,a,"t",0)
H.k(d,"$id",[p],"$ad")
P.kw(b,c,q.gk(a))
u=c-b
if(u===0)return
P.i0(e,"skipCount")
if(H.k2(d,"$ib",[p],"$ab")){t=e
s=d}else{s=H.n4(d,e,null,H.bf(J.T(d),d,"t",0)).cB(0,!1)
t=0}p=J.fp(s)
if(t+u>p.gk(s))throw H.f(H.mD())
if(t<b)for(r=u-1;r>=0;--r)q.l(a,b+r,p.j(s,t+r))
else for(r=0;r<u;++r)q.l(a,b+r,p.j(s,t+r))},
at:function(a,b,c,d){return this.X(a,b,c,d,0)},
ei:function(a,b,c){H.k(c,"$id",[H.bf(this,a,"t",0)],"$ad")
this.at(a,b,b+c.length,c)},
i:function(a){return P.kr(a,"[","]")}}
P.hl.prototype={}
P.hm.prototype={
$2:function(a,b){var u,t=this.a
if(!t.a)this.b.a+=", "
t.a=!1
t=this.b
u=t.a+=H.j(a)
t.a=u+": "
t.a+=H.j(b)},
$S:19}
P.af.prototype={
J:function(a,b){var u,t,s=this
H.o(b,{func:1,ret:-1,args:[H.bf(s,a,"af",0),H.bf(s,a,"af",1)]})
for(u=J.bY(s.gab(a));u.t();){t=u.gG(u)
b.$2(t,s.j(a,t))}},
gk:function(a){return J.aY(this.gab(a))},
i:function(a){return P.ld(a)},
$iG:1}
P.jJ.prototype={
aa:function(a,b){var u
for(u=J.bY(H.k(b,"$id",this.$ti,"$ad"));u.t();)this.h(0,u.gG(u))},
i:function(a){return P.kr(this,"{","}")},
B:function(a,b){var u,t,s,r=this
P.i0(b,"index")
for(u=P.nj(r,r.r,H.x(r,0)),t=0;u.t();){s=u.d
if(b===t)return s;++t}throw H.f(P.Y(b,r,"index",null,t))},
$id:1,
$ilr:1}
P.eK.prototype={}
P.cx.prototype={}
P.dz.prototype={}
P.fY.prototype={
$acx:function(){return[P.l,[P.b,P.r]]}}
P.iZ.prototype={}
P.j_.prototype={
iw:function(a){var u,t,s=P.kw(0,null,a.length),r=s-0
if(r===0)return new Uint8Array(0)
u=new Uint8Array(r*3)
t=new P.jT(u)
if(t.fk(a,0,s)!==s)t.dz(C.e.c5(a,s-1),0)
return new Uint8Array(u.subarray(0,H.nn(0,t.b,u.length)))},
$adz:function(){return[P.l,[P.b,P.r]]}}
P.jT.prototype={
dz:function(a,b){var u,t=this,s=t.c,r=t.b,q=r+1,p=s.length
if((b&64512)===56320){u=65536+((a&1023)<<10)|b&1023
t.b=q
if(r>=p)return H.h(s,r)
s[r]=240|u>>>18
r=t.b=q+1
if(q>=p)return H.h(s,q)
s[q]=128|u>>>12&63
q=t.b=r+1
if(r>=p)return H.h(s,r)
s[r]=128|u>>>6&63
t.b=q+1
if(q>=p)return H.h(s,q)
s[q]=128|u&63
return!0}else{t.b=q
if(r>=p)return H.h(s,r)
s[r]=224|a>>>12
r=t.b=q+1
if(q>=p)return H.h(s,q)
s[q]=128|a>>>6&63
t.b=r+1
if(r>=p)return H.h(s,r)
s[r]=128|a&63
return!1}},
fk:function(a,b,c){var u,t,s,r,q,p,o,n=this
if(b!==c&&(C.e.c5(a,c-1)&64512)===55296)--c
for(u=n.c,t=u.length,s=b;s<c;++s){r=C.e.bg(a,s)
if(r<=127){q=n.b
if(q>=t)break
n.b=q+1
u[q]=r}else if((r&64512)===55296){if(n.b+3>=t)break
p=s+1
if(n.dz(r,C.e.bg(a,p)))s=p}else if(r<=2047){q=n.b
o=q+1
if(o>=t)break
n.b=o
if(q>=t)return H.h(u,q)
u[q]=192|r>>>6
n.b=o+1
u[o]=128|r&63}else{q=n.b
if(q+2>=t)break
o=n.b=q+1
if(q>=t)return H.h(u,q)
u[q]=224|r>>>12
q=n.b=o+1
if(o>=t)return H.h(u,o)
u[o]=128|r>>>6&63
n.b=q+1
if(q>=t)return H.h(u,q)
u[q]=128|r&63}}return s}}
P.R.prototype={}
P.az.prototype={
n:function(a,b){if(b==null)return!1
return b instanceof P.az&&this.a===b.a&&!0},
gI:function(a){var u=this.a
return(u^C.d.bk(u,30))&1073741823},
i:function(a){var u=this,t=P.my(H.mV(u)),s=P.dB(H.mT(u)),r=P.dB(H.mP(u)),q=P.dB(H.mQ(u)),p=P.dB(H.mS(u)),o=P.dB(H.mU(u)),n=P.mz(H.mR(u)),m=t+"-"+s+"-"+r+" "+q+":"+p+":"+o+"."+n
return m}}
P.B.prototype={}
P.bB.prototype={
n:function(a,b){if(b==null)return!1
return b instanceof P.bB&&this.a===b.a},
gI:function(a){return C.d.gI(this.a)},
i:function(a){var u,t,s,r=new P.fV(),q=this.a
if(q<0)return"-"+new P.bB(0-q).i(0)
u=r.$1(C.d.a1(q,6e7)%60)
t=r.$1(C.d.a1(q,1e6)%60)
s=new P.fU().$1(q%1e6)
return""+C.d.a1(q,36e8)+":"+H.j(u)+":"+H.j(t)+"."+H.j(s)}}
P.fU.prototype={
$1:function(a){if(a>=1e5)return""+a
if(a>=1e4)return"0"+a
if(a>=1000)return"00"+a
if(a>=100)return"000"+a
if(a>=10)return"0000"+a
return"00000"+a},
$S:21}
P.fV.prototype={
$1:function(a){if(a>=10)return""+a
return"0"+a},
$S:21}
P.bC.prototype={}
P.fu.prototype={
i:function(a){return"Assertion failed"}}
P.e_.prototype={
i:function(a){return"Throw of null."}}
P.aJ.prototype={
gbN:function(){return"Invalid argument"+(!this.a?"(s)":"")},
gbM:function(){return""},
i:function(a){var u,t,s,r,q=this,p=q.c,o=p!=null?" ("+p+")":""
p=q.d
u=p==null?"":": "+H.j(p)
t=q.gbN()+o+u
if(!q.a)return t
s=q.gbM()
r=P.dG(q.b)
return t+s+": "+r}}
P.c7.prototype={
gbN:function(){return"RangeError"},
gbM:function(){var u,t,s=this.e
if(s==null){s=this.f
u=s!=null?": Not less than or equal to "+H.j(s):""}else{t=this.f
if(t==null)u=": Not greater than or equal to "+H.j(s)
else if(t>s)u=": Not in range "+H.j(s)+".."+H.j(t)+", inclusive"
else u=t<s?": Valid value range is empty":": Only valid value is "+H.j(s)}return u}}
P.hb.prototype={
gbN:function(){return"RangeError"},
gbM:function(){var u,t=H.a9(this.b)
if(typeof t!=="number")return t.ag()
if(t<0)return": index must not be negative"
u=this.f
if(u===0)return": no indices are valid"
return": index should be less than "+H.j(u)},
gk:function(a){return this.f}}
P.iX.prototype={
i:function(a){return"Unsupported operation: "+this.a}}
P.iV.prototype={
i:function(a){var u=this.a
return u!=null?"UnimplementedError: "+u:"UnimplementedError"}}
P.c9.prototype={
i:function(a){return"Bad state: "+this.a}}
P.fK.prototype={
i:function(a){var u=this.a
if(u==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+P.dG(u)+"."}}
P.hV.prototype={
i:function(a){return"Out of Memory"},
$ibC:1}
P.ed.prototype={
i:function(a){return"Stack Overflow"},
$ibC:1}
P.fP.prototype={
i:function(a){var u=this.a
return u==null?"Reading static variable during its initialization":"Reading static variable '"+u+"' during its initialization"}}
P.eB.prototype={
i:function(a){return"Exception: "+this.a}}
P.h7.prototype={
i:function(a){var u=this.a,t=""!==u?"FormatException: "+u:"FormatException",s=this.b,r=s.length>78?C.e.cP(s,0,75)+"...":s
return t+"\n"+r}}
P.bE.prototype={}
P.r.prototype={}
P.d.prototype={
bA:function(a,b){var u=H.ad(this,"d",0)
return new H.d6(this,H.o(b,{func:1,ret:P.R,args:[u]}),[u])},
gk:function(a){var u,t=this.gR(this)
for(u=0;t.t();)++u
return u},
gaL:function(a){var u,t=this.gR(this)
if(!t.t())throw H.f(H.l8())
u=t.gG(t)
if(t.t())throw H.f(H.mE())
return u},
B:function(a,b){var u,t,s
P.i0(b,"index")
for(u=this.gR(this),t=0;u.t();){s=u.gG(u)
if(b===t)return s;++t}throw H.f(P.Y(b,this,"index",null,t))},
i:function(a){return P.mC(this,"(",")")}}
P.aA.prototype={}
P.b.prototype={$id:1}
P.G.prototype={}
P.O.prototype={
gI:function(a){return P.P.prototype.gI.call(this,this)},
i:function(a){return"null"}}
P.aa.prototype={}
P.P.prototype={constructor:P.P,$iP:1,
n:function(a,b){return this===b},
gI:function(a){return H.cR(this)},
i:function(a){return"Instance of '"+H.j(H.cS(this))+"'"},
toString:function(){return this.i(this)}}
P.dT.prototype={}
P.as.prototype={}
P.l.prototype={$ilk:1}
P.bO.prototype={
gk:function(a){return this.a.length},
i:function(a){var u=this.a
return u.charCodeAt(0)==0?u:u}}
W.u.prototype={}
W.fr.prototype={
gk:function(a){return a.length}}
W.dq.prototype={
i:function(a){return String(a)},
$idq:1}
W.ft.prototype={
i:function(a){return String(a)}}
W.ct.prototype={$ict:1}
W.ds.prototype={}
W.bt.prototype={$ibt:1}
W.bv.prototype={$ibv:1}
W.c0.prototype={
cH:function(a,b,c){if(c!=null)return a.getContext(b,P.nU(c))
return a.getContext(b)},
cG:function(a,b){return this.cH(a,b,null)},
$ic0:1}
W.bw.prototype={
iz:function(a,b,c){var u=P.lQ(a.createImageData(b,c))
return u},
j8:function(a,b,c,d){a.putImageData(P.lP(b),c,d)
return},
$ibw:1}
W.bx.prototype={
gk:function(a){return a.length}}
W.cz.prototype={$icz:1}
W.fL.prototype={
gk:function(a){return a.length}}
W.U.prototype={$iU:1}
W.cA.prototype={
gk:function(a){return a.length}}
W.fM.prototype={}
W.b_.prototype={}
W.b0.prototype={}
W.fN.prototype={
gk:function(a){return a.length}}
W.fO.prototype={
gk:function(a){return a.length}}
W.fQ.prototype={
gk:function(a){return a.length}}
W.dC.prototype={$idC:1}
W.fR.prototype={
i:function(a){return String(a)}}
W.dD.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.Y(b,a,null,null,null))
return a[b]},
l:function(a,b,c){H.k(c,"$iai",[P.aa],"$aai")
throw H.f(P.H("Cannot assign element of immutable List."))},
B:function(a,b){if(b<0||b>=a.length)return H.h(a,b)
return a[b]},
$iJ:1,
$aJ:function(){return[[P.ai,P.aa]]},
$at:function(){return[[P.ai,P.aa]]},
$id:1,
$ad:function(){return[[P.ai,P.aa]]},
$ib:1,
$ab:function(){return[[P.ai,P.aa]]},
$aC:function(){return[[P.ai,P.aa]]}}
W.dE.prototype={
i:function(a){return"Rectangle ("+H.j(a.left)+", "+H.j(a.top)+") "+H.j(this.gap(a))+" x "+H.j(this.gal(a))},
n:function(a,b){var u
if(b==null)return!1
u=J.T(b)
if(!u.$iai)return!1
return a.left===u.gbt(b)&&a.top===u.gbw(b)&&this.gap(a)===u.gap(b)&&this.gal(a)===u.gal(b)},
gI:function(a){return W.lE(C.c.gI(a.left),C.c.gI(a.top),C.c.gI(this.gap(a)),C.c.gI(this.gal(a)))},
gdD:function(a){return a.bottom},
gal:function(a){return a.height},
gbt:function(a){return a.left},
gcz:function(a){return a.right},
gbw:function(a){return a.top},
gap:function(a){return a.width},
$iai:1,
$aai:function(){return[P.aa]}}
W.fS.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.Y(b,a,null,null,null))
return a[b]},
l:function(a,b,c){H.S(c)
throw H.f(P.H("Cannot assign element of immutable List."))},
B:function(a,b){if(b<0||b>=a.length)return H.h(a,b)
return a[b]},
$iJ:1,
$aJ:function(){return[P.l]},
$at:function(){return[P.l]},
$id:1,
$ad:function(){return[P.l]},
$ib:1,
$ab:function(){return[P.l]},
$aC:function(){return[P.l]}}
W.fT.prototype={
gk:function(a){return a.length}}
W.jk.prototype={
gk:function(a){return this.b.length},
j:function(a,b){var u=this.b
if(b<0||b>=u.length)return H.h(u,b)
return H.e(u[b],"$iN")},
l:function(a,b,c){var u
H.e(c,"$iN")
u=this.b
if(b<0||b>=u.length)return H.h(u,b)
this.a.replaceChild(c,u[b])},
h:function(a,b){this.a.appendChild(b)
return b},
gR:function(a){var u=this.jj(this)
return new J.al(u,u.length,[H.x(u,0)])},
X:function(a,b,c,d,e){H.k(d,"$id",[W.N],"$ad")
throw H.f(P.kC(null))},
at:function(a,b,c,d){return this.X(a,b,c,d,0)},
$at:function(){return[W.N]},
$ad:function(){return[W.N]},
$ab:function(){return[W.N]}}
W.N.prototype={
gis:function(a){return new W.jm(a)},
gc4:function(a){return new W.jk(a,a.children)},
gdE:function(a){var u=a.clientLeft,t=a.clientTop,s=a.clientWidth,r=a.clientHeight
if(typeof s!=="number")return s.ag()
if(s<0)s=-s*0
if(typeof r!=="number")return r.ag()
if(r<0)r=-r*0
return new P.ai(u,t,s,r,[P.aa])},
i:function(a){return a.localName},
ak:function(a,b,c,d){var u,t,s,r
if(c==null){u=$.l4
if(u==null){u=H.c([],[W.aw])
t=new W.dZ(u)
C.a.h(u,W.lD(null))
C.a.h(u,W.lF())
$.l4=t
d=t}else d=u
u=$.l3
if(u==null){u=new W.fd(d)
$.l3=u
c=u}else{u.a=d
c=u}}if($.bg==null){u=document
t=u.implementation.createHTMLDocument("")
$.bg=t
$.kp=t.createRange()
t=$.bg.createElement("base")
H.e(t,"$ict")
t.href=u.baseURI
$.bg.head.appendChild(t)}u=$.bg
if(u.body==null){t=u.createElement("body")
u.body=H.e(t,"$ibt")}u=$.bg
if(!!this.$ibt)s=u.body
else{s=u.createElement(a.tagName)
$.bg.body.appendChild(s)}if("createContextualFragment" in window.Range.prototype&&!C.a.P(C.P,a.tagName)){$.kp.selectNodeContents(s)
r=$.kp.createContextualFragment(b)}else{s.innerHTML=b
r=$.bg.createDocumentFragment()
for(;u=s.firstChild,u!=null;)r.appendChild(u)}u=$.bg.body
if(s==null?u!=null:s!==u)J.kW(s)
c.cI(r)
document.adoptNode(r)
return r},
iy:function(a,b,c){return this.ak(a,b,c,null)},
ej:function(a,b){a.textContent=null
a.appendChild(this.ak(a,b,null,null))},
$iN:1,
geb:function(a){return a.tagName}}
W.fX.prototype={
$1:function(a){return!!J.T(H.e(a,"$iD")).$iN},
$S:25}
W.m.prototype={$im:1}
W.i.prototype={
ij:function(a,b,c,d){H.o(c,{func:1,args:[W.m]})
if(c!=null)this.eU(a,b,c,!1)},
eU:function(a,b,c,d){return a.addEventListener(b,H.cl(H.o(c,{func:1,args:[W.m]}),1),!1)},
$ii:1}
W.aL.prototype={$iaL:1}
W.h1.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.Y(b,a,null,null,null))
return a[b]},
l:function(a,b,c){H.e(c,"$iaL")
throw H.f(P.H("Cannot assign element of immutable List."))},
B:function(a,b){if(b<0||b>=a.length)return H.h(a,b)
return a[b]},
$iJ:1,
$aJ:function(){return[W.aL]},
$at:function(){return[W.aL]},
$id:1,
$ad:function(){return[W.aL]},
$ib:1,
$ab:function(){return[W.aL]},
$aC:function(){return[W.aL]}}
W.h2.prototype={
gk:function(a){return a.length}}
W.h6.prototype={
gk:function(a){return a.length}}
W.aM.prototype={$iaM:1}
W.h9.prototype={
gk:function(a){return a.length}}
W.c2.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.Y(b,a,null,null,null))
return a[b]},
l:function(a,b,c){H.e(c,"$iD")
throw H.f(P.H("Cannot assign element of immutable List."))},
B:function(a,b){if(b<0||b>=a.length)return H.h(a,b)
return a[b]},
$iJ:1,
$aJ:function(){return[W.D]},
$at:function(){return[W.D]},
$id:1,
$ad:function(){return[W.D]},
$ib:1,
$ab:function(){return[W.D]},
$ic2:1,
$aC:function(){return[W.D]}}
W.bF.prototype={$ibF:1,
gc8:function(a){return a.data}}
W.cG.prototype={$icG:1}
W.b2.prototype={$ib2:1}
W.dR.prototype={
i:function(a){return String(a)},
$idR:1}
W.hD.prototype={
gk:function(a){return a.length}}
W.hE.prototype={
j:function(a,b){return P.bo(a.get(H.S(b)))},
J:function(a,b){var u,t
H.o(b,{func:1,ret:-1,args:[P.l,,]})
u=a.entries()
for(;!0;){t=u.next()
if(t.done)return
b.$2(t.value[0],P.bo(t.value[1]))}},
gab:function(a){var u=H.c([],[P.l])
this.J(a,new W.hF(u))
return u},
gk:function(a){return a.size},
$aaf:function(){return[P.l,null]},
$iG:1,
$aG:function(){return[P.l,null]}}
W.hF.prototype={
$2:function(a,b){return C.a.h(this.a,a)},
$S:6}
W.hG.prototype={
j:function(a,b){return P.bo(a.get(H.S(b)))},
J:function(a,b){var u,t
H.o(b,{func:1,ret:-1,args:[P.l,,]})
u=a.entries()
for(;!0;){t=u.next()
if(t.done)return
b.$2(t.value[0],P.bo(t.value[1]))}},
gab:function(a){var u=H.c([],[P.l])
this.J(a,new W.hH(u))
return u},
gk:function(a){return a.size},
$aaf:function(){return[P.l,null]},
$iG:1,
$aG:function(){return[P.l,null]}}
W.hH.prototype={
$2:function(a,b){return C.a.h(this.a,a)},
$S:6}
W.aN.prototype={$iaN:1}
W.hI.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.Y(b,a,null,null,null))
return a[b]},
l:function(a,b,c){H.e(c,"$iaN")
throw H.f(P.H("Cannot assign element of immutable List."))},
B:function(a,b){if(b<0||b>=a.length)return H.h(a,b)
return a[b]},
$iJ:1,
$aJ:function(){return[W.aN]},
$at:function(){return[W.aN]},
$id:1,
$ad:function(){return[W.aN]},
$ib:1,
$ab:function(){return[W.aN]},
$aC:function(){return[W.aN]}}
W.a5.prototype={$ia5:1}
W.ap.prototype={
gaL:function(a){var u=this.a,t=u.childNodes.length
if(t===0)throw H.f(P.ky("No elements"))
if(t>1)throw H.f(P.ky("More than one element"))
return u.firstChild},
aa:function(a,b){var u,t,s,r
H.k(b,"$id",[W.D],"$ad")
u=b.a
t=this.a
if(u!==t)for(s=u.childNodes.length,r=0;r<s;++r)t.appendChild(u.firstChild)
return},
l:function(a,b,c){var u,t
H.e(c,"$iD")
u=this.a
t=u.childNodes
if(b<0||b>=t.length)return H.h(t,b)
u.replaceChild(c,t[b])},
gR:function(a){var u=this.a.childNodes
return new W.dH(u,u.length,[H.bf(C.T,u,"C",0)])},
X:function(a,b,c,d,e){H.k(d,"$id",[W.D],"$ad")
throw H.f(P.H("Cannot setRange on Node list"))},
at:function(a,b,c,d){return this.X(a,b,c,d,0)},
gk:function(a){return this.a.childNodes.length},
j:function(a,b){var u=this.a.childNodes
if(b<0||b>=u.length)return H.h(u,b)
return u[b]},
$at:function(){return[W.D]},
$ad:function(){return[W.D]},
$ab:function(){return[W.D]}}
W.D.prototype={
j9:function(a){var u=a.parentNode
if(u!=null)u.removeChild(a)},
jb:function(a,b){var u,t
try{u=a.parentNode
J.mj(u,b,a)}catch(t){H.au(t)}return a},
i:function(a){var u=a.nodeValue
return u==null?this.en(a):u},
hK:function(a,b,c){return a.replaceChild(b,c)},
$iD:1}
W.cP.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.Y(b,a,null,null,null))
return a[b]},
l:function(a,b,c){H.e(c,"$iD")
throw H.f(P.H("Cannot assign element of immutable List."))},
B:function(a,b){if(b<0||b>=a.length)return H.h(a,b)
return a[b]},
$iJ:1,
$aJ:function(){return[W.D]},
$at:function(){return[W.D]},
$id:1,
$ad:function(){return[W.D]},
$ib:1,
$ab:function(){return[W.D]},
$aC:function(){return[W.D]}}
W.aO.prototype={$iaO:1,
gk:function(a){return a.length}}
W.hX.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.Y(b,a,null,null,null))
return a[b]},
l:function(a,b,c){H.e(c,"$iaO")
throw H.f(P.H("Cannot assign element of immutable List."))},
B:function(a,b){if(b<0||b>=a.length)return H.h(a,b)
return a[b]},
$iJ:1,
$aJ:function(){return[W.aO]},
$at:function(){return[W.aO]},
$id:1,
$ad:function(){return[W.aO]},
$ib:1,
$ab:function(){return[W.aO]},
$aC:function(){return[W.aO]}}
W.i5.prototype={
j:function(a,b){return P.bo(a.get(H.S(b)))},
J:function(a,b){var u,t
H.o(b,{func:1,ret:-1,args:[P.l,,]})
u=a.entries()
for(;!0;){t=u.next()
if(t.done)return
b.$2(t.value[0],P.bo(t.value[1]))}},
gab:function(a){var u=H.c([],[P.l])
this.J(a,new W.i6(u))
return u},
gk:function(a){return a.size},
$aaf:function(){return[P.l,null]},
$iG:1,
$aG:function(){return[P.l,null]}}
W.i6.prototype={
$2:function(a,b){return C.a.h(this.a,a)},
$S:6}
W.i8.prototype={
gk:function(a){return a.length}}
W.aQ.prototype={$iaQ:1}
W.ii.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.Y(b,a,null,null,null))
return a[b]},
l:function(a,b,c){H.e(c,"$iaQ")
throw H.f(P.H("Cannot assign element of immutable List."))},
B:function(a,b){if(b<0||b>=a.length)return H.h(a,b)
return a[b]},
$iJ:1,
$aJ:function(){return[W.aQ]},
$at:function(){return[W.aQ]},
$id:1,
$ad:function(){return[W.aQ]},
$ib:1,
$ab:function(){return[W.aQ]},
$aC:function(){return[W.aQ]}}
W.aR.prototype={$iaR:1}
W.ij.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.Y(b,a,null,null,null))
return a[b]},
l:function(a,b,c){H.e(c,"$iaR")
throw H.f(P.H("Cannot assign element of immutable List."))},
B:function(a,b){if(b<0||b>=a.length)return H.h(a,b)
return a[b]},
$iJ:1,
$aJ:function(){return[W.aR]},
$at:function(){return[W.aR]},
$id:1,
$ad:function(){return[W.aR]},
$ib:1,
$ab:function(){return[W.aR]},
$aC:function(){return[W.aR]}}
W.aS.prototype={$iaS:1,
gk:function(a){return a.length}}
W.im.prototype={
j:function(a,b){return a.getItem(H.S(b))},
J:function(a,b){var u,t
H.o(b,{func:1,ret:-1,args:[P.l,P.l]})
for(u=0;!0;++u){t=a.key(u)
if(t==null)return
b.$2(t,a.getItem(t))}},
gab:function(a){var u=H.c([],[P.l])
this.J(a,new W.io(u))
return u},
gk:function(a){return a.length},
$aaf:function(){return[P.l,P.l]},
$iG:1,
$aG:function(){return[P.l,P.l]}}
W.io.prototype={
$2:function(a,b){return C.a.h(this.a,a)},
$S:46}
W.aD.prototype={$iaD:1}
W.bm.prototype={$ibm:1}
W.ee.prototype={
ak:function(a,b,c,d){var u,t
if("createContextualFragment" in window.Range.prototype)return this.bD(a,b,c,d)
u=W.mA("<table>"+b+"</table>",c,d)
t=document.createDocumentFragment()
t.toString
u.toString
new W.ap(t).aa(0,new W.ap(u))
return t}}
W.iw.prototype={
ak:function(a,b,c,d){var u,t,s,r
if("createContextualFragment" in window.Range.prototype)return this.bD(a,b,c,d)
u=document
t=u.createDocumentFragment()
u=C.x.ak(u.createElement("table"),b,c,d)
u.toString
u=new W.ap(u)
s=u.gaL(u)
s.toString
u=new W.ap(s)
r=u.gaL(u)
t.toString
r.toString
new W.ap(t).aa(0,new W.ap(r))
return t}}
W.ix.prototype={
ak:function(a,b,c,d){var u,t,s
if("createContextualFragment" in window.Range.prototype)return this.bD(a,b,c,d)
u=document
t=u.createDocumentFragment()
u=C.x.ak(u.createElement("table"),b,c,d)
u.toString
u=new W.ap(u)
s=u.gaL(u)
t.toString
s.toString
new W.ap(t).aa(0,new W.ap(s))
return t}}
W.d_.prototype={$id_:1}
W.aU.prototype={$iaU:1}
W.aE.prototype={$iaE:1}
W.iz.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.Y(b,a,null,null,null))
return a[b]},
l:function(a,b,c){H.e(c,"$iaE")
throw H.f(P.H("Cannot assign element of immutable List."))},
B:function(a,b){if(b<0||b>=a.length)return H.h(a,b)
return a[b]},
$iJ:1,
$aJ:function(){return[W.aE]},
$at:function(){return[W.aE]},
$id:1,
$ad:function(){return[W.aE]},
$ib:1,
$ab:function(){return[W.aE]},
$aC:function(){return[W.aE]}}
W.iA.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.Y(b,a,null,null,null))
return a[b]},
l:function(a,b,c){H.e(c,"$iaU")
throw H.f(P.H("Cannot assign element of immutable List."))},
B:function(a,b){if(b<0||b>=a.length)return H.h(a,b)
return a[b]},
$iJ:1,
$aJ:function(){return[W.aU]},
$at:function(){return[W.aU]},
$id:1,
$ad:function(){return[W.aU]},
$ib:1,
$ab:function(){return[W.aU]},
$aC:function(){return[W.aU]}}
W.iG.prototype={
gk:function(a){return a.length}}
W.aW.prototype={$iaW:1}
W.aX.prototype={$iaX:1}
W.iJ.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.Y(b,a,null,null,null))
return a[b]},
l:function(a,b,c){H.e(c,"$iaW")
throw H.f(P.H("Cannot assign element of immutable List."))},
B:function(a,b){if(b<0||b>=a.length)return H.h(a,b)
return a[b]},
$iJ:1,
$aJ:function(){return[W.aW]},
$at:function(){return[W.aW]},
$id:1,
$ad:function(){return[W.aW]},
$ib:1,
$ab:function(){return[W.aW]},
$aC:function(){return[W.aW]}}
W.iK.prototype={
gk:function(a){return a.length}}
W.bQ.prototype={}
W.iY.prototype={
i:function(a){return String(a)}}
W.jc.prototype={
gk:function(a){return a.length}}
W.bc.prototype={
giC:function(a){if(a.deltaY!==undefined)return a.deltaY
throw H.f(P.H("deltaY is not supported"))},
giB:function(a){if(a.deltaX!==undefined)return a.deltaX
throw H.f(P.H("deltaX is not supported"))},
$ibc:1}
W.d7.prototype={
hL:function(a,b){return a.requestAnimationFrame(H.cl(H.o(b,{func:1,ret:-1,args:[P.aa]}),1))},
fd:function(a){if(!!(a.requestAnimationFrame&&a.cancelAnimationFrame))return;(function(b){var u=['ms','moz','webkit','o']
for(var t=0;t<u.length&&!b.requestAnimationFrame;++t){b.requestAnimationFrame=b[u[t]+'RequestAnimationFrame']
b.cancelAnimationFrame=b[u[t]+'CancelAnimationFrame']||b[u[t]+'CancelRequestAnimationFrame']}if(b.requestAnimationFrame&&b.cancelAnimationFrame)return
b.requestAnimationFrame=function(c){return window.setTimeout(function(){c(Date.now())},16)}
b.cancelAnimationFrame=function(c){clearTimeout(c)}})(a)}}
W.d8.prototype={$id8:1}
W.jl.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.Y(b,a,null,null,null))
return a[b]},
l:function(a,b,c){H.e(c,"$iU")
throw H.f(P.H("Cannot assign element of immutable List."))},
B:function(a,b){if(b<0||b>=a.length)return H.h(a,b)
return a[b]},
$iJ:1,
$aJ:function(){return[W.U]},
$at:function(){return[W.U]},
$id:1,
$ad:function(){return[W.U]},
$ib:1,
$ab:function(){return[W.U]},
$aC:function(){return[W.U]}}
W.ew.prototype={
i:function(a){return"Rectangle ("+H.j(a.left)+", "+H.j(a.top)+") "+H.j(a.width)+" x "+H.j(a.height)},
n:function(a,b){var u
if(b==null)return!1
u=J.T(b)
if(!u.$iai)return!1
return a.left===u.gbt(b)&&a.top===u.gbw(b)&&a.width===u.gap(b)&&a.height===u.gal(b)},
gI:function(a){return W.lE(C.c.gI(a.left),C.c.gI(a.top),C.c.gI(a.width),C.c.gI(a.height))},
gal:function(a){return a.height},
gap:function(a){return a.width}}
W.jz.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.Y(b,a,null,null,null))
return a[b]},
l:function(a,b,c){H.e(c,"$iaM")
throw H.f(P.H("Cannot assign element of immutable List."))},
B:function(a,b){if(b<0||b>=a.length)return H.h(a,b)
return a[b]},
$iJ:1,
$aJ:function(){return[W.aM]},
$at:function(){return[W.aM]},
$id:1,
$ad:function(){return[W.aM]},
$ib:1,
$ab:function(){return[W.aM]},
$aC:function(){return[W.aM]}}
W.eP.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.Y(b,a,null,null,null))
return a[b]},
l:function(a,b,c){H.e(c,"$iD")
throw H.f(P.H("Cannot assign element of immutable List."))},
B:function(a,b){if(b<0||b>=a.length)return H.h(a,b)
return a[b]},
$iJ:1,
$aJ:function(){return[W.D]},
$at:function(){return[W.D]},
$id:1,
$ad:function(){return[W.D]},
$ib:1,
$ab:function(){return[W.D]},
$aC:function(){return[W.D]}}
W.jM.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.Y(b,a,null,null,null))
return a[b]},
l:function(a,b,c){H.e(c,"$iaS")
throw H.f(P.H("Cannot assign element of immutable List."))},
B:function(a,b){if(b<0||b>=a.length)return H.h(a,b)
return a[b]},
$iJ:1,
$aJ:function(){return[W.aS]},
$at:function(){return[W.aS]},
$id:1,
$ad:function(){return[W.aS]},
$ib:1,
$ab:function(){return[W.aS]},
$aC:function(){return[W.aS]}}
W.jN.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.Y(b,a,null,null,null))
return a[b]},
l:function(a,b,c){H.e(c,"$iaD")
throw H.f(P.H("Cannot assign element of immutable List."))},
B:function(a,b){if(b<0||b>=a.length)return H.h(a,b)
return a[b]},
$iJ:1,
$aJ:function(){return[W.aD]},
$at:function(){return[W.aD]},
$id:1,
$ad:function(){return[W.aD]},
$ib:1,
$ab:function(){return[W.aD]},
$aC:function(){return[W.aD]}}
W.jj.prototype={
J:function(a,b){var u,t,s,r,q
H.o(b,{func:1,ret:-1,args:[P.l,P.l]})
for(u=this.gab(this),t=u.length,s=this.a,r=0;r<u.length;u.length===t||(0,H.v)(u),++r){q=u[r]
b.$2(q,s.getAttribute(q))}},
gab:function(a){var u,t,s,r=this.a.attributes,q=H.c([],[P.l])
for(u=r.length,t=0;t<u;++t){if(t>=r.length)return H.h(r,t)
s=H.e(r[t],"$id8")
if(s.namespaceURI==null)C.a.h(q,s.name)}return q},
$aaf:function(){return[P.l,P.l]},
$aG:function(){return[P.l,P.l]}}
W.jm.prototype={
j:function(a,b){return this.a.getAttribute(H.S(b))},
gk:function(a){return this.gab(this).length}}
W.jn.prototype={}
W.kF.prototype={}
W.jo.prototype={}
W.jp.prototype={
$1:function(a){return this.a.$1(H.e(a,"$im"))},
$S:30}
W.bS.prototype={
eA:function(a){var u
if($.eE.a===0){for(u=0;u<262;++u)$.eE.l(0,C.O[u],W.o2())
for(u=0;u<12;++u)$.eE.l(0,C.n[u],W.o3())}},
aS:function(a){return $.mh().P(0,W.cB(a))},
aw:function(a,b,c){var u=$.eE.j(0,H.j(W.cB(a))+"::"+b)
if(u==null)u=$.eE.j(0,"*::"+b)
if(u==null)return!1
return H.kM(u.$4(a,b,c,this))},
$iaw:1}
W.C.prototype={
gR:function(a){return new W.dH(a,this.gk(a),[H.bf(this,a,"C",0)])},
X:function(a,b,c,d,e){H.k(d,"$id",[H.bf(this,a,"C",0)],"$ad")
throw H.f(P.H("Cannot setRange on immutable List."))},
at:function(a,b,c,d){return this.X(a,b,c,d,0)}}
W.dZ.prototype={
aS:function(a){return C.a.dB(this.a,new W.hR(a))},
aw:function(a,b,c){return C.a.dB(this.a,new W.hQ(a,b,c))},
$iaw:1}
W.hR.prototype={
$1:function(a){return H.e(a,"$iaw").aS(this.a)},
$S:16}
W.hQ.prototype={
$1:function(a){return H.e(a,"$iaw").aw(this.a,this.b,this.c)},
$S:16}
W.eX.prototype={
eN:function(a,b,c,d){var u,t,s
this.a.aa(0,c)
u=b.bA(0,new W.jK())
t=b.bA(0,new W.jL())
this.b.aa(0,u)
s=this.c
s.aa(0,C.Q)
s.aa(0,t)},
aS:function(a){return this.a.P(0,W.cB(a))},
aw:function(a,b,c){var u=this,t=W.cB(a),s=u.c
if(s.P(0,H.j(t)+"::"+b))return u.d.im(c)
else if(s.P(0,"*::"+b))return u.d.im(c)
else{s=u.b
if(s.P(0,H.j(t)+"::"+b))return!0
else if(s.P(0,"*::"+b))return!0
else if(s.P(0,H.j(t)+"::*"))return!0
else if(s.P(0,"*::*"))return!0}return!1},
$iaw:1}
W.jK.prototype={
$1:function(a){return!C.a.P(C.n,H.S(a))},
$S:15}
W.jL.prototype={
$1:function(a){return C.a.P(C.n,H.S(a))},
$S:15}
W.jP.prototype={
aw:function(a,b,c){if(this.er(a,b,c))return!0
if(b==="template"&&c==="")return!0
if(a.getAttribute("template")==="")return this.e.P(0,b)
return!1}}
W.jQ.prototype={
$1:function(a){return"TEMPLATE::"+H.j(H.S(a))},
$S:31}
W.jO.prototype={
aS:function(a){var u=J.T(a)
if(!!u.$icV)return!1
u=!!u.$ip
if(u&&W.cB(a)==="foreignObject")return!1
if(u)return!0
return!1},
aw:function(a,b,c){if(b==="is"||C.e.el(b,"on"))return!1
return this.aS(a)},
$iaw:1}
W.dH.prototype={
t:function(){var u=this,t=u.c+1,s=u.b
if(t<s){u.sdf(J.fq(u.a,t))
u.c=t
return!0}u.sdf(null)
u.c=s
return!1},
gG:function(a){return this.d},
sdf:function(a){this.d=H.E(a,H.x(this,0))},
$iaA:1}
W.aw.prototype={}
W.jI.prototype={$ioK:1}
W.fd.prototype={
cI:function(a){new W.jU(this).$2(a,null)},
b4:function(a,b){if(b==null)J.kW(a)
else b.removeChild(a)},
hQ:function(a,b){var u,t,s,r,q,p=!0,o=null,n=null
try{o=J.mm(a)
n=o.a.getAttribute("is")
H.e(a,"$iN")
u=function(c){if(!(c.attributes instanceof NamedNodeMap))return true
var m=c.childNodes
if(c.lastChild&&c.lastChild!==m[m.length-1])return true
if(c.children)if(!(c.children instanceof HTMLCollection||c.children instanceof NodeList))return true
var l=0
if(c.children)l=c.children.length
for(var k=0;k<l;k++){var j=c.children[k]
if(j.id=='attributes'||j.name=='attributes'||j.id=='lastChild'||j.name=='lastChild'||j.id=='children'||j.name=='children')return true}return false}(a)
p=H.A(u)?!0:!(a.attributes instanceof NamedNodeMap)}catch(r){H.au(r)}t="element unprintable"
try{t=J.av(a)}catch(r){H.au(r)}try{s=W.cB(a)
this.hP(H.e(a,"$iN"),b,p,t,s,H.e(o,"$iG"),H.S(n))}catch(r){if(H.au(r) instanceof P.aJ)throw r
else{this.b4(a,b)
window
q="Removing corrupted element "+H.j(t)
if(typeof console!="undefined")window.console.warn(q)}}},
hP:function(a,b,c,d,e,f,g){var u,t,s,r,q,p,o=this
if(c){o.b4(a,b)
window
u="Removing element due to corrupted attributes on <"+d+">"
if(typeof console!="undefined")window.console.warn(u)
return}if(!o.a.aS(a)){o.b4(a,b)
window
u="Removing disallowed element <"+H.j(e)+"> from "+H.j(b)
if(typeof console!="undefined")window.console.warn(u)
return}if(g!=null)if(!o.a.aw(a,"is",g)){o.b4(a,b)
window
u="Removing disallowed type extension <"+H.j(e)+' is="'+g+'">'
if(typeof console!="undefined")window.console.warn(u)
return}u=f.gab(f)
t=H.c(u.slice(0),[H.x(u,0)])
for(s=f.gab(f).length-1,u=f.a;s>=0;--s){if(s>=t.length)return H.h(t,s)
r=t[s]
q=o.a
p=J.mp(r)
H.S(r)
if(!q.aw(a,p,u.getAttribute(r))){window
q="Removing disallowed attribute <"+H.j(e)+" "+r+'="'+H.j(u.getAttribute(r))+'">'
if(typeof console!="undefined")window.console.warn(q)
u.removeAttribute(r)}}if(!!J.T(a).$id_)o.cI(a.content)},
$iou:1}
W.jU.prototype={
$2:function(a,b){var u,t,s,r,q,p=this.a
switch(a.nodeType){case 1:p.hQ(a,b)
break
case 8:case 11:case 3:case 4:break
default:p.b4(a,b)}u=a.lastChild
for(p=a==null;null!=u;){t=null
try{t=u.previousSibling}catch(s){H.au(s)
r=H.e(u,"$iD")
if(p){q=r.parentNode
if(q!=null)q.removeChild(r)}else a.removeChild(r)
u=null
t=a.lastChild}if(u!=null)this.$2(u,a)
u=H.e(t,"$iD")}},
$S:32}
W.ev.prototype={}
W.ex.prototype={}
W.ey.prototype={}
W.ez.prototype={}
W.eA.prototype={}
W.eC.prototype={}
W.eD.prototype={}
W.eF.prototype={}
W.eG.prototype={}
W.eL.prototype={}
W.eM.prototype={}
W.eN.prototype={}
W.eO.prototype={}
W.eQ.prototype={}
W.eR.prototype={}
W.eU.prototype={}
W.eV.prototype={}
W.eW.prototype={}
W.de.prototype={}
W.df.prototype={}
W.eY.prototype={}
W.eZ.prototype={}
W.f2.prototype={}
W.f5.prototype={}
W.f6.prototype={}
W.dg.prototype={}
W.dh.prototype={}
W.f8.prototype={}
W.f9.prototype={}
W.fe.prototype={}
W.ff.prototype={}
W.fg.prototype={}
W.fh.prototype={}
W.fi.prototype={}
W.fj.prototype={}
W.fk.prototype={}
W.fl.prototype={}
W.fm.prototype={}
W.fn.prototype={}
P.fc.prototype={$ibF:1,
gc8:function(a){return this.a}}
P.k3.prototype={
$2:function(a,b){this.a[a]=b},
$S:19}
P.h3.prototype={
gbi:function(){var u=this.b,t=H.ad(u,"t",0),s=W.N
return new H.hn(new H.d6(u,H.o(new P.h4(),{func:1,ret:P.R,args:[t]}),[t]),H.o(new P.h5(),{func:1,ret:s,args:[t]}),[t,s])},
l:function(a,b,c){var u
H.e(c,"$iN")
u=this.gbi()
J.mo(u.b.$1(J.dp(u.a,b)),c)},
h:function(a,b){this.b.a.appendChild(b)},
X:function(a,b,c,d,e){H.k(d,"$id",[W.N],"$ad")
throw H.f(P.H("Cannot setRange on filtered list"))},
at:function(a,b,c,d){return this.X(a,b,c,d,0)},
gk:function(a){return J.aY(this.gbi().a)},
j:function(a,b){var u=this.gbi()
return u.b.$1(J.dp(u.a,b))},
gR:function(a){var u=P.lc(this.gbi(),!1,W.N)
return new J.al(u,u.length,[H.x(u,0)])},
$at:function(){return[W.N]},
$ad:function(){return[W.N]},
$ab:function(){return[W.N]}}
P.h4.prototype={
$1:function(a){return!!J.T(H.e(a,"$iD")).$iN},
$S:25}
P.h5.prototype={
$1:function(a){return H.n(H.e(a,"$iD"),"$iN")},
$S:33}
P.jD.prototype={
gcz:function(a){var u=this.a,t=this.c
if(typeof u!=="number")return u.D()
if(typeof t!=="number")return H.F(t)
return H.E(u+t,H.x(this,0))},
gdD:function(a){var u=this.b,t=this.d
if(typeof u!=="number")return u.D()
if(typeof t!=="number")return H.F(t)
return H.E(u+t,H.x(this,0))},
i:function(a){var u=this
return"Rectangle ("+H.j(u.a)+", "+H.j(u.b)+") "+H.j(u.c)+" x "+H.j(u.d)},
n:function(a,b){var u,t,s,r,q,p=this
if(b==null)return!1
u=J.T(b)
if(!!u.$iai){t=p.a
if(t==u.gbt(b)){s=p.b
if(s==u.gbw(b)){r=p.c
if(typeof t!=="number")return t.D()
if(typeof r!=="number")return H.F(r)
q=H.x(p,0)
if(H.E(t+r,q)===u.gcz(b)){t=p.d
if(typeof s!=="number")return s.D()
if(typeof t!=="number")return H.F(t)
u=H.E(s+t,q)===u.gdD(b)}else u=!1}else u=!1}else u=!1}else u=!1
return u},
gI:function(a){var u,t=this,s=t.a,r=J.bX(s),q=t.b,p=J.bX(q),o=t.c
if(typeof s!=="number")return s.D()
if(typeof o!=="number")return H.F(o)
u=H.x(t,0)
o=C.d.gI(H.E(s+o,u))
s=t.d
if(typeof q!=="number")return q.D()
if(typeof s!=="number")return H.F(s)
u=C.d.gI(H.E(q+s,u))
return P.ni(P.jB(P.jB(P.jB(P.jB(0,r),p),o),u))}}
P.ai.prototype={
gbt:function(a){return this.a},
gbw:function(a){return this.b},
gap:function(a){return this.c},
gal:function(a){return this.d}}
P.b3.prototype={$ib3:1}
P.hg.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.Y(b,a,null,null,null))
return a.getItem(b)},
l:function(a,b,c){H.e(c,"$ib3")
throw H.f(P.H("Cannot assign element of immutable List."))},
B:function(a,b){return this.j(a,b)},
$at:function(){return[P.b3]},
$id:1,
$ad:function(){return[P.b3]},
$ib:1,
$ab:function(){return[P.b3]},
$aC:function(){return[P.b3]}}
P.b6.prototype={$ib6:1}
P.hT.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.Y(b,a,null,null,null))
return a.getItem(b)},
l:function(a,b,c){H.e(c,"$ib6")
throw H.f(P.H("Cannot assign element of immutable List."))},
B:function(a,b){return this.j(a,b)},
$at:function(){return[P.b6]},
$id:1,
$ad:function(){return[P.b6]},
$ib:1,
$ab:function(){return[P.b6]},
$aC:function(){return[P.b6]}}
P.hZ.prototype={
gk:function(a){return a.length}}
P.cV.prototype={$icV:1}
P.it.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.Y(b,a,null,null,null))
return a.getItem(b)},
l:function(a,b,c){H.S(c)
throw H.f(P.H("Cannot assign element of immutable List."))},
B:function(a,b){return this.j(a,b)},
$at:function(){return[P.l]},
$id:1,
$ad:function(){return[P.l]},
$ib:1,
$ab:function(){return[P.l]},
$aC:function(){return[P.l]}}
P.p.prototype={
gc4:function(a){return new P.h3(a,new W.ap(a))},
ak:function(a,b,c,d){var u,t,s,r,q,p=H.c([],[W.aw])
C.a.h(p,W.lD(null))
C.a.h(p,W.lF())
C.a.h(p,new W.jO())
c=new W.fd(new W.dZ(p))
u='<svg version="1.1">'+b+"</svg>"
p=document
t=p.body
s=(t&&C.p).iy(t,u,c)
r=p.createDocumentFragment()
s.toString
p=new W.ap(s)
q=p.gaL(p)
for(;p=q.firstChild,p!=null;)r.appendChild(p)
return r},
$ip:1}
P.b8.prototype={$ib8:1}
P.iL.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.Y(b,a,null,null,null))
return a.getItem(b)},
l:function(a,b,c){H.e(c,"$ib8")
throw H.f(P.H("Cannot assign element of immutable List."))},
B:function(a,b){return this.j(a,b)},
$at:function(){return[P.b8]},
$id:1,
$ad:function(){return[P.b8]},
$ib:1,
$ab:function(){return[P.b8]},
$aC:function(){return[P.b8]}}
P.eH.prototype={}
P.eI.prototype={}
P.eS.prototype={}
P.eT.prototype={}
P.f3.prototype={}
P.f4.prototype={}
P.fa.prototype={}
P.fb.prototype={}
P.fw.prototype={
gk:function(a){return a.length}}
P.fx.prototype={
j:function(a,b){return P.bo(a.get(H.S(b)))},
J:function(a,b){var u,t
H.o(b,{func:1,ret:-1,args:[P.l,,]})
u=a.entries()
for(;!0;){t=u.next()
if(t.done)return
b.$2(t.value[0],P.bo(t.value[1]))}},
gab:function(a){var u=H.c([],[P.l])
this.J(a,new P.fy(u))
return u},
gk:function(a){return a.size},
$aaf:function(){return[P.l,null]},
$iG:1,
$aG:function(){return[P.l,null]}}
P.fy.prototype={
$2:function(a,b){return C.a.h(this.a,a)},
$S:6}
P.fz.prototype={
gk:function(a){return a.length}}
P.bZ.prototype={}
P.hU.prototype={
gk:function(a){return a.length}}
P.eu.prototype={}
P.dt.prototype={$idt:1}
P.dI.prototype={$idI:1}
P.e2.prototype={$ie2:1}
P.e5.prototype={$ie5:1}
P.c8.prototype={
ec:function(a,b,c,d,e,f,g,h,i,j){var u,t=i==null
if(!t&&h!=null&&typeof g==="number"&&Math.floor(g)===g){a.texImage2D(b,c,d,e,f,g,h,i,j)
return}u=J.T(g)
if(!!u.$ibF&&h==null&&t&&!0){a.texImage2D(b,c,d,e,f,P.lP(g))
return}if(!!u.$icG&&h==null&&t&&!0){this.i3(a,b,c,d,e,f,g)
return}throw H.f(P.mq("Incorrect number or type of arguments"))},
jg:function(a,b,c,d,e,f,g){return this.ec(a,b,c,d,e,f,g,null,null,null)},
i3:function(a,b,c,d,e,f,g){return a.texImage2D(b,c,d,e,f,g)},
a0:function(a,b,c){return a.uniform1f(b,c)},
aY:function(a,b,c){return a.uniform1i(b,c)},
by:function(a,b,c,d){return a.uniform2f(b,c,d)},
T:function(a,b,c,d,e){return a.uniform3f(b,c,d,e)},
cD:function(a,b,c,d,e,f){return a.uniform4f(b,c,d,e,f)},
ef:function(a,b,c,d){return a.uniformMatrix3fv(b,!1,d)},
cE:function(a,b,c,d){return a.uniformMatrix4fv(b,!1,d)},
$ic8:1}
P.e6.prototype={$ie6:1}
P.ef.prototype={$ief:1}
P.el.prototype={$iel:1}
P.ik.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.Y(b,a,null,null,null))
return P.bo(a.item(b))},
l:function(a,b,c){H.e(c,"$iG")
throw H.f(P.H("Cannot assign element of immutable List."))},
B:function(a,b){return this.j(a,b)},
$at:function(){return[[P.G,,,]]},
$id:1,
$ad:function(){return[[P.G,,,]]},
$ib:1,
$ab:function(){return[[P.G,,,]]},
$aC:function(){return[[P.G,,,]]}}
P.f_.prototype={}
P.f0.prototype={}
O.X.prototype={
bd:function(a){var u=this
u.sfu(H.c([],[a]))
u.sdk(null)
u.sdh(null)
u.sdl(null)},
cK:function(a,b,c){var u=this,t=H.ad(u,"X",0)
H.o(b,{func:1,ret:P.R,args:[[P.d,t]]})
t={func:1,ret:-1,args:[P.r,[P.d,t]]}
H.o(a,t)
H.o(c,t)
u.sdk(b)
u.sdh(a)
u.sdl(c)},
aK:function(a,b){return this.cK(a,null,b)},
av:function(a){var u
H.k(a,"$id",[H.ad(this,"X",0)],"$ad")
u=this.b
if(u!=null)return u.$1(a)
return!0},
dg:function(a,b){var u
H.k(b,"$id",[H.ad(this,"X",0)],"$ad")
u=this.c
if(u!=null)u.$2(a,b)},
gk:function(a){return this.a.length},
gR:function(a){var u=this.a
return new J.al(u,u.length,[H.x(u,0)])},
B:function(a,b){var u=this.a
if(b<0||b>=u.length)return H.h(u,b)
return u[b]},
h:function(a,b){var u,t,s=this,r=H.ad(s,"X",0)
H.E(b,r)
r=[r]
if(H.A(s.av(H.c([b],r)))){u=s.a
t=u.length
C.a.h(u,b)
s.dg(t,H.c([b],r))}},
aa:function(a,b){var u,t,s=this
H.k(b,"$id",[H.ad(s,"X",0)],"$ad")
if(H.A(s.av(b))){u=s.a
t=u.length
C.a.aa(u,b)
s.dg(t,b)}},
sfu:function(a){this.a=H.k(a,"$ib",[H.ad(this,"X",0)],"$ab")},
sdk:function(a){this.b=H.o(a,{func:1,ret:P.R,args:[[P.d,H.ad(this,"X",0)]]})},
sdh:function(a){this.c=H.o(a,{func:1,ret:-1,args:[P.r,[P.d,H.ad(this,"X",0)]]})},
sdl:function(a){H.o(a,{func:1,ret:-1,args:[P.r,[P.d,H.ad(this,"X",0)]]})},
$id:1}
O.cK.prototype={
gk:function(a){return this.a.length},
gm:function(){var u=this.b
return u==null?this.b=D.K():u},
aM:function(){var u=this.b
if(u!=null)u.v(null)},
gV:function(a){var u=this.a
if(u.length>0)return C.a.gcm(u)
else return V.bL()},
bu:function(a){var u=this.a
if(a==null)C.a.h(u,V.bL())
else C.a.h(u,a)
this.aM()},
aH:function(){var u=this.a
if(u.length>0){u.pop()
this.aM()}},
sbR:function(a){this.a=H.k(a,"$ib",[V.a4],"$ab")}}
E.fB.prototype={}
E.an.prototype={
d0:function(){var u,t
this.e=null
for(u=this.y.a,u=new J.al(u,u.length,[H.x(u,0)]);u.t();){t=u.d
if(t.f==null)t.d0()}},
scM:function(a,b){var u,t,s=this,r=s.c
if(r!=b){s.d=s.c=b
s.e=null
if(r!=null)r.gm().M(0,s.ge2())
u=s.c
if(u!=null)u.gm().h(0,s.ge2())
t=new D.y("shape",r,s.c,[F.e7])
t.b=!0
s.ar(t)}},
saJ:function(a){var u,t,s=this,r=s.f
if(r!=a){if(r!=null)r.gm().M(0,s.ge4())
u=s.f
s.f=a
if(a!=null)a.gm().h(0,s.ge4())
s.d0()
t=new D.y("technique",u,s.f,[O.bP])
t.b=!0
s.ar(t)}},
sct:function(a){var u,t,s=this
if(!J.V(s.r,a)){u=s.r
if(u!=null)u.gm().M(0,s.ge0())
if(a!=null)a.gm().h(0,s.ge0())
s.r=a
t=new D.y("mover",u,a,[U.ab])
t.b=!0
s.ar(t)}},
a5:function(a,b){var u,t,s=this,r=s.r,q=r!=null?r.ay(0,b,s):null
if(!J.V(q,s.x)){u=s.x
s.x=q
t=new D.y("matrix",u,q,[V.a4])
t.b=!0
s.ar(t)}r=s.f
if(r!=null)r.a5(0,b)
for(r=s.y.a,r=new J.al(r,r.length,[H.x(r,0)]);r.t();)r.d.a5(0,b)},
a3:function(a){var u,t=this,s=a.dx,r=t.x
s.toString
if(r==null)C.a.h(s.a,s.gV(s))
else C.a.h(s.a,r.p(0,s.gV(s)))
s.aM()
a.cw(t.f)
s=a.dy
u=(s&&C.a).gcm(s)
if(u!=null&&t.d!=null)u.bv(a,t)
for(s=t.y.a,s=new J.al(s,s.length,[H.x(s,0)]);s.t();)s.d.a3(a)
a.cv()
a.dx.aH()},
ar:function(a){var u=this.z
if(u!=null)u.v(a)},
a2:function(){return this.ar(null)},
e3:function(a){H.e(a,"$iq")
this.e=null
this.ar(a)},
iY:function(){return this.e3(null)},
e5:function(a){this.ar(H.e(a,"$iq"))},
iZ:function(){return this.e5(null)},
e1:function(a){this.ar(H.e(a,"$iq"))},
iX:function(){return this.e1(null)},
e_:function(a){this.ar(H.e(a,"$iq"))},
iU:function(){return this.e_(null)},
iT:function(a,b){var u,t,s,r,q,p,o
H.k(b,"$id",[E.an],"$ad")
for(u=b.length,t=this.gdZ(),s={func:1,ret:-1,args:[D.q]},r=[s],q=0;q<b.length;b.length===u||(0,H.v)(b),++q){p=b[q]
if(p!=null){o=p.z
if(o==null){o=new D.bD()
o.sa8(null)
o.saQ(null)
o.c=null
o.d=0
p.z=o}H.o(t,s)
if(o.a==null)o.sa8(H.c([],r))
o=o.a;(o&&C.a).h(o,t)}}this.a2()},
iW:function(a,b){var u,t
H.k(b,"$id",[E.an],"$ad")
for(u=b.gR(b),t=this.gdZ();u.t();)u.gG(u).gm().M(0,t)
this.a2()},
i:function(a){var u=this.a,t=u.length
if(t<=0)return"Unnamed entity"
return u},
sez:function(a,b){this.y=H.k(b,"$iX",[E.an],"$aX")},
$ic4:1}
E.i1.prototype={
ev:function(a,b){var u,t,s=this
s.d=s.c=512
s.e=0
s.x=s.r=s.f=new P.az(Date.now(),!1)
s.y=0
s.cx=s.ch=s.Q=s.z=null
u=new O.cK()
t=[V.a4]
u.sbR(H.c([],t))
u.b=null
u.gm().h(0,new E.i2(s))
s.cy=u
u=new O.cK()
u.sbR(H.c([],t))
u.b=null
u.gm().h(0,new E.i3(s))
s.db=u
u=new O.cK()
u.sbR(H.c([],t))
u.b=null
u.gm().h(0,new E.i4(s))
s.dx=u
s.si2(H.c([],[O.bP]))
u=s.dy;(u&&C.a).h(u,null)
s.shV(new H.a0([P.l,A.cW]))},
gj7:function(){var u,t=this,s=t.z
if(s==null){s=t.cy
s=s.gV(s)
u=t.db
u=t.z=s.p(0,u.gV(u))
s=u}return s},
ge7:function(){var u,t=this,s=t.ch
if(s==null){s=t.gj7()
u=t.dx
u=t.ch=s.p(0,u.gV(u))
s=u}return s},
cw:function(a){var u=this.dy,t=a==null?(u&&C.a).gcm(u):a;(u&&C.a).h(u,t)},
cv:function(){var u=this.dy
if(u.length>1)u.pop()},
bn:function(a){var u=a.b
if(u.length===0)throw H.f(P.w("May not cache a shader with no name."))
if(this.fr.dF(0,u))throw H.f(P.w('Shader cache already contains a shader by the name "'+u+'".'))
this.fr.l(0,u,a)},
si2:function(a){this.dy=H.k(a,"$ib",[O.bP],"$ab")},
shV:function(a){this.fr=H.k(a,"$iG",[P.l,A.cW],"$aG")}}
E.i2.prototype={
$1:function(a){var u
H.e(a,"$iq")
u=this.a
u.ch=u.z=null},
$S:5}
E.i3.prototype={
$1:function(a){var u
H.e(a,"$iq")
u=this.a
u.cx=u.ch=u.Q=u.z=null},
$S:5}
E.i4.prototype={
$1:function(a){var u
H.e(a,"$iq")
u=this.a
u.cx=u.ch=null},
$S:5}
E.ei.prototype={
cW:function(a){H.e(a,"$iq")
this.e8()},
cV:function(){return this.cW(null)},
giK:function(){var u,t=this,s=Date.now(),r=C.d.a1(P.l2(s-t.cx.a).a,1000)/1000
if(r<=0)return 0
u=t.cy
t.cy=0
t.cx=new P.az(s,!1)
return u/r},
dr:function(){var u,t,s=this,r=window.devicePixelRatio,q=s.b.clientWidth
if(typeof q!=="number")return q.p()
if(typeof r!=="number")return H.F(r)
u=C.c.aV(q*r)
q=s.b.clientHeight
if(typeof q!=="number")return q.p()
t=C.c.aV(q*r)
q=s.b
if(q.width!==u||q.height!==t){q.width=u
q.height=t
P.lw(C.j,s.gjc())}},
e8:function(){var u,t
if(!this.ch){this.ch=!0
u=window
t=H.o(new E.iF(this),{func:1,ret:-1,args:[P.aa]})
C.z.fd(u)
C.z.hL(u,W.lL(t,P.aa))}},
ja:function(){var u,t,s,r,q,p=this,o=null
try{++p.cy
p.ch=!1
p.dr()
s=p.y
if(s!=null)s.v(null)
if(o==null)o=p.d
if(o!=null){s=p.e;++s.e
s.r=s.x
r=Date.now()
s.x=new P.az(r,!1)
s.y=P.l2(r-s.r.a).a*0.000001
r=s.cy
C.a.sk(r.a,0)
r.aM()
r=s.db
C.a.sk(r.a,0)
r.aM()
r=s.dx
C.a.sk(r.a,0)
r.aM()
r=s.dy;(r&&C.a).sk(r,0)
s=s.dy;(s&&C.a).h(s,null)
o.a3(p.e)}}catch(q){u=H.au(q)
t=H.cp(q)
P.kS("Error: "+H.j(u))
P.kS("Stack: "+H.j(t))
throw H.f(u)}}}
E.iF.prototype={
$1:function(a){var u
H.lW(a)
u=this.a
if(u.ch){u.ch=!1
u.ja()}},
$S:47}
Z.es.prototype={$ioo:1}
Z.du.prototype={
O:function(a){var u,t,s,r=this
try{t=a.a
t.enableVertexAttribArray(r.e)
t.vertexAttribPointer(r.e,r.b,5126,!1,r.d,r.c)}catch(s){u=H.au(s)
t=P.w('Failed to bind buffer attribute "'+r.a.i(0)+'": '+H.j(u))
throw H.f(t)}},
i:function(a){var u=this
return"["+u.a.i(0)+", Size: "+u.b+", Offset: "+u.c+", Stride: "+u.d+", Attr: "+H.j(u.e)+"]"}}
Z.cg.prototype={$iop:1}
Z.bu.prototype={
aq:function(a){var u,t,s,r
for(u=this.c,t=u.length,s=0;s<t;++s){r=u[s]
if((r.a.a&a.a)!==0)return r}return},
O:function(a){var u,t=this.a
a.a.bindBuffer(t.a,t.b)
for(t=this.c,u=t.length-1;u>=0;--u)t[u].O(a)},
ac:function(a){var u,t,s
for(u=this.c,t=u.length-1,s=a.a;t>=0;--t)s.disableVertexAttribArray(u[t].e)
s.bindBuffer(this.a.a,null)},
a3:function(a){var u,t,s,r,q,p=this.b.length
for(u=a.a,t=0;t<p;++t){s=this.b
if(t>=s.length)return H.h(s,t)
r=s[t]
s=r.c
q=s.a
u.bindBuffer(q,s.b)
u.drawElements(r.a,r.b,5123,0)
u.bindBuffer(q,null)}},
i:function(a){var u,t,s,r,q=[P.l],p=H.c([],q)
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.v)(u),++s)C.a.h(p,u[s].i(0))
r=H.c([],q)
for(q=this.c,u=q.length,s=0;s<u;++s)C.a.h(r,J.av(q[s]))
return"Buffer:  ["+this.a.i(0)+"]\nIndices: "+C.a.q(p,", ")+"\nAttrs:   "+C.a.q(r,", ")},
sfn:function(a){this.b=H.k(a,"$ib",[Z.bG],"$ab")},
$iow:1}
Z.bG.prototype={
i:function(a){return"Type: "+this.a+", Count: "+this.b+", ["+("Instance of '"+H.j(H.cS(this.c))+"'")+"]"}}
Z.bn.prototype={
gcN:function(a){var u=this.a,t=(u&$.aq().a)!==0?3:0
if((u&$.br().a)!==0)t+=3
if((u&$.bq().a)!==0)t+=3
if((u&$.bW().a)!==0)t+=2
if((u&$.bs().a)!==0)t+=3
if((u&$.dm().a)!==0)t+=3
if((u&$.dn().a)!==0)t+=4
if((u&$.cs().a)!==0)++t
return(u&$.bp().a)!==0?t+4:t},
io:function(a){var u,t=$.aq(),s=this.a
if((s&t.a)!==0){if(0===a)return t
u=1}else u=0
t=$.br()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.bq()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.bW()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.bs()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.dm()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.dn()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.cs()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.bp()
if((s&t.a)!==0)if(u===a)return t
return $.mg()},
n:function(a,b){if(b==null)return!1
if(!(b instanceof Z.bn))return!1
return this.a===b.a},
i:function(a){var u=H.c([],[P.l]),t=this.a
if((t&$.aq().a)!==0)C.a.h(u,"Pos")
if((t&$.br().a)!==0)C.a.h(u,"Norm")
if((t&$.bq().a)!==0)C.a.h(u,"Binm")
if((t&$.bW().a)!==0)C.a.h(u,"Txt2D")
if((t&$.bs().a)!==0)C.a.h(u,"TxtCube")
if((t&$.dm().a)!==0)C.a.h(u,"Clr3")
if((t&$.dn().a)!==0)C.a.h(u,"Clr4")
if((t&$.cs().a)!==0)C.a.h(u,"Weight")
if((t&$.bp().a)!==0)C.a.h(u,"Bending")
if(u.length<=0)return"None"
return C.a.q(u,"|")}}
D.fH.prototype={}
D.bD.prototype={
h:function(a,b){var u={func:1,ret:-1,args:[D.q]}
H.o(b,u)
if(this.a==null)this.sa8(H.c([],[u]))
u=this.a;(u&&C.a).h(u,b)},
M:function(a,b){var u,t,s=this
H.o(b,{func:1,ret:-1,args:[D.q]})
u=s.a
u=u==null?null:C.a.P(u,b)
if(u===!0){u=s.a
t=(u&&C.a).M(u,b)||!1}else t=!1
u=s.b
u=u==null?null:C.a.P(u,b)
if(u===!0){u=s.b
t=(u&&C.a).M(u,b)||t}return t},
v:function(a){var u,t,s,r=this,q={}
q.a=a
u=r.a
t=u==null
s=t?null:u.length===0
if(s!==!1){s=r.b
s=s==null?null:s.length===0
s=s!==!1}else s=!1
if(s)return!1
if(a==null){a=new D.q()
a.b=!0
q.a=a
s=a}else s=a
if(r.d>0){if(r.c==null)r.c=s
return!0}if(!t)C.a.J(P.lc(u,!0,{func:1,ret:-1,args:[D.q]}),new D.h_(q))
u=r.b
if(u!=null){r.saQ(H.c([],[{func:1,ret:-1,args:[D.q]}]))
C.a.J(u,new D.h0(q))}return!0},
cc:function(){return this.v(null)},
ax:function(a){var u,t=this,s=t.d
if(s>0){--s
t.d=s
if(s<=0)s=t.c!=null
else s=!1
if(s){u=t.c
t.c=null
t.v(u)}}},
sa8:function(a){this.a=H.k(a,"$ib",[{func:1,ret:-1,args:[D.q]}],"$ab")},
saQ:function(a){this.b=H.k(a,"$ib",[{func:1,ret:-1,args:[D.q]}],"$ab")}}
D.h_.prototype={
$1:function(a){var u
H.o(a,{func:1,ret:-1,args:[D.q]})
u=this.a.a
u.b
a.$1(u)},
$S:17}
D.h0.prototype={
$1:function(a){var u
H.o(a,{func:1,ret:-1,args:[D.q]})
u=this.a.a
u.b
a.$1(u)},
$S:17}
D.q.prototype={}
D.bH.prototype={}
D.bI.prototype={}
D.y.prototype={
i:function(a){return"ValueChanged: "+this.c+", "+H.j(this.d)+" => "+H.j(this.e)}}
X.dv.prototype={
n:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.dv))return!1
if(this.a!=b.a)return!1
if(!this.b.n(0,b.b))return!1
return!0},
i:function(a){return this.b.i(0)+H.j(this.a)}}
X.dN.prototype={
n:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.dN))return!1
if(this.a!=b.a)return!1
if(!this.b.n(0,b.b))return!1
return!0},
i:function(a){return this.b.i(0)+H.j(this.a)}}
X.hf.prototype={
j3:function(a){this.c=a.b
this.d.h(0,a.a)
return!1},
j_:function(a){this.c=a.b
this.d.M(0,a.a)
return!1},
shG:function(a){this.d=H.k(a,"$ilr",[P.r],"$alr")}}
X.dS.prototype={}
X.hk.prototype={
b2:function(a,b){var u,t,s,r,q=this,p=Date.now(),o=q.x,n=b.a,m=q.Q
if(typeof n!=="number")return n.p()
u=b.b
t=q.ch
if(typeof u!=="number")return u.p()
s=new V.a6(o.a+n*m,o.b+u*t)
t=q.a.gaU()
r=new X.aB(a,V.bk(),q.x,t,s)
r.b=!0
q.z=new P.az(p,!1)
q.x=s
return r},
cu:function(a,b){this.r=a.a
return!1},
ba:function(a,b){var u=this.r,t=a.a
if(typeof t!=="number")return t.eh()
if(typeof u!=="number")return u.az()
this.r=(u&~t)>>>0
return!1},
b9:function(a,b){var u=this.d
if(u==null)return!1
u.v(this.b2(a,b))
return!0},
j4:function(a){var u,t,s,r,q,p,o=this,n=o.e
if(n==null)return!1
u=o.a.gaU()
t=o.x
Date.now()
s=a.a
r=o.cx
if(typeof s!=="number")return s.p()
q=a.b
p=o.cy
if(typeof q!=="number")return q.p()
t=new X.cL(new V.Q(s*r,q*p),u,t)
t.b=!0
n.v(t)
return!0},
hc:function(a,b,c){var u,t,s,r=this
if(r.f==null)return
u=Date.now()
t=r.f
s=new X.dS(c,r.a.gaU(),b)
s.b=!0
t.v(s)
r.y=new P.az(u,!1)
r.x=V.bk()}}
X.ar.prototype={
n:function(a,b){var u=this
if(b==null)return!1
if(u===b)return!0
if(!(b instanceof X.ar))return!1
if(u.a!==b.a)return!1
if(u.b!=b.b)return!1
if(u.c!=b.c)return!1
return!0},
i:function(a){var u=this.a?"Ctrl+":""
u+=H.A(this.b)?"Alt+":""
return u+(H.A(this.c)?"Shift+":"")}}
X.aB.prototype={}
X.hJ.prototype={
bP:function(a,b,c){var u=this,t=new P.az(Date.now(),!1),s=u.a.gaU(),r=new X.aB(a,u.r,u.x,s,b)
r.b=!0
if(c){u.y=t
u.r=b}u.z=t
u.x=b
return r},
cu:function(a,b){var u
this.f=a.a
u=this.b
if(u==null)return!1
u.v(this.bP(a,b,!0))
return!0},
ba:function(a,b){var u=this,t=u.f,s=a.a
if(typeof s!=="number")return s.eh()
if(typeof t!=="number")return t.az()
u.f=(t&~s)>>>0
t=u.c
if(t==null)return!1
t.v(u.bP(a,b,!0))
return!0},
b9:function(a,b){var u=this.d
if(u==null)return!1
u.v(this.bP(a,b,!1))
return!0},
j5:function(a,b){var u,t,s,r,q,p=this,o=p.e
if(o==null)return!1
u=p.a.gaU()
Date.now()
t=a.a
s=p.Q
if(typeof t!=="number")return t.p()
r=a.b
q=p.ch
if(typeof r!=="number")return r.p()
u=new X.cL(new V.Q(t*s,r*q),u,b)
u.b=!0
o.v(u)
return!0},
gcb:function(){var u=this.b
return u==null?this.b=D.K():u},
gbz:function(){var u=this.c
return u==null?this.c=D.K():u},
gaX:function(){var u=this.d
return u==null?this.d=D.K():u}}
X.cL.prototype={}
X.hY.prototype={}
X.d3.prototype={}
X.iI.prototype={
b2:function(a,b){var u,t,s,r,q=this
H.k(a,"$ib",[V.a6],"$ab")
u=new P.az(Date.now(),!1)
t=a.length>0?a[0]:V.bk()
s=q.a.gaU()
r=new X.d3(q.f,q.r,s,t)
r.b=!0
if(b){q.x=u
q.f=t}q.y=u
q.r=t
return r},
j2:function(a){var u
H.k(a,"$ib",[V.a6],"$ab")
u=this.b
if(u==null)return!1
u.v(this.b2(a,!0))
return!0},
j0:function(a){var u
H.k(a,"$ib",[V.a6],"$ab")
u=this.c
if(u==null)return!1
u.v(this.b2(a,!0))
return!0},
j1:function(a){var u
H.k(a,"$ib",[V.a6],"$ab")
u=this.d
if(u==null)return!1
u.v(this.b2(a,!1))
return!0},
gcO:function(a){var u=this.b
return u==null?this.b=D.K():u},
gdH:function(a){var u=this.c
return u==null?this.c=D.K():u},
gaX:function(){var u=this.d
return u==null?this.d=D.K():u}}
X.en.prototype={
gaU:function(){var u=this.a,t=C.h.gdE(u).c
t.toString
u=C.h.gdE(u).d
u.toString
return V.e3(0,0,t,u)},
da:function(a){var u=a.keyCode,t=H.A(a.ctrlKey)||H.A(a.metaKey)
return new X.dN(u,new X.ar(t,a.altKey,a.shiftKey))},
aR:function(a){var u=this.b,t=H.A(a.ctrlKey)||H.A(a.metaKey)
u.c=new X.ar(t,a.altKey,a.shiftKey)},
c_:function(a){var u=this.b,t=H.A(a.ctrlKey)||H.A(a.metaKey)
u.c=new X.ar(t,a.altKey,a.shiftKey)},
aE:function(a){var u,t=this.a.getBoundingClientRect(),s=a.pageX,r=a.pageY,q=t.left
if(typeof s!=="number")return s.H()
u=t.top
if(typeof r!=="number")return r.H()
return new V.a6(s-q,r-u)},
b3:function(a){return new V.Q(a.movementX,a.movementY)},
bW:function(a){var u,t,s,r,q,p,o=this.a.getBoundingClientRect(),n=H.c([],[V.a6])
for(u=a.touches,t=u.length,s=0;s<u.length;u.length===t||(0,H.v)(u),++s){r=u[s]
q=C.c.W(r.pageX)
C.c.W(r.pageY)
p=o.left
C.c.W(r.pageX)
C.a.h(n,new V.a6(q-p,C.c.W(r.pageY)-o.top))}return n},
aB:function(a){var u=a.buttons,t=H.A(a.ctrlKey)||H.A(a.metaKey)
return new X.dv(u,new X.ar(t,a.altKey,a.shiftKey))},
bS:function(a){var u,t,s=this.a.getBoundingClientRect(),r=a.pageX,q=a.pageY,p=s.left
if(typeof r!=="number")return r.H()
u=r-p
if(u<0)return!1
r=s.top
if(typeof q!=="number")return q.H()
t=q-r
if(t<0)return!1
return u<s.width&&t<s.height},
h6:function(a){this.f=!0},
fR:function(a){this.f=!1},
fX:function(a){H.e(a,"$ia5")
if(H.A(this.f)&&this.bS(a))a.preventDefault()},
ha:function(a){var u
H.e(a,"$ib2")
if(!H.A(this.f))return
u=this.da(a)
this.b.j3(u)},
h8:function(a){var u
H.e(a,"$ib2")
if(!H.A(this.f))return
u=this.da(a)
this.b.j_(u)},
he:function(a){var u,t,s,r,q=this
H.e(a,"$ia5")
u=q.a
u.focus()
q.f=!0
q.aR(a)
if(H.A(q.x)){t=q.aB(a)
s=q.b3(a)
if(q.d.cu(t,s))a.preventDefault()
return}if(H.A(q.r)){q.y=a
u.requestPointerLock()
return}t=q.aB(a)
r=q.aE(a)
if(q.c.cu(t,r))a.preventDefault()},
hi:function(a){var u,t,s,r=this
H.e(a,"$ia5")
r.aR(a)
u=r.aB(a)
if(H.A(r.x)){t=r.b3(a)
if(r.d.ba(u,t))a.preventDefault()
return}if(H.A(r.r))return
s=r.aE(a)
if(r.c.ba(u,s))a.preventDefault()},
h0:function(a){var u,t,s,r=this
H.e(a,"$ia5")
if(!r.bS(a)){r.aR(a)
u=r.aB(a)
if(H.A(r.x)){t=r.b3(a)
if(r.d.ba(u,t))a.preventDefault()
return}if(H.A(r.r))return
s=r.aE(a)
if(r.c.ba(u,s))a.preventDefault()}},
hg:function(a){var u,t,s,r=this
H.e(a,"$ia5")
r.aR(a)
u=r.aB(a)
if(H.A(r.x)){t=r.b3(a)
if(r.d.b9(u,t))a.preventDefault()
return}if(H.A(r.r))return
s=r.aE(a)
if(r.c.b9(u,s))a.preventDefault()},
fZ:function(a){var u,t,s,r=this
H.e(a,"$ia5")
if(!r.bS(a)){r.aR(a)
u=r.aB(a)
if(H.A(r.x)){t=r.b3(a)
if(r.d.b9(u,t))a.preventDefault()
return}if(H.A(r.r))return
s=r.aE(a)
if(r.c.b9(u,s))a.preventDefault()}},
hk:function(a){var u,t,s=this
H.e(a,"$ibc")
s.aR(a)
u=new V.Q((a&&C.y).giB(a),C.y.giC(a)).u(0,180)
if(H.A(s.x)){if(s.d.j4(u))a.preventDefault()
return}if(H.A(s.r))return
t=s.aE(a)
if(s.c.j5(u,t))a.preventDefault()},
hm:function(a){var u,t,s=this,r=document.pointerLockElement===s.a
if(r!==s.x){s.x=r
u=s.aB(s.y)
t=s.aE(s.y)
s.d.hc(u,t,r)}},
hC:function(a){var u,t=this
H.e(a,"$iaX")
t.a.focus()
t.f=!0
t.c_(a)
u=t.bW(a)
if(t.e.j2(u))a.preventDefault()},
hy:function(a){var u
H.e(a,"$iaX")
this.c_(a)
u=this.bW(a)
if(this.e.j0(u))a.preventDefault()},
hA:function(a){var u
H.e(a,"$iaX")
this.c_(a)
u=this.bW(a)
if(this.e.j1(u))a.preventDefault()},
sff:function(a){this.z=H.k(a,"$ib",[[P.cY,P.P]],"$ab")}}
D.bA.prototype={
aA:function(a){var u
H.e(a,"$iq")
u=this.r
if(u!=null)u.v(a)},
eC:function(){return this.aA(null)},
$iae:1,
$ic4:1}
D.ae.prototype={$ic4:1}
D.dO.prototype={
aA:function(a){var u=this.x
if(u!=null)u.v(a)},
dj:function(a){var u
H.e(a,"$iq")
u=this.y
if(u!=null)u.v(a)},
hb:function(){return this.dj(null)},
ho:function(a){var u,t,s
H.k(a,"$id",[D.ae],"$ad")
for(u=a.length,t=0;t<a.length;a.length===u||(0,H.v)(a),++t){s=a[t]
if(s==null||this.f4(s))return!1}return!0},
fL:function(a,b){var u,t,s,r,q,p,o,n=D.ae
H.k(b,"$id",[n],"$ad")
for(u=b.length,t=this.gdi(),s={func:1,ret:-1,args:[D.q]},r=[s],q=0;q<b.length;b.length===u||(0,H.v)(b),++q){p=H.e(b[q],"$iae")
if(p instanceof D.bA)C.a.h(this.e,p)
o=p.r
if(o==null){o=new D.bD()
o.sa8(null)
o.saQ(null)
o.c=null
o.d=0
p.r=o}H.o(t,s)
if(o.a==null)o.sa8(H.c([],r))
o=o.a;(o&&C.a).h(o,t)}n=new D.bH([n])
n.b=!0
this.aA(n)},
hs:function(a,b){var u,t,s,r=D.ae
H.k(b,"$id",[r],"$ad")
for(u=b.gR(b),t=this.gdi();u.t();){s=u.gG(u)
C.a.M(this.e,s)
s.gm().M(0,t)}r=new D.bI([r])
r.b=!0
this.aA(r)},
f4:function(a){var u=C.a.P(this.e,a)
return u},
sfb:function(a){this.e=H.k(a,"$ib",[D.bA],"$ab")},
shD:function(a){this.f=H.k(a,"$ib",[D.e1],"$ab")},
shY:function(a){this.r=H.k(a,"$ib",[D.ec],"$ab")},
$ad:function(){return[D.ae]},
$aX:function(){return[D.ae]}}
D.e1.prototype={$iae:1,$ic4:1}
D.ec.prototype={$iae:1,$ic4:1}
V.W.prototype={
n:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.W))return!1
u=b.a
t=$.I().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
return!0},
i:function(a){return"["+V.M(this.a,3,0)+", "+V.M(this.b,3,0)+", "+V.M(this.c,3,0)+"]"}}
V.a1.prototype={
jm:function(){var u=this
return new V.a1(Math.floor(u.a*255)/255,Math.floor(u.b*255)/255,Math.floor(u.c*255)/255,Math.floor(u.d*255)/255)},
n:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.a1))return!1
u=b.a
t=$.I().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
if(!(Math.abs(b.d-s.d)<t))return!1
return!0},
i:function(a){var u=this
return"["+V.M(u.a,3,0)+", "+V.M(u.b,3,0)+", "+V.M(u.c,3,0)+", "+V.M(u.d,3,0)+"]"}}
V.fZ.prototype={}
V.dX.prototype={
a4:function(a,b){var u=this,t=H.c([u.a,u.d,u.r,u.b,u.e,u.x,u.c,u.f,u.y],[P.B])
return t},
n:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.dX))return!1
u=b.a
t=$.I().a
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
i:function(a){var u,t,s,r,q=this,p=[P.B],o=V.cn(H.c([q.a,q.d,q.r],p),3,0),n=V.cn(H.c([q.b,q.e,q.x],p),3,0),m=V.cn(H.c([q.c,q.f,q.y],p),3,0)
p=o.length
if(0>=p)return H.h(o,0)
u="["+o[0]+", "
t=n.length
if(0>=t)return H.h(n,0)
u=u+n[0]+", "
s=m.length
if(0>=s)return H.h(m,0)
u=u+m[0]+",\n"
if(1>=p)return H.h(o,1)
r=" "+o[1]+", "
if(1>=t)return H.h(n,1)
r=r+n[1]+", "
if(1>=s)return H.h(m,1)
r=u+(r+m[1]+",\n")
if(2>=p)return H.h(o,2)
p=" "+o[2]+", "
if(2>=t)return H.h(n,2)
p=p+n[2]+", "
if(2>=s)return H.h(m,2)
return r+(p+m[2]+"]")}}
V.a4.prototype={
a4:function(a,b){var u=this,t=H.c([u.a,u.e,u.y,u.cx,u.b,u.f,u.z,u.cy,u.c,u.r,u.Q,u.db,u.d,u.x,u.ch,u.dx],[P.B])
return t},
cl:function(b2){var u,t,s,r=this,q=r.a,p=r.f,o=r.b,n=r.e,m=q*p-o*n,l=r.r,k=r.c,j=q*l-k*n,i=r.x,h=r.d,g=q*i-h*n,f=o*l-k*p,e=o*i-h*p,d=k*i-h*l,c=r.y,b=r.cy,a=r.z,a0=r.cx,a1=c*b-a*a0,a2=r.db,a3=r.Q,a4=c*a2-a3*a0,a5=r.dx,a6=r.ch,a7=c*a5-a6*a0,a8=a*a2-a3*b,a9=a*a5-a6*b,b0=a3*a5-a6*a2,b1=m*b0-j*a9+g*a8+f*a7-e*a4+d*a1
if(Math.abs(b1-0)<$.I().a)return V.bL()
u=1/b1
t=-n
s=-a0
return V.b5((p*b0-l*a9+i*a8)*u,(-o*b0+k*a9-h*a8)*u,(b*d-a2*e+a5*f)*u,(-a*d+a3*e-a6*f)*u,(t*b0+l*a7-i*a4)*u,(q*b0-k*a7+h*a4)*u,(s*d+a2*g-a5*j)*u,(c*d-a3*g+a6*j)*u,(n*a9-p*a7+i*a1)*u,(-q*a9+o*a7-h*a1)*u,(a0*e-b*g+a5*m)*u,(-c*e+a*g-a6*m)*u,(t*a8+p*a4-l*a1)*u,(q*a8-o*a4+k*a1)*u,(s*f+b*j-a2*m)*u,(c*f-a*j+a3*m)*u)},
p:function(b2,b3){var u=this,t=u.a,s=b3.a,r=u.b,q=b3.e,p=u.c,o=b3.y,n=u.d,m=b3.cx,l=b3.b,k=b3.f,j=b3.z,i=b3.cy,h=b3.c,g=b3.r,f=b3.Q,e=b3.db,d=b3.d,c=b3.x,b=b3.ch,a=b3.dx,a0=u.e,a1=u.f,a2=u.r,a3=u.x,a4=u.y,a5=u.z,a6=u.Q,a7=u.ch,a8=u.cx,a9=u.cy,b0=u.db,b1=u.dx
return V.b5(t*s+r*q+p*o+n*m,t*l+r*k+p*j+n*i,t*h+r*g+p*f+n*e,t*d+r*c+p*b+n*a,a0*s+a1*q+a2*o+a3*m,a0*l+a1*k+a2*j+a3*i,a0*h+a1*g+a2*f+a3*e,a0*d+a1*c+a2*b+a3*a,a4*s+a5*q+a6*o+a7*m,a4*l+a5*k+a6*j+a7*i,a4*h+a5*g+a6*f+a7*e,a4*d+a5*c+a6*b+a7*a,a8*s+a9*q+b0*o+b1*m,a8*l+a9*k+b0*j+b1*i,a8*h+a9*g+b0*f+b1*e,a8*d+a9*c+b0*b+b1*a)},
bx:function(a){var u=this,t=a.a,s=a.b,r=a.c
return new V.L(u.a*t+u.b*s+u.c*r,u.e*t+u.f*s+u.r*r,u.y*t+u.z*s+u.Q*r)},
cC:function(a){var u=this,t=a.a,s=a.b,r=a.c
return new V.ao(u.a*t+u.b*s+u.c*r+u.d,u.e*t+u.f*s+u.r*r+u.x,u.y*t+u.z*s+u.Q*r+u.ch)},
n:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.a4))return!1
u=b.a
t=$.I().a
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
i:function(a){return this.K()},
C:function(a){var u,t,s,r,q,p=this,o=[P.B],n=V.cn(H.c([p.a,p.e,p.y,p.cx],o),3,0),m=V.cn(H.c([p.b,p.f,p.z,p.cy],o),3,0),l=V.cn(H.c([p.c,p.r,p.Q,p.db],o),3,0),k=V.cn(H.c([p.d,p.x,p.ch,p.dx],o),3,0)
o=n.length
if(0>=o)return H.h(n,0)
u="["+n[0]+", "
t=m.length
if(0>=t)return H.h(m,0)
u=u+m[0]+", "
s=l.length
if(0>=s)return H.h(l,0)
u=u+l[0]+", "
r=k.length
if(0>=r)return H.h(k,0)
u=u+k[0]+",\n"
q=a+" "
if(1>=o)return H.h(n,1)
q=q+n[1]+", "
if(1>=t)return H.h(m,1)
q=q+m[1]+", "
if(1>=s)return H.h(l,1)
q=q+l[1]+", "
if(1>=r)return H.h(k,1)
q=u+(q+k[1]+",\n")
u=a+" "
if(2>=o)return H.h(n,2)
u=u+n[2]+", "
if(2>=t)return H.h(m,2)
u=u+m[2]+", "
if(2>=s)return H.h(l,2)
u=u+l[2]+", "
if(2>=r)return H.h(k,2)
u=q+(u+k[2]+",\n")
q=a+" "
if(3>=o)return H.h(n,3)
q=q+n[3]+", "
if(3>=t)return H.h(m,3)
q=q+m[3]+", "
if(3>=s)return H.h(l,3)
q=q+l[3]+", "
if(3>=r)return H.h(k,3)
return u+(q+k[3]+"]")},
K:function(){return this.C("")}}
V.a6.prototype={
H:function(a,b){return new V.a6(this.a-b.a,this.b-b.b)},
n:function(a,b){var u,t
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.a6))return!1
u=b.a
t=$.I().a
if(!(Math.abs(u-this.a)<t))return!1
if(!(Math.abs(b.b-this.b)<t))return!1
return!0},
i:function(a){return"["+V.M(this.a,3,0)+", "+V.M(this.b,3,0)+"]"}}
V.ao.prototype={
H:function(a,b){return new V.ao(this.a-b.a,this.b-b.b,this.c-b.c)},
n:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.ao))return!1
u=b.a
t=$.I().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
return!0},
i:function(a){return"["+V.M(this.a,3,0)+", "+V.M(this.b,3,0)+", "+V.M(this.c,3,0)+"]"}}
V.bl.prototype={
n:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.bl))return!1
u=b.a
t=$.I().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
if(!(Math.abs(b.d-s.d)<t))return!1
return!0},
i:function(a){var u=this
return"["+V.M(u.a,3,0)+", "+V.M(u.b,3,0)+", "+V.M(u.c,3,0)+", "+V.M(u.d,3,0)+"]"}}
V.bN.prototype={
gaf:function(){var u=this.c,t=this.d
if(u>t)return t
else return u},
n:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.bN))return!1
u=b.a
t=$.I().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
if(!(Math.abs(b.d-s.d)<t))return!1
return!0},
i:function(a){var u=this
return"["+V.M(u.a,3,0)+", "+V.M(u.b,3,0)+", "+V.M(u.c,3,0)+", "+V.M(u.d,3,0)+"]"}}
V.Q.prototype={
cn:function(a){return Math.sqrt(this.w(this))},
w:function(a){var u,t,s=this.a,r=a.a
if(typeof s!=="number")return s.p()
if(typeof r!=="number")return H.F(r)
u=this.b
t=a.b
if(typeof u!=="number")return u.p()
if(typeof t!=="number")return H.F(t)
return s*r+u*t},
p:function(a,b){var u,t=this.a
if(typeof t!=="number")return t.p()
u=this.b
if(typeof u!=="number")return u.p()
return new V.Q(t*b,u*b)},
u:function(a,b){var u,t
if(Math.abs(b-0)<$.I().a){u=$.lz
return u==null?$.lz=new V.Q(0,0):u}u=this.a
if(typeof u!=="number")return u.u()
t=this.b
if(typeof t!=="number")return t.u()
return new V.Q(u/b,t/b)},
n:function(a,b){var u,t,s
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.Q))return!1
u=b.a
t=this.a
s=$.I()
s.toString
if(typeof u!=="number")return u.H()
if(typeof t!=="number")return H.F(t)
s=s.a
if(!(Math.abs(u-t)<s))return!1
u=b.b
t=this.b
if(typeof u!=="number")return u.H()
if(typeof t!=="number")return H.F(t)
if(!(Math.abs(u-t)<s))return!1
return!0},
i:function(a){return"["+V.M(this.a,3,0)+", "+V.M(this.b,3,0)+"]"}}
V.L.prototype={
cn:function(a){return Math.sqrt(this.w(this))},
w:function(a){return this.a*a.a+this.b*a.b+this.c*a.c},
co:function(a,b){var u=this.a,t=this.b,s=this.c
return new V.L(u+b*(a.a-u),t+b*(a.b-t),s+b*(a.c-s))},
b7:function(a){var u=this.b,t=a.c,s=this.c,r=a.b,q=a.a,p=this.a
return new V.L(u*t-s*r,s*q-p*t,p*r-u*q)},
D:function(a,b){return new V.L(this.a+b.a,this.b+b.b,this.c+b.c)},
N:function(a){return new V.L(-this.a,-this.b,-this.c)},
u:function(a,b){if(Math.abs(b-0)<$.I().a)return V.er()
return new V.L(this.a/b,this.b/b,this.c/b)},
dW:function(){var u=$.I().a
if(!(Math.abs(0-this.a)<u))return!1
if(!(Math.abs(0-this.b)<u))return!1
if(!(Math.abs(0-this.c)<u))return!1
return!0},
n:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.L))return!1
u=b.a
t=$.I().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
return!0},
i:function(a){return"["+V.M(this.a,3,0)+", "+V.M(this.b,3,0)+", "+V.M(this.c,3,0)+"]"}}
U.fJ.prototype={
bK:function(a){var u=V.kj(a,this.c,this.b)
return u},
gm:function(){var u=this.y
return u==null?this.y=D.K():u},
E:function(a){var u=this.y
if(u!=null)u.v(a)},
scF:function(a,b){},
scq:function(a){var u,t=this,s=t.b
if(!(Math.abs(s-a)<$.I().a)){t.b=a
if(a<t.c)t.d=t.c=a
else{u=t.d
if(a<u)t.d=t.bK(u)}s=new D.y("maximumLocation",s,t.b,[P.B])
s.b=!0
t.E(s)}},
scs:function(a){var u,t=this,s=t.c
if(!(Math.abs(s-a)<$.I().a)){t.c=a
if(t.b<a)t.d=t.b=a
else{u=t.d
if(a>u)t.d=t.bK(u)}s=new D.y("minimumLocation",s,t.c,[P.B])
s.b=!0
t.E(s)}},
sae:function(a,b){var u,t=this
b=t.bK(b)
u=t.d
if(!(Math.abs(u-b)<$.I().a)){t.d=b
u=new D.y("location",u,b,[P.B])
u.b=!0
t.E(u)}},
scr:function(a){var u,t,s=this,r=s.e
if(!(Math.abs(r-a)<$.I().a)){s.e=a
u=s.f
t=-a
if(u<t)u=t
else if(u>a)u=a
s.f=u
r=new D.y("maximumVelocity",r,a,[P.B])
r.b=!0
s.E(r)}},
sS:function(a){var u=this,t=u.e,s=-t
if(a<s)a=s
else if(a>t)a=t
t=u.f
if(!(Math.abs(t-a)<$.I().a)){u.f=a
t=new D.y("velocity",t,a,[P.B])
t.b=!0
u.E(t)}},
sc7:function(a){var u
if(a<0)a=0
else if(a>1)a=1
u=this.x
if(!(Math.abs(u-a)<$.I().a)){this.x=a
u=new D.y("dampening",u,a,[P.B])
u.b=!0
this.E(u)}},
a5:function(a,b){var u,t,s,r=this,q=r.f,p=$.I().a
if(!(Math.abs(q-0)<p)||!(Math.abs(r.r-0)<p)){u=q+r.r*b
q=r.e
t=-q
if(u<t)u=t
else if(u>q)u=q
r.sae(0,r.d+u*b)
q=r.x
if(!(Math.abs(q-0)<$.I().a)){s=u*Math.pow(1-q,b)
if(u<0){if(s<u)s=u
else if(s>0)s=0}else if(s<0)s=0
else if(s>u)s=u
u=s}r.sS(u)}}}
U.cy.prototype={
gm:function(){var u=this.b
return u==null?this.b=D.K():u},
sV:function(a,b){var u,t,s,r=this
if(!J.V(r.a,b)){u=r.a
r.a=b
t=new D.y("matrix",u,b,[V.a4])
t.b=!0
s=r.b
if(s!=null)s.v(t)}},
ay:function(a,b,c){return this.a},
n:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.cy))return!1
return J.V(this.a,b.a)},
i:function(a){return"Constant: "+this.a.C("          ")}}
U.cF.prototype={
gm:function(){var u=this.e
return u==null?this.e=D.K():u},
E:function(a){var u
H.e(a,"$iq")
u=this.e
if(u!=null)u.v(a)},
a9:function(){return this.E(null)},
eE:function(a,b){var u,t,s,r,q,p,o,n=U.ab
H.k(b,"$id",[n],"$ad")
for(u=b.length,t=this.gaP(),s={func:1,ret:-1,args:[D.q]},r=[s],q=0;q<b.length;b.length===u||(0,H.v)(b),++q){p=b[q]
if(p!=null){o=p.gm()
o.toString
H.o(t,s)
if(o.a==null)o.sa8(H.c([],r))
o=o.a;(o&&C.a).h(o,t)}}n=new D.bH([n])
n.b=!0
this.E(n)},
hq:function(a,b){var u,t,s=U.ab
H.k(b,"$id",[s],"$ad")
for(u=b.gR(b),t=this.gaP();u.t();)u.gG(u).gm().M(0,t)
s=new D.bI([s])
s.b=!0
this.E(s)},
ay:function(a,b,c){var u,t,s=this,r=s.r,q=b.e
if(typeof r!=="number")return r.ag()
if(r<q){s.r=q
r=s.e
if(r!=null)++r.d
for(r=s.a,r=new J.al(r,r.length,[H.x(r,0)]),u=null;r.t();){q=r.d
if(q!=null){t=q.ay(0,b,c)
if(t!=null)u=u==null?t:t.p(0,u)}}s.f=u==null?V.bL():u
r=s.e
if(r!=null)r.ax(0)}return s.f},
n:function(a,b){var u,t,s,r
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.cF))return!1
u=this.a.length
for(t=0;t<u;++t){s=this.a
if(t>=s.length)return H.h(s,t)
s=s[t]
r=b.a
if(t>=r.length)return H.h(r,t)
if(!J.V(s,r[t]))return!1}return!0},
i:function(a){return"Group"},
$ad:function(){return[U.ab]},
$aX:function(){return[U.ab]},
$iab:1}
U.ab.prototype={}
U.cU.prototype={
gm:function(){var u=this.y
return u==null?this.y=D.K():u},
E:function(a){var u=this.y
if(u!=null)u.v(a)},
seg:function(a){var u
a=V.kj(a,0,6.283185307179586)
u=this.a
if(!(Math.abs(u-a)<$.I().a)){this.a=a
u=new D.y("yaw",u,a,[P.B])
u.b=!0
this.E(u)}},
se6:function(a,b){var u
b=V.kj(b,0,6.283185307179586)
u=this.b
if(!(Math.abs(u-b)<$.I().a)){this.b=b
u=new D.y("pitch",u,b,[P.B])
u.b=!0
this.E(u)}},
se9:function(a){var u
a=V.kj(a,0,6.283185307179586)
u=this.c
if(!(Math.abs(u-a)<$.I().a)){this.c=a
u=new D.y("roll",u,a,[P.B])
u.b=!0
this.E(u)}},
sc9:function(a){var u=this.e
if(!(Math.abs(u-a)<$.I().a)){this.e=a
u=new D.y("deltaPitch",u,a,[P.B])
u.b=!0
this.E(u)}},
sca:function(a){var u=this.f
if(!(Math.abs(u-a)<$.I().a)){this.f=a
u=new D.y("deltaRoll",u,a,[P.B])
u.b=!0
this.E(u)}},
ay:function(a,b,c){var u=this,t=u.r,s=b.e
if(t<s){u.r=s
t=u.y
if(t!=null)++t.d
u.seg(u.a+u.d*b.y)
u.se6(0,u.b+u.e*b.y)
u.se9(u.c+u.f*b.y)
u.x=V.lh(u.c).p(0,V.lg(u.b)).p(0,V.lf(u.a))
t=u.y
if(t!=null)t.ax(0)}return u.x},
n:function(a,b){var u,t,s,r=this
if(b==null)return!1
if(r===b)return!0
if(!(b instanceof U.cU))return!1
u=r.a
t=b.a
s=$.I().a
if(!(Math.abs(u-t)<s))return!1
if(!(Math.abs(r.b-b.b)<s))return!1
if(!(Math.abs(r.c-b.c)<s))return!1
if(!(Math.abs(r.d-b.d)<s))return!1
if(!(Math.abs(r.e-b.e)<s))return!1
if(!(Math.abs(r.f-b.f)<s))return!1
return!0},
i:function(a){var u=this
return"Rotater: ["+V.M(u.a,3,0)+", "+V.M(u.b,3,0)+", "+V.M(u.c,3,0)+"], ["+V.M(u.d,3,0)+", "+V.M(u.e,3,0)+", "+V.M(u.f,3,0)+"]"}}
U.eo.prototype={
gm:function(){var u=this.cy
return u==null?this.cy=D.K():u},
E:function(a){var u
H.e(a,"$iq")
u=this.cy
if(u!=null)u.v(a)},
a9:function(){return this.E(null)},
aF:function(a){var u=this
if(u.a!=null)return!1
u.a=a
a.c.gcb().h(0,u.gbE())
u.a.c.gaX().h(0,u.gbG())
u.a.c.gbz().h(0,u.gbI())
return!0},
bF:function(a){var u=this
H.e(a,"$iq")
if(!J.V(u.c,u.a.b.c))return
u.x=u.y=!0
u.z=u.b.d},
bH:function(a){var u,t,s,r,q,p,o,n=this
a=H.n(H.e(a,"$iq"),"$iaB")
if(!H.A(n.y))return
if(H.A(n.x)){u=a.d.H(0,a.y)
u=new V.Q(u.a,u.b)
u=u.w(u)
t=n.r
if(typeof t!=="number")return H.F(t)
if(u<t)return
n.x=!1}if(H.A(n.d)){u=a.c
t=a.d.H(0,a.y)
u=new V.Q(t.a,t.b).p(0,2).u(0,u.gaf())
n.Q=u
t=n.b
u=u.a
if(typeof u!=="number")return u.p()
s=n.e
if(typeof s!=="number")return H.F(s)
t.sS(u*10*s)}else{u=a.c
t=a.d
s=t.H(0,a.y)
r=new V.Q(s.a,s.b).p(0,2).u(0,u.gaf())
s=n.b
q=r.a
if(typeof q!=="number")return q.N()
p=n.e
if(typeof p!=="number")return H.F(p)
o=n.z
if(typeof o!=="number")return H.F(o)
s.sae(0,-q*p+o)
n.b.sS(0)
t=t.H(0,a.z)
n.Q=new V.Q(t.a,t.b).p(0,2).u(0,u.gaf())}n.a9()},
bJ:function(a){var u,t,s,r=this
H.e(a,"$iq")
if(!H.A(r.y))return
r.y=!1
if(H.A(r.x))return
u=r.Q
if(u.w(u)>0.0001){u=r.b
t=r.Q.a
if(typeof t!=="number")return t.p()
s=r.e
if(typeof s!=="number")return H.F(s)
u.sS(t*10*s)
r.a9()}},
ay:function(a,b,c){var u,t=this,s=t.ch,r=b.e
if(typeof s!=="number")return s.ag()
if(s<r){t.ch=r
u=b.y
t.b.a5(0,u)
t.cx=V.lh(t.b.d)}return t.cx},
$iab:1}
U.ep.prototype={
gm:function(){var u=this.fx
return u==null?this.fx=D.K():u},
E:function(a){var u
H.e(a,"$iq")
u=this.fx
if(u!=null)u.v(a)},
a9:function(){return this.E(null)},
aF:function(a){var u,t,s=this
if(s.a!=null)return!1
s.a=a
a.c.gcb().h(0,s.gbE())
s.a.c.gaX().h(0,s.gbG())
s.a.c.gbz().h(0,s.gbI())
u=s.a.d
t=u.f
u=t==null?u.f=D.K():t
u.h(0,s.gfv())
u=s.a.d
t=u.d
u=t==null?u.d=D.K():t
u.h(0,s.gfz())
u=s.a.e
u.gcO(u).h(0,s.geJ())
s.a.e.gaX().h(0,s.geH())
u=s.a.e
u.gdH(u).h(0,s.geF())
return!0},
au:function(a){var u=a.a,t=a.b
if(H.A(this.f)){if(typeof u!=="number")return u.N()
u=-u}if(H.A(this.r)){if(typeof t!=="number")return t.N()
t=-t}return new V.Q(u,t)},
bF:function(a){var u=this
a=H.n(H.e(a,"$iq"),"$iaB")
if(!J.V(u.d,a.x.b))return
u.ch=u.cx=!0
u.cy=u.c.d
u.db=u.b.d},
bH:function(a){var u,t,s,r,q,p,o,n=this
a=H.n(H.e(a,"$iq"),"$iaB")
if(!H.A(n.cx))return
if(H.A(n.ch)){u=a.d.H(0,a.y)
u=new V.Q(u.a,u.b)
u=u.w(u)
t=n.Q
if(typeof t!=="number")return H.F(t)
if(u<t)return
n.ch=!1}if(H.A(n.e)){u=a.c
t=a.d.H(0,a.y)
u=n.au(new V.Q(t.a,t.b).p(0,2).u(0,u.gaf()))
n.dx=u
t=n.c
u=u.a
if(typeof u!=="number")return u.N()
s=n.y
if(typeof s!=="number")return H.F(s)
t.sS(-u*10*s)
s=n.b
u=n.dx.b
if(typeof u!=="number")return u.N()
t=n.x
if(typeof t!=="number")return H.F(t)
s.sS(-u*10*t)}else{u=a.c
t=a.d
s=t.H(0,a.y)
r=n.au(new V.Q(s.a,s.b).p(0,2).u(0,u.gaf()))
s=n.c
q=r.a
if(typeof q!=="number")return q.N()
p=n.y
if(typeof p!=="number")return H.F(p)
o=n.cy
if(typeof o!=="number")return H.F(o)
s.sae(0,-q*p+o)
o=n.b
p=r.b
if(typeof p!=="number")return p.N()
q=n.x
if(typeof q!=="number")return H.F(q)
s=n.db
if(typeof s!=="number")return H.F(s)
o.sae(0,-p*q+s)
n.b.sS(0)
n.c.sS(0)
t=t.H(0,a.z)
n.dx=n.au(new V.Q(t.a,t.b).p(0,2).u(0,u.gaf()))}n.a9()},
bJ:function(a){var u,t,s,r=this
H.e(a,"$iq")
if(!H.A(r.cx))return
r.cx=!1
if(H.A(r.ch))return
u=r.dx
if(u.w(u)>0.0001){u=r.c
t=r.dx.a
if(typeof t!=="number")return t.N()
s=r.y
if(typeof s!=="number")return H.F(s)
u.sS(-t*10*s)
s=r.b
t=r.dx.b
if(typeof t!=="number")return t.N()
u=r.x
if(typeof u!=="number")return H.F(u)
s.sS(-t*10*u)
r.a9()}},
fw:function(a){var u=this
if(H.n(H.e(a,"$iq"),"$idS").x){u.ch=!0
u.cy=u.c.d
u.db=u.b.d}},
fA:function(a){var u,t,s,r,q,p,o,n=this
a=H.n(H.e(a,"$iq"),"$iaB")
if(!J.V(n.d,a.x.b))return
u=a.c
t=a.d
s=t.H(0,a.y)
r=n.au(new V.Q(s.a,s.b).p(0,2).u(0,u.gaf()))
s=n.c
q=r.a
if(typeof q!=="number")return q.N()
p=n.y
if(typeof p!=="number")return H.F(p)
o=n.cy
if(typeof o!=="number")return H.F(o)
s.sae(0,-q*p+o)
o=n.b
p=r.b
if(typeof p!=="number")return p.N()
q=n.x
if(typeof q!=="number")return H.F(q)
s=n.db
if(typeof s!=="number")return H.F(s)
o.sae(0,-p*q+s)
n.b.sS(0)
n.c.sS(0)
t=t.H(0,a.z)
n.dx=n.au(new V.Q(t.a,t.b).p(0,2).u(0,u.gaf()))
n.a9()},
eK:function(a){var u=this
H.e(a,"$iq")
u.ch=u.cx=!0
u.cy=u.c.d
u.db=u.b.d},
eI:function(a){var u,t,s,r,q,p,o,n=this
a=H.n(H.e(a,"$iq"),"$id3")
if(!H.A(n.cx))return
if(H.A(n.ch)){u=a.d.H(0,a.y)
u=new V.Q(u.a,u.b)
u=u.w(u)
t=n.Q
if(typeof t!=="number")return H.F(t)
if(u<t)return
n.ch=!1}if(H.A(n.e)){u=a.c
t=a.d.H(0,a.y)
u=n.au(new V.Q(t.a,t.b).p(0,2).u(0,u.gaf()))
n.dx=u
t=n.c
u=u.a
if(typeof u!=="number")return u.N()
s=n.y
if(typeof s!=="number")return H.F(s)
t.sS(-u*10*s)
s=n.b
u=n.dx.b
if(typeof u!=="number")return u.N()
t=n.x
if(typeof t!=="number")return H.F(t)
s.sS(-u*10*t)}else{u=a.c
t=a.d
s=t.H(0,a.y)
r=n.au(new V.Q(s.a,s.b).p(0,2).u(0,u.gaf()))
s=n.c
q=r.a
if(typeof q!=="number")return q.N()
p=n.y
if(typeof p!=="number")return H.F(p)
o=n.cy
if(typeof o!=="number")return H.F(o)
s.sae(0,-q*p+o)
o=n.b
p=r.b
if(typeof p!=="number")return p.N()
q=n.x
if(typeof q!=="number")return H.F(q)
s=n.db
if(typeof s!=="number")return H.F(s)
o.sae(0,-p*q+s)
n.b.sS(0)
n.c.sS(0)
t=t.H(0,a.z)
n.dx=n.au(new V.Q(t.a,t.b).p(0,2).u(0,u.gaf()))}n.a9()},
eG:function(a){var u,t,s,r=this
H.e(a,"$iq")
if(!H.A(r.cx))return
r.cx=!1
if(H.A(r.ch))return
u=r.dx
if(u.w(u)>0.0001){u=r.c
t=r.dx.a
if(typeof t!=="number")return t.N()
s=r.y
if(typeof s!=="number")return H.F(s)
u.sS(-t*10*s)
s=r.b
t=r.dx.b
if(typeof t!=="number")return t.N()
u=r.x
if(typeof u!=="number")return H.F(u)
s.sS(-t*10*u)
r.a9()}},
ay:function(a,b,c){var u,t=this,s=t.dy,r=b.e
if(typeof s!=="number")return s.ag()
if(s<r){t.dy=r
u=b.y
t.c.a5(0,u)
t.b.a5(0,u)
t.fr=V.lf(t.b.d).p(0,V.lg(t.c.d))}return t.fr},
$iab:1}
U.eq.prototype={
gm:function(){var u=this.r
return u==null?this.r=D.K():u},
E:function(a){var u=this.r
if(u!=null)u.v(a)},
aF:function(a){var u,t,s,r=this
if(r.a!=null)return!1
r.a=a
u=a.c
t=u.e
u=t==null?u.e=D.K():t
t=r.gfI()
u.h(0,t)
u=r.a.d
s=u.e;(s==null?u.e=D.K():s).h(0,t)
return!0},
fJ:function(a){var u,t,s,r,q=this
H.e(a,"$iq")
if(!J.V(q.b,q.a.b.c))return
H.n(a,"$icL")
u=q.d
t=a.x.b
s=q.c
if(typeof t!=="number")return t.p()
r=u+t*s
if(u!==r){q.d=r
u=new D.y("zoom",u,r,[P.B])
u.b=!0
q.E(u)}},
ay:function(a,b,c){var u,t=this,s=t.e,r=b.e
if(s<r){t.e=r
u=Math.pow(10,t.d)
t.f=V.mM(u,u,u)}return t.f},
$iab:1}
M.dy.prototype={
gm:function(){var u=this.r
return u==null?this.r=D.K():u},
U:function(a){var u
H.e(a,"$iq")
u=this.r
if(u!=null)u.v(a)},
b0:function(){return this.U(null)},
hu:function(a,b){var u,t,s,r,q,p,o,n=M.ax
H.k(b,"$id",[n],"$ad")
for(u=b.length,t=this.gY(),s={func:1,ret:-1,args:[D.q]},r=[s],q=0;q<b.length;b.length===u||(0,H.v)(b),++q){p=b[q]
if(p!=null){o=p.gm()
o.toString
H.o(t,s)
if(o.a==null)o.sa8(H.c([],r))
o=o.a;(o&&C.a).h(o,t)}}n=new D.bH([n])
n.b=!0
this.U(n)},
hw:function(a,b){var u,t,s=M.ax
H.k(b,"$id",[s],"$ad")
for(u=b.gR(b),t=this.gY();u.t();)u.gG(u).gm().M(0,t)
s=new D.bI([s])
s.b=!0
this.U(s)},
a3:function(a){var u,t,s=this
if(s.f)return
s.f=!0
for(u=s.a,u=new J.al(u,u.length,[H.x(u,0)]);u.t();){t=u.d
if(t!=null)t.a3(a)}s.f=!1},
$ad:function(){return[M.ax]},
$aX:function(){return[M.ax]},
$iax:1}
M.dA.prototype={
gm:function(){var u=this.r
return u==null?this.r=D.K():u},
U:function(a){var u
H.e(a,"$iq")
u=this.r
if(u!=null)u.v(a)},
b0:function(){return this.U(null)},
saT:function(a){var u,t,s=this
if(a==null)a=new X.ha()
u=s.b
if(u!==a){if(u!=null)u.gm().M(0,s.gY())
t=s.b
s.b=a
a.gm().h(0,s.gY())
u=new D.y("camera",t,s.b,[X.c_])
u.b=!0
s.U(u)}},
saI:function(a,b){var u,t,s=this
if(b==null)b=X.kq(!0,null)
u=s.c
if(u!==b){if(u!=null)u.gm().M(0,s.gY())
t=s.c
s.c=b
b.gm().h(0,s.gY())
u=new D.y("target",t,s.c,[X.cZ])
u.b=!0
s.U(u)}},
saJ:function(a){var u,t=this,s=t.d
if(s!=a){if(s!=null)s.gm().M(0,t.gY())
u=t.d
t.d=a
if(a!=null)a.gm().h(0,t.gY())
s=new D.y("technique",u,t.d,[O.bP])
s.b=!0
t.U(s)}},
a3:function(a){var u,t=this
a.cw(t.d)
t.c.O(a)
t.b.O(a)
u=t.d
if(u!=null)u.a5(0,a)
t.e.a5(0,a)
t.e.a3(a)
t.b.ac(a)
t.c.toString
a.cv()},
$iax:1}
M.dF.prototype={
U:function(a){var u
H.e(a,"$iq")
u=this.y
if(u!=null)u.v(a)},
b0:function(){return this.U(null)},
fT:function(a,b){var u,t,s,r,q,p,o,n=E.an
H.k(b,"$id",[n],"$ad")
for(u=b.length,t=this.gY(),s={func:1,ret:-1,args:[D.q]},r=[s],q=0;q<b.length;b.length===u||(0,H.v)(b),++q){p=b[q]
if(p!=null){o=p.z
if(o==null){o=new D.bD()
o.sa8(null)
o.saQ(null)
o.c=null
o.d=0
p.z=o}H.o(t,s)
if(o.a==null)o.sa8(H.c([],r))
o=o.a;(o&&C.a).h(o,t)}}n=new D.bH([n])
n.b=!0
this.U(n)},
fV:function(a,b){var u,t,s=E.an
H.k(b,"$id",[s],"$ad")
for(u=b.gR(b),t=this.gY();u.t();)u.gG(u).gm().M(0,t)
s=new D.bI([s])
s.b=!0
this.U(s)},
saT:function(a){var u,t,s=this
if(a==null)a=X.ll(null)
u=s.b
if(u!==a){if(u!=null)u.gm().M(0,s.gY())
t=s.b
s.b=a
a.gm().h(0,s.gY())
u=new D.y("camera",t,s.b,[X.c_])
u.b=!0
s.U(u)}},
saI:function(a,b){var u,t=this,s=t.c
if(s!==b){if(s!=null)s.gm().M(0,t.gY())
u=t.c
t.c=b
b.gm().h(0,t.gY())
s=new D.y("target",u,t.c,[X.cZ])
s.b=!0
t.U(s)}},
gm:function(){var u=this.y
return u==null?this.y=D.K():u},
a3:function(a){var u,t=this
a.cw(t.d)
t.c.O(a)
t.b.O(a)
for(u=t.e.a,u=new J.al(u,u.length,[H.x(u,0)]);u.t();)u.d.a5(0,a)
for(u=t.e.a,u=new J.al(u,u.length,[H.x(u,0)]);u.t();)u.d.a3(a)
t.b.toString
a.cy.aH()
a.db.aH()
t.c.ac(a)
a.cv()},
sf1:function(a,b){this.e=H.k(b,"$iX",[E.an],"$aX")},
$iax:1}
M.ax.prototype={}
A.dr.prototype={}
A.fv.prototype={
j:function(a,b){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<t;++s){r=u[s]
if(r.b===b)return r}return},
iH:function(){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<u.length;u.length===t||(0,H.v)(u),++s){r=u[s]
r.a.enableVertexAttribArray(r.c)}},
bp:function(){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<u.length;u.length===t||(0,H.v)(u),++s){r=u[s]
r.a.disableVertexAttribArray(r.c)}}}
A.ah.prototype={
gas:function(a){var u=this.a?1:0,t=this.c?4:0
return u|0|t},
i:function(a){var u=this.a?1:0,t=this.c?4:0
return""+(u|0|t)},
n:function(a,b){var u
if(b==null)return!1
if(!(b instanceof A.ah))return!1
if(this.a===b.a)u=this.c===b.c
else u=!1
return u}}
A.dW.prototype={
eu:function(c0,c1){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5=this,b6=null,b7="Required uniform value, ",b8=", was not defined or used in shader.",b9="uniform mat4 objMat;\n"
b5.z=c0
u=new P.bO("")
t=c0.dy
if(t){u.a=b9
s=b9}else s=""
r=c0.fr
s=(r?u.a=s+"uniform mat4 viewObjMat;\n":s)+"uniform mat4 projViewObjMat;\n"
u.a=s
s+="\n"
u.a=s
s=u.a=s+"attribute vec3 posAttr;\n"
q=c0.k3
if(q){s+="attribute vec3 normAttr;\n"
u.a=s}p=c0.k4
u.a=(p?u.a=s+"attribute vec3 binmAttr;\n":s)+"\n"
A.nD(c0,u)
A.nF(c0,u)
A.nE(c0,u)
A.nH(c0,u)
A.nI(c0,u)
A.nG(c0,u)
A.nJ(c0,u)
s=u.a+="vec4 getPos()\n"
s+="{\n"
u.a=s
o=c0.rx
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
u.a=s}if(c0.r1){s+="   txt2D = getTxt2D();\n"
u.a=s}if(c0.r2){s+="   txtCube = getTxtCube();\n"
u.a=s}if(c0.k1){s+="   objPos = getObjPos();\n"
u.a=s}s=(c0.k2?u.a=s+"   viewPos = getViewPos();\n":s)+"   gl_Position = getPos();\n"
u.a=s
s+="}\n"
u.a=s
s=u.a=s+"\n"
b5.br(0,s.charCodeAt(0)==0?s:s,A.nC(b5.z))
b5.Q=b5.x.j(0,"posAttr")
b5.cx=b5.x.j(0,"normAttr")
b5.ch=b5.x.j(0,"binmAttr")
b5.cy=b5.x.j(0,"txt2DAttr")
b5.db=b5.x.j(0,"txtCubeAttr")
b5.dx=b5.x.j(0,"bendAttr")
if(c0.dx)b5.id=H.n(b5.y.F(0,"invViewMat"),"$iac")
if(t)b5.dy=H.n(b5.y.F(0,"objMat"),"$iac")
if(r)b5.fr=H.n(b5.y.F(0,"viewObjMat"),"$iac")
b5.fy=H.n(b5.y.F(0,"projViewObjMat"),"$iac")
if(c0.ry)b5.k1=H.n(b5.y.F(0,"txt2DMat"),"$id5")
if(c0.x1)b5.k2=H.n(b5.y.F(0,"txtCubeMat"),"$iac")
if(c0.x2)b5.k3=H.n(b5.y.F(0,"colorMat"),"$iac")
b5.seX(H.c([],[A.ac]))
t=c0.y2
if(t>0){b5.k4=H.e(b5.y.F(0,"bendMatCount"),"$iak")
for(n=0;n<t;++n){s=b5.r1
r=b5.y
q="bendValues["+n+"].mat"
m=r.j(0,q)
if(m==null)H.z(P.w(b7+q+b8));(s&&C.a).h(s,H.n(m,"$iac"))}}t=c0.a
if(t.a)b5.r2=H.n(b5.y.F(0,"emissionClr"),"$iZ")
if(t.c)b5.ry=H.n(b5.y.F(0,"emissionTxt"),"$iag")
t=c0.b
if(t.a)b5.x1=H.n(b5.y.F(0,"ambientClr"),"$iZ")
if(t.c)b5.y1=H.n(b5.y.F(0,"ambientTxt"),"$iag")
t=c0.c
if(t.a)b5.y2=H.n(b5.y.F(0,"diffuseClr"),"$iZ")
if(t.c)b5.bq=H.n(b5.y.F(0,"diffuseTxt"),"$iag")
t=c0.d
if(t.a)b5.dI=H.n(b5.y.F(0,"invDiffuseClr"),"$iZ")
if(t.c)b5.dJ=H.n(b5.y.F(0,"invDiffuseTxt"),"$iag")
t=c0.e
s=t.a
if(!s)r=t.c
else r=!0
if(r){b5.dM=H.n(b5.y.F(0,"shininess"),"$ia7")
if(s)b5.dK=H.n(b5.y.F(0,"specularClr"),"$iZ")
if(t.c)b5.dL=H.n(b5.y.F(0,"specularTxt"),"$iag")}if(c0.f.c)b5.dN=H.n(b5.y.F(0,"bumpTxt"),"$iag")
if(c0.cy){b5.dO=H.n(b5.y.F(0,"envSampler"),"$iag")
t=c0.r
if(t.a)b5.dP=H.n(b5.y.F(0,"reflectClr"),"$iZ")
if(t.c)b5.dQ=H.n(b5.y.F(0,"reflectTxt"),"$iag")
t=c0.x
s=t.a
if(!s)r=t.c
else r=!0
if(r){b5.dR=H.n(b5.y.F(0,"refraction"),"$ia7")
if(s)b5.dS=H.n(b5.y.F(0,"refractClr"),"$iZ")
if(t.c)b5.dT=H.n(b5.y.F(0,"refractTxt"),"$iag")}}t=c0.y
if(t.a)b5.dU=H.n(b5.y.F(0,"alpha"),"$ia7")
if(t.c)b5.dV=H.n(b5.y.F(0,"alphaTxt"),"$iag")
t=P.r
s=[t,A.ak]
b5.sfa(new H.a0(s))
b5.seL(new H.a0([t,[P.b,A.cb]]))
b5.shE(new H.a0(s))
b5.shF(new H.a0([t,[P.b,A.cc]]))
b5.shX(new H.a0(s))
b5.seM(new H.a0([t,[P.b,A.cd]]))
if(c0.id){for(t=c0.z,s=t.length,r=[A.cb],l=0;l<t.length;t.length===s||(0,H.v)(t),++l){k=t[l]
j=k.a
i="dirLight"+H.j(j)
h=H.c([],r)
for(q=k.b,n=0;n<q;++n){if(typeof j!=="number")return j.az()
p=(j&1)!==0
if(p){o=b5.y
g=i+"s["+n+"].objUp"
m=o.j(0,g)
if(m==null)H.z(P.w(b7+g+b8))
H.n(m,"$iZ")
o=b5.y
g=i+"s["+n+"].objRight"
f=o.j(0,g)
if(f==null)H.z(P.w(b7+g+b8))
H.n(f,"$iZ")
o=b5.y
g=i+"s["+n+"].objDir"
e=o.j(0,g)
if(e==null)H.z(P.w(b7+g+b8))
H.n(e,"$iZ")
d=e
c=f
b=m}else{d=b6
c=d
b=c}o=b5.y
g=i+"s["+n+"].viewDir"
m=o.j(0,g)
if(m==null)H.z(P.w(b7+g+b8))
H.n(m,"$iZ")
o=b5.y
g=i+"s["+n+"].color"
f=o.j(0,g)
if(f==null)H.z(P.w(b7+g+b8))
H.n(f,"$iZ")
if(p){p=b5.y
o=i+"sTexture2D"+n
e=p.j(0,o)
if(e==null)H.z(P.w(b7+o+b8))
H.n(e,"$ibb")
a=e}else a=b6
C.a.h(h,new A.cb(b,c,d,m,f,a))}b5.ce.l(0,j,h)
q=b5.cd
p=b5.y
o=i+"Count"
m=p.j(0,o)
if(m==null)H.z(P.w(b7+o+b8))
q.l(0,j,H.e(m,"$iak"))}for(t=c0.Q,s=t.length,r=[A.cc],l=0;l<t.length;t.length===s||(0,H.v)(t),++l){k=t[l]
j=k.a
i="pointLight"+H.j(j)
h=H.c([],r)
for(q=k.b,n=0;n<q;++n){p=b5.y
o=i+"s["+n+"].point"
m=p.j(0,o)
if(m==null)H.z(P.w(b7+o+b8))
H.n(m,"$iZ")
p=b5.y
o=i+"s["+n+"].viewPnt"
f=p.j(0,o)
if(f==null)H.z(P.w(b7+o+b8))
H.n(f,"$iZ")
p=b5.y
o=i+"s["+n+"].color"
e=p.j(0,o)
if(e==null)H.z(P.w(b7+o+b8))
H.n(e,"$iZ")
if(typeof j!=="number")return j.az()
if((j&3)!==0){p=b5.y
o=i+"s["+n+"].invViewRotMat"
a0=p.j(0,o)
if(a0==null)H.z(P.w(b7+o+b8))
H.n(a0,"$id5")
a1=a0}else a1=b6
if((j&1)!==0){p=b5.y
o=i+"sTextureCube"+n
a0=p.j(0,o)
if(a0==null)H.z(P.w(b7+o+b8))
H.n(a0,"$iag")
a=a0}else a=b6
if((j&2)!==0){p=b5.y
o=i+"sShadowCube"+n
a0=p.j(0,o)
if(a0==null)H.z(P.w(b7+o+b8))
H.n(a0,"$iag")
p=b5.y
o=i+"s["+n+"].shadowAdj"
a2=p.j(0,o)
if(a2==null)H.z(P.w(b7+o+b8))
H.n(a2,"$ibR")
a3=a0
a4=a2}else{a3=b6
a4=a3}if((j&4)!==0){p=b5.y
o=i+"s["+n+"].att0"
a0=p.j(0,o)
if(a0==null)H.z(P.w(b7+o+b8))
H.n(a0,"$ia7")
p=b5.y
o=i+"s["+n+"].att1"
a2=p.j(0,o)
if(a2==null)H.z(P.w(b7+o+b8))
H.n(a2,"$ia7")
p=b5.y
o=i+"s["+n+"].att2"
a5=p.j(0,o)
if(a5==null)H.z(P.w(b7+o+b8))
H.n(a5,"$ia7")
a6=a5
a7=a2
a8=a0}else{a6=b6
a7=a6
a8=a7}C.a.h(h,new A.cc(m,f,a1,e,a,a3,a4,a8,a7,a6))}b5.cg.l(0,j,h)
q=b5.cf
p=b5.y
o=i+"Count"
m=p.j(0,o)
if(m==null)H.z(P.w(b7+o+b8))
q.l(0,j,H.e(m,"$iak"))}for(t=c0.ch,s=t.length,r=[A.cd],l=0;l<t.length;t.length===s||(0,H.v)(t),++l){k=t[l]
j=k.a
i="spotLight"+H.j(j)
h=H.c([],r)
for(q=k.b,n=0;n<q;++n){p=b5.y
o=i+"s["+n+"].objPnt"
m=p.j(0,o)
if(m==null)H.z(P.w(b7+o+b8))
H.n(m,"$iZ")
p=b5.y
o=i+"s["+n+"].objDir"
f=p.j(0,o)
if(f==null)H.z(P.w(b7+o+b8))
H.n(f,"$iZ")
p=b5.y
o=i+"s["+n+"].viewPnt"
e=p.j(0,o)
if(e==null)H.z(P.w(b7+o+b8))
H.n(e,"$iZ")
p=b5.y
o=i+"s["+n+"].color"
a0=p.j(0,o)
if(a0==null)H.z(P.w(b7+o+b8))
H.n(a0,"$iZ")
if(typeof j!=="number")return j.az()
if((j&3)!==0){p=b5.y
o=i+"s["+n+"].objUp"
a2=p.j(0,o)
if(a2==null)H.z(P.w(b7+o+b8))
H.n(a2,"$iZ")
p=b5.y
o=i+"s["+n+"].objRight"
a5=p.j(0,o)
if(a5==null)H.z(P.w(b7+o+b8))
H.n(a5,"$iZ")
p=b5.y
o=i+"s["+n+"].tuScalar"
a9=p.j(0,o)
if(a9==null)H.z(P.w(b7+o+b8))
H.n(a9,"$ia7")
p=b5.y
o=i+"s["+n+"].tvScalar"
b0=p.j(0,o)
if(b0==null)H.z(P.w(b7+o+b8))
H.n(b0,"$ia7")
b1=b0
b2=a9
c=a5
b=a2}else{b1=b6
b2=b1
c=b2
b=c}p=(j&2)!==0
if(p){o=b5.y
g=i+"s["+n+"].shadowAdj"
a2=o.j(0,g)
if(a2==null)H.z(P.w(b7+g+b8))
H.n(a2,"$ibR")
a4=a2}else a4=b6
if((j&8)!==0){o=b5.y
g=i+"s["+n+"].cutoff"
a2=o.j(0,g)
if(a2==null)H.z(P.w(b7+g+b8))
H.n(a2,"$ia7")
o=b5.y
g=i+"s["+n+"].coneAngle"
a5=o.j(0,g)
if(a5==null)H.z(P.w(b7+g+b8))
H.n(a5,"$ia7")
b3=a5
b4=a2}else{b3=b6
b4=b3}if((j&4)!==0){o=b5.y
g=i+"s["+n+"].att0"
a2=o.j(0,g)
if(a2==null)H.z(P.w(b7+g+b8))
H.n(a2,"$ia7")
o=b5.y
g=i+"s["+n+"].att1"
a5=o.j(0,g)
if(a5==null)H.z(P.w(b7+g+b8))
H.n(a5,"$ia7")
o=b5.y
g=i+"s["+n+"].att2"
a9=o.j(0,g)
if(a9==null)H.z(P.w(b7+g+b8))
H.n(a9,"$ia7")
a6=a9
a7=a5
a8=a2}else{a6=b6
a7=a6
a8=a7}if((j&1)!==0){o=b5.y
g=i+"sTexture2D"+n
a2=o.j(0,g)
if(a2==null)H.z(P.w(b7+g+b8))
H.n(a2,"$ibb")
a=a2}else a=b6
if(p){p=b5.y
o=i+"sShadow2D"+n
a2=p.j(0,o)
if(a2==null)H.z(P.w(b7+o+b8))
H.n(a2,"$ibb")
a3=a2}else a3=b6
C.a.h(h,new A.cd(m,f,e,a0,b,c,b2,b1,a4,b4,b3,a8,a7,a6,a,a3))}b5.cj.l(0,j,h)
q=b5.ci
p=b5.y
o=i+"Count"
m=p.j(0,o)
if(m==null)H.z(P.w(b7+o+b8))
q.l(0,j,H.e(m,"$iak"))}}},
aj:function(a,b){if(b!=null&&b.d>=6)a.cL(b)},
seX:function(a){this.r1=H.k(a,"$ib",[A.ac],"$ab")},
sfa:function(a){this.cd=H.k(a,"$iG",[P.r,A.ak],"$aG")},
seL:function(a){this.ce=H.k(a,"$iG",[P.r,[P.b,A.cb]],"$aG")},
shE:function(a){this.cf=H.k(a,"$iG",[P.r,A.ak],"$aG")},
shF:function(a){this.cg=H.k(a,"$iG",[P.r,[P.b,A.cc]],"$aG")},
shX:function(a){this.ci=H.k(a,"$iG",[P.r,A.ak],"$aG")},
seM:function(a){this.cj=H.k(a,"$iG",[P.r,[P.b,A.cd]],"$aG")}}
A.aK.prototype={
i:function(a){return"dirLight"+H.j(this.a)}}
A.aP.prototype={
i:function(a){return"pointLight"+H.j(this.a)}}
A.aT.prototype={
i:function(a){return"spotLight"+H.j(this.a)}}
A.hs.prototype={
i:function(a){return this.b8}}
A.cb.prototype={}
A.cc.prototype={}
A.cd.prototype={}
A.cW.prototype={
be:function(a,b){var u=this
u.y=u.x=u.r=u.f=u.e=u.d=u.c=null},
br:function(a,b,c){var u,t,s,r=this
r.c=b
r.d=c
r.e=r.dc(b,35633)
r.f=r.dc(r.d,35632)
u=r.a
t=u.createProgram()
r.r=t
u.attachShader(t,r.e)
u.attachShader(r.r,r.f)
u.linkProgram(r.r)
if(!H.A(H.kM(u.getProgramParameter(r.r,35714)))){s=u.getProgramInfoLog(r.r)
u.deleteProgram(r.r)
H.z(P.w("Failed to link shader: "+H.j(s)))}r.hS()
r.hU()},
O:function(a){a.a.useProgram(this.r)
this.x.iH()},
dc:function(a,b){var u,t=this.a,s=t.createShader(b)
t.shaderSource(s,a)
t.compileShader(s)
if(!H.A(H.kM(t.getShaderParameter(s,35713)))){u=t.getShaderInfoLog(s)
t.deleteShader(s)
throw H.f(P.w("Error compiling shader '"+H.j(s)+"': "+H.j(u)))}return s},
hS:function(){var u,t,s,r=this,q=H.c([],[A.dr]),p=r.a,o=H.a9(p.getProgramParameter(r.r,35721))
if(typeof o!=="number")return H.F(o)
u=0
for(;u<o;++u){t=p.getActiveAttrib(r.r,u)
s=p.getAttribLocation(r.r,t.name)
C.a.h(q,new A.dr(p,t.name,s))}r.x=new A.fv(q)},
hU:function(){var u,t,s,r=this,q=H.c([],[A.ek]),p=r.a,o=H.a9(p.getProgramParameter(r.r,35718))
if(typeof o!=="number")return H.F(o)
u=0
for(;u<o;++u){t=p.getActiveUniform(r.r,u)
s=p.getUniformLocation(r.r,t.name)
C.a.h(q,r.iA(t.type,t.size,t.name,s))}r.y=new A.iT(q)},
aN:function(a,b,c){var u=this.a
if(a===1)return new A.ak(u,b,c)
else return A.kB(u,this.r,b,a,c)},
f5:function(a,b,c){var u=this.a
if(a===1)return new A.bb(u,b,c)
else return A.kB(u,this.r,b,a,c)},
f6:function(a,b,c){var u=this.a
if(a===1)return new A.ag(u,b,c)
else return A.kB(u,this.r,b,a,c)},
bl:function(a,b){return new P.eB(a+" uniform variables are unsupported by all browsers.\n"+("Please change the type of "+H.j(b)+"."))},
iA:function(a,b,c,d){var u=this
switch(a){case 5120:return u.aN(b,c,d)
case 5121:return u.aN(b,c,d)
case 5122:return u.aN(b,c,d)
case 5123:return u.aN(b,c,d)
case 5124:return u.aN(b,c,d)
case 5125:return u.aN(b,c,d)
case 5126:return new A.a7(u.a,c,d)
case 35664:return new A.ay(u.a,c,d)
case 35665:return new A.Z(u.a,c,d)
case 35666:return new A.bR(u.a,c,d)
case 35667:return new A.iQ(u.a,c,d)
case 35668:return new A.iR(u.a,c,d)
case 35669:return new A.iS(u.a,c,d)
case 35674:return new A.iU(u.a,c,d)
case 35675:return new A.d5(u.a,c,d)
case 35676:return new A.ac(u.a,c,d)
case 35678:return u.f5(b,c,d)
case 35680:return u.f6(b,c,d)
case 35670:throw H.f(u.bl("BOOL",c))
case 35671:throw H.f(u.bl("BOOL_VEC2",c))
case 35672:throw H.f(u.bl("BOOL_VEC3",c))
case 35673:throw H.f(u.bl("BOOL_VEC4",c))
default:throw H.f(P.w("Unknown uniform variable type "+H.j(a)+" for "+H.j(c)+"."))}}}
A.by.prototype={
i:function(a){return this.b}}
A.e9.prototype={}
A.ea.prototype={}
A.eh.prototype={
ey:function(a,b,c){var u,t,s,r,q,p=this,o="Required uniform value, ",n=", was not defined or used in shader."
p.br(0,"attribute vec3 posAttr;\n\nvarying vec2 pos;\n\nvoid main()\n{\n  pos = posAttr.xy*0.5 + 0.5;\n  gl_Position = vec4(posAttr, 1.0);\n}\n".charCodeAt(0)==0?"attribute vec3 posAttr;\n\nvarying vec2 pos;\n\nvoid main()\n{\n  pos = posAttr.xy*0.5 + 0.5;\n  gl_Position = vec4(posAttr, 1.0);\n}\n":"attribute vec3 posAttr;\n\nvarying vec2 pos;\n\nvoid main()\n{\n  pos = posAttr.xy*0.5 + 0.5;\n  gl_Position = vec4(posAttr, 1.0);\n}\n",A.n6(a,b))
p.z=p.x.j(0,"posAttr")
p.Q=H.n(p.y.F(0,"txtCount"),"$iak")
p.ch=H.n(p.y.F(0,"backClr"),"$ibR")
p.sic(H.c([],[A.bb]))
p.sf2(H.c([],[A.ac]))
u=[A.ay]
p.shZ(H.c([],u))
p.si_(H.c([],u))
p.sf8(H.c([],u))
p.sf9(H.c([],u))
p.sfm(H.c([],[A.ak]))
for(t=0;t<a;++t){u=p.cx
s=p.y
r="txt"+t
q=s.j(0,r)
if(q==null)H.z(P.w(o+r+n));(u&&C.a).h(u,H.n(q,"$ibb"))
u=p.cy
s=p.y
r="clrMat"+t
q=s.j(0,r)
if(q==null)H.z(P.w(o+r+n));(u&&C.a).h(u,H.n(q,"$iac"))
u=p.db
s=p.y
r="srcLoc"+t
q=s.j(0,r)
if(q==null)H.z(P.w(o+r+n));(u&&C.a).h(u,H.n(q,"$iay"))
u=p.dx
s=p.y
r="srcSize"+t
q=s.j(0,r)
if(q==null)H.z(P.w(o+r+n));(u&&C.a).h(u,H.n(q,"$iay"))
u=p.dy
s=p.y
r="destLoc"+t
q=s.j(0,r)
if(q==null)H.z(P.w(o+r+n));(u&&C.a).h(u,H.n(q,"$iay"))
u=p.fr
s=p.y
r="destSize"+t
q=s.j(0,r)
if(q==null)H.z(P.w(o+r+n));(u&&C.a).h(u,H.n(q,"$iay"))
u=p.fx
s=p.y
r="flip"+t
q=s.j(0,r)
if(q==null)H.z(P.w(o+r+n));(u&&C.a).h(u,H.n(q,"$iak"))}},
sic:function(a){this.cx=H.k(a,"$ib",[A.bb],"$ab")},
sf2:function(a){this.cy=H.k(a,"$ib",[A.ac],"$ab")},
shZ:function(a){this.db=H.k(a,"$ib",[A.ay],"$ab")},
si_:function(a){this.dx=H.k(a,"$ib",[A.ay],"$ab")},
sf8:function(a){this.dy=H.k(a,"$ib",[A.ay],"$ab")},
sf9:function(a){this.fr=H.k(a,"$ib",[A.ay],"$ab")},
sfm:function(a){this.fx=H.k(a,"$ib",[A.ak],"$ab")}}
A.ek.prototype={}
A.iT.prototype={
j:function(a,b){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<t;++s){r=u[s]
if(r.c===b)return r}return},
F:function(a,b){var u=this.j(0,b)
if(u==null)throw H.f(P.w("Required uniform value, "+b+", was not defined or used in shader."))
return u},
i:function(a){return this.K()},
K:function(){var u,t,s,r
for(u=this.a,t=u.length,s="",r=0;r<u.length;u.length===t||(0,H.v)(u),++r)s+=u[r].i(0)+"\n"
return s}}
A.ak.prototype={
i:function(a){return"Uniform1i: "+H.j(this.c)}}
A.iQ.prototype={
i:function(a){return"Uniform2i: "+H.j(this.c)}}
A.iR.prototype={
i:function(a){return"Uniform3i: "+H.j(this.c)}}
A.iS.prototype={
i:function(a){return"Uniform4i: "+H.j(this.c)}}
A.iP.prototype={
i:function(a){return"Uniform1iv: "+H.j(this.c)},
sie:function(a){H.k(a,"$ib",[P.r],"$ab")}}
A.a7.prototype={
i:function(a){return"Uniform1f: "+H.j(this.c)}}
A.ay.prototype={
i:function(a){return"Uniform2f: "+H.j(this.c)}}
A.Z.prototype={
i:function(a){return"Uniform3f: "+H.j(this.c)}}
A.bR.prototype={
cJ:function(a){var u=a.a,t=a.b,s=a.c,r=a.d
return C.b.cD(this.a,this.d,u,t,s,r)},
i:function(a){return"Uniform4f: "+H.j(this.c)}}
A.iU.prototype={
i:function(a){return"Uniform1Mat2 "+H.j(this.c)}}
A.d5.prototype={
ah:function(a){var u=new Float32Array(H.ci(H.k(a,"$ib",[P.B],"$ab")))
C.b.ef(this.a,this.d,!1,u)},
i:function(a){return"UniformMat3: "+H.j(this.c)}}
A.ac.prototype={
ah:function(a){var u=new Float32Array(H.ci(H.k(a,"$ib",[P.B],"$ab")))
C.b.cE(this.a,this.d,!1,u)},
i:function(a){return"UniformMat4: "+H.j(this.c)}}
A.bb.prototype={
i:function(a){return"UniformSampler2D: "+H.j(this.c)}}
A.ag.prototype={
cL:function(a){var u=a==null||a.d<6,t=this.a,s=this.d
if(u)t.uniform1i(s,0)
else t.uniform1i(s,a.a)},
i:function(a){return"UniformSamplerCube: "+H.j(this.c)}}
F.jW.prototype={
$3:function(a,b,c){var u,t=this,s=t.a,r=s.a.co(s.b,b).co(s.d.co(s.c,b),c)
s=new V.ao(r.a,r.b,r.c)
if(!J.V(a.f,s)){a.f=s
s=a.a
if(s!=null)s.a2()}a.sbb(r.u(0,Math.sqrt(r.w(r))))
s=1-b
u=1-c
u=new V.bl(t.b+b*c,t.c+s*c,t.d+b*u,t.e+s*u)
if(!J.V(a.cx,u)){a.cx=u
s=a.a
if(s!=null)s.a2()}},
$S:39}
F.a3.prototype={
eW:function(){var u,t,s,r=this.a,q=r==null?null:r.r
r=this.b
u=r==null?null:r.r
r=this.c
t=r==null?null:r.r
s=V.er()
if(q!=null)s=s.D(0,q)
if(u!=null)s=s.D(0,u)
if(t!=null)s=s.D(0,t)
if(s.dW())return
return s.u(0,Math.sqrt(s.w(s)))},
f0:function(){var u,t,s,r=this.a,q=r==null?null:r.f
r=this.b
u=r==null?null:r.f
r=this.c
t=r==null?null:r.f
if(q==null||u==null||t==null)return
r=u.H(0,q)
r=new V.L(r.a,r.b,r.c)
s=r.u(0,Math.sqrt(r.w(r)))
r=t.H(0,q)
r=new V.L(r.a,r.b,r.c)
r=s.b7(r.u(0,Math.sqrt(r.w(r))))
return r.u(0,Math.sqrt(r.w(r)))},
c3:function(){var u,t=this
if(t.d!=null)return!0
u=t.eW()
if(u==null){u=t.f0()
if(u==null)return!1}t.d=u
t.a.a.a2()
return!0},
eV:function(){var u,t,s,r=this.a,q=r==null?null:r.x
r=this.b
u=r==null?null:r.x
r=this.c
t=r==null?null:r.x
s=V.er()
if(q!=null)s=s.D(0,q)
if(u!=null)s=s.D(0,u)
if(t!=null)s=s.D(0,t)
if(s.dW())return
return s.u(0,Math.sqrt(s.w(s)))},
f_:function(){var u,t,s,r,q,p,o,n=this,m=null,l=n.a,k=l==null,j=k?m:l.f,i=n.b,h=i==null,g=h?m:i.f,f=n.c,e=f==null,d=e?m:f.f
if(j==null||g==null||d==null)return
u=k?m:l.y
t=h?m:i.y
s=e?m:f.y
if(u==null||t==null||s==null)return
l=t.b
r=l-s.b
if(Math.abs(r-0)<$.I().a){l=d.H(0,g)
l=new V.L(l.a,l.b,l.c)
q=l.u(0,Math.sqrt(l.w(l)))
if(s.a-t.a<0)q=q.N(0)}else{p=(l-u.b)/r
l=d.H(0,g)
l=new V.ao(l.a*p+g.a,l.b*p+g.b,l.c*p+g.c).H(0,j)
l=new V.L(l.a,l.b,l.c)
q=l.u(0,Math.sqrt(l.w(l)))
s=s.a
t=t.a
if((s-t)*p+t-u.a<0)q=q.N(0)}l=n.d
if(l!=null){o=l.u(0,Math.sqrt(l.w(l)))
l=o.b7(q)
l=l.u(0,Math.sqrt(l.w(l))).b7(o)
q=l.u(0,Math.sqrt(l.w(l)))}return q},
c1:function(){var u,t=this
if(t.e!=null)return!0
u=t.eV()
if(u==null){u=t.f_()
if(u==null)return!1}t.e=u
t.a.a.a2()
return!0},
n:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.K()},
C:function(a){var u,t=this,s=t.a
if(s==null||t.b==null||t.c==null)return a+"disposed"
u=a+C.e.an(J.av(s.e),0)+", "+C.e.an(J.av(t.b.e),0)+", "+C.e.an(J.av(t.c.e),0)+" {"
s=t.d
u=s!=null?u+(s.i(0)+", "):u+"-, "
s=t.e
return s!=null?u+(s.i(0)+"}"):u+"-}"},
K:function(){return this.C("")}}
F.bh.prototype={
n:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.K()},
C:function(a){var u=this.a
if(u==null||this.b==null)return a+"disposed"
return a+C.e.an(J.av(u.e),0)+", "+C.e.an(J.av(this.b.e),0)},
K:function(){return this.C("")}}
F.bM.prototype={
n:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.K()},
C:function(a){var u=this.a
if(u==null)return a+"disposed"
return a+C.e.an(J.av(u.e),0)},
K:function(){return this.C("")}}
F.e7.prototype={
gm:function(){var u=this.e
return u==null?this.e=D.K():u},
iR:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i,h=this,g=h.e
if(g!=null)++g.d
a.a.a_()
u=h.a.c.length
for(g=a.a.c,t=g.length,s=0;s<g.length;g.length===t||(0,H.v)(g),++s){r=g[s]
h.a.h(0,r.ix())}h.a.a_()
for(g=a.b.b,t=g.length,s=0;s<g.length;g.length===t||(0,H.v)(g),++s){q=g[s]
p=h.a
o=q.a
o.a.a.a_()
o=o.e
if(typeof o!=="number")return o.D()
o+=u
p=p.c
if(o>=p.length)return H.h(p,o)
n=p[o]
h.b.a.a.h(0,n)
o=new F.bM()
if(n.a==null)H.z(P.w("May not create a point with a vertex which is not attached to a shape."))
o.a=n
C.a.h(n.b.b,o)
C.a.h(o.a.a.b.b,o)
p=o.a.a.e
if(p!=null)p.v(null)}for(g=a.c.b,t=g.length,s=0;s<g.length;g.length===t||(0,H.v)(g),++s){m=g[s]
p=h.a
o=m.a
o.a.a.a_()
o=o.e
if(typeof o!=="number")return o.D()
o+=u
p=p.c
if(o>=p.length)return H.h(p,o)
l=p[o]
o=h.a
p=m.b
p.a.a.a_()
p=p.e
if(typeof p!=="number")return p.D()
p+=u
o=o.c
if(p>=o.length)return H.h(o,p)
k=o[p]
p=h.c.a
p.a.h(0,l)
p.a.h(0,k)
F.mH(l,k)}for(g=a.d.b,t=g.length,s=0;s<g.length;g.length===t||(0,H.v)(g),++s){j=g[s]
p=h.a
o=j.a
o.a.a.a_()
o=o.e
if(typeof o!=="number")return o.D()
o+=u
p=p.c
if(o>=p.length)return H.h(p,o)
l=p[o]
o=h.a
p=j.b
p.a.a.a_()
p=p.e
if(typeof p!=="number")return p.D()
p+=u
o=o.c
if(p>=o.length)return H.h(o,p)
k=o[p]
p=h.a
o=j.c
o.a.a.a_()
o=o.e
if(typeof o!=="number")return o.D()
o+=u
p=p.c
if(o>=p.length)return H.h(p,o)
i=p[o]
o=h.d.a
o.a.h(0,l)
o.a.h(0,k)
o.a.h(0,i)
F.cD(l,k,i)}g=h.e
if(g!=null)g.ax(0)},
aG:function(){var u,t=this,s=t.e
if(s!=null)++s.d
u=t.d.aG()||!1
if(!t.a.aG())u=!1
s=t.e
if(s!=null)s.ax(0)
return u},
bo:function(a2,a3){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a=this,a0=34962,a1=a.a.c.length
a3.toString
u=$.aq()
t=a3.a
s=(t&u.a)!==0?1:0
if((t&$.br().a)!==0)++s
if((t&$.bq().a)!==0)++s
if((t&$.bW().a)!==0)++s
if((t&$.bs().a)!==0)++s
if((t&$.dm().a)!==0)++s
if((t&$.dn().a)!==0)++s
if((t&$.cs().a)!==0)++s
if((t&$.bp().a)!==0)++s
r=a3.gcN(a3)
q=r*4
u=new Array(a1*r)
u.fixed$length=Array
t=P.B
p=H.c(u,[t])
u=new Array(s)
u.fixed$length=Array
o=H.c(u,[Z.du])
for(n=0,m=0;m<s;++m){l=a3.io(m)
k=l.gcN(l)
C.a.l(o,m,new Z.du(l,k,n*4,q))
for(j=0;j<a1;++j){u=a.a.c
if(j>=u.length)return H.h(u,j)
i=u[j].iP(l)
h=n+j*r
for(g=0;g<i.length;++g){C.a.l(p,h,i[g]);++h}}n+=k}H.k(p,"$ib",[t],"$ab")
u=a2.a
f=u.createBuffer()
u.bindBuffer(a0,f)
u.bufferData(a0,new Float32Array(H.ci(p)),35044)
u.bindBuffer(a0,null)
e=new Z.bu(new Z.es(a0,f),o,a3)
e.sfn(H.c([],[Z.bG]))
if(a.b.b.length!==0){t=P.r
d=H.c([],[t])
for(m=0;c=a.b.b,m<c.length;++m){c=c[m].a
c.a.a.a_()
C.a.h(d,c.e)}b=Z.kE(u,34963,H.k(d,"$ib",[t],"$ab"))
C.a.h(e.b,new Z.bG(0,d.length,b))}if(a.c.b.length!==0){t=P.r
d=H.c([],[t])
for(m=0;c=a.c.b,m<c.length;++m){c=c[m].a
c.a.a.a_()
C.a.h(d,c.e)
c=a.c.b
if(m>=c.length)return H.h(c,m)
c=c[m].b
c.a.a.a_()
C.a.h(d,c.e)}b=Z.kE(u,34963,H.k(d,"$ib",[t],"$ab"))
C.a.h(e.b,new Z.bG(1,d.length,b))}if(a.d.b.length!==0){t=P.r
d=H.c([],[t])
for(m=0;c=a.d.b,m<c.length;++m){c=c[m].a
c.a.a.a_()
C.a.h(d,c.e)
c=a.d.b
if(m>=c.length)return H.h(c,m)
c=c[m].b
c.a.a.a_()
C.a.h(d,c.e)
c=a.d.b
if(m>=c.length)return H.h(c,m)
c=c[m].c
c.a.a.a_()
C.a.h(d,c.e)}b=Z.kE(u,34963,H.k(d,"$ib",[t],"$ab"))
C.a.h(e.b,new Z.bG(4,d.length,b))}return e},
i:function(a){var u=this,t="   ",s=H.c([],[P.l])
if(u.a.c.length!==0){C.a.h(s,"Vertices:")
C.a.h(s,u.a.C(t))}if(u.b.b.length!==0){C.a.h(s,"Points:")
C.a.h(s,u.b.C(t))}if(u.c.b.length!==0){C.a.h(s,"Lines:")
C.a.h(s,u.c.C(t))}if(u.d.b.length!==0){C.a.h(s,"Faces:")
C.a.h(s,u.d.C(t))}return C.a.q(s,"\n")},
a2:function(){var u=this.e
if(u!=null)u.v(null)},
$iov:1}
F.ia.prototype={
ik:function(a){var u,t,s,r,q,p
H.k(a,"$ib",[F.aF],"$ab")
u=H.c([],[F.a3])
t=a[0]
for(s=this.a,r=2;r<4;++r){q=a[r-1]
p=a[r]
s.a.h(0,t)
s.a.h(0,q)
s.a.h(0,p)
C.a.h(u,F.cD(t,q,p))}return u},
il:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k,j,i,h
H.k(c,"$ib",[F.aF],"$ab")
u=H.c([],[F.a3])
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
C.a.h(u,F.cD(l,k,i))
t.a.h(0,l)
t.a.h(0,i)
t.a.h(0,h)
C.a.h(u,F.cD(l,i,h))}else{m.h(0,k)
t.a.h(0,i)
t.a.h(0,h)
C.a.h(u,F.cD(k,i,h))
t.a.h(0,k)
t.a.h(0,h)
t.a.h(0,l)
C.a.h(u,F.cD(k,h,l))}o=!o}q=!q}return u},
gk:function(a){return this.b.length},
aG:function(){var u,t,s,r
for(u=this.b,t=u.length,s=!0,r=0;r<u.length;u.length===t||(0,H.v)(u),++r)if(!u[r].c3())s=!1
return s},
c2:function(){var u,t,s,r
for(u=this.b,t=u.length,s=!0,r=0;r<u.length;u.length===t||(0,H.v)(u),++r)if(!u[r].c1())s=!1
return s},
i:function(a){return this.K()},
C:function(a){var u,t,s,r=H.c([],[P.l])
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.v)(u),++s)C.a.h(r,u[s].C(a))
return C.a.q(r,"\n")},
K:function(){return this.C("")},
sfg:function(a){this.b=H.k(a,"$ib",[F.a3],"$ab")}}
F.ib.prototype={
gk:function(a){return this.b.length},
i:function(a){return this.K()},
C:function(a){var u,t,s=H.c([],[P.l]),r=this.b.length
for(u=0;u<r;++u){t=this.b
if(u>=t.length)return H.h(t,u)
C.a.h(s,t[u].C(a+(""+u+". ")))}return C.a.q(s,"\n")},
K:function(){return this.C("")},
sfq:function(a){this.b=H.k(a,"$ib",[F.bh],"$ab")}}
F.ic.prototype={
gk:function(a){return this.b.length},
i:function(a){return this.K()},
C:function(a){var u,t,s,r=H.c([],[P.l])
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.v)(u),++s)C.a.h(r,u[s].C(a))
return C.a.q(r,"\n")},
K:function(){return this.C("")},
sbV:function(a){this.b=H.k(a,"$ib",[F.bM],"$ab")}}
F.aF.prototype={
c6:function(a){var u=this,t=u.f,s=u.r,r=u.x,q=u.y,p=u.z,o=u.Q,n=u.ch
return F.j3(u.cx,r,o,t,s,q,p,a,n)},
ix:function(){return this.c6(null)},
sbb:function(a){var u
if(!J.V(this.z,a)){this.z=a
u=this.a
if(u!=null)u.a2()}},
iP:function(a){var u,t,s=this
if(a.n(0,$.aq())){u=s.f
t=[P.B]
if(u==null)return H.c([0,0,0],t)
else return H.c([u.a,u.b,u.c],t)}else if(a.n(0,$.br())){u=s.r
t=[P.B]
if(u==null)return H.c([0,1,0],t)
else return H.c([u.a,u.b,u.c],t)}else if(a.n(0,$.bq())){u=s.x
t=[P.B]
if(u==null)return H.c([0,0,1],t)
else return H.c([u.a,u.b,u.c],t)}else if(a.n(0,$.bW())){u=s.y
t=[P.B]
if(u==null)return H.c([0,0],t)
else return H.c([u.a,u.b],t)}else if(a.n(0,$.bs())){u=s.z
t=[P.B]
if(u==null)return H.c([0,0,0],t)
else return H.c([u.a,u.b,u.c],t)}else if(a.n(0,$.dm())){u=s.Q
t=[P.B]
if(u==null)return H.c([1,1,1],t)
else return H.c([u.a,u.b,u.c],t)}else if(a.n(0,$.dn())){u=s.Q
t=[P.B]
if(u==null)return H.c([1,1,1,1],t)
else return H.c([u.a,u.b,u.c,u.d],t)}else if(a.n(0,$.cs()))return H.c([s.ch],[P.B])
else if(a.n(0,$.bp())){u=s.cx
t=[P.B]
if(u==null)return H.c([-1,-1,-1,-1],t)
else return H.c([u.a,u.b,u.c,u.d],t)}else return H.c([],[P.B])},
c3:function(){var u,t=this,s={}
if(t.r!=null)return!0
u=t.a
if(u!=null){u=u.e
if(u!=null)++u.d}s.a=V.er()
t.d.J(0,new F.jb(s))
s=s.a
t.r=s.u(0,Math.sqrt(s.w(s)))
s=t.a
if(s!=null){s.a2()
s=t.a.e
if(s!=null)s.ax(0)}return!0},
c1:function(){var u,t=this,s={}
if(t.x!=null)return!0
u=t.a
if(u!=null){u=u.e
if(u!=null)++u.d}s.a=V.er()
t.d.J(0,new F.ja(s))
s=s.a
t.x=s.u(0,Math.sqrt(s.w(s)))
s=t.a
if(s!=null){s.a2()
s=t.a.e
if(s!=null)s.ax(0)}return!0},
n:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.K()},
C:function(a){var u,t,s=this,r="-",q=H.c([],[P.l])
C.a.h(q,C.e.an(J.av(s.e),0))
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
C.a.h(q,V.M(s.ch,3,0))
u=s.cx
if(u!=null)C.a.h(q,u.i(0))
else C.a.h(q,r)
t=C.a.q(q,", ")
return a+"{"+t+"}"},
K:function(){return this.C("")}}
F.jb.prototype={
$1:function(a){var u,t
H.e(a,"$ia3")
u=a==null?null:a.d
if(u!=null){t=this.a
t.a=t.a.D(0,u)}},
$S:8}
F.ja.prototype={
$1:function(a){var u,t
H.e(a,"$ia3")
u=a==null?null:a.e
if(u!=null){t=this.a
t.a=t.a.D(0,u)}},
$S:8}
F.j4.prototype={
a_:function(){},
h:function(a,b){var u,t=b.a
if(t!=null){if(t===this.a)return!1
throw H.f(P.w("May not add a vertex already attached to another shape to this shape."))}t=this.c
b.e=t.length
u=this.a
b.a=u
C.a.h(t,b)
u.a2()
return!0},
bm:function(a,b,c,d,e,f){var u=F.j3(a,null,b,c,null,d,e,f,0)
this.h(0,u)
return u},
gk:function(a){return this.c.length},
aG:function(){var u,t,s
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.v)(u),++s)u[s].c3()
return!0},
c2:function(){var u,t,s
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.v)(u),++s)u[s].c1()
return!0},
iu:function(){var u,t,s,r,q,p,o,n
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.v)(u),++s){r=u[s]
if(r.z==null){q=r.r
p=q.a
o=q.b
n=q.c
n=q.u(0,Math.sqrt(p*p+o*o+n*n))
if(!J.V(r.z,n)){r.z=n
q=r.a
if(q!=null){q=q.e
if(q!=null)q.v(null)}}}}return!0},
i:function(a){return this.K()},
C:function(a){var u,t,s,r
this.a_()
u=H.c([],[P.l])
for(t=this.c,s=t.length,r=0;r<t.length;t.length===s||(0,H.v)(t),++r)C.a.h(u,t[r].C(a))
return C.a.q(u,"\n")},
K:function(){return this.C("")},
sig:function(a){this.c=H.k(a,"$ib",[F.aF],"$ab")}}
F.j5.prototype={
gk:function(a){return this.b.length+this.c.length+this.d.length},
J:function(a,b){var u=this
H.o(b,{func:1,ret:-1,args:[F.a3]})
C.a.J(u.b,b)
C.a.J(u.c,new F.j6(u,b))
C.a.J(u.d,new F.j7(u,b))},
i:function(a){return this.K()},
K:function(){var u,t,s,r=H.c([],[P.l])
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.v)(u),++s)C.a.h(r,u[s].C(""))
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.v)(u),++s)C.a.h(r,u[s].C(""))
for(u=this.d,t=u.length,s=0;s<u.length;u.length===t||(0,H.v)(u),++s)C.a.h(r,u[s].C(""))
return C.a.q(r,"\n")},
sfh:function(a){this.b=H.k(a,"$ib",[F.a3],"$ab")},
sfi:function(a){this.c=H.k(a,"$ib",[F.a3],"$ab")},
sfj:function(a){this.d=H.k(a,"$ib",[F.a3],"$ab")}}
F.j6.prototype={
$1:function(a){H.e(a,"$ia3")
if(!J.V(a.a,this.a))this.b.$1(a)},
$S:8}
F.j7.prototype={
$1:function(a){var u
H.e(a,"$ia3")
u=this.a
if(!J.V(a.a,u)&&!J.V(a.b,u))this.b.$1(a)},
$S:8}
F.j8.prototype={
gk:function(a){return this.b.length+this.c.length},
i:function(a){return this.K()},
K:function(){var u,t,s,r=H.c([],[P.l])
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.v)(u),++s)C.a.h(r,u[s].C(""))
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.v)(u),++s)C.a.h(r,u[s].C(""))
return C.a.q(r,"\n")},
sfs:function(a){this.b=H.k(a,"$ib",[F.bh],"$ab")},
sft:function(a){this.c=H.k(a,"$ib",[F.bh],"$ab")}}
F.j9.prototype={
gk:function(a){return this.b.length},
i:function(a){return this.K()},
K:function(){var u,t,s,r=H.c([],[P.l])
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.v)(u),++s)C.a.h(r,u[s].C(""))
return C.a.q(r,"\n")},
sbV:function(a){this.b=H.k(a,"$ib",[F.bM],"$ab")}}
O.dV.prototype={
gm:function(){var u=this.fr
return u==null?this.fr=D.K():u},
A:function(a){var u
H.e(a,"$iq")
u=this.fr
if(u!=null)u.v(a)},
ad:function(){return this.A(null)},
dq:function(a){H.e(a,"$iq")
this.a=null
this.A(a)},
hN:function(){return this.dq(null)},
fN:function(a,b){var u=V.a4
H.k(b,"$id",[u],"$ad")
u=new D.bH([u])
u.b=!0
this.A(u)},
fP:function(a,b){var u=V.a4
H.k(b,"$id",[u],"$ad")
u=new D.bI([u])
u.b=!0
this.A(u)},
d8:function(){var u,t,s,r,q,p,o,n,m,l,k,j=this,i=P.r,h=new H.a0([i,i])
for(u=j.dx.e,t=u.length,s=0;s<u.length;u.length===t||(0,H.v)(u),++s){r=h.j(0,0)
h.l(0,0,r==null?1:r)}q=H.c([],[A.aK])
h.J(0,new O.hw(j,q))
C.a.bC(q,new O.hx())
p=new H.a0([i,i])
for(u=j.dx.f,t=u.length,s=0;s<u.length;u.length===t||(0,H.v)(u),++s){o=u[s]
r=o.gb6()
n=p.j(0,o.gb6())
p.l(0,r,n==null?1:n)}m=H.c([],[A.aP])
p.J(0,new O.hy(j,m))
C.a.bC(m,new O.hz())
l=new H.a0([i,i])
for(i=j.dx.r,u=i.length,s=0;s<i.length;i.length===u||(0,H.v)(i),++s){o=i[s]
t=o.gb6()
r=l.j(0,o.gb6())
l.l(0,t,r==null?1:r)}k=H.c([],[A.aT])
l.J(0,new O.hA(j,k))
C.a.bC(k,new O.hB())
i=C.d.a1(j.e.a.length+3,4)
j.dy.e
return A.mL(!1,!1,!1,!1,i*4,j.f.c,j.r.c,j.x.c,j.y.c,j.z.c,j.Q.c,j.cx.c,j.cy.c,j.db.c,q,m,k)},
ai:function(a,b){H.k(a,"$ib",[T.ca],"$ab")
if(b!=null)if(!C.a.P(a,b)){b.a=a.length
C.a.h(a,b)}},
a5:function(a,b){var u,t,s,r,q,p,o
for(u=this.dx.a,u=new J.al(u,u.length,[H.x(u,0)]);u.t();){t=u.d
t.toString
s=$.j2
if(s==null)s=$.j2=new V.L(0,0,1)
t.a=s
r=$.j1
t.d=r==null?$.j1=new V.L(0,1,0):r
r=$.j0
t.e=r==null?$.j0=new V.L(-1,0,0):r
r=t.b
if(r!=null){q=r.a
if(q!=null){s=q.bx(s)
r=s.a
p=s.b
o=s.c
t.a=s.u(0,Math.sqrt(r*r+p*p+o*o))
o=q.bx(t.d)
p=o.a
r=o.b
s=o.c
t.d=o.u(0,Math.sqrt(p*p+r*r+s*s))
s=q.bx(t.e)
r=s.a
p=s.b
o=s.c
t.e=s.u(0,Math.sqrt(r*r+p*p+o*o))}}}},
bv:function(b4,b5){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2=this,b3=b2.a
if(b3==null){b3=b2.d8()
u=H.e(b4.fr.j(0,b3.b8),"$idW")
if(u==null){u=A.mK(b3,b4.a)
b4.bn(u)}b3=b2.a=u
b5.e=null}t=b3.z
s=t.bq
b3=b5.e
if(!(b3 instanceof Z.bu))b3=b5.e=null
if(b3==null||!b3.d.n(0,s)){b3=t.k3
if(b3)b5.d.aG()
r=t.k4
if(r){q=b5.d
p=q.e
if(p!=null)++p.d
q.d.c2()
q.a.c2()
q=q.e
if(q!=null)q.ax(0)}q=t.r2
if(q){p=b5.d
o=p.e
if(o!=null)++o.d
p.a.iu()
p=p.e
if(p!=null)p.ax(0)}n=b5.d.bo(new Z.cg(b4.a),s)
n.aq($.aq()).e=b2.a.Q.c
if(b3)n.aq($.br()).e=b2.a.cx.c
if(r)n.aq($.bq()).e=b2.a.ch.c
if(t.r1)n.aq($.bW()).e=b2.a.cy.c
if(q)n.aq($.bs()).e=b2.a.db.c
if(t.rx)n.aq($.bp()).e=b2.a.dx.c
b5.e=n}b3=T.ca
m=H.c([],[b3])
b2.a.O(b4)
if(t.dy){r=b2.a
q=b4.dx
q=q.gV(q)
r=r.dy
r.toString
r.ah(q.a4(0,!0))}if(t.fr){r=b2.a
q=b4.cx
if(q==null){q=b4.db
q=q.gV(q)
p=b4.dx
p=b4.cx=q.p(0,p.gV(p))
q=p}r=r.fr
r.toString
r.ah(q.a4(0,!0))}r=b2.a
q=b4.ge7()
r=r.fy
r.toString
r.ah(q.a4(0,!0))
if(t.ry){r=b2.a
q=b2.b
r=r.k1
r.toString
r.ah(C.l.a4(q,!0))}if(t.x1){r=b2.a
q=b2.c
r=r.k2
r.toString
r.ah(C.l.a4(q,!0))}if(t.x2){r=b2.a
q=b2.d
r=r.k3
r.toString
r.ah(C.l.a4(q,!0))}if(t.y2>0){l=b2.e.a.length
r=b2.a.k4
C.b.aY(r.a,r.d,l)
for(r=[P.B],k=0;k<l;++k){q=b2.a
p=b2.e.a
if(k>=p.length)return H.h(p,k)
p=p[k]
q.toString
H.e(p,"$ia4")
q=q.r1
if(k>=q.length)return H.h(q,k)
q=q[k]
j=new Float32Array(H.ci(H.k(p.a4(0,!0),"$ib",r,"$ab")))
C.b.cE(q.a,q.d,!1,j)}}r=t.a
if(r.a){q=b2.a
p=b2.f.f
q=q.r2
C.b.T(q.a,q.d,p.a,p.b,p.c)}if(r.c){b2.ai(m,b2.f.e)
r=b2.a
q=b2.f.e
r.aj(r.ry,q)}if(t.id){r=t.b
if(r.a){q=b2.a
p=b2.r.f
q=q.x1
C.b.T(q.a,q.d,p.a,p.b,p.c)}if(r.c){b2.ai(m,b2.r.e)
r=b2.a
q=b2.r.e
r.aj(r.y1,q)}r=t.c
if(r.a){q=b2.a
p=b2.x.f
q=q.y2
C.b.T(q.a,q.d,p.a,p.b,p.c)}if(r.c){b2.ai(m,b2.x.e)
r=b2.a
q=b2.x.e
r.aj(r.bq,q)}r=t.d
if(r.a){q=b2.a
p=b2.y.f
q=q.dI
C.b.T(q.a,q.d,p.a,p.b,p.c)}if(r.c){b2.ai(m,b2.y.e)
r=b2.a
q=b2.y.e
r.aj(r.dJ,q)}r=t.e
q=r.a
if(!q)p=r.c
else p=!0
if(p){p=b2.a
o=b2.z.ch
p=p.dM
C.b.a0(p.a,p.d,o)}if(q){q=b2.a
p=b2.z.f
q=q.dK
C.b.T(q.a,q.d,p.a,p.b,p.c)}if(r.c){b2.ai(m,b2.z.e)
r=b2.a
q=b2.z.e
r.aj(r.dL,q)}r=t.z
if(r.length>0){q=b4.db
i=q.gV(q)
q=P.r
h=new H.a0([q,q])
for(q=b2.dx.e,p=q.length,g=0;g<q.length;q.length===p||(0,H.v)(q),++g){f=q[g]
e=h.j(0,0)
if(e==null)e=0
h.l(0,0,e+1)
d=J.fq(b2.a.ce.j(0,0),e)
o=i.bx(f.a)
c=o.a
b=o.b
a=o.c
a=o.u(0,Math.sqrt(c*c+b*b+a*a))
b=d.e
c=a.a
o=a.b
a=a.c
C.b.T(b.a,b.d,c,o,a)
a=f.c
o=d.f
C.b.T(o.a,o.d,a.a,a.b,a.c)}for(q=r.length,g=0;g<r.length;r.length===q||(0,H.v)(r),++g){p=r[g].a
l=h.j(0,p)
if(l==null)l=0
p=b2.a.cd.j(0,p)
C.b.aY(p.a,p.d,l)}}r=t.Q
if(r.length>0){q=b4.db
i=q.gV(q)
q=P.r
a0=new H.a0([q,q])
for(q=b2.dx.f,p=q.length,o=[b3],c=[P.B],g=0;g<q.length;q.length===p||(0,H.v)(q),++g){f=q[g]
a1=f.gb6()
e=a0.j(0,a1)
if(e==null)e=0
a0.l(0,a1,e+1)
d=J.fq(b2.a.cg.j(0,a1),e)
a2=i.p(0,f.gV(f))
b=f.gV(f)
a=$.cQ
b=b.cC(a==null?$.cQ=new V.ao(0,0,0):a)
a=d.b
C.b.T(a.a,a.d,b.a,b.b,b.c)
b=$.cQ
b=a2.cC(b==null?$.cQ=new V.ao(0,0,0):b)
a=d.c
C.b.T(a.a,a.d,b.a,b.b,b.c)
b=f.gb5(f)
a=d.e
C.b.T(a.a,a.d,b.a,b.b,b.c)
f.gao()
b=a2.cl(0)
a=b.a
a3=b.b
a4=b.c
a5=b.e
a6=b.f
a7=b.r
a8=b.y
a9=b.z
b=b.Q
b0=d.d
b0.toString
j=new Float32Array(H.ci(H.k(new V.dX(a,a3,a4,a5,a6,a7,a8,a9,b).a4(0,!0),"$ib",c,"$ab")))
C.b.ef(b0.a,b0.d,!1,j)
f.gao()
b=f.gao()
H.k(m,"$ib",o,"$ab")
if(!C.a.P(m,b)){b.a=m.length
C.a.h(m,b)}b=f.gao()
a=b.gcp(b)
if(a){a=d.f
a.toString
a3=b.d
if(a3<6)a.a.uniform1i(a.d,0)
else{b=b.a
a.a.uniform1i(a.d,b)}}f.gaZ()
b=f.gek()
a=d.x
a.toString
a3=b.giE(b)
a4=b.giF(b)
a5=b.giG()
b=b.giD()
C.b.cD(a.a,a.d,a3,a4,a5,b)
b=f.gaZ()
if(!C.a.P(m,b)){b.a=m.length
C.a.h(m,b)}b=f.gaZ()
a=b.gcp(b)
if(a){a=d.r
a.toString
a3=b.d
if(a3<6)a.a.uniform1i(a.d,0)
else{b=b.a
a.a.uniform1i(a.d,b)}}if(f.giI()){b=f.gip()
a=d.y
C.b.a0(a.a,a.d,b)
b=f.giq()
a=d.z
C.b.a0(a.a,a.d,b)
b=f.gir()
a=d.Q
C.b.a0(a.a,a.d,b)}}for(q=r.length,g=0;g<r.length;r.length===q||(0,H.v)(r),++g){p=r[g].a
l=a0.j(0,p)
if(l==null)l=0
p=b2.a.cf.j(0,p)
C.b.aY(p.a,p.d,l)}}r=t.ch
if(r.length>0){q=b4.db
i=q.gV(q)
q=P.r
b1=new H.a0([q,q])
for(q=b2.dx.r,p=q.length,b3=[b3],g=0;g<q.length;q.length===p||(0,H.v)(q),++g){f=q[g]
a1=f.gb6()
e=b1.j(0,a1)
if(e==null)e=0
b1.l(0,a1,e+1)
d=J.fq(b2.a.cj.j(0,a1),e)
o=f.gj6(f)
c=d.b
C.b.T(c.a,c.d,o.a,o.b,o.c)
o=f.gjq(f).jB()
c=d.c
C.b.T(c.a,c.d,o.a,o.b,o.c)
o=i.cC(f.gj6(f))
c=d.d
C.b.T(c.a,c.d,o.a,o.b,o.c)
o=f.gb5(f)
c=d.e
C.b.T(c.a,c.d,o.a,o.b,o.c)
f.gao()
o=f.gbz()
c=d.f
C.b.T(c.a,c.d,o.a,o.b,o.c)
o=f.gcz(f)
c=d.r
C.b.T(c.a,c.d,o.a,o.b,o.c)
o=f.gjC()
c=d.x
C.b.a0(c.a,c.d,o)
o=f.gjD()
c=d.y
C.b.a0(c.a,c.d,o)
f.gao()
o=f.gao()
H.k(m,"$ib",b3,"$ab")
if(!C.a.P(m,o)){o.a=m.length
C.a.h(m,o)}o=f.gao()
c=o.gcp(o)
if(c){c=d.dx
c.toString
b=o.d
if(!b)c.a.uniform1i(c.d,0)
else{o=o.a
c.a.uniform1i(c.d,o)}}f.gaZ()
o=f.gek()
c=d.z
c.toString
b=o.giE(o)
a=o.giF(o)
a3=o.giG()
o=o.giD()
C.b.cD(c.a,c.d,b,a,a3,o)
o=f.gaZ()
if(!C.a.P(m,o)){o.a=m.length
C.a.h(m,o)}o=f.gaZ()
c=o.gcp(o)
if(c){c=d.dy
c.toString
b=o.d
if(!b)c.a.uniform1i(c.d,0)
else{o=o.a
c.a.uniform1i(c.d,o)}}if(f.gjr()){o=f.gjp()
c=d.Q
C.b.a0(c.a,c.d,o)
o=f.gjo()
c=d.ch
C.b.a0(c.a,c.d,o)}if(f.giI()){o=f.gip()
c=d.cx
C.b.a0(c.a,c.d,o)
o=f.giq()
c=d.cy
C.b.a0(c.a,c.d,o)
o=f.gir()
c=d.db
C.b.a0(c.a,c.d,o)}}for(b3=r.length,g=0;g<r.length;r.length===b3||(0,H.v)(r),++g){q=r[g].a
l=b1.j(0,q)
if(l==null)l=0
q=b2.a.ci.j(0,q)
C.b.aY(q.a,q.d,l)}}}if(t.f.c){b2.ai(m,b2.Q.e)
b3=b2.a
r=b2.Q.e
b3.aj(b3.dN,r)}if(t.dx){b3=b2.a
r=b4.Q
if(r==null){r=b4.db
r=b4.Q=r.gV(r).cl(0)}b3=b3.id
b3.toString
b3.ah(r.a4(0,!0))}if(t.cy){b2.ai(m,b2.ch)
b3=b2.a
r=b2.ch
b3.aj(b3.dO,r)
b3=t.r
if(b3.a){r=b2.a
q=b2.cx.f
r=r.dP
C.b.T(r.a,r.d,q.a,q.b,q.c)}if(b3.c){b2.ai(m,b2.cx.e)
b3=b2.a
r=b2.cx.e
b3.aj(b3.dQ,r)}b3=t.x
r=b3.a
if(!r)q=b3.c
else q=!0
if(q){q=b2.a
p=b2.cy.ch
q=q.dR
C.b.a0(q.a,q.d,p)}if(r){r=b2.a
q=b2.cy.f
r=r.dS
C.b.T(r.a,r.d,q.a,q.b,q.c)}if(b3.c){b2.ai(m,b2.cy.e)
b3=b2.a
r=b2.cy.e
b3.aj(b3.dT,r)}}b3=t.y
r=b3.a
q=!r
if(q)p=b3.c
else p=!0
if(p){if(r){r=b2.a
p=b2.db.f
r=r.dU
C.b.a0(r.a,r.d,p)}if(b3.c){b2.ai(m,b2.db.e)
r=b2.a
p=b2.db.e
r.aj(r.dV,p)}r=b4.a
r.enable(3042)
r.blendFunc(770,771)}for(k=0;k<m.length;++k)m[k].O(b4)
r=b5.e
r.O(b4)
r.a3(b4)
r.ac(b4)
if(q)b3=b3.c
else b3=!0
if(b3)b4.a.disable(3042)
for(b3=b4.a,k=0;k<m.length;++k){r=m[k]
if(r.c){r.c=!1
b3.activeTexture(33984+r.a)
b3.bindTexture(34067,null)}}r=b2.a
r.toString
b3.useProgram(null)
r.x.bp()},
i:function(a){var u=this.a
if(u!=null)return u.b
else return this.d8().b8},
seY:function(a){this.e=H.k(a,"$iX",[V.a4],"$aX")}}
O.hw.prototype={
$2:function(a,b){H.a9(a)
H.a9(b)
if(typeof b!=="number")return b.D()
return C.a.h(this.b,new A.aK(a,C.d.a1(b+3,4)*4))},
$S:10}
O.hx.prototype={
$2:function(a,b){H.e(a,"$iaK")
H.e(b,"$iaK")
return J.kk(a.a,b.a)},
$S:42}
O.hy.prototype={
$2:function(a,b){H.a9(a)
H.a9(b)
if(typeof b!=="number")return b.D()
return C.a.h(this.b,new A.aP(a,C.d.a1(b+3,4)*4))},
$S:10}
O.hz.prototype={
$2:function(a,b){H.e(a,"$iaP")
H.e(b,"$iaP")
return J.kk(a.a,b.a)},
$S:43}
O.hA.prototype={
$2:function(a,b){H.a9(a)
H.a9(b)
if(typeof b!=="number")return b.D()
return C.a.h(this.b,new A.aT(a,C.d.a1(b+3,4)*4))},
$S:10}
O.hB.prototype={
$2:function(a,b){H.e(a,"$iaT")
H.e(b,"$iaT")
return J.kk(a.a,b.a)},
$S:44}
O.hq.prototype={
aD:function(){var u,t=this
t.cS()
u=t.f
if(!(Math.abs(u-1)<$.I().a)){t.f=1
u=new D.y(t.b,u,1,[P.B])
u.b=!0
t.a.A(u)}}}
O.cJ.prototype={
A:function(a){return this.a.A(H.e(a,"$iq"))},
ad:function(){return this.A(null)},
aD:function(){},
bY:function(a){var u,t,s=this
if(!s.c.n(0,a)){u=s.c
if(!u.a)u=u.c
else u=!0
if(u){if(!a.a)u=a.c
else u=!0
t=!u}else t=!0
s.c=a
if(t)s.aD()
u=s.a
u.a=null
u.A(null)}},
sbb:function(a){var u,t=this,s=t.c
if(!s.c)t.bY(new A.ah(s.a,!1,!0))
s=t.e
if(s!==a){if(s!=null)s.gm().M(0,t.ga7())
u=t.e
t.e=a
a.gm().h(0,t.ga7())
s=new D.y(t.b+".textureCube",u,t.e,[T.d1])
s.b=!0
t.a.A(s)}}}
O.hr.prototype={}
O.b4.prototype={
ds:function(a){var u,t,s=this
if(!s.f.n(0,a)){u=s.f
s.f=a
t=new D.y(s.b+".color",u,a,[V.W])
t.b=!0
s.a.A(t)}},
aD:function(){this.cS()
this.ds(new V.W(1,1,1))},
sb5:function(a,b){this.bY(new A.ah(!0,!1,this.c.c))
this.ds(b)}}
O.ht.prototype={}
O.hu.prototype={
aD:function(){var u,t=this
t.cT()
u=t.ch
if(!(Math.abs(u-1)<$.I().a)){t.ch=1
u=new D.y(t.b+".refraction",u,1,[P.B])
u.b=!0
t.a.A(u)}}}
O.hv.prototype={
du:function(a){var u=this,t=u.ch
if(!(Math.abs(t-a)<$.I().a)){u.ch=a
t=new D.y(u.b+".shininess",t,a,[P.B])
t.b=!0
u.a.A(t)}},
aD:function(){this.cT()
this.du(100)}}
O.e8.prototype={
gm:function(){var u=this.e
return u==null?this.e=D.K():u},
A:function(a){var u
H.e(a,"$iq")
u=this.e
if(u!=null)u.v(a)},
ad:function(){return this.A(null)},
a5:function(a,b){},
bv:function(a,b){var u,t,s,r,q,p,o=this,n="Skybox"
if(o.a==null){u=H.e(a.fr.j(0,n),"$ie9")
if(u==null){t=a.a
u=new A.e9(t,n)
u.be(t,n)
u.br(0,"uniform mat4 viewMat;                             \nuniform float fov;                                \nuniform float ratio;                              \n                                                  \nattribute vec3 posAttr;                           \n                                                  \nvarying vec3 cubeTxt;                             \n                                                  \nvoid main()                                       \n{                                                 \n  float t = 1.0 / (tan(fov * 0.5)*3.0);           \n  float x = -t * posAttr.x / ratio;               \n  float y = t * posAttr.y;                        \n  cubeTxt = (viewMat * vec4(x, y, 1.0, 0.0)).xyz; \n  gl_Position = vec4(posAttr, 1.0);               \n}                                                 \n","precision mediump float;                                              \n                                                                      \nuniform samplerCube boxTxt;                                           \nuniform vec3 boxClr;                                                  \n                                                                      \nvarying vec3 cubeTxt;                                                 \n                                                                      \nvoid main()                                                           \n{                                                                     \n   vec3 txtCube = normalize(cubeTxt);                                 \n   gl_FragColor = vec4(boxClr*textureCube(boxTxt, txtCube).xyz, 1.0); \n}                                                                     \n")
u.z=u.x.j(0,"posAttr")
u.Q=H.n(u.y.j(0,"fov"),"$ia7")
u.ch=H.n(u.y.j(0,"ratio"),"$ia7")
u.cx=H.n(u.y.j(0,"boxClr"),"$iZ")
u.cy=H.n(u.y.j(0,"boxTxt"),"$iag")
u.db=H.n(u.y.j(0,"viewMat"),"$iac")
a.bn(u)}o.a=u}if(b.e==null){t=b.d.bo(new Z.cg(a.a),$.aq())
t.aq($.aq()).e=o.a.z.c
b.e=t}t=o.c
if(t!=null){t.a=1
t.O(a)}t=a.d
s=a.c
r=o.a
r.O(a)
q=o.b
p=r.Q
C.b.a0(p.a,p.d,q)
q=r.ch
C.b.a0(q.a,q.d,t/s)
s=o.c
r.cy.cL(s)
s=o.d
t=r.cx
C.b.T(t.a,t.d,s.a,s.b,s.c)
s=a.db
s=s.gV(s).cl(0)
r=r.db
r.toString
r.ah(s.a4(0,!0))
t=b.e
if(t instanceof Z.bu){t.O(a)
t.a3(a)
t.ac(a)}else b.e=null
t=o.a
t.toString
a.a.useProgram(null)
t.x.bp()
t=o.c
if(t!=null)t.ac(a)}}
O.ih.prototype={
gm:function(){var u=this.c
return u==null?this.c=D.K():u},
a5:function(a,b){},
bv:function(a,b){var u,t,s,r=this,q="SolidColor",p=r.a
if(p==null){u=H.e(a.fr.j(0,q),"$iea")
if(u==null){p=a.a
u=new A.ea(p,q)
u.be(p,q)
u.br(0,"uniform mat4 projViewObjMat;                       \n                                                   \nattribute vec3 posAttr;                            \n                                                   \nvoid main()                                        \n{                                                  \n  gl_Position = projViewObjMat*vec4(posAttr, 1.0); \n}                                                  \n","precision mediump float; \n                         \nuniform vec4 color;      \n                         \nvoid main()              \n{                        \n   gl_FragColor = color; \n}                        \n")
u.z=u.x.j(0,"posAttr")
u.Q=H.n(u.y.j(0,"color"),"$ibR")
u.ch=H.n(u.y.j(0,"projViewObjMat"),"$iac")
a.bn(u)}r.a=u
p=u}t=b.e
if((!(t instanceof Z.bu)?b.e=null:t)==null){p=b.d.bo(new Z.cg(a.a),$.aq())
t=p.aq($.aq())
s=r.a
t.e=s.z.c
b.e=p
p=s}p.O(a)
t=r.b
p.Q.cJ(t)
t=a.ge7()
p=p.ch
p.toString
p.ah(t.a4(0,!0))
t=b.e
t.O(a)
t.a3(a)
t.ac(a)
t=r.a
t.toString
a.a.useProgram(null)
t.x.bp()}}
O.bP.prototype={}
O.eg.prototype={
gm:function(){var u=this.e
return u==null?this.e=D.K():u},
A:function(a){var u
H.e(a,"$iq")
u=this.e
if(u!=null)u.v(a)},
ad:function(){return this.A(null)},
h2:function(a,b){var u,t,s,r,q,p,o
H.k(b,"$id",[O.aV],"$ad")
for(u=b.length,t=this.ga7(),s={func:1,ret:-1,args:[D.q]},r=[s],q=0;q<b.length;b.length===u||(0,H.v)(b),++q){p=b[q]
if(p!=null){o=p.f
if(o==null){o=new D.bD()
o.sa8(null)
o.saQ(null)
o.c=null
o.d=0
p.f=o}H.o(t,s)
if(o.a==null)o.sa8(H.c([],r))
o=o.a;(o&&C.a).h(o,t)}}this.ad()},
h4:function(a,b){var u,t
H.k(b,"$id",[O.aV],"$ad")
for(u=b.gR(b),t=this.ga7();u.t();)u.gG(u).gm().M(0,t)
this.ad()},
a5:function(a,b){},
fp:function(a){a=C.d.a1(a+3,4)*4
if(a<=0)return 4
return a},
bv:function(a,b){var u,t,s,r,q,p,o,n,m,l,k,j,i,h=this,g=h.fp(h.c.a.length)
if(g!==h.d||h.f!=h.r){h.d=g
h.r=h.f
h.b=null}u=h.b
if(u==null){u=h.f
t="TextureLayout_"+g+"_"+C.d.i(u.a)
s=H.e(a.fr.j(0,t),"$ieh")
if(s==null){s=A.n5(g,u,a.a)
a.bn(s)}h.b=s
u=s}if(b.e==null){u=b.d.bo(new Z.cg(a.a),$.aq())
t=u.aq($.aq())
r=h.b
t.e=r.z.c
b.e=u
u=r}u.O(a)
u=T.ca
q=H.c([],[u])
for(t=[P.B],u=[u],p=0,o=0;r=h.c.a,o<r.length;++o){n=r[o]
if(n!=null&&n.a!=null){r=n.a
H.k(q,"$ib",u,"$ab")
if(r!=null)if(!C.a.P(q,r)){r.a=q.length
C.a.h(q,r)}r=h.b
m=n.a
r=r.cx
if(p>=r.length)return H.h(r,p)
r=r[p]
l=m==null||!m.d
k=r.a
r=r.d
if(l)k.uniform1i(r,0)
else k.uniform1i(r,m.a)
r=h.b
m=n.b
r=r.cy
if(p>=r.length)return H.h(r,p)
r=r[p]
if(m==null){m=$.hC
if(m==null){m=new V.a4(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1)
$.hC=m}}j=new Float32Array(H.ci(H.k(m.a4(0,!0),"$ib",t,"$ab")))
C.b.cE(r.a,r.d,!1,j)
r=h.b
i=n.c
r.toString
if(i==null){m=$.cT
if(m==null){m=V.e3(0,0,1,1)
$.cT=m
i=m}else i=m}m=r.db
if(p>=m.length)return H.h(m,p)
m=m[p]
C.b.by(m.a,m.d,i.a,i.b)
r=r.dx
if(p>=r.length)return H.h(r,p)
r=r[p]
C.b.by(r.a,r.d,i.c,i.d)
r=h.b
i=n.d
r.toString
if(i==null){m=$.cT
if(m==null){m=V.e3(0,0,1,1)
$.cT=m
i=m}else i=m}m=r.dy
if(p>=m.length)return H.h(m,p)
m=m[p]
C.b.by(m.a,m.d,i.a,i.b)
r=r.fr
if(p>=r.length)return H.h(r,p)
r=r[p]
C.b.by(r.a,r.d,i.c,i.d)
r=h.b
m=n.e
r=r.fx
if(p>=r.length)return H.h(r,p)
r=r[p]
m=H.A(m)?1:0
C.b.aY(r.a,r.d,m);++p}}u=h.b.Q
C.b.aY(u.a,u.d,p)
u=h.b
t=h.a
u.ch.cJ(t)
for(u=a.a,o=0;o<q.length;++o){t=q[o]
if(!t.c&&t.d){t.c=!0
u.activeTexture(33984+t.a)
u.bindTexture(3553,t.b)}}t=b.e
if(t instanceof Z.bu){t.O(a)
t.a3(a)
t.ac(a)}else b.e=null
t=h.b
t.toString
u.useProgram(null)
t.x.bp()
for(o=0;o<q.length;++o){t=q[o]
if(t.c){t.c=!1
u.activeTexture(33984+t.a)
u.bindTexture(3553,null)}}},
sfe:function(a){this.c=H.k(a,"$iX",[O.aV],"$aX")}}
O.aV.prototype={
A:function(a){var u
H.e(a,"$iq")
u=this.f
if(u!=null)u.v(a)},
ad:function(){return this.A(null)},
sao:function(a){var u,t=this,s=t.a
if(s!=a){if(s!=null)s.gm().M(0,t.ga7())
u=t.a
t.a=a
if(a!=null)a.gm().h(0,t.ga7())
s=new D.y("texture",u,t.a,[T.d0])
s.b=!0
t.A(s)}},
sdG:function(a,b){var u,t,s=this
if(b==null)b=V.e4()
if(!J.V(s.d,b)){u=s.d
s.d=b
t=new D.y("destination",u,b,[V.bN])
t.b=!0
s.A(t)}}}
T.dw.prototype={
bf:function(a){H.e(a,"$iq")},
eO:function(){return this.bf(null)},
aF:function(a){var u,t=this
if(t.b!=null)return!1
t.b=a
a.c.gcb().h(0,t.gfC())
t.b.c.gaX().h(0,t.gfE())
t.b.c.gbz().h(0,t.gfG())
u=t.b.e
u.gcO(u).h(0,t.gi9())
t.b.e.gaX().h(0,t.gi7())
u=t.b.e
u.gdH(u).h(0,t.gi5())
return!0},
fD:function(a){if(!H.n(H.e(a,"$iq"),"$iaB").x.b.n(0,this.c))return
this.ch=this.Q=!0},
fF:function(a){var u,t=this
H.e(a,"$iq")
if(!t.Q)return
if(t.ch){H.n(a,"$iaB")
u=a.d.H(0,a.y)
u=new V.Q(u.a,u.b)
if(u.w(u)<t.z)return
t.ch=!1}},
fH:function(a){var u=this
H.e(a,"$iq")
if(!u.Q)return
u.Q=!1
if(!u.ch)return
u.dm(a)},
ia:function(a){H.e(a,"$iq")
this.ch=this.Q=!0},
i8:function(a){var u,t=this
H.e(a,"$iq")
if(!t.Q)return
if(t.ch){H.n(a,"$id3")
u=a.d.H(0,a.y)
u=new V.Q(u.a,u.b)
if(u.w(u)<t.z)return
t.ch=!1}},
i6:function(a){var u=this
H.e(a,"$iq")
if(!u.Q)return
u.Q=!1
if(!u.ch)return
u.dm(a)},
dm:function(a){var u,t,s,r,q,p,o,n,m,l,k,j
H.n(a,"$iaB")
u=a.d
t=u.a
s=a.c
r=t/s.c
q=u.b/s.d
s=this.a
u=this.d
p=T.lu(s.a,u,!0,1,1,C.k.aV(r*(u.r-1)),C.k.aV(q*(u.x-1)))
u=p.b
o=C.d.bB(0,u)
n=C.d.bB(0,p.c)
m=(o+n*u)*4
u=p.a
t=u.length
if(m<0||m>=t)return H.h(u,m)
s=u[m]/255
l=m+1
if(l>=t)return H.h(u,l)
l=u[l]/255
k=m+2
if(k>=t)return H.h(u,k)
k=u[k]/255
j=m+3
if(j>=t)return H.h(u,j)
j=u[j]/255
if(s<0)u=0
else u=s>1?1:s
if(l<0)t=0
else t=l>1?1:l
if(k<0)s=0
else s=k>1?1:k
if(j<0)l=0
else l=j>1?1:j
l=new T.dx(new V.Q(r,q),new V.a1(u,t,s,l))
l.b=!0
s=this.x
if(s!=null)s.v(l)}}
T.dx.prototype={
i:function(a){return"ColorPicker: "+this.c.i(0)+" => "+this.d.i(0)}}
T.ca.prototype={}
T.d0.prototype={}
T.iB.prototype={
gm:function(){var u=this.y
return u==null?this.y=D.K():u}}
T.d1.prototype={
gm:function(){var u=this.e
return u==null?this.e=D.K():u},
O:function(a){var u,t=this
if(!t.c&&t.d>=6){t.c=!0
u=a.a
u.activeTexture(33984+t.a)
u.bindTexture(34067,t.b)}},
ac:function(a){var u
if(this.c){this.c=!1
u=a.a
u.activeTexture(33984+this.a)
u.bindTexture(34067,null)}}}
T.iC.prototype={
dY:function(a,b){var u,t=this,s=34067,r=a+"/posx"+b,q=a+"/posy"+b,p=a+"/posz"+b,o=a+"/negx"+b,n=a+"/negy"+b,m=a+"/negz"+b,l=t.a,k=l.createTexture()
l.bindTexture(s,k)
l.texParameteri(s,10242,10497)
l.texParameteri(s,10243,10497)
l.texParameteri(s,10241,9729)
l.texParameteri(s,10240,9729)
l.bindTexture(s,null)
u=new T.d1()
u.a=0
u.b=k
u.c=!1
u.d=0
t.aO(u,k,r,34069,!1,!1)
t.aO(u,k,o,34070,!1,!1)
t.aO(u,k,q,34071,!1,!1)
t.aO(u,k,n,34072,!1,!1)
t.aO(u,k,p,34073,!1,!1)
t.aO(u,k,m,34074,!1,!1)
return u},
dX:function(a){return this.dY(a,".png")},
aO:function(a,b,c,d,e,f){var u,t=document.createElement("img")
t.src=c;++this.d
u=W.m
W.a8(t,"load",H.o(new T.iD(this,t,!1,b,!1,d,a),{func:1,ret:-1,args:[u]}),!1,u)},
hO:function(a,b,c){var u,t,s,r
b=V.dl(b)
u=V.dl(a.width)
t=V.dl(a.height)
u=Math.min(u,b)
t=Math.min(t,b)
if(a.width===u&&a.height===t)return a
else{s=W.fF()
s.width=u
s.height=t
r=H.e(C.h.cG(s,"2d"),"$ibw")
r.imageSmoothingEnabled=!1
r.drawImage(a,0,0,s.width,s.height)
return P.lQ(r.getImageData(0,0,s.width,s.height))}}}
T.iD.prototype={
$1:function(a){var u=this,t=u.a,s=t.hO(u.b,t.c,u.c),r=t.a
r.bindTexture(34067,u.d)
r.pixelStorei(37440,u.e?1:0)
C.b.jg(r,u.f,0,6408,6408,5121,s)
r.bindTexture(34067,null)
r=u.r
if(++r.d>=6){r=r.e
if(r!=null)r.cc()}++t.e},
$S:29}
T.iE.prototype={
fl:function(){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f
for(u=this.c,t=C.d.a1(u,2),s=this.b,r=this.a,q=r.length,p=s*4,--u;t>=0;--t){o=p*t
n=p*(u-t)
for(m=0;m<s;++m){l=4*m
k=o+l
j=n+l
for(i=0;i<4;++i){h=k+i
g=j+i
if(h<0||h>=q)return H.h(r,h)
f=r[h]
if(g<0||g>=q)return H.h(r,g)
r[h]=r[g]
r[g]=f}}}}}
V.fs.prototype={
aW:function(a,b){return!0},
i:function(a){return"all"},
$ibi:1}
V.bi.prototype={}
V.dU.prototype={
aW:function(a,b){var u,t,s
for(u=this.a,t=u.length,s=0;s<u.length;u.length===t||(0,H.v)(u),++s)if(u[s].aW(0,b))return!0
return!1},
i:function(a){var u,t,s,r,q
for(u=this.a,t=u.length,s="",r=0;r<u.length;u.length===t||(0,H.v)(u),++r){q=u[r]
if(s.length!==0)s+=", "
s+=q.i(0)}return s},
saC:function(a){this.a=H.k(a,"$ib",[V.bi],"$ab")},
$ibi:1}
V.bj.prototype={
aW:function(a,b){return!this.eq(0,b)},
i:function(a){return"!["+this.cR(0)+"]"}}
V.i9.prototype={
ew:function(a){var u,t
if(a.a.length<=0)throw H.f(P.w("May not create a SetMatcher with zero characters."))
u=new H.a0([P.r,P.R])
for(t=new H.cI(a,a.gk(a),[H.ad(a,"t",0)]);t.t();)u.l(0,t.d,!0)
this.shR(u)},
aW:function(a,b){return this.a.dF(0,b)},
i:function(a){var u=this.a
return P.kz(new H.dP(u,[H.x(u,0)]))},
shR:function(a){this.a=H.k(a,"$iG",[P.r,P.R],"$aG")},
$ibi:1}
V.cX.prototype={
q:function(a,b){var u,t,s,r
for(u=this.c,t=u.length,s=0;s<t;++s){r=u[s]
if(r.b.b===b)return r}r=new V.d4(this.a.L(0,b))
r.saC(H.c([],[V.bi]))
r.c=!1
C.a.h(this.c,r)
return r},
iJ:function(a){var u,t,s,r
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.v)(u),++s){r=u[s]
if(r.aW(0,a))return r}return},
i:function(a){return this.b},
sib:function(a){this.c=H.k(a,"$ib",[V.d4],"$ab")}}
V.ej.prototype={
i:function(a){var u=H.m0(this.b,"\n","\\n"),t=H.m0(u,"\t","\\t")
return this.a+":"+this.c+':"'+t+'"'}}
V.d2.prototype={
i:function(a){return this.b},
shJ:function(a){var u=P.l
this.c=H.k(a,"$iG",[u,u],"$aG")}}
V.iH.prototype={
L:function(a,b){var u=this.a.j(0,b)
if(u==null){u=new V.cX(this,b)
u.sib(H.c([],[V.d4]))
u.d=null
this.a.l(0,b,u)}return u},
bc:function(a){var u,t=this.b.j(0,a)
if(t==null){t=new V.d2(a)
u=P.l
t.shJ(new H.a0([u,u]))
this.b.l(0,a,t)}return t},
jl:function(a){var u,t,s,r,q,p,o,n,m=H.c([],[V.ej]),l=this.c,k=[P.r],j=H.c([],k)
for(u=a.length,t=null,s=0;!0;){if(s>=u){if(t!=null)C.a.h(m,t)
return m}r=C.e.bg(a,s)
q=l.iJ(r)
if(q==null){if(t==null){C.a.h(j,r)
p=P.kz(j)
throw H.f(P.w("Untokenizable string [state: "+l.b+", index "+s+']: "'+p+'"'))}C.a.h(m,t)
s=t.c+1
j=H.c([],k)
l=this.c
t=null}else{if(!q.c)C.a.h(j,r)
l=q.b
if(l.d!=null){p=P.kz(j)
o=l.d
n=o.c.j(0,p)
t=new V.ej(n==null?o.b:n,p,s)}++s}}},
si1:function(a){this.a=H.k(a,"$iG",[P.l,V.cX],"$aG")},
si4:function(a){this.b=H.k(a,"$iG",[P.l,V.d2],"$aG")}}
V.d4.prototype={
i:function(a){return this.b.b+": "+this.cR(0)}}
X.fA.prototype={
gm:function(){var u=this.fr
return u==null?this.fr=D.K():u},
Z:function(a){var u=this.fr
if(u!=null)u.v(a)},
sap:function(a,b){var u,t=this
if(b<1)b=1
u=t.a
if(u!==b){t.y=null
t.c=t.a=b
u=new D.y("width",u,b,[P.r])
u.b=!0
t.Z(u)}},
sal:function(a,b){var u,t=this
if(b<1)b=1
u=t.b
if(u!==b){t.y=null
t.d=t.b=b
u=new D.y("height",u,b,[P.r])
u.b=!0
t.Z(u)}},
O:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=null,g=3553,f=36161,e=36160
if(i.f){u=a.a
t=u.drawingBufferWidth
s=i.r
if(typeof t!=="number")return t.p()
i.sap(0,C.c.W(t*s))
u=u.drawingBufferHeight
s=i.x
if(typeof u!=="number")return u.p()
i.sal(0,C.c.W(u*s))}if(i.y==null){u=a.a
t=i.ch
s=i.a
r=i.b
q=H.a9(u.getParameter(3379))
p=V.dl(s)
o=V.dl(r)
q=V.dl(q)
p=Math.min(p,q)
o=Math.min(o,q)
n=u.createTexture()
u.bindTexture(g,n)
u.texParameteri(g,10242,33071)
u.texParameteri(g,10243,33071)
u.texParameteri(g,10241,9729)
u.texParameteri(g,10240,9729)
C.b.ec(u,g,0,6408,p,o,0,6408,5121,h)
u.bindTexture(g,h)
m=T.lt(n)
m.e=s
m.f=r
m.r=p
m.x=o
if(!m.d){m.d=!0
s=m.y
if(s!=null)s.cc()}t.b=m.b
t.c=m.c
t.d=m.d
t.e=m.e
t.f=m.f
t.r=m.r
t.x=m.x
t=t.y
if(t!=null)t.cc()
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
a.c=C.c.W(s*i.a)
r=t.d
a.d=C.c.W(r*i.b)
l=t.a
k=i.c
j=C.c.W(l*k)
t=t.b
l=i.d
u.viewport(j,C.c.W(t*l),C.c.W(s*k),C.c.W(r*l))
u.clearDepth(i.db)
t=i.cx
u.clearColor(t.a,t.b,t.c,t.d)
u.clear(16640)},
ac:function(a){a.a.bindFramebuffer(36160,null)}}
X.c_.prototype={$ic4:1}
X.h8.prototype={
gm:function(){var u=this.x
return u==null?this.x=D.K():u},
O:function(a){var u,t,s,r,q,p,o,n=this,m=a.a
m.bindFramebuffer(36160,null)
m.enable(2884)
m.enable(2929)
m.depthFunc(513)
u=m.drawingBufferWidth
t=m.drawingBufferHeight
s=n.r
r=s.a
if(typeof u!=="number")return H.F(u)
q=C.c.W(r*u)
r=s.b
if(typeof t!=="number")return H.F(t)
p=C.c.W(r*t)
r=C.c.W(s.c*u)
a.c=r
s=C.c.W(s.d*t)
a.d=s
m.viewport(q,p,r,s)
m.clearDepth(n.c)
if(n.b){s=n.a
m.clearColor(s.a,s.b,s.c,s.d)
o=16640}else o=256
m.clear(o)},
ac:function(a){}}
X.ha.prototype={
gm:function(){var u=this.b
return u==null?this.b=D.K():u},
O:function(a){var u
a.cy.bu(V.bL())
u=V.bL()
a.db.bu(u)},
ac:function(a){a.cy.aH()
a.db.aH()},
$ic4:1,
$ic_:1}
X.e0.prototype={
gm:function(){var u=this.f
return u==null?this.f=D.K():u},
Z:function(a){var u
H.e(a,"$iq")
u=this.f
if(u!=null)u.v(a)},
eS:function(){return this.Z(null)},
O:function(a){var u,t,s=this,r=a.c,q=a.d,p=s.c,o=s.d,n=s.e,m=n-o,l=1/Math.tan(p*0.5),k=V.b5(-l/(r/q),0,0,0,0,l,0,0,0,0,n/m,-n*o/m,0,0,1,0)
a.cy.bu(k)
r=$.lm
if(r==null){r=V.lo()
q=V.kD()
p=$.lA
r=V.le(r,q,p==null?$.lA=new V.L(0,0,-1):p)
$.lm=r
u=r}else u=r
r=s.b
if(r!=null){t=r.ay(0,a,s)
if(t!=null)u=t.p(0,u)}a.db.bu(u)},
ac:function(a){a.cy.aH()
a.db.aH()},
$ic4:1,
$ic_:1}
X.cZ.prototype={}
V.fD.prototype={
ih:function(a,b,c){var u,t,s,r=this
H.o(c,{func:1,ret:-1})
if(r.b==null)return
u=document
t=u.createElement("button")
s=t.style
s.whiteSpace="nowrap"
C.A.ej(t,b)
s=W.a5
W.a8(t,"click",H.o(new V.fE(c),{func:1,ret:-1,args:[s]}),!1,s)
J.kV(r.b).h(0,t)
J.kV(r.b).h(0,u.createElement("br"))
C.a.h(r.c,t)},
seZ:function(a){this.c=H.k(a,"$ib",[W.bv],"$ab")}}
V.fE.prototype={
$1:function(a){H.e(a,"$ia5")
return this.a.$0()},
$S:4}
V.kg.prototype={
$1:function(a){var u
H.e(a,"$ib7")
u=C.c.ee(this.a.giK(),2)
if(u!=="0.00")P.kS(u+" fps")},
$S:45}
V.id.prototype={
ex:function(a,b){var u,t,s,r,q=document,p=q.body,o=q.createElement("div")
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
r=W.m
W.a8(q,"scroll",H.o(new V.ig(o),{func:1,ret:-1,args:[r]}),!1,r)},
dA:function(a){var u,t,s,r,q,p,o,n,m,l,k
H.k(a,"$ib",[P.l],"$ab")
this.hT()
u=document
t=u.createElement("div")
t.className="textPar"
for(s=this.b.jl(C.a.iO(a)),r=s.length,q=0;q<s.length;s.length===r||(0,H.v)(s),++q){p=s[q]
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
if(H.oh(n,"|",0)){m=n.split("|")
l=u.createElement("a")
l.className="linkPar"
if(1>=m.length)return H.h(m,1)
l.href=H.S(m[1])
l.textContent=H.S(m[0])
t.appendChild(l)}else{k=P.nm(C.R,n,C.t,!1)
l=u.createElement("a")
l.className="linkPar"
l.href="#"+k
l.textContent=n
t.appendChild(l)}break
case"Other":o=u.createElement("div")
o.className="normalPar"
o.textContent=p.b
t.appendChild(o)
break}}this.a.appendChild(t)},
ii:function(a){var u,t,s,r,q,p,o,n="auto"
H.k(a,"$ib",[P.l],"$ab")
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
s=H.e(r.insertCell(-1),"$ibm").style
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
o=H.e(r.insertCell(-1),"$ibm")
s=o.style
s.textAlign="center"
s.verticalAlign="top"
s.marginLeft=n
s.marginRight=n
o.appendChild(p)}},
hT:function(){var u,t,s,r,q="Start",p="Bold",o="Italic",n="ItalicEnd",m="Code",l="LinkHead",k="LinkTail",j="LinkEnd",i="Other"
if(this.b!=null)return
u=new V.iH()
t=P.l
u.si1(new H.a0([t,V.cX]))
u.si4(new H.a0([t,V.d2]))
u.c=null
u.c=u.L(0,q)
t=u.L(0,q).q(0,p)
s=V.aj(new H.a2("*"))
C.a.h(t.a,s)
t.c=!0
t=u.L(0,p).q(0,p)
s=new V.bj()
r=[V.bi]
s.saC(H.c([],r))
C.a.h(t.a,s)
t=V.aj(new H.a2("*"))
C.a.h(s.a,t)
t=u.L(0,p).q(0,"BoldEnd")
s=V.aj(new H.a2("*"))
C.a.h(t.a,s)
t.c=!0
t=u.L(0,q).q(0,o)
s=V.aj(new H.a2("_"))
C.a.h(t.a,s)
t.c=!0
t=u.L(0,o).q(0,o)
s=new V.bj()
s.saC(H.c([],r))
C.a.h(t.a,s)
t=V.aj(new H.a2("_"))
C.a.h(s.a,t)
t=u.L(0,o).q(0,n)
s=V.aj(new H.a2("_"))
C.a.h(t.a,s)
t.c=!0
t=u.L(0,q).q(0,m)
s=V.aj(new H.a2("`"))
C.a.h(t.a,s)
t.c=!0
t=u.L(0,m).q(0,m)
s=new V.bj()
s.saC(H.c([],r))
C.a.h(t.a,s)
t=V.aj(new H.a2("`"))
C.a.h(s.a,t)
t=u.L(0,m).q(0,"CodeEnd")
s=V.aj(new H.a2("`"))
C.a.h(t.a,s)
t.c=!0
t=u.L(0,q).q(0,l)
s=V.aj(new H.a2("["))
C.a.h(t.a,s)
t.c=!0
t=u.L(0,l).q(0,k)
s=V.aj(new H.a2("|"))
C.a.h(t.a,s)
s=u.L(0,l).q(0,j)
t=V.aj(new H.a2("]"))
C.a.h(s.a,t)
s.c=!0
s=u.L(0,l).q(0,l)
t=new V.bj()
t.saC(H.c([],r))
C.a.h(s.a,t)
s=V.aj(new H.a2("|]"))
C.a.h(t.a,s)
s=u.L(0,k).q(0,j)
t=V.aj(new H.a2("]"))
C.a.h(s.a,t)
s.c=!0
s=u.L(0,k).q(0,k)
t=new V.bj()
t.saC(H.c([],r))
C.a.h(s.a,t)
s=V.aj(new H.a2("|]"))
C.a.h(t.a,s)
C.a.h(u.L(0,q).q(0,i).a,new V.fs())
s=u.L(0,i).q(0,i)
t=new V.bj()
t.saC(H.c([],r))
C.a.h(s.a,t)
s=V.aj(new H.a2("*_`["))
C.a.h(t.a,s)
s=u.L(0,"BoldEnd")
s.d=s.a.bc(p)
s=u.L(0,n)
s.d=s.a.bc(o)
s=u.L(0,"CodeEnd")
s.d=s.a.bc(m)
s=u.L(0,j)
s.d=s.a.bc("Link")
s=u.L(0,i)
s.d=s.a.bc(i)
this.b=u}}
V.ig.prototype={
$1:function(a){P.lw(C.j,new V.ie(this.a))},
$S:29}
V.ie.prototype={
$0:function(){var u=C.c.W(document.documentElement.scrollTop),t=this.a.style,s=H.j(-0.01*u)+"px"
t.top=s},
$S:2}
M.kb.prototype={
$1:function(a){var u,t,s
H.e(a,"$iq")
for(u=this.a,t=0;t<u.length;++t){s=u[t]
s.sc9(0.99*s.e)
s.sca(0.99*s.f)}},
$S:5}
M.kc.prototype={
$1:function(a){var u,t,s,r=H.n(H.e(a,"$iq"),"$idx").d.jm()
for(u=this.a,t=0;t<u.length;++t)if(u[t].n(0,r)){u=this.b
if(t>=u.length)return H.h(u,t)
s=u[t]
s.sc9(1.21)
s.sca(1.31)
break}},
$S:5}
M.kd.prototype={
$0:function(){var u,t,s,r,q,p=null,o="image/png",n=T.lu(this.a.f.a,this.b.ch,!0,p,p,p,p),m=W.fF(),l=n.b
m.width=l
u=n.c
m.height=u
t=H.e(C.h.cG(m,"2d"),"$ibw")
s=(t&&C.u).iz(t,l,u)
C.S.ei(J.mn(s),0,n.a)
C.u.j8(t,s,0,0)
n=m.toDataURL(o,100)
n.length
r=H.oj(n,o,"image/octet-stream",0)
q=W.kX()
q.setAttribute("download","backBuffer.png")
q.setAttribute("href",r)
q.click()},
$S:2};(function aliases(){var u=J.a.prototype
u.en=u.i
u=J.dM.prototype
u.ep=u.i
u=P.t.prototype
u.cQ=u.X
u=P.d.prototype
u.eo=u.bA
u=W.N.prototype
u.bD=u.ak
u=W.eX.prototype
u.er=u.aw
u=O.cJ.prototype
u.cS=u.aD
u=O.b4.prototype
u.cT=u.aD
u=V.dU.prototype
u.eq=u.aW
u.cR=u.i})();(function installTearOffs(){var u=hunkHelpers._static_1,t=hunkHelpers._static_0,s=hunkHelpers.installStaticTearOff,r=hunkHelpers.installInstanceTearOff,q=hunkHelpers._instance_2u,p=hunkHelpers._instance_0u,o=hunkHelpers._instance_1u,n=hunkHelpers._instance_0i
u(P,"nQ","nc",9)
u(P,"nR","nd",9)
u(P,"nS","ne",9)
t(P,"lO","nO",3)
s(W,"o2",4,null,["$4"],["ng"],22,0)
s(W,"o3",4,null,["$4"],["nh"],22,0)
var m
r(m=E.an.prototype,"ge2",0,0,null,["$1","$0"],["e3","iY"],0,0)
r(m,"ge4",0,0,null,["$1","$0"],["e5","iZ"],0,0)
r(m,"ge0",0,0,null,["$1","$0"],["e1","iX"],0,0)
r(m,"gdZ",0,0,null,["$1","$0"],["e_","iU"],0,0)
q(m,"giS","iT",7)
q(m,"giV","iW",7)
r(m=E.ei.prototype,"gcU",0,0,null,["$1","$0"],["cW","cV"],0,0)
p(m,"gjc","e8",3)
o(m=X.en.prototype,"gh5","h6",11)
o(m,"gfQ","fR",11)
o(m,"gfW","fX",4)
o(m,"gh9","ha",20)
o(m,"gh7","h8",20)
o(m,"ghd","he",4)
o(m,"ghh","hi",4)
o(m,"gh_","h0",4)
o(m,"ghf","hg",4)
o(m,"gfY","fZ",4)
o(m,"ghj","hk",37)
o(m,"ghl","hm",11)
o(m,"ghB","hC",12)
o(m,"ghx","hy",12)
o(m,"ghz","hA",12)
r(D.bA.prototype,"geB",0,0,null,["$1","$0"],["aA","eC"],0,0)
r(m=D.dO.prototype,"gdi",0,0,null,["$1","$0"],["dj","hb"],0,0)
o(m,"ghn","ho",38)
q(m,"gfK","fL",13)
q(m,"ghr","hs",13)
n(V.Q.prototype,"gk","cn",23)
n(V.L.prototype,"gk","cn",23)
r(m=U.cF.prototype,"gaP",0,0,null,["$1","$0"],["E","a9"],0,0)
q(m,"geD","eE",24)
q(m,"ghp","hq",24)
r(m=U.eo.prototype,"gaP",0,0,null,["$1","$0"],["E","a9"],0,0)
o(m,"gbE","bF",1)
o(m,"gbG","bH",1)
o(m,"gbI","bJ",1)
r(m=U.ep.prototype,"gaP",0,0,null,["$1","$0"],["E","a9"],0,0)
o(m,"gbE","bF",1)
o(m,"gbG","bH",1)
o(m,"gbI","bJ",1)
o(m,"gfv","fw",1)
o(m,"gfz","fA",1)
o(m,"geJ","eK",1)
o(m,"geH","eI",1)
o(m,"geF","eG",1)
o(U.eq.prototype,"gfI","fJ",1)
r(m=M.dy.prototype,"gY",0,0,null,["$1","$0"],["U","b0"],0,0)
q(m,"ght","hu",26)
q(m,"ghv","hw",26)
r(M.dA.prototype,"gY",0,0,null,["$1","$0"],["U","b0"],0,0)
r(m=M.dF.prototype,"gY",0,0,null,["$1","$0"],["U","b0"],0,0)
q(m,"gfS","fT",7)
q(m,"gfU","fV",7)
r(m=O.dV.prototype,"ga7",0,0,null,["$1","$0"],["A","ad"],0,0)
r(m,"ghM",0,0,null,["$1","$0"],["dq","hN"],0,0)
q(m,"gfM","fN",27)
q(m,"gfO","fP",27)
r(O.cJ.prototype,"ga7",0,0,null,["$1","$0"],["A","ad"],0,0)
r(O.e8.prototype,"ga7",0,0,null,["$1","$0"],["A","ad"],0,0)
r(m=O.eg.prototype,"ga7",0,0,null,["$1","$0"],["A","ad"],0,0)
q(m,"gh1","h2",28)
q(m,"gh3","h4",28)
r(O.aV.prototype,"ga7",0,0,null,["$1","$0"],["A","ad"],0,0)
r(m=T.dw.prototype,"gcX",0,0,null,["$1","$0"],["bf","eO"],0,0)
o(m,"gfC","fD",1)
o(m,"gfE","fF",1)
o(m,"gfG","fH",1)
o(m,"gi9","ia",1)
o(m,"gi7","i8",1)
o(m,"gi5","i6",1)
r(X.e0.prototype,"geR",0,0,null,["$1","$0"],["Z","eS"],0,0)})();(function inheritance(){var u=hunkHelpers.mixin,t=hunkHelpers.inherit,s=hunkHelpers.inheritMany
t(P.P,null)
s(P.P,[H.ku,J.a,J.al,P.eK,P.d,H.cI,P.aA,H.c1,H.cf,H.iM,P.bC,H.cw,H.f1,P.af,H.hh,H.hi,H.hd,H.iu,H.kH,P.f7,P.bd,P.aH,P.et,P.ip,P.cY,P.iq,P.b7,P.am,P.jV,P.jJ,P.ch,P.eJ,P.t,P.cx,P.jT,P.R,P.az,P.aa,P.bB,P.hV,P.ed,P.eB,P.h7,P.bE,P.b,P.G,P.O,P.dT,P.as,P.l,P.bO,W.fM,W.bS,W.C,W.dZ,W.eX,W.jO,W.dH,W.aw,W.jI,W.fd,P.fc,P.jD,O.X,O.cK,E.fB,E.an,E.i1,E.ei,Z.es,Z.cg,Z.bu,Z.bG,Z.bn,D.fH,D.bD,D.q,X.dv,X.dN,X.hf,X.hk,X.ar,X.hJ,X.iI,X.en,D.bA,D.ae,D.e1,D.ec,V.W,V.a1,V.fZ,V.dX,V.a4,V.a6,V.ao,V.bl,V.bN,V.Q,V.L,U.eo,U.ep,U.eq,M.dA,M.dF,M.ax,A.dr,A.fv,A.ah,A.aK,A.aP,A.aT,A.hs,A.cb,A.cc,A.cd,A.by,A.ek,A.iT,F.a3,F.bh,F.bM,F.e7,F.ia,F.ib,F.ic,F.aF,F.j4,F.j5,F.j8,F.j9,O.bP,O.cJ,O.ht,O.aV,T.dw,T.iC,T.iE,V.fs,V.bi,V.dU,V.i9,V.cX,V.ej,V.d2,V.iH,X.cZ,X.c_,X.ha,X.e0,V.fD,V.id])
s(J.a,[J.hc,J.dL,J.dM,J.b1,J.cH,J.bJ,H.cN,W.i,W.fr,W.ds,W.bw,W.b_,W.b0,W.U,W.ev,W.fQ,W.fR,W.ex,W.dE,W.ez,W.fT,W.m,W.eC,W.aM,W.h9,W.eF,W.bF,W.dR,W.hD,W.eL,W.eM,W.aN,W.eN,W.eQ,W.aO,W.eU,W.eW,W.aR,W.eY,W.aS,W.f2,W.aD,W.f5,W.iG,W.aW,W.f8,W.iK,W.iY,W.fe,W.fg,W.fi,W.fk,W.fm,P.b3,P.eH,P.b6,P.eS,P.hZ,P.f3,P.b8,P.fa,P.fw,P.eu,P.dt,P.dI,P.e2,P.e5,P.c8,P.e6,P.ef,P.el,P.f_])
s(J.dM,[J.hW,J.ce,J.bK])
t(J.kt,J.b1)
s(J.cH,[J.dK,J.dJ])
t(P.hj,P.eK)
s(P.hj,[H.em,W.jk,W.ap,P.h3])
t(H.a2,H.em)
s(P.d,[H.fW,H.hn,H.d6])
s(H.fW,[H.c3,H.dP])
s(H.c3,[H.iv,H.hp])
s(P.aA,[H.ho,H.jd])
s(P.bC,[H.hS,H.he,H.iW,H.iO,H.fG,H.i7,P.fu,P.e_,P.aJ,P.iX,P.iV,P.c9,P.fK,P.fP])
s(H.cw,[H.ki,H.iy,H.k7,H.k8,H.k9,P.jg,P.jf,P.jh,P.ji,P.jS,P.jR,P.jq,P.ju,P.jr,P.js,P.jt,P.jx,P.jy,P.jw,P.jv,P.ir,P.is,P.k0,P.jG,P.jF,P.jH,P.hm,P.fU,P.fV,W.fX,W.hF,W.hH,W.i6,W.io,W.jp,W.hR,W.hQ,W.jK,W.jL,W.jQ,W.jU,P.k3,P.h4,P.h5,P.fy,E.i2,E.i3,E.i4,E.iF,D.h_,D.h0,F.jW,F.jb,F.ja,F.j6,F.j7,O.hw,O.hx,O.hy,O.hz,O.hA,O.hB,T.iD,V.fE,V.kg,V.ig,V.ie,M.kb,M.kc,M.kd])
s(H.iy,[H.il,H.cu])
t(H.je,P.fu)
t(P.hl,P.af)
s(P.hl,[H.a0,W.jj])
t(H.dY,H.cN)
s(H.dY,[H.da,H.dc])
t(H.db,H.da)
t(H.c5,H.db)
t(H.dd,H.dc)
t(H.cM,H.dd)
s(H.cM,[H.hK,H.hL,H.hM,H.hN,H.hO,H.cO,H.hP])
t(P.jE,P.jV)
t(P.jC,P.jJ)
t(P.dz,P.iq)
t(P.fY,P.cx)
t(P.iZ,P.fY)
t(P.j_,P.dz)
s(P.aa,[P.B,P.r])
s(P.aJ,[P.c7,P.hb])
s(W.i,[W.D,W.h2,W.aQ,W.de,W.aU,W.aE,W.dg,W.jc,W.d7,P.fz,P.bZ])
s(W.D,[W.N,W.bx,W.d8])
s(W.N,[W.u,P.p])
s(W.u,[W.dq,W.ft,W.ct,W.bt,W.bv,W.c0,W.dC,W.h6,W.cG,W.i8,W.bm,W.ee,W.iw,W.ix,W.d_])
s(W.b_,[W.cz,W.fN,W.fO])
t(W.fL,W.b0)
t(W.cA,W.ev)
t(W.ey,W.ex)
t(W.dD,W.ey)
t(W.eA,W.ez)
t(W.fS,W.eA)
t(W.aL,W.ds)
t(W.eD,W.eC)
t(W.h1,W.eD)
t(W.eG,W.eF)
t(W.c2,W.eG)
t(W.bQ,W.m)
s(W.bQ,[W.b2,W.a5,W.aX])
t(W.hE,W.eL)
t(W.hG,W.eM)
t(W.eO,W.eN)
t(W.hI,W.eO)
t(W.eR,W.eQ)
t(W.cP,W.eR)
t(W.eV,W.eU)
t(W.hX,W.eV)
t(W.i5,W.eW)
t(W.df,W.de)
t(W.ii,W.df)
t(W.eZ,W.eY)
t(W.ij,W.eZ)
t(W.im,W.f2)
t(W.f6,W.f5)
t(W.iz,W.f6)
t(W.dh,W.dg)
t(W.iA,W.dh)
t(W.f9,W.f8)
t(W.iJ,W.f9)
t(W.bc,W.a5)
t(W.ff,W.fe)
t(W.jl,W.ff)
t(W.ew,W.dE)
t(W.fh,W.fg)
t(W.jz,W.fh)
t(W.fj,W.fi)
t(W.eP,W.fj)
t(W.fl,W.fk)
t(W.jM,W.fl)
t(W.fn,W.fm)
t(W.jN,W.fn)
t(W.jm,W.jj)
t(W.jn,P.ip)
t(W.kF,W.jn)
t(W.jo,P.cY)
t(W.jP,W.eX)
t(P.ai,P.jD)
t(P.eI,P.eH)
t(P.hg,P.eI)
t(P.eT,P.eS)
t(P.hT,P.eT)
t(P.cV,P.p)
t(P.f4,P.f3)
t(P.it,P.f4)
t(P.fb,P.fa)
t(P.iL,P.fb)
t(P.fx,P.eu)
t(P.hU,P.bZ)
t(P.f0,P.f_)
t(P.ik,P.f0)
s(E.fB,[Z.du,A.cW,T.ca])
s(D.q,[D.bH,D.bI,D.y,X.hY,T.dx])
s(X.hY,[X.dS,X.aB,X.cL,X.d3])
s(O.X,[D.dO,U.cF,M.dy])
s(D.fH,[U.fJ,U.ab])
s(U.ab,[U.cy,U.cU])
s(A.cW,[A.dW,A.e9,A.ea,A.eh])
s(A.ek,[A.ak,A.iQ,A.iR,A.iS,A.iP,A.a7,A.ay,A.Z,A.bR,A.iU,A.d5,A.ac,A.bb,A.ag])
s(O.bP,[O.dV,O.e8,O.ih,O.eg])
s(O.cJ,[O.hq,O.hr,O.b4])
s(O.b4,[O.hu,O.hv])
s(T.ca,[T.d0,T.d1])
t(T.iB,T.d0)
s(V.dU,[V.bj,V.d4])
s(X.cZ,[X.fA,X.h8])
u(H.em,H.cf)
u(H.da,P.t)
u(H.db,H.c1)
u(H.dc,P.t)
u(H.dd,H.c1)
u(P.eK,P.t)
u(W.ev,W.fM)
u(W.ex,P.t)
u(W.ey,W.C)
u(W.ez,P.t)
u(W.eA,W.C)
u(W.eC,P.t)
u(W.eD,W.C)
u(W.eF,P.t)
u(W.eG,W.C)
u(W.eL,P.af)
u(W.eM,P.af)
u(W.eN,P.t)
u(W.eO,W.C)
u(W.eQ,P.t)
u(W.eR,W.C)
u(W.eU,P.t)
u(W.eV,W.C)
u(W.eW,P.af)
u(W.de,P.t)
u(W.df,W.C)
u(W.eY,P.t)
u(W.eZ,W.C)
u(W.f2,P.af)
u(W.f5,P.t)
u(W.f6,W.C)
u(W.dg,P.t)
u(W.dh,W.C)
u(W.f8,P.t)
u(W.f9,W.C)
u(W.fe,P.t)
u(W.ff,W.C)
u(W.fg,P.t)
u(W.fh,W.C)
u(W.fi,P.t)
u(W.fj,W.C)
u(W.fk,P.t)
u(W.fl,W.C)
u(W.fm,P.t)
u(W.fn,W.C)
u(P.eH,P.t)
u(P.eI,W.C)
u(P.eS,P.t)
u(P.eT,W.C)
u(P.f3,P.t)
u(P.f4,W.C)
u(P.fa,P.t)
u(P.fb,W.C)
u(P.eu,P.af)
u(P.f_,P.t)
u(P.f0,W.C)})()
var v={mangledGlobalNames:{r:"int",B:"double",aa:"num",l:"String",R:"bool",O:"Null",b:"List"},mangledNames:{},getTypeFromName:getGlobalFromName,metadata:[],types:[{func:1,ret:-1,opt:[D.q]},{func:1,ret:-1,args:[D.q]},{func:1,ret:P.O},{func:1,ret:-1},{func:1,ret:-1,args:[W.a5]},{func:1,ret:P.O,args:[D.q]},{func:1,ret:-1,args:[P.l,,]},{func:1,ret:-1,args:[P.r,[P.d,E.an]]},{func:1,ret:P.O,args:[F.a3]},{func:1,ret:-1,args:[{func:1,ret:-1}]},{func:1,ret:-1,args:[P.r,P.r]},{func:1,ret:-1,args:[W.m]},{func:1,ret:-1,args:[W.aX]},{func:1,ret:-1,args:[P.r,[P.d,D.ae]]},{func:1,args:[,]},{func:1,ret:P.R,args:[P.l]},{func:1,ret:P.R,args:[W.aw]},{func:1,ret:P.O,args:[{func:1,ret:-1,args:[D.q]}]},{func:1,ret:P.O,args:[,]},{func:1,ret:P.O,args:[,,]},{func:1,ret:-1,args:[W.b2]},{func:1,ret:P.l,args:[P.r]},{func:1,ret:P.R,args:[W.N,P.l,P.l,W.bS]},{func:1,ret:P.B},{func:1,ret:-1,args:[P.r,[P.d,U.ab]]},{func:1,ret:P.R,args:[W.D]},{func:1,ret:-1,args:[P.r,[P.d,M.ax]]},{func:1,ret:-1,args:[P.r,[P.d,V.a4]]},{func:1,ret:-1,args:[P.r,[P.d,O.aV]]},{func:1,ret:P.O,args:[W.m]},{func:1,args:[W.m]},{func:1,ret:P.l,args:[P.l]},{func:1,ret:-1,args:[W.D,W.D]},{func:1,ret:W.N,args:[W.D]},{func:1,args:[,P.l]},{func:1,args:[P.l]},{func:1,ret:P.O,args:[,],opt:[P.as]},{func:1,ret:-1,args:[W.bc]},{func:1,ret:P.R,args:[[P.d,D.ae]]},{func:1,ret:P.O,args:[F.aF,P.B,P.B]},{func:1,ret:P.O,args:[{func:1,ret:-1}]},{func:1,ret:[P.aH,,],args:[,]},{func:1,ret:P.r,args:[A.aK,A.aK]},{func:1,ret:P.r,args:[A.aP,A.aP]},{func:1,ret:P.r,args:[A.aT,A.aT]},{func:1,ret:P.O,args:[P.b7]},{func:1,ret:-1,args:[P.l,P.l]},{func:1,ret:P.O,args:[P.aa]}],interceptorsByTag:null,leafTags:null};(function constants(){var u=hunkHelpers.makeConstList
C.p=W.bt.prototype
C.A=W.bv.prototype
C.h=W.c0.prototype
C.u=W.bw.prototype
C.M=J.a.prototype
C.a=J.b1.prototype
C.k=J.dJ.prototype
C.d=J.dK.prototype
C.l=J.dL.prototype
C.c=J.cH.prototype
C.e=J.bJ.prototype
C.N=J.bK.prototype
C.S=H.cO.prototype
C.T=W.cP.prototype
C.w=J.hW.prototype
C.b=P.c8.prototype
C.x=W.ee.prototype
C.o=J.ce.prototype
C.y=W.bc.prototype
C.z=W.d7.prototype
C.q=function getTagFallback(o) {
  var s = Object.prototype.toString.call(o);
  return s.substring(8, s.length - 1);
}
C.B=function() {
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
C.G=function(getTagFallback) {
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
C.C=function(hooks) {
  if (typeof dartExperimentalFixupGetTag != "function") return hooks;
  hooks.getTag = dartExperimentalFixupGetTag(hooks.getTag);
}
C.D=function(hooks) {
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
C.F=function(hooks) {
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
C.E=function(hooks) {
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
C.r=function(hooks) { return hooks; }

C.H=new P.hV()
C.t=new P.iZ()
C.I=new P.j_()
C.f=new P.jE()
C.v=new A.by(0,"ColorBlendType.Overwrite")
C.J=new A.by(1,"ColorBlendType.Additive")
C.K=new A.by(2,"ColorBlendType.Average")
C.i=new A.by(3,"ColorBlendType.AlphaBlend")
C.j=new P.bB(0)
C.L=new P.bB(5e6)
C.O=H.c(u(["*::class","*::dir","*::draggable","*::hidden","*::id","*::inert","*::itemprop","*::itemref","*::itemscope","*::lang","*::spellcheck","*::title","*::translate","A::accesskey","A::coords","A::hreflang","A::name","A::shape","A::tabindex","A::target","A::type","AREA::accesskey","AREA::alt","AREA::coords","AREA::nohref","AREA::shape","AREA::tabindex","AREA::target","AUDIO::controls","AUDIO::loop","AUDIO::mediagroup","AUDIO::muted","AUDIO::preload","BDO::dir","BODY::alink","BODY::bgcolor","BODY::link","BODY::text","BODY::vlink","BR::clear","BUTTON::accesskey","BUTTON::disabled","BUTTON::name","BUTTON::tabindex","BUTTON::type","BUTTON::value","CANVAS::height","CANVAS::width","CAPTION::align","COL::align","COL::char","COL::charoff","COL::span","COL::valign","COL::width","COLGROUP::align","COLGROUP::char","COLGROUP::charoff","COLGROUP::span","COLGROUP::valign","COLGROUP::width","COMMAND::checked","COMMAND::command","COMMAND::disabled","COMMAND::label","COMMAND::radiogroup","COMMAND::type","DATA::value","DEL::datetime","DETAILS::open","DIR::compact","DIV::align","DL::compact","FIELDSET::disabled","FONT::color","FONT::face","FONT::size","FORM::accept","FORM::autocomplete","FORM::enctype","FORM::method","FORM::name","FORM::novalidate","FORM::target","FRAME::name","H1::align","H2::align","H3::align","H4::align","H5::align","H6::align","HR::align","HR::noshade","HR::size","HR::width","HTML::version","IFRAME::align","IFRAME::frameborder","IFRAME::height","IFRAME::marginheight","IFRAME::marginwidth","IFRAME::width","IMG::align","IMG::alt","IMG::border","IMG::height","IMG::hspace","IMG::ismap","IMG::name","IMG::usemap","IMG::vspace","IMG::width","INPUT::accept","INPUT::accesskey","INPUT::align","INPUT::alt","INPUT::autocomplete","INPUT::autofocus","INPUT::checked","INPUT::disabled","INPUT::inputmode","INPUT::ismap","INPUT::list","INPUT::max","INPUT::maxlength","INPUT::min","INPUT::multiple","INPUT::name","INPUT::placeholder","INPUT::readonly","INPUT::required","INPUT::size","INPUT::step","INPUT::tabindex","INPUT::type","INPUT::usemap","INPUT::value","INS::datetime","KEYGEN::disabled","KEYGEN::keytype","KEYGEN::name","LABEL::accesskey","LABEL::for","LEGEND::accesskey","LEGEND::align","LI::type","LI::value","LINK::sizes","MAP::name","MENU::compact","MENU::label","MENU::type","METER::high","METER::low","METER::max","METER::min","METER::value","OBJECT::typemustmatch","OL::compact","OL::reversed","OL::start","OL::type","OPTGROUP::disabled","OPTGROUP::label","OPTION::disabled","OPTION::label","OPTION::selected","OPTION::value","OUTPUT::for","OUTPUT::name","P::align","PRE::width","PROGRESS::max","PROGRESS::min","PROGRESS::value","SELECT::autocomplete","SELECT::disabled","SELECT::multiple","SELECT::name","SELECT::required","SELECT::size","SELECT::tabindex","SOURCE::type","TABLE::align","TABLE::bgcolor","TABLE::border","TABLE::cellpadding","TABLE::cellspacing","TABLE::frame","TABLE::rules","TABLE::summary","TABLE::width","TBODY::align","TBODY::char","TBODY::charoff","TBODY::valign","TD::abbr","TD::align","TD::axis","TD::bgcolor","TD::char","TD::charoff","TD::colspan","TD::headers","TD::height","TD::nowrap","TD::rowspan","TD::scope","TD::valign","TD::width","TEXTAREA::accesskey","TEXTAREA::autocomplete","TEXTAREA::cols","TEXTAREA::disabled","TEXTAREA::inputmode","TEXTAREA::name","TEXTAREA::placeholder","TEXTAREA::readonly","TEXTAREA::required","TEXTAREA::rows","TEXTAREA::tabindex","TEXTAREA::wrap","TFOOT::align","TFOOT::char","TFOOT::charoff","TFOOT::valign","TH::abbr","TH::align","TH::axis","TH::bgcolor","TH::char","TH::charoff","TH::colspan","TH::headers","TH::height","TH::nowrap","TH::rowspan","TH::scope","TH::valign","TH::width","THEAD::align","THEAD::char","THEAD::charoff","THEAD::valign","TR::align","TR::bgcolor","TR::char","TR::charoff","TR::valign","TRACK::default","TRACK::kind","TRACK::label","TRACK::srclang","UL::compact","UL::type","VIDEO::controls","VIDEO::height","VIDEO::loop","VIDEO::mediagroup","VIDEO::muted","VIDEO::preload","VIDEO::width"]),[P.l])
C.P=H.c(u(["HEAD","AREA","BASE","BASEFONT","BR","COL","COLGROUP","EMBED","FRAME","FRAMESET","HR","IMAGE","IMG","INPUT","ISINDEX","LINK","META","PARAM","SOURCE","STYLE","TITLE","WBR"]),[P.l])
C.Q=H.c(u([]),[P.l])
C.R=H.c(u([0,0,65498,45055,65535,34815,65534,18431]),[P.r])
C.m=H.c(u(["bind","if","ref","repeat","syntax"]),[P.l])
C.n=H.c(u(["A::href","AREA::href","BLOCKQUOTE::cite","BODY::background","COMMAND::icon","DEL::cite","FORM::action","IMG::src","INPUT::src","INS::cite","Q::cite","VIDEO::poster"]),[P.l])})();(function staticFields(){$.aZ=0
$.cv=null
$.kY=null
$.kI=!1
$.lT=null
$.lM=null
$.lZ=null
$.k4=null
$.ka=null
$.kQ=null
$.cj=null
$.dj=null
$.dk=null
$.kJ=!1
$.a_=C.f
$.at=[]
$.bg=null
$.kp=null
$.l4=null
$.l3=null
$.eE=P.la(P.l,P.bE)
$.hC=null
$.ln=null
$.cQ=null
$.cT=null
$.lz=null
$.lB=null
$.j0=null
$.j1=null
$.j2=null
$.lA=null
$.lm=null})();(function lazyInitializers(){var u=hunkHelpers.lazy
u($,"os","m3",function(){return H.lS("_$dart_dartClosure")})
u($,"ot","kT",function(){return H.lS("_$dart_js")})
u($,"ox","m4",function(){return H.b9(H.iN({
toString:function(){return"$receiver$"}}))})
u($,"oy","m5",function(){return H.b9(H.iN({$method$:null,
toString:function(){return"$receiver$"}}))})
u($,"oz","m6",function(){return H.b9(H.iN(null))})
u($,"oA","m7",function(){return H.b9(function(){var $argumentsExpr$='$arguments$'
try{null.$method$($argumentsExpr$)}catch(t){return t.message}}())})
u($,"oD","ma",function(){return H.b9(H.iN(void 0))})
u($,"oE","mb",function(){return H.b9(function(){var $argumentsExpr$='$arguments$'
try{(void 0).$method$($argumentsExpr$)}catch(t){return t.message}}())})
u($,"oC","m9",function(){return H.b9(H.ly(null))})
u($,"oB","m8",function(){return H.b9(function(){try{null.$method$}catch(t){return t.message}}())})
u($,"oG","md",function(){return H.b9(H.ly(void 0))})
u($,"oF","mc",function(){return H.b9(function(){try{(void 0).$method$}catch(t){return t.message}}())})
u($,"oY","kU",function(){return P.nb()})
u($,"p_","mi",function(){return P.mY("^[\\-\\.0-9A-Z_a-z~]*$")})
u($,"oZ","mh",function(){return P.lb(["A","ABBR","ACRONYM","ADDRESS","AREA","ARTICLE","ASIDE","AUDIO","B","BDI","BDO","BIG","BLOCKQUOTE","BR","BUTTON","CANVAS","CAPTION","CENTER","CITE","CODE","COL","COLGROUP","COMMAND","DATA","DATALIST","DD","DEL","DETAILS","DFN","DIR","DIV","DL","DT","EM","FIELDSET","FIGCAPTION","FIGURE","FONT","FOOTER","FORM","H1","H2","H3","H4","H5","H6","HEADER","HGROUP","HR","I","IFRAME","IMG","INPUT","INS","KBD","LABEL","LEGEND","LI","MAP","MARK","MENU","METER","NAV","NOBR","OL","OPTGROUP","OPTION","OUTPUT","P","PRE","PROGRESS","Q","S","SAMP","SECTION","SELECT","SMALL","SOURCE","SPAN","STRIKE","STRONG","SUB","SUMMARY","SUP","TABLE","TBODY","TD","TEXTAREA","TFOOT","TH","THEAD","TIME","TR","TRACK","TT","U","UL","VAR","VIDEO","WBR"],P.l)})
u($,"oR","mg",function(){return Z.aG(0)})
u($,"oL","me",function(){return Z.aG(511)})
u($,"oT","aq",function(){return Z.aG(1)})
u($,"oS","br",function(){return Z.aG(2)})
u($,"oN","bq",function(){return Z.aG(4)})
u($,"oU","bW",function(){return Z.aG(8)})
u($,"oV","bs",function(){return Z.aG(16)})
u($,"oO","dm",function(){return Z.aG(32)})
u($,"oP","dn",function(){return Z.aG(64)})
u($,"oQ","mf",function(){return Z.aG(96)})
u($,"oW","cs",function(){return Z.aG(128)})
u($,"oM","bp",function(){return Z.aG(256)})
u($,"or","m2",function(){return new V.fZ(1e-9)})
u($,"oq","I",function(){return $.m2()})})();(function nativeSupport(){!function(){var u=function(a){var o={}
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
hunkHelpers.setOrUpdateInterceptorsByTag({ArrayBuffer:J.a,AnimationEffectReadOnly:J.a,AnimationEffectTiming:J.a,AnimationEffectTimingReadOnly:J.a,AnimationTimeline:J.a,AnimationWorkletGlobalScope:J.a,AuthenticatorAssertionResponse:J.a,AuthenticatorAttestationResponse:J.a,AuthenticatorResponse:J.a,BackgroundFetchFetch:J.a,BackgroundFetchManager:J.a,BackgroundFetchSettledFetch:J.a,BarProp:J.a,BarcodeDetector:J.a,BluetoothRemoteGATTDescriptor:J.a,Body:J.a,BudgetState:J.a,CacheStorage:J.a,CanvasGradient:J.a,CanvasPattern:J.a,Client:J.a,Clients:J.a,CookieStore:J.a,Coordinates:J.a,Credential:J.a,CredentialUserData:J.a,CredentialsContainer:J.a,Crypto:J.a,CryptoKey:J.a,CSS:J.a,CSSVariableReferenceValue:J.a,CustomElementRegistry:J.a,DataTransfer:J.a,DataTransferItem:J.a,DeprecatedStorageInfo:J.a,DeprecatedStorageQuota:J.a,DeprecationReport:J.a,DetectedBarcode:J.a,DetectedFace:J.a,DetectedText:J.a,DeviceAcceleration:J.a,DeviceRotationRate:J.a,DirectoryEntry:J.a,DirectoryReader:J.a,DocumentOrShadowRoot:J.a,DocumentTimeline:J.a,DOMError:J.a,DOMImplementation:J.a,Iterator:J.a,DOMMatrix:J.a,DOMMatrixReadOnly:J.a,DOMParser:J.a,DOMPoint:J.a,DOMPointReadOnly:J.a,DOMQuad:J.a,DOMStringMap:J.a,Entry:J.a,External:J.a,FaceDetector:J.a,FederatedCredential:J.a,FileEntry:J.a,DOMFileSystem:J.a,FontFace:J.a,FontFaceSource:J.a,FormData:J.a,GamepadButton:J.a,GamepadPose:J.a,Geolocation:J.a,Position:J.a,Headers:J.a,HTMLHyperlinkElementUtils:J.a,IdleDeadline:J.a,ImageBitmap:J.a,ImageBitmapRenderingContext:J.a,ImageCapture:J.a,InputDeviceCapabilities:J.a,IntersectionObserver:J.a,IntersectionObserverEntry:J.a,InterventionReport:J.a,KeyframeEffect:J.a,KeyframeEffectReadOnly:J.a,MediaCapabilities:J.a,MediaCapabilitiesInfo:J.a,MediaDeviceInfo:J.a,MediaError:J.a,MediaKeyStatusMap:J.a,MediaKeySystemAccess:J.a,MediaKeys:J.a,MediaKeysPolicy:J.a,MediaMetadata:J.a,MediaSession:J.a,MediaSettingsRange:J.a,MemoryInfo:J.a,MessageChannel:J.a,Metadata:J.a,MutationObserver:J.a,WebKitMutationObserver:J.a,MutationRecord:J.a,NavigationPreloadManager:J.a,Navigator:J.a,NavigatorAutomationInformation:J.a,NavigatorConcurrentHardware:J.a,NavigatorCookies:J.a,NavigatorUserMediaError:J.a,NodeFilter:J.a,NodeIterator:J.a,NonDocumentTypeChildNode:J.a,NonElementParentNode:J.a,NoncedElement:J.a,OffscreenCanvasRenderingContext2D:J.a,OverconstrainedError:J.a,PaintRenderingContext2D:J.a,PaintSize:J.a,PaintWorkletGlobalScope:J.a,PasswordCredential:J.a,Path2D:J.a,PaymentAddress:J.a,PaymentInstruments:J.a,PaymentManager:J.a,PaymentResponse:J.a,PerformanceEntry:J.a,PerformanceLongTaskTiming:J.a,PerformanceMark:J.a,PerformanceMeasure:J.a,PerformanceNavigation:J.a,PerformanceNavigationTiming:J.a,PerformanceObserver:J.a,PerformanceObserverEntryList:J.a,PerformancePaintTiming:J.a,PerformanceResourceTiming:J.a,PerformanceServerTiming:J.a,PerformanceTiming:J.a,Permissions:J.a,PhotoCapabilities:J.a,PositionError:J.a,Presentation:J.a,PresentationReceiver:J.a,PublicKeyCredential:J.a,PushManager:J.a,PushMessageData:J.a,PushSubscription:J.a,PushSubscriptionOptions:J.a,Range:J.a,RelatedApplication:J.a,ReportBody:J.a,ReportingObserver:J.a,ResizeObserver:J.a,ResizeObserverEntry:J.a,RTCCertificate:J.a,RTCIceCandidate:J.a,mozRTCIceCandidate:J.a,RTCLegacyStatsReport:J.a,RTCRtpContributingSource:J.a,RTCRtpReceiver:J.a,RTCRtpSender:J.a,RTCSessionDescription:J.a,mozRTCSessionDescription:J.a,RTCStatsResponse:J.a,Screen:J.a,ScrollState:J.a,ScrollTimeline:J.a,Selection:J.a,SharedArrayBuffer:J.a,SpeechRecognitionAlternative:J.a,SpeechSynthesisVoice:J.a,StaticRange:J.a,StorageManager:J.a,StyleMedia:J.a,StylePropertyMap:J.a,StylePropertyMapReadonly:J.a,SyncManager:J.a,TaskAttributionTiming:J.a,TextDetector:J.a,TextMetrics:J.a,TrackDefault:J.a,TreeWalker:J.a,TrustedHTML:J.a,TrustedScriptURL:J.a,TrustedURL:J.a,UnderlyingSourceBase:J.a,URLSearchParams:J.a,VRCoordinateSystem:J.a,VRDisplayCapabilities:J.a,VREyeParameters:J.a,VRFrameData:J.a,VRFrameOfReference:J.a,VRPose:J.a,VRStageBounds:J.a,VRStageBoundsPoint:J.a,VRStageParameters:J.a,ValidityState:J.a,VideoPlaybackQuality:J.a,VideoTrack:J.a,VTTRegion:J.a,WindowClient:J.a,WorkletAnimation:J.a,WorkletGlobalScope:J.a,XPathEvaluator:J.a,XPathExpression:J.a,XPathNSResolver:J.a,XPathResult:J.a,XMLSerializer:J.a,XSLTProcessor:J.a,Bluetooth:J.a,BluetoothCharacteristicProperties:J.a,BluetoothRemoteGATTServer:J.a,BluetoothRemoteGATTService:J.a,BluetoothUUID:J.a,BudgetService:J.a,Cache:J.a,DOMFileSystemSync:J.a,DirectoryEntrySync:J.a,DirectoryReaderSync:J.a,EntrySync:J.a,FileEntrySync:J.a,FileReaderSync:J.a,FileWriterSync:J.a,HTMLAllCollection:J.a,Mojo:J.a,MojoHandle:J.a,MojoWatcher:J.a,NFC:J.a,PagePopupController:J.a,Report:J.a,Request:J.a,Response:J.a,SubtleCrypto:J.a,USBAlternateInterface:J.a,USBConfiguration:J.a,USBDevice:J.a,USBEndpoint:J.a,USBInTransferResult:J.a,USBInterface:J.a,USBIsochronousInTransferPacket:J.a,USBIsochronousInTransferResult:J.a,USBIsochronousOutTransferPacket:J.a,USBIsochronousOutTransferResult:J.a,USBOutTransferResult:J.a,WorkerLocation:J.a,WorkerNavigator:J.a,Worklet:J.a,IDBCursor:J.a,IDBCursorWithValue:J.a,IDBFactory:J.a,IDBIndex:J.a,IDBKeyRange:J.a,IDBObjectStore:J.a,IDBObservation:J.a,IDBObserver:J.a,IDBObserverChanges:J.a,SVGAngle:J.a,SVGAnimatedAngle:J.a,SVGAnimatedBoolean:J.a,SVGAnimatedEnumeration:J.a,SVGAnimatedInteger:J.a,SVGAnimatedLength:J.a,SVGAnimatedLengthList:J.a,SVGAnimatedNumber:J.a,SVGAnimatedNumberList:J.a,SVGAnimatedPreserveAspectRatio:J.a,SVGAnimatedRect:J.a,SVGAnimatedString:J.a,SVGAnimatedTransformList:J.a,SVGMatrix:J.a,SVGPoint:J.a,SVGPreserveAspectRatio:J.a,SVGRect:J.a,SVGUnitTypes:J.a,AudioListener:J.a,AudioParam:J.a,AudioTrack:J.a,AudioWorkletGlobalScope:J.a,AudioWorkletProcessor:J.a,PeriodicWave:J.a,WebGLActiveInfo:J.a,ANGLEInstancedArrays:J.a,ANGLE_instanced_arrays:J.a,WebGLCanvas:J.a,WebGLColorBufferFloat:J.a,WebGLCompressedTextureASTC:J.a,WebGLCompressedTextureATC:J.a,WEBGL_compressed_texture_atc:J.a,WebGLCompressedTextureETC1:J.a,WEBGL_compressed_texture_etc1:J.a,WebGLCompressedTextureETC:J.a,WebGLCompressedTexturePVRTC:J.a,WEBGL_compressed_texture_pvrtc:J.a,WebGLCompressedTextureS3TC:J.a,WEBGL_compressed_texture_s3tc:J.a,WebGLCompressedTextureS3TCsRGB:J.a,WebGLDebugRendererInfo:J.a,WEBGL_debug_renderer_info:J.a,WebGLDebugShaders:J.a,WEBGL_debug_shaders:J.a,WebGLDepthTexture:J.a,WEBGL_depth_texture:J.a,WebGLDrawBuffers:J.a,WEBGL_draw_buffers:J.a,EXTsRGB:J.a,EXT_sRGB:J.a,EXTBlendMinMax:J.a,EXT_blend_minmax:J.a,EXTColorBufferFloat:J.a,EXTColorBufferHalfFloat:J.a,EXTDisjointTimerQuery:J.a,EXTDisjointTimerQueryWebGL2:J.a,EXTFragDepth:J.a,EXT_frag_depth:J.a,EXTShaderTextureLOD:J.a,EXT_shader_texture_lod:J.a,EXTTextureFilterAnisotropic:J.a,EXT_texture_filter_anisotropic:J.a,WebGLGetBufferSubDataAsync:J.a,WebGLLoseContext:J.a,WebGLExtensionLoseContext:J.a,WEBGL_lose_context:J.a,OESElementIndexUint:J.a,OES_element_index_uint:J.a,OESStandardDerivatives:J.a,OES_standard_derivatives:J.a,OESTextureFloat:J.a,OES_texture_float:J.a,OESTextureFloatLinear:J.a,OES_texture_float_linear:J.a,OESTextureHalfFloat:J.a,OES_texture_half_float:J.a,OESTextureHalfFloatLinear:J.a,OES_texture_half_float_linear:J.a,OESVertexArrayObject:J.a,OES_vertex_array_object:J.a,WebGLQuery:J.a,WebGLRenderingContext:J.a,WebGLSampler:J.a,WebGLShaderPrecisionFormat:J.a,WebGLSync:J.a,WebGLTimerQueryEXT:J.a,WebGLTransformFeedback:J.a,WebGLVertexArrayObject:J.a,WebGLVertexArrayObjectOES:J.a,WebGL:J.a,WebGL2RenderingContextBase:J.a,Database:J.a,SQLError:J.a,SQLResultSet:J.a,SQLTransaction:J.a,DataView:H.cN,ArrayBufferView:H.cN,Float32Array:H.c5,Float64Array:H.c5,Int16Array:H.hK,Int32Array:H.hL,Int8Array:H.hM,Uint16Array:H.hN,Uint32Array:H.hO,Uint8ClampedArray:H.cO,CanvasPixelArray:H.cO,Uint8Array:H.hP,HTMLAudioElement:W.u,HTMLBRElement:W.u,HTMLContentElement:W.u,HTMLDListElement:W.u,HTMLDataElement:W.u,HTMLDataListElement:W.u,HTMLDetailsElement:W.u,HTMLDialogElement:W.u,HTMLEmbedElement:W.u,HTMLFieldSetElement:W.u,HTMLHRElement:W.u,HTMLHeadElement:W.u,HTMLHeadingElement:W.u,HTMLHtmlElement:W.u,HTMLIFrameElement:W.u,HTMLInputElement:W.u,HTMLLIElement:W.u,HTMLLabelElement:W.u,HTMLLegendElement:W.u,HTMLLinkElement:W.u,HTMLMapElement:W.u,HTMLMediaElement:W.u,HTMLMenuElement:W.u,HTMLMetaElement:W.u,HTMLMeterElement:W.u,HTMLModElement:W.u,HTMLOListElement:W.u,HTMLObjectElement:W.u,HTMLOptGroupElement:W.u,HTMLOptionElement:W.u,HTMLOutputElement:W.u,HTMLParagraphElement:W.u,HTMLParamElement:W.u,HTMLPictureElement:W.u,HTMLPreElement:W.u,HTMLProgressElement:W.u,HTMLQuoteElement:W.u,HTMLScriptElement:W.u,HTMLShadowElement:W.u,HTMLSlotElement:W.u,HTMLSourceElement:W.u,HTMLSpanElement:W.u,HTMLStyleElement:W.u,HTMLTableCaptionElement:W.u,HTMLTableColElement:W.u,HTMLTextAreaElement:W.u,HTMLTimeElement:W.u,HTMLTitleElement:W.u,HTMLTrackElement:W.u,HTMLUListElement:W.u,HTMLUnknownElement:W.u,HTMLVideoElement:W.u,HTMLDirectoryElement:W.u,HTMLFontElement:W.u,HTMLFrameElement:W.u,HTMLFrameSetElement:W.u,HTMLMarqueeElement:W.u,HTMLElement:W.u,AccessibleNodeList:W.fr,HTMLAnchorElement:W.dq,HTMLAreaElement:W.ft,HTMLBaseElement:W.ct,Blob:W.ds,HTMLBodyElement:W.bt,HTMLButtonElement:W.bv,HTMLCanvasElement:W.c0,CanvasRenderingContext2D:W.bw,CDATASection:W.bx,CharacterData:W.bx,Comment:W.bx,ProcessingInstruction:W.bx,Text:W.bx,CSSNumericValue:W.cz,CSSUnitValue:W.cz,CSSPerspective:W.fL,CSSCharsetRule:W.U,CSSConditionRule:W.U,CSSFontFaceRule:W.U,CSSGroupingRule:W.U,CSSImportRule:W.U,CSSKeyframeRule:W.U,MozCSSKeyframeRule:W.U,WebKitCSSKeyframeRule:W.U,CSSKeyframesRule:W.U,MozCSSKeyframesRule:W.U,WebKitCSSKeyframesRule:W.U,CSSMediaRule:W.U,CSSNamespaceRule:W.U,CSSPageRule:W.U,CSSRule:W.U,CSSStyleRule:W.U,CSSSupportsRule:W.U,CSSViewportRule:W.U,CSSStyleDeclaration:W.cA,MSStyleCSSProperties:W.cA,CSS2Properties:W.cA,CSSImageValue:W.b_,CSSKeywordValue:W.b_,CSSPositionValue:W.b_,CSSResourceValue:W.b_,CSSURLImageValue:W.b_,CSSStyleValue:W.b_,CSSMatrixComponent:W.b0,CSSRotation:W.b0,CSSScale:W.b0,CSSSkew:W.b0,CSSTranslation:W.b0,CSSTransformComponent:W.b0,CSSTransformValue:W.fN,CSSUnparsedValue:W.fO,DataTransferItemList:W.fQ,HTMLDivElement:W.dC,DOMException:W.fR,ClientRectList:W.dD,DOMRectList:W.dD,DOMRectReadOnly:W.dE,DOMStringList:W.fS,DOMTokenList:W.fT,Element:W.N,AbortPaymentEvent:W.m,AnimationEvent:W.m,AnimationPlaybackEvent:W.m,ApplicationCacheErrorEvent:W.m,BackgroundFetchClickEvent:W.m,BackgroundFetchEvent:W.m,BackgroundFetchFailEvent:W.m,BackgroundFetchedEvent:W.m,BeforeInstallPromptEvent:W.m,BeforeUnloadEvent:W.m,BlobEvent:W.m,CanMakePaymentEvent:W.m,ClipboardEvent:W.m,CloseEvent:W.m,CustomEvent:W.m,DeviceMotionEvent:W.m,DeviceOrientationEvent:W.m,ErrorEvent:W.m,ExtendableEvent:W.m,ExtendableMessageEvent:W.m,FetchEvent:W.m,FontFaceSetLoadEvent:W.m,ForeignFetchEvent:W.m,GamepadEvent:W.m,HashChangeEvent:W.m,InstallEvent:W.m,MediaEncryptedEvent:W.m,MediaKeyMessageEvent:W.m,MediaQueryListEvent:W.m,MediaStreamEvent:W.m,MediaStreamTrackEvent:W.m,MessageEvent:W.m,MIDIConnectionEvent:W.m,MIDIMessageEvent:W.m,MutationEvent:W.m,NotificationEvent:W.m,PageTransitionEvent:W.m,PaymentRequestEvent:W.m,PaymentRequestUpdateEvent:W.m,PopStateEvent:W.m,PresentationConnectionAvailableEvent:W.m,PresentationConnectionCloseEvent:W.m,ProgressEvent:W.m,PromiseRejectionEvent:W.m,PushEvent:W.m,RTCDataChannelEvent:W.m,RTCDTMFToneChangeEvent:W.m,RTCPeerConnectionIceEvent:W.m,RTCTrackEvent:W.m,SecurityPolicyViolationEvent:W.m,SensorErrorEvent:W.m,SpeechRecognitionError:W.m,SpeechRecognitionEvent:W.m,SpeechSynthesisEvent:W.m,StorageEvent:W.m,SyncEvent:W.m,TrackEvent:W.m,TransitionEvent:W.m,WebKitTransitionEvent:W.m,VRDeviceEvent:W.m,VRDisplayEvent:W.m,VRSessionEvent:W.m,MojoInterfaceRequestEvent:W.m,ResourceProgressEvent:W.m,USBConnectionEvent:W.m,IDBVersionChangeEvent:W.m,AudioProcessingEvent:W.m,OfflineAudioCompletionEvent:W.m,WebGLContextEvent:W.m,Event:W.m,InputEvent:W.m,AbsoluteOrientationSensor:W.i,Accelerometer:W.i,AccessibleNode:W.i,AmbientLightSensor:W.i,Animation:W.i,ApplicationCache:W.i,DOMApplicationCache:W.i,OfflineResourceList:W.i,BackgroundFetchRegistration:W.i,BatteryManager:W.i,BroadcastChannel:W.i,CanvasCaptureMediaStreamTrack:W.i,DedicatedWorkerGlobalScope:W.i,EventSource:W.i,FileReader:W.i,FontFaceSet:W.i,Gyroscope:W.i,XMLHttpRequest:W.i,XMLHttpRequestEventTarget:W.i,XMLHttpRequestUpload:W.i,LinearAccelerationSensor:W.i,Magnetometer:W.i,MediaDevices:W.i,MediaKeySession:W.i,MediaQueryList:W.i,MediaRecorder:W.i,MediaSource:W.i,MediaStream:W.i,MediaStreamTrack:W.i,MessagePort:W.i,MIDIAccess:W.i,MIDIInput:W.i,MIDIOutput:W.i,MIDIPort:W.i,NetworkInformation:W.i,Notification:W.i,OffscreenCanvas:W.i,OrientationSensor:W.i,PaymentRequest:W.i,Performance:W.i,PermissionStatus:W.i,PresentationAvailability:W.i,PresentationConnection:W.i,PresentationConnectionList:W.i,PresentationRequest:W.i,RelativeOrientationSensor:W.i,RemotePlayback:W.i,RTCDataChannel:W.i,DataChannel:W.i,RTCDTMFSender:W.i,RTCPeerConnection:W.i,webkitRTCPeerConnection:W.i,mozRTCPeerConnection:W.i,ScreenOrientation:W.i,Sensor:W.i,ServiceWorker:W.i,ServiceWorkerContainer:W.i,ServiceWorkerGlobalScope:W.i,ServiceWorkerRegistration:W.i,SharedWorker:W.i,SharedWorkerGlobalScope:W.i,SpeechRecognition:W.i,SpeechSynthesis:W.i,SpeechSynthesisUtterance:W.i,VR:W.i,VRDevice:W.i,VRDisplay:W.i,VRSession:W.i,VisualViewport:W.i,WebSocket:W.i,Worker:W.i,WorkerGlobalScope:W.i,WorkerPerformance:W.i,BluetoothDevice:W.i,BluetoothRemoteGATTCharacteristic:W.i,Clipboard:W.i,MojoInterfaceInterceptor:W.i,USB:W.i,IDBDatabase:W.i,IDBOpenDBRequest:W.i,IDBVersionChangeRequest:W.i,IDBRequest:W.i,IDBTransaction:W.i,AnalyserNode:W.i,RealtimeAnalyserNode:W.i,AudioBufferSourceNode:W.i,AudioDestinationNode:W.i,AudioNode:W.i,AudioScheduledSourceNode:W.i,AudioWorkletNode:W.i,BiquadFilterNode:W.i,ChannelMergerNode:W.i,AudioChannelMerger:W.i,ChannelSplitterNode:W.i,AudioChannelSplitter:W.i,ConstantSourceNode:W.i,ConvolverNode:W.i,DelayNode:W.i,DynamicsCompressorNode:W.i,GainNode:W.i,AudioGainNode:W.i,IIRFilterNode:W.i,MediaElementAudioSourceNode:W.i,MediaStreamAudioDestinationNode:W.i,MediaStreamAudioSourceNode:W.i,OscillatorNode:W.i,Oscillator:W.i,PannerNode:W.i,AudioPannerNode:W.i,webkitAudioPannerNode:W.i,ScriptProcessorNode:W.i,JavaScriptAudioNode:W.i,StereoPannerNode:W.i,WaveShaperNode:W.i,EventTarget:W.i,File:W.aL,FileList:W.h1,FileWriter:W.h2,HTMLFormElement:W.h6,Gamepad:W.aM,History:W.h9,HTMLCollection:W.c2,HTMLFormControlsCollection:W.c2,HTMLOptionsCollection:W.c2,ImageData:W.bF,HTMLImageElement:W.cG,KeyboardEvent:W.b2,Location:W.dR,MediaList:W.hD,MIDIInputMap:W.hE,MIDIOutputMap:W.hG,MimeType:W.aN,MimeTypeArray:W.hI,PointerEvent:W.a5,MouseEvent:W.a5,DragEvent:W.a5,Document:W.D,DocumentFragment:W.D,HTMLDocument:W.D,ShadowRoot:W.D,XMLDocument:W.D,DocumentType:W.D,Node:W.D,NodeList:W.cP,RadioNodeList:W.cP,Plugin:W.aO,PluginArray:W.hX,RTCStatsReport:W.i5,HTMLSelectElement:W.i8,SourceBuffer:W.aQ,SourceBufferList:W.ii,SpeechGrammar:W.aR,SpeechGrammarList:W.ij,SpeechRecognitionResult:W.aS,Storage:W.im,CSSStyleSheet:W.aD,StyleSheet:W.aD,HTMLTableCellElement:W.bm,HTMLTableDataCellElement:W.bm,HTMLTableHeaderCellElement:W.bm,HTMLTableElement:W.ee,HTMLTableRowElement:W.iw,HTMLTableSectionElement:W.ix,HTMLTemplateElement:W.d_,TextTrack:W.aU,TextTrackCue:W.aE,VTTCue:W.aE,TextTrackCueList:W.iz,TextTrackList:W.iA,TimeRanges:W.iG,Touch:W.aW,TouchEvent:W.aX,TouchList:W.iJ,TrackDefaultList:W.iK,CompositionEvent:W.bQ,FocusEvent:W.bQ,TextEvent:W.bQ,UIEvent:W.bQ,URL:W.iY,VideoTrackList:W.jc,WheelEvent:W.bc,Window:W.d7,DOMWindow:W.d7,Attr:W.d8,CSSRuleList:W.jl,ClientRect:W.ew,DOMRect:W.ew,GamepadList:W.jz,NamedNodeMap:W.eP,MozNamedAttrMap:W.eP,SpeechRecognitionResultList:W.jM,StyleSheetList:W.jN,SVGLength:P.b3,SVGLengthList:P.hg,SVGNumber:P.b6,SVGNumberList:P.hT,SVGPointList:P.hZ,SVGScriptElement:P.cV,SVGStringList:P.it,SVGAElement:P.p,SVGAnimateElement:P.p,SVGAnimateMotionElement:P.p,SVGAnimateTransformElement:P.p,SVGAnimationElement:P.p,SVGCircleElement:P.p,SVGClipPathElement:P.p,SVGDefsElement:P.p,SVGDescElement:P.p,SVGDiscardElement:P.p,SVGEllipseElement:P.p,SVGFEBlendElement:P.p,SVGFEColorMatrixElement:P.p,SVGFEComponentTransferElement:P.p,SVGFECompositeElement:P.p,SVGFEConvolveMatrixElement:P.p,SVGFEDiffuseLightingElement:P.p,SVGFEDisplacementMapElement:P.p,SVGFEDistantLightElement:P.p,SVGFEFloodElement:P.p,SVGFEFuncAElement:P.p,SVGFEFuncBElement:P.p,SVGFEFuncGElement:P.p,SVGFEFuncRElement:P.p,SVGFEGaussianBlurElement:P.p,SVGFEImageElement:P.p,SVGFEMergeElement:P.p,SVGFEMergeNodeElement:P.p,SVGFEMorphologyElement:P.p,SVGFEOffsetElement:P.p,SVGFEPointLightElement:P.p,SVGFESpecularLightingElement:P.p,SVGFESpotLightElement:P.p,SVGFETileElement:P.p,SVGFETurbulenceElement:P.p,SVGFilterElement:P.p,SVGForeignObjectElement:P.p,SVGGElement:P.p,SVGGeometryElement:P.p,SVGGraphicsElement:P.p,SVGImageElement:P.p,SVGLineElement:P.p,SVGLinearGradientElement:P.p,SVGMarkerElement:P.p,SVGMaskElement:P.p,SVGMetadataElement:P.p,SVGPathElement:P.p,SVGPatternElement:P.p,SVGPolygonElement:P.p,SVGPolylineElement:P.p,SVGRadialGradientElement:P.p,SVGRectElement:P.p,SVGSetElement:P.p,SVGStopElement:P.p,SVGStyleElement:P.p,SVGSVGElement:P.p,SVGSwitchElement:P.p,SVGSymbolElement:P.p,SVGTSpanElement:P.p,SVGTextContentElement:P.p,SVGTextElement:P.p,SVGTextPathElement:P.p,SVGTextPositioningElement:P.p,SVGTitleElement:P.p,SVGUseElement:P.p,SVGViewElement:P.p,SVGGradientElement:P.p,SVGComponentTransferFunctionElement:P.p,SVGFEDropShadowElement:P.p,SVGMPathElement:P.p,SVGElement:P.p,SVGTransform:P.b8,SVGTransformList:P.iL,AudioBuffer:P.fw,AudioParamMap:P.fx,AudioTrackList:P.fz,AudioContext:P.bZ,webkitAudioContext:P.bZ,BaseAudioContext:P.bZ,OfflineAudioContext:P.hU,WebGLBuffer:P.dt,WebGLFramebuffer:P.dI,WebGLProgram:P.e2,WebGLRenderbuffer:P.e5,WebGL2RenderingContext:P.c8,WebGLShader:P.e6,WebGLTexture:P.ef,WebGLUniformLocation:P.el,SQLResultSetRowList:P.ik})
hunkHelpers.setOrUpdateLeafTags({ArrayBuffer:true,AnimationEffectReadOnly:true,AnimationEffectTiming:true,AnimationEffectTimingReadOnly:true,AnimationTimeline:true,AnimationWorkletGlobalScope:true,AuthenticatorAssertionResponse:true,AuthenticatorAttestationResponse:true,AuthenticatorResponse:true,BackgroundFetchFetch:true,BackgroundFetchManager:true,BackgroundFetchSettledFetch:true,BarProp:true,BarcodeDetector:true,BluetoothRemoteGATTDescriptor:true,Body:true,BudgetState:true,CacheStorage:true,CanvasGradient:true,CanvasPattern:true,Client:true,Clients:true,CookieStore:true,Coordinates:true,Credential:true,CredentialUserData:true,CredentialsContainer:true,Crypto:true,CryptoKey:true,CSS:true,CSSVariableReferenceValue:true,CustomElementRegistry:true,DataTransfer:true,DataTransferItem:true,DeprecatedStorageInfo:true,DeprecatedStorageQuota:true,DeprecationReport:true,DetectedBarcode:true,DetectedFace:true,DetectedText:true,DeviceAcceleration:true,DeviceRotationRate:true,DirectoryEntry:true,DirectoryReader:true,DocumentOrShadowRoot:true,DocumentTimeline:true,DOMError:true,DOMImplementation:true,Iterator:true,DOMMatrix:true,DOMMatrixReadOnly:true,DOMParser:true,DOMPoint:true,DOMPointReadOnly:true,DOMQuad:true,DOMStringMap:true,Entry:true,External:true,FaceDetector:true,FederatedCredential:true,FileEntry:true,DOMFileSystem:true,FontFace:true,FontFaceSource:true,FormData:true,GamepadButton:true,GamepadPose:true,Geolocation:true,Position:true,Headers:true,HTMLHyperlinkElementUtils:true,IdleDeadline:true,ImageBitmap:true,ImageBitmapRenderingContext:true,ImageCapture:true,InputDeviceCapabilities:true,IntersectionObserver:true,IntersectionObserverEntry:true,InterventionReport:true,KeyframeEffect:true,KeyframeEffectReadOnly:true,MediaCapabilities:true,MediaCapabilitiesInfo:true,MediaDeviceInfo:true,MediaError:true,MediaKeyStatusMap:true,MediaKeySystemAccess:true,MediaKeys:true,MediaKeysPolicy:true,MediaMetadata:true,MediaSession:true,MediaSettingsRange:true,MemoryInfo:true,MessageChannel:true,Metadata:true,MutationObserver:true,WebKitMutationObserver:true,MutationRecord:true,NavigationPreloadManager:true,Navigator:true,NavigatorAutomationInformation:true,NavigatorConcurrentHardware:true,NavigatorCookies:true,NavigatorUserMediaError:true,NodeFilter:true,NodeIterator:true,NonDocumentTypeChildNode:true,NonElementParentNode:true,NoncedElement:true,OffscreenCanvasRenderingContext2D:true,OverconstrainedError:true,PaintRenderingContext2D:true,PaintSize:true,PaintWorkletGlobalScope:true,PasswordCredential:true,Path2D:true,PaymentAddress:true,PaymentInstruments:true,PaymentManager:true,PaymentResponse:true,PerformanceEntry:true,PerformanceLongTaskTiming:true,PerformanceMark:true,PerformanceMeasure:true,PerformanceNavigation:true,PerformanceNavigationTiming:true,PerformanceObserver:true,PerformanceObserverEntryList:true,PerformancePaintTiming:true,PerformanceResourceTiming:true,PerformanceServerTiming:true,PerformanceTiming:true,Permissions:true,PhotoCapabilities:true,PositionError:true,Presentation:true,PresentationReceiver:true,PublicKeyCredential:true,PushManager:true,PushMessageData:true,PushSubscription:true,PushSubscriptionOptions:true,Range:true,RelatedApplication:true,ReportBody:true,ReportingObserver:true,ResizeObserver:true,ResizeObserverEntry:true,RTCCertificate:true,RTCIceCandidate:true,mozRTCIceCandidate:true,RTCLegacyStatsReport:true,RTCRtpContributingSource:true,RTCRtpReceiver:true,RTCRtpSender:true,RTCSessionDescription:true,mozRTCSessionDescription:true,RTCStatsResponse:true,Screen:true,ScrollState:true,ScrollTimeline:true,Selection:true,SharedArrayBuffer:true,SpeechRecognitionAlternative:true,SpeechSynthesisVoice:true,StaticRange:true,StorageManager:true,StyleMedia:true,StylePropertyMap:true,StylePropertyMapReadonly:true,SyncManager:true,TaskAttributionTiming:true,TextDetector:true,TextMetrics:true,TrackDefault:true,TreeWalker:true,TrustedHTML:true,TrustedScriptURL:true,TrustedURL:true,UnderlyingSourceBase:true,URLSearchParams:true,VRCoordinateSystem:true,VRDisplayCapabilities:true,VREyeParameters:true,VRFrameData:true,VRFrameOfReference:true,VRPose:true,VRStageBounds:true,VRStageBoundsPoint:true,VRStageParameters:true,ValidityState:true,VideoPlaybackQuality:true,VideoTrack:true,VTTRegion:true,WindowClient:true,WorkletAnimation:true,WorkletGlobalScope:true,XPathEvaluator:true,XPathExpression:true,XPathNSResolver:true,XPathResult:true,XMLSerializer:true,XSLTProcessor:true,Bluetooth:true,BluetoothCharacteristicProperties:true,BluetoothRemoteGATTServer:true,BluetoothRemoteGATTService:true,BluetoothUUID:true,BudgetService:true,Cache:true,DOMFileSystemSync:true,DirectoryEntrySync:true,DirectoryReaderSync:true,EntrySync:true,FileEntrySync:true,FileReaderSync:true,FileWriterSync:true,HTMLAllCollection:true,Mojo:true,MojoHandle:true,MojoWatcher:true,NFC:true,PagePopupController:true,Report:true,Request:true,Response:true,SubtleCrypto:true,USBAlternateInterface:true,USBConfiguration:true,USBDevice:true,USBEndpoint:true,USBInTransferResult:true,USBInterface:true,USBIsochronousInTransferPacket:true,USBIsochronousInTransferResult:true,USBIsochronousOutTransferPacket:true,USBIsochronousOutTransferResult:true,USBOutTransferResult:true,WorkerLocation:true,WorkerNavigator:true,Worklet:true,IDBCursor:true,IDBCursorWithValue:true,IDBFactory:true,IDBIndex:true,IDBKeyRange:true,IDBObjectStore:true,IDBObservation:true,IDBObserver:true,IDBObserverChanges:true,SVGAngle:true,SVGAnimatedAngle:true,SVGAnimatedBoolean:true,SVGAnimatedEnumeration:true,SVGAnimatedInteger:true,SVGAnimatedLength:true,SVGAnimatedLengthList:true,SVGAnimatedNumber:true,SVGAnimatedNumberList:true,SVGAnimatedPreserveAspectRatio:true,SVGAnimatedRect:true,SVGAnimatedString:true,SVGAnimatedTransformList:true,SVGMatrix:true,SVGPoint:true,SVGPreserveAspectRatio:true,SVGRect:true,SVGUnitTypes:true,AudioListener:true,AudioParam:true,AudioTrack:true,AudioWorkletGlobalScope:true,AudioWorkletProcessor:true,PeriodicWave:true,WebGLActiveInfo:true,ANGLEInstancedArrays:true,ANGLE_instanced_arrays:true,WebGLCanvas:true,WebGLColorBufferFloat:true,WebGLCompressedTextureASTC:true,WebGLCompressedTextureATC:true,WEBGL_compressed_texture_atc:true,WebGLCompressedTextureETC1:true,WEBGL_compressed_texture_etc1:true,WebGLCompressedTextureETC:true,WebGLCompressedTexturePVRTC:true,WEBGL_compressed_texture_pvrtc:true,WebGLCompressedTextureS3TC:true,WEBGL_compressed_texture_s3tc:true,WebGLCompressedTextureS3TCsRGB:true,WebGLDebugRendererInfo:true,WEBGL_debug_renderer_info:true,WebGLDebugShaders:true,WEBGL_debug_shaders:true,WebGLDepthTexture:true,WEBGL_depth_texture:true,WebGLDrawBuffers:true,WEBGL_draw_buffers:true,EXTsRGB:true,EXT_sRGB:true,EXTBlendMinMax:true,EXT_blend_minmax:true,EXTColorBufferFloat:true,EXTColorBufferHalfFloat:true,EXTDisjointTimerQuery:true,EXTDisjointTimerQueryWebGL2:true,EXTFragDepth:true,EXT_frag_depth:true,EXTShaderTextureLOD:true,EXT_shader_texture_lod:true,EXTTextureFilterAnisotropic:true,EXT_texture_filter_anisotropic:true,WebGLGetBufferSubDataAsync:true,WebGLLoseContext:true,WebGLExtensionLoseContext:true,WEBGL_lose_context:true,OESElementIndexUint:true,OES_element_index_uint:true,OESStandardDerivatives:true,OES_standard_derivatives:true,OESTextureFloat:true,OES_texture_float:true,OESTextureFloatLinear:true,OES_texture_float_linear:true,OESTextureHalfFloat:true,OES_texture_half_float:true,OESTextureHalfFloatLinear:true,OES_texture_half_float_linear:true,OESVertexArrayObject:true,OES_vertex_array_object:true,WebGLQuery:true,WebGLRenderingContext:true,WebGLSampler:true,WebGLShaderPrecisionFormat:true,WebGLSync:true,WebGLTimerQueryEXT:true,WebGLTransformFeedback:true,WebGLVertexArrayObject:true,WebGLVertexArrayObjectOES:true,WebGL:true,WebGL2RenderingContextBase:true,Database:true,SQLError:true,SQLResultSet:true,SQLTransaction:true,DataView:true,ArrayBufferView:false,Float32Array:true,Float64Array:true,Int16Array:true,Int32Array:true,Int8Array:true,Uint16Array:true,Uint32Array:true,Uint8ClampedArray:true,CanvasPixelArray:true,Uint8Array:false,HTMLAudioElement:true,HTMLBRElement:true,HTMLContentElement:true,HTMLDListElement:true,HTMLDataElement:true,HTMLDataListElement:true,HTMLDetailsElement:true,HTMLDialogElement:true,HTMLEmbedElement:true,HTMLFieldSetElement:true,HTMLHRElement:true,HTMLHeadElement:true,HTMLHeadingElement:true,HTMLHtmlElement:true,HTMLIFrameElement:true,HTMLInputElement:true,HTMLLIElement:true,HTMLLabelElement:true,HTMLLegendElement:true,HTMLLinkElement:true,HTMLMapElement:true,HTMLMediaElement:true,HTMLMenuElement:true,HTMLMetaElement:true,HTMLMeterElement:true,HTMLModElement:true,HTMLOListElement:true,HTMLObjectElement:true,HTMLOptGroupElement:true,HTMLOptionElement:true,HTMLOutputElement:true,HTMLParagraphElement:true,HTMLParamElement:true,HTMLPictureElement:true,HTMLPreElement:true,HTMLProgressElement:true,HTMLQuoteElement:true,HTMLScriptElement:true,HTMLShadowElement:true,HTMLSlotElement:true,HTMLSourceElement:true,HTMLSpanElement:true,HTMLStyleElement:true,HTMLTableCaptionElement:true,HTMLTableColElement:true,HTMLTextAreaElement:true,HTMLTimeElement:true,HTMLTitleElement:true,HTMLTrackElement:true,HTMLUListElement:true,HTMLUnknownElement:true,HTMLVideoElement:true,HTMLDirectoryElement:true,HTMLFontElement:true,HTMLFrameElement:true,HTMLFrameSetElement:true,HTMLMarqueeElement:true,HTMLElement:false,AccessibleNodeList:true,HTMLAnchorElement:true,HTMLAreaElement:true,HTMLBaseElement:true,Blob:false,HTMLBodyElement:true,HTMLButtonElement:true,HTMLCanvasElement:true,CanvasRenderingContext2D:true,CDATASection:true,CharacterData:true,Comment:true,ProcessingInstruction:true,Text:true,CSSNumericValue:true,CSSUnitValue:true,CSSPerspective:true,CSSCharsetRule:true,CSSConditionRule:true,CSSFontFaceRule:true,CSSGroupingRule:true,CSSImportRule:true,CSSKeyframeRule:true,MozCSSKeyframeRule:true,WebKitCSSKeyframeRule:true,CSSKeyframesRule:true,MozCSSKeyframesRule:true,WebKitCSSKeyframesRule:true,CSSMediaRule:true,CSSNamespaceRule:true,CSSPageRule:true,CSSRule:true,CSSStyleRule:true,CSSSupportsRule:true,CSSViewportRule:true,CSSStyleDeclaration:true,MSStyleCSSProperties:true,CSS2Properties:true,CSSImageValue:true,CSSKeywordValue:true,CSSPositionValue:true,CSSResourceValue:true,CSSURLImageValue:true,CSSStyleValue:false,CSSMatrixComponent:true,CSSRotation:true,CSSScale:true,CSSSkew:true,CSSTranslation:true,CSSTransformComponent:false,CSSTransformValue:true,CSSUnparsedValue:true,DataTransferItemList:true,HTMLDivElement:true,DOMException:true,ClientRectList:true,DOMRectList:true,DOMRectReadOnly:false,DOMStringList:true,DOMTokenList:true,Element:false,AbortPaymentEvent:true,AnimationEvent:true,AnimationPlaybackEvent:true,ApplicationCacheErrorEvent:true,BackgroundFetchClickEvent:true,BackgroundFetchEvent:true,BackgroundFetchFailEvent:true,BackgroundFetchedEvent:true,BeforeInstallPromptEvent:true,BeforeUnloadEvent:true,BlobEvent:true,CanMakePaymentEvent:true,ClipboardEvent:true,CloseEvent:true,CustomEvent:true,DeviceMotionEvent:true,DeviceOrientationEvent:true,ErrorEvent:true,ExtendableEvent:true,ExtendableMessageEvent:true,FetchEvent:true,FontFaceSetLoadEvent:true,ForeignFetchEvent:true,GamepadEvent:true,HashChangeEvent:true,InstallEvent:true,MediaEncryptedEvent:true,MediaKeyMessageEvent:true,MediaQueryListEvent:true,MediaStreamEvent:true,MediaStreamTrackEvent:true,MessageEvent:true,MIDIConnectionEvent:true,MIDIMessageEvent:true,MutationEvent:true,NotificationEvent:true,PageTransitionEvent:true,PaymentRequestEvent:true,PaymentRequestUpdateEvent:true,PopStateEvent:true,PresentationConnectionAvailableEvent:true,PresentationConnectionCloseEvent:true,ProgressEvent:true,PromiseRejectionEvent:true,PushEvent:true,RTCDataChannelEvent:true,RTCDTMFToneChangeEvent:true,RTCPeerConnectionIceEvent:true,RTCTrackEvent:true,SecurityPolicyViolationEvent:true,SensorErrorEvent:true,SpeechRecognitionError:true,SpeechRecognitionEvent:true,SpeechSynthesisEvent:true,StorageEvent:true,SyncEvent:true,TrackEvent:true,TransitionEvent:true,WebKitTransitionEvent:true,VRDeviceEvent:true,VRDisplayEvent:true,VRSessionEvent:true,MojoInterfaceRequestEvent:true,ResourceProgressEvent:true,USBConnectionEvent:true,IDBVersionChangeEvent:true,AudioProcessingEvent:true,OfflineAudioCompletionEvent:true,WebGLContextEvent:true,Event:false,InputEvent:false,AbsoluteOrientationSensor:true,Accelerometer:true,AccessibleNode:true,AmbientLightSensor:true,Animation:true,ApplicationCache:true,DOMApplicationCache:true,OfflineResourceList:true,BackgroundFetchRegistration:true,BatteryManager:true,BroadcastChannel:true,CanvasCaptureMediaStreamTrack:true,DedicatedWorkerGlobalScope:true,EventSource:true,FileReader:true,FontFaceSet:true,Gyroscope:true,XMLHttpRequest:true,XMLHttpRequestEventTarget:true,XMLHttpRequestUpload:true,LinearAccelerationSensor:true,Magnetometer:true,MediaDevices:true,MediaKeySession:true,MediaQueryList:true,MediaRecorder:true,MediaSource:true,MediaStream:true,MediaStreamTrack:true,MessagePort:true,MIDIAccess:true,MIDIInput:true,MIDIOutput:true,MIDIPort:true,NetworkInformation:true,Notification:true,OffscreenCanvas:true,OrientationSensor:true,PaymentRequest:true,Performance:true,PermissionStatus:true,PresentationAvailability:true,PresentationConnection:true,PresentationConnectionList:true,PresentationRequest:true,RelativeOrientationSensor:true,RemotePlayback:true,RTCDataChannel:true,DataChannel:true,RTCDTMFSender:true,RTCPeerConnection:true,webkitRTCPeerConnection:true,mozRTCPeerConnection:true,ScreenOrientation:true,Sensor:true,ServiceWorker:true,ServiceWorkerContainer:true,ServiceWorkerGlobalScope:true,ServiceWorkerRegistration:true,SharedWorker:true,SharedWorkerGlobalScope:true,SpeechRecognition:true,SpeechSynthesis:true,SpeechSynthesisUtterance:true,VR:true,VRDevice:true,VRDisplay:true,VRSession:true,VisualViewport:true,WebSocket:true,Worker:true,WorkerGlobalScope:true,WorkerPerformance:true,BluetoothDevice:true,BluetoothRemoteGATTCharacteristic:true,Clipboard:true,MojoInterfaceInterceptor:true,USB:true,IDBDatabase:true,IDBOpenDBRequest:true,IDBVersionChangeRequest:true,IDBRequest:true,IDBTransaction:true,AnalyserNode:true,RealtimeAnalyserNode:true,AudioBufferSourceNode:true,AudioDestinationNode:true,AudioNode:true,AudioScheduledSourceNode:true,AudioWorkletNode:true,BiquadFilterNode:true,ChannelMergerNode:true,AudioChannelMerger:true,ChannelSplitterNode:true,AudioChannelSplitter:true,ConstantSourceNode:true,ConvolverNode:true,DelayNode:true,DynamicsCompressorNode:true,GainNode:true,AudioGainNode:true,IIRFilterNode:true,MediaElementAudioSourceNode:true,MediaStreamAudioDestinationNode:true,MediaStreamAudioSourceNode:true,OscillatorNode:true,Oscillator:true,PannerNode:true,AudioPannerNode:true,webkitAudioPannerNode:true,ScriptProcessorNode:true,JavaScriptAudioNode:true,StereoPannerNode:true,WaveShaperNode:true,EventTarget:false,File:true,FileList:true,FileWriter:true,HTMLFormElement:true,Gamepad:true,History:true,HTMLCollection:true,HTMLFormControlsCollection:true,HTMLOptionsCollection:true,ImageData:true,HTMLImageElement:true,KeyboardEvent:true,Location:true,MediaList:true,MIDIInputMap:true,MIDIOutputMap:true,MimeType:true,MimeTypeArray:true,PointerEvent:true,MouseEvent:false,DragEvent:false,Document:true,DocumentFragment:true,HTMLDocument:true,ShadowRoot:true,XMLDocument:true,DocumentType:true,Node:false,NodeList:true,RadioNodeList:true,Plugin:true,PluginArray:true,RTCStatsReport:true,HTMLSelectElement:true,SourceBuffer:true,SourceBufferList:true,SpeechGrammar:true,SpeechGrammarList:true,SpeechRecognitionResult:true,Storage:true,CSSStyleSheet:true,StyleSheet:true,HTMLTableCellElement:true,HTMLTableDataCellElement:true,HTMLTableHeaderCellElement:true,HTMLTableElement:true,HTMLTableRowElement:true,HTMLTableSectionElement:true,HTMLTemplateElement:true,TextTrack:true,TextTrackCue:true,VTTCue:true,TextTrackCueList:true,TextTrackList:true,TimeRanges:true,Touch:true,TouchEvent:true,TouchList:true,TrackDefaultList:true,CompositionEvent:true,FocusEvent:true,TextEvent:true,UIEvent:false,URL:true,VideoTrackList:true,WheelEvent:true,Window:true,DOMWindow:true,Attr:true,CSSRuleList:true,ClientRect:true,DOMRect:true,GamepadList:true,NamedNodeMap:true,MozNamedAttrMap:true,SpeechRecognitionResultList:true,StyleSheetList:true,SVGLength:true,SVGLengthList:true,SVGNumber:true,SVGNumberList:true,SVGPointList:true,SVGScriptElement:true,SVGStringList:true,SVGAElement:true,SVGAnimateElement:true,SVGAnimateMotionElement:true,SVGAnimateTransformElement:true,SVGAnimationElement:true,SVGCircleElement:true,SVGClipPathElement:true,SVGDefsElement:true,SVGDescElement:true,SVGDiscardElement:true,SVGEllipseElement:true,SVGFEBlendElement:true,SVGFEColorMatrixElement:true,SVGFEComponentTransferElement:true,SVGFECompositeElement:true,SVGFEConvolveMatrixElement:true,SVGFEDiffuseLightingElement:true,SVGFEDisplacementMapElement:true,SVGFEDistantLightElement:true,SVGFEFloodElement:true,SVGFEFuncAElement:true,SVGFEFuncBElement:true,SVGFEFuncGElement:true,SVGFEFuncRElement:true,SVGFEGaussianBlurElement:true,SVGFEImageElement:true,SVGFEMergeElement:true,SVGFEMergeNodeElement:true,SVGFEMorphologyElement:true,SVGFEOffsetElement:true,SVGFEPointLightElement:true,SVGFESpecularLightingElement:true,SVGFESpotLightElement:true,SVGFETileElement:true,SVGFETurbulenceElement:true,SVGFilterElement:true,SVGForeignObjectElement:true,SVGGElement:true,SVGGeometryElement:true,SVGGraphicsElement:true,SVGImageElement:true,SVGLineElement:true,SVGLinearGradientElement:true,SVGMarkerElement:true,SVGMaskElement:true,SVGMetadataElement:true,SVGPathElement:true,SVGPatternElement:true,SVGPolygonElement:true,SVGPolylineElement:true,SVGRadialGradientElement:true,SVGRectElement:true,SVGSetElement:true,SVGStopElement:true,SVGStyleElement:true,SVGSVGElement:true,SVGSwitchElement:true,SVGSymbolElement:true,SVGTSpanElement:true,SVGTextContentElement:true,SVGTextElement:true,SVGTextPathElement:true,SVGTextPositioningElement:true,SVGTitleElement:true,SVGUseElement:true,SVGViewElement:true,SVGGradientElement:true,SVGComponentTransferFunctionElement:true,SVGFEDropShadowElement:true,SVGMPathElement:true,SVGElement:false,SVGTransform:true,SVGTransformList:true,AudioBuffer:true,AudioParamMap:true,AudioTrackList:true,AudioContext:true,webkitAudioContext:true,BaseAudioContext:false,OfflineAudioContext:true,WebGLBuffer:true,WebGLFramebuffer:true,WebGLProgram:true,WebGLRenderbuffer:true,WebGL2RenderingContext:true,WebGLShader:true,WebGLTexture:true,WebGLUniformLocation:true,SQLResultSetRowList:true})
H.dY.$nativeSuperclassTag="ArrayBufferView"
H.da.$nativeSuperclassTag="ArrayBufferView"
H.db.$nativeSuperclassTag="ArrayBufferView"
H.c5.$nativeSuperclassTag="ArrayBufferView"
H.dc.$nativeSuperclassTag="ArrayBufferView"
H.dd.$nativeSuperclassTag="ArrayBufferView"
H.cM.$nativeSuperclassTag="ArrayBufferView"
W.de.$nativeSuperclassTag="EventTarget"
W.df.$nativeSuperclassTag="EventTarget"
W.dg.$nativeSuperclassTag="EventTarget"
W.dh.$nativeSuperclassTag="EventTarget"})()
convertAllToFastObject(w)
convertToFastObject($);(function(a){if(typeof document==="undefined"){a(null)
return}if(typeof document.currentScript!='undefined'){a(document.currentScript)
return}var u=document.scripts
function onLoad(b){for(var s=0;s<u.length;++s)u[s].removeEventListener("load",onLoad,false)
a(b.target)}for(var t=0;t<u.length;++t)u[t].addEventListener("load",onLoad,false)})(function(a){v.currentScript=a
if(typeof dartMainRunner==="function")dartMainRunner(M.lV,[])
else M.lV([])})})()
//# sourceMappingURL=test.dart.js.map
