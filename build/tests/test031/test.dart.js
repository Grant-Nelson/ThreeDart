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
a[c]=function(){a[c]=function(){H.mn(b)}
var t
var s=d
try{if(a[b]===u){t=a[b]=s
t=a[b]=d()}else t=a[b]}finally{if(t===s)a[b]=null
a[c]=function(){return this[b]}}return t}}function makeConstList(a){a.immutable$list=Array
a.fixed$length=Array
return a}function convertToFastObject(a){function t(){}t.prototype=a
new t()
return a}function convertAllToFastObject(a){for(var u=0;u<a.length;++u)convertToFastObject(a[u])}var y=0
function tearOffGetter(a,b,c,d,e){return e?new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+d+y+++"(receiver) {"+"if (c === null) c = "+"H.je"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, true, name);"+"return new c(this, funcs[0], receiver, name);"+"}")(a,b,c,d,H,null):new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+d+y+++"() {"+"if (c === null) c = "+"H.je"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, false, name);"+"return new c(this, funcs[0], null, name);"+"}")(a,b,c,d,H,null)}function tearOff(a,b,c,d,e,f){var u=null
return d?function(){if(u===null)u=H.je(this,a,b,c,true,false,e).prototype
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
if(w[u][a])return w[u][a]}}var C={},H={j2:function j2(){},
jy:function(){return new P.hb("No element")},
cV:function(a,b,c,d){if(c-b<=32)H.lb(a,b,c,d)
else H.la(a,b,c,d)},
lb:function(a,b,c,d){var u,t,s,r,q
for(u=b+1;u<=c;++u){if(u<0||u>=a.length)return H.b(a,u)
t=a[u]
s=u
while(!0){if(s>b){r=s-1
if(r<0||r>=a.length)return H.b(a,r)
r=d.$2(a[r],t)
if(typeof r!=="number")return r.a7()
r=r>0}else r=!1
if(!r)break
q=s-1
if(q<0||q>=a.length)return H.b(a,q)
C.a.m(a,s,a[q])
s=q}C.a.m(a,s,t)}},
la:function(a2,a3,a4,a5){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=C.c.a5(a4-a3+1,6),d=a3+e,c=a4-e,b=C.c.a5(a3+a4,2),a=b-e,a0=b+e,a1=a2.length
if(d<0||d>=a1)return H.b(a2,d)
u=a2[d]
if(a<0||a>=a1)return H.b(a2,a)
t=a2[a]
if(b<0||b>=a1)return H.b(a2,b)
s=a2[b]
if(a0<0||a0>=a1)return H.b(a2,a0)
r=a2[a0]
if(c<0||c>=a1)return H.b(a2,c)
q=a2[c]
a1=a5.$2(u,t)
if(typeof a1!=="number")return a1.a7()
if(a1>0){p=t
t=u
u=p}a1=a5.$2(r,q)
if(typeof a1!=="number")return a1.a7()
if(a1>0){p=q
q=r
r=p}a1=a5.$2(u,s)
if(typeof a1!=="number")return a1.a7()
if(a1>0){p=s
s=u
u=p}a1=a5.$2(t,s)
if(typeof a1!=="number")return a1.a7()
if(a1>0){p=s
s=t
t=p}a1=a5.$2(u,r)
if(typeof a1!=="number")return a1.a7()
if(a1>0){p=r
r=u
u=p}a1=a5.$2(s,r)
if(typeof a1!=="number")return a1.a7()
if(a1>0){p=r
r=s
s=p}a1=a5.$2(t,q)
if(typeof a1!=="number")return a1.a7()
if(a1>0){p=q
q=t
t=p}a1=a5.$2(t,s)
if(typeof a1!=="number")return a1.a7()
if(a1>0){p=s
s=t
t=p}a1=a5.$2(r,q)
if(typeof a1!=="number")return a1.a7()
if(a1>0){p=q
q=r
r=p}C.a.m(a2,d,u)
C.a.m(a2,b,s)
C.a.m(a2,c,q)
if(a3<0||a3>=a2.length)return H.b(a2,a3)
C.a.m(a2,a,a2[a3])
if(a4<0||a4>=a2.length)return H.b(a2,a4)
C.a.m(a2,a0,a2[a4])
o=a3+1
n=a4-1
if(J.w(a5.$2(t,r),0)){for(m=o;m<=n;++m){if(m>=a2.length)return H.b(a2,m)
l=a2[m]
k=a5.$2(l,t)
if(k===0)continue
if(typeof k!=="number")return k.ah()
if(k<0){if(m!==o){if(o>=a2.length)return H.b(a2,o)
C.a.m(a2,m,a2[o])
C.a.m(a2,o,l)}++o}else for(;!0;){if(n<0||n>=a2.length)return H.b(a2,n)
k=a5.$2(a2[n],t)
if(typeof k!=="number")return k.a7()
if(k>0){--n
continue}else{j=n-1
a1=a2.length
if(k<0){if(o>=a1)return H.b(a2,o)
C.a.m(a2,m,a2[o])
i=o+1
if(n>=a2.length)return H.b(a2,n)
C.a.m(a2,o,a2[n])
C.a.m(a2,n,l)
n=j
o=i
break}else{if(n>=a1)return H.b(a2,n)
C.a.m(a2,m,a2[n])
C.a.m(a2,n,l)
n=j
break}}}}h=!0}else{for(m=o;m<=n;++m){if(m>=a2.length)return H.b(a2,m)
l=a2[m]
g=a5.$2(l,t)
if(typeof g!=="number")return g.ah()
if(g<0){if(m!==o){if(o>=a2.length)return H.b(a2,o)
C.a.m(a2,m,a2[o])
C.a.m(a2,o,l)}++o}else{f=a5.$2(l,r)
if(typeof f!=="number")return f.a7()
if(f>0)for(;!0;){if(n<0||n>=a2.length)return H.b(a2,n)
k=a5.$2(a2[n],r)
if(typeof k!=="number")return k.a7()
if(k>0){--n
if(n<m)break
continue}else{if(n>=a2.length)return H.b(a2,n)
k=a5.$2(a2[n],t)
if(typeof k!=="number")return k.ah()
j=n-1
a1=a2.length
if(k<0){if(o>=a1)return H.b(a2,o)
C.a.m(a2,m,a2[o])
i=o+1
if(n>=a2.length)return H.b(a2,n)
C.a.m(a2,o,a2[n])
C.a.m(a2,n,l)
o=i}else{if(n>=a1)return H.b(a2,n)
C.a.m(a2,m,a2[n])
C.a.m(a2,n,l)}n=j
break}}}}h=!1}a1=o-1
if(a1>=a2.length)return H.b(a2,a1)
C.a.m(a2,a3,a2[a1])
C.a.m(a2,a1,t)
a1=n+1
if(a1<0||a1>=a2.length)return H.b(a2,a1)
C.a.m(a2,a4,a2[a1])
C.a.m(a2,a1,r)
H.cV(a2,a3,o-2,a5)
H.cV(a2,n+2,a4,a5)
if(h)return
if(o<d&&n>c){while(!0){if(o>=a2.length)return H.b(a2,o)
if(!J.w(a5.$2(a2[o],t),0))break;++o}while(!0){if(n<0||n>=a2.length)return H.b(a2,n)
if(!J.w(a5.$2(a2[n],r),0))break;--n}for(m=o;m<=n;++m){if(m>=a2.length)return H.b(a2,m)
l=a2[m]
if(a5.$2(l,t)===0){if(m!==o){if(o>=a2.length)return H.b(a2,o)
C.a.m(a2,m,a2[o])
C.a.m(a2,o,l)}++o}else if(a5.$2(l,r)===0)for(;!0;){if(n<0||n>=a2.length)return H.b(a2,n)
if(a5.$2(a2[n],r)===0){--n
if(n<m)break
continue}else{if(n>=a2.length)return H.b(a2,n)
k=a5.$2(a2[n],t)
if(typeof k!=="number")return k.ah()
j=n-1
a1=a2.length
if(k<0){if(o>=a1)return H.b(a2,o)
C.a.m(a2,m,a2[o])
i=o+1
if(n>=a2.length)return H.b(a2,n)
C.a.m(a2,o,a2[n])
C.a.m(a2,n,l)
o=i}else{if(n>=a1)return H.b(a2,n)
C.a.m(a2,m,a2[n])
C.a.m(a2,n,l)}n=j
break}}}H.cV(a2,o,n,a5)}else H.cV(a2,o,n,a5)},
K:function K(a){this.a=a},
eG:function eG(){},
cC:function cC(a,b){var _=this
_.a=a
_.b=b
_.c=0
_.d=null},
fa:function fa(a,b,c){this.a=a
this.b=b
this.$ti=c},
fb:function fb(a,b){this.a=null
this.b=a
this.c=b},
i3:function i3(a,b,c){this.a=a
this.b=b
this.$ti=c},
i4:function i4(a,b){this.a=a
this.b=b},
cs:function cs(){},
hJ:function hJ(){},
d8:function d8(){},
e7:function(a){var u,t=H.mp(a)
if(typeof t==="string")return t
u="minified:"+a
return u},
m9:function(a){return v.types[a]},
me:function(a,b){var u
if(b!=null){u=b.x
if(u!=null)return u}return!!J.U(a).$iu},
e:function(a){var u
if(typeof a==="string")return a
if(typeof a==="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
u=J.a3(a)
if(typeof u!=="string")throw H.f(H.b8(a))
return u},
bS:function(a){var u=a.$identityHash
if(u==null){u=Math.random()*0x3fffffff|0
a.$identityHash=u}return u},
bT:function(a){return H.kX(a)+H.k5(H.cc(a),0,null)},
kX:function(a){var u,t,s,r,q,p,o,n=J.U(a),m=n.constructor
if(typeof m=="function"){u=m.name
t=typeof u==="string"?u:null}else t=null
s=t==null
if(s||n===C.F||!!n.$ibZ){r=C.m(a)
if(s)t=r
if(r==="Object"){q=a.constructor
if(typeof q=="function"){p=String(q).match(/^\s*function\s*([\w$]*)\s*\(/)
o=p==null?null:p[1]
if(typeof o==="string"&&/^\w+$/.test(o))t=o}}return t}t=t
return H.e7(t.length>1&&C.d.b6(t,0)===36?C.d.aJ(t,1):t)},
jM:function(a){var u,t,s,r,q=a.length
if(q<=500)return String.fromCharCode.apply(null,a)
for(u="",t=0;t<q;t=s){s=t+500
r=s<q?s:q
u+=String.fromCharCode.apply(null,a.slice(t,r))}return u},
l5:function(a){var u,t,s,r=H.c([],[P.x])
for(u=a.length,t=0;t<a.length;a.length===u||(0,H.n)(a),++t){s=a[t]
if(typeof s!=="number"||Math.floor(s)!==s)throw H.f(H.b8(s))
if(s<=65535)r.push(s)
else if(s<=1114111){r.push(55296+(C.c.b8(s-65536,10)&1023))
r.push(56320+(s&1023))}else throw H.f(H.b8(s))}return H.jM(r)},
jN:function(a){var u,t,s
for(u=a.length,t=0;t<u;++t){s=a[t]
if(typeof s!=="number"||Math.floor(s)!==s)throw H.f(H.b8(s))
if(s<0)throw H.f(H.b8(s))
if(s>65535)return H.l5(a)}return H.jM(a)},
l4:function(a){var u
if(a<=65535)return String.fromCharCode(a)
if(a<=1114111){u=a-65536
return String.fromCharCode((55296|C.c.b8(u,10))>>>0,56320|u&1023)}throw H.f(P.ao(a,0,1114111,null,null))},
bm:function(a){if(a.date===void 0)a.date=new Date(a.a)
return a.date},
l3:function(a){var u=H.bm(a).getFullYear()+0
return u},
l1:function(a){var u=H.bm(a).getMonth()+1
return u},
kY:function(a){var u=H.bm(a).getDate()+0
return u},
kZ:function(a){var u=H.bm(a).getHours()+0
return u},
l0:function(a){var u=H.bm(a).getMinutes()+0
return u},
l2:function(a){var u=H.bm(a).getSeconds()+0
return u},
l_:function(a){var u=H.bm(a).getMilliseconds()+0
return u},
t:function(a){throw H.f(H.b8(a))},
b:function(a,b){if(a==null)J.bz(a)
throw H.f(H.bv(a,b))},
bv:function(a,b){var u,t,s="index"
if(typeof b!=="number"||Math.floor(b)!==b)return new P.ah(!0,b,s,null)
u=J.bz(a)
if(!(b<0)){if(typeof u!=="number")return H.t(u)
t=b>=u}else t=!0
if(t)return P.E(b,a,s,null,u)
return P.cQ(b,s)},
m2:function(a,b,c){var u="Invalid value"
if(a>c)return new P.bn(0,c,!0,a,"start",u)
if(b!=null)if(b<a||b>c)return new P.bn(a,c,!0,b,"end",u)
return new P.ah(!0,b,"end",null)},
b8:function(a){return new P.ah(!0,a,null,null)},
lY:function(a){if(typeof a!=="number")throw H.f(H.b8(a))
return a},
f:function(a){var u
if(a==null)a=new P.cN()
u=new Error()
u.dartException=a
if("defineProperty" in Object){Object.defineProperty(u,"message",{get:H.kk})
u.name=""}else u.toString=H.kk
return u},
kk:function(){return J.a3(this.dartException)},
p:function(a){throw H.f(a)},
n:function(a){throw H.f(P.bD(a))},
ap:function(a){var u,t,s,r,q,p
a=H.kh(a.replace(String({}),'$receiver$'))
u=a.match(/\\\$[a-zA-Z]+\\\$/g)
if(u==null)u=H.c([],[P.r])
t=u.indexOf("\\$arguments\\$")
s=u.indexOf("\\$argumentsExpr\\$")
r=u.indexOf("\\$expr\\$")
q=u.indexOf("\\$method\\$")
p=u.indexOf("\\$receiver\\$")
return new H.hy(a.replace(new RegExp('\\\\\\$arguments\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$argumentsExpr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$expr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$method\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$receiver\\\\\\$','g'),'((?:x|[^x])*)'),t,s,r,q,p)},
hz:function(a){return function($expr$){var $argumentsExpr$='$arguments$'
try{$expr$.$method$($argumentsExpr$)}catch(u){return u.message}}(a)},
jW:function(a){return function($expr$){try{$expr$.$method$}catch(u){return u.message}}(a)},
jH:function(a,b){return new H.fG(a,b==null?null:b.method)},
j3:function(a,b){var u=b==null,t=u?null:b.method
return new H.f_(a,t,u?null:b.receiver)},
iO:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=null,f=new H.iP(a)
if(a==null)return
if(typeof a!=="object")return a
if("dartException" in a)return f.$1(a.dartException)
else if(!("message" in a))return a
u=a.message
if("number" in a&&typeof a.number=="number"){t=a.number
s=t&65535
if((C.c.b8(t,16)&8191)===10)switch(s){case 438:return f.$1(H.j3(H.e(u)+" (Error "+s+")",g))
case 445:case 5007:return f.$1(H.jH(H.e(u)+" (Error "+s+")",g))}}if(a instanceof TypeError){r=$.kn()
q=$.ko()
p=$.kp()
o=$.kq()
n=$.kt()
m=$.ku()
l=$.ks()
$.kr()
k=$.kw()
j=$.kv()
i=r.ad(u)
if(i!=null)return f.$1(H.j3(u,i))
else{i=q.ad(u)
if(i!=null){i.method="call"
return f.$1(H.j3(u,i))}else{i=p.ad(u)
if(i==null){i=o.ad(u)
if(i==null){i=n.ad(u)
if(i==null){i=m.ad(u)
if(i==null){i=l.ad(u)
if(i==null){i=o.ad(u)
if(i==null){i=k.ad(u)
if(i==null){i=j.ad(u)
h=i!=null}else h=!0}else h=!0}else h=!0}else h=!0}else h=!0}else h=!0}else h=!0
if(h)return f.$1(H.jH(u,i))}}return f.$1(new H.hI(typeof u==="string"?u:""))}if(a instanceof RangeError){if(typeof u==="string"&&u.indexOf("call stack")!==-1)return new P.cX()
u=function(b){try{return String(b)}catch(e){}return null}(a)
return f.$1(new P.ah(!1,g,g,typeof u==="string"?u.replace(/^RangeError:\s*/,""):u))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof u==="string"&&u==="too much recursion")return new P.cX()
return a},
jh:function(a){var u
if(a==null)return new H.dL(a)
u=a.$cachedTrace
if(u!=null)return u
return a.$cachedTrace=new H.dL(a)},
m6:function(a,b){var u,t,s,r=a.length
for(u=0;u<r;u=s){t=u+1
s=t+1
b.m(0,a[u],a[t])}return b},
md:function(a,b,c,d,e,f){switch(b){case 0:return a.$0()
case 1:return a.$1(c)
case 2:return a.$2(c,d)
case 3:return a.$3(c,d,e)
case 4:return a.$4(c,d,e,f)}throw H.f(P.m("Unsupported number of arguments for wrapped closure"))},
bu:function(a,b){var u
if(a==null)return
u=a.$identity
if(!!u)return u
u=function(c,d,e){return function(f,g,h,i){return e(c,d,f,g,h,i)}}(a,b,H.md)
a.$identity=u
return u},
kJ:function(a,b,c,d,e,f,g){var u,t,s,r,q,p,o,n,m=null,l=b[0],k=l.$callName,j=e?Object.create(new H.hc().constructor.prototype):Object.create(new H.bA(m,m,m,m).constructor.prototype)
j.$initialize=j.constructor
if(e)u=function static_tear_off(){this.$initialize()}
else{t=$.ai
if(typeof t!=="number")return t.B()
$.ai=t+1
t=new Function("a,b,c,d"+t,"this.$initialize(a,b,c,d"+t+")")
u=t}j.constructor=u
u.prototype=j
if(!e){s=H.jt(a,l,f)
s.$reflectionInfo=d}else{j.$static_name=g
s=l}r=H.kF(d,e,f)
j.$S=r
j[k]=s
for(q=s,p=1;p<b.length;++p){o=b[p]
n=o.$callName
if(n!=null){o=e?o:H.jt(a,o,f)
j[n]=o}if(p===c){o.$reflectionInfo=d
q=o}}j.$C=q
j.$R=l.$R
j.$D=l.$D
return u},
kF:function(a,b,c){var u
if(typeof a=="number")return function(d,e){return function(){return d(e)}}(H.m9,a)
if(typeof a=="function")if(b)return a
else{u=c?H.js:H.iR
return function(d,e){return function(){return d.apply({$receiver:e(this)},arguments)}}(a,u)}throw H.f("Error in functionType of tearoff")},
kG:function(a,b,c,d){var u=H.iR
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,u)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,u)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,u)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,u)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,u)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,u)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,u)}},
jt:function(a,b,c){var u,t,s,r,q,p,o
if(c)return H.kI(a,b)
u=b.$stubName
t=b.length
s=a[u]
r=b==null?s==null:b===s
q=!r||t>=27
if(q)return H.kG(t,!r,u,b)
if(t===0){r=$.ai
if(typeof r!=="number")return r.B()
$.ai=r+1
p="self"+r
r="return function(){var "+p+" = this."
q=$.bB
return new Function(r+H.e(q==null?$.bB=H.ek("self"):q)+";return "+p+"."+H.e(u)+"();}")()}o="abcdefghijklmnopqrstuvwxyz".split("").splice(0,t).join(",")
r=$.ai
if(typeof r!=="number")return r.B()
$.ai=r+1
o+=r
r="return function("+o+"){return this."
q=$.bB
return new Function(r+H.e(q==null?$.bB=H.ek("self"):q)+"."+H.e(u)+"("+o+");}")()},
kH:function(a,b,c,d){var u=H.iR,t=H.js
switch(b?-1:a){case 0:throw H.f(H.l8("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,u,t)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,u,t)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,u,t)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,u,t)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,u,t)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,u,t)
default:return function(e,f,g,h){return function(){h=[g(this)]
Array.prototype.push.apply(h,arguments)
return e.apply(f(this),h)}}(d,u,t)}},
kI:function(a,b){var u,t,s,r,q,p,o,n=$.bB
if(n==null)n=$.bB=H.ek("self")
u=$.jr
if(u==null)u=$.jr=H.ek("receiver")
t=b.$stubName
s=b.length
r=a[t]
q=b==null?r==null:b===r
p=!q||s>=28
if(p)return H.kH(s,!q,t,b)
if(s===1){n="return function(){return this."+H.e(n)+"."+H.e(t)+"(this."+H.e(u)+");"
u=$.ai
if(typeof u!=="number")return u.B()
$.ai=u+1
return new Function(n+u+"}")()}o="abcdefghijklmnopqrstuvwxyz".split("").splice(0,s-1).join(",")
n="return function("+o+"){return this."+H.e(n)+"."+H.e(t)+"(this."+H.e(u)+", "+o+");"
u=$.ai
if(typeof u!=="number")return u.B()
$.ai=u+1
return new Function(n+u+"}")()},
je:function(a,b,c,d,e,f,g){return H.kJ(a,b,c,d,!!e,!!f,g)},
iR:function(a){return a.a},
js:function(a){return a.c},
ek:function(a){var u,t,s,r=new H.bA("self","target","receiver","name"),q=J.j0(Object.getOwnPropertyNames(r))
for(u=q.length,t=0;t<u;++t){s=q[t]
if(r[s]===a)return s}},
mi:function(a,b){throw H.f(H.kE(a,H.e7(b.substring(2))))},
h:function(a,b){var u
if(a!=null)u=(typeof a==="object"||typeof a==="function")&&J.U(a)[b]
else u=!0
if(u)return a
H.mi(a,b)},
m4:function(a){var u
if("$S" in a){u=a.$S
if(typeof u=="number")return v.types[u]
else return a.$S()}return},
kE:function(a,b){return new H.el("CastError: "+P.iY(a)+": type '"+H.e(H.lU(a))+"' is not a subtype of type '"+b+"'")},
lU:function(a){var u,t=J.U(a)
if(!!t.$ibC){u=H.m4(t)
if(u!=null)return H.mj(u)
return"Closure"}return H.bT(a)},
mn:function(a){throw H.f(new P.ex(a))},
l8:function(a){return new H.fW(a)},
kb:function(a){return v.getIsolateTag(a)},
c:function(a,b){a.$ti=b
return a},
cc:function(a){if(a==null)return
return a.$ti},
mV:function(a,b,c){return H.iL(a["$a"+H.e(c)],H.cc(b))},
m8:function(a,b,c,d){var u=H.iL(a["$a"+H.e(c)],H.cc(b))
return u==null?null:u[d]},
kc:function(a,b,c){var u=H.iL(a["$a"+H.e(b)],H.cc(a))
return u==null?null:u[c]},
e6:function(a,b){var u=H.cc(a)
return u==null?null:u[b]},
mj:function(a){return H.b7(a,null)},
b7:function(a,b){var u,t
if(a==null)return"dynamic"
if(a===-1)return"void"
if(typeof a==="object"&&a!==null&&a.constructor===Array)return H.e7(a[0].name)+H.k5(a,1,b)
if(typeof a=="function")return H.e7(a.name)
if(a===-2)return"dynamic"
if(typeof a==="number"){if(b==null||a<0||a>=b.length)return"unexpected-generic-index:"+H.e(a)
u=b.length
t=u-a-1
if(t<0||t>=u)return H.b(b,t)
return H.e(b[t])}if('func' in a)return H.ls(a,b)
if('futureOr' in a)return"FutureOr<"+H.b7("type" in a?a.type:null,b)+">"
return"unknown-reified-type"},
ls:function(a,a0){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b=", "
if("bounds" in a){u=a.bounds
if(a0==null){a0=H.c([],[P.r])
t=null}else t=a0.length
s=a0.length
for(r=u.length,q=r;q>0;--q)a0.push("T"+(s+q))
for(p="<",o="",q=0;q<r;++q,o=b){p+=o
n=a0.length
m=n-q-1
if(m<0)return H.b(a0,m)
p=C.d.B(p,a0[m])
l=u[q]
if(l!=null&&l!==P.Z)p+=" extends "+H.b7(l,a0)}p+=">"}else{p=""
t=null}k=!!a.v?"void":H.b7(a.ret,a0)
if("args" in a){j=a.args
for(n=j.length,i="",h="",g=0;g<n;++g,h=b){f=j[g]
i=i+h+H.b7(f,a0)}}else{i=""
h=""}if("opt" in a){e=a.opt
i+=h+"["
for(n=e.length,h="",g=0;g<n;++g,h=b){f=e[g]
i=i+h+H.b7(f,a0)}i+="]"}if("named" in a){d=a.named
i+=h+"{"
for(n=H.m5(d),m=n.length,h="",g=0;g<m;++g,h=b){c=n[g]
i=i+h+H.b7(d[c],a0)+(" "+H.e(c))}i+="}"}if(t!=null)a0.length=t
return p+"("+i+") => "+k},
k5:function(a,b,c){var u,t,s,r,q,p
if(a==null)return""
u=new P.aW("")
for(t=b,s="",r=!0,q="";t<a.length;++t,s=", "){u.a=q+s
p=a[t]
if(p!=null)r=!1
q=u.a+=H.b7(p,c)}return"<"+u.i(0)+">"},
iL:function(a,b){if(a==null)return b
a=a.apply(null,b)
if(a==null)return
if(typeof a==="object"&&a!==null&&a.constructor===Array)return a
if(typeof a=="function")return a.apply(null,b)
return b},
mT:function(a,b,c){return a.apply(b,H.iL(J.U(b)["$a"+H.e(c)],H.cc(b)))},
mU:function(a,b,c){Object.defineProperty(a,b,{value:c,enumerable:false,writable:true,configurable:true})},
mf:function(a){var u,t,s,r,q=$.kd.$1(a),p=$.iD[q]
if(p!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}u=$.iI[q]
if(u!=null)return u
t=v.interceptorsByTag[q]
if(t==null){q=$.k8.$2(a,q)
if(q!=null){p=$.iD[q]
if(p!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}u=$.iI[q]
if(u!=null)return u
t=v.interceptorsByTag[q]}}if(t==null)return
u=t.prototype
s=q[0]
if(s==="!"){p=H.iJ(u)
$.iD[q]=p
Object.defineProperty(a,v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}if(s==="~"){$.iI[q]=u
return u}if(s==="-"){r=H.iJ(u)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:r,enumerable:false,writable:true,configurable:true})
return r.i}if(s==="+")return H.kf(a,u)
if(s==="*")throw H.f(P.jX(q))
if(v.leafTags[q]===true){r=H.iJ(u)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:r,enumerable:false,writable:true,configurable:true})
return r.i}else return H.kf(a,u)},
kf:function(a,b){var u=Object.getPrototypeOf(a)
Object.defineProperty(u,v.dispatchPropertyName,{value:J.jj(b,u,null,null),enumerable:false,writable:true,configurable:true})
return b},
iJ:function(a){return J.jj(a,!1,null,!!a.$iu)},
mg:function(a,b,c){var u=b.prototype
if(v.leafTags[a]===true)return H.iJ(u)
else return J.jj(u,c,null,null)},
mb:function(){if(!0===$.ji)return
$.ji=!0
H.mc()},
mc:function(){var u,t,s,r,q,p,o,n
$.iD=Object.create(null)
$.iI=Object.create(null)
H.ma()
u=v.interceptorsByTag
t=Object.getOwnPropertyNames(u)
if(typeof window!="undefined"){window
s=function(){}
for(r=0;r<t.length;++r){q=t[r]
p=$.kg.$1(q)
if(p!=null){o=H.mg(q,u[q],p)
if(o!=null){Object.defineProperty(p,v.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
s.prototype=p}}}}for(r=0;r<t.length;++r){q=t[r]
if(/^[A-Za-z_]/.test(q)){n=u[q]
u["!"+q]=n
u["~"+q]=n
u["-"+q]=n
u["+"+q]=n
u["*"+q]=n}}},
ma:function(){var u,t,s,r,q,p,o=C.u()
o=H.bt(C.v,H.bt(C.w,H.bt(C.n,H.bt(C.n,H.bt(C.x,H.bt(C.y,H.bt(C.z(C.m),o)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){u=dartNativeDispatchHooksTransformer
if(typeof u=="function")u=[u]
if(u.constructor==Array)for(t=0;t<u.length;++t){s=u[t]
if(typeof s=="function")o=s(o)||o}}r=o.getTag
q=o.getUnknownTag
p=o.prototypeForTag
$.kd=new H.iF(r)
$.k8=new H.iG(q)
$.kg=new H.iH(p)},
bt:function(a,b){return a(b)||b},
kP:function(a,b,c,d,e,f){var u=b?"m":"",t=c?"":"i",s=d?"u":"",r=e?"s":"",q=f?"g":"",p=function(g,h){try{return new RegExp(g,h)}catch(o){return o}}(a,u+t+s+r+q)
if(p instanceof RegExp)return p
throw H.f(new P.eS("Illegal RegExp pattern ("+String(p)+")",a))},
ml:function(a,b,c){var u=a.indexOf(b,c)
return u>=0},
m3:function(a){if(a.indexOf("$",0)>=0)return a.replace(/\$/g,"$$$$")
return a},
kh:function(a){if(/[[\]{}()*+?.\\^$|]/.test(a))return a.replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
return a},
ki:function(a,b,c){var u=H.mm(a,b,c)
return u},
mm:function(a,b,c){var u,t,s,r
if(b===""){if(a==="")return c
u=a.length
for(t=c,s=0;s<u;++s)t=t+a[s]+c
return t.charCodeAt(0)==0?t:t}r=a.indexOf(b,0)
if(r<0)return a
if(a.length<500||c.indexOf("$",0)>=0)return a.split(b).join(c)
return a.replace(new RegExp(H.kh(b),'g'),H.m3(c))},
hy:function hy(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
fG:function fG(a,b){this.a=a
this.b=b},
f_:function f_(a,b,c){this.a=a
this.b=b
this.c=c},
hI:function hI(a){this.a=a},
iP:function iP(a){this.a=a},
dL:function dL(a){this.a=a
this.b=null},
bC:function bC(){},
hi:function hi(){},
hc:function hc(){},
bA:function bA(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
el:function el(a){this.a=a},
fW:function fW(a){this.a=a},
I:function I(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
f3:function f3(a,b){this.a=a
this.b=b
this.c=null},
cB:function cB(a,b){this.a=a
this.$ti=b},
f4:function f4(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
iF:function iF(a){this.a=a},
iG:function iG(a){this.a=a},
iH:function iH(a){this.a=a},
eZ:function eZ(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
br:function(a){return a},
b6:function(a,b,c){if(a>>>0!==a||a>=c)throw H.f(H.bv(b,a))},
lr:function(a,b,c){var u
if(!(a>>>0!==a))u=b>>>0!==b||a>b||b>c
else u=!0
if(u)throw H.f(H.m2(a,b,c))
return b},
bP:function bP(){},
cI:function cI(){},
bO:function bO(){},
cJ:function cJ(){},
fx:function fx(){},
fy:function fy(){},
fz:function fz(){},
fA:function fA(){},
fB:function fB(){},
cK:function cK(){},
fC:function fC(){},
c1:function c1(){},
c2:function c2(){},
c3:function c3(){},
c4:function c4(){},
m5:function(a){return J.jz(a?Object.keys(a):[],null)},
mp:function(a){return v.mangledGlobalNames[a]},
mh:function(a){if(typeof dartPrint=="function"){dartPrint(a)
return}if(typeof console=="object"&&typeof console.log!="undefined"){console.log(a)
return}if(typeof window=="object")return
if(typeof print=="function"){print(a)
return}throw"Unable to print message: "+String(a)}},J={
jj:function(a,b,c,d){return{i:a,p:b,e:c,x:d}},
iE:function(a){var u,t,s,r,q=a[v.dispatchPropertyName]
if(q==null)if($.ji==null){H.mb()
q=a[v.dispatchPropertyName]}if(q!=null){u=q.p
if(!1===u)return q.i
if(!0===u)return a
t=Object.getPrototypeOf(a)
if(u===t)return q.i
if(q.e===t)throw H.f(P.jX("Return interceptor for "+H.e(u(a,q))))}s=a.constructor
r=s==null?null:s[$.jl()]
if(r!=null)return r
r=H.mf(a)
if(r!=null)return r
if(typeof a=="function")return C.H
u=Object.getPrototypeOf(a)
if(u==null)return C.p
if(u===Object.prototype)return C.p
if(typeof s=="function"){Object.defineProperty(s,$.jl(),{value:C.l,enumerable:false,writable:true,configurable:true})
return C.l}return C.l},
kO:function(a,b){if(typeof a!=="number"||Math.floor(a)!==a)throw H.f(P.jp(a,"length","is not an integer"))
if(a<0||a>4294967295)throw H.f(P.ao(a,0,4294967295,"length",null))
return J.jz(new Array(a),b)},
jz:function(a,b){return J.j0(H.c(a,[b]))},
j0:function(a){a.fixed$length=Array
return a},
U:function(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.cw.prototype
return J.cv.prototype}if(typeof a=="string")return J.bh.prototype
if(a==null)return J.cx.prototype
if(typeof a=="boolean")return J.eY.prototype
if(a.constructor==Array)return J.aN.prototype
if(typeof a!="object"){if(typeof a=="function")return J.aO.prototype
return a}if(a instanceof P.Z)return a
return J.iE(a)},
jf:function(a){if(typeof a=="string")return J.bh.prototype
if(a==null)return a
if(a.constructor==Array)return J.aN.prototype
if(typeof a!="object"){if(typeof a=="function")return J.aO.prototype
return a}if(a instanceof P.Z)return a
return J.iE(a)},
jg:function(a){if(a==null)return a
if(a.constructor==Array)return J.aN.prototype
if(typeof a!="object"){if(typeof a=="function")return J.aO.prototype
return a}if(a instanceof P.Z)return a
return J.iE(a)},
ka:function(a){if(typeof a=="number")return J.bJ.prototype
if(typeof a=="string")return J.bh.prototype
if(a==null)return a
if(!(a instanceof P.Z))return J.bZ.prototype
return a},
m7:function(a){if(a==null)return a
if(typeof a!="object"){if(typeof a=="function")return J.aO.prototype
return a}if(a instanceof P.Z)return a
return J.iE(a)},
w:function(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.U(a).n(a,b)},
jn:function(a,b){if(typeof a=="number"&&typeof b=="number")return a*b
return J.ka(a).u(a,b)},
e8:function(a,b){if(typeof b==="number")if(a.constructor==Array||typeof a=="string"||H.me(a,a[v.dispatchPropertyName]))if(b>>>0===b&&b<a.length)return a[b]
return J.jf(a).h(a,b)},
kB:function(a,b,c,d){return J.m7(a).fp(a,b,c,d)},
iQ:function(a,b){return J.ka(a).fB(a,b)},
jo:function(a,b){return J.jg(a).G(a,b)},
kC:function(a,b){return J.jg(a).K(a,b)},
ba:function(a){return J.U(a).gI(a)},
by:function(a){return J.jg(a).gR(a)},
bz:function(a){return J.jf(a).gj(a)},
a3:function(a){return J.U(a).i(a)},
a:function a(){},
eY:function eY(){},
cx:function cx(){},
cy:function cy(){},
fK:function fK(){},
bZ:function bZ(){},
aO:function aO(){},
aN:function aN(a){this.$ti=a},
j1:function j1(a){this.$ti=a},
W:function W(a,b){var _=this
_.a=a
_.b=b
_.c=0
_.d=null},
bJ:function bJ(){},
cw:function cw(){},
cv:function cv(){},
bh:function bh(){}},P={
li:function(){var u,t,s={}
if(self.scheduleImmediate!=null)return P.lV()
if(self.MutationObserver!=null&&self.document!=null){u=self.document.createElement("div")
t=self.document.createElement("span")
s.a=null
new self.MutationObserver(H.bu(new P.i6(s),1)).observe(u,{childList:true})
return new P.i5(s,u,t)}else if(self.setImmediate!=null)return P.lW()
return P.lX()},
lj:function(a){self.scheduleImmediate(H.bu(new P.i7(a),0))},
lk:function(a){self.setImmediate(H.bu(new P.i8(a),0))},
ll:function(a){P.j7(C.j,a)},
j7:function(a,b){var u=C.c.a5(a.a,1000)
return P.lo(u<0?0:u,b)},
jV:function(a,b){var u=C.c.a5(a.a,1000)
return P.lp(u<0?0:u,b)},
lo:function(a,b){var u=new P.dR()
u.dL(a,b)
return u},
lp:function(a,b){var u=new P.dR()
u.dM(a,b)
return u},
lO:function(){var u,t
for(;u=$.bs,u!=null;){$.cb=null
t=u.b
$.bs=t
if(t==null)$.ca=null
u.a.$0()}},
lT:function(){$.jc=!0
try{P.lO()}finally{$.cb=null
$.jc=!1
if($.bs!=null)$.jm().$1(P.k9())}},
lR:function(a){var u=new P.dd(a)
if($.bs==null){$.bs=$.ca=u
if(!$.jc)$.jm().$1(P.k9())}else $.ca=$.ca.b=u},
lS:function(a){var u,t,s=$.bs
if(s==null){P.lR(a)
$.cb=$.ca
return}u=new P.dd(a)
t=$.cb
if(t==null){u.b=s
$.bs=$.cb=u}else{u.b=t.b
$.cb=t.b=u
if(u.b==null)$.ca=u}},
jU:function(a,b){var u=$.ad
if(u===C.e)return P.j7(a,b)
return P.j7(a,u.fz(b))},
lg:function(a,b){var u=$.ad
if(u===C.e)return P.jV(a,b)
return P.jV(a,u.cH(b,P.d2))},
k6:function(a,b,c,d,e){var u={}
u.a=d
P.lS(new P.iA(u,e))},
lP:function(a,b,c,d){var u,t=$.ad
if(t===c)return d.$0()
$.ad=c
u=t
try{t=d.$0()
return t}finally{$.ad=u}},
lQ:function(a,b,c,d,e){var u,t=$.ad
if(t===c)return d.$1(e)
$.ad=c
u=t
try{t=d.$1(e)
return t}finally{$.ad=u}},
i6:function i6(a){this.a=a},
i5:function i5(a,b,c){this.a=a
this.b=b
this.c=c},
i7:function i7(a){this.a=a},
i8:function i8(a){this.a=a},
dR:function dR(){this.c=0},
it:function it(a,b){this.a=a
this.b=b},
is:function is(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
dd:function dd(a){this.a=a
this.b=null},
cZ:function cZ(){},
hf:function hf(){},
d2:function d2(){},
iv:function iv(){},
iA:function iA(a,b){this.a=a
this.b=b},
il:function il(){},
im:function im(a,b){this.a=a
this.b=b},
io:function io(a,b,c){this.a=a
this.b=b
this.c=c},
kR:function(a,b){return new H.I([a,b])},
kS:function(a){return H.m6(a,new H.I([null,null]))},
kT:function(a){return new P.ii([a])},
jb:function(){var u=Object.create(null)
u["<non-identifier-key>"]=u
delete u["<non-identifier-key>"]
return u},
ln:function(a,b){var u=new P.dt(a,b)
u.c=a.e
return u},
kN:function(a,b,c){var u,t
if(P.jd(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}u=H.c([],[P.r])
$.a0.push(a)
try{P.lt(a,u)}finally{if(0>=$.a0.length)return H.b($.a0,-1)
$.a0.pop()}t=P.jQ(b,u,", ")+c
return t.charCodeAt(0)==0?t:t},
j_:function(a,b,c){var u,t
if(P.jd(a))return b+"..."+c
u=new P.aW(b)
$.a0.push(a)
try{t=u
t.a=P.jQ(t.a,a,", ")}finally{if(0>=$.a0.length)return H.b($.a0,-1)
$.a0.pop()}u.a+=c
t=u.a
return t.charCodeAt(0)==0?t:t},
jd:function(a){var u,t
for(u=$.a0.length,t=0;t<u;++t)if(a===$.a0[t])return!0
return!1},
lt:function(a,b){var u,t,s,r,q,p,o,n=a.gR(a),m=0,l=0
while(!0){if(!(m<80||l<3))break
if(!n.A())return
u=H.e(n.gJ(n))
b.push(u)
m+=u.length+2;++l}if(!n.A()){if(l<=5)return
if(0>=b.length)return H.b(b,-1)
t=b.pop()
if(0>=b.length)return H.b(b,-1)
s=b.pop()}else{r=n.gJ(n);++l
if(!n.A()){if(l<=4){b.push(H.e(r))
return}t=H.e(r)
if(0>=b.length)return H.b(b,-1)
s=b.pop()
m+=t.length+2}else{q=n.gJ(n);++l
for(;n.A();r=q,q=p){p=n.gJ(n);++l
if(l>100){while(!0){if(!(m>75&&l>3))break
if(0>=b.length)return H.b(b,-1)
m-=b.pop().length+2;--l}b.push("...")
return}}s=H.e(r)
t=H.e(q)
m+=t.length+s.length+4}}if(l>b.length+2){m+=5
o="..."}else o=null
while(!0){if(!(m>80&&b.length>3))break
if(0>=b.length)return H.b(b,-1)
m-=b.pop().length+2
if(o==null){m+=5
o="..."}}if(o!=null)b.push(o)
b.push(s)
b.push(t)},
jB:function(a){var u,t={}
if(P.jd(a))return"{...}"
u=new P.aW("")
try{$.a0.push(a)
u.a+="{"
t.a=!0
J.kC(a,new P.f9(t,u))
u.a+="}"}finally{if(0>=$.a0.length)return H.b($.a0,-1)
$.a0.pop()}t=u.a
return t.charCodeAt(0)==0?t:t},
ii:function ii(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
ij:function ij(a){this.a=a
this.c=this.b=null},
dt:function dt(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
f5:function f5(){},
o:function o(){},
f8:function f8(){},
f9:function f9(a,b){this.a=a
this.b=b},
au:function au(){},
ip:function ip(){},
du:function du(){},
en:function en(){},
es:function es(){},
eH:function eH(){},
hM:function hM(){},
hN:function hN(){},
iu:function iu(a){this.b=0
this.c=a},
kM:function(a){if(a instanceof H.bC)return a.i(0)
return"Instance of '"+H.e(H.bT(a))+"'"},
kU:function(a,b,c){var u,t,s=J.kO(a,c)
if(a!==0&&!0)for(u=s.length,t=0;t<u;++t)s[t]=b
return s},
jA:function(a,b,c){var u,t=H.c([],[c])
for(u=J.by(a);u.A();)t.push(u.gJ(u))
if(b)return t
return J.j0(t)},
j6:function(a){var u,t
if(a.constructor===Array){u=a.length
t=P.jP(0,null,u)
return H.jN(t<u?C.a.dv(a,0,t):a)}return P.lc(a,0,null)},
lc:function(a,b,c){var u,t,s=J.by(a)
for(u=0;u<b;++u)if(!s.A())throw H.f(P.ao(b,0,u,null,null))
t=[]
for(;s.A();)t.push(s.gJ(s))
return H.jN(t)},
l6:function(a){return new H.eZ(a,H.kP(a,!1,!0,!1,!1,!1))},
jQ:function(a,b,c){var u=J.by(b)
if(!u.A())return a
if(c.length===0){do a+=H.e(u.gJ(u))
while(u.A())}else{a+=H.e(u.gJ(u))
for(;u.A();)a=a+c+H.e(u.gJ(u))}return a},
lq:function(a,b,c,d){var u,t,s,r,q,p,o="0123456789ABCDEF"
if(c===C.o){u=$.kA().b
u=u.test(b)}else u=!1
if(u)return b
t=C.B.fC(b)
for(u=t.length,s=0,r="";s<u;++s){q=t[s]
if(q<128){p=q>>>4
if(p>=8)return H.b(a,p)
p=(a[p]&1<<(q&15))!==0}else p=!1
if(p)r+=H.l4(q)
else r=r+"%"+o[q>>>4&15]+o[q&15]}return r.charCodeAt(0)==0?r:r},
kK:function(a){var u=Math.abs(a),t=a<0?"-":""
if(u>=1000)return""+a
if(u>=100)return t+"0"+u
if(u>=10)return t+"00"+u
return t+"000"+u},
kL:function(a){if(a>=100)return""+a
if(a>=10)return"0"+a
return"00"+a},
cn:function(a){if(a>=10)return""+a
return"0"+a},
jv:function(a){return new P.aF(1000*a)},
iY:function(a){if(typeof a==="number"||typeof a==="boolean"||null==a)return J.a3(a)
if(typeof a==="string")return JSON.stringify(a)
return P.kM(a)},
kD:function(a){return new P.ah(!1,null,null,a)},
jp:function(a,b,c){return new P.ah(!0,a,b,c)},
cQ:function(a,b){return new P.bn(null,null,!0,a,b,"Value not in range")},
ao:function(a,b,c,d,e){return new P.bn(b,c,!0,a,d,"Invalid value")},
jP:function(a,b,c){if(0>a||a>c)throw H.f(P.ao(a,0,c,"start",null))
if(b!=null){if(a>b||b>c)throw H.f(P.ao(b,a,c,"end",null))
return b}return c},
jO:function(a,b){if(typeof a!=="number")return a.ah()
if(a<0)throw H.f(P.ao(a,0,null,b,null))},
E:function(a,b,c,d,e){var u=e==null?J.bz(b):e
return new P.eW(u,!0,a,c,"Index out of range")},
a_:function(a){return new P.hK(a)},
jX:function(a){return new P.hH(a)},
bD:function(a){return new P.er(a)},
m:function(a){return new P.dl(a)},
jk:function(a){H.mh(a)},
b9:function b9(){},
a5:function a5(a,b){this.a=a
this.b=b},
G:function G(){},
aF:function aF(a){this.a=a},
eE:function eE(){},
eF:function eF(){},
bf:function bf(){},
cN:function cN(){},
ah:function ah(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
bn:function bn(a,b,c,d,e,f){var _=this
_.e=a
_.f=b
_.a=c
_.b=d
_.c=e
_.d=f},
eW:function eW(a,b,c,d,e){var _=this
_.f=a
_.a=b
_.b=c
_.c=d
_.d=e},
hK:function hK(a){this.a=a},
hH:function hH(a){this.a=a},
hb:function hb(a){this.a=a},
er:function er(a){this.a=a},
fJ:function fJ(){},
cX:function cX(){},
ex:function ex(a){this.a=a},
dl:function dl(a){this.a=a},
eS:function eS(a,b){this.a=a
this.b=b},
x:function x(){},
j:function j(){},
eX:function eX(){},
bk:function bk(){},
cE:function cE(){},
aR:function aR(){},
a9:function a9(){},
Z:function Z(){},
r:function r(){},
aW:function aW(a){this.a=a},
m0:function(a){var u,t=J.U(a)
if(!!t.$iaK){u=t.gcR(a)
if(u.constructor===Array)if(typeof CanvasPixelArray!=="undefined"){u.constructor=CanvasPixelArray
u.BYTES_PER_ELEMENT=1}return a}return new P.dW(a.data,a.height,a.width)},
m_:function(a){if(a instanceof P.dW)return{data:a.a,height:a.b,width:a.c}
return a},
aC:function(a){var u,t,s,r,q
if(a==null)return
u=P.kR(P.r,null)
t=Object.getOwnPropertyNames(a)
for(s=t.length,r=0;r<t.length;t.length===s||(0,H.n)(t),++r){q=t[r]
u.m(0,q,a[q])}return u},
lZ:function(a){var u={}
a.K(0,new P.iB(u))
return u},
dW:function dW(a,b,c){this.a=a
this.b=b
this.c=c},
iB:function iB(a){this.a=a},
eO:function eO(a,b){this.a=a
this.b=b},
eP:function eP(){},
eQ:function eQ(){},
ih:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
lm:function(a){a=536870911&a+((67108863&a)<<3)
a^=a>>>11
return 536870911&a+((16383&a)<<15)},
ik:function ik(){},
a7:function a7(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=e},
bj:function bj(){},
f1:function f1(){},
bl:function bl(){},
fH:function fH(){},
fO:function fO(){},
hg:function hg(){},
k:function k(){},
bp:function bp(){},
hx:function hx(){},
dr:function dr(){},
ds:function ds(){},
dC:function dC(){},
dD:function dD(){},
dN:function dN(){},
dO:function dO(){},
dU:function dU(){},
dV:function dV(){},
ee:function ee(){},
ef:function ef(){},
eg:function eg(a){this.a=a},
eh:function eh(){},
bb:function bb(){},
fI:function fI(){},
de:function de(){},
cS:function cS(){},
ha:function ha(){},
dJ:function dJ(){},
dK:function dK(){}},W={
iT:function(){var u=document.createElement("canvas")
return u},
iW:function(a){return"wheel"},
ig:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
k4:function(a,b,c,d){var u=W.ig(W.ig(W.ig(W.ig(0,a),b),c),d),t=536870911&u+((67108863&u)<<3)
t^=t>>>11
return 536870911&t+((16383&t)<<15)},
R:function(a,b,c,d){var u=W.k7(new W.id(c),W.i)
if(u!=null&&!0)J.kB(a,b,u,!1)
return new W.ic(a,b,u,!1)},
k7:function(a,b){var u=$.ad
if(u===C.e)return a
return u.cH(a,b)},
l:function l(){},
e9:function e9(){},
eb:function eb(){},
ec:function ec(){},
ch:function ch(){},
bc:function bc(){},
aE:function aE(){},
et:function et(){},
C:function C(){},
bE:function bE(){},
eu:function eu(){},
a4:function a4(){},
aj:function aj(){},
ev:function ev(){},
ew:function ew(){},
ey:function ey(){},
eB:function eB(){},
cp:function cp(){},
cq:function cq(){},
eC:function eC(){},
eD:function eD(){},
ia:function ia(a,b){this.a=a
this.b=b},
Y:function Y(){},
i:function i(){},
d:function d(){},
aI:function aI(){},
eM:function eM(){},
eN:function eN(){},
eR:function eR(){},
aJ:function aJ(){},
eU:function eU(){},
bH:function bH(){},
aK:function aK(){},
bI:function bI(){},
bi:function bi(){},
f6:function f6(){},
fq:function fq(){},
fr:function fr(){},
fs:function fs(a){this.a=a},
ft:function ft(){},
fu:function fu(a){this.a=a},
aP:function aP(){},
fv:function fv(){},
an:function an(){},
i9:function i9(a){this.a=a},
F:function F(){},
cL:function cL(){},
aS:function aS(){},
fL:function fL(){},
fU:function fU(){},
fV:function fV(a){this.a=a},
fX:function fX(){},
aT:function aT(){},
h7:function h7(){},
aU:function aU(){},
h8:function h8(){},
aV:function aV(){},
hd:function hd(){},
he:function he(a){this.a=a},
az:function az(){},
aX:function aX(){},
aA:function aA(){},
hj:function hj(){},
hk:function hk(){},
hs:function hs(){},
b_:function b_(){},
bo:function bo(){},
hv:function hv(){},
hw:function hw(){},
b0:function b0(){},
hL:function hL(){},
i2:function i2(){},
b5:function b5(){},
c0:function c0(){},
ib:function ib(){},
dg:function dg(){},
ie:function ie(){},
dz:function dz(){},
iq:function iq(){},
ir:function ir(){},
ic:function ic(a,b,c,d){var _=this
_.b=a
_.c=b
_.d=c
_.e=d},
id:function id(a){this.a=a},
D:function D(){},
ct:function ct(a,b){var _=this
_.a=a
_.b=b
_.c=-1
_.d=null},
df:function df(){},
dh:function dh(){},
di:function di(){},
dj:function dj(){},
dk:function dk(){},
dm:function dm(){},
dn:function dn(){},
dp:function dp(){},
dq:function dq(){},
dv:function dv(){},
dw:function dw(){},
dx:function dx(){},
dy:function dy(){},
dA:function dA(){},
dB:function dB(){},
dE:function dE(){},
dF:function dF(){},
dG:function dG(){},
c5:function c5(){},
c6:function c6(){},
dH:function dH(){},
dI:function dI(){},
dM:function dM(){},
dP:function dP(){},
dQ:function dQ(){},
c7:function c7(){},
c8:function c8(){},
dS:function dS(){},
dT:function dT(){},
dX:function dX(){},
dY:function dY(){},
dZ:function dZ(){},
e_:function e_(){},
e0:function e0(){},
e1:function e1(){},
e2:function e2(){},
e3:function e3(){},
e4:function e4(){},
e5:function e5(){}},T={
T:function(a){var u=new T.fY()
u.dE(a)
return u},
ea:function ea(){},
cu:function cu(){},
cF:function cF(){},
aw:function aw(){this.a=null},
fY:function fY(){this.a=null},
jR:function(a){var u=new T.hm()
u.a=0
u.b=a
u.d=u.c=!1
u.x=u.r=u.f=u.e=0
return u},
aY:function aY(){},
hl:function hl(){},
hm:function hm(){var _=this
_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
hn:function hn(){var _=this
_.e=_.d=_.c=_.b=_.a=null},
hp:function hp(a){var _=this
_.a=a
_.e=_.d=_.c=null},
hq:function hq(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g}},R={cY:function cY(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},d3:function d3(a,b,c){this.a=a
this.b=b
this.c=c},d4:function d4(a){this.b=a
this.c=null},ht:function ht(){this.c=this.b=this.a=null},d6:function d6(a){this.b=a
this.a=this.c=null}},O={
eo:function(a){var u=new O.as([a])
u.b4(a)
return u},
as:function as(a){var _=this
_.c=_.b=_.a=null
_.$ti=a},
bM:function bM(){this.b=this.a=null},
jS:function(a,b,c){var u,t,s,r=new O.aZ(),q=r.a
r.a=c
c.gl().k(0,r.ga9())
u=new D.q("texture",q,r.a)
u.b=!0
r.F(u)
t=V.am()
if(!J.w(r.b,t)){q=r.b
r.b=t
u=new D.q("colorMatrix",q,t)
u.b=!0
r.F(u)}s=V.fP()
if(!J.w(r.c,s)){q=r.c
r.c=s
u=new D.q("source",q,s)
u.b=!0
r.F(u)}if(!J.w(r.d,a)){q=r.d
r.d=a
u=new D.q("destination",q,a)
u.b=!0
r.F(u)}if(r.e!==b){r.e=b
u=new D.q("flip",!b,b)
u.b=!0
r.F(u)}r.f=null
return r},
ez:function ez(){var _=this
_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
cG:function cG(){var _=this
_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
fj:function fj(a,b){this.a=a
this.b=b},
fk:function fk(){},
fl:function fl(a,b){this.a=a
this.b=b},
fm:function fm(){},
fn:function fn(a,b){this.a=a
this.b=b},
fo:function fo(){},
fd:function fd(a,b){var _=this
_.f=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
cH:function cH(){},
fe:function fe(a,b){var _=this
_.a=a
_.b=b
_.e=_.d=_.c=null},
ak:function ak(a,b){var _=this
_.f=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
fg:function fg(){var _=this
_.e=_.d=_.c=_.b=null},
fh:function fh(a,b){var _=this
_.f=_.ch=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
fi:function fi(a,b){var _=this
_.f=_.ch=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
cM:function cM(){var _=this
_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
cU:function cU(){var _=this
_.e=_.d=_.c=_.b=_.a=null},
d_:function d_(){},
d0:function d0(){var _=this
_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
aZ:function aZ(){var _=this
_.f=_.e=_.d=_.c=_.b=_.a=null}},E={
iX:function(){var u,t=new E.at()
t.a=""
t.b=!0
u=O.eo(E.at)
t.y=u
u.az(t.gfW(),t.gfZ())
t.dy=t.dx=t.db=t.cy=t.cx=t.ch=t.Q=t.z=null
t.sb3(0,null)
t.saZ(null)
return t},
l7:function(a,b){var u=new E.fQ(a)
u.dD(a,b)
return u},
lf:function(a,b,c,d,e){var u,t,s=J.U(a)
if(!!s.$ibc)return E.jT(a,!0,!0,!0,!1)
u=W.iT()
t=u.style
t.width="100%"
t.height="100%"
s.gcM(a).k(0,u)
return E.jT(u,!0,!0,!0,!1)},
jT:function(a,b,c,d,e){var u,t,s,r="mousemove",q=new E.d1(),p=C.f.c3(a,"webgl2",P.kS(["alpha",!0,"depth",!0,"stencil",!1,"antialias",!0]))
if(p==null)H.p(P.m("Failed to get the rendering context for WebGL."))
q.b=a
q.c=p
q.e=E.l7(p,a)
u=new T.hp(p)
p.getParameter(3379)
u.c=p.getParameter(34076)
u.e=u.d=0
q.f=u
u=new X.d9(a)
t=new X.f0()
t.c=new X.aa(!1,!1,!1)
t.d=P.kT(P.x)
u.b=t
t=new X.fw(u)
t.f=0
t.r=V.ax()
t.x=V.ax()
t.ch=t.Q=1
u.c=t
t=new X.f7(u)
t.r=0
t.x=V.ax()
t.cy=t.cx=t.ch=t.Q=1
u.d=t
t=new X.hu(u)
t.f=V.ax()
t.r=V.ax()
u.e=t
u.x=u.r=u.f=!1
u.y=null
t=H.c([],[[P.cZ,P.Z]])
u.z=t
s=document
t.push(W.R(s,"contextmenu",u.gep(),!1))
u.z.push(W.R(a,"focus",u.geA(),!1))
u.z.push(W.R(a,"blur",u.gej(),!1))
u.z.push(W.R(s,"keyup",u.geE(),!1))
u.z.push(W.R(s,"keydown",u.geC(),!1))
u.z.push(W.R(a,"mousedown",u.geI(),!1))
u.z.push(W.R(a,"mouseup",u.geM(),!1))
u.z.push(W.R(a,r,u.geK(),!1))
t=u.z
W.iW(a)
W.iW(a)
t.push(W.R(a,W.iW(a),u.geO(),!1))
u.z.push(W.R(s,r,u.ger(),!1))
u.z.push(W.R(s,"mouseup",u.geu(),!1))
u.z.push(W.R(s,"pointerlockchange",u.geQ(),!1))
u.z.push(W.R(a,"touchstart",u.gf5(),!1))
u.z.push(W.R(a,"touchend",u.gf1(),!1))
u.z.push(W.R(a,"touchmove",u.gf3(),!1))
q.x=u
q.ch=!0
q.cx=!1
q.cy=new P.a5(Date.now(),!1)
q.db=0
q.cu()
return q},
ej:function ej(){},
at:function at(){var _=this
_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
fQ:function fQ(a){var _=this
_.a=a
_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=null},
fR:function fR(a){this.a=a},
fS:function fS(a){this.a=a},
fT:function fT(a){this.a=a},
d1:function d1(){var _=this
_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.f=_.e=_.d=_.c=_.b=null},
hr:function hr(a){this.a=a}},Z={
ja:function(a,b,c){var u=a.createBuffer()
a.bindBuffer(b,u)
a.bufferData(b,new Int16Array(H.br(c)),35044)
a.bindBuffer(b,null)
return new Z.dc(b,u)},
a8:function(a){return new Z.a2(a)},
dc:function dc(a,b){this.a=a
this.b=b},
ci:function ci(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=0},
b4:function b4(a){this.a=a},
ar:function ar(a,b,c){var _=this
_.a=a
_.b=null
_.c=b
_.d=c},
bg:function bg(a,b,c){this.a=a
this.b=b
this.c=c},
a2:function a2(a){this.a=a}},D={
z:function(){var u=new D.aG()
u.d=0
return u},
em:function em(){},
aG:function aG(){var _=this
_.d=_.c=_.b=_.a=null},
eJ:function eJ(a){this.a=a},
eK:function eK(a){this.a=a},
N:function N(){this.b=null},
aL:function aL(){this.b=null},
aM:function aM(){this.b=null},
q:function q(a,b,c){var _=this
_.c=a
_.d=b
_.e=c
_.b=null},
be:function be(){var _=this
_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
a1:function a1(){},
cA:function cA(){var _=this
_.c=_.b=_.a=_.y=_.x=_.r=_.f=_.e=null},
fM:function fM(){},
h9:function h9(){}},X={cj:function cj(a,b){this.a=a
this.b=b},cz:function cz(a,b){this.a=a
this.b=b},f0:function f0(){var _=this
_.d=_.c=_.b=_.a=null},cD:function cD(a,b,c){var _=this
_.x=a
_.c=b
_.d=c
_.b=null},f7:function f7(a){var _=this
_.a=a
_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},aa:function aa(a,b,c){this.a=a
this.b=b
this.c=c},aQ:function aQ(a,b,c,d,e){var _=this
_.x=a
_.y=b
_.z=c
_.c=d
_.d=e
_.b=null},fw:function fw(a){var _=this
_.a=a
_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},bN:function bN(a,b,c){var _=this
_.x=a
_.c=b
_.d=c
_.b=null},fN:function fN(){},d5:function d5(a,b,c,d){var _=this
_.y=a
_.z=b
_.c=c
_.d=d
_.b=null},hu:function hu(a){var _=this
_.a=a
_.y=_.x=_.r=_.f=_.d=_.c=_.b=null},d9:function d9(a){var _=this
_.a=a
_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},
jq:function(a,b,c){var u,t,s,r=new X.ei()
r.d=r.c=r.b=r.a=512
r.e=!0
r.f=!1
r.x=r.r=1
r.ch=T.jR(null)
r.cx=new V.X(0,0,0,1)
r.cy=!0
r.db=2000
r.dx=!0
r.dy=V.fP()
r.sag(0,512)
r.sac(0,512)
if(c==null)c=new V.X(0,0,0,1)
if(!r.cx.n(0,c)){u=r.cx
r.cx=c
t=new D.q("color",u,c)
t.b=!0
r.Z(t)}if(r.cy!==b){r.cy=b
t=new D.q("clearColor",!b,b)
t.b=!0
r.Z(t)}t=r.db
if(!(Math.abs(t-2000)<$.y().a)){r.db=2000
t=new D.q("depth",t,2000)
t.b=!0
r.Z(t)}if(!r.f){r.f=!0
t=new D.q("autoResize",!1,!0)
t.b=!0
r.Z(t)}t=r.r
if(!(Math.abs(t-1)<$.y().a)){r.r=1
t=new D.q("autoResizeScalarX",t,1)
t.b=!0
r.Z(t)}t=r.x
if(!(Math.abs(t-1)<$.y().a)){r.x=1
t=new D.q("autoResizeScalarY",t,1)
t.b=!0
r.Z(t)}s=V.fP()
if(!J.w(r.dy,s)){u=r.dy
r.dy=s
t=new D.q("region",u,s)
t.b=!0
r.Z(t)}return r},
iZ:function(a,b){var u=new X.eT(),t=new V.X(0,0,0,1)
u.a=t
u.b=a
u.c=2000
u.d=!0
u.e=0
u.f=!1
t=V.fP()
u.r=t
return u},
jI:function(a){var u,t=new X.cO()
t.c=1.0471975511965976
t.d=0.1
t.e=2000
t.saZ(a)
u=t.c
if(!(Math.abs(u-1.0471975511965976)<$.y().a)){t.c=1.0471975511965976
u=new D.q("fov",u,1.0471975511965976)
u.b=!0
t.Z(u)}u=t.d
if(!(Math.abs(u-0.1)<$.y().a)){t.d=0.1
u=new D.q("near",u,0.1)
u.b=!0
t.Z(u)}u=t.e
if(!(Math.abs(u-2000)<$.y().a)){t.e=2000
u=new D.q("far",u,2000)
u.b=!0
t.Z(u)}return t},
ei:function ei(){var _=this
_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
iS:function iS(){},
eT:function eT(){var _=this
_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
eV:function eV(){this.b=this.a=null},
cO:function cO(){var _=this
_.f=_.e=_.d=_.c=_.b=_.a=null},
hh:function hh(){}},V={
ep:function(a,b,c){var u=a/255,t=b/255,s=c/255
if(u<0)u=0
else if(u>1)u=1
if(t<0)t=0
else if(t>1)t=1
if(s<0)s=0
else if(s>1)s=1
return new V.X(u,t,s,1)},
mq:function(a,b,c){var u
if(c<=b)return b
u=c-b
a=C.b.dq(a-b,u)
return(a<0?a+u:a)+b},
A:function(a,b,c){if(a==null)return C.d.ae("null",c)
return C.d.ae(C.b.dk(Math.abs(a-0)<$.y().a?0:a,b),c+b+1)},
bw:function(a,b,c){var u,t,s,r,q,p,o=H.c([],[P.r])
for(u=a.length,t=0,s=0;s<a.length;a.length===u||(0,H.n)(a),++s){r=V.A(a[s],b,c)
t=Math.max(t,r.length)
o.push(r)}for(u=o.length,q=u-1;q>=0;--q,u=p){if(q>=u)return H.b(o,q)
u=C.d.ae(o[q],t)
p=o.length
if(q>=p)return H.b(o,q)
o[q]=u}return o},
cd:function(a){return C.b.hj(Math.pow(2,C.G.bN(Math.log(H.lY(a))/Math.log(2))))},
j4:function(){var u=$.jC
return u==null?$.jC=new V.bL(1,0,0,0,1,0,0,0,1):u},
am:function(){var u=$.fp
return u==null?$.fp=V.av(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1):u},
av:function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){return new V.al(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p)},
jF:function(a,b,c){return V.av(1,0,0,a,0,1,0,b,0,0,1,c,0,0,0,1)},
jE:function(a,b,c){return V.av(a,0,0,0,0,b,0,0,0,0,c,0,0,0,0,1)},
jD:function(a,b,c){var u=c.t(0,Math.sqrt(c.C(c))),t=b.at(u),s=t.t(0,Math.sqrt(t.C(t))),r=u.at(s),q=new V.v(a.a,a.b,a.c),p=s.O(0).C(q),o=r.O(0).C(q),n=u.O(0).C(q)
return V.av(s.a,r.a,u.a,p,s.b,r.b,u.b,o,s.c,r.c,u.c,n,0,0,0,1)},
ax:function(){var u=$.jK
return u==null?$.jK=new V.V(0,0):u},
jL:function(){var u=$.bR
return u==null?$.bR=new V.O(0,0,0):u},
fP:function(){var u=$.bV
return u==null?$.bV=V.bU(0,0,1,1):u},
bU:function(a,b,c,d){if(c<0){a+=c
c=-c}if(d<0){b+=d
d=-d}return new V.cR(a,b,c,d)},
c_:function(){var u=$.k2
return u==null?$.k2=new V.v(0,0,0):u},
lh:function(){var u=$.hO
return u==null?$.hO=new V.v(-1,0,0):u},
j9:function(){var u=$.hP
return u==null?$.hP=new V.v(0,1,0):u},
k3:function(){var u=$.hQ
return u==null?$.hQ=new V.v(0,0,1):u},
M:function M(a,b,c){this.a=a
this.b=b
this.c=c},
X:function X(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
eI:function eI(a){this.a=a},
bL:function bL(a,b,c,d,e,f,g,h,i){var _=this
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
V:function V(a,b){this.a=a
this.b=b},
O:function O(a,b,c){this.a=a
this.b=b
this.c=c},
ay:function ay(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
cR:function cR(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
H:function H(a,b){this.a=a
this.b=b},
v:function v(a,b,c){this.a=a
this.b=b
this.c=c},
mk:function(a){P.lg(C.E,new V.iK(a))},
l9:function(a){var u=new V.h2()
u.dF(a,!0)
return u},
iK:function iK(a){this.a=a},
h2:function h2(){this.b=this.a=null},
h4:function h4(a){this.a=a},
h3:function h3(a){this.a=a}},U={
ju:function(){var u=new U.eq()
u.a=!0
u.b=1e12
u.c=-1e12
u.d=0
u.e=100
u.r=u.x=u.f=0
return u},
iU:function(a){var u=new U.cl()
u.a=a
return u},
jx:function(){var u=new U.bG()
u.b4(U.a6)
u.az(u.gdJ(),u.geU())
u.e=null
u.f=V.am()
u.r=0
return u},
jY:function(a,b){var u,t,s,r=new U.da(),q=U.ju()
q.sdm(0,!0)
q.sd7(6.283185307179586)
q.sd9(0)
q.sa8(0,0)
q.sd8(100)
q.sX(0)
q.scQ(0.5)
r.b=q
u=r.gb5()
q.gl().k(0,u)
q=U.ju()
q.sdm(0,!0)
q.sd7(6.283185307179586)
q.sd9(0)
q.sa8(0,0)
q.sd8(100)
q.sX(0)
q.scQ(0.5)
r.c=q
q.gl().k(0,u)
r.d=null
r.r=r.f=r.e=!1
r.y=r.x=2.5
r.Q=4
r.ch=r.cx=!1
r.db=r.cy=0
r.dx=null
r.dy=0
r.fx=r.fr=null
t=new X.aa(a,!1,!1)
s=r.d
r.d=t
q=new D.q("modifiers",s,t)
q.b=!0
r.P(q)
q=r.f
if(q!==!1){r.f=!1
q=new D.q("invertX",q,!1)
q.b=!0
r.P(q)}q=r.r
if(q!==!1){r.r=!1
q=new D.q("invertY",q,!1)
q.b=!0
r.P(q)}r.bB(b)
return r},
jZ:function(a,b){var u,t,s=new U.db()
s.c=0.01
s.e=s.d=0
u=new X.aa(a,!1,!1)
s.b=u
t=new D.q("modifiers",null,u)
t.b=!0
s.P(t)
s.bB(b)
return s},
eq:function eq(){var _=this
_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
cl:function cl(){this.b=this.a=null},
bG:function bG(){var _=this
_.c=_.b=_.a=_.r=_.f=_.e=null},
a6:function a6(){},
da:function da(){var _=this
_.fx=_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
db:function db(){var _=this
_.r=_.f=_.e=_.d=_.c=_.b=_.a=null}},M={
iV:function(){var u,t,s,r,q,p,o,n,m,l=null,k=new M.cm()
k.a=!0
u=E.iX()
t=F.j5()
s=t.a
r=new V.v(-1,-1,1)
r=r.t(0,Math.sqrt(r.C(r)))
q=s.ba(new V.ay(1,2,4,6),V.ep(255,0,0),new V.O(-1,-1,0),new V.V(0,1),r,l)
r=t.a
s=new V.v(1,-1,1)
s=s.t(0,Math.sqrt(s.C(s)))
p=r.ba(new V.ay(0,3,4,6),V.ep(0,0,255),new V.O(1,-1,0),new V.V(1,1),s,l)
s=t.a
r=new V.v(1,1,1)
r=r.t(0,Math.sqrt(r.C(r)))
o=s.ba(new V.ay(0,2,5,6),V.ep(0,128,0),new V.O(1,1,0),new V.V(1,0),r,l)
r=t.a
s=V.ax()
n=new V.v(-1,1,1)
n=n.t(0,Math.sqrt(n.C(n)))
m=r.ba(new V.ay(0,2,4,7),V.ep(255,255,0),new V.O(-1,1,0),s,n,l)
t.d.fq(H.c([q,p,o,m],[F.b3]))
t.ai()
u.sb3(0,t)
k.e=u
k.saQ(l)
k.sax(0,l)
k.san(l)
return k},
jw:function(){var u,t,s=new M.cr()
s.a=!0
u=O.eo(E.at)
s.e=u
u.az(s.gel(),s.gen())
s.y=s.x=s.r=s.f=null
t=X.iZ(!0,null)
s.saQ(null)
s.sax(0,t)
s.san(null)
return s},
ck:function ck(){var _=this
_.c=_.b=_.a=_.r=_.f=_.e=null},
cm:function cm(){var _=this
_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
cr:function cr(){var _=this
_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
ab:function ab(){}},A={
kV:function(a,b){var u=a.aW,t=new A.fc(b,u)
t.aK(b,u)
t.dC(a,b)
return t},
kW:function(a,b,c,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e="MaterialLight_"+a1.gaf(a1)+a2.gaf(a2)+a3.gaf(a3)+a4.gaf(a4)+a5.gaf(a5)+a6.gaf(a6)+a7.gaf(a7)+a8.gaf(a8)+a9.gaf(a9)+"_"
e+=a?"1":"0"
e+=b?"1":"0"
e+=c?"1":"0"
e=e+"0_"+a0
u=b0.length
if(u>0){e+="_Dir"
for(t=0;t<b0.length;b0.length===u||(0,H.n)(b0),++t)e+="_"+H.e(b0[t].a)}u=b1.length
if(u>0){e+="_Point"
for(t=0;t<b1.length;b1.length===u||(0,H.n)(b1),++t)e+="_"+H.e(b1[t].a)}u=b2.length
if(u>0){e+="_Spot"
for(t=0;t<b2.length;b2.length===u||(0,H.n)(b2),++t)e+="_"+H.e(b2[t].a)}for(u=b0.length,s=0,r=!1,t=0;t<u;++t,r=!0)s+=b0[t].b
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
f=$.S()
if(k){u=$.af()
f=new Z.a2(f.a|u.a)}if(j){u=$.ae()
f=new Z.a2(f.a|u.a)}if(i){u=$.ag()
f=new Z.a2(f.a|u.a)}if(h){u=$.aD()
f=new Z.a2(f.a|u.a)}return new A.ff(a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,s,p,l,p,r,g,!0,!1,!1,o,r,m,k,j,!1,i,h,!1,b,c,!1,a0,e.charCodeAt(0)==0?e:e,f)},
iy:function(a,b,c){if(b.a)a.a+="uniform vec3 "+c+"Clr;\n"
if(b.c)a.a+="uniform samplerCube "+c+"Txt;\n"},
iz:function(a,b,c){var u,t="Txt, txtCube).rgb;\n"
A.iy(a,b,c)
u=a.a+="\n"
u+="vec3 "+c+"Color;\n"
a.a=u
a.a=u+"\n"
u=a.a+="void set"+A.iM(c)+"Color()\n"
u=a.a=u+"{\n"
if(b.a)if(b.c){u+="   "+c+"Color = "+c+"Clr*textureCube("+c+t
a.a=u}else{u+="   "+c+"Color = "+c+"Clr;\n"
a.a=u}else if(b.c){u+="   "+c+"Color = textureCube("+c+t
a.a=u}a.a=u+"}\n"},
lx:function(a,b){var u,t=a.a,s=t.a
if(!s)u=t.c
else u=!0
if(!u)return
u=b.a+="// === Emission ===\n"
b.a=u+"\n"
A.iy(b,t,"emission")
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
lu:function(a,b){var u,t=a.b
if(!t.a)u=t.c
else u=!0
if(!u)return
u=b.a+="// === Ambient ===\n"
b.a=u+"\n"
A.iz(b,t,"ambient")
b.a+="\n"},
lv:function(a,b){var u,t=a.c
if(!t.a)u=t.c
else u=!0
if(!u)return
u=b.a+="// === Diffuse ===\n"
b.a=u+"\n"
A.iz(b,t,"diffuse")
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
ly:function(a,b){var u,t=a.d
if(!t.a)u=t.c
else u=!0
if(!u)return
u=b.a+="// === Inverse Diffuse ===\n"
b.a=u+"\n"
A.iz(b,t,"invDiffuse")
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
lE:function(a,b){var u,t=a.e
if(!t.a)u=t.c
else u=!0
if(!u)return
u=b.a+="// === Specular ===\n"
u+="\n"
b.a=u
b.a=u+"uniform float shininess;\n"
A.iz(b,t,"specular")
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
lA:function(a,b){var u,t,s
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
lC:function(a,b){var u,t=a.r,s=t.a
if(!s)u=t.c
else u=!0
if(!u)return
u=b.a+="// === Reflection ===\n"
b.a=u+"\n"
A.iy(b,t,"reflect")
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
lD:function(a,b){var u,t=a.x,s=t.a
if(!s)u=t.c
else u=!0
if(!u)return
u=b.a+="// === Refraction ===\n"
b.a=u+"\n"
A.iy(b,t,"refract")
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
lw:function(a,b,c){var u,t,s,r,q,p,o,n,m,l=b.b
if(l<=0)return
u=b.a
t="dirLight"+H.e(u)
s=A.iM(t)
r=c.a+="// === "+s+" ===\n"
r+="\n"
c.a=r
r+="struct "+s+"\n"
c.a=r
r=c.a=r+"{\n"
if(typeof u!=="number")return u.ao()
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
r=[P.r]
o=H.c([],r)
n=a.b
if(!n.a)n=n.c
else n=!0
if(n)o.push("ambientColor")
if(a.db){c.a+="   vec3 highLight = vec3(0.0, 0.0, 0.0);\n"
m=H.c([],r)
r=a.c
if(!r.a)r=r.c
else r=!0
if(r)m.push("diffuse(norm, lit.viewDir)")
r=a.d
if(!r.a)r=r.c
else r=!0
if(r)m.push("invDiffuse(norm, lit.viewDir)")
r=a.e
if(!r.a)r=r.c
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
c.a+="      highLight = intensity*("+C.a.q(m," + ")+");\n"}else c.a+="   highLight = "+C.a.q(m," + ")+";\n"
o.push("highLight")}r=c.a+="   return lit.color*("+C.a.q(o," + ")+");\n"
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
lB:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k,j=b.b
if(j<=0)return
u=b.a
t="pointLight"+H.e(u)
s=A.iM(t)
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
if(typeof u!=="number")return u.ao()
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
c.a=r+"\n"}r=[P.r]
l=H.c([],r)
l.push("lit.color")
if(o)l.push("attenuation")
if(u)l.push("textureCube(txtCube, invNormDir).rgb")
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
if(o)l.push("ambientColor")
if(a.db){c.a+="   vec3 highLight = vec3(0.0, 0.0, 0.0);\n"
l.push("highLight")
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
if(r)k.push("diffuse(norm, normDir)")
r=a.d
if(!r.a)r=r.c
else r=!0
if(r)k.push("invDiffuse(norm, normDir)")
r=a.e
if(!r.a)r=r.c
else r=!0
if(r)k.push("specular(norm, normDir)")
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
lF:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k,j,i,h="uniform sampler2D ",g=b.b
if(g<=0)return
u=b.a
t="spotLight"+H.e(u)
s=A.iM(t)
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
if(typeof u!=="number")return u.ao()
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
c.a=u+"\n"}u=[P.r]
j=H.c([],u)
if(n)j.push("attenuation")
if(o)j.push("scale")
if(m)j.push("texture2D(txt2D, txtLoc).rgb")
else j.push("vec3(1.0, 1.0, 1.0)")
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
if(r)j.push("ambientColor")
if(a.db){c.a+="   vec3 highLight = vec3(0.0, 0.0, 0.0);\n"
j.push("highLight")
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
if(u)i.push("diffuse(norm, litVec)")
u=a.d
if(!u.a)u=u.c
else u=!0
if(u)i.push("invDiffuse(norm, litVec)")
u=a.e
if(!u.a)u=u.c
else u=!0
if(u)i.push("specular(norm, litVec)")
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
lz:function(a,b){var u,t
if(a.cx>0)return
u=b.a+="// === No Lights ===\n"
u+="\n"
b.a=u
u+="vec3 nonLightValues(vec3 norm)\n"
b.a=u
u+="{\n"
b.a=u
if(a.db)b.a=u+"   vec3 litVec = vec3(0.0, 0.0, 1.0);\n"
t=H.c([],[P.r])
u=a.b
if(!u.a)u=u.c
else u=!0
if(u)t.push("ambientColor")
u=a.c
if(!u.a)u=u.c
else u=!0
if(u)t.push("diffuse(norm, litVec)")
u=a.d
if(!u.a)u=u.c
else u=!0
if(u)t.push("invDiffuse(norm, litVec)")
u=a.e
if(!u.a)u=u.c
else u=!0
if(u)t.push("specular(norm, litVec)")
u=b.a+="   return "+C.a.q(t," + ")+";\n"
u+="}\n"
b.a=u
b.a=u+"\n"},
lG:function(a){var u,t,s,r,q,p,o,n,m,l="   lightAccum += all",k="precision mediump float;\n\n",j="precision mediump float;\n\nvarying vec3 normalVec;\n",i=new P.aW("")
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
A.lx(a,i)
A.lu(a,i)
A.lv(a,i)
A.ly(a,i)
A.lE(a,i)
t=a.cy
if(t){r=i.a+="// === Enviromental ===\n"
r+="\n"
i.a=r
r+="uniform samplerCube envSampler;\n"
i.a=r
i.a=r+"\n"
A.lC(a,i)
A.lD(a,i)}A.lA(a,i)
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
if(r){for(q=a.z,p=q.length,n=0;n<q.length;q.length===p||(0,H.n)(q),++n)A.lw(a,q[n],i)
for(q=a.Q,p=q.length,n=0;n<q.length;q.length===p||(0,H.n)(q),++n)A.lB(a,q[n],i)
for(q=a.ch,p=q.length,n=0;n<q.length;q.length===p||(0,H.n)(q),++n)A.lF(a,q[n],i)
A.lz(a,i)}q=i.a+="// === Main ===\n"
q+="\n"
i.a=q
q+="void main()\n"
i.a=q
q+="{\n"
i.a=q
q=i.a=q+"   float alpha = alphaValue();\n"
u=u?i.a=q+"   vec3 norm = normal();\n":q
if(t)i.a=u+"   vec3 refl = reflect(normalize(viewPos), norm);\n"
m=H.c([],[P.r])
if(r){i.a+="   vec3 lightAccum = vec3(0.0, 0.0, 0.0);\n"
m.push("lightAccum")
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
for(u=a.z,t=u.length,n=0;n<u.length;u.length===t||(0,H.n)(u),++n){r=u[n].i(0)
if(0>=r.length)return H.b(r,0)
i.a+=l+(r[0].toUpperCase()+C.d.aJ(r,1))+"Values(norm);\n"}for(u=a.Q,t=u.length,n=0;n<u.length;u.length===t||(0,H.n)(u),++n){r=u[n].i(0)
if(0>=r.length)return H.b(r,0)
i.a+=l+(r[0].toUpperCase()+C.d.aJ(r,1))+"Values(norm);\n"}for(u=a.ch,t=u.length,n=0;n<u.length;u.length===t||(0,H.n)(u),++n){r=u[n].i(0)
if(0>=r.length)return H.b(r,0)
i.a+=l+(r[0].toUpperCase()+C.d.aJ(r,1))+"Values(norm);\n"}if(a.cx<=0)i.a+="   lightAccum += nonLightValues(norm);\n"}u=a.a
if(!u.a)u=u.c
else u=!0
if(u)m.push("emissionColor()")
u=a.r
if(!u.a)u=u.c
else u=!0
if(u)m.push("reflect(refl)")
u=a.x
if(!u.a)u=u.c
else u=!0
if(u)m.push("refract(refl)")
if(m.length<=0)m.push("vec3(0.0, 0.0, 0.0)")
u=i.a+="   vec4 objClr = vec4("+C.a.q(m," + ")+", alpha);\n"
if(s)u=i.a=u+"   objClr = colorMat*objClr;\n"
u+="   gl_FragColor = objClr;\n"
i.a=u
u=i.a=u+"}\n"
return u.charCodeAt(0)==0?u:u},
lH:function(a,b){var u,t,s
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
lJ:function(a,b){var u
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
lI:function(a,b){var u
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
lL:function(a,b){var u,t
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
lM:function(a,b){var u,t
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
lK:function(a,b){var u
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
lN:function(a,b){var u
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
jG:function(a){var u,t,s,r,q,p
if(!a.a)u=a.c
else u=!0
t=a.c
s="Normal_"+a.gaf(a)
r=$.S()
q=$.af()
q=r.a|q.a
p=new Z.a2(q)
if(u)p=new Z.a2(q|$.ae().a)
return new A.fF(a,u,!1,t,s,t?new Z.a2(p.a|$.ag().a):p)},
iM:function(a){if(0>=a.length)return H.b(a,0)
return a[0].toUpperCase()+C.d.aJ(a,1)},
le:function(a,b){var u,t,s,r
for(u=0,t="precision mediump float;\n\nuniform vec4 backClr;\n\nvarying vec2 pos;\n\nuniform int txtCount;\n";u<a;++u)t=t+("uniform sampler2D txt"+u+";\n")+("uniform mat4 clrMat"+u+";\n")+("uniform vec2 srcLoc"+u+";\n")+("uniform vec2 srcSize"+u+";\n")+("uniform vec2 destLoc"+u+";\n")+("uniform vec2 destSize"+u+";\n")+("uniform int flip"+u+";\n")
t+="\nvec4 clrAccum;\n"
s=b===C.D
t=(s||b===C.h?t+"float colorCount;\n":t)+"\nvoid layout(sampler2D txt, mat4 clrMat,\n            vec2 srcLoc, vec2 srcSize, vec2 destLoc, vec2 destSize, int flip)\n{\n   vec2 txtPnt = (pos - destLoc)*srcSize/destSize;\n   if((txtPnt.x >= 0.0) && (txtPnt.x <= srcSize.x) &&\n      (txtPnt.y >= 0.0) && (txtPnt.y <= srcSize.y))\n   {\n      if(flip != 0) txtPnt.y = srcSize.y - txtPnt.y;\n      vec4 color = clrMat*texture2D(txt, txtPnt + srcLoc);\n      color = clamp(color, vec4(0.0), vec4(1.0));\n"
if(b===C.C)t+="      clrAccum += color;\n"
else if(b===C.i)t+="      clrAccum = mix(clrAccum, color, color.a);\n"
else t=s?t+"      clrAccum += color;\n      colorCount += 1.0;\n":t+"      clrAccum = color;\n      colorCount = 1.0;\n"
t+="   }\n}\n\nvoid layoutAll()\n{\n"
r=b===C.h
if(r)for(u=a-1;u>=0;--u)t=t+("   if(txtCount > "+u+")\n")+"   {\n"+("     layout(txt"+u+", clrMat"+u+", srcLoc"+u+", srcSize"+u+", destLoc"+u+", destSize"+u+", flip"+u+");\n")+"     if(colorCount > 0.0) return;\n   }\n"
else for(u=0;u<a;++u)t=t+("   if(txtCount <= "+u+") return;\n")+("   layout(txt"+u+", clrMat"+u+", srcLoc"+u+", srcSize"+u+", destLoc"+u+", destSize"+u+", flip"+u+");\n")
t+="}\n\nvoid main()\n{\n   clrAccum = backClr;\n"
if(s)t+="   colorCount = 1.0;\n"
else if(r)t+="   colorCount = 0.0;\n"
t+="   layoutAll();\n"
t=(s?t+"   clrAccum = clrAccum/colorCount;\n":t)+"   if(clrAccum.a <= 0.0) discard;\n   gl_FragColor = clrAccum;\n}\n"
return t.charCodeAt(0)==0?t:t},
ld:function(a,b,c){var u="TextureLayout_"+a+"_"+C.c.i(b.a),t=new A.ho(c,u)
t.aK(c,u)
t.dG(a,b,c)
return t},
j8:function(a,b,c,d,e){var u=new A.hB(a,c,e)
u.f=d
P.kU(d,0,P.x)
return u},
cg:function cg(a,b,c){this.a=a
this.b=b
this.c=c},
ed:function ed(a){this.a=a},
Q:function Q(a,b,c){this.a=a
this.b=b
this.c=c},
eA:function eA(a,b){var _=this
_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=null
_.a=a
_.b=b
_.y=_.x=_.r=_.f=_.e=_.d=_.c=null},
fc:function fc(a,b){var _=this
_.cT=_.hs=_.cS=_.bc=_.aW=_.y2=_.y1=_.x2=_.x1=_.ry=_.rx=_.r2=_.r1=_.k4=_.k3=_.k2=_.k1=_.id=_.go=_.fy=_.fx=_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=null
_.hA=_.hz=_.hy=_.bM=_.bL=_.bK=_.bJ=_.bI=_.bH=_.d4=_.hx=_.d3=_.d2=_.hw=_.d1=_.d0=_.d_=_.hv=_.cZ=_.cY=_.cX=_.hu=_.cW=_.cV=_.ht=_.cU=null
_.a=a
_.b=b
_.y=_.x=_.r=_.f=_.e=_.d=_.c=null},
co:function co(a,b){this.a=a
this.b=b},
cP:function cP(a,b){this.a=a
this.b=b},
cW:function cW(a,b){this.a=a
this.b=b},
ff:function ff(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4){var _=this
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
_.aW=b3
_.bc=b4},
bW:function bW(a,b,c,d,e,f){var _=this
_.b=a
_.c=b
_.d=c
_.e=d
_.f=e
_.r=f},
bX:function bX(a,b,c,d,e,f,g,h,i,j){var _=this
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
bY:function bY(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){var _=this
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
fD:function fD(a,b){var _=this
_.go=_.fy=_.fx=_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=null
_.a=a
_.b=b
_.y=_.x=_.r=_.f=_.e=_.d=_.c=null},
fF:function fF(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
cT:function cT(){},
bd:function bd(a,b){this.a=a
this.b=b},
h6:function h6(a,b){var _=this
_.db=_.cy=_.cx=_.ch=_.Q=_.z=null
_.a=a
_.b=b
_.y=_.x=_.r=_.f=_.e=_.d=_.c=null},
ho:function ho(a,b){var _=this
_.fx=_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=null
_.a=a
_.b=b
_.y=_.x=_.r=_.f=_.e=_.d=_.c=null},
d7:function d7(){},
hF:function hF(a){this.a=a},
b1:function b1(a,b,c){this.a=a
this.c=b
this.d=c},
hC:function hC(a,b,c){this.a=a
this.c=b
this.d=c},
hD:function hD(a,b,c){this.a=a
this.c=b
this.d=c},
hE:function hE(a,b,c){this.a=a
this.c=b
this.d=c},
hB:function hB(a,b,c){var _=this
_.f=null
_.a=a
_.c=b
_.d=c},
L:function L(a,b,c){this.a=a
this.c=b
this.d=c},
aB:function aB(a,b,c){this.a=a
this.c=b
this.d=c},
B:function B(a,b,c){this.a=a
this.c=b
this.d=c},
bq:function bq(a,b,c){this.a=a
this.c=b
this.d=c},
hG:function hG(a,b,c){this.a=a
this.c=b
this.d=c},
b2:function b2(a,b,c){this.a=a
this.c=b
this.d=c},
J:function J(a,b,c){this.a=a
this.c=b
this.d=c},
ac:function ac(a,b,c){this.a=a
this.c=b
this.d=c},
P:function P(a,b,c){this.a=a
this.c=b
this.d=c}},F={
ix:function(a){var u=a.a>0?1:0
if(a.b>0)u+=2
return(a.c>0?u+4:u)*2},
c9:function(a,b,c,d,a0,a1,a2,a3,a4){var u,t,s,r,q,p,o,n,m,l,k,j={},i=a1+a2,h=i+a3,g=a2+a3,f=a3+a1,e=new V.v(h,g+a1,f+a2)
j.a=e
u=a1-a2
t=a2-a3
s=a3-a1
r=j.b=new V.v(u+a3,t+a1,s+a2)
q=new V.v(u-a3,t-a1,s-a2)
j.c=q
p=j.d=new V.v(i-a3,g-a1,f-a2)
if(h>0){j.d=r
j.b=p
h=r
i=p}else{h=p
i=r}for(f=h,h=i,i=e,g=q,o=0;o<a4;++o,n=f,f=i,i=h,h=g,g=n){j.a=h
j.b=g
j.c=f
j.d=i}m=F.ix(i)
l=F.ix(j.b)
k=F.kj(d,a0,new F.iw(j,F.ix(j.c),F.ix(j.d),l,m,c),b)
if(k!=null)a.bV(k)},
mo:function(){return F.m1(15,30,0.5,1,new F.iN())},
m1:function(a,b,c,d,e){var u=F.kj(a,b,new F.iC(e,d,b,c),null)
if(u==null)return
u.ai()
u.fV(new F.hX(),new F.fE())
return u},
kj:function(a,b,c,d){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=null
if(a<1)return
if(b<1)return
u=F.j5()
t=H.c([],[F.b3])
for(s=0;s<=b;++s){r=s/b
q=u.a
if(r<0)p=0
else p=r>1?1:r
q.toString
o=F.hR(g,g,new V.X(p,0,0,1),g,g,new V.V(r,1),g,g,0)
q.k(0,o)
c.$3(o,r,0)
t.push(o.bF(d))}for(s=1;s<=a;++s){n=s/a
for(q=n>1,p=n<0,m=1-n,l=0;l<=b;++l){r=l/b
k=u.a
if(r<0)j=0
else j=r>1?1:r
if(p)i=0
else i=q?1:n
if(p)h=0
else h=q?1:n
k.toString
o=F.hR(g,g,new V.X(j,i,h,1),g,g,new V.V(r,m),g,g,0)
k.k(0,o)
c.$3(o,r,n)
t.push(o.bF(d))}}u.d.fs(a+1,b+1,t)
return u},
bF:function(a,b,c){var u=new F.aH(),t=a.a
if(t==null)H.p(P.m("May not create a face with a first vertex which is not attached to a shape."))
if(t!=b.a||t!=c.a)H.p(P.m("May not create a face with vertices attached to different shapes."))
u.by(a)
u.bz(b)
u.fe(c)
u.a.a.d.b.push(u)
u.a.a.a1()
return u},
kQ:function(a,b){var u=new F.bK(),t=a.a
if(t==null)H.p(P.m("May not create a line with a start vertex which is not attached to a shape."))
if(t!=b.a)H.p(P.m("May not create a line with vertices attached to different shapes."))
u.by(a)
u.bz(b)
u.a.a.c.b.push(u)
u.a.a.a1()
return u},
j5:function(){var u=new F.fZ(),t=new F.hS(u)
t.b=!1
t.c=H.c([],[F.b3])
u.a=t
t=new F.h1(u)
t.b=H.c([],[F.bQ])
u.b=t
t=new F.h0(u)
t.b=H.c([],[F.bK])
u.c=t
t=new F.h_(u)
t.b=H.c([],[F.aH])
u.d=t
u.e=null
return u},
hR:function(a,b,c,d,e,f,g,h,i){var u,t=null,s=new F.b3(),r=new F.i_()
r.b=H.c([],[F.bQ])
s.b=r
r=new F.hW()
u=[F.bK]
r.b=H.c([],u)
r.c=H.c([],u)
s.c=r
r=new F.hT()
u=[F.aH]
r.b=H.c([],u)
r.c=H.c([],u)
r.d=H.c([],u)
s.d=r
h=$.kx()
s.e=0
r=$.S()
u=h.a
s.f=(u&r.a)!==0?d:t
s.r=(u&$.af().a)!==0?e:t
s.x=(u&$.ae().a)!==0?b:t
s.y=(u&$.aq().a)!==0?f:t
s.z=(u&$.ag().a)!==0?g:t
s.Q=(u&$.ky().a)!==0?c:t
s.ch=(u&$.bx().a)!==0?i:0
s.cx=(u&$.aD().a)!==0?a:t
return s},
iw:function iw(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
iN:function iN(){},
iC:function iC(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
aH:function aH(){var _=this
_.e=_.d=_.c=_.b=_.a=null},
eL:function eL(){},
h5:function h5(){},
bK:function bK(){this.b=this.a=null},
f2:function f2(){},
hA:function hA(){},
bQ:function bQ(){this.a=null},
fZ:function fZ(){var _=this
_.e=_.d=_.c=_.b=_.a=null},
h_:function h_(a){this.a=a
this.b=null},
h0:function h0(a){this.a=a
this.b=null},
h1:function h1(a){this.a=a
this.b=null},
b3:function b3(){var _=this
_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
i1:function i1(a){this.a=a},
i0:function i0(a){this.a=a},
hS:function hS(a){this.a=a
this.c=this.b=null},
hT:function hT(){this.d=this.c=this.b=null},
hU:function hU(a,b){this.a=a
this.b=b},
hV:function hV(a,b){this.a=a
this.b=b},
hW:function hW(){this.c=this.b=null},
hY:function hY(){},
hX:function hX(){},
hZ:function hZ(){},
fE:function fE(){},
i_:function i_(){this.b=null}},S={
ke:function(){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4="testCanvas",a5=null,a6=V.l9("Test 031"),a7=W.iT()
a7.className="pageLargeCanvas"
a7.id=a4
a6.a.appendChild(a7)
u=[P.r]
a6.cG(H.c(["A test of the Distortion cover with a dynamic normal map. ","The distortion map is generated into one back buffer. ","The scene is generated into another back buffer. ","The two parts are combined with a Distortion cover. ","Use mouse to rotate cube in normal map and Ctrl plus mouse ","to rotate scene."],u))
a6.cG(H.c(["\xab[Back to Tests|../]"],u))
t=document.getElementById(a4)
if(t==null)H.p(P.m("Failed to find an element with the identifier, testCanvas."))
s=E.lf(t,!0,!0,!0,!1)
r=E.iX()
q=F.j5()
F.c9(q,a5,a5,1,1,1,0,0,1)
F.c9(q,a5,a5,1,1,0,1,0,3)
F.c9(q,a5,a5,1,1,0,0,1,2)
F.c9(q,a5,a5,1,1,-1,0,0,0)
F.c9(q,a5,a5,1,1,0,-1,0,0)
F.c9(q,a5,a5,1,1,0,0,-1,3)
q.ai()
r.sb3(0,q)
a6=U.jx()
a6.k(0,U.jY(!1,s.x))
a6.k(0,U.jZ(!1,s.x))
r.saZ(a6)
p=new O.cM()
p.b=V.j4()
p.c=V.am()
p.d=new A.Q(!1,!1,!1)
p.cv(a5)
p.cw(a5)
p.V()
p.r=null
a6=s.f.fU("../resources/diceBumpMap")
u=p.d
if(!u.c){p.d=new A.Q(u.a,!1,!0)
p.cv(a5)
p.a=null}p.cw(a6)
o=X.jq(!0,!0,new V.X(0.5,0.5,1,1))
n=M.jw()
n.san(p)
n.sax(0,o)
n.e.k(0,r)
n.b.saZ(U.iU(V.jF(0,0,5)))
m=U.jx()
m.k(0,U.jY(!0,s.x))
m.k(0,U.jZ(!0,s.x))
m.k(0,U.iU(V.jF(0,0,5)))
l=X.jI(m)
k=X.jq(!0,!1,a5)
j=E.iX()
j.sb3(0,F.mo())
i=new O.cG()
a6=O.eo(V.al)
i.e=a6
a6.az(i.gef(),i.geh())
a6=new O.ak(i,"emission")
a6.c=new A.Q(!1,!1,!1)
a6.f=new V.M(0,0,0)
i.f=a6
a6=new O.ak(i,"ambient")
a6.c=new A.Q(!1,!1,!1)
a6.f=new V.M(0,0,0)
i.r=a6
a6=new O.ak(i,"diffuse")
a6.c=new A.Q(!1,!1,!1)
a6.f=new V.M(0,0,0)
i.x=a6
a6=new O.ak(i,"invDiffuse")
a6.c=new A.Q(!1,!1,!1)
a6.f=new V.M(0,0,0)
i.y=a6
a6=new O.fi(i,"specular")
a6.c=new A.Q(!1,!1,!1)
a6.f=new V.M(0,0,0)
a6.ch=100
i.z=a6
a6=new O.fe(i,"bump")
a6.c=new A.Q(!1,!1,!1)
i.Q=a6
i.ch=null
a6=new O.ak(i,"reflect")
a6.c=new A.Q(!1,!1,!1)
a6.f=new V.M(0,0,0)
i.cx=a6
a6=new O.fh(i,"refract")
a6.c=new A.Q(!1,!1,!1)
a6.f=new V.M(0,0,0)
a6.ch=1
i.cy=a6
a6=new O.fd(i,"alpha")
a6.c=new A.Q(!1,!1,!1)
a6.f=1
i.db=a6
a6=new D.cA()
a6.b4(D.a1)
a6.e=H.c([],[D.be])
a6.f=H.c([],[D.fM])
a6.r=H.c([],[D.h9])
a6.y=a6.x=null
a6.c4(a6.ged(),a6.geS(),a6.geW())
i.dx=a6
u=new O.fg()
u.b=new V.X(0,0,0,0)
u.c=1
u.d=10
u.e=!1
i.dy=u
u=a6.x
a6=u==null?a6.x=D.z():u
a6.k(0,i.gfb())
a6=i.dx
u=a6.y
a6=u==null?a6.y=D.z():u
a6.k(0,i.ga9())
i.fr=null
a6=i.dx
h=V.j9()
u=U.iU(V.jD(V.jL(),h,new V.v(0,-1,-1)))
g=new V.M(1,1,1)
f=new D.be()
f.c=new V.M(1,1,1)
f.a=V.k3()
f.d=V.j9()
f.e=V.lh()
e=f.b
f.b=u
u.gl().k(0,f.gdH())
u=new D.q("mover",e,f.b)
u.b=!0
f.ap(u)
if(!f.c.n(0,g)){e=f.c
f.c=g
u=new D.q("color",e,g)
u.b=!0
f.ap(u)}a6.k(0,f)
a6=i.r
a6.saR(0,new V.M(0,0,1))
a6=i.x
a6.saR(0,new V.M(0,1,0))
a6=i.z
a6.saR(0,new V.M(1,0,0))
a6=i.z
a6.cA(new A.Q(!0,!1,a6.c.c))
a6.cB(10)
a6=s.f.d6("../resources/maskonaive",".jpg")
d=M.iV()
u=new O.cU()
u.b=1.0471975511965976
u.d=new V.M(1,1,1)
e=u.c
u.c=a6
a6.gl().k(0,u.ga9())
a6=new D.q("boxTexture",e,u.c)
a6.b=!0
u.F(a6)
d.san(u)
d.sax(0,k)
d.saQ(l)
c=M.jw()
c.saQ(l)
c.san(i)
c.sax(0,k)
c.e.k(0,j)
b=new O.ez()
b.scO(a5)
b.scL(a5)
a=V.j4()
if(!J.w(b.d,a)){b.d=a
b.V()}a=V.j4()
if(!J.w(b.e,a)){b.e=a
b.V()}b.scK(a5)
b.scO(k.ch)
b.scL(o.ch)
b.scK(V.jE(0.05,0.05,0.05))
a0=M.iV()
a0.san(b)
a1=new O.d0()
a1.a=new V.X(0,0,0,0)
a6=O.eo(O.aZ)
a1.c=a6
a6.az(a1.gew(),a1.gey())
a1.d=0
a1.e=null
a1.r=a1.f=C.i
a2=new V.X(0,0,0,0)
if(!a1.a.n(0,a2)){e=a1.a
a1.a=a2
a6=new D.q("backColor",e,a2)
a6.b=!0
a1.F(a6)}a1.scI(C.i)
a1.scI(C.h)
a6=a1.c
u=o.ch
a6.k(0,O.jS(V.bU(0,0.8,0.2,0.2),!0,u))
u=a1.c
a6=k.ch
u.k(0,O.jS(V.bU(0,0.6,0.2,0.2),!1,a6))
a3=M.iV()
a3.sax(0,X.iZ(!1,a5))
a3.san(a1)
a6=M.ab
u=H.c([d,c,n,a0,a3],[a6])
f=new M.ck()
f.b4(a6)
f.e=!0
f.f=!1
f.r=null
f.az(f.geY(),f.gf_())
f.bA(0,u)
a6=s.d
if(a6!==f){if(a6!=null)a6.gl().E(0,s.gcb())
s.d=f
f.gl().k(0,s.gcb())
s.cc()}V.mk(s)}}
var w=[C,H,J,P,W,T,R,O,E,Z,D,X,V,U,M,A,F,S]
hunkHelpers.setFunctionNamesIfNecessary(w)
var $={}
H.j2.prototype={}
J.a.prototype={
n:function(a,b){return a===b},
gI:function(a){return H.bS(a)},
i:function(a){return"Instance of '"+H.e(H.bT(a))+"'"}}
J.eY.prototype={
i:function(a){return String(a)},
gI:function(a){return a?519018:218159},
$ib9:1}
J.cx.prototype={
n:function(a,b){return null==b},
i:function(a){return"null"},
gI:function(a){return 0}}
J.cy.prototype={
gI:function(a){return 0},
i:function(a){return String(a)}}
J.fK.prototype={}
J.bZ.prototype={}
J.aO.prototype={
i:function(a){var u=a[$.km()]
if(u==null)return this.dA(a)
return"JavaScript function for "+H.e(J.a3(u))},
$S:function(){return{func:1,opt:[,,,,,,,,,,,,,,,,]}}}
J.aN.prototype={
dh:function(a,b){if(!!a.fixed$length)H.p(P.a_("removeAt"))
if(b<0||b>=a.length)throw H.f(P.cQ(b,null))
return a.splice(b,1)[0]},
E:function(a,b){var u
if(!!a.fixed$length)H.p(P.a_("remove"))
for(u=0;u<a.length;++u)if(J.w(a[u],b)){a.splice(u,1)
return!0}return!1},
bA:function(a,b){var u,t
if(!!a.fixed$length)H.p(P.a_("addAll"))
for(u=b.length,t=0;t<b.length;b.length===u||(0,H.n)(b),++t)a.push(b[t])},
K:function(a,b){var u,t=a.length
for(u=0;u<t;++u){b.$1(a[u])
if(a.length!==t)throw H.f(P.bD(a))}},
q:function(a,b){var u,t,s=a.length,r=new Array(s)
r.fixed$length=Array
for(u=0;u<a.length;++u){t=H.e(a[u])
if(u>=s)return H.b(r,u)
r[u]=t}return r.join(b)},
fS:function(a){return this.q(a,"")},
G:function(a,b){if(b<0||b>=a.length)return H.b(a,b)
return a[b]},
dv:function(a,b,c){var u=a.length
if(b>u)throw H.f(P.ao(b,0,a.length,"start",null))
if(c<b||c>a.length)throw H.f(P.ao(c,b,a.length,"end",null))
if(b===c)return H.c([],[H.e6(a,0)])
return H.c(a.slice(b,c),[H.e6(a,0)])},
gfO:function(a){if(a.length>0)return a[0]
throw H.f(H.jy())},
gbR:function(a){var u=a.length
if(u>0)return a[u-1]
throw H.f(H.jy())},
bi:function(a,b){if(!!a.immutable$list)H.p(P.a_("sort"))
H.cV(a,0,a.length-1,b)},
ab:function(a,b){var u
for(u=0;u<a.length;++u)if(J.w(a[u],b))return!0
return!1},
i:function(a){return P.j_(a,"[","]")},
gR:function(a){return new J.W(a,a.length)},
gI:function(a){return H.bS(a)},
gj:function(a){return a.length},
sj:function(a,b){if(!!a.fixed$length)H.p(P.a_("set length"))
if(b<0)throw H.f(P.ao(b,0,null,"newLength",null))
a.length=b},
h:function(a,b){if(b>=a.length||b<0)throw H.f(H.bv(a,b))
return a[b]},
m:function(a,b,c){if(!!a.immutable$list)H.p(P.a_("indexed set"))
if(b>=a.length||b<0)throw H.f(H.bv(a,b))
a[b]=c},
$ij:1}
J.j1.prototype={}
J.W.prototype={
gJ:function(a){return this.d},
A:function(){var u,t=this,s=t.a,r=s.length
if(t.b!==r)throw H.f(H.n(s))
u=t.c
if(u>=r){t.d=null
return!1}t.d=s[u]
t.c=u+1
return!0}}
J.bJ.prototype={
fB:function(a,b){var u
if(typeof b!=="number")throw H.f(H.b8(b))
if(a<b)return-1
else if(a>b)return 1
else if(a===b){if(a===0){u=this.gbd(b)
if(this.gbd(a)===u)return 0
if(this.gbd(a))return-1
return 1}return 0}else if(isNaN(a)){if(isNaN(b))return 0
return 1}else return-1},
gbd:function(a){return a===0?1/a<0:a<0},
hj:function(a){var u
if(a>=-2147483648&&a<=2147483647)return a|0
if(isFinite(a)){u=a<0?Math.ceil(a):Math.floor(a)
return u+0}throw H.f(P.a_(""+a+".toInt()"))},
bN:function(a){var u,t
if(a>=0){if(a<=2147483647)return a|0}else if(a>=-2147483648){u=a|0
return a===u?u:u-1}t=Math.floor(a)
if(isFinite(t))return t
throw H.f(P.a_(""+a+".floor()"))},
W:function(a){if(a>0){if(a!==1/0)return Math.round(a)}else if(a>-1/0)return 0-Math.round(0-a)
throw H.f(P.a_(""+a+".round()"))},
dk:function(a,b){var u
if(b>20)throw H.f(P.ao(b,0,20,"fractionDigits",null))
u=a.toFixed(b)
if(a===0&&this.gbd(a))return"-"+u
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
dq:function(a,b){var u=a%b
if(u===0)return 0
if(u>0)return u
if(b<0)return u-b
else return u+b},
dB:function(a,b){if((a|0)===a)if(b>=1||b<-1)return a/b|0
return this.cD(a,b)},
a5:function(a,b){return(a|0)===a?a/b|0:this.cD(a,b)},
cD:function(a,b){var u=a/b
if(u>=-2147483648&&u<=2147483647)return u|0
if(u>0){if(u!==1/0)return Math.floor(u)}else if(u>-1/0)return Math.ceil(u)
throw H.f(P.a_("Result of truncating division is "+H.e(u)+": "+H.e(a)+" ~/ "+b))},
b8:function(a,b){var u
if(a>0)u=this.fi(a,b)
else{u=b>31?31:b
u=a>>u>>>0}return u},
fi:function(a,b){return b>31?0:a>>>b},
$iG:1,
$ia9:1}
J.cw.prototype={$ix:1}
J.cv.prototype={}
J.bh.prototype={
bE:function(a,b){if(b<0)throw H.f(H.bv(a,b))
if(b>=a.length)H.p(H.bv(a,b))
return a.charCodeAt(b)},
b6:function(a,b){if(b>=a.length)throw H.f(H.bv(a,b))
return a.charCodeAt(b)},
B:function(a,b){if(typeof b!=="string")throw H.f(P.jp(b,null,null))
return a+b},
c7:function(a,b,c){if(c==null)c=a.length
if(b<0)throw H.f(P.cQ(b,null))
if(b>c)throw H.f(P.cQ(b,null))
if(c>a.length)throw H.f(P.cQ(c,null))
return a.substring(b,c)},
aJ:function(a,b){return this.c7(a,b,null)},
u:function(a,b){var u,t
if(0>=b)return""
if(b===1||a.length===0)return a
if(b!==b>>>0)throw H.f(C.A)
for(u=a,t="";!0;){if((b&1)===1)t=u+t
b=b>>>1
if(b===0)break
u+=u}return t},
ae:function(a,b){var u=b-a.length
if(u<=0)return a
return this.u(" ",u)+a},
i:function(a){return a},
gI:function(a){var u,t,s
for(u=a.length,t=0,s=0;s<u;++s){t=536870911&t+a.charCodeAt(s)
t=536870911&t+((524287&t)<<10)
t^=t>>6}t=536870911&t+((67108863&t)<<3)
t^=t>>11
return 536870911&t+((16383&t)<<15)},
gj:function(a){return a.length},
$ir:1}
H.K.prototype={
gj:function(a){return this.a.length},
h:function(a,b){return C.d.bE(this.a,b)},
$ao:function(){return[P.x]},
$aj:function(){return[P.x]}}
H.eG.prototype={}
H.cC.prototype={
gJ:function(a){return this.d},
A:function(){var u,t=this,s=t.a,r=J.jf(s),q=r.gj(s)
if(t.b!==q)throw H.f(P.bD(s))
u=t.c
if(u>=q){t.d=null
return!1}t.d=r.G(s,u);++t.c
return!0}}
H.fa.prototype={
gR:function(a){return new H.fb(J.by(this.a),this.b)},
gj:function(a){return J.bz(this.a)},
G:function(a,b){return this.b.$1(J.jo(this.a,b))},
$aj:function(a,b){return[b]}}
H.fb.prototype={
A:function(){var u=this,t=u.b
if(t.A()){u.a=u.c.$1(t.gJ(t))
return!0}u.a=null
return!1},
gJ:function(a){return this.a}}
H.i3.prototype={
gR:function(a){return new H.i4(J.by(this.a),this.b)}}
H.i4.prototype={
A:function(){var u,t
for(u=this.a,t=this.b;u.A();)if(t.$1(u.gJ(u)))return!0
return!1},
gJ:function(a){var u=this.a
return u.gJ(u)}}
H.cs.prototype={}
H.hJ.prototype={}
H.d8.prototype={}
H.hy.prototype={
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
H.fG.prototype={
i:function(a){var u=this.b
if(u==null)return"NoSuchMethodError: "+H.e(this.a)
return"NoSuchMethodError: method not found: '"+u+"' on null"}}
H.f_.prototype={
i:function(a){var u,t=this,s="NoSuchMethodError: method not found: '",r=t.b
if(r==null)return"NoSuchMethodError: "+H.e(t.a)
u=t.c
if(u==null)return s+r+"' ("+H.e(t.a)+")"
return s+r+"' on '"+u+"' ("+H.e(t.a)+")"}}
H.hI.prototype={
i:function(a){var u=this.a
return u.length===0?"Error":"Error: "+u}}
H.iP.prototype={
$1:function(a){if(!!J.U(a).$ibf)if(a.$thrownJsError==null)a.$thrownJsError=this.a
return a},
$S:7}
H.dL.prototype={
i:function(a){var u,t=this.b
if(t!=null)return t
t=this.a
u=t!==null&&typeof t==="object"?t.stack:null
return this.b=u==null?"":u}}
H.bC.prototype={
i:function(a){var u=this.constructor,t=u==null?null:u.name
return"Closure '"+(t==null?"unknown":t)+"'"},
ghn:function(){return this},
$C:"$1",
$R:1,
$D:null}
H.hi.prototype={}
H.hc.prototype={
i:function(a){var u=this.$static_name
if(u==null)return"Closure of unknown static method"
return"Closure '"+H.e7(u)+"'"}}
H.bA.prototype={
n:function(a,b){var u=this
if(b==null)return!1
if(u===b)return!0
if(!(b instanceof H.bA))return!1
return u.a===b.a&&u.b===b.b&&u.c===b.c},
gI:function(a){var u,t=this.c
if(t==null)u=H.bS(this.a)
else u=typeof t!=="object"?J.ba(t):H.bS(t)
return(u^H.bS(this.b))>>>0},
i:function(a){var u=this.c
if(u==null)u=this.a
return"Closure '"+H.e(this.d)+"' of "+("Instance of '"+H.e(H.bT(u))+"'")}}
H.el.prototype={
i:function(a){return this.a}}
H.fW.prototype={
i:function(a){return"RuntimeError: "+H.e(this.a)}}
H.I.prototype={
gj:function(a){return this.a},
gau:function(a){return new H.cB(this,[H.e6(this,0)])},
cP:function(a,b){var u,t,s=this
if(typeof b==="string"){u=s.b
if(u==null)return!1
return s.ck(u,b)}else if(typeof b==="number"&&(b&0x3ffffff)===b){t=s.c
if(t==null)return!1
return s.ck(t,b)}else return s.fQ(b)},
fQ:function(a){var u=this.d
if(u==null)return!1
return this.bP(this.bo(u,J.ba(a)&0x3ffffff),a)>=0},
h:function(a,b){var u,t,s,r,q=this
if(typeof b==="string"){u=q.b
if(u==null)return
t=q.b7(u,b)
s=t==null?null:t.b
return s}else if(typeof b==="number"&&(b&0x3ffffff)===b){r=q.c
if(r==null)return
t=q.b7(r,b)
s=t==null?null:t.b
return s}else return q.fR(b)},
fR:function(a){var u,t,s=this.d
if(s==null)return
u=this.bo(s,J.ba(a)&0x3ffffff)
t=this.bP(u,a)
if(t<0)return
return u[t].b},
m:function(a,b,c){var u,t,s,r,q,p,o=this
if(typeof b==="string"){u=o.b
o.cf(u==null?o.b=o.br():u,b,c)}else if(typeof b==="number"&&(b&0x3ffffff)===b){t=o.c
o.cf(t==null?o.c=o.br():t,b,c)}else{s=o.d
if(s==null)s=o.d=o.br()
r=J.ba(b)&0x3ffffff
q=o.bo(s,r)
if(q==null)o.bw(s,r,[o.bs(b,c)])
else{p=o.bP(q,b)
if(p>=0)q[p].b=c
else q.push(o.bs(b,c))}}},
K:function(a,b){var u=this,t=u.e,s=u.r
for(;t!=null;){b.$2(t.a,t.b)
if(s!==u.r)throw H.f(P.bD(u))
t=t.c}},
cf:function(a,b,c){var u=this.b7(a,b)
if(u==null)this.bw(a,b,this.bs(b,c))
else u.b=c},
bs:function(a,b){var u=this,t=new H.f3(a,b)
if(u.e==null)u.e=u.f=t
else u.f=u.f.c=t;++u.a
u.r=u.r+1&67108863
return t},
bP:function(a,b){var u,t
if(a==null)return-1
u=a.length
for(t=0;t<u;++t)if(J.w(a[t].a,b))return t
return-1},
i:function(a){return P.jB(this)},
b7:function(a,b){return a[b]},
bo:function(a,b){return a[b]},
bw:function(a,b,c){a[b]=c},
dX:function(a,b){delete a[b]},
ck:function(a,b){return this.b7(a,b)!=null},
br:function(){var u="<non-identifier-key>",t=Object.create(null)
this.bw(t,u,t)
this.dX(t,u)
return t}}
H.f3.prototype={}
H.cB.prototype={
gj:function(a){return this.a.a},
gR:function(a){var u=this.a,t=new H.f4(u,u.r)
t.c=u.e
return t}}
H.f4.prototype={
gJ:function(a){return this.d},
A:function(){var u=this,t=u.a
if(u.b!==t.r)throw H.f(P.bD(t))
else{t=u.c
if(t==null){u.d=null
return!1}else{u.d=t.a
u.c=t.c
return!0}}}}
H.iF.prototype={
$1:function(a){return this.a(a)},
$S:7}
H.iG.prototype={
$2:function(a,b){return this.a(a,b)}}
H.iH.prototype={
$1:function(a){return this.a(a)}}
H.eZ.prototype={
i:function(a){return"RegExp/"+this.a+"/"+this.b.flags}}
H.bP.prototype={}
H.cI.prototype={
gj:function(a){return a.length},
$iu:1,
$au:function(){}}
H.bO.prototype={
h:function(a,b){H.b6(b,a,a.length)
return a[b]},
$ao:function(){return[P.G]},
$ij:1,
$aj:function(){return[P.G]}}
H.cJ.prototype={
$ao:function(){return[P.x]},
$ij:1,
$aj:function(){return[P.x]}}
H.fx.prototype={
h:function(a,b){H.b6(b,a,a.length)
return a[b]}}
H.fy.prototype={
h:function(a,b){H.b6(b,a,a.length)
return a[b]}}
H.fz.prototype={
h:function(a,b){H.b6(b,a,a.length)
return a[b]}}
H.fA.prototype={
h:function(a,b){H.b6(b,a,a.length)
return a[b]}}
H.fB.prototype={
h:function(a,b){H.b6(b,a,a.length)
return a[b]}}
H.cK.prototype={
gj:function(a){return a.length},
h:function(a,b){H.b6(b,a,a.length)
return a[b]}}
H.fC.prototype={
gj:function(a){return a.length},
h:function(a,b){H.b6(b,a,a.length)
return a[b]}}
H.c1.prototype={}
H.c2.prototype={}
H.c3.prototype={}
H.c4.prototype={}
P.i6.prototype={
$1:function(a){var u=this.a,t=u.a
u.a=null
t.$0()},
$S:17}
P.i5.prototype={
$1:function(a){var u,t
this.a.a=a
u=this.b
t=this.c
u.firstChild?u.removeChild(t):u.appendChild(t)}}
P.i7.prototype={
$0:function(){this.a.$0()}}
P.i8.prototype={
$0:function(){this.a.$0()}}
P.dR.prototype={
dL:function(a,b){if(self.setTimeout!=null)self.setTimeout(H.bu(new P.it(this,b),0),a)
else throw H.f(P.a_("`setTimeout()` not found."))},
dM:function(a,b){if(self.setTimeout!=null)self.setInterval(H.bu(new P.is(this,a,Date.now(),b),0),a)
else throw H.f(P.a_("Periodic timer."))},
$id2:1}
P.it.prototype={
$0:function(){this.a.c=1
this.b.$0()}}
P.is.prototype={
$0:function(){var u,t=this,s=t.a,r=s.c+1,q=t.b
if(q>0){u=Date.now()-t.c
if(u>(r+1)*q)r=C.c.dB(u,q)}s.c=r
t.d.$1(s)}}
P.dd.prototype={}
P.cZ.prototype={}
P.hf.prototype={}
P.d2.prototype={}
P.iv.prototype={}
P.iA.prototype={
$0:function(){var u,t=this.a,s=t.a
t=s==null?t.a=new P.cN():s
s=this.b
if(s==null)throw H.f(t)
u=H.f(t)
u.stack=s.i(0)
throw u}}
P.il.prototype={
he:function(a){var u,t,s,r=null
try{if(C.e===$.ad){a.$0()
return}P.lP(r,r,this,a)}catch(s){u=H.iO(s)
t=H.jh(s)
P.k6(r,r,this,u,t)}},
hf:function(a,b){var u,t,s,r=null
try{if(C.e===$.ad){a.$1(b)
return}P.lQ(r,r,this,a,b)}catch(s){u=H.iO(s)
t=H.jh(s)
P.k6(r,r,this,u,t)}},
hg:function(a,b){return this.hf(a,b,null)},
fz:function(a){return new P.im(this,a)},
cH:function(a,b){return new P.io(this,a,b)}}
P.im.prototype={
$0:function(){return this.a.he(this.b)}}
P.io.prototype={
$1:function(a){return this.a.hg(this.b,a)},
$S:function(){return{func:1,ret:-1,args:[this.c]}}}
P.ii.prototype={
gR:function(a){var u=new P.dt(this,this.r)
u.c=this.e
return u},
gj:function(a){return this.a},
k:function(a,b){var u,t,s=this
if(typeof b==="string"&&b!=="__proto__"){u=s.b
return s.cg(u==null?s.b=P.jb():u,b)}else if(typeof b==="number"&&(b&1073741823)===b){t=s.c
return s.cg(t==null?s.c=P.jb():t,b)}else return s.dO(0,b)},
dO:function(a,b){var u,t,s=this,r=s.d
if(r==null)r=s.d=P.jb()
u=s.ci(b)
t=r[u]
if(t==null)r[u]=[s.bk(b)]
else{if(s.cn(t,b)>=0)return!1
t.push(s.bk(b))}return!0},
E:function(a,b){if(typeof b==="number"&&(b&1073741823)===b)return this.f8(this.c,b)
else return this.f7(0,b)},
f7:function(a,b){var u,t,s=this,r=s.d
if(r==null)return!1
u=s.e_(r,b)
t=s.cn(u,b)
if(t<0)return!1
s.cE(u.splice(t,1)[0])
return!0},
cg:function(a,b){if(a[b]!=null)return!1
a[b]=this.bk(b)
return!0},
f8:function(a,b){var u
if(a==null)return!1
u=a[b]
if(u==null)return!1
this.cE(u)
delete a[b]
return!0},
co:function(){this.r=1073741823&this.r+1},
bk:function(a){var u,t=this,s=new P.ij(a)
if(t.e==null)t.e=t.f=s
else{u=t.f
s.c=u
t.f=u.b=s}++t.a
t.co()
return s},
cE:function(a){var u=this,t=a.c,s=a.b
if(t==null)u.e=s
else t.b=s
if(s==null)u.f=t
else s.c=t;--u.a
u.co()},
ci:function(a){return J.ba(a)&1073741823},
e_:function(a,b){return a[this.ci(b)]},
cn:function(a,b){var u,t
if(a==null)return-1
u=a.length
for(t=0;t<u;++t)if(J.w(a[t].a,b))return t
return-1}}
P.ij.prototype={}
P.dt.prototype={
gJ:function(a){return this.d},
A:function(){var u=this,t=u.a
if(u.b!==t.r)throw H.f(P.bD(t))
else{t=u.c
if(t==null){u.d=null
return!1}else{u.d=t.a
u.c=t.b
return!0}}}}
P.f5.prototype={$ij:1}
P.o.prototype={
gR:function(a){return new H.cC(a,this.gj(a))},
G:function(a,b){return this.h(a,b)},
hl:function(a,b){var u,t,s=this,r=H.c([],[H.m8(s,a,"o",0)])
C.a.sj(r,s.gj(a))
for(u=0;u<s.gj(a);++u){t=s.h(a,u)
if(u>=r.length)return H.b(r,u)
r[u]=t}return r},
hk:function(a){return this.hl(a,!0)},
i:function(a){return P.j_(a,"[","]")}}
P.f8.prototype={}
P.f9.prototype={
$2:function(a,b){var u,t=this.a
if(!t.a)this.b.a+=", "
t.a=!1
t=this.b
u=t.a+=H.e(a)
t.a=u+": "
t.a+=H.e(b)},
$S:8}
P.au.prototype={
K:function(a,b){var u,t
for(u=J.by(this.gau(a));u.A();){t=u.gJ(u)
b.$2(t,this.h(a,t))}},
gj:function(a){return J.bz(this.gau(a))},
i:function(a){return P.jB(a)}}
P.ip.prototype={
i:function(a){return P.j_(this,"{","}")},
G:function(a,b){var u,t,s
P.jO(b,"index")
for(u=P.ln(this,this.r),t=0;u.A();){s=u.d
if(b===t)return s;++t}throw H.f(P.E(b,this,"index",null,t))},
$ij:1}
P.du.prototype={}
P.en.prototype={}
P.es.prototype={}
P.eH.prototype={}
P.hM.prototype={}
P.hN.prototype={
fC:function(a){var u,t,s=P.jP(0,null,a.length),r=s-0
if(r===0)return new Uint8Array(0)
u=new Uint8Array(r*3)
t=new P.iu(u)
if(t.dZ(a,0,s)!==s)t.cF(C.d.bE(a,s-1),0)
return new Uint8Array(u.subarray(0,H.lr(0,t.b,u.length)))}}
P.iu.prototype={
cF:function(a,b){var u,t=this,s=t.c,r=t.b,q=r+1,p=s.length
if((b&64512)===56320){u=65536+((a&1023)<<10)|b&1023
t.b=q
if(r>=p)return H.b(s,r)
s[r]=240|u>>>18
r=t.b=q+1
if(q>=p)return H.b(s,q)
s[q]=128|u>>>12&63
q=t.b=r+1
if(r>=p)return H.b(s,r)
s[r]=128|u>>>6&63
t.b=q+1
if(q>=p)return H.b(s,q)
s[q]=128|u&63
return!0}else{t.b=q
if(r>=p)return H.b(s,r)
s[r]=224|a>>>12
r=t.b=q+1
if(q>=p)return H.b(s,q)
s[q]=128|a>>>6&63
t.b=r+1
if(r>=p)return H.b(s,r)
s[r]=128|a&63
return!1}},
dZ:function(a,b,c){var u,t,s,r,q,p,o,n=this
if(b!==c&&(C.d.bE(a,c-1)&64512)===55296)--c
for(u=n.c,t=u.length,s=b;s<c;++s){r=C.d.b6(a,s)
if(r<=127){q=n.b
if(q>=t)break
n.b=q+1
u[q]=r}else if((r&64512)===55296){if(n.b+3>=t)break
p=s+1
if(n.cF(r,C.d.b6(a,p)))s=p}else if(r<=2047){q=n.b
o=q+1
if(o>=t)break
n.b=o
if(q>=t)return H.b(u,q)
u[q]=192|r>>>6
n.b=o+1
u[o]=128|r&63}else{q=n.b
if(q+2>=t)break
o=n.b=q+1
if(q>=t)return H.b(u,q)
u[q]=224|r>>>12
q=n.b=o+1
if(o>=t)return H.b(u,o)
u[o]=128|r>>>6&63
n.b=q+1
if(q>=t)return H.b(u,q)
u[q]=128|r&63}}return s}}
P.b9.prototype={}
P.a5.prototype={
n:function(a,b){if(b==null)return!1
return b instanceof P.a5&&this.a===b.a&&!0},
gI:function(a){var u=this.a
return(u^C.c.b8(u,30))&1073741823},
i:function(a){var u=this,t=P.kK(H.l3(u)),s=P.cn(H.l1(u)),r=P.cn(H.kY(u)),q=P.cn(H.kZ(u)),p=P.cn(H.l0(u)),o=P.cn(H.l2(u)),n=P.kL(H.l_(u)),m=t+"-"+s+"-"+r+" "+q+":"+p+":"+o+"."+n
return m}}
P.G.prototype={}
P.aF.prototype={
n:function(a,b){if(b==null)return!1
return b instanceof P.aF&&this.a===b.a},
gI:function(a){return C.c.gI(this.a)},
i:function(a){var u,t,s,r=new P.eF(),q=this.a
if(q<0)return"-"+new P.aF(0-q).i(0)
u=r.$1(C.c.a5(q,6e7)%60)
t=r.$1(C.c.a5(q,1e6)%60)
s=new P.eE().$1(q%1e6)
return""+C.c.a5(q,36e8)+":"+H.e(u)+":"+H.e(t)+"."+H.e(s)}}
P.eE.prototype={
$1:function(a){if(a>=1e5)return""+a
if(a>=1e4)return"0"+a
if(a>=1000)return"00"+a
if(a>=100)return"000"+a
if(a>=10)return"0000"+a
return"00000"+a}}
P.eF.prototype={
$1:function(a){if(a>=10)return""+a
return"0"+a}}
P.bf.prototype={}
P.cN.prototype={
i:function(a){return"Throw of null."}}
P.ah.prototype={
gbm:function(){return"Invalid argument"+(!this.a?"(s)":"")},
gbl:function(){return""},
i:function(a){var u,t,s,r,q=this,p=q.c,o=p!=null?" ("+p+")":""
p=q.d
u=p==null?"":": "+p
t=q.gbm()+o+u
if(!q.a)return t
s=q.gbl()
r=P.iY(q.b)
return t+s+": "+r}}
P.bn.prototype={
gbm:function(){return"RangeError"},
gbl:function(){var u,t,s=this.e
if(s==null){s=this.f
u=s!=null?": Not less than or equal to "+H.e(s):""}else{t=this.f
if(t==null)u=": Not greater than or equal to "+H.e(s)
else if(t>s)u=": Not in range "+H.e(s)+".."+H.e(t)+", inclusive"
else u=t<s?": Valid value range is empty":": Only valid value is "+H.e(s)}return u}}
P.eW.prototype={
gbm:function(){return"RangeError"},
gbl:function(){var u,t=this.b
if(typeof t!=="number")return t.ah()
if(t<0)return": index must not be negative"
u=this.f
if(u===0)return": no indices are valid"
return": index should be less than "+H.e(u)},
gj:function(a){return this.f}}
P.hK.prototype={
i:function(a){return"Unsupported operation: "+this.a}}
P.hH.prototype={
i:function(a){var u=this.a
return u!=null?"UnimplementedError: "+u:"UnimplementedError"}}
P.hb.prototype={
i:function(a){return"Bad state: "+this.a}}
P.er.prototype={
i:function(a){var u=this.a
if(u==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+P.iY(u)+"."}}
P.fJ.prototype={
i:function(a){return"Out of Memory"},
$ibf:1}
P.cX.prototype={
i:function(a){return"Stack Overflow"},
$ibf:1}
P.ex.prototype={
i:function(a){var u=this.a
return u==null?"Reading static variable during its initialization":"Reading static variable '"+u+"' during its initialization"}}
P.dl.prototype={
i:function(a){return"Exception: "+this.a}}
P.eS.prototype={
i:function(a){var u=this.a,t=""!==u?"FormatException: "+u:"FormatException",s=this.b,r=s.length>78?C.d.c7(s,0,75)+"...":s
return t+"\n"+r}}
P.x.prototype={}
P.j.prototype={
gj:function(a){var u,t=this.gR(this)
for(u=0;t.A();)++u
return u},
G:function(a,b){var u,t,s
P.jO(b,"index")
for(u=this.gR(this),t=0;u.A();){s=u.gJ(u)
if(b===t)return s;++t}throw H.f(P.E(b,this,"index",null,t))},
i:function(a){return P.kN(this,"(",")")}}
P.eX.prototype={}
P.bk.prototype={$ij:1}
P.cE.prototype={}
P.aR.prototype={
gI:function(a){return P.Z.prototype.gI.call(this,this)},
i:function(a){return"null"}}
P.a9.prototype={}
P.Z.prototype={constructor:P.Z,$iZ:1,
n:function(a,b){return this===b},
gI:function(a){return H.bS(this)},
i:function(a){return"Instance of '"+H.e(H.bT(this))+"'"},
toString:function(){return this.i(this)}}
P.r.prototype={}
P.aW.prototype={
gj:function(a){return this.a.length},
i:function(a){var u=this.a
return u.charCodeAt(0)==0?u:u}}
W.l.prototype={}
W.e9.prototype={
gj:function(a){return a.length}}
W.eb.prototype={
i:function(a){return String(a)}}
W.ec.prototype={
i:function(a){return String(a)}}
W.ch.prototype={}
W.bc.prototype={
c3:function(a,b,c){if(c!=null)return a.getContext(b,P.lZ(c))
return a.getContext(b)},
dn:function(a,b){return this.c3(a,b,null)},
$ibc:1}
W.aE.prototype={
gj:function(a){return a.length}}
W.et.prototype={
gj:function(a){return a.length}}
W.C.prototype={$iC:1}
W.bE.prototype={
gj:function(a){return a.length}}
W.eu.prototype={}
W.a4.prototype={}
W.aj.prototype={}
W.ev.prototype={
gj:function(a){return a.length}}
W.ew.prototype={
gj:function(a){return a.length}}
W.ey.prototype={
gj:function(a){return a.length}}
W.eB.prototype={
i:function(a){return String(a)}}
W.cp.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.E(b,a,null,null,null))
return a[b]},
G:function(a,b){if(b<0||b>=a.length)return H.b(a,b)
return a[b]},
$iu:1,
$au:function(){return[[P.a7,P.a9]]},
$ao:function(){return[[P.a7,P.a9]]},
$ij:1,
$aj:function(){return[[P.a7,P.a9]]}}
W.cq.prototype={
i:function(a){return"Rectangle ("+H.e(a.left)+", "+H.e(a.top)+") "+H.e(this.gag(a))+" x "+H.e(this.gac(a))},
n:function(a,b){var u
if(b==null)return!1
u=J.U(b)
if(!u.$ia7)return!1
return a.left===u.gbe(b)&&a.top===u.gbg(b)&&this.gag(a)===u.gag(b)&&this.gac(a)===u.gac(b)},
gI:function(a){return W.k4(C.b.gI(a.left),C.b.gI(a.top),C.b.gI(this.gag(a)),C.b.gI(this.gac(a)))},
gcJ:function(a){return a.bottom},
gac:function(a){return a.height},
gbe:function(a){return a.left},
gc1:function(a){return a.right},
gbg:function(a){return a.top},
gag:function(a){return a.width},
$ia7:1,
$aa7:function(){return[P.a9]}}
W.eC.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.E(b,a,null,null,null))
return a[b]},
G:function(a,b){if(b<0||b>=a.length)return H.b(a,b)
return a[b]},
$iu:1,
$au:function(){return[P.r]},
$ao:function(){return[P.r]},
$ij:1,
$aj:function(){return[P.r]}}
W.eD.prototype={
gj:function(a){return a.length}}
W.ia.prototype={
gj:function(a){return this.b.length},
h:function(a,b){var u=this.b
if(b<0||b>=u.length)return H.b(u,b)
return u[b]},
k:function(a,b){this.a.appendChild(b)
return b},
gR:function(a){var u=this.hk(this)
return new J.W(u,u.length)},
$ao:function(){return[W.Y]},
$aj:function(){return[W.Y]}}
W.Y.prototype={
gcM:function(a){return new W.ia(a,a.children)},
gcN:function(a){var u=a.clientLeft,t=a.clientTop,s=a.clientWidth,r=a.clientHeight
if(typeof s!=="number")return s.ah()
if(s<0)s=-s*0
if(typeof r!=="number")return r.ah()
if(r<0)r=-r*0
return new P.a7(u,t,s,r,[P.a9])},
i:function(a){return a.localName},
$iY:1}
W.i.prototype={$ii:1}
W.d.prototype={
fp:function(a,b,c,d){if(c!=null)this.dP(a,b,c,!1)},
dP:function(a,b,c,d){return a.addEventListener(b,H.bu(c,1),!1)}}
W.aI.prototype={$iaI:1}
W.eM.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.E(b,a,null,null,null))
return a[b]},
G:function(a,b){if(b<0||b>=a.length)return H.b(a,b)
return a[b]},
$iu:1,
$au:function(){return[W.aI]},
$ao:function(){return[W.aI]},
$ij:1,
$aj:function(){return[W.aI]}}
W.eN.prototype={
gj:function(a){return a.length}}
W.eR.prototype={
gj:function(a){return a.length}}
W.aJ.prototype={$iaJ:1}
W.eU.prototype={
gj:function(a){return a.length}}
W.bH.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.E(b,a,null,null,null))
return a[b]},
G:function(a,b){if(b<0||b>=a.length)return H.b(a,b)
return a[b]},
$iu:1,
$au:function(){return[W.F]},
$ao:function(){return[W.F]},
$ij:1,
$aj:function(){return[W.F]}}
W.aK.prototype={$iaK:1,
gcR:function(a){return a.data}}
W.bI.prototype={$ibI:1}
W.bi.prototype={$ibi:1}
W.f6.prototype={
i:function(a){return String(a)}}
W.fq.prototype={
gj:function(a){return a.length}}
W.fr.prototype={
h:function(a,b){return P.aC(a.get(b))},
K:function(a,b){var u,t=a.entries()
for(;!0;){u=t.next()
if(u.done)return
b.$2(u.value[0],P.aC(u.value[1]))}},
gau:function(a){var u=H.c([],[P.r])
this.K(a,new W.fs(u))
return u},
gj:function(a){return a.size}}
W.fs.prototype={
$2:function(a,b){return this.a.push(a)}}
W.ft.prototype={
h:function(a,b){return P.aC(a.get(b))},
K:function(a,b){var u,t=a.entries()
for(;!0;){u=t.next()
if(u.done)return
b.$2(u.value[0],P.aC(u.value[1]))}},
gau:function(a){var u=H.c([],[P.r])
this.K(a,new W.fu(u))
return u},
gj:function(a){return a.size}}
W.fu.prototype={
$2:function(a,b){return this.a.push(a)}}
W.aP.prototype={$iaP:1}
W.fv.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.E(b,a,null,null,null))
return a[b]},
G:function(a,b){if(b<0||b>=a.length)return H.b(a,b)
return a[b]},
$iu:1,
$au:function(){return[W.aP]},
$ao:function(){return[W.aP]},
$ij:1,
$aj:function(){return[W.aP]}}
W.an.prototype={$ian:1}
W.i9.prototype={
gR:function(a){var u=this.a.childNodes
return new W.ct(u,u.length)},
gj:function(a){return this.a.childNodes.length},
h:function(a,b){var u=this.a.childNodes
if(b<0||b>=u.length)return H.b(u,b)
return u[b]},
$ao:function(){return[W.F]},
$aj:function(){return[W.F]}}
W.F.prototype={
i:function(a){var u=a.nodeValue
return u==null?this.dz(a):u},
$iF:1}
W.cL.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.E(b,a,null,null,null))
return a[b]},
G:function(a,b){if(b<0||b>=a.length)return H.b(a,b)
return a[b]},
$iu:1,
$au:function(){return[W.F]},
$ao:function(){return[W.F]},
$ij:1,
$aj:function(){return[W.F]}}
W.aS.prototype={$iaS:1,
gj:function(a){return a.length}}
W.fL.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.E(b,a,null,null,null))
return a[b]},
G:function(a,b){if(b<0||b>=a.length)return H.b(a,b)
return a[b]},
$iu:1,
$au:function(){return[W.aS]},
$ao:function(){return[W.aS]},
$ij:1,
$aj:function(){return[W.aS]}}
W.fU.prototype={
h:function(a,b){return P.aC(a.get(b))},
K:function(a,b){var u,t=a.entries()
for(;!0;){u=t.next()
if(u.done)return
b.$2(u.value[0],P.aC(u.value[1]))}},
gau:function(a){var u=H.c([],[P.r])
this.K(a,new W.fV(u))
return u},
gj:function(a){return a.size}}
W.fV.prototype={
$2:function(a,b){return this.a.push(a)}}
W.fX.prototype={
gj:function(a){return a.length}}
W.aT.prototype={$iaT:1}
W.h7.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.E(b,a,null,null,null))
return a[b]},
G:function(a,b){if(b<0||b>=a.length)return H.b(a,b)
return a[b]},
$iu:1,
$au:function(){return[W.aT]},
$ao:function(){return[W.aT]},
$ij:1,
$aj:function(){return[W.aT]}}
W.aU.prototype={$iaU:1}
W.h8.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.E(b,a,null,null,null))
return a[b]},
G:function(a,b){if(b<0||b>=a.length)return H.b(a,b)
return a[b]},
$iu:1,
$au:function(){return[W.aU]},
$ao:function(){return[W.aU]},
$ij:1,
$aj:function(){return[W.aU]}}
W.aV.prototype={$iaV:1,
gj:function(a){return a.length}}
W.hd.prototype={
h:function(a,b){return a.getItem(b)},
K:function(a,b){var u,t
for(u=0;!0;++u){t=a.key(u)
if(t==null)return
b.$2(t,a.getItem(t))}},
gau:function(a){var u=H.c([],[P.r])
this.K(a,new W.he(u))
return u},
gj:function(a){return a.length}}
W.he.prototype={
$2:function(a,b){return this.a.push(a)}}
W.az.prototype={$iaz:1}
W.aX.prototype={$iaX:1}
W.aA.prototype={$iaA:1}
W.hj.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.E(b,a,null,null,null))
return a[b]},
G:function(a,b){if(b<0||b>=a.length)return H.b(a,b)
return a[b]},
$iu:1,
$au:function(){return[W.aA]},
$ao:function(){return[W.aA]},
$ij:1,
$aj:function(){return[W.aA]}}
W.hk.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.E(b,a,null,null,null))
return a[b]},
G:function(a,b){if(b<0||b>=a.length)return H.b(a,b)
return a[b]},
$iu:1,
$au:function(){return[W.aX]},
$ao:function(){return[W.aX]},
$ij:1,
$aj:function(){return[W.aX]}}
W.hs.prototype={
gj:function(a){return a.length}}
W.b_.prototype={$ib_:1}
W.bo.prototype={$ibo:1}
W.hv.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.E(b,a,null,null,null))
return a[b]},
G:function(a,b){if(b<0||b>=a.length)return H.b(a,b)
return a[b]},
$iu:1,
$au:function(){return[W.b_]},
$ao:function(){return[W.b_]},
$ij:1,
$aj:function(){return[W.b_]}}
W.hw.prototype={
gj:function(a){return a.length}}
W.b0.prototype={}
W.hL.prototype={
i:function(a){return String(a)}}
W.i2.prototype={
gj:function(a){return a.length}}
W.b5.prototype={
gfG:function(a){if(a.deltaY!==undefined)return a.deltaY
throw H.f(P.a_("deltaY is not supported"))},
gfF:function(a){if(a.deltaX!==undefined)return a.deltaX
throw H.f(P.a_("deltaX is not supported"))},
$ib5:1}
W.c0.prototype={
fa:function(a,b){return a.requestAnimationFrame(H.bu(b,1))},
dY:function(a){if(!!(a.requestAnimationFrame&&a.cancelAnimationFrame))return;(function(b){var u=['ms','moz','webkit','o']
for(var t=0;t<u.length&&!b.requestAnimationFrame;++t){b.requestAnimationFrame=b[u[t]+'RequestAnimationFrame']
b.cancelAnimationFrame=b[u[t]+'CancelAnimationFrame']||b[u[t]+'CancelRequestAnimationFrame']}if(b.requestAnimationFrame&&b.cancelAnimationFrame)return
b.requestAnimationFrame=function(c){return window.setTimeout(function(){c(Date.now())},16)}
b.cancelAnimationFrame=function(c){clearTimeout(c)}})(a)}}
W.ib.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.E(b,a,null,null,null))
return a[b]},
G:function(a,b){if(b<0||b>=a.length)return H.b(a,b)
return a[b]},
$iu:1,
$au:function(){return[W.C]},
$ao:function(){return[W.C]},
$ij:1,
$aj:function(){return[W.C]}}
W.dg.prototype={
i:function(a){return"Rectangle ("+H.e(a.left)+", "+H.e(a.top)+") "+H.e(a.width)+" x "+H.e(a.height)},
n:function(a,b){var u
if(b==null)return!1
u=J.U(b)
if(!u.$ia7)return!1
return a.left===u.gbe(b)&&a.top===u.gbg(b)&&a.width===u.gag(b)&&a.height===u.gac(b)},
gI:function(a){return W.k4(C.b.gI(a.left),C.b.gI(a.top),C.b.gI(a.width),C.b.gI(a.height))},
gac:function(a){return a.height},
gag:function(a){return a.width}}
W.ie.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.E(b,a,null,null,null))
return a[b]},
G:function(a,b){if(b<0||b>=a.length)return H.b(a,b)
return a[b]},
$iu:1,
$au:function(){return[W.aJ]},
$ao:function(){return[W.aJ]},
$ij:1,
$aj:function(){return[W.aJ]}}
W.dz.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.E(b,a,null,null,null))
return a[b]},
G:function(a,b){if(b<0||b>=a.length)return H.b(a,b)
return a[b]},
$iu:1,
$au:function(){return[W.F]},
$ao:function(){return[W.F]},
$ij:1,
$aj:function(){return[W.F]}}
W.iq.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.E(b,a,null,null,null))
return a[b]},
G:function(a,b){if(b<0||b>=a.length)return H.b(a,b)
return a[b]},
$iu:1,
$au:function(){return[W.aV]},
$ao:function(){return[W.aV]},
$ij:1,
$aj:function(){return[W.aV]}}
W.ir.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.E(b,a,null,null,null))
return a[b]},
G:function(a,b){if(b<0||b>=a.length)return H.b(a,b)
return a[b]},
$iu:1,
$au:function(){return[W.az]},
$ao:function(){return[W.az]},
$ij:1,
$aj:function(){return[W.az]}}
W.ic.prototype={}
W.id.prototype={
$1:function(a){return this.a.$1(a)}}
W.D.prototype={
gR:function(a){return new W.ct(a,this.gj(a))}}
W.ct.prototype={
A:function(){var u=this,t=u.c+1,s=u.b
if(t<s){u.d=J.e8(u.a,t)
u.c=t
return!0}u.d=null
u.c=s
return!1},
gJ:function(a){return this.d}}
W.df.prototype={}
W.dh.prototype={}
W.di.prototype={}
W.dj.prototype={}
W.dk.prototype={}
W.dm.prototype={}
W.dn.prototype={}
W.dp.prototype={}
W.dq.prototype={}
W.dv.prototype={}
W.dw.prototype={}
W.dx.prototype={}
W.dy.prototype={}
W.dA.prototype={}
W.dB.prototype={}
W.dE.prototype={}
W.dF.prototype={}
W.dG.prototype={}
W.c5.prototype={}
W.c6.prototype={}
W.dH.prototype={}
W.dI.prototype={}
W.dM.prototype={}
W.dP.prototype={}
W.dQ.prototype={}
W.c7.prototype={}
W.c8.prototype={}
W.dS.prototype={}
W.dT.prototype={}
W.dX.prototype={}
W.dY.prototype={}
W.dZ.prototype={}
W.e_.prototype={}
W.e0.prototype={}
W.e1.prototype={}
W.e2.prototype={}
W.e3.prototype={}
W.e4.prototype={}
W.e5.prototype={}
P.dW.prototype={$iaK:1,
gcR:function(a){return this.a}}
P.iB.prototype={
$2:function(a,b){this.a[a]=b},
$S:8}
P.eO.prototype={
gbp:function(){var u=this.b,t=H.kc(u,"o",0)
return new H.fa(new H.i3(u,new P.eP(),[t]),new P.eQ(),[t,W.Y])},
k:function(a,b){this.b.a.appendChild(b)},
gj:function(a){return J.bz(this.gbp().a)},
h:function(a,b){var u=this.gbp()
return u.b.$1(J.jo(u.a,b))},
gR:function(a){var u=P.jA(this.gbp(),!1,W.Y)
return new J.W(u,u.length)},
$ao:function(){return[W.Y]},
$aj:function(){return[W.Y]}}
P.eP.prototype={
$1:function(a){return!!J.U(a).$iY}}
P.eQ.prototype={
$1:function(a){return H.h(a,"$iY")}}
P.ik.prototype={
gc1:function(a){var u=this.a,t=this.c
if(typeof u!=="number")return u.B()
if(typeof t!=="number")return H.t(t)
return u+t},
gcJ:function(a){var u=this.b,t=this.d
if(typeof u!=="number")return u.B()
if(typeof t!=="number")return H.t(t)
return u+t},
i:function(a){var u=this
return"Rectangle ("+H.e(u.a)+", "+H.e(u.b)+") "+H.e(u.c)+" x "+H.e(u.d)},
n:function(a,b){var u,t,s,r,q=this
if(b==null)return!1
u=J.U(b)
if(!!u.$ia7){t=q.a
if(t==u.gbe(b)){s=q.b
if(s==u.gbg(b)){r=q.c
if(typeof t!=="number")return t.B()
if(typeof r!=="number")return H.t(r)
if(t+r===u.gc1(b)){t=q.d
if(typeof s!=="number")return s.B()
if(typeof t!=="number")return H.t(t)
u=s+t===u.gcJ(b)}else u=!1}else u=!1}else u=!1}else u=!1
return u},
gI:function(a){var u=this,t=u.a,s=J.ba(t),r=u.b,q=J.ba(r),p=u.c
if(typeof t!=="number")return t.B()
if(typeof p!=="number")return H.t(p)
p=C.c.gI(t+p)
t=u.d
if(typeof r!=="number")return r.B()
if(typeof t!=="number")return H.t(t)
t=C.c.gI(r+t)
return P.lm(P.ih(P.ih(P.ih(P.ih(0,s),q),p),t))}}
P.a7.prototype={
gbe:function(a){return this.a},
gbg:function(a){return this.b},
gag:function(a){return this.c},
gac:function(a){return this.d}}
P.bj.prototype={$ibj:1}
P.f1.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.E(b,a,null,null,null))
return a.getItem(b)},
G:function(a,b){return this.h(a,b)},
$ao:function(){return[P.bj]},
$ij:1,
$aj:function(){return[P.bj]}}
P.bl.prototype={$ibl:1}
P.fH.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.E(b,a,null,null,null))
return a.getItem(b)},
G:function(a,b){return this.h(a,b)},
$ao:function(){return[P.bl]},
$ij:1,
$aj:function(){return[P.bl]}}
P.fO.prototype={
gj:function(a){return a.length}}
P.hg.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.E(b,a,null,null,null))
return a.getItem(b)},
G:function(a,b){return this.h(a,b)},
$ao:function(){return[P.r]},
$ij:1,
$aj:function(){return[P.r]}}
P.k.prototype={
gcM:function(a){return new P.eO(a,new W.i9(a))}}
P.bp.prototype={$ibp:1}
P.hx.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.E(b,a,null,null,null))
return a.getItem(b)},
G:function(a,b){return this.h(a,b)},
$ao:function(){return[P.bp]},
$ij:1,
$aj:function(){return[P.bp]}}
P.dr.prototype={}
P.ds.prototype={}
P.dC.prototype={}
P.dD.prototype={}
P.dN.prototype={}
P.dO.prototype={}
P.dU.prototype={}
P.dV.prototype={}
P.ee.prototype={
gj:function(a){return a.length}}
P.ef.prototype={
h:function(a,b){return P.aC(a.get(b))},
K:function(a,b){var u,t=a.entries()
for(;!0;){u=t.next()
if(u.done)return
b.$2(u.value[0],P.aC(u.value[1]))}},
gau:function(a){var u=H.c([],[P.r])
this.K(a,new P.eg(u))
return u},
gj:function(a){return a.size}}
P.eg.prototype={
$2:function(a,b){return this.a.push(a)}}
P.eh.prototype={
gj:function(a){return a.length}}
P.bb.prototype={}
P.fI.prototype={
gj:function(a){return a.length}}
P.de.prototype={}
P.cS.prototype={
dj:function(a,b,c,d,e,f,g,h,i,j){var u,t=i==null
if(!t&&h!=null&&typeof g==="number"&&Math.floor(g)===g){a.texImage2D(b,c,d,e,f,g,h,i,j)
return}u=J.U(g)
if(!!u.$iaK&&h==null&&t&&!0){a.texImage2D(b,c,d,e,f,P.m_(g))
return}if(!!u.$ibI&&h==null&&t&&!0){a.texImage2D(b,c,d,e,f,g)
return}throw H.f(P.kD("Incorrect number or type of arguments"))},
hh:function(a,b,c,d,e,f,g){return this.dj(a,b,c,d,e,f,g,null,null,null)}}
P.ha.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.E(b,a,null,null,null))
return P.aC(a.item(b))},
G:function(a,b){return this.h(a,b)},
$ao:function(){return[[P.cE,,,]]},
$ij:1,
$aj:function(){return[[P.cE,,,]]}}
P.dJ.prototype={}
P.dK.prototype={}
T.ea.prototype={
aG:function(a,b){return!0},
i:function(a){return"all"}}
T.cu.prototype={
aG:function(a,b){var u,t,s
for(u=this.a,t=u.length,s=0;s<u.length;u.length===t||(0,H.n)(u),++s)if(u[s].aG(0,b))return!0
return!1},
i:function(a){var u,t,s,r,q
for(u=this.a,t=u.length,s="",r=0;r<u.length;u.length===t||(0,H.n)(u),++r){q=u[r]
if(s.length!==0)s+=", "
s+=q.i(0)}return s}}
T.cF.prototype={}
T.aw.prototype={
aG:function(a,b){return!this.dw(0,b)},
i:function(a){return"!["+this.c8(0)+"]"}}
T.fY.prototype={
dE:function(a){var u,t
if(a.a.length<=0)throw H.f(P.m("May not create a Set with zero characters."))
u=new H.I([P.x,P.b9])
for(t=new H.cC(a,a.gj(a));t.A();)u.m(0,t.d,!0)
this.a=u},
aG:function(a,b){return this.a.cP(0,b)},
i:function(a){var u=this.a
return P.j6(new H.cB(u,[H.e6(u,0)]))}}
R.cY.prototype={
q:function(a,b){var u,t,s,r
for(u=this.c,t=u.length,s=0;s<t;++s){r=u[s]
if(r.b.b===b)return r}r=new R.d6(this.a.M(0,b))
r.a=H.c([],[T.cF])
r.c=!1
this.c.push(r)
return r},
fN:function(a){var u,t,s,r
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.n)(u),++s){r=u[s]
if(r.aG(0,a))return r}return},
i:function(a){return this.b}}
R.d3.prototype={
i:function(a){var u=H.ki(this.b,"\n","\\n"),t=H.ki(u,"\t","\\t")
return this.a+":"+this.c+':"'+t+'"'}}
R.d4.prototype={
i:function(a){return this.b}}
R.ht.prototype={
M:function(a,b){var u=this.a.h(0,b)
if(u==null){u=new R.cY(this,b)
u.c=H.c([],[R.d6])
this.a.m(0,b,u)}return u},
b2:function(a){var u,t=this.b.h(0,a)
if(t==null){t=new R.d4(a)
u=P.r
t.c=new H.I([u,u])
this.b.m(0,a,t)}return t},
hm:function(a){var u,t,s,r,q,p,o,n,m=H.c([],[R.d3]),l=this.c,k=[P.x],j=H.c([],k)
for(u=a.length,t=null,s=0;!0;){if(s>=u){if(t!=null)m.push(t)
return m}r=C.d.b6(a,s)
q=l.fN(r)
if(q==null){if(t==null){j.push(r)
p=P.j6(j)
throw H.f(P.m("Untokenizable string [state: "+l.b+", index "+s+']: "'+p+'"'))}m.push(t)
s=t.c+1
j=H.c([],k)
l=this.c
t=null}else{if(!q.c)j.push(r)
l=q.b
if(l.d!=null){p=P.j6(j)
o=l.d
n=o.c.h(0,p)
t=new R.d3(n==null?o.b:n,p,s)}++s}}}}
R.d6.prototype={
i:function(a){return this.b.b+": "+this.c8(0)}}
O.as.prototype={
b4:function(a){this.a=H.c([],[a])
this.c=this.b=null},
c4:function(a,b,c){this.b=b
this.c=a},
az:function(a,b){return this.c4(a,null,b)},
cs:function(a){var u=this.b
if(u!=null)return u.$1(a)
return!0},
cp:function(a,b){var u=this.c
if(u!=null)u.$2(a,b)},
gj:function(a){return this.a.length},
gR:function(a){var u=this.a
return new J.W(u,u.length)},
G:function(a,b){var u=this.a
if(b<0||b>=u.length)return H.b(u,b)
return u[b]},
k:function(a,b){var u,t,s=this,r=[H.kc(s,"as",0)]
if(s.cs(H.c([b],r))){u=s.a
t=u.length
u.push(b)
s.cp(t,H.c([b],r))}},
bA:function(a,b){var u,t
if(this.cs(b)){u=this.a
t=u.length
C.a.bA(u,b)
this.cp(t,b)}},
$ij:1}
O.bM.prototype={
gj:function(a){return this.a.length},
gl:function(){var u=this.b
return u==null?this.b=D.z():u},
aA:function(){var u=this.b
if(u!=null)u.w(null)},
ga0:function(a){var u=this.a
if(u.length>0)return C.a.gbR(u)
else return V.am()},
bf:function(a){var u=this.a
if(a==null)u.push(V.am())
else u.push(a)
this.aA()},
aw:function(){var u=this.a
if(u.length>0){u.pop()
this.aA()}}}
E.ej.prototype={}
E.at.prototype={
sb3:function(a,b){var u,t,s=this,r=s.c
if(r!=b){s.d=s.c=b
s.e=null
if(r!=null)r.gl().E(0,s.gdf())
u=s.c
if(u!=null)u.gl().k(0,s.gdf())
t=new D.q("shape",r,s.c)
t.b=!0
s.av(t)}},
saZ:function(a){var u,t,s=this
if(!J.w(s.r,a)){u=s.r
if(u!=null)u.gl().E(0,s.gdd())
if(a!=null)a.gl().k(0,s.gdd())
s.r=a
t=new D.q("mover",u,a)
t.b=!0
s.av(t)}},
a6:function(a,b){var u,t,s=this,r=s.r,q=r!=null?r.aH(0,b,s):null
if(!J.w(q,s.x)){u=s.x
s.x=q
t=new D.q("matrix",u,q)
t.b=!0
s.av(t)}for(r=s.y.a,r=new J.W(r,r.length);r.A();)r.d.a6(0,b)},
a4:function(a){var u,t=this,s=a.dx,r=t.x
s.toString
if(r==null)s.a.push(s.ga0(s))
else s.a.push(r.u(0,s.ga0(s)))
s.aA()
a.bZ(t.f)
s=a.dy
u=(s&&C.a).gbR(s)
if(u!=null&&t.d!=null)u.b1(a,t)
for(s=t.y.a,s=new J.W(s,s.length);s.A();)s.d.a4(a)
a.bX()
a.dx.aw()},
av:function(a){var u=this.z
if(u!=null)u.w(a)},
a1:function(){return this.av(null)},
dg:function(a){this.e=null
this.av(a)},
h1:function(){return this.dg(null)},
de:function(a){this.av(a)},
h0:function(){return this.de(null)},
dc:function(a){this.av(a)},
fY:function(){return this.dc(null)},
fX:function(a,b){var u,t,s,r,q,p,o
for(u=b.length,t=this.gda(),s=[{func:1,ret:-1,args:[D.N]}],r=0;r<b.length;b.length===u||(0,H.n)(b),++r){q=b[r]
if(q!=null){p=q.z
if(p==null){p=new D.aG()
p.d=0
q.z=p}o=p.a;(o==null?p.a=H.c([],s):o).push(t)}}this.a1()},
h_:function(a,b){var u,t
for(u=b.gR(b),t=this.gda();u.A();)u.gJ(u).gl().E(0,t)
this.a1()},
i:function(a){var u=this.a,t=u.length
if(t<=0)return"Unnamed entity"
return u}}
E.fQ.prototype={
dD:function(a,b){var u,t,s=this
s.d=s.c=512
s.e=0
s.x=s.r=s.f=new P.a5(Date.now(),!1)
s.y=0
s.cx=s.ch=s.Q=s.z=null
u=new O.bM()
t=[V.al]
u.a=H.c([],t)
u.gl().k(0,new E.fR(s))
s.cy=u
u=new O.bM()
u.a=H.c([],t)
u.gl().k(0,new E.fS(s))
s.db=u
u=new O.bM()
u.a=H.c([],t)
u.gl().k(0,new E.fT(s))
s.dx=u
u=H.c([],[O.d_])
s.dy=u
u.push(null)
s.fr=new H.I([P.r,A.cT])},
gha:function(){var u,t=this,s=t.z
if(s==null){s=t.cy
s=s.ga0(s)
u=t.db
u=t.z=s.u(0,u.ga0(u))
s=u}return s},
gbY:function(){var u,t=this,s=t.ch
if(s==null){s=t.gha()
u=t.dx
u=t.ch=s.u(0,u.ga0(u))
s=u}return s},
gdl:function(){var u,t=this,s=t.cx
if(s==null){s=t.db
s=s.ga0(s)
u=t.dx
u=t.cx=s.u(0,u.ga0(u))
s=u}return s},
bZ:function(a){var u=this.dy
u.push(a==null?(u&&C.a).gbR(u):a)},
bX:function(){var u=this.dy
if(u.length>1)u.pop()},
aO:function(a){var u=a.b
if(u.length===0)throw H.f(P.m("May not cache a shader with no name."))
if(this.fr.cP(0,u))throw H.f(P.m('Shader cache already contains a shader by the name "'+u+'".'))
this.fr.m(0,u,a)}}
E.fR.prototype={
$1:function(a){var u=this.a
u.ch=u.z=null}}
E.fS.prototype={
$1:function(a){var u=this.a
u.cx=u.ch=u.Q=u.z=null}}
E.fT.prototype={
$1:function(a){var u=this.a
u.cx=u.ch=null}}
E.d1.prototype={
cd:function(a){this.di()},
cc:function(){return this.cd(null)},
gfP:function(){var u,t=this,s=Date.now(),r=C.c.a5(P.jv(s-t.cy.a).a,1000)/1000
if(r<=0)return 0
u=t.db
t.db=0
t.cy=new P.a5(s,!1)
return u/r},
cu:function(){var u,t,s=this,r=window.devicePixelRatio,q=s.b.clientWidth
if(typeof q!=="number")return q.u()
if(typeof r!=="number")return H.t(r)
u=C.b.bN(q*r)
q=s.b.clientHeight
if(typeof q!=="number")return q.u()
t=C.b.bN(q*r)
q=s.b
if(q.width!==u||q.height!==t){q.width=u
q.height=t
P.jU(C.j,s.ghd())}},
di:function(){if(!this.cx){this.cx=!0
var u=window
C.t.dY(u)
C.t.fa(u,W.k7(new E.hr(this),P.a9))}},
hc:function(){var u,t,s,r,q,p=this,o=null
try{++p.db
p.cx=!1
p.cu()
if(o==null)o=p.d
if(o!=null){s=p.e;++s.e
s.r=s.x
r=Date.now()
s.x=new P.a5(r,!1)
s.y=P.jv(r-s.r.a).a*0.000001
r=s.cy
C.a.sj(r.a,0)
r.aA()
r=s.db
C.a.sj(r.a,0)
r.aA()
r=s.dx
C.a.sj(r.a,0)
r.aA()
r=s.dy;(r&&C.a).sj(r,0)
s.dy.push(null)
o.a4(p.e)}}catch(q){u=H.iO(q)
t=H.jh(q)
P.jk("Error: "+H.e(u))
P.jk("Stack: "+H.e(t))
throw H.f(u)}}}
E.hr.prototype={
$1:function(a){var u=this.a
if(u.cx){u.cx=!1
u.hc()}}}
Z.dc.prototype={}
Z.ci.prototype={
H:function(a){var u,t,s,r=this
try{t=a.a
t.enableVertexAttribArray(r.e)
t.vertexAttribPointer(r.e,r.b,5126,!1,r.d,r.c)}catch(s){u=H.iO(s)
t=P.m('Failed to bind buffer attribute "'+r.a.i(0)+'": '+H.e(u))
throw H.f(t)}},
i:function(a){var u=this
return"["+u.a.i(0)+", Size: "+u.b+", Offset: "+u.c+", Stride: "+u.d+", Attr: "+H.e(u.e)+"]"}}
Z.b4.prototype={}
Z.ar.prototype={
a3:function(a){var u,t,s,r
for(u=this.c,t=u.length,s=0;s<t;++s){r=u[s]
if((r.a.a&a.a)!==0)return r}return},
H:function(a){var u,t=this.a
a.a.bindBuffer(t.a,t.b)
for(t=this.c,u=t.length-1;u>=0;--u)t[u].H(a)},
a2:function(a){var u,t,s
for(u=this.c,t=u.length-1,s=a.a;t>=0;--t)s.disableVertexAttribArray(u[t].e)
s.bindBuffer(this.a.a,null)},
a4:function(a){var u,t,s,r,q,p=this.b.length
for(u=a.a,t=0;t<p;++t){s=this.b
if(t>=s.length)return H.b(s,t)
r=s[t]
s=r.c
q=s.a
u.bindBuffer(q,s.b)
u.drawElements(r.a,r.b,5123,0)
u.bindBuffer(q,null)}},
i:function(a){var u,t,s,r,q=[P.r],p=H.c([],q)
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.n)(u),++s)p.push(u[s].i(0))
r=H.c([],q)
for(q=this.c,u=q.length,s=0;s<u;++s)r.push(J.a3(q[s]))
return"Buffer:  ["+this.a.i(0)+"]\nIndices: "+C.a.q(p,", ")+"\nAttrs:   "+C.a.q(r,", ")}}
Z.bg.prototype={
i:function(a){return"Type: "+this.a+", Count: "+this.b+", ["+("Instance of '"+H.e(H.bT(this.c))+"'")+"]"}}
Z.a2.prototype={
gc6:function(a){var u=this.a,t=(u&$.S().a)!==0?3:0
if((u&$.af().a)!==0)t+=3
if((u&$.ae().a)!==0)t+=3
if((u&$.aq().a)!==0)t+=2
if((u&$.ag().a)!==0)t+=3
if((u&$.ce().a)!==0)t+=3
if((u&$.cf().a)!==0)t+=4
if((u&$.bx().a)!==0)++t
return(u&$.aD().a)!==0?t+4:t},
ft:function(a){var u,t=$.S(),s=this.a
if((s&t.a)!==0){if(0===a)return t
u=1}else u=0
t=$.af()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.ae()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.aq()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.ag()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.ce()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.cf()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.bx()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.aD()
if((s&t.a)!==0)if(u===a)return t
return $.kz()},
n:function(a,b){if(b==null)return!1
if(!(b instanceof Z.a2))return!1
return this.a===b.a},
i:function(a){var u=H.c([],[P.r]),t=this.a
if((t&$.S().a)!==0)u.push("Pos")
if((t&$.af().a)!==0)u.push("Norm")
if((t&$.ae().a)!==0)u.push("Binm")
if((t&$.aq().a)!==0)u.push("Txt2D")
if((t&$.ag().a)!==0)u.push("TxtCube")
if((t&$.ce().a)!==0)u.push("Clr3")
if((t&$.cf().a)!==0)u.push("Clr4")
if((t&$.bx().a)!==0)u.push("Weight")
if((t&$.aD().a)!==0)u.push("Bending")
if(u.length<=0)return"None"
return C.a.q(u,"|")}}
D.em.prototype={}
D.aG.prototype={
k:function(a,b){var u=this.a;(u==null?this.a=H.c([],[{func:1,ret:-1,args:[D.N]}]):u).push(b)},
E:function(a,b){var u,t=this,s=t.a
s=s==null?null:C.a.ab(s,b)
if(s===!0){s=t.a
u=(s&&C.a).E(s,b)||!1}else u=!1
s=t.b
s=s==null?null:C.a.ab(s,b)
if(s===!0){s=t.b
u=(s&&C.a).E(s,b)||u}return u},
w:function(a){var u,t,s,r=this,q={}
q.a=a
u=r.a
t=u==null
s=t?null:u.length===0
if(s!==!1){s=r.b
s=s==null?null:s.length===0
s=s!==!1}else s=!1
if(s)return!1
if(a==null){a=new D.N()
a.b=!0
q.a=a
s=a}else s=a
if(r.d>0){if(r.c==null)r.c=s
return!0}if(!t)C.a.K(P.jA(u,!0,{func:1,ret:-1,args:[D.N]}),new D.eJ(q))
u=r.b
if(u!=null){r.b=H.c([],[{func:1,ret:-1,args:[D.N]}])
C.a.K(u,new D.eK(q))}return!0},
bG:function(){return this.w(null)},
am:function(a){var u,t=this,s=t.d
if(s>0){--s
t.d=s
if(s<=0)s=t.c!=null
else s=!1
if(s){u=t.c
t.c=null
t.w(u)}}}}
D.eJ.prototype={
$1:function(a){var u=this.a.a
u.b
a.$1(u)}}
D.eK.prototype={
$1:function(a){var u=this.a.a
u.b
a.$1(u)}}
D.N.prototype={}
D.aL.prototype={}
D.aM.prototype={}
D.q.prototype={
i:function(a){return"ValueChanged: "+this.c+", "+H.e(this.d)+" => "+H.e(this.e)}}
X.cj.prototype={
n:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.cj))return!1
if(this.a!=b.a)return!1
if(!this.b.n(0,b.b))return!1
return!0},
i:function(a){return this.b.i(0)+H.e(this.a)}}
X.cz.prototype={
n:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.cz))return!1
if(this.a!=b.a)return!1
if(!this.b.n(0,b.b))return!1
return!0},
i:function(a){return this.b.i(0)+H.e(this.a)}}
X.f0.prototype={
h6:function(a){this.c=a.b
this.d.k(0,a.a)
return!1},
h2:function(a){this.c=a.b
this.d.E(0,a.a)
return!1}}
X.cD.prototype={}
X.f7.prototype={
aM:function(a,b){var u,t,s,r,q=this,p=Date.now(),o=q.x,n=b.a,m=q.Q
if(typeof n!=="number")return n.u()
u=b.b
t=q.ch
if(typeof u!=="number")return u.u()
s=new V.V(o.a+n*m,o.b+u*t)
t=q.a.gaF()
r=new X.aQ(a,V.ax(),q.x,t,s)
r.b=!0
q.z=new P.a5(p,!1)
q.x=s
return r},
bW:function(a,b){this.r=a.a
return!1},
b0:function(a,b){var u=this.r,t=a.a
if(typeof t!=="number")return t.dr()
if(typeof u!=="number")return u.ao()
this.r=(u&~t)>>>0
return!1},
b_:function(a,b){var u=this.d
if(u==null)return!1
u.w(this.aM(a,b))
return!0},
h7:function(a){var u,t,s,r,q,p,o=this,n=o.e
if(n==null)return!1
u=o.a.gaF()
t=o.x
Date.now()
s=a.a
r=o.cx
if(typeof s!=="number")return s.u()
q=a.b
p=o.cy
if(typeof q!=="number")return q.u()
t=new X.bN(new V.H(s*r,q*p),u,t)
t.b=!0
n.w(t)
return!0},
eH:function(a,b,c){var u,t,s,r=this
if(r.f==null)return
u=Date.now()
t=r.f
s=new X.cD(c,r.a.gaF(),b)
s.b=!0
t.w(s)
r.y=new P.a5(u,!1)
r.x=V.ax()}}
X.aa.prototype={
n:function(a,b){var u=this
if(b==null)return!1
if(u===b)return!0
if(!(b instanceof X.aa))return!1
if(u.a!==b.a)return!1
if(u.b!=b.b)return!1
if(u.c!=b.c)return!1
return!0},
i:function(a){var u=this.a?"Ctrl+":""
u+=this.b?"Alt+":""
return u+(this.c?"Shift+":"")}}
X.aQ.prototype={}
X.fw.prototype={
bn:function(a,b,c){var u=this,t=new P.a5(Date.now(),!1),s=u.a.gaF(),r=new X.aQ(a,u.r,u.x,s,b)
r.b=!0
if(c){u.y=t
u.r=b}u.z=t
u.x=b
return r},
bW:function(a,b){var u
this.f=a.a
u=this.b
if(u==null)return!1
u.w(this.bn(a,b,!0))
return!0},
b0:function(a,b){var u=this,t=u.f,s=a.a
if(typeof s!=="number")return s.dr()
if(typeof t!=="number")return t.ao()
u.f=(t&~s)>>>0
t=u.c
if(t==null)return!1
t.w(u.bn(a,b,!0))
return!0},
b_:function(a,b){var u=this.d
if(u==null)return!1
u.w(this.bn(a,b,!1))
return!0},
h8:function(a,b){var u,t,s,r,q,p=this,o=p.e
if(o==null)return!1
u=p.a.gaF()
Date.now()
t=a.a
s=p.Q
if(typeof t!=="number")return t.u()
r=a.b
q=p.ch
if(typeof r!=="number")return r.u()
u=new X.bN(new V.H(t*s,r*q),u,b)
u.b=!0
o.w(u)
return!0}}
X.bN.prototype={}
X.fN.prototype={}
X.d5.prototype={}
X.hu.prototype={
aM:function(a,b){var u=this,t=new P.a5(Date.now(),!1),s=a.length>0?a[0]:V.ax(),r=u.a.gaF(),q=new X.d5(u.f,u.r,r,s)
q.b=!0
if(b){u.x=t
u.f=s}u.y=t
u.r=s
return q},
h5:function(a){var u=this.b
if(u==null)return!1
u.w(this.aM(a,!0))
return!0},
h3:function(a){var u=this.c
if(u==null)return!1
u.w(this.aM(a,!0))
return!0},
h4:function(a){var u=this.d
if(u==null)return!1
u.w(this.aM(a,!1))
return!0}}
X.d9.prototype={
gaF:function(){var u=this.a,t=C.f.gcN(u).c
t.toString
u=C.f.gcN(u).d
u.toString
return V.bU(0,0,t,u)},
cl:function(a){var u=a.keyCode,t=a.ctrlKey||a.metaKey
return new X.cz(u,new X.aa(t,a.altKey,a.shiftKey))},
aD:function(a){var u=this.b,t=a.ctrlKey||a.metaKey
u.c=new X.aa(t,a.altKey,a.shiftKey)},
bx:function(a){var u=this.b,t=a.ctrlKey||a.metaKey
u.c=new X.aa(t,a.altKey,a.shiftKey)},
as:function(a){var u,t=this.a.getBoundingClientRect(),s=a.pageX,r=a.pageY,q=t.left
if(typeof s!=="number")return s.N()
u=t.top
if(typeof r!=="number")return r.N()
return new V.V(s-q,r-u)},
aN:function(a){return new V.H(a.movementX,a.movementY)},
bt:function(a){var u,t,s,r,q,p,o=this.a.getBoundingClientRect(),n=H.c([],[V.V])
for(u=a.touches,t=u.length,s=0;s<u.length;u.length===t||(0,H.n)(u),++s){r=u[s]
q=C.b.W(r.pageX)
C.b.W(r.pageY)
p=o.left
C.b.W(r.pageX)
n.push(new V.V(q-p,C.b.W(r.pageY)-o.top))}return n},
aq:function(a){var u=a.buttons,t=a.ctrlKey||a.metaKey
return new X.cj(u,new X.aa(t,a.altKey,a.shiftKey))},
bq:function(a){var u,t,s=this.a.getBoundingClientRect(),r=a.pageX,q=a.pageY,p=s.left
if(typeof r!=="number")return r.N()
u=r-p
if(u<0)return!1
r=s.top
if(typeof q!=="number")return q.N()
t=q-r
if(t<0)return!1
return u<s.width&&t<s.height},
eB:function(a){this.f=!0},
ek:function(a){this.f=!1},
eq:function(a){if(this.f&&this.bq(a))a.preventDefault()},
eF:function(a){var u
if(!this.f)return
u=this.cl(a)
this.b.h6(u)},
eD:function(a){var u
if(!this.f)return
u=this.cl(a)
this.b.h2(u)},
eJ:function(a){var u,t,s,r=this,q=r.a
q.focus()
r.f=!0
r.aD(a)
if(r.x){u=r.aq(a)
t=r.aN(a)
if(r.d.bW(u,t))a.preventDefault()
return}if(r.r){r.y=a
q.requestPointerLock()
return}u=r.aq(a)
s=r.as(a)
if(r.c.bW(u,s))a.preventDefault()},
eN:function(a){var u,t,s,r=this
r.aD(a)
u=r.aq(a)
if(r.x){t=r.aN(a)
if(r.d.b0(u,t))a.preventDefault()
return}if(r.r)return
s=r.as(a)
if(r.c.b0(u,s))a.preventDefault()},
ev:function(a){var u,t,s,r=this
if(!r.bq(a)){r.aD(a)
u=r.aq(a)
if(r.x){t=r.aN(a)
if(r.d.b0(u,t))a.preventDefault()
return}if(r.r)return
s=r.as(a)
if(r.c.b0(u,s))a.preventDefault()}},
eL:function(a){var u,t,s,r=this
r.aD(a)
u=r.aq(a)
if(r.x){t=r.aN(a)
if(r.d.b_(u,t))a.preventDefault()
return}if(r.r)return
s=r.as(a)
if(r.c.b_(u,s))a.preventDefault()},
es:function(a){var u,t,s,r=this
if(!r.bq(a)){r.aD(a)
u=r.aq(a)
if(r.x){t=r.aN(a)
if(r.d.b_(u,t))a.preventDefault()
return}if(r.r)return
s=r.as(a)
if(r.c.b_(u,s))a.preventDefault()}},
eP:function(a){var u,t,s=this
s.aD(a)
u=new V.H((a&&C.r).gfF(a),C.r.gfG(a)).t(0,180)
if(s.x){if(s.d.h7(u))a.preventDefault()
return}if(s.r)return
t=s.as(a)
if(s.c.h8(u,t))a.preventDefault()},
eR:function(a){var u,t,s=this,r=document.pointerLockElement===s.a
if(r!==s.x){s.x=r
u=s.aq(s.y)
t=s.as(s.y)
s.d.eH(u,t,r)}},
f6:function(a){var u,t=this
t.a.focus()
t.f=!0
t.bx(a)
u=t.bt(a)
if(t.e.h5(u))a.preventDefault()},
f2:function(a){var u
this.bx(a)
u=this.bt(a)
if(this.e.h3(u))a.preventDefault()},
f4:function(a){var u
this.bx(a)
u=this.bt(a)
if(this.e.h4(u))a.preventDefault()}}
D.be.prototype={
ap:function(a){var u=this.r
if(u!=null)u.w(a)},
dI:function(){return this.ap(null)},
$ia1:1}
D.a1.prototype={}
D.cA.prototype={
ap:function(a){var u=this.x
if(u!=null)u.w(a)},
cr:function(a){var u=this.y
if(u!=null)u.w(a)},
eG:function(){return this.cr(null)},
eT:function(a){var u,t,s
for(u=a.length,t=0;t<a.length;a.length===u||(0,H.n)(a),++t){s=a[t]
if(s==null||this.dU(s))return!1}return!0},
ee:function(a,b){var u,t,s,r,q,p,o
for(u=b.length,t=this.gcq(),s=[{func:1,ret:-1,args:[D.N]}],r=0;r<b.length;b.length===u||(0,H.n)(b),++r){q=b[r]
if(q instanceof D.be)this.e.push(q)
p=q.r
if(p==null){p=new D.aG()
p.d=0
q.r=p}o=p.a;(o==null?p.a=H.c([],s):o).push(t)}u=new D.aL()
u.b=!0
this.ap(u)},
eX:function(a,b){var u,t,s
for(u=b.gR(b),t=this.gcq();u.A();){s=u.gJ(u)
C.a.E(this.e,s)
s.gl().E(0,t)}u=new D.aM()
u.b=!0
this.ap(u)},
dU:function(a){var u=C.a.ab(this.e,a)
return u},
$aj:function(){return[D.a1]},
$aas:function(){return[D.a1]}}
D.fM.prototype={$ia1:1}
D.h9.prototype={$ia1:1}
V.M.prototype={
n:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.M))return!1
u=b.a
t=$.y().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
return!0},
i:function(a){return"["+V.A(this.a,3,0)+", "+V.A(this.b,3,0)+", "+V.A(this.c,3,0)+"]"}}
V.X.prototype={
n:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.X))return!1
u=b.a
t=$.y().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
if(!(Math.abs(b.d-s.d)<t))return!1
return!0},
i:function(a){var u=this
return"["+V.A(u.a,3,0)+", "+V.A(u.b,3,0)+", "+V.A(u.c,3,0)+", "+V.A(u.d,3,0)+"]"}}
V.eI.prototype={}
V.bL.prototype={
S:function(a,b){var u=this,t=H.c([u.a,u.d,u.r,u.b,u.e,u.x,u.c,u.f,u.y],[P.G])
return t},
n:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.bL))return!1
u=b.a
t=$.y().a
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
i:function(a){var u,t,s,r,q=this,p=[P.G],o=V.bw(H.c([q.a,q.d,q.r],p),3,0),n=V.bw(H.c([q.b,q.e,q.x],p),3,0),m=V.bw(H.c([q.c,q.f,q.y],p),3,0)
p=o.length
if(0>=p)return H.b(o,0)
u="["+o[0]+", "
t=n.length
if(0>=t)return H.b(n,0)
u=u+n[0]+", "
s=m.length
if(0>=s)return H.b(m,0)
u=u+m[0]+",\n"
if(1>=p)return H.b(o,1)
r=" "+o[1]+", "
if(1>=t)return H.b(n,1)
r=r+n[1]+", "
if(1>=s)return H.b(m,1)
r=u+(r+m[1]+",\n")
if(2>=p)return H.b(o,2)
p=" "+o[2]+", "
if(2>=t)return H.b(n,2)
p=p+n[2]+", "
if(2>=s)return H.b(m,2)
return r+(p+m[2]+"]")}}
V.al.prototype={
S:function(a,b){var u=this,t=H.c([u.a,u.e,u.y,u.cx,u.b,u.f,u.z,u.cy,u.c,u.r,u.Q,u.db,u.d,u.x,u.ch,u.dx],[P.G])
return t},
bQ:function(b2){var u,t,s,r=this,q=r.a,p=r.f,o=r.b,n=r.e,m=q*p-o*n,l=r.r,k=r.c,j=q*l-k*n,i=r.x,h=r.d,g=q*i-h*n,f=o*l-k*p,e=o*i-h*p,d=k*i-h*l,c=r.y,b=r.cy,a=r.z,a0=r.cx,a1=c*b-a*a0,a2=r.db,a3=r.Q,a4=c*a2-a3*a0,a5=r.dx,a6=r.ch,a7=c*a5-a6*a0,a8=a*a2-a3*b,a9=a*a5-a6*b,b0=a3*a5-a6*a2,b1=m*b0-j*a9+g*a8+f*a7-e*a4+d*a1
if(Math.abs(b1-0)<$.y().a)return V.am()
u=1/b1
t=-n
s=-a0
return V.av((p*b0-l*a9+i*a8)*u,(-o*b0+k*a9-h*a8)*u,(b*d-a2*e+a5*f)*u,(-a*d+a3*e-a6*f)*u,(t*b0+l*a7-i*a4)*u,(q*b0-k*a7+h*a4)*u,(s*d+a2*g-a5*j)*u,(c*d-a3*g+a6*j)*u,(n*a9-p*a7+i*a1)*u,(-q*a9+o*a7-h*a1)*u,(a0*e-b*g+a5*m)*u,(-c*e+a*g-a6*m)*u,(t*a8+p*a4-l*a1)*u,(q*a8-o*a4+k*a1)*u,(s*f+b*j-a2*m)*u,(c*f-a*j+a3*m)*u)},
u:function(b2,b3){var u=this,t=u.a,s=b3.a,r=u.b,q=b3.e,p=u.c,o=b3.y,n=u.d,m=b3.cx,l=b3.b,k=b3.f,j=b3.z,i=b3.cy,h=b3.c,g=b3.r,f=b3.Q,e=b3.db,d=b3.d,c=b3.x,b=b3.ch,a=b3.dx,a0=u.e,a1=u.f,a2=u.r,a3=u.x,a4=u.y,a5=u.z,a6=u.Q,a7=u.ch,a8=u.cx,a9=u.cy,b0=u.db,b1=u.dx
return V.av(t*s+r*q+p*o+n*m,t*l+r*k+p*j+n*i,t*h+r*g+p*f+n*e,t*d+r*c+p*b+n*a,a0*s+a1*q+a2*o+a3*m,a0*l+a1*k+a2*j+a3*i,a0*h+a1*g+a2*f+a3*e,a0*d+a1*c+a2*b+a3*a,a4*s+a5*q+a6*o+a7*m,a4*l+a5*k+a6*j+a7*i,a4*h+a5*g+a6*f+a7*e,a4*d+a5*c+a6*b+a7*a,a8*s+a9*q+b0*o+b1*m,a8*l+a9*k+b0*j+b1*i,a8*h+a9*g+b0*f+b1*e,a8*d+a9*c+b0*b+b1*a)},
bh:function(a){var u=this,t=a.a,s=a.b,r=a.c
return new V.v(u.a*t+u.b*s+u.c*r,u.e*t+u.f*s+u.r*r,u.y*t+u.z*s+u.Q*r)},
c2:function(a){var u=this,t=a.a,s=a.b,r=a.c
return new V.O(u.a*t+u.b*s+u.c*r+u.d,u.e*t+u.f*s+u.r*r+u.x,u.y*t+u.z*s+u.Q*r+u.ch)},
n:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.al))return!1
u=b.a
t=$.y().a
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
i:function(a){return this.L()},
D:function(a){var u,t,s,r,q,p=this,o=[P.G],n=V.bw(H.c([p.a,p.e,p.y,p.cx],o),3,0),m=V.bw(H.c([p.b,p.f,p.z,p.cy],o),3,0),l=V.bw(H.c([p.c,p.r,p.Q,p.db],o),3,0),k=V.bw(H.c([p.d,p.x,p.ch,p.dx],o),3,0)
o=n.length
if(0>=o)return H.b(n,0)
u="["+n[0]+", "
t=m.length
if(0>=t)return H.b(m,0)
u=u+m[0]+", "
s=l.length
if(0>=s)return H.b(l,0)
u=u+l[0]+", "
r=k.length
if(0>=r)return H.b(k,0)
u=u+k[0]+",\n"
q=a+" "
if(1>=o)return H.b(n,1)
q=q+n[1]+", "
if(1>=t)return H.b(m,1)
q=q+m[1]+", "
if(1>=s)return H.b(l,1)
q=q+l[1]+", "
if(1>=r)return H.b(k,1)
q=u+(q+k[1]+",\n")
u=a+" "
if(2>=o)return H.b(n,2)
u=u+n[2]+", "
if(2>=t)return H.b(m,2)
u=u+m[2]+", "
if(2>=s)return H.b(l,2)
u=u+l[2]+", "
if(2>=r)return H.b(k,2)
u=q+(u+k[2]+",\n")
q=a+" "
if(3>=o)return H.b(n,3)
q=q+n[3]+", "
if(3>=t)return H.b(m,3)
q=q+m[3]+", "
if(3>=s)return H.b(l,3)
q=q+l[3]+", "
if(3>=r)return H.b(k,3)
return u+(q+k[3]+"]")},
L:function(){return this.D("")}}
V.V.prototype={
N:function(a,b){return new V.V(this.a-b.a,this.b-b.b)},
n:function(a,b){var u,t
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.V))return!1
u=b.a
t=$.y().a
if(!(Math.abs(u-this.a)<t))return!1
if(!(Math.abs(b.b-this.b)<t))return!1
return!0},
i:function(a){return"["+V.A(this.a,3,0)+", "+V.A(this.b,3,0)+"]"}}
V.O.prototype={
B:function(a,b){return new V.O(this.a+b.a,this.b+b.b,this.c+b.c)},
N:function(a,b){return new V.O(this.a-b.a,this.b-b.b,this.c-b.c)},
u:function(a,b){return new V.O(this.a*b,this.b*b,this.c*b)},
n:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.O))return!1
u=b.a
t=$.y().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
return!0},
i:function(a){return"["+V.A(this.a,3,0)+", "+V.A(this.b,3,0)+", "+V.A(this.c,3,0)+"]"}}
V.ay.prototype={
n:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.ay))return!1
u=b.a
t=$.y().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
if(!(Math.abs(b.d-s.d)<t))return!1
return!0},
i:function(a){var u=this
return"["+V.A(u.a,3,0)+", "+V.A(u.b,3,0)+", "+V.A(u.c,3,0)+", "+V.A(u.d,3,0)+"]"}}
V.cR.prototype={
gal:function(){var u=this.c,t=this.d
if(u>t)return t
else return u},
n:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.cR))return!1
u=b.a
t=$.y().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
if(!(Math.abs(b.d-s.d)<t))return!1
return!0},
i:function(a){var u=this
return"["+V.A(u.a,3,0)+", "+V.A(u.b,3,0)+", "+V.A(u.c,3,0)+", "+V.A(u.d,3,0)+"]"}}
V.H.prototype={
bS:function(a){return Math.sqrt(this.C(this))},
C:function(a){var u,t,s=this.a,r=a.a
if(typeof s!=="number")return s.u()
if(typeof r!=="number")return H.t(r)
u=this.b
t=a.b
if(typeof u!=="number")return u.u()
if(typeof t!=="number")return H.t(t)
return s*r+u*t},
u:function(a,b){var u,t=this.a
if(typeof t!=="number")return t.u()
u=this.b
if(typeof u!=="number")return u.u()
return new V.H(t*b,u*b)},
t:function(a,b){var u,t
if(Math.abs(b-0)<$.y().a){u=$.k_
return u==null?$.k_=new V.H(0,0):u}u=this.a
if(typeof u!=="number")return u.t()
t=this.b
if(typeof t!=="number")return t.t()
return new V.H(u/b,t/b)},
n:function(a,b){var u,t,s
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.H))return!1
u=b.a
t=this.a
s=$.y()
s.toString
if(typeof u!=="number")return u.N()
if(typeof t!=="number")return H.t(t)
s=s.a
if(!(Math.abs(u-t)<s))return!1
u=b.b
t=this.b
if(typeof u!=="number")return u.N()
if(typeof t!=="number")return H.t(t)
if(!(Math.abs(u-t)<s))return!1
return!0},
i:function(a){return"["+V.A(this.a,3,0)+", "+V.A(this.b,3,0)+"]"}}
V.v.prototype={
bS:function(a){return Math.sqrt(this.C(this))},
C:function(a){return this.a*a.a+this.b*a.b+this.c*a.c},
bT:function(a,b){var u=this.a,t=this.b,s=this.c
return new V.v(u+b*(a.a-u),t+b*(a.b-t),s+b*(a.c-s))},
at:function(a){var u=this.b,t=a.c,s=this.c,r=a.b,q=a.a,p=this.a
return new V.v(u*t-s*r,s*q-p*t,p*r-u*q)},
B:function(a,b){return new V.v(this.a+b.a,this.b+b.b,this.c+b.c)},
O:function(a){return new V.v(-this.a,-this.b,-this.c)},
u:function(a,b){return new V.v(this.a*b,this.b*b,this.c*b)},
t:function(a,b){if(Math.abs(b-0)<$.y().a)return V.c_()
return new V.v(this.a/b,this.b/b,this.c/b)},
d5:function(){var u=$.y().a
if(!(Math.abs(0-this.a)<u))return!1
if(!(Math.abs(0-this.b)<u))return!1
if(!(Math.abs(0-this.c)<u))return!1
return!0},
n:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.v))return!1
u=b.a
t=$.y().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
return!0},
i:function(a){return"["+V.A(this.a,3,0)+", "+V.A(this.b,3,0)+", "+V.A(this.c,3,0)+"]"}}
U.eq.prototype={
bj:function(a){var u=V.mq(a,this.c,this.b)
return u},
gl:function(){var u=this.y
return u==null?this.y=D.z():u},
P:function(a){var u=this.y
if(u!=null)u.w(a)},
sdm:function(a,b){},
sd7:function(a){var u,t=this,s=t.b
if(!(Math.abs(s-a)<$.y().a)){t.b=a
if(a<t.c)t.d=t.c=a
else{u=t.d
if(a<u)t.d=t.bj(u)}s=new D.q("maximumLocation",s,t.b)
s.b=!0
t.P(s)}},
sd9:function(a){var u,t=this,s=t.c
if(!(Math.abs(s-a)<$.y().a)){t.c=a
if(t.b<a)t.d=t.b=a
else{u=t.d
if(a>u)t.d=t.bj(u)}s=new D.q("minimumLocation",s,t.c)
s.b=!0
t.P(s)}},
sa8:function(a,b){var u,t=this
b=t.bj(b)
u=t.d
if(!(Math.abs(u-b)<$.y().a)){t.d=b
u=new D.q("location",u,b)
u.b=!0
t.P(u)}},
sd8:function(a){var u,t,s=this,r=s.e
if(!(Math.abs(r-a)<$.y().a)){s.e=a
u=s.f
t=-a
if(u<t)u=t
else if(u>a)u=a
s.f=u
r=new D.q("maximumVelocity",r,a)
r.b=!0
s.P(r)}},
sX:function(a){var u=this,t=u.e,s=-t
if(a<s)a=s
else if(a>t)a=t
t=u.f
if(!(Math.abs(t-a)<$.y().a)){u.f=a
t=new D.q("velocity",t,a)
t.b=!0
u.P(t)}},
scQ:function(a){var u
if(a<0)a=0
else if(a>1)a=1
u=this.x
if(!(Math.abs(u-a)<$.y().a)){this.x=a
u=new D.q("dampening",u,a)
u.b=!0
this.P(u)}},
a6:function(a,b){var u,t,s,r=this,q=r.f,p=$.y().a
if(!(Math.abs(q-0)<p)||!(Math.abs(r.r-0)<p)){u=q+r.r*b
q=r.e
t=-q
if(u<t)u=t
else if(u>q)u=q
r.sa8(0,r.d+u*b)
q=r.x
if(!(Math.abs(q-0)<$.y().a)){s=u*Math.pow(1-q,b)
if(u<0){if(s<u)s=u
else if(s>0)s=0}else if(s<0)s=0
else if(s>u)s=u
u=s}r.sX(u)}}}
U.cl.prototype={
gl:function(){var u=this.b
return u==null?this.b=D.z():u},
aH:function(a,b,c){return this.a},
n:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.cl))return!1
return J.w(this.a,b.a)},
i:function(a){return"Constant: "+this.a.D("          ")}}
U.bG.prototype={
gl:function(){var u=this.e
return u==null?this.e=D.z():u},
P:function(a){var u=this.e
if(u!=null)u.w(a)},
aj:function(){return this.P(null)},
dK:function(a,b){var u,t,s,r,q,p,o
for(u=b.length,t=this.gb5(),s=[{func:1,ret:-1,args:[D.N]}],r=0;r<b.length;b.length===u||(0,H.n)(b),++r){q=b[r]
if(q!=null){p=q.gl()
o=p.a;(o==null?p.a=H.c([],s):o).push(t)}}u=new D.aL()
u.b=!0
this.P(u)},
eV:function(a,b){var u,t
for(u=b.gR(b),t=this.gb5();u.A();)u.gJ(u).gl().E(0,t)
u=new D.aM()
u.b=!0
this.P(u)},
aH:function(a,b,c){var u,t,s=this,r=s.r,q=b.e
if(typeof r!=="number")return r.ah()
if(r<q){s.r=q
r=s.e
if(r!=null)++r.d
for(r=s.a,r=new J.W(r,r.length),u=null;r.A();){q=r.d
if(q!=null){t=q.aH(0,b,c)
if(t!=null)u=u==null?t:t.u(0,u)}}s.f=u==null?V.am():u
r=s.e
if(r!=null)r.am(0)}return s.f},
n:function(a,b){var u,t,s,r
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.bG))return!1
u=this.a.length
for(t=0;t<u;++t){s=this.a
if(t>=s.length)return H.b(s,t)
s=s[t]
r=b.a
if(t>=r.length)return H.b(r,t)
if(!J.w(s,r[t]))return!1}return!0},
i:function(a){return"Group"},
$aj:function(){return[U.a6]},
$aas:function(){return[U.a6]},
$ia6:1}
U.a6.prototype={}
U.da.prototype={
gl:function(){var u=this.fx
return u==null?this.fx=D.z():u},
P:function(a){var u=this.fx
if(u!=null)u.w(a)},
aj:function(){return this.P(null)},
bB:function(a){var u,t,s=this
if(s.a!=null)return!1
s.a=a
u=a.c
t=u.b
u=t==null?u.b=D.z():t
u.k(0,s.ge5())
u=s.a.c
t=u.d
u=t==null?u.d=D.z():t
u.k(0,s.ge7())
u=s.a.c
t=u.c
u=t==null?u.c=D.z():t
u.k(0,s.ge9())
u=s.a.d
t=u.f
u=t==null?u.f=D.z():t
u.k(0,s.ge1())
u=s.a.d
t=u.d
u=t==null?u.d=D.z():t
u.k(0,s.ge3())
u=s.a.e
t=u.b
u=t==null?u.b=D.z():t
u.k(0,s.gfn())
u=s.a.e
t=u.d
u=t==null?u.d=D.z():t
u.k(0,s.gfl())
u=s.a.e
t=u.c
u=t==null?u.c=D.z():t
u.k(0,s.gfj())
return!0},
ak:function(a){var u=a.a,t=a.b
if(this.f){if(typeof u!=="number")return u.O()
u=-u}if(this.r){if(typeof t!=="number")return t.O()
t=-t}return new V.H(u,t)},
e6:function(a){var u=this
H.h(a,"$iaQ")
if(!J.w(u.d,a.x.b))return
u.ch=u.cx=!0
u.cy=u.c.d
u.db=u.b.d},
e8:function(a){var u,t,s,r,q,p,o,n=this
H.h(a,"$iaQ")
if(!n.cx)return
if(n.ch){u=a.d.N(0,a.y)
u=new V.H(u.a,u.b)
u=u.C(u)
t=n.Q
if(typeof t!=="number")return H.t(t)
if(u<t)return
n.ch=!1}if(n.e){u=a.c
t=a.d.N(0,a.y)
u=n.ak(new V.H(t.a,t.b).u(0,2).t(0,u.gal()))
n.dx=u
t=n.c
u=u.a
if(typeof u!=="number")return u.O()
s=n.y
if(typeof s!=="number")return H.t(s)
t.sX(-u*10*s)
s=n.b
u=n.dx.b
if(typeof u!=="number")return u.O()
t=n.x
if(typeof t!=="number")return H.t(t)
s.sX(-u*10*t)}else{u=a.c
t=a.d
s=t.N(0,a.y)
r=n.ak(new V.H(s.a,s.b).u(0,2).t(0,u.gal()))
s=n.c
q=r.a
if(typeof q!=="number")return q.O()
p=n.y
if(typeof p!=="number")return H.t(p)
o=n.cy
if(typeof o!=="number")return H.t(o)
s.sa8(0,-q*p+o)
o=n.b
p=r.b
if(typeof p!=="number")return p.O()
q=n.x
if(typeof q!=="number")return H.t(q)
s=n.db
if(typeof s!=="number")return H.t(s)
o.sa8(0,-p*q+s)
n.b.sX(0)
n.c.sX(0)
t=t.N(0,a.z)
n.dx=n.ak(new V.H(t.a,t.b).u(0,2).t(0,u.gal()))}n.aj()},
ea:function(a){var u,t,s,r=this
if(!r.cx)return
r.cx=!1
if(r.ch)return
u=r.dx
if(u.C(u)>0.0001){u=r.c
t=r.dx.a
if(typeof t!=="number")return t.O()
s=r.y
if(typeof s!=="number")return H.t(s)
u.sX(-t*10*s)
s=r.b
t=r.dx.b
if(typeof t!=="number")return t.O()
u=r.x
if(typeof u!=="number")return H.t(u)
s.sX(-t*10*u)
r.aj()}},
e2:function(a){var u=this
if(H.h(a,"$icD").x){u.ch=!0
u.cy=u.c.d
u.db=u.b.d}},
e4:function(a){var u,t,s,r,q,p,o,n=this
H.h(a,"$iaQ")
if(!J.w(n.d,a.x.b))return
u=a.c
t=a.d
s=t.N(0,a.y)
r=n.ak(new V.H(s.a,s.b).u(0,2).t(0,u.gal()))
s=n.c
q=r.a
if(typeof q!=="number")return q.O()
p=n.y
if(typeof p!=="number")return H.t(p)
o=n.cy
if(typeof o!=="number")return H.t(o)
s.sa8(0,-q*p+o)
o=n.b
p=r.b
if(typeof p!=="number")return p.O()
q=n.x
if(typeof q!=="number")return H.t(q)
s=n.db
if(typeof s!=="number")return H.t(s)
o.sa8(0,-p*q+s)
n.b.sX(0)
n.c.sX(0)
t=t.N(0,a.z)
n.dx=n.ak(new V.H(t.a,t.b).u(0,2).t(0,u.gal()))
n.aj()},
fo:function(a){var u=this
u.ch=u.cx=!0
u.cy=u.c.d
u.db=u.b.d},
fm:function(a){var u,t,s,r,q,p,o,n=this
H.h(a,"$id5")
if(!n.cx)return
if(n.ch){u=a.d.N(0,a.y)
u=new V.H(u.a,u.b)
u=u.C(u)
t=n.Q
if(typeof t!=="number")return H.t(t)
if(u<t)return
n.ch=!1}if(n.e){u=a.c
t=a.d.N(0,a.y)
u=n.ak(new V.H(t.a,t.b).u(0,2).t(0,u.gal()))
n.dx=u
t=n.c
u=u.a
if(typeof u!=="number")return u.O()
s=n.y
if(typeof s!=="number")return H.t(s)
t.sX(-u*10*s)
s=n.b
u=n.dx.b
if(typeof u!=="number")return u.O()
t=n.x
if(typeof t!=="number")return H.t(t)
s.sX(-u*10*t)}else{u=a.c
t=a.d
s=t.N(0,a.y)
r=n.ak(new V.H(s.a,s.b).u(0,2).t(0,u.gal()))
s=n.c
q=r.a
if(typeof q!=="number")return q.O()
p=n.y
if(typeof p!=="number")return H.t(p)
o=n.cy
if(typeof o!=="number")return H.t(o)
s.sa8(0,-q*p+o)
o=n.b
p=r.b
if(typeof p!=="number")return p.O()
q=n.x
if(typeof q!=="number")return H.t(q)
s=n.db
if(typeof s!=="number")return H.t(s)
o.sa8(0,-p*q+s)
n.b.sX(0)
n.c.sX(0)
t=t.N(0,a.z)
n.dx=n.ak(new V.H(t.a,t.b).u(0,2).t(0,u.gal()))}n.aj()},
fk:function(a){var u,t,s,r=this
if(!r.cx)return
r.cx=!1
if(r.ch)return
u=r.dx
if(u.C(u)>0.0001){u=r.c
t=r.dx.a
if(typeof t!=="number")return t.O()
s=r.y
if(typeof s!=="number")return H.t(s)
u.sX(-t*10*s)
s=r.b
t=r.dx.b
if(typeof t!=="number")return t.O()
u=r.x
if(typeof u!=="number")return H.t(u)
s.sX(-t*10*u)
r.aj()}},
aH:function(a,b,c){var u,t,s,r=this,q=r.dy,p=b.e
if(typeof q!=="number")return q.ah()
if(q<p){r.dy=p
u=b.y
r.c.a6(0,u)
r.b.a6(0,u)
q=r.b.d
t=Math.cos(q)
s=Math.sin(q)
q=V.av(1,0,0,0,0,t,-s,0,0,s,t,0,0,0,0,1)
p=r.c.d
t=Math.cos(p)
s=Math.sin(p)
r.fr=q.u(0,V.av(t,0,-s,0,0,1,0,0,s,0,t,0,0,0,0,1))}return r.fr},
$ia6:1}
U.db.prototype={
gl:function(){var u=this.r
return u==null?this.r=D.z():u},
P:function(a){var u=this.r
if(u!=null)u.w(a)},
bB:function(a){var u,t,s,r=this
if(r.a!=null)return!1
r.a=a
u=a.c
t=u.e
u=t==null?u.e=D.z():t
t=r.geb()
u.k(0,t)
u=r.a.d
s=u.e;(s==null?u.e=D.z():s).k(0,t)
return!0},
ec:function(a){var u,t,s,r,q=this
if(!J.w(q.b,q.a.b.c))return
H.h(a,"$ibN")
u=q.d
t=a.x.b
s=q.c
if(typeof t!=="number")return t.u()
r=u+t*s
if(u!==r){q.d=r
u=new D.q("zoom",u,r)
u.b=!0
q.P(u)}},
aH:function(a,b,c){var u,t=this,s=t.e,r=b.e
if(s<r){t.e=r
u=Math.pow(10,t.d)
t.f=V.jE(u,u,u)}return t.f},
$ia6:1}
M.ck.prototype={
gl:function(){var u=this.r
return u==null?this.r=D.z():u},
U:function(a){var u=this.r
if(u!=null)u.w(a)},
aL:function(){return this.U(null)},
eZ:function(a,b){var u,t,s,r,q,p,o
for(u=b.length,t=this.gT(),s=[{func:1,ret:-1,args:[D.N]}],r=0;r<b.length;b.length===u||(0,H.n)(b),++r){q=b[r]
if(q!=null){p=q.gl()
o=p.a;(o==null?p.a=H.c([],s):o).push(t)}}u=new D.aL()
u.b=!0
this.U(u)},
f0:function(a,b){var u,t
for(u=b.gR(b),t=this.gT();u.A();)u.gJ(u).gl().E(0,t)
u=new D.aM()
u.b=!0
this.U(u)},
a4:function(a){var u,t,s=this
if(s.f)return
s.f=!0
for(u=s.a,u=new J.W(u,u.length);u.A();){t=u.d
if(t!=null)t.a4(a)}s.f=!1},
$aj:function(){return[M.ab]},
$aas:function(){return[M.ab]},
$iab:1}
M.cm.prototype={
gl:function(){var u=this.r
return u==null?this.r=D.z():u},
U:function(a){var u=this.r
if(u!=null)u.w(a)},
aL:function(){return this.U(null)},
saQ:function(a){var u,t,s=this
if(a==null)a=new X.eV()
u=s.b
if(u!==a){if(u!=null)u.gl().E(0,s.gT())
t=s.b
s.b=a
a.gl().k(0,s.gT())
u=new D.q("camera",t,s.b)
u.b=!0
s.U(u)}},
sax:function(a,b){var u,t,s=this
if(b==null)b=X.iZ(!0,null)
u=s.c
if(u!==b){if(u!=null)u.gl().E(0,s.gT())
t=s.c
s.c=b
b.gl().k(0,s.gT())
u=new D.q("target",t,s.c)
u.b=!0
s.U(u)}},
san:function(a){var u,t=this,s=t.d
if(s!=a){if(s!=null)s.gl().E(0,t.gT())
u=t.d
t.d=a
if(a!=null)a.gl().k(0,t.gT())
s=new D.q("technique",u,t.d)
s.b=!0
t.U(s)}},
a4:function(a){var u,t=this
a.bZ(t.d)
t.c.H(a)
t.b.H(a)
u=t.d
if(u!=null)u.a6(0,a)
t.e.a6(0,a)
t.e.a4(a)
t.b.a2(a)
t.c.a2(a)
a.bX()},
$iab:1}
M.cr.prototype={
U:function(a){var u=this.y
if(u!=null)u.w(a)},
aL:function(){return this.U(null)},
em:function(a,b){var u,t,s,r,q,p,o
for(u=b.length,t=this.gT(),s=[{func:1,ret:-1,args:[D.N]}],r=0;r<b.length;b.length===u||(0,H.n)(b),++r){q=b[r]
if(q!=null){p=q.z
if(p==null){p=new D.aG()
p.d=0
q.z=p}o=p.a;(o==null?p.a=H.c([],s):o).push(t)}}u=new D.aL()
u.b=!0
this.U(u)},
eo:function(a,b){var u,t
for(u=b.gR(b),t=this.gT();u.A();)u.gJ(u).gl().E(0,t)
u=new D.aM()
u.b=!0
this.U(u)},
saQ:function(a){var u,t,s=this
if(a==null)a=X.jI(null)
u=s.b
if(u!==a){if(u!=null)u.gl().E(0,s.gT())
t=s.b
s.b=a
a.gl().k(0,s.gT())
u=new D.q("camera",t,s.b)
u.b=!0
s.U(u)}},
sax:function(a,b){var u,t=this,s=t.c
if(s!==b){if(s!=null)s.gl().E(0,t.gT())
u=t.c
t.c=b
b.gl().k(0,t.gT())
s=new D.q("target",u,t.c)
s.b=!0
t.U(s)}},
san:function(a){var u,t=this,s=t.d
if(s!=a){if(s!=null)s.gl().E(0,t.gT())
u=t.d
t.d=a
if(a!=null)a.gl().k(0,t.gT())
s=new D.q("technique",u,t.d)
s.b=!0
t.U(s)}},
gl:function(){var u=this.y
return u==null?this.y=D.z():u},
a4:function(a){var u,t=this
a.bZ(t.d)
t.c.H(a)
t.b.H(a)
u=t.d
if(u!=null)u.a6(0,a)
for(u=t.e.a,u=new J.W(u,u.length);u.A();)u.d.a6(0,a)
for(u=t.e.a,u=new J.W(u,u.length);u.A();)u.d.a4(a)
t.b.toString
a.cy.aw()
a.db.aw()
t.c.a2(a)
a.bX()},
$iab:1}
M.ab.prototype={}
A.cg.prototype={}
A.ed.prototype={
h:function(a,b){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<t;++s){r=u[s]
if(r.b===b)return r}return},
fL:function(){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<u.length;u.length===t||(0,H.n)(u),++s){r=u[s]
r.a.enableVertexAttribArray(r.c)}},
aT:function(){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<u.length;u.length===t||(0,H.n)(u),++s){r=u[s]
r.a.disableVertexAttribArray(r.c)}}}
A.Q.prototype={
gaf:function(a){var u=this.a?1:0,t=this.c?4:0
return u|0|t},
i:function(a){var u=this.a?1:0,t=this.c?4:0
return""+(u|0|t)},
n:function(a,b){var u
if(b==null)return!1
if(!(b instanceof A.Q))return!1
if(this.a===b.a)u=this.c===b.c
else u=!1
return u}}
A.eA.prototype={
cC:function(a,b){if(b!=null&&b.d)a.dt(b)}}
A.fc.prototype={
dC:function(c0,c1){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5=this,b6=null,b7="Required uniform value, ",b8=", was not defined or used in shader.",b9="uniform mat4 objMat;\n"
b5.z=c0
u=new P.aW("")
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
A.lH(c0,u)
A.lJ(c0,u)
A.lI(c0,u)
A.lL(c0,u)
A.lM(c0,u)
A.lK(c0,u)
A.lN(c0,u)
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
b5.aX(0,s.charCodeAt(0)==0?s:s,A.lG(b5.z))
b5.Q=b5.x.h(0,"posAttr")
b5.cx=b5.x.h(0,"normAttr")
b5.ch=b5.x.h(0,"binmAttr")
b5.cy=b5.x.h(0,"txt2DAttr")
b5.db=b5.x.h(0,"txtCubeAttr")
b5.dx=b5.x.h(0,"bendAttr")
if(c0.dx)b5.id=H.h(b5.y.v(0,"invViewMat"),"$iJ")
if(t)b5.dy=H.h(b5.y.v(0,"objMat"),"$iJ")
if(r)b5.fr=H.h(b5.y.v(0,"viewObjMat"),"$iJ")
b5.fy=H.h(b5.y.v(0,"projViewObjMat"),"$iJ")
if(c0.ry)b5.k1=H.h(b5.y.v(0,"txt2DMat"),"$ib2")
if(c0.x1)b5.k2=H.h(b5.y.v(0,"txtCubeMat"),"$iJ")
if(c0.x2)b5.k3=H.h(b5.y.v(0,"colorMat"),"$iJ")
b5.r1=H.c([],[A.J])
t=c0.y2
if(t>0){b5.k4=b5.y.v(0,"bendMatCount")
for(n=0;n<t;++n){s=b5.r1
r=b5.y
q="bendValues["+n+"].mat"
m=r.h(0,q)
if(m==null)H.p(P.m(b7+q+b8))
s.push(H.h(m,"$iJ"))}}t=c0.a
if(t.a)b5.r2=H.h(b5.y.v(0,"emissionClr"),"$iB")
if(t.c)b5.ry=H.h(b5.y.v(0,"emissionTxt"),"$iP")
t=c0.b
if(t.a)b5.x1=H.h(b5.y.v(0,"ambientClr"),"$iB")
if(t.c)b5.y1=H.h(b5.y.v(0,"ambientTxt"),"$iP")
t=c0.c
if(t.a)b5.y2=H.h(b5.y.v(0,"diffuseClr"),"$iB")
if(t.c)b5.bc=H.h(b5.y.v(0,"diffuseTxt"),"$iP")
t=c0.d
if(t.a)b5.cS=H.h(b5.y.v(0,"invDiffuseClr"),"$iB")
if(t.c)b5.cT=H.h(b5.y.v(0,"invDiffuseTxt"),"$iP")
t=c0.e
s=t.a
if(!s)r=t.c
else r=!0
if(r){b5.cW=H.h(b5.y.v(0,"shininess"),"$iL")
if(s)b5.cU=H.h(b5.y.v(0,"specularClr"),"$iB")
if(t.c)b5.cV=H.h(b5.y.v(0,"specularTxt"),"$iP")}if(c0.f.c)b5.cX=H.h(b5.y.v(0,"bumpTxt"),"$iP")
if(c0.cy){b5.cY=H.h(b5.y.v(0,"envSampler"),"$iP")
t=c0.r
if(t.a)b5.cZ=H.h(b5.y.v(0,"reflectClr"),"$iB")
if(t.c)b5.d_=H.h(b5.y.v(0,"reflectTxt"),"$iP")
t=c0.x
s=t.a
if(!s)r=t.c
else r=!0
if(r){b5.d0=H.h(b5.y.v(0,"refraction"),"$iL")
if(s)b5.d1=H.h(b5.y.v(0,"refractClr"),"$iB")
if(t.c)b5.d2=H.h(b5.y.v(0,"refractTxt"),"$iP")}}t=c0.y
if(t.a)b5.d3=H.h(b5.y.v(0,"alpha"),"$iL")
if(t.c)b5.d4=H.h(b5.y.v(0,"alphaTxt"),"$iP")
t=P.x
s=[t,A.b1]
b5.bH=new H.I(s)
b5.bI=new H.I([t,[P.bk,A.bW]])
b5.bJ=new H.I(s)
b5.bK=new H.I([t,[P.bk,A.bX]])
b5.bL=new H.I(s)
b5.bM=new H.I([t,[P.bk,A.bY]])
if(c0.id){for(t=c0.z,s=t.length,r=[A.bW],l=0;l<t.length;t.length===s||(0,H.n)(t),++l){k=t[l]
j=k.a
i="dirLight"+H.e(j)
h=H.c([],r)
for(q=k.b,n=0;n<q;++n){if(typeof j!=="number")return j.ao()
p=(j&1)!==0
if(p){o=b5.y
g=i+"s["+n+"].objUp"
m=o.h(0,g)
if(m==null)H.p(P.m(b7+g+b8))
H.h(m,"$iB")
o=b5.y
g=i+"s["+n+"].objRight"
f=o.h(0,g)
if(f==null)H.p(P.m(b7+g+b8))
H.h(f,"$iB")
o=b5.y
g=i+"s["+n+"].objDir"
e=o.h(0,g)
if(e==null)H.p(P.m(b7+g+b8))
H.h(e,"$iB")
d=e
c=f
b=m}else{d=b6
c=d
b=c}o=b5.y
g=i+"s["+n+"].viewDir"
m=o.h(0,g)
if(m==null)H.p(P.m(b7+g+b8))
H.h(m,"$iB")
o=b5.y
g=i+"s["+n+"].color"
f=o.h(0,g)
if(f==null)H.p(P.m(b7+g+b8))
H.h(f,"$iB")
if(p){p=b5.y
o=i+"sTexture2D"+n
e=p.h(0,o)
if(e==null)H.p(P.m(b7+o+b8))
H.h(e,"$iac")
a=e}else a=b6
h.push(new A.bW(b,c,d,m,f,a))}b5.bI.m(0,j,h)
q=b5.bH
p=b5.y
o=i+"Count"
m=p.h(0,o)
if(m==null)H.p(P.m(b7+o+b8))
q.m(0,j,m)}for(t=c0.Q,s=t.length,r=[A.bX],l=0;l<t.length;t.length===s||(0,H.n)(t),++l){k=t[l]
j=k.a
i="pointLight"+H.e(j)
h=H.c([],r)
for(q=k.b,n=0;n<q;++n){p=b5.y
o=i+"s["+n+"].point"
m=p.h(0,o)
if(m==null)H.p(P.m(b7+o+b8))
H.h(m,"$iB")
p=b5.y
o=i+"s["+n+"].viewPnt"
f=p.h(0,o)
if(f==null)H.p(P.m(b7+o+b8))
H.h(f,"$iB")
p=b5.y
o=i+"s["+n+"].color"
e=p.h(0,o)
if(e==null)H.p(P.m(b7+o+b8))
H.h(e,"$iB")
if(typeof j!=="number")return j.ao()
if((j&3)!==0){p=b5.y
o=i+"s["+n+"].invViewRotMat"
a0=p.h(0,o)
if(a0==null)H.p(P.m(b7+o+b8))
H.h(a0,"$ib2")
a1=a0}else a1=b6
if((j&1)!==0){p=b5.y
o=i+"sTextureCube"+n
a0=p.h(0,o)
if(a0==null)H.p(P.m(b7+o+b8))
H.h(a0,"$iP")
a=a0}else a=b6
if((j&2)!==0){p=b5.y
o=i+"sShadowCube"+n
a0=p.h(0,o)
if(a0==null)H.p(P.m(b7+o+b8))
H.h(a0,"$iP")
p=b5.y
o=i+"s["+n+"].shadowAdj"
a2=p.h(0,o)
if(a2==null)H.p(P.m(b7+o+b8))
H.h(a2,"$ibq")
a3=a0
a4=a2}else{a3=b6
a4=a3}if((j&4)!==0){p=b5.y
o=i+"s["+n+"].att0"
a0=p.h(0,o)
if(a0==null)H.p(P.m(b7+o+b8))
H.h(a0,"$iL")
p=b5.y
o=i+"s["+n+"].att1"
a2=p.h(0,o)
if(a2==null)H.p(P.m(b7+o+b8))
H.h(a2,"$iL")
p=b5.y
o=i+"s["+n+"].att2"
a5=p.h(0,o)
if(a5==null)H.p(P.m(b7+o+b8))
H.h(a5,"$iL")
a6=a5
a7=a2
a8=a0}else{a6=b6
a7=a6
a8=a7}h.push(new A.bX(m,f,a1,e,a,a3,a4,a8,a7,a6))}b5.bK.m(0,j,h)
q=b5.bJ
p=b5.y
o=i+"Count"
m=p.h(0,o)
if(m==null)H.p(P.m(b7+o+b8))
q.m(0,j,m)}for(t=c0.ch,s=t.length,r=[A.bY],l=0;l<t.length;t.length===s||(0,H.n)(t),++l){k=t[l]
j=k.a
i="spotLight"+H.e(j)
h=H.c([],r)
for(q=k.b,n=0;n<q;++n){p=b5.y
o=i+"s["+n+"].objPnt"
m=p.h(0,o)
if(m==null)H.p(P.m(b7+o+b8))
H.h(m,"$iB")
p=b5.y
o=i+"s["+n+"].objDir"
f=p.h(0,o)
if(f==null)H.p(P.m(b7+o+b8))
H.h(f,"$iB")
p=b5.y
o=i+"s["+n+"].viewPnt"
e=p.h(0,o)
if(e==null)H.p(P.m(b7+o+b8))
H.h(e,"$iB")
p=b5.y
o=i+"s["+n+"].color"
a0=p.h(0,o)
if(a0==null)H.p(P.m(b7+o+b8))
H.h(a0,"$iB")
if(typeof j!=="number")return j.ao()
if((j&3)!==0){p=b5.y
o=i+"s["+n+"].objUp"
a2=p.h(0,o)
if(a2==null)H.p(P.m(b7+o+b8))
H.h(a2,"$iB")
p=b5.y
o=i+"s["+n+"].objRight"
a5=p.h(0,o)
if(a5==null)H.p(P.m(b7+o+b8))
H.h(a5,"$iB")
p=b5.y
o=i+"s["+n+"].tuScalar"
a9=p.h(0,o)
if(a9==null)H.p(P.m(b7+o+b8))
H.h(a9,"$iL")
p=b5.y
o=i+"s["+n+"].tvScalar"
b0=p.h(0,o)
if(b0==null)H.p(P.m(b7+o+b8))
H.h(b0,"$iL")
b1=b0
b2=a9
c=a5
b=a2}else{b1=b6
b2=b1
c=b2
b=c}p=(j&2)!==0
if(p){o=b5.y
g=i+"s["+n+"].shadowAdj"
a2=o.h(0,g)
if(a2==null)H.p(P.m(b7+g+b8))
H.h(a2,"$ibq")
a4=a2}else a4=b6
if((j&8)!==0){o=b5.y
g=i+"s["+n+"].cutoff"
a2=o.h(0,g)
if(a2==null)H.p(P.m(b7+g+b8))
H.h(a2,"$iL")
o=b5.y
g=i+"s["+n+"].coneAngle"
a5=o.h(0,g)
if(a5==null)H.p(P.m(b7+g+b8))
H.h(a5,"$iL")
b3=a5
b4=a2}else{b3=b6
b4=b3}if((j&4)!==0){o=b5.y
g=i+"s["+n+"].att0"
a2=o.h(0,g)
if(a2==null)H.p(P.m(b7+g+b8))
H.h(a2,"$iL")
o=b5.y
g=i+"s["+n+"].att1"
a5=o.h(0,g)
if(a5==null)H.p(P.m(b7+g+b8))
H.h(a5,"$iL")
o=b5.y
g=i+"s["+n+"].att2"
a9=o.h(0,g)
if(a9==null)H.p(P.m(b7+g+b8))
H.h(a9,"$iL")
a6=a9
a7=a5
a8=a2}else{a6=b6
a7=a6
a8=a7}if((j&1)!==0){o=b5.y
g=i+"sTexture2D"+n
a2=o.h(0,g)
if(a2==null)H.p(P.m(b7+g+b8))
H.h(a2,"$iac")
a=a2}else a=b6
if(p){p=b5.y
o=i+"sShadow2D"+n
a2=p.h(0,o)
if(a2==null)H.p(P.m(b7+o+b8))
H.h(a2,"$iac")
a3=a2}else a3=b6
h.push(new A.bY(m,f,e,a0,b,c,b2,b1,a4,b4,b3,a8,a7,a6,a,a3))}b5.bM.m(0,j,h)
q=b5.bL
p=b5.y
o=i+"Count"
m=p.h(0,o)
if(m==null)H.p(P.m(b7+o+b8))
q.m(0,j,m)}}},
aa:function(a,b){}}
A.co.prototype={
i:function(a){return"dirLight"+H.e(this.a)}}
A.cP.prototype={
i:function(a){return"pointLight"+H.e(this.a)}}
A.cW.prototype={
i:function(a){return"spotLight"+H.e(this.a)}}
A.ff.prototype={
i:function(a){return this.aW}}
A.bW.prototype={}
A.bX.prototype={}
A.bY.prototype={}
A.fD.prototype={}
A.fF.prototype={
i:function(a){return this.e}}
A.cT.prototype={
aK:function(a,b){var u=this
u.y=u.x=u.r=u.f=u.e=u.d=u.c=null},
aX:function(a,b,c){var u,t,s,r=this
r.c=b
r.d=c
r.e=r.cm(b,35633)
r.f=r.cm(r.d,35632)
u=r.a
t=u.createProgram()
r.r=t
u.attachShader(t,r.e)
u.attachShader(r.r,r.f)
u.linkProgram(r.r)
if(!u.getProgramParameter(r.r,35714)){s=u.getProgramInfoLog(r.r)
u.deleteProgram(r.r)
H.p(P.m("Failed to link shader: "+H.e(s)))}r.ff()
r.fh()},
H:function(a){a.a.useProgram(this.r)
this.x.fL()},
cm:function(a,b){var u,t=this.a,s=t.createShader(b)
t.shaderSource(s,a)
t.compileShader(s)
if(!t.getShaderParameter(s,35713)){u=t.getShaderInfoLog(s)
t.deleteShader(s)
throw H.f(P.m("Error compiling shader '"+H.e(s)+"': "+H.e(u)))}return s},
ff:function(){var u,t,s,r=this,q=H.c([],[A.cg]),p=r.a,o=p.getProgramParameter(r.r,35721)
if(typeof o!=="number")return H.t(o)
u=0
for(;u<o;++u){t=p.getActiveAttrib(r.r,u)
s=p.getAttribLocation(r.r,t.name)
q.push(new A.cg(p,t.name,s))}r.x=new A.ed(q)},
fh:function(){var u,t,s,r=this,q=H.c([],[A.d7]),p=r.a,o=p.getProgramParameter(r.r,35718)
if(typeof o!=="number")return H.t(o)
u=0
for(;u<o;++u){t=p.getActiveUniform(r.r,u)
s=p.getUniformLocation(r.r,t.name)
q.push(r.fE(t.type,t.size,t.name,s))}r.y=new A.hF(q)},
aB:function(a,b,c){var u=this.a
if(a===1)return new A.b1(u,b,c)
else return A.j8(u,this.r,b,a,c)},
dV:function(a,b,c){var u=this.a
if(a===1)return new A.ac(u,b,c)
else return A.j8(u,this.r,b,a,c)},
dW:function(a,b,c){var u=this.a
if(a===1)return new A.P(u,b,c)
else return A.j8(u,this.r,b,a,c)},
b9:function(a,b){return new P.dl(a+" uniform variables are unsupported by all browsers.\n"+("Please change the type of "+H.e(b)+"."))},
fE:function(a,b,c,d){var u=this
switch(a){case 5120:return u.aB(b,c,d)
case 5121:return u.aB(b,c,d)
case 5122:return u.aB(b,c,d)
case 5123:return u.aB(b,c,d)
case 5124:return u.aB(b,c,d)
case 5125:return u.aB(b,c,d)
case 5126:return new A.L(u.a,c,d)
case 35664:return new A.aB(u.a,c,d)
case 35665:return new A.B(u.a,c,d)
case 35666:return new A.bq(u.a,c,d)
case 35667:return new A.hC(u.a,c,d)
case 35668:return new A.hD(u.a,c,d)
case 35669:return new A.hE(u.a,c,d)
case 35674:return new A.hG(u.a,c,d)
case 35675:return new A.b2(u.a,c,d)
case 35676:return new A.J(u.a,c,d)
case 35678:return u.dV(b,c,d)
case 35680:return u.dW(b,c,d)
case 35670:throw H.f(u.b9("BOOL",c))
case 35671:throw H.f(u.b9("BOOL_VEC2",c))
case 35672:throw H.f(u.b9("BOOL_VEC3",c))
case 35673:throw H.f(u.b9("BOOL_VEC4",c))
default:throw H.f(P.m("Unknown uniform variable type "+H.e(a)+" for "+H.e(c)+"."))}}}
A.bd.prototype={
i:function(a){return this.b}}
A.h6.prototype={}
A.ho.prototype={
dG:function(a,b,c){var u,t,s,r,q,p=this,o="Required uniform value, ",n=", was not defined or used in shader."
p.aX(0,"attribute vec3 posAttr;\n\nvarying vec2 pos;\n\nvoid main()\n{\n  pos = posAttr.xy*0.5 + 0.5;\n  gl_Position = vec4(posAttr, 1.0);\n}\n".charCodeAt(0)==0?"attribute vec3 posAttr;\n\nvarying vec2 pos;\n\nvoid main()\n{\n  pos = posAttr.xy*0.5 + 0.5;\n  gl_Position = vec4(posAttr, 1.0);\n}\n":"attribute vec3 posAttr;\n\nvarying vec2 pos;\n\nvoid main()\n{\n  pos = posAttr.xy*0.5 + 0.5;\n  gl_Position = vec4(posAttr, 1.0);\n}\n",A.le(a,b))
p.z=p.x.h(0,"posAttr")
p.Q=H.h(p.y.v(0,"txtCount"),"$ib1")
p.ch=H.h(p.y.v(0,"backClr"),"$ibq")
p.cx=H.c([],[A.ac])
p.cy=H.c([],[A.J])
u=[A.aB]
p.db=H.c([],u)
p.dx=H.c([],u)
p.dy=H.c([],u)
p.fr=H.c([],u)
p.fx=H.c([],[A.b1])
for(t=0;t<a;++t){u=p.cx
s=p.y
r="txt"+t
q=s.h(0,r)
if(q==null)H.p(P.m(o+r+n))
u.push(H.h(q,"$iac"))
u=p.cy
s=p.y
r="clrMat"+t
q=s.h(0,r)
if(q==null)H.p(P.m(o+r+n))
u.push(H.h(q,"$iJ"))
u=p.db
s=p.y
r="srcLoc"+t
q=s.h(0,r)
if(q==null)H.p(P.m(o+r+n))
u.push(H.h(q,"$iaB"))
u=p.dx
s=p.y
r="srcSize"+t
q=s.h(0,r)
if(q==null)H.p(P.m(o+r+n))
u.push(H.h(q,"$iaB"))
u=p.dy
s=p.y
r="destLoc"+t
q=s.h(0,r)
if(q==null)H.p(P.m(o+r+n))
u.push(H.h(q,"$iaB"))
u=p.fr
s=p.y
r="destSize"+t
q=s.h(0,r)
if(q==null)H.p(P.m(o+r+n))
u.push(H.h(q,"$iaB"))
u=p.fx
s=p.y
r="flip"+t
q=s.h(0,r)
if(q==null)H.p(P.m(o+r+n))
u.push(H.h(q,"$ib1"))}}}
A.d7.prototype={}
A.hF.prototype={
h:function(a,b){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<t;++s){r=u[s]
if(r.c===b)return r}return},
v:function(a,b){var u=this.h(0,b)
if(u==null)throw H.f(P.m("Required uniform value, "+b+", was not defined or used in shader."))
return u},
i:function(a){return this.L()},
L:function(){var u,t,s,r
for(u=this.a,t=u.length,s="",r=0;r<u.length;u.length===t||(0,H.n)(u),++r)s+=u[r].i(0)+"\n"
return s}}
A.b1.prototype={
i:function(a){return"Uniform1i: "+H.e(this.c)}}
A.hC.prototype={
i:function(a){return"Uniform2i: "+H.e(this.c)}}
A.hD.prototype={
i:function(a){return"Uniform3i: "+H.e(this.c)}}
A.hE.prototype={
i:function(a){return"Uniform4i: "+H.e(this.c)}}
A.hB.prototype={
i:function(a){return"Uniform1iv: "+H.e(this.c)}}
A.L.prototype={
i:function(a){return"Uniform1f: "+H.e(this.c)}}
A.aB.prototype={
i:function(a){return"Uniform2f: "+H.e(this.c)}}
A.B.prototype={
i:function(a){return"Uniform3f: "+H.e(this.c)}}
A.bq.prototype={
ds:function(a){return this.a.uniform4f(this.d,a.a,a.b,a.c,a.d)},
i:function(a){return"Uniform4f: "+H.e(this.c)}}
A.hG.prototype={
i:function(a){return"Uniform1Mat2 "+H.e(this.c)}}
A.b2.prototype={
Y:function(a){var u=new Float32Array(H.br(a))
this.a.uniformMatrix3fv(this.d,!1,u)},
i:function(a){return"UniformMat3: "+H.e(this.c)}}
A.J.prototype={
Y:function(a){var u=new Float32Array(H.br(a))
this.a.uniformMatrix4fv(this.d,!1,u)},
i:function(a){return"UniformMat4: "+H.e(this.c)}}
A.ac.prototype={
dt:function(a){var u=a==null||!a.d,t=this.a,s=this.d
if(u)t.uniform1i(s,0)
else t.uniform1i(s,a.a)},
i:function(a){return"UniformSampler2D: "+H.e(this.c)}}
A.P.prototype={
c5:function(a){var u=a==null||a.d<6,t=this.a,s=this.d
if(u)t.uniform1i(s,0)
else t.uniform1i(s,a.a)},
i:function(a){return"UniformSamplerCube: "+H.e(this.c)}}
F.iw.prototype={
$3:function(a,b,c){var u,t=this,s=t.a,r=s.a.bT(s.b,b).bT(s.d.bT(s.c,b),c)
a.sa8(0,new V.O(r.a,r.b,r.c))
a.shi(r.t(0,Math.sqrt(r.C(r))))
s=1-b
u=1-c
u=new V.ay(t.b+b*c,t.c+s*c,t.d+b*u,t.e+s*u)
if(!J.w(a.cx,u)){a.cx=u
s=a.a
if(s!=null)s.a1()}}}
F.iN.prototype={
$1:function(a){return new V.O(Math.cos(a),Math.sin(a),0)}}
F.iC.prototype={
$3:function(a,b,c){var u,t,s,r,q,p=this,o=b*6.283185307179586,n=p.a,m=p.b,l=J.jn(n.$1(o),m)
m=J.jn(n.$1(o+3.141592653589793/p.c),m).N(0,l)
m=new V.v(m.a,m.b,m.c)
u=m.t(0,Math.sqrt(m.C(m)))
n=$.k1
if(n==null){n=new V.v(1,0,0)
$.k1=n
t=n}else t=n
n=u.at(!J.w(u,t)?V.k3():t)
s=n.t(0,Math.sqrt(n.C(n)))
n=s.at(u)
t=n.t(0,Math.sqrt(n.C(n)))
r=c*6.283185307179586
n=Math.cos(r)
m=p.d
q=Math.sin(r)
n=t.u(0,n*m)
m=s.u(0,q*m)
a.sa8(0,l.B(0,new V.O(n.a-m.a,n.b-m.b,n.c-m.c)))}}
F.aH.prototype={
aU:function(){var u=this
if(!u.gaV()){C.a.E(u.a.a.d.b,u)
u.a.a.a1()}u.bu()
u.bv()
u.f9()},
by:function(a){this.a=a
a.d.b.push(this)},
bz:function(a){this.b=a
a.d.c.push(this)},
fe:function(a){this.c=a
a.d.d.push(this)},
bu:function(){var u=this.a
if(u!=null){C.a.E(u.d.b,this)
this.a=null}},
bv:function(){var u=this.b
if(u!=null){C.a.E(u.d.c,this)
this.b=null}},
f9:function(){var u=this.c
if(u!=null){C.a.E(u.d.d,this)
this.c=null}},
gaV:function(){return this.a==null||this.b==null||this.c==null},
dR:function(){var u,t,s,r=this.a,q=r==null?null:r.r
r=this.b
u=r==null?null:r.r
r=this.c
t=r==null?null:r.r
s=V.c_()
if(q!=null)s=s.B(0,q)
if(u!=null)s=s.B(0,u)
if(t!=null)s=s.B(0,t)
if(s.d5())return
return s.t(0,Math.sqrt(s.C(s)))},
dT:function(){var u,t,s,r=this.a,q=r==null?null:r.f
r=this.b
u=r==null?null:r.f
r=this.c
t=r==null?null:r.f
if(q==null||u==null||t==null)return
r=u.N(0,q)
r=new V.v(r.a,r.b,r.c)
s=r.t(0,Math.sqrt(r.C(r)))
r=t.N(0,q)
r=new V.v(r.a,r.b,r.c)
r=s.at(r.t(0,Math.sqrt(r.C(r))))
return r.t(0,Math.sqrt(r.C(r)))},
bD:function(){var u,t=this
if(t.d!=null)return!0
u=t.dR()
if(u==null){u=t.dT()
if(u==null)return!1}t.d=u
t.a.a.a1()
return!0},
dQ:function(){var u,t,s,r=this.a,q=r==null?null:r.x
r=this.b
u=r==null?null:r.x
r=this.c
t=r==null?null:r.x
s=V.c_()
if(q!=null)s=s.B(0,q)
if(u!=null)s=s.B(0,u)
if(t!=null)s=s.B(0,t)
if(s.d5())return
return s.t(0,Math.sqrt(s.C(s)))},
dS:function(){var u,t,s,r,q,p,o,n=this,m=null,l=n.a,k=l==null,j=k?m:l.f,i=n.b,h=i==null,g=h?m:i.f,f=n.c,e=f==null,d=e?m:f.f
if(j==null||g==null||d==null)return
u=k?m:l.y
t=h?m:i.y
s=e?m:f.y
if(u==null||t==null||s==null)return
l=t.b
r=l-s.b
if(Math.abs(r-0)<$.y().a){l=d.N(0,g)
l=new V.v(l.a,l.b,l.c)
q=l.t(0,Math.sqrt(l.C(l)))
if(s.a-t.a<0)q=q.O(0)}else{p=(l-u.b)/r
l=d.N(0,g).u(0,p).B(0,g).N(0,j)
l=new V.v(l.a,l.b,l.c)
q=l.t(0,Math.sqrt(l.C(l)))
s=s.a
t=t.a
if((s-t)*p+t-u.a<0)q=q.O(0)}l=n.d
if(l!=null){o=l.t(0,Math.sqrt(l.C(l)))
l=o.at(q)
l=l.t(0,Math.sqrt(l.C(l))).at(o)
q=l.t(0,Math.sqrt(l.C(l)))}return q},
bC:function(){var u,t=this
if(t.e!=null)return!0
u=t.dQ()
if(u==null){u=t.dS()
if(u==null)return!1}t.e=u
t.a.a.a1()
return!0},
gfA:function(a){var u=this
if(J.w(u.a,u.b))return!0
if(J.w(u.b,u.c))return!0
if(J.w(u.c,u.a))return!0
return!1},
n:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.L()},
D:function(a){var u,t,s=this
if(s.gaV())return a+"disposed"
u=a+C.d.ae(J.a3(s.a.e),0)+", "+C.d.ae(J.a3(s.b.e),0)+", "+C.d.ae(J.a3(s.c.e),0)+" {"
t=s.d
u=t!=null?u+(t.i(0)+", "):u+"-, "
t=s.e
return t!=null?u+(t.i(0)+"}"):u+"-}"},
L:function(){return this.D("")}}
F.eL.prototype={}
F.h5.prototype={
aY:function(a,b,c){var u,t=b.a
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
F.bK.prototype={
aU:function(){var u=this
if(!u.gaV()){C.a.E(u.a.a.c.b,u)
u.a.a.a1()}u.bu()
u.bv()},
by:function(a){this.a=a
a.c.b.push(this)},
bz:function(a){this.b=a
a.c.c.push(this)},
bu:function(){var u=this.a
if(u!=null){C.a.E(u.c.b,this)
this.a=null}},
bv:function(){var u=this.b
if(u!=null){C.a.E(u.c.c,this)
this.b=null}},
gaV:function(){return this.a==null||this.b==null},
n:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.L()},
D:function(a){if(this.gaV())return a+"disposed"
return a+C.d.ae(J.a3(this.a.e),0)+", "+C.d.ae(J.a3(this.b.e),0)},
L:function(){return this.D("")}}
F.f2.prototype={}
F.hA.prototype={
aY:function(a,b,c){var u,t=b.a
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
F.bQ.prototype={
n:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.L()},
D:function(a){var u=this.a
if(u==null)return a+"disposed"
return a+C.d.ae(J.a3(u.e),0)},
L:function(){return this.D("")}}
F.fZ.prototype={
gl:function(){var u=this.e
return u==null?this.e=D.z():u},
bV:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i,h=this,g=h.e
if(g!=null)++g.d
a.a.p()
u=h.a.c.length
for(g=a.a.c,t=g.length,s=0;s<g.length;g.length===t||(0,H.n)(g),++s){r=g[s]
h.a.k(0,r.fD())}h.a.p()
for(g=a.b.b,t=g.length,s=0;s<g.length;g.length===t||(0,H.n)(g),++s){q=g[s]
p=h.a
o=q.a
o.a.a.p()
o=o.e
if(typeof o!=="number")return o.B()
o+=u
p=p.c
if(o>=p.length)return H.b(p,o)
n=p[o]
h.b.a.a.k(0,n)
o=new F.bQ()
if(n.a==null)H.p(P.m("May not create a point with a vertex which is not attached to a shape."))
o.a=n
n.b.b.push(o)
o.a.a.b.b.push(o)
p=o.a.a.e
if(p!=null)p.w(null)}for(g=a.c.b,t=g.length,s=0;s<g.length;g.length===t||(0,H.n)(g),++s){m=g[s]
p=h.a
o=m.a
o.a.a.p()
o=o.e
if(typeof o!=="number")return o.B()
o+=u
p=p.c
if(o>=p.length)return H.b(p,o)
l=p[o]
o=h.a
p=m.b
p.a.a.p()
p=p.e
if(typeof p!=="number")return p.B()
p+=u
o=o.c
if(p>=o.length)return H.b(o,p)
k=o[p]
p=h.c.a
p.a.k(0,l)
p.a.k(0,k)
F.kQ(l,k)}for(g=a.d.b,t=g.length,s=0;s<g.length;g.length===t||(0,H.n)(g),++s){j=g[s]
p=h.a
o=j.a
o.a.a.p()
o=o.e
if(typeof o!=="number")return o.B()
o+=u
p=p.c
if(o>=p.length)return H.b(p,o)
l=p[o]
o=h.a
p=j.b
p.a.a.p()
p=p.e
if(typeof p!=="number")return p.B()
p+=u
o=o.c
if(p>=o.length)return H.b(o,p)
k=o[p]
p=h.a
o=j.c
o.a.a.p()
o=o.e
if(typeof o!=="number")return o.B()
o+=u
p=p.c
if(o>=p.length)return H.b(p,o)
i=p[o]
o=h.d.a
o.a.k(0,l)
o.a.k(0,k)
o.a.k(0,i)
F.bF(l,k,i)}g=h.e
if(g!=null)g.am(0)},
ai:function(){var u,t=this,s=t.e
if(s!=null)++s.d
u=t.d.ai()||!1
if(!t.a.ai())u=!1
s=t.e
if(s!=null)s.am(0)
return u},
aE:function(){var u,t=this,s=t.e
if(s!=null)++s.d
u=t.d.aE()||!1
if(!t.a.aE())u=!1
s=t.e
if(s!=null)s.am(0)
return u},
bb:function(){var u=this.e
if(u!=null)++u.d
this.a.bb()
u=this.e
if(u!=null)u.am(0)
return!0},
fV:function(a,b){var u,t,s,r,q,p=this,o=p.e
if(o!=null)++o.d
o=p.a.c
u=H.c(o.slice(0),[H.e6(o,0)])
for(o=[F.b3];u.length!==0;){t=C.a.gfO(u)
C.a.dh(u,0)
if(t!=null){s=H.c([],o)
s.push(t)
for(r=u.length-1;r>=0;--r){if(r>=u.length)return H.b(u,r)
q=u[r]
if(q!=null&&a.aY(0,t,q)){s.push(q)
C.a.dh(u,r)}}if(s.length>1)b.bV(s)}}p.a.p()
p.c.c_()
p.d.c_()
p.b.hb()
p.c.c0(new F.hA())
p.d.c0(new F.h5())
o=p.e
if(o!=null)o.am(0)},
aP:function(a3,a4){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0=this,a1=34962,a2=a0.a.c.length
a4.toString
u=$.S()
t=a4.a
s=(t&u.a)!==0?1:0
if((t&$.af().a)!==0)++s
if((t&$.ae().a)!==0)++s
if((t&$.aq().a)!==0)++s
if((t&$.ag().a)!==0)++s
if((t&$.ce().a)!==0)++s
if((t&$.cf().a)!==0)++s
if((t&$.bx().a)!==0)++s
if((t&$.aD().a)!==0)++s
r=a4.gc6(a4)
q=r*4
u=new Array(a2*r)
u.fixed$length=Array
p=H.c(u,[P.G])
u=new Array(s)
u.fixed$length=Array
o=H.c(u,[Z.ci])
for(u=p.length,t=o.length,n=0,m=0;m<s;++m){l=a4.ft(m)
k=l.gc6(l)
if(m>=t)return H.b(o,m)
o[m]=new Z.ci(l,k,n*4,q)
for(j=0;j<a2;++j){i=a0.a.c
if(j>=i.length)return H.b(i,j)
h=i[j].fT(l)
g=n+j*r
for(i=h.length,f=0;f<i;++f){e=h[f]
if(g<0||g>=u)return H.b(p,g)
p[g]=e;++g}}n+=k}u=a3.a
d=u.createBuffer()
u.bindBuffer(a1,d)
u.bufferData(a1,new Float32Array(H.br(p)),35044)
u.bindBuffer(a1,null)
c=new Z.ar(new Z.dc(a1,d),o,a4)
c.b=H.c([],[Z.bg])
if(a0.b.b.length!==0){b=H.c([],[P.x])
for(m=0;t=a0.b.b,m<t.length;++m){t=t[m].a
t.a.a.p()
b.push(t.e)}a=Z.ja(u,34963,b)
c.b.push(new Z.bg(0,b.length,a))}if(a0.c.b.length!==0){b=H.c([],[P.x])
for(m=0;t=a0.c.b,m<t.length;++m){t=t[m].a
t.a.a.p()
b.push(t.e)
t=a0.c.b
if(m>=t.length)return H.b(t,m)
t=t[m].b
t.a.a.p()
b.push(t.e)}a=Z.ja(u,34963,b)
c.b.push(new Z.bg(1,b.length,a))}if(a0.d.b.length!==0){b=H.c([],[P.x])
for(m=0;t=a0.d.b,m<t.length;++m){t=t[m].a
t.a.a.p()
b.push(t.e)
t=a0.d.b
if(m>=t.length)return H.b(t,m)
t=t[m].b
t.a.a.p()
b.push(t.e)
t=a0.d.b
if(m>=t.length)return H.b(t,m)
t=t[m].c
t.a.a.p()
b.push(t.e)}a=Z.ja(u,34963,b)
c.b.push(new Z.bg(4,b.length,a))}return c},
i:function(a){var u=this,t="   ",s=H.c([],[P.r])
if(u.a.c.length!==0){s.push("Vertices:")
s.push(u.a.D(t))}if(u.b.b.length!==0){s.push("Points:")
s.push(u.b.D(t))}if(u.c.b.length!==0){s.push("Lines:")
s.push(u.c.D(t))}if(u.d.b.length!==0){s.push("Faces:")
s.push(u.d.D(t))}return C.a.q(s,"\n")},
a1:function(){var u=this.e
if(u!=null)u.w(null)}}
F.h_.prototype={
fq:function(a){var u,t,s,r,q=H.c([],[F.aH]),p=a[0]
for(u=this.a,t=2;t<4;++t){s=a[t-1]
r=a[t]
u.a.k(0,p)
u.a.k(0,s)
u.a.k(0,r)
q.push(F.bF(p,s,r))}return q},
fs:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k,j,i,h=H.c([],[F.aH])
for(u=this.a,t=b,s=0,r=!1,q=1;q<a;++q,++s,++t){for(p=r,o=1;o<b;++o,t=k){n=c.length
if(s<0||s>=n)return H.b(c,s)
m=c[s];++s
if(s>=n)return H.b(c,s)
l=c[s]
k=t+1
if(k<0||k>=n)return H.b(c,k)
j=c[k]
if(t<0||t>=n)return H.b(c,t)
i=c[t]
n=u.a
if(p){n.k(0,m)
u.a.k(0,l)
u.a.k(0,j)
h.push(F.bF(m,l,j))
u.a.k(0,m)
u.a.k(0,j)
u.a.k(0,i)
h.push(F.bF(m,j,i))}else{n.k(0,l)
u.a.k(0,j)
u.a.k(0,i)
h.push(F.bF(l,j,i))
u.a.k(0,l)
u.a.k(0,i)
u.a.k(0,m)
h.push(F.bF(l,i,m))}p=!p}r=!r}return h},
gj:function(a){return this.b.length},
c0:function(a){var u,t,s,r,q,p,o,n
for(u=this.a,t=u.a.c.length-1;t>=0;--t){s=u.a.c
if(t>=s.length)return H.b(s,t)
r=s[t]
for(s=r.d,q=s.b.length+s.c.length+s.d.length-1;q>=0;--q){p=r.d.h(0,q)
for(o=q-1;o>=0;--o){n=r.d.h(0,o)
if(a.aY(0,p,n)){p.aU()
break}}}}},
c_:function(){var u,t,s
for(u=this.b.length-1;u>=0;--u){t=this.b
if(u>=t.length)return H.b(t,u)
s=t[u]
t=s.gfA(s)
if(t)s.aU()}},
ai:function(){var u,t,s,r
for(u=this.b,t=u.length,s=!0,r=0;r<u.length;u.length===t||(0,H.n)(u),++r)if(!u[r].bD())s=!1
return s},
aE:function(){var u,t,s,r
for(u=this.b,t=u.length,s=!0,r=0;r<u.length;u.length===t||(0,H.n)(u),++r)if(!u[r].bC())s=!1
return s},
i:function(a){return this.L()},
D:function(a){var u,t,s,r=H.c([],[P.r])
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.n)(u),++s)r.push(u[s].D(a))
return C.a.q(r,"\n")},
L:function(){return this.D("")}}
F.h0.prototype={
gj:function(a){return this.b.length},
c0:function(a){var u,t,s,r,q,p,o,n
for(u=this.a,t=u.a.c.length-1;t>=0;--t){s=u.a.c
if(t>=s.length)return H.b(s,t)
r=s[t]
for(s=r.c,q=s.b.length+s.c.length-1;q>=0;--q){p=r.c.h(0,q)
for(o=q-1;o>=0;--o){n=r.c.h(0,o)
if(a.aY(0,p,n)){p.aU()
break}}}}},
c_:function(){var u,t,s
for(u=this.b.length-1;u>=0;--u){t=this.b
if(u>=t.length)return H.b(t,u)
s=t[u]
t=J.w(s.a,s.b)
if(t)s.aU()}},
i:function(a){return this.L()},
D:function(a){var u,t,s=H.c([],[P.r]),r=this.b.length
for(u=0;u<r;++u){t=this.b
if(u>=t.length)return H.b(t,u)
s.push(t[u].D(a+(""+u+". ")))}return C.a.q(s,"\n")},
L:function(){return this.D("")}}
F.h1.prototype={
gj:function(a){return this.b.length},
hb:function(){var u,t,s
for(u=this.b.length-1;u>=0;--u){t=this.b
if(u>=t.length)return H.b(t,u)
t=t[u]
s=t.a
if(s.b.b.length>1){if(s!=null){C.a.E(s.a.b.b,t)
s=t.a.a.e
if(s!=null)s.w(null)}s=t.a
if(s!=null){C.a.E(s.b.b,t)
t.a=null}}}},
i:function(a){return this.L()},
D:function(a){var u,t,s,r=H.c([],[P.r])
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.n)(u),++s)r.push(u[s].D(a))
return C.a.q(r,"\n")},
L:function(){return this.D("")}}
F.b3.prototype={
bF:function(a){var u=this,t=u.f,s=u.r,r=u.x,q=u.y,p=u.z,o=u.Q,n=u.ch
return F.hR(u.cx,r,o,t,s,q,p,a,n)},
fD:function(){return this.bF(null)},
sa8:function(a,b){var u
if(!J.w(this.f,b)){this.f=b
u=this.a
if(u!=null)u.a1()}},
shi:function(a){var u
if(!J.w(this.z,a)){this.z=a
u=this.a
if(u!=null)u.a1()}},
fT:function(a){var u,t,s=this
if(a.n(0,$.S())){u=s.f
t=[P.G]
if(u==null)return H.c([0,0,0],t)
else return H.c([u.a,u.b,u.c],t)}else if(a.n(0,$.af())){u=s.r
t=[P.G]
if(u==null)return H.c([0,1,0],t)
else return H.c([u.a,u.b,u.c],t)}else if(a.n(0,$.ae())){u=s.x
t=[P.G]
if(u==null)return H.c([0,0,1],t)
else return H.c([u.a,u.b,u.c],t)}else if(a.n(0,$.aq())){u=s.y
t=[P.G]
if(u==null)return H.c([0,0],t)
else return H.c([u.a,u.b],t)}else if(a.n(0,$.ag())){u=s.z
t=[P.G]
if(u==null)return H.c([0,0,0],t)
else return H.c([u.a,u.b,u.c],t)}else if(a.n(0,$.ce())){u=s.Q
t=[P.G]
if(u==null)return H.c([1,1,1],t)
else return H.c([u.a,u.b,u.c],t)}else if(a.n(0,$.cf())){u=s.Q
t=[P.G]
if(u==null)return H.c([1,1,1,1],t)
else return H.c([u.a,u.b,u.c,u.d],t)}else if(a.n(0,$.bx()))return H.c([s.ch],[P.G])
else if(a.n(0,$.aD())){u=s.cx
t=[P.G]
if(u==null)return H.c([-1,-1,-1,-1],t)
else return H.c([u.a,u.b,u.c,u.d],t)}else return H.c([],[P.G])},
bD:function(){var u,t=this,s={}
if(t.r!=null)return!0
u=t.a
if(u!=null){u=u.e
if(u!=null)++u.d}s.a=V.c_()
t.d.K(0,new F.i1(s))
s=s.a
t.r=s.t(0,Math.sqrt(s.C(s)))
s=t.a
if(s!=null){s.a1()
s=t.a.e
if(s!=null)s.am(0)}return!0},
bC:function(){var u,t=this,s={}
if(t.x!=null)return!0
u=t.a
if(u!=null){u=u.e
if(u!=null)++u.d}s.a=V.c_()
t.d.K(0,new F.i0(s))
s=s.a
t.x=s.t(0,Math.sqrt(s.C(s)))
s=t.a
if(s!=null){s.a1()
s=t.a.e
if(s!=null)s.am(0)}return!0},
n:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.L()},
D:function(a){var u,t,s=this,r="-",q=H.c([],[P.r])
q.push(C.d.ae(J.a3(s.e),0))
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
q.push(V.A(s.ch,3,0))
u=s.cx
if(u!=null)q.push(u.i(0))
else q.push(r)
t=C.a.q(q,", ")
return a+"{"+t+"}"},
L:function(){return this.D("")}}
F.i1.prototype={
$1:function(a){var u,t=a==null?null:a.d
if(t!=null){u=this.a
u.a=u.a.B(0,t)}}}
F.i0.prototype={
$1:function(a){var u,t=a==null?null:a.e
if(t!=null){u=this.a
u.a=u.a.B(0,t)}}}
F.hS.prototype={
p:function(){var u,t,s,r
if(this.b){u=this.c
t=u.length
for(s=0,r=0;r<t;++r){if(r>=u.length)return H.b(u,r)
u[r].e=s;++s}this.b=!1}},
k:function(a,b){var u,t=b.a
if(t!=null){if(t===this.a)return!1
throw H.f(P.m("May not add a vertex already attached to another shape to this shape."))}t=this.c
b.e=t.length
u=this.a
b.a=u
t.push(b)
u.a1()
return!0},
ba:function(a,b,c,d,e,f){var u=F.hR(a,null,b,c,null,d,e,f,0)
this.k(0,u)
return u},
gj:function(a){return this.c.length},
ai:function(){var u,t,s
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.n)(u),++s)u[s].bD()
return!0},
aE:function(){var u,t,s
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.n)(u),++s)u[s].bC()
return!0},
bb:function(){var u,t,s,r,q,p,o,n
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.n)(u),++s){r=u[s]
if(r.z==null){q=r.r
p=q.a
o=q.b
n=q.c
n=q.t(0,Math.sqrt(p*p+o*o+n*n))
if(!J.w(r.z,n)){r.z=n
q=r.a
if(q!=null){q=q.e
if(q!=null)q.w(null)}}}}return!0},
i:function(a){return this.L()},
D:function(a){var u,t,s,r
this.p()
u=H.c([],[P.r])
for(t=this.c,s=t.length,r=0;r<t.length;t.length===s||(0,H.n)(t),++r)u.push(t[r].D(a))
return C.a.q(u,"\n")},
L:function(){return this.D("")}}
F.hT.prototype={
gj:function(a){return this.b.length+this.c.length+this.d.length},
h:function(a,b){var u,t=this.b,s=t.length
if(b<s){if(b<0)return H.b(t,b)
return t[b]}b-=s
t=this.c
u=t.length
if(b<u){if(b<0)return H.b(t,b)
return t[b]}b-=u
t=this.d
if(b<0||b>=t.length)return H.b(t,b)
return t[b]},
K:function(a,b){var u=this
C.a.K(u.b,b)
C.a.K(u.c,new F.hU(u,b))
C.a.K(u.d,new F.hV(u,b))},
i:function(a){return this.L()},
L:function(){var u,t,s,r=H.c([],[P.r])
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.n)(u),++s)r.push(u[s].D(""))
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.n)(u),++s)r.push(u[s].D(""))
for(u=this.d,t=u.length,s=0;s<u.length;u.length===t||(0,H.n)(u),++s)r.push(u[s].D(""))
return C.a.q(r,"\n")}}
F.hU.prototype={
$1:function(a){if(!J.w(a.a,this.a))this.b.$1(a)}}
F.hV.prototype={
$1:function(a){var u=this.a
if(!J.w(a.a,u)&&!J.w(a.b,u))this.b.$1(a)}}
F.hW.prototype={
gj:function(a){return this.b.length+this.c.length},
h:function(a,b){var u,t=this.b,s=t.length
if(b>=s){t=this.c
u=b-s
if(u<0||u>=t.length)return H.b(t,u)
return t[u]}else{if(b<0)return H.b(t,b)
return t[b]}},
i:function(a){return this.L()},
L:function(){var u,t,s,r=H.c([],[P.r])
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.n)(u),++s)r.push(u[s].D(""))
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.n)(u),++s)r.push(u[s].D(""))
return C.a.q(r,"\n")}}
F.hY.prototype={}
F.hX.prototype={
aY:function(a,b,c){return J.w(b.f,c.f)}}
F.hZ.prototype={}
F.fE.prototype={
bV:function(a){var u,t,s,r,q,p,o,n,m=V.c_()
for(u=a.length,t=0;t<u;++t){s=a[t].r
if(s!=null)m=new V.v(m.a+s.a,m.b+s.b,m.c+s.c)}m=m.t(0,Math.sqrt(m.C(m)))
for(u=a.length,s=m==null,t=0;t<a.length;a.length===u||(0,H.n)(a),++t){r=a[t]
if(s)q=null
else{p=m.a
o=m.b
n=m.c
q=m.t(0,Math.sqrt(p*p+o*o+n*n))}if(!J.w(r.r,q)){r.r=q
p=r.a
if(p!=null){p=p.e
if(p!=null)p.w(null)}}}return}}
F.i_.prototype={
gj:function(a){return this.b.length},
i:function(a){return this.L()},
L:function(){var u,t,s,r=H.c([],[P.r])
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.n)(u),++s)r.push(u[s].D(""))
return C.a.q(r,"\n")}}
O.ez.prototype={
gl:function(){var u=this.r
return u==null?this.r=D.z():u},
V:function(){var u=this.r
if(u!=null)u.w(null)},
scO:function(a){if(this.b!=a){this.b=a
this.V()}},
scL:function(a){if(this.c!=a){this.c=a
this.V()}},
scK:function(a){var u=a==null?V.am():a
this.f=u
if(!J.w(u,a)){this.f=a
this.V()}},
a6:function(a,b){},
a_:function(a,b){if(b!=null)if(!C.a.ab(a,b)){b.a=a.length
a.push(b)}},
b1:function(a,b){var u,t,s,r,q,p,o=this,n="Distort"
if(o.a==null){u=a.fr.h(0,n)
if(u==null){t=a.a
u=new A.eA(t,n)
u.aK(t,n)
u.aX(0,"uniform mat4 projViewObjMat;                             \nuniform mat3 colorTxt2DMat;                              \nuniform mat3 bumpTxt2DMat;                               \n                                                         \nattribute vec3 posAttr;                                  \nattribute vec2 txt2DAttr;                                \n                                                         \nvarying vec2 colorTxt2D;                                 \nvarying vec2 bumpTxt2D;                                  \n                                                         \nvoid main()                                              \n{                                                        \n   vec3 txt2D = vec3(txt2DAttr.x, 1.0-txt2DAttr.y, 1.0); \n   colorTxt2D = (colorTxt2DMat * txt2D).xy;              \n   bumpTxt2D = (bumpTxt2DMat * vec3(txt2DAttr, 1.0)).xy; \n   gl_Position = projViewObjMat * vec4(posAttr, 1.0);    \n}                                                        \n","precision mediump float;                           \n                                                   \nuniform sampler2D colorTxt;                        \nuniform sampler2D bumpTxt;                         \nuniform mat4 bumpMat;                              \n                                                   \nvarying vec2 colorTxt2D;                           \nvarying vec2 bumpTxt2D;                            \n                                                   \nvec2 offset()                                      \n{                                                  \n   vec3 txt2D = texture2D(bumpTxt, bumpTxt2D).rgb; \n   txt2D = normalize(txt2D*2.0 - 1.0);             \n   return (bumpMat * vec4(txt2D, 1.0)).xy;         \n}                                                  \n                                                   \nvoid main()                                        \n{                                                  \n   vec2 txt2D = colorTxt2D + offset();             \n   gl_FragColor = texture2D(colorTxt, txt2D);      \n}                                                  \n")
u.z=u.x.h(0,"posAttr")
u.Q=u.x.h(0,"txt2DAttr")
u.ch=H.h(u.y.v(0,"projViewObjMat"),"$iJ")
u.cx=H.h(u.y.v(0,"colorTxt2DMat"),"$ib2")
u.cy=H.h(u.y.v(0,"bumpTxt2DMat"),"$ib2")
u.db=H.h(u.y.v(0,"colorTxt"),"$iac")
u.dx=H.h(u.y.v(0,"bumpTxt"),"$iac")
u.dy=H.h(u.y.v(0,"bumpMat"),"$iJ")
a.aO(u)}o.a=u}if(b.e==null){t=b.d
s=$.S()
r=$.aq()
r=t.aP(new Z.b4(a.a),new Z.a2(s.a|r.a))
r.a3($.S()).e=o.a.z.c
r.a3($.aq()).e=o.a.Q.c
b.e=r}q=H.c([],[T.aY])
o.a_(q,o.b)
o.a_(q,o.c)
for(p=0;p<q.length;++p)q[p].H(a)
t=o.a
t.H(a)
s=o.b
t.cC(t.db,s)
s=o.c
t.cC(t.dx,s)
s=a.gbY()
r=t.ch
r.toString
r.Y(s.S(0,!0))
s=o.d
r=t.cx
r.toString
r.Y(s.S(0,!0))
s=o.e
r=t.cy
r.toString
r.Y(s.S(0,!0))
s=o.f
t=t.dy
t.toString
t.Y(s.S(0,!0))
t=b.e
if(t instanceof Z.ar){t.H(a)
t.a4(a)
t.a2(a)}else b.e=null
t=o.a
t.toString
s=a.a
s.useProgram(null)
t.x.aT()
for(p=0;p<q.length;++p){t=q[p]
if(t.c){t.c=!1
s.activeTexture(33984+t.a)
s.bindTexture(3553,null)}}}}
O.cG.prototype={
gl:function(){var u=this.fr
return u==null?this.fr=D.z():u},
F:function(a){var u=this.fr
if(u!=null)u.w(a)},
V:function(){return this.F(null)},
ct:function(a){this.a=null
this.F(a)},
fc:function(){return this.ct(null)},
eg:function(a,b){var u=new D.aL()
u.b=!0
this.F(u)},
ei:function(a,b){var u=new D.aM()
u.b=!0
this.F(u)},
cj:function(){var u,t,s,r,q,p,o,n,m,l,k,j=this,i=P.x,h=new H.I([i,i])
for(u=j.dx.e,t=u.length,s=0;s<u.length;u.length===t||(0,H.n)(u),++s){r=h.h(0,0)
h.m(0,0,r==null?1:r)}q=H.c([],[A.co])
h.K(0,new O.fj(j,q))
C.a.bi(q,new O.fk())
p=new H.I([i,i])
for(u=j.dx.f,t=u.length,s=0;s<u.length;u.length===t||(0,H.n)(u),++s){o=u[s]
r=o.gaS()
n=p.h(0,o.gaS())
p.m(0,r,n==null?1:n)}m=H.c([],[A.cP])
p.K(0,new O.fl(j,m))
C.a.bi(m,new O.fm())
l=new H.I([i,i])
for(i=j.dx.r,u=i.length,s=0;s<i.length;i.length===u||(0,H.n)(i),++s){o=i[s]
t=o.gaS()
r=l.h(0,o.gaS())
l.m(0,t,r==null?1:r)}k=H.c([],[A.cW])
l.K(0,new O.fn(j,k))
C.a.bi(k,new O.fo())
i=C.c.a5(j.e.a.length+3,4)
j.dy.e
return A.kW(!1,!1,!1,!1,i*4,j.f.c,j.r.c,j.x.c,j.y.c,j.z.c,j.Q.c,j.cx.c,j.cy.c,j.db.c,q,m,k)},
a_:function(a,b){},
a6:function(a,b){var u,t,s,r,q,p,o
for(u=this.dx.a,u=new J.W(u,u.length);u.A();){t=u.d
t.toString
s=$.hQ
if(s==null)s=$.hQ=new V.v(0,0,1)
t.a=s
r=$.hP
t.d=r==null?$.hP=new V.v(0,1,0):r
r=$.hO
t.e=r==null?$.hO=new V.v(-1,0,0):r
r=t.b
if(r!=null){q=r.a
if(q!=null){s=q.bh(s)
r=s.a
p=s.b
o=s.c
t.a=s.t(0,Math.sqrt(r*r+p*p+o*o))
o=q.bh(t.d)
p=o.a
r=o.b
s=o.c
t.d=o.t(0,Math.sqrt(p*p+r*r+s*s))
s=q.bh(t.e)
r=s.a
p=s.b
o=s.c
t.e=s.t(0,Math.sqrt(r*r+p*p+o*o))}}}},
b1:function(b1,b2){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9=this,b0=a9.a
if(b0==null){b0=a9.cj()
u=b1.fr.h(0,b0.aW)
if(u==null){u=A.kV(b0,b1.a)
b1.aO(u)}b0=a9.a=u
b2.e=null}t=b0.z
s=t.bc
b0=b2.e
if(!(b0 instanceof Z.ar))b0=b2.e=null
if(b0==null||!b0.d.n(0,s)){b0=t.k3
if(b0)b2.d.ai()
r=t.k4
if(r)b2.d.aE()
q=t.r2
if(q)b2.d.bb()
p=b2.d.aP(new Z.b4(b1.a),s)
p.a3($.S()).e=a9.a.Q.c
if(b0)p.a3($.af()).e=a9.a.cx.c
if(r)p.a3($.ae()).e=a9.a.ch.c
if(t.r1)p.a3($.aq()).e=a9.a.cy.c
if(q)p.a3($.ag()).e=a9.a.db.c
if(t.rx)p.a3($.aD()).e=a9.a.dx.c
b2.e=p}o=H.c([],[T.aY])
a9.a.H(b1)
if(t.dy){b0=a9.a
r=b1.dx
r=r.ga0(r)
b0=b0.dy
b0.toString
b0.Y(r.S(0,!0))}if(t.fr){b0=a9.a
r=b1.gdl()
b0=b0.fr
b0.toString
b0.Y(r.S(0,!0))}b0=a9.a
r=b1.gbY()
b0=b0.fy
b0.toString
b0.Y(r.S(0,!0))
if(t.ry){b0=a9.a
r=a9.b
b0=b0.k1
b0.toString
b0.Y(C.k.S(r,!0))}if(t.x1){b0=a9.a
r=a9.c
b0=b0.k2
b0.toString
b0.Y(C.k.S(r,!0))}if(t.x2){b0=a9.a
r=a9.d
b0=b0.k3
b0.toString
b0.Y(C.k.S(r,!0))}if(t.y2>0){n=a9.e.a.length
b0=a9.a.k4
b0.a.uniform1i(b0.d,n)
for(m=0;m<n;++m){b0=a9.a
r=a9.e.a
if(m>=r.length)return H.b(r,m)
r=r[m]
b0=b0.r1
if(m>=b0.length)return H.b(b0,m)
b0=b0[m]
l=new Float32Array(H.br(r.S(0,!0)))
b0.a.uniformMatrix4fv(b0.d,!1,l)}}b0=t.a
if(b0.a){r=a9.a
q=a9.f.f
r=r.r2
r.a.uniform3f(r.d,q.a,q.b,q.c)}if(b0.c){a9.a_(o,a9.f.e)
b0=a9.a
r=a9.f.e
b0.aa(b0.ry,r)}if(t.id){b0=t.b
if(b0.a){r=a9.a
q=a9.r.f
r=r.x1
r.a.uniform3f(r.d,q.a,q.b,q.c)}if(b0.c){a9.a_(o,a9.r.e)
b0=a9.a
r=a9.r.e
b0.aa(b0.y1,r)}b0=t.c
if(b0.a){r=a9.a
q=a9.x.f
r=r.y2
r.a.uniform3f(r.d,q.a,q.b,q.c)}if(b0.c){a9.a_(o,a9.x.e)
b0=a9.a
r=a9.x.e
b0.aa(b0.bc,r)}b0=t.d
if(b0.a){r=a9.a
q=a9.y.f
r=r.cS
r.a.uniform3f(r.d,q.a,q.b,q.c)}if(b0.c){a9.a_(o,a9.y.e)
b0=a9.a
r=a9.y.e
b0.aa(b0.cT,r)}b0=t.e
r=b0.a
if(!r)q=b0.c
else q=!0
if(q){q=a9.a
k=a9.z.ch
q=q.cW
q.a.uniform1f(q.d,k)}if(r){r=a9.a
q=a9.z.f
r=r.cU
r.a.uniform3f(r.d,q.a,q.b,q.c)}if(b0.c){a9.a_(o,a9.z.e)
b0=a9.a
r=a9.z.e
b0.aa(b0.cV,r)}b0=t.z
if(b0.length>0){r=b1.db
j=r.ga0(r)
r=P.x
i=new H.I([r,r])
for(r=a9.dx.e,q=r.length,h=0;h<r.length;r.length===q||(0,H.n)(r),++h){g=r[h]
f=i.h(0,0)
if(f==null)f=0
i.m(0,0,f+1)
e=J.e8(a9.a.bI.h(0,0),f)
k=j.bh(g.a)
d=k.a
c=k.b
b=k.c
b=k.t(0,Math.sqrt(d*d+c*c+b*b))
c=e.e
d=b.a
k=b.b
b=b.c
c.a.uniform3f(c.d,d,k,b)
b=g.c
k=e.f
k.a.uniform3f(k.d,b.a,b.b,b.c)}for(r=b0.length,h=0;h<b0.length;b0.length===r||(0,H.n)(b0),++h){q=b0[h].a
n=i.h(0,q)
if(n==null)n=0
q=a9.a.bH.h(0,q)
q.a.uniform1i(q.d,n)}}b0=t.Q
if(b0.length>0){r=b1.db
j=r.ga0(r)
r=P.x
a=new H.I([r,r])
for(r=a9.dx.f,q=r.length,h=0;h<r.length;r.length===q||(0,H.n)(r),++h){g=r[h]
a0=g.gaS()
f=a.h(0,a0)
if(f==null)f=0
a.m(0,a0,f+1)
e=J.e8(a9.a.bK.h(0,a0),f)
a1=j.u(0,g.ga0(g))
k=g.ga0(g)
d=$.bR
k=k.c2(d==null?$.bR=new V.O(0,0,0):d)
d=e.b
d.a.uniform3f(d.d,k.a,k.b,k.c)
k=$.bR
k=a1.c2(k==null?$.bR=new V.O(0,0,0):k)
d=e.c
d.a.uniform3f(d.d,k.a,k.b,k.c)
k=g.gaR(g)
d=e.e
d.a.uniform3f(d.d,k.a,k.b,k.c)
g.gay()
k=a1.bQ(0)
d=k.a
c=k.b
b=k.c
a2=k.e
a3=k.f
a4=k.r
a5=k.y
a6=k.z
k=k.Q
a7=e.d
a7.toString
l=new Float32Array(H.br(new V.bL(d,c,b,a2,a3,a4,a5,a6,k).S(0,!0)))
a7.a.uniformMatrix3fv(a7.d,!1,l)
g.gay()
k=g.gay()
if(!C.a.ab(o,k)){k.sbO(0,o.length)
o.push(k)}k=g.gay()
d=k.gbU(k)
if(d){d=e.f
d.toString
c=k.d
if(c<6)d.a.uniform1i(d.d,0)
else{k=k.a
d.a.uniform1i(d.d,k)}}g.gaI()
k=g.gdu()
d=e.x
d.toString
c=k.gfI(k)
b=k.gfJ(k)
a2=k.gfK()
k=k.gfH()
d.a.uniform4f(d.d,c,b,a2,k)
k=g.gaI()
if(!C.a.ab(o,k)){k.sbO(0,o.length)
o.push(k)}k=g.gaI()
d=k.gbU(k)
if(d){d=e.r
d.toString
c=k.d
if(c<6)d.a.uniform1i(d.d,0)
else{k=k.a
d.a.uniform1i(d.d,k)}}if(g.gfM()){k=g.gfu()
d=e.y
d.a.uniform1f(d.d,k)
k=g.gfv()
d=e.z
d.a.uniform1f(d.d,k)
k=g.gfw()
d=e.Q
d.a.uniform1f(d.d,k)}}for(r=b0.length,h=0;h<b0.length;b0.length===r||(0,H.n)(b0),++h){q=b0[h].a
n=a.h(0,q)
if(n==null)n=0
q=a9.a.bJ.h(0,q)
q.a.uniform1i(q.d,n)}}b0=t.ch
if(b0.length>0){r=b1.db
j=r.ga0(r)
r=P.x
a8=new H.I([r,r])
for(r=a9.dx.r,q=r.length,h=0;h<r.length;r.length===q||(0,H.n)(r),++h){g=r[h]
a0=g.gaS()
f=a8.h(0,a0)
if(f==null)f=0
a8.m(0,a0,f+1)
e=J.e8(a9.a.bM.h(0,a0),f)
k=g.gh9(g)
d=e.b
d.a.uniform3f(d.d,k.a,k.b,k.c)
k=g.ghq(g).hB()
d=e.c
d.a.uniform3f(d.d,k.a,k.b,k.c)
k=j.c2(g.gh9(g))
d=e.d
d.a.uniform3f(d.d,k.a,k.b,k.c)
k=g.gaR(g)
d=e.e
d.a.uniform3f(d.d,k.a,k.b,k.c)
g.gay()
k=g.ghE()
d=e.f
d.a.uniform3f(d.d,k.a,k.b,k.c)
k=g.gc1(g)
d=e.r
d.a.uniform3f(d.d,k.a,k.b,k.c)
k=g.ghC()
d=e.x
d.a.uniform1f(d.d,k)
k=g.ghD()
d=e.y
d.a.uniform1f(d.d,k)
g.gay()
k=g.gay()
if(!C.a.ab(o,k)){k.sbO(0,o.length)
o.push(k)}k=g.gay()
d=k.gbU(k)
if(d){d=e.dx
d.toString
c=k.d
if(!c)d.a.uniform1i(d.d,0)
else{k=k.a
d.a.uniform1i(d.d,k)}}g.gaI()
k=g.gdu()
d=e.z
d.toString
c=k.gfI(k)
b=k.gfJ(k)
a2=k.gfK()
k=k.gfH()
d.a.uniform4f(d.d,c,b,a2,k)
k=g.gaI()
if(!C.a.ab(o,k)){k.sbO(0,o.length)
o.push(k)}k=g.gaI()
d=k.gbU(k)
if(d){d=e.dy
d.toString
c=k.d
if(!c)d.a.uniform1i(d.d,0)
else{k=k.a
d.a.uniform1i(d.d,k)}}if(g.ghr()){k=g.ghp()
d=e.Q
d.a.uniform1f(d.d,k)
k=g.gho()
d=e.ch
d.a.uniform1f(d.d,k)}if(g.gfM()){k=g.gfu()
d=e.cx
d.a.uniform1f(d.d,k)
k=g.gfv()
d=e.cy
d.a.uniform1f(d.d,k)
k=g.gfw()
d=e.db
d.a.uniform1f(d.d,k)}}for(r=b0.length,h=0;h<b0.length;b0.length===r||(0,H.n)(b0),++h){q=b0[h].a
n=a8.h(0,q)
if(n==null)n=0
q=a9.a.bL.h(0,q)
q.a.uniform1i(q.d,n)}}}if(t.f.c){a9.a_(o,a9.Q.e)
b0=a9.a
r=a9.Q.e
b0.aa(b0.cX,r)}if(t.dx){b0=a9.a
r=b1.Q
if(r==null){r=b1.db
r=b1.Q=r.ga0(r).bQ(0)}b0=b0.id
b0.toString
b0.Y(r.S(0,!0))}if(t.cy){a9.a_(o,a9.ch)
b0=a9.a
r=a9.ch
b0.aa(b0.cY,r)
b0=t.r
if(b0.a){r=a9.a
q=a9.cx.f
r=r.cZ
r.a.uniform3f(r.d,q.a,q.b,q.c)}if(b0.c){a9.a_(o,a9.cx.e)
b0=a9.a
r=a9.cx.e
b0.aa(b0.d_,r)}b0=t.x
r=b0.a
if(!r)q=b0.c
else q=!0
if(q){q=a9.a
k=a9.cy.ch
q=q.d0
q.a.uniform1f(q.d,k)}if(r){r=a9.a
q=a9.cy.f
r=r.d1
r.a.uniform3f(r.d,q.a,q.b,q.c)}if(b0.c){a9.a_(o,a9.cy.e)
b0=a9.a
r=a9.cy.e
b0.aa(b0.d2,r)}}b0=t.y
r=b0.a
q=!r
if(q)k=b0.c
else k=!0
if(k){if(r){r=a9.a
k=a9.db.f
r=r.d3
r.a.uniform1f(r.d,k)}if(b0.c){a9.a_(o,a9.db.e)
r=a9.a
k=a9.db.e
r.aa(r.d4,k)}r=b1.a
r.enable(3042)
r.blendFunc(770,771)}for(m=0;m<o.length;++m)o[m].H(b1)
r=b2.e
r.H(b1)
r.a4(b1)
r.a2(b1)
if(q)b0=b0.c
else b0=!0
if(b0)b1.a.disable(3042)
for(m=0;m<o.length;++m)o[m].a2(b1)
b0=a9.a
b0.toString
b1.a.useProgram(null)
b0.x.aT()},
i:function(a){var u=this.a
if(u!=null)return u.b
else return this.cj().aW}}
O.fj.prototype={
$2:function(a,b){if(typeof b!=="number")return b.B()
return this.b.push(new A.co(a,C.c.a5(b+3,4)*4))}}
O.fk.prototype={
$2:function(a,b){return J.iQ(a.a,b.a)}}
O.fl.prototype={
$2:function(a,b){if(typeof b!=="number")return b.B()
return this.b.push(new A.cP(a,C.c.a5(b+3,4)*4))}}
O.fm.prototype={
$2:function(a,b){return J.iQ(a.a,b.a)}}
O.fn.prototype={
$2:function(a,b){if(typeof b!=="number")return b.B()
return this.b.push(new A.cW(a,C.c.a5(b+3,4)*4))}}
O.fo.prototype={
$2:function(a,b){return J.iQ(a.a,b.a)}}
O.fd.prototype={
ar:function(){var u,t=this
t.c9()
u=t.f
if(!(Math.abs(u-1)<$.y().a)){t.f=1
u=new D.q(t.b,u,1)
u.b=!0
t.a.F(u)}}}
O.cH.prototype={
ar:function(){},
cA:function(a){var u,t,s=this
if(!s.c.n(0,a)){u=s.c
if(!u.a)u=u.c
else u=!0
if(u){if(!a.a)u=a.c
else u=!0
t=!u}else t=!0
s.c=a
if(t)s.ar()
u=s.a
u.a=null
u.F(null)}}}
O.fe.prototype={}
O.ak.prototype={
cz:function(a){var u,t,s=this
if(!s.f.n(0,a)){u=s.f
s.f=a
t=new D.q(s.b+".color",u,a)
t.b=!0
s.a.F(t)}},
ar:function(){this.c9()
this.cz(new V.M(1,1,1))},
saR:function(a,b){this.cA(new A.Q(!0,!1,this.c.c))
this.cz(b)}}
O.fg.prototype={}
O.fh.prototype={
ar:function(){var u,t=this
t.ca()
u=t.ch
if(!(Math.abs(u-1)<$.y().a)){t.ch=1
u=new D.q(t.b+".refraction",u,1)
u.b=!0
t.a.F(u)}}}
O.fi.prototype={
cB:function(a){var u=this,t=u.ch
if(!(Math.abs(t-a)<$.y().a)){u.ch=a
t=new D.q(u.b+".shininess",t,a)
t.b=!0
u.a.F(t)}},
ar:function(){this.ca()
this.cB(100)}}
O.cM.prototype={
gl:function(){var u=this.r
return u==null?this.r=D.z():u},
F:function(a){var u=this.r
if(u!=null)u.w(a)},
V:function(){return this.F(null)},
cv:function(a){},
cw:function(a){var u,t=this,s=t.f
if(s!=a){if(s!=null)s.gl().E(0,t.ga9())
u=t.f
t.f=a
if(a!=null)a.gl().k(0,t.ga9())
s=new D.q("bumpyTextureCube",u,t.f)
s.b=!0
t.F(s)}},
a_:function(a,b){if(b!=null)if(!C.a.ab(a,b)){b.a=a.length
a.push(b)}},
a6:function(a,b){},
b1:function(a,b){var u,t,s,r,q,p,o,n,m,l,k,j=this,i="varying vec3 txtCube;\n",h=j.a
if(h==null){h=A.jG(j.d)
u=h.e
t=a.fr.h(0,u)
if(t==null){s=a.a
t=new A.fD(s,u)
t.aK(s,u)
t.z=h
u=h.d
s=(u?"uniform mat4 viewObjMat;\nuniform mat4 projViewObjMat;\nuniform mat4 txtCubeMat;\n":"uniform mat4 viewObjMat;\nuniform mat4 projViewObjMat;\n")+"\nattribute vec3 posAttr;\nattribute vec3 normAttr;\n"
r=h.b
if(r)s+="attribute vec3 binmAttr;\n"
s=(u?s+"attribute vec3 txtCubeAttr;\n":s)+"\nvarying vec3 normalVec;\n"
if(r)s+="varying vec3 binormalVec;\n"
s=(u?s+i:s)+"\nvoid main()\n{\n   normalVec = normalize(viewObjMat*vec4(normAttr, 0.0)).xyz;\n"
if(r)s+="   binormalVec = normalize(viewObjMat*vec4(binmAttr, 0.0)).xyz;\n"
s=(u?s+"   txtCube = (txtCubeMat*vec4(txtCubeAttr, 1.0)).xyz;\n":s)+"   gl_Position = projViewObjMat*vec4(posAttr, 1.0);\n}\n"
r=r?"precision mediump float;\n\nvarying vec3 normalVec;\nvarying vec3 binormalVec;\n":"precision mediump float;\n\nvarying vec3 normalVec;\n"
r=(u?r+i:r)+"\n"
if(h.a.c)r+="uniform samplerCube bumpTxt;\n"
r+="\nvec3 normal()\n{\n"
h=h.a
q=h.a
if(!q)p=h.c
else p=!0
if(!p||q)r+="   return normalize(normalVec);\n"
else r+="   vec3 color = textureCube(bumpTxt, txtCube).rgb;\n   vec3 n = normalize(normalVec);\n   vec3 b = normalize(binormalVec);\n   vec3 c = normalize(cross(b, n));\n   b = cross(n, c);\n   mat3 mat = mat3( b.x,  b.y,  b.z,\n                   -c.x, -c.y, -c.z,\n                    n.x,  n.y,  n.z);\n   return mat * normalize(2.0*color - 1.0);\n"
r+="}\n\nvoid main()\n{\n   vec3 norm = normal();\n   norm = -norm*0.5 + 0.5;\n   gl_FragColor = vec4(norm.x, 1.0-norm.y, norm.z, 1.0);\n}\n"
t.aX(0,s.charCodeAt(0)==0?s:s,r.charCodeAt(0)==0?r:r)
t.Q=t.x.h(0,"posAttr")
t.cx=t.x.h(0,"normAttr")
t.ch=t.x.h(0,"binmAttr")
t.cy=t.x.h(0,"txt2DAttr")
t.db=t.x.h(0,"txtCubeAttr")
t.dx=H.h(t.y.v(0,"viewObjMat"),"$iJ")
t.dy=H.h(t.y.v(0,"projViewObjMat"),"$iJ")
if(u)t.fx=H.h(t.y.v(0,"txtCubeMat"),"$iJ")
if(h.c)t.go=H.h(t.y.v(0,"bumpTxt"),"$iP")
a.aO(t)}h=j.a=t
b.e=null}o=h.z
n=o.f
h=b.e
if(!(h instanceof Z.ar))h=b.e=null
if(h==null||!h.d.n(0,n)){b.d.ai()
h=o.b
if(h)b.d.aE()
u=o.d
if(u)b.d.bb()
m=b.d.aP(new Z.b4(a.a),n)
m.a3($.S()).e=j.a.Q.c
m.a3($.af()).e=j.a.cx.c
if(h)m.a3($.ae()).e=j.a.ch.c
if(u)m.a3($.ag()).e=j.a.db.c
b.e=m}l=H.c([],[T.aY])
j.a.H(a)
h=j.a
u=a.gdl()
h=h.dx
h.toString
h.Y(u.S(0,!0))
u=j.a
h=a.gbY()
u=u.dy
u.toString
u.Y(h.S(0,!0))
if(o.d){h=j.a
u=j.c
h=h.fx
h.toString
h.Y(u.S(0,!0))}if(o.a.c){j.a_(l,j.f)
h=j.a
u=j.f
h=h.go
if(u!=null&&u.d>=6)h.c5(u)}for(k=0;k<l.length;++k)l[k].H(a)
h=b.e
h.H(a)
h.a4(a)
h.a2(a)
for(h=a.a,k=0;k<l.length;++k){u=l[k]
if(u.c){u.c=!1
h.activeTexture(33984+u.a)
h.bindTexture(34067,null)}}u=j.a
u.toString
h.useProgram(null)
u.x.aT()},
i:function(a){var u=this.a
if(u!=null)return u.b
else return A.jG(this.d).e}}
O.cU.prototype={
gl:function(){var u=this.e
return u==null?this.e=D.z():u},
F:function(a){var u=this.e
if(u!=null)u.w(a)},
V:function(){return this.F(null)},
a6:function(a,b){},
b1:function(a,b){var u,t,s,r,q,p,o=this,n="Skybox"
if(o.a==null){u=a.fr.h(0,n)
if(u==null){t=a.a
u=new A.h6(t,n)
u.aK(t,n)
u.aX(0,"uniform mat4 viewMat;                             \nuniform float fov;                                \nuniform float ratio;                              \n                                                  \nattribute vec3 posAttr;                           \n                                                  \nvarying vec3 cubeTxt;                             \n                                                  \nvoid main()                                       \n{                                                 \n  float t = 1.0 / (tan(fov * 0.5)*3.0);           \n  float x = -t * posAttr.x / ratio;               \n  float y = t * posAttr.y;                        \n  cubeTxt = (viewMat * vec4(x, y, 1.0, 0.0)).xyz; \n  gl_Position = vec4(posAttr, 1.0);               \n}                                                 \n","precision mediump float;                                              \n                                                                      \nuniform samplerCube boxTxt;                                           \nuniform vec3 boxClr;                                                  \n                                                                      \nvarying vec3 cubeTxt;                                                 \n                                                                      \nvoid main()                                                           \n{                                                                     \n   vec3 txtCube = normalize(cubeTxt);                                 \n   gl_FragColor = vec4(boxClr*textureCube(boxTxt, txtCube).xyz, 1.0); \n}                                                                     \n")
u.z=u.x.h(0,"posAttr")
u.Q=H.h(u.y.h(0,"fov"),"$iL")
u.ch=H.h(u.y.h(0,"ratio"),"$iL")
u.cx=H.h(u.y.h(0,"boxClr"),"$iB")
u.cy=H.h(u.y.h(0,"boxTxt"),"$iP")
u.db=H.h(u.y.h(0,"viewMat"),"$iJ")
a.aO(u)}o.a=u}if(b.e==null){t=b.d.aP(new Z.b4(a.a),$.S())
t.a3($.S()).e=o.a.z.c
b.e=t}t=o.c
if(t!=null){t.a=1
t.H(a)}t=a.d
s=a.c
r=o.a
r.H(a)
q=o.b
p=r.Q
p.a.uniform1f(p.d,q)
q=r.ch
q.a.uniform1f(q.d,t/s)
s=o.c
r.cy.c5(s)
s=o.d
t=r.cx
t.a.uniform3f(t.d,s.a,s.b,s.c)
s=a.db
s=s.ga0(s).bQ(0)
r=r.db
r.toString
r.Y(s.S(0,!0))
t=b.e
if(t instanceof Z.ar){t.H(a)
t.a4(a)
t.a2(a)}else b.e=null
t=o.a
t.toString
a.a.useProgram(null)
t.x.aT()
t=o.c
if(t!=null)t.a2(a)}}
O.d_.prototype={}
O.d0.prototype={
gl:function(){var u=this.e
return u==null?this.e=D.z():u},
F:function(a){var u=this.e
if(u!=null)u.w(a)},
V:function(){return this.F(null)},
ex:function(a,b){var u,t,s,r,q,p,o
for(u=b.length,t=this.ga9(),s=[{func:1,ret:-1,args:[D.N]}],r=0;r<b.length;b.length===u||(0,H.n)(b),++r){q=b[r]
if(q!=null){p=q.f
if(p==null){p=new D.aG()
p.d=0
q.f=p}o=p.a;(o==null?p.a=H.c([],s):o).push(t)}}this.V()},
ez:function(a,b){var u,t
for(u=b.gR(b),t=this.ga9();u.A();)u.gJ(u).gl().E(0,t)
this.V()},
scI:function(a){var u=this.f
if(u!==a){this.f=a
u=new D.q("blend",u,a)
u.b=!0
this.F(u)}},
a6:function(a,b){},
e0:function(a){a=C.c.a5(a+3,4)*4
if(a<=0)return 4
return a},
b1:function(a,b){var u,t,s,r,q,p,o,n,m,l,k,j=this,i=j.e0(j.c.a.length)
if(i!==j.d||j.f!=j.r){j.d=i
j.r=j.f
j.b=null}u=j.b
if(u==null){u=j.f
t="TextureLayout_"+i+"_"+C.c.i(u.a)
s=a.fr.h(0,t)
if(s==null){s=A.ld(i,u,a.a)
a.aO(s)}j.b=s
u=s}if(b.e==null){u=b.d.aP(new Z.b4(a.a),$.S())
t=u.a3($.S())
r=j.b
t.e=r.z.c
b.e=u
u=r}u.H(a)
q=H.c([],[T.aY])
for(p=0,o=0;u=j.c.a,o<u.length;++o){n=u[o]
if(n!=null&&n.a!=null){u=n.a
if(u!=null)if(!C.a.ab(q,u)){u.a=q.length
q.push(u)}u=j.b
t=n.a
u=u.cx
if(p>=u.length)return H.b(u,p)
u=u[p]
r=t==null||!t.d
m=u.a
u=u.d
if(r)m.uniform1i(u,0)
else m.uniform1i(u,t.a)
u=j.b
t=n.b
u=u.cy
if(p>=u.length)return H.b(u,p)
u=u[p]
if(t==null){t=$.fp
if(t==null){t=new V.al(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1)
$.fp=t}}l=new Float32Array(H.br(t.S(0,!0)))
u.a.uniformMatrix4fv(u.d,!1,l)
u=j.b
k=n.c
u.toString
if(k==null){t=$.bV
if(t==null){t=V.bU(0,0,1,1)
$.bV=t
k=t}else k=t}t=u.db
if(p>=t.length)return H.b(t,p)
t=t[p]
t.a.uniform2f(t.d,k.a,k.b)
u=u.dx
if(p>=u.length)return H.b(u,p)
u=u[p]
u.a.uniform2f(u.d,k.c,k.d)
u=j.b
k=n.d
u.toString
if(k==null){t=$.bV
if(t==null){t=V.bU(0,0,1,1)
$.bV=t
k=t}else k=t}t=u.dy
if(p>=t.length)return H.b(t,p)
t=t[p]
t.a.uniform2f(t.d,k.a,k.b)
u=u.fr
if(p>=u.length)return H.b(u,p)
u=u[p]
u.a.uniform2f(u.d,k.c,k.d)
u=j.b
t=n.e
u=u.fx
if(p>=u.length)return H.b(u,p)
u=u[p]
t=t?1:0
u.a.uniform1i(u.d,t);++p}}u=j.b.Q
u.a.uniform1i(u.d,p)
u=j.b
t=j.a
u.ch.ds(t)
for(o=0;o<q.length;++o)q[o].H(a)
u=b.e
if(u instanceof Z.ar){u.H(a)
u.a4(a)
u.a2(a)}else b.e=null
u=j.b
u.toString
t=a.a
t.useProgram(null)
u.x.aT()
for(o=0;o<q.length;++o){u=q[o]
if(u.c){u.c=!1
t.activeTexture(33984+u.a)
t.bindTexture(3553,null)}}}}
O.aZ.prototype={
F:function(a){var u=this.f
if(u!=null)u.w(a)},
V:function(){return this.F(null)}}
T.aY.prototype={}
T.hl.prototype={}
T.hm.prototype={
gl:function(){var u=this.y
return u==null?this.y=D.z():u},
H:function(a){var u,t=this
if(!t.c&&t.d){t.c=!0
u=a.a
u.activeTexture(33984+t.a)
u.bindTexture(3553,t.b)}}}
T.hn.prototype={
gl:function(){var u=this.e
return u==null?this.e=D.z():u},
H:function(a){var u,t=this
if(!t.c&&t.d>=6){t.c=!0
u=a.a
u.activeTexture(33984+t.a)
u.bindTexture(34067,t.b)}},
a2:function(a){var u
if(this.c){this.c=!1
u=a.a
u.activeTexture(33984+this.a)
u.bindTexture(34067,null)}}}
T.hp.prototype={
d6:function(a,b){var u,t=this,s=34067,r=a+"/posx"+b,q=a+"/posy"+b,p=a+"/posz"+b,o=a+"/negx"+b,n=a+"/negy"+b,m=a+"/negz"+b,l=t.a,k=l.createTexture()
l.bindTexture(s,k)
l.texParameteri(s,10242,10497)
l.texParameteri(s,10243,10497)
l.texParameteri(s,10241,9729)
l.texParameteri(s,10240,9729)
l.bindTexture(s,null)
u=new T.hn()
u.a=0
u.b=k
u.c=!1
u.d=0
t.aC(u,k,r,34069,!1,!1)
t.aC(u,k,o,34070,!1,!1)
t.aC(u,k,q,34071,!1,!1)
t.aC(u,k,n,34072,!1,!1)
t.aC(u,k,p,34073,!1,!1)
t.aC(u,k,m,34074,!1,!1)
return u},
fU:function(a){return this.d6(a,".png")},
aC:function(a,b,c,d,e,f){var u=document.createElement("img")
u.src=c;++this.d
W.R(u,"load",new T.hq(this,u,!1,b,!1,d,a),!1)},
fd:function(a,b,c){var u,t,s,r
b=V.cd(b)
u=V.cd(a.width)
t=V.cd(a.height)
u=Math.min(u,b)
t=Math.min(t,b)
if(a.width===u&&a.height===t)return a
else{s=W.iT()
s.width=u
s.height=t
r=C.f.dn(s,"2d")
r.imageSmoothingEnabled=!1
r.drawImage(a,0,0,s.width,s.height)
return P.m0(r.getImageData(0,0,s.width,s.height))}}}
T.hq.prototype={
$1:function(a){var u=this,t=u.a,s=t.fd(u.b,t.c,u.c),r=t.a
r.bindTexture(34067,u.d)
r.pixelStorei(37440,u.e?1:0)
C.q.hh(r,u.f,0,6408,6408,5121,s)
r.bindTexture(34067,null)
r=u.r
if(++r.d>=6){r=r.e
if(r!=null)r.bG()}++t.e}}
X.ei.prototype={
gl:function(){var u=this.fr
return u==null?this.fr=D.z():u},
Z:function(a){var u=this.fr
if(u!=null)u.w(a)},
sag:function(a,b){var u,t=this
if(b<1)b=1
u=t.a
if(u!==b){t.y=null
t.c=t.a=b
u=new D.q("width",u,b)
u.b=!0
t.Z(u)}},
sac:function(a,b){var u,t=this
if(b<1)b=1
u=t.b
if(u!==b){t.y=null
t.d=t.b=b
u=new D.q("height",u,b)
u.b=!0
t.Z(u)}},
H:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i,h=this,g=null,f=3553,e=36161,d=36160
if(h.f){u=a.a
t=u.drawingBufferWidth
s=h.r
if(typeof t!=="number")return t.u()
h.sag(0,C.c.W(t*s))
u=u.drawingBufferHeight
s=h.x
if(typeof u!=="number")return u.u()
h.sac(0,C.c.W(u*s))}if(h.y==null){u=a.a
t=h.ch
s=h.a
r=h.b
q=u.getParameter(3379)
p=V.cd(s)
o=V.cd(r)
q=V.cd(q)
p=Math.min(p,q)
o=Math.min(o,q)
n=u.createTexture()
u.bindTexture(f,n)
u.texParameteri(f,10242,33071)
u.texParameteri(f,10243,33071)
u.texParameteri(f,10241,9729)
u.texParameteri(f,10240,9729)
C.q.dj(u,f,0,6408,p,o,0,6408,5121,g)
u.bindTexture(f,g)
m=T.jR(n)
m.e=s
m.f=r
m.r=p
m.x=o
if(!m.d){m.d=!0
s=m.y
if(s!=null)s.bG()}t.b=m.b
t.c=m.c
t.d=m.d
t.e=m.e
t.f=m.f
t.r=m.r
t.x=m.x
t=t.y
if(t!=null)t.bG()
t=h.ch
s=t.b
h.z=s
h.c=t.r
h.d=t.x
u.bindTexture(f,s)
t=u.createRenderbuffer()
h.Q=t
u.bindRenderbuffer(e,t)
u.renderbufferStorage(e,33189,h.c,h.d)
t=u.createFramebuffer()
h.y=t
u.bindFramebuffer(d,t)
u.framebufferTexture2D(d,36064,f,h.z,0)
u.framebufferRenderbuffer(d,36096,e,h.Q)
u.bindTexture(f,g)
u.bindRenderbuffer(e,g)
u.bindFramebuffer(d,g)}u=a.a
u.bindFramebuffer(d,h.y)
u.enable(2884)
u.enable(2929)
u.depthFunc(513)
t=h.dy
s=t.c
a.c=C.b.W(s*h.a)
r=t.d
a.d=C.b.W(r*h.b)
l=t.a
k=h.c
j=C.b.W(l*k)
t=t.b
l=h.d
u.viewport(j,C.b.W(t*l),C.b.W(s*k),C.b.W(r*l))
u.clearDepth(h.db)
if(h.cy){t=h.cx
u.clearColor(t.a,t.b,t.c,t.d)
i=16640}else i=256
if(i>0)u.clear(i)},
a2:function(a){a.a.bindFramebuffer(36160,null)}}
X.iS.prototype={}
X.eT.prototype={
gl:function(){var u=this.x
return u==null?this.x=D.z():u},
H:function(a){var u,t,s,r,q,p,o,n=this,m=a.a
m.bindFramebuffer(36160,null)
m.enable(2884)
m.enable(2929)
m.depthFunc(513)
u=m.drawingBufferWidth
t=m.drawingBufferHeight
s=n.r
r=s.a
if(typeof u!=="number")return H.t(u)
q=C.b.W(r*u)
r=s.b
if(typeof t!=="number")return H.t(t)
p=C.b.W(r*t)
r=C.b.W(s.c*u)
a.c=r
s=C.b.W(s.d*t)
a.d=s
m.viewport(q,p,r,s)
m.clearDepth(n.c)
if(n.b){s=n.a
m.clearColor(s.a,s.b,s.c,s.d)
o=16640}else o=256
m.clear(o)},
a2:function(a){}}
X.eV.prototype={
gl:function(){var u=this.b
return u==null?this.b=D.z():u},
H:function(a){var u
a.cy.bf(V.am())
u=V.am()
a.db.bf(u)},
a2:function(a){a.cy.aw()
a.db.aw()}}
X.cO.prototype={
gl:function(){var u=this.f
return u==null?this.f=D.z():u},
Z:function(a){var u=this.f
if(u!=null)u.w(a)},
dN:function(){return this.Z(null)},
saZ:function(a){var u,t,s=this
if(!J.w(s.b,a)){u=s.b
if(u!=null)u.gl().E(0,s.gce())
t=s.b
s.b=a
if(a!=null)a.gl().k(0,s.gce())
u=new D.q("mover",t,s.b)
u.b=!0
s.Z(u)}},
H:function(a){var u,t,s=this,r=a.c,q=a.d,p=s.c,o=s.d,n=s.e,m=n-o,l=1/Math.tan(p*0.5),k=V.av(-l/(r/q),0,0,0,0,l,0,0,0,0,n/m,-n*o/m,0,0,1,0)
a.cy.bf(k)
r=$.jJ
if(r==null){r=V.jL()
q=V.j9()
p=$.k0
r=V.jD(r,q,p==null?$.k0=new V.v(0,0,-1):p)
$.jJ=r
u=r}else u=r
r=s.b
if(r!=null){t=r.aH(0,a,s)
if(t!=null)u=t.u(0,u)}a.db.bf(u)},
a2:function(a){a.cy.aw()
a.db.aw()}}
X.hh.prototype={}
V.iK.prototype={
$1:function(a){var u=C.b.dk(this.a.gfP(),2)
if(u!=="0.00")P.jk(u+" fps")}}
V.h2.prototype={
dF:function(a,b){var u,t,s,r,q=document,p=q.body,o=q.createElement("div")
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
W.R(q,"scroll",new V.h4(o),!1)},
cG:function(a){var u,t,s,r,q,p,o,n,m,l,k
this.fg()
u=document
t=u.createElement("div")
t.className="textPar"
for(s=this.b.hm(C.a.fS(a)),r=s.length,q=0;q<s.length;s.length===r||(0,H.n)(s),++q){p=s[q]
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
if(H.ml(n,"|",0)){m=n.split("|")
l=u.createElement("a")
l.className="linkPar"
if(1>=m.length)return H.b(m,1)
l.href=m[1]
l.textContent=m[0]
t.appendChild(l)}else{k=P.lq(C.I,n,C.o,!1)
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
fg:function(){var u,t,s,r,q="Start",p="Bold",o="Italic",n="ItalicEnd",m="Code",l="LinkHead",k="LinkTail",j="LinkEnd",i="Other"
if(this.b!=null)return
u=new R.ht()
t=P.r
u.a=new H.I([t,R.cY])
u.b=new H.I([t,R.d4])
u.c=u.M(0,q)
t=u.M(0,q).q(0,p)
s=T.T(new H.K("*"))
t.a.push(s)
t.c=!0
t=u.M(0,p).q(0,p)
s=new T.aw()
r=[T.cF]
s.a=H.c([],r)
t.a.push(s)
t=T.T(new H.K("*"))
s.a.push(t)
t=u.M(0,p).q(0,"BoldEnd")
s=T.T(new H.K("*"))
t.a.push(s)
t.c=!0
t=u.M(0,q).q(0,o)
s=T.T(new H.K("_"))
t.a.push(s)
t.c=!0
t=u.M(0,o).q(0,o)
s=new T.aw()
s.a=H.c([],r)
t.a.push(s)
t=T.T(new H.K("_"))
s.a.push(t)
t=u.M(0,o).q(0,n)
s=T.T(new H.K("_"))
t.a.push(s)
t.c=!0
t=u.M(0,q).q(0,m)
s=T.T(new H.K("`"))
t.a.push(s)
t.c=!0
t=u.M(0,m).q(0,m)
s=new T.aw()
s.a=H.c([],r)
t.a.push(s)
t=T.T(new H.K("`"))
s.a.push(t)
t=u.M(0,m).q(0,"CodeEnd")
s=T.T(new H.K("`"))
t.a.push(s)
t.c=!0
t=u.M(0,q).q(0,l)
s=T.T(new H.K("["))
t.a.push(s)
t.c=!0
t=u.M(0,l).q(0,k)
s=T.T(new H.K("|"))
t.a.push(s)
s=u.M(0,l).q(0,j)
t=T.T(new H.K("]"))
s.a.push(t)
s.c=!0
s=u.M(0,l).q(0,l)
t=new T.aw()
t.a=H.c([],r)
s.a.push(t)
s=T.T(new H.K("|]"))
t.a.push(s)
s=u.M(0,k).q(0,j)
t=T.T(new H.K("]"))
s.a.push(t)
s.c=!0
s=u.M(0,k).q(0,k)
t=new T.aw()
t.a=H.c([],r)
s.a.push(t)
s=T.T(new H.K("|]"))
t.a.push(s)
u.M(0,q).q(0,i).a.push(new T.ea())
s=u.M(0,i).q(0,i)
t=new T.aw()
t.a=H.c([],r)
s.a.push(t)
s=T.T(new H.K("*_`["))
t.a.push(s)
s=u.M(0,"BoldEnd")
s.d=s.a.b2(p)
s=u.M(0,n)
s.d=s.a.b2(o)
s=u.M(0,"CodeEnd")
s.d=s.a.b2(m)
s=u.M(0,j)
s.d=s.a.b2("Link")
s=u.M(0,i)
s.d=s.a.b2(i)
this.b=u}}
V.h4.prototype={
$1:function(a){P.jU(C.j,new V.h3(this.a))}}
V.h3.prototype={
$0:function(){var u=C.b.W(document.documentElement.scrollTop),t=this.a.style,s=H.e(-0.01*u)+"px"
t.top=s}};(function aliases(){var u=J.a.prototype
u.dz=u.i
u=J.cy.prototype
u.dA=u.i
u=T.cu.prototype
u.dw=u.aG
u.c8=u.i
u=O.cH.prototype
u.c9=u.ar
u=O.ak.prototype
u.ca=u.ar})();(function installTearOffs(){var u=hunkHelpers._static_1,t=hunkHelpers._static_0,s=hunkHelpers.installInstanceTearOff,r=hunkHelpers._instance_2u,q=hunkHelpers._instance_0u,p=hunkHelpers._instance_1u,o=hunkHelpers._instance_0i
u(P,"lV","lj",6)
u(P,"lW","lk",6)
u(P,"lX","ll",6)
t(P,"k9","lT",9)
var n
s(n=E.at.prototype,"gdf",0,0,null,["$1","$0"],["dg","h1"],0,0)
s(n,"gdd",0,0,null,["$1","$0"],["de","h0"],0,0)
s(n,"gda",0,0,null,["$1","$0"],["dc","fY"],0,0)
r(n,"gfW","fX",3)
r(n,"gfZ","h_",3)
s(n=E.d1.prototype,"gcb",0,0,null,["$1","$0"],["cd","cc"],0,0)
q(n,"ghd","di",9)
p(n=X.d9.prototype,"geA","eB",4)
p(n,"gej","ek",4)
p(n,"gep","eq",2)
p(n,"geE","eF",10)
p(n,"geC","eD",10)
p(n,"geI","eJ",2)
p(n,"geM","eN",2)
p(n,"geu","ev",2)
p(n,"geK","eL",2)
p(n,"ger","es",2)
p(n,"geO","eP",18)
p(n,"geQ","eR",4)
p(n,"gf5","f6",5)
p(n,"gf1","f2",5)
p(n,"gf3","f4",5)
s(D.be.prototype,"gdH",0,0,null,["$1","$0"],["ap","dI"],0,0)
s(n=D.cA.prototype,"gcq",0,0,null,["$1","$0"],["cr","eG"],0,0)
p(n,"geS","eT",19)
r(n,"ged","ee",11)
r(n,"geW","eX",11)
o(V.H.prototype,"gj","bS",12)
o(V.v.prototype,"gj","bS",12)
s(n=U.bG.prototype,"gb5",0,0,null,["$1","$0"],["P","aj"],0,0)
r(n,"gdJ","dK",13)
r(n,"geU","eV",13)
s(n=U.da.prototype,"gb5",0,0,null,["$1","$0"],["P","aj"],0,0)
p(n,"ge5","e6",1)
p(n,"ge7","e8",1)
p(n,"ge9","ea",1)
p(n,"ge1","e2",1)
p(n,"ge3","e4",1)
p(n,"gfn","fo",1)
p(n,"gfl","fm",1)
p(n,"gfj","fk",1)
p(U.db.prototype,"geb","ec",1)
s(n=M.ck.prototype,"gT",0,0,null,["$1","$0"],["U","aL"],0,0)
r(n,"geY","eZ",14)
r(n,"gf_","f0",14)
s(M.cm.prototype,"gT",0,0,null,["$1","$0"],["U","aL"],0,0)
s(n=M.cr.prototype,"gT",0,0,null,["$1","$0"],["U","aL"],0,0)
r(n,"gel","em",3)
r(n,"gen","eo",3)
s(n=O.cG.prototype,"ga9",0,0,null,["$1","$0"],["F","V"],0,0)
s(n,"gfb",0,0,null,["$1","$0"],["ct","fc"],0,0)
r(n,"gef","eg",15)
r(n,"geh","ei",15)
s(O.cM.prototype,"ga9",0,0,null,["$1","$0"],["F","V"],0,0)
s(O.cU.prototype,"ga9",0,0,null,["$1","$0"],["F","V"],0,0)
s(n=O.d0.prototype,"ga9",0,0,null,["$1","$0"],["F","V"],0,0)
r(n,"gew","ex",16)
r(n,"gey","ez",16)
s(O.aZ.prototype,"ga9",0,0,null,["$1","$0"],["F","V"],0,0)
s(X.cO.prototype,"gce",0,0,null,["$1","$0"],["Z","dN"],0,0)})();(function inheritance(){var u=hunkHelpers.mixin,t=hunkHelpers.inherit,s=hunkHelpers.inheritMany
t(P.Z,null)
s(P.Z,[H.j2,J.a,J.W,P.du,P.j,H.cC,P.eX,H.cs,H.hJ,H.hy,P.bf,H.bC,H.dL,P.au,H.f3,H.f4,H.eZ,P.dR,P.dd,P.cZ,P.hf,P.d2,P.iv,P.ip,P.ij,P.dt,P.o,P.en,P.iu,P.b9,P.a5,P.a9,P.aF,P.fJ,P.cX,P.dl,P.eS,P.bk,P.cE,P.aR,P.r,P.aW,W.eu,W.D,W.ct,P.dW,P.ik,T.ea,T.cu,T.cF,T.fY,R.cY,R.d3,R.d4,R.ht,O.as,O.bM,E.ej,E.at,E.fQ,E.d1,Z.dc,Z.b4,Z.ar,Z.bg,Z.a2,D.em,D.aG,D.N,X.cj,X.cz,X.f0,X.f7,X.aa,X.fw,X.hu,X.d9,D.be,D.a1,D.fM,D.h9,V.M,V.X,V.eI,V.bL,V.al,V.V,V.O,V.ay,V.cR,V.H,V.v,U.da,U.db,M.cm,M.cr,M.ab,A.cg,A.ed,A.Q,A.co,A.cP,A.cW,A.ff,A.bW,A.bX,A.bY,A.fF,A.bd,A.d7,A.hF,F.aH,F.eL,F.bK,F.f2,F.bQ,F.fZ,F.h_,F.h0,F.h1,F.b3,F.hS,F.hT,F.hW,F.hY,F.hZ,F.i_,O.d_,O.cH,O.fg,O.aZ,T.hp,X.hh,X.iS,X.eV,X.cO,V.h2])
s(J.a,[J.eY,J.cx,J.cy,J.aN,J.bJ,J.bh,H.bP,W.d,W.e9,W.ch,W.aj,W.C,W.df,W.a4,W.ey,W.eB,W.dh,W.cq,W.dj,W.eD,W.i,W.dm,W.aJ,W.eU,W.dp,W.aK,W.f6,W.fq,W.dv,W.dw,W.aP,W.dx,W.dA,W.aS,W.dE,W.dG,W.aU,W.dH,W.aV,W.dM,W.az,W.dP,W.hs,W.b_,W.dS,W.hw,W.hL,W.dX,W.dZ,W.e0,W.e2,W.e4,P.bj,P.dr,P.bl,P.dC,P.fO,P.dN,P.bp,P.dU,P.ee,P.de,P.cS,P.dJ])
s(J.cy,[J.fK,J.bZ,J.aO])
t(J.j1,J.aN)
s(J.bJ,[J.cw,J.cv])
t(P.f5,P.du)
s(P.f5,[H.d8,W.ia,W.i9,P.eO])
t(H.K,H.d8)
s(P.j,[H.eG,H.fa,H.i3])
s(P.eX,[H.fb,H.i4])
s(P.bf,[H.fG,H.f_,H.hI,H.el,H.fW,P.cN,P.ah,P.hK,P.hH,P.hb,P.er,P.ex])
s(H.bC,[H.iP,H.hi,H.iF,H.iG,H.iH,P.i6,P.i5,P.i7,P.i8,P.it,P.is,P.iA,P.im,P.io,P.f9,P.eE,P.eF,W.fs,W.fu,W.fV,W.he,W.id,P.iB,P.eP,P.eQ,P.eg,E.fR,E.fS,E.fT,E.hr,D.eJ,D.eK,F.iw,F.iN,F.iC,F.i1,F.i0,F.hU,F.hV,O.fj,O.fk,O.fl,O.fm,O.fn,O.fo,T.hq,V.iK,V.h4,V.h3])
s(H.hi,[H.hc,H.bA])
t(P.f8,P.au)
t(H.I,P.f8)
t(H.cB,H.eG)
t(H.cI,H.bP)
s(H.cI,[H.c1,H.c3])
t(H.c2,H.c1)
t(H.bO,H.c2)
t(H.c4,H.c3)
t(H.cJ,H.c4)
s(H.cJ,[H.fx,H.fy,H.fz,H.fA,H.fB,H.cK,H.fC])
t(P.il,P.iv)
t(P.ii,P.ip)
t(P.es,P.hf)
t(P.eH,P.en)
t(P.hM,P.eH)
t(P.hN,P.es)
s(P.a9,[P.G,P.x])
s(P.ah,[P.bn,P.eW])
s(W.d,[W.F,W.eN,W.aT,W.c5,W.aX,W.aA,W.c7,W.i2,W.c0,P.eh,P.bb])
s(W.F,[W.Y,W.aE])
s(W.Y,[W.l,P.k])
s(W.l,[W.eb,W.ec,W.bc,W.eR,W.bI,W.fX])
t(W.et,W.aj)
t(W.bE,W.df)
s(W.a4,[W.ev,W.ew])
t(W.di,W.dh)
t(W.cp,W.di)
t(W.dk,W.dj)
t(W.eC,W.dk)
t(W.aI,W.ch)
t(W.dn,W.dm)
t(W.eM,W.dn)
t(W.dq,W.dp)
t(W.bH,W.dq)
t(W.b0,W.i)
s(W.b0,[W.bi,W.an,W.bo])
t(W.fr,W.dv)
t(W.ft,W.dw)
t(W.dy,W.dx)
t(W.fv,W.dy)
t(W.dB,W.dA)
t(W.cL,W.dB)
t(W.dF,W.dE)
t(W.fL,W.dF)
t(W.fU,W.dG)
t(W.c6,W.c5)
t(W.h7,W.c6)
t(W.dI,W.dH)
t(W.h8,W.dI)
t(W.hd,W.dM)
t(W.dQ,W.dP)
t(W.hj,W.dQ)
t(W.c8,W.c7)
t(W.hk,W.c8)
t(W.dT,W.dS)
t(W.hv,W.dT)
t(W.b5,W.an)
t(W.dY,W.dX)
t(W.ib,W.dY)
t(W.dg,W.cq)
t(W.e_,W.dZ)
t(W.ie,W.e_)
t(W.e1,W.e0)
t(W.dz,W.e1)
t(W.e3,W.e2)
t(W.iq,W.e3)
t(W.e5,W.e4)
t(W.ir,W.e5)
t(W.ic,P.cZ)
t(P.a7,P.ik)
t(P.ds,P.dr)
t(P.f1,P.ds)
t(P.dD,P.dC)
t(P.fH,P.dD)
t(P.dO,P.dN)
t(P.hg,P.dO)
t(P.dV,P.dU)
t(P.hx,P.dV)
t(P.ef,P.de)
t(P.fI,P.bb)
t(P.dK,P.dJ)
t(P.ha,P.dK)
s(T.cu,[T.aw,R.d6])
s(E.ej,[Z.ci,A.cT,T.aY])
s(D.N,[D.aL,D.aM,D.q,X.fN])
s(X.fN,[X.cD,X.aQ,X.bN,X.d5])
s(O.as,[D.cA,U.bG,M.ck])
s(D.em,[U.eq,U.a6])
t(U.cl,U.a6)
s(A.cT,[A.eA,A.fc,A.fD,A.h6,A.ho])
s(A.d7,[A.b1,A.hC,A.hD,A.hE,A.hB,A.L,A.aB,A.B,A.bq,A.hG,A.b2,A.J,A.ac,A.P])
t(F.h5,F.eL)
t(F.hA,F.f2)
t(F.hX,F.hY)
t(F.fE,F.hZ)
s(O.d_,[O.ez,O.cG,O.cM,O.cU,O.d0])
s(O.cH,[O.fd,O.fe,O.ak])
s(O.ak,[O.fh,O.fi])
s(T.aY,[T.hl,T.hn])
t(T.hm,T.hl)
s(X.hh,[X.ei,X.eT])
u(H.d8,H.hJ)
u(H.c1,P.o)
u(H.c2,H.cs)
u(H.c3,P.o)
u(H.c4,H.cs)
u(P.du,P.o)
u(W.df,W.eu)
u(W.dh,P.o)
u(W.di,W.D)
u(W.dj,P.o)
u(W.dk,W.D)
u(W.dm,P.o)
u(W.dn,W.D)
u(W.dp,P.o)
u(W.dq,W.D)
u(W.dv,P.au)
u(W.dw,P.au)
u(W.dx,P.o)
u(W.dy,W.D)
u(W.dA,P.o)
u(W.dB,W.D)
u(W.dE,P.o)
u(W.dF,W.D)
u(W.dG,P.au)
u(W.c5,P.o)
u(W.c6,W.D)
u(W.dH,P.o)
u(W.dI,W.D)
u(W.dM,P.au)
u(W.dP,P.o)
u(W.dQ,W.D)
u(W.c7,P.o)
u(W.c8,W.D)
u(W.dS,P.o)
u(W.dT,W.D)
u(W.dX,P.o)
u(W.dY,W.D)
u(W.dZ,P.o)
u(W.e_,W.D)
u(W.e0,P.o)
u(W.e1,W.D)
u(W.e2,P.o)
u(W.e3,W.D)
u(W.e4,P.o)
u(W.e5,W.D)
u(P.dr,P.o)
u(P.ds,W.D)
u(P.dC,P.o)
u(P.dD,W.D)
u(P.dN,P.o)
u(P.dO,W.D)
u(P.dU,P.o)
u(P.dV,W.D)
u(P.de,P.au)
u(P.dJ,P.o)
u(P.dK,W.D)})()
var v={mangledGlobalNames:{x:"int",G:"double",a9:"num",r:"String",b9:"bool",aR:"Null",bk:"List"},mangledNames:{},getTypeFromName:getGlobalFromName,metadata:[],types:[{func:1,ret:-1,opt:[D.N]},{func:1,ret:-1,args:[D.N]},{func:1,ret:-1,args:[W.an]},{func:1,ret:-1,args:[P.x,[P.j,E.at]]},{func:1,ret:-1,args:[W.i]},{func:1,ret:-1,args:[W.bo]},{func:1,ret:-1,args:[{func:1,ret:-1}]},{func:1,args:[,]},{func:1,ret:P.aR,args:[,,]},{func:1,ret:-1},{func:1,ret:-1,args:[W.bi]},{func:1,ret:-1,args:[P.x,[P.j,D.a1]]},{func:1,ret:P.G},{func:1,ret:-1,args:[P.x,[P.j,U.a6]]},{func:1,ret:-1,args:[P.x,[P.j,M.ab]]},{func:1,ret:-1,args:[P.x,[P.j,V.al]]},{func:1,ret:-1,args:[P.x,[P.j,O.aZ]]},{func:1,ret:P.aR,args:[,]},{func:1,ret:-1,args:[W.b5]},{func:1,ret:P.b9,args:[[P.j,D.a1]]}],interceptorsByTag:null,leafTags:null};(function constants(){var u=hunkHelpers.makeConstList
C.f=W.bc.prototype
C.F=J.a.prototype
C.a=J.aN.prototype
C.G=J.cv.prototype
C.c=J.cw.prototype
C.k=J.cx.prototype
C.b=J.bJ.prototype
C.d=J.bh.prototype
C.H=J.aO.prototype
C.p=J.fK.prototype
C.q=P.cS.prototype
C.l=J.bZ.prototype
C.r=W.b5.prototype
C.t=W.c0.prototype
C.m=function getTagFallback(o) {
  var s = Object.prototype.toString.call(o);
  return s.substring(8, s.length - 1);
}
C.u=function() {
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
C.z=function(getTagFallback) {
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
C.v=function(hooks) {
  if (typeof dartExperimentalFixupGetTag != "function") return hooks;
  hooks.getTag = dartExperimentalFixupGetTag(hooks.getTag);
}
C.w=function(hooks) {
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
C.y=function(hooks) {
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
C.x=function(hooks) {
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
C.n=function(hooks) { return hooks; }

C.A=new P.fJ()
C.o=new P.hM()
C.B=new P.hN()
C.e=new P.il()
C.h=new A.bd(0,"ColorBlendType.Overwrite")
C.C=new A.bd(1,"ColorBlendType.Additive")
C.D=new A.bd(2,"ColorBlendType.Average")
C.i=new A.bd(3,"ColorBlendType.AlphaBlend")
C.j=new P.aF(0)
C.E=new P.aF(5e6)
C.I=H.c(u([0,0,65498,45055,65535,34815,65534,18431]),[P.x])})();(function staticFields(){$.ai=0
$.bB=null
$.jr=null
$.kd=null
$.k8=null
$.kg=null
$.iD=null
$.iI=null
$.ji=null
$.bs=null
$.ca=null
$.cb=null
$.jc=!1
$.ad=C.e
$.a0=[]
$.jC=null
$.fp=null
$.jK=null
$.bR=null
$.bV=null
$.k_=null
$.k2=null
$.k1=null
$.hO=null
$.hP=null
$.hQ=null
$.k0=null
$.jJ=null})();(function lazyInitializers(){var u=hunkHelpers.lazy
u($,"mt","km",function(){return H.kb("_$dart_dartClosure")})
u($,"mu","jl",function(){return H.kb("_$dart_js")})
u($,"mv","kn",function(){return H.ap(H.hz({
toString:function(){return"$receiver$"}}))})
u($,"mw","ko",function(){return H.ap(H.hz({$method$:null,
toString:function(){return"$receiver$"}}))})
u($,"mx","kp",function(){return H.ap(H.hz(null))})
u($,"my","kq",function(){return H.ap(function(){var $argumentsExpr$='$arguments$'
try{null.$method$($argumentsExpr$)}catch(t){return t.message}}())})
u($,"mB","kt",function(){return H.ap(H.hz(void 0))})
u($,"mC","ku",function(){return H.ap(function(){var $argumentsExpr$='$arguments$'
try{(void 0).$method$($argumentsExpr$)}catch(t){return t.message}}())})
u($,"mA","ks",function(){return H.ap(H.jW(null))})
u($,"mz","kr",function(){return H.ap(function(){try{null.$method$}catch(t){return t.message}}())})
u($,"mE","kw",function(){return H.ap(H.jW(void 0))})
u($,"mD","kv",function(){return H.ap(function(){try{(void 0).$method$}catch(t){return t.message}}())})
u($,"mR","jm",function(){return P.li()})
u($,"mS","kA",function(){return P.l6("^[\\-\\.0-9A-Z_a-z~]*$")})
u($,"mL","kz",function(){return Z.a8(0)})
u($,"mF","kx",function(){return Z.a8(511)})
u($,"mN","S",function(){return Z.a8(1)})
u($,"mM","af",function(){return Z.a8(2)})
u($,"mH","ae",function(){return Z.a8(4)})
u($,"mO","aq",function(){return Z.a8(8)})
u($,"mP","ag",function(){return Z.a8(16)})
u($,"mI","ce",function(){return Z.a8(32)})
u($,"mJ","cf",function(){return Z.a8(64)})
u($,"mK","ky",function(){return Z.a8(96)})
u($,"mQ","bx",function(){return Z.a8(128)})
u($,"mG","aD",function(){return Z.a8(256)})
u($,"ms","kl",function(){return new V.eI(1e-9)})
u($,"mr","y",function(){return $.kl()})})();(function nativeSupport(){!function(){var u=function(a){var o={}
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
hunkHelpers.setOrUpdateInterceptorsByTag({ArrayBuffer:J.a,AnimationEffectReadOnly:J.a,AnimationEffectTiming:J.a,AnimationEffectTimingReadOnly:J.a,AnimationTimeline:J.a,AnimationWorkletGlobalScope:J.a,AuthenticatorAssertionResponse:J.a,AuthenticatorAttestationResponse:J.a,AuthenticatorResponse:J.a,BackgroundFetchFetch:J.a,BackgroundFetchManager:J.a,BackgroundFetchSettledFetch:J.a,BarProp:J.a,BarcodeDetector:J.a,BluetoothRemoteGATTDescriptor:J.a,Body:J.a,BudgetState:J.a,CacheStorage:J.a,CanvasGradient:J.a,CanvasPattern:J.a,CanvasRenderingContext2D:J.a,Client:J.a,Clients:J.a,CookieStore:J.a,Coordinates:J.a,Credential:J.a,CredentialUserData:J.a,CredentialsContainer:J.a,Crypto:J.a,CryptoKey:J.a,CSS:J.a,CSSVariableReferenceValue:J.a,CustomElementRegistry:J.a,DataTransfer:J.a,DataTransferItem:J.a,DeprecatedStorageInfo:J.a,DeprecatedStorageQuota:J.a,DeprecationReport:J.a,DetectedBarcode:J.a,DetectedFace:J.a,DetectedText:J.a,DeviceAcceleration:J.a,DeviceRotationRate:J.a,DirectoryEntry:J.a,DirectoryReader:J.a,DocumentOrShadowRoot:J.a,DocumentTimeline:J.a,DOMError:J.a,DOMImplementation:J.a,Iterator:J.a,DOMMatrix:J.a,DOMMatrixReadOnly:J.a,DOMParser:J.a,DOMPoint:J.a,DOMPointReadOnly:J.a,DOMQuad:J.a,DOMStringMap:J.a,Entry:J.a,External:J.a,FaceDetector:J.a,FederatedCredential:J.a,FileEntry:J.a,DOMFileSystem:J.a,FontFace:J.a,FontFaceSource:J.a,FormData:J.a,GamepadButton:J.a,GamepadPose:J.a,Geolocation:J.a,Position:J.a,Headers:J.a,HTMLHyperlinkElementUtils:J.a,IdleDeadline:J.a,ImageBitmap:J.a,ImageBitmapRenderingContext:J.a,ImageCapture:J.a,InputDeviceCapabilities:J.a,IntersectionObserver:J.a,IntersectionObserverEntry:J.a,InterventionReport:J.a,KeyframeEffect:J.a,KeyframeEffectReadOnly:J.a,MediaCapabilities:J.a,MediaCapabilitiesInfo:J.a,MediaDeviceInfo:J.a,MediaError:J.a,MediaKeyStatusMap:J.a,MediaKeySystemAccess:J.a,MediaKeys:J.a,MediaKeysPolicy:J.a,MediaMetadata:J.a,MediaSession:J.a,MediaSettingsRange:J.a,MemoryInfo:J.a,MessageChannel:J.a,Metadata:J.a,MutationObserver:J.a,WebKitMutationObserver:J.a,MutationRecord:J.a,NavigationPreloadManager:J.a,Navigator:J.a,NavigatorAutomationInformation:J.a,NavigatorConcurrentHardware:J.a,NavigatorCookies:J.a,NavigatorUserMediaError:J.a,NodeFilter:J.a,NodeIterator:J.a,NonDocumentTypeChildNode:J.a,NonElementParentNode:J.a,NoncedElement:J.a,OffscreenCanvasRenderingContext2D:J.a,OverconstrainedError:J.a,PaintRenderingContext2D:J.a,PaintSize:J.a,PaintWorkletGlobalScope:J.a,PasswordCredential:J.a,Path2D:J.a,PaymentAddress:J.a,PaymentInstruments:J.a,PaymentManager:J.a,PaymentResponse:J.a,PerformanceEntry:J.a,PerformanceLongTaskTiming:J.a,PerformanceMark:J.a,PerformanceMeasure:J.a,PerformanceNavigation:J.a,PerformanceNavigationTiming:J.a,PerformanceObserver:J.a,PerformanceObserverEntryList:J.a,PerformancePaintTiming:J.a,PerformanceResourceTiming:J.a,PerformanceServerTiming:J.a,PerformanceTiming:J.a,Permissions:J.a,PhotoCapabilities:J.a,PositionError:J.a,Presentation:J.a,PresentationReceiver:J.a,PublicKeyCredential:J.a,PushManager:J.a,PushMessageData:J.a,PushSubscription:J.a,PushSubscriptionOptions:J.a,Range:J.a,RelatedApplication:J.a,ReportBody:J.a,ReportingObserver:J.a,ResizeObserver:J.a,ResizeObserverEntry:J.a,RTCCertificate:J.a,RTCIceCandidate:J.a,mozRTCIceCandidate:J.a,RTCLegacyStatsReport:J.a,RTCRtpContributingSource:J.a,RTCRtpReceiver:J.a,RTCRtpSender:J.a,RTCSessionDescription:J.a,mozRTCSessionDescription:J.a,RTCStatsResponse:J.a,Screen:J.a,ScrollState:J.a,ScrollTimeline:J.a,Selection:J.a,SharedArrayBuffer:J.a,SpeechRecognitionAlternative:J.a,SpeechSynthesisVoice:J.a,StaticRange:J.a,StorageManager:J.a,StyleMedia:J.a,StylePropertyMap:J.a,StylePropertyMapReadonly:J.a,SyncManager:J.a,TaskAttributionTiming:J.a,TextDetector:J.a,TextMetrics:J.a,TrackDefault:J.a,TreeWalker:J.a,TrustedHTML:J.a,TrustedScriptURL:J.a,TrustedURL:J.a,UnderlyingSourceBase:J.a,URLSearchParams:J.a,VRCoordinateSystem:J.a,VRDisplayCapabilities:J.a,VREyeParameters:J.a,VRFrameData:J.a,VRFrameOfReference:J.a,VRPose:J.a,VRStageBounds:J.a,VRStageBoundsPoint:J.a,VRStageParameters:J.a,ValidityState:J.a,VideoPlaybackQuality:J.a,VideoTrack:J.a,VTTRegion:J.a,WindowClient:J.a,WorkletAnimation:J.a,WorkletGlobalScope:J.a,XPathEvaluator:J.a,XPathExpression:J.a,XPathNSResolver:J.a,XPathResult:J.a,XMLSerializer:J.a,XSLTProcessor:J.a,Bluetooth:J.a,BluetoothCharacteristicProperties:J.a,BluetoothRemoteGATTServer:J.a,BluetoothRemoteGATTService:J.a,BluetoothUUID:J.a,BudgetService:J.a,Cache:J.a,DOMFileSystemSync:J.a,DirectoryEntrySync:J.a,DirectoryReaderSync:J.a,EntrySync:J.a,FileEntrySync:J.a,FileReaderSync:J.a,FileWriterSync:J.a,HTMLAllCollection:J.a,Mojo:J.a,MojoHandle:J.a,MojoWatcher:J.a,NFC:J.a,PagePopupController:J.a,Report:J.a,Request:J.a,Response:J.a,SubtleCrypto:J.a,USBAlternateInterface:J.a,USBConfiguration:J.a,USBDevice:J.a,USBEndpoint:J.a,USBInTransferResult:J.a,USBInterface:J.a,USBIsochronousInTransferPacket:J.a,USBIsochronousInTransferResult:J.a,USBIsochronousOutTransferPacket:J.a,USBIsochronousOutTransferResult:J.a,USBOutTransferResult:J.a,WorkerLocation:J.a,WorkerNavigator:J.a,Worklet:J.a,IDBCursor:J.a,IDBCursorWithValue:J.a,IDBFactory:J.a,IDBIndex:J.a,IDBKeyRange:J.a,IDBObjectStore:J.a,IDBObservation:J.a,IDBObserver:J.a,IDBObserverChanges:J.a,SVGAngle:J.a,SVGAnimatedAngle:J.a,SVGAnimatedBoolean:J.a,SVGAnimatedEnumeration:J.a,SVGAnimatedInteger:J.a,SVGAnimatedLength:J.a,SVGAnimatedLengthList:J.a,SVGAnimatedNumber:J.a,SVGAnimatedNumberList:J.a,SVGAnimatedPreserveAspectRatio:J.a,SVGAnimatedRect:J.a,SVGAnimatedString:J.a,SVGAnimatedTransformList:J.a,SVGMatrix:J.a,SVGPoint:J.a,SVGPreserveAspectRatio:J.a,SVGRect:J.a,SVGUnitTypes:J.a,AudioListener:J.a,AudioParam:J.a,AudioTrack:J.a,AudioWorkletGlobalScope:J.a,AudioWorkletProcessor:J.a,PeriodicWave:J.a,WebGLActiveInfo:J.a,ANGLEInstancedArrays:J.a,ANGLE_instanced_arrays:J.a,WebGLBuffer:J.a,WebGLCanvas:J.a,WebGLColorBufferFloat:J.a,WebGLCompressedTextureASTC:J.a,WebGLCompressedTextureATC:J.a,WEBGL_compressed_texture_atc:J.a,WebGLCompressedTextureETC1:J.a,WEBGL_compressed_texture_etc1:J.a,WebGLCompressedTextureETC:J.a,WebGLCompressedTexturePVRTC:J.a,WEBGL_compressed_texture_pvrtc:J.a,WebGLCompressedTextureS3TC:J.a,WEBGL_compressed_texture_s3tc:J.a,WebGLCompressedTextureS3TCsRGB:J.a,WebGLDebugRendererInfo:J.a,WEBGL_debug_renderer_info:J.a,WebGLDebugShaders:J.a,WEBGL_debug_shaders:J.a,WebGLDepthTexture:J.a,WEBGL_depth_texture:J.a,WebGLDrawBuffers:J.a,WEBGL_draw_buffers:J.a,EXTsRGB:J.a,EXT_sRGB:J.a,EXTBlendMinMax:J.a,EXT_blend_minmax:J.a,EXTColorBufferFloat:J.a,EXTColorBufferHalfFloat:J.a,EXTDisjointTimerQuery:J.a,EXTDisjointTimerQueryWebGL2:J.a,EXTFragDepth:J.a,EXT_frag_depth:J.a,EXTShaderTextureLOD:J.a,EXT_shader_texture_lod:J.a,EXTTextureFilterAnisotropic:J.a,EXT_texture_filter_anisotropic:J.a,WebGLFramebuffer:J.a,WebGLGetBufferSubDataAsync:J.a,WebGLLoseContext:J.a,WebGLExtensionLoseContext:J.a,WEBGL_lose_context:J.a,OESElementIndexUint:J.a,OES_element_index_uint:J.a,OESStandardDerivatives:J.a,OES_standard_derivatives:J.a,OESTextureFloat:J.a,OES_texture_float:J.a,OESTextureFloatLinear:J.a,OES_texture_float_linear:J.a,OESTextureHalfFloat:J.a,OES_texture_half_float:J.a,OESTextureHalfFloatLinear:J.a,OES_texture_half_float_linear:J.a,OESVertexArrayObject:J.a,OES_vertex_array_object:J.a,WebGLProgram:J.a,WebGLQuery:J.a,WebGLRenderbuffer:J.a,WebGLRenderingContext:J.a,WebGLSampler:J.a,WebGLShader:J.a,WebGLShaderPrecisionFormat:J.a,WebGLSync:J.a,WebGLTexture:J.a,WebGLTimerQueryEXT:J.a,WebGLTransformFeedback:J.a,WebGLUniformLocation:J.a,WebGLVertexArrayObject:J.a,WebGLVertexArrayObjectOES:J.a,WebGL:J.a,WebGL2RenderingContextBase:J.a,Database:J.a,SQLError:J.a,SQLResultSet:J.a,SQLTransaction:J.a,DataView:H.bP,ArrayBufferView:H.bP,Float32Array:H.bO,Float64Array:H.bO,Int16Array:H.fx,Int32Array:H.fy,Int8Array:H.fz,Uint16Array:H.fA,Uint32Array:H.fB,Uint8ClampedArray:H.cK,CanvasPixelArray:H.cK,Uint8Array:H.fC,HTMLAudioElement:W.l,HTMLBRElement:W.l,HTMLBaseElement:W.l,HTMLBodyElement:W.l,HTMLButtonElement:W.l,HTMLContentElement:W.l,HTMLDListElement:W.l,HTMLDataElement:W.l,HTMLDataListElement:W.l,HTMLDetailsElement:W.l,HTMLDialogElement:W.l,HTMLDivElement:W.l,HTMLEmbedElement:W.l,HTMLFieldSetElement:W.l,HTMLHRElement:W.l,HTMLHeadElement:W.l,HTMLHeadingElement:W.l,HTMLHtmlElement:W.l,HTMLIFrameElement:W.l,HTMLInputElement:W.l,HTMLLIElement:W.l,HTMLLabelElement:W.l,HTMLLegendElement:W.l,HTMLLinkElement:W.l,HTMLMapElement:W.l,HTMLMediaElement:W.l,HTMLMenuElement:W.l,HTMLMetaElement:W.l,HTMLMeterElement:W.l,HTMLModElement:W.l,HTMLOListElement:W.l,HTMLObjectElement:W.l,HTMLOptGroupElement:W.l,HTMLOptionElement:W.l,HTMLOutputElement:W.l,HTMLParagraphElement:W.l,HTMLParamElement:W.l,HTMLPictureElement:W.l,HTMLPreElement:W.l,HTMLProgressElement:W.l,HTMLQuoteElement:W.l,HTMLScriptElement:W.l,HTMLShadowElement:W.l,HTMLSlotElement:W.l,HTMLSourceElement:W.l,HTMLSpanElement:W.l,HTMLStyleElement:W.l,HTMLTableCaptionElement:W.l,HTMLTableCellElement:W.l,HTMLTableDataCellElement:W.l,HTMLTableHeaderCellElement:W.l,HTMLTableColElement:W.l,HTMLTableElement:W.l,HTMLTableRowElement:W.l,HTMLTableSectionElement:W.l,HTMLTemplateElement:W.l,HTMLTextAreaElement:W.l,HTMLTimeElement:W.l,HTMLTitleElement:W.l,HTMLTrackElement:W.l,HTMLUListElement:W.l,HTMLUnknownElement:W.l,HTMLVideoElement:W.l,HTMLDirectoryElement:W.l,HTMLFontElement:W.l,HTMLFrameElement:W.l,HTMLFrameSetElement:W.l,HTMLMarqueeElement:W.l,HTMLElement:W.l,AccessibleNodeList:W.e9,HTMLAnchorElement:W.eb,HTMLAreaElement:W.ec,Blob:W.ch,HTMLCanvasElement:W.bc,CDATASection:W.aE,CharacterData:W.aE,Comment:W.aE,ProcessingInstruction:W.aE,Text:W.aE,CSSPerspective:W.et,CSSCharsetRule:W.C,CSSConditionRule:W.C,CSSFontFaceRule:W.C,CSSGroupingRule:W.C,CSSImportRule:W.C,CSSKeyframeRule:W.C,MozCSSKeyframeRule:W.C,WebKitCSSKeyframeRule:W.C,CSSKeyframesRule:W.C,MozCSSKeyframesRule:W.C,WebKitCSSKeyframesRule:W.C,CSSMediaRule:W.C,CSSNamespaceRule:W.C,CSSPageRule:W.C,CSSRule:W.C,CSSStyleRule:W.C,CSSSupportsRule:W.C,CSSViewportRule:W.C,CSSStyleDeclaration:W.bE,MSStyleCSSProperties:W.bE,CSS2Properties:W.bE,CSSImageValue:W.a4,CSSKeywordValue:W.a4,CSSNumericValue:W.a4,CSSPositionValue:W.a4,CSSResourceValue:W.a4,CSSUnitValue:W.a4,CSSURLImageValue:W.a4,CSSStyleValue:W.a4,CSSMatrixComponent:W.aj,CSSRotation:W.aj,CSSScale:W.aj,CSSSkew:W.aj,CSSTranslation:W.aj,CSSTransformComponent:W.aj,CSSTransformValue:W.ev,CSSUnparsedValue:W.ew,DataTransferItemList:W.ey,DOMException:W.eB,ClientRectList:W.cp,DOMRectList:W.cp,DOMRectReadOnly:W.cq,DOMStringList:W.eC,DOMTokenList:W.eD,Element:W.Y,AbortPaymentEvent:W.i,AnimationEvent:W.i,AnimationPlaybackEvent:W.i,ApplicationCacheErrorEvent:W.i,BackgroundFetchClickEvent:W.i,BackgroundFetchEvent:W.i,BackgroundFetchFailEvent:W.i,BackgroundFetchedEvent:W.i,BeforeInstallPromptEvent:W.i,BeforeUnloadEvent:W.i,BlobEvent:W.i,CanMakePaymentEvent:W.i,ClipboardEvent:W.i,CloseEvent:W.i,CustomEvent:W.i,DeviceMotionEvent:W.i,DeviceOrientationEvent:W.i,ErrorEvent:W.i,ExtendableEvent:W.i,ExtendableMessageEvent:W.i,FetchEvent:W.i,FontFaceSetLoadEvent:W.i,ForeignFetchEvent:W.i,GamepadEvent:W.i,HashChangeEvent:W.i,InstallEvent:W.i,MediaEncryptedEvent:W.i,MediaKeyMessageEvent:W.i,MediaQueryListEvent:W.i,MediaStreamEvent:W.i,MediaStreamTrackEvent:W.i,MessageEvent:W.i,MIDIConnectionEvent:W.i,MIDIMessageEvent:W.i,MutationEvent:W.i,NotificationEvent:W.i,PageTransitionEvent:W.i,PaymentRequestEvent:W.i,PaymentRequestUpdateEvent:W.i,PopStateEvent:W.i,PresentationConnectionAvailableEvent:W.i,PresentationConnectionCloseEvent:W.i,ProgressEvent:W.i,PromiseRejectionEvent:W.i,PushEvent:W.i,RTCDataChannelEvent:W.i,RTCDTMFToneChangeEvent:W.i,RTCPeerConnectionIceEvent:W.i,RTCTrackEvent:W.i,SecurityPolicyViolationEvent:W.i,SensorErrorEvent:W.i,SpeechRecognitionError:W.i,SpeechRecognitionEvent:W.i,SpeechSynthesisEvent:W.i,StorageEvent:W.i,SyncEvent:W.i,TrackEvent:W.i,TransitionEvent:W.i,WebKitTransitionEvent:W.i,VRDeviceEvent:W.i,VRDisplayEvent:W.i,VRSessionEvent:W.i,MojoInterfaceRequestEvent:W.i,ResourceProgressEvent:W.i,USBConnectionEvent:W.i,IDBVersionChangeEvent:W.i,AudioProcessingEvent:W.i,OfflineAudioCompletionEvent:W.i,WebGLContextEvent:W.i,Event:W.i,InputEvent:W.i,AbsoluteOrientationSensor:W.d,Accelerometer:W.d,AccessibleNode:W.d,AmbientLightSensor:W.d,Animation:W.d,ApplicationCache:W.d,DOMApplicationCache:W.d,OfflineResourceList:W.d,BackgroundFetchRegistration:W.d,BatteryManager:W.d,BroadcastChannel:W.d,CanvasCaptureMediaStreamTrack:W.d,DedicatedWorkerGlobalScope:W.d,EventSource:W.d,FileReader:W.d,FontFaceSet:W.d,Gyroscope:W.d,XMLHttpRequest:W.d,XMLHttpRequestEventTarget:W.d,XMLHttpRequestUpload:W.d,LinearAccelerationSensor:W.d,Magnetometer:W.d,MediaDevices:W.d,MediaKeySession:W.d,MediaQueryList:W.d,MediaRecorder:W.d,MediaSource:W.d,MediaStream:W.d,MediaStreamTrack:W.d,MessagePort:W.d,MIDIAccess:W.d,MIDIInput:W.d,MIDIOutput:W.d,MIDIPort:W.d,NetworkInformation:W.d,Notification:W.d,OffscreenCanvas:W.d,OrientationSensor:W.d,PaymentRequest:W.d,Performance:W.d,PermissionStatus:W.d,PresentationAvailability:W.d,PresentationConnection:W.d,PresentationConnectionList:W.d,PresentationRequest:W.d,RelativeOrientationSensor:W.d,RemotePlayback:W.d,RTCDataChannel:W.d,DataChannel:W.d,RTCDTMFSender:W.d,RTCPeerConnection:W.d,webkitRTCPeerConnection:W.d,mozRTCPeerConnection:W.d,ScreenOrientation:W.d,Sensor:W.d,ServiceWorker:W.d,ServiceWorkerContainer:W.d,ServiceWorkerGlobalScope:W.d,ServiceWorkerRegistration:W.d,SharedWorker:W.d,SharedWorkerGlobalScope:W.d,SpeechRecognition:W.d,SpeechSynthesis:W.d,SpeechSynthesisUtterance:W.d,VR:W.d,VRDevice:W.d,VRDisplay:W.d,VRSession:W.d,VisualViewport:W.d,WebSocket:W.d,Worker:W.d,WorkerGlobalScope:W.d,WorkerPerformance:W.d,BluetoothDevice:W.d,BluetoothRemoteGATTCharacteristic:W.d,Clipboard:W.d,MojoInterfaceInterceptor:W.d,USB:W.d,IDBDatabase:W.d,IDBOpenDBRequest:W.d,IDBVersionChangeRequest:W.d,IDBRequest:W.d,IDBTransaction:W.d,AnalyserNode:W.d,RealtimeAnalyserNode:W.d,AudioBufferSourceNode:W.d,AudioDestinationNode:W.d,AudioNode:W.d,AudioScheduledSourceNode:W.d,AudioWorkletNode:W.d,BiquadFilterNode:W.d,ChannelMergerNode:W.d,AudioChannelMerger:W.d,ChannelSplitterNode:W.d,AudioChannelSplitter:W.d,ConstantSourceNode:W.d,ConvolverNode:W.d,DelayNode:W.d,DynamicsCompressorNode:W.d,GainNode:W.d,AudioGainNode:W.d,IIRFilterNode:W.d,MediaElementAudioSourceNode:W.d,MediaStreamAudioDestinationNode:W.d,MediaStreamAudioSourceNode:W.d,OscillatorNode:W.d,Oscillator:W.d,PannerNode:W.d,AudioPannerNode:W.d,webkitAudioPannerNode:W.d,ScriptProcessorNode:W.d,JavaScriptAudioNode:W.d,StereoPannerNode:W.d,WaveShaperNode:W.d,EventTarget:W.d,File:W.aI,FileList:W.eM,FileWriter:W.eN,HTMLFormElement:W.eR,Gamepad:W.aJ,History:W.eU,HTMLCollection:W.bH,HTMLFormControlsCollection:W.bH,HTMLOptionsCollection:W.bH,ImageData:W.aK,HTMLImageElement:W.bI,KeyboardEvent:W.bi,Location:W.f6,MediaList:W.fq,MIDIInputMap:W.fr,MIDIOutputMap:W.ft,MimeType:W.aP,MimeTypeArray:W.fv,PointerEvent:W.an,MouseEvent:W.an,DragEvent:W.an,Document:W.F,DocumentFragment:W.F,HTMLDocument:W.F,ShadowRoot:W.F,XMLDocument:W.F,Attr:W.F,DocumentType:W.F,Node:W.F,NodeList:W.cL,RadioNodeList:W.cL,Plugin:W.aS,PluginArray:W.fL,RTCStatsReport:W.fU,HTMLSelectElement:W.fX,SourceBuffer:W.aT,SourceBufferList:W.h7,SpeechGrammar:W.aU,SpeechGrammarList:W.h8,SpeechRecognitionResult:W.aV,Storage:W.hd,CSSStyleSheet:W.az,StyleSheet:W.az,TextTrack:W.aX,TextTrackCue:W.aA,VTTCue:W.aA,TextTrackCueList:W.hj,TextTrackList:W.hk,TimeRanges:W.hs,Touch:W.b_,TouchEvent:W.bo,TouchList:W.hv,TrackDefaultList:W.hw,CompositionEvent:W.b0,FocusEvent:W.b0,TextEvent:W.b0,UIEvent:W.b0,URL:W.hL,VideoTrackList:W.i2,WheelEvent:W.b5,Window:W.c0,DOMWindow:W.c0,CSSRuleList:W.ib,ClientRect:W.dg,DOMRect:W.dg,GamepadList:W.ie,NamedNodeMap:W.dz,MozNamedAttrMap:W.dz,SpeechRecognitionResultList:W.iq,StyleSheetList:W.ir,SVGLength:P.bj,SVGLengthList:P.f1,SVGNumber:P.bl,SVGNumberList:P.fH,SVGPointList:P.fO,SVGStringList:P.hg,SVGAElement:P.k,SVGAnimateElement:P.k,SVGAnimateMotionElement:P.k,SVGAnimateTransformElement:P.k,SVGAnimationElement:P.k,SVGCircleElement:P.k,SVGClipPathElement:P.k,SVGDefsElement:P.k,SVGDescElement:P.k,SVGDiscardElement:P.k,SVGEllipseElement:P.k,SVGFEBlendElement:P.k,SVGFEColorMatrixElement:P.k,SVGFEComponentTransferElement:P.k,SVGFECompositeElement:P.k,SVGFEConvolveMatrixElement:P.k,SVGFEDiffuseLightingElement:P.k,SVGFEDisplacementMapElement:P.k,SVGFEDistantLightElement:P.k,SVGFEFloodElement:P.k,SVGFEFuncAElement:P.k,SVGFEFuncBElement:P.k,SVGFEFuncGElement:P.k,SVGFEFuncRElement:P.k,SVGFEGaussianBlurElement:P.k,SVGFEImageElement:P.k,SVGFEMergeElement:P.k,SVGFEMergeNodeElement:P.k,SVGFEMorphologyElement:P.k,SVGFEOffsetElement:P.k,SVGFEPointLightElement:P.k,SVGFESpecularLightingElement:P.k,SVGFESpotLightElement:P.k,SVGFETileElement:P.k,SVGFETurbulenceElement:P.k,SVGFilterElement:P.k,SVGForeignObjectElement:P.k,SVGGElement:P.k,SVGGeometryElement:P.k,SVGGraphicsElement:P.k,SVGImageElement:P.k,SVGLineElement:P.k,SVGLinearGradientElement:P.k,SVGMarkerElement:P.k,SVGMaskElement:P.k,SVGMetadataElement:P.k,SVGPathElement:P.k,SVGPatternElement:P.k,SVGPolygonElement:P.k,SVGPolylineElement:P.k,SVGRadialGradientElement:P.k,SVGRectElement:P.k,SVGScriptElement:P.k,SVGSetElement:P.k,SVGStopElement:P.k,SVGStyleElement:P.k,SVGElement:P.k,SVGSVGElement:P.k,SVGSwitchElement:P.k,SVGSymbolElement:P.k,SVGTSpanElement:P.k,SVGTextContentElement:P.k,SVGTextElement:P.k,SVGTextPathElement:P.k,SVGTextPositioningElement:P.k,SVGTitleElement:P.k,SVGUseElement:P.k,SVGViewElement:P.k,SVGGradientElement:P.k,SVGComponentTransferFunctionElement:P.k,SVGFEDropShadowElement:P.k,SVGMPathElement:P.k,SVGTransform:P.bp,SVGTransformList:P.hx,AudioBuffer:P.ee,AudioParamMap:P.ef,AudioTrackList:P.eh,AudioContext:P.bb,webkitAudioContext:P.bb,BaseAudioContext:P.bb,OfflineAudioContext:P.fI,WebGL2RenderingContext:P.cS,SQLResultSetRowList:P.ha})
hunkHelpers.setOrUpdateLeafTags({ArrayBuffer:true,AnimationEffectReadOnly:true,AnimationEffectTiming:true,AnimationEffectTimingReadOnly:true,AnimationTimeline:true,AnimationWorkletGlobalScope:true,AuthenticatorAssertionResponse:true,AuthenticatorAttestationResponse:true,AuthenticatorResponse:true,BackgroundFetchFetch:true,BackgroundFetchManager:true,BackgroundFetchSettledFetch:true,BarProp:true,BarcodeDetector:true,BluetoothRemoteGATTDescriptor:true,Body:true,BudgetState:true,CacheStorage:true,CanvasGradient:true,CanvasPattern:true,CanvasRenderingContext2D:true,Client:true,Clients:true,CookieStore:true,Coordinates:true,Credential:true,CredentialUserData:true,CredentialsContainer:true,Crypto:true,CryptoKey:true,CSS:true,CSSVariableReferenceValue:true,CustomElementRegistry:true,DataTransfer:true,DataTransferItem:true,DeprecatedStorageInfo:true,DeprecatedStorageQuota:true,DeprecationReport:true,DetectedBarcode:true,DetectedFace:true,DetectedText:true,DeviceAcceleration:true,DeviceRotationRate:true,DirectoryEntry:true,DirectoryReader:true,DocumentOrShadowRoot:true,DocumentTimeline:true,DOMError:true,DOMImplementation:true,Iterator:true,DOMMatrix:true,DOMMatrixReadOnly:true,DOMParser:true,DOMPoint:true,DOMPointReadOnly:true,DOMQuad:true,DOMStringMap:true,Entry:true,External:true,FaceDetector:true,FederatedCredential:true,FileEntry:true,DOMFileSystem:true,FontFace:true,FontFaceSource:true,FormData:true,GamepadButton:true,GamepadPose:true,Geolocation:true,Position:true,Headers:true,HTMLHyperlinkElementUtils:true,IdleDeadline:true,ImageBitmap:true,ImageBitmapRenderingContext:true,ImageCapture:true,InputDeviceCapabilities:true,IntersectionObserver:true,IntersectionObserverEntry:true,InterventionReport:true,KeyframeEffect:true,KeyframeEffectReadOnly:true,MediaCapabilities:true,MediaCapabilitiesInfo:true,MediaDeviceInfo:true,MediaError:true,MediaKeyStatusMap:true,MediaKeySystemAccess:true,MediaKeys:true,MediaKeysPolicy:true,MediaMetadata:true,MediaSession:true,MediaSettingsRange:true,MemoryInfo:true,MessageChannel:true,Metadata:true,MutationObserver:true,WebKitMutationObserver:true,MutationRecord:true,NavigationPreloadManager:true,Navigator:true,NavigatorAutomationInformation:true,NavigatorConcurrentHardware:true,NavigatorCookies:true,NavigatorUserMediaError:true,NodeFilter:true,NodeIterator:true,NonDocumentTypeChildNode:true,NonElementParentNode:true,NoncedElement:true,OffscreenCanvasRenderingContext2D:true,OverconstrainedError:true,PaintRenderingContext2D:true,PaintSize:true,PaintWorkletGlobalScope:true,PasswordCredential:true,Path2D:true,PaymentAddress:true,PaymentInstruments:true,PaymentManager:true,PaymentResponse:true,PerformanceEntry:true,PerformanceLongTaskTiming:true,PerformanceMark:true,PerformanceMeasure:true,PerformanceNavigation:true,PerformanceNavigationTiming:true,PerformanceObserver:true,PerformanceObserverEntryList:true,PerformancePaintTiming:true,PerformanceResourceTiming:true,PerformanceServerTiming:true,PerformanceTiming:true,Permissions:true,PhotoCapabilities:true,PositionError:true,Presentation:true,PresentationReceiver:true,PublicKeyCredential:true,PushManager:true,PushMessageData:true,PushSubscription:true,PushSubscriptionOptions:true,Range:true,RelatedApplication:true,ReportBody:true,ReportingObserver:true,ResizeObserver:true,ResizeObserverEntry:true,RTCCertificate:true,RTCIceCandidate:true,mozRTCIceCandidate:true,RTCLegacyStatsReport:true,RTCRtpContributingSource:true,RTCRtpReceiver:true,RTCRtpSender:true,RTCSessionDescription:true,mozRTCSessionDescription:true,RTCStatsResponse:true,Screen:true,ScrollState:true,ScrollTimeline:true,Selection:true,SharedArrayBuffer:true,SpeechRecognitionAlternative:true,SpeechSynthesisVoice:true,StaticRange:true,StorageManager:true,StyleMedia:true,StylePropertyMap:true,StylePropertyMapReadonly:true,SyncManager:true,TaskAttributionTiming:true,TextDetector:true,TextMetrics:true,TrackDefault:true,TreeWalker:true,TrustedHTML:true,TrustedScriptURL:true,TrustedURL:true,UnderlyingSourceBase:true,URLSearchParams:true,VRCoordinateSystem:true,VRDisplayCapabilities:true,VREyeParameters:true,VRFrameData:true,VRFrameOfReference:true,VRPose:true,VRStageBounds:true,VRStageBoundsPoint:true,VRStageParameters:true,ValidityState:true,VideoPlaybackQuality:true,VideoTrack:true,VTTRegion:true,WindowClient:true,WorkletAnimation:true,WorkletGlobalScope:true,XPathEvaluator:true,XPathExpression:true,XPathNSResolver:true,XPathResult:true,XMLSerializer:true,XSLTProcessor:true,Bluetooth:true,BluetoothCharacteristicProperties:true,BluetoothRemoteGATTServer:true,BluetoothRemoteGATTService:true,BluetoothUUID:true,BudgetService:true,Cache:true,DOMFileSystemSync:true,DirectoryEntrySync:true,DirectoryReaderSync:true,EntrySync:true,FileEntrySync:true,FileReaderSync:true,FileWriterSync:true,HTMLAllCollection:true,Mojo:true,MojoHandle:true,MojoWatcher:true,NFC:true,PagePopupController:true,Report:true,Request:true,Response:true,SubtleCrypto:true,USBAlternateInterface:true,USBConfiguration:true,USBDevice:true,USBEndpoint:true,USBInTransferResult:true,USBInterface:true,USBIsochronousInTransferPacket:true,USBIsochronousInTransferResult:true,USBIsochronousOutTransferPacket:true,USBIsochronousOutTransferResult:true,USBOutTransferResult:true,WorkerLocation:true,WorkerNavigator:true,Worklet:true,IDBCursor:true,IDBCursorWithValue:true,IDBFactory:true,IDBIndex:true,IDBKeyRange:true,IDBObjectStore:true,IDBObservation:true,IDBObserver:true,IDBObserverChanges:true,SVGAngle:true,SVGAnimatedAngle:true,SVGAnimatedBoolean:true,SVGAnimatedEnumeration:true,SVGAnimatedInteger:true,SVGAnimatedLength:true,SVGAnimatedLengthList:true,SVGAnimatedNumber:true,SVGAnimatedNumberList:true,SVGAnimatedPreserveAspectRatio:true,SVGAnimatedRect:true,SVGAnimatedString:true,SVGAnimatedTransformList:true,SVGMatrix:true,SVGPoint:true,SVGPreserveAspectRatio:true,SVGRect:true,SVGUnitTypes:true,AudioListener:true,AudioParam:true,AudioTrack:true,AudioWorkletGlobalScope:true,AudioWorkletProcessor:true,PeriodicWave:true,WebGLActiveInfo:true,ANGLEInstancedArrays:true,ANGLE_instanced_arrays:true,WebGLBuffer:true,WebGLCanvas:true,WebGLColorBufferFloat:true,WebGLCompressedTextureASTC:true,WebGLCompressedTextureATC:true,WEBGL_compressed_texture_atc:true,WebGLCompressedTextureETC1:true,WEBGL_compressed_texture_etc1:true,WebGLCompressedTextureETC:true,WebGLCompressedTexturePVRTC:true,WEBGL_compressed_texture_pvrtc:true,WebGLCompressedTextureS3TC:true,WEBGL_compressed_texture_s3tc:true,WebGLCompressedTextureS3TCsRGB:true,WebGLDebugRendererInfo:true,WEBGL_debug_renderer_info:true,WebGLDebugShaders:true,WEBGL_debug_shaders:true,WebGLDepthTexture:true,WEBGL_depth_texture:true,WebGLDrawBuffers:true,WEBGL_draw_buffers:true,EXTsRGB:true,EXT_sRGB:true,EXTBlendMinMax:true,EXT_blend_minmax:true,EXTColorBufferFloat:true,EXTColorBufferHalfFloat:true,EXTDisjointTimerQuery:true,EXTDisjointTimerQueryWebGL2:true,EXTFragDepth:true,EXT_frag_depth:true,EXTShaderTextureLOD:true,EXT_shader_texture_lod:true,EXTTextureFilterAnisotropic:true,EXT_texture_filter_anisotropic:true,WebGLFramebuffer:true,WebGLGetBufferSubDataAsync:true,WebGLLoseContext:true,WebGLExtensionLoseContext:true,WEBGL_lose_context:true,OESElementIndexUint:true,OES_element_index_uint:true,OESStandardDerivatives:true,OES_standard_derivatives:true,OESTextureFloat:true,OES_texture_float:true,OESTextureFloatLinear:true,OES_texture_float_linear:true,OESTextureHalfFloat:true,OES_texture_half_float:true,OESTextureHalfFloatLinear:true,OES_texture_half_float_linear:true,OESVertexArrayObject:true,OES_vertex_array_object:true,WebGLProgram:true,WebGLQuery:true,WebGLRenderbuffer:true,WebGLRenderingContext:true,WebGLSampler:true,WebGLShader:true,WebGLShaderPrecisionFormat:true,WebGLSync:true,WebGLTexture:true,WebGLTimerQueryEXT:true,WebGLTransformFeedback:true,WebGLUniformLocation:true,WebGLVertexArrayObject:true,WebGLVertexArrayObjectOES:true,WebGL:true,WebGL2RenderingContextBase:true,Database:true,SQLError:true,SQLResultSet:true,SQLTransaction:true,DataView:true,ArrayBufferView:false,Float32Array:true,Float64Array:true,Int16Array:true,Int32Array:true,Int8Array:true,Uint16Array:true,Uint32Array:true,Uint8ClampedArray:true,CanvasPixelArray:true,Uint8Array:false,HTMLAudioElement:true,HTMLBRElement:true,HTMLBaseElement:true,HTMLBodyElement:true,HTMLButtonElement:true,HTMLContentElement:true,HTMLDListElement:true,HTMLDataElement:true,HTMLDataListElement:true,HTMLDetailsElement:true,HTMLDialogElement:true,HTMLDivElement:true,HTMLEmbedElement:true,HTMLFieldSetElement:true,HTMLHRElement:true,HTMLHeadElement:true,HTMLHeadingElement:true,HTMLHtmlElement:true,HTMLIFrameElement:true,HTMLInputElement:true,HTMLLIElement:true,HTMLLabelElement:true,HTMLLegendElement:true,HTMLLinkElement:true,HTMLMapElement:true,HTMLMediaElement:true,HTMLMenuElement:true,HTMLMetaElement:true,HTMLMeterElement:true,HTMLModElement:true,HTMLOListElement:true,HTMLObjectElement:true,HTMLOptGroupElement:true,HTMLOptionElement:true,HTMLOutputElement:true,HTMLParagraphElement:true,HTMLParamElement:true,HTMLPictureElement:true,HTMLPreElement:true,HTMLProgressElement:true,HTMLQuoteElement:true,HTMLScriptElement:true,HTMLShadowElement:true,HTMLSlotElement:true,HTMLSourceElement:true,HTMLSpanElement:true,HTMLStyleElement:true,HTMLTableCaptionElement:true,HTMLTableCellElement:true,HTMLTableDataCellElement:true,HTMLTableHeaderCellElement:true,HTMLTableColElement:true,HTMLTableElement:true,HTMLTableRowElement:true,HTMLTableSectionElement:true,HTMLTemplateElement:true,HTMLTextAreaElement:true,HTMLTimeElement:true,HTMLTitleElement:true,HTMLTrackElement:true,HTMLUListElement:true,HTMLUnknownElement:true,HTMLVideoElement:true,HTMLDirectoryElement:true,HTMLFontElement:true,HTMLFrameElement:true,HTMLFrameSetElement:true,HTMLMarqueeElement:true,HTMLElement:false,AccessibleNodeList:true,HTMLAnchorElement:true,HTMLAreaElement:true,Blob:false,HTMLCanvasElement:true,CDATASection:true,CharacterData:true,Comment:true,ProcessingInstruction:true,Text:true,CSSPerspective:true,CSSCharsetRule:true,CSSConditionRule:true,CSSFontFaceRule:true,CSSGroupingRule:true,CSSImportRule:true,CSSKeyframeRule:true,MozCSSKeyframeRule:true,WebKitCSSKeyframeRule:true,CSSKeyframesRule:true,MozCSSKeyframesRule:true,WebKitCSSKeyframesRule:true,CSSMediaRule:true,CSSNamespaceRule:true,CSSPageRule:true,CSSRule:true,CSSStyleRule:true,CSSSupportsRule:true,CSSViewportRule:true,CSSStyleDeclaration:true,MSStyleCSSProperties:true,CSS2Properties:true,CSSImageValue:true,CSSKeywordValue:true,CSSNumericValue:true,CSSPositionValue:true,CSSResourceValue:true,CSSUnitValue:true,CSSURLImageValue:true,CSSStyleValue:false,CSSMatrixComponent:true,CSSRotation:true,CSSScale:true,CSSSkew:true,CSSTranslation:true,CSSTransformComponent:false,CSSTransformValue:true,CSSUnparsedValue:true,DataTransferItemList:true,DOMException:true,ClientRectList:true,DOMRectList:true,DOMRectReadOnly:false,DOMStringList:true,DOMTokenList:true,Element:false,AbortPaymentEvent:true,AnimationEvent:true,AnimationPlaybackEvent:true,ApplicationCacheErrorEvent:true,BackgroundFetchClickEvent:true,BackgroundFetchEvent:true,BackgroundFetchFailEvent:true,BackgroundFetchedEvent:true,BeforeInstallPromptEvent:true,BeforeUnloadEvent:true,BlobEvent:true,CanMakePaymentEvent:true,ClipboardEvent:true,CloseEvent:true,CustomEvent:true,DeviceMotionEvent:true,DeviceOrientationEvent:true,ErrorEvent:true,ExtendableEvent:true,ExtendableMessageEvent:true,FetchEvent:true,FontFaceSetLoadEvent:true,ForeignFetchEvent:true,GamepadEvent:true,HashChangeEvent:true,InstallEvent:true,MediaEncryptedEvent:true,MediaKeyMessageEvent:true,MediaQueryListEvent:true,MediaStreamEvent:true,MediaStreamTrackEvent:true,MessageEvent:true,MIDIConnectionEvent:true,MIDIMessageEvent:true,MutationEvent:true,NotificationEvent:true,PageTransitionEvent:true,PaymentRequestEvent:true,PaymentRequestUpdateEvent:true,PopStateEvent:true,PresentationConnectionAvailableEvent:true,PresentationConnectionCloseEvent:true,ProgressEvent:true,PromiseRejectionEvent:true,PushEvent:true,RTCDataChannelEvent:true,RTCDTMFToneChangeEvent:true,RTCPeerConnectionIceEvent:true,RTCTrackEvent:true,SecurityPolicyViolationEvent:true,SensorErrorEvent:true,SpeechRecognitionError:true,SpeechRecognitionEvent:true,SpeechSynthesisEvent:true,StorageEvent:true,SyncEvent:true,TrackEvent:true,TransitionEvent:true,WebKitTransitionEvent:true,VRDeviceEvent:true,VRDisplayEvent:true,VRSessionEvent:true,MojoInterfaceRequestEvent:true,ResourceProgressEvent:true,USBConnectionEvent:true,IDBVersionChangeEvent:true,AudioProcessingEvent:true,OfflineAudioCompletionEvent:true,WebGLContextEvent:true,Event:false,InputEvent:false,AbsoluteOrientationSensor:true,Accelerometer:true,AccessibleNode:true,AmbientLightSensor:true,Animation:true,ApplicationCache:true,DOMApplicationCache:true,OfflineResourceList:true,BackgroundFetchRegistration:true,BatteryManager:true,BroadcastChannel:true,CanvasCaptureMediaStreamTrack:true,DedicatedWorkerGlobalScope:true,EventSource:true,FileReader:true,FontFaceSet:true,Gyroscope:true,XMLHttpRequest:true,XMLHttpRequestEventTarget:true,XMLHttpRequestUpload:true,LinearAccelerationSensor:true,Magnetometer:true,MediaDevices:true,MediaKeySession:true,MediaQueryList:true,MediaRecorder:true,MediaSource:true,MediaStream:true,MediaStreamTrack:true,MessagePort:true,MIDIAccess:true,MIDIInput:true,MIDIOutput:true,MIDIPort:true,NetworkInformation:true,Notification:true,OffscreenCanvas:true,OrientationSensor:true,PaymentRequest:true,Performance:true,PermissionStatus:true,PresentationAvailability:true,PresentationConnection:true,PresentationConnectionList:true,PresentationRequest:true,RelativeOrientationSensor:true,RemotePlayback:true,RTCDataChannel:true,DataChannel:true,RTCDTMFSender:true,RTCPeerConnection:true,webkitRTCPeerConnection:true,mozRTCPeerConnection:true,ScreenOrientation:true,Sensor:true,ServiceWorker:true,ServiceWorkerContainer:true,ServiceWorkerGlobalScope:true,ServiceWorkerRegistration:true,SharedWorker:true,SharedWorkerGlobalScope:true,SpeechRecognition:true,SpeechSynthesis:true,SpeechSynthesisUtterance:true,VR:true,VRDevice:true,VRDisplay:true,VRSession:true,VisualViewport:true,WebSocket:true,Worker:true,WorkerGlobalScope:true,WorkerPerformance:true,BluetoothDevice:true,BluetoothRemoteGATTCharacteristic:true,Clipboard:true,MojoInterfaceInterceptor:true,USB:true,IDBDatabase:true,IDBOpenDBRequest:true,IDBVersionChangeRequest:true,IDBRequest:true,IDBTransaction:true,AnalyserNode:true,RealtimeAnalyserNode:true,AudioBufferSourceNode:true,AudioDestinationNode:true,AudioNode:true,AudioScheduledSourceNode:true,AudioWorkletNode:true,BiquadFilterNode:true,ChannelMergerNode:true,AudioChannelMerger:true,ChannelSplitterNode:true,AudioChannelSplitter:true,ConstantSourceNode:true,ConvolverNode:true,DelayNode:true,DynamicsCompressorNode:true,GainNode:true,AudioGainNode:true,IIRFilterNode:true,MediaElementAudioSourceNode:true,MediaStreamAudioDestinationNode:true,MediaStreamAudioSourceNode:true,OscillatorNode:true,Oscillator:true,PannerNode:true,AudioPannerNode:true,webkitAudioPannerNode:true,ScriptProcessorNode:true,JavaScriptAudioNode:true,StereoPannerNode:true,WaveShaperNode:true,EventTarget:false,File:true,FileList:true,FileWriter:true,HTMLFormElement:true,Gamepad:true,History:true,HTMLCollection:true,HTMLFormControlsCollection:true,HTMLOptionsCollection:true,ImageData:true,HTMLImageElement:true,KeyboardEvent:true,Location:true,MediaList:true,MIDIInputMap:true,MIDIOutputMap:true,MimeType:true,MimeTypeArray:true,PointerEvent:true,MouseEvent:false,DragEvent:false,Document:true,DocumentFragment:true,HTMLDocument:true,ShadowRoot:true,XMLDocument:true,Attr:true,DocumentType:true,Node:false,NodeList:true,RadioNodeList:true,Plugin:true,PluginArray:true,RTCStatsReport:true,HTMLSelectElement:true,SourceBuffer:true,SourceBufferList:true,SpeechGrammar:true,SpeechGrammarList:true,SpeechRecognitionResult:true,Storage:true,CSSStyleSheet:true,StyleSheet:true,TextTrack:true,TextTrackCue:true,VTTCue:true,TextTrackCueList:true,TextTrackList:true,TimeRanges:true,Touch:true,TouchEvent:true,TouchList:true,TrackDefaultList:true,CompositionEvent:true,FocusEvent:true,TextEvent:true,UIEvent:false,URL:true,VideoTrackList:true,WheelEvent:true,Window:true,DOMWindow:true,CSSRuleList:true,ClientRect:true,DOMRect:true,GamepadList:true,NamedNodeMap:true,MozNamedAttrMap:true,SpeechRecognitionResultList:true,StyleSheetList:true,SVGLength:true,SVGLengthList:true,SVGNumber:true,SVGNumberList:true,SVGPointList:true,SVGStringList:true,SVGAElement:true,SVGAnimateElement:true,SVGAnimateMotionElement:true,SVGAnimateTransformElement:true,SVGAnimationElement:true,SVGCircleElement:true,SVGClipPathElement:true,SVGDefsElement:true,SVGDescElement:true,SVGDiscardElement:true,SVGEllipseElement:true,SVGFEBlendElement:true,SVGFEColorMatrixElement:true,SVGFEComponentTransferElement:true,SVGFECompositeElement:true,SVGFEConvolveMatrixElement:true,SVGFEDiffuseLightingElement:true,SVGFEDisplacementMapElement:true,SVGFEDistantLightElement:true,SVGFEFloodElement:true,SVGFEFuncAElement:true,SVGFEFuncBElement:true,SVGFEFuncGElement:true,SVGFEFuncRElement:true,SVGFEGaussianBlurElement:true,SVGFEImageElement:true,SVGFEMergeElement:true,SVGFEMergeNodeElement:true,SVGFEMorphologyElement:true,SVGFEOffsetElement:true,SVGFEPointLightElement:true,SVGFESpecularLightingElement:true,SVGFESpotLightElement:true,SVGFETileElement:true,SVGFETurbulenceElement:true,SVGFilterElement:true,SVGForeignObjectElement:true,SVGGElement:true,SVGGeometryElement:true,SVGGraphicsElement:true,SVGImageElement:true,SVGLineElement:true,SVGLinearGradientElement:true,SVGMarkerElement:true,SVGMaskElement:true,SVGMetadataElement:true,SVGPathElement:true,SVGPatternElement:true,SVGPolygonElement:true,SVGPolylineElement:true,SVGRadialGradientElement:true,SVGRectElement:true,SVGScriptElement:true,SVGSetElement:true,SVGStopElement:true,SVGStyleElement:true,SVGElement:true,SVGSVGElement:true,SVGSwitchElement:true,SVGSymbolElement:true,SVGTSpanElement:true,SVGTextContentElement:true,SVGTextElement:true,SVGTextPathElement:true,SVGTextPositioningElement:true,SVGTitleElement:true,SVGUseElement:true,SVGViewElement:true,SVGGradientElement:true,SVGComponentTransferFunctionElement:true,SVGFEDropShadowElement:true,SVGMPathElement:true,SVGTransform:true,SVGTransformList:true,AudioBuffer:true,AudioParamMap:true,AudioTrackList:true,AudioContext:true,webkitAudioContext:true,BaseAudioContext:false,OfflineAudioContext:true,WebGL2RenderingContext:true,SQLResultSetRowList:true})
H.cI.$nativeSuperclassTag="ArrayBufferView"
H.c1.$nativeSuperclassTag="ArrayBufferView"
H.c2.$nativeSuperclassTag="ArrayBufferView"
H.bO.$nativeSuperclassTag="ArrayBufferView"
H.c3.$nativeSuperclassTag="ArrayBufferView"
H.c4.$nativeSuperclassTag="ArrayBufferView"
H.cJ.$nativeSuperclassTag="ArrayBufferView"
W.c5.$nativeSuperclassTag="EventTarget"
W.c6.$nativeSuperclassTag="EventTarget"
W.c7.$nativeSuperclassTag="EventTarget"
W.c8.$nativeSuperclassTag="EventTarget"})()
convertAllToFastObject(w)
convertToFastObject($);(function(a){if(typeof document==="undefined"){a(null)
return}if(typeof document.currentScript!='undefined'){a(document.currentScript)
return}var u=document.scripts
function onLoad(b){for(var s=0;s<u.length;++s)u[s].removeEventListener("load",onLoad,false)
a(b.target)}for(var t=0;t<u.length;++t)u[t].addEventListener("load",onLoad,false)})(function(a){v.currentScript=a
if(typeof dartMainRunner==="function")dartMainRunner(S.ke,[])
else S.ke([])})})()
//# sourceMappingURL=test.dart.js.map
