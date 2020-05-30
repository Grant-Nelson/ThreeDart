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
a[c]=function(){a[c]=function(){H.mq(b)}
var t
var s=d
try{if(a[b]===u){t=a[b]=s
t=a[b]=d()}else t=a[b]}finally{if(t===s)a[b]=null
a[c]=function(){return this[b]}}return t}}function makeConstList(a){a.immutable$list=Array
a.fixed$length=Array
return a}function convertToFastObject(a){function t(){}t.prototype=a
new t()
return a}function convertAllToFastObject(a){for(var u=0;u<a.length;++u)convertToFastObject(a[u])}var y=0
function tearOffGetter(a,b,c,d,e){return e?new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+d+y+++"(receiver) {"+"if (c === null) c = "+"H.jr"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, true, name);"+"return new c(this, funcs[0], receiver, name);"+"}")(a,b,c,d,H,null):new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+d+y+++"() {"+"if (c === null) c = "+"H.jr"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, false, name);"+"return new c(this, funcs[0], null, name);"+"}")(a,b,c,d,H,null)}function tearOff(a,b,c,d,e,f){var u=null
return d?function(){if(u===null)u=H.jr(this,a,b,c,true,false,e).prototype
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
if(w[u][a])return w[u][a]}}var C={},H={jd:function jd(){},
kX:function(a,b,c,d){if(!!a.$ip)return new H.eQ(a,b,[c,d])
return new H.bX(a,b,[c,d])},
jF:function(){return new P.ho("No element")},
lh:function(a,b){var u=J.bk(a)
if(typeof u!=="number")return u.E()
H.d8(a,0,u-1,b)},
d8:function(a,b,c,d){if(c-b<=32)H.lg(a,b,c,d)
else H.lf(a,b,c,d)},
lg:function(a,b,c,d){var u,t,s,r,q,p
for(u=b+1,t=J.ej(a);u<=c;++u){s=t.h(a,u)
r=u
while(!0){if(r>b){q=d.$2(t.h(a,r-1),s)
if(typeof q!=="number")return q.a2()
q=q>0}else q=!1
if(!q)break
p=r-1
t.l(a,r,t.h(a,p))
r=p}t.l(a,r,s)}},
lf:function(a3,a4,a5,a6){var u,t,s,r,q,p,o,n,m,l,k,j=C.d.a9(a5-a4+1,6),i=a4+j,h=a5-j,g=C.d.a9(a4+a5,2),f=g-j,e=g+j,d=J.ej(a3),c=d.h(a3,i),b=d.h(a3,f),a=d.h(a3,g),a0=d.h(a3,e),a1=d.h(a3,h),a2=a6.$2(c,b)
if(typeof a2!=="number")return a2.a2()
if(a2>0){u=b
b=c
c=u}a2=a6.$2(a0,a1)
if(typeof a2!=="number")return a2.a2()
if(a2>0){u=a1
a1=a0
a0=u}a2=a6.$2(c,a)
if(typeof a2!=="number")return a2.a2()
if(a2>0){u=a
a=c
c=u}a2=a6.$2(b,a)
if(typeof a2!=="number")return a2.a2()
if(a2>0){u=a
a=b
b=u}a2=a6.$2(c,a0)
if(typeof a2!=="number")return a2.a2()
if(a2>0){u=a0
a0=c
c=u}a2=a6.$2(a,a0)
if(typeof a2!=="number")return a2.a2()
if(a2>0){u=a0
a0=a
a=u}a2=a6.$2(b,a1)
if(typeof a2!=="number")return a2.a2()
if(a2>0){u=a1
a1=b
b=u}a2=a6.$2(b,a)
if(typeof a2!=="number")return a2.a2()
if(a2>0){u=a
a=b
b=u}a2=a6.$2(a0,a1)
if(typeof a2!=="number")return a2.a2()
if(a2>0){u=a1
a1=a0
a0=u}d.l(a3,i,c)
d.l(a3,g,a)
d.l(a3,h,a1)
d.l(a3,f,d.h(a3,a4))
d.l(a3,e,d.h(a3,a5))
t=a4+1
s=a5-1
if(J.w(a6.$2(b,a0),0)){for(r=t;r<=s;++r){q=d.h(a3,r)
p=a6.$2(q,b)
if(p===0)continue
if(typeof p!=="number")return p.a7()
if(p<0){if(r!==t){d.l(a3,r,d.h(a3,t))
d.l(a3,t,q)}++t}else for(;!0;){p=a6.$2(d.h(a3,s),b)
if(typeof p!=="number")return p.a2()
if(p>0){--s
continue}else{o=s-1
if(p<0){d.l(a3,r,d.h(a3,t))
n=t+1
d.l(a3,t,d.h(a3,s))
d.l(a3,s,q)
s=o
t=n
break}else{d.l(a3,r,d.h(a3,s))
d.l(a3,s,q)
s=o
break}}}}m=!0}else{for(r=t;r<=s;++r){q=d.h(a3,r)
l=a6.$2(q,b)
if(typeof l!=="number")return l.a7()
if(l<0){if(r!==t){d.l(a3,r,d.h(a3,t))
d.l(a3,t,q)}++t}else{k=a6.$2(q,a0)
if(typeof k!=="number")return k.a2()
if(k>0)for(;!0;){p=a6.$2(d.h(a3,s),a0)
if(typeof p!=="number")return p.a2()
if(p>0){--s
if(s<r)break
continue}else{p=a6.$2(d.h(a3,s),b)
if(typeof p!=="number")return p.a7()
o=s-1
if(p<0){d.l(a3,r,d.h(a3,t))
n=t+1
d.l(a3,t,d.h(a3,s))
d.l(a3,s,q)
t=n}else{d.l(a3,r,d.h(a3,s))
d.l(a3,s,q)}s=o
break}}}}m=!1}a2=t-1
d.l(a3,a4,d.h(a3,a2))
d.l(a3,a2,b)
a2=s+1
d.l(a3,a5,d.h(a3,a2))
d.l(a3,a2,a0)
H.d8(a3,a4,t-2,a6)
H.d8(a3,s+2,a5,a6)
if(m)return
if(t<i&&s>h){for(;J.w(a6.$2(d.h(a3,t),b),0);)++t
for(;J.w(a6.$2(d.h(a3,s),a0),0);)--s
for(r=t;r<=s;++r){q=d.h(a3,r)
if(a6.$2(q,b)===0){if(r!==t){d.l(a3,r,d.h(a3,t))
d.l(a3,t,q)}++t}else if(a6.$2(q,a0)===0)for(;!0;)if(a6.$2(d.h(a3,s),a0)===0){--s
if(s<r)break
continue}else{p=a6.$2(d.h(a3,s),b)
if(typeof p!=="number")return p.a7()
o=s-1
if(p<0){d.l(a3,r,d.h(a3,t))
n=t+1
d.l(a3,t,d.h(a3,s))
d.l(a3,s,q)
t=n}else{d.l(a3,r,d.h(a3,s))
d.l(a3,s,q)}s=o
break}}H.d8(a3,t,s,a6)}else H.d8(a3,t,s,a6)},
R:function R(a){this.a=a},
p:function p(){},
bV:function bV(a,b){var _=this
_.a=a
_.b=b
_.c=0
_.d=null},
bX:function bX(a,b,c){this.a=a
this.b=b
this.$ti=c},
eQ:function eQ(a,b,c){this.a=a
this.b=b
this.$ti=c},
cU:function cU(a,b){this.a=null
this.b=a
this.c=b},
i8:function i8(a,b,c){this.a=a
this.b=b
this.$ti=c},
i9:function i9(a,b){this.a=a
this.b=b},
cK:function cK(){},
hS:function hS(){},
dk:function dk(){},
cs:function(a){var u,t=H.mr(a)
if(typeof t==="string")return t
u="minified:"+a
return u},
m9:function(a){return v.types[a]},
me:function(a,b){var u
if(b!=null){u=b.x
if(u!=null)return u}return!!J.a5(a).$ix},
f:function(a){var u
if(typeof a==="string")return a
if(typeof a==="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
u=J.aa(a)
if(typeof u!=="string")throw H.d(H.aB(a))
return u},
c4:function(a){var u=a.$identityHash
if(u==null){u=Math.random()*0x3fffffff|0
a.$identityHash=u}return u},
c5:function(a){return H.l0(a)+H.k4(H.cr(a),0,null)},
l0:function(a){var u,t,s,r,q,p,o,n=J.a5(a),m=n.constructor
if(typeof m=="function"){u=m.name
t=typeof u==="string"?u:null}else t=null
s=t==null
if(s||n===C.A||!!n.$icb){r=C.l(a)
if(s)t=r
if(r==="Object"){q=a.constructor
if(typeof q=="function"){p=String(q).match(/^\s*function\s*([\w$]*)\s*\(/)
o=p==null?null:p[1]
if(typeof o==="string"&&/^\w+$/.test(o))t=o}}return t}t=t
return H.cs(t.length>1&&C.c.bt(t,0)===36?C.c.aD(t,1):t)},
jO:function(a){var u,t,s,r,q=a.length
if(q<=500)return String.fromCharCode.apply(null,a)
for(u="",t=0;t<q;t=s){s=t+500
r=s<q?s:q
u+=String.fromCharCode.apply(null,a.slice(t,r))}return u},
la:function(a){var u,t,s,r=H.b([],[P.v])
for(u=a.length,t=0;t<a.length;a.length===u||(0,H.o)(a),++t){s=a[t]
if(typeof s!=="number"||Math.floor(s)!==s)throw H.d(H.aB(s))
if(s<=65535)r.push(s)
else if(s<=1114111){r.push(55296+(C.d.bb(s-65536,10)&1023))
r.push(56320+(s&1023))}else throw H.d(H.aB(s))}return H.jO(r)},
l9:function(a){var u,t,s
for(u=a.length,t=0;t<u;++t){s=a[t]
if(typeof s!=="number"||Math.floor(s)!==s)throw H.d(H.aB(s))
if(s<0)throw H.d(H.aB(s))
if(s>65535)return H.la(a)}return H.jO(a)},
l8:function(a){var u
if(a<=65535)return String.fromCharCode(a)
if(a<=1114111){u=a-65536
return String.fromCharCode((55296|C.d.bb(u,10))>>>0,56320|u&1023)}throw H.d(P.aN(a,0,1114111,null,null))},
bw:function(a){if(a.date===void 0)a.date=new Date(a.a)
return a.date},
l7:function(a){var u=H.bw(a).getFullYear()+0
return u},
l5:function(a){var u=H.bw(a).getMonth()+1
return u},
l1:function(a){var u=H.bw(a).getDate()+0
return u},
l2:function(a){var u=H.bw(a).getHours()+0
return u},
l4:function(a){var u=H.bw(a).getMinutes()+0
return u},
l6:function(a){var u=H.bw(a).getSeconds()+0
return u},
l3:function(a){var u=H.bw(a).getMilliseconds()+0
return u},
r:function(a){throw H.d(H.aB(a))},
c:function(a,b){if(a==null)J.bk(a)
throw H.d(H.bf(a,b))},
bf:function(a,b){var u,t,s="index"
if(typeof b!=="number"||Math.floor(b)!==b)return new P.aC(!0,b,s,null)
u=J.bk(a)
if(!(b<0)){if(typeof u!=="number")return H.r(u)
t=b>=u}else t=!0
if(t)return P.L(b,a,s,null,u)
return P.d5(b,s)},
m2:function(a,b,c){var u="Invalid value"
if(a>c)return new P.bx(0,c,!0,a,"start",u)
if(b!=null)if(b<a||b>c)return new P.bx(a,c,!0,b,"end",u)
return new P.aC(!0,b,"end",null)},
aB:function(a){return new P.aC(!0,a,null,null)},
d:function(a){var u
if(a==null)a=new P.d2()
u=new Error()
u.dartException=a
if("defineProperty" in Object){Object.defineProperty(u,"message",{get:H.kl})
u.name=""}else u.toString=H.kl
return u},
kl:function(){return J.aa(this.dartException)},
n:function(a){throw H.d(a)},
o:function(a){throw H.d(P.bM(a))},
ax:function(a){var u,t,s,r,q,p
a=H.kj(a.replace(String({}),'$receiver$'))
u=a.match(/\\\$[a-zA-Z]+\\\$/g)
if(u==null)u=H.b([],[P.t])
t=u.indexOf("\\$arguments\\$")
s=u.indexOf("\\$argumentsExpr\\$")
r=u.indexOf("\\$expr\\$")
q=u.indexOf("\\$method\\$")
p=u.indexOf("\\$receiver\\$")
return new H.hG(a.replace(new RegExp('\\\\\\$arguments\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$argumentsExpr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$expr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$method\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$receiver\\\\\\$','g'),'((?:x|[^x])*)'),t,s,r,q,p)},
hH:function(a){return function($expr$){var $argumentsExpr$='$arguments$'
try{$expr$.$method$($argumentsExpr$)}catch(u){return u.message}}(a)},
jV:function(a){return function($expr$){try{$expr$.$method$}catch(u){return u.message}}(a)},
jK:function(a,b){return new H.fW(a,b==null?null:b.method)},
je:function(a,b){var u=b==null,t=u?null:b.method
return new H.fj(a,t,u?null:b.receiver)},
el:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=null,f=new H.j0(a)
if(a==null)return
if(typeof a!=="object")return a
if("dartException" in a)return f.$1(a.dartException)
else if(!("message" in a))return a
u=a.message
if("number" in a&&typeof a.number=="number"){t=a.number
s=t&65535
if((C.d.bb(t,16)&8191)===10)switch(s){case 438:return f.$1(H.je(H.f(u)+" (Error "+s+")",g))
case 445:case 5007:return f.$1(H.jK(H.f(u)+" (Error "+s+")",g))}}if(a instanceof TypeError){r=$.ko()
q=$.kp()
p=$.kq()
o=$.kr()
n=$.ku()
m=$.kv()
l=$.kt()
$.ks()
k=$.kx()
j=$.kw()
i=r.ad(u)
if(i!=null)return f.$1(H.je(u,i))
else{i=q.ad(u)
if(i!=null){i.method="call"
return f.$1(H.je(u,i))}else{i=p.ad(u)
if(i==null){i=o.ad(u)
if(i==null){i=n.ad(u)
if(i==null){i=m.ad(u)
if(i==null){i=l.ad(u)
if(i==null){i=o.ad(u)
if(i==null){i=k.ad(u)
if(i==null){i=j.ad(u)
h=i!=null}else h=!0}else h=!0}else h=!0}else h=!0}else h=!0}else h=!0}else h=!0
if(h)return f.$1(H.jK(u,i))}}return f.$1(new H.hR(typeof u==="string"?u:""))}if(a instanceof RangeError){if(typeof u==="string"&&u.indexOf("call stack")!==-1)return new P.da()
u=function(b){try{return String(b)}catch(e){}return null}(a)
return f.$1(new P.aC(!1,g,g,typeof u==="string"?u.replace(/^RangeError:\s*/,""):u))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof u==="string"&&u==="too much recursion")return new P.da()
return a},
ju:function(a){var u
if(a==null)return new H.e_(a)
u=a.$cachedTrace
if(u!=null)return u
return a.$cachedTrace=new H.e_(a)},
m6:function(a,b){var u,t,s,r=a.length
for(u=0;u<r;u=s){t=u+1
s=t+1
b.l(0,a[u],a[t])}return b},
md:function(a,b,c,d,e,f){switch(b){case 0:return a.$0()
case 1:return a.$1(c)
case 2:return a.$2(c,d)
case 3:return a.$3(c,d,e)
case 4:return a.$4(c,d,e,f)}throw H.d(P.i("Unsupported number of arguments for wrapped closure"))},
cq:function(a,b){var u
if(a==null)return
u=a.$identity
if(!!u)return u
u=function(c,d,e){return function(f,g,h,i){return e(c,d,f,g,h,i)}}(a,b,H.md)
a.$identity=u
return u},
kM:function(a,b,c,d,e,f,g){var u,t,s,r,q,p,o,n,m=null,l=b[0],k=l.$callName,j=e?Object.create(new H.hp().constructor.prototype):Object.create(new H.bI(m,m,m,m).constructor.prototype)
j.$initialize=j.constructor
if(e)u=function static_tear_off(){this.$initialize()}
else{t=$.an
if(typeof t!=="number")return t.w()
$.an=t+1
t=new Function("a,b,c,d"+t,"this.$initialize(a,b,c,d"+t+")")
u=t}j.constructor=u
u.prototype=j
if(!e){s=H.jD(a,l,f)
s.$reflectionInfo=d}else{j.$static_name=g
s=l}r=H.kI(d,e,f)
j.$S=r
j[k]=s
for(q=s,p=1;p<b.length;++p){o=b[p]
n=o.$callName
if(n!=null){o=e?o:H.jD(a,o,f)
j[n]=o}if(p===c){o.$reflectionInfo=d
q=o}}j.$C=q
j.$R=l.$R
j.$D=l.$D
return u},
kI:function(a,b,c){var u
if(typeof a=="number")return function(d,e){return function(){return d(e)}}(H.m9,a)
if(typeof a=="function")if(b)return a
else{u=c?H.jB:H.j3
return function(d,e){return function(){return d.apply({$receiver:e(this)},arguments)}}(a,u)}throw H.d("Error in functionType of tearoff")},
kJ:function(a,b,c,d){var u=H.j3
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,u)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,u)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,u)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,u)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,u)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,u)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,u)}},
jD:function(a,b,c){var u,t,s,r,q,p,o
if(c)return H.kL(a,b)
u=b.$stubName
t=b.length
s=a[u]
r=b==null?s==null:b===s
q=!r||t>=27
if(q)return H.kJ(t,!r,u,b)
if(t===0){r=$.an
if(typeof r!=="number")return r.w()
$.an=r+1
p="self"+r
r="return function(){var "+p+" = this."
q=$.bJ
return new Function(r+H.f(q==null?$.bJ=H.ex("self"):q)+";return "+p+"."+H.f(u)+"();}")()}o="abcdefghijklmnopqrstuvwxyz".split("").splice(0,t).join(",")
r=$.an
if(typeof r!=="number")return r.w()
$.an=r+1
o+=r
r="return function("+o+"){return this."
q=$.bJ
return new Function(r+H.f(q==null?$.bJ=H.ex("self"):q)+"."+H.f(u)+"("+o+");}")()},
kK:function(a,b,c,d){var u=H.j3,t=H.jB
switch(b?-1:a){case 0:throw H.d(H.ld("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,u,t)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,u,t)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,u,t)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,u,t)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,u,t)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,u,t)
default:return function(e,f,g,h){return function(){h=[g(this)]
Array.prototype.push.apply(h,arguments)
return e.apply(f(this),h)}}(d,u,t)}},
kL:function(a,b){var u,t,s,r,q,p,o,n=$.bJ
if(n==null)n=$.bJ=H.ex("self")
u=$.jA
if(u==null)u=$.jA=H.ex("receiver")
t=b.$stubName
s=b.length
r=a[t]
q=b==null?r==null:b===r
p=!q||s>=28
if(p)return H.kK(s,!q,t,b)
if(s===1){n="return function(){return this."+H.f(n)+"."+H.f(t)+"(this."+H.f(u)+");"
u=$.an
if(typeof u!=="number")return u.w()
$.an=u+1
return new Function(n+u+"}")()}o="abcdefghijklmnopqrstuvwxyz".split("").splice(0,s-1).join(",")
n="return function("+o+"){return this."+H.f(n)+"."+H.f(t)+"(this."+H.f(u)+", "+o+");"
u=$.an
if(typeof u!=="number")return u.w()
$.an=u+1
return new Function(n+u+"}")()},
jr:function(a,b,c,d,e,f,g){return H.kM(a,b,c,d,!!e,!!f,g)},
j3:function(a){return a.a},
jB:function(a){return a.c},
ex:function(a){var u,t,s,r=new H.bI("self","target","receiver","name"),q=J.jb(Object.getOwnPropertyNames(r))
for(u=q.length,t=0;t<u;++t){s=q[t]
if(r[s]===a)return s}},
mi:function(a,b){throw H.d(H.kH(a,H.cs(b.substring(2))))},
k:function(a,b){var u
if(a!=null)u=(typeof a==="object"||typeof a==="function")&&J.a5(a)[b]
else u=!0
if(u)return a
H.mi(a,b)},
m4:function(a){var u
if("$S" in a){u=a.$S
if(typeof u=="number")return v.types[u]
else return a.$S()}return},
kH:function(a,b){return new H.ey("CastError: "+P.j9(a)+": type '"+H.f(H.lY(a))+"' is not a subtype of type '"+b+"'")},
lY:function(a){var u,t=J.a5(a)
if(!!t.$ibK){u=H.m4(t)
if(u!=null)return H.mj(u)
return"Closure"}return H.c5(a)},
mq:function(a){throw H.d(new P.eI(a))},
ld:function(a){return new H.ha(a)},
kb:function(a){return v.getIsolateTag(a)},
b:function(a,b){a.$ti=b
return a},
cr:function(a){if(a==null)return
return a.$ti},
mY:function(a,b,c){return H.j_(a["$a"+H.f(c)],H.cr(b))},
m8:function(a,b,c,d){var u=H.j_(a["$a"+H.f(c)],H.cr(b))
return u==null?null:u[d]},
kc:function(a,b,c){var u=H.j_(a["$a"+H.f(b)],H.cr(a))
return u==null?null:u[c]},
aX:function(a,b){var u=H.cr(a)
return u==null?null:u[b]},
mj:function(a){return H.bd(a,null)},
bd:function(a,b){var u,t
if(a==null)return"dynamic"
if(a===-1)return"void"
if(typeof a==="object"&&a!==null&&a.constructor===Array)return H.cs(a[0].name)+H.k4(a,1,b)
if(typeof a=="function")return H.cs(a.name)
if(a===-2)return"dynamic"
if(typeof a==="number"){if(b==null||a<0||a>=b.length)return"unexpected-generic-index:"+H.f(a)
u=b.length
t=u-a-1
if(t<0||t>=u)return H.c(b,t)
return H.f(b[t])}if('func' in a)return H.lt(a,b)
if('futureOr' in a)return"FutureOr<"+H.bd("type" in a?a.type:null,b)+">"
return"unknown-reified-type"},
lt:function(a,a0){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b=", "
if("bounds" in a){u=a.bounds
if(a0==null){a0=H.b([],[P.t])
t=null}else t=a0.length
s=a0.length
for(r=u.length,q=r;q>0;--q)a0.push("T"+(s+q))
for(p="<",o="",q=0;q<r;++q,o=b){p+=o
n=a0.length
m=n-q-1
if(m<0)return H.c(a0,m)
p=C.c.w(p,a0[m])
l=u[q]
if(l!=null&&l!==P.a3)p+=" extends "+H.bd(l,a0)}p+=">"}else{p=""
t=null}k=!!a.v?"void":H.bd(a.ret,a0)
if("args" in a){j=a.args
for(n=j.length,i="",h="",g=0;g<n;++g,h=b){f=j[g]
i=i+h+H.bd(f,a0)}}else{i=""
h=""}if("opt" in a){e=a.opt
i+=h+"["
for(n=e.length,h="",g=0;g<n;++g,h=b){f=e[g]
i=i+h+H.bd(f,a0)}i+="]"}if("named" in a){d=a.named
i+=h+"{"
for(n=H.m5(d),m=n.length,h="",g=0;g<m;++g,h=b){c=n[g]
i=i+h+H.bd(d[c],a0)+(" "+H.f(c))}i+="}"}if(t!=null)a0.length=t
return p+"("+i+") => "+k},
k4:function(a,b,c){var u,t,s,r,q,p
if(a==null)return""
u=new P.aR("")
for(t=b,s="",r=!0,q="";t<a.length;++t,s=", "){u.a=q+s
p=a[t]
if(p!=null)r=!1
q=u.a+=H.bd(p,c)}return"<"+u.i(0)+">"},
j_:function(a,b){if(a==null)return b
a=a.apply(null,b)
if(a==null)return
if(typeof a==="object"&&a!==null&&a.constructor===Array)return a
if(typeof a=="function")return a.apply(null,b)
return b},
mW:function(a,b,c){return a.apply(b,H.j_(J.a5(b)["$a"+H.f(c)],H.cr(b)))},
mX:function(a,b,c){Object.defineProperty(a,b,{value:c,enumerable:false,writable:true,configurable:true})},
mf:function(a){var u,t,s,r,q=$.kd.$1(a),p=$.iJ[q]
if(p!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}u=$.iO[q]
if(u!=null)return u
t=v.interceptorsByTag[q]
if(t==null){q=$.k7.$2(a,q)
if(q!=null){p=$.iJ[q]
if(p!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}u=$.iO[q]
if(u!=null)return u
t=v.interceptorsByTag[q]}}if(t==null)return
u=t.prototype
s=q[0]
if(s==="!"){p=H.iP(u)
$.iJ[q]=p
Object.defineProperty(a,v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}if(s==="~"){$.iO[q]=u
return u}if(s==="-"){r=H.iP(u)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:r,enumerable:false,writable:true,configurable:true})
return r.i}if(s==="+")return H.kg(a,u)
if(s==="*")throw H.d(P.jW(q))
if(v.leafTags[q]===true){r=H.iP(u)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:r,enumerable:false,writable:true,configurable:true})
return r.i}else return H.kg(a,u)},
kg:function(a,b){var u=Object.getPrototypeOf(a)
Object.defineProperty(u,v.dispatchPropertyName,{value:J.jx(b,u,null,null),enumerable:false,writable:true,configurable:true})
return b},
iP:function(a){return J.jx(a,!1,null,!!a.$ix)},
mg:function(a,b,c){var u=b.prototype
if(v.leafTags[a]===true)return H.iP(u)
else return J.jx(u,c,null,null)},
mb:function(){if(!0===$.jv)return
$.jv=!0
H.mc()},
mc:function(){var u,t,s,r,q,p,o,n
$.iJ=Object.create(null)
$.iO=Object.create(null)
H.ma()
u=v.interceptorsByTag
t=Object.getOwnPropertyNames(u)
if(typeof window!="undefined"){window
s=function(){}
for(r=0;r<t.length;++r){q=t[r]
p=$.ki.$1(q)
if(p!=null){o=H.mg(q,u[q],p)
if(o!=null){Object.defineProperty(p,v.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
s.prototype=p}}}}for(r=0;r<t.length;++r){q=t[r]
if(/^[A-Za-z_]/.test(q)){n=u[q]
u["!"+q]=n
u["~"+q]=n
u["-"+q]=n
u["+"+q]=n
u["*"+q]=n}}},
ma:function(){var u,t,s,r,q,p,o=C.r()
o=H.bE(C.t,H.bE(C.u,H.bE(C.m,H.bE(C.m,H.bE(C.v,H.bE(C.w,H.bE(C.x(C.l),o)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){u=dartNativeDispatchHooksTransformer
if(typeof u=="function")u=[u]
if(u.constructor==Array)for(t=0;t<u.length;++t){s=u[t]
if(typeof s=="function")o=s(o)||o}}r=o.getTag
q=o.getUnknownTag
p=o.prototypeForTag
$.kd=new H.iL(r)
$.k7=new H.iM(q)
$.ki=new H.iN(p)},
bE:function(a,b){return a(b)||b},
kT:function(a,b,c,d,e,f){var u=b?"m":"",t=c?"":"i",s=d?"u":"",r=e?"s":"",q=f?"g":"",p=function(g,h){try{return new RegExp(g,h)}catch(o){return o}}(a,u+t+s+r+q)
if(p instanceof RegExp)return p
throw H.d(new P.f1("Illegal RegExp pattern ("+String(p)+")",a))},
mn:function(a,b,c){var u=a.indexOf(b,c)
return u>=0},
m3:function(a){if(a.indexOf("$",0)>=0)return a.replace(/\$/g,"$$$$")
return a},
kj:function(a){if(/[[\]{}()*+?.\\^$|]/.test(a))return a.replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
return a},
kk:function(a,b,c){var u=H.mo(a,b,c)
return u},
mo:function(a,b,c){var u,t,s,r
if(b===""){if(a==="")return c
u=a.length
for(t=c,s=0;s<u;++s)t=t+a[s]+c
return t.charCodeAt(0)==0?t:t}r=a.indexOf(b,0)
if(r<0)return a
if(a.length<500||c.indexOf("$",0)>=0)return a.split(b).join(c)
return a.replace(new RegExp(H.kj(b),'g'),H.m3(c))},
hG:function hG(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
fW:function fW(a,b){this.a=a
this.b=b},
fj:function fj(a,b,c){this.a=a
this.b=b
this.c=c},
hR:function hR(a){this.a=a},
j0:function j0(a){this.a=a},
e_:function e_(a){this.a=a
this.b=null},
bK:function bK(){},
hv:function hv(){},
hp:function hp(){},
bI:function bI(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
ey:function ey(a){this.a=a},
ha:function ha(a){this.a=a},
G:function G(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
fi:function fi(a){this.a=a},
fn:function fn(a,b){this.a=a
this.b=b
this.c=null},
bs:function bs(a,b){this.a=a
this.$ti=b},
fo:function fo(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
iL:function iL(a){this.a=a},
iM:function iM(a){this.a=a},
iN:function iN(a){this.a=a},
fh:function fh(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
cn:function(a){return a},
aA:function(a,b,c){if(a>>>0!==a||a>=c)throw H.d(H.bf(b,a))},
ls:function(a,b,c){var u
if(!(a>>>0!==a))u=b>>>0!==b||a>b||b>c
else u=!0
if(u)throw H.d(H.m2(a,b,c))
return b},
c2:function c2(){},
cZ:function cZ(){},
c1:function c1(){},
d_:function d_(){},
fQ:function fQ(){},
fR:function fR(){},
fS:function fS(){},
fT:function fT(){},
fU:function fU(){},
d0:function d0(){},
fV:function fV(){},
cd:function cd(){},
ce:function ce(){},
cf:function cf(){},
cg:function cg(){},
m5:function(a){return J.jG(a?Object.keys(a):[],null)},
mr:function(a){return v.mangledGlobalNames[a]},
mh:function(a){if(typeof dartPrint=="function"){dartPrint(a)
return}if(typeof console=="object"&&typeof console.log!="undefined"){console.log(a)
return}if(typeof window=="object")return
if(typeof print=="function"){print(a)
return}throw"Unable to print message: "+String(a)}},J={
jx:function(a,b,c,d){return{i:a,p:b,e:c,x:d}},
iK:function(a){var u,t,s,r,q=a[v.dispatchPropertyName]
if(q==null)if($.jv==null){H.mb()
q=a[v.dispatchPropertyName]}if(q!=null){u=q.p
if(!1===u)return q.i
if(!0===u)return a
t=Object.getPrototypeOf(a)
if(u===t)return q.i
if(q.e===t)throw H.d(P.jW("Return interceptor for "+H.f(u(a,q))))}s=a.constructor
r=s==null?null:s[$.jy()]
if(r!=null)return r
r=H.mf(a)
if(r!=null)return r
if(typeof a=="function")return C.B
u=Object.getPrototypeOf(a)
if(u==null)return C.o
if(u===Object.prototype)return C.o
if(typeof s=="function"){Object.defineProperty(s,$.jy(),{value:C.k,enumerable:false,writable:true,configurable:true})
return C.k}return C.k},
kR:function(a,b){if(typeof a!=="number"||Math.floor(a)!==a)throw H.d(P.j2(a,"length","is not an integer"))
if(a<0||a>4294967295)throw H.d(P.aN(a,0,4294967295,"length",null))
return J.jG(new Array(a),b)},
jG:function(a,b){return J.jb(H.b(a,[b]))},
jb:function(a){a.fixed$length=Array
return a},
kS:function(a,b){return J.cv(a,b)},
a5:function(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.cO.prototype
return J.fg.prototype}if(typeof a=="string")return J.bq.prototype
if(a==null)return J.cP.prototype
if(typeof a=="boolean")return J.ff.prototype
if(a.constructor==Array)return J.b1.prototype
if(typeof a!="object"){if(typeof a=="function")return J.b2.prototype
return a}if(a instanceof P.a3)return a
return J.iK(a)},
ej:function(a){if(typeof a=="string")return J.bq.prototype
if(a==null)return a
if(a.constructor==Array)return J.b1.prototype
if(typeof a!="object"){if(typeof a=="function")return J.b2.prototype
return a}if(a instanceof P.a3)return a
return J.iK(a)},
js:function(a){if(a==null)return a
if(a.constructor==Array)return J.b1.prototype
if(typeof a!="object"){if(typeof a=="function")return J.b2.prototype
return a}if(a instanceof P.a3)return a
return J.iK(a)},
m7:function(a){if(typeof a=="number")return J.bU.prototype
if(typeof a=="string")return J.bq.prototype
if(a==null)return a
if(!(a instanceof P.a3))return J.cb.prototype
return a},
jt:function(a){if(a==null)return a
if(typeof a!="object"){if(typeof a=="function")return J.b2.prototype
return a}if(a instanceof P.a3)return a
return J.iK(a)},
w:function(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.a5(a).q(a,b)},
cu:function(a,b){if(typeof b==="number")if(a.constructor==Array||typeof a=="string"||H.me(a,a[v.dispatchPropertyName]))if(b>>>0===b&&b<a.length)return a[b]
return J.ej(a).h(a,b)},
kC:function(a,b,c){return J.jt(a).fj(a,b,c)},
kD:function(a,b,c,d){return J.jt(a).fI(a,b,c,d)},
cv:function(a,b){return J.m7(a).ai(a,b)},
j1:function(a,b){return J.js(a).G(a,b)},
kE:function(a,b){return J.js(a).F(a,b)},
bH:function(a){return J.a5(a).gI(a)},
bj:function(a){return J.js(a).gP(a)},
bk:function(a){return J.ej(a).gk(a)},
kF:function(a,b){return J.jt(a).hq(a,b)},
aa:function(a){return J.a5(a).i(a)},
a:function a(){},
ff:function ff(){},
cP:function cP(){},
cQ:function cQ(){},
h_:function h_(){},
cb:function cb(){},
b2:function b2(){},
b1:function b1(a){this.$ti=a},
jc:function jc(a){this.$ti=a},
a_:function a_(a,b){var _=this
_.a=a
_.b=b
_.c=0
_.d=null},
bU:function bU(){},
cO:function cO(){},
fg:function fg(){},
bq:function bq(){}},P={
lj:function(){var u,t,s={}
if(self.scheduleImmediate!=null)return P.lZ()
if(self.MutationObserver!=null&&self.document!=null){u=self.document.createElement("div")
t=self.document.createElement("span")
s.a=null
new self.MutationObserver(H.cq(new P.ib(s),1)).observe(u,{childList:true})
return new P.ia(s,u,t)}else if(self.setImmediate!=null)return P.m_()
return P.m0()},
lk:function(a){self.scheduleImmediate(H.cq(new P.ic(a),0))},
ll:function(a){self.setImmediate(H.cq(new P.id(a),0))},
lm:function(a){P.jl(C.j,a)},
jl:function(a,b){var u=C.d.a9(a.a,1000)
return P.lr(u<0?0:u,b)},
lr:function(a,b){var u=new P.iy()
u.e2(a,b)
return u},
mU:function(a){return new P.bC(a,1)},
ln:function(){return C.C},
lo:function(a){return new P.bC(a,3)},
lw:function(a,b){return new P.ix(a,[b])},
lS:function(){var u,t
for(;u=$.bD,u!=null;){$.cp=null
t=u.b
$.bD=t
if(t==null)$.co=null
u.a.$0()}},
lX:function(){$.jp=!0
try{P.lS()}finally{$.cp=null
$.jp=!1
if($.bD!=null)$.jz().$1(P.k8())}},
lV:function(a){var u=new P.dt(a)
if($.bD==null){$.bD=$.co=u
if(!$.jp)$.jz().$1(P.k8())}else $.co=$.co.b=u},
lW:function(a){var u,t,s=$.bD
if(s==null){P.lV(a)
$.cp=$.co
return}u=new P.dt(a)
t=$.cp
if(t==null){u.b=s
$.bD=$.cp=u}else{u.b=t.b
$.cp=t.b=u
if(u.b==null)$.co=u}},
jU:function(a,b){var u=$.az
if(u===C.e)return P.jl(a,b)
return P.jl(a,u.fO(b))},
k5:function(a,b,c,d,e){var u={}
u.a=d
P.lW(new P.iG(u,e))},
lT:function(a,b,c,d){var u,t=$.az
if(t===c)return d.$0()
$.az=c
u=t
try{t=d.$0()
return t}finally{$.az=u}},
lU:function(a,b,c,d,e){var u,t=$.az
if(t===c)return d.$1(e)
$.az=c
u=t
try{t=d.$1(e)
return t}finally{$.az=u}},
ib:function ib(a){this.a=a},
ia:function ia(a,b,c){this.a=a
this.b=b
this.c=c},
ic:function ic(a){this.a=a},
id:function id(a){this.a=a},
iy:function iy(){},
iz:function iz(a,b){this.a=a
this.b=b},
bC:function bC(a,b){this.a=a
this.b=b},
cj:function cj(a){var _=this
_.a=a
_.d=_.c=_.b=null},
ix:function ix(a,b){this.a=a
this.$ti=b},
dt:function dt(a){this.a=a
this.b=null},
dc:function dc(){},
hs:function hs(){},
iB:function iB(){},
iG:function iG(a,b){this.a=a
this.b=b},
ir:function ir(){},
is:function is(a,b){this.a=a
this.b=b},
it:function it(a,b,c){this.a=a
this.b=b
this.c=c},
kU:function(a,b){return new H.G([a,b])},
kV:function(a){return H.m6(a,new H.G([null,null]))},
jH:function(a){return new P.io([a])},
jo:function(){var u=Object.create(null)
u["<non-identifier-key>"]=u
delete u["<non-identifier-key>"]
return u},
lq:function(a,b){var u=new P.dI(a,b)
u.c=a.e
return u},
kQ:function(a,b,c){var u,t
if(P.jq(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}u=H.b([],[P.t])
$.a4.push(a)
try{P.lv(a,u)}finally{if(0>=$.a4.length)return H.c($.a4,-1)
$.a4.pop()}t=P.jS(b,u,", ")+c
return t.charCodeAt(0)==0?t:t},
ja:function(a,b,c){var u,t
if(P.jq(a))return b+"..."+c
u=new P.aR(b)
$.a4.push(a)
try{t=u
t.a=P.jS(t.a,a,", ")}finally{if(0>=$.a4.length)return H.c($.a4,-1)
$.a4.pop()}u.a+=c
t=u.a
return t.charCodeAt(0)==0?t:t},
jq:function(a){var u,t
for(u=$.a4.length,t=0;t<u;++t)if(a===$.a4[t])return!0
return!1},
lv:function(a,b){var u,t,s,r,q,p,o,n=a.gP(a),m=0,l=0
while(!0){if(!(m<80||l<3))break
if(!n.v())return
u=H.f(n.gH(n))
b.push(u)
m+=u.length+2;++l}if(!n.v()){if(l<=5)return
if(0>=b.length)return H.c(b,-1)
t=b.pop()
if(0>=b.length)return H.c(b,-1)
s=b.pop()}else{r=n.gH(n);++l
if(!n.v()){if(l<=4){b.push(H.f(r))
return}t=H.f(r)
if(0>=b.length)return H.c(b,-1)
s=b.pop()
m+=t.length+2}else{q=n.gH(n);++l
for(;n.v();r=q,q=p){p=n.gH(n);++l
if(l>100){while(!0){if(!(m>75&&l>3))break
if(0>=b.length)return H.c(b,-1)
m-=b.pop().length+2;--l}b.push("...")
return}}s=H.f(r)
t=H.f(q)
m+=t.length+s.length+4}}if(l>b.length+2){m+=5
o="..."}else o=null
while(!0){if(!(m>80&&b.length>3))break
if(0>=b.length)return H.c(b,-1)
m-=b.pop().length+2
if(o==null){m+=5
o="..."}}if(o!=null)b.push(o)
b.push(s)
b.push(t)},
jI:function(a){var u,t={}
if(P.jq(a))return"{...}"
u=new P.aR("")
try{$.a4.push(a)
u.a+="{"
t.a=!0
J.kE(a,new P.ft(t,u))
u.a+="}"}finally{if(0>=$.a4.length)return H.c($.a4,-1)
$.a4.pop()}t=u.a
return t.charCodeAt(0)==0?t:t},
io:function io(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
ip:function ip(a){this.a=a
this.c=this.b=null},
dI:function dI(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
fd:function fd(){},
fp:function fp(){},
q:function q(){},
fs:function fs(){},
ft:function ft(a,b){this.a=a
this.b=b},
a2:function a2(){},
iu:function iu(){},
dJ:function dJ(){},
eA:function eA(){},
eD:function eD(){},
eR:function eR(){},
hV:function hV(){},
hW:function hW(){},
iA:function iA(a){this.b=0
this.c=a},
kP:function(a){if(a instanceof H.bK)return a.i(0)
return"Instance of '"+H.f(H.c5(a))+"'"},
kW:function(a,b,c){var u,t,s=J.kR(a,c)
if(a!==0&&!0)for(u=s.length,t=0;t<u;++t)s[t]=b
return s},
jg:function(a,b,c){var u,t=H.b([],[c])
for(u=J.bj(a);u.v();)t.push(u.gH(u))
if(b)return t
return J.jb(t)},
jj:function(a){var u,t=a.length,s=P.ji(0,null,t)
if(typeof s!=="number")return s.a7()
u=s<t
return H.l9(u?C.a.dR(a,0,s):a)},
lb:function(a){return new H.fh(a,H.kT(a,!1,!0,!1,!1,!1))},
jS:function(a,b,c){var u=J.bj(b)
if(!u.v())return a
if(c.length===0){do a+=H.f(u.gH(u))
while(u.v())}else{a+=H.f(u.gH(u))
for(;u.v();)a=a+c+H.f(u.gH(u))}return a},
k3:function(a,b,c,d){var u,t,s,r,q,p,o="0123456789ABCDEF"
if(c===C.h){u=$.kB().b
u=u.test(b)}else u=!1
if(u)return b
t=C.z.fT(b)
for(u=t.length,s=0,r="";s<u;++s){q=t[s]
if(q<128){p=q>>>4
if(p>=8)return H.c(a,p)
p=(a[p]&1<<(q&15))!==0}else p=!1
if(p)r+=H.l8(q)
else r=r+"%"+o[q>>>4&15]+o[q&15]}return r.charCodeAt(0)==0?r:r},
kN:function(a){var u=Math.abs(a),t=a<0?"-":""
if(u>=1000)return""+a
if(u>=100)return t+"0"+u
if(u>=10)return t+"00"+u
return t+"000"+u},
kO:function(a){if(a>=100)return""+a
if(a>=10)return"0"+a
return"00"+a},
cF:function(a){if(a>=10)return""+a
return"0"+a},
j9:function(a){if(typeof a==="number"||typeof a==="boolean"||null==a)return J.aa(a)
if(typeof a==="string")return JSON.stringify(a)
return P.kP(a)},
j2:function(a,b,c){return new P.aC(!0,a,b,c)},
d5:function(a,b){return new P.bx(null,null,!0,a,b,"Value not in range")},
aN:function(a,b,c,d,e){return new P.bx(b,c,!0,a,d,"Invalid value")},
ji:function(a,b,c){var u
if(typeof a!=="number")return H.r(a)
if(0<=a){if(typeof c!=="number")return H.r(c)
u=a>c}else u=!0
if(u)throw H.d(P.aN(a,0,c,"start",null))
if(b!=null){if(!(a>b)){if(typeof c!=="number")return H.r(c)
u=b>c}else u=!0
if(u)throw H.d(P.aN(b,a,c,"end",null))
return b}return c},
jP:function(a,b){if(typeof a!=="number")return a.a7()
if(a<0)throw H.d(P.aN(a,0,null,b,null))},
L:function(a,b,c,d,e){var u=e==null?J.bk(b):e
return new P.f5(u,!0,a,c,"Index out of range")},
y:function(a){return new P.hT(a)},
jW:function(a){return new P.hQ(a)},
bM:function(a){return new P.eC(a)},
i:function(a){return new P.dB(a)},
kh:function(a){H.mh(a)},
be:function be(){},
ap:function ap(a,b){this.a=a
this.b=b},
J:function J(){},
bO:function bO(a){this.a=a},
eO:function eO(){},
eP:function eP(){},
bo:function bo(){},
d2:function d2(){},
aC:function aC(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
bx:function bx(a,b,c,d,e,f){var _=this
_.e=a
_.f=b
_.a=c
_.b=d
_.c=e
_.d=f},
f5:function f5(a,b,c,d,e){var _=this
_.f=a
_.a=b
_.b=c
_.c=d
_.d=e},
hT:function hT(a){this.a=a},
hQ:function hQ(a){this.a=a},
ho:function ho(a){this.a=a},
eC:function eC(a){this.a=a},
fZ:function fZ(){},
da:function da(){},
eI:function eI(a){this.a=a},
dB:function dB(a){this.a=a},
f1:function f1(a,b){this.a=a
this.b=b},
v:function v(){},
j:function j(){},
fe:function fe(){},
b4:function b4(){},
bW:function bW(){},
b5:function b5(){},
a9:function a9(){},
a3:function a3(){},
t:function t(){},
aR:function aR(a){this.a=a},
aW:function(a){var u,t,s,r,q
if(a==null)return
u=P.kU(P.t,null)
t=Object.getOwnPropertyNames(a)
for(s=t.length,r=0;r<t.length;t.length===s||(0,H.o)(t),++r){q=t[r]
u.l(0,q,a[q])}return u},
m1:function(a){var u={}
a.F(0,new P.iH(u))
return u},
iH:function iH(a){this.a=a},
eY:function eY(a,b){this.a=a
this.b=b},
eZ:function eZ(){},
f_:function f_(){},
im:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
lp:function(a){a=536870911&a+((67108863&a)<<3)
a^=a>>>11
return 536870911&a+((16383&a)<<15)},
iq:function iq(){},
a7:function a7(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=e},
b3:function b3(){},
fl:function fl(){},
b6:function b6(){},
fX:function fX(){},
h3:function h3(){},
ht:function ht(){},
l:function l(){},
b7:function b7(){},
hF:function hF(){},
dG:function dG(){},
dH:function dH(){},
dR:function dR(){},
dS:function dS(){},
e1:function e1(){},
e2:function e2(){},
e7:function e7(){},
e8:function e8(){},
er:function er(){},
es:function es(){},
et:function et(a){this.a=a},
eu:function eu(){},
bl:function bl(){},
fY:function fY(){},
du:function du(){},
hn:function hn(){},
dY:function dY(){},
dZ:function dZ(){}},W={
kG:function(){var u=document.createElement("a")
return u},
jC:function(){var u=document.createElement("canvas")
return u},
j8:function(a){return"wheel"},
il:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
k2:function(a,b,c,d){var u=W.il(W.il(W.il(W.il(0,a),b),c),d),t=536870911&u+((67108863&u)<<3)
t^=t>>>11
return 536870911&t+((16383&t)<<15)},
Z:function(a,b,c,d){var u=W.k6(new W.ij(c),W.h)
if(u!=null&&!0)J.kD(a,b,u,!1)
return new W.ii(a,b,u,!1)},
k6:function(a,b){var u=$.az
if(u===C.e)return a
return u.fP(a,b)},
m:function m(){},
em:function em(){},
eo:function eo(){},
ep:function ep(){},
cy:function cy(){},
bn:function bn(){},
aZ:function aZ(){},
eE:function eE(){},
H:function H(){},
bN:function bN(){},
eF:function eF(){},
ab:function ab(){},
ao:function ao(){},
eG:function eG(){},
eH:function eH(){},
eJ:function eJ(){},
eL:function eL(){},
cH:function cH(){},
cI:function cI(){},
eM:function eM(){},
eN:function eN(){},
ig:function ig(a,b){this.a=a
this.b=b},
U:function U(){},
h:function h(){},
e:function e(){},
aG:function aG(){},
eW:function eW(){},
eX:function eX(){},
f0:function f0(){},
aH:function aH(){},
f4:function f4(){},
bT:function bT(){},
br:function br(){},
fq:function fq(){},
fJ:function fJ(){},
fK:function fK(){},
fL:function fL(a){this.a=a},
fM:function fM(){},
fN:function fN(a){this.a=a},
aK:function aK(){},
fO:function fO(){},
at:function at(){},
ie:function ie(a){this.a=a},
F:function F(){},
d1:function d1(){},
aM:function aM(){},
h0:function h0(){},
h8:function h8(){},
h9:function h9(a){this.a=a},
hb:function hb(){},
aO:function aO(){},
hk:function hk(){},
aP:function aP(){},
hl:function hl(){},
aQ:function aQ(){},
hq:function hq(){},
hr:function hr(a){this.a=a},
av:function av(){},
aS:function aS(){},
aw:function aw(){},
hw:function hw(){},
hx:function hx(){},
hA:function hA(){},
aT:function aT(){},
by:function by(){},
hD:function hD(){},
hE:function hE(){},
b8:function b8(){},
hU:function hU(){},
i7:function i7(){},
bc:function bc(){},
cc:function cc(){},
ih:function ih(){},
dw:function dw(){},
ik:function ik(){},
dO:function dO(){},
iv:function iv(){},
iw:function iw(){},
ii:function ii(a,b,c,d){var _=this
_.b=a
_.c=b
_.d=c
_.e=d},
ij:function ij(a){this.a=a},
K:function K(){},
cL:function cL(a,b){var _=this
_.a=a
_.b=b
_.c=-1
_.d=null},
dv:function dv(){},
dx:function dx(){},
dy:function dy(){},
dz:function dz(){},
dA:function dA(){},
dC:function dC(){},
dD:function dD(){},
dE:function dE(){},
dF:function dF(){},
dK:function dK(){},
dL:function dL(){},
dM:function dM(){},
dN:function dN(){},
dP:function dP(){},
dQ:function dQ(){},
dT:function dT(){},
dU:function dU(){},
dV:function dV(){},
ch:function ch(){},
ci:function ci(){},
dW:function dW(){},
dX:function dX(){},
e0:function e0(){},
e3:function e3(){},
e4:function e4(){},
ck:function ck(){},
cl:function cl(){},
e5:function e5(){},
e6:function e6(){},
e9:function e9(){},
ea:function ea(){},
eb:function eb(){},
ec:function ec(){},
ed:function ed(){},
ee:function ee(){},
ef:function ef(){},
eg:function eg(){},
eh:function eh(){},
ei:function ei(){}},K={
X:function(a){var u=new K.hc()
u.dX(a)
return u},
en:function en(){},
cM:function cM(){},
cV:function cV(){},
aL:function aL(){this.a=null},
hc:function hc(){this.a=null}},L={db:function db(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},df:function df(a,b,c){this.a=a
this.b=b
this.c=c},dg:function dg(a){this.b=a
this.c=null},hB:function hB(){var _=this
_.d=_.c=_.b=_.a=null},di:function di(a){this.b=a
this.a=this.c=null}},O={
j5:function(a){var u=new O.aD([a])
u.b7(a)
return u},
aD:function aD(a){var _=this
_.c=_.b=_.a=null
_.$ti=a},
bY:function bY(){this.b=this.a=null},
jE:function(){var u=new O.cN()
u.b=V.k0()
u.c=new V.N(0.2,0.3,0.4,1)
u.d=new V.N(0.1,0.2,0.3,1)
u.e=V.cC(0.7)
u.f=V.cC(0.3)
u.r=V.cC(0.5)
u.x=V.cC(0.5)
u.y=new V.N(1,1,1,1)
u.z=V.cC(0.8)
u.r1=u.k4=u.k3=u.k2=u.k1=u.id=u.go=u.fy=u.fx=u.fr=u.dy=u.dx=u.db=u.cy=u.cx=u.ch=u.Q=!1
u.r2=1
return u},
bt:function(){var u,t=new O.cW(),s=O.j5(V.aJ)
t.e=s
s.aP(t.ges(),t.gev())
s=new O.ar(t,"emission")
s.c=new A.T(!1,!1,!1)
s.f=new V.S(0,0,0)
t.f=s
s=new O.ar(t,"ambient")
s.c=new A.T(!1,!1,!1)
s.f=new V.S(0,0,0)
t.r=s
s=new O.ar(t,"diffuse")
s.c=new A.T(!1,!1,!1)
s.f=new V.S(0,0,0)
t.x=s
s=new O.ar(t,"invDiffuse")
s.c=new A.T(!1,!1,!1)
s.f=new V.S(0,0,0)
t.y=s
s=new O.fA(t,"specular")
s.c=new A.T(!1,!1,!1)
s.f=new V.S(0,0,0)
s.ch=100
t.z=s
s=new O.fw(t,"bump")
s.c=new A.T(!1,!1,!1)
t.Q=s
t.ch=null
s=new O.ar(t,"reflect")
s.c=new A.T(!1,!1,!1)
s.f=new V.S(0,0,0)
t.cx=s
s=new O.fz(t,"refract")
s.c=new A.T(!1,!1,!1)
s.f=new V.S(0,0,0)
s.ch=1
t.cy=s
s=new O.fv(t,"alpha")
s.c=new A.T(!1,!1,!1)
s.f=1
t.db=s
s=new D.cS()
s.b7(D.a1)
s.e=H.b([],[D.ev])
s.f=H.b([],[D.eK])
s.r=H.b([],[D.h1])
s.x=H.b([],[D.hm])
s.z=s.y=null
s.cm(s.geq(),s.gf0(),s.gf4())
t.dx=s
u=new O.fy()
u.b=new V.N(0,0,0,0)
u.c=1
u.d=10
u.e=!1
t.dy=u
u=s.y
s=u==null?s.y=D.I():u
s.j(0,t.gfm())
s=t.dx
u=s.z
s=u==null?s.z=D.I():u
s.j(0,t.ge0())
t.fr=null
return t},
cN:function cN(){var _=this
_.rx=_.r2=_.r1=_.k4=_.k3=_.k2=_.k1=_.id=_.go=_.fy=_.fx=_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
f7:function f7(a,b){this.a=a
this.b=b},
f8:function f8(a){this.a=a},
fa:function fa(a,b){this.a=a
this.b=b},
f9:function f9(a){this.a=a},
fb:function fb(a,b){this.a=a
this.b=b},
fc:function fc(a,b){this.a=a
this.b=b},
cW:function cW(){var _=this
_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
fB:function fB(a,b){this.a=a
this.b=b},
fC:function fC(){},
fD:function fD(a,b){this.a=a
this.b=b},
fE:function fE(){},
fF:function fF(a,b){this.a=a
this.b=b},
fG:function fG(){},
fH:function fH(a,b){this.a=a
this.b=b},
fI:function fI(){},
fv:function fv(a,b){var _=this
_.f=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
cX:function cX(){},
fw:function fw(a,b){var _=this
_.a=a
_.b=b
_.e=_.d=_.c=null},
ar:function ar(a,b){var _=this
_.f=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
fy:function fy(){var _=this
_.e=_.d=_.c=_.b=null},
fz:function fz(a,b){var _=this
_.f=_.ch=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
fA:function fA(a,b){var _=this
_.f=_.ch=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
dd:function dd(){}},E={
ac:function(){var u,t=new E.aE()
t.a=""
t.b=!0
u=O.j5(E.aE)
t.y=u
u.aP(t.gh6(),t.gh9())
t.dy=t.dx=t.db=t.cy=t.cx=t.ch=t.Q=t.z=null
t.sa1(0,null)
t.sa6(null)
t.sT(null)
return t},
lc:function(a,b){var u=new E.h4(a)
u.dW(a,b)
return u},
jk:function(a){var u=document.getElementById(a)
if(u==null)throw H.d(P.i("Failed to find an element with the identifier, "+a+"."))
return E.li(u,!0,!0,!0,!1)},
li:function(a,b,c,d,e){var u,t,s=J.a5(a)
if(!!s.$ibn)return E.jT(a,!0,!0,!0,!1)
u=W.jC()
t=u.style
t.width="100%"
t.height="100%"
s.gd6(a).j(0,u)
return E.jT(u,!0,!0,!0,!1)},
jT:function(a,b,c,d,e){var u,t,s,r="mousemove",q=new E.de(),p=C.i.dM(a,"webgl2",P.kV(["alpha",!0,"depth",!0,"stencil",!1,"antialias",!0]))
if(p==null)H.n(P.i("Failed to get the rendering context for WebGL."))
q.b=a
q.c=p
q.e=E.lc(p,a)
p.getParameter(3379)
p.getParameter(34076)
u=new X.dl(a)
t=new X.fk()
t.c=new X.ad(!1,!1,!1)
t.d=P.jH(P.v)
u.b=t
t=new X.fP(u)
t.f=0
t.r=V.ai()
t.x=V.ai()
t.ch=t.Q=1
u.c=t
t=new X.fr(u)
t.r=0
t.x=V.ai()
t.cy=t.cx=t.ch=t.Q=1
u.d=t
t=new X.hC(u)
t.f=V.ai()
t.r=V.ai()
u.e=t
u.x=u.r=u.f=!1
u.y=null
t=H.b([],[[P.dc,P.a3]])
u.z=t
s=document
t.push(W.Z(s,"contextmenu",u.geD(),!1))
u.z.push(W.Z(a,"focus",u.geJ(),!1))
u.z.push(W.Z(a,"blur",u.gex(),!1))
u.z.push(W.Z(s,"keyup",u.geN(),!1))
u.z.push(W.Z(s,"keydown",u.geL(),!1))
u.z.push(W.Z(a,"mousedown",u.geR(),!1))
u.z.push(W.Z(a,"mouseup",u.geV(),!1))
u.z.push(W.Z(a,r,u.geT(),!1))
t=u.z
W.j8(a)
W.j8(a)
t.push(W.Z(a,W.j8(a),u.geX(),!1))
u.z.push(W.Z(s,r,u.geF(),!1))
u.z.push(W.Z(s,"mouseup",u.geH(),!1))
u.z.push(W.Z(s,"pointerlockchange",u.geZ(),!1))
u.z.push(W.Z(a,"touchstart",u.gfe(),!1))
u.z.push(W.Z(a,"touchend",u.gfa(),!1))
u.z.push(W.Z(a,"touchmove",u.gfc(),!1))
q.x=u
q.ch=!0
q.cx=!1
Date.now()
q.db=0
q.cR()
return q},
ew:function ew(){},
aE:function aE(){var _=this
_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
h4:function h4(a){var _=this
_.a=a
_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=null},
h5:function h5(a){this.a=a},
h6:function h6(a){this.a=a},
h7:function h7(a){this.a=a},
de:function de(){var _=this
_.db=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.e=_.d=_.c=_.b=null},
hz:function hz(a){this.a=a}},Z={
jn:function(a,b,c){var u=a.createBuffer()
a.bindBuffer(b,u)
a.bufferData(b,new Int16Array(H.cn(c)),35044)
a.bindBuffer(b,null)
return new Z.dr(b,u)},
ah:function(a){return new Z.aV(a)},
dr:function dr(a,b){this.a=a
this.b=b},
cz:function cz(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=0},
ds:function ds(a){this.a=a},
bm:function bm(a,b,c){var _=this
_.a=a
_.b=null
_.c=b
_.d=c},
cA:function cA(){this.a=null},
bp:function bp(a,b,c){this.a=a
this.b=b
this.c=c},
aV:function aV(a){this.a=a}},D={
I:function(){var u=new D.bQ()
u.d=0
return u},
ez:function ez(){},
bQ:function bQ(){var _=this
_.d=_.c=_.b=_.a=null},
eT:function eT(a){this.a=a},
eU:function eU(a){this.a=a},
V:function V(){this.b=null},
b_:function b_(){this.b=null},
b0:function b0(){this.b=null},
z:function z(a,b,c){var _=this
_.c=a
_.d=b
_.e=c
_.b=null},
ev:function ev(){},
eK:function eK(){},
a1:function a1(){},
cS:function cS(){var _=this
_.c=_.b=_.a=_.z=_.y=_.x=_.r=_.f=_.e=null},
h1:function h1(){},
hm:function hm(){}},X={cB:function cB(a,b){this.a=a
this.b=b},cR:function cR(a,b){this.a=a
this.b=b},fk:function fk(){var _=this
_.d=_.c=_.b=_.a=null},cT:function cT(a,b,c){var _=this
_.x=a
_.c=b
_.d=c
_.b=null},fr:function fr(a){var _=this
_.a=a
_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},ad:function ad(a,b,c){this.a=a
this.b=b
this.c=c},ae:function ae(a,b,c,d,e){var _=this
_.x=a
_.y=b
_.z=c
_.c=d
_.d=e
_.b=null},fP:function fP(a){var _=this
_.a=a
_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},c0:function c0(a,b,c){var _=this
_.x=a
_.c=b
_.d=c
_.b=null},h2:function h2(){},dh:function dh(a,b,c,d){var _=this
_.y=a
_.z=b
_.c=c
_.d=d
_.b=null},hC:function hC(a){var _=this
_.a=a
_.y=_.x=_.r=_.f=_.d=_.c=_.b=null},dl:function dl(a){var _=this
_.a=a
_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},
f3:function(a,b){var u=new X.f2(),t=new V.N(0,0,0,1)
u.a=t
u.b=a
u.c=2000
u.d=!0
u.e=0
u.f=!1
t=$.jR
if(t==null){t=V.jQ(0,0,1,1)
$.jR=t}u.r=t
return u},
bv:function(){var u,t=new X.d3()
t.c=1.0471975511965976
t.d=0.1
t.e=2000
t.saA(null)
t.sT(null)
u=t.c
if(!(Math.abs(u-1.0471975511965976)<$.A().a)){t.c=1.0471975511965976
u=new D.z("fov",u,1.0471975511965976)
u.b=!0
t.as(u)}u=t.d
if(!(Math.abs(u-0.1)<$.A().a)){t.d=0.1
u=new D.z("near",u,0.1)
u.b=!0
t.as(u)}u=t.e
if(!(Math.abs(u-2000)<$.A().a)){t.e=2000
u=new D.z("far",u,2000)
u.b=!0
t.as(u)}return t},
j4:function j4(){},
f2:function f2(){var _=this
_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
d3:function d3(){var _=this
_.f=_.e=_.d=_.c=_.b=_.a=null},
hu:function hu(){}},V={
cC:function(a){if(a<0)a=0
else if(a>1)a=1
return new V.N(a,a,a,1)},
bL:function(a,b,c){var u=a/255,t=b/255,s=c/255
if(u<0)u=0
else if(u>1)u=1
if(t<0)t=0
else if(t>1)t=1
if(s<0)s=0
else if(s>1)s=1
return new V.N(u,t,s,1)},
ms:function(a,b,c){var u
if(c<=b)return b
u=c-b
a=C.b.dN(a-b,u)
return(a<0?a+u:a)+b},
B:function(a,b,c){if(a==null)return C.c.ae("null",c)
return C.c.ae(C.b.hw(Math.abs(a-0)<$.A().a?0:a,b),c+b+1)},
bF:function(a,b,c){var u,t,s,r,q,p,o=H.b([],[P.t])
for(u=a.length,t=0,s=0;s<a.length;a.length===u||(0,H.o)(a),++s){r=V.B(a[s],b,c)
t=Math.max(t,r.length)
o.push(r)}for(u=o.length,q=u-1;q>=0;--q,u=p){if(q>=u)return H.c(o,q)
u=C.c.ae(o[q],t)
p=o.length
if(q>=p)return H.c(o,q)
o[q]=u}return o},
c_:function(){var u=$.jJ
return u==null?$.jJ=V.as(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1):u},
as:function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){return new V.aJ(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p)},
W:function(a,b,c){return V.as(1,0,0,a,0,1,0,b,0,0,1,c,0,0,0,1)},
bu:function(a,b,c,d){return V.as(a,0,0,0,0,b,0,0,0,0,c,0,0,0,0,d)},
bZ:function(a){var u=Math.cos(a),t=Math.sin(a)
return V.as(1,0,0,0,0,u,-t,0,0,t,u,0,0,0,0,1)},
jh:function(a){var u=Math.cos(a),t=Math.sin(a)
return V.as(u,0,-t,0,0,1,0,0,t,0,u,0,0,0,0,1)},
ai:function(){var u=$.jM
return u==null?$.jM=new V.P(0,0):u},
jN:function(){var u=$.au
return u==null?$.au=new V.M(0,0,0):u},
jQ:function(a,b,c,d){if(c<0){a+=c
c=-c}if(d<0){b+=d
d=-d}return new V.d6(a,b,c,d)},
bB:function(){var u=$.k_
return u==null?$.k_=new V.u(0,0,0):u},
k0:function(){var u=$.jY
return u==null?$.jY=new V.u(0,0,-1):u},
S:function S(a,b,c){this.a=a
this.b=b
this.c=c},
N:function N(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
eS:function eS(a){this.a=a},
cY:function cY(a,b,c,d,e,f,g,h,i){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.x=h
_.y=i},
aJ:function aJ(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){var _=this
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
P:function P(a,b){this.a=a
this.b=b},
M:function M(a,b,c){this.a=a
this.b=b
this.c=c},
af:function af(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
d6:function d6(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
C:function C(a,b){this.a=a
this.b=b},
u:function u(a,b,c){this.a=a
this.b=b
this.c=c},
aU:function aU(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
le:function(a){var u=new V.hg()
u.dY(a,!0)
return u},
hg:function hg(){this.b=this.a=null},
hi:function hi(a){this.a=a},
hh:function hh(a){this.a=a}},U={
j6:function(){var u=new U.eB()
u.a=!0
u.b=1e12
u.c=-1e12
u.d=0
u.e=100
u.r=u.x=u.f=0
return u},
D:function(a){var u=new U.cE()
u.sM(0,a)
return u},
aq:function(){var u=new U.bS()
u.b7(U.a6)
u.aP(u.gdZ(),u.gf2())
u.e=null
u.f=V.c_()
u.r=0
return u},
eB:function eB(){var _=this
_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
cE:function cE(){this.b=this.a=null},
bS:function bS(){var _=this
_.c=_.b=_.a=_.r=_.f=_.e=null},
a6:function a6(){},
dm:function dm(){var _=this
_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.e=_.d=_.c=_.b=_.a=null},
dn:function dn(){var _=this
_.fx=_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
dp:function dp(){var _=this
_.r=_.f=_.e=_.d=_.c=_.b=_.a=null}},M={
j7:function(a){var u=new M.cD()
u.b7(M.a8)
u.e=!0
u.f=!1
u.r=null
u.aP(u.gf6(),u.gf8())
u.bd(0,a)
return u},
bP:function(){var u,t,s=new M.cJ()
s.a=!0
u=O.j5(E.aE)
s.e=u
u.aP(s.gez(),s.geB())
s.y=s.x=s.r=s.f=null
t=X.f3(!0,null)
s.saw(null)
s.sbo(0,t)
s.sa6(null)
return s},
cD:function cD(){var _=this
_.c=_.b=_.a=_.r=_.f=_.e=null},
cJ:function cJ(){var _=this
_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
a8:function a8(){},
mk:function(a){var u,t,s,r,q,p,o,n,m,l,k={},j=E.jk(a),i=O.bt(),h=i.f
h.sU(0,new V.S(0.4,0.6,0.8))
u=O.bt()
h=u.f
h.sU(0,new V.S(0.8,0.6,0.4))
u.db.sa0(0,0.3)
t=O.bt()
h=t.f
h.sU(0,new V.S(0.4,0.6,0.8))
t.db.sa0(0,0.3)
s=U.D(null)
r=U.D(null)
q=E.ac()
q.sa6(i)
h=F.aj()
h.az(F.iQ(!0))
h.az(F.ka(!0,36))
q.sa1(0,h)
p=E.ac()
p.sa6(u)
p.sa1(0,F.jw())
h=U.aq()
h.j(0,U.D(V.bu(1.3,1.3,1.3,1)))
h.j(0,U.D(V.bZ(-1.5707963267948966)))
h.j(0,s)
p.sT(h)
o=E.ac()
o.sa1(0,F.jw())
h=U.aq()
h.j(0,U.D(V.W(0,0,0.1)))
o.sT(h)
n=E.ac()
n.sa1(0,F.jw())
h=U.aq()
h.j(0,r)
n.sT(h)
m=M.bP()
m.sbo(0,X.f3(!1,null))
h=X.bv()
h.saA(U.D(V.W(-0.5,0,0)))
h.sT(U.D(V.W(0,0,5)))
m.saw(h)
m.e.j(0,p)
m.e.j(0,q)
l=M.bP()
h=X.bv()
h.saA(U.D(V.W(0.5,0,0)))
h.sT(U.D(V.W(0,0,5)))
l.saw(h)
l.sa6(t)
l.e.j(0,n)
l.e.j(0,o)
k.a=0.5
k.b=!1
j.x.c.gb_().j(0,new M.iR(k))
j.x.c.gaB().j(0,new M.iS(k))
j.x.c.gb2().j(0,new M.iT(k,s,o,n,r))
j.sbq(M.j7(H.b([l,m],[M.a8])))},
ml:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i=null,h={},g=E.jk(a),f=O.jE()
f.sco(!0)
f.scn(!0)
f.sd8(new V.N(0.2,0.3,0.4,0.2))
f.sd0(new V.N(0.1,0.2,0.3,0.2))
u=O.bt()
t=u.f
t.sU(0,new V.S(0.8,0.6,0.4))
u.db.sa0(0,0.3)
s=O.bt()
t=s.f
t.sU(0,new V.S(0.4,0.6,0.8))
r=U.D(i)
q=U.D(i)
p=U.aq()
p.j(0,U.D(V.bZ(0.4)))
p.j(0,U.D(V.jh(0.4)))
o=E.ac()
o.sa6(f)
t=F.aj()
t.az(F.k9(1,i,1))
t.az(F.ke(2))
o.sa1(0,t)
o.sT(p)
n=E.ac()
n.sa6(u)
n.sa1(0,F.iQ(!1))
t=U.aq()
t.j(0,U.D(V.bu(1.3,1.3,1.3,1)))
t.j(0,U.D(V.bZ(-1.5707963267948966)))
t.j(0,r)
t.j(0,p)
n.sT(t)
m=E.ac()
m.sa1(0,F.iQ(!0))
l=E.ac()
l.sa1(0,F.ka(!0,36))
t=U.aq()
t.j(0,q)
l.sT(t)
k=M.bP()
k.sbo(0,X.f3(!1,i))
t=X.bv()
t.saA(U.D(V.W(-0.5,0,0)))
t.sT(U.D(V.W(0,0,5)))
k.saw(t)
k.e.j(0,n)
k.e.j(0,o)
j=M.bP()
t=X.bv()
t.saA(U.D(V.W(0.5,0,0)))
t.sT(U.D(V.W(0,0,5)))
j.saw(t)
j.sa6(s)
j.e.j(0,l)
j.e.j(0,m)
h.a=0.5
h.b=!1
g.x.c.gb_().j(0,new M.iU(h))
g.x.c.gaB().j(0,new M.iV(h))
g.x.c.gb2().j(0,new M.iW(h,r,m,l,q))
g.sbq(M.j7(H.b([j,k],[M.a8])))},
mm:function(b8){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2=null,b3="modifiers",b4={},b5=E.jk(b8),b6=O.bt(),b7=b6.f
b7.sU(0,new V.S(0.4,0.6,0.8))
u=O.bt()
b7=u.f
b7.sU(0,new V.S(0.8,0.6,0.4))
u.db.sa0(0,0.3)
t=O.jE()
t.sco(!0)
t.scn(!0)
t.sd8(new V.N(0.2,0.3,0.4,0.2))
t.sd0(new V.N(0.1,0.2,0.3,0.2))
s=U.D(b2)
r=U.D(b2)
q=U.aq()
q.j(0,U.D(V.bZ(0.4)))
q.j(0,U.D(V.jh(0.4)))
p=U.aq()
o=F.aj()
n=o.a.V(1,-1,1)
m=o.a.V(1,1,1)
l=o.a.V(1,1,-1)
k=o.a.V(1,-1,-1)
j=o.a.V(-1,-1,1)
i=o.a.V(-1,1,1)
h=o.a.V(-1,1,-1)
g=o.a.V(-1,-1,-1)
f=o.a.V(0.5,-0.5,0.5)
e=o.a.V(0.5,0.5,0.5)
d=o.a.V(0.5,0.5,-0.5)
c=o.a.V(0.5,-0.5,-0.5)
b=o.a.V(-0.5,-0.5,0.5)
a=o.a.V(-0.5,0.5,0.5)
a0=o.a.V(-0.5,0.5,-0.5)
a1=o.a.V(-0.5,-0.5,-0.5)
o.c.fL(H.b([n,m,m,l,l,k,k,n,j,i,i,h,h,g,g,j,f,e,e,d,d,c,c,f,b,a,a,a0,a0,a1,a1,b,n,j,m,i,l,h,k,g,f,b,e,a,d,a0,c,a1,n,f,m,e,l,d,k,c,j,b,i,a,h,a0,g,a1],[F.ay]))
a2=E.ac()
a2.sa6(b6)
a2.sa1(0,o)
a2.sT(q)
a3=E.ac()
a3.sa6(u)
a3.sa1(0,F.iQ(!1))
b7=U.aq()
b7.j(0,U.D(V.bu(1.1,1.1,1.1,1)))
b7.j(0,U.D(V.bZ(-1.5707963267948966)))
b7.j(0,s)
b7.j(0,q)
a3.sT(b7)
a4=E.ac()
a4.sa1(0,F.k9(1,b2,1))
a4.sT(p)
a5=E.ac()
a5.sa1(0,F.ke(2))
b7=U.aq()
b7.j(0,r)
b7.j(0,p)
a5.sT(b7)
a6=M.bP()
a6.sbo(0,X.f3(!1,b2))
b7=X.bv()
b7.saA(U.D(V.W(-0.5,0,0)))
b7.sT(U.D(V.W(0,0,5)))
a6.saw(b7)
a6.e.j(0,a2)
a6.e.j(0,a3)
a7=M.bP()
b7=X.bv()
b7.saA(U.D(V.W(0.5,0,0)))
b7.sT(U.D(V.W(0,0,5)))
a7.saw(b7)
a7.sa6(t)
a7.e.j(0,a5)
a7.e.j(0,a4)
b4.a=0.5
b4.b=!1
b5.x.c.gb_().j(0,new M.iX(b4))
b5.x.c.gaB().j(0,new M.iY(b4))
b5.x.c.gb2().j(0,new M.iZ(b4,s,a4,a5,r))
b4=b5.x
b7=new U.dn()
a8=U.j6()
a8.sck(0,!0)
a8.sc7(6.283185307179586)
a8.sc9(0)
a8.sX(0,0)
a8.sc8(100)
a8.sR(0)
a8.sbX(0.5)
b7.b=a8
a9=b7.gaH()
a8.gt().j(0,a9)
a8=U.j6()
a8.sck(0,!0)
a8.sc7(6.283185307179586)
a8.sc9(0)
a8.sX(0,0)
a8.sc8(100)
a8.sR(0)
a8.sbX(0.5)
b7.c=a8
a8.gt().j(0,a9)
b7.d=null
b7.r=b7.f=b7.e=!1
b7.y=b7.x=2.5
b7.Q=4
b7.ch=b7.cx=!1
b7.db=b7.cy=0
b7.dx=null
b7.dy=0
b7.fx=b7.fr=null
b0=new X.ad(!1,!1,!1)
b1=b7.d
b7.d=b0
a8=new D.z(b3,b1,b0)
a8.b=!0
b7.L(a8)
a8=b7.f
if(a8!==!1){b7.f=!1
a8=new D.z("invertX",a8,!1)
a8.b=!0
b7.L(a8)}a8=b7.r
if(a8!==!0){b7.r=!0
a8=new D.z("invertY",a8,!0)
a8.b=!0
b7.L(a8)}b7.aW(b4)
p.j(0,b7)
b4=b5.x
b7=new U.dm()
a8=U.j6()
a8.sck(0,!0)
a8.sc7(6.283185307179586)
a8.sc9(0)
a8.sX(0,0)
a8.sc8(100)
a8.sR(0)
a8.sbX(0.2)
b7.b=a8
a8.gt().j(0,b7.gaH())
b7.c=null
b7.d=!1
b7.e=2.5
b7.r=4
b7.x=b7.y=!1
b7.z=0
b7.Q=null
b7.ch=0
b7.cy=b7.cx=null
b0=new X.ad(!0,!1,!1)
b1=b7.c
b7.c=b0
a8=new D.z(b3,b1,b0)
a8.b=!0
b7.L(a8)
b7.aW(b4)
p.j(0,b7)
b4=b5.x
b7=new U.dp()
b7.c=0.01
b7.e=b7.d=0
b0=new X.ad(!1,!1,!1)
b7.b=b0
a8=new D.z(b3,b2,b0)
a8.b=!0
b7.L(a8)
b7.aW(b4)
p.j(0,b7)
b5.sbq(M.j7(H.b([a7,a6],[M.a8])))},
kf:function(){var u="target2D",t="_Click and drag to move the location of the slice._",s="target3D",r="target4D",q=V.le("Hypersphere"),p=[P.t]
q.ah(H.b(["This is a simple example to help demonstrate why a hypersphere takes up ","so little space of the hypercube."],p))
q.bQ(3,"2D: circle and square")
q.ah(H.b(["Imagine taking slices out of a circle inscribed in a square. Each slice is ","two lines, one from the circle and one from the square. When the slices ","are near the top, the line caused by the circle is small compared to the square. ","The corners of the square aren't covered by the circle."],p))
q.bR(u)
q.ah(H.b([t],p))
q.bQ(3,"3D: sphere and cube")
q.ah(H.b(["Now imagine taking slices out of a sphere inscribed in a cube. Each slice is ","a circle inside a square. When the slice is in the middle, the circle touches ","the sides of the square. When the slice is near a side, the circle is almost a ","point but the square is still the same size. That is a lot of extra space for ","for the square not used by the circle."],p))
q.bR(s)
q.ah(H.b([t],p))
q.bQ(3,"4D: hypersphere and hypercube")
q.ah(H.b(["Now imagine taking a slice out of a hypersphere inscribed in a hypercube. ","Each slice is a sphere and a cube (as shown in the graphics below). ","When the slice is near the edges, the sphere is a small point in the middle ","of a cube. As the slice moves down the sphere gets bigger until it touches all ","the sides of the cube, then it shrinks again. Once again, that's a lot of ","space in the cube not filled by the sphere."],p))
q.bR(r)
q.ah(H.b(["_The shape on the left is an artistic representation of a 4D hypercube._ ","_Click and drag on the left to move the location of the slice._","_Click and drag on the right to rotate the resulting 3D slice._"],p))
q.ah(H.b(["With each new dimension the hypersphere is small near the edges and only touching ","the sides of the hypersphere in the very middle."],p))
q.ah(H.b(["\xab[Back to Examples|../]"],p))
M.mk(u)
M.ml(s)
M.mm(r)},
iR:function iR(a){this.a=a},
iS:function iS(a){this.a=a},
iT:function iT(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
iU:function iU(a){this.a=a},
iV:function iV(a){this.a=a},
iW:function iW(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
iX:function iX(a){this.a=a},
iY:function iY(a){this.a=a},
iZ:function iZ(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e}},A={
kY:function(a,b){var u=a.b0,t=new A.fu(b,u)
t.cu(b,u)
t.dV(a,b)
return t},
kZ:function(a,b,c,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d="MaterialLight_"+a2.ga0(a2)+a3.ga0(a3)+a4.ga0(a4)+a5.ga0(a5)+a6.ga0(a6)+a7.ga0(a7)+a8.ga0(a8)+a9.ga0(a9)+b0.ga0(b0)+"_"
d+=a?"1":"0"
d+=b?"1":"0"
d+=c?"1":"0"
d=d+"0_"+a1
u=b1.length
if(u>0){d+="_Bar"
for(t=0;t<b1.length;b1.length===u||(0,H.o)(b1),++t)d+="_"+H.f(b1[t].a)}u=b2.length
if(u>0){d+="_Dir"
for(t=0;t<b2.length;b2.length===u||(0,H.o)(b2),++t)d+="_"+H.f(b2[t].a)}u=b3.length
if(u>0){d+="_Point"
for(t=0;t<b3.length;b3.length===u||(0,H.o)(b3),++t)d+="_"+H.f(b3[t].a)}u=b4.length
if(u>0){d+="_Spot"
for(t=0;t<b4.length;b4.length===u||(0,H.o)(b4),++t)d+="_"+H.f(b4[t].a)}for(u=b1.length,s=0,r=!1,t=0;t<u;++t,r=!0)s+=b1[t].b
for(q=b2.length,t=0;t<q;++t,r=!0)s+=b2[t].b
for(q=b3.length,t=0;t<q;++t,r=!0)s+=b3[t].b
for(p=b4.length,t=0;t<p;++t,r=!0)s+=b4[t].b
if(!a8.a)p=!1
else p=!0
if(!p)if(!a9.a)o=!1
else o=!0
else o=!0
n=u>0
if(!a3.a)u=!1
else u=!0
if(!u){if(!a4.a)u=!1
else u=!0
if(!u){if(!a5.a)u=!1
else u=!0
if(!u)if(!a6.a)u=!1
else u=!0
else u=!0
m=u}else m=!0}else m=!0
u=!a6.a
if(u)p=!1
else p=!0
l=p||n||q>0||o
if(!a4.a)q=!1
else q=!0
if(!q){if(!a5.a)q=!1
else q=!0
if(!q){if(u)u=!1
else u=!0
k=u}else k=!0}else k=!0
if(!k){if(!a7.a)u=!1
else u=!0
j=u||o}else j=!0
if(!a7.a)i=!1
else i=!0
h=a1>0
g=j||i||l||!1
f=n&&k
e=$.am()
if(j){u=$.al()
e=new Z.aV(e.a|u.a)}if(i){u=$.ak()
e=new Z.aV(e.a|u.a)}if(h){u=$.aY()
e=new Z.aV(e.a|u.a)}return new A.fx(a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,s,o,k,o,r,g,!0,f,!1,m,r,l,j,i,!1,!1,h,!1,!1,c,!1,a1,d.charCodeAt(0)==0?d:d,e)},
iE:function(a,b,c){if(b.a)a.a+="uniform vec3 "+c+"Clr;\n"},
iF:function(a,b,c){var u
A.iE(a,b,c)
u=a.a+="\n"
u+="vec3 "+c+"Color;\n"
a.a=u
a.a=u+"\n"
u=a.a+="void set"+A.ek(c)+"Color()\n"
u=a.a=u+"{\n"
if(b.a){u+="   "+c+"Color = "+c+"Clr;\n"
a.a=u}a.a=u+"}\n"},
lB:function(a,b){var u,t=a.a,s=t.a
if(!s)u=!1
else u=!0
if(!u)return
u=b.a+="// === Emission ===\n"
b.a=u+"\n"
A.iE(b,t,"emission")
t=b.a+="\n"
t+="vec3 emissionColor()\n"
b.a=t
t=b.a=t+"{\n"
if(s){t+="   return emissionClr;\n"
b.a=t}t+="}\n"
b.a=t
b.a=t+"\n"},
lx:function(a,b){var u,t=a.b
if(!t.a)u=!1
else u=!0
if(!u)return
u=b.a+="// === Ambient ===\n"
b.a=u+"\n"
A.iF(b,t,"ambient")
b.a+="\n"},
lz:function(a,b){var u,t=a.c
if(!t.a)u=!1
else u=!0
if(!u)return
u=b.a+="// === Diffuse ===\n"
b.a=u+"\n"
A.iF(b,t,"diffuse")
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
lC:function(a,b){var u,t=a.d
if(!t.a)u=!1
else u=!0
if(!u)return
u=b.a+="// === Inverse Diffuse ===\n"
b.a=u+"\n"
A.iF(b,t,"invDiffuse")
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
lI:function(a,b){var u,t=a.e
if(!t.a)u=!1
else u=!0
if(!u)return
u=b.a+="// === Specular ===\n"
u+="\n"
b.a=u
b.a=u+"uniform float shininess;\n"
A.iF(b,t,"specular")
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
lE:function(a,b){var u,t,s
if(!a.k4)return
u=b.a+="// === Normal ===\n"
u+="\n"
b.a=u
u+="vec3 normal()\n"
b.a=u
u=b.a=u+"{\n"
t=a.f.a
if(!t)s=!1
else s=!0
if(!s||t)u=b.a=u+"   return normalize(normalVec);\n"
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
lG:function(a,b){var u,t=a.r,s=t.a
if(!s)u=!1
else u=!0
if(!u)return
u=b.a+="// === Reflection ===\n"
b.a=u+"\n"
A.iE(b,t,"reflect")
t=b.a+="\n"
t+="vec3 reflect(vec3 refl)\n"
b.a=t
t=b.a=t+"{\n"
if(s){t+="   vec3 scalar = reflectClr;\n"
b.a=t}t+="   vec3 invRefl = vec3(invViewMat*vec4(refl, 0.0));\n"
b.a=t
t+="   return scalar*textureCube(envSampler, invRefl).rgb;\n"
b.a=t
t+="}\n"
b.a=t
b.a=t+"\n"},
lH:function(a,b){var u,t=a.x,s=t.a
if(!s)u=!1
else u=!0
if(!u)return
u=b.a+="// === Refraction ===\n"
b.a=u+"\n"
A.iE(b,t,"refract")
t=b.a+="uniform float refraction;\n"
t+="\n"
b.a=t
t+="vec3 refract(vec3 refl)\n"
b.a=t
t=b.a=t+"{\n"
if(s){t+="   vec3 scalar = refractClr;\n"
b.a=t}t+="   vec3 refr = mix(-refl, viewPos, refraction);\n"
b.a=t
t+="   vec3 invRefr = vec3(invViewMat*vec4(refr, 0.0));\n"
b.a=t
t+="   return scalar*textureCube(envSampler, invRefr).rgb;\n"
b.a=t
t+="}\n"
b.a=t
b.a=t+"\n"},
ly:function(a,b,c){var u,t,s,r,q,p,o=b.b
if(o<=0)return
u=b.a
t="barLight"+H.f(u)
s=A.ek(t)
r=c.a+="// === "+s+" ===\n"
r+="\n"
c.a=r
r+="struct "+s+"\n"
c.a=r
r+="{\n"
c.a=r
r+="   vec3 startPnt;\n"
c.a=r
r+="   vec3 endPnt;\n"
c.a=r
r=c.a=r+"   vec3 color;\n"
if(typeof u!=="number")return u.ag()
u=(u&4)!==0
if(u){r+="   float att0;\n"
c.a=r
r+="   float att1;\n"
c.a=r
r=c.a=r+"   float att2;\n"}r+="};\n"
c.a=r
r+="\n"
c.a=r
c.a=r+("uniform int "+t+"Count;\n")
r=c.a+="uniform "+s+" "+t+"s["+o+"];\n"
r+="\n"
c.a=r
r+="vec3 "+t+"ClosestPoint("+s+" lit)\n"
c.a=r
r+="{\n"
c.a=r
r+="   vec3 lineVec = lit.endPnt - lit.startPnt;\n"
c.a=r
r+="   float lineLen2 = dot(lineVec, lineVec);\n"
c.a=r
r+="   if(lineLen2 <= 0.0001) return lit.startPnt;\n"
c.a=r
r+="   float t = dot(objPos - lit.startPnt, lineVec)/lineLen2;\n"
c.a=r
r+="   if(t <= 0.0) return lit.startPnt;\n"
c.a=r
r+="   if(t >= 1.0) return lit.endPnt;\n"
c.a=r
r+="   return lit.startPnt + t*lineVec;\n"
c.a=r
r+="}\n"
c.a=r
r+="\n"
c.a=r
r+="vec3 "+t+"Intensity(vec3 normDir, vec3 litPnt, "+s+" lit)\n"
c.a=r
r+="{\n"
c.a=r
if(u){r+="   float dist = length(objPos - litPnt);\n"
c.a=r
r+="   float attenuation = 1.0/(lit.att0 + (lit.att1 + lit.att2*dist)*dist);\n"
c.a=r
r+="   if(attenuation <= 0.005) return vec3(0.0, 0.0, 0.0);\n"
c.a=r
c.a=r+"\n"}r=[P.t]
q=H.b([],r)
q.push("lit.color")
if(u)q.push("attenuation")
u=c.a+="   return "+C.a.u(q," * ")+";\n"
u+="}\n"
c.a=u
u+="\n"
c.a=u
u+="vec3 "+t+"Value(vec3 norm, "+s+" lit)\n"
c.a=u
c.a=u+"{\n"
q=H.b([],r)
if(!a.b.a)u=!1
else u=!0
if(u)q.push("ambientColor")
if(a.dx){c.a+="   vec3 highLight = vec3(0.0, 0.0, 0.0);\n"
q.push("highLight")
u=c.a+="   vec3 litPnt  = "+t+"ClosestPoint(lit);\n"
u+="   vec3 litView = (viewMat*vec4(litPnt, 1.0)).xyz;\n"
c.a=u
u+="   vec3 normDir = normalize(viewPos - litView);\n"
c.a=u
u+="   vec3 intensity = "+t+"Intensity(normDir, litPnt, lit);\n"
c.a=u
c.a=u+"   if(length(intensity) > 0.0001) {\n"
p=H.b([],r)
if(!a.c.a)u=!1
else u=!0
if(u)p.push("diffuse(norm, normDir)")
if(!a.d.a)u=!1
else u=!0
if(u)p.push("invDiffuse(norm, normDir)")
if(!a.e.a)u=!1
else u=!0
if(u)p.push("specular(norm, normDir)")
u=c.a+="      highLight = intensity*("+C.a.u(p," + ")+");\n"
c.a=u+"   }\n"}u=c.a+="   return lit.color*("+C.a.u(q," + ")+");\n"
u+="}\n"
c.a=u
u+="\n"
c.a=u
u+="vec3 all"+s+"Values(vec3 norm)\n"
c.a=u
u+="{\n"
c.a=u
c.a=u+"   vec3 lightAccum = vec3(0.0, 0.0, 0.0);\n"
o=c.a+="   for(int i = 0; i < "+o+"; ++i)\n"
o+="   {\n"
c.a=o
o+="      if(i >= "+t+"Count) break;\n"
c.a=o
o+="      lightAccum += "+t+"Value(norm, "+t+"s[i]);\n"
c.a=o
o+="   }\n"
c.a=o
o+="   return lightAccum;\n"
c.a=o
o+="}\n"
c.a=o
c.a=o+"\n"},
lA:function(a,b,c){var u,t,s,r,q,p,o,n,m,l=b.b
if(l<=0)return
u=b.a
t="dirLight"+H.f(u)
s=A.ek(t)
r=c.a+="// === "+s+" ===\n"
r+="\n"
c.a=r
r+="struct "+s+"\n"
c.a=r
r=c.a=r+"{\n"
if(typeof u!=="number")return u.ag()
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
r=[P.t]
o=H.b([],r)
if(!a.b.a)n=!1
else n=!0
if(n)o.push("ambientColor")
if(a.dx){c.a+="   vec3 highLight = vec3(0.0, 0.0, 0.0);\n"
m=H.b([],r)
if(!a.c.a)r=!1
else r=!0
if(r)m.push("diffuse(norm, lit.viewDir)")
if(!a.d.a)r=!1
else r=!0
if(r)m.push("invDiffuse(norm, lit.viewDir)")
if(!a.e.a)r=!1
else r=!0
if(r)m.push("specular(norm, lit.viewDir)")
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
c.a+="      highLight = intensity*("+C.a.u(m," + ")+");\n"}else c.a+="   highLight = "+C.a.u(m," + ")+";\n"
o.push("highLight")}r=c.a+="   return lit.color*("+C.a.u(o," + ")+");\n"
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
lF:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k,j=b.b
if(j<=0)return
u=b.a
t="pointLight"+H.f(u)
s=A.ek(t)
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
if(typeof u!=="number")return u.ag()
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
c.a=r+"\n"}r=[P.t]
l=H.b([],r)
l.push("lit.color")
if(o)l.push("attenuation")
if(u)l.push("textureCube(txtCube, invNormDir).rgb")
o=c.a+="   return "+C.a.u(l," * ")+";\n"
o+="}\n"
c.a=o
o+="\n"
c.a=o
o+="vec3 "+t+"Value(vec3 norm, "+s+" lit"+m+")\n"
c.a=o
c.a=o+"{\n"
l=H.b([],r)
if(!a.b.a)o=!1
else o=!0
if(o)l.push("ambientColor")
if(a.dx){c.a+="   vec3 highLight = vec3(0.0, 0.0, 0.0);\n"
l.push("highLight")
m=u?", txtCube":""
if(p)m+=", shadowCube"
o=c.a+="   vec3 normDir = normalize(viewPos - lit.viewPnt);\n"
o+="   vec3 intensity = "+t+"Intensity(normDir, lit"+m+");\n"
c.a=o
c.a=o+"   if(length(intensity) > 0.0001) {\n"
k=H.b([],r)
if(!a.c.a)r=!1
else r=!0
if(r)k.push("diffuse(norm, normDir)")
if(!a.d.a)r=!1
else r=!0
if(r)k.push("invDiffuse(norm, normDir)")
if(!a.e.a)r=!1
else r=!0
if(r)k.push("specular(norm, normDir)")
r=c.a+="      highLight = intensity*("+C.a.u(k," + ")+");\n"
c.a=r+"   }\n"}r=c.a+="   return lit.color*("+C.a.u(l," + ")+");\n"
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
lJ:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k,j,i,h="uniform sampler2D ",g=b.b
if(g<=0)return
u=b.a
t="spotLight"+H.f(u)
s=A.ek(t)
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
if(typeof u!=="number")return u.ag()
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
c.a=u+"\n"}u=[P.t]
j=H.b([],u)
if(n)j.push("attenuation")
if(o)j.push("scale")
if(m)j.push("texture2D(txt2D, txtLoc).rgb")
else j.push("vec3(1.0, 1.0, 1.0)")
r=c.a+="   return "+C.a.u(j," * ")+";\n"
r+="}\n"
c.a=r
r+="\n"
c.a=r
r+="vec3 "+t+"Value(vec3 norm, "+s+" lit"+k+")\n"
c.a=r
c.a=r+"{\n"
j=H.b([],u)
if(!a.b.a)r=!1
else r=!0
if(r)j.push("ambientColor")
if(a.dx){c.a+="   vec3 highLight = vec3(0.0, 0.0, 0.0);\n"
j.push("highLight")
k=m?", txt2D":""
if(p)k+=", shadow2D"
r=c.a+="   vec3 intensity = "+t+"Intensity(lit"+k+");\n"
r+="   if(length(intensity) > 0.0001) {\n"
c.a=r
c.a=r+"      vec3 litVec = normalize(viewPos - lit.viewPnt);\n"
i=H.b([],u)
if(!a.c.a)u=!1
else u=!0
if(u)i.push("diffuse(norm, litVec)")
if(!a.d.a)u=!1
else u=!0
if(u)i.push("invDiffuse(norm, litVec)")
if(!a.e.a)u=!1
else u=!0
if(u)i.push("specular(norm, litVec)")
u=c.a+="      highLight = intensity*("+C.a.u(i," + ")+");\n"
c.a=u+"   }\n"}u=c.a+="   return lit.color*("+C.a.u(j," + ")+");\n"
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
lD:function(a,b){var u,t
if(a.cy>0)return
u=b.a+="// === No Lights ===\n"
u+="\n"
b.a=u
u+="vec3 nonLightValues(vec3 norm)\n"
b.a=u
u+="{\n"
b.a=u
if(a.dx)b.a=u+"   vec3 litVec = vec3(0.0, 0.0, 1.0);\n"
t=H.b([],[P.t])
if(!a.b.a)u=!1
else u=!0
if(u)t.push("ambientColor")
if(!a.c.a)u=!1
else u=!0
if(u)t.push("diffuse(norm, litVec)")
if(!a.d.a)u=!1
else u=!0
if(u)t.push("invDiffuse(norm, litVec)")
if(!a.e.a)u=!1
else u=!0
if(u)t.push("specular(norm, litVec)")
u=b.a+="   return "+C.a.u(t," + ")+";\n"
u+="}\n"
b.a=u
b.a=u+"\n"},
lK:function(a){var u,t,s,r,q,p,o,n,m="   lightAccum += all",l="precision mediump float;\n\n",k="precision mediump float;\n\nvarying vec3 normalVec;\n",j=new P.aR("")
j.a="precision mediump float;\n"
j.a=l
u=a.k4
if(u){j.a=k
t=k}else t=l
if(a.r1){t+="varying vec3 binormalVec;\n"
j.a=t}if(a.r2){t+="varying vec2 txt2D;\n"
j.a=t}if(a.rx){t+="varying vec3 txtCube;\n"
j.a=t}if(a.k2){t+="varying vec3 objPos;\n"
j.a=t}t=j.a=(a.k3?j.a=t+"varying vec3 viewPos;\n":t)+"\n"
s=a.y1
if(s){t+="uniform mat4 colorMat;\n"
j.a=t}if(a.go){t+="uniform mat4 viewMat;\n"
j.a=t}if(a.dy)t=j.a=t+"uniform mat4 invViewMat;\n"
j.a=t+"\n"
A.lB(a,j)
A.lx(a,j)
A.lz(a,j)
A.lC(a,j)
A.lI(a,j)
t=a.db
if(t){r=j.a+="// === Environmental ===\n"
r+="\n"
j.a=r
r+="uniform samplerCube envSampler;\n"
j.a=r
j.a=r+"\n"
A.lG(a,j)
A.lH(a,j)}A.lE(a,j)
r=j.a+="// === Alpha ===\n"
r=j.a=r+"\n"
q=a.y.a
if(q)r=j.a=r+"uniform float alpha;\n"
r+="float alphaValue()\n"
j.a=r
r=j.a=r+"{\n"
if(!q)p=!1
else p=!0
if(!p)r=j.a=r+"   return 1.0;\n"
else if(q){r+="   return alpha;\n"
j.a=r}r+="}\n"
j.a=r
j.a=r+"\n"
r=a.k1
if(r){for(q=a.z,p=q.length,o=0;o<q.length;q.length===p||(0,H.o)(q),++o)A.ly(a,q[o],j)
for(q=a.Q,p=q.length,o=0;o<q.length;q.length===p||(0,H.o)(q),++o)A.lA(a,q[o],j)
for(q=a.ch,p=q.length,o=0;o<q.length;q.length===p||(0,H.o)(q),++o)A.lF(a,q[o],j)
for(q=a.cx,p=q.length,o=0;o<q.length;q.length===p||(0,H.o)(q),++o)A.lJ(a,q[o],j)
A.lD(a,j)}q=j.a+="// === Main ===\n"
q+="\n"
j.a=q
q+="void main()\n"
j.a=q
q+="{\n"
j.a=q
q=j.a=q+"   float alpha = alphaValue();\n"
u=u?j.a=q+"   vec3 norm = normal();\n":q
if(t)j.a=u+"   vec3 refl = reflect(normalize(viewPos), norm);\n"
n=H.b([],[P.t])
if(r){j.a+="   vec3 lightAccum = vec3(0.0, 0.0, 0.0);\n"
n.push("lightAccum")
if(!a.b.a)u=!1
else u=!0
if(u)j.a+="   setAmbientColor();\n"
if(!a.c.a)u=!1
else u=!0
if(u)j.a+="   setDiffuseColor();\n"
if(!a.d.a)u=!1
else u=!0
if(u)j.a+="   setInvDiffuseColor();\n"
if(!a.e.a)u=!1
else u=!0
if(u)j.a+="   setSpecularColor();\n"
for(u=a.z,t=u.length,o=0;o<u.length;u.length===t||(0,H.o)(u),++o){r=u[o].i(0)
if(0>=r.length)return H.c(r,0)
j.a+=m+(r[0].toUpperCase()+C.c.aD(r,1))+"Values(norm);\n"}for(u=a.Q,t=u.length,o=0;o<u.length;u.length===t||(0,H.o)(u),++o){r=u[o].i(0)
if(0>=r.length)return H.c(r,0)
j.a+=m+(r[0].toUpperCase()+C.c.aD(r,1))+"Values(norm);\n"}for(u=a.ch,t=u.length,o=0;o<u.length;u.length===t||(0,H.o)(u),++o){r=u[o].i(0)
if(0>=r.length)return H.c(r,0)
j.a+=m+(r[0].toUpperCase()+C.c.aD(r,1))+"Values(norm);\n"}for(u=a.cx,t=u.length,o=0;o<u.length;u.length===t||(0,H.o)(u),++o){r=u[o].i(0)
if(0>=r.length)return H.c(r,0)
j.a+=m+(r[0].toUpperCase()+C.c.aD(r,1))+"Values(norm);\n"}if(a.cy<=0)j.a+="   lightAccum += nonLightValues(norm);\n"}if(!a.a.a)u=!1
else u=!0
if(u)n.push("emissionColor()")
if(!a.r.a)u=!1
else u=!0
if(u)n.push("reflect(refl)")
if(!a.x.a)u=!1
else u=!0
if(u)n.push("refract(refl)")
if(n.length<=0)n.push("vec3(0.0, 0.0, 0.0)")
u=j.a+="   vec4 objClr = vec4("+C.a.u(n," + ")+", alpha);\n"
if(s)u=j.a=u+"   objClr = colorMat*objClr;\n"
u+="   gl_FragColor = objClr;\n"
j.a=u
u=j.a=u+"}\n"
return u.charCodeAt(0)==0?u:u},
lL:function(a,b){var u,t,s
if(!a.ry)return
u=b.a+="struct BendingValue\n"
u+="{\n"
b.a=u
u+="   mat4 mat;\n"
b.a=u
u+="};\n"
b.a=u
b.a=u+"uniform int bendMatCount;\n"
u=b.a+="uniform BendingValue bendValues["+a.bj+"];\n"
u+="attribute vec4 bendAttr;\n"
b.a=u
u+="\n"
b.a=u
u+="float weightSum;\n"
b.a=u
u=b.a=u+"vec3 bendPos;\n"
t=a.k4
if(t){u+="vec3 bendNorm;\n"
b.a=u}s=a.r1
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
lN:function(a,b){var u
if(!a.k4)return
u=b.a+="varying vec3 normalVec;\n"
u+="\n"
b.a=u
u+="vec3 getNorm()\n"
b.a=u
u+="{\n"
b.a=u
u+="   return normalize((viewObjMat*vec4("+(a.ry?"bendNorm":"normAttr")+", 0.0)).xyz);\n"
b.a=u
u+="}\n"
b.a=u
b.a=u+"\n"},
lM:function(a,b){var u
if(!a.r1)return
u=b.a+="varying vec3 binormalVec;\n"
u+="\n"
b.a=u
u+="vec3 getBinm()\n"
b.a=u
u+="{\n"
b.a=u
u+="   return normalize((viewObjMat*vec4("+(a.ry?"bendBinm":"binmAttr")+", 0.0)).xyz);\n"
b.a=u
u+="}\n"
b.a=u
b.a=u+"\n"},
lP:function(a,b){var u,t
if(!a.r2)return
u=a.x1
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
lQ:function(a,b){var u,t
if(!a.rx)return
u=a.x2
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
lO:function(a,b){var u
if(!a.k2)return
u=b.a+="varying vec3 objPos;\n"
u+="\n"
b.a=u
u+="vec3 getObjPos()\n"
b.a=u
u+="{\n"
b.a=u
u+="   return (objMat*vec4("+(a.ry?"bendPos":"posAttr")+", 1.0)).xyz;\n"
b.a=u
u+="}\n"
b.a=u
b.a=u+"\n"},
lR:function(a,b){var u
if(!a.k3)return
u=b.a+="varying vec3 viewPos;\n"
u+="\n"
b.a=u
u+="vec3 getViewPos()\n"
b.a=u
u+="{\n"
b.a=u
u+="   return (viewObjMat*vec4("+(a.ry?"bendPos":"posAttr")+", 1.0)).xyz;\n"
b.a=u
u+="}\n"
b.a=u
b.a=u+"\n"},
ek:function(a){if(0>=a.length)return H.c(a,0)
return a[0].toUpperCase()+C.c.aD(a,1)},
jm:function(a,b,c,d,e){var u=new A.hJ(a,c,e)
u.f=d
P.kW(d,0,P.v)
return u},
cw:function cw(a,b,c){this.a=a
this.b=b
this.c=c},
eq:function eq(a){this.a=a},
T:function T(a,b,c){this.a=a
this.b=b
this.c=c},
f6:function f6(a,b){var _=this
_.fy=_.fx=_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=null
_.a=a
_.b=b
_.y=_.x=_.r=_.f=_.e=_.d=_.c=null},
fu:function fu(a,b){var _=this
_.hG=_.hF=_.bk=_.b0=_.bj=_.y2=_.y1=_.x2=_.x1=_.ry=_.rx=_.r2=_.r1=_.k4=_.k3=_.k2=_.k1=_.id=_.go=_.fy=_.fx=_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=null
_.hT=_.hS=_.hR=_.c4=_.c3=_.c2=_.c1=_.c0=_.c_=_.bZ=_.bY=_.hQ=_.hP=_.dj=_.hO=_.hN=_.di=_.dh=_.hM=_.hL=_.dg=_.df=_.hK=_.hJ=_.de=_.hI=_.hH=_.dd=null
_.a=a
_.b=b
_.y=_.x=_.r=_.f=_.e=_.d=_.c=null},
cx:function cx(a,b){this.a=a
this.b=b},
cG:function cG(a,b){this.a=a
this.b=b},
d4:function d4(a,b){this.a=a
this.b=b},
d9:function d9(a,b){this.a=a
this.b=b},
fx:function fx(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5){var _=this
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
_.bj=b3
_.b0=b4
_.bk=b5},
c6:function c6(a,b,c,d,e,f){var _=this
_.b=a
_.c=b
_.d=c
_.e=d
_.f=e
_.r=f},
c7:function c7(a,b,c,d,e,f){var _=this
_.b=a
_.c=b
_.d=c
_.e=d
_.f=e
_.r=f},
c9:function c9(a,b,c,d,e,f,g,h,i,j){var _=this
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
ca:function ca(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){var _=this
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
d7:function d7(){},
dj:function dj(){},
hO:function hO(a){this.a=a},
b9:function b9(a,b,c){this.a=a
this.c=b
this.d=c},
hL:function hL(a,b,c){this.a=a
this.c=b
this.d=c},
hM:function hM(a,b,c){this.a=a
this.c=b
this.d=c},
hN:function hN(a,b,c){this.a=a
this.c=b
this.d=c},
hJ:function hJ(a,b,c){var _=this
_.f=null
_.a=a
_.c=b
_.d=c},
Q:function Q(a,b,c){this.a=a
this.c=b
this.d=c},
hK:function hK(a,b,c){this.a=a
this.c=b
this.d=c},
E:function E(a,b,c){this.a=a
this.c=b
this.d=c},
ba:function ba(a,b,c){this.a=a
this.c=b
this.d=c},
hP:function hP(a,b,c){this.a=a
this.c=b
this.d=c},
c8:function c8(a,b,c){this.a=a
this.c=b
this.d=c},
Y:function Y(a,b,c){this.a=a
this.c=b
this.d=c},
bz:function bz(a,b,c){this.a=a
this.c=b
this.d=c},
bA:function bA(a,b,c){this.a=a
this.c=b
this.d=c}},F={
jw:function(){var u,t,s=F.aj(),r=s.a,q=V.ai(),p=new V.u(-1,-1,0)
p=p.m(0,Math.sqrt(p.A(p)))
u=r.aJ(new V.af(1,2,4,6),V.bL(255,0,0),new V.M(-1,0,0),q,p,null)
p=s.a
q=new V.u(1,-1,0)
q=q.m(0,Math.sqrt(q.A(q)))
t=p.aJ(new V.af(0,3,4,6),V.bL(0,0,255),new V.M(1,0,0),new V.P(1,0),q,null)
s.c.bP(0,u,t)
return s},
iQ:function(a){var u,t,s,r,q,p=null,o=F.aj(),n=o.a,m=new V.u(-1,-1,1)
m=m.m(0,Math.sqrt(m.A(m)))
u=n.aJ(new V.af(1,2,4,6),V.bL(255,0,0),new V.M(-1,-1,0),new V.P(0,1),m,p)
m=o.a
n=new V.u(1,-1,1)
n=n.m(0,Math.sqrt(n.A(n)))
t=m.aJ(new V.af(0,3,4,6),V.bL(0,0,255),new V.M(1,-1,0),new V.P(1,1),n,p)
n=o.a
m=new V.u(1,1,1)
m=m.m(0,Math.sqrt(m.A(m)))
s=n.aJ(new V.af(0,2,5,6),V.bL(0,128,0),new V.M(1,1,0),new V.P(1,0),m,p)
m=o.a
n=V.ai()
r=new V.u(-1,1,1)
r=r.m(0,Math.sqrt(r.A(r)))
q=m.aJ(new V.af(0,2,4,7),V.bL(255,255,0),new V.M(-1,1,0),n,r,p)
n=[F.ay]
if(a)o.c.cZ(H.b([u,t,s,q],n))
else o.d.fJ(H.b([u,t,s,q],n))
o.aq()
return o},
k9:function(a,b,c){var u=null,t=F.aj()
F.cm(t,b,u,c,a,1,0,0,1)
F.cm(t,b,u,c,a,0,1,0,3)
F.cm(t,b,u,c,a,0,0,1,2)
F.cm(t,b,u,c,a,-1,0,0,0)
F.cm(t,b,u,c,a,0,-1,0,0)
F.cm(t,b,u,c,a,0,0,-1,3)
t.aq()
return t},
iD:function(a){var u=a.a>0?1:0
if(a.b>0)u+=2
return(a.c>0?u+4:u)*2},
cm:function(a,b,c,d,a0,a1,a2,a3,a4){var u,t,s,r,q,p,o,n,m,l,k,j={},i=a1+a2,h=i+a3,g=a2+a3,f=a3+a1,e=new V.u(h,g+a1,f+a2)
j.a=e
u=a1-a2
t=a2-a3
s=a3-a1
r=j.b=new V.u(u+a3,t+a1,s+a2)
q=new V.u(u-a3,t-a1,s-a2)
j.c=q
p=j.d=new V.u(i-a3,g-a1,f-a2)
if(h>0){j.d=r
j.b=p
h=r
i=p}else{h=p
i=r}for(f=h,h=i,i=e,g=q,o=0;o<a4;++o,n=f,f=i,i=h,h=g,g=n){j.a=h
j.b=g
j.c=f
j.d=i}m=F.iD(i)
l=F.iD(h)
k=F.mp(d,a0,new F.iC(j,F.iD(g),F.iD(f),l,m,c),b)
if(k!=null)a.az(k)},
ka:function(a,b){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=new F.iI()
if(b<3)return
u=F.aj()
t=-6.283185307179586/b
s=H.b([],[F.ay])
for(r=0;r<=b;++r){q=t*r
p=Math.sin(q)
o=Math.cos(q)
n=g.$1(r/b)
m=u.a
if(typeof n!=="number")return H.r(n)
l=new V.u(p,o,1).m(0,Math.sqrt(p*p+o*o+1))
if(p<0)k=0
else k=p>1?1:p
j=o<0
if(j)i=0
else i=o>1?1:o
if(j)j=0
else j=o>1?1:o
m.toString
h=F.bb(new V.af(-1,-1,-1,-1),null,new V.N(k,i,j,1),new V.M(p*n,o*n,0),new V.u(0,0,1),new V.P(p*0.5+0.5,o*0.5+0.5),l,null,0)
m.j(0,h)
s.push(h)}u.c.cZ(s)
return u},
ke:function(a){var u=F.aj(),t=Math.sqrt(5)/2+0.5,s=F.a0(u,new V.u(-1,t,0)),r=F.a0(u,new V.u(1,t,0)),q=-t,p=F.a0(u,new V.u(-1,q,0)),o=F.a0(u,new V.u(1,q,0)),n=F.a0(u,new V.u(0,-1,q)),m=F.a0(u,new V.u(0,1,q)),l=F.a0(u,new V.u(0,-1,t)),k=F.a0(u,new V.u(0,1,t)),j=F.a0(u,new V.u(t,0,1)),i=F.a0(u,new V.u(t,0,-1)),h=F.a0(u,new V.u(q,0,1)),g=F.a0(u,new V.u(q,0,-1))
F.O(u,s,g,m,a)
F.O(u,s,m,r,a)
F.O(u,s,r,k,a)
F.O(u,s,k,h,a)
F.O(u,s,h,g,a)
F.O(u,r,m,i,a)
F.O(u,m,g,n,a)
F.O(u,g,h,p,a)
F.O(u,h,k,l,a)
F.O(u,k,r,j,a)
F.O(u,o,i,n,a)
F.O(u,o,n,p,a)
F.O(u,o,p,l,a)
F.O(u,o,l,j,a)
F.O(u,o,j,i,a)
F.O(u,n,i,m,a)
F.O(u,p,n,g,a)
F.O(u,l,p,h,a)
F.O(u,j,l,k,a)
F.O(u,i,j,r,a)
u.h5(new F.dq(),new F.i0())
return u},
a0:function(a,b){var u,t,s,r,q,p,o,n,m,l,k,j=null
b=b.m(0,Math.sqrt(b.A(b)))
u=b.a
t=b.b
s=b.c
r=F.bb(j,j,j,new V.M(u,t,s),b,j,j,j,0)
q=a.fZ(r,new F.dq())
if(q!=null)return q
p=u*0.5+0.5
o=t*0.5+0.5
n=s*0.5+0.5
if(p<0)p=0
else if(p>1)p=1
if(o<0)o=0
else if(o>1)o=1
if(n<0)n=0
else if(n>1)n=1
r.sU(0,new V.N(p,o,n,1))
m=Math.sqrt(u*u+t*t)
l=Math.atan2(t,u)/1.5707963267948966
if(l<0)l=-l
k=Math.atan2(m,s)/3.141592653589793
r.scf(new V.P(l,k<0?-k:k))
a.a.j(0,r)
return r},
O:function(a,b,c,d,e){var u,t,s,r
if(e<=0)a.d.cY(0,b,d,c)
else{u=F.a0(a,b.r.w(0,c.r).n(0,0.5))
t=F.a0(a,c.r.w(0,d.r).n(0,0.5))
s=F.a0(a,d.r.w(0,b.r).n(0,0.5))
r=e-1
F.O(a,b,u,s,r)
F.O(a,u,c,t,r)
F.O(a,t,s,u,r)
F.O(a,s,t,d,r)}},
mp:function(a,b,c,d){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=null
if(a<1)return
if(b<1)return
u=F.aj()
t=H.b([],[F.ay])
for(s=0;s<=b;++s){r=s/b
q=u.a
if(r<0)p=0
else p=r>1?1:r
q.toString
o=F.bb(g,g,new V.N(p,0,0,1),g,g,new V.P(r,1),g,g,0)
q.j(0,o)
c.$3(o,r,0)
t.push(o.bW(d))}for(s=1;s<=a;++s){n=s/a
for(q=n>1,p=n<0,m=1-n,l=0;l<=b;++l){r=l/b
k=u.a
if(r<0)j=0
else j=r>1?1:r
if(p)i=0
else i=q?1:n
if(p)h=0
else h=q?1:n
k.toString
o=F.bb(g,g,new V.N(j,i,h,1),g,g,new V.P(r,m),g,g,0)
k.j(0,o)
c.$3(o,r,n)
t.push(o.bW(d))}}u.d.fK(a+1,b+1,t)
return u},
bR:function(a,b,c){var u=new F.aF(),t=a.a
if(t==null)H.n(P.i("May not create a face with a first vertex which is not attached to a shape."))
if(t!=b.a||t!=c.a)H.n(P.i("May not create a face with vertices attached to different shapes."))
u.aU(a)
u.aV(b)
u.cT(c)
u.a.a.d.b.push(u)
u.a.a.N()
return u},
jf:function(a,b){var u,t=new F.aI()
if(a==null)H.n(P.i("May not create a line with a null start vertex."))
if(b==null)H.n(P.i("May not create a line with a null end vertex."))
u=a.a
if(u==null)H.n(P.i("May not create a line with a start vertex which is not attached to a shape."))
if(u!=b.a)H.n(P.i("May not create a line with vertices attached to different shapes."))
t.aU(a)
t.aV(b)
t.a.a.c.b.push(t)
t.a.a.N()
return t},
l_:function(a){var u=new F.c3()
if(a.a==null)H.n(P.i("May not create a point with a vertex which is not attached to a shape."))
u.fp(a)
u.a.a.b.b.push(u)
u.a.a.N()
return u},
aj:function(){var u=new F.ag(),t=new F.hX(u)
t.b=!1
t.c=H.b([],[F.ay])
u.a=t
t=new F.hf(u)
t.b=H.b([],[F.c3])
u.b=t
t=new F.he(u)
t.b=H.b([],[F.aI])
u.c=t
t=new F.hd(u)
t.b=H.b([],[F.aF])
u.d=t
u.e=null
return u},
bb:function(a,b,c,d,e,f,g,h,i){var u,t=null,s=new F.ay(),r=new F.i4()
r.b=H.b([],[F.c3])
s.b=r
r=new F.i1()
u=[F.aI]
r.b=H.b([],u)
r.c=H.b([],u)
s.c=r
r=new F.hY()
u=[F.aF]
r.b=H.b([],u)
r.c=H.b([],u)
r.d=H.b([],u)
s.d=r
h=$.ky()
s.e=0
r=$.am()
u=h.a
s.f=(u&r.a)!==0?d:t
s.r=(u&$.al().a)!==0?e:t
s.x=(u&$.ak().a)!==0?b:t
s.y=(u&$.bh().a)!==0?f:t
s.z=(u&$.bi().a)!==0?g:t
s.Q=(u&$.kz().a)!==0?c:t
s.ch=(u&$.bG().a)!==0?i:0
s.cx=(u&$.aY().a)!==0?a:t
return s},
iC:function iC(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
iI:function iI(){},
aF:function aF(){var _=this
_.e=_.d=_.c=_.b=_.a=null},
eV:function eV(){},
hj:function hj(){},
aI:function aI(){this.b=this.a=null},
fm:function fm(){},
hI:function hI(){},
c3:function c3(){this.a=null},
ag:function ag(){var _=this
_.e=_.d=_.c=_.b=_.a=null},
hd:function hd(a){this.a=a
this.b=null},
he:function he(a){this.a=a
this.b=null},
hf:function hf(a){this.a=a
this.b=null},
ay:function ay(){var _=this
_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
i6:function i6(a){this.a=a},
i5:function i5(a){this.a=a},
hX:function hX(a){this.a=a
this.c=this.b=null},
hY:function hY(){this.d=this.c=this.b=null},
hZ:function hZ(a,b){this.a=a
this.b=b},
i_:function i_(a,b){this.a=a
this.b=b},
i1:function i1(){this.c=this.b=null},
i2:function i2(){},
dq:function dq(){},
i3:function i3(){},
i0:function i0(){},
i4:function i4(){this.b=null}},T={hy:function hy(){}}
var w=[C,H,J,P,W,K,L,O,E,Z,D,X,V,U,M,A,F,T]
hunkHelpers.setFunctionNamesIfNecessary(w)
var $={}
H.jd.prototype={}
J.a.prototype={
q:function(a,b){return a===b},
gI:function(a){return H.c4(a)},
i:function(a){return"Instance of '"+H.f(H.c5(a))+"'"}}
J.ff.prototype={
i:function(a){return String(a)},
gI:function(a){return a?519018:218159},
$ibe:1}
J.cP.prototype={
q:function(a,b){return null==b},
i:function(a){return"null"},
gI:function(a){return 0}}
J.cQ.prototype={
gI:function(a){return 0},
i:function(a){return String(a)}}
J.h_.prototype={}
J.cb.prototype={}
J.b2.prototype={
i:function(a){var u=a[$.kn()]
if(u==null)return this.dU(a)
return"JavaScript function for "+H.f(J.aa(u))},
$S:function(){return{func:1,opt:[,,,,,,,,,,,,,,,,]}}}
J.b1.prototype={
cc:function(a,b){if(!!a.fixed$length)H.n(P.y("removeAt"))
if(b<0||b>=a.length)throw H.d(P.d5(b,null))
return a.splice(b,1)[0]},
B:function(a,b){var u
if(!!a.fixed$length)H.n(P.y("remove"))
for(u=0;u<a.length;++u)if(J.w(a[u],b)){a.splice(u,1)
return!0}return!1},
bd:function(a,b){var u,t
if(!!a.fixed$length)H.n(P.y("addAll"))
for(u=b.length,t=0;t<b.length;b.length===u||(0,H.o)(b),++t)a.push(b[t])},
F:function(a,b){var u,t=a.length
for(u=0;u<t;++u){b.$1(a[u])
if(a.length!==t)throw H.d(P.bM(a))}},
u:function(a,b){var u,t,s=a.length,r=new Array(s)
r.fixed$length=Array
for(u=0;u<a.length;++u){t=H.f(a[u])
if(u>=s)return H.c(r,u)
r[u]=t}return r.join(b)},
h3:function(a){return this.u(a,"")},
G:function(a,b){if(b<0||b>=a.length)return H.c(a,b)
return a[b]},
dR:function(a,b,c){var u=a.length
if(b>u)throw H.d(P.aN(b,0,u,"start",null))
if(c==null)c=u
else if(c<b||c>u)throw H.d(P.aN(c,b,u,"end",null))
if(b===c)return H.b([],[H.aX(a,0)])
return H.b(a.slice(b,c),[H.aX(a,0)])},
gh0:function(a){if(a.length>0)return a[0]
throw H.d(H.jF())},
gc5:function(a){var u=a.length
if(u>0)return a[u-1]
throw H.d(H.jF())},
aR:function(a,b){if(!!a.immutable$list)H.n(P.y("sort"))
H.lh(a,b==null?J.lu():b)},
dQ:function(a){return this.aR(a,null)},
Z:function(a,b){var u
for(u=0;u<a.length;++u)if(J.w(a[u],b))return!0
return!1},
i:function(a){return P.ja(a,"[","]")},
gP:function(a){return new J.a_(a,a.length)},
gI:function(a){return H.c4(a)},
gk:function(a){return a.length},
sk:function(a,b){var u="newLength"
if(!!a.fixed$length)H.n(P.y("set length"))
if(typeof b!=="number"||Math.floor(b)!==b)throw H.d(P.j2(b,u,null))
if(b<0)throw H.d(P.aN(b,0,null,u,null))
a.length=b},
h:function(a,b){if(typeof b!=="number"||Math.floor(b)!==b)throw H.d(H.bf(a,b))
if(b>=a.length||b<0)throw H.d(H.bf(a,b))
return a[b]},
l:function(a,b,c){if(!!a.immutable$list)H.n(P.y("indexed set"))
if(b>=a.length||b<0)throw H.d(H.bf(a,b))
a[b]=c},
$ip:1,
$ij:1}
J.jc.prototype={}
J.a_.prototype={
gH:function(a){return this.d},
v:function(){var u,t=this,s=t.a,r=s.length
if(t.b!==r)throw H.d(H.o(s))
u=t.c
if(u>=r){t.d=null
return!1}t.d=s[u]
t.c=u+1
return!0}}
J.bU.prototype={
ai:function(a,b){var u
if(typeof b!=="number")throw H.d(H.aB(b))
if(a<b)return-1
else if(a>b)return 1
else if(a===b){if(a===0){u=this.gbl(b)
if(this.gbl(a)===u)return 0
if(this.gbl(a))return-1
return 1}return 0}else if(isNaN(a)){if(isNaN(b))return 0
return 1}else return-1},
gbl:function(a){return a===0?1/a<0:a<0},
dl:function(a){var u,t
if(a>=0){if(a<=2147483647)return a|0}else if(a>=-2147483648){u=a|0
return a===u?u:u-1}t=Math.floor(a)
if(isFinite(t))return t
throw H.d(P.y(""+a+".floor()"))},
an:function(a){if(a>0){if(a!==1/0)return Math.round(a)}else if(a>-1/0)return 0-Math.round(0-a)
throw H.d(P.y(""+a+".round()"))},
fQ:function(a,b,c){if(C.d.ai(b,c)>0)throw H.d(H.aB(b))
if(this.ai(a,b)<0)return b
if(this.ai(a,c)>0)return c
return a},
hw:function(a,b){var u
if(b>20)throw H.d(P.aN(b,0,20,"fractionDigits",null))
u=a.toFixed(b)
if(a===0&&this.gbl(a))return"-"+u
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
n:function(a,b){if(typeof b!=="number")throw H.d(H.aB(b))
return a*b},
dN:function(a,b){var u=a%b
if(u===0)return 0
if(u>0)return u
if(b<0)return u-b
else return u+b},
a9:function(a,b){return(a|0)===a?a/b|0:this.fz(a,b)},
fz:function(a,b){var u=a/b
if(u>=-2147483648&&u<=2147483647)return u|0
if(u>0){if(u!==1/0)return Math.floor(u)}else if(u>-1/0)return Math.ceil(u)
throw H.d(P.y("Result of truncating division is "+H.f(u)+": "+H.f(a)+" ~/ "+b))},
bb:function(a,b){var u
if(a>0)u=this.fw(a,b)
else{u=b>31?31:b
u=a>>u>>>0}return u},
fw:function(a,b){return b>31?0:a>>>b},
$iJ:1,
$ia9:1}
J.cO.prototype={$iv:1}
J.fg.prototype={}
J.bq.prototype={
bU:function(a,b){if(b<0)throw H.d(H.bf(a,b))
if(b>=a.length)H.n(H.bf(a,b))
return a.charCodeAt(b)},
bt:function(a,b){if(b>=a.length)throw H.d(H.bf(a,b))
return a.charCodeAt(b)},
w:function(a,b){if(typeof b!=="string")throw H.d(P.j2(b,null,null))
return a+b},
cq:function(a,b,c){if(c==null)c=a.length
if(b<0)throw H.d(P.d5(b,null))
if(b>c)throw H.d(P.d5(b,null))
if(c>a.length)throw H.d(P.d5(c,null))
return a.substring(b,c)},
aD:function(a,b){return this.cq(a,b,null)},
n:function(a,b){var u,t
if(0>=b)return""
if(b===1||a.length===0)return a
if(b!==b>>>0)throw H.d(C.y)
for(u=a,t="";!0;){if((b&1)===1)t=u+t
b=b>>>1
if(b===0)break
u+=u}return t},
ae:function(a,b){var u=b-a.length
if(u<=0)return a
return this.n(" ",u)+a},
ai:function(a,b){var u
if(typeof b!=="string")throw H.d(H.aB(b))
if(a===b)u=0
else u=a<b?-1:1
return u},
i:function(a){return a},
gI:function(a){var u,t,s
for(u=a.length,t=0,s=0;s<u;++s){t=536870911&t+a.charCodeAt(s)
t=536870911&t+((524287&t)<<10)
t^=t>>6}t=536870911&t+((67108863&t)<<3)
t^=t>>11
return 536870911&t+((16383&t)<<15)},
gk:function(a){return a.length},
$it:1}
H.R.prototype={
gk:function(a){return this.a.length},
h:function(a,b){return C.c.bU(this.a,b)},
$ap:function(){return[P.v]},
$aq:function(){return[P.v]},
$aj:function(){return[P.v]}}
H.p.prototype={}
H.bV.prototype={
gH:function(a){return this.d},
v:function(){var u,t=this,s=t.a,r=J.ej(s),q=r.gk(s)
if(t.b!=q)throw H.d(P.bM(s))
u=t.c
if(typeof q!=="number")return H.r(q)
if(u>=q){t.d=null
return!1}t.d=r.G(s,u);++t.c
return!0}}
H.bX.prototype={
gP:function(a){return new H.cU(J.bj(this.a),this.b)},
gk:function(a){return J.bk(this.a)},
G:function(a,b){return this.b.$1(J.j1(this.a,b))},
$aj:function(a,b){return[b]}}
H.eQ.prototype={$ip:1,
$ap:function(a,b){return[b]}}
H.cU.prototype={
v:function(){var u=this,t=u.b
if(t.v()){u.a=u.c.$1(t.gH(t))
return!0}u.a=null
return!1},
gH:function(a){return this.a}}
H.i8.prototype={
gP:function(a){return new H.i9(J.bj(this.a),this.b)}}
H.i9.prototype={
v:function(){var u,t
for(u=this.a,t=this.b;u.v();)if(t.$1(u.gH(u)))return!0
return!1},
gH:function(a){var u=this.a
return u.gH(u)}}
H.cK.prototype={}
H.hS.prototype={
l:function(a,b,c){throw H.d(P.y("Cannot modify an unmodifiable list"))}}
H.dk.prototype={}
H.hG.prototype={
ad:function(a){var u,t,s=this,r=new RegExp(s.a).exec(a)
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
H.fW.prototype={
i:function(a){var u=this.b
if(u==null)return"NoSuchMethodError: "+H.f(this.a)
return"NoSuchMethodError: method not found: '"+u+"' on null"}}
H.fj.prototype={
i:function(a){var u,t=this,s="NoSuchMethodError: method not found: '",r=t.b
if(r==null)return"NoSuchMethodError: "+H.f(t.a)
u=t.c
if(u==null)return s+r+"' ("+H.f(t.a)+")"
return s+r+"' on '"+u+"' ("+H.f(t.a)+")"}}
H.hR.prototype={
i:function(a){var u=this.a
return u.length===0?"Error":"Error: "+u}}
H.j0.prototype={
$1:function(a){if(!!J.a5(a).$ibo)if(a.$thrownJsError==null)a.$thrownJsError=this.a
return a},
$S:8}
H.e_.prototype={
i:function(a){var u,t=this.b
if(t!=null)return t
t=this.a
u=t!==null&&typeof t==="object"?t.stack:null
return this.b=u==null?"":u}}
H.bK.prototype={
i:function(a){var u=this.constructor,t=u==null?null:u.name
return"Closure '"+H.cs(t==null?"unknown":t)+"'"},
ghz:function(){return this},
$C:"$1",
$R:1,
$D:null}
H.hv.prototype={}
H.hp.prototype={
i:function(a){var u=this.$static_name
if(u==null)return"Closure of unknown static method"
return"Closure '"+H.cs(u)+"'"}}
H.bI.prototype={
q:function(a,b){var u=this
if(b==null)return!1
if(u===b)return!0
if(!(b instanceof H.bI))return!1
return u.a===b.a&&u.b===b.b&&u.c===b.c},
gI:function(a){var u,t=this.c
if(t==null)u=H.c4(this.a)
else u=typeof t!=="object"?J.bH(t):H.c4(t)
return(u^H.c4(this.b))>>>0},
i:function(a){var u=this.c
if(u==null)u=this.a
return"Closure '"+H.f(this.d)+"' of "+("Instance of '"+H.f(H.c5(u))+"'")}}
H.ey.prototype={
i:function(a){return this.a}}
H.ha.prototype={
i:function(a){return"RuntimeError: "+H.f(this.a)}}
H.G.prototype={
gk:function(a){return this.a},
gay:function(a){return new H.bs(this,[H.aX(this,0)])},
ghy:function(a){var u=this,t=H.aX(u,0)
return H.kX(new H.bs(u,[t]),new H.fi(u),t,H.aX(u,1))},
fS:function(a,b){var u=this.b
if(u==null)return!1
return this.ee(u,b)},
h:function(a,b){var u,t,s,r,q=this
if(typeof b==="string"){u=q.b
if(u==null)return
t=q.b9(u,b)
s=t==null?null:t.b
return s}else if(typeof b==="number"&&(b&0x3ffffff)===b){r=q.c
if(r==null)return
t=q.b9(r,b)
s=t==null?null:t.b
return s}else return q.h2(b)},
h2:function(a){var u,t,s=this.d
if(s==null)return
u=this.cJ(s,J.bH(a)&0x3ffffff)
t=this.dn(u,a)
if(t<0)return
return u[t].b},
l:function(a,b,c){var u,t,s,r,q,p,o=this
if(typeof b==="string"){u=o.b
o.cB(u==null?o.b=o.bG():u,b,c)}else if(typeof b==="number"&&(b&0x3ffffff)===b){t=o.c
o.cB(t==null?o.c=o.bG():t,b,c)}else{s=o.d
if(s==null)s=o.d=o.bG()
r=J.bH(b)&0x3ffffff
q=o.cJ(s,r)
if(q==null)o.bN(s,r,[o.bH(b,c)])
else{p=o.dn(q,b)
if(p>=0)q[p].b=c
else q.push(o.bH(b,c))}}},
F:function(a,b){var u=this,t=u.e,s=u.r
for(;t!=null;){b.$2(t.a,t.b)
if(s!==u.r)throw H.d(P.bM(u))
t=t.c}},
cB:function(a,b,c){var u=this.b9(a,b)
if(u==null)this.bN(a,b,this.bH(b,c))
else u.b=c},
bH:function(a,b){var u=this,t=new H.fn(a,b)
if(u.e==null)u.e=u.f=t
else u.f=u.f.c=t;++u.a
u.r=u.r+1&67108863
return t},
dn:function(a,b){var u,t
if(a==null)return-1
u=a.length
for(t=0;t<u;++t)if(J.w(a[t].a,b))return t
return-1},
i:function(a){return P.jI(this)},
b9:function(a,b){return a[b]},
cJ:function(a,b){return a[b]},
bN:function(a,b,c){a[b]=c},
eh:function(a,b){delete a[b]},
ee:function(a,b){return this.b9(a,b)!=null},
bG:function(){var u="<non-identifier-key>",t=Object.create(null)
this.bN(t,u,t)
this.eh(t,u)
return t}}
H.fi.prototype={
$1:function(a){return this.a.h(0,a)},
$S:function(){var u=this.a
return{func:1,ret:H.aX(u,1),args:[H.aX(u,0)]}}}
H.fn.prototype={}
H.bs.prototype={
gk:function(a){return this.a.a},
gP:function(a){var u=this.a,t=new H.fo(u,u.r)
t.c=u.e
return t}}
H.fo.prototype={
gH:function(a){return this.d},
v:function(){var u=this,t=u.a
if(u.b!==t.r)throw H.d(P.bM(t))
else{t=u.c
if(t==null){u.d=null
return!1}else{u.d=t.a
u.c=t.c
return!0}}}}
H.iL.prototype={
$1:function(a){return this.a(a)},
$S:8}
H.iM.prototype={
$2:function(a,b){return this.a(a,b)}}
H.iN.prototype={
$1:function(a){return this.a(a)}}
H.fh.prototype={
i:function(a){return"RegExp/"+this.a+"/"+this.b.flags}}
H.c2.prototype={}
H.cZ.prototype={
gk:function(a){return a.length},
$ix:1,
$ax:function(){}}
H.c1.prototype={
h:function(a,b){H.aA(b,a,a.length)
return a[b]},
l:function(a,b,c){H.aA(b,a,a.length)
a[b]=c},
$ip:1,
$ap:function(){return[P.J]},
$aq:function(){return[P.J]},
$ij:1,
$aj:function(){return[P.J]}}
H.d_.prototype={
l:function(a,b,c){H.aA(b,a,a.length)
a[b]=c},
$ip:1,
$ap:function(){return[P.v]},
$aq:function(){return[P.v]},
$ij:1,
$aj:function(){return[P.v]}}
H.fQ.prototype={
h:function(a,b){H.aA(b,a,a.length)
return a[b]}}
H.fR.prototype={
h:function(a,b){H.aA(b,a,a.length)
return a[b]}}
H.fS.prototype={
h:function(a,b){H.aA(b,a,a.length)
return a[b]}}
H.fT.prototype={
h:function(a,b){H.aA(b,a,a.length)
return a[b]}}
H.fU.prototype={
h:function(a,b){H.aA(b,a,a.length)
return a[b]}}
H.d0.prototype={
gk:function(a){return a.length},
h:function(a,b){H.aA(b,a,a.length)
return a[b]}}
H.fV.prototype={
gk:function(a){return a.length},
h:function(a,b){H.aA(b,a,a.length)
return a[b]}}
H.cd.prototype={}
H.ce.prototype={}
H.cf.prototype={}
H.cg.prototype={}
P.ib.prototype={
$1:function(a){var u=this.a,t=u.a
u.a=null
t.$0()},
$S:16}
P.ia.prototype={
$1:function(a){var u,t
this.a.a=a
u=this.b
t=this.c
u.firstChild?u.removeChild(t):u.appendChild(t)}}
P.ic.prototype={
$0:function(){this.a.$0()}}
P.id.prototype={
$0:function(){this.a.$0()}}
P.iy.prototype={
e2:function(a,b){if(self.setTimeout!=null)self.setTimeout(H.cq(new P.iz(this,b),0),a)
else throw H.d(P.y("`setTimeout()` not found."))}}
P.iz.prototype={
$0:function(){this.b.$0()}}
P.bC.prototype={
i:function(a){return"IterationMarker("+this.b+", "+H.f(this.a)+")"}}
P.cj.prototype={
gH:function(a){var u=this.c
if(u==null)return this.b
return u.gH(u)},
v:function(){var u,t,s,r,q=this
for(;!0;){u=q.c
if(u!=null)if(u.v())return!0
else q.c=null
t=function(a,b,c){var p,o=b
while(true)try{return a(o,p)}catch(n){p=n
o=c}}(q.a,0,1)
if(t instanceof P.bC){s=t.b
if(s===2){u=q.d
if(u==null||u.length===0){q.b=null
return!1}if(0>=u.length)return H.c(u,-1)
q.a=u.pop()
continue}else{u=t.a
if(s===3)throw u
else{r=J.bj(u)
if(!!r.$icj){u=q.d
if(u==null)u=q.d=[]
u.push(q.a)
q.a=r.a
continue}else{q.c=r
continue}}}}else{q.b=t
return!0}}return!1}}
P.ix.prototype={
gP:function(a){return new P.cj(this.a())}}
P.dt.prototype={}
P.dc.prototype={}
P.hs.prototype={}
P.iB.prototype={}
P.iG.prototype={
$0:function(){var u,t=this.a,s=t.a
t=s==null?t.a=new P.d2():s
s=this.b
if(s==null)throw H.d(t)
u=H.d(t)
u.stack=s.i(0)
throw u}}
P.ir.prototype={
hs:function(a){var u,t,s,r=null
try{if(C.e===$.az){a.$0()
return}P.lT(r,r,this,a)}catch(s){u=H.el(s)
t=H.ju(s)
P.k5(r,r,this,u,t)}},
ht:function(a,b){var u,t,s,r=null
try{if(C.e===$.az){a.$1(b)
return}P.lU(r,r,this,a,b)}catch(s){u=H.el(s)
t=H.ju(s)
P.k5(r,r,this,u,t)}},
hu:function(a,b){return this.ht(a,b,null)},
fO:function(a){return new P.is(this,a)},
fP:function(a,b){return new P.it(this,a,b)}}
P.is.prototype={
$0:function(){return this.a.hs(this.b)}}
P.it.prototype={
$1:function(a){return this.a.hu(this.b,a)},
$S:function(){return{func:1,ret:-1,args:[this.c]}}}
P.io.prototype={
gP:function(a){var u=new P.dI(this,this.r)
u.c=this.e
return u},
gk:function(a){return this.a},
Z:function(a,b){var u,t
if(typeof b==="string"&&b!=="__proto__"){u=this.b
if(u==null)return!1
return u[b]!=null}else{t=this.ec(b)
return t}},
ec:function(a){var u=this.d
if(u==null)return!1
return this.bx(this.cI(u,a),a)>=0},
j:function(a,b){var u,t,s=this
if(typeof b==="string"&&b!=="__proto__"){u=s.b
return s.cD(u==null?s.b=P.jo():u,b)}else if(typeof b==="number"&&(b&1073741823)===b){t=s.c
return s.cD(t==null?s.c=P.jo():t,b)}else return s.e4(0,b)},
e4:function(a,b){var u,t,s=this,r=s.d
if(r==null)r=s.d=P.jo()
u=s.cE(b)
t=r[u]
if(t==null)r[u]=[s.bu(b)]
else{if(s.bx(t,b)>=0)return!1
t.push(s.bu(b))}return!0},
B:function(a,b){if(typeof b==="number"&&(b&1073741823)===b)return this.fh(this.c,b)
else return this.fg(0,b)},
fg:function(a,b){var u,t,s=this,r=s.d
if(r==null)return!1
u=s.cI(r,b)
t=s.bx(u,b)
if(t<0)return!1
s.cV(u.splice(t,1)[0])
return!0},
cD:function(a,b){if(a[b]!=null)return!1
a[b]=this.bu(b)
return!0},
fh:function(a,b){var u
if(a==null)return!1
u=a[b]
if(u==null)return!1
this.cV(u)
delete a[b]
return!0},
cK:function(){this.r=1073741823&this.r+1},
bu:function(a){var u,t=this,s=new P.ip(a)
if(t.e==null)t.e=t.f=s
else{u=t.f
s.c=u
t.f=u.b=s}++t.a
t.cK()
return s},
cV:function(a){var u=this,t=a.c,s=a.b
if(t==null)u.e=s
else t.b=s
if(s==null)u.f=t
else s.c=t;--u.a
u.cK()},
cE:function(a){return J.bH(a)&1073741823},
cI:function(a,b){return a[this.cE(b)]},
bx:function(a,b){var u,t
if(a==null)return-1
u=a.length
for(t=0;t<u;++t)if(J.w(a[t].a,b))return t
return-1}}
P.ip.prototype={}
P.dI.prototype={
gH:function(a){return this.d},
v:function(){var u=this,t=u.a
if(u.b!==t.r)throw H.d(P.bM(t))
else{t=u.c
if(t==null){u.d=null
return!1}else{u.d=t.a
u.c=t.b
return!0}}}}
P.fd.prototype={}
P.fp.prototype={$ip:1,$ij:1}
P.q.prototype={
gP:function(a){return new H.bV(a,this.gk(a))},
G:function(a,b){return this.h(a,b)},
hv:function(a,b){var u,t,s=this,r=H.b([],[H.m8(s,a,"q",0)])
C.a.sk(r,s.gk(a))
u=0
while(!0){t=s.gk(a)
if(typeof t!=="number")return H.r(t)
if(!(u<t))break
t=s.h(a,u)
if(u>=r.length)return H.c(r,u)
r[u]=t;++u}return r},
ci:function(a){return this.hv(a,!0)},
i:function(a){return P.ja(a,"[","]")}}
P.fs.prototype={}
P.ft.prototype={
$2:function(a,b){var u,t=this.a
if(!t.a)this.b.a+=", "
t.a=!1
t=this.b
u=t.a+=H.f(a)
t.a=u+": "
t.a+=H.f(b)},
$S:9}
P.a2.prototype={
F:function(a,b){var u,t
for(u=J.bj(this.gay(a));u.v();){t=u.gH(u)
b.$2(t,this.h(a,t))}},
gk:function(a){return J.bk(this.gay(a))},
i:function(a){return P.jI(a)}}
P.iu.prototype={
i:function(a){return P.ja(this,"{","}")},
G:function(a,b){var u,t,s
P.jP(b,"index")
for(u=P.lq(this,this.r),t=0;u.v();){s=u.d
if(b===t)return s;++t}throw H.d(P.L(b,this,"index",null,t))},
$ip:1,
$ij:1}
P.dJ.prototype={}
P.eA.prototype={}
P.eD.prototype={}
P.eR.prototype={}
P.hV.prototype={}
P.hW.prototype={
fT:function(a){var u,t,s,r=P.ji(0,null,a.length)
if(typeof r!=="number")return r.E()
u=r-0
if(u===0)return new Uint8Array(0)
t=new Uint8Array(u*3)
s=new P.iA(t)
if(s.ej(a,0,r)!==r)s.cX(C.c.bU(a,r-1),0)
return new Uint8Array(t.subarray(0,H.ls(0,s.b,t.length)))}}
P.iA.prototype={
cX:function(a,b){var u,t=this,s=t.c,r=t.b,q=r+1,p=s.length
if((b&64512)===56320){u=65536+((a&1023)<<10)|b&1023
t.b=q
if(r>=p)return H.c(s,r)
s[r]=240|u>>>18
r=t.b=q+1
if(q>=p)return H.c(s,q)
s[q]=128|u>>>12&63
q=t.b=r+1
if(r>=p)return H.c(s,r)
s[r]=128|u>>>6&63
t.b=q+1
if(q>=p)return H.c(s,q)
s[q]=128|u&63
return!0}else{t.b=q
if(r>=p)return H.c(s,r)
s[r]=224|a>>>12
r=t.b=q+1
if(q>=p)return H.c(s,q)
s[q]=128|a>>>6&63
t.b=r+1
if(r>=p)return H.c(s,r)
s[r]=128|a&63
return!1}},
ej:function(a,b,c){var u,t,s,r,q,p,o,n=this
if(b!==c&&(C.c.bU(a,c-1)&64512)===55296)--c
for(u=n.c,t=u.length,s=b;s<c;++s){r=C.c.bt(a,s)
if(r<=127){q=n.b
if(q>=t)break
n.b=q+1
u[q]=r}else if((r&64512)===55296){if(n.b+3>=t)break
p=s+1
if(n.cX(r,C.c.bt(a,p)))s=p}else if(r<=2047){q=n.b
o=q+1
if(o>=t)break
n.b=o
if(q>=t)return H.c(u,q)
u[q]=192|r>>>6
n.b=o+1
u[o]=128|r&63}else{q=n.b
if(q+2>=t)break
o=n.b=q+1
if(q>=t)return H.c(u,q)
u[q]=224|r>>>12
q=n.b=o+1
if(o>=t)return H.c(u,o)
u[o]=128|r>>>6&63
n.b=q+1
if(q>=t)return H.c(u,q)
u[q]=128|r&63}}return s}}
P.be.prototype={}
P.ap.prototype={
q:function(a,b){if(b==null)return!1
return b instanceof P.ap&&this.a===b.a&&!0},
ai:function(a,b){return C.d.ai(this.a,b.a)},
gI:function(a){var u=this.a
return(u^C.d.bb(u,30))&1073741823},
i:function(a){var u=this,t=P.kN(H.l7(u)),s=P.cF(H.l5(u)),r=P.cF(H.l1(u)),q=P.cF(H.l2(u)),p=P.cF(H.l4(u)),o=P.cF(H.l6(u)),n=P.kO(H.l3(u)),m=t+"-"+s+"-"+r+" "+q+":"+p+":"+o+"."+n
return m}}
P.J.prototype={}
P.bO.prototype={
q:function(a,b){if(b==null)return!1
return b instanceof P.bO&&this.a===b.a},
gI:function(a){return C.d.gI(this.a)},
ai:function(a,b){return C.d.ai(this.a,b.a)},
i:function(a){var u,t,s,r=new P.eP(),q=this.a
if(q<0)return"-"+new P.bO(0-q).i(0)
u=r.$1(C.d.a9(q,6e7)%60)
t=r.$1(C.d.a9(q,1e6)%60)
s=new P.eO().$1(q%1e6)
return""+C.d.a9(q,36e8)+":"+H.f(u)+":"+H.f(t)+"."+H.f(s)}}
P.eO.prototype={
$1:function(a){if(a>=1e5)return""+a
if(a>=1e4)return"0"+a
if(a>=1000)return"00"+a
if(a>=100)return"000"+a
if(a>=10)return"0000"+a
return"00000"+a}}
P.eP.prototype={
$1:function(a){if(a>=10)return""+a
return"0"+a}}
P.bo.prototype={}
P.d2.prototype={
i:function(a){return"Throw of null."}}
P.aC.prototype={
gbw:function(){return"Invalid argument"+(!this.a?"(s)":"")},
gbv:function(){return""},
i:function(a){var u,t,s,r,q=this,p=q.c,o=p!=null?" ("+p+")":""
p=q.d
u=p==null?"":": "+p
t=q.gbw()+o+u
if(!q.a)return t
s=q.gbv()
r=P.j9(q.b)
return t+s+": "+r}}
P.bx.prototype={
gbw:function(){return"RangeError"},
gbv:function(){var u,t,s=this.e
if(s==null){s=this.f
u=s!=null?": Not less than or equal to "+H.f(s):""}else{t=this.f
if(t==null)u=": Not greater than or equal to "+H.f(s)
else if(t>s)u=": Not in range "+H.f(s)+".."+H.f(t)+", inclusive"
else u=t<s?": Valid value range is empty":": Only valid value is "+H.f(s)}return u}}
P.f5.prototype={
gbw:function(){return"RangeError"},
gbv:function(){var u,t=this.b
if(typeof t!=="number")return t.a7()
if(t<0)return": index must not be negative"
u=this.f
if(u===0)return": no indices are valid"
return": index should be less than "+H.f(u)},
gk:function(a){return this.f}}
P.hT.prototype={
i:function(a){return"Unsupported operation: "+this.a}}
P.hQ.prototype={
i:function(a){var u=this.a
return u!=null?"UnimplementedError: "+u:"UnimplementedError"}}
P.ho.prototype={
i:function(a){return"Bad state: "+this.a}}
P.eC.prototype={
i:function(a){var u=this.a
if(u==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+P.j9(u)+"."}}
P.fZ.prototype={
i:function(a){return"Out of Memory"},
$ibo:1}
P.da.prototype={
i:function(a){return"Stack Overflow"},
$ibo:1}
P.eI.prototype={
i:function(a){var u=this.a
return u==null?"Reading static variable during its initialization":"Reading static variable '"+u+"' during its initialization"}}
P.dB.prototype={
i:function(a){return"Exception: "+this.a}}
P.f1.prototype={
i:function(a){var u=this.a,t=""!==u?"FormatException: "+u:"FormatException",s=this.b,r=s.length>78?C.c.cq(s,0,75)+"...":s
return t+"\n"+r}}
P.v.prototype={}
P.j.prototype={
gk:function(a){var u,t=this.gP(this)
for(u=0;t.v();)++u
return u},
G:function(a,b){var u,t,s
P.jP(b,"index")
for(u=this.gP(this),t=0;u.v();){s=u.gH(u)
if(b===t)return s;++t}throw H.d(P.L(b,this,"index",null,t))},
i:function(a){return P.kQ(this,"(",")")}}
P.fe.prototype={}
P.b4.prototype={$ip:1,$ij:1}
P.bW.prototype={}
P.b5.prototype={
gI:function(a){return P.a3.prototype.gI.call(this,this)},
i:function(a){return"null"}}
P.a9.prototype={}
P.a3.prototype={constructor:P.a3,$ia3:1,
q:function(a,b){return this===b},
gI:function(a){return H.c4(this)},
i:function(a){return"Instance of '"+H.f(H.c5(this))+"'"},
toString:function(){return this.i(this)}}
P.t.prototype={}
P.aR.prototype={
gk:function(a){return this.a.length},
i:function(a){var u=this.a
return u.charCodeAt(0)==0?u:u}}
W.m.prototype={}
W.em.prototype={
gk:function(a){return a.length}}
W.eo.prototype={
i:function(a){return String(a)}}
W.ep.prototype={
i:function(a){return String(a)}}
W.cy.prototype={}
W.bn.prototype={
dM:function(a,b,c){var u=a.getContext(b,P.m1(c))
return u},
$ibn:1}
W.aZ.prototype={
gk:function(a){return a.length}}
W.eE.prototype={
gk:function(a){return a.length}}
W.H.prototype={$iH:1}
W.bN.prototype={
gk:function(a){return a.length}}
W.eF.prototype={}
W.ab.prototype={}
W.ao.prototype={}
W.eG.prototype={
gk:function(a){return a.length}}
W.eH.prototype={
gk:function(a){return a.length}}
W.eJ.prototype={
gk:function(a){return a.length}}
W.eL.prototype={
i:function(a){return String(a)}}
W.cH.prototype={
gk:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.L(b,a,null,null,null))
return a[b]},
l:function(a,b,c){throw H.d(P.y("Cannot assign element of immutable List."))},
G:function(a,b){if(b<0||b>=a.length)return H.c(a,b)
return a[b]},
$ip:1,
$ap:function(){return[[P.a7,P.a9]]},
$ix:1,
$ax:function(){return[[P.a7,P.a9]]},
$aq:function(){return[[P.a7,P.a9]]},
$ij:1,
$aj:function(){return[[P.a7,P.a9]]}}
W.cI.prototype={
i:function(a){return"Rectangle ("+H.f(a.left)+", "+H.f(a.top)+") "+H.f(this.gaC(a))+" x "+H.f(this.gax(a))},
q:function(a,b){var u
if(b==null)return!1
u=J.a5(b)
return!!u.$ia7&&a.left===u.gbm(b)&&a.top===u.gbp(b)&&this.gaC(a)===u.gaC(b)&&this.gax(a)===u.gax(b)},
gI:function(a){return W.k2(C.b.gI(a.left),C.b.gI(a.top),C.b.gI(this.gaC(a)),C.b.gI(this.gax(a)))},
gd4:function(a){return a.bottom},
gax:function(a){return a.height},
gbm:function(a){return a.left},
gbn:function(a){return a.right},
gbp:function(a){return a.top},
gaC:function(a){return a.width},
$ia7:1,
$aa7:function(){return[P.a9]}}
W.eM.prototype={
gk:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.L(b,a,null,null,null))
return a[b]},
l:function(a,b,c){throw H.d(P.y("Cannot assign element of immutable List."))},
G:function(a,b){if(b<0||b>=a.length)return H.c(a,b)
return a[b]},
$ip:1,
$ap:function(){return[P.t]},
$ix:1,
$ax:function(){return[P.t]},
$aq:function(){return[P.t]},
$ij:1,
$aj:function(){return[P.t]}}
W.eN.prototype={
gk:function(a){return a.length}}
W.ig.prototype={
gk:function(a){return this.b.length},
h:function(a,b){var u=this.b
if(b<0||b>=u.length)return H.c(u,b)
return u[b]},
l:function(a,b,c){var u=this.b
if(b<0||b>=u.length)return H.c(u,b)
this.a.replaceChild(c,u[b])},
j:function(a,b){this.a.appendChild(b)
return b},
gP:function(a){var u=this.ci(this)
return new J.a_(u,u.length)},
$ap:function(){return[W.U]},
$aq:function(){return[W.U]},
$aj:function(){return[W.U]}}
W.U.prototype={
gd6:function(a){return new W.ig(a,a.children)},
gd7:function(a){var u=a.clientLeft,t=a.clientTop,s=a.clientWidth,r=a.clientHeight
if(typeof s!=="number")return s.a7()
if(s<0)s=-s*0
if(typeof r!=="number")return r.a7()
if(r<0)r=-r*0
return new P.a7(u,t,s,r,[P.a9])},
i:function(a){return a.localName},
$iU:1}
W.h.prototype={$ih:1}
W.e.prototype={
fI:function(a,b,c,d){if(c!=null)this.e5(a,b,c,!1)},
e5:function(a,b,c,d){return a.addEventListener(b,H.cq(c,1),!1)}}
W.aG.prototype={$iaG:1}
W.eW.prototype={
gk:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.L(b,a,null,null,null))
return a[b]},
l:function(a,b,c){throw H.d(P.y("Cannot assign element of immutable List."))},
G:function(a,b){if(b<0||b>=a.length)return H.c(a,b)
return a[b]},
$ip:1,
$ap:function(){return[W.aG]},
$ix:1,
$ax:function(){return[W.aG]},
$aq:function(){return[W.aG]},
$ij:1,
$aj:function(){return[W.aG]}}
W.eX.prototype={
gk:function(a){return a.length}}
W.f0.prototype={
gk:function(a){return a.length}}
W.aH.prototype={$iaH:1}
W.f4.prototype={
gk:function(a){return a.length}}
W.bT.prototype={
gk:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.L(b,a,null,null,null))
return a[b]},
l:function(a,b,c){throw H.d(P.y("Cannot assign element of immutable List."))},
G:function(a,b){if(b<0||b>=a.length)return H.c(a,b)
return a[b]},
$ip:1,
$ap:function(){return[W.F]},
$ix:1,
$ax:function(){return[W.F]},
$aq:function(){return[W.F]},
$ij:1,
$aj:function(){return[W.F]}}
W.br.prototype={$ibr:1}
W.fq.prototype={
i:function(a){return String(a)}}
W.fJ.prototype={
gk:function(a){return a.length}}
W.fK.prototype={
h:function(a,b){return P.aW(a.get(b))},
F:function(a,b){var u,t=a.entries()
for(;!0;){u=t.next()
if(u.done)return
b.$2(u.value[0],P.aW(u.value[1]))}},
gay:function(a){var u=H.b([],[P.t])
this.F(a,new W.fL(u))
return u},
gk:function(a){return a.size},
$aa2:function(){return[P.t,null]}}
W.fL.prototype={
$2:function(a,b){return this.a.push(a)}}
W.fM.prototype={
h:function(a,b){return P.aW(a.get(b))},
F:function(a,b){var u,t=a.entries()
for(;!0;){u=t.next()
if(u.done)return
b.$2(u.value[0],P.aW(u.value[1]))}},
gay:function(a){var u=H.b([],[P.t])
this.F(a,new W.fN(u))
return u},
gk:function(a){return a.size},
$aa2:function(){return[P.t,null]}}
W.fN.prototype={
$2:function(a,b){return this.a.push(a)}}
W.aK.prototype={$iaK:1}
W.fO.prototype={
gk:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.L(b,a,null,null,null))
return a[b]},
l:function(a,b,c){throw H.d(P.y("Cannot assign element of immutable List."))},
G:function(a,b){if(b<0||b>=a.length)return H.c(a,b)
return a[b]},
$ip:1,
$ap:function(){return[W.aK]},
$ix:1,
$ax:function(){return[W.aK]},
$aq:function(){return[W.aK]},
$ij:1,
$aj:function(){return[W.aK]}}
W.at.prototype={$iat:1}
W.ie.prototype={
l:function(a,b,c){var u=this.a,t=u.childNodes
if(b<0||b>=t.length)return H.c(t,b)
u.replaceChild(c,t[b])},
gP:function(a){var u=this.a.childNodes
return new W.cL(u,u.length)},
gk:function(a){return this.a.childNodes.length},
h:function(a,b){var u=this.a.childNodes
if(b<0||b>=u.length)return H.c(u,b)
return u[b]},
$ap:function(){return[W.F]},
$aq:function(){return[W.F]},
$aj:function(){return[W.F]}}
W.F.prototype={
hq:function(a,b){var u,t
try{u=a.parentNode
J.kC(u,b,a)}catch(t){H.el(t)}return a},
i:function(a){var u=a.nodeValue
return u==null?this.dT(a):u},
fj:function(a,b,c){return a.replaceChild(b,c)},
$iF:1}
W.d1.prototype={
gk:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.L(b,a,null,null,null))
return a[b]},
l:function(a,b,c){throw H.d(P.y("Cannot assign element of immutable List."))},
G:function(a,b){if(b<0||b>=a.length)return H.c(a,b)
return a[b]},
$ip:1,
$ap:function(){return[W.F]},
$ix:1,
$ax:function(){return[W.F]},
$aq:function(){return[W.F]},
$ij:1,
$aj:function(){return[W.F]}}
W.aM.prototype={$iaM:1,
gk:function(a){return a.length}}
W.h0.prototype={
gk:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.L(b,a,null,null,null))
return a[b]},
l:function(a,b,c){throw H.d(P.y("Cannot assign element of immutable List."))},
G:function(a,b){if(b<0||b>=a.length)return H.c(a,b)
return a[b]},
$ip:1,
$ap:function(){return[W.aM]},
$ix:1,
$ax:function(){return[W.aM]},
$aq:function(){return[W.aM]},
$ij:1,
$aj:function(){return[W.aM]}}
W.h8.prototype={
h:function(a,b){return P.aW(a.get(b))},
F:function(a,b){var u,t=a.entries()
for(;!0;){u=t.next()
if(u.done)return
b.$2(u.value[0],P.aW(u.value[1]))}},
gay:function(a){var u=H.b([],[P.t])
this.F(a,new W.h9(u))
return u},
gk:function(a){return a.size},
$aa2:function(){return[P.t,null]}}
W.h9.prototype={
$2:function(a,b){return this.a.push(a)}}
W.hb.prototype={
gk:function(a){return a.length}}
W.aO.prototype={$iaO:1}
W.hk.prototype={
gk:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.L(b,a,null,null,null))
return a[b]},
l:function(a,b,c){throw H.d(P.y("Cannot assign element of immutable List."))},
G:function(a,b){if(b<0||b>=a.length)return H.c(a,b)
return a[b]},
$ip:1,
$ap:function(){return[W.aO]},
$ix:1,
$ax:function(){return[W.aO]},
$aq:function(){return[W.aO]},
$ij:1,
$aj:function(){return[W.aO]}}
W.aP.prototype={$iaP:1}
W.hl.prototype={
gk:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.L(b,a,null,null,null))
return a[b]},
l:function(a,b,c){throw H.d(P.y("Cannot assign element of immutable List."))},
G:function(a,b){if(b<0||b>=a.length)return H.c(a,b)
return a[b]},
$ip:1,
$ap:function(){return[W.aP]},
$ix:1,
$ax:function(){return[W.aP]},
$aq:function(){return[W.aP]},
$ij:1,
$aj:function(){return[W.aP]}}
W.aQ.prototype={$iaQ:1,
gk:function(a){return a.length}}
W.hq.prototype={
h:function(a,b){return a.getItem(b)},
F:function(a,b){var u,t
for(u=0;!0;++u){t=a.key(u)
if(t==null)return
b.$2(t,a.getItem(t))}},
gay:function(a){var u=H.b([],[P.t])
this.F(a,new W.hr(u))
return u},
gk:function(a){return a.length},
$aa2:function(){return[P.t,P.t]}}
W.hr.prototype={
$2:function(a,b){return this.a.push(a)}}
W.av.prototype={$iav:1}
W.aS.prototype={$iaS:1}
W.aw.prototype={$iaw:1}
W.hw.prototype={
gk:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.L(b,a,null,null,null))
return a[b]},
l:function(a,b,c){throw H.d(P.y("Cannot assign element of immutable List."))},
G:function(a,b){if(b<0||b>=a.length)return H.c(a,b)
return a[b]},
$ip:1,
$ap:function(){return[W.aw]},
$ix:1,
$ax:function(){return[W.aw]},
$aq:function(){return[W.aw]},
$ij:1,
$aj:function(){return[W.aw]}}
W.hx.prototype={
gk:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.L(b,a,null,null,null))
return a[b]},
l:function(a,b,c){throw H.d(P.y("Cannot assign element of immutable List."))},
G:function(a,b){if(b<0||b>=a.length)return H.c(a,b)
return a[b]},
$ip:1,
$ap:function(){return[W.aS]},
$ix:1,
$ax:function(){return[W.aS]},
$aq:function(){return[W.aS]},
$ij:1,
$aj:function(){return[W.aS]}}
W.hA.prototype={
gk:function(a){return a.length}}
W.aT.prototype={$iaT:1}
W.by.prototype={$iby:1}
W.hD.prototype={
gk:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.L(b,a,null,null,null))
return a[b]},
l:function(a,b,c){throw H.d(P.y("Cannot assign element of immutable List."))},
G:function(a,b){if(b<0||b>=a.length)return H.c(a,b)
return a[b]},
$ip:1,
$ap:function(){return[W.aT]},
$ix:1,
$ax:function(){return[W.aT]},
$aq:function(){return[W.aT]},
$ij:1,
$aj:function(){return[W.aT]}}
W.hE.prototype={
gk:function(a){return a.length}}
W.b8.prototype={}
W.hU.prototype={
i:function(a){return String(a)}}
W.i7.prototype={
gk:function(a){return a.length}}
W.bc.prototype={
gfW:function(a){if(a.deltaY!==undefined)return a.deltaY
throw H.d(P.y("deltaY is not supported"))},
gfV:function(a){if(a.deltaX!==undefined)return a.deltaX
throw H.d(P.y("deltaX is not supported"))},
$ibc:1}
W.cc.prototype={
fl:function(a,b){return a.requestAnimationFrame(H.cq(b,1))},
ei:function(a){if(!!(a.requestAnimationFrame&&a.cancelAnimationFrame))return;(function(b){var u=['ms','moz','webkit','o']
for(var t=0;t<u.length&&!b.requestAnimationFrame;++t){b.requestAnimationFrame=b[u[t]+'RequestAnimationFrame']
b.cancelAnimationFrame=b[u[t]+'CancelAnimationFrame']||b[u[t]+'CancelRequestAnimationFrame']}if(b.requestAnimationFrame&&b.cancelAnimationFrame)return
b.requestAnimationFrame=function(c){return window.setTimeout(function(){c(Date.now())},16)}
b.cancelAnimationFrame=function(c){clearTimeout(c)}})(a)}}
W.ih.prototype={
gk:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.L(b,a,null,null,null))
return a[b]},
l:function(a,b,c){throw H.d(P.y("Cannot assign element of immutable List."))},
G:function(a,b){if(b<0||b>=a.length)return H.c(a,b)
return a[b]},
$ip:1,
$ap:function(){return[W.H]},
$ix:1,
$ax:function(){return[W.H]},
$aq:function(){return[W.H]},
$ij:1,
$aj:function(){return[W.H]}}
W.dw.prototype={
i:function(a){return"Rectangle ("+H.f(a.left)+", "+H.f(a.top)+") "+H.f(a.width)+" x "+H.f(a.height)},
q:function(a,b){var u
if(b==null)return!1
u=J.a5(b)
return!!u.$ia7&&a.left===u.gbm(b)&&a.top===u.gbp(b)&&a.width===u.gaC(b)&&a.height===u.gax(b)},
gI:function(a){return W.k2(C.b.gI(a.left),C.b.gI(a.top),C.b.gI(a.width),C.b.gI(a.height))},
gax:function(a){return a.height},
gaC:function(a){return a.width}}
W.ik.prototype={
gk:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.L(b,a,null,null,null))
return a[b]},
l:function(a,b,c){throw H.d(P.y("Cannot assign element of immutable List."))},
G:function(a,b){if(b<0||b>=a.length)return H.c(a,b)
return a[b]},
$ip:1,
$ap:function(){return[W.aH]},
$ix:1,
$ax:function(){return[W.aH]},
$aq:function(){return[W.aH]},
$ij:1,
$aj:function(){return[W.aH]}}
W.dO.prototype={
gk:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.L(b,a,null,null,null))
return a[b]},
l:function(a,b,c){throw H.d(P.y("Cannot assign element of immutable List."))},
G:function(a,b){if(b<0||b>=a.length)return H.c(a,b)
return a[b]},
$ip:1,
$ap:function(){return[W.F]},
$ix:1,
$ax:function(){return[W.F]},
$aq:function(){return[W.F]},
$ij:1,
$aj:function(){return[W.F]}}
W.iv.prototype={
gk:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.L(b,a,null,null,null))
return a[b]},
l:function(a,b,c){throw H.d(P.y("Cannot assign element of immutable List."))},
G:function(a,b){if(b<0||b>=a.length)return H.c(a,b)
return a[b]},
$ip:1,
$ap:function(){return[W.aQ]},
$ix:1,
$ax:function(){return[W.aQ]},
$aq:function(){return[W.aQ]},
$ij:1,
$aj:function(){return[W.aQ]}}
W.iw.prototype={
gk:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.L(b,a,null,null,null))
return a[b]},
l:function(a,b,c){throw H.d(P.y("Cannot assign element of immutable List."))},
G:function(a,b){if(b<0||b>=a.length)return H.c(a,b)
return a[b]},
$ip:1,
$ap:function(){return[W.av]},
$ix:1,
$ax:function(){return[W.av]},
$aq:function(){return[W.av]},
$ij:1,
$aj:function(){return[W.av]}}
W.ii.prototype={}
W.ij.prototype={
$1:function(a){return this.a.$1(a)}}
W.K.prototype={
gP:function(a){return new W.cL(a,this.gk(a))}}
W.cL.prototype={
v:function(){var u=this,t=u.c+1,s=u.b
if(t<s){u.d=J.cu(u.a,t)
u.c=t
return!0}u.d=null
u.c=s
return!1},
gH:function(a){return this.d}}
W.dv.prototype={}
W.dx.prototype={}
W.dy.prototype={}
W.dz.prototype={}
W.dA.prototype={}
W.dC.prototype={}
W.dD.prototype={}
W.dE.prototype={}
W.dF.prototype={}
W.dK.prototype={}
W.dL.prototype={}
W.dM.prototype={}
W.dN.prototype={}
W.dP.prototype={}
W.dQ.prototype={}
W.dT.prototype={}
W.dU.prototype={}
W.dV.prototype={}
W.ch.prototype={}
W.ci.prototype={}
W.dW.prototype={}
W.dX.prototype={}
W.e0.prototype={}
W.e3.prototype={}
W.e4.prototype={}
W.ck.prototype={}
W.cl.prototype={}
W.e5.prototype={}
W.e6.prototype={}
W.e9.prototype={}
W.ea.prototype={}
W.eb.prototype={}
W.ec.prototype={}
W.ed.prototype={}
W.ee.prototype={}
W.ef.prototype={}
W.eg.prototype={}
W.eh.prototype={}
W.ei.prototype={}
P.iH.prototype={
$2:function(a,b){this.a[a]=b},
$S:9}
P.eY.prototype={
gba:function(){var u=this.b,t=H.kc(u,"q",0)
return new H.bX(new H.i8(u,new P.eZ(),[t]),new P.f_(),[t,W.U])},
l:function(a,b,c){var u=this.gba()
J.kF(u.b.$1(J.j1(u.a,b)),c)},
j:function(a,b){this.b.a.appendChild(b)},
gk:function(a){return J.bk(this.gba().a)},
h:function(a,b){var u=this.gba()
return u.b.$1(J.j1(u.a,b))},
gP:function(a){var u=P.jg(this.gba(),!1,W.U)
return new J.a_(u,u.length)},
$ap:function(){return[W.U]},
$aq:function(){return[W.U]},
$aj:function(){return[W.U]}}
P.eZ.prototype={
$1:function(a){return!!J.a5(a).$iU}}
P.f_.prototype={
$1:function(a){return H.k(a,"$iU")}}
P.iq.prototype={
gbn:function(a){var u=this.a,t=this.c
if(typeof u!=="number")return u.w()
if(typeof t!=="number")return H.r(t)
return u+t},
gd4:function(a){var u=this.b,t=this.d
if(typeof u!=="number")return u.w()
if(typeof t!=="number")return H.r(t)
return u+t},
i:function(a){var u=this
return"Rectangle ("+H.f(u.a)+", "+H.f(u.b)+") "+H.f(u.c)+" x "+H.f(u.d)},
q:function(a,b){var u,t,s,r,q=this
if(b==null)return!1
u=J.a5(b)
if(!!u.$ia7){t=q.a
if(t==u.gbm(b)){s=q.b
if(s==u.gbp(b)){r=q.c
if(typeof t!=="number")return t.w()
if(typeof r!=="number")return H.r(r)
if(t+r===u.gbn(b)){t=q.d
if(typeof s!=="number")return s.w()
if(typeof t!=="number")return H.r(t)
u=s+t===u.gd4(b)}else u=!1}else u=!1}else u=!1}else u=!1
return u},
gI:function(a){var u=this,t=u.a,s=J.bH(t),r=u.b,q=J.bH(r),p=u.c
if(typeof t!=="number")return t.w()
if(typeof p!=="number")return H.r(p)
p=C.d.gI(t+p)
t=u.d
if(typeof r!=="number")return r.w()
if(typeof t!=="number")return H.r(t)
t=C.d.gI(r+t)
return P.lp(P.im(P.im(P.im(P.im(0,s),q),p),t))}}
P.a7.prototype={
gbm:function(a){return this.a},
gbp:function(a){return this.b},
gaC:function(a){return this.c},
gax:function(a){return this.d}}
P.b3.prototype={$ib3:1}
P.fl.prototype={
gk:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.L(b,a,null,null,null))
return a.getItem(b)},
l:function(a,b,c){throw H.d(P.y("Cannot assign element of immutable List."))},
G:function(a,b){return this.h(a,b)},
$ip:1,
$ap:function(){return[P.b3]},
$aq:function(){return[P.b3]},
$ij:1,
$aj:function(){return[P.b3]}}
P.b6.prototype={$ib6:1}
P.fX.prototype={
gk:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.L(b,a,null,null,null))
return a.getItem(b)},
l:function(a,b,c){throw H.d(P.y("Cannot assign element of immutable List."))},
G:function(a,b){return this.h(a,b)},
$ip:1,
$ap:function(){return[P.b6]},
$aq:function(){return[P.b6]},
$ij:1,
$aj:function(){return[P.b6]}}
P.h3.prototype={
gk:function(a){return a.length}}
P.ht.prototype={
gk:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.L(b,a,null,null,null))
return a.getItem(b)},
l:function(a,b,c){throw H.d(P.y("Cannot assign element of immutable List."))},
G:function(a,b){return this.h(a,b)},
$ip:1,
$ap:function(){return[P.t]},
$aq:function(){return[P.t]},
$ij:1,
$aj:function(){return[P.t]}}
P.l.prototype={
gd6:function(a){return new P.eY(a,new W.ie(a))}}
P.b7.prototype={$ib7:1}
P.hF.prototype={
gk:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.L(b,a,null,null,null))
return a.getItem(b)},
l:function(a,b,c){throw H.d(P.y("Cannot assign element of immutable List."))},
G:function(a,b){return this.h(a,b)},
$ip:1,
$ap:function(){return[P.b7]},
$aq:function(){return[P.b7]},
$ij:1,
$aj:function(){return[P.b7]}}
P.dG.prototype={}
P.dH.prototype={}
P.dR.prototype={}
P.dS.prototype={}
P.e1.prototype={}
P.e2.prototype={}
P.e7.prototype={}
P.e8.prototype={}
P.er.prototype={
gk:function(a){return a.length}}
P.es.prototype={
h:function(a,b){return P.aW(a.get(b))},
F:function(a,b){var u,t=a.entries()
for(;!0;){u=t.next()
if(u.done)return
b.$2(u.value[0],P.aW(u.value[1]))}},
gay:function(a){var u=H.b([],[P.t])
this.F(a,new P.et(u))
return u},
gk:function(a){return a.size},
$aa2:function(){return[P.t,null]}}
P.et.prototype={
$2:function(a,b){return this.a.push(a)}}
P.eu.prototype={
gk:function(a){return a.length}}
P.bl.prototype={}
P.fY.prototype={
gk:function(a){return a.length}}
P.du.prototype={}
P.hn.prototype={
gk:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.L(b,a,null,null,null))
return P.aW(a.item(b))},
l:function(a,b,c){throw H.d(P.y("Cannot assign element of immutable List."))},
G:function(a,b){return this.h(a,b)},
$ip:1,
$ap:function(){return[[P.bW,,,]]},
$aq:function(){return[[P.bW,,,]]},
$ij:1,
$aj:function(){return[[P.bW,,,]]}}
P.dY.prototype={}
P.dZ.prototype={}
K.en.prototype={
aM:function(a,b){return!0},
i:function(a){return"all"}}
K.cM.prototype={
aM:function(a,b){var u,t,s
for(u=this.a,t=u.length,s=0;s<u.length;u.length===t||(0,H.o)(u),++s)if(u[s].aM(0,b))return!0
return!1},
i:function(a){var u,t,s,r,q
for(u=this.a,t=u.length,s="",r=0;r<u.length;u.length===t||(0,H.o)(u),++r){q=u[r]
if(s.length!==0)s+=", "
s+=q.i(0)}return s}}
K.cV.prototype={}
K.aL.prototype={
aM:function(a,b){return!this.dS(0,b)},
i:function(a){return"!["+this.cr(0)+"]"}}
K.hc.prototype={
dX:function(a){var u,t,s,r
if(a.a.length<=0)throw H.d(P.i("May not create a Set with zero characters."))
u=P.v
t=new H.G([u,P.be])
for(s=new H.bV(a,a.gk(a));s.v();)t.l(0,s.d,!0)
r=P.jg(new H.bs(t,[u]),!0,u)
C.a.dQ(r)
this.a=r},
aM:function(a,b){return C.a.Z(this.a,b)},
i:function(a){return P.jj(this.a)}}
L.db.prototype={
u:function(a,b){var u,t,s,r
for(u=this.c,t=u.length,s=0;s<t;++s){r=u[s]
if(r.b.b===b)return r}r=new L.di(this.a.K(0,b))
r.a=H.b([],[K.cV])
r.c=!1
this.c.push(r)
return r},
h_:function(a){var u,t,s,r
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.o)(u),++s){r=u[s]
if(r.aM(0,a))return r}return},
i:function(a){return this.b},
cU:function(){var u,t,s,r,q,p=this,o="("+p.b+")",n=p.d
if(n!=null){n=n.b
o+=" => ["+n+"]"
u=p.a
if(u.c.Z(0,n))o+=" (consume)"
for(n=p.d.c,n=new H.bs(n,[H.aX(n,0)]),n=n.gP(n);n.v();){t=n.d
o+="\n"
s=p.d.c.h(0,t)
t=o+("  -- "+H.f(t)+" => ["+H.f(s)+"]")
o=u.c.Z(0,s)?t+" (consume)":t}}for(n=p.c,u=n.length,r=0;r<n.length;n.length===u||(0,H.o)(n),++r){q=n[r]
o=o+"\n"+("  -- "+q.i(0))}return o.charCodeAt(0)==0?o:o}}
L.df.prototype={
i:function(a){var u=H.kk(this.b,"\n","\\n"),t=H.kk(u,"\t","\\t")
return this.a+":"+this.c+':"'+t+'"'}}
L.dg.prototype={
i:function(a){return this.b}}
L.hB.prototype={
K:function(a,b){var u=this.a.h(0,b)
if(u==null){u=new L.db(this,b)
u.c=H.b([],[L.di])
this.a.l(0,b,u)}return u},
b5:function(a){var u,t=this.b.h(0,a)
if(t==null){t=new L.dg(a)
u=P.t
t.c=new H.G([u,u])
this.b.l(0,a,t)}return t},
dJ:function(a){return this.hx(a)},
hx:function(a){var u=this
return P.lw(function(){var t=a
var s=0,r=1,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c
return function $async$dJ(b,a0){if(b===1){q=a0
s=r}while(true)switch(s){case 0:g=u.d
f=[P.v]
e=H.b([],f)
d=H.b([],f)
c=H.b([],f)
p=null,o=0,n=0,m=0
case 2:if(!!0){s=3
break}if(c.length!==0)l=C.a.cc(c,0)
else{if(!t.v()){s=3
break}l=t.d}d.push(l);++o
k=g.h_(l)
s=k==null?4:6
break
case 4:if(p==null){j=P.jj(d)
throw H.d(P.i("Untokenizable string [state: "+g.b+", index "+o+']: "'+j+'"'))}if(!!d.fixed$length)H.n(P.y("removeRange"))
P.ji(0,m,d.length)
d.splice(0,m-0)
C.a.bd(c,d)
d=H.b([],f)
e=H.b([],f)
g=u.d
s=!u.c.Z(0,p.a)?7:8
break
case 7:s=9
return p
case 9:case 8:o=n
p=null
m=0
s=5
break
case 6:if(!k.c)e.push(l)
g=k.b
if(g.d!=null){j=P.jj(e)
i=g.d
h=i.c.h(0,j)
p=new L.df(h==null?i.b:h,j,o)
m=d.length
n=o}case 5:s=2
break
case 3:s=p!=null&&!u.c.Z(0,p.a)?10:11
break
case 10:s=12
return p
case 12:case 11:return P.ln()
case 1:return P.lo(q)}}},L.df)},
i:function(a){var u,t=new P.aR(""),s=this.d
if(s!=null)t.a=s.cU()+"\n"
for(s=this.a,s=s.ghy(s),s=new H.cU(J.bj(s.a),s.b);s.v();){u=s.a
if(u!=this.d)t.a+=u.cU()+"\n"}s=t.a
return s.charCodeAt(0)==0?s:s}}
L.di.prototype={
i:function(a){return this.b.b+": "+this.cr(0)}}
O.aD.prototype={
b7:function(a){this.a=H.b([],[a])
this.c=this.b=null},
cm:function(a,b,c){this.b=b
this.c=a},
aP:function(a,b){return this.cm(a,null,b)},
cO:function(a){var u=this.b
if(u!=null)return u.$1(a)
return!0},
cL:function(a,b){var u=this.c
if(u!=null)u.$2(a,b)},
gk:function(a){return this.a.length},
gP:function(a){var u=this.a
return new J.a_(u,u.length)},
G:function(a,b){var u=this.a
if(b<0||b>=u.length)return H.c(u,b)
return u[b]},
j:function(a,b){var u,t,s=this,r=[H.kc(s,"aD",0)]
if(s.cO(H.b([b],r))){u=s.a
t=u.length
u.push(b)
s.cL(t,H.b([b],r))}},
bd:function(a,b){var u,t
if(this.cO(b)){u=this.a
t=u.length
C.a.bd(u,b)
this.cL(t,b)}},
$ij:1}
O.bY.prototype={
gk:function(a){return this.a.length},
gt:function(){var u=this.b
return u==null?this.b=D.I():u},
aE:function(){var u=this.b
if(u!=null)u.C(null)},
gM:function(a){var u=this.a
if(u.length>0)return C.a.gc5(u)
else return V.c_()},
dF:function(a){var u=this.a
if(a==null)u.push(V.c_())
else u.push(a)
this.aE()},
cb:function(){var u=this.a
if(u.length>0){u.pop()
this.aE()}}}
E.ew.prototype={}
E.aE.prototype={
cC:function(){var u,t
this.e=null
for(u=this.y.a,u=new J.a_(u,u.length);u.v();){t=u.d
if(t.f==null)t.cC()}},
sa1:function(a,b){var u,t,s=this,r=s.c
if(r!=b){s.d=s.c=b
s.e=null
if(r!=null)r.gt().B(0,s.gdz())
u=s.c
if(u!=null)u.gt().j(0,s.gdz())
t=new D.z("shape",r,s.c)
t.b=!0
s.al(t)}},
sa6:function(a){var u,t,s=this,r=s.f
if(r!=a){if(r!=null)r.gt().B(0,s.gdB())
u=s.f
s.f=a
if(a!=null)a.gt().j(0,s.gdB())
s.cC()
t=new D.z("technique",u,s.f)
t.b=!0
s.al(t)}},
sT:function(a){var u,t,s=this
if(!J.w(s.r,a)){u=s.r
if(u!=null)u.gt().B(0,s.gdv())
if(a!=null)a.gt().j(0,s.gdv())
s.r=a
t=new D.z("mover",u,a)
t.b=!0
s.al(t)}},
ab:function(a,b){var u,t,s=this,r=s.r,q=r!=null?r.aO(0,b,s):null
if(!J.w(q,s.x)){u=s.x
s.x=q
t=new D.z("matrix",u,q)
t.b=!0
s.al(t)}r=s.f
if(r!=null)r.ab(0,b)
for(r=s.y.a,r=new J.a_(r,r.length);r.v();)r.d.ab(0,b)},
am:function(a){var u,t,s,r=this
if(!r.b)return
u=a.dx
t=r.x
u.toString
if(t==null)u.a.push(u.gM(u))
else u.a.push(t.n(0,u.gM(u)))
u.aE()
a.dG(r.f)
u=a.dy
s=(u&&C.a).gc5(u)
if(s!=null&&r.d!=null)s.dH(a,r)
for(u=r.y.a,u=new J.a_(u,u.length);u.v();)u.d.am(a)
a.dD()
a.dx.cb()},
al:function(a){var u=this.z
if(u!=null)u.C(a)},
N:function(){return this.al(null)},
dA:function(a){this.e=null
this.al(a)},
hc:function(){return this.dA(null)},
dC:function(a){this.al(a)},
hd:function(){return this.dC(null)},
dw:function(a){this.al(a)},
hb:function(){return this.dw(null)},
du:function(a){this.al(a)},
h8:function(){return this.du(null)},
h7:function(a,b){var u,t,s,r,q,p,o
for(u=b.length,t=this.gdt(),s=[{func:1,ret:-1,args:[D.V]}],r=0;r<b.length;b.length===u||(0,H.o)(b),++r){q=b[r]
if(q!=null){p=q.z
if(p==null){p=new D.bQ()
p.d=0
q.z=p}o=p.a;(o==null?p.a=H.b([],s):o).push(t)}}this.N()},
ha:function(a,b){var u,t
for(u=b.gP(b),t=this.gdt();u.v();)u.gH(u).gt().B(0,t)
this.N()},
i:function(a){var u=this.a,t=u.length
if(t<=0)return"Unnamed entity"
return u}}
E.h4.prototype={
dW:function(a,b){var u,t,s=this
s.d=s.c=512
s.e=0
s.x=s.r=s.f=new P.ap(Date.now(),!1)
s.y=0
s.cx=s.ch=s.Q=s.z=null
u=new O.bY()
t=[V.aJ]
u.a=H.b([],t)
u.gt().j(0,new E.h5(s))
s.cy=u
u=new O.bY()
u.a=H.b([],t)
u.gt().j(0,new E.h6(s))
s.db=u
u=new O.bY()
u.a=H.b([],t)
u.gt().j(0,new E.h7(s))
s.dx=u
u=H.b([],[O.dd])
s.dy=u
u.push(null)
s.fr=new H.G([P.t,A.d7])},
ghn:function(){var u,t=this,s=t.z
if(s==null){s=t.cy
s=s.gM(s)
u=t.db
u=t.z=s.n(0,u.gM(u))
s=u}return s},
gdE:function(){var u,t=this,s=t.ch
if(s==null){s=t.ghn()
u=t.dx
u=t.ch=s.n(0,u.gM(u))
s=u}return s},
gdK:function(){var u,t=this,s=t.cx
if(s==null){s=t.db
s=s.gM(s)
u=t.dx
u=t.cx=s.n(0,u.gM(u))
s=u}return s},
dG:function(a){var u=this.dy
u.push(a==null?(u&&C.a).gc5(u):a)},
dD:function(){var u=this.dy
if(u.length>1)u.pop()},
d_:function(a){var u=a.b
if(u.length===0)throw H.d(P.i("May not cache a shader with no name."))
if(this.fr.fS(0,u))throw H.d(P.i('Shader cache already contains a shader by the name "'+u+'".'))
this.fr.l(0,u,a)}}
E.h5.prototype={
$1:function(a){var u=this.a
u.ch=u.z=null}}
E.h6.prototype={
$1:function(a){var u=this.a
u.cx=u.ch=u.Q=u.z=null}}
E.h7.prototype={
$1:function(a){var u=this.a
u.cx=u.ch=null}}
E.de.prototype={
cz:function(a){this.dI()},
cw:function(){return this.cz(null)},
sbq:function(a){var u=this,t=u.d
if(t!==a){if(t!=null)t.gt().B(0,u.gcv())
u.d=a
a.gt().j(0,u.gcv())
u.cw()}},
cR:function(){var u,t,s=this,r=window.devicePixelRatio,q=s.b.clientWidth
if(typeof q!=="number")return q.n()
if(typeof r!=="number")return H.r(r)
u=C.b.dl(q*r)
q=s.b.clientHeight
if(typeof q!=="number")return q.n()
t=C.b.dl(q*r)
q=s.b
if(q.width!==u||q.height!==t){q.width=u
q.height=t
P.jU(C.j,s.ghr())}},
dI:function(){if(!this.cx){this.cx=!0
var u=window
C.q.ei(u)
C.q.fl(u,W.k6(new E.hz(this),P.a9))}},
hp:function(){var u,t,s,r,q,p=this,o=null
try{++p.db
p.cx=!1
p.cR()
if(o==null)o=p.d
if(o!=null){s=p.e;++s.e
s.r=s.x
r=Date.now()
s.x=new P.ap(r,!1)
s.y=1000*(r-s.r.a)*0.000001
r=s.cy
C.a.sk(r.a,0)
r.aE()
r=s.db
C.a.sk(r.a,0)
r.aE()
r=s.dx
C.a.sk(r.a,0)
r.aE()
r=s.dy;(r&&C.a).sk(r,0)
s.dy.push(null)
o.am(p.e)}}catch(q){u=H.el(q)
t=H.ju(q)
P.kh("Error: "+H.f(u))
P.kh("Stack: "+H.f(t))
throw H.d(u)}}}
E.hz.prototype={
$1:function(a){var u=this.a
if(u.cx){u.cx=!1
u.hp()}}}
Z.dr.prototype={}
Z.cz.prototype={
ap:function(a){var u,t,s,r=this
try{t=a.a
t.enableVertexAttribArray(r.e)
t.vertexAttribPointer(r.e,r.b,5126,!1,r.d,r.c)}catch(s){u=H.el(s)
t=P.i('Failed to bind buffer attribute "'+r.a.i(0)+'": '+H.f(u))
throw H.d(t)}},
i:function(a){var u=this
return"["+u.a.i(0)+", Size: "+u.b+", Offset: "+u.c+", Stride: "+u.d+", Attr: "+H.f(u.e)+"]"}}
Z.ds.prototype={}
Z.bm.prototype={
ac:function(a){var u,t,s,r
for(u=this.c,t=u.length,s=0;s<t;++s){r=u[s]
if((r.a.a&a.a)!==0)return r}return},
ap:function(a){var u,t=this.a
a.a.bindBuffer(t.a,t.b)
for(t=this.c,u=t.length-1;u>=0;--u)t[u].ap(a)},
cj:function(a){var u,t,s
for(u=this.c,t=u.length-1,s=a.a;t>=0;--t)s.disableVertexAttribArray(u[t].e)
s.bindBuffer(this.a.a,null)},
am:function(a){var u,t,s,r,q,p=this.b.length
for(u=a.a,t=0;t<p;++t){s=this.b
if(t>=s.length)return H.c(s,t)
r=s[t]
s=r.c
q=s.a
u.bindBuffer(q,s.b)
u.drawElements(r.a,r.b,5123,0)
u.bindBuffer(q,null)}},
he:function(a){this.ap(a)
this.am(a)
this.cj(a)},
i:function(a){var u,t,s,r,q=[P.t],p=H.b([],q)
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.o)(u),++s)p.push(u[s].i(0))
r=H.b([],q)
for(q=this.c,u=q.length,s=0;s<u;++s)r.push(J.aa(q[s]))
return"Buffer:  ["+this.a.i(0)+"]\nIndices: "+C.a.u(p,", ")+"\nAttrs:   "+C.a.u(r,", ")}}
Z.cA.prototype={}
Z.bp.prototype={
i:function(a){return"Type: "+this.a+", Count: "+this.b+", ["+("Instance of '"+H.f(H.c5(this.c))+"'")+"]"}}
Z.aV.prototype={
gcp:function(a){var u=this.a,t=(u&$.am().a)!==0?3:0
if((u&$.al().a)!==0)t+=3
if((u&$.ak().a)!==0)t+=3
if((u&$.bh().a)!==0)t+=2
if((u&$.bi().a)!==0)t+=3
if((u&$.bg().a)!==0)t+=3
if((u&$.ct().a)!==0)t+=4
if((u&$.bG().a)!==0)++t
return(u&$.aY().a)!==0?t+4:t},
fN:function(a){var u,t=$.am(),s=this.a
if((s&t.a)!==0){if(0===a)return t
u=1}else u=0
t=$.al()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.ak()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.bh()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.bi()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.bg()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.ct()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.bG()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.aY()
if((s&t.a)!==0)if(u===a)return t
return $.kA()},
q:function(a,b){if(b==null)return!1
if(!(b instanceof Z.aV))return!1
return this.a===b.a},
i:function(a){var u=H.b([],[P.t]),t=this.a
if((t&$.am().a)!==0)u.push("Pos")
if((t&$.al().a)!==0)u.push("Norm")
if((t&$.ak().a)!==0)u.push("Binm")
if((t&$.bh().a)!==0)u.push("Txt2D")
if((t&$.bi().a)!==0)u.push("TxtCube")
if((t&$.bg().a)!==0)u.push("Clr3")
if((t&$.ct().a)!==0)u.push("Clr4")
if((t&$.bG().a)!==0)u.push("Weight")
if((t&$.aY().a)!==0)u.push("Bending")
if(u.length<=0)return"None"
return C.a.u(u,"|")}}
D.ez.prototype={}
D.bQ.prototype={
j:function(a,b){var u=this.a;(u==null?this.a=H.b([],[{func:1,ret:-1,args:[D.V]}]):u).push(b)},
B:function(a,b){var u,t=this,s=t.a
s=s==null?null:C.a.Z(s,b)
if(s===!0){s=t.a
u=(s&&C.a).B(s,b)||!1}else u=!1
s=t.b
s=s==null?null:C.a.Z(s,b)
if(s===!0){s=t.b
u=(s&&C.a).B(s,b)||u}return u},
C:function(a){var u,t,s,r=this,q={}
q.a=a
u=r.a
t=u==null
s=t?null:u.length===0
if(s!==!1){s=r.b
s=s==null?null:s.length===0
s=s!==!1}else s=!1
if(s)return!1
if(a==null){a=new D.V()
a.b=!0
q.a=a
s=a}else s=a
if(r.d>0){if(r.c==null)r.c=s
return!0}if(!t)C.a.F(P.jg(u,!0,{func:1,ret:-1,args:[D.V]}),new D.eT(q))
u=r.b
if(u!=null){r.b=H.b([],[{func:1,ret:-1,args:[D.V]}])
C.a.F(u,new D.eU(q))}return!0},
ar:function(a){var u,t=this,s=t.d
if(s>0){--s
t.d=s
if(s<=0)s=t.c!=null
else s=!1
if(s){u=t.c
t.c=null
t.C(u)}}}}
D.eT.prototype={
$1:function(a){var u=this.a.a
if(u.b)a.$1(u)}}
D.eU.prototype={
$1:function(a){var u=this.a.a
if(u.b)a.$1(u)}}
D.V.prototype={}
D.b_.prototype={}
D.b0.prototype={}
D.z.prototype={
i:function(a){return"ValueChanged: "+this.c+", "+H.f(this.d)+" => "+H.f(this.e)}}
X.cB.prototype={
q:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.cB))return!1
if(this.a!=b.a)return!1
if(!this.b.q(0,b.b))return!1
return!0},
i:function(a){return this.b.i(0)+H.f(this.a)}}
X.cR.prototype={
q:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.cR))return!1
if(this.a!=b.a)return!1
if(!this.b.q(0,b.b))return!1
return!0},
i:function(a){return this.b.i(0)+H.f(this.a)}}
X.fk.prototype={
hj:function(a){this.c=a.b
this.d.j(0,a.a)
return!1},
hf:function(a){this.c=a.b
this.d.B(0,a.a)
return!1}}
X.cT.prototype={}
X.fr.prototype={
aS:function(a,b){var u,t,s,r,q=this,p=Date.now(),o=q.x,n=b.a,m=q.Q
if(typeof n!=="number")return n.n()
u=b.b
t=q.ch
if(typeof u!=="number")return u.n()
s=o.w(0,new V.P(n*m,u*t))
t=q.a.gaL()
r=new X.ae(a,V.ai(),q.x,t,s)
r.b=!0
q.z=new P.ap(p,!1)
q.x=s
return r},
ca:function(a,b){this.r=a.a
return!1},
b4:function(a,b){var u=this.r,t=a.a
if(typeof t!=="number")return t.dO()
if(typeof u!=="number")return u.ag()
this.r=(u&~t)>>>0
return!1},
b3:function(a,b){var u=this.d
if(u==null)return!1
u.C(this.aS(a,b))
return!0},
hk:function(a){var u,t,s,r,q,p,o=this,n=o.e
if(n==null)return!1
u=o.a.gaL()
t=o.x
Date.now()
s=a.a
r=o.cx
if(typeof s!=="number")return s.n()
q=a.b
p=o.cy
if(typeof q!=="number")return q.n()
t=new X.c0(new V.C(s*r,q*p),u,t)
t.b=!0
n.C(t)
return!0},
eQ:function(a,b,c){var u,t,s,r=this
if(r.f==null)return
u=Date.now()
t=r.f
s=new X.cT(c,r.a.gaL(),b)
s.b=!0
t.C(s)
r.y=new P.ap(u,!1)
r.x=V.ai()}}
X.ad.prototype={
q:function(a,b){var u=this
if(b==null)return!1
if(u===b)return!0
if(!(b instanceof X.ad))return!1
if(u.a!==b.a)return!1
if(u.b!=b.b)return!1
if(u.c!=b.c)return!1
return!0},
i:function(a){var u=this.a?"Ctrl+":""
u+=this.b?"Alt+":""
return u+(this.c?"Shift+":"")}}
X.ae.prototype={}
X.fP.prototype={
by:function(a,b,c){var u=this,t=new P.ap(Date.now(),!1),s=u.a.gaL(),r=new X.ae(a,u.r,u.x,s,b)
r.b=!0
if(c){u.y=t
u.r=b}u.z=t
u.x=b
return r},
ca:function(a,b){var u
this.f=a.a
u=this.b
if(u==null)return!1
u.C(this.by(a,b,!0))
return!0},
b4:function(a,b){var u=this,t=u.f,s=a.a
if(typeof s!=="number")return s.dO()
if(typeof t!=="number")return t.ag()
u.f=(t&~s)>>>0
t=u.c
if(t==null)return!1
t.C(u.by(a,b,!0))
return!0},
b3:function(a,b){var u=this.d
if(u==null)return!1
u.C(this.by(a,b,!1))
return!0},
hl:function(a,b){var u,t,s,r,q,p=this,o=p.e
if(o==null)return!1
u=p.a.gaL()
Date.now()
t=a.a
s=p.Q
if(typeof t!=="number")return t.n()
r=a.b
q=p.ch
if(typeof r!=="number")return r.n()
u=new X.c0(new V.C(t*s,r*q),u,b)
u.b=!0
o.C(u)
return!0},
gb_:function(){var u=this.b
return u==null?this.b=D.I():u},
gaB:function(){var u=this.c
return u==null?this.c=D.I():u},
gb2:function(){var u=this.d
return u==null?this.d=D.I():u}}
X.c0.prototype={}
X.h2.prototype={}
X.dh.prototype={}
X.hC.prototype={
aS:function(a,b){var u=this,t=new P.ap(Date.now(),!1),s=a.length>0?a[0]:V.ai(),r=u.a.gaL(),q=new X.dh(u.f,u.r,r,s)
q.b=!0
if(b){u.x=t
u.f=s}u.y=t
u.r=s
return q},
hi:function(a){var u=this.b
if(u==null)return!1
u.C(this.aS(a,!0))
return!0},
hg:function(a){var u=this.c
if(u==null)return!1
u.C(this.aS(a,!0))
return!0},
hh:function(a){var u=this.d
if(u==null)return!1
u.C(this.aS(a,!1))
return!0}}
X.dl.prototype={
gaL:function(){var u=this.a,t=C.i.gd7(u).c
t.toString
u=C.i.gd7(u).d
u.toString
return V.jQ(0,0,t,u)},
cG:function(a){var u=a.keyCode,t=a.ctrlKey||a.metaKey
return new X.cR(u,new X.ad(t,a.altKey,a.shiftKey))},
aI:function(a){var u=this.b,t=a.ctrlKey||a.metaKey
u.c=new X.ad(t,a.altKey,a.shiftKey)},
bO:function(a){var u=this.b,t=a.ctrlKey||a.metaKey
u.c=new X.ad(t,a.altKey,a.shiftKey)},
av:function(a){var u,t=this.a.getBoundingClientRect(),s=a.pageX,r=a.pageY,q=t.left
if(typeof s!=="number")return s.E()
u=t.top
if(typeof r!=="number")return r.E()
return new V.P(s-q,r-u)},
aT:function(a){return new V.C(a.movementX,a.movementY)},
bI:function(a){var u,t,s,r,q,p,o=this.a.getBoundingClientRect(),n=H.b([],[V.P])
for(u=a.touches,t=u.length,s=0;s<u.length;u.length===t||(0,H.o)(u),++s){r=u[s]
q=C.b.an(r.pageX)
C.b.an(r.pageY)
p=o.left
C.b.an(r.pageX)
n.push(new V.P(q-p,C.b.an(r.pageY)-o.top))}return n},
at:function(a){var u=a.buttons,t=a.ctrlKey||a.metaKey
return new X.cB(u,new X.ad(t,a.altKey,a.shiftKey))},
bz:function(a){var u,t,s=this.a.getBoundingClientRect(),r=a.pageX,q=a.pageY,p=s.left
if(typeof r!=="number")return r.E()
u=r-p
if(u<0)return!1
r=s.top
if(typeof q!=="number")return q.E()
t=q-r
if(t<0)return!1
return u<s.width&&t<s.height},
eK:function(a){this.f=!0},
ey:function(a){this.f=!1},
eE:function(a){if(this.f&&this.bz(a))a.preventDefault()},
eO:function(a){var u
if(!this.f)return
u=this.cG(a)
this.b.hj(u)},
eM:function(a){var u
if(!this.f)return
u=this.cG(a)
this.b.hf(u)},
eS:function(a){var u,t,s,r=this,q=r.a
q.focus()
r.f=!0
r.aI(a)
if(r.x){u=r.at(a)
t=r.aT(a)
if(r.d.ca(u,t))a.preventDefault()
return}if(r.r){r.y=a
q.requestPointerLock()
return}u=r.at(a)
s=r.av(a)
if(r.c.ca(u,s))a.preventDefault()},
eW:function(a){var u,t,s,r=this
r.aI(a)
u=r.at(a)
if(r.x){t=r.aT(a)
if(r.d.b4(u,t))a.preventDefault()
return}if(r.r)return
s=r.av(a)
if(r.c.b4(u,s))a.preventDefault()},
eI:function(a){var u,t,s,r=this
if(!r.bz(a)){r.aI(a)
u=r.at(a)
if(r.x){t=r.aT(a)
if(r.d.b4(u,t))a.preventDefault()
return}if(r.r)return
s=r.av(a)
if(r.c.b4(u,s))a.preventDefault()}},
eU:function(a){var u,t,s,r=this
r.aI(a)
u=r.at(a)
if(r.x){t=r.aT(a)
if(r.d.b3(u,t))a.preventDefault()
return}if(r.r)return
s=r.av(a)
if(r.c.b3(u,s))a.preventDefault()},
eG:function(a){var u,t,s,r=this
if(!r.bz(a)){r.aI(a)
u=r.at(a)
if(r.x){t=r.aT(a)
if(r.d.b3(u,t))a.preventDefault()
return}if(r.r)return
s=r.av(a)
if(r.c.b3(u,s))a.preventDefault()}},
eY:function(a){var u,t,s=this
s.aI(a)
u=new V.C((a&&C.p).gfV(a),C.p.gfW(a)).m(0,180)
if(s.x){if(s.d.hk(u))a.preventDefault()
return}if(s.r)return
t=s.av(a)
if(s.c.hl(u,t))a.preventDefault()},
f_:function(a){var u,t,s=this,r=document.pointerLockElement===s.a
if(r!==s.x){s.x=r
u=s.at(s.y)
t=s.av(s.y)
s.d.eQ(u,t,r)}},
ff:function(a){var u,t=this
t.a.focus()
t.f=!0
t.bO(a)
u=t.bI(a)
if(t.e.hi(u))a.preventDefault()},
fb:function(a){var u
this.bO(a)
u=this.bI(a)
if(this.e.hg(u))a.preventDefault()},
fd:function(a){var u
this.bO(a)
u=this.bI(a)
if(this.e.hh(u))a.preventDefault()}}
D.ev.prototype={$ia1:1}
D.eK.prototype={$ia1:1}
D.a1.prototype={}
D.cS.prototype={
cA:function(a){var u=this.y
if(u!=null)u.C(a)},
cN:function(a){var u=this.z
if(u!=null)u.C(a)},
eP:function(){return this.cN(null)},
f1:function(a){var u,t,s
for(u=a.length,t=0;t<a.length;a.length===u||(0,H.o)(a),++t){s=a[t]
if(s==null||this.ed(s))return!1}return!0},
er:function(a,b){var u,t,s,r
for(u=b.length,t=this.gcM(),s=0;s<b.length;b.length===u||(0,H.o)(b),++s){r=b[s]
r.gt().j(0,t)}u=new D.b_()
u.b=!0
this.cA(u)},
f5:function(a,b){var u,t,s
for(u=b.gP(b),t=this.gcM();u.v();){s=u.gH(u)
C.a.B(this.e,s)
s.gt().B(0,t)}u=new D.b0()
u.b=!0
this.cA(u)},
ed:function(a){var u=C.a.Z(this.e,a)
return u},
$aj:function(){return[D.a1]},
$aaD:function(){return[D.a1]}}
D.h1.prototype={$ia1:1}
D.hm.prototype={$ia1:1}
V.S.prototype={
q:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.S))return!1
u=b.a
t=$.A().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
return!0},
i:function(a){return"["+V.B(this.a,3,0)+", "+V.B(this.b,3,0)+", "+V.B(this.c,3,0)+"]"}}
V.N.prototype={
ci:function(a){var u=this
return H.b([u.a,u.b,u.c,u.d],[P.J])},
q:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.N))return!1
u=b.a
t=$.A().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
if(!(Math.abs(b.d-s.d)<t))return!1
return!0},
i:function(a){var u=this
return"["+V.B(u.a,3,0)+", "+V.B(u.b,3,0)+", "+V.B(u.c,3,0)+", "+V.B(u.d,3,0)+"]"}}
V.eS.prototype={}
V.cY.prototype={
a_:function(a,b){var u=this,t=H.b([u.a,u.d,u.r,u.b,u.e,u.x,u.c,u.f,u.y],[P.J])
return t},
q:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.cY))return!1
u=b.a
t=$.A().a
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
i:function(a){var u,t,s,r,q=this,p=[P.J],o=V.bF(H.b([q.a,q.d,q.r],p),3,0),n=V.bF(H.b([q.b,q.e,q.x],p),3,0),m=V.bF(H.b([q.c,q.f,q.y],p),3,0)
p=o.length
if(0>=p)return H.c(o,0)
u="["+o[0]+", "
t=n.length
if(0>=t)return H.c(n,0)
u=u+n[0]+", "
s=m.length
if(0>=s)return H.c(m,0)
u=u+m[0]+",\n"
if(1>=p)return H.c(o,1)
r=" "+o[1]+", "
if(1>=t)return H.c(n,1)
r=r+n[1]+", "
if(1>=s)return H.c(m,1)
r=u+(r+m[1]+",\n")
if(2>=p)return H.c(o,2)
p=" "+o[2]+", "
if(2>=t)return H.c(n,2)
p=p+n[2]+", "
if(2>=s)return H.c(m,2)
return r+(p+m[2]+"]")}}
V.aJ.prototype={
a_:function(a,b){var u=this,t=H.b([u.a,u.e,u.y,u.cx,u.b,u.f,u.z,u.cy,u.c,u.r,u.Q,u.db,u.d,u.x,u.ch,u.dx],[P.J])
return t},
dq:function(b2){var u,t,s,r=this,q=r.a,p=r.f,o=r.b,n=r.e,m=q*p-o*n,l=r.r,k=r.c,j=q*l-k*n,i=r.x,h=r.d,g=q*i-h*n,f=o*l-k*p,e=o*i-h*p,d=k*i-h*l,c=r.y,b=r.cy,a=r.z,a0=r.cx,a1=c*b-a*a0,a2=r.db,a3=r.Q,a4=c*a2-a3*a0,a5=r.dx,a6=r.ch,a7=c*a5-a6*a0,a8=a*a2-a3*b,a9=a*a5-a6*b,b0=a3*a5-a6*a2,b1=m*b0-j*a9+g*a8+f*a7-e*a4+d*a1
if(Math.abs(b1-0)<$.A().a)return V.c_()
u=1/b1
t=-n
s=-a0
return V.as((p*b0-l*a9+i*a8)*u,(-o*b0+k*a9-h*a8)*u,(b*d-a2*e+a5*f)*u,(-a*d+a3*e-a6*f)*u,(t*b0+l*a7-i*a4)*u,(q*b0-k*a7+h*a4)*u,(s*d+a2*g-a5*j)*u,(c*d-a3*g+a6*j)*u,(n*a9-p*a7+i*a1)*u,(-q*a9+o*a7-h*a1)*u,(a0*e-b*g+a5*m)*u,(-c*e+a*g-a6*m)*u,(t*a8+p*a4-l*a1)*u,(q*a8-o*a4+k*a1)*u,(s*f+b*j-a2*m)*u,(c*f-a*j+a3*m)*u)},
n:function(b2,b3){var u=this,t=u.a,s=b3.a,r=u.b,q=b3.e,p=u.c,o=b3.y,n=u.d,m=b3.cx,l=b3.b,k=b3.f,j=b3.z,i=b3.cy,h=b3.c,g=b3.r,f=b3.Q,e=b3.db,d=b3.d,c=b3.x,b=b3.ch,a=b3.dx,a0=u.e,a1=u.f,a2=u.r,a3=u.x,a4=u.y,a5=u.z,a6=u.Q,a7=u.ch,a8=u.cx,a9=u.cy,b0=u.db,b1=u.dx
return V.as(t*s+r*q+p*o+n*m,t*l+r*k+p*j+n*i,t*h+r*g+p*f+n*e,t*d+r*c+p*b+n*a,a0*s+a1*q+a2*o+a3*m,a0*l+a1*k+a2*j+a3*i,a0*h+a1*g+a2*f+a3*e,a0*d+a1*c+a2*b+a3*a,a4*s+a5*q+a6*o+a7*m,a4*l+a5*k+a6*j+a7*i,a4*h+a5*g+a6*f+a7*e,a4*d+a5*c+a6*b+a7*a,a8*s+a9*q+b0*o+b1*m,a8*l+a9*k+b0*j+b1*i,a8*h+a9*g+b0*f+b1*e,a8*d+a9*c+b0*b+b1*a)},
b6:function(a){var u=this,t=a.a,s=a.b,r=a.c
return new V.M(u.a*t+u.b*s+u.c*r+u.d,u.e*t+u.f*s+u.r*r+u.x,u.y*t+u.z*s+u.Q*r+u.ch)},
q:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.aJ))return!1
u=b.a
t=$.A().a
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
i:function(a){return this.J()},
D:function(a){var u,t,s,r,q,p=this,o=[P.J],n=V.bF(H.b([p.a,p.e,p.y,p.cx],o),3,0),m=V.bF(H.b([p.b,p.f,p.z,p.cy],o),3,0),l=V.bF(H.b([p.c,p.r,p.Q,p.db],o),3,0),k=V.bF(H.b([p.d,p.x,p.ch,p.dx],o),3,0)
o=n.length
if(0>=o)return H.c(n,0)
u="["+n[0]+", "
t=m.length
if(0>=t)return H.c(m,0)
u=u+m[0]+", "
s=l.length
if(0>=s)return H.c(l,0)
u=u+l[0]+", "
r=k.length
if(0>=r)return H.c(k,0)
u=u+k[0]+",\n"
q=a+" "
if(1>=o)return H.c(n,1)
q=q+n[1]+", "
if(1>=t)return H.c(m,1)
q=q+m[1]+", "
if(1>=s)return H.c(l,1)
q=q+l[1]+", "
if(1>=r)return H.c(k,1)
q=u+(q+k[1]+",\n")
u=a+" "
if(2>=o)return H.c(n,2)
u=u+n[2]+", "
if(2>=t)return H.c(m,2)
u=u+m[2]+", "
if(2>=s)return H.c(l,2)
u=u+l[2]+", "
if(2>=r)return H.c(k,2)
u=q+(u+k[2]+",\n")
q=a+" "
if(3>=o)return H.c(n,3)
q=q+n[3]+", "
if(3>=t)return H.c(m,3)
q=q+m[3]+", "
if(3>=s)return H.c(l,3)
q=q+l[3]+", "
if(3>=r)return H.c(k,3)
return u+(q+k[3]+"]")},
J:function(){return this.D("")}}
V.P.prototype={
w:function(a,b){return new V.P(this.a+b.a,this.b+b.b)},
E:function(a,b){return new V.P(this.a-b.a,this.b-b.b)},
m:function(a,b){if(Math.abs(b-0)<$.A().a)return V.ai()
return new V.P(this.a/b,this.b/b)},
q:function(a,b){var u,t
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.P))return!1
u=b.a
t=$.A().a
if(!(Math.abs(u-this.a)<t))return!1
if(!(Math.abs(b.b-this.b)<t))return!1
return!0},
i:function(a){return"["+V.B(this.a,3,0)+", "+V.B(this.b,3,0)+"]"}}
V.M.prototype={
w:function(a,b){return new V.M(this.a+b.a,this.b+b.b,this.c+b.c)},
E:function(a,b){return new V.M(this.a-b.a,this.b-b.b,this.c-b.c)},
m:function(a,b){if(Math.abs(b-0)<$.A().a)return V.jN()
return new V.M(this.a/b,this.b/b,this.c/b)},
q:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.M))return!1
u=b.a
t=$.A().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
return!0},
i:function(a){return"["+V.B(this.a,3,0)+", "+V.B(this.b,3,0)+", "+V.B(this.c,3,0)+"]"}}
V.af.prototype={
q:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.af))return!1
u=b.a
t=$.A().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
if(!(Math.abs(b.d-s.d)<t))return!1
return!0},
i:function(a){var u=this
return"["+V.B(u.a,3,0)+", "+V.B(u.b,3,0)+", "+V.B(u.c,3,0)+", "+V.B(u.d,3,0)+"]"}}
V.d6.prototype={
gY:function(){var u=this.c,t=this.d
if(u>t)return t
else return u},
q:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.d6))return!1
u=b.a
t=$.A().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
if(!(Math.abs(b.d-s.d)<t))return!1
return!0},
i:function(a){var u=this
return"["+V.B(u.a,3,0)+", "+V.B(u.b,3,0)+", "+V.B(u.c,3,0)+", "+V.B(u.d,3,0)+"]"}}
V.C.prototype={
b1:function(a){return Math.sqrt(this.A(this))},
A:function(a){var u,t,s=this.a,r=a.a
if(typeof s!=="number")return s.n()
if(typeof r!=="number")return H.r(r)
u=this.b
t=a.b
if(typeof u!=="number")return u.n()
if(typeof t!=="number")return H.r(t)
return s*r+u*t},
n:function(a,b){var u,t=this.a
if(typeof t!=="number")return t.n()
u=this.b
if(typeof u!=="number")return u.n()
return new V.C(t*b,u*b)},
m:function(a,b){var u,t
if(Math.abs(b-0)<$.A().a){u=$.jX
return u==null?$.jX=new V.C(0,0):u}u=this.a
if(typeof u!=="number")return u.m()
t=this.b
if(typeof t!=="number")return t.m()
return new V.C(u/b,t/b)},
q:function(a,b){var u,t,s
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.C))return!1
u=b.a
t=this.a
s=$.A()
s.toString
if(typeof u!=="number")return u.E()
if(typeof t!=="number")return H.r(t)
s=s.a
if(!(Math.abs(u-t)<s))return!1
u=b.b
t=this.b
if(typeof u!=="number")return u.E()
if(typeof t!=="number")return H.r(t)
if(!(Math.abs(u-t)<s))return!1
return!0},
i:function(a){return"["+V.B(this.a,3,0)+", "+V.B(this.b,3,0)+"]"}}
V.u.prototype={
b1:function(a){return Math.sqrt(this.A(this))},
A:function(a){return this.a*a.a+this.b*a.b+this.c*a.c},
c6:function(a,b){var u=this.a,t=this.b,s=this.c
return new V.u(u+b*(a.a-u),t+b*(a.b-t),s+b*(a.c-s))},
aX:function(a){var u=this.b,t=a.c,s=this.c,r=a.b,q=a.a,p=this.a
return new V.u(u*t-s*r,s*q-p*t,p*r-u*q)},
w:function(a,b){return new V.u(this.a+b.a,this.b+b.b,this.c+b.c)},
O:function(a){return new V.u(-this.a,-this.b,-this.c)},
n:function(a,b){return new V.u(this.a*b,this.b*b,this.c*b)},
m:function(a,b){if(Math.abs(b-0)<$.A().a)return V.bB()
return new V.u(this.a/b,this.b/b,this.c/b)},
dr:function(){var u=$.A().a
if(!(Math.abs(0-this.a)<u))return!1
if(!(Math.abs(0-this.b)<u))return!1
if(!(Math.abs(0-this.c)<u))return!1
return!0},
q:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.u))return!1
u=b.a
t=$.A().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
return!0},
i:function(a){return"["+V.B(this.a,3,0)+", "+V.B(this.b,3,0)+", "+V.B(this.c,3,0)+"]"}}
V.aU.prototype={
b1:function(a){var u=this,t=u.a,s=u.b,r=u.c,q=u.d
return Math.sqrt(t*t+s*s+r*r+q*q)},
m:function(a,b){var u,t=this
if(Math.abs(b-0)<$.A().a){u=$.k1
return u==null?$.k1=new V.aU(0,0,0,0):u}return new V.aU(t.a/b,t.b/b,t.c/b,t.d/b)},
q:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.aU))return!1
u=b.a
t=$.A().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
if(!(Math.abs(b.d-s.d)<t))return!1
return!0},
i:function(a){var u=this
return"["+V.B(u.a,3,0)+", "+V.B(u.b,3,0)+", "+V.B(u.c,3,0)+", "+V.B(u.d,3,0)+"]"}}
U.eB.prototype={
bs:function(a){var u=V.ms(a,this.c,this.b)
return u},
gt:function(){var u=this.y
return u==null?this.y=D.I():u},
L:function(a){var u=this.y
if(u!=null)u.C(a)},
sck:function(a,b){},
sc7:function(a){var u,t=this,s=t.b
if(!(Math.abs(s-a)<$.A().a)){t.b=a
if(a<t.c)t.d=t.c=a
else{u=t.d
if(a<u)t.d=t.bs(u)}s=new D.z("maximumLocation",s,t.b)
s.b=!0
t.L(s)}},
sc9:function(a){var u,t=this,s=t.c
if(!(Math.abs(s-a)<$.A().a)){t.c=a
if(t.b<a)t.d=t.b=a
else{u=t.d
if(a>u)t.d=t.bs(u)}s=new D.z("minimumLocation",s,t.c)
s.b=!0
t.L(s)}},
sX:function(a,b){var u,t=this
b=t.bs(b)
u=t.d
if(!(Math.abs(u-b)<$.A().a)){t.d=b
u=new D.z("location",u,b)
u.b=!0
t.L(u)}},
sc8:function(a){var u,t,s=this,r=s.e
if(!(Math.abs(r-a)<$.A().a)){s.e=a
u=s.f
t=-a
if(u<t)u=t
else if(u>a)u=a
s.f=u
r=new D.z("maximumVelocity",r,a)
r.b=!0
s.L(r)}},
sR:function(a){var u=this,t=u.e,s=-t
if(a<s)a=s
else if(a>t)a=t
t=u.f
if(!(Math.abs(t-a)<$.A().a)){u.f=a
t=new D.z("velocity",t,a)
t.b=!0
u.L(t)}},
sbX:function(a){var u
if(a<0)a=0
else if(a>1)a=1
u=this.x
if(!(Math.abs(u-a)<$.A().a)){this.x=a
u=new D.z("dampening",u,a)
u.b=!0
this.L(u)}},
ab:function(a,b){var u,t,s,r=this,q=r.f,p=$.A().a
if(!(Math.abs(q-0)<p)||!(Math.abs(r.r-0)<p)){u=q+r.r*b
q=r.e
t=-q
if(u<t)u=t
else if(u>q)u=q
r.sX(0,r.d+u*b)
q=r.x
if(!(Math.abs(q-0)<$.A().a)){s=u*Math.pow(1-q,b)
if(u<0){if(s<u)s=u
else if(s>0)s=0}else if(s<0)s=0
else if(s>u)s=u
u=s}r.sR(u)}}}
U.cE.prototype={
gt:function(){var u=this.b
return u==null?this.b=D.I():u},
sM:function(a,b){var u,t,s,r=this
if(b==null)b=V.c_()
if(!J.w(r.a,b)){u=r.a
r.a=b
t=new D.z("matrix",u,b)
t.b=!0
s=r.b
if(s!=null)s.C(t)}},
aO:function(a,b,c){return this.a},
q:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.cE))return!1
return J.w(this.a,b.a)},
i:function(a){return"Constant: "+this.a.D("          ")}}
U.bS.prototype={
gt:function(){var u=this.e
return u==null?this.e=D.I():u},
L:function(a){var u=this.e
if(u!=null)u.C(a)},
a5:function(){return this.L(null)},
e_:function(a,b){var u,t,s,r,q,p,o
for(u=b.length,t=this.gaH(),s=[{func:1,ret:-1,args:[D.V]}],r=0;r<b.length;b.length===u||(0,H.o)(b),++r){q=b[r]
if(q!=null){p=q.gt()
o=p.a;(o==null?p.a=H.b([],s):o).push(t)}}u=new D.b_()
u.b=!0
this.L(u)},
f3:function(a,b){var u,t
for(u=b.gP(b),t=this.gaH();u.v();)u.gH(u).gt().B(0,t)
u=new D.b0()
u.b=!0
this.L(u)},
aO:function(a,b,c){var u,t,s=this,r=s.r,q=b.e
if(typeof r!=="number")return r.a7()
if(r<q){s.r=q
r=s.e
if(r!=null)++r.d
for(r=s.a,r=new J.a_(r,r.length),u=null;r.v();){q=r.d
if(q!=null){t=q.aO(0,b,c)
if(t!=null)u=u==null?t:t.n(0,u)}}s.f=u==null?V.c_():u
r=s.e
if(r!=null)r.ar(0)}return s.f},
q:function(a,b){var u,t,s,r
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.bS))return!1
u=this.a.length
for(t=0;t<u;++t){s=this.a
if(t>=s.length)return H.c(s,t)
s=s[t]
r=b.a
if(t>=r.length)return H.c(r,t)
if(!J.w(s,r[t]))return!1}return!0},
i:function(a){return"Group"},
$aj:function(){return[U.a6]},
$aaD:function(){return[U.a6]},
$ia6:1}
U.a6.prototype={}
U.dm.prototype={
gt:function(){var u=this.cy
return u==null?this.cy=D.I():u},
L:function(a){var u=this.cy
if(u!=null)u.C(a)},
a5:function(){return this.L(null)},
aW:function(a){var u=this
if(u.a!=null)return!1
u.a=a
a.c.gb_().j(0,u.gbA())
u.a.c.gb2().j(0,u.gbC())
u.a.c.gaB().j(0,u.gbE())
return!0},
bB:function(a){var u=this
if(!J.w(u.c,u.a.b.c))return
u.x=u.y=!0
u.z=u.b.d},
bD:function(a){var u,t,s,r,q,p,o,n=this
H.k(a,"$iae")
if(!n.y)return
if(n.x){u=a.d.E(0,a.y)
u=new V.C(u.a,u.b)
u=u.A(u)
t=n.r
if(typeof t!=="number")return H.r(t)
if(u<t)return
n.x=!1}if(n.d){u=a.c
t=a.d.E(0,a.y)
u=new V.C(t.a,t.b).n(0,2).m(0,u.gY())
n.Q=u
t=n.b
u=u.a
if(typeof u!=="number")return u.n()
s=n.e
if(typeof s!=="number")return H.r(s)
t.sR(u*10*s)}else{u=a.c
t=a.d
s=t.E(0,a.y)
r=new V.C(s.a,s.b).n(0,2).m(0,u.gY())
s=n.b
q=r.a
if(typeof q!=="number")return q.O()
p=n.e
if(typeof p!=="number")return H.r(p)
o=n.z
if(typeof o!=="number")return H.r(o)
s.sX(0,-q*p+o)
n.b.sR(0)
t=t.E(0,a.z)
n.Q=new V.C(t.a,t.b).n(0,2).m(0,u.gY())}n.a5()},
bF:function(a){var u,t,s,r=this
if(!r.y)return
r.y=!1
if(r.x)return
u=r.Q
if(u.A(u)>0.0001){u=r.b
t=r.Q.a
if(typeof t!=="number")return t.n()
s=r.e
if(typeof s!=="number")return H.r(s)
u.sR(t*10*s)
r.a5()}},
aO:function(a,b,c){var u,t,s,r=this,q=r.ch,p=b.e
if(typeof q!=="number")return q.a7()
if(q<p){r.ch=p
u=b.y
r.b.ab(0,u)
q=r.b.d
t=Math.cos(q)
s=Math.sin(q)
r.cx=V.as(t,-s,0,0,s,t,0,0,0,0,1,0,0,0,0,1)}return r.cx},
$ia6:1}
U.dn.prototype={
gt:function(){var u=this.fx
return u==null?this.fx=D.I():u},
L:function(a){var u=this.fx
if(u!=null)u.C(a)},
a5:function(){return this.L(null)},
aW:function(a){var u,t,s=this
if(s.a!=null)return!1
s.a=a
a.c.gb_().j(0,s.gbA())
s.a.c.gb2().j(0,s.gbC())
s.a.c.gaB().j(0,s.gbE())
u=s.a.d
t=u.f
u=t==null?u.f=D.I():t
u.j(0,s.gek())
u=s.a.d
t=u.d
u=t==null?u.d=D.I():t
u.j(0,s.gem())
u=s.a.e
t=u.b
u=t==null?u.b=D.I():t
u.j(0,s.gfE())
u=s.a.e
t=u.d
u=t==null?u.d=D.I():t
u.j(0,s.gfC())
u=s.a.e
t=u.c
u=t==null?u.c=D.I():t
u.j(0,s.gfA())
return!0},
ao:function(a){var u=a.a,t=a.b
if(this.f){if(typeof u!=="number")return u.O()
u=-u}if(this.r){if(typeof t!=="number")return t.O()
t=-t}return new V.C(u,t)},
bB:function(a){var u=this
H.k(a,"$iae")
if(!J.w(u.d,a.x.b))return
u.ch=u.cx=!0
u.cy=u.c.d
u.db=u.b.d},
bD:function(a){var u,t,s,r,q,p,o,n=this
H.k(a,"$iae")
if(!n.cx)return
if(n.ch){u=a.d.E(0,a.y)
u=new V.C(u.a,u.b)
u=u.A(u)
t=n.Q
if(typeof t!=="number")return H.r(t)
if(u<t)return
n.ch=!1}if(n.e){u=a.c
t=a.d.E(0,a.y)
u=n.ao(new V.C(t.a,t.b).n(0,2).m(0,u.gY()))
n.dx=u
t=n.c
u=u.a
if(typeof u!=="number")return u.O()
s=n.y
if(typeof s!=="number")return H.r(s)
t.sR(-u*10*s)
s=n.b
u=n.dx.b
if(typeof u!=="number")return u.O()
t=n.x
if(typeof t!=="number")return H.r(t)
s.sR(-u*10*t)}else{u=a.c
t=a.d
s=t.E(0,a.y)
r=n.ao(new V.C(s.a,s.b).n(0,2).m(0,u.gY()))
s=n.c
q=r.a
if(typeof q!=="number")return q.O()
p=n.y
if(typeof p!=="number")return H.r(p)
o=n.cy
if(typeof o!=="number")return H.r(o)
s.sX(0,-q*p+o)
o=n.b
p=r.b
if(typeof p!=="number")return p.O()
q=n.x
if(typeof q!=="number")return H.r(q)
s=n.db
if(typeof s!=="number")return H.r(s)
o.sX(0,-p*q+s)
n.b.sR(0)
n.c.sR(0)
t=t.E(0,a.z)
n.dx=n.ao(new V.C(t.a,t.b).n(0,2).m(0,u.gY()))}n.a5()},
bF:function(a){var u,t,s,r=this
if(!r.cx)return
r.cx=!1
if(r.ch)return
u=r.dx
if(u.A(u)>0.0001){u=r.c
t=r.dx.a
if(typeof t!=="number")return t.O()
s=r.y
if(typeof s!=="number")return H.r(s)
u.sR(-t*10*s)
s=r.b
t=r.dx.b
if(typeof t!=="number")return t.O()
u=r.x
if(typeof u!=="number")return H.r(u)
s.sR(-t*10*u)
r.a5()}},
el:function(a){var u=this
if(H.k(a,"$icT").x){u.ch=!0
u.cy=u.c.d
u.db=u.b.d}},
en:function(a){var u,t,s,r,q,p,o,n=this
H.k(a,"$iae")
if(!J.w(n.d,a.x.b))return
u=a.c
t=a.d
s=t.E(0,a.y)
r=n.ao(new V.C(s.a,s.b).n(0,2).m(0,u.gY()))
s=n.c
q=r.a
if(typeof q!=="number")return q.O()
p=n.y
if(typeof p!=="number")return H.r(p)
o=n.cy
if(typeof o!=="number")return H.r(o)
s.sX(0,-q*p+o)
o=n.b
p=r.b
if(typeof p!=="number")return p.O()
q=n.x
if(typeof q!=="number")return H.r(q)
s=n.db
if(typeof s!=="number")return H.r(s)
o.sX(0,-p*q+s)
n.b.sR(0)
n.c.sR(0)
t=t.E(0,a.z)
n.dx=n.ao(new V.C(t.a,t.b).n(0,2).m(0,u.gY()))
n.a5()},
fF:function(a){var u=this
u.ch=u.cx=!0
u.cy=u.c.d
u.db=u.b.d},
fD:function(a){var u,t,s,r,q,p,o,n=this
H.k(a,"$idh")
if(!n.cx)return
if(n.ch){u=a.d.E(0,a.y)
u=new V.C(u.a,u.b)
u=u.A(u)
t=n.Q
if(typeof t!=="number")return H.r(t)
if(u<t)return
n.ch=!1}if(n.e){u=a.c
t=a.d.E(0,a.y)
u=n.ao(new V.C(t.a,t.b).n(0,2).m(0,u.gY()))
n.dx=u
t=n.c
u=u.a
if(typeof u!=="number")return u.O()
s=n.y
if(typeof s!=="number")return H.r(s)
t.sR(-u*10*s)
s=n.b
u=n.dx.b
if(typeof u!=="number")return u.O()
t=n.x
if(typeof t!=="number")return H.r(t)
s.sR(-u*10*t)}else{u=a.c
t=a.d
s=t.E(0,a.y)
r=n.ao(new V.C(s.a,s.b).n(0,2).m(0,u.gY()))
s=n.c
q=r.a
if(typeof q!=="number")return q.O()
p=n.y
if(typeof p!=="number")return H.r(p)
o=n.cy
if(typeof o!=="number")return H.r(o)
s.sX(0,-q*p+o)
o=n.b
p=r.b
if(typeof p!=="number")return p.O()
q=n.x
if(typeof q!=="number")return H.r(q)
s=n.db
if(typeof s!=="number")return H.r(s)
o.sX(0,-p*q+s)
n.b.sR(0)
n.c.sR(0)
t=t.E(0,a.z)
n.dx=n.ao(new V.C(t.a,t.b).n(0,2).m(0,u.gY()))}n.a5()},
fB:function(a){var u,t,s,r=this
if(!r.cx)return
r.cx=!1
if(r.ch)return
u=r.dx
if(u.A(u)>0.0001){u=r.c
t=r.dx.a
if(typeof t!=="number")return t.O()
s=r.y
if(typeof s!=="number")return H.r(s)
u.sR(-t*10*s)
s=r.b
t=r.dx.b
if(typeof t!=="number")return t.O()
u=r.x
if(typeof u!=="number")return H.r(u)
s.sR(-t*10*u)
r.a5()}},
aO:function(a,b,c){var u,t=this,s=t.dy,r=b.e
if(typeof s!=="number")return s.a7()
if(s<r){t.dy=r
u=b.y
t.c.ab(0,u)
t.b.ab(0,u)
t.fr=V.bZ(t.b.d).n(0,V.jh(t.c.d))}return t.fr},
$ia6:1}
U.dp.prototype={
gt:function(){var u=this.r
return u==null?this.r=D.I():u},
L:function(a){var u=this.r
if(u!=null)u.C(a)},
aW:function(a){var u,t,s,r=this
if(r.a!=null)return!1
r.a=a
u=a.c
t=u.e
u=t==null?u.e=D.I():t
t=r.geo()
u.j(0,t)
u=r.a.d
s=u.e;(s==null?u.e=D.I():s).j(0,t)
return!0},
ep:function(a){var u,t,s,r,q=this
if(!J.w(q.b,q.a.b.c))return
H.k(a,"$ic0")
u=q.d
t=a.x.b
s=q.c
if(typeof t!=="number")return t.n()
r=u+t*s
if(u!==r){q.d=r
u=new D.z("zoom",u,r)
u.b=!0
q.L(u)}},
aO:function(a,b,c){var u,t=this,s=t.e,r=b.e
if(s<r){t.e=r
u=Math.pow(10,t.d)
t.f=V.bu(u,u,u,1)}return t.f},
$ia6:1}
M.cD.prototype={
gt:function(){var u=this.r
return u==null?this.r=D.I():u},
a4:function(a){var u=this.r
if(u!=null)u.C(a)},
br:function(){return this.a4(null)},
f7:function(a,b){var u,t,s,r,q,p,o
for(u=b.length,t=this.ga8(),s=[{func:1,ret:-1,args:[D.V]}],r=0;r<b.length;b.length===u||(0,H.o)(b),++r){q=b[r]
if(q!=null){p=q.gt()
o=p.a;(o==null?p.a=H.b([],s):o).push(t)}}u=new D.b_()
u.b=!0
this.a4(u)},
f9:function(a,b){var u,t
for(u=b.gP(b),t=this.ga8();u.v();)u.gH(u).gt().B(0,t)
u=new D.b0()
u.b=!0
this.a4(u)},
am:function(a){var u,t,s=this
if(s.f)return
s.f=!0
for(u=s.a,u=new J.a_(u,u.length);u.v();){t=u.d
if(t!=null)t.am(a)}s.f=!1},
$aj:function(){return[M.a8]},
$aaD:function(){return[M.a8]},
$ia8:1}
M.cJ.prototype={
a4:function(a){var u=this.y
if(u!=null)u.C(a)},
br:function(){return this.a4(null)},
eA:function(a,b){var u,t,s,r,q,p,o
for(u=b.length,t=this.ga8(),s=[{func:1,ret:-1,args:[D.V]}],r=0;r<b.length;b.length===u||(0,H.o)(b),++r){q=b[r]
if(q!=null){p=q.z
if(p==null){p=new D.bQ()
p.d=0
q.z=p}o=p.a;(o==null?p.a=H.b([],s):o).push(t)}}u=new D.b_()
u.b=!0
this.a4(u)},
eC:function(a,b){var u,t
for(u=b.gP(b),t=this.ga8();u.v();)u.gH(u).gt().B(0,t)
u=new D.b0()
u.b=!0
this.a4(u)},
saw:function(a){var u,t,s=this
if(a==null)a=X.bv()
u=s.b
if(u!==a){if(u!=null)u.gt().B(0,s.ga8())
t=s.b
s.b=a
a.gt().j(0,s.ga8())
u=new D.z("camera",t,s.b)
u.b=!0
s.a4(u)}},
sbo:function(a,b){var u,t=this,s=t.c
if(s!==b){if(s!=null)s.gt().B(0,t.ga8())
u=t.c
t.c=b
b.gt().j(0,t.ga8())
s=new D.z("target",u,t.c)
s.b=!0
t.a4(s)}},
sa6:function(a){var u,t=this,s=t.d
if(s!=a){if(s!=null)s.gt().B(0,t.ga8())
u=t.d
t.d=a
if(a!=null)a.gt().j(0,t.ga8())
s=new D.z("technique",u,t.d)
s.b=!0
t.a4(s)}},
gt:function(){var u=this.y
return u==null?this.y=D.I():u},
am:function(a3){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2=this
a3.dG(a2.d)
u=a2.c
u.toString
t=a3.a
t.bindFramebuffer(36160,null)
t.enable(2884)
t.enable(2929)
t.depthFunc(513)
s=t.drawingBufferWidth
r=t.drawingBufferHeight
q=u.r
p=q.a
if(typeof s!=="number")return H.r(s)
o=C.b.an(p*s)
p=q.b
if(typeof r!=="number")return H.r(r)
n=C.b.an(p*r)
p=C.b.an(q.c*s)
a3.c=p
q=C.b.an(q.d*r)
a3.d=q
t.viewport(o,n,p,q)
t.clearDepth(u.c)
if(u.b){u=u.a
t.clearColor(u.a,u.b,u.c,u.d)
m=16640}else m=256
t.clear(m)
u=a2.b
t=a3.c
q=a3.d
p=u.c
l=u.d
k=u.e
j=k-l
i=1/Math.tan(p*0.5)
h=V.as(-i/(t/q),0,0,0,0,i,0,0,0,0,k/j,-k*l/j,0,0,1,0)
t=u.a
if(t!=null){g=t.a
if(g!=null)h=g.n(0,h)}a3.cy.dF(h)
t=$.jL
if(t==null){t=V.jN()
q=$.jZ
if(q==null)q=$.jZ=new V.u(0,1,0)
p=V.k0()
f=p.m(0,Math.sqrt(p.A(p)))
q=q.aX(f)
e=q.m(0,Math.sqrt(q.A(q)))
d=f.aX(e)
c=new V.u(t.a,t.b,t.c)
b=e.O(0).A(c)
a=d.O(0).A(c)
a0=f.O(0).A(c)
t=V.as(e.a,d.a,f.a,b,e.b,d.b,f.b,a,e.c,d.c,f.c,a0,0,0,0,1)
$.jL=t
a1=t}else a1=t
u=u.b
if(u!=null){g=u.a
if(g!=null)a1=g.n(0,a1)}a3.db.dF(a1)
u=a2.d
if(u!=null)u.ab(0,a3)
for(u=a2.e.a,u=new J.a_(u,u.length);u.v();)u.d.ab(0,a3)
for(u=a2.e.a,u=new J.a_(u,u.length);u.v();)u.d.am(a3)
a2.b.toString
a3.cy.cb()
a3.db.cb()
a2.c.toString
a3.dD()},
$ia8:1}
M.a8.prototype={}
A.cw.prototype={}
A.eq.prototype={
h:function(a,b){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<t;++s){r=u[s]
if(r.b===b)return r}return},
fY:function(){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<u.length;u.length===t||(0,H.o)(u),++s){r=u[s]
r.a.enableVertexAttribArray(r.c)}},
da:function(){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<u.length;u.length===t||(0,H.o)(u),++s){r=u[s]
r.a.disableVertexAttribArray(r.c)}}}
A.T.prototype={
ga0:function(a){var u=this.a?1:0
return u|0|0},
i:function(a){var u=this.a?1:0
return""+(u|0|0)},
q:function(a,b){var u
if(b==null)return!1
if(!(b instanceof A.T))return!1
if(this.a===b.a)u=!0
else u=!1
return u}}
A.f6.prototype={}
A.fu.prototype={
dV:function(c0,c1){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5=this,b6=null,b7="Required uniform value, ",b8=", was not defined or used in shader.",b9="uniform mat4 objMat;\n"
b5.z=c0
u=new P.aR("")
t=c0.fr
if(t){u.a=b9
s=b9}else s=""
r=c0.fx
s=(r?u.a=s+"uniform mat4 viewObjMat;\n":s)+"uniform mat4 projViewObjMat;\n"
u.a=s
s+="\n"
u.a=s
s=u.a=s+"attribute vec3 posAttr;\n"
q=c0.k4
if(q){s+="attribute vec3 normAttr;\n"
u.a=s}p=c0.r1
u.a=(p?u.a=s+"attribute vec3 binmAttr;\n":s)+"\n"
A.lL(c0,u)
A.lN(c0,u)
A.lM(c0,u)
A.lP(c0,u)
A.lQ(c0,u)
A.lO(c0,u)
A.lR(c0,u)
s=u.a+="vec4 getPos()\n"
s+="{\n"
u.a=s
o=c0.ry
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
u.a=s}if(c0.r2){s+="   txt2D = getTxt2D();\n"
u.a=s}if(c0.rx){s+="   txtCube = getTxtCube();\n"
u.a=s}if(c0.k2){s+="   objPos = getObjPos();\n"
u.a=s}s=(c0.k3?u.a=s+"   viewPos = getViewPos();\n":s)+"   gl_Position = getPos();\n"
u.a=s
s+="}\n"
u.a=s
s=u.a=s+"\n"
b5.dm(0,s.charCodeAt(0)==0?s:s,A.lK(b5.z))
b5.Q=b5.x.h(0,"posAttr")
b5.cx=b5.x.h(0,"normAttr")
b5.ch=b5.x.h(0,"binmAttr")
b5.cy=b5.x.h(0,"txt2DAttr")
b5.db=b5.x.h(0,"txtCubeAttr")
b5.dx=b5.x.h(0,"bendAttr")
if(c0.dy)b5.id=H.k(b5.y.S(0,"invViewMat"),"$iY")
if(t)b5.dy=H.k(b5.y.S(0,"objMat"),"$iY")
if(r)b5.fr=H.k(b5.y.S(0,"viewObjMat"),"$iY")
b5.fy=H.k(b5.y.S(0,"projViewObjMat"),"$iY")
if(c0.go)b5.fx=H.k(b5.y.S(0,"viewMat"),"$iY")
if(c0.x1)b5.k1=H.k(b5.y.S(0,"txt2DMat"),"$ic8")
if(c0.x2)b5.k2=H.k(b5.y.S(0,"txtCubeMat"),"$iY")
if(c0.y1)b5.k3=H.k(b5.y.S(0,"colorMat"),"$iY")
b5.r1=H.b([],[A.Y])
t=c0.bj
if(t>0){b5.k4=b5.y.S(0,"bendMatCount")
for(n=0;n<t;++n){s=b5.r1
r=b5.y
q="bendValues["+n+"].mat"
m=r.h(0,q)
if(m==null)H.n(P.i(b7+q+b8))
s.push(H.k(m,"$iY"))}}if(c0.a.a)b5.r2=H.k(b5.y.S(0,"emissionClr"),"$iE")
if(c0.b.a)b5.x1=H.k(b5.y.S(0,"ambientClr"),"$iE")
if(c0.c.a)b5.y2=H.k(b5.y.S(0,"diffuseClr"),"$iE")
if(c0.d.a)b5.bk=H.k(b5.y.S(0,"invDiffuseClr"),"$iE")
t=c0.e.a
if(!t)s=!1
else s=!0
if(s){b5.de=H.k(b5.y.S(0,"shininess"),"$iQ")
if(t)b5.dd=H.k(b5.y.S(0,"specularClr"),"$iE")}if(c0.db){b5.df=H.k(b5.y.S(0,"envSampler"),"$ibA")
if(c0.r.a)b5.dg=H.k(b5.y.S(0,"reflectClr"),"$iE")
t=c0.x.a
if(!t)s=!1
else s=!0
if(s){b5.dh=H.k(b5.y.S(0,"refraction"),"$iQ")
if(t)b5.di=H.k(b5.y.S(0,"refractClr"),"$iE")}}if(c0.y.a)b5.dj=H.k(b5.y.S(0,"alpha"),"$iQ")
if(c0.k1){t=c0.z
s=t.length
if(s!==0){r=P.v
b5.bY=new H.G([r,A.b9])
b5.bZ=new H.G([r,[P.b4,A.c6]])
for(r=[A.c6],l=0;l<t.length;t.length===s||(0,H.o)(t),++l){k=t[l]
j=k.a
i="barLight"+H.f(j)
h=H.b([],r)
for(q=k.b,n=0;n<q;++n){p=b5.y
o=i+"s["+n+"].startPnt"
m=p.h(0,o)
if(m==null)H.n(P.i(b7+o+b8))
H.k(m,"$iE")
p=b5.y
o=i+"s["+n+"].endPnt"
g=p.h(0,o)
if(g==null)H.n(P.i(b7+o+b8))
H.k(g,"$iE")
p=b5.y
o=i+"s["+n+"].color"
f=p.h(0,o)
if(f==null)H.n(P.i(b7+o+b8))
H.k(f,"$iE")
if(typeof j!=="number")return j.ag()
if((j&4)!==0){p=b5.y
o=i+"s["+n+"].att0"
e=p.h(0,o)
if(e==null)H.n(P.i(b7+o+b8))
H.k(e,"$iQ")
p=b5.y
o=i+"s["+n+"].att1"
d=p.h(0,o)
if(d==null)H.n(P.i(b7+o+b8))
H.k(d,"$iQ")
p=b5.y
o=i+"s["+n+"].att2"
c=p.h(0,o)
if(c==null)H.n(P.i(b7+o+b8))
H.k(c,"$iQ")
b=c
a=d
a0=e}else{b=b6
a=b
a0=a}h.push(new A.c6(m,g,f,a0,a,b))}b5.bZ.l(0,j,h)
q=b5.bY
p=b5.y
o=i+"Count"
m=p.h(0,o)
if(m==null)H.n(P.i(b7+o+b8))
q.l(0,j,m)}}t=c0.Q
s=t.length
if(s!==0){r=P.v
b5.c_=new H.G([r,A.b9])
b5.c0=new H.G([r,[P.b4,A.c7]])
for(r=[A.c7],l=0;l<t.length;t.length===s||(0,H.o)(t),++l){k=t[l]
j=k.a
i="dirLight"+H.f(j)
h=H.b([],r)
for(q=k.b,n=0;n<q;++n){if(typeof j!=="number")return j.ag()
p=(j&1)!==0
if(p){o=b5.y
a1=i+"s["+n+"].objUp"
m=o.h(0,a1)
if(m==null)H.n(P.i(b7+a1+b8))
H.k(m,"$iE")
o=b5.y
a1=i+"s["+n+"].objRight"
g=o.h(0,a1)
if(g==null)H.n(P.i(b7+a1+b8))
H.k(g,"$iE")
o=b5.y
a1=i+"s["+n+"].objDir"
f=o.h(0,a1)
if(f==null)H.n(P.i(b7+a1+b8))
H.k(f,"$iE")
a2=f
a3=g
a4=m}else{a2=b6
a3=a2
a4=a3}o=b5.y
a1=i+"s["+n+"].viewDir"
m=o.h(0,a1)
if(m==null)H.n(P.i(b7+a1+b8))
H.k(m,"$iE")
o=b5.y
a1=i+"s["+n+"].color"
g=o.h(0,a1)
if(g==null)H.n(P.i(b7+a1+b8))
H.k(g,"$iE")
if(p){p=b5.y
o=i+"sTexture2D"+n
f=p.h(0,o)
if(f==null)H.n(P.i(b7+o+b8))
H.k(f,"$ibz")
a5=f}else a5=b6
h.push(new A.c7(a4,a3,a2,m,g,a5))}b5.c0.l(0,j,h)
q=b5.c_
p=b5.y
o=i+"Count"
m=p.h(0,o)
if(m==null)H.n(P.i(b7+o+b8))
q.l(0,j,m)}}t=c0.ch
s=t.length
if(s!==0){r=P.v
b5.c1=new H.G([r,A.b9])
b5.c2=new H.G([r,[P.b4,A.c9]])
for(r=[A.c9],l=0;l<t.length;t.length===s||(0,H.o)(t),++l){k=t[l]
j=k.a
i="pointLight"+H.f(j)
h=H.b([],r)
for(q=k.b,n=0;n<q;++n){p=b5.y
o=i+"s["+n+"].point"
m=p.h(0,o)
if(m==null)H.n(P.i(b7+o+b8))
H.k(m,"$iE")
p=b5.y
o=i+"s["+n+"].viewPnt"
g=p.h(0,o)
if(g==null)H.n(P.i(b7+o+b8))
H.k(g,"$iE")
p=b5.y
o=i+"s["+n+"].color"
f=p.h(0,o)
if(f==null)H.n(P.i(b7+o+b8))
H.k(f,"$iE")
if(typeof j!=="number")return j.ag()
if((j&3)!==0){p=b5.y
o=i+"s["+n+"].invViewRotMat"
e=p.h(0,o)
if(e==null)H.n(P.i(b7+o+b8))
H.k(e,"$ic8")
a6=e}else a6=b6
if((j&1)!==0){p=b5.y
o=i+"sTextureCube"+n
e=p.h(0,o)
if(e==null)H.n(P.i(b7+o+b8))
H.k(e,"$ibA")
a5=e}else a5=b6
if((j&2)!==0){p=b5.y
o=i+"sShadowCube"+n
e=p.h(0,o)
if(e==null)H.n(P.i(b7+o+b8))
H.k(e,"$ibA")
p=b5.y
o=i+"s["+n+"].shadowAdj"
d=p.h(0,o)
if(d==null)H.n(P.i(b7+o+b8))
H.k(d,"$iba")
a7=e
a8=d}else{a7=b6
a8=a7}if((j&4)!==0){p=b5.y
o=i+"s["+n+"].att0"
e=p.h(0,o)
if(e==null)H.n(P.i(b7+o+b8))
H.k(e,"$iQ")
p=b5.y
o=i+"s["+n+"].att1"
d=p.h(0,o)
if(d==null)H.n(P.i(b7+o+b8))
H.k(d,"$iQ")
p=b5.y
o=i+"s["+n+"].att2"
c=p.h(0,o)
if(c==null)H.n(P.i(b7+o+b8))
H.k(c,"$iQ")
b=c
a=d
a0=e}else{b=b6
a=b
a0=a}h.push(new A.c9(m,g,a6,f,a5,a7,a8,a0,a,b))}b5.c2.l(0,j,h)
q=b5.c1
p=b5.y
o=i+"Count"
m=p.h(0,o)
if(m==null)H.n(P.i(b7+o+b8))
q.l(0,j,m)}}t=c0.cx
s=t.length
if(s!==0){r=P.v
b5.c3=new H.G([r,A.b9])
b5.c4=new H.G([r,[P.b4,A.ca]])
for(r=[A.ca],l=0;l<t.length;t.length===s||(0,H.o)(t),++l){k=t[l]
j=k.a
i="spotLight"+H.f(j)
h=H.b([],r)
for(q=k.b,n=0;n<q;++n){p=b5.y
o=i+"s["+n+"].objPnt"
m=p.h(0,o)
if(m==null)H.n(P.i(b7+o+b8))
H.k(m,"$iE")
p=b5.y
o=i+"s["+n+"].objDir"
g=p.h(0,o)
if(g==null)H.n(P.i(b7+o+b8))
H.k(g,"$iE")
p=b5.y
o=i+"s["+n+"].viewPnt"
f=p.h(0,o)
if(f==null)H.n(P.i(b7+o+b8))
H.k(f,"$iE")
p=b5.y
o=i+"s["+n+"].color"
e=p.h(0,o)
if(e==null)H.n(P.i(b7+o+b8))
H.k(e,"$iE")
if(typeof j!=="number")return j.ag()
if((j&3)!==0){p=b5.y
o=i+"s["+n+"].objUp"
d=p.h(0,o)
if(d==null)H.n(P.i(b7+o+b8))
H.k(d,"$iE")
p=b5.y
o=i+"s["+n+"].objRight"
c=p.h(0,o)
if(c==null)H.n(P.i(b7+o+b8))
H.k(c,"$iE")
p=b5.y
o=i+"s["+n+"].tuScalar"
a9=p.h(0,o)
if(a9==null)H.n(P.i(b7+o+b8))
H.k(a9,"$iQ")
p=b5.y
o=i+"s["+n+"].tvScalar"
b0=p.h(0,o)
if(b0==null)H.n(P.i(b7+o+b8))
H.k(b0,"$iQ")
b1=b0
b2=a9
a3=c
a4=d}else{b1=b6
b2=b1
a3=b2
a4=a3}p=(j&2)!==0
if(p){o=b5.y
a1=i+"s["+n+"].shadowAdj"
d=o.h(0,a1)
if(d==null)H.n(P.i(b7+a1+b8))
H.k(d,"$iba")
a8=d}else a8=b6
if((j&8)!==0){o=b5.y
a1=i+"s["+n+"].cutoff"
d=o.h(0,a1)
if(d==null)H.n(P.i(b7+a1+b8))
H.k(d,"$iQ")
o=b5.y
a1=i+"s["+n+"].coneAngle"
c=o.h(0,a1)
if(c==null)H.n(P.i(b7+a1+b8))
H.k(c,"$iQ")
b3=c
b4=d}else{b3=b6
b4=b3}if((j&4)!==0){o=b5.y
a1=i+"s["+n+"].att0"
d=o.h(0,a1)
if(d==null)H.n(P.i(b7+a1+b8))
H.k(d,"$iQ")
o=b5.y
a1=i+"s["+n+"].att1"
c=o.h(0,a1)
if(c==null)H.n(P.i(b7+a1+b8))
H.k(c,"$iQ")
o=b5.y
a1=i+"s["+n+"].att2"
a9=o.h(0,a1)
if(a9==null)H.n(P.i(b7+a1+b8))
H.k(a9,"$iQ")
b=a9
a=c
a0=d}else{b=b6
a=b
a0=a}if((j&1)!==0){o=b5.y
a1=i+"sTexture2D"+n
d=o.h(0,a1)
if(d==null)H.n(P.i(b7+a1+b8))
H.k(d,"$ibz")
a5=d}else a5=b6
if(p){p=b5.y
o=i+"sShadow2D"+n
d=p.h(0,o)
if(d==null)H.n(P.i(b7+o+b8))
H.k(d,"$ibz")
a7=d}else a7=b6
h.push(new A.ca(m,g,f,e,a4,a3,b2,b1,a8,b4,b3,a0,a,b,a5,a7))}b5.c4.l(0,j,h)
q=b5.c3
p=b5.y
o=i+"Count"
m=p.h(0,o)
if(m==null)H.n(P.i(b7+o+b8))
q.l(0,j,m)}}}},
fo:function(a,b){}}
A.cx.prototype={
i:function(a){return"barLight"+H.f(this.a)}}
A.cG.prototype={
i:function(a){return"dirLight"+H.f(this.a)}}
A.d4.prototype={
i:function(a){return"pointLight"+H.f(this.a)}}
A.d9.prototype={
i:function(a){return"spotLight"+H.f(this.a)}}
A.fx.prototype={
i:function(a){return this.b0}}
A.c6.prototype={}
A.c7.prototype={}
A.c9.prototype={}
A.ca.prototype={}
A.d7.prototype={
cu:function(a,b){var u=this
u.y=u.x=u.r=u.f=u.e=u.d=u.c=null},
dm:function(a,b,c){var u,t,s,r=this
r.c=b
r.d=c
r.e=r.cH(b,35633)
r.f=r.cH(r.d,35632)
u=r.a
t=u.createProgram()
r.r=t
u.attachShader(t,r.e)
u.attachShader(r.r,r.f)
u.linkProgram(r.r)
if(!u.getProgramParameter(r.r,35714)){s=u.getProgramInfoLog(r.r)
u.deleteProgram(r.r)
H.n(P.i("Failed to link shader: "+H.f(s)))}r.fq()
r.ft()},
ap:function(a){a.a.useProgram(this.r)
this.x.fY()},
cH:function(a,b){var u,t=this.a,s=t.createShader(b)
t.shaderSource(s,a)
t.compileShader(s)
if(!t.getShaderParameter(s,35713)){u=t.getShaderInfoLog(s)
t.deleteShader(s)
throw H.d(P.i("Error compiling shader '"+H.f(s)+"': "+H.f(u)))}return s},
fq:function(){var u,t,s,r=this,q=H.b([],[A.cw]),p=r.a,o=p.getProgramParameter(r.r,35721)
if(typeof o!=="number")return H.r(o)
u=0
for(;u<o;++u){t=p.getActiveAttrib(r.r,u)
s=p.getAttribLocation(r.r,t.name)
q.push(new A.cw(p,t.name,s))}r.x=new A.eq(q)},
ft:function(){var u,t,s,r=this,q=H.b([],[A.dj]),p=r.a,o=p.getProgramParameter(r.r,35718)
if(typeof o!=="number")return H.r(o)
u=0
for(;u<o;++u){t=p.getActiveUniform(r.r,u)
s=p.getUniformLocation(r.r,t.name)
q.push(r.fU(t.type,t.size,t.name,s))}r.y=new A.hO(q)},
aG:function(a,b,c){var u=this.a
if(a===1)return new A.b9(u,b,c)
else return A.jm(u,this.r,b,a,c)},
ef:function(a,b,c){var u=this.a
if(a===1)return new A.bz(u,b,c)
else return A.jm(u,this.r,b,a,c)},
eg:function(a,b,c){var u=this.a
if(a===1)return new A.bA(u,b,c)
else return A.jm(u,this.r,b,a,c)},
bc:function(a,b){return new P.dB(a+" uniform variables are unsupported by all browsers.\n"+("Please change the type of "+H.f(b)+"."))},
fU:function(a,b,c,d){var u=this
switch(a){case 5120:return u.aG(b,c,d)
case 5121:return u.aG(b,c,d)
case 5122:return u.aG(b,c,d)
case 5123:return u.aG(b,c,d)
case 5124:return u.aG(b,c,d)
case 5125:return u.aG(b,c,d)
case 5126:return new A.Q(u.a,c,d)
case 35664:return new A.hK(u.a,c,d)
case 35665:return new A.E(u.a,c,d)
case 35666:return new A.ba(u.a,c,d)
case 35667:return new A.hL(u.a,c,d)
case 35668:return new A.hM(u.a,c,d)
case 35669:return new A.hN(u.a,c,d)
case 35674:return new A.hP(u.a,c,d)
case 35675:return new A.c8(u.a,c,d)
case 35676:return new A.Y(u.a,c,d)
case 35678:return u.ef(b,c,d)
case 35680:return u.eg(b,c,d)
case 35670:throw H.d(u.bc("BOOL",c))
case 35671:throw H.d(u.bc("BOOL_VEC2",c))
case 35672:throw H.d(u.bc("BOOL_VEC3",c))
case 35673:throw H.d(u.bc("BOOL_VEC4",c))
default:throw H.d(P.i("Unknown uniform variable type "+H.f(a)+" for "+H.f(c)+"."))}}}
A.dj.prototype={}
A.hO.prototype={
h:function(a,b){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<t;++s){r=u[s]
if(r.c===b)return r}return},
S:function(a,b){var u=this.h(0,b)
if(u==null)throw H.d(P.i("Required uniform value, "+b+", was not defined or used in shader."))
return u},
i:function(a){return this.J()},
J:function(){var u,t,s,r
for(u=this.a,t=u.length,s="",r=0;r<u.length;u.length===t||(0,H.o)(u),++r)s+=u[r].i(0)+"\n"
return s}}
A.b9.prototype={
i:function(a){return"Uniform1i: "+H.f(this.c)}}
A.hL.prototype={
i:function(a){return"Uniform2i: "+H.f(this.c)}}
A.hM.prototype={
i:function(a){return"Uniform3i: "+H.f(this.c)}}
A.hN.prototype={
i:function(a){return"Uniform4i: "+H.f(this.c)}}
A.hJ.prototype={
i:function(a){return"Uniform1iv: "+H.f(this.c)}}
A.Q.prototype={
i:function(a){return"Uniform1f: "+H.f(this.c)}}
A.hK.prototype={
i:function(a){return"Uniform2f: "+H.f(this.c)}}
A.E.prototype={
i:function(a){return"Uniform3f: "+H.f(this.c)}}
A.ba.prototype={
cl:function(a){return this.a.uniform4f(this.d,a.a,a.b,a.c,a.d)},
i:function(a){return"Uniform4f: "+H.f(this.c)}}
A.hP.prototype={
i:function(a){return"Uniform1Mat2 "+H.f(this.c)}}
A.c8.prototype={
a3:function(a){var u=new Float32Array(H.cn(a))
this.a.uniformMatrix3fv(this.d,!1,u)},
i:function(a){return"UniformMat3: "+H.f(this.c)}}
A.Y.prototype={
a3:function(a){var u=new Float32Array(H.cn(a))
this.a.uniformMatrix4fv(this.d,!1,u)},
i:function(a){return"UniformMat4: "+H.f(this.c)}}
A.bz.prototype={
i:function(a){return"UniformSampler2D: "+H.f(this.c)}}
A.bA.prototype={
i:function(a){return"UniformSamplerCube: "+H.f(this.c)}}
F.iC.prototype={
$3:function(a,b,c){var u,t=this,s=t.a,r=s.a.c6(s.b,b).c6(s.d.c6(s.c,b),c)
a.sX(0,new V.M(r.a,r.b,r.c))
a.scg(r.m(0,Math.sqrt(r.A(r))))
s=1-b
u=1-c
u=new V.af(t.b+b*c,t.c+s*c,t.d+b*u,t.e+s*u)
if(!J.w(a.cx,u)){a.cx=u
s=a.a
if(s!=null)s.N()}}}
F.iI.prototype={
$1:function(a){return 1}}
F.aF.prototype={
aY:function(){var u=this
if(!u.gaZ()){C.a.B(u.a.a.d.b,u)
u.a.a.N()}u.bJ()
u.bK()
u.fi()},
aU:function(a){this.a=a
a.d.b.push(this)},
aV:function(a){this.b=a
a.d.c.push(this)},
cT:function(a){this.c=a
a.d.d.push(this)},
bJ:function(){var u=this.a
if(u!=null){C.a.B(u.d.b,this)
this.a=null}},
bK:function(){var u=this.b
if(u!=null){C.a.B(u.d.c,this)
this.b=null}},
fi:function(){var u=this.c
if(u!=null){C.a.B(u.d.d,this)
this.c=null}},
gaZ:function(){return this.a==null||this.b==null||this.c==null},
e8:function(){var u,t,s,r=this.a,q=r==null?null:r.r
r=this.b
u=r==null?null:r.r
r=this.c
t=r==null?null:r.r
s=V.bB()
if(q!=null)s=s.w(0,q)
if(u!=null)s=s.w(0,u)
if(t!=null)s=s.w(0,t)
if(s.dr())return
return s.m(0,Math.sqrt(s.A(s)))},
eb:function(){var u,t,s,r=this.a,q=r==null?null:r.f
r=this.b
u=r==null?null:r.f
r=this.c
t=r==null?null:r.f
if(q==null||u==null||t==null)return
r=u.E(0,q)
r=new V.u(r.a,r.b,r.c)
s=r.m(0,Math.sqrt(r.A(r)))
r=t.E(0,q)
r=new V.u(r.a,r.b,r.c)
r=s.aX(r.m(0,Math.sqrt(r.A(r))))
return r.m(0,Math.sqrt(r.A(r)))},
bT:function(){var u,t=this
if(t.d!=null)return!0
u=t.e8()
if(u==null){u=t.eb()
if(u==null)return!1}t.d=u
t.a.a.N()
return!0},
e7:function(){var u,t,s,r=this.a,q=r==null?null:r.x
r=this.b
u=r==null?null:r.x
r=this.c
t=r==null?null:r.x
s=V.bB()
if(q!=null)s=s.w(0,q)
if(u!=null)s=s.w(0,u)
if(t!=null)s=s.w(0,t)
if(s.dr())return
return s.m(0,Math.sqrt(s.A(s)))},
ea:function(){var u,t,s,r,q,p,o,n=this,m=null,l=n.a,k=l==null,j=k?m:l.f,i=n.b,h=i==null,g=h?m:i.f,f=n.c,e=f==null,d=e?m:f.f
if(j==null||g==null||d==null)return
u=k?m:l.y
t=h?m:i.y
s=e?m:f.y
if(u==null||t==null||s==null)return
l=t.b
r=l-s.b
if(Math.abs(r-0)<$.A().a){l=d.E(0,g)
l=new V.u(l.a,l.b,l.c)
q=l.m(0,Math.sqrt(l.A(l)))
if(s.a-t.a<0)q=q.O(0)}else{p=(l-u.b)/r
l=d.E(0,g)
l=new V.M(l.a*p,l.b*p,l.c*p).w(0,g).E(0,j)
l=new V.u(l.a,l.b,l.c)
q=l.m(0,Math.sqrt(l.A(l)))
s=s.a
t=t.a
if((s-t)*p+t-u.a<0)q=q.O(0)}l=n.d
if(l!=null){o=l.m(0,Math.sqrt(l.A(l)))
l=o.aX(q)
l=l.m(0,Math.sqrt(l.A(l))).aX(o)
q=l.m(0,Math.sqrt(l.A(l)))}return q},
bS:function(){var u,t=this
if(t.e!=null)return!0
u=t.e7()
if(u==null){u=t.ea()
if(u==null)return!1}t.e=u
t.a.a.N()
return!0},
aF:function(a,b){var u=b.a
if(u==null)throw H.d(P.i("May not replace a face's vertex with a vertex which is not attached to a shape."))
if(a.a!==u)throw H.d(P.i("May not replace a face's vertex with a vertex attached to a different shape."))},
gfR:function(a){var u=this
if(J.w(u.a,u.b))return!0
if(J.w(u.b,u.c))return!0
if(J.w(u.c,u.a))return!0
return!1},
q:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.J()},
D:function(a){var u,t,s=this
if(s.gaZ())return a+"disposed"
u=a+C.c.ae(J.aa(s.a.e),0)+", "+C.c.ae(J.aa(s.b.e),0)+", "+C.c.ae(J.aa(s.c.e),0)+" {"
t=s.d
u=t!=null?u+(t.i(0)+", "):u+"-, "
t=s.e
return t!=null?u+(t.i(0)+"}"):u+"-}"},
J:function(){return this.D("")}}
F.eV.prototype={}
F.hj.prototype={
aN:function(a,b,c){var u,t=b.a
t.a.a.p()
t=t.e
u=c.a
u.a.a.p()
if(t==u.e){t=b.b
t.a.a.p()
t=t.e
u=c.b
u.a.a.p()
if(t==u.e){t=b.c
t.a.a.p()
t=t.e
u=c.c
u.a.a.p()
u=t==u.e
t=u}else t=!1
return t}else{t=b.a
t.a.a.p()
t=t.e
u=c.b
u.a.a.p()
if(t==u.e){t=b.b
t.a.a.p()
t=t.e
u=c.c
u.a.a.p()
if(t==u.e){t=b.c
t.a.a.p()
t=t.e
u=c.a
u.a.a.p()
u=t==u.e
t=u}else t=!1
return t}else{t=b.a
t.a.a.p()
t=t.e
u=c.c
u.a.a.p()
if(t==u.e){t=b.b
t.a.a.p()
t=t.e
u=c.a
u.a.a.p()
if(t==u.e){t=b.c
t.a.a.p()
t=t.e
u=c.b
u.a.a.p()
u=t==u.e
t=u}else t=!1
return t}else return!1}}}}
F.aI.prototype={
aY:function(){var u=this
if(!u.gaZ()){C.a.B(u.a.a.c.b,u)
u.a.a.N()}u.bJ()
u.bK()},
aU:function(a){this.a=a
a.c.b.push(this)},
aV:function(a){this.b=a
a.c.c.push(this)},
bJ:function(){var u=this.a
if(u!=null){C.a.B(u.c.b,this)
this.a=null}},
bK:function(){var u=this.b
if(u!=null){C.a.B(u.c.c,this)
this.b=null}},
gaZ:function(){return this.a==null||this.b==null},
aF:function(a,b){var u=b.a
if(u==null)throw H.d(P.i("May not replace a line's vertex with a vertex which is not attached to a shape."))
if(a.a!==u)throw H.d(P.i("May not replace a line's vertex with a vertex attached to a different shape."))},
q:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.J()},
D:function(a){if(this.gaZ())return a+"disposed"
return a+C.c.ae(J.aa(this.a.e),0)+", "+C.c.ae(J.aa(this.b.e),0)},
J:function(){return this.D("")}}
F.fm.prototype={}
F.hI.prototype={
aN:function(a,b,c){var u,t=b.a
t.a.a.p()
t=t.e
u=c.a
u.a.a.p()
if(t==u.e){t=b.b
t.a.a.p()
t=t.e
u=c.b
u.a.a.p()
return t==u.e}else{t=b.a
t.a.a.p()
t=t.e
u=c.b
u.a.a.p()
if(t==u.e){t=b.b
t.a.a.p()
t=t.e
u=c.a
u.a.a.p()
return t==u.e}else return!1}}}
F.c3.prototype={
fp:function(a){this.a=a
a.b.b.push(this)},
q:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.J()},
D:function(a){var u=this.a
if(u==null)return a+"disposed"
return a+C.c.ae(J.aa(u.e),0)},
J:function(){return this.D("")}}
F.ag.prototype={
gt:function(){var u=this.e
return u==null?this.e=D.I():u},
az:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i,h=this,g=h.e
if(g!=null)++g.d
a.a.p()
u=h.a.c.length
for(g=a.a.c,t=g.length,s=0;s<g.length;g.length===t||(0,H.o)(g),++s){r=g[s]
h.a.j(0,r.bV())}h.a.p()
for(g=a.b.b,t=g.length,s=0;s<g.length;g.length===t||(0,H.o)(g),++s){q=g[s]
p=h.a
o=q.a
o.a.a.p()
o=o.e
if(typeof o!=="number")return o.w()
o+=u
p=p.c
if(o>=p.length)return H.c(p,o)
n=p[o]
h.b.a.a.j(0,n)
F.l_(n)}for(g=a.c.b,t=g.length,s=0;s<g.length;g.length===t||(0,H.o)(g),++s){m=g[s]
p=h.a
o=m.a
o.a.a.p()
o=o.e
if(typeof o!=="number")return o.w()
o+=u
p=p.c
if(o>=p.length)return H.c(p,o)
l=p[o]
o=h.a
p=m.b
p.a.a.p()
p=p.e
if(typeof p!=="number")return p.w()
p+=u
o=o.c
if(p>=o.length)return H.c(o,p)
k=o[p]
p=h.c.a
p.a.j(0,l)
p.a.j(0,k)
F.jf(l,k)}for(g=a.d.b,t=g.length,s=0;s<g.length;g.length===t||(0,H.o)(g),++s){j=g[s]
p=h.a
o=j.a
o.a.a.p()
o=o.e
if(typeof o!=="number")return o.w()
o+=u
p=p.c
if(o>=p.length)return H.c(p,o)
l=p[o]
o=h.a
p=j.b
p.a.a.p()
p=p.e
if(typeof p!=="number")return p.w()
p+=u
o=o.c
if(p>=o.length)return H.c(o,p)
k=o[p]
p=h.a
o=j.c
o.a.a.p()
o=o.e
if(typeof o!=="number")return o.w()
o+=u
p=p.c
if(o>=p.length)return H.c(p,o)
i=p[o]
o=h.d.a
o.a.j(0,l)
o.a.j(0,k)
o.a.j(0,i)
F.bR(l,k,i)}g=h.e
if(g!=null)g.ar(0)},
aq:function(){var u,t=this,s=t.e
if(s!=null)++s.d
u=t.d.aq()||!1
if(!t.a.aq())u=!1
s=t.e
if(s!=null)s.ar(0)
return u},
aK:function(){var u,t=this,s=t.e
if(s!=null)++s.d
u=t.d.aK()||!1
if(!t.a.aK())u=!1
s=t.e
if(s!=null)s.ar(0)
return u},
bf:function(){var u=this.e
if(u!=null)++u.d
this.a.bf()
u=this.e
if(u!=null)u.ar(0)
return!0},
fZ:function(a,b){var u,t,s,r=this.a.c.length
for(u=0;u<r;++u){t=this.a.c
if(u>=t.length)return H.c(t,u)
s=t[u]
if(b.aN(0,a,s))return s}return},
fk:function(a,b){var u,t,s,r,q,p
this.a.j(0,a)
for(u=b.length,t=0;t<b.length;b.length===u||(0,H.o)(b),++t){s=b[t]
for(;r=s.d,r.b.length+r.c.length+r.d.length>0;){r=r.h(0,0)
q=r.a
if(q==null||r.b==null||r.c==null)H.n(P.i("May not replace a face's vertex when the point has been disposed."))
if(J.w(q,s)){r.aF(s,a)
q=r.a
if(q!=null){C.a.B(q.d.b,r)
r.a=null}r.a=a
a.d.b.push(r)
p=1}else p=0
if(J.w(r.b,s)){r.aF(s,a)
q=r.b
if(q!=null){C.a.B(q.d.c,r)
r.b=null}r.b=a
a.d.c.push(r);++p}if(J.w(r.c,s)){r.aF(s,a)
q=r.c
if(q!=null){C.a.B(q.d.d,r)
r.c=null}r.c=a
a.d.d.push(r);++p}if(p>0){r=r.a.a.e
if(r!=null)r.C(null)}}for(;r=s.c,r.b.length+r.c.length>0;){r=r.h(0,0)
q=r.a
if(q==null||r.b==null)H.n(P.i("May not replace a line's vertex when the point has been disposed."))
if(J.w(q,s)){r.aF(s,a)
q=r.a
if(q!=null){C.a.B(q.c.b,r)
r.a=null}r.a=a
a.c.b.push(r)
p=1}else p=0
if(J.w(r.b,s)){r.aF(s,a)
q=r.b
if(q!=null){C.a.B(q.c.c,r)
r.b=null}r.b=a
a.c.c.push(r);++p}if(p>0){r=r.a.a.e
if(r!=null)r.C(null)}}for(;r=s.b.b,r.length>0;){r=r[0]
q=r.a
if(q==null)H.n(P.i("May not replace a point's vertex when the point has been disposed."))
if(J.w(q,s)){if(a.a==null)H.n(P.i("May not replace a point's vertex with a vertex which is not attached to a shape."))
q=r.a
if(q!=null){C.a.B(q.b.b,r)
r.a=null}r.a=a
a.b.b.push(r)
p=1}else p=0
if(p>0){r=r.a.a.e
if(r!=null)r.C(null)}}this.a.B(0,s)}},
h5:function(a,b){var u,t,s,r,q,p,o=this,n=o.e
if(n!=null)++n.d
n=o.a.c
u=H.b(n.slice(0),[H.aX(n,0)])
for(n=[F.ay];u.length!==0;){t=C.a.gh0(u)
C.a.cc(u,0)
if(t!=null){s=H.b([],n)
s.push(t)
for(r=u.length-1;r>=0;--r){if(r>=u.length)return H.c(u,r)
q=u[r]
if(q!=null&&a.aN(0,t,q)){s.push(q)
C.a.cc(u,r)}}if(s.length>1){p=b.az(s)
o.fk(p,s)
u.push(p)}}}o.a.p()
o.c.cd()
o.d.cd()
o.b.ho()
o.c.ce(new F.hI())
o.d.ce(new F.hj())
n=o.e
if(n!=null)n.ar(0)},
d5:function(a3,a4){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0=this,a1=34962,a2=a0.a.c.length
a4.toString
u=$.am()
t=a4.a
s=(t&u.a)!==0?1:0
if((t&$.al().a)!==0)++s
if((t&$.ak().a)!==0)++s
if((t&$.bh().a)!==0)++s
if((t&$.bi().a)!==0)++s
if((t&$.bg().a)!==0)++s
if((t&$.ct().a)!==0)++s
if((t&$.bG().a)!==0)++s
if((t&$.aY().a)!==0)++s
r=a4.gcp(a4)
q=r*4
u=new Array(a2*r)
u.fixed$length=Array
p=H.b(u,[P.J])
u=new Array(s)
u.fixed$length=Array
o=H.b(u,[Z.cz])
for(u=p.length,t=o.length,n=0,m=0;m<s;++m){l=a4.fN(m)
k=l.gcp(l)
if(m>=t)return H.c(o,m)
o[m]=new Z.cz(l,k,n*4,q)
for(j=0;j<a2;++j){i=a0.a.c
if(j>=i.length)return H.c(i,j)
h=i[j].h4(l)
g=n+j*r
for(i=h.length,f=0;f<i;++f){e=h[f]
if(g<0||g>=u)return H.c(p,g)
p[g]=e;++g}}n+=k}u=a3.a
d=u.createBuffer()
u.bindBuffer(a1,d)
u.bufferData(a1,new Float32Array(H.cn(p)),35044)
u.bindBuffer(a1,null)
c=new Z.bm(new Z.dr(a1,d),o,a4)
c.b=H.b([],[Z.bp])
if(a0.b.b.length!==0){b=H.b([],[P.v])
for(m=0;t=a0.b.b,m<t.length;++m){t=t[m].a
t.a.a.p()
b.push(t.e)}a=Z.jn(u,34963,b)
c.b.push(new Z.bp(0,b.length,a))}if(a0.c.b.length!==0){b=H.b([],[P.v])
for(m=0;t=a0.c.b,m<t.length;++m){t=t[m].a
t.a.a.p()
b.push(t.e)
t=a0.c.b
if(m>=t.length)return H.c(t,m)
t=t[m].b
t.a.a.p()
b.push(t.e)}a=Z.jn(u,34963,b)
c.b.push(new Z.bp(1,b.length,a))}if(a0.d.b.length!==0){b=H.b([],[P.v])
for(m=0;t=a0.d.b,m<t.length;++m){t=t[m].a
t.a.a.p()
b.push(t.e)
t=a0.d.b
if(m>=t.length)return H.c(t,m)
t=t[m].b
t.a.a.p()
b.push(t.e)
t=a0.d.b
if(m>=t.length)return H.c(t,m)
t=t[m].c
t.a.a.p()
b.push(t.e)}a=Z.jn(u,34963,b)
c.b.push(new Z.bp(4,b.length,a))}return c},
i:function(a){var u=this,t="   ",s=H.b([],[P.t])
if(u.a.c.length!==0){s.push("Vertices:")
s.push(u.a.D(t))}if(u.b.b.length!==0){s.push("Points:")
s.push(u.b.D(t))}if(u.c.b.length!==0){s.push("Lines:")
s.push(u.c.D(t))}if(u.d.b.length!==0){s.push("Faces:")
s.push(u.d.D(t))}return C.a.u(s,"\n")},
N:function(){var u=this.e
if(u!=null)u.C(null)}}
F.hd.prototype={
cY:function(a,b,c,d){var u,t=this.a
t.a.j(0,b)
t.a.j(0,c)
t.a.j(0,d)
u=new F.aF()
t=b.a
if(t==null)H.n(P.i("May not create a face with a first vertex which is not attached to a shape."))
if(t!=c.a||t!=d.a)H.n(P.i("May not create a face with vertices attached to different shapes."))
u.aU(b)
u.aV(c)
u.cT(d)
u.a.a.d.b.push(u)
u.a.a.N()
return u},
fJ:function(a){var u,t,s,r,q,p=H.b([],[F.aF]),o=a.length
if(o>0){u=a[0]
for(t=this.a,s=2;s<o;++s){r=s-1
q=a.length
if(r>=q)return H.c(a,r)
r=a[r]
if(s>=q)return H.c(a,s)
q=a[s]
t.a.j(0,u)
t.a.j(0,r)
t.a.j(0,q)
p.push(F.bR(u,r,q))}}return p},
fK:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k,j,i,h=H.b([],[F.aF])
for(u=this.a,t=b,s=0,r=!1,q=1;q<a;++q,++s,++t){for(p=r,o=1;o<b;++o,t=k){n=c.length
if(s<0||s>=n)return H.c(c,s)
m=c[s];++s
if(s>=n)return H.c(c,s)
l=c[s]
k=t+1
if(k<0||k>=n)return H.c(c,k)
j=c[k]
if(t<0||t>=n)return H.c(c,t)
i=c[t]
n=u.a
if(p){n.j(0,m)
u.a.j(0,l)
u.a.j(0,j)
h.push(F.bR(m,l,j))
u.a.j(0,m)
u.a.j(0,j)
u.a.j(0,i)
h.push(F.bR(m,j,i))}else{n.j(0,l)
u.a.j(0,j)
u.a.j(0,i)
h.push(F.bR(l,j,i))
u.a.j(0,l)
u.a.j(0,i)
u.a.j(0,m)
h.push(F.bR(l,i,m))}p=!p}r=!r}return h},
gk:function(a){return this.b.length},
ce:function(a){var u,t,s,r,q,p,o,n
for(u=this.a,t=u.a.c.length-1;t>=0;--t){s=u.a.c
if(t>=s.length)return H.c(s,t)
r=s[t]
for(s=r.d,q=s.b.length+s.c.length+s.d.length-1;q>=0;--q){p=r.d.h(0,q)
for(o=q-1;o>=0;--o){n=r.d.h(0,o)
if(a.aN(0,p,n)){p.aY()
break}}}}},
cd:function(){var u,t,s
for(u=this.b.length-1;u>=0;--u){t=this.b
if(u>=t.length)return H.c(t,u)
s=t[u]
t=s.gfR(s)
if(t)s.aY()}},
aq:function(){var u,t,s,r
for(u=this.b,t=u.length,s=!0,r=0;r<u.length;u.length===t||(0,H.o)(u),++r)if(!u[r].bT())s=!1
return s},
aK:function(){var u,t,s,r
for(u=this.b,t=u.length,s=!0,r=0;r<u.length;u.length===t||(0,H.o)(u),++r)if(!u[r].bS())s=!1
return s},
i:function(a){return this.J()},
D:function(a){var u,t,s,r=H.b([],[P.t])
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.o)(u),++s)r.push(u[s].D(a))
return C.a.u(r,"\n")},
J:function(){return this.D("")}}
F.he.prototype={
bP:function(a,b,c){var u,t=this.a
t.a.j(0,b)
t.a.j(0,c)
t=new F.aI()
if(b==null)H.n(P.i("May not create a line with a null start vertex."))
if(c==null)H.n(P.i("May not create a line with a null end vertex."))
u=b.a
if(u==null)H.n(P.i("May not create a line with a start vertex which is not attached to a shape."))
if(u!=c.a)H.n(P.i("May not create a line with vertices attached to different shapes."))
t.aU(b)
t.aV(c)
t.a.a.c.b.push(t)
t.a.a.N()
return t},
cZ:function(a){var u,t,s,r,q=H.b([],[F.aI]),p=a.length
if(p>0){for(u=this.a,t=1;t<p;++t){s=t-1
r=a.length
if(s>=r)return H.c(a,s)
s=a[s]
if(t>=r)return H.c(a,t)
r=a[t]
u.a.j(0,s)
u.a.j(0,r)
q.push(F.jf(s,r))}u=p-1
s=a.length
if(u>=s)return H.c(a,u)
u=a[u]
if(0>=s)return H.c(a,0)
q.push(this.bP(0,u,a[0]))}return q},
fL:function(a){var u,t,s,r,q=H.b([],[F.aI])
for(u=this.a,t=1;t<64;t+=2){s=a[t-1]
r=a[t]
u.a.j(0,s)
u.a.j(0,r)
q.push(F.jf(s,r))}return q},
gk:function(a){return this.b.length},
ce:function(a){var u,t,s,r,q,p,o,n
for(u=this.a,t=u.a.c.length-1;t>=0;--t){s=u.a.c
if(t>=s.length)return H.c(s,t)
r=s[t]
for(s=r.c,q=s.b.length+s.c.length-1;q>=0;--q){p=r.c.h(0,q)
for(o=q-1;o>=0;--o){n=r.c.h(0,o)
if(a.aN(0,p,n)){p.aY()
break}}}}},
cd:function(){var u,t,s
for(u=this.b.length-1;u>=0;--u){t=this.b
if(u>=t.length)return H.c(t,u)
s=t[u]
t=J.w(s.a,s.b)
if(t)s.aY()}},
i:function(a){return this.J()},
D:function(a){var u,t,s=H.b([],[P.t]),r=this.b.length
for(u=0;u<r;++u){t=this.b
if(u>=t.length)return H.c(t,u)
s.push(t[u].D(a+(""+u+". ")))}return C.a.u(s,"\n")},
J:function(){return this.D("")}}
F.hf.prototype={
gk:function(a){return this.b.length},
ho:function(){var u,t,s
for(u=this.b.length-1;u>=0;--u){t=this.b
if(u>=t.length)return H.c(t,u)
t=t[u]
s=t.a
if(s.b.b.length>1){if(s!=null){C.a.B(s.a.b.b,t)
s=t.a.a.e
if(s!=null)s.C(null)}s=t.a
if(s!=null){C.a.B(s.b.b,t)
t.a=null}}}},
i:function(a){return this.J()},
D:function(a){var u,t,s,r=H.b([],[P.t])
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.o)(u),++s)r.push(u[s].D(a))
return C.a.u(r,"\n")},
J:function(){return this.D("")}}
F.ay.prototype={
bW:function(a){var u=this,t=u.f,s=u.r,r=u.x,q=u.y,p=u.z,o=u.Q,n=u.ch
return F.bb(u.cx,r,o,t,s,q,p,a,n)},
bV:function(){return this.bW(null)},
sX:function(a,b){var u
if(!J.w(this.f,b)){this.f=b
u=this.a
if(u!=null)u.N()}},
sds:function(a){var u
a=a==null?null:a.m(0,Math.sqrt(a.A(a)))
if(!J.w(this.r,a)){this.r=a
u=this.a
if(u!=null)u.N()}},
sbe:function(a){var u
a=a==null?null:a.m(0,Math.sqrt(a.A(a)))
if(!J.w(this.x,a)){this.x=a
u=this.a
if(u!=null)u.N()}},
scf:function(a){var u
if(!J.w(this.y,a)){this.y=a
u=this.a
if(u!=null)u.N()}},
scg:function(a){var u
if(!J.w(this.z,a)){this.z=a
u=this.a
if(u!=null)u.N()}},
sU:function(a,b){var u
if(!J.w(this.Q,b)){this.Q=b
u=this.a
if(u!=null)u.N()}},
sdL:function(a,b){var u
if(this.ch!==b){this.ch=b
u=this.a
if(u!=null)u.N()}},
h4:function(a){var u,t,s=this
if(a.q(0,$.am())){u=s.f
t=[P.J]
if(u==null)return H.b([0,0,0],t)
else return H.b([u.a,u.b,u.c],t)}else if(a.q(0,$.al())){u=s.r
t=[P.J]
if(u==null)return H.b([0,1,0],t)
else return H.b([u.a,u.b,u.c],t)}else if(a.q(0,$.ak())){u=s.x
t=[P.J]
if(u==null)return H.b([0,0,1],t)
else return H.b([u.a,u.b,u.c],t)}else if(a.q(0,$.bh())){u=s.y
t=[P.J]
if(u==null)return H.b([0,0],t)
else return H.b([u.a,u.b],t)}else if(a.q(0,$.bi())){u=s.z
t=[P.J]
if(u==null)return H.b([0,0,0],t)
else return H.b([u.a,u.b,u.c],t)}else if(a.q(0,$.bg())){u=s.Q
t=[P.J]
if(u==null)return H.b([1,1,1],t)
else return H.b([u.a,u.b,u.c],t)}else if(a.q(0,$.ct())){u=s.Q
if(u==null)return H.b([1,1,1,1],[P.J])
else return u.ci(0)}else if(a.q(0,$.bG()))return H.b([s.ch],[P.J])
else if(a.q(0,$.aY())){u=s.cx
t=[P.J]
if(u==null)return H.b([-1,-1,-1,-1],t)
else return H.b([u.a,u.b,u.c,u.d],t)}else return H.b([],[P.J])},
bT:function(){var u,t=this,s={}
if(t.r!=null)return!0
u=t.a
if(u!=null){u=u.e
if(u!=null)++u.d}s.a=V.bB()
t.d.F(0,new F.i6(s))
s=s.a
t.r=s.m(0,Math.sqrt(s.A(s)))
s=t.a
if(s!=null){s.N()
s=t.a.e
if(s!=null)s.ar(0)}return!0},
bS:function(){var u,t=this,s={}
if(t.x!=null)return!0
u=t.a
if(u!=null){u=u.e
if(u!=null)++u.d}s.a=V.bB()
t.d.F(0,new F.i5(s))
s=s.a
t.x=s.m(0,Math.sqrt(s.A(s)))
s=t.a
if(s!=null){s.N()
s=t.a.e
if(s!=null)s.ar(0)}return!0},
dk:function(a){var u,t,s,r=this.c.b.length
for(u=0;u<r;++u){t=this.c.b
if(u>=t.length)return H.c(t,u)
s=t[u]
t=s.b
t.a.a.p()
t=t.e
a.a.a.p()
if(t==a.e)return s}return},
h1:function(a){var u=this.dk(a)
if(u!=null)return u
return a.dk(this)},
q:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.J()},
D:function(a){var u,t,s=this,r="-",q=H.b([],[P.t])
q.push(C.c.ae(J.aa(s.e),0))
u=s.f
if(u!=null)q.push(u.i(0))
else q.push(r)
u=s.r
if(u!=null)q.push(u.i(0))
else q.push(r)
u=s.x
if(u!=null)q.push(u.i(0))
else q.push(r)
u=s.y
if(u!=null)q.push(u.i(0))
else q.push(r)
u=s.z
if(u!=null)q.push(u.i(0))
else q.push(r)
u=s.Q
if(u!=null)q.push(u.i(0))
else q.push(r)
q.push(V.B(s.ch,3,0))
u=s.cx
if(u!=null)q.push(u.i(0))
else q.push(r)
t=C.a.u(q,", ")
return a+"{"+t+"}"},
J:function(){return this.D("")}}
F.i6.prototype={
$1:function(a){var u,t=a==null?null:a.d
if(t!=null){u=this.a
u.a=u.a.w(0,t)}}}
F.i5.prototype={
$1:function(a){var u,t=a==null?null:a.e
if(t!=null){u=this.a
u.a=u.a.w(0,t)}}}
F.hX.prototype={
p:function(){var u,t,s,r
if(this.b){u=this.c
t=u.length
for(s=0,r=0;r<t;++r){if(r>=u.length)return H.c(u,r)
u[r].e=s;++s}this.b=!1}},
j:function(a,b){var u,t=b.a
if(t!=null){if(t===this.a)return!1
throw H.d(P.i("May not add a vertex already attached to another shape to this shape."))}t=this.c
b.e=t.length
u=this.a
b.a=u
t.push(b)
u.N()
return!0},
fM:function(a,b,c,d,e,f,g){var u=F.bb(a,null,b,c,d,e,f,g,0)
this.j(0,u)
return u},
aJ:function(a,b,c,d,e,f){return this.fM(a,b,c,null,d,e,f)},
V:function(a,b,c){var u=null,t=F.bb(u,u,u,new V.M(a,b,c),u,u,u,u,0)
this.j(0,t)
return t},
gk:function(a){return this.c.length},
B:function(a,b){var u,t
if(b==null)return!1
u=this.a
if(b.a!==u)return!1
if(b.b.b.length===0){t=b.c
if(t.b.length===0&&t.c.length===0){t=b.d
t=t.b.length===0&&t.c.length===0&&t.d.length===0}else t=!1}else t=!1
if(!t)throw H.d(P.i("May not remove a vertex without first making it empty."))
b.a=null
C.a.B(this.c,b)
u.N()
return this.b=!0},
aq:function(){var u,t,s
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.o)(u),++s)u[s].bT()
return!0},
aK:function(){var u,t,s
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.o)(u),++s)u[s].bS()
return!0},
bf:function(){var u,t,s,r,q,p,o,n
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.o)(u),++s){r=u[s]
if(r.z==null){q=r.r
p=q.a
o=q.b
n=q.c
n=q.m(0,Math.sqrt(p*p+o*o+n*n))
if(!J.w(r.z,n)){r.z=n
q=r.a
if(q!=null){q=q.e
if(q!=null)q.C(null)}}}}return!0},
i:function(a){return this.J()},
D:function(a){var u,t,s,r
this.p()
u=H.b([],[P.t])
for(t=this.c,s=t.length,r=0;r<t.length;t.length===s||(0,H.o)(t),++r)u.push(t[r].D(a))
return C.a.u(u,"\n")},
J:function(){return this.D("")}}
F.hY.prototype={
gk:function(a){return this.b.length+this.c.length+this.d.length},
h:function(a,b){var u,t=this.b,s=t.length
if(b<s){if(b<0)return H.c(t,b)
return t[b]}b-=s
t=this.c
u=t.length
if(b<u){if(b<0)return H.c(t,b)
return t[b]}b-=u
t=this.d
if(b<0||b>=t.length)return H.c(t,b)
return t[b]},
F:function(a,b){var u=this
C.a.F(u.b,b)
C.a.F(u.c,new F.hZ(u,b))
C.a.F(u.d,new F.i_(u,b))},
i:function(a){return this.J()},
J:function(){var u,t,s,r=H.b([],[P.t])
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.o)(u),++s)r.push(u[s].D(""))
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.o)(u),++s)r.push(u[s].D(""))
for(u=this.d,t=u.length,s=0;s<u.length;u.length===t||(0,H.o)(u),++s)r.push(u[s].D(""))
return C.a.u(r,"\n")}}
F.hZ.prototype={
$1:function(a){if(!J.w(a.a,this.a))this.b.$1(a)}}
F.i_.prototype={
$1:function(a){var u=this.a
if(!J.w(a.a,u)&&!J.w(a.b,u))this.b.$1(a)}}
F.i1.prototype={
gk:function(a){return this.b.length+this.c.length},
h:function(a,b){var u,t=this.b,s=t.length
if(b>=s){t=this.c
u=b-s
if(u<0||u>=t.length)return H.c(t,u)
return t[u]}else{if(b<0)return H.c(t,b)
return t[b]}},
i:function(a){return this.J()},
J:function(){var u,t,s,r=H.b([],[P.t])
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.o)(u),++s)r.push(u[s].D(""))
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.o)(u),++s)r.push(u[s].D(""))
return C.a.u(r,"\n")}}
F.i2.prototype={}
F.dq.prototype={
aN:function(a,b,c){return J.w(b.f,c.f)}}
F.i3.prototype={}
F.i0.prototype={
az:function(a5){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4=null
for(u=a5.length,t=a4,s=t,r=s,q=r,p=q,o=p,n=0,m=0,l=0,k=0,j=0,i=0,h=0;h<u;++h){g=a5[h]
f=g.f
if(f!=null){o=o==null?f:new V.M(o.a+f.a,o.b+f.b,o.c+f.c);++n}e=g.r
if(e!=null)p=p==null?e:new V.u(p.a+e.a,p.b+e.b,p.c+e.c)
d=g.x
if(d!=null)q=q==null?d:new V.u(q.a+d.a,q.b+d.b,q.c+d.c)
c=g.y
if(c!=null){s=s==null?c:new V.P(s.a+c.a,s.b+c.b);++l}b=g.z
if(b!=null){t=t==null?b:new V.u(t.a+b.a,t.b+b.b,t.c+b.c);++k}a=g.Q
if(a!=null){a0=a.a
a1=a.b
a2=a.c
a=a.d
if(r==null){a=[a0,a1,a2,a]
r=new V.aU(a[0],a[1],a[2],a[3])}else{a=[a0,a1,a2,a]
a0=a[0]
a1=a[1]
a2=a[2]
a=a[3]
r=new V.aU(r.a+a0,r.b+a1,r.c+a2,r.d+a)}++m}a=g.ch
if(typeof a!=="number")return H.r(a)
i+=a;++j}a3=F.bb(a4,a4,a4,a4,a4,a4,a4,a4,0)
if(n<=0||o==null)a3.sX(0,a4)
else a3.sX(0,o.m(0,n))
if(p==null)a3.sds(a4)
else a3.sds(p.m(0,Math.sqrt(p.A(p))))
if(q==null)a3.sbe(a4)
else a3.sbe(q.m(0,Math.sqrt(q.A(q))))
if(l<=0||s==null)a3.scf(a4)
else a3.scf(s.m(0,l))
if(k<=0||t==null)a3.scg(a4)
else a3.scg(t.m(0,k))
if(m<=0||r==null)a3.sU(0,a4)
else{u=r.m(0,m)
u=[u.a,u.b,u.c,u.d]
a=u[0]
a0=u[1]
a1=u[2]
u=u[3]
if(a<0)a=0
else if(a>1)a=1
if(a0<0)a0=0
else if(a0>1)a0=1
if(a1<0)a1=0
else if(a1>1)a1=1
if(u<0)u=0
else if(u>1)u=1
a3.sU(0,new V.N(a,a0,a1,u))}if(j<=0)a3.sdL(0,0)
else a3.sdL(0,i/j)
return a3}}
F.i4.prototype={
gk:function(a){return this.b.length},
i:function(a){return this.J()},
J:function(){var u,t,s,r=H.b([],[P.t])
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.o)(u),++s)r.push(u[s].D(""))
return C.a.u(r,"\n")}}
O.cN.prototype={
gt:function(){var u=this.rx
return u==null?this.rx=D.I():u},
W:function(a){var u=this.rx
if(u!=null)u.C(a)},
scn:function(a){var u
if(!this.Q){this.Q=!0
u=new D.z("showFilled",!1,!0)
u.b=!0
this.W(u)}},
sco:function(a){var u
if(!this.ch){this.ch=!0
u=new D.z("showWireFrame",!1,!0)
u.b=!0
this.W(u)}},
sd8:function(a){var u,t,s=this
if(!s.c.q(0,a)){u=s.c
s.c=a
t=new D.z("diffuse1",u,a)
t.b=!0
s.W(t)}},
sd0:function(a){var u,t,s=this
if(!s.d.q(0,a)){u=s.d
s.d=a
t=new D.z("ambient1",u,a)
t.b=!0
s.W(t)}},
ab:function(a,b){},
dH:function(a,b){var u,t,s,r,q,p,o=this,n="Inspection",m=2929
if(o.a==null){u=a.fr.h(0,n)
if(u==null){t=a.a
u=new A.f6(t,n)
u.cu(t,n)
u.dm(0,"uniform mat4 viewMat;                                         \nuniform mat4 viewObjMatrix;                                   \nuniform mat4 projViewObjMatrix;                               \nuniform vec3 lightVec;                                        \nuniform float weightScalar;                                   \n                                                              \nattribute vec3 posAttr;                                       \nattribute vec3 normAttr;                                      \nattribute vec4 clrAttr;                                       \nattribute vec3 binmAttr;                                      \n                                                              \nvarying vec3 normal;                                          \nvarying vec4 color;                                           \nvarying vec3 litVec;                                          \nvarying vec3 camPos;                                          \n                                                              \nvoid main()                                                   \n{                                                             \n   gl_PointSize = 6.0;                                        \n   color = clrAttr;                                           \n   normal = normalize(viewObjMatrix*vec4(normAttr, 0.0)).xyz; \n   litVec = normalize((viewMat*vec4(-lightVec, 0.0)).xyz);    \n   vec3 pos = posAttr + binmAttr*weightScalar;                \n   gl_Position = projViewObjMatrix*vec4(pos, 1.0);            \n}                                                             \n","precision mediump float;                        \n                                                \nuniform vec4 ambientClr;                        \nuniform vec4 diffuseClr;                        \n                                                \nvarying vec3 normal;                            \nvarying vec4 color;                             \nvarying vec3 litVec;                            \n                                                \nvoid main()                                     \n{                                               \n   vec3 norm = normalize(normal);               \n   float scalar = dot(norm, litVec);            \n   vec4 diffuse = diffuseClr*max(scalar, 0.0);  \n   gl_FragColor = color*(ambientClr + diffuse); \n}                                               \n")
u.z=u.x.h(0,"posAttr")
u.Q=u.x.h(0,"normAttr")
u.ch=u.x.h(0,"clrAttr")
u.cx=u.x.h(0,"binmAttr")
u.cy=H.k(u.y.h(0,"lightVec"),"$iE")
u.db=H.k(u.y.h(0,"ambientClr"),"$iba")
u.dx=H.k(u.y.h(0,"diffuseClr"),"$iba")
u.dy=H.k(u.y.h(0,"weightScalar"),"$iQ")
u.fr=H.k(u.y.h(0,"viewMat"),"$iY")
u.fx=H.k(u.y.h(0,"viewObjMatrix"),"$iY")
u.fy=H.k(u.y.h(0,"projViewObjMatrix"),"$iY")
a.d_(u)}o.a=u}if(b.e==null){b.d.aq()
b.d.aK()
b.d.bf()
t=new Z.cA()
t.a=new H.G([P.t,Z.bm])
b.e=t}t=o.a
t.ap(a)
s=o.r2
r=t.dy
r.a.uniform1f(r.d,s)
s=o.b
r=t.cy
r.toString
q=s.a
p=s.b
s=s.c
r.a.uniform3f(r.d,q,p,s)
s=a.db
s=s.gM(s)
p=t.fr
p.toString
p.a3(s.a_(0,!0))
s=a.gdK()
p=t.fx
p.toString
p.a3(s.a_(0,!0))
s=a.gdE()
t=t.fy
t.toString
t.a3(s.a_(0,!0))
t=b.e
if(t instanceof Z.cA){s=a.a
s.blendFunc(1,1)
if(b.c==null){s.disable(m)
s.enable(3042)
s.blendFunc(1,1)
s.enable(m)
s.blendFunc(770,771)}else{s.enable(m)
s.enable(3042)
s.blendFunc(770,771)
if(o.Q)o.cP(a,t,b.c,"shapeFill",o.gfu(),o.d,o.c)
s.disable(m)
s.blendFunc(1,1)
if(o.ch)o.cP(a,t,b.c,"wireFrame",o.gfG(),o.f,o.e)
s.enable(m)
s.blendFunc(770,771)}}else b.e=null
t=o.a
t.toString
a.a.useProgram(null)
t.x.da()},
cP:function(a,b,c,d,e,f,g){var u,t=b.a.h(0,d)
if(t==null){t=this.e9(a,e.$1(c))
b.a.l(0,d,t)}u=this.a
u.db.cl(f)
u.dx.cl(g)
t.he(a)},
e9:function(a,b){var u=this,t=$.am(),s=$.al(),r=b.d5(new Z.ds(a.a),new Z.aV(t.a|s.a|$.ak().a|$.bg().a))
r.ac($.am()).e=u.a.z.c
r.ac($.al()).e=u.a.Q.c
r.ac($.bg()).e=u.a.ch.c
r.ac($.ak()).e=u.a.cx.c
return r},
fv:function(a){var u=F.aj()
C.a.F(a.a.c,new O.f7(u,new V.N(1,1,1,1)))
C.a.F(a.d.b,new O.f8(u))
return u},
cW:function(a,b){var u,t={}
t.a=b
u=F.aj()
t.a=new V.N(0,0.7,1,1)
C.a.F(a.a.c,new O.fa(t,u))
t=new O.f9(u)
C.a.F(a.c.b,new O.fb(u,t))
C.a.F(a.d.b,new O.fc(u,t))
return u},
fH:function(a){return this.cW(a,null)}}
O.f7.prototype={
$1:function(a){var u=this.a.a,t=a.bV()
t.sU(0,this.b)
t.sbe(V.bB())
u.j(0,t)}}
O.f8.prototype={
$1:function(a){var u,t,s,r=this.a,q=r.a,p=a.a
p.a.a.p()
p=p.e
q=q.c
if(p>>>0!==p||p>=q.length)return H.c(q,p)
u=q[p]
p=r.a
q=a.b
q.a.a.p()
q=q.e
p=p.c
if(q>>>0!==q||q>=p.length)return H.c(p,q)
t=p[q]
q=r.a
p=a.c
p.a.a.p()
p=p.e
q=q.c
if(p>>>0!==p||p>=q.length)return H.c(q,p)
s=q[p]
r.d.cY(0,u,t,s)}}
O.fa.prototype={
$1:function(a){var u=this.b.a,t=a.bV()
t.sU(0,this.a.a)
t.sbe(V.bB())
u.j(0,t)}}
O.f9.prototype={
$2:function(a,b){if(a.h1(b)==null)this.a.c.bP(0,a,b)}}
O.fb.prototype={
$1:function(a){var u,t=this.a,s=t.a,r=a.a
r.a.a.p()
r=r.e
s=s.c
if(r>>>0!==r||r>=s.length)return H.c(s,r)
u=s[r]
t=t.a
r=a.b
r.a.a.p()
r=r.e
t=t.c
if(r>>>0!==r||r>=t.length)return H.c(t,r)
this.b.$2(u,t[r])}}
O.fc.prototype={
$1:function(a){var u,t,s,r=this.a,q=r.a,p=a.a
p.a.a.p()
p=p.e
q=q.c
if(p>>>0!==p||p>=q.length)return H.c(q,p)
u=q[p]
p=r.a
q=a.b
q.a.a.p()
q=q.e
p=p.c
if(q>>>0!==q||q>=p.length)return H.c(p,q)
t=p[q]
r=r.a
q=a.c
q.a.a.p()
q=q.e
r=r.c
if(q>>>0!==q||q>=r.length)return H.c(r,q)
s=r[q]
q=this.b
q.$2(u,t)
q.$2(t,s)
q.$2(s,u)}}
O.cW.prototype={
gt:function(){var u=this.fr
return u==null?this.fr=D.I():u},
W:function(a){var u=this.fr
if(u!=null)u.C(a)},
e1:function(){return this.W(null)},
cQ:function(a){this.a=null
this.W(a)},
fn:function(){return this.cQ(null)},
eu:function(a,b){var u=new D.b_()
u.b=!0
this.W(u)},
ew:function(a,b){var u=new D.b0()
u.b=!0
this.W(u)},
cF:function(){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=this,f=P.v
f=[f,f]
u=new H.G(f)
for(t=g.dx.e,s=t.length,r=0;r<t.length;t.length===s||(0,H.o)(t),++r){q=t[r]
p=q.gaa()
o=u.h(0,q.gaa())
u.l(0,p,o==null?1:o)}n=H.b([],[A.cx])
u.F(0,new O.fB(g,n))
C.a.aR(n,new O.fC())
m=new H.G(f)
for(t=g.dx.f,s=t.length,r=0;r<t.length;t.length===s||(0,H.o)(t),++r){q=t[r]
p=q.gaa()
o=m.h(0,q.gaa())
m.l(0,p,o==null?1:o)}l=H.b([],[A.cG])
m.F(0,new O.fD(g,l))
C.a.aR(l,new O.fE())
k=new H.G(f)
for(t=g.dx.r,s=t.length,r=0;r<t.length;t.length===s||(0,H.o)(t),++r){q=t[r]
p=q.gaa()
o=k.h(0,q.gaa())
k.l(0,p,o==null?1:o)}j=H.b([],[A.d4])
k.F(0,new O.fF(g,j))
C.a.aR(j,new O.fG())
i=new H.G(f)
for(f=g.dx.x,t=f.length,r=0;r<f.length;f.length===t||(0,H.o)(f),++r){q=f[r]
s=q.gaa()
p=i.h(0,q.gaa())
i.l(0,s,p==null?1:p)}h=H.b([],[A.d9])
i.F(0,new O.fH(g,h))
C.a.aR(h,new O.fI())
f=C.d.a9(g.e.a.length+3,4)
g.dy.e
return A.kZ(!1,!1,!1,!1,f*4,g.f.c,g.r.c,g.x.c,g.y.c,g.z.c,g.Q.c,g.cx.c,g.cy.c,g.db.c,n,l,j,h)},
e6:function(a,b){},
ab:function(a,b){var u
for(u=this.dx.a,u=new J.a_(u,u.length);u.v();)C.f.ab(u.d,b)},
dH:function(b2,b3){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0=this,b1=b0.a
if(b1==null){b1=b0.cF()
u=b2.fr.h(0,b1.b0)
if(u==null){u=A.kY(b1,b2.a)
b2.d_(u)}b1=b0.a=u
b3.e=null}t=b1.z
s=t.bk
b1=b3.e
if(!(b1 instanceof Z.bm))b1=b3.e=null
if(b1==null||!b1.d.q(0,s)){b1=t.k4
if(b1)b3.d.aq()
r=t.r1
if(r)b3.d.aK()
q=t.rx
if(q)b3.d.bf()
p=b3.d.d5(new Z.ds(b2.a),s)
p.ac($.am()).e=b0.a.Q.c
if(b1)p.ac($.al()).e=b0.a.cx.c
if(r)p.ac($.ak()).e=b0.a.ch.c
if(t.r2)p.ac($.bh()).e=b0.a.cy.c
if(q)p.ac($.bi()).e=b0.a.db.c
if(t.ry)p.ac($.aY()).e=b0.a.dx.c
b3.e=p}o=H.b([],[T.hy])
b0.a.ap(b2)
if(t.fr){b1=b0.a
r=b2.dx
r=r.gM(r)
b1=b1.dy
b1.toString
b1.a3(r.a_(0,!0))}if(t.fx){b1=b0.a
r=b2.gdK()
b1=b1.fr
b1.toString
b1.a3(r.a_(0,!0))}b1=b0.a
r=b2.gdE()
b1=b1.fy
b1.toString
b1.a3(r.a_(0,!0))
if(t.go){b1=b0.a
r=b2.db
r=r.gM(r)
b1=b1.fx
b1.toString
b1.a3(r.a_(0,!0))}if(t.x1){b1=b0.a
r=b0.b
b1=b1.k1
b1.toString
b1.a3(C.f.a_(r,!0))}if(t.x2){b1=b0.a
r=b0.c
b1=b1.k2
b1.toString
b1.a3(C.f.a_(r,!0))}if(t.y1){b1=b0.a
r=b0.d
b1=b1.k3
b1.toString
b1.a3(C.f.a_(r,!0))}if(t.bj>0){n=b0.e.a.length
b1=b0.a.k4
b1.a.uniform1i(b1.d,n)
for(m=0;m<n;++m){b1=b0.a
r=b0.e.a
if(m>=r.length)return H.c(r,m)
r=r[m]
b1=b1.r1
if(m>=b1.length)return H.c(b1,m)
b1=b1[m]
l=new Float32Array(H.cn(r.a_(0,!0)))
b1.a.uniformMatrix4fv(b1.d,!1,l)}}if(t.a.a){b1=b0.a
r=b0.f.f
b1=b1.r2
b1.a.uniform3f(b1.d,r.a,r.b,r.c)}if(t.k1){if(t.b.a){b1=b0.a
r=b0.r.f
b1=b1.x1
b1.a.uniform3f(b1.d,r.a,r.b,r.c)}if(t.c.a){b1=b0.a
r=b0.x.f
b1=b1.y2
b1.a.uniform3f(b1.d,r.a,r.b,r.c)}if(t.d.a){b1=b0.a
r=b0.y.f
b1=b1.bk
b1.a.uniform3f(b1.d,r.a,r.b,r.c)}b1=t.e.a
if(!b1)r=!1
else r=!0
if(r){r=b0.a
q=b0.z.ch
r=r.de
r.a.uniform1f(r.d,q)}if(b1){b1=b0.a
r=b0.z.f
b1=b1.dd
b1.a.uniform3f(b1.d,r.a,r.b,r.c)}b1=t.z
if(b1.length>0){r=P.v
k=new H.G([r,r])
for(r=b0.dx.e,q=r.length,j=0;j<r.length;r.length===q||(0,H.o)(r),++j){i=r[j]
h=i.gaa()
g=k.h(0,h)
if(g==null)g=0
k.l(0,h,g+1)
f=J.cu(b0.a.bZ.h(0,h),g)
e=i.ghA()
d=$.au
e=e.b6(d==null?$.au=new V.M(0,0,0):d)
d=f.b
d.a.uniform3f(d.d,e.a,e.b,e.c)
e=i.ghE()
d=$.au
e=e.b6(d==null?$.au=new V.M(0,0,0):d)
d=f.c
d.a.uniform3f(d.d,e.a,e.b,e.c)
e=i.gU(i)
d=f.d
d.a.uniform3f(d.d,e.a,e.b,e.c)
if(i.gdc()){e=i.gd1()
d=f.e
d.a.uniform1f(d.d,e)
e=i.gd2()
d=f.f
d.a.uniform1f(d.d,e)
e=i.gd3()
d=f.r
d.a.uniform1f(d.d,e)}}for(r=b1.length,j=0;j<b1.length;b1.length===r||(0,H.o)(b1),++j){q=b1[j].a
n=k.h(0,q)
if(n==null)n=0
q=b0.a.bY.h(0,q)
q.a.uniform1i(q.d,n)}}b1=t.Q
if(b1.length>0){r=b2.db
c=r.gM(r)
r=P.v
b=new H.G([r,r])
for(r=b0.dx.f,q=r.length,j=0;j<r.length;r.length===q||(0,H.o)(r),++j){i=r[j]
h=i.gaa()
g=b.h(0,h)
if(g==null)g=0
b.l(0,h,g+1)
f=J.cu(b0.a.c0.h(0,h),g)
e=i.gd9(i)
d=C.b.n(c.a,e.gbg(e))+C.b.n(c.b,e.gbh(e))+C.b.n(c.c,e.gbi())
a=C.b.n(c.e,e.gbg(e))+C.b.n(c.f,e.gbh(e))+C.b.n(c.r,e.gbi())
e=C.b.n(c.y,e.gbg(e))+C.b.n(c.z,e.gbh(e))+C.b.n(c.Q,e.gbi())
e=new V.u(d,a,e).m(0,Math.sqrt(d*d+a*a+e*e))
a=f.e
d=e.a
a0=e.b
e=e.c
a.a.uniform3f(a.d,d,a0,e)
e=i.gU(i)
a0=f.f
a0.a.uniform3f(a0.d,e.a,e.b,e.c)
i.gaf()
e=i.gd9(i)
d=f.d
d.a.uniform3f(d.d,e.a,e.b,e.c)
e=i.gaB()
d=f.b
d.a.uniform3f(d.d,e.a,e.b,e.c)
e=i.gbn(i)
d=f.c
d.a.uniform3f(d.d,e.a,e.b,e.c)
e=i.gaf()
if(!C.a.Z(o,e)){e.saj(0,o.length)
o.push(e)}e=i.gaf()
d=e.gak(e)
if(d){d=f.r
d.toString
a=e.gak(e)
if(!a)d.a.uniform1i(d.d,0)
else{e=e.gaj(e)
d.a.uniform1i(d.d,e)}}}for(r=b1.length,j=0;j<b1.length;b1.length===r||(0,H.o)(b1),++j){q=b1[j].a
n=b.h(0,q)
if(n==null)n=0
q=b0.a.c_.h(0,q)
q.a.uniform1i(q.d,n)}}b1=t.ch
if(b1.length>0){r=b2.db
c=r.gM(r)
r=P.v
a1=new H.G([r,r])
for(r=b0.dx.r,q=r.length,j=0;j<r.length;r.length===q||(0,H.o)(r),++j){i=r[j]
h=i.gaa()
g=a1.h(0,h)
if(g==null)g=0
a1.l(0,h,g+1)
f=J.cu(b0.a.c2.h(0,h),g)
a2=c.n(0,i.gM(i))
e=i.gM(i)
d=$.au
e=e.b6(d==null?$.au=new V.M(0,0,0):d)
d=f.b
d.a.uniform3f(d.d,e.a,e.b,e.c)
e=$.au
e=a2.b6(e==null?$.au=new V.M(0,0,0):e)
d=f.c
d.a.uniform3f(d.d,e.a,e.b,e.c)
e=i.gU(i)
d=f.e
d.a.uniform3f(d.d,e.a,e.b,e.c)
i.gaf()
e=a2.dq(0)
d=e.a
a=e.b
a0=e.c
a3=e.e
a4=e.f
a5=e.r
a6=e.y
a7=e.z
e=e.Q
a8=f.d
a8.toString
l=new Float32Array(H.cn(new V.cY(d,a,a0,a3,a4,a5,a6,a7,e).a_(0,!0)))
a8.a.uniformMatrix3fv(a8.d,!1,l)
i.gaf()
e=i.gaf()
if(!C.a.Z(o,e)){e.saj(0,o.length)
o.push(e)}e=i.gaf()
d=e.gak(e)
if(d){d=f.f
d.toString
a=e.gak(e)
if(!a)d.a.uniform1i(d.d,0)
else{e=e.gaj(e)
d.a.uniform1i(d.d,e)}}i.gaQ()
e=i.gdP()
d=f.x
d.toString
a=e.gbg(e)
a0=e.gbh(e)
a3=e.gbi()
e=e.gfX()
d.a.uniform4f(d.d,a,a0,a3,e)
e=i.gaQ()
if(!C.a.Z(o,e)){e.saj(0,o.length)
o.push(e)}e=i.gaQ()
d=e.gak(e)
if(d){d=f.r
d.toString
a=e.gak(e)
if(!a)d.a.uniform1i(d.d,0)
else{e=e.gaj(e)
d.a.uniform1i(d.d,e)}}if(i.gdc()){e=i.gd1()
d=f.y
d.a.uniform1f(d.d,e)
e=i.gd2()
d=f.z
d.a.uniform1f(d.d,e)
e=i.gd3()
d=f.Q
d.a.uniform1f(d.d,e)}}for(r=b1.length,j=0;j<b1.length;b1.length===r||(0,H.o)(b1),++j){q=b1[j].a
n=a1.h(0,q)
if(n==null)n=0
q=b0.a.c1.h(0,q)
q.a.uniform1i(q.d,n)}}b1=t.cx
if(b1.length>0){r=b2.db
c=r.gM(r)
r=P.v
a9=new H.G([r,r])
for(r=b0.dx.x,q=r.length,j=0;j<r.length;r.length===q||(0,H.o)(r),++j){i=r[j]
h=i.gaa()
g=a9.h(0,h)
if(g==null)g=0
a9.l(0,h,g+1)
f=J.cu(b0.a.c4.h(0,h),g)
e=i.ghm(i)
d=f.b
d.a.uniform3f(d.d,e.a,e.b,e.c)
e=i.gd9(i).hU()
d=f.c
d.a.uniform3f(d.d,e.a,e.b,e.c)
e=c.b6(i.ghm(i))
d=f.d
d.a.uniform3f(d.d,e.a,e.b,e.c)
e=i.gU(i)
d=f.e
d.a.uniform3f(d.d,e.a,e.b,e.c)
i.gaf()
e=i.gaB()
d=f.f
d.a.uniform3f(d.d,e.a,e.b,e.c)
e=i.gbn(i)
d=f.r
d.a.uniform3f(d.d,e.a,e.b,e.c)
e=i.ghV()
d=f.x
d.a.uniform1f(d.d,e)
e=i.ghW()
d=f.y
d.a.uniform1f(d.d,e)
i.gaf()
e=i.gaf()
if(!C.a.Z(o,e)){e.saj(0,o.length)
o.push(e)}e=i.gaf()
d=e.gak(e)
if(d){d=f.dx
d.toString
a=e.gak(e)
if(!a)d.a.uniform1i(d.d,0)
else{e=e.gaj(e)
d.a.uniform1i(d.d,e)}}i.gaQ()
e=i.gdP()
d=f.z
d.toString
a=e.gbg(e)
a0=e.gbh(e)
a3=e.gbi()
e=e.gfX()
d.a.uniform4f(d.d,a,a0,a3,e)
e=i.gaQ()
if(!C.a.Z(o,e)){e.saj(0,o.length)
o.push(e)}e=i.gaQ()
d=e.gak(e)
if(d){d=f.dy
d.toString
a=e.gak(e)
if(!a)d.a.uniform1i(d.d,0)
else{e=e.gaj(e)
d.a.uniform1i(d.d,e)}}if(i.ghD()){e=i.ghC()
d=f.Q
d.a.uniform1f(d.d,e)
e=i.ghB()
d=f.ch
d.a.uniform1f(d.d,e)}if(i.gdc()){e=i.gd1()
d=f.cx
d.a.uniform1f(d.d,e)
e=i.gd2()
d=f.cy
d.a.uniform1f(d.d,e)
e=i.gd3()
d=f.db
d.a.uniform1f(d.d,e)}}for(r=b1.length,j=0;j<b1.length;b1.length===r||(0,H.o)(b1),++j){q=b1[j].a
n=a9.h(0,q)
if(n==null)n=0
q=b0.a.c3.h(0,q)
q.a.uniform1i(q.d,n)}}}if(t.dy){b1=b0.a
r=b2.Q
if(r==null){r=b2.db
r=b2.Q=r.gM(r).dq(0)}b1=b1.id
b1.toString
b1.a3(r.a_(0,!0))}if(t.db){b0.e6(o,b0.ch)
b1=b0.a
r=b0.ch
b1.fo(b1.df,r)
if(t.r.a){b1=b0.a
r=b0.cx.f
b1=b1.dg
b1.a.uniform3f(b1.d,r.a,r.b,r.c)}b1=t.x.a
if(!b1)r=!1
else r=!0
if(r){r=b0.a
q=b0.cy.ch
r=r.dh
r.a.uniform1f(r.d,q)}if(b1){b1=b0.a
r=b0.cy.f
b1=b1.di
b1.a.uniform3f(b1.d,r.a,r.b,r.c)}}b1=t.y.a
r=!b1
if(r)q=!1
else q=!0
if(q){if(b1){b1=b0.a
q=b0.db.f
b1=b1.dj
b1.a.uniform1f(b1.d,q)}b1=b2.a
b1.enable(3042)
b1.blendFunc(770,771)}for(m=0;m<o.length;++m)o[m].ap(b2)
b1=H.k(b3.e,"$ibm")
b1.ap(b2)
b1.am(b2)
b1.cj(b2)
if(r)b1=!1
else b1=!0
if(b1)b2.a.disable(3042)
for(m=0;m<o.length;++m)o[m].cj(b2)
b1=b0.a
b1.toString
b2.a.useProgram(null)
b1.x.da()},
i:function(a){var u=this.a
if(u!=null)return u.b
else return this.cF().b0}}
O.fB.prototype={
$2:function(a,b){if(typeof b!=="number")return b.w()
return this.b.push(new A.cx(a,C.d.a9(b+3,4)*4))}}
O.fC.prototype={
$2:function(a,b){return J.cv(a.a,b.a)}}
O.fD.prototype={
$2:function(a,b){if(typeof b!=="number")return b.w()
return this.b.push(new A.cG(a,C.d.a9(b+3,4)*4))}}
O.fE.prototype={
$2:function(a,b){return J.cv(a.a,b.a)}}
O.fF.prototype={
$2:function(a,b){if(typeof b!=="number")return b.w()
return this.b.push(new A.d4(a,C.d.a9(b+3,4)*4))}}
O.fG.prototype={
$2:function(a,b){return J.cv(a.a,b.a)}}
O.fH.prototype={
$2:function(a,b){if(typeof b!=="number")return b.w()
return this.b.push(new A.d9(a,C.d.a9(b+3,4)*4))}}
O.fI.prototype={
$2:function(a,b){return J.cv(a.a,b.a)}}
O.fv.prototype={
bL:function(a){var u=this,t=u.f
if(!(Math.abs(t-a)<$.A().a)){u.f=a
t=new D.z(u.b,t,a)
t.b=!0
u.a.W(t)}},
au:function(){this.cs()
this.bL(1)},
sa0:function(a,b){var u=this
if(b<=0){u.bM(new A.T(!1,!1,!1))
u.bL(0)}else{u.bM(new A.T(!0,!1,!1))
u.bL(b>=1?1:b)}}}
O.cX.prototype={
au:function(){},
bM:function(a){var u,t,s=this
if(!s.c.q(0,a)){if(!s.c.a)u=!1
else u=!0
if(u){if(!a.a)u=!1
else u=!0
t=!u}else t=!0
s.c=a
if(t)s.au()
u=s.a
u.a=null
u.W(null)}}}
O.fw.prototype={}
O.ar.prototype={
cS:function(a){var u,t,s=this
if(!s.f.q(0,a)){u=s.f
s.f=a
t=new D.z(s.b+".color",u,a)
t.b=!0
s.a.W(t)}},
au:function(){this.cs()
this.cS(new V.S(1,1,1))},
sU:function(a,b){this.bM(new A.T(!0,!1,!1))
this.cS(b)}}
O.fy.prototype={}
O.fz.prototype={
au:function(){var u,t=this
t.ct()
u=t.ch
if(!(Math.abs(u-1)<$.A().a)){t.ch=1
u=new D.z(t.b+".refraction",u,1)
u.b=!0
t.a.W(u)}}}
O.fA.prototype={
au:function(){var u,t=this
t.ct()
u=t.ch
if(!(Math.abs(u-100)<$.A().a)){t.ch=100
u=new D.z(t.b+".shininess",u,100)
u.b=!0
t.a.W(u)}}}
O.dd.prototype={}
T.hy.prototype={}
X.j4.prototype={}
X.f2.prototype={
gt:function(){var u=this.x
return u==null?this.x=D.I():u}}
X.d3.prototype={
gt:function(){var u=this.f
return u==null?this.f=D.I():u},
as:function(a){var u=this.f
if(u!=null)u.C(a)},
e3:function(){return this.as(null)},
sT:function(a){var u,t,s=this
if(!J.w(s.b,a)){u=s.b
if(u!=null)u.gt().B(0,s.gb8())
t=s.b
s.b=a
if(a!=null)a.gt().j(0,s.gb8())
u=new D.z("mover",t,s.b)
u.b=!0
s.as(u)}},
saA:function(a){var u,t,s=this
if(!J.w(s.a,a)){u=s.a
if(u!=null)u.gt().B(0,s.gb8())
t=s.a
s.a=a
if(a!=null)a.gt().j(0,s.gb8())
u=new D.z("premover",t,s.a)
u.b=!0
s.as(u)}}}
X.hu.prototype={}
V.hg.prototype={
dY:function(a,b){var u,t,s,r,q=document,p=q.body,o=q.createElement("div")
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
W.Z(q,"scroll",new V.hi(o),!1)},
bQ:function(a,b){var u,t,s,r,q
a=C.d.fQ(a,0,4)
u=P.k3(C.n,b,C.h,!1)
t=document.createElement("div")
t.className="textHeader"
t.id=u
s=t.style
r=""+(28-a*3)+"px"
s.fontSize=r
q=W.kG()
q.href="#"+u
q.textContent=b
t.appendChild(q)
this.a.appendChild(t)},
ah:function(a){var u,t,s,r,q,p,o,n
this.fs()
u=document
t=u.createElement("div")
t.className="textPar"
for(s=this.b,r=C.a.h3(a),s.toString,r=new H.R(r),r=new P.cj(s.dJ(new H.bV(r,r.gk(r))).a());r.v();){s=r.gH(r)
switch(s.a){case"Bold":q=u.createElement("div")
q.className="boldPar"
q.textContent=s.b
t.appendChild(q)
break
case"Italic":q=u.createElement("div")
q.className="italicPar"
q.textContent=s.b
t.appendChild(q)
break
case"Code":q=u.createElement("div")
q.className="codePar"
q.textContent=s.b
t.appendChild(q)
break
case"Link":s=s.b
if(H.mn(s,"|",0)){p=s.split("|")
o=u.createElement("a")
o.className="linkPar"
if(1>=p.length)return H.c(p,1)
o.href=p[1]
o.textContent=p[0]
t.appendChild(o)}else{n=P.k3(C.n,s,C.h,!1)
o=u.createElement("a")
o.className="linkPar"
o.href="#"+n
o.textContent=s
t.appendChild(o)}break
case"Other":q=u.createElement("div")
q.className="normalPar"
q.textContent=s.b
t.appendChild(q)
break}}this.a.appendChild(t)},
bR:function(a){var u=W.jC()
u.className="pageLargeCanvas"
u.id=a
this.a.appendChild(u)},
fs:function(){var u,t,s,r,q="Start",p="Bold",o="Italic",n="ItalicEnd",m="Code",l="LinkHead",k="LinkTail",j="LinkEnd",i="Other"
if(this.b!=null)return
u=new L.hB()
t=P.t
u.a=new H.G([t,L.db])
u.b=new H.G([t,L.dg])
u.c=P.jH(t)
u.d=u.K(0,q)
t=u.K(0,q).u(0,p)
s=K.X(new H.R("*"))
t.a.push(s)
t.c=!0
t=u.K(0,p).u(0,p)
s=new K.aL()
r=[K.cV]
s.a=H.b([],r)
t.a.push(s)
t=K.X(new H.R("*"))
s.a.push(t)
t=u.K(0,p).u(0,"BoldEnd")
s=K.X(new H.R("*"))
t.a.push(s)
t.c=!0
t=u.K(0,q).u(0,o)
s=K.X(new H.R("_"))
t.a.push(s)
t.c=!0
t=u.K(0,o).u(0,o)
s=new K.aL()
s.a=H.b([],r)
t.a.push(s)
t=K.X(new H.R("_"))
s.a.push(t)
t=u.K(0,o).u(0,n)
s=K.X(new H.R("_"))
t.a.push(s)
t.c=!0
t=u.K(0,q).u(0,m)
s=K.X(new H.R("`"))
t.a.push(s)
t.c=!0
t=u.K(0,m).u(0,m)
s=new K.aL()
s.a=H.b([],r)
t.a.push(s)
t=K.X(new H.R("`"))
s.a.push(t)
t=u.K(0,m).u(0,"CodeEnd")
s=K.X(new H.R("`"))
t.a.push(s)
t.c=!0
t=u.K(0,q).u(0,l)
s=K.X(new H.R("["))
t.a.push(s)
t.c=!0
t=u.K(0,l).u(0,k)
s=K.X(new H.R("|"))
t.a.push(s)
s=u.K(0,l).u(0,j)
t=K.X(new H.R("]"))
s.a.push(t)
s.c=!0
s=u.K(0,l).u(0,l)
t=new K.aL()
t.a=H.b([],r)
s.a.push(t)
s=K.X(new H.R("|]"))
t.a.push(s)
s=u.K(0,k).u(0,j)
t=K.X(new H.R("]"))
s.a.push(t)
s.c=!0
s=u.K(0,k).u(0,k)
t=new K.aL()
t.a=H.b([],r)
s.a.push(t)
s=K.X(new H.R("|]"))
t.a.push(s)
u.K(0,q).u(0,i).a.push(new K.en())
s=u.K(0,i).u(0,i)
t=new K.aL()
t.a=H.b([],r)
s.a.push(t)
s=K.X(new H.R("*_`["))
t.a.push(s)
s=u.K(0,"BoldEnd")
s.d=s.a.b5(p)
s=u.K(0,n)
s.d=s.a.b5(o)
s=u.K(0,"CodeEnd")
s.d=s.a.b5(m)
s=u.K(0,j)
s.d=s.a.b5("Link")
s=u.K(0,i)
s.d=s.a.b5(i)
this.b=u}}
V.hi.prototype={
$1:function(a){P.jU(C.j,new V.hh(this.a))}}
V.hh.prototype={
$0:function(){var u=C.b.an(document.documentElement.scrollTop),t=this.a.style,s=H.f(-0.01*u)+"px"
t.top=s}}
M.iR.prototype={
$1:function(a){this.a.b=!0}}
M.iS.prototype={
$1:function(a){this.a.b=!1}}
M.iT.prototype={
$1:function(a){var u,t,s,r,q,p,o=this
H.k(a,"$iae")
u=o.a
if(!u.b)return
t=u.a
s=a.c
r=a.d.E(0,a.z)
s=new V.C(r.a,r.b).n(0,2).m(0,s.gY()).b
if(typeof s!=="number")return H.r(s)
q=u.a=t+s
if(q<-0.1)q=-0.1
else if(q>1.1)q=1.1
u.a=q
o.b.sM(0,V.W(0,1-2*q,0))
u=u.a
t=u<=0||u>=1
s=o.c
r=o.d
if(t)r.b=s.b=!1
else{p=Math.sin(u*3.141592653589793)
o.e.sM(0,V.bu(p,p,p,1))
r.b=s.b=!0}}}
M.iU.prototype={
$1:function(a){this.a.b=!0}}
M.iV.prototype={
$1:function(a){this.a.b=!1}}
M.iW.prototype={
$1:function(a){var u,t,s,r,q,p,o=this
H.k(a,"$iae")
u=o.a
if(!u.b)return
t=u.a
s=a.c
r=a.d.E(0,a.z)
s=new V.C(r.a,r.b).n(0,2).m(0,s.gY()).b
if(typeof s!=="number")return H.r(s)
q=u.a=t+s
if(q<-0.1)q=-0.1
else if(q>1.1)q=1.1
u.a=q
o.b.sM(0,V.W(0,1-2*q,0))
u=u.a
t=u<=0||u>=1
s=o.c
r=o.d
if(t)r.b=s.b=!1
else{p=Math.sin(u*3.141592653589793)
o.e.sM(0,V.bu(p,p,p,1))
r.b=s.b=!0}}}
M.iX.prototype={
$1:function(a){this.a.b=!0}}
M.iY.prototype={
$1:function(a){this.a.b=!1}}
M.iZ.prototype={
$1:function(a){var u,t,s,r,q,p,o=this
H.k(a,"$iae")
u=o.a
if(!u.b)return
t=a.c
s=a.d
if(new V.P((s.a-t.a-t.c*0.5)*2,(s.b-t.b-t.d*0.5)*2).m(0,t.gY()).a>0)return
r=u.a
s=s.E(0,a.z)
t=new V.C(s.a,s.b).n(0,2).m(0,t.gY()).b
if(typeof t!=="number")return H.r(t)
q=u.a=r+t
if(q<-0.1)q=-0.1
else if(q>1.1)q=1.1
u.a=q
o.b.sM(0,V.W(0,1-2*q,0))
u=u.a
t=u<=0||u>=1
s=o.c
r=o.d
if(t)r.b=s.b=!1
else{p=Math.sin(u*3.141592653589793)
o.e.sM(0,V.bu(p,p,p,1))
r.b=s.b=!0}a.b=!1}};(function aliases(){var u=J.a.prototype
u.dT=u.i
u=J.cQ.prototype
u.dU=u.i
u=K.cM.prototype
u.dS=u.aM
u.cr=u.i
u=O.cX.prototype
u.cs=u.au
u=O.ar.prototype
u.ct=u.au})();(function installTearOffs(){var u=hunkHelpers._static_2,t=hunkHelpers._static_1,s=hunkHelpers._static_0,r=hunkHelpers.installInstanceTearOff,q=hunkHelpers._instance_2u,p=hunkHelpers._instance_0u,o=hunkHelpers._instance_1u,n=hunkHelpers._instance_0i
u(J,"lu","kS",21)
t(P,"lZ","lk",7)
t(P,"m_","ll",7)
t(P,"m0","lm",7)
s(P,"k8","lX",10)
var m
r(m=E.aE.prototype,"gdz",0,0,null,["$1","$0"],["dA","hc"],0,0)
r(m,"gdB",0,0,null,["$1","$0"],["dC","hd"],0,0)
r(m,"gdv",0,0,null,["$1","$0"],["dw","hb"],0,0)
r(m,"gdt",0,0,null,["$1","$0"],["du","h8"],0,0)
q(m,"gh6","h7",3)
q(m,"gh9","ha",3)
r(m=E.de.prototype,"gcv",0,0,null,["$1","$0"],["cz","cw"],0,0)
p(m,"ghr","dI",10)
o(m=X.dl.prototype,"geJ","eK",4)
o(m,"gex","ey",4)
o(m,"geD","eE",2)
o(m,"geN","eO",11)
o(m,"geL","eM",11)
o(m,"geR","eS",2)
o(m,"geV","eW",2)
o(m,"geH","eI",2)
o(m,"geT","eU",2)
o(m,"geF","eG",2)
o(m,"geX","eY",17)
o(m,"geZ","f_",4)
o(m,"gfe","ff",5)
o(m,"gfa","fb",5)
o(m,"gfc","fd",5)
r(m=D.cS.prototype,"gcM",0,0,null,["$1","$0"],["cN","eP"],0,0)
o(m,"gf0","f1",18)
q(m,"geq","er",12)
q(m,"gf4","f5",12)
n(V.C.prototype,"gk","b1",6)
n(V.u.prototype,"gk","b1",6)
n(V.aU.prototype,"gk","b1",6)
r(m=U.bS.prototype,"gaH",0,0,null,["$1","$0"],["L","a5"],0,0)
q(m,"gdZ","e_",13)
q(m,"gf2","f3",13)
r(m=U.dm.prototype,"gaH",0,0,null,["$1","$0"],["L","a5"],0,0)
o(m,"gbA","bB",1)
o(m,"gbC","bD",1)
o(m,"gbE","bF",1)
r(m=U.dn.prototype,"gaH",0,0,null,["$1","$0"],["L","a5"],0,0)
o(m,"gbA","bB",1)
o(m,"gbC","bD",1)
o(m,"gbE","bF",1)
o(m,"gek","el",1)
o(m,"gem","en",1)
o(m,"gfE","fF",1)
o(m,"gfC","fD",1)
o(m,"gfA","fB",1)
o(U.dp.prototype,"geo","ep",1)
r(m=M.cD.prototype,"ga8",0,0,null,["$1","$0"],["a4","br"],0,0)
q(m,"gf6","f7",14)
q(m,"gf8","f9",14)
r(m=M.cJ.prototype,"ga8",0,0,null,["$1","$0"],["a4","br"],0,0)
q(m,"gez","eA",3)
q(m,"geB","eC",3)
o(m=O.cN.prototype,"gfu","fv",19)
r(m,"gfG",0,1,null,["$2$color","$1"],["cW","fH"],20,0)
r(m=O.cW.prototype,"ge0",0,0,null,["$1","$0"],["W","e1"],0,0)
r(m,"gfm",0,0,null,["$1","$0"],["cQ","fn"],0,0)
q(m,"ges","eu",15)
q(m,"gev","ew",15)
r(X.d3.prototype,"gb8",0,0,null,["$1","$0"],["as","e3"],0,0)})();(function inheritance(){var u=hunkHelpers.mixin,t=hunkHelpers.inherit,s=hunkHelpers.inheritMany
t(P.a3,null)
s(P.a3,[H.jd,J.a,J.a_,P.dJ,P.j,H.bV,P.fe,H.cK,H.hS,H.hG,P.bo,H.bK,H.e_,P.a2,H.fn,H.fo,H.fh,P.iy,P.bC,P.cj,P.dt,P.dc,P.hs,P.iB,P.iu,P.ip,P.dI,P.q,P.eA,P.iA,P.be,P.ap,P.a9,P.bO,P.fZ,P.da,P.dB,P.f1,P.b4,P.bW,P.b5,P.t,P.aR,W.eF,W.K,W.cL,P.iq,K.en,K.cM,K.cV,K.hc,L.db,L.df,L.dg,L.hB,O.aD,O.bY,E.ew,E.aE,E.h4,E.de,Z.dr,Z.ds,Z.bm,Z.cA,Z.bp,Z.aV,D.ez,D.bQ,D.V,X.cB,X.cR,X.fk,X.fr,X.ad,X.fP,X.hC,X.dl,D.ev,D.eK,D.a1,D.h1,D.hm,V.S,V.N,V.eS,V.cY,V.aJ,V.P,V.M,V.af,V.d6,V.C,V.u,V.aU,U.dm,U.dn,U.dp,M.cJ,M.a8,A.cw,A.eq,A.T,A.cx,A.cG,A.d4,A.d9,A.fx,A.c6,A.c7,A.c9,A.ca,A.dj,A.hO,F.aF,F.eV,F.aI,F.fm,F.c3,F.ag,F.hd,F.he,F.hf,F.ay,F.hX,F.hY,F.i1,F.i2,F.i3,F.i4,O.dd,O.cX,O.fy,X.j4,X.hu,X.d3,V.hg])
s(J.a,[J.ff,J.cP,J.cQ,J.b1,J.bU,J.bq,H.c2,W.e,W.em,W.cy,W.ao,W.H,W.dv,W.ab,W.eJ,W.eL,W.dx,W.cI,W.dz,W.eN,W.h,W.dC,W.aH,W.f4,W.dE,W.fq,W.fJ,W.dK,W.dL,W.aK,W.dM,W.dP,W.aM,W.dT,W.dV,W.aP,W.dW,W.aQ,W.e0,W.av,W.e3,W.hA,W.aT,W.e5,W.hE,W.hU,W.e9,W.eb,W.ed,W.ef,W.eh,P.b3,P.dG,P.b6,P.dR,P.h3,P.e1,P.b7,P.e7,P.er,P.du,P.dY])
s(J.cQ,[J.h_,J.cb,J.b2])
t(J.jc,J.b1)
s(J.bU,[J.cO,J.fg])
t(P.fp,P.dJ)
s(P.fp,[H.dk,W.ig,W.ie,P.eY])
t(H.R,H.dk)
s(P.j,[H.p,H.bX,H.i8,P.fd])
t(H.eQ,H.bX)
s(P.fe,[H.cU,H.i9])
s(P.bo,[H.fW,H.fj,H.hR,H.ey,H.ha,P.d2,P.aC,P.hT,P.hQ,P.ho,P.eC,P.eI])
s(H.bK,[H.j0,H.hv,H.fi,H.iL,H.iM,H.iN,P.ib,P.ia,P.ic,P.id,P.iz,P.iG,P.is,P.it,P.ft,P.eO,P.eP,W.fL,W.fN,W.h9,W.hr,W.ij,P.iH,P.eZ,P.f_,P.et,E.h5,E.h6,E.h7,E.hz,D.eT,D.eU,F.iC,F.iI,F.i6,F.i5,F.hZ,F.i_,O.f7,O.f8,O.fa,O.f9,O.fb,O.fc,O.fB,O.fC,O.fD,O.fE,O.fF,O.fG,O.fH,O.fI,V.hi,V.hh,M.iR,M.iS,M.iT,M.iU,M.iV,M.iW,M.iX,M.iY,M.iZ])
s(H.hv,[H.hp,H.bI])
t(P.fs,P.a2)
t(H.G,P.fs)
t(H.bs,H.p)
t(H.cZ,H.c2)
s(H.cZ,[H.cd,H.cf])
t(H.ce,H.cd)
t(H.c1,H.ce)
t(H.cg,H.cf)
t(H.d_,H.cg)
s(H.d_,[H.fQ,H.fR,H.fS,H.fT,H.fU,H.d0,H.fV])
t(P.ix,P.fd)
t(P.ir,P.iB)
t(P.io,P.iu)
t(P.eD,P.hs)
t(P.eR,P.eA)
t(P.hV,P.eR)
t(P.hW,P.eD)
s(P.a9,[P.J,P.v])
s(P.aC,[P.bx,P.f5])
s(W.e,[W.F,W.eX,W.aO,W.ch,W.aS,W.aw,W.ck,W.i7,W.cc,P.eu,P.bl])
s(W.F,[W.U,W.aZ])
s(W.U,[W.m,P.l])
s(W.m,[W.eo,W.ep,W.bn,W.f0,W.hb])
t(W.eE,W.ao)
t(W.bN,W.dv)
s(W.ab,[W.eG,W.eH])
t(W.dy,W.dx)
t(W.cH,W.dy)
t(W.dA,W.dz)
t(W.eM,W.dA)
t(W.aG,W.cy)
t(W.dD,W.dC)
t(W.eW,W.dD)
t(W.dF,W.dE)
t(W.bT,W.dF)
t(W.b8,W.h)
s(W.b8,[W.br,W.at,W.by])
t(W.fK,W.dK)
t(W.fM,W.dL)
t(W.dN,W.dM)
t(W.fO,W.dN)
t(W.dQ,W.dP)
t(W.d1,W.dQ)
t(W.dU,W.dT)
t(W.h0,W.dU)
t(W.h8,W.dV)
t(W.ci,W.ch)
t(W.hk,W.ci)
t(W.dX,W.dW)
t(W.hl,W.dX)
t(W.hq,W.e0)
t(W.e4,W.e3)
t(W.hw,W.e4)
t(W.cl,W.ck)
t(W.hx,W.cl)
t(W.e6,W.e5)
t(W.hD,W.e6)
t(W.bc,W.at)
t(W.ea,W.e9)
t(W.ih,W.ea)
t(W.dw,W.cI)
t(W.ec,W.eb)
t(W.ik,W.ec)
t(W.ee,W.ed)
t(W.dO,W.ee)
t(W.eg,W.ef)
t(W.iv,W.eg)
t(W.ei,W.eh)
t(W.iw,W.ei)
t(W.ii,P.dc)
t(P.a7,P.iq)
t(P.dH,P.dG)
t(P.fl,P.dH)
t(P.dS,P.dR)
t(P.fX,P.dS)
t(P.e2,P.e1)
t(P.ht,P.e2)
t(P.e8,P.e7)
t(P.hF,P.e8)
t(P.es,P.du)
t(P.fY,P.bl)
t(P.dZ,P.dY)
t(P.hn,P.dZ)
s(K.cM,[K.aL,L.di])
s(E.ew,[Z.cz,A.d7,T.hy])
s(D.V,[D.b_,D.b0,D.z,X.h2])
s(X.h2,[X.cT,X.ae,X.c0,X.dh])
s(O.aD,[D.cS,U.bS,M.cD])
s(D.ez,[U.eB,U.a6])
t(U.cE,U.a6)
s(A.d7,[A.f6,A.fu])
s(A.dj,[A.b9,A.hL,A.hM,A.hN,A.hJ,A.Q,A.hK,A.E,A.ba,A.hP,A.c8,A.Y,A.bz,A.bA])
t(F.hj,F.eV)
t(F.hI,F.fm)
t(F.dq,F.i2)
t(F.i0,F.i3)
s(O.dd,[O.cN,O.cW])
s(O.cX,[O.fv,O.fw,O.ar])
s(O.ar,[O.fz,O.fA])
t(X.f2,X.hu)
u(H.dk,H.hS)
u(H.cd,P.q)
u(H.ce,H.cK)
u(H.cf,P.q)
u(H.cg,H.cK)
u(P.dJ,P.q)
u(W.dv,W.eF)
u(W.dx,P.q)
u(W.dy,W.K)
u(W.dz,P.q)
u(W.dA,W.K)
u(W.dC,P.q)
u(W.dD,W.K)
u(W.dE,P.q)
u(W.dF,W.K)
u(W.dK,P.a2)
u(W.dL,P.a2)
u(W.dM,P.q)
u(W.dN,W.K)
u(W.dP,P.q)
u(W.dQ,W.K)
u(W.dT,P.q)
u(W.dU,W.K)
u(W.dV,P.a2)
u(W.ch,P.q)
u(W.ci,W.K)
u(W.dW,P.q)
u(W.dX,W.K)
u(W.e0,P.a2)
u(W.e3,P.q)
u(W.e4,W.K)
u(W.ck,P.q)
u(W.cl,W.K)
u(W.e5,P.q)
u(W.e6,W.K)
u(W.e9,P.q)
u(W.ea,W.K)
u(W.eb,P.q)
u(W.ec,W.K)
u(W.ed,P.q)
u(W.ee,W.K)
u(W.ef,P.q)
u(W.eg,W.K)
u(W.eh,P.q)
u(W.ei,W.K)
u(P.dG,P.q)
u(P.dH,W.K)
u(P.dR,P.q)
u(P.dS,W.K)
u(P.e1,P.q)
u(P.e2,W.K)
u(P.e7,P.q)
u(P.e8,W.K)
u(P.du,P.a2)
u(P.dY,P.q)
u(P.dZ,W.K)})()
var v={mangledGlobalNames:{v:"int",J:"double",a9:"num",t:"String",be:"bool",b5:"Null",b4:"List"},mangledNames:{},getTypeFromName:getGlobalFromName,metadata:[],types:[{func:1,ret:-1,opt:[D.V]},{func:1,ret:-1,args:[D.V]},{func:1,ret:-1,args:[W.at]},{func:1,ret:-1,args:[P.v,[P.j,E.aE]]},{func:1,ret:-1,args:[W.h]},{func:1,ret:-1,args:[W.by]},{func:1,ret:P.J},{func:1,ret:-1,args:[{func:1,ret:-1}]},{func:1,args:[,]},{func:1,ret:P.b5,args:[,,]},{func:1,ret:-1},{func:1,ret:-1,args:[W.br]},{func:1,ret:-1,args:[P.v,[P.j,D.a1]]},{func:1,ret:-1,args:[P.v,[P.j,U.a6]]},{func:1,ret:-1,args:[P.v,[P.j,M.a8]]},{func:1,ret:-1,args:[P.v,[P.j,V.aJ]]},{func:1,ret:P.b5,args:[,]},{func:1,ret:-1,args:[W.bc]},{func:1,ret:P.be,args:[[P.j,D.a1]]},{func:1,ret:F.ag,args:[F.ag]},{func:1,ret:F.ag,args:[F.ag],named:{color:V.N}},{func:1,ret:P.v,args:[,,]}],interceptorsByTag:null,leafTags:null};(function constants(){var u=hunkHelpers.makeConstList
C.i=W.bn.prototype
C.A=J.a.prototype
C.a=J.b1.prototype
C.d=J.cO.prototype
C.f=J.cP.prototype
C.b=J.bU.prototype
C.c=J.bq.prototype
C.B=J.b2.prototype
C.o=J.h_.prototype
C.k=J.cb.prototype
C.p=W.bc.prototype
C.q=W.cc.prototype
C.l=function getTagFallback(o) {
  var s = Object.prototype.toString.call(o);
  return s.substring(8, s.length - 1);
}
C.r=function() {
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
C.x=function(getTagFallback) {
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
C.t=function(hooks) {
  if (typeof dartExperimentalFixupGetTag != "function") return hooks;
  hooks.getTag = dartExperimentalFixupGetTag(hooks.getTag);
}
C.u=function(hooks) {
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
C.w=function(hooks) {
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
C.v=function(hooks) {
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
C.m=function(hooks) { return hooks; }

C.y=new P.fZ()
C.h=new P.hV()
C.z=new P.hW()
C.e=new P.ir()
C.j=new P.bO(0)
C.n=H.b(u([0,0,65498,45055,65535,34815,65534,18431]),[P.v])
C.C=new P.bC(null,2)})();(function staticFields(){$.an=0
$.bJ=null
$.jA=null
$.kd=null
$.k7=null
$.ki=null
$.iJ=null
$.iO=null
$.jv=null
$.bD=null
$.co=null
$.cp=null
$.jp=!1
$.az=C.e
$.a4=[]
$.jJ=null
$.jM=null
$.au=null
$.jR=null
$.jX=null
$.k_=null
$.jZ=null
$.jY=null
$.k1=null
$.jL=null})();(function lazyInitializers(){var u=hunkHelpers.lazy
u($,"mv","kn",function(){return H.kb("_$dart_dartClosure")})
u($,"mw","jy",function(){return H.kb("_$dart_js")})
u($,"mx","ko",function(){return H.ax(H.hH({
toString:function(){return"$receiver$"}}))})
u($,"my","kp",function(){return H.ax(H.hH({$method$:null,
toString:function(){return"$receiver$"}}))})
u($,"mz","kq",function(){return H.ax(H.hH(null))})
u($,"mA","kr",function(){return H.ax(function(){var $argumentsExpr$='$arguments$'
try{null.$method$($argumentsExpr$)}catch(t){return t.message}}())})
u($,"mD","ku",function(){return H.ax(H.hH(void 0))})
u($,"mE","kv",function(){return H.ax(function(){var $argumentsExpr$='$arguments$'
try{(void 0).$method$($argumentsExpr$)}catch(t){return t.message}}())})
u($,"mC","kt",function(){return H.ax(H.jV(null))})
u($,"mB","ks",function(){return H.ax(function(){try{null.$method$}catch(t){return t.message}}())})
u($,"mG","kx",function(){return H.ax(H.jV(void 0))})
u($,"mF","kw",function(){return H.ax(function(){try{(void 0).$method$}catch(t){return t.message}}())})
u($,"mT","jz",function(){return P.lj()})
u($,"mV","kB",function(){return P.lb("^[\\-\\.0-9A-Z_a-z~]*$")})
u($,"mN","kA",function(){return Z.ah(0)})
u($,"mH","ky",function(){return Z.ah(511)})
u($,"mP","am",function(){return Z.ah(1)})
u($,"mO","al",function(){return Z.ah(2)})
u($,"mJ","ak",function(){return Z.ah(4)})
u($,"mQ","bh",function(){return Z.ah(8)})
u($,"mR","bi",function(){return Z.ah(16)})
u($,"mK","bg",function(){return Z.ah(32)})
u($,"mL","ct",function(){return Z.ah(64)})
u($,"mM","kz",function(){return Z.ah(96)})
u($,"mS","bG",function(){return Z.ah(128)})
u($,"mI","aY",function(){return Z.ah(256)})
u($,"mu","km",function(){return new V.eS(1e-9)})
u($,"mt","A",function(){return $.km()})})();(function nativeSupport(){!function(){var u=function(a){var o={}
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
hunkHelpers.setOrUpdateInterceptorsByTag({ArrayBuffer:J.a,AnimationEffectReadOnly:J.a,AnimationEffectTiming:J.a,AnimationEffectTimingReadOnly:J.a,AnimationTimeline:J.a,AnimationWorkletGlobalScope:J.a,AuthenticatorAssertionResponse:J.a,AuthenticatorAttestationResponse:J.a,AuthenticatorResponse:J.a,BackgroundFetchFetch:J.a,BackgroundFetchManager:J.a,BackgroundFetchSettledFetch:J.a,BarProp:J.a,BarcodeDetector:J.a,BluetoothRemoteGATTDescriptor:J.a,Body:J.a,BudgetState:J.a,CacheStorage:J.a,CanvasGradient:J.a,CanvasPattern:J.a,CanvasRenderingContext2D:J.a,Client:J.a,Clients:J.a,CookieStore:J.a,Coordinates:J.a,Credential:J.a,CredentialUserData:J.a,CredentialsContainer:J.a,Crypto:J.a,CryptoKey:J.a,CSS:J.a,CSSVariableReferenceValue:J.a,CustomElementRegistry:J.a,DataTransfer:J.a,DataTransferItem:J.a,DeprecatedStorageInfo:J.a,DeprecatedStorageQuota:J.a,DeprecationReport:J.a,DetectedBarcode:J.a,DetectedFace:J.a,DetectedText:J.a,DeviceAcceleration:J.a,DeviceRotationRate:J.a,DirectoryEntry:J.a,DirectoryReader:J.a,DocumentOrShadowRoot:J.a,DocumentTimeline:J.a,DOMError:J.a,DOMImplementation:J.a,Iterator:J.a,DOMMatrix:J.a,DOMMatrixReadOnly:J.a,DOMParser:J.a,DOMPoint:J.a,DOMPointReadOnly:J.a,DOMQuad:J.a,DOMStringMap:J.a,Entry:J.a,External:J.a,FaceDetector:J.a,FederatedCredential:J.a,FileEntry:J.a,DOMFileSystem:J.a,FontFace:J.a,FontFaceSource:J.a,FormData:J.a,GamepadButton:J.a,GamepadPose:J.a,Geolocation:J.a,Position:J.a,Headers:J.a,HTMLHyperlinkElementUtils:J.a,IdleDeadline:J.a,ImageBitmap:J.a,ImageBitmapRenderingContext:J.a,ImageCapture:J.a,ImageData:J.a,InputDeviceCapabilities:J.a,IntersectionObserver:J.a,IntersectionObserverEntry:J.a,InterventionReport:J.a,KeyframeEffect:J.a,KeyframeEffectReadOnly:J.a,MediaCapabilities:J.a,MediaCapabilitiesInfo:J.a,MediaDeviceInfo:J.a,MediaError:J.a,MediaKeyStatusMap:J.a,MediaKeySystemAccess:J.a,MediaKeys:J.a,MediaKeysPolicy:J.a,MediaMetadata:J.a,MediaSession:J.a,MediaSettingsRange:J.a,MemoryInfo:J.a,MessageChannel:J.a,Metadata:J.a,MutationObserver:J.a,WebKitMutationObserver:J.a,MutationRecord:J.a,NavigationPreloadManager:J.a,Navigator:J.a,NavigatorAutomationInformation:J.a,NavigatorConcurrentHardware:J.a,NavigatorCookies:J.a,NavigatorUserMediaError:J.a,NodeFilter:J.a,NodeIterator:J.a,NonDocumentTypeChildNode:J.a,NonElementParentNode:J.a,NoncedElement:J.a,OffscreenCanvasRenderingContext2D:J.a,OverconstrainedError:J.a,PaintRenderingContext2D:J.a,PaintSize:J.a,PaintWorkletGlobalScope:J.a,PasswordCredential:J.a,Path2D:J.a,PaymentAddress:J.a,PaymentInstruments:J.a,PaymentManager:J.a,PaymentResponse:J.a,PerformanceEntry:J.a,PerformanceLongTaskTiming:J.a,PerformanceMark:J.a,PerformanceMeasure:J.a,PerformanceNavigation:J.a,PerformanceNavigationTiming:J.a,PerformanceObserver:J.a,PerformanceObserverEntryList:J.a,PerformancePaintTiming:J.a,PerformanceResourceTiming:J.a,PerformanceServerTiming:J.a,PerformanceTiming:J.a,Permissions:J.a,PhotoCapabilities:J.a,PositionError:J.a,Presentation:J.a,PresentationReceiver:J.a,PublicKeyCredential:J.a,PushManager:J.a,PushMessageData:J.a,PushSubscription:J.a,PushSubscriptionOptions:J.a,Range:J.a,RelatedApplication:J.a,ReportBody:J.a,ReportingObserver:J.a,ResizeObserver:J.a,ResizeObserverEntry:J.a,RTCCertificate:J.a,RTCIceCandidate:J.a,mozRTCIceCandidate:J.a,RTCLegacyStatsReport:J.a,RTCRtpContributingSource:J.a,RTCRtpReceiver:J.a,RTCRtpSender:J.a,RTCSessionDescription:J.a,mozRTCSessionDescription:J.a,RTCStatsResponse:J.a,Screen:J.a,ScrollState:J.a,ScrollTimeline:J.a,Selection:J.a,SharedArrayBuffer:J.a,SpeechRecognitionAlternative:J.a,SpeechSynthesisVoice:J.a,StaticRange:J.a,StorageManager:J.a,StyleMedia:J.a,StylePropertyMap:J.a,StylePropertyMapReadonly:J.a,SyncManager:J.a,TaskAttributionTiming:J.a,TextDetector:J.a,TextMetrics:J.a,TrackDefault:J.a,TreeWalker:J.a,TrustedHTML:J.a,TrustedScriptURL:J.a,TrustedURL:J.a,UnderlyingSourceBase:J.a,URLSearchParams:J.a,VRCoordinateSystem:J.a,VRDisplayCapabilities:J.a,VREyeParameters:J.a,VRFrameData:J.a,VRFrameOfReference:J.a,VRPose:J.a,VRStageBounds:J.a,VRStageBoundsPoint:J.a,VRStageParameters:J.a,ValidityState:J.a,VideoPlaybackQuality:J.a,VideoTrack:J.a,VTTRegion:J.a,WindowClient:J.a,WorkletAnimation:J.a,WorkletGlobalScope:J.a,XPathEvaluator:J.a,XPathExpression:J.a,XPathNSResolver:J.a,XPathResult:J.a,XMLSerializer:J.a,XSLTProcessor:J.a,Bluetooth:J.a,BluetoothCharacteristicProperties:J.a,BluetoothRemoteGATTServer:J.a,BluetoothRemoteGATTService:J.a,BluetoothUUID:J.a,BudgetService:J.a,Cache:J.a,DOMFileSystemSync:J.a,DirectoryEntrySync:J.a,DirectoryReaderSync:J.a,EntrySync:J.a,FileEntrySync:J.a,FileReaderSync:J.a,FileWriterSync:J.a,HTMLAllCollection:J.a,Mojo:J.a,MojoHandle:J.a,MojoWatcher:J.a,NFC:J.a,PagePopupController:J.a,Report:J.a,Request:J.a,Response:J.a,SubtleCrypto:J.a,USBAlternateInterface:J.a,USBConfiguration:J.a,USBDevice:J.a,USBEndpoint:J.a,USBInTransferResult:J.a,USBInterface:J.a,USBIsochronousInTransferPacket:J.a,USBIsochronousInTransferResult:J.a,USBIsochronousOutTransferPacket:J.a,USBIsochronousOutTransferResult:J.a,USBOutTransferResult:J.a,WorkerLocation:J.a,WorkerNavigator:J.a,Worklet:J.a,IDBCursor:J.a,IDBCursorWithValue:J.a,IDBFactory:J.a,IDBIndex:J.a,IDBKeyRange:J.a,IDBObjectStore:J.a,IDBObservation:J.a,IDBObserver:J.a,IDBObserverChanges:J.a,SVGAngle:J.a,SVGAnimatedAngle:J.a,SVGAnimatedBoolean:J.a,SVGAnimatedEnumeration:J.a,SVGAnimatedInteger:J.a,SVGAnimatedLength:J.a,SVGAnimatedLengthList:J.a,SVGAnimatedNumber:J.a,SVGAnimatedNumberList:J.a,SVGAnimatedPreserveAspectRatio:J.a,SVGAnimatedRect:J.a,SVGAnimatedString:J.a,SVGAnimatedTransformList:J.a,SVGMatrix:J.a,SVGPoint:J.a,SVGPreserveAspectRatio:J.a,SVGRect:J.a,SVGUnitTypes:J.a,AudioListener:J.a,AudioParam:J.a,AudioTrack:J.a,AudioWorkletGlobalScope:J.a,AudioWorkletProcessor:J.a,PeriodicWave:J.a,WebGLActiveInfo:J.a,ANGLEInstancedArrays:J.a,ANGLE_instanced_arrays:J.a,WebGLBuffer:J.a,WebGLCanvas:J.a,WebGLColorBufferFloat:J.a,WebGLCompressedTextureASTC:J.a,WebGLCompressedTextureATC:J.a,WEBGL_compressed_texture_atc:J.a,WebGLCompressedTextureETC1:J.a,WEBGL_compressed_texture_etc1:J.a,WebGLCompressedTextureETC:J.a,WebGLCompressedTexturePVRTC:J.a,WEBGL_compressed_texture_pvrtc:J.a,WebGLCompressedTextureS3TC:J.a,WEBGL_compressed_texture_s3tc:J.a,WebGLCompressedTextureS3TCsRGB:J.a,WebGLDebugRendererInfo:J.a,WEBGL_debug_renderer_info:J.a,WebGLDebugShaders:J.a,WEBGL_debug_shaders:J.a,WebGLDepthTexture:J.a,WEBGL_depth_texture:J.a,WebGLDrawBuffers:J.a,WEBGL_draw_buffers:J.a,EXTsRGB:J.a,EXT_sRGB:J.a,EXTBlendMinMax:J.a,EXT_blend_minmax:J.a,EXTColorBufferFloat:J.a,EXTColorBufferHalfFloat:J.a,EXTDisjointTimerQuery:J.a,EXTDisjointTimerQueryWebGL2:J.a,EXTFragDepth:J.a,EXT_frag_depth:J.a,EXTShaderTextureLOD:J.a,EXT_shader_texture_lod:J.a,EXTTextureFilterAnisotropic:J.a,EXT_texture_filter_anisotropic:J.a,WebGLFramebuffer:J.a,WebGLGetBufferSubDataAsync:J.a,WebGLLoseContext:J.a,WebGLExtensionLoseContext:J.a,WEBGL_lose_context:J.a,OESElementIndexUint:J.a,OES_element_index_uint:J.a,OESStandardDerivatives:J.a,OES_standard_derivatives:J.a,OESTextureFloat:J.a,OES_texture_float:J.a,OESTextureFloatLinear:J.a,OES_texture_float_linear:J.a,OESTextureHalfFloat:J.a,OES_texture_half_float:J.a,OESTextureHalfFloatLinear:J.a,OES_texture_half_float_linear:J.a,OESVertexArrayObject:J.a,OES_vertex_array_object:J.a,WebGLProgram:J.a,WebGLQuery:J.a,WebGLRenderbuffer:J.a,WebGLRenderingContext:J.a,WebGL2RenderingContext:J.a,WebGLSampler:J.a,WebGLShader:J.a,WebGLShaderPrecisionFormat:J.a,WebGLSync:J.a,WebGLTexture:J.a,WebGLTimerQueryEXT:J.a,WebGLTransformFeedback:J.a,WebGLUniformLocation:J.a,WebGLVertexArrayObject:J.a,WebGLVertexArrayObjectOES:J.a,WebGL:J.a,WebGL2RenderingContextBase:J.a,Database:J.a,SQLError:J.a,SQLResultSet:J.a,SQLTransaction:J.a,DataView:H.c2,ArrayBufferView:H.c2,Float32Array:H.c1,Float64Array:H.c1,Int16Array:H.fQ,Int32Array:H.fR,Int8Array:H.fS,Uint16Array:H.fT,Uint32Array:H.fU,Uint8ClampedArray:H.d0,CanvasPixelArray:H.d0,Uint8Array:H.fV,HTMLAudioElement:W.m,HTMLBRElement:W.m,HTMLBaseElement:W.m,HTMLBodyElement:W.m,HTMLButtonElement:W.m,HTMLContentElement:W.m,HTMLDListElement:W.m,HTMLDataElement:W.m,HTMLDataListElement:W.m,HTMLDetailsElement:W.m,HTMLDialogElement:W.m,HTMLDivElement:W.m,HTMLEmbedElement:W.m,HTMLFieldSetElement:W.m,HTMLHRElement:W.m,HTMLHeadElement:W.m,HTMLHeadingElement:W.m,HTMLHtmlElement:W.m,HTMLIFrameElement:W.m,HTMLImageElement:W.m,HTMLInputElement:W.m,HTMLLIElement:W.m,HTMLLabelElement:W.m,HTMLLegendElement:W.m,HTMLLinkElement:W.m,HTMLMapElement:W.m,HTMLMediaElement:W.m,HTMLMenuElement:W.m,HTMLMetaElement:W.m,HTMLMeterElement:W.m,HTMLModElement:W.m,HTMLOListElement:W.m,HTMLObjectElement:W.m,HTMLOptGroupElement:W.m,HTMLOptionElement:W.m,HTMLOutputElement:W.m,HTMLParagraphElement:W.m,HTMLParamElement:W.m,HTMLPictureElement:W.m,HTMLPreElement:W.m,HTMLProgressElement:W.m,HTMLQuoteElement:W.m,HTMLScriptElement:W.m,HTMLShadowElement:W.m,HTMLSlotElement:W.m,HTMLSourceElement:W.m,HTMLSpanElement:W.m,HTMLStyleElement:W.m,HTMLTableCaptionElement:W.m,HTMLTableCellElement:W.m,HTMLTableDataCellElement:W.m,HTMLTableHeaderCellElement:W.m,HTMLTableColElement:W.m,HTMLTableElement:W.m,HTMLTableRowElement:W.m,HTMLTableSectionElement:W.m,HTMLTemplateElement:W.m,HTMLTextAreaElement:W.m,HTMLTimeElement:W.m,HTMLTitleElement:W.m,HTMLTrackElement:W.m,HTMLUListElement:W.m,HTMLUnknownElement:W.m,HTMLVideoElement:W.m,HTMLDirectoryElement:W.m,HTMLFontElement:W.m,HTMLFrameElement:W.m,HTMLFrameSetElement:W.m,HTMLMarqueeElement:W.m,HTMLElement:W.m,AccessibleNodeList:W.em,HTMLAnchorElement:W.eo,HTMLAreaElement:W.ep,Blob:W.cy,HTMLCanvasElement:W.bn,CDATASection:W.aZ,CharacterData:W.aZ,Comment:W.aZ,ProcessingInstruction:W.aZ,Text:W.aZ,CSSPerspective:W.eE,CSSCharsetRule:W.H,CSSConditionRule:W.H,CSSFontFaceRule:W.H,CSSGroupingRule:W.H,CSSImportRule:W.H,CSSKeyframeRule:W.H,MozCSSKeyframeRule:W.H,WebKitCSSKeyframeRule:W.H,CSSKeyframesRule:W.H,MozCSSKeyframesRule:W.H,WebKitCSSKeyframesRule:W.H,CSSMediaRule:W.H,CSSNamespaceRule:W.H,CSSPageRule:W.H,CSSRule:W.H,CSSStyleRule:W.H,CSSSupportsRule:W.H,CSSViewportRule:W.H,CSSStyleDeclaration:W.bN,MSStyleCSSProperties:W.bN,CSS2Properties:W.bN,CSSImageValue:W.ab,CSSKeywordValue:W.ab,CSSNumericValue:W.ab,CSSPositionValue:W.ab,CSSResourceValue:W.ab,CSSUnitValue:W.ab,CSSURLImageValue:W.ab,CSSStyleValue:W.ab,CSSMatrixComponent:W.ao,CSSRotation:W.ao,CSSScale:W.ao,CSSSkew:W.ao,CSSTranslation:W.ao,CSSTransformComponent:W.ao,CSSTransformValue:W.eG,CSSUnparsedValue:W.eH,DataTransferItemList:W.eJ,DOMException:W.eL,ClientRectList:W.cH,DOMRectList:W.cH,DOMRectReadOnly:W.cI,DOMStringList:W.eM,DOMTokenList:W.eN,Element:W.U,AbortPaymentEvent:W.h,AnimationEvent:W.h,AnimationPlaybackEvent:W.h,ApplicationCacheErrorEvent:W.h,BackgroundFetchClickEvent:W.h,BackgroundFetchEvent:W.h,BackgroundFetchFailEvent:W.h,BackgroundFetchedEvent:W.h,BeforeInstallPromptEvent:W.h,BeforeUnloadEvent:W.h,BlobEvent:W.h,CanMakePaymentEvent:W.h,ClipboardEvent:W.h,CloseEvent:W.h,CustomEvent:W.h,DeviceMotionEvent:W.h,DeviceOrientationEvent:W.h,ErrorEvent:W.h,ExtendableEvent:W.h,ExtendableMessageEvent:W.h,FetchEvent:W.h,FontFaceSetLoadEvent:W.h,ForeignFetchEvent:W.h,GamepadEvent:W.h,HashChangeEvent:W.h,InstallEvent:W.h,MediaEncryptedEvent:W.h,MediaKeyMessageEvent:W.h,MediaQueryListEvent:W.h,MediaStreamEvent:W.h,MediaStreamTrackEvent:W.h,MessageEvent:W.h,MIDIConnectionEvent:W.h,MIDIMessageEvent:W.h,MutationEvent:W.h,NotificationEvent:W.h,PageTransitionEvent:W.h,PaymentRequestEvent:W.h,PaymentRequestUpdateEvent:W.h,PopStateEvent:W.h,PresentationConnectionAvailableEvent:W.h,PresentationConnectionCloseEvent:W.h,ProgressEvent:W.h,PromiseRejectionEvent:W.h,PushEvent:W.h,RTCDataChannelEvent:W.h,RTCDTMFToneChangeEvent:W.h,RTCPeerConnectionIceEvent:W.h,RTCTrackEvent:W.h,SecurityPolicyViolationEvent:W.h,SensorErrorEvent:W.h,SpeechRecognitionError:W.h,SpeechRecognitionEvent:W.h,SpeechSynthesisEvent:W.h,StorageEvent:W.h,SyncEvent:W.h,TrackEvent:W.h,TransitionEvent:W.h,WebKitTransitionEvent:W.h,VRDeviceEvent:W.h,VRDisplayEvent:W.h,VRSessionEvent:W.h,MojoInterfaceRequestEvent:W.h,ResourceProgressEvent:W.h,USBConnectionEvent:W.h,IDBVersionChangeEvent:W.h,AudioProcessingEvent:W.h,OfflineAudioCompletionEvent:W.h,WebGLContextEvent:W.h,Event:W.h,InputEvent:W.h,AbsoluteOrientationSensor:W.e,Accelerometer:W.e,AccessibleNode:W.e,AmbientLightSensor:W.e,Animation:W.e,ApplicationCache:W.e,DOMApplicationCache:W.e,OfflineResourceList:W.e,BackgroundFetchRegistration:W.e,BatteryManager:W.e,BroadcastChannel:W.e,CanvasCaptureMediaStreamTrack:W.e,DedicatedWorkerGlobalScope:W.e,EventSource:W.e,FileReader:W.e,FontFaceSet:W.e,Gyroscope:W.e,XMLHttpRequest:W.e,XMLHttpRequestEventTarget:W.e,XMLHttpRequestUpload:W.e,LinearAccelerationSensor:W.e,Magnetometer:W.e,MediaDevices:W.e,MediaKeySession:W.e,MediaQueryList:W.e,MediaRecorder:W.e,MediaSource:W.e,MediaStream:W.e,MediaStreamTrack:W.e,MessagePort:W.e,MIDIAccess:W.e,MIDIInput:W.e,MIDIOutput:W.e,MIDIPort:W.e,NetworkInformation:W.e,Notification:W.e,OffscreenCanvas:W.e,OrientationSensor:W.e,PaymentRequest:W.e,Performance:W.e,PermissionStatus:W.e,PresentationAvailability:W.e,PresentationConnection:W.e,PresentationConnectionList:W.e,PresentationRequest:W.e,RelativeOrientationSensor:W.e,RemotePlayback:W.e,RTCDataChannel:W.e,DataChannel:W.e,RTCDTMFSender:W.e,RTCPeerConnection:W.e,webkitRTCPeerConnection:W.e,mozRTCPeerConnection:W.e,ScreenOrientation:W.e,Sensor:W.e,ServiceWorker:W.e,ServiceWorkerContainer:W.e,ServiceWorkerGlobalScope:W.e,ServiceWorkerRegistration:W.e,SharedWorker:W.e,SharedWorkerGlobalScope:W.e,SpeechRecognition:W.e,SpeechSynthesis:W.e,SpeechSynthesisUtterance:W.e,VR:W.e,VRDevice:W.e,VRDisplay:W.e,VRSession:W.e,VisualViewport:W.e,WebSocket:W.e,Worker:W.e,WorkerGlobalScope:W.e,WorkerPerformance:W.e,BluetoothDevice:W.e,BluetoothRemoteGATTCharacteristic:W.e,Clipboard:W.e,MojoInterfaceInterceptor:W.e,USB:W.e,IDBDatabase:W.e,IDBOpenDBRequest:W.e,IDBVersionChangeRequest:W.e,IDBRequest:W.e,IDBTransaction:W.e,AnalyserNode:W.e,RealtimeAnalyserNode:W.e,AudioBufferSourceNode:W.e,AudioDestinationNode:W.e,AudioNode:W.e,AudioScheduledSourceNode:W.e,AudioWorkletNode:W.e,BiquadFilterNode:W.e,ChannelMergerNode:W.e,AudioChannelMerger:W.e,ChannelSplitterNode:W.e,AudioChannelSplitter:W.e,ConstantSourceNode:W.e,ConvolverNode:W.e,DelayNode:W.e,DynamicsCompressorNode:W.e,GainNode:W.e,AudioGainNode:W.e,IIRFilterNode:W.e,MediaElementAudioSourceNode:W.e,MediaStreamAudioDestinationNode:W.e,MediaStreamAudioSourceNode:W.e,OscillatorNode:W.e,Oscillator:W.e,PannerNode:W.e,AudioPannerNode:W.e,webkitAudioPannerNode:W.e,ScriptProcessorNode:W.e,JavaScriptAudioNode:W.e,StereoPannerNode:W.e,WaveShaperNode:W.e,EventTarget:W.e,File:W.aG,FileList:W.eW,FileWriter:W.eX,HTMLFormElement:W.f0,Gamepad:W.aH,History:W.f4,HTMLCollection:W.bT,HTMLFormControlsCollection:W.bT,HTMLOptionsCollection:W.bT,KeyboardEvent:W.br,Location:W.fq,MediaList:W.fJ,MIDIInputMap:W.fK,MIDIOutputMap:W.fM,MimeType:W.aK,MimeTypeArray:W.fO,PointerEvent:W.at,MouseEvent:W.at,DragEvent:W.at,Document:W.F,DocumentFragment:W.F,HTMLDocument:W.F,ShadowRoot:W.F,XMLDocument:W.F,Attr:W.F,DocumentType:W.F,Node:W.F,NodeList:W.d1,RadioNodeList:W.d1,Plugin:W.aM,PluginArray:W.h0,RTCStatsReport:W.h8,HTMLSelectElement:W.hb,SourceBuffer:W.aO,SourceBufferList:W.hk,SpeechGrammar:W.aP,SpeechGrammarList:W.hl,SpeechRecognitionResult:W.aQ,Storage:W.hq,CSSStyleSheet:W.av,StyleSheet:W.av,TextTrack:W.aS,TextTrackCue:W.aw,VTTCue:W.aw,TextTrackCueList:W.hw,TextTrackList:W.hx,TimeRanges:W.hA,Touch:W.aT,TouchEvent:W.by,TouchList:W.hD,TrackDefaultList:W.hE,CompositionEvent:W.b8,FocusEvent:W.b8,TextEvent:W.b8,UIEvent:W.b8,URL:W.hU,VideoTrackList:W.i7,WheelEvent:W.bc,Window:W.cc,DOMWindow:W.cc,CSSRuleList:W.ih,ClientRect:W.dw,DOMRect:W.dw,GamepadList:W.ik,NamedNodeMap:W.dO,MozNamedAttrMap:W.dO,SpeechRecognitionResultList:W.iv,StyleSheetList:W.iw,SVGLength:P.b3,SVGLengthList:P.fl,SVGNumber:P.b6,SVGNumberList:P.fX,SVGPointList:P.h3,SVGStringList:P.ht,SVGAElement:P.l,SVGAnimateElement:P.l,SVGAnimateMotionElement:P.l,SVGAnimateTransformElement:P.l,SVGAnimationElement:P.l,SVGCircleElement:P.l,SVGClipPathElement:P.l,SVGDefsElement:P.l,SVGDescElement:P.l,SVGDiscardElement:P.l,SVGEllipseElement:P.l,SVGFEBlendElement:P.l,SVGFEColorMatrixElement:P.l,SVGFEComponentTransferElement:P.l,SVGFECompositeElement:P.l,SVGFEConvolveMatrixElement:P.l,SVGFEDiffuseLightingElement:P.l,SVGFEDisplacementMapElement:P.l,SVGFEDistantLightElement:P.l,SVGFEFloodElement:P.l,SVGFEFuncAElement:P.l,SVGFEFuncBElement:P.l,SVGFEFuncGElement:P.l,SVGFEFuncRElement:P.l,SVGFEGaussianBlurElement:P.l,SVGFEImageElement:P.l,SVGFEMergeElement:P.l,SVGFEMergeNodeElement:P.l,SVGFEMorphologyElement:P.l,SVGFEOffsetElement:P.l,SVGFEPointLightElement:P.l,SVGFESpecularLightingElement:P.l,SVGFESpotLightElement:P.l,SVGFETileElement:P.l,SVGFETurbulenceElement:P.l,SVGFilterElement:P.l,SVGForeignObjectElement:P.l,SVGGElement:P.l,SVGGeometryElement:P.l,SVGGraphicsElement:P.l,SVGImageElement:P.l,SVGLineElement:P.l,SVGLinearGradientElement:P.l,SVGMarkerElement:P.l,SVGMaskElement:P.l,SVGMetadataElement:P.l,SVGPathElement:P.l,SVGPatternElement:P.l,SVGPolygonElement:P.l,SVGPolylineElement:P.l,SVGRadialGradientElement:P.l,SVGRectElement:P.l,SVGScriptElement:P.l,SVGSetElement:P.l,SVGStopElement:P.l,SVGStyleElement:P.l,SVGElement:P.l,SVGSVGElement:P.l,SVGSwitchElement:P.l,SVGSymbolElement:P.l,SVGTSpanElement:P.l,SVGTextContentElement:P.l,SVGTextElement:P.l,SVGTextPathElement:P.l,SVGTextPositioningElement:P.l,SVGTitleElement:P.l,SVGUseElement:P.l,SVGViewElement:P.l,SVGGradientElement:P.l,SVGComponentTransferFunctionElement:P.l,SVGFEDropShadowElement:P.l,SVGMPathElement:P.l,SVGTransform:P.b7,SVGTransformList:P.hF,AudioBuffer:P.er,AudioParamMap:P.es,AudioTrackList:P.eu,AudioContext:P.bl,webkitAudioContext:P.bl,BaseAudioContext:P.bl,OfflineAudioContext:P.fY,SQLResultSetRowList:P.hn})
hunkHelpers.setOrUpdateLeafTags({ArrayBuffer:true,AnimationEffectReadOnly:true,AnimationEffectTiming:true,AnimationEffectTimingReadOnly:true,AnimationTimeline:true,AnimationWorkletGlobalScope:true,AuthenticatorAssertionResponse:true,AuthenticatorAttestationResponse:true,AuthenticatorResponse:true,BackgroundFetchFetch:true,BackgroundFetchManager:true,BackgroundFetchSettledFetch:true,BarProp:true,BarcodeDetector:true,BluetoothRemoteGATTDescriptor:true,Body:true,BudgetState:true,CacheStorage:true,CanvasGradient:true,CanvasPattern:true,CanvasRenderingContext2D:true,Client:true,Clients:true,CookieStore:true,Coordinates:true,Credential:true,CredentialUserData:true,CredentialsContainer:true,Crypto:true,CryptoKey:true,CSS:true,CSSVariableReferenceValue:true,CustomElementRegistry:true,DataTransfer:true,DataTransferItem:true,DeprecatedStorageInfo:true,DeprecatedStorageQuota:true,DeprecationReport:true,DetectedBarcode:true,DetectedFace:true,DetectedText:true,DeviceAcceleration:true,DeviceRotationRate:true,DirectoryEntry:true,DirectoryReader:true,DocumentOrShadowRoot:true,DocumentTimeline:true,DOMError:true,DOMImplementation:true,Iterator:true,DOMMatrix:true,DOMMatrixReadOnly:true,DOMParser:true,DOMPoint:true,DOMPointReadOnly:true,DOMQuad:true,DOMStringMap:true,Entry:true,External:true,FaceDetector:true,FederatedCredential:true,FileEntry:true,DOMFileSystem:true,FontFace:true,FontFaceSource:true,FormData:true,GamepadButton:true,GamepadPose:true,Geolocation:true,Position:true,Headers:true,HTMLHyperlinkElementUtils:true,IdleDeadline:true,ImageBitmap:true,ImageBitmapRenderingContext:true,ImageCapture:true,ImageData:true,InputDeviceCapabilities:true,IntersectionObserver:true,IntersectionObserverEntry:true,InterventionReport:true,KeyframeEffect:true,KeyframeEffectReadOnly:true,MediaCapabilities:true,MediaCapabilitiesInfo:true,MediaDeviceInfo:true,MediaError:true,MediaKeyStatusMap:true,MediaKeySystemAccess:true,MediaKeys:true,MediaKeysPolicy:true,MediaMetadata:true,MediaSession:true,MediaSettingsRange:true,MemoryInfo:true,MessageChannel:true,Metadata:true,MutationObserver:true,WebKitMutationObserver:true,MutationRecord:true,NavigationPreloadManager:true,Navigator:true,NavigatorAutomationInformation:true,NavigatorConcurrentHardware:true,NavigatorCookies:true,NavigatorUserMediaError:true,NodeFilter:true,NodeIterator:true,NonDocumentTypeChildNode:true,NonElementParentNode:true,NoncedElement:true,OffscreenCanvasRenderingContext2D:true,OverconstrainedError:true,PaintRenderingContext2D:true,PaintSize:true,PaintWorkletGlobalScope:true,PasswordCredential:true,Path2D:true,PaymentAddress:true,PaymentInstruments:true,PaymentManager:true,PaymentResponse:true,PerformanceEntry:true,PerformanceLongTaskTiming:true,PerformanceMark:true,PerformanceMeasure:true,PerformanceNavigation:true,PerformanceNavigationTiming:true,PerformanceObserver:true,PerformanceObserverEntryList:true,PerformancePaintTiming:true,PerformanceResourceTiming:true,PerformanceServerTiming:true,PerformanceTiming:true,Permissions:true,PhotoCapabilities:true,PositionError:true,Presentation:true,PresentationReceiver:true,PublicKeyCredential:true,PushManager:true,PushMessageData:true,PushSubscription:true,PushSubscriptionOptions:true,Range:true,RelatedApplication:true,ReportBody:true,ReportingObserver:true,ResizeObserver:true,ResizeObserverEntry:true,RTCCertificate:true,RTCIceCandidate:true,mozRTCIceCandidate:true,RTCLegacyStatsReport:true,RTCRtpContributingSource:true,RTCRtpReceiver:true,RTCRtpSender:true,RTCSessionDescription:true,mozRTCSessionDescription:true,RTCStatsResponse:true,Screen:true,ScrollState:true,ScrollTimeline:true,Selection:true,SharedArrayBuffer:true,SpeechRecognitionAlternative:true,SpeechSynthesisVoice:true,StaticRange:true,StorageManager:true,StyleMedia:true,StylePropertyMap:true,StylePropertyMapReadonly:true,SyncManager:true,TaskAttributionTiming:true,TextDetector:true,TextMetrics:true,TrackDefault:true,TreeWalker:true,TrustedHTML:true,TrustedScriptURL:true,TrustedURL:true,UnderlyingSourceBase:true,URLSearchParams:true,VRCoordinateSystem:true,VRDisplayCapabilities:true,VREyeParameters:true,VRFrameData:true,VRFrameOfReference:true,VRPose:true,VRStageBounds:true,VRStageBoundsPoint:true,VRStageParameters:true,ValidityState:true,VideoPlaybackQuality:true,VideoTrack:true,VTTRegion:true,WindowClient:true,WorkletAnimation:true,WorkletGlobalScope:true,XPathEvaluator:true,XPathExpression:true,XPathNSResolver:true,XPathResult:true,XMLSerializer:true,XSLTProcessor:true,Bluetooth:true,BluetoothCharacteristicProperties:true,BluetoothRemoteGATTServer:true,BluetoothRemoteGATTService:true,BluetoothUUID:true,BudgetService:true,Cache:true,DOMFileSystemSync:true,DirectoryEntrySync:true,DirectoryReaderSync:true,EntrySync:true,FileEntrySync:true,FileReaderSync:true,FileWriterSync:true,HTMLAllCollection:true,Mojo:true,MojoHandle:true,MojoWatcher:true,NFC:true,PagePopupController:true,Report:true,Request:true,Response:true,SubtleCrypto:true,USBAlternateInterface:true,USBConfiguration:true,USBDevice:true,USBEndpoint:true,USBInTransferResult:true,USBInterface:true,USBIsochronousInTransferPacket:true,USBIsochronousInTransferResult:true,USBIsochronousOutTransferPacket:true,USBIsochronousOutTransferResult:true,USBOutTransferResult:true,WorkerLocation:true,WorkerNavigator:true,Worklet:true,IDBCursor:true,IDBCursorWithValue:true,IDBFactory:true,IDBIndex:true,IDBKeyRange:true,IDBObjectStore:true,IDBObservation:true,IDBObserver:true,IDBObserverChanges:true,SVGAngle:true,SVGAnimatedAngle:true,SVGAnimatedBoolean:true,SVGAnimatedEnumeration:true,SVGAnimatedInteger:true,SVGAnimatedLength:true,SVGAnimatedLengthList:true,SVGAnimatedNumber:true,SVGAnimatedNumberList:true,SVGAnimatedPreserveAspectRatio:true,SVGAnimatedRect:true,SVGAnimatedString:true,SVGAnimatedTransformList:true,SVGMatrix:true,SVGPoint:true,SVGPreserveAspectRatio:true,SVGRect:true,SVGUnitTypes:true,AudioListener:true,AudioParam:true,AudioTrack:true,AudioWorkletGlobalScope:true,AudioWorkletProcessor:true,PeriodicWave:true,WebGLActiveInfo:true,ANGLEInstancedArrays:true,ANGLE_instanced_arrays:true,WebGLBuffer:true,WebGLCanvas:true,WebGLColorBufferFloat:true,WebGLCompressedTextureASTC:true,WebGLCompressedTextureATC:true,WEBGL_compressed_texture_atc:true,WebGLCompressedTextureETC1:true,WEBGL_compressed_texture_etc1:true,WebGLCompressedTextureETC:true,WebGLCompressedTexturePVRTC:true,WEBGL_compressed_texture_pvrtc:true,WebGLCompressedTextureS3TC:true,WEBGL_compressed_texture_s3tc:true,WebGLCompressedTextureS3TCsRGB:true,WebGLDebugRendererInfo:true,WEBGL_debug_renderer_info:true,WebGLDebugShaders:true,WEBGL_debug_shaders:true,WebGLDepthTexture:true,WEBGL_depth_texture:true,WebGLDrawBuffers:true,WEBGL_draw_buffers:true,EXTsRGB:true,EXT_sRGB:true,EXTBlendMinMax:true,EXT_blend_minmax:true,EXTColorBufferFloat:true,EXTColorBufferHalfFloat:true,EXTDisjointTimerQuery:true,EXTDisjointTimerQueryWebGL2:true,EXTFragDepth:true,EXT_frag_depth:true,EXTShaderTextureLOD:true,EXT_shader_texture_lod:true,EXTTextureFilterAnisotropic:true,EXT_texture_filter_anisotropic:true,WebGLFramebuffer:true,WebGLGetBufferSubDataAsync:true,WebGLLoseContext:true,WebGLExtensionLoseContext:true,WEBGL_lose_context:true,OESElementIndexUint:true,OES_element_index_uint:true,OESStandardDerivatives:true,OES_standard_derivatives:true,OESTextureFloat:true,OES_texture_float:true,OESTextureFloatLinear:true,OES_texture_float_linear:true,OESTextureHalfFloat:true,OES_texture_half_float:true,OESTextureHalfFloatLinear:true,OES_texture_half_float_linear:true,OESVertexArrayObject:true,OES_vertex_array_object:true,WebGLProgram:true,WebGLQuery:true,WebGLRenderbuffer:true,WebGLRenderingContext:true,WebGL2RenderingContext:true,WebGLSampler:true,WebGLShader:true,WebGLShaderPrecisionFormat:true,WebGLSync:true,WebGLTexture:true,WebGLTimerQueryEXT:true,WebGLTransformFeedback:true,WebGLUniformLocation:true,WebGLVertexArrayObject:true,WebGLVertexArrayObjectOES:true,WebGL:true,WebGL2RenderingContextBase:true,Database:true,SQLError:true,SQLResultSet:true,SQLTransaction:true,DataView:true,ArrayBufferView:false,Float32Array:true,Float64Array:true,Int16Array:true,Int32Array:true,Int8Array:true,Uint16Array:true,Uint32Array:true,Uint8ClampedArray:true,CanvasPixelArray:true,Uint8Array:false,HTMLAudioElement:true,HTMLBRElement:true,HTMLBaseElement:true,HTMLBodyElement:true,HTMLButtonElement:true,HTMLContentElement:true,HTMLDListElement:true,HTMLDataElement:true,HTMLDataListElement:true,HTMLDetailsElement:true,HTMLDialogElement:true,HTMLDivElement:true,HTMLEmbedElement:true,HTMLFieldSetElement:true,HTMLHRElement:true,HTMLHeadElement:true,HTMLHeadingElement:true,HTMLHtmlElement:true,HTMLIFrameElement:true,HTMLImageElement:true,HTMLInputElement:true,HTMLLIElement:true,HTMLLabelElement:true,HTMLLegendElement:true,HTMLLinkElement:true,HTMLMapElement:true,HTMLMediaElement:true,HTMLMenuElement:true,HTMLMetaElement:true,HTMLMeterElement:true,HTMLModElement:true,HTMLOListElement:true,HTMLObjectElement:true,HTMLOptGroupElement:true,HTMLOptionElement:true,HTMLOutputElement:true,HTMLParagraphElement:true,HTMLParamElement:true,HTMLPictureElement:true,HTMLPreElement:true,HTMLProgressElement:true,HTMLQuoteElement:true,HTMLScriptElement:true,HTMLShadowElement:true,HTMLSlotElement:true,HTMLSourceElement:true,HTMLSpanElement:true,HTMLStyleElement:true,HTMLTableCaptionElement:true,HTMLTableCellElement:true,HTMLTableDataCellElement:true,HTMLTableHeaderCellElement:true,HTMLTableColElement:true,HTMLTableElement:true,HTMLTableRowElement:true,HTMLTableSectionElement:true,HTMLTemplateElement:true,HTMLTextAreaElement:true,HTMLTimeElement:true,HTMLTitleElement:true,HTMLTrackElement:true,HTMLUListElement:true,HTMLUnknownElement:true,HTMLVideoElement:true,HTMLDirectoryElement:true,HTMLFontElement:true,HTMLFrameElement:true,HTMLFrameSetElement:true,HTMLMarqueeElement:true,HTMLElement:false,AccessibleNodeList:true,HTMLAnchorElement:true,HTMLAreaElement:true,Blob:false,HTMLCanvasElement:true,CDATASection:true,CharacterData:true,Comment:true,ProcessingInstruction:true,Text:true,CSSPerspective:true,CSSCharsetRule:true,CSSConditionRule:true,CSSFontFaceRule:true,CSSGroupingRule:true,CSSImportRule:true,CSSKeyframeRule:true,MozCSSKeyframeRule:true,WebKitCSSKeyframeRule:true,CSSKeyframesRule:true,MozCSSKeyframesRule:true,WebKitCSSKeyframesRule:true,CSSMediaRule:true,CSSNamespaceRule:true,CSSPageRule:true,CSSRule:true,CSSStyleRule:true,CSSSupportsRule:true,CSSViewportRule:true,CSSStyleDeclaration:true,MSStyleCSSProperties:true,CSS2Properties:true,CSSImageValue:true,CSSKeywordValue:true,CSSNumericValue:true,CSSPositionValue:true,CSSResourceValue:true,CSSUnitValue:true,CSSURLImageValue:true,CSSStyleValue:false,CSSMatrixComponent:true,CSSRotation:true,CSSScale:true,CSSSkew:true,CSSTranslation:true,CSSTransformComponent:false,CSSTransformValue:true,CSSUnparsedValue:true,DataTransferItemList:true,DOMException:true,ClientRectList:true,DOMRectList:true,DOMRectReadOnly:false,DOMStringList:true,DOMTokenList:true,Element:false,AbortPaymentEvent:true,AnimationEvent:true,AnimationPlaybackEvent:true,ApplicationCacheErrorEvent:true,BackgroundFetchClickEvent:true,BackgroundFetchEvent:true,BackgroundFetchFailEvent:true,BackgroundFetchedEvent:true,BeforeInstallPromptEvent:true,BeforeUnloadEvent:true,BlobEvent:true,CanMakePaymentEvent:true,ClipboardEvent:true,CloseEvent:true,CustomEvent:true,DeviceMotionEvent:true,DeviceOrientationEvent:true,ErrorEvent:true,ExtendableEvent:true,ExtendableMessageEvent:true,FetchEvent:true,FontFaceSetLoadEvent:true,ForeignFetchEvent:true,GamepadEvent:true,HashChangeEvent:true,InstallEvent:true,MediaEncryptedEvent:true,MediaKeyMessageEvent:true,MediaQueryListEvent:true,MediaStreamEvent:true,MediaStreamTrackEvent:true,MessageEvent:true,MIDIConnectionEvent:true,MIDIMessageEvent:true,MutationEvent:true,NotificationEvent:true,PageTransitionEvent:true,PaymentRequestEvent:true,PaymentRequestUpdateEvent:true,PopStateEvent:true,PresentationConnectionAvailableEvent:true,PresentationConnectionCloseEvent:true,ProgressEvent:true,PromiseRejectionEvent:true,PushEvent:true,RTCDataChannelEvent:true,RTCDTMFToneChangeEvent:true,RTCPeerConnectionIceEvent:true,RTCTrackEvent:true,SecurityPolicyViolationEvent:true,SensorErrorEvent:true,SpeechRecognitionError:true,SpeechRecognitionEvent:true,SpeechSynthesisEvent:true,StorageEvent:true,SyncEvent:true,TrackEvent:true,TransitionEvent:true,WebKitTransitionEvent:true,VRDeviceEvent:true,VRDisplayEvent:true,VRSessionEvent:true,MojoInterfaceRequestEvent:true,ResourceProgressEvent:true,USBConnectionEvent:true,IDBVersionChangeEvent:true,AudioProcessingEvent:true,OfflineAudioCompletionEvent:true,WebGLContextEvent:true,Event:false,InputEvent:false,AbsoluteOrientationSensor:true,Accelerometer:true,AccessibleNode:true,AmbientLightSensor:true,Animation:true,ApplicationCache:true,DOMApplicationCache:true,OfflineResourceList:true,BackgroundFetchRegistration:true,BatteryManager:true,BroadcastChannel:true,CanvasCaptureMediaStreamTrack:true,DedicatedWorkerGlobalScope:true,EventSource:true,FileReader:true,FontFaceSet:true,Gyroscope:true,XMLHttpRequest:true,XMLHttpRequestEventTarget:true,XMLHttpRequestUpload:true,LinearAccelerationSensor:true,Magnetometer:true,MediaDevices:true,MediaKeySession:true,MediaQueryList:true,MediaRecorder:true,MediaSource:true,MediaStream:true,MediaStreamTrack:true,MessagePort:true,MIDIAccess:true,MIDIInput:true,MIDIOutput:true,MIDIPort:true,NetworkInformation:true,Notification:true,OffscreenCanvas:true,OrientationSensor:true,PaymentRequest:true,Performance:true,PermissionStatus:true,PresentationAvailability:true,PresentationConnection:true,PresentationConnectionList:true,PresentationRequest:true,RelativeOrientationSensor:true,RemotePlayback:true,RTCDataChannel:true,DataChannel:true,RTCDTMFSender:true,RTCPeerConnection:true,webkitRTCPeerConnection:true,mozRTCPeerConnection:true,ScreenOrientation:true,Sensor:true,ServiceWorker:true,ServiceWorkerContainer:true,ServiceWorkerGlobalScope:true,ServiceWorkerRegistration:true,SharedWorker:true,SharedWorkerGlobalScope:true,SpeechRecognition:true,SpeechSynthesis:true,SpeechSynthesisUtterance:true,VR:true,VRDevice:true,VRDisplay:true,VRSession:true,VisualViewport:true,WebSocket:true,Worker:true,WorkerGlobalScope:true,WorkerPerformance:true,BluetoothDevice:true,BluetoothRemoteGATTCharacteristic:true,Clipboard:true,MojoInterfaceInterceptor:true,USB:true,IDBDatabase:true,IDBOpenDBRequest:true,IDBVersionChangeRequest:true,IDBRequest:true,IDBTransaction:true,AnalyserNode:true,RealtimeAnalyserNode:true,AudioBufferSourceNode:true,AudioDestinationNode:true,AudioNode:true,AudioScheduledSourceNode:true,AudioWorkletNode:true,BiquadFilterNode:true,ChannelMergerNode:true,AudioChannelMerger:true,ChannelSplitterNode:true,AudioChannelSplitter:true,ConstantSourceNode:true,ConvolverNode:true,DelayNode:true,DynamicsCompressorNode:true,GainNode:true,AudioGainNode:true,IIRFilterNode:true,MediaElementAudioSourceNode:true,MediaStreamAudioDestinationNode:true,MediaStreamAudioSourceNode:true,OscillatorNode:true,Oscillator:true,PannerNode:true,AudioPannerNode:true,webkitAudioPannerNode:true,ScriptProcessorNode:true,JavaScriptAudioNode:true,StereoPannerNode:true,WaveShaperNode:true,EventTarget:false,File:true,FileList:true,FileWriter:true,HTMLFormElement:true,Gamepad:true,History:true,HTMLCollection:true,HTMLFormControlsCollection:true,HTMLOptionsCollection:true,KeyboardEvent:true,Location:true,MediaList:true,MIDIInputMap:true,MIDIOutputMap:true,MimeType:true,MimeTypeArray:true,PointerEvent:true,MouseEvent:false,DragEvent:false,Document:true,DocumentFragment:true,HTMLDocument:true,ShadowRoot:true,XMLDocument:true,Attr:true,DocumentType:true,Node:false,NodeList:true,RadioNodeList:true,Plugin:true,PluginArray:true,RTCStatsReport:true,HTMLSelectElement:true,SourceBuffer:true,SourceBufferList:true,SpeechGrammar:true,SpeechGrammarList:true,SpeechRecognitionResult:true,Storage:true,CSSStyleSheet:true,StyleSheet:true,TextTrack:true,TextTrackCue:true,VTTCue:true,TextTrackCueList:true,TextTrackList:true,TimeRanges:true,Touch:true,TouchEvent:true,TouchList:true,TrackDefaultList:true,CompositionEvent:true,FocusEvent:true,TextEvent:true,UIEvent:false,URL:true,VideoTrackList:true,WheelEvent:true,Window:true,DOMWindow:true,CSSRuleList:true,ClientRect:true,DOMRect:true,GamepadList:true,NamedNodeMap:true,MozNamedAttrMap:true,SpeechRecognitionResultList:true,StyleSheetList:true,SVGLength:true,SVGLengthList:true,SVGNumber:true,SVGNumberList:true,SVGPointList:true,SVGStringList:true,SVGAElement:true,SVGAnimateElement:true,SVGAnimateMotionElement:true,SVGAnimateTransformElement:true,SVGAnimationElement:true,SVGCircleElement:true,SVGClipPathElement:true,SVGDefsElement:true,SVGDescElement:true,SVGDiscardElement:true,SVGEllipseElement:true,SVGFEBlendElement:true,SVGFEColorMatrixElement:true,SVGFEComponentTransferElement:true,SVGFECompositeElement:true,SVGFEConvolveMatrixElement:true,SVGFEDiffuseLightingElement:true,SVGFEDisplacementMapElement:true,SVGFEDistantLightElement:true,SVGFEFloodElement:true,SVGFEFuncAElement:true,SVGFEFuncBElement:true,SVGFEFuncGElement:true,SVGFEFuncRElement:true,SVGFEGaussianBlurElement:true,SVGFEImageElement:true,SVGFEMergeElement:true,SVGFEMergeNodeElement:true,SVGFEMorphologyElement:true,SVGFEOffsetElement:true,SVGFEPointLightElement:true,SVGFESpecularLightingElement:true,SVGFESpotLightElement:true,SVGFETileElement:true,SVGFETurbulenceElement:true,SVGFilterElement:true,SVGForeignObjectElement:true,SVGGElement:true,SVGGeometryElement:true,SVGGraphicsElement:true,SVGImageElement:true,SVGLineElement:true,SVGLinearGradientElement:true,SVGMarkerElement:true,SVGMaskElement:true,SVGMetadataElement:true,SVGPathElement:true,SVGPatternElement:true,SVGPolygonElement:true,SVGPolylineElement:true,SVGRadialGradientElement:true,SVGRectElement:true,SVGScriptElement:true,SVGSetElement:true,SVGStopElement:true,SVGStyleElement:true,SVGElement:true,SVGSVGElement:true,SVGSwitchElement:true,SVGSymbolElement:true,SVGTSpanElement:true,SVGTextContentElement:true,SVGTextElement:true,SVGTextPathElement:true,SVGTextPositioningElement:true,SVGTitleElement:true,SVGUseElement:true,SVGViewElement:true,SVGGradientElement:true,SVGComponentTransferFunctionElement:true,SVGFEDropShadowElement:true,SVGMPathElement:true,SVGTransform:true,SVGTransformList:true,AudioBuffer:true,AudioParamMap:true,AudioTrackList:true,AudioContext:true,webkitAudioContext:true,BaseAudioContext:false,OfflineAudioContext:true,SQLResultSetRowList:true})
H.cZ.$nativeSuperclassTag="ArrayBufferView"
H.cd.$nativeSuperclassTag="ArrayBufferView"
H.ce.$nativeSuperclassTag="ArrayBufferView"
H.c1.$nativeSuperclassTag="ArrayBufferView"
H.cf.$nativeSuperclassTag="ArrayBufferView"
H.cg.$nativeSuperclassTag="ArrayBufferView"
H.d_.$nativeSuperclassTag="ArrayBufferView"
W.ch.$nativeSuperclassTag="EventTarget"
W.ci.$nativeSuperclassTag="EventTarget"
W.ck.$nativeSuperclassTag="EventTarget"
W.cl.$nativeSuperclassTag="EventTarget"})()
convertAllToFastObject(w)
convertToFastObject($);(function(a){if(typeof document==="undefined"){a(null)
return}if(typeof document.currentScript!='undefined'){a(document.currentScript)
return}var u=document.scripts
function onLoad(b){for(var s=0;s<u.length;++s)u[s].removeEventListener("load",onLoad,false)
a(b.target)}for(var t=0;t<u.length;++t)u[t].addEventListener("load",onLoad,false)})(function(a){v.currentScript=a
if(typeof dartMainRunner==="function")dartMainRunner(M.kf,[])
else M.kf([])})})()
//# sourceMappingURL=main.dart.js.map
